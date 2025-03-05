var of = Object.defineProperty;
var Ma = (e) => {
  throw TypeError(e);
};
var sf = (e, t, n) => t in e ? of(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var wt = (e, t, n) => sf(e, typeof t != "symbol" ? t + "" : t, n), es = (e, t, n) => t.has(e) || Ma("Cannot " + n);
var st = (e, t, n) => (es(e, t, "read from private field"), n ? n.call(e) : t.get(e)), tr = (e, t, n) => t.has(e) ? Ma("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Jr = (e, t, n, r) => (es(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Ta = (e, t, n) => (es(e, t, "access private method"), n);
const af = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(af);
let Xr = !1, lf = !1;
function uf() {
  Xr = !0;
}
uf();
const Rs = 1, Bs = 2, Ol = 4, cf = 8, df = 16, ff = 1, gf = 2, Ll = 4, hf = 8, vf = 16, zl = 1, pf = 2, Il = "[", Ys = "[!", Zs = "]", _r = {}, St = Symbol(), Rl = "http://www.w3.org/2000/svg", gs = !1, en = 2, Bl = 4, Si = 8, Xs = 16, Vn = 32, Wr = 64, ti = 128, Kt = 256, ni = 512, mt = 1024, On = 2048, dr = 4096, Pn = 8192, Pi = 16384, mf = 32768, Fr = 65536, yf = 1 << 17, wf = 1 << 19, Yl = 1 << 20, Xn = Symbol("$state"), Ws = Symbol("legacy props"), _f = Symbol("");
var Co = Array.isArray, xf = Array.prototype.indexOf, Fs = Array.from, ri = Object.keys, so = Object.defineProperty, Nn = Object.getOwnPropertyDescriptor, Zl = Object.getOwnPropertyDescriptors, bf = Object.prototype, Cf = Array.prototype, Ks = Object.getPrototypeOf;
function Qr(e) {
  return typeof e == "function";
}
const ft = () => {
};
function kf(e) {
  return e();
}
function ao(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const Ef = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let oi = !1, ii = !1, hs = [], vs = [];
function Xl() {
  oi = !1;
  const e = hs.slice();
  hs = [], ao(e);
}
function Wl() {
  ii = !1;
  const e = vs.slice();
  vs = [], ao(e);
}
function ko(e) {
  oi || (oi = !0, queueMicrotask(Xl)), hs.push(e);
}
function $f(e) {
  ii || (ii = !0, Ef(Wl)), vs.push(e);
}
function Sf() {
  oi && Xl(), ii && Wl();
}
function Fl(e) {
  return e === this.v;
}
function qs(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Us(e) {
  return !qs(e, this.v);
}
function Pf(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Nf() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Mf(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Tf() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Hf() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Af(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Df() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Vf() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Of() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Lf() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Nt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Fl,
    rv: 0,
    wv: 0
  };
  return n;
}
function Tr(e) {
  return /* @__PURE__ */ Kl(Nt(e));
}
// @__NO_SIDE_EFFECTS__
function Eo(e, t = !1) {
  var r;
  const n = Nt(e);
  return t || (n.equals = Us), Xr && Ye !== null && Ye.l !== null && ((r = Ye.l).s ?? (r.s = [])).push(n), n;
}
function te(e, t = !1) {
  return /* @__PURE__ */ Kl(/* @__PURE__ */ Eo(e, t));
}
// @__NO_SIDE_EFFECTS__
function Kl(e) {
  return Ue !== null && !ln && Ue.f & en && (un === null ? Bf([e]) : un.push(e)), e;
}
function G(e, t) {
  return Ue !== null && !ln && Di() && Ue.f & (en | Xs) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (un === null || !un.includes(e)) && Lf(), ps(e, t);
}
function ps(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = nu(), ql(e, On), Di() && We !== null && We.f & mt && !(We.f & (Vn | Wr)) && (kn === null ? Yf([e]) : kn.push(e))), t;
}
function Ha(e, t = 1) {
  var n = h(e), r = t === 1 ? n++ : n--;
  return G(e, n), r;
}
function ql(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Di(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      a & On || !r && s === We || (tn(s, t), a & (mt | Kt) && (a & en ? ql(
        /** @type {Derived} */
        s,
        dr
      ) : Hi(
        /** @type {Effect} */
        s
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Te(e) {
  var t = en | On, n = Ue !== null && Ue.f & en ? (
    /** @type {Derived} */
    Ue
  ) : null;
  return We === null || n !== null && n.f & Kt ? t |= Kt : We.f |= Yl, {
    ctx: Ye,
    deps: null,
    effects: null,
    equals: Fl,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: n ?? We
  };
}
// @__NO_SIDE_EFFECTS__
function pe(e) {
  const t = /* @__PURE__ */ Te(e);
  return t.equals = Us, t;
}
function Ul(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      qt(
        /** @type {Effect} */
        t[n]
      );
  }
}
function zf(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & en))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function If(e) {
  var t, n = We;
  Un(zf(e));
  try {
    Ul(e), t = ou(e);
  } finally {
    Un(n);
  }
  return t;
}
function Gl(e) {
  var t = If(e), n = (Yn || e.f & Kt) && e.deps !== null ? dr : mt;
  tn(e, n), e.equals(t) || (e.v = t, e.wv = nu());
}
function Ni(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let $e = !1;
function Lt(e) {
  $e = e;
}
let De;
function Ct(e) {
  if (e === null)
    throw Ni(), _r;
  return De = e;
}
function fn() {
  return Ct(
    /** @type {TemplateNode} */
    /* @__PURE__ */ pn(De)
  );
}
function Z(e) {
  if ($e) {
    if (/* @__PURE__ */ pn(De) !== null)
      throw Ni(), _r;
    De = e;
  }
}
function Me(e = 1) {
  if ($e) {
    for (var t = e, n = De; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ pn(n);
    De = n;
  }
}
function ms() {
  for (var e = 0, t = De; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === Zs) {
        if (e === 0) return t;
        e -= 1;
      } else (n === Il || n === Ys) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ pn(t)
    );
    t.remove(), t = r;
  }
}
function Vt(e, t = null, n) {
  if (typeof e != "object" || e === null || Xn in e)
    return e;
  const r = Ks(e);
  if (r !== bf && r !== Cf)
    return e;
  var o = /* @__PURE__ */ new Map(), i = Co(e), s = Nt(0);
  i && o.set("length", Nt(
    /** @type {any[]} */
    e.length
  ));
  var a;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, u, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Df();
        var f = o.get(u);
        return f === void 0 ? (f = Nt(c.value), o.set(u, f)) : G(f, Vt(c.value, a)), !0;
      },
      deleteProperty(l, u) {
        var c = o.get(u);
        if (c === void 0)
          u in l && o.set(u, Nt(St));
        else {
          if (i && typeof u == "string") {
            var f = (
              /** @type {Source<number>} */
              o.get("length")
            ), d = Number(u);
            Number.isInteger(d) && d < f.v && G(f, d);
          }
          G(c, St), Aa(s);
        }
        return !0;
      },
      get(l, u, c) {
        var v;
        if (u === Xn)
          return e;
        var f = o.get(u), d = u in l;
        if (f === void 0 && (!d || (v = Nn(l, u)) != null && v.writable) && (f = Nt(Vt(d ? l[u] : St, a)), o.set(u, f)), f !== void 0) {
          var g = h(f);
          return g === St ? void 0 : g;
        }
        return Reflect.get(l, u, c);
      },
      getOwnPropertyDescriptor(l, u) {
        var c = Reflect.getOwnPropertyDescriptor(l, u);
        if (c && "value" in c) {
          var f = o.get(u);
          f && (c.value = h(f));
        } else if (c === void 0) {
          var d = o.get(u), g = d == null ? void 0 : d.v;
          if (d !== void 0 && g !== St)
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
        if (u === Xn)
          return !0;
        var c = o.get(u), f = c !== void 0 && c.v !== St || Reflect.has(l, u);
        if (c !== void 0 || We !== null && (!f || (g = Nn(l, u)) != null && g.writable)) {
          c === void 0 && (c = Nt(f ? Vt(l[u], a) : St), o.set(u, c));
          var d = h(c);
          if (d === St)
            return !1;
        }
        return f;
      },
      set(l, u, c, f) {
        var x;
        var d = o.get(u), g = u in l;
        if (i && u === "length")
          for (var v = c; v < /** @type {Source<number>} */
          d.v; v += 1) {
            var C = o.get(v + "");
            C !== void 0 ? G(C, St) : v in l && (C = Nt(St), o.set(v + "", C));
          }
        d === void 0 ? (!g || (x = Nn(l, u)) != null && x.writable) && (d = Nt(void 0), G(d, Vt(c, a)), o.set(u, d)) : (g = d.v !== St, G(d, Vt(c, a)));
        var _ = Reflect.getOwnPropertyDescriptor(l, u);
        if (_ != null && _.set && _.set.call(f, c), !g) {
          if (i && typeof u == "string") {
            var $ = (
              /** @type {Source<number>} */
              o.get("length")
            ), p = Number(u);
            Number.isInteger(p) && p >= $.v && G($, p + 1);
          }
          Aa(s);
        }
        return !0;
      },
      ownKeys(l) {
        h(s);
        var u = Reflect.ownKeys(l).filter((d) => {
          var g = o.get(d);
          return g === void 0 || g.v !== St;
        });
        for (var [c, f] of o)
          f.v !== St && !(c in l) && u.push(c);
        return u;
      },
      setPrototypeOf() {
        Vf();
      }
    }
  );
}
function Aa(e, t = 1) {
  G(e, e.v + t);
}
var Pt, jl, Jl, Ql;
function ys() {
  if (Pt === void 0) {
    Pt = window, jl = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    Jl = Nn(t, "firstChild").get, Ql = Nn(t, "nextSibling").get, e.__click = void 0, e.__className = "", e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Tn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function bt(e) {
  return Jl.call(e);
}
// @__NO_SIDE_EFFECTS__
function pn(e) {
  return Ql.call(e);
}
function W(e, t) {
  if (!$e)
    return /* @__PURE__ */ bt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ bt(De)
  );
  if (n === null)
    n = De.appendChild(Tn());
  else if (t && n.nodeType !== 3) {
    var r = Tn();
    return n == null || n.before(r), Ct(r), r;
  }
  return Ct(n), n;
}
function _e(e, t) {
  if (!$e) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ bt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ pn(n) : n;
  }
  return De;
}
function R(e, t = 1, n = !1) {
  let r = $e ? De : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ pn(r);
  if (!$e)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var s = Tn();
    return r === null ? o == null || o.after(s) : r.before(s), Ct(s), s;
  }
  return Ct(r), /** @type {TemplateNode} */
  r;
}
function Gs(e) {
  e.textContent = "";
}
const eu = 0, Rf = 1;
let Ko = !1, qo = eu, lo = !1, uo = null, xr = !1, js = !1;
function Da(e) {
  xr = e;
}
function Va(e) {
  js = e;
}
let nr = [], br = 0;
let Ue = null, ln = !1;
function qn(e) {
  Ue = e;
}
let We = null;
function Un(e) {
  We = e;
}
let un = null;
function Bf(e) {
  un = e;
}
let _t = null, Dt = 0, kn = null;
function Yf(e) {
  kn = e;
}
let tu = 1, si = 0, Yn = !1;
function nu() {
  return ++tu;
}
function Kr(e) {
  var f;
  var t = e.f;
  if (t & On)
    return !0;
  if (t & dr) {
    var n = e.deps, r = (t & Kt) !== 0;
    if (n !== null) {
      var o, i, s = (t & ni) !== 0, a = r && We !== null && !Yn, l = n.length;
      if (s || a) {
        var u = (
          /** @type {Derived} */
          e
        ), c = u.parent;
        for (o = 0; o < l; o++)
          i = n[o], (s || !((f = i == null ? void 0 : i.reactions) != null && f.includes(u))) && (i.reactions ?? (i.reactions = [])).push(u);
        s && (u.f ^= ni), a && c !== null && !(c.f & Kt) && (u.f ^= Kt);
      }
      for (o = 0; o < l; o++)
        if (i = n[o], Kr(
          /** @type {Derived} */
          i
        ) && Gl(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!r || We !== null && !Yn) && tn(e, mt);
  }
  return !1;
}
function Zf(e, t) {
  for (var n = t; n !== null; ) {
    if (n.f & ti)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= ti;
      }
    n = n.parent;
  }
  throw Ko = !1, e;
}
function Xf(e) {
  return (e.f & Pi) === 0 && (e.parent === null || (e.parent.f & ti) === 0);
}
function Mi(e, t, n, r) {
  if (Ko) {
    if (n === null && (Ko = !1), Xf(t))
      throw e;
    return;
  }
  n !== null && (Ko = !0);
  {
    Zf(e, t);
    return;
  }
}
function ru(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      i.f & en ? ru(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? tn(i, On) : i.f & mt && tn(i, dr), Hi(
        /** @type {Effect} */
        i
      ));
    }
}
function ou(e) {
  var g;
  var t = _t, n = Dt, r = kn, o = Ue, i = Yn, s = un, a = Ye, l = ln, u = e.f;
  _t = /** @type {null | Value[]} */
  null, Dt = 0, kn = null, Ue = u & (Vn | Wr) ? null : e, Yn = (u & Kt) !== 0 && (!xr || o === null || l), un = null, Oa(e.ctx), ln = !1, si++;
  try {
    var c = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (_t !== null) {
      var d;
      if (ai(e, Dt), f !== null && Dt > 0)
        for (f.length = Dt + _t.length, d = 0; d < _t.length; d++)
          f[Dt + d] = _t[d];
      else
        e.deps = f = _t;
      if (!Yn)
        for (d = Dt; d < f.length; d++)
          ((g = f[d]).reactions ?? (g.reactions = [])).push(e);
    } else f !== null && Dt < f.length && (ai(e, Dt), f.length = Dt);
    if (Di() && kn !== null && !ln && f !== null && !(e.f & (en | dr | On)))
      for (d = 0; d < /** @type {Source[]} */
      kn.length; d++)
        ru(
          kn[d],
          /** @type {Effect} */
          e
        );
    return o !== null && si++, c;
  } finally {
    _t = t, Dt = n, kn = r, Ue = o, Yn = i, un = s, Oa(a), ln = l;
  }
}
function Wf(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = xf.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && t.f & en && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (_t === null || !_t.includes(t)) && (tn(t, dr), t.f & (Kt | ni) || (t.f ^= ni), Ul(
    /** @type {Derived} **/
    t
  ), ai(
    /** @type {Derived} **/
    t,
    0
  ));
}
function ai(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Wf(e, n[r]);
}
function Ti(e) {
  var t = e.f;
  if (!(t & Pi)) {
    tn(e, mt);
    var n = We, r = Ye;
    We = e;
    try {
      t & Xs ? e1(e) : cu(e), uu(e);
      var o = ou(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = tu;
      var i = e.deps, s;
      gs && lf && e.f & On;
    } catch (a) {
      Mi(a, e, n, r || e.ctx);
    } finally {
      We = n;
    }
  }
}
function iu() {
  if (br > 1e3) {
    br = 0;
    try {
      Tf();
    } catch (e) {
      if (uo !== null)
        Mi(e, uo, null);
      else
        throw e;
    }
  }
  br++;
}
function su(e) {
  var t = e.length;
  if (t !== 0) {
    iu();
    var n = xr;
    xr = !0;
    try {
      for (var r = 0; r < t; r++) {
        var o = e[r];
        o.f & mt || (o.f ^= mt);
        var i = qf(o);
        Ff(i);
      }
    } finally {
      xr = n;
    }
  }
}
function Ff(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if (!(r.f & (Pi | Pn)))
        try {
          Kr(r) && (Ti(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? du(r) : r.fn = null));
        } catch (o) {
          Mi(o, r, null, r.ctx);
        }
    }
}
function Kf() {
  if (lo = !1, br > 1001)
    return;
  const e = nr;
  nr = [], su(e), lo || (br = 0, uo = null);
}
function Hi(e) {
  qo === eu && (lo || (lo = !0, queueMicrotask(Kf))), uo = e;
  for (var t = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (Wr | Vn)) {
      if (!(n & mt)) return;
      t.f ^= mt;
    }
  }
  nr.push(t);
}
function qf(e) {
  var t = [], n = e.first;
  e: for (; n !== null; ) {
    var r = n.f, o = (r & Vn) !== 0, i = o && (r & mt) !== 0, s = n.next;
    if (!i && !(r & Pn)) {
      if (r & Bl)
        t.push(n);
      else if (o)
        n.f ^= mt;
      else {
        var a = Ue;
        try {
          Ue = n, Kr(n) && Ti(n);
        } catch (c) {
          Mi(c, n, null, n.ctx);
        } finally {
          Ue = a;
        }
      }
      var l = n.first;
      if (l !== null) {
        n = l;
        continue;
      }
    }
    if (s === null) {
      let c = n.parent;
      for (; c !== null; ) {
        if (e === c)
          break e;
        var u = c.next;
        if (u !== null) {
          n = u;
          continue e;
        }
        c = c.parent;
      }
    }
    n = s;
  }
  return t;
}
function y(e) {
  var t = qo, n = nr;
  try {
    iu();
    const o = [];
    qo = Rf, nr = o, lo = !1, su(n);
    var r = e == null ? void 0 : e();
    return Sf(), (nr.length > 0 || o.length > 0) && y(), br = 0, uo = null, r;
  } finally {
    qo = t, nr = n;
  }
}
function h(e) {
  var t = e.f, n = (t & en) !== 0;
  if (Ue !== null && !ln) {
    un !== null && un.includes(e) && Of();
    var r = Ue.deps;
    e.rv < si && (e.rv = si, _t === null && r !== null && r[Dt] === e ? Dt++ : _t === null ? _t = [e] : (!Yn || !_t.includes(e)) && _t.push(e));
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), i = o.parent;
    i !== null && !(i.f & Kt) && (o.f ^= Kt);
  }
  return n && (o = /** @type {Derived} */
  e, Kr(o) && Gl(o)), e.v;
}
function gn(e) {
  var t = ln;
  try {
    return ln = !0, e();
  } finally {
    ln = t;
  }
}
const Uf = -7169;
function tn(e, t) {
  e.f = e.f & Uf | t;
}
function U(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Xn in e)
      ws(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Xn in n && ws(n);
      }
  }
}
function ws(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        ws(e[r], t);
      } catch {
      }
    const n = Ks(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Zl(n);
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
function au(e) {
  We === null && Ue === null && Mf(), Ue !== null && Ue.f & Kt && We === null && Nf(), js && Pf();
}
function Gf(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function fr(e, t, n, r = !0) {
  var o = (e & Wr) !== 0, i = We, s = {
    ctx: Ye,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | On,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: o ? null : i,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (n) {
    var a = xr;
    try {
      Da(!0), Ti(s), s.f |= mf;
    } catch (c) {
      throw qt(s), c;
    } finally {
      Da(a);
    }
  } else t !== null && Hi(s);
  var l = n && s.deps === null && s.first === null && s.nodes_start === null && s.teardown === null && (s.f & (Yl | ti)) === 0;
  if (!l && !o && r && (i !== null && Gf(s, i), Ue !== null && Ue.f & en)) {
    var u = (
      /** @type {Derived} */
      Ue
    );
    (u.effects ?? (u.effects = [])).push(s);
  }
  return s;
}
function lu(e) {
  const t = fr(Si, null, !1);
  return tn(t, mt), t.teardown = e, t;
}
function Hr(e) {
  au();
  var t = We !== null && (We.f & Vn) !== 0 && Ye !== null && !Ye.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      Ye
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: We,
      reaction: Ue
    });
  } else {
    var r = Ot(e);
    return r;
  }
}
function jf(e) {
  return au(), qr(e);
}
function Jf(e) {
  const t = fr(Wr, e, !0);
  return () => {
    qt(t);
  };
}
function Qf(e) {
  const t = fr(Wr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Ar(t, () => {
      qt(t), r(void 0);
    }) : (qt(t), r(void 0));
  });
}
function Ot(e) {
  return fr(Bl, e, !1);
}
function ue(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    Ye
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = qr(() => {
    e(), !r.ran && (r.ran = !0, G(n.l.r2, !0), gn(t));
  });
}
function ht() {
  var e = (
    /** @type {ComponentContextLegacy} */
    Ye
  );
  qr(() => {
    if (h(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        n.f & mt && tn(n, dr), Kr(n) && Ti(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function qr(e) {
  return fr(Si, e, !0);
}
function Se(e, t = [], n = Te) {
  const r = t.map(n);
  return gr(() => e(...r.map(h)));
}
function gr(e, t = 0) {
  return fr(Si | Xs | t, e, !0);
}
function Hn(e, t = !0) {
  return fr(Si | Vn, e, !0, t);
}
function uu(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = js, r = Ue;
    Va(!0), qn(null);
    try {
      t.call(null);
    } finally {
      Va(n), qn(r);
    }
  }
}
function cu(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    qt(n, t), n = r;
  }
}
function e1(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & Vn || qt(t), t = n;
  }
}
function qt(e, t = !0) {
  var n = !1;
  if ((t || e.f & wf) && e.nodes_start !== null) {
    for (var r = e.nodes_start, o = e.nodes_end; r !== null; ) {
      var i = r === o ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ pn(r)
      );
      r.remove(), r = i;
    }
    n = !0;
  }
  cu(e, t && !n), ai(e, 0), tn(e, Pi);
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
function Ar(e, t) {
  var n = [];
  Js(e, n, !0), fu(n, () => {
    qt(e), t && t();
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
function Js(e, t, n) {
  if (!(e.f & Pn)) {
    if (e.f ^= Pn, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & Fr) !== 0 || (r.f & Vn) !== 0;
      Js(r, t, i ? n : !1), r = o;
    }
  }
}
function co(e) {
  gu(e, !0);
}
function gu(e, t) {
  if (e.f & Pn) {
    e.f ^= Pn, e.f & mt || (e.f ^= mt), Kr(e) && (tn(e, On), Hi(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Fr) !== 0 || (n.f & Vn) !== 0;
      gu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
function Ai(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let Ye = null;
function Oa(e) {
  Ye = e;
}
function ir(e) {
  return (
    /** @type {T} */
    Qs().get(e)
  );
}
function Dr(e, t) {
  return Qs().set(e, t), t;
}
function t1(e) {
  return Qs().has(e);
}
function ce(e, t = !1, n) {
  Ye = {
    p: Ye,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  }, Xr && !t && (Ye.l = {
    s: null,
    u: null,
    r1: [],
    r2: Nt(!1)
  });
}
function de(e) {
  const t = Ye;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var n = We, r = Ue;
      t.e = null;
      try {
        for (var o = 0; o < s.length; o++) {
          var i = s[o];
          Un(i.effect), qn(i.reaction), Ot(i.fn);
        }
      } finally {
        Un(n), qn(r);
      }
    }
    Ye = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Di() {
  return !Xr || Ye !== null && Ye.l === null;
}
function Qs(e) {
  return Ye === null && Ai(), Ye.c ?? (Ye.c = new Map(n1(Ye) || void 0));
}
function n1(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function r1(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const o1 = [
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
function i1(e) {
  return o1.includes(e);
}
const s1 = {
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
function a1(e) {
  return e = e.toLowerCase(), s1[e] ?? e;
}
const l1 = ["touchstart", "touchmove"];
function u1(e) {
  return l1.includes(e);
}
const c1 = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function d1(e) {
  return c1.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function f1(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, ko(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function g1(e) {
  $e && /* @__PURE__ */ bt(e) !== null && Gs(e);
}
let La = !1;
function h1() {
  La || (La = !0, document.addEventListener(
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
function v1(e) {
  var t = Ue, n = We;
  qn(null), Un(null);
  try {
    return e();
  } finally {
    qn(t), Un(n);
  }
}
const hu = /* @__PURE__ */ new Set(), _s = /* @__PURE__ */ new Set();
function vu(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || no.call(t, i), !i.cancelBubble)
      return v1(() => n == null ? void 0 : n.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? ko(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function je(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = vu(e, t, n, i);
  (t === document.body || t === window || t === document) && lu(() => {
    t.removeEventListener(e, s, i);
  });
}
function Vi(e) {
  for (var t = 0; t < e.length; t++)
    hu.add(e[t]);
  for (var n of _s)
    n(e);
}
function no(e) {
  var p;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, o = ((p = e.composedPath) == null ? void 0 : p.call(e)) || [], i = (
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
    so(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var c = Ue, f = We;
    qn(null), Un(null);
    try {
      for (var d, g = []; i !== null; ) {
        var v = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var C = i["__" + r];
          if (C !== void 0 && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (Co(C)) {
              var [_, ...$] = C;
              _.apply(i, [e, ...$]);
            } else
              C.call(i, e);
        } catch (x) {
          d ? g.push(x) : d = x;
        }
        if (e.cancelBubble || v === t || v === null)
          break;
        i = v;
      }
      if (d) {
        for (let x of g)
          queueMicrotask(() => {
            throw x;
          });
        throw d;
      }
    } finally {
      e.__root = t, delete e.currentTarget, qn(c), Un(f);
    }
  }
}
function ea(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Tt(e, t) {
  var n = (
    /** @type {Effect} */
    We
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ne(e, t) {
  var n = (t & zl) !== 0, r = (t & pf) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if ($e)
      return Tt(De, null), De;
    o === void 0 && (o = ea(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ bt(o)));
    var s = (
      /** @type {TemplateNode} */
      r || jl ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ bt(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Tt(a, l);
    } else
      Tt(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function xe(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & zl) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if ($e)
      return Tt(De, null), De;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        ea(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ bt(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ bt(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ bt(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ bt(l);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ bt(u)
      ), f = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Tt(c, f);
    } else
      Tt(u, u);
    return u;
  };
}
function Re(e = "") {
  if (!$e) {
    var t = Tn(e + "");
    return Tt(t, t), t;
  }
  var n = De;
  return n.nodeType !== 3 && (n.before(n = Tn()), Ct(n)), Tt(n, n), n;
}
function Je() {
  if ($e)
    return Tt(De, null), De;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Tn();
  return e.append(t, n), Tt(t, n), e;
}
function O(e, t) {
  if ($e) {
    We.nodes_end = De, fn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function mn(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function pu(e, t) {
  return mu(e, t);
}
function p1(e, t) {
  ys(), t.intro = t.intro ?? !1;
  const n = t.target, r = $e, o = De;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ bt(n)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== Il); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ pn(i);
    if (!i)
      throw _r;
    Lt(!0), Ct(
      /** @type {Comment} */
      i
    ), fn();
    const s = mu(e, { ...t, anchor: i });
    if (De === null || De.nodeType !== 8 || /** @type {Comment} */
    De.data !== Zs)
      throw Ni(), _r;
    return Lt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === _r)
      return t.recover === !1 && Hf(), ys(), Gs(n), Lt(!1), pu(e, t);
    throw s;
  } finally {
    Lt(r), Ct(o);
  }
}
const mr = /* @__PURE__ */ new Map();
function mu(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  ys();
  var a = /* @__PURE__ */ new Set(), l = (f) => {
    for (var d = 0; d < f.length; d++) {
      var g = f[d];
      if (!a.has(g)) {
        a.add(g);
        var v = u1(g);
        t.addEventListener(g, no, { passive: v });
        var C = mr.get(g);
        C === void 0 ? (document.addEventListener(g, no, { passive: v }), mr.set(g, 1)) : mr.set(g, C + 1);
      }
    }
  };
  l(Fs(hu)), _s.add(l);
  var u = void 0, c = Qf(() => {
    var f = n ?? t.appendChild(Tn());
    return Hn(() => {
      if (i) {
        ce({});
        var d = (
          /** @type {ComponentContext} */
          Ye
        );
        d.c = i;
      }
      o && (r.$$events = o), $e && Tt(
        /** @type {TemplateNode} */
        f,
        null
      ), u = e(f, r) || {}, $e && (We.nodes_end = De), i && de();
    }), () => {
      var v;
      for (var d of a) {
        t.removeEventListener(d, no);
        var g = (
          /** @type {number} */
          mr.get(d)
        );
        --g === 0 ? (document.removeEventListener(d, no), mr.delete(d)) : mr.set(d, g);
      }
      _s.delete(l), f !== n && ((v = f.parentNode) == null || v.removeChild(f));
    };
  });
  return xs.set(u, c), u;
}
let xs = /* @__PURE__ */ new WeakMap();
function m1(e, t) {
  const n = xs.get(e);
  return n ? (xs.delete(e), n(t)) : Promise.resolve();
}
function Ee(e, t, n = !1) {
  $e && fn();
  var r = e, o = null, i = null, s = St, a = n ? Fr : 0, l = !1;
  const u = (f, d = !0) => {
    l = !0, c(d, f);
  }, c = (f, d) => {
    if (s === (s = f)) return;
    let g = !1;
    if ($e) {
      const v = (
        /** @type {Comment} */
        r.data === Ys
      );
      !!s === v && (r = ms(), Ct(r), Lt(!1), g = !0);
    }
    s ? (o ? co(o) : d && (o = Hn(() => d(r))), i && Ar(i, () => {
      i = null;
    })) : (i ? co(i) : d && (i = Hn(() => d(r))), o && Ar(o, () => {
      o = null;
    })), g && Lt(!0);
  };
  gr(() => {
    l = !1, t(u), l || c(null, null);
  }, a), $e && (r = De);
}
function Oi(e, t) {
  return t;
}
function y1(e, t, n, r) {
  for (var o = [], i = t.length, s = 0; s < i; s++)
    Js(t[s].e, o, !0);
  var a = i > 0 && o.length === 0 && n !== null;
  if (a) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Gs(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), In(e, t[0].prev, t[i - 1].next);
  }
  fu(o, () => {
    for (var u = 0; u < i; u++) {
      var c = t[u];
      a || (r.delete(c.k), In(e, c.prev, c.next)), qt(c.e, !a);
    }
  });
}
function It(e, t, n, r, o, i = null) {
  var s = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & Ol) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    s = $e ? Ct(
      /** @type {Comment | Text} */
      /* @__PURE__ */ bt(u)
    ) : u.appendChild(Tn());
  }
  $e && fn();
  var c = null, f = !1, d = /* @__PURE__ */ pe(() => {
    var g = n();
    return Co(g) ? g : g == null ? [] : Fs(g);
  });
  gr(() => {
    var g = h(d), v = g.length;
    if (f && v === 0)
      return;
    f = v === 0;
    let C = !1;
    if ($e) {
      var _ = (
        /** @type {Comment} */
        s.data === Ys
      );
      _ !== (v === 0) && (s = ms(), Ct(s), Lt(!1), C = !0);
    }
    if ($e) {
      for (var $ = null, p, x = 0; x < v; x++) {
        if (De.nodeType === 8 && /** @type {Comment} */
        De.data === Zs) {
          s = /** @type {Comment} */
          De, C = !0, Lt(!1);
          break;
        }
        var m = g[x], k = r(m, x);
        p = yu(
          De,
          a,
          $,
          null,
          m,
          k,
          x,
          o,
          t,
          n
        ), a.items.set(k, p), $ = p;
      }
      v > 0 && Ct(ms());
    }
    $e || w1(g, a, s, o, t, r, n), i !== null && (v === 0 ? c ? co(c) : c = Hn(() => i(s)) : c !== null && Ar(c, () => {
      c = null;
    })), C && Lt(!0), h(d);
  }), $e && (s = De);
}
function w1(e, t, n, r, o, i, s) {
  var E, H, b, S;
  var a = (o & cf) !== 0, l = (o & (Rs | Bs)) !== 0, u = e.length, c = t.items, f = t.first, d = f, g, v = null, C, _ = [], $ = [], p, x, m, k;
  if (a)
    for (k = 0; k < u; k += 1)
      p = e[k], x = i(p, k), m = c.get(x), m !== void 0 && ((E = m.a) == null || E.measure(), (C ?? (C = /* @__PURE__ */ new Set())).add(m));
  for (k = 0; k < u; k += 1) {
    if (p = e[k], x = i(p, k), m = c.get(x), m === void 0) {
      var P = d ? (
        /** @type {TemplateNode} */
        d.e.nodes_start
      ) : n;
      v = yu(
        P,
        t,
        v,
        v === null ? t.first : v.next,
        p,
        x,
        k,
        r,
        o,
        s
      ), c.set(x, v), _ = [], $ = [], d = v.next;
      continue;
    }
    if (l && _1(m, p, k, o), m.e.f & Pn && (co(m.e), a && ((H = m.a) == null || H.unfix(), (C ?? (C = /* @__PURE__ */ new Set())).delete(m))), m !== d) {
      if (g !== void 0 && g.has(m)) {
        if (_.length < $.length) {
          var N = $[0], M;
          v = N.prev;
          var D = _[0], A = _[_.length - 1];
          for (M = 0; M < _.length; M += 1)
            za(_[M], N, n);
          for (M = 0; M < $.length; M += 1)
            g.delete($[M]);
          In(t, D.prev, A.next), In(t, v, D), In(t, A, N), d = N, v = A, k -= 1, _ = [], $ = [];
        } else
          g.delete(m), za(m, d, n), In(t, m.prev, m.next), In(t, m, v === null ? t.first : v.next), In(t, v, m), v = m;
        continue;
      }
      for (_ = [], $ = []; d !== null && d.k !== x; )
        d.e.f & Pn || (g ?? (g = /* @__PURE__ */ new Set())).add(d), $.push(d), d = d.next;
      if (d === null)
        continue;
      m = d;
    }
    _.push(m), v = m, d = m.next;
  }
  if (d !== null || g !== void 0) {
    for (var V = g === void 0 ? [] : Fs(g); d !== null; )
      d.e.f & Pn || V.push(d), d = d.next;
    var z = V.length;
    if (z > 0) {
      var I = o & Ol && u === 0 ? n : null;
      if (a) {
        for (k = 0; k < z; k += 1)
          (b = V[k].a) == null || b.measure();
        for (k = 0; k < z; k += 1)
          (S = V[k].a) == null || S.fix();
      }
      y1(t, V, I, c);
    }
  }
  a && ko(() => {
    var T;
    if (C !== void 0)
      for (m of C)
        (T = m.a) == null || T.apply();
  }), We.first = t.first && t.first.e, We.last = v && v.e;
}
function _1(e, t, n, r) {
  r & Rs && ps(e.v, t), r & Bs ? ps(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function yu(e, t, n, r, o, i, s, a, l, u) {
  var c = (l & Rs) !== 0, f = (l & df) === 0, d = c ? f ? /* @__PURE__ */ Eo(o) : Nt(o) : o, g = l & Bs ? Nt(s) : s, v = {
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
    return v.e = Hn(() => a(e, d, g, u), $e), v.e.prev = n && n.e, v.e.next = r && r.e, n === null ? t.first = v : (n.next = v, n.e.next = v.e), r !== null && (r.prev = v, r.e.prev = v.e), v;
  } finally {
  }
}
function za(e, t, n) {
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
      /* @__PURE__ */ pn(i)
    );
    o.before(i), i = s;
  }
}
function In(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function wu(e, t, n, r, o) {
  var i = e, s = "", a;
  gr(() => {
    if (s === (s = t() ?? "")) {
      $e && fn();
      return;
    }
    a !== void 0 && (qt(a), a = void 0), s !== "" && (a = Hn(() => {
      if ($e) {
        De.data;
        for (var l = fn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ pn(l);
        if (l === null)
          throw Ni(), _r;
        Tt(De, u), i = Ct(l);
        return;
      }
      var c = s + "", f = ea(c);
      Tt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ bt(f),
        /** @type {TemplateNode} */
        f.lastChild
      ), i.before(f);
    }));
  });
}
function pt(e, t, n, r, o) {
  var a;
  $e && fn();
  var i = (a = t.$$slots) == null ? void 0 : a[n], s = !1;
  i === !0 && (i = t[n === "default" ? "children" : n], s = !0), i === void 0 || i(e, s ? () => r : r);
}
function x1(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const n in e.$$slots)
    t[n] = !0;
  return t;
}
function sr(e, t, ...n) {
  var r = e, o = ft, i;
  gr(() => {
    o !== (o = t()) && (i && (qt(i), i = null), i = Hn(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Fr), $e && (r = De);
}
function _u(e, t, n) {
  $e && fn();
  var r = e, o, i;
  gr(() => {
    o !== (o = t()) && (i && (Ar(i), i = null), o && (i = Hn(() => n(r, o))));
  }, Fr), $e && (r = De);
}
function b1(e, t, n, r, o, i) {
  let s = $e;
  $e && fn();
  var a, l, u = null;
  $e && De.nodeType === 1 && (u = /** @type {Element} */
  De, fn());
  var c = (
    /** @type {TemplateNode} */
    $e ? De : e
  ), f;
  gr(() => {
    const d = t() || null;
    var g = d === "svg" ? Rl : null;
    d !== a && (f && (d === null ? Ar(f, () => {
      f = null, l = null;
    }) : d === l ? co(f) : qt(f)), d && d !== l && (f = Hn(() => {
      if (u = $e ? (
        /** @type {Element} */
        u
      ) : g ? document.createElementNS(g, d) : document.createElement(d), Tt(u, u), r) {
        $e && d1(d) && u.append(document.createComment(""));
        var v = (
          /** @type {TemplateNode} */
          $e ? /* @__PURE__ */ bt(u) : u.appendChild(Tn())
        );
        $e && (v === null ? Lt(!1) : Ct(v)), r(u, v);
      }
      We.nodes_end = u, c.before(u);
    })), a = d, a && (l = a));
  }, Fr), s && (Lt(!0), Ct(c));
}
function Qe(e, t) {
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
function vt(e, t, n) {
  Ot(() => {
    var r = gn(() => t(e, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      qr(() => {
        var s = n();
        U(s), o && qs(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function xu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = xu(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function C1() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = xu(e)) && (r && (r += " "), r += t);
  return r;
}
function yn(e) {
  return typeof e == "object" ? C1(e) : e ?? "";
}
function bu(e) {
  if ($e) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          ae(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          ae(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, $f(n), h1();
  }
}
function k1(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function ae(e, t, n, r) {
  var o = e.__attributes ?? (e.__attributes = {});
  $e && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[_f] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Cu(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function nn(e, t, n, r, o = !1, i = !1, s = !1) {
  let a = $e && i;
  a && Lt(!1);
  var l = t || {}, u = e.tagName === "OPTION";
  for (var c in t)
    c in n || (n[c] = null);
  n.class && (n.class = yn(n.class)), r !== void 0 && (n.class = n.class ? n.class + " " + r : r);
  var f = Cu(e), d = (
    /** @type {Record<string, unknown>} **/
    e.__attributes ?? (e.__attributes = {})
  );
  for (const p in n) {
    let x = n[p];
    if (u && p === "value" && x == null) {
      e.value = e.__value = "", l[p] = x;
      continue;
    }
    var g = l[p];
    if (x !== g) {
      l[p] = x;
      var v = p[0] + p[1];
      if (v !== "$$") {
        if (v === "on") {
          const m = {}, k = "$$" + p;
          let P = p.slice(2);
          var C = i1(P);
          if (r1(P) && (P = P.slice(0, -7), m.capture = !0), !C && g) {
            if (x != null) continue;
            e.removeEventListener(P, l[k], m), l[k] = null;
          }
          if (x != null)
            if (C)
              e[`__${P}`] = x, Vi([P]);
            else {
              let N = function(M) {
                l[p].call(this, M);
              };
              l[k] = vu(P, e, N, m);
            }
          else C && (e[`__${P}`] = void 0);
        } else if (p === "style" && x != null)
          e.style.cssText = x + "";
        else if (p === "autofocus")
          f1(
            /** @type {HTMLElement} */
            e,
            !!x
          );
        else if (!i && (p === "__value" || p === "value" && x != null))
          e.value = e.__value = x;
        else if (p === "selected" && u)
          k1(
            /** @type {HTMLOptionElement} */
            e,
            x
          );
        else {
          var _ = p;
          o || (_ = a1(_));
          var $ = _ === "defaultValue" || _ === "defaultChecked";
          if (x == null && !i && !$)
            if (d[p] = null, _ === "value" || _ === "checked") {
              let m = (
                /** @type {HTMLInputElement} */
                e
              );
              const k = t === void 0;
              if (_ === "value") {
                let P = m.defaultValue;
                m.removeAttribute(_), m.defaultValue = P, m.value = m.__value = k ? P : null;
              } else {
                let P = m.defaultChecked;
                m.removeAttribute(_), m.defaultChecked = P, m.checked = k ? P : !1;
              }
            } else
              e.removeAttribute(p);
          else $ || f.includes(_) && (i || typeof x != "string") ? e[_] = x : typeof x != "function" && ae(e, _, x);
        }
        p === "style" && "__styles" in e && (e.__styles = {});
      }
    }
  }
  return a && Lt(!0), l;
}
var Ia = /* @__PURE__ */ new Map();
function Cu(e) {
  var t = Ia.get(e.nodeName);
  if (t) return t;
  Ia.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = Zl(r);
    for (var i in n)
      n[i].set && t.push(i);
    r = Ks(r);
  }
  return t;
}
function hr(e, t, n) {
  var r = e.__className, o = ku(t, n);
  $e && e.getAttribute("class") === o ? e.__className = o : (r !== o || $e && e.getAttribute("class") !== o) && (o === "" ? e.removeAttribute("class") : e.setAttribute("class", o), e.__className = o);
}
function Vr(e, t, n) {
  var r = e.__className, o = ku(t, n);
  $e && e.className === o ? e.__className = o : (r !== o || $e && e.className !== o) && (t == null ? e.removeAttribute("class") : e.className = o, e.__className = o);
}
function ku(e, t) {
  return (e ?? "") + (t ? " " + t : "");
}
function it(e, t, n) {
  if (n) {
    if (e.classList.contains(t)) return;
    e.classList.add(t);
  } else {
    if (!e.classList.contains(t)) return;
    e.classList.remove(t);
  }
}
function at(e, t, n, r) {
  var o = e.__styles ?? (e.__styles = {});
  o[t] !== n && (o[t] = n, n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, ""));
}
var Bn, Mr, bo, Ei, Eu;
const $i = class $i {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    tr(this, Ei);
    /** */
    tr(this, Bn, /* @__PURE__ */ new WeakMap());
    /** @type {ResizeObserver | undefined} */
    tr(this, Mr);
    /** @type {ResizeObserverOptions} */
    tr(this, bo);
    Jr(this, bo, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = st(this, Bn).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), st(this, Bn).set(t, r), Ta(this, Ei, Eu).call(this).observe(t, st(this, bo)), () => {
      var o = st(this, Bn).get(t);
      o.delete(n), o.size === 0 && (st(this, Bn).delete(t), st(this, Mr).unobserve(t));
    };
  }
};
Bn = new WeakMap(), Mr = new WeakMap(), bo = new WeakMap(), Ei = new WeakSet(), Eu = function() {
  return st(this, Mr) ?? Jr(this, Mr, new ResizeObserver(
    /** @param {any} entries */
    (t) => {
      for (var n of t) {
        $i.entries.set(n.target, n);
        for (var r of st(this, Bn).get(n.target) || [])
          r(n);
      }
    }
  ));
}, /** @static */
wt($i, "entries", /* @__PURE__ */ new WeakMap());
let bs = $i;
var E1 = /* @__PURE__ */ new bs({
  box: "border-box"
});
function Ra(e, t, n) {
  var r = E1.observe(e, () => n(e[t]));
  Ot(() => (gn(() => n(e[t])), r));
}
function Ba(e, t) {
  return e === t || (e == null ? void 0 : e[Xn]) === t;
}
function An(e = {}, t, n, r) {
  return Ot(() => {
    var o, i;
    return qr(() => {
      o = i, i = [], gn(() => {
        e !== n(...i) && (t(e, ...i), o && Ba(n(...o), e) && t(null, ...o));
      });
    }), () => {
      ko(() => {
        i && Ba(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Ae(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Ye
  ), n = t.l.u;
  if (!n) return;
  let r = () => U(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ Te(() => {
      let a = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], a = !0);
      return a && o++, o;
    });
    r = () => h(s);
  }
  n.b.length && jf(() => {
    Ya(t, r), ao(n.b);
  }), Hr(() => {
    const o = gn(() => n.m.map(kf));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Hr(() => {
    Ya(t, r), ao(n.a);
  });
}
function Ya(e, t) {
  if (e.l.s)
    for (const n of e.l.s) h(n);
  t();
}
function ze(e, t) {
  var i;
  var n = (
    /** @type {Record<string, Function[] | Function>} */
    (i = e.$$events) == null ? void 0 : i[t.type]
  ), r = Co(n) ? n.slice() : n == null ? [] : [n];
  for (var o of r)
    o.call(this, t);
}
function wn(e) {
  Ye === null && Ai(), Xr && Ye.l !== null ? S1(Ye).m.push(e) : Hr(() => {
    const t = gn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function ta(e) {
  Ye === null && Ai(), wn(() => () => gn(e));
}
function $1(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function Li() {
  const e = Ye;
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
      const s = Co(o) ? o.slice() : [o], a = $1(
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
function S1(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function na(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), ft;
  const r = gn(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const yr = [];
function Zt(e, t) {
  return {
    subscribe: ye(e, t).subscribe
  };
}
function ye(e, t = ft) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(a) {
    if (qs(e, a) && (e = a, n)) {
      const l = !yr.length;
      for (const u of r)
        u[1](), yr.push(u, e);
      if (l) {
        for (let u = 0; u < yr.length; u += 2)
          yr[u][0](yr[u + 1]);
        yr.length = 0;
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
function Wn(e, t, n) {
  const r = !Array.isArray(e), o = r ? [e] : e;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = t.length < 2;
  return Zt(n, (s, a) => {
    let l = !1;
    const u = [];
    let c = 0, f = ft;
    const d = () => {
      if (c)
        return;
      f();
      const v = t(r ? u[0] : u, s, a);
      i ? s(v) : f = typeof v == "function" ? v : ft;
    }, g = o.map(
      (v, C) => na(
        v,
        (_) => {
          u[C] = _, c &= ~(1 << C), l && d();
        },
        () => {
          c |= 1 << C;
        }
      )
    );
    return l = !0, d(), function() {
      ao(g), f(), l = !1;
    };
  });
}
function K(e) {
  let t;
  return na(e, (n) => t = n)(), t;
}
let Ro = !1, Cs = Symbol();
function j(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ Eo(void 0),
    unsubscribe: ft
  });
  if (r.store !== e && !(Cs in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = ft;
    else {
      var o = !0;
      r.unsubscribe = na(e, (i) => {
        o ? r.source.v = i : G(r.source, i);
      }), o = !1;
    }
  return e && Cs in n ? K(e) : h(r.source);
}
function P1(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = ft), e;
}
function li(e, t) {
  return e.set(t), t;
}
function tt() {
  const e = {};
  function t() {
    lu(() => {
      for (var n in e)
        e[n].unsubscribe();
      so(e, Cs, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function N1(e) {
  var t = Ro;
  try {
    return Ro = !1, [e(), Ro];
  } finally {
    Ro = t;
  }
}
const M1 = {
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
function kt(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    M1
  );
}
const T1 = {
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
      Ll
    )), e.special[t](n), Ha(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), Ha(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function ot(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: Nt(0) }, T1);
}
const H1 = {
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
      const i = Nn(o, t);
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
        const o = Nn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === Xn || t === Ws) return !1;
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
function dt(...e) {
  return new Proxy({ props: e }, H1);
}
function w(e, t, n, r) {
  var P;
  var o = (n & ff) !== 0, i = !Xr || (n & gf) !== 0, s = (n & hf) !== 0, a = (n & vf) !== 0, l = !1, u;
  s ? [u, l] = N1(() => (
    /** @type {V} */
    e[t]
  )) : u = /** @type {V} */
  e[t];
  var c = Xn in e || Ws in e, f = s && (((P = Nn(e, t)) == null ? void 0 : P.set) ?? (c && t in e && ((N) => e[t] = N))) || void 0, d = (
    /** @type {V} */
    r
  ), g = !0, v = !1, C = () => (v = !0, g && (g = !1, a ? d = gn(
    /** @type {() => V} */
    r
  ) : d = /** @type {V} */
  r), d);
  u === void 0 && r !== void 0 && (f && i && Af(), u = C(), f && f(u));
  var _;
  if (i)
    _ = () => {
      var N = (
        /** @type {V} */
        e[t]
      );
      return N === void 0 ? C() : (g = !0, v = !1, N);
    };
  else {
    var $ = (o ? Te : pe)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    $.f |= yf, _ = () => {
      var N = h($);
      return N !== void 0 && (d = /** @type {V} */
      void 0), N === void 0 ? d : N;
    };
  }
  if (!(n & Ll))
    return _;
  if (f) {
    var p = e.$$legacy;
    return function(N, M) {
      return arguments.length > 0 ? ((!i || !M || p || l) && f(M ? _() : N), N) : _();
    };
  }
  var x = !1, m = /* @__PURE__ */ Eo(u), k = /* @__PURE__ */ Te(() => {
    var N = _(), M = h(m);
    return x ? (x = !1, M) : m.v = N;
  });
  return o || (k.equals = Us), function(N, M) {
    if (arguments.length > 0) {
      const D = M ? h(k) : i && s ? Vt(N) : N;
      return k.equals(D) || (x = !0, G(m, D), v && d !== void 0 && (d = D), gn(() => h(k))), N;
    }
    return h(k);
  };
}
function A1(e) {
  return new D1(e);
}
var En, Xt;
class D1 {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    tr(this, En);
    /** @type {Record<string, any>} */
    tr(this, Xt);
    var i;
    var n = /* @__PURE__ */ new Map(), r = (s, a) => {
      var l = /* @__PURE__ */ Eo(a);
      return n.set(s, l), l;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, a) {
          return h(n.get(a) ?? r(a, Reflect.get(s, a)));
        },
        has(s, a) {
          return a === Ws ? !0 : (h(n.get(a) ?? r(a, Reflect.get(s, a))), Reflect.has(s, a));
        },
        set(s, a, l) {
          return G(n.get(a) ?? r(a, l), l), Reflect.set(s, a, l);
        }
      }
    );
    Jr(this, Xt, (t.hydrate ? p1 : pu)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((i = t == null ? void 0 : t.props) != null && i.$$host) || t.sync === !1) && y(), Jr(this, En, o.$$events);
    for (const s of Object.keys(st(this, Xt)))
      s === "$set" || s === "$destroy" || s === "$on" || so(this, s, {
        get() {
          return st(this, Xt)[s];
        },
        /** @param {any} value */
        set(a) {
          st(this, Xt)[s] = a;
        },
        enumerable: !0
      });
    st(this, Xt).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(o, s);
    }, st(this, Xt).$destroy = () => {
      m1(st(this, Xt));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    st(this, Xt).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    st(this, En)[t] = st(this, En)[t] || [];
    const r = (...o) => n.call(this, ...o);
    return st(this, En)[t].push(r), () => {
      st(this, En)[t] = st(this, En)[t].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    st(this, Xt).$destroy();
  }
}
En = new WeakMap(), Xt = new WeakMap();
let $u;
typeof HTMLElement == "function" && ($u = class extends HTMLElement {
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
          o !== "default" && (s.name = o), O(i, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, r = V1(this);
      for (const o of this.$$s)
        o in r && (o === "default" && !this.$$d.children ? (this.$$d.children = t(o), n.default = !0) : n[o] = t(o));
      for (const o of this.attributes) {
        const i = this.$$g_p(o.name);
        i in this.$$d || (this.$$d[i] = Uo(i, o.value, this.$$p_d, "toProp"));
      }
      for (const o in this.$$p_d)
        !(o in this.$$d) && this[o] !== void 0 && (this.$$d[o] = this[o], delete this[o]);
      this.$$c = A1({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = Jf(() => {
        qr(() => {
          var o;
          this.$$r = !0;
          for (const i of ri(this.$$c)) {
            if (!((o = this.$$p_d[i]) != null && o.reflect)) continue;
            this.$$d[i] = this.$$c[i];
            const s = Uo(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Uo(t, r, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [t]: this.$$d[t] }));
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
    return ri(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function Uo(e, t, n, r) {
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
function V1(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function re(e, t, n, r, o, i) {
  let s = class extends $u {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return ri(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return ri(t).forEach((a) => {
    so(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        var f;
        l = Uo(a, l, t), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var c = (f = Nn(u, a)) == null ? void 0 : f.get;
          c ? u[a] = l : u.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    so(s.prototype, a, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[a];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
function Et(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = Et(e[n])) !== "" && (t += (t && " ") + r);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
var O1 = { value: () => {
} };
function zi() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Go(n);
}
function Go(e) {
  this._ = e;
}
function L1(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Go.prototype = zi.prototype = {
  constructor: Go,
  on: function(e, t) {
    var n = this._, r = L1(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = z1(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = Za(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = Za(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Go(e);
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
function z1(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Za(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = O1, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var ks = "http://www.w3.org/1999/xhtml";
const Xa = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: ks,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Ii(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Xa.hasOwnProperty(t) ? { space: Xa[t], local: e } : e;
}
function I1(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === ks && t.documentElement.namespaceURI === ks ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function R1(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Su(e) {
  var t = Ii(e);
  return (t.local ? R1 : I1)(t);
}
function B1() {
}
function ra(e) {
  return e == null ? B1 : function() {
    return this.querySelector(e);
  };
}
function Y1(e) {
  typeof e != "function" && (e = ra(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, u, c = 0; c < s; ++c)
      (l = i[c]) && (u = e.call(l, l.__data__, c, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[c] = u);
  return new Rt(r, this._parents);
}
function Z1(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function X1() {
  return [];
}
function Pu(e) {
  return e == null ? X1 : function() {
    return this.querySelectorAll(e);
  };
}
function W1(e) {
  return function() {
    return Z1(e.apply(this, arguments));
  };
}
function F1(e) {
  typeof e == "function" ? e = W1(e) : e = Pu(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(e.call(l, l.__data__, u, s)), o.push(l));
  return new Rt(r, o);
}
function Nu(e) {
  return function() {
    return this.matches(e);
  };
}
function Mu(e) {
  return function(t) {
    return t.matches(e);
  };
}
var K1 = Array.prototype.find;
function q1(e) {
  return function() {
    return K1.call(this.children, e);
  };
}
function U1() {
  return this.firstElementChild;
}
function G1(e) {
  return this.select(e == null ? U1 : q1(typeof e == "function" ? e : Mu(e)));
}
var j1 = Array.prototype.filter;
function J1() {
  return Array.from(this.children);
}
function Q1(e) {
  return function() {
    return j1.call(this.children, e);
  };
}
function eg(e) {
  return this.selectAll(e == null ? J1 : Q1(typeof e == "function" ? e : Mu(e)));
}
function tg(e) {
  typeof e != "function" && (e = Nu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Rt(r, this._parents);
}
function Tu(e) {
  return new Array(e.length);
}
function ng() {
  return new Rt(this._enter || this._groups.map(Tu), this._parents);
}
function ui(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
ui.prototype = {
  constructor: ui,
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
function rg(e) {
  return function() {
    return e;
  };
}
function og(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, u = i.length; s < u; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new ui(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function ig(e, t, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), c = t.length, f = i.length, d = new Array(c), g;
  for (a = 0; a < c; ++a)
    (l = t[a]) && (d[a] = g = s.call(l, l.__data__, a, t) + "", u.has(g) ? o[a] = l : u.set(g, l));
  for (a = 0; a < f; ++a)
    g = s.call(e, i[a], a, i) + "", (l = u.get(g)) ? (r[a] = l, l.__data__ = i[a], u.delete(g)) : n[a] = new ui(e, i[a]);
  for (a = 0; a < c; ++a)
    (l = t[a]) && u.get(d[a]) === l && (o[a] = l);
}
function sg(e) {
  return e.__data__;
}
function ag(e, t) {
  if (!arguments.length) return Array.from(this, sg);
  var n = t ? ig : og, r = this._parents, o = this._groups;
  typeof e != "function" && (e = rg(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var c = r[u], f = o[u], d = f.length, g = lg(e.call(c, c && c.__data__, u, r)), v = g.length, C = a[u] = new Array(v), _ = s[u] = new Array(v), $ = l[u] = new Array(d);
    n(c, f, C, _, $, g, t);
    for (var p = 0, x = 0, m, k; p < v; ++p)
      if (m = C[p]) {
        for (p >= x && (x = p + 1); !(k = _[x]) && ++x < v; ) ;
        m._next = k || null;
      }
  }
  return s = new Rt(s, r), s._enter = a, s._exit = l, s;
}
function lg(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function ug() {
  return new Rt(this._exit || this._groups.map(Tu), this._parents);
}
function cg(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function dg(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], c = r[l], f = u.length, d = a[l] = new Array(f), g, v = 0; v < f; ++v)
      (g = u[v] || c[v]) && (d[v] = g);
  for (; l < o; ++l)
    a[l] = n[l];
  return new Rt(a, this._parents);
}
function fg() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function gg(e) {
  e || (e = hg);
  function t(f, d) {
    return f && d ? e(f.__data__, d.__data__) : !f - !d;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), u, c = 0; c < a; ++c)
      (u = s[c]) && (l[c] = u);
    l.sort(t);
  }
  return new Rt(o, this._parents).order();
}
function hg(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function vg() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function pg() {
  return Array.from(this);
}
function mg() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function yg() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function wg() {
  return !this.node();
}
function _g(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function xg(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function bg(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Cg(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function kg(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Eg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function $g(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Sg(e, t) {
  var n = Ii(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? bg : xg : typeof t == "function" ? n.local ? $g : Eg : n.local ? kg : Cg)(n, t));
}
function Hu(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Pg(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Ng(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function Mg(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function Tg(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Pg : typeof t == "function" ? Mg : Ng)(e, t, n ?? "")) : Or(this.node(), e);
}
function Or(e, t) {
  return e.style.getPropertyValue(t) || Hu(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Hg(e) {
  return function() {
    delete this[e];
  };
}
function Ag(e, t) {
  return function() {
    this[e] = t;
  };
}
function Dg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Vg(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Hg : typeof t == "function" ? Dg : Ag)(e, t)) : this.node()[e];
}
function Au(e) {
  return e.trim().split(/^|\s+/);
}
function oa(e) {
  return e.classList || new Du(e);
}
function Du(e) {
  this._node = e, this._names = Au(e.getAttribute("class") || "");
}
Du.prototype = {
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
function Vu(e, t) {
  for (var n = oa(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Ou(e, t) {
  for (var n = oa(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Og(e) {
  return function() {
    Vu(this, e);
  };
}
function Lg(e) {
  return function() {
    Ou(this, e);
  };
}
function zg(e, t) {
  return function() {
    (t.apply(this, arguments) ? Vu : Ou)(this, e);
  };
}
function Ig(e, t) {
  var n = Au(e + "");
  if (arguments.length < 2) {
    for (var r = oa(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? zg : t ? Og : Lg)(n, t));
}
function Rg() {
  this.textContent = "";
}
function Bg(e) {
  return function() {
    this.textContent = e;
  };
}
function Yg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Zg(e) {
  return arguments.length ? this.each(e == null ? Rg : (typeof e == "function" ? Yg : Bg)(e)) : this.node().textContent;
}
function Xg() {
  this.innerHTML = "";
}
function Wg(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Fg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Kg(e) {
  return arguments.length ? this.each(e == null ? Xg : (typeof e == "function" ? Fg : Wg)(e)) : this.node().innerHTML;
}
function qg() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Ug() {
  return this.each(qg);
}
function Gg() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function jg() {
  return this.each(Gg);
}
function Jg(e) {
  var t = typeof e == "function" ? e : Su(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Qg() {
  return null;
}
function eh(e, t) {
  var n = typeof e == "function" ? e : Su(e), r = t == null ? Qg : typeof t == "function" ? t : ra(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function th() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function nh() {
  return this.each(th);
}
function rh() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function oh() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function ih(e) {
  return this.select(e ? oh : rh);
}
function sh(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function ah(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function lh(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function uh(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function ch(e, t, n) {
  return function() {
    var r = this.__on, o, i = ah(t);
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
function dh(e, t, n) {
  var r = lh(e + ""), o, i = r.length, s;
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
  for (a = t ? ch : uh, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function Lu(e, t, n) {
  var r = Hu(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function fh(e, t) {
  return function() {
    return Lu(this, e, t);
  };
}
function gh(e, t) {
  return function() {
    return Lu(this, e, t.apply(this, arguments));
  };
}
function hh(e, t) {
  return this.each((typeof t == "function" ? gh : fh)(e, t));
}
function* vh() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var zu = [null];
function Rt(e, t) {
  this._groups = e, this._parents = t;
}
function $o() {
  return new Rt([[document.documentElement]], zu);
}
function ph() {
  return this;
}
Rt.prototype = $o.prototype = {
  constructor: Rt,
  select: Y1,
  selectAll: F1,
  selectChild: G1,
  selectChildren: eg,
  filter: tg,
  data: ag,
  enter: ng,
  exit: ug,
  join: cg,
  merge: dg,
  selection: ph,
  order: fg,
  sort: gg,
  call: vg,
  nodes: pg,
  node: mg,
  size: yg,
  empty: wg,
  each: _g,
  attr: Sg,
  style: Tg,
  property: Vg,
  classed: Ig,
  text: Zg,
  html: Kg,
  raise: Ug,
  lower: jg,
  append: Jg,
  insert: eh,
  remove: nh,
  clone: ih,
  datum: sh,
  on: dh,
  dispatch: hh,
  [Symbol.iterator]: vh
};
function Wt(e) {
  return typeof e == "string" ? new Rt([[document.querySelector(e)]], [document.documentElement]) : new Rt([[e]], zu);
}
function mh(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function Jt(e, t) {
  if (e = mh(e), t === void 0 && (t = e.currentTarget), t) {
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
const yh = { passive: !1 }, fo = { capture: !0, passive: !1 };
function ts(e) {
  e.stopImmediatePropagation();
}
function Cr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Iu(e) {
  var t = e.document.documentElement, n = Wt(e).on("dragstart.drag", Cr, fo);
  "onselectstart" in t ? n.on("selectstart.drag", Cr, fo) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Ru(e, t) {
  var n = e.document.documentElement, r = Wt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Cr, fo), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Bo = (e) => () => e;
function Es(e, {
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
Es.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function wh(e) {
  return !e.ctrlKey && !e.button;
}
function _h() {
  return this.parentNode;
}
function xh(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function bh() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Ch() {
  var e = wh, t = _h, n = xh, r = bh, o = {}, i = zi("start", "drag", "end"), s = 0, a, l, u, c, f = 0;
  function d(m) {
    m.on("mousedown.drag", g).filter(r).on("touchstart.drag", _).on("touchmove.drag", $, yh).on("touchend.drag touchcancel.drag", p).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(m, k) {
    if (!(c || !e.call(this, m, k))) {
      var P = x(this, t.call(this, m, k), m, k, "mouse");
      P && (Wt(m.view).on("mousemove.drag", v, fo).on("mouseup.drag", C, fo), Iu(m.view), ts(m), u = !1, a = m.clientX, l = m.clientY, P("start", m));
    }
  }
  function v(m) {
    if (Cr(m), !u) {
      var k = m.clientX - a, P = m.clientY - l;
      u = k * k + P * P > f;
    }
    o.mouse("drag", m);
  }
  function C(m) {
    Wt(m.view).on("mousemove.drag mouseup.drag", null), Ru(m.view, u), Cr(m), o.mouse("end", m);
  }
  function _(m, k) {
    if (e.call(this, m, k)) {
      var P = m.changedTouches, N = t.call(this, m, k), M = P.length, D, A;
      for (D = 0; D < M; ++D)
        (A = x(this, N, m, k, P[D].identifier, P[D])) && (ts(m), A("start", m, P[D]));
    }
  }
  function $(m) {
    var k = m.changedTouches, P = k.length, N, M;
    for (N = 0; N < P; ++N)
      (M = o[k[N].identifier]) && (Cr(m), M("drag", m, k[N]));
  }
  function p(m) {
    var k = m.changedTouches, P = k.length, N, M;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), N = 0; N < P; ++N)
      (M = o[k[N].identifier]) && (ts(m), M("end", m, k[N]));
  }
  function x(m, k, P, N, M, D) {
    var A = i.copy(), V = Jt(D || P, k), z, I, E;
    if ((E = n.call(m, new Es("beforestart", {
      sourceEvent: P,
      target: d,
      identifier: M,
      active: s,
      x: V[0],
      y: V[1],
      dx: 0,
      dy: 0,
      dispatch: A
    }), N)) != null)
      return z = E.x - V[0] || 0, I = E.y - V[1] || 0, function H(b, S, T) {
        var L = V, B;
        switch (b) {
          case "start":
            o[M] = H, B = s++;
            break;
          case "end":
            delete o[M], --s;
          // falls through
          case "drag":
            V = Jt(T || S, k), B = s;
            break;
        }
        A.call(
          b,
          m,
          new Es(b, {
            sourceEvent: S,
            subject: E,
            target: d,
            identifier: M,
            active: B,
            x: V[0] + z,
            y: V[1] + I,
            dx: V[0] - L[0],
            dy: V[1] - L[1],
            dispatch: A
          }),
          N
        );
      };
  }
  return d.filter = function(m) {
    return arguments.length ? (e = typeof m == "function" ? m : Bo(!!m), d) : e;
  }, d.container = function(m) {
    return arguments.length ? (t = typeof m == "function" ? m : Bo(m), d) : t;
  }, d.subject = function(m) {
    return arguments.length ? (n = typeof m == "function" ? m : Bo(m), d) : n;
  }, d.touchable = function(m) {
    return arguments.length ? (r = typeof m == "function" ? m : Bo(!!m), d) : r;
  }, d.on = function() {
    var m = i.on.apply(i, arguments);
    return m === i ? d : m;
  }, d.clickDistance = function(m) {
    return arguments.length ? (f = (m = +m) * m, d) : Math.sqrt(f);
  }, d;
}
function ia(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Bu(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function So() {
}
var go = 0.7, ci = 1 / go, kr = "\\s*([+-]?\\d+)\\s*", ho = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", cn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", kh = /^#([0-9a-f]{3,8})$/, Eh = new RegExp(`^rgb\\(${kr},${kr},${kr}\\)$`), $h = new RegExp(`^rgb\\(${cn},${cn},${cn}\\)$`), Sh = new RegExp(`^rgba\\(${kr},${kr},${kr},${ho}\\)$`), Ph = new RegExp(`^rgba\\(${cn},${cn},${cn},${ho}\\)$`), Nh = new RegExp(`^hsl\\(${ho},${cn},${cn}\\)$`), Mh = new RegExp(`^hsla\\(${ho},${cn},${cn},${ho}\\)$`), Wa = {
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
ia(So, vo, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Fa,
  // Deprecated! Use color.formatHex.
  formatHex: Fa,
  formatHex8: Th,
  formatHsl: Hh,
  formatRgb: Ka,
  toString: Ka
});
function Fa() {
  return this.rgb().formatHex();
}
function Th() {
  return this.rgb().formatHex8();
}
function Hh() {
  return Yu(this).formatHsl();
}
function Ka() {
  return this.rgb().formatRgb();
}
function vo(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = kh.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? qa(t) : n === 3 ? new Mt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Yo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Yo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Eh.exec(e)) ? new Mt(t[1], t[2], t[3], 1) : (t = $h.exec(e)) ? new Mt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Sh.exec(e)) ? Yo(t[1], t[2], t[3], t[4]) : (t = Ph.exec(e)) ? Yo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Nh.exec(e)) ? ja(t[1], t[2] / 100, t[3] / 100, 1) : (t = Mh.exec(e)) ? ja(t[1], t[2] / 100, t[3] / 100, t[4]) : Wa.hasOwnProperty(e) ? qa(Wa[e]) : e === "transparent" ? new Mt(NaN, NaN, NaN, 0) : null;
}
function qa(e) {
  return new Mt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Yo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Mt(e, t, n, r);
}
function Ah(e) {
  return e instanceof So || (e = vo(e)), e ? (e = e.rgb(), new Mt(e.r, e.g, e.b, e.opacity)) : new Mt();
}
function $s(e, t, n, r) {
  return arguments.length === 1 ? Ah(e) : new Mt(e, t, n, r ?? 1);
}
function Mt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
ia(Mt, $s, Bu(So, {
  brighter(e) {
    return e = e == null ? ci : Math.pow(ci, e), new Mt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? go : Math.pow(go, e), new Mt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Mt(or(this.r), or(this.g), or(this.b), di(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ua,
  // Deprecated! Use color.formatHex.
  formatHex: Ua,
  formatHex8: Dh,
  formatRgb: Ga,
  toString: Ga
}));
function Ua() {
  return `#${rr(this.r)}${rr(this.g)}${rr(this.b)}`;
}
function Dh() {
  return `#${rr(this.r)}${rr(this.g)}${rr(this.b)}${rr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ga() {
  const e = di(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${or(this.r)}, ${or(this.g)}, ${or(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function di(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function or(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function rr(e) {
  return e = or(e), (e < 16 ? "0" : "") + e.toString(16);
}
function ja(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Qt(e, t, n, r);
}
function Yu(e) {
  if (e instanceof Qt) return new Qt(e.h, e.s, e.l, e.opacity);
  if (e instanceof So || (e = vo(e)), !e) return new Qt();
  if (e instanceof Qt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new Qt(s, a, l, e.opacity);
}
function Vh(e, t, n, r) {
  return arguments.length === 1 ? Yu(e) : new Qt(e, t, n, r ?? 1);
}
function Qt(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
ia(Qt, Vh, Bu(So, {
  brighter(e) {
    return e = e == null ? ci : Math.pow(ci, e), new Qt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? go : Math.pow(go, e), new Qt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Mt(
      ns(e >= 240 ? e - 240 : e + 120, o, r),
      ns(e, o, r),
      ns(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Qt(Ja(this.h), Zo(this.s), Zo(this.l), di(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = di(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Ja(this.h)}, ${Zo(this.s) * 100}%, ${Zo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Ja(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Zo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ns(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Zu = (e) => () => e;
function Oh(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Lh(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function zh(e) {
  return (e = +e) == 1 ? Xu : function(t, n) {
    return n - t ? Lh(t, n, e) : Zu(isNaN(t) ? n : t);
  };
}
function Xu(e, t) {
  var n = t - e;
  return n ? Oh(e, n) : Zu(isNaN(e) ? t : e);
}
const Qa = function e(t) {
  var n = zh(t);
  function r(o, i) {
    var s = n((o = $s(o)).r, (i = $s(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = Xu(o.opacity, i.opacity);
    return function(c) {
      return o.r = s(c), o.g = a(c), o.b = l(c), o.opacity = u(c), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function Rn(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
var Ss = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, rs = new RegExp(Ss.source, "g");
function Ih(e) {
  return function() {
    return e;
  };
}
function Rh(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Bh(e, t) {
  var n = Ss.lastIndex = rs.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = Ss.exec(e)) && (o = rs.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: Rn(r, o) })), n = rs.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? Rh(l[0].x) : Ih(t) : (t = l.length, function(u) {
    for (var c = 0, f; c < t; ++c) a[(f = l[c]).i] = f.x(u);
    return a.join("");
  });
}
var el = 180 / Math.PI, Ps = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Wu(e, t, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * r) && (n -= e * l, r -= t * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), e * r < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * el,
    skewX: Math.atan(l) * el,
    scaleX: s,
    scaleY: a
  };
}
var Xo;
function Yh(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Ps : Wu(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Zh(e) {
  return e == null || (Xo || (Xo = document.createElementNS("http://www.w3.org/2000/svg", "g")), Xo.setAttribute("transform", e), !(e = Xo.transform.baseVal.consolidate())) ? Ps : (e = e.matrix, Wu(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Fu(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, c, f, d, g, v) {
    if (u !== f || c !== d) {
      var C = g.push("translate(", null, t, null, n);
      v.push({ i: C - 4, x: Rn(u, f) }, { i: C - 2, x: Rn(c, d) });
    } else (f || d) && g.push("translate(" + f + t + d + n);
  }
  function s(u, c, f, d) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), d.push({ i: f.push(o(f) + "rotate(", null, r) - 2, x: Rn(u, c) })) : c && f.push(o(f) + "rotate(" + c + r);
  }
  function a(u, c, f, d) {
    u !== c ? d.push({ i: f.push(o(f) + "skewX(", null, r) - 2, x: Rn(u, c) }) : c && f.push(o(f) + "skewX(" + c + r);
  }
  function l(u, c, f, d, g, v) {
    if (u !== f || c !== d) {
      var C = g.push(o(g) + "scale(", null, ",", null, ")");
      v.push({ i: C - 4, x: Rn(u, f) }, { i: C - 2, x: Rn(c, d) });
    } else (f !== 1 || d !== 1) && g.push(o(g) + "scale(" + f + "," + d + ")");
  }
  return function(u, c) {
    var f = [], d = [];
    return u = e(u), c = e(c), i(u.translateX, u.translateY, c.translateX, c.translateY, f, d), s(u.rotate, c.rotate, f, d), a(u.skewX, c.skewX, f, d), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, f, d), u = c = null, function(g) {
      for (var v = -1, C = d.length, _; ++v < C; ) f[(_ = d[v]).i] = _.x(g);
      return f.join("");
    };
  };
}
var Xh = Fu(Yh, "px, ", "px)", "deg)"), Wh = Fu(Zh, ", ", ")", ")"), Fh = 1e-12;
function tl(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Kh(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function qh(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Uh = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], c = s[0], f = s[1], d = s[2], g = c - a, v = f - l, C = g * g + v * v, _, $;
    if (C < Fh)
      $ = Math.log(d / u) / t, _ = function(N) {
        return [
          a + N * g,
          l + N * v,
          u * Math.exp(t * N * $)
        ];
      };
    else {
      var p = Math.sqrt(C), x = (d * d - u * u + r * C) / (2 * u * n * p), m = (d * d - u * u - r * C) / (2 * d * n * p), k = Math.log(Math.sqrt(x * x + 1) - x), P = Math.log(Math.sqrt(m * m + 1) - m);
      $ = (P - k) / t, _ = function(N) {
        var M = N * $, D = tl(k), A = u / (n * p) * (D * qh(t * M + k) - Kh(k));
        return [
          a + A * g,
          l + A * v,
          u * D / tl(t * M + k)
        ];
      };
    }
    return _.duration = $ * 1e3 * t / Math.SQRT2, _;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
}(Math.SQRT2, 2, 4);
var Lr = 0, ro = 0, eo = 0, Ku = 1e3, fi, oo, gi = 0, ar = 0, Ri = 0, po = typeof performance == "object" && performance.now ? performance : Date, qu = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function sa() {
  return ar || (qu(Gh), ar = po.now() + Ri);
}
function Gh() {
  ar = 0;
}
function hi() {
  this._call = this._time = this._next = null;
}
hi.prototype = Uu.prototype = {
  constructor: hi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? sa() : +n) + (t == null ? 0 : +t), !this._next && oo !== this && (oo ? oo._next = this : fi = this, oo = this), this._call = e, this._time = n, Ns();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ns());
  }
};
function Uu(e, t, n) {
  var r = new hi();
  return r.restart(e, t, n), r;
}
function jh() {
  sa(), ++Lr;
  for (var e = fi, t; e; )
    (t = ar - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Lr;
}
function nl() {
  ar = (gi = po.now()) + Ri, Lr = ro = 0;
  try {
    jh();
  } finally {
    Lr = 0, Qh(), ar = 0;
  }
}
function Jh() {
  var e = po.now(), t = e - gi;
  t > Ku && (Ri -= t, gi = e);
}
function Qh() {
  for (var e, t = fi, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : fi = n);
  oo = e, Ns(r);
}
function Ns(e) {
  if (!Lr) {
    ro && (ro = clearTimeout(ro));
    var t = e - ar;
    t > 24 ? (e < 1 / 0 && (ro = setTimeout(nl, e - po.now() - Ri)), eo && (eo = clearInterval(eo))) : (eo || (gi = po.now(), eo = setInterval(Jh, Ku)), Lr = 1, qu(nl));
  }
}
function rl(e, t, n) {
  var r = new hi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var ev = zi("start", "end", "cancel", "interrupt"), tv = [], Gu = 0, ol = 1, Ms = 2, jo = 3, il = 4, Ts = 5, Jo = 6;
function Bi(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  nv(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: ev,
    tween: tv,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Gu
  });
}
function aa(e, t) {
  var n = sn(e, t);
  if (n.state > Gu) throw new Error("too late; already scheduled");
  return n;
}
function _n(e, t) {
  var n = sn(e, t);
  if (n.state > jo) throw new Error("too late; already running");
  return n;
}
function sn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function nv(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Uu(i, 0, n.time);
  function i(u) {
    n.state = ol, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var c, f, d, g;
    if (n.state !== ol) return l();
    for (c in r)
      if (g = r[c], g.name === n.name) {
        if (g.state === jo) return rl(s);
        g.state === il ? (g.state = Jo, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[c]) : +c < t && (g.state = Jo, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[c]);
      }
    if (rl(function() {
      n.state === jo && (n.state = il, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = Ms, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Ms) {
      for (n.state = jo, o = new Array(d = n.tween.length), c = 0, f = -1; c < d; ++c)
        (g = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++f] = g);
      o.length = f + 1;
    }
  }
  function a(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Ts, 1), f = -1, d = o.length; ++f < d; )
      o[f].call(e, c);
    n.state === Ts && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = Jo, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function Qo(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > Ms && r.state < Ts, r.state = Jo, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function rv(e) {
  return this.each(function() {
    Qo(this, e);
  });
}
function ov(e, t) {
  var n, r;
  return function() {
    var o = _n(this, e), i = o.tween;
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
function iv(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = _n(this, e), s = i.tween;
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
function sv(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = sn(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? ov : iv)(n, e, t));
}
function la(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = _n(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return sn(o, r).value[t];
  };
}
function ju(e, t) {
  var n;
  return (typeof t == "number" ? Rn : t instanceof vo ? Qa : (n = vo(t)) ? (t = n, Qa) : Bh)(e, t);
}
function av(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function lv(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function uv(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function cv(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function dv(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function fv(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function gv(e, t) {
  var n = Ii(e), r = n === "transform" ? Wh : ju;
  return this.attrTween(e, typeof t == "function" ? (n.local ? fv : dv)(n, r, la(this, "attr." + e, t)) : t == null ? (n.local ? lv : av)(n) : (n.local ? cv : uv)(n, r, t));
}
function hv(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function vv(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function pv(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && vv(e, i)), n;
  }
  return o._value = t, o;
}
function mv(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && hv(e, i)), n;
  }
  return o._value = t, o;
}
function yv(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Ii(e);
  return this.tween(n, (r.local ? pv : mv)(r, t));
}
function wv(e, t) {
  return function() {
    aa(this, e).delay = +t.apply(this, arguments);
  };
}
function _v(e, t) {
  return t = +t, function() {
    aa(this, e).delay = t;
  };
}
function xv(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? wv : _v)(t, e)) : sn(this.node(), t).delay;
}
function bv(e, t) {
  return function() {
    _n(this, e).duration = +t.apply(this, arguments);
  };
}
function Cv(e, t) {
  return t = +t, function() {
    _n(this, e).duration = t;
  };
}
function kv(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? bv : Cv)(t, e)) : sn(this.node(), t).duration;
}
function Ev(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    _n(this, e).ease = t;
  };
}
function $v(e) {
  var t = this._id;
  return arguments.length ? this.each(Ev(t, e)) : sn(this.node(), t).ease;
}
function Sv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    _n(this, e).ease = n;
  };
}
function Pv(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Sv(this._id, e));
}
function Nv(e) {
  typeof e != "function" && (e = Nu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Dn(r, this._parents, this._name, this._id);
}
function Mv(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], u = n[a], c = l.length, f = s[a] = new Array(c), d, g = 0; g < c; ++g)
      (d = l[g] || u[g]) && (f[g] = d);
  for (; a < r; ++a)
    s[a] = t[a];
  return new Dn(s, this._parents, this._name, this._id);
}
function Tv(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function Hv(e, t, n) {
  var r, o, i = Tv(t) ? aa : _n;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function Av(e, t) {
  var n = this._id;
  return arguments.length < 2 ? sn(this.node(), n).on.on(e) : this.each(Hv(n, e, t));
}
function Dv(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Vv() {
  return this.on("end.remove", Dv(this._id));
}
function Ov(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = ra(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), c, f, d = 0; d < l; ++d)
      (c = a[d]) && (f = e.call(c, c.__data__, d, a)) && ("__data__" in c && (f.__data__ = c.__data__), u[d] = f, Bi(u[d], t, n, d, u, sn(c, n)));
  return new Dn(i, this._parents, t, n);
}
function Lv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Pu(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, c, f = 0; f < u; ++f)
      if (c = l[f]) {
        for (var d = e.call(c, c.__data__, f, l), g, v = sn(c, n), C = 0, _ = d.length; C < _; ++C)
          (g = d[C]) && Bi(g, t, n, C, d, v);
        i.push(d), s.push(c);
      }
  return new Dn(i, s, t, n);
}
var zv = $o.prototype.constructor;
function Iv() {
  return new zv(this._groups, this._parents);
}
function Rv(e, t) {
  var n, r, o;
  return function() {
    var i = Or(this, e), s = (this.style.removeProperty(e), Or(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function Ju(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Bv(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = Or(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Yv(e, t, n) {
  var r, o, i;
  return function() {
    var s = Or(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), Or(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function Zv(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = _n(this, e), u = l.on, c = l.value[i] == null ? a || (a = Ju(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(s, o = c), l.on = r;
  };
}
function Xv(e, t, n) {
  var r = (e += "") == "transform" ? Xh : ju;
  return t == null ? this.styleTween(e, Rv(e, r)).on("end.style." + e, Ju(e)) : typeof t == "function" ? this.styleTween(e, Yv(e, r, la(this, "style." + e, t))).each(Zv(this._id, e)) : this.styleTween(e, Bv(e, r, t), n).on("end.style." + e, null);
}
function Wv(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function Fv(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && Wv(e, s, n)), r;
  }
  return i._value = t, i;
}
function Kv(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, Fv(e, t, n ?? ""));
}
function qv(e) {
  return function() {
    this.textContent = e;
  };
}
function Uv(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function Gv(e) {
  return this.tween("text", typeof e == "function" ? Uv(la(this, "text", e)) : qv(e == null ? "" : e + ""));
}
function jv(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function Jv(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && jv(o)), t;
  }
  return r._value = e, r;
}
function Qv(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, Jv(e));
}
function e0() {
  for (var e = this._name, t = this._id, n = Qu(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var c = sn(l, t);
        Bi(l, e, n, u, s, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new Dn(r, this._parents, e, n);
}
function t0() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = _n(this, r), c = u.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var n0 = 0;
function Dn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Qu() {
  return ++n0;
}
var Cn = $o.prototype;
Dn.prototype = {
  constructor: Dn,
  select: Ov,
  selectAll: Lv,
  selectChild: Cn.selectChild,
  selectChildren: Cn.selectChildren,
  filter: Nv,
  merge: Mv,
  selection: Iv,
  transition: e0,
  call: Cn.call,
  nodes: Cn.nodes,
  node: Cn.node,
  size: Cn.size,
  empty: Cn.empty,
  each: Cn.each,
  on: Av,
  attr: gv,
  attrTween: yv,
  style: Xv,
  styleTween: Kv,
  text: Gv,
  textTween: Qv,
  remove: Vv,
  tween: sv,
  delay: xv,
  duration: kv,
  ease: $v,
  easeVarying: Pv,
  end: t0,
  [Symbol.iterator]: Cn[Symbol.iterator]
};
function r0(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var o0 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: r0
};
function i0(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function s0(e) {
  var t, n;
  e instanceof Dn ? (t = e._id, e = e._name) : (t = Qu(), (n = o0).time = sa(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && Bi(l, e, t, u, s, n || i0(l, t));
  return new Dn(r, this._parents, e, t);
}
$o.prototype.interrupt = rv;
$o.prototype.transition = s0;
const Wo = (e) => () => e;
function a0(e, {
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
function $n(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
$n.prototype = {
  constructor: $n,
  scale: function(e) {
    return e === 1 ? this : new $n(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new $n(this.k, this.x + this.k * e, this.y + this.k * t);
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
var Yi = new $n(1, 0, 0);
ec.prototype = $n.prototype;
function ec(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Yi;
  return e.__zoom;
}
function os(e) {
  e.stopImmediatePropagation();
}
function to(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function l0(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function u0() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function sl() {
  return this.__zoom || Yi;
}
function c0(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function d0() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function f0(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function tc() {
  var e = l0, t = u0, n = f0, r = c0, o = d0, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = Uh, u = zi("start", "zoom", "end"), c, f, d, g = 500, v = 150, C = 0, _ = 10;
  function $(E) {
    E.property("__zoom", sl).on("wheel.zoom", M, { passive: !1 }).on("mousedown.zoom", D).on("dblclick.zoom", A).filter(o).on("touchstart.zoom", V).on("touchmove.zoom", z).on("touchend.zoom touchcancel.zoom", I).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  $.transform = function(E, H, b, S) {
    var T = E.selection ? E.selection() : E;
    T.property("__zoom", sl), E !== T ? k(E, H, b, S) : T.interrupt().each(function() {
      P(this, arguments).event(S).start().zoom(null, typeof H == "function" ? H.apply(this, arguments) : H).end();
    });
  }, $.scaleBy = function(E, H, b, S) {
    $.scaleTo(E, function() {
      var T = this.__zoom.k, L = typeof H == "function" ? H.apply(this, arguments) : H;
      return T * L;
    }, b, S);
  }, $.scaleTo = function(E, H, b, S) {
    $.transform(E, function() {
      var T = t.apply(this, arguments), L = this.__zoom, B = b == null ? m(T) : typeof b == "function" ? b.apply(this, arguments) : b, X = L.invert(B), q = typeof H == "function" ? H.apply(this, arguments) : H;
      return n(x(p(L, q), B, X), T, s);
    }, b, S);
  }, $.translateBy = function(E, H, b, S) {
    $.transform(E, function() {
      return n(this.__zoom.translate(
        typeof H == "function" ? H.apply(this, arguments) : H,
        typeof b == "function" ? b.apply(this, arguments) : b
      ), t.apply(this, arguments), s);
    }, null, S);
  }, $.translateTo = function(E, H, b, S, T) {
    $.transform(E, function() {
      var L = t.apply(this, arguments), B = this.__zoom, X = S == null ? m(L) : typeof S == "function" ? S.apply(this, arguments) : S;
      return n(Yi.translate(X[0], X[1]).scale(B.k).translate(
        typeof H == "function" ? -H.apply(this, arguments) : -H,
        typeof b == "function" ? -b.apply(this, arguments) : -b
      ), L, s);
    }, S, T);
  };
  function p(E, H) {
    return H = Math.max(i[0], Math.min(i[1], H)), H === E.k ? E : new $n(H, E.x, E.y);
  }
  function x(E, H, b) {
    var S = H[0] - b[0] * E.k, T = H[1] - b[1] * E.k;
    return S === E.x && T === E.y ? E : new $n(E.k, S, T);
  }
  function m(E) {
    return [(+E[0][0] + +E[1][0]) / 2, (+E[0][1] + +E[1][1]) / 2];
  }
  function k(E, H, b, S) {
    E.on("start.zoom", function() {
      P(this, arguments).event(S).start();
    }).on("interrupt.zoom end.zoom", function() {
      P(this, arguments).event(S).end();
    }).tween("zoom", function() {
      var T = this, L = arguments, B = P(T, L).event(S), X = t.apply(T, L), q = b == null ? m(X) : typeof b == "function" ? b.apply(T, L) : b, fe = Math.max(X[1][0] - X[0][0], X[1][1] - X[0][1]), ee = T.__zoom, F = typeof H == "function" ? H.apply(T, L) : H, ge = l(ee.invert(q).concat(fe / ee.k), F.invert(q).concat(fe / F.k));
      return function(we) {
        if (we === 1) we = F;
        else {
          var be = ge(we), he = fe / be[2];
          we = new $n(he, q[0] - be[0] * he, q[1] - be[1] * he);
        }
        B.zoom(null, we);
      };
    });
  }
  function P(E, H, b) {
    return !b && E.__zooming || new N(E, H);
  }
  function N(E, H) {
    this.that = E, this.args = H, this.active = 0, this.sourceEvent = null, this.extent = t.apply(E, H), this.taps = 0;
  }
  N.prototype = {
    event: function(E) {
      return E && (this.sourceEvent = E), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(E, H) {
      return this.mouse && E !== "mouse" && (this.mouse[1] = H.invert(this.mouse[0])), this.touch0 && E !== "touch" && (this.touch0[1] = H.invert(this.touch0[0])), this.touch1 && E !== "touch" && (this.touch1[1] = H.invert(this.touch1[0])), this.that.__zoom = H, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(E) {
      var H = Wt(this.that).datum();
      u.call(
        E,
        this.that,
        new a0(E, {
          sourceEvent: this.sourceEvent,
          target: $,
          transform: this.that.__zoom,
          dispatch: u
        }),
        H
      );
    }
  };
  function M(E, ...H) {
    if (!e.apply(this, arguments)) return;
    var b = P(this, H).event(E), S = this.__zoom, T = Math.max(i[0], Math.min(i[1], S.k * Math.pow(2, r.apply(this, arguments)))), L = Jt(E);
    if (b.wheel)
      (b.mouse[0][0] !== L[0] || b.mouse[0][1] !== L[1]) && (b.mouse[1] = S.invert(b.mouse[0] = L)), clearTimeout(b.wheel);
    else {
      if (S.k === T) return;
      b.mouse = [L, S.invert(L)], Qo(this), b.start();
    }
    to(E), b.wheel = setTimeout(B, v), b.zoom("mouse", n(x(p(S, T), b.mouse[0], b.mouse[1]), b.extent, s));
    function B() {
      b.wheel = null, b.end();
    }
  }
  function D(E, ...H) {
    if (d || !e.apply(this, arguments)) return;
    var b = E.currentTarget, S = P(this, H, !0).event(E), T = Wt(E.view).on("mousemove.zoom", q, !0).on("mouseup.zoom", fe, !0), L = Jt(E, b), B = E.clientX, X = E.clientY;
    Iu(E.view), os(E), S.mouse = [L, this.__zoom.invert(L)], Qo(this), S.start();
    function q(ee) {
      if (to(ee), !S.moved) {
        var F = ee.clientX - B, ge = ee.clientY - X;
        S.moved = F * F + ge * ge > C;
      }
      S.event(ee).zoom("mouse", n(x(S.that.__zoom, S.mouse[0] = Jt(ee, b), S.mouse[1]), S.extent, s));
    }
    function fe(ee) {
      T.on("mousemove.zoom mouseup.zoom", null), Ru(ee.view, S.moved), to(ee), S.event(ee).end();
    }
  }
  function A(E, ...H) {
    if (e.apply(this, arguments)) {
      var b = this.__zoom, S = Jt(E.changedTouches ? E.changedTouches[0] : E, this), T = b.invert(S), L = b.k * (E.shiftKey ? 0.5 : 2), B = n(x(p(b, L), S, T), t.apply(this, H), s);
      to(E), a > 0 ? Wt(this).transition().duration(a).call(k, B, S, E) : Wt(this).call($.transform, B, S, E);
    }
  }
  function V(E, ...H) {
    if (e.apply(this, arguments)) {
      var b = E.touches, S = b.length, T = P(this, H, E.changedTouches.length === S).event(E), L, B, X, q;
      for (os(E), B = 0; B < S; ++B)
        X = b[B], q = Jt(X, this), q = [q, this.__zoom.invert(q), X.identifier], T.touch0 ? !T.touch1 && T.touch0[2] !== q[2] && (T.touch1 = q, T.taps = 0) : (T.touch0 = q, L = !0, T.taps = 1 + !!c);
      c && (c = clearTimeout(c)), L && (T.taps < 2 && (f = q[0], c = setTimeout(function() {
        c = null;
      }, g)), Qo(this), T.start());
    }
  }
  function z(E, ...H) {
    if (this.__zooming) {
      var b = P(this, H).event(E), S = E.changedTouches, T = S.length, L, B, X, q;
      for (to(E), L = 0; L < T; ++L)
        B = S[L], X = Jt(B, this), b.touch0 && b.touch0[2] === B.identifier ? b.touch0[0] = X : b.touch1 && b.touch1[2] === B.identifier && (b.touch1[0] = X);
      if (B = b.that.__zoom, b.touch1) {
        var fe = b.touch0[0], ee = b.touch0[1], F = b.touch1[0], ge = b.touch1[1], we = (we = F[0] - fe[0]) * we + (we = F[1] - fe[1]) * we, be = (be = ge[0] - ee[0]) * be + (be = ge[1] - ee[1]) * be;
        B = p(B, Math.sqrt(we / be)), X = [(fe[0] + F[0]) / 2, (fe[1] + F[1]) / 2], q = [(ee[0] + ge[0]) / 2, (ee[1] + ge[1]) / 2];
      } else if (b.touch0) X = b.touch0[0], q = b.touch0[1];
      else return;
      b.zoom("touch", n(x(B, X, q), b.extent, s));
    }
  }
  function I(E, ...H) {
    if (this.__zooming) {
      var b = P(this, H).event(E), S = E.changedTouches, T = S.length, L, B;
      for (os(E), d && clearTimeout(d), d = setTimeout(function() {
        d = null;
      }, g), L = 0; L < T; ++L)
        B = S[L], b.touch0 && b.touch0[2] === B.identifier ? delete b.touch0 : b.touch1 && b.touch1[2] === B.identifier && delete b.touch1;
      if (b.touch1 && !b.touch0 && (b.touch0 = b.touch1, delete b.touch1), b.touch0) b.touch0[1] = this.__zoom.invert(b.touch0[0]);
      else if (b.end(), b.taps === 2 && (B = Jt(B, this), Math.hypot(f[0] - B[0], f[1] - B[1]) < _)) {
        var X = Wt(this).on("dblclick.zoom");
        X && X.apply(this, arguments);
      }
    }
  }
  return $.wheelDelta = function(E) {
    return arguments.length ? (r = typeof E == "function" ? E : Wo(+E), $) : r;
  }, $.filter = function(E) {
    return arguments.length ? (e = typeof E == "function" ? E : Wo(!!E), $) : e;
  }, $.touchable = function(E) {
    return arguments.length ? (o = typeof E == "function" ? E : Wo(!!E), $) : o;
  }, $.extent = function(E) {
    return arguments.length ? (t = typeof E == "function" ? E : Wo([[+E[0][0], +E[0][1]], [+E[1][0], +E[1][1]]]), $) : t;
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
    return arguments.length ? (C = (E = +E) * E, $) : Math.sqrt(C);
  }, $.tapDistance = function(E) {
    return arguments.length ? (_ = +E, $) : _;
  }, $;
}
const Po = {
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
  error014: () => "useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID."
}, vi = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
];
var lr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(lr || (lr = {}));
var Fn;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(Fn || (Fn = {}));
var pi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(pi || (pi = {}));
const Hs = {
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
var mo;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(mo || (mo = {}));
var ke;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(ke || (ke = {}));
const al = {
  [ke.Left]: ke.Right,
  [ke.Right]: ke.Left,
  [ke.Top]: ke.Bottom,
  [ke.Bottom]: ke.Top
};
function g0(e, t) {
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
function ll(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t != null && t.has(i) || r.push(o);
  }), r.length && n(r);
}
function h0(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const v0 = (e) => "id" in e && "source" in e && "target" in e, p0 = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), ua = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), No = (e, t = [0, 0]) => {
  const { width: n, height: r } = Jn(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, m0 = (e, t = { nodeOrigin: [0, 0], nodeLookup: void 0 }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : ua(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? mi(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Zi(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Xi(n);
}, Mo = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = mi(r);
      n = Zi(n, o);
    }
  }), Xi(n);
}, nc = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...To(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: f = !0, hidden: d = !1 } = u;
    if (s && !f || d)
      continue;
    const g = c.width ?? u.width ?? u.initialWidth ?? null, v = c.height ?? u.height ?? u.initialHeight ?? null, C = yo(a, Ir(u)), _ = (g ?? 0) * (v ?? 0), $ = i && C > 0;
    (!u.internals.handleBounds || $ || C >= _ || u.dragging) && l.push(u);
  }
  return l;
}, As = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function ul(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && ((t == null ? void 0 : t.includeHiddenNodes) || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function cl({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!1);
  const a = Mo(e), l = da(a, t, n, (s == null ? void 0 : s.minZoom) ?? o, (s == null ? void 0 : s.maxZoom) ?? i, (s == null ? void 0 : s.padding) ?? 0.1);
  return await r.setViewport(l, { duration: s == null ? void 0 : s.duration }), Promise.resolve(!0);
}
function y0({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: u } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, c = s.origin ?? r;
  let f = o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i == null || i("005", Po.error005());
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
  const d = Rr(f) ? ur(t, f, s.measured) : t;
  return {
    position: {
      x: d.x - l + s.measured.width * c[0],
      y: d.y - u + s.measured.height * c[1]
    },
    positionAbsolute: d
  };
}
async function rc({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((d) => d.id)), s = [];
  for (const d of n) {
    if (d.deletable === !1)
      continue;
    const g = i.has(d.id), v = !g && d.parentId && s.find((C) => C.id === d.parentId);
    (g || v) && s.push(d);
  }
  const a = new Set(t.map((d) => d.id)), l = r.filter((d) => d.deletable !== !1), c = As(s, l);
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
const zr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), ur = (e = { x: 0, y: 0 }, t, n) => ({
  x: zr(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: zr(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function oc(e, t, n) {
  const { width: r, height: o } = Jn(n), { x: i, y: s } = n.internals.positionAbsolute;
  return ur(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const dl = (e, t, n) => e < t ? zr(Math.abs(e - t), 1, t) / t : e > n ? -zr(Math.abs(e - n), 1, t) / t : 0, ic = (e, t, n = 15, r = 40) => {
  const o = dl(e.x, r, t.width - r) * n, i = dl(e.y, r, t.height - r) * n;
  return [o, i];
}, Zi = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Ds = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Xi = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Ir = (e, t = [0, 0]) => {
  var o, i;
  const { x: n, y: r } = ua(e) ? e.internals.positionAbsolute : No(e, t);
  return {
    x: n,
    y: r,
    width: ((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, mi = (e, t = [0, 0]) => {
  var o, i;
  const { x: n, y: r } = ua(e) ? e.internals.positionAbsolute : No(e, t);
  return {
    x: n,
    y: r,
    x2: n + (((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, sc = (e, t) => Xi(Zi(Ds(e), Ds(t))), yo = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, fl = (e) => Sn(e.width) && Sn(e.height) && Sn(e.x) && Sn(e.y), Sn = (e) => !isNaN(e) && isFinite(e), w0 = (e, t) => {
}, ca = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), To = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? ca(a, s) : a;
}, ac = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
}), da = (e, t, n, r, o, i) => {
  const s = t / (e.width * (1 + i)), a = n / (e.height * (1 + i)), l = Math.min(s, a), u = zr(l, r, o), c = e.x + e.width / 2, f = e.y + e.height / 2, d = t / 2 - c * u, g = n / 2 - f * u;
  return { x: d, y: g, zoom: u };
}, yi = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function Rr(e) {
  return e !== void 0 && e !== "parent";
}
function Jn(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function lc(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function _0(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function is(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = Mn(e), a = To({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: s - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? ca(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const fa = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), x0 = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, b0 = ["INPUT", "SELECT", "TEXTAREA"];
function C0(e) {
  var r, o;
  const t = ((o = (r = e.composedPath) == null ? void 0 : r.call(e)) == null ? void 0 : o[0]) || e.target;
  return (t == null ? void 0 : t.nodeType) !== 1 ? !1 : b0.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const uc = (e) => "clientX" in e, Mn = (e, t) => {
  var i, s;
  const n = uc(e), r = n ? e.clientX : (i = e.touches) == null ? void 0 : i[0].clientX, o = n ? e.clientY : (s = e.touches) == null ? void 0 : s[0].clientY;
  return {
    x: r - ((t == null ? void 0 : t.left) ?? 0),
    y: o - ((t == null ? void 0 : t.top) ?? 0)
  };
}, gl = (e, t, n, r, o) => {
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
      ...fa(s)
    };
  });
};
function k0({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, c = Math.abs(l - e), f = Math.abs(u - t);
  return [l, u, c, f];
}
function Fo(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function hl({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case ke.Left:
      return [t - Fo(t - r, i), n];
    case ke.Right:
      return [t + Fo(r - t, i), n];
    case ke.Top:
      return [t, n - Fo(n - o, i)];
    case ke.Bottom:
      return [t, n + Fo(o - n, i)];
  }
}
function cc({ sourceX: e, sourceY: t, sourcePosition: n = ke.Bottom, targetX: r, targetY: o, targetPosition: i = ke.Top, curvature: s = 0.25 }) {
  const [a, l] = hl({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [u, c] = hl({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [f, d, g, v] = k0({
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
function dc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function E0({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const i = n || t.selected || e.selected, s = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (i ? s : 0);
}
function $0({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = Zi(mi(e), mi(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return yo(s, Xi(i)) > 0;
}
const S0 = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, P0 = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), N0 = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return v0(e) ? n = { ...e } : n = {
    ...e,
    id: S0(e)
  }, P0(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Vs({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = dc({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const vl = {
  [ke.Left]: { x: -1, y: 0 },
  [ke.Right]: { x: 1, y: 0 },
  [ke.Top]: { x: 0, y: -1 },
  [ke.Bottom]: { x: 0, y: 1 }
}, M0 = ({ source: e, sourcePosition: t = ke.Bottom, target: n }) => t === ke.Left || t === ke.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, pl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function T0({ source: e, sourcePosition: t = ke.Bottom, target: n, targetPosition: r = ke.Top, center: o, offset: i }) {
  const s = vl[t], a = vl[r], l = { x: e.x + s.x * i, y: e.y + s.y * i }, u = { x: n.x + a.x * i, y: n.y + a.y * i }, c = M0({
    source: l,
    sourcePosition: t,
    target: u
  }), f = c.x !== 0 ? "x" : "y", d = c[f];
  let g = [], v, C;
  const _ = { x: 0, y: 0 }, $ = { x: 0, y: 0 }, [p, x, m, k] = dc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (s[f] * a[f] === -1) {
    v = o.x ?? p, C = o.y ?? x;
    const N = [
      { x: v, y: l.y },
      { x: v, y: u.y }
    ], M = [
      { x: l.x, y: C },
      { x: u.x, y: C }
    ];
    s[f] === d ? g = f === "x" ? N : M : g = f === "x" ? M : N;
  } else {
    const N = [{ x: l.x, y: u.y }], M = [{ x: u.x, y: l.y }];
    if (f === "x" ? g = s.x === d ? M : N : g = s.y === d ? N : M, t === r) {
      const I = Math.abs(e[f] - n[f]);
      if (I <= i) {
        const E = Math.min(i - 1, i - I);
        s[f] === d ? _[f] = (l[f] > e[f] ? -1 : 1) * E : $[f] = (u[f] > n[f] ? -1 : 1) * E;
      }
    }
    if (t !== r) {
      const I = f === "x" ? "y" : "x", E = s[f] === a[I], H = l[I] > u[I], b = l[I] < u[I];
      (s[f] === 1 && (!E && H || E && b) || s[f] !== 1 && (!E && b || E && H)) && (g = f === "x" ? N : M);
    }
    const D = { x: l.x + _.x, y: l.y + _.y }, A = { x: u.x + $.x, y: u.y + $.y }, V = Math.max(Math.abs(D.x - g[0].x), Math.abs(A.x - g[0].x)), z = Math.max(Math.abs(D.y - g[0].y), Math.abs(A.y - g[0].y));
    V >= z ? (v = (D.x + A.x) / 2, C = g[0].y) : (v = g[0].x, C = (D.y + A.y) / 2);
  }
  return [[
    e,
    { x: l.x + _.x, y: l.y + _.y },
    ...g,
    { x: u.x + $.x, y: u.y + $.y },
    n
  ], v, C, m, k];
}
function H0(e, t, n, r) {
  const o = Math.min(pl(e, t) / 2, pl(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, c = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * c}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function wi({ sourceX: e, sourceY: t, sourcePosition: n = ke.Bottom, targetX: r, targetY: o, targetPosition: i = ke.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20 }) {
  const [c, f, d, g, v] = T0({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u
  });
  return [c.reduce((_, $, p) => {
    let x = "";
    return p > 0 && p < c.length - 1 ? x = H0(c[p - 1], $, c[p + 1], s) : x = `${p === 0 ? "M" : "L"}${$.x} ${$.y}`, _ += x, _;
  }, ""), f, d, g, v];
}
function ml(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function A0(e) {
  var f;
  const { sourceNode: t, targetNode: n } = e;
  if (!ml(t) || !ml(n))
    return null;
  const r = t.internals.handleBounds || yl(t.handles), o = n.internals.handleBounds || yl(n.handles), i = wl((r == null ? void 0 : r.source) ?? [], e.sourceHandle), s = wl(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === lr.Strict ? (o == null ? void 0 : o.target) ?? [] : ((o == null ? void 0 : o.target) ?? []).concat((o == null ? void 0 : o.source) ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return (f = e.onError) == null || f.call(e, "008", Po.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = (i == null ? void 0 : i.position) || ke.Bottom, l = (s == null ? void 0 : s.position) || ke.Top, u = wo(t, i, a), c = wo(n, s, l);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: c.x,
    targetY: c.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function yl(e) {
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
function wo(e, t, n = ke.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? Jn(e);
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
function wl(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Os(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function D0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = Os(l, t);
      i.has(u) || (s.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function V0(e, t, n, r, o) {
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
const ga = {
  nodeOrigin: [0, 0],
  nodeExtent: vi,
  elevateNodesOnSelect: !0,
  defaults: {}
}, O0 = {
  ...ga,
  checkEquality: !0
};
function ha(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function L0(e, t, n) {
  const r = ha(ga, n);
  for (const o of e.values())
    if (o.parentId)
      va(o, e, t, r);
    else {
      const i = No(o, r.nodeOrigin), s = Rr(o.extent) ? o.extent : r.nodeExtent, a = ur(i, s, Jn(o));
      o.internals.positionAbsolute = a;
    }
}
function fc(e, t, n, r) {
  var a, l;
  const o = ha(O0, r), i = new Map(t), s = o != null && o.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let c = i.get(u.id);
    if (o.checkEquality && u === (c == null ? void 0 : c.internals.userNode))
      t.set(u.id, c);
    else {
      const f = No(u, o.nodeOrigin), d = Rr(u.extent) ? u.extent : o.nodeExtent, g = ur(f, d, Jn(u));
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
          z: gc(u, s),
          userNode: u
        }
      }, t.set(u.id, c);
    }
    u.parentId && va(c, t, n, r);
  }
}
function z0(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function va(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: s } = ha(ga, r), a = e.parentId, l = t.get(a);
  if (!l) {
    console.warn(`Parent node ${a} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  z0(e, n);
  const u = o ? 1e3 : 0, { x: c, y: f, z: d } = I0(e, l, i, s, u), { positionAbsolute: g } = e.internals, v = c !== g.x || f !== g.y;
  (v || d !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: v ? { x: c, y: f } : g,
      z: d
    }
  });
}
function gc(e, t) {
  return (Sn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function I0(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = Jn(e), l = No(e, n), u = Rr(e.extent) ? ur(l, e.extent, a) : l;
  let c = ur({ x: i + u.x, y: s + u.y }, r, a);
  e.extent === "parent" && (c = oc(c, a, t));
  const f = gc(e, o), d = t.internals.z ?? 0;
  return {
    x: c.x,
    y: c.y,
    z: d > f ? d : f
  };
}
function R0(e, t, n, r = [0, 0]) {
  var s;
  const o = [], i = /* @__PURE__ */ new Map();
  for (const a of e) {
    const l = t.get(a.parentId);
    if (!l)
      continue;
    const u = ((s = i.get(a.parentId)) == null ? void 0 : s.expandedRect) ?? Ir(l), c = sc(u, a.rect);
    i.set(a.parentId, { expandedRect: c, parent: l });
  }
  return i.size > 0 && i.forEach(({ expandedRect: a, parent: l }, u) => {
    var x;
    const c = l.internals.positionAbsolute, f = Jn(l), d = l.origin ?? r, g = a.x < c.x ? Math.round(Math.abs(c.x - a.x)) : 0, v = a.y < c.y ? Math.round(Math.abs(c.y - a.y)) : 0, C = Math.max(f.width, Math.round(a.width)), _ = Math.max(f.height, Math.round(a.height)), $ = (C - f.width) * d[0], p = (_ - f.height) * d[1];
    (g > 0 || v > 0 || $ || p) && (o.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - g + $,
        y: l.position.y - v + p
      }
    }), (x = n.get(u)) == null || x.forEach((m) => {
      e.some((k) => k.id === m.id) || o.push({
        id: m.id,
        type: "position",
        position: {
          x: m.position.x + g,
          y: m.position.y + v
        }
      });
    })), (f.width < a.width || f.height < a.height || g || v) && o.push({
      id: u,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: C + (g ? d[0] * g - $ : 0),
        height: _ + (v ? d[1] * v - p : 0)
      }
    });
  }), o;
}
function B0(e, t, n, r, o, i) {
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
    const v = fa(d.nodeElement), C = g.measured.width !== v.width || g.measured.height !== v.height;
    if (!!(v.width && v.height && (C || !g.internals.handleBounds || d.force))) {
      const $ = d.nodeElement.getBoundingClientRect(), p = Rr(g.extent) ? g.extent : i;
      let { positionAbsolute: x } = g.internals;
      g.parentId && g.extent === "parent" ? x = oc(x, v, t.get(g.parentId)) : p && (x = ur(x, p, v));
      const m = {
        ...g,
        measured: v,
        internals: {
          ...g.internals,
          positionAbsolute: x,
          handleBounds: {
            source: gl("source", d.nodeElement, $, c, g.id),
            target: gl("target", d.nodeElement, $, c, g.id)
          }
        }
      };
      t.set(g.id, m), g.parentId && va(m, t, n, { nodeOrigin: o }), a = !0, C && (l.push({
        id: g.id,
        type: "dimensions",
        dimensions: v
      }), g.expandParent && g.parentId && f.push({
        id: g.id,
        parentId: g.parentId,
        rect: Ir(m, o)
      }));
    }
  }
  if (f.length > 0) {
    const d = R0(f, t, n, o);
    l.push(...d);
  }
  return { changes: l, updatedInternals: a };
}
async function Y0({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function _l(e, t, n, r, o, i) {
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
function hc(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, c = `${i}-${a}--${o}-${s}`;
    _l("source", l, c, e, o, s), _l("target", l, u, e, i, a), t.set(r.id, r);
  }
}
function Z0(e, t) {
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
function vc(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : vc(n, t) : !1;
}
function xl(e, t, n) {
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
function X0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !vc(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function ss({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
function W0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, c = null, f = !1, d = null, g = !1;
  function v({ noDragClassName: _, handleSelector: $, domNode: p, isSelectable: x, nodeId: m, nodeClickDistance: k = 0 }) {
    d = Wt(p);
    function P({ x: A, y: V }, z) {
      const { nodeLookup: I, nodeExtent: E, snapGrid: H, snapToGrid: b, nodeOrigin: S, onNodeDrag: T, onSelectionDrag: L, onError: B, updateNodePositions: X } = t();
      i = { x: A, y: V };
      let q = !1, fe = { x: 0, y: 0, x2: 0, y2: 0 };
      if (a.size > 1 && E) {
        const ee = Mo(a);
        fe = Ds(ee);
      }
      for (const [ee, F] of a) {
        if (!I.has(ee))
          continue;
        let ge = { x: A - F.distance.x, y: V - F.distance.y };
        b && (ge = ca(ge, H));
        let we = [
          [E[0][0], E[0][1]],
          [E[1][0], E[1][1]]
        ];
        if (a.size > 1 && E && !F.extent) {
          const { positionAbsolute: ve } = F.internals, se = ve.x - fe.x + E[0][0], Pe = ve.x + F.measured.width - fe.x2 + E[1][0], Ze = ve.y - fe.y + E[0][1], Ie = ve.y + F.measured.height - fe.y2 + E[1][1];
          we = [
            [se, Ze],
            [Pe, Ie]
          ];
        }
        const { position: be, positionAbsolute: he } = y0({
          nodeId: ee,
          nextPosition: ge,
          nodeLookup: I,
          nodeExtent: we,
          nodeOrigin: S,
          onError: B
        });
        q = q || F.position.x !== be.x || F.position.y !== be.y, F.position = be, F.internals.positionAbsolute = he;
      }
      if (q && (X(a, !0), z && (r || T || !m && L))) {
        const [ee, F] = ss({
          nodeId: m,
          dragItems: a,
          nodeLookup: I
        });
        r == null || r(z, a, ee, F), T == null || T(z, ee, F), m || L == null || L(z, F);
      }
    }
    async function N() {
      if (!c)
        return;
      const { transform: A, panBy: V, autoPanSpeed: z, autoPanOnNodeDrag: I } = t();
      if (!I) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [E, H] = ic(u, c, z);
      (E !== 0 || H !== 0) && (i.x = (i.x ?? 0) - E / A[2], i.y = (i.y ?? 0) - H / A[2], await V({ x: E, y: H }) && P(i, null)), s = requestAnimationFrame(N);
    }
    function M(A) {
      var q;
      const { nodeLookup: V, multiSelectionActive: z, nodesDraggable: I, transform: E, snapGrid: H, snapToGrid: b, selectNodesOnDrag: S, onNodeDragStart: T, onSelectionDragStart: L, unselectNodesAndEdges: B } = t();
      f = !0, (!S || !x) && !z && m && ((q = V.get(m)) != null && q.selected || B()), x && S && m && (e == null || e(m));
      const X = is(A.sourceEvent, { transform: E, snapGrid: H, snapToGrid: b, containerBounds: c });
      if (i = X, a = X0(V, I, X, m), a.size > 0 && (n || T || !m && L)) {
        const [fe, ee] = ss({
          nodeId: m,
          dragItems: a,
          nodeLookup: V
        });
        n == null || n(A.sourceEvent, a, fe, ee), T == null || T(A.sourceEvent, fe, ee), m || L == null || L(A.sourceEvent, ee);
      }
    }
    const D = Ch().clickDistance(k).on("start", (A) => {
      const { domNode: V, nodeDragThreshold: z, transform: I, snapGrid: E, snapToGrid: H } = t();
      c = (V == null ? void 0 : V.getBoundingClientRect()) || null, g = !1, z === 0 && M(A), i = is(A.sourceEvent, { transform: I, snapGrid: E, snapToGrid: H, containerBounds: c }), u = Mn(A.sourceEvent, c);
    }).on("drag", (A) => {
      const { autoPanOnNodeDrag: V, transform: z, snapGrid: I, snapToGrid: E, nodeDragThreshold: H, nodeLookup: b } = t(), S = is(A.sourceEvent, { transform: z, snapGrid: I, snapToGrid: E, containerBounds: c });
      if ((A.sourceEvent.type === "touchmove" && A.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      m && !b.has(m)) && (g = !0), !g) {
        if (!l && V && f && (l = !0, N()), !f) {
          const T = S.xSnapped - (i.x ?? 0), L = S.ySnapped - (i.y ?? 0);
          Math.sqrt(T * T + L * L) > H && M(A);
        }
        (i.x !== S.xSnapped || i.y !== S.ySnapped) && a && f && (u = Mn(A.sourceEvent, c), P(S, A.sourceEvent));
      }
    }).on("end", (A) => {
      if (!(!f || g) && (l = !1, f = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: V, updateNodePositions: z, onNodeDragStop: I, onSelectionDragStop: E } = t();
        if (z(a, !1), o || I || !m && E) {
          const [H, b] = ss({
            nodeId: m,
            dragItems: a,
            nodeLookup: V,
            dragging: !1
          });
          o == null || o(A.sourceEvent, a, H, b), I == null || I(A.sourceEvent, H, b), m || E == null || E(A.sourceEvent, b);
        }
      }
    }).filter((A) => {
      const V = A.target;
      return !A.button && (!_ || !xl(V, `.${_}`, p)) && (!$ || xl(V, $, p));
    });
    d.call(D);
  }
  function C() {
    d == null || d.on(".drag", null);
  }
  return {
    update: v,
    destroy: C
  };
}
function F0(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    yo(o, Ir(i)) > 0 && r.push(i);
  return r;
}
const K0 = 250;
function q0(e, t, n, r) {
  var a, l;
  let o = [], i = 1 / 0;
  const s = F0(e, n, t + K0);
  for (const u of s) {
    const c = [...((a = u.internals.handleBounds) == null ? void 0 : a.source) ?? [], ...((l = u.internals.handleBounds) == null ? void 0 : l.target) ?? []];
    for (const f of c) {
      if (r.nodeId === f.nodeId && r.type === f.type && r.id === f.id)
        continue;
      const { x: d, y: g } = wo(u, f, f.position, !0), v = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(g - e.y, 2));
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
function pc(e, t, n, r, o, i = !1) {
  var u, c, f;
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? (u = s.internals.handleBounds) == null ? void 0 : u[t] : [...((c = s.internals.handleBounds) == null ? void 0 : c.source) ?? [], ...((f = s.internals.handleBounds) == null ? void 0 : f.target) ?? []], l = (n ? a == null ? void 0 : a.find((d) => d.id === n) : a == null ? void 0 : a[0]) ?? null;
  return l && i ? { ...l, ...wo(s, l, l.position, !0) } : l;
}
function mc(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function U0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const yc = () => !0;
function G0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: f, panBy: d, cancelConnection: g, onConnectStart: v, onConnect: C, onConnectEnd: _, isValidConnection: $ = yc, onReconnectEnd: p, updateConnection: x, getTransform: m, getFromHandle: k, autoPanSpeed: P }) {
  const N = x0(e.target);
  let M = 0, D;
  const { x: A, y: V } = Mn(e), z = N == null ? void 0 : N.elementFromPoint(A, V), I = mc(i, z), E = a == null ? void 0 : a.getBoundingClientRect();
  if (!E || !I)
    return;
  const H = pc(o, I, r, l, t);
  if (!H)
    return;
  let b = Mn(e, E), S = !1, T = null, L = !1, B = null;
  function X() {
    if (!c || !E)
      return;
    const [he, ve] = ic(b, E, P);
    d({ x: he, y: ve }), M = requestAnimationFrame(X);
  }
  const q = {
    ...H,
    nodeId: o,
    type: I,
    position: H.position
  }, fe = l.get(o), F = {
    inProgress: !0,
    isValid: null,
    from: wo(fe, q, ke.Left, !0),
    fromHandle: q,
    fromPosition: q.position,
    fromNode: fe,
    to: b,
    toHandle: null,
    toPosition: al[q.position],
    toNode: null
  };
  x(F);
  let ge = F;
  v == null || v(e, { nodeId: o, handleId: r, handleType: I });
  function we(he) {
    if (!k() || !q) {
      be(he);
      return;
    }
    const ve = m();
    b = Mn(he, E), D = q0(To(b, ve, !1, [1, 1]), n, l, q), S || (X(), S = !0);
    const se = wc(he, {
      handle: D,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: $,
      doc: N,
      lib: u,
      flowId: f,
      nodeLookup: l
    });
    B = se.handleDomNode, T = se.connection, L = U0(!!D, se.isValid);
    const Pe = {
      // from stays the same
      ...ge,
      isValid: L,
      to: D && L ? ac({ x: D.x, y: D.y }, ve) : b,
      toHandle: se.toHandle,
      toPosition: L && se.toHandle ? se.toHandle.position : al[q.position],
      toNode: se.toHandle ? l.get(se.toHandle.nodeId) : null
    };
    L && D && ge.toHandle && Pe.toHandle && ge.toHandle.type === Pe.toHandle.type && ge.toHandle.nodeId === Pe.toHandle.nodeId && ge.toHandle.id === Pe.toHandle.id && ge.to.x === Pe.to.x && ge.to.y === Pe.to.y || (x(Pe), ge = Pe);
  }
  function be(he) {
    (D || B) && T && L && (C == null || C(T));
    const { inProgress: ve, ...se } = ge, Pe = {
      ...se,
      toPosition: ge.toHandle ? ge.toPosition : null
    };
    _ == null || _(he, Pe), i && (p == null || p(he, Pe)), g(), cancelAnimationFrame(M), S = !1, L = !1, T = null, B = null, N.removeEventListener("mousemove", we), N.removeEventListener("mouseup", be), N.removeEventListener("touchmove", we), N.removeEventListener("touchend", be);
  }
  N.addEventListener("mousemove", we), N.addEventListener("mouseup", be), N.addEventListener("touchmove", we), N.addEventListener("touchend", be);
}
function wc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = yc, nodeLookup: c }) {
  const f = i === "target", d = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: g, y: v } = Mn(e), C = s.elementFromPoint(g, v), _ = C != null && C.classList.contains(`${a}-flow__handle`) ? C : d, $ = {
    handleDomNode: _,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (_) {
    const p = mc(void 0, _), x = _.getAttribute("data-nodeid"), m = _.getAttribute("data-handleid"), k = _.classList.contains("connectable"), P = _.classList.contains("connectableend");
    if (!x || !p)
      return $;
    const N = {
      source: f ? x : r,
      sourceHandle: f ? m : o,
      target: f ? r : x,
      targetHandle: f ? o : m
    };
    $.connection = N;
    const D = k && P && (n === lr.Strict ? f && p === "source" || !f && p === "target" : x !== r || m !== o);
    $.isValid = D && u(N), $.toHandle = pc(x, p, m, c, n, !1);
  }
  return $;
}
const j0 = {
  onPointerDown: G0,
  isValid: wc
};
function J0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Wt(e);
  function i({ translateExtent: a, width: l, height: u, zoomStep: c = 10, pannable: f = !0, zoomable: d = !0, inversePan: g = !1 }) {
    const v = (x) => {
      const m = n();
      if (x.sourceEvent.type !== "wheel" || !t)
        return;
      const k = -x.sourceEvent.deltaY * (x.sourceEvent.deltaMode === 1 ? 0.05 : x.sourceEvent.deltaMode ? 1 : 2e-3) * c, P = m[2] * Math.pow(2, k);
      t.scaleTo(P);
    };
    let C = [0, 0];
    const _ = (x) => {
      (x.sourceEvent.type === "mousedown" || x.sourceEvent.type === "touchstart") && (C = [
        x.sourceEvent.clientX ?? x.sourceEvent.touches[0].clientX,
        x.sourceEvent.clientY ?? x.sourceEvent.touches[0].clientY
      ]);
    }, $ = (x) => {
      const m = n();
      if (x.sourceEvent.type !== "mousemove" && x.sourceEvent.type !== "touchmove" || !t)
        return;
      const k = [
        x.sourceEvent.clientX ?? x.sourceEvent.touches[0].clientX,
        x.sourceEvent.clientY ?? x.sourceEvent.touches[0].clientY
      ], P = [k[0] - C[0], k[1] - C[1]];
      C = k;
      const N = r() * Math.max(m[2], Math.log(m[2])) * (g ? -1 : 1), M = {
        x: m[0] - P[0] * N,
        y: m[1] - P[1] * N
      }, D = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: M.x,
        y: M.y,
        zoom: m[2]
      }, D, a);
    }, p = tc().on("start", _).on("zoom", f ? $ : null).on("zoom.wheel", d ? v : null);
    o.call(p, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: Jt
  };
}
const Q0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Wi = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), as = ({ x: e, y: t, zoom: n }) => Yi.translate(e, t).scale(n), wr = (e, t) => e.target.closest(`.${t}`), _c = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), ls = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, xc = (e) => {
  const t = e.ctrlKey && yi() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function e2({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (wr(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const f = n.property("__zoom").k || 1;
    if (c.ctrlKey && s) {
      const _ = Jt(c), $ = xc(c), p = f * Math.pow(2, $);
      r.scaleTo(n, p, _, c);
      return;
    }
    const d = c.deltaMode === 1 ? 20 : 1;
    let g = o === Fn.Vertical ? 0 : c.deltaX * d, v = o === Fn.Horizontal ? 0 : c.deltaY * d;
    !yi() && c.shiftKey && o !== Fn.Vertical && (g = c.deltaY * d, v = 0), r.translateBy(
      n,
      -(g / f) * i,
      -(v / f) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const C = Wi(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, a == null || a(c, C)), e.isPanScrolling && (l == null || l(c, C), e.panScrollTimeout = setTimeout(() => {
      u == null || u(c, C), e.isPanScrolling = !1;
    }, 150));
  };
}
function t2({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    if (!t && r.type === "wheel" && !r.ctrlKey || wr(r, e))
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function n2({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var i, s, a;
    if ((i = r.sourceEvent) != null && i.internal)
      return;
    const o = Wi(r.transform);
    e.mouseButton = ((s = r.sourceEvent) == null ? void 0 : s.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, ((a = r.sourceEvent) == null ? void 0 : a.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, o));
  };
}
function r2({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var s, a;
    e.usedRightMouseButton = !!(n && _c(t, e.mouseButton ?? 0)), (s = i.sourceEvent) != null && s.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((a = i.sourceEvent) != null && a.internal) && (o == null || o(i.sourceEvent, Wi(i.transform)));
  };
}
function o2({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    var a;
    if (!((a = s.sourceEvent) != null && a.internal) && (e.isZoomingOrPanning = !1, i && _c(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && Q0(e.prevViewport, s.transform))) {
      const l = Wi(s.transform);
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
function i2({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: u }) {
  return (c) => {
    var v;
    const f = e || t, d = n && c.ctrlKey;
    if (c.button === 1 && c.type === "mousedown" && (wr(c, `${u}-flow__node`) || wr(c, `${u}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || s || wr(c, a) && c.type === "wheel" || wr(c, l) && (c.type !== "wheel" || o && c.type === "wheel" && !e) || !n && c.ctrlKey && c.type === "wheel")
      return !1;
    if (!n && c.type === "touchstart" && ((v = c.touches) == null ? void 0 : v.length) > 1)
      return c.preventDefault(), !1;
    if (!f && !o && !d && c.type === "wheel" || !r && (c.type === "mousedown" || c.type === "touchstart") || Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
      return !1;
    const g = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || c.type === "wheel") && g;
  };
}
function s2({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: s, onPanZoomStart: a, onPanZoomEnd: l, onDraggingChange: u }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, f = e.getBoundingClientRect(), d = tc().clickDistance(!Sn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), g = Wt(e).call(d);
  x({
    x: i.x,
    y: i.y,
    zoom: zr(i.zoom, t, n)
  }, [
    [0, 0],
    [f.width, f.height]
  ], o);
  const v = g.on("wheel.zoom"), C = g.on("dblclick.zoom");
  d.wheelDelta(xc);
  function _(z, I) {
    return g ? new Promise((E) => {
      d == null || d.transform(ls(g, I == null ? void 0 : I.duration, () => E(!0)), z);
    }) : Promise.resolve(!1);
  }
  function $({ noWheelClassName: z, noPanClassName: I, onPaneContextMenu: E, userSelectionActive: H, panOnScroll: b, panOnDrag: S, panOnScrollMode: T, panOnScrollSpeed: L, preventScrolling: B, zoomOnPinch: X, zoomOnScroll: q, zoomOnDoubleClick: fe, zoomActivationKeyPressed: ee, lib: F, onTransformChange: ge }) {
    H && !c.isZoomingOrPanning && p();
    const be = b && !ee && !H ? e2({
      zoomPanValues: c,
      noWheelClassName: z,
      d3Selection: g,
      d3Zoom: d,
      panOnScrollMode: T,
      panOnScrollSpeed: L,
      zoomOnPinch: X,
      onPanZoomStart: a,
      onPanZoom: s,
      onPanZoomEnd: l
    }) : t2({
      noWheelClassName: z,
      preventScrolling: B,
      d3ZoomHandler: v
    });
    if (g.on("wheel.zoom", be, { passive: !1 }), !H) {
      const ve = n2({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: a
      });
      d.on("start", ve);
      const se = r2({
        zoomPanValues: c,
        panOnDrag: S,
        onPaneContextMenu: !!E,
        onPanZoom: s,
        onTransformChange: ge
      });
      d.on("zoom", se);
      const Pe = o2({
        zoomPanValues: c,
        panOnDrag: S,
        panOnScroll: b,
        onPaneContextMenu: E,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      d.on("end", Pe);
    }
    const he = i2({
      zoomActivationKeyPressed: ee,
      panOnDrag: S,
      zoomOnScroll: q,
      panOnScroll: b,
      zoomOnDoubleClick: fe,
      zoomOnPinch: X,
      userSelectionActive: H,
      noPanClassName: I,
      noWheelClassName: z,
      lib: F
    });
    d.filter(he), fe ? g.on("dblclick.zoom", C) : g.on("dblclick.zoom", null);
  }
  function p() {
    d.on("zoom", null);
  }
  async function x(z, I, E) {
    const H = as(z), b = d == null ? void 0 : d.constrain()(H, I, E);
    return b && await _(b), new Promise((S) => S(b));
  }
  async function m(z, I) {
    const E = as(z);
    return await _(E, I), new Promise((H) => H(E));
  }
  function k(z) {
    if (g) {
      const I = as(z), E = g.property("__zoom");
      (E.k !== z.zoom || E.x !== z.x || E.y !== z.y) && (d == null || d.transform(g, I, null, { sync: !0 }));
    }
  }
  function P() {
    const z = g ? ec(g.node()) : { x: 0, y: 0, k: 1 };
    return { x: z.x, y: z.y, zoom: z.k };
  }
  function N(z, I) {
    return g ? new Promise((E) => {
      d == null || d.scaleTo(ls(g, I == null ? void 0 : I.duration, () => E(!0)), z);
    }) : Promise.resolve(!1);
  }
  function M(z, I) {
    return g ? new Promise((E) => {
      d == null || d.scaleBy(ls(g, I == null ? void 0 : I.duration, () => E(!0)), z);
    }) : Promise.resolve(!1);
  }
  function D(z) {
    d == null || d.scaleExtent(z);
  }
  function A(z) {
    d == null || d.translateExtent(z);
  }
  function V(z) {
    const I = !Sn(z) || z < 0 ? 0 : z;
    d == null || d.clickDistance(I);
  }
  return {
    update: $,
    destroy: p,
    setViewport: m,
    setViewportConstrained: x,
    getViewport: P,
    scaleTo: N,
    scaleBy: M,
    setScaleExtent: D,
    setTranslateExtent: A,
    syncViewport: k,
    setClickDistance: V
  };
}
var bl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(bl || (bl = {}));
var a2 = /* @__PURE__ */ ne('<div role="button" tabindex="-1"><!></div>');
function Gn(e, t) {
  ce(t, !1);
  const [n, r] = tt(), o = () => j(fe, "$connectable", n), i = () => j(be, "$connectionRadius", n), s = () => j(ge, "$domNode", n), a = () => j(we, "$nodeLookup", n), l = () => j(F, "$connectionMode", n), u = () => j(se, "$lib", n), c = () => j(le, "$autoPanOnConnect", n), f = () => j(Be, "$flowId", n), d = () => j(ve, "$isValidConnectionStore", n), g = () => j(Ze, "$onedgecreate", n), v = () => j(qe, "$onConnectAction", n), C = () => j(Ve, "$onConnectStartAction", n), _ = () => j(nt, "$onConnectEndAction", n), $ = () => j(he, "$viewport", n), p = () => j(ct, "$connection", n), x = () => j(ie, "$edges", n), m = () => j(me, "$connectionLookup", n), k = te(), P = te(), N = te(), M = te(), D = te(), A = te(), V = te(), z = te();
  let I = w(t, "id", 12, void 0), E = w(t, "type", 12, "source"), H = w(t, "position", 28, () => ke.Top), b = w(t, "style", 12, void 0), S = w(t, "isValidConnection", 12, void 0), T = w(t, "onconnect", 12, void 0), L = w(t, "ondisconnect", 12, void 0), B = w(t, "isConnectable", 12, void 0), X = w(t, "class", 12, void 0);
  const q = ir("svelteflow__node_id"), fe = ir("svelteflow__node_connectable"), ee = et(), {
    connectionMode: F,
    domNode: ge,
    nodeLookup: we,
    connectionRadius: be,
    viewport: he,
    isValidConnection: ve,
    lib: se,
    addEdge: Pe,
    onedgecreate: Ze,
    panBy: Ie,
    cancelConnection: Fe,
    updateConnection: Q,
    autoPanOnConnect: le,
    edges: ie,
    connectionLookup: me,
    onconnect: qe,
    onconnectstart: Ve,
    onconnectend: nt,
    flowId: Be,
    connection: ct
  } = ee;
  function rt(Ne) {
    const ut = uc(Ne);
    (ut && Ne.button === 0 || !ut) && j0.onPointerDown(Ne, {
      handleId: h(N),
      nodeId: q,
      isTarget: h(k),
      connectionRadius: i(),
      domNode: s(),
      nodeLookup: a(),
      connectionMode: l(),
      lib: u(),
      autoPanOnConnect: c(),
      flowId: f(),
      isValidConnection: S() ?? d(),
      updateConnection: Q,
      cancelConnection: Fe,
      panBy: Ie,
      onConnect: (Ce) => {
        var lt;
        const Oe = g() ? g()(Ce) : Ce;
        Oe && (Pe(Oe), (lt = v()) == null || lt(Ce));
      },
      onConnectStart: (Ce, Oe) => {
        var lt;
        (lt = C()) == null || lt(Ce, {
          nodeId: Oe.nodeId,
          handleId: Oe.handleId,
          handleType: Oe.handleType
        });
      },
      onConnectEnd: (Ce, Oe) => {
        var lt;
        (lt = _()) == null || lt(Ce, Oe);
      },
      getTransform: () => [
        $().x,
        $().y,
        $().zoom
      ],
      getFromHandle: () => p().fromHandle
    });
  }
  let J = te(null), He = te();
  ue(() => U(E()), () => {
    G(k, E() === "target");
  }), ue(
    () => (U(B()), o()),
    () => {
      G(P, B() !== void 0 ? B() : o());
    }
  ), ue(() => U(I()), () => {
    G(N, I() || null);
  }), ue(
    () => (U(T()), U(L()), x(), m(), U(E()), U(I())),
    () => {
      (T() || L()) && (x(), G(He, m().get(`${q}-${E()}${I() ? `-${I()}` : ""}`)));
    }
  ), ue(
    () => (h(J), h(He), U(L()), U(T())),
    () => {
      if (h(J) && !g0(h(He), h(J))) {
        const Ne = h(He) ?? /* @__PURE__ */ new Map();
        ll(h(J), Ne, L()), ll(Ne, h(J), T());
      }
      G(J, h(He) ?? /* @__PURE__ */ new Map());
    }
  ), ue(() => p(), () => {
    G(M, !!p().fromHandle);
  }), ue(
    () => (p(), U(E()), h(N)),
    () => {
      var Ne, ut, Ce;
      G(D, ((Ne = p().fromHandle) == null ? void 0 : Ne.nodeId) === q && ((ut = p().fromHandle) == null ? void 0 : ut.type) === E() && ((Ce = p().fromHandle) == null ? void 0 : Ce.id) === h(N));
    }
  ), ue(
    () => (p(), U(E()), h(N)),
    () => {
      var Ne, ut, Ce;
      G(A, ((Ne = p().toHandle) == null ? void 0 : Ne.nodeId) === q && ((ut = p().toHandle) == null ? void 0 : ut.type) === E() && ((Ce = p().toHandle) == null ? void 0 : Ce.id) === h(N));
    }
  ), ue(
    () => (l(), p(), U(E()), h(N)),
    () => {
      var Ne, ut, Ce;
      G(V, l() === lr.Strict ? ((Ne = p().fromHandle) == null ? void 0 : Ne.type) !== E() : q !== ((ut = p().fromHandle) == null ? void 0 : ut.nodeId) || h(N) !== ((Ce = p().fromHandle) == null ? void 0 : Ce.id));
    }
  ), ue(() => (h(A), p()), () => {
    G(z, h(A) && p().isValid);
  }), ht(), Ae();
  var oe = a2();
  ae(oe, "data-nodeid", q);
  var bn = W(oe);
  pt(bn, t, "default", {}), Z(oe), Se(
    (Ne) => {
      ae(oe, "data-handleid", h(N)), ae(oe, "data-handlepos", H()), ae(oe, "data-id", `${f() ?? ""}-${q ?? ""}-${I() || ""}-${E() ?? ""}`), Vr(oe, yn(Ne)), ae(oe, "style", b()), it(oe, "valid", h(z)), it(oe, "connectingto", h(A)), it(oe, "connectingfrom", h(D)), it(oe, "source", !h(k)), it(oe, "target", h(k)), it(oe, "connectablestart", h(P)), it(oe, "connectableend", h(P)), it(oe, "connectable", h(P)), it(oe, "connectionindicator", h(P) && (!h(M) || h(V)));
    },
    [
      () => Et([
        "svelte-flow__handle",
        `svelte-flow__handle-${H()}`,
        "nodrag",
        "nopan",
        H(),
        X()
      ])
    ],
    pe
  ), je("mousedown", oe, rt), je("touchstart", oe, rt), O(e, oe);
  var Ut = de({
    get id() {
      return I();
    },
    set id(Ne) {
      I(Ne), y();
    },
    get type() {
      return E();
    },
    set type(Ne) {
      E(Ne), y();
    },
    get position() {
      return H();
    },
    set position(Ne) {
      H(Ne), y();
    },
    get style() {
      return b();
    },
    set style(Ne) {
      b(Ne), y();
    },
    get isValidConnection() {
      return S();
    },
    set isValidConnection(Ne) {
      S(Ne), y();
    },
    get onconnect() {
      return T();
    },
    set onconnect(Ne) {
      T(Ne), y();
    },
    get ondisconnect() {
      return L();
    },
    set ondisconnect(Ne) {
      L(Ne), y();
    },
    get isConnectable() {
      return B();
    },
    set isConnectable(Ne) {
      B(Ne), y();
    },
    get class() {
      return X();
    },
    set class(Ne) {
      X(Ne), y();
    }
  });
  return r(), Ut;
}
re(
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
var l2 = /* @__PURE__ */ ne("<!> <!>", 1);
function _i(e, t) {
  const n = ot(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ot(n, ["data", "targetPosition", "sourcePosition"]), ce(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "targetPosition", 12, void 0), i = w(t, "sourcePosition", 12, void 0);
  Ae();
  var s = l2(), a = _e(s);
  const l = /* @__PURE__ */ pe(() => o() ?? ke.Top);
  Gn(a, {
    type: "target",
    get position() {
      return h(l);
    }
  });
  var u = R(a), c = R(u);
  const f = /* @__PURE__ */ pe(() => i() ?? ke.Bottom);
  return Gn(c, {
    type: "source",
    get position() {
      return h(f);
    }
  }), Se(() => {
    var d;
    return mn(u, ` ${((d = r()) == null ? void 0 : d.label) ?? ""} `);
  }), O(e, s), de({
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
re(
  _i,
  {
    data: {},
    targetPosition: {},
    sourcePosition: {}
  },
  [],
  [],
  !0
);
var u2 = /* @__PURE__ */ ne(" <!>", 1);
function bc(e, t) {
  const n = ot(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ot(n, ["data", "sourcePosition"]), ce(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "sourcePosition", 12, void 0);
  Ae(), Me();
  var i = u2(), s = _e(i), a = R(s);
  const l = /* @__PURE__ */ pe(() => o() ?? ke.Bottom);
  return Gn(a, {
    type: "source",
    get position() {
      return h(l);
    }
  }), Se(() => {
    var u;
    return mn(s, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), O(e, i), de({
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
re(bc, { data: {}, sourcePosition: {} }, [], [], !0);
var c2 = /* @__PURE__ */ ne(" <!>", 1);
function Cc(e, t) {
  const n = ot(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ot(n, ["data", "targetPosition"]), ce(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "targetPosition", 12, void 0);
  Ae(), Me();
  var i = c2(), s = _e(i), a = R(s);
  const l = /* @__PURE__ */ pe(() => o() ?? ke.Top);
  return Gn(a, {
    type: "target",
    get position() {
      return h(l);
    }
  }), Se(() => {
    var u;
    return mn(s, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), O(e, i), de({
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
re(Cc, { data: {}, targetPosition: {} }, [], [], !0);
function kc(e, t) {
  const n = ot(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ot(n, []);
}
re(kc, {}, [], [], !0);
function Cl(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function $r(e, { target: t, domNode: n }) {
  return Cl(e, n, t), {
    async update({ target: r, domNode: o }) {
      Cl(e, o, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var d2 = /* @__PURE__ */ ne("<div><!></div>");
function Ec(e, t) {
  ce(t, !1);
  const [n, r] = tt(), o = () => j(i, "$domNode", n), { domNode: i } = et();
  Ae();
  var s = d2(), a = W(s);
  pt(a, t, "default", {}), Z(s), vt(s, (l, u) => $r == null ? void 0 : $r(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), O(e, s), de(), r();
}
re(Ec, {}, ["default"], [], !0);
function $c() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: i, elementsSelectable: s } = et();
  return (a) => {
    const l = K(e).get(a);
    if (!l) {
      console.warn("012", Po.error012(a));
      return;
    }
    (l.selectable || K(s) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && K(r) && i({ nodes: [], edges: [l] }) : o([a]));
  };
}
var f2 = /* @__PURE__ */ ne('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function Sc(e, t) {
  ce(t, !1);
  let n = w(t, "style", 12, void 0), r = w(t, "x", 12, void 0), o = w(t, "y", 12, void 0);
  const i = $c(), s = ir("svelteflow__edge_id");
  return Ae(), Ec(e, {
    children: (a, l) => {
      var u = f2(), c = W(u);
      pt(c, t, "default", {}), Z(u), Se(() => {
        ae(u, "style", "pointer-events: all;" + n()), at(u, "transform", `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`);
      }), je("keyup", u, () => {
      }), je("click", u, () => {
        s && i(s);
      }), O(a, u);
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
re(Sc, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var g2 = /* @__PURE__ */ xe('<path fill="none" class="svelte-flow__edge-interaction"></path>'), h2 = /* @__PURE__ */ xe('<path fill="none"></path><!><!>', 1);
function Ho(e, t) {
  ce(t, !1);
  let n = w(t, "id", 12, void 0), r = w(t, "path", 12), o = w(t, "label", 12, void 0), i = w(t, "labelX", 12, void 0), s = w(t, "labelY", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "markerStart", 12, void 0), u = w(t, "markerEnd", 12, void 0), c = w(t, "style", 12, void 0), f = w(t, "interactionWidth", 12, 20), d = w(t, "class", 12, void 0), g = f() === void 0 ? 20 : f();
  Ae();
  var v = h2(), C = _e(v), _ = R(C);
  {
    var $ = (m) => {
      var k = g2();
      ae(k, "stroke-opacity", 0), ae(k, "stroke-width", g), Se(() => ae(k, "d", r())), O(m, k);
    };
    Ee(_, (m) => {
      g && m($);
    });
  }
  var p = R(_);
  {
    var x = (m) => {
      Sc(m, {
        get x() {
          return i();
        },
        get y() {
          return s();
        },
        get style() {
          return a();
        },
        children: (k, P) => {
          Me();
          var N = Re();
          Se(() => mn(N, o())), O(k, N);
        },
        $$slots: { default: !0 }
      });
    };
    Ee(p, (m) => {
      o() && m(x);
    });
  }
  return Se(
    (m) => {
      ae(C, "id", n()), ae(C, "d", r()), hr(C, yn(m)), ae(C, "marker-start", l()), ae(C, "marker-end", u()), ae(C, "style", c());
    },
    [
      () => Et(["svelte-flow__edge-path", d()])
    ],
    pe
  ), O(e, v), de({
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
re(
  Ho,
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
function xi(e, t) {
  const n = ot(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ot(n, [
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
  const r = te(), o = te(), i = te();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), g = w(t, "sourceY", 12), v = w(t, "sourcePosition", 12), C = w(t, "targetX", 12), _ = w(t, "targetY", 12), $ = w(t, "targetPosition", 12);
  return ue(
    () => (h(r), h(o), h(i), U(d()), U(g()), U(C()), U(_()), U(v()), U($())),
    () => {
      ((p) => (G(r, p[0]), G(o, p[1]), G(i, p[2])))(cc({
        sourceX: d(),
        sourceY: g(),
        targetX: C(),
        targetY: _(),
        sourcePosition: v(),
        targetPosition: $()
      }));
    }
  ), ht(), Ae(), Ho(e, {
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
    set label(p) {
      s(p), y();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(p) {
      a(p), y();
    },
    get style() {
      return l();
    },
    set style(p) {
      l(p), y();
    },
    get markerStart() {
      return u();
    },
    set markerStart(p) {
      u(p), y();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(p) {
      c(p), y();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(p) {
      f(p), y();
    },
    get sourceX() {
      return d();
    },
    set sourceX(p) {
      d(p), y();
    },
    get sourceY() {
      return g();
    },
    set sourceY(p) {
      g(p), y();
    },
    get sourcePosition() {
      return v();
    },
    set sourcePosition(p) {
      v(p), y();
    },
    get targetX() {
      return C();
    },
    set targetX(p) {
      C(p), y();
    },
    get targetY() {
      return _();
    },
    set targetY(p) {
      _(p), y();
    },
    get targetPosition() {
      return $();
    },
    set targetPosition(p) {
      $(p), y();
    }
  });
}
re(
  xi,
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
function Pc(e, t) {
  const n = ot(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ot(n, [
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
  const r = te(), o = te(), i = te();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), g = w(t, "sourceY", 12), v = w(t, "sourcePosition", 12), C = w(t, "targetX", 12), _ = w(t, "targetY", 12), $ = w(t, "targetPosition", 12);
  return ue(
    () => (h(r), h(o), h(i), U(d()), U(g()), U(C()), U(_()), U(v()), U($())),
    () => {
      ((p) => (G(r, p[0]), G(o, p[1]), G(i, p[2])))(wi({
        sourceX: d(),
        sourceY: g(),
        targetX: C(),
        targetY: _(),
        sourcePosition: v(),
        targetPosition: $()
      }));
    }
  ), ht(), Ae(), Ho(e, {
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
    set label(p) {
      s(p), y();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(p) {
      a(p), y();
    },
    get style() {
      return l();
    },
    set style(p) {
      l(p), y();
    },
    get markerStart() {
      return u();
    },
    set markerStart(p) {
      u(p), y();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(p) {
      c(p), y();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(p) {
      f(p), y();
    },
    get sourceX() {
      return d();
    },
    set sourceX(p) {
      d(p), y();
    },
    get sourceY() {
      return g();
    },
    set sourceY(p) {
      g(p), y();
    },
    get sourcePosition() {
      return v();
    },
    set sourcePosition(p) {
      v(p), y();
    },
    get targetX() {
      return C();
    },
    set targetX(p) {
      C(p), y();
    },
    get targetY() {
      return _();
    },
    set targetY(p) {
      _(p), y();
    },
    get targetPosition() {
      return $();
    },
    set targetPosition(p) {
      $(p), y();
    }
  });
}
re(
  Pc,
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
function Nc(e, t) {
  const n = ot(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ot(n, [
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
  const r = te(), o = te(), i = te();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), g = w(t, "sourceY", 12), v = w(t, "targetX", 12), C = w(t, "targetY", 12);
  return ue(
    () => (h(r), h(o), h(i), U(d()), U(g()), U(v()), U(C())),
    () => {
      ((_) => (G(r, _[0]), G(o, _[1]), G(i, _[2])))(Vs({
        sourceX: d(),
        sourceY: g(),
        targetX: v(),
        targetY: C()
      }));
    }
  ), ht(), Ae(), Ho(e, {
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
      return g();
    },
    set sourceY(_) {
      g(_), y();
    },
    get targetX() {
      return v();
    },
    set targetX(_) {
      v(_), y();
    },
    get targetY() {
      return C();
    },
    set targetY(_) {
      C(_), y();
    }
  });
}
re(
  Nc,
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
function Mc(e, t) {
  const n = ot(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ot(n, [
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
  const r = te(), o = te(), i = te();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), g = w(t, "sourceY", 12), v = w(t, "sourcePosition", 12), C = w(t, "targetX", 12), _ = w(t, "targetY", 12), $ = w(t, "targetPosition", 12);
  return ue(
    () => (h(r), h(o), h(i), U(d()), U(g()), U(C()), U(_()), U(v()), U($())),
    () => {
      ((p) => (G(r, p[0]), G(o, p[1]), G(i, p[2])))(wi({
        sourceX: d(),
        sourceY: g(),
        targetX: C(),
        targetY: _(),
        sourcePosition: v(),
        targetPosition: $(),
        borderRadius: 0
      }));
    }
  ), ht(), Ae(), Ho(e, {
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
    set label(p) {
      s(p), y();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(p) {
      a(p), y();
    },
    get style() {
      return l();
    },
    set style(p) {
      l(p), y();
    },
    get markerStart() {
      return u();
    },
    set markerStart(p) {
      u(p), y();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(p) {
      c(p), y();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(p) {
      f(p), y();
    },
    get sourceX() {
      return d();
    },
    set sourceX(p) {
      d(p), y();
    },
    get sourceY() {
      return g();
    },
    set sourceY(p) {
      g(p), y();
    },
    get sourcePosition() {
      return v();
    },
    set sourcePosition(p) {
      v(p), y();
    },
    get targetX() {
      return C();
    },
    set targetX(p) {
      C(p), y();
    },
    get targetY() {
      return _();
    },
    set targetY(p) {
      _(p), y();
    },
    get targetPosition() {
      return $();
    },
    set targetPosition(p) {
      $(p), y();
    }
  });
}
re(
  Mc,
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
function v2(e, t) {
  const n = e.set, r = t.set, o = K(e), i = K(t);
  let a = o.length === 0 && i.length > 0 ? i : o;
  e.set(a);
  const l = (u) => {
    const c = n(u);
    return a = c, r(a), c;
  };
  e.set = t.set = l, e.update = t.update = (u) => l(u(a));
}
function p2(e, t) {
  const n = e.set, r = t.set;
  let o = K(t);
  e.set(o);
  const i = (s) => {
    n(s), r(s), o = s;
  };
  e.set = t.set = i, e.update = t.update = (s) => i(s(o));
}
const m2 = (e, t, n) => {
  if (!n)
    return;
  const r = K(e), o = t.set, i = n.set;
  let s = n ? K(n) : { x: 0, y: 0, zoom: 1 };
  t.set(s), t.set = (a) => (o(a), i(a), s = a, a), n.set = (a) => (r == null || r.syncViewport(a), o(a), i(a), s = a, a), t.update = (a) => {
    t.set(a(s));
  }, n.update = (a) => {
    n.set(a(s));
  };
}, y2 = (e, t, n, r = [0, 0], o = vi) => {
  const { subscribe: i, set: s, update: a } = ye([]);
  let l = e, u = {}, c = !0;
  const f = (C) => (fc(C, t, n, {
    elevateNodesOnSelect: c,
    nodeOrigin: r,
    nodeExtent: o,
    defaults: u,
    checkEquality: !1
  }), l = C, s(l), l), d = (C) => f(C(l)), g = (C) => {
    u = C;
  }, v = (C) => {
    c = C.elevateNodesOnSelect ?? c;
  };
  return f(l), {
    subscribe: i,
    set: f,
    update: d,
    setDefaultOptions: g,
    setOptions: v
  };
}, w2 = (e, t, n, r) => {
  const { subscribe: o, set: i, update: s } = ye([]);
  let a = e, l = {};
  const u = (d) => {
    const g = l ? d.map((v) => ({ ...l, ...v })) : d;
    hc(t, n, g), a = g, i(a);
  }, c = (d) => u(d(a)), f = (d) => {
    l = d;
  };
  return u(a), {
    subscribe: o,
    set: u,
    update: c,
    setDefaultOptions: f
  };
}, Tc = {
  input: bc,
  output: Cc,
  default: _i,
  group: kc
}, Hc = {
  straight: Nc,
  smoothstep: Pc,
  default: xi,
  step: Mc
}, _2 = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) => {
  const a = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), f = i ?? [0, 0], d = s ?? vi;
  fc(e, a, l, {
    nodeExtent: d,
    nodeOrigin: f,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), hc(u, c, t);
  let g = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const v = Mo(a, {
      filter: (C) => !!((C.width || C.initialWidth) && (C.height || C.initialHeight))
    });
    g = da(v, n, r, 0.5, 2, 0.1);
  }
  return {
    flowId: ye(null),
    nodes: y2(e, a, l, f, d),
    nodeLookup: Zt(a),
    parentLookup: Zt(l),
    edgeLookup: Zt(c),
    visibleNodes: Zt([]),
    edges: w2(t, u, c),
    visibleEdges: Zt([]),
    connectionLookup: Zt(u),
    height: ye(500),
    width: ye(500),
    minZoom: ye(0.5),
    maxZoom: ye(2),
    nodeOrigin: ye(f),
    nodeDragThreshold: ye(1),
    nodeExtent: ye(d),
    translateExtent: ye(vi),
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
    selectionMode: ye(pi.Partial),
    nodeTypes: ye(Tc),
    edgeTypes: ye(Hc),
    viewport: ye(g),
    connectionMode: ye(lr.Strict),
    domNode: ye(null),
    connection: Zt(Hs),
    connectionLineType: ye(Er.Bezier),
    connectionRadius: ye(20),
    isValidConnection: ye(() => !0),
    nodesDraggable: ye(!0),
    nodesConnectable: ye(!0),
    elementsSelectable: ye(!0),
    selectNodesOnDrag: ye(!0),
    markers: Zt([]),
    defaultMarkerColor: ye("#b1b1b7"),
    lib: Zt("svelte"),
    onlyRenderVisibleElements: ye(!1),
    onerror: ye(w0),
    ondelete: ye(void 0),
    onedgecreate: ye(void 0),
    onconnect: ye(void 0),
    onconnectstart: ye(void 0),
    onconnectend: ye(void 0),
    onbeforedelete: ye(void 0),
    nodesInitialized: ye(!1),
    edgesInitialized: ye(!1),
    viewportInitialized: ye(!1),
    initialized: Zt(!1)
  };
};
function x2(e) {
  const t = Wn([
    e.edges,
    e.nodes,
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.viewport,
    e.width,
    e.height
  ], ([n, , r, o, i, s, a]) => o && s && a ? n.filter((u) => {
    const c = r.get(u.source), f = r.get(u.target);
    return c && f && $0({
      sourceNode: c,
      targetNode: f,
      width: s,
      height: a,
      transform: [i.x, i.y, i.zoom]
    });
  }) : n);
  return Wn([t, e.nodes, e.nodeLookup, e.connectionMode, e.onerror], ([n, , r, o, i]) => n.reduce((a, l) => {
    const u = r.get(l.source), c = r.get(l.target);
    if (!u || !c)
      return a;
    const f = A0({
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
      zIndex: E0({
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
function b2(e) {
  return Wn([
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.width,
    e.height,
    e.viewport,
    e.nodes
  ], ([t, n, r, o, i]) => {
    const s = [i.x, i.y, i.zoom];
    return n ? nc(t, { x: 0, y: 0, width: r, height: o }, s, !0) : Array.from(t.values());
  });
}
const Fi = Symbol();
function Ac({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) {
  const a = _2({
    nodes: e,
    edges: t,
    width: n,
    height: r,
    fitView: o,
    nodeOrigin: i,
    nodeExtent: s
  });
  function l(b) {
    a.nodeTypes.set({
      ...Tc,
      ...b
    });
  }
  function u(b) {
    a.edgeTypes.set({
      ...Hc,
      ...b
    });
  }
  function c(b) {
    const S = K(a.edges);
    a.edges.set(N0(b, S));
  }
  const f = (b, S = !1) => {
    var L;
    const T = K(a.nodeLookup);
    for (const [B, X] of b) {
      const q = (L = T.get(B)) == null ? void 0 : L.internals.userNode;
      q && (q.position = X.position, q.dragging = S);
    }
    a.nodes.update((B) => B);
  };
  function d(b) {
    var X, q, fe;
    const S = K(a.nodeLookup), T = K(a.parentLookup), { changes: L, updatedInternals: B } = B0(b, S, K(a.parentLookup), K(a.domNode), K(a.nodeOrigin));
    if (B) {
      if (L0(S, T, { nodeOrigin: i, nodeExtent: s }), !K(a.fitViewOnInitDone) && K(a.fitViewOnInit)) {
        const ee = K(a.fitViewOptions), F = v({
          ...ee,
          nodes: ee == null ? void 0 : ee.nodes
        });
        a.fitViewOnInitDone.set(F);
      }
      for (const ee of L) {
        const F = (X = S.get(ee.id)) == null ? void 0 : X.internals.userNode;
        if (F)
          switch (ee.type) {
            case "dimensions": {
              const ge = { ...F.measured, ...ee.dimensions };
              ee.setAttributes && (F.width = ((q = ee.dimensions) == null ? void 0 : q.width) ?? F.width, F.height = ((fe = ee.dimensions) == null ? void 0 : fe.height) ?? F.height), F.measured = ge;
              break;
            }
            case "position":
              F.position = ee.position ?? F.position;
              break;
          }
      }
      a.nodes.update((ee) => ee), K(a.nodesInitialized) || a.nodesInitialized.set(!0);
    }
  }
  function g(b) {
    const S = K(a.panZoom), T = K(a.domNode);
    if (!S || !T)
      return Promise.resolve(!1);
    const { width: L, height: B } = fa(T), X = ul(K(a.nodeLookup), b);
    return cl({
      nodes: X,
      width: L,
      height: B,
      minZoom: K(a.minZoom),
      maxZoom: K(a.maxZoom),
      panZoom: S
    }, b);
  }
  function v(b) {
    const S = K(a.panZoom);
    if (!S)
      return !1;
    const T = ul(K(a.nodeLookup), b);
    return cl({
      nodes: T,
      width: K(a.width),
      height: K(a.height),
      minZoom: K(a.minZoom),
      maxZoom: K(a.maxZoom),
      panZoom: S
    }, b), T.size > 0;
  }
  function C(b, S) {
    const T = K(a.panZoom);
    return T ? T.scaleBy(b, S) : Promise.resolve(!1);
  }
  function _(b) {
    return C(1.2, b);
  }
  function $(b) {
    return C(1 / 1.2, b);
  }
  function p(b) {
    const S = K(a.panZoom);
    S && (S.setScaleExtent([b, K(a.maxZoom)]), a.minZoom.set(b));
  }
  function x(b) {
    const S = K(a.panZoom);
    S && (S.setScaleExtent([K(a.minZoom), b]), a.maxZoom.set(b));
  }
  function m(b) {
    const S = K(a.panZoom);
    S && (S.setTranslateExtent(b), a.translateExtent.set(b));
  }
  function k(b) {
    let S = !1;
    return b.forEach((T) => {
      T.selected && (T.selected = !1, S = !0);
    }), S;
  }
  function P(b) {
    var S;
    (S = K(a.panZoom)) == null || S.setClickDistance(b);
  }
  function N(b) {
    k((b == null ? void 0 : b.nodes) || K(a.nodes)) && a.nodes.set(K(a.nodes)), k((b == null ? void 0 : b.edges) || K(a.edges)) && a.edges.set(K(a.edges));
  }
  a.deleteKeyPressed.subscribe(async (b) => {
    var S;
    if (b) {
      const T = K(a.nodes), L = K(a.edges), B = T.filter((ee) => ee.selected), X = L.filter((ee) => ee.selected), { nodes: q, edges: fe } = await rc({
        nodesToRemove: B,
        edgesToRemove: X,
        nodes: T,
        edges: L,
        onBeforeDelete: K(a.onbeforedelete)
      });
      (q.length || fe.length) && (a.nodes.update((ee) => ee.filter((F) => !q.some((ge) => ge.id === F.id))), a.edges.update((ee) => ee.filter((F) => !fe.some((ge) => ge.id === F.id))), (S = K(a.ondelete)) == null || S({
        nodes: q,
        edges: fe
      }));
    }
  });
  function M(b) {
    const S = K(a.multiselectionKeyPressed);
    a.nodes.update((T) => T.map((L) => {
      const B = b.includes(L.id), X = S && L.selected || B;
      return L.selected = X, L;
    })), S || a.edges.update((T) => T.map((L) => (L.selected = !1, L)));
  }
  function D(b) {
    const S = K(a.multiselectionKeyPressed);
    a.edges.update((T) => T.map((L) => {
      const B = b.includes(L.id), X = S && L.selected || B;
      return L.selected = X, L;
    })), S || a.nodes.update((T) => T.map((L) => (L.selected = !1, L)));
  }
  function A(b) {
    var T;
    const S = (T = K(a.nodes)) == null ? void 0 : T.find((L) => L.id === b);
    if (!S) {
      console.warn("012", Po.error012(b));
      return;
    }
    a.selectionRect.set(null), a.selectionRectMode.set(null), S.selected ? S.selected && K(a.multiselectionKeyPressed) && N({ nodes: [S], edges: [] }) : M([b]);
  }
  function V(b) {
    const S = K(a.viewport);
    return Y0({
      delta: b,
      panZoom: K(a.panZoom),
      transform: [S.x, S.y, S.zoom],
      translateExtent: K(a.translateExtent),
      width: K(a.width),
      height: K(a.height)
    });
  }
  const z = ye(Hs), I = (b) => {
    z.set({ ...b });
  };
  function E() {
    z.set(Hs);
  }
  function H() {
    a.fitViewOnInitDone.set(!1), a.selectionRect.set(null), a.selectionRectMode.set(null), a.snapGrid.set(null), a.isValidConnection.set(() => !0), N(), E();
  }
  return {
    // state
    ...a,
    // derived state
    visibleEdges: x2(a),
    visibleNodes: b2(a),
    connection: Wn([z, a.viewport], ([b, S]) => b.inProgress ? {
      ...b,
      to: To(b.to, [S.x, S.y, S.zoom])
    } : { ...b }),
    markers: Wn([a.edges, a.defaultMarkerColor, a.flowId], ([b, S, T]) => D0(b, { defaultColor: S, id: T })),
    initialized: (() => {
      let b = !1;
      const S = K(a.nodes).length, T = K(a.edges).length;
      return Wn([a.nodesInitialized, a.edgesInitialized, a.viewportInitialized], ([L, B, X]) => b || (S === 0 ? b = X : T === 0 ? b = X && L : b = X && L && B, b));
    })(),
    // actions
    syncNodeStores: (b) => v2(a.nodes, b),
    syncEdgeStores: (b) => p2(a.edges, b),
    syncViewport: (b) => m2(a.panZoom, a.viewport, b),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: f,
    updateNodeInternals: d,
    zoomIn: _,
    zoomOut: $,
    fitView: (b) => g(b),
    setMinZoom: p,
    setMaxZoom: x,
    setTranslateExtent: m,
    setPaneClickDistance: P,
    unselectNodesAndEdges: N,
    addSelectedNodes: M,
    addSelectedEdges: D,
    handleNodeSelection: A,
    panBy: V,
    updateConnection: I,
    cancelConnection: E,
    reset: H
  };
}
function et() {
  const e = ir(Fi);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function C2({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) {
  const a = Ac({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s });
  return Dr(Fi, {
    getStore: () => a
  }), a;
}
function us(e, t) {
  const { panZoom: n, minZoom: r, maxZoom: o, initialViewport: i, viewport: s, dragging: a, translateExtent: l, paneClickDistance: u } = t, c = s2({
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
var k2 = /* @__PURE__ */ ne('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const E2 = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function Dc(e, t) {
  ce(t, !1), Qe(e, E2);
  const [n, r] = tt(), o = () => j(T, "$panActivationKeyPressed", n), i = () => j(I, "$minZoom", n), s = () => j(E, "$maxZoom", n), a = () => j(L, "$zoomActivationKeyPressed", n), l = () => j(z, "$selectionRect", n), u = () => j(b, "$translateExtent", n), c = () => j(S, "$lib", n), f = te(), d = te(), g = te();
  let v = w(t, "initialViewport", 12, void 0), C = w(t, "onMoveStart", 12, void 0), _ = w(t, "onMove", 12, void 0), $ = w(t, "onMoveEnd", 12, void 0), p = w(t, "panOnScrollMode", 12), x = w(t, "preventScrolling", 12), m = w(t, "zoomOnScroll", 12), k = w(t, "zoomOnDoubleClick", 12), P = w(t, "zoomOnPinch", 12), N = w(t, "panOnDrag", 12), M = w(t, "panOnScroll", 12), D = w(t, "paneClickDistance", 12);
  const {
    viewport: A,
    panZoom: V,
    selectionRect: z,
    minZoom: I,
    maxZoom: E,
    dragging: H,
    translateExtent: b,
    lib: S,
    panActivationKeyPressed: T,
    zoomActivationKeyPressed: L,
    viewportInitialized: B
  } = et(), X = (F) => A.set({
    x: F[0],
    y: F[1],
    zoom: F[2]
  });
  wn(() => {
    li(B, !0);
  }), ue(() => U(v()), () => {
    G(f, v() || { x: 0, y: 0, zoom: 1 });
  }), ue(
    () => (o(), U(N())),
    () => {
      G(d, o() || N());
    }
  ), ue(
    () => (o(), U(M())),
    () => {
      G(g, o() || M());
    }
  ), ht(), Ae();
  var q = k2(), fe = W(q);
  pt(fe, t, "default", {}), Z(q), vt(q, (F, ge) => us == null ? void 0 : us(F, ge), () => ({
    viewport: A,
    minZoom: i(),
    maxZoom: s(),
    initialViewport: h(f),
    dragging: H,
    panZoom: V,
    onPanZoomStart: C(),
    onPanZoom: _(),
    onPanZoomEnd: $(),
    zoomOnScroll: m(),
    zoomOnDoubleClick: k(),
    zoomOnPinch: P(),
    panOnScroll: h(g),
    panOnDrag: h(d),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: p() || Fn.Free,
    zoomActivationKeyPressed: a(),
    preventScrolling: typeof x() == "boolean" ? x() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: D(),
    onTransformChange: X
  })), O(e, q);
  var ee = de({
    get initialViewport() {
      return v();
    },
    set initialViewport(F) {
      v(F), y();
    },
    get onMoveStart() {
      return C();
    },
    set onMoveStart(F) {
      C(F), y();
    },
    get onMove() {
      return _();
    },
    set onMove(F) {
      _(F), y();
    },
    get onMoveEnd() {
      return $();
    },
    set onMoveEnd(F) {
      $(F), y();
    },
    get panOnScrollMode() {
      return p();
    },
    set panOnScrollMode(F) {
      p(F), y();
    },
    get preventScrolling() {
      return x();
    },
    set preventScrolling(F) {
      x(F), y();
    },
    get zoomOnScroll() {
      return m();
    },
    set zoomOnScroll(F) {
      m(F), y();
    },
    get zoomOnDoubleClick() {
      return k();
    },
    set zoomOnDoubleClick(F) {
      k(F), y();
    },
    get zoomOnPinch() {
      return P();
    },
    set zoomOnPinch(F) {
      P(F), y();
    },
    get panOnDrag() {
      return N();
    },
    set panOnDrag(F) {
      N(F), y();
    },
    get panOnScroll() {
      return M();
    },
    set panOnScroll(F) {
      M(F), y();
    },
    get paneClickDistance() {
      return D();
    },
    set paneClickDistance(F) {
      D(F), y();
    }
  });
  return r(), ee;
}
re(
  Dc,
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
function kl(e, t) {
  return (n) => {
    n.target === t && (e == null || e(n));
  };
}
function El(e) {
  return (t) => {
    const n = e.includes(t.id);
    return t.selected !== n && (t.selected = n), t;
  };
}
var $2 = /* @__PURE__ */ ne('<div class="svelte-flow__pane svelte-1esy7hx"><!></div>');
const S2 = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function Vc(e, t) {
  ce(t, !1), Qe(e, S2);
  const [n, r] = tt(), o = () => j(E, "$panActivationKeyPressed", n), i = () => j(z, "$selectionKeyPressed", n), s = () => j(A, "$selectionRect", n), a = () => j(D, "$elementsSelectable", n), l = () => j(V, "$selectionRectMode", n), u = () => j(P, "$edges", n), c = () => j(k, "$nodeLookup", n), f = () => j(N, "$viewport", n), d = () => j(I, "$selectionMode", n), g = () => j(M, "$dragging", n), v = te(), C = te(), _ = te();
  let $ = w(t, "panOnDrag", 12, void 0), p = w(t, "selectionOnDrag", 12, void 0);
  const x = Li(), {
    nodes: m,
    nodeLookup: k,
    edges: P,
    viewport: N,
    dragging: M,
    elementsSelectable: D,
    selectionRect: A,
    selectionRectMode: V,
    selectionKeyPressed: z,
    selectionMode: I,
    panActivationKeyPressed: E,
    unselectNodesAndEdges: H
  } = et();
  let b = te(), S = null, T = [], L = !1;
  function B(ve) {
    if (L) {
      L = !1;
      return;
    }
    x("paneclick", { event: ve }), H(), V.set(null);
  }
  function X(ve) {
    var Ze, Ie;
    if (S = h(b).getBoundingClientRect(), !D || !h(C) || ve.button !== 0 || ve.target !== h(b) || !S)
      return;
    (Ie = (Ze = ve.target) == null ? void 0 : Ze.setPointerCapture) == null || Ie.call(Ze, ve.pointerId);
    const { x: se, y: Pe } = Mn(ve, S);
    H(), A.set({
      width: 0,
      height: 0,
      startX: se,
      startY: Pe,
      x: se,
      y: Pe
    });
  }
  function q(ve) {
    if (!h(C) || !S || !s())
      return;
    L = !0;
    const se = Mn(ve, S), Pe = s().startX ?? 0, Ze = s().startY ?? 0, Ie = {
      ...s(),
      x: se.x < Pe ? se.x : Pe,
      y: se.y < Ze ? se.y : Ze,
      width: Math.abs(se.x - Pe),
      height: Math.abs(se.y - Ze)
    }, Fe = T.map((me) => me.id), Q = As(T, u()).map((me) => me.id);
    T = nc(
      c(),
      Ie,
      [
        f().x,
        f().y,
        f().zoom
      ],
      d() === pi.Partial,
      !0
    );
    const le = As(T, u()).map((me) => me.id), ie = T.map((me) => me.id);
    (Fe.length !== ie.length || ie.some((me) => !Fe.includes(me))) && m.update((me) => me.map(El(ie))), (Q.length !== le.length || le.some((me) => !Q.includes(me))) && P.update((me) => me.map(El(le))), V.set("user"), A.set(Ie);
  }
  function fe(ve) {
    var se, Pe;
    ve.button === 0 && ((Pe = (se = ve.target) == null ? void 0 : se.releasePointerCapture) == null || Pe.call(se, ve.pointerId), !h(C) && l() === "user" && ve.target === h(b) && (B == null || B(ve)), A.set(null), T.length > 0 && li(V, "nodes"), i() && (L = !1));
  }
  const ee = (ve) => {
    var se;
    if (Array.isArray(h(v)) && ((se = h(v)) != null && se.includes(2))) {
      ve.preventDefault();
      return;
    }
    x("panecontextmenu", { event: ve });
  };
  ue(
    () => (o(), U($())),
    () => {
      G(v, o() || $());
    }
  ), ue(
    () => (i(), s(), U(p()), h(v)),
    () => {
      G(C, i() || s() || p() && h(v) !== !0);
    }
  ), ue(
    () => (a(), h(C), l()),
    () => {
      G(_, a() && (h(C) || l() === "user"));
    }
  ), ht(), Ae();
  var F = $2(), ge = /* @__PURE__ */ Te(() => h(_) ? void 0 : kl(B, h(b))), we = /* @__PURE__ */ Te(() => kl(ee, h(b))), be = W(F);
  pt(be, t, "default", {}), Z(F), An(F, (ve) => G(b, ve), () => h(b)), Se(
    (ve) => {
      it(F, "draggable", ve), it(F, "dragging", g()), it(F, "selection", h(C));
    },
    [
      () => $() === !0 || Array.isArray($()) && $().includes(0)
    ],
    pe
  ), je("click", F, function(...ve) {
    var se;
    (se = h(ge)) == null || se.apply(this, ve);
  }), je("pointerdown", F, function(...ve) {
    var se;
    (se = h(_) ? X : void 0) == null || se.apply(this, ve);
  }), je("pointermove", F, function(...ve) {
    var se;
    (se = h(_) ? q : void 0) == null || se.apply(this, ve);
  }), je("pointerup", F, function(...ve) {
    var se;
    (se = h(_) ? fe : void 0) == null || se.apply(this, ve);
  }), je("contextmenu", F, function(...ve) {
    var se;
    (se = h(we)) == null || se.apply(this, ve);
  }), O(e, F);
  var he = de({
    get panOnDrag() {
      return $();
    },
    set panOnDrag(ve) {
      $(ve), y();
    },
    get selectionOnDrag() {
      return p();
    },
    set selectionOnDrag(ve) {
      p(ve), y();
    }
  });
  return r(), he;
}
re(Vc, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var P2 = /* @__PURE__ */ ne('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const N2 = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function Oc(e, t) {
  ce(t, !1), Qe(e, N2);
  const [n, r] = tt(), o = () => j(i, "$viewport", n), { viewport: i } = et();
  Ae();
  var s = P2(), a = W(s);
  pt(a, t, "default", {}), Z(s), Se(() => ae(s, "style", `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), O(e, s), de(), r();
}
re(Oc, {}, ["default"], [], !0);
function Sr(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = W0({
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
function M2({ width: e, height: t, initialWidth: n, initialHeight: r, measuredWidth: o, measuredHeight: i }) {
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
var T2 = /* @__PURE__ */ ne("<div><!></div>");
function Lc(e, t) {
  ce(t, !1);
  const [n, r] = tt(), o = () => j(we, "$nodeTypes", n), i = () => j(Pe, "$elementsSelectable", n), s = () => j(Ze, "$nodesDraggable", n), a = () => j(le, "$connectableStore", n), l = te(void 0, !0), u = te(void 0, !0), c = te(void 0, !0), f = te(void 0, !0);
  let d = w(t, "node", 13), g = w(t, "id", 13), v = w(t, "data", 29, () => ({})), C = w(t, "selected", 13, !1), _ = w(t, "draggable", 13, void 0), $ = w(t, "selectable", 13, void 0), p = w(t, "connectable", 13, !0), x = w(t, "deletable", 13, !0), m = w(t, "hidden", 13, !1), k = w(t, "dragging", 13, !1), P = w(t, "resizeObserver", 13, null), N = w(t, "style", 13, void 0), M = w(t, "type", 13, "default"), D = w(t, "isParent", 13, !1), A = w(t, "positionX", 13), V = w(t, "positionY", 13), z = w(t, "sourcePosition", 13, void 0), I = w(t, "targetPosition", 13, void 0), E = w(t, "zIndex", 13), H = w(t, "measuredWidth", 13, void 0), b = w(t, "measuredHeight", 13, void 0), S = w(t, "initialWidth", 13, void 0), T = w(t, "initialHeight", 13, void 0), L = w(t, "width", 13, void 0), B = w(t, "height", 13, void 0), X = w(t, "dragHandle", 13, void 0), q = w(t, "initialized", 13, !1), fe = w(t, "parentId", 13, void 0), ee = w(t, "nodeClickDistance", 13, void 0), F = w(t, "class", 13, "");
  const ge = et(), {
    nodeTypes: we,
    nodeDragThreshold: be,
    selectNodesOnDrag: he,
    handleNodeSelection: ve,
    updateNodeInternals: se,
    elementsSelectable: Pe,
    nodesDraggable: Ze
  } = ge;
  let Ie = te(void 0, !0), Fe = te(null, !0);
  const Q = Li(), le = ye(p());
  let ie = te(void 0, !0), me = te(void 0, !0), qe = te(void 0, !0);
  Dr("svelteflow__node_id", g()), Dr("svelteflow__node_connectable", le), ta(() => {
    var J;
    h(Fe) && ((J = P()) == null || J.unobserve(h(Fe)));
  });
  function Ve(J) {
    $() && (!K(he) || !_() || K(be) > 0) && ve(g()), Q("nodeclick", { node: d().internals.userNode, event: J });
  }
  ue(() => U(M()), () => {
    G(l, M() || "default");
  }), ue(() => (o(), h(l)), () => {
    G(u, !!o()[h(l)]);
  }), ue(
    () => (o(), h(l), _i),
    () => {
      G(c, o()[h(l)] || _i);
    }
  ), ue(
    () => (h(u), U(M())),
    () => {
      h(u) || console.warn("003", Po.error003(M()));
    }
  ), ue(
    () => (U(L()), U(B()), U(S()), U(T()), U(H()), U(b())),
    () => {
      G(f, M2({
        width: L(),
        height: B(),
        initialWidth: S(),
        initialHeight: T(),
        measuredWidth: H(),
        measuredHeight: b()
      }));
    }
  ), ue(() => U(p()), () => {
    le.set(!!p());
  }), ue(
    () => (h(ie), h(l), h(me), U(z()), h(qe), U(I()), U(g()), h(Ie)),
    () => {
      (h(ie) && h(l) !== h(ie) || h(me) && z() !== h(me) || h(qe) && I() !== h(qe)) && requestAnimationFrame(() => se(/* @__PURE__ */ new Map([
        [
          g(),
          {
            id: g(),
            nodeElement: h(Ie),
            force: !0
          }
        ]
      ]))), G(ie, h(l)), G(me, z()), G(qe, I());
    }
  ), ue(
    () => (U(P()), h(Ie), h(Fe), U(q())),
    () => {
      P() && (h(Ie) !== h(Fe) || !q()) && (h(Fe) && P().unobserve(h(Fe)), h(Ie) && P().observe(h(Ie)), G(Fe, h(Ie)));
    }
  ), ht(), Ae(!0);
  var nt = Je(), Be = _e(nt);
  {
    var ct = (J) => {
      var He = T2(), oe = W(He);
      const bn = /* @__PURE__ */ pe(() => C() ?? !1), Ut = /* @__PURE__ */ pe(() => $() ?? i() ?? !0), Ne = /* @__PURE__ */ pe(() => x() ?? !0), ut = /* @__PURE__ */ pe(() => _() ?? s() ?? !0);
      _u(oe, () => h(c), (Ce, Oe) => {
        Oe(Ce, {
          get data() {
            return v();
          },
          get id() {
            return g();
          },
          get selected() {
            return h(bn);
          },
          get selectable() {
            return h(Ut);
          },
          get deletable() {
            return h(Ne);
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
            return k();
          },
          get draggable() {
            return h(ut);
          },
          get dragHandle() {
            return X();
          },
          get parentId() {
            return fe();
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
            return L();
          },
          get height() {
            return B();
          }
        });
      }), Z(He), vt(He, (Ce, Oe) => Sr == null ? void 0 : Sr(Ce, Oe), () => ({
        nodeId: g(),
        isSelectable: $(),
        disabled: !1,
        handleSelector: X(),
        noDragClass: "nodrag",
        nodeClickDistance: ee(),
        onNodeMouseDown: ve,
        onDrag: (Ce, Oe, lt, Yt) => {
          Q("nodedrag", { event: Ce, targetNode: lt, nodes: Yt });
        },
        onDragStart: (Ce, Oe, lt, Yt) => {
          Q("nodedragstart", { event: Ce, targetNode: lt, nodes: Yt });
        },
        onDragStop: (Ce, Oe, lt, Yt) => {
          Q("nodedragstop", { event: Ce, targetNode: lt, nodes: Yt });
        },
        store: ge
      })), An(He, (Ce) => G(Ie, Ce), () => h(Ie)), Ot(() => je("click", He, Ve)), Ot(() => je("mouseenter", He, (Ce) => Q("nodemouseenter", { node: d(), event: Ce }))), Ot(() => je("mouseleave", He, (Ce) => Q("nodemouseleave", { node: d(), event: Ce }))), Ot(() => je("mousemove", He, (Ce) => Q("nodemousemove", { node: d(), event: Ce }))), Ot(() => je("contextmenu", He, (Ce) => Q("nodecontextmenu", { node: d(), event: Ce }))), Se(
        (Ce) => {
          ae(He, "data-id", g()), Vr(He, yn(Ce)), ae(He, "style", `${N() ?? ""};${h(f).width ?? ""}${h(f).height ?? ""}`), it(He, "dragging", k()), it(He, "selected", C()), it(He, "draggable", _()), it(He, "connectable", p()), it(He, "selectable", $()), it(He, "nopan", _()), it(He, "parent", D()), at(He, "z-index", E()), at(He, "transform", `translate(${A() ?? ""}px, ${V() ?? ""}px)`), at(He, "visibility", q() ? "visible" : "hidden");
        },
        [
          () => Et([
            "svelte-flow__node",
            `svelte-flow__node-${h(l)}`,
            F()
          ])
        ],
        pe
      ), O(J, He);
    };
    Ee(Be, (J) => {
      m() || J(ct);
    });
  }
  O(e, nt);
  var rt = de({
    get node() {
      return d();
    },
    set node(J) {
      d(J), y();
    },
    get id() {
      return g();
    },
    set id(J) {
      g(J), y();
    },
    get data() {
      return v();
    },
    set data(J) {
      v(J), y();
    },
    get selected() {
      return C();
    },
    set selected(J) {
      C(J), y();
    },
    get draggable() {
      return _();
    },
    set draggable(J) {
      _(J), y();
    },
    get selectable() {
      return $();
    },
    set selectable(J) {
      $(J), y();
    },
    get connectable() {
      return p();
    },
    set connectable(J) {
      p(J), y();
    },
    get deletable() {
      return x();
    },
    set deletable(J) {
      x(J), y();
    },
    get hidden() {
      return m();
    },
    set hidden(J) {
      m(J), y();
    },
    get dragging() {
      return k();
    },
    set dragging(J) {
      k(J), y();
    },
    get resizeObserver() {
      return P();
    },
    set resizeObserver(J) {
      P(J), y();
    },
    get style() {
      return N();
    },
    set style(J) {
      N(J), y();
    },
    get type() {
      return M();
    },
    set type(J) {
      M(J), y();
    },
    get isParent() {
      return D();
    },
    set isParent(J) {
      D(J), y();
    },
    get positionX() {
      return A();
    },
    set positionX(J) {
      A(J), y();
    },
    get positionY() {
      return V();
    },
    set positionY(J) {
      V(J), y();
    },
    get sourcePosition() {
      return z();
    },
    set sourcePosition(J) {
      z(J), y();
    },
    get targetPosition() {
      return I();
    },
    set targetPosition(J) {
      I(J), y();
    },
    get zIndex() {
      return E();
    },
    set zIndex(J) {
      E(J), y();
    },
    get measuredWidth() {
      return H();
    },
    set measuredWidth(J) {
      H(J), y();
    },
    get measuredHeight() {
      return b();
    },
    set measuredHeight(J) {
      b(J), y();
    },
    get initialWidth() {
      return S();
    },
    set initialWidth(J) {
      S(J), y();
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
      return fe();
    },
    set parentId(J) {
      fe(J), y();
    },
    get nodeClickDistance() {
      return ee();
    },
    set nodeClickDistance(J) {
      ee(J), y();
    },
    get class() {
      return F();
    },
    set class(J) {
      F(J), y();
    }
  });
  return r(), rt;
}
re(
  Lc,
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
var H2 = /* @__PURE__ */ ne('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const A2 = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function zc(e, t) {
  ce(t, !1), Qe(e, A2);
  const [n, r] = tt(), o = () => j(c, "$visibleNodes", n), i = () => j(f, "$nodesDraggable", n), s = () => j(g, "$elementsSelectable", n), a = () => j(d, "$nodesConnectable", n), l = () => j(C, "$parentLookup", n);
  let u = w(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: f,
    nodesConnectable: d,
    elementsSelectable: g,
    updateNodeInternals: v,
    parentLookup: C
  } = et(), _ = typeof ResizeObserver > "u" ? null : new ResizeObserver((x) => {
    const m = /* @__PURE__ */ new Map();
    x.forEach((k) => {
      const P = k.target.getAttribute("data-id");
      m.set(P, { id: P, nodeElement: k.target, force: !0 });
    }), v(m);
  });
  ta(() => {
    _ == null || _.disconnect();
  }), Ae();
  var $ = H2();
  It($, 5, o, (x) => x.id, (x, m) => {
    const k = /* @__PURE__ */ pe(() => !!h(m).selected), P = /* @__PURE__ */ pe(() => !!h(m).hidden), N = /* @__PURE__ */ pe(() => !!(h(m).draggable || i() && typeof h(m).draggable > "u")), M = /* @__PURE__ */ pe(() => !!(h(m).selectable || s() && typeof h(m).selectable > "u")), D = /* @__PURE__ */ pe(() => !!(h(m).connectable || a() && typeof h(m).connectable > "u")), A = /* @__PURE__ */ pe(() => h(m).deletable ?? !0), V = /* @__PURE__ */ pe(() => l().has(h(m).id)), z = /* @__PURE__ */ pe(() => h(m).type ?? "default"), I = /* @__PURE__ */ pe(() => h(m).internals.z ?? 0), E = /* @__PURE__ */ pe(() => lc(h(m)));
    Lc(x, {
      get node() {
        return h(m);
      },
      get id() {
        return h(m).id;
      },
      get data() {
        return h(m).data;
      },
      get selected() {
        return h(k);
      },
      get hidden() {
        return h(P);
      },
      get draggable() {
        return h(N);
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
        return h(m).internals.positionAbsolute.x;
      },
      get positionY() {
        return h(m).internals.positionAbsolute.y;
      },
      get isParent() {
        return h(V);
      },
      get style() {
        return h(m).style;
      },
      get class() {
        return h(m).class;
      },
      get type() {
        return h(z);
      },
      get sourcePosition() {
        return h(m).sourcePosition;
      },
      get targetPosition() {
        return h(m).targetPosition;
      },
      get dragging() {
        return h(m).dragging;
      },
      get zIndex() {
        return h(I);
      },
      get dragHandle() {
        return h(m).dragHandle;
      },
      get initialized() {
        return h(E);
      },
      get width() {
        return h(m).width;
      },
      get height() {
        return h(m).height;
      },
      get initialWidth() {
        return h(m).initialWidth;
      },
      get initialHeight() {
        return h(m).initialHeight;
      },
      get measuredWidth() {
        return h(m).measured.width;
      },
      get measuredHeight() {
        return h(m).measured.height;
      },
      get parentId() {
        return h(m).parentId;
      },
      resizeObserver: _,
      get nodeClickDistance() {
        return u();
      },
      $$events: {
        nodeclick(H) {
          ze.call(this, t, H);
        },
        nodemouseenter(H) {
          ze.call(this, t, H);
        },
        nodemousemove(H) {
          ze.call(this, t, H);
        },
        nodemouseleave(H) {
          ze.call(this, t, H);
        },
        nodedrag(H) {
          ze.call(this, t, H);
        },
        nodedragstart(H) {
          ze.call(this, t, H);
        },
        nodedragstop(H) {
          ze.call(this, t, H);
        },
        nodecontextmenu(H) {
          ze.call(this, t, H);
        }
      }
    });
  }), Z($), O(e, $);
  var p = de({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance(x) {
      u(x), y();
    }
  });
  return r(), p;
}
re(zc, { nodeClickDistance: {} }, [], [], !0);
var D2 = /* @__PURE__ */ xe('<svg><g role="img"><!></g></svg>');
function Ic(e, t) {
  ce(t, !1);
  const [n, r] = tt(), o = () => j(F, "$edgeTypes", n), i = () => j(ge, "$flowId", n), s = () => j(we, "$elementsSelectable", n), a = () => j(ee, "$edgeLookup", n), l = te(void 0, !0), u = te(void 0, !0), c = te(void 0, !0), f = te(void 0, !0), d = te(void 0, !0);
  let g = w(t, "id", 13), v = w(t, "type", 13, "default"), C = w(t, "source", 13, ""), _ = w(t, "target", 13, ""), $ = w(t, "data", 29, () => ({})), p = w(t, "style", 13, void 0), x = w(t, "zIndex", 13, void 0), m = w(t, "animated", 13, !1), k = w(t, "selected", 13, !1), P = w(t, "selectable", 13, void 0), N = w(t, "deletable", 13, void 0), M = w(t, "hidden", 13, !1), D = w(t, "label", 13, void 0), A = w(t, "labelStyle", 13, void 0), V = w(t, "markerStart", 13, void 0), z = w(t, "markerEnd", 13, void 0), I = w(t, "sourceHandle", 13, void 0), E = w(t, "targetHandle", 13, void 0), H = w(t, "sourceX", 13), b = w(t, "sourceY", 13), S = w(t, "targetX", 13), T = w(t, "targetY", 13), L = w(t, "sourcePosition", 13), B = w(t, "targetPosition", 13), X = w(t, "ariaLabel", 13, void 0), q = w(t, "interactionWidth", 13, void 0), fe = w(t, "class", 13, "");
  Dr("svelteflow__edge_id", g());
  const {
    edgeLookup: ee,
    edgeTypes: F,
    flowId: ge,
    elementsSelectable: we
  } = et(), be = Li(), he = $c();
  function ve(Q) {
    const le = a().get(g());
    le && (he(g()), be("edgeclick", { event: Q, edge: le }));
  }
  function se(Q, le) {
    const ie = a().get(g());
    ie && be(le, { event: Q, edge: ie });
  }
  ue(() => U(v()), () => {
    G(l, v() || "default");
  }), ue(
    () => (o(), h(l), xi),
    () => {
      G(u, o()[h(l)] || xi);
    }
  ), ue(
    () => (U(V()), i()),
    () => {
      G(c, V() ? `url('#${Os(V(), i())}')` : void 0);
    }
  ), ue(
    () => (U(z()), i()),
    () => {
      G(f, z() ? `url('#${Os(z(), i())}')` : void 0);
    }
  ), ue(
    () => (U(P()), s()),
    () => {
      G(d, P() ?? s());
    }
  ), ht(), Ae(!0);
  var Pe = Je(), Ze = _e(Pe);
  {
    var Ie = (Q) => {
      var le = D2(), ie = W(le), me = W(ie);
      const qe = /* @__PURE__ */ pe(() => N() ?? !0);
      _u(me, () => h(u), (Ve, nt) => {
        nt(Ve, {
          get id() {
            return g();
          },
          get source() {
            return C();
          },
          get target() {
            return _();
          },
          get sourceX() {
            return H();
          },
          get sourceY() {
            return b();
          },
          get targetX() {
            return S();
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
            return m();
          },
          get selected() {
            return k();
          },
          get label() {
            return D();
          },
          get labelStyle() {
            return A();
          },
          get data() {
            return $();
          },
          get style() {
            return p();
          },
          get interactionWidth() {
            return q();
          },
          get selectable() {
            return h(d);
          },
          get deletable() {
            return h(qe);
          },
          get type() {
            return h(l);
          },
          get sourceHandleId() {
            return I();
          },
          get targetHandleId() {
            return E();
          },
          get markerStart() {
            return h(c);
          },
          get markerEnd() {
            return h(f);
          }
        });
      }), Z(ie), Z(le), Se(
        (Ve) => {
          at(le, "z-index", x()), hr(ie, yn(Ve)), ae(ie, "data-id", g()), ae(ie, "aria-label", X() === null ? void 0 : X() ? X() : `Edge from ${C()} to ${_()}`), it(ie, "animated", m()), it(ie, "selected", k()), it(ie, "selectable", h(d));
        },
        [
          () => Et(["svelte-flow__edge", fe()])
        ],
        pe
      ), je("click", ie, ve), je("contextmenu", ie, (Ve) => {
        se(Ve, "edgecontextmenu");
      }), je("mouseenter", ie, (Ve) => {
        se(Ve, "edgemouseenter");
      }), je("mouseleave", ie, (Ve) => {
        se(Ve, "edgemouseleave");
      }), O(Q, le);
    };
    Ee(Ze, (Q) => {
      M() || Q(Ie);
    });
  }
  O(e, Pe);
  var Fe = de({
    get id() {
      return g();
    },
    set id(Q) {
      g(Q), y();
    },
    get type() {
      return v();
    },
    set type(Q) {
      v(Q), y();
    },
    get source() {
      return C();
    },
    set source(Q) {
      C(Q), y();
    },
    get target() {
      return _();
    },
    set target(Q) {
      _(Q), y();
    },
    get data() {
      return $();
    },
    set data(Q) {
      $(Q), y();
    },
    get style() {
      return p();
    },
    set style(Q) {
      p(Q), y();
    },
    get zIndex() {
      return x();
    },
    set zIndex(Q) {
      x(Q), y();
    },
    get animated() {
      return m();
    },
    set animated(Q) {
      m(Q), y();
    },
    get selected() {
      return k();
    },
    set selected(Q) {
      k(Q), y();
    },
    get selectable() {
      return P();
    },
    set selectable(Q) {
      P(Q), y();
    },
    get deletable() {
      return N();
    },
    set deletable(Q) {
      N(Q), y();
    },
    get hidden() {
      return M();
    },
    set hidden(Q) {
      M(Q), y();
    },
    get label() {
      return D();
    },
    set label(Q) {
      D(Q), y();
    },
    get labelStyle() {
      return A();
    },
    set labelStyle(Q) {
      A(Q), y();
    },
    get markerStart() {
      return V();
    },
    set markerStart(Q) {
      V(Q), y();
    },
    get markerEnd() {
      return z();
    },
    set markerEnd(Q) {
      z(Q), y();
    },
    get sourceHandle() {
      return I();
    },
    set sourceHandle(Q) {
      I(Q), y();
    },
    get targetHandle() {
      return E();
    },
    set targetHandle(Q) {
      E(Q), y();
    },
    get sourceX() {
      return H();
    },
    set sourceX(Q) {
      H(Q), y();
    },
    get sourceY() {
      return b();
    },
    set sourceY(Q) {
      b(Q), y();
    },
    get targetX() {
      return S();
    },
    set targetX(Q) {
      S(Q), y();
    },
    get targetY() {
      return T();
    },
    set targetY(Q) {
      T(Q), y();
    },
    get sourcePosition() {
      return L();
    },
    set sourcePosition(Q) {
      L(Q), y();
    },
    get targetPosition() {
      return B();
    },
    set targetPosition(Q) {
      B(Q), y();
    },
    get ariaLabel() {
      return X();
    },
    set ariaLabel(Q) {
      X(Q), y();
    },
    get interactionWidth() {
      return q();
    },
    set interactionWidth(Q) {
      q(Q), y();
    },
    get class() {
      return fe();
    },
    set class(Q) {
      fe(Q), y();
    }
  });
  return r(), Fe;
}
re(
  Ic,
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
function Rc(e, t) {
  ce(t, !1);
  let n = w(t, "onMount", 12, void 0), r = w(t, "onDestroy", 12, void 0);
  return wn(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), Ae(), de({
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
re(Rc, { onMount: {}, onDestroy: {} }, [], [], !0);
var V2 = /* @__PURE__ */ xe("<defs></defs>");
function Bc(e, t) {
  ce(t, !1);
  const [n, r] = tt(), o = () => j(i, "$markers", n), { markers: i } = et();
  Ae();
  var s = V2();
  It(s, 5, o, (a) => a.id, (a, l) => {
    Yc(a, dt(() => h(l)));
  }), Z(s), O(e, s), de(), r();
}
re(Bc, {}, [], [], !0);
var O2 = /* @__PURE__ */ xe('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), L2 = /* @__PURE__ */ xe('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), z2 = /* @__PURE__ */ xe('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Yc(e, t) {
  ce(t, !1);
  let n = w(t, "id", 12), r = w(t, "type", 12), o = w(t, "width", 12, 12.5), i = w(t, "height", 12, 12.5), s = w(t, "markerUnits", 12, "strokeWidth"), a = w(t, "orient", 12, "auto-start-reverse"), l = w(t, "color", 12, void 0), u = w(t, "strokeWidth", 12, void 0);
  Ae();
  var c = z2(), f = W(c);
  {
    var d = (v) => {
      var C = O2();
      Se(() => {
        ae(C, "stroke", l()), ae(C, "stroke-width", u());
      }), O(v, C);
    }, g = (v) => {
      var C = Je(), _ = _e(C);
      {
        var $ = (p) => {
          var x = L2();
          Se(() => {
            ae(x, "stroke", l()), ae(x, "stroke-width", u()), ae(x, "fill", l());
          }), O(p, x);
        };
        Ee(
          _,
          (p) => {
            r() === mo.ArrowClosed && p($);
          },
          !0
        );
      }
      O(v, C);
    };
    Ee(f, (v) => {
      r() === mo.Arrow ? v(d) : v(g, !1);
    });
  }
  return Z(c), Se(() => {
    ae(c, "id", n()), ae(c, "markerWidth", `${o()}`), ae(c, "markerHeight", `${i()}`), ae(c, "markerUnits", s()), ae(c, "orient", a());
  }), O(e, c), de({
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
re(
  Yc,
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
var I2 = /* @__PURE__ */ ne('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function Zc(e, t) {
  ce(t, !1);
  const [n, r] = tt(), o = () => j(a, "$visibleEdges", n), i = () => j(c, "$elementsSelectable", n);
  let s = w(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: a,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = et();
  wn(() => {
    s() && u(s());
  }), Ae();
  var f = I2(), d = W(f), g = W(d);
  Bc(g, {}), Z(d);
  var v = R(d, 2);
  It(v, 1, o, (p) => p.id, (p, x) => {
    const m = /* @__PURE__ */ pe(() => h(x).selectable ?? i()), k = /* @__PURE__ */ pe(() => h(x).type || "default");
    Ic(p, {
      get id() {
        return h(x).id;
      },
      get source() {
        return h(x).source;
      },
      get target() {
        return h(x).target;
      },
      get data() {
        return h(x).data;
      },
      get style() {
        return h(x).style;
      },
      get animated() {
        return h(x).animated;
      },
      get selected() {
        return h(x).selected;
      },
      get selectable() {
        return h(m);
      },
      get deletable() {
        return h(x).deletable;
      },
      get hidden() {
        return h(x).hidden;
      },
      get label() {
        return h(x).label;
      },
      get labelStyle() {
        return h(x).labelStyle;
      },
      get markerStart() {
        return h(x).markerStart;
      },
      get markerEnd() {
        return h(x).markerEnd;
      },
      get sourceHandle() {
        return h(x).sourceHandle;
      },
      get targetHandle() {
        return h(x).targetHandle;
      },
      get sourceX() {
        return h(x).sourceX;
      },
      get sourceY() {
        return h(x).sourceY;
      },
      get targetX() {
        return h(x).targetX;
      },
      get targetY() {
        return h(x).targetY;
      },
      get sourcePosition() {
        return h(x).sourcePosition;
      },
      get targetPosition() {
        return h(x).targetPosition;
      },
      get ariaLabel() {
        return h(x).ariaLabel;
      },
      get interactionWidth() {
        return h(x).interactionWidth;
      },
      get class() {
        return h(x).class;
      },
      get type() {
        return h(k);
      },
      get zIndex() {
        return h(x).zIndex;
      },
      $$events: {
        edgeclick(P) {
          ze.call(this, t, P);
        },
        edgecontextmenu(P) {
          ze.call(this, t, P);
        },
        edgemouseenter(P) {
          ze.call(this, t, P);
        },
        edgemouseleave(P) {
          ze.call(this, t, P);
        }
      }
    });
  });
  var C = R(v, 2);
  {
    var _ = (p) => {
      Rc(p, {
        onMount: () => {
          li(l, !0);
        },
        onDestroy: () => {
          li(l, !1);
        }
      });
    };
    Ee(C, (p) => {
      o().length > 0 && p(_);
    });
  }
  Z(f), O(e, f);
  var $ = de({
    get defaultEdgeOptions() {
      return s();
    },
    set defaultEdgeOptions(p) {
      s(p), y();
    }
  });
  return r(), $;
}
re(Zc, { defaultEdgeOptions: {} }, [], [], !0);
var R2 = /* @__PURE__ */ ne('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const B2 = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function pa(e, t) {
  ce(t, !1), Qe(e, B2);
  let n = w(t, "x", 12, 0), r = w(t, "y", 12, 0), o = w(t, "width", 12, 0), i = w(t, "height", 12, 0), s = w(t, "isVisible", 12, !0);
  var a = Je(), l = _e(a);
  {
    var u = (c) => {
      var f = R2();
      Se(() => {
        at(f, "width", typeof o() == "string" ? o() : `${o()}px`), at(f, "height", typeof i() == "string" ? i() : `${i()}px`), at(f, "transform", `translate(${n()}px, ${r()}px)`);
      }), O(c, f);
    };
    Ee(l, (c) => {
      s() && c(u);
    });
  }
  return O(e, a), de({
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
re(
  pa,
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
function Xc(e, t) {
  ce(t, !1);
  const [n, r] = tt(), o = () => j(s, "$selectionRect", n), i = () => j(a, "$selectionRectMode", n), { selectionRect: s, selectionRectMode: a } = et();
  Ae();
  const l = /* @__PURE__ */ pe(() => !!(o() && i() === "user")), u = /* @__PURE__ */ pe(() => {
    var g;
    return (g = o()) == null ? void 0 : g.width;
  }), c = /* @__PURE__ */ pe(() => {
    var g;
    return (g = o()) == null ? void 0 : g.height;
  }), f = /* @__PURE__ */ pe(() => {
    var g;
    return (g = o()) == null ? void 0 : g.x;
  }), d = /* @__PURE__ */ pe(() => {
    var g;
    return (g = o()) == null ? void 0 : g.y;
  });
  pa(e, {
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
re(Xc, {}, [], [], !0);
var Y2 = /* @__PURE__ */ ne('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const Z2 = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function Wc(e, t) {
  ce(t, !1), Qe(e, Z2);
  const [n, r] = tt(), o = () => j(l, "$selectionRectMode", n), i = () => j(c, "$nodeLookup", n), s = () => j(u, "$nodes", n), a = et(), { selectionRectMode: l, nodes: u, nodeLookup: c } = a, f = Li();
  let d = te(null);
  function g(p) {
    const x = s().filter((m) => m.selected);
    f("selectioncontextmenu", { nodes: x, event: p });
  }
  function v(p) {
    const x = s().filter((m) => m.selected);
    f("selectionclick", { nodes: x, event: p });
  }
  ue(
    () => (o(), i(), s()),
    () => {
      o() === "nodes" && (G(d, Mo(i(), { filter: (p) => !!p.selected })), s());
    }
  ), ht(), Ae();
  var C = Je(), _ = _e(C);
  {
    var $ = (p) => {
      var x = Y2(), m = W(x);
      pa(m, { width: "100%", height: "100%", x: 0, y: 0 }), Z(x), vt(x, (k, P) => Sr == null ? void 0 : Sr(k, P), () => ({
        disabled: !1,
        store: a,
        onDrag: (k, P, N, M) => {
          f("nodedrag", { event: k, targetNode: null, nodes: M });
        },
        onDragStart: (k, P, N, M) => {
          f("nodedragstart", { event: k, targetNode: null, nodes: M });
        },
        onDragStop: (k, P, N, M) => {
          f("nodedragstop", { event: k, targetNode: null, nodes: M });
        }
      })), Ot(() => je("contextmenu", x, g)), Ot(() => je("click", x, v)), Ot(() => je("keyup", x, () => {
      })), Se(() => ae(x, "style", `width: ${h(d).width ?? ""}px; height: ${h(d).height ?? ""}px; transform: translate(${h(d).x ?? ""}px, ${h(d).y ?? ""}px)`)), O(p, x);
    };
    Ee(_, (p) => {
      o() === "nodes" && h(d) && Sn(h(d).x) && Sn(h(d).y) && p($);
    });
  }
  O(e, C), de(), r();
}
re(Wc, {}, [], [], !0);
function Xe(e, t) {
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
      }, { modifier: f, key: d, callback: g, preventDefault: v, enabled: C } = c;
      if (C) {
        if (f.length && !(Array.isArray(f) ? f : [f]).map(
          (p) => typeof p == "string" ? [p] : p
        ).some(
          (p) => p.every((x) => l[x])
        ))
          continue;
        if (s.key === d) {
          v && s.preventDefault();
          const _ = {
            node: e,
            trigger: c,
            originalEvent: s
          };
          e.dispatchEvent(new CustomEvent("shortcut", { detail: _ })), g == null || g(_);
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
function Fc(e, t) {
  ce(t, !1);
  let n = w(t, "selectionKey", 12, "Shift"), r = w(t, "multiSelectionKey", 28, () => yi() ? "Meta" : "Control"), o = w(t, "deleteKey", 12, "Backspace"), i = w(t, "panActivationKey", 12, " "), s = w(t, "zoomActivationKey", 28, () => yi() ? "Meta" : "Control");
  const {
    selectionKeyPressed: a,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: f,
    selectionRect: d
  } = et();
  function g(p) {
    return p !== null && typeof p == "object";
  }
  function v(p) {
    return g(p) ? p.modifier || [] : [];
  }
  function C(p) {
    return p == null ? "" : g(p) ? p.key : p;
  }
  function _(p, x) {
    return (Array.isArray(p) ? p : [p]).map((k) => {
      const P = C(k);
      return {
        key: P,
        modifier: v(k),
        enabled: P !== null,
        callback: x
      };
    });
  }
  function $() {
    d.set(null), a.set(!1), l.set(!1), u.set(!1), c.set(!1), f.set(!1);
  }
  return Ae(), je("blur", Pt, $), je("contextmenu", Pt, $), vt(Pt, (p, x) => Xe == null ? void 0 : Xe(p, x), () => ({
    trigger: _(n(), () => a.set(!0)),
    type: "keydown"
  })), vt(Pt, (p, x) => Xe == null ? void 0 : Xe(p, x), () => ({
    trigger: _(n(), () => a.set(!1)),
    type: "keyup"
  })), vt(Pt, (p, x) => Xe == null ? void 0 : Xe(p, x), () => ({
    trigger: _(r(), () => l.set(!0)),
    type: "keydown"
  })), vt(Pt, (p, x) => Xe == null ? void 0 : Xe(p, x), () => ({
    trigger: _(r(), () => l.set(!1)),
    type: "keyup"
  })), vt(Pt, (p, x) => Xe == null ? void 0 : Xe(p, x), () => ({
    trigger: _(o(), (p) => {
      !(p.originalEvent.ctrlKey || p.originalEvent.metaKey || p.originalEvent.shiftKey) && !C0(p.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), vt(Pt, (p, x) => Xe == null ? void 0 : Xe(p, x), () => ({
    trigger: _(o(), () => u.set(!1)),
    type: "keyup"
  })), vt(Pt, (p, x) => Xe == null ? void 0 : Xe(p, x), () => ({
    trigger: _(i(), () => c.set(!0)),
    type: "keydown"
  })), vt(Pt, (p, x) => Xe == null ? void 0 : Xe(p, x), () => ({
    trigger: _(i(), () => c.set(!1)),
    type: "keyup"
  })), vt(Pt, (p, x) => Xe == null ? void 0 : Xe(p, x), () => ({
    trigger: _(s(), () => f.set(!0)),
    type: "keydown"
  })), vt(Pt, (p, x) => Xe == null ? void 0 : Xe(p, x), () => ({
    trigger: _(s(), () => f.set(!1)),
    type: "keyup"
  })), de({
    get selectionKey() {
      return n();
    },
    set selectionKey(p) {
      n(p), y();
    },
    get multiSelectionKey() {
      return r();
    },
    set multiSelectionKey(p) {
      r(p), y();
    },
    get deleteKey() {
      return o();
    },
    set deleteKey(p) {
      o(p), y();
    },
    get panActivationKey() {
      return i();
    },
    set panActivationKey(p) {
      i(p), y();
    },
    get zoomActivationKey() {
      return s();
    },
    set zoomActivationKey(p) {
      s(p), y();
    }
  });
}
re(
  Fc,
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
var X2 = /* @__PURE__ */ xe('<path fill="none" class="svelte-flow__connection-path"></path>'), W2 = /* @__PURE__ */ xe('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function Kc(e, t) {
  ce(t, !1);
  const [n, r] = tt(), o = () => j(g, "$connection", n), i = () => j(v, "$connectionLineType", n), s = () => j(f, "$width", n), a = () => j(d, "$height", n);
  let l = w(t, "containerStyle", 12, ""), u = w(t, "style", 12, ""), c = w(t, "isCustomComponent", 12, !1);
  const {
    width: f,
    height: d,
    connection: g,
    connectionLineType: v
  } = et();
  let C = te(null);
  ue(
    () => (o(), U(c()), i(), h(C), Vs),
    () => {
      if (o().inProgress && !c()) {
        const { from: m, to: k, fromPosition: P, toPosition: N } = o(), M = {
          sourceX: m.x,
          sourceY: m.y,
          sourcePosition: P,
          targetX: k.x,
          targetY: k.y,
          targetPosition: N
        };
        switch (i()) {
          case Er.Bezier:
            ((D) => G(C, D[0]))(cc(M));
            break;
          case Er.Step:
            ((D) => G(C, D[0]))(wi({ ...M, borderRadius: 0 }));
            break;
          case Er.SmoothStep:
            ((D) => G(C, D[0]))(wi(M));
            break;
          default:
            ((D) => G(C, D[0]))(Vs(M));
        }
      }
    }
  ), ht(), Ae();
  var _ = Je(), $ = _e(_);
  {
    var p = (m) => {
      var k = W2(), P = W(k), N = W(P);
      pt(N, t, "connectionLine", {});
      var M = R(N);
      {
        var D = (A) => {
          var V = X2();
          Se(() => {
            ae(V, "d", h(C)), ae(V, "style", u());
          }), O(A, V);
        };
        Ee(M, (A) => {
          c() || A(D);
        });
      }
      Z(P), Z(k), Se(
        (A) => {
          ae(k, "width", s()), ae(k, "height", a()), ae(k, "style", l()), hr(P, yn(A));
        },
        [
          () => Et([
            "svelte-flow__connection",
            h0(o().isValid)
          ])
        ],
        pe
      ), O(m, k);
    };
    Ee($, (m) => {
      o().inProgress && m(p);
    });
  }
  O(e, _);
  var x = de({
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
  return r(), x;
}
re(
  Kc,
  {
    containerStyle: {},
    style: {},
    isCustomComponent: {}
  },
  ["connectionLine"],
  [],
  !0
);
var F2 = /* @__PURE__ */ ne("<div><!></div>");
function Ki(e, t) {
  const n = ot(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = ot(n, ["position", "style", "class"]);
  ce(t, !1);
  const [o, i] = tt(), s = () => j(f, "$selectionRectMode", o), a = te();
  let l = w(t, "position", 12, "top-right"), u = w(t, "style", 12, void 0), c = w(t, "class", 12, void 0);
  const { selectionRectMode: f } = et();
  ue(() => U(l()), () => {
    G(a, `${l()}`.split("-"));
  }), ht(), Ae();
  var d = F2();
  let g;
  var v = W(d);
  pt(v, t, "default", {}), Z(d), Se(
    (_) => {
      g = nn(d, g, {
        class: _,
        style: u(),
        ...r
      }), at(d, "pointer-events", s() ? "none" : "");
    },
    [
      () => Et([
        "svelte-flow__panel",
        c(),
        ...h(a)
      ])
    ],
    pe
  ), O(e, d);
  var C = de({
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
  return i(), C;
}
re(Ki, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var K2 = /* @__PURE__ */ ne('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function qc(e, t) {
  ce(t, !1);
  let n = w(t, "proOptions", 12, void 0), r = w(t, "position", 12, "bottom-right");
  Ae();
  var o = Je(), i = _e(o);
  {
    var s = (a) => {
      Ki(a, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var c = K2();
          O(l, c);
        },
        $$slots: { default: !0 }
      });
    };
    Ee(i, (a) => {
      var l;
      (l = n()) != null && l.hideAttribution || a(s);
    });
  }
  return O(e, o), de({
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
re(qc, { proOptions: {}, position: {} }, [], [], !0);
function $l(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: i, paneClickDistance: s }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), o !== void 0 && e.setMaxZoom(o), i !== void 0 && e.setTranslateExtent(i), s !== void 0 && e.setPaneClickDistance(s);
}
const q2 = (e) => Object.keys(e);
function Sl(e, t) {
  q2(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function U2() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function G2(e = "light") {
  return Zt("light", (n) => {
    if (e !== "system") {
      n(e);
      return;
    }
    const r = U2(), o = () => n(r != null && r.matches ? "dark" : "light");
    return n(r != null && r.matches ? "dark" : "light"), r == null || r.addEventListener("change", o), () => {
      r == null || r.removeEventListener("change", o);
    };
  });
}
var j2 = /* @__PURE__ */ ne('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), J2 = /* @__PURE__ */ ne("<!> <!>", 1), Q2 = /* @__PURE__ */ ne("<div><!> <!> <!> <!></div>");
const ep = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function Uc(e, t) {
  const n = x1(t), r = ot(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), o = ot(r, [
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
  ce(t, !1), Qe(e, ep);
  const [i, s] = tt(), a = () => j(x(), "$viewport", i), l = () => j(Qi, "$initialized", i), u = () => j(h(c), "$colorModeClass", i), c = te();
  let f = w(t, "id", 12, "1"), d = w(t, "nodes", 12), g = w(t, "edges", 12), v = w(t, "fitView", 12, void 0), C = w(t, "fitViewOptions", 12, void 0), _ = w(t, "minZoom", 12, void 0), $ = w(t, "maxZoom", 12, void 0), p = w(t, "initialViewport", 12, void 0), x = w(t, "viewport", 12, void 0), m = w(t, "nodeTypes", 12, void 0), k = w(t, "edgeTypes", 12, void 0), P = w(t, "selectionKey", 12, void 0), N = w(t, "selectionMode", 12, void 0), M = w(t, "panActivationKey", 12, void 0), D = w(t, "multiSelectionKey", 12, void 0), A = w(t, "zoomActivationKey", 12, void 0), V = w(t, "nodesDraggable", 12, void 0), z = w(t, "nodesConnectable", 12, void 0), I = w(t, "nodeDragThreshold", 12, void 0), E = w(t, "elementsSelectable", 12, void 0), H = w(t, "snapGrid", 12, void 0), b = w(t, "deleteKey", 12, void 0), S = w(t, "connectionRadius", 12, void 0), T = w(t, "connectionLineType", 12, void 0), L = w(t, "connectionMode", 28, () => lr.Strict), B = w(t, "connectionLineStyle", 12, ""), X = w(t, "connectionLineContainerStyle", 12, ""), q = w(t, "onMoveStart", 12, void 0), fe = w(t, "onMove", 12, void 0), ee = w(t, "onMoveEnd", 12, void 0), F = w(t, "isValidConnection", 12, void 0), ge = w(t, "translateExtent", 12, void 0), we = w(t, "nodeExtent", 12, void 0), be = w(t, "onlyRenderVisibleElements", 12, void 0), he = w(t, "panOnScrollMode", 28, () => Fn.Free), ve = w(t, "preventScrolling", 12, !0), se = w(t, "zoomOnScroll", 12, !0), Pe = w(t, "zoomOnDoubleClick", 12, !0), Ze = w(t, "zoomOnPinch", 12, !0), Ie = w(t, "panOnScroll", 12, !1), Fe = w(t, "panOnDrag", 12, !0), Q = w(t, "selectionOnDrag", 12, void 0), le = w(t, "autoPanOnConnect", 12, !0), ie = w(t, "autoPanOnNodeDrag", 12, !0), me = w(t, "onerror", 12, void 0), qe = w(t, "ondelete", 12, void 0), Ve = w(t, "onedgecreate", 12, void 0), nt = w(t, "attributionPosition", 12, void 0), Be = w(t, "proOptions", 12, void 0), ct = w(t, "defaultEdgeOptions", 12, void 0), rt = w(t, "width", 12, void 0), J = w(t, "height", 12, void 0), He = w(t, "colorMode", 12, "light"), oe = w(t, "onconnect", 12, void 0), bn = w(t, "onconnectstart", 12, void 0), Ut = w(t, "onconnectend", 12, void 0), Ne = w(t, "onbeforedelete", 12, void 0), ut = w(t, "oninit", 12, void 0), Ce = w(t, "nodeOrigin", 12, void 0), Oe = w(t, "paneClickDistance", 12, 0), lt = w(t, "nodeClickDistance", 12, 0), Yt = w(t, "defaultMarkerColor", 12, "#b1b1b7"), pr = w(t, "style", 12, void 0), Gr = w(t, "class", 12, void 0), At = te(), $t = te(), an = te();
  const Gt = a() || p(), gt = t1(Fi) ? et() : C2({
    nodes: K(d()),
    edges: K(g()),
    width: rt(),
    height: J(),
    fitView: v(),
    nodeOrigin: Ce(),
    nodeExtent: we()
  });
  wn(() => (gt.width.set(h($t)), gt.height.set(h(an)), gt.domNode.set(h(At)), gt.syncNodeStores(d()), gt.syncEdgeStores(g()), gt.syncViewport(x()), v() !== void 0 && gt.fitViewOnInit.set(v()), C() && gt.fitViewOptions.set(C()), $l(gt, {
    nodeTypes: m(),
    edgeTypes: k(),
    minZoom: _(),
    maxZoom: $(),
    translateExtent: ge(),
    paneClickDistance: Oe()
  }), () => {
    gt.reset();
  }));
  const { initialized: Qi } = gt;
  let er = te(!1);
  ue(
    () => (h($t), h(an)),
    () => {
      h($t) !== void 0 && h(an) !== void 0 && (gt.width.set(h($t)), gt.height.set(h(an)));
    }
  ), ue(
    () => (h(er), l(), U(ut())),
    () => {
      var Y;
      !h(er) && l() && ((Y = ut()) == null || Y(), G(er, !0));
    }
  ), ue(
    () => (U(f()), U(T()), U(S()), U(N()), U(H()), U(Yt()), U(V()), U(z()), U(E()), U(be()), U(F()), U(le()), U(ie()), U(me()), U(qe()), U(Ve()), U(L()), U(I()), U(oe()), U(bn()), U(Ut()), U(Ne()), U(Ce()), Sl),
    () => {
      const Y = {
        flowId: f(),
        connectionLineType: T(),
        connectionRadius: S(),
        selectionMode: N(),
        snapGrid: H(),
        defaultMarkerColor: Yt(),
        nodesDraggable: V(),
        nodesConnectable: z(),
        elementsSelectable: E(),
        onlyRenderVisibleElements: be(),
        isValidConnection: F(),
        autoPanOnConnect: le(),
        autoPanOnNodeDrag: ie(),
        onerror: me(),
        ondelete: qe(),
        onedgecreate: Ve(),
        connectionMode: L(),
        nodeDragThreshold: I(),
        onconnect: oe(),
        onconnectstart: bn(),
        onconnectend: Ut(),
        onbeforedelete: Ne(),
        nodeOrigin: Ce()
      };
      Sl(gt, Y);
    }
  ), ue(
    () => (U(m()), U(k()), U(_()), U($()), U(ge()), U(Oe())),
    () => {
      $l(gt, {
        nodeTypes: m(),
        edgeTypes: k(),
        minZoom: _(),
        maxZoom: $(),
        translateExtent: ge(),
        paneClickDistance: Oe()
      });
    }
  ), ue(
    () => U(He()),
    () => {
      P1(G(c, G2(He())), "$colorModeClass", i);
    }
  ), ht(), Ae();
  var jt = Q2();
  let Lo;
  var zo = W(jt);
  Fc(zo, {
    get selectionKey() {
      return P();
    },
    get deleteKey() {
      return b();
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
  var Io = R(zo, 2);
  const Zd = /* @__PURE__ */ pe(() => he() === void 0 ? Fn.Free : he()), Xd = /* @__PURE__ */ pe(() => ve() === void 0 ? !0 : ve()), Wd = /* @__PURE__ */ pe(() => se() === void 0 ? !0 : se()), Fd = /* @__PURE__ */ pe(() => Pe() === void 0 ? !0 : Pe()), Kd = /* @__PURE__ */ pe(() => Ze() === void 0 ? !0 : Ze()), qd = /* @__PURE__ */ pe(() => Ie() === void 0 ? !1 : Ie()), Ud = /* @__PURE__ */ pe(() => Fe() === void 0 ? !0 : Fe()), Gd = /* @__PURE__ */ pe(() => Oe() === void 0 ? 0 : Oe());
  Dc(Io, {
    initialViewport: Gt,
    get onMoveStart() {
      return q();
    },
    get onMove() {
      return fe();
    },
    get onMoveEnd() {
      return ee();
    },
    get panOnScrollMode() {
      return h(Zd);
    },
    get preventScrolling() {
      return h(Xd);
    },
    get zoomOnScroll() {
      return h(Wd);
    },
    get zoomOnDoubleClick() {
      return h(Fd);
    },
    get zoomOnPinch() {
      return h(Kd);
    },
    get panOnScroll() {
      return h(qd);
    },
    get panOnDrag() {
      return h(Ud);
    },
    get paneClickDistance() {
      return h(Gd);
    },
    children: (Y, sw) => {
      const Qd = /* @__PURE__ */ pe(() => Fe() === void 0 ? !0 : Fe());
      Vc(Y, {
        get panOnDrag() {
          return h(Qd);
        },
        get selectionOnDrag() {
          return Q();
        },
        $$events: {
          paneclick(jr) {
            ze.call(this, t, jr);
          },
          panecontextmenu(jr) {
            ze.call(this, t, jr);
          }
        },
        children: (jr, aw) => {
          var Ca = J2(), ka = _e(Ca);
          Oc(ka, {
            children: (tf, lw) => {
              var Ea = j2(), $a = _e(Ea);
              Zc($a, {
                get defaultEdgeOptions() {
                  return ct();
                },
                $$events: {
                  edgeclick(Le) {
                    ze.call(this, t, Le);
                  },
                  edgecontextmenu(Le) {
                    ze.call(this, t, Le);
                  },
                  edgemouseenter(Le) {
                    ze.call(this, t, Le);
                  },
                  edgemouseleave(Le) {
                    ze.call(this, t, Le);
                  }
                }
              });
              var Sa = R($a, 2);
              Kc(Sa, {
                get containerStyle() {
                  return X();
                },
                get style() {
                  return B();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (Le, uw) => {
                    var Na = Je(), rf = _e(Na);
                    pt(rf, t, "connectionLine", {}), O(Le, Na);
                  }
                }
              });
              var Pa = R(Sa, 6);
              zc(Pa, {
                get nodeClickDistance() {
                  return lt();
                },
                $$events: {
                  nodeclick(Le) {
                    ze.call(this, t, Le);
                  },
                  nodemouseenter(Le) {
                    ze.call(this, t, Le);
                  },
                  nodemousemove(Le) {
                    ze.call(this, t, Le);
                  },
                  nodemouseleave(Le) {
                    ze.call(this, t, Le);
                  },
                  nodedragstart(Le) {
                    ze.call(this, t, Le);
                  },
                  nodedrag(Le) {
                    ze.call(this, t, Le);
                  },
                  nodedragstop(Le) {
                    ze.call(this, t, Le);
                  },
                  nodecontextmenu(Le) {
                    ze.call(this, t, Le);
                  }
                }
              });
              var nf = R(Pa, 2);
              Wc(nf, {
                $$events: {
                  selectionclick(Le) {
                    ze.call(this, t, Le);
                  },
                  selectioncontextmenu(Le) {
                    ze.call(this, t, Le);
                  },
                  nodedragstart(Le) {
                    ze.call(this, t, Le);
                  },
                  nodedrag(Le) {
                    ze.call(this, t, Le);
                  },
                  nodedragstop(Le) {
                    ze.call(this, t, Le);
                  }
                }
              }), O(tf, Ea);
            },
            $$slots: { default: !0 }
          });
          var ef = R(ka, 2);
          Xc(ef, {}), O(jr, Ca);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var ba = R(Io, 2);
  qc(ba, {
    get proOptions() {
      return Be();
    },
    get position() {
      return nt();
    }
  });
  var jd = R(ba, 2);
  pt(jd, t, "default", {}), Z(jt), An(jt, (Y) => G(At, Y), () => h(At)), Se(
    (Y) => Lo = nn(
      jt,
      Lo,
      {
        style: pr(),
        class: Y,
        "data-testid": "svelte-flow__wrapper",
        ...o,
        role: "application"
      },
      "svelte-12wlba6"
    ),
    [
      () => Et([
        "svelte-flow",
        Gr(),
        u()
      ])
    ],
    pe
  ), Ra(jt, "clientWidth", (Y) => G($t, Y)), Ra(jt, "clientHeight", (Y) => G(an, Y)), je("dragover", jt, function(Y) {
    ze.call(this, t, Y);
  }), je("drop", jt, function(Y) {
    ze.call(this, t, Y);
  }), O(e, jt);
  var Jd = de({
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
      return C();
    },
    set fitViewOptions(Y) {
      C(Y), y();
    },
    get minZoom() {
      return _();
    },
    set minZoom(Y) {
      _(Y), y();
    },
    get maxZoom() {
      return $();
    },
    set maxZoom(Y) {
      $(Y), y();
    },
    get initialViewport() {
      return p();
    },
    set initialViewport(Y) {
      p(Y), y();
    },
    get viewport() {
      return x();
    },
    set viewport(Y) {
      x(Y), y();
    },
    get nodeTypes() {
      return m();
    },
    set nodeTypes(Y) {
      m(Y), y();
    },
    get edgeTypes() {
      return k();
    },
    set edgeTypes(Y) {
      k(Y), y();
    },
    get selectionKey() {
      return P();
    },
    set selectionKey(Y) {
      P(Y), y();
    },
    get selectionMode() {
      return N();
    },
    set selectionMode(Y) {
      N(Y), y();
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
      return I();
    },
    set nodeDragThreshold(Y) {
      I(Y), y();
    },
    get elementsSelectable() {
      return E();
    },
    set elementsSelectable(Y) {
      E(Y), y();
    },
    get snapGrid() {
      return H();
    },
    set snapGrid(Y) {
      H(Y), y();
    },
    get deleteKey() {
      return b();
    },
    set deleteKey(Y) {
      b(Y), y();
    },
    get connectionRadius() {
      return S();
    },
    set connectionRadius(Y) {
      S(Y), y();
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
      return fe();
    },
    set onMove(Y) {
      fe(Y), y();
    },
    get onMoveEnd() {
      return ee();
    },
    set onMoveEnd(Y) {
      ee(Y), y();
    },
    get isValidConnection() {
      return F();
    },
    set isValidConnection(Y) {
      F(Y), y();
    },
    get translateExtent() {
      return ge();
    },
    set translateExtent(Y) {
      ge(Y), y();
    },
    get nodeExtent() {
      return we();
    },
    set nodeExtent(Y) {
      we(Y), y();
    },
    get onlyRenderVisibleElements() {
      return be();
    },
    set onlyRenderVisibleElements(Y) {
      be(Y), y();
    },
    get panOnScrollMode() {
      return he();
    },
    set panOnScrollMode(Y) {
      he(Y), y();
    },
    get preventScrolling() {
      return ve();
    },
    set preventScrolling(Y) {
      ve(Y), y();
    },
    get zoomOnScroll() {
      return se();
    },
    set zoomOnScroll(Y) {
      se(Y), y();
    },
    get zoomOnDoubleClick() {
      return Pe();
    },
    set zoomOnDoubleClick(Y) {
      Pe(Y), y();
    },
    get zoomOnPinch() {
      return Ze();
    },
    set zoomOnPinch(Y) {
      Ze(Y), y();
    },
    get panOnScroll() {
      return Ie();
    },
    set panOnScroll(Y) {
      Ie(Y), y();
    },
    get panOnDrag() {
      return Fe();
    },
    set panOnDrag(Y) {
      Fe(Y), y();
    },
    get selectionOnDrag() {
      return Q();
    },
    set selectionOnDrag(Y) {
      Q(Y), y();
    },
    get autoPanOnConnect() {
      return le();
    },
    set autoPanOnConnect(Y) {
      le(Y), y();
    },
    get autoPanOnNodeDrag() {
      return ie();
    },
    set autoPanOnNodeDrag(Y) {
      ie(Y), y();
    },
    get onerror() {
      return me();
    },
    set onerror(Y) {
      me(Y), y();
    },
    get ondelete() {
      return qe();
    },
    set ondelete(Y) {
      qe(Y), y();
    },
    get onedgecreate() {
      return Ve();
    },
    set onedgecreate(Y) {
      Ve(Y), y();
    },
    get attributionPosition() {
      return nt();
    },
    set attributionPosition(Y) {
      nt(Y), y();
    },
    get proOptions() {
      return Be();
    },
    set proOptions(Y) {
      Be(Y), y();
    },
    get defaultEdgeOptions() {
      return ct();
    },
    set defaultEdgeOptions(Y) {
      ct(Y), y();
    },
    get width() {
      return rt();
    },
    set width(Y) {
      rt(Y), y();
    },
    get height() {
      return J();
    },
    set height(Y) {
      J(Y), y();
    },
    get colorMode() {
      return He();
    },
    set colorMode(Y) {
      He(Y), y();
    },
    get onconnect() {
      return oe();
    },
    set onconnect(Y) {
      oe(Y), y();
    },
    get onconnectstart() {
      return bn();
    },
    set onconnectstart(Y) {
      bn(Y), y();
    },
    get onconnectend() {
      return Ut();
    },
    set onconnectend(Y) {
      Ut(Y), y();
    },
    get onbeforedelete() {
      return Ne();
    },
    set onbeforedelete(Y) {
      Ne(Y), y();
    },
    get oninit() {
      return ut();
    },
    set oninit(Y) {
      ut(Y), y();
    },
    get nodeOrigin() {
      return Ce();
    },
    set nodeOrigin(Y) {
      Ce(Y), y();
    },
    get paneClickDistance() {
      return Oe();
    },
    set paneClickDistance(Y) {
      Oe(Y), y();
    },
    get nodeClickDistance() {
      return lt();
    },
    set nodeClickDistance(Y) {
      lt(Y), y();
    },
    get defaultMarkerColor() {
      return Yt();
    },
    set defaultMarkerColor(Y) {
      Yt(Y), y();
    },
    get style() {
      return pr();
    },
    set style(Y) {
      pr(Y), y();
    },
    get class() {
      return Gr();
    },
    set class(Y) {
      Gr(Y), y();
    }
  });
  return s(), Jd;
}
re(
  Uc,
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
function Gc(e, t) {
  ce(t, !1);
  let n = w(t, "initialNodes", 12, void 0), r = w(t, "initialEdges", 12, void 0), o = w(t, "initialWidth", 12, void 0), i = w(t, "initialHeight", 12, void 0), s = w(t, "fitView", 12, void 0), a = w(t, "nodeOrigin", 12, void 0);
  const l = Ac({
    nodes: n(),
    edges: r(),
    width: o(),
    height: i(),
    nodeOrigin: a(),
    fitView: s()
  });
  Dr(Fi, { getStore: () => l }), ta(() => {
    l.reset();
  }), Ae();
  var u = Je(), c = _e(u);
  return pt(c, t, "default", {}), O(e, u), de({
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
re(
  Gc,
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
var tp = /* @__PURE__ */ ne("<button><!></button>");
function io(e, t) {
  const n = ot(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = ot(n, [
    "class",
    "bgColor",
    "bgColorHover",
    "color",
    "colorHover",
    "borderColor"
  ]);
  ce(t, !1);
  let o = w(t, "class", 12, void 0), i = w(t, "bgColor", 12, void 0), s = w(t, "bgColorHover", 12, void 0), a = w(t, "color", 12, void 0), l = w(t, "colorHover", 12, void 0), u = w(t, "borderColor", 12, void 0);
  Ae();
  var c = tp();
  let f;
  var d = W(c);
  return pt(d, t, "default", { class: "button-svg" }), Z(c), Se(
    (g) => {
      f = nn(c, f, { type: "button", class: g, ...r }), at(c, "--xy-controls-button-background-color-props", i()), at(c, "--xy-controls-button-background-color-hover-props", s()), at(c, "--xy-controls-button-color-props", a()), at(c, "--xy-controls-button-color-hover-props", l()), at(c, "--xy-controls-button-border-color-props", u());
    },
    [
      () => Et([
        "svelte-flow__controls-button",
        o()
      ])
    ],
    pe
  ), je("click", c, function(g) {
    ze.call(this, t, g);
  }), O(e, c), de({
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
re(
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
var np = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function jc(e) {
  var t = np();
  O(e, t);
}
re(jc, {}, [], [], !0);
var rp = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Jc(e) {
  var t = rp();
  O(e, t);
}
re(Jc, {}, [], [], !0);
var op = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Qc(e) {
  var t = op();
  O(e, t);
}
re(Qc, {}, [], [], !0);
var ip = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function ed(e) {
  var t = ip();
  O(e, t);
}
re(ed, {}, [], [], !0);
var sp = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function td(e) {
  var t = sp();
  O(e, t);
}
re(td, {}, [], [], !0);
var ap = /* @__PURE__ */ ne("<!> <!>", 1), lp = /* @__PURE__ */ ne("<!> <!> <!> <!> <!> <!>", 1);
function nd(e, t) {
  ce(t, !1);
  const [n, r] = tt(), o = () => j(T, "$nodesDraggable", n), i = () => j(L, "$nodesConnectable", n), s = () => j(B, "$elementsSelectable", n), a = () => j(H, "$viewport", n), l = () => j(b, "$minZoom", n), u = () => j(S, "$maxZoom", n), c = te(), f = te(), d = te(), g = te();
  let v = w(t, "position", 12, "bottom-left"), C = w(t, "showZoom", 12, !0), _ = w(t, "showFitView", 12, !0), $ = w(t, "showLock", 12, !0), p = w(t, "buttonBgColor", 12, void 0), x = w(t, "buttonBgColorHover", 12, void 0), m = w(t, "buttonColor", 12, void 0), k = w(t, "buttonColorHover", 12, void 0), P = w(t, "buttonBorderColor", 12, void 0), N = w(t, "ariaLabel", 12, void 0), M = w(t, "style", 12, void 0), D = w(t, "orientation", 12, "vertical"), A = w(t, "fitViewOptions", 12, void 0), V = w(t, "class", 12, "");
  const {
    zoomIn: z,
    zoomOut: I,
    fitView: E,
    viewport: H,
    minZoom: b,
    maxZoom: S,
    nodesDraggable: T,
    nodesConnectable: L,
    elementsSelectable: B
  } = et(), X = {
    bgColor: p(),
    bgColorHover: x(),
    color: m(),
    colorHover: k(),
    borderColor: P()
  }, q = () => {
    z();
  }, fe = () => {
    I();
  }, ee = () => {
    E(A());
  }, F = () => {
    G(c, !h(c)), T.set(h(c)), L.set(h(c)), B.set(h(c));
  };
  ue(
    () => (o(), i(), s()),
    () => {
      G(c, o() || i() || s());
    }
  ), ue(() => (a(), l()), () => {
    G(f, a().zoom <= l());
  }), ue(() => (a(), u()), () => {
    G(d, a().zoom >= u());
  }), ue(() => U(D()), () => {
    G(g, D() === "horizontal" ? "horizontal" : "vertical");
  }), ht(), Ae();
  const ge = /* @__PURE__ */ pe(() => Et([
    "svelte-flow__controls",
    h(g),
    V()
  ])), we = /* @__PURE__ */ pe(() => N() ?? "Svelte Flow controls");
  Ki(e, {
    get class() {
      return h(ge);
    },
    get position() {
      return v();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return h(we);
    },
    get style() {
      return M();
    },
    children: (he, ve) => {
      var se = lp(), Pe = _e(se);
      pt(Pe, t, "before", {});
      var Ze = R(Pe, 2);
      {
        var Ie = (Ve) => {
          var nt = ap(), Be = _e(nt);
          io(Be, dt(
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
              children: (rt, J) => {
                jc(rt);
              },
              $$slots: { default: !0 }
            }
          ));
          var ct = R(Be, 2);
          io(ct, dt(
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
              $$events: { click: fe },
              children: (rt, J) => {
                Jc(rt);
              },
              $$slots: { default: !0 }
            }
          )), O(Ve, nt);
        };
        Ee(Ze, (Ve) => {
          C() && Ve(Ie);
        });
      }
      var Fe = R(Ze, 2);
      {
        var Q = (Ve) => {
          io(Ve, dt(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            X,
            {
              $$events: { click: ee },
              children: (nt, Be) => {
                Qc(nt);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        Ee(Fe, (Ve) => {
          _() && Ve(Q);
        });
      }
      var le = R(Fe, 2);
      {
        var ie = (Ve) => {
          io(Ve, dt(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            X,
            {
              $$events: { click: F },
              children: (nt, Be) => {
                var ct = Je(), rt = _e(ct);
                {
                  var J = (oe) => {
                    td(oe);
                  }, He = (oe) => {
                    ed(oe);
                  };
                  Ee(rt, (oe) => {
                    h(c) ? oe(J) : oe(He, !1);
                  });
                }
                O(nt, ct);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        Ee(le, (Ve) => {
          $() && Ve(ie);
        });
      }
      var me = R(le, 2);
      pt(me, t, "default", {});
      var qe = R(me, 2);
      pt(qe, t, "after", {}), O(he, se);
    },
    $$slots: { default: !0 }
  });
  var be = de({
    get position() {
      return v();
    },
    set position(he) {
      v(he), y();
    },
    get showZoom() {
      return C();
    },
    set showZoom(he) {
      C(he), y();
    },
    get showFitView() {
      return _();
    },
    set showFitView(he) {
      _(he), y();
    },
    get showLock() {
      return $();
    },
    set showLock(he) {
      $(he), y();
    },
    get buttonBgColor() {
      return p();
    },
    set buttonBgColor(he) {
      p(he), y();
    },
    get buttonBgColorHover() {
      return x();
    },
    set buttonBgColorHover(he) {
      x(he), y();
    },
    get buttonColor() {
      return m();
    },
    set buttonColor(he) {
      m(he), y();
    },
    get buttonColorHover() {
      return k();
    },
    set buttonColorHover(he) {
      k(he), y();
    },
    get buttonBorderColor() {
      return P();
    },
    set buttonBorderColor(he) {
      P(he), y();
    },
    get ariaLabel() {
      return N();
    },
    set ariaLabel(he) {
      N(he), y();
    },
    get style() {
      return M();
    },
    set style(he) {
      M(he), y();
    },
    get orientation() {
      return D();
    },
    set orientation(he) {
      D(he), y();
    },
    get fitViewOptions() {
      return A();
    },
    set fitViewOptions(he) {
      A(he), y();
    },
    get class() {
      return V();
    },
    set class(he) {
      V(he), y();
    }
  });
  return r(), be;
}
re(
  nd,
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
var Kn;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Kn || (Kn = {}));
var up = /* @__PURE__ */ xe("<circle></circle>");
function rd(e, t) {
  ce(t, !1);
  let n = w(t, "radius", 12, 5), r = w(t, "class", 12, "");
  Ae();
  var o = up();
  return Se(
    (i) => {
      ae(o, "cx", n()), ae(o, "cy", n()), ae(o, "r", n()), hr(o, yn(i));
    },
    [
      () => Et([
        "svelte-flow__background-pattern",
        "dots",
        r()
      ])
    ],
    pe
  ), O(e, o), de({
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
re(rd, { radius: {}, class: {} }, [], [], !0);
var cp = /* @__PURE__ */ xe("<path></path>");
function od(e, t) {
  ce(t, !1);
  let n = w(t, "lineWidth", 12, 1), r = w(t, "dimensions", 12), o = w(t, "variant", 12, void 0), i = w(t, "class", 12, "");
  Ae();
  var s = cp();
  return Se(
    (a) => {
      ae(s, "stroke-width", n()), ae(s, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), hr(s, yn(a));
    },
    [
      () => Et([
        "svelte-flow__background-pattern",
        o(),
        i()
      ])
    ],
    pe
  ), O(e, s), de({
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
re(
  od,
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
const dp = {
  [Kn.Dots]: 1,
  [Kn.Lines]: 1,
  [Kn.Cross]: 6
};
var fp = /* @__PURE__ */ xe('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const gp = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function id(e, t) {
  ce(t, !1), Qe(e, gp);
  const [n, r] = tt(), o = () => j(k, "$flowId", n), i = () => j(m, "$viewport", n), s = te(), a = te(), l = te(), u = te(), c = te();
  let f = w(t, "id", 12, void 0), d = w(t, "variant", 28, () => Kn.Dots), g = w(t, "gap", 12, 20), v = w(t, "size", 12, 1), C = w(t, "lineWidth", 12, 1), _ = w(t, "bgColor", 12, void 0), $ = w(t, "patternColor", 12, void 0), p = w(t, "patternClass", 12, void 0), x = w(t, "class", 12, "");
  const { viewport: m, flowId: k } = et(), P = v() || dp[d()], N = d() === Kn.Dots, M = d() === Kn.Cross, D = Array.isArray(g()) ? g() : [g(), g()];
  ue(
    () => (o(), U(f())),
    () => {
      G(s, `background-pattern-${o()}-${f() ? f() : ""}`);
    }
  ), ue(() => i(), () => {
    G(a, [
      D[0] * i().zoom || 1,
      D[1] * i().zoom || 1
    ]);
  }), ue(() => i(), () => {
    G(l, P * i().zoom);
  }), ue(() => (h(l), h(a)), () => {
    G(u, M ? [h(l), h(l)] : h(a));
  }), ue(
    () => (h(l), h(u)),
    () => {
      G(c, N ? [
        h(l) / 2,
        h(l) / 2
      ] : [
        h(u)[0] / 2,
        h(u)[1] / 2
      ]);
    }
  ), ht(), Ae();
  var A = fp(), V = W(A), z = W(V);
  {
    var I = (S) => {
      const T = /* @__PURE__ */ pe(() => h(l) / 2);
      rd(S, {
        get radius() {
          return h(T);
        },
        get class() {
          return p();
        }
      });
    }, E = (S) => {
      od(S, {
        get dimensions() {
          return h(u);
        },
        get variant() {
          return d();
        },
        get lineWidth() {
          return C();
        },
        get class() {
          return p();
        }
      });
    };
    Ee(z, (S) => {
      N ? S(I) : S(E, !1);
    });
  }
  Z(V);
  var H = R(V);
  Z(A), Se(
    (S) => {
      hr(A, yn(S), "svelte-1r7pe8d"), at(A, "--xy-background-color-props", _()), at(A, "--xy-background-pattern-color-props", $()), ae(V, "id", h(s)), ae(V, "x", i().x % h(a)[0]), ae(V, "y", i().y % h(a)[1]), ae(V, "width", h(a)[0]), ae(V, "height", h(a)[1]), ae(V, "patternTransform", `translate(-${h(c)[0]},-${h(c)[1]})`), ae(H, "fill", `url(#${h(s)})`);
    },
    [
      () => Et(["svelte-flow__background", x()])
    ],
    pe
  ), O(e, A);
  var b = de({
    get id() {
      return f();
    },
    set id(S) {
      f(S), y();
    },
    get variant() {
      return d();
    },
    set variant(S) {
      d(S), y();
    },
    get gap() {
      return g();
    },
    set gap(S) {
      g(S), y();
    },
    get size() {
      return v();
    },
    set size(S) {
      v(S), y();
    },
    get lineWidth() {
      return C();
    },
    set lineWidth(S) {
      C(S), y();
    },
    get bgColor() {
      return _();
    },
    set bgColor(S) {
      _(S), y();
    },
    get patternColor() {
      return $();
    },
    set patternColor(S) {
      $(S), y();
    },
    get patternClass() {
      return p();
    },
    set patternClass(S) {
      p(S), y();
    },
    get class() {
      return x();
    },
    set class(S) {
      x(S), y();
    }
  });
  return r(), b;
}
re(
  id,
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
var hp = /* @__PURE__ */ xe("<rect></rect>");
function sd(e, t) {
  ce(t, !1);
  let n = w(t, "x", 12), r = w(t, "y", 12), o = w(t, "width", 12, 0), i = w(t, "height", 12, 0), s = w(t, "borderRadius", 12, 5), a = w(t, "color", 12, void 0), l = w(t, "shapeRendering", 12), u = w(t, "strokeColor", 12, void 0), c = w(t, "strokeWidth", 12, 2), f = w(t, "selected", 12, !1), d = w(t, "class", 12, "");
  Ae();
  var g = hp();
  return Se(
    (v) => {
      hr(g, yn(v)), ae(g, "x", n()), ae(g, "y", r()), ae(g, "rx", s()), ae(g, "ry", s()), ae(g, "width", o()), ae(g, "height", i()), ae(g, "style", `${a() ? `fill: ${a()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), ae(g, "shape-rendering", l()), it(g, "selected", f());
    },
    [
      () => Et(["svelte-flow__minimap-node", d()])
    ],
    pe
  ), O(e, g), de({
    get x() {
      return n();
    },
    set x(v) {
      n(v), y();
    },
    get y() {
      return r();
    },
    set y(v) {
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
    get borderRadius() {
      return s();
    },
    set borderRadius(v) {
      s(v), y();
    },
    get color() {
      return a();
    },
    set color(v) {
      a(v), y();
    },
    get shapeRendering() {
      return l();
    },
    set shapeRendering(v) {
      l(v), y();
    },
    get strokeColor() {
      return u();
    },
    set strokeColor(v) {
      u(v), y();
    },
    get strokeWidth() {
      return c();
    },
    set strokeWidth(v) {
      c(v), y();
    },
    get selected() {
      return f();
    },
    set selected(v) {
      f(v), y();
    },
    get class() {
      return d();
    },
    set class(v) {
      d(v), y();
    }
  });
}
re(
  sd,
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
function cs(e, t) {
  const n = J0({
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
const ds = (e) => e instanceof Function ? e : () => e;
var vp = /* @__PURE__ */ xe("<title> </title>"), pp = /* @__PURE__ */ xe('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function ad(e, t) {
  ce(t, !1);
  const [n, r] = tt(), o = () => j(Fe, "$flowId", n), i = () => j(Pe, "$viewport", n), s = () => j(Ze, "$containerWidth", n), a = () => j(Ie, "$containerHeight", n), l = () => j(se, "$nodeLookup", n), u = () => j(ve, "$nodes", n), c = () => j(Q, "$panZoom", n), f = () => j(le, "$translateExtent", n), d = te(), g = te(), v = te(), C = te(), _ = te(), $ = te(), p = te(), x = te(), m = te(), k = te(), P = te(), N = te(), M = te();
  let D = w(t, "position", 12, "bottom-right"), A = w(t, "ariaLabel", 12, "Mini map"), V = w(t, "nodeStrokeColor", 12, "transparent"), z = w(t, "nodeColor", 12, void 0), I = w(t, "nodeClass", 12, ""), E = w(t, "nodeBorderRadius", 12, 5), H = w(t, "nodeStrokeWidth", 12, 2), b = w(t, "bgColor", 12, void 0), S = w(t, "maskColor", 12, void 0), T = w(t, "maskStrokeColor", 12, void 0), L = w(t, "maskStrokeWidth", 12, void 0), B = w(t, "width", 12, void 0), X = w(t, "height", 12, void 0), q = w(t, "pannable", 12, !0), fe = w(t, "zoomable", 12, !0), ee = w(t, "inversePan", 12, void 0), F = w(t, "zoomStep", 12, void 0), ge = w(t, "style", 12, ""), we = w(t, "class", 12, "");
  const be = 200, he = 150, {
    nodes: ve,
    nodeLookup: se,
    viewport: Pe,
    width: Ze,
    height: Ie,
    flowId: Fe,
    panZoom: Q,
    translateExtent: le
  } = et(), ie = z() === void 0 ? void 0 : ds(z()), me = ds(V()), qe = ds(I()), Ve = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), nt = `svelte-flow__minimap-desc-${o()}`;
  let Be = te(h(d));
  const ct = () => h($);
  ue(
    () => (i(), s(), a()),
    () => {
      G(d, {
        x: -i().x / i().zoom,
        y: -i().y / i().zoom,
        width: s() / i().zoom,
        height: a() / i().zoom
      });
    }
  ), ue(
    () => (l(), h(d), u()),
    () => {
      G(Be, l().size > 0 ? sc(Mo(l()), h(d)) : h(d)), u();
    }
  ), ue(() => U(B()), () => {
    G(g, B() ?? be);
  }), ue(() => U(X()), () => {
    G(v, X() ?? he);
  }), ue(
    () => (h(Be), h(g)),
    () => {
      G(C, h(Be).width / h(g));
    }
  ), ue(
    () => (h(Be), h(v)),
    () => {
      G(_, h(Be).height / h(v));
    }
  ), ue(
    () => (h(C), h(_)),
    () => {
      G($, Math.max(h(C), h(_)));
    }
  ), ue(() => (h($), h(g)), () => {
    G(p, h($) * h(g));
  }), ue(
    () => (h($), h(v)),
    () => {
      G(x, h($) * h(v));
    }
  ), ue(() => h($), () => {
    G(m, 5 * h($));
  }), ue(
    () => (h(Be), h(p), h(m)),
    () => {
      G(k, h(Be).x - (h(p) - h(Be).width) / 2 - h(m));
    }
  ), ue(
    () => (h(Be), h(x), h(m)),
    () => {
      G(P, h(Be).y - (h(x) - h(Be).height) / 2 - h(m));
    }
  ), ue(() => (h(p), h(m)), () => {
    G(N, h(p) + h(m) * 2);
  }), ue(() => (h(x), h(m)), () => {
    G(M, h(x) + h(m) * 2);
  }), ht(), Ae();
  const rt = /* @__PURE__ */ pe(() => ge() + (b() ? `;--xy-minimap-background-color-props:${b()}` : "")), J = /* @__PURE__ */ pe(() => Et(["svelte-flow__minimap", we()]));
  Ki(e, {
    get position() {
      return D();
    },
    get style() {
      return h(rt);
    },
    get class() {
      return h(J);
    },
    "data-testid": "svelte-flow__minimap",
    children: (oe, bn) => {
      var Ut = Je(), Ne = _e(Ut);
      {
        var ut = (Ce) => {
          var Oe = pp();
          ae(Oe, "aria-labelledby", nt);
          var lt = W(Oe);
          {
            var Yt = (At) => {
              var $t = vp();
              ae($t, "id", nt);
              var an = W($t, !0);
              Z($t), Se(() => mn(an, A())), O(At, $t);
            };
            Ee(lt, (At) => {
              A() && At(Yt);
            });
          }
          var pr = R(lt);
          It(pr, 1, u, (At) => At.id, (At, $t) => {
            var an = Je();
            const Gt = /* @__PURE__ */ pe(() => l().get(h($t).id));
            var gt = _e(an);
            {
              var Qi = (er) => {
                const jt = /* @__PURE__ */ pe(() => Jn(h(Gt))), Lo = /* @__PURE__ */ pe(() => ie == null ? void 0 : ie(h(Gt))), zo = /* @__PURE__ */ pe(() => me(h(Gt))), Io = /* @__PURE__ */ pe(() => qe(h(Gt)));
                sd(er, dt(
                  {
                    get x() {
                      return h(Gt).internals.positionAbsolute.x;
                    },
                    get y() {
                      return h(Gt).internals.positionAbsolute.y;
                    }
                  },
                  () => h(jt),
                  {
                    get selected() {
                      return h(Gt).selected;
                    },
                    get color() {
                      return h(Lo);
                    },
                    get borderRadius() {
                      return E();
                    },
                    get strokeColor() {
                      return h(zo);
                    },
                    get strokeWidth() {
                      return H();
                    },
                    shapeRendering: Ve,
                    get class() {
                      return h(Io);
                    }
                  }
                ));
              };
              Ee(gt, (er) => {
                h(Gt) && lc(h(Gt)) && er(Qi);
              });
            }
            O(At, an);
          });
          var Gr = R(pr);
          Z(Oe), vt(Oe, (At, $t) => cs == null ? void 0 : cs(At, $t), () => ({
            panZoom: c(),
            viewport: Pe,
            getViewScale: ct,
            translateExtent: f(),
            width: s(),
            height: a(),
            inversePan: ee(),
            zoomStep: F(),
            pannable: q(),
            zoomable: fe()
          })), Se(() => {
            ae(Oe, "width", h(g)), ae(Oe, "height", h(v)), ae(Oe, "viewBox", `${h(k) ?? ""} ${h(P) ?? ""} ${h(N) ?? ""} ${h(M) ?? ""}`), at(Oe, "--xy-minimap-mask-background-color-props", S()), at(Oe, "--xy-minimap-mask-stroke-color-props", T()), at(Oe, "--xy-minimap-mask-stroke-width-props", L() ? L() * h($) : void 0), ae(Gr, "d", `M${h(k) - h(m)},${h(P) - h(m)}h${h(N) + h(m) * 2}v${h(M) + h(m) * 2}h${-h(N) - h(m) * 2}z
      M${h(d).x ?? ""},${h(d).y ?? ""}h${h(d).width ?? ""}v${h(d).height ?? ""}h${-h(d).width}z`);
          }), O(Ce, Oe);
        };
        Ee(Ne, (Ce) => {
          c() && Ce(ut);
        });
      }
      O(oe, Ut);
    },
    $$slots: { default: !0 }
  });
  var He = de({
    get position() {
      return D();
    },
    set position(oe) {
      D(oe), y();
    },
    get ariaLabel() {
      return A();
    },
    set ariaLabel(oe) {
      A(oe), y();
    },
    get nodeStrokeColor() {
      return V();
    },
    set nodeStrokeColor(oe) {
      V(oe), y();
    },
    get nodeColor() {
      return z();
    },
    set nodeColor(oe) {
      z(oe), y();
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
      return H();
    },
    set nodeStrokeWidth(oe) {
      H(oe), y();
    },
    get bgColor() {
      return b();
    },
    set bgColor(oe) {
      b(oe), y();
    },
    get maskColor() {
      return S();
    },
    set maskColor(oe) {
      S(oe), y();
    },
    get maskStrokeColor() {
      return T();
    },
    set maskStrokeColor(oe) {
      T(oe), y();
    },
    get maskStrokeWidth() {
      return L();
    },
    set maskStrokeWidth(oe) {
      L(oe), y();
    },
    get width() {
      return B();
    },
    set width(oe) {
      B(oe), y();
    },
    get height() {
      return X();
    },
    set height(oe) {
      X(oe), y();
    },
    get pannable() {
      return q();
    },
    set pannable(oe) {
      q(oe), y();
    },
    get zoomable() {
      return fe();
    },
    set zoomable(oe) {
      fe(oe), y();
    },
    get inversePan() {
      return ee();
    },
    set inversePan(oe) {
      ee(oe), y();
    },
    get zoomStep() {
      return F();
    },
    set zoomStep(oe) {
      F(oe), y();
    },
    get style() {
      return ge();
    },
    set style(oe) {
      ge(oe), y();
    },
    get class() {
      return we();
    },
    set class(oe) {
      we(oe), y();
    }
  });
  return r(), He;
}
re(
  ad,
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
const Pl = (e) => p0(e);
function Bt() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: s, height: a, minZoom: l, maxZoom: u, panZoom: c, nodes: f, edges: d, domNode: g, nodeLookup: v, nodeOrigin: C, edgeLookup: _, connectionLookup: $ } = et(), p = (k) => {
    var A, V;
    const P = K(v), N = Pl(k) ? k : P.get(k.id), M = N.parentId ? _0(N.position, N.measured, N.parentId, P, K(C)) : N.position, D = {
      ...N,
      position: M,
      width: ((A = N.measured) == null ? void 0 : A.width) ?? N.width,
      height: ((V = N.measured) == null ? void 0 : V.height) ?? N.height
    };
    return Ir(D);
  }, x = (k, P, N = { replace: !1 }) => {
    var A;
    const M = (A = K(v).get(k)) == null ? void 0 : A.internals.userNode;
    if (!M)
      return;
    const D = typeof P == "function" ? P(M) : P;
    N.replace ? f.update((V) => V.map((z) => z.id === k ? Pl(D) ? D : { ...z, ...D } : z)) : (Object.assign(M, D), f.update((V) => V));
  }, m = (k) => K(v).get(k);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: m,
    getNode: (k) => {
      var P;
      return (P = m(k)) == null ? void 0 : P.internals.userNode;
    },
    getNodes: (k) => k === void 0 ? K(f) : Nl(K(v), k),
    getEdge: (k) => K(_).get(k),
    getEdges: (k) => k === void 0 ? K(d) : Nl(K(_), k),
    setZoom: (k, P) => {
      const N = K(c);
      return N ? N.scaleTo(k, { duration: P == null ? void 0 : P.duration }) : Promise.resolve(!1);
    },
    getZoom: () => K(i).zoom,
    setViewport: async (k, P) => {
      const N = K(i), M = K(c);
      return M ? (await M.setViewport({
        x: k.x ?? N.x,
        y: k.y ?? N.y,
        zoom: k.zoom ?? N.zoom
      }, { duration: P == null ? void 0 : P.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => K(i),
    setCenter: async (k, P, N) => {
      const M = typeof (N == null ? void 0 : N.zoom) < "u" ? N.zoom : K(u), D = K(c);
      return D ? (await D.setViewport({
        x: K(s) / 2 - k * M,
        y: K(a) / 2 - P * M,
        zoom: M
      }, { duration: N == null ? void 0 : N.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (k, P) => {
      const N = K(c);
      if (!N)
        return Promise.resolve(!1);
      const M = da(k, K(s), K(a), K(l), K(u), (P == null ? void 0 : P.padding) ?? 0.1);
      return await N.setViewport(M, { duration: P == null ? void 0 : P.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (k, P = !0, N) => {
      const M = fl(k), D = M ? k : p(k);
      return D ? (N || K(f)).filter((A) => {
        const V = K(v).get(A.id);
        if (!V || !M && A.id === k.id)
          return !1;
        const z = Ir(V), I = yo(z, D);
        return P && I > 0 || I >= D.width * D.height;
      }) : [];
    },
    isNodeIntersecting: (k, P, N = !0) => {
      const D = fl(k) ? k : p(k);
      if (!D)
        return !1;
      const A = yo(D, P);
      return N && A > 0 || A >= D.width * D.height;
    },
    deleteElements: async ({ nodes: k = [], edges: P = [] }) => {
      const { nodes: N, edges: M } = await rc({
        nodesToRemove: k,
        edgesToRemove: P,
        nodes: K(f),
        edges: K(d),
        onBeforeDelete: K(r)
      });
      return N && f.update((D) => D.filter((A) => !N.some(({ id: V }) => V === A.id))), M && d.update((D) => D.filter((A) => !M.some(({ id: V }) => V === A.id))), {
        deletedNodes: N,
        deletedEdges: M
      };
    },
    screenToFlowPosition: (k, P = { snapToGrid: !0 }) => {
      const N = K(g);
      if (!N)
        return k;
      const M = P.snapToGrid ? K(o) : !1, { x: D, y: A, zoom: V } = K(i), { x: z, y: I } = N.getBoundingClientRect(), E = {
        x: k.x - z,
        y: k.y - I
      };
      return To(E, [D, A, V], M !== null, M || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (k) => {
      const P = K(g);
      if (!P)
        return k;
      const { x: N, y: M, zoom: D } = K(i), { x: A, y: V } = P.getBoundingClientRect(), z = ac(k, [N, M, D]);
      return {
        x: z.x + A,
        y: z.y + V
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
    updateNode: x,
    updateNodeData: (k, P, N) => {
      var A;
      const M = (A = K(v).get(k)) == null ? void 0 : A.internals.userNode;
      if (!M)
        return;
      const D = typeof P == "function" ? P(M) : P;
      M.data = N != null && N.replace ? D : { ...M.data, ...D }, f.update((V) => V);
    },
    getNodesBounds: (k) => {
      const P = K(v), N = K(C);
      return m0(k, { nodeLookup: P, nodeOrigin: N });
    },
    getHandleConnections: ({ type: k, id: P, nodeId: N }) => {
      var M;
      return Array.from(((M = K($).get(`${N}-${k}-${P ?? null}`)) == null ? void 0 : M.values()) ?? []);
    },
    viewport: i
  };
}
function Nl(e, t) {
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
var mp = /* @__PURE__ */ ne('<div class="svelte-flow__node-toolbar"><!></div>');
function ld(e, t) {
  ce(t, !1);
  const [n, r] = tt(), o = () => j(x, "$nodes", n), i = () => j(p, "$nodeLookup", n), s = () => j($, "$viewport", n), a = () => j(_, "$domNode", n), l = te(), u = te(), c = te();
  let f = w(t, "nodeId", 12, void 0), d = w(t, "position", 12, void 0), g = w(t, "align", 12, void 0), v = w(t, "offset", 12, void 0), C = w(t, "isVisible", 12, void 0);
  const { domNode: _, viewport: $, nodeLookup: p, nodes: x } = et(), { getNodesBounds: m } = Bt(), k = ir("svelteflow__node_id");
  let P = te(), N = te([]), M = v() !== void 0 ? v() : 10, D = d() !== void 0 ? d() : ke.Top, A = g() !== void 0 ? g() : "center";
  ue(
    () => (o(), U(f()), i()),
    () => {
      o();
      const H = Array.isArray(f()) ? f() : [f() || k];
      G(N, H.reduce(
        (b, S) => {
          const T = i().get(S);
          return T && b.push(T), b;
        },
        []
      ));
    }
  ), ue(
    () => (h(N), s()),
    () => {
      const H = m(h(N));
      H && G(P, V0(H, s(), D, M, A));
    }
  ), ue(() => h(N), () => {
    G(l, h(N).length === 0 ? 1 : Math.max(...h(N).map((H) => (H.internals.z || 5) + 1)));
  }), ue(() => o(), () => {
    G(u, o().filter((H) => H.selected).length);
  }), ue(
    () => (U(C()), h(N), h(u)),
    () => {
      G(c, typeof C() == "boolean" ? C() : h(N).length === 1 && h(N)[0].selected && h(u) === 1);
    }
  ), ht(), Ae();
  var V = Je(), z = _e(V);
  {
    var I = (H) => {
      var b = mp(), S = W(b);
      pt(S, t, "default", {}), Z(b), vt(b, (T, L) => $r == null ? void 0 : $r(T, L), () => ({ domNode: a() })), Se(
        (T) => {
          ae(b, "data-id", T), at(b, "position", "absolute"), at(b, "transform", h(P)), at(b, "z-index", h(l));
        },
        [
          () => h(N).reduce((T, L) => `${T}${L.id} `, "").trim()
        ],
        pe
      ), O(H, b);
    };
    Ee(z, (H) => {
      a() && h(c) && h(N) && H(I);
    });
  }
  O(e, V);
  var E = de({
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
      return C();
    },
    set isVisible(H) {
      C(H), y();
    }
  });
  return r(), E;
}
re(
  ld,
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
function vr(e) {
  const { nodes: t, nodeLookup: n } = et();
  let r = [], o = !0;
  return Wn([t, n], ([, i], s) => {
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
    (!Z0(a, r) || o) && (r = a, s(l ? a : a[0] ?? null), o = !1);
  });
}
const Ml = "tinyflow-component";
class dw {
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
    const t = document.createElement(Ml);
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
    const n = document.createElement(Ml);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const yp = () => {
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
}, ei = yp();
var wp = /* @__PURE__ */ ne("<button><!></button>");
function Ke(e, t) {
  ce(t, !0);
  const n = w(t, "children", 7), r = /* @__PURE__ */ kt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = wp();
  let i;
  var s = W(o);
  return sr(s, () => n() ?? ft), Z(o), Se(() => i = nn(o, i, {
    type: "button",
    ...r,
    class: `tf-btn nopan nodrag ${t.class ?? ""}`
  })), O(e, o), de({
    get children() {
      return n();
    },
    set children(a) {
      n(a), y();
    }
  });
}
re(Ke, { children: {} }, [], [], !0);
var _p = /* @__PURE__ */ ne("<input>");
function ud(e, t) {
  ce(t, !0);
  const n = /* @__PURE__ */ kt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = _p();
  bu(r);
  let o;
  Se(() => o = nn(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), O(e, r), de();
}
re(ud, {}, [], [], !0);
var xp = /* @__PURE__ */ ne("<input>");
function xt(e, t) {
  ce(t, !0);
  const n = /* @__PURE__ */ kt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = xp();
  bu(r);
  let o;
  Se(() => o = nn(r, o, {
    type: "text",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), O(e, r), de();
}
re(xt, {}, [], [], !0);
var bp = /* @__PURE__ */ ne("<textarea></textarea>");
function Ht(e, t) {
  ce(t, !0);
  const n = /* @__PURE__ */ kt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = bp();
  g1(r);
  let o;
  Se(() => o = nn(r, o, {
    ...n,
    class: `tf-textarea nodrag ${t.class ?? ""}`
  })), O(e, r), de();
}
re(Ht, {}, [], [], !0);
var Cp = /* @__PURE__ */ ne('<div role="button"><!></div>'), kp = /* @__PURE__ */ ne("<div></div>");
function cd(e, t) {
  const n = ot(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = ot(n, ["items", "onChange", "activeIndex"]);
  ce(t, !1);
  let o = w(t, "items", 28, () => []), i = w(t, "onChange", 12, () => {
  }), s = w(t, "activeIndex", 12, 0);
  function a(c, f) {
    var d;
    s(f), (d = i()) == null || d(c, f);
  }
  Ae();
  var l = kp();
  let u;
  return It(l, 5, o, Oi, (c, f, d) => {
    var g = Cp();
    ae(g, "tabindex", d), g.__click = () => a(h(f), d), g.__keydown = ($) => {
      ($.key === "Enter" || $.key === " ") && ($.preventDefault(), a(h(f), d));
    };
    var v = W(g);
    {
      var C = ($) => {
        var p = Re();
        Se(() => mn(p, h(f).label)), O($, p);
      }, _ = ($) => {
        var p = Je(), x = _e(p);
        sr(x, () => h(f).label ?? ft), O($, p);
      };
      Ee(v, ($) => {
        typeof h(f).label == "string" ? $(C) : $(_, !1);
      });
    }
    Z(g), Se(() => Vr(g, `tf-tabs-item ${(d === s() ? "active" : "") ?? ""}`)), O(c, g);
  }), Z(l), Se(() => u = nn(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), O(e, l), de({
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
Vi(["click", "keydown"]);
re(cd, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var Ep = (e, t, n) => t(h(n)), $p = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(h(n)));
}, Sp = /* @__PURE__ */ ne('<div class="tf-collapse-item-description"><!></div>'), Pp = /* @__PURE__ */ ne('<div class="tf-collapse-item-content"><!></div>'), Np = /* @__PURE__ */ ne('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><span class="tf-collapse-item-title-icon"><!></span> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), Mp = /* @__PURE__ */ ne("<div></div>");
const Tp = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function dd(e, t) {
  ce(t, !0), Qe(e, Tp);
  let n = w(t, "items", 7), r = w(t, "onChange", 7), o = w(t, "activeKeys", 31, () => Vt([]));
  function i(a) {
    var l;
    o().includes(a.key) ? o(o().filter((u) => u !== a.key)) : (o().push(a.key), o(o())), (l = r()) == null || l(a, o());
  }
  var s = Mp();
  return It(s, 21, n, Oi, (a, l, u) => {
    var c = Np(), f = W(c);
    ae(f, "tabindex", u), f.__click = [Ep, i, l], f.__keydown = [$p, i, l];
    var d = W(f), g = W(d);
    Zn(g, {
      get target() {
        return h(l).icon;
      }
    }), Z(d);
    var v = R(d, 2);
    Zn(v, {
      get target() {
        return h(l).title;
      }
    });
    var C = R(v, 2);
    Z(f);
    var _ = R(f, 2);
    {
      var $ = (m) => {
        var k = Sp(), P = W(k);
        Zn(P, {
          get target() {
            return h(l).description;
          }
        }), Z(k), O(m, k);
      };
      Ee(_, (m) => {
        h(l).description && m($);
      });
    }
    var p = R(_, 2);
    {
      var x = (m) => {
        var k = Pp(), P = W(k);
        Zn(P, {
          get target() {
            return h(l).content;
          }
        }), Z(k), O(m, k);
      };
      Ee(p, (m) => {
        o().includes(h(l).key) && m(x);
      });
    }
    Z(c), Se((m) => Vr(C, `tf-collapse-item-title-arrow ${m ?? ""} svelte-1jfktzw`), [
      () => o().includes(h(l).key) ? "rotate-90" : ""
    ]), O(a, c);
  }), Z(s), Se(() => {
    ae(s, "style", t.style), Vr(s, `tf-collapse ${t.class ?? ""} svelte-1jfktzw`);
  }), O(e, s), de({
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
Vi(["click", "keydown"]);
re(dd, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Zn(e, t) {
  ce(t, !0);
  let n = w(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = Je(), o = _e(r);
  {
    var i = (a) => {
      var l = Je(), u = _e(l);
      sr(u, () => n() ?? ft), O(a, l);
    }, s = (a) => {
      var l = Je(), u = _e(l);
      wu(u, n), O(a, l);
    };
    Ee(o, (a) => {
      typeof n() == "function" ? a(i) : a(s, !1);
    });
  }
  return O(e, r), de({
    get target() {
      return n();
    },
    set target(a) {
      n(a), y();
    }
  });
}
re(Zn, { target: {} }, [], [], !0);
var Hp = (e, t, n) => t(h(n)), Ap = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), Dp = /* @__PURE__ */ ne('<div class="tf-select-content-children"><!></div>'), Vp = /* @__PURE__ */ ne('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), Op = /* @__PURE__ */ ne('<div class="tf-select-content nopan nodrag"><!></div>'), Lp = /* @__PURE__ */ ne("<!> <!>", 1), zp = /* @__PURE__ */ ne('<div class="tf-select-input-placeholder"> </div>'), Ip = /* @__PURE__ */ ne('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), Rp = /* @__PURE__ */ ne("<div><!></div>");
function hn(e, t) {
  ce(t, !0);
  const n = (x, m = ft) => {
    var k = Je(), P = _e(k);
    It(P, 19, m, (N, M) => `${M}_${N.value}`, (N, M) => {
      var D = Vp(), A = _e(D);
      A.__click = [Hp, C, M];
      var V = W(A), z = W(V);
      {
        var I = (S) => {
          var T = Ap();
          O(S, T);
        };
        Ee(z, (S) => {
          h(M).children && h(M).children.length > 0 && S(I);
        });
      }
      Z(V);
      var E = R(V, 2);
      Zn(E, {
        get target() {
          return h(M).label;
        }
      }), Z(A);
      var H = R(A, 2);
      {
        var b = (S) => {
          var T = Dp(), L = W(T);
          n(L, () => h(M).children), Z(T), O(S, T);
        };
        Ee(H, (S) => {
          h(M).children && h(M).children.length > 0 && (l() || c().includes(h(M).value)) && S(b);
        });
      }
      O(N, D);
    }), O(x, k);
  };
  let r = w(t, "items", 7), o = w(t, "onExpand", 7), i = w(t, "onSelect", 7), s = w(t, "value", 23, () => []), a = w(t, "defaultValue", 23, () => []), l = w(t, "expandAll", 7, !0), u = w(t, "multiple", 7, !1), c = w(t, "expandValue", 23, () => []), f = w(t, "placeholder", 7), d = /* @__PURE__ */ kt(t, [
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
  ]), g = /* @__PURE__ */ Te(() => {
    const x = [], m = (k) => {
      for (let P of k)
        s().length > 0 ? s().includes(P.value) && x.push(P) : a().includes(P.value) && x.push(P), P.children && P.children.length > 0 && m(P.children);
    };
    return m(r()), x;
  }), v;
  function C(x) {
    var m, k;
    if (x.children && x.children.length > 0) {
      (m = o()) == null || m(x);
      return;
    } else
      v == null || v.hide(), (k = i()) == null || k(x);
  }
  var _ = Rp();
  let $;
  var p = W(_);
  return An(
    Oo(p, {
      floating: (m) => {
        var k = Op(), P = W(k);
        n(P, r), Z(k), O(m, k);
      },
      children: (m, k) => {
        var P = Ip();
        let N;
        var M = W(P);
        It(
          M,
          23,
          () => h(g),
          (D, A) => `${A}_${D.value}`,
          (D, A, V) => {
            var z = Je(), I = _e(z);
            {
              var E = (b) => {
                var S = Je(), T = _e(S);
                {
                  var L = (B) => {
                    Zn(B, {
                      get target() {
                        return h(A).label;
                      }
                    });
                  };
                  Ee(T, (B) => {
                    h(V) === 0 && B(L);
                  });
                }
                O(b, S);
              }, H = (b) => {
                var S = Lp(), T = _e(S);
                Zn(T, {
                  get target() {
                    return h(A).label;
                  }
                });
                var L = R(T, 2);
                {
                  var B = (X) => {
                    var q = Re(",");
                    O(X, q);
                  };
                  Ee(L, (X) => {
                    h(V) < h(g).length - 1 && X(B);
                  });
                }
                O(b, S);
              };
              Ee(I, (b) => {
                u() ? b(H, !1) : b(E);
              });
            }
            O(D, z);
          },
          (D) => {
            var A = zp(), V = W(A, !0);
            Z(A), Se(() => mn(V, f())), O(D, A);
          }
        ), Z(M), Me(2), Z(P), Se(() => N = nn(P, N, {
          class: "tf-select-input nopan nodrag",
          ...d
        })), O(m, P);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (m) => v = m,
    () => v
  ), Z(_), Se(() => $ = nn(_, $, {
    ...d,
    class: `tf-select ${d.class ?? ""}`
  })), O(e, _), de({
    get items() {
      return r();
    },
    set items(x) {
      r(x), y();
    },
    get onExpand() {
      return o();
    },
    set onExpand(x) {
      o(x), y();
    },
    get onSelect() {
      return i();
    },
    set onSelect(x) {
      i(x), y();
    },
    get value() {
      return s();
    },
    set value(x = []) {
      s(x), y();
    },
    get defaultValue() {
      return a();
    },
    set defaultValue(x = []) {
      a(x), y();
    },
    get expandAll() {
      return l();
    },
    set expandAll(x = !0) {
      l(x), y();
    },
    get multiple() {
      return u();
    },
    set multiple(x = !1) {
      u(x), y();
    },
    get expandValue() {
      return c();
    },
    set expandValue(x = []) {
      c(x), y();
    },
    get placeholder() {
      return f();
    },
    set placeholder(x) {
      f(x), y();
    }
  });
}
Vi(["click"]);
re(
  hn,
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
const _o = Math.min, Pr = Math.max, bi = Math.round, dn = (e) => ({
  x: e,
  y: e
}), Bp = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Yp = {
  start: "end",
  end: "start"
};
function Ls(e, t, n) {
  return Pr(e, _o(t, n));
}
function Ao(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function cr(e) {
  return e.split("-")[0];
}
function Do(e) {
  return e.split("-")[1];
}
function fd(e) {
  return e === "x" ? "y" : "x";
}
function ma(e) {
  return e === "y" ? "height" : "width";
}
function Br(e) {
  return ["top", "bottom"].includes(cr(e)) ? "y" : "x";
}
function ya(e) {
  return fd(Br(e));
}
function Zp(e, t, n) {
  n === void 0 && (n = !1);
  const r = Do(e), o = ya(e), i = ma(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Ci(s)), [s, Ci(s)];
}
function Xp(e) {
  const t = Ci(e);
  return [zs(e), t, zs(t)];
}
function zs(e) {
  return e.replace(/start|end/g, (t) => Yp[t]);
}
function Wp(e, t, n) {
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
function Fp(e, t, n, r) {
  const o = Do(e);
  let i = Wp(cr(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(zs)))), i;
}
function Ci(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Bp[t]);
}
function Kp(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function gd(e) {
  return typeof e != "number" ? Kp(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ki(e) {
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
function Tl(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Br(t), s = ya(t), a = ma(s), l = cr(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, d = r[a] / 2 - o[a] / 2;
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
  switch (Do(t)) {
    case "start":
      g[s] -= d * (n && u ? -1 : 1);
      break;
    case "end":
      g[s] += d * (n && u ? -1 : 1);
      break;
  }
  return g;
}
const qp = async (e, t, n) => {
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
  } = Tl(u, r, l), d = r, g = {}, v = 0;
  for (let C = 0; C < a.length; C++) {
    const {
      name: _,
      fn: $
    } = a[C], {
      x: p,
      y: x,
      data: m,
      reset: k
    } = await $({
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
    c = p ?? c, f = x ?? f, g = {
      ...g,
      [_]: {
        ...g[_],
        ...m
      }
    }, k && v <= 50 && (v++, typeof k == "object" && (k.placement && (d = k.placement), k.rects && (u = k.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : k.rects), {
      x: c,
      y: f
    } = Tl(u, d, l)), C = -1);
  }
  return {
    x: c,
    y: f,
    placement: d,
    strategy: o,
    middlewareData: g
  };
};
async function hd(e, t) {
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
  } = Ao(t, e), v = gd(g), _ = a[d ? f === "floating" ? "reference" : "floating" : f], $ = ki(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(_))) == null || n ? _ : _.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), p = f === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, x = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), m = await (i.isElement == null ? void 0 : i.isElement(x)) ? await (i.getScale == null ? void 0 : i.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, k = ki(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: p,
    offsetParent: x,
    strategy: l
  }) : p);
  return {
    top: ($.top - k.top + v.top) / m.y,
    bottom: (k.bottom - $.bottom + v.bottom) / m.y,
    left: ($.left - k.left + v.left) / m.x,
    right: (k.right - $.right + v.right) / m.x
  };
}
const Up = (e) => ({
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
    } = Ao(e, t) || {};
    if (u == null)
      return {};
    const f = gd(c), d = {
      x: n,
      y: r
    }, g = ya(o), v = ma(g), C = await s.getDimensions(u), _ = g === "y", $ = _ ? "top" : "left", p = _ ? "bottom" : "right", x = _ ? "clientHeight" : "clientWidth", m = i.reference[v] + i.reference[g] - d[g] - i.floating[v], k = d[g] - i.reference[g], P = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let N = P ? P[x] : 0;
    (!N || !await (s.isElement == null ? void 0 : s.isElement(P))) && (N = a.floating[x] || i.floating[v]);
    const M = m / 2 - k / 2, D = N / 2 - C[v] / 2 - 1, A = _o(f[$], D), V = _o(f[p], D), z = A, I = N - C[v] - V, E = N / 2 - C[v] / 2 + M, H = Ls(z, E, I), b = !l.arrow && Do(o) != null && E !== H && i.reference[v] / 2 - (E < z ? A : V) - C[v] / 2 < 0, S = b ? E < z ? E - z : E - I : 0;
    return {
      [g]: d[g] + S,
      data: {
        [g]: H,
        centerOffset: E - H - S,
        ...b && {
          alignmentOffset: S
        }
      },
      reset: b
    };
  }
}), Gp = function(e) {
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
        flipAlignment: C = !0,
        ..._
      } = Ao(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const $ = cr(o), p = Br(a), x = cr(a) === a, m = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), k = d || (x || !C ? [Ci(a)] : Xp(a)), P = v !== "none";
      !d && P && k.push(...Fp(a, C, v, m));
      const N = [a, ...k], M = await hd(t, _), D = [];
      let A = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && D.push(M[$]), f) {
        const E = Zp(o, s, m);
        D.push(M[E[0]], M[E[1]]);
      }
      if (A = [...A, {
        placement: o,
        overflows: D
      }], !D.every((E) => E <= 0)) {
        var V, z;
        const E = (((V = i.flip) == null ? void 0 : V.index) || 0) + 1, H = N[E];
        if (H)
          return {
            data: {
              index: E,
              overflows: A
            },
            reset: {
              placement: H
            }
          };
        let b = (z = A.filter((S) => S.overflows[0] <= 0).sort((S, T) => S.overflows[1] - T.overflows[1])[0]) == null ? void 0 : z.placement;
        if (!b)
          switch (g) {
            case "bestFit": {
              var I;
              const S = (I = A.filter((T) => {
                if (P) {
                  const L = Br(T.placement);
                  return L === p || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  L === "y";
                }
                return !0;
              }).map((T) => [T.placement, T.overflows.filter((L) => L > 0).reduce((L, B) => L + B, 0)]).sort((T, L) => T[1] - L[1])[0]) == null ? void 0 : I[0];
              S && (b = S);
              break;
            }
            case "initialPlacement":
              b = a;
              break;
          }
        if (o !== b)
          return {
            reset: {
              placement: b
            }
          };
      }
      return {};
    }
  };
};
async function jp(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = cr(n), a = Do(n), l = Br(n) === "y", u = ["left", "top"].includes(s) ? -1 : 1, c = i && l ? -1 : 1, f = Ao(t, e);
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
const Jp = function(e) {
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
      } = t, l = await jp(t, e);
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
}, Qp = function(e) {
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
              x: $,
              y: p
            } = _;
            return {
              x: $,
              y: p
            };
          }
        },
        ...l
      } = Ao(e, t), u = {
        x: n,
        y: r
      }, c = await hd(t, l), f = Br(cr(o)), d = fd(f);
      let g = u[d], v = u[f];
      if (i) {
        const _ = d === "y" ? "top" : "left", $ = d === "y" ? "bottom" : "right", p = g + c[_], x = g - c[$];
        g = Ls(p, g, x);
      }
      if (s) {
        const _ = f === "y" ? "top" : "left", $ = f === "y" ? "bottom" : "right", p = v + c[_], x = v - c[$];
        v = Ls(p, v, x);
      }
      const C = a.fn({
        ...t,
        [d]: g,
        [f]: v
      });
      return {
        ...C,
        data: {
          x: C.x - n,
          y: C.y - r,
          enabled: {
            [d]: i,
            [f]: s
          }
        }
      };
    }
  };
};
function qi() {
  return typeof window < "u";
}
function Ur(e) {
  return vd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function zt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ln(e) {
  var t;
  return (t = (vd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function vd(e) {
  return qi() ? e instanceof Node || e instanceof zt(e).Node : !1;
}
function rn(e) {
  return qi() ? e instanceof Element || e instanceof zt(e).Element : !1;
}
function vn(e) {
  return qi() ? e instanceof HTMLElement || e instanceof zt(e).HTMLElement : !1;
}
function Hl(e) {
  return !qi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof zt(e).ShadowRoot;
}
function Vo(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = on(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function em(e) {
  return ["table", "td", "th"].includes(Ur(e));
}
function Ui(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function wa(e) {
  const t = _a(), n = rn(e) ? on(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function tm(e) {
  let t = jn(e);
  for (; vn(t) && !Yr(t); ) {
    if (wa(t))
      return t;
    if (Ui(t))
      return null;
    t = jn(t);
  }
  return null;
}
function _a() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Yr(e) {
  return ["html", "body", "#document"].includes(Ur(e));
}
function on(e) {
  return zt(e).getComputedStyle(e);
}
function Gi(e) {
  return rn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function jn(e) {
  if (Ur(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Hl(e) && e.host || // Fallback.
    Ln(e)
  );
  return Hl(t) ? t.host : t;
}
function pd(e) {
  const t = jn(e);
  return Yr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : vn(t) && Vo(t) ? t : pd(t);
}
function md(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = pd(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = zt(o);
  return i ? (Is(s), t.concat(s, s.visualViewport || [], Vo(o) ? o : [], [])) : t.concat(o, md(o, []));
}
function Is(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function yd(e) {
  const t = on(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = vn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = bi(n) !== i || bi(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function wd(e) {
  return rn(e) ? e : e.contextElement;
}
function Nr(e) {
  const t = wd(e);
  if (!vn(t))
    return dn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = yd(t);
  let s = (i ? bi(n.width) : n.width) / r, a = (i ? bi(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const nm = /* @__PURE__ */ dn(0);
function _d(e) {
  const t = zt(e);
  return !_a() || !t.visualViewport ? nm : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function rm(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== zt(e) ? !1 : t;
}
function xo(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = wd(e);
  let s = dn(1);
  t && (r ? rn(r) && (s = Nr(r)) : s = Nr(e));
  const a = rm(i, n, r) ? _d(i) : dn(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, c = o.width / s.x, f = o.height / s.y;
  if (i) {
    const d = zt(i), g = r && rn(r) ? zt(r) : r;
    let v = d, C = Is(v);
    for (; C && r && g !== v; ) {
      const _ = Nr(C), $ = C.getBoundingClientRect(), p = on(C), x = $.left + (C.clientLeft + parseFloat(p.paddingLeft)) * _.x, m = $.top + (C.clientTop + parseFloat(p.paddingTop)) * _.y;
      l *= _.x, u *= _.y, c *= _.x, f *= _.y, l += x, u += m, v = zt(C), C = Is(v);
    }
  }
  return ki({
    width: c,
    height: f,
    x: l,
    y: u
  });
}
function xa(e, t) {
  const n = Gi(e).scrollLeft;
  return t ? t.left + n : xo(Ln(e)).left + n;
}
function xd(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    xa(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function om(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = Ln(r), a = t ? Ui(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = dn(1);
  const c = dn(0), f = vn(r);
  if ((f || !f && !i) && ((Ur(r) !== "body" || Vo(s)) && (l = Gi(r)), vn(r))) {
    const g = xo(r);
    u = Nr(r), c.x = g.x + r.clientLeft, c.y = g.y + r.clientTop;
  }
  const d = s && !f && !i ? xd(s, l, !0) : dn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + d.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + d.y
  };
}
function im(e) {
  return Array.from(e.getClientRects());
}
function sm(e) {
  const t = Ln(e), n = Gi(e), r = e.ownerDocument.body, o = Pr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Pr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + xa(e);
  const a = -n.scrollTop;
  return on(r).direction === "rtl" && (s += Pr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function am(e, t) {
  const n = zt(e), r = Ln(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const u = _a();
    (!u || u && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
function lm(e, t) {
  const n = xo(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = vn(e) ? Nr(e) : dn(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function Al(e, t, n) {
  let r;
  if (t === "viewport")
    r = am(e, n);
  else if (t === "document")
    r = sm(Ln(e));
  else if (rn(t))
    r = lm(t, n);
  else {
    const o = _d(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return ki(r);
}
function bd(e, t) {
  const n = jn(e);
  return n === t || !rn(n) || Yr(n) ? !1 : on(n).position === "fixed" || bd(n, t);
}
function um(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = md(e, []).filter((a) => rn(a) && Ur(a) !== "body"), o = null;
  const i = on(e).position === "fixed";
  let s = i ? jn(e) : e;
  for (; rn(s) && !Yr(s); ) {
    const a = on(s), l = wa(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Vo(s) && !l && bd(e, s)) ? r = r.filter((c) => c !== s) : o = a, s = jn(s);
  }
  return t.set(e, r), r;
}
function cm(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Ui(t) ? [] : um(t, this._c) : [].concat(n), r], a = s[0], l = s.reduce((u, c) => {
    const f = Al(t, c, o);
    return u.top = Pr(f.top, u.top), u.right = _o(f.right, u.right), u.bottom = _o(f.bottom, u.bottom), u.left = Pr(f.left, u.left), u;
  }, Al(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function dm(e) {
  const {
    width: t,
    height: n
  } = yd(e);
  return {
    width: t,
    height: n
  };
}
function fm(e, t, n) {
  const r = vn(t), o = Ln(t), i = n === "fixed", s = xo(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = dn(0);
  if (r || !r && !i)
    if ((Ur(t) !== "body" || Vo(o)) && (a = Gi(t)), r) {
      const d = xo(t, !0, i, t);
      l.x = d.x + t.clientLeft, l.y = d.y + t.clientTop;
    } else o && (l.x = xa(o));
  const u = o && !r && !i ? xd(o, a) : dn(0), c = s.left + a.scrollLeft - l.x - u.x, f = s.top + a.scrollTop - l.y - u.y;
  return {
    x: c,
    y: f,
    width: s.width,
    height: s.height
  };
}
function fs(e) {
  return on(e).position === "static";
}
function Dl(e, t) {
  if (!vn(e) || on(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Ln(e) === n && (n = n.ownerDocument.body), n;
}
function Cd(e, t) {
  const n = zt(e);
  if (Ui(e))
    return n;
  if (!vn(e)) {
    let o = jn(e);
    for (; o && !Yr(o); ) {
      if (rn(o) && !fs(o))
        return o;
      o = jn(o);
    }
    return n;
  }
  let r = Dl(e, t);
  for (; r && em(r) && fs(r); )
    r = Dl(r, t);
  return r && Yr(r) && fs(r) && !wa(r) ? n : r || tm(e) || n;
}
const gm = async function(e) {
  const t = this.getOffsetParent || Cd, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: fm(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function hm(e) {
  return on(e).direction === "rtl";
}
const vm = {
  convertOffsetParentRelativeRectToViewportRelativeRect: om,
  getDocumentElement: Ln,
  getClippingRect: cm,
  getOffsetParent: Cd,
  getElementRects: gm,
  getClientRects: im,
  getDimensions: dm,
  getScale: Nr,
  isElement: rn,
  isRTL: hm
}, pm = Jp, mm = Qp, ym = Gp, wm = Up, _m = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: vm,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return qp(e, t, {
    ...o,
    platform: i
  });
}, xm = ({
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
    _m(e, u, {
      placement: r,
      middleware: [
        pm(o),
        // 手动偏移配置
        ym(i),
        //自动翻转
        mm(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [wm({ element: c })] : []
      ]
    }).then(({ x: $, y: p, placement: x, middlewareData: m }) => {
      if (Object.assign(u.style, {
        left: `${$}px`,
        top: `${p}px`
      }), l) {
        const { x: k, y: P } = m.arrow, N = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[x.split("-")[0]];
        Object.assign(c.style, {
          zIndex: -1,
          left: k != null ? `${k}px` : "",
          top: P != null ? `${P}px` : "",
          right: "",
          bottom: "",
          [N]: "2px"
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
  function C($) {
    $.stopPropagation(), d ? v() : g();
  }
  function _($) {
    u.contains($.target) || v();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach(($) => {
    e.addEventListener($, C);
  }), document.addEventListener("click", _), {
    destroy() {
      t.forEach(($) => {
        e.removeEventListener($, C);
      }), document.removeEventListener("click", _);
    },
    hide() {
      v();
    },
    isVisible() {
      return d;
    }
  };
};
var bm = /* @__PURE__ */ ne('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function Oo(e, t) {
  ce(t, !0);
  const n = w(t, "children", 7), r = w(t, "floating", 7), o = w(t, "placement", 7, "bottom");
  let i, s, a;
  wn(() => (a = xm({
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
  var u = bm(), c = W(u), f = W(c);
  sr(f, n), Z(c), An(c, (v) => i = v, () => i);
  var d = R(c, 2), g = W(d);
  return sr(g, r), Z(d), An(d, (v) => s = v, () => s), Z(u), O(e, u), de({
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
re(Oo, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Ge(e, t) {
  ce(t, !0);
  const n = w(t, "children", 7), r = w(t, "level", 7, 1), o = w(t, "mt", 7), i = w(t, "mb", 7);
  var s = Je(), a = _e(s);
  return b1(a, () => `h${r()}`, !1, (l, u) => {
    let c;
    Se(() => c = nn(
      l,
      c,
      {
        class: "tf-heading",
        style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
      },
      void 0,
      l.namespaceURI === Rl,
      l.nodeName.includes("-")
    ));
    var f = Je(), d = _e(f);
    sr(d, () => n() ?? ft), O(u, f);
  }), O(e, s), de({
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
re(Ge, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var Cm = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const km = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function ji(e, t) {
  ce(t, !0), Qe(e, km);
  const n = /* @__PURE__ */ kt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Ke(e, dt(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = Cm();
      O(r, i);
    },
    $$slots: { default: !0 }
  })), de();
}
re(ji, {}, [], [], !0);
const Em = () => {
  const e = et();
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
}, $m = () => {
  const { nodes: e, nodeLookup: t } = et();
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
var Sm = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), Pm = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), Nm = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), Mm = /* @__PURE__ */ ne('<div class="tf-node-toolbar svelte-44dmwv"><!> <!> <!></div>'), Tm = /* @__PURE__ */ ne('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const Hm = {
  hash: "svelte-44dmwv",
  code: ".tf-node-toolbar.svelte-44dmwv {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}"
};
function xn(e, t) {
  ce(t, !0), Qe(e, Hm);
  const n = w(t, "data", 7), r = w(t, "id", 7, ""), o = w(t, "icon", 7), i = w(t, "handle", 7), s = w(t, "children", 7), a = w(t, "allowExecute", 7, !0), l = w(t, "allowCopy", 7, !0), u = w(t, "allowDelete", 7, !0);
  let c = n().expand ? ["key"] : [];
  const { updateNodeData: f } = Bt(), d = [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ], { deleteNode: g } = Em(), { copyNode: v } = $m();
  var C = Tm(), _ = _e(C);
  {
    var $ = (M) => {
      ld(M, {
        get position() {
          return ke.Top;
        },
        align: "end",
        children: (D, A) => {
          var V = Mm(), z = W(V);
          {
            var I = (T) => {
              Ke(T, {
                class: "tf-node-toolbar-item",
                children: (L, B) => {
                  var X = Sm();
                  O(L, X);
                },
                $$slots: { default: !0 }
              });
            };
            Ee(z, (T) => {
              a() && T(I);
            });
          }
          var E = R(z, 2);
          {
            var H = (T) => {
              Ke(T, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  v(r());
                },
                children: (L, B) => {
                  var X = Pm();
                  O(L, X);
                },
                $$slots: { default: !0 }
              });
            };
            Ee(E, (T) => {
              l() && T(H);
            });
          }
          var b = R(E, 2);
          {
            var S = (T) => {
              Ke(T, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  g(r());
                },
                children: (L, B) => {
                  var X = Nm();
                  O(L, X);
                },
                $$slots: { default: !0 }
              });
            };
            Ee(b, (T) => {
              u() && T(S);
            });
          }
          Z(V), O(D, V);
        },
        $$slots: { default: !0 }
      });
    };
    Ee(_, (M) => {
      (a() || l() || u()) && M($);
    });
  }
  var p = R(_, 2), x = R(W(p), 2), m = W(x);
  dd(m, {
    items: d,
    activeKeys: c,
    onChange: (M, D) => {
      f(r(), { expand: D == null ? void 0 : D.includes("key") });
    }
  }), Z(x), Z(p);
  var k = R(p, 2);
  Gn(k, {
    type: "target",
    get position() {
      return ke.Left;
    },
    style: " left: -12px;top: 20px"
  });
  var P = R(k, 2);
  Gn(P, {
    type: "source",
    get position() {
      return ke.Right;
    },
    style: "right: -12px;top: 20px"
  });
  var N = R(P, 2);
  return sr(N, () => i() ?? ft), O(e, C), de({
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
    }
  });
}
re(
  xn,
  {
    data: {},
    id: {},
    icon: {},
    handle: {},
    children: {},
    allowExecute: {},
    allowCopy: {},
    allowDelete: {}
  },
  [],
  [],
  !0
);
function yt() {
  return ir("svelteflow__node_id");
}
const kd = [
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
], Am = [
  {
    value: "ref",
    label: "引用"
  },
  {
    value: "input",
    label: "固定值"
  }
];
var Dm = /* @__PURE__ */ ne('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), Vm = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), Om = /* @__PURE__ */ ne('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const Lm = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Ed(e, t) {
  ce(t, !0), Qe(e, Lm);
  const [n, r] = tt(), o = () => j(h(l), "$node", n), i = w(t, "parameter", 7), s = w(t, "index", 7);
  let a = yt(), l = /* @__PURE__ */ Te(() => vr(a)), u = /* @__PURE__ */ Te(() => {
    var M, D;
    return {
      ...i(),
      ...(D = (M = o()) == null ? void 0 : M.data) == null ? void 0 : D.parameters[s()]
    };
  });
  const { updateNodeData: c } = Bt(), f = (M) => {
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
  const C = () => {
    c(a, (M) => {
      let D = M.data.parameters;
      return D.splice(s(), 1), { parameters: [...D] };
    }), v == null || v.hide();
  };
  var _ = Om(), $ = _e(_), p = W($);
  xt(p, {
    style: "width: 100%;",
    get value() {
      return h(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: f
  }), Z($);
  var x = R($, 2), m = W(x);
  ud(m, {
    get checked() {
      return h(u).required;
    },
    onchange: d
  }), Z(x);
  var k = R(x, 2), P = W(k);
  An(
    Oo(P, {
      placement: "bottom",
      floating: (D) => {
        var A = Dm(), V = W(A), z = R(W(V));
        const I = /* @__PURE__ */ Te(() => h(u).dataType ? [h(u).dataType] : ["String"]);
        hn(z, {
          items: kd,
          style: "width: 100%",
          onSelect: g,
          get value() {
            return h(I);
          }
        }), Z(V);
        var E = R(V, 2), H = R(W(E));
        Ht(H, { rows: 1, style: "width: 100%;" }), Z(E);
        var b = R(E, 2), S = R(W(b));
        Ht(S, { rows: 3, style: "width: 100%;" }), Z(b);
        var T = R(b, 2), L = W(T);
        Ke(L, {
          onclick: C,
          children: (B, X) => {
            Me();
            var q = Re("删除");
            O(B, q);
          },
          $$slots: { default: !0 }
        }), Z(T), Z(A), O(D, A);
      },
      children: (D, A) => {
        Ke(D, {
          class: "input-btn-more",
          children: (V, z) => {
            var I = Vm();
            O(V, I);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (D) => v = D,
    () => v
  ), Z(k), O(e, _);
  var N = de({
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
  return r(), N;
}
re(Ed, { parameter: {}, index: {} }, [], [], !0);
var zm = /* @__PURE__ */ ne('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), Im = /* @__PURE__ */ ne('<div class="none-params svelte-3n0wca">无输入参数</div>'), Rm = /* @__PURE__ */ ne('<div class="input-container svelte-3n0wca"><!> <!></div>');
const Bm = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function $d(e, t) {
  ce(t, !0), Qe(e, Bm);
  const [n, r] = tt(), o = () => j(h(s), "$node", n);
  let i = yt(), s = /* @__PURE__ */ Te(() => vr(i)), a = /* @__PURE__ */ Te(() => {
    var d, g;
    return [...((g = (d = o()) == null ? void 0 : d.data) == null ? void 0 : g.parameters) || []];
  });
  var l = Rm(), u = W(l);
  {
    var c = (d) => {
      var g = zm();
      Me(4), O(d, g);
    };
    Ee(u, (d) => {
      h(a).length !== 0 && d(c);
    });
  }
  var f = R(u, 2);
  It(
    f,
    19,
    () => h(a),
    (d) => d.id,
    (d, g, v) => {
      Ed(d, {
        get parameter() {
          return h(g);
        },
        get index() {
          return h(v);
        }
      });
    },
    (d) => {
      var g = Im();
      O(d, g);
    }
  ), Z(l), O(e, l), de(), r();
}
re($d, {}, [], [], !0);
const Sd = (e) => {
  !e || e.length == 0 || e.forEach((t) => {
    t.id || (t.id = Zr()), Sd(t.children);
  });
}, zn = () => {
  const { updateNodeData: e } = Bt();
  return {
    addParameter: (t, n = "parameters", r) => {
      Sd(r == null ? void 0 : r.children);
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
var Ym = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), Zm = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Xm = /* @__PURE__ */ ne('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const Wm = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function Pd(e, t) {
  ce(t, !0), Qe(e, Wm);
  const n = w(t, "data", 7), r = /* @__PURE__ */ kt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = yt(), { addParameter: i } = zn();
  return xn(e, dt(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    icon: (a) => {
      var l = Ym();
      O(a, l);
    },
    children: (a, l) => {
      var u = Xm(), c = _e(u), f = W(c);
      Ge(f, {
        level: 3,
        children: (v, C) => {
          Me();
          var _ = Re("输入参数");
          O(v, _);
        },
        $$slots: { default: !0 }
      });
      var d = R(f, 2);
      Ke(d, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o);
        },
        children: (v, C) => {
          var _ = Zm();
          O(v, _);
        },
        $$slots: { default: !0 }
      }), Z(c);
      var g = R(c, 2);
      $d(g, {}), O(a, u);
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
re(Pd, { data: {} }, [], [], !0);
const Nd = (e, t, n) => {
  for (let r of n)
    r.target === t && r.source && (e.push(r.source), Nd(e, r.source, n));
}, Vl = (e, t) => {
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
}, Fm = (e = !1) => {
  const t = yt(), n = vr(t), { nodes: r, edges: o } = et();
  return Wn([n, r, o], ([i, s, a]) => {
    const l = [];
    if (e) {
      for (let u of s)
        if (u.parentId === i.id) {
          const c = Vl(u, u.parentId === i.id);
          c && l.push(c);
        }
    } else {
      const u = [];
      Nd(u, t, a);
      for (let c of s)
        if (u.includes(c.id)) {
          const f = Vl(c, c.parentId === i.id);
          f && l.push(f);
        }
    }
    return l;
  });
};
var Km = /* @__PURE__ */ ne('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), qm = /* @__PURE__ */ ne('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const Um = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Md(e, t) {
  ce(t, !0), Qe(e, Um);
  const [n, r] = tt(), o = () => j(h(c), "$node", n), i = () => j(m, "$selectItems", n), s = w(t, "parameter", 7), a = w(t, "index", 7), l = w(t, "dataKeyName", 7);
  let u = yt(), c = /* @__PURE__ */ Te(() => vr(u)), f = /* @__PURE__ */ Te(() => {
    var H;
    return {
      ...s(),
      ...(H = o()) == null ? void 0 : H.data[l()][a()]
    };
  });
  const { updateNodeData: d } = Bt(), g = (H, b) => {
    d(u, (S) => {
      let T = S.data[l()];
      return T[a()] = { ...T[a()], [H]: b }, { [l()]: T };
    });
  }, v = (H) => {
    const b = H.target.value;
    g("name", b);
  }, C = (H) => {
    const b = H.target.value;
    g("value", b);
  }, _ = (H) => {
    const b = H.value;
    g("ref", b);
  }, $ = (H) => {
    const b = H.value;
    g("refType", b);
  };
  let p;
  const x = () => {
    d(u, (H) => {
      let b = H.data[l()];
      return b.splice(a(), 1), { [l()]: [...b] };
    }), p == null || p.hide();
  }, m = Fm();
  var k = qm(), P = _e(k), N = W(P);
  xt(N, {
    style: "width: 100%;",
    get value() {
      return h(f).name;
    },
    placeholder: "请输入参数名称",
    oninput: v
  }), Z(P);
  var M = R(P, 2), D = W(M);
  {
    var A = (H) => {
      xt(H, {
        get value() {
          return h(f).value;
        },
        placeholder: "请输入参数值",
        oninput: C
      });
    }, V = (H) => {
      const b = /* @__PURE__ */ Te(() => [h(f).ref]);
      hn(H, {
        get items() {
          return i();
        },
        style: "width: 100%",
        defaultValue: ["ref"],
        get value() {
          return h(b);
        },
        expandAll: !0,
        onSelect: _
      });
    };
    Ee(D, (H) => {
      h(f).refType === "input" ? H(A) : H(V, !1);
    });
  }
  Z(M);
  var z = R(M, 2), I = W(z);
  An(
    Oo(I, {
      placement: "bottom",
      floating: (b) => {
        var S = Km(), T = W(S), L = R(W(T));
        const B = /* @__PURE__ */ Te(() => h(f).refType ? [h(f).refType] : []);
        hn(L, {
          items: Am,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return h(B);
          },
          onSelect: $
        }), Z(T);
        var X = R(T, 2), q = R(W(X));
        Ht(q, {
          rows: 1,
          style: "width: 100%;",
          onchange: (we) => {
            const be = we.target.value;
            g("defaultValue", be);
          }
        }), Z(X);
        var fe = R(X, 2), ee = R(W(fe));
        Ht(ee, {
          rows: 3,
          style: "width: 100%;",
          onchange: (we) => {
            const be = we.target.value;
            g("description", be);
          }
        }), Z(fe);
        var F = R(fe, 2), ge = W(F);
        Ke(ge, {
          onclick: x,
          children: (we, be) => {
            Me();
            var he = Re("删除");
            O(we, he);
          },
          $$slots: { default: !0 }
        }), Z(F), Z(S), O(b, S);
      },
      children: (b, S) => {
        ji(b, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (b) => p = b,
    () => p
  ), Z(z), O(e, k);
  var E = de({
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
  return r(), E;
}
re(Md, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var Gm = /* @__PURE__ */ ne('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), jm = /* @__PURE__ */ ne('<div class="none-params svelte-1sm1mgi"> </div>'), Jm = /* @__PURE__ */ ne('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Qm = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Ft(e, t) {
  ce(t, !0), Qe(e, Qm);
  const [n, r] = tt(), o = () => j(h(l), "$node", n), i = w(t, "noneParameterText", 7, "无输入参数"), s = w(t, "dataKeyName", 7, "parameters");
  let a = yt(), l = /* @__PURE__ */ Te(() => vr(a)), u = /* @__PURE__ */ Te(() => {
    var C;
    return [...((C = o()) == null ? void 0 : C.data[s()]) || []];
  });
  var c = Jm(), f = W(c);
  {
    var d = (C) => {
      var _ = Gm();
      Me(4), O(C, _);
    };
    Ee(f, (C) => {
      h(u).length !== 0 && C(d);
    });
  }
  var g = R(f, 2);
  It(
    g,
    19,
    () => h(u),
    (C) => C.id,
    (C, _, $) => {
      Md(C, {
        get parameter() {
          return h(_);
        },
        get index() {
          return h($);
        },
        get dataKeyName() {
          return s();
        }
      });
    },
    (C) => {
      var _ = jm(), $ = W(_, !0);
      Z(_), Se(() => mn($, i())), O(C, _);
    }
  ), Z(c), O(e, c);
  var v = de({
    get noneParameterText() {
      return i();
    },
    set noneParameterText(C = "无输入参数") {
      i(C), y();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(C = "parameters") {
      s(C), y();
    }
  });
  return r(), v;
}
re(Ft, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var ey = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), ty = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ny = /* @__PURE__ */ ne('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const ry = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function Td(e, t) {
  ce(t, !0), Qe(e, ry);
  const n = w(t, "data", 7), r = /* @__PURE__ */ kt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = yt(), { addParameter: i } = zn();
  return xn(e, dt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      allowExecute: !1,
      icon: (a) => {
        var l = ey();
        O(a, l);
      },
      children: (a, l) => {
        var u = ny(), c = _e(u), f = W(c);
        Ge(f, {
          level: 3,
          children: (v, C) => {
            Me();
            var _ = Re("输出参数");
            O(v, _);
          },
          $$slots: { default: !0 }
        });
        var d = R(f, 2);
        Ke(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (v, C) => {
            var _ = ty();
            O(v, _);
          },
          $$slots: { default: !0 }
        }), Z(c);
        var g = R(c, 2);
        Ft(g, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs"
        }), O(a, u);
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
re(Td, { data: {} }, [], [], !0);
const Ji = () => ir("tinyflow_options");
var oy = /* @__PURE__ */ xe('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), iy = /* @__PURE__ */ ne('<div class="input-more-item svelte-1cfeest"><!></div>'), sy = /* @__PURE__ */ ne('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), ay = /* @__PURE__ */ ne('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const ly = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Hd(e, t) {
  ce(t, !0), Qe(e, ly);
  const [n, r] = tt(), o = () => j(h(u), "$node", n), i = w(t, "parameter", 7), s = w(t, "position", 7), a = w(t, "dataKeyName", 7);
  let l = yt(), u = /* @__PURE__ */ Te(() => vr(l)), c = /* @__PURE__ */ Te(() => {
    var L;
    let S = (L = o()) == null ? void 0 : L.data[a()], T;
    if (S && s().length > 0) {
      let B = S;
      for (let X = 0; X < s().length; X++) {
        const q = s()[X];
        X == s().length - 1 ? T = B[q] : B = B[q].children;
      }
    }
    return { ...i(), ...T };
  });
  const { updateNodeData: f } = Bt(), d = (S, T) => {
    f(l, (L) => {
      const B = L.data[a()];
      if (B && s().length > 0) {
        let X = B;
        for (let q = 0; q < s().length; q++) {
          const fe = s()[q];
          q == s().length - 1 ? X[fe] = { ...X[fe], [S]: T } : X = B[fe].children;
        }
      }
      return { [a()]: B };
    });
  }, g = (S) => {
    const T = S.target.value;
    d("name", T);
  }, v = (S) => {
    const T = S.value;
    d("dataType", T);
  };
  let C;
  const _ = () => {
    f(l, (S) => {
      let T = S.data[a()];
      if (T && s().length > 0) {
        let L = T;
        for (let B = 0; B < s().length; B++) {
          const X = s()[B];
          B == s().length - 1 ? L.splice(X, 1) : L = L[X].children;
        }
      }
      return { [a()]: [...T] };
    }), C == null || C.hide();
  }, $ = () => {
    f(l, (S) => {
      let T = S.data[a()];
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
  var p = ay(), x = _e(p), m = W(x);
  {
    var k = (S) => {
      var T = Je(), L = _e(T);
      It(L, 17, s, Oi, (B, X) => {
        Me();
        var q = Re(" ");
        O(B, q);
      }), O(S, T);
    };
    Ee(m, (S) => {
      s().length > 1 && S(k);
    });
  }
  var P = R(m, 2);
  const N = /* @__PURE__ */ Te(() => h(c).nameDisabled === !0);
  xt(P, {
    style: "width: 100%;",
    get value() {
      return h(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: g,
    get disabled() {
      return h(N);
    }
  }), Z(x);
  var M = R(x, 2), D = W(M);
  const A = /* @__PURE__ */ Te(() => h(c).dataType ? [h(c).dataType] : []), V = /* @__PURE__ */ Te(() => h(c).dataTypeDisabled === !0);
  hn(D, {
    items: kd,
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
    var I = (S) => {
      Ke(S, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: $,
        children: (T, L) => {
          var B = oy();
          O(T, B);
        },
        $$slots: { default: !0 }
      });
    };
    Ee(z, (S) => {
      (h(c).dataType === "Object" || h(c).dataType === "Array") && h(c).addChildDisabled !== !0 && S(I);
    });
  }
  Z(M);
  var E = R(M, 2), H = W(E);
  An(
    Oo(H, {
      placement: "bottom",
      floating: (T) => {
        var L = sy(), B = W(L), X = R(W(B));
        Ht(X, {
          rows: 1,
          style: "width: 100%;",
          onchange: (ge) => {
            const we = ge.target.value;
            d("defaultValue", we);
          }
        }), Z(B);
        var q = R(B, 2), fe = R(W(q));
        Ht(fe, {
          rows: 3,
          style: "width: 100%;",
          onchange: (ge) => {
            const we = ge.target.value;
            d("description", we);
          }
        }), Z(q);
        var ee = R(q, 2);
        {
          var F = (ge) => {
            var we = iy(), be = W(we);
            Ke(be, {
              onclick: _,
              children: (he, ve) => {
                Me();
                var se = Re("删除");
                O(he, se);
              },
              $$slots: { default: !0 }
            }), Z(we), O(ge, we);
          };
          Ee(ee, (ge) => {
            h(c).deleteDisabled !== !0 && ge(F);
          });
        }
        Z(L), O(T, L);
      },
      children: (T, L) => {
        ji(T, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => C = T,
    () => C
  ), Z(E), O(e, p);
  var b = de({
    get parameter() {
      return i();
    },
    set parameter(S) {
      i(S), y();
    },
    get position() {
      return s();
    },
    set position(S) {
      s(S), y();
    },
    get dataKeyName() {
      return a();
    },
    set dataKeyName(S) {
      a(S), y();
    }
  });
  return r(), b;
}
re(Hd, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var uy = /* @__PURE__ */ ne("<!> <!>", 1), cy = /* @__PURE__ */ ne('<div class="none-params svelte-1sm1mgi"> </div>'), dy = /* @__PURE__ */ ne('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), fy = /* @__PURE__ */ ne('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const gy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Qn(e, t) {
  ce(t, !0), Qe(e, gy);
  const [n, r] = tt(), o = () => j(h(u), "$node", n), i = (_, $ = ft, p = ft) => {
    var x = Je(), m = _e(x);
    It(
      m,
      19,
      $,
      (k) => `${k.id}_${k.children ? k.children.length : 0}`,
      (k, P, N) => {
        var M = uy(), D = _e(M);
        const A = /* @__PURE__ */ Te(() => [...p(), h(N)]);
        Hd(D, {
          get parameter() {
            return h(P);
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
          var z = (I) => {
            var E = /* @__PURE__ */ pe(() => [...p(), h(N)]);
            i(I, () => h(P).children, () => h(E));
          };
          Ee(V, (I) => {
            h(P).children && I(z);
          });
        }
        O(k, M);
      },
      (k) => {
        var P = Je(), N = _e(P);
        {
          var M = (D) => {
            var A = cy(), V = W(A, !0);
            Z(A), Se(() => mn(V, s())), O(D, A);
          };
          Ee(N, (D) => {
            p().length === 0 && D(M);
          });
        }
        O(k, P);
      }
    ), O(_, x);
  }, s = w(t, "noneParameterText", 7, "无输出参数"), a = w(t, "dataKeyName", 7, "outputDefs");
  let l = yt(), u = /* @__PURE__ */ Te(() => vr(l)), c = /* @__PURE__ */ Te(() => {
    var _;
    return [...((_ = o()) == null ? void 0 : _.data[a()]) || []];
  });
  var f = fy(), d = W(f);
  {
    var g = (_) => {
      var $ = dy();
      Me(4), O(_, $);
    };
    Ee(d, (_) => {
      h(c).length !== 0 && _(g);
    });
  }
  var v = R(d, 2);
  i(v, () => h(c) || [], () => []), Z(f), O(e, f);
  var C = de({
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
  return r(), C;
}
re(Qn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var hy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), vy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), py = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), my = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">模型</div> <div class="setting-item svelte-15t2v24"><!> <!></div> <div class="setting-title svelte-15t2v24">系统提示词</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">用户提示词</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const yy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Ad(e, t) {
  ce(t, !0), Qe(e, yy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ kt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = yt(), { addParameter: i } = zn(), s = Ji();
  let a = Tr(Vt([]));
  wn(async () => {
    var c;
    const u = await ((c = s.provider) == null ? void 0 : c.llm());
    h(a).push(...u || []);
  });
  const { updateNodeData: l } = Bt();
  return xn(e, dt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var f = hy();
        O(c, f);
      },
      children: (c, f) => {
        var d = my(), g = _e(d), v = W(g);
        Ge(v, {
          level: 3,
          children: (E, H) => {
            Me();
            var b = Re("输入参数");
            O(E, b);
          },
          $$slots: { default: !0 }
        });
        var C = R(v, 2);
        Ke(C, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (E, H) => {
            var b = vy();
            O(E, b);
          },
          $$slots: { default: !0 }
        }), Z(g);
        var _ = R(g, 2);
        Ft(_, {});
        var $ = R(_, 2);
        Ge($, {
          level: 3,
          mt: "10px",
          children: (E, H) => {
            Me();
            var b = Re("模型设置");
            O(E, b);
          },
          $$slots: { default: !0 }
        });
        var p = R($, 4), x = W(p);
        const m = /* @__PURE__ */ Te(() => n().llmId ? [n().llmId] : []);
        hn(x, {
          get items() {
            return h(a);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (E) => {
            const H = E.value;
            l(o, () => ({ llmId: H }));
          },
          get value() {
            return h(m);
          }
        });
        var k = R(x, 2);
        ji(k, {}), Z(p);
        var P = R(p, 4), N = W(P);
        Ht(N, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%"
        }), Z(P);
        var M = R(P, 4), D = W(M);
        Ht(D, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%"
        }), Z(M);
        var A = R(M, 2), V = W(A);
        Ge(V, {
          level: 3,
          mt: "10px",
          children: (E, H) => {
            Me();
            var b = Re("输出参数");
            O(E, b);
          },
          $$slots: { default: !0 }
        });
        var z = R(V, 2);
        Ke(z, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (E, H) => {
            var b = py();
            O(E, b);
          },
          $$slots: { default: !0 }
        }), Z(A);
        var I = R(A, 2);
        Qn(I, {}), O(c, d);
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
re(Ad, { data: {} }, [], [], !0);
var wy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), _y = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), xy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), by = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const Cy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Dd(e, t) {
  ce(t, !0), Qe(e, Cy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ kt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = yt(), { addParameter: i } = zn(), { updateNodeData: s } = Bt(), a = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" }
  ];
  return xn(e, dt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = wy();
        O(u, c);
      },
      children: (u, c) => {
        var f = by(), d = _e(f), g = W(d);
        Ge(g, {
          level: 3,
          children: (V, z) => {
            Me();
            var I = Re("输入参数");
            O(V, I);
          },
          $$slots: { default: !0 }
        });
        var v = R(g, 2);
        Ke(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (V, z) => {
            var I = _y();
            O(V, I);
          },
          $$slots: { default: !0 }
        }), Z(d);
        var C = R(d, 2);
        Ft(C, {});
        var _ = R(C, 2);
        Ge(_, {
          level: 3,
          mt: "10px",
          children: (V, z) => {
            Me();
            var I = Re("代码");
            O(V, I);
          },
          $$slots: { default: !0 }
        });
        var $ = R(_, 4), p = W($);
        const x = /* @__PURE__ */ Te(() => n().engine ? [n().engine] : ["qlexpress"]);
        hn(p, {
          items: a,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (V) => {
            const z = V.value;
            s(o, () => ({ engine: z }));
          },
          get value() {
            return h(x);
          }
        }), Z($);
        var m = R($, 4), k = W(m);
        const P = /* @__PURE__ */ Te(() => n().code || "");
        Ht(k, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: (V) => {
            s(o, () => ({ code: V.target.value }));
          },
          get value() {
            return h(P);
          }
        }), Z(m);
        var N = R(m, 2), M = W(N);
        Ge(M, {
          level: 3,
          mt: "10px",
          children: (V, z) => {
            Me();
            var I = Re("输出参数");
            O(V, I);
          },
          $$slots: { default: !0 }
        });
        var D = R(M, 2);
        Ke(D, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (V, z) => {
            var I = xy();
            O(V, I);
          },
          $$slots: { default: !0 }
        }), Z(N);
        var A = R(N, 2);
        Qn(A, {}), O(u, f);
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
re(Dd, { data: {} }, [], [], !0);
var ky = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), Ey = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), $y = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Sy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Vd(e, t) {
  ce(t, !0), Qe(e, Sy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ kt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = yt(), { addParameter: i } = zn(), { updateNodeData: s } = Bt();
  return Hr(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), xn(e, dt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = ky();
        O(l, u);
      },
      children: (l, u) => {
        var c = $y(), f = _e(c), d = W(f);
        Ge(d, {
          level: 3,
          children: (P, N) => {
            Me();
            var M = Re("输入参数");
            O(P, M);
          },
          $$slots: { default: !0 }
        });
        var g = R(d, 2);
        Ke(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (P, N) => {
            var M = Ey();
            O(P, M);
          },
          $$slots: { default: !0 }
        }), Z(f);
        var v = R(f, 2);
        Ft(v, {});
        var C = R(v, 2);
        Ge(C, {
          level: 3,
          mt: "10px",
          children: (P, N) => {
            Me();
            var M = Re("代码");
            O(P, M);
          },
          $$slots: { default: !0 }
        });
        var _ = R(C, 4), $ = W(_);
        const p = /* @__PURE__ */ Te(() => n().template || "");
        Ht($, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: (P) => {
            s(o, () => ({ template: P.target.value }));
          },
          get value() {
            return h(p);
          }
        }), Z(_);
        var x = R(_, 2), m = W(x);
        Ge(m, {
          level: 3,
          mt: "10px",
          children: (P, N) => {
            Me();
            var M = Re("输出参数");
            O(P, M);
          },
          $$slots: { default: !0 }
        }), Z(x);
        var k = R(x, 2);
        Qn(k, {}), O(l, c);
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
re(Vd, { data: {} }, [], [], !0);
var Py = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), Ny = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), My = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ty = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Hy = /* @__PURE__ */ ne('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), Ay = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Dy = /* @__PURE__ */ ne('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), Vy = /* @__PURE__ */ ne('<div style="width: 100%"><!></div>'), Oy = /* @__PURE__ */ ne('<div style="width: 100%"><!></div>'), Ly = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), zy = /* @__PURE__ */ ne('<div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1vtcqdz"><!> <!></div> <!> <div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="radio-group svelte-1vtcqdz"><label class="svelte-1vtcqdz"><!>none</label> <label class="svelte-1vtcqdz"><!>form-data</label> <label class="svelte-1vtcqdz"><!>x-www-form-urlencoded</label> <label class="svelte-1vtcqdz"><!>json</label> <label class="svelte-1vtcqdz"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1vtcqdz"><!> <!></div> <!>', 1);
const Iy = {
  hash: "svelte-1vtcqdz",
  code: ".heading.svelte-1vtcqdz {display:flex;margin-bottom:10px;}.radio-group.svelte-1vtcqdz {display:flex;margin:10px 0;}.radio-group.svelte-1vtcqdz label:where(.svelte-1vtcqdz) {display:flex;font-size:14px;}"
};
function Od(e, t) {
  ce(t, !0), Qe(e, Iy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ kt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = yt(), { addParameter: i } = zn(), { updateNodeData: s } = Bt();
  return xn(e, dt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Py();
        O(l, u);
      },
      children: (l, u) => {
        var c = zy(), f = _e(c), d = W(f), g = W(d);
        hn(g, {
          items: [
            { value: "get", label: "GET" },
            { value: "post", label: "POST" },
            { value: "put", label: "PUT" },
            { value: "delete", label: "DELETE" },
            { value: "head", label: "HEAD" },
            { value: "patch", label: "PATCH" }
          ],
          style: "width: 100%",
          placeholder: "请选择模型",
          value: ["get"]
        }), Z(d);
        var v = R(d, 2), C = W(v);
        xt(C, { placeholder: "请输入url", style: "width: 100%" }), Z(v), Z(f);
        var _ = R(f, 2), $ = W(_);
        Ge($, {
          level: 3,
          children: (le, ie) => {
            Me();
            var me = Re("Http 头信息");
            O(le, me);
          },
          $$slots: { default: !0 }
        });
        var p = R($, 2);
        Ke(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "headers");
          },
          children: (le, ie) => {
            var me = Ny();
            O(le, me);
          },
          $$slots: { default: !0 }
        }), Z(_);
        var x = R(_, 2);
        Ft(x, { dataKeyName: "headers" });
        var m = R(x, 2), k = W(m);
        Ge(k, {
          level: 3,
          children: (le, ie) => {
            Me();
            var me = Re("参数");
            O(le, me);
          },
          $$slots: { default: !0 }
        });
        var P = R(k, 2);
        Ke(P, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "urlParameters");
          },
          children: (le, ie) => {
            var me = My();
            O(le, me);
          },
          $$slots: { default: !0 }
        }), Z(m);
        var N = R(m, 2);
        Ft(N, { dataKeyName: "urlParameters" });
        var M = R(N, 2);
        Ge(M, {
          level: 3,
          mt: "10px",
          children: (le, ie) => {
            Me();
            var me = Re("Body");
            O(le, me);
          },
          $$slots: { default: !0 }
        });
        var D = R(M, 2), A = W(D), V = W(A);
        const z = /* @__PURE__ */ Te(() => !n().bodyType);
        xt(V, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return h(z);
          },
          onchange: (le) => {
            var ie;
            (ie = le.target) != null && ie.checked && s(o, { bodyType: "" });
          }
        }), Me(), Z(A);
        var I = R(A, 2), E = W(I);
        const H = /* @__PURE__ */ Te(() => n().bodyType === "form-data");
        xt(E, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return h(H);
          },
          onchange: (le) => {
            var ie;
            (ie = le.target) != null && ie.checked && s(o, { bodyType: "form-data" });
          }
        }), Me(), Z(I);
        var b = R(I, 2), S = W(b);
        const T = /* @__PURE__ */ Te(() => n().bodyType === "x-www-form-urlencoded");
        xt(S, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return h(T);
          },
          onchange: (le) => {
            var ie;
            (ie = le.target) != null && ie.checked && s(o, { bodyType: "x-www-form-urlencoded" });
          }
        }), Me(), Z(b);
        var L = R(b, 2), B = W(L);
        const X = /* @__PURE__ */ Te(() => n().bodyType === "json");
        xt(B, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return h(X);
          },
          onchange: (le) => {
            var ie;
            (ie = le.target) != null && ie.checked && s(o, { bodyType: "json" });
          }
        }), Me(), Z(L);
        var q = R(L, 2), fe = W(q);
        const ee = /* @__PURE__ */ Te(() => n().bodyType === "raw");
        xt(fe, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return h(ee);
          },
          onchange: (le) => {
            var ie;
            (ie = le.target) != null && ie.checked && s(o, { bodyType: "raw" });
          }
        }), Me(), Z(q), Z(D);
        var F = R(D, 2);
        {
          var ge = (le) => {
            var ie = Hy(), me = _e(ie), qe = W(me);
            Ge(qe, {
              level: 3,
              children: (Be, ct) => {
                Me();
                var rt = Re("参数");
                O(Be, rt);
              },
              $$slots: { default: !0 }
            });
            var Ve = R(qe, 2);
            Ke(Ve, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                i(o, "fromData");
              },
              children: (Be, ct) => {
                var rt = Ty();
                O(Be, rt);
              },
              $$slots: { default: !0 }
            }), Z(me);
            var nt = R(me, 2);
            Ft(nt, { dataKeyName: "fromData" }), O(le, ie);
          };
          Ee(F, (le) => {
            n().bodyType === "form-data" && le(ge);
          });
        }
        var we = R(F, 2);
        {
          var be = (le) => {
            var ie = Dy(), me = _e(ie), qe = W(me);
            Ge(qe, {
              level: 3,
              children: (Be, ct) => {
                Me();
                var rt = Re("参数");
                O(Be, rt);
              },
              $$slots: { default: !0 }
            });
            var Ve = R(qe, 2);
            Ke(Ve, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                i(o, "fromUrlencoded");
              },
              children: (Be, ct) => {
                var rt = Ay();
                O(Be, rt);
              },
              $$slots: { default: !0 }
            }), Z(me);
            var nt = R(me, 2);
            Ft(nt, { dataKeyName: "fromUrlencoded" }), O(le, ie);
          };
          Ee(we, (le) => {
            n().bodyType === "x-www-form-urlencoded" && le(be);
          });
        }
        var he = R(we, 2);
        {
          var ve = (le) => {
            var ie = Vy(), me = W(ie);
            Ht(me, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (qe) => {
                s(o, { bodyJson: qe.target.value });
              }
            }), Z(ie), O(le, ie);
          };
          Ee(he, (le) => {
            n().bodyType === "json" && le(ve);
          });
        }
        var se = R(he, 2);
        {
          var Pe = (le) => {
            var ie = Oy(), me = W(ie);
            Ht(me, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (qe) => {
                s(o, { bodyRaw: qe.target.value });
              }
            }), Z(ie), O(le, ie);
          };
          Ee(se, (le) => {
            n().bodyType === "raw" && le(Pe);
          });
        }
        var Ze = R(se, 2), Ie = W(Ze);
        Ge(Ie, {
          level: 3,
          mt: "10px",
          children: (le, ie) => {
            Me();
            var me = Re("输出参数");
            O(le, me);
          },
          $$slots: { default: !0 }
        });
        var Fe = R(Ie, 2);
        Ke(Fe, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (le, ie) => {
            var me = Ly();
            O(le, me);
          },
          $$slots: { default: !0 }
        }), Z(Ze);
        var Q = R(Ze, 2);
        Qn(Q, {}), O(l, c);
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
re(Od, { data: {} }, [], [], !0);
var Ry = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), By = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Yy = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Zy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Ld(e, t) {
  ce(t, !0), Qe(e, Zy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ kt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = yt(), { addParameter: i } = zn(), s = Ji();
  let a = Tr(Vt([]));
  wn(async () => {
    var c;
    const u = await ((c = s.provider) == null ? void 0 : c.knowledge());
    h(a).push(...u || []);
  });
  const { updateNodeData: l } = Bt();
  return Hr(() => {
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
  }), xn(e, dt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var f = Ry();
        O(c, f);
      },
      children: (c, f) => {
        var d = Yy(), g = _e(d), v = W(g);
        Ge(v, {
          level: 3,
          children: (A, V) => {
            Me();
            var z = Re("输入参数");
            O(A, z);
          },
          $$slots: { default: !0 }
        });
        var C = R(v, 2);
        Ke(C, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (A, V) => {
            var z = By();
            O(A, z);
          },
          $$slots: { default: !0 }
        }), Z(g);
        var _ = R(g, 2);
        Ft(_, {});
        var $ = R(_, 2);
        Ge($, {
          level: 3,
          mt: "10px",
          children: (A, V) => {
            Me();
            var z = Re("知识库设置");
            O(A, z);
          },
          $$slots: { default: !0 }
        });
        var p = R($, 4), x = W(p);
        const m = /* @__PURE__ */ Te(() => n().knowledgeId ? [n().knowledgeId] : []);
        hn(x, {
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
            return h(m);
          }
        }), Z(p);
        var k = R(p, 4), P = W(k);
        xt(P, { placeholder: "搜索的数据条数", style: "width: 100%" }), Z(k);
        var N = R(k, 2), M = W(N);
        Ge(M, {
          level: 3,
          mt: "10px",
          children: (A, V) => {
            Me();
            var z = Re("输出参数");
            O(A, z);
          },
          $$slots: { default: !0 }
        }), Z(N);
        var D = R(N, 2);
        Qn(D, {}), O(c, d);
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
re(Ld, { data: {} }, [], [], !0);
var Xy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), Wy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Fy = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">API 服务商</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">API Key</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">其他参数</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Ky = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function zd(e, t) {
  ce(t, !0), Qe(e, Ky);
  const n = w(t, "data", 7), r = /* @__PURE__ */ kt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = yt(), { addParameter: i } = zn(), s = Ji();
  let a = Tr(Vt([]));
  wn(async () => {
    var c;
    const u = await ((c = s.provider) == null ? void 0 : c.knowledge());
    h(a).push(...u || []);
  });
  const { updateNodeData: l } = Bt();
  return Hr(() => {
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
  }), xn(e, dt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var f = Xy();
        O(c, f);
      },
      children: (c, f) => {
        var d = Fy(), g = _e(d), v = W(g);
        Ge(v, {
          level: 3,
          children: (b, S) => {
            Me();
            var T = Re("输入参数");
            O(b, T);
          },
          $$slots: { default: !0 }
        });
        var C = R(v, 2);
        Ke(C, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (b, S) => {
            var T = Wy();
            O(b, T);
          },
          $$slots: { default: !0 }
        }), Z(g);
        var _ = R(g, 2);
        Ft(_, {});
        var $ = R(_, 2);
        Ge($, {
          level: 3,
          mt: "10px",
          children: (b, S) => {
            Me();
            var T = Re("搜索引擎设置");
            O(b, T);
          },
          $$slots: { default: !0 }
        });
        var p = R($, 4), x = W(p);
        const m = /* @__PURE__ */ Te(() => n().knowledgeId ? [n().knowledgeId] : []);
        hn(x, {
          get items() {
            return h(a);
          },
          style: "width: 100%",
          placeholder: "请选择 API 服务商",
          onSelect: (b) => {
            const S = b.value;
            l(o, () => ({ knowledgeId: S }));
          },
          get value() {
            return h(m);
          }
        }), Z(p);
        var k = R(p, 4), P = W(k);
        xt(P, {
          placeholder: "请输入 API Key",
          style: "width: 100%"
        }), Z(k);
        var N = R(k, 4), M = W(N);
        xt(M, { placeholder: "请输入关键字", style: "width: 100%" }), Z(N);
        var D = R(N, 4), A = W(D);
        xt(A, { placeholder: "搜索的数据条数", style: "width: 100%" }), Z(D);
        var V = R(D, 4), z = W(V);
        Ht(z, {
          rows: 3,
          placeholder: "请输入其他参数（Property 格式）",
          style: "width: 100%"
        }), Z(V);
        var I = R(V, 2), E = W(I);
        Ge(E, {
          level: 3,
          mt: "10px",
          children: (b, S) => {
            Me();
            var T = Re("输出参数");
            O(b, T);
          },
          $$slots: { default: !0 }
        }), Z(I);
        var H = R(I, 2);
        Qn(H, {}), O(c, d);
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
re(zd, { data: {} }, [], [], !0);
var qy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), Uy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Gy = /* @__PURE__ */ ne('<div class="heading svelte-md8tgj"><!> <!></div> <!> <div class="heading svelte-md8tgj"><!></div> <!>', 1);
const jy = {
  hash: "svelte-md8tgj",
  code: ".heading.svelte-md8tgj {display:flex;margin-bottom:10px;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function Id(e, t) {
  ce(t, !0), Qe(e, jy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ kt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = yt(), { addParameter: i } = zn(), s = Ji();
  let a = Tr(Vt([]));
  return wn(async () => {
    var u;
    const l = await ((u = s.provider) == null ? void 0 : u.knowledge());
    h(a).push(...l || []);
  }), xn(e, dt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var f = qy();
        O(c, f);
      },
      handle: (c) => {
        Gn(c, {
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
        var d = Gy(), g = _e(d), v = W(g);
        Ge(v, {
          level: 3,
          children: (m, k) => {
            Me();
            var P = Re("循环变量");
            O(m, P);
          },
          $$slots: { default: !0 }
        });
        var C = R(v, 2);
        Ke(C, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (m, k) => {
            var P = Uy();
            O(m, P);
          },
          $$slots: { default: !0 }
        }), Z(g);
        var _ = R(g, 2);
        Ft(_, {});
        var $ = R(_, 2), p = W($);
        Ge(p, {
          level: 3,
          mt: "10px",
          children: (m, k) => {
            Me();
            var P = Re("输出参数");
            O(m, P);
          },
          $$slots: { default: !0 }
        }), Z($);
        var x = R($, 2);
        Qn(x, {}), O(c, d);
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
re(Id, { data: {} }, [], [], !0);
const Jy = {
  startNode: Pd,
  codeNode: Dd,
  llmNode: Ad,
  templateNode: Vd,
  httpNode: Od,
  knowledgeNode: Ld,
  searchEngineNode: zd,
  loopNode: Id,
  endNode: Td
};
var Qy = /* @__PURE__ */ ne("<!> ", 1);
function Rd(e, t) {
  ce(t, !0);
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
          extra: s()
        }
      };
      l.dataTransfer.setData("application/tinyflow", JSON.stringify(u)), l.dataTransfer.effectAllowed = "move";
    },
    children: (l, u) => {
      var c = Qy(), f = _e(c);
      wu(f, n);
      var d = R(f);
      Se(() => mn(d, ` ${r() ?? ""}`)), O(l, c);
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
re(
  Rd,
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
var ew = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), tw = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), nw = /* @__PURE__ */ ne('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"><!></div></div></div> <!></div>');
function Bd(e) {
  let t = Tr("base"), n = Tr("show");
  const r = [
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
  ], o = [
    {
      label: "基础节点",
      value: "base"
    },
    {
      label: "业务工具",
      value: "tools"
    }
  ];
  var i = nw(), s = W(i), a = W(s), l = W(a);
  cd(l, {
    style: "width: 100%",
    items: o,
    onChange: (v) => {
      G(t, Vt(v.value.toString()));
    }
  }), Z(a);
  var u = R(a, 2), c = W(u);
  It(c, 21, () => r, Oi, (v, C) => {
    Rd(v, dt(() => h(C)));
  }), Z(c);
  var f = R(c, 2), d = W(f);
  Ke(d, {
    children: (v, C) => {
      Me();
      var _ = Re("测试业务按钮");
      O(v, _);
    },
    $$slots: { default: !0 }
  }), Z(f), Z(u), Z(s);
  var g = R(s, 2);
  Ke(g, {
    onclick: () => {
      G(n, Vt(h(n) ? "" : "show"));
    },
    children: (v, C) => {
      var _ = Je(), $ = _e(_);
      {
        var p = (m) => {
          var k = ew();
          O(m, k);
        }, x = (m) => {
          var k = tw();
          O(m, k);
        };
        Ee($, (m) => {
          h(n) === "show" ? m(p) : m(x, !1);
        });
      }
      O(v, _);
    },
    $$slots: { default: !0 }
  }), Z(i), Se(() => {
    Vr(i, `tf-toolbar ${h(n) ?? ""}`), ae(c, "style", `display: ${(h(t) === "base" ? "flex" : "none") ?? ""}`), ae(f, "style", `display: ${(h(t) !== "base" ? "flex" : "none") ?? ""}`);
  }), O(e, i);
}
re(Bd, {}, [], [], !0);
var rw = /* @__PURE__ */ ne("<!> <!> <!>", 1), ow = /* @__PURE__ */ ne('<div style="position: relative; height: 100%; width: 100%"><!> <!></div>');
function Yd(e, t) {
  ce(t, !0);
  const n = w(t, "onInit", 7), r = Bt();
  n()(r);
  const o = (c) => {
    c.preventDefault(), c.dataTransfer && (c.dataTransfer.dropEffect = "move");
  }, i = (c) => {
    var C;
    c.preventDefault();
    const f = r.screenToFlowPosition({
      x: c.clientX - 250,
      y: c.clientY - 100
    }), d = (C = c.dataTransfer) == null ? void 0 : C.getData("application/tinyflow"), g = d ? JSON.parse(d) : {}, v = {
      id: `node_${Zr()}`,
      position: f,
      data: {},
      ...g
    };
    ei.addNode(v), ei.selectNodeOnly(v.id);
  };
  var s = ow(), a = W(s);
  Bd(a);
  var l = R(a, 2);
  const u = /* @__PURE__ */ Te(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: mo.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  return Uc(l, dt({ nodeTypes: Jy }, ei, {
    class: "tinyflow-logo",
    get defaultEdgeOptions() {
      return h(u);
    },
    $$events: { drop: i, dragover: o },
    children: (c, f) => {
      var d = rw(), g = _e(d);
      id(g, {});
      var v = R(g, 2);
      nd(v, {});
      var C = R(v, 2);
      ad(C, {}), O(c, d);
    },
    $$slots: { default: !0 }
  })), Z(s), O(e, s), de({
    get onInit() {
      return n();
    },
    set onInit(c) {
      n(c), y();
    }
  });
}
re(Yd, { onInit: {} }, [], [], !0);
function iw(e, t) {
  ce(t, !0);
  const n = w(t, "options", 7), r = w(t, "onInit", 7), { data: o } = n();
  return ei.init(o.nodes || [], o.edges || []), Dr("tinyflow_options", n()), Gc(e, {
    fitView: !0,
    children: (i, s) => {
      Yd(i, {
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
customElements.define("tinyflow-component", re(iw, { options: {}, onInit: {} }, [], [], !1));
export {
  dw as Tinyflow
};
//# sourceMappingURL=index.js.map
