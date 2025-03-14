import { defineComponent as Fd, ref as Gd, onMounted as Ud, onUnmounted as Jd, createElementBlock as Qd, openBlock as ef, normalizeStyle as tf, normalizeClass as nf } from "vue";
var rf = Object.defineProperty, Sl = (e) => {
  throw TypeError(e);
}, of = (e, t, n) => t in e ? rf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, St = (e, t, n) => of(e, typeof t != "symbol" ? t + "" : t, n), Sa = (e, t, n) => t.has(e) || Sl("Cannot " + n), st = (e, t, n) => (Sa(e, t, "read from private field"), n ? n.call(e) : t.get(e)), yr = (e, t, n) => t.has(e) ? Sl("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Go = (e, t, n, r) => (Sa(e, t, "write to private field"), t.set(e, n), n), af = (e, t, n) => (Sa(e, t, "access private method"), n);
const sf = "5";
var bs;
typeof window < "u" && ((bs = window.__svelte ?? (window.__svelte = {})).v ?? (bs.v = /* @__PURE__ */ new Set())).add(sf);
let Ar = !1, lf = !1;
function uf() {
  Ar = !0;
}
uf();
const Na = 1, za = 2, Nl = 4, cf = 8, df = 16, ff = 1, gf = 2, zl = 4, vf = 8, hf = 16, Vl = 1, pf = 2, Va = "[", Ha = "[!", Oa = "]", xr = {}, Pt = Symbol(), Hl = "http://www.w3.org/2000/svg", mf = !1, tn = 2, Ol = 4, ki = 8, Ta = 16, Tn = 32, Ir = 64, Uo = 128, Wt = 256, Jo = 512, pt = 1024, Dn = 2048, fr = 4096, Mn = 8192, Ci = 16384, yf = 32768, Zr = 65536, wf = 1 << 17, xf = 1 << 19, Tl = 1 << 20, Kn = Symbol("$state"), Da = Symbol("legacy props"), bf = Symbol("");
var yo = Array.isArray, $f = Array.prototype.indexOf, La = Array.from, Qo = Object.keys, no = Object.defineProperty, Sn = Object.getOwnPropertyDescriptor, Dl = Object.getOwnPropertyDescriptors, kf = Object.prototype, Cf = Array.prototype, Aa = Object.getPrototypeOf;
function Wr(e) {
  return typeof e == "function";
}
const ct = () => {
};
function _f(e) {
  return e();
}
function ro(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const Ef = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let oo = [], io = [];
function Ll() {
  var e = oo;
  oo = [], ro(e);
}
function Al() {
  var e = io;
  io = [], ro(e);
}
function wo(e) {
  oo.length === 0 && queueMicrotask(Ll), oo.push(e);
}
function Pf(e) {
  io.length === 0 && Ef(Al), io.push(e);
}
function $s() {
  oo.length > 0 && Ll(), io.length > 0 && Al();
}
function Il(e) {
  return e === this.v;
}
function Ia(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Za(e) {
  return !Ia(e, this.v);
}
function Mf(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Sf() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Nf(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function zf() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Vf() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Hf(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Of() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Tf() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Df() {
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
    equals: Il,
    rv: 0,
    wv: 0
  };
  return n;
}
function ir(e) {
  return /* @__PURE__ */ Zl(Nt(e));
}
// @__NO_SIDE_EFFECTS__
function xo(e, t = !1) {
  var n;
  const r = Nt(e);
  return t || (r.equals = Za), Ar && Re !== null && Re.l !== null && ((n = Re.l).s ?? (n.s = [])).push(r), r;
}
function te(e, t = !1) {
  return /* @__PURE__ */ Zl(/* @__PURE__ */ xo(e, t));
}
// @__NO_SIDE_EFFECTS__
function Zl(e) {
  return Fe !== null && !Qt && Fe.f & tn && (dn === null ? Zf([e]) : dn.push(e)), e;
}
function G(e, t) {
  return Fe !== null && !Qt && Ni() && Fe.f & (tn | Ta) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (dn === null || !dn.includes(e)) && Lf(), ia(e, t);
}
function ia(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = ql(), Bl(e, Dn), Ni() && Xe !== null && Xe.f & pt && !(Xe.f & (Tn | Ir)) && (_n === null ? Bf([e]) : _n.push(e))), t;
}
function ks(e, t = 1) {
  var n = v(e), r = t === 1 ? n++ : n--;
  return G(e, n), r;
}
function Bl(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Ni(), o = n.length, a = 0; a < o; a++) {
      var i = n[a], s = i.f;
      s & Dn || !r && i === Xe || (nn(i, t), s & (pt | Wt) && (s & tn ? Bl(
        /** @type {Derived} */
        i,
        fr
      ) : Mi(
        /** @type {Effect} */
        i
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Se(e) {
  var t = tn | Dn, n = Fe !== null && Fe.f & tn ? (
    /** @type {Derived} */
    Fe
  ) : null;
  return Xe === null || n !== null && n.f & Wt ? t |= Wt : Xe.f |= Tl, {
    ctx: Re,
    deps: null,
    effects: null,
    equals: Il,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: n ?? Xe
  };
}
// @__NO_SIDE_EFFECTS__
function ge(e) {
  const t = /* @__PURE__ */ Se(e);
  return t.equals = Za, t;
}
function Rl(e) {
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
function Af(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & tn))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function If(e) {
  var t, n = Xe;
  Fn(Af(e));
  try {
    Rl(e), t = Gl(e);
  } finally {
    Fn(n);
  }
  return t;
}
function Yl(e) {
  var t = If(e), n = (Rn || e.f & Wt) && e.deps !== null ? fr : pt;
  nn(e, n), e.equals(t) || (e.v = t, e.wv = ql());
}
function _i(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let Ee = !1;
function Lt(e) {
  Ee = e;
}
let He;
function bt(e) {
  if (e === null)
    throw _i(), xr;
  return He = e;
}
function vn() {
  return bt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ yn(He)
  );
}
function K(e) {
  if (Ee) {
    if (/* @__PURE__ */ yn(He) !== null)
      throw _i(), xr;
    He = e;
  }
}
function Me(e = 1) {
  if (Ee) {
    for (var t = e, n = He; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ yn(n);
    He = n;
  }
}
function aa() {
  for (var e = 0, t = He; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === Oa) {
        if (e === 0) return t;
        e -= 1;
      } else (n === Va || n === Ha) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ yn(t)
    );
    t.remove(), t = r;
  }
}
function Tt(e, t = null, n) {
  if (typeof e != "object" || e === null || Kn in e)
    return e;
  const r = Aa(e);
  if (r !== kf && r !== Cf)
    return e;
  var o = /* @__PURE__ */ new Map(), a = yo(e), i = Nt(0);
  a && o.set("length", Nt(
    /** @type {any[]} */
    e.length
  ));
  var s;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, u, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Of();
        var d = o.get(u);
        return d === void 0 ? (d = Nt(c.value), o.set(u, d)) : G(d, Tt(c.value, s)), !0;
      },
      deleteProperty(l, u) {
        var c = o.get(u);
        if (c === void 0)
          u in l && o.set(u, Nt(Pt));
        else {
          if (a && typeof u == "string") {
            var d = (
              /** @type {Source<number>} */
              o.get("length")
            ), f = Number(u);
            Number.isInteger(f) && f < d.v && G(d, f);
          }
          G(c, Pt), Cs(i);
        }
        return !0;
      },
      get(l, u, c) {
        var d;
        if (u === Kn)
          return e;
        var f = o.get(u), g = u in l;
        if (f === void 0 && (!g || (d = Sn(l, u)) != null && d.writable) && (f = Nt(Tt(g ? l[u] : Pt, s)), o.set(u, f)), f !== void 0) {
          var w = v(f);
          return w === Pt ? void 0 : w;
        }
        return Reflect.get(l, u, c);
      },
      getOwnPropertyDescriptor(l, u) {
        var c = Reflect.getOwnPropertyDescriptor(l, u);
        if (c && "value" in c) {
          var d = o.get(u);
          d && (c.value = v(d));
        } else if (c === void 0) {
          var f = o.get(u), g = f == null ? void 0 : f.v;
          if (f !== void 0 && g !== Pt)
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
        var c;
        if (u === Kn)
          return !0;
        var d = o.get(u), f = d !== void 0 && d.v !== Pt || Reflect.has(l, u);
        if (d !== void 0 || Xe !== null && (!f || (c = Sn(l, u)) != null && c.writable)) {
          d === void 0 && (d = Nt(f ? Tt(l[u], s) : Pt), o.set(u, d));
          var g = v(d);
          if (g === Pt)
            return !1;
        }
        return f;
      },
      set(l, u, c, d) {
        var f, g = o.get(u), w = u in l;
        if (a && u === "length")
          for (var x = c; x < /** @type {Source<number>} */
          g.v; x += 1) {
            var $ = o.get(x + "");
            $ !== void 0 ? G($, Pt) : x in l && ($ = Nt(Pt), o.set(x + "", $));
          }
        g === void 0 ? (!w || (f = Sn(l, u)) != null && f.writable) && (g = Nt(void 0), G(g, Tt(c, s)), o.set(u, g)) : (w = g.v !== Pt, G(g, Tt(c, s)));
        var C = Reflect.getOwnPropertyDescriptor(l, u);
        if (C != null && C.set && C.set.call(d, c), !w) {
          if (a && typeof u == "string") {
            var p = (
              /** @type {Source<number>} */
              o.get("length")
            ), b = Number(u);
            Number.isInteger(b) && b >= p.v && G(p, b + 1);
          }
          Cs(i);
        }
        return !0;
      },
      ownKeys(l) {
        v(i);
        var u = Reflect.ownKeys(l).filter((f) => {
          var g = o.get(f);
          return g === void 0 || g.v !== Pt;
        });
        for (var [c, d] of o)
          d.v !== Pt && !(c in l) && u.push(c);
        return u;
      },
      setPrototypeOf() {
        Tf();
      }
    }
  );
}
function Cs(e, t = 1) {
  G(e, e.v + t);
}
var Mt, Kl, Xl, Wl;
function sa() {
  if (Mt === void 0) {
    Mt = window, Kl = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    Xl = Sn(t, "firstChild").get, Wl = Sn(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function zn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function xt(e) {
  return Xl.call(e);
}
// @__NO_SIDE_EFFECTS__
function yn(e) {
  return Wl.call(e);
}
function W(e, t) {
  if (!Ee)
    return /* @__PURE__ */ xt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ xt(He)
  );
  if (n === null)
    n = He.appendChild(zn());
  else if (t && n.nodeType !== 3) {
    var r = zn();
    return n == null || n.before(r), bt(r), r;
  }
  return bt(n), n;
}
function we(e, t) {
  if (!Ee) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ xt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ yn(n) : n;
  }
  return He;
}
function I(e, t = 1, n = !1) {
  let r = Ee ? He : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ yn(r);
  if (!Ee)
    return r;
  var a = r == null ? void 0 : r.nodeType;
  if (n && a !== 3) {
    var i = zn();
    return r === null ? o == null || o.after(i) : r.before(i), bt(i), i;
  }
  return bt(r), /** @type {TemplateNode} */
  r;
}
function Ba(e) {
  e.textContent = "";
}
let Ro = !1, ei = !1, ti = null, rr = !1, Ra = !1;
function _s(e) {
  Ra = e;
}
let eo = [], Fe = null, Qt = !1;
function qn(e) {
  Fe = e;
}
let Xe = null;
function Fn(e) {
  Xe = e;
}
let dn = null;
function Zf(e) {
  dn = e;
}
let yt = null, Ot = 0, _n = null;
function Bf(e) {
  _n = e;
}
let jl = 1, ni = 0, Rn = !1;
function ql() {
  return ++jl;
}
function Br(e) {
  var t, n = e.f;
  if (n & Dn)
    return !0;
  if (n & fr) {
    var r = e.deps, o = (n & Wt) !== 0;
    if (r !== null) {
      var a, i, s = (n & Jo) !== 0, l = o && Xe !== null && !Rn, u = r.length;
      if (s || l) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (a = 0; a < u; a++)
          i = r[a], (s || !((t = i == null ? void 0 : i.reactions) != null && t.includes(c))) && (i.reactions ?? (i.reactions = [])).push(c);
        s && (c.f ^= Jo), l && d !== null && !(d.f & Wt) && (c.f ^= Wt);
      }
      for (a = 0; a < u; a++)
        if (i = r[a], Br(
          /** @type {Derived} */
          i
        ) && Yl(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!o || Xe !== null && !Rn) && nn(e, pt);
  }
  return !1;
}
function Rf(e, t) {
  for (var n = t; n !== null; ) {
    if (n.f & Uo)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= Uo;
      }
    n = n.parent;
  }
  throw Ro = !1, e;
}
function Yf(e) {
  return (e.f & Ci) === 0 && (e.parent === null || (e.parent.f & Uo) === 0);
}
function Ei(e, t, n, r) {
  if (Ro) {
    if (n === null && (Ro = !1), Yf(t))
      throw e;
    return;
  }
  n !== null && (Ro = !0);
  {
    Rf(e, t);
    return;
  }
}
function Fl(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var o = 0; o < r.length; o++) {
      var a = r[o];
      a.f & tn ? Fl(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (n ? nn(a, Dn) : a.f & pt && nn(a, fr), Mi(
        /** @type {Effect} */
        a
      ));
    }
}
function Gl(e) {
  var t, n = yt, r = Ot, o = _n, a = Fe, i = Rn, s = dn, l = Re, u = Qt, c = e.f;
  yt = /** @type {null | Value[]} */
  null, Ot = 0, _n = null, Rn = (c & Wt) !== 0 && (Qt || !rr || Fe === null), Fe = c & (Tn | Ir) ? null : e, dn = null, Es(e.ctx), Qt = !1, ni++;
  try {
    var d = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (yt !== null) {
      var g;
      if (ri(e, Ot), f !== null && Ot > 0)
        for (f.length = Ot + yt.length, g = 0; g < yt.length; g++)
          f[Ot + g] = yt[g];
      else
        e.deps = f = yt;
      if (!Rn)
        for (g = Ot; g < f.length; g++)
          ((t = f[g]).reactions ?? (t.reactions = [])).push(e);
    } else f !== null && Ot < f.length && (ri(e, Ot), f.length = Ot);
    if (Ni() && _n !== null && !Qt && f !== null && !(e.f & (tn | fr | Dn)))
      for (g = 0; g < /** @type {Source[]} */
      _n.length; g++)
        Fl(
          _n[g],
          /** @type {Effect} */
          e
        );
    return a !== null && ni++, d;
  } finally {
    yt = n, Ot = r, _n = o, Fe = a, Rn = i, dn = s, Es(l), Qt = u;
  }
}
function Kf(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = $f.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && t.f & tn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (yt === null || !yt.includes(t)) && (nn(t, fr), t.f & (Wt | Jo) || (t.f ^= Jo), Rl(
    /** @type {Derived} **/
    t
  ), ri(
    /** @type {Derived} **/
    t,
    0
  ));
}
function ri(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Kf(e, n[r]);
}
function Pi(e) {
  var t = e.f;
  if (!(t & Ci)) {
    nn(e, pt);
    var n = Xe, r = Re, o = rr;
    Xe = e, rr = !0;
    try {
      t & Ta ? Qf(e) : tu(e), eu(e);
      var a = Gl(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = jl;
      var i = e.deps, s;
      mf && lf && e.f & Dn;
    } catch (l) {
      Ei(l, e, n, r || e.ctx);
    } finally {
      rr = o, Xe = n;
    }
  }
}
function Xf() {
  try {
    zf();
  } catch (e) {
    if (ti !== null)
      Ei(e, ti, null);
    else
      throw e;
  }
}
function Ul() {
  var e = rr;
  try {
    var t = 0;
    for (rr = !0; eo.length > 0; ) {
      t++ > 1e3 && Xf();
      var n = eo, r = n.length;
      eo = [];
      for (var o = 0; o < r; o++) {
        var a = n[o];
        a.f & pt || (a.f ^= pt);
        var i = jf(a);
        Wf(i);
      }
    }
  } finally {
    ei = !1, rr = e, ti = null;
  }
}
function Wf(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if (!(r.f & (Ci | Mn)))
        try {
          Br(r) && (Pi(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? nu(r) : r.fn = null));
        } catch (o) {
          Ei(o, r, null, r.ctx);
        }
    }
}
function Mi(e) {
  ei || (ei = !0, queueMicrotask(Ul));
  for (var t = ti = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (Ir | Tn)) {
      if (!(n & pt)) return;
      t.f ^= pt;
    }
  }
  eo.push(t);
}
function jf(e) {
  for (var t = [], n = e.first; n !== null; ) {
    var r = n.f, o = (r & Tn) !== 0, a = o && (r & pt) !== 0;
    if (!a && !(r & Mn)) {
      if (r & Ol)
        t.push(n);
      else if (o)
        n.f ^= pt;
      else {
        var i = Fe;
        try {
          Fe = n, Br(n) && Pi(n);
        } catch (u) {
          Ei(u, n, null, n.ctx);
        } finally {
          Fe = i;
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
function m(e) {
  var t;
  for ($s(); eo.length > 0; )
    ei = !0, Ul(), $s();
  return (
    /** @type {T} */
    t
  );
}
function v(e) {
  var t = e.f, n = (t & tn) !== 0;
  if (Fe !== null && !Qt) {
    dn !== null && dn.includes(e) && Df();
    var r = Fe.deps;
    e.rv < ni && (e.rv = ni, yt === null && r !== null && r[Ot] === e ? Ot++ : yt === null ? yt = [e] : (!Rn || !yt.includes(e)) && yt.push(e));
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), a = o.parent;
    a !== null && !(a.f & Wt) && (o.f ^= Wt);
  }
  return n && (o = /** @type {Derived} */
  e, Br(o) && Yl(o)), e.v;
}
function hn(e) {
  var t = Qt;
  try {
    return Qt = !0, e();
  } finally {
    Qt = t;
  }
}
const qf = -7169;
function nn(e, t) {
  e.f = e.f & qf | t;
}
function U(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Kn in e)
      la(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Kn in n && la(n);
      }
  }
}
function la(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        la(e[r], t);
      } catch {
      }
    const n = Aa(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Dl(n);
      for (let o in r) {
        const a = r[o].get;
        if (a)
          try {
            a.call(e);
          } catch {
          }
      }
    }
  }
}
function Jl(e) {
  Xe === null && Fe === null && Nf(), Fe !== null && Fe.f & Wt && Xe === null && Sf(), Ra && Mf();
}
function Ff(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function gr(e, t, n, r = !0) {
  var o = (e & Ir) !== 0, a = Xe, i = {
    ctx: Re,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Dn,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: o ? null : a,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (n)
    try {
      Pi(i), i.f |= yf;
    } catch (u) {
      throw jt(i), u;
    }
  else t !== null && Mi(i);
  var s = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (Tl | Uo)) === 0;
  if (!s && !o && r && (a !== null && Ff(i, a), Fe !== null && Fe.f & tn)) {
    var l = (
      /** @type {Derived} */
      Fe
    );
    (l.effects ?? (l.effects = [])).push(i);
  }
  return i;
}
function Ql(e) {
  const t = gr(ki, null, !1);
  return nn(t, pt), t.teardown = e, t;
}
function Er(e) {
  Jl();
  var t = Xe !== null && (Xe.f & Tn) !== 0 && Re !== null && !Re.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      Re
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: Xe,
      reaction: Fe
    });
  } else {
    var r = Dt(e);
    return r;
  }
}
function Gf(e) {
  return Jl(), Rr(e);
}
function Uf(e) {
  const t = gr(Ir, e, !0);
  return () => {
    jt(t);
  };
}
function Jf(e) {
  const t = gr(Ir, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Pr(t, () => {
      jt(t), r(void 0);
    }) : (jt(t), r(void 0));
  });
}
function Dt(e) {
  return gr(Ol, e, !1);
}
function se(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    Re
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = Rr(() => {
    e(), !r.ran && (r.ran = !0, G(n.l.r2, !0), hn(t));
  });
}
function ft() {
  var e = (
    /** @type {ComponentContextLegacy} */
    Re
  );
  Rr(() => {
    if (v(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        n.f & pt && nn(n, fr), Br(n) && Pi(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function Rr(e) {
  return gr(ki, e, !0);
}
function _e(e, t = [], n = Se) {
  const r = t.map(n);
  return vr(() => e(...r.map(v)));
}
function vr(e, t = 0) {
  return gr(ki | Ta | t, e, !0);
}
function Vn(e, t = !0) {
  return gr(ki | Tn, e, !0, t);
}
function eu(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Ra, r = Fe;
    _s(!0), qn(null);
    try {
      t.call(null);
    } finally {
      _s(n), qn(r);
    }
  }
}
function tu(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    jt(n, t), n = r;
  }
}
function Qf(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & Tn || jt(t), t = n;
  }
}
function jt(e, t = !0) {
  var n = !1;
  if ((t || e.f & xf) && e.nodes_start !== null) {
    for (var r = e.nodes_start, o = e.nodes_end; r !== null; ) {
      var a = r === o ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ yn(r)
      );
      r.remove(), r = a;
    }
    n = !0;
  }
  tu(e, t && !n), ri(e, 0), nn(e, Ci);
  var i = e.transitions;
  if (i !== null)
    for (const l of i)
      l.stop();
  eu(e);
  var s = e.parent;
  s !== null && s.first !== null && nu(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function nu(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Pr(e, t) {
  var n = [];
  Ya(e, n, !0), ru(n, () => {
    jt(e), t && t();
  });
}
function ru(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function Ya(e, t, n) {
  if (!(e.f & Mn)) {
    if (e.f ^= Mn, e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || n) && t.push(i);
    for (var r = e.first; r !== null; ) {
      var o = r.next, a = (r.f & Zr) !== 0 || (r.f & Tn) !== 0;
      Ya(r, t, a ? n : !1), r = o;
    }
  }
}
function ao(e) {
  ou(e, !0);
}
function ou(e, t) {
  if (e.f & Mn) {
    e.f ^= Mn, e.f & pt || (e.f ^= pt), Br(e) && (nn(e, Dn), Mi(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Zr) !== 0 || (n.f & Tn) !== 0;
      ou(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
function Si(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let Re = null;
function Es(e) {
  Re = e;
}
function ar(e) {
  return (
    /** @type {T} */
    Ka().get(e)
  );
}
function Mr(e, t) {
  return Ka().set(e, t), t;
}
function e1(e) {
  return Ka().has(e);
}
function le(e, t = !1, n) {
  Re = {
    p: Re,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  }, Ar && !t && (Re.l = {
    s: null,
    u: null,
    r1: [],
    r2: Nt(!1)
  });
}
function ue(e) {
  const t = Re;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const i = t.e;
    if (i !== null) {
      var n = Xe, r = Fe;
      t.e = null;
      try {
        for (var o = 0; o < i.length; o++) {
          var a = i[o];
          Fn(a.effect), qn(a.reaction), Dt(a.fn);
        }
      } finally {
        Fn(n), qn(r);
      }
    }
    Re = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Ni() {
  return !Ar || Re !== null && Re.l === null;
}
function Ka(e) {
  return Re === null && Si(), Re.c ?? (Re.c = new Map(t1(Re) || void 0));
}
function t1(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function n1(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const r1 = [
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
function o1(e) {
  return r1.includes(e);
}
const i1 = {
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
  return e = e.toLowerCase(), i1[e] ?? e;
}
const s1 = ["touchstart", "touchmove"];
function l1(e) {
  return s1.includes(e);
}
const u1 = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function c1(e) {
  return u1.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function d1(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, wo(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function f1(e) {
  Ee && /* @__PURE__ */ xt(e) !== null && Ba(e);
}
let Ps = !1;
function g1() {
  Ps || (Ps = !0, document.addEventListener(
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
  var t = Fe, n = Xe;
  qn(null), Fn(null);
  try {
    return e();
  } finally {
    qn(t), Fn(n);
  }
}
const iu = /* @__PURE__ */ new Set(), ua = /* @__PURE__ */ new Set();
function au(e, t, n, r = {}) {
  function o(a) {
    if (r.capture || Gr.call(t, a), !a.cancelBubble)
      return v1(() => n == null ? void 0 : n.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? wo(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function Je(e, t, n, r, o) {
  var a = { capture: r, passive: o }, i = au(e, t, n, a);
  (t === document.body || t === window || t === document) && Ql(() => {
    t.removeEventListener(e, i, a);
  });
}
function zi(e) {
  for (var t = 0; t < e.length; t++)
    iu.add(e[t]);
  for (var n of ua)
    n(e);
}
function Gr(e) {
  var t, n = this, r = (
    /** @type {Node} */
    n.ownerDocument
  ), o = e.type, a = ((t = e.composedPath) == null ? void 0 : t.call(e)) || [], i = (
    /** @type {null | Element} */
    a[0] || e.target
  ), s = 0, l = e.__root;
  if (l) {
    var u = a.indexOf(l);
    if (u !== -1 && (n === document || n === /** @type {any} */
    window)) {
      e.__root = n;
      return;
    }
    var c = a.indexOf(n);
    if (c === -1)
      return;
    u <= c && (s = u);
  }
  if (i = /** @type {Element} */
  a[s] || e.target, i !== n) {
    no(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var d = Fe, f = Xe;
    qn(null), Fn(null);
    try {
      for (var g, w = []; i !== null; ) {
        var x = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var $ = i["__" + o];
          if ($ !== void 0 && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (yo($)) {
              var [C, ...p] = $;
              C.apply(i, [e, ...p]);
            } else
              $.call(i, e);
        } catch (b) {
          g ? w.push(b) : g = b;
        }
        if (e.cancelBubble || x === n || x === null)
          break;
        i = x;
      }
      if (g) {
        for (let b of w)
          queueMicrotask(() => {
            throw b;
          });
        throw g;
      }
    } finally {
      e.__root = n, delete e.currentTarget, qn(d), Fn(f);
    }
  }
}
function Xa(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Vt(e, t) {
  var n = (
    /** @type {Effect} */
    Xe
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ne(e, t) {
  var n = (t & Vl) !== 0, r = (t & pf) !== 0, o, a = !e.startsWith("<!>");
  return () => {
    if (Ee)
      return Vt(He, null), He;
    o === void 0 && (o = Xa(a ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ xt(o)));
    var i = (
      /** @type {TemplateNode} */
      r || Kl ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ xt(i)
      ), l = (
        /** @type {TemplateNode} */
        i.lastChild
      );
      Vt(s, l);
    } else
      Vt(i, i);
    return i;
  };
}
// @__NO_SIDE_EFFECTS__
function xe(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & Vl) !== 0, a = `<${n}>${r ? e : "<!>" + e}</${n}>`, i;
  return () => {
    if (Ee)
      return Vt(He, null), He;
    if (!i) {
      var s = (
        /** @type {DocumentFragment} */
        Xa(a)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ xt(s)
      );
      if (o)
        for (i = document.createDocumentFragment(); /* @__PURE__ */ xt(l); )
          i.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ xt(l)
          );
      else
        i = /** @type {Element} */
        /* @__PURE__ */ xt(l);
    }
    var u = (
      /** @type {TemplateNode} */
      i.cloneNode(!0)
    );
    if (o) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ xt(u)
      ), d = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Vt(c, d);
    } else
      Vt(u, u);
    return u;
  };
}
function Ie(e = "") {
  if (!Ee) {
    var t = zn(e + "");
    return Vt(t, t), t;
  }
  var n = He;
  return n.nodeType !== 3 && (n.before(n = zn()), bt(n)), Vt(n, n), n;
}
function Qe() {
  if (Ee)
    return Vt(He, null), He;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = zn();
  return e.append(t, n), Vt(t, n), e;
}
function D(e, t) {
  if (Ee) {
    Xe.nodes_end = He, vn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function wn(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function su(e, t) {
  return lu(e, t);
}
function h1(e, t) {
  sa(), t.intro = t.intro ?? !1;
  const n = t.target, r = Ee, o = He;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ xt(n)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== Va); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ yn(a);
    if (!a)
      throw xr;
    Lt(!0), bt(
      /** @type {Comment} */
      a
    ), vn();
    const i = lu(e, { ...t, anchor: a });
    if (He === null || He.nodeType !== 8 || /** @type {Comment} */
    He.data !== Oa)
      throw _i(), xr;
    return Lt(!1), /**  @type {Exports} */
    i;
  } catch (i) {
    if (i === xr)
      return t.recover === !1 && Vf(), sa(), Ba(n), Lt(!1), su(e, t);
    throw i;
  } finally {
    Lt(r), bt(o);
  }
}
const pr = /* @__PURE__ */ new Map();
function lu(e, { target: t, anchor: n, props: r = {}, events: o, context: a, intro: i = !0 }) {
  sa();
  var s = /* @__PURE__ */ new Set(), l = (d) => {
    for (var f = 0; f < d.length; f++) {
      var g = d[f];
      if (!s.has(g)) {
        s.add(g);
        var w = l1(g);
        t.addEventListener(g, Gr, { passive: w });
        var x = pr.get(g);
        x === void 0 ? (document.addEventListener(g, Gr, { passive: w }), pr.set(g, 1)) : pr.set(g, x + 1);
      }
    }
  };
  l(La(iu)), ua.add(l);
  var u = void 0, c = Jf(() => {
    var d = n ?? t.appendChild(zn());
    return Vn(() => {
      if (a) {
        le({});
        var f = (
          /** @type {ComponentContext} */
          Re
        );
        f.c = a;
      }
      o && (r.$$events = o), Ee && Vt(
        /** @type {TemplateNode} */
        d,
        null
      ), u = e(d, r) || {}, Ee && (Xe.nodes_end = He), a && ue();
    }), () => {
      var f;
      for (var g of s) {
        t.removeEventListener(g, Gr);
        var w = (
          /** @type {number} */
          pr.get(g)
        );
        --w === 0 ? (document.removeEventListener(g, Gr), pr.delete(g)) : pr.set(g, w);
      }
      ua.delete(l), d !== n && ((f = d.parentNode) == null || f.removeChild(d));
    };
  });
  return ca.set(u, c), u;
}
let ca = /* @__PURE__ */ new WeakMap();
function p1(e, t) {
  const n = ca.get(e);
  return n ? (ca.delete(e), n(t)) : Promise.resolve();
}
function be(e, t, [n, r] = [0, 0]) {
  Ee && n === 0 && vn();
  var o = e, a = null, i = null, s = Pt, l = n > 0 ? Zr : 0, u = !1;
  const c = (f, g = !0) => {
    u = !0, d(g, f);
  }, d = (f, g) => {
    if (s === (s = f)) return;
    let w = !1;
    if (Ee && r !== -1) {
      if (n === 0) {
        const $ = (
          /** @type {Comment} */
          o.data
        );
        $ === Va ? r = 0 : $ === Ha ? r = 1 / 0 : (r = parseInt($.substring(1)), r !== r && (r = s ? 1 / 0 : -1));
      }
      const x = r > n;
      !!s === x && (o = aa(), bt(o), Lt(!1), w = !0, r = -1);
    }
    s ? (a ? ao(a) : g && (a = Vn(() => g(o))), i && Pr(i, () => {
      i = null;
    })) : (i ? ao(i) : g && (i = Vn(() => g(o, [n + 1, r]))), a && Pr(a, () => {
      a = null;
    })), w && Lt(!0);
  };
  vr(() => {
    u = !1, t(c), u || d(null, null);
  }, l), Ee && (o = He);
}
function Vi(e, t) {
  return t;
}
function m1(e, t, n, r) {
  for (var o = [], a = t.length, i = 0; i < a; i++)
    Ya(t[i].e, o, !0);
  var s = a > 0 && o.length === 0 && n !== null;
  if (s) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Ba(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), Zn(e, t[0].prev, t[a - 1].next);
  }
  ru(o, () => {
    for (var u = 0; u < a; u++) {
      var c = t[u];
      s || (r.delete(c.k), Zn(e, c.prev, c.next)), jt(c.e, !s);
    }
  });
}
function It(e, t, n, r, o, a = null) {
  var i = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & Nl) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    i = Ee ? bt(
      /** @type {Comment | Text} */
      /* @__PURE__ */ xt(u)
    ) : u.appendChild(zn());
  }
  Ee && vn();
  var c = null, d = !1, f = /* @__PURE__ */ ge(() => {
    var g = n();
    return yo(g) ? g : g == null ? [] : La(g);
  });
  vr(() => {
    var g = v(f), w = g.length;
    if (d && w === 0)
      return;
    d = w === 0;
    let x = !1;
    if (Ee) {
      var $ = (
        /** @type {Comment} */
        i.data === Ha
      );
      $ !== (w === 0) && (i = aa(), bt(i), Lt(!1), x = !0);
    }
    if (Ee) {
      for (var C = null, p, b = 0; b < w; b++) {
        if (He.nodeType === 8 && /** @type {Comment} */
        He.data === Oa) {
          i = /** @type {Comment} */
          He, x = !0, Lt(!1);
          break;
        }
        var h = g[b], k = r(h, b);
        p = uu(
          He,
          s,
          C,
          null,
          h,
          k,
          b,
          o,
          t,
          n
        ), s.items.set(k, p), C = p;
      }
      w > 0 && bt(aa());
    }
    Ee || y1(g, s, i, o, t, r, n), a !== null && (w === 0 ? c ? ao(c) : c = Vn(() => a(i)) : c !== null && Pr(c, () => {
      c = null;
    })), x && Lt(!0), v(f);
  }), Ee && (i = He);
}
function y1(e, t, n, r, o, a, i) {
  var s, l, u, c, d = (o & cf) !== 0, f = (o & (Na | za)) !== 0, g = e.length, w = t.items, x = t.first, $ = x, C, p = null, b, h = [], k = [], S, M, z, V;
  if (d)
    for (V = 0; V < g; V += 1)
      S = e[V], M = a(S, V), z = w.get(M), z !== void 0 && ((s = z.a) == null || s.measure(), (b ?? (b = /* @__PURE__ */ new Set())).add(z));
  for (V = 0; V < g; V += 1) {
    if (S = e[V], M = a(S, V), z = w.get(M), z === void 0) {
      var T = $ ? (
        /** @type {TemplateNode} */
        $.e.nodes_start
      ) : n;
      p = uu(
        T,
        t,
        p,
        p === null ? t.first : p.next,
        S,
        M,
        V,
        r,
        o,
        i
      ), w.set(M, p), h = [], k = [], $ = p.next;
      continue;
    }
    if (f && w1(z, S, V, o), z.e.f & Mn && (ao(z.e), d && ((l = z.a) == null || l.unfix(), (b ?? (b = /* @__PURE__ */ new Set())).delete(z))), z !== $) {
      if (C !== void 0 && C.has(z)) {
        if (h.length < k.length) {
          var L = k[0], O;
          p = L.prev;
          var R = h[0], P = h[h.length - 1];
          for (O = 0; O < h.length; O += 1)
            Ms(h[O], L, n);
          for (O = 0; O < k.length; O += 1)
            C.delete(k[O]);
          Zn(t, R.prev, P.next), Zn(t, p, R), Zn(t, P, L), $ = L, p = P, V -= 1, h = [], k = [];
        } else
          C.delete(z), Ms(z, $, n), Zn(t, z.prev, z.next), Zn(t, z, p === null ? t.first : p.next), Zn(t, p, z), p = z;
        continue;
      }
      for (h = [], k = []; $ !== null && $.k !== M; )
        $.e.f & Mn || (C ?? (C = /* @__PURE__ */ new Set())).add($), k.push($), $ = $.next;
      if ($ === null)
        continue;
      z = $;
    }
    h.push(z), p = z, $ = z.next;
  }
  if ($ !== null || C !== void 0) {
    for (var N = C === void 0 ? [] : La(C); $ !== null; )
      $.e.f & Mn || N.push($), $ = $.next;
    var _ = N.length;
    if (_ > 0) {
      var E = o & Nl && g === 0 ? n : null;
      if (d) {
        for (V = 0; V < _; V += 1)
          (u = N[V].a) == null || u.measure();
        for (V = 0; V < _; V += 1)
          (c = N[V].a) == null || c.fix();
      }
      m1(t, N, E, w);
    }
  }
  d && wo(() => {
    var H;
    if (b !== void 0)
      for (z of b)
        (H = z.a) == null || H.apply();
  }), Xe.first = t.first && t.first.e, Xe.last = p && p.e;
}
function w1(e, t, n, r) {
  r & Na && ia(e.v, t), r & za ? ia(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function uu(e, t, n, r, o, a, i, s, l, u) {
  var c = (l & Na) !== 0, d = (l & df) === 0, f = c ? d ? /* @__PURE__ */ xo(o) : Nt(o) : o, g = l & za ? Nt(i) : i, w = {
    i: g,
    v: f,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    return w.e = Vn(() => s(e, f, g, u), Ee), w.e.prev = n && n.e, w.e.next = r && r.e, n === null ? t.first = w : (n.next = w, n.e.next = w.e), r !== null && (r.prev = w, r.e.prev = w.e), w;
  } finally {
  }
}
function Ms(e, t, n) {
  for (var r = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : n, o = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : n, a = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); a !== r; ) {
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ yn(a)
    );
    o.before(a), a = i;
  }
}
function Zn(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function cu(e, t, n, r, o) {
  var a = e, i = "", s;
  vr(() => {
    if (i === (i = t() ?? "")) {
      Ee && vn();
      return;
    }
    s !== void 0 && (jt(s), s = void 0), i !== "" && (s = Vn(() => {
      if (Ee) {
        He.data;
        for (var l = vn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ yn(l);
        if (l === null)
          throw _i(), xr;
        Vt(He, u), a = bt(l);
        return;
      }
      var c = i + "", d = Xa(c);
      Vt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ xt(d),
        /** @type {TemplateNode} */
        d.lastChild
      ), a.before(d);
    }));
  });
}
function ht(e, t, n, r, o) {
  var a;
  Ee && vn();
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
  var r = e, o = ct, a;
  vr(() => {
    o !== (o = t()) && (a && (jt(a), a = null), a = Vn(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Zr), Ee && (r = He);
}
function du(e, t, n) {
  Ee && vn();
  var r = e, o, a;
  vr(() => {
    o !== (o = t()) && (a && (Pr(a), a = null), o && (a = Vn(() => n(r, o))));
  }, Zr), Ee && (r = He);
}
function b1(e, t, n, r, o, a) {
  let i = Ee;
  Ee && vn();
  var s, l, u = null;
  Ee && He.nodeType === 1 && (u = /** @type {Element} */
  He, vn());
  var c = (
    /** @type {TemplateNode} */
    Ee ? He : e
  ), d;
  vr(() => {
    const f = t() || null;
    var g = f === "svg" ? Hl : null;
    f !== s && (d && (f === null ? Pr(d, () => {
      d = null, l = null;
    }) : f === l ? ao(d) : jt(d)), f && f !== l && (d = Vn(() => {
      if (u = Ee ? (
        /** @type {Element} */
        u
      ) : g ? document.createElementNS(g, f) : document.createElement(f), Vt(u, u), r) {
        Ee && c1(f) && u.append(document.createComment(""));
        var w = (
          /** @type {TemplateNode} */
          Ee ? /* @__PURE__ */ xt(u) : u.appendChild(zn())
        );
        Ee && (w === null ? Lt(!1) : bt(w)), r(u, w);
      }
      Xe.nodes_end = u, c.before(u);
    })), s = f, s && (l = s));
  }, Zr), i && (Lt(!0), bt(c));
}
function Ge(e, t) {
  wo(() => {
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
  Dt(() => {
    var r = hn(() => t(e, n == null ? void 0 : n()) || {});
    if (n && r != null && r.update) {
      var o = !1, a = (
        /** @type {any} */
        {}
      );
      Rr(() => {
        var i = n();
        U(i), o && Ia(a, i) && (a = i, r.update(i));
      }), o = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function fu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = fu(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function $1() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = fu(e)) && (r && (r += " "), r += t);
  return r;
}
function xn(e) {
  return typeof e == "object" ? $1(e) : e ?? "";
}
const Ss = [...` 	
\r\f \v\uFEFF`];
function k1(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var a = o.length, i = 0; (i = r.indexOf(o, i)) >= 0; ) {
          var s = i + a;
          (i === 0 || Ss.includes(r[i - 1])) && (s === r.length || Ss.includes(r[s])) ? r = (i === 0 ? "" : r.substring(0, i)) + r.substring(s + 1) : i = s;
        }
  }
  return r === "" ? null : r;
}
function $t(e, t, n, r, o, a) {
  var i = e.__className;
  if (Ee || i !== n) {
    var s = k1(n, r, a);
    (!Ee || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e.__className = n;
  } else if (a)
    for (var l in a) {
      var u = !!a[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return a;
}
const jr = Symbol("class");
function gu(e) {
  if (Ee) {
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
    e.__on_r = n, Pf(n), g1();
  }
}
function C1(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function ae(e, t, n, r) {
  var o = e.__attributes ?? (e.__attributes = {});
  Ee && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[bf] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && vu(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function rn(e, t, n, r, o = !1, a = !1, i = !1) {
  let s = Ee && a;
  s && Lt(!1);
  var l = t || {}, u = e.tagName === "OPTION";
  for (var c in t)
    c in n || (n[c] = null);
  n.class ? n.class = xn(n.class) : (r || n[jr]) && (n.class = null);
  var d = vu(e), f = (
    /** @type {Record<string, unknown>} **/
    e.__attributes ?? (e.__attributes = {})
  );
  for (const b in n) {
    let h = n[b];
    if (u && b === "value" && h == null) {
      e.value = e.__value = "", l[b] = h;
      continue;
    }
    if (b === "class") {
      var g = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      $t(e, g, h, r, t == null ? void 0 : t[jr], n[jr]), l[b] = h, l[jr] = n[jr];
      continue;
    }
    var w = l[b];
    if (h !== w) {
      l[b] = h;
      var x = b[0] + b[1];
      if (x !== "$$") {
        if (x === "on") {
          const k = {}, S = "$$" + b;
          let M = b.slice(2);
          var $ = o1(M);
          if (n1(M) && (M = M.slice(0, -7), k.capture = !0), !$ && w) {
            if (h != null) continue;
            e.removeEventListener(M, l[S], k), l[S] = null;
          }
          if (h != null)
            if ($)
              e[`__${M}`] = h, zi([M]);
            else {
              let z = function(V) {
                l[b].call(this, V);
              };
              l[S] = au(M, e, z, k);
            }
          else $ && (e[`__${M}`] = void 0);
        } else if (b === "style" && h != null)
          e.style.cssText = h + "";
        else if (b === "autofocus")
          d1(
            /** @type {HTMLElement} */
            e,
            !!h
          );
        else if (!a && (b === "__value" || b === "value" && h != null))
          e.value = e.__value = h;
        else if (b === "selected" && u)
          C1(
            /** @type {HTMLOptionElement} */
            e,
            h
          );
        else {
          var C = b;
          o || (C = a1(C));
          var p = C === "defaultValue" || C === "defaultChecked";
          if (h == null && !a && !p)
            if (f[b] = null, C === "value" || C === "checked") {
              let k = (
                /** @type {HTMLInputElement} */
                e
              );
              const S = t === void 0;
              if (C === "value") {
                let M = k.defaultValue;
                k.removeAttribute(C), k.defaultValue = M, k.value = k.__value = S ? M : null;
              } else {
                let M = k.defaultChecked;
                k.removeAttribute(C), k.defaultChecked = M, k.checked = S ? M : !1;
              }
            } else
              e.removeAttribute(b);
          else p || d.includes(C) && (a || typeof h != "string") ? e[C] = h : typeof h != "function" && ae(e, C, h);
        }
        b === "style" && "__styles" in e && (e.__styles = {});
      }
    }
  }
  return s && Lt(!0), l;
}
var Ns = /* @__PURE__ */ new Map();
function vu(e) {
  var t = Ns.get(e.nodeName);
  if (t) return t;
  Ns.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = Dl(r);
    for (var a in n)
      n[a].set && t.push(a);
    r = Aa(r);
  }
  return t;
}
function it(e, t, n, r) {
  var o = e.__styles ?? (e.__styles = {});
  o[t] !== n && (o[t] = n, n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, ""));
}
var tr, to, Yo, da, hu;
const fa = class {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    yr(this, da), yr(this, tr, /* @__PURE__ */ new WeakMap()), yr(this, to), yr(this, Yo), Go(this, Yo, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = st(this, tr).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), st(this, tr).set(t, r), af(this, da, hu).call(this).observe(t, st(this, Yo)), () => {
      var o = st(this, tr).get(t);
      o.delete(n), o.size === 0 && (st(this, tr).delete(t), st(this, to).unobserve(t));
    };
  }
};
tr = /* @__PURE__ */ new WeakMap(), to = /* @__PURE__ */ new WeakMap(), Yo = /* @__PURE__ */ new WeakMap(), da = /* @__PURE__ */ new WeakSet(), hu = function() {
  return st(this, to) ?? Go(this, to, new ResizeObserver(
    /** @param {any} entries */
    (e) => {
      for (var t of e) {
        fa.entries.set(t.target, t);
        for (var n of st(this, tr).get(t.target) || [])
          n(t);
      }
    }
  ));
}, /** @static */
St(fa, "entries", /* @__PURE__ */ new WeakMap());
let _1 = fa;
var E1 = /* @__PURE__ */ new _1({
  box: "border-box"
});
function zs(e, t, n) {
  var r = E1.observe(e, () => n(e[t]));
  Dt(() => (hn(() => n(e[t])), r));
}
function Vs(e, t) {
  return e === t || (e == null ? void 0 : e[Kn]) === t;
}
function Hn(e = {}, t, n, r) {
  return Dt(() => {
    var o, a;
    return Rr(() => {
      o = a, a = [], hn(() => {
        e !== n(...a) && (t(e, ...a), o && Vs(n(...o), e) && t(null, ...o));
      });
    }), () => {
      wo(() => {
        a && Vs(n(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function ze(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Re
  ), n = t.l.u;
  if (!n) return;
  let r = () => U(t.s);
  if (e) {
    let o = 0, a = (
      /** @type {Record<string, any>} */
      {}
    );
    const i = /* @__PURE__ */ Se(() => {
      let s = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== a[u] && (a[u] = l[u], s = !0);
      return s && o++, o;
    });
    r = () => v(i);
  }
  n.b.length && Gf(() => {
    Hs(t, r), ro(n.b);
  }), Er(() => {
    const o = hn(() => n.m.map(_f));
    return () => {
      for (const a of o)
        typeof a == "function" && a();
    };
  }), n.a.length && Er(() => {
    Hs(t, r), ro(n.a);
  });
}
function Hs(e, t) {
  if (e.l.s)
    for (const n of e.l.s) v(n);
  t();
}
function De(e, t) {
  var n, r = (
    /** @type {Record<string, Function[] | Function>} */
    (n = e.$$events) == null ? void 0 : n[t.type]
  ), o = yo(r) ? r.slice() : r == null ? [] : [r];
  for (var a of o)
    a.call(this, t);
}
function bn(e) {
  Re === null && Si(), Ar && Re.l !== null ? M1(Re).m.push(e) : Er(() => {
    const t = hn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Wa(e) {
  Re === null && Si(), bn(() => () => hn(e));
}
function P1(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function Hi() {
  const e = Re;
  return e === null && Si(), (t, n, r) => {
    var o;
    const a = (
      /** @type {Record<string, Function | Function[]>} */
      (o = e.s.$$events) == null ? void 0 : o[
        /** @type {any} */
        t
      ]
    );
    if (a) {
      const i = yo(a) ? a.slice() : [a], s = P1(
        /** @type {string} */
        t,
        n,
        r
      );
      for (const l of i)
        l.call(e.x, s);
      return !s.defaultPrevented;
    }
    return !0;
  };
}
function M1(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function ja(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), ct;
  const r = hn(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const mr = [];
function Yt(e, t) {
  return {
    subscribe: me(e, t).subscribe
  };
}
function me(e, t = ct) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(s) {
    if (Ia(e, s) && (e = s, n)) {
      const l = !mr.length;
      for (const u of r)
        u[1](), mr.push(u, e);
      if (l) {
        for (let u = 0; u < mr.length; u += 2)
          mr[u][0](mr[u + 1]);
        mr.length = 0;
      }
    }
  }
  function a(s) {
    o(s(
      /** @type {T} */
      e
    ));
  }
  function i(s, l = ct) {
    const u = [s, l];
    return r.add(u), r.size === 1 && (n = t(o, a) || ct), s(
      /** @type {T} */
      e
    ), () => {
      r.delete(u), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: o, update: a, subscribe: i };
}
function Xn(e, t, n) {
  const r = !Array.isArray(e), o = r ? [e] : e;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = t.length < 2;
  return Yt(n, (i, s) => {
    let l = !1;
    const u = [];
    let c = 0, d = ct;
    const f = () => {
      if (c)
        return;
      d();
      const w = t(r ? u[0] : u, i, s);
      a ? i(w) : d = typeof w == "function" ? w : ct;
    }, g = o.map(
      (w, x) => ja(
        w,
        ($) => {
          u[x] = $, c &= ~(1 << x), l && f();
        },
        () => {
          c |= 1 << x;
        }
      )
    );
    return l = !0, f(), function() {
      ro(g), d(), l = !1;
    };
  });
}
function q(e) {
  let t;
  return ja(e, (n) => t = n)(), t;
}
let To = !1, ga = Symbol();
function J(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ xo(void 0),
    unsubscribe: ct
  });
  if (r.store !== e && !(ga in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = ct;
    else {
      var o = !0;
      r.unsubscribe = ja(e, (a) => {
        o ? r.source.v = a : G(r.source, a);
      }), o = !1;
    }
  return e && ga in n ? q(e) : v(r.source);
}
function S1(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = ct), e;
}
function oi(e, t) {
  return e.set(t), t;
}
function et() {
  const e = {};
  function t() {
    Ql(() => {
      for (var n in e)
        e[n].unsubscribe();
      no(e, ga, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function N1(e) {
  var t = To;
  try {
    return To = !1, [e(), To];
  } finally {
    To = t;
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
function Ct(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    z1
  );
}
const V1 = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return v(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    return t in e.special || (e.special[t] = y(
      {
        get [t]() {
          return e.props[t];
        }
      },
      /** @type {string} */
      t,
      zl
    )), e.special[t](n), ks(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), ks(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function tt(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: Nt(0) }, V1);
}
const H1 = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Wr(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      Wr(o) && (o = o());
      const a = Sn(o, t);
      if (a && a.set)
        return a.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Wr(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = Sn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === Kn || t === Da) return !1;
    for (let n of e.props)
      if (Wr(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props) {
      Wr(n) && (n = n());
      for (const r in n)
        t.includes(r) || t.push(r);
    }
    return t;
  }
};
function ut(...e) {
  return new Proxy({ props: e }, H1);
}
function y(e, t, n, r) {
  var o, a = (n & ff) !== 0, i = !Ar || (n & gf) !== 0, s = (n & vf) !== 0, l = (n & hf) !== 0, u = !1, c;
  s ? [c, u] = N1(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var d = Kn in e || Da in e, f = s && (((o = Sn(e, t)) == null ? void 0 : o.set) ?? (d && t in e && ((M) => e[t] = M))) || void 0, g = (
    /** @type {V} */
    r
  ), w = !0, x = !1, $ = () => (x = !0, w && (w = !1, l ? g = hn(
    /** @type {() => V} */
    r
  ) : g = /** @type {V} */
  r), g);
  c === void 0 && r !== void 0 && (f && i && Hf(), c = $(), f && f(c));
  var C;
  if (i)
    C = () => {
      var M = (
        /** @type {V} */
        e[t]
      );
      return M === void 0 ? $() : (w = !0, x = !1, M);
    };
  else {
    var p = (a ? Se : ge)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    p.f |= wf, C = () => {
      var M = v(p);
      return M !== void 0 && (g = /** @type {V} */
      void 0), M === void 0 ? g : M;
    };
  }
  if (!(n & zl))
    return C;
  if (f) {
    var b = e.$$legacy;
    return function(M, z) {
      return arguments.length > 0 ? ((!i || !z || b || u) && f(z ? C() : M), M) : C();
    };
  }
  var h = !1, k = /* @__PURE__ */ xo(c), S = /* @__PURE__ */ Se(() => {
    var M = C(), z = v(k);
    return h ? (h = !1, z) : k.v = M;
  });
  return a || (S.equals = Za), function(M, z) {
    if (arguments.length > 0) {
      const V = z ? v(S) : i && s ? Tt(M) : M;
      return S.equals(V) || (h = !0, G(k, V), x && g !== void 0 && (g = V), hn(() => v(S))), M;
    }
    return v(S);
  };
}
function O1(e) {
  return new T1(e);
}
var In, Ut;
class T1 {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    yr(this, In), yr(this, Ut);
    var n, r = /* @__PURE__ */ new Map(), o = (i, s) => {
      var l = /* @__PURE__ */ xo(s);
      return r.set(i, l), l;
    };
    const a = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, s) {
          return v(r.get(s) ?? o(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === Da ? !0 : (v(r.get(s) ?? o(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, l) {
          return G(r.get(s) ?? o(s, l), l), Reflect.set(i, s, l);
        }
      }
    );
    Go(this, Ut, (t.hydrate ? h1 : su)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: a,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((n = t == null ? void 0 : t.props) != null && n.$$host) || t.sync === !1) && m(), Go(this, In, a.$$events);
    for (const i of Object.keys(st(this, Ut)))
      i === "$set" || i === "$destroy" || i === "$on" || no(this, i, {
        get() {
          return st(this, Ut)[i];
        },
        /** @param {any} value */
        set(s) {
          st(this, Ut)[i] = s;
        },
        enumerable: !0
      });
    st(this, Ut).$set = /** @param {Record<string, any>} next */
    (i) => {
      Object.assign(a, i);
    }, st(this, Ut).$destroy = () => {
      p1(st(this, Ut));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    st(this, Ut).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    st(this, In)[t] = st(this, In)[t] || [];
    const r = (...o) => n.call(this, ...o);
    return st(this, In)[t].push(r), () => {
      st(this, In)[t] = st(this, In)[t].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    st(this, Ut).$destroy();
  }
}
In = /* @__PURE__ */ new WeakMap(), Ut = /* @__PURE__ */ new WeakMap();
let pu;
typeof HTMLElement == "function" && (pu = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, t, n) {
    super(), St(this, "$$ctor"), St(this, "$$s"), St(this, "$$c"), St(this, "$$cn", !1), St(this, "$$d", {}), St(this, "$$r", !1), St(this, "$$p_d", {}), St(this, "$$l", {}), St(this, "$$l_u", /* @__PURE__ */ new Map()), St(this, "$$me"), this.$$ctor = e, this.$$s = t, n && this.attachShadow({ mode: "open" });
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
          const a = document.createElement("slot");
          r !== "default" && (a.name = r), D(o, a);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, n = D1(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = Ko(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = O1({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = Uf(() => {
        Rr(() => {
          var r;
          this.$$r = !0;
          for (const o of Qo(this.$$c)) {
            if (!((r = this.$$p_d[o]) != null && r.reflect)) continue;
            this.$$d[o] = this.$$c[o];
            const a = Ko(
              o,
              this.$$d[o],
              this.$$p_d,
              "toAttribute"
            );
            a == null ? this.removeAttribute(this.$$p_d[o].attribute || o) : this.setAttribute(this.$$p_d[o].attribute || o, a);
          }
          this.$$r = !1;
        });
      });
      for (const r in this.$$l)
        for (const o of this.$$l[r]) {
          const a = this.$$c.$on(r, o);
          this.$$l_u.set(o, a);
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Ko(e, n, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [e]: this.$$d[e] }));
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
    return Qo(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function Ko(e, t, n, r) {
  var o;
  const a = (o = n[e]) == null ? void 0 : o.type;
  if (t = a === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e])
    return t;
  if (r === "toAttribute")
    switch (a) {
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
    switch (a) {
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
function D1(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function re(e, t, n, r, o, a) {
  let i = class extends pu {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Qo(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return Qo(t).forEach((s) => {
    no(i.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(l) {
        var u;
        l = Ko(s, l, t), this.$$d[s] = l;
        var c = this.$$c;
        if (c) {
          var d = (u = Sn(c, s)) == null ? void 0 : u.get;
          d ? c[s] = l : c.$set({ [s]: l });
        }
      }
    });
  }), r.forEach((s) => {
    no(i.prototype, s, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[s];
      }
    });
  }), e.element = /** @type {any} */
  i, i;
}
function _t(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = _t(e[n])) !== "" && (t += (t && " ") + r);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
var L1 = { value: () => {
} };
function Oi() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Xo(n);
}
function Xo(e) {
  this._ = e;
}
function A1(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Xo.prototype = Oi.prototype = {
  constructor: Xo,
  on: function(e, t) {
    var n = this._, r = A1(e + "", n), o, a = -1, i = r.length;
    if (arguments.length < 2) {
      for (; ++a < i; ) if ((o = (e = r[a]).type) && (o = I1(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++a < i; )
      if (o = (e = r[a]).type) n[o] = Os(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = Os(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Xo(e);
  },
  call: function(e, t) {
    if ((o = arguments.length - 2) > 0) for (var n = new Array(o), r = 0, o, a; r < o; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (a = this._[e], r = 0, o = a.length; r < o; ++r) a[r].value.apply(t, n);
  },
  apply: function(e, t, n) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var r = this._[e], o = 0, a = r.length; o < a; ++o) r[o].value.apply(t, n);
  }
};
function I1(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Os(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = L1, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var va = "http://www.w3.org/1999/xhtml";
const Ts = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: va,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Ti(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Ts.hasOwnProperty(t) ? { space: Ts[t], local: e } : e;
}
function Z1(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === va && t.documentElement.namespaceURI === va ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function B1(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function mu(e) {
  var t = Ti(e);
  return (t.local ? B1 : Z1)(t);
}
function R1() {
}
function qa(e) {
  return e == null ? R1 : function() {
    return this.querySelector(e);
  };
}
function Y1(e) {
  typeof e != "function" && (e = qa(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], i = a.length, s = r[o] = new Array(i), l, u, c = 0; c < i; ++c)
      (l = a[c]) && (u = e.call(l, l.__data__, c, a)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new Zt(r, this._parents);
}
function K1(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function X1() {
  return [];
}
function yu(e) {
  return e == null ? X1 : function() {
    return this.querySelectorAll(e);
  };
}
function W1(e) {
  return function() {
    return K1(e.apply(this, arguments));
  };
}
function j1(e) {
  typeof e == "function" ? e = W1(e) : e = yu(e);
  for (var t = this._groups, n = t.length, r = [], o = [], a = 0; a < n; ++a)
    for (var i = t[a], s = i.length, l, u = 0; u < s; ++u)
      (l = i[u]) && (r.push(e.call(l, l.__data__, u, i)), o.push(l));
  return new Zt(r, o);
}
function wu(e) {
  return function() {
    return this.matches(e);
  };
}
function xu(e) {
  return function(t) {
    return t.matches(e);
  };
}
var q1 = Array.prototype.find;
function F1(e) {
  return function() {
    return q1.call(this.children, e);
  };
}
function G1() {
  return this.firstElementChild;
}
function U1(e) {
  return this.select(e == null ? G1 : F1(typeof e == "function" ? e : xu(e)));
}
var J1 = Array.prototype.filter;
function Q1() {
  return Array.from(this.children);
}
function eg(e) {
  return function() {
    return J1.call(this.children, e);
  };
}
function tg(e) {
  return this.selectAll(e == null ? Q1 : eg(typeof e == "function" ? e : xu(e)));
}
function ng(e) {
  typeof e != "function" && (e = wu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], i = a.length, s = r[o] = [], l, u = 0; u < i; ++u)
      (l = a[u]) && e.call(l, l.__data__, u, a) && s.push(l);
  return new Zt(r, this._parents);
}
function bu(e) {
  return new Array(e.length);
}
function rg() {
  return new Zt(this._enter || this._groups.map(bu), this._parents);
}
function ii(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
ii.prototype = {
  constructor: ii,
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
function og(e) {
  return function() {
    return e;
  };
}
function ig(e, t, n, r, o, a) {
  for (var i = 0, s, l = t.length, u = a.length; i < u; ++i)
    (s = t[i]) ? (s.__data__ = a[i], r[i] = s) : n[i] = new ii(e, a[i]);
  for (; i < l; ++i)
    (s = t[i]) && (o[i] = s);
}
function ag(e, t, n, r, o, a, i) {
  var s, l, u = /* @__PURE__ */ new Map(), c = t.length, d = a.length, f = new Array(c), g;
  for (s = 0; s < c; ++s)
    (l = t[s]) && (f[s] = g = i.call(l, l.__data__, s, t) + "", u.has(g) ? o[s] = l : u.set(g, l));
  for (s = 0; s < d; ++s)
    g = i.call(e, a[s], s, a) + "", (l = u.get(g)) ? (r[s] = l, l.__data__ = a[s], u.delete(g)) : n[s] = new ii(e, a[s]);
  for (s = 0; s < c; ++s)
    (l = t[s]) && u.get(f[s]) === l && (o[s] = l);
}
function sg(e) {
  return e.__data__;
}
function lg(e, t) {
  if (!arguments.length) return Array.from(this, sg);
  var n = t ? ag : ig, r = this._parents, o = this._groups;
  typeof e != "function" && (e = og(e));
  for (var a = o.length, i = new Array(a), s = new Array(a), l = new Array(a), u = 0; u < a; ++u) {
    var c = r[u], d = o[u], f = d.length, g = ug(e.call(c, c && c.__data__, u, r)), w = g.length, x = s[u] = new Array(w), $ = i[u] = new Array(w), C = l[u] = new Array(f);
    n(c, d, x, $, C, g, t);
    for (var p = 0, b = 0, h, k; p < w; ++p)
      if (h = x[p]) {
        for (p >= b && (b = p + 1); !(k = $[b]) && ++b < w; ) ;
        h._next = k || null;
      }
  }
  return i = new Zt(i, r), i._enter = s, i._exit = l, i;
}
function ug(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function cg() {
  return new Zt(this._exit || this._groups.map(bu), this._parents);
}
function dg(e, t, n) {
  var r = this.enter(), o = this, a = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? a.remove() : n(a), r && o ? r.merge(o).order() : o;
}
function fg(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, a = r.length, i = Math.min(o, a), s = new Array(o), l = 0; l < i; ++l)
    for (var u = n[l], c = r[l], d = u.length, f = s[l] = new Array(d), g, w = 0; w < d; ++w)
      (g = u[w] || c[w]) && (f[w] = g);
  for (; l < o; ++l)
    s[l] = n[l];
  return new Zt(s, this._parents);
}
function gg() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, a = r[o], i; --o >= 0; )
      (i = r[o]) && (a && i.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(i, a), a = i);
  return this;
}
function vg(e) {
  e || (e = hg);
  function t(d, f) {
    return d && f ? e(d.__data__, f.__data__) : !d - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), a = 0; a < r; ++a) {
    for (var i = n[a], s = i.length, l = o[a] = new Array(s), u, c = 0; c < s; ++c)
      (u = i[c]) && (l[c] = u);
    l.sort(t);
  }
  return new Zt(o, this._parents).order();
}
function hg(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function pg() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function mg() {
  return Array.from(this);
}
function yg() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, a = r.length; o < a; ++o) {
      var i = r[o];
      if (i) return i;
    }
  return null;
}
function wg() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function xg() {
  return !this.node();
}
function bg(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], a = 0, i = o.length, s; a < i; ++a)
      (s = o[a]) && e.call(s, s.__data__, a, o);
  return this;
}
function $g(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function kg(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Cg(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function _g(e, t) {
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
function Pg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Mg(e, t) {
  var n = Ti(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? kg : $g : typeof t == "function" ? n.local ? Pg : Eg : n.local ? _g : Cg)(n, t));
}
function $u(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Sg(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Ng(e, t, n) {
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
function Vg(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Sg : typeof t == "function" ? zg : Ng)(e, t, n ?? "")) : Sr(this.node(), e);
}
function Sr(e, t) {
  return e.style.getPropertyValue(t) || $u(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Hg(e) {
  return function() {
    delete this[e];
  };
}
function Og(e, t) {
  return function() {
    this[e] = t;
  };
}
function Tg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Dg(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Hg : typeof t == "function" ? Tg : Og)(e, t)) : this.node()[e];
}
function ku(e) {
  return e.trim().split(/^|\s+/);
}
function Fa(e) {
  return e.classList || new Cu(e);
}
function Cu(e) {
  this._node = e, this._names = ku(e.getAttribute("class") || "");
}
Cu.prototype = {
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
function _u(e, t) {
  for (var n = Fa(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Eu(e, t) {
  for (var n = Fa(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Lg(e) {
  return function() {
    _u(this, e);
  };
}
function Ag(e) {
  return function() {
    Eu(this, e);
  };
}
function Ig(e, t) {
  return function() {
    (t.apply(this, arguments) ? _u : Eu)(this, e);
  };
}
function Zg(e, t) {
  var n = ku(e + "");
  if (arguments.length < 2) {
    for (var r = Fa(this.node()), o = -1, a = n.length; ++o < a; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Ig : t ? Lg : Ag)(n, t));
}
function Bg() {
  this.textContent = "";
}
function Rg(e) {
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
function Kg(e) {
  return arguments.length ? this.each(e == null ? Bg : (typeof e == "function" ? Yg : Rg)(e)) : this.node().textContent;
}
function Xg() {
  this.innerHTML = "";
}
function Wg(e) {
  return function() {
    this.innerHTML = e;
  };
}
function jg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function qg(e) {
  return arguments.length ? this.each(e == null ? Xg : (typeof e == "function" ? jg : Wg)(e)) : this.node().innerHTML;
}
function Fg() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Gg() {
  return this.each(Fg);
}
function Ug() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Jg() {
  return this.each(Ug);
}
function Qg(e) {
  var t = typeof e == "function" ? e : mu(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function ev() {
  return null;
}
function tv(e, t) {
  var n = typeof e == "function" ? e : mu(e), r = t == null ? ev : typeof t == "function" ? t : qa(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function nv() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function rv() {
  return this.each(nv);
}
function ov() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function iv() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function av(e) {
  return this.select(e ? iv : ov);
}
function sv(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function lv(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function uv(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function cv(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, a; n < o; ++n)
        a = t[n], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++r] = a;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function dv(e, t, n) {
  return function() {
    var r = this.__on, o, a = lv(t);
    if (r) {
      for (var i = 0, s = r.length; i < s; ++i)
        if ((o = r[i]).type === e.type && o.name === e.name) {
          this.removeEventListener(o.type, o.listener, o.options), this.addEventListener(o.type, o.listener = a, o.options = n), o.value = t;
          return;
        }
    }
    this.addEventListener(e.type, a, n), o = { type: e.type, name: e.name, value: t, listener: a, options: n }, r ? r.push(o) : this.__on = [o];
  };
}
function fv(e, t, n) {
  var r = uv(e + ""), o, a = r.length, i;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var l = 0, u = s.length, c; l < u; ++l)
        for (o = 0, c = s[l]; o < a; ++o)
          if ((i = r[o]).type === c.type && i.name === c.name)
            return c.value;
    }
    return;
  }
  for (s = t ? dv : cv, o = 0; o < a; ++o) this.each(s(r[o], t, n));
  return this;
}
function Pu(e, t, n) {
  var r = $u(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function gv(e, t) {
  return function() {
    return Pu(this, e, t);
  };
}
function vv(e, t) {
  return function() {
    return Pu(this, e, t.apply(this, arguments));
  };
}
function hv(e, t) {
  return this.each((typeof t == "function" ? vv : gv)(e, t));
}
function* pv() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, a = r.length, i; o < a; ++o)
      (i = r[o]) && (yield i);
}
var Mu = [null];
function Zt(e, t) {
  this._groups = e, this._parents = t;
}
function bo() {
  return new Zt([[document.documentElement]], Mu);
}
function mv() {
  return this;
}
Zt.prototype = bo.prototype = {
  constructor: Zt,
  select: Y1,
  selectAll: j1,
  selectChild: U1,
  selectChildren: tg,
  filter: ng,
  data: lg,
  enter: rg,
  exit: cg,
  join: dg,
  merge: fg,
  selection: mv,
  order: gg,
  sort: vg,
  call: pg,
  nodes: mg,
  node: yg,
  size: wg,
  empty: xg,
  each: bg,
  attr: Mg,
  style: Vg,
  property: Dg,
  classed: Zg,
  text: Kg,
  html: qg,
  raise: Gg,
  lower: Jg,
  append: Qg,
  insert: tv,
  remove: rv,
  clone: av,
  datum: sv,
  on: fv,
  dispatch: hv,
  [Symbol.iterator]: pv
};
function Kt(e) {
  return typeof e == "string" ? new Zt([[document.querySelector(e)]], [document.documentElement]) : new Zt([[e]], Mu);
}
function yv(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function Jt(e, t) {
  if (e = yv(e), t === void 0 && (t = e.currentTarget), t) {
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
const wv = { passive: !1 }, so = { capture: !0, passive: !1 };
function Fi(e) {
  e.stopImmediatePropagation();
}
function br(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Su(e) {
  var t = e.document.documentElement, n = Kt(e).on("dragstart.drag", br, so);
  "onselectstart" in t ? n.on("selectstart.drag", br, so) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Nu(e, t) {
  var n = e.document.documentElement, r = Kt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", br, so), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Do = (e) => () => e;
function ha(e, {
  sourceEvent: t,
  subject: n,
  target: r,
  identifier: o,
  active: a,
  x: i,
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
    active: { value: a, enumerable: !0, configurable: !0 },
    x: { value: i, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: l, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: c }
  });
}
ha.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function xv(e) {
  return !e.ctrlKey && !e.button;
}
function bv() {
  return this.parentNode;
}
function $v(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function kv() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Cv() {
  var e = xv, t = bv, n = $v, r = kv, o = {}, a = Oi("start", "drag", "end"), i = 0, s, l, u, c, d = 0;
  function f(h) {
    h.on("mousedown.drag", g).filter(r).on("touchstart.drag", $).on("touchmove.drag", C, wv).on("touchend.drag touchcancel.drag", p).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(h, k) {
    if (!(c || !e.call(this, h, k))) {
      var S = b(this, t.call(this, h, k), h, k, "mouse");
      S && (Kt(h.view).on("mousemove.drag", w, so).on("mouseup.drag", x, so), Su(h.view), Fi(h), u = !1, s = h.clientX, l = h.clientY, S("start", h));
    }
  }
  function w(h) {
    if (br(h), !u) {
      var k = h.clientX - s, S = h.clientY - l;
      u = k * k + S * S > d;
    }
    o.mouse("drag", h);
  }
  function x(h) {
    Kt(h.view).on("mousemove.drag mouseup.drag", null), Nu(h.view, u), br(h), o.mouse("end", h);
  }
  function $(h, k) {
    if (e.call(this, h, k)) {
      var S = h.changedTouches, M = t.call(this, h, k), z = S.length, V, T;
      for (V = 0; V < z; ++V)
        (T = b(this, M, h, k, S[V].identifier, S[V])) && (Fi(h), T("start", h, S[V]));
    }
  }
  function C(h) {
    var k = h.changedTouches, S = k.length, M, z;
    for (M = 0; M < S; ++M)
      (z = o[k[M].identifier]) && (br(h), z("drag", h, k[M]));
  }
  function p(h) {
    var k = h.changedTouches, S = k.length, M, z;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), M = 0; M < S; ++M)
      (z = o[k[M].identifier]) && (Fi(h), z("end", h, k[M]));
  }
  function b(h, k, S, M, z, V) {
    var T = a.copy(), L = Jt(V || S, k), O, R, P;
    if ((P = n.call(h, new ha("beforestart", {
      sourceEvent: S,
      target: f,
      identifier: z,
      active: i,
      x: L[0],
      y: L[1],
      dx: 0,
      dy: 0,
      dispatch: T
    }), M)) != null)
      return O = P.x - L[0] || 0, R = P.y - L[1] || 0, function N(_, E, H) {
        var A = L, B;
        switch (_) {
          case "start":
            o[z] = N, B = i++;
            break;
          case "end":
            delete o[z], --i;
          // falls through
          case "drag":
            L = Jt(H || E, k), B = i;
            break;
        }
        T.call(
          _,
          h,
          new ha(_, {
            sourceEvent: E,
            subject: P,
            target: f,
            identifier: z,
            active: B,
            x: L[0] + O,
            y: L[1] + R,
            dx: L[0] - A[0],
            dy: L[1] - A[1],
            dispatch: T
          }),
          M
        );
      };
  }
  return f.filter = function(h) {
    return arguments.length ? (e = typeof h == "function" ? h : Do(!!h), f) : e;
  }, f.container = function(h) {
    return arguments.length ? (t = typeof h == "function" ? h : Do(h), f) : t;
  }, f.subject = function(h) {
    return arguments.length ? (n = typeof h == "function" ? h : Do(h), f) : n;
  }, f.touchable = function(h) {
    return arguments.length ? (r = typeof h == "function" ? h : Do(!!h), f) : r;
  }, f.on = function() {
    var h = a.on.apply(a, arguments);
    return h === a ? f : h;
  }, f.clickDistance = function(h) {
    return arguments.length ? (d = (h = +h) * h, f) : Math.sqrt(d);
  }, f;
}
function Ga(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function zu(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function $o() {
}
var lo = 0.7, ai = 1 / lo, $r = "\\s*([+-]?\\d+)\\s*", uo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", fn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", _v = /^#([0-9a-f]{3,8})$/, Ev = new RegExp(`^rgb\\(${$r},${$r},${$r}\\)$`), Pv = new RegExp(`^rgb\\(${fn},${fn},${fn}\\)$`), Mv = new RegExp(`^rgba\\(${$r},${$r},${$r},${uo}\\)$`), Sv = new RegExp(`^rgba\\(${fn},${fn},${fn},${uo}\\)$`), Nv = new RegExp(`^hsl\\(${uo},${fn},${fn}\\)$`), zv = new RegExp(`^hsla\\(${uo},${fn},${fn},${uo}\\)$`), Ds = {
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
Ga($o, co, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ls,
  // Deprecated! Use color.formatHex.
  formatHex: Ls,
  formatHex8: Vv,
  formatHsl: Hv,
  formatRgb: As,
  toString: As
});
function Ls() {
  return this.rgb().formatHex();
}
function Vv() {
  return this.rgb().formatHex8();
}
function Hv() {
  return Vu(this).formatHsl();
}
function As() {
  return this.rgb().formatRgb();
}
function co(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = _v.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Is(t) : n === 3 ? new zt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Lo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Lo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Ev.exec(e)) ? new zt(t[1], t[2], t[3], 1) : (t = Pv.exec(e)) ? new zt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Mv.exec(e)) ? Lo(t[1], t[2], t[3], t[4]) : (t = Sv.exec(e)) ? Lo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Nv.exec(e)) ? Rs(t[1], t[2] / 100, t[3] / 100, 1) : (t = zv.exec(e)) ? Rs(t[1], t[2] / 100, t[3] / 100, t[4]) : Ds.hasOwnProperty(e) ? Is(Ds[e]) : e === "transparent" ? new zt(NaN, NaN, NaN, 0) : null;
}
function Is(e) {
  return new zt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Lo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new zt(e, t, n, r);
}
function Ov(e) {
  return e instanceof $o || (e = co(e)), e ? (e = e.rgb(), new zt(e.r, e.g, e.b, e.opacity)) : new zt();
}
function pa(e, t, n, r) {
  return arguments.length === 1 ? Ov(e) : new zt(e, t, n, r ?? 1);
}
function zt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Ga(zt, pa, zu($o, {
  brighter(e) {
    return e = e == null ? ai : Math.pow(ai, e), new zt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? lo : Math.pow(lo, e), new zt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new zt(or(this.r), or(this.g), or(this.b), si(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Zs,
  // Deprecated! Use color.formatHex.
  formatHex: Zs,
  formatHex8: Tv,
  formatRgb: Bs,
  toString: Bs
}));
function Zs() {
  return `#${nr(this.r)}${nr(this.g)}${nr(this.b)}`;
}
function Tv() {
  return `#${nr(this.r)}${nr(this.g)}${nr(this.b)}${nr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Bs() {
  const e = si(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${or(this.r)}, ${or(this.g)}, ${or(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function si(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function or(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function nr(e) {
  return e = or(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Rs(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new en(e, t, n, r);
}
function Vu(e) {
  if (e instanceof en) return new en(e.h, e.s, e.l, e.opacity);
  if (e instanceof $o || (e = co(e)), !e) return new en();
  if (e instanceof en) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), a = Math.max(t, n, r), i = NaN, s = a - o, l = (a + o) / 2;
  return s ? (t === a ? i = (n - r) / s + (n < r) * 6 : n === a ? i = (r - t) / s + 2 : i = (t - n) / s + 4, s /= l < 0.5 ? a + o : 2 - a - o, i *= 60) : s = l > 0 && l < 1 ? 0 : i, new en(i, s, l, e.opacity);
}
function Dv(e, t, n, r) {
  return arguments.length === 1 ? Vu(e) : new en(e, t, n, r ?? 1);
}
function en(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Ga(en, Dv, zu($o, {
  brighter(e) {
    return e = e == null ? ai : Math.pow(ai, e), new en(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? lo : Math.pow(lo, e), new en(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new zt(
      Gi(e >= 240 ? e - 240 : e + 120, o, r),
      Gi(e, o, r),
      Gi(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new en(Ys(this.h), Ao(this.s), Ao(this.l), si(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = si(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Ys(this.h)}, ${Ao(this.s) * 100}%, ${Ao(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Ys(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Ao(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Gi(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Hu = (e) => () => e;
function Lv(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Av(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function Iv(e) {
  return (e = +e) == 1 ? Ou : function(t, n) {
    return n - t ? Av(t, n, e) : Hu(isNaN(t) ? n : t);
  };
}
function Ou(e, t) {
  var n = t - e;
  return n ? Lv(e, n) : Hu(isNaN(e) ? t : e);
}
const Ks = function e(t) {
  var n = Iv(t);
  function r(o, a) {
    var i = n((o = pa(o)).r, (a = pa(a)).r), s = n(o.g, a.g), l = n(o.b, a.b), u = Ou(o.opacity, a.opacity);
    return function(c) {
      return o.r = i(c), o.g = s(c), o.b = l(c), o.opacity = u(c), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function Bn(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
var ma = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ui = new RegExp(ma.source, "g");
function Zv(e) {
  return function() {
    return e;
  };
}
function Bv(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Rv(e, t) {
  var n = ma.lastIndex = Ui.lastIndex = 0, r, o, a, i = -1, s = [], l = [];
  for (e = e + "", t = t + ""; (r = ma.exec(e)) && (o = Ui.exec(t)); )
    (a = o.index) > n && (a = t.slice(n, a), s[i] ? s[i] += a : s[++i] = a), (r = r[0]) === (o = o[0]) ? s[i] ? s[i] += o : s[++i] = o : (s[++i] = null, l.push({ i, x: Bn(r, o) })), n = Ui.lastIndex;
  return n < t.length && (a = t.slice(n), s[i] ? s[i] += a : s[++i] = a), s.length < 2 ? l[0] ? Bv(l[0].x) : Zv(t) : (t = l.length, function(u) {
    for (var c = 0, d; c < t; ++c) s[(d = l[c]).i] = d.x(u);
    return s.join("");
  });
}
var Xs = 180 / Math.PI, Tu = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Du(e, t, n, r, o, a) {
  var i, s, l;
  return (i = Math.sqrt(e * e + t * t)) && (e /= i, t /= i), (l = e * n + t * r) && (n -= e * l, r -= t * l), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, l /= s), e * r < t * n && (e = -e, t = -t, l = -l, i = -i), {
    translateX: o,
    translateY: a,
    rotate: Math.atan2(t, e) * Xs,
    skewX: Math.atan(l) * Xs,
    scaleX: i,
    scaleY: s
  };
}
var Io;
function Yv(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Tu : Du(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Kv(e) {
  return e == null || (Io || (Io = document.createElementNS("http://www.w3.org/2000/svg", "g")), Io.setAttribute("transform", e), !(e = Io.transform.baseVal.consolidate())) ? Tu : (e = e.matrix, Du(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Lu(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, c, d, f, g, w) {
    if (u !== d || c !== f) {
      var x = g.push("translate(", null, t, null, n);
      w.push({ i: x - 4, x: Bn(u, d) }, { i: x - 2, x: Bn(c, f) });
    } else (d || f) && g.push("translate(" + d + t + f + n);
  }
  function i(u, c, d, f) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), f.push({ i: d.push(o(d) + "rotate(", null, r) - 2, x: Bn(u, c) })) : c && d.push(o(d) + "rotate(" + c + r);
  }
  function s(u, c, d, f) {
    u !== c ? f.push({ i: d.push(o(d) + "skewX(", null, r) - 2, x: Bn(u, c) }) : c && d.push(o(d) + "skewX(" + c + r);
  }
  function l(u, c, d, f, g, w) {
    if (u !== d || c !== f) {
      var x = g.push(o(g) + "scale(", null, ",", null, ")");
      w.push({ i: x - 4, x: Bn(u, d) }, { i: x - 2, x: Bn(c, f) });
    } else (d !== 1 || f !== 1) && g.push(o(g) + "scale(" + d + "," + f + ")");
  }
  return function(u, c) {
    var d = [], f = [];
    return u = e(u), c = e(c), a(u.translateX, u.translateY, c.translateX, c.translateY, d, f), i(u.rotate, c.rotate, d, f), s(u.skewX, c.skewX, d, f), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, d, f), u = c = null, function(g) {
      for (var w = -1, x = f.length, $; ++w < x; ) d[($ = f[w]).i] = $.x(g);
      return d.join("");
    };
  };
}
var Xv = Lu(Yv, "px, ", "px)", "deg)"), Wv = Lu(Kv, ", ", ")", ")"), jv = 1e-12;
function Ws(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function qv(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Fv(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Gv = function e(t, n, r) {
  function o(a, i) {
    var s = a[0], l = a[1], u = a[2], c = i[0], d = i[1], f = i[2], g = c - s, w = d - l, x = g * g + w * w, $, C;
    if (x < jv)
      C = Math.log(f / u) / t, $ = function(M) {
        return [
          s + M * g,
          l + M * w,
          u * Math.exp(t * M * C)
        ];
      };
    else {
      var p = Math.sqrt(x), b = (f * f - u * u + r * x) / (2 * u * n * p), h = (f * f - u * u - r * x) / (2 * f * n * p), k = Math.log(Math.sqrt(b * b + 1) - b), S = Math.log(Math.sqrt(h * h + 1) - h);
      C = (S - k) / t, $ = function(M) {
        var z = M * C, V = Ws(k), T = u / (n * p) * (V * Fv(t * z + k) - qv(k));
        return [
          s + T * g,
          l + T * w,
          u * V / Ws(t * z + k)
        ];
      };
    }
    return $.duration = C * 1e3 * t / Math.SQRT2, $;
  }
  return o.rho = function(a) {
    var i = Math.max(1e-3, +a), s = i * i, l = s * s;
    return e(i, s, l);
  }, o;
}(Math.SQRT2, 2, 4);
var Nr = 0, Ur = 0, qr = 0, Au = 1e3, li, Jr, ui = 0, lr = 0, Di = 0, fo = typeof performance == "object" && performance.now ? performance : Date, Iu = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Ua() {
  return lr || (Iu(Uv), lr = fo.now() + Di);
}
function Uv() {
  lr = 0;
}
function ci() {
  this._call = this._time = this._next = null;
}
ci.prototype = Zu.prototype = {
  constructor: ci,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Ua() : +n) + (t == null ? 0 : +t), !this._next && Jr !== this && (Jr ? Jr._next = this : li = this, Jr = this), this._call = e, this._time = n, ya();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ya());
  }
};
function Zu(e, t, n) {
  var r = new ci();
  return r.restart(e, t, n), r;
}
function Jv() {
  Ua(), ++Nr;
  for (var e = li, t; e; )
    (t = lr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Nr;
}
function js() {
  lr = (ui = fo.now()) + Di, Nr = Ur = 0;
  try {
    Jv();
  } finally {
    Nr = 0, eh(), lr = 0;
  }
}
function Qv() {
  var e = fo.now(), t = e - ui;
  t > Au && (Di -= t, ui = e);
}
function eh() {
  for (var e, t = li, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : li = n);
  Jr = e, ya(r);
}
function ya(e) {
  if (!Nr) {
    Ur && (Ur = clearTimeout(Ur));
    var t = e - lr;
    t > 24 ? (e < 1 / 0 && (Ur = setTimeout(js, e - fo.now() - Di)), qr && (qr = clearInterval(qr))) : (qr || (ui = fo.now(), qr = setInterval(Qv, Au)), Nr = 1, Iu(js));
  }
}
function qs(e, t, n) {
  var r = new ci();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var th = Oi("start", "end", "cancel", "interrupt"), nh = [], Bu = 0, Fs = 1, wa = 2, Wo = 3, Gs = 4, xa = 5, jo = 6;
function Li(e, t, n, r, o, a) {
  var i = e.__transition;
  if (!i) e.__transition = {};
  else if (n in i) return;
  rh(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: th,
    tween: nh,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: Bu
  });
}
function Ja(e, t) {
  var n = sn(e, t);
  if (n.state > Bu) throw new Error("too late; already scheduled");
  return n;
}
function $n(e, t) {
  var n = sn(e, t);
  if (n.state > Wo) throw new Error("too late; already running");
  return n;
}
function sn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function rh(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Zu(a, 0, n.time);
  function a(u) {
    n.state = Fs, n.timer.restart(i, n.delay, n.time), n.delay <= u && i(u - n.delay);
  }
  function i(u) {
    var c, d, f, g;
    if (n.state !== Fs) return l();
    for (c in r)
      if (g = r[c], g.name === n.name) {
        if (g.state === Wo) return qs(i);
        g.state === Gs ? (g.state = jo, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[c]) : +c < t && (g.state = jo, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[c]);
      }
    if (qs(function() {
      n.state === Wo && (n.state = Gs, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = wa, n.on.call("start", e, e.__data__, n.index, n.group), n.state === wa) {
      for (n.state = Wo, o = new Array(f = n.tween.length), c = 0, d = -1; c < f; ++c)
        (g = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++d] = g);
      o.length = d + 1;
    }
  }
  function s(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = xa, 1), d = -1, f = o.length; ++d < f; )
      o[d].call(e, c);
    n.state === xa && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = jo, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function qo(e, t) {
  var n = e.__transition, r, o, a = !0, i;
  if (n) {
    t = t == null ? null : t + "";
    for (i in n) {
      if ((r = n[i]).name !== t) {
        a = !1;
        continue;
      }
      o = r.state > wa && r.state < xa, r.state = jo, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[i];
    }
    a && delete e.__transition;
  }
}
function oh(e) {
  return this.each(function() {
    qo(this, e);
  });
}
function ih(e, t) {
  var n, r;
  return function() {
    var o = $n(this, e), a = o.tween;
    if (a !== n) {
      r = n = a;
      for (var i = 0, s = r.length; i < s; ++i)
        if (r[i].name === t) {
          r = r.slice(), r.splice(i, 1);
          break;
        }
    }
    o.tween = r;
  };
}
function ah(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var a = $n(this, e), i = a.tween;
    if (i !== r) {
      o = (r = i).slice();
      for (var s = { name: t, value: n }, l = 0, u = o.length; l < u; ++l)
        if (o[l].name === t) {
          o[l] = s;
          break;
        }
      l === u && o.push(s);
    }
    a.tween = o;
  };
}
function sh(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = sn(this.node(), n).tween, o = 0, a = r.length, i; o < a; ++o)
      if ((i = r[o]).name === e)
        return i.value;
    return null;
  }
  return this.each((t == null ? ih : ah)(n, e, t));
}
function Qa(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = $n(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return sn(o, r).value[t];
  };
}
function Ru(e, t) {
  var n;
  return (typeof t == "number" ? Bn : t instanceof co ? Ks : (n = co(t)) ? (t = n, Ks) : Rv)(e, t);
}
function lh(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function uh(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function ch(e, t, n) {
  var r, o = n + "", a;
  return function() {
    var i = this.getAttribute(e);
    return i === o ? null : i === r ? a : a = t(r = i, n);
  };
}
function dh(e, t, n) {
  var r, o = n + "", a;
  return function() {
    var i = this.getAttributeNS(e.space, e.local);
    return i === o ? null : i === r ? a : a = t(r = i, n);
  };
}
function fh(e, t, n) {
  var r, o, a;
  return function() {
    var i, s = n(this), l;
    return s == null ? void this.removeAttribute(e) : (i = this.getAttribute(e), l = s + "", i === l ? null : i === r && l === o ? a : (o = l, a = t(r = i, s)));
  };
}
function gh(e, t, n) {
  var r, o, a;
  return function() {
    var i, s = n(this), l;
    return s == null ? void this.removeAttributeNS(e.space, e.local) : (i = this.getAttributeNS(e.space, e.local), l = s + "", i === l ? null : i === r && l === o ? a : (o = l, a = t(r = i, s)));
  };
}
function vh(e, t) {
  var n = Ti(e), r = n === "transform" ? Wv : Ru;
  return this.attrTween(e, typeof t == "function" ? (n.local ? gh : fh)(n, r, Qa(this, "attr." + e, t)) : t == null ? (n.local ? uh : lh)(n) : (n.local ? dh : ch)(n, r, t));
}
function hh(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function ph(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function mh(e, t) {
  var n, r;
  function o() {
    var a = t.apply(this, arguments);
    return a !== r && (n = (r = a) && ph(e, a)), n;
  }
  return o._value = t, o;
}
function yh(e, t) {
  var n, r;
  function o() {
    var a = t.apply(this, arguments);
    return a !== r && (n = (r = a) && hh(e, a)), n;
  }
  return o._value = t, o;
}
function wh(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Ti(e);
  return this.tween(n, (r.local ? mh : yh)(r, t));
}
function xh(e, t) {
  return function() {
    Ja(this, e).delay = +t.apply(this, arguments);
  };
}
function bh(e, t) {
  return t = +t, function() {
    Ja(this, e).delay = t;
  };
}
function $h(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? xh : bh)(t, e)) : sn(this.node(), t).delay;
}
function kh(e, t) {
  return function() {
    $n(this, e).duration = +t.apply(this, arguments);
  };
}
function Ch(e, t) {
  return t = +t, function() {
    $n(this, e).duration = t;
  };
}
function _h(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? kh : Ch)(t, e)) : sn(this.node(), t).duration;
}
function Eh(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    $n(this, e).ease = t;
  };
}
function Ph(e) {
  var t = this._id;
  return arguments.length ? this.each(Eh(t, e)) : sn(this.node(), t).ease;
}
function Mh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    $n(this, e).ease = n;
  };
}
function Sh(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Mh(this._id, e));
}
function Nh(e) {
  typeof e != "function" && (e = wu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], i = a.length, s = r[o] = [], l, u = 0; u < i; ++u)
      (l = a[u]) && e.call(l, l.__data__, u, a) && s.push(l);
  return new On(r, this._parents, this._name, this._id);
}
function zh(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, a = Math.min(r, o), i = new Array(r), s = 0; s < a; ++s)
    for (var l = t[s], u = n[s], c = l.length, d = i[s] = new Array(c), f, g = 0; g < c; ++g)
      (f = l[g] || u[g]) && (d[g] = f);
  for (; s < r; ++s)
    i[s] = t[s];
  return new On(i, this._parents, this._name, this._id);
}
function Vh(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function Hh(e, t, n) {
  var r, o, a = Vh(t) ? Ja : $n;
  return function() {
    var i = a(this, e), s = i.on;
    s !== r && (o = (r = s).copy()).on(t, n), i.on = o;
  };
}
function Oh(e, t) {
  var n = this._id;
  return arguments.length < 2 ? sn(this.node(), n).on.on(e) : this.each(Hh(n, e, t));
}
function Th(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Dh() {
  return this.on("end.remove", Th(this._id));
}
function Lh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = qa(e));
  for (var r = this._groups, o = r.length, a = new Array(o), i = 0; i < o; ++i)
    for (var s = r[i], l = s.length, u = a[i] = new Array(l), c, d, f = 0; f < l; ++f)
      (c = s[f]) && (d = e.call(c, c.__data__, f, s)) && ("__data__" in c && (d.__data__ = c.__data__), u[f] = d, Li(u[f], t, n, f, u, sn(c, n)));
  return new On(a, this._parents, t, n);
}
function Ah(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = yu(e));
  for (var r = this._groups, o = r.length, a = [], i = [], s = 0; s < o; ++s)
    for (var l = r[s], u = l.length, c, d = 0; d < u; ++d)
      if (c = l[d]) {
        for (var f = e.call(c, c.__data__, d, l), g, w = sn(c, n), x = 0, $ = f.length; x < $; ++x)
          (g = f[x]) && Li(g, t, n, x, f, w);
        a.push(f), i.push(c);
      }
  return new On(a, i, t, n);
}
var Ih = bo.prototype.constructor;
function Zh() {
  return new Ih(this._groups, this._parents);
}
function Bh(e, t) {
  var n, r, o;
  return function() {
    var a = Sr(this, e), i = (this.style.removeProperty(e), Sr(this, e));
    return a === i ? null : a === n && i === r ? o : o = t(n = a, r = i);
  };
}
function Yu(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Rh(e, t, n) {
  var r, o = n + "", a;
  return function() {
    var i = Sr(this, e);
    return i === o ? null : i === r ? a : a = t(r = i, n);
  };
}
function Yh(e, t, n) {
  var r, o, a;
  return function() {
    var i = Sr(this, e), s = n(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(e), Sr(this, e))), i === l ? null : i === r && l === o ? a : (o = l, a = t(r = i, s));
  };
}
function Kh(e, t) {
  var n, r, o, a = "style." + t, i = "end." + a, s;
  return function() {
    var l = $n(this, e), u = l.on, c = l.value[a] == null ? s || (s = Yu(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(i, o = c), l.on = r;
  };
}
function Xh(e, t, n) {
  var r = (e += "") == "transform" ? Xv : Ru;
  return t == null ? this.styleTween(e, Bh(e, r)).on("end.style." + e, Yu(e)) : typeof t == "function" ? this.styleTween(e, Yh(e, r, Qa(this, "style." + e, t))).each(Kh(this._id, e)) : this.styleTween(e, Rh(e, r, t), n).on("end.style." + e, null);
}
function Wh(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function jh(e, t, n) {
  var r, o;
  function a() {
    var i = t.apply(this, arguments);
    return i !== o && (r = (o = i) && Wh(e, i, n)), r;
  }
  return a._value = t, a;
}
function qh(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, jh(e, t, n ?? ""));
}
function Fh(e) {
  return function() {
    this.textContent = e;
  };
}
function Gh(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function Uh(e) {
  return this.tween("text", typeof e == "function" ? Gh(Qa(this, "text", e)) : Fh(e == null ? "" : e + ""));
}
function Jh(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function Qh(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && Jh(o)), t;
  }
  return r._value = e, r;
}
function ep(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, Qh(e));
}
function tp() {
  for (var e = this._name, t = this._id, n = Ku(), r = this._groups, o = r.length, a = 0; a < o; ++a)
    for (var i = r[a], s = i.length, l, u = 0; u < s; ++u)
      if (l = i[u]) {
        var c = sn(l, t);
        Li(l, e, n, u, i, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new On(r, this._parents, e, n);
}
function np() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(a, i) {
    var s = { value: i }, l = { value: function() {
      --o === 0 && a();
    } };
    n.each(function() {
      var u = $n(this, r), c = u.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(l)), u.on = t;
    }), o === 0 && a();
  });
}
var rp = 0;
function On(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Ku() {
  return ++rp;
}
var Cn = bo.prototype;
On.prototype = {
  constructor: On,
  select: Lh,
  selectAll: Ah,
  selectChild: Cn.selectChild,
  selectChildren: Cn.selectChildren,
  filter: Nh,
  merge: zh,
  selection: Zh,
  transition: tp,
  call: Cn.call,
  nodes: Cn.nodes,
  node: Cn.node,
  size: Cn.size,
  empty: Cn.empty,
  each: Cn.each,
  on: Oh,
  attr: vh,
  attrTween: wh,
  style: Xh,
  styleTween: qh,
  text: Uh,
  textTween: ep,
  remove: Dh,
  tween: sh,
  delay: $h,
  duration: _h,
  ease: Ph,
  easeVarying: Sh,
  end: np,
  [Symbol.iterator]: Cn[Symbol.iterator]
};
function op(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var ip = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: op
};
function ap(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function sp(e) {
  var t, n;
  e instanceof On ? (t = e._id, e = e._name) : (t = Ku(), (n = ip).time = Ua(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, a = 0; a < o; ++a)
    for (var i = r[a], s = i.length, l, u = 0; u < s; ++u)
      (l = i[u]) && Li(l, e, t, u, i, n || ap(l, t));
  return new On(r, this._parents, e, t);
}
bo.prototype.interrupt = oh;
bo.prototype.transition = sp;
const Zo = (e) => () => e;
function lp(e, {
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
function En(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
En.prototype = {
  constructor: En,
  scale: function(e) {
    return e === 1 ? this : new En(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new En(this.k, this.x + this.k * e, this.y + this.k * t);
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
var Ai = new En(1, 0, 0);
Xu.prototype = En.prototype;
function Xu(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Ai;
  return e.__zoom;
}
function Ji(e) {
  e.stopImmediatePropagation();
}
function Fr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function up(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function cp() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Us() {
  return this.__zoom || Ai;
}
function dp(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function fp() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function gp(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], a = e.invertY(t[0][1]) - n[0][1], i = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    i > a ? (a + i) / 2 : Math.min(0, a) || Math.max(0, i)
  );
}
function Wu() {
  var e = up, t = cp, n = gp, r = dp, o = fp, a = [0, 1 / 0], i = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, l = Gv, u = Oi("start", "zoom", "end"), c, d, f, g = 500, w = 150, x = 0, $ = 10;
  function C(P) {
    P.property("__zoom", Us).on("wheel.zoom", z, { passive: !1 }).on("mousedown.zoom", V).on("dblclick.zoom", T).filter(o).on("touchstart.zoom", L).on("touchmove.zoom", O).on("touchend.zoom touchcancel.zoom", R).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  C.transform = function(P, N, _, E) {
    var H = P.selection ? P.selection() : P;
    H.property("__zoom", Us), P !== H ? k(P, N, _, E) : H.interrupt().each(function() {
      S(this, arguments).event(E).start().zoom(null, typeof N == "function" ? N.apply(this, arguments) : N).end();
    });
  }, C.scaleBy = function(P, N, _, E) {
    C.scaleTo(P, function() {
      var H = this.__zoom.k, A = typeof N == "function" ? N.apply(this, arguments) : N;
      return H * A;
    }, _, E);
  }, C.scaleTo = function(P, N, _, E) {
    C.transform(P, function() {
      var H = t.apply(this, arguments), A = this.__zoom, B = _ == null ? h(H) : typeof _ == "function" ? _.apply(this, arguments) : _, j = A.invert(B), F = typeof N == "function" ? N.apply(this, arguments) : N;
      return n(b(p(A, F), B, j), H, i);
    }, _, E);
  }, C.translateBy = function(P, N, _, E) {
    C.transform(P, function() {
      return n(this.__zoom.translate(
        typeof N == "function" ? N.apply(this, arguments) : N,
        typeof _ == "function" ? _.apply(this, arguments) : _
      ), t.apply(this, arguments), i);
    }, null, E);
  }, C.translateTo = function(P, N, _, E, H) {
    C.transform(P, function() {
      var A = t.apply(this, arguments), B = this.__zoom, j = E == null ? h(A) : typeof E == "function" ? E.apply(this, arguments) : E;
      return n(Ai.translate(j[0], j[1]).scale(B.k).translate(
        typeof N == "function" ? -N.apply(this, arguments) : -N,
        typeof _ == "function" ? -_.apply(this, arguments) : -_
      ), A, i);
    }, E, H);
  };
  function p(P, N) {
    return N = Math.max(a[0], Math.min(a[1], N)), N === P.k ? P : new En(N, P.x, P.y);
  }
  function b(P, N, _) {
    var E = N[0] - _[0] * P.k, H = N[1] - _[1] * P.k;
    return E === P.x && H === P.y ? P : new En(P.k, E, H);
  }
  function h(P) {
    return [(+P[0][0] + +P[1][0]) / 2, (+P[0][1] + +P[1][1]) / 2];
  }
  function k(P, N, _, E) {
    P.on("start.zoom", function() {
      S(this, arguments).event(E).start();
    }).on("interrupt.zoom end.zoom", function() {
      S(this, arguments).event(E).end();
    }).tween("zoom", function() {
      var H = this, A = arguments, B = S(H, A).event(E), j = t.apply(H, A), F = _ == null ? h(j) : typeof _ == "function" ? _.apply(H, A) : _, ie = Math.max(j[1][0] - j[0][0], j[1][1] - j[0][1]), Q = H.__zoom, Y = typeof N == "function" ? N.apply(H, A) : N, ce = l(Q.invert(F).concat(ie / Q.k), Y.invert(F).concat(ie / Y.k));
      return function(ke) {
        if (ke === 1) ke = Y;
        else {
          var $e = ce(ke), ve = ie / $e[2];
          ke = new En(ve, F[0] - $e[0] * ve, F[1] - $e[1] * ve);
        }
        B.zoom(null, ke);
      };
    });
  }
  function S(P, N, _) {
    return !_ && P.__zooming || new M(P, N);
  }
  function M(P, N) {
    this.that = P, this.args = N, this.active = 0, this.sourceEvent = null, this.extent = t.apply(P, N), this.taps = 0;
  }
  M.prototype = {
    event: function(P) {
      return P && (this.sourceEvent = P), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(P, N) {
      return this.mouse && P !== "mouse" && (this.mouse[1] = N.invert(this.mouse[0])), this.touch0 && P !== "touch" && (this.touch0[1] = N.invert(this.touch0[0])), this.touch1 && P !== "touch" && (this.touch1[1] = N.invert(this.touch1[0])), this.that.__zoom = N, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(P) {
      var N = Kt(this.that).datum();
      u.call(
        P,
        this.that,
        new lp(P, {
          sourceEvent: this.sourceEvent,
          target: C,
          transform: this.that.__zoom,
          dispatch: u
        }),
        N
      );
    }
  };
  function z(P, ...N) {
    if (!e.apply(this, arguments)) return;
    var _ = S(this, N).event(P), E = this.__zoom, H = Math.max(a[0], Math.min(a[1], E.k * Math.pow(2, r.apply(this, arguments)))), A = Jt(P);
    if (_.wheel)
      (_.mouse[0][0] !== A[0] || _.mouse[0][1] !== A[1]) && (_.mouse[1] = E.invert(_.mouse[0] = A)), clearTimeout(_.wheel);
    else {
      if (E.k === H) return;
      _.mouse = [A, E.invert(A)], qo(this), _.start();
    }
    Fr(P), _.wheel = setTimeout(B, w), _.zoom("mouse", n(b(p(E, H), _.mouse[0], _.mouse[1]), _.extent, i));
    function B() {
      _.wheel = null, _.end();
    }
  }
  function V(P, ...N) {
    if (f || !e.apply(this, arguments)) return;
    var _ = P.currentTarget, E = S(this, N, !0).event(P), H = Kt(P.view).on("mousemove.zoom", F, !0).on("mouseup.zoom", ie, !0), A = Jt(P, _), B = P.clientX, j = P.clientY;
    Su(P.view), Ji(P), E.mouse = [A, this.__zoom.invert(A)], qo(this), E.start();
    function F(Q) {
      if (Fr(Q), !E.moved) {
        var Y = Q.clientX - B, ce = Q.clientY - j;
        E.moved = Y * Y + ce * ce > x;
      }
      E.event(Q).zoom("mouse", n(b(E.that.__zoom, E.mouse[0] = Jt(Q, _), E.mouse[1]), E.extent, i));
    }
    function ie(Q) {
      H.on("mousemove.zoom mouseup.zoom", null), Nu(Q.view, E.moved), Fr(Q), E.event(Q).end();
    }
  }
  function T(P, ...N) {
    if (e.apply(this, arguments)) {
      var _ = this.__zoom, E = Jt(P.changedTouches ? P.changedTouches[0] : P, this), H = _.invert(E), A = _.k * (P.shiftKey ? 0.5 : 2), B = n(b(p(_, A), E, H), t.apply(this, N), i);
      Fr(P), s > 0 ? Kt(this).transition().duration(s).call(k, B, E, P) : Kt(this).call(C.transform, B, E, P);
    }
  }
  function L(P, ...N) {
    if (e.apply(this, arguments)) {
      var _ = P.touches, E = _.length, H = S(this, N, P.changedTouches.length === E).event(P), A, B, j, F;
      for (Ji(P), B = 0; B < E; ++B)
        j = _[B], F = Jt(j, this), F = [F, this.__zoom.invert(F), j.identifier], H.touch0 ? !H.touch1 && H.touch0[2] !== F[2] && (H.touch1 = F, H.taps = 0) : (H.touch0 = F, A = !0, H.taps = 1 + !!c);
      c && (c = clearTimeout(c)), A && (H.taps < 2 && (d = F[0], c = setTimeout(function() {
        c = null;
      }, g)), qo(this), H.start());
    }
  }
  function O(P, ...N) {
    if (this.__zooming) {
      var _ = S(this, N).event(P), E = P.changedTouches, H = E.length, A, B, j, F;
      for (Fr(P), A = 0; A < H; ++A)
        B = E[A], j = Jt(B, this), _.touch0 && _.touch0[2] === B.identifier ? _.touch0[0] = j : _.touch1 && _.touch1[2] === B.identifier && (_.touch1[0] = j);
      if (B = _.that.__zoom, _.touch1) {
        var ie = _.touch0[0], Q = _.touch0[1], Y = _.touch1[0], ce = _.touch1[1], ke = (ke = Y[0] - ie[0]) * ke + (ke = Y[1] - ie[1]) * ke, $e = ($e = ce[0] - Q[0]) * $e + ($e = ce[1] - Q[1]) * $e;
        B = p(B, Math.sqrt(ke / $e)), j = [(ie[0] + Y[0]) / 2, (ie[1] + Y[1]) / 2], F = [(Q[0] + ce[0]) / 2, (Q[1] + ce[1]) / 2];
      } else if (_.touch0) j = _.touch0[0], F = _.touch0[1];
      else return;
      _.zoom("touch", n(b(B, j, F), _.extent, i));
    }
  }
  function R(P, ...N) {
    if (this.__zooming) {
      var _ = S(this, N).event(P), E = P.changedTouches, H = E.length, A, B;
      for (Ji(P), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, g), A = 0; A < H; ++A)
        B = E[A], _.touch0 && _.touch0[2] === B.identifier ? delete _.touch0 : _.touch1 && _.touch1[2] === B.identifier && delete _.touch1;
      if (_.touch1 && !_.touch0 && (_.touch0 = _.touch1, delete _.touch1), _.touch0) _.touch0[1] = this.__zoom.invert(_.touch0[0]);
      else if (_.end(), _.taps === 2 && (B = Jt(B, this), Math.hypot(d[0] - B[0], d[1] - B[1]) < $)) {
        var j = Kt(this).on("dblclick.zoom");
        j && j.apply(this, arguments);
      }
    }
  }
  return C.wheelDelta = function(P) {
    return arguments.length ? (r = typeof P == "function" ? P : Zo(+P), C) : r;
  }, C.filter = function(P) {
    return arguments.length ? (e = typeof P == "function" ? P : Zo(!!P), C) : e;
  }, C.touchable = function(P) {
    return arguments.length ? (o = typeof P == "function" ? P : Zo(!!P), C) : o;
  }, C.extent = function(P) {
    return arguments.length ? (t = typeof P == "function" ? P : Zo([[+P[0][0], +P[0][1]], [+P[1][0], +P[1][1]]]), C) : t;
  }, C.scaleExtent = function(P) {
    return arguments.length ? (a[0] = +P[0], a[1] = +P[1], C) : [a[0], a[1]];
  }, C.translateExtent = function(P) {
    return arguments.length ? (i[0][0] = +P[0][0], i[1][0] = +P[1][0], i[0][1] = +P[0][1], i[1][1] = +P[1][1], C) : [[i[0][0], i[0][1]], [i[1][0], i[1][1]]];
  }, C.constrain = function(P) {
    return arguments.length ? (n = P, C) : n;
  }, C.duration = function(P) {
    return arguments.length ? (s = +P, C) : s;
  }, C.interpolate = function(P) {
    return arguments.length ? (l = P, C) : l;
  }, C.on = function() {
    var P = u.on.apply(u, arguments);
    return P === u ? C : P;
  }, C.clickDistance = function(P) {
    return arguments.length ? (x = (P = +P) * P, C) : Math.sqrt(x);
  }, C.tapDistance = function(P) {
    return arguments.length ? ($ = +P, C) : $;
  }, C;
}
const zr = {
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
}, di = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
];
var ur;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(ur || (ur = {}));
var Wn;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(Wn || (Wn = {}));
var fi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(fi || (fi = {}));
const ba = {
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
var go;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(go || (go = {}));
var Ce;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(Ce || (Ce = {}));
const Js = {
  [Ce.Left]: Ce.Right,
  [Ce.Right]: Ce.Left,
  [Ce.Top]: Ce.Bottom,
  [Ce.Bottom]: Ce.Top
};
function vp(e, t) {
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
function Qs(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, a) => {
    t != null && t.has(a) || r.push(o);
  }), r.length && n(r);
}
function hp(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const pp = (e) => "id" in e && "source" in e && "target" in e, mp = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), es = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), ko = (e, t = [0, 0]) => {
  const { width: n, height: r } = Jn(e), o = e.origin ?? t, a = n * o[0], i = r * o[1];
  return {
    x: e.position.x - a,
    y: e.position.y - i
  };
}, yp = (e, t = { nodeOrigin: [0, 0], nodeLookup: void 0 }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const a = typeof o == "string";
    let i = !t.nodeLookup && !a ? o : void 0;
    t.nodeLookup && (i = a ? t.nodeLookup.get(o) : es(o) ? o : t.nodeLookup.get(o.id));
    const s = i ? gi(i, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Ii(r, s);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Zi(n);
}, Co = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = gi(r);
      n = Ii(n, o);
    }
  }), Zi(n);
}, ju = (e, t, [n, r, o] = [0, 0, 1], a = !1, i = !1) => {
  const s = {
    ..._o(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: d = !0, hidden: f = !1 } = u;
    if (i && !d || f)
      continue;
    const g = c.width ?? u.width ?? u.initialWidth ?? null, w = c.height ?? u.height ?? u.initialHeight ?? null, x = vo(s, Hr(u)), $ = (g ?? 0) * (w ?? 0), C = a && x > 0;
    (!u.internals.handleBounds || C || x >= $ || u.dragging) && l.push(u);
  }
  return l;
}, $a = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function el(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t != null && t.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function tl({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: a }, i) {
  if (e.size === 0)
    return Promise.resolve(!1);
  const s = Co(e), l = ns(s, t, n, (i == null ? void 0 : i.minZoom) ?? o, (i == null ? void 0 : i.maxZoom) ?? a, (i == null ? void 0 : i.padding) ?? 0.1);
  return await r.setViewport(l, { duration: i == null ? void 0 : i.duration }), Promise.resolve(!0);
}
function wp({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: a }) {
  const i = n.get(e), s = i.parentId ? n.get(i.parentId) : void 0, { x: l, y: u } = s ? s.internals.positionAbsolute : { x: 0, y: 0 }, c = i.origin ?? r;
  let d = o;
  if (i.extent === "parent" && !i.expandParent)
    if (!s)
      a == null || a("005", zr.error005());
    else {
      const g = s.measured.width, w = s.measured.height;
      g && w && (d = [
        [l, u],
        [l + g, u + w]
      ]);
    }
  else s && Or(i.extent) && (d = [
    [i.extent[0][0] + l, i.extent[0][1] + u],
    [i.extent[1][0] + l, i.extent[1][1] + u]
  ]);
  const f = Or(d) ? cr(t, d, i.measured) : t;
  return (i.measured.width === void 0 || i.measured.height === void 0) && (a == null || a("015", zr.error015())), {
    position: {
      x: f.x - l + (i.measured.width ?? 0) * c[0],
      y: f.y - u + (i.measured.height ?? 0) * c[1]
    },
    positionAbsolute: f
  };
}
async function qu({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const a = new Set(e.map((d) => d.id)), i = [];
  for (const d of n) {
    if (d.deletable === !1)
      continue;
    const f = a.has(d.id), g = !f && d.parentId && i.find((w) => w.id === d.parentId);
    (f || g) && i.push(d);
  }
  const s = new Set(t.map((d) => d.id)), l = r.filter((d) => d.deletable !== !1), u = $a(i, l);
  for (const d of l)
    s.has(d.id) && !u.find((f) => f.id === d.id) && u.push(d);
  if (!o)
    return {
      edges: u,
      nodes: i
    };
  const c = await o({
    nodes: i,
    edges: u
  });
  return typeof c == "boolean" ? c ? { edges: u, nodes: i } : { edges: [], nodes: [] } : c;
}
const Vr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), cr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Vr(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: Vr(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function Fu(e, t, n) {
  const { width: r, height: o } = Jn(n), { x: a, y: i } = n.internals.positionAbsolute;
  return cr(e, [
    [a, i],
    [a + r, i + o]
  ], t);
}
const nl = (e, t, n) => e < t ? Vr(Math.abs(e - t), 1, t) / t : e > n ? -Vr(Math.abs(e - n), 1, t) / t : 0, Gu = (e, t, n = 15, r = 40) => {
  const o = nl(e.x, r, t.width - r) * n, a = nl(e.y, r, t.height - r) * n;
  return [o, a];
}, Ii = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), ka = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Zi = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Hr = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: a } = es(e) ? e.internals.positionAbsolute : ko(e, t);
  return {
    x: o,
    y: a,
    width: ((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, gi = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: a } = es(e) ? e.internals.positionAbsolute : ko(e, t);
  return {
    x: o,
    y: a,
    x2: o + (((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: a + (((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, Uu = (e, t) => Zi(Ii(ka(e), ka(t))), vo = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, rl = (e) => Pn(e.width) && Pn(e.height) && Pn(e.x) && Pn(e.y), Pn = (e) => !isNaN(e) && isFinite(e), xp = (e, t) => {
}, ts = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), _o = ({ x: e, y: t }, [n, r, o], a = !1, i = [1, 1]) => {
  const s = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return a ? ts(s, i) : s;
}, Ju = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
}), ns = (e, t, n, r, o, a) => {
  const i = t / (e.width * (1 + a)), s = n / (e.height * (1 + a)), l = Math.min(i, s), u = Vr(l, r, o), c = e.x + e.width / 2, d = e.y + e.height / 2, f = t / 2 - c * u, g = n / 2 - d * u;
  return { x: f, y: g, zoom: u };
}, vi = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function Or(e) {
  return e !== void 0 && e !== "parent";
}
function Jn(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function Qu(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function bp(e, t = { width: 0, height: 0 }, n, r, o) {
  const a = { ...e }, i = r.get(n);
  if (i) {
    const s = i.origin || o;
    a.x += i.internals.positionAbsolute.x - (t.width ?? 0) * s[0], a.y += i.internals.positionAbsolute.y - (t.height ?? 0) * s[1];
  }
  return a;
}
function Qi(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: a, y: i } = Nn(e), s = _o({ x: a - ((o == null ? void 0 : o.left) ?? 0), y: i - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? ts(s, t) : s;
  return {
    xSnapped: l,
    ySnapped: u,
    ...s
  };
}
const rs = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), $p = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, kp = ["INPUT", "SELECT", "TEXTAREA"];
function Cp(e) {
  var t, n;
  const r = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target;
  return (r == null ? void 0 : r.nodeType) !== 1 ? !1 : kp.includes(r.nodeName) || r.hasAttribute("contenteditable") || !!r.closest(".nokey");
}
const ec = (e) => "clientX" in e, Nn = (e, t) => {
  var n, r;
  const o = ec(e), a = o ? e.clientX : (n = e.touches) == null ? void 0 : n[0].clientX, i = o ? e.clientY : (r = e.touches) == null ? void 0 : r[0].clientY;
  return {
    x: a - ((t == null ? void 0 : t.left) ?? 0),
    y: i - ((t == null ? void 0 : t.top) ?? 0)
  };
}, ol = (e, t, n, r, o) => {
  const a = t.querySelectorAll(`.${e}`);
  return !a || !a.length ? null : Array.from(a).map((i) => {
    const s = i.getBoundingClientRect();
    return {
      id: i.getAttribute("data-handleid"),
      type: e,
      nodeId: o,
      position: i.getAttribute("data-handlepos"),
      x: (s.left - n.left) / r,
      y: (s.top - n.top) / r,
      ...rs(i)
    };
  });
};
function _p({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: a, targetControlX: i, targetControlY: s }) {
  const l = e * 0.125 + o * 0.375 + i * 0.375 + n * 0.125, u = t * 0.125 + a * 0.375 + s * 0.375 + r * 0.125, c = Math.abs(l - e), d = Math.abs(u - t);
  return [l, u, c, d];
}
function Bo(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function il({ pos: e, x1: t, y1: n, x2: r, y2: o, c: a }) {
  switch (e) {
    case Ce.Left:
      return [t - Bo(t - r, a), n];
    case Ce.Right:
      return [t + Bo(r - t, a), n];
    case Ce.Top:
      return [t, n - Bo(n - o, a)];
    case Ce.Bottom:
      return [t, n + Bo(o - n, a)];
  }
}
function tc({ sourceX: e, sourceY: t, sourcePosition: n = Ce.Bottom, targetX: r, targetY: o, targetPosition: a = Ce.Top, curvature: i = 0.25 }) {
  const [s, l] = il({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: i
  }), [u, c] = il({
    pos: a,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: i
  }), [d, f, g, w] = _p({
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
    g,
    w
  ];
}
function nc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, a = n < e ? n + o : n - o, i = Math.abs(r - t) / 2, s = r < t ? r + i : r - i;
  return [a, s, o, i];
}
function Ep({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const a = n || t.selected || e.selected, i = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (a ? i : 0);
}
function Pp({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const a = Ii(gi(e), gi(t));
  a.x === a.x2 && (a.x2 += 1), a.y === a.y2 && (a.y2 += 1);
  const i = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return vo(i, Zi(a)) > 0;
}
const Mp = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, Sp = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), Np = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return pp(e) ? n = { ...e } : n = {
    ...e,
    id: Mp(e)
  }, Sp(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Ca({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, a, i, s] = nc({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, a, i, s];
}
const al = {
  [Ce.Left]: { x: -1, y: 0 },
  [Ce.Right]: { x: 1, y: 0 },
  [Ce.Top]: { x: 0, y: -1 },
  [Ce.Bottom]: { x: 0, y: 1 }
}, zp = ({ source: e, sourcePosition: t = Ce.Bottom, target: n }) => t === Ce.Left || t === Ce.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, sl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function Vp({ source: e, sourcePosition: t = Ce.Bottom, target: n, targetPosition: r = Ce.Top, center: o, offset: a }) {
  const i = al[t], s = al[r], l = { x: e.x + i.x * a, y: e.y + i.y * a }, u = { x: n.x + s.x * a, y: n.y + s.y * a }, c = zp({
    source: l,
    sourcePosition: t,
    target: u
  }), d = c.x !== 0 ? "x" : "y", f = c[d];
  let g = [], w, x;
  const $ = { x: 0, y: 0 }, C = { x: 0, y: 0 }, [p, b, h, k] = nc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (i[d] * s[d] === -1) {
    w = o.x ?? p, x = o.y ?? b;
    const S = [
      { x: w, y: l.y },
      { x: w, y: u.y }
    ], M = [
      { x: l.x, y: x },
      { x: u.x, y: x }
    ];
    i[d] === f ? g = d === "x" ? S : M : g = d === "x" ? M : S;
  } else {
    const S = [{ x: l.x, y: u.y }], M = [{ x: u.x, y: l.y }];
    if (d === "x" ? g = i.x === f ? M : S : g = i.y === f ? S : M, t === r) {
      const O = Math.abs(e[d] - n[d]);
      if (O <= a) {
        const R = Math.min(a - 1, a - O);
        i[d] === f ? $[d] = (l[d] > e[d] ? -1 : 1) * R : C[d] = (u[d] > n[d] ? -1 : 1) * R;
      }
    }
    if (t !== r) {
      const O = d === "x" ? "y" : "x", R = i[d] === s[O], P = l[O] > u[O], N = l[O] < u[O];
      (i[d] === 1 && (!R && P || R && N) || i[d] !== 1 && (!R && N || R && P)) && (g = d === "x" ? S : M);
    }
    const z = { x: l.x + $.x, y: l.y + $.y }, V = { x: u.x + C.x, y: u.y + C.y }, T = Math.max(Math.abs(z.x - g[0].x), Math.abs(V.x - g[0].x)), L = Math.max(Math.abs(z.y - g[0].y), Math.abs(V.y - g[0].y));
    T >= L ? (w = (z.x + V.x) / 2, x = g[0].y) : (w = g[0].x, x = (z.y + V.y) / 2);
  }
  return [[
    e,
    { x: l.x + $.x, y: l.y + $.y },
    ...g,
    { x: u.x + C.x, y: u.y + C.y },
    n
  ], w, x, h, k];
}
function Hp(e, t, n, r) {
  const o = Math.min(sl(e, t) / 2, sl(t, n) / 2, r), { x: a, y: i } = t;
  if (e.x === a && a === n.x || e.y === i && i === n.y)
    return `L${a} ${i}`;
  if (e.y === i) {
    const u = e.x < n.x ? -1 : 1, c = e.y < n.y ? 1 : -1;
    return `L ${a + o * u},${i}Q ${a},${i} ${a},${i + o * c}`;
  }
  const s = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${a},${i + o * l}Q ${a},${i} ${a + o * s},${i}`;
}
function hi({ sourceX: e, sourceY: t, sourcePosition: n = Ce.Bottom, targetX: r, targetY: o, targetPosition: a = Ce.Top, borderRadius: i = 5, centerX: s, centerY: l, offset: u = 20 }) {
  const [c, d, f, g, w] = Vp({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: a,
    center: { x: s, y: l },
    offset: u
  });
  return [c.reduce((x, $, C) => {
    let p = "";
    return C > 0 && C < c.length - 1 ? p = Hp(c[C - 1], $, c[C + 1], i) : p = `${C === 0 ? "M" : "L"}${$.x} ${$.y}`, x += p, x;
  }, ""), d, f, g, w];
}
function ll(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function Op(e) {
  var t;
  const { sourceNode: n, targetNode: r } = e;
  if (!ll(n) || !ll(r))
    return null;
  const o = n.internals.handleBounds || ul(n.handles), a = r.internals.handleBounds || ul(r.handles), i = cl((o == null ? void 0 : o.source) ?? [], e.sourceHandle), s = cl(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === ur.Strict ? (a == null ? void 0 : a.target) ?? [] : ((a == null ? void 0 : a.target) ?? []).concat((a == null ? void 0 : a.source) ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return (t = e.onError) == null || t.call(e, "008", zr.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const l = (i == null ? void 0 : i.position) || Ce.Bottom, u = (s == null ? void 0 : s.position) || Ce.Top, c = ho(n, i, l), d = ho(r, s, u);
  return {
    sourceX: c.x,
    sourceY: c.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: l,
    targetPosition: u
  };
}
function ul(e) {
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
function ho(e, t, n = Ce.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, a = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: i, height: s } = t ?? Jn(e);
  if (r)
    return { x: o + i / 2, y: a + s / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case Ce.Top:
      return { x: o + i / 2, y: a };
    case Ce.Right:
      return { x: o + i, y: a + s / 2 };
    case Ce.Bottom:
      return { x: o + i / 2, y: a + s };
    case Ce.Left:
      return { x: o, y: a + s / 2 };
  }
}
function cl(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function _a(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function Tp(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const a = /* @__PURE__ */ new Set();
  return e.reduce((i, s) => ([s.markerStart || r, s.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = _a(l, t);
      a.has(u) || (i.push({ id: u, color: l.color || n, ...l }), a.add(u));
    }
  }), i), []).sort((i, s) => i.id.localeCompare(s.id));
}
function Dp(e, t, n, r, o) {
  let a = 0.5;
  o === "start" ? a = 0 : o === "end" && (a = 1);
  let i = [
    (e.x + e.width * a) * t.zoom + t.x,
    e.y * t.zoom + t.y - r
  ], s = [-100 * a, -100];
  switch (n) {
    case Ce.Right:
      i = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * a) * t.zoom + t.y
      ], s = [0, -100 * a];
      break;
    case Ce.Bottom:
      i[1] = (e.y + e.height) * t.zoom + t.y + r, s[1] = 0;
      break;
    case Ce.Left:
      i = [
        e.x * t.zoom + t.x - r,
        (e.y + e.height * a) * t.zoom + t.y
      ], s = [-100, -100 * a];
      break;
  }
  return `translate(${i[0]}px, ${i[1]}px) translate(${s[0]}%, ${s[1]}%)`;
}
const os = {
  nodeOrigin: [0, 0],
  nodeExtent: di,
  elevateNodesOnSelect: !0,
  defaults: {}
}, Lp = {
  ...os,
  checkEquality: !0
};
function is(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function Ap(e, t, n) {
  const r = is(os, n);
  for (const o of e.values())
    if (o.parentId)
      as(o, e, t, r);
    else {
      const a = ko(o, r.nodeOrigin), i = Or(o.extent) ? o.extent : r.nodeExtent, s = cr(a, i, Jn(o));
      o.internals.positionAbsolute = s;
    }
}
function rc(e, t, n, r) {
  var o, a;
  const i = is(Lp, r), s = new Map(t), l = i != null && i.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let c = s.get(u.id);
    if (i.checkEquality && u === (c == null ? void 0 : c.internals.userNode))
      t.set(u.id, c);
    else {
      const d = ko(u, i.nodeOrigin), f = Or(u.extent) ? u.extent : i.nodeExtent, g = cr(d, f, Jn(u));
      c = {
        ...i.defaults,
        ...u,
        measured: {
          width: (o = u.measured) == null ? void 0 : o.width,
          height: (a = u.measured) == null ? void 0 : a.height
        },
        internals: {
          positionAbsolute: g,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: u.measured ? c == null ? void 0 : c.internals.handleBounds : void 0,
          z: oc(u, l),
          userNode: u
        }
      }, t.set(u.id, c);
    }
    u.parentId && as(c, t, n, r);
  }
}
function Ip(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function as(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: a, nodeExtent: i } = is(os, r), s = e.parentId, l = t.get(s);
  if (!l) {
    console.warn(`Parent node ${s} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  Ip(e, n);
  const u = o ? 1e3 : 0, { x: c, y: d, z: f } = Zp(e, l, a, i, u), { positionAbsolute: g } = e.internals, w = c !== g.x || d !== g.y;
  (w || f !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: w ? { x: c, y: d } : g,
      z: f
    }
  });
}
function oc(e, t) {
  return (Pn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function Zp(e, t, n, r, o) {
  const { x: a, y: i } = t.internals.positionAbsolute, s = Jn(e), l = ko(e, n), u = Or(e.extent) ? cr(l, e.extent, s) : l;
  let c = cr({ x: a + u.x, y: i + u.y }, r, s);
  e.extent === "parent" && (c = Fu(c, s, t));
  const d = oc(e, o), f = t.internals.z ?? 0;
  return {
    x: c.x,
    y: c.y,
    z: f > d ? f : d
  };
}
function Bp(e, t, n, r = [0, 0]) {
  var o;
  const a = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const l = t.get(s.parentId);
    if (!l)
      continue;
    const u = ((o = i.get(s.parentId)) == null ? void 0 : o.expandedRect) ?? Hr(l), c = Uu(u, s.rect);
    i.set(s.parentId, { expandedRect: c, parent: l });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: l }, u) => {
    var c;
    const d = l.internals.positionAbsolute, f = Jn(l), g = l.origin ?? r, w = s.x < d.x ? Math.round(Math.abs(d.x - s.x)) : 0, x = s.y < d.y ? Math.round(Math.abs(d.y - s.y)) : 0, $ = Math.max(f.width, Math.round(s.width)), C = Math.max(f.height, Math.round(s.height)), p = ($ - f.width) * g[0], b = (C - f.height) * g[1];
    (w > 0 || x > 0 || p || b) && (a.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - w + p,
        y: l.position.y - x + b
      }
    }), (c = n.get(u)) == null || c.forEach((h) => {
      e.some((k) => k.id === h.id) || a.push({
        id: h.id,
        type: "position",
        position: {
          x: h.position.x + w,
          y: h.position.y + x
        }
      });
    })), (f.width < s.width || f.height < s.height || w || x) && a.push({
      id: u,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: $ + (w ? g[0] * w - p : 0),
        height: C + (x ? g[1] * x - b : 0)
      }
    });
  }), a;
}
function Rp(e, t, n, r, o, a) {
  const i = r == null ? void 0 : r.querySelector(".xyflow__viewport");
  let s = !1;
  if (!i)
    return { changes: [], updatedInternals: s };
  const l = [], u = window.getComputedStyle(i), { m22: c } = new window.DOMMatrixReadOnly(u.transform), d = [];
  for (const f of e.values()) {
    const g = t.get(f.id);
    if (!g)
      continue;
    if (g.hidden) {
      t.set(g.id, {
        ...g,
        internals: {
          ...g.internals,
          handleBounds: void 0
        }
      }), s = !0;
      continue;
    }
    const w = rs(f.nodeElement), x = g.measured.width !== w.width || g.measured.height !== w.height;
    if (w.width && w.height && (x || !g.internals.handleBounds || f.force)) {
      const $ = f.nodeElement.getBoundingClientRect(), C = Or(g.extent) ? g.extent : a;
      let { positionAbsolute: p } = g.internals;
      g.parentId && g.extent === "parent" ? p = Fu(p, w, t.get(g.parentId)) : C && (p = cr(p, C, w));
      const b = {
        ...g,
        measured: w,
        internals: {
          ...g.internals,
          positionAbsolute: p,
          handleBounds: {
            source: ol("source", f.nodeElement, $, c, g.id),
            target: ol("target", f.nodeElement, $, c, g.id)
          }
        }
      };
      t.set(g.id, b), g.parentId && as(b, t, n, { nodeOrigin: o }), s = !0, x && (l.push({
        id: g.id,
        type: "dimensions",
        dimensions: w
      }), g.expandParent && g.parentId && d.push({
        id: g.id,
        parentId: g.parentId,
        rect: Hr(b, o)
      }));
    }
  }
  if (d.length > 0) {
    const f = Bp(d, t, n, o);
    l.push(...f);
  }
  return { changes: l, updatedInternals: s };
}
async function Yp({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: a }) {
  if (!t || !e.x && !e.y)
    return Promise.resolve(!1);
  const i = await t.setViewportConstrained({
    x: n[0] + e.x,
    y: n[1] + e.y,
    zoom: n[2]
  }, [
    [0, 0],
    [o, a]
  ], r), s = !!i && (i.x !== n[0] || i.y !== n[1] || i.k !== n[2]);
  return Promise.resolve(s);
}
function dl(e, t, n, r, o, a) {
  let i = o;
  const s = r.get(i) || /* @__PURE__ */ new Map();
  r.set(i, s.set(n, t)), i = `${o}-${e}`;
  const l = r.get(i) || /* @__PURE__ */ new Map();
  if (r.set(i, l.set(n, t)), a) {
    i = `${o}-${e}-${a}`;
    const u = r.get(i) || /* @__PURE__ */ new Map();
    r.set(i, u.set(n, t));
  }
}
function ic(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: a, sourceHandle: i = null, targetHandle: s = null } = r, l = { edgeId: r.id, source: o, target: a, sourceHandle: i, targetHandle: s }, u = `${o}-${i}--${a}-${s}`, c = `${a}-${s}--${o}-${i}`;
    dl("source", l, c, e, o, i), dl("target", l, u, e, a, s), t.set(r.id, r);
  }
}
function Kp(e, t) {
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
function ac(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : ac(n, t) : !1;
}
function fl(e, t, n) {
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
function Xp(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [a, i] of e)
    if ((i.selected || i.id === r) && (!i.parentId || !ac(i, e)) && (i.draggable || t && typeof i.draggable > "u")) {
      const s = e.get(a);
      s && o.set(a, {
        id: a,
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
function ea({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
  var o, a, i;
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
  const l = (a = n.get(e)) == null ? void 0 : a.internals.userNode;
  return [
    l ? {
      ...l,
      position: ((i = t.get(e)) == null ? void 0 : i.position) || l.position,
      dragging: r
    } : s[0],
    s
  ];
}
function Wp({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let a = { x: null, y: null }, i = 0, s = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, c = null, d = !1, f = null, g = !1;
  function w({ noDragClassName: $, handleSelector: C, domNode: p, isSelectable: b, nodeId: h, nodeClickDistance: k = 0 }) {
    f = Kt(p);
    function S({ x: T, y: L }, O) {
      const { nodeLookup: R, nodeExtent: P, snapGrid: N, snapToGrid: _, nodeOrigin: E, onNodeDrag: H, onSelectionDrag: A, onError: B, updateNodePositions: j } = t();
      a = { x: T, y: L };
      let F = !1, ie = { x: 0, y: 0, x2: 0, y2: 0 };
      if (s.size > 1 && P) {
        const Q = Co(s);
        ie = ka(Q);
      }
      for (const [Q, Y] of s) {
        if (!R.has(Q))
          continue;
        let ce = { x: T - Y.distance.x, y: L - Y.distance.y };
        _ && (ce = ts(ce, N));
        let ke = [
          [P[0][0], P[0][1]],
          [P[1][0], P[1][1]]
        ];
        if (s.size > 1 && P && !Y.extent) {
          const { positionAbsolute: Ne } = Y.internals, oe = Ne.x - ie.x + P[0][0], ye = Ne.x + Y.measured.width - ie.x2 + P[1][0], Ye = Ne.y - ie.y + P[0][1], Le = Ne.y + Y.measured.height - ie.y2 + P[1][1];
          ke = [
            [oe, Ye],
            [ye, Le]
          ];
        }
        const { position: $e, positionAbsolute: ve } = wp({
          nodeId: Q,
          nextPosition: ce,
          nodeLookup: R,
          nodeExtent: ke,
          nodeOrigin: E,
          onError: B
        });
        F = F || Y.position.x !== $e.x || Y.position.y !== $e.y, Y.position = $e, Y.internals.positionAbsolute = ve;
      }
      if (F && (j(s, !0), O && (r || H || !h && A))) {
        const [Q, Y] = ea({
          nodeId: h,
          dragItems: s,
          nodeLookup: R
        });
        r == null || r(O, s, Q, Y), H == null || H(O, Q, Y), h || A == null || A(O, Y);
      }
    }
    async function M() {
      if (!c)
        return;
      const { transform: T, panBy: L, autoPanSpeed: O, autoPanOnNodeDrag: R } = t();
      if (!R) {
        l = !1, cancelAnimationFrame(i);
        return;
      }
      const [P, N] = Gu(u, c, O);
      (P !== 0 || N !== 0) && (a.x = (a.x ?? 0) - P / T[2], a.y = (a.y ?? 0) - N / T[2], await L({ x: P, y: N }) && S(a, null)), i = requestAnimationFrame(M);
    }
    function z(T) {
      var L;
      const { nodeLookup: O, multiSelectionActive: R, nodesDraggable: P, transform: N, snapGrid: _, snapToGrid: E, selectNodesOnDrag: H, onNodeDragStart: A, onSelectionDragStart: B, unselectNodesAndEdges: j } = t();
      d = !0, (!H || !b) && !R && h && ((L = O.get(h)) != null && L.selected || j()), b && H && h && (e == null || e(h));
      const F = Qi(T.sourceEvent, { transform: N, snapGrid: _, snapToGrid: E, containerBounds: c });
      if (a = F, s = Xp(O, P, F, h), s.size > 0 && (n || A || !h && B)) {
        const [ie, Q] = ea({
          nodeId: h,
          dragItems: s,
          nodeLookup: O
        });
        n == null || n(T.sourceEvent, s, ie, Q), A == null || A(T.sourceEvent, ie, Q), h || B == null || B(T.sourceEvent, Q);
      }
    }
    const V = Cv().clickDistance(k).on("start", (T) => {
      const { domNode: L, nodeDragThreshold: O, transform: R, snapGrid: P, snapToGrid: N } = t();
      c = (L == null ? void 0 : L.getBoundingClientRect()) || null, g = !1, O === 0 && z(T), a = Qi(T.sourceEvent, { transform: R, snapGrid: P, snapToGrid: N, containerBounds: c }), u = Nn(T.sourceEvent, c);
    }).on("drag", (T) => {
      const { autoPanOnNodeDrag: L, transform: O, snapGrid: R, snapToGrid: P, nodeDragThreshold: N, nodeLookup: _ } = t(), E = Qi(T.sourceEvent, { transform: O, snapGrid: R, snapToGrid: P, containerBounds: c });
      if ((T.sourceEvent.type === "touchmove" && T.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      h && !_.has(h)) && (g = !0), !g) {
        if (!l && L && d && (l = !0, M()), !d) {
          const H = E.xSnapped - (a.x ?? 0), A = E.ySnapped - (a.y ?? 0);
          Math.sqrt(H * H + A * A) > N && z(T);
        }
        (a.x !== E.xSnapped || a.y !== E.ySnapped) && s && d && (u = Nn(T.sourceEvent, c), S(E, T.sourceEvent));
      }
    }).on("end", (T) => {
      if (!(!d || g) && (l = !1, d = !1, cancelAnimationFrame(i), s.size > 0)) {
        const { nodeLookup: L, updateNodePositions: O, onNodeDragStop: R, onSelectionDragStop: P } = t();
        if (O(s, !1), o || R || !h && P) {
          const [N, _] = ea({
            nodeId: h,
            dragItems: s,
            nodeLookup: L,
            dragging: !1
          });
          o == null || o(T.sourceEvent, s, N, _), R == null || R(T.sourceEvent, N, _), h || P == null || P(T.sourceEvent, _);
        }
      }
    }).filter((T) => {
      const L = T.target;
      return !T.button && (!$ || !fl(L, `.${$}`, p)) && (!C || fl(L, C, p));
    });
    f.call(V);
  }
  function x() {
    f == null || f.on(".drag", null);
  }
  return {
    update: w,
    destroy: x
  };
}
function jp(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const a of t.values())
    vo(o, Hr(a)) > 0 && r.push(a);
  return r;
}
const qp = 250;
function Fp(e, t, n, r) {
  var o, a;
  let i = [], s = 1 / 0;
  const l = jp(e, n, t + qp);
  for (const u of l) {
    const c = [...((o = u.internals.handleBounds) == null ? void 0 : o.source) ?? [], ...((a = u.internals.handleBounds) == null ? void 0 : a.target) ?? []];
    for (const d of c) {
      if (r.nodeId === d.nodeId && r.type === d.type && r.id === d.id)
        continue;
      const { x: f, y: g } = ho(u, d, d.position, !0), w = Math.sqrt(Math.pow(f - e.x, 2) + Math.pow(g - e.y, 2));
      w > t || (w < s ? (i = [{ ...d, x: f, y: g }], s = w) : w === s && i.push({ ...d, x: f, y: g }));
    }
  }
  if (!i.length)
    return null;
  if (i.length > 1) {
    const u = r.type === "source" ? "target" : "source";
    return i.find((c) => c.type === u) ?? i[0];
  }
  return i[0];
}
function sc(e, t, n, r, o, a = !1) {
  var i, s, l;
  const u = r.get(e);
  if (!u)
    return null;
  const c = o === "strict" ? (i = u.internals.handleBounds) == null ? void 0 : i[t] : [...((s = u.internals.handleBounds) == null ? void 0 : s.source) ?? [], ...((l = u.internals.handleBounds) == null ? void 0 : l.target) ?? []], d = (n ? c == null ? void 0 : c.find((f) => f.id === n) : c == null ? void 0 : c[0]) ?? null;
  return d && a ? { ...d, ...ho(u, d, d.position, !0) } : d;
}
function lc(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function Gp(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const uc = () => !0;
function Up(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: a, isTarget: i, domNode: s, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: d, panBy: f, cancelConnection: g, onConnectStart: w, onConnect: x, onConnectEnd: $, isValidConnection: C = uc, onReconnectEnd: p, updateConnection: b, getTransform: h, getFromHandle: k, autoPanSpeed: S }) {
  const M = $p(e.target);
  let z = 0, V;
  const { x: T, y: L } = Nn(e), O = M == null ? void 0 : M.elementFromPoint(T, L), R = lc(a, O), P = s == null ? void 0 : s.getBoundingClientRect();
  if (!P || !R)
    return;
  const N = sc(o, R, r, l, t);
  if (!N)
    return;
  let _ = Nn(e, P), E = !1, H = null, A = !1, B = null;
  function j() {
    if (!c || !P)
      return;
    const [$e, ve] = Gu(_, P, S);
    f({ x: $e, y: ve }), z = requestAnimationFrame(j);
  }
  const F = {
    ...N,
    nodeId: o,
    type: R,
    position: N.position
  }, ie = l.get(o), Q = {
    inProgress: !0,
    isValid: null,
    from: ho(ie, F, Ce.Left, !0),
    fromHandle: F,
    fromPosition: F.position,
    fromNode: ie,
    to: _,
    toHandle: null,
    toPosition: Js[F.position],
    toNode: null
  };
  b(Q);
  let Y = Q;
  w == null || w(e, { nodeId: o, handleId: r, handleType: R });
  function ce($e) {
    if (!k() || !F) {
      ke($e);
      return;
    }
    const ve = h();
    _ = Nn($e, P), V = Fp(_o(_, ve, !1, [1, 1]), n, l, F), E || (j(), E = !0);
    const Ne = cc($e, {
      handle: V,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: i ? "target" : "source",
      isValidConnection: C,
      doc: M,
      lib: u,
      flowId: d,
      nodeLookup: l
    });
    B = Ne.handleDomNode, H = Ne.connection, A = Gp(!!V, Ne.isValid);
    const oe = {
      // from stays the same
      ...Y,
      isValid: A,
      to: V && A ? Ju({ x: V.x, y: V.y }, ve) : _,
      toHandle: Ne.toHandle,
      toPosition: A && Ne.toHandle ? Ne.toHandle.position : Js[F.position],
      toNode: Ne.toHandle ? l.get(Ne.toHandle.nodeId) : null
    };
    A && V && Y.toHandle && oe.toHandle && Y.toHandle.type === oe.toHandle.type && Y.toHandle.nodeId === oe.toHandle.nodeId && Y.toHandle.id === oe.toHandle.id && Y.to.x === oe.to.x && Y.to.y === oe.to.y || (b(oe), Y = oe);
  }
  function ke($e) {
    (V || B) && H && A && (x == null || x(H));
    const { inProgress: ve, ...Ne } = Y, oe = {
      ...Ne,
      toPosition: Y.toHandle ? Y.toPosition : null
    };
    $ == null || $($e, oe), a && (p == null || p($e, oe)), g(), cancelAnimationFrame(z), E = !1, A = !1, H = null, B = null, M.removeEventListener("mousemove", ce), M.removeEventListener("mouseup", ke), M.removeEventListener("touchmove", ce), M.removeEventListener("touchend", ke);
  }
  M.addEventListener("mousemove", ce), M.addEventListener("mouseup", ke), M.addEventListener("touchmove", ce), M.addEventListener("touchend", ke);
}
function cc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: a, doc: i, lib: s, flowId: l, isValidConnection: u = uc, nodeLookup: c }) {
  const d = a === "target", f = t ? i.querySelector(`.${s}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: g, y: w } = Nn(e), x = i.elementFromPoint(g, w), $ = x != null && x.classList.contains(`${s}-flow__handle`) ? x : f, C = {
    handleDomNode: $,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if ($) {
    const p = lc(void 0, $), b = $.getAttribute("data-nodeid"), h = $.getAttribute("data-handleid"), k = $.classList.contains("connectable"), S = $.classList.contains("connectableend");
    if (!b || !p)
      return C;
    const M = {
      source: d ? b : r,
      sourceHandle: d ? h : o,
      target: d ? r : b,
      targetHandle: d ? o : h
    };
    C.connection = M;
    const z = k && S && (n === ur.Strict ? d && p === "source" || !d && p === "target" : b !== r || h !== o);
    C.isValid = z && u(M), C.toHandle = sc(b, p, h, c, n, !1);
  }
  return C;
}
const Jp = {
  onPointerDown: Up,
  isValid: cc
};
function Qp({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Kt(e);
  function a({ translateExtent: s, width: l, height: u, zoomStep: c = 10, pannable: d = !0, zoomable: f = !0, inversePan: g = !1 }) {
    const w = (b) => {
      const h = n();
      if (b.sourceEvent.type !== "wheel" || !t)
        return;
      const k = -b.sourceEvent.deltaY * (b.sourceEvent.deltaMode === 1 ? 0.05 : b.sourceEvent.deltaMode ? 1 : 2e-3) * c, S = h[2] * Math.pow(2, k);
      t.scaleTo(S);
    };
    let x = [0, 0];
    const $ = (b) => {
      (b.sourceEvent.type === "mousedown" || b.sourceEvent.type === "touchstart") && (x = [
        b.sourceEvent.clientX ?? b.sourceEvent.touches[0].clientX,
        b.sourceEvent.clientY ?? b.sourceEvent.touches[0].clientY
      ]);
    }, C = (b) => {
      const h = n();
      if (b.sourceEvent.type !== "mousemove" && b.sourceEvent.type !== "touchmove" || !t)
        return;
      const k = [
        b.sourceEvent.clientX ?? b.sourceEvent.touches[0].clientX,
        b.sourceEvent.clientY ?? b.sourceEvent.touches[0].clientY
      ], S = [k[0] - x[0], k[1] - x[1]];
      x = k;
      const M = r() * Math.max(h[2], Math.log(h[2])) * (g ? -1 : 1), z = {
        x: h[0] - S[0] * M,
        y: h[1] - S[1] * M
      }, V = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: z.x,
        y: z.y,
        zoom: h[2]
      }, V, s);
    }, p = Wu().on("start", $).on("zoom", d ? C : null).on("zoom.wheel", f ? w : null);
    o.call(p, {});
  }
  function i() {
    o.on("zoom", null);
  }
  return {
    update: a,
    destroy: i,
    pointer: Jt
  };
}
const e0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Bi = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), ta = ({ x: e, y: t, zoom: n }) => Ai.translate(e, t).scale(n), wr = (e, t) => e.target.closest(`.${t}`), dc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), na = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, fc = (e) => {
  const t = e.ctrlKey && vi() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function t0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: a, zoomOnPinch: i, onPanZoomStart: s, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (wr(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const d = n.property("__zoom").k || 1;
    if (c.ctrlKey && i) {
      const $ = Jt(c), C = fc(c), p = d * Math.pow(2, C);
      r.scaleTo(n, p, $, c);
      return;
    }
    const f = c.deltaMode === 1 ? 20 : 1;
    let g = o === Wn.Vertical ? 0 : c.deltaX * f, w = o === Wn.Horizontal ? 0 : c.deltaY * f;
    !vi() && c.shiftKey && o !== Wn.Vertical && (g = c.deltaY * f, w = 0), r.translateBy(
      n,
      -(g / d) * a,
      -(w / d) * a,
      // @ts-ignore
      { internal: !0 }
    );
    const x = Bi(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, s == null || s(c, x)), e.isPanScrolling && (l == null || l(c, x), e.panScrollTimeout = setTimeout(() => {
      u == null || u(c, x), e.isPanScrolling = !1;
    }, 150));
  };
}
function n0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    if (!t && r.type === "wheel" && !r.ctrlKey || wr(r, e))
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function r0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var o, a, i;
    if ((o = r.sourceEvent) != null && o.internal)
      return;
    const s = Bi(r.transform);
    e.mouseButton = ((a = r.sourceEvent) == null ? void 0 : a.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = s, ((i = r.sourceEvent) == null ? void 0 : i.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, s));
  };
}
function o0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (a) => {
    var i, s;
    e.usedRightMouseButton = !!(n && dc(t, e.mouseButton ?? 0)), (i = a.sourceEvent) != null && i.sync || r([a.transform.x, a.transform.y, a.transform.k]), o && !((s = a.sourceEvent) != null && s.internal) && (o == null || o(a.sourceEvent, Bi(a.transform)));
  };
}
function i0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: a }) {
  return (i) => {
    var s;
    if (!((s = i.sourceEvent) != null && s.internal) && (e.isZoomingOrPanning = !1, a && dc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && i.sourceEvent && a(i.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && e0(e.prevViewport, i.transform))) {
      const l = Bi(i.transform);
      e.prevViewport = l, clearTimeout(e.timerId), e.timerId = setTimeout(
        () => {
          o == null || o(i.sourceEvent, l);
        },
        // we need a setTimeout for panOnScroll to supress multiple end events fired during scroll
        n ? 150 : 0
      );
    }
  };
}
function a0({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: a, userSelectionActive: i, noWheelClassName: s, noPanClassName: l, lib: u }) {
  return (c) => {
    var d;
    const f = e || t, g = n && c.ctrlKey;
    if (c.button === 1 && c.type === "mousedown" && (wr(c, `${u}-flow__node`) || wr(c, `${u}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !a && !n || i || wr(c, s) && c.type === "wheel" || wr(c, l) && (c.type !== "wheel" || o && c.type === "wheel" && !e) || !n && c.ctrlKey && c.type === "wheel")
      return !1;
    if (!n && c.type === "touchstart" && ((d = c.touches) == null ? void 0 : d.length) > 1)
      return c.preventDefault(), !1;
    if (!f && !o && !g && c.type === "wheel" || !r && (c.type === "mousedown" || c.type === "touchstart") || Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
      return !1;
    const w = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || c.type === "wheel") && w;
  };
}
function s0({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: a, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: l, onDraggingChange: u }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), f = Wu().clickDistance(!Pn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), g = Kt(e).call(f);
  b({
    x: a.x,
    y: a.y,
    zoom: Vr(a.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], o);
  const w = g.on("wheel.zoom"), x = g.on("dblclick.zoom");
  f.wheelDelta(fc);
  function $(O, R) {
    return g ? new Promise((P) => {
      f == null || f.transform(na(g, R == null ? void 0 : R.duration, () => P(!0)), O);
    }) : Promise.resolve(!1);
  }
  function C({ noWheelClassName: O, noPanClassName: R, onPaneContextMenu: P, userSelectionActive: N, panOnScroll: _, panOnDrag: E, panOnScrollMode: H, panOnScrollSpeed: A, preventScrolling: B, zoomOnPinch: j, zoomOnScroll: F, zoomOnDoubleClick: ie, zoomActivationKeyPressed: Q, lib: Y, onTransformChange: ce }) {
    N && !c.isZoomingOrPanning && p();
    const ke = _ && !Q && !N ? t0({
      zoomPanValues: c,
      noWheelClassName: O,
      d3Selection: g,
      d3Zoom: f,
      panOnScrollMode: H,
      panOnScrollSpeed: A,
      zoomOnPinch: j,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: l
    }) : n0({
      noWheelClassName: O,
      preventScrolling: B,
      d3ZoomHandler: w
    });
    if (g.on("wheel.zoom", ke, { passive: !1 }), !N) {
      const ve = r0({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: s
      });
      f.on("start", ve);
      const Ne = o0({
        zoomPanValues: c,
        panOnDrag: E,
        onPaneContextMenu: !!P,
        onPanZoom: i,
        onTransformChange: ce
      });
      f.on("zoom", Ne);
      const oe = i0({
        zoomPanValues: c,
        panOnDrag: E,
        panOnScroll: _,
        onPaneContextMenu: P,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      f.on("end", oe);
    }
    const $e = a0({
      zoomActivationKeyPressed: Q,
      panOnDrag: E,
      zoomOnScroll: F,
      panOnScroll: _,
      zoomOnDoubleClick: ie,
      zoomOnPinch: j,
      userSelectionActive: N,
      noPanClassName: R,
      noWheelClassName: O,
      lib: Y
    });
    f.filter($e), ie ? g.on("dblclick.zoom", x) : g.on("dblclick.zoom", null);
  }
  function p() {
    f.on("zoom", null);
  }
  async function b(O, R, P) {
    const N = ta(O), _ = f == null ? void 0 : f.constrain()(N, R, P);
    return _ && await $(_), new Promise((E) => E(_));
  }
  async function h(O, R) {
    const P = ta(O);
    return await $(P, R), new Promise((N) => N(P));
  }
  function k(O) {
    if (g) {
      const R = ta(O), P = g.property("__zoom");
      (P.k !== O.zoom || P.x !== O.x || P.y !== O.y) && (f == null || f.transform(g, R, null, { sync: !0 }));
    }
  }
  function S() {
    const O = g ? Xu(g.node()) : { x: 0, y: 0, k: 1 };
    return { x: O.x, y: O.y, zoom: O.k };
  }
  function M(O, R) {
    return g ? new Promise((P) => {
      f == null || f.scaleTo(na(g, R == null ? void 0 : R.duration, () => P(!0)), O);
    }) : Promise.resolve(!1);
  }
  function z(O, R) {
    return g ? new Promise((P) => {
      f == null || f.scaleBy(na(g, R == null ? void 0 : R.duration, () => P(!0)), O);
    }) : Promise.resolve(!1);
  }
  function V(O) {
    f == null || f.scaleExtent(O);
  }
  function T(O) {
    f == null || f.translateExtent(O);
  }
  function L(O) {
    const R = !Pn(O) || O < 0 ? 0 : O;
    f == null || f.clickDistance(R);
  }
  return {
    update: C,
    destroy: p,
    setViewport: h,
    setViewportConstrained: b,
    getViewport: S,
    scaleTo: M,
    scaleBy: z,
    setScaleExtent: V,
    setTranslateExtent: T,
    syncViewport: k,
    setClickDistance: L
  };
}
var gl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(gl || (gl = {}));
var l0 = /* @__PURE__ */ ne('<div role="button" tabindex="-1"><!></div>');
function Gn(e, t) {
  le(t, !1);
  const [n, r] = et(), o = () => J(ie, "$connectable", n), a = () => J($e, "$connectionRadius", n), i = () => J(ce, "$domNode", n), s = () => J(ke, "$nodeLookup", n), l = () => J(Y, "$connectionMode", n), u = () => J(oe, "$lib", n), c = () => J(fe, "$autoPanOnConnect", n), d = () => J(Ke, "$flowId", n), f = () => J(Ne, "$isValidConnectionStore", n), g = () => J(Ye, "$onedgecreate", n), w = () => J(Ve, "$onConnectAction", n), x = () => J(je, "$onConnectStartAction", n), $ = () => J(Oe, "$onConnectEndAction", n), C = () => J(ve, "$viewport", n), p = () => J(rt, "$connection", n), b = () => J(he, "$edges", n), h = () => J(Ae, "$connectionLookup", n), k = te(), S = te(), M = te(), z = te(), V = te(), T = te(), L = te(), O = te();
  let R = y(t, "id", 12, void 0), P = y(t, "type", 12, "source"), N = y(t, "position", 28, () => Ce.Top), _ = y(t, "style", 12, void 0), E = y(t, "isValidConnection", 12, void 0), H = y(t, "onconnect", 12, void 0), A = y(t, "ondisconnect", 12, void 0), B = y(t, "isConnectable", 12, void 0), j = y(t, "class", 12, void 0);
  const F = ar("svelteflow__node_id"), ie = ar("svelteflow__node_connectable"), Q = We(), {
    connectionMode: Y,
    domNode: ce,
    nodeLookup: ke,
    connectionRadius: $e,
    viewport: ve,
    isValidConnection: Ne,
    lib: oe,
    addEdge: ye,
    onedgecreate: Ye,
    panBy: Le,
    cancelConnection: Ze,
    updateConnection: X,
    autoPanOnConnect: fe,
    edges: he,
    connectionLookup: Ae,
    onconnect: Ve,
    onconnectstart: je,
    onconnectend: Oe,
    flowId: Ke,
    connection: rt
  } = Q;
  function gt(Pe) {
    const nt = ec(Pe);
    (nt && Pe.button === 0 || !nt) && Jp.onPointerDown(Pe, {
      handleId: v(M),
      nodeId: F,
      isTarget: v(k),
      connectionRadius: a(),
      domNode: i(),
      nodeLookup: s(),
      connectionMode: l(),
      lib: u(),
      autoPanOnConnect: c(),
      flowId: d(),
      isValidConnection: E() ?? f(),
      updateConnection: X,
      cancelConnection: Ze,
      panBy: Le,
      onConnect: (pe) => {
        var ot;
        const at = g() ? g()(pe) : pe;
        at && (ye(at), (ot = w()) == null || ot(pe));
      },
      onConnectStart: (pe, ot) => {
        var at;
        (at = x()) == null || at(pe, {
          nodeId: ot.nodeId,
          handleId: ot.handleId,
          handleType: ot.handleType
        });
      },
      onConnectEnd: (pe, ot) => {
        var at;
        (at = $()) == null || at(pe, ot);
      },
      getTransform: () => [
        C().x,
        C().y,
        C().zoom
      ],
      getFromHandle: () => p().fromHandle
    });
  }
  let ee = te(null), Be = te();
  se(() => U(P()), () => {
    G(k, P() === "target");
  }), se(
    () => (U(B()), o()),
    () => {
      G(S, B() !== void 0 ? B() : o());
    }
  ), se(() => U(R()), () => {
    G(M, R() || null);
  }), se(
    () => (U(H()), U(A()), b(), h(), U(P()), U(R())),
    () => {
      (H() || A()) && (b(), G(Be, h().get(`${F}-${P()}${R() ? `-${R()}` : ""}`)));
    }
  ), se(
    () => (v(ee), v(Be), U(A()), U(H())),
    () => {
      if (v(ee) && !vp(v(Be), v(ee))) {
        const Pe = v(Be) ?? /* @__PURE__ */ new Map();
        Qs(v(ee), Pe, A()), Qs(Pe, v(ee), H());
      }
      G(ee, v(Be) ?? /* @__PURE__ */ new Map());
    }
  ), se(() => p(), () => {
    G(z, !!p().fromHandle);
  }), se(
    () => (p(), U(P()), v(M)),
    () => {
      var Pe, nt, pe;
      G(V, ((Pe = p().fromHandle) == null ? void 0 : Pe.nodeId) === F && ((nt = p().fromHandle) == null ? void 0 : nt.type) === P() && ((pe = p().fromHandle) == null ? void 0 : pe.id) === v(M));
    }
  ), se(
    () => (p(), U(P()), v(M)),
    () => {
      var Pe, nt, pe;
      G(T, ((Pe = p().toHandle) == null ? void 0 : Pe.nodeId) === F && ((nt = p().toHandle) == null ? void 0 : nt.type) === P() && ((pe = p().toHandle) == null ? void 0 : pe.id) === v(M));
    }
  ), se(
    () => (l(), p(), U(P()), v(M)),
    () => {
      var Pe, nt, pe;
      G(L, l() === ur.Strict ? ((Pe = p().fromHandle) == null ? void 0 : Pe.type) !== P() : F !== ((nt = p().fromHandle) == null ? void 0 : nt.nodeId) || v(M) !== ((pe = p().fromHandle) == null ? void 0 : pe.id));
    }
  ), se(() => (v(T), p()), () => {
    G(O, v(T) && p().isValid);
  }), ft(), ze();
  var de = l0();
  ae(de, "data-nodeid", F);
  let ln;
  var qt = W(de);
  ht(qt, t, "default", {}), K(de), _e(
    (Pe) => {
      ae(de, "data-handleid", v(M)), ae(de, "data-handlepos", N()), ae(de, "data-id", `${d() ?? ""}-${F ?? ""}-${R() || ""}-${P() ?? ""}`), ln = $t(de, 1, xn(Pe), null, ln, {
        valid: v(O),
        connectingto: v(T),
        connectingfrom: v(V),
        source: !v(k),
        target: v(k),
        connectablestart: v(S),
        connectableend: v(S),
        connectable: v(S),
        connectionindicator: v(S) && (!v(z) || v(L))
      }), ae(de, "style", _());
    },
    [
      () => _t([
        "svelte-flow__handle",
        `svelte-flow__handle-${N()}`,
        "nodrag",
        "nopan",
        N(),
        j()
      ])
    ],
    ge
  ), Je("mousedown", de, gt), Je("touchstart", de, gt), D(e, de);
  var un = ue({
    get id() {
      return R();
    },
    set id(Pe) {
      R(Pe), m();
    },
    get type() {
      return P();
    },
    set type(Pe) {
      P(Pe), m();
    },
    get position() {
      return N();
    },
    set position(Pe) {
      N(Pe), m();
    },
    get style() {
      return _();
    },
    set style(Pe) {
      _(Pe), m();
    },
    get isValidConnection() {
      return E();
    },
    set isValidConnection(Pe) {
      E(Pe), m();
    },
    get onconnect() {
      return H();
    },
    set onconnect(Pe) {
      H(Pe), m();
    },
    get ondisconnect() {
      return A();
    },
    set ondisconnect(Pe) {
      A(Pe), m();
    },
    get isConnectable() {
      return B();
    },
    set isConnectable(Pe) {
      B(Pe), m();
    },
    get class() {
      return j();
    },
    set class(Pe) {
      j(Pe), m();
    }
  });
  return r(), un;
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
var u0 = /* @__PURE__ */ ne("<!> <!>", 1);
function pi(e, t) {
  const n = tt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  tt(n, ["data", "targetPosition", "sourcePosition"]), le(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "targetPosition", 12, void 0), a = y(t, "sourcePosition", 12, void 0);
  ze();
  var i = u0(), s = we(i);
  const l = /* @__PURE__ */ ge(() => o() ?? Ce.Top);
  Gn(s, {
    type: "target",
    get position() {
      return v(l);
    }
  });
  var u = I(s), c = I(u);
  const d = /* @__PURE__ */ ge(() => a() ?? Ce.Bottom);
  return Gn(c, {
    type: "source",
    get position() {
      return v(d);
    }
  }), _e(() => {
    var f;
    return wn(u, ` ${((f = r()) == null ? void 0 : f.label) ?? ""} `);
  }), D(e, i), ue({
    get data() {
      return r();
    },
    set data(f) {
      r(f), m();
    },
    get targetPosition() {
      return o();
    },
    set targetPosition(f) {
      o(f), m();
    },
    get sourcePosition() {
      return a();
    },
    set sourcePosition(f) {
      a(f), m();
    }
  });
}
re(
  pi,
  {
    data: {},
    targetPosition: {},
    sourcePosition: {}
  },
  [],
  [],
  !0
);
var c0 = /* @__PURE__ */ ne(" <!>", 1);
function gc(e, t) {
  const n = tt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  tt(n, ["data", "sourcePosition"]), le(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "sourcePosition", 12, void 0);
  ze(), Me();
  var a = c0(), i = we(a), s = I(i);
  const l = /* @__PURE__ */ ge(() => o() ?? Ce.Bottom);
  return Gn(s, {
    type: "source",
    get position() {
      return v(l);
    }
  }), _e(() => {
    var u;
    return wn(i, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), D(e, a), ue({
    get data() {
      return r();
    },
    set data(u) {
      r(u), m();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(u) {
      o(u), m();
    }
  });
}
re(gc, { data: {}, sourcePosition: {} }, [], [], !0);
var d0 = /* @__PURE__ */ ne(" <!>", 1);
function vc(e, t) {
  const n = tt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  tt(n, ["data", "targetPosition"]), le(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "targetPosition", 12, void 0);
  ze(), Me();
  var a = d0(), i = we(a), s = I(i);
  const l = /* @__PURE__ */ ge(() => o() ?? Ce.Top);
  return Gn(s, {
    type: "target",
    get position() {
      return v(l);
    }
  }), _e(() => {
    var u;
    return wn(i, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), D(e, a), ue({
    get data() {
      return r();
    },
    set data(u) {
      r(u), m();
    },
    get targetPosition() {
      return o();
    },
    set targetPosition(u) {
      o(u), m();
    }
  });
}
re(vc, { data: {}, targetPosition: {} }, [], [], !0);
function hc(e, t) {
  const n = tt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  tt(n, []);
}
re(hc, {}, [], [], !0);
function vl(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function mi(e, { target: t, domNode: n }) {
  return vl(e, n, t), {
    async update({ target: r, domNode: o }) {
      vl(e, o, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var f0 = /* @__PURE__ */ ne("<div><!></div>");
function pc(e, t) {
  le(t, !1);
  const [n, r] = et(), o = () => J(a, "$domNode", n), { domNode: a } = We();
  ze();
  var i = f0(), s = W(i);
  ht(s, t, "default", {}), K(i), vt(i, (l, u) => mi == null ? void 0 : mi(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), D(e, i), ue(), r();
}
re(pc, {}, ["default"], [], !0);
function mc() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: a, elementsSelectable: i } = We();
  return (s) => {
    const l = q(e).get(s);
    if (!l) {
      console.warn("012", zr.error012(s));
      return;
    }
    (l.selectable || q(i) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && q(r) && a({ nodes: [], edges: [l] }) : o([s]));
  };
}
var g0 = /* @__PURE__ */ ne('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function yc(e, t) {
  le(t, !1);
  let n = y(t, "style", 12, void 0), r = y(t, "x", 12, void 0), o = y(t, "y", 12, void 0);
  const a = mc(), i = ar("svelteflow__edge_id");
  return ze(), pc(e, {
    children: (s, l) => {
      var u = g0(), c = W(u);
      ht(c, t, "default", {}), K(u), _e(() => {
        ae(u, "style", "pointer-events: all;" + n()), it(u, "transform", `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`);
      }), Je("keyup", u, () => {
      }), Je("click", u, () => {
        i && a(i);
      }), D(s, u);
    },
    $$slots: { default: !0 }
  }), ue({
    get style() {
      return n();
    },
    set style(s) {
      n(s), m();
    },
    get x() {
      return r();
    },
    set x(s) {
      r(s), m();
    },
    get y() {
      return o();
    },
    set y(s) {
      o(s), m();
    }
  });
}
re(yc, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var v0 = /* @__PURE__ */ xe('<path fill="none" class="svelte-flow__edge-interaction"></path>'), h0 = /* @__PURE__ */ xe('<path fill="none"></path><!><!>', 1);
function Eo(e, t) {
  le(t, !1);
  let n = y(t, "id", 12, void 0), r = y(t, "path", 12), o = y(t, "label", 12, void 0), a = y(t, "labelX", 12, void 0), i = y(t, "labelY", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "markerStart", 12, void 0), u = y(t, "markerEnd", 12, void 0), c = y(t, "style", 12, void 0), d = y(t, "interactionWidth", 12, 20), f = y(t, "class", 12, void 0), g = d() === void 0 ? 20 : d();
  ze();
  var w = h0(), x = we(w), $ = I(x);
  {
    var C = (h) => {
      var k = v0();
      ae(k, "stroke-opacity", 0), ae(k, "stroke-width", g), _e(() => ae(k, "d", r())), D(h, k);
    };
    be($, (h) => {
      g && h(C);
    });
  }
  var p = I($);
  {
    var b = (h) => {
      yc(h, {
        get x() {
          return a();
        },
        get y() {
          return i();
        },
        get style() {
          return s();
        },
        children: (k, S) => {
          Me();
          var M = Ie();
          _e(() => wn(M, o())), D(k, M);
        },
        $$slots: { default: !0 }
      });
    };
    be(p, (h) => {
      o() && h(b);
    });
  }
  return _e(
    (h) => {
      ae(x, "id", n()), ae(x, "d", r()), $t(x, 0, xn(h)), ae(x, "marker-start", l()), ae(x, "marker-end", u()), ae(x, "style", c());
    },
    [
      () => _t(["svelte-flow__edge-path", f()])
    ],
    ge
  ), D(e, w), ue({
    get id() {
      return n();
    },
    set id(h) {
      n(h), m();
    },
    get path() {
      return r();
    },
    set path(h) {
      r(h), m();
    },
    get label() {
      return o();
    },
    set label(h) {
      o(h), m();
    },
    get labelX() {
      return a();
    },
    set labelX(h) {
      a(h), m();
    },
    get labelY() {
      return i();
    },
    set labelY(h) {
      i(h), m();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(h) {
      s(h), m();
    },
    get markerStart() {
      return l();
    },
    set markerStart(h) {
      l(h), m();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(h) {
      u(h), m();
    },
    get style() {
      return c();
    },
    set style(h) {
      c(h), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(h) {
      d(h), m();
    },
    get class() {
      return f();
    },
    set class(h) {
      f(h), m();
    }
  });
}
re(
  Eo,
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
function yi(e, t) {
  const n = tt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  tt(n, [
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
  ]), le(t, !1);
  const r = te(), o = te(), a = te();
  let i = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), f = y(t, "sourceX", 12), g = y(t, "sourceY", 12), w = y(t, "sourcePosition", 12), x = y(t, "targetX", 12), $ = y(t, "targetY", 12), C = y(t, "targetPosition", 12);
  return se(
    () => (v(r), v(o), v(a), U(f()), U(g()), U(x()), U($()), U(w()), U(C())),
    () => {
      ((p) => (G(r, p[0]), G(o, p[1]), G(a, p[2])))(tc({
        sourceX: f(),
        sourceY: g(),
        targetX: x(),
        targetY: $(),
        sourcePosition: w(),
        targetPosition: C()
      }));
    }
  ), ft(), ze(), Eo(e, {
    get path() {
      return v(r);
    },
    get labelX() {
      return v(o);
    },
    get labelY() {
      return v(a);
    },
    get label() {
      return i();
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
  }), ue({
    get label() {
      return i();
    },
    set label(p) {
      i(p), m();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(p) {
      s(p), m();
    },
    get style() {
      return l();
    },
    set style(p) {
      l(p), m();
    },
    get markerStart() {
      return u();
    },
    set markerStart(p) {
      u(p), m();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(p) {
      c(p), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(p) {
      d(p), m();
    },
    get sourceX() {
      return f();
    },
    set sourceX(p) {
      f(p), m();
    },
    get sourceY() {
      return g();
    },
    set sourceY(p) {
      g(p), m();
    },
    get sourcePosition() {
      return w();
    },
    set sourcePosition(p) {
      w(p), m();
    },
    get targetX() {
      return x();
    },
    set targetX(p) {
      x(p), m();
    },
    get targetY() {
      return $();
    },
    set targetY(p) {
      $(p), m();
    },
    get targetPosition() {
      return C();
    },
    set targetPosition(p) {
      C(p), m();
    }
  });
}
re(
  yi,
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
function wc(e, t) {
  const n = tt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  tt(n, [
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
  ]), le(t, !1);
  const r = te(), o = te(), a = te();
  let i = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), f = y(t, "sourceX", 12), g = y(t, "sourceY", 12), w = y(t, "sourcePosition", 12), x = y(t, "targetX", 12), $ = y(t, "targetY", 12), C = y(t, "targetPosition", 12);
  return se(
    () => (v(r), v(o), v(a), U(f()), U(g()), U(x()), U($()), U(w()), U(C())),
    () => {
      ((p) => (G(r, p[0]), G(o, p[1]), G(a, p[2])))(hi({
        sourceX: f(),
        sourceY: g(),
        targetX: x(),
        targetY: $(),
        sourcePosition: w(),
        targetPosition: C()
      }));
    }
  ), ft(), ze(), Eo(e, {
    get path() {
      return v(r);
    },
    get labelX() {
      return v(o);
    },
    get labelY() {
      return v(a);
    },
    get label() {
      return i();
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
  }), ue({
    get label() {
      return i();
    },
    set label(p) {
      i(p), m();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(p) {
      s(p), m();
    },
    get style() {
      return l();
    },
    set style(p) {
      l(p), m();
    },
    get markerStart() {
      return u();
    },
    set markerStart(p) {
      u(p), m();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(p) {
      c(p), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(p) {
      d(p), m();
    },
    get sourceX() {
      return f();
    },
    set sourceX(p) {
      f(p), m();
    },
    get sourceY() {
      return g();
    },
    set sourceY(p) {
      g(p), m();
    },
    get sourcePosition() {
      return w();
    },
    set sourcePosition(p) {
      w(p), m();
    },
    get targetX() {
      return x();
    },
    set targetX(p) {
      x(p), m();
    },
    get targetY() {
      return $();
    },
    set targetY(p) {
      $(p), m();
    },
    get targetPosition() {
      return C();
    },
    set targetPosition(p) {
      C(p), m();
    }
  });
}
re(
  wc,
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
function xc(e, t) {
  const n = tt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  tt(n, [
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
  ]), le(t, !1);
  const r = te(), o = te(), a = te();
  let i = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), f = y(t, "sourceX", 12), g = y(t, "sourceY", 12), w = y(t, "targetX", 12), x = y(t, "targetY", 12);
  return se(
    () => (v(r), v(o), v(a), U(f()), U(g()), U(w()), U(x())),
    () => {
      (($) => (G(r, $[0]), G(o, $[1]), G(a, $[2])))(Ca({
        sourceX: f(),
        sourceY: g(),
        targetX: w(),
        targetY: x()
      }));
    }
  ), ft(), ze(), Eo(e, {
    get path() {
      return v(r);
    },
    get labelX() {
      return v(o);
    },
    get labelY() {
      return v(a);
    },
    get label() {
      return i();
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
  }), ue({
    get label() {
      return i();
    },
    set label($) {
      i($), m();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle($) {
      s($), m();
    },
    get style() {
      return l();
    },
    set style($) {
      l($), m();
    },
    get markerStart() {
      return u();
    },
    set markerStart($) {
      u($), m();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd($) {
      c($), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth($) {
      d($), m();
    },
    get sourceX() {
      return f();
    },
    set sourceX($) {
      f($), m();
    },
    get sourceY() {
      return g();
    },
    set sourceY($) {
      g($), m();
    },
    get targetX() {
      return w();
    },
    set targetX($) {
      w($), m();
    },
    get targetY() {
      return x();
    },
    set targetY($) {
      x($), m();
    }
  });
}
re(
  xc,
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
function bc(e, t) {
  const n = tt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  tt(n, [
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
  ]), le(t, !1);
  const r = te(), o = te(), a = te();
  let i = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), f = y(t, "sourceX", 12), g = y(t, "sourceY", 12), w = y(t, "sourcePosition", 12), x = y(t, "targetX", 12), $ = y(t, "targetY", 12), C = y(t, "targetPosition", 12);
  return se(
    () => (v(r), v(o), v(a), U(f()), U(g()), U(x()), U($()), U(w()), U(C())),
    () => {
      ((p) => (G(r, p[0]), G(o, p[1]), G(a, p[2])))(hi({
        sourceX: f(),
        sourceY: g(),
        targetX: x(),
        targetY: $(),
        sourcePosition: w(),
        targetPosition: C(),
        borderRadius: 0
      }));
    }
  ), ft(), ze(), Eo(e, {
    get path() {
      return v(r);
    },
    get labelX() {
      return v(o);
    },
    get labelY() {
      return v(a);
    },
    get label() {
      return i();
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
  }), ue({
    get label() {
      return i();
    },
    set label(p) {
      i(p), m();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(p) {
      s(p), m();
    },
    get style() {
      return l();
    },
    set style(p) {
      l(p), m();
    },
    get markerStart() {
      return u();
    },
    set markerStart(p) {
      u(p), m();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(p) {
      c(p), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(p) {
      d(p), m();
    },
    get sourceX() {
      return f();
    },
    set sourceX(p) {
      f(p), m();
    },
    get sourceY() {
      return g();
    },
    set sourceY(p) {
      g(p), m();
    },
    get sourcePosition() {
      return w();
    },
    set sourcePosition(p) {
      w(p), m();
    },
    get targetX() {
      return x();
    },
    set targetX(p) {
      x(p), m();
    },
    get targetY() {
      return $();
    },
    set targetY(p) {
      $(p), m();
    },
    get targetPosition() {
      return C();
    },
    set targetPosition(p) {
      C(p), m();
    }
  });
}
re(
  bc,
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
function p0(e, t) {
  const n = e.set, r = t.set, o = q(e), a = q(t);
  let i = o.length === 0 && a.length > 0 ? a : o;
  e.set(i);
  const s = (l) => {
    const u = n(l);
    return i = u, r(i), u;
  };
  e.set = t.set = s, e.update = t.update = (l) => s(l(i));
}
function m0(e, t) {
  const n = e.set, r = t.set;
  let o = q(t);
  e.set(o);
  const a = (i) => {
    n(i), r(i), o = i;
  };
  e.set = t.set = a, e.update = t.update = (i) => a(i(o));
}
const y0 = (e, t, n) => {
  if (!n)
    return;
  const r = q(e), o = t.set, a = n.set;
  let i = n ? q(n) : { x: 0, y: 0, zoom: 1 };
  t.set(i), t.set = (s) => (o(s), a(s), i = s, s), n.set = (s) => (r == null || r.syncViewport(s), o(s), a(s), i = s, s), t.update = (s) => {
    t.set(s(i));
  }, n.update = (s) => {
    n.set(s(i));
  };
}, w0 = (e, t, n, r = [0, 0], o = di) => {
  const { subscribe: a, set: i, update: s } = me([]);
  let l = e, u = {}, c = !0;
  const d = (x) => (rc(x, t, n, {
    elevateNodesOnSelect: c,
    nodeOrigin: r,
    nodeExtent: o,
    defaults: u,
    checkEquality: !1
  }), l = x, i(l), l), f = (x) => d(x(l)), g = (x) => {
    u = x;
  }, w = (x) => {
    c = x.elevateNodesOnSelect ?? c;
  };
  return d(l), {
    subscribe: a,
    set: d,
    update: f,
    setDefaultOptions: g,
    setOptions: w
  };
}, x0 = (e, t, n, r) => {
  const { subscribe: o, set: a, update: i } = me([]);
  let s = e, l = {};
  const u = (f) => {
    const g = l ? f.map((w) => ({ ...l, ...w })) : f;
    ic(t, n, g), s = g, a(s);
  }, c = (f) => u(f(s)), d = (f) => {
    l = f;
  };
  return u(s), {
    subscribe: o,
    set: u,
    update: c,
    setDefaultOptions: d
  };
}, $c = {
  input: gc,
  output: vc,
  default: pi,
  group: hc
}, kc = {
  straight: xc,
  smoothstep: wc,
  default: yi,
  step: bc
}, b0 = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: a, nodeExtent: i }) => {
  const s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = a ?? [0, 0], f = i ?? di;
  rc(e, s, l, {
    nodeExtent: f,
    nodeOrigin: d,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), ic(u, c, t);
  let g = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const w = Co(s, {
      filter: (x) => !!((x.width || x.initialWidth) && (x.height || x.initialHeight))
    });
    g = ns(w, n, r, 0.5, 2, 0.1);
  }
  return {
    flowId: me(null),
    nodes: w0(e, s, l, d, f),
    nodeLookup: Yt(s),
    parentLookup: Yt(l),
    edgeLookup: Yt(c),
    visibleNodes: Yt([]),
    edges: x0(t, u, c),
    visibleEdges: Yt([]),
    connectionLookup: Yt(u),
    height: me(500),
    width: me(500),
    minZoom: me(0.5),
    maxZoom: me(2),
    nodeOrigin: me(d),
    nodeDragThreshold: me(1),
    nodeExtent: me(f),
    translateExtent: me(di),
    autoPanOnNodeDrag: me(!0),
    autoPanOnConnect: me(!0),
    fitViewOnInit: me(!1),
    fitViewOnInitDone: me(!1),
    fitViewOptions: me(void 0),
    panZoom: me(null),
    snapGrid: me(null),
    dragging: me(!1),
    selectionRect: me(null),
    selectionKeyPressed: me(!1),
    multiselectionKeyPressed: me(!1),
    deleteKeyPressed: me(!1),
    panActivationKeyPressed: me(!1),
    zoomActivationKeyPressed: me(!1),
    selectionRectMode: me(null),
    selectionMode: me(fi.Partial),
    nodeTypes: me($c),
    edgeTypes: me(kc),
    viewport: me(g),
    connectionMode: me(ur.Strict),
    domNode: me(null),
    connection: Yt(ba),
    connectionLineType: me(kr.Bezier),
    connectionRadius: me(20),
    isValidConnection: me(() => !0),
    nodesDraggable: me(!0),
    nodesConnectable: me(!0),
    elementsSelectable: me(!0),
    selectNodesOnDrag: me(!0),
    markers: Yt([]),
    defaultMarkerColor: me("#b1b1b7"),
    lib: Yt("svelte"),
    onlyRenderVisibleElements: me(!1),
    onerror: me(xp),
    ondelete: me(void 0),
    onedgecreate: me(void 0),
    onconnect: me(void 0),
    onconnectstart: me(void 0),
    onconnectend: me(void 0),
    onbeforedelete: me(void 0),
    nodesInitialized: me(!1),
    edgesInitialized: me(!1),
    viewportInitialized: me(!1),
    initialized: Yt(!1)
  };
};
function $0(e) {
  const t = Xn([
    e.edges,
    e.nodes,
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.viewport,
    e.width,
    e.height
  ], ([n, , r, o, a, i, s]) => o && i && s ? n.filter((l) => {
    const u = r.get(l.source), c = r.get(l.target);
    return u && c && Pp({
      sourceNode: u,
      targetNode: c,
      width: i,
      height: s,
      transform: [a.x, a.y, a.zoom]
    });
  }) : n);
  return Xn([t, e.nodes, e.nodeLookup, e.connectionMode, e.onerror], ([n, , r, o, a]) => n.reduce((i, s) => {
    const l = r.get(s.source), u = r.get(s.target);
    if (!l || !u)
      return i;
    const c = Op({
      id: s.id,
      sourceNode: l,
      targetNode: u,
      sourceHandle: s.sourceHandle || null,
      targetHandle: s.targetHandle || null,
      connectionMode: o,
      onError: a
    });
    return c && i.push({
      ...s,
      zIndex: Ep({
        selected: s.selected,
        zIndex: s.zIndex,
        sourceNode: l,
        targetNode: u,
        elevateOnSelect: !1
      }),
      ...c
    }), i;
  }, []));
}
function k0(e) {
  return Xn([
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.width,
    e.height,
    e.viewport,
    e.nodes
  ], ([t, n, r, o, a]) => {
    const i = [a.x, a.y, a.zoom];
    return n ? ju(t, { x: 0, y: 0, width: r, height: o }, i, !0) : Array.from(t.values());
  });
}
const Ri = Symbol();
function Cc({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: a, nodeExtent: i }) {
  const s = b0({
    nodes: e,
    edges: t,
    width: n,
    height: r,
    fitView: o,
    nodeOrigin: a,
    nodeExtent: i
  });
  function l(_) {
    s.nodeTypes.set({
      ...$c,
      ..._
    });
  }
  function u(_) {
    s.edgeTypes.set({
      ...kc,
      ..._
    });
  }
  function c(_) {
    const E = q(s.edges);
    s.edges.set(Np(_, E));
  }
  const d = (_, E = !1) => {
    var H;
    const A = q(s.nodeLookup);
    for (const [B, j] of _) {
      const F = (H = A.get(B)) == null ? void 0 : H.internals.userNode;
      F && (F.position = j.position, F.dragging = E);
    }
    s.nodes.update((B) => B);
  };
  function f(_) {
    var E, H, A;
    const B = q(s.nodeLookup), j = q(s.parentLookup), { changes: F, updatedInternals: ie } = Rp(_, B, q(s.parentLookup), q(s.domNode), q(s.nodeOrigin));
    if (ie) {
      if (Ap(B, j, { nodeOrigin: a, nodeExtent: i }), !q(s.fitViewOnInitDone) && q(s.fitViewOnInit)) {
        const Q = q(s.fitViewOptions), Y = w({
          ...Q,
          nodes: Q == null ? void 0 : Q.nodes
        });
        s.fitViewOnInitDone.set(Y);
      }
      for (const Q of F) {
        const Y = (E = B.get(Q.id)) == null ? void 0 : E.internals.userNode;
        if (Y)
          switch (Q.type) {
            case "dimensions": {
              const ce = { ...Y.measured, ...Q.dimensions };
              Q.setAttributes && (Y.width = ((H = Q.dimensions) == null ? void 0 : H.width) ?? Y.width, Y.height = ((A = Q.dimensions) == null ? void 0 : A.height) ?? Y.height), Y.measured = ce;
              break;
            }
            case "position":
              Y.position = Q.position ?? Y.position;
              break;
          }
      }
      s.nodes.update((Q) => Q), q(s.nodesInitialized) || s.nodesInitialized.set(!0);
    }
  }
  function g(_) {
    const E = q(s.panZoom), H = q(s.domNode);
    if (!E || !H)
      return Promise.resolve(!1);
    const { width: A, height: B } = rs(H), j = el(q(s.nodeLookup), _);
    return tl({
      nodes: j,
      width: A,
      height: B,
      minZoom: q(s.minZoom),
      maxZoom: q(s.maxZoom),
      panZoom: E
    }, _);
  }
  function w(_) {
    const E = q(s.panZoom);
    if (!E)
      return !1;
    const H = el(q(s.nodeLookup), _);
    return tl({
      nodes: H,
      width: q(s.width),
      height: q(s.height),
      minZoom: q(s.minZoom),
      maxZoom: q(s.maxZoom),
      panZoom: E
    }, _), H.size > 0;
  }
  function x(_, E) {
    const H = q(s.panZoom);
    return H ? H.scaleBy(_, E) : Promise.resolve(!1);
  }
  function $(_) {
    return x(1.2, _);
  }
  function C(_) {
    return x(1 / 1.2, _);
  }
  function p(_) {
    const E = q(s.panZoom);
    E && (E.setScaleExtent([_, q(s.maxZoom)]), s.minZoom.set(_));
  }
  function b(_) {
    const E = q(s.panZoom);
    E && (E.setScaleExtent([q(s.minZoom), _]), s.maxZoom.set(_));
  }
  function h(_) {
    const E = q(s.panZoom);
    E && (E.setTranslateExtent(_), s.translateExtent.set(_));
  }
  function k(_) {
    let E = !1;
    return _.forEach((H) => {
      H.selected && (H.selected = !1, E = !0);
    }), E;
  }
  function S(_) {
    var E;
    (E = q(s.panZoom)) == null || E.setClickDistance(_);
  }
  function M(_) {
    k((_ == null ? void 0 : _.nodes) || q(s.nodes)) && s.nodes.set(q(s.nodes)), k((_ == null ? void 0 : _.edges) || q(s.edges)) && s.edges.set(q(s.edges));
  }
  s.deleteKeyPressed.subscribe(async (_) => {
    var E;
    if (_) {
      const H = q(s.nodes), A = q(s.edges), B = H.filter((Q) => Q.selected), j = A.filter((Q) => Q.selected), { nodes: F, edges: ie } = await qu({
        nodesToRemove: B,
        edgesToRemove: j,
        nodes: H,
        edges: A,
        onBeforeDelete: q(s.onbeforedelete)
      });
      (F.length || ie.length) && (s.nodes.update((Q) => Q.filter((Y) => !F.some((ce) => ce.id === Y.id))), s.edges.update((Q) => Q.filter((Y) => !ie.some((ce) => ce.id === Y.id))), (E = q(s.ondelete)) == null || E({
        nodes: F,
        edges: ie
      }));
    }
  });
  function z(_) {
    const E = q(s.multiselectionKeyPressed);
    s.nodes.update((H) => H.map((A) => {
      const B = _.includes(A.id), j = E && A.selected || B;
      return A.selected = j, A;
    })), E || s.edges.update((H) => H.map((A) => (A.selected = !1, A)));
  }
  function V(_) {
    const E = q(s.multiselectionKeyPressed);
    s.edges.update((H) => H.map((A) => {
      const B = _.includes(A.id), j = E && A.selected || B;
      return A.selected = j, A;
    })), E || s.nodes.update((H) => H.map((A) => (A.selected = !1, A)));
  }
  function T(_) {
    var E;
    const H = (E = q(s.nodes)) == null ? void 0 : E.find((A) => A.id === _);
    if (!H) {
      console.warn("012", zr.error012(_));
      return;
    }
    s.selectionRect.set(null), s.selectionRectMode.set(null), H.selected ? H.selected && q(s.multiselectionKeyPressed) && M({ nodes: [H], edges: [] }) : z([_]);
  }
  function L(_) {
    const E = q(s.viewport);
    return Yp({
      delta: _,
      panZoom: q(s.panZoom),
      transform: [E.x, E.y, E.zoom],
      translateExtent: q(s.translateExtent),
      width: q(s.width),
      height: q(s.height)
    });
  }
  const O = me(ba), R = (_) => {
    O.set({ ..._ });
  };
  function P() {
    O.set(ba);
  }
  function N() {
    s.fitViewOnInitDone.set(!1), s.selectionRect.set(null), s.selectionRectMode.set(null), s.snapGrid.set(null), s.isValidConnection.set(() => !0), M(), P();
  }
  return {
    // state
    ...s,
    // derived state
    visibleEdges: $0(s),
    visibleNodes: k0(s),
    connection: Xn([O, s.viewport], ([_, E]) => _.inProgress ? {
      ..._,
      to: _o(_.to, [E.x, E.y, E.zoom])
    } : { ..._ }),
    markers: Xn([s.edges, s.defaultMarkerColor, s.flowId], ([_, E, H]) => Tp(_, { defaultColor: E, id: H })),
    initialized: (() => {
      let _ = !1;
      const E = q(s.nodes).length, H = q(s.edges).length;
      return Xn([s.nodesInitialized, s.edgesInitialized, s.viewportInitialized], ([A, B, j]) => _ || (E === 0 ? _ = j : H === 0 ? _ = j && A : _ = j && A && B, _));
    })(),
    // actions
    syncNodeStores: (_) => p0(s.nodes, _),
    syncEdgeStores: (_) => m0(s.edges, _),
    syncViewport: (_) => y0(s.panZoom, s.viewport, _),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: d,
    updateNodeInternals: f,
    zoomIn: $,
    zoomOut: C,
    fitView: (_) => g(_),
    setMinZoom: p,
    setMaxZoom: b,
    setTranslateExtent: h,
    setPaneClickDistance: S,
    unselectNodesAndEdges: M,
    addSelectedNodes: z,
    addSelectedEdges: V,
    handleNodeSelection: T,
    panBy: L,
    updateConnection: R,
    cancelConnection: P,
    reset: N
  };
}
function We() {
  const e = ar(Ri);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function C0({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: a, nodeExtent: i }) {
  const s = Cc({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: a, nodeExtent: i });
  return Mr(Ri, {
    getStore: () => s
  }), s;
}
function hl(e, t) {
  const { panZoom: n, minZoom: r, maxZoom: o, initialViewport: a, viewport: i, dragging: s, translateExtent: l, paneClickDistance: u } = t, c = s0({
    domNode: e,
    minZoom: r,
    maxZoom: o,
    translateExtent: l,
    viewport: a,
    paneClickDistance: u,
    onDraggingChange: s.set
  }), d = c.getViewport();
  return i.set(d), n.set(c), c.update(t), {
    update(f) {
      c.update(f);
    }
  };
}
var _0 = /* @__PURE__ */ ne('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const E0 = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function _c(e, t) {
  le(t, !1), Ge(e, E0);
  const [n, r] = et(), o = () => J(H, "$panActivationKeyPressed", n), a = () => J(R, "$minZoom", n), i = () => J(P, "$maxZoom", n), s = () => J(A, "$zoomActivationKeyPressed", n), l = () => J(O, "$selectionRect", n), u = () => J(_, "$translateExtent", n), c = () => J(E, "$lib", n), d = te(), f = te(), g = te();
  let w = y(t, "initialViewport", 12, void 0), x = y(t, "onMoveStart", 12, void 0), $ = y(t, "onMove", 12, void 0), C = y(t, "onMoveEnd", 12, void 0), p = y(t, "panOnScrollMode", 12), b = y(t, "preventScrolling", 12), h = y(t, "zoomOnScroll", 12), k = y(t, "zoomOnDoubleClick", 12), S = y(t, "zoomOnPinch", 12), M = y(t, "panOnDrag", 12), z = y(t, "panOnScroll", 12), V = y(t, "paneClickDistance", 12);
  const {
    viewport: T,
    panZoom: L,
    selectionRect: O,
    minZoom: R,
    maxZoom: P,
    dragging: N,
    translateExtent: _,
    lib: E,
    panActivationKeyPressed: H,
    zoomActivationKeyPressed: A,
    viewportInitialized: B
  } = We(), j = (Y) => T.set({
    x: Y[0],
    y: Y[1],
    zoom: Y[2]
  });
  bn(() => {
    oi(B, !0);
  }), se(() => U(w()), () => {
    G(d, w() || { x: 0, y: 0, zoom: 1 });
  }), se(
    () => (o(), U(M())),
    () => {
      G(f, o() || M());
    }
  ), se(
    () => (o(), U(z())),
    () => {
      G(g, o() || z());
    }
  ), ft(), ze();
  var F = _0(), ie = W(F);
  ht(ie, t, "default", {}), K(F), vt(F, (Y, ce) => hl == null ? void 0 : hl(Y, ce), () => ({
    viewport: T,
    minZoom: a(),
    maxZoom: i(),
    initialViewport: v(d),
    dragging: N,
    panZoom: L,
    onPanZoomStart: x(),
    onPanZoom: $(),
    onPanZoomEnd: C(),
    zoomOnScroll: h(),
    zoomOnDoubleClick: k(),
    zoomOnPinch: S(),
    panOnScroll: v(g),
    panOnDrag: v(f),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: p() || Wn.Free,
    zoomActivationKeyPressed: s(),
    preventScrolling: typeof b() == "boolean" ? b() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: V(),
    onTransformChange: j
  })), D(e, F);
  var Q = ue({
    get initialViewport() {
      return w();
    },
    set initialViewport(Y) {
      w(Y), m();
    },
    get onMoveStart() {
      return x();
    },
    set onMoveStart(Y) {
      x(Y), m();
    },
    get onMove() {
      return $();
    },
    set onMove(Y) {
      $(Y), m();
    },
    get onMoveEnd() {
      return C();
    },
    set onMoveEnd(Y) {
      C(Y), m();
    },
    get panOnScrollMode() {
      return p();
    },
    set panOnScrollMode(Y) {
      p(Y), m();
    },
    get preventScrolling() {
      return b();
    },
    set preventScrolling(Y) {
      b(Y), m();
    },
    get zoomOnScroll() {
      return h();
    },
    set zoomOnScroll(Y) {
      h(Y), m();
    },
    get zoomOnDoubleClick() {
      return k();
    },
    set zoomOnDoubleClick(Y) {
      k(Y), m();
    },
    get zoomOnPinch() {
      return S();
    },
    set zoomOnPinch(Y) {
      S(Y), m();
    },
    get panOnDrag() {
      return M();
    },
    set panOnDrag(Y) {
      M(Y), m();
    },
    get panOnScroll() {
      return z();
    },
    set panOnScroll(Y) {
      z(Y), m();
    },
    get paneClickDistance() {
      return V();
    },
    set paneClickDistance(Y) {
      V(Y), m();
    }
  });
  return r(), Q;
}
re(
  _c,
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
function pl(e, t) {
  return (n) => {
    n.target === t && (e == null || e(n));
  };
}
function ml(e) {
  return (t) => {
    const n = e.includes(t.id);
    return t.selected !== n && (t.selected = n), t;
  };
}
var P0 = /* @__PURE__ */ ne("<div><!></div>");
const M0 = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function Ec(e, t) {
  le(t, !1), Ge(e, M0);
  const [n, r] = et(), o = () => J(P, "$panActivationKeyPressed", n), a = () => J(O, "$selectionKeyPressed", n), i = () => J(T, "$selectionRect", n), s = () => J(V, "$elementsSelectable", n), l = () => J(L, "$selectionRectMode", n), u = () => J(S, "$edges", n), c = () => J(k, "$nodeLookup", n), d = () => J(M, "$viewport", n), f = () => J(R, "$selectionMode", n), g = () => J(z, "$dragging", n), w = te(), x = te(), $ = te();
  let C = y(t, "panOnDrag", 12, void 0), p = y(t, "selectionOnDrag", 12, void 0);
  const b = Hi(), {
    nodes: h,
    nodeLookup: k,
    edges: S,
    viewport: M,
    dragging: z,
    elementsSelectable: V,
    selectionRect: T,
    selectionRectMode: L,
    selectionKeyPressed: O,
    selectionMode: R,
    panActivationKeyPressed: P,
    unselectNodesAndEdges: N
  } = We();
  let _ = te(), E = null, H = [], A = !1;
  function B(oe) {
    if (A) {
      A = !1;
      return;
    }
    b("paneclick", { event: oe }), N(), L.set(null);
  }
  function j(oe) {
    var ye, Ye;
    if (E = v(_).getBoundingClientRect(), !V || !v(x) || oe.button !== 0 || oe.target !== v(_) || !E)
      return;
    (Ye = (ye = oe.target) == null ? void 0 : ye.setPointerCapture) == null || Ye.call(ye, oe.pointerId);
    const { x: Le, y: Ze } = Nn(oe, E);
    N(), T.set({
      width: 0,
      height: 0,
      startX: Le,
      startY: Ze,
      x: Le,
      y: Ze
    });
  }
  function F(oe) {
    if (!v(x) || !E || !i())
      return;
    A = !0;
    const ye = Nn(oe, E), Ye = i().startX ?? 0, Le = i().startY ?? 0, Ze = {
      ...i(),
      x: ye.x < Ye ? ye.x : Ye,
      y: ye.y < Le ? ye.y : Le,
      width: Math.abs(ye.x - Ye),
      height: Math.abs(ye.y - Le)
    }, X = H.map((Ve) => Ve.id), fe = $a(H, u()).map((Ve) => Ve.id);
    H = ju(
      c(),
      Ze,
      [
        d().x,
        d().y,
        d().zoom
      ],
      f() === fi.Partial,
      !0
    );
    const he = $a(H, u()).map((Ve) => Ve.id), Ae = H.map((Ve) => Ve.id);
    (X.length !== Ae.length || Ae.some((Ve) => !X.includes(Ve))) && h.update((Ve) => Ve.map(ml(Ae))), (fe.length !== he.length || he.some((Ve) => !fe.includes(Ve))) && S.update((Ve) => Ve.map(ml(he))), L.set("user"), T.set(Ze);
  }
  function ie(oe) {
    var ye, Ye;
    oe.button === 0 && ((Ye = (ye = oe.target) == null ? void 0 : ye.releasePointerCapture) == null || Ye.call(ye, oe.pointerId), !v(x) && l() === "user" && oe.target === v(_) && (B == null || B(oe)), T.set(null), H.length > 0 && oi(L, "nodes"), a() && (A = !1));
  }
  const Q = (oe) => {
    var ye;
    if (Array.isArray(v(w)) && (ye = v(w)) != null && ye.includes(2)) {
      oe.preventDefault();
      return;
    }
    b("panecontextmenu", { event: oe });
  };
  se(
    () => (o(), U(C())),
    () => {
      G(w, o() || C());
    }
  ), se(
    () => (a(), i(), U(p()), v(w)),
    () => {
      G(x, a() || i() || p() && v(w) !== !0);
    }
  ), se(
    () => (s(), v(x), l()),
    () => {
      G($, s() && (v(x) || l() === "user"));
    }
  ), ft(), ze();
  var Y = P0(), ce = /* @__PURE__ */ Se(() => v($) ? void 0 : pl(B, v(_))), ke = /* @__PURE__ */ Se(() => pl(Q, v(_)));
  let $e;
  var ve = W(Y);
  ht(ve, t, "default", {}), K(Y), Hn(Y, (oe) => G(_, oe), () => v(_)), _e(
    (oe) => $e = $t(Y, 1, "svelte-flow__pane svelte-1esy7hx", null, $e, {
      draggable: oe,
      dragging: g(),
      selection: v(x)
    }),
    [
      () => C() === !0 || Array.isArray(C()) && C().includes(0)
    ],
    ge
  ), Je("click", Y, function(...oe) {
    var ye;
    (ye = v(ce)) == null || ye.apply(this, oe);
  }), Je("pointerdown", Y, function(...oe) {
    var ye;
    (ye = v($) ? j : void 0) == null || ye.apply(this, oe);
  }), Je("pointermove", Y, function(...oe) {
    var ye;
    (ye = v($) ? F : void 0) == null || ye.apply(this, oe);
  }), Je("pointerup", Y, function(...oe) {
    var ye;
    (ye = v($) ? ie : void 0) == null || ye.apply(this, oe);
  }), Je("contextmenu", Y, function(...oe) {
    var ye;
    (ye = v(ke)) == null || ye.apply(this, oe);
  }), D(e, Y);
  var Ne = ue({
    get panOnDrag() {
      return C();
    },
    set panOnDrag(oe) {
      C(oe), m();
    },
    get selectionOnDrag() {
      return p();
    },
    set selectionOnDrag(oe) {
      p(oe), m();
    }
  });
  return r(), Ne;
}
re(Ec, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var S0 = /* @__PURE__ */ ne('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const N0 = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function Pc(e, t) {
  le(t, !1), Ge(e, N0);
  const [n, r] = et(), o = () => J(a, "$viewport", n), { viewport: a } = We();
  ze();
  var i = S0(), s = W(i);
  ht(s, t, "default", {}), K(i), _e(() => ae(i, "style", `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), D(e, i), ue(), r();
}
re(Pc, {}, ["default"], [], !0);
function wi(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: a, onNodeMouseDown: i } = t, s = Wp({
    onDrag: r,
    onDragStart: o,
    onDragStop: a,
    onNodeMouseDown: i,
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
function z0({ width: e, height: t, initialWidth: n, initialHeight: r, measuredWidth: o, measuredHeight: a }) {
  if (o === void 0 && a === void 0) {
    const i = e ?? n, s = t ?? r;
    return {
      width: i ? `width:${i}px;` : "",
      height: s ? `height:${s}px;` : ""
    };
  }
  return {
    width: e ? `width:${e}px;` : "",
    height: t ? `height:${t}px;` : ""
  };
}
var V0 = /* @__PURE__ */ ne("<div><!></div>");
function Mc(e, t) {
  le(t, !1);
  const [n, r] = et(), o = () => J(ke, "$nodeTypes", n), a = () => J(ye, "$elementsSelectable", n), i = () => J(Ye, "$nodesDraggable", n), s = () => J(fe, "$connectableStore", n), l = te(void 0, !0), u = te(void 0, !0), c = te(void 0, !0), d = te(void 0, !0);
  let f = y(t, "node", 13), g = y(t, "id", 13), w = y(t, "data", 29, () => ({})), x = y(t, "selected", 13, !1), $ = y(t, "draggable", 13, void 0), C = y(t, "selectable", 13, void 0), p = y(t, "connectable", 13, !0), b = y(t, "deletable", 13, !0), h = y(t, "hidden", 13, !1), k = y(t, "dragging", 13, !1), S = y(t, "resizeObserver", 13, null), M = y(t, "style", 13, void 0), z = y(t, "type", 13, "default"), V = y(t, "isParent", 13, !1), T = y(t, "positionX", 13), L = y(t, "positionY", 13), O = y(t, "sourcePosition", 13, void 0), R = y(t, "targetPosition", 13, void 0), P = y(t, "zIndex", 13), N = y(t, "measuredWidth", 13, void 0), _ = y(t, "measuredHeight", 13, void 0), E = y(t, "initialWidth", 13, void 0), H = y(t, "initialHeight", 13, void 0), A = y(t, "width", 13, void 0), B = y(t, "height", 13, void 0), j = y(t, "dragHandle", 13, void 0), F = y(t, "initialized", 13, !1), ie = y(t, "parentId", 13, void 0), Q = y(t, "nodeClickDistance", 13, void 0), Y = y(t, "class", 13, "");
  const ce = We(), {
    nodeTypes: ke,
    nodeDragThreshold: $e,
    selectNodesOnDrag: ve,
    handleNodeSelection: Ne,
    updateNodeInternals: oe,
    elementsSelectable: ye,
    nodesDraggable: Ye
  } = ce;
  let Le = te(void 0, !0), Ze = te(null, !0);
  const X = Hi(), fe = me(p());
  let he = te(void 0, !0), Ae = te(void 0, !0), Ve = te(void 0, !0);
  Mr("svelteflow__node_id", g()), Mr("svelteflow__node_connectable", fe), Wa(() => {
    var ee;
    v(Ze) && ((ee = S()) == null || ee.unobserve(v(Ze)));
  });
  function je(ee) {
    C() && (!q(ve) || !$() || q($e) > 0) && Ne(g()), X("nodeclick", { node: f().internals.userNode, event: ee });
  }
  se(() => U(z()), () => {
    G(l, z() || "default");
  }), se(() => (o(), v(l)), () => {
    G(u, !!o()[v(l)]);
  }), se(
    () => (o(), v(l), pi),
    () => {
      G(c, o()[v(l)] || pi);
    }
  ), se(
    () => (v(u), U(z())),
    () => {
      v(u) || console.warn("003", zr.error003(z()));
    }
  ), se(
    () => (U(A()), U(B()), U(E()), U(H()), U(N()), U(_())),
    () => {
      G(d, z0({
        width: A(),
        height: B(),
        initialWidth: E(),
        initialHeight: H(),
        measuredWidth: N(),
        measuredHeight: _()
      }));
    }
  ), se(() => U(p()), () => {
    fe.set(!!p());
  }), se(
    () => (v(he), v(l), v(Ae), U(O()), v(Ve), U(R()), U(g()), v(Le)),
    () => {
      (v(he) && v(l) !== v(he) || v(Ae) && O() !== v(Ae) || v(Ve) && R() !== v(Ve)) && requestAnimationFrame(() => oe(/* @__PURE__ */ new Map([
        [
          g(),
          {
            id: g(),
            nodeElement: v(Le),
            force: !0
          }
        ]
      ]))), G(he, v(l)), G(Ae, O()), G(Ve, R());
    }
  ), se(
    () => (U(S()), v(Le), v(Ze), U(F())),
    () => {
      S() && (v(Le) !== v(Ze) || !F()) && (v(Ze) && S().unobserve(v(Ze)), v(Le) && S().observe(v(Le)), G(Ze, v(Le)));
    }
  ), ft(), ze(!0);
  var Oe = Qe(), Ke = we(Oe);
  {
    var rt = (ee) => {
      var Be = V0();
      let de;
      var ln = W(Be);
      const qt = /* @__PURE__ */ ge(() => x() ?? !1), un = /* @__PURE__ */ ge(() => C() ?? a() ?? !0), Pe = /* @__PURE__ */ ge(() => b() ?? !0), nt = /* @__PURE__ */ ge(() => $() ?? i() ?? !0);
      du(ln, () => v(c), (pe, ot) => {
        ot(pe, {
          get data() {
            return w();
          },
          get id() {
            return g();
          },
          get selected() {
            return v(qt);
          },
          get selectable() {
            return v(un);
          },
          get deletable() {
            return v(Pe);
          },
          get sourcePosition() {
            return O();
          },
          get targetPosition() {
            return R();
          },
          get zIndex() {
            return P();
          },
          get dragging() {
            return k();
          },
          get draggable() {
            return v(nt);
          },
          get dragHandle() {
            return j();
          },
          get parentId() {
            return ie();
          },
          get type() {
            return v(l);
          },
          get isConnectable() {
            return s();
          },
          get positionAbsoluteX() {
            return T();
          },
          get positionAbsoluteY() {
            return L();
          },
          get width() {
            return A();
          },
          get height() {
            return B();
          }
        });
      }), K(Be), vt(Be, (pe, ot) => wi == null ? void 0 : wi(pe, ot), () => ({
        nodeId: g(),
        isSelectable: C(),
        disabled: !1,
        handleSelector: j(),
        noDragClass: "nodrag",
        nodeClickDistance: Q(),
        onNodeMouseDown: Ne,
        onDrag: (pe, ot, at, Rt) => {
          X("nodedrag", { event: pe, targetNode: at, nodes: Rt });
        },
        onDragStart: (pe, ot, at, Rt) => {
          X("nodedragstart", { event: pe, targetNode: at, nodes: Rt });
        },
        onDragStop: (pe, ot, at, Rt) => {
          X("nodedragstop", { event: pe, targetNode: at, nodes: Rt });
        },
        store: ce
      })), Hn(Be, (pe) => G(Le, pe), () => v(Le)), Dt(() => Je("click", Be, je)), Dt(() => Je("mouseenter", Be, (pe) => X("nodemouseenter", { node: f(), event: pe }))), Dt(() => Je("mouseleave", Be, (pe) => X("nodemouseleave", { node: f(), event: pe }))), Dt(() => Je("mousemove", Be, (pe) => X("nodemousemove", { node: f(), event: pe }))), Dt(() => Je("contextmenu", Be, (pe) => X("nodecontextmenu", { node: f(), event: pe }))), _e(
        (pe) => {
          ae(Be, "data-id", g()), de = $t(Be, 1, xn(pe), null, de, {
            dragging: k(),
            selected: x(),
            draggable: $(),
            connectable: p(),
            selectable: C(),
            nopan: $(),
            parent: V()
          }), ae(Be, "style", `${M() ?? ""};${v(d).width ?? ""}${v(d).height ?? ""}`), it(Be, "z-index", P()), it(Be, "transform", `translate(${T() ?? ""}px, ${L() ?? ""}px)`), it(Be, "visibility", F() ? "visible" : "hidden");
        },
        [
          () => _t([
            "svelte-flow__node",
            `svelte-flow__node-${v(l)}`,
            Y()
          ])
        ],
        ge
      ), D(ee, Be);
    };
    be(Ke, (ee) => {
      h() || ee(rt);
    });
  }
  D(e, Oe);
  var gt = ue({
    get node() {
      return f();
    },
    set node(ee) {
      f(ee), m();
    },
    get id() {
      return g();
    },
    set id(ee) {
      g(ee), m();
    },
    get data() {
      return w();
    },
    set data(ee) {
      w(ee), m();
    },
    get selected() {
      return x();
    },
    set selected(ee) {
      x(ee), m();
    },
    get draggable() {
      return $();
    },
    set draggable(ee) {
      $(ee), m();
    },
    get selectable() {
      return C();
    },
    set selectable(ee) {
      C(ee), m();
    },
    get connectable() {
      return p();
    },
    set connectable(ee) {
      p(ee), m();
    },
    get deletable() {
      return b();
    },
    set deletable(ee) {
      b(ee), m();
    },
    get hidden() {
      return h();
    },
    set hidden(ee) {
      h(ee), m();
    },
    get dragging() {
      return k();
    },
    set dragging(ee) {
      k(ee), m();
    },
    get resizeObserver() {
      return S();
    },
    set resizeObserver(ee) {
      S(ee), m();
    },
    get style() {
      return M();
    },
    set style(ee) {
      M(ee), m();
    },
    get type() {
      return z();
    },
    set type(ee) {
      z(ee), m();
    },
    get isParent() {
      return V();
    },
    set isParent(ee) {
      V(ee), m();
    },
    get positionX() {
      return T();
    },
    set positionX(ee) {
      T(ee), m();
    },
    get positionY() {
      return L();
    },
    set positionY(ee) {
      L(ee), m();
    },
    get sourcePosition() {
      return O();
    },
    set sourcePosition(ee) {
      O(ee), m();
    },
    get targetPosition() {
      return R();
    },
    set targetPosition(ee) {
      R(ee), m();
    },
    get zIndex() {
      return P();
    },
    set zIndex(ee) {
      P(ee), m();
    },
    get measuredWidth() {
      return N();
    },
    set measuredWidth(ee) {
      N(ee), m();
    },
    get measuredHeight() {
      return _();
    },
    set measuredHeight(ee) {
      _(ee), m();
    },
    get initialWidth() {
      return E();
    },
    set initialWidth(ee) {
      E(ee), m();
    },
    get initialHeight() {
      return H();
    },
    set initialHeight(ee) {
      H(ee), m();
    },
    get width() {
      return A();
    },
    set width(ee) {
      A(ee), m();
    },
    get height() {
      return B();
    },
    set height(ee) {
      B(ee), m();
    },
    get dragHandle() {
      return j();
    },
    set dragHandle(ee) {
      j(ee), m();
    },
    get initialized() {
      return F();
    },
    set initialized(ee) {
      F(ee), m();
    },
    get parentId() {
      return ie();
    },
    set parentId(ee) {
      ie(ee), m();
    },
    get nodeClickDistance() {
      return Q();
    },
    set nodeClickDistance(ee) {
      Q(ee), m();
    },
    get class() {
      return Y();
    },
    set class(ee) {
      Y(ee), m();
    }
  });
  return r(), gt;
}
re(
  Mc,
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
var H0 = /* @__PURE__ */ ne('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const O0 = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function Sc(e, t) {
  le(t, !1), Ge(e, O0);
  const [n, r] = et(), o = () => J(c, "$visibleNodes", n), a = () => J(d, "$nodesDraggable", n), i = () => J(g, "$elementsSelectable", n), s = () => J(f, "$nodesConnectable", n), l = () => J(x, "$parentLookup", n);
  let u = y(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: d,
    nodesConnectable: f,
    elementsSelectable: g,
    updateNodeInternals: w,
    parentLookup: x
  } = We(), $ = typeof ResizeObserver > "u" ? null : new ResizeObserver((b) => {
    const h = /* @__PURE__ */ new Map();
    b.forEach((k) => {
      const S = k.target.getAttribute("data-id");
      h.set(S, { id: S, nodeElement: k.target, force: !0 });
    }), w(h);
  });
  Wa(() => {
    $ == null || $.disconnect();
  }), ze();
  var C = H0();
  It(C, 5, o, (b) => b.id, (b, h) => {
    const k = /* @__PURE__ */ ge(() => !!v(h).selected), S = /* @__PURE__ */ ge(() => !!v(h).hidden), M = /* @__PURE__ */ ge(() => !!(v(h).draggable || a() && typeof v(h).draggable > "u")), z = /* @__PURE__ */ ge(() => !!(v(h).selectable || i() && typeof v(h).selectable > "u")), V = /* @__PURE__ */ ge(() => !!(v(h).connectable || s() && typeof v(h).connectable > "u")), T = /* @__PURE__ */ ge(() => v(h).deletable ?? !0), L = /* @__PURE__ */ ge(() => l().has(v(h).id)), O = /* @__PURE__ */ ge(() => v(h).type ?? "default"), R = /* @__PURE__ */ ge(() => v(h).internals.z ?? 0), P = /* @__PURE__ */ ge(() => Qu(v(h)));
    Mc(b, {
      get node() {
        return v(h);
      },
      get id() {
        return v(h).id;
      },
      get data() {
        return v(h).data;
      },
      get selected() {
        return v(k);
      },
      get hidden() {
        return v(S);
      },
      get draggable() {
        return v(M);
      },
      get selectable() {
        return v(z);
      },
      get connectable() {
        return v(V);
      },
      get deletable() {
        return v(T);
      },
      get positionX() {
        return v(h).internals.positionAbsolute.x;
      },
      get positionY() {
        return v(h).internals.positionAbsolute.y;
      },
      get isParent() {
        return v(L);
      },
      get style() {
        return v(h).style;
      },
      get class() {
        return v(h).class;
      },
      get type() {
        return v(O);
      },
      get sourcePosition() {
        return v(h).sourcePosition;
      },
      get targetPosition() {
        return v(h).targetPosition;
      },
      get dragging() {
        return v(h).dragging;
      },
      get zIndex() {
        return v(R);
      },
      get dragHandle() {
        return v(h).dragHandle;
      },
      get initialized() {
        return v(P);
      },
      get width() {
        return v(h).width;
      },
      get height() {
        return v(h).height;
      },
      get initialWidth() {
        return v(h).initialWidth;
      },
      get initialHeight() {
        return v(h).initialHeight;
      },
      get measuredWidth() {
        return v(h).measured.width;
      },
      get measuredHeight() {
        return v(h).measured.height;
      },
      get parentId() {
        return v(h).parentId;
      },
      resizeObserver: $,
      get nodeClickDistance() {
        return u();
      },
      $$events: {
        nodeclick(N) {
          De.call(this, t, N);
        },
        nodemouseenter(N) {
          De.call(this, t, N);
        },
        nodemousemove(N) {
          De.call(this, t, N);
        },
        nodemouseleave(N) {
          De.call(this, t, N);
        },
        nodedrag(N) {
          De.call(this, t, N);
        },
        nodedragstart(N) {
          De.call(this, t, N);
        },
        nodedragstop(N) {
          De.call(this, t, N);
        },
        nodecontextmenu(N) {
          De.call(this, t, N);
        }
      }
    });
  }), K(C), D(e, C);
  var p = ue({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance(b) {
      u(b), m();
    }
  });
  return r(), p;
}
re(Sc, { nodeClickDistance: {} }, [], [], !0);
var T0 = /* @__PURE__ */ xe('<svg><g role="img"><!></g></svg>');
function Nc(e, t) {
  le(t, !1);
  const [n, r] = et(), o = () => J(Y, "$edgeTypes", n), a = () => J(ce, "$flowId", n), i = () => J(ke, "$elementsSelectable", n), s = () => J(Q, "$edgeLookup", n), l = te(void 0, !0), u = te(void 0, !0), c = te(void 0, !0), d = te(void 0, !0), f = te(void 0, !0);
  let g = y(t, "id", 13), w = y(t, "type", 13, "default"), x = y(t, "source", 13, ""), $ = y(t, "target", 13, ""), C = y(t, "data", 29, () => ({})), p = y(t, "style", 13, void 0), b = y(t, "zIndex", 13, void 0), h = y(t, "animated", 13, !1), k = y(t, "selected", 13, !1), S = y(t, "selectable", 13, void 0), M = y(t, "deletable", 13, void 0), z = y(t, "hidden", 13, !1), V = y(t, "label", 13, void 0), T = y(t, "labelStyle", 13, void 0), L = y(t, "markerStart", 13, void 0), O = y(t, "markerEnd", 13, void 0), R = y(t, "sourceHandle", 13, void 0), P = y(t, "targetHandle", 13, void 0), N = y(t, "sourceX", 13), _ = y(t, "sourceY", 13), E = y(t, "targetX", 13), H = y(t, "targetY", 13), A = y(t, "sourcePosition", 13), B = y(t, "targetPosition", 13), j = y(t, "ariaLabel", 13, void 0), F = y(t, "interactionWidth", 13, void 0), ie = y(t, "class", 13, "");
  Mr("svelteflow__edge_id", g());
  const {
    edgeLookup: Q,
    edgeTypes: Y,
    flowId: ce,
    elementsSelectable: ke
  } = We(), $e = Hi(), ve = mc();
  function Ne(X) {
    const fe = s().get(g());
    fe && (ve(g()), $e("edgeclick", { event: X, edge: fe }));
  }
  function oe(X, fe) {
    const he = s().get(g());
    he && $e(fe, { event: X, edge: he });
  }
  se(() => U(w()), () => {
    G(l, w() || "default");
  }), se(
    () => (o(), v(l), yi),
    () => {
      G(u, o()[v(l)] || yi);
    }
  ), se(
    () => (U(L()), a()),
    () => {
      G(c, L() ? `url('#${_a(L(), a())}')` : void 0);
    }
  ), se(
    () => (U(O()), a()),
    () => {
      G(d, O() ? `url('#${_a(O(), a())}')` : void 0);
    }
  ), se(
    () => (U(S()), i()),
    () => {
      G(f, S() ?? i());
    }
  ), ft(), ze(!0);
  var ye = Qe(), Ye = we(ye);
  {
    var Le = (X) => {
      var fe = T0(), he = W(fe);
      let Ae;
      var Ve = W(he);
      const je = /* @__PURE__ */ ge(() => M() ?? !0);
      du(Ve, () => v(u), (Oe, Ke) => {
        Ke(Oe, {
          get id() {
            return g();
          },
          get source() {
            return x();
          },
          get target() {
            return $();
          },
          get sourceX() {
            return N();
          },
          get sourceY() {
            return _();
          },
          get targetX() {
            return E();
          },
          get targetY() {
            return H();
          },
          get sourcePosition() {
            return A();
          },
          get targetPosition() {
            return B();
          },
          get animated() {
            return h();
          },
          get selected() {
            return k();
          },
          get label() {
            return V();
          },
          get labelStyle() {
            return T();
          },
          get data() {
            return C();
          },
          get style() {
            return p();
          },
          get interactionWidth() {
            return F();
          },
          get selectable() {
            return v(f);
          },
          get deletable() {
            return v(je);
          },
          get type() {
            return v(l);
          },
          get sourceHandleId() {
            return R();
          },
          get targetHandleId() {
            return P();
          },
          get markerStart() {
            return v(c);
          },
          get markerEnd() {
            return v(d);
          }
        });
      }), K(he), K(fe), _e(
        (Oe) => {
          it(fe, "z-index", b()), Ae = $t(he, 0, xn(Oe), null, Ae, {
            animated: h(),
            selected: k(),
            selectable: v(f)
          }), ae(he, "data-id", g()), ae(he, "aria-label", j() === null ? void 0 : j() ? j() : `Edge from ${x()} to ${$()}`);
        },
        [
          () => _t(["svelte-flow__edge", ie()])
        ],
        ge
      ), Je("click", he, Ne), Je("contextmenu", he, (Oe) => {
        oe(Oe, "edgecontextmenu");
      }), Je("mouseenter", he, (Oe) => {
        oe(Oe, "edgemouseenter");
      }), Je("mouseleave", he, (Oe) => {
        oe(Oe, "edgemouseleave");
      }), D(X, fe);
    };
    be(Ye, (X) => {
      z() || X(Le);
    });
  }
  D(e, ye);
  var Ze = ue({
    get id() {
      return g();
    },
    set id(X) {
      g(X), m();
    },
    get type() {
      return w();
    },
    set type(X) {
      w(X), m();
    },
    get source() {
      return x();
    },
    set source(X) {
      x(X), m();
    },
    get target() {
      return $();
    },
    set target(X) {
      $(X), m();
    },
    get data() {
      return C();
    },
    set data(X) {
      C(X), m();
    },
    get style() {
      return p();
    },
    set style(X) {
      p(X), m();
    },
    get zIndex() {
      return b();
    },
    set zIndex(X) {
      b(X), m();
    },
    get animated() {
      return h();
    },
    set animated(X) {
      h(X), m();
    },
    get selected() {
      return k();
    },
    set selected(X) {
      k(X), m();
    },
    get selectable() {
      return S();
    },
    set selectable(X) {
      S(X), m();
    },
    get deletable() {
      return M();
    },
    set deletable(X) {
      M(X), m();
    },
    get hidden() {
      return z();
    },
    set hidden(X) {
      z(X), m();
    },
    get label() {
      return V();
    },
    set label(X) {
      V(X), m();
    },
    get labelStyle() {
      return T();
    },
    set labelStyle(X) {
      T(X), m();
    },
    get markerStart() {
      return L();
    },
    set markerStart(X) {
      L(X), m();
    },
    get markerEnd() {
      return O();
    },
    set markerEnd(X) {
      O(X), m();
    },
    get sourceHandle() {
      return R();
    },
    set sourceHandle(X) {
      R(X), m();
    },
    get targetHandle() {
      return P();
    },
    set targetHandle(X) {
      P(X), m();
    },
    get sourceX() {
      return N();
    },
    set sourceX(X) {
      N(X), m();
    },
    get sourceY() {
      return _();
    },
    set sourceY(X) {
      _(X), m();
    },
    get targetX() {
      return E();
    },
    set targetX(X) {
      E(X), m();
    },
    get targetY() {
      return H();
    },
    set targetY(X) {
      H(X), m();
    },
    get sourcePosition() {
      return A();
    },
    set sourcePosition(X) {
      A(X), m();
    },
    get targetPosition() {
      return B();
    },
    set targetPosition(X) {
      B(X), m();
    },
    get ariaLabel() {
      return j();
    },
    set ariaLabel(X) {
      j(X), m();
    },
    get interactionWidth() {
      return F();
    },
    set interactionWidth(X) {
      F(X), m();
    },
    get class() {
      return ie();
    },
    set class(X) {
      ie(X), m();
    }
  });
  return r(), Ze;
}
re(
  Nc,
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
function zc(e, t) {
  le(t, !1);
  let n = y(t, "onMount", 12, void 0), r = y(t, "onDestroy", 12, void 0);
  return bn(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), ze(), ue({
    get onMount() {
      return n();
    },
    set onMount(o) {
      n(o), m();
    },
    get onDestroy() {
      return r();
    },
    set onDestroy(o) {
      r(o), m();
    }
  });
}
re(zc, { onMount: {}, onDestroy: {} }, [], [], !0);
var D0 = /* @__PURE__ */ xe("<defs></defs>");
function Vc(e, t) {
  le(t, !1);
  const [n, r] = et(), o = () => J(a, "$markers", n), { markers: a } = We();
  ze();
  var i = D0();
  It(i, 5, o, (s) => s.id, (s, l) => {
    Hc(s, ut(() => v(l)));
  }), K(i), D(e, i), ue(), r();
}
re(Vc, {}, [], [], !0);
var L0 = /* @__PURE__ */ xe('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), A0 = /* @__PURE__ */ xe('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), I0 = /* @__PURE__ */ xe('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Hc(e, t) {
  le(t, !1);
  let n = y(t, "id", 12), r = y(t, "type", 12), o = y(t, "width", 12, 12.5), a = y(t, "height", 12, 12.5), i = y(t, "markerUnits", 12, "strokeWidth"), s = y(t, "orient", 12, "auto-start-reverse"), l = y(t, "color", 12, void 0), u = y(t, "strokeWidth", 12, void 0);
  ze();
  var c = I0(), d = W(c);
  {
    var f = (w) => {
      var x = L0();
      _e(() => {
        ae(x, "stroke", l()), ae(x, "stroke-width", u());
      }), D(w, x);
    }, g = (w, x) => {
      {
        var $ = (C) => {
          var p = A0();
          _e(() => {
            ae(p, "stroke", l()), ae(p, "stroke-width", u()), ae(p, "fill", l());
          }), D(C, p);
        };
        be(
          w,
          (C) => {
            r() === go.ArrowClosed && C($);
          },
          x
        );
      }
    };
    be(d, (w) => {
      r() === go.Arrow ? w(f) : w(g, !1);
    });
  }
  return K(c), _e(() => {
    ae(c, "id", n()), ae(c, "markerWidth", `${o()}`), ae(c, "markerHeight", `${a()}`), ae(c, "markerUnits", i()), ae(c, "orient", s());
  }), D(e, c), ue({
    get id() {
      return n();
    },
    set id(w) {
      n(w), m();
    },
    get type() {
      return r();
    },
    set type(w) {
      r(w), m();
    },
    get width() {
      return o();
    },
    set width(w) {
      o(w), m();
    },
    get height() {
      return a();
    },
    set height(w) {
      a(w), m();
    },
    get markerUnits() {
      return i();
    },
    set markerUnits(w) {
      i(w), m();
    },
    get orient() {
      return s();
    },
    set orient(w) {
      s(w), m();
    },
    get color() {
      return l();
    },
    set color(w) {
      l(w), m();
    },
    get strokeWidth() {
      return u();
    },
    set strokeWidth(w) {
      u(w), m();
    }
  });
}
re(
  Hc,
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
var Z0 = /* @__PURE__ */ ne('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function Oc(e, t) {
  le(t, !1);
  const [n, r] = et(), o = () => J(s, "$visibleEdges", n), a = () => J(c, "$elementsSelectable", n);
  let i = y(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: s,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = We();
  bn(() => {
    i() && u(i());
  }), ze();
  var d = Z0(), f = W(d), g = W(f);
  Vc(g, {}), K(f);
  var w = I(f, 2);
  It(w, 1, o, (p) => p.id, (p, b) => {
    const h = /* @__PURE__ */ ge(() => v(b).selectable ?? a()), k = /* @__PURE__ */ ge(() => v(b).type || "default");
    Nc(p, {
      get id() {
        return v(b).id;
      },
      get source() {
        return v(b).source;
      },
      get target() {
        return v(b).target;
      },
      get data() {
        return v(b).data;
      },
      get style() {
        return v(b).style;
      },
      get animated() {
        return v(b).animated;
      },
      get selected() {
        return v(b).selected;
      },
      get selectable() {
        return v(h);
      },
      get deletable() {
        return v(b).deletable;
      },
      get hidden() {
        return v(b).hidden;
      },
      get label() {
        return v(b).label;
      },
      get labelStyle() {
        return v(b).labelStyle;
      },
      get markerStart() {
        return v(b).markerStart;
      },
      get markerEnd() {
        return v(b).markerEnd;
      },
      get sourceHandle() {
        return v(b).sourceHandle;
      },
      get targetHandle() {
        return v(b).targetHandle;
      },
      get sourceX() {
        return v(b).sourceX;
      },
      get sourceY() {
        return v(b).sourceY;
      },
      get targetX() {
        return v(b).targetX;
      },
      get targetY() {
        return v(b).targetY;
      },
      get sourcePosition() {
        return v(b).sourcePosition;
      },
      get targetPosition() {
        return v(b).targetPosition;
      },
      get ariaLabel() {
        return v(b).ariaLabel;
      },
      get interactionWidth() {
        return v(b).interactionWidth;
      },
      get class() {
        return v(b).class;
      },
      get type() {
        return v(k);
      },
      get zIndex() {
        return v(b).zIndex;
      },
      $$events: {
        edgeclick(S) {
          De.call(this, t, S);
        },
        edgecontextmenu(S) {
          De.call(this, t, S);
        },
        edgemouseenter(S) {
          De.call(this, t, S);
        },
        edgemouseleave(S) {
          De.call(this, t, S);
        }
      }
    });
  });
  var x = I(w, 2);
  {
    var $ = (p) => {
      zc(p, {
        onMount: () => {
          oi(l, !0);
        },
        onDestroy: () => {
          oi(l, !1);
        }
      });
    };
    be(x, (p) => {
      o().length > 0 && p($);
    });
  }
  K(d), D(e, d);
  var C = ue({
    get defaultEdgeOptions() {
      return i();
    },
    set defaultEdgeOptions(p) {
      i(p), m();
    }
  });
  return r(), C;
}
re(Oc, { defaultEdgeOptions: {} }, [], [], !0);
var B0 = /* @__PURE__ */ ne('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const R0 = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function ss(e, t) {
  le(t, !1), Ge(e, R0);
  let n = y(t, "x", 12, 0), r = y(t, "y", 12, 0), o = y(t, "width", 12, 0), a = y(t, "height", 12, 0), i = y(t, "isVisible", 12, !0);
  var s = Qe(), l = we(s);
  {
    var u = (c) => {
      var d = B0();
      _e(() => {
        it(d, "width", typeof o() == "string" ? o() : `${o()}px`), it(d, "height", typeof a() == "string" ? a() : `${a()}px`), it(d, "transform", `translate(${n()}px, ${r()}px)`);
      }), D(c, d);
    };
    be(l, (c) => {
      i() && c(u);
    });
  }
  return D(e, s), ue({
    get x() {
      return n();
    },
    set x(c) {
      n(c), m();
    },
    get y() {
      return r();
    },
    set y(c) {
      r(c), m();
    },
    get width() {
      return o();
    },
    set width(c) {
      o(c), m();
    },
    get height() {
      return a();
    },
    set height(c) {
      a(c), m();
    },
    get isVisible() {
      return i();
    },
    set isVisible(c) {
      i(c), m();
    }
  });
}
re(
  ss,
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
function Tc(e, t) {
  le(t, !1);
  const [n, r] = et(), o = () => J(i, "$selectionRect", n), a = () => J(s, "$selectionRectMode", n), { selectionRect: i, selectionRectMode: s } = We();
  ze();
  const l = /* @__PURE__ */ ge(() => !!(o() && a() === "user")), u = /* @__PURE__ */ ge(() => {
    var g;
    return (g = o()) == null ? void 0 : g.width;
  }), c = /* @__PURE__ */ ge(() => {
    var g;
    return (g = o()) == null ? void 0 : g.height;
  }), d = /* @__PURE__ */ ge(() => {
    var g;
    return (g = o()) == null ? void 0 : g.x;
  }), f = /* @__PURE__ */ ge(() => {
    var g;
    return (g = o()) == null ? void 0 : g.y;
  });
  ss(e, {
    get isVisible() {
      return v(l);
    },
    get width() {
      return v(u);
    },
    get height() {
      return v(c);
    },
    get x() {
      return v(d);
    },
    get y() {
      return v(f);
    }
  }), ue(), r();
}
re(Tc, {}, [], [], !0);
var Y0 = /* @__PURE__ */ ne('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const K0 = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function Dc(e, t) {
  le(t, !1), Ge(e, K0);
  const [n, r] = et(), o = () => J(l, "$selectionRectMode", n), a = () => J(c, "$nodeLookup", n), i = () => J(u, "$nodes", n), s = We(), { selectionRectMode: l, nodes: u, nodeLookup: c } = s, d = Hi();
  let f = te(null);
  function g(p) {
    const b = i().filter((h) => h.selected);
    d("selectioncontextmenu", { nodes: b, event: p });
  }
  function w(p) {
    const b = i().filter((h) => h.selected);
    d("selectionclick", { nodes: b, event: p });
  }
  se(
    () => (o(), a(), i()),
    () => {
      o() === "nodes" && (G(f, Co(a(), { filter: (p) => !!p.selected })), i());
    }
  ), ft(), ze();
  var x = Qe(), $ = we(x);
  {
    var C = (p) => {
      var b = Y0(), h = W(b);
      ss(h, { width: "100%", height: "100%", x: 0, y: 0 }), K(b), vt(b, (k, S) => wi == null ? void 0 : wi(k, S), () => ({
        disabled: !1,
        store: s,
        onDrag: (k, S, M, z) => {
          d("nodedrag", { event: k, targetNode: null, nodes: z });
        },
        onDragStart: (k, S, M, z) => {
          d("nodedragstart", { event: k, targetNode: null, nodes: z });
        },
        onDragStop: (k, S, M, z) => {
          d("nodedragstop", { event: k, targetNode: null, nodes: z });
        }
      })), Dt(() => Je("contextmenu", b, g)), Dt(() => Je("click", b, w)), Dt(() => Je("keyup", b, () => {
      })), _e(() => ae(b, "style", `width: ${v(f).width ?? ""}px; height: ${v(f).height ?? ""}px; transform: translate(${v(f).x ?? ""}px, ${v(f).y ?? ""}px)`)), D(p, b);
    };
    be($, (p) => {
      o() === "nodes" && v(f) && Pn(v(f).x) && Pn(v(f).y) && p(C);
    });
  }
  D(e, x), ue(), r();
}
re(Dc, {}, [], [], !0);
function lt(e, t) {
  let { enabled: n = !0, trigger: r, type: o = "keydown" } = t;
  function a(i) {
    const s = Array.isArray(r) ? r : [r], l = {
      alt: i.altKey,
      ctrl: i.ctrlKey,
      shift: i.shiftKey,
      meta: i.metaKey
    };
    for (const u of s) {
      const c = {
        modifier: [],
        preventDefault: !1,
        enabled: !0,
        ...u
      }, { modifier: d, key: f, callback: g, preventDefault: w, enabled: x } = c;
      if (x) {
        if (d.length && !(Array.isArray(d) ? d : [d]).map(
          ($) => typeof $ == "string" ? [$] : $
        ).some(
          ($) => $.every((C) => l[C])
        ))
          continue;
        if (i.key === f) {
          w && i.preventDefault();
          const $ = {
            node: e,
            trigger: c,
            originalEvent: i
          };
          e.dispatchEvent(new CustomEvent("shortcut", { detail: $ })), g == null || g($);
        }
      }
    }
  }
  return n && e.addEventListener(o, a), {
    update: (i) => {
      const { enabled: s = !0, type: l = "keydown" } = i;
      n && (!s || o !== l) ? e.removeEventListener(o, a) : !n && s && e.addEventListener(l, a), n = s, o = l, r = i.trigger;
    },
    destroy: () => {
      e.removeEventListener(o, a);
    }
  };
}
function Lc(e, t) {
  le(t, !1);
  let n = y(t, "selectionKey", 12, "Shift"), r = y(t, "multiSelectionKey", 28, () => vi() ? "Meta" : "Control"), o = y(t, "deleteKey", 12, "Backspace"), a = y(t, "panActivationKey", 12, " "), i = y(t, "zoomActivationKey", 28, () => vi() ? "Meta" : "Control");
  const {
    selectionKeyPressed: s,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: d,
    selectionRect: f
  } = We();
  function g(p) {
    return p !== null && typeof p == "object";
  }
  function w(p) {
    return g(p) ? p.modifier || [] : [];
  }
  function x(p) {
    return p == null ? "" : g(p) ? p.key : p;
  }
  function $(p, b) {
    return (Array.isArray(p) ? p : [p]).map((h) => {
      const k = x(h);
      return {
        key: k,
        modifier: w(h),
        enabled: k !== null,
        callback: b
      };
    });
  }
  function C() {
    f.set(null), s.set(!1), l.set(!1), u.set(!1), c.set(!1), d.set(!1);
  }
  return ze(), Je("blur", Mt, C), Je("contextmenu", Mt, C), vt(Mt, (p, b) => lt == null ? void 0 : lt(p, b), () => ({
    trigger: $(n(), () => s.set(!0)),
    type: "keydown"
  })), vt(Mt, (p, b) => lt == null ? void 0 : lt(p, b), () => ({
    trigger: $(n(), () => s.set(!1)),
    type: "keyup"
  })), vt(Mt, (p, b) => lt == null ? void 0 : lt(p, b), () => ({
    trigger: $(r(), () => l.set(!0)),
    type: "keydown"
  })), vt(Mt, (p, b) => lt == null ? void 0 : lt(p, b), () => ({
    trigger: $(r(), () => l.set(!1)),
    type: "keyup"
  })), vt(Mt, (p, b) => lt == null ? void 0 : lt(p, b), () => ({
    trigger: $(o(), (p) => {
      !(p.originalEvent.ctrlKey || p.originalEvent.metaKey || p.originalEvent.shiftKey) && !Cp(p.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), vt(Mt, (p, b) => lt == null ? void 0 : lt(p, b), () => ({
    trigger: $(o(), () => u.set(!1)),
    type: "keyup"
  })), vt(Mt, (p, b) => lt == null ? void 0 : lt(p, b), () => ({
    trigger: $(a(), () => c.set(!0)),
    type: "keydown"
  })), vt(Mt, (p, b) => lt == null ? void 0 : lt(p, b), () => ({
    trigger: $(a(), () => c.set(!1)),
    type: "keyup"
  })), vt(Mt, (p, b) => lt == null ? void 0 : lt(p, b), () => ({
    trigger: $(i(), () => d.set(!0)),
    type: "keydown"
  })), vt(Mt, (p, b) => lt == null ? void 0 : lt(p, b), () => ({
    trigger: $(i(), () => d.set(!1)),
    type: "keyup"
  })), ue({
    get selectionKey() {
      return n();
    },
    set selectionKey(p) {
      n(p), m();
    },
    get multiSelectionKey() {
      return r();
    },
    set multiSelectionKey(p) {
      r(p), m();
    },
    get deleteKey() {
      return o();
    },
    set deleteKey(p) {
      o(p), m();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(p) {
      a(p), m();
    },
    get zoomActivationKey() {
      return i();
    },
    set zoomActivationKey(p) {
      i(p), m();
    }
  });
}
re(
  Lc,
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
var X0 = /* @__PURE__ */ xe('<path fill="none" class="svelte-flow__connection-path"></path>'), W0 = /* @__PURE__ */ xe('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function Ac(e, t) {
  le(t, !1);
  const [n, r] = et(), o = () => J(g, "$connection", n), a = () => J(w, "$connectionLineType", n), i = () => J(d, "$width", n), s = () => J(f, "$height", n);
  let l = y(t, "containerStyle", 12, ""), u = y(t, "style", 12, ""), c = y(t, "isCustomComponent", 12, !1);
  const {
    width: d,
    height: f,
    connection: g,
    connectionLineType: w
  } = We();
  let x = te(null);
  se(
    () => (o(), U(c()), a(), v(x), Ca),
    () => {
      if (o().inProgress && !c()) {
        const { from: h, to: k, fromPosition: S, toPosition: M } = o(), z = {
          sourceX: h.x,
          sourceY: h.y,
          sourcePosition: S,
          targetX: k.x,
          targetY: k.y,
          targetPosition: M
        };
        switch (a()) {
          case kr.Bezier:
            ((V) => G(x, V[0]))(tc(z));
            break;
          case kr.Step:
            ((V) => G(x, V[0]))(hi({ ...z, borderRadius: 0 }));
            break;
          case kr.SmoothStep:
            ((V) => G(x, V[0]))(hi(z));
            break;
          default:
            ((V) => G(x, V[0]))(Ca(z));
        }
      }
    }
  ), ft(), ze();
  var $ = Qe(), C = we($);
  {
    var p = (h) => {
      var k = W0(), S = W(k), M = W(S);
      ht(M, t, "connectionLine", {});
      var z = I(M);
      {
        var V = (T) => {
          var L = X0();
          _e(() => {
            ae(L, "d", v(x)), ae(L, "style", u());
          }), D(T, L);
        };
        be(z, (T) => {
          c() || T(V);
        });
      }
      K(S), K(k), _e(
        (T) => {
          ae(k, "width", i()), ae(k, "height", s()), ae(k, "style", l()), $t(S, 0, xn(T));
        },
        [
          () => _t([
            "svelte-flow__connection",
            hp(o().isValid)
          ])
        ],
        ge
      ), D(h, k);
    };
    be(C, (h) => {
      o().inProgress && h(p);
    });
  }
  D(e, $);
  var b = ue({
    get containerStyle() {
      return l();
    },
    set containerStyle(h) {
      l(h), m();
    },
    get style() {
      return u();
    },
    set style(h) {
      u(h), m();
    },
    get isCustomComponent() {
      return c();
    },
    set isCustomComponent(h) {
      c(h), m();
    }
  });
  return r(), b;
}
re(
  Ac,
  {
    containerStyle: {},
    style: {},
    isCustomComponent: {}
  },
  ["connectionLine"],
  [],
  !0
);
var j0 = /* @__PURE__ */ ne("<div><!></div>");
function Po(e, t) {
  const n = tt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = tt(n, ["position", "style", "class"]);
  le(t, !1);
  const [o, a] = et(), i = () => J(d, "$selectionRectMode", o), s = te();
  let l = y(t, "position", 12, "top-right"), u = y(t, "style", 12, void 0), c = y(t, "class", 12, void 0);
  const { selectionRectMode: d } = We();
  se(() => U(l()), () => {
    G(s, `${l()}`.split("-"));
  }), ft(), ze();
  var f = j0();
  let g;
  var w = W(f);
  ht(w, t, "default", {}), K(f), _e(
    ($) => {
      g = rn(f, g, {
        class: $,
        style: u(),
        ...r
      }), it(f, "pointer-events", i() ? "none" : "");
    },
    [
      () => _t([
        "svelte-flow__panel",
        c(),
        ...v(s)
      ])
    ],
    ge
  ), D(e, f);
  var x = ue({
    get position() {
      return l();
    },
    set position($) {
      l($), m();
    },
    get style() {
      return u();
    },
    set style($) {
      u($), m();
    },
    get class() {
      return c();
    },
    set class($) {
      c($), m();
    }
  });
  return a(), x;
}
re(Po, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var q0 = /* @__PURE__ */ ne('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function Ic(e, t) {
  le(t, !1);
  let n = y(t, "proOptions", 12, void 0), r = y(t, "position", 12, "bottom-right");
  ze();
  var o = Qe(), a = we(o);
  {
    var i = (s) => {
      Po(s, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var c = q0();
          D(l, c);
        },
        $$slots: { default: !0 }
      });
    };
    be(a, (s) => {
      var l;
      (l = n()) != null && l.hideAttribution || s(i);
    });
  }
  return D(e, o), ue({
    get proOptions() {
      return n();
    },
    set proOptions(s) {
      n(s), m();
    },
    get position() {
      return r();
    },
    set position(s) {
      r(s), m();
    }
  });
}
re(Ic, { proOptions: {}, position: {} }, [], [], !0);
function yl(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: a, paneClickDistance: i }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), o !== void 0 && e.setMaxZoom(o), a !== void 0 && e.setTranslateExtent(a), i !== void 0 && e.setPaneClickDistance(i);
}
const F0 = (e) => Object.keys(e);
function wl(e, t) {
  F0(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function G0() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function U0(e = "light") {
  return Yt("light", (t) => {
    if (e !== "system") {
      t(e);
      return;
    }
    const n = G0(), r = () => t(n != null && n.matches ? "dark" : "light");
    return t(n != null && n.matches ? "dark" : "light"), n == null || n.addEventListener("change", r), () => {
      n == null || n.removeEventListener("change", r);
    };
  });
}
var J0 = /* @__PURE__ */ ne('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), Q0 = /* @__PURE__ */ ne("<!> <!>", 1), em = /* @__PURE__ */ ne("<div><!> <!> <!> <!></div>");
const tm = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function Zc(e, t) {
  const n = x1(t), r = tt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), o = tt(r, [
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
  le(t, !1), Ge(e, tm);
  const [a, i] = et(), s = () => J(b(), "$viewport", a), l = () => J(qi, "$initialized", a), u = () => J(v(c), "$colorModeClass", a), c = te();
  let d = y(t, "id", 12, "1"), f = y(t, "nodes", 12), g = y(t, "edges", 12), w = y(t, "fitView", 12, void 0), x = y(t, "fitViewOptions", 12, void 0), $ = y(t, "minZoom", 12, void 0), C = y(t, "maxZoom", 12, void 0), p = y(t, "initialViewport", 12, void 0), b = y(t, "viewport", 12, void 0), h = y(t, "nodeTypes", 12, void 0), k = y(t, "edgeTypes", 12, void 0), S = y(t, "selectionKey", 12, void 0), M = y(t, "selectionMode", 12, void 0), z = y(t, "panActivationKey", 12, void 0), V = y(t, "multiSelectionKey", 12, void 0), T = y(t, "zoomActivationKey", 12, void 0), L = y(t, "nodesDraggable", 12, void 0), O = y(t, "nodesConnectable", 12, void 0), R = y(t, "nodeDragThreshold", 12, void 0), P = y(t, "elementsSelectable", 12, void 0), N = y(t, "snapGrid", 12, void 0), _ = y(t, "deleteKey", 12, void 0), E = y(t, "connectionRadius", 12, void 0), H = y(t, "connectionLineType", 12, void 0), A = y(t, "connectionMode", 28, () => ur.Strict), B = y(t, "connectionLineStyle", 12, ""), j = y(t, "connectionLineContainerStyle", 12, ""), F = y(t, "onMoveStart", 12, void 0), ie = y(t, "onMove", 12, void 0), Q = y(t, "onMoveEnd", 12, void 0), Y = y(t, "isValidConnection", 12, void 0), ce = y(t, "translateExtent", 12, void 0), ke = y(t, "nodeExtent", 12, void 0), $e = y(t, "onlyRenderVisibleElements", 12, void 0), ve = y(t, "panOnScrollMode", 28, () => Wn.Free), Ne = y(t, "preventScrolling", 12, !0), oe = y(t, "zoomOnScroll", 12, !0), ye = y(t, "zoomOnDoubleClick", 12, !0), Ye = y(t, "zoomOnPinch", 12, !0), Le = y(t, "panOnScroll", 12, !1), Ze = y(t, "panOnDrag", 12, !0), X = y(t, "selectionOnDrag", 12, void 0), fe = y(t, "autoPanOnConnect", 12, !0), he = y(t, "autoPanOnNodeDrag", 12, !0), Ae = y(t, "onerror", 12, void 0), Ve = y(t, "ondelete", 12, void 0), je = y(t, "onedgecreate", 12, void 0), Oe = y(t, "attributionPosition", 12, void 0), Ke = y(t, "proOptions", 12, void 0), rt = y(t, "defaultEdgeOptions", 12, void 0), gt = y(t, "width", 12, void 0), ee = y(t, "height", 12, void 0), Be = y(t, "colorMode", 12, "light"), de = y(t, "onconnect", 12, void 0), ln = y(t, "onconnectstart", 12, void 0), qt = y(t, "onconnectend", 12, void 0), un = y(t, "onbeforedelete", 12, void 0), Pe = y(t, "oninit", 12, void 0), nt = y(t, "nodeOrigin", 12, void 0), pe = y(t, "paneClickDistance", 12, 0), ot = y(t, "nodeClickDistance", 12, 0), at = y(t, "defaultMarkerColor", 12, "#b1b1b7"), Rt = y(t, "style", 12, void 0), Kr = y(t, "class", 12, void 0), Ht = te(), Et = te(), cn = te();
  const Ft = s() || p(), dt = e1(Ri) ? We() : C0({
    nodes: q(f()),
    edges: q(g()),
    width: gt(),
    height: ee(),
    fitView: w(),
    nodeOrigin: nt(),
    nodeExtent: ke()
  });
  bn(() => (dt.width.set(v(Et)), dt.height.set(v(cn)), dt.domNode.set(v(Ht)), dt.syncNodeStores(f()), dt.syncEdgeStores(g()), dt.syncViewport(b()), w() !== void 0 && dt.fitViewOnInit.set(w()), x() && dt.fitViewOptions.set(x()), yl(dt, {
    nodeTypes: h(),
    edgeTypes: k(),
    minZoom: $(),
    maxZoom: C(),
    translateExtent: ce(),
    paneClickDistance: pe()
  }), () => {
    dt.reset();
  }));
  const { initialized: qi } = dt;
  let er = te(!1);
  se(
    () => (v(Et), v(cn)),
    () => {
      v(Et) !== void 0 && v(cn) !== void 0 && (dt.width.set(v(Et)), dt.height.set(v(cn)));
    }
  ), se(
    () => (v(er), l(), U(Pe())),
    () => {
      var Z;
      !v(er) && l() && ((Z = Pe()) == null || Z(), G(er, !0));
    }
  ), se(
    () => (U(d()), U(H()), U(E()), U(M()), U(N()), U(at()), U(L()), U(O()), U(P()), U($e()), U(Y()), U(fe()), U(he()), U(Ae()), U(Ve()), U(je()), U(A()), U(R()), U(de()), U(ln()), U(qt()), U(un()), U(nt()), wl),
    () => {
      const Z = {
        flowId: d(),
        connectionLineType: H(),
        connectionRadius: E(),
        selectionMode: M(),
        snapGrid: N(),
        defaultMarkerColor: at(),
        nodesDraggable: L(),
        nodesConnectable: O(),
        elementsSelectable: P(),
        onlyRenderVisibleElements: $e(),
        isValidConnection: Y(),
        autoPanOnConnect: fe(),
        autoPanOnNodeDrag: he(),
        onerror: Ae(),
        ondelete: Ve(),
        onedgecreate: je(),
        connectionMode: A(),
        nodeDragThreshold: R(),
        onconnect: de(),
        onconnectstart: ln(),
        onconnectend: qt(),
        onbeforedelete: un(),
        nodeOrigin: nt()
      };
      wl(dt, Z);
    }
  ), se(
    () => (U(h()), U(k()), U($()), U(C()), U(ce()), U(pe())),
    () => {
      yl(dt, {
        nodeTypes: h(),
        edgeTypes: k(),
        minZoom: $(),
        maxZoom: C(),
        translateExtent: ce(),
        paneClickDistance: pe()
      });
    }
  ), se(
    () => U(Be()),
    () => {
      S1(G(c, U0(Be())), "$colorModeClass", a);
    }
  ), ft(), ze();
  var Gt = em();
  let Vo;
  var Ho = W(Gt);
  Lc(Ho, {
    get selectionKey() {
      return S();
    },
    get deleteKey() {
      return _();
    },
    get panActivationKey() {
      return z();
    },
    get multiSelectionKey() {
      return V();
    },
    get zoomActivationKey() {
      return T();
    }
  });
  var Oo = I(Ho, 2);
  const Od = /* @__PURE__ */ ge(() => ve() === void 0 ? Wn.Free : ve()), Td = /* @__PURE__ */ ge(() => Ne() === void 0 ? !0 : Ne()), Dd = /* @__PURE__ */ ge(() => oe() === void 0 ? !0 : oe()), Ld = /* @__PURE__ */ ge(() => ye() === void 0 ? !0 : ye()), Ad = /* @__PURE__ */ ge(() => Ye() === void 0 ? !0 : Ye()), Id = /* @__PURE__ */ ge(() => Le() === void 0 ? !1 : Le()), Zd = /* @__PURE__ */ ge(() => Ze() === void 0 ? !0 : Ze()), Bd = /* @__PURE__ */ ge(() => pe() === void 0 ? 0 : pe());
  _c(Oo, {
    initialViewport: Ft,
    get onMoveStart() {
      return F();
    },
    get onMove() {
      return ie();
    },
    get onMoveEnd() {
      return Q();
    },
    get panOnScrollMode() {
      return v(Od);
    },
    get preventScrolling() {
      return v(Td);
    },
    get zoomOnScroll() {
      return v(Dd);
    },
    get zoomOnDoubleClick() {
      return v(Ld);
    },
    get zoomOnPinch() {
      return v(Ad);
    },
    get panOnScroll() {
      return v(Id);
    },
    get panOnDrag() {
      return v(Zd);
    },
    get paneClickDistance() {
      return v(Bd);
    },
    children: (Z, vw) => {
      const Kd = /* @__PURE__ */ ge(() => Ze() === void 0 ? !0 : Ze());
      Ec(Z, {
        get panOnDrag() {
          return v(Kd);
        },
        get selectionOnDrag() {
          return X();
        },
        $$events: {
          paneclick(Xr) {
            De.call(this, t, Xr);
          },
          panecontextmenu(Xr) {
            De.call(this, t, Xr);
          }
        },
        children: (Xr, hw) => {
          var vs = Q0(), hs = we(vs);
          Pc(hs, {
            children: (Wd, pw) => {
              var ps = J0(), ms = we(ps);
              Oc(ms, {
                get defaultEdgeOptions() {
                  return rt();
                },
                $$events: {
                  edgeclick(Te) {
                    De.call(this, t, Te);
                  },
                  edgecontextmenu(Te) {
                    De.call(this, t, Te);
                  },
                  edgemouseenter(Te) {
                    De.call(this, t, Te);
                  },
                  edgemouseleave(Te) {
                    De.call(this, t, Te);
                  }
                }
              });
              var ys = I(ms, 2);
              Ac(ys, {
                get containerStyle() {
                  return j();
                },
                get style() {
                  return B();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (Te, mw) => {
                    var xs = Qe(), qd = we(xs);
                    ht(qd, t, "connectionLine", {}), D(Te, xs);
                  }
                }
              });
              var ws = I(ys, 6);
              Sc(ws, {
                get nodeClickDistance() {
                  return ot();
                },
                $$events: {
                  nodeclick(Te) {
                    De.call(this, t, Te);
                  },
                  nodemouseenter(Te) {
                    De.call(this, t, Te);
                  },
                  nodemousemove(Te) {
                    De.call(this, t, Te);
                  },
                  nodemouseleave(Te) {
                    De.call(this, t, Te);
                  },
                  nodedragstart(Te) {
                    De.call(this, t, Te);
                  },
                  nodedrag(Te) {
                    De.call(this, t, Te);
                  },
                  nodedragstop(Te) {
                    De.call(this, t, Te);
                  },
                  nodecontextmenu(Te) {
                    De.call(this, t, Te);
                  }
                }
              });
              var jd = I(ws, 2);
              Dc(jd, {
                $$events: {
                  selectionclick(Te) {
                    De.call(this, t, Te);
                  },
                  selectioncontextmenu(Te) {
                    De.call(this, t, Te);
                  },
                  nodedragstart(Te) {
                    De.call(this, t, Te);
                  },
                  nodedrag(Te) {
                    De.call(this, t, Te);
                  },
                  nodedragstop(Te) {
                    De.call(this, t, Te);
                  }
                }
              }), D(Wd, ps);
            },
            $$slots: { default: !0 }
          });
          var Xd = I(hs, 2);
          Tc(Xd, {}), D(Xr, vs);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var gs = I(Oo, 2);
  Ic(gs, {
    get proOptions() {
      return Ke();
    },
    get position() {
      return Oe();
    }
  });
  var Rd = I(gs, 2);
  ht(Rd, t, "default", {}), K(Gt), Hn(Gt, (Z) => G(Ht, Z), () => v(Ht)), _e(
    (Z) => Vo = rn(
      Gt,
      Vo,
      {
        style: Rt(),
        class: Z,
        "data-testid": "svelte-flow__wrapper",
        ...o,
        role: "application"
      },
      "svelte-12wlba6"
    ),
    [
      () => _t([
        "svelte-flow",
        Kr(),
        u()
      ])
    ],
    ge
  ), zs(Gt, "clientWidth", (Z) => G(Et, Z)), zs(Gt, "clientHeight", (Z) => G(cn, Z)), Je("dragover", Gt, function(Z) {
    De.call(this, t, Z);
  }), Je("drop", Gt, function(Z) {
    De.call(this, t, Z);
  }), D(e, Gt);
  var Yd = ue({
    get id() {
      return d();
    },
    set id(Z) {
      d(Z), m();
    },
    get nodes() {
      return f();
    },
    set nodes(Z) {
      f(Z), m();
    },
    get edges() {
      return g();
    },
    set edges(Z) {
      g(Z), m();
    },
    get fitView() {
      return w();
    },
    set fitView(Z) {
      w(Z), m();
    },
    get fitViewOptions() {
      return x();
    },
    set fitViewOptions(Z) {
      x(Z), m();
    },
    get minZoom() {
      return $();
    },
    set minZoom(Z) {
      $(Z), m();
    },
    get maxZoom() {
      return C();
    },
    set maxZoom(Z) {
      C(Z), m();
    },
    get initialViewport() {
      return p();
    },
    set initialViewport(Z) {
      p(Z), m();
    },
    get viewport() {
      return b();
    },
    set viewport(Z) {
      b(Z), m();
    },
    get nodeTypes() {
      return h();
    },
    set nodeTypes(Z) {
      h(Z), m();
    },
    get edgeTypes() {
      return k();
    },
    set edgeTypes(Z) {
      k(Z), m();
    },
    get selectionKey() {
      return S();
    },
    set selectionKey(Z) {
      S(Z), m();
    },
    get selectionMode() {
      return M();
    },
    set selectionMode(Z) {
      M(Z), m();
    },
    get panActivationKey() {
      return z();
    },
    set panActivationKey(Z) {
      z(Z), m();
    },
    get multiSelectionKey() {
      return V();
    },
    set multiSelectionKey(Z) {
      V(Z), m();
    },
    get zoomActivationKey() {
      return T();
    },
    set zoomActivationKey(Z) {
      T(Z), m();
    },
    get nodesDraggable() {
      return L();
    },
    set nodesDraggable(Z) {
      L(Z), m();
    },
    get nodesConnectable() {
      return O();
    },
    set nodesConnectable(Z) {
      O(Z), m();
    },
    get nodeDragThreshold() {
      return R();
    },
    set nodeDragThreshold(Z) {
      R(Z), m();
    },
    get elementsSelectable() {
      return P();
    },
    set elementsSelectable(Z) {
      P(Z), m();
    },
    get snapGrid() {
      return N();
    },
    set snapGrid(Z) {
      N(Z), m();
    },
    get deleteKey() {
      return _();
    },
    set deleteKey(Z) {
      _(Z), m();
    },
    get connectionRadius() {
      return E();
    },
    set connectionRadius(Z) {
      E(Z), m();
    },
    get connectionLineType() {
      return H();
    },
    set connectionLineType(Z) {
      H(Z), m();
    },
    get connectionMode() {
      return A();
    },
    set connectionMode(Z) {
      A(Z), m();
    },
    get connectionLineStyle() {
      return B();
    },
    set connectionLineStyle(Z) {
      B(Z), m();
    },
    get connectionLineContainerStyle() {
      return j();
    },
    set connectionLineContainerStyle(Z) {
      j(Z), m();
    },
    get onMoveStart() {
      return F();
    },
    set onMoveStart(Z) {
      F(Z), m();
    },
    get onMove() {
      return ie();
    },
    set onMove(Z) {
      ie(Z), m();
    },
    get onMoveEnd() {
      return Q();
    },
    set onMoveEnd(Z) {
      Q(Z), m();
    },
    get isValidConnection() {
      return Y();
    },
    set isValidConnection(Z) {
      Y(Z), m();
    },
    get translateExtent() {
      return ce();
    },
    set translateExtent(Z) {
      ce(Z), m();
    },
    get nodeExtent() {
      return ke();
    },
    set nodeExtent(Z) {
      ke(Z), m();
    },
    get onlyRenderVisibleElements() {
      return $e();
    },
    set onlyRenderVisibleElements(Z) {
      $e(Z), m();
    },
    get panOnScrollMode() {
      return ve();
    },
    set panOnScrollMode(Z) {
      ve(Z), m();
    },
    get preventScrolling() {
      return Ne();
    },
    set preventScrolling(Z) {
      Ne(Z), m();
    },
    get zoomOnScroll() {
      return oe();
    },
    set zoomOnScroll(Z) {
      oe(Z), m();
    },
    get zoomOnDoubleClick() {
      return ye();
    },
    set zoomOnDoubleClick(Z) {
      ye(Z), m();
    },
    get zoomOnPinch() {
      return Ye();
    },
    set zoomOnPinch(Z) {
      Ye(Z), m();
    },
    get panOnScroll() {
      return Le();
    },
    set panOnScroll(Z) {
      Le(Z), m();
    },
    get panOnDrag() {
      return Ze();
    },
    set panOnDrag(Z) {
      Ze(Z), m();
    },
    get selectionOnDrag() {
      return X();
    },
    set selectionOnDrag(Z) {
      X(Z), m();
    },
    get autoPanOnConnect() {
      return fe();
    },
    set autoPanOnConnect(Z) {
      fe(Z), m();
    },
    get autoPanOnNodeDrag() {
      return he();
    },
    set autoPanOnNodeDrag(Z) {
      he(Z), m();
    },
    get onerror() {
      return Ae();
    },
    set onerror(Z) {
      Ae(Z), m();
    },
    get ondelete() {
      return Ve();
    },
    set ondelete(Z) {
      Ve(Z), m();
    },
    get onedgecreate() {
      return je();
    },
    set onedgecreate(Z) {
      je(Z), m();
    },
    get attributionPosition() {
      return Oe();
    },
    set attributionPosition(Z) {
      Oe(Z), m();
    },
    get proOptions() {
      return Ke();
    },
    set proOptions(Z) {
      Ke(Z), m();
    },
    get defaultEdgeOptions() {
      return rt();
    },
    set defaultEdgeOptions(Z) {
      rt(Z), m();
    },
    get width() {
      return gt();
    },
    set width(Z) {
      gt(Z), m();
    },
    get height() {
      return ee();
    },
    set height(Z) {
      ee(Z), m();
    },
    get colorMode() {
      return Be();
    },
    set colorMode(Z) {
      Be(Z), m();
    },
    get onconnect() {
      return de();
    },
    set onconnect(Z) {
      de(Z), m();
    },
    get onconnectstart() {
      return ln();
    },
    set onconnectstart(Z) {
      ln(Z), m();
    },
    get onconnectend() {
      return qt();
    },
    set onconnectend(Z) {
      qt(Z), m();
    },
    get onbeforedelete() {
      return un();
    },
    set onbeforedelete(Z) {
      un(Z), m();
    },
    get oninit() {
      return Pe();
    },
    set oninit(Z) {
      Pe(Z), m();
    },
    get nodeOrigin() {
      return nt();
    },
    set nodeOrigin(Z) {
      nt(Z), m();
    },
    get paneClickDistance() {
      return pe();
    },
    set paneClickDistance(Z) {
      pe(Z), m();
    },
    get nodeClickDistance() {
      return ot();
    },
    set nodeClickDistance(Z) {
      ot(Z), m();
    },
    get defaultMarkerColor() {
      return at();
    },
    set defaultMarkerColor(Z) {
      at(Z), m();
    },
    get style() {
      return Rt();
    },
    set style(Z) {
      Rt(Z), m();
    },
    get class() {
      return Kr();
    },
    set class(Z) {
      Kr(Z), m();
    }
  });
  return i(), Yd;
}
re(
  Zc,
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
function Bc(e, t) {
  le(t, !1);
  let n = y(t, "initialNodes", 12, void 0), r = y(t, "initialEdges", 12, void 0), o = y(t, "initialWidth", 12, void 0), a = y(t, "initialHeight", 12, void 0), i = y(t, "fitView", 12, void 0), s = y(t, "nodeOrigin", 12, void 0);
  const l = Cc({
    nodes: n(),
    edges: r(),
    width: o(),
    height: a(),
    nodeOrigin: s(),
    fitView: i()
  });
  Mr(Ri, { getStore: () => l }), Wa(() => {
    l.reset();
  }), ze();
  var u = Qe(), c = we(u);
  return ht(c, t, "default", {}), D(e, u), ue({
    get initialNodes() {
      return n();
    },
    set initialNodes(d) {
      n(d), m();
    },
    get initialEdges() {
      return r();
    },
    set initialEdges(d) {
      r(d), m();
    },
    get initialWidth() {
      return o();
    },
    set initialWidth(d) {
      o(d), m();
    },
    get initialHeight() {
      return a();
    },
    set initialHeight(d) {
      a(d), m();
    },
    get fitView() {
      return i();
    },
    set fitView(d) {
      i(d), m();
    },
    get nodeOrigin() {
      return s();
    },
    set nodeOrigin(d) {
      s(d), m();
    }
  });
}
re(
  Bc,
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
var nm = /* @__PURE__ */ ne("<button><!></button>");
function Qr(e, t) {
  const n = tt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = tt(n, [
    "class",
    "bgColor",
    "bgColorHover",
    "color",
    "colorHover",
    "borderColor"
  ]);
  le(t, !1);
  let o = y(t, "class", 12, void 0), a = y(t, "bgColor", 12, void 0), i = y(t, "bgColorHover", 12, void 0), s = y(t, "color", 12, void 0), l = y(t, "colorHover", 12, void 0), u = y(t, "borderColor", 12, void 0);
  ze();
  var c = nm();
  let d;
  var f = W(c);
  return ht(f, t, "default", { class: "button-svg" }), K(c), _e(
    (g) => {
      d = rn(c, d, { type: "button", class: g, ...r }), it(c, "--xy-controls-button-background-color-props", a()), it(c, "--xy-controls-button-background-color-hover-props", i()), it(c, "--xy-controls-button-color-props", s()), it(c, "--xy-controls-button-color-hover-props", l()), it(c, "--xy-controls-button-border-color-props", u());
    },
    [
      () => _t([
        "svelte-flow__controls-button",
        o()
      ])
    ],
    ge
  ), Je("click", c, function(g) {
    De.call(this, t, g);
  }), D(e, c), ue({
    get class() {
      return o();
    },
    set class(g) {
      o(g), m();
    },
    get bgColor() {
      return a();
    },
    set bgColor(g) {
      a(g), m();
    },
    get bgColorHover() {
      return i();
    },
    set bgColorHover(g) {
      i(g), m();
    },
    get color() {
      return s();
    },
    set color(g) {
      s(g), m();
    },
    get colorHover() {
      return l();
    },
    set colorHover(g) {
      l(g), m();
    },
    get borderColor() {
      return u();
    },
    set borderColor(g) {
      u(g), m();
    }
  });
}
re(
  Qr,
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
var rm = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function Rc(e) {
  var t = rm();
  D(e, t);
}
re(Rc, {}, [], [], !0);
var om = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Yc(e) {
  var t = om();
  D(e, t);
}
re(Yc, {}, [], [], !0);
var im = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Kc(e) {
  var t = im();
  D(e, t);
}
re(Kc, {}, [], [], !0);
var am = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Xc(e) {
  var t = am();
  D(e, t);
}
re(Xc, {}, [], [], !0);
var sm = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function Wc(e) {
  var t = sm();
  D(e, t);
}
re(Wc, {}, [], [], !0);
var lm = /* @__PURE__ */ ne("<!> <!>", 1), um = /* @__PURE__ */ ne("<!> <!> <!> <!> <!> <!>", 1);
function jc(e, t) {
  le(t, !1);
  const [n, r] = et(), o = () => J(H, "$nodesDraggable", n), a = () => J(A, "$nodesConnectable", n), i = () => J(B, "$elementsSelectable", n), s = () => J(N, "$viewport", n), l = () => J(_, "$minZoom", n), u = () => J(E, "$maxZoom", n), c = te(), d = te(), f = te(), g = te();
  let w = y(t, "position", 12, "bottom-left"), x = y(t, "showZoom", 12, !0), $ = y(t, "showFitView", 12, !0), C = y(t, "showLock", 12, !0), p = y(t, "buttonBgColor", 12, void 0), b = y(t, "buttonBgColorHover", 12, void 0), h = y(t, "buttonColor", 12, void 0), k = y(t, "buttonColorHover", 12, void 0), S = y(t, "buttonBorderColor", 12, void 0), M = y(t, "ariaLabel", 12, void 0), z = y(t, "style", 12, void 0), V = y(t, "orientation", 12, "vertical"), T = y(t, "fitViewOptions", 12, void 0), L = y(t, "class", 12, "");
  const {
    zoomIn: O,
    zoomOut: R,
    fitView: P,
    viewport: N,
    minZoom: _,
    maxZoom: E,
    nodesDraggable: H,
    nodesConnectable: A,
    elementsSelectable: B
  } = We(), j = {
    bgColor: p(),
    bgColorHover: b(),
    color: h(),
    colorHover: k(),
    borderColor: S()
  }, F = () => {
    O();
  }, ie = () => {
    R();
  }, Q = () => {
    P(T());
  }, Y = () => {
    G(c, !v(c)), H.set(v(c)), A.set(v(c)), B.set(v(c));
  };
  se(
    () => (o(), a(), i()),
    () => {
      G(c, o() || a() || i());
    }
  ), se(() => (s(), l()), () => {
    G(d, s().zoom <= l());
  }), se(() => (s(), u()), () => {
    G(f, s().zoom >= u());
  }), se(() => U(V()), () => {
    G(g, V() === "horizontal" ? "horizontal" : "vertical");
  }), ft(), ze();
  const ce = /* @__PURE__ */ ge(() => _t([
    "svelte-flow__controls",
    v(g),
    L()
  ])), ke = /* @__PURE__ */ ge(() => M() ?? "Svelte Flow controls");
  Po(e, {
    get class() {
      return v(ce);
    },
    get position() {
      return w();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return v(ke);
    },
    get style() {
      return z();
    },
    children: (ve, Ne) => {
      var oe = um(), ye = we(oe);
      ht(ye, t, "before", {});
      var Ye = I(ye, 2);
      {
        var Le = (je) => {
          var Oe = lm(), Ke = we(Oe);
          Qr(Ke, ut(
            {
              class: "svelte-flow__controls-zoomin",
              title: "zoom in",
              "aria-label": "zoom in",
              get disabled() {
                return v(f);
              }
            },
            j,
            {
              $$events: { click: F },
              children: (gt, ee) => {
                Rc(gt);
              },
              $$slots: { default: !0 }
            }
          ));
          var rt = I(Ke, 2);
          Qr(rt, ut(
            {
              class: "svelte-flow__controls-zoomout",
              title: "zoom out",
              "aria-label": "zoom out",
              get disabled() {
                return v(d);
              }
            },
            j,
            {
              $$events: { click: ie },
              children: (gt, ee) => {
                Yc(gt);
              },
              $$slots: { default: !0 }
            }
          )), D(je, Oe);
        };
        be(Ye, (je) => {
          x() && je(Le);
        });
      }
      var Ze = I(Ye, 2);
      {
        var X = (je) => {
          Qr(je, ut(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            j,
            {
              $$events: { click: Q },
              children: (Oe, Ke) => {
                Kc(Oe);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        be(Ze, (je) => {
          $() && je(X);
        });
      }
      var fe = I(Ze, 2);
      {
        var he = (je) => {
          Qr(je, ut(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            j,
            {
              $$events: { click: Y },
              children: (Oe, Ke) => {
                var rt = Qe(), gt = we(rt);
                {
                  var ee = (de) => {
                    Wc(de);
                  }, Be = (de) => {
                    Xc(de);
                  };
                  be(gt, (de) => {
                    v(c) ? de(ee) : de(Be, !1);
                  });
                }
                D(Oe, rt);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        be(fe, (je) => {
          C() && je(he);
        });
      }
      var Ae = I(fe, 2);
      ht(Ae, t, "default", {});
      var Ve = I(Ae, 2);
      ht(Ve, t, "after", {}), D(ve, oe);
    },
    $$slots: { default: !0 }
  });
  var $e = ue({
    get position() {
      return w();
    },
    set position(ve) {
      w(ve), m();
    },
    get showZoom() {
      return x();
    },
    set showZoom(ve) {
      x(ve), m();
    },
    get showFitView() {
      return $();
    },
    set showFitView(ve) {
      $(ve), m();
    },
    get showLock() {
      return C();
    },
    set showLock(ve) {
      C(ve), m();
    },
    get buttonBgColor() {
      return p();
    },
    set buttonBgColor(ve) {
      p(ve), m();
    },
    get buttonBgColorHover() {
      return b();
    },
    set buttonBgColorHover(ve) {
      b(ve), m();
    },
    get buttonColor() {
      return h();
    },
    set buttonColor(ve) {
      h(ve), m();
    },
    get buttonColorHover() {
      return k();
    },
    set buttonColorHover(ve) {
      k(ve), m();
    },
    get buttonBorderColor() {
      return S();
    },
    set buttonBorderColor(ve) {
      S(ve), m();
    },
    get ariaLabel() {
      return M();
    },
    set ariaLabel(ve) {
      M(ve), m();
    },
    get style() {
      return z();
    },
    set style(ve) {
      z(ve), m();
    },
    get orientation() {
      return V();
    },
    set orientation(ve) {
      V(ve), m();
    },
    get fitViewOptions() {
      return T();
    },
    set fitViewOptions(ve) {
      T(ve), m();
    },
    get class() {
      return L();
    },
    set class(ve) {
      L(ve), m();
    }
  });
  return r(), $e;
}
re(
  jc,
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
var cm = /* @__PURE__ */ xe("<circle></circle>");
function qc(e, t) {
  le(t, !1);
  let n = y(t, "radius", 12, 5), r = y(t, "class", 12, "");
  ze();
  var o = cm();
  return _e(
    (a) => {
      ae(o, "cx", n()), ae(o, "cy", n()), ae(o, "r", n()), $t(o, 0, xn(a));
    },
    [
      () => _t([
        "svelte-flow__background-pattern",
        "dots",
        r()
      ])
    ],
    ge
  ), D(e, o), ue({
    get radius() {
      return n();
    },
    set radius(a) {
      n(a), m();
    },
    get class() {
      return r();
    },
    set class(a) {
      r(a), m();
    }
  });
}
re(qc, { radius: {}, class: {} }, [], [], !0);
var dm = /* @__PURE__ */ xe("<path></path>");
function Fc(e, t) {
  le(t, !1);
  let n = y(t, "lineWidth", 12, 1), r = y(t, "dimensions", 12), o = y(t, "variant", 12, void 0), a = y(t, "class", 12, "");
  ze();
  var i = dm();
  return _e(
    (s) => {
      ae(i, "stroke-width", n()), ae(i, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), $t(i, 0, xn(s));
    },
    [
      () => _t([
        "svelte-flow__background-pattern",
        o(),
        a()
      ])
    ],
    ge
  ), D(e, i), ue({
    get lineWidth() {
      return n();
    },
    set lineWidth(s) {
      n(s), m();
    },
    get dimensions() {
      return r();
    },
    set dimensions(s) {
      r(s), m();
    },
    get variant() {
      return o();
    },
    set variant(s) {
      o(s), m();
    },
    get class() {
      return a();
    },
    set class(s) {
      a(s), m();
    }
  });
}
re(
  Fc,
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
const fm = {
  [jn.Dots]: 1,
  [jn.Lines]: 1,
  [jn.Cross]: 6
};
var gm = /* @__PURE__ */ xe('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const vm = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function Gc(e, t) {
  le(t, !1), Ge(e, vm);
  const [n, r] = et(), o = () => J(k, "$flowId", n), a = () => J(h, "$viewport", n), i = te(), s = te(), l = te(), u = te(), c = te();
  let d = y(t, "id", 12, void 0), f = y(t, "variant", 28, () => jn.Dots), g = y(t, "gap", 12, 20), w = y(t, "size", 12, 1), x = y(t, "lineWidth", 12, 1), $ = y(t, "bgColor", 12, void 0), C = y(t, "patternColor", 12, void 0), p = y(t, "patternClass", 12, void 0), b = y(t, "class", 12, "");
  const { viewport: h, flowId: k } = We(), S = w() || fm[f()], M = f() === jn.Dots, z = f() === jn.Cross, V = Array.isArray(g()) ? g() : [g(), g()];
  se(
    () => (o(), U(d())),
    () => {
      G(i, `background-pattern-${o()}-${d() ? d() : ""}`);
    }
  ), se(() => a(), () => {
    G(s, [
      V[0] * a().zoom || 1,
      V[1] * a().zoom || 1
    ]);
  }), se(() => a(), () => {
    G(l, S * a().zoom);
  }), se(() => (v(l), v(s)), () => {
    G(u, z ? [v(l), v(l)] : v(s));
  }), se(
    () => (v(l), v(u)),
    () => {
      G(c, M ? [
        v(l) / 2,
        v(l) / 2
      ] : [
        v(u)[0] / 2,
        v(u)[1] / 2
      ]);
    }
  ), ft(), ze();
  var T = gm(), L = W(T), O = W(L);
  {
    var R = (E) => {
      const H = /* @__PURE__ */ ge(() => v(l) / 2);
      qc(E, {
        get radius() {
          return v(H);
        },
        get class() {
          return p();
        }
      });
    }, P = (E) => {
      Fc(E, {
        get dimensions() {
          return v(u);
        },
        get variant() {
          return f();
        },
        get lineWidth() {
          return x();
        },
        get class() {
          return p();
        }
      });
    };
    be(O, (E) => {
      M ? E(R) : E(P, !1);
    });
  }
  K(L);
  var N = I(L);
  K(T), _e(
    (E) => {
      $t(T, 0, xn(E), "svelte-1r7pe8d"), it(T, "--xy-background-color-props", $()), it(T, "--xy-background-pattern-color-props", C()), ae(L, "id", v(i)), ae(L, "x", a().x % v(s)[0]), ae(L, "y", a().y % v(s)[1]), ae(L, "width", v(s)[0]), ae(L, "height", v(s)[1]), ae(L, "patternTransform", `translate(-${v(c)[0]},-${v(c)[1]})`), ae(N, "fill", `url(#${v(i)})`);
    },
    [
      () => _t(["svelte-flow__background", b()])
    ],
    ge
  ), D(e, T);
  var _ = ue({
    get id() {
      return d();
    },
    set id(E) {
      d(E), m();
    },
    get variant() {
      return f();
    },
    set variant(E) {
      f(E), m();
    },
    get gap() {
      return g();
    },
    set gap(E) {
      g(E), m();
    },
    get size() {
      return w();
    },
    set size(E) {
      w(E), m();
    },
    get lineWidth() {
      return x();
    },
    set lineWidth(E) {
      x(E), m();
    },
    get bgColor() {
      return $();
    },
    set bgColor(E) {
      $(E), m();
    },
    get patternColor() {
      return C();
    },
    set patternColor(E) {
      C(E), m();
    },
    get patternClass() {
      return p();
    },
    set patternClass(E) {
      p(E), m();
    },
    get class() {
      return b();
    },
    set class(E) {
      b(E), m();
    }
  });
  return r(), _;
}
re(
  Gc,
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
var hm = /* @__PURE__ */ xe("<rect></rect>");
function Uc(e, t) {
  le(t, !1);
  let n = y(t, "x", 12), r = y(t, "y", 12), o = y(t, "width", 12, 0), a = y(t, "height", 12, 0), i = y(t, "borderRadius", 12, 5), s = y(t, "color", 12, void 0), l = y(t, "shapeRendering", 12), u = y(t, "strokeColor", 12, void 0), c = y(t, "strokeWidth", 12, 2), d = y(t, "selected", 12, !1), f = y(t, "class", 12, "");
  ze();
  var g = hm();
  let w;
  return _e(
    (x) => {
      w = $t(g, 0, xn(x), null, w, { selected: d() }), ae(g, "x", n()), ae(g, "y", r()), ae(g, "rx", i()), ae(g, "ry", i()), ae(g, "width", o()), ae(g, "height", a()), ae(g, "style", `${s() ? `fill: ${s()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), ae(g, "shape-rendering", l());
    },
    [
      () => _t(["svelte-flow__minimap-node", f()])
    ],
    ge
  ), D(e, g), ue({
    get x() {
      return n();
    },
    set x(x) {
      n(x), m();
    },
    get y() {
      return r();
    },
    set y(x) {
      r(x), m();
    },
    get width() {
      return o();
    },
    set width(x) {
      o(x), m();
    },
    get height() {
      return a();
    },
    set height(x) {
      a(x), m();
    },
    get borderRadius() {
      return i();
    },
    set borderRadius(x) {
      i(x), m();
    },
    get color() {
      return s();
    },
    set color(x) {
      s(x), m();
    },
    get shapeRendering() {
      return l();
    },
    set shapeRendering(x) {
      l(x), m();
    },
    get strokeColor() {
      return u();
    },
    set strokeColor(x) {
      u(x), m();
    },
    get strokeWidth() {
      return c();
    },
    set strokeWidth(x) {
      c(x), m();
    },
    get selected() {
      return d();
    },
    set selected(x) {
      d(x), m();
    },
    get class() {
      return f();
    },
    set class(x) {
      f(x), m();
    }
  });
}
re(
  Uc,
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
function xl(e, t) {
  const n = Qp({
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
const ra = (e) => e instanceof Function ? e : () => e;
var pm = /* @__PURE__ */ xe("<title> </title>"), mm = /* @__PURE__ */ xe('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function Jc(e, t) {
  le(t, !1);
  const [n, r] = et(), o = () => J(Ze, "$flowId", n), a = () => J(ye, "$viewport", n), i = () => J(Ye, "$containerWidth", n), s = () => J(Le, "$containerHeight", n), l = () => J(oe, "$nodeLookup", n), u = () => J(Ne, "$nodes", n), c = () => J(X, "$panZoom", n), d = () => J(fe, "$translateExtent", n), f = te(), g = te(), w = te(), x = te(), $ = te(), C = te(), p = te(), b = te(), h = te(), k = te(), S = te(), M = te(), z = te();
  let V = y(t, "position", 12, "bottom-right"), T = y(t, "ariaLabel", 12, "Mini map"), L = y(t, "nodeStrokeColor", 12, "transparent"), O = y(t, "nodeColor", 12, void 0), R = y(t, "nodeClass", 12, ""), P = y(t, "nodeBorderRadius", 12, 5), N = y(t, "nodeStrokeWidth", 12, 2), _ = y(t, "bgColor", 12, void 0), E = y(t, "maskColor", 12, void 0), H = y(t, "maskStrokeColor", 12, void 0), A = y(t, "maskStrokeWidth", 12, void 0), B = y(t, "width", 12, void 0), j = y(t, "height", 12, void 0), F = y(t, "pannable", 12, !0), ie = y(t, "zoomable", 12, !0), Q = y(t, "inversePan", 12, void 0), Y = y(t, "zoomStep", 12, void 0), ce = y(t, "style", 12, ""), ke = y(t, "class", 12, "");
  const $e = 200, ve = 150, {
    nodes: Ne,
    nodeLookup: oe,
    viewport: ye,
    width: Ye,
    height: Le,
    flowId: Ze,
    panZoom: X,
    translateExtent: fe
  } = We(), he = O() === void 0 ? void 0 : ra(O()), Ae = ra(L()), Ve = ra(R()), je = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), Oe = `svelte-flow__minimap-desc-${o()}`;
  let Ke = te(v(f));
  const rt = () => v(C);
  se(
    () => (a(), i(), s()),
    () => {
      G(f, {
        x: -a().x / a().zoom,
        y: -a().y / a().zoom,
        width: i() / a().zoom,
        height: s() / a().zoom
      });
    }
  ), se(
    () => (l(), v(f), u()),
    () => {
      G(Ke, l().size > 0 ? Uu(Co(l()), v(f)) : v(f)), u();
    }
  ), se(() => U(B()), () => {
    G(g, B() ?? $e);
  }), se(() => U(j()), () => {
    G(w, j() ?? ve);
  }), se(
    () => (v(Ke), v(g)),
    () => {
      G(x, v(Ke).width / v(g));
    }
  ), se(
    () => (v(Ke), v(w)),
    () => {
      G($, v(Ke).height / v(w));
    }
  ), se(
    () => (v(x), v($)),
    () => {
      G(C, Math.max(v(x), v($)));
    }
  ), se(() => (v(C), v(g)), () => {
    G(p, v(C) * v(g));
  }), se(
    () => (v(C), v(w)),
    () => {
      G(b, v(C) * v(w));
    }
  ), se(() => v(C), () => {
    G(h, 5 * v(C));
  }), se(
    () => (v(Ke), v(p), v(h)),
    () => {
      G(k, v(Ke).x - (v(p) - v(Ke).width) / 2 - v(h));
    }
  ), se(
    () => (v(Ke), v(b), v(h)),
    () => {
      G(S, v(Ke).y - (v(b) - v(Ke).height) / 2 - v(h));
    }
  ), se(() => (v(p), v(h)), () => {
    G(M, v(p) + v(h) * 2);
  }), se(() => (v(b), v(h)), () => {
    G(z, v(b) + v(h) * 2);
  }), ft(), ze();
  const gt = /* @__PURE__ */ ge(() => ce() + (_() ? `;--xy-minimap-background-color-props:${_()}` : "")), ee = /* @__PURE__ */ ge(() => _t(["svelte-flow__minimap", ke()]));
  Po(e, {
    get position() {
      return V();
    },
    get style() {
      return v(gt);
    },
    get class() {
      return v(ee);
    },
    "data-testid": "svelte-flow__minimap",
    children: (de, ln) => {
      var qt = Qe(), un = we(qt);
      {
        var Pe = (nt) => {
          var pe = mm();
          ae(pe, "aria-labelledby", Oe);
          var ot = W(pe);
          {
            var at = (Ht) => {
              var Et = pm();
              ae(Et, "id", Oe);
              var cn = W(Et, !0);
              K(Et), _e(() => wn(cn, T())), D(Ht, Et);
            };
            be(ot, (Ht) => {
              T() && Ht(at);
            });
          }
          var Rt = I(ot);
          It(Rt, 1, u, (Ht) => Ht.id, (Ht, Et) => {
            var cn = Qe();
            const Ft = /* @__PURE__ */ ge(() => l().get(v(Et).id));
            var dt = we(cn);
            {
              var qi = (er) => {
                const Gt = /* @__PURE__ */ ge(() => Jn(v(Ft))), Vo = /* @__PURE__ */ ge(() => he == null ? void 0 : he(v(Ft))), Ho = /* @__PURE__ */ ge(() => Ae(v(Ft))), Oo = /* @__PURE__ */ ge(() => Ve(v(Ft)));
                Uc(er, ut(
                  {
                    get x() {
                      return v(Ft).internals.positionAbsolute.x;
                    },
                    get y() {
                      return v(Ft).internals.positionAbsolute.y;
                    }
                  },
                  () => v(Gt),
                  {
                    get selected() {
                      return v(Ft).selected;
                    },
                    get color() {
                      return v(Vo);
                    },
                    get borderRadius() {
                      return P();
                    },
                    get strokeColor() {
                      return v(Ho);
                    },
                    get strokeWidth() {
                      return N();
                    },
                    shapeRendering: je,
                    get class() {
                      return v(Oo);
                    }
                  }
                ));
              };
              be(dt, (er) => {
                v(Ft) && Qu(v(Ft)) && er(qi);
              });
            }
            D(Ht, cn);
          });
          var Kr = I(Rt);
          K(pe), vt(pe, (Ht, Et) => xl == null ? void 0 : xl(Ht, Et), () => ({
            panZoom: c(),
            viewport: ye,
            getViewScale: rt,
            translateExtent: d(),
            width: i(),
            height: s(),
            inversePan: Q(),
            zoomStep: Y(),
            pannable: F(),
            zoomable: ie()
          })), _e(() => {
            ae(pe, "width", v(g)), ae(pe, "height", v(w)), ae(pe, "viewBox", `${v(k) ?? ""} ${v(S) ?? ""} ${v(M) ?? ""} ${v(z) ?? ""}`), it(pe, "--xy-minimap-mask-background-color-props", E()), it(pe, "--xy-minimap-mask-stroke-color-props", H()), it(pe, "--xy-minimap-mask-stroke-width-props", A() ? A() * v(C) : void 0), ae(Kr, "d", `M${v(k) - v(h)},${v(S) - v(h)}h${v(M) + v(h) * 2}v${v(z) + v(h) * 2}h${-v(M) - v(h) * 2}z
      M${v(f).x ?? ""},${v(f).y ?? ""}h${v(f).width ?? ""}v${v(f).height ?? ""}h${-v(f).width}z`);
          }), D(nt, pe);
        };
        be(un, (nt) => {
          c() && nt(Pe);
        });
      }
      D(de, qt);
    },
    $$slots: { default: !0 }
  });
  var Be = ue({
    get position() {
      return V();
    },
    set position(de) {
      V(de), m();
    },
    get ariaLabel() {
      return T();
    },
    set ariaLabel(de) {
      T(de), m();
    },
    get nodeStrokeColor() {
      return L();
    },
    set nodeStrokeColor(de) {
      L(de), m();
    },
    get nodeColor() {
      return O();
    },
    set nodeColor(de) {
      O(de), m();
    },
    get nodeClass() {
      return R();
    },
    set nodeClass(de) {
      R(de), m();
    },
    get nodeBorderRadius() {
      return P();
    },
    set nodeBorderRadius(de) {
      P(de), m();
    },
    get nodeStrokeWidth() {
      return N();
    },
    set nodeStrokeWidth(de) {
      N(de), m();
    },
    get bgColor() {
      return _();
    },
    set bgColor(de) {
      _(de), m();
    },
    get maskColor() {
      return E();
    },
    set maskColor(de) {
      E(de), m();
    },
    get maskStrokeColor() {
      return H();
    },
    set maskStrokeColor(de) {
      H(de), m();
    },
    get maskStrokeWidth() {
      return A();
    },
    set maskStrokeWidth(de) {
      A(de), m();
    },
    get width() {
      return B();
    },
    set width(de) {
      B(de), m();
    },
    get height() {
      return j();
    },
    set height(de) {
      j(de), m();
    },
    get pannable() {
      return F();
    },
    set pannable(de) {
      F(de), m();
    },
    get zoomable() {
      return ie();
    },
    set zoomable(de) {
      ie(de), m();
    },
    get inversePan() {
      return Q();
    },
    set inversePan(de) {
      Q(de), m();
    },
    get zoomStep() {
      return Y();
    },
    set zoomStep(de) {
      Y(de), m();
    },
    get style() {
      return ce();
    },
    set style(de) {
      ce(de), m();
    },
    get class() {
      return ke();
    },
    set class(de) {
      ke(de), m();
    }
  });
  return r(), Be;
}
re(
  Jc,
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
const bl = (e) => mp(e);
function Bt() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: a, width: i, height: s, minZoom: l, maxZoom: u, panZoom: c, nodes: d, edges: f, domNode: g, nodeLookup: w, nodeOrigin: x, edgeLookup: $, connectionLookup: C } = We(), p = (k) => {
    var S, M;
    const z = q(w), V = bl(k) ? k : z.get(k.id), T = V.parentId ? bp(V.position, V.measured, V.parentId, z, q(x)) : V.position, L = {
      ...V,
      position: T,
      width: ((S = V.measured) == null ? void 0 : S.width) ?? V.width,
      height: ((M = V.measured) == null ? void 0 : M.height) ?? V.height
    };
    return Hr(L);
  }, b = (k, S, M = { replace: !1 }) => {
    var z;
    const V = (z = q(w).get(k)) == null ? void 0 : z.internals.userNode;
    if (!V)
      return;
    const T = typeof S == "function" ? S(V) : S;
    M.replace ? d.update((L) => L.map((O) => O.id === k ? bl(T) ? T : { ...O, ...T } : O)) : (Object.assign(V, T), d.update((L) => L));
  }, h = (k) => q(w).get(k);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: h,
    getNode: (k) => {
      var S;
      return (S = h(k)) == null ? void 0 : S.internals.userNode;
    },
    getNodes: (k) => k === void 0 ? q(d) : $l(q(w), k),
    getEdge: (k) => q($).get(k),
    getEdges: (k) => k === void 0 ? q(f) : $l(q($), k),
    setZoom: (k, S) => {
      const M = q(c);
      return M ? M.scaleTo(k, { duration: S == null ? void 0 : S.duration }) : Promise.resolve(!1);
    },
    getZoom: () => q(a).zoom,
    setViewport: async (k, S) => {
      const M = q(a), z = q(c);
      return z ? (await z.setViewport({
        x: k.x ?? M.x,
        y: k.y ?? M.y,
        zoom: k.zoom ?? M.zoom
      }, { duration: S == null ? void 0 : S.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => q(a),
    setCenter: async (k, S, M) => {
      const z = typeof (M == null ? void 0 : M.zoom) < "u" ? M.zoom : q(u), V = q(c);
      return V ? (await V.setViewport({
        x: q(i) / 2 - k * z,
        y: q(s) / 2 - S * z,
        zoom: z
      }, { duration: M == null ? void 0 : M.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (k, S) => {
      const M = q(c);
      if (!M)
        return Promise.resolve(!1);
      const z = ns(k, q(i), q(s), q(l), q(u), (S == null ? void 0 : S.padding) ?? 0.1);
      return await M.setViewport(z, { duration: S == null ? void 0 : S.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (k, S = !0, M) => {
      const z = rl(k), V = z ? k : p(k);
      return V ? (M || q(d)).filter((T) => {
        const L = q(w).get(T.id);
        if (!L || !z && T.id === k.id)
          return !1;
        const O = Hr(L), R = vo(O, V);
        return S && R > 0 || R >= V.width * V.height;
      }) : [];
    },
    isNodeIntersecting: (k, S, M = !0) => {
      const z = rl(k) ? k : p(k);
      if (!z)
        return !1;
      const V = vo(z, S);
      return M && V > 0 || V >= z.width * z.height;
    },
    deleteElements: async ({ nodes: k = [], edges: S = [] }) => {
      const { nodes: M, edges: z } = await qu({
        nodesToRemove: k,
        edgesToRemove: S,
        nodes: q(d),
        edges: q(f),
        onBeforeDelete: q(r)
      });
      return M && d.update((V) => V.filter((T) => !M.some(({ id: L }) => L === T.id))), z && f.update((V) => V.filter((T) => !z.some(({ id: L }) => L === T.id))), {
        deletedNodes: M,
        deletedEdges: z
      };
    },
    screenToFlowPosition: (k, S = { snapToGrid: !0 }) => {
      const M = q(g);
      if (!M)
        return k;
      const z = S.snapToGrid ? q(o) : !1, { x: V, y: T, zoom: L } = q(a), { x: O, y: R } = M.getBoundingClientRect(), P = {
        x: k.x - O,
        y: k.y - R
      };
      return _o(P, [V, T, L], z !== null, z || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (k) => {
      const S = q(g);
      if (!S)
        return k;
      const { x: M, y: z, zoom: V } = q(a), { x: T, y: L } = S.getBoundingClientRect(), O = Ju(k, [M, z, V]);
      return {
        x: O.x + T,
        y: O.y + L
      };
    },
    toObject: () => ({
      nodes: q(d).map((k) => ({
        ...k,
        // we want to make sure that changes to the nodes object that gets returned by toObject
        // do not affect the nodes object
        position: { ...k.position },
        data: { ...k.data }
      })),
      edges: q(f).map((k) => ({ ...k })),
      viewport: { ...q(a) }
    }),
    updateNode: b,
    updateNodeData: (k, S, M) => {
      var z;
      const V = (z = q(w).get(k)) == null ? void 0 : z.internals.userNode;
      if (!V)
        return;
      const T = typeof S == "function" ? S(V) : S;
      V.data = M != null && M.replace ? T : { ...V.data, ...T }, d.update((L) => L);
    },
    getNodesBounds: (k) => {
      const S = q(w), M = q(x);
      return yp(k, { nodeLookup: S, nodeOrigin: M });
    },
    getHandleConnections: ({ type: k, id: S, nodeId: M }) => {
      var z;
      return Array.from(((z = q(C).get(`${M}-${k}-${S ?? null}`)) == null ? void 0 : z.values()) ?? []);
    },
    viewport: a
  };
}
function $l(e, t) {
  var n;
  const r = [];
  for (const o of t) {
    const a = e.get(o);
    if (a) {
      const i = "internals" in a ? (n = a.internals) == null ? void 0 : n.userNode : a;
      r.push(i);
    }
  }
  return r;
}
var ym = /* @__PURE__ */ ne('<div class="svelte-flow__node-toolbar"><!></div>');
function Qc(e, t) {
  le(t, !1);
  const [n, r] = et(), o = () => J(b, "$nodes", n), a = () => J(p, "$nodeLookup", n), i = () => J(C, "$viewport", n), s = () => J($, "$domNode", n), l = te(), u = te(), c = te();
  let d = y(t, "nodeId", 12, void 0), f = y(t, "position", 12, void 0), g = y(t, "align", 12, void 0), w = y(t, "offset", 12, void 0), x = y(t, "isVisible", 12, void 0);
  const { domNode: $, viewport: C, nodeLookup: p, nodes: b } = We(), { getNodesBounds: h } = Bt(), k = ar("svelteflow__node_id");
  let S = te(), M = te([]), z = w() !== void 0 ? w() : 10, V = f() !== void 0 ? f() : Ce.Top, T = g() !== void 0 ? g() : "center";
  se(
    () => (o(), U(d()), a()),
    () => {
      o();
      const N = Array.isArray(d()) ? d() : [d() || k];
      G(M, N.reduce(
        (_, E) => {
          const H = a().get(E);
          return H && _.push(H), _;
        },
        []
      ));
    }
  ), se(
    () => (v(M), i()),
    () => {
      const N = h(v(M));
      N && G(S, Dp(N, i(), V, z, T));
    }
  ), se(() => v(M), () => {
    G(l, v(M).length === 0 ? 1 : Math.max(...v(M).map((N) => (N.internals.z || 5) + 1)));
  }), se(() => o(), () => {
    G(u, o().filter((N) => N.selected).length);
  }), se(
    () => (U(x()), v(M), v(u)),
    () => {
      G(c, typeof x() == "boolean" ? x() : v(M).length === 1 && v(M)[0].selected && v(u) === 1);
    }
  ), ft(), ze();
  var L = Qe(), O = we(L);
  {
    var R = (N) => {
      var _ = ym(), E = W(_);
      ht(E, t, "default", {}), K(_), vt(_, (H, A) => mi == null ? void 0 : mi(H, A), () => ({ domNode: s() })), _e(
        (H) => {
          ae(_, "data-id", H), it(_, "position", "absolute"), it(_, "transform", v(S)), it(_, "z-index", v(l));
        },
        [
          () => v(M).reduce((H, A) => `${H}${A.id} `, "").trim()
        ],
        ge
      ), D(N, _);
    };
    be(O, (N) => {
      s() && v(c) && v(M) && N(R);
    });
  }
  D(e, L);
  var P = ue({
    get nodeId() {
      return d();
    },
    set nodeId(N) {
      d(N), m();
    },
    get position() {
      return f();
    },
    set position(N) {
      f(N), m();
    },
    get align() {
      return g();
    },
    set align(N) {
      g(N), m();
    },
    get offset() {
      return w();
    },
    set offset(N) {
      w(N), m();
    },
    get isVisible() {
      return x();
    },
    set isVisible(N) {
      x(N), m();
    }
  });
  return r(), P;
}
re(
  Qc,
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
function hr(e) {
  const { nodes: t, nodeLookup: n } = We();
  let r = [], o = !0;
  return Xn([t, n], ([, a], i) => {
    var s;
    const l = [], u = Array.isArray(e), c = u ? e : [e];
    for (const d of c) {
      const f = (s = a.get(d)) == null ? void 0 : s.internals.userNode;
      f && l.push({
        id: f.id,
        type: f.type,
        data: f.data
      });
    }
    (!Kp(l, r) || o) && (r = l, i(u ? l : l[0] ?? null), o = !1);
  });
}
const kl = "tinyflow-component";
class wm {
  constructor(t) {
    if (St(this, "options"), St(this, "rootEl"), St(this, "svelteFlowInstance"), typeof t.element != "string" && !(t.element instanceof Element))
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
    const t = document.createElement(kl);
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
    const n = document.createElement(kl);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const xm = () => {
  const e = me([]), t = me([]), n = me({ x: 250, y: 100, zoom: 1 });
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
      e.update((o) => o.filter((a) => a.id !== r));
    },
    updateNode: (r, o) => {
      e.update((a) => a.map((i) => i.id === r ? o : i));
    },
    updateNodeData: (r, o) => {
      e.update(
        (a) => a.map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i)
      );
    },
    selectNodeOnly: (r) => {
      e.update(
        (o) => o.map(
          (a) => a.id === r ? { ...a, selected: !0 } : { ...a, selected: !1 }
        )
      );
    },
    addEdge: (r) => {
      t.update((o) => [...o, r]);
    },
    removeEdge: (r) => {
      t.update((o) => o.filter((a) => a.id !== r));
    },
    updateEdge: (r, o) => {
      t.update((a) => a.map((i) => i.id === r ? o : i));
    },
    updateEdgeData: (r, o) => {
      t.update((a) => a.map((i) => i.id === r ? { ...i, data: o } : i));
    }
  };
}, Fo = xm();
var bm = /* @__PURE__ */ ne("<button><!></button>");
function qe(e, t) {
  le(t, !0);
  const n = y(t, "children", 7), r = /* @__PURE__ */ Ct(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = bm();
  let a;
  var i = W(o);
  return sr(i, () => n() ?? ct), K(o), _e(() => a = rn(o, a, {
    type: "button",
    ...r,
    class: `tf-btn nopan nodrag ${t.class ?? ""}`
  })), D(e, o), ue({
    get children() {
      return n();
    },
    set children(s) {
      n(s), m();
    }
  });
}
re(qe, { children: {} }, [], [], !0);
var $m = /* @__PURE__ */ ne("<input>");
function ed(e, t) {
  le(t, !0);
  const n = /* @__PURE__ */ Ct(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = $m();
  gu(r);
  let o;
  _e(() => o = rn(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), D(e, r), ue();
}
re(ed, {}, [], [], !0);
var km = /* @__PURE__ */ ne("<input>");
function wt(e, t) {
  le(t, !0);
  const n = /* @__PURE__ */ Ct(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = km();
  gu(r);
  let o;
  _e(() => o = rn(r, o, {
    type: "text",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), D(e, r), ue();
}
re(wt, {}, [], [], !0);
var Cm = /* @__PURE__ */ ne("<textarea></textarea>");
function kt(e, t) {
  le(t, !0);
  const n = /* @__PURE__ */ Ct(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Cm();
  f1(r);
  let o;
  _e(() => o = rn(r, o, {
    ...n,
    class: `tf-textarea nodrag ${t.class ?? ""}`
  })), D(e, r), ue();
}
re(kt, {}, [], [], !0);
var _m = /* @__PURE__ */ ne('<div role="button"><!></div>'), Em = /* @__PURE__ */ ne("<div></div>");
function td(e, t) {
  const n = tt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = tt(n, ["items", "onChange", "activeIndex"]);
  le(t, !1);
  let o = y(t, "items", 28, () => []), a = y(t, "onChange", 12, () => {
  }), i = y(t, "activeIndex", 12, 0);
  function s(c, d) {
    var f;
    i(d), (f = a()) == null || f(c, d);
  }
  ze();
  var l = Em();
  let u;
  return It(l, 5, o, Vi, (c, d, f) => {
    var g = _m();
    ae(g, "tabindex", f), g.__click = () => s(v(d), f), g.__keydown = (C) => {
      (C.key === "Enter" || C.key === " ") && (C.preventDefault(), s(v(d), f));
    };
    var w = W(g);
    {
      var x = (C) => {
        var p = Ie();
        _e(() => wn(p, v(d).label)), D(C, p);
      }, $ = (C) => {
        var p = Qe(), b = we(p);
        sr(b, () => v(d).label ?? ct), D(C, p);
      };
      be(w, (C) => {
        typeof v(d).label == "string" ? C(x) : C($, !1);
      });
    }
    K(g), _e(() => $t(g, 1, `tf-tabs-item ${(f === i() ? "active" : "") ?? ""}`)), D(c, g);
  }), K(l), _e(() => u = rn(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), D(e, l), ue({
    get items() {
      return o();
    },
    set items(c) {
      o(c), m();
    },
    get onChange() {
      return a();
    },
    set onChange(c) {
      a(c), m();
    },
    get activeIndex() {
      return i();
    },
    set activeIndex(c) {
      i(c), m();
    }
  });
}
zi(["click", "keydown"]);
re(td, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var Pm = (e, t, n) => t(v(n)), Mm = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(v(n)));
}, Sm = /* @__PURE__ */ ne('<span class="tf-collapse-item-title-icon"><!></span>'), Nm = /* @__PURE__ */ ne('<div class="tf-collapse-item-description"><!></div>'), zm = /* @__PURE__ */ ne('<div class="tf-collapse-item-content"><!></div>'), Vm = /* @__PURE__ */ ne('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), Hm = /* @__PURE__ */ ne("<div></div>");
const Om = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function nd(e, t) {
  le(t, !0), Ge(e, Om);
  let n = y(t, "items", 7), r = y(t, "onChange", 7), o = y(t, "activeKeys", 31, () => Tt([]));
  function a(s) {
    var l;
    o().includes(s.key) ? o(o().filter((u) => u !== s.key)) : (o().push(s.key), o(o())), (l = r()) == null || l(s, o());
  }
  var i = Hm();
  return It(i, 21, n, Vi, (s, l, u) => {
    var c = Vm(), d = W(c);
    ae(d, "tabindex", u), d.__click = [Pm, a, l], d.__keydown = [Mm, a, l];
    var f = W(d);
    {
      var g = (h) => {
        var k = Sm(), S = W(k);
        Yn(S, {
          get target() {
            return v(l).icon;
          }
        }), K(k), D(h, k);
      };
      be(f, (h) => {
        v(l).icon && h(g);
      });
    }
    var w = I(f, 2);
    Yn(w, {
      get target() {
        return v(l).title;
      }
    });
    var x = I(w, 2);
    K(d);
    var $ = I(d, 2);
    {
      var C = (h) => {
        var k = Nm(), S = W(k);
        Yn(S, {
          get target() {
            return v(l).description;
          }
        }), K(k), D(h, k);
      };
      be($, (h) => {
        v(l).description && h(C);
      });
    }
    var p = I($, 2);
    {
      var b = (h) => {
        var k = zm(), S = W(k);
        Yn(S, {
          get target() {
            return v(l).content;
          }
        }), K(k), D(h, k);
      };
      be(p, (h) => {
        o().includes(v(l).key) && h(b);
      });
    }
    K(c), _e((h) => $t(x, 1, `tf-collapse-item-title-arrow ${h ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(v(l).key) ? "rotate-90" : ""
    ]), D(s, c);
  }), K(i), _e(() => {
    ae(i, "style", t.style), $t(i, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), D(e, i), ue({
    get items() {
      return n();
    },
    set items(s) {
      n(s), m();
    },
    get onChange() {
      return r();
    },
    set onChange(s) {
      r(s), m();
    },
    get activeKeys() {
      return o();
    },
    set activeKeys(s = []) {
      o(s), m();
    }
  });
}
zi(["click", "keydown"]);
re(nd, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Yn(e, t) {
  le(t, !0);
  let n = y(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = Qe(), o = we(r);
  {
    var a = (s) => {
      var l = Qe(), u = we(l);
      sr(u, () => n() ?? ct), D(s, l);
    }, i = (s) => {
      var l = Qe(), u = we(l);
      cu(u, n), D(s, l);
    };
    be(o, (s) => {
      typeof n() == "function" ? s(a) : s(i, !1);
    });
  }
  return D(e, r), ue({
    get target() {
      return n();
    },
    set target(s) {
      n(s), m();
    }
  });
}
re(Yn, { target: {} }, [], [], !0);
var Tm = (e, t, n) => t(v(n)), Dm = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), Lm = /* @__PURE__ */ ne('<div class="tf-select-content-children"><!></div>'), Am = /* @__PURE__ */ ne('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), Im = /* @__PURE__ */ ne('<div class="tf-select-content nopan nodrag"><!></div>'), Zm = /* @__PURE__ */ ne("<!> <!>", 1), Bm = /* @__PURE__ */ ne('<div class="tf-select-input-placeholder"> </div>'), Rm = /* @__PURE__ */ ne('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), Ym = /* @__PURE__ */ ne("<div><!></div>");
function pn(e, t) {
  le(t, !0);
  const n = (b, h = ct) => {
    var k = Qe(), S = we(k);
    It(S, 19, h, (M, z) => `${z}_${M.value}`, (M, z) => {
      var V = Am(), T = we(V);
      T.__click = [Tm, x, z];
      var L = W(T), O = W(L);
      {
        var R = (E) => {
          var H = Dm();
          D(E, H);
        };
        be(O, (E) => {
          v(z).children && v(z).children.length > 0 && E(R);
        });
      }
      K(L);
      var P = I(L, 2);
      Yn(P, {
        get target() {
          return v(z).label;
        }
      }), K(T);
      var N = I(T, 2);
      {
        var _ = (E) => {
          var H = Lm(), A = W(H);
          n(A, () => v(z).children), K(H), D(E, H);
        };
        be(N, (E) => {
          v(z).children && v(z).children.length > 0 && (l() || c().includes(v(z).value)) && E(_);
        });
      }
      D(M, V);
    }), D(b, k);
  };
  let r = y(t, "items", 7), o = y(t, "onExpand", 7), a = y(t, "onSelect", 7), i = y(t, "value", 23, () => []), s = y(t, "defaultValue", 23, () => []), l = y(t, "expandAll", 7, !0), u = y(t, "multiple", 7, !1), c = y(t, "expandValue", 23, () => []), d = y(t, "placeholder", 7), f = /* @__PURE__ */ Ct(t, [
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
  ]), g = /* @__PURE__ */ Se(() => {
    const b = [], h = (k) => {
      for (let S of k)
        i().length > 0 ? i().includes(S.value) && b.push(S) : s().includes(S.value) && b.push(S), S.children && S.children.length > 0 && h(S.children);
    };
    return h(r()), b;
  }), w;
  function x(b) {
    var h, k;
    if (b.children && b.children.length > 0) {
      (h = o()) == null || h(b);
      return;
    } else
      w == null || w.hide(), (k = a()) == null || k(b);
  }
  var $ = Ym();
  let C;
  var p = W($);
  return Hn(
    zo(p, {
      floating: (b) => {
        var h = Im(), k = W(h);
        n(k, r), K(h), D(b, h);
      },
      children: (b, h) => {
        var k = Rm();
        let S;
        var M = W(k);
        It(
          M,
          23,
          () => v(g),
          (z, V) => `${V}_${z.value}`,
          (z, V, T) => {
            var L = Qe(), O = we(L);
            {
              var R = (N) => {
                var _ = Qe(), E = we(_);
                {
                  var H = (A) => {
                    Yn(A, {
                      get target() {
                        return v(V).label;
                      }
                    });
                  };
                  be(E, (A) => {
                    v(T) === 0 && A(H);
                  });
                }
                D(N, _);
              }, P = (N) => {
                var _ = Zm(), E = we(_);
                Yn(E, {
                  get target() {
                    return v(V).label;
                  }
                });
                var H = I(E, 2);
                {
                  var A = (B) => {
                    var j = Ie(",");
                    D(B, j);
                  };
                  be(H, (B) => {
                    v(T) < v(g).length - 1 && B(A);
                  });
                }
                D(N, _);
              };
              be(O, (N) => {
                u() ? N(P, !1) : N(R);
              });
            }
            D(z, L);
          },
          (z) => {
            var V = Bm(), T = W(V, !0);
            K(V), _e(() => wn(T, d())), D(z, V);
          }
        ), K(M), Me(2), K(k), _e(() => S = rn(k, S, {
          class: "tf-select-input nopan nodrag",
          ...f
        })), D(b, k);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (b) => w = b,
    () => w
  ), K($), _e(() => C = rn($, C, {
    ...f,
    class: `tf-select ${f.class ?? ""}`
  })), D(e, $), ue({
    get items() {
      return r();
    },
    set items(b) {
      r(b), m();
    },
    get onExpand() {
      return o();
    },
    set onExpand(b) {
      o(b), m();
    },
    get onSelect() {
      return a();
    },
    set onSelect(b) {
      a(b), m();
    },
    get value() {
      return i();
    },
    set value(b = []) {
      i(b), m();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue(b = []) {
      s(b), m();
    },
    get expandAll() {
      return l();
    },
    set expandAll(b = !0) {
      l(b), m();
    },
    get multiple() {
      return u();
    },
    set multiple(b = !1) {
      u(b), m();
    },
    get expandValue() {
      return c();
    },
    set expandValue(b = []) {
      c(b), m();
    },
    get placeholder() {
      return d();
    },
    set placeholder(b) {
      d(b), m();
    }
  });
}
zi(["click"]);
re(
  pn,
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
const po = Math.min, Cr = Math.max, xi = Math.round, gn = (e) => ({
  x: e,
  y: e
}), Km = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Xm = {
  start: "end",
  end: "start"
};
function Ea(e, t, n) {
  return Cr(e, po(t, n));
}
function Mo(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function dr(e) {
  return e.split("-")[0];
}
function So(e) {
  return e.split("-")[1];
}
function rd(e) {
  return e === "x" ? "y" : "x";
}
function ls(e) {
  return e === "y" ? "height" : "width";
}
function Tr(e) {
  return ["top", "bottom"].includes(dr(e)) ? "y" : "x";
}
function us(e) {
  return rd(Tr(e));
}
function Wm(e, t, n) {
  n === void 0 && (n = !1);
  const r = So(e), o = us(e), a = ls(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = bi(i)), [i, bi(i)];
}
function jm(e) {
  const t = bi(e);
  return [Pa(e), t, Pa(t)];
}
function Pa(e) {
  return e.replace(/start|end/g, (t) => Xm[t]);
}
function qm(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], a = ["top", "bottom"], i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? a : i;
    default:
      return [];
  }
}
function Fm(e, t, n, r) {
  const o = So(e);
  let a = qm(dr(e), n === "start", r);
  return o && (a = a.map((i) => i + "-" + o), t && (a = a.concat(a.map(Pa)))), a;
}
function bi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Km[t]);
}
function Gm(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function od(e) {
  return typeof e != "number" ? Gm(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function $i(e) {
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
function Cl(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = Tr(t), i = us(t), s = ls(i), l = dr(t), u = a === "y", c = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[s] / 2 - o[s] / 2;
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
        y: d
      };
      break;
    case "left":
      g = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      g = {
        x: r.x,
        y: r.y
      };
  }
  switch (So(t)) {
    case "start":
      g[i] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      g[i] += f * (n && u ? -1 : 1);
      break;
  }
  return g;
}
const Um = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: i
  } = n, s = a.filter(Boolean), l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: c,
    y: d
  } = Cl(u, r, l), f = r, g = {}, w = 0;
  for (let x = 0; x < s.length; x++) {
    const {
      name: $,
      fn: C
    } = s[x], {
      x: p,
      y: b,
      data: h,
      reset: k
    } = await C({
      x: c,
      y: d,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: g,
      rects: u,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = p ?? c, d = b ?? d, g = {
      ...g,
      [$]: {
        ...g[$],
        ...h
      }
    }, k && w <= 50 && (w++, typeof k == "object" && (k.placement && (f = k.placement), k.rects && (u = k.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : k.rects), {
      x: c,
      y: d
    } = Cl(u, f, l)), x = -1);
  }
  return {
    x: c,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: g
  };
};
async function id(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: a,
    rects: i,
    elements: s,
    strategy: l
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: g = 0
  } = Mo(t, e), w = od(g), x = s[f ? d === "floating" ? "reference" : "floating" : d], $ = $i(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(x))) == null || n ? x : x.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), C = d === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, p = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), b = await (a.isElement == null ? void 0 : a.isElement(p)) ? await (a.getScale == null ? void 0 : a.getScale(p)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, h = $i(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: C,
    offsetParent: p,
    strategy: l
  }) : C);
  return {
    top: ($.top - h.top + w.top) / b.y,
    bottom: (h.bottom - $.bottom + w.bottom) / b.y,
    left: ($.left - h.left + w.left) / b.x,
    right: (h.right - $.right + w.right) / b.x
  };
}
const Jm = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: a,
      platform: i,
      elements: s,
      middlewareData: l
    } = t, {
      element: u,
      padding: c = 0
    } = Mo(e, t) || {};
    if (u == null)
      return {};
    const d = od(c), f = {
      x: n,
      y: r
    }, g = us(o), w = ls(g), x = await i.getDimensions(u), $ = g === "y", C = $ ? "top" : "left", p = $ ? "bottom" : "right", b = $ ? "clientHeight" : "clientWidth", h = a.reference[w] + a.reference[g] - f[g] - a.floating[w], k = f[g] - a.reference[g], S = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let M = S ? S[b] : 0;
    (!M || !await (i.isElement == null ? void 0 : i.isElement(S))) && (M = s.floating[b] || a.floating[w]);
    const z = h / 2 - k / 2, V = M / 2 - x[w] / 2 - 1, T = po(d[C], V), L = po(d[p], V), O = T, R = M - x[w] - L, P = M / 2 - x[w] / 2 + z, N = Ea(O, P, R), _ = !l.arrow && So(o) != null && P !== N && a.reference[w] / 2 - (P < O ? T : L) - x[w] / 2 < 0, E = _ ? P < O ? P - O : P - R : 0;
    return {
      [g]: f[g] + E,
      data: {
        [g]: N,
        centerOffset: P - N - E,
        ..._ && {
          alignmentOffset: E
        }
      },
      reset: _
    };
  }
}), Qm = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: a,
        rects: i,
        initialPlacement: s,
        platform: l,
        elements: u
      } = t, {
        mainAxis: c = !0,
        crossAxis: d = !0,
        fallbackPlacements: f,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: w = "none",
        flipAlignment: x = !0,
        ...$
      } = Mo(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const C = dr(o), p = Tr(s), b = dr(s) === s, h = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), k = f || (b || !x ? [bi(s)] : jm(s)), S = w !== "none";
      !f && S && k.push(...Fm(s, x, w, h));
      const M = [s, ...k], z = await id(t, $), V = [];
      let T = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (c && V.push(z[C]), d) {
        const P = Wm(o, i, h);
        V.push(z[P[0]], z[P[1]]);
      }
      if (T = [...T, {
        placement: o,
        overflows: V
      }], !V.every((P) => P <= 0)) {
        var L, O;
        const P = (((L = a.flip) == null ? void 0 : L.index) || 0) + 1, N = M[P];
        if (N)
          return {
            data: {
              index: P,
              overflows: T
            },
            reset: {
              placement: N
            }
          };
        let _ = (O = T.filter((E) => E.overflows[0] <= 0).sort((E, H) => E.overflows[1] - H.overflows[1])[0]) == null ? void 0 : O.placement;
        if (!_)
          switch (g) {
            case "bestFit": {
              var R;
              const E = (R = T.filter((H) => {
                if (S) {
                  const A = Tr(H.placement);
                  return A === p || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  A === "y";
                }
                return !0;
              }).map((H) => [H.placement, H.overflows.filter((A) => A > 0).reduce((A, B) => A + B, 0)]).sort((H, A) => H[1] - A[1])[0]) == null ? void 0 : R[0];
              E && (_ = E);
              break;
            }
            case "initialPlacement":
              _ = s;
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
async function e2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = dr(n), s = So(n), l = Tr(n) === "y", u = ["left", "top"].includes(i) ? -1 : 1, c = a && l ? -1 : 1, d = Mo(t, e);
  let {
    mainAxis: f,
    crossAxis: g,
    alignmentAxis: w
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return s && typeof w == "number" && (g = s === "end" ? w * -1 : w), l ? {
    x: g * c,
    y: f * u
  } : {
    x: f * u,
    y: g * c
  };
}
const t2 = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: a,
        placement: i,
        middlewareData: s
      } = t, l = await e2(t, e);
      return i === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: a + l.y,
        data: {
          ...l,
          placement: i
        }
      };
    }
  };
}, n2 = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: a = !0,
        crossAxis: i = !1,
        limiter: s = {
          fn: ($) => {
            let {
              x: C,
              y: p
            } = $;
            return {
              x: C,
              y: p
            };
          }
        },
        ...l
      } = Mo(e, t), u = {
        x: n,
        y: r
      }, c = await id(t, l), d = Tr(dr(o)), f = rd(d);
      let g = u[f], w = u[d];
      if (a) {
        const $ = f === "y" ? "top" : "left", C = f === "y" ? "bottom" : "right", p = g + c[$], b = g - c[C];
        g = Ea(p, g, b);
      }
      if (i) {
        const $ = d === "y" ? "top" : "left", C = d === "y" ? "bottom" : "right", p = w + c[$], b = w - c[C];
        w = Ea(p, w, b);
      }
      const x = s.fn({
        ...t,
        [f]: g,
        [d]: w
      });
      return {
        ...x,
        data: {
          x: x.x - n,
          y: x.y - r,
          enabled: {
            [f]: a,
            [d]: i
          }
        }
      };
    }
  };
};
function Yi() {
  return typeof window < "u";
}
function Yr(e) {
  return ad(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function At(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ln(e) {
  var t;
  return (t = (ad(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ad(e) {
  return Yi() ? e instanceof Node || e instanceof At(e).Node : !1;
}
function on(e) {
  return Yi() ? e instanceof Element || e instanceof At(e).Element : !1;
}
function mn(e) {
  return Yi() ? e instanceof HTMLElement || e instanceof At(e).HTMLElement : !1;
}
function _l(e) {
  return !Yi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof At(e).ShadowRoot;
}
function No(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = an(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function r2(e) {
  return ["table", "td", "th"].includes(Yr(e));
}
function Ki(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function cs(e) {
  const t = ds(), n = on(e) ? an(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function o2(e) {
  let t = Un(e);
  for (; mn(t) && !Dr(t); ) {
    if (cs(t))
      return t;
    if (Ki(t))
      return null;
    t = Un(t);
  }
  return null;
}
function ds() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Dr(e) {
  return ["html", "body", "#document"].includes(Yr(e));
}
function an(e) {
  return At(e).getComputedStyle(e);
}
function Xi(e) {
  return on(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Un(e) {
  if (Yr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    _l(e) && e.host || // Fallback.
    Ln(e)
  );
  return _l(t) ? t.host : t;
}
function sd(e) {
  const t = Un(e);
  return Dr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : mn(t) && No(t) ? t : sd(t);
}
function ld(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = sd(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = At(o);
  return a ? (Ma(i), t.concat(i, i.visualViewport || [], No(o) ? o : [], [])) : t.concat(o, ld(o, []));
}
function Ma(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ud(e) {
  const t = an(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = mn(e), a = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, s = xi(n) !== a || xi(r) !== i;
  return s && (n = a, r = i), {
    width: n,
    height: r,
    $: s
  };
}
function cd(e) {
  return on(e) ? e : e.contextElement;
}
function _r(e) {
  const t = cd(e);
  if (!mn(t))
    return gn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = ud(t);
  let i = (a ? xi(n.width) : n.width) / r, s = (a ? xi(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const i2 = /* @__PURE__ */ gn(0);
function dd(e) {
  const t = At(e);
  return !ds() || !t.visualViewport ? i2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function a2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== At(e) ? !1 : t;
}
function mo(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = cd(e);
  let i = gn(1);
  t && (r ? on(r) && (i = _r(r)) : i = _r(e));
  const s = a2(a, n, r) ? dd(a) : gn(0);
  let l = (o.left + s.x) / i.x, u = (o.top + s.y) / i.y, c = o.width / i.x, d = o.height / i.y;
  if (a) {
    const f = At(a), g = r && on(r) ? At(r) : r;
    let w = f, x = Ma(w);
    for (; x && r && g !== w; ) {
      const $ = _r(x), C = x.getBoundingClientRect(), p = an(x), b = C.left + (x.clientLeft + parseFloat(p.paddingLeft)) * $.x, h = C.top + (x.clientTop + parseFloat(p.paddingTop)) * $.y;
      l *= $.x, u *= $.y, c *= $.x, d *= $.y, l += b, u += h, w = At(x), x = Ma(w);
    }
  }
  return $i({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function fs(e, t) {
  const n = Xi(e).scrollLeft;
  return t ? t.left + n : mo(Ln(e)).left + n;
}
function fd(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    fs(e, r)
  )), a = r.top + t.scrollTop;
  return {
    x: o,
    y: a
  };
}
function s2(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", i = Ln(r), s = t ? Ki(t.floating) : !1;
  if (r === i || s && a)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = gn(1);
  const c = gn(0), d = mn(r);
  if ((d || !d && !a) && ((Yr(r) !== "body" || No(i)) && (l = Xi(r)), mn(r))) {
    const g = mo(r);
    u = _r(r), c.x = g.x + r.clientLeft, c.y = g.y + r.clientTop;
  }
  const f = i && !d && !a ? fd(i, l, !0) : gn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + f.y
  };
}
function l2(e) {
  return Array.from(e.getClientRects());
}
function u2(e) {
  const t = Ln(e), n = Xi(e), r = e.ownerDocument.body, o = Cr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Cr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + fs(e);
  const s = -n.scrollTop;
  return an(r).direction === "rtl" && (i += Cr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: i,
    y: s
  };
}
function c2(e, t) {
  const n = At(e), r = Ln(e), o = n.visualViewport;
  let a = r.clientWidth, i = r.clientHeight, s = 0, l = 0;
  if (o) {
    a = o.width, i = o.height;
    const u = ds();
    (!u || u && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s,
    y: l
  };
}
function d2(e, t) {
  const n = mo(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = mn(e) ? _r(e) : gn(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, l = o * a.x, u = r * a.y;
  return {
    width: i,
    height: s,
    x: l,
    y: u
  };
}
function El(e, t, n) {
  let r;
  if (t === "viewport")
    r = c2(e, n);
  else if (t === "document")
    r = u2(Ln(e));
  else if (on(t))
    r = d2(t, n);
  else {
    const o = dd(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return $i(r);
}
function gd(e, t) {
  const n = Un(e);
  return n === t || !on(n) || Dr(n) ? !1 : an(n).position === "fixed" || gd(n, t);
}
function f2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = ld(e, []).filter((s) => on(s) && Yr(s) !== "body"), o = null;
  const a = an(e).position === "fixed";
  let i = a ? Un(e) : e;
  for (; on(i) && !Dr(i); ) {
    const s = an(i), l = cs(i);
    !l && s.position === "fixed" && (o = null), (a ? !l && !o : !l && s.position === "static" && o && ["absolute", "fixed"].includes(o.position) || No(i) && !l && gd(e, i)) ? r = r.filter((u) => u !== i) : o = s, i = Un(i);
  }
  return t.set(e, r), r;
}
function g2(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? Ki(t) ? [] : f2(t, this._c) : [].concat(n), r], i = a[0], s = a.reduce((l, u) => {
    const c = El(t, u, o);
    return l.top = Cr(c.top, l.top), l.right = po(c.right, l.right), l.bottom = po(c.bottom, l.bottom), l.left = Cr(c.left, l.left), l;
  }, El(t, i, o));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
function v2(e) {
  const {
    width: t,
    height: n
  } = ud(e);
  return {
    width: t,
    height: n
  };
}
function h2(e, t, n) {
  const r = mn(t), o = Ln(t), a = n === "fixed", i = mo(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = gn(0);
  if (r || !r && !a)
    if ((Yr(t) !== "body" || No(o)) && (s = Xi(t)), r) {
      const f = mo(t, !0, a, t);
      l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop;
    } else o && (l.x = fs(o));
  const u = o && !r && !a ? fd(o, s) : gn(0), c = i.left + s.scrollLeft - l.x - u.x, d = i.top + s.scrollTop - l.y - u.y;
  return {
    x: c,
    y: d,
    width: i.width,
    height: i.height
  };
}
function oa(e) {
  return an(e).position === "static";
}
function Pl(e, t) {
  if (!mn(e) || an(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Ln(e) === n && (n = n.ownerDocument.body), n;
}
function vd(e, t) {
  const n = At(e);
  if (Ki(e))
    return n;
  if (!mn(e)) {
    let o = Un(e);
    for (; o && !Dr(o); ) {
      if (on(o) && !oa(o))
        return o;
      o = Un(o);
    }
    return n;
  }
  let r = Pl(e, t);
  for (; r && r2(r) && oa(r); )
    r = Pl(r, t);
  return r && Dr(r) && oa(r) && !cs(r) ? n : r || o2(e) || n;
}
const p2 = async function(e) {
  const t = this.getOffsetParent || vd, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: h2(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function m2(e) {
  return an(e).direction === "rtl";
}
const y2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: s2,
  getDocumentElement: Ln,
  getClippingRect: g2,
  getOffsetParent: vd,
  getElementRects: p2,
  getClientRects: l2,
  getDimensions: v2,
  getScale: _r,
  isElement: on,
  isRTL: m2
}, w2 = t2, x2 = n2, b2 = Qm, $2 = Jm, k2 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: y2,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return Um(e, t, {
    ...o,
    platform: a
  });
}, C2 = ({
  trigger: e,
  triggerEvent: t,
  floatContent: n,
  placement: r = "bottom",
  offsetOptions: o,
  flipOptions: a,
  shiftOptions: i,
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
    k2(e, u, {
      placement: r,
      middleware: [
        w2(o),
        // 手动偏移配置
        b2(a),
        //自动翻转
        x2(i),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [$2({ element: c })] : []
      ]
    }).then(({ x: C, y: p, placement: b, middlewareData: h }) => {
      if (Object.assign(u.style, {
        left: `${C}px`,
        top: `${p}px`
      }), l) {
        const { x: k, y: S } = h.arrow, M = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[b.split("-")[0]];
        Object.assign(c.style, {
          zIndex: -1,
          left: k != null ? `${k}px` : "",
          top: S != null ? `${S}px` : "",
          right: "",
          bottom: "",
          [M]: "2px"
        });
      }
    });
  }
  let f = !1;
  function g() {
    u.style.display = "block", u.style.visibility = "block", u.style.position = "absolute", l && (c.style.display = "block"), f = !0, d();
  }
  function w() {
    u.style.display = "none", l && (c.style.display = "none"), f = !1;
  }
  function x(C) {
    C.stopPropagation(), f ? w() : g();
  }
  function $(C) {
    u.contains(C.target) || w();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((C) => {
    e.addEventListener(C, x);
  }), document.addEventListener("click", $), {
    destroy() {
      t.forEach((C) => {
        e.removeEventListener(C, x);
      }), document.removeEventListener("click", $);
    },
    hide() {
      w();
    },
    isVisible() {
      return f;
    }
  };
};
var _2 = /* @__PURE__ */ ne('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function zo(e, t) {
  le(t, !0);
  const n = y(t, "children", 7), r = y(t, "floating", 7), o = y(t, "placement", 7, "bottom");
  let a, i, s;
  bn(() => (s = C2({
    trigger: a,
    floatContent: i,
    interactive: !0,
    placement: o()
  }), () => {
    s.destroy();
  }));
  function l() {
    s.hide();
  }
  var u = _2(), c = W(u), d = W(c);
  sr(d, n), K(c), Hn(c, (w) => a = w, () => a);
  var f = I(c, 2), g = W(f);
  return sr(g, r), K(f), Hn(f, (w) => i = w, () => i), K(u), D(e, u), ue({
    hide: l,
    get children() {
      return n();
    },
    set children(w) {
      n(w), m();
    },
    get floating() {
      return r();
    },
    set floating(w) {
      r(w), m();
    },
    get placement() {
      return o();
    },
    set placement(w = "bottom") {
      o(w), m();
    }
  });
}
re(zo, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Ue(e, t) {
  le(t, !0);
  const n = y(t, "children", 7), r = y(t, "level", 7, 1), o = y(t, "mt", 7), a = y(t, "mb", 7);
  var i = Qe(), s = we(i);
  return b1(s, () => `h${r()}`, !1, (l, u) => {
    let c;
    _e(() => c = rn(
      l,
      c,
      {
        class: "tf-heading",
        style: `margin-top:${o() || "0"};margin-bottom:${a() || "0"}`
      },
      void 0,
      l.namespaceURI === Hl,
      l.nodeName.includes("-")
    ));
    var d = Qe(), f = we(d);
    sr(f, () => n() ?? ct), D(u, d);
  }), D(e, i), ue({
    get children() {
      return n();
    },
    set children(l) {
      n(l), m();
    },
    get level() {
      return r();
    },
    set level(l = 1) {
      r(l), m();
    },
    get mt() {
      return o();
    },
    set mt(l) {
      o(l), m();
    },
    get mb() {
      return a();
    },
    set mb(l) {
      a(l), m();
    }
  });
}
re(Ue, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var E2 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const P2 = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function Wi(e, t) {
  le(t, !0), Ge(e, P2);
  const n = /* @__PURE__ */ Ct(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  qe(e, ut(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var a = E2();
      D(r, a);
    },
    $$slots: { default: !0 }
  })), ue();
}
re(Wi, {}, [], [], !0);
const M2 = () => {
  const e = We();
  return {
    deleteNode: (t) => {
      e.nodes.update((n) => n.filter((r) => r.id !== t)), e.edges.update(
        (n) => n.filter((r) => r.source !== t && r.target !== t)
      );
    }
  };
}, Lr = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, S2 = () => {
  const { nodes: e, nodeLookup: t } = We();
  return {
    copyNode: (n) => {
      var r;
      const o = (r = q(t).get(n)) == null ? void 0 : r.internals.userNode;
      if (o) {
        const a = Lr(), i = {
          ...o,
          id: a,
          position: {
            x: o.position.x + 50,
            y: o.position.y + 50
          }
        };
        e.update((s) => [...s, i]), e.update(
          (s) => s.map(
            (l) => l.id === a ? { ...l, selected: !0 } : { ...l, selected: !1 }
          )
        );
      }
    }
  };
};
var N2 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), z2 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), V2 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), H2 = /* @__PURE__ */ ne('<div class="tf-node-toolbar svelte-44dmwv"><!> <!> <!></div>'), O2 = /* @__PURE__ */ ne('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const T2 = {
  hash: "svelte-44dmwv",
  code: ".tf-node-toolbar.svelte-44dmwv {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}"
};
function kn(e, t) {
  le(t, !0), Ge(e, T2);
  const n = y(t, "data", 7), r = y(t, "id", 7, ""), o = y(t, "icon", 7), a = y(t, "handle", 7), i = y(t, "children", 7), s = y(t, "allowExecute", 7, !0), l = y(t, "allowCopy", 7, !0), u = y(t, "allowDelete", 7, !0), c = y(t, "showSourceHandle", 7, !0), d = y(t, "showTargetHandle", 7, !0);
  let f = n().expand ? ["key"] : [];
  const { updateNodeData: g } = Bt(), w = [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: i()
    }
  ], { deleteNode: x } = M2(), { copyNode: $ } = S2();
  var C = O2(), p = we(C);
  {
    var b = (O) => {
      Qc(O, {
        get position() {
          return Ce.Top;
        },
        align: "end",
        children: (R, P) => {
          var N = H2(), _ = W(N);
          {
            var E = (F) => {
              qe(F, {
                class: "tf-node-toolbar-item",
                children: (ie, Q) => {
                  var Y = N2();
                  D(ie, Y);
                },
                $$slots: { default: !0 }
              });
            };
            be(_, (F) => {
              s() && F(E);
            });
          }
          var H = I(_, 2);
          {
            var A = (F) => {
              qe(F, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  $(r());
                },
                children: (ie, Q) => {
                  var Y = z2();
                  D(ie, Y);
                },
                $$slots: { default: !0 }
              });
            };
            be(H, (F) => {
              l() && F(A);
            });
          }
          var B = I(H, 2);
          {
            var j = (F) => {
              qe(F, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  x(r());
                },
                children: (ie, Q) => {
                  var Y = V2();
                  D(ie, Y);
                },
                $$slots: { default: !0 }
              });
            };
            be(B, (F) => {
              u() && F(j);
            });
          }
          K(N), D(R, N);
        },
        $$slots: { default: !0 }
      });
    };
    be(p, (O) => {
      (s() || l() || u()) && O(b);
    });
  }
  var h = I(p, 2), k = I(W(h), 2), S = W(k);
  nd(S, {
    items: w,
    activeKeys: f,
    onChange: (O, R) => {
      g(r(), { expand: R == null ? void 0 : R.includes("key") });
    }
  }), K(k), K(h);
  var M = I(h, 2);
  {
    var z = (O) => {
      Gn(O, {
        type: "target",
        get position() {
          return Ce.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    be(M, (O) => {
      d() && O(z);
    });
  }
  var V = I(M, 2);
  {
    var T = (O) => {
      Gn(O, {
        type: "source",
        get position() {
          return Ce.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    be(V, (O) => {
      c() && O(T);
    });
  }
  var L = I(V, 2);
  return sr(L, () => a() ?? ct), D(e, C), ue({
    get data() {
      return n();
    },
    set data(O) {
      n(O), m();
    },
    get id() {
      return r();
    },
    set id(O = "") {
      r(O), m();
    },
    get icon() {
      return o();
    },
    set icon(O) {
      o(O), m();
    },
    get handle() {
      return a();
    },
    set handle(O) {
      a(O), m();
    },
    get children() {
      return i();
    },
    set children(O) {
      i(O), m();
    },
    get allowExecute() {
      return s();
    },
    set allowExecute(O = !0) {
      s(O), m();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(O = !0) {
      l(O), m();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(O = !0) {
      u(O), m();
    },
    get showSourceHandle() {
      return c();
    },
    set showSourceHandle(O = !0) {
      c(O), m();
    },
    get showTargetHandle() {
      return d();
    },
    set showTargetHandle(O = !0) {
      d(O), m();
    }
  });
}
re(
  kn,
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
    showTargetHandle: {}
  },
  [],
  [],
  !0
);
function mt() {
  return ar("svelteflow__node_id");
}
const hd = [
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
], D2 = [
  {
    value: "ref",
    label: "引用"
  },
  {
    value: "input",
    label: "固定值"
  }
];
var L2 = /* @__PURE__ */ ne('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), A2 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), I2 = /* @__PURE__ */ ne('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const Z2 = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function pd(e, t) {
  le(t, !0), Ge(e, Z2);
  const [n, r] = et(), o = () => J(v(l), "$node", n), a = y(t, "parameter", 7), i = y(t, "index", 7);
  let s = mt(), l = /* @__PURE__ */ Se(() => hr(s)), u = /* @__PURE__ */ Se(() => {
    var z, V;
    return {
      ...a(),
      ...(V = (z = o()) == null ? void 0 : z.data) == null ? void 0 : V.parameters[i()]
    };
  });
  const { updateNodeData: c } = Bt(), d = (z) => {
    const V = z.target.value;
    c(s, (T) => {
      let L = T.data.parameters;
      return L[i()].name = V, { parameters: L };
    });
  }, f = (z) => {
    const V = z.target.checked;
    c(s, (T) => {
      let L = T.data.parameters;
      return L[i()].required = V, { parameters: L };
    });
  }, g = (z) => {
    const V = z.value;
    V && c(s, (T) => {
      let L = T.data.parameters;
      return L[i()].dataType = V, { parameters: L };
    });
  };
  let w;
  const x = () => {
    c(s, (z) => {
      let V = z.data.parameters;
      return V.splice(i(), 1), { parameters: [...V] };
    }), w == null || w.hide();
  };
  var $ = I2(), C = we($), p = W(C);
  wt(p, {
    style: "width: 100%;",
    get value() {
      return v(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), K(C);
  var b = I(C, 2), h = W(b);
  ed(h, {
    get checked() {
      return v(u).required;
    },
    onchange: f
  }), K(b);
  var k = I(b, 2), S = W(k);
  Hn(
    zo(S, {
      placement: "bottom",
      floating: (z) => {
        var V = L2(), T = W(V), L = I(W(T));
        const O = /* @__PURE__ */ Se(() => v(u).dataType ? [v(u).dataType] : ["String"]);
        pn(L, {
          items: hd,
          style: "width: 100%",
          onSelect: g,
          get value() {
            return v(O);
          }
        }), K(T);
        var R = I(T, 2), P = I(W(R));
        kt(P, { rows: 1, style: "width: 100%;" }), K(R);
        var N = I(R, 2), _ = I(W(N));
        kt(_, { rows: 3, style: "width: 100%;" }), K(N);
        var E = I(N, 2), H = W(E);
        qe(H, {
          onclick: x,
          children: (A, B) => {
            Me();
            var j = Ie("删除");
            D(A, j);
          },
          $$slots: { default: !0 }
        }), K(E), K(V), D(z, V);
      },
      children: (z, V) => {
        qe(z, {
          class: "input-btn-more",
          children: (T, L) => {
            var O = A2();
            D(T, O);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (z) => w = z,
    () => w
  ), K(k), D(e, $);
  var M = ue({
    get parameter() {
      return a();
    },
    set parameter(z) {
      a(z), m();
    },
    get index() {
      return i();
    },
    set index(z) {
      i(z), m();
    }
  });
  return r(), M;
}
re(pd, { parameter: {}, index: {} }, [], [], !0);
var B2 = /* @__PURE__ */ ne('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), R2 = /* @__PURE__ */ ne('<div class="none-params svelte-3n0wca">无输入参数</div>'), Y2 = /* @__PURE__ */ ne('<div class="input-container svelte-3n0wca"><!> <!></div>');
const K2 = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function md(e, t) {
  le(t, !0), Ge(e, K2);
  const [n, r] = et(), o = () => J(v(i), "$node", n);
  let a = mt(), i = /* @__PURE__ */ Se(() => hr(a)), s = /* @__PURE__ */ Se(() => {
    var f, g;
    return [...((g = (f = o()) == null ? void 0 : f.data) == null ? void 0 : g.parameters) || []];
  });
  var l = Y2(), u = W(l);
  {
    var c = (f) => {
      var g = B2();
      Me(4), D(f, g);
    };
    be(u, (f) => {
      v(s).length !== 0 && f(c);
    });
  }
  var d = I(u, 2);
  It(
    d,
    19,
    () => v(s),
    (f) => f.id,
    (f, g, w) => {
      pd(f, {
        get parameter() {
          return v(g);
        },
        get index() {
          return v(w);
        }
      });
    },
    (f) => {
      var g = R2();
      D(f, g);
    }
  ), K(l), D(e, l), ue(), r();
}
re(md, {}, [], [], !0);
const yd = (e) => {
  !e || e.length == 0 || e.forEach((t) => {
    t.id || (t.id = Lr()), yd(t.children);
  });
}, An = () => {
  const { updateNodeData: e } = Bt();
  return {
    addParameter: (t, n = "parameters", r) => {
      yd(r == null ? void 0 : r.children);
      const o = {
        ...r,
        id: Lr()
      };
      e(t, (a) => {
        let i = a.data[n];
        return i ? i.push(o) : i = [o], {
          [n]: [...i]
        };
      });
    }
  };
};
var X2 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), W2 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), j2 = /* @__PURE__ */ ne('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const q2 = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function wd(e, t) {
  le(t, !0), Ge(e, q2);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ct(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: a } = An();
  return kn(e, ut(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    icon: (i) => {
      var s = X2();
      D(i, s);
    },
    children: (i, s) => {
      var l = j2(), u = we(l), c = W(u);
      Ue(c, {
        level: 3,
        children: (g, w) => {
          Me();
          var x = Ie("输入参数");
          D(g, x);
        },
        $$slots: { default: !0 }
      });
      var d = I(c, 2);
      qe(d, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          a(o);
        },
        children: (g, w) => {
          var x = W2();
          D(g, x);
        },
        $$slots: { default: !0 }
      }), K(u);
      var f = I(u, 2);
      md(f, {}), D(i, l);
    },
    $$slots: { icon: !0, default: !0 }
  })), ue({
    get data() {
      return n();
    },
    set data(i) {
      n(i), m();
    }
  });
}
re(wd, { data: {} }, [], [], !0);
const xd = (e, t, n) => {
  for (let r of n)
    r.target === t && r.source && (e.push(r.source), xd(e, r.source, n));
}, Ml = (e, t) => {
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
        const r = (o, a) => !o || o.length === 0 ? [] : o.map((i) => ({
          label: i.name + (t ? ` (Array<${i.dataType || "String"}>)` : ` (${i.dataType || "String"})`),
          // label: param.name ,
          value: a + "." + i.name,
          children: r(i.children, a + "." + i.name)
        }));
        return {
          label: e.data.title,
          value: e.id,
          children: r(n, e.id)
        };
      }
    }
  }
}, F2 = (e = !1) => {
  const t = mt(), n = hr(t), { nodes: r, edges: o } = We();
  return Xn([n, r, o], ([a, i, s]) => {
    const l = [];
    if (e) {
      for (let u of i)
        if (u.parentId === a.id) {
          const c = Ml(u, u.parentId === a.id);
          c && l.push(c);
        }
    } else {
      const u = [];
      xd(u, t, s);
      for (let c of i)
        if (u.includes(c.id)) {
          const d = Ml(c, c.parentId === a.id);
          d && l.push(d);
        }
    }
    return l;
  });
};
var G2 = /* @__PURE__ */ ne('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), U2 = /* @__PURE__ */ ne('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const J2 = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function bd(e, t) {
  le(t, !0), Ge(e, J2);
  const [n, r] = et(), o = () => J(v(c), "$node", n), a = () => J(h, "$selectItems", n), i = y(t, "parameter", 7), s = y(t, "index", 7), l = y(t, "dataKeyName", 7);
  let u = mt(), c = /* @__PURE__ */ Se(() => hr(u)), d = /* @__PURE__ */ Se(() => {
    var N;
    return {
      ...i(),
      ...(N = o()) == null ? void 0 : N.data[l()][s()]
    };
  });
  const { updateNodeData: f } = Bt(), g = (N, _) => {
    f(u, (E) => {
      let H = E.data[l()];
      return H[s()] = { ...H[s()], [N]: _ }, { [l()]: H };
    });
  }, w = (N) => {
    const _ = N.target.value;
    g("name", _);
  }, x = (N) => {
    const _ = N.target.value;
    g("value", _);
  }, $ = (N) => {
    const _ = N.value;
    g("ref", _);
  }, C = (N) => {
    const _ = N.value;
    g("refType", _);
  };
  let p;
  const b = () => {
    f(u, (N) => {
      let _ = N.data[l()];
      return _.splice(s(), 1), { [l()]: [..._] };
    }), p == null || p.hide();
  }, h = F2();
  var k = U2(), S = we(k), M = W(S);
  wt(M, {
    style: "width: 100%;",
    get value() {
      return v(d).name;
    },
    placeholder: "请输入参数名称",
    oninput: w
  }), K(S);
  var z = I(S, 2), V = W(z);
  {
    var T = (N) => {
      wt(N, {
        get value() {
          return v(d).value;
        },
        placeholder: "请输入参数值",
        oninput: x
      });
    }, L = (N) => {
      const _ = /* @__PURE__ */ Se(() => [v(d).ref]);
      pn(N, {
        get items() {
          return a();
        },
        style: "width: 100%",
        defaultValue: ["ref"],
        get value() {
          return v(_);
        },
        expandAll: !0,
        onSelect: $
      });
    };
    be(V, (N) => {
      v(d).refType === "input" ? N(T) : N(L, !1);
    });
  }
  K(z);
  var O = I(z, 2), R = W(O);
  Hn(
    zo(R, {
      placement: "bottom",
      floating: (N) => {
        var _ = G2(), E = W(_), H = I(W(E));
        const A = /* @__PURE__ */ Se(() => v(d).refType ? [v(d).refType] : []);
        pn(H, {
          items: D2,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return v(A);
          },
          onSelect: C
        }), K(E);
        var B = I(E, 2), j = I(W(B));
        kt(j, {
          rows: 1,
          style: "width: 100%;",
          onchange: (ce) => {
            const ke = ce.target.value;
            g("defaultValue", ke);
          }
        }), K(B);
        var F = I(B, 2), ie = I(W(F));
        kt(ie, {
          rows: 3,
          style: "width: 100%;",
          onchange: (ce) => {
            const ke = ce.target.value;
            g("description", ke);
          }
        }), K(F);
        var Q = I(F, 2), Y = W(Q);
        qe(Y, {
          onclick: b,
          children: (ce, ke) => {
            Me();
            var $e = Ie("删除");
            D(ce, $e);
          },
          $$slots: { default: !0 }
        }), K(Q), K(_), D(N, _);
      },
      children: (N, _) => {
        Wi(N, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (N) => p = N,
    () => p
  ), K(O), D(e, k);
  var P = ue({
    get parameter() {
      return i();
    },
    set parameter(N) {
      i(N), m();
    },
    get index() {
      return s();
    },
    set index(N) {
      s(N), m();
    },
    get dataKeyName() {
      return l();
    },
    set dataKeyName(N) {
      l(N), m();
    }
  });
  return r(), P;
}
re(bd, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var Q2 = /* @__PURE__ */ ne('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), ey = /* @__PURE__ */ ne('<div class="none-params svelte-1sm1mgi"> </div>'), ty = /* @__PURE__ */ ne('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const ny = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Xt(e, t) {
  le(t, !0), Ge(e, ny);
  const [n, r] = et(), o = () => J(v(l), "$node", n), a = y(t, "noneParameterText", 7, "无输入参数"), i = y(t, "dataKeyName", 7, "parameters");
  let s = mt(), l = /* @__PURE__ */ Se(() => hr(s)), u = /* @__PURE__ */ Se(() => {
    var x;
    return [...((x = o()) == null ? void 0 : x.data[i()]) || []];
  });
  var c = ty(), d = W(c);
  {
    var f = (x) => {
      var $ = Q2();
      Me(4), D(x, $);
    };
    be(d, (x) => {
      v(u).length !== 0 && x(f);
    });
  }
  var g = I(d, 2);
  It(
    g,
    19,
    () => v(u),
    (x) => x.id,
    (x, $, C) => {
      bd(x, {
        get parameter() {
          return v($);
        },
        get index() {
          return v(C);
        },
        get dataKeyName() {
          return i();
        }
      });
    },
    (x) => {
      var $ = ey(), C = W($, !0);
      K($), _e(() => wn(C, a())), D(x, $);
    }
  ), K(c), D(e, c);
  var w = ue({
    get noneParameterText() {
      return a();
    },
    set noneParameterText(x = "无输入参数") {
      a(x), m();
    },
    get dataKeyName() {
      return i();
    },
    set dataKeyName(x = "parameters") {
      i(x), m();
    }
  });
  return r(), w;
}
re(Xt, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var ry = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), oy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), iy = /* @__PURE__ */ ne('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const ay = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function $d(e, t) {
  le(t, !0), Ge(e, ay);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ct(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: a } = An();
  return kn(e, ut(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      allowExecute: !1,
      showSourceHandle: !1,
      icon: (i) => {
        var s = ry();
        D(i, s);
      },
      children: (i, s) => {
        var l = iy(), u = we(l), c = W(u);
        Ue(c, {
          level: 3,
          children: (g, w) => {
            Me();
            var x = Ie("输出参数");
            D(g, x);
          },
          $$slots: { default: !0 }
        });
        var d = I(c, 2);
        qe(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "outputDefs");
          },
          children: (g, w) => {
            var x = oy();
            D(g, x);
          },
          $$slots: { default: !0 }
        }), K(u);
        var f = I(u, 2);
        Xt(f, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs"
        }), D(i, l);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue({
    get data() {
      return n();
    },
    set data(i) {
      n(i), m();
    }
  });
}
re($d, { data: {} }, [], [], !0);
const ji = () => ar("tinyflow_options");
var sy = /* @__PURE__ */ xe('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), ly = /* @__PURE__ */ ne('<div class="input-more-item svelte-1cfeest"><!></div>'), uy = /* @__PURE__ */ ne('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), cy = /* @__PURE__ */ ne('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const dy = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function kd(e, t) {
  le(t, !0), Ge(e, dy);
  const [n, r] = et(), o = () => J(v(u), "$node", n), a = y(t, "parameter", 7), i = y(t, "position", 7), s = y(t, "dataKeyName", 7);
  let l = mt(), u = /* @__PURE__ */ Se(() => hr(l)), c = /* @__PURE__ */ Se(() => {
    var E;
    let H = (E = o()) == null ? void 0 : E.data[s()], A;
    if (H && i().length > 0) {
      let B = H;
      for (let j = 0; j < i().length; j++) {
        const F = i()[j];
        j == i().length - 1 ? A = B[F] : B = B[F].children;
      }
    }
    return { ...a(), ...A };
  });
  const { updateNodeData: d } = Bt(), f = (E, H) => {
    d(l, (A) => {
      const B = A.data[s()];
      if (B && i().length > 0) {
        let j = B;
        for (let F = 0; F < i().length; F++) {
          const ie = i()[F];
          F == i().length - 1 ? j[ie] = { ...j[ie], [E]: H } : j = B[ie].children;
        }
      }
      return { [s()]: B };
    });
  }, g = (E) => {
    const H = E.target.value;
    f("name", H);
  }, w = (E) => {
    const H = E.value;
    f("dataType", H);
  };
  let x;
  const $ = () => {
    d(l, (E) => {
      let H = E.data[s()];
      if (H && i().length > 0) {
        let A = H;
        for (let B = 0; B < i().length; B++) {
          const j = i()[B];
          B == i().length - 1 ? A.splice(j, 1) : A = A[j].children;
        }
      }
      return { [s()]: [...H] };
    }), x == null || x.hide();
  }, C = () => {
    d(l, (E) => {
      let H = E.data[s()];
      if (H && i().length > 0) {
        let A = H;
        for (let B = 0; B < i().length; B++) {
          const j = i()[B];
          B == i().length - 1 ? A[j].children ? A[j].children.push({
            id: Lr(),
            name: "newParam",
            dataType: "String"
          }) : A[j].children = [
            {
              id: Lr(),
              name: "newParam",
              dataType: "String"
            }
          ] : A = A[j].children;
        }
      }
      return { [s()]: [...H] };
    });
  };
  var p = cy(), b = we(p), h = W(b);
  {
    var k = (E) => {
      var H = Qe(), A = we(H);
      It(A, 17, i, Vi, (B, j) => {
        Me();
        var F = Ie(" ");
        D(B, F);
      }), D(E, H);
    };
    be(h, (E) => {
      i().length > 1 && E(k);
    });
  }
  var S = I(h, 2);
  const M = /* @__PURE__ */ Se(() => v(c).nameDisabled === !0);
  wt(S, {
    style: "width: 100%;",
    get value() {
      return v(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: g,
    get disabled() {
      return v(M);
    }
  }), K(b);
  var z = I(b, 2), V = W(z);
  const T = /* @__PURE__ */ Se(() => v(c).dataType ? [v(c).dataType] : []), L = /* @__PURE__ */ Se(() => v(c).dataTypeDisabled === !0);
  pn(V, {
    items: hd,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return v(T);
    },
    get disabled() {
      return v(L);
    },
    onSelect: w
  });
  var O = I(V, 2);
  {
    var R = (E) => {
      qe(E, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: C,
        children: (H, A) => {
          var B = sy();
          D(H, B);
        },
        $$slots: { default: !0 }
      });
    };
    be(O, (E) => {
      (v(c).dataType === "Object" || v(c).dataType === "Array") && v(c).addChildDisabled !== !0 && E(R);
    });
  }
  K(z);
  var P = I(z, 2), N = W(P);
  Hn(
    zo(N, {
      placement: "bottom",
      floating: (E) => {
        var H = uy(), A = W(H), B = I(W(A));
        kt(B, {
          rows: 1,
          style: "width: 100%;",
          onchange: (Y) => {
            const ce = Y.target.value;
            f("defaultValue", ce);
          }
        }), K(A);
        var j = I(A, 2), F = I(W(j));
        kt(F, {
          rows: 3,
          style: "width: 100%;",
          onchange: (Y) => {
            const ce = Y.target.value;
            f("description", ce);
          }
        }), K(j);
        var ie = I(j, 2);
        {
          var Q = (Y) => {
            var ce = ly(), ke = W(ce);
            qe(ke, {
              onclick: $,
              children: ($e, ve) => {
                Me();
                var Ne = Ie("删除");
                D($e, Ne);
              },
              $$slots: { default: !0 }
            }), K(ce), D(Y, ce);
          };
          be(ie, (Y) => {
            v(c).deleteDisabled !== !0 && Y(Q);
          });
        }
        K(H), D(E, H);
      },
      children: (E, H) => {
        Wi(E, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (E) => x = E,
    () => x
  ), K(P), D(e, p);
  var _ = ue({
    get parameter() {
      return a();
    },
    set parameter(E) {
      a(E), m();
    },
    get position() {
      return i();
    },
    set position(E) {
      i(E), m();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(E) {
      s(E), m();
    }
  });
  return r(), _;
}
re(kd, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var fy = /* @__PURE__ */ ne("<!> <!>", 1), gy = /* @__PURE__ */ ne('<div class="none-params svelte-1sm1mgi"> </div>'), vy = /* @__PURE__ */ ne('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), hy = /* @__PURE__ */ ne('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const py = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Qn(e, t) {
  le(t, !0), Ge(e, py);
  const [n, r] = et(), o = () => J(v(u), "$node", n), a = ($, C = ct, p = ct) => {
    var b = Qe(), h = we(b);
    It(
      h,
      19,
      C,
      (k) => `${k.id}_${k.children ? k.children.length : 0}`,
      (k, S, M) => {
        var z = fy(), V = we(z);
        const T = /* @__PURE__ */ Se(() => [...p(), v(M)]);
        kd(V, {
          get parameter() {
            return v(S);
          },
          get position() {
            return v(T);
          },
          get dataKeyName() {
            return s();
          }
        });
        var L = I(V, 2);
        {
          var O = (R) => {
            var P = /* @__PURE__ */ ge(() => [...p(), v(M)]);
            a(R, () => v(S).children, () => v(P));
          };
          be(L, (R) => {
            v(S).children && R(O);
          });
        }
        D(k, z);
      },
      (k) => {
        var S = Qe(), M = we(S);
        {
          var z = (V) => {
            var T = gy(), L = W(T, !0);
            K(T), _e(() => wn(L, i())), D(V, T);
          };
          be(M, (V) => {
            p().length === 0 && V(z);
          });
        }
        D(k, S);
      }
    ), D($, b);
  }, i = y(t, "noneParameterText", 7, "无输出参数"), s = y(t, "dataKeyName", 7, "outputDefs");
  let l = mt(), u = /* @__PURE__ */ Se(() => hr(l)), c = /* @__PURE__ */ Se(() => {
    var $;
    return [...(($ = o()) == null ? void 0 : $.data[s()]) || []];
  });
  var d = hy(), f = W(d);
  {
    var g = ($) => {
      var C = vy();
      Me(4), D($, C);
    };
    be(f, ($) => {
      v(c).length !== 0 && $(g);
    });
  }
  var w = I(f, 2);
  a(w, () => v(c) || [], () => []), K(d), D(e, d);
  var x = ue({
    get noneParameterText() {
      return i();
    },
    set noneParameterText($ = "无输出参数") {
      i($), m();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName($ = "outputDefs") {
      s($), m();
    }
  });
  return r(), x;
}
re(Qn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var my = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), yy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), wy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), xy = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">模型</div> <div class="setting-item svelte-15t2v24"><!> <!></div> <div class="setting-title svelte-15t2v24">系统提示词</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">用户提示词</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const by = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Cd(e, t) {
  le(t, !0), Ge(e, by);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ct(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: a } = An(), i = ji();
  let s = ir(Tt([]));
  bn(async () => {
    var u, c;
    const d = await ((c = (u = i.provider) == null ? void 0 : u.llm) == null ? void 0 : c.call(u));
    v(s).push(...d || []);
  });
  const { updateNodeData: l } = Bt();
  return kn(e, ut(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = my();
        D(u, c);
      },
      children: (u, c) => {
        var d = xy(), f = we(d), g = W(f);
        Ue(g, {
          level: 3,
          children: (N, _) => {
            Me();
            var E = Ie("输入参数");
            D(N, E);
          },
          $$slots: { default: !0 }
        });
        var w = I(g, 2);
        qe(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (N, _) => {
            var E = yy();
            D(N, E);
          },
          $$slots: { default: !0 }
        }), K(f);
        var x = I(f, 2);
        Xt(x, {});
        var $ = I(x, 2);
        Ue($, {
          level: 3,
          mt: "10px",
          children: (N, _) => {
            Me();
            var E = Ie("模型设置");
            D(N, E);
          },
          $$slots: { default: !0 }
        });
        var C = I($, 4), p = W(C);
        const b = /* @__PURE__ */ Se(() => n().llmId ? [n().llmId] : []);
        pn(p, {
          get items() {
            return v(s);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (N) => {
            const _ = N.value;
            l(o, () => ({ llmId: _ }));
          },
          get value() {
            return v(b);
          }
        });
        var h = I(p, 2);
        Wi(h, {}), K(C);
        var k = I(C, 4), S = W(k);
        const M = /* @__PURE__ */ Se(() => n().systemPrompt || "");
        kt(S, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return v(M);
          },
          oninput: (N) => {
            l(o, { systemPrompt: N.target.value });
          }
        }), K(k);
        var z = I(k, 4), V = W(z);
        const T = /* @__PURE__ */ Se(() => n().userPrompt || "");
        kt(V, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return v(T);
          },
          oninput: (N) => {
            l(o, { userPrompt: N.target.value });
          }
        }), K(z);
        var L = I(z, 2), O = W(L);
        Ue(O, {
          level: 3,
          mt: "10px",
          children: (N, _) => {
            Me();
            var E = Ie("输出参数");
            D(N, E);
          },
          $$slots: { default: !0 }
        });
        var R = I(O, 2);
        qe(R, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "outputDefs");
          },
          children: (N, _) => {
            var E = wy();
            D(N, E);
          },
          $$slots: { default: !0 }
        }), K(L);
        var P = I(L, 2);
        Qn(P, {}), D(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue({
    get data() {
      return n();
    },
    set data(u) {
      n(u), m();
    }
  });
}
re(Cd, { data: {} }, [], [], !0);
var $y = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), ky = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Cy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), _y = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const Ey = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function _d(e, t) {
  le(t, !0), Ge(e, Ey);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ct(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: a } = An(), { updateNodeData: i } = Bt(), s = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" }
  ];
  return kn(e, ut(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = $y();
        D(l, u);
      },
      children: (l, u) => {
        var c = _y(), d = we(c), f = W(d);
        Ue(f, {
          level: 3,
          children: (T, L) => {
            Me();
            var O = Ie("输入参数");
            D(T, O);
          },
          $$slots: { default: !0 }
        });
        var g = I(f, 2);
        qe(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (T, L) => {
            var O = ky();
            D(T, O);
          },
          $$slots: { default: !0 }
        }), K(d);
        var w = I(d, 2);
        Xt(w, {});
        var x = I(w, 2);
        Ue(x, {
          level: 3,
          mt: "10px",
          children: (T, L) => {
            Me();
            var O = Ie("代码");
            D(T, O);
          },
          $$slots: { default: !0 }
        });
        var $ = I(x, 4), C = W($);
        const p = /* @__PURE__ */ Se(() => n().engine ? [n().engine] : ["qlexpress"]);
        pn(C, {
          items: s,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (T) => {
            const L = T.value;
            i(o, () => ({ engine: L }));
          },
          get value() {
            return v(p);
          }
        }), K($);
        var b = I($, 4), h = W(b);
        const k = /* @__PURE__ */ Se(() => n().code || "");
        kt(h, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: (T) => {
            i(o, () => ({ code: T.target.value }));
          },
          get value() {
            return v(k);
          }
        }), K(b);
        var S = I(b, 2), M = W(S);
        Ue(M, {
          level: 3,
          mt: "10px",
          children: (T, L) => {
            Me();
            var O = Ie("输出参数");
            D(T, O);
          },
          $$slots: { default: !0 }
        });
        var z = I(M, 2);
        qe(z, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "outputDefs");
          },
          children: (T, L) => {
            var O = Cy();
            D(T, O);
          },
          $$slots: { default: !0 }
        }), K(S);
        var V = I(S, 2);
        Qn(V, {}), D(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue({
    get data() {
      return n();
    },
    set data(l) {
      n(l), m();
    }
  });
}
re(_d, { data: {} }, [], [], !0);
var Py = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), My = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Sy = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Ny = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Ed(e, t) {
  le(t, !0), Ge(e, Ny);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ct(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: a } = An(), { updateNodeData: i } = Bt();
  return Er(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && a(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), kn(e, ut(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (s) => {
        var l = Py();
        D(s, l);
      },
      children: (s, l) => {
        var u = Sy(), c = we(u), d = W(c);
        Ue(d, {
          level: 3,
          children: (k, S) => {
            Me();
            var M = Ie("输入参数");
            D(k, M);
          },
          $$slots: { default: !0 }
        });
        var f = I(d, 2);
        qe(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (k, S) => {
            var M = My();
            D(k, M);
          },
          $$slots: { default: !0 }
        }), K(c);
        var g = I(c, 2);
        Xt(g, {});
        var w = I(g, 2);
        Ue(w, {
          level: 3,
          mt: "10px",
          children: (k, S) => {
            Me();
            var M = Ie("代码");
            D(k, M);
          },
          $$slots: { default: !0 }
        });
        var x = I(w, 4), $ = W(x);
        const C = /* @__PURE__ */ Se(() => n().template || "");
        kt($, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: (k) => {
            i(o, () => ({ template: k.target.value }));
          },
          get value() {
            return v(C);
          }
        }), K(x);
        var p = I(x, 2), b = W(p);
        Ue(b, {
          level: 3,
          mt: "10px",
          children: (k, S) => {
            Me();
            var M = Ie("输出参数");
            D(k, M);
          },
          $$slots: { default: !0 }
        }), K(p);
        var h = I(p, 2);
        Qn(h, {}), D(s, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue({
    get data() {
      return n();
    },
    set data(s) {
      n(s), m();
    }
  });
}
re(Ed, { data: {} }, [], [], !0);
var zy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), Vy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Hy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Oy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ty = /* @__PURE__ */ ne('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), Dy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ly = /* @__PURE__ */ ne('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), Ay = /* @__PURE__ */ ne('<div style="width: 100%"><!></div>'), Iy = /* @__PURE__ */ ne('<div style="width: 100%"><!></div>'), Zy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), By = /* @__PURE__ */ ne('<div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1vtcqdz"><!> <!></div> <!> <div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="radio-group svelte-1vtcqdz"><label class="svelte-1vtcqdz"><!>none</label> <label class="svelte-1vtcqdz"><!>form-data</label> <label class="svelte-1vtcqdz"><!>x-www-form-urlencoded</label> <label class="svelte-1vtcqdz"><!>json</label> <label class="svelte-1vtcqdz"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1vtcqdz"><!> <!></div> <!>', 1);
const Ry = {
  hash: "svelte-1vtcqdz",
  code: ".heading.svelte-1vtcqdz {display:flex;margin-bottom:10px;}.radio-group.svelte-1vtcqdz {display:flex;margin:10px 0;}.radio-group.svelte-1vtcqdz label:where(.svelte-1vtcqdz) {display:flex;font-size:14px;}"
};
function Pd(e, t) {
  le(t, !0), Ge(e, Ry);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ct(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: a } = An(), { updateNodeData: i } = Bt();
  return kn(e, ut(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (s) => {
        var l = zy();
        D(s, l);
      },
      children: (s, l) => {
        var u = By(), c = we(u), d = W(c), f = W(d);
        pn(f, {
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
        }), K(d);
        var g = I(d, 2), w = W(g);
        wt(w, { placeholder: "请输入url", style: "width: 100%" }), K(g), K(c);
        var x = I(c, 2), $ = W(x);
        Ue($, {
          level: 3,
          children: (X, fe) => {
            Me();
            var he = Ie("Http 头信息");
            D(X, he);
          },
          $$slots: { default: !0 }
        });
        var C = I($, 2);
        qe(C, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "headers");
          },
          children: (X, fe) => {
            var he = Vy();
            D(X, he);
          },
          $$slots: { default: !0 }
        }), K(x);
        var p = I(x, 2);
        Xt(p, { dataKeyName: "headers" });
        var b = I(p, 2), h = W(b);
        Ue(h, {
          level: 3,
          children: (X, fe) => {
            Me();
            var he = Ie("参数");
            D(X, he);
          },
          $$slots: { default: !0 }
        });
        var k = I(h, 2);
        qe(k, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "urlParameters");
          },
          children: (X, fe) => {
            var he = Hy();
            D(X, he);
          },
          $$slots: { default: !0 }
        }), K(b);
        var S = I(b, 2);
        Xt(S, { dataKeyName: "urlParameters" });
        var M = I(S, 2);
        Ue(M, {
          level: 3,
          mt: "10px",
          children: (X, fe) => {
            Me();
            var he = Ie("Body");
            D(X, he);
          },
          $$slots: { default: !0 }
        });
        var z = I(M, 2), V = W(z), T = W(V);
        const L = /* @__PURE__ */ Se(() => !n().bodyType);
        wt(T, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return v(L);
          },
          onchange: (X) => {
            var fe;
            (fe = X.target) != null && fe.checked && i(o, { bodyType: "" });
          }
        }), Me(), K(V);
        var O = I(V, 2), R = W(O);
        const P = /* @__PURE__ */ Se(() => n().bodyType === "form-data");
        wt(R, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return v(P);
          },
          onchange: (X) => {
            var fe;
            (fe = X.target) != null && fe.checked && i(o, { bodyType: "form-data" });
          }
        }), Me(), K(O);
        var N = I(O, 2), _ = W(N);
        const E = /* @__PURE__ */ Se(() => n().bodyType === "x-www-form-urlencoded");
        wt(_, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return v(E);
          },
          onchange: (X) => {
            var fe;
            (fe = X.target) != null && fe.checked && i(o, { bodyType: "x-www-form-urlencoded" });
          }
        }), Me(), K(N);
        var H = I(N, 2), A = W(H);
        const B = /* @__PURE__ */ Se(() => n().bodyType === "json");
        wt(A, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return v(B);
          },
          onchange: (X) => {
            var fe;
            (fe = X.target) != null && fe.checked && i(o, { bodyType: "json" });
          }
        }), Me(), K(H);
        var j = I(H, 2), F = W(j);
        const ie = /* @__PURE__ */ Se(() => n().bodyType === "raw");
        wt(F, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return v(ie);
          },
          onchange: (X) => {
            var fe;
            (fe = X.target) != null && fe.checked && i(o, { bodyType: "raw" });
          }
        }), Me(), K(j), K(z);
        var Q = I(z, 2);
        {
          var Y = (X) => {
            var fe = Ty(), he = we(fe), Ae = W(he);
            Ue(Ae, {
              level: 3,
              children: (Oe, Ke) => {
                Me();
                var rt = Ie("参数");
                D(Oe, rt);
              },
              $$slots: { default: !0 }
            });
            var Ve = I(Ae, 2);
            qe(Ve, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(o, "fromData");
              },
              children: (Oe, Ke) => {
                var rt = Oy();
                D(Oe, rt);
              },
              $$slots: { default: !0 }
            }), K(he);
            var je = I(he, 2);
            Xt(je, { dataKeyName: "fromData" }), D(X, fe);
          };
          be(Q, (X) => {
            n().bodyType === "form-data" && X(Y);
          });
        }
        var ce = I(Q, 2);
        {
          var ke = (X) => {
            var fe = Ly(), he = we(fe), Ae = W(he);
            Ue(Ae, {
              level: 3,
              children: (Oe, Ke) => {
                Me();
                var rt = Ie("参数");
                D(Oe, rt);
              },
              $$slots: { default: !0 }
            });
            var Ve = I(Ae, 2);
            qe(Ve, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(o, "fromUrlencoded");
              },
              children: (Oe, Ke) => {
                var rt = Dy();
                D(Oe, rt);
              },
              $$slots: { default: !0 }
            }), K(he);
            var je = I(he, 2);
            Xt(je, { dataKeyName: "fromUrlencoded" }), D(X, fe);
          };
          be(ce, (X) => {
            n().bodyType === "x-www-form-urlencoded" && X(ke);
          });
        }
        var $e = I(ce, 2);
        {
          var ve = (X) => {
            var fe = Ay(), he = W(fe);
            kt(he, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Ae) => {
                i(o, { bodyJson: Ae.target.value });
              }
            }), K(fe), D(X, fe);
          };
          be($e, (X) => {
            n().bodyType === "json" && X(ve);
          });
        }
        var Ne = I($e, 2);
        {
          var oe = (X) => {
            var fe = Iy(), he = W(fe);
            kt(he, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Ae) => {
                i(o, { bodyRaw: Ae.target.value });
              }
            }), K(fe), D(X, fe);
          };
          be(Ne, (X) => {
            n().bodyType === "raw" && X(oe);
          });
        }
        var ye = I(Ne, 2), Ye = W(ye);
        Ue(Ye, {
          level: 3,
          mt: "10px",
          children: (X, fe) => {
            Me();
            var he = Ie("输出参数");
            D(X, he);
          },
          $$slots: { default: !0 }
        });
        var Le = I(Ye, 2);
        qe(Le, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "outputDefs");
          },
          children: (X, fe) => {
            var he = Zy();
            D(X, he);
          },
          $$slots: { default: !0 }
        }), K(ye);
        var Ze = I(ye, 2);
        Qn(Ze, {}), D(s, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue({
    get data() {
      return n();
    },
    set data(s) {
      n(s), m();
    }
  });
}
re(Pd, { data: {} }, [], [], !0);
var Yy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), Ky = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Xy = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Wy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Md(e, t) {
  le(t, !0), Ge(e, Wy);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ct(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: a } = An(), i = ji();
  let s = ir(Tt([]));
  bn(async () => {
    var u, c;
    const d = await ((c = (u = i.provider) == null ? void 0 : u.knowledge) == null ? void 0 : c.call(u));
    v(s).push(...d || []);
  });
  const { updateNodeData: l } = Bt();
  return Er(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && a(o, "outputDefs", {
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
  }), kn(e, ut(
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
        var d = Xy(), f = we(d), g = W(f);
        Ue(g, {
          level: 3,
          children: (V, T) => {
            Me();
            var L = Ie("输入参数");
            D(V, L);
          },
          $$slots: { default: !0 }
        });
        var w = I(g, 2);
        qe(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (V, T) => {
            var L = Ky();
            D(V, L);
          },
          $$slots: { default: !0 }
        }), K(f);
        var x = I(f, 2);
        Xt(x, {});
        var $ = I(x, 2);
        Ue($, {
          level: 3,
          mt: "10px",
          children: (V, T) => {
            Me();
            var L = Ie("知识库设置");
            D(V, L);
          },
          $$slots: { default: !0 }
        });
        var C = I($, 4), p = W(C);
        const b = /* @__PURE__ */ Se(() => n().knowledgeId ? [n().knowledgeId] : []);
        pn(p, {
          get items() {
            return v(s);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (V) => {
            const T = V.value;
            l(o, () => ({ knowledgeId: T }));
          },
          get value() {
            return v(b);
          }
        }), K(C);
        var h = I(C, 4), k = W(h);
        wt(k, { placeholder: "搜索的数据条数", style: "width: 100%" }), K(h);
        var S = I(h, 2), M = W(S);
        Ue(M, {
          level: 3,
          mt: "10px",
          children: (V, T) => {
            Me();
            var L = Ie("输出参数");
            D(V, L);
          },
          $$slots: { default: !0 }
        }), K(S);
        var z = I(S, 2);
        Qn(z, {}), D(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue({
    get data() {
      return n();
    },
    set data(u) {
      n(u), m();
    }
  });
}
re(Md, { data: {} }, [], [], !0);
var jy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), qy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Fy = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">API 服务商</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">API Key</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">其他参数</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Gy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Sd(e, t) {
  le(t, !0), Ge(e, Gy);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ct(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: a } = An(), i = ji();
  let s = ir(Tt([]));
  bn(async () => {
    var u;
    const c = await ((u = i.provider) == null ? void 0 : u.knowledge());
    v(s).push(...c || []);
  });
  const { updateNodeData: l } = Bt();
  return Er(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && a(o, "outputDefs", {
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
  }), kn(e, ut(
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
        var d = Fy(), f = we(d), g = W(f);
        Ue(g, {
          level: 3,
          children: (N, _) => {
            Me();
            var E = Ie("输入参数");
            D(N, E);
          },
          $$slots: { default: !0 }
        });
        var w = I(g, 2);
        qe(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (N, _) => {
            var E = qy();
            D(N, E);
          },
          $$slots: { default: !0 }
        }), K(f);
        var x = I(f, 2);
        Xt(x, {});
        var $ = I(x, 2);
        Ue($, {
          level: 3,
          mt: "10px",
          children: (N, _) => {
            Me();
            var E = Ie("搜索引擎设置");
            D(N, E);
          },
          $$slots: { default: !0 }
        });
        var C = I($, 4), p = W(C);
        const b = /* @__PURE__ */ Se(() => n().knowledgeId ? [n().knowledgeId] : []);
        pn(p, {
          get items() {
            return v(s);
          },
          style: "width: 100%",
          placeholder: "请选择 API 服务商",
          onSelect: (N) => {
            const _ = N.value;
            l(o, () => ({ knowledgeId: _ }));
          },
          get value() {
            return v(b);
          }
        }), K(C);
        var h = I(C, 4), k = W(h);
        wt(k, {
          placeholder: "请输入 API Key",
          style: "width: 100%"
        }), K(h);
        var S = I(h, 4), M = W(S);
        wt(M, { placeholder: "请输入关键字", style: "width: 100%" }), K(S);
        var z = I(S, 4), V = W(z);
        wt(V, { placeholder: "搜索的数据条数", style: "width: 100%" }), K(z);
        var T = I(z, 4), L = W(T);
        kt(L, {
          rows: 3,
          placeholder: "请输入其他参数（Property 格式）",
          style: "width: 100%"
        }), K(T);
        var O = I(T, 2), R = W(O);
        Ue(R, {
          level: 3,
          mt: "10px",
          children: (N, _) => {
            Me();
            var E = Ie("输出参数");
            D(N, E);
          },
          $$slots: { default: !0 }
        }), K(O);
        var P = I(O, 2);
        Qn(P, {}), D(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue({
    get data() {
      return n();
    },
    set data(u) {
      n(u), m();
    }
  });
}
re(Sd, { data: {} }, [], [], !0);
var Uy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), Jy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Qy = /* @__PURE__ */ ne('<div class="heading svelte-md8tgj"><!> <!></div> <!> <div class="heading svelte-md8tgj"><!></div> <!>', 1);
const ew = {
  hash: "svelte-md8tgj",
  code: ".heading.svelte-md8tgj {display:flex;margin-bottom:10px;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function Nd(e, t) {
  le(t, !0), Ge(e, ew);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ct(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: a } = An(), i = ji();
  let s = ir(Tt([]));
  return bn(async () => {
    var l;
    const u = await ((l = i.provider) == null ? void 0 : l.knowledge());
    v(s).push(...u || []);
  }), kn(e, ut(
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
      handle: (l) => {
        Gn(l, {
          type: "source",
          get position() {
            return Ce.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (l, u) => {
        var c = Qy(), d = we(c), f = W(d);
        Ue(f, {
          level: 3,
          children: (p, b) => {
            Me();
            var h = Ie("循环变量");
            D(p, h);
          },
          $$slots: { default: !0 }
        });
        var g = I(f, 2);
        qe(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (p, b) => {
            var h = Jy();
            D(p, h);
          },
          $$slots: { default: !0 }
        }), K(d);
        var w = I(d, 2);
        Xt(w, {});
        var x = I(w, 2), $ = W(x);
        Ue($, {
          level: 3,
          mt: "10px",
          children: (p, b) => {
            Me();
            var h = Ie("输出参数");
            D(p, h);
          },
          $$slots: { default: !0 }
        }), K(x);
        var C = I(x, 2);
        Qn(C, {}), D(l, c);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), ue({
    get data() {
      return n();
    },
    set data(l) {
      n(l), m();
    }
  });
}
re(Nd, { data: {} }, [], [], !0);
const tw = {
  startNode: wd,
  codeNode: _d,
  llmNode: Cd,
  templateNode: Ed,
  httpNode: Pd,
  knowledgeNode: Md,
  searchEngineNode: Sd,
  loopNode: Nd,
  endNode: $d
};
var nw = /* @__PURE__ */ ne("<!> ", 1);
function zd(e, t) {
  le(t, !0);
  const n = y(t, "icon", 7), r = y(t, "title", 7), o = y(t, "type", 7), a = y(t, "description", 7), i = y(t, "extra", 7);
  return qe(e, {
    draggable: !0,
    ondragstart: (s) => {
      if (!s.dataTransfer)
        return null;
      const l = {
        type: o(),
        data: {
          title: r(),
          description: a(),
          systemPrompt: "",
          userPrompt: "",
          ...i()
        }
      };
      s.dataTransfer.setData("application/tinyflow", JSON.stringify(l)), s.dataTransfer.effectAllowed = "move";
    },
    children: (s, l) => {
      var u = nw(), c = we(u);
      cu(c, n);
      var d = I(c);
      _e(() => wn(d, ` ${r() ?? ""}`)), D(s, u);
    },
    $$slots: { default: !0 }
  }), ue({
    get icon() {
      return n();
    },
    set icon(s) {
      n(s), m();
    },
    get title() {
      return r();
    },
    set title(s) {
      r(s), m();
    },
    get type() {
      return o();
    },
    set type(s) {
      o(s), m();
    },
    get description() {
      return a();
    },
    set description(s) {
      a(s), m();
    },
    get extra() {
      return i();
    },
    set extra(s) {
      i(s), m();
    }
  });
}
re(
  zd,
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
var rw = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), ow = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), iw = /* @__PURE__ */ ne('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"><!></div></div></div> <!></div>');
function Vd(e) {
  let t = ir("base"), n = ir("show");
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
  var a = iw(), i = W(a), s = W(i), l = W(s);
  td(l, {
    style: "width: 100%",
    items: o,
    onChange: (w) => {
      G(t, Tt(w.value.toString()));
    }
  }), K(s);
  var u = I(s, 2), c = W(u);
  It(c, 21, () => r, Vi, (w, x) => {
    zd(w, ut(() => v(x)));
  }), K(c);
  var d = I(c, 2), f = W(d);
  qe(f, {
    children: (w, x) => {
      Me();
      var $ = Ie("测试业务按钮");
      D(w, $);
    },
    $$slots: { default: !0 }
  }), K(d), K(u), K(i);
  var g = I(i, 2);
  qe(g, {
    onclick: () => {
      G(n, Tt(v(n) ? "" : "show"));
    },
    children: (w, x) => {
      var $ = Qe(), C = we($);
      {
        var p = (h) => {
          var k = rw();
          D(h, k);
        }, b = (h) => {
          var k = ow();
          D(h, k);
        };
        be(C, (h) => {
          v(n) === "show" ? h(p) : h(b, !1);
        });
      }
      D(w, $);
    },
    $$slots: { default: !0 }
  }), K(a), _e(() => {
    $t(a, 1, `tf-toolbar ${v(n) ?? ""}`), ae(c, "style", `display: ${(v(t) === "base" ? "flex" : "none") ?? ""}`), ae(d, "style", `display: ${(v(t) !== "base" ? "flex" : "none") ?? ""}`);
  }), D(e, a);
}
re(Vd, {}, [], [], !0);
const aw = () => {
  const { nodeLookup: e } = We();
  return {
    getNode: (t) => {
      var n;
      return (n = q(e).get(t)) == null ? void 0 : n.internals.userNode;
    }
  };
}, sw = () => {
  const { nodes: e } = We();
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
        let a = -1;
        for (let s = 0; s < o; s++)
          if (r[s].parentId === t || r[s].id === n) {
            a = s;
            break;
          }
        if (a == -1)
          return r;
        const i = r[o];
        for (let s = o; s > a; s--)
          r[s] = r[s - 1];
        return r[a] = i, r;
      });
    }
  };
}, lw = () => {
  const { edges: e } = We();
  return {
    getEdgesByTarget: (t) => q(e).filter((n) => n.target === t)
  };
};
var uw = /* @__PURE__ */ ne('<div class="panel-content svelte-1oe15vw"><div>边属性设置</div> <div class="setting-title svelte-1oe15vw">边条件设置</div> <div class="setting-item"><!></div></div>'), cw = /* @__PURE__ */ ne("<!> <!> <!> <!>", 1), dw = /* @__PURE__ */ ne('<div style="position: relative; height: 100%; width: 100%"><!> <!></div>');
const fw = {
  hash: "svelte-1oe15vw",
  code: ".panel-content.svelte-1oe15vw {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-1oe15vw {margin:10px 0;font-size:12px;color:#999;}"
};
function Hd(e, t) {
  le(t, !0), Ge(e, fw);
  const n = y(t, "onInit", 7), r = Bt();
  n()(r);
  let o = ir(!1);
  const a = (b) => {
    b.preventDefault(), b.dataTransfer && (b.dataTransfer.dropEffect = "move");
  }, i = (b) => {
    var h;
    b.preventDefault();
    const k = r.screenToFlowPosition({
      x: b.clientX - 250,
      y: b.clientY - 100
    }), S = (h = b.dataTransfer) == null ? void 0 : h.getData("application/tinyflow"), M = S ? JSON.parse(S) : {}, z = {
      id: `node_${Lr()}`,
      position: k,
      data: {},
      ...M
    };
    Fo.addNode(z), Fo.selectNodeOnly(z.id);
  }, { getNode: s } = aw(), l = (b) => {
    const h = s(b.source), k = s(b.target);
    if (b.sourceHandle === "loop_handle" || h.parentId) {
      const S = r.getEdges();
      for (let M of S)
        if (M.target === b.target) {
          const z = s(M.source);
          if (b.sourceHandle === "loop_handle" && z.parentId !== h.id || h.parentId && z.parentId !== h.parentId)
            return !1;
        }
    }
    return !(!h.parentId && k.parentId && k.parentId !== h.id);
  }, { ensureParentInNodesBefore: u } = sw(), c = (b, h) => {
    if (!h.isValid)
      return;
    const k = h.toNode;
    if (k.parentId)
      return;
    const S = h.fromNode, M = h.fromHandle, z = { position: { ...k.position } };
    if (M.id === "loop_handle" ? z.parentId = S.id : S.parentId && (z.parentId = S.parentId), z.parentId) {
      const V = s(z.parentId);
      z.position = {
        x: k.position.x - V.position.x,
        y: k.position.y - V.position.y
      }, u(z.parentId, k.id), r.updateNode(k.id, z);
    }
  }, { getEdgesByTarget: d } = lw(), f = (b) => {
    b.edges.forEach((h) => {
      const k = s(h.target);
      if (k.parentId) {
        const S = d(h.target), M = s(k.parentId);
        if (S.length === 0)
          r.updateNode(k.id, {
            parentId: void 0,
            position: {
              x: k.position.x + M.position.x,
              y: k.position.y + M.position.y
            }
          });
        else {
          let z = !1;
          for (let V = 0; V < S.length; V++) {
            const T = S[V], L = s(T.source);
            if (L.parentId || L.type === "loopNode") {
              z = !0;
              break;
            }
          }
          z || r.updateNode(k.id, {
            parentId: void 0,
            position: {
              x: k.position.x + M.position.x,
              y: k.position.y + M.position.y
            }
          });
        }
      }
    });
  }, g = (b, h) => {
    console.log("onconnectstart: ", b, h);
  }, w = (b) => {
    console.log("onconnect: ", b);
  };
  var x = dw(), $ = W(x);
  Vd($);
  var C = I($, 2);
  const p = /* @__PURE__ */ Se(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: go.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  return Zc(C, ut({ nodeTypes: tw }, Fo, {
    class: "tinyflow-logo",
    isValidConnection: l,
    onconnectend: c,
    onconnectstart: g,
    onconnect: w,
    connectionRadius: 50,
    ondelete: f,
    onclick: (b) => {
      const h = b.target;
      h.classList.contains("svelte-flow__edge-interaction") || h.classList.contains("panel-content") || h.closest(".panel-content") || G(o, !1);
    },
    get defaultEdgeOptions() {
      return v(p);
    },
    $$events: {
      drop: i,
      dragover: a,
      edgeclick: () => {
        G(o, !0);
      }
    },
    children: (b, h) => {
      var k = cw(), S = we(k);
      Gc(S, {});
      var M = I(S, 2);
      jc(M, {});
      var z = I(M, 2);
      Jc(z, {});
      var V = I(z, 2);
      {
        var T = (L) => {
          Po(L, {
            children: (O, R) => {
              var P = uw(), N = I(W(P), 4), _ = W(N);
              kt(_, {
                rows: 3,
                placeholder: "请输入边条件",
                style: "width: 100%",
                oninput: (E) => {
                }
              }), K(N), K(P), D(O, P);
            },
            $$slots: { default: !0 }
          });
        };
        be(V, (L) => {
          v(o) && L(T);
        });
      }
      D(b, k);
    },
    $$slots: { default: !0 }
  })), K(x), D(e, x), ue({
    get onInit() {
      return n();
    },
    set onInit(b) {
      n(b), m();
    }
  });
}
re(Hd, { onInit: {} }, [], [], !0);
function gw(e, t) {
  le(t, !0);
  const n = y(t, "options", 7), r = y(t, "onInit", 7), { data: o } = n();
  return Fo.init((o == null ? void 0 : o.nodes) || [], (o == null ? void 0 : o.edges) || []), Mr("tinyflow_options", n()), Bc(e, {
    fitView: !0,
    children: (a, i) => {
      Hd(a, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), ue({
    get options() {
      return n();
    },
    set options(a) {
      n(a), m();
    },
    get onInit() {
      return r();
    },
    set onInit(a) {
      r(a), m();
    }
  });
}
customElements.define("tinyflow-component", re(gw, { options: {}, onInit: {} }, [], [], !1));
const xw = /* @__PURE__ */ Fd({
  __name: "Tinyflow",
  props: {
    className: {},
    style: {},
    data: {},
    provider: {}
  },
  setup(e, { expose: t }) {
    const n = e, r = Gd(null);
    let o = null;
    const a = {
      llm: () => [],
      knowledge: () => []
    };
    return Ud(() => {
      if (r.value) {
        const s = {
          ...a,
          ...n.provider
        };
        o = new wm({
          element: r.value,
          data: n.data || {},
          provider: s
        });
      }
    }), Jd(() => {
      o && (o.destroy(), o = null);
    }), t({
      getData: () => o ? o.getData() : (console.warn("Tinyflow instance is not initialized"), null)
    }), (s, l) => (ef(), Qd("div", {
      ref_key: "divRef",
      ref: r,
      class: nf(["tinyflow", s.className]),
      style: tf(s.style)
    }, null, 6));
  }
});
export {
  xw as Tinyflow
};
//# sourceMappingURL=index.js.map
