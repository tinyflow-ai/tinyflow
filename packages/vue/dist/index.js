import { defineComponent as Qd, ref as Jd, onMounted as ef, onUnmounted as tf, createElementBlock as nf, openBlock as rf, normalizeStyle as of, normalizeClass as af } from "vue";
var sf = Object.defineProperty, Nl = (e) => {
  throw TypeError(e);
}, lf = (e, t, n) => t in e ? sf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ht = (e, t, n) => lf(e, typeof t != "symbol" ? t + "" : t, n), Na = (e, t, n) => t.has(e) || Nl("Cannot " + n), st = (e, t, n) => (Na(e, t, "read from private field"), n ? n.call(e) : t.get(e)), wr = (e, t, n) => t.has(e) ? Nl("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Jo = (e, t, n, r) => (Na(e, t, "write to private field"), t.set(e, n), n), uf = (e, t, n) => (Na(e, t, "access private method"), n);
const cf = "5";
var ks;
typeof window < "u" && ((ks = window.__svelte ?? (window.__svelte = {})).v ?? (ks.v = /* @__PURE__ */ new Set())).add(cf);
let Ir = !1, df = !1;
function ff() {
  Ir = !0;
}
ff();
const Va = 1, Da = 2, Vl = 4, vf = 8, gf = 16, hf = 1, pf = 2, Dl = 4, mf = 8, yf = 16, Tl = 1, wf = 2, Ta = "[", Oa = "[!", Aa = "]", xr = {}, Et = Symbol(), Ol = "http://www.w3.org/2000/svg", bf = !1, rn = 2, Al = 4, Si = 8, Ia = 16, Tn = 32, Zr = 64, ei = 128, Ft = 256, ti = 512, mt = 1024, On = 2048, vr = 4096, zn = 8192, Ei = 16384, xf = 32768, Br = 65536, $f = 1 << 17, Cf = 1 << 19, Il = 1 << 20, Yn = Symbol("$state"), Za = Symbol("legacy props"), _f = Symbol("");
var xo = Array.isArray, kf = Array.prototype.indexOf, Ba = Array.from, ni = Object.keys, oo = Object.defineProperty, Pn = Object.getOwnPropertyDescriptor, Zl = Object.getOwnPropertyDescriptors, Sf = Object.prototype, Ef = Array.prototype, Ra = Object.getPrototypeOf;
function jr(e) {
  return typeof e == "function";
}
const dt = () => {
};
function Mf(e) {
  return e();
}
function io(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const Hf = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let ao = [], so = [];
function Bl() {
  var e = ao;
  ao = [], io(e);
}
function Rl() {
  var e = so;
  so = [], io(e);
}
function $o(e) {
  ao.length === 0 && queueMicrotask(Bl), ao.push(e);
}
function zf(e) {
  so.length === 0 && Hf(Rl), so.push(e);
}
function Ss() {
  ao.length > 0 && Bl(), so.length > 0 && Rl();
}
function Kl(e) {
  return e === this.v;
}
function Ka(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Xa(e) {
  return !Ka(e, this.v);
}
function Pf(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Lf() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Nf(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Vf() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Df() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Tf(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Of() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Af() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function If() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Zf() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function zt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Kl,
    rv: 0,
    wv: 0
  };
  return n;
}
function ar(e) {
  return /* @__PURE__ */ Xl(zt(e));
}
// @__NO_SIDE_EFFECTS__
function Co(e, t = !1) {
  var n;
  const r = zt(e);
  return t || (r.equals = Xa), Ir && Ke !== null && Ke.l !== null && ((n = Ke.l).s ?? (n.s = [])).push(r), r;
}
function re(e, t = !1) {
  return /* @__PURE__ */ Xl(/* @__PURE__ */ Co(e, t));
}
// @__NO_SIDE_EFFECTS__
function Xl(e) {
  return Ue !== null && !tn && Ue.f & rn && (gn === null ? Kf([e]) : gn.push(e)), e;
}
function q(e, t) {
  return Ue !== null && !tn && Ni() && Ue.f & (rn | Ia) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (gn === null || !gn.includes(e)) && Zf(), la(e, t);
}
function la(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = Ql(), Yl(e, On), Ni() && je !== null && je.f & mt && !(je.f & (Tn | Zr)) && (En === null ? Xf([e]) : En.push(e))), t;
}
function Es(e, t = 1) {
  var n = g(e), r = t === 1 ? n++ : n--;
  return q(e, n), r;
}
function Yl(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Ni(), o = n.length, a = 0; a < o; a++) {
      var i = n[a], s = i.f;
      s & On || !r && i === je || (on(i, t), s & (mt | Ft) && (s & rn ? Yl(
        /** @type {Derived} */
        i,
        vr
      ) : Pi(
        /** @type {Effect} */
        i
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Pe(e) {
  var t = rn | On, n = Ue !== null && Ue.f & rn ? (
    /** @type {Derived} */
    Ue
  ) : null;
  return je === null || n !== null && n.f & Ft ? t |= Ft : je.f |= Il, {
    ctx: Ke,
    deps: null,
    effects: null,
    equals: Kl,
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
function me(e) {
  const t = /* @__PURE__ */ Pe(e);
  return t.equals = Xa, t;
}
function Wl(e) {
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
function Bf(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & rn))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Rf(e) {
  var t, n = je;
  Gn(Bf(e));
  try {
    Wl(e), t = eu(e);
  } finally {
    Gn(n);
  }
  return t;
}
function jl(e) {
  var t = Rf(e), n = (Kn || e.f & Ft) && e.deps !== null ? vr : mt;
  on(e, n), e.equals(t) || (e.v = t, e.wv = Ql());
}
function Mi(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let Me = !1;
function Zt(e) {
  Me = e;
}
let Te;
function $t(e) {
  if (e === null)
    throw Mi(), xr;
  return Te = e;
}
function mn() {
  return $t(
    /** @type {TemplateNode} */
    /* @__PURE__ */ $n(Te)
  );
}
function K(e) {
  if (Me) {
    if (/* @__PURE__ */ $n(Te) !== null)
      throw Mi(), xr;
    Te = e;
  }
}
function ze(e = 1) {
  if (Me) {
    for (var t = e, n = Te; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ $n(n);
    Te = n;
  }
}
function ua() {
  for (var e = 0, t = Te; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === Aa) {
        if (e === 0) return t;
        e -= 1;
      } else (n === Ta || n === Oa) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ $n(t)
    );
    t.remove(), t = r;
  }
}
function At(e, t = null, n) {
  if (typeof e != "object" || e === null || Yn in e)
    return e;
  const r = Ra(e);
  if (r !== Sf && r !== Ef)
    return e;
  var o = /* @__PURE__ */ new Map(), a = xo(e), i = zt(0);
  a && o.set("length", zt(
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
        return d === void 0 ? (d = zt(c.value), o.set(u, d)) : q(d, At(c.value, s)), !0;
      },
      deleteProperty(l, u) {
        var c = o.get(u);
        if (c === void 0)
          u in l && o.set(u, zt(Et));
        else {
          if (a && typeof u == "string") {
            var d = (
              /** @type {Source<number>} */
              o.get("length")
            ), f = Number(u);
            Number.isInteger(f) && f < d.v && q(d, f);
          }
          q(c, Et), Ms(i);
        }
        return !0;
      },
      get(l, u, c) {
        var d;
        if (u === Yn)
          return e;
        var f = o.get(u), v = u in l;
        if (f === void 0 && (!v || (d = Pn(l, u)) != null && d.writable) && (f = zt(At(v ? l[u] : Et, s)), o.set(u, f)), f !== void 0) {
          var w = g(f);
          return w === Et ? void 0 : w;
        }
        return Reflect.get(l, u, c);
      },
      getOwnPropertyDescriptor(l, u) {
        var c = Reflect.getOwnPropertyDescriptor(l, u);
        if (c && "value" in c) {
          var d = o.get(u);
          d && (c.value = g(d));
        } else if (c === void 0) {
          var f = o.get(u), v = f == null ? void 0 : f.v;
          if (f !== void 0 && v !== Et)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return c;
      },
      has(l, u) {
        var c;
        if (u === Yn)
          return !0;
        var d = o.get(u), f = d !== void 0 && d.v !== Et || Reflect.has(l, u);
        if (d !== void 0 || je !== null && (!f || (c = Pn(l, u)) != null && c.writable)) {
          d === void 0 && (d = zt(f ? At(l[u], s) : Et), o.set(u, d));
          var v = g(d);
          if (v === Et)
            return !1;
        }
        return f;
      },
      set(l, u, c, d) {
        var f, v = o.get(u), w = u in l;
        if (a && u === "length")
          for (var b = c; b < /** @type {Source<number>} */
          v.v; b += 1) {
            var x = o.get(b + "");
            x !== void 0 ? q(x, Et) : b in l && (x = zt(Et), o.set(b + "", x));
          }
        v === void 0 ? (!w || (f = Pn(l, u)) != null && f.writable) && (v = zt(void 0), q(v, At(c, s)), o.set(u, v)) : (w = v.v !== Et, q(v, At(c, s)));
        var _ = Reflect.getOwnPropertyDescriptor(l, u);
        if (_ != null && _.set && _.set.call(d, c), !w) {
          if (a && typeof u == "string") {
            var h = (
              /** @type {Source<number>} */
              o.get("length")
            ), C = Number(u);
            Number.isInteger(C) && C >= h.v && q(h, C + 1);
          }
          Ms(i);
        }
        return !0;
      },
      ownKeys(l) {
        g(i);
        var u = Reflect.ownKeys(l).filter((f) => {
          var v = o.get(f);
          return v === void 0 || v.v !== Et;
        });
        for (var [c, d] of o)
          d.v !== Et && !(c in l) && u.push(c);
        return u;
      },
      setPrototypeOf() {
        Af();
      }
    }
  );
}
function Ms(e, t = 1) {
  q(e, e.v + t);
}
var Mt, Fl, ql, Gl;
function ca() {
  if (Mt === void 0) {
    Mt = window, Fl = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    ql = Pn(t, "firstChild").get, Gl = Pn(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Nn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function xt(e) {
  return ql.call(e);
}
// @__NO_SIDE_EFFECTS__
function $n(e) {
  return Gl.call(e);
}
function Y(e, t) {
  if (!Me)
    return /* @__PURE__ */ xt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ xt(Te)
  );
  if (n === null)
    n = Te.appendChild(Nn());
  else if (t && n.nodeType !== 3) {
    var r = Nn();
    return n == null || n.before(r), $t(r), r;
  }
  return $t(n), n;
}
function xe(e, t) {
  if (!Me) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ xt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ $n(n) : n;
  }
  return Te;
}
function I(e, t = 1, n = !1) {
  let r = Me ? Te : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ $n(r);
  if (!Me)
    return r;
  var a = r == null ? void 0 : r.nodeType;
  if (n && a !== 3) {
    var i = Nn();
    return r === null ? o == null || o.after(i) : r.before(i), $t(i), i;
  }
  return $t(r), /** @type {TemplateNode} */
  r;
}
function Ya(e) {
  e.textContent = "";
}
let Yo = !1, ri = !1, oi = null, or = !1, Wa = !1;
function Hs(e) {
  Wa = e;
}
let to = [], Ue = null, tn = !1;
function qn(e) {
  Ue = e;
}
let je = null;
function Gn(e) {
  je = e;
}
let gn = null;
function Kf(e) {
  gn = e;
}
let wt = null, Ot = 0, En = null;
function Xf(e) {
  En = e;
}
let Ul = 1, ii = 0, Kn = !1;
function Ql() {
  return ++Ul;
}
function Rr(e) {
  var t, n = e.f;
  if (n & On)
    return !0;
  if (n & vr) {
    var r = e.deps, o = (n & Ft) !== 0;
    if (r !== null) {
      var a, i, s = (n & ti) !== 0, l = o && je !== null && !Kn, u = r.length;
      if (s || l) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (a = 0; a < u; a++)
          i = r[a], (s || !((t = i == null ? void 0 : i.reactions) != null && t.includes(c))) && (i.reactions ?? (i.reactions = [])).push(c);
        s && (c.f ^= ti), l && d !== null && !(d.f & Ft) && (c.f ^= Ft);
      }
      for (a = 0; a < u; a++)
        if (i = r[a], Rr(
          /** @type {Derived} */
          i
        ) && jl(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!o || je !== null && !Kn) && on(e, mt);
  }
  return !1;
}
function Yf(e, t) {
  for (var n = t; n !== null; ) {
    if (n.f & ei)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= ei;
      }
    n = n.parent;
  }
  throw Yo = !1, e;
}
function Wf(e) {
  return (e.f & Ei) === 0 && (e.parent === null || (e.parent.f & ei) === 0);
}
function Hi(e, t, n, r) {
  if (Yo) {
    if (n === null && (Yo = !1), Wf(t))
      throw e;
    return;
  }
  n !== null && (Yo = !0);
  {
    Yf(e, t);
    return;
  }
}
function Jl(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var o = 0; o < r.length; o++) {
      var a = r[o];
      a.f & rn ? Jl(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (n ? on(a, On) : a.f & mt && on(a, vr), Pi(
        /** @type {Effect} */
        a
      ));
    }
}
function eu(e) {
  var t, n = wt, r = Ot, o = En, a = Ue, i = Kn, s = gn, l = Ke, u = tn, c = e.f;
  wt = /** @type {null | Value[]} */
  null, Ot = 0, En = null, Kn = (c & Ft) !== 0 && (tn || !or || Ue === null), Ue = c & (Tn | Zr) ? null : e, gn = null, zs(e.ctx), tn = !1, ii++;
  try {
    var d = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (wt !== null) {
      var v;
      if (ai(e, Ot), f !== null && Ot > 0)
        for (f.length = Ot + wt.length, v = 0; v < wt.length; v++)
          f[Ot + v] = wt[v];
      else
        e.deps = f = wt;
      if (!Kn)
        for (v = Ot; v < f.length; v++)
          ((t = f[v]).reactions ?? (t.reactions = [])).push(e);
    } else f !== null && Ot < f.length && (ai(e, Ot), f.length = Ot);
    if (Ni() && En !== null && !tn && f !== null && !(e.f & (rn | vr | On)))
      for (v = 0; v < /** @type {Source[]} */
      En.length; v++)
        Jl(
          En[v],
          /** @type {Effect} */
          e
        );
    return a !== null && ii++, d;
  } finally {
    wt = n, Ot = r, En = o, Ue = a, Kn = i, gn = s, zs(l), tn = u;
  }
}
function jf(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = kf.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && t.f & rn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (wt === null || !wt.includes(t)) && (on(t, vr), t.f & (Ft | ti) || (t.f ^= ti), Wl(
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
      jf(e, n[r]);
}
function zi(e) {
  var t = e.f;
  if (!(t & Ei)) {
    on(e, mt);
    var n = je, r = Ke, o = or;
    je = e, or = !0;
    try {
      t & Ia ? n1(e) : iu(e), ou(e);
      var a = eu(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = Ul;
      var i = e.deps, s;
      bf && df && e.f & On;
    } catch (l) {
      Hi(l, e, n, r || e.ctx);
    } finally {
      or = o, je = n;
    }
  }
}
function Ff() {
  try {
    Vf();
  } catch (e) {
    if (oi !== null)
      Hi(e, oi, null);
    else
      throw e;
  }
}
function tu() {
  var e = or;
  try {
    var t = 0;
    for (or = !0; to.length > 0; ) {
      t++ > 1e3 && Ff();
      var n = to, r = n.length;
      to = [];
      for (var o = 0; o < r; o++) {
        var a = n[o];
        a.f & mt || (a.f ^= mt);
        var i = Gf(a);
        qf(i);
      }
    }
  } finally {
    ri = !1, or = e, oi = null;
  }
}
function qf(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if (!(r.f & (Ei | zn)))
        try {
          Rr(r) && (zi(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? au(r) : r.fn = null));
        } catch (o) {
          Hi(o, r, null, r.ctx);
        }
    }
}
function Pi(e) {
  ri || (ri = !0, queueMicrotask(tu));
  for (var t = oi = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (Zr | Tn)) {
      if (!(n & mt)) return;
      t.f ^= mt;
    }
  }
  to.push(t);
}
function Gf(e) {
  for (var t = [], n = e.first; n !== null; ) {
    var r = n.f, o = (r & Tn) !== 0, a = o && (r & mt) !== 0;
    if (!a && !(r & zn)) {
      if (r & Al)
        t.push(n);
      else if (o)
        n.f ^= mt;
      else {
        var i = Ue;
        try {
          Ue = n, Rr(n) && zi(n);
        } catch (u) {
          Hi(u, n, null, n.ctx);
        } finally {
          Ue = i;
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
  for (Ss(); to.length > 0; )
    ri = !0, tu(), Ss();
  return (
    /** @type {T} */
    t
  );
}
function g(e) {
  var t = e.f, n = (t & rn) !== 0;
  if (Ue !== null && !tn) {
    gn !== null && gn.includes(e) && If();
    var r = Ue.deps;
    e.rv < ii && (e.rv = ii, wt === null && r !== null && r[Ot] === e ? Ot++ : wt === null ? wt = [e] : (!Kn || !wt.includes(e)) && wt.push(e));
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), a = o.parent;
    a !== null && !(a.f & Ft) && (o.f ^= Ft);
  }
  return n && (o = /** @type {Derived} */
  e, Rr(o) && jl(o)), e.v;
}
function yn(e) {
  var t = tn;
  try {
    return tn = !0, e();
  } finally {
    tn = t;
  }
}
const Uf = -7169;
function on(e, t) {
  e.f = e.f & Uf | t;
}
function G(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Yn in e)
      da(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Yn in n && da(n);
      }
  }
}
function da(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        da(e[r], t);
      } catch {
      }
    const n = Ra(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Zl(n);
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
function nu(e) {
  je === null && Ue === null && Nf(), Ue !== null && Ue.f & Ft && je === null && Lf(), Wa && Pf();
}
function Qf(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function gr(e, t, n, r = !0) {
  var o = (e & Zr) !== 0, a = je, i = {
    ctx: Ke,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | On,
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
      zi(i), i.f |= xf;
    } catch (u) {
      throw qt(i), u;
    }
  else t !== null && Pi(i);
  var s = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (Il | ei)) === 0;
  if (!s && !o && r && (a !== null && Qf(i, a), Ue !== null && Ue.f & rn)) {
    var l = (
      /** @type {Derived} */
      Ue
    );
    (l.effects ?? (l.effects = [])).push(i);
  }
  return i;
}
function ru(e) {
  const t = gr(Si, null, !1);
  return on(t, mt), t.teardown = e, t;
}
function Er(e) {
  nu();
  var t = je !== null && (je.f & Tn) !== 0 && Ke !== null && !Ke.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      Ke
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: je,
      reaction: Ue
    });
  } else {
    var r = It(e);
    return r;
  }
}
function Jf(e) {
  return nu(), Kr(e);
}
function e1(e) {
  const t = gr(Zr, e, !0);
  return () => {
    qt(t);
  };
}
function t1(e) {
  const t = gr(Zr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Mr(t, () => {
      qt(t), r(void 0);
    }) : (qt(t), r(void 0));
  });
}
function It(e) {
  return gr(Al, e, !1);
}
function de(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    Ke
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = Kr(() => {
    e(), !r.ran && (r.ran = !0, q(n.l.r2, !0), yn(t));
  });
}
function vt() {
  var e = (
    /** @type {ComponentContextLegacy} */
    Ke
  );
  Kr(() => {
    if (g(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        n.f & mt && on(n, vr), Rr(n) && zi(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function Kr(e) {
  return gr(Si, e, !0);
}
function Ee(e, t = [], n = Pe) {
  const r = t.map(n);
  return hr(() => e(...r.map(g)));
}
function hr(e, t = 0) {
  return gr(Si | Ia | t, e, !0);
}
function Vn(e, t = !0) {
  return gr(Si | Tn, e, !0, t);
}
function ou(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Wa, r = Ue;
    Hs(!0), qn(null);
    try {
      t.call(null);
    } finally {
      Hs(n), qn(r);
    }
  }
}
function iu(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    qt(n, t), n = r;
  }
}
function n1(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & Tn || qt(t), t = n;
  }
}
function qt(e, t = !0) {
  var n = !1;
  if ((t || e.f & Cf) && e.nodes_start !== null) {
    for (var r = e.nodes_start, o = e.nodes_end; r !== null; ) {
      var a = r === o ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ $n(r)
      );
      r.remove(), r = a;
    }
    n = !0;
  }
  iu(e, t && !n), ai(e, 0), on(e, Ei);
  var i = e.transitions;
  if (i !== null)
    for (const l of i)
      l.stop();
  ou(e);
  var s = e.parent;
  s !== null && s.first !== null && au(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function au(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Mr(e, t) {
  var n = [];
  ja(e, n, !0), su(n, () => {
    qt(e), t && t();
  });
}
function su(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function ja(e, t, n) {
  if (!(e.f & zn)) {
    if (e.f ^= zn, e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || n) && t.push(i);
    for (var r = e.first; r !== null; ) {
      var o = r.next, a = (r.f & Br) !== 0 || (r.f & Tn) !== 0;
      ja(r, t, a ? n : !1), r = o;
    }
  }
}
function lo(e) {
  lu(e, !0);
}
function lu(e, t) {
  if (e.f & zn) {
    e.f ^= zn, e.f & mt || (e.f ^= mt), Rr(e) && (on(e, On), Pi(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Br) !== 0 || (n.f & Tn) !== 0;
      lu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
function Li(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let Ke = null;
function zs(e) {
  Ke = e;
}
function sr(e) {
  return (
    /** @type {T} */
    Fa().get(e)
  );
}
function Hr(e, t) {
  return Fa().set(e, t), t;
}
function r1(e) {
  return Fa().has(e);
}
function se(e, t = !1, n) {
  Ke = {
    p: Ke,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  }, Ir && !t && (Ke.l = {
    s: null,
    u: null,
    r1: [],
    r2: zt(!1)
  });
}
function le(e) {
  const t = Ke;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const i = t.e;
    if (i !== null) {
      var n = je, r = Ue;
      t.e = null;
      try {
        for (var o = 0; o < i.length; o++) {
          var a = i[o];
          Gn(a.effect), qn(a.reaction), It(a.fn);
        }
      } finally {
        Gn(n), qn(r);
      }
    }
    Ke = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Ni() {
  return !Ir || Ke !== null && Ke.l === null;
}
function Fa(e) {
  return Ke === null && Li(), Ke.c ?? (Ke.c = new Map(o1(Ke) || void 0));
}
function o1(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function i1(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const a1 = [
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
function s1(e) {
  return a1.includes(e);
}
const l1 = {
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
function u1(e) {
  return e = e.toLowerCase(), l1[e] ?? e;
}
const c1 = ["touchstart", "touchmove"];
function d1(e) {
  return c1.includes(e);
}
const f1 = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function v1(e) {
  return f1.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function g1(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, $o(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function h1(e) {
  Me && /* @__PURE__ */ xt(e) !== null && Ya(e);
}
let Ps = !1;
function p1() {
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
function m1(e) {
  var t = Ue, n = je;
  qn(null), Gn(null);
  try {
    return e();
  } finally {
    qn(t), Gn(n);
  }
}
const uu = /* @__PURE__ */ new Set(), fa = /* @__PURE__ */ new Set();
function cu(e, t, n, r = {}) {
  function o(a) {
    if (r.capture || Ur.call(t, a), !a.cancelBubble)
      return m1(() => n == null ? void 0 : n.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? $o(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function Re(e, t, n, r, o) {
  var a = { capture: r, passive: o }, i = cu(e, t, n, a);
  (t === document.body || t === window || t === document) && ru(() => {
    t.removeEventListener(e, i, a);
  });
}
function Vi(e) {
  for (var t = 0; t < e.length; t++)
    uu.add(e[t]);
  for (var n of fa)
    n(e);
}
function Ur(e) {
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
    oo(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var d = Ue, f = je;
    qn(null), Gn(null);
    try {
      for (var v, w = []; i !== null; ) {
        var b = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var x = i["__" + o];
          if (x !== void 0 && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (xo(x)) {
              var [_, ...h] = x;
              _.apply(i, [e, ...h]);
            } else
              x.call(i, e);
        } catch (C) {
          v ? w.push(C) : v = C;
        }
        if (e.cancelBubble || b === n || b === null)
          break;
        i = b;
      }
      if (v) {
        for (let C of w)
          queueMicrotask(() => {
            throw C;
          });
        throw v;
      }
    } finally {
      e.__root = n, delete e.currentTarget, qn(d), Gn(f);
    }
  }
}
function qa(e) {
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
  var n = (t & Tl) !== 0, r = (t & wf) !== 0, o, a = !e.startsWith("<!>");
  return () => {
    if (Me)
      return Lt(Te, null), Te;
    o === void 0 && (o = qa(a ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ xt(o)));
    var i = (
      /** @type {TemplateNode} */
      r || Fl ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ xt(i)
      ), l = (
        /** @type {TemplateNode} */
        i.lastChild
      );
      Lt(s, l);
    } else
      Lt(i, i);
    return i;
  };
}
// @__NO_SIDE_EFFECTS__
function be(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & Tl) !== 0, a = `<${n}>${r ? e : "<!>" + e}</${n}>`, i;
  return () => {
    if (Me)
      return Lt(Te, null), Te;
    if (!i) {
      var s = (
        /** @type {DocumentFragment} */
        qa(a)
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
      Lt(c, d);
    } else
      Lt(u, u);
    return u;
  };
}
function Ie(e = "") {
  if (!Me) {
    var t = Nn(e + "");
    return Lt(t, t), t;
  }
  var n = Te;
  return n.nodeType !== 3 && (n.before(n = Nn()), $t(n)), Lt(n, n), n;
}
function Je() {
  if (Me)
    return Lt(Te, null), Te;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Nn();
  return e.append(t, n), Lt(t, n), e;
}
function T(e, t) {
  if (Me) {
    je.nodes_end = Te, mn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Rt(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function du(e, t) {
  return fu(e, t);
}
function y1(e, t) {
  ca(), t.intro = t.intro ?? !1;
  const n = t.target, r = Me, o = Te;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ xt(n)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== Ta); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ $n(a);
    if (!a)
      throw xr;
    Zt(!0), $t(
      /** @type {Comment} */
      a
    ), mn();
    const i = fu(e, { ...t, anchor: a });
    if (Te === null || Te.nodeType !== 8 || /** @type {Comment} */
    Te.data !== Aa)
      throw Mi(), xr;
    return Zt(!1), /**  @type {Exports} */
    i;
  } catch (i) {
    if (i === xr)
      return t.recover === !1 && Df(), ca(), Ya(n), Zt(!1), du(e, t);
    throw i;
  } finally {
    Zt(r), $t(o);
  }
}
const mr = /* @__PURE__ */ new Map();
function fu(e, { target: t, anchor: n, props: r = {}, events: o, context: a, intro: i = !0 }) {
  ca();
  var s = /* @__PURE__ */ new Set(), l = (d) => {
    for (var f = 0; f < d.length; f++) {
      var v = d[f];
      if (!s.has(v)) {
        s.add(v);
        var w = d1(v);
        t.addEventListener(v, Ur, { passive: w });
        var b = mr.get(v);
        b === void 0 ? (document.addEventListener(v, Ur, { passive: w }), mr.set(v, 1)) : mr.set(v, b + 1);
      }
    }
  };
  l(Ba(uu)), fa.add(l);
  var u = void 0, c = t1(() => {
    var d = n ?? t.appendChild(Nn());
    return Vn(() => {
      if (a) {
        se({});
        var f = (
          /** @type {ComponentContext} */
          Ke
        );
        f.c = a;
      }
      o && (r.$$events = o), Me && Lt(
        /** @type {TemplateNode} */
        d,
        null
      ), u = e(d, r) || {}, Me && (je.nodes_end = Te), a && le();
    }), () => {
      var f;
      for (var v of s) {
        t.removeEventListener(v, Ur);
        var w = (
          /** @type {number} */
          mr.get(v)
        );
        --w === 0 ? (document.removeEventListener(v, Ur), mr.delete(v)) : mr.set(v, w);
      }
      fa.delete(l), d !== n && ((f = d.parentNode) == null || f.removeChild(d));
    };
  });
  return va.set(u, c), u;
}
let va = /* @__PURE__ */ new WeakMap();
function w1(e, t) {
  const n = va.get(e);
  return n ? (va.delete(e), n(t)) : Promise.resolve();
}
function Ce(e, t, [n, r] = [0, 0]) {
  Me && n === 0 && mn();
  var o = e, a = null, i = null, s = Et, l = n > 0 ? Br : 0, u = !1;
  const c = (f, v = !0) => {
    u = !0, d(v, f);
  }, d = (f, v) => {
    if (s === (s = f)) return;
    let w = !1;
    if (Me && r !== -1) {
      if (n === 0) {
        const x = (
          /** @type {Comment} */
          o.data
        );
        x === Ta ? r = 0 : x === Oa ? r = 1 / 0 : (r = parseInt(x.substring(1)), r !== r && (r = s ? 1 / 0 : -1));
      }
      const b = r > n;
      !!s === b && (o = ua(), $t(o), Zt(!1), w = !0, r = -1);
    }
    s ? (a ? lo(a) : v && (a = Vn(() => v(o))), i && Mr(i, () => {
      i = null;
    })) : (i ? lo(i) : v && (i = Vn(() => v(o, [n + 1, r]))), a && Mr(a, () => {
      a = null;
    })), w && Zt(!0);
  };
  hr(() => {
    u = !1, t(c), u || d(null, null);
  }, l), Me && (o = Te);
}
function uo(e, t) {
  return t;
}
function b1(e, t, n, r) {
  for (var o = [], a = t.length, i = 0; i < a; i++)
    ja(t[i].e, o, !0);
  var s = a > 0 && o.length === 0 && n !== null;
  if (s) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Ya(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), Bn(e, t[0].prev, t[a - 1].next);
  }
  su(o, () => {
    for (var u = 0; u < a; u++) {
      var c = t[u];
      s || (r.delete(c.k), Bn(e, c.prev, c.next)), qt(c.e, !s);
    }
  });
}
function Nt(e, t, n, r, o, a = null) {
  var i = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & Vl) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    i = Me ? $t(
      /** @type {Comment | Text} */
      /* @__PURE__ */ xt(u)
    ) : u.appendChild(Nn());
  }
  Me && mn();
  var c = null, d = !1, f = /* @__PURE__ */ me(() => {
    var v = n();
    return xo(v) ? v : v == null ? [] : Ba(v);
  });
  hr(() => {
    var v = g(f), w = v.length;
    if (d && w === 0)
      return;
    d = w === 0;
    let b = !1;
    if (Me) {
      var x = (
        /** @type {Comment} */
        i.data === Oa
      );
      x !== (w === 0) && (i = ua(), $t(i), Zt(!1), b = !0);
    }
    if (Me) {
      for (var _ = null, h, C = 0; C < w; C++) {
        if (Te.nodeType === 8 && /** @type {Comment} */
        Te.data === Aa) {
          i = /** @type {Comment} */
          Te, b = !0, Zt(!1);
          break;
        }
        var y = v[C], $ = r(y, C);
        h = vu(
          Te,
          s,
          _,
          null,
          y,
          $,
          C,
          o,
          t,
          n
        ), s.items.set($, h), _ = h;
      }
      w > 0 && $t(ua());
    }
    Me || x1(v, s, i, o, t, r, n), a !== null && (w === 0 ? c ? lo(c) : c = Vn(() => a(i)) : c !== null && Mr(c, () => {
      c = null;
    })), b && Zt(!0), g(f);
  }), Me && (i = Te);
}
function x1(e, t, n, r, o, a, i) {
  var s, l, u, c, d = (o & vf) !== 0, f = (o & (Va | Da)) !== 0, v = e.length, w = t.items, b = t.first, x = b, _, h = null, C, y = [], $ = [], E, S, z, P;
  if (d)
    for (P = 0; P < v; P += 1)
      E = e[P], S = a(E, P), z = w.get(S), z !== void 0 && ((s = z.a) == null || s.measure(), (C ?? (C = /* @__PURE__ */ new Set())).add(z));
  for (P = 0; P < v; P += 1) {
    if (E = e[P], S = a(E, P), z = w.get(S), z === void 0) {
      var N = x ? (
        /** @type {TemplateNode} */
        x.e.nodes_start
      ) : n;
      h = vu(
        N,
        t,
        h,
        h === null ? t.first : h.next,
        E,
        S,
        P,
        r,
        o,
        i
      ), w.set(S, h), y = [], $ = [], x = h.next;
      continue;
    }
    if (f && $1(z, E, P, o), z.e.f & zn && (lo(z.e), d && ((l = z.a) == null || l.unfix(), (C ?? (C = /* @__PURE__ */ new Set())).delete(z))), z !== x) {
      if (_ !== void 0 && _.has(z)) {
        if (y.length < $.length) {
          var A = $[0], D;
          h = A.prev;
          var R = y[0], H = y[y.length - 1];
          for (D = 0; D < y.length; D += 1)
            Ls(y[D], A, n);
          for (D = 0; D < $.length; D += 1)
            _.delete($[D]);
          Bn(t, R.prev, H.next), Bn(t, h, R), Bn(t, H, A), x = A, h = H, P -= 1, y = [], $ = [];
        } else
          _.delete(z), Ls(z, x, n), Bn(t, z.prev, z.next), Bn(t, z, h === null ? t.first : h.next), Bn(t, h, z), h = z;
        continue;
      }
      for (y = [], $ = []; x !== null && x.k !== S; )
        x.e.f & zn || (_ ?? (_ = /* @__PURE__ */ new Set())).add(x), $.push(x), x = x.next;
      if (x === null)
        continue;
      z = x;
    }
    y.push(z), h = z, x = z.next;
  }
  if (x !== null || _ !== void 0) {
    for (var L = _ === void 0 ? [] : Ba(_); x !== null; )
      x.e.f & zn || L.push(x), x = x.next;
    var k = L.length;
    if (k > 0) {
      var M = o & Vl && v === 0 ? n : null;
      if (d) {
        for (P = 0; P < k; P += 1)
          (u = L[P].a) == null || u.measure();
        for (P = 0; P < k; P += 1)
          (c = L[P].a) == null || c.fix();
      }
      b1(t, L, M, w);
    }
  }
  d && $o(() => {
    var V;
    if (C !== void 0)
      for (z of C)
        (V = z.a) == null || V.apply();
  }), je.first = t.first && t.first.e, je.last = h && h.e;
}
function $1(e, t, n, r) {
  r & Va && la(e.v, t), r & Da ? la(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function vu(e, t, n, r, o, a, i, s, l, u) {
  var c = (l & Va) !== 0, d = (l & gf) === 0, f = c ? d ? /* @__PURE__ */ Co(o) : zt(o) : o, v = l & Da ? zt(i) : i, w = {
    i: v,
    v: f,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    return w.e = Vn(() => s(e, f, v, u), Me), w.e.prev = n && n.e, w.e.next = r && r.e, n === null ? t.first = w : (n.next = w, n.e.next = w.e), r !== null && (r.prev = w, r.e.prev = w.e), w;
  } finally {
  }
}
function Ls(e, t, n) {
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
      /* @__PURE__ */ $n(a)
    );
    o.before(a), a = i;
  }
}
function Bn(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function gu(e, t, n, r, o) {
  var a = e, i = "", s;
  hr(() => {
    if (i === (i = t() ?? "")) {
      Me && mn();
      return;
    }
    s !== void 0 && (qt(s), s = void 0), i !== "" && (s = Vn(() => {
      if (Me) {
        Te.data;
        for (var l = mn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ $n(l);
        if (l === null)
          throw Mi(), xr;
        Lt(Te, u), a = $t(l);
        return;
      }
      var c = i + "", d = qa(c);
      Lt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ xt(d),
        /** @type {TemplateNode} */
        d.lastChild
      ), a.before(d);
    }));
  });
}
function pt(e, t, n, r, o) {
  var a;
  Me && mn();
  var i = (a = t.$$slots) == null ? void 0 : a[n], s = !1;
  i === !0 && (i = t[n === "default" ? "children" : n], s = !0), i === void 0 || i(e, s ? () => r : r);
}
function C1(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const n in e.$$slots)
    t[n] = !0;
  return t;
}
function lr(e, t, ...n) {
  var r = e, o = dt, a;
  hr(() => {
    o !== (o = t()) && (a && (qt(a), a = null), a = Vn(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Br), Me && (r = Te);
}
function hu(e, t, n) {
  Me && mn();
  var r = e, o, a;
  hr(() => {
    o !== (o = t()) && (a && (Mr(a), a = null), o && (a = Vn(() => n(r, o))));
  }, Br), Me && (r = Te);
}
function _1(e, t, n, r, o, a) {
  let i = Me;
  Me && mn();
  var s, l, u = null;
  Me && Te.nodeType === 1 && (u = /** @type {Element} */
  Te, mn());
  var c = (
    /** @type {TemplateNode} */
    Me ? Te : e
  ), d;
  hr(() => {
    const f = t() || null;
    var v = f === "svg" ? Ol : null;
    f !== s && (d && (f === null ? Mr(d, () => {
      d = null, l = null;
    }) : f === l ? lo(d) : qt(d)), f && f !== l && (d = Vn(() => {
      if (u = Me ? (
        /** @type {Element} */
        u
      ) : v ? document.createElementNS(v, f) : document.createElement(f), Lt(u, u), r) {
        Me && v1(f) && u.append(document.createComment(""));
        var w = (
          /** @type {TemplateNode} */
          Me ? /* @__PURE__ */ xt(u) : u.appendChild(Nn())
        );
        Me && (w === null ? Zt(!1) : $t(w)), r(u, w);
      }
      je.nodes_end = u, c.before(u);
    })), s = f, s && (l = s));
  }, Br), i && (Zt(!0), $t(c));
}
function Qe(e, t) {
  $o(() => {
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
  It(() => {
    var r = yn(() => t(e, n == null ? void 0 : n()) || {});
    if (n && r != null && r.update) {
      var o = !1, a = (
        /** @type {any} */
        {}
      );
      Kr(() => {
        var i = n();
        G(i), o && Ka(a, i) && (a = i, r.update(i));
      }), o = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function pu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = pu(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function k1() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = pu(e)) && (r && (r += " "), r += t);
  return r;
}
function Cn(e) {
  return typeof e == "object" ? k1(e) : e ?? "";
}
const Ns = [...` 	
\r\f \v\uFEFF`];
function S1(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var a = o.length, i = 0; (i = r.indexOf(o, i)) >= 0; ) {
          var s = i + a;
          (i === 0 || Ns.includes(r[i - 1])) && (s === r.length || Ns.includes(r[s])) ? r = (i === 0 ? "" : r.substring(0, i)) + r.substring(s + 1) : i = s;
        }
  }
  return r === "" ? null : r;
}
function Ct(e, t, n, r, o, a) {
  var i = e.__className;
  if (Me || i !== n) {
    var s = S1(n, r, a);
    (!Me || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e.__className = n;
  } else if (a)
    for (var l in a) {
      var u = !!a[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return a;
}
const Fr = Symbol("class");
function no(e) {
  if (Me) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          ue(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          ue(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, zf(n), p1();
  }
}
function Gi(e, t) {
  var n = e.__attributes ?? (e.__attributes = {});
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function E1(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function ue(e, t, n, r) {
  var o = e.__attributes ?? (e.__attributes = {});
  Me && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[_f] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && mu(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function an(e, t, n, r, o = !1, a = !1, i = !1) {
  let s = Me && a;
  s && Zt(!1);
  var l = t || {}, u = e.tagName === "OPTION";
  for (var c in t)
    c in n || (n[c] = null);
  n.class ? n.class = Cn(n.class) : (r || n[Fr]) && (n.class = null);
  var d = mu(e), f = (
    /** @type {Record<string, unknown>} **/
    e.__attributes ?? (e.__attributes = {})
  );
  for (const C in n) {
    let y = n[C];
    if (u && C === "value" && y == null) {
      e.value = e.__value = "", l[C] = y;
      continue;
    }
    if (C === "class") {
      var v = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Ct(e, v, y, r, t == null ? void 0 : t[Fr], n[Fr]), l[C] = y, l[Fr] = n[Fr];
      continue;
    }
    var w = l[C];
    if (y !== w) {
      l[C] = y;
      var b = C[0] + C[1];
      if (b !== "$$") {
        if (b === "on") {
          const $ = {}, E = "$$" + C;
          let S = C.slice(2);
          var x = s1(S);
          if (i1(S) && (S = S.slice(0, -7), $.capture = !0), !x && w) {
            if (y != null) continue;
            e.removeEventListener(S, l[E], $), l[E] = null;
          }
          if (y != null)
            if (x)
              e[`__${S}`] = y, Vi([S]);
            else {
              let z = function(P) {
                l[C].call(this, P);
              };
              l[E] = cu(S, e, z, $);
            }
          else x && (e[`__${S}`] = void 0);
        } else if (C === "style" && y != null)
          e.style.cssText = y + "";
        else if (C === "autofocus")
          g1(
            /** @type {HTMLElement} */
            e,
            !!y
          );
        else if (!a && (C === "__value" || C === "value" && y != null))
          e.value = e.__value = y;
        else if (C === "selected" && u)
          E1(
            /** @type {HTMLOptionElement} */
            e,
            y
          );
        else {
          var _ = C;
          o || (_ = u1(_));
          var h = _ === "defaultValue" || _ === "defaultChecked";
          if (y == null && !a && !h)
            if (f[C] = null, _ === "value" || _ === "checked") {
              let $ = (
                /** @type {HTMLInputElement} */
                e
              );
              const E = t === void 0;
              if (_ === "value") {
                let S = $.defaultValue;
                $.removeAttribute(_), $.defaultValue = S, $.value = $.__value = E ? S : null;
              } else {
                let S = $.defaultChecked;
                $.removeAttribute(_), $.defaultChecked = S, $.checked = E ? S : !1;
              }
            } else
              e.removeAttribute(C);
          else h || d.includes(_) && (a || typeof y != "string") ? e[_] = y : typeof y != "function" && ue(e, _, y);
        }
        C === "style" && "__styles" in e && (e.__styles = {});
      }
    }
  }
  return s && Zt(!0), l;
}
var Vs = /* @__PURE__ */ new Map();
function mu(e) {
  var t = Vs.get(e.nodeName);
  if (t) return t;
  Vs.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = Zl(r);
    for (var a in n)
      n[a].set && t.push(a);
    r = Ra(r);
  }
  return t;
}
function it(e, t, n, r) {
  var o = e.__styles ?? (e.__styles = {});
  o[t] !== n && (o[t] = n, n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, ""));
}
var nr, ro, Wo, ga, yu;
const ha = class {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    wr(this, ga), wr(this, nr, /* @__PURE__ */ new WeakMap()), wr(this, ro), wr(this, Wo), Jo(this, Wo, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = st(this, nr).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), st(this, nr).set(t, r), uf(this, ga, yu).call(this).observe(t, st(this, Wo)), () => {
      var o = st(this, nr).get(t);
      o.delete(n), o.size === 0 && (st(this, nr).delete(t), st(this, ro).unobserve(t));
    };
  }
};
nr = /* @__PURE__ */ new WeakMap(), ro = /* @__PURE__ */ new WeakMap(), Wo = /* @__PURE__ */ new WeakMap(), ga = /* @__PURE__ */ new WeakSet(), yu = function() {
  return st(this, ro) ?? Jo(this, ro, new ResizeObserver(
    /** @param {any} entries */
    (e) => {
      for (var t of e) {
        ha.entries.set(t.target, t);
        for (var n of st(this, nr).get(t.target) || [])
          n(t);
      }
    }
  ));
}, /** @static */
Ht(ha, "entries", /* @__PURE__ */ new WeakMap());
let M1 = ha;
var H1 = /* @__PURE__ */ new M1({
  box: "border-box"
});
function Ds(e, t, n) {
  var r = H1.observe(e, () => n(e[t]));
  It(() => (yn(() => n(e[t])), r));
}
function Ts(e, t) {
  return e === t || (e == null ? void 0 : e[Yn]) === t;
}
function wn(e = {}, t, n, r) {
  return It(() => {
    var o, a;
    return Kr(() => {
      o = a, a = [], yn(() => {
        e !== n(...a) && (t(e, ...a), o && Ts(n(...o), e) && t(null, ...o));
      });
    }), () => {
      $o(() => {
        a && Ts(n(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function Ui(e) {
  return function(...t) {
    var n = (
      /** @type {Event} */
      t[0]
    );
    return n.stopPropagation(), e == null ? void 0 : e.apply(this, t);
  };
}
function Ve(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Ke
  ), n = t.l.u;
  if (!n) return;
  let r = () => G(t.s);
  if (e) {
    let o = 0, a = (
      /** @type {Record<string, any>} */
      {}
    );
    const i = /* @__PURE__ */ Pe(() => {
      let s = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== a[u] && (a[u] = l[u], s = !0);
      return s && o++, o;
    });
    r = () => g(i);
  }
  n.b.length && Jf(() => {
    Os(t, r), io(n.b);
  }), Er(() => {
    const o = yn(() => n.m.map(Mf));
    return () => {
      for (const a of o)
        typeof a == "function" && a();
    };
  }), n.a.length && Er(() => {
    Os(t, r), io(n.a);
  });
}
function Os(e, t) {
  if (e.l.s)
    for (const n of e.l.s) g(n);
  t();
}
function De(e, t) {
  var n, r = (
    /** @type {Record<string, Function[] | Function>} */
    (n = e.$$events) == null ? void 0 : n[t.type]
  ), o = xo(r) ? r.slice() : r == null ? [] : [r];
  for (var a of o)
    a.call(this, t);
}
function Vt(e) {
  Ke === null && Li(), Ir && Ke.l !== null ? P1(Ke).m.push(e) : Er(() => {
    const t = yn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Ga(e) {
  Ke === null && Li(), Vt(() => () => yn(e));
}
function z1(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function Di() {
  const e = Ke;
  return e === null && Li(), (t, n, r) => {
    var o;
    const a = (
      /** @type {Record<string, Function | Function[]>} */
      (o = e.s.$$events) == null ? void 0 : o[
        /** @type {any} */
        t
      ]
    );
    if (a) {
      const i = xo(a) ? a.slice() : [a], s = z1(
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
function P1(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function Ua(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), dt;
  const r = yn(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const yr = [];
function Wt(e, t) {
  return {
    subscribe: we(e, t).subscribe
  };
}
function we(e, t = dt) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(s) {
    if (Ka(e, s) && (e = s, n)) {
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
  function a(s) {
    o(s(
      /** @type {T} */
      e
    ));
  }
  function i(s, l = dt) {
    const u = [s, l];
    return r.add(u), r.size === 1 && (n = t(o, a) || dt), s(
      /** @type {T} */
      e
    ), () => {
      r.delete(u), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: o, update: a, subscribe: i };
}
function Wn(e, t, n) {
  const r = !Array.isArray(e), o = r ? [e] : e;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = t.length < 2;
  return Wt(n, (i, s) => {
    let l = !1;
    const u = [];
    let c = 0, d = dt;
    const f = () => {
      if (c)
        return;
      d();
      const w = t(r ? u[0] : u, i, s);
      a ? i(w) : d = typeof w == "function" ? w : dt;
    }, v = o.map(
      (w, b) => Ua(
        w,
        (x) => {
          u[b] = x, c &= ~(1 << b), l && f();
        },
        () => {
          c |= 1 << b;
        }
      )
    );
    return l = !0, f(), function() {
      io(v), d(), l = !1;
    };
  });
}
function j(e) {
  let t;
  return Ua(e, (n) => t = n)(), t;
}
let Ao = !1, pa = Symbol();
function Q(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ Co(void 0),
    unsubscribe: dt
  });
  if (r.store !== e && !(pa in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = dt;
    else {
      var o = !0;
      r.unsubscribe = Ua(e, (a) => {
        o ? r.source.v = a : q(r.source, a);
      }), o = !1;
    }
  return e && pa in n ? j(e) : g(r.source);
}
function L1(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = dt), e;
}
function si(e, t) {
  return e.set(t), t;
}
function et() {
  const e = {};
  function t() {
    ru(() => {
      for (var n in e)
        e[n].unsubscribe();
      oo(e, pa, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function N1(e) {
  var t = Ao;
  try {
    return Ao = !1, [e(), Ao];
  } finally {
    Ao = t;
  }
}
const V1 = {
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
    V1
  );
}
const D1 = {
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
      Dl
    )), e.special[t](n), Es(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), Es(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function nt(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: zt(0) }, D1);
}
const T1 = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (jr(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      jr(o) && (o = o());
      const a = Pn(o, t);
      if (a && a.set)
        return a.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (jr(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = Pn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === Yn || t === Za) return !1;
    for (let n of e.props)
      if (jr(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props) {
      jr(n) && (n = n());
      for (const r in n)
        t.includes(r) || t.push(r);
    }
    return t;
  }
};
function ut(...e) {
  return new Proxy({ props: e }, T1);
}
function m(e, t, n, r) {
  var o, a = (n & hf) !== 0, i = !Ir || (n & pf) !== 0, s = (n & mf) !== 0, l = (n & yf) !== 0, u = !1, c;
  s ? [c, u] = N1(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var d = Yn in e || Za in e, f = s && (((o = Pn(e, t)) == null ? void 0 : o.set) ?? (d && t in e && ((S) => e[t] = S))) || void 0, v = (
    /** @type {V} */
    r
  ), w = !0, b = !1, x = () => (b = !0, w && (w = !1, l ? v = yn(
    /** @type {() => V} */
    r
  ) : v = /** @type {V} */
  r), v);
  c === void 0 && r !== void 0 && (f && i && Tf(), c = x(), f && f(c));
  var _;
  if (i)
    _ = () => {
      var S = (
        /** @type {V} */
        e[t]
      );
      return S === void 0 ? x() : (w = !0, b = !1, S);
    };
  else {
    var h = (a ? Pe : me)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    h.f |= $f, _ = () => {
      var S = g(h);
      return S !== void 0 && (v = /** @type {V} */
      void 0), S === void 0 ? v : S;
    };
  }
  if (!(n & Dl))
    return _;
  if (f) {
    var C = e.$$legacy;
    return function(S, z) {
      return arguments.length > 0 ? ((!i || !z || C || u) && f(z ? _() : S), S) : _();
    };
  }
  var y = !1, $ = /* @__PURE__ */ Co(c), E = /* @__PURE__ */ Pe(() => {
    var S = _(), z = g($);
    return y ? (y = !1, z) : $.v = S;
  });
  return a || (E.equals = Xa), function(S, z) {
    if (arguments.length > 0) {
      const P = z ? g(E) : i && s ? At(S) : S;
      return E.equals(P) || (y = !0, q($, P), b && v !== void 0 && (v = P), yn(() => g(E))), S;
    }
    return g(E);
  };
}
function O1(e) {
  return new A1(e);
}
var Zn, Jt;
class A1 {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    wr(this, Zn), wr(this, Jt);
    var n, r = /* @__PURE__ */ new Map(), o = (i, s) => {
      var l = /* @__PURE__ */ Co(s);
      return r.set(i, l), l;
    };
    const a = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, s) {
          return g(r.get(s) ?? o(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === Za ? !0 : (g(r.get(s) ?? o(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, l) {
          return q(r.get(s) ?? o(s, l), l), Reflect.set(i, s, l);
        }
      }
    );
    Jo(this, Jt, (t.hydrate ? y1 : du)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: a,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((n = t == null ? void 0 : t.props) != null && n.$$host) || t.sync === !1) && p(), Jo(this, Zn, a.$$events);
    for (const i of Object.keys(st(this, Jt)))
      i === "$set" || i === "$destroy" || i === "$on" || oo(this, i, {
        get() {
          return st(this, Jt)[i];
        },
        /** @param {any} value */
        set(s) {
          st(this, Jt)[i] = s;
        },
        enumerable: !0
      });
    st(this, Jt).$set = /** @param {Record<string, any>} next */
    (i) => {
      Object.assign(a, i);
    }, st(this, Jt).$destroy = () => {
      w1(st(this, Jt));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    st(this, Jt).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    st(this, Zn)[t] = st(this, Zn)[t] || [];
    const r = (...o) => n.call(this, ...o);
    return st(this, Zn)[t].push(r), () => {
      st(this, Zn)[t] = st(this, Zn)[t].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    st(this, Jt).$destroy();
  }
}
Zn = /* @__PURE__ */ new WeakMap(), Jt = /* @__PURE__ */ new WeakMap();
let wu;
typeof HTMLElement == "function" && (wu = class extends HTMLElement {
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
          const a = document.createElement("slot");
          r !== "default" && (a.name = r), T(o, a);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, n = I1(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = jo(o, r.value, this.$$p_d, "toProp"));
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
      }), this.$$me = e1(() => {
        Kr(() => {
          var r;
          this.$$r = !0;
          for (const o of ni(this.$$c)) {
            if (!((r = this.$$p_d[o]) != null && r.reflect)) continue;
            this.$$d[o] = this.$$c[o];
            const a = jo(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = jo(e, n, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [e]: this.$$d[e] }));
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
    return ni(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function jo(e, t, n, r) {
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
function I1(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function oe(e, t, n, r, o, a) {
  let i = class extends wu {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return ni(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return ni(t).forEach((s) => {
    oo(i.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(l) {
        var u;
        l = jo(s, l, t), this.$$d[s] = l;
        var c = this.$$c;
        if (c) {
          var d = (u = Pn(c, s)) == null ? void 0 : u.get;
          d ? c[s] = l : c.$set({ [s]: l });
        }
      }
    });
  }), r.forEach((s) => {
    oo(i.prototype, s, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[s];
      }
    });
  }), e.element = /** @type {any} */
  i, i;
}
function kt(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = kt(e[n])) !== "" && (t += (t && " ") + r);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
var Z1 = { value: () => {
} };
function Ti() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Fo(n);
}
function Fo(e) {
  this._ = e;
}
function B1(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Fo.prototype = Ti.prototype = {
  constructor: Fo,
  on: function(e, t) {
    var n = this._, r = B1(e + "", n), o, a = -1, i = r.length;
    if (arguments.length < 2) {
      for (; ++a < i; ) if ((o = (e = r[a]).type) && (o = R1(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++a < i; )
      if (o = (e = r[a]).type) n[o] = As(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = As(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Fo(e);
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
function R1(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function As(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Z1, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var ma = "http://www.w3.org/1999/xhtml";
const Is = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: ma,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Oi(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Is.hasOwnProperty(t) ? { space: Is[t], local: e } : e;
}
function K1(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === ma && t.documentElement.namespaceURI === ma ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function X1(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function bu(e) {
  var t = Oi(e);
  return (t.local ? X1 : K1)(t);
}
function Y1() {
}
function Qa(e) {
  return e == null ? Y1 : function() {
    return this.querySelector(e);
  };
}
function W1(e) {
  typeof e != "function" && (e = Qa(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], i = a.length, s = r[o] = new Array(i), l, u, c = 0; c < i; ++c)
      (l = a[c]) && (u = e.call(l, l.__data__, c, a)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new Xt(r, this._parents);
}
function j1(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function F1() {
  return [];
}
function xu(e) {
  return e == null ? F1 : function() {
    return this.querySelectorAll(e);
  };
}
function q1(e) {
  return function() {
    return j1(e.apply(this, arguments));
  };
}
function G1(e) {
  typeof e == "function" ? e = q1(e) : e = xu(e);
  for (var t = this._groups, n = t.length, r = [], o = [], a = 0; a < n; ++a)
    for (var i = t[a], s = i.length, l, u = 0; u < s; ++u)
      (l = i[u]) && (r.push(e.call(l, l.__data__, u, i)), o.push(l));
  return new Xt(r, o);
}
function $u(e) {
  return function() {
    return this.matches(e);
  };
}
function Cu(e) {
  return function(t) {
    return t.matches(e);
  };
}
var U1 = Array.prototype.find;
function Q1(e) {
  return function() {
    return U1.call(this.children, e);
  };
}
function J1() {
  return this.firstElementChild;
}
function ev(e) {
  return this.select(e == null ? J1 : Q1(typeof e == "function" ? e : Cu(e)));
}
var tv = Array.prototype.filter;
function nv() {
  return Array.from(this.children);
}
function rv(e) {
  return function() {
    return tv.call(this.children, e);
  };
}
function ov(e) {
  return this.selectAll(e == null ? nv : rv(typeof e == "function" ? e : Cu(e)));
}
function iv(e) {
  typeof e != "function" && (e = $u(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], i = a.length, s = r[o] = [], l, u = 0; u < i; ++u)
      (l = a[u]) && e.call(l, l.__data__, u, a) && s.push(l);
  return new Xt(r, this._parents);
}
function _u(e) {
  return new Array(e.length);
}
function av() {
  return new Xt(this._enter || this._groups.map(_u), this._parents);
}
function li(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
li.prototype = {
  constructor: li,
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
function sv(e) {
  return function() {
    return e;
  };
}
function lv(e, t, n, r, o, a) {
  for (var i = 0, s, l = t.length, u = a.length; i < u; ++i)
    (s = t[i]) ? (s.__data__ = a[i], r[i] = s) : n[i] = new li(e, a[i]);
  for (; i < l; ++i)
    (s = t[i]) && (o[i] = s);
}
function uv(e, t, n, r, o, a, i) {
  var s, l, u = /* @__PURE__ */ new Map(), c = t.length, d = a.length, f = new Array(c), v;
  for (s = 0; s < c; ++s)
    (l = t[s]) && (f[s] = v = i.call(l, l.__data__, s, t) + "", u.has(v) ? o[s] = l : u.set(v, l));
  for (s = 0; s < d; ++s)
    v = i.call(e, a[s], s, a) + "", (l = u.get(v)) ? (r[s] = l, l.__data__ = a[s], u.delete(v)) : n[s] = new li(e, a[s]);
  for (s = 0; s < c; ++s)
    (l = t[s]) && u.get(f[s]) === l && (o[s] = l);
}
function cv(e) {
  return e.__data__;
}
function dv(e, t) {
  if (!arguments.length) return Array.from(this, cv);
  var n = t ? uv : lv, r = this._parents, o = this._groups;
  typeof e != "function" && (e = sv(e));
  for (var a = o.length, i = new Array(a), s = new Array(a), l = new Array(a), u = 0; u < a; ++u) {
    var c = r[u], d = o[u], f = d.length, v = fv(e.call(c, c && c.__data__, u, r)), w = v.length, b = s[u] = new Array(w), x = i[u] = new Array(w), _ = l[u] = new Array(f);
    n(c, d, b, x, _, v, t);
    for (var h = 0, C = 0, y, $; h < w; ++h)
      if (y = b[h]) {
        for (h >= C && (C = h + 1); !($ = x[C]) && ++C < w; ) ;
        y._next = $ || null;
      }
  }
  return i = new Xt(i, r), i._enter = s, i._exit = l, i;
}
function fv(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function vv() {
  return new Xt(this._exit || this._groups.map(_u), this._parents);
}
function gv(e, t, n) {
  var r = this.enter(), o = this, a = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? a.remove() : n(a), r && o ? r.merge(o).order() : o;
}
function hv(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, a = r.length, i = Math.min(o, a), s = new Array(o), l = 0; l < i; ++l)
    for (var u = n[l], c = r[l], d = u.length, f = s[l] = new Array(d), v, w = 0; w < d; ++w)
      (v = u[w] || c[w]) && (f[w] = v);
  for (; l < o; ++l)
    s[l] = n[l];
  return new Xt(s, this._parents);
}
function pv() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, a = r[o], i; --o >= 0; )
      (i = r[o]) && (a && i.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(i, a), a = i);
  return this;
}
function mv(e) {
  e || (e = yv);
  function t(d, f) {
    return d && f ? e(d.__data__, f.__data__) : !d - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), a = 0; a < r; ++a) {
    for (var i = n[a], s = i.length, l = o[a] = new Array(s), u, c = 0; c < s; ++c)
      (u = i[c]) && (l[c] = u);
    l.sort(t);
  }
  return new Xt(o, this._parents).order();
}
function yv(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function wv() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function bv() {
  return Array.from(this);
}
function xv() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, a = r.length; o < a; ++o) {
      var i = r[o];
      if (i) return i;
    }
  return null;
}
function $v() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function Cv() {
  return !this.node();
}
function _v(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], a = 0, i = o.length, s; a < i; ++a)
      (s = o[a]) && e.call(s, s.__data__, a, o);
  return this;
}
function kv(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Sv(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Ev(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Mv(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Hv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function zv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Pv(e, t) {
  var n = Oi(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Sv : kv : typeof t == "function" ? n.local ? zv : Hv : n.local ? Mv : Ev)(n, t));
}
function ku(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Lv(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Nv(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function Vv(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function Dv(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Lv : typeof t == "function" ? Vv : Nv)(e, t, n ?? "")) : zr(this.node(), e);
}
function zr(e, t) {
  return e.style.getPropertyValue(t) || ku(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Tv(e) {
  return function() {
    delete this[e];
  };
}
function Ov(e, t) {
  return function() {
    this[e] = t;
  };
}
function Av(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Iv(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Tv : typeof t == "function" ? Av : Ov)(e, t)) : this.node()[e];
}
function Su(e) {
  return e.trim().split(/^|\s+/);
}
function Ja(e) {
  return e.classList || new Eu(e);
}
function Eu(e) {
  this._node = e, this._names = Su(e.getAttribute("class") || "");
}
Eu.prototype = {
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
function Mu(e, t) {
  for (var n = Ja(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Hu(e, t) {
  for (var n = Ja(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Zv(e) {
  return function() {
    Mu(this, e);
  };
}
function Bv(e) {
  return function() {
    Hu(this, e);
  };
}
function Rv(e, t) {
  return function() {
    (t.apply(this, arguments) ? Mu : Hu)(this, e);
  };
}
function Kv(e, t) {
  var n = Su(e + "");
  if (arguments.length < 2) {
    for (var r = Ja(this.node()), o = -1, a = n.length; ++o < a; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Rv : t ? Zv : Bv)(n, t));
}
function Xv() {
  this.textContent = "";
}
function Yv(e) {
  return function() {
    this.textContent = e;
  };
}
function Wv(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function jv(e) {
  return arguments.length ? this.each(e == null ? Xv : (typeof e == "function" ? Wv : Yv)(e)) : this.node().textContent;
}
function Fv() {
  this.innerHTML = "";
}
function qv(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Gv(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Uv(e) {
  return arguments.length ? this.each(e == null ? Fv : (typeof e == "function" ? Gv : qv)(e)) : this.node().innerHTML;
}
function Qv() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Jv() {
  return this.each(Qv);
}
function eg() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function tg() {
  return this.each(eg);
}
function ng(e) {
  var t = typeof e == "function" ? e : bu(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function rg() {
  return null;
}
function og(e, t) {
  var n = typeof e == "function" ? e : bu(e), r = t == null ? rg : typeof t == "function" ? t : Qa(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function ig() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function ag() {
  return this.each(ig);
}
function sg() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function lg() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function ug(e) {
  return this.select(e ? lg : sg);
}
function cg(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function dg(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function fg(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function vg(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, a; n < o; ++n)
        a = t[n], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++r] = a;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function gg(e, t, n) {
  return function() {
    var r = this.__on, o, a = dg(t);
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
function hg(e, t, n) {
  var r = fg(e + ""), o, a = r.length, i;
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
  for (s = t ? gg : vg, o = 0; o < a; ++o) this.each(s(r[o], t, n));
  return this;
}
function zu(e, t, n) {
  var r = ku(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function pg(e, t) {
  return function() {
    return zu(this, e, t);
  };
}
function mg(e, t) {
  return function() {
    return zu(this, e, t.apply(this, arguments));
  };
}
function yg(e, t) {
  return this.each((typeof t == "function" ? mg : pg)(e, t));
}
function* wg() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, a = r.length, i; o < a; ++o)
      (i = r[o]) && (yield i);
}
var Pu = [null];
function Xt(e, t) {
  this._groups = e, this._parents = t;
}
function _o() {
  return new Xt([[document.documentElement]], Pu);
}
function bg() {
  return this;
}
Xt.prototype = _o.prototype = {
  constructor: Xt,
  select: W1,
  selectAll: G1,
  selectChild: ev,
  selectChildren: ov,
  filter: iv,
  data: dv,
  enter: av,
  exit: vv,
  join: gv,
  merge: hv,
  selection: bg,
  order: pv,
  sort: mv,
  call: wv,
  nodes: bv,
  node: xv,
  size: $v,
  empty: Cv,
  each: _v,
  attr: Pv,
  style: Dv,
  property: Iv,
  classed: Kv,
  text: jv,
  html: Uv,
  raise: Jv,
  lower: tg,
  append: ng,
  insert: og,
  remove: ag,
  clone: ug,
  datum: cg,
  on: hg,
  dispatch: yg,
  [Symbol.iterator]: wg
};
function jt(e) {
  return typeof e == "string" ? new Xt([[document.querySelector(e)]], [document.documentElement]) : new Xt([[e]], Pu);
}
function xg(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function en(e, t) {
  if (e = xg(e), t === void 0 && (t = e.currentTarget), t) {
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
const $g = { passive: !1 }, co = { capture: !0, passive: !1 };
function Qi(e) {
  e.stopImmediatePropagation();
}
function $r(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Lu(e) {
  var t = e.document.documentElement, n = jt(e).on("dragstart.drag", $r, co);
  "onselectstart" in t ? n.on("selectstart.drag", $r, co) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Nu(e, t) {
  var n = e.document.documentElement, r = jt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", $r, co), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Io = (e) => () => e;
function ya(e, {
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
ya.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Cg(e) {
  return !e.ctrlKey && !e.button;
}
function _g() {
  return this.parentNode;
}
function kg(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Sg() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Eg() {
  var e = Cg, t = _g, n = kg, r = Sg, o = {}, a = Ti("start", "drag", "end"), i = 0, s, l, u, c, d = 0;
  function f(y) {
    y.on("mousedown.drag", v).filter(r).on("touchstart.drag", x).on("touchmove.drag", _, $g).on("touchend.drag touchcancel.drag", h).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function v(y, $) {
    if (!(c || !e.call(this, y, $))) {
      var E = C(this, t.call(this, y, $), y, $, "mouse");
      E && (jt(y.view).on("mousemove.drag", w, co).on("mouseup.drag", b, co), Lu(y.view), Qi(y), u = !1, s = y.clientX, l = y.clientY, E("start", y));
    }
  }
  function w(y) {
    if ($r(y), !u) {
      var $ = y.clientX - s, E = y.clientY - l;
      u = $ * $ + E * E > d;
    }
    o.mouse("drag", y);
  }
  function b(y) {
    jt(y.view).on("mousemove.drag mouseup.drag", null), Nu(y.view, u), $r(y), o.mouse("end", y);
  }
  function x(y, $) {
    if (e.call(this, y, $)) {
      var E = y.changedTouches, S = t.call(this, y, $), z = E.length, P, N;
      for (P = 0; P < z; ++P)
        (N = C(this, S, y, $, E[P].identifier, E[P])) && (Qi(y), N("start", y, E[P]));
    }
  }
  function _(y) {
    var $ = y.changedTouches, E = $.length, S, z;
    for (S = 0; S < E; ++S)
      (z = o[$[S].identifier]) && ($r(y), z("drag", y, $[S]));
  }
  function h(y) {
    var $ = y.changedTouches, E = $.length, S, z;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), S = 0; S < E; ++S)
      (z = o[$[S].identifier]) && (Qi(y), z("end", y, $[S]));
  }
  function C(y, $, E, S, z, P) {
    var N = a.copy(), A = en(P || E, $), D, R, H;
    if ((H = n.call(y, new ya("beforestart", {
      sourceEvent: E,
      target: f,
      identifier: z,
      active: i,
      x: A[0],
      y: A[1],
      dx: 0,
      dy: 0,
      dispatch: N
    }), S)) != null)
      return D = H.x - A[0] || 0, R = H.y - A[1] || 0, function L(k, M, V) {
        var O = A, Z;
        switch (k) {
          case "start":
            o[z] = L, Z = i++;
            break;
          case "end":
            delete o[z], --i;
          // falls through
          case "drag":
            A = en(V || M, $), Z = i;
            break;
        }
        N.call(
          k,
          y,
          new ya(k, {
            sourceEvent: M,
            subject: H,
            target: f,
            identifier: z,
            active: Z,
            x: A[0] + D,
            y: A[1] + R,
            dx: A[0] - O[0],
            dy: A[1] - O[1],
            dispatch: N
          }),
          S
        );
      };
  }
  return f.filter = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : Io(!!y), f) : e;
  }, f.container = function(y) {
    return arguments.length ? (t = typeof y == "function" ? y : Io(y), f) : t;
  }, f.subject = function(y) {
    return arguments.length ? (n = typeof y == "function" ? y : Io(y), f) : n;
  }, f.touchable = function(y) {
    return arguments.length ? (r = typeof y == "function" ? y : Io(!!y), f) : r;
  }, f.on = function() {
    var y = a.on.apply(a, arguments);
    return y === a ? f : y;
  }, f.clickDistance = function(y) {
    return arguments.length ? (d = (y = +y) * y, f) : Math.sqrt(d);
  }, f;
}
function es(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Vu(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function ko() {
}
var fo = 0.7, ui = 1 / fo, Cr = "\\s*([+-]?\\d+)\\s*", vo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", hn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Mg = /^#([0-9a-f]{3,8})$/, Hg = new RegExp(`^rgb\\(${Cr},${Cr},${Cr}\\)$`), zg = new RegExp(`^rgb\\(${hn},${hn},${hn}\\)$`), Pg = new RegExp(`^rgba\\(${Cr},${Cr},${Cr},${vo}\\)$`), Lg = new RegExp(`^rgba\\(${hn},${hn},${hn},${vo}\\)$`), Ng = new RegExp(`^hsl\\(${vo},${hn},${hn}\\)$`), Vg = new RegExp(`^hsla\\(${vo},${hn},${hn},${vo}\\)$`), Zs = {
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
es(ko, go, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Bs,
  // Deprecated! Use color.formatHex.
  formatHex: Bs,
  formatHex8: Dg,
  formatHsl: Tg,
  formatRgb: Rs,
  toString: Rs
});
function Bs() {
  return this.rgb().formatHex();
}
function Dg() {
  return this.rgb().formatHex8();
}
function Tg() {
  return Du(this).formatHsl();
}
function Rs() {
  return this.rgb().formatRgb();
}
function go(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Mg.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Ks(t) : n === 3 ? new Pt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Zo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Zo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Hg.exec(e)) ? new Pt(t[1], t[2], t[3], 1) : (t = zg.exec(e)) ? new Pt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Pg.exec(e)) ? Zo(t[1], t[2], t[3], t[4]) : (t = Lg.exec(e)) ? Zo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Ng.exec(e)) ? Ws(t[1], t[2] / 100, t[3] / 100, 1) : (t = Vg.exec(e)) ? Ws(t[1], t[2] / 100, t[3] / 100, t[4]) : Zs.hasOwnProperty(e) ? Ks(Zs[e]) : e === "transparent" ? new Pt(NaN, NaN, NaN, 0) : null;
}
function Ks(e) {
  return new Pt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Zo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Pt(e, t, n, r);
}
function Og(e) {
  return e instanceof ko || (e = go(e)), e ? (e = e.rgb(), new Pt(e.r, e.g, e.b, e.opacity)) : new Pt();
}
function wa(e, t, n, r) {
  return arguments.length === 1 ? Og(e) : new Pt(e, t, n, r ?? 1);
}
function Pt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
es(Pt, wa, Vu(ko, {
  brighter(e) {
    return e = e == null ? ui : Math.pow(ui, e), new Pt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? fo : Math.pow(fo, e), new Pt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Pt(ir(this.r), ir(this.g), ir(this.b), ci(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Xs,
  // Deprecated! Use color.formatHex.
  formatHex: Xs,
  formatHex8: Ag,
  formatRgb: Ys,
  toString: Ys
}));
function Xs() {
  return `#${rr(this.r)}${rr(this.g)}${rr(this.b)}`;
}
function Ag() {
  return `#${rr(this.r)}${rr(this.g)}${rr(this.b)}${rr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ys() {
  const e = ci(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${ir(this.r)}, ${ir(this.g)}, ${ir(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ci(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function ir(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function rr(e) {
  return e = ir(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Ws(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new nn(e, t, n, r);
}
function Du(e) {
  if (e instanceof nn) return new nn(e.h, e.s, e.l, e.opacity);
  if (e instanceof ko || (e = go(e)), !e) return new nn();
  if (e instanceof nn) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), a = Math.max(t, n, r), i = NaN, s = a - o, l = (a + o) / 2;
  return s ? (t === a ? i = (n - r) / s + (n < r) * 6 : n === a ? i = (r - t) / s + 2 : i = (t - n) / s + 4, s /= l < 0.5 ? a + o : 2 - a - o, i *= 60) : s = l > 0 && l < 1 ? 0 : i, new nn(i, s, l, e.opacity);
}
function Ig(e, t, n, r) {
  return arguments.length === 1 ? Du(e) : new nn(e, t, n, r ?? 1);
}
function nn(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
es(nn, Ig, Vu(ko, {
  brighter(e) {
    return e = e == null ? ui : Math.pow(ui, e), new nn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? fo : Math.pow(fo, e), new nn(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Pt(
      Ji(e >= 240 ? e - 240 : e + 120, o, r),
      Ji(e, o, r),
      Ji(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new nn(js(this.h), Bo(this.s), Bo(this.l), ci(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = ci(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${js(this.h)}, ${Bo(this.s) * 100}%, ${Bo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function js(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Bo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Ji(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Tu = (e) => () => e;
function Zg(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Bg(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function Rg(e) {
  return (e = +e) == 1 ? Ou : function(t, n) {
    return n - t ? Bg(t, n, e) : Tu(isNaN(t) ? n : t);
  };
}
function Ou(e, t) {
  var n = t - e;
  return n ? Zg(e, n) : Tu(isNaN(e) ? t : e);
}
const Fs = function e(t) {
  var n = Rg(t);
  function r(o, a) {
    var i = n((o = wa(o)).r, (a = wa(a)).r), s = n(o.g, a.g), l = n(o.b, a.b), u = Ou(o.opacity, a.opacity);
    return function(c) {
      return o.r = i(c), o.g = s(c), o.b = l(c), o.opacity = u(c), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function Rn(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
var ba = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ea = new RegExp(ba.source, "g");
function Kg(e) {
  return function() {
    return e;
  };
}
function Xg(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Yg(e, t) {
  var n = ba.lastIndex = ea.lastIndex = 0, r, o, a, i = -1, s = [], l = [];
  for (e = e + "", t = t + ""; (r = ba.exec(e)) && (o = ea.exec(t)); )
    (a = o.index) > n && (a = t.slice(n, a), s[i] ? s[i] += a : s[++i] = a), (r = r[0]) === (o = o[0]) ? s[i] ? s[i] += o : s[++i] = o : (s[++i] = null, l.push({ i, x: Rn(r, o) })), n = ea.lastIndex;
  return n < t.length && (a = t.slice(n), s[i] ? s[i] += a : s[++i] = a), s.length < 2 ? l[0] ? Xg(l[0].x) : Kg(t) : (t = l.length, function(u) {
    for (var c = 0, d; c < t; ++c) s[(d = l[c]).i] = d.x(u);
    return s.join("");
  });
}
var qs = 180 / Math.PI, Au = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Iu(e, t, n, r, o, a) {
  var i, s, l;
  return (i = Math.sqrt(e * e + t * t)) && (e /= i, t /= i), (l = e * n + t * r) && (n -= e * l, r -= t * l), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, l /= s), e * r < t * n && (e = -e, t = -t, l = -l, i = -i), {
    translateX: o,
    translateY: a,
    rotate: Math.atan2(t, e) * qs,
    skewX: Math.atan(l) * qs,
    scaleX: i,
    scaleY: s
  };
}
var Ro;
function Wg(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Au : Iu(t.a, t.b, t.c, t.d, t.e, t.f);
}
function jg(e) {
  return e == null || (Ro || (Ro = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ro.setAttribute("transform", e), !(e = Ro.transform.baseVal.consolidate())) ? Au : (e = e.matrix, Iu(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Zu(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, c, d, f, v, w) {
    if (u !== d || c !== f) {
      var b = v.push("translate(", null, t, null, n);
      w.push({ i: b - 4, x: Rn(u, d) }, { i: b - 2, x: Rn(c, f) });
    } else (d || f) && v.push("translate(" + d + t + f + n);
  }
  function i(u, c, d, f) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), f.push({ i: d.push(o(d) + "rotate(", null, r) - 2, x: Rn(u, c) })) : c && d.push(o(d) + "rotate(" + c + r);
  }
  function s(u, c, d, f) {
    u !== c ? f.push({ i: d.push(o(d) + "skewX(", null, r) - 2, x: Rn(u, c) }) : c && d.push(o(d) + "skewX(" + c + r);
  }
  function l(u, c, d, f, v, w) {
    if (u !== d || c !== f) {
      var b = v.push(o(v) + "scale(", null, ",", null, ")");
      w.push({ i: b - 4, x: Rn(u, d) }, { i: b - 2, x: Rn(c, f) });
    } else (d !== 1 || f !== 1) && v.push(o(v) + "scale(" + d + "," + f + ")");
  }
  return function(u, c) {
    var d = [], f = [];
    return u = e(u), c = e(c), a(u.translateX, u.translateY, c.translateX, c.translateY, d, f), i(u.rotate, c.rotate, d, f), s(u.skewX, c.skewX, d, f), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, d, f), u = c = null, function(v) {
      for (var w = -1, b = f.length, x; ++w < b; ) d[(x = f[w]).i] = x.x(v);
      return d.join("");
    };
  };
}
var Fg = Zu(Wg, "px, ", "px)", "deg)"), qg = Zu(jg, ", ", ")", ")"), Gg = 1e-12;
function Gs(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Ug(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Qg(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Jg = function e(t, n, r) {
  function o(a, i) {
    var s = a[0], l = a[1], u = a[2], c = i[0], d = i[1], f = i[2], v = c - s, w = d - l, b = v * v + w * w, x, _;
    if (b < Gg)
      _ = Math.log(f / u) / t, x = function(S) {
        return [
          s + S * v,
          l + S * w,
          u * Math.exp(t * S * _)
        ];
      };
    else {
      var h = Math.sqrt(b), C = (f * f - u * u + r * b) / (2 * u * n * h), y = (f * f - u * u - r * b) / (2 * f * n * h), $ = Math.log(Math.sqrt(C * C + 1) - C), E = Math.log(Math.sqrt(y * y + 1) - y);
      _ = (E - $) / t, x = function(S) {
        var z = S * _, P = Gs($), N = u / (n * h) * (P * Qg(t * z + $) - Ug($));
        return [
          s + N * v,
          l + N * w,
          u * P / Gs(t * z + $)
        ];
      };
    }
    return x.duration = _ * 1e3 * t / Math.SQRT2, x;
  }
  return o.rho = function(a) {
    var i = Math.max(1e-3, +a), s = i * i, l = s * s;
    return e(i, s, l);
  }, o;
}(Math.SQRT2, 2, 4);
var Pr = 0, Qr = 0, qr = 0, Bu = 1e3, di, Jr, fi = 0, ur = 0, Ai = 0, ho = typeof performance == "object" && performance.now ? performance : Date, Ru = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function ts() {
  return ur || (Ru(eh), ur = ho.now() + Ai);
}
function eh() {
  ur = 0;
}
function vi() {
  this._call = this._time = this._next = null;
}
vi.prototype = Ku.prototype = {
  constructor: vi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? ts() : +n) + (t == null ? 0 : +t), !this._next && Jr !== this && (Jr ? Jr._next = this : di = this, Jr = this), this._call = e, this._time = n, xa();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, xa());
  }
};
function Ku(e, t, n) {
  var r = new vi();
  return r.restart(e, t, n), r;
}
function th() {
  ts(), ++Pr;
  for (var e = di, t; e; )
    (t = ur - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Pr;
}
function Us() {
  ur = (fi = ho.now()) + Ai, Pr = Qr = 0;
  try {
    th();
  } finally {
    Pr = 0, rh(), ur = 0;
  }
}
function nh() {
  var e = ho.now(), t = e - fi;
  t > Bu && (Ai -= t, fi = e);
}
function rh() {
  for (var e, t = di, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : di = n);
  Jr = e, xa(r);
}
function xa(e) {
  if (!Pr) {
    Qr && (Qr = clearTimeout(Qr));
    var t = e - ur;
    t > 24 ? (e < 1 / 0 && (Qr = setTimeout(Us, e - ho.now() - Ai)), qr && (qr = clearInterval(qr))) : (qr || (fi = ho.now(), qr = setInterval(nh, Bu)), Pr = 1, Ru(Us));
  }
}
function Qs(e, t, n) {
  var r = new vi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var oh = Ti("start", "end", "cancel", "interrupt"), ih = [], Xu = 0, Js = 1, $a = 2, qo = 3, el = 4, Ca = 5, Go = 6;
function Ii(e, t, n, r, o, a) {
  var i = e.__transition;
  if (!i) e.__transition = {};
  else if (n in i) return;
  ah(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: oh,
    tween: ih,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: Xu
  });
}
function ns(e, t) {
  var n = un(e, t);
  if (n.state > Xu) throw new Error("too late; already scheduled");
  return n;
}
function _n(e, t) {
  var n = un(e, t);
  if (n.state > qo) throw new Error("too late; already running");
  return n;
}
function un(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function ah(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Ku(a, 0, n.time);
  function a(u) {
    n.state = Js, n.timer.restart(i, n.delay, n.time), n.delay <= u && i(u - n.delay);
  }
  function i(u) {
    var c, d, f, v;
    if (n.state !== Js) return l();
    for (c in r)
      if (v = r[c], v.name === n.name) {
        if (v.state === qo) return Qs(i);
        v.state === el ? (v.state = Go, v.timer.stop(), v.on.call("interrupt", e, e.__data__, v.index, v.group), delete r[c]) : +c < t && (v.state = Go, v.timer.stop(), v.on.call("cancel", e, e.__data__, v.index, v.group), delete r[c]);
      }
    if (Qs(function() {
      n.state === qo && (n.state = el, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = $a, n.on.call("start", e, e.__data__, n.index, n.group), n.state === $a) {
      for (n.state = qo, o = new Array(f = n.tween.length), c = 0, d = -1; c < f; ++c)
        (v = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++d] = v);
      o.length = d + 1;
    }
  }
  function s(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Ca, 1), d = -1, f = o.length; ++d < f; )
      o[d].call(e, c);
    n.state === Ca && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = Go, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function Uo(e, t) {
  var n = e.__transition, r, o, a = !0, i;
  if (n) {
    t = t == null ? null : t + "";
    for (i in n) {
      if ((r = n[i]).name !== t) {
        a = !1;
        continue;
      }
      o = r.state > $a && r.state < Ca, r.state = Go, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[i];
    }
    a && delete e.__transition;
  }
}
function sh(e) {
  return this.each(function() {
    Uo(this, e);
  });
}
function lh(e, t) {
  var n, r;
  return function() {
    var o = _n(this, e), a = o.tween;
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
function uh(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var a = _n(this, e), i = a.tween;
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
function ch(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = un(this.node(), n).tween, o = 0, a = r.length, i; o < a; ++o)
      if ((i = r[o]).name === e)
        return i.value;
    return null;
  }
  return this.each((t == null ? lh : uh)(n, e, t));
}
function rs(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = _n(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return un(o, r).value[t];
  };
}
function Yu(e, t) {
  var n;
  return (typeof t == "number" ? Rn : t instanceof go ? Fs : (n = go(t)) ? (t = n, Fs) : Yg)(e, t);
}
function dh(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function fh(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function vh(e, t, n) {
  var r, o = n + "", a;
  return function() {
    var i = this.getAttribute(e);
    return i === o ? null : i === r ? a : a = t(r = i, n);
  };
}
function gh(e, t, n) {
  var r, o = n + "", a;
  return function() {
    var i = this.getAttributeNS(e.space, e.local);
    return i === o ? null : i === r ? a : a = t(r = i, n);
  };
}
function hh(e, t, n) {
  var r, o, a;
  return function() {
    var i, s = n(this), l;
    return s == null ? void this.removeAttribute(e) : (i = this.getAttribute(e), l = s + "", i === l ? null : i === r && l === o ? a : (o = l, a = t(r = i, s)));
  };
}
function ph(e, t, n) {
  var r, o, a;
  return function() {
    var i, s = n(this), l;
    return s == null ? void this.removeAttributeNS(e.space, e.local) : (i = this.getAttributeNS(e.space, e.local), l = s + "", i === l ? null : i === r && l === o ? a : (o = l, a = t(r = i, s)));
  };
}
function mh(e, t) {
  var n = Oi(e), r = n === "transform" ? qg : Yu;
  return this.attrTween(e, typeof t == "function" ? (n.local ? ph : hh)(n, r, rs(this, "attr." + e, t)) : t == null ? (n.local ? fh : dh)(n) : (n.local ? gh : vh)(n, r, t));
}
function yh(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function wh(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function bh(e, t) {
  var n, r;
  function o() {
    var a = t.apply(this, arguments);
    return a !== r && (n = (r = a) && wh(e, a)), n;
  }
  return o._value = t, o;
}
function xh(e, t) {
  var n, r;
  function o() {
    var a = t.apply(this, arguments);
    return a !== r && (n = (r = a) && yh(e, a)), n;
  }
  return o._value = t, o;
}
function $h(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Oi(e);
  return this.tween(n, (r.local ? bh : xh)(r, t));
}
function Ch(e, t) {
  return function() {
    ns(this, e).delay = +t.apply(this, arguments);
  };
}
function _h(e, t) {
  return t = +t, function() {
    ns(this, e).delay = t;
  };
}
function kh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Ch : _h)(t, e)) : un(this.node(), t).delay;
}
function Sh(e, t) {
  return function() {
    _n(this, e).duration = +t.apply(this, arguments);
  };
}
function Eh(e, t) {
  return t = +t, function() {
    _n(this, e).duration = t;
  };
}
function Mh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Sh : Eh)(t, e)) : un(this.node(), t).duration;
}
function Hh(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    _n(this, e).ease = t;
  };
}
function zh(e) {
  var t = this._id;
  return arguments.length ? this.each(Hh(t, e)) : un(this.node(), t).ease;
}
function Ph(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    _n(this, e).ease = n;
  };
}
function Lh(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Ph(this._id, e));
}
function Nh(e) {
  typeof e != "function" && (e = $u(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], i = a.length, s = r[o] = [], l, u = 0; u < i; ++u)
      (l = a[u]) && e.call(l, l.__data__, u, a) && s.push(l);
  return new Dn(r, this._parents, this._name, this._id);
}
function Vh(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, a = Math.min(r, o), i = new Array(r), s = 0; s < a; ++s)
    for (var l = t[s], u = n[s], c = l.length, d = i[s] = new Array(c), f, v = 0; v < c; ++v)
      (f = l[v] || u[v]) && (d[v] = f);
  for (; s < r; ++s)
    i[s] = t[s];
  return new Dn(i, this._parents, this._name, this._id);
}
function Dh(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function Th(e, t, n) {
  var r, o, a = Dh(t) ? ns : _n;
  return function() {
    var i = a(this, e), s = i.on;
    s !== r && (o = (r = s).copy()).on(t, n), i.on = o;
  };
}
function Oh(e, t) {
  var n = this._id;
  return arguments.length < 2 ? un(this.node(), n).on.on(e) : this.each(Th(n, e, t));
}
function Ah(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Ih() {
  return this.on("end.remove", Ah(this._id));
}
function Zh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Qa(e));
  for (var r = this._groups, o = r.length, a = new Array(o), i = 0; i < o; ++i)
    for (var s = r[i], l = s.length, u = a[i] = new Array(l), c, d, f = 0; f < l; ++f)
      (c = s[f]) && (d = e.call(c, c.__data__, f, s)) && ("__data__" in c && (d.__data__ = c.__data__), u[f] = d, Ii(u[f], t, n, f, u, un(c, n)));
  return new Dn(a, this._parents, t, n);
}
function Bh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = xu(e));
  for (var r = this._groups, o = r.length, a = [], i = [], s = 0; s < o; ++s)
    for (var l = r[s], u = l.length, c, d = 0; d < u; ++d)
      if (c = l[d]) {
        for (var f = e.call(c, c.__data__, d, l), v, w = un(c, n), b = 0, x = f.length; b < x; ++b)
          (v = f[b]) && Ii(v, t, n, b, f, w);
        a.push(f), i.push(c);
      }
  return new Dn(a, i, t, n);
}
var Rh = _o.prototype.constructor;
function Kh() {
  return new Rh(this._groups, this._parents);
}
function Xh(e, t) {
  var n, r, o;
  return function() {
    var a = zr(this, e), i = (this.style.removeProperty(e), zr(this, e));
    return a === i ? null : a === n && i === r ? o : o = t(n = a, r = i);
  };
}
function Wu(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Yh(e, t, n) {
  var r, o = n + "", a;
  return function() {
    var i = zr(this, e);
    return i === o ? null : i === r ? a : a = t(r = i, n);
  };
}
function Wh(e, t, n) {
  var r, o, a;
  return function() {
    var i = zr(this, e), s = n(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(e), zr(this, e))), i === l ? null : i === r && l === o ? a : (o = l, a = t(r = i, s));
  };
}
function jh(e, t) {
  var n, r, o, a = "style." + t, i = "end." + a, s;
  return function() {
    var l = _n(this, e), u = l.on, c = l.value[a] == null ? s || (s = Wu(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(i, o = c), l.on = r;
  };
}
function Fh(e, t, n) {
  var r = (e += "") == "transform" ? Fg : Yu;
  return t == null ? this.styleTween(e, Xh(e, r)).on("end.style." + e, Wu(e)) : typeof t == "function" ? this.styleTween(e, Wh(e, r, rs(this, "style." + e, t))).each(jh(this._id, e)) : this.styleTween(e, Yh(e, r, t), n).on("end.style." + e, null);
}
function qh(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function Gh(e, t, n) {
  var r, o;
  function a() {
    var i = t.apply(this, arguments);
    return i !== o && (r = (o = i) && qh(e, i, n)), r;
  }
  return a._value = t, a;
}
function Uh(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, Gh(e, t, n ?? ""));
}
function Qh(e) {
  return function() {
    this.textContent = e;
  };
}
function Jh(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function ep(e) {
  return this.tween("text", typeof e == "function" ? Jh(rs(this, "text", e)) : Qh(e == null ? "" : e + ""));
}
function tp(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function np(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && tp(o)), t;
  }
  return r._value = e, r;
}
function rp(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, np(e));
}
function op() {
  for (var e = this._name, t = this._id, n = ju(), r = this._groups, o = r.length, a = 0; a < o; ++a)
    for (var i = r[a], s = i.length, l, u = 0; u < s; ++u)
      if (l = i[u]) {
        var c = un(l, t);
        Ii(l, e, n, u, i, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new Dn(r, this._parents, e, n);
}
function ip() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(a, i) {
    var s = { value: i }, l = { value: function() {
      --o === 0 && a();
    } };
    n.each(function() {
      var u = _n(this, r), c = u.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(l)), u.on = t;
    }), o === 0 && a();
  });
}
var ap = 0;
function Dn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function ju() {
  return ++ap;
}
var Sn = _o.prototype;
Dn.prototype = {
  constructor: Dn,
  select: Zh,
  selectAll: Bh,
  selectChild: Sn.selectChild,
  selectChildren: Sn.selectChildren,
  filter: Nh,
  merge: Vh,
  selection: Kh,
  transition: op,
  call: Sn.call,
  nodes: Sn.nodes,
  node: Sn.node,
  size: Sn.size,
  empty: Sn.empty,
  each: Sn.each,
  on: Oh,
  attr: mh,
  attrTween: $h,
  style: Fh,
  styleTween: Uh,
  text: ep,
  textTween: rp,
  remove: Ih,
  tween: ch,
  delay: kh,
  duration: Mh,
  ease: zh,
  easeVarying: Lh,
  end: ip,
  [Symbol.iterator]: Sn[Symbol.iterator]
};
function sp(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var lp = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: sp
};
function up(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function cp(e) {
  var t, n;
  e instanceof Dn ? (t = e._id, e = e._name) : (t = ju(), (n = lp).time = ts(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, a = 0; a < o; ++a)
    for (var i = r[a], s = i.length, l, u = 0; u < s; ++u)
      (l = i[u]) && Ii(l, e, t, u, i, n || up(l, t));
  return new Dn(r, this._parents, e, t);
}
_o.prototype.interrupt = sh;
_o.prototype.transition = cp;
const Ko = (e) => () => e;
function dp(e, {
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
var Zi = new Mn(1, 0, 0);
Fu.prototype = Mn.prototype;
function Fu(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Zi;
  return e.__zoom;
}
function ta(e) {
  e.stopImmediatePropagation();
}
function Gr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function fp(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function vp() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function tl() {
  return this.__zoom || Zi;
}
function gp(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function hp() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function pp(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], a = e.invertY(t[0][1]) - n[0][1], i = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    i > a ? (a + i) / 2 : Math.min(0, a) || Math.max(0, i)
  );
}
function qu() {
  var e = fp, t = vp, n = pp, r = gp, o = hp, a = [0, 1 / 0], i = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, l = Jg, u = Ti("start", "zoom", "end"), c, d, f, v = 500, w = 150, b = 0, x = 10;
  function _(H) {
    H.property("__zoom", tl).on("wheel.zoom", z, { passive: !1 }).on("mousedown.zoom", P).on("dblclick.zoom", N).filter(o).on("touchstart.zoom", A).on("touchmove.zoom", D).on("touchend.zoom touchcancel.zoom", R).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  _.transform = function(H, L, k, M) {
    var V = H.selection ? H.selection() : H;
    V.property("__zoom", tl), H !== V ? $(H, L, k, M) : V.interrupt().each(function() {
      E(this, arguments).event(M).start().zoom(null, typeof L == "function" ? L.apply(this, arguments) : L).end();
    });
  }, _.scaleBy = function(H, L, k, M) {
    _.scaleTo(H, function() {
      var V = this.__zoom.k, O = typeof L == "function" ? L.apply(this, arguments) : L;
      return V * O;
    }, k, M);
  }, _.scaleTo = function(H, L, k, M) {
    _.transform(H, function() {
      var V = t.apply(this, arguments), O = this.__zoom, Z = k == null ? y(V) : typeof k == "function" ? k.apply(this, arguments) : k, W = O.invert(Z), F = typeof L == "function" ? L.apply(this, arguments) : L;
      return n(C(h(O, F), Z, W), V, i);
    }, k, M);
  }, _.translateBy = function(H, L, k, M) {
    _.transform(H, function() {
      return n(this.__zoom.translate(
        typeof L == "function" ? L.apply(this, arguments) : L,
        typeof k == "function" ? k.apply(this, arguments) : k
      ), t.apply(this, arguments), i);
    }, null, M);
  }, _.translateTo = function(H, L, k, M, V) {
    _.transform(H, function() {
      var O = t.apply(this, arguments), Z = this.__zoom, W = M == null ? y(O) : typeof M == "function" ? M.apply(this, arguments) : M;
      return n(Zi.translate(W[0], W[1]).scale(Z.k).translate(
        typeof L == "function" ? -L.apply(this, arguments) : -L,
        typeof k == "function" ? -k.apply(this, arguments) : -k
      ), O, i);
    }, M, V);
  };
  function h(H, L) {
    return L = Math.max(a[0], Math.min(a[1], L)), L === H.k ? H : new Mn(L, H.x, H.y);
  }
  function C(H, L, k) {
    var M = L[0] - k[0] * H.k, V = L[1] - k[1] * H.k;
    return M === H.x && V === H.y ? H : new Mn(H.k, M, V);
  }
  function y(H) {
    return [(+H[0][0] + +H[1][0]) / 2, (+H[0][1] + +H[1][1]) / 2];
  }
  function $(H, L, k, M) {
    H.on("start.zoom", function() {
      E(this, arguments).event(M).start();
    }).on("interrupt.zoom end.zoom", function() {
      E(this, arguments).event(M).end();
    }).tween("zoom", function() {
      var V = this, O = arguments, Z = E(V, O).event(M), W = t.apply(V, O), F = k == null ? y(W) : typeof k == "function" ? k.apply(V, O) : k, ie = Math.max(W[1][0] - W[0][0], W[1][1] - W[0][1]), U = V.__zoom, X = typeof L == "function" ? L.apply(V, O) : L, ce = l(U.invert(F).concat(ie / U.k), X.invert(F).concat(ie / X.k));
      return function($e) {
        if ($e === 1) $e = X;
        else {
          var _e = ce($e), he = ie / _e[2];
          $e = new Mn(he, F[0] - _e[0] * he, F[1] - _e[1] * he);
        }
        Z.zoom(null, $e);
      };
    });
  }
  function E(H, L, k) {
    return !k && H.__zooming || new S(H, L);
  }
  function S(H, L) {
    this.that = H, this.args = L, this.active = 0, this.sourceEvent = null, this.extent = t.apply(H, L), this.taps = 0;
  }
  S.prototype = {
    event: function(H) {
      return H && (this.sourceEvent = H), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(H, L) {
      return this.mouse && H !== "mouse" && (this.mouse[1] = L.invert(this.mouse[0])), this.touch0 && H !== "touch" && (this.touch0[1] = L.invert(this.touch0[0])), this.touch1 && H !== "touch" && (this.touch1[1] = L.invert(this.touch1[0])), this.that.__zoom = L, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(H) {
      var L = jt(this.that).datum();
      u.call(
        H,
        this.that,
        new dp(H, {
          sourceEvent: this.sourceEvent,
          target: _,
          transform: this.that.__zoom,
          dispatch: u
        }),
        L
      );
    }
  };
  function z(H, ...L) {
    if (!e.apply(this, arguments)) return;
    var k = E(this, L).event(H), M = this.__zoom, V = Math.max(a[0], Math.min(a[1], M.k * Math.pow(2, r.apply(this, arguments)))), O = en(H);
    if (k.wheel)
      (k.mouse[0][0] !== O[0] || k.mouse[0][1] !== O[1]) && (k.mouse[1] = M.invert(k.mouse[0] = O)), clearTimeout(k.wheel);
    else {
      if (M.k === V) return;
      k.mouse = [O, M.invert(O)], Uo(this), k.start();
    }
    Gr(H), k.wheel = setTimeout(Z, w), k.zoom("mouse", n(C(h(M, V), k.mouse[0], k.mouse[1]), k.extent, i));
    function Z() {
      k.wheel = null, k.end();
    }
  }
  function P(H, ...L) {
    if (f || !e.apply(this, arguments)) return;
    var k = H.currentTarget, M = E(this, L, !0).event(H), V = jt(H.view).on("mousemove.zoom", F, !0).on("mouseup.zoom", ie, !0), O = en(H, k), Z = H.clientX, W = H.clientY;
    Lu(H.view), ta(H), M.mouse = [O, this.__zoom.invert(O)], Uo(this), M.start();
    function F(U) {
      if (Gr(U), !M.moved) {
        var X = U.clientX - Z, ce = U.clientY - W;
        M.moved = X * X + ce * ce > b;
      }
      M.event(U).zoom("mouse", n(C(M.that.__zoom, M.mouse[0] = en(U, k), M.mouse[1]), M.extent, i));
    }
    function ie(U) {
      V.on("mousemove.zoom mouseup.zoom", null), Nu(U.view, M.moved), Gr(U), M.event(U).end();
    }
  }
  function N(H, ...L) {
    if (e.apply(this, arguments)) {
      var k = this.__zoom, M = en(H.changedTouches ? H.changedTouches[0] : H, this), V = k.invert(M), O = k.k * (H.shiftKey ? 0.5 : 2), Z = n(C(h(k, O), M, V), t.apply(this, L), i);
      Gr(H), s > 0 ? jt(this).transition().duration(s).call($, Z, M, H) : jt(this).call(_.transform, Z, M, H);
    }
  }
  function A(H, ...L) {
    if (e.apply(this, arguments)) {
      var k = H.touches, M = k.length, V = E(this, L, H.changedTouches.length === M).event(H), O, Z, W, F;
      for (ta(H), Z = 0; Z < M; ++Z)
        W = k[Z], F = en(W, this), F = [F, this.__zoom.invert(F), W.identifier], V.touch0 ? !V.touch1 && V.touch0[2] !== F[2] && (V.touch1 = F, V.taps = 0) : (V.touch0 = F, O = !0, V.taps = 1 + !!c);
      c && (c = clearTimeout(c)), O && (V.taps < 2 && (d = F[0], c = setTimeout(function() {
        c = null;
      }, v)), Uo(this), V.start());
    }
  }
  function D(H, ...L) {
    if (this.__zooming) {
      var k = E(this, L).event(H), M = H.changedTouches, V = M.length, O, Z, W, F;
      for (Gr(H), O = 0; O < V; ++O)
        Z = M[O], W = en(Z, this), k.touch0 && k.touch0[2] === Z.identifier ? k.touch0[0] = W : k.touch1 && k.touch1[2] === Z.identifier && (k.touch1[0] = W);
      if (Z = k.that.__zoom, k.touch1) {
        var ie = k.touch0[0], U = k.touch0[1], X = k.touch1[0], ce = k.touch1[1], $e = ($e = X[0] - ie[0]) * $e + ($e = X[1] - ie[1]) * $e, _e = (_e = ce[0] - U[0]) * _e + (_e = ce[1] - U[1]) * _e;
        Z = h(Z, Math.sqrt($e / _e)), W = [(ie[0] + X[0]) / 2, (ie[1] + X[1]) / 2], F = [(U[0] + ce[0]) / 2, (U[1] + ce[1]) / 2];
      } else if (k.touch0) W = k.touch0[0], F = k.touch0[1];
      else return;
      k.zoom("touch", n(C(Z, W, F), k.extent, i));
    }
  }
  function R(H, ...L) {
    if (this.__zooming) {
      var k = E(this, L).event(H), M = H.changedTouches, V = M.length, O, Z;
      for (ta(H), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, v), O = 0; O < V; ++O)
        Z = M[O], k.touch0 && k.touch0[2] === Z.identifier ? delete k.touch0 : k.touch1 && k.touch1[2] === Z.identifier && delete k.touch1;
      if (k.touch1 && !k.touch0 && (k.touch0 = k.touch1, delete k.touch1), k.touch0) k.touch0[1] = this.__zoom.invert(k.touch0[0]);
      else if (k.end(), k.taps === 2 && (Z = en(Z, this), Math.hypot(d[0] - Z[0], d[1] - Z[1]) < x)) {
        var W = jt(this).on("dblclick.zoom");
        W && W.apply(this, arguments);
      }
    }
  }
  return _.wheelDelta = function(H) {
    return arguments.length ? (r = typeof H == "function" ? H : Ko(+H), _) : r;
  }, _.filter = function(H) {
    return arguments.length ? (e = typeof H == "function" ? H : Ko(!!H), _) : e;
  }, _.touchable = function(H) {
    return arguments.length ? (o = typeof H == "function" ? H : Ko(!!H), _) : o;
  }, _.extent = function(H) {
    return arguments.length ? (t = typeof H == "function" ? H : Ko([[+H[0][0], +H[0][1]], [+H[1][0], +H[1][1]]]), _) : t;
  }, _.scaleExtent = function(H) {
    return arguments.length ? (a[0] = +H[0], a[1] = +H[1], _) : [a[0], a[1]];
  }, _.translateExtent = function(H) {
    return arguments.length ? (i[0][0] = +H[0][0], i[1][0] = +H[1][0], i[0][1] = +H[0][1], i[1][1] = +H[1][1], _) : [[i[0][0], i[0][1]], [i[1][0], i[1][1]]];
  }, _.constrain = function(H) {
    return arguments.length ? (n = H, _) : n;
  }, _.duration = function(H) {
    return arguments.length ? (s = +H, _) : s;
  }, _.interpolate = function(H) {
    return arguments.length ? (l = H, _) : l;
  }, _.on = function() {
    var H = u.on.apply(u, arguments);
    return H === u ? _ : H;
  }, _.clickDistance = function(H) {
    return arguments.length ? (b = (H = +H) * H, _) : Math.sqrt(b);
  }, _.tapDistance = function(H) {
    return arguments.length ? (x = +H, _) : x;
  }, _;
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
}, gi = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
];
var cr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(cr || (cr = {}));
var jn;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(jn || (jn = {}));
var hi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(hi || (hi = {}));
const _a = {
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
var _r;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(_r || (_r = {}));
var po;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(po || (po = {}));
var Se;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(Se || (Se = {}));
const nl = {
  [Se.Left]: Se.Right,
  [Se.Right]: Se.Left,
  [Se.Top]: Se.Bottom,
  [Se.Bottom]: Se.Top
};
function mp(e, t) {
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
function rl(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, a) => {
    t != null && t.has(a) || r.push(o);
  }), r.length && n(r);
}
function yp(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const wp = (e) => "id" in e && "source" in e && "target" in e, bp = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), os = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), So = (e, t = [0, 0]) => {
  const { width: n, height: r } = er(e), o = e.origin ?? t, a = n * o[0], i = r * o[1];
  return {
    x: e.position.x - a,
    y: e.position.y - i
  };
}, xp = (e, t = { nodeOrigin: [0, 0], nodeLookup: void 0 }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const a = typeof o == "string";
    let i = !t.nodeLookup && !a ? o : void 0;
    t.nodeLookup && (i = a ? t.nodeLookup.get(o) : os(o) ? o : t.nodeLookup.get(o.id));
    const s = i ? pi(i, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Bi(r, s);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Ri(n);
}, Eo = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = pi(r);
      n = Bi(n, o);
    }
  }), Ri(n);
}, Gu = (e, t, [n, r, o] = [0, 0, 1], a = !1, i = !1) => {
  const s = {
    ...Mo(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: d = !0, hidden: f = !1 } = u;
    if (i && !d || f)
      continue;
    const v = c.width ?? u.width ?? u.initialWidth ?? null, w = c.height ?? u.height ?? u.initialHeight ?? null, b = mo(s, Vr(u)), x = (v ?? 0) * (w ?? 0), _ = a && b > 0;
    (!u.internals.handleBounds || _ || b >= x || u.dragging) && l.push(u);
  }
  return l;
}, ka = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function ol(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t != null && t.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function il({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: a }, i) {
  if (e.size === 0)
    return Promise.resolve(!1);
  const s = Eo(e), l = as(s, t, n, (i == null ? void 0 : i.minZoom) ?? o, (i == null ? void 0 : i.maxZoom) ?? a, (i == null ? void 0 : i.padding) ?? 0.1);
  return await r.setViewport(l, { duration: i == null ? void 0 : i.duration }), Promise.resolve(!0);
}
function $p({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: a }) {
  const i = n.get(e), s = i.parentId ? n.get(i.parentId) : void 0, { x: l, y: u } = s ? s.internals.positionAbsolute : { x: 0, y: 0 }, c = i.origin ?? r;
  let d = o;
  if (i.extent === "parent" && !i.expandParent)
    if (!s)
      a == null || a("005", Lr.error005());
    else {
      const v = s.measured.width, w = s.measured.height;
      v && w && (d = [
        [l, u],
        [l + v, u + w]
      ]);
    }
  else s && Dr(i.extent) && (d = [
    [i.extent[0][0] + l, i.extent[0][1] + u],
    [i.extent[1][0] + l, i.extent[1][1] + u]
  ]);
  const f = Dr(d) ? dr(t, d, i.measured) : t;
  return (i.measured.width === void 0 || i.measured.height === void 0) && (a == null || a("015", Lr.error015())), {
    position: {
      x: f.x - l + (i.measured.width ?? 0) * c[0],
      y: f.y - u + (i.measured.height ?? 0) * c[1]
    },
    positionAbsolute: f
  };
}
async function Uu({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const a = new Set(e.map((d) => d.id)), i = [];
  for (const d of n) {
    if (d.deletable === !1)
      continue;
    const f = a.has(d.id), v = !f && d.parentId && i.find((w) => w.id === d.parentId);
    (f || v) && i.push(d);
  }
  const s = new Set(t.map((d) => d.id)), l = r.filter((d) => d.deletable !== !1), u = ka(i, l);
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
const Nr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), dr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Nr(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: Nr(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function Qu(e, t, n) {
  const { width: r, height: o } = er(n), { x: a, y: i } = n.internals.positionAbsolute;
  return dr(e, [
    [a, i],
    [a + r, i + o]
  ], t);
}
const al = (e, t, n) => e < t ? Nr(Math.abs(e - t), 1, t) / t : e > n ? -Nr(Math.abs(e - n), 1, t) / t : 0, Ju = (e, t, n = 15, r = 40) => {
  const o = al(e.x, r, t.width - r) * n, a = al(e.y, r, t.height - r) * n;
  return [o, a];
}, Bi = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Sa = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Ri = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Vr = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: a } = os(e) ? e.internals.positionAbsolute : So(e, t);
  return {
    x: o,
    y: a,
    width: ((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, pi = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: a } = os(e) ? e.internals.positionAbsolute : So(e, t);
  return {
    x: o,
    y: a,
    x2: o + (((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: a + (((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, ec = (e, t) => Ri(Bi(Sa(e), Sa(t))), mo = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, sl = (e) => Hn(e.width) && Hn(e.height) && Hn(e.x) && Hn(e.y), Hn = (e) => !isNaN(e) && isFinite(e), Cp = (e, t) => {
}, is = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Mo = ({ x: e, y: t }, [n, r, o], a = !1, i = [1, 1]) => {
  const s = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return a ? is(s, i) : s;
}, tc = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
}), as = (e, t, n, r, o, a) => {
  const i = t / (e.width * (1 + a)), s = n / (e.height * (1 + a)), l = Math.min(i, s), u = Nr(l, r, o), c = e.x + e.width / 2, d = e.y + e.height / 2, f = t / 2 - c * u, v = n / 2 - d * u;
  return { x: f, y: v, zoom: u };
}, mi = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function Dr(e) {
  return e !== void 0 && e !== "parent";
}
function er(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function nc(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function _p(e, t = { width: 0, height: 0 }, n, r, o) {
  const a = { ...e }, i = r.get(n);
  if (i) {
    const s = i.origin || o;
    a.x += i.internals.positionAbsolute.x - (t.width ?? 0) * s[0], a.y += i.internals.positionAbsolute.y - (t.height ?? 0) * s[1];
  }
  return a;
}
function na(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: a, y: i } = Ln(e), s = Mo({ x: a - ((o == null ? void 0 : o.left) ?? 0), y: i - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? is(s, t) : s;
  return {
    xSnapped: l,
    ySnapped: u,
    ...s
  };
}
const ss = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), kp = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, Sp = ["INPUT", "SELECT", "TEXTAREA"];
function Ep(e) {
  var t, n;
  const r = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target;
  return (r == null ? void 0 : r.nodeType) !== 1 ? !1 : Sp.includes(r.nodeName) || r.hasAttribute("contenteditable") || !!r.closest(".nokey");
}
const rc = (e) => "clientX" in e, Ln = (e, t) => {
  var n, r;
  const o = rc(e), a = o ? e.clientX : (n = e.touches) == null ? void 0 : n[0].clientX, i = o ? e.clientY : (r = e.touches) == null ? void 0 : r[0].clientY;
  return {
    x: a - ((t == null ? void 0 : t.left) ?? 0),
    y: i - ((t == null ? void 0 : t.top) ?? 0)
  };
}, ll = (e, t, n, r, o) => {
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
      ...ss(i)
    };
  });
};
function Mp({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: a, targetControlX: i, targetControlY: s }) {
  const l = e * 0.125 + o * 0.375 + i * 0.375 + n * 0.125, u = t * 0.125 + a * 0.375 + s * 0.375 + r * 0.125, c = Math.abs(l - e), d = Math.abs(u - t);
  return [l, u, c, d];
}
function Xo(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function ul({ pos: e, x1: t, y1: n, x2: r, y2: o, c: a }) {
  switch (e) {
    case Se.Left:
      return [t - Xo(t - r, a), n];
    case Se.Right:
      return [t + Xo(r - t, a), n];
    case Se.Top:
      return [t, n - Xo(n - o, a)];
    case Se.Bottom:
      return [t, n + Xo(o - n, a)];
  }
}
function oc({ sourceX: e, sourceY: t, sourcePosition: n = Se.Bottom, targetX: r, targetY: o, targetPosition: a = Se.Top, curvature: i = 0.25 }) {
  const [s, l] = ul({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: i
  }), [u, c] = ul({
    pos: a,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: i
  }), [d, f, v, w] = Mp({
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
    w
  ];
}
function ic({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, a = n < e ? n + o : n - o, i = Math.abs(r - t) / 2, s = r < t ? r + i : r - i;
  return [a, s, o, i];
}
function Hp({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const a = n || t.selected || e.selected, i = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (a ? i : 0);
}
function zp({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const a = Bi(pi(e), pi(t));
  a.x === a.x2 && (a.x2 += 1), a.y === a.y2 && (a.y2 += 1);
  const i = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return mo(i, Ri(a)) > 0;
}
const Pp = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, Lp = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), Np = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return wp(e) ? n = { ...e } : n = {
    ...e,
    id: Pp(e)
  }, Lp(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Ea({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, a, i, s] = ic({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, a, i, s];
}
const cl = {
  [Se.Left]: { x: -1, y: 0 },
  [Se.Right]: { x: 1, y: 0 },
  [Se.Top]: { x: 0, y: -1 },
  [Se.Bottom]: { x: 0, y: 1 }
}, Vp = ({ source: e, sourcePosition: t = Se.Bottom, target: n }) => t === Se.Left || t === Se.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, dl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function Dp({ source: e, sourcePosition: t = Se.Bottom, target: n, targetPosition: r = Se.Top, center: o, offset: a }) {
  const i = cl[t], s = cl[r], l = { x: e.x + i.x * a, y: e.y + i.y * a }, u = { x: n.x + s.x * a, y: n.y + s.y * a }, c = Vp({
    source: l,
    sourcePosition: t,
    target: u
  }), d = c.x !== 0 ? "x" : "y", f = c[d];
  let v = [], w, b;
  const x = { x: 0, y: 0 }, _ = { x: 0, y: 0 }, [h, C, y, $] = ic({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (i[d] * s[d] === -1) {
    w = o.x ?? h, b = o.y ?? C;
    const E = [
      { x: w, y: l.y },
      { x: w, y: u.y }
    ], S = [
      { x: l.x, y: b },
      { x: u.x, y: b }
    ];
    i[d] === f ? v = d === "x" ? E : S : v = d === "x" ? S : E;
  } else {
    const E = [{ x: l.x, y: u.y }], S = [{ x: u.x, y: l.y }];
    if (d === "x" ? v = i.x === f ? S : E : v = i.y === f ? E : S, t === r) {
      const D = Math.abs(e[d] - n[d]);
      if (D <= a) {
        const R = Math.min(a - 1, a - D);
        i[d] === f ? x[d] = (l[d] > e[d] ? -1 : 1) * R : _[d] = (u[d] > n[d] ? -1 : 1) * R;
      }
    }
    if (t !== r) {
      const D = d === "x" ? "y" : "x", R = i[d] === s[D], H = l[D] > u[D], L = l[D] < u[D];
      (i[d] === 1 && (!R && H || R && L) || i[d] !== 1 && (!R && L || R && H)) && (v = d === "x" ? E : S);
    }
    const z = { x: l.x + x.x, y: l.y + x.y }, P = { x: u.x + _.x, y: u.y + _.y }, N = Math.max(Math.abs(z.x - v[0].x), Math.abs(P.x - v[0].x)), A = Math.max(Math.abs(z.y - v[0].y), Math.abs(P.y - v[0].y));
    N >= A ? (w = (z.x + P.x) / 2, b = v[0].y) : (w = v[0].x, b = (z.y + P.y) / 2);
  }
  return [[
    e,
    { x: l.x + x.x, y: l.y + x.y },
    ...v,
    { x: u.x + _.x, y: u.y + _.y },
    n
  ], w, b, y, $];
}
function Tp(e, t, n, r) {
  const o = Math.min(dl(e, t) / 2, dl(t, n) / 2, r), { x: a, y: i } = t;
  if (e.x === a && a === n.x || e.y === i && i === n.y)
    return `L${a} ${i}`;
  if (e.y === i) {
    const u = e.x < n.x ? -1 : 1, c = e.y < n.y ? 1 : -1;
    return `L ${a + o * u},${i}Q ${a},${i} ${a},${i + o * c}`;
  }
  const s = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${a},${i + o * l}Q ${a},${i} ${a + o * s},${i}`;
}
function yi({ sourceX: e, sourceY: t, sourcePosition: n = Se.Bottom, targetX: r, targetY: o, targetPosition: a = Se.Top, borderRadius: i = 5, centerX: s, centerY: l, offset: u = 20 }) {
  const [c, d, f, v, w] = Dp({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: a,
    center: { x: s, y: l },
    offset: u
  });
  return [c.reduce((b, x, _) => {
    let h = "";
    return _ > 0 && _ < c.length - 1 ? h = Tp(c[_ - 1], x, c[_ + 1], i) : h = `${_ === 0 ? "M" : "L"}${x.x} ${x.y}`, b += h, b;
  }, ""), d, f, v, w];
}
function fl(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function Op(e) {
  var t;
  const { sourceNode: n, targetNode: r } = e;
  if (!fl(n) || !fl(r))
    return null;
  const o = n.internals.handleBounds || vl(n.handles), a = r.internals.handleBounds || vl(r.handles), i = gl((o == null ? void 0 : o.source) ?? [], e.sourceHandle), s = gl(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === cr.Strict ? (a == null ? void 0 : a.target) ?? [] : ((a == null ? void 0 : a.target) ?? []).concat((a == null ? void 0 : a.source) ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return (t = e.onError) == null || t.call(e, "008", Lr.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const l = (i == null ? void 0 : i.position) || Se.Bottom, u = (s == null ? void 0 : s.position) || Se.Top, c = yo(n, i, l), d = yo(r, s, u);
  return {
    sourceX: c.x,
    sourceY: c.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: l,
    targetPosition: u
  };
}
function vl(e) {
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
function yo(e, t, n = Se.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, a = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: i, height: s } = t ?? er(e);
  if (r)
    return { x: o + i / 2, y: a + s / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case Se.Top:
      return { x: o + i / 2, y: a };
    case Se.Right:
      return { x: o + i, y: a + s / 2 };
    case Se.Bottom:
      return { x: o + i / 2, y: a + s };
    case Se.Left:
      return { x: o, y: a + s / 2 };
  }
}
function gl(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Ma(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function Ap(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const a = /* @__PURE__ */ new Set();
  return e.reduce((i, s) => ([s.markerStart || r, s.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = Ma(l, t);
      a.has(u) || (i.push({ id: u, color: l.color || n, ...l }), a.add(u));
    }
  }), i), []).sort((i, s) => i.id.localeCompare(s.id));
}
function Ip(e, t, n, r, o) {
  let a = 0.5;
  o === "start" ? a = 0 : o === "end" && (a = 1);
  let i = [
    (e.x + e.width * a) * t.zoom + t.x,
    e.y * t.zoom + t.y - r
  ], s = [-100 * a, -100];
  switch (n) {
    case Se.Right:
      i = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * a) * t.zoom + t.y
      ], s = [0, -100 * a];
      break;
    case Se.Bottom:
      i[1] = (e.y + e.height) * t.zoom + t.y + r, s[1] = 0;
      break;
    case Se.Left:
      i = [
        e.x * t.zoom + t.x - r,
        (e.y + e.height * a) * t.zoom + t.y
      ], s = [-100, -100 * a];
      break;
  }
  return `translate(${i[0]}px, ${i[1]}px) translate(${s[0]}%, ${s[1]}%)`;
}
const ls = {
  nodeOrigin: [0, 0],
  nodeExtent: gi,
  elevateNodesOnSelect: !0,
  defaults: {}
}, Zp = {
  ...ls,
  checkEquality: !0
};
function us(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function Bp(e, t, n) {
  const r = us(ls, n);
  for (const o of e.values())
    if (o.parentId)
      cs(o, e, t, r);
    else {
      const a = So(o, r.nodeOrigin), i = Dr(o.extent) ? o.extent : r.nodeExtent, s = dr(a, i, er(o));
      o.internals.positionAbsolute = s;
    }
}
function ac(e, t, n, r) {
  var o, a;
  const i = us(Zp, r), s = new Map(t), l = i != null && i.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let c = s.get(u.id);
    if (i.checkEquality && u === (c == null ? void 0 : c.internals.userNode))
      t.set(u.id, c);
    else {
      const d = So(u, i.nodeOrigin), f = Dr(u.extent) ? u.extent : i.nodeExtent, v = dr(d, f, er(u));
      c = {
        ...i.defaults,
        ...u,
        measured: {
          width: (o = u.measured) == null ? void 0 : o.width,
          height: (a = u.measured) == null ? void 0 : a.height
        },
        internals: {
          positionAbsolute: v,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: u.measured ? c == null ? void 0 : c.internals.handleBounds : void 0,
          z: sc(u, l),
          userNode: u
        }
      }, t.set(u.id, c);
    }
    u.parentId && cs(c, t, n, r);
  }
}
function Rp(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function cs(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: a, nodeExtent: i } = us(ls, r), s = e.parentId, l = t.get(s);
  if (!l) {
    console.warn(`Parent node ${s} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  Rp(e, n);
  const u = o ? 1e3 : 0, { x: c, y: d, z: f } = Kp(e, l, a, i, u), { positionAbsolute: v } = e.internals, w = c !== v.x || d !== v.y;
  (w || f !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: w ? { x: c, y: d } : v,
      z: f
    }
  });
}
function sc(e, t) {
  return (Hn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function Kp(e, t, n, r, o) {
  const { x: a, y: i } = t.internals.positionAbsolute, s = er(e), l = So(e, n), u = Dr(e.extent) ? dr(l, e.extent, s) : l;
  let c = dr({ x: a + u.x, y: i + u.y }, r, s);
  e.extent === "parent" && (c = Qu(c, s, t));
  const d = sc(e, o), f = t.internals.z ?? 0;
  return {
    x: c.x,
    y: c.y,
    z: f > d ? f : d
  };
}
function Xp(e, t, n, r = [0, 0]) {
  var o;
  const a = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const l = t.get(s.parentId);
    if (!l)
      continue;
    const u = ((o = i.get(s.parentId)) == null ? void 0 : o.expandedRect) ?? Vr(l), c = ec(u, s.rect);
    i.set(s.parentId, { expandedRect: c, parent: l });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: l }, u) => {
    var c;
    const d = l.internals.positionAbsolute, f = er(l), v = l.origin ?? r, w = s.x < d.x ? Math.round(Math.abs(d.x - s.x)) : 0, b = s.y < d.y ? Math.round(Math.abs(d.y - s.y)) : 0, x = Math.max(f.width, Math.round(s.width)), _ = Math.max(f.height, Math.round(s.height)), h = (x - f.width) * v[0], C = (_ - f.height) * v[1];
    (w > 0 || b > 0 || h || C) && (a.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - w + h,
        y: l.position.y - b + C
      }
    }), (c = n.get(u)) == null || c.forEach((y) => {
      e.some(($) => $.id === y.id) || a.push({
        id: y.id,
        type: "position",
        position: {
          x: y.position.x + w,
          y: y.position.y + b
        }
      });
    })), (f.width < s.width || f.height < s.height || w || b) && a.push({
      id: u,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: x + (w ? v[0] * w - h : 0),
        height: _ + (b ? v[1] * b - C : 0)
      }
    });
  }), a;
}
function Yp(e, t, n, r, o, a) {
  const i = r == null ? void 0 : r.querySelector(".xyflow__viewport");
  let s = !1;
  if (!i)
    return { changes: [], updatedInternals: s };
  const l = [], u = window.getComputedStyle(i), { m22: c } = new window.DOMMatrixReadOnly(u.transform), d = [];
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
    const w = ss(f.nodeElement), b = v.measured.width !== w.width || v.measured.height !== w.height;
    if (w.width && w.height && (b || !v.internals.handleBounds || f.force)) {
      const x = f.nodeElement.getBoundingClientRect(), _ = Dr(v.extent) ? v.extent : a;
      let { positionAbsolute: h } = v.internals;
      v.parentId && v.extent === "parent" ? h = Qu(h, w, t.get(v.parentId)) : _ && (h = dr(h, _, w));
      const C = {
        ...v,
        measured: w,
        internals: {
          ...v.internals,
          positionAbsolute: h,
          handleBounds: {
            source: ll("source", f.nodeElement, x, c, v.id),
            target: ll("target", f.nodeElement, x, c, v.id)
          }
        }
      };
      t.set(v.id, C), v.parentId && cs(C, t, n, { nodeOrigin: o }), s = !0, b && (l.push({
        id: v.id,
        type: "dimensions",
        dimensions: w
      }), v.expandParent && v.parentId && d.push({
        id: v.id,
        parentId: v.parentId,
        rect: Vr(C, o)
      }));
    }
  }
  if (d.length > 0) {
    const f = Xp(d, t, n, o);
    l.push(...f);
  }
  return { changes: l, updatedInternals: s };
}
async function Wp({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: a }) {
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
function hl(e, t, n, r, o, a) {
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
function lc(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: a, sourceHandle: i = null, targetHandle: s = null } = r, l = { edgeId: r.id, source: o, target: a, sourceHandle: i, targetHandle: s }, u = `${o}-${i}--${a}-${s}`, c = `${a}-${s}--${o}-${i}`;
    hl("source", l, c, e, o, i), hl("target", l, u, e, a, s), t.set(r.id, r);
  }
}
function jp(e, t) {
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
function uc(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : uc(n, t) : !1;
}
function pl(e, t, n) {
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
function Fp(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [a, i] of e)
    if ((i.selected || i.id === r) && (!i.parentId || !uc(i, e)) && (i.draggable || t && typeof i.draggable > "u")) {
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
function ra({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
function qp({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let a = { x: null, y: null }, i = 0, s = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, c = null, d = !1, f = null, v = !1;
  function w({ noDragClassName: x, handleSelector: _, domNode: h, isSelectable: C, nodeId: y, nodeClickDistance: $ = 0 }) {
    f = jt(h);
    function E({ x: N, y: A }, D) {
      const { nodeLookup: R, nodeExtent: H, snapGrid: L, snapToGrid: k, nodeOrigin: M, onNodeDrag: V, onSelectionDrag: O, onError: Z, updateNodePositions: W } = t();
      a = { x: N, y: A };
      let F = !1, ie = { x: 0, y: 0, x2: 0, y2: 0 };
      if (s.size > 1 && H) {
        const U = Eo(s);
        ie = Sa(U);
      }
      for (const [U, X] of s) {
        if (!R.has(U))
          continue;
        let ce = { x: N - X.distance.x, y: A - X.distance.y };
        k && (ce = is(ce, L));
        let $e = [
          [H[0][0], H[0][1]],
          [H[1][0], H[1][1]]
        ];
        if (s.size > 1 && H && !X.extent) {
          const { positionAbsolute: ve } = X.internals, te = ve.x - ie.x + H[0][0], pe = ve.x + X.measured.width - ie.x2 + H[1][0], Xe = ve.y - ie.y + H[0][1], Ze = ve.y + X.measured.height - ie.y2 + H[1][1];
          $e = [
            [te, Xe],
            [pe, Ze]
          ];
        }
        const { position: _e, positionAbsolute: he } = $p({
          nodeId: U,
          nextPosition: ce,
          nodeLookup: R,
          nodeExtent: $e,
          nodeOrigin: M,
          onError: Z
        });
        F = F || X.position.x !== _e.x || X.position.y !== _e.y, X.position = _e, X.internals.positionAbsolute = he;
      }
      if (F && (W(s, !0), D && (r || V || !y && O))) {
        const [U, X] = ra({
          nodeId: y,
          dragItems: s,
          nodeLookup: R
        });
        r == null || r(D, s, U, X), V == null || V(D, U, X), y || O == null || O(D, X);
      }
    }
    async function S() {
      if (!c)
        return;
      const { transform: N, panBy: A, autoPanSpeed: D, autoPanOnNodeDrag: R } = t();
      if (!R) {
        l = !1, cancelAnimationFrame(i);
        return;
      }
      const [H, L] = Ju(u, c, D);
      (H !== 0 || L !== 0) && (a.x = (a.x ?? 0) - H / N[2], a.y = (a.y ?? 0) - L / N[2], await A({ x: H, y: L }) && E(a, null)), i = requestAnimationFrame(S);
    }
    function z(N) {
      var A;
      const { nodeLookup: D, multiSelectionActive: R, nodesDraggable: H, transform: L, snapGrid: k, snapToGrid: M, selectNodesOnDrag: V, onNodeDragStart: O, onSelectionDragStart: Z, unselectNodesAndEdges: W } = t();
      d = !0, (!V || !C) && !R && y && ((A = D.get(y)) != null && A.selected || W()), C && V && y && (e == null || e(y));
      const F = na(N.sourceEvent, { transform: L, snapGrid: k, snapToGrid: M, containerBounds: c });
      if (a = F, s = Fp(D, H, F, y), s.size > 0 && (n || O || !y && Z)) {
        const [ie, U] = ra({
          nodeId: y,
          dragItems: s,
          nodeLookup: D
        });
        n == null || n(N.sourceEvent, s, ie, U), O == null || O(N.sourceEvent, ie, U), y || Z == null || Z(N.sourceEvent, U);
      }
    }
    const P = Eg().clickDistance($).on("start", (N) => {
      const { domNode: A, nodeDragThreshold: D, transform: R, snapGrid: H, snapToGrid: L } = t();
      c = (A == null ? void 0 : A.getBoundingClientRect()) || null, v = !1, D === 0 && z(N), a = na(N.sourceEvent, { transform: R, snapGrid: H, snapToGrid: L, containerBounds: c }), u = Ln(N.sourceEvent, c);
    }).on("drag", (N) => {
      const { autoPanOnNodeDrag: A, transform: D, snapGrid: R, snapToGrid: H, nodeDragThreshold: L, nodeLookup: k } = t(), M = na(N.sourceEvent, { transform: D, snapGrid: R, snapToGrid: H, containerBounds: c });
      if ((N.sourceEvent.type === "touchmove" && N.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      y && !k.has(y)) && (v = !0), !v) {
        if (!l && A && d && (l = !0, S()), !d) {
          const V = M.xSnapped - (a.x ?? 0), O = M.ySnapped - (a.y ?? 0);
          Math.sqrt(V * V + O * O) > L && z(N);
        }
        (a.x !== M.xSnapped || a.y !== M.ySnapped) && s && d && (u = Ln(N.sourceEvent, c), E(M, N.sourceEvent));
      }
    }).on("end", (N) => {
      if (!(!d || v) && (l = !1, d = !1, cancelAnimationFrame(i), s.size > 0)) {
        const { nodeLookup: A, updateNodePositions: D, onNodeDragStop: R, onSelectionDragStop: H } = t();
        if (D(s, !1), o || R || !y && H) {
          const [L, k] = ra({
            nodeId: y,
            dragItems: s,
            nodeLookup: A,
            dragging: !1
          });
          o == null || o(N.sourceEvent, s, L, k), R == null || R(N.sourceEvent, L, k), y || H == null || H(N.sourceEvent, k);
        }
      }
    }).filter((N) => {
      const A = N.target;
      return !N.button && (!x || !pl(A, `.${x}`, h)) && (!_ || pl(A, _, h));
    });
    f.call(P);
  }
  function b() {
    f == null || f.on(".drag", null);
  }
  return {
    update: w,
    destroy: b
  };
}
function Gp(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const a of t.values())
    mo(o, Vr(a)) > 0 && r.push(a);
  return r;
}
const Up = 250;
function Qp(e, t, n, r) {
  var o, a;
  let i = [], s = 1 / 0;
  const l = Gp(e, n, t + Up);
  for (const u of l) {
    const c = [...((o = u.internals.handleBounds) == null ? void 0 : o.source) ?? [], ...((a = u.internals.handleBounds) == null ? void 0 : a.target) ?? []];
    for (const d of c) {
      if (r.nodeId === d.nodeId && r.type === d.type && r.id === d.id)
        continue;
      const { x: f, y: v } = yo(u, d, d.position, !0), w = Math.sqrt(Math.pow(f - e.x, 2) + Math.pow(v - e.y, 2));
      w > t || (w < s ? (i = [{ ...d, x: f, y: v }], s = w) : w === s && i.push({ ...d, x: f, y: v }));
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
function cc(e, t, n, r, o, a = !1) {
  var i, s, l;
  const u = r.get(e);
  if (!u)
    return null;
  const c = o === "strict" ? (i = u.internals.handleBounds) == null ? void 0 : i[t] : [...((s = u.internals.handleBounds) == null ? void 0 : s.source) ?? [], ...((l = u.internals.handleBounds) == null ? void 0 : l.target) ?? []], d = (n ? c == null ? void 0 : c.find((f) => f.id === n) : c == null ? void 0 : c[0]) ?? null;
  return d && a ? { ...d, ...yo(u, d, d.position, !0) } : d;
}
function dc(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function Jp(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const fc = () => !0;
function e0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: a, isTarget: i, domNode: s, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: d, panBy: f, cancelConnection: v, onConnectStart: w, onConnect: b, onConnectEnd: x, isValidConnection: _ = fc, onReconnectEnd: h, updateConnection: C, getTransform: y, getFromHandle: $, autoPanSpeed: E }) {
  const S = kp(e.target);
  let z = 0, P;
  const { x: N, y: A } = Ln(e), D = S == null ? void 0 : S.elementFromPoint(N, A), R = dc(a, D), H = s == null ? void 0 : s.getBoundingClientRect();
  if (!H || !R)
    return;
  const L = cc(o, R, r, l, t);
  if (!L)
    return;
  let k = Ln(e, H), M = !1, V = null, O = !1, Z = null;
  function W() {
    if (!c || !H)
      return;
    const [_e, he] = Ju(k, H, E);
    f({ x: _e, y: he }), z = requestAnimationFrame(W);
  }
  const F = {
    ...L,
    nodeId: o,
    type: R,
    position: L.position
  }, ie = l.get(o), U = {
    inProgress: !0,
    isValid: null,
    from: yo(ie, F, Se.Left, !0),
    fromHandle: F,
    fromPosition: F.position,
    fromNode: ie,
    to: k,
    toHandle: null,
    toPosition: nl[F.position],
    toNode: null
  };
  C(U);
  let X = U;
  w == null || w(e, { nodeId: o, handleId: r, handleType: R });
  function ce(_e) {
    if (!$() || !F) {
      $e(_e);
      return;
    }
    const he = y();
    k = Ln(_e, H), P = Qp(Mo(k, he, !1, [1, 1]), n, l, F), M || (W(), M = !0);
    const ve = vc(_e, {
      handle: P,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: i ? "target" : "source",
      isValidConnection: _,
      doc: S,
      lib: u,
      flowId: d,
      nodeLookup: l
    });
    Z = ve.handleDomNode, V = ve.connection, O = Jp(!!P, ve.isValid);
    const te = {
      // from stays the same
      ...X,
      isValid: O,
      to: P && O ? tc({ x: P.x, y: P.y }, he) : k,
      toHandle: ve.toHandle,
      toPosition: O && ve.toHandle ? ve.toHandle.position : nl[F.position],
      toNode: ve.toHandle ? l.get(ve.toHandle.nodeId) : null
    };
    O && P && X.toHandle && te.toHandle && X.toHandle.type === te.toHandle.type && X.toHandle.nodeId === te.toHandle.nodeId && X.toHandle.id === te.toHandle.id && X.to.x === te.to.x && X.to.y === te.to.y || (C(te), X = te);
  }
  function $e(_e) {
    (P || Z) && V && O && (b == null || b(V));
    const { inProgress: he, ...ve } = X, te = {
      ...ve,
      toPosition: X.toHandle ? X.toPosition : null
    };
    x == null || x(_e, te), a && (h == null || h(_e, te)), v(), cancelAnimationFrame(z), M = !1, O = !1, V = null, Z = null, S.removeEventListener("mousemove", ce), S.removeEventListener("mouseup", $e), S.removeEventListener("touchmove", ce), S.removeEventListener("touchend", $e);
  }
  S.addEventListener("mousemove", ce), S.addEventListener("mouseup", $e), S.addEventListener("touchmove", ce), S.addEventListener("touchend", $e);
}
function vc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: a, doc: i, lib: s, flowId: l, isValidConnection: u = fc, nodeLookup: c }) {
  const d = a === "target", f = t ? i.querySelector(`.${s}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: v, y: w } = Ln(e), b = i.elementFromPoint(v, w), x = b != null && b.classList.contains(`${s}-flow__handle`) ? b : f, _ = {
    handleDomNode: x,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (x) {
    const h = dc(void 0, x), C = x.getAttribute("data-nodeid"), y = x.getAttribute("data-handleid"), $ = x.classList.contains("connectable"), E = x.classList.contains("connectableend");
    if (!C || !h)
      return _;
    const S = {
      source: d ? C : r,
      sourceHandle: d ? y : o,
      target: d ? r : C,
      targetHandle: d ? o : y
    };
    _.connection = S;
    const z = $ && E && (n === cr.Strict ? d && h === "source" || !d && h === "target" : C !== r || y !== o);
    _.isValid = z && u(S), _.toHandle = cc(C, h, y, c, n, !1);
  }
  return _;
}
const t0 = {
  onPointerDown: e0,
  isValid: vc
};
function n0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = jt(e);
  function a({ translateExtent: s, width: l, height: u, zoomStep: c = 10, pannable: d = !0, zoomable: f = !0, inversePan: v = !1 }) {
    const w = (C) => {
      const y = n();
      if (C.sourceEvent.type !== "wheel" || !t)
        return;
      const $ = -C.sourceEvent.deltaY * (C.sourceEvent.deltaMode === 1 ? 0.05 : C.sourceEvent.deltaMode ? 1 : 2e-3) * c, E = y[2] * Math.pow(2, $);
      t.scaleTo(E);
    };
    let b = [0, 0];
    const x = (C) => {
      (C.sourceEvent.type === "mousedown" || C.sourceEvent.type === "touchstart") && (b = [
        C.sourceEvent.clientX ?? C.sourceEvent.touches[0].clientX,
        C.sourceEvent.clientY ?? C.sourceEvent.touches[0].clientY
      ]);
    }, _ = (C) => {
      const y = n();
      if (C.sourceEvent.type !== "mousemove" && C.sourceEvent.type !== "touchmove" || !t)
        return;
      const $ = [
        C.sourceEvent.clientX ?? C.sourceEvent.touches[0].clientX,
        C.sourceEvent.clientY ?? C.sourceEvent.touches[0].clientY
      ], E = [$[0] - b[0], $[1] - b[1]];
      b = $;
      const S = r() * Math.max(y[2], Math.log(y[2])) * (v ? -1 : 1), z = {
        x: y[0] - E[0] * S,
        y: y[1] - E[1] * S
      }, P = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: z.x,
        y: z.y,
        zoom: y[2]
      }, P, s);
    }, h = qu().on("start", x).on("zoom", d ? _ : null).on("zoom.wheel", f ? w : null);
    o.call(h, {});
  }
  function i() {
    o.on("zoom", null);
  }
  return {
    update: a,
    destroy: i,
    pointer: en
  };
}
const r0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Ki = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), oa = ({ x: e, y: t, zoom: n }) => Zi.translate(e, t).scale(n), br = (e, t) => e.target.closest(`.${t}`), gc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), ia = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, hc = (e) => {
  const t = e.ctrlKey && mi() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function o0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: a, zoomOnPinch: i, onPanZoomStart: s, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (br(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const d = n.property("__zoom").k || 1;
    if (c.ctrlKey && i) {
      const x = en(c), _ = hc(c), h = d * Math.pow(2, _);
      r.scaleTo(n, h, x, c);
      return;
    }
    const f = c.deltaMode === 1 ? 20 : 1;
    let v = o === jn.Vertical ? 0 : c.deltaX * f, w = o === jn.Horizontal ? 0 : c.deltaY * f;
    !mi() && c.shiftKey && o !== jn.Vertical && (v = c.deltaY * f, w = 0), r.translateBy(
      n,
      -(v / d) * a,
      -(w / d) * a,
      // @ts-ignore
      { internal: !0 }
    );
    const b = Ki(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, s == null || s(c, b)), e.isPanScrolling && (l == null || l(c, b), e.panScrollTimeout = setTimeout(() => {
      u == null || u(c, b), e.isPanScrolling = !1;
    }, 150));
  };
}
function i0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    if (!t && r.type === "wheel" && !r.ctrlKey || br(r, e))
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function a0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var o, a, i;
    if ((o = r.sourceEvent) != null && o.internal)
      return;
    const s = Ki(r.transform);
    e.mouseButton = ((a = r.sourceEvent) == null ? void 0 : a.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = s, ((i = r.sourceEvent) == null ? void 0 : i.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, s));
  };
}
function s0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (a) => {
    var i, s;
    e.usedRightMouseButton = !!(n && gc(t, e.mouseButton ?? 0)), (i = a.sourceEvent) != null && i.sync || r([a.transform.x, a.transform.y, a.transform.k]), o && !((s = a.sourceEvent) != null && s.internal) && (o == null || o(a.sourceEvent, Ki(a.transform)));
  };
}
function l0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: a }) {
  return (i) => {
    var s;
    if (!((s = i.sourceEvent) != null && s.internal) && (e.isZoomingOrPanning = !1, a && gc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && i.sourceEvent && a(i.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && r0(e.prevViewport, i.transform))) {
      const l = Ki(i.transform);
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
function u0({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: a, userSelectionActive: i, noWheelClassName: s, noPanClassName: l, lib: u }) {
  return (c) => {
    var d;
    const f = e || t, v = n && c.ctrlKey;
    if (c.button === 1 && c.type === "mousedown" && (br(c, `${u}-flow__node`) || br(c, `${u}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !a && !n || i || br(c, s) && c.type === "wheel" || br(c, l) && (c.type !== "wheel" || o && c.type === "wheel" && !e) || !n && c.ctrlKey && c.type === "wheel")
      return !1;
    if (!n && c.type === "touchstart" && ((d = c.touches) == null ? void 0 : d.length) > 1)
      return c.preventDefault(), !1;
    if (!f && !o && !v && c.type === "wheel" || !r && (c.type === "mousedown" || c.type === "touchstart") || Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
      return !1;
    const w = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || c.type === "wheel") && w;
  };
}
function c0({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: a, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: l, onDraggingChange: u }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), f = qu().clickDistance(!Hn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), v = jt(e).call(f);
  C({
    x: a.x,
    y: a.y,
    zoom: Nr(a.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], o);
  const w = v.on("wheel.zoom"), b = v.on("dblclick.zoom");
  f.wheelDelta(hc);
  function x(D, R) {
    return v ? new Promise((H) => {
      f == null || f.transform(ia(v, R == null ? void 0 : R.duration, () => H(!0)), D);
    }) : Promise.resolve(!1);
  }
  function _({ noWheelClassName: D, noPanClassName: R, onPaneContextMenu: H, userSelectionActive: L, panOnScroll: k, panOnDrag: M, panOnScrollMode: V, panOnScrollSpeed: O, preventScrolling: Z, zoomOnPinch: W, zoomOnScroll: F, zoomOnDoubleClick: ie, zoomActivationKeyPressed: U, lib: X, onTransformChange: ce }) {
    L && !c.isZoomingOrPanning && h();
    const $e = k && !U && !L ? o0({
      zoomPanValues: c,
      noWheelClassName: D,
      d3Selection: v,
      d3Zoom: f,
      panOnScrollMode: V,
      panOnScrollSpeed: O,
      zoomOnPinch: W,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: l
    }) : i0({
      noWheelClassName: D,
      preventScrolling: Z,
      d3ZoomHandler: w
    });
    if (v.on("wheel.zoom", $e, { passive: !1 }), !L) {
      const he = a0({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: s
      });
      f.on("start", he);
      const ve = s0({
        zoomPanValues: c,
        panOnDrag: M,
        onPaneContextMenu: !!H,
        onPanZoom: i,
        onTransformChange: ce
      });
      f.on("zoom", ve);
      const te = l0({
        zoomPanValues: c,
        panOnDrag: M,
        panOnScroll: k,
        onPaneContextMenu: H,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      f.on("end", te);
    }
    const _e = u0({
      zoomActivationKeyPressed: U,
      panOnDrag: M,
      zoomOnScroll: F,
      panOnScroll: k,
      zoomOnDoubleClick: ie,
      zoomOnPinch: W,
      userSelectionActive: L,
      noPanClassName: R,
      noWheelClassName: D,
      lib: X
    });
    f.filter(_e), ie ? v.on("dblclick.zoom", b) : v.on("dblclick.zoom", null);
  }
  function h() {
    f.on("zoom", null);
  }
  async function C(D, R, H) {
    const L = oa(D), k = f == null ? void 0 : f.constrain()(L, R, H);
    return k && await x(k), new Promise((M) => M(k));
  }
  async function y(D, R) {
    const H = oa(D);
    return await x(H, R), new Promise((L) => L(H));
  }
  function $(D) {
    if (v) {
      const R = oa(D), H = v.property("__zoom");
      (H.k !== D.zoom || H.x !== D.x || H.y !== D.y) && (f == null || f.transform(v, R, null, { sync: !0 }));
    }
  }
  function E() {
    const D = v ? Fu(v.node()) : { x: 0, y: 0, k: 1 };
    return { x: D.x, y: D.y, zoom: D.k };
  }
  function S(D, R) {
    return v ? new Promise((H) => {
      f == null || f.scaleTo(ia(v, R == null ? void 0 : R.duration, () => H(!0)), D);
    }) : Promise.resolve(!1);
  }
  function z(D, R) {
    return v ? new Promise((H) => {
      f == null || f.scaleBy(ia(v, R == null ? void 0 : R.duration, () => H(!0)), D);
    }) : Promise.resolve(!1);
  }
  function P(D) {
    f == null || f.scaleExtent(D);
  }
  function N(D) {
    f == null || f.translateExtent(D);
  }
  function A(D) {
    const R = !Hn(D) || D < 0 ? 0 : D;
    f == null || f.clickDistance(R);
  }
  return {
    update: _,
    destroy: h,
    setViewport: y,
    setViewportConstrained: C,
    getViewport: E,
    scaleTo: S,
    scaleBy: z,
    setScaleExtent: P,
    setTranslateExtent: N,
    syncViewport: $,
    setClickDistance: A
  };
}
var ml;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(ml || (ml = {}));
var d0 = /* @__PURE__ */ ne('<div role="button" tabindex="-1"><!></div>');
function Un(e, t) {
  se(t, !1);
  const [n, r] = et(), o = () => Q(ie, "$connectable", n), a = () => Q(_e, "$connectionRadius", n), i = () => Q(ce, "$domNode", n), s = () => Q($e, "$nodeLookup", n), l = () => Q(X, "$connectionMode", n), u = () => Q(te, "$lib", n), c = () => Q(Ye, "$autoPanOnConnect", n), d = () => Q(We, "$flowId", n), f = () => Q(ve, "$isValidConnectionStore", n), v = () => Q(Xe, "$onedgecreate", n), w = () => Q(ae, "$onConnectAction", n), b = () => Q(ke, "$onConnectStartAction", n), x = () => Q(Ne, "$onConnectEndAction", n), _ = () => Q(he, "$viewport", n), h = () => Q(ct, "$connection", n), C = () => Q(Oe, "$edges", n), y = () => Q(fe, "$connectionLookup", n), $ = re(), E = re(), S = re(), z = re(), P = re(), N = re(), A = re(), D = re();
  let R = m(t, "id", 12, void 0), H = m(t, "type", 12, "source"), L = m(t, "position", 28, () => Se.Top), k = m(t, "style", 12, void 0), M = m(t, "isValidConnection", 12, void 0), V = m(t, "onconnect", 12, void 0), O = m(t, "ondisconnect", 12, void 0), Z = m(t, "isConnectable", 12, void 0), W = m(t, "class", 12, void 0);
  const F = sr("svelteflow__node_id"), ie = sr("svelteflow__node_connectable"), U = qe(), {
    connectionMode: X,
    domNode: ce,
    nodeLookup: $e,
    connectionRadius: _e,
    viewport: he,
    isValidConnection: ve,
    lib: te,
    addEdge: pe,
    onedgecreate: Xe,
    panBy: Ze,
    cancelConnection: Be,
    updateConnection: ee,
    autoPanOnConnect: Ye,
    edges: Oe,
    connectionLookup: fe,
    onconnect: ae,
    onconnectstart: ke,
    onconnectend: Ne,
    flowId: We,
    connection: ct
  } = U;
  function tt(He) {
    const rt = rc(He);
    (rt && He.button === 0 || !rt) && t0.onPointerDown(He, {
      handleId: g(S),
      nodeId: F,
      isTarget: g($),
      connectionRadius: a(),
      domNode: i(),
      nodeLookup: s(),
      connectionMode: l(),
      lib: u(),
      autoPanOnConnect: c(),
      flowId: d(),
      isValidConnection: M() ?? f(),
      updateConnection: ee,
      cancelConnection: Be,
      panBy: Ze,
      onConnect: (ye) => {
        var ot;
        const at = v() ? v()(ye) : ye;
        at && (pe(at), (ot = w()) == null || ot(ye));
      },
      onConnectStart: (ye, ot) => {
        var at;
        (at = b()) == null || at(ye, {
          nodeId: ot.nodeId,
          handleId: ot.handleId,
          handleType: ot.handleType
        });
      },
      onConnectEnd: (ye, ot) => {
        var at;
        (at = x()) == null || at(ye, ot);
      },
      getTransform: () => [
        _().x,
        _().y,
        _().zoom
      ],
      getFromHandle: () => h().fromHandle
    });
  }
  let J = re(null), Le = re();
  de(() => G(H()), () => {
    q($, H() === "target");
  }), de(
    () => (G(Z()), o()),
    () => {
      q(E, Z() !== void 0 ? Z() : o());
    }
  ), de(() => G(R()), () => {
    q(S, R() || null);
  }), de(
    () => (G(V()), G(O()), C(), y(), G(H()), G(R())),
    () => {
      (V() || O()) && (C(), q(Le, y().get(`${F}-${H()}${R() ? `-${R()}` : ""}`)));
    }
  ), de(
    () => (g(J), g(Le), G(O()), G(V())),
    () => {
      if (g(J) && !mp(g(Le), g(J))) {
        const He = g(Le) ?? /* @__PURE__ */ new Map();
        rl(g(J), He, O()), rl(He, g(J), V());
      }
      q(J, g(Le) ?? /* @__PURE__ */ new Map());
    }
  ), de(() => h(), () => {
    q(z, !!h().fromHandle);
  }), de(
    () => (h(), G(H()), g(S)),
    () => {
      var He, rt, ye;
      q(P, ((He = h().fromHandle) == null ? void 0 : He.nodeId) === F && ((rt = h().fromHandle) == null ? void 0 : rt.type) === H() && ((ye = h().fromHandle) == null ? void 0 : ye.id) === g(S));
    }
  ), de(
    () => (h(), G(H()), g(S)),
    () => {
      var He, rt, ye;
      q(N, ((He = h().toHandle) == null ? void 0 : He.nodeId) === F && ((rt = h().toHandle) == null ? void 0 : rt.type) === H() && ((ye = h().toHandle) == null ? void 0 : ye.id) === g(S));
    }
  ), de(
    () => (l(), h(), G(H()), g(S)),
    () => {
      var He, rt, ye;
      q(A, l() === cr.Strict ? ((He = h().fromHandle) == null ? void 0 : He.type) !== H() : F !== ((rt = h().fromHandle) == null ? void 0 : rt.nodeId) || g(S) !== ((ye = h().fromHandle) == null ? void 0 : ye.id));
    }
  ), de(() => (g(N), h()), () => {
    q(D, g(N) && h().isValid);
  }), vt(), Ve();
  var ge = d0();
  ue(ge, "data-nodeid", F);
  let dn;
  var Gt = Y(ge);
  pt(Gt, t, "default", {}), K(ge), Ee(
    (He) => {
      ue(ge, "data-handleid", g(S)), ue(ge, "data-handlepos", L()), ue(ge, "data-id", `${d() ?? ""}-${F ?? ""}-${R() || ""}-${H() ?? ""}`), dn = Ct(ge, 1, Cn(He), null, dn, {
        valid: g(D),
        connectingto: g(N),
        connectingfrom: g(P),
        source: !g($),
        target: g($),
        connectablestart: g(E),
        connectableend: g(E),
        connectable: g(E),
        connectionindicator: g(E) && (!g(z) || g(A))
      }), ue(ge, "style", k());
    },
    [
      () => kt([
        "svelte-flow__handle",
        `svelte-flow__handle-${L()}`,
        "nodrag",
        "nopan",
        L(),
        W()
      ])
    ],
    me
  ), Re("mousedown", ge, tt), Re("touchstart", ge, tt), T(e, ge);
  var fn = le({
    get id() {
      return R();
    },
    set id(He) {
      R(He), p();
    },
    get type() {
      return H();
    },
    set type(He) {
      H(He), p();
    },
    get position() {
      return L();
    },
    set position(He) {
      L(He), p();
    },
    get style() {
      return k();
    },
    set style(He) {
      k(He), p();
    },
    get isValidConnection() {
      return M();
    },
    set isValidConnection(He) {
      M(He), p();
    },
    get onconnect() {
      return V();
    },
    set onconnect(He) {
      V(He), p();
    },
    get ondisconnect() {
      return O();
    },
    set ondisconnect(He) {
      O(He), p();
    },
    get isConnectable() {
      return Z();
    },
    set isConnectable(He) {
      Z(He), p();
    },
    get class() {
      return W();
    },
    set class(He) {
      W(He), p();
    }
  });
  return r(), fn;
}
oe(
  Un,
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
var f0 = /* @__PURE__ */ ne("<!> <!>", 1);
function wi(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  nt(n, ["data", "targetPosition", "sourcePosition"]), se(t, !1);
  let r = m(t, "data", 28, () => ({ label: "Node" })), o = m(t, "targetPosition", 12, void 0), a = m(t, "sourcePosition", 12, void 0);
  Ve();
  var i = f0(), s = xe(i);
  const l = /* @__PURE__ */ me(() => o() ?? Se.Top);
  Un(s, {
    type: "target",
    get position() {
      return g(l);
    }
  });
  var u = I(s), c = I(u);
  const d = /* @__PURE__ */ me(() => a() ?? Se.Bottom);
  return Un(c, {
    type: "source",
    get position() {
      return g(d);
    }
  }), Ee(() => {
    var f;
    return Rt(u, ` ${((f = r()) == null ? void 0 : f.label) ?? ""} `);
  }), T(e, i), le({
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
      return a();
    },
    set sourcePosition(f) {
      a(f), p();
    }
  });
}
oe(
  wi,
  {
    data: {},
    targetPosition: {},
    sourcePosition: {}
  },
  [],
  [],
  !0
);
var v0 = /* @__PURE__ */ ne(" <!>", 1);
function pc(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  nt(n, ["data", "sourcePosition"]), se(t, !1);
  let r = m(t, "data", 28, () => ({ label: "Node" })), o = m(t, "sourcePosition", 12, void 0);
  Ve(), ze();
  var a = v0(), i = xe(a), s = I(i);
  const l = /* @__PURE__ */ me(() => o() ?? Se.Bottom);
  return Un(s, {
    type: "source",
    get position() {
      return g(l);
    }
  }), Ee(() => {
    var u;
    return Rt(i, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), T(e, a), le({
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
oe(pc, { data: {}, sourcePosition: {} }, [], [], !0);
var g0 = /* @__PURE__ */ ne(" <!>", 1);
function mc(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  nt(n, ["data", "targetPosition"]), se(t, !1);
  let r = m(t, "data", 28, () => ({ label: "Node" })), o = m(t, "targetPosition", 12, void 0);
  Ve(), ze();
  var a = g0(), i = xe(a), s = I(i);
  const l = /* @__PURE__ */ me(() => o() ?? Se.Top);
  return Un(s, {
    type: "target",
    get position() {
      return g(l);
    }
  }), Ee(() => {
    var u;
    return Rt(i, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), T(e, a), le({
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
oe(mc, { data: {}, targetPosition: {} }, [], [], !0);
function yc(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  nt(n, []);
}
oe(yc, {}, [], [], !0);
function yl(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function bi(e, { target: t, domNode: n }) {
  return yl(e, n, t), {
    async update({ target: r, domNode: o }) {
      yl(e, o, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var h0 = /* @__PURE__ */ ne("<div><!></div>");
function wc(e, t) {
  se(t, !1);
  const [n, r] = et(), o = () => Q(a, "$domNode", n), { domNode: a } = qe();
  Ve();
  var i = h0(), s = Y(i);
  pt(s, t, "default", {}), K(i), ht(i, (l, u) => bi == null ? void 0 : bi(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), T(e, i), le(), r();
}
oe(wc, {}, ["default"], [], !0);
function bc() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: a, elementsSelectable: i } = qe();
  return (s) => {
    const l = j(e).get(s);
    if (!l) {
      console.warn("012", Lr.error012(s));
      return;
    }
    (l.selectable || j(i) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && j(r) && a({ nodes: [], edges: [l] }) : o([s]));
  };
}
var p0 = /* @__PURE__ */ ne('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function xc(e, t) {
  se(t, !1);
  let n = m(t, "style", 12, void 0), r = m(t, "x", 12, void 0), o = m(t, "y", 12, void 0);
  const a = bc(), i = sr("svelteflow__edge_id");
  return Ve(), wc(e, {
    children: (s, l) => {
      var u = p0(), c = Y(u);
      pt(c, t, "default", {}), K(u), Ee(() => {
        ue(u, "style", "pointer-events: all;" + n()), it(u, "transform", `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`);
      }), Re("keyup", u, () => {
      }), Re("click", u, () => {
        i && a(i);
      }), T(s, u);
    },
    $$slots: { default: !0 }
  }), le({
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
oe(xc, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var m0 = /* @__PURE__ */ be('<path fill="none" class="svelte-flow__edge-interaction"></path>'), y0 = /* @__PURE__ */ be('<path fill="none"></path><!><!>', 1);
function Ho(e, t) {
  se(t, !1);
  let n = m(t, "id", 12, void 0), r = m(t, "path", 12), o = m(t, "label", 12, void 0), a = m(t, "labelX", 12, void 0), i = m(t, "labelY", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "markerStart", 12, void 0), u = m(t, "markerEnd", 12, void 0), c = m(t, "style", 12, void 0), d = m(t, "interactionWidth", 12, 20), f = m(t, "class", 12, void 0), v = d() === void 0 ? 20 : d();
  Ve();
  var w = y0(), b = xe(w), x = I(b);
  {
    var _ = (y) => {
      var $ = m0();
      ue($, "stroke-opacity", 0), ue($, "stroke-width", v), Ee(() => ue($, "d", r())), T(y, $);
    };
    Ce(x, (y) => {
      v && y(_);
    });
  }
  var h = I(x);
  {
    var C = (y) => {
      xc(y, {
        get x() {
          return a();
        },
        get y() {
          return i();
        },
        get style() {
          return s();
        },
        children: ($, E) => {
          ze();
          var S = Ie();
          Ee(() => Rt(S, o())), T($, S);
        },
        $$slots: { default: !0 }
      });
    };
    Ce(h, (y) => {
      o() && y(C);
    });
  }
  return Ee(
    (y) => {
      ue(b, "id", n()), ue(b, "d", r()), Ct(b, 0, Cn(y)), ue(b, "marker-start", l()), ue(b, "marker-end", u()), ue(b, "style", c());
    },
    [
      () => kt(["svelte-flow__edge-path", f()])
    ],
    me
  ), T(e, w), le({
    get id() {
      return n();
    },
    set id(y) {
      n(y), p();
    },
    get path() {
      return r();
    },
    set path(y) {
      r(y), p();
    },
    get label() {
      return o();
    },
    set label(y) {
      o(y), p();
    },
    get labelX() {
      return a();
    },
    set labelX(y) {
      a(y), p();
    },
    get labelY() {
      return i();
    },
    set labelY(y) {
      i(y), p();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(y) {
      s(y), p();
    },
    get markerStart() {
      return l();
    },
    set markerStart(y) {
      l(y), p();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(y) {
      u(y), p();
    },
    get style() {
      return c();
    },
    set style(y) {
      c(y), p();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(y) {
      d(y), p();
    },
    get class() {
      return f();
    },
    set class(y) {
      f(y), p();
    }
  });
}
oe(
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
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  nt(n, [
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
  ]), se(t, !1);
  const r = re(), o = re(), a = re();
  let i = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), w = m(t, "sourcePosition", 12), b = m(t, "targetX", 12), x = m(t, "targetY", 12), _ = m(t, "targetPosition", 12);
  return de(
    () => (g(r), g(o), g(a), G(f()), G(v()), G(b()), G(x()), G(w()), G(_())),
    () => {
      ((h) => (q(r, h[0]), q(o, h[1]), q(a, h[2])))(oc({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: x(),
        sourcePosition: w(),
        targetPosition: _()
      }));
    }
  ), vt(), Ve(), Ho(e, {
    get path() {
      return g(r);
    },
    get labelX() {
      return g(o);
    },
    get labelY() {
      return g(a);
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
  }), le({
    get label() {
      return i();
    },
    set label(h) {
      i(h), p();
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
      return w();
    },
    set sourcePosition(h) {
      w(h), p();
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
      return _();
    },
    set targetPosition(h) {
      _(h), p();
    }
  });
}
oe(
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
function $c(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  nt(n, [
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
  ]), se(t, !1);
  const r = re(), o = re(), a = re();
  let i = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), w = m(t, "sourcePosition", 12), b = m(t, "targetX", 12), x = m(t, "targetY", 12), _ = m(t, "targetPosition", 12);
  return de(
    () => (g(r), g(o), g(a), G(f()), G(v()), G(b()), G(x()), G(w()), G(_())),
    () => {
      ((h) => (q(r, h[0]), q(o, h[1]), q(a, h[2])))(yi({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: x(),
        sourcePosition: w(),
        targetPosition: _()
      }));
    }
  ), vt(), Ve(), Ho(e, {
    get path() {
      return g(r);
    },
    get labelX() {
      return g(o);
    },
    get labelY() {
      return g(a);
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
  }), le({
    get label() {
      return i();
    },
    set label(h) {
      i(h), p();
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
      return w();
    },
    set sourcePosition(h) {
      w(h), p();
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
      return _();
    },
    set targetPosition(h) {
      _(h), p();
    }
  });
}
oe(
  $c,
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
function Cc(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  nt(n, [
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
  ]), se(t, !1);
  const r = re(), o = re(), a = re();
  let i = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), w = m(t, "targetX", 12), b = m(t, "targetY", 12);
  return de(
    () => (g(r), g(o), g(a), G(f()), G(v()), G(w()), G(b())),
    () => {
      ((x) => (q(r, x[0]), q(o, x[1]), q(a, x[2])))(Ea({
        sourceX: f(),
        sourceY: v(),
        targetX: w(),
        targetY: b()
      }));
    }
  ), vt(), Ve(), Ho(e, {
    get path() {
      return g(r);
    },
    get labelX() {
      return g(o);
    },
    get labelY() {
      return g(a);
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
  }), le({
    get label() {
      return i();
    },
    set label(x) {
      i(x), p();
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
      return w();
    },
    set targetX(x) {
      w(x), p();
    },
    get targetY() {
      return b();
    },
    set targetY(x) {
      b(x), p();
    }
  });
}
oe(
  Cc,
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
function _c(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  nt(n, [
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
  ]), se(t, !1);
  const r = re(), o = re(), a = re();
  let i = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), w = m(t, "sourcePosition", 12), b = m(t, "targetX", 12), x = m(t, "targetY", 12), _ = m(t, "targetPosition", 12);
  return de(
    () => (g(r), g(o), g(a), G(f()), G(v()), G(b()), G(x()), G(w()), G(_())),
    () => {
      ((h) => (q(r, h[0]), q(o, h[1]), q(a, h[2])))(yi({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: x(),
        sourcePosition: w(),
        targetPosition: _(),
        borderRadius: 0
      }));
    }
  ), vt(), Ve(), Ho(e, {
    get path() {
      return g(r);
    },
    get labelX() {
      return g(o);
    },
    get labelY() {
      return g(a);
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
  }), le({
    get label() {
      return i();
    },
    set label(h) {
      i(h), p();
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
      return w();
    },
    set sourcePosition(h) {
      w(h), p();
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
      return _();
    },
    set targetPosition(h) {
      _(h), p();
    }
  });
}
oe(
  _c,
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
function w0(e, t) {
  const n = e.set, r = t.set, o = j(e), a = j(t);
  let i = o.length === 0 && a.length > 0 ? a : o;
  e.set(i);
  const s = (l) => {
    const u = n(l);
    return i = u, r(i), u;
  };
  e.set = t.set = s, e.update = t.update = (l) => s(l(i));
}
function b0(e, t) {
  const n = e.set, r = t.set;
  let o = j(t);
  e.set(o);
  const a = (i) => {
    n(i), r(i), o = i;
  };
  e.set = t.set = a, e.update = t.update = (i) => a(i(o));
}
const x0 = (e, t, n) => {
  if (!n)
    return;
  const r = j(e), o = t.set, a = n.set;
  let i = n ? j(n) : { x: 0, y: 0, zoom: 1 };
  t.set(i), t.set = (s) => (o(s), a(s), i = s, s), n.set = (s) => (r == null || r.syncViewport(s), o(s), a(s), i = s, s), t.update = (s) => {
    t.set(s(i));
  }, n.update = (s) => {
    n.set(s(i));
  };
}, $0 = (e, t, n, r = [0, 0], o = gi) => {
  const { subscribe: a, set: i, update: s } = we([]);
  let l = e, u = {}, c = !0;
  const d = (b) => (ac(b, t, n, {
    elevateNodesOnSelect: c,
    nodeOrigin: r,
    nodeExtent: o,
    defaults: u,
    checkEquality: !1
  }), l = b, i(l), l), f = (b) => d(b(l)), v = (b) => {
    u = b;
  }, w = (b) => {
    c = b.elevateNodesOnSelect ?? c;
  };
  return d(l), {
    subscribe: a,
    set: d,
    update: f,
    setDefaultOptions: v,
    setOptions: w
  };
}, C0 = (e, t, n, r) => {
  const { subscribe: o, set: a, update: i } = we([]);
  let s = e, l = {};
  const u = (f) => {
    const v = l ? f.map((w) => ({ ...l, ...w })) : f;
    lc(t, n, v), s = v, a(s);
  }, c = (f) => u(f(s)), d = (f) => {
    l = f;
  };
  return u(s), {
    subscribe: o,
    set: u,
    update: c,
    setDefaultOptions: d
  };
}, kc = {
  input: pc,
  output: mc,
  default: wi,
  group: yc
}, Sc = {
  straight: Cc,
  smoothstep: $c,
  default: xi,
  step: _c
}, _0 = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: a, nodeExtent: i }) => {
  const s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = a ?? [0, 0], f = i ?? gi;
  ac(e, s, l, {
    nodeExtent: f,
    nodeOrigin: d,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), lc(u, c, t);
  let v = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const w = Eo(s, {
      filter: (b) => !!((b.width || b.initialWidth) && (b.height || b.initialHeight))
    });
    v = as(w, n, r, 0.5, 2, 0.1);
  }
  return {
    flowId: we(null),
    nodes: $0(e, s, l, d, f),
    nodeLookup: Wt(s),
    parentLookup: Wt(l),
    edgeLookup: Wt(c),
    visibleNodes: Wt([]),
    edges: C0(t, u, c),
    visibleEdges: Wt([]),
    connectionLookup: Wt(u),
    height: we(500),
    width: we(500),
    minZoom: we(0.5),
    maxZoom: we(2),
    nodeOrigin: we(d),
    nodeDragThreshold: we(1),
    nodeExtent: we(f),
    translateExtent: we(gi),
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
    selectionMode: we(hi.Partial),
    nodeTypes: we(kc),
    edgeTypes: we(Sc),
    viewport: we(v),
    connectionMode: we(cr.Strict),
    domNode: we(null),
    connection: Wt(_a),
    connectionLineType: we(_r.Bezier),
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
    onerror: we(Cp),
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
function k0(e) {
  const t = Wn([
    e.edges,
    e.nodes,
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.viewport,
    e.width,
    e.height
  ], ([n, , r, o, a, i, s]) => o && i && s ? n.filter((l) => {
    const u = r.get(l.source), c = r.get(l.target);
    return u && c && zp({
      sourceNode: u,
      targetNode: c,
      width: i,
      height: s,
      transform: [a.x, a.y, a.zoom]
    });
  }) : n);
  return Wn([t, e.nodes, e.nodeLookup, e.connectionMode, e.onerror], ([n, , r, o, a]) => n.reduce((i, s) => {
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
      zIndex: Hp({
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
function S0(e) {
  return Wn([
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.width,
    e.height,
    e.viewport,
    e.nodes
  ], ([t, n, r, o, a]) => {
    const i = [a.x, a.y, a.zoom];
    return n ? Gu(t, { x: 0, y: 0, width: r, height: o }, i, !0) : Array.from(t.values());
  });
}
const Xi = Symbol();
function Ec({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: a, nodeExtent: i }) {
  const s = _0({
    nodes: e,
    edges: t,
    width: n,
    height: r,
    fitView: o,
    nodeOrigin: a,
    nodeExtent: i
  });
  function l(k) {
    s.nodeTypes.set({
      ...kc,
      ...k
    });
  }
  function u(k) {
    s.edgeTypes.set({
      ...Sc,
      ...k
    });
  }
  function c(k) {
    const M = j(s.edges);
    s.edges.set(Np(k, M));
  }
  const d = (k, M = !1) => {
    var V;
    const O = j(s.nodeLookup);
    for (const [Z, W] of k) {
      const F = (V = O.get(Z)) == null ? void 0 : V.internals.userNode;
      F && (F.position = W.position, F.dragging = M);
    }
    s.nodes.update((Z) => Z);
  };
  function f(k) {
    var M, V, O;
    const Z = j(s.nodeLookup), W = j(s.parentLookup), { changes: F, updatedInternals: ie } = Yp(k, Z, j(s.parentLookup), j(s.domNode), j(s.nodeOrigin));
    if (ie) {
      if (Bp(Z, W, { nodeOrigin: a, nodeExtent: i }), !j(s.fitViewOnInitDone) && j(s.fitViewOnInit)) {
        const U = j(s.fitViewOptions), X = w({
          ...U,
          nodes: U == null ? void 0 : U.nodes
        });
        s.fitViewOnInitDone.set(X);
      }
      for (const U of F) {
        const X = (M = Z.get(U.id)) == null ? void 0 : M.internals.userNode;
        if (X)
          switch (U.type) {
            case "dimensions": {
              const ce = { ...X.measured, ...U.dimensions };
              U.setAttributes && (X.width = ((V = U.dimensions) == null ? void 0 : V.width) ?? X.width, X.height = ((O = U.dimensions) == null ? void 0 : O.height) ?? X.height), X.measured = ce;
              break;
            }
            case "position":
              X.position = U.position ?? X.position;
              break;
          }
      }
      s.nodes.update((U) => U), j(s.nodesInitialized) || s.nodesInitialized.set(!0);
    }
  }
  function v(k) {
    const M = j(s.panZoom), V = j(s.domNode);
    if (!M || !V)
      return Promise.resolve(!1);
    const { width: O, height: Z } = ss(V), W = ol(j(s.nodeLookup), k);
    return il({
      nodes: W,
      width: O,
      height: Z,
      minZoom: j(s.minZoom),
      maxZoom: j(s.maxZoom),
      panZoom: M
    }, k);
  }
  function w(k) {
    const M = j(s.panZoom);
    if (!M)
      return !1;
    const V = ol(j(s.nodeLookup), k);
    return il({
      nodes: V,
      width: j(s.width),
      height: j(s.height),
      minZoom: j(s.minZoom),
      maxZoom: j(s.maxZoom),
      panZoom: M
    }, k), V.size > 0;
  }
  function b(k, M) {
    const V = j(s.panZoom);
    return V ? V.scaleBy(k, M) : Promise.resolve(!1);
  }
  function x(k) {
    return b(1.2, k);
  }
  function _(k) {
    return b(1 / 1.2, k);
  }
  function h(k) {
    const M = j(s.panZoom);
    M && (M.setScaleExtent([k, j(s.maxZoom)]), s.minZoom.set(k));
  }
  function C(k) {
    const M = j(s.panZoom);
    M && (M.setScaleExtent([j(s.minZoom), k]), s.maxZoom.set(k));
  }
  function y(k) {
    const M = j(s.panZoom);
    M && (M.setTranslateExtent(k), s.translateExtent.set(k));
  }
  function $(k) {
    let M = !1;
    return k.forEach((V) => {
      V.selected && (V.selected = !1, M = !0);
    }), M;
  }
  function E(k) {
    var M;
    (M = j(s.panZoom)) == null || M.setClickDistance(k);
  }
  function S(k) {
    $((k == null ? void 0 : k.nodes) || j(s.nodes)) && s.nodes.set(j(s.nodes)), $((k == null ? void 0 : k.edges) || j(s.edges)) && s.edges.set(j(s.edges));
  }
  s.deleteKeyPressed.subscribe(async (k) => {
    var M;
    if (k) {
      const V = j(s.nodes), O = j(s.edges), Z = V.filter((U) => U.selected), W = O.filter((U) => U.selected), { nodes: F, edges: ie } = await Uu({
        nodesToRemove: Z,
        edgesToRemove: W,
        nodes: V,
        edges: O,
        onBeforeDelete: j(s.onbeforedelete)
      });
      (F.length || ie.length) && (s.nodes.update((U) => U.filter((X) => !F.some((ce) => ce.id === X.id))), s.edges.update((U) => U.filter((X) => !ie.some((ce) => ce.id === X.id))), (M = j(s.ondelete)) == null || M({
        nodes: F,
        edges: ie
      }));
    }
  });
  function z(k) {
    const M = j(s.multiselectionKeyPressed);
    s.nodes.update((V) => V.map((O) => {
      const Z = k.includes(O.id), W = M && O.selected || Z;
      return O.selected = W, O;
    })), M || s.edges.update((V) => V.map((O) => (O.selected = !1, O)));
  }
  function P(k) {
    const M = j(s.multiselectionKeyPressed);
    s.edges.update((V) => V.map((O) => {
      const Z = k.includes(O.id), W = M && O.selected || Z;
      return O.selected = W, O;
    })), M || s.nodes.update((V) => V.map((O) => (O.selected = !1, O)));
  }
  function N(k) {
    var M;
    const V = (M = j(s.nodes)) == null ? void 0 : M.find((O) => O.id === k);
    if (!V) {
      console.warn("012", Lr.error012(k));
      return;
    }
    s.selectionRect.set(null), s.selectionRectMode.set(null), V.selected ? V.selected && j(s.multiselectionKeyPressed) && S({ nodes: [V], edges: [] }) : z([k]);
  }
  function A(k) {
    const M = j(s.viewport);
    return Wp({
      delta: k,
      panZoom: j(s.panZoom),
      transform: [M.x, M.y, M.zoom],
      translateExtent: j(s.translateExtent),
      width: j(s.width),
      height: j(s.height)
    });
  }
  const D = we(_a), R = (k) => {
    D.set({ ...k });
  };
  function H() {
    D.set(_a);
  }
  function L() {
    s.fitViewOnInitDone.set(!1), s.selectionRect.set(null), s.selectionRectMode.set(null), s.snapGrid.set(null), s.isValidConnection.set(() => !0), S(), H();
  }
  return {
    // state
    ...s,
    // derived state
    visibleEdges: k0(s),
    visibleNodes: S0(s),
    connection: Wn([D, s.viewport], ([k, M]) => k.inProgress ? {
      ...k,
      to: Mo(k.to, [M.x, M.y, M.zoom])
    } : { ...k }),
    markers: Wn([s.edges, s.defaultMarkerColor, s.flowId], ([k, M, V]) => Ap(k, { defaultColor: M, id: V })),
    initialized: (() => {
      let k = !1;
      const M = j(s.nodes).length, V = j(s.edges).length;
      return Wn([s.nodesInitialized, s.edgesInitialized, s.viewportInitialized], ([O, Z, W]) => k || (M === 0 ? k = W : V === 0 ? k = W && O : k = W && O && Z, k));
    })(),
    // actions
    syncNodeStores: (k) => w0(s.nodes, k),
    syncEdgeStores: (k) => b0(s.edges, k),
    syncViewport: (k) => x0(s.panZoom, s.viewport, k),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: d,
    updateNodeInternals: f,
    zoomIn: x,
    zoomOut: _,
    fitView: (k) => v(k),
    setMinZoom: h,
    setMaxZoom: C,
    setTranslateExtent: y,
    setPaneClickDistance: E,
    unselectNodesAndEdges: S,
    addSelectedNodes: z,
    addSelectedEdges: P,
    handleNodeSelection: N,
    panBy: A,
    updateConnection: R,
    cancelConnection: H,
    reset: L
  };
}
function qe() {
  const e = sr(Xi);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function E0({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: a, nodeExtent: i }) {
  const s = Ec({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: a, nodeExtent: i });
  return Hr(Xi, {
    getStore: () => s
  }), s;
}
function wl(e, t) {
  const { panZoom: n, minZoom: r, maxZoom: o, initialViewport: a, viewport: i, dragging: s, translateExtent: l, paneClickDistance: u } = t, c = c0({
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
var M0 = /* @__PURE__ */ ne('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const H0 = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function Mc(e, t) {
  se(t, !1), Qe(e, H0);
  const [n, r] = et(), o = () => Q(V, "$panActivationKeyPressed", n), a = () => Q(R, "$minZoom", n), i = () => Q(H, "$maxZoom", n), s = () => Q(O, "$zoomActivationKeyPressed", n), l = () => Q(D, "$selectionRect", n), u = () => Q(k, "$translateExtent", n), c = () => Q(M, "$lib", n), d = re(), f = re(), v = re();
  let w = m(t, "initialViewport", 12, void 0), b = m(t, "onMoveStart", 12, void 0), x = m(t, "onMove", 12, void 0), _ = m(t, "onMoveEnd", 12, void 0), h = m(t, "panOnScrollMode", 12), C = m(t, "preventScrolling", 12), y = m(t, "zoomOnScroll", 12), $ = m(t, "zoomOnDoubleClick", 12), E = m(t, "zoomOnPinch", 12), S = m(t, "panOnDrag", 12), z = m(t, "panOnScroll", 12), P = m(t, "paneClickDistance", 12);
  const {
    viewport: N,
    panZoom: A,
    selectionRect: D,
    minZoom: R,
    maxZoom: H,
    dragging: L,
    translateExtent: k,
    lib: M,
    panActivationKeyPressed: V,
    zoomActivationKeyPressed: O,
    viewportInitialized: Z
  } = qe(), W = (X) => N.set({
    x: X[0],
    y: X[1],
    zoom: X[2]
  });
  Vt(() => {
    si(Z, !0);
  }), de(() => G(w()), () => {
    q(d, w() || { x: 0, y: 0, zoom: 1 });
  }), de(
    () => (o(), G(S())),
    () => {
      q(f, o() || S());
    }
  ), de(
    () => (o(), G(z())),
    () => {
      q(v, o() || z());
    }
  ), vt(), Ve();
  var F = M0(), ie = Y(F);
  pt(ie, t, "default", {}), K(F), ht(F, (X, ce) => wl == null ? void 0 : wl(X, ce), () => ({
    viewport: N,
    minZoom: a(),
    maxZoom: i(),
    initialViewport: g(d),
    dragging: L,
    panZoom: A,
    onPanZoomStart: b(),
    onPanZoom: x(),
    onPanZoomEnd: _(),
    zoomOnScroll: y(),
    zoomOnDoubleClick: $(),
    zoomOnPinch: E(),
    panOnScroll: g(v),
    panOnDrag: g(f),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: h() || jn.Free,
    zoomActivationKeyPressed: s(),
    preventScrolling: typeof C() == "boolean" ? C() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: P(),
    onTransformChange: W
  })), T(e, F);
  var U = le({
    get initialViewport() {
      return w();
    },
    set initialViewport(X) {
      w(X), p();
    },
    get onMoveStart() {
      return b();
    },
    set onMoveStart(X) {
      b(X), p();
    },
    get onMove() {
      return x();
    },
    set onMove(X) {
      x(X), p();
    },
    get onMoveEnd() {
      return _();
    },
    set onMoveEnd(X) {
      _(X), p();
    },
    get panOnScrollMode() {
      return h();
    },
    set panOnScrollMode(X) {
      h(X), p();
    },
    get preventScrolling() {
      return C();
    },
    set preventScrolling(X) {
      C(X), p();
    },
    get zoomOnScroll() {
      return y();
    },
    set zoomOnScroll(X) {
      y(X), p();
    },
    get zoomOnDoubleClick() {
      return $();
    },
    set zoomOnDoubleClick(X) {
      $(X), p();
    },
    get zoomOnPinch() {
      return E();
    },
    set zoomOnPinch(X) {
      E(X), p();
    },
    get panOnDrag() {
      return S();
    },
    set panOnDrag(X) {
      S(X), p();
    },
    get panOnScroll() {
      return z();
    },
    set panOnScroll(X) {
      z(X), p();
    },
    get paneClickDistance() {
      return P();
    },
    set paneClickDistance(X) {
      P(X), p();
    }
  });
  return r(), U;
}
oe(
  Mc,
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
function bl(e, t) {
  return (n) => {
    n.target === t && (e == null || e(n));
  };
}
function xl(e) {
  return (t) => {
    const n = e.includes(t.id);
    return t.selected !== n && (t.selected = n), t;
  };
}
var z0 = /* @__PURE__ */ ne("<div><!></div>");
const P0 = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function Hc(e, t) {
  se(t, !1), Qe(e, P0);
  const [n, r] = et(), o = () => Q(H, "$panActivationKeyPressed", n), a = () => Q(D, "$selectionKeyPressed", n), i = () => Q(N, "$selectionRect", n), s = () => Q(P, "$elementsSelectable", n), l = () => Q(A, "$selectionRectMode", n), u = () => Q(E, "$edges", n), c = () => Q($, "$nodeLookup", n), d = () => Q(S, "$viewport", n), f = () => Q(R, "$selectionMode", n), v = () => Q(z, "$dragging", n), w = re(), b = re(), x = re();
  let _ = m(t, "panOnDrag", 12, void 0), h = m(t, "selectionOnDrag", 12, void 0);
  const C = Di(), {
    nodes: y,
    nodeLookup: $,
    edges: E,
    viewport: S,
    dragging: z,
    elementsSelectable: P,
    selectionRect: N,
    selectionRectMode: A,
    selectionKeyPressed: D,
    selectionMode: R,
    panActivationKeyPressed: H,
    unselectNodesAndEdges: L
  } = qe();
  let k = re(), M = null, V = [], O = !1;
  function Z(te) {
    if (O) {
      O = !1;
      return;
    }
    C("paneclick", { event: te }), L(), A.set(null);
  }
  function W(te) {
    var pe, Xe;
    if (M = g(k).getBoundingClientRect(), !P || !g(b) || te.button !== 0 || te.target !== g(k) || !M)
      return;
    (Xe = (pe = te.target) == null ? void 0 : pe.setPointerCapture) == null || Xe.call(pe, te.pointerId);
    const { x: Ze, y: Be } = Ln(te, M);
    L(), N.set({
      width: 0,
      height: 0,
      startX: Ze,
      startY: Be,
      x: Ze,
      y: Be
    });
  }
  function F(te) {
    if (!g(b) || !M || !i())
      return;
    O = !0;
    const pe = Ln(te, M), Xe = i().startX ?? 0, Ze = i().startY ?? 0, Be = {
      ...i(),
      x: pe.x < Xe ? pe.x : Xe,
      y: pe.y < Ze ? pe.y : Ze,
      width: Math.abs(pe.x - Xe),
      height: Math.abs(pe.y - Ze)
    }, ee = V.map((ae) => ae.id), Ye = ka(V, u()).map((ae) => ae.id);
    V = Gu(
      c(),
      Be,
      [
        d().x,
        d().y,
        d().zoom
      ],
      f() === hi.Partial,
      !0
    );
    const Oe = ka(V, u()).map((ae) => ae.id), fe = V.map((ae) => ae.id);
    (ee.length !== fe.length || fe.some((ae) => !ee.includes(ae))) && y.update((ae) => ae.map(xl(fe))), (Ye.length !== Oe.length || Oe.some((ae) => !Ye.includes(ae))) && E.update((ae) => ae.map(xl(Oe))), A.set("user"), N.set(Be);
  }
  function ie(te) {
    var pe, Xe;
    te.button === 0 && ((Xe = (pe = te.target) == null ? void 0 : pe.releasePointerCapture) == null || Xe.call(pe, te.pointerId), !g(b) && l() === "user" && te.target === g(k) && (Z == null || Z(te)), N.set(null), V.length > 0 && si(A, "nodes"), a() && (O = !1));
  }
  const U = (te) => {
    var pe;
    if (Array.isArray(g(w)) && (pe = g(w)) != null && pe.includes(2)) {
      te.preventDefault();
      return;
    }
    C("panecontextmenu", { event: te });
  };
  de(
    () => (o(), G(_())),
    () => {
      q(w, o() || _());
    }
  ), de(
    () => (a(), i(), G(h()), g(w)),
    () => {
      q(b, a() || i() || h() && g(w) !== !0);
    }
  ), de(
    () => (s(), g(b), l()),
    () => {
      q(x, s() && (g(b) || l() === "user"));
    }
  ), vt(), Ve();
  var X = z0(), ce = /* @__PURE__ */ Pe(() => g(x) ? void 0 : bl(Z, g(k))), $e = /* @__PURE__ */ Pe(() => bl(U, g(k)));
  let _e;
  var he = Y(X);
  pt(he, t, "default", {}), K(X), wn(X, (te) => q(k, te), () => g(k)), Ee(
    (te) => _e = Ct(X, 1, "svelte-flow__pane svelte-1esy7hx", null, _e, {
      draggable: te,
      dragging: v(),
      selection: g(b)
    }),
    [
      () => _() === !0 || Array.isArray(_()) && _().includes(0)
    ],
    me
  ), Re("click", X, function(...te) {
    var pe;
    (pe = g(ce)) == null || pe.apply(this, te);
  }), Re("pointerdown", X, function(...te) {
    var pe;
    (pe = g(x) ? W : void 0) == null || pe.apply(this, te);
  }), Re("pointermove", X, function(...te) {
    var pe;
    (pe = g(x) ? F : void 0) == null || pe.apply(this, te);
  }), Re("pointerup", X, function(...te) {
    var pe;
    (pe = g(x) ? ie : void 0) == null || pe.apply(this, te);
  }), Re("contextmenu", X, function(...te) {
    var pe;
    (pe = g($e)) == null || pe.apply(this, te);
  }), T(e, X);
  var ve = le({
    get panOnDrag() {
      return _();
    },
    set panOnDrag(te) {
      _(te), p();
    },
    get selectionOnDrag() {
      return h();
    },
    set selectionOnDrag(te) {
      h(te), p();
    }
  });
  return r(), ve;
}
oe(Hc, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var L0 = /* @__PURE__ */ ne('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const N0 = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function zc(e, t) {
  se(t, !1), Qe(e, N0);
  const [n, r] = et(), o = () => Q(a, "$viewport", n), { viewport: a } = qe();
  Ve();
  var i = L0(), s = Y(i);
  pt(s, t, "default", {}), K(i), Ee(() => ue(i, "style", `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), T(e, i), le(), r();
}
oe(zc, {}, ["default"], [], !0);
function $i(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: a, onNodeMouseDown: i } = t, s = qp({
    onDrag: r,
    onDragStart: o,
    onDragStop: a,
    onNodeMouseDown: i,
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
function V0({ width: e, height: t, initialWidth: n, initialHeight: r, measuredWidth: o, measuredHeight: a }) {
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
var D0 = /* @__PURE__ */ ne("<div><!></div>");
function Pc(e, t) {
  se(t, !1);
  const [n, r] = et(), o = () => Q($e, "$nodeTypes", n), a = () => Q(pe, "$elementsSelectable", n), i = () => Q(Xe, "$nodesDraggable", n), s = () => Q(Ye, "$connectableStore", n), l = re(void 0, !0), u = re(void 0, !0), c = re(void 0, !0), d = re(void 0, !0);
  let f = m(t, "node", 13), v = m(t, "id", 13), w = m(t, "data", 29, () => ({})), b = m(t, "selected", 13, !1), x = m(t, "draggable", 13, void 0), _ = m(t, "selectable", 13, void 0), h = m(t, "connectable", 13, !0), C = m(t, "deletable", 13, !0), y = m(t, "hidden", 13, !1), $ = m(t, "dragging", 13, !1), E = m(t, "resizeObserver", 13, null), S = m(t, "style", 13, void 0), z = m(t, "type", 13, "default"), P = m(t, "isParent", 13, !1), N = m(t, "positionX", 13), A = m(t, "positionY", 13), D = m(t, "sourcePosition", 13, void 0), R = m(t, "targetPosition", 13, void 0), H = m(t, "zIndex", 13), L = m(t, "measuredWidth", 13, void 0), k = m(t, "measuredHeight", 13, void 0), M = m(t, "initialWidth", 13, void 0), V = m(t, "initialHeight", 13, void 0), O = m(t, "width", 13, void 0), Z = m(t, "height", 13, void 0), W = m(t, "dragHandle", 13, void 0), F = m(t, "initialized", 13, !1), ie = m(t, "parentId", 13, void 0), U = m(t, "nodeClickDistance", 13, void 0), X = m(t, "class", 13, "");
  const ce = qe(), {
    nodeTypes: $e,
    nodeDragThreshold: _e,
    selectNodesOnDrag: he,
    handleNodeSelection: ve,
    updateNodeInternals: te,
    elementsSelectable: pe,
    nodesDraggable: Xe
  } = ce;
  let Ze = re(void 0, !0), Be = re(null, !0);
  const ee = Di(), Ye = we(h());
  let Oe = re(void 0, !0), fe = re(void 0, !0), ae = re(void 0, !0);
  Hr("svelteflow__node_id", v()), Hr("svelteflow__node_connectable", Ye), Ga(() => {
    var J;
    g(Be) && ((J = E()) == null || J.unobserve(g(Be)));
  });
  function ke(J) {
    _() && (!j(he) || !x() || j(_e) > 0) && ve(v()), ee("nodeclick", { node: f().internals.userNode, event: J });
  }
  de(() => G(z()), () => {
    q(l, z() || "default");
  }), de(() => (o(), g(l)), () => {
    q(u, !!o()[g(l)]);
  }), de(
    () => (o(), g(l), wi),
    () => {
      q(c, o()[g(l)] || wi);
    }
  ), de(
    () => (g(u), G(z())),
    () => {
      g(u) || console.warn("003", Lr.error003(z()));
    }
  ), de(
    () => (G(O()), G(Z()), G(M()), G(V()), G(L()), G(k())),
    () => {
      q(d, V0({
        width: O(),
        height: Z(),
        initialWidth: M(),
        initialHeight: V(),
        measuredWidth: L(),
        measuredHeight: k()
      }));
    }
  ), de(() => G(h()), () => {
    Ye.set(!!h());
  }), de(
    () => (g(Oe), g(l), g(fe), G(D()), g(ae), G(R()), G(v()), g(Ze)),
    () => {
      (g(Oe) && g(l) !== g(Oe) || g(fe) && D() !== g(fe) || g(ae) && R() !== g(ae)) && requestAnimationFrame(() => te(/* @__PURE__ */ new Map([
        [
          v(),
          {
            id: v(),
            nodeElement: g(Ze),
            force: !0
          }
        ]
      ]))), q(Oe, g(l)), q(fe, D()), q(ae, R());
    }
  ), de(
    () => (G(E()), g(Ze), g(Be), G(F())),
    () => {
      E() && (g(Ze) !== g(Be) || !F()) && (g(Be) && E().unobserve(g(Be)), g(Ze) && E().observe(g(Ze)), q(Be, g(Ze)));
    }
  ), vt(), Ve(!0);
  var Ne = Je(), We = xe(Ne);
  {
    var ct = (J) => {
      var Le = D0();
      let ge;
      var dn = Y(Le);
      const Gt = /* @__PURE__ */ me(() => b() ?? !1), fn = /* @__PURE__ */ me(() => _() ?? a() ?? !0), He = /* @__PURE__ */ me(() => C() ?? !0), rt = /* @__PURE__ */ me(() => x() ?? i() ?? !0);
      hu(dn, () => g(c), (ye, ot) => {
        ot(ye, {
          get data() {
            return w();
          },
          get id() {
            return v();
          },
          get selected() {
            return g(Gt);
          },
          get selectable() {
            return g(fn);
          },
          get deletable() {
            return g(He);
          },
          get sourcePosition() {
            return D();
          },
          get targetPosition() {
            return R();
          },
          get zIndex() {
            return H();
          },
          get dragging() {
            return $();
          },
          get draggable() {
            return g(rt);
          },
          get dragHandle() {
            return W();
          },
          get parentId() {
            return ie();
          },
          get type() {
            return g(l);
          },
          get isConnectable() {
            return s();
          },
          get positionAbsoluteX() {
            return N();
          },
          get positionAbsoluteY() {
            return A();
          },
          get width() {
            return O();
          },
          get height() {
            return Z();
          }
        });
      }), K(Le), ht(Le, (ye, ot) => $i == null ? void 0 : $i(ye, ot), () => ({
        nodeId: v(),
        isSelectable: _(),
        disabled: !1,
        handleSelector: W(),
        noDragClass: "nodrag",
        nodeClickDistance: U(),
        onNodeMouseDown: ve,
        onDrag: (ye, ot, at, Yt) => {
          ee("nodedrag", { event: ye, targetNode: at, nodes: Yt });
        },
        onDragStart: (ye, ot, at, Yt) => {
          ee("nodedragstart", { event: ye, targetNode: at, nodes: Yt });
        },
        onDragStop: (ye, ot, at, Yt) => {
          ee("nodedragstop", { event: ye, targetNode: at, nodes: Yt });
        },
        store: ce
      })), wn(Le, (ye) => q(Ze, ye), () => g(Ze)), It(() => Re("click", Le, ke)), It(() => Re("mouseenter", Le, (ye) => ee("nodemouseenter", { node: f(), event: ye }))), It(() => Re("mouseleave", Le, (ye) => ee("nodemouseleave", { node: f(), event: ye }))), It(() => Re("mousemove", Le, (ye) => ee("nodemousemove", { node: f(), event: ye }))), It(() => Re("contextmenu", Le, (ye) => ee("nodecontextmenu", { node: f(), event: ye }))), Ee(
        (ye) => {
          ue(Le, "data-id", v()), ge = Ct(Le, 1, Cn(ye), null, ge, {
            dragging: $(),
            selected: b(),
            draggable: x(),
            connectable: h(),
            selectable: _(),
            nopan: x(),
            parent: P()
          }), ue(Le, "style", `${S() ?? ""};${g(d).width ?? ""}${g(d).height ?? ""}`), it(Le, "z-index", H()), it(Le, "transform", `translate(${N() ?? ""}px, ${A() ?? ""}px)`), it(Le, "visibility", F() ? "visible" : "hidden");
        },
        [
          () => kt([
            "svelte-flow__node",
            `svelte-flow__node-${g(l)}`,
            X()
          ])
        ],
        me
      ), T(J, Le);
    };
    Ce(We, (J) => {
      y() || J(ct);
    });
  }
  T(e, Ne);
  var tt = le({
    get node() {
      return f();
    },
    set node(J) {
      f(J), p();
    },
    get id() {
      return v();
    },
    set id(J) {
      v(J), p();
    },
    get data() {
      return w();
    },
    set data(J) {
      w(J), p();
    },
    get selected() {
      return b();
    },
    set selected(J) {
      b(J), p();
    },
    get draggable() {
      return x();
    },
    set draggable(J) {
      x(J), p();
    },
    get selectable() {
      return _();
    },
    set selectable(J) {
      _(J), p();
    },
    get connectable() {
      return h();
    },
    set connectable(J) {
      h(J), p();
    },
    get deletable() {
      return C();
    },
    set deletable(J) {
      C(J), p();
    },
    get hidden() {
      return y();
    },
    set hidden(J) {
      y(J), p();
    },
    get dragging() {
      return $();
    },
    set dragging(J) {
      $(J), p();
    },
    get resizeObserver() {
      return E();
    },
    set resizeObserver(J) {
      E(J), p();
    },
    get style() {
      return S();
    },
    set style(J) {
      S(J), p();
    },
    get type() {
      return z();
    },
    set type(J) {
      z(J), p();
    },
    get isParent() {
      return P();
    },
    set isParent(J) {
      P(J), p();
    },
    get positionX() {
      return N();
    },
    set positionX(J) {
      N(J), p();
    },
    get positionY() {
      return A();
    },
    set positionY(J) {
      A(J), p();
    },
    get sourcePosition() {
      return D();
    },
    set sourcePosition(J) {
      D(J), p();
    },
    get targetPosition() {
      return R();
    },
    set targetPosition(J) {
      R(J), p();
    },
    get zIndex() {
      return H();
    },
    set zIndex(J) {
      H(J), p();
    },
    get measuredWidth() {
      return L();
    },
    set measuredWidth(J) {
      L(J), p();
    },
    get measuredHeight() {
      return k();
    },
    set measuredHeight(J) {
      k(J), p();
    },
    get initialWidth() {
      return M();
    },
    set initialWidth(J) {
      M(J), p();
    },
    get initialHeight() {
      return V();
    },
    set initialHeight(J) {
      V(J), p();
    },
    get width() {
      return O();
    },
    set width(J) {
      O(J), p();
    },
    get height() {
      return Z();
    },
    set height(J) {
      Z(J), p();
    },
    get dragHandle() {
      return W();
    },
    set dragHandle(J) {
      W(J), p();
    },
    get initialized() {
      return F();
    },
    set initialized(J) {
      F(J), p();
    },
    get parentId() {
      return ie();
    },
    set parentId(J) {
      ie(J), p();
    },
    get nodeClickDistance() {
      return U();
    },
    set nodeClickDistance(J) {
      U(J), p();
    },
    get class() {
      return X();
    },
    set class(J) {
      X(J), p();
    }
  });
  return r(), tt;
}
oe(
  Pc,
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
var T0 = /* @__PURE__ */ ne('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const O0 = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function Lc(e, t) {
  se(t, !1), Qe(e, O0);
  const [n, r] = et(), o = () => Q(c, "$visibleNodes", n), a = () => Q(d, "$nodesDraggable", n), i = () => Q(v, "$elementsSelectable", n), s = () => Q(f, "$nodesConnectable", n), l = () => Q(b, "$parentLookup", n);
  let u = m(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: d,
    nodesConnectable: f,
    elementsSelectable: v,
    updateNodeInternals: w,
    parentLookup: b
  } = qe(), x = typeof ResizeObserver > "u" ? null : new ResizeObserver((C) => {
    const y = /* @__PURE__ */ new Map();
    C.forEach(($) => {
      const E = $.target.getAttribute("data-id");
      y.set(E, { id: E, nodeElement: $.target, force: !0 });
    }), w(y);
  });
  Ga(() => {
    x == null || x.disconnect();
  }), Ve();
  var _ = T0();
  Nt(_, 5, o, (C) => C.id, (C, y) => {
    const $ = /* @__PURE__ */ me(() => !!g(y).selected), E = /* @__PURE__ */ me(() => !!g(y).hidden), S = /* @__PURE__ */ me(() => !!(g(y).draggable || a() && typeof g(y).draggable > "u")), z = /* @__PURE__ */ me(() => !!(g(y).selectable || i() && typeof g(y).selectable > "u")), P = /* @__PURE__ */ me(() => !!(g(y).connectable || s() && typeof g(y).connectable > "u")), N = /* @__PURE__ */ me(() => g(y).deletable ?? !0), A = /* @__PURE__ */ me(() => l().has(g(y).id)), D = /* @__PURE__ */ me(() => g(y).type ?? "default"), R = /* @__PURE__ */ me(() => g(y).internals.z ?? 0), H = /* @__PURE__ */ me(() => nc(g(y)));
    Pc(C, {
      get node() {
        return g(y);
      },
      get id() {
        return g(y).id;
      },
      get data() {
        return g(y).data;
      },
      get selected() {
        return g($);
      },
      get hidden() {
        return g(E);
      },
      get draggable() {
        return g(S);
      },
      get selectable() {
        return g(z);
      },
      get connectable() {
        return g(P);
      },
      get deletable() {
        return g(N);
      },
      get positionX() {
        return g(y).internals.positionAbsolute.x;
      },
      get positionY() {
        return g(y).internals.positionAbsolute.y;
      },
      get isParent() {
        return g(A);
      },
      get style() {
        return g(y).style;
      },
      get class() {
        return g(y).class;
      },
      get type() {
        return g(D);
      },
      get sourcePosition() {
        return g(y).sourcePosition;
      },
      get targetPosition() {
        return g(y).targetPosition;
      },
      get dragging() {
        return g(y).dragging;
      },
      get zIndex() {
        return g(R);
      },
      get dragHandle() {
        return g(y).dragHandle;
      },
      get initialized() {
        return g(H);
      },
      get width() {
        return g(y).width;
      },
      get height() {
        return g(y).height;
      },
      get initialWidth() {
        return g(y).initialWidth;
      },
      get initialHeight() {
        return g(y).initialHeight;
      },
      get measuredWidth() {
        return g(y).measured.width;
      },
      get measuredHeight() {
        return g(y).measured.height;
      },
      get parentId() {
        return g(y).parentId;
      },
      resizeObserver: x,
      get nodeClickDistance() {
        return u();
      },
      $$events: {
        nodeclick(L) {
          De.call(this, t, L);
        },
        nodemouseenter(L) {
          De.call(this, t, L);
        },
        nodemousemove(L) {
          De.call(this, t, L);
        },
        nodemouseleave(L) {
          De.call(this, t, L);
        },
        nodedrag(L) {
          De.call(this, t, L);
        },
        nodedragstart(L) {
          De.call(this, t, L);
        },
        nodedragstop(L) {
          De.call(this, t, L);
        },
        nodecontextmenu(L) {
          De.call(this, t, L);
        }
      }
    });
  }), K(_), T(e, _);
  var h = le({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance(C) {
      u(C), p();
    }
  });
  return r(), h;
}
oe(Lc, { nodeClickDistance: {} }, [], [], !0);
var A0 = /* @__PURE__ */ be('<svg><g role="img"><!></g></svg>');
function Nc(e, t) {
  se(t, !1);
  const [n, r] = et(), o = () => Q(X, "$edgeTypes", n), a = () => Q(ce, "$flowId", n), i = () => Q($e, "$elementsSelectable", n), s = () => Q(U, "$edgeLookup", n), l = re(void 0, !0), u = re(void 0, !0), c = re(void 0, !0), d = re(void 0, !0), f = re(void 0, !0);
  let v = m(t, "id", 13), w = m(t, "type", 13, "default"), b = m(t, "source", 13, ""), x = m(t, "target", 13, ""), _ = m(t, "data", 29, () => ({})), h = m(t, "style", 13, void 0), C = m(t, "zIndex", 13, void 0), y = m(t, "animated", 13, !1), $ = m(t, "selected", 13, !1), E = m(t, "selectable", 13, void 0), S = m(t, "deletable", 13, void 0), z = m(t, "hidden", 13, !1), P = m(t, "label", 13, void 0), N = m(t, "labelStyle", 13, void 0), A = m(t, "markerStart", 13, void 0), D = m(t, "markerEnd", 13, void 0), R = m(t, "sourceHandle", 13, void 0), H = m(t, "targetHandle", 13, void 0), L = m(t, "sourceX", 13), k = m(t, "sourceY", 13), M = m(t, "targetX", 13), V = m(t, "targetY", 13), O = m(t, "sourcePosition", 13), Z = m(t, "targetPosition", 13), W = m(t, "ariaLabel", 13, void 0), F = m(t, "interactionWidth", 13, void 0), ie = m(t, "class", 13, "");
  Hr("svelteflow__edge_id", v());
  const {
    edgeLookup: U,
    edgeTypes: X,
    flowId: ce,
    elementsSelectable: $e
  } = qe(), _e = Di(), he = bc();
  function ve(ee) {
    const Ye = s().get(v());
    Ye && (he(v()), _e("edgeclick", { event: ee, edge: Ye }));
  }
  function te(ee, Ye) {
    const Oe = s().get(v());
    Oe && _e(Ye, { event: ee, edge: Oe });
  }
  de(() => G(w()), () => {
    q(l, w() || "default");
  }), de(
    () => (o(), g(l), xi),
    () => {
      q(u, o()[g(l)] || xi);
    }
  ), de(
    () => (G(A()), a()),
    () => {
      q(c, A() ? `url('#${Ma(A(), a())}')` : void 0);
    }
  ), de(
    () => (G(D()), a()),
    () => {
      q(d, D() ? `url('#${Ma(D(), a())}')` : void 0);
    }
  ), de(
    () => (G(E()), i()),
    () => {
      q(f, E() ?? i());
    }
  ), vt(), Ve(!0);
  var pe = Je(), Xe = xe(pe);
  {
    var Ze = (ee) => {
      var Ye = A0(), Oe = Y(Ye);
      let fe;
      var ae = Y(Oe);
      const ke = /* @__PURE__ */ me(() => S() ?? !0);
      hu(ae, () => g(u), (Ne, We) => {
        We(Ne, {
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
            return L();
          },
          get sourceY() {
            return k();
          },
          get targetX() {
            return M();
          },
          get targetY() {
            return V();
          },
          get sourcePosition() {
            return O();
          },
          get targetPosition() {
            return Z();
          },
          get animated() {
            return y();
          },
          get selected() {
            return $();
          },
          get label() {
            return P();
          },
          get labelStyle() {
            return N();
          },
          get data() {
            return _();
          },
          get style() {
            return h();
          },
          get interactionWidth() {
            return F();
          },
          get selectable() {
            return g(f);
          },
          get deletable() {
            return g(ke);
          },
          get type() {
            return g(l);
          },
          get sourceHandleId() {
            return R();
          },
          get targetHandleId() {
            return H();
          },
          get markerStart() {
            return g(c);
          },
          get markerEnd() {
            return g(d);
          }
        });
      }), K(Oe), K(Ye), Ee(
        (Ne) => {
          it(Ye, "z-index", C()), fe = Ct(Oe, 0, Cn(Ne), null, fe, {
            animated: y(),
            selected: $(),
            selectable: g(f)
          }), ue(Oe, "data-id", v()), ue(Oe, "aria-label", W() === null ? void 0 : W() ? W() : `Edge from ${b()} to ${x()}`);
        },
        [
          () => kt(["svelte-flow__edge", ie()])
        ],
        me
      ), Re("click", Oe, ve), Re("contextmenu", Oe, (Ne) => {
        te(Ne, "edgecontextmenu");
      }), Re("mouseenter", Oe, (Ne) => {
        te(Ne, "edgemouseenter");
      }), Re("mouseleave", Oe, (Ne) => {
        te(Ne, "edgemouseleave");
      }), T(ee, Ye);
    };
    Ce(Xe, (ee) => {
      z() || ee(Ze);
    });
  }
  T(e, pe);
  var Be = le({
    get id() {
      return v();
    },
    set id(ee) {
      v(ee), p();
    },
    get type() {
      return w();
    },
    set type(ee) {
      w(ee), p();
    },
    get source() {
      return b();
    },
    set source(ee) {
      b(ee), p();
    },
    get target() {
      return x();
    },
    set target(ee) {
      x(ee), p();
    },
    get data() {
      return _();
    },
    set data(ee) {
      _(ee), p();
    },
    get style() {
      return h();
    },
    set style(ee) {
      h(ee), p();
    },
    get zIndex() {
      return C();
    },
    set zIndex(ee) {
      C(ee), p();
    },
    get animated() {
      return y();
    },
    set animated(ee) {
      y(ee), p();
    },
    get selected() {
      return $();
    },
    set selected(ee) {
      $(ee), p();
    },
    get selectable() {
      return E();
    },
    set selectable(ee) {
      E(ee), p();
    },
    get deletable() {
      return S();
    },
    set deletable(ee) {
      S(ee), p();
    },
    get hidden() {
      return z();
    },
    set hidden(ee) {
      z(ee), p();
    },
    get label() {
      return P();
    },
    set label(ee) {
      P(ee), p();
    },
    get labelStyle() {
      return N();
    },
    set labelStyle(ee) {
      N(ee), p();
    },
    get markerStart() {
      return A();
    },
    set markerStart(ee) {
      A(ee), p();
    },
    get markerEnd() {
      return D();
    },
    set markerEnd(ee) {
      D(ee), p();
    },
    get sourceHandle() {
      return R();
    },
    set sourceHandle(ee) {
      R(ee), p();
    },
    get targetHandle() {
      return H();
    },
    set targetHandle(ee) {
      H(ee), p();
    },
    get sourceX() {
      return L();
    },
    set sourceX(ee) {
      L(ee), p();
    },
    get sourceY() {
      return k();
    },
    set sourceY(ee) {
      k(ee), p();
    },
    get targetX() {
      return M();
    },
    set targetX(ee) {
      M(ee), p();
    },
    get targetY() {
      return V();
    },
    set targetY(ee) {
      V(ee), p();
    },
    get sourcePosition() {
      return O();
    },
    set sourcePosition(ee) {
      O(ee), p();
    },
    get targetPosition() {
      return Z();
    },
    set targetPosition(ee) {
      Z(ee), p();
    },
    get ariaLabel() {
      return W();
    },
    set ariaLabel(ee) {
      W(ee), p();
    },
    get interactionWidth() {
      return F();
    },
    set interactionWidth(ee) {
      F(ee), p();
    },
    get class() {
      return ie();
    },
    set class(ee) {
      ie(ee), p();
    }
  });
  return r(), Be;
}
oe(
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
function Vc(e, t) {
  se(t, !1);
  let n = m(t, "onMount", 12, void 0), r = m(t, "onDestroy", 12, void 0);
  return Vt(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), Ve(), le({
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
oe(Vc, { onMount: {}, onDestroy: {} }, [], [], !0);
var I0 = /* @__PURE__ */ be("<defs></defs>");
function Dc(e, t) {
  se(t, !1);
  const [n, r] = et(), o = () => Q(a, "$markers", n), { markers: a } = qe();
  Ve();
  var i = I0();
  Nt(i, 5, o, (s) => s.id, (s, l) => {
    Tc(s, ut(() => g(l)));
  }), K(i), T(e, i), le(), r();
}
oe(Dc, {}, [], [], !0);
var Z0 = /* @__PURE__ */ be('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), B0 = /* @__PURE__ */ be('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), R0 = /* @__PURE__ */ be('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Tc(e, t) {
  se(t, !1);
  let n = m(t, "id", 12), r = m(t, "type", 12), o = m(t, "width", 12, 12.5), a = m(t, "height", 12, 12.5), i = m(t, "markerUnits", 12, "strokeWidth"), s = m(t, "orient", 12, "auto-start-reverse"), l = m(t, "color", 12, void 0), u = m(t, "strokeWidth", 12, void 0);
  Ve();
  var c = R0(), d = Y(c);
  {
    var f = (w) => {
      var b = Z0();
      Ee(() => {
        ue(b, "stroke", l()), ue(b, "stroke-width", u());
      }), T(w, b);
    }, v = (w, b) => {
      {
        var x = (_) => {
          var h = B0();
          Ee(() => {
            ue(h, "stroke", l()), ue(h, "stroke-width", u()), ue(h, "fill", l());
          }), T(_, h);
        };
        Ce(
          w,
          (_) => {
            r() === po.ArrowClosed && _(x);
          },
          b
        );
      }
    };
    Ce(d, (w) => {
      r() === po.Arrow ? w(f) : w(v, !1);
    });
  }
  return K(c), Ee(() => {
    ue(c, "id", n()), ue(c, "markerWidth", `${o()}`), ue(c, "markerHeight", `${a()}`), ue(c, "markerUnits", i()), ue(c, "orient", s());
  }), T(e, c), le({
    get id() {
      return n();
    },
    set id(w) {
      n(w), p();
    },
    get type() {
      return r();
    },
    set type(w) {
      r(w), p();
    },
    get width() {
      return o();
    },
    set width(w) {
      o(w), p();
    },
    get height() {
      return a();
    },
    set height(w) {
      a(w), p();
    },
    get markerUnits() {
      return i();
    },
    set markerUnits(w) {
      i(w), p();
    },
    get orient() {
      return s();
    },
    set orient(w) {
      s(w), p();
    },
    get color() {
      return l();
    },
    set color(w) {
      l(w), p();
    },
    get strokeWidth() {
      return u();
    },
    set strokeWidth(w) {
      u(w), p();
    }
  });
}
oe(
  Tc,
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
var K0 = /* @__PURE__ */ ne('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function Oc(e, t) {
  se(t, !1);
  const [n, r] = et(), o = () => Q(s, "$visibleEdges", n), a = () => Q(c, "$elementsSelectable", n);
  let i = m(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: s,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = qe();
  Vt(() => {
    i() && u(i());
  }), Ve();
  var d = K0(), f = Y(d), v = Y(f);
  Dc(v, {}), K(f);
  var w = I(f, 2);
  Nt(w, 1, o, (h) => h.id, (h, C) => {
    const y = /* @__PURE__ */ me(() => g(C).selectable ?? a()), $ = /* @__PURE__ */ me(() => g(C).type || "default");
    Nc(h, {
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
        return g(y);
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
        edgeclick(E) {
          De.call(this, t, E);
        },
        edgecontextmenu(E) {
          De.call(this, t, E);
        },
        edgemouseenter(E) {
          De.call(this, t, E);
        },
        edgemouseleave(E) {
          De.call(this, t, E);
        }
      }
    });
  });
  var b = I(w, 2);
  {
    var x = (h) => {
      Vc(h, {
        onMount: () => {
          si(l, !0);
        },
        onDestroy: () => {
          si(l, !1);
        }
      });
    };
    Ce(b, (h) => {
      o().length > 0 && h(x);
    });
  }
  K(d), T(e, d);
  var _ = le({
    get defaultEdgeOptions() {
      return i();
    },
    set defaultEdgeOptions(h) {
      i(h), p();
    }
  });
  return r(), _;
}
oe(Oc, { defaultEdgeOptions: {} }, [], [], !0);
var X0 = /* @__PURE__ */ ne('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const Y0 = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function ds(e, t) {
  se(t, !1), Qe(e, Y0);
  let n = m(t, "x", 12, 0), r = m(t, "y", 12, 0), o = m(t, "width", 12, 0), a = m(t, "height", 12, 0), i = m(t, "isVisible", 12, !0);
  var s = Je(), l = xe(s);
  {
    var u = (c) => {
      var d = X0();
      Ee(() => {
        it(d, "width", typeof o() == "string" ? o() : `${o()}px`), it(d, "height", typeof a() == "string" ? a() : `${a()}px`), it(d, "transform", `translate(${n()}px, ${r()}px)`);
      }), T(c, d);
    };
    Ce(l, (c) => {
      i() && c(u);
    });
  }
  return T(e, s), le({
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
      return a();
    },
    set height(c) {
      a(c), p();
    },
    get isVisible() {
      return i();
    },
    set isVisible(c) {
      i(c), p();
    }
  });
}
oe(
  ds,
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
function Ac(e, t) {
  se(t, !1);
  const [n, r] = et(), o = () => Q(i, "$selectionRect", n), a = () => Q(s, "$selectionRectMode", n), { selectionRect: i, selectionRectMode: s } = qe();
  Ve();
  const l = /* @__PURE__ */ me(() => !!(o() && a() === "user")), u = /* @__PURE__ */ me(() => {
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
  ds(e, {
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
  }), le(), r();
}
oe(Ac, {}, [], [], !0);
var W0 = /* @__PURE__ */ ne('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const j0 = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function Ic(e, t) {
  se(t, !1), Qe(e, j0);
  const [n, r] = et(), o = () => Q(l, "$selectionRectMode", n), a = () => Q(c, "$nodeLookup", n), i = () => Q(u, "$nodes", n), s = qe(), { selectionRectMode: l, nodes: u, nodeLookup: c } = s, d = Di();
  let f = re(null);
  function v(h) {
    const C = i().filter((y) => y.selected);
    d("selectioncontextmenu", { nodes: C, event: h });
  }
  function w(h) {
    const C = i().filter((y) => y.selected);
    d("selectionclick", { nodes: C, event: h });
  }
  de(
    () => (o(), a(), i()),
    () => {
      o() === "nodes" && (q(f, Eo(a(), { filter: (h) => !!h.selected })), i());
    }
  ), vt(), Ve();
  var b = Je(), x = xe(b);
  {
    var _ = (h) => {
      var C = W0(), y = Y(C);
      ds(y, { width: "100%", height: "100%", x: 0, y: 0 }), K(C), ht(C, ($, E) => $i == null ? void 0 : $i($, E), () => ({
        disabled: !1,
        store: s,
        onDrag: ($, E, S, z) => {
          d("nodedrag", { event: $, targetNode: null, nodes: z });
        },
        onDragStart: ($, E, S, z) => {
          d("nodedragstart", { event: $, targetNode: null, nodes: z });
        },
        onDragStop: ($, E, S, z) => {
          d("nodedragstop", { event: $, targetNode: null, nodes: z });
        }
      })), It(() => Re("contextmenu", C, v)), It(() => Re("click", C, w)), It(() => Re("keyup", C, () => {
      })), Ee(() => ue(C, "style", `width: ${g(f).width ?? ""}px; height: ${g(f).height ?? ""}px; transform: translate(${g(f).x ?? ""}px, ${g(f).y ?? ""}px)`)), T(h, C);
    };
    Ce(x, (h) => {
      o() === "nodes" && g(f) && Hn(g(f).x) && Hn(g(f).y) && h(_);
    });
  }
  T(e, b), le(), r();
}
oe(Ic, {}, [], [], !0);
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
      }, { modifier: d, key: f, callback: v, preventDefault: w, enabled: b } = c;
      if (b) {
        if (d.length && !(Array.isArray(d) ? d : [d]).map(
          (x) => typeof x == "string" ? [x] : x
        ).some(
          (x) => x.every((_) => l[_])
        ))
          continue;
        if (i.key === f) {
          w && i.preventDefault();
          const x = {
            node: e,
            trigger: c,
            originalEvent: i
          };
          e.dispatchEvent(new CustomEvent("shortcut", { detail: x })), v == null || v(x);
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
function Zc(e, t) {
  se(t, !1);
  let n = m(t, "selectionKey", 12, "Shift"), r = m(t, "multiSelectionKey", 28, () => mi() ? "Meta" : "Control"), o = m(t, "deleteKey", 12, "Backspace"), a = m(t, "panActivationKey", 12, " "), i = m(t, "zoomActivationKey", 28, () => mi() ? "Meta" : "Control");
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
  function w(h) {
    return v(h) ? h.modifier || [] : [];
  }
  function b(h) {
    return h == null ? "" : v(h) ? h.key : h;
  }
  function x(h, C) {
    return (Array.isArray(h) ? h : [h]).map((y) => {
      const $ = b(y);
      return {
        key: $,
        modifier: w(y),
        enabled: $ !== null,
        callback: C
      };
    });
  }
  function _() {
    f.set(null), s.set(!1), l.set(!1), u.set(!1), c.set(!1), d.set(!1);
  }
  return Ve(), Re("blur", Mt, _), Re("contextmenu", Mt, _), ht(Mt, (h, C) => lt == null ? void 0 : lt(h, C), () => ({
    trigger: x(n(), () => s.set(!0)),
    type: "keydown"
  })), ht(Mt, (h, C) => lt == null ? void 0 : lt(h, C), () => ({
    trigger: x(n(), () => s.set(!1)),
    type: "keyup"
  })), ht(Mt, (h, C) => lt == null ? void 0 : lt(h, C), () => ({
    trigger: x(r(), () => l.set(!0)),
    type: "keydown"
  })), ht(Mt, (h, C) => lt == null ? void 0 : lt(h, C), () => ({
    trigger: x(r(), () => l.set(!1)),
    type: "keyup"
  })), ht(Mt, (h, C) => lt == null ? void 0 : lt(h, C), () => ({
    trigger: x(o(), (h) => {
      !(h.originalEvent.ctrlKey || h.originalEvent.metaKey || h.originalEvent.shiftKey) && !Ep(h.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), ht(Mt, (h, C) => lt == null ? void 0 : lt(h, C), () => ({
    trigger: x(o(), () => u.set(!1)),
    type: "keyup"
  })), ht(Mt, (h, C) => lt == null ? void 0 : lt(h, C), () => ({
    trigger: x(a(), () => c.set(!0)),
    type: "keydown"
  })), ht(Mt, (h, C) => lt == null ? void 0 : lt(h, C), () => ({
    trigger: x(a(), () => c.set(!1)),
    type: "keyup"
  })), ht(Mt, (h, C) => lt == null ? void 0 : lt(h, C), () => ({
    trigger: x(i(), () => d.set(!0)),
    type: "keydown"
  })), ht(Mt, (h, C) => lt == null ? void 0 : lt(h, C), () => ({
    trigger: x(i(), () => d.set(!1)),
    type: "keyup"
  })), le({
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
      return a();
    },
    set panActivationKey(h) {
      a(h), p();
    },
    get zoomActivationKey() {
      return i();
    },
    set zoomActivationKey(h) {
      i(h), p();
    }
  });
}
oe(
  Zc,
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
var F0 = /* @__PURE__ */ be('<path fill="none" class="svelte-flow__connection-path"></path>'), q0 = /* @__PURE__ */ be('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function Bc(e, t) {
  se(t, !1);
  const [n, r] = et(), o = () => Q(v, "$connection", n), a = () => Q(w, "$connectionLineType", n), i = () => Q(d, "$width", n), s = () => Q(f, "$height", n);
  let l = m(t, "containerStyle", 12, ""), u = m(t, "style", 12, ""), c = m(t, "isCustomComponent", 12, !1);
  const {
    width: d,
    height: f,
    connection: v,
    connectionLineType: w
  } = qe();
  let b = re(null);
  de(
    () => (o(), G(c()), a(), g(b), Ea),
    () => {
      if (o().inProgress && !c()) {
        const { from: y, to: $, fromPosition: E, toPosition: S } = o(), z = {
          sourceX: y.x,
          sourceY: y.y,
          sourcePosition: E,
          targetX: $.x,
          targetY: $.y,
          targetPosition: S
        };
        switch (a()) {
          case _r.Bezier:
            ((P) => q(b, P[0]))(oc(z));
            break;
          case _r.Step:
            ((P) => q(b, P[0]))(yi({ ...z, borderRadius: 0 }));
            break;
          case _r.SmoothStep:
            ((P) => q(b, P[0]))(yi(z));
            break;
          default:
            ((P) => q(b, P[0]))(Ea(z));
        }
      }
    }
  ), vt(), Ve();
  var x = Je(), _ = xe(x);
  {
    var h = (y) => {
      var $ = q0(), E = Y($), S = Y(E);
      pt(S, t, "connectionLine", {});
      var z = I(S);
      {
        var P = (N) => {
          var A = F0();
          Ee(() => {
            ue(A, "d", g(b)), ue(A, "style", u());
          }), T(N, A);
        };
        Ce(z, (N) => {
          c() || N(P);
        });
      }
      K(E), K($), Ee(
        (N) => {
          ue($, "width", i()), ue($, "height", s()), ue($, "style", l()), Ct(E, 0, Cn(N));
        },
        [
          () => kt([
            "svelte-flow__connection",
            yp(o().isValid)
          ])
        ],
        me
      ), T(y, $);
    };
    Ce(_, (y) => {
      o().inProgress && y(h);
    });
  }
  T(e, x);
  var C = le({
    get containerStyle() {
      return l();
    },
    set containerStyle(y) {
      l(y), p();
    },
    get style() {
      return u();
    },
    set style(y) {
      u(y), p();
    },
    get isCustomComponent() {
      return c();
    },
    set isCustomComponent(y) {
      c(y), p();
    }
  });
  return r(), C;
}
oe(
  Bc,
  {
    containerStyle: {},
    style: {},
    isCustomComponent: {}
  },
  ["connectionLine"],
  [],
  !0
);
var G0 = /* @__PURE__ */ ne("<div><!></div>");
function zo(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = nt(n, ["position", "style", "class"]);
  se(t, !1);
  const [o, a] = et(), i = () => Q(d, "$selectionRectMode", o), s = re();
  let l = m(t, "position", 12, "top-right"), u = m(t, "style", 12, void 0), c = m(t, "class", 12, void 0);
  const { selectionRectMode: d } = qe();
  de(() => G(l()), () => {
    q(s, `${l()}`.split("-"));
  }), vt(), Ve();
  var f = G0();
  let v;
  var w = Y(f);
  pt(w, t, "default", {}), K(f), Ee(
    (x) => {
      v = an(f, v, {
        class: x,
        style: u(),
        ...r
      }), it(f, "pointer-events", i() ? "none" : "");
    },
    [
      () => kt([
        "svelte-flow__panel",
        c(),
        ...g(s)
      ])
    ],
    me
  ), T(e, f);
  var b = le({
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
  return a(), b;
}
oe(zo, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var U0 = /* @__PURE__ */ ne('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function Rc(e, t) {
  se(t, !1);
  let n = m(t, "proOptions", 12, void 0), r = m(t, "position", 12, "bottom-right");
  Ve();
  var o = Je(), a = xe(o);
  {
    var i = (s) => {
      zo(s, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var c = U0();
          T(l, c);
        },
        $$slots: { default: !0 }
      });
    };
    Ce(a, (s) => {
      var l;
      (l = n()) != null && l.hideAttribution || s(i);
    });
  }
  return T(e, o), le({
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
oe(Rc, { proOptions: {}, position: {} }, [], [], !0);
function $l(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: a, paneClickDistance: i }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), o !== void 0 && e.setMaxZoom(o), a !== void 0 && e.setTranslateExtent(a), i !== void 0 && e.setPaneClickDistance(i);
}
const Q0 = (e) => Object.keys(e);
function Cl(e, t) {
  Q0(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function J0() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function e2(e = "light") {
  return Wt("light", (t) => {
    if (e !== "system") {
      t(e);
      return;
    }
    const n = J0(), r = () => t(n != null && n.matches ? "dark" : "light");
    return t(n != null && n.matches ? "dark" : "light"), n == null || n.addEventListener("change", r), () => {
      n == null || n.removeEventListener("change", r);
    };
  });
}
var t2 = /* @__PURE__ */ ne('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), n2 = /* @__PURE__ */ ne("<!> <!>", 1), r2 = /* @__PURE__ */ ne("<div><!> <!> <!> <!></div>");
const o2 = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function Kc(e, t) {
  const n = C1(t), r = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), o = nt(r, [
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
  se(t, !1), Qe(e, o2);
  const [a, i] = et(), s = () => Q(C(), "$viewport", a), l = () => Q(qi, "$initialized", a), u = () => Q(g(c), "$colorModeClass", a), c = re();
  let d = m(t, "id", 12, "1"), f = m(t, "nodes", 12), v = m(t, "edges", 12), w = m(t, "fitView", 12, void 0), b = m(t, "fitViewOptions", 12, void 0), x = m(t, "minZoom", 12, void 0), _ = m(t, "maxZoom", 12, void 0), h = m(t, "initialViewport", 12, void 0), C = m(t, "viewport", 12, void 0), y = m(t, "nodeTypes", 12, void 0), $ = m(t, "edgeTypes", 12, void 0), E = m(t, "selectionKey", 12, void 0), S = m(t, "selectionMode", 12, void 0), z = m(t, "panActivationKey", 12, void 0), P = m(t, "multiSelectionKey", 12, void 0), N = m(t, "zoomActivationKey", 12, void 0), A = m(t, "nodesDraggable", 12, void 0), D = m(t, "nodesConnectable", 12, void 0), R = m(t, "nodeDragThreshold", 12, void 0), H = m(t, "elementsSelectable", 12, void 0), L = m(t, "snapGrid", 12, void 0), k = m(t, "deleteKey", 12, void 0), M = m(t, "connectionRadius", 12, void 0), V = m(t, "connectionLineType", 12, void 0), O = m(t, "connectionMode", 28, () => cr.Strict), Z = m(t, "connectionLineStyle", 12, ""), W = m(t, "connectionLineContainerStyle", 12, ""), F = m(t, "onMoveStart", 12, void 0), ie = m(t, "onMove", 12, void 0), U = m(t, "onMoveEnd", 12, void 0), X = m(t, "isValidConnection", 12, void 0), ce = m(t, "translateExtent", 12, void 0), $e = m(t, "nodeExtent", 12, void 0), _e = m(t, "onlyRenderVisibleElements", 12, void 0), he = m(t, "panOnScrollMode", 28, () => jn.Free), ve = m(t, "preventScrolling", 12, !0), te = m(t, "zoomOnScroll", 12, !0), pe = m(t, "zoomOnDoubleClick", 12, !0), Xe = m(t, "zoomOnPinch", 12, !0), Ze = m(t, "panOnScroll", 12, !1), Be = m(t, "panOnDrag", 12, !0), ee = m(t, "selectionOnDrag", 12, void 0), Ye = m(t, "autoPanOnConnect", 12, !0), Oe = m(t, "autoPanOnNodeDrag", 12, !0), fe = m(t, "onerror", 12, void 0), ae = m(t, "ondelete", 12, void 0), ke = m(t, "onedgecreate", 12, void 0), Ne = m(t, "attributionPosition", 12, void 0), We = m(t, "proOptions", 12, void 0), ct = m(t, "defaultEdgeOptions", 12, void 0), tt = m(t, "width", 12, void 0), J = m(t, "height", 12, void 0), Le = m(t, "colorMode", 12, "light"), ge = m(t, "onconnect", 12, void 0), dn = m(t, "onconnectstart", 12, void 0), Gt = m(t, "onconnectend", 12, void 0), fn = m(t, "onbeforedelete", 12, void 0), He = m(t, "oninit", 12, void 0), rt = m(t, "nodeOrigin", 12, void 0), ye = m(t, "paneClickDistance", 12, 0), ot = m(t, "nodeClickDistance", 12, 0), at = m(t, "defaultMarkerColor", 12, "#b1b1b7"), Yt = m(t, "style", 12, void 0), Yr = m(t, "class", 12, void 0), Tt = re(), St = re(), vn = re();
  const Ut = s() || h(), ft = r1(Xi) ? qe() : E0({
    nodes: j(f()),
    edges: j(v()),
    width: tt(),
    height: J(),
    fitView: w(),
    nodeOrigin: rt(),
    nodeExtent: $e()
  });
  Vt(() => (ft.width.set(g(St)), ft.height.set(g(vn)), ft.domNode.set(g(Tt)), ft.syncNodeStores(f()), ft.syncEdgeStores(v()), ft.syncViewport(C()), w() !== void 0 && ft.fitViewOnInit.set(w()), b() && ft.fitViewOptions.set(b()), $l(ft, {
    nodeTypes: y(),
    edgeTypes: $(),
    minZoom: x(),
    maxZoom: _(),
    translateExtent: ce(),
    paneClickDistance: ye()
  }), () => {
    ft.reset();
  }));
  const { initialized: qi } = ft;
  let tr = re(!1);
  de(
    () => (g(St), g(vn)),
    () => {
      g(St) !== void 0 && g(vn) !== void 0 && (ft.width.set(g(St)), ft.height.set(g(vn)));
    }
  ), de(
    () => (g(tr), l(), G(He())),
    () => {
      var B;
      !g(tr) && l() && ((B = He()) == null || B(), q(tr, !0));
    }
  ), de(
    () => (G(d()), G(V()), G(M()), G(S()), G(L()), G(at()), G(A()), G(D()), G(H()), G(_e()), G(X()), G(Ye()), G(Oe()), G(fe()), G(ae()), G(ke()), G(O()), G(R()), G(ge()), G(dn()), G(Gt()), G(fn()), G(rt()), Cl),
    () => {
      const B = {
        flowId: d(),
        connectionLineType: V(),
        connectionRadius: M(),
        selectionMode: S(),
        snapGrid: L(),
        defaultMarkerColor: at(),
        nodesDraggable: A(),
        nodesConnectable: D(),
        elementsSelectable: H(),
        onlyRenderVisibleElements: _e(),
        isValidConnection: X(),
        autoPanOnConnect: Ye(),
        autoPanOnNodeDrag: Oe(),
        onerror: fe(),
        ondelete: ae(),
        onedgecreate: ke(),
        connectionMode: O(),
        nodeDragThreshold: R(),
        onconnect: ge(),
        onconnectstart: dn(),
        onconnectend: Gt(),
        onbeforedelete: fn(),
        nodeOrigin: rt()
      };
      Cl(ft, B);
    }
  ), de(
    () => (G(y()), G($()), G(x()), G(_()), G(ce()), G(ye())),
    () => {
      $l(ft, {
        nodeTypes: y(),
        edgeTypes: $(),
        minZoom: x(),
        maxZoom: _(),
        translateExtent: ce(),
        paneClickDistance: ye()
      });
    }
  ), de(
    () => G(Le()),
    () => {
      L1(q(c, e2(Le())), "$colorModeClass", a);
    }
  ), vt(), Ve();
  var Qt = r2();
  let Do;
  var To = Y(Qt);
  Zc(To, {
    get selectionKey() {
      return E();
    },
    get deleteKey() {
      return k();
    },
    get panActivationKey() {
      return z();
    },
    get multiSelectionKey() {
      return P();
    },
    get zoomActivationKey() {
      return N();
    }
  });
  var Oo = I(To, 2);
  const Od = /* @__PURE__ */ me(() => he() === void 0 ? jn.Free : he()), Ad = /* @__PURE__ */ me(() => ve() === void 0 ? !0 : ve()), Id = /* @__PURE__ */ me(() => te() === void 0 ? !0 : te()), Zd = /* @__PURE__ */ me(() => pe() === void 0 ? !0 : pe()), Bd = /* @__PURE__ */ me(() => Xe() === void 0 ? !0 : Xe()), Rd = /* @__PURE__ */ me(() => Ze() === void 0 ? !1 : Ze()), Kd = /* @__PURE__ */ me(() => Be() === void 0 ? !0 : Be()), Xd = /* @__PURE__ */ me(() => ye() === void 0 ? 0 : ye());
  Mc(Oo, {
    initialViewport: Ut,
    get onMoveStart() {
      return F();
    },
    get onMove() {
      return ie();
    },
    get onMoveEnd() {
      return U();
    },
    get panOnScrollMode() {
      return g(Od);
    },
    get preventScrolling() {
      return g(Ad);
    },
    get zoomOnScroll() {
      return g(Id);
    },
    get zoomOnDoubleClick() {
      return g(Zd);
    },
    get zoomOnPinch() {
      return g(Bd);
    },
    get panOnScroll() {
      return g(Rd);
    },
    get panOnDrag() {
      return g(Kd);
    },
    get paneClickDistance() {
      return g(Xd);
    },
    children: (B, $w) => {
      const jd = /* @__PURE__ */ me(() => Be() === void 0 ? !0 : Be());
      Hc(B, {
        get panOnDrag() {
          return g(jd);
        },
        get selectionOnDrag() {
          return ee();
        },
        $$events: {
          paneclick(Wr) {
            De.call(this, t, Wr);
          },
          panecontextmenu(Wr) {
            De.call(this, t, Wr);
          }
        },
        children: (Wr, Cw) => {
          var ys = n2(), ws = xe(ys);
          zc(ws, {
            children: (qd, _w) => {
              var bs = t2(), xs = xe(bs);
              Oc(xs, {
                get defaultEdgeOptions() {
                  return ct();
                },
                $$events: {
                  edgeclick(Ae) {
                    De.call(this, t, Ae);
                  },
                  edgecontextmenu(Ae) {
                    De.call(this, t, Ae);
                  },
                  edgemouseenter(Ae) {
                    De.call(this, t, Ae);
                  },
                  edgemouseleave(Ae) {
                    De.call(this, t, Ae);
                  }
                }
              });
              var $s = I(xs, 2);
              Bc($s, {
                get containerStyle() {
                  return W();
                },
                get style() {
                  return Z();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (Ae, kw) => {
                    var _s = Je(), Ud = xe(_s);
                    pt(Ud, t, "connectionLine", {}), T(Ae, _s);
                  }
                }
              });
              var Cs = I($s, 6);
              Lc(Cs, {
                get nodeClickDistance() {
                  return ot();
                },
                $$events: {
                  nodeclick(Ae) {
                    De.call(this, t, Ae);
                  },
                  nodemouseenter(Ae) {
                    De.call(this, t, Ae);
                  },
                  nodemousemove(Ae) {
                    De.call(this, t, Ae);
                  },
                  nodemouseleave(Ae) {
                    De.call(this, t, Ae);
                  },
                  nodedragstart(Ae) {
                    De.call(this, t, Ae);
                  },
                  nodedrag(Ae) {
                    De.call(this, t, Ae);
                  },
                  nodedragstop(Ae) {
                    De.call(this, t, Ae);
                  },
                  nodecontextmenu(Ae) {
                    De.call(this, t, Ae);
                  }
                }
              });
              var Gd = I(Cs, 2);
              Ic(Gd, {
                $$events: {
                  selectionclick(Ae) {
                    De.call(this, t, Ae);
                  },
                  selectioncontextmenu(Ae) {
                    De.call(this, t, Ae);
                  },
                  nodedragstart(Ae) {
                    De.call(this, t, Ae);
                  },
                  nodedrag(Ae) {
                    De.call(this, t, Ae);
                  },
                  nodedragstop(Ae) {
                    De.call(this, t, Ae);
                  }
                }
              }), T(qd, bs);
            },
            $$slots: { default: !0 }
          });
          var Fd = I(ws, 2);
          Ac(Fd, {}), T(Wr, ys);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var ms = I(Oo, 2);
  Rc(ms, {
    get proOptions() {
      return We();
    },
    get position() {
      return Ne();
    }
  });
  var Yd = I(ms, 2);
  pt(Yd, t, "default", {}), K(Qt), wn(Qt, (B) => q(Tt, B), () => g(Tt)), Ee(
    (B) => Do = an(
      Qt,
      Do,
      {
        style: Yt(),
        class: B,
        "data-testid": "svelte-flow__wrapper",
        ...o,
        role: "application"
      },
      "svelte-12wlba6"
    ),
    [
      () => kt([
        "svelte-flow",
        Yr(),
        u()
      ])
    ],
    me
  ), Ds(Qt, "clientWidth", (B) => q(St, B)), Ds(Qt, "clientHeight", (B) => q(vn, B)), Re("dragover", Qt, function(B) {
    De.call(this, t, B);
  }), Re("drop", Qt, function(B) {
    De.call(this, t, B);
  }), T(e, Qt);
  var Wd = le({
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
      return w();
    },
    set fitView(B) {
      w(B), p();
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
      return _();
    },
    set maxZoom(B) {
      _(B), p();
    },
    get initialViewport() {
      return h();
    },
    set initialViewport(B) {
      h(B), p();
    },
    get viewport() {
      return C();
    },
    set viewport(B) {
      C(B), p();
    },
    get nodeTypes() {
      return y();
    },
    set nodeTypes(B) {
      y(B), p();
    },
    get edgeTypes() {
      return $();
    },
    set edgeTypes(B) {
      $(B), p();
    },
    get selectionKey() {
      return E();
    },
    set selectionKey(B) {
      E(B), p();
    },
    get selectionMode() {
      return S();
    },
    set selectionMode(B) {
      S(B), p();
    },
    get panActivationKey() {
      return z();
    },
    set panActivationKey(B) {
      z(B), p();
    },
    get multiSelectionKey() {
      return P();
    },
    set multiSelectionKey(B) {
      P(B), p();
    },
    get zoomActivationKey() {
      return N();
    },
    set zoomActivationKey(B) {
      N(B), p();
    },
    get nodesDraggable() {
      return A();
    },
    set nodesDraggable(B) {
      A(B), p();
    },
    get nodesConnectable() {
      return D();
    },
    set nodesConnectable(B) {
      D(B), p();
    },
    get nodeDragThreshold() {
      return R();
    },
    set nodeDragThreshold(B) {
      R(B), p();
    },
    get elementsSelectable() {
      return H();
    },
    set elementsSelectable(B) {
      H(B), p();
    },
    get snapGrid() {
      return L();
    },
    set snapGrid(B) {
      L(B), p();
    },
    get deleteKey() {
      return k();
    },
    set deleteKey(B) {
      k(B), p();
    },
    get connectionRadius() {
      return M();
    },
    set connectionRadius(B) {
      M(B), p();
    },
    get connectionLineType() {
      return V();
    },
    set connectionLineType(B) {
      V(B), p();
    },
    get connectionMode() {
      return O();
    },
    set connectionMode(B) {
      O(B), p();
    },
    get connectionLineStyle() {
      return Z();
    },
    set connectionLineStyle(B) {
      Z(B), p();
    },
    get connectionLineContainerStyle() {
      return W();
    },
    set connectionLineContainerStyle(B) {
      W(B), p();
    },
    get onMoveStart() {
      return F();
    },
    set onMoveStart(B) {
      F(B), p();
    },
    get onMove() {
      return ie();
    },
    set onMove(B) {
      ie(B), p();
    },
    get onMoveEnd() {
      return U();
    },
    set onMoveEnd(B) {
      U(B), p();
    },
    get isValidConnection() {
      return X();
    },
    set isValidConnection(B) {
      X(B), p();
    },
    get translateExtent() {
      return ce();
    },
    set translateExtent(B) {
      ce(B), p();
    },
    get nodeExtent() {
      return $e();
    },
    set nodeExtent(B) {
      $e(B), p();
    },
    get onlyRenderVisibleElements() {
      return _e();
    },
    set onlyRenderVisibleElements(B) {
      _e(B), p();
    },
    get panOnScrollMode() {
      return he();
    },
    set panOnScrollMode(B) {
      he(B), p();
    },
    get preventScrolling() {
      return ve();
    },
    set preventScrolling(B) {
      ve(B), p();
    },
    get zoomOnScroll() {
      return te();
    },
    set zoomOnScroll(B) {
      te(B), p();
    },
    get zoomOnDoubleClick() {
      return pe();
    },
    set zoomOnDoubleClick(B) {
      pe(B), p();
    },
    get zoomOnPinch() {
      return Xe();
    },
    set zoomOnPinch(B) {
      Xe(B), p();
    },
    get panOnScroll() {
      return Ze();
    },
    set panOnScroll(B) {
      Ze(B), p();
    },
    get panOnDrag() {
      return Be();
    },
    set panOnDrag(B) {
      Be(B), p();
    },
    get selectionOnDrag() {
      return ee();
    },
    set selectionOnDrag(B) {
      ee(B), p();
    },
    get autoPanOnConnect() {
      return Ye();
    },
    set autoPanOnConnect(B) {
      Ye(B), p();
    },
    get autoPanOnNodeDrag() {
      return Oe();
    },
    set autoPanOnNodeDrag(B) {
      Oe(B), p();
    },
    get onerror() {
      return fe();
    },
    set onerror(B) {
      fe(B), p();
    },
    get ondelete() {
      return ae();
    },
    set ondelete(B) {
      ae(B), p();
    },
    get onedgecreate() {
      return ke();
    },
    set onedgecreate(B) {
      ke(B), p();
    },
    get attributionPosition() {
      return Ne();
    },
    set attributionPosition(B) {
      Ne(B), p();
    },
    get proOptions() {
      return We();
    },
    set proOptions(B) {
      We(B), p();
    },
    get defaultEdgeOptions() {
      return ct();
    },
    set defaultEdgeOptions(B) {
      ct(B), p();
    },
    get width() {
      return tt();
    },
    set width(B) {
      tt(B), p();
    },
    get height() {
      return J();
    },
    set height(B) {
      J(B), p();
    },
    get colorMode() {
      return Le();
    },
    set colorMode(B) {
      Le(B), p();
    },
    get onconnect() {
      return ge();
    },
    set onconnect(B) {
      ge(B), p();
    },
    get onconnectstart() {
      return dn();
    },
    set onconnectstart(B) {
      dn(B), p();
    },
    get onconnectend() {
      return Gt();
    },
    set onconnectend(B) {
      Gt(B), p();
    },
    get onbeforedelete() {
      return fn();
    },
    set onbeforedelete(B) {
      fn(B), p();
    },
    get oninit() {
      return He();
    },
    set oninit(B) {
      He(B), p();
    },
    get nodeOrigin() {
      return rt();
    },
    set nodeOrigin(B) {
      rt(B), p();
    },
    get paneClickDistance() {
      return ye();
    },
    set paneClickDistance(B) {
      ye(B), p();
    },
    get nodeClickDistance() {
      return ot();
    },
    set nodeClickDistance(B) {
      ot(B), p();
    },
    get defaultMarkerColor() {
      return at();
    },
    set defaultMarkerColor(B) {
      at(B), p();
    },
    get style() {
      return Yt();
    },
    set style(B) {
      Yt(B), p();
    },
    get class() {
      return Yr();
    },
    set class(B) {
      Yr(B), p();
    }
  });
  return i(), Wd;
}
oe(
  Kc,
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
function Xc(e, t) {
  se(t, !1);
  let n = m(t, "initialNodes", 12, void 0), r = m(t, "initialEdges", 12, void 0), o = m(t, "initialWidth", 12, void 0), a = m(t, "initialHeight", 12, void 0), i = m(t, "fitView", 12, void 0), s = m(t, "nodeOrigin", 12, void 0);
  const l = Ec({
    nodes: n(),
    edges: r(),
    width: o(),
    height: a(),
    nodeOrigin: s(),
    fitView: i()
  });
  Hr(Xi, { getStore: () => l }), Ga(() => {
    l.reset();
  }), Ve();
  var u = Je(), c = xe(u);
  return pt(c, t, "default", {}), T(e, u), le({
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
      return a();
    },
    set initialHeight(d) {
      a(d), p();
    },
    get fitView() {
      return i();
    },
    set fitView(d) {
      i(d), p();
    },
    get nodeOrigin() {
      return s();
    },
    set nodeOrigin(d) {
      s(d), p();
    }
  });
}
oe(
  Xc,
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
var i2 = /* @__PURE__ */ ne("<button><!></button>");
function eo(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = nt(n, [
    "class",
    "bgColor",
    "bgColorHover",
    "color",
    "colorHover",
    "borderColor"
  ]);
  se(t, !1);
  let o = m(t, "class", 12, void 0), a = m(t, "bgColor", 12, void 0), i = m(t, "bgColorHover", 12, void 0), s = m(t, "color", 12, void 0), l = m(t, "colorHover", 12, void 0), u = m(t, "borderColor", 12, void 0);
  Ve();
  var c = i2();
  let d;
  var f = Y(c);
  return pt(f, t, "default", { class: "button-svg" }), K(c), Ee(
    (v) => {
      d = an(c, d, { type: "button", class: v, ...r }), it(c, "--xy-controls-button-background-color-props", a()), it(c, "--xy-controls-button-background-color-hover-props", i()), it(c, "--xy-controls-button-color-props", s()), it(c, "--xy-controls-button-color-hover-props", l()), it(c, "--xy-controls-button-border-color-props", u());
    },
    [
      () => kt([
        "svelte-flow__controls-button",
        o()
      ])
    ],
    me
  ), Re("click", c, function(v) {
    De.call(this, t, v);
  }), T(e, c), le({
    get class() {
      return o();
    },
    set class(v) {
      o(v), p();
    },
    get bgColor() {
      return a();
    },
    set bgColor(v) {
      a(v), p();
    },
    get bgColorHover() {
      return i();
    },
    set bgColorHover(v) {
      i(v), p();
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
oe(
  eo,
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
var a2 = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function Yc(e) {
  var t = a2();
  T(e, t);
}
oe(Yc, {}, [], [], !0);
var s2 = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Wc(e) {
  var t = s2();
  T(e, t);
}
oe(Wc, {}, [], [], !0);
var l2 = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function jc(e) {
  var t = l2();
  T(e, t);
}
oe(jc, {}, [], [], !0);
var u2 = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Fc(e) {
  var t = u2();
  T(e, t);
}
oe(Fc, {}, [], [], !0);
var c2 = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function qc(e) {
  var t = c2();
  T(e, t);
}
oe(qc, {}, [], [], !0);
var d2 = /* @__PURE__ */ ne("<!> <!>", 1), f2 = /* @__PURE__ */ ne("<!> <!> <!> <!> <!> <!>", 1);
function Gc(e, t) {
  se(t, !1);
  const [n, r] = et(), o = () => Q(V, "$nodesDraggable", n), a = () => Q(O, "$nodesConnectable", n), i = () => Q(Z, "$elementsSelectable", n), s = () => Q(L, "$viewport", n), l = () => Q(k, "$minZoom", n), u = () => Q(M, "$maxZoom", n), c = re(), d = re(), f = re(), v = re();
  let w = m(t, "position", 12, "bottom-left"), b = m(t, "showZoom", 12, !0), x = m(t, "showFitView", 12, !0), _ = m(t, "showLock", 12, !0), h = m(t, "buttonBgColor", 12, void 0), C = m(t, "buttonBgColorHover", 12, void 0), y = m(t, "buttonColor", 12, void 0), $ = m(t, "buttonColorHover", 12, void 0), E = m(t, "buttonBorderColor", 12, void 0), S = m(t, "ariaLabel", 12, void 0), z = m(t, "style", 12, void 0), P = m(t, "orientation", 12, "vertical"), N = m(t, "fitViewOptions", 12, void 0), A = m(t, "class", 12, "");
  const {
    zoomIn: D,
    zoomOut: R,
    fitView: H,
    viewport: L,
    minZoom: k,
    maxZoom: M,
    nodesDraggable: V,
    nodesConnectable: O,
    elementsSelectable: Z
  } = qe(), W = {
    bgColor: h(),
    bgColorHover: C(),
    color: y(),
    colorHover: $(),
    borderColor: E()
  }, F = () => {
    D();
  }, ie = () => {
    R();
  }, U = () => {
    H(N());
  }, X = () => {
    q(c, !g(c)), V.set(g(c)), O.set(g(c)), Z.set(g(c));
  };
  de(
    () => (o(), a(), i()),
    () => {
      q(c, o() || a() || i());
    }
  ), de(() => (s(), l()), () => {
    q(d, s().zoom <= l());
  }), de(() => (s(), u()), () => {
    q(f, s().zoom >= u());
  }), de(() => G(P()), () => {
    q(v, P() === "horizontal" ? "horizontal" : "vertical");
  }), vt(), Ve();
  const ce = /* @__PURE__ */ me(() => kt([
    "svelte-flow__controls",
    g(v),
    A()
  ])), $e = /* @__PURE__ */ me(() => S() ?? "Svelte Flow controls");
  zo(e, {
    get class() {
      return g(ce);
    },
    get position() {
      return w();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return g($e);
    },
    get style() {
      return z();
    },
    children: (he, ve) => {
      var te = f2(), pe = xe(te);
      pt(pe, t, "before", {});
      var Xe = I(pe, 2);
      {
        var Ze = (ke) => {
          var Ne = d2(), We = xe(Ne);
          eo(We, ut(
            {
              class: "svelte-flow__controls-zoomin",
              title: "zoom in",
              "aria-label": "zoom in",
              get disabled() {
                return g(f);
              }
            },
            W,
            {
              $$events: { click: F },
              children: (tt, J) => {
                Yc(tt);
              },
              $$slots: { default: !0 }
            }
          ));
          var ct = I(We, 2);
          eo(ct, ut(
            {
              class: "svelte-flow__controls-zoomout",
              title: "zoom out",
              "aria-label": "zoom out",
              get disabled() {
                return g(d);
              }
            },
            W,
            {
              $$events: { click: ie },
              children: (tt, J) => {
                Wc(tt);
              },
              $$slots: { default: !0 }
            }
          )), T(ke, Ne);
        };
        Ce(Xe, (ke) => {
          b() && ke(Ze);
        });
      }
      var Be = I(Xe, 2);
      {
        var ee = (ke) => {
          eo(ke, ut(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            W,
            {
              $$events: { click: U },
              children: (Ne, We) => {
                jc(Ne);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        Ce(Be, (ke) => {
          x() && ke(ee);
        });
      }
      var Ye = I(Be, 2);
      {
        var Oe = (ke) => {
          eo(ke, ut(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            W,
            {
              $$events: { click: X },
              children: (Ne, We) => {
                var ct = Je(), tt = xe(ct);
                {
                  var J = (ge) => {
                    qc(ge);
                  }, Le = (ge) => {
                    Fc(ge);
                  };
                  Ce(tt, (ge) => {
                    g(c) ? ge(J) : ge(Le, !1);
                  });
                }
                T(Ne, ct);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        Ce(Ye, (ke) => {
          _() && ke(Oe);
        });
      }
      var fe = I(Ye, 2);
      pt(fe, t, "default", {});
      var ae = I(fe, 2);
      pt(ae, t, "after", {}), T(he, te);
    },
    $$slots: { default: !0 }
  });
  var _e = le({
    get position() {
      return w();
    },
    set position(he) {
      w(he), p();
    },
    get showZoom() {
      return b();
    },
    set showZoom(he) {
      b(he), p();
    },
    get showFitView() {
      return x();
    },
    set showFitView(he) {
      x(he), p();
    },
    get showLock() {
      return _();
    },
    set showLock(he) {
      _(he), p();
    },
    get buttonBgColor() {
      return h();
    },
    set buttonBgColor(he) {
      h(he), p();
    },
    get buttonBgColorHover() {
      return C();
    },
    set buttonBgColorHover(he) {
      C(he), p();
    },
    get buttonColor() {
      return y();
    },
    set buttonColor(he) {
      y(he), p();
    },
    get buttonColorHover() {
      return $();
    },
    set buttonColorHover(he) {
      $(he), p();
    },
    get buttonBorderColor() {
      return E();
    },
    set buttonBorderColor(he) {
      E(he), p();
    },
    get ariaLabel() {
      return S();
    },
    set ariaLabel(he) {
      S(he), p();
    },
    get style() {
      return z();
    },
    set style(he) {
      z(he), p();
    },
    get orientation() {
      return P();
    },
    set orientation(he) {
      P(he), p();
    },
    get fitViewOptions() {
      return N();
    },
    set fitViewOptions(he) {
      N(he), p();
    },
    get class() {
      return A();
    },
    set class(he) {
      A(he), p();
    }
  });
  return r(), _e;
}
oe(
  Gc,
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
var Fn;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Fn || (Fn = {}));
var v2 = /* @__PURE__ */ be("<circle></circle>");
function Uc(e, t) {
  se(t, !1);
  let n = m(t, "radius", 12, 5), r = m(t, "class", 12, "");
  Ve();
  var o = v2();
  return Ee(
    (a) => {
      ue(o, "cx", n()), ue(o, "cy", n()), ue(o, "r", n()), Ct(o, 0, Cn(a));
    },
    [
      () => kt([
        "svelte-flow__background-pattern",
        "dots",
        r()
      ])
    ],
    me
  ), T(e, o), le({
    get radius() {
      return n();
    },
    set radius(a) {
      n(a), p();
    },
    get class() {
      return r();
    },
    set class(a) {
      r(a), p();
    }
  });
}
oe(Uc, { radius: {}, class: {} }, [], [], !0);
var g2 = /* @__PURE__ */ be("<path></path>");
function Qc(e, t) {
  se(t, !1);
  let n = m(t, "lineWidth", 12, 1), r = m(t, "dimensions", 12), o = m(t, "variant", 12, void 0), a = m(t, "class", 12, "");
  Ve();
  var i = g2();
  return Ee(
    (s) => {
      ue(i, "stroke-width", n()), ue(i, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Ct(i, 0, Cn(s));
    },
    [
      () => kt([
        "svelte-flow__background-pattern",
        o(),
        a()
      ])
    ],
    me
  ), T(e, i), le({
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
      return a();
    },
    set class(s) {
      a(s), p();
    }
  });
}
oe(
  Qc,
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
const h2 = {
  [Fn.Dots]: 1,
  [Fn.Lines]: 1,
  [Fn.Cross]: 6
};
var p2 = /* @__PURE__ */ be('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const m2 = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function Jc(e, t) {
  se(t, !1), Qe(e, m2);
  const [n, r] = et(), o = () => Q($, "$flowId", n), a = () => Q(y, "$viewport", n), i = re(), s = re(), l = re(), u = re(), c = re();
  let d = m(t, "id", 12, void 0), f = m(t, "variant", 28, () => Fn.Dots), v = m(t, "gap", 12, 20), w = m(t, "size", 12, 1), b = m(t, "lineWidth", 12, 1), x = m(t, "bgColor", 12, void 0), _ = m(t, "patternColor", 12, void 0), h = m(t, "patternClass", 12, void 0), C = m(t, "class", 12, "");
  const { viewport: y, flowId: $ } = qe(), E = w() || h2[f()], S = f() === Fn.Dots, z = f() === Fn.Cross, P = Array.isArray(v()) ? v() : [v(), v()];
  de(
    () => (o(), G(d())),
    () => {
      q(i, `background-pattern-${o()}-${d() ? d() : ""}`);
    }
  ), de(() => a(), () => {
    q(s, [
      P[0] * a().zoom || 1,
      P[1] * a().zoom || 1
    ]);
  }), de(() => a(), () => {
    q(l, E * a().zoom);
  }), de(() => (g(l), g(s)), () => {
    q(u, z ? [g(l), g(l)] : g(s));
  }), de(
    () => (g(l), g(u)),
    () => {
      q(c, S ? [
        g(l) / 2,
        g(l) / 2
      ] : [
        g(u)[0] / 2,
        g(u)[1] / 2
      ]);
    }
  ), vt(), Ve();
  var N = p2(), A = Y(N), D = Y(A);
  {
    var R = (M) => {
      const V = /* @__PURE__ */ me(() => g(l) / 2);
      Uc(M, {
        get radius() {
          return g(V);
        },
        get class() {
          return h();
        }
      });
    }, H = (M) => {
      Qc(M, {
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
    Ce(D, (M) => {
      S ? M(R) : M(H, !1);
    });
  }
  K(A);
  var L = I(A);
  K(N), Ee(
    (M) => {
      Ct(N, 0, Cn(M), "svelte-1r7pe8d"), it(N, "--xy-background-color-props", x()), it(N, "--xy-background-pattern-color-props", _()), ue(A, "id", g(i)), ue(A, "x", a().x % g(s)[0]), ue(A, "y", a().y % g(s)[1]), ue(A, "width", g(s)[0]), ue(A, "height", g(s)[1]), ue(A, "patternTransform", `translate(-${g(c)[0]},-${g(c)[1]})`), ue(L, "fill", `url(#${g(i)})`);
    },
    [
      () => kt(["svelte-flow__background", C()])
    ],
    me
  ), T(e, N);
  var k = le({
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
      return w();
    },
    set size(M) {
      w(M), p();
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
      return _();
    },
    set patternColor(M) {
      _(M), p();
    },
    get patternClass() {
      return h();
    },
    set patternClass(M) {
      h(M), p();
    },
    get class() {
      return C();
    },
    set class(M) {
      C(M), p();
    }
  });
  return r(), k;
}
oe(
  Jc,
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
var y2 = /* @__PURE__ */ be("<rect></rect>");
function ed(e, t) {
  se(t, !1);
  let n = m(t, "x", 12), r = m(t, "y", 12), o = m(t, "width", 12, 0), a = m(t, "height", 12, 0), i = m(t, "borderRadius", 12, 5), s = m(t, "color", 12, void 0), l = m(t, "shapeRendering", 12), u = m(t, "strokeColor", 12, void 0), c = m(t, "strokeWidth", 12, 2), d = m(t, "selected", 12, !1), f = m(t, "class", 12, "");
  Ve();
  var v = y2();
  let w;
  return Ee(
    (b) => {
      w = Ct(v, 0, Cn(b), null, w, { selected: d() }), ue(v, "x", n()), ue(v, "y", r()), ue(v, "rx", i()), ue(v, "ry", i()), ue(v, "width", o()), ue(v, "height", a()), ue(v, "style", `${s() ? `fill: ${s()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), ue(v, "shape-rendering", l());
    },
    [
      () => kt(["svelte-flow__minimap-node", f()])
    ],
    me
  ), T(e, v), le({
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
      return a();
    },
    set height(b) {
      a(b), p();
    },
    get borderRadius() {
      return i();
    },
    set borderRadius(b) {
      i(b), p();
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
oe(
  ed,
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
function _l(e, t) {
  const n = n0({
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
const aa = (e) => e instanceof Function ? e : () => e;
var w2 = /* @__PURE__ */ be("<title> </title>"), b2 = /* @__PURE__ */ be('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function td(e, t) {
  se(t, !1);
  const [n, r] = et(), o = () => Q(Be, "$flowId", n), a = () => Q(pe, "$viewport", n), i = () => Q(Xe, "$containerWidth", n), s = () => Q(Ze, "$containerHeight", n), l = () => Q(te, "$nodeLookup", n), u = () => Q(ve, "$nodes", n), c = () => Q(ee, "$panZoom", n), d = () => Q(Ye, "$translateExtent", n), f = re(), v = re(), w = re(), b = re(), x = re(), _ = re(), h = re(), C = re(), y = re(), $ = re(), E = re(), S = re(), z = re();
  let P = m(t, "position", 12, "bottom-right"), N = m(t, "ariaLabel", 12, "Mini map"), A = m(t, "nodeStrokeColor", 12, "transparent"), D = m(t, "nodeColor", 12, void 0), R = m(t, "nodeClass", 12, ""), H = m(t, "nodeBorderRadius", 12, 5), L = m(t, "nodeStrokeWidth", 12, 2), k = m(t, "bgColor", 12, void 0), M = m(t, "maskColor", 12, void 0), V = m(t, "maskStrokeColor", 12, void 0), O = m(t, "maskStrokeWidth", 12, void 0), Z = m(t, "width", 12, void 0), W = m(t, "height", 12, void 0), F = m(t, "pannable", 12, !0), ie = m(t, "zoomable", 12, !0), U = m(t, "inversePan", 12, void 0), X = m(t, "zoomStep", 12, void 0), ce = m(t, "style", 12, ""), $e = m(t, "class", 12, "");
  const _e = 200, he = 150, {
    nodes: ve,
    nodeLookup: te,
    viewport: pe,
    width: Xe,
    height: Ze,
    flowId: Be,
    panZoom: ee,
    translateExtent: Ye
  } = qe(), Oe = D() === void 0 ? void 0 : aa(D()), fe = aa(A()), ae = aa(R()), ke = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), Ne = `svelte-flow__minimap-desc-${o()}`;
  let We = re(g(f));
  const ct = () => g(_);
  de(
    () => (a(), i(), s()),
    () => {
      q(f, {
        x: -a().x / a().zoom,
        y: -a().y / a().zoom,
        width: i() / a().zoom,
        height: s() / a().zoom
      });
    }
  ), de(
    () => (l(), g(f), u()),
    () => {
      q(We, l().size > 0 ? ec(Eo(l()), g(f)) : g(f)), u();
    }
  ), de(() => G(Z()), () => {
    q(v, Z() ?? _e);
  }), de(() => G(W()), () => {
    q(w, W() ?? he);
  }), de(
    () => (g(We), g(v)),
    () => {
      q(b, g(We).width / g(v));
    }
  ), de(
    () => (g(We), g(w)),
    () => {
      q(x, g(We).height / g(w));
    }
  ), de(
    () => (g(b), g(x)),
    () => {
      q(_, Math.max(g(b), g(x)));
    }
  ), de(() => (g(_), g(v)), () => {
    q(h, g(_) * g(v));
  }), de(
    () => (g(_), g(w)),
    () => {
      q(C, g(_) * g(w));
    }
  ), de(() => g(_), () => {
    q(y, 5 * g(_));
  }), de(
    () => (g(We), g(h), g(y)),
    () => {
      q($, g(We).x - (g(h) - g(We).width) / 2 - g(y));
    }
  ), de(
    () => (g(We), g(C), g(y)),
    () => {
      q(E, g(We).y - (g(C) - g(We).height) / 2 - g(y));
    }
  ), de(() => (g(h), g(y)), () => {
    q(S, g(h) + g(y) * 2);
  }), de(() => (g(C), g(y)), () => {
    q(z, g(C) + g(y) * 2);
  }), vt(), Ve();
  const tt = /* @__PURE__ */ me(() => ce() + (k() ? `;--xy-minimap-background-color-props:${k()}` : "")), J = /* @__PURE__ */ me(() => kt(["svelte-flow__minimap", $e()]));
  zo(e, {
    get position() {
      return P();
    },
    get style() {
      return g(tt);
    },
    get class() {
      return g(J);
    },
    "data-testid": "svelte-flow__minimap",
    children: (ge, dn) => {
      var Gt = Je(), fn = xe(Gt);
      {
        var He = (rt) => {
          var ye = b2();
          ue(ye, "aria-labelledby", Ne);
          var ot = Y(ye);
          {
            var at = (Tt) => {
              var St = w2();
              ue(St, "id", Ne);
              var vn = Y(St, !0);
              K(St), Ee(() => Rt(vn, N())), T(Tt, St);
            };
            Ce(ot, (Tt) => {
              N() && Tt(at);
            });
          }
          var Yt = I(ot);
          Nt(Yt, 1, u, (Tt) => Tt.id, (Tt, St) => {
            var vn = Je();
            const Ut = /* @__PURE__ */ me(() => l().get(g(St).id));
            var ft = xe(vn);
            {
              var qi = (tr) => {
                const Qt = /* @__PURE__ */ me(() => er(g(Ut))), Do = /* @__PURE__ */ me(() => Oe == null ? void 0 : Oe(g(Ut))), To = /* @__PURE__ */ me(() => fe(g(Ut))), Oo = /* @__PURE__ */ me(() => ae(g(Ut)));
                ed(tr, ut(
                  {
                    get x() {
                      return g(Ut).internals.positionAbsolute.x;
                    },
                    get y() {
                      return g(Ut).internals.positionAbsolute.y;
                    }
                  },
                  () => g(Qt),
                  {
                    get selected() {
                      return g(Ut).selected;
                    },
                    get color() {
                      return g(Do);
                    },
                    get borderRadius() {
                      return H();
                    },
                    get strokeColor() {
                      return g(To);
                    },
                    get strokeWidth() {
                      return L();
                    },
                    shapeRendering: ke,
                    get class() {
                      return g(Oo);
                    }
                  }
                ));
              };
              Ce(ft, (tr) => {
                g(Ut) && nc(g(Ut)) && tr(qi);
              });
            }
            T(Tt, vn);
          });
          var Yr = I(Yt);
          K(ye), ht(ye, (Tt, St) => _l == null ? void 0 : _l(Tt, St), () => ({
            panZoom: c(),
            viewport: pe,
            getViewScale: ct,
            translateExtent: d(),
            width: i(),
            height: s(),
            inversePan: U(),
            zoomStep: X(),
            pannable: F(),
            zoomable: ie()
          })), Ee(() => {
            ue(ye, "width", g(v)), ue(ye, "height", g(w)), ue(ye, "viewBox", `${g($) ?? ""} ${g(E) ?? ""} ${g(S) ?? ""} ${g(z) ?? ""}`), it(ye, "--xy-minimap-mask-background-color-props", M()), it(ye, "--xy-minimap-mask-stroke-color-props", V()), it(ye, "--xy-minimap-mask-stroke-width-props", O() ? O() * g(_) : void 0), ue(Yr, "d", `M${g($) - g(y)},${g(E) - g(y)}h${g(S) + g(y) * 2}v${g(z) + g(y) * 2}h${-g(S) - g(y) * 2}z
      M${g(f).x ?? ""},${g(f).y ?? ""}h${g(f).width ?? ""}v${g(f).height ?? ""}h${-g(f).width}z`);
          }), T(rt, ye);
        };
        Ce(fn, (rt) => {
          c() && rt(He);
        });
      }
      T(ge, Gt);
    },
    $$slots: { default: !0 }
  });
  var Le = le({
    get position() {
      return P();
    },
    set position(ge) {
      P(ge), p();
    },
    get ariaLabel() {
      return N();
    },
    set ariaLabel(ge) {
      N(ge), p();
    },
    get nodeStrokeColor() {
      return A();
    },
    set nodeStrokeColor(ge) {
      A(ge), p();
    },
    get nodeColor() {
      return D();
    },
    set nodeColor(ge) {
      D(ge), p();
    },
    get nodeClass() {
      return R();
    },
    set nodeClass(ge) {
      R(ge), p();
    },
    get nodeBorderRadius() {
      return H();
    },
    set nodeBorderRadius(ge) {
      H(ge), p();
    },
    get nodeStrokeWidth() {
      return L();
    },
    set nodeStrokeWidth(ge) {
      L(ge), p();
    },
    get bgColor() {
      return k();
    },
    set bgColor(ge) {
      k(ge), p();
    },
    get maskColor() {
      return M();
    },
    set maskColor(ge) {
      M(ge), p();
    },
    get maskStrokeColor() {
      return V();
    },
    set maskStrokeColor(ge) {
      V(ge), p();
    },
    get maskStrokeWidth() {
      return O();
    },
    set maskStrokeWidth(ge) {
      O(ge), p();
    },
    get width() {
      return Z();
    },
    set width(ge) {
      Z(ge), p();
    },
    get height() {
      return W();
    },
    set height(ge) {
      W(ge), p();
    },
    get pannable() {
      return F();
    },
    set pannable(ge) {
      F(ge), p();
    },
    get zoomable() {
      return ie();
    },
    set zoomable(ge) {
      ie(ge), p();
    },
    get inversePan() {
      return U();
    },
    set inversePan(ge) {
      U(ge), p();
    },
    get zoomStep() {
      return X();
    },
    set zoomStep(ge) {
      X(ge), p();
    },
    get style() {
      return ce();
    },
    set style(ge) {
      ce(ge), p();
    },
    get class() {
      return $e();
    },
    set class(ge) {
      $e(ge), p();
    }
  });
  return r(), Le;
}
oe(
  td,
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
const kl = (e) => bp(e);
function Dt() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: a, width: i, height: s, minZoom: l, maxZoom: u, panZoom: c, nodes: d, edges: f, domNode: v, nodeLookup: w, nodeOrigin: b, edgeLookup: x, connectionLookup: _ } = qe(), h = ($) => {
    var E, S;
    const z = j(w), P = kl($) ? $ : z.get($.id), N = P.parentId ? _p(P.position, P.measured, P.parentId, z, j(b)) : P.position, A = {
      ...P,
      position: N,
      width: ((E = P.measured) == null ? void 0 : E.width) ?? P.width,
      height: ((S = P.measured) == null ? void 0 : S.height) ?? P.height
    };
    return Vr(A);
  }, C = ($, E, S = { replace: !1 }) => {
    var z;
    const P = (z = j(w).get($)) == null ? void 0 : z.internals.userNode;
    if (!P)
      return;
    const N = typeof E == "function" ? E(P) : E;
    S.replace ? d.update((A) => A.map((D) => D.id === $ ? kl(N) ? N : { ...D, ...N } : D)) : (Object.assign(P, N), d.update((A) => A));
  }, y = ($) => j(w).get($);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: y,
    getNode: ($) => {
      var E;
      return (E = y($)) == null ? void 0 : E.internals.userNode;
    },
    getNodes: ($) => $ === void 0 ? j(d) : Sl(j(w), $),
    getEdge: ($) => j(x).get($),
    getEdges: ($) => $ === void 0 ? j(f) : Sl(j(x), $),
    setZoom: ($, E) => {
      const S = j(c);
      return S ? S.scaleTo($, { duration: E == null ? void 0 : E.duration }) : Promise.resolve(!1);
    },
    getZoom: () => j(a).zoom,
    setViewport: async ($, E) => {
      const S = j(a), z = j(c);
      return z ? (await z.setViewport({
        x: $.x ?? S.x,
        y: $.y ?? S.y,
        zoom: $.zoom ?? S.zoom
      }, { duration: E == null ? void 0 : E.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => j(a),
    setCenter: async ($, E, S) => {
      const z = typeof (S == null ? void 0 : S.zoom) < "u" ? S.zoom : j(u), P = j(c);
      return P ? (await P.setViewport({
        x: j(i) / 2 - $ * z,
        y: j(s) / 2 - E * z,
        zoom: z
      }, { duration: S == null ? void 0 : S.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async ($, E) => {
      const S = j(c);
      if (!S)
        return Promise.resolve(!1);
      const z = as($, j(i), j(s), j(l), j(u), (E == null ? void 0 : E.padding) ?? 0.1);
      return await S.setViewport(z, { duration: E == null ? void 0 : E.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: ($, E = !0, S) => {
      const z = sl($), P = z ? $ : h($);
      return P ? (S || j(d)).filter((N) => {
        const A = j(w).get(N.id);
        if (!A || !z && N.id === $.id)
          return !1;
        const D = Vr(A), R = mo(D, P);
        return E && R > 0 || R >= P.width * P.height;
      }) : [];
    },
    isNodeIntersecting: ($, E, S = !0) => {
      const z = sl($) ? $ : h($);
      if (!z)
        return !1;
      const P = mo(z, E);
      return S && P > 0 || P >= z.width * z.height;
    },
    deleteElements: async ({ nodes: $ = [], edges: E = [] }) => {
      const { nodes: S, edges: z } = await Uu({
        nodesToRemove: $,
        edgesToRemove: E,
        nodes: j(d),
        edges: j(f),
        onBeforeDelete: j(r)
      });
      return S && d.update((P) => P.filter((N) => !S.some(({ id: A }) => A === N.id))), z && f.update((P) => P.filter((N) => !z.some(({ id: A }) => A === N.id))), {
        deletedNodes: S,
        deletedEdges: z
      };
    },
    screenToFlowPosition: ($, E = { snapToGrid: !0 }) => {
      const S = j(v);
      if (!S)
        return $;
      const z = E.snapToGrid ? j(o) : !1, { x: P, y: N, zoom: A } = j(a), { x: D, y: R } = S.getBoundingClientRect(), H = {
        x: $.x - D,
        y: $.y - R
      };
      return Mo(H, [P, N, A], z !== null, z || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: ($) => {
      const E = j(v);
      if (!E)
        return $;
      const { x: S, y: z, zoom: P } = j(a), { x: N, y: A } = E.getBoundingClientRect(), D = tc($, [S, z, P]);
      return {
        x: D.x + N,
        y: D.y + A
      };
    },
    toObject: () => ({
      nodes: j(d).map(($) => ({
        ...$,
        // we want to make sure that changes to the nodes object that gets returned by toObject
        // do not affect the nodes object
        position: { ...$.position },
        data: { ...$.data }
      })),
      edges: j(f).map(($) => ({ ...$ })),
      viewport: { ...j(a) }
    }),
    updateNode: C,
    updateNodeData: ($, E, S) => {
      var z;
      const P = (z = j(w).get($)) == null ? void 0 : z.internals.userNode;
      if (!P)
        return;
      const N = typeof E == "function" ? E(P) : E;
      P.data = S != null && S.replace ? N : { ...P.data, ...N }, d.update((A) => A);
    },
    getNodesBounds: ($) => {
      const E = j(w), S = j(b);
      return xp($, { nodeLookup: E, nodeOrigin: S });
    },
    getHandleConnections: ({ type: $, id: E, nodeId: S }) => {
      var z;
      return Array.from(((z = j(_).get(`${S}-${$}-${E ?? null}`)) == null ? void 0 : z.values()) ?? []);
    },
    viewport: a
  };
}
function Sl(e, t) {
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
var x2 = /* @__PURE__ */ ne('<div class="svelte-flow__node-toolbar"><!></div>');
function nd(e, t) {
  se(t, !1);
  const [n, r] = et(), o = () => Q(C, "$nodes", n), a = () => Q(h, "$nodeLookup", n), i = () => Q(_, "$viewport", n), s = () => Q(x, "$domNode", n), l = re(), u = re(), c = re();
  let d = m(t, "nodeId", 12, void 0), f = m(t, "position", 12, void 0), v = m(t, "align", 12, void 0), w = m(t, "offset", 12, void 0), b = m(t, "isVisible", 12, void 0);
  const { domNode: x, viewport: _, nodeLookup: h, nodes: C } = qe(), { getNodesBounds: y } = Dt(), $ = sr("svelteflow__node_id");
  let E = re(), S = re([]), z = w() !== void 0 ? w() : 10, P = f() !== void 0 ? f() : Se.Top, N = v() !== void 0 ? v() : "center";
  de(
    () => (o(), G(d()), a()),
    () => {
      o();
      const L = Array.isArray(d()) ? d() : [d() || $];
      q(S, L.reduce(
        (k, M) => {
          const V = a().get(M);
          return V && k.push(V), k;
        },
        []
      ));
    }
  ), de(
    () => (g(S), i()),
    () => {
      const L = y(g(S));
      L && q(E, Ip(L, i(), P, z, N));
    }
  ), de(() => g(S), () => {
    q(l, g(S).length === 0 ? 1 : Math.max(...g(S).map((L) => (L.internals.z || 5) + 1)));
  }), de(() => o(), () => {
    q(u, o().filter((L) => L.selected).length);
  }), de(
    () => (G(b()), g(S), g(u)),
    () => {
      q(c, typeof b() == "boolean" ? b() : g(S).length === 1 && g(S)[0].selected && g(u) === 1);
    }
  ), vt(), Ve();
  var A = Je(), D = xe(A);
  {
    var R = (L) => {
      var k = x2(), M = Y(k);
      pt(M, t, "default", {}), K(k), ht(k, (V, O) => bi == null ? void 0 : bi(V, O), () => ({ domNode: s() })), Ee(
        (V) => {
          ue(k, "data-id", V), it(k, "position", "absolute"), it(k, "transform", g(E)), it(k, "z-index", g(l));
        },
        [
          () => g(S).reduce((V, O) => `${V}${O.id} `, "").trim()
        ],
        me
      ), T(L, k);
    };
    Ce(D, (L) => {
      s() && g(c) && g(S) && L(R);
    });
  }
  T(e, A);
  var H = le({
    get nodeId() {
      return d();
    },
    set nodeId(L) {
      d(L), p();
    },
    get position() {
      return f();
    },
    set position(L) {
      f(L), p();
    },
    get align() {
      return v();
    },
    set align(L) {
      v(L), p();
    },
    get offset() {
      return w();
    },
    set offset(L) {
      w(L), p();
    },
    get isVisible() {
      return b();
    },
    set isVisible(L) {
      b(L), p();
    }
  });
  return r(), H;
}
oe(
  nd,
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
  return Wn([t, n], ([, a], i) => {
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
    (!jp(l, r) || o) && (r = l, i(u ? l : l[0] ?? null), o = !1);
  });
}
const El = "tinyflow-component";
class $2 {
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
    const t = document.createElement(El);
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
    const n = document.createElement(El);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const C2 = () => {
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
}, Qo = C2();
var _2 = /* @__PURE__ */ ne("<button><!></button>");
function Fe(e, t) {
  se(t, !0);
  const n = m(t, "children", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = _2();
  let a;
  var i = Y(o);
  return lr(i, () => n() ?? dt), K(o), Ee(() => a = an(o, a, {
    type: "button",
    ...r,
    class: `tf-btn nopan nodrag ${t.class ?? ""}`
  })), T(e, o), le({
    get children() {
      return n();
    },
    set children(s) {
      n(s), p();
    }
  });
}
oe(Fe, { children: {} }, [], [], !0);
var k2 = /* @__PURE__ */ ne("<input>");
function rd(e, t) {
  se(t, !0);
  const n = /* @__PURE__ */ yt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = k2();
  no(r);
  let o;
  Ee(() => o = an(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), T(e, r), le();
}
oe(rd, {}, [], [], !0);
var S2 = /* @__PURE__ */ ne("<input>");
function bt(e, t) {
  se(t, !0);
  const n = /* @__PURE__ */ yt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = S2();
  no(r);
  let o;
  Ee(() => o = an(r, o, {
    type: "text",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), T(e, r), le();
}
oe(bt, {}, [], [], !0);
var E2 = /* @__PURE__ */ ne("<textarea></textarea>");
function _t(e, t) {
  se(t, !0);
  const n = /* @__PURE__ */ yt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = E2();
  h1(r);
  let o;
  Ee(() => o = an(r, o, {
    ...n,
    class: `tf-textarea nodrag ${t.class ?? ""}`
  })), T(e, r), le();
}
oe(_t, {}, [], [], !0);
var M2 = /* @__PURE__ */ ne('<div role="button"><!></div>'), H2 = /* @__PURE__ */ ne("<div></div>");
function od(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = nt(n, ["items", "onChange", "activeIndex"]);
  se(t, !1);
  let o = m(t, "items", 28, () => []), a = m(t, "onChange", 12, () => {
  }), i = m(t, "activeIndex", 12, 0);
  function s(c, d) {
    var f;
    i(d), (f = a()) == null || f(c, d);
  }
  Ve();
  var l = H2();
  let u;
  return Nt(l, 5, o, uo, (c, d, f) => {
    var v = M2();
    ue(v, "tabindex", f), v.__click = () => s(g(d), f), v.__keydown = (_) => {
      (_.key === "Enter" || _.key === " ") && (_.preventDefault(), s(g(d), f));
    };
    var w = Y(v);
    {
      var b = (_) => {
        var h = Ie();
        Ee(() => Rt(h, g(d).label)), T(_, h);
      }, x = (_) => {
        var h = Je(), C = xe(h);
        lr(C, () => g(d).label ?? dt), T(_, h);
      };
      Ce(w, (_) => {
        typeof g(d).label == "string" ? _(b) : _(x, !1);
      });
    }
    K(v), Ee(() => Ct(v, 1, `tf-tabs-item ${(f === i() ? "active" : "") ?? ""}`)), T(c, v);
  }), K(l), Ee(() => u = an(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), T(e, l), le({
    get items() {
      return o();
    },
    set items(c) {
      o(c), p();
    },
    get onChange() {
      return a();
    },
    set onChange(c) {
      a(c), p();
    },
    get activeIndex() {
      return i();
    },
    set activeIndex(c) {
      i(c), p();
    }
  });
}
Vi(["click", "keydown"]);
oe(od, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var z2 = (e, t, n) => t(g(n)), P2 = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(g(n)));
}, L2 = /* @__PURE__ */ ne('<span class="tf-collapse-item-title-icon"><!></span>'), N2 = /* @__PURE__ */ ne('<div class="tf-collapse-item-description"><!></div>'), V2 = /* @__PURE__ */ ne('<div class="tf-collapse-item-content"><!></div>'), D2 = /* @__PURE__ */ ne('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), T2 = /* @__PURE__ */ ne("<div></div>");
const O2 = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function id(e, t) {
  se(t, !0), Qe(e, O2);
  let n = m(t, "items", 7), r = m(t, "onChange", 7), o = m(t, "activeKeys", 31, () => At([]));
  function a(s) {
    var l;
    o().includes(s.key) ? o(o().filter((u) => u !== s.key)) : (o().push(s.key), o(o())), (l = r()) == null || l(s, o());
  }
  var i = T2();
  return Nt(i, 21, n, uo, (s, l, u) => {
    var c = D2(), d = Y(c);
    ue(d, "tabindex", u), d.__click = [z2, a, l], d.__keydown = [P2, a, l];
    var f = Y(d);
    {
      var v = (y) => {
        var $ = L2(), E = Y($);
        Xn(E, {
          get target() {
            return g(l).icon;
          }
        }), K($), T(y, $);
      };
      Ce(f, (y) => {
        g(l).icon && y(v);
      });
    }
    var w = I(f, 2);
    Xn(w, {
      get target() {
        return g(l).title;
      }
    });
    var b = I(w, 2);
    K(d);
    var x = I(d, 2);
    {
      var _ = (y) => {
        var $ = N2(), E = Y($);
        Xn(E, {
          get target() {
            return g(l).description;
          }
        }), K($), T(y, $);
      };
      Ce(x, (y) => {
        g(l).description && y(_);
      });
    }
    var h = I(x, 2);
    {
      var C = (y) => {
        var $ = V2(), E = Y($);
        Xn(E, {
          get target() {
            return g(l).content;
          }
        }), K($), T(y, $);
      };
      Ce(h, (y) => {
        o().includes(g(l).key) && y(C);
      });
    }
    K(c), Ee((y) => Ct(b, 1, `tf-collapse-item-title-arrow ${y ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(g(l).key) ? "rotate-90" : ""
    ]), T(s, c);
  }), K(i), Ee(() => {
    ue(i, "style", t.style), Ct(i, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), T(e, i), le({
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
Vi(["click", "keydown"]);
oe(id, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Xn(e, t) {
  se(t, !0);
  let n = m(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = Je(), o = xe(r);
  {
    var a = (s) => {
      var l = Je(), u = xe(l);
      lr(u, () => n() ?? dt), T(s, l);
    }, i = (s) => {
      var l = Je(), u = xe(l);
      gu(u, n), T(s, l);
    };
    Ce(o, (s) => {
      typeof n() == "function" ? s(a) : s(i, !1);
    });
  }
  return T(e, r), le({
    get target() {
      return n();
    },
    set target(s) {
      n(s), p();
    }
  });
}
oe(Xn, { target: {} }, [], [], !0);
var A2 = (e, t, n) => t(g(n)), I2 = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), Z2 = /* @__PURE__ */ ne('<div class="tf-select-content-children"><!></div>'), B2 = /* @__PURE__ */ ne('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), R2 = /* @__PURE__ */ ne('<div class="tf-select-content nopan nodrag"><!></div>'), K2 = /* @__PURE__ */ ne("<!> <!>", 1), X2 = /* @__PURE__ */ ne('<div class="tf-select-input-placeholder"> </div>'), Y2 = /* @__PURE__ */ ne('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), W2 = /* @__PURE__ */ ne("<div><!></div>");
function bn(e, t) {
  se(t, !0);
  const n = (C, y = dt) => {
    var $ = Je(), E = xe($);
    Nt(E, 19, y, (S, z) => `${z}_${S.value}`, (S, z) => {
      var P = B2(), N = xe(P);
      N.__click = [A2, b, z];
      var A = Y(N), D = Y(A);
      {
        var R = (M) => {
          var V = I2();
          T(M, V);
        };
        Ce(D, (M) => {
          g(z).children && g(z).children.length > 0 && M(R);
        });
      }
      K(A);
      var H = I(A, 2);
      Xn(H, {
        get target() {
          return g(z).label;
        }
      }), K(N);
      var L = I(N, 2);
      {
        var k = (M) => {
          var V = Z2(), O = Y(V);
          n(O, () => g(z).children), K(V), T(M, V);
        };
        Ce(L, (M) => {
          g(z).children && g(z).children.length > 0 && (l() || c().includes(g(z).value)) && M(k);
        });
      }
      T(S, P);
    }), T(C, $);
  };
  let r = m(t, "items", 7), o = m(t, "onExpand", 7), a = m(t, "onSelect", 7), i = m(t, "value", 23, () => []), s = m(t, "defaultValue", 23, () => []), l = m(t, "expandAll", 7, !0), u = m(t, "multiple", 7, !1), c = m(t, "expandValue", 23, () => []), d = m(t, "placeholder", 7), f = /* @__PURE__ */ yt(t, [
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
  ]), v = /* @__PURE__ */ Pe(() => {
    const C = [], y = ($) => {
      for (let E of $)
        i().length > 0 ? i().includes(E.value) && C.push(E) : s().includes(E.value) && C.push(E), E.children && E.children.length > 0 && y(E.children);
    };
    return y(r()), C;
  }), w;
  function b(C) {
    var y, $;
    if (C.children && C.children.length > 0) {
      (y = o()) == null || y(C);
      return;
    } else
      w == null || w.hide(), ($ = a()) == null || $(C);
  }
  var x = W2();
  let _;
  var h = Y(x);
  return wn(
    Vo(h, {
      floating: (C) => {
        var y = R2(), $ = Y(y);
        n($, r), K(y), T(C, y);
      },
      children: (C, y) => {
        var $ = Y2();
        let E;
        var S = Y($);
        Nt(
          S,
          23,
          () => g(v),
          (z, P) => `${P}_${z.value}`,
          (z, P, N) => {
            var A = Je(), D = xe(A);
            {
              var R = (L) => {
                var k = Je(), M = xe(k);
                {
                  var V = (O) => {
                    Xn(O, {
                      get target() {
                        return g(P).label;
                      }
                    });
                  };
                  Ce(M, (O) => {
                    g(N) === 0 && O(V);
                  });
                }
                T(L, k);
              }, H = (L) => {
                var k = K2(), M = xe(k);
                Xn(M, {
                  get target() {
                    return g(P).label;
                  }
                });
                var V = I(M, 2);
                {
                  var O = (Z) => {
                    var W = Ie(",");
                    T(Z, W);
                  };
                  Ce(V, (Z) => {
                    g(N) < g(v).length - 1 && Z(O);
                  });
                }
                T(L, k);
              };
              Ce(D, (L) => {
                u() ? L(H, !1) : L(R);
              });
            }
            T(z, A);
          },
          (z) => {
            var P = X2(), N = Y(P, !0);
            K(P), Ee(() => Rt(N, d())), T(z, P);
          }
        ), K(S), ze(2), K($), Ee(() => E = an($, E, {
          class: "tf-select-input nopan nodrag",
          ...f
        })), T(C, $);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (C) => w = C,
    () => w
  ), K(x), Ee(() => _ = an(x, _, {
    ...f,
    class: `tf-select ${f.class ?? ""}`
  })), T(e, x), le({
    get items() {
      return r();
    },
    set items(C) {
      r(C), p();
    },
    get onExpand() {
      return o();
    },
    set onExpand(C) {
      o(C), p();
    },
    get onSelect() {
      return a();
    },
    set onSelect(C) {
      a(C), p();
    },
    get value() {
      return i();
    },
    set value(C = []) {
      i(C), p();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue(C = []) {
      s(C), p();
    },
    get expandAll() {
      return l();
    },
    set expandAll(C = !0) {
      l(C), p();
    },
    get multiple() {
      return u();
    },
    set multiple(C = !1) {
      u(C), p();
    },
    get expandValue() {
      return c();
    },
    set expandValue(C = []) {
      c(C), p();
    },
    get placeholder() {
      return d();
    },
    set placeholder(C) {
      d(C), p();
    }
  });
}
Vi(["click"]);
oe(
  bn,
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
const wo = Math.min, kr = Math.max, Ci = Math.round, pn = (e) => ({
  x: e,
  y: e
}), j2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, F2 = {
  start: "end",
  end: "start"
};
function Ha(e, t, n) {
  return kr(e, wo(t, n));
}
function Po(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function fr(e) {
  return e.split("-")[0];
}
function Lo(e) {
  return e.split("-")[1];
}
function ad(e) {
  return e === "x" ? "y" : "x";
}
function fs(e) {
  return e === "y" ? "height" : "width";
}
function Tr(e) {
  return ["top", "bottom"].includes(fr(e)) ? "y" : "x";
}
function vs(e) {
  return ad(Tr(e));
}
function q2(e, t, n) {
  n === void 0 && (n = !1);
  const r = Lo(e), o = vs(e), a = fs(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = _i(i)), [i, _i(i)];
}
function G2(e) {
  const t = _i(e);
  return [za(e), t, za(t)];
}
function za(e) {
  return e.replace(/start|end/g, (t) => F2[t]);
}
function U2(e, t, n) {
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
function Q2(e, t, n, r) {
  const o = Lo(e);
  let a = U2(fr(e), n === "start", r);
  return o && (a = a.map((i) => i + "-" + o), t && (a = a.concat(a.map(za)))), a;
}
function _i(e) {
  return e.replace(/left|right|bottom|top/g, (t) => j2[t]);
}
function J2(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function sd(e) {
  return typeof e != "number" ? J2(e) : {
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
function Ml(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = Tr(t), i = vs(t), s = fs(i), l = fr(t), u = a === "y", c = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[s] / 2 - o[s] / 2;
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
  switch (Lo(t)) {
    case "start":
      v[i] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      v[i] += f * (n && u ? -1 : 1);
      break;
  }
  return v;
}
const em = async (e, t, n) => {
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
  } = Ml(u, r, l), f = r, v = {}, w = 0;
  for (let b = 0; b < s.length; b++) {
    const {
      name: x,
      fn: _
    } = s[b], {
      x: h,
      y: C,
      data: y,
      reset: $
    } = await _({
      x: c,
      y: d,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: v,
      rects: u,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = h ?? c, d = C ?? d, v = {
      ...v,
      [x]: {
        ...v[x],
        ...y
      }
    }, $ && w <= 50 && (w++, typeof $ == "object" && ($.placement && (f = $.placement), $.rects && (u = $.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : $.rects), {
      x: c,
      y: d
    } = Ml(u, f, l)), b = -1);
  }
  return {
    x: c,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: v
  };
};
async function ld(e, t) {
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
    padding: v = 0
  } = Po(t, e), w = sd(v), b = s[f ? d === "floating" ? "reference" : "floating" : d], x = ki(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(b))) == null || n ? b : b.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), _ = d === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, h = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), C = await (a.isElement == null ? void 0 : a.isElement(h)) ? await (a.getScale == null ? void 0 : a.getScale(h)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, y = ki(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: _,
    offsetParent: h,
    strategy: l
  }) : _);
  return {
    top: (x.top - y.top + w.top) / C.y,
    bottom: (y.bottom - x.bottom + w.bottom) / C.y,
    left: (x.left - y.left + w.left) / C.x,
    right: (y.right - x.right + w.right) / C.x
  };
}
const tm = (e) => ({
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
    } = Po(e, t) || {};
    if (u == null)
      return {};
    const d = sd(c), f = {
      x: n,
      y: r
    }, v = vs(o), w = fs(v), b = await i.getDimensions(u), x = v === "y", _ = x ? "top" : "left", h = x ? "bottom" : "right", C = x ? "clientHeight" : "clientWidth", y = a.reference[w] + a.reference[v] - f[v] - a.floating[w], $ = f[v] - a.reference[v], E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let S = E ? E[C] : 0;
    (!S || !await (i.isElement == null ? void 0 : i.isElement(E))) && (S = s.floating[C] || a.floating[w]);
    const z = y / 2 - $ / 2, P = S / 2 - b[w] / 2 - 1, N = wo(d[_], P), A = wo(d[h], P), D = N, R = S - b[w] - A, H = S / 2 - b[w] / 2 + z, L = Ha(D, H, R), k = !l.arrow && Lo(o) != null && H !== L && a.reference[w] / 2 - (H < D ? N : A) - b[w] / 2 < 0, M = k ? H < D ? H - D : H - R : 0;
    return {
      [v]: f[v] + M,
      data: {
        [v]: L,
        centerOffset: H - L - M,
        ...k && {
          alignmentOffset: M
        }
      },
      reset: k
    };
  }
}), nm = function(e) {
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
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: w = "none",
        flipAlignment: b = !0,
        ...x
      } = Po(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const _ = fr(o), h = Tr(s), C = fr(s) === s, y = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), $ = f || (C || !b ? [_i(s)] : G2(s)), E = w !== "none";
      !f && E && $.push(...Q2(s, b, w, y));
      const S = [s, ...$], z = await ld(t, x), P = [];
      let N = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (c && P.push(z[_]), d) {
        const H = q2(o, i, y);
        P.push(z[H[0]], z[H[1]]);
      }
      if (N = [...N, {
        placement: o,
        overflows: P
      }], !P.every((H) => H <= 0)) {
        var A, D;
        const H = (((A = a.flip) == null ? void 0 : A.index) || 0) + 1, L = S[H];
        if (L)
          return {
            data: {
              index: H,
              overflows: N
            },
            reset: {
              placement: L
            }
          };
        let k = (D = N.filter((M) => M.overflows[0] <= 0).sort((M, V) => M.overflows[1] - V.overflows[1])[0]) == null ? void 0 : D.placement;
        if (!k)
          switch (v) {
            case "bestFit": {
              var R;
              const M = (R = N.filter((V) => {
                if (E) {
                  const O = Tr(V.placement);
                  return O === h || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  O === "y";
                }
                return !0;
              }).map((V) => [V.placement, V.overflows.filter((O) => O > 0).reduce((O, Z) => O + Z, 0)]).sort((V, O) => V[1] - O[1])[0]) == null ? void 0 : R[0];
              M && (k = M);
              break;
            }
            case "initialPlacement":
              k = s;
              break;
          }
        if (o !== k)
          return {
            reset: {
              placement: k
            }
          };
      }
      return {};
    }
  };
};
async function rm(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = fr(n), s = Lo(n), l = Tr(n) === "y", u = ["left", "top"].includes(i) ? -1 : 1, c = a && l ? -1 : 1, d = Po(t, e);
  let {
    mainAxis: f,
    crossAxis: v,
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
  return s && typeof w == "number" && (v = s === "end" ? w * -1 : w), l ? {
    x: v * c,
    y: f * u
  } : {
    x: f * u,
    y: v * c
  };
}
const om = function(e) {
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
      } = t, l = await rm(t, e);
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
}, im = function(e) {
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
          fn: (x) => {
            let {
              x: _,
              y: h
            } = x;
            return {
              x: _,
              y: h
            };
          }
        },
        ...l
      } = Po(e, t), u = {
        x: n,
        y: r
      }, c = await ld(t, l), d = Tr(fr(o)), f = ad(d);
      let v = u[f], w = u[d];
      if (a) {
        const x = f === "y" ? "top" : "left", _ = f === "y" ? "bottom" : "right", h = v + c[x], C = v - c[_];
        v = Ha(h, v, C);
      }
      if (i) {
        const x = d === "y" ? "top" : "left", _ = d === "y" ? "bottom" : "right", h = w + c[x], C = w - c[_];
        w = Ha(h, w, C);
      }
      const b = s.fn({
        ...t,
        [f]: v,
        [d]: w
      });
      return {
        ...b,
        data: {
          x: b.x - n,
          y: b.y - r,
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
function Xr(e) {
  return ud(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Kt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function An(e) {
  var t;
  return (t = (ud(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ud(e) {
  return Yi() ? e instanceof Node || e instanceof Kt(e).Node : !1;
}
function sn(e) {
  return Yi() ? e instanceof Element || e instanceof Kt(e).Element : !1;
}
function xn(e) {
  return Yi() ? e instanceof HTMLElement || e instanceof Kt(e).HTMLElement : !1;
}
function Hl(e) {
  return !Yi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Kt(e).ShadowRoot;
}
function No(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = ln(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function am(e) {
  return ["table", "td", "th"].includes(Xr(e));
}
function Wi(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function gs(e) {
  const t = hs(), n = sn(e) ? ln(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function sm(e) {
  let t = Qn(e);
  for (; xn(t) && !Or(t); ) {
    if (gs(t))
      return t;
    if (Wi(t))
      return null;
    t = Qn(t);
  }
  return null;
}
function hs() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Or(e) {
  return ["html", "body", "#document"].includes(Xr(e));
}
function ln(e) {
  return Kt(e).getComputedStyle(e);
}
function ji(e) {
  return sn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Qn(e) {
  if (Xr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Hl(e) && e.host || // Fallback.
    An(e)
  );
  return Hl(t) ? t.host : t;
}
function cd(e) {
  const t = Qn(e);
  return Or(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : xn(t) && No(t) ? t : cd(t);
}
function dd(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = cd(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = Kt(o);
  return a ? (Pa(i), t.concat(i, i.visualViewport || [], No(o) ? o : [], [])) : t.concat(o, dd(o, []));
}
function Pa(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function fd(e) {
  const t = ln(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = xn(e), a = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, s = Ci(n) !== a || Ci(r) !== i;
  return s && (n = a, r = i), {
    width: n,
    height: r,
    $: s
  };
}
function vd(e) {
  return sn(e) ? e : e.contextElement;
}
function Sr(e) {
  const t = vd(e);
  if (!xn(t))
    return pn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = fd(t);
  let i = (a ? Ci(n.width) : n.width) / r, s = (a ? Ci(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const lm = /* @__PURE__ */ pn(0);
function gd(e) {
  const t = Kt(e);
  return !hs() || !t.visualViewport ? lm : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function um(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Kt(e) ? !1 : t;
}
function bo(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = vd(e);
  let i = pn(1);
  t && (r ? sn(r) && (i = Sr(r)) : i = Sr(e));
  const s = um(a, n, r) ? gd(a) : pn(0);
  let l = (o.left + s.x) / i.x, u = (o.top + s.y) / i.y, c = o.width / i.x, d = o.height / i.y;
  if (a) {
    const f = Kt(a), v = r && sn(r) ? Kt(r) : r;
    let w = f, b = Pa(w);
    for (; b && r && v !== w; ) {
      const x = Sr(b), _ = b.getBoundingClientRect(), h = ln(b), C = _.left + (b.clientLeft + parseFloat(h.paddingLeft)) * x.x, y = _.top + (b.clientTop + parseFloat(h.paddingTop)) * x.y;
      l *= x.x, u *= x.y, c *= x.x, d *= x.y, l += C, u += y, w = Kt(b), b = Pa(w);
    }
  }
  return ki({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function ps(e, t) {
  const n = ji(e).scrollLeft;
  return t ? t.left + n : bo(An(e)).left + n;
}
function hd(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    ps(e, r)
  )), a = r.top + t.scrollTop;
  return {
    x: o,
    y: a
  };
}
function cm(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", i = An(r), s = t ? Wi(t.floating) : !1;
  if (r === i || s && a)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = pn(1);
  const c = pn(0), d = xn(r);
  if ((d || !d && !a) && ((Xr(r) !== "body" || No(i)) && (l = ji(r)), xn(r))) {
    const v = bo(r);
    u = Sr(r), c.x = v.x + r.clientLeft, c.y = v.y + r.clientTop;
  }
  const f = i && !d && !a ? hd(i, l, !0) : pn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + f.y
  };
}
function dm(e) {
  return Array.from(e.getClientRects());
}
function fm(e) {
  const t = An(e), n = ji(e), r = e.ownerDocument.body, o = kr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = kr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + ps(e);
  const s = -n.scrollTop;
  return ln(r).direction === "rtl" && (i += kr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: i,
    y: s
  };
}
function vm(e, t) {
  const n = Kt(e), r = An(e), o = n.visualViewport;
  let a = r.clientWidth, i = r.clientHeight, s = 0, l = 0;
  if (o) {
    a = o.width, i = o.height;
    const u = hs();
    (!u || u && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s,
    y: l
  };
}
function gm(e, t) {
  const n = bo(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = xn(e) ? Sr(e) : pn(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, l = o * a.x, u = r * a.y;
  return {
    width: i,
    height: s,
    x: l,
    y: u
  };
}
function zl(e, t, n) {
  let r;
  if (t === "viewport")
    r = vm(e, n);
  else if (t === "document")
    r = fm(An(e));
  else if (sn(t))
    r = gm(t, n);
  else {
    const o = gd(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return ki(r);
}
function pd(e, t) {
  const n = Qn(e);
  return n === t || !sn(n) || Or(n) ? !1 : ln(n).position === "fixed" || pd(n, t);
}
function hm(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = dd(e, []).filter((s) => sn(s) && Xr(s) !== "body"), o = null;
  const a = ln(e).position === "fixed";
  let i = a ? Qn(e) : e;
  for (; sn(i) && !Or(i); ) {
    const s = ln(i), l = gs(i);
    !l && s.position === "fixed" && (o = null), (a ? !l && !o : !l && s.position === "static" && o && ["absolute", "fixed"].includes(o.position) || No(i) && !l && pd(e, i)) ? r = r.filter((u) => u !== i) : o = s, i = Qn(i);
  }
  return t.set(e, r), r;
}
function pm(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? Wi(t) ? [] : hm(t, this._c) : [].concat(n), r], i = a[0], s = a.reduce((l, u) => {
    const c = zl(t, u, o);
    return l.top = kr(c.top, l.top), l.right = wo(c.right, l.right), l.bottom = wo(c.bottom, l.bottom), l.left = kr(c.left, l.left), l;
  }, zl(t, i, o));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
function mm(e) {
  const {
    width: t,
    height: n
  } = fd(e);
  return {
    width: t,
    height: n
  };
}
function ym(e, t, n) {
  const r = xn(t), o = An(t), a = n === "fixed", i = bo(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = pn(0);
  if (r || !r && !a)
    if ((Xr(t) !== "body" || No(o)) && (s = ji(t)), r) {
      const f = bo(t, !0, a, t);
      l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop;
    } else o && (l.x = ps(o));
  const u = o && !r && !a ? hd(o, s) : pn(0), c = i.left + s.scrollLeft - l.x - u.x, d = i.top + s.scrollTop - l.y - u.y;
  return {
    x: c,
    y: d,
    width: i.width,
    height: i.height
  };
}
function sa(e) {
  return ln(e).position === "static";
}
function Pl(e, t) {
  if (!xn(e) || ln(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return An(e) === n && (n = n.ownerDocument.body), n;
}
function md(e, t) {
  const n = Kt(e);
  if (Wi(e))
    return n;
  if (!xn(e)) {
    let o = Qn(e);
    for (; o && !Or(o); ) {
      if (sn(o) && !sa(o))
        return o;
      o = Qn(o);
    }
    return n;
  }
  let r = Pl(e, t);
  for (; r && am(r) && sa(r); )
    r = Pl(r, t);
  return r && Or(r) && sa(r) && !gs(r) ? n : r || sm(e) || n;
}
const wm = async function(e) {
  const t = this.getOffsetParent || md, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: ym(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function bm(e) {
  return ln(e).direction === "rtl";
}
const xm = {
  convertOffsetParentRelativeRectToViewportRelativeRect: cm,
  getDocumentElement: An,
  getClippingRect: pm,
  getOffsetParent: md,
  getElementRects: wm,
  getClientRects: dm,
  getDimensions: mm,
  getScale: Sr,
  isElement: sn,
  isRTL: bm
}, $m = om, Cm = im, _m = nm, km = tm, Sm = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: xm,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return em(e, t, {
    ...o,
    platform: a
  });
}, Em = ({
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
    const _ = document.querySelector(e);
    if (_)
      e = _;
    else
      throw new Error("element not found by document.querySelector('" + e + "')");
  }
  let u;
  if (typeof n == "string") {
    const _ = document.querySelector(n);
    if (_)
      u = _;
    else
      throw new Error("element not found by document.querySelector('" + n + "')");
  } else
    u = n;
  let c;
  l && (c = document.createElement("div"), c.style.position = "absolute", c.style.backgroundColor = "#222", c.style.width = "8px", c.style.height = "8px", c.style.transform = "rotate(45deg)", c.style.display = "none", u.firstElementChild.before(c));
  function d() {
    Sm(e, u, {
      placement: r,
      middleware: [
        $m(o),
        // 手动偏移配置
        _m(a),
        //自动翻转
        Cm(i),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [km({ element: c })] : []
      ]
    }).then(({ x: _, y: h, placement: C, middlewareData: y }) => {
      if (Object.assign(u.style, {
        left: `${_}px`,
        top: `${h}px`
      }), l) {
        const { x: $, y: E } = y.arrow, S = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[C.split("-")[0]];
        Object.assign(c.style, {
          zIndex: -1,
          left: $ != null ? `${$}px` : "",
          top: E != null ? `${E}px` : "",
          right: "",
          bottom: "",
          [S]: "2px"
        });
      }
    });
  }
  let f = !1;
  function v() {
    u.style.display = "block", u.style.visibility = "block", u.style.position = "absolute", l && (c.style.display = "block"), f = !0, d();
  }
  function w() {
    u.style.display = "none", l && (c.style.display = "none"), f = !1;
  }
  function b(_) {
    _.stopPropagation(), f ? w() : v();
  }
  function x(_) {
    u.contains(_.target) || w();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((_) => {
    e.addEventListener(_, b);
  }), document.addEventListener("click", x), {
    destroy() {
      t.forEach((_) => {
        e.removeEventListener(_, b);
      }), document.removeEventListener("click", x);
    },
    hide() {
      w();
    },
    isVisible() {
      return f;
    }
  };
};
var Mm = /* @__PURE__ */ ne('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function Vo(e, t) {
  se(t, !0);
  const n = m(t, "children", 7), r = m(t, "floating", 7), o = m(t, "placement", 7, "bottom");
  let a, i, s;
  Vt(() => (s = Em({
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
  var u = Mm(), c = Y(u), d = Y(c);
  lr(d, n), K(c), wn(c, (w) => a = w, () => a);
  var f = I(c, 2), v = Y(f);
  return lr(v, r), K(f), wn(f, (w) => i = w, () => i), K(u), T(e, u), le({
    hide: l,
    get children() {
      return n();
    },
    set children(w) {
      n(w), p();
    },
    get floating() {
      return r();
    },
    set floating(w) {
      r(w), p();
    },
    get placement() {
      return o();
    },
    set placement(w = "bottom") {
      o(w), p();
    }
  });
}
oe(Vo, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Ge(e, t) {
  se(t, !0);
  const n = m(t, "children", 7), r = m(t, "level", 7, 1), o = m(t, "mt", 7), a = m(t, "mb", 7);
  var i = Je(), s = xe(i);
  return _1(s, () => `h${r()}`, !1, (l, u) => {
    let c;
    Ee(() => c = an(
      l,
      c,
      {
        class: "tf-heading",
        style: `margin-top:${o() || "0"};margin-bottom:${a() || "0"}`
      },
      void 0,
      l.namespaceURI === Ol,
      l.nodeName.includes("-")
    ));
    var d = Je(), f = xe(d);
    lr(f, () => n() ?? dt), T(u, d);
  }), T(e, i), le({
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
      return a();
    },
    set mb(l) {
      a(l), p();
    }
  });
}
oe(Ge, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var Hm = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const zm = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function Fi(e, t) {
  se(t, !0), Qe(e, zm);
  const n = /* @__PURE__ */ yt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Fe(e, ut(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var a = Hm();
      T(r, a);
    },
    $$slots: { default: !0 }
  })), le();
}
oe(Fi, {}, [], [], !0);
const Pm = () => {
  const e = qe();
  return {
    deleteNode: (t) => {
      e.nodes.update((n) => n.filter((r) => r.id !== t)), e.edges.update(
        (n) => n.filter((r) => r.source !== t && r.target !== t)
      );
    }
  };
}, Ar = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, Lm = () => {
  const { nodes: e, nodeLookup: t } = qe();
  return {
    copyNode: (n) => {
      var r;
      const o = (r = j(t).get(n)) == null ? void 0 : r.internals.userNode;
      if (o) {
        const a = Ar(), i = {
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
var Nm = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), Vm = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), Dm = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), Tm = /* @__PURE__ */ ne('<div class="tf-node-toolbar svelte-44dmwv"><!> <!> <!></div>'), Om = /* @__PURE__ */ ne('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const Am = {
  hash: "svelte-44dmwv",
  code: ".tf-node-toolbar.svelte-44dmwv {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}"
};
function cn(e, t) {
  se(t, !0), Qe(e, Am);
  const n = m(t, "data", 7), r = m(t, "id", 7, ""), o = m(t, "icon", 7), a = m(t, "handle", 7), i = m(t, "children", 7), s = m(t, "allowExecute", 7, !0), l = m(t, "allowCopy", 7, !0), u = m(t, "allowDelete", 7, !0), c = m(t, "showSourceHandle", 7, !0), d = m(t, "showTargetHandle", 7, !0);
  let f = n().expand ? ["key"] : [];
  const { updateNodeData: v } = Dt(), w = [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: i()
    }
  ], { deleteNode: b } = Pm(), { copyNode: x } = Lm();
  var _ = Om(), h = xe(_);
  {
    var C = (D) => {
      nd(D, {
        get position() {
          return Se.Top;
        },
        align: "end",
        children: (R, H) => {
          var L = Tm(), k = Y(L);
          {
            var M = (F) => {
              Fe(F, {
                class: "tf-node-toolbar-item",
                children: (ie, U) => {
                  var X = Nm();
                  T(ie, X);
                },
                $$slots: { default: !0 }
              });
            };
            Ce(k, (F) => {
              s() && F(M);
            });
          }
          var V = I(k, 2);
          {
            var O = (F) => {
              Fe(F, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  x(r());
                },
                children: (ie, U) => {
                  var X = Vm();
                  T(ie, X);
                },
                $$slots: { default: !0 }
              });
            };
            Ce(V, (F) => {
              l() && F(O);
            });
          }
          var Z = I(V, 2);
          {
            var W = (F) => {
              Fe(F, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  b(r());
                },
                children: (ie, U) => {
                  var X = Dm();
                  T(ie, X);
                },
                $$slots: { default: !0 }
              });
            };
            Ce(Z, (F) => {
              u() && F(W);
            });
          }
          K(L), T(R, L);
        },
        $$slots: { default: !0 }
      });
    };
    Ce(h, (D) => {
      (s() || l() || u()) && D(C);
    });
  }
  var y = I(h, 2), $ = I(Y(y), 2), E = Y($);
  id(E, {
    items: w,
    activeKeys: f,
    onChange: (D, R) => {
      v(r(), { expand: R == null ? void 0 : R.includes("key") });
    }
  }), K($), K(y);
  var S = I(y, 2);
  {
    var z = (D) => {
      Un(D, {
        type: "target",
        get position() {
          return Se.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    Ce(S, (D) => {
      d() && D(z);
    });
  }
  var P = I(S, 2);
  {
    var N = (D) => {
      Un(D, {
        type: "source",
        get position() {
          return Se.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    Ce(P, (D) => {
      c() && D(N);
    });
  }
  var A = I(P, 2);
  return lr(A, () => a() ?? dt), T(e, _), le({
    get data() {
      return n();
    },
    set data(D) {
      n(D), p();
    },
    get id() {
      return r();
    },
    set id(D = "") {
      r(D), p();
    },
    get icon() {
      return o();
    },
    set icon(D) {
      o(D), p();
    },
    get handle() {
      return a();
    },
    set handle(D) {
      a(D), p();
    },
    get children() {
      return i();
    },
    set children(D) {
      i(D), p();
    },
    get allowExecute() {
      return s();
    },
    set allowExecute(D = !0) {
      s(D), p();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(D = !0) {
      l(D), p();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(D = !0) {
      u(D), p();
    },
    get showSourceHandle() {
      return c();
    },
    set showSourceHandle(D = !0) {
      c(D), p();
    },
    get showTargetHandle() {
      return d();
    },
    set showTargetHandle(D = !0) {
      d(D), p();
    }
  });
}
oe(
  cn,
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
function gt() {
  return sr("svelteflow__node_id");
}
const yd = [
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
], Im = [
  {
    value: "ref",
    label: "引用"
  },
  {
    value: "input",
    label: "固定值"
  }
];
var Zm = /* @__PURE__ */ ne('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), Bm = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), Rm = /* @__PURE__ */ ne('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const Km = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function wd(e, t) {
  se(t, !0), Qe(e, Km);
  const [n, r] = et(), o = () => Q(g(l), "$node", n), a = m(t, "parameter", 7), i = m(t, "index", 7);
  let s = gt(), l = /* @__PURE__ */ Pe(() => pr(s)), u = /* @__PURE__ */ Pe(() => {
    var z, P;
    return {
      ...a(),
      ...(P = (z = o()) == null ? void 0 : z.data) == null ? void 0 : P.parameters[i()]
    };
  });
  const { updateNodeData: c } = Dt(), d = (z) => {
    const P = z.target.value;
    c(s, (N) => {
      let A = N.data.parameters;
      return A[i()].name = P, { parameters: A };
    });
  }, f = (z) => {
    const P = z.target.checked;
    c(s, (N) => {
      let A = N.data.parameters;
      return A[i()].required = P, { parameters: A };
    });
  }, v = (z) => {
    const P = z.value;
    P && c(s, (N) => {
      let A = N.data.parameters;
      return A[i()].dataType = P, { parameters: A };
    });
  };
  let w;
  const b = () => {
    c(s, (z) => {
      let P = z.data.parameters;
      return P.splice(i(), 1), { parameters: [...P] };
    }), w == null || w.hide();
  };
  var x = Rm(), _ = xe(x), h = Y(_);
  bt(h, {
    style: "width: 100%;",
    get value() {
      return g(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), K(_);
  var C = I(_, 2), y = Y(C);
  rd(y, {
    get checked() {
      return g(u).required;
    },
    onchange: f
  }), K(C);
  var $ = I(C, 2), E = Y($);
  wn(
    Vo(E, {
      placement: "bottom",
      floating: (z) => {
        var P = Zm(), N = Y(P), A = I(Y(N));
        const D = /* @__PURE__ */ Pe(() => g(u).dataType ? [g(u).dataType] : ["String"]);
        bn(A, {
          items: yd,
          style: "width: 100%",
          onSelect: v,
          get value() {
            return g(D);
          }
        }), K(N);
        var R = I(N, 2), H = I(Y(R));
        _t(H, { rows: 1, style: "width: 100%;" }), K(R);
        var L = I(R, 2), k = I(Y(L));
        _t(k, { rows: 3, style: "width: 100%;" }), K(L);
        var M = I(L, 2), V = Y(M);
        Fe(V, {
          onclick: b,
          children: (O, Z) => {
            ze();
            var W = Ie("删除");
            T(O, W);
          },
          $$slots: { default: !0 }
        }), K(M), K(P), T(z, P);
      },
      children: (z, P) => {
        Fe(z, {
          class: "input-btn-more",
          children: (N, A) => {
            var D = Bm();
            T(N, D);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (z) => w = z,
    () => w
  ), K($), T(e, x);
  var S = le({
    get parameter() {
      return a();
    },
    set parameter(z) {
      a(z), p();
    },
    get index() {
      return i();
    },
    set index(z) {
      i(z), p();
    }
  });
  return r(), S;
}
oe(wd, { parameter: {}, index: {} }, [], [], !0);
var Xm = /* @__PURE__ */ ne('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), Ym = /* @__PURE__ */ ne('<div class="none-params svelte-3n0wca">无输入参数</div>'), Wm = /* @__PURE__ */ ne('<div class="input-container svelte-3n0wca"><!> <!></div>');
const jm = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function bd(e, t) {
  se(t, !0), Qe(e, jm);
  const [n, r] = et(), o = () => Q(g(i), "$node", n);
  let a = gt(), i = /* @__PURE__ */ Pe(() => pr(a)), s = /* @__PURE__ */ Pe(() => {
    var f, v;
    return [...((v = (f = o()) == null ? void 0 : f.data) == null ? void 0 : v.parameters) || []];
  });
  var l = Wm(), u = Y(l);
  {
    var c = (f) => {
      var v = Xm();
      ze(4), T(f, v);
    };
    Ce(u, (f) => {
      g(s).length !== 0 && f(c);
    });
  }
  var d = I(u, 2);
  Nt(
    d,
    19,
    () => g(s),
    (f) => f.id,
    (f, v, w) => {
      wd(f, {
        get parameter() {
          return g(v);
        },
        get index() {
          return g(w);
        }
      });
    },
    (f) => {
      var v = Ym();
      T(f, v);
    }
  ), K(l), T(e, l), le(), r();
}
oe(bd, {}, [], [], !0);
const xd = (e) => {
  !e || e.length == 0 || e.forEach((t) => {
    t.id || (t.id = Ar()), xd(t.children);
  });
}, kn = () => {
  const { updateNodeData: e } = Dt();
  return {
    addParameter: (t, n = "parameters", r) => {
      xd(r == null ? void 0 : r.children);
      const o = {
        ...r,
        id: Ar()
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
var Fm = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), qm = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Gm = /* @__PURE__ */ ne('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const Um = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function $d(e, t) {
  se(t, !0), Qe(e, Um);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: a } = kn();
  return cn(e, ut(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    icon: (i) => {
      var s = Fm();
      T(i, s);
    },
    children: (i, s) => {
      var l = Gm(), u = xe(l), c = Y(u);
      Ge(c, {
        level: 3,
        children: (v, w) => {
          ze();
          var b = Ie("输入参数");
          T(v, b);
        },
        $$slots: { default: !0 }
      });
      var d = I(c, 2);
      Fe(d, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          a(o);
        },
        children: (v, w) => {
          var b = qm();
          T(v, b);
        },
        $$slots: { default: !0 }
      }), K(u);
      var f = I(u, 2);
      bd(f, {}), T(i, l);
    },
    $$slots: { icon: !0, default: !0 }
  })), le({
    get data() {
      return n();
    },
    set data(i) {
      n(i), p();
    }
  });
}
oe($d, { data: {} }, [], [], !0);
const Cd = (e, t, n) => {
  for (let r of n)
    r.target === t && r.source && (e.push(r.source), Cd(e, r.source, n));
}, Ll = (e, t) => {
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
}, Qm = (e = !1) => {
  const t = gt(), n = pr(t), { nodes: r, edges: o } = qe();
  return Wn([n, r, o], ([a, i, s]) => {
    const l = [];
    if (e) {
      for (let u of i)
        if (u.parentId === a.id) {
          const c = Ll(u, u.parentId === a.id);
          c && l.push(c);
        }
    } else {
      const u = [];
      Cd(u, t, s);
      for (let c of i)
        if (u.includes(c.id)) {
          const d = Ll(c, c.parentId === a.id);
          d && l.push(d);
        }
    }
    return l;
  });
};
var Jm = /* @__PURE__ */ ne('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), ey = /* @__PURE__ */ ne('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const ty = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function _d(e, t) {
  se(t, !0), Qe(e, ty);
  const [n, r] = et(), o = () => Q(g(c), "$node", n), a = () => Q(y, "$selectItems", n);
  Vt(() => {
    g(d).refType || _({ value: "ref" });
  });
  const i = m(t, "parameter", 7), s = m(t, "index", 7), l = m(t, "dataKeyName", 7);
  let u = gt(), c = /* @__PURE__ */ Pe(() => pr(u)), d = /* @__PURE__ */ Pe(() => {
    var L;
    return {
      ...i(),
      ...(L = o()) == null ? void 0 : L.data[l()][s()]
    };
  });
  const { updateNodeData: f } = Dt(), v = (L, k) => {
    f(u, (M) => {
      let V = M.data[l()];
      return V[s()] = { ...V[s()], [L]: k }, { [l()]: V };
    });
  }, w = (L) => {
    const k = L.target.value;
    v("name", k);
  }, b = (L) => {
    const k = L.target.value;
    v("value", k);
  }, x = (L) => {
    const k = L.value;
    v("ref", k);
  }, _ = (L) => {
    const k = L.value;
    v("refType", k);
  };
  let h;
  const C = () => {
    f(u, (L) => {
      let k = L.data[l()];
      return k.splice(s(), 1), { [l()]: [...k] };
    }), h == null || h.hide();
  }, y = Qm();
  var $ = ey(), E = xe($), S = Y(E);
  bt(S, {
    style: "width: 100%;",
    get value() {
      return g(d).name;
    },
    placeholder: "请输入参数名称",
    oninput: w
  }), K(E);
  var z = I(E, 2), P = Y(z);
  {
    var N = (L) => {
      bt(L, {
        get value() {
          return g(d).value;
        },
        placeholder: "请输入参数值",
        oninput: b
      });
    }, A = (L) => {
      const k = /* @__PURE__ */ Pe(() => [g(d).ref]);
      bn(L, {
        get items() {
          return a();
        },
        style: "width: 100%",
        defaultValue: ["ref"],
        get value() {
          return g(k);
        },
        expandAll: !0,
        onSelect: x
      });
    };
    Ce(P, (L) => {
      g(d).refType === "input" ? L(N) : L(A, !1);
    });
  }
  K(z);
  var D = I(z, 2), R = Y(D);
  wn(
    Vo(R, {
      placement: "bottom",
      floating: (L) => {
        var k = Jm(), M = Y(k), V = I(Y(M));
        const O = /* @__PURE__ */ Pe(() => g(d).refType ? [g(d).refType] : []);
        bn(V, {
          items: Im,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return g(O);
          },
          onSelect: _
        }), K(M);
        var Z = I(M, 2), W = I(Y(Z));
        _t(W, {
          rows: 1,
          style: "width: 100%;",
          onchange: (ce) => {
            const $e = ce.target.value;
            v("defaultValue", $e);
          }
        }), K(Z);
        var F = I(Z, 2), ie = I(Y(F));
        _t(ie, {
          rows: 3,
          style: "width: 100%;",
          onchange: (ce) => {
            const $e = ce.target.value;
            v("description", $e);
          }
        }), K(F);
        var U = I(F, 2), X = Y(U);
        Fe(X, {
          onclick: C,
          children: (ce, $e) => {
            ze();
            var _e = Ie("删除");
            T(ce, _e);
          },
          $$slots: { default: !0 }
        }), K(U), K(k), T(L, k);
      },
      children: (L, k) => {
        Fi(L, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (L) => h = L,
    () => h
  ), K(D), T(e, $);
  var H = le({
    get parameter() {
      return i();
    },
    set parameter(L) {
      i(L), p();
    },
    get index() {
      return s();
    },
    set index(L) {
      s(L), p();
    },
    get dataKeyName() {
      return l();
    },
    set dataKeyName(L) {
      l(L), p();
    }
  });
  return r(), H;
}
oe(_d, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var ny = /* @__PURE__ */ ne('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), ry = /* @__PURE__ */ ne('<div class="none-params svelte-1sm1mgi"> </div>'), oy = /* @__PURE__ */ ne('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const iy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Bt(e, t) {
  se(t, !0), Qe(e, iy);
  const [n, r] = et(), o = () => Q(g(l), "$node", n), a = m(t, "noneParameterText", 7, "无输入参数"), i = m(t, "dataKeyName", 7, "parameters");
  let s = gt(), l = /* @__PURE__ */ Pe(() => pr(s)), u = /* @__PURE__ */ Pe(() => {
    var b;
    return [...((b = o()) == null ? void 0 : b.data[i()]) || []];
  });
  var c = oy(), d = Y(c);
  {
    var f = (b) => {
      var x = ny();
      ze(4), T(b, x);
    };
    Ce(d, (b) => {
      g(u).length !== 0 && b(f);
    });
  }
  var v = I(d, 2);
  Nt(
    v,
    19,
    () => g(u),
    (b) => b.id,
    (b, x, _) => {
      _d(b, {
        get parameter() {
          return g(x);
        },
        get index() {
          return g(_);
        },
        get dataKeyName() {
          return i();
        }
      });
    },
    (b) => {
      var x = ry(), _ = Y(x, !0);
      K(x), Ee(() => Rt(_, a())), T(b, x);
    }
  ), K(c), T(e, c);
  var w = le({
    get noneParameterText() {
      return a();
    },
    set noneParameterText(b = "无输入参数") {
      a(b), p();
    },
    get dataKeyName() {
      return i();
    },
    set dataKeyName(b = "parameters") {
      i(b), p();
    }
  });
  return r(), w;
}
oe(Bt, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var ay = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), sy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ly = /* @__PURE__ */ ne('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const uy = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function kd(e, t) {
  se(t, !0), Qe(e, uy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: a } = kn();
  return cn(e, ut(
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
        var s = ay();
        T(i, s);
      },
      children: (i, s) => {
        var l = ly(), u = xe(l), c = Y(u);
        Ge(c, {
          level: 3,
          children: (v, w) => {
            ze();
            var b = Ie("输出参数");
            T(v, b);
          },
          $$slots: { default: !0 }
        });
        var d = I(c, 2);
        Fe(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "outputDefs");
          },
          children: (v, w) => {
            var b = sy();
            T(v, b);
          },
          $$slots: { default: !0 }
        }), K(u);
        var f = I(u, 2);
        Bt(f, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs"
        }), T(i, l);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le({
    get data() {
      return n();
    },
    set data(i) {
      n(i), p();
    }
  });
}
oe(kd, { data: {} }, [], [], !0);
const Jn = () => sr("tinyflow_options");
var cy = /* @__PURE__ */ be('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), dy = /* @__PURE__ */ ne('<div class="input-more-item svelte-1cfeest"><!></div>'), fy = /* @__PURE__ */ ne('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), vy = /* @__PURE__ */ ne('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const gy = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Sd(e, t) {
  se(t, !0), Qe(e, gy);
  const [n, r] = et(), o = () => Q(g(u), "$node", n), a = m(t, "parameter", 7), i = m(t, "position", 7), s = m(t, "dataKeyName", 7);
  let l = gt(), u = /* @__PURE__ */ Pe(() => pr(l)), c = /* @__PURE__ */ Pe(() => {
    var M;
    let V = (M = o()) == null ? void 0 : M.data[s()], O;
    if (V && i().length > 0) {
      let Z = V;
      for (let W = 0; W < i().length; W++) {
        const F = i()[W];
        W == i().length - 1 ? O = Z[F] : Z = Z[F].children;
      }
    }
    return { ...a(), ...O };
  });
  const { updateNodeData: d } = Dt(), f = (M, V) => {
    d(l, (O) => {
      const Z = O.data[s()];
      if (Z && i().length > 0) {
        let W = Z;
        for (let F = 0; F < i().length; F++) {
          const ie = i()[F];
          F == i().length - 1 ? W[ie] = { ...W[ie], [M]: V } : W = Z[ie].children;
        }
      }
      return { [s()]: Z };
    });
  }, v = (M) => {
    const V = M.target.value;
    f("name", V);
  }, w = (M) => {
    const V = M.value;
    f("dataType", V);
  };
  let b;
  const x = () => {
    d(l, (M) => {
      let V = M.data[s()];
      if (V && i().length > 0) {
        let O = V;
        for (let Z = 0; Z < i().length; Z++) {
          const W = i()[Z];
          Z == i().length - 1 ? O.splice(W, 1) : O = O[W].children;
        }
      }
      return { [s()]: [...V] };
    }), b == null || b.hide();
  }, _ = () => {
    d(l, (M) => {
      let V = M.data[s()];
      if (V && i().length > 0) {
        let O = V;
        for (let Z = 0; Z < i().length; Z++) {
          const W = i()[Z];
          Z == i().length - 1 ? O[W].children ? O[W].children.push({
            id: Ar(),
            name: "newParam",
            dataType: "String"
          }) : O[W].children = [
            {
              id: Ar(),
              name: "newParam",
              dataType: "String"
            }
          ] : O = O[W].children;
        }
      }
      return { [s()]: [...V] };
    });
  };
  var h = vy(), C = xe(h), y = Y(C);
  {
    var $ = (M) => {
      var V = Je(), O = xe(V);
      Nt(O, 17, i, uo, (Z, W) => {
        ze();
        var F = Ie(" ");
        T(Z, F);
      }), T(M, V);
    };
    Ce(y, (M) => {
      i().length > 1 && M($);
    });
  }
  var E = I(y, 2);
  const S = /* @__PURE__ */ Pe(() => g(c).nameDisabled === !0);
  bt(E, {
    style: "width: 100%;",
    get value() {
      return g(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: v,
    get disabled() {
      return g(S);
    }
  }), K(C);
  var z = I(C, 2), P = Y(z);
  const N = /* @__PURE__ */ Pe(() => g(c).dataType ? [g(c).dataType] : []), A = /* @__PURE__ */ Pe(() => g(c).dataTypeDisabled === !0);
  bn(P, {
    items: yd,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return g(N);
    },
    get disabled() {
      return g(A);
    },
    onSelect: w
  });
  var D = I(P, 2);
  {
    var R = (M) => {
      Fe(M, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: _,
        children: (V, O) => {
          var Z = cy();
          T(V, Z);
        },
        $$slots: { default: !0 }
      });
    };
    Ce(D, (M) => {
      (g(c).dataType === "Object" || g(c).dataType === "Array") && g(c).addChildDisabled !== !0 && M(R);
    });
  }
  K(z);
  var H = I(z, 2), L = Y(H);
  wn(
    Vo(L, {
      placement: "bottom",
      floating: (M) => {
        var V = fy(), O = Y(V), Z = I(Y(O));
        _t(Z, {
          rows: 1,
          style: "width: 100%;",
          onchange: (X) => {
            const ce = X.target.value;
            f("defaultValue", ce);
          }
        }), K(O);
        var W = I(O, 2), F = I(Y(W));
        _t(F, {
          rows: 3,
          style: "width: 100%;",
          onchange: (X) => {
            const ce = X.target.value;
            f("description", ce);
          }
        }), K(W);
        var ie = I(W, 2);
        {
          var U = (X) => {
            var ce = dy(), $e = Y(ce);
            Fe($e, {
              onclick: x,
              children: (_e, he) => {
                ze();
                var ve = Ie("删除");
                T(_e, ve);
              },
              $$slots: { default: !0 }
            }), K(ce), T(X, ce);
          };
          Ce(ie, (X) => {
            g(c).deleteDisabled !== !0 && X(U);
          });
        }
        K(V), T(M, V);
      },
      children: (M, V) => {
        Fi(M, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (M) => b = M,
    () => b
  ), K(H), T(e, h);
  var k = le({
    get parameter() {
      return a();
    },
    set parameter(M) {
      a(M), p();
    },
    get position() {
      return i();
    },
    set position(M) {
      i(M), p();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(M) {
      s(M), p();
    }
  });
  return r(), k;
}
oe(Sd, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var hy = /* @__PURE__ */ ne("<!> <!>", 1), py = /* @__PURE__ */ ne('<div class="none-params svelte-1sm1mgi"> </div>'), my = /* @__PURE__ */ ne('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), yy = /* @__PURE__ */ ne('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const wy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function In(e, t) {
  se(t, !0), Qe(e, wy);
  const [n, r] = et(), o = () => Q(g(u), "$node", n), a = (x, _ = dt, h = dt) => {
    var C = Je(), y = xe(C);
    Nt(
      y,
      19,
      _,
      ($) => `${$.id}_${$.children ? $.children.length : 0}`,
      ($, E, S) => {
        var z = hy(), P = xe(z);
        const N = /* @__PURE__ */ Pe(() => [...h(), g(S)]);
        Sd(P, {
          get parameter() {
            return g(E);
          },
          get position() {
            return g(N);
          },
          get dataKeyName() {
            return s();
          }
        });
        var A = I(P, 2);
        {
          var D = (R) => {
            var H = /* @__PURE__ */ me(() => [...h(), g(S)]);
            a(R, () => g(E).children, () => g(H));
          };
          Ce(A, (R) => {
            g(E).children && R(D);
          });
        }
        T($, z);
      },
      ($) => {
        var E = Je(), S = xe(E);
        {
          var z = (P) => {
            var N = py(), A = Y(N, !0);
            K(N), Ee(() => Rt(A, i())), T(P, N);
          };
          Ce(S, (P) => {
            h().length === 0 && P(z);
          });
        }
        T($, E);
      }
    ), T(x, C);
  }, i = m(t, "noneParameterText", 7, "无输出参数"), s = m(t, "dataKeyName", 7, "outputDefs");
  let l = gt(), u = /* @__PURE__ */ Pe(() => pr(l)), c = /* @__PURE__ */ Pe(() => {
    var x;
    return [...((x = o()) == null ? void 0 : x.data[s()]) || []];
  });
  var d = yy(), f = Y(d);
  {
    var v = (x) => {
      var _ = my();
      ze(4), T(x, _);
    };
    Ce(f, (x) => {
      g(c).length !== 0 && x(v);
    });
  }
  var w = I(f, 2);
  a(w, () => g(c) || [], () => []), K(d), T(e, d);
  var b = le({
    get noneParameterText() {
      return i();
    },
    set noneParameterText(x = "无输出参数") {
      i(x), p();
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
oe(In, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var by = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), xy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), $y = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Cy = /* @__PURE__ */ ne('<div class="heading svelte-wn2kra"><!> <!></div> <!> <!> <div class="setting-title svelte-wn2kra">模型</div> <div class="setting-item svelte-wn2kra"><!> <!></div> <div class="setting-title svelte-wn2kra">采样参数</div> <div class="setting-item svelte-wn2kra"><div class="slider-container svelte-wn2kra"><label class="svelte-wn2kra"> </label> <input type="range" min="0" max="1" step="0.1" class="svelte-wn2kra"></div></div> <div class="setting-item svelte-wn2kra"><div class="slider-container svelte-wn2kra"><label class="svelte-wn2kra"> </label> <input type="range" min="0" max="1" step="0.1" class="svelte-wn2kra"></div></div> <div class="setting-item svelte-wn2kra"><div class="slider-container svelte-wn2kra"><label class="svelte-wn2kra"> </label> <input type="range" min="0" max="100" step="1" class="svelte-wn2kra"></div></div> <div class="setting-title svelte-wn2kra">系统提示词</div> <div class="setting-item svelte-wn2kra"><!></div> <div class="setting-title svelte-wn2kra">用户提示词</div> <div class="setting-item svelte-wn2kra"><!></div> <div class="heading svelte-wn2kra"><!> <!></div> <!>', 1);
const _y = {
  hash: "svelte-wn2kra",
  code: `.heading.svelte-wn2kra {display:flex;margin-bottom:10px;}.setting-title.svelte-wn2kra {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-wn2kra {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}
    /* 新增样式 */.slider-container.svelte-wn2kra {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-wn2kra label:where(.svelte-wn2kra) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-wn2kra {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-wn2kra::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Ed(e, t) {
  se(t, !0), Qe(e, _y);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: a } = kn(), i = Jn();
  let s = ar(At([]));
  Vt(async () => {
    var u, c;
    const d = await ((c = (u = i.provider) == null ? void 0 : u.llm) == null ? void 0 : c.call(u));
    g(s).push(...d || []);
  });
  const { updateNodeData: l } = Dt();
  return cn(e, ut(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = by();
        T(u, c);
      },
      children: (u, c) => {
        var d = Cy(), f = xe(d), v = Y(f);
        Ge(v, {
          level: 3,
          children: (ve, te) => {
            ze();
            var pe = Ie("输入参数");
            T(ve, pe);
          },
          $$slots: { default: !0 }
        });
        var w = I(v, 2);
        Fe(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (ve, te) => {
            var pe = xy();
            T(ve, pe);
          },
          $$slots: { default: !0 }
        }), K(f);
        var b = I(f, 2);
        Bt(b, {});
        var x = I(b, 2);
        Ge(x, {
          level: 3,
          mt: "10px",
          children: (ve, te) => {
            ze();
            var pe = Ie("模型设置");
            T(ve, pe);
          },
          $$slots: { default: !0 }
        });
        var _ = I(x, 4), h = Y(_);
        const C = /* @__PURE__ */ Pe(() => n().llmId ? [n().llmId] : []);
        bn(h, {
          get items() {
            return g(s);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (ve) => {
            const te = ve.value;
            l(o, () => ({ llmId: te }));
          },
          get value() {
            return g(C);
          }
        });
        var y = I(h, 2);
        Fi(y, {}), K(_);
        var $ = I(_, 4), E = Y($), S = Y(E), z = Y(S);
        K(S);
        var P = I(S, 2);
        no(P), K(E), K($);
        var N = I($, 2), A = Y(N), D = Y(A), R = Y(D);
        K(D);
        var H = I(D, 2);
        no(H), K(A), K(N);
        var L = I(N, 2), k = Y(L), M = Y(k), V = Y(M);
        K(M);
        var O = I(M, 2);
        no(O), K(k), K(L);
        var Z = I(L, 4), W = Y(Z);
        const F = /* @__PURE__ */ Pe(() => n().systemPrompt || "");
        _t(W, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return g(F);
          },
          oninput: (ve) => {
            l(o, { systemPrompt: ve.target.value });
          }
        }), K(Z);
        var ie = I(Z, 4), U = Y(ie);
        const X = /* @__PURE__ */ Pe(() => n().userPrompt || "");
        _t(U, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return g(X);
          },
          oninput: (ve) => {
            l(o, { userPrompt: ve.target.value });
          }
        }), K(ie);
        var ce = I(ie, 2), $e = Y(ce);
        Ge($e, {
          level: 3,
          mt: "10px",
          children: (ve, te) => {
            ze();
            var pe = Ie("输出参数");
            T(ve, pe);
          },
          $$slots: { default: !0 }
        });
        var _e = I($e, 2);
        Fe(_e, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "outputDefs");
          },
          children: (ve, te) => {
            var pe = $y();
            T(ve, pe);
          },
          $$slots: { default: !0 }
        }), K(ce);
        var he = I(ce, 2);
        In(he, {}), Ee(() => {
          Rt(z, `Temperature: ${n().temperature ?? 0.5}`), Gi(P, n().temperature ?? 0.5), Rt(R, `Top P: ${n().topP ?? 0.9}`), Gi(H, n().topP ?? 0.9), Rt(V, `Top K: ${n().topK ?? 50}`), Gi(O, n().topK ?? 50);
        }), Re("mousedown", P, Ui(function(ve) {
          De.call(this, t, ve);
        })), Re("input", P, (ve) => l(o, { temperature: parseFloat(ve.target.value) })), Re("mousedown", H, Ui(function(ve) {
          De.call(this, t, ve);
        })), Re("input", H, (ve) => l(o, { topP: parseFloat(ve.target.value) })), Re("mousedown", O, Ui(function(ve) {
          De.call(this, t, ve);
        })), Re("input", O, (ve) => l(o, { topK: parseInt(ve.target.value) })), T(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le({
    get data() {
      return n();
    },
    set data(u) {
      n(u), p();
    }
  });
}
oe(Ed, { data: {} }, [], [], !0);
var ky = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Sy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ey = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), My = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const Hy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Md(e, t) {
  se(t, !0), Qe(e, Hy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  Vt(() => {
    n().engine || i(o, () => ({ engine: "qlexpress" }));
  });
  const o = gt(), { addParameter: a } = kn(), { updateNodeData: i } = Dt(), s = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  return cn(e, ut(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = ky();
        T(l, u);
      },
      children: (l, u) => {
        var c = My(), d = xe(c), f = Y(d);
        Ge(f, {
          level: 3,
          children: (N, A) => {
            ze();
            var D = Ie("输入参数");
            T(N, D);
          },
          $$slots: { default: !0 }
        });
        var v = I(f, 2);
        Fe(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (N, A) => {
            var D = Sy();
            T(N, D);
          },
          $$slots: { default: !0 }
        }), K(d);
        var w = I(d, 2);
        Bt(w, {});
        var b = I(w, 2);
        Ge(b, {
          level: 3,
          mt: "10px",
          children: (N, A) => {
            ze();
            var D = Ie("代码");
            T(N, D);
          },
          $$slots: { default: !0 }
        });
        var x = I(b, 4), _ = Y(x);
        const h = /* @__PURE__ */ Pe(() => n().engine ? [n().engine] : ["qlexpress"]);
        bn(_, {
          items: s,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (N) => {
            const A = N.value;
            i(o, () => ({ engine: A }));
          },
          get value() {
            return g(h);
          }
        }), K(x);
        var C = I(x, 4), y = Y(C);
        const $ = /* @__PURE__ */ Pe(() => n().code || "");
        _t(y, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (N) => {
            i(o, () => ({ code: N.target.value }));
          },
          get value() {
            return g($);
          }
        }), K(C);
        var E = I(C, 2), S = Y(E);
        Ge(S, {
          level: 3,
          mt: "10px",
          children: (N, A) => {
            ze();
            var D = Ie("输出参数");
            T(N, D);
          },
          $$slots: { default: !0 }
        });
        var z = I(S, 2);
        Fe(z, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "outputDefs");
          },
          children: (N, A) => {
            var D = Ey();
            T(N, D);
          },
          $$slots: { default: !0 }
        }), K(E);
        var P = I(E, 2);
        In(P, {}), T(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le({
    get data() {
      return n();
    },
    set data(l) {
      n(l), p();
    }
  });
}
oe(Md, { data: {} }, [], [], !0);
var zy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), Py = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ly = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Ny = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Hd(e, t) {
  se(t, !0), Qe(e, Ny);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: a } = kn(), { updateNodeData: i } = Dt();
  return Er(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && a(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), cn(e, ut(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (s) => {
        var l = zy();
        T(s, l);
      },
      children: (s, l) => {
        var u = Ly(), c = xe(u), d = Y(c);
        Ge(d, {
          level: 3,
          children: ($, E) => {
            ze();
            var S = Ie("输入参数");
            T($, S);
          },
          $$slots: { default: !0 }
        });
        var f = I(d, 2);
        Fe(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: ($, E) => {
            var S = Py();
            T($, S);
          },
          $$slots: { default: !0 }
        }), K(c);
        var v = I(c, 2);
        Bt(v, {});
        var w = I(v, 2);
        Ge(w, {
          level: 3,
          mt: "10px",
          children: ($, E) => {
            ze();
            var S = Ie("代码");
            T($, S);
          },
          $$slots: { default: !0 }
        });
        var b = I(w, 4), x = Y(b);
        const _ = /* @__PURE__ */ Pe(() => n().template || "");
        _t(x, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: ($) => {
            i(o, () => ({ template: $.target.value }));
          },
          get value() {
            return g(_);
          }
        }), K(b);
        var h = I(b, 2), C = Y(h);
        Ge(C, {
          level: 3,
          mt: "10px",
          children: ($, E) => {
            ze();
            var S = Ie("输出参数");
            T($, S);
          },
          $$slots: { default: !0 }
        }), K(h);
        var y = I(h, 2);
        In(y, {}), T(s, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le({
    get data() {
      return n();
    },
    set data(s) {
      n(s), p();
    }
  });
}
oe(Hd, { data: {} }, [], [], !0);
var Vy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), Dy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ty = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Oy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ay = /* @__PURE__ */ ne('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), Iy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Zy = /* @__PURE__ */ ne('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), By = /* @__PURE__ */ ne('<div style="width: 100%"><!></div>'), Ry = /* @__PURE__ */ ne('<div style="width: 100%"><!></div>'), Ky = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Xy = /* @__PURE__ */ ne('<div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1vtcqdz"><!> <!></div> <!> <div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="radio-group svelte-1vtcqdz"><label class="svelte-1vtcqdz"><!>none</label> <label class="svelte-1vtcqdz"><!>form-data</label> <label class="svelte-1vtcqdz"><!>x-www-form-urlencoded</label> <label class="svelte-1vtcqdz"><!>json</label> <label class="svelte-1vtcqdz"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1vtcqdz"><!> <!></div> <!>', 1);
const Yy = {
  hash: "svelte-1vtcqdz",
  code: ".heading.svelte-1vtcqdz {display:flex;margin-bottom:10px;}.radio-group.svelte-1vtcqdz {display:flex;margin:10px 0;}.radio-group.svelte-1vtcqdz label:where(.svelte-1vtcqdz) {display:flex;font-size:14px;}"
};
function zd(e, t) {
  se(t, !0), Qe(e, Yy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  Vt(() => {
    n().method || s(a, () => ({ method: "get" }));
  });
  const o = [
    { value: "get", label: "GET" },
    { value: "post", label: "POST" },
    { value: "put", label: "PUT" },
    { value: "delete", label: "DELETE" },
    { value: "head", label: "HEAD" },
    { value: "patch", label: "PATCH" }
  ], a = gt(), { addParameter: i } = kn(), { updateNodeData: s } = Dt();
  return cn(e, ut(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Vy();
        T(l, u);
      },
      children: (l, u) => {
        var c = Xy(), d = xe(c), f = Y(d), v = Y(f);
        const w = /* @__PURE__ */ Pe(() => n().method ? [n().method] : ["get"]);
        bn(v, {
          items: o,
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (fe) => {
            const ae = fe.value;
            s(a, () => ({ method: ae }));
          },
          get value() {
            return g(w);
          }
        }), K(f);
        var b = I(f, 2), x = Y(b);
        const _ = /* @__PURE__ */ Pe(() => n().url || "");
        bt(x, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (fe) => {
            s(a, () => ({ url: fe.target.value }));
          },
          get value() {
            return g(_);
          }
        }), K(b), K(d);
        var h = I(d, 2), C = Y(h);
        Ge(C, {
          level: 3,
          children: (fe, ae) => {
            ze();
            var ke = Ie("Http 头信息");
            T(fe, ke);
          },
          $$slots: { default: !0 }
        });
        var y = I(C, 2);
        Fe(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(a, "headers");
          },
          children: (fe, ae) => {
            var ke = Dy();
            T(fe, ke);
          },
          $$slots: { default: !0 }
        }), K(h);
        var $ = I(h, 2);
        Bt($, { dataKeyName: "headers" });
        var E = I($, 2), S = Y(E);
        Ge(S, {
          level: 3,
          children: (fe, ae) => {
            ze();
            var ke = Ie("参数");
            T(fe, ke);
          },
          $$slots: { default: !0 }
        });
        var z = I(S, 2);
        Fe(z, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(a, "urlParameters");
          },
          children: (fe, ae) => {
            var ke = Ty();
            T(fe, ke);
          },
          $$slots: { default: !0 }
        }), K(E);
        var P = I(E, 2);
        Bt(P, { dataKeyName: "urlParameters" });
        var N = I(P, 2);
        Ge(N, {
          level: 3,
          mt: "10px",
          children: (fe, ae) => {
            ze();
            var ke = Ie("Body");
            T(fe, ke);
          },
          $$slots: { default: !0 }
        });
        var A = I(N, 2), D = Y(A), R = Y(D);
        const H = /* @__PURE__ */ Pe(() => !n().bodyType);
        bt(R, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return g(H);
          },
          onchange: (fe) => {
            var ae;
            (ae = fe.target) != null && ae.checked && s(a, { bodyType: "" });
          }
        }), ze(), K(D);
        var L = I(D, 2), k = Y(L);
        const M = /* @__PURE__ */ Pe(() => n().bodyType === "form-data");
        bt(k, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return g(M);
          },
          onchange: (fe) => {
            var ae;
            (ae = fe.target) != null && ae.checked && s(a, { bodyType: "form-data" });
          }
        }), ze(), K(L);
        var V = I(L, 2), O = Y(V);
        const Z = /* @__PURE__ */ Pe(() => n().bodyType === "x-www-form-urlencoded");
        bt(O, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return g(Z);
          },
          onchange: (fe) => {
            var ae;
            (ae = fe.target) != null && ae.checked && s(a, { bodyType: "x-www-form-urlencoded" });
          }
        }), ze(), K(V);
        var W = I(V, 2), F = Y(W);
        const ie = /* @__PURE__ */ Pe(() => n().bodyType === "json");
        bt(F, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return g(ie);
          },
          onchange: (fe) => {
            var ae;
            (ae = fe.target) != null && ae.checked && s(a, { bodyType: "json" });
          }
        }), ze(), K(W);
        var U = I(W, 2), X = Y(U);
        const ce = /* @__PURE__ */ Pe(() => n().bodyType === "raw");
        bt(X, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return g(ce);
          },
          onchange: (fe) => {
            var ae;
            (ae = fe.target) != null && ae.checked && s(a, { bodyType: "raw" });
          }
        }), ze(), K(U), K(A);
        var $e = I(A, 2);
        {
          var _e = (fe) => {
            var ae = Ay(), ke = xe(ae), Ne = Y(ke);
            Ge(Ne, {
              level: 3,
              children: (tt, J) => {
                ze();
                var Le = Ie("参数");
                T(tt, Le);
              },
              $$slots: { default: !0 }
            });
            var We = I(Ne, 2);
            Fe(We, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                i(a, "fromData");
              },
              children: (tt, J) => {
                var Le = Oy();
                T(tt, Le);
              },
              $$slots: { default: !0 }
            }), K(ke);
            var ct = I(ke, 2);
            Bt(ct, { dataKeyName: "fromData" }), T(fe, ae);
          };
          Ce($e, (fe) => {
            n().bodyType === "form-data" && fe(_e);
          });
        }
        var he = I($e, 2);
        {
          var ve = (fe) => {
            var ae = Zy(), ke = xe(ae), Ne = Y(ke);
            Ge(Ne, {
              level: 3,
              children: (tt, J) => {
                ze();
                var Le = Ie("参数");
                T(tt, Le);
              },
              $$slots: { default: !0 }
            });
            var We = I(Ne, 2);
            Fe(We, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                i(a, "fromUrlencoded");
              },
              children: (tt, J) => {
                var Le = Iy();
                T(tt, Le);
              },
              $$slots: { default: !0 }
            }), K(ke);
            var ct = I(ke, 2);
            Bt(ct, { dataKeyName: "fromUrlencoded" }), T(fe, ae);
          };
          Ce(he, (fe) => {
            n().bodyType === "x-www-form-urlencoded" && fe(ve);
          });
        }
        var te = I(he, 2);
        {
          var pe = (fe) => {
            var ae = By(), ke = Y(ae);
            _t(ke, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Ne) => {
                s(a, { bodyJson: Ne.target.value });
              }
            }), K(ae), T(fe, ae);
          };
          Ce(te, (fe) => {
            n().bodyType === "json" && fe(pe);
          });
        }
        var Xe = I(te, 2);
        {
          var Ze = (fe) => {
            var ae = Ry(), ke = Y(ae);
            _t(ke, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Ne) => {
                s(a, { bodyRaw: Ne.target.value });
              }
            }), K(ae), T(fe, ae);
          };
          Ce(Xe, (fe) => {
            n().bodyType === "raw" && fe(Ze);
          });
        }
        var Be = I(Xe, 2), ee = Y(Be);
        Ge(ee, {
          level: 3,
          mt: "10px",
          children: (fe, ae) => {
            ze();
            var ke = Ie("输出参数");
            T(fe, ke);
          },
          $$slots: { default: !0 }
        });
        var Ye = I(ee, 2);
        Fe(Ye, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(a, "outputDefs");
          },
          children: (fe, ae) => {
            var ke = Ky();
            T(fe, ke);
          },
          $$slots: { default: !0 }
        }), K(Be);
        var Oe = I(Be, 2);
        In(Oe, {}), T(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le({
    get data() {
      return n();
    },
    set data(l) {
      n(l), p();
    }
  });
}
oe(zd, { data: {} }, [], [], !0);
var Wy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), jy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Fy = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const qy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Pd(e, t) {
  se(t, !0), Qe(e, qy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: a } = kn(), i = Jn();
  let s = ar(At([]));
  Vt(async () => {
    var u, c;
    const d = await ((c = (u = i.provider) == null ? void 0 : u.knowledge) == null ? void 0 : c.call(u));
    g(s).push(...d || []);
  });
  const { updateNodeData: l } = Dt();
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
  }), cn(e, ut(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = Wy();
        T(u, c);
      },
      children: (u, c) => {
        var d = Fy(), f = xe(d), v = Y(f);
        Ge(v, {
          level: 3,
          children: (P, N) => {
            ze();
            var A = Ie("输入参数");
            T(P, A);
          },
          $$slots: { default: !0 }
        });
        var w = I(v, 2);
        Fe(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (P, N) => {
            var A = jy();
            T(P, A);
          },
          $$slots: { default: !0 }
        }), K(f);
        var b = I(f, 2);
        Bt(b, {});
        var x = I(b, 2);
        Ge(x, {
          level: 3,
          mt: "10px",
          children: (P, N) => {
            ze();
            var A = Ie("知识库设置");
            T(P, A);
          },
          $$slots: { default: !0 }
        });
        var _ = I(x, 4), h = Y(_);
        const C = /* @__PURE__ */ Pe(() => n().knowledgeId ? [n().knowledgeId] : []);
        bn(h, {
          get items() {
            return g(s);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (P) => {
            const N = P.value;
            l(o, () => ({ knowledgeId: N }));
          },
          get value() {
            return g(C);
          }
        }), K(_);
        var y = I(_, 4), $ = Y(y);
        bt($, { placeholder: "搜索的数据条数", style: "width: 100%" }), K(y);
        var E = I(y, 2), S = Y(E);
        Ge(S, {
          level: 3,
          mt: "10px",
          children: (P, N) => {
            ze();
            var A = Ie("输出参数");
            T(P, A);
          },
          $$slots: { default: !0 }
        }), K(E);
        var z = I(E, 2);
        In(z, {}), T(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le({
    get data() {
      return n();
    },
    set data(u) {
      n(u), p();
    }
  });
}
oe(Pd, { data: {} }, [], [], !0);
var Gy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), Uy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Qy = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">API 服务商</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">API Key</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">其他参数</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Jy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Ld(e, t) {
  se(t, !0), Qe(e, Jy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: a } = kn(), i = Jn();
  let s = ar(At([]));
  Vt(async () => {
    var u;
    const c = await ((u = i.provider) == null ? void 0 : u.knowledge());
    g(s).push(...c || []);
  });
  const { updateNodeData: l } = Dt();
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
  }), cn(e, ut(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = Gy();
        T(u, c);
      },
      children: (u, c) => {
        var d = Qy(), f = xe(d), v = Y(f);
        Ge(v, {
          level: 3,
          children: (L, k) => {
            ze();
            var M = Ie("输入参数");
            T(L, M);
          },
          $$slots: { default: !0 }
        });
        var w = I(v, 2);
        Fe(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (L, k) => {
            var M = Uy();
            T(L, M);
          },
          $$slots: { default: !0 }
        }), K(f);
        var b = I(f, 2);
        Bt(b, {});
        var x = I(b, 2);
        Ge(x, {
          level: 3,
          mt: "10px",
          children: (L, k) => {
            ze();
            var M = Ie("搜索引擎设置");
            T(L, M);
          },
          $$slots: { default: !0 }
        });
        var _ = I(x, 4), h = Y(_);
        const C = /* @__PURE__ */ Pe(() => n().knowledgeId ? [n().knowledgeId] : []);
        bn(h, {
          get items() {
            return g(s);
          },
          style: "width: 100%",
          placeholder: "请选择 API 服务商",
          onSelect: (L) => {
            const k = L.value;
            l(o, () => ({ knowledgeId: k }));
          },
          get value() {
            return g(C);
          }
        }), K(_);
        var y = I(_, 4), $ = Y(y);
        bt($, {
          placeholder: "请输入 API Key",
          style: "width: 100%"
        }), K(y);
        var E = I(y, 4), S = Y(E);
        bt(S, { placeholder: "请输入关键字", style: "width: 100%" }), K(E);
        var z = I(E, 4), P = Y(z);
        bt(P, { placeholder: "搜索的数据条数", style: "width: 100%" }), K(z);
        var N = I(z, 4), A = Y(N);
        _t(A, {
          rows: 3,
          placeholder: "请输入其他参数（Property 格式）",
          style: "width: 100%"
        }), K(N);
        var D = I(N, 2), R = Y(D);
        Ge(R, {
          level: 3,
          mt: "10px",
          children: (L, k) => {
            ze();
            var M = Ie("输出参数");
            T(L, M);
          },
          $$slots: { default: !0 }
        }), K(D);
        var H = I(D, 2);
        In(H, {}), T(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le({
    get data() {
      return n();
    },
    set data(u) {
      n(u), p();
    }
  });
}
oe(Ld, { data: {} }, [], [], !0);
var ew = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), tw = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), nw = /* @__PURE__ */ ne('<div class="heading svelte-md8tgj"><!> <!></div> <!> <div class="heading svelte-md8tgj"><!></div> <!>', 1);
const rw = {
  hash: "svelte-md8tgj",
  code: ".heading.svelte-md8tgj {display:flex;margin-bottom:10px;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function Nd(e, t) {
  se(t, !0), Qe(e, rw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: a } = kn(), i = Jn();
  let s = ar(At([]));
  return Vt(async () => {
    var l;
    const u = await ((l = i.provider) == null ? void 0 : l.knowledge());
    g(s).push(...u || []);
  }), cn(e, ut(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = ew();
        T(l, u);
      },
      handle: (l) => {
        Un(l, {
          type: "source",
          get position() {
            return Se.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (l, u) => {
        var c = nw(), d = xe(c), f = Y(d);
        Ge(f, {
          level: 3,
          children: (h, C) => {
            ze();
            var y = Ie("循环变量");
            T(h, y);
          },
          $$slots: { default: !0 }
        });
        var v = I(f, 2);
        Fe(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (h, C) => {
            var y = tw();
            T(h, y);
          },
          $$slots: { default: !0 }
        }), K(d);
        var w = I(d, 2);
        Bt(w, {});
        var b = I(w, 2), x = Y(b);
        Ge(x, {
          level: 3,
          mt: "10px",
          children: (h, C) => {
            ze();
            var y = Ie("输出参数");
            T(h, y);
          },
          $$slots: { default: !0 }
        }), K(b);
        var _ = I(b, 2);
        In(_, {}), T(l, c);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), le({
    get data() {
      return n();
    },
    set data(l) {
      n(l), p();
    }
  });
}
oe(Nd, { data: {} }, [], [], !0);
const ow = {
  startNode: $d,
  codeNode: Md,
  llmNode: Ed,
  templateNode: Hd,
  httpNode: zd,
  knowledgeNode: Pd,
  searchEngineNode: Ld,
  loopNode: Nd,
  endNode: kd
};
var iw = /* @__PURE__ */ ne("<!> ", 1);
function La(e, t) {
  se(t, !0);
  const n = m(t, "icon", 7), r = m(t, "title", 7), o = m(t, "type", 7), a = m(t, "description", 7), i = m(t, "extra", 7);
  return Fe(e, {
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
      var u = iw(), c = xe(u);
      gu(c, n);
      var d = I(c);
      Ee(() => Rt(d, ` ${r() ?? ""}`)), T(s, u);
    },
    $$slots: { default: !0 }
  }), le({
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
      return a();
    },
    set description(s) {
      a(s), p();
    },
    get extra() {
      return i();
    },
    set extra(s) {
      i(s), p();
    }
  });
}
oe(
  La,
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
var aw = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), sw = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), lw = /* @__PURE__ */ ne('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Vd(e, t) {
  se(t, !0);
  let n = ar("base"), r = ar("show");
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
  ], a = [
    {
      label: "基础节点",
      value: "base"
    },
    {
      label: "业务工具",
      value: "tools"
    }
  ], i = [], s = Jn().customNodes;
  if (console.log("options", Jn()), console.log("customNodes", s), s)
    for (let x of Object.keys(s))
      i.push({
        icon: s[x].icon,
        title: s[x].name,
        type: x
      });
  var l = lw(), u = Y(l), c = Y(u), d = Y(c);
  od(d, {
    style: "width: 100%",
    items: a,
    onChange: (x) => {
      q(n, At(x.value.toString()));
    }
  }), K(c);
  var f = I(c, 2), v = Y(f);
  Nt(v, 21, () => o, uo, (x, _) => {
    La(x, ut(() => g(_)));
  }), K(v);
  var w = I(v, 2);
  Nt(w, 21, () => i, uo, (x, _) => {
    La(x, ut(() => g(_)));
  }), K(w), K(f), K(u);
  var b = I(u, 2);
  Fe(b, {
    onclick: () => {
      q(r, At(g(r) ? "" : "show"));
    },
    children: (x, _) => {
      var h = Je(), C = xe(h);
      {
        var y = (E) => {
          var S = aw();
          T(E, S);
        }, $ = (E) => {
          var S = sw();
          T(E, S);
        };
        Ce(C, (E) => {
          g(r) === "show" ? E(y) : E($, !1);
        });
      }
      T(x, h);
    },
    $$slots: { default: !0 }
  }), K(l), Ee(() => {
    Ct(l, 1, `tf-toolbar ${g(r) ?? ""}`), ue(v, "style", `display: ${(g(n) === "base" ? "flex" : "none") ?? ""}`), ue(w, "style", `display: ${(g(n) !== "base" ? "flex" : "none") ?? ""}`);
  }), T(e, l), le();
}
oe(Vd, {}, [], [], !0);
const uw = () => {
  const { nodeLookup: e } = qe();
  return {
    getNode: (t) => {
      var n;
      return (n = j(e).get(t)) == null ? void 0 : n.internals.userNode;
    }
  };
}, cw = () => {
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
}, dw = () => {
  const { edges: e } = qe();
  return {
    getEdgesByTarget: (t) => j(e).filter((n) => n.target === t)
  };
};
var fw = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), vw = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), gw = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), hw = /* @__PURE__ */ ne('<div class="heading svelte-1anjpai"><!> <!></div> <!> <div></div> <div class="heading svelte-1anjpai"><!> <!></div> <!>', 1);
const pw = {
  hash: "svelte-1anjpai",
  code: `.heading.svelte-1anjpai {display:flex;margin-bottom:10px;}

    /* 新增样式 */`
};
function Dd(e, t) {
  se(t, !0), Qe(e, pw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: a } = kn(), { updateNodeData: i } = Dt(), s = Jn().customNodes[n().type];
  let l;
  function u(d, f) {
    d && d.appendChild(f);
  }
  const c = document.createElement("div");
  return c.textContent = "点击我", c.style.backgroundColor = "green", c.style.color = "white", Vt(() => {
    var d;
    (d = s.render) == null || d.call(s, c), u(l, c);
  }), cn(e, ut(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var f = fw();
        T(d, f);
      },
      children: (d, f) => {
        var v = hw(), w = xe(v), b = Y(w);
        Ge(b, {
          level: 3,
          children: (S, z) => {
            ze();
            var P = Ie("输入参数");
            T(S, P);
          },
          $$slots: { default: !0 }
        });
        var x = I(b, 2);
        Fe(x, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (S, z) => {
            var P = vw();
            T(S, P);
          },
          $$slots: { default: !0 }
        }), K(w);
        var _ = I(w, 2);
        Bt(_, {});
        var h = I(_, 2);
        wn(h, (S) => l = S, () => l);
        var C = I(h, 2), y = Y(C);
        Ge(y, {
          level: 3,
          mt: "10px",
          children: (S, z) => {
            ze();
            var P = Ie("输出参数");
            T(S, P);
          },
          $$slots: { default: !0 }
        });
        var $ = I(y, 2);
        Fe($, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "outputDefs");
          },
          children: (S, z) => {
            var P = gw();
            T(S, P);
          },
          $$slots: { default: !0 }
        }), K(C);
        var E = I(C, 2);
        In(E, {}), T(d, v);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le({
    get data() {
      return n();
    },
    set data(d) {
      n(d), p();
    }
  });
}
oe(Dd, { data: {} }, [], [], !0);
var mw = /* @__PURE__ */ ne('<div class="panel-content svelte-1oe15vw"><div>边属性设置</div> <div class="setting-title svelte-1oe15vw">边条件设置</div> <div class="setting-item"><!></div></div>'), yw = /* @__PURE__ */ ne("<!> <!> <!> <!>", 1), ww = /* @__PURE__ */ ne('<div style="position: relative; height: 100%; width: 100%"><!> <!></div>');
const bw = {
  hash: "svelte-1oe15vw",
  code: ".panel-content.svelte-1oe15vw {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-1oe15vw {margin:10px 0;font-size:12px;color:#999;}"
};
function Td(e, t) {
  se(t, !0), Qe(e, bw);
  const n = m(t, "onInit", 7), r = Dt();
  n()(r);
  let o = ar(!1);
  const a = ($) => {
    $.preventDefault(), $.dataTransfer && ($.dataTransfer.dropEffect = "move");
  }, i = ($) => {
    var E;
    $.preventDefault();
    const S = r.screenToFlowPosition({
      x: $.clientX - 250,
      y: $.clientY - 100
    }), z = (E = $.dataTransfer) == null ? void 0 : E.getData("application/tinyflow"), P = z ? JSON.parse(z) : {}, N = {
      id: `node_${Ar()}`,
      position: S,
      data: {},
      ...P
    };
    Qo.addNode(N), Qo.selectNodeOnly(N.id);
  }, { getNode: s } = uw(), l = ($) => {
    const E = s($.source), S = s($.target);
    if ($.sourceHandle === "loop_handle" || E.parentId) {
      const z = r.getEdges();
      for (let P of z)
        if (P.target === $.target) {
          const N = s(P.source);
          if ($.sourceHandle === "loop_handle" && N.parentId !== E.id || E.parentId && N.parentId !== E.parentId)
            return !1;
        }
    }
    return !(!E.parentId && S.parentId && S.parentId !== E.id);
  }, { ensureParentInNodesBefore: u } = cw(), c = ($, E) => {
    if (!E.isValid)
      return;
    const S = E.toNode;
    if (S.parentId)
      return;
    const z = E.fromNode, P = E.fromHandle, N = { position: { ...S.position } };
    if (P.id === "loop_handle" ? N.parentId = z.id : z.parentId && (N.parentId = z.parentId), N.parentId) {
      const A = s(N.parentId);
      N.position = {
        x: S.position.x - A.position.x,
        y: S.position.y - A.position.y
      }, u(N.parentId, S.id), r.updateNode(S.id, N);
    }
  }, { getEdgesByTarget: d } = dw(), f = ($) => {
    $.edges.forEach((E) => {
      const S = s(E.target);
      if (S.parentId) {
        const z = d(E.target), P = s(S.parentId);
        if (z.length === 0)
          r.updateNode(S.id, {
            parentId: void 0,
            position: {
              x: S.position.x + P.position.x,
              y: S.position.y + P.position.y
            }
          });
        else {
          let N = !1;
          for (let A = 0; A < z.length; A++) {
            const D = z[A], R = s(D.source);
            if (R.parentId || R.type === "loopNode") {
              N = !0;
              break;
            }
          }
          N || r.updateNode(S.id, {
            parentId: void 0,
            position: {
              x: S.position.x + P.position.x,
              y: S.position.y + P.position.y
            }
          });
        }
      }
    });
  }, v = ($, E) => {
    console.log("onconnectstart: ", $, E);
  }, w = ($) => {
    console.log("onconnect: ", $);
  }, b = { ...ow }, x = Jn().customNodes;
  if (x)
    for (let $ of Object.keys(x))
      b[$] = Dd;
  var _ = ww(), h = Y(_);
  Vd(h, {});
  var C = I(h, 2);
  const y = /* @__PURE__ */ Pe(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: po.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  return Kc(C, ut({ nodeTypes: b }, Qo, {
    class: "tinyflow-logo",
    isValidConnection: l,
    onconnectend: c,
    onconnectstart: v,
    onconnect: w,
    connectionRadius: 50,
    ondelete: f,
    onclick: ($) => {
      const E = $.target;
      E.classList.contains("svelte-flow__edge-interaction") || E.classList.contains("panel-content") || E.closest(".panel-content") || q(o, !1);
    },
    get defaultEdgeOptions() {
      return g(y);
    },
    $$events: {
      drop: i,
      dragover: a,
      edgeclick: () => {
        q(o, !0);
      }
    },
    children: ($, E) => {
      var S = yw(), z = xe(S);
      Jc(z, {});
      var P = I(z, 2);
      Gc(P, {});
      var N = I(P, 2);
      td(N, {});
      var A = I(N, 2);
      {
        var D = (R) => {
          zo(R, {
            children: (H, L) => {
              var k = mw(), M = I(Y(k), 4), V = Y(M);
              _t(V, {
                rows: 3,
                placeholder: "请输入边条件",
                style: "width: 100%",
                oninput: (O) => {
                }
              }), K(M), K(k), T(H, k);
            },
            $$slots: { default: !0 }
          });
        };
        Ce(A, (R) => {
          g(o) && R(D);
        });
      }
      T($, S);
    },
    $$slots: { default: !0 }
  })), K(_), T(e, _), le({
    get onInit() {
      return n();
    },
    set onInit($) {
      n($), p();
    }
  });
}
oe(Td, { onInit: {} }, [], [], !0);
function xw(e, t) {
  se(t, !0);
  const n = m(t, "options", 7), r = m(t, "onInit", 7), { data: o } = n();
  return Qo.init((o == null ? void 0 : o.nodes) || [], (o == null ? void 0 : o.edges) || []), Hr("tinyflow_options", n()), Xc(e, {
    fitView: !0,
    children: (a, i) => {
      Td(a, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), le({
    get options() {
      return n();
    },
    set options(a) {
      n(a), p();
    },
    get onInit() {
      return r();
    },
    set onInit(a) {
      r(a), p();
    }
  });
}
customElements.define("tinyflow-component", oe(xw, { options: {}, onInit: {} }, [], [], !1));
const Mw = /* @__PURE__ */ Qd({
  __name: "Tinyflow",
  props: {
    className: {},
    style: {},
    data: {},
    provider: {},
    customNodes: {}
  },
  setup(e, { expose: t }) {
    const n = e, r = Jd(null);
    let o = null;
    const a = {
      llm: () => [],
      knowledge: () => []
    };
    return ef(() => {
      if (r.value) {
        const s = {
          ...a,
          ...n.provider
        };
        o = new $2({
          element: r.value,
          data: n.data || {},
          provider: s,
          customNodes: n.customNodes
        });
      }
    }), tf(() => {
      o && (o.destroy(), o = null);
    }), t({
      getData: () => o ? o.getData() : (console.warn("Tinyflow instance is not initialized"), null)
    }), (s, l) => (rf(), nf("div", {
      ref_key: "divRef",
      ref: r,
      class: af(["tinyflow", s.className]),
      style: of(s.style)
    }, null, 6));
  }
});
export {
  Mw as Tinyflow
};
//# sourceMappingURL=index.js.map
