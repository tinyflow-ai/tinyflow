var ff = Object.defineProperty;
var Ia = (e) => {
  throw TypeError(e);
};
var gf = (e, t, n) => t in e ? ff(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var wt = (e, t, n) => gf(e, typeof t != "symbol" ? t + "" : t, n), ns = (e, t, n) => t.has(e) || Ia("Cannot " + n);
var lt = (e, t, n) => (ns(e, t, "read from private field"), n ? n.call(e) : t.get(e)), tr = (e, t, n) => t.has(e) ? Ia("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Jr = (e, t, n, r) => (ns(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), za = (e, t, n) => (ns(e, t, "access private method"), n);
const hf = "5";
var Gl;
typeof window < "u" && ((Gl = window.__svelte ?? (window.__svelte = {})).v ?? (Gl.v = /* @__PURE__ */ new Set())).add(hf);
let Fr = !1, vf = !1;
function pf() {
  Fr = !0;
}
pf();
const Xs = 1, Ws = 2, Ul = 4, mf = 8, yf = 16, wf = 1, _f = 2, jl = 4, xf = 8, bf = 16, Jl = 1, Cf = 2, Ks = "[", qs = "[!", Gs = "]", br = {}, Tt = Symbol(), kf = "http://www.w3.org/1999/xhtml", Ef = "http://www.w3.org/2000/svg", Ra = !1, pn = 2, Ql = 4, Mi = 8, Us = 16, Ln = 32, fr = 64, ii = 128, Jt = 256, si = 512, At = 1024, In = 2048, gr = 4096, Mn = 8192, Hi = 16384, $f = 32768, Xr = 65536, Sf = 1 << 17, Pf = 1 << 19, eu = 1 << 20, ws = 1 << 21, Wn = Symbol("$state"), js = Symbol("legacy props"), Nf = Symbol("");
var Po = Array.isArray, Tf = Array.prototype.indexOf, Js = Array.from, ai = Object.keys, uo = Object.defineProperty, Hn = Object.getOwnPropertyDescriptor, tu = Object.getOwnPropertyDescriptors, Mf = Object.prototype, Hf = Array.prototype, Qs = Object.getPrototypeOf, Ba = Object.isExtensible;
function Qr(e) {
  return typeof e == "function";
}
const dt = () => {
};
function Vf(e) {
  return e();
}
function co(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const Af = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let fo = [], go = [];
function nu() {
  var e = fo;
  fo = [], co(e);
}
function ru() {
  var e = go;
  go = [], co(e);
}
function No(e) {
  fo.length === 0 && queueMicrotask(nu), fo.push(e);
}
function Df(e) {
  go.length === 0 && Af(ru), go.push(e);
}
function Ya() {
  fo.length > 0 && nu(), go.length > 0 && ru();
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
function Yf() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Zf() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ff() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ut(e, t) {
  if (typeof e != "object" || e === null || Wn in e)
    return e;
  const n = Qs(e);
  if (n !== Mf && n !== Hf)
    return e;
  var r = /* @__PURE__ */ new Map(), o = Po(e), i = _t(0), s = qe, a = (l) => {
    var u = qe;
    yn(s);
    var c;
    return c = l(), yn(u), c;
  };
  return o && r.set("length", _t(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, u, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Yf();
        var f = r.get(u);
        return f === void 0 ? (f = a(() => _t(c.value)), r.set(u, f)) : U(
          f,
          a(() => Ut(c.value))
        ), !0;
      },
      deleteProperty(l, u) {
        var c = r.get(u);
        if (c === void 0)
          u in l && r.set(
            u,
            a(() => _t(Tt))
          );
        else {
          if (o && typeof u == "string") {
            var f = (
              /** @type {Source<number>} */
              r.get("length")
            ), d = Number(u);
            Number.isInteger(d) && d < f.v && U(f, d);
          }
          U(c, Tt), Za(i);
        }
        return !0;
      },
      get(l, u, c) {
        var v;
        if (u === Wn)
          return e;
        var f = r.get(u), d = u in l;
        if (f === void 0 && (!d || (v = Hn(l, u)) != null && v.writable) && (f = a(() => _t(Ut(d ? l[u] : Tt))), r.set(u, f)), f !== void 0) {
          var g = h(f);
          return g === Tt ? void 0 : g;
        }
        return Reflect.get(l, u, c);
      },
      getOwnPropertyDescriptor(l, u) {
        var c = Reflect.getOwnPropertyDescriptor(l, u);
        if (c && "value" in c) {
          var f = r.get(u);
          f && (c.value = h(f));
        } else if (c === void 0) {
          var d = r.get(u), g = d == null ? void 0 : d.v;
          if (d !== void 0 && g !== Tt)
            return {
              enumerable: !0,
              configurable: !0,
              value: g,
              writable: !0
            };
        }
        return c;
      },
      has(l, u) {
        var g;
        if (u === Wn)
          return !0;
        var c = r.get(u), f = c !== void 0 && c.v !== Tt || Reflect.has(l, u);
        if (c !== void 0 || Ge !== null && (!f || (g = Hn(l, u)) != null && g.writable)) {
          c === void 0 && (c = a(() => _t(f ? Ut(l[u]) : Tt)), r.set(u, c));
          var d = h(c);
          if (d === Tt)
            return !1;
        }
        return f;
      },
      set(l, u, c, f) {
        var b;
        var d = r.get(u), g = u in l;
        if (o && u === "length")
          for (var v = c; v < /** @type {Source<number>} */
          d.v; v += 1) {
            var _ = r.get(v + "");
            _ !== void 0 ? U(_, Tt) : v in l && (_ = a(() => _t(Tt)), r.set(v + "", _));
          }
        d === void 0 ? (!g || (b = Hn(l, u)) != null && b.writable) && (d = a(() => _t(void 0)), U(
          d,
          a(() => Ut(c))
        ), r.set(u, d)) : (g = d.v !== Tt, U(
          d,
          a(() => Ut(c))
        ));
        var x = Reflect.getOwnPropertyDescriptor(l, u);
        if (x != null && x.set && x.set.call(f, c), !g) {
          if (o && typeof u == "string") {
            var k = (
              /** @type {Source<number>} */
              r.get("length")
            ), m = Number(u);
            Number.isInteger(m) && m >= k.v && U(k, m + 1);
          }
          Za(i);
        }
        return !0;
      },
      ownKeys(l) {
        h(i);
        var u = Reflect.ownKeys(l).filter((d) => {
          var g = r.get(d);
          return g === void 0 || g.v !== Tt;
        });
        for (var [c, f] of r)
          f.v !== Tt && !(c in l) && u.push(c);
        return u;
      },
      setPrototypeOf() {
        Zf();
      }
    }
  );
}
function Za(e, t = 1) {
  U(e, e.v + t);
}
const ho = /* @__PURE__ */ new Map();
function Mr(e, t) {
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
function _t(e, t) {
  const n = Mr(e);
  return du(n), n;
}
// @__NO_SIDE_EFFECTS__
function ne(e, t = !1) {
  var r;
  const n = Mr(e);
  return t || (n.equals = ta), Fr && Fe !== null && Fe.l !== null && ((r = Fe.l).s ?? (r.s = [])).push(n), n;
}
function U(e, t, n = !1) {
  qe !== null && !gn && Ii() && qe.f & (pn | Us) && !(Et != null && Et.includes(e)) && Ff();
  let r = n ? Ut(t) : t;
  return _s(e, r);
}
function _s(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    To ? ho.set(e, t) : ho.set(e, n), e.v = t, e.wv = gu(), iu(e, In), Ii() && Ge !== null && Ge.f & At && !(Ge.f & (Ln | fr)) && (qt === null ? qf([e]) : qt.push(e));
  }
  return t;
}
function Fa(e, t = 1) {
  var n = h(e), r = t === 1 ? n++ : n--;
  return U(e, n), r;
}
function iu(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Ii(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      a & In || !r && s === Ge || (sn(s, t), a & (At | Jt) && (a & pn ? iu(
        /** @type {Derived} */
        s,
        gr
      ) : Oi(
        /** @type {Effect} */
        s
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Hr(e) {
  var t = pn | In, n = qe !== null && qe.f & pn ? (
    /** @type {Derived} */
    qe
  ) : null;
  return Ge === null || n !== null && n.f & Jt ? t |= Jt : Ge.f |= eu, {
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
function Te(e) {
  const t = /* @__PURE__ */ Hr(e);
  return du(t), t;
}
// @__NO_SIDE_EFFECTS__
function ve(e) {
  const t = /* @__PURE__ */ Hr(e);
  return t.equals = ta, t;
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
function Xf(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & pn))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Wf(e) {
  var t, n = Ge;
  Un(Xf(e));
  try {
    su(e), t = vu(e);
  } finally {
    Un(n);
  }
  return t;
}
function au(e) {
  var t = Wf(e), n = (Fn || e.f & Jt) && e.deps !== null ? gr : At;
  sn(e, n), e.equals(t) || (e.v = t, e.wv = gu());
}
function Vi(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let ke = !1;
function Rt(e) {
  ke = e;
}
let De;
function kt(e) {
  if (e === null)
    throw Vi(), br;
  return De = e;
}
function mn() {
  return kt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Cn(De)
  );
}
function Z(e) {
  if (ke) {
    if (/* @__PURE__ */ Cn(De) !== null)
      throw Vi(), br;
    De = e;
  }
}
function Ne(e = 1) {
  if (ke) {
    for (var t = e, n = De; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Cn(n);
    De = n;
  }
}
function xs() {
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
      /* @__PURE__ */ Cn(t)
    );
    t.remove(), t = r;
  }
}
var Mt, lu, uu, cu;
function bs() {
  if (Mt === void 0) {
    Mt = window, lu = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    uu = Hn(t, "firstChild").get, cu = Hn(t, "nextSibling").get, Ba(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ba(n) && (n.__t = void 0);
  }
}
function An(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Ct(e) {
  return uu.call(e);
}
// @__NO_SIDE_EFFECTS__
function Cn(e) {
  return cu.call(e);
}
function F(e, t) {
  if (!ke)
    return /* @__PURE__ */ Ct(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ct(De)
  );
  if (n === null)
    n = De.appendChild(An());
  else if (t && n.nodeType !== 3) {
    var r = An();
    return n == null || n.before(r), kt(r), r;
  }
  return kt(n), n;
}
function we(e, t) {
  if (!ke) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ct(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Cn(n) : n;
  }
  return De;
}
function R(e, t = 1, n = !1) {
  let r = ke ? De : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Cn(r);
  if (!ke)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var s = An();
    return r === null ? o == null || o.after(s) : r.before(s), kt(s), s;
  }
  return kt(r), /** @type {TemplateNode} */
  r;
}
function na(e) {
  e.textContent = "";
}
let Jo = !1, li = !1, ui = null, or = !1, To = !1;
function Xa(e) {
  To = e;
}
let ao = [];
let qe = null, gn = !1;
function yn(e) {
  qe = e;
}
let Ge = null;
function Un(e) {
  Ge = e;
}
let Et = null;
function Kf(e) {
  Et = e;
}
function du(e) {
  qe !== null && qe.f & ws && (Et === null ? Kf([e]) : Et.push(e));
}
let xt = null, It = 0, qt = null;
function qf(e) {
  qt = e;
}
let fu = 1, ci = 0, Fn = !1;
function gu() {
  return ++fu;
}
function Wr(e) {
  var f;
  var t = e.f;
  if (t & In)
    return !0;
  if (t & gr) {
    var n = e.deps, r = (t & Jt) !== 0;
    if (n !== null) {
      var o, i, s = (t & si) !== 0, a = r && Ge !== null && !Fn, l = n.length;
      if (s || a) {
        var u = (
          /** @type {Derived} */
          e
        ), c = u.parent;
        for (o = 0; o < l; o++)
          i = n[o], (s || !((f = i == null ? void 0 : i.reactions) != null && f.includes(u))) && (i.reactions ?? (i.reactions = [])).push(u);
        s && (u.f ^= si), a && c !== null && !(c.f & Jt) && (u.f ^= Jt);
      }
      for (o = 0; o < l; o++)
        if (i = n[o], Wr(
          /** @type {Derived} */
          i
        ) && au(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!r || Ge !== null && !Fn) && sn(e, At);
  }
  return !1;
}
function Gf(e, t) {
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
  throw Jo = !1, e;
}
function Uf(e) {
  return (e.f & Hi) === 0 && (e.parent === null || (e.parent.f & ii) === 0);
}
function Ai(e, t, n, r) {
  if (Jo) {
    if (n === null && (Jo = !1), Uf(t))
      throw e;
    return;
  }
  n !== null && (Jo = !0);
  {
    Gf(e, t);
    return;
  }
}
function hu(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      Et != null && Et.includes(e) || (i.f & pn ? hu(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? sn(i, In) : i.f & At && sn(i, gr), Oi(
        /** @type {Effect} */
        i
      )));
    }
}
function vu(e) {
  var g;
  var t = xt, n = It, r = qt, o = qe, i = Fn, s = Et, a = Fe, l = gn, u = e.f;
  xt = /** @type {null | Value[]} */
  null, It = 0, qt = null, Fn = (u & Jt) !== 0 && (gn || !or || qe === null), qe = u & (Ln | fr) ? null : e, Et = null, Wa(e.ctx), gn = !1, ci++, e.f |= ws;
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
          ((g = f[d]).reactions ?? (g.reactions = [])).push(e);
    } else f !== null && It < f.length && (di(e, It), f.length = It);
    if (Ii() && qt !== null && !gn && f !== null && !(e.f & (pn | gr | In)))
      for (d = 0; d < /** @type {Source[]} */
      qt.length; d++)
        hu(
          qt[d],
          /** @type {Effect} */
          e
        );
    return o !== null && (ci++, qt !== null && (r === null ? r = qt : r.push(.../** @type {Source[]} */
    qt))), c;
  } finally {
    xt = t, It = n, qt = r, qe = o, Fn = i, Et = s, Wa(a), gn = l, e.f ^= ws;
  }
}
function jf(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Tf.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && t.f & pn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (xt === null || !xt.includes(t)) && (sn(t, gr), t.f & (Jt | si) || (t.f ^= si), su(
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
      jf(e, n[r]);
}
function Di(e) {
  var t = e.f;
  if (!(t & Hi)) {
    sn(e, At);
    var n = Ge, r = Fe, o = or;
    Ge = e, or = !0;
    try {
      t & Us ? s1(e) : wu(e), yu(e);
      var i = vu(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = fu;
      var s = e.deps, a;
      Ra && vf && e.f & In;
    } catch (l) {
      Ai(l, e, n, r || e.ctx);
    } finally {
      or = o, Ge = n;
    }
  }
}
function Jf() {
  try {
    zf();
  } catch (e) {
    if (ui !== null)
      Ai(e, ui, null);
    else
      throw e;
  }
}
function pu() {
  var e = or;
  try {
    var t = 0;
    for (or = !0; ao.length > 0; ) {
      t++ > 1e3 && Jf();
      var n = ao, r = n.length;
      ao = [];
      for (var o = 0; o < r; o++) {
        var i = e1(n[o]);
        Qf(i);
      }
    }
  } finally {
    li = !1, or = e, ui = null, ho.clear();
  }
}
function Qf(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if (!(r.f & (Hi | Mn)))
        try {
          Wr(r) && (Di(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? _u(r) : r.fn = null));
        } catch (o) {
          Ai(o, r, null, r.ctx);
        }
    }
}
function Oi(e) {
  li || (li = !0, queueMicrotask(pu));
  for (var t = ui = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (fr | Ln)) {
      if (!(n & At)) return;
      t.f ^= At;
    }
  }
  ao.push(t);
}
function e1(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, o = (r & (Ln | fr)) !== 0, i = o && (r & At) !== 0;
    if (!i && !(r & Mn)) {
      if (r & Ql)
        t.push(n);
      else if (o)
        n.f ^= At;
      else {
        var s = qe;
        try {
          qe = n, Wr(n) && Di(n);
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
  for (Ya(); ao.length > 0; )
    li = !0, pu(), Ya();
  return (
    /** @type {T} */
    t
  );
}
function h(e) {
  var t = e.f, n = (t & pn) !== 0;
  if (qe !== null && !gn) {
    if (!(Et != null && Et.includes(e))) {
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
    i !== null && !(i.f & Jt) && (o.f ^= Jt);
  }
  return n && (o = /** @type {Derived} */
  e, Wr(o) && au(o)), To && ho.has(e) ? ho.get(e) : e.v;
}
function wn(e) {
  var t = gn;
  try {
    return gn = !0, e();
  } finally {
    gn = t;
  }
}
const t1 = -7169;
function sn(e, t) {
  e.f = e.f & t1 | t;
}
function j(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Wn in e)
      Cs(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Wn in n && Cs(n);
      }
  }
}
function Cs(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        Cs(e[r], t);
      } catch {
      }
    const n = Qs(e);
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
function mu(e) {
  Ge === null && qe === null && If(), qe !== null && qe.f & Jt && Ge === null && Lf(), To && Of();
}
function n1(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function hr(e, t, n, r = !0) {
  var o = Ge, i = {
    ctx: Fe,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | In,
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
      Di(i), i.f |= $f;
    } catch (l) {
      throw Qt(i), l;
    }
  else t !== null && Oi(i);
  var s = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (eu | ii)) === 0;
  if (!s && r && (o !== null && n1(i, o), qe !== null && qe.f & pn)) {
    var a = (
      /** @type {Derived} */
      qe
    );
    (a.effects ?? (a.effects = [])).push(i);
  }
  return i;
}
function ra(e) {
  const t = hr(Mi, null, !1);
  return sn(t, At), t.teardown = e, t;
}
function jn(e) {
  mu();
  var t = Ge !== null && (Ge.f & Ln) !== 0 && Fe !== null && !Fe.m;
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
function r1(e) {
  return mu(), Kr(e);
}
function o1(e) {
  const t = hr(fr, e, !0);
  return () => {
    Qt(t);
  };
}
function i1(e) {
  const t = hr(fr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Vr(t, () => {
      Qt(t), r(void 0);
    }) : (Qt(t), r(void 0));
  });
}
function zt(e) {
  return hr(Ql, e, !1);
}
function ge(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    Fe
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = Kr(() => {
    e(), !r.ran && (r.ran = !0, U(n.l.r2, !0), wn(t));
  });
}
function gt() {
  var e = (
    /** @type {ComponentContextLegacy} */
    Fe
  );
  Kr(() => {
    if (h(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        n.f & At && sn(n, gr), Wr(n) && Di(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function Kr(e) {
  return hr(Mi, e, !0);
}
function Ee(e, t = [], n = Hr) {
  const r = t.map(n);
  return vr(() => e(...r.map(h)));
}
function vr(e, t = 0) {
  return hr(Mi | Us | t, e, !0);
}
function Dn(e, t = !0) {
  return hr(Mi | Ln, e, !0, t);
}
function yu(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = To, r = qe;
    Xa(!0), yn(null);
    try {
      t.call(null);
    } finally {
      Xa(n), yn(r);
    }
  }
}
function wu(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    n.f & fr ? n.parent = null : Qt(n, t), n = r;
  }
}
function s1(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & Ln || Qt(t), t = n;
  }
}
function Qt(e, t = !0) {
  var n = !1;
  if ((t || e.f & Pf) && e.nodes_start !== null) {
    for (var r = e.nodes_start, o = e.nodes_end; r !== null; ) {
      var i = r === o ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Cn(r)
      );
      r.remove(), r = i;
    }
    n = !0;
  }
  wu(e, t && !n), di(e, 0), sn(e, Hi);
  var s = e.transitions;
  if (s !== null)
    for (const l of s)
      l.stop();
  yu(e);
  var a = e.parent;
  a !== null && a.first !== null && _u(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function _u(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Vr(e, t) {
  var n = [];
  oa(e, n, !0), xu(n, () => {
    Qt(e), t && t();
  });
}
function xu(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function oa(e, t, n) {
  if (!(e.f & Mn)) {
    if (e.f ^= Mn, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & Xr) !== 0 || (r.f & Ln) !== 0;
      oa(r, t, i ? n : !1), r = o;
    }
  }
}
function vo(e) {
  bu(e, !0);
}
function bu(e, t) {
  if (e.f & Mn) {
    e.f ^= Mn, e.f & At || (e.f ^= At), Wr(e) && (sn(e, In), Oi(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Xr) !== 0 || (n.f & Ln) !== 0;
      bu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
function Li(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let Fe = null;
function Wa(e) {
  Fe = e;
}
function sr(e) {
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
function ce(e, t = !1, n) {
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
    r2: Mr(!1)
  }), ra(() => {
    r.d = !0;
  });
}
function de(e) {
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
          Un(i.effect), yn(i.reaction), zt(i.fn);
        }
      } finally {
        Un(n), yn(r);
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
  return Fe === null && Li(), Fe.c ?? (Fe.c = new Map(l1(Fe) || void 0));
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
  ke && /* @__PURE__ */ Ct(e) !== null && na(e);
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
  yn(null), Un(null);
  try {
    return e();
  } finally {
    yn(t), Un(n);
  }
}
const Cu = /* @__PURE__ */ new Set(), ks = /* @__PURE__ */ new Set();
function ku(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || ro.call(t, i), !i.cancelBubble)
      return x1(() => n == null ? void 0 : n.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? No(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function Ze(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = ku(e, t, n, i);
  (t === document.body || t === window || t === document) && ra(() => {
    t.removeEventListener(e, s, i);
  });
}
function zi(e) {
  for (var t = 0; t < e.length; t++)
    Cu.add(e[t]);
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
    yn(null), Un(null);
    try {
      for (var d, g = []; i !== null; ) {
        var v = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var _ = i["__" + r];
          if (_ != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (Po(_)) {
              var [x, ...k] = _;
              x.apply(i, [e, ...k]);
            } else
              _.call(i, e);
        } catch (b) {
          d ? g.push(b) : d = b;
        }
        if (e.cancelBubble || v === t || v === null)
          break;
        i = v;
      }
      if (d) {
        for (let b of g)
          queueMicrotask(() => {
            throw b;
          });
        throw d;
      }
    } finally {
      e.__root = t, delete e.currentTarget, yn(c), Un(f);
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
  var n = (t & Jl) !== 0, r = (t & Cf) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (ke)
      return Vt(De, null), De;
    o === void 0 && (o = sa(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ Ct(o)));
    var s = (
      /** @type {TemplateNode} */
      r || lu ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ct(s)
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
function _e(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & Jl) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (ke)
      return Vt(De, null), De;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        sa(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ Ct(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ Ct(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ Ct(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ Ct(l);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ct(u)
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
function Re(e = "") {
  if (!ke) {
    var t = An(e + "");
    return Vt(t, t), t;
  }
  var n = De;
  return n.nodeType !== 3 && (n.before(n = An()), kt(n)), Vt(n, n), n;
}
function tt() {
  if (ke)
    return Vt(De, null), De;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = An();
  return e.append(t, n), Vt(t, n), e;
}
function L(e, t) {
  if (ke) {
    Ge.nodes_end = De, mn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Yt(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function Eu(e, t) {
  return $u(e, t);
}
function b1(e, t) {
  bs(), t.intro = t.intro ?? !1;
  const n = t.target, r = ke, o = De;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ct(n)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== Ks); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Cn(i);
    if (!i)
      throw br;
    Rt(!0), kt(
      /** @type {Comment} */
      i
    ), mn();
    const s = $u(e, { ...t, anchor: i });
    if (De === null || De.nodeType !== 8 || /** @type {Comment} */
    De.data !== Gs)
      throw Vi(), br;
    return Rt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === br)
      return t.recover === !1 && Rf(), bs(), na(n), Rt(!1), Eu(e, t);
    throw s;
  } finally {
    Rt(r), kt(o);
  }
}
const wr = /* @__PURE__ */ new Map();
function $u(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  bs();
  var a = /* @__PURE__ */ new Set(), l = (f) => {
    for (var d = 0; d < f.length; d++) {
      var g = f[d];
      if (!a.has(g)) {
        a.add(g);
        var v = v1(g);
        t.addEventListener(g, ro, { passive: v });
        var _ = wr.get(g);
        _ === void 0 ? (document.addEventListener(g, ro, { passive: v }), wr.set(g, 1)) : wr.set(g, _ + 1);
      }
    }
  };
  l(Js(Cu)), ks.add(l);
  var u = void 0, c = i1(() => {
    var f = n ?? t.appendChild(An());
    return Dn(() => {
      if (i) {
        ce({});
        var d = (
          /** @type {ComponentContext} */
          Fe
        );
        d.c = i;
      }
      o && (r.$$events = o), ke && Vt(
        /** @type {TemplateNode} */
        f,
        null
      ), u = e(f, r) || {}, ke && (Ge.nodes_end = De), i && de();
    }), () => {
      var v;
      for (var d of a) {
        t.removeEventListener(d, ro);
        var g = (
          /** @type {number} */
          wr.get(d)
        );
        --g === 0 ? (document.removeEventListener(d, ro), wr.delete(d)) : wr.set(d, g);
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
  ke && n === 0 && mn();
  var o = e, i = null, s = null, a = Tt, l = n > 0 ? Xr : 0, u = !1;
  const c = (d, g = !0) => {
    u = !0, f(g, d);
  }, f = (d, g) => {
    if (a === (a = d)) return;
    let v = !1;
    if (ke && r !== -1) {
      if (n === 0) {
        const x = (
          /** @type {Comment} */
          o.data
        );
        x === Ks ? r = 0 : x === qs ? r = 1 / 0 : (r = parseInt(x.substring(1)), r !== r && (r = a ? 1 / 0 : -1));
      }
      const _ = r > n;
      !!a === _ && (o = xs(), kt(o), Rt(!1), v = !0, r = -1);
    }
    a ? (i ? vo(i) : g && (i = Dn(() => g(o))), s && Vr(s, () => {
      s = null;
    })) : (s ? vo(s) : g && (s = Dn(() => g(o, [n + 1, r]))), i && Vr(i, () => {
      i = null;
    })), v && Rt(!0);
  };
  vr(() => {
    u = !1, t(c), u || f(null, null);
  }, l), ke && (o = De);
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
    na(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), Bn(e, t[0].prev, t[i - 1].next);
  }
  xu(o, () => {
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
    s = ke ? kt(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Ct(u)
    ) : u.appendChild(An());
  }
  ke && mn();
  var c = null, f = !1, d = /* @__PURE__ */ ve(() => {
    var g = n();
    return Po(g) ? g : g == null ? [] : Js(g);
  });
  vr(() => {
    var g = h(d), v = g.length;
    if (f && v === 0)
      return;
    f = v === 0;
    let _ = !1;
    if (ke) {
      var x = (
        /** @type {Comment} */
        s.data === qs
      );
      x !== (v === 0) && (s = xs(), kt(s), Rt(!1), _ = !0);
    }
    if (ke) {
      for (var k = null, m, b = 0; b < v; b++) {
        if (De.nodeType === 8 && /** @type {Comment} */
        De.data === Gs) {
          s = /** @type {Comment} */
          De, _ = !0, Rt(!1);
          break;
        }
        var p = g[b], C = r(p, b);
        m = Su(
          De,
          a,
          k,
          null,
          p,
          C,
          b,
          o,
          t,
          n
        ), a.items.set(C, m), k = m;
      }
      v > 0 && kt(xs());
    }
    ke || E1(g, a, s, o, t, r, n), i !== null && (v === 0 ? c ? vo(c) : c = Dn(() => i(s)) : c !== null && Vr(c, () => {
      c = null;
    })), _ && Rt(!0), h(d);
  }), ke && (s = De);
}
function E1(e, t, n, r, o, i, s) {
  var P, H, E, N;
  var a = (o & mf) !== 0, l = (o & (Xs | Ws)) !== 0, u = e.length, c = t.items, f = t.first, d = f, g, v = null, _, x = [], k = [], m, b, p, C;
  if (a)
    for (C = 0; C < u; C += 1)
      m = e[C], b = i(m, C), p = c.get(b), p !== void 0 && ((P = p.a) == null || P.measure(), (_ ?? (_ = /* @__PURE__ */ new Set())).add(p));
  for (C = 0; C < u; C += 1) {
    if (m = e[C], b = i(m, C), p = c.get(b), p === void 0) {
      var S = d ? (
        /** @type {TemplateNode} */
        d.e.nodes_start
      ) : n;
      v = Su(
        S,
        t,
        v,
        v === null ? t.first : v.next,
        m,
        b,
        C,
        r,
        o,
        s
      ), c.set(b, v), x = [], k = [], d = v.next;
      continue;
    }
    if (l && $1(p, m, C, o), p.e.f & Mn && (vo(p.e), a && ((H = p.a) == null || H.unfix(), (_ ?? (_ = /* @__PURE__ */ new Set())).delete(p))), p !== d) {
      if (g !== void 0 && g.has(p)) {
        if (x.length < k.length) {
          var $ = k[0], M;
          v = $.prev;
          var D = x[0], A = x[x.length - 1];
          for (M = 0; M < x.length; M += 1)
            qa(x[M], $, n);
          for (M = 0; M < k.length; M += 1)
            g.delete(k[M]);
          Bn(t, D.prev, A.next), Bn(t, v, D), Bn(t, A, $), d = $, v = A, C -= 1, x = [], k = [];
        } else
          g.delete(p), qa(p, d, n), Bn(t, p.prev, p.next), Bn(t, p, v === null ? t.first : v.next), Bn(t, v, p), v = p;
        continue;
      }
      for (x = [], k = []; d !== null && d.k !== b; )
        d.e.f & Mn || (g ?? (g = /* @__PURE__ */ new Set())).add(d), k.push(d), d = d.next;
      if (d === null)
        continue;
      p = d;
    }
    x.push(p), v = p, d = p.next;
  }
  if (d !== null || g !== void 0) {
    for (var V = g === void 0 ? [] : Js(g); d !== null; )
      d.e.f & Mn || V.push(d), d = d.next;
    var z = V.length;
    if (z > 0) {
      var O = o & Ul && u === 0 ? n : null;
      if (a) {
        for (C = 0; C < z; C += 1)
          (E = V[C].a) == null || E.measure();
        for (C = 0; C < z; C += 1)
          (N = V[C].a) == null || N.fix();
      }
      k1(t, V, O, c);
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
  r & Xs && _s(e.v, t), r & Ws ? _s(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Su(e, t, n, r, o, i, s, a, l, u) {
  var c = (l & Xs) !== 0, f = (l & yf) === 0, d = c ? f ? /* @__PURE__ */ ne(o) : Mr(o) : o, g = l & Ws ? Mr(s) : s, v = {
    i: g,
    v: d,
    k: i,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    return v.e = Dn(() => a(e, d, g, u), ke), v.e.prev = n && n.e, v.e.next = r && r.e, n === null ? t.first = v : (n.next = v, n.e.next = v.e), r !== null && (r.prev = v, r.e.prev = v.e), v;
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
      /* @__PURE__ */ Cn(i)
    );
    o.before(i), i = s;
  }
}
function Bn(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function aa(e, t, n, r, o) {
  var i = e, s = "", a;
  vr(() => {
    if (s === (s = t() ?? "")) {
      ke && mn();
      return;
    }
    a !== void 0 && (Qt(a), a = void 0), s !== "" && (a = Dn(() => {
      if (ke) {
        De.data;
        for (var l = mn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ Cn(l);
        if (l === null)
          throw Vi(), br;
        Vt(De, u), i = kt(l);
        return;
      }
      var c = s + "", f = sa(c);
      Vt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ct(f),
        /** @type {TemplateNode} */
        f.lastChild
      ), i.before(f);
    }));
  });
}
function pt(e, t, n, r, o) {
  var a;
  ke && mn();
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
function ar(e, t, ...n) {
  var r = e, o = dt, i;
  vr(() => {
    o !== (o = t()) && (i && (Qt(i), i = null), i = Dn(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Xr), ke && (r = De);
}
function Pu(e, t, n) {
  ke && mn();
  var r = e, o, i;
  vr(() => {
    o !== (o = t()) && (i && (Vr(i), i = null), o && (i = Dn(() => n(r, o))));
  }, Xr), ke && (r = De);
}
function P1(e, t, n, r, o, i) {
  let s = ke;
  ke && mn();
  var a, l, u = null;
  ke && De.nodeType === 1 && (u = /** @type {Element} */
  De, mn());
  var c = (
    /** @type {TemplateNode} */
    ke ? De : e
  ), f;
  vr(() => {
    const d = t() || null;
    var g = d === "svg" ? Ef : null;
    d !== a && (f && (d === null ? Vr(f, () => {
      f = null, l = null;
    }) : d === l ? vo(f) : Qt(f)), d && d !== l && (f = Dn(() => {
      if (u = ke ? (
        /** @type {Element} */
        u
      ) : g ? document.createElementNS(g, d) : document.createElement(d), Vt(u, u), r) {
        ke && m1(d) && u.append(document.createComment(""));
        var v = (
          /** @type {TemplateNode} */
          ke ? /* @__PURE__ */ Ct(u) : u.appendChild(An())
        );
        ke && (v === null ? Rt(!1) : kt(v)), r(u, v);
      }
      Ge.nodes_end = u, c.before(u);
    })), a = d, a && (l = a));
  }, Xr), s && (Rt(!0), kt(c));
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
    var r = wn(() => t(e, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      Kr(() => {
        var s = n();
        j(s), o && ea(i, s) && (i = s, r.update(s));
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
function N1() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Nu(e)) && (r && (r += " "), r += t);
  return r;
}
function kn(e) {
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
              var g = rs(e.substring(u, c).trim());
              if (!l.includes(g)) {
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
function $t(e, t, n, r, o, i) {
  var s = e.__className;
  if (ke || s !== n) {
    var a = T1(n, r, i);
    (!ke || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
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
function ft(e, t, n, r) {
  var o = e.__style;
  if (ke || o !== t) {
    var i = M1(t, r);
    (!ke || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (os(e, n == null ? void 0 : n[0], r[0]), os(e, n == null ? void 0 : n[1], r[1], "important")) : os(e, n, r));
  return r;
}
const eo = Symbol("class"), nr = Symbol("style"), Tu = Symbol("is custom element"), Mu = Symbol("is html");
function lo(e) {
  if (ke) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          pe(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          pe(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, Df(n), _1();
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
function pe(e, t, n, r) {
  var o = la(e);
  ke && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[Nf] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Hu(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function an(e, t, n, r, o = !1) {
  var i = la(e), s = i[Tu], a = !i[Mu];
  let l = ke && s;
  l && Rt(!1);
  var u = t || {}, c = e.tagName === "OPTION";
  for (var f in t)
    f in n || (n[f] = null);
  n.class ? n.class = kn(n.class) : (r || n[eo]) && (n.class = null), n[nr] && (n.style ?? (n.style = null));
  var d = Hu(e);
  for (const b in n) {
    let p = n[b];
    if (c && b === "value" && p == null) {
      e.value = e.__value = "", u[b] = p;
      continue;
    }
    if (b === "class") {
      var g = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      $t(e, g, p, r, t == null ? void 0 : t[eo], n[eo]), u[b] = p, u[eo] = n[eo];
      continue;
    }
    if (b === "style") {
      ft(e, p, t == null ? void 0 : t[nr], n[nr]), u[b] = p, u[nr] = n[nr];
      continue;
    }
    var v = u[b];
    if (p !== v) {
      u[b] = p;
      var _ = b[0] + b[1];
      if (_ !== "$$")
        if (_ === "on") {
          const C = {}, S = "$$" + b;
          let $ = b.slice(2);
          var x = d1($);
          if (u1($) && ($ = $.slice(0, -7), C.capture = !0), !x && v) {
            if (p != null) continue;
            e.removeEventListener($, u[S], C), u[S] = null;
          }
          if (p != null)
            if (x)
              e[`__${$}`] = p, zi([$]);
            else {
              let M = function(D) {
                u[b].call(this, D);
              };
              u[S] = ku($, e, M, C);
            }
          else x && (e[`__${$}`] = void 0);
        } else if (b === "style")
          pe(e, b, p);
        else if (b === "autofocus")
          y1(
            /** @type {HTMLElement} */
            e,
            !!p
          );
        else if (!s && (b === "__value" || b === "value" && p != null))
          e.value = e.__value = p;
        else if (b === "selected" && c)
          H1(
            /** @type {HTMLOptionElement} */
            e,
            p
          );
        else {
          var k = b;
          a || (k = g1(k));
          var m = k === "defaultValue" || k === "defaultChecked";
          if (p == null && !s && !m)
            if (i[b] = null, k === "value" || k === "checked") {
              let C = (
                /** @type {HTMLInputElement} */
                e
              );
              const S = t === void 0;
              if (k === "value") {
                let $ = C.defaultValue;
                C.removeAttribute(k), C.defaultValue = $, C.value = C.__value = S ? $ : null;
              } else {
                let $ = C.defaultChecked;
                C.removeAttribute(k), C.defaultChecked = $, C.checked = S ? $ : !1;
              }
            } else
              e.removeAttribute(b);
          else m || d.includes(k) && (s || typeof p != "string") ? e[k] = p : typeof p != "function" && pe(e, k, p);
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
      [Tu]: e.nodeName.includes("-"),
      [Mu]: e.namespaceURI === kf
    })
  );
}
var ja = /* @__PURE__ */ new Map();
function Hu(e) {
  var t = ja.get(e.nodeName);
  if (t) return t;
  ja.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = tu(r);
    for (var i in n)
      n[i].set && t.push(i);
    r = Qs(r);
  }
  return t;
}
var Zn, Tr, So, Ni, Vu;
const Ti = class Ti {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    tr(this, Ni);
    /** */
    tr(this, Zn, /* @__PURE__ */ new WeakMap());
    /** @type {ResizeObserver | undefined} */
    tr(this, Tr);
    /** @type {ResizeObserverOptions} */
    tr(this, So);
    Jr(this, So, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = lt(this, Zn).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), lt(this, Zn).set(t, r), za(this, Ni, Vu).call(this).observe(t, lt(this, So)), () => {
      var o = lt(this, Zn).get(t);
      o.delete(n), o.size === 0 && (lt(this, Zn).delete(t), lt(this, Tr).unobserve(t));
    };
  }
};
Zn = new WeakMap(), Tr = new WeakMap(), So = new WeakMap(), Ni = new WeakSet(), Vu = function() {
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
wt(Ti, "entries", /* @__PURE__ */ new WeakMap());
let $s = Ti;
var V1 = /* @__PURE__ */ new $s({
  box: "border-box"
});
function Ja(e, t, n) {
  var r = V1.observe(e, () => n(e[t]));
  zt(() => (wn(() => n(e[t])), r));
}
function Qa(e, t) {
  return e === t || (e == null ? void 0 : e[Wn]) === t;
}
function _n(e = {}, t, n, r) {
  return zt(() => {
    var o, i;
    return Kr(() => {
      o = i, i = [], wn(() => {
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
    const s = /* @__PURE__ */ Hr(() => {
      let a = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], a = !0);
      return a && o++, o;
    });
    r = () => h(s);
  }
  n.b.length && r1(() => {
    el(t, r), co(n.b);
  }), jn(() => {
    const o = wn(() => n.m.map(Vf));
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
    for (const n of e.l.s) h(n);
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
function Xt(e) {
  Fe === null && Li(), Fr && Fe.l !== null ? D1(Fe).m.push(e) : jn(() => {
    const t = wn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function ua(e) {
  Fe === null && Li(), Xt(() => () => wn(e));
}
function A1(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function Ri() {
  const e = Fe;
  return e === null && Li(), (t, n, r) => {
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
    return t(void 0), n && n(void 0), dt;
  const r = wn(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const _r = [];
function Kt(e, t) {
  return {
    subscribe: ye(e, t).subscribe
  };
}
function ye(e, t = dt) {
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
  function s(a, l = dt) {
    const u = [a, l];
    return r.add(u), r.size === 1 && (n = t(o, i) || dt), a(
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
  return Kt(n, (s, a) => {
    let l = !1;
    const u = [];
    let c = 0, f = dt;
    const d = () => {
      if (c)
        return;
      f();
      const v = t(r ? u[0] : u, s, a);
      i ? s(v) : f = typeof v == "function" ? v : dt;
    }, g = o.map(
      (v, _) => ca(
        v,
        (x) => {
          u[_] = x, c &= ~(1 << _), l && d();
        },
        () => {
          c |= 1 << _;
        }
      )
    );
    return l = !0, d(), function() {
      co(g), f(), l = !1;
    };
  });
}
function K(e) {
  let t;
  return ca(e, (n) => t = n)(), t;
}
let Xo = !1, Ss = Symbol();
function ee(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ ne(void 0),
    unsubscribe: dt
  });
  if (r.store !== e && !(Ss in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = dt;
    else {
      var o = !0;
      r.unsubscribe = ca(e, (i) => {
        o ? r.source.v = i : U(r.source, i);
      }), o = !1;
    }
  return e && Ss in n ? K(e) : h(r.source);
}
function O1(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = dt), e;
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
function mt(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    I1
  );
}
const z1 = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return h(e.version), t in e.special ? e.special[t]() : e.props[t];
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
  return new Proxy({ props: e, exclude: t, special: {}, version: Mr(0) }, z1);
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
    if (t === Wn || t === js) return !1;
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
  var o = (n & wf) !== 0, i = !Fr || (n & _f) !== 0, s = (n & xf) !== 0, a = (n & bf) !== 0, l = !1, u;
  s ? [u, l] = L1(() => (
    /** @type {V} */
    e[t]
  )) : u = /** @type {V} */
  e[t];
  var c = Wn in e || js in e, f = s && (((S = Hn(e, t)) == null ? void 0 : S.set) ?? (c && t in e && (($) => e[t] = $))) || void 0, d = (
    /** @type {V} */
    r
  ), g = !0, v = !1, _ = () => (v = !0, g && (g = !1, a ? d = wn(
    /** @type {() => V} */
    r
  ) : d = /** @type {V} */
  r), d);
  u === void 0 && r !== void 0 && (f && i && Bf(), u = _(), f && f(u));
  var x;
  if (i)
    x = () => {
      var $ = (
        /** @type {V} */
        e[t]
      );
      return $ === void 0 ? _() : (g = !0, v = !1, $);
    };
  else {
    var k = (o ? Hr : ve)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    k.f |= Sf, x = () => {
      var $ = h(k);
      return $ !== void 0 && (d = /** @type {V} */
      void 0), $ === void 0 ? d : $;
    };
  }
  if (!(n & jl))
    return x;
  if (f) {
    var m = e.$$legacy;
    return function($, M) {
      return arguments.length > 0 ? ((!i || !M || m || l) && f(M ? x() : $), $) : x();
    };
  }
  var b = !1, p = /* @__PURE__ */ ne(u), C = /* @__PURE__ */ Hr(() => {
    var $ = x(), M = h(p);
    return b ? (b = !1, M) : p.v = $;
  });
  return s && h(C), o || (C.equals = ta), function($, M) {
    if (arguments.length > 0) {
      const D = M ? h(C) : i && s ? Ut($) : $;
      if (!C.equals(D)) {
        if (b = !0, U(p, D), v && d !== void 0 && (d = D), tl(C))
          return $;
        wn(() => h(C));
      }
      return $;
    }
    return tl(C) ? C.v : h(C);
  };
}
function B1(e) {
  return new Y1(e);
}
var Pn, Gt;
class Y1 {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    tr(this, Pn);
    /** @type {Record<string, any>} */
    tr(this, Gt);
    var i;
    var n = /* @__PURE__ */ new Map(), r = (s, a) => {
      var l = /* @__PURE__ */ ne(a);
      return n.set(s, l), l;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, a) {
          return h(n.get(a) ?? r(a, Reflect.get(s, a)));
        },
        has(s, a) {
          return a === js ? !0 : (h(n.get(a) ?? r(a, Reflect.get(s, a))), Reflect.has(s, a));
        },
        set(s, a, l) {
          return U(n.get(a) ?? r(a, l), l), Reflect.set(s, a, l);
        }
      }
    );
    Jr(this, Gt, (t.hydrate ? b1 : Eu)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((i = t == null ? void 0 : t.props) != null && i.$$host) || t.sync === !1) && y(), Jr(this, Pn, o.$$events);
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
      C1(lt(this, Gt));
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
    lt(this, Pn)[t] = lt(this, Pn)[t] || [];
    const r = (...o) => n.call(this, ...o);
    return lt(this, Pn)[t].push(r), () => {
      lt(this, Pn)[t] = lt(this, Pn)[t].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    lt(this, Gt).$destroy();
  }
}
Pn = new WeakMap(), Gt = new WeakMap();
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
    wt(this, "$$ctor");
    /** Slots */
    wt(this, "$$s");
    /** @type {any} The Svelte component instance */
    wt(this, "$$c");
    /** Whether or not the custom element is connected */
    wt(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    wt(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    wt(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    wt(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    wt(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    wt(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    wt(this, "$$me");
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
          o !== "default" && (s.name = o), L(i, s);
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
      }), this.$$me = o1(() => {
        Kr(() => {
          var o;
          this.$$r = !0;
          for (const i of ai(this.$$c)) {
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
    return ai(this.$$p_d).find(
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
function le(e, t, n, r, o, i) {
  let s = class extends Au {
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
function Du(e) {
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
  return new Ft(r, this._parents);
}
function j1(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function J1() {
  return [];
}
function Ou(e) {
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
  typeof e == "function" ? e = Q1(e) : e = Ou(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(e.call(l, l.__data__, u, s)), o.push(l));
  return new Ft(r, o);
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
  return this.select(e == null ? rg : ng(typeof e == "function" ? e : Iu(e)));
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
  return this.selectAll(e == null ? sg : ag(typeof e == "function" ? e : Iu(e)));
}
function ug(e) {
  typeof e != "function" && (e = Lu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Ft(r, this._parents);
}
function zu(e) {
  return new Array(e.length);
}
function cg() {
  return new Ft(this._enter || this._groups.map(zu), this._parents);
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
  var a, l, u = /* @__PURE__ */ new Map(), c = t.length, f = i.length, d = new Array(c), g;
  for (a = 0; a < c; ++a)
    (l = t[a]) && (d[a] = g = s.call(l, l.__data__, a, t) + "", u.has(g) ? o[a] = l : u.set(g, l));
  for (a = 0; a < f; ++a)
    g = s.call(e, i[a], a, i) + "", (l = u.get(g)) ? (r[a] = l, l.__data__ = i[a], u.delete(g)) : n[a] = new gi(e, i[a]);
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
    var c = r[u], f = o[u], d = f.length, g = pg(e.call(c, c && c.__data__, u, r)), v = g.length, _ = a[u] = new Array(v), x = s[u] = new Array(v), k = l[u] = new Array(d);
    n(c, f, _, x, k, g, t);
    for (var m = 0, b = 0, p, C; m < v; ++m)
      if (p = _[m]) {
        for (m >= b && (b = m + 1); !(C = x[b]) && ++b < v; ) ;
        p._next = C || null;
      }
  }
  return s = new Ft(s, r), s._enter = a, s._exit = l, s;
}
function pg(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function mg() {
  return new Ft(this._exit || this._groups.map(zu), this._parents);
}
function yg(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function wg(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], c = r[l], f = u.length, d = a[l] = new Array(f), g, v = 0; v < f; ++v)
      (g = u[v] || c[v]) && (d[v] = g);
  for (; l < o; ++l)
    a[l] = n[l];
  return new Ft(a, this._parents);
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
  return new Ft(o, this._parents).order();
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
function Ru(e) {
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
  return e.style.getPropertyValue(t) || Ru(e).getComputedStyle(e, null).getPropertyValue(t);
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
function Bu(e) {
  return e.trim().split(/^|\s+/);
}
function fa(e) {
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
  for (var n = fa(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Fu(e, t) {
  for (var n = fa(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Fg(e) {
  return function() {
    Zu(this, e);
  };
}
function Xg(e) {
  return function() {
    Fu(this, e);
  };
}
function Wg(e, t) {
  return function() {
    (t.apply(this, arguments) ? Zu : Fu)(this, e);
  };
}
function Kg(e, t) {
  var n = Bu(e + "");
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
  var t = typeof e == "function" ? e : Du(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function ah() {
  return null;
}
function lh(e, t) {
  var n = typeof e == "function" ? e : Du(e), r = t == null ? ah : typeof t == "function" ? t : da(t);
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
function Xu(e, t, n) {
  var r = Ru(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function _h(e, t) {
  return function() {
    return Xu(this, e, t);
  };
}
function xh(e, t) {
  return function() {
    return Xu(this, e, t.apply(this, arguments));
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
var Wu = [null];
function Ft(e, t) {
  this._groups = e, this._parents = t;
}
function Mo() {
  return new Ft([[document.documentElement]], Wu);
}
function kh() {
  return this;
}
Ft.prototype = Mo.prototype = {
  constructor: Ft,
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
function jt(e) {
  return typeof e == "string" ? new Ft([[document.querySelector(e)]], [document.documentElement]) : new Ft([[e]], Wu);
}
function Eh(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function rn(e, t) {
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
function Ku(e) {
  var t = e.document.documentElement, n = jt(e).on("dragstart.drag", Cr, mo);
  "onselectstart" in t ? n.on("selectstart.drag", Cr, mo) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function qu(e, t) {
  var n = e.document.documentElement, r = jt(e).on("dragstart.drag", null);
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
    p.on("mousedown.drag", g).filter(r).on("touchstart.drag", x).on("touchmove.drag", k, $h).on("touchend.drag touchcancel.drag", m).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(p, C) {
    if (!(c || !e.call(this, p, C))) {
      var S = b(this, t.call(this, p, C), p, C, "mouse");
      S && (jt(p.view).on("mousemove.drag", v, mo).on("mouseup.drag", _, mo), Ku(p.view), as(p), u = !1, a = p.clientX, l = p.clientY, S("start", p));
    }
  }
  function v(p) {
    if (Cr(p), !u) {
      var C = p.clientX - a, S = p.clientY - l;
      u = C * C + S * S > f;
    }
    o.mouse("drag", p);
  }
  function _(p) {
    jt(p.view).on("mousemove.drag mouseup.drag", null), qu(p.view, u), Cr(p), o.mouse("end", p);
  }
  function x(p, C) {
    if (e.call(this, p, C)) {
      var S = p.changedTouches, $ = t.call(this, p, C), M = S.length, D, A;
      for (D = 0; D < M; ++D)
        (A = b(this, $, p, C, S[D].identifier, S[D])) && (as(p), A("start", p, S[D]));
    }
  }
  function k(p) {
    var C = p.changedTouches, S = C.length, $, M;
    for ($ = 0; $ < S; ++$)
      (M = o[C[$].identifier]) && (Cr(p), M("drag", p, C[$]));
  }
  function m(p) {
    var C = p.changedTouches, S = C.length, $, M;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), $ = 0; $ < S; ++$)
      (M = o[C[$].identifier]) && (as(p), M("end", p, C[$]));
  }
  function b(p, C, S, $, M, D) {
    var A = i.copy(), V = rn(D || S, C), z, O, P;
    if ((P = n.call(p, new Ns("beforestart", {
      sourceEvent: S,
      target: d,
      identifier: M,
      active: s,
      x: V[0],
      y: V[1],
      dx: 0,
      dy: 0,
      dispatch: A
    }), $)) != null)
      return z = P.x - V[0] || 0, O = P.y - V[1] || 0, function H(E, N, T) {
        var I = V, B;
        switch (E) {
          case "start":
            o[M] = H, B = s++;
            break;
          case "end":
            delete o[M], --s;
          // falls through
          case "drag":
            V = rn(T || N, C), B = s;
            break;
        }
        A.call(
          E,
          p,
          new Ns(E, {
            sourceEvent: N,
            subject: P,
            target: d,
            identifier: M,
            active: B,
            x: V[0] + z,
            y: V[1] + O,
            dx: V[0] - I[0],
            dy: V[1] - I[1],
            dispatch: A
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
function Gu(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Ho() {
}
var yo = 0.7, hi = 1 / yo, kr = "\\s*([+-]?\\d+)\\s*", wo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", hn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Hh = /^#([0-9a-f]{3,8})$/, Vh = new RegExp(`^rgb\\(${kr},${kr},${kr}\\)$`), Ah = new RegExp(`^rgb\\(${hn},${hn},${hn}\\)$`), Dh = new RegExp(`^rgba\\(${kr},${kr},${kr},${wo}\\)$`), Oh = new RegExp(`^rgba\\(${hn},${hn},${hn},${wo}\\)$`), Lh = new RegExp(`^hsl\\(${wo},${hn},${hn}\\)$`), Ih = new RegExp(`^hsla\\(${wo},${hn},${hn},${wo}\\)$`), ol = {
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
  return Uu(this).formatHsl();
}
function sl() {
  return this.rgb().formatRgb();
}
function _o(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Hh.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? al(t) : n === 3 ? new Ht(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Ko(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Ko(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Vh.exec(e)) ? new Ht(t[1], t[2], t[3], 1) : (t = Ah.exec(e)) ? new Ht(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Dh.exec(e)) ? Ko(t[1], t[2], t[3], t[4]) : (t = Oh.exec(e)) ? Ko(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Lh.exec(e)) ? cl(t[1], t[2] / 100, t[3] / 100, 1) : (t = Ih.exec(e)) ? cl(t[1], t[2] / 100, t[3] / 100, t[4]) : ol.hasOwnProperty(e) ? al(ol[e]) : e === "transparent" ? new Ht(NaN, NaN, NaN, 0) : null;
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
ga(Ht, Ts, Gu(Ho, {
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
    return new Ht(ir(this.r), ir(this.g), ir(this.b), vi(this.opacity));
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
  return `#${rr(this.r)}${rr(this.g)}${rr(this.b)}`;
}
function Yh() {
  return `#${rr(this.r)}${rr(this.g)}${rr(this.b)}${rr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ul() {
  const e = vi(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${ir(this.r)}, ${ir(this.g)}, ${ir(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function vi(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function ir(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function rr(e) {
  return e = ir(e), (e < 16 ? "0" : "") + e.toString(16);
}
function cl(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new on(e, t, n, r);
}
function Uu(e) {
  if (e instanceof on) return new on(e.h, e.s, e.l, e.opacity);
  if (e instanceof Ho || (e = _o(e)), !e) return new on();
  if (e instanceof on) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new on(s, a, l, e.opacity);
}
function Zh(e, t, n, r) {
  return arguments.length === 1 ? Uu(e) : new on(e, t, n, r ?? 1);
}
function on(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
ga(on, Zh, Gu(Ho, {
  brighter(e) {
    return e = e == null ? hi : Math.pow(hi, e), new on(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? yo : Math.pow(yo, e), new on(this.h, this.s, this.l * e, this.opacity);
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
    return new on(dl(this.h), qo(this.s), qo(this.l), vi(this.opacity));
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
const ju = (e) => () => e;
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
  return (e = +e) == 1 ? Ju : function(t, n) {
    return n - t ? Xh(t, n, e) : ju(isNaN(t) ? n : t);
  };
}
function Ju(e, t) {
  var n = t - e;
  return n ? Fh(e, n) : ju(isNaN(e) ? t : e);
}
const fl = function e(t) {
  var n = Wh(t);
  function r(o, i) {
    var s = n((o = Ts(o)).r, (i = Ts(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = Ju(o.opacity, i.opacity);
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
function Qu(e, t, n, r, o, i) {
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
  return t.isIdentity ? Hs : Qu(t.a, t.b, t.c, t.d, t.e, t.f);
}
function jh(e) {
  return e == null || (Go || (Go = document.createElementNS("http://www.w3.org/2000/svg", "g")), Go.setAttribute("transform", e), !(e = Go.transform.baseVal.consolidate())) ? Hs : (e = e.matrix, Qu(e.a, e.b, e.c, e.d, e.e, e.f));
}
function ec(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, c, f, d, g, v) {
    if (u !== f || c !== d) {
      var _ = g.push("translate(", null, t, null, n);
      v.push({ i: _ - 4, x: Yn(u, f) }, { i: _ - 2, x: Yn(c, d) });
    } else (f || d) && g.push("translate(" + f + t + d + n);
  }
  function s(u, c, f, d) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), d.push({ i: f.push(o(f) + "rotate(", null, r) - 2, x: Yn(u, c) })) : c && f.push(o(f) + "rotate(" + c + r);
  }
  function a(u, c, f, d) {
    u !== c ? d.push({ i: f.push(o(f) + "skewX(", null, r) - 2, x: Yn(u, c) }) : c && f.push(o(f) + "skewX(" + c + r);
  }
  function l(u, c, f, d, g, v) {
    if (u !== f || c !== d) {
      var _ = g.push(o(g) + "scale(", null, ",", null, ")");
      v.push({ i: _ - 4, x: Yn(u, f) }, { i: _ - 2, x: Yn(c, d) });
    } else (f !== 1 || d !== 1) && g.push(o(g) + "scale(" + f + "," + d + ")");
  }
  return function(u, c) {
    var f = [], d = [];
    return u = e(u), c = e(c), i(u.translateX, u.translateY, c.translateX, c.translateY, f, d), s(u.rotate, c.rotate, f, d), a(u.skewX, c.skewX, f, d), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, f, d), u = c = null, function(g) {
      for (var v = -1, _ = d.length, x; ++v < _; ) f[(x = d[v]).i] = x.x(g);
      return f.join("");
    };
  };
}
var Jh = ec(Uh, "px, ", "px)", "deg)"), Qh = ec(jh, ", ", ")", ")"), ev = 1e-12;
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
    var a = i[0], l = i[1], u = i[2], c = s[0], f = s[1], d = s[2], g = c - a, v = f - l, _ = g * g + v * v, x, k;
    if (_ < ev)
      k = Math.log(d / u) / t, x = function($) {
        return [
          a + $ * g,
          l + $ * v,
          u * Math.exp(t * $ * k)
        ];
      };
    else {
      var m = Math.sqrt(_), b = (d * d - u * u + r * _) / (2 * u * n * m), p = (d * d - u * u - r * _) / (2 * d * n * m), C = Math.log(Math.sqrt(b * b + 1) - b), S = Math.log(Math.sqrt(p * p + 1) - p);
      k = (S - C) / t, x = function($) {
        var M = $ * k, D = hl(C), A = u / (n * m) * (D * nv(t * M + C) - tv(C));
        return [
          a + A * g,
          l + A * v,
          u * D / hl(t * M + C)
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
var Or = 0, oo = 0, to = 0, tc = 1e3, pi, io, mi = 0, lr = 0, Zi = 0, xo = typeof performance == "object" && performance.now ? performance : Date, nc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function ha() {
  return lr || (nc(ov), lr = xo.now() + Zi);
}
function ov() {
  lr = 0;
}
function yi() {
  this._call = this._time = this._next = null;
}
yi.prototype = rc.prototype = {
  constructor: yi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? ha() : +n) + (t == null ? 0 : +t), !this._next && io !== this && (io ? io._next = this : pi = this, io = this), this._call = e, this._time = n, Vs();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Vs());
  }
};
function rc(e, t, n) {
  var r = new yi();
  return r.restart(e, t, n), r;
}
function iv() {
  ha(), ++Or;
  for (var e = pi, t; e; )
    (t = lr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Or;
}
function vl() {
  lr = (mi = xo.now()) + Zi, Or = oo = 0;
  try {
    iv();
  } finally {
    Or = 0, av(), lr = 0;
  }
}
function sv() {
  var e = xo.now(), t = e - mi;
  t > tc && (Zi -= t, mi = e);
}
function av() {
  for (var e, t = pi, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : pi = n);
  io = e, Vs(r);
}
function Vs(e) {
  if (!Or) {
    oo && (oo = clearTimeout(oo));
    var t = e - lr;
    t > 24 ? (e < 1 / 0 && (oo = setTimeout(vl, e - xo.now() - Zi)), to && (to = clearInterval(to))) : (to || (mi = xo.now(), to = setInterval(sv, tc)), Or = 1, nc(vl));
  }
}
function pl(e, t, n) {
  var r = new yi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var lv = Bi("start", "end", "cancel", "interrupt"), uv = [], oc = 0, ml = 1, As = 2, ti = 3, yl = 4, Ds = 5, ni = 6;
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
    state: oc
  });
}
function va(e, t) {
  var n = cn(e, t);
  if (n.state > oc) throw new Error("too late; already scheduled");
  return n;
}
function En(e, t) {
  var n = cn(e, t);
  if (n.state > ti) throw new Error("too late; already running");
  return n;
}
function cn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function cv(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = rc(i, 0, n.time);
  function i(u) {
    n.state = ml, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var c, f, d, g;
    if (n.state !== ml) return l();
    for (c in r)
      if (g = r[c], g.name === n.name) {
        if (g.state === ti) return pl(s);
        g.state === yl ? (g.state = ni, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[c]) : +c < t && (g.state = ni, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[c]);
      }
    if (pl(function() {
      n.state === ti && (n.state = yl, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = As, n.on.call("start", e, e.__data__, n.index, n.group), n.state === As) {
      for (n.state = ti, o = new Array(d = n.tween.length), c = 0, f = -1; c < d; ++c)
        (g = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++f] = g);
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
function gv(e, t, n) {
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
function hv(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = cn(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? fv : gv)(n, e, t));
}
function pa(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = En(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return cn(o, r).value[t];
  };
}
function ic(e, t) {
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
  var n = Yi(e), r = n === "transform" ? Qh : ic;
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
  return arguments.length ? this.each((typeof e == "function" ? Sv : Pv)(t, e)) : cn(this.node(), t).delay;
}
function Tv(e, t) {
  return function() {
    En(this, e).duration = +t.apply(this, arguments);
  };
}
function Mv(e, t) {
  return t = +t, function() {
    En(this, e).duration = t;
  };
}
function Hv(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Tv : Mv)(t, e)) : cn(this.node(), t).duration;
}
function Vv(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    En(this, e).ease = t;
  };
}
function Av(e) {
  var t = this._id;
  return arguments.length ? this.each(Vv(t, e)) : cn(this.node(), t).ease;
}
function Dv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    En(this, e).ease = n;
  };
}
function Ov(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Dv(this._id, e));
}
function Lv(e) {
  typeof e != "function" && (e = Lu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new On(r, this._parents, this._name, this._id);
}
function Iv(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], u = n[a], c = l.length, f = s[a] = new Array(c), d, g = 0; g < c; ++g)
      (d = l[g] || u[g]) && (f[g] = d);
  for (; a < r; ++a)
    s[a] = t[a];
  return new On(s, this._parents, this._name, this._id);
}
function zv(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function Rv(e, t, n) {
  var r, o, i = zv(t) ? va : En;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function Bv(e, t) {
  var n = this._id;
  return arguments.length < 2 ? cn(this.node(), n).on.on(e) : this.each(Rv(n, e, t));
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
      (c = a[d]) && (f = e.call(c, c.__data__, d, a)) && ("__data__" in c && (f.__data__ = c.__data__), u[d] = f, Fi(u[d], t, n, d, u, cn(c, n)));
  return new On(i, this._parents, t, n);
}
function Xv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Ou(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, c, f = 0; f < u; ++f)
      if (c = l[f]) {
        for (var d = e.call(c, c.__data__, f, l), g, v = cn(c, n), _ = 0, x = d.length; _ < x; ++_)
          (g = d[_]) && Fi(g, t, n, _, d, v);
        i.push(d), s.push(c);
      }
  return new On(i, s, t, n);
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
function sc(e) {
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
    var l = En(this, e), u = l.on, c = l.value[i] == null ? a || (a = sc(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(s, o = c), l.on = r;
  };
}
function Jv(e, t, n) {
  var r = (e += "") == "transform" ? Jh : ic;
  return t == null ? this.styleTween(e, qv(e, r)).on("end.style." + e, sc(e)) : typeof t == "function" ? this.styleTween(e, Uv(e, r, pa(this, "style." + e, t))).each(jv(this._id, e)) : this.styleTween(e, Gv(e, r, t), n).on("end.style." + e, null);
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
  for (var e = this._name, t = this._id, n = ac(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var c = cn(l, t);
        Fi(l, e, n, u, s, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new On(r, this._parents, e, n);
}
function u0() {
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
var c0 = 0;
function On(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function ac() {
  return ++c0;
}
var Sn = Mo.prototype;
On.prototype = {
  constructor: On,
  select: Fv,
  selectAll: Xv,
  selectChild: Sn.selectChild,
  selectChildren: Sn.selectChildren,
  filter: Lv,
  merge: Iv,
  selection: Kv,
  transition: l0,
  call: Sn.call,
  nodes: Sn.nodes,
  node: Sn.node,
  size: Sn.size,
  empty: Sn.empty,
  each: Sn.each,
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
  [Symbol.iterator]: Sn[Symbol.iterator]
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
  e instanceof On ? (t = e._id, e = e._name) : (t = ac(), (n = f0).time = ha(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && Fi(l, e, t, u, s, n || g0(l, t));
  return new On(r, this._parents, e, t);
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
function Nn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Nn.prototype = {
  constructor: Nn,
  scale: function(e) {
    return e === 1 ? this : new Nn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Nn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var Xi = new Nn(1, 0, 0);
lc.prototype = Nn.prototype;
function lc(e) {
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
function uc() {
  var e = p0, t = m0, n = _0, r = y0, o = w0, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = rv, u = Bi("start", "zoom", "end"), c, f, d, g = 500, v = 150, _ = 0, x = 10;
  function k(P) {
    P.property("__zoom", wl).on("wheel.zoom", M, { passive: !1 }).on("mousedown.zoom", D).on("dblclick.zoom", A).filter(o).on("touchstart.zoom", V).on("touchmove.zoom", z).on("touchend.zoom touchcancel.zoom", O).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  k.transform = function(P, H, E, N) {
    var T = P.selection ? P.selection() : P;
    T.property("__zoom", wl), P !== T ? C(P, H, E, N) : T.interrupt().each(function() {
      S(this, arguments).event(N).start().zoom(null, typeof H == "function" ? H.apply(this, arguments) : H).end();
    });
  }, k.scaleBy = function(P, H, E, N) {
    k.scaleTo(P, function() {
      var T = this.__zoom.k, I = typeof H == "function" ? H.apply(this, arguments) : H;
      return T * I;
    }, E, N);
  }, k.scaleTo = function(P, H, E, N) {
    k.transform(P, function() {
      var T = t.apply(this, arguments), I = this.__zoom, B = E == null ? p(T) : typeof E == "function" ? E.apply(this, arguments) : E, X = I.invert(B), q = typeof H == "function" ? H.apply(this, arguments) : H;
      return n(b(m(I, q), B, X), T, s);
    }, E, N);
  }, k.translateBy = function(P, H, E, N) {
    k.transform(P, function() {
      return n(this.__zoom.translate(
        typeof H == "function" ? H.apply(this, arguments) : H,
        typeof E == "function" ? E.apply(this, arguments) : E
      ), t.apply(this, arguments), s);
    }, null, N);
  }, k.translateTo = function(P, H, E, N, T) {
    k.transform(P, function() {
      var I = t.apply(this, arguments), B = this.__zoom, X = N == null ? p(I) : typeof N == "function" ? N.apply(this, arguments) : N;
      return n(Xi.translate(X[0], X[1]).scale(B.k).translate(
        typeof H == "function" ? -H.apply(this, arguments) : -H,
        typeof E == "function" ? -E.apply(this, arguments) : -E
      ), I, s);
    }, N, T);
  };
  function m(P, H) {
    return H = Math.max(i[0], Math.min(i[1], H)), H === P.k ? P : new Nn(H, P.x, P.y);
  }
  function b(P, H, E) {
    var N = H[0] - E[0] * P.k, T = H[1] - E[1] * P.k;
    return N === P.x && T === P.y ? P : new Nn(P.k, N, T);
  }
  function p(P) {
    return [(+P[0][0] + +P[1][0]) / 2, (+P[0][1] + +P[1][1]) / 2];
  }
  function C(P, H, E, N) {
    P.on("start.zoom", function() {
      S(this, arguments).event(N).start();
    }).on("interrupt.zoom end.zoom", function() {
      S(this, arguments).event(N).end();
    }).tween("zoom", function() {
      var T = this, I = arguments, B = S(T, I).event(N), X = t.apply(T, I), q = E == null ? p(X) : typeof E == "function" ? E.apply(T, I) : E, re = Math.max(X[1][0] - X[0][0], X[1][1] - X[0][1]), J = T.__zoom, W = typeof H == "function" ? H.apply(T, I) : H, se = l(J.invert(q).concat(re / J.k), W.invert(q).concat(re / W.k));
      return function(me) {
        if (me === 1) me = W;
        else {
          var xe = se(me), fe = re / xe[2];
          me = new Nn(fe, q[0] - xe[0] * fe, q[1] - xe[1] * fe);
        }
        B.zoom(null, me);
      };
    });
  }
  function S(P, H, E) {
    return !E && P.__zooming || new $(P, H);
  }
  function $(P, H) {
    this.that = P, this.args = H, this.active = 0, this.sourceEvent = null, this.extent = t.apply(P, H), this.taps = 0;
  }
  $.prototype = {
    event: function(P) {
      return P && (this.sourceEvent = P), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(P, H) {
      return this.mouse && P !== "mouse" && (this.mouse[1] = H.invert(this.mouse[0])), this.touch0 && P !== "touch" && (this.touch0[1] = H.invert(this.touch0[0])), this.touch1 && P !== "touch" && (this.touch1[1] = H.invert(this.touch1[0])), this.that.__zoom = H, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(P) {
      var H = jt(this.that).datum();
      u.call(
        P,
        this.that,
        new v0(P, {
          sourceEvent: this.sourceEvent,
          target: k,
          transform: this.that.__zoom,
          dispatch: u
        }),
        H
      );
    }
  };
  function M(P, ...H) {
    if (!e.apply(this, arguments)) return;
    var E = S(this, H).event(P), N = this.__zoom, T = Math.max(i[0], Math.min(i[1], N.k * Math.pow(2, r.apply(this, arguments)))), I = rn(P);
    if (E.wheel)
      (E.mouse[0][0] !== I[0] || E.mouse[0][1] !== I[1]) && (E.mouse[1] = N.invert(E.mouse[0] = I)), clearTimeout(E.wheel);
    else {
      if (N.k === T) return;
      E.mouse = [I, N.invert(I)], ri(this), E.start();
    }
    no(P), E.wheel = setTimeout(B, v), E.zoom("mouse", n(b(m(N, T), E.mouse[0], E.mouse[1]), E.extent, s));
    function B() {
      E.wheel = null, E.end();
    }
  }
  function D(P, ...H) {
    if (d || !e.apply(this, arguments)) return;
    var E = P.currentTarget, N = S(this, H, !0).event(P), T = jt(P.view).on("mousemove.zoom", q, !0).on("mouseup.zoom", re, !0), I = rn(P, E), B = P.clientX, X = P.clientY;
    Ku(P.view), cs(P), N.mouse = [I, this.__zoom.invert(I)], ri(this), N.start();
    function q(J) {
      if (no(J), !N.moved) {
        var W = J.clientX - B, se = J.clientY - X;
        N.moved = W * W + se * se > _;
      }
      N.event(J).zoom("mouse", n(b(N.that.__zoom, N.mouse[0] = rn(J, E), N.mouse[1]), N.extent, s));
    }
    function re(J) {
      T.on("mousemove.zoom mouseup.zoom", null), qu(J.view, N.moved), no(J), N.event(J).end();
    }
  }
  function A(P, ...H) {
    if (e.apply(this, arguments)) {
      var E = this.__zoom, N = rn(P.changedTouches ? P.changedTouches[0] : P, this), T = E.invert(N), I = E.k * (P.shiftKey ? 0.5 : 2), B = n(b(m(E, I), N, T), t.apply(this, H), s);
      no(P), a > 0 ? jt(this).transition().duration(a).call(C, B, N, P) : jt(this).call(k.transform, B, N, P);
    }
  }
  function V(P, ...H) {
    if (e.apply(this, arguments)) {
      var E = P.touches, N = E.length, T = S(this, H, P.changedTouches.length === N).event(P), I, B, X, q;
      for (cs(P), B = 0; B < N; ++B)
        X = E[B], q = rn(X, this), q = [q, this.__zoom.invert(q), X.identifier], T.touch0 ? !T.touch1 && T.touch0[2] !== q[2] && (T.touch1 = q, T.taps = 0) : (T.touch0 = q, I = !0, T.taps = 1 + !!c);
      c && (c = clearTimeout(c)), I && (T.taps < 2 && (f = q[0], c = setTimeout(function() {
        c = null;
      }, g)), ri(this), T.start());
    }
  }
  function z(P, ...H) {
    if (this.__zooming) {
      var E = S(this, H).event(P), N = P.changedTouches, T = N.length, I, B, X, q;
      for (no(P), I = 0; I < T; ++I)
        B = N[I], X = rn(B, this), E.touch0 && E.touch0[2] === B.identifier ? E.touch0[0] = X : E.touch1 && E.touch1[2] === B.identifier && (E.touch1[0] = X);
      if (B = E.that.__zoom, E.touch1) {
        var re = E.touch0[0], J = E.touch0[1], W = E.touch1[0], se = E.touch1[1], me = (me = W[0] - re[0]) * me + (me = W[1] - re[1]) * me, xe = (xe = se[0] - J[0]) * xe + (xe = se[1] - J[1]) * xe;
        B = m(B, Math.sqrt(me / xe)), X = [(re[0] + W[0]) / 2, (re[1] + W[1]) / 2], q = [(J[0] + se[0]) / 2, (J[1] + se[1]) / 2];
      } else if (E.touch0) X = E.touch0[0], q = E.touch0[1];
      else return;
      E.zoom("touch", n(b(B, X, q), E.extent, s));
    }
  }
  function O(P, ...H) {
    if (this.__zooming) {
      var E = S(this, H).event(P), N = P.changedTouches, T = N.length, I, B;
      for (cs(P), d && clearTimeout(d), d = setTimeout(function() {
        d = null;
      }, g), I = 0; I < T; ++I)
        B = N[I], E.touch0 && E.touch0[2] === B.identifier ? delete E.touch0 : E.touch1 && E.touch1[2] === B.identifier && delete E.touch1;
      if (E.touch1 && !E.touch0 && (E.touch0 = E.touch1, delete E.touch1), E.touch0) E.touch0[1] = this.__zoom.invert(E.touch0[0]);
      else if (E.end(), E.taps === 2 && (B = rn(B, this), Math.hypot(f[0] - B[0], f[1] - B[1]) < x)) {
        var X = jt(this).on("dblclick.zoom");
        X && X.apply(this, arguments);
      }
    }
  }
  return k.wheelDelta = function(P) {
    return arguments.length ? (r = typeof P == "function" ? P : Uo(+P), k) : r;
  }, k.filter = function(P) {
    return arguments.length ? (e = typeof P == "function" ? P : Uo(!!P), k) : e;
  }, k.touchable = function(P) {
    return arguments.length ? (o = typeof P == "function" ? P : Uo(!!P), k) : o;
  }, k.extent = function(P) {
    return arguments.length ? (t = typeof P == "function" ? P : Uo([[+P[0][0], +P[0][1]], [+P[1][0], +P[1][1]]]), k) : t;
  }, k.scaleExtent = function(P) {
    return arguments.length ? (i[0] = +P[0], i[1] = +P[1], k) : [i[0], i[1]];
  }, k.translateExtent = function(P) {
    return arguments.length ? (s[0][0] = +P[0][0], s[1][0] = +P[1][0], s[0][1] = +P[0][1], s[1][1] = +P[1][1], k) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, k.constrain = function(P) {
    return arguments.length ? (n = P, k) : n;
  }, k.duration = function(P) {
    return arguments.length ? (a = +P, k) : a;
  }, k.interpolate = function(P) {
    return arguments.length ? (l = P, k) : l;
  }, k.on = function() {
    var P = u.on.apply(u, arguments);
    return P === u ? k : P;
  }, k.clickDistance = function(P) {
    return arguments.length ? (_ = (P = +P) * P, k) : Math.sqrt(_);
  }, k.tapDistance = function(P) {
    return arguments.length ? (x = +P, k) : x;
  }, k;
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
var ur;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(ur || (ur = {}));
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
  const { width: n, height: r } = er(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
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
}, cc = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...Do(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: f = !0, hidden: d = !1 } = u;
    if (s && !f || d)
      continue;
    const g = c.width ?? u.width ?? u.initialWidth ?? null, v = c.height ?? u.height ?? u.initialHeight ?? null, _ = Co(a, zr(u)), x = (g ?? 0) * (v ?? 0), k = i && _ > 0;
    (!u.internals.handleBounds || k || _ >= x || u.dragging) && l.push(u);
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
      const g = a.measured.width, v = a.measured.height;
      g && v && (f = [
        [l, u],
        [l + g, u + v]
      ]);
    }
  else a && Rr(s.extent) && (f = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const d = Rr(f) ? cr(t, f, s.measured) : t;
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
    const g = i.has(d.id), v = !g && d.parentId && s.find((_) => _.id === d.parentId);
    (g || v) && s.push(d);
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
const Ir = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), cr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Ir(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: Ir(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function fc(e, t, n) {
  const { width: r, height: o } = er(n), { x: i, y: s } = n.internals.positionAbsolute;
  return cr(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const kl = (e, t, n) => e < t ? Ir(Math.abs(e - t), 1, t) / t : e > n ? -Ir(Math.abs(e - n), 1, t) / t : 0, gc = (e, t, n = 15, r = 40) => {
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
}, hc = (e, t) => Ki(Wi(Is(e), Is(t))), Co = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, El = (e) => Tn(e.width) && Tn(e.height) && Tn(e.x) && Tn(e.y), Tn = (e) => !isNaN(e) && isFinite(e), S0 = (e, t) => {
}, ya = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Do = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? ya(a, s) : a;
}, vc = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
}), wa = (e, t, n, r, o, i) => {
  const s = t / (e.width * (1 + i)), a = n / (e.height * (1 + i)), l = Math.min(s, a), u = Ir(l, r, o), c = e.x + e.width / 2, f = e.y + e.height / 2, d = t / 2 - c * u, g = n / 2 - f * u;
  return { x: d, y: g, zoom: u };
}, bi = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function Rr(e) {
  return e !== void 0 && e !== "parent";
}
function er(e) {
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
function P0(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function ds(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = Vn(e), a = Do({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: s - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? ya(a, t) : a;
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
const mc = (e) => "clientX" in e, Vn = (e, t) => {
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
function yc({ sourceX: e, sourceY: t, sourcePosition: n = Ce.Bottom, targetX: r, targetY: o, targetPosition: i = Ce.Top, curvature: s = 0.25 }) {
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
  }), [f, d, g, v] = H0({
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
    g,
    v
  ];
}
function wc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
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
  const [o, i, s, a] = wc({
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
  let g = [], v, _;
  const x = { x: 0, y: 0 }, k = { x: 0, y: 0 }, [m, b, p, C] = wc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (s[f] * a[f] === -1) {
    v = o.x ?? m, _ = o.y ?? b;
    const $ = [
      { x: v, y: l.y },
      { x: v, y: u.y }
    ], M = [
      { x: l.x, y: _ },
      { x: u.x, y: _ }
    ];
    s[f] === d ? g = f === "x" ? $ : M : g = f === "x" ? M : $;
  } else {
    const $ = [{ x: l.x, y: u.y }], M = [{ x: u.x, y: l.y }];
    if (f === "x" ? g = s.x === d ? M : $ : g = s.y === d ? $ : M, t === r) {
      const O = Math.abs(e[f] - n[f]);
      if (O <= i) {
        const P = Math.min(i - 1, i - O);
        s[f] === d ? x[f] = (l[f] > e[f] ? -1 : 1) * P : k[f] = (u[f] > n[f] ? -1 : 1) * P;
      }
    }
    if (t !== r) {
      const O = f === "x" ? "y" : "x", P = s[f] === a[O], H = l[O] > u[O], E = l[O] < u[O];
      (s[f] === 1 && (!P && H || P && E) || s[f] !== 1 && (!P && E || P && H)) && (g = f === "x" ? $ : M);
    }
    const D = { x: l.x + x.x, y: l.y + x.y }, A = { x: u.x + k.x, y: u.y + k.y }, V = Math.max(Math.abs(D.x - g[0].x), Math.abs(A.x - g[0].x)), z = Math.max(Math.abs(D.y - g[0].y), Math.abs(A.y - g[0].y));
    V >= z ? (v = (D.x + A.x) / 2, _ = g[0].y) : (v = g[0].x, _ = (D.y + A.y) / 2);
  }
  return [[
    e,
    { x: l.x + x.x, y: l.y + x.y },
    ...g,
    { x: u.x + k.x, y: u.y + k.y },
    n
  ], v, _, p, C];
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
  const [c, f, d, g, v] = z0({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u
  });
  return [c.reduce((x, k, m) => {
    let b = "";
    return m > 0 && m < c.length - 1 ? b = R0(c[m - 1], k, c[m + 1], s) : b = `${m === 0 ? "M" : "L"}${k.x} ${k.y}`, x += b, x;
  }, ""), f, d, g, v];
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
    e.connectionMode === ur.Strict ? (o == null ? void 0 : o.target) ?? [] : ((o == null ? void 0 : o.target) ?? []).concat((o == null ? void 0 : o.source) ?? []),
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
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? er(e);
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
      const i = Vo(o, r.nodeOrigin), s = Rr(o.extent) ? o.extent : r.nodeExtent, a = cr(i, s, er(o));
      o.internals.positionAbsolute = a;
    }
}
function _c(e, t, n, r) {
  var a, l;
  const o = ba(F0, r), i = new Map(t), s = o != null && o.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let c = i.get(u.id);
    if (o.checkEquality && u === (c == null ? void 0 : c.internals.userNode))
      t.set(u.id, c);
    else {
      const f = Vo(u, o.nodeOrigin), d = Rr(u.extent) ? u.extent : o.nodeExtent, g = cr(f, d, er(u));
      c = {
        ...o.defaults,
        ...u,
        measured: {
          width: (a = u.measured) == null ? void 0 : a.width,
          height: (l = u.measured) == null ? void 0 : l.height
        },
        internals: {
          positionAbsolute: g,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: u.measured ? c == null ? void 0 : c.internals.handleBounds : void 0,
          z: xc(u, s),
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
  const u = o ? 1e3 : 0, { x: c, y: f, z: d } = K0(e, l, i, s, u), { positionAbsolute: g } = e.internals, v = c !== g.x || f !== g.y;
  (v || d !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: v ? { x: c, y: f } : g,
      z: d
    }
  });
}
function xc(e, t) {
  return (Tn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function K0(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = er(e), l = Vo(e, n), u = Rr(e.extent) ? cr(l, e.extent, a) : l;
  let c = cr({ x: i + u.x, y: s + u.y }, r, a);
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
    var b;
    const c = l.internals.positionAbsolute, f = er(l), d = l.origin ?? r, g = a.x < c.x ? Math.round(Math.abs(c.x - a.x)) : 0, v = a.y < c.y ? Math.round(Math.abs(c.y - a.y)) : 0, _ = Math.max(f.width, Math.round(a.width)), x = Math.max(f.height, Math.round(a.height)), k = (_ - f.width) * d[0], m = (x - f.height) * d[1];
    (g > 0 || v > 0 || k || m) && (o.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - g + k,
        y: l.position.y - v + m
      }
    }), (b = n.get(u)) == null || b.forEach((p) => {
      e.some((C) => C.id === p.id) || o.push({
        id: p.id,
        type: "position",
        position: {
          x: p.position.x + g,
          y: p.position.y + v
        }
      });
    })), (f.width < a.width || f.height < a.height || g || v) && o.push({
      id: u,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: _ + (g ? d[0] * g - k : 0),
        height: x + (v ? d[1] * v - m : 0)
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
    const g = t.get(d.id);
    if (!g)
      continue;
    if (g.hidden) {
      t.set(g.id, {
        ...g,
        internals: {
          ...g.internals,
          handleBounds: void 0
        }
      }), a = !0;
      continue;
    }
    const v = _a(d.nodeElement), _ = g.measured.width !== v.width || g.measured.height !== v.height;
    if (!!(v.width && v.height && (_ || !g.internals.handleBounds || d.force))) {
      const k = d.nodeElement.getBoundingClientRect(), m = Rr(g.extent) ? g.extent : i;
      let { positionAbsolute: b } = g.internals;
      g.parentId && g.extent === "parent" ? b = fc(b, v, t.get(g.parentId)) : m && (b = cr(b, m, v));
      const p = {
        ...g,
        measured: v,
        internals: {
          ...g.internals,
          positionAbsolute: b,
          handleBounds: {
            source: $l("source", d.nodeElement, k, c, g.id),
            target: $l("target", d.nodeElement, k, c, g.id)
          }
        }
      };
      t.set(g.id, p), g.parentId && Ca(p, t, n, { nodeOrigin: o }), a = !0, _ && (l.push({
        id: g.id,
        type: "dimensions",
        dimensions: v
      }), g.expandParent && g.parentId && f.push({
        id: g.id,
        parentId: g.parentId,
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
function bc(e, t, n) {
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
function Cc(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : Cc(n, t) : !1;
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
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, c = null, f = !1, d = null, g = !1;
  function v({ noDragClassName: x, handleSelector: k, domNode: m, isSelectable: b, nodeId: p, nodeClickDistance: C = 0 }) {
    d = jt(m);
    function S({ x: A, y: V }, z) {
      const { nodeLookup: O, nodeExtent: P, snapGrid: H, snapToGrid: E, nodeOrigin: N, onNodeDrag: T, onSelectionDrag: I, onError: B, updateNodePositions: X } = t();
      i = { x: A, y: V };
      let q = !1, re = { x: 0, y: 0, x2: 0, y2: 0 };
      if (a.size > 1 && P) {
        const J = Ao(a);
        re = Is(J);
      }
      for (const [J, W] of a) {
        if (!O.has(J))
          continue;
        let se = { x: A - W.distance.x, y: V - W.distance.y };
        E && (se = ya(se, H));
        let me = [
          [P[0][0], P[0][1]],
          [P[1][0], P[1][1]]
        ];
        if (a.size > 1 && P && !W.extent) {
          const { positionAbsolute: Ie } = W.internals, G = Ie.x - re.x + P[0][0], ae = Ie.x + W.measured.width - re.x2 + P[1][0], Me = Ie.y - re.y + P[0][1], Oe = Ie.y + W.measured.height - re.y2 + P[1][1];
          me = [
            [G, Me],
            [ae, Oe]
          ];
        }
        const { position: xe, positionAbsolute: fe } = $0({
          nodeId: J,
          nextPosition: se,
          nodeLookup: O,
          nodeExtent: me,
          nodeOrigin: N,
          onError: B
        });
        q = q || W.position.x !== xe.x || W.position.y !== xe.y, W.position = xe, W.internals.positionAbsolute = fe;
      }
      if (q && (X(a, !0), z && (r || T || !p && I))) {
        const [J, W] = fs({
          nodeId: p,
          dragItems: a,
          nodeLookup: O
        });
        r == null || r(z, a, J, W), T == null || T(z, J, W), p || I == null || I(z, W);
      }
    }
    async function $() {
      if (!c)
        return;
      const { transform: A, panBy: V, autoPanSpeed: z, autoPanOnNodeDrag: O } = t();
      if (!O) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [P, H] = gc(u, c, z);
      (P !== 0 || H !== 0) && (i.x = (i.x ?? 0) - P / A[2], i.y = (i.y ?? 0) - H / A[2], await V({ x: P, y: H }) && S(i, null)), s = requestAnimationFrame($);
    }
    function M(A) {
      var q;
      const { nodeLookup: V, multiSelectionActive: z, nodesDraggable: O, transform: P, snapGrid: H, snapToGrid: E, selectNodesOnDrag: N, onNodeDragStart: T, onSelectionDragStart: I, unselectNodesAndEdges: B } = t();
      f = !0, (!N || !b) && !z && p && ((q = V.get(p)) != null && q.selected || B()), b && N && p && (e == null || e(p));
      const X = ds(A.sourceEvent, { transform: P, snapGrid: H, snapToGrid: E, containerBounds: c });
      if (i = X, a = J0(V, O, X, p), a.size > 0 && (n || T || !p && I)) {
        const [re, J] = fs({
          nodeId: p,
          dragItems: a,
          nodeLookup: V
        });
        n == null || n(A.sourceEvent, a, re, J), T == null || T(A.sourceEvent, re, J), p || I == null || I(A.sourceEvent, J);
      }
    }
    const D = Mh().clickDistance(C).on("start", (A) => {
      const { domNode: V, nodeDragThreshold: z, transform: O, snapGrid: P, snapToGrid: H } = t();
      c = (V == null ? void 0 : V.getBoundingClientRect()) || null, g = !1, z === 0 && M(A), i = ds(A.sourceEvent, { transform: O, snapGrid: P, snapToGrid: H, containerBounds: c }), u = Vn(A.sourceEvent, c);
    }).on("drag", (A) => {
      const { autoPanOnNodeDrag: V, transform: z, snapGrid: O, snapToGrid: P, nodeDragThreshold: H, nodeLookup: E } = t(), N = ds(A.sourceEvent, { transform: z, snapGrid: O, snapToGrid: P, containerBounds: c });
      if ((A.sourceEvent.type === "touchmove" && A.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      p && !E.has(p)) && (g = !0), !g) {
        if (!l && V && f && (l = !0, $()), !f) {
          const T = N.xSnapped - (i.x ?? 0), I = N.ySnapped - (i.y ?? 0);
          Math.sqrt(T * T + I * I) > H && M(A);
        }
        (i.x !== N.xSnapped || i.y !== N.ySnapped) && a && f && (u = Vn(A.sourceEvent, c), S(N, A.sourceEvent));
      }
    }).on("end", (A) => {
      if (!(!f || g) && (l = !1, f = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: V, updateNodePositions: z, onNodeDragStop: O, onSelectionDragStop: P } = t();
        if (z(a, !1), o || O || !p && P) {
          const [H, E] = fs({
            nodeId: p,
            dragItems: a,
            nodeLookup: V,
            dragging: !1
          });
          o == null || o(A.sourceEvent, a, H, E), O == null || O(A.sourceEvent, H, E), p || P == null || P(A.sourceEvent, E);
        }
      }
    }).filter((A) => {
      const V = A.target;
      return !A.button && (!x || !Al(V, `.${x}`, m)) && (!k || Al(V, k, m));
    });
    d.call(D);
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
      const { x: d, y: g } = ko(u, f, f.position, !0), v = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(g - e.y, 2));
      v > t || (v < i ? (o = [{ ...f, x: d, y: g }], i = v) : v === i && o.push({ ...f, x: d, y: g }));
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
function Ec(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function rp(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const $c = () => !0;
function op(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: f, panBy: d, cancelConnection: g, onConnectStart: v, onConnect: _, onConnectEnd: x, isValidConnection: k = $c, onReconnectEnd: m, updateConnection: b, getTransform: p, getFromHandle: C, autoPanSpeed: S }) {
  const $ = N0(e.target);
  let M = 0, D;
  const { x: A, y: V } = Vn(e), z = $ == null ? void 0 : $.elementFromPoint(A, V), O = Ec(i, z), P = a == null ? void 0 : a.getBoundingClientRect();
  if (!P || !O)
    return;
  const H = kc(o, O, r, l, t);
  if (!H)
    return;
  let E = Vn(e, P), N = !1, T = null, I = !1, B = null;
  function X() {
    if (!c || !P)
      return;
    const [fe, Ie] = gc(E, P, S);
    d({ x: fe, y: Ie }), M = requestAnimationFrame(X);
  }
  const q = {
    ...H,
    nodeId: o,
    type: O,
    position: H.position
  }, re = l.get(o), W = {
    inProgress: !0,
    isValid: null,
    from: ko(re, q, Ce.Left, !0),
    fromHandle: q,
    fromPosition: q.position,
    fromNode: re,
    to: E,
    toHandle: null,
    toPosition: _l[q.position],
    toNode: null
  };
  b(W);
  let se = W;
  v == null || v(e, { nodeId: o, handleId: r, handleType: O });
  function me(fe) {
    if (!C() || !q) {
      xe(fe);
      return;
    }
    const Ie = p();
    E = Vn(fe, P), D = np(Do(E, Ie, !1, [1, 1]), n, l, q), N || (X(), N = !0);
    const G = Sc(fe, {
      handle: D,
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
    B = G.handleDomNode, T = G.connection, I = rp(!!D, G.isValid);
    const ae = {
      // from stays the same
      ...se,
      isValid: I,
      to: D && I ? vc({ x: D.x, y: D.y }, Ie) : E,
      toHandle: G.toHandle,
      toPosition: I && G.toHandle ? G.toHandle.position : _l[q.position],
      toNode: G.toHandle ? l.get(G.toHandle.nodeId) : null
    };
    I && D && se.toHandle && ae.toHandle && se.toHandle.type === ae.toHandle.type && se.toHandle.nodeId === ae.toHandle.nodeId && se.toHandle.id === ae.toHandle.id && se.to.x === ae.to.x && se.to.y === ae.to.y || (b(ae), se = ae);
  }
  function xe(fe) {
    (D || B) && T && I && (_ == null || _(T));
    const { inProgress: Ie, ...G } = se, ae = {
      ...G,
      toPosition: se.toHandle ? se.toPosition : null
    };
    x == null || x(fe, ae), i && (m == null || m(fe, ae)), g(), cancelAnimationFrame(M), N = !1, I = !1, T = null, B = null, $.removeEventListener("mousemove", me), $.removeEventListener("mouseup", xe), $.removeEventListener("touchmove", me), $.removeEventListener("touchend", xe);
  }
  $.addEventListener("mousemove", me), $.addEventListener("mouseup", xe), $.addEventListener("touchmove", me), $.addEventListener("touchend", xe);
}
function Sc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = $c, nodeLookup: c }) {
  const f = i === "target", d = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: g, y: v } = Vn(e), _ = s.elementFromPoint(g, v), x = _ != null && _.classList.contains(`${a}-flow__handle`) ? _ : d, k = {
    handleDomNode: x,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (x) {
    const m = Ec(void 0, x), b = x.getAttribute("data-nodeid"), p = x.getAttribute("data-handleid"), C = x.classList.contains("connectable"), S = x.classList.contains("connectableend");
    if (!b || !m)
      return k;
    const $ = {
      source: f ? b : r,
      sourceHandle: f ? p : o,
      target: f ? r : b,
      targetHandle: f ? o : p
    };
    k.connection = $;
    const D = C && S && (n === ur.Strict ? f && m === "source" || !f && m === "target" : b !== r || p !== o);
    k.isValid = D && u($), k.toHandle = kc(b, m, p, c, n, !1);
  }
  return k;
}
const ip = {
  onPointerDown: op,
  isValid: Sc
};
function sp({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = jt(e);
  function i({ translateExtent: a, width: l, height: u, zoomStep: c = 10, pannable: f = !0, zoomable: d = !0, inversePan: g = !1 }) {
    const v = (b) => {
      const p = n();
      if (b.sourceEvent.type !== "wheel" || !t)
        return;
      const C = -b.sourceEvent.deltaY * (b.sourceEvent.deltaMode === 1 ? 0.05 : b.sourceEvent.deltaMode ? 1 : 2e-3) * c, S = p[2] * Math.pow(2, C);
      t.scaleTo(S);
    };
    let _ = [0, 0];
    const x = (b) => {
      (b.sourceEvent.type === "mousedown" || b.sourceEvent.type === "touchstart") && (_ = [
        b.sourceEvent.clientX ?? b.sourceEvent.touches[0].clientX,
        b.sourceEvent.clientY ?? b.sourceEvent.touches[0].clientY
      ]);
    }, k = (b) => {
      const p = n();
      if (b.sourceEvent.type !== "mousemove" && b.sourceEvent.type !== "touchmove" || !t)
        return;
      const C = [
        b.sourceEvent.clientX ?? b.sourceEvent.touches[0].clientX,
        b.sourceEvent.clientY ?? b.sourceEvent.touches[0].clientY
      ], S = [C[0] - _[0], C[1] - _[1]];
      _ = C;
      const $ = r() * Math.max(p[2], Math.log(p[2])) * (g ? -1 : 1), M = {
        x: p[0] - S[0] * $,
        y: p[1] - S[1] * $
      }, D = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: M.x,
        y: M.y,
        zoom: p[2]
      }, D, a);
    }, m = uc().on("start", x).on("zoom", f ? k : null).on("zoom.wheel", d ? v : null);
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
const ap = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, qi = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), gs = ({ x: e, y: t, zoom: n }) => Xi.translate(e, t).scale(n), xr = (e, t) => e.target.closest(`.${t}`), Pc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), hs = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, Nc = (e) => {
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
      const x = rn(c), k = Nc(c), m = f * Math.pow(2, k);
      r.scaleTo(n, m, x, c);
      return;
    }
    const d = c.deltaMode === 1 ? 20 : 1;
    let g = o === qn.Vertical ? 0 : c.deltaX * d, v = o === qn.Horizontal ? 0 : c.deltaY * d;
    !bi() && c.shiftKey && o !== qn.Vertical && (g = c.deltaY * d, v = 0), r.translateBy(
      n,
      -(g / f) * i,
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
    e.usedRightMouseButton = !!(n && Pc(t, e.mouseButton ?? 0)), (s = i.sourceEvent) != null && s.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((a = i.sourceEvent) != null && a.internal) && (o == null || o(i.sourceEvent, qi(i.transform)));
  };
}
function fp({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    var a;
    if (!((a = s.sourceEvent) != null && a.internal) && (e.isZoomingOrPanning = !1, i && Pc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && ap(e.prevViewport, s.transform))) {
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
    const g = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || c.type === "wheel") && g;
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
  }, f = e.getBoundingClientRect(), d = uc().clickDistance(!Tn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), g = jt(e).call(d);
  b({
    x: i.x,
    y: i.y,
    zoom: Ir(i.zoom, t, n)
  }, [
    [0, 0],
    [f.width, f.height]
  ], o);
  const v = g.on("wheel.zoom"), _ = g.on("dblclick.zoom");
  d.wheelDelta(Nc);
  function x(z, O) {
    return g ? new Promise((P) => {
      d == null || d.transform(hs(g, O == null ? void 0 : O.duration, () => P(!0)), z);
    }) : Promise.resolve(!1);
  }
  function k({ noWheelClassName: z, noPanClassName: O, onPaneContextMenu: P, userSelectionActive: H, panOnScroll: E, panOnDrag: N, panOnScrollMode: T, panOnScrollSpeed: I, preventScrolling: B, zoomOnPinch: X, zoomOnScroll: q, zoomOnDoubleClick: re, zoomActivationKeyPressed: J, lib: W, onTransformChange: se }) {
    H && !c.isZoomingOrPanning && m();
    const xe = E && !J && !H ? lp({
      zoomPanValues: c,
      noWheelClassName: z,
      d3Selection: g,
      d3Zoom: d,
      panOnScrollMode: T,
      panOnScrollSpeed: I,
      zoomOnPinch: X,
      onPanZoomStart: a,
      onPanZoom: s,
      onPanZoomEnd: l
    }) : up({
      noWheelClassName: z,
      preventScrolling: B,
      d3ZoomHandler: v
    });
    if (g.on("wheel.zoom", xe, { passive: !1 }), !H) {
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
        onTransformChange: se
      });
      d.on("zoom", G);
      const ae = fp({
        zoomPanValues: c,
        panOnDrag: N,
        panOnScroll: E,
        onPaneContextMenu: P,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      d.on("end", ae);
    }
    const fe = gp({
      zoomActivationKeyPressed: J,
      panOnDrag: N,
      zoomOnScroll: q,
      panOnScroll: E,
      zoomOnDoubleClick: re,
      zoomOnPinch: X,
      userSelectionActive: H,
      noPanClassName: O,
      noWheelClassName: z,
      lib: W
    });
    d.filter(fe), re ? g.on("dblclick.zoom", _) : g.on("dblclick.zoom", null);
  }
  function m() {
    d.on("zoom", null);
  }
  async function b(z, O, P) {
    const H = gs(z), E = d == null ? void 0 : d.constrain()(H, O, P);
    return E && await x(E), new Promise((N) => N(E));
  }
  async function p(z, O) {
    const P = gs(z);
    return await x(P, O), new Promise((H) => H(P));
  }
  function C(z) {
    if (g) {
      const O = gs(z), P = g.property("__zoom");
      (P.k !== z.zoom || P.x !== z.x || P.y !== z.y) && (d == null || d.transform(g, O, null, { sync: !0 }));
    }
  }
  function S() {
    const z = g ? lc(g.node()) : { x: 0, y: 0, k: 1 };
    return { x: z.x, y: z.y, zoom: z.k };
  }
  function $(z, O) {
    return g ? new Promise((P) => {
      d == null || d.scaleTo(hs(g, O == null ? void 0 : O.duration, () => P(!0)), z);
    }) : Promise.resolve(!1);
  }
  function M(z, O) {
    return g ? new Promise((P) => {
      d == null || d.scaleBy(hs(g, O == null ? void 0 : O.duration, () => P(!0)), z);
    }) : Promise.resolve(!1);
  }
  function D(z) {
    d == null || d.scaleExtent(z);
  }
  function A(z) {
    d == null || d.translateExtent(z);
  }
  function V(z) {
    const O = !Tn(z) || z < 0 ? 0 : z;
    d == null || d.clickDistance(O);
  }
  return {
    update: k,
    destroy: m,
    setViewport: p,
    setViewportConstrained: b,
    getViewport: S,
    scaleTo: $,
    scaleBy: M,
    setScaleExtent: D,
    setTranslateExtent: A,
    syncViewport: C,
    setClickDistance: V
  };
}
var Dl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Dl || (Dl = {}));
var vp = /* @__PURE__ */ oe('<div role="button" tabindex="-1"><!></div>');
function Jn(e, t) {
  ce(t, !1);
  const [n, r] = it(), o = () => ee(re, "$connectable", n), i = () => ee(xe, "$connectionRadius", n), s = () => ee(se, "$domNode", n), a = () => ee(me, "$nodeLookup", n), l = () => ee(W, "$connectionMode", n), u = () => ee(G, "$lib", n), c = () => ee(We, "$autoPanOnConnect", n), f = () => ee(Se, "$flowId", n), d = () => ee(Ie, "$isValidConnectionStore", n), g = () => ee(Me, "$onedgecreate", n), v = () => ee(ie, "$onConnectAction", n), _ = () => ee(he, "$onConnectStartAction", n), x = () => ee($e, "$onConnectEndAction", n), k = () => ee(fe, "$viewport", n), m = () => ee(at, "$connection", n), b = () => ee(Ue, "$edges", n), p = () => ee(Be, "$connectionLookup", n), C = /* @__PURE__ */ ne(), S = /* @__PURE__ */ ne(), $ = /* @__PURE__ */ ne(), M = /* @__PURE__ */ ne(), D = /* @__PURE__ */ ne(), A = /* @__PURE__ */ ne(), V = /* @__PURE__ */ ne(), z = /* @__PURE__ */ ne();
  let O = w(t, "id", 12, void 0), P = w(t, "type", 12, "source"), H = w(t, "position", 28, () => Ce.Top), E = w(t, "style", 12, void 0), N = w(t, "isValidConnection", 12, void 0), T = w(t, "onconnect", 12, void 0), I = w(t, "ondisconnect", 12, void 0), B = w(t, "isConnectable", 12, void 0), X = w(t, "class", 12, void 0);
  const q = sr("svelteflow__node_id"), re = sr("svelteflow__node_connectable"), J = Je(), {
    connectionMode: W,
    domNode: se,
    nodeLookup: me,
    connectionRadius: xe,
    viewport: fe,
    isValidConnection: Ie,
    lib: G,
    addEdge: ae,
    onedgecreate: Me,
    panBy: Oe,
    cancelConnection: Xe,
    updateConnection: te,
    autoPanOnConnect: We,
    edges: Ue,
    connectionLookup: Be,
    onconnect: ie,
    onconnectstart: he,
    onconnectend: $e,
    flowId: Se,
    connection: at
  } = J;
  function ut(Pe) {
    const nt = mc(Pe);
    (nt && Pe.button === 0 || !nt) && ip.onPointerDown(Pe, {
      handleId: h($),
      nodeId: q,
      isTarget: h(C),
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
        const Ve = g() ? g()(Le) : Le;
        Ve && (ae(Ve), (rt = v()) == null || rt(Le));
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
        (rt = x()) == null || rt(Le, Ve);
      },
      getTransform: () => [
        k().x,
        k().y,
        k().zoom
      ],
      getFromHandle: () => m().fromHandle
    });
  }
  let Q = /* @__PURE__ */ ne(null), Ye = /* @__PURE__ */ ne();
  ge(() => j(P()), () => {
    U(C, P() === "target");
  }), ge(
    () => (j(B()), o()),
    () => {
      U(S, B() !== void 0 ? B() : o());
    }
  ), ge(() => j(O()), () => {
    U($, O() || null);
  }), ge(
    () => (j(T()), j(I()), b(), p(), j(P()), j(O())),
    () => {
      (T() || I()) && (b(), U(Ye, p().get(`${q}-${P()}${O() ? `-${O()}` : ""}`)));
    }
  ), ge(
    () => (h(Q), h(Ye), j(I()), j(T())),
    () => {
      if (h(Q) && !x0(h(Ye), h(Q))) {
        const Pe = h(Ye) ?? /* @__PURE__ */ new Map();
        xl(h(Q), Pe, I()), xl(Pe, h(Q), T());
      }
      U(Q, h(Ye) ?? /* @__PURE__ */ new Map());
    }
  ), ge(() => m(), () => {
    U(M, !!m().fromHandle);
  }), ge(
    () => (m(), j(P()), h($)),
    () => {
      var Pe, nt, Le;
      U(D, ((Pe = m().fromHandle) == null ? void 0 : Pe.nodeId) === q && ((nt = m().fromHandle) == null ? void 0 : nt.type) === P() && ((Le = m().fromHandle) == null ? void 0 : Le.id) === h($));
    }
  ), ge(
    () => (m(), j(P()), h($)),
    () => {
      var Pe, nt, Le;
      U(A, ((Pe = m().toHandle) == null ? void 0 : Pe.nodeId) === q && ((nt = m().toHandle) == null ? void 0 : nt.type) === P() && ((Le = m().toHandle) == null ? void 0 : Le.id) === h($));
    }
  ), ge(
    () => (l(), m(), j(P()), h($)),
    () => {
      var Pe, nt, Le;
      U(V, l() === ur.Strict ? ((Pe = m().fromHandle) == null ? void 0 : Pe.type) !== P() : q !== ((nt = m().fromHandle) == null ? void 0 : nt.nodeId) || h($) !== ((Le = m().fromHandle) == null ? void 0 : Le.id));
    }
  ), ge(() => (h(A), m()), () => {
    U(z, h(A) && m().isValid);
  }), gt(), He();
  var ue = vp();
  pe(ue, "data-nodeid", q);
  let en;
  var tn = F(ue);
  pt(tn, t, "default", {}), Z(ue), Ee(
    (Pe, nt) => {
      pe(ue, "data-handleid", h($)), pe(ue, "data-handlepos", H()), pe(ue, "data-id", `${f() ?? ""}-${q ?? ""}-${O() || ""}-${P() ?? ""}`), en = $t(ue, 1, Pe, null, en, nt), ft(ue, E());
    },
    [
      () => kn(Pt([
        "svelte-flow__handle",
        `svelte-flow__handle-${H()}`,
        "nodrag",
        "nopan",
        H(),
        X()
      ])),
      () => ({
        valid: h(z),
        connectingto: h(A),
        connectingfrom: h(D),
        source: !h(C),
        target: h(C),
        connectablestart: h(S),
        connectableend: h(S),
        connectable: h(S),
        connectionindicator: h(S) && (!h(M) || h(V))
      })
    ],
    ve
  ), Ze("mousedown", ue, ut), Ze("touchstart", ue, ut), L(e, ue);
  var fn = de({
    get id() {
      return O();
    },
    set id(Pe) {
      O(Pe), y();
    },
    get type() {
      return P();
    },
    set type(Pe) {
      P(Pe), y();
    },
    get position() {
      return H();
    },
    set position(Pe) {
      H(Pe), y();
    },
    get style() {
      return E();
    },
    set style(Pe) {
      E(Pe), y();
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
      return I();
    },
    set ondisconnect(Pe) {
      I(Pe), y();
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
  return r(), fn;
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
var pp = /* @__PURE__ */ oe("<!> <!>", 1);
function ki(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  st(n, ["data", "targetPosition", "sourcePosition"]), ce(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "targetPosition", 12, void 0), i = w(t, "sourcePosition", 12, void 0);
  He();
  var s = pp(), a = we(s);
  const l = /* @__PURE__ */ ve(() => o() ?? Ce.Top);
  Jn(a, {
    type: "target",
    get position() {
      return h(l);
    }
  });
  var u = R(a), c = R(u);
  const f = /* @__PURE__ */ ve(() => i() ?? Ce.Bottom);
  return Jn(c, {
    type: "source",
    get position() {
      return h(f);
    }
  }), Ee(() => {
    var d;
    return Yt(u, ` ${((d = r()) == null ? void 0 : d.label) ?? ""} `);
  }), L(e, s), de({
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
function Tc(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  st(n, ["data", "sourcePosition"]), ce(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "sourcePosition", 12, void 0);
  He(), Ne();
  var i = mp(), s = we(i), a = R(s);
  const l = /* @__PURE__ */ ve(() => o() ?? Ce.Bottom);
  return Jn(a, {
    type: "source",
    get position() {
      return h(l);
    }
  }), Ee(() => {
    var u;
    return Yt(s, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), L(e, i), de({
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
var yp = /* @__PURE__ */ oe(" <!>", 1);
function Mc(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  st(n, ["data", "targetPosition"]), ce(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "targetPosition", 12, void 0);
  He(), Ne();
  var i = yp(), s = we(i), a = R(s);
  const l = /* @__PURE__ */ ve(() => o() ?? Ce.Top);
  return Jn(a, {
    type: "target",
    get position() {
      return h(l);
    }
  }), Ee(() => {
    var u;
    return Yt(s, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), L(e, i), de({
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
function Vc(e, t) {
  ce(t, !1);
  const [n, r] = it(), o = () => ee(i, "$domNode", n), { domNode: i } = Je();
  He();
  var s = wp(), a = F(s);
  pt(a, t, "default", {}), Z(s), vt(s, (l, u) => $r == null ? void 0 : $r(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), L(e, s), de(), r();
}
le(Vc, {}, ["default"], [], !0);
function Ac() {
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
function Dc(e, t) {
  ce(t, !1);
  let n = w(t, "style", 12, void 0), r = w(t, "x", 12, void 0), o = w(t, "y", 12, void 0);
  const i = Ac(), s = sr("svelteflow__edge_id");
  return He(), Vc(e, {
    children: (a, l) => {
      var u = _p();
      let c;
      var f = F(u);
      pt(f, t, "default", {}), Z(u), Ee(() => c = ft(u, "pointer-events: all;" + n(), c, {
        transform: `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`
      })), Ze("keyup", u, () => {
      }), Ze("click", u, () => {
        s && i(s);
      }), L(a, u);
    },
    $$slots: { default: !0 }
  }), de({
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
le(Dc, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var xp = /* @__PURE__ */ _e('<path fill="none" class="svelte-flow__edge-interaction"></path>'), bp = /* @__PURE__ */ _e('<path fill="none"></path><!><!>', 1);
function Oo(e, t) {
  ce(t, !1);
  let n = w(t, "id", 12, void 0), r = w(t, "path", 12), o = w(t, "label", 12, void 0), i = w(t, "labelX", 12, void 0), s = w(t, "labelY", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "markerStart", 12, void 0), u = w(t, "markerEnd", 12, void 0), c = w(t, "style", 12, void 0), f = w(t, "interactionWidth", 12, 20), d = w(t, "class", 12, void 0), g = f() === void 0 ? 20 : f();
  He();
  var v = bp(), _ = we(v), x = R(_);
  {
    var k = (p) => {
      var C = xp();
      pe(C, "stroke-opacity", 0), pe(C, "stroke-width", g), Ee(() => pe(C, "d", r())), L(p, C);
    };
    be(x, (p) => {
      g && p(k);
    });
  }
  var m = R(x);
  {
    var b = (p) => {
      Dc(p, {
        get x() {
          return i();
        },
        get y() {
          return s();
        },
        get style() {
          return a();
        },
        children: (C, S) => {
          Ne();
          var $ = Re();
          Ee(() => Yt($, o())), L(C, $);
        },
        $$slots: { default: !0 }
      });
    };
    be(m, (p) => {
      o() && p(b);
    });
  }
  return Ee(
    (p) => {
      pe(_, "id", n()), pe(_, "d", r()), $t(_, 0, p), pe(_, "marker-start", l()), pe(_, "marker-end", u()), ft(_, c());
    },
    [
      () => kn(Pt(["svelte-flow__edge-path", d()]))
    ],
    ve
  ), L(e, v), de({
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
  ]), ce(t, !1);
  const r = /* @__PURE__ */ ne(), o = /* @__PURE__ */ ne(), i = /* @__PURE__ */ ne();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), g = w(t, "sourceY", 12), v = w(t, "sourcePosition", 12), _ = w(t, "targetX", 12), x = w(t, "targetY", 12), k = w(t, "targetPosition", 12);
  return ge(
    () => (h(r), h(o), h(i), j(d()), j(g()), j(_()), j(x()), j(v()), j(k())),
    () => {
      ((m) => (U(r, m[0]), U(o, m[1]), U(i, m[2])))(yc({
        sourceX: d(),
        sourceY: g(),
        targetX: _(),
        targetY: x(),
        sourcePosition: v(),
        targetPosition: k()
      }));
    }
  ), gt(), He(), Oo(e, {
    get path() {
      return h(r);
    },
    get labelX() {
      return h(o);
    },
    get labelY() {
      return h(i);
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
  }), de({
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
      return g();
    },
    set sourceY(m) {
      g(m), y();
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
      return x();
    },
    set targetY(m) {
      x(m), y();
    },
    get targetPosition() {
      return k();
    },
    set targetPosition(m) {
      k(m), y();
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
  ]), ce(t, !1);
  const r = /* @__PURE__ */ ne(), o = /* @__PURE__ */ ne(), i = /* @__PURE__ */ ne();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), g = w(t, "sourceY", 12), v = w(t, "sourcePosition", 12), _ = w(t, "targetX", 12), x = w(t, "targetY", 12), k = w(t, "targetPosition", 12);
  return ge(
    () => (h(r), h(o), h(i), j(d()), j(g()), j(_()), j(x()), j(v()), j(k())),
    () => {
      ((m) => (U(r, m[0]), U(o, m[1]), U(i, m[2])))(Ci({
        sourceX: d(),
        sourceY: g(),
        targetX: _(),
        targetY: x(),
        sourcePosition: v(),
        targetPosition: k()
      }));
    }
  ), gt(), He(), Oo(e, {
    get path() {
      return h(r);
    },
    get labelX() {
      return h(o);
    },
    get labelY() {
      return h(i);
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
  }), de({
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
      return g();
    },
    set sourceY(m) {
      g(m), y();
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
      return x();
    },
    set targetY(m) {
      x(m), y();
    },
    get targetPosition() {
      return k();
    },
    set targetPosition(m) {
      k(m), y();
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
  ]), ce(t, !1);
  const r = /* @__PURE__ */ ne(), o = /* @__PURE__ */ ne(), i = /* @__PURE__ */ ne();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), g = w(t, "sourceY", 12), v = w(t, "targetX", 12), _ = w(t, "targetY", 12);
  return ge(
    () => (h(r), h(o), h(i), j(d()), j(g()), j(v()), j(_())),
    () => {
      ((x) => (U(r, x[0]), U(o, x[1]), U(i, x[2])))(zs({
        sourceX: d(),
        sourceY: g(),
        targetX: v(),
        targetY: _()
      }));
    }
  ), gt(), He(), Oo(e, {
    get path() {
      return h(r);
    },
    get labelX() {
      return h(o);
    },
    get labelY() {
      return h(i);
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
  }), de({
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
      return f();
    },
    set interactionWidth(x) {
      f(x), y();
    },
    get sourceX() {
      return d();
    },
    set sourceX(x) {
      d(x), y();
    },
    get sourceY() {
      return g();
    },
    set sourceY(x) {
      g(x), y();
    },
    get targetX() {
      return v();
    },
    set targetX(x) {
      v(x), y();
    },
    get targetY() {
      return _();
    },
    set targetY(x) {
      _(x), y();
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
  ]), ce(t, !1);
  const r = /* @__PURE__ */ ne(), o = /* @__PURE__ */ ne(), i = /* @__PURE__ */ ne();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), g = w(t, "sourceY", 12), v = w(t, "sourcePosition", 12), _ = w(t, "targetX", 12), x = w(t, "targetY", 12), k = w(t, "targetPosition", 12);
  return ge(
    () => (h(r), h(o), h(i), j(d()), j(g()), j(_()), j(x()), j(v()), j(k())),
    () => {
      ((m) => (U(r, m[0]), U(o, m[1]), U(i, m[2])))(Ci({
        sourceX: d(),
        sourceY: g(),
        targetX: _(),
        targetY: x(),
        sourcePosition: v(),
        targetPosition: k(),
        borderRadius: 0
      }));
    }
  ), gt(), He(), Oo(e, {
    get path() {
      return h(r);
    },
    get labelX() {
      return h(o);
    },
    get labelY() {
      return h(i);
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
  }), de({
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
      return g();
    },
    set sourceY(m) {
      g(m), y();
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
      return x();
    },
    set targetY(m) {
      x(m), y();
    },
    get targetPosition() {
      return k();
    },
    set targetPosition(m) {
      k(m), y();
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
  const f = (_) => (_c(_, t, n, {
    elevateNodesOnSelect: c,
    nodeOrigin: r,
    nodeExtent: o,
    defaults: u,
    checkEquality: !1
  }), l = _, s(l), l), d = (_) => f(_(l)), g = (_) => {
    u = _;
  }, v = (_) => {
    c = _.elevateNodesOnSelect ?? c;
  };
  return f(l), {
    subscribe: i,
    set: f,
    update: d,
    setDefaultOptions: g,
    setOptions: v
  };
}, Sp = (e, t, n, r) => {
  const { subscribe: o, set: i, update: s } = ye([]);
  let a = e, l = {};
  const u = (d) => {
    const g = l ? d.map((v) => ({ ...l, ...v })) : d;
    bc(t, n, g), a = g, i(a);
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
  default: ki,
  group: Hc
}, Rc = {
  straight: Lc,
  smoothstep: Oc,
  default: Ei,
  step: Ic
}, Pp = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) => {
  const a = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), f = i ?? [0, 0], d = s ?? wi;
  _c(e, a, l, {
    nodeExtent: d,
    nodeOrigin: f,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), bc(u, c, t);
  let g = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const v = Ao(a, {
      filter: (_) => !!((_.width || _.initialWidth) && (_.height || _.initialHeight))
    });
    g = wa(v, n, r, 0.5, 2, 0.1);
  }
  return {
    flowId: ye(null),
    nodes: $p(e, a, l, f, d),
    nodeLookup: Kt(a),
    parentLookup: Kt(l),
    edgeLookup: Kt(c),
    visibleNodes: Kt([]),
    edges: Sp(t, u, c),
    visibleEdges: Kt([]),
    connectionLookup: Kt(u),
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
    nodeTypes: ye(zc),
    edgeTypes: ye(Rc),
    viewport: ye(g),
    connectionMode: ye(ur.Strict),
    domNode: ye(null),
    connection: Kt(Os),
    connectionLineType: ye(Er.Bezier),
    connectionRadius: ye(20),
    isValidConnection: ye(() => !0),
    nodesDraggable: ye(!0),
    nodesConnectable: ye(!0),
    elementsSelectable: ye(!0),
    selectNodesOnDrag: ye(!0),
    markers: Kt([]),
    defaultMarkerColor: ye("#b1b1b7"),
    lib: Kt("svelte"),
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
    initialized: Kt(!1)
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
    return n ? cc(t, { x: 0, y: 0, width: r, height: o }, s, !0) : Array.from(t.values());
  });
}
const Gi = Symbol();
function Bc({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) {
  const a = Pp({
    nodes: e,
    edges: t,
    width: n,
    height: r,
    fitView: o,
    nodeOrigin: i,
    nodeExtent: s
  });
  function l(E) {
    a.nodeTypes.set({
      ...zc,
      ...E
    });
  }
  function u(E) {
    a.edgeTypes.set({
      ...Rc,
      ...E
    });
  }
  function c(E) {
    const N = K(a.edges);
    a.edges.set(L0(E, N));
  }
  const f = (E, N = !1) => {
    var I;
    const T = K(a.nodeLookup);
    for (const [B, X] of E) {
      const q = (I = T.get(B)) == null ? void 0 : I.internals.userNode;
      q && (q.position = X.position, q.dragging = N);
    }
    a.nodes.update((B) => B);
  };
  function d(E) {
    var X, q, re;
    const N = K(a.nodeLookup), T = K(a.parentLookup), { changes: I, updatedInternals: B } = G0(E, N, K(a.parentLookup), K(a.domNode), K(a.nodeOrigin));
    if (B) {
      if (X0(N, T, { nodeOrigin: i, nodeExtent: s }), !K(a.fitViewOnInitDone) && K(a.fitViewOnInit)) {
        const J = K(a.fitViewOptions), W = v({
          ...J,
          nodes: J == null ? void 0 : J.nodes
        });
        a.fitViewOnInitDone.set(W);
      }
      for (const J of I) {
        const W = (X = N.get(J.id)) == null ? void 0 : X.internals.userNode;
        if (W)
          switch (J.type) {
            case "dimensions": {
              const se = { ...W.measured, ...J.dimensions };
              J.setAttributes && (W.width = ((q = J.dimensions) == null ? void 0 : q.width) ?? W.width, W.height = ((re = J.dimensions) == null ? void 0 : re.height) ?? W.height), W.measured = se;
              break;
            }
            case "position":
              W.position = J.position ?? W.position;
              break;
          }
      }
      a.nodes.update((J) => J), K(a.nodesInitialized) || a.nodesInitialized.set(!0);
    }
  }
  function g(E) {
    const N = K(a.panZoom), T = K(a.domNode);
    if (!N || !T)
      return Promise.resolve(!1);
    const { width: I, height: B } = _a(T), X = bl(K(a.nodeLookup), E);
    return Cl({
      nodes: X,
      width: I,
      height: B,
      minZoom: K(a.minZoom),
      maxZoom: K(a.maxZoom),
      panZoom: N
    }, E);
  }
  function v(E) {
    const N = K(a.panZoom);
    if (!N)
      return !1;
    const T = bl(K(a.nodeLookup), E);
    return Cl({
      nodes: T,
      width: K(a.width),
      height: K(a.height),
      minZoom: K(a.minZoom),
      maxZoom: K(a.maxZoom),
      panZoom: N
    }, E), T.size > 0;
  }
  function _(E, N) {
    const T = K(a.panZoom);
    return T ? T.scaleBy(E, N) : Promise.resolve(!1);
  }
  function x(E) {
    return _(1.2, E);
  }
  function k(E) {
    return _(1 / 1.2, E);
  }
  function m(E) {
    const N = K(a.panZoom);
    N && (N.setScaleExtent([E, K(a.maxZoom)]), a.minZoom.set(E));
  }
  function b(E) {
    const N = K(a.panZoom);
    N && (N.setScaleExtent([K(a.minZoom), E]), a.maxZoom.set(E));
  }
  function p(E) {
    const N = K(a.panZoom);
    N && (N.setTranslateExtent(E), a.translateExtent.set(E));
  }
  function C(E) {
    let N = !1;
    return E.forEach((T) => {
      T.selected && (T.selected = !1, N = !0);
    }), N;
  }
  function S(E) {
    var N;
    (N = K(a.panZoom)) == null || N.setClickDistance(E);
  }
  function $(E) {
    C((E == null ? void 0 : E.nodes) || K(a.nodes)) && a.nodes.set(K(a.nodes)), C((E == null ? void 0 : E.edges) || K(a.edges)) && a.edges.set(K(a.edges));
  }
  a.deleteKeyPressed.subscribe(async (E) => {
    var N;
    if (E) {
      const T = K(a.nodes), I = K(a.edges), B = T.filter((J) => J.selected), X = I.filter((J) => J.selected), { nodes: q, edges: re } = await dc({
        nodesToRemove: B,
        edgesToRemove: X,
        nodes: T,
        edges: I,
        onBeforeDelete: K(a.onbeforedelete)
      });
      (q.length || re.length) && (a.nodes.update((J) => J.filter((W) => !q.some((se) => se.id === W.id))), a.edges.update((J) => J.filter((W) => !re.some((se) => se.id === W.id))), (N = K(a.ondelete)) == null || N({
        nodes: q,
        edges: re
      }));
    }
  });
  function M(E) {
    const N = K(a.multiselectionKeyPressed);
    a.nodes.update((T) => T.map((I) => {
      const B = E.includes(I.id), X = N && I.selected || B;
      return I.selected = X, I;
    })), N || a.edges.update((T) => T.map((I) => (I.selected = !1, I)));
  }
  function D(E) {
    const N = K(a.multiselectionKeyPressed);
    a.edges.update((T) => T.map((I) => {
      const B = E.includes(I.id), X = N && I.selected || B;
      return I.selected = X, I;
    })), N || a.nodes.update((T) => T.map((I) => (I.selected = !1, I)));
  }
  function A(E) {
    var T;
    const N = (T = K(a.nodes)) == null ? void 0 : T.find((I) => I.id === E);
    if (!N) {
      console.warn("012", Lr.error012(E));
      return;
    }
    a.selectionRect.set(null), a.selectionRectMode.set(null), N.selected ? N.selected && K(a.multiselectionKeyPressed) && $({ nodes: [N], edges: [] }) : M([E]);
  }
  function V(E) {
    const N = K(a.viewport);
    return U0({
      delta: E,
      panZoom: K(a.panZoom),
      transform: [N.x, N.y, N.zoom],
      translateExtent: K(a.translateExtent),
      width: K(a.width),
      height: K(a.height)
    });
  }
  const z = ye(Os), O = (E) => {
    z.set({ ...E });
  };
  function P() {
    z.set(Os);
  }
  function H() {
    a.fitViewOnInitDone.set(!1), a.selectionRect.set(null), a.selectionRectMode.set(null), a.snapGrid.set(null), a.isValidConnection.set(() => !0), $(), P();
  }
  return {
    // state
    ...a,
    // derived state
    visibleEdges: Np(a),
    visibleNodes: Tp(a),
    connection: Kn([z, a.viewport], ([E, N]) => E.inProgress ? {
      ...E,
      to: Do(E.to, [N.x, N.y, N.zoom])
    } : { ...E }),
    markers: Kn([a.edges, a.defaultMarkerColor, a.flowId], ([E, N, T]) => Y0(E, { defaultColor: N, id: T })),
    initialized: (() => {
      let E = !1;
      const N = K(a.nodes).length, T = K(a.edges).length;
      return Kn([a.nodesInitialized, a.edgesInitialized, a.viewportInitialized], ([I, B, X]) => E || (N === 0 ? E = X : T === 0 ? E = X && I : E = X && I && B, E));
    })(),
    // actions
    syncNodeStores: (E) => Cp(a.nodes, E),
    syncEdgeStores: (E) => kp(a.edges, E),
    syncViewport: (E) => Ep(a.panZoom, a.viewport, E),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: f,
    updateNodeInternals: d,
    zoomIn: x,
    zoomOut: k,
    fitView: (E) => g(E),
    setMinZoom: m,
    setMaxZoom: b,
    setTranslateExtent: p,
    setPaneClickDistance: S,
    unselectNodesAndEdges: $,
    addSelectedNodes: M,
    addSelectedEdges: D,
    handleNodeSelection: A,
    panBy: V,
    updateConnection: O,
    cancelConnection: P,
    reset: H
  };
}
function Je() {
  const e = sr(Gi);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function Mp({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) {
  const a = Bc({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s });
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
function Yc(e, t) {
  ce(t, !1), et(e, Vp);
  const [n, r] = it(), o = () => ee(T, "$panActivationKeyPressed", n), i = () => ee(O, "$minZoom", n), s = () => ee(P, "$maxZoom", n), a = () => ee(I, "$zoomActivationKeyPressed", n), l = () => ee(z, "$selectionRect", n), u = () => ee(E, "$translateExtent", n), c = () => ee(N, "$lib", n), f = /* @__PURE__ */ ne(), d = /* @__PURE__ */ ne(), g = /* @__PURE__ */ ne();
  let v = w(t, "initialViewport", 12, void 0), _ = w(t, "onMoveStart", 12, void 0), x = w(t, "onMove", 12, void 0), k = w(t, "onMoveEnd", 12, void 0), m = w(t, "panOnScrollMode", 12), b = w(t, "preventScrolling", 12), p = w(t, "zoomOnScroll", 12), C = w(t, "zoomOnDoubleClick", 12), S = w(t, "zoomOnPinch", 12), $ = w(t, "panOnDrag", 12), M = w(t, "panOnScroll", 12), D = w(t, "paneClickDistance", 12);
  const {
    viewport: A,
    panZoom: V,
    selectionRect: z,
    minZoom: O,
    maxZoom: P,
    dragging: H,
    translateExtent: E,
    lib: N,
    panActivationKeyPressed: T,
    zoomActivationKeyPressed: I,
    viewportInitialized: B
  } = Je(), X = (W) => A.set({
    x: W[0],
    y: W[1],
    zoom: W[2]
  });
  Xt(() => {
    fi(B, !0);
  }), ge(() => j(v()), () => {
    U(f, v() || { x: 0, y: 0, zoom: 1 });
  }), ge(
    () => (o(), j($())),
    () => {
      U(d, o() || $());
    }
  ), ge(
    () => (o(), j(M())),
    () => {
      U(g, o() || M());
    }
  ), gt(), He();
  var q = Hp(), re = F(q);
  pt(re, t, "default", {}), Z(q), vt(q, (W, se) => vs == null ? void 0 : vs(W, se), () => ({
    viewport: A,
    minZoom: i(),
    maxZoom: s(),
    initialViewport: h(f),
    dragging: H,
    panZoom: V,
    onPanZoomStart: _(),
    onPanZoom: x(),
    onPanZoomEnd: k(),
    zoomOnScroll: p(),
    zoomOnDoubleClick: C(),
    zoomOnPinch: S(),
    panOnScroll: h(g),
    panOnDrag: h(d),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: m() || qn.Free,
    zoomActivationKeyPressed: a(),
    preventScrolling: typeof b() == "boolean" ? b() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: D(),
    onTransformChange: X
  })), L(e, q);
  var J = de({
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
      return x();
    },
    set onMove(W) {
      x(W), y();
    },
    get onMoveEnd() {
      return k();
    },
    set onMoveEnd(W) {
      k(W), y();
    },
    get panOnScrollMode() {
      return m();
    },
    set panOnScrollMode(W) {
      m(W), y();
    },
    get preventScrolling() {
      return b();
    },
    set preventScrolling(W) {
      b(W), y();
    },
    get zoomOnScroll() {
      return p();
    },
    set zoomOnScroll(W) {
      p(W), y();
    },
    get zoomOnDoubleClick() {
      return C();
    },
    set zoomOnDoubleClick(W) {
      C(W), y();
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
      return M();
    },
    set panOnScroll(W) {
      M(W), y();
    },
    get paneClickDistance() {
      return D();
    },
    set paneClickDistance(W) {
      D(W), y();
    }
  });
  return r(), J;
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
function Zc(e, t) {
  ce(t, !1), et(e, Dp);
  const [n, r] = it(), o = () => ee(P, "$panActivationKeyPressed", n), i = () => ee(z, "$selectionKeyPressed", n), s = () => ee(A, "$selectionRect", n), a = () => ee(D, "$elementsSelectable", n), l = () => ee(V, "$selectionRectMode", n), u = () => ee(S, "$edges", n), c = () => ee(C, "$nodeLookup", n), f = () => ee($, "$viewport", n), d = () => ee(O, "$selectionMode", n), g = () => ee(M, "$dragging", n), v = /* @__PURE__ */ ne(), _ = /* @__PURE__ */ ne(), x = /* @__PURE__ */ ne();
  let k = w(t, "panOnDrag", 12, void 0), m = w(t, "selectionOnDrag", 12, void 0);
  const b = Ri(), {
    nodes: p,
    nodeLookup: C,
    edges: S,
    viewport: $,
    dragging: M,
    elementsSelectable: D,
    selectionRect: A,
    selectionRectMode: V,
    selectionKeyPressed: z,
    selectionMode: O,
    panActivationKeyPressed: P,
    unselectNodesAndEdges: H
  } = Je();
  let E = /* @__PURE__ */ ne(), N = null, T = [], I = !1;
  function B(G) {
    if (I) {
      I = !1;
      return;
    }
    b("paneclick", { event: G }), H(), V.set(null);
  }
  function X(G) {
    var Oe, Xe;
    if (N = h(E).getBoundingClientRect(), !D || !h(_) || G.button !== 0 || G.target !== h(E) || !N)
      return;
    (Xe = (Oe = G.target) == null ? void 0 : Oe.setPointerCapture) == null || Xe.call(Oe, G.pointerId);
    const { x: ae, y: Me } = Vn(G, N);
    H(), A.set({
      width: 0,
      height: 0,
      startX: ae,
      startY: Me,
      x: ae,
      y: Me
    });
  }
  function q(G) {
    if (!h(_) || !N || !s())
      return;
    I = !0;
    const ae = Vn(G, N), Me = s().startX ?? 0, Oe = s().startY ?? 0, Xe = {
      ...s(),
      x: ae.x < Me ? ae.x : Me,
      y: ae.y < Oe ? ae.y : Oe,
      width: Math.abs(ae.x - Me),
      height: Math.abs(ae.y - Oe)
    }, te = T.map((ie) => ie.id), We = Ls(T, u()).map((ie) => ie.id);
    T = cc(
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
    (te.length !== Be.length || Be.some((ie) => !te.includes(ie))) && p.update((ie) => ie.map(Il(Be))), (We.length !== Ue.length || Ue.some((ie) => !We.includes(ie))) && S.update((ie) => ie.map(Il(Ue))), V.set("user"), A.set(Xe);
  }
  function re(G) {
    var ae, Me;
    G.button === 0 && ((Me = (ae = G.target) == null ? void 0 : ae.releasePointerCapture) == null || Me.call(ae, G.pointerId), !h(_) && l() === "user" && G.target === h(E) && (B == null || B(G)), A.set(null), T.length > 0 && fi(V, "nodes"), i() && (I = !1));
  }
  const J = (G) => {
    var ae;
    if (Array.isArray(h(v)) && ((ae = h(v)) != null && ae.includes(2))) {
      G.preventDefault();
      return;
    }
    b("panecontextmenu", { event: G });
  };
  ge(
    () => (o(), j(k())),
    () => {
      U(v, o() || k());
    }
  ), ge(
    () => (i(), s(), j(m()), h(v)),
    () => {
      U(_, i() || s() || m() && h(v) !== !0);
    }
  ), ge(
    () => (a(), h(_), l()),
    () => {
      U(x, a() && (h(_) || l() === "user"));
    }
  ), gt(), He();
  var W = Ap(), se = Te(() => h(x) ? void 0 : Ll(B, h(E))), me = Te(() => Ll(J, h(E)));
  let xe;
  var fe = F(W);
  pt(fe, t, "default", {}), Z(W), _n(W, (G) => U(E, G), () => h(E)), Ee(
    (G) => xe = $t(W, 1, "svelte-flow__pane svelte-1esy7hx", null, xe, G),
    [
      () => ({
        draggable: k() === !0 || Array.isArray(k()) && k().includes(0),
        dragging: g(),
        selection: h(_)
      })
    ],
    ve
  ), Ze("click", W, function(...G) {
    var ae;
    (ae = h(se)) == null || ae.apply(this, G);
  }), Ze("pointerdown", W, function(...G) {
    var ae;
    (ae = h(x) ? X : void 0) == null || ae.apply(this, G);
  }), Ze("pointermove", W, function(...G) {
    var ae;
    (ae = h(x) ? q : void 0) == null || ae.apply(this, G);
  }), Ze("pointerup", W, function(...G) {
    var ae;
    (ae = h(x) ? re : void 0) == null || ae.apply(this, G);
  }), Ze("contextmenu", W, function(...G) {
    var ae;
    (ae = h(me)) == null || ae.apply(this, G);
  }), L(e, W);
  var Ie = de({
    get panOnDrag() {
      return k();
    },
    set panOnDrag(G) {
      k(G), y();
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
le(Zc, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var Op = /* @__PURE__ */ oe('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const Lp = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function Fc(e, t) {
  ce(t, !1), et(e, Lp);
  const [n, r] = it(), o = () => ee(i, "$viewport", n), { viewport: i } = Je();
  He();
  var s = Op(), a = F(s);
  pt(a, t, "default", {}), Z(s), Ee(() => ft(s, `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), L(e, s), de(), r();
}
le(Fc, {}, ["default"], [], !0);
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
function Xc(e, t) {
  ce(t, !1);
  const [n, r] = it(), o = () => ee(me, "$nodeTypes", n), i = () => ee(ae, "$elementsSelectable", n), s = () => ee(Me, "$nodesDraggable", n), a = () => ee(We, "$connectableStore", n), l = /* @__PURE__ */ ne(void 0, !0), u = /* @__PURE__ */ ne(void 0, !0), c = /* @__PURE__ */ ne(void 0, !0), f = /* @__PURE__ */ ne(void 0, !0);
  let d = w(t, "node", 13), g = w(t, "id", 13), v = w(t, "data", 29, () => ({})), _ = w(t, "selected", 13, !1), x = w(t, "draggable", 13, void 0), k = w(t, "selectable", 13, void 0), m = w(t, "connectable", 13, !0), b = w(t, "deletable", 13, !0), p = w(t, "hidden", 13, !1), C = w(t, "dragging", 13, !1), S = w(t, "resizeObserver", 13, null), $ = w(t, "style", 13, void 0), M = w(t, "type", 13, "default"), D = w(t, "isParent", 13, !1), A = w(t, "positionX", 13), V = w(t, "positionY", 13), z = w(t, "sourcePosition", 13, void 0), O = w(t, "targetPosition", 13, void 0), P = w(t, "zIndex", 13), H = w(t, "measuredWidth", 13, void 0), E = w(t, "measuredHeight", 13, void 0), N = w(t, "initialWidth", 13, void 0), T = w(t, "initialHeight", 13, void 0), I = w(t, "width", 13, void 0), B = w(t, "height", 13, void 0), X = w(t, "dragHandle", 13, void 0), q = w(t, "initialized", 13, !1), re = w(t, "parentId", 13, void 0), J = w(t, "nodeClickDistance", 13, void 0), W = w(t, "class", 13, "");
  const se = Je(), {
    nodeTypes: me,
    nodeDragThreshold: xe,
    selectNodesOnDrag: fe,
    handleNodeSelection: Ie,
    updateNodeInternals: G,
    elementsSelectable: ae,
    nodesDraggable: Me
  } = se;
  let Oe = /* @__PURE__ */ ne(void 0, !0), Xe = /* @__PURE__ */ ne(null, !0);
  const te = Ri(), We = ye(m());
  let Ue = /* @__PURE__ */ ne(void 0, !0), Be = /* @__PURE__ */ ne(void 0, !0), ie = /* @__PURE__ */ ne(void 0, !0);
  Ar("svelteflow__node_id", g()), Ar("svelteflow__node_connectable", We), ua(() => {
    var Q;
    h(Xe) && ((Q = S()) == null || Q.unobserve(h(Xe)));
  });
  function he(Q) {
    k() && (!K(fe) || !x() || K(xe) > 0) && Ie(g()), te("nodeclick", { node: d().internals.userNode, event: Q });
  }
  ge(() => j(M()), () => {
    U(l, M() || "default");
  }), ge(() => (o(), h(l)), () => {
    U(u, !!o()[h(l)]);
  }), ge(
    () => (o(), h(l), ki),
    () => {
      U(c, o()[h(l)] || ki);
    }
  ), ge(
    () => (h(u), j(M())),
    () => {
      h(u) || console.warn("003", Lr.error003(M()));
    }
  ), ge(
    () => (j(I()), j(B()), j(N()), j(T()), j(H()), j(E())),
    () => {
      U(f, Ip({
        width: I(),
        height: B(),
        initialWidth: N(),
        initialHeight: T(),
        measuredWidth: H(),
        measuredHeight: E()
      }));
    }
  ), ge(() => j(m()), () => {
    We.set(!!m());
  }), ge(
    () => (h(Ue), h(l), h(Be), j(z()), h(ie), j(O()), j(g()), h(Oe)),
    () => {
      (h(Ue) && h(l) !== h(Ue) || h(Be) && z() !== h(Be) || h(ie) && O() !== h(ie)) && requestAnimationFrame(() => G(/* @__PURE__ */ new Map([
        [
          g(),
          {
            id: g(),
            nodeElement: h(Oe),
            force: !0
          }
        ]
      ]))), U(Ue, h(l)), U(Be, z()), U(ie, O());
    }
  ), ge(
    () => (j(S()), h(Oe), h(Xe), j(q())),
    () => {
      S() && (h(Oe) !== h(Xe) || !q()) && (h(Xe) && S().unobserve(h(Xe)), h(Oe) && S().observe(h(Oe)), U(Xe, h(Oe)));
    }
  ), gt(), He(!0);
  var $e = tt(), Se = we($e);
  {
    var at = (Q) => {
      var Ye = zp();
      let ue, en;
      var tn = F(Ye);
      const fn = /* @__PURE__ */ ve(() => _() ?? !1), Pe = /* @__PURE__ */ ve(() => k() ?? i() ?? !0), nt = /* @__PURE__ */ ve(() => b() ?? !0), Le = /* @__PURE__ */ ve(() => x() ?? s() ?? !0);
      Pu(tn, () => h(c), (Ve, rt) => {
        rt(Ve, {
          get data() {
            return v();
          },
          get id() {
            return g();
          },
          get selected() {
            return h(fn);
          },
          get selectable() {
            return h(Pe);
          },
          get deletable() {
            return h(nt);
          },
          get sourcePosition() {
            return z();
          },
          get targetPosition() {
            return O();
          },
          get zIndex() {
            return P();
          },
          get dragging() {
            return C();
          },
          get draggable() {
            return h(Le);
          },
          get dragHandle() {
            return X();
          },
          get parentId() {
            return re();
          },
          get type() {
            return h(l);
          },
          get isConnectable() {
            return a();
          },
          get positionAbsoluteX() {
            return A();
          },
          get positionAbsoluteY() {
            return V();
          },
          get width() {
            return I();
          },
          get height() {
            return B();
          }
        });
      }), Z(Ye), vt(Ye, (Ve, rt) => Sr == null ? void 0 : Sr(Ve, rt), () => ({
        nodeId: g(),
        isSelectable: k(),
        disabled: !1,
        handleSelector: X(),
        noDragClass: "nodrag",
        nodeClickDistance: J(),
        onNodeMouseDown: Ie,
        onDrag: (Ve, rt, nn, Wt) => {
          te("nodedrag", { event: Ve, targetNode: nn, nodes: Wt });
        },
        onDragStart: (Ve, rt, nn, Wt) => {
          te("nodedragstart", { event: Ve, targetNode: nn, nodes: Wt });
        },
        onDragStop: (Ve, rt, nn, Wt) => {
          te("nodedragstop", { event: Ve, targetNode: nn, nodes: Wt });
        },
        store: se
      })), _n(Ye, (Ve) => U(Oe, Ve), () => h(Oe)), zt(() => Ze("click", Ye, he)), zt(() => Ze("mouseenter", Ye, (Ve) => te("nodemouseenter", { node: d(), event: Ve }))), zt(() => Ze("mouseleave", Ye, (Ve) => te("nodemouseleave", { node: d(), event: Ve }))), zt(() => Ze("mousemove", Ye, (Ve) => te("nodemousemove", { node: d(), event: Ve }))), zt(() => Ze("contextmenu", Ye, (Ve) => te("nodecontextmenu", { node: d(), event: Ve }))), Ee(
        (Ve, rt) => {
          pe(Ye, "data-id", g()), ue = $t(Ye, 1, Ve, null, ue, rt), en = ft(Ye, `${$() ?? ""};${h(f).width ?? ""}${h(f).height ?? ""}`, en, {
            "z-index": P(),
            transform: `translate(${A() ?? ""}px, ${V() ?? ""}px)`,
            visibility: q() ? "visible" : "hidden"
          });
        },
        [
          () => kn(Pt([
            "svelte-flow__node",
            `svelte-flow__node-${h(l)}`,
            W()
          ])),
          () => ({
            dragging: C(),
            selected: _(),
            draggable: x(),
            connectable: m(),
            selectable: k(),
            nopan: x(),
            parent: D()
          })
        ],
        ve
      ), L(Q, Ye);
    };
    be(Se, (Q) => {
      p() || Q(at);
    });
  }
  L(e, $e);
  var ut = de({
    get node() {
      return d();
    },
    set node(Q) {
      d(Q), y();
    },
    get id() {
      return g();
    },
    set id(Q) {
      g(Q), y();
    },
    get data() {
      return v();
    },
    set data(Q) {
      v(Q), y();
    },
    get selected() {
      return _();
    },
    set selected(Q) {
      _(Q), y();
    },
    get draggable() {
      return x();
    },
    set draggable(Q) {
      x(Q), y();
    },
    get selectable() {
      return k();
    },
    set selectable(Q) {
      k(Q), y();
    },
    get connectable() {
      return m();
    },
    set connectable(Q) {
      m(Q), y();
    },
    get deletable() {
      return b();
    },
    set deletable(Q) {
      b(Q), y();
    },
    get hidden() {
      return p();
    },
    set hidden(Q) {
      p(Q), y();
    },
    get dragging() {
      return C();
    },
    set dragging(Q) {
      C(Q), y();
    },
    get resizeObserver() {
      return S();
    },
    set resizeObserver(Q) {
      S(Q), y();
    },
    get style() {
      return $();
    },
    set style(Q) {
      $(Q), y();
    },
    get type() {
      return M();
    },
    set type(Q) {
      M(Q), y();
    },
    get isParent() {
      return D();
    },
    set isParent(Q) {
      D(Q), y();
    },
    get positionX() {
      return A();
    },
    set positionX(Q) {
      A(Q), y();
    },
    get positionY() {
      return V();
    },
    set positionY(Q) {
      V(Q), y();
    },
    get sourcePosition() {
      return z();
    },
    set sourcePosition(Q) {
      z(Q), y();
    },
    get targetPosition() {
      return O();
    },
    set targetPosition(Q) {
      O(Q), y();
    },
    get zIndex() {
      return P();
    },
    set zIndex(Q) {
      P(Q), y();
    },
    get measuredWidth() {
      return H();
    },
    set measuredWidth(Q) {
      H(Q), y();
    },
    get measuredHeight() {
      return E();
    },
    set measuredHeight(Q) {
      E(Q), y();
    },
    get initialWidth() {
      return N();
    },
    set initialWidth(Q) {
      N(Q), y();
    },
    get initialHeight() {
      return T();
    },
    set initialHeight(Q) {
      T(Q), y();
    },
    get width() {
      return I();
    },
    set width(Q) {
      I(Q), y();
    },
    get height() {
      return B();
    },
    set height(Q) {
      B(Q), y();
    },
    get dragHandle() {
      return X();
    },
    set dragHandle(Q) {
      X(Q), y();
    },
    get initialized() {
      return q();
    },
    set initialized(Q) {
      q(Q), y();
    },
    get parentId() {
      return re();
    },
    set parentId(Q) {
      re(Q), y();
    },
    get nodeClickDistance() {
      return J();
    },
    set nodeClickDistance(Q) {
      J(Q), y();
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
var Rp = /* @__PURE__ */ oe('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const Bp = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function Wc(e, t) {
  ce(t, !1), et(e, Bp);
  const [n, r] = it(), o = () => ee(c, "$visibleNodes", n), i = () => ee(f, "$nodesDraggable", n), s = () => ee(g, "$elementsSelectable", n), a = () => ee(d, "$nodesConnectable", n), l = () => ee(_, "$parentLookup", n);
  let u = w(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: f,
    nodesConnectable: d,
    elementsSelectable: g,
    updateNodeInternals: v,
    parentLookup: _
  } = Je(), x = typeof ResizeObserver > "u" ? null : new ResizeObserver((b) => {
    const p = /* @__PURE__ */ new Map();
    b.forEach((C) => {
      const S = C.target.getAttribute("data-id");
      p.set(S, { id: S, nodeElement: C.target, force: !0 });
    }), v(p);
  });
  ua(() => {
    x == null || x.disconnect();
  }), He();
  var k = Rp();
  Dt(k, 5, o, (b) => b.id, (b, p) => {
    const C = /* @__PURE__ */ ve(() => !!h(p).selected), S = /* @__PURE__ */ ve(() => !!h(p).hidden), $ = /* @__PURE__ */ ve(() => !!(h(p).draggable || i() && typeof h(p).draggable > "u")), M = /* @__PURE__ */ ve(() => !!(h(p).selectable || s() && typeof h(p).selectable > "u")), D = /* @__PURE__ */ ve(() => !!(h(p).connectable || a() && typeof h(p).connectable > "u")), A = /* @__PURE__ */ ve(() => h(p).deletable ?? !0), V = /* @__PURE__ */ ve(() => l().has(h(p).id)), z = /* @__PURE__ */ ve(() => h(p).type ?? "default"), O = /* @__PURE__ */ ve(() => h(p).internals.z ?? 0), P = /* @__PURE__ */ ve(() => pc(h(p)));
    Xc(b, {
      get node() {
        return h(p);
      },
      get id() {
        return h(p).id;
      },
      get data() {
        return h(p).data;
      },
      get selected() {
        return h(C);
      },
      get hidden() {
        return h(S);
      },
      get draggable() {
        return h($);
      },
      get selectable() {
        return h(M);
      },
      get connectable() {
        return h(D);
      },
      get deletable() {
        return h(A);
      },
      get positionX() {
        return h(p).internals.positionAbsolute.x;
      },
      get positionY() {
        return h(p).internals.positionAbsolute.y;
      },
      get isParent() {
        return h(V);
      },
      get style() {
        return h(p).style;
      },
      get class() {
        return h(p).class;
      },
      get type() {
        return h(z);
      },
      get sourcePosition() {
        return h(p).sourcePosition;
      },
      get targetPosition() {
        return h(p).targetPosition;
      },
      get dragging() {
        return h(p).dragging;
      },
      get zIndex() {
        return h(O);
      },
      get dragHandle() {
        return h(p).dragHandle;
      },
      get initialized() {
        return h(P);
      },
      get width() {
        return h(p).width;
      },
      get height() {
        return h(p).height;
      },
      get initialWidth() {
        return h(p).initialWidth;
      },
      get initialHeight() {
        return h(p).initialHeight;
      },
      get measuredWidth() {
        return h(p).measured.width;
      },
      get measuredHeight() {
        return h(p).measured.height;
      },
      get parentId() {
        return h(p).parentId;
      },
      resizeObserver: x,
      get nodeClickDistance() {
        return u();
      },
      $$events: {
        nodeclick(H) {
          Ae.call(this, t, H);
        },
        nodemouseenter(H) {
          Ae.call(this, t, H);
        },
        nodemousemove(H) {
          Ae.call(this, t, H);
        },
        nodemouseleave(H) {
          Ae.call(this, t, H);
        },
        nodedrag(H) {
          Ae.call(this, t, H);
        },
        nodedragstart(H) {
          Ae.call(this, t, H);
        },
        nodedragstop(H) {
          Ae.call(this, t, H);
        },
        nodecontextmenu(H) {
          Ae.call(this, t, H);
        }
      }
    });
  }), Z(k), L(e, k);
  var m = de({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance(b) {
      u(b), y();
    }
  });
  return r(), m;
}
le(Wc, { nodeClickDistance: {} }, [], [], !0);
var Yp = /* @__PURE__ */ _e('<svg><g role="img"><!></g></svg>');
function Kc(e, t) {
  ce(t, !1);
  const [n, r] = it(), o = () => ee(W, "$edgeTypes", n), i = () => ee(se, "$flowId", n), s = () => ee(me, "$elementsSelectable", n), a = () => ee(J, "$edgeLookup", n), l = /* @__PURE__ */ ne(void 0, !0), u = /* @__PURE__ */ ne(void 0, !0), c = /* @__PURE__ */ ne(void 0, !0), f = /* @__PURE__ */ ne(void 0, !0), d = /* @__PURE__ */ ne(void 0, !0);
  let g = w(t, "id", 13), v = w(t, "type", 13, "default"), _ = w(t, "source", 13, ""), x = w(t, "target", 13, ""), k = w(t, "data", 29, () => ({})), m = w(t, "style", 13, void 0), b = w(t, "zIndex", 13, void 0), p = w(t, "animated", 13, !1), C = w(t, "selected", 13, !1), S = w(t, "selectable", 13, void 0), $ = w(t, "deletable", 13, void 0), M = w(t, "hidden", 13, !1), D = w(t, "label", 13, void 0), A = w(t, "labelStyle", 13, void 0), V = w(t, "markerStart", 13, void 0), z = w(t, "markerEnd", 13, void 0), O = w(t, "sourceHandle", 13, void 0), P = w(t, "targetHandle", 13, void 0), H = w(t, "sourceX", 13), E = w(t, "sourceY", 13), N = w(t, "targetX", 13), T = w(t, "targetY", 13), I = w(t, "sourcePosition", 13), B = w(t, "targetPosition", 13), X = w(t, "ariaLabel", 13, void 0), q = w(t, "interactionWidth", 13, void 0), re = w(t, "class", 13, "");
  Ar("svelteflow__edge_id", g());
  const {
    edgeLookup: J,
    edgeTypes: W,
    flowId: se,
    elementsSelectable: me
  } = Je(), xe = Ri(), fe = Ac();
  function Ie(te) {
    const We = a().get(g());
    We && (fe(g()), xe("edgeclick", { event: te, edge: We }));
  }
  function G(te, We) {
    const Ue = a().get(g());
    Ue && xe(We, { event: te, edge: Ue });
  }
  ge(() => j(v()), () => {
    U(l, v() || "default");
  }), ge(
    () => (o(), h(l), Ei),
    () => {
      U(u, o()[h(l)] || Ei);
    }
  ), ge(
    () => (j(V()), i()),
    () => {
      U(c, V() ? `url('#${Rs(V(), i())}')` : void 0);
    }
  ), ge(
    () => (j(z()), i()),
    () => {
      U(f, z() ? `url('#${Rs(z(), i())}')` : void 0);
    }
  ), ge(
    () => (j(S()), s()),
    () => {
      U(d, S() ?? s());
    }
  ), gt(), He(!0);
  var ae = tt(), Me = we(ae);
  {
    var Oe = (te) => {
      var We = Yp();
      let Ue;
      var Be = F(We);
      let ie;
      var he = F(Be);
      const $e = /* @__PURE__ */ ve(() => $() ?? !0);
      Pu(he, () => h(u), (Se, at) => {
        at(Se, {
          get id() {
            return g();
          },
          get source() {
            return _();
          },
          get target() {
            return x();
          },
          get sourceX() {
            return H();
          },
          get sourceY() {
            return E();
          },
          get targetX() {
            return N();
          },
          get targetY() {
            return T();
          },
          get sourcePosition() {
            return I();
          },
          get targetPosition() {
            return B();
          },
          get animated() {
            return p();
          },
          get selected() {
            return C();
          },
          get label() {
            return D();
          },
          get labelStyle() {
            return A();
          },
          get data() {
            return k();
          },
          get style() {
            return m();
          },
          get interactionWidth() {
            return q();
          },
          get selectable() {
            return h(d);
          },
          get deletable() {
            return h($e);
          },
          get type() {
            return h(l);
          },
          get sourceHandleId() {
            return O();
          },
          get targetHandleId() {
            return P();
          },
          get markerStart() {
            return h(c);
          },
          get markerEnd() {
            return h(f);
          }
        });
      }), Z(Be), Z(We), Ee(
        (Se, at) => {
          Ue = ft(We, "", Ue, { "z-index": b() }), ie = $t(Be, 0, Se, null, ie, at), pe(Be, "data-id", g()), pe(Be, "aria-label", X() === null ? void 0 : X() ? X() : `Edge from ${_()} to ${x()}`);
        },
        [
          () => kn(Pt(["svelte-flow__edge", re()])),
          () => ({
            animated: p(),
            selected: C(),
            selectable: h(d)
          })
        ],
        ve
      ), Ze("click", Be, Ie), Ze("contextmenu", Be, (Se) => {
        G(Se, "edgecontextmenu");
      }), Ze("mouseenter", Be, (Se) => {
        G(Se, "edgemouseenter");
      }), Ze("mouseleave", Be, (Se) => {
        G(Se, "edgemouseleave");
      }), L(te, We);
    };
    be(Me, (te) => {
      M() || te(Oe);
    });
  }
  L(e, ae);
  var Xe = de({
    get id() {
      return g();
    },
    set id(te) {
      g(te), y();
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
      return x();
    },
    set target(te) {
      x(te), y();
    },
    get data() {
      return k();
    },
    set data(te) {
      k(te), y();
    },
    get style() {
      return m();
    },
    set style(te) {
      m(te), y();
    },
    get zIndex() {
      return b();
    },
    set zIndex(te) {
      b(te), y();
    },
    get animated() {
      return p();
    },
    set animated(te) {
      p(te), y();
    },
    get selected() {
      return C();
    },
    set selected(te) {
      C(te), y();
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
      return M();
    },
    set hidden(te) {
      M(te), y();
    },
    get label() {
      return D();
    },
    set label(te) {
      D(te), y();
    },
    get labelStyle() {
      return A();
    },
    set labelStyle(te) {
      A(te), y();
    },
    get markerStart() {
      return V();
    },
    set markerStart(te) {
      V(te), y();
    },
    get markerEnd() {
      return z();
    },
    set markerEnd(te) {
      z(te), y();
    },
    get sourceHandle() {
      return O();
    },
    set sourceHandle(te) {
      O(te), y();
    },
    get targetHandle() {
      return P();
    },
    set targetHandle(te) {
      P(te), y();
    },
    get sourceX() {
      return H();
    },
    set sourceX(te) {
      H(te), y();
    },
    get sourceY() {
      return E();
    },
    set sourceY(te) {
      E(te), y();
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
      return I();
    },
    set sourcePosition(te) {
      I(te), y();
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
      return re();
    },
    set class(te) {
      re(te), y();
    }
  });
  return r(), Xe;
}
le(
  Kc,
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
function qc(e, t) {
  ce(t, !1);
  let n = w(t, "onMount", 12, void 0), r = w(t, "onDestroy", 12, void 0);
  return Xt(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), He(), de({
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
le(qc, { onMount: {}, onDestroy: {} }, [], [], !0);
var Zp = /* @__PURE__ */ _e("<defs></defs>");
function Gc(e, t) {
  ce(t, !1);
  const [n, r] = it(), o = () => ee(i, "$markers", n), { markers: i } = Je();
  He();
  var s = Zp();
  Dt(s, 5, o, (a) => a.id, (a, l) => {
    Uc(a, ct(() => h(l)));
  }), Z(s), L(e, s), de(), r();
}
le(Gc, {}, [], [], !0);
var Fp = /* @__PURE__ */ _e('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), Xp = /* @__PURE__ */ _e('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), Wp = /* @__PURE__ */ _e('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Uc(e, t) {
  ce(t, !1);
  let n = w(t, "id", 12), r = w(t, "type", 12), o = w(t, "width", 12, 12.5), i = w(t, "height", 12, 12.5), s = w(t, "markerUnits", 12, "strokeWidth"), a = w(t, "orient", 12, "auto-start-reverse"), l = w(t, "color", 12, void 0), u = w(t, "strokeWidth", 12, void 0);
  He();
  var c = Wp(), f = F(c);
  {
    var d = (v) => {
      var _ = Fp();
      Ee(() => {
        pe(_, "stroke", l()), pe(_, "stroke-width", u());
      }), L(v, _);
    }, g = (v, _) => {
      {
        var x = (k) => {
          var m = Xp();
          Ee(() => {
            pe(m, "stroke", l()), pe(m, "stroke-width", u()), pe(m, "fill", l());
          }), L(k, m);
        };
        be(
          v,
          (k) => {
            r() === bo.ArrowClosed && k(x);
          },
          _
        );
      }
    };
    be(f, (v) => {
      r() === bo.Arrow ? v(d) : v(g, !1);
    });
  }
  return Z(c), Ee(() => {
    pe(c, "id", n()), pe(c, "markerWidth", `${o()}`), pe(c, "markerHeight", `${i()}`), pe(c, "markerUnits", s()), pe(c, "orient", a());
  }), L(e, c), de({
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
var Kp = /* @__PURE__ */ oe('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function jc(e, t) {
  ce(t, !1);
  const [n, r] = it(), o = () => ee(a, "$visibleEdges", n), i = () => ee(c, "$elementsSelectable", n);
  let s = w(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: a,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = Je();
  Xt(() => {
    s() && u(s());
  }), He();
  var f = Kp(), d = F(f), g = F(d);
  Gc(g, {}), Z(d);
  var v = R(d, 2);
  Dt(v, 1, o, (m) => m.id, (m, b) => {
    const p = /* @__PURE__ */ ve(() => h(b).selectable ?? i()), C = /* @__PURE__ */ ve(() => h(b).type || "default");
    Kc(m, {
      get id() {
        return h(b).id;
      },
      get source() {
        return h(b).source;
      },
      get target() {
        return h(b).target;
      },
      get data() {
        return h(b).data;
      },
      get style() {
        return h(b).style;
      },
      get animated() {
        return h(b).animated;
      },
      get selected() {
        return h(b).selected;
      },
      get selectable() {
        return h(p);
      },
      get deletable() {
        return h(b).deletable;
      },
      get hidden() {
        return h(b).hidden;
      },
      get label() {
        return h(b).label;
      },
      get labelStyle() {
        return h(b).labelStyle;
      },
      get markerStart() {
        return h(b).markerStart;
      },
      get markerEnd() {
        return h(b).markerEnd;
      },
      get sourceHandle() {
        return h(b).sourceHandle;
      },
      get targetHandle() {
        return h(b).targetHandle;
      },
      get sourceX() {
        return h(b).sourceX;
      },
      get sourceY() {
        return h(b).sourceY;
      },
      get targetX() {
        return h(b).targetX;
      },
      get targetY() {
        return h(b).targetY;
      },
      get sourcePosition() {
        return h(b).sourcePosition;
      },
      get targetPosition() {
        return h(b).targetPosition;
      },
      get ariaLabel() {
        return h(b).ariaLabel;
      },
      get interactionWidth() {
        return h(b).interactionWidth;
      },
      get class() {
        return h(b).class;
      },
      get type() {
        return h(C);
      },
      get zIndex() {
        return h(b).zIndex;
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
    var x = (m) => {
      qc(m, {
        onMount: () => {
          fi(l, !0);
        },
        onDestroy: () => {
          fi(l, !1);
        }
      });
    };
    be(_, (m) => {
      o().length > 0 && m(x);
    });
  }
  Z(f), L(e, f);
  var k = de({
    get defaultEdgeOptions() {
      return s();
    },
    set defaultEdgeOptions(m) {
      s(m), y();
    }
  });
  return r(), k;
}
le(jc, { defaultEdgeOptions: {} }, [], [], !0);
var qp = /* @__PURE__ */ oe('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const Gp = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function ka(e, t) {
  ce(t, !1), et(e, Gp);
  let n = w(t, "x", 12, 0), r = w(t, "y", 12, 0), o = w(t, "width", 12, 0), i = w(t, "height", 12, 0), s = w(t, "isVisible", 12, !0);
  var a = tt(), l = we(a);
  {
    var u = (c) => {
      var f = qp();
      let d;
      Ee(() => d = ft(f, "", d, {
        width: typeof o() == "string" ? o() : `${o()}px`,
        height: typeof i() == "string" ? i() : `${i()}px`,
        transform: `translate(${n()}px, ${r()}px)`
      })), L(c, f);
    };
    be(l, (c) => {
      s() && c(u);
    });
  }
  return L(e, a), de({
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
function Jc(e, t) {
  ce(t, !1);
  const [n, r] = it(), o = () => ee(s, "$selectionRect", n), i = () => ee(a, "$selectionRectMode", n), { selectionRect: s, selectionRectMode: a } = Je();
  He();
  const l = /* @__PURE__ */ ve(() => !!(o() && i() === "user")), u = /* @__PURE__ */ ve(() => {
    var g;
    return (g = o()) == null ? void 0 : g.width;
  }), c = /* @__PURE__ */ ve(() => {
    var g;
    return (g = o()) == null ? void 0 : g.height;
  }), f = /* @__PURE__ */ ve(() => {
    var g;
    return (g = o()) == null ? void 0 : g.x;
  }), d = /* @__PURE__ */ ve(() => {
    var g;
    return (g = o()) == null ? void 0 : g.y;
  });
  ka(e, {
    get isVisible() {
      return h(l);
    },
    get width() {
      return h(u);
    },
    get height() {
      return h(c);
    },
    get x() {
      return h(f);
    },
    get y() {
      return h(d);
    }
  }), de(), r();
}
le(Jc, {}, [], [], !0);
var Up = /* @__PURE__ */ oe('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const jp = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function Qc(e, t) {
  ce(t, !1), et(e, jp);
  const [n, r] = it(), o = () => ee(l, "$selectionRectMode", n), i = () => ee(c, "$nodeLookup", n), s = () => ee(u, "$nodes", n), a = Je(), { selectionRectMode: l, nodes: u, nodeLookup: c } = a, f = Ri();
  let d = /* @__PURE__ */ ne(null);
  function g(m) {
    const b = s().filter((p) => p.selected);
    f("selectioncontextmenu", { nodes: b, event: m });
  }
  function v(m) {
    const b = s().filter((p) => p.selected);
    f("selectionclick", { nodes: b, event: m });
  }
  ge(
    () => (o(), i(), s()),
    () => {
      o() === "nodes" && (U(d, Ao(i(), { filter: (m) => !!m.selected })), s());
    }
  ), gt(), He();
  var _ = tt(), x = we(_);
  {
    var k = (m) => {
      var b = Up(), p = F(b);
      ka(p, { width: "100%", height: "100%", x: 0, y: 0 }), Z(b), vt(b, (C, S) => Sr == null ? void 0 : Sr(C, S), () => ({
        disabled: !1,
        store: a,
        onDrag: (C, S, $, M) => {
          f("nodedrag", { event: C, targetNode: null, nodes: M });
        },
        onDragStart: (C, S, $, M) => {
          f("nodedragstart", { event: C, targetNode: null, nodes: M });
        },
        onDragStop: (C, S, $, M) => {
          f("nodedragstop", { event: C, targetNode: null, nodes: M });
        }
      })), zt(() => Ze("contextmenu", b, g)), zt(() => Ze("click", b, v)), zt(() => Ze("keyup", b, () => {
      })), Ee(() => ft(b, `width: ${h(d).width ?? ""}px; height: ${h(d).height ?? ""}px; transform: translate(${h(d).x ?? ""}px, ${h(d).y ?? ""}px)`)), L(m, b);
    };
    be(x, (m) => {
      o() === "nodes" && h(d) && Tn(h(d).x) && Tn(h(d).y) && m(k);
    });
  }
  L(e, _), de(), r();
}
le(Qc, {}, [], [], !0);
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
      }, { modifier: f, key: d, callback: g, preventDefault: v, enabled: _ } = c;
      if (_) {
        if (f.length && !(Array.isArray(f) ? f : [f]).map(
          (m) => typeof m == "string" ? [m] : m
        ).some(
          (m) => m.every((b) => l[b])
        ))
          continue;
        if (s.key === d) {
          v && s.preventDefault();
          const x = {
            node: e,
            trigger: c,
            originalEvent: s
          };
          e.dispatchEvent(new CustomEvent("shortcut", { detail: x })), g == null || g(x);
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
  ce(t, !1);
  let n = w(t, "selectionKey", 12, "Shift"), r = w(t, "multiSelectionKey", 28, () => bi() ? "Meta" : "Control"), o = w(t, "deleteKey", 12, "Backspace"), i = w(t, "panActivationKey", 12, " "), s = w(t, "zoomActivationKey", 28, () => bi() ? "Meta" : "Control");
  const {
    selectionKeyPressed: a,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: f,
    selectionRect: d
  } = Je();
  function g(m) {
    return m !== null && typeof m == "object";
  }
  function v(m) {
    return g(m) ? m.modifier || [] : [];
  }
  function _(m) {
    return m == null ? "" : g(m) ? m.key : m;
  }
  function x(m, b) {
    return (Array.isArray(m) ? m : [m]).map((C) => {
      const S = _(C);
      return {
        key: S,
        modifier: v(C),
        enabled: S !== null,
        callback: b
      };
    });
  }
  function k() {
    d.set(null), a.set(!1), l.set(!1), u.set(!1), c.set(!1), f.set(!1);
  }
  return He(), Ze("blur", Mt, k), Ze("contextmenu", Mt, k), vt(Mt, (m, b) => Ke == null ? void 0 : Ke(m, b), () => ({
    trigger: x(n(), () => a.set(!0)),
    type: "keydown"
  })), vt(Mt, (m, b) => Ke == null ? void 0 : Ke(m, b), () => ({
    trigger: x(n(), () => a.set(!1)),
    type: "keyup"
  })), vt(Mt, (m, b) => Ke == null ? void 0 : Ke(m, b), () => ({
    trigger: x(r(), () => l.set(!0)),
    type: "keydown"
  })), vt(Mt, (m, b) => Ke == null ? void 0 : Ke(m, b), () => ({
    trigger: x(r(), () => l.set(!1)),
    type: "keyup"
  })), vt(Mt, (m, b) => Ke == null ? void 0 : Ke(m, b), () => ({
    trigger: x(o(), (m) => {
      !(m.originalEvent.ctrlKey || m.originalEvent.metaKey || m.originalEvent.shiftKey) && !M0(m.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), vt(Mt, (m, b) => Ke == null ? void 0 : Ke(m, b), () => ({
    trigger: x(o(), () => u.set(!1)),
    type: "keyup"
  })), vt(Mt, (m, b) => Ke == null ? void 0 : Ke(m, b), () => ({
    trigger: x(i(), () => c.set(!0)),
    type: "keydown"
  })), vt(Mt, (m, b) => Ke == null ? void 0 : Ke(m, b), () => ({
    trigger: x(i(), () => c.set(!1)),
    type: "keyup"
  })), vt(Mt, (m, b) => Ke == null ? void 0 : Ke(m, b), () => ({
    trigger: x(s(), () => f.set(!0)),
    type: "keydown"
  })), vt(Mt, (m, b) => Ke == null ? void 0 : Ke(m, b), () => ({
    trigger: x(s(), () => f.set(!1)),
    type: "keyup"
  })), de({
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
var Jp = /* @__PURE__ */ _e('<path fill="none" class="svelte-flow__connection-path"></path>'), Qp = /* @__PURE__ */ _e('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function td(e, t) {
  ce(t, !1);
  const [n, r] = it(), o = () => ee(g, "$connection", n), i = () => ee(v, "$connectionLineType", n), s = () => ee(f, "$width", n), a = () => ee(d, "$height", n);
  let l = w(t, "containerStyle", 12, ""), u = w(t, "style", 12, ""), c = w(t, "isCustomComponent", 12, !1);
  const {
    width: f,
    height: d,
    connection: g,
    connectionLineType: v
  } = Je();
  let _ = /* @__PURE__ */ ne(null);
  ge(
    () => (o(), j(c()), i(), h(_), zs),
    () => {
      if (o().inProgress && !c()) {
        const { from: p, to: C, fromPosition: S, toPosition: $ } = o(), M = {
          sourceX: p.x,
          sourceY: p.y,
          sourcePosition: S,
          targetX: C.x,
          targetY: C.y,
          targetPosition: $
        };
        switch (i()) {
          case Er.Bezier:
            ((D) => U(_, D[0]))(yc(M));
            break;
          case Er.Step:
            ((D) => U(_, D[0]))(Ci({ ...M, borderRadius: 0 }));
            break;
          case Er.SmoothStep:
            ((D) => U(_, D[0]))(Ci(M));
            break;
          default:
            ((D) => U(_, D[0]))(zs(M));
        }
      }
    }
  ), gt(), He();
  var x = tt(), k = we(x);
  {
    var m = (p) => {
      var C = Qp(), S = F(C), $ = F(S);
      pt($, t, "connectionLine", {});
      var M = R($);
      {
        var D = (A) => {
          var V = Jp();
          Ee(() => {
            pe(V, "d", h(_)), ft(V, u());
          }), L(A, V);
        };
        be(M, (A) => {
          c() || A(D);
        });
      }
      Z(S), Z(C), Ee(
        (A) => {
          pe(C, "width", s()), pe(C, "height", a()), ft(C, l()), $t(S, 0, A);
        },
        [
          () => kn(Pt([
            "svelte-flow__connection",
            b0(o().isValid)
          ]))
        ],
        ve
      ), L(p, C);
    };
    be(k, (p) => {
      o().inProgress && p(m);
    });
  }
  L(e, x);
  var b = de({
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
  return r(), b;
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
var e2 = /* @__PURE__ */ oe("<div><!></div>");
function Lo(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = st(n, ["position", "style", "class"]);
  ce(t, !1);
  const [o, i] = it(), s = () => ee(f, "$selectionRectMode", o), a = /* @__PURE__ */ ne();
  let l = w(t, "position", 12, "top-right"), u = w(t, "style", 12, void 0), c = w(t, "class", 12, void 0);
  const { selectionRectMode: f } = Je();
  ge(() => j(l()), () => {
    U(a, `${l()}`.split("-"));
  }), gt(), He();
  var d = e2();
  let g;
  var v = F(d);
  pt(v, t, "default", {}), Z(d), Ee(
    (x) => g = an(d, g, {
      class: x,
      style: u(),
      ...r,
      [nr]: {
        "pointer-events": s() ? "none" : ""
      }
    }),
    [
      () => Pt([
        "svelte-flow__panel",
        c(),
        ...h(a)
      ])
    ],
    ve
  ), L(e, d);
  var _ = de({
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
le(Lo, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var t2 = /* @__PURE__ */ oe('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function nd(e, t) {
  ce(t, !1);
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
          L(l, c);
        },
        $$slots: { default: !0 }
      });
    };
    be(i, (a) => {
      var l;
      (l = n()) != null && l.hideAttribution || a(s);
    });
  }
  return L(e, o), de({
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
  return Kt("light", (n) => {
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
function rd(e, t) {
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
  ce(t, !1), et(e, l2);
  const [i, s] = it(), a = () => ee(b(), "$viewport", i), l = () => ee(es, "$initialized", i), u = () => ee(h(c), "$colorModeClass", i), c = /* @__PURE__ */ ne();
  let f = w(t, "id", 12, "1"), d = w(t, "nodes", 12), g = w(t, "edges", 12), v = w(t, "fitView", 12, void 0), _ = w(t, "fitViewOptions", 12, void 0), x = w(t, "minZoom", 12, void 0), k = w(t, "maxZoom", 12, void 0), m = w(t, "initialViewport", 12, void 0), b = w(t, "viewport", 12, void 0), p = w(t, "nodeTypes", 12, void 0), C = w(t, "edgeTypes", 12, void 0), S = w(t, "selectionKey", 12, void 0), $ = w(t, "selectionMode", 12, void 0), M = w(t, "panActivationKey", 12, void 0), D = w(t, "multiSelectionKey", 12, void 0), A = w(t, "zoomActivationKey", 12, void 0), V = w(t, "nodesDraggable", 12, void 0), z = w(t, "nodesConnectable", 12, void 0), O = w(t, "nodeDragThreshold", 12, void 0), P = w(t, "elementsSelectable", 12, void 0), H = w(t, "snapGrid", 12, void 0), E = w(t, "deleteKey", 12, void 0), N = w(t, "connectionRadius", 12, void 0), T = w(t, "connectionLineType", 12, void 0), I = w(t, "connectionMode", 28, () => ur.Strict), B = w(t, "connectionLineStyle", 12, ""), X = w(t, "connectionLineContainerStyle", 12, ""), q = w(t, "onMoveStart", 12, void 0), re = w(t, "onMove", 12, void 0), J = w(t, "onMoveEnd", 12, void 0), W = w(t, "isValidConnection", 12, void 0), se = w(t, "translateExtent", 12, void 0), me = w(t, "nodeExtent", 12, void 0), xe = w(t, "onlyRenderVisibleElements", 12, void 0), fe = w(t, "panOnScrollMode", 28, () => qn.Free), Ie = w(t, "preventScrolling", 12, !0), G = w(t, "zoomOnScroll", 12, !0), ae = w(t, "zoomOnDoubleClick", 12, !0), Me = w(t, "zoomOnPinch", 12, !0), Oe = w(t, "panOnScroll", 12, !1), Xe = w(t, "panOnDrag", 12, !0), te = w(t, "selectionOnDrag", 12, void 0), We = w(t, "autoPanOnConnect", 12, !0), Ue = w(t, "autoPanOnNodeDrag", 12, !0), Be = w(t, "onerror", 12, void 0), ie = w(t, "ondelete", 12, void 0), he = w(t, "onedgecreate", 12, void 0), $e = w(t, "attributionPosition", 12, void 0), Se = w(t, "proOptions", 12, void 0), at = w(t, "defaultEdgeOptions", 12, void 0), ut = w(t, "width", 12, void 0), Q = w(t, "height", 12, void 0), Ye = w(t, "colorMode", 12, "light"), ue = w(t, "onconnect", 12, void 0), en = w(t, "onconnectstart", 12, void 0), tn = w(t, "onconnectend", 12, void 0), fn = w(t, "onbeforedelete", 12, void 0), Pe = w(t, "oninit", 12, void 0), nt = w(t, "nodeOrigin", 12, void 0), Le = w(t, "paneClickDistance", 12, 0), Ve = w(t, "nodeClickDistance", 12, 0), rt = w(t, "defaultMarkerColor", 12, "#b1b1b7"), nn = w(t, "style", 12, void 0), Wt = w(t, "class", 12, void 0), Gr = /* @__PURE__ */ ne(), yt = /* @__PURE__ */ ne(), Nt = /* @__PURE__ */ ne();
  const yr = a() || m(), ot = a1(Gi) ? Je() : Mp({
    nodes: K(d()),
    edges: K(g()),
    width: ut(),
    height: Q(),
    fitView: v(),
    nodeOrigin: nt(),
    nodeExtent: me()
  });
  Xt(() => (ot.width.set(h(yt)), ot.height.set(h(Nt)), ot.domNode.set(h(Gr)), ot.syncNodeStores(d()), ot.syncEdgeStores(g()), ot.syncViewport(b()), v() !== void 0 && ot.fitViewOnInit.set(v()), _() && ot.fitViewOptions.set(_()), zl(ot, {
    nodeTypes: p(),
    edgeTypes: C(),
    minZoom: x(),
    maxZoom: k(),
    translateExtent: se(),
    paneClickDistance: Le()
  }), () => {
    ot.reset();
  }));
  const { initialized: es } = ot;
  let Ur = /* @__PURE__ */ ne(!1);
  ge(
    () => (h(yt), h(Nt)),
    () => {
      h(yt) !== void 0 && h(Nt) !== void 0 && (ot.width.set(h(yt)), ot.height.set(h(Nt)));
    }
  ), ge(
    () => (h(Ur), l(), j(Pe())),
    () => {
      var Y;
      !h(Ur) && l() && ((Y = Pe()) == null || Y(), U(Ur, !0));
    }
  ), ge(
    () => (j(f()), j(T()), j(N()), j($()), j(H()), j(rt()), j(V()), j(z()), j(P()), j(xe()), j(W()), j(We()), j(Ue()), j(Be()), j(ie()), j(he()), j(I()), j(O()), j(ue()), j(en()), j(tn()), j(fn()), j(nt()), Rl),
    () => {
      const Y = {
        flowId: f(),
        connectionLineType: T(),
        connectionRadius: N(),
        selectionMode: $(),
        snapGrid: H(),
        defaultMarkerColor: rt(),
        nodesDraggable: V(),
        nodesConnectable: z(),
        elementsSelectable: P(),
        onlyRenderVisibleElements: xe(),
        isValidConnection: W(),
        autoPanOnConnect: We(),
        autoPanOnNodeDrag: Ue(),
        onerror: Be(),
        ondelete: ie(),
        onedgecreate: he(),
        connectionMode: I(),
        nodeDragThreshold: O(),
        onconnect: ue(),
        onconnectstart: en(),
        onconnectend: tn(),
        onbeforedelete: fn(),
        nodeOrigin: nt()
      };
      Rl(ot, Y);
    }
  ), ge(
    () => (j(p()), j(C()), j(x()), j(k()), j(se()), j(Le())),
    () => {
      zl(ot, {
        nodeTypes: p(),
        edgeTypes: C(),
        minZoom: x(),
        maxZoom: k(),
        translateExtent: se(),
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
  ed(Zo, {
    get selectionKey() {
      return S();
    },
    get deleteKey() {
      return E();
    },
    get panActivationKey() {
      return M();
    },
    get multiSelectionKey() {
      return D();
    },
    get zoomActivationKey() {
      return A();
    }
  });
  var Fo = R(Zo, 2);
  const ts = /* @__PURE__ */ ve(() => fe() === void 0 ? qn.Free : fe()), jd = /* @__PURE__ */ ve(() => Ie() === void 0 ? !0 : Ie()), Jd = /* @__PURE__ */ ve(() => G() === void 0 ? !0 : G()), Qd = /* @__PURE__ */ ve(() => ae() === void 0 ? !0 : ae()), ef = /* @__PURE__ */ ve(() => Me() === void 0 ? !0 : Me()), tf = /* @__PURE__ */ ve(() => Oe() === void 0 ? !1 : Oe()), nf = /* @__PURE__ */ ve(() => Xe() === void 0 ? !0 : Xe()), rf = /* @__PURE__ */ ve(() => Le() === void 0 ? 0 : Le());
  Yc(Fo, {
    initialViewport: yr,
    get onMoveStart() {
      return q();
    },
    get onMove() {
      return re();
    },
    get onMoveEnd() {
      return J();
    },
    get panOnScrollMode() {
      return h(ts);
    },
    get preventScrolling() {
      return h(jd);
    },
    get zoomOnScroll() {
      return h(Jd);
    },
    get zoomOnDoubleClick() {
      return h(Qd);
    },
    get zoomOnPinch() {
      return h(ef);
    },
    get panOnScroll() {
      return h(tf);
    },
    get panOnDrag() {
      return h(nf);
    },
    get paneClickDistance() {
      return h(rf);
    },
    children: (Y, kw) => {
      const af = /* @__PURE__ */ ve(() => Xe() === void 0 ? !0 : Xe());
      Zc(Y, {
        get panOnDrag() {
          return h(af);
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
        children: (jr, Ew) => {
          var Ma = s2(), Ha = we(Ma);
          Fc(Ha, {
            children: (uf, $w) => {
              var Va = i2(), Aa = we(Va);
              jc(Aa, {
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
              td(Da, {
                get containerStyle() {
                  return X();
                },
                get style() {
                  return B();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (ze, Sw) => {
                    var La = tt(), df = we(La);
                    pt(df, t, "connectionLine", {}), L(ze, La);
                  }
                }
              });
              var Oa = R(Da, 6);
              Wc(Oa, {
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
              var cf = R(Oa, 2);
              Qc(cf, {
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
              }), L(uf, Va);
            },
            $$slots: { default: !0 }
          });
          var lf = R(Ha, 2);
          Jc(lf, {}), L(jr, Ma);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var Ta = R(Fo, 2);
  nd(Ta, {
    get proOptions() {
      return Se();
    },
    get position() {
      return $e();
    }
  });
  var of = R(Ta, 2);
  pt(of, t, "default", {}), Z(Lt), _n(Lt, (Y) => U(Gr, Y), () => h(Gr)), Ee(
    (Y) => Yo = an(
      Lt,
      Yo,
      {
        style: nn(),
        class: Y,
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
    ve
  ), Ja(Lt, "clientWidth", (Y) => U(yt, Y)), Ja(Lt, "clientHeight", (Y) => U(Nt, Y)), Ze("dragover", Lt, function(Y) {
    Ae.call(this, t, Y);
  }), Ze("drop", Lt, function(Y) {
    Ae.call(this, t, Y);
  }), L(e, Lt);
  var sf = de({
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
      return g();
    },
    set edges(Y) {
      g(Y), y();
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
      return x();
    },
    set minZoom(Y) {
      x(Y), y();
    },
    get maxZoom() {
      return k();
    },
    set maxZoom(Y) {
      k(Y), y();
    },
    get initialViewport() {
      return m();
    },
    set initialViewport(Y) {
      m(Y), y();
    },
    get viewport() {
      return b();
    },
    set viewport(Y) {
      b(Y), y();
    },
    get nodeTypes() {
      return p();
    },
    set nodeTypes(Y) {
      p(Y), y();
    },
    get edgeTypes() {
      return C();
    },
    set edgeTypes(Y) {
      C(Y), y();
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
      return M();
    },
    set panActivationKey(Y) {
      M(Y), y();
    },
    get multiSelectionKey() {
      return D();
    },
    set multiSelectionKey(Y) {
      D(Y), y();
    },
    get zoomActivationKey() {
      return A();
    },
    set zoomActivationKey(Y) {
      A(Y), y();
    },
    get nodesDraggable() {
      return V();
    },
    set nodesDraggable(Y) {
      V(Y), y();
    },
    get nodesConnectable() {
      return z();
    },
    set nodesConnectable(Y) {
      z(Y), y();
    },
    get nodeDragThreshold() {
      return O();
    },
    set nodeDragThreshold(Y) {
      O(Y), y();
    },
    get elementsSelectable() {
      return P();
    },
    set elementsSelectable(Y) {
      P(Y), y();
    },
    get snapGrid() {
      return H();
    },
    set snapGrid(Y) {
      H(Y), y();
    },
    get deleteKey() {
      return E();
    },
    set deleteKey(Y) {
      E(Y), y();
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
      return I();
    },
    set connectionMode(Y) {
      I(Y), y();
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
      return re();
    },
    set onMove(Y) {
      re(Y), y();
    },
    get onMoveEnd() {
      return J();
    },
    set onMoveEnd(Y) {
      J(Y), y();
    },
    get isValidConnection() {
      return W();
    },
    set isValidConnection(Y) {
      W(Y), y();
    },
    get translateExtent() {
      return se();
    },
    set translateExtent(Y) {
      se(Y), y();
    },
    get nodeExtent() {
      return me();
    },
    set nodeExtent(Y) {
      me(Y), y();
    },
    get onlyRenderVisibleElements() {
      return xe();
    },
    set onlyRenderVisibleElements(Y) {
      xe(Y), y();
    },
    get panOnScrollMode() {
      return fe();
    },
    set panOnScrollMode(Y) {
      fe(Y), y();
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
      return ae();
    },
    set zoomOnDoubleClick(Y) {
      ae(Y), y();
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
      return he();
    },
    set onedgecreate(Y) {
      he(Y), y();
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
      return Q();
    },
    set height(Y) {
      Q(Y), y();
    },
    get colorMode() {
      return Ye();
    },
    set colorMode(Y) {
      Ye(Y), y();
    },
    get onconnect() {
      return ue();
    },
    set onconnect(Y) {
      ue(Y), y();
    },
    get onconnectstart() {
      return en();
    },
    set onconnectstart(Y) {
      en(Y), y();
    },
    get onconnectend() {
      return tn();
    },
    set onconnectend(Y) {
      tn(Y), y();
    },
    get onbeforedelete() {
      return fn();
    },
    set onbeforedelete(Y) {
      fn(Y), y();
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
      return nn();
    },
    set style(Y) {
      nn(Y), y();
    },
    get class() {
      return Wt();
    },
    set class(Y) {
      Wt(Y), y();
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
  ce(t, !1);
  let n = w(t, "initialNodes", 12, void 0), r = w(t, "initialEdges", 12, void 0), o = w(t, "initialWidth", 12, void 0), i = w(t, "initialHeight", 12, void 0), s = w(t, "fitView", 12, void 0), a = w(t, "nodeOrigin", 12, void 0);
  const l = Bc({
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
  return pt(c, t, "default", {}), L(e, u), de({
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
  ce(t, !1);
  let o = w(t, "class", 12, void 0), i = w(t, "bgColor", 12, void 0), s = w(t, "bgColorHover", 12, void 0), a = w(t, "color", 12, void 0), l = w(t, "colorHover", 12, void 0), u = w(t, "borderColor", 12, void 0);
  He();
  var c = u2();
  let f;
  var d = F(c);
  return pt(d, t, "default", { class: "button-svg" }), Z(c), Ee(
    (g) => f = an(c, f, {
      type: "button",
      class: g,
      ...r,
      [nr]: {
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
    ve
  ), Ze("click", c, function(g) {
    Ae.call(this, t, g);
  }), L(e, c), de({
    get class() {
      return o();
    },
    set class(g) {
      o(g), y();
    },
    get bgColor() {
      return i();
    },
    set bgColor(g) {
      i(g), y();
    },
    get bgColorHover() {
      return s();
    },
    set bgColorHover(g) {
      s(g), y();
    },
    get color() {
      return a();
    },
    set color(g) {
      a(g), y();
    },
    get colorHover() {
      return l();
    },
    set colorHover(g) {
      l(g), y();
    },
    get borderColor() {
      return u();
    },
    set borderColor(g) {
      u(g), y();
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
var c2 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function id(e) {
  var t = c2();
  L(e, t);
}
le(id, {}, [], [], !0);
var d2 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function sd(e) {
  var t = d2();
  L(e, t);
}
le(sd, {}, [], [], !0);
var f2 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function ad(e) {
  var t = f2();
  L(e, t);
}
le(ad, {}, [], [], !0);
var g2 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function ld(e) {
  var t = g2();
  L(e, t);
}
le(ld, {}, [], [], !0);
var h2 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function ud(e) {
  var t = h2();
  L(e, t);
}
le(ud, {}, [], [], !0);
var v2 = /* @__PURE__ */ oe("<!> <!>", 1), p2 = /* @__PURE__ */ oe("<!> <!> <!> <!> <!> <!>", 1);
function cd(e, t) {
  ce(t, !1);
  const [n, r] = it(), o = () => ee(T, "$nodesDraggable", n), i = () => ee(I, "$nodesConnectable", n), s = () => ee(B, "$elementsSelectable", n), a = () => ee(H, "$viewport", n), l = () => ee(E, "$minZoom", n), u = () => ee(N, "$maxZoom", n), c = /* @__PURE__ */ ne(), f = /* @__PURE__ */ ne(), d = /* @__PURE__ */ ne(), g = /* @__PURE__ */ ne();
  let v = w(t, "position", 12, "bottom-left"), _ = w(t, "showZoom", 12, !0), x = w(t, "showFitView", 12, !0), k = w(t, "showLock", 12, !0), m = w(t, "buttonBgColor", 12, void 0), b = w(t, "buttonBgColorHover", 12, void 0), p = w(t, "buttonColor", 12, void 0), C = w(t, "buttonColorHover", 12, void 0), S = w(t, "buttonBorderColor", 12, void 0), $ = w(t, "ariaLabel", 12, void 0), M = w(t, "style", 12, void 0), D = w(t, "orientation", 12, "vertical"), A = w(t, "fitViewOptions", 12, void 0), V = w(t, "class", 12, "");
  const {
    zoomIn: z,
    zoomOut: O,
    fitView: P,
    viewport: H,
    minZoom: E,
    maxZoom: N,
    nodesDraggable: T,
    nodesConnectable: I,
    elementsSelectable: B
  } = Je(), X = {
    bgColor: m(),
    bgColorHover: b(),
    color: p(),
    colorHover: C(),
    borderColor: S()
  }, q = () => {
    z();
  }, re = () => {
    O();
  }, J = () => {
    P(A());
  }, W = () => {
    U(c, !h(c)), T.set(h(c)), I.set(h(c)), B.set(h(c));
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
  }), ge(() => j(D()), () => {
    U(g, D() === "horizontal" ? "horizontal" : "vertical");
  }), gt(), He();
  const se = /* @__PURE__ */ ve(() => Pt([
    "svelte-flow__controls",
    h(g),
    V()
  ])), me = /* @__PURE__ */ ve(() => $() ?? "Svelte Flow controls");
  Lo(e, {
    get class() {
      return h(se);
    },
    get position() {
      return v();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return h(me);
    },
    get style() {
      return M();
    },
    children: (fe, Ie) => {
      var G = p2(), ae = we(G);
      pt(ae, t, "before", {});
      var Me = R(ae, 2);
      {
        var Oe = (he) => {
          var $e = v2(), Se = we($e);
          so(Se, ct(
            {
              class: "svelte-flow__controls-zoomin",
              title: "zoom in",
              "aria-label": "zoom in",
              get disabled() {
                return h(d);
              }
            },
            X,
            {
              $$events: { click: q },
              children: (ut, Q) => {
                id(ut);
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
                return h(f);
              }
            },
            X,
            {
              $$events: { click: re },
              children: (ut, Q) => {
                sd(ut);
              },
              $$slots: { default: !0 }
            }
          )), L(he, $e);
        };
        be(Me, (he) => {
          _() && he(Oe);
        });
      }
      var Xe = R(Me, 2);
      {
        var te = (he) => {
          so(he, ct(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            X,
            {
              $$events: { click: J },
              children: ($e, Se) => {
                ad($e);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        be(Xe, (he) => {
          x() && he(te);
        });
      }
      var We = R(Xe, 2);
      {
        var Ue = (he) => {
          so(he, ct(
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
                  var Q = (ue) => {
                    ud(ue);
                  }, Ye = (ue) => {
                    ld(ue);
                  };
                  be(ut, (ue) => {
                    h(c) ? ue(Q) : ue(Ye, !1);
                  });
                }
                L($e, at);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        be(We, (he) => {
          k() && he(Ue);
        });
      }
      var Be = R(We, 2);
      pt(Be, t, "default", {});
      var ie = R(Be, 2);
      pt(ie, t, "after", {}), L(fe, G);
    },
    $$slots: { default: !0 }
  });
  var xe = de({
    get position() {
      return v();
    },
    set position(fe) {
      v(fe), y();
    },
    get showZoom() {
      return _();
    },
    set showZoom(fe) {
      _(fe), y();
    },
    get showFitView() {
      return x();
    },
    set showFitView(fe) {
      x(fe), y();
    },
    get showLock() {
      return k();
    },
    set showLock(fe) {
      k(fe), y();
    },
    get buttonBgColor() {
      return m();
    },
    set buttonBgColor(fe) {
      m(fe), y();
    },
    get buttonBgColorHover() {
      return b();
    },
    set buttonBgColorHover(fe) {
      b(fe), y();
    },
    get buttonColor() {
      return p();
    },
    set buttonColor(fe) {
      p(fe), y();
    },
    get buttonColorHover() {
      return C();
    },
    set buttonColorHover(fe) {
      C(fe), y();
    },
    get buttonBorderColor() {
      return S();
    },
    set buttonBorderColor(fe) {
      S(fe), y();
    },
    get ariaLabel() {
      return $();
    },
    set ariaLabel(fe) {
      $(fe), y();
    },
    get style() {
      return M();
    },
    set style(fe) {
      M(fe), y();
    },
    get orientation() {
      return D();
    },
    set orientation(fe) {
      D(fe), y();
    },
    get fitViewOptions() {
      return A();
    },
    set fitViewOptions(fe) {
      A(fe), y();
    },
    get class() {
      return V();
    },
    set class(fe) {
      V(fe), y();
    }
  });
  return r(), xe;
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
var m2 = /* @__PURE__ */ _e("<circle></circle>");
function dd(e, t) {
  ce(t, !1);
  let n = w(t, "radius", 12, 5), r = w(t, "class", 12, "");
  He();
  var o = m2();
  return Ee(
    (i) => {
      pe(o, "cx", n()), pe(o, "cy", n()), pe(o, "r", n()), $t(o, 0, i);
    },
    [
      () => kn(Pt([
        "svelte-flow__background-pattern",
        "dots",
        r()
      ]))
    ],
    ve
  ), L(e, o), de({
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
var y2 = /* @__PURE__ */ _e("<path></path>");
function fd(e, t) {
  ce(t, !1);
  let n = w(t, "lineWidth", 12, 1), r = w(t, "dimensions", 12), o = w(t, "variant", 12, void 0), i = w(t, "class", 12, "");
  He();
  var s = y2();
  return Ee(
    (a) => {
      pe(s, "stroke-width", n()), pe(s, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), $t(s, 0, a);
    },
    [
      () => kn(Pt([
        "svelte-flow__background-pattern",
        o(),
        i()
      ]))
    ],
    ve
  ), L(e, s), de({
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
const w2 = {
  [Gn.Dots]: 1,
  [Gn.Lines]: 1,
  [Gn.Cross]: 6
};
var _2 = /* @__PURE__ */ _e('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const x2 = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function gd(e, t) {
  ce(t, !1), et(e, x2);
  const [n, r] = it(), o = () => ee(C, "$flowId", n), i = () => ee(p, "$viewport", n), s = /* @__PURE__ */ ne(), a = /* @__PURE__ */ ne(), l = /* @__PURE__ */ ne(), u = /* @__PURE__ */ ne(), c = /* @__PURE__ */ ne();
  let f = w(t, "id", 12, void 0), d = w(t, "variant", 28, () => Gn.Dots), g = w(t, "gap", 12, 20), v = w(t, "size", 12, 1), _ = w(t, "lineWidth", 12, 1), x = w(t, "bgColor", 12, void 0), k = w(t, "patternColor", 12, void 0), m = w(t, "patternClass", 12, void 0), b = w(t, "class", 12, "");
  const { viewport: p, flowId: C } = Je(), S = v() || w2[d()], $ = d() === Gn.Dots, M = d() === Gn.Cross, D = Array.isArray(g()) ? g() : [g(), g()];
  ge(
    () => (o(), j(f())),
    () => {
      U(s, `background-pattern-${o()}-${f() ? f() : ""}`);
    }
  ), ge(() => i(), () => {
    U(a, [
      D[0] * i().zoom || 1,
      D[1] * i().zoom || 1
    ]);
  }), ge(() => i(), () => {
    U(l, S * i().zoom);
  }), ge(() => (h(l), h(a)), () => {
    U(u, M ? [h(l), h(l)] : h(a));
  }), ge(
    () => (h(l), h(u)),
    () => {
      U(c, $ ? [
        h(l) / 2,
        h(l) / 2
      ] : [
        h(u)[0] / 2,
        h(u)[1] / 2
      ]);
    }
  ), gt(), He();
  var A = _2();
  let V;
  var z = F(A), O = F(z);
  {
    var P = (T) => {
      const I = /* @__PURE__ */ ve(() => h(l) / 2);
      dd(T, {
        get radius() {
          return h(I);
        },
        get class() {
          return m();
        }
      });
    }, H = (T) => {
      fd(T, {
        get dimensions() {
          return h(u);
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
    be(O, (T) => {
      $ ? T(P) : T(H, !1);
    });
  }
  Z(z);
  var E = R(z);
  Z(A), Ee(
    (T) => {
      $t(A, 0, T, "svelte-1r7pe8d"), V = ft(A, "", V, {
        "--xy-background-color-props": x(),
        "--xy-background-pattern-color-props": k()
      }), pe(z, "id", h(s)), pe(z, "x", i().x % h(a)[0]), pe(z, "y", i().y % h(a)[1]), pe(z, "width", h(a)[0]), pe(z, "height", h(a)[1]), pe(z, "patternTransform", `translate(-${h(c)[0]},-${h(c)[1]})`), pe(E, "fill", `url(#${h(s)})`);
    },
    [
      () => kn(Pt(["svelte-flow__background", b()]))
    ],
    ve
  ), L(e, A);
  var N = de({
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
      return g();
    },
    set gap(T) {
      g(T), y();
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
      return m();
    },
    set patternClass(T) {
      m(T), y();
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
var b2 = /* @__PURE__ */ _e("<rect></rect>");
function hd(e, t) {
  ce(t, !1);
  let n = w(t, "x", 12), r = w(t, "y", 12), o = w(t, "width", 12, 0), i = w(t, "height", 12, 0), s = w(t, "borderRadius", 12, 5), a = w(t, "color", 12, void 0), l = w(t, "shapeRendering", 12), u = w(t, "strokeColor", 12, void 0), c = w(t, "strokeWidth", 12, 2), f = w(t, "selected", 12, !1), d = w(t, "class", 12, "");
  He();
  var g = b2();
  let v;
  return Ee(
    (_, x) => {
      v = $t(g, 0, _, null, v, x), pe(g, "x", n()), pe(g, "y", r()), pe(g, "rx", s()), pe(g, "ry", s()), pe(g, "width", o()), pe(g, "height", i()), ft(g, `${a() ? `fill: ${a()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), pe(g, "shape-rendering", l());
    },
    [
      () => kn(Pt(["svelte-flow__minimap-node", d()])),
      () => ({ selected: f() })
    ],
    ve
  ), L(e, g), de({
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
var C2 = /* @__PURE__ */ _e("<title> </title>"), k2 = /* @__PURE__ */ _e('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function vd(e, t) {
  ce(t, !1);
  const [n, r] = it(), o = () => ee(Xe, "$flowId", n), i = () => ee(ae, "$viewport", n), s = () => ee(Me, "$containerWidth", n), a = () => ee(Oe, "$containerHeight", n), l = () => ee(G, "$nodeLookup", n), u = () => ee(Ie, "$nodes", n), c = () => ee(te, "$panZoom", n), f = () => ee(We, "$translateExtent", n), d = /* @__PURE__ */ ne(), g = /* @__PURE__ */ ne(), v = /* @__PURE__ */ ne(), _ = /* @__PURE__ */ ne(), x = /* @__PURE__ */ ne(), k = /* @__PURE__ */ ne(), m = /* @__PURE__ */ ne(), b = /* @__PURE__ */ ne(), p = /* @__PURE__ */ ne(), C = /* @__PURE__ */ ne(), S = /* @__PURE__ */ ne(), $ = /* @__PURE__ */ ne(), M = /* @__PURE__ */ ne();
  let D = w(t, "position", 12, "bottom-right"), A = w(t, "ariaLabel", 12, "Mini map"), V = w(t, "nodeStrokeColor", 12, "transparent"), z = w(t, "nodeColor", 12, void 0), O = w(t, "nodeClass", 12, ""), P = w(t, "nodeBorderRadius", 12, 5), H = w(t, "nodeStrokeWidth", 12, 2), E = w(t, "bgColor", 12, void 0), N = w(t, "maskColor", 12, void 0), T = w(t, "maskStrokeColor", 12, void 0), I = w(t, "maskStrokeWidth", 12, void 0), B = w(t, "width", 12, void 0), X = w(t, "height", 12, void 0), q = w(t, "pannable", 12, !0), re = w(t, "zoomable", 12, !0), J = w(t, "inversePan", 12, void 0), W = w(t, "zoomStep", 12, void 0), se = w(t, "style", 12, ""), me = w(t, "class", 12, "");
  const xe = 200, fe = 150, {
    nodes: Ie,
    nodeLookup: G,
    viewport: ae,
    width: Me,
    height: Oe,
    flowId: Xe,
    panZoom: te,
    translateExtent: We
  } = Je(), Ue = z() === void 0 ? void 0 : ms(z()), Be = ms(V()), ie = ms(O()), he = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), $e = `svelte-flow__minimap-desc-${o()}`;
  let Se = /* @__PURE__ */ ne(h(d));
  const at = () => h(k);
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
    () => (l(), h(d), u()),
    () => {
      U(Se, l().size > 0 ? hc(Ao(l()), h(d)) : h(d)), u();
    }
  ), ge(() => j(B()), () => {
    U(g, B() ?? xe);
  }), ge(() => j(X()), () => {
    U(v, X() ?? fe);
  }), ge(
    () => (h(Se), h(g)),
    () => {
      U(_, h(Se).width / h(g));
    }
  ), ge(
    () => (h(Se), h(v)),
    () => {
      U(x, h(Se).height / h(v));
    }
  ), ge(
    () => (h(_), h(x)),
    () => {
      U(k, Math.max(h(_), h(x)));
    }
  ), ge(() => (h(k), h(g)), () => {
    U(m, h(k) * h(g));
  }), ge(
    () => (h(k), h(v)),
    () => {
      U(b, h(k) * h(v));
    }
  ), ge(() => h(k), () => {
    U(p, 5 * h(k));
  }), ge(
    () => (h(Se), h(m), h(p)),
    () => {
      U(C, h(Se).x - (h(m) - h(Se).width) / 2 - h(p));
    }
  ), ge(
    () => (h(Se), h(b), h(p)),
    () => {
      U(S, h(Se).y - (h(b) - h(Se).height) / 2 - h(p));
    }
  ), ge(() => (h(m), h(p)), () => {
    U($, h(m) + h(p) * 2);
  }), ge(() => (h(b), h(p)), () => {
    U(M, h(b) + h(p) * 2);
  }), gt(), He();
  const ut = /* @__PURE__ */ ve(() => se() + (E() ? `;--xy-minimap-background-color-props:${E()}` : "")), Q = /* @__PURE__ */ ve(() => Pt(["svelte-flow__minimap", me()]));
  Lo(e, {
    get position() {
      return D();
    },
    get style() {
      return h(ut);
    },
    get class() {
      return h(Q);
    },
    "data-testid": "svelte-flow__minimap",
    children: (ue, en) => {
      var tn = tt(), fn = we(tn);
      {
        var Pe = (nt) => {
          var Le = k2();
          pe(Le, "aria-labelledby", $e);
          let Ve;
          var rt = F(Le);
          {
            var nn = (yt) => {
              var Nt = C2();
              pe(Nt, "id", $e);
              var yr = F(Nt, !0);
              Z(Nt), Ee(() => Yt(yr, A())), L(yt, Nt);
            };
            be(rt, (yt) => {
              A() && yt(nn);
            });
          }
          var Wt = R(rt);
          Dt(Wt, 1, u, (yt) => yt.id, (yt, Nt) => {
            var yr = tt();
            const ot = /* @__PURE__ */ ve(() => l().get(h(Nt).id));
            var es = we(yr);
            {
              var Ur = (Lt) => {
                const Yo = /* @__PURE__ */ ve(() => er(h(ot))), Zo = /* @__PURE__ */ ve(() => Ue == null ? void 0 : Ue(h(ot))), Fo = /* @__PURE__ */ ve(() => Be(h(ot))), ts = /* @__PURE__ */ ve(() => ie(h(ot)));
                hd(Lt, ct(
                  {
                    get x() {
                      return h(ot).internals.positionAbsolute.x;
                    },
                    get y() {
                      return h(ot).internals.positionAbsolute.y;
                    }
                  },
                  () => h(Yo),
                  {
                    get selected() {
                      return h(ot).selected;
                    },
                    get color() {
                      return h(Zo);
                    },
                    get borderRadius() {
                      return P();
                    },
                    get strokeColor() {
                      return h(Fo);
                    },
                    get strokeWidth() {
                      return H();
                    },
                    shapeRendering: he,
                    get class() {
                      return h(ts);
                    }
                  }
                ));
              };
              be(es, (Lt) => {
                h(ot) && pc(h(ot)) && Lt(Ur);
              });
            }
            L(yt, yr);
          });
          var Gr = R(Wt);
          Z(Le), vt(Le, (yt, Nt) => ps == null ? void 0 : ps(yt, Nt), () => ({
            panZoom: c(),
            viewport: ae,
            getViewScale: at,
            translateExtent: f(),
            width: s(),
            height: a(),
            inversePan: J(),
            zoomStep: W(),
            pannable: q(),
            zoomable: re()
          })), Ee(() => {
            pe(Le, "width", h(g)), pe(Le, "height", h(v)), pe(Le, "viewBox", `${h(C) ?? ""} ${h(S) ?? ""} ${h($) ?? ""} ${h(M) ?? ""}`), Ve = ft(Le, "", Ve, {
              "--xy-minimap-mask-background-color-props": N(),
              "--xy-minimap-mask-stroke-color-props": T(),
              "--xy-minimap-mask-stroke-width-props": I() ? I() * h(k) : void 0
            }), pe(Gr, "d", `M${h(C) - h(p)},${h(S) - h(p)}h${h($) + h(p) * 2}v${h(M) + h(p) * 2}h${-h($) - h(p) * 2}z
      M${h(d).x ?? ""},${h(d).y ?? ""}h${h(d).width ?? ""}v${h(d).height ?? ""}h${-h(d).width}z`);
          }), L(nt, Le);
        };
        be(fn, (nt) => {
          c() && nt(Pe);
        });
      }
      L(ue, tn);
    },
    $$slots: { default: !0 }
  });
  var Ye = de({
    get position() {
      return D();
    },
    set position(ue) {
      D(ue), y();
    },
    get ariaLabel() {
      return A();
    },
    set ariaLabel(ue) {
      A(ue), y();
    },
    get nodeStrokeColor() {
      return V();
    },
    set nodeStrokeColor(ue) {
      V(ue), y();
    },
    get nodeColor() {
      return z();
    },
    set nodeColor(ue) {
      z(ue), y();
    },
    get nodeClass() {
      return O();
    },
    set nodeClass(ue) {
      O(ue), y();
    },
    get nodeBorderRadius() {
      return P();
    },
    set nodeBorderRadius(ue) {
      P(ue), y();
    },
    get nodeStrokeWidth() {
      return H();
    },
    set nodeStrokeWidth(ue) {
      H(ue), y();
    },
    get bgColor() {
      return E();
    },
    set bgColor(ue) {
      E(ue), y();
    },
    get maskColor() {
      return N();
    },
    set maskColor(ue) {
      N(ue), y();
    },
    get maskStrokeColor() {
      return T();
    },
    set maskStrokeColor(ue) {
      T(ue), y();
    },
    get maskStrokeWidth() {
      return I();
    },
    set maskStrokeWidth(ue) {
      I(ue), y();
    },
    get width() {
      return B();
    },
    set width(ue) {
      B(ue), y();
    },
    get height() {
      return X();
    },
    set height(ue) {
      X(ue), y();
    },
    get pannable() {
      return q();
    },
    set pannable(ue) {
      q(ue), y();
    },
    get zoomable() {
      return re();
    },
    set zoomable(ue) {
      re(ue), y();
    },
    get inversePan() {
      return J();
    },
    set inversePan(ue) {
      J(ue), y();
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
      return me();
    },
    set class(ue) {
      me(ue), y();
    }
  });
  return r(), Ye;
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
const Bl = (e) => k0(e);
function Ot() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: s, height: a, minZoom: l, maxZoom: u, panZoom: c, nodes: f, edges: d, domNode: g, nodeLookup: v, nodeOrigin: _, edgeLookup: x, connectionLookup: k } = Je(), m = (C) => {
    var A, V;
    const S = K(v), $ = Bl(C) ? C : S.get(C.id), M = $.parentId ? P0($.position, $.measured, $.parentId, S, K(_)) : $.position, D = {
      ...$,
      position: M,
      width: ((A = $.measured) == null ? void 0 : A.width) ?? $.width,
      height: ((V = $.measured) == null ? void 0 : V.height) ?? $.height
    };
    return zr(D);
  }, b = (C, S, $ = { replace: !1 }) => {
    var A;
    const M = (A = K(v).get(C)) == null ? void 0 : A.internals.userNode;
    if (!M)
      return;
    const D = typeof S == "function" ? S(M) : S;
    $.replace ? f.update((V) => V.map((z) => z.id === C ? Bl(D) ? D : { ...z, ...D } : z)) : (Object.assign(M, D), f.update((V) => V));
  }, p = (C) => K(v).get(C);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: p,
    getNode: (C) => {
      var S;
      return (S = p(C)) == null ? void 0 : S.internals.userNode;
    },
    getNodes: (C) => C === void 0 ? K(f) : Yl(K(v), C),
    getEdge: (C) => K(x).get(C),
    getEdges: (C) => C === void 0 ? K(d) : Yl(K(x), C),
    setZoom: (C, S) => {
      const $ = K(c);
      return $ ? $.scaleTo(C, { duration: S == null ? void 0 : S.duration }) : Promise.resolve(!1);
    },
    getZoom: () => K(i).zoom,
    setViewport: async (C, S) => {
      const $ = K(i), M = K(c);
      return M ? (await M.setViewport({
        x: C.x ?? $.x,
        y: C.y ?? $.y,
        zoom: C.zoom ?? $.zoom
      }, { duration: S == null ? void 0 : S.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => K(i),
    setCenter: async (C, S, $) => {
      const M = typeof ($ == null ? void 0 : $.zoom) < "u" ? $.zoom : K(u), D = K(c);
      return D ? (await D.setViewport({
        x: K(s) / 2 - C * M,
        y: K(a) / 2 - S * M,
        zoom: M
      }, { duration: $ == null ? void 0 : $.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (C, S) => {
      const $ = K(c);
      if (!$)
        return Promise.resolve(!1);
      const M = wa(C, K(s), K(a), K(l), K(u), (S == null ? void 0 : S.padding) ?? 0.1);
      return await $.setViewport(M, { duration: S == null ? void 0 : S.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (C, S = !0, $) => {
      const M = El(C), D = M ? C : m(C);
      return D ? ($ || K(f)).filter((A) => {
        const V = K(v).get(A.id);
        if (!V || !M && A.id === C.id)
          return !1;
        const z = zr(V), O = Co(z, D);
        return S && O > 0 || O >= D.width * D.height;
      }) : [];
    },
    isNodeIntersecting: (C, S, $ = !0) => {
      const D = El(C) ? C : m(C);
      if (!D)
        return !1;
      const A = Co(D, S);
      return $ && A > 0 || A >= D.width * D.height;
    },
    deleteElements: async ({ nodes: C = [], edges: S = [] }) => {
      const { nodes: $, edges: M } = await dc({
        nodesToRemove: C,
        edgesToRemove: S,
        nodes: K(f),
        edges: K(d),
        onBeforeDelete: K(r)
      });
      return $ && f.update((D) => D.filter((A) => !$.some(({ id: V }) => V === A.id))), M && d.update((D) => D.filter((A) => !M.some(({ id: V }) => V === A.id))), {
        deletedNodes: $,
        deletedEdges: M
      };
    },
    screenToFlowPosition: (C, S = { snapToGrid: !0 }) => {
      const $ = K(g);
      if (!$)
        return C;
      const M = S.snapToGrid ? K(o) : !1, { x: D, y: A, zoom: V } = K(i), { x: z, y: O } = $.getBoundingClientRect(), P = {
        x: C.x - z,
        y: C.y - O
      };
      return Do(P, [D, A, V], M !== null, M || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (C) => {
      const S = K(g);
      if (!S)
        return C;
      const { x: $, y: M, zoom: D } = K(i), { x: A, y: V } = S.getBoundingClientRect(), z = vc(C, [$, M, D]);
      return {
        x: z.x + A,
        y: z.y + V
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
    updateNodeData: (C, S, $) => {
      var A;
      const M = (A = K(v).get(C)) == null ? void 0 : A.internals.userNode;
      if (!M)
        return;
      const D = typeof S == "function" ? S(M) : S;
      M.data = $ != null && $.replace ? D : { ...M.data, ...D }, f.update((V) => V);
    },
    getNodesBounds: (C) => {
      const S = K(v), $ = K(_);
      return E0(C, { nodeLookup: S, nodeOrigin: $ });
    },
    getHandleConnections: ({ type: C, id: S, nodeId: $ }) => {
      var M;
      return Array.from(((M = K(k).get(`${$}-${C}-${S ?? null}`)) == null ? void 0 : M.values()) ?? []);
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
function pd(e, t) {
  ce(t, !1);
  const [n, r] = it(), o = () => ee(b, "$nodes", n), i = () => ee(m, "$nodeLookup", n), s = () => ee(k, "$viewport", n), a = () => ee(x, "$domNode", n), l = /* @__PURE__ */ ne(), u = /* @__PURE__ */ ne(), c = /* @__PURE__ */ ne();
  let f = w(t, "nodeId", 12, void 0), d = w(t, "position", 12, void 0), g = w(t, "align", 12, void 0), v = w(t, "offset", 12, void 0), _ = w(t, "isVisible", 12, void 0);
  const { domNode: x, viewport: k, nodeLookup: m, nodes: b } = Je(), { getNodesBounds: p } = Ot(), C = sr("svelteflow__node_id");
  let S = /* @__PURE__ */ ne(), $ = /* @__PURE__ */ ne([]), M = v() !== void 0 ? v() : 10, D = d() !== void 0 ? d() : Ce.Top, A = g() !== void 0 ? g() : "center";
  ge(
    () => (o(), j(f()), i()),
    () => {
      o();
      const H = Array.isArray(f()) ? f() : [f() || C];
      U($, H.reduce(
        (E, N) => {
          const T = i().get(N);
          return T && E.push(T), E;
        },
        []
      ));
    }
  ), ge(
    () => (h($), s()),
    () => {
      const H = p(h($));
      H && U(S, Z0(H, s(), D, M, A));
    }
  ), ge(() => h($), () => {
    U(l, h($).length === 0 ? 1 : Math.max(...h($).map((H) => (H.internals.z || 5) + 1)));
  }), ge(() => o(), () => {
    U(u, o().filter((H) => H.selected).length);
  }), ge(
    () => (j(_()), h($), h(u)),
    () => {
      U(c, typeof _() == "boolean" ? _() : h($).length === 1 && h($)[0].selected && h(u) === 1);
    }
  ), gt(), He();
  var V = tt(), z = we(V);
  {
    var O = (H) => {
      var E = E2();
      let N;
      var T = F(E);
      pt(T, t, "default", {}), Z(E), vt(E, (I, B) => $r == null ? void 0 : $r(I, B), () => ({ domNode: a() })), Ee(
        (I) => {
          pe(E, "data-id", I), N = ft(E, "", N, {
            position: "absolute",
            transform: h(S),
            "z-index": h(l)
          });
        },
        [
          () => h($).reduce((I, B) => `${I}${B.id} `, "").trim()
        ],
        ve
      ), L(H, E);
    };
    be(z, (H) => {
      a() && h(c) && h($) && H(O);
    });
  }
  L(e, V);
  var P = de({
    get nodeId() {
      return f();
    },
    set nodeId(H) {
      f(H), y();
    },
    get position() {
      return d();
    },
    set position(H) {
      d(H), y();
    },
    get align() {
      return g();
    },
    set align(H) {
      g(H), y();
    },
    get offset() {
      return v();
    },
    set offset(H) {
      v(H), y();
    },
    get isVisible() {
      return _();
    },
    set isVisible(H) {
      _(H), y();
    }
  });
  return r(), P;
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
function pr(e) {
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
class Nw {
  constructor(t) {
    wt(this, "options");
    wt(this, "rootEl");
    wt(this, "svelteFlowInstance");
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
  ce(t, !0);
  const n = w(t, "children", 7), r = /* @__PURE__ */ mt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = S2();
  let i;
  var s = F(o);
  return ar(s, () => n() ?? dt), Z(o), Ee(() => i = an(o, i, {
    type: "button",
    ...r,
    class: `tf-btn nopan nodrag ${t.class ?? ""}`
  })), L(e, o), de({
    get children() {
      return n();
    },
    set children(a) {
      n(a), y();
    }
  });
}
le(je, { children: {} }, [], [], !0);
var P2 = /* @__PURE__ */ oe("<input>");
function md(e, t) {
  ce(t, !0);
  const n = /* @__PURE__ */ mt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = P2();
  lo(r);
  let o;
  Ee(() => o = an(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), L(e, r), de();
}
le(md, {}, [], [], !0);
var N2 = /* @__PURE__ */ oe("<input>");
function bt(e, t) {
  ce(t, !0);
  const n = /* @__PURE__ */ mt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = N2();
  lo(r);
  let o;
  Ee(() => o = an(r, o, {
    type: "text",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), L(e, r), de();
}
le(bt, {}, [], [], !0);
var T2 = /* @__PURE__ */ oe("<textarea></textarea>");
function St(e, t) {
  ce(t, !0);
  const n = /* @__PURE__ */ mt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = T2();
  w1(r);
  let o;
  Ee(() => o = an(r, o, {
    ...n,
    class: `tf-textarea nodrag ${t.class ?? ""}`
  })), L(e, r), de();
}
le(St, {}, [], [], !0);
var M2 = /* @__PURE__ */ oe('<div role="button"><!></div>'), H2 = /* @__PURE__ */ oe("<div></div>");
function yd(e, t) {
  const n = st(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = st(n, ["items", "onChange", "activeIndex"]);
  ce(t, !1);
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
    var g = M2();
    pe(g, "tabindex", d), g.__click = () => a(h(f), d), g.__keydown = (k) => {
      (k.key === "Enter" || k.key === " ") && (k.preventDefault(), a(h(f), d));
    };
    var v = F(g);
    {
      var _ = (k) => {
        var m = Re();
        Ee(() => Yt(m, h(f).label)), L(k, m);
      }, x = (k) => {
        var m = tt(), b = we(m);
        ar(b, () => h(f).label ?? dt), L(k, m);
      };
      be(v, (k) => {
        typeof h(f).label == "string" ? k(_) : k(x, !1);
      });
    }
    Z(g), Ee(() => $t(g, 1, `tf-tabs-item ${(d === s() ? "active" : "") ?? ""}`)), L(c, g);
  }), Z(l), Ee(() => u = an(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), L(e, l), de({
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
le(yd, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var V2 = (e, t, n) => t(h(n)), A2 = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(h(n)));
}, D2 = /* @__PURE__ */ oe('<span class="tf-collapse-item-title-icon"><!></span>'), O2 = /* @__PURE__ */ oe('<div class="tf-collapse-item-description"><!></div>'), L2 = /* @__PURE__ */ oe('<div class="tf-collapse-item-content"><!></div>'), I2 = /* @__PURE__ */ oe('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), z2 = /* @__PURE__ */ oe("<div></div>");
const R2 = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function wd(e, t) {
  ce(t, !0), et(e, R2);
  let n = w(t, "items", 7), r = w(t, "onChange", 7), o = w(t, "activeKeys", 31, () => Ut([]));
  function i(a) {
    var l;
    o().includes(a.key) ? o(o().filter((u) => u !== a.key)) : (o().push(a.key), o(o())), (l = r()) == null || l(a, o());
  }
  var s = z2();
  return Dt(s, 21, n, po, (a, l, u) => {
    var c = I2(), f = F(c);
    pe(f, "tabindex", u), f.__click = [V2, i, l], f.__keydown = [A2, i, l];
    var d = F(f);
    {
      var g = (p) => {
        var C = D2(), S = F(C);
        Xn(S, {
          get target() {
            return h(l).icon;
          }
        }), Z(C), L(p, C);
      };
      be(d, (p) => {
        h(l).icon && p(g);
      });
    }
    var v = R(d, 2);
    Xn(v, {
      get target() {
        return h(l).title;
      }
    });
    var _ = R(v, 2);
    Z(f);
    var x = R(f, 2);
    {
      var k = (p) => {
        var C = O2(), S = F(C);
        Xn(S, {
          get target() {
            return h(l).description;
          }
        }), Z(C), L(p, C);
      };
      be(x, (p) => {
        h(l).description && p(k);
      });
    }
    var m = R(x, 2);
    {
      var b = (p) => {
        var C = L2(), S = F(C);
        Xn(S, {
          get target() {
            return h(l).content;
          }
        }), Z(C), L(p, C);
      };
      be(m, (p) => {
        o().includes(h(l).key) && p(b);
      });
    }
    Z(c), Ee((p) => $t(_, 1, `tf-collapse-item-title-arrow ${p ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(h(l).key) ? "rotate-90" : ""
    ]), L(a, c);
  }), Z(s), Ee(() => {
    ft(s, t.style), $t(s, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), L(e, s), de({
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
le(wd, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Xn(e, t) {
  ce(t, !0);
  let n = w(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = tt(), o = we(r);
  {
    var i = (a) => {
      var l = tt(), u = we(l);
      ar(u, () => n() ?? dt), L(a, l);
    }, s = (a) => {
      var l = tt(), u = we(l);
      aa(u, n), L(a, l);
    };
    be(o, (a) => {
      typeof n() == "function" ? a(i) : a(s, !1);
    });
  }
  return L(e, r), de({
    get target() {
      return n();
    },
    set target(a) {
      n(a), y();
    }
  });
}
le(Xn, { target: {} }, [], [], !0);
var B2 = (e, t, n) => t(h(n)), Y2 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), Z2 = /* @__PURE__ */ oe('<div class="tf-select-content-children"><!></div>'), F2 = /* @__PURE__ */ oe('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), X2 = /* @__PURE__ */ oe('<div class="tf-select-content nopan nodrag"><!></div>'), W2 = /* @__PURE__ */ oe("<!> <!>", 1), K2 = /* @__PURE__ */ oe('<div class="tf-select-input-placeholder"> </div>'), q2 = /* @__PURE__ */ oe('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), G2 = /* @__PURE__ */ oe("<div><!></div>");
function xn(e, t) {
  ce(t, !0);
  const n = (b, p = dt) => {
    var C = tt(), S = we(C);
    Dt(S, 19, p, ($, M) => `${M}_${$.value}`, ($, M) => {
      var D = F2(), A = we(D);
      A.__click = [B2, _, M];
      var V = F(A), z = F(V);
      {
        var O = (N) => {
          var T = Y2();
          L(N, T);
        };
        be(z, (N) => {
          h(M).children && h(M).children.length > 0 && N(O);
        });
      }
      Z(V);
      var P = R(V, 2);
      Xn(P, {
        get target() {
          return h(M).label;
        }
      }), Z(A);
      var H = R(A, 2);
      {
        var E = (N) => {
          var T = Z2(), I = F(T);
          n(I, () => h(M).children), Z(T), L(N, T);
        };
        be(H, (N) => {
          h(M).children && h(M).children.length > 0 && (l() || c().includes(h(M).value)) && N(E);
        });
      }
      L($, D);
    }), L(b, C);
  };
  let r = w(t, "items", 7), o = w(t, "onExpand", 7), i = w(t, "onSelect", 7), s = w(t, "value", 23, () => []), a = w(t, "defaultValue", 23, () => []), l = w(t, "expandAll", 7, !0), u = w(t, "multiple", 7, !1), c = w(t, "expandValue", 23, () => []), f = w(t, "placeholder", 7), d = /* @__PURE__ */ mt(t, [
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
  ]), g = Te(() => {
    const b = [], p = (C) => {
      for (let S of C)
        s().length > 0 ? s().includes(S.value) && b.push(S) : a().includes(S.value) && b.push(S), S.children && S.children.length > 0 && p(S.children);
    };
    return p(r()), b;
  }), v;
  function _(b) {
    var p, C;
    if (b.children && b.children.length > 0) {
      (p = o()) == null || p(b);
      return;
    } else
      v == null || v.hide(), (C = i()) == null || C(b);
  }
  var x = G2();
  let k;
  var m = F(x);
  return _n(
    Bo(m, {
      floating: (p) => {
        var C = X2(), S = F(C);
        n(S, r), Z(C), L(p, C);
      },
      children: (p, C) => {
        var S = q2();
        let $;
        var M = F(S);
        Dt(
          M,
          23,
          () => h(g),
          (D, A) => `${A}_${D.value}`,
          (D, A, V) => {
            var z = tt(), O = we(z);
            {
              var P = (E) => {
                var N = tt(), T = we(N);
                {
                  var I = (B) => {
                    Xn(B, {
                      get target() {
                        return h(A).label;
                      }
                    });
                  };
                  be(T, (B) => {
                    h(V) === 0 && B(I);
                  });
                }
                L(E, N);
              }, H = (E) => {
                var N = W2(), T = we(N);
                Xn(T, {
                  get target() {
                    return h(A).label;
                  }
                });
                var I = R(T, 2);
                {
                  var B = (X) => {
                    var q = Re(",");
                    L(X, q);
                  };
                  be(I, (X) => {
                    h(V) < h(g).length - 1 && X(B);
                  });
                }
                L(E, N);
              };
              be(O, (E) => {
                u() ? E(H, !1) : E(P);
              });
            }
            L(D, z);
          },
          (D) => {
            var A = K2(), V = F(A, !0);
            Z(A), Ee(() => Yt(V, f())), L(D, A);
          }
        ), Z(M), Ne(2), Z(S), Ee(() => $ = an(S, $, {
          class: "tf-select-input nopan nodrag",
          ...d
        })), L(p, S);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (p) => v = p,
    () => v
  ), Z(x), Ee(() => k = an(x, k, {
    ...d,
    class: `tf-select ${d.class ?? ""}`
  })), L(e, x), de({
    get items() {
      return r();
    },
    set items(b) {
      r(b), y();
    },
    get onExpand() {
      return o();
    },
    set onExpand(b) {
      o(b), y();
    },
    get onSelect() {
      return i();
    },
    set onSelect(b) {
      i(b), y();
    },
    get value() {
      return s();
    },
    set value(b = []) {
      s(b), y();
    },
    get defaultValue() {
      return a();
    },
    set defaultValue(b = []) {
      a(b), y();
    },
    get expandAll() {
      return l();
    },
    set expandAll(b = !0) {
      l(b), y();
    },
    get multiple() {
      return u();
    },
    set multiple(b = !1) {
      u(b), y();
    },
    get expandValue() {
      return c();
    },
    set expandValue(b = []) {
      c(b), y();
    },
    get placeholder() {
      return f();
    },
    set placeholder(b) {
      f(b), y();
    }
  });
}
zi(["click"]);
le(
  xn,
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
const Eo = Math.min, Pr = Math.max, $i = Math.round, vn = (e) => ({
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
function dr(e) {
  return e.split("-")[0];
}
function zo(e) {
  return e.split("-")[1];
}
function _d(e) {
  return e === "x" ? "y" : "x";
}
function Ea(e) {
  return e === "y" ? "height" : "width";
}
function Br(e) {
  return ["top", "bottom"].includes(dr(e)) ? "y" : "x";
}
function $a(e) {
  return _d(Br(e));
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
  let i = em(dr(e), n === "start", r);
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
function xd(e) {
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
  const i = Br(t), s = $a(t), a = Ea(s), l = dr(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, d = r[a] / 2 - o[a] / 2;
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
        y: f
      };
      break;
    case "left":
      g = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      g = {
        x: r.x,
        y: r.y
      };
  }
  switch (zo(t)) {
    case "start":
      g[s] -= d * (n && u ? -1 : 1);
      break;
    case "end":
      g[s] += d * (n && u ? -1 : 1);
      break;
  }
  return g;
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
  } = Fl(u, r, l), d = r, g = {}, v = 0;
  for (let _ = 0; _ < a.length; _++) {
    const {
      name: x,
      fn: k
    } = a[_], {
      x: m,
      y: b,
      data: p,
      reset: C
    } = await k({
      x: c,
      y: f,
      initialPlacement: r,
      placement: d,
      strategy: o,
      middlewareData: g,
      rects: u,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = m ?? c, f = b ?? f, g = {
      ...g,
      [x]: {
        ...g[x],
        ...p
      }
    }, C && v <= 50 && (v++, typeof C == "object" && (C.placement && (d = C.placement), C.rects && (u = C.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : C.rects), {
      x: c,
      y: f
    } = Fl(u, d, l)), _ = -1);
  }
  return {
    x: c,
    y: f,
    placement: d,
    strategy: o,
    middlewareData: g
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
    padding: g = 0
  } = Io(t, e), v = xd(g), x = a[d ? f === "floating" ? "reference" : "floating" : f], k = Pi(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(x))) == null || n ? x : x.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), m = f === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, b = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), p = await (i.isElement == null ? void 0 : i.isElement(b)) ? await (i.getScale == null ? void 0 : i.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Pi(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: m,
    offsetParent: b,
    strategy: l
  }) : m);
  return {
    top: (k.top - C.top + v.top) / p.y,
    bottom: (C.bottom - k.bottom + v.bottom) / p.y,
    left: (k.left - C.left + v.left) / p.x,
    right: (C.right - k.right + v.right) / p.x
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
    const f = xd(c), d = {
      x: n,
      y: r
    }, g = $a(o), v = Ea(g), _ = await s.getDimensions(u), x = g === "y", k = x ? "top" : "left", m = x ? "bottom" : "right", b = x ? "clientHeight" : "clientWidth", p = i.reference[v] + i.reference[g] - d[g] - i.floating[v], C = d[g] - i.reference[g], S = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let $ = S ? S[b] : 0;
    (!$ || !await (s.isElement == null ? void 0 : s.isElement(S))) && ($ = a.floating[b] || i.floating[v]);
    const M = p / 2 - C / 2, D = $ / 2 - _[v] / 2 - 1, A = Eo(f[k], D), V = Eo(f[m], D), z = A, O = $ - _[v] - V, P = $ / 2 - _[v] / 2 + M, H = Bs(z, P, O), E = !l.arrow && zo(o) != null && P !== H && i.reference[v] / 2 - (P < z ? A : V) - _[v] / 2 < 0, N = E ? P < z ? P - z : P - O : 0;
    return {
      [g]: d[g] + N,
      data: {
        [g]: H,
        centerOffset: P - H - N,
        ...E && {
          alignmentOffset: N
        }
      },
      reset: E
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
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: _ = !0,
        ...x
      } = Io(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const k = dr(o), m = Br(a), b = dr(a) === a, p = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), C = d || (b || !_ ? [Si(a)] : Q2(a)), S = v !== "none";
      !d && S && C.push(...tm(a, _, v, p));
      const $ = [a, ...C], M = await bd(t, x), D = [];
      let A = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && D.push(M[k]), f) {
        const P = J2(o, s, p);
        D.push(M[P[0]], M[P[1]]);
      }
      if (A = [...A, {
        placement: o,
        overflows: D
      }], !D.every((P) => P <= 0)) {
        var V, z;
        const P = (((V = i.flip) == null ? void 0 : V.index) || 0) + 1, H = $[P];
        if (H)
          return {
            data: {
              index: P,
              overflows: A
            },
            reset: {
              placement: H
            }
          };
        let E = (z = A.filter((N) => N.overflows[0] <= 0).sort((N, T) => N.overflows[1] - T.overflows[1])[0]) == null ? void 0 : z.placement;
        if (!E)
          switch (g) {
            case "bestFit": {
              var O;
              const N = (O = A.filter((T) => {
                if (S) {
                  const I = Br(T.placement);
                  return I === m || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  I === "y";
                }
                return !0;
              }).map((T) => [T.placement, T.overflows.filter((I) => I > 0).reduce((I, B) => I + B, 0)]).sort((T, I) => T[1] - I[1])[0]) == null ? void 0 : O[0];
              N && (E = N);
              break;
            }
            case "initialPlacement":
              E = a;
              break;
          }
        if (o !== E)
          return {
            reset: {
              placement: E
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
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = dr(n), a = zo(n), l = Br(n) === "y", u = ["left", "top"].includes(s) ? -1 : 1, c = i && l ? -1 : 1, f = Io(t, e);
  let {
    mainAxis: d,
    crossAxis: g,
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
  return a && typeof v == "number" && (g = a === "end" ? v * -1 : v), l ? {
    x: g * c,
    y: d * u
  } : {
    x: d * u,
    y: g * c
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
          fn: (x) => {
            let {
              x: k,
              y: m
            } = x;
            return {
              x: k,
              y: m
            };
          }
        },
        ...l
      } = Io(e, t), u = {
        x: n,
        y: r
      }, c = await bd(t, l), f = Br(dr(o)), d = _d(f);
      let g = u[d], v = u[f];
      if (i) {
        const x = d === "y" ? "top" : "left", k = d === "y" ? "bottom" : "right", m = g + c[x], b = g - c[k];
        g = Bs(m, g, b);
      }
      if (s) {
        const x = f === "y" ? "top" : "left", k = f === "y" ? "bottom" : "right", m = v + c[x], b = v - c[k];
        v = Bs(m, v, b);
      }
      const _ = a.fn({
        ...t,
        [d]: g,
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
  return Cd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Zt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function zn(e) {
  var t;
  return (t = (Cd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Cd(e) {
  return Ui() ? e instanceof Node || e instanceof Zt(e).Node : !1;
}
function ln(e) {
  return Ui() ? e instanceof Element || e instanceof Zt(e).Element : !1;
}
function bn(e) {
  return Ui() ? e instanceof HTMLElement || e instanceof Zt(e).HTMLElement : !1;
}
function Xl(e) {
  return !Ui() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Zt(e).ShadowRoot;
}
function Ro(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = un(e);
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
  const t = Pa(), n = ln(e) ? un(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function cm(e) {
  let t = Qn(e);
  for (; bn(t) && !Yr(t); ) {
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
function un(e) {
  return Zt(e).getComputedStyle(e);
}
function Ji(e) {
  return ln(e) ? {
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
function kd(e) {
  const t = Qn(e);
  return Yr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : bn(t) && Ro(t) ? t : kd(t);
}
function Ed(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = kd(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Zt(o);
  return i ? (Zs(s), t.concat(s, s.visualViewport || [], Ro(o) ? o : [], [])) : t.concat(o, Ed(o, []));
}
function Zs(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function $d(e) {
  const t = un(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = bn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = $i(n) !== i || $i(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function Sd(e) {
  return ln(e) ? e : e.contextElement;
}
function Nr(e) {
  const t = Sd(e);
  if (!bn(t))
    return vn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = $d(t);
  let s = (i ? $i(n.width) : n.width) / r, a = (i ? $i(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const dm = /* @__PURE__ */ vn(0);
function Pd(e) {
  const t = Zt(e);
  return !Pa() || !t.visualViewport ? dm : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function fm(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Zt(e) ? !1 : t;
}
function $o(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Sd(e);
  let s = vn(1);
  t && (r ? ln(r) && (s = Nr(r)) : s = Nr(e));
  const a = fm(i, n, r) ? Pd(i) : vn(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, c = o.width / s.x, f = o.height / s.y;
  if (i) {
    const d = Zt(i), g = r && ln(r) ? Zt(r) : r;
    let v = d, _ = Zs(v);
    for (; _ && r && g !== v; ) {
      const x = Nr(_), k = _.getBoundingClientRect(), m = un(_), b = k.left + (_.clientLeft + parseFloat(m.paddingLeft)) * x.x, p = k.top + (_.clientTop + parseFloat(m.paddingTop)) * x.y;
      l *= x.x, u *= x.y, c *= x.x, f *= x.y, l += b, u += p, v = Zt(_), _ = Zs(v);
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
function Nd(e, t, n) {
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
  }, u = vn(1);
  const c = vn(0), f = bn(r);
  if ((f || !f && !i) && ((qr(r) !== "body" || Ro(s)) && (l = Ji(r)), bn(r))) {
    const g = $o(r);
    u = Nr(r), c.x = g.x + r.clientLeft, c.y = g.y + r.clientTop;
  }
  const d = s && !f && !i ? Nd(s, l, !0) : vn(0);
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
  return un(r).direction === "rtl" && (s += Pr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function pm(e, t) {
  const n = Zt(e), r = zn(e), o = n.visualViewport;
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
  const n = $o(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = bn(e) ? Nr(e) : vn(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
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
  else if (ln(t))
    r = mm(t, n);
  else {
    const o = Pd(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Pi(r);
}
function Td(e, t) {
  const n = Qn(e);
  return n === t || !ln(n) || Yr(n) ? !1 : un(n).position === "fixed" || Td(n, t);
}
function ym(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Ed(e, []).filter((a) => ln(a) && qr(a) !== "body"), o = null;
  const i = un(e).position === "fixed";
  let s = i ? Qn(e) : e;
  for (; ln(s) && !Yr(s); ) {
    const a = un(s), l = Sa(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Ro(s) && !l && Td(e, s)) ? r = r.filter((c) => c !== s) : o = a, s = Qn(s);
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
  } = $d(e);
  return {
    width: t,
    height: n
  };
}
function xm(e, t, n) {
  const r = bn(t), o = zn(t), i = n === "fixed", s = $o(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = vn(0);
  if (r || !r && !i)
    if ((qr(t) !== "body" || Ro(o)) && (a = Ji(t)), r) {
      const d = $o(t, !0, i, t);
      l.x = d.x + t.clientLeft, l.y = d.y + t.clientTop;
    } else o && (l.x = Na(o));
  const u = o && !r && !i ? Nd(o, a) : vn(0), c = s.left + a.scrollLeft - l.x - u.x, f = s.top + a.scrollTop - l.y - u.y;
  return {
    x: c,
    y: f,
    width: s.width,
    height: s.height
  };
}
function ys(e) {
  return un(e).position === "static";
}
function Kl(e, t) {
  if (!bn(e) || un(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return zn(e) === n && (n = n.ownerDocument.body), n;
}
function Md(e, t) {
  const n = Zt(e);
  if (ji(e))
    return n;
  if (!bn(e)) {
    let o = Qn(e);
    for (; o && !Yr(o); ) {
      if (ln(o) && !ys(o))
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
  const t = this.getOffsetParent || Md, n = this.getDimensions, r = await n(e.floating);
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
  return un(e).direction === "rtl";
}
const km = {
  convertOffsetParentRelativeRectToViewportRelativeRect: gm,
  getDocumentElement: zn,
  getClippingRect: wm,
  getOffsetParent: Md,
  getElementRects: bm,
  getClientRects: hm,
  getDimensions: _m,
  getScale: Nr,
  isElement: ln,
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
    }).then(({ x: k, y: m, placement: b, middlewareData: p }) => {
      if (Object.assign(u.style, {
        left: `${k}px`,
        top: `${m}px`
      }), l) {
        const { x: C, y: S } = p.arrow, $ = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[b.split("-")[0]];
        Object.assign(c.style, {
          zIndex: -1,
          left: C != null ? `${C}px` : "",
          top: S != null ? `${S}px` : "",
          right: "",
          bottom: "",
          [$]: "2px"
        });
      }
    });
  }
  let d = !1;
  function g() {
    u.style.display = "block", u.style.visibility = "block", u.style.position = "absolute", l && (c.style.display = "block"), d = !0, f();
  }
  function v() {
    u.style.display = "none", l && (c.style.display = "none"), d = !1;
  }
  function _(k) {
    k.stopPropagation(), d ? v() : g();
  }
  function x(k) {
    u.contains(k.target) || v();
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
      v();
    },
    isVisible() {
      return d;
    }
  };
};
var Mm = /* @__PURE__ */ oe('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function Bo(e, t) {
  ce(t, !0);
  const n = w(t, "children", 7), r = w(t, "floating", 7), o = w(t, "placement", 7, "bottom");
  let i, s, a;
  Xt(() => (a = Tm({
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
  ar(f, n), Z(c), _n(c, (v) => i = v, () => i);
  var d = R(c, 2), g = F(d);
  return ar(g, r), Z(d), _n(d, (v) => s = v, () => s), Z(u), L(e, u), de({
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
le(Bo, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Qe(e, t) {
  ce(t, !0);
  const n = w(t, "children", 7), r = w(t, "level", 7, 1), o = w(t, "mt", 7), i = w(t, "mb", 7);
  var s = tt(), a = we(s);
  return P1(a, () => `h${r()}`, !1, (l, u) => {
    let c;
    Ee(() => c = an(l, c, {
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var f = tt(), d = we(f);
    ar(d, () => n() ?? dt), L(u, f);
  }), L(e, s), de({
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
le(Qe, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var Hm = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const Vm = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function Qi(e, t) {
  ce(t, !0), et(e, Vm);
  const n = /* @__PURE__ */ mt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  je(e, ct(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = Hm();
      L(r, i);
    },
    $$slots: { default: !0 }
  })), de();
}
le(Qi, {}, [], [], !0);
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
};
var Om = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), Lm = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), Im = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), zm = /* @__PURE__ */ oe('<div class="tf-node-toolbar svelte-44dmwv"><!> <!> <!></div>'), Rm = /* @__PURE__ */ oe('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const Bm = {
  hash: "svelte-44dmwv",
  code: ".tf-node-toolbar.svelte-44dmwv {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}"
};
function dn(e, t) {
  ce(t, !0), et(e, Bm);
  const n = w(t, "data", 7), r = w(t, "id", 7, ""), o = w(t, "icon", 7), i = w(t, "handle", 7), s = w(t, "children", 7), a = w(t, "allowExecute", 7, !0), l = w(t, "allowCopy", 7, !0), u = w(t, "allowDelete", 7, !0), c = w(t, "showSourceHandle", 7, !0), f = w(t, "showTargetHandle", 7, !0), d = w(t, "onCollapse", 7);
  let g = n().expand ? ["key"] : [];
  const { updateNodeData: v } = Ot(), _ = [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ], { deleteNode: x } = Am(), { copyNode: k } = Dm();
  var m = Rm(), b = we(m);
  {
    var p = (O) => {
      pd(O, {
        get position() {
          return Ce.Top;
        },
        align: "end",
        children: (P, H) => {
          var E = zm(), N = F(E);
          {
            var T = (re) => {
              je(re, {
                class: "tf-node-toolbar-item",
                children: (J, W) => {
                  var se = Om();
                  L(J, se);
                },
                $$slots: { default: !0 }
              });
            };
            be(N, (re) => {
              a() && re(T);
            });
          }
          var I = R(N, 2);
          {
            var B = (re) => {
              je(re, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  k(r());
                },
                children: (J, W) => {
                  var se = Lm();
                  L(J, se);
                },
                $$slots: { default: !0 }
              });
            };
            be(I, (re) => {
              l() && re(B);
            });
          }
          var X = R(I, 2);
          {
            var q = (re) => {
              je(re, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  x(r());
                },
                children: (J, W) => {
                  var se = Im();
                  L(J, se);
                },
                $$slots: { default: !0 }
              });
            };
            be(X, (re) => {
              u() && re(q);
            });
          }
          Z(E), L(P, E);
        },
        $$slots: { default: !0 }
      });
    };
    be(b, (O) => {
      (a() || l() || u()) && O(p);
    });
  }
  var C = R(b, 2), S = R(F(C), 2), $ = F(S);
  wd($, {
    items: _,
    activeKeys: g,
    onChange: (O, P) => {
      var H;
      v(r(), { expand: P == null ? void 0 : P.includes("key") }), (H = d()) == null || H(P != null && P.includes("key") ? "key" : "");
    }
  }), Z(S), Z(C);
  var M = R(C, 2);
  {
    var D = (O) => {
      Jn(O, {
        type: "target",
        get position() {
          return Ce.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    be(M, (O) => {
      f() && O(D);
    });
  }
  var A = R(M, 2);
  {
    var V = (O) => {
      Jn(O, {
        type: "source",
        get position() {
          return Ce.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    be(A, (O) => {
      c() && O(V);
    });
  }
  var z = R(A, 2);
  return ar(z, () => i() ?? dt), L(e, m), de({
    get data() {
      return n();
    },
    set data(O) {
      n(O), y();
    },
    get id() {
      return r();
    },
    set id(O = "") {
      r(O), y();
    },
    get icon() {
      return o();
    },
    set icon(O) {
      o(O), y();
    },
    get handle() {
      return i();
    },
    set handle(O) {
      i(O), y();
    },
    get children() {
      return s();
    },
    set children(O) {
      s(O), y();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(O = !0) {
      a(O), y();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(O = !0) {
      l(O), y();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(O = !0) {
      u(O), y();
    },
    get showSourceHandle() {
      return c();
    },
    set showSourceHandle(O = !0) {
      c(O), y();
    },
    get showTargetHandle() {
      return f();
    },
    set showTargetHandle(O = !0) {
      f(O), y();
    },
    get onCollapse() {
      return d();
    },
    set onCollapse(O) {
      d(O), y();
    }
  });
}
le(
  dn,
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
  return sr("svelteflow__node_id");
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
], Ym = [
  {
    value: "ref",
    label: "引用"
  },
  {
    value: "input",
    label: "固定值"
  }
];
var Zm = /* @__PURE__ */ oe('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), Fm = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), Xm = /* @__PURE__ */ oe('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const Wm = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Vd(e, t) {
  ce(t, !0), et(e, Wm);
  const [n, r] = it(), o = () => ee(h(l), "$node", n), i = w(t, "parameter", 7), s = w(t, "index", 7);
  let a = ht(), l = Te(() => pr(a)), u = Te(() => {
    var M, D;
    return {
      ...i(),
      ...(D = (M = o()) == null ? void 0 : M.data) == null ? void 0 : D.parameters[s()]
    };
  });
  const { updateNodeData: c } = Ot(), f = (M) => {
    const D = M.target.value;
    c(a, (A) => {
      let V = A.data.parameters;
      return V[s()].name = D, { parameters: V };
    });
  }, d = (M) => {
    const D = M.target.checked;
    c(a, (A) => {
      let V = A.data.parameters;
      return V[s()].required = D, { parameters: V };
    });
  }, g = (M) => {
    const D = M.value;
    D && c(a, (A) => {
      let V = A.data.parameters;
      return V[s()].dataType = D, { parameters: V };
    });
  };
  let v;
  const _ = () => {
    c(a, (M) => {
      let D = M.data.parameters;
      return D.splice(s(), 1), { parameters: [...D] };
    }), v == null || v.hide();
  };
  var x = Xm(), k = we(x), m = F(k);
  bt(m, {
    style: "width: 100%;",
    get value() {
      return h(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: f
  }), Z(k);
  var b = R(k, 2), p = F(b);
  md(p, {
    get checked() {
      return h(u).required;
    },
    onchange: d
  }), Z(b);
  var C = R(b, 2), S = F(C);
  _n(
    Bo(S, {
      placement: "bottom",
      floating: (D) => {
        var A = Zm(), V = F(A), z = R(F(V));
        const O = Te(() => h(u).dataType ? [h(u).dataType] : ["String"]);
        xn(z, {
          items: Hd,
          style: "width: 100%",
          onSelect: g,
          get value() {
            return h(O);
          }
        }), Z(V);
        var P = R(V, 2), H = R(F(P));
        St(H, { rows: 1, style: "width: 100%;" }), Z(P);
        var E = R(P, 2), N = R(F(E));
        St(N, { rows: 3, style: "width: 100%;" }), Z(E);
        var T = R(E, 2), I = F(T);
        je(I, {
          onclick: _,
          children: (B, X) => {
            Ne();
            var q = Re("删除");
            L(B, q);
          },
          $$slots: { default: !0 }
        }), Z(T), Z(A), L(D, A);
      },
      children: (D, A) => {
        je(D, {
          class: "input-btn-more",
          children: (V, z) => {
            var O = Fm();
            L(V, O);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (D) => v = D,
    () => v
  ), Z(C), L(e, x);
  var $ = de({
    get parameter() {
      return i();
    },
    set parameter(M) {
      i(M), y();
    },
    get index() {
      return s();
    },
    set index(M) {
      s(M), y();
    }
  });
  return r(), $;
}
le(Vd, { parameter: {}, index: {} }, [], [], !0);
var Km = /* @__PURE__ */ oe('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), qm = /* @__PURE__ */ oe('<div class="none-params svelte-3n0wca">无输入参数</div>'), Gm = /* @__PURE__ */ oe('<div class="input-container svelte-3n0wca"><!> <!></div>');
const Um = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function Ad(e, t) {
  ce(t, !0), et(e, Um);
  const [n, r] = it(), o = () => ee(h(s), "$node", n);
  let i = ht(), s = Te(() => pr(i)), a = Te(() => {
    var d, g;
    return [...((g = (d = o()) == null ? void 0 : d.data) == null ? void 0 : g.parameters) || []];
  });
  var l = Gm(), u = F(l);
  {
    var c = (d) => {
      var g = Km();
      Ne(4), L(d, g);
    };
    be(u, (d) => {
      h(a).length !== 0 && d(c);
    });
  }
  var f = R(u, 2);
  Dt(
    f,
    19,
    () => h(a),
    (d) => d.id,
    (d, g, v) => {
      Vd(d, {
        get parameter() {
          return h(g);
        },
        get index() {
          return h(v);
        }
      });
    },
    (d) => {
      var g = qm();
      L(d, g);
    }
  ), Z(l), L(e, l), de(), r();
}
le(Ad, {}, [], [], !0);
const Dd = (e) => {
  !e || e.length == 0 || e.forEach((t) => {
    t.id || (t.id = Zr()), Dd(t.children);
  });
}, $n = () => {
  const { updateNodeData: e } = Ot();
  return {
    addParameter: (t, n = "parameters", r) => {
      Dd(r == null ? void 0 : r.children);
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
var jm = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), Jm = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Qm = /* @__PURE__ */ oe('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const ey = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function Od(e, t) {
  ce(t, !0), et(e, ey);
  const n = w(t, "data", 7), r = /* @__PURE__ */ mt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = $n();
  return dn(e, ct(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    icon: (a) => {
      var l = jm();
      L(a, l);
    },
    children: (a, l) => {
      var u = Qm(), c = we(u), f = F(c);
      Qe(f, {
        level: 3,
        children: (v, _) => {
          Ne();
          var x = Re("输入参数");
          L(v, x);
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
          var x = Jm();
          L(v, x);
        },
        $$slots: { default: !0 }
      }), Z(c);
      var g = R(c, 2);
      Ad(g, {}), L(a, u);
    },
    $$slots: { icon: !0, default: !0 }
  })), de({
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
}, ty = (e = !1) => {
  const t = ht(), n = pr(t), { nodes: r, edges: o } = Je();
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
var ny = /* @__PURE__ */ oe('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), ry = /* @__PURE__ */ oe('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const oy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Id(e, t) {
  ce(t, !0), et(e, oy);
  const [n, r] = it(), o = () => ee(h(c), "$node", n), i = () => ee(p, "$selectItems", n);
  Xt(() => {
    h(f).refType || k({ value: "ref" });
  });
  const s = w(t, "parameter", 7), a = w(t, "index", 7), l = w(t, "dataKeyName", 7);
  let u = ht(), c = Te(() => pr(u)), f = Te(() => {
    var H;
    return {
      ...s(),
      ...(H = o()) == null ? void 0 : H.data[l()][a()]
    };
  });
  const { updateNodeData: d } = Ot(), g = (H, E) => {
    d(u, (N) => {
      let T = N.data[l()];
      return T[a()] = { ...T[a()], [H]: E }, { [l()]: T };
    });
  }, v = (H) => {
    const E = H.target.value;
    g("name", E);
  }, _ = (H) => {
    const E = H.target.value;
    g("value", E);
  }, x = (H) => {
    const E = H.value;
    g("ref", E);
  }, k = (H) => {
    const E = H.value;
    g("refType", E);
  };
  let m;
  const b = () => {
    d(u, (H) => {
      let E = H.data[l()];
      return E.splice(a(), 1), { [l()]: [...E] };
    }), m == null || m.hide();
  }, p = ty();
  var C = ry(), S = we(C), $ = F(S);
  bt($, {
    style: "width: 100%;",
    get value() {
      return h(f).name;
    },
    placeholder: "请输入参数名称",
    oninput: v
  }), Z(S);
  var M = R(S, 2), D = F(M);
  {
    var A = (H) => {
      bt(H, {
        get value() {
          return h(f).value;
        },
        placeholder: "请输入参数值",
        oninput: _
      });
    }, V = (H) => {
      const E = Te(() => [h(f).ref]);
      xn(H, {
        get items() {
          return i();
        },
        style: "width: 100%",
        defaultValue: ["ref"],
        get value() {
          return h(E);
        },
        expandAll: !0,
        onSelect: x
      });
    };
    be(D, (H) => {
      h(f).refType === "input" ? H(A) : H(V, !1);
    });
  }
  Z(M);
  var z = R(M, 2), O = F(z);
  _n(
    Bo(O, {
      placement: "bottom",
      floating: (E) => {
        var N = ny(), T = F(N), I = R(F(T));
        const B = Te(() => h(f).refType ? [h(f).refType] : []);
        xn(I, {
          items: Ym,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return h(B);
          },
          onSelect: k
        }), Z(T);
        var X = R(T, 2), q = R(F(X));
        St(q, {
          rows: 1,
          style: "width: 100%;",
          onchange: (me) => {
            const xe = me.target.value;
            g("defaultValue", xe);
          }
        }), Z(X);
        var re = R(X, 2), J = R(F(re));
        St(J, {
          rows: 3,
          style: "width: 100%;",
          onchange: (me) => {
            const xe = me.target.value;
            g("description", xe);
          }
        }), Z(re);
        var W = R(re, 2), se = F(W);
        je(se, {
          onclick: b,
          children: (me, xe) => {
            Ne();
            var fe = Re("删除");
            L(me, fe);
          },
          $$slots: { default: !0 }
        }), Z(W), Z(N), L(E, N);
      },
      children: (E, N) => {
        Qi(E, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (E) => m = E,
    () => m
  ), Z(z), L(e, C);
  var P = de({
    get parameter() {
      return s();
    },
    set parameter(H) {
      s(H), y();
    },
    get index() {
      return a();
    },
    set index(H) {
      a(H), y();
    },
    get dataKeyName() {
      return l();
    },
    set dataKeyName(H) {
      l(H), y();
    }
  });
  return r(), P;
}
le(Id, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var iy = /* @__PURE__ */ oe('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), sy = /* @__PURE__ */ oe('<div class="none-params svelte-1sm1mgi"> </div>'), ay = /* @__PURE__ */ oe('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const ly = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Bt(e, t) {
  ce(t, !0), et(e, ly);
  const [n, r] = it(), o = () => ee(h(l), "$node", n), i = w(t, "noneParameterText", 7, "无输入参数"), s = w(t, "dataKeyName", 7, "parameters");
  let a = ht(), l = Te(() => pr(a)), u = Te(() => {
    var _;
    return [...((_ = o()) == null ? void 0 : _.data[s()]) || []];
  });
  var c = ay(), f = F(c);
  {
    var d = (_) => {
      var x = iy();
      Ne(4), L(_, x);
    };
    be(f, (_) => {
      h(u).length !== 0 && _(d);
    });
  }
  var g = R(f, 2);
  Dt(
    g,
    19,
    () => h(u),
    (_) => _.id,
    (_, x, k) => {
      Id(_, {
        get parameter() {
          return h(x);
        },
        get index() {
          return h(k);
        },
        get dataKeyName() {
          return s();
        }
      });
    },
    (_) => {
      var x = sy(), k = F(x, !0);
      Z(x), Ee(() => Yt(k, i())), L(_, x);
    }
  ), Z(c), L(e, c);
  var v = de({
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
var uy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), cy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), dy = /* @__PURE__ */ oe('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const fy = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function zd(e, t) {
  ce(t, !0), et(e, fy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ mt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = $n();
  return dn(e, ct(
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
        L(a, l);
      },
      children: (a, l) => {
        var u = dy(), c = we(u), f = F(c);
        Qe(f, {
          level: 3,
          children: (v, _) => {
            Ne();
            var x = Re("输出参数");
            L(v, x);
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
            var x = cy();
            L(v, x);
          },
          $$slots: { default: !0 }
        }), Z(c);
        var g = R(c, 2);
        Bt(g, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs"
        }), L(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de({
    get data() {
      return n();
    },
    set data(s) {
      n(s), y();
    }
  });
}
le(zd, { data: {} }, [], [], !0);
const mr = () => sr("tinyflow_options");
var gy = /* @__PURE__ */ _e('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), hy = /* @__PURE__ */ oe('<div class="input-more-item svelte-1cfeest"><!></div>'), vy = /* @__PURE__ */ oe('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), py = /* @__PURE__ */ oe('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const my = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Rd(e, t) {
  ce(t, !0), et(e, my);
  const [n, r] = it(), o = () => ee(h(u), "$node", n), i = w(t, "parameter", 7), s = w(t, "position", 7), a = w(t, "dataKeyName", 7);
  let l = ht(), u = Te(() => pr(l)), c = Te(() => {
    var I;
    let N = (I = o()) == null ? void 0 : I.data[a()], T;
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
    f(l, (I) => {
      const B = I.data[a()];
      if (B && s().length > 0) {
        let X = B;
        for (let q = 0; q < s().length; q++) {
          const re = s()[q];
          q == s().length - 1 ? X[re] = { ...X[re], [N]: T } : X = B[re].children;
        }
      }
      return { [a()]: B };
    });
  }, g = (N) => {
    const T = N.target.value;
    d("name", T);
  }, v = (N) => {
    const T = N.value;
    d("dataType", T);
  };
  let _;
  const x = () => {
    f(l, (N) => {
      let T = N.data[a()];
      if (T && s().length > 0) {
        let I = T;
        for (let B = 0; B < s().length; B++) {
          const X = s()[B];
          B == s().length - 1 ? I.splice(X, 1) : I = I[X].children;
        }
      }
      return { [a()]: [...T] };
    }), _ == null || _.hide();
  }, k = () => {
    f(l, (N) => {
      let T = N.data[a()];
      if (T && s().length > 0) {
        let I = T;
        for (let B = 0; B < s().length; B++) {
          const X = s()[B];
          B == s().length - 1 ? I[X].children ? I[X].children.push({
            id: Zr(),
            name: "newParam",
            dataType: "String"
          }) : I[X].children = [
            {
              id: Zr(),
              name: "newParam",
              dataType: "String"
            }
          ] : I = I[X].children;
        }
      }
      return { [a()]: [...T] };
    });
  };
  var m = py(), b = we(m), p = F(b);
  {
    var C = (N) => {
      var T = tt(), I = we(T);
      Dt(I, 17, s, po, (B, X) => {
        Ne();
        var q = Re(" ");
        L(B, q);
      }), L(N, T);
    };
    be(p, (N) => {
      s().length > 1 && N(C);
    });
  }
  var S = R(p, 2);
  const $ = Te(() => h(c).nameDisabled === !0);
  bt(S, {
    style: "width: 100%;",
    get value() {
      return h(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: g,
    get disabled() {
      return h($);
    }
  }), Z(b);
  var M = R(b, 2), D = F(M);
  const A = Te(() => h(c).dataType ? [h(c).dataType] : []), V = Te(() => h(c).dataTypeDisabled === !0);
  xn(D, {
    items: Hd,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return h(A);
    },
    get disabled() {
      return h(V);
    },
    onSelect: v
  });
  var z = R(D, 2);
  {
    var O = (N) => {
      je(N, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: k,
        children: (T, I) => {
          var B = gy();
          L(T, B);
        },
        $$slots: { default: !0 }
      });
    };
    be(z, (N) => {
      (h(c).dataType === "Object" || h(c).dataType === "Array") && h(c).addChildDisabled !== !0 && N(O);
    });
  }
  Z(M);
  var P = R(M, 2), H = F(P);
  _n(
    Bo(H, {
      placement: "bottom",
      floating: (T) => {
        var I = vy(), B = F(I), X = R(F(B));
        St(X, {
          rows: 1,
          style: "width: 100%;",
          onchange: (se) => {
            const me = se.target.value;
            d("defaultValue", me);
          }
        }), Z(B);
        var q = R(B, 2), re = R(F(q));
        St(re, {
          rows: 3,
          style: "width: 100%;",
          onchange: (se) => {
            const me = se.target.value;
            d("description", me);
          }
        }), Z(q);
        var J = R(q, 2);
        {
          var W = (se) => {
            var me = hy(), xe = F(me);
            je(xe, {
              onclick: x,
              children: (fe, Ie) => {
                Ne();
                var G = Re("删除");
                L(fe, G);
              },
              $$slots: { default: !0 }
            }), Z(me), L(se, me);
          };
          be(J, (se) => {
            h(c).deleteDisabled !== !0 && se(W);
          });
        }
        Z(I), L(T, I);
      },
      children: (T, I) => {
        Qi(T, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => _ = T,
    () => _
  ), Z(P), L(e, m);
  var E = de({
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
  return r(), E;
}
le(Rd, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var yy = /* @__PURE__ */ oe("<!> <!>", 1), wy = /* @__PURE__ */ oe('<div class="none-params svelte-1sm1mgi"> </div>'), _y = /* @__PURE__ */ oe('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), xy = /* @__PURE__ */ oe('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const by = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Rn(e, t) {
  ce(t, !0), et(e, by);
  const [n, r] = it(), o = () => ee(h(u), "$node", n), i = (x, k = dt, m = dt) => {
    var b = tt(), p = we(b);
    Dt(
      p,
      19,
      k,
      (C) => `${C.id}_${C.children ? C.children.length : 0}`,
      (C, S, $) => {
        var M = yy(), D = we(M);
        const A = Te(() => [...m(), h($)]);
        Rd(D, {
          get parameter() {
            return h(S);
          },
          get position() {
            return h(A);
          },
          get dataKeyName() {
            return a();
          }
        });
        var V = R(D, 2);
        {
          var z = (O) => {
            var P = /* @__PURE__ */ ve(() => [...m(), h($)]);
            i(O, () => h(S).children, () => h(P));
          };
          be(V, (O) => {
            h(S).children && O(z);
          });
        }
        L(C, M);
      },
      (C) => {
        var S = tt(), $ = we(S);
        {
          var M = (D) => {
            var A = wy(), V = F(A, !0);
            Z(A), Ee(() => Yt(V, s())), L(D, A);
          };
          be($, (D) => {
            m().length === 0 && D(M);
          });
        }
        L(C, S);
      }
    ), L(x, b);
  }, s = w(t, "noneParameterText", 7, "无输出参数"), a = w(t, "dataKeyName", 7, "outputDefs");
  let l = ht(), u = Te(() => pr(l)), c = Te(() => {
    var x;
    return [...((x = o()) == null ? void 0 : x.data[a()]) || []];
  });
  var f = xy(), d = F(f);
  {
    var g = (x) => {
      var k = _y();
      Ne(4), L(x, k);
    };
    be(d, (x) => {
      h(c).length !== 0 && x(g);
    });
  }
  var v = R(d, 2);
  i(v, () => h(c) || [], () => []), Z(f), L(e, f);
  var _ = de({
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
le(Rn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Cy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), ky = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ey = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), $y = /* @__PURE__ */ oe('<div class="heading svelte-wn2kra"><!> <!></div> <!> <!> <div class="setting-title svelte-wn2kra">模型</div> <div class="setting-item svelte-wn2kra"><!> <!></div> <div class="setting-title svelte-wn2kra">采样参数</div> <div class="setting-item svelte-wn2kra"><div class="slider-container svelte-wn2kra"><label class="svelte-wn2kra"> </label> <input type="range" min="0" max="1" step="0.1" class="svelte-wn2kra"></div></div> <div class="setting-item svelte-wn2kra"><div class="slider-container svelte-wn2kra"><label class="svelte-wn2kra"> </label> <input type="range" min="0" max="1" step="0.1" class="svelte-wn2kra"></div></div> <div class="setting-item svelte-wn2kra"><div class="slider-container svelte-wn2kra"><label class="svelte-wn2kra"> </label> <input type="range" min="0" max="100" step="1" class="svelte-wn2kra"></div></div> <div class="setting-title svelte-wn2kra">系统提示词</div> <div class="setting-item svelte-wn2kra"><!></div> <div class="setting-title svelte-wn2kra">用户提示词</div> <div class="setting-item svelte-wn2kra"><!></div> <div class="heading svelte-wn2kra"><!> <!></div> <!>', 1);
const Sy = {
  hash: "svelte-wn2kra",
  code: `.heading.svelte-wn2kra {display:flex;margin-bottom:10px;}.setting-title.svelte-wn2kra {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-wn2kra {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}
    /* 新增样式 */.slider-container.svelte-wn2kra {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-wn2kra label:where(.svelte-wn2kra) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-wn2kra {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-wn2kra::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Bd(e, t) {
  ce(t, !0), et(e, Sy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ mt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = $n(), s = mr();
  let a = _t(Ut([]));
  Xt(async () => {
    var c, f;
    const u = await ((f = (c = s.provider) == null ? void 0 : c.llm) == null ? void 0 : f.call(c));
    h(a).push(...u || []);
  });
  const { updateNodeData: l } = Ot();
  return dn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var f = Cy();
        L(c, f);
      },
      children: (c, f) => {
        var d = $y(), g = we(d), v = F(g);
        Qe(v, {
          level: 3,
          children: (G, ae) => {
            Ne();
            var Me = Re("输入参数");
            L(G, Me);
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
          children: (G, ae) => {
            var Me = ky();
            L(G, Me);
          },
          $$slots: { default: !0 }
        }), Z(g);
        var x = R(g, 2);
        Bt(x, {});
        var k = R(x, 2);
        Qe(k, {
          level: 3,
          mt: "10px",
          children: (G, ae) => {
            Ne();
            var Me = Re("模型设置");
            L(G, Me);
          },
          $$slots: { default: !0 }
        });
        var m = R(k, 4), b = F(m);
        const p = Te(() => n().llmId ? [n().llmId] : []);
        xn(b, {
          get items() {
            return h(a);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (G) => {
            const ae = G.value;
            l(o, () => ({ llmId: ae }));
          },
          get value() {
            return h(p);
          }
        });
        var C = R(b, 2);
        Qi(C, {}), Z(m);
        var S = R(m, 4), $ = F(S), M = F($), D = F(M);
        Z(M);
        var A = R(M, 2);
        lo(A), Z($), Z(S);
        var V = R(S, 2), z = F(V), O = F(z), P = F(O);
        Z(O);
        var H = R(O, 2);
        lo(H), Z(z), Z(V);
        var E = R(V, 2), N = F(E), T = F(N), I = F(T);
        Z(T);
        var B = R(T, 2);
        lo(B), Z(N), Z(E);
        var X = R(E, 4), q = F(X);
        const re = Te(() => n().systemPrompt || "");
        St(q, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return h(re);
          },
          oninput: (G) => {
            l(o, { systemPrompt: G.target.value });
          }
        }), Z(X);
        var J = R(X, 4), W = F(J);
        const se = Te(() => n().userPrompt || "");
        St(W, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return h(se);
          },
          oninput: (G) => {
            l(o, { userPrompt: G.target.value });
          }
        }), Z(J);
        var me = R(J, 2), xe = F(me);
        Qe(xe, {
          level: 3,
          mt: "10px",
          children: (G, ae) => {
            Ne();
            var Me = Re("输出参数");
            L(G, Me);
          },
          $$slots: { default: !0 }
        });
        var fe = R(xe, 2);
        je(fe, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (G, ae) => {
            var Me = Ey();
            L(G, Me);
          },
          $$slots: { default: !0 }
        }), Z(me);
        var Ie = R(me, 2);
        Rn(Ie, {}), Ee(() => {
          Yt(D, `Temperature: ${n().temperature ?? 0.5}`), is(A, n().temperature ?? 0.5), Yt(P, `Top P: ${n().topP ?? 0.9}`), is(H, n().topP ?? 0.9), Yt(I, `Top K: ${n().topK ?? 50}`), is(B, n().topK ?? 50);
        }), Ze("mousedown", A, ss(function(G) {
          Ae.call(this, t, G);
        })), Ze("input", A, (G) => l(o, { temperature: parseFloat(G.target.value) })), Ze("mousedown", H, ss(function(G) {
          Ae.call(this, t, G);
        })), Ze("input", H, (G) => l(o, { topP: parseFloat(G.target.value) })), Ze("mousedown", B, ss(function(G) {
          Ae.call(this, t, G);
        })), Ze("input", B, (G) => l(o, { topK: parseInt(G.target.value) })), L(c, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de({
    get data() {
      return n();
    },
    set data(u) {
      n(u), y();
    }
  });
}
le(Bd, { data: {} }, [], [], !0);
var Py = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Ny = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ty = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), My = /* @__PURE__ */ oe('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const Hy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Yd(e, t) {
  ce(t, !0), et(e, Hy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ mt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  Xt(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = ht(), { addParameter: i } = $n(), { updateNodeData: s } = Ot(), a = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  return dn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = Py();
        L(u, c);
      },
      children: (u, c) => {
        var f = My(), d = we(f), g = F(d);
        Qe(g, {
          level: 3,
          children: (V, z) => {
            Ne();
            var O = Re("输入参数");
            L(V, O);
          },
          $$slots: { default: !0 }
        });
        var v = R(g, 2);
        je(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (V, z) => {
            var O = Ny();
            L(V, O);
          },
          $$slots: { default: !0 }
        }), Z(d);
        var _ = R(d, 2);
        Bt(_, {});
        var x = R(_, 2);
        Qe(x, {
          level: 3,
          mt: "10px",
          children: (V, z) => {
            Ne();
            var O = Re("代码");
            L(V, O);
          },
          $$slots: { default: !0 }
        });
        var k = R(x, 4), m = F(k);
        const b = Te(() => n().engine ? [n().engine] : ["qlexpress"]);
        xn(m, {
          items: a,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (V) => {
            const z = V.value;
            s(o, () => ({ engine: z }));
          },
          get value() {
            return h(b);
          }
        }), Z(k);
        var p = R(k, 4), C = F(p);
        const S = Te(() => n().code || "");
        St(C, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (V) => {
            s(o, () => ({ code: V.target.value }));
          },
          get value() {
            return h(S);
          }
        }), Z(p);
        var $ = R(p, 2), M = F($);
        Qe(M, {
          level: 3,
          mt: "10px",
          children: (V, z) => {
            Ne();
            var O = Re("输出参数");
            L(V, O);
          },
          $$slots: { default: !0 }
        });
        var D = R(M, 2);
        je(D, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (V, z) => {
            var O = Ty();
            L(V, O);
          },
          $$slots: { default: !0 }
        }), Z($);
        var A = R($, 2);
        Rn(A, {}), L(u, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de({
    get data() {
      return n();
    },
    set data(l) {
      n(l), y();
    }
  });
}
le(Yd, { data: {} }, [], [], !0);
var Vy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), Ay = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Dy = /* @__PURE__ */ oe('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Oy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Zd(e, t) {
  ce(t, !0), et(e, Oy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ mt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = $n(), { updateNodeData: s } = Ot();
  return jn(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), dn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Vy();
        L(l, u);
      },
      children: (l, u) => {
        var c = Dy(), f = we(c), d = F(f);
        Qe(d, {
          level: 3,
          children: (S, $) => {
            Ne();
            var M = Re("输入参数");
            L(S, M);
          },
          $$slots: { default: !0 }
        });
        var g = R(d, 2);
        je(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (S, $) => {
            var M = Ay();
            L(S, M);
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
            var M = Re("代码");
            L(S, M);
          },
          $$slots: { default: !0 }
        });
        var x = R(_, 4), k = F(x);
        const m = Te(() => n().template || "");
        St(k, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: (S) => {
            s(o, () => ({ template: S.target.value }));
          },
          get value() {
            return h(m);
          }
        }), Z(x);
        var b = R(x, 2), p = F(b);
        Qe(p, {
          level: 3,
          mt: "10px",
          children: (S, $) => {
            Ne();
            var M = Re("输出参数");
            L(S, M);
          },
          $$slots: { default: !0 }
        }), Z(b);
        var C = R(b, 2);
        Rn(C, {}), L(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de({
    get data() {
      return n();
    },
    set data(a) {
      n(a), y();
    }
  });
}
le(Zd, { data: {} }, [], [], !0);
var Ly = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), Iy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), zy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ry = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), By = /* @__PURE__ */ oe('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), Yy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Zy = /* @__PURE__ */ oe('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), Fy = /* @__PURE__ */ oe('<div style="width: 100%"><!></div>'), Xy = /* @__PURE__ */ oe('<div style="width: 100%"><!></div>'), Wy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ky = /* @__PURE__ */ oe('<div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1vtcqdz"><!> <!></div> <!> <div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="radio-group svelte-1vtcqdz"><label class="svelte-1vtcqdz"><!>none</label> <label class="svelte-1vtcqdz"><!>form-data</label> <label class="svelte-1vtcqdz"><!>x-www-form-urlencoded</label> <label class="svelte-1vtcqdz"><!>json</label> <label class="svelte-1vtcqdz"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1vtcqdz"><!> <!></div> <!>', 1);
const qy = {
  hash: "svelte-1vtcqdz",
  code: ".heading.svelte-1vtcqdz {display:flex;margin-bottom:10px;}.radio-group.svelte-1vtcqdz {display:flex;margin:10px 0;}.radio-group.svelte-1vtcqdz label:where(.svelte-1vtcqdz) {display:flex;font-size:14px;}"
};
function Fd(e, t) {
  ce(t, !0), et(e, qy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ mt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  Xt(() => {
    n().method || a(i, () => ({ method: "get" }));
  });
  const o = [
    { value: "get", label: "GET" },
    { value: "post", label: "POST" },
    { value: "put", label: "PUT" },
    { value: "delete", label: "DELETE" },
    { value: "head", label: "HEAD" },
    { value: "patch", label: "PATCH" }
  ], i = ht(), { addParameter: s } = $n(), { updateNodeData: a } = Ot();
  return dn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = Ly();
        L(u, c);
      },
      children: (u, c) => {
        var f = Ky(), d = we(f), g = F(d), v = F(g);
        const _ = Te(() => n().method ? [n().method] : ["get"]);
        xn(v, {
          items: o,
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (ie) => {
            const he = ie.value;
            a(i, () => ({ method: he }));
          },
          get value() {
            return h(_);
          }
        }), Z(g);
        var x = R(g, 2), k = F(x);
        const m = Te(() => n().url || "");
        bt(k, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (ie) => {
            a(i, () => ({ url: ie.target.value }));
          },
          get value() {
            return h(m);
          }
        }), Z(x), Z(d);
        var b = R(d, 2), p = F(b);
        Qe(p, {
          level: 3,
          children: (ie, he) => {
            Ne();
            var $e = Re("Http 头信息");
            L(ie, $e);
          },
          $$slots: { default: !0 }
        });
        var C = R(p, 2);
        je(C, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (ie, he) => {
            var $e = Iy();
            L(ie, $e);
          },
          $$slots: { default: !0 }
        }), Z(b);
        var S = R(b, 2);
        Bt(S, { dataKeyName: "headers" });
        var $ = R(S, 2), M = F($);
        Qe(M, {
          level: 3,
          children: (ie, he) => {
            Ne();
            var $e = Re("参数");
            L(ie, $e);
          },
          $$slots: { default: !0 }
        });
        var D = R(M, 2);
        je(D, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "urlParameters");
          },
          children: (ie, he) => {
            var $e = zy();
            L(ie, $e);
          },
          $$slots: { default: !0 }
        }), Z($);
        var A = R($, 2);
        Bt(A, { dataKeyName: "urlParameters" });
        var V = R(A, 2);
        Qe(V, {
          level: 3,
          mt: "10px",
          children: (ie, he) => {
            Ne();
            var $e = Re("Body");
            L(ie, $e);
          },
          $$slots: { default: !0 }
        });
        var z = R(V, 2), O = F(z), P = F(O);
        const H = Te(() => !n().bodyType);
        bt(P, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return h(H);
          },
          onchange: (ie) => {
            var he;
            (he = ie.target) != null && he.checked && a(i, { bodyType: "" });
          }
        }), Ne(), Z(O);
        var E = R(O, 2), N = F(E);
        const T = Te(() => n().bodyType === "form-data");
        bt(N, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return h(T);
          },
          onchange: (ie) => {
            var he;
            (he = ie.target) != null && he.checked && a(i, { bodyType: "form-data" });
          }
        }), Ne(), Z(E);
        var I = R(E, 2), B = F(I);
        const X = Te(() => n().bodyType === "x-www-form-urlencoded");
        bt(B, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return h(X);
          },
          onchange: (ie) => {
            var he;
            (he = ie.target) != null && he.checked && a(i, { bodyType: "x-www-form-urlencoded" });
          }
        }), Ne(), Z(I);
        var q = R(I, 2), re = F(q);
        const J = Te(() => n().bodyType === "json");
        bt(re, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return h(J);
          },
          onchange: (ie) => {
            var he;
            (he = ie.target) != null && he.checked && a(i, { bodyType: "json" });
          }
        }), Ne(), Z(q);
        var W = R(q, 2), se = F(W);
        const me = Te(() => n().bodyType === "raw");
        bt(se, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return h(me);
          },
          onchange: (ie) => {
            var he;
            (he = ie.target) != null && he.checked && a(i, { bodyType: "raw" });
          }
        }), Ne(), Z(W), Z(z);
        var xe = R(z, 2);
        {
          var fe = (ie) => {
            var he = By(), $e = we(he), Se = F($e);
            Qe(Se, {
              level: 3,
              children: (Q, Ye) => {
                Ne();
                var ue = Re("参数");
                L(Q, ue);
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
              children: (Q, Ye) => {
                var ue = Ry();
                L(Q, ue);
              },
              $$slots: { default: !0 }
            }), Z($e);
            var ut = R($e, 2);
            Bt(ut, { dataKeyName: "fromData" }), L(ie, he);
          };
          be(xe, (ie) => {
            n().bodyType === "form-data" && ie(fe);
          });
        }
        var Ie = R(xe, 2);
        {
          var G = (ie) => {
            var he = Zy(), $e = we(he), Se = F($e);
            Qe(Se, {
              level: 3,
              children: (Q, Ye) => {
                Ne();
                var ue = Re("参数");
                L(Q, ue);
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
              children: (Q, Ye) => {
                var ue = Yy();
                L(Q, ue);
              },
              $$slots: { default: !0 }
            }), Z($e);
            var ut = R($e, 2);
            Bt(ut, { dataKeyName: "fromUrlencoded" }), L(ie, he);
          };
          be(Ie, (ie) => {
            n().bodyType === "x-www-form-urlencoded" && ie(G);
          });
        }
        var ae = R(Ie, 2);
        {
          var Me = (ie) => {
            var he = Fy(), $e = F(he);
            St($e, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Se) => {
                a(i, { bodyJson: Se.target.value });
              }
            }), Z(he), L(ie, he);
          };
          be(ae, (ie) => {
            n().bodyType === "json" && ie(Me);
          });
        }
        var Oe = R(ae, 2);
        {
          var Xe = (ie) => {
            var he = Xy(), $e = F(he);
            St($e, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Se) => {
                a(i, { bodyRaw: Se.target.value });
              }
            }), Z(he), L(ie, he);
          };
          be(Oe, (ie) => {
            n().bodyType === "raw" && ie(Xe);
          });
        }
        var te = R(Oe, 2), We = F(te);
        Qe(We, {
          level: 3,
          mt: "10px",
          children: (ie, he) => {
            Ne();
            var $e = Re("输出参数");
            L(ie, $e);
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
          children: (ie, he) => {
            var $e = Wy();
            L(ie, $e);
          },
          $$slots: { default: !0 }
        }), Z(te);
        var Be = R(te, 2);
        Rn(Be, {}), L(u, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de({
    get data() {
      return n();
    },
    set data(l) {
      n(l), y();
    }
  });
}
le(Fd, { data: {} }, [], [], !0);
var Gy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), Uy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), jy = /* @__PURE__ */ oe('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Jy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Xd(e, t) {
  ce(t, !0), et(e, Jy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ mt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = $n(), s = mr();
  let a = _t(Ut([]));
  Xt(async () => {
    var c, f;
    const u = await ((f = (c = s.provider) == null ? void 0 : c.knowledge) == null ? void 0 : f.call(c));
    h(a).push(...u || []);
  });
  const { updateNodeData: l } = Ot();
  return jn(() => {
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
  }), dn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var f = Gy();
        L(c, f);
      },
      children: (c, f) => {
        var d = jy(), g = we(d), v = F(g);
        Qe(v, {
          level: 3,
          children: (A, V) => {
            Ne();
            var z = Re("输入参数");
            L(A, z);
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
          children: (A, V) => {
            var z = Uy();
            L(A, z);
          },
          $$slots: { default: !0 }
        }), Z(g);
        var x = R(g, 2);
        Bt(x, {});
        var k = R(x, 2);
        Qe(k, {
          level: 3,
          mt: "10px",
          children: (A, V) => {
            Ne();
            var z = Re("知识库设置");
            L(A, z);
          },
          $$slots: { default: !0 }
        });
        var m = R(k, 4), b = F(m);
        const p = Te(() => n().knowledgeId ? [n().knowledgeId] : []);
        xn(b, {
          get items() {
            return h(a);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (A) => {
            const V = A.value;
            l(o, () => ({ knowledgeId: V }));
          },
          get value() {
            return h(p);
          }
        }), Z(m);
        var C = R(m, 4), S = F(C);
        bt(S, { placeholder: "搜索的数据条数", style: "width: 100%" }), Z(C);
        var $ = R(C, 2), M = F($);
        Qe(M, {
          level: 3,
          mt: "10px",
          children: (A, V) => {
            Ne();
            var z = Re("输出参数");
            L(A, z);
          },
          $$slots: { default: !0 }
        }), Z($);
        var D = R($, 2);
        Rn(D, {}), L(c, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de({
    get data() {
      return n();
    },
    set data(u) {
      n(u), y();
    }
  });
}
le(Xd, { data: {} }, [], [], !0);
var Qy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), ew = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), tw = /* @__PURE__ */ oe('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">API 服务商</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">API Key</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">其他参数</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const nw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Wd(e, t) {
  ce(t, !0), et(e, nw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ mt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = $n(), s = mr();
  let a = _t(Ut([]));
  Xt(async () => {
    var c;
    const u = await ((c = s.provider) == null ? void 0 : c.knowledge());
    h(a).push(...u || []);
  });
  const { updateNodeData: l } = Ot();
  return jn(() => {
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
  }), dn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var f = Qy();
        L(c, f);
      },
      children: (c, f) => {
        var d = tw(), g = we(d), v = F(g);
        Qe(v, {
          level: 3,
          children: (E, N) => {
            Ne();
            var T = Re("输入参数");
            L(E, T);
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
          children: (E, N) => {
            var T = ew();
            L(E, T);
          },
          $$slots: { default: !0 }
        }), Z(g);
        var x = R(g, 2);
        Bt(x, {});
        var k = R(x, 2);
        Qe(k, {
          level: 3,
          mt: "10px",
          children: (E, N) => {
            Ne();
            var T = Re("搜索引擎设置");
            L(E, T);
          },
          $$slots: { default: !0 }
        });
        var m = R(k, 4), b = F(m);
        const p = Te(() => n().knowledgeId ? [n().knowledgeId] : []);
        xn(b, {
          get items() {
            return h(a);
          },
          style: "width: 100%",
          placeholder: "请选择 API 服务商",
          onSelect: (E) => {
            const N = E.value;
            l(o, () => ({ knowledgeId: N }));
          },
          get value() {
            return h(p);
          }
        }), Z(m);
        var C = R(m, 4), S = F(C);
        bt(S, {
          placeholder: "请输入 API Key",
          style: "width: 100%"
        }), Z(C);
        var $ = R(C, 4), M = F($);
        bt(M, { placeholder: "请输入关键字", style: "width: 100%" }), Z($);
        var D = R($, 4), A = F(D);
        bt(A, { placeholder: "搜索的数据条数", style: "width: 100%" }), Z(D);
        var V = R(D, 4), z = F(V);
        St(z, {
          rows: 3,
          placeholder: "请输入其他参数（Property 格式）",
          style: "width: 100%"
        }), Z(V);
        var O = R(V, 2), P = F(O);
        Qe(P, {
          level: 3,
          mt: "10px",
          children: (E, N) => {
            Ne();
            var T = Re("输出参数");
            L(E, T);
          },
          $$slots: { default: !0 }
        }), Z(O);
        var H = R(O, 2);
        Rn(H, {}), L(c, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de({
    get data() {
      return n();
    },
    set data(u) {
      n(u), y();
    }
  });
}
le(Wd, { data: {} }, [], [], !0);
var rw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), ow = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), iw = /* @__PURE__ */ oe('<div class="heading svelte-md8tgj"><!> <!></div> <!> <div class="heading svelte-md8tgj"><!></div> <!>', 1);
const sw = {
  hash: "svelte-md8tgj",
  code: ".heading.svelte-md8tgj {display:flex;margin-bottom:10px;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function Kd(e, t) {
  ce(t, !0), et(e, sw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ mt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = $n(), s = mr();
  let a = _t(Ut([]));
  return Xt(async () => {
    var u;
    const l = await ((u = s.provider) == null ? void 0 : u.knowledge());
    h(a).push(...l || []);
  }), dn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var f = rw();
        L(c, f);
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
        var d = iw(), g = we(d), v = F(g);
        Qe(v, {
          level: 3,
          children: (p, C) => {
            Ne();
            var S = Re("循环变量");
            L(p, S);
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
          children: (p, C) => {
            var S = ow();
            L(p, S);
          },
          $$slots: { default: !0 }
        }), Z(g);
        var x = R(g, 2);
        Bt(x, {});
        var k = R(x, 2), m = F(k);
        Qe(m, {
          level: 3,
          mt: "10px",
          children: (p, C) => {
            Ne();
            var S = Re("输出参数");
            L(p, S);
          },
          $$slots: { default: !0 }
        }), Z(k);
        var b = R(k, 2);
        Rn(b, {}), L(c, d);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), de({
    get data() {
      return n();
    },
    set data(l) {
      n(l), y();
    }
  });
}
le(Kd, { data: {} }, [], [], !0);
const aw = {
  startNode: Od,
  codeNode: Yd,
  llmNode: Bd,
  templateNode: Zd,
  httpNode: Fd,
  knowledgeNode: Xd,
  searchEngineNode: Wd,
  loopNode: Kd,
  endNode: zd
};
var lw = /* @__PURE__ */ oe("<!> ", 1);
function Fs(e, t) {
  ce(t, !0);
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
      Ee(() => Yt(d, ` ${r() ?? ""}`)), L(l, c);
    },
    $$slots: { default: !0 }
  }), de({
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
var uw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), cw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), dw = /* @__PURE__ */ oe('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function qd(e, t) {
  ce(t, !0);
  let n = _t("base"), r = _t("show");
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
  ], s = [], a = mr().customNodes;
  if (a) {
    const x = Object.keys(a).sort((k, m) => (a[k].sortNo || 0) - (a[m].sortNo || 0));
    for (let k of x)
      s.push({
        icon: a[k].icon,
        title: a[k].title,
        type: k
      });
  }
  var l = dw(), u = F(l), c = F(u), f = F(c);
  yd(f, {
    style: "width: 100%",
    items: i,
    onChange: (x) => {
      U(n, x.value.toString(), !0);
    }
  }), Z(c);
  var d = R(c, 2), g = F(d);
  Dt(g, 21, () => o, po, (x, k) => {
    Fs(x, ct(() => h(k)));
  }), Z(g);
  var v = R(g, 2);
  Dt(v, 21, () => s, po, (x, k) => {
    Fs(x, ct(() => h(k)));
  }), Z(v), Z(d), Z(u);
  var _ = R(u, 2);
  je(_, {
    onclick: () => {
      U(r, h(r) ? "" : "show", !0);
    },
    children: (x, k) => {
      var m = tt(), b = we(m);
      {
        var p = (S) => {
          var $ = uw();
          L(S, $);
        }, C = (S) => {
          var $ = cw();
          L(S, $);
        };
        be(b, (S) => {
          h(r) === "show" ? S(p) : S(C, !1);
        });
      }
      L(x, m);
    },
    $$slots: { default: !0 }
  }), Z(l), Ee(() => {
    $t(l, 1, `tf-toolbar ${h(r) ?? ""}`), ft(g, `display: ${(h(n) === "base" ? "flex" : "none") ?? ""}`), ft(v, `display: ${(h(n) !== "base" ? "flex" : "none") ?? ""}`);
  }), L(e, l), de();
}
le(qd, {}, [], [], !0);
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
var vw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), pw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), mw = /* @__PURE__ */ oe('<div class="heading svelte-c71dg3"><!> <!></div> <!> <div></div> <div class="heading svelte-c71dg3"><!> <!></div> <!>', 1);
const yw = {
  hash: "svelte-c71dg3",
  code: ".heading.svelte-c71dg3 {display:flex;margin-bottom:10px;}"
};
function Gd(e, t) {
  var g;
  ce(t, !0), et(e, yw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ mt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = $n(), s = Ot(), a = { ...r, id: o, data: n() }, l = document.createElement("div"), c = mr().customNodes[t.type];
  (g = c.render) == null || g.call(c, l, a, s);
  let f;
  jn(() => {
    n().expand && f && f.append(l);
  }), jn(() => {
    var v;
    n() && ((v = c.onUpdate) == null || v.call(c, l, { ...a, data: n() }));
  });
  const d = Te(() => ({
    ...n(),
    description: c.description
  }));
  return dn(e, ct(
    {
      get data() {
        return h(d);
      }
    },
    () => r,
    {
      icon: (_) => {
        var x = tt(), k = we(x);
        aa(k, () => c.icon), L(_, x);
      },
      children: (_, x) => {
        var k = mw(), m = we(k), b = F(m);
        Qe(b, {
          level: 3,
          children: (V, z) => {
            Ne();
            var O = Re("输入参数");
            L(V, O);
          },
          $$slots: { default: !0 }
        });
        var p = R(b, 2);
        je(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (V, z) => {
            var O = vw();
            L(V, O);
          },
          $$slots: { default: !0 }
        }), Z(m);
        var C = R(m, 2);
        Bt(C, {});
        var S = R(C, 2);
        _n(S, (V) => f = V, () => f);
        var $ = R(S, 2), M = F($);
        Qe(M, {
          level: 3,
          mt: "10px",
          children: (V, z) => {
            Ne();
            var O = Re("输出参数");
            L(V, O);
          },
          $$slots: { default: !0 }
        });
        var D = R(M, 2);
        je(D, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (V, z) => {
            var O = pw();
            L(V, O);
          },
          $$slots: { default: !0 }
        }), Z($);
        var A = R($, 2);
        Rn(A, {}), L(_, k);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de({
    get data() {
      return n();
    },
    set data(v) {
      n(v), y();
    }
  });
}
le(Gd, { data: {} }, [], [], !0);
var ww = /* @__PURE__ */ oe('<div class="panel-content svelte-1oe15vw"><div>边属性设置</div> <div class="setting-title svelte-1oe15vw">边条件设置</div> <div class="setting-item"><!></div></div>'), _w = /* @__PURE__ */ oe("<!> <!> <!> <!>", 1), xw = /* @__PURE__ */ oe('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const bw = {
  hash: "svelte-1oe15vw",
  code: ".panel-content.svelte-1oe15vw {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-1oe15vw {margin:10px 0;font-size:12px;color:#999;}"
};
function Ud(e, t) {
  ce(t, !0), et(e, bw);
  const n = w(t, "onInit", 7), r = Ot();
  n()(r);
  let o = _t(!1);
  const i = (S) => {
    S.preventDefault(), S.dataTransfer && (S.dataTransfer.dropEffect = "move");
  }, s = (S) => {
    var V;
    S.preventDefault();
    const $ = r.screenToFlowPosition({
      x: S.clientX - 250,
      y: S.clientY - 100
    }), M = (V = S.dataTransfer) == null ? void 0 : V.getData("application/tinyflow"), D = M ? JSON.parse(M) : {}, A = {
      id: `node_${Zr()}`,
      position: $,
      data: {},
      ...D
    };
    oi.addNode(A), oi.selectNodeOnly(A.id);
  }, { getNode: a } = fw(), l = (S) => {
    const $ = a(S.source), M = a(S.target);
    if (S.sourceHandle === "loop_handle" || $.parentId) {
      const D = r.getEdges();
      for (let A of D)
        if (A.target === S.target) {
          const V = a(A.source);
          if (S.sourceHandle === "loop_handle" && V.parentId !== $.id || $.parentId && V.parentId !== $.parentId)
            return !1;
        }
    }
    return !(!$.parentId && M.parentId && M.parentId !== $.id);
  }, { ensureParentInNodesBefore: u } = gw(), c = (S, $) => {
    if (!$.isValid)
      return;
    const M = $.toNode;
    if (M.parentId)
      return;
    const D = $.fromNode, A = $.fromHandle, V = { position: { ...M.position } };
    if (A.id === "loop_handle" ? V.parentId = D.id : D.parentId && (V.parentId = D.parentId), V.parentId) {
      const z = a(V.parentId);
      V.position = {
        x: M.position.x - z.position.x,
        y: M.position.y - z.position.y
      }, u(V.parentId, M.id), r.updateNode(M.id, V);
    }
  }, { getEdgesByTarget: f } = hw(), d = (S) => {
    S.edges.forEach((M) => {
      const D = a(M.target);
      if (D.parentId) {
        const A = f(M.target), V = a(D.parentId);
        if (A.length === 0)
          r.updateNode(D.id, {
            parentId: void 0,
            position: {
              x: D.position.x + V.position.x,
              y: D.position.y + V.position.y
            }
          });
        else {
          let z = !1;
          for (let O = 0; O < A.length; O++) {
            const P = A[O], H = a(P.source);
            if (H.parentId || H.type === "loopNode") {
              z = !0;
              break;
            }
          }
          z || r.updateNode(D.id, {
            parentId: void 0,
            position: {
              x: D.position.x + V.position.x,
              y: D.position.y + V.position.y
            }
          });
        }
      }
    });
  }, g = (S, $) => {
    console.log("onconnectstart: ", S, $);
  }, v = (S) => {
    console.log("onconnect: ", S);
  }, _ = {}, x = mr().customNodes;
  if (x)
    for (let S of Object.keys(x))
      _[S] = Gd;
  var k = xw(), m = F(k);
  qd(m, {});
  var b = R(m, 2);
  const p = Te(() => ({ ...aw, ..._ })), C = Te(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: bo.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  return rd(b, ct(
    {
      get nodeTypes() {
        return h(p);
      }
    },
    oi,
    {
      class: "tinyflow-logo",
      isValidConnection: l,
      onconnectend: c,
      onconnectstart: g,
      onconnect: v,
      connectionRadius: 50,
      ondelete: d,
      onclick: (S) => {
        const $ = S.target;
        $.classList.contains("svelte-flow__edge-interaction") || $.classList.contains("panel-content") || $.closest(".panel-content") || U(o, !1);
      },
      get defaultEdgeOptions() {
        return h(C);
      },
      $$events: {
        drop: s,
        dragover: i,
        edgeclick: () => {
          U(o, !0);
        }
      },
      children: (S, $) => {
        var M = _w(), D = we(M);
        gd(D, {});
        var A = R(D, 2);
        cd(A, {});
        var V = R(A, 2);
        vd(V, {});
        var z = R(V, 2);
        {
          var O = (P) => {
            Lo(P, {
              children: (H, E) => {
                var N = ww(), T = R(F(N), 4), I = F(T);
                St(I, {
                  rows: 3,
                  placeholder: "请输入边条件",
                  style: "width: 100%",
                  oninput: (B) => {
                  }
                }), Z(T), Z(N), L(H, N);
              },
              $$slots: { default: !0 }
            });
          };
          be(z, (P) => {
            h(o) && P(O);
          });
        }
        L(S, M);
      },
      $$slots: { default: !0 }
    }
  )), Z(k), L(e, k), de({
    get onInit() {
      return n();
    },
    set onInit(S) {
      n(S), y();
    }
  });
}
le(Ud, { onInit: {} }, [], [], !0);
function Cw(e, t) {
  ce(t, !0);
  const n = w(t, "options", 7), r = w(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  return oi.init((o == null ? void 0 : o.nodes) || [], (o == null ? void 0 : o.edges) || []), Ar("tinyflow_options", n()), od(e, {
    fitView: !0,
    children: (i, s) => {
      Ud(i, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), de({
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
customElements.define("tinyflow-component", le(Cw, { options: {}, onInit: {} }, [], [], !1));
export {
  Nw as Tinyflow
};
//# sourceMappingURL=index.js.map
