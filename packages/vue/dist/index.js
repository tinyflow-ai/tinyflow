import { defineComponent as Jd, ref as Qd, onMounted as ef, onUnmounted as tf, createElementBlock as nf, openBlock as rf, normalizeStyle as of, normalizeClass as af } from "vue";
var sf = Object.defineProperty, Ol = (e) => {
  throw TypeError(e);
}, lf = (e, t, n) => t in e ? sf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Et = (e, t, n) => lf(e, typeof t != "symbol" ? t + "" : t, n), Pa = (e, t, n) => t.has(e) || Ol("Cannot " + n), st = (e, t, n) => (Pa(e, t, "read from private field"), n ? n.call(e) : t.get(e)), xr = (e, t, n) => t.has(e) ? Ol("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Qo = (e, t, n, r) => (Pa(e, t, "write to private field"), t.set(e, n), n), uf = (e, t, n) => (Pa(e, t, "access private method"), n);
const cf = "5";
var Ss;
typeof window < "u" && ((Ss = window.__svelte ?? (window.__svelte = {})).v ?? (Ss.v = /* @__PURE__ */ new Set())).add(cf);
let Ir = !1, df = !1;
function ff() {
  Ir = !0;
}
ff();
const Oa = 1, Ta = 2, Tl = 4, vf = 8, gf = 16, hf = 1, pf = 2, Dl = 4, mf = 8, yf = 16, Ll = 1, wf = 2, Da = "[", La = "[!", Aa = "]", $r = {}, Mt = Symbol(), Al = "http://www.w3.org/2000/svg", xf = !1, rn = 2, Il = 4, Si = 8, Ia = 16, Dn = 32, Zr = 64, ei = 128, jt = 256, ti = 512, mt = 1024, Ln = 2048, vr = 4096, Vn = 8192, Mi = 16384, bf = 32768, Br = 65536, $f = 1 << 17, Cf = 1 << 19, Zl = 1 << 20, Yn = Symbol("$state"), Za = Symbol("legacy props"), kf = Symbol("");
var bo = Array.isArray, _f = Array.prototype.indexOf, Ba = Array.from, ni = Object.keys, oo = Object.defineProperty, zn = Object.getOwnPropertyDescriptor, Bl = Object.getOwnPropertyDescriptors, Sf = Object.prototype, Mf = Array.prototype, Ra = Object.getPrototypeOf;
function qr(e) {
  return typeof e == "function";
}
const dt = () => {
};
function Hf(e) {
  return e();
}
function io(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const Ef = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let ao = [], so = [];
function Rl() {
  var e = ao;
  ao = [], io(e);
}
function Wl() {
  var e = so;
  so = [], io(e);
}
function $o(e) {
  ao.length === 0 && queueMicrotask(Rl), ao.push(e);
}
function Vf(e) {
  so.length === 0 && Ef(Wl), so.push(e);
}
function Ms() {
  ao.length > 0 && Rl(), so.length > 0 && Wl();
}
function Xl(e) {
  return e === this.v;
}
function Wa(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Xa(e) {
  return !Wa(e, this.v);
}
function zf(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Nf() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Pf(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Of() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Tf() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Df(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Lf() {
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
function Vt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Xl,
    rv: 0,
    wv: 0
  };
  return n;
}
function ar(e) {
  return /* @__PURE__ */ Yl(Vt(e));
}
// @__NO_SIDE_EFFECTS__
function Co(e, t = !1) {
  var n;
  const r = Vt(e);
  return t || (r.equals = Xa), Ir && We !== null && We.l !== null && ((n = We.l).s ?? (n.s = [])).push(r), r;
}
function oe(e, t = !1) {
  return /* @__PURE__ */ Yl(/* @__PURE__ */ Co(e, t));
}
// @__NO_SIDE_EFFECTS__
function Yl(e) {
  return Ue !== null && !tn && Ue.f & rn && (gn === null ? Wf([e]) : gn.push(e)), e;
}
function F(e, t) {
  return Ue !== null && !tn && Pi() && Ue.f & (rn | Ia) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (gn === null || !gn.includes(e)) && Zf(), la(e, t);
}
function la(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = Ql(), Kl(e, Ln), Pi() && qe !== null && qe.f & mt && !(qe.f & (Dn | Zr)) && (Mn === null ? Xf([e]) : Mn.push(e))), t;
}
function Hs(e, t = 1) {
  var n = g(e), r = t === 1 ? n++ : n--;
  return F(e, n), r;
}
function Kl(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Pi(), o = n.length, a = 0; a < o; a++) {
      var i = n[a], s = i.f;
      s & Ln || !r && i === qe || (on(i, t), s & (mt | jt) && (s & rn ? Kl(
        /** @type {Derived} */
        i,
        vr
      ) : zi(
        /** @type {Effect} */
        i
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Ee(e) {
  var t = rn | Ln, n = Ue !== null && Ue.f & rn ? (
    /** @type {Derived} */
    Ue
  ) : null;
  return qe === null || n !== null && n.f & jt ? t |= jt : qe.f |= Zl, {
    ctx: We,
    deps: null,
    effects: null,
    equals: Xl,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: n ?? qe
  };
}
// @__NO_SIDE_EFFECTS__
function me(e) {
  const t = /* @__PURE__ */ Ee(e);
  return t.equals = Xa, t;
}
function ql(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Ft(
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
  var t, n = qe;
  Gn(Bf(e));
  try {
    ql(e), t = tu(e);
  } finally {
    Gn(n);
  }
  return t;
}
function jl(e) {
  var t = Rf(e), n = (Wn || e.f & jt) && e.deps !== null ? vr : mt;
  on(e, n), e.equals(t) || (e.v = t, e.wv = Ql());
}
function Hi(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let He = !1;
function It(e) {
  He = e;
}
let De;
function $t(e) {
  if (e === null)
    throw Hi(), $r;
  return De = e;
}
function mn() {
  return $t(
    /** @type {TemplateNode} */
    /* @__PURE__ */ $n(De)
  );
}
function W(e) {
  if (He) {
    if (/* @__PURE__ */ $n(De) !== null)
      throw Hi(), $r;
    De = e;
  }
}
function ze(e = 1) {
  if (He) {
    for (var t = e, n = De; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ $n(n);
    De = n;
  }
}
function ua() {
  for (var e = 0, t = De; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === Aa) {
        if (e === 0) return t;
        e -= 1;
      } else (n === Da || n === La) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ $n(t)
    );
    t.remove(), t = r;
  }
}
function Lt(e, t = null, n) {
  if (typeof e != "object" || e === null || Yn in e)
    return e;
  const r = Ra(e);
  if (r !== Sf && r !== Mf)
    return e;
  var o = /* @__PURE__ */ new Map(), a = bo(e), i = Vt(0);
  a && o.set("length", Vt(
    /** @type {any[]} */
    e.length
  ));
  var s;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, u, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Lf();
        var d = o.get(u);
        return d === void 0 ? (d = Vt(c.value), o.set(u, d)) : F(d, Lt(c.value, s)), !0;
      },
      deleteProperty(l, u) {
        var c = o.get(u);
        if (c === void 0)
          u in l && o.set(u, Vt(Mt));
        else {
          if (a && typeof u == "string") {
            var d = (
              /** @type {Source<number>} */
              o.get("length")
            ), f = Number(u);
            Number.isInteger(f) && f < d.v && F(d, f);
          }
          F(c, Mt), Es(i);
        }
        return !0;
      },
      get(l, u, c) {
        var d;
        if (u === Yn)
          return e;
        var f = o.get(u), v = u in l;
        if (f === void 0 && (!v || (d = zn(l, u)) != null && d.writable) && (f = Vt(Lt(v ? l[u] : Mt, s)), o.set(u, f)), f !== void 0) {
          var y = g(f);
          return y === Mt ? void 0 : y;
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
          if (f !== void 0 && v !== Mt)
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
        var d = o.get(u), f = d !== void 0 && d.v !== Mt || Reflect.has(l, u);
        if (d !== void 0 || qe !== null && (!f || (c = zn(l, u)) != null && c.writable)) {
          d === void 0 && (d = Vt(f ? Lt(l[u], s) : Mt), o.set(u, d));
          var v = g(d);
          if (v === Mt)
            return !1;
        }
        return f;
      },
      set(l, u, c, d) {
        var f, v = o.get(u), y = u in l;
        if (a && u === "length")
          for (var x = c; x < /** @type {Source<number>} */
          v.v; x += 1) {
            var b = o.get(x + "");
            b !== void 0 ? F(b, Mt) : x in l && (b = Vt(Mt), o.set(x + "", b));
          }
        v === void 0 ? (!y || (f = zn(l, u)) != null && f.writable) && (v = Vt(void 0), F(v, Lt(c, s)), o.set(u, v)) : (y = v.v !== Mt, F(v, Lt(c, s)));
        var C = Reflect.getOwnPropertyDescriptor(l, u);
        if (C != null && C.set && C.set.call(d, c), !y) {
          if (a && typeof u == "string") {
            var h = (
              /** @type {Source<number>} */
              o.get("length")
            ), $ = Number(u);
            Number.isInteger($) && $ >= h.v && F(h, $ + 1);
          }
          Es(i);
        }
        return !0;
      },
      ownKeys(l) {
        g(i);
        var u = Reflect.ownKeys(l).filter((f) => {
          var v = o.get(f);
          return v === void 0 || v.v !== Mt;
        });
        for (var [c, d] of o)
          d.v !== Mt && !(c in l) && u.push(c);
        return u;
      },
      setPrototypeOf() {
        Af();
      }
    }
  );
}
function Es(e, t = 1) {
  F(e, e.v + t);
}
var Ht, Fl, Gl, Ul;
function ca() {
  if (Ht === void 0) {
    Ht = window, Fl = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    Gl = zn(t, "firstChild").get, Ul = zn(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Pn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function bt(e) {
  return Gl.call(e);
}
// @__NO_SIDE_EFFECTS__
function $n(e) {
  return Ul.call(e);
}
function Y(e, t) {
  if (!He)
    return /* @__PURE__ */ bt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ bt(De)
  );
  if (n === null)
    n = De.appendChild(Pn());
  else if (t && n.nodeType !== 3) {
    var r = Pn();
    return n == null || n.before(r), $t(r), r;
  }
  return $t(n), n;
}
function xe(e, t) {
  if (!He) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ bt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ $n(n) : n;
  }
  return De;
}
function Z(e, t = 1, n = !1) {
  let r = He ? De : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ $n(r);
  if (!He)
    return r;
  var a = r == null ? void 0 : r.nodeType;
  if (n && a !== 3) {
    var i = Pn();
    return r === null ? o == null || o.after(i) : r.before(i), $t(i), i;
  }
  return $t(r), /** @type {TemplateNode} */
  r;
}
function Ya(e) {
  e.textContent = "";
}
let Yo = !1, ri = !1, oi = null, or = !1, Ka = !1;
function Vs(e) {
  Ka = e;
}
let to = [], Ue = null, tn = !1;
function Fn(e) {
  Ue = e;
}
let qe = null;
function Gn(e) {
  qe = e;
}
let gn = null;
function Wf(e) {
  gn = e;
}
let wt = null, Dt = 0, Mn = null;
function Xf(e) {
  Mn = e;
}
let Jl = 1, ii = 0, Wn = !1;
function Ql() {
  return ++Jl;
}
function Rr(e) {
  var t, n = e.f;
  if (n & Ln)
    return !0;
  if (n & vr) {
    var r = e.deps, o = (n & jt) !== 0;
    if (r !== null) {
      var a, i, s = (n & ti) !== 0, l = o && qe !== null && !Wn, u = r.length;
      if (s || l) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (a = 0; a < u; a++)
          i = r[a], (s || !((t = i == null ? void 0 : i.reactions) != null && t.includes(c))) && (i.reactions ?? (i.reactions = [])).push(c);
        s && (c.f ^= ti), l && d !== null && !(d.f & jt) && (c.f ^= jt);
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
    (!o || qe !== null && !Wn) && on(e, mt);
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
function Kf(e) {
  return (e.f & Mi) === 0 && (e.parent === null || (e.parent.f & ei) === 0);
}
function Ei(e, t, n, r) {
  if (Yo) {
    if (n === null && (Yo = !1), Kf(t))
      throw e;
    return;
  }
  n !== null && (Yo = !0);
  {
    Yf(e, t);
    return;
  }
}
function eu(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var o = 0; o < r.length; o++) {
      var a = r[o];
      a.f & rn ? eu(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (n ? on(a, Ln) : a.f & mt && on(a, vr), zi(
        /** @type {Effect} */
        a
      ));
    }
}
function tu(e) {
  var t, n = wt, r = Dt, o = Mn, a = Ue, i = Wn, s = gn, l = We, u = tn, c = e.f;
  wt = /** @type {null | Value[]} */
  null, Dt = 0, Mn = null, Wn = (c & jt) !== 0 && (tn || !or || Ue === null), Ue = c & (Dn | Zr) ? null : e, gn = null, zs(e.ctx), tn = !1, ii++;
  try {
    var d = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (wt !== null) {
      var v;
      if (ai(e, Dt), f !== null && Dt > 0)
        for (f.length = Dt + wt.length, v = 0; v < wt.length; v++)
          f[Dt + v] = wt[v];
      else
        e.deps = f = wt;
      if (!Wn)
        for (v = Dt; v < f.length; v++)
          ((t = f[v]).reactions ?? (t.reactions = [])).push(e);
    } else f !== null && Dt < f.length && (ai(e, Dt), f.length = Dt);
    if (Pi() && Mn !== null && !tn && f !== null && !(e.f & (rn | vr | Ln)))
      for (v = 0; v < /** @type {Source[]} */
      Mn.length; v++)
        eu(
          Mn[v],
          /** @type {Effect} */
          e
        );
    return a !== null && ii++, d;
  } finally {
    wt = n, Dt = r, Mn = o, Ue = a, Wn = i, gn = s, zs(l), tn = u;
  }
}
function qf(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = _f.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && t.f & rn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (wt === null || !wt.includes(t)) && (on(t, vr), t.f & (jt | ti) || (t.f ^= ti), ql(
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
      qf(e, n[r]);
}
function Vi(e) {
  var t = e.f;
  if (!(t & Mi)) {
    on(e, mt);
    var n = qe, r = We, o = or;
    qe = e, or = !0;
    try {
      t & Ia ? nv(e) : au(e), iu(e);
      var a = tu(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = Jl;
      var i = e.deps, s;
      xf && df && e.f & Ln;
    } catch (l) {
      Ei(l, e, n, r || e.ctx);
    } finally {
      or = o, qe = n;
    }
  }
}
function jf() {
  try {
    Of();
  } catch (e) {
    if (oi !== null)
      Ei(e, oi, null);
    else
      throw e;
  }
}
function nu() {
  var e = or;
  try {
    var t = 0;
    for (or = !0; to.length > 0; ) {
      t++ > 1e3 && jf();
      var n = to, r = n.length;
      to = [];
      for (var o = 0; o < r; o++) {
        var a = n[o];
        a.f & mt || (a.f ^= mt);
        var i = Gf(a);
        Ff(i);
      }
    }
  } finally {
    ri = !1, or = e, oi = null;
  }
}
function Ff(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if (!(r.f & (Mi | Vn)))
        try {
          Rr(r) && (Vi(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? su(r) : r.fn = null));
        } catch (o) {
          Ei(o, r, null, r.ctx);
        }
    }
}
function zi(e) {
  ri || (ri = !0, queueMicrotask(nu));
  for (var t = oi = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (Zr | Dn)) {
      if (!(n & mt)) return;
      t.f ^= mt;
    }
  }
  to.push(t);
}
function Gf(e) {
  for (var t = [], n = e.first; n !== null; ) {
    var r = n.f, o = (r & Dn) !== 0, a = o && (r & mt) !== 0;
    if (!a && !(r & Vn)) {
      if (r & Il)
        t.push(n);
      else if (o)
        n.f ^= mt;
      else {
        var i = Ue;
        try {
          Ue = n, Rr(n) && Vi(n);
        } catch (u) {
          Ei(u, n, null, n.ctx);
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
  for (Ms(); to.length > 0; )
    ri = !0, nu(), Ms();
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
    e.rv < ii && (e.rv = ii, wt === null && r !== null && r[Dt] === e ? Dt++ : wt === null ? wt = [e] : (!Wn || !wt.includes(e)) && wt.push(e));
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), a = o.parent;
    a !== null && !(a.f & jt) && (o.f ^= jt);
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
      const r = Bl(n);
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
function ru(e) {
  qe === null && Ue === null && Pf(), Ue !== null && Ue.f & jt && qe === null && Nf(), Ka && zf();
}
function Jf(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function gr(e, t, n, r = !0) {
  var o = (e & Zr) !== 0, a = qe, i = {
    ctx: We,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Ln,
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
      Vi(i), i.f |= bf;
    } catch (u) {
      throw Ft(i), u;
    }
  else t !== null && zi(i);
  var s = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (Zl | ei)) === 0;
  if (!s && !o && r && (a !== null && Jf(i, a), Ue !== null && Ue.f & rn)) {
    var l = (
      /** @type {Derived} */
      Ue
    );
    (l.effects ?? (l.effects = [])).push(i);
  }
  return i;
}
function ou(e) {
  const t = gr(Si, null, !1);
  return on(t, mt), t.teardown = e, t;
}
function Un(e) {
  ru();
  var t = qe !== null && (qe.f & Dn) !== 0 && We !== null && !We.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      We
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: qe,
      reaction: Ue
    });
  } else {
    var r = At(e);
    return r;
  }
}
function Qf(e) {
  return ru(), Wr(e);
}
function ev(e) {
  const t = gr(Zr, e, !0);
  return () => {
    Ft(t);
  };
}
function tv(e) {
  const t = gr(Zr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Hr(t, () => {
      Ft(t), r(void 0);
    }) : (Ft(t), r(void 0));
  });
}
function At(e) {
  return gr(Il, e, !1);
}
function de(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    We
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = Wr(() => {
    e(), !r.ran && (r.ran = !0, F(n.l.r2, !0), yn(t));
  });
}
function vt() {
  var e = (
    /** @type {ComponentContextLegacy} */
    We
  );
  Wr(() => {
    if (g(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        n.f & mt && on(n, vr), Rr(n) && Vi(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function Wr(e) {
  return gr(Si, e, !0);
}
function Me(e, t = [], n = Ee) {
  const r = t.map(n);
  return hr(() => e(...r.map(g)));
}
function hr(e, t = 0) {
  return gr(Si | Ia | t, e, !0);
}
function On(e, t = !0) {
  return gr(Si | Dn, e, !0, t);
}
function iu(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Ka, r = Ue;
    Vs(!0), Fn(null);
    try {
      t.call(null);
    } finally {
      Vs(n), Fn(r);
    }
  }
}
function au(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    Ft(n, t), n = r;
  }
}
function nv(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & Dn || Ft(t), t = n;
  }
}
function Ft(e, t = !0) {
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
  au(e, t && !n), ai(e, 0), on(e, Mi);
  var i = e.transitions;
  if (i !== null)
    for (const l of i)
      l.stop();
  iu(e);
  var s = e.parent;
  s !== null && s.first !== null && su(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function su(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Hr(e, t) {
  var n = [];
  qa(e, n, !0), lu(n, () => {
    Ft(e), t && t();
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
function qa(e, t, n) {
  if (!(e.f & Vn)) {
    if (e.f ^= Vn, e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || n) && t.push(i);
    for (var r = e.first; r !== null; ) {
      var o = r.next, a = (r.f & Br) !== 0 || (r.f & Dn) !== 0;
      qa(r, t, a ? n : !1), r = o;
    }
  }
}
function lo(e) {
  uu(e, !0);
}
function uu(e, t) {
  if (e.f & Vn) {
    e.f ^= Vn, e.f & mt || (e.f ^= mt), Rr(e) && (on(e, Ln), zi(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Br) !== 0 || (n.f & Dn) !== 0;
      uu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
function Ni(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let We = null;
function zs(e) {
  We = e;
}
function sr(e) {
  return (
    /** @type {T} */
    ja().get(e)
  );
}
function Er(e, t) {
  return ja().set(e, t), t;
}
function rv(e) {
  return ja().has(e);
}
function le(e, t = !1, n) {
  We = {
    p: We,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  }, Ir && !t && (We.l = {
    s: null,
    u: null,
    r1: [],
    r2: Vt(!1)
  });
}
function ue(e) {
  const t = We;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const i = t.e;
    if (i !== null) {
      var n = qe, r = Ue;
      t.e = null;
      try {
        for (var o = 0; o < i.length; o++) {
          var a = i[o];
          Gn(a.effect), Fn(a.reaction), At(a.fn);
        }
      } finally {
        Gn(n), Fn(r);
      }
    }
    We = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Pi() {
  return !Ir || We !== null && We.l === null;
}
function ja(e) {
  return We === null && Ni(), We.c ?? (We.c = new Map(ov(We) || void 0));
}
function ov(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function iv(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const av = [
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
function sv(e) {
  return av.includes(e);
}
const lv = {
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
function uv(e) {
  return e = e.toLowerCase(), lv[e] ?? e;
}
const cv = ["touchstart", "touchmove"];
function dv(e) {
  return cv.includes(e);
}
const fv = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function vv(e) {
  return fv.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function gv(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, $o(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function hv(e) {
  He && /* @__PURE__ */ bt(e) !== null && Ya(e);
}
let Ns = !1;
function pv() {
  Ns || (Ns = !0, document.addEventListener(
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
function mv(e) {
  var t = Ue, n = qe;
  Fn(null), Gn(null);
  try {
    return e();
  } finally {
    Fn(t), Gn(n);
  }
}
const cu = /* @__PURE__ */ new Set(), fa = /* @__PURE__ */ new Set();
function du(e, t, n, r = {}) {
  function o(a) {
    if (r.capture || Ur.call(t, a), !a.cancelBubble)
      return mv(() => n == null ? void 0 : n.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? $o(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function Re(e, t, n, r, o) {
  var a = { capture: r, passive: o }, i = du(e, t, n, a);
  (t === document.body || t === window || t === document) && ou(() => {
    t.removeEventListener(e, i, a);
  });
}
function Oi(e) {
  for (var t = 0; t < e.length; t++)
    cu.add(e[t]);
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
    var d = Ue, f = qe;
    Fn(null), Gn(null);
    try {
      for (var v, y = []; i !== null; ) {
        var x = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var b = i["__" + o];
          if (b !== void 0 && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (bo(b)) {
              var [C, ...h] = b;
              C.apply(i, [e, ...h]);
            } else
              b.call(i, e);
        } catch ($) {
          v ? y.push($) : v = $;
        }
        if (e.cancelBubble || x === n || x === null)
          break;
        i = x;
      }
      if (v) {
        for (let $ of y)
          queueMicrotask(() => {
            throw $;
          });
        throw v;
      }
    } finally {
      e.__root = n, delete e.currentTarget, Fn(d), Gn(f);
    }
  }
}
function Fa(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Nt(e, t) {
  var n = (
    /** @type {Effect} */
    qe
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function re(e, t) {
  var n = (t & Ll) !== 0, r = (t & wf) !== 0, o, a = !e.startsWith("<!>");
  return () => {
    if (He)
      return Nt(De, null), De;
    o === void 0 && (o = Fa(a ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ bt(o)));
    var i = (
      /** @type {TemplateNode} */
      r || Fl ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ bt(i)
      ), l = (
        /** @type {TemplateNode} */
        i.lastChild
      );
      Nt(s, l);
    } else
      Nt(i, i);
    return i;
  };
}
// @__NO_SIDE_EFFECTS__
function be(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & Ll) !== 0, a = `<${n}>${r ? e : "<!>" + e}</${n}>`, i;
  return () => {
    if (He)
      return Nt(De, null), De;
    if (!i) {
      var s = (
        /** @type {DocumentFragment} */
        Fa(a)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ bt(s)
      );
      if (o)
        for (i = document.createDocumentFragment(); /* @__PURE__ */ bt(l); )
          i.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ bt(l)
          );
      else
        i = /** @type {Element} */
        /* @__PURE__ */ bt(l);
    }
    var u = (
      /** @type {TemplateNode} */
      i.cloneNode(!0)
    );
    if (o) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ bt(u)
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
function Ie(e = "") {
  if (!He) {
    var t = Pn(e + "");
    return Nt(t, t), t;
  }
  var n = De;
  return n.nodeType !== 3 && (n.before(n = Pn()), $t(n)), Nt(n, n), n;
}
function Qe() {
  if (He)
    return Nt(De, null), De;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Pn();
  return e.append(t, n), Nt(t, n), e;
}
function D(e, t) {
  if (He) {
    qe.nodes_end = De, mn();
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
function fu(e, t) {
  return vu(e, t);
}
function yv(e, t) {
  ca(), t.intro = t.intro ?? !1;
  const n = t.target, r = He, o = De;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ bt(n)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== Da); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ $n(a);
    if (!a)
      throw $r;
    It(!0), $t(
      /** @type {Comment} */
      a
    ), mn();
    const i = vu(e, { ...t, anchor: a });
    if (De === null || De.nodeType !== 8 || /** @type {Comment} */
    De.data !== Aa)
      throw Hi(), $r;
    return It(!1), /**  @type {Exports} */
    i;
  } catch (i) {
    if (i === $r)
      return t.recover === !1 && Tf(), ca(), Ya(n), It(!1), fu(e, t);
    throw i;
  } finally {
    It(r), $t(o);
  }
}
const yr = /* @__PURE__ */ new Map();
function vu(e, { target: t, anchor: n, props: r = {}, events: o, context: a, intro: i = !0 }) {
  ca();
  var s = /* @__PURE__ */ new Set(), l = (d) => {
    for (var f = 0; f < d.length; f++) {
      var v = d[f];
      if (!s.has(v)) {
        s.add(v);
        var y = dv(v);
        t.addEventListener(v, Ur, { passive: y });
        var x = yr.get(v);
        x === void 0 ? (document.addEventListener(v, Ur, { passive: y }), yr.set(v, 1)) : yr.set(v, x + 1);
      }
    }
  };
  l(Ba(cu)), fa.add(l);
  var u = void 0, c = tv(() => {
    var d = n ?? t.appendChild(Pn());
    return On(() => {
      if (a) {
        le({});
        var f = (
          /** @type {ComponentContext} */
          We
        );
        f.c = a;
      }
      o && (r.$$events = o), He && Nt(
        /** @type {TemplateNode} */
        d,
        null
      ), u = e(d, r) || {}, He && (qe.nodes_end = De), a && ue();
    }), () => {
      var f;
      for (var v of s) {
        t.removeEventListener(v, Ur);
        var y = (
          /** @type {number} */
          yr.get(v)
        );
        --y === 0 ? (document.removeEventListener(v, Ur), yr.delete(v)) : yr.set(v, y);
      }
      fa.delete(l), d !== n && ((f = d.parentNode) == null || f.removeChild(d));
    };
  });
  return va.set(u, c), u;
}
let va = /* @__PURE__ */ new WeakMap();
function wv(e, t) {
  const n = va.get(e);
  return n ? (va.delete(e), n(t)) : Promise.resolve();
}
function Ce(e, t, [n, r] = [0, 0]) {
  He && n === 0 && mn();
  var o = e, a = null, i = null, s = Mt, l = n > 0 ? Br : 0, u = !1;
  const c = (f, v = !0) => {
    u = !0, d(v, f);
  }, d = (f, v) => {
    if (s === (s = f)) return;
    let y = !1;
    if (He && r !== -1) {
      if (n === 0) {
        const b = (
          /** @type {Comment} */
          o.data
        );
        b === Da ? r = 0 : b === La ? r = 1 / 0 : (r = parseInt(b.substring(1)), r !== r && (r = s ? 1 / 0 : -1));
      }
      const x = r > n;
      !!s === x && (o = ua(), $t(o), It(!1), y = !0, r = -1);
    }
    s ? (a ? lo(a) : v && (a = On(() => v(o))), i && Hr(i, () => {
      i = null;
    })) : (i ? lo(i) : v && (i = On(() => v(o, [n + 1, r]))), a && Hr(a, () => {
      a = null;
    })), y && It(!0);
  };
  hr(() => {
    u = !1, t(c), u || d(null, null);
  }, l), He && (o = De);
}
function uo(e, t) {
  return t;
}
function xv(e, t, n, r) {
  for (var o = [], a = t.length, i = 0; i < a; i++)
    qa(t[i].e, o, !0);
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
  lu(o, () => {
    for (var u = 0; u < a; u++) {
      var c = t[u];
      s || (r.delete(c.k), Bn(e, c.prev, c.next)), Ft(c.e, !s);
    }
  });
}
function Pt(e, t, n, r, o, a = null) {
  var i = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & Tl) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    i = He ? $t(
      /** @type {Comment | Text} */
      /* @__PURE__ */ bt(u)
    ) : u.appendChild(Pn());
  }
  He && mn();
  var c = null, d = !1, f = /* @__PURE__ */ me(() => {
    var v = n();
    return bo(v) ? v : v == null ? [] : Ba(v);
  });
  hr(() => {
    var v = g(f), y = v.length;
    if (d && y === 0)
      return;
    d = y === 0;
    let x = !1;
    if (He) {
      var b = (
        /** @type {Comment} */
        i.data === La
      );
      b !== (y === 0) && (i = ua(), $t(i), It(!1), x = !0);
    }
    if (He) {
      for (var C = null, h, $ = 0; $ < y; $++) {
        if (De.nodeType === 8 && /** @type {Comment} */
        De.data === Aa) {
          i = /** @type {Comment} */
          De, x = !0, It(!1);
          break;
        }
        var w = v[$], k = r(w, $);
        h = gu(
          De,
          s,
          C,
          null,
          w,
          k,
          $,
          o,
          t,
          n
        ), s.items.set(k, h), C = h;
      }
      y > 0 && $t(ua());
    }
    He || bv(v, s, i, o, t, r, n), a !== null && (y === 0 ? c ? lo(c) : c = On(() => a(i)) : c !== null && Hr(c, () => {
      c = null;
    })), x && It(!0), g(f);
  }), He && (i = De);
}
function bv(e, t, n, r, o, a, i) {
  var s, l, u, c, d = (o & vf) !== 0, f = (o & (Oa | Ta)) !== 0, v = e.length, y = t.items, x = t.first, b = x, C, h = null, $, w = [], k = [], S, M, V, z;
  if (d)
    for (z = 0; z < v; z += 1)
      S = e[z], M = a(S, z), V = y.get(M), V !== void 0 && ((s = V.a) == null || s.measure(), ($ ?? ($ = /* @__PURE__ */ new Set())).add(V));
  for (z = 0; z < v; z += 1) {
    if (S = e[z], M = a(S, z), V = y.get(M), V === void 0) {
      var P = b ? (
        /** @type {TemplateNode} */
        b.e.nodes_start
      ) : n;
      h = gu(
        P,
        t,
        h,
        h === null ? t.first : h.next,
        S,
        M,
        z,
        r,
        o,
        i
      ), y.set(M, h), w = [], k = [], b = h.next;
      continue;
    }
    if (f && $v(V, S, z, o), V.e.f & Vn && (lo(V.e), d && ((l = V.a) == null || l.unfix(), ($ ?? ($ = /* @__PURE__ */ new Set())).delete(V))), V !== b) {
      if (C !== void 0 && C.has(V)) {
        if (w.length < k.length) {
          var T = k[0], A;
          h = T.prev;
          var I = w[0], H = w[w.length - 1];
          for (A = 0; A < w.length; A += 1)
            Ps(w[A], T, n);
          for (A = 0; A < k.length; A += 1)
            C.delete(k[A]);
          Bn(t, I.prev, H.next), Bn(t, h, I), Bn(t, H, T), b = T, h = H, z -= 1, w = [], k = [];
        } else
          C.delete(V), Ps(V, b, n), Bn(t, V.prev, V.next), Bn(t, V, h === null ? t.first : h.next), Bn(t, h, V), h = V;
        continue;
      }
      for (w = [], k = []; b !== null && b.k !== M; )
        b.e.f & Vn || (C ?? (C = /* @__PURE__ */ new Set())).add(b), k.push(b), b = b.next;
      if (b === null)
        continue;
      V = b;
    }
    w.push(V), h = V, b = V.next;
  }
  if (b !== null || C !== void 0) {
    for (var N = C === void 0 ? [] : Ba(C); b !== null; )
      b.e.f & Vn || N.push(b), b = b.next;
    var _ = N.length;
    if (_ > 0) {
      var E = o & Tl && v === 0 ? n : null;
      if (d) {
        for (z = 0; z < _; z += 1)
          (u = N[z].a) == null || u.measure();
        for (z = 0; z < _; z += 1)
          (c = N[z].a) == null || c.fix();
      }
      xv(t, N, E, y);
    }
  }
  d && $o(() => {
    var O;
    if ($ !== void 0)
      for (V of $)
        (O = V.a) == null || O.apply();
  }), qe.first = t.first && t.first.e, qe.last = h && h.e;
}
function $v(e, t, n, r) {
  r & Oa && la(e.v, t), r & Ta ? la(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function gu(e, t, n, r, o, a, i, s, l, u) {
  var c = (l & Oa) !== 0, d = (l & gf) === 0, f = c ? d ? /* @__PURE__ */ Co(o) : Vt(o) : o, v = l & Ta ? Vt(i) : i, y = {
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
    return y.e = On(() => s(e, f, v, u), He), y.e.prev = n && n.e, y.e.next = r && r.e, n === null ? t.first = y : (n.next = y, n.e.next = y.e), r !== null && (r.prev = y, r.e.prev = y.e), y;
  } finally {
  }
}
function Ps(e, t, n) {
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
function Ga(e, t, n, r, o) {
  var a = e, i = "", s;
  hr(() => {
    if (i === (i = t() ?? "")) {
      He && mn();
      return;
    }
    s !== void 0 && (Ft(s), s = void 0), i !== "" && (s = On(() => {
      if (He) {
        De.data;
        for (var l = mn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ $n(l);
        if (l === null)
          throw Hi(), $r;
        Nt(De, u), a = $t(l);
        return;
      }
      var c = i + "", d = Fa(c);
      Nt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ bt(d),
        /** @type {TemplateNode} */
        d.lastChild
      ), a.before(d);
    }));
  });
}
function pt(e, t, n, r, o) {
  var a;
  He && mn();
  var i = (a = t.$$slots) == null ? void 0 : a[n], s = !1;
  i === !0 && (i = t[n === "default" ? "children" : n], s = !0), i === void 0 || i(e, s ? () => r : r);
}
function Cv(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const n in e.$$slots)
    t[n] = !0;
  return t;
}
function lr(e, t, ...n) {
  var r = e, o = dt, a;
  hr(() => {
    o !== (o = t()) && (a && (Ft(a), a = null), a = On(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Br), He && (r = De);
}
function hu(e, t, n) {
  He && mn();
  var r = e, o, a;
  hr(() => {
    o !== (o = t()) && (a && (Hr(a), a = null), o && (a = On(() => n(r, o))));
  }, Br), He && (r = De);
}
function kv(e, t, n, r, o, a) {
  let i = He;
  He && mn();
  var s, l, u = null;
  He && De.nodeType === 1 && (u = /** @type {Element} */
  De, mn());
  var c = (
    /** @type {TemplateNode} */
    He ? De : e
  ), d;
  hr(() => {
    const f = t() || null;
    var v = f === "svg" ? Al : null;
    f !== s && (d && (f === null ? Hr(d, () => {
      d = null, l = null;
    }) : f === l ? lo(d) : Ft(d)), f && f !== l && (d = On(() => {
      if (u = He ? (
        /** @type {Element} */
        u
      ) : v ? document.createElementNS(v, f) : document.createElement(f), Nt(u, u), r) {
        He && vv(f) && u.append(document.createComment(""));
        var y = (
          /** @type {TemplateNode} */
          He ? /* @__PURE__ */ bt(u) : u.appendChild(Pn())
        );
        He && (y === null ? It(!1) : $t(y)), r(u, y);
      }
      qe.nodes_end = u, c.before(u);
    })), s = f, s && (l = s));
  }, Br), i && (It(!0), $t(c));
}
function Je(e, t) {
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
  At(() => {
    var r = yn(() => t(e, n == null ? void 0 : n()) || {});
    if (n && r != null && r.update) {
      var o = !1, a = (
        /** @type {any} */
        {}
      );
      Wr(() => {
        var i = n();
        G(i), o && Wa(a, i) && (a = i, r.update(i));
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
function _v() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = pu(e)) && (r && (r += " "), r += t);
  return r;
}
function Cn(e) {
  return typeof e == "object" ? _v(e) : e ?? "";
}
const Os = [...` 	
\r\f \v\uFEFF`];
function Sv(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var a = o.length, i = 0; (i = r.indexOf(o, i)) >= 0; ) {
          var s = i + a;
          (i === 0 || Os.includes(r[i - 1])) && (s === r.length || Os.includes(r[s])) ? r = (i === 0 ? "" : r.substring(0, i)) + r.substring(s + 1) : i = s;
        }
  }
  return r === "" ? null : r;
}
function Ct(e, t, n, r, o, a) {
  var i = e.__className;
  if (He || i !== n) {
    var s = Sv(n, r, a);
    (!He || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e.__className = n;
  } else if (a)
    for (var l in a) {
      var u = !!a[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return a;
}
const jr = Symbol("class");
function no(e) {
  if (He) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          ce(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          ce(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, Vf(n), pv();
  }
}
function Gi(e, t) {
  var n = e.__attributes ?? (e.__attributes = {});
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function Mv(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function ce(e, t, n, r) {
  var o = e.__attributes ?? (e.__attributes = {});
  He && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[kf] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && mu(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function an(e, t, n, r, o = !1, a = !1, i = !1) {
  let s = He && a;
  s && It(!1);
  var l = t || {}, u = e.tagName === "OPTION";
  for (var c in t)
    c in n || (n[c] = null);
  n.class ? n.class = Cn(n.class) : (r || n[jr]) && (n.class = null);
  var d = mu(e), f = (
    /** @type {Record<string, unknown>} **/
    e.__attributes ?? (e.__attributes = {})
  );
  for (const $ in n) {
    let w = n[$];
    if (u && $ === "value" && w == null) {
      e.value = e.__value = "", l[$] = w;
      continue;
    }
    if ($ === "class") {
      var v = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Ct(e, v, w, r, t == null ? void 0 : t[jr], n[jr]), l[$] = w, l[jr] = n[jr];
      continue;
    }
    var y = l[$];
    if (w !== y) {
      l[$] = w;
      var x = $[0] + $[1];
      if (x !== "$$") {
        if (x === "on") {
          const k = {}, S = "$$" + $;
          let M = $.slice(2);
          var b = sv(M);
          if (iv(M) && (M = M.slice(0, -7), k.capture = !0), !b && y) {
            if (w != null) continue;
            e.removeEventListener(M, l[S], k), l[S] = null;
          }
          if (w != null)
            if (b)
              e[`__${M}`] = w, Oi([M]);
            else {
              let V = function(z) {
                l[$].call(this, z);
              };
              l[S] = du(M, e, V, k);
            }
          else b && (e[`__${M}`] = void 0);
        } else if ($ === "style" && w != null)
          e.style.cssText = w + "";
        else if ($ === "autofocus")
          gv(
            /** @type {HTMLElement} */
            e,
            !!w
          );
        else if (!a && ($ === "__value" || $ === "value" && w != null))
          e.value = e.__value = w;
        else if ($ === "selected" && u)
          Mv(
            /** @type {HTMLOptionElement} */
            e,
            w
          );
        else {
          var C = $;
          o || (C = uv(C));
          var h = C === "defaultValue" || C === "defaultChecked";
          if (w == null && !a && !h)
            if (f[$] = null, C === "value" || C === "checked") {
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
              e.removeAttribute($);
          else h || d.includes(C) && (a || typeof w != "string") ? e[C] = w : typeof w != "function" && ce(e, C, w);
        }
        $ === "style" && "__styles" in e && (e.__styles = {});
      }
    }
  }
  return s && It(!0), l;
}
var Ts = /* @__PURE__ */ new Map();
function mu(e) {
  var t = Ts.get(e.nodeName);
  if (t) return t;
  Ts.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = Bl(r);
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
var nr, ro, Ko, ga, yu;
const ha = class {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    xr(this, ga), xr(this, nr, /* @__PURE__ */ new WeakMap()), xr(this, ro), xr(this, Ko), Qo(this, Ko, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = st(this, nr).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), st(this, nr).set(t, r), uf(this, ga, yu).call(this).observe(t, st(this, Ko)), () => {
      var o = st(this, nr).get(t);
      o.delete(n), o.size === 0 && (st(this, nr).delete(t), st(this, ro).unobserve(t));
    };
  }
};
nr = /* @__PURE__ */ new WeakMap(), ro = /* @__PURE__ */ new WeakMap(), Ko = /* @__PURE__ */ new WeakMap(), ga = /* @__PURE__ */ new WeakSet(), yu = function() {
  return st(this, ro) ?? Qo(this, ro, new ResizeObserver(
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
Et(ha, "entries", /* @__PURE__ */ new WeakMap());
let Hv = ha;
var Ev = /* @__PURE__ */ new Hv({
  box: "border-box"
});
function Ds(e, t, n) {
  var r = Ev.observe(e, () => n(e[t]));
  At(() => (yn(() => n(e[t])), r));
}
function Ls(e, t) {
  return e === t || (e == null ? void 0 : e[Yn]) === t;
}
function wn(e = {}, t, n, r) {
  return At(() => {
    var o, a;
    return Wr(() => {
      o = a, a = [], yn(() => {
        e !== n(...a) && (t(e, ...a), o && Ls(n(...o), e) && t(null, ...o));
      });
    }), () => {
      $o(() => {
        a && Ls(n(...a), e) && t(null, ...a);
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
function Oe(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    We
  ), n = t.l.u;
  if (!n) return;
  let r = () => G(t.s);
  if (e) {
    let o = 0, a = (
      /** @type {Record<string, any>} */
      {}
    );
    const i = /* @__PURE__ */ Ee(() => {
      let s = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== a[u] && (a[u] = l[u], s = !0);
      return s && o++, o;
    });
    r = () => g(i);
  }
  n.b.length && Qf(() => {
    As(t, r), io(n.b);
  }), Un(() => {
    const o = yn(() => n.m.map(Hf));
    return () => {
      for (const a of o)
        typeof a == "function" && a();
    };
  }), n.a.length && Un(() => {
    As(t, r), io(n.a);
  });
}
function As(e, t) {
  if (e.l.s)
    for (const n of e.l.s) g(n);
  t();
}
function Te(e, t) {
  var n, r = (
    /** @type {Record<string, Function[] | Function>} */
    (n = e.$$events) == null ? void 0 : n[t.type]
  ), o = bo(r) ? r.slice() : r == null ? [] : [r];
  for (var a of o)
    a.call(this, t);
}
function Xt(e) {
  We === null && Ni(), Ir && We.l !== null ? zv(We).m.push(e) : Un(() => {
    const t = yn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Ua(e) {
  We === null && Ni(), Xt(() => () => yn(e));
}
function Vv(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function Ti() {
  const e = We;
  return e === null && Ni(), (t, n, r) => {
    var o;
    const a = (
      /** @type {Record<string, Function | Function[]>} */
      (o = e.s.$$events) == null ? void 0 : o[
        /** @type {any} */
        t
      ]
    );
    if (a) {
      const i = bo(a) ? a.slice() : [a], s = Vv(
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
function zv(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function Ja(e, t, n) {
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
const wr = [];
function Kt(e, t) {
  return {
    subscribe: we(e, t).subscribe
  };
}
function we(e, t = dt) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(s) {
    if (Wa(e, s) && (e = s, n)) {
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
function Kn(e, t, n) {
  const r = !Array.isArray(e), o = r ? [e] : e;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = t.length < 2;
  return Kt(n, (i, s) => {
    let l = !1;
    const u = [];
    let c = 0, d = dt;
    const f = () => {
      if (c)
        return;
      d();
      const y = t(r ? u[0] : u, i, s);
      a ? i(y) : d = typeof y == "function" ? y : dt;
    }, v = o.map(
      (y, x) => Ja(
        y,
        (b) => {
          u[x] = b, c &= ~(1 << x), l && f();
        },
        () => {
          c |= 1 << x;
        }
      )
    );
    return l = !0, f(), function() {
      io(v), d(), l = !1;
    };
  });
}
function q(e) {
  let t;
  return Ja(e, (n) => t = n)(), t;
}
let Ao = !1, pa = Symbol();
function J(e, t, n) {
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
      r.unsubscribe = Ja(e, (a) => {
        o ? r.source.v = a : F(r.source, a);
      }), o = !1;
    }
  return e && pa in n ? q(e) : g(r.source);
}
function Nv(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = dt), e;
}
function si(e, t) {
  return e.set(t), t;
}
function et() {
  const e = {};
  function t() {
    ou(() => {
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
function Pv(e) {
  var t = Ao;
  try {
    return Ao = !1, [e(), Ao];
  } finally {
    Ao = t;
  }
}
const Ov = {
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
    Ov
  );
}
const Tv = {
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
    )), e.special[t](n), Hs(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), Hs(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function nt(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: Vt(0) }, Tv);
}
const Dv = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (qr(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      qr(o) && (o = o());
      const a = zn(o, t);
      if (a && a.set)
        return a.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (qr(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = zn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === Yn || t === Za) return !1;
    for (let n of e.props)
      if (qr(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props) {
      qr(n) && (n = n());
      for (const r in n)
        t.includes(r) || t.push(r);
    }
    return t;
  }
};
function ut(...e) {
  return new Proxy({ props: e }, Dv);
}
function m(e, t, n, r) {
  var o, a = (n & hf) !== 0, i = !Ir || (n & pf) !== 0, s = (n & mf) !== 0, l = (n & yf) !== 0, u = !1, c;
  s ? [c, u] = Pv(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var d = Yn in e || Za in e, f = s && (((o = zn(e, t)) == null ? void 0 : o.set) ?? (d && t in e && ((M) => e[t] = M))) || void 0, v = (
    /** @type {V} */
    r
  ), y = !0, x = !1, b = () => (x = !0, y && (y = !1, l ? v = yn(
    /** @type {() => V} */
    r
  ) : v = /** @type {V} */
  r), v);
  c === void 0 && r !== void 0 && (f && i && Df(), c = b(), f && f(c));
  var C;
  if (i)
    C = () => {
      var M = (
        /** @type {V} */
        e[t]
      );
      return M === void 0 ? b() : (y = !0, x = !1, M);
    };
  else {
    var h = (a ? Ee : me)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    h.f |= $f, C = () => {
      var M = g(h);
      return M !== void 0 && (v = /** @type {V} */
      void 0), M === void 0 ? v : M;
    };
  }
  if (!(n & Dl))
    return C;
  if (f) {
    var $ = e.$$legacy;
    return function(M, V) {
      return arguments.length > 0 ? ((!i || !V || $ || u) && f(V ? C() : M), M) : C();
    };
  }
  var w = !1, k = /* @__PURE__ */ Co(c), S = /* @__PURE__ */ Ee(() => {
    var M = C(), V = g(k);
    return w ? (w = !1, V) : k.v = M;
  });
  return a || (S.equals = Xa), function(M, V) {
    if (arguments.length > 0) {
      const z = V ? g(S) : i && s ? Lt(M) : M;
      return S.equals(z) || (w = !0, F(k, z), x && v !== void 0 && (v = z), yn(() => g(S))), M;
    }
    return g(S);
  };
}
function Lv(e) {
  return new Av(e);
}
var Zn, Qt;
class Av {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    xr(this, Zn), xr(this, Qt);
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
          return F(r.get(s) ?? o(s, l), l), Reflect.set(i, s, l);
        }
      }
    );
    Qo(this, Qt, (t.hydrate ? yv : fu)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: a,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((n = t == null ? void 0 : t.props) != null && n.$$host) || t.sync === !1) && p(), Qo(this, Zn, a.$$events);
    for (const i of Object.keys(st(this, Qt)))
      i === "$set" || i === "$destroy" || i === "$on" || oo(this, i, {
        get() {
          return st(this, Qt)[i];
        },
        /** @param {any} value */
        set(s) {
          st(this, Qt)[i] = s;
        },
        enumerable: !0
      });
    st(this, Qt).$set = /** @param {Record<string, any>} next */
    (i) => {
      Object.assign(a, i);
    }, st(this, Qt).$destroy = () => {
      wv(st(this, Qt));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    st(this, Qt).$set(t);
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
    st(this, Qt).$destroy();
  }
}
Zn = /* @__PURE__ */ new WeakMap(), Qt = /* @__PURE__ */ new WeakMap();
let wu;
typeof HTMLElement == "function" && (wu = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, t, n) {
    super(), Et(this, "$$ctor"), Et(this, "$$s"), Et(this, "$$c"), Et(this, "$$cn", !1), Et(this, "$$d", {}), Et(this, "$$r", !1), Et(this, "$$p_d", {}), Et(this, "$$l", {}), Et(this, "$$l_u", /* @__PURE__ */ new Map()), Et(this, "$$me"), this.$$ctor = e, this.$$s = t, n && this.attachShadow({ mode: "open" });
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
      const t = {}, n = Iv(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = qo(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = Lv({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = ev(() => {
        Wr(() => {
          var r;
          this.$$r = !0;
          for (const o of ni(this.$$c)) {
            if (!((r = this.$$p_d[o]) != null && r.reflect)) continue;
            this.$$d[o] = this.$$c[o];
            const a = qo(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = qo(e, n, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [e]: this.$$d[e] }));
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
function qo(e, t, n, r) {
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
function Iv(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function ie(e, t, n, r, o, a) {
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
        l = qo(s, l, t), this.$$d[s] = l;
        var c = this.$$c;
        if (c) {
          var d = (u = zn(c, s)) == null ? void 0 : u.get;
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
var Zv = { value: () => {
} };
function Di() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new jo(n);
}
function jo(e) {
  this._ = e;
}
function Bv(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
jo.prototype = Di.prototype = {
  constructor: jo,
  on: function(e, t) {
    var n = this._, r = Bv(e + "", n), o, a = -1, i = r.length;
    if (arguments.length < 2) {
      for (; ++a < i; ) if ((o = (e = r[a]).type) && (o = Rv(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++a < i; )
      if (o = (e = r[a]).type) n[o] = Is(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = Is(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new jo(e);
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
function Rv(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Is(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Zv, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var ma = "http://www.w3.org/1999/xhtml";
const Zs = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: ma,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Li(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Zs.hasOwnProperty(t) ? { space: Zs[t], local: e } : e;
}
function Wv(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === ma && t.documentElement.namespaceURI === ma ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function Xv(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function xu(e) {
  var t = Li(e);
  return (t.local ? Xv : Wv)(t);
}
function Yv() {
}
function Qa(e) {
  return e == null ? Yv : function() {
    return this.querySelector(e);
  };
}
function Kv(e) {
  typeof e != "function" && (e = Qa(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], i = a.length, s = r[o] = new Array(i), l, u, c = 0; c < i; ++c)
      (l = a[c]) && (u = e.call(l, l.__data__, c, a)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new Wt(r, this._parents);
}
function qv(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function jv() {
  return [];
}
function bu(e) {
  return e == null ? jv : function() {
    return this.querySelectorAll(e);
  };
}
function Fv(e) {
  return function() {
    return qv(e.apply(this, arguments));
  };
}
function Gv(e) {
  typeof e == "function" ? e = Fv(e) : e = bu(e);
  for (var t = this._groups, n = t.length, r = [], o = [], a = 0; a < n; ++a)
    for (var i = t[a], s = i.length, l, u = 0; u < s; ++u)
      (l = i[u]) && (r.push(e.call(l, l.__data__, u, i)), o.push(l));
  return new Wt(r, o);
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
var Uv = Array.prototype.find;
function Jv(e) {
  return function() {
    return Uv.call(this.children, e);
  };
}
function Qv() {
  return this.firstElementChild;
}
function e1(e) {
  return this.select(e == null ? Qv : Jv(typeof e == "function" ? e : Cu(e)));
}
var t1 = Array.prototype.filter;
function n1() {
  return Array.from(this.children);
}
function r1(e) {
  return function() {
    return t1.call(this.children, e);
  };
}
function o1(e) {
  return this.selectAll(e == null ? n1 : r1(typeof e == "function" ? e : Cu(e)));
}
function i1(e) {
  typeof e != "function" && (e = $u(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], i = a.length, s = r[o] = [], l, u = 0; u < i; ++u)
      (l = a[u]) && e.call(l, l.__data__, u, a) && s.push(l);
  return new Wt(r, this._parents);
}
function ku(e) {
  return new Array(e.length);
}
function a1() {
  return new Wt(this._enter || this._groups.map(ku), this._parents);
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
function s1(e) {
  return function() {
    return e;
  };
}
function l1(e, t, n, r, o, a) {
  for (var i = 0, s, l = t.length, u = a.length; i < u; ++i)
    (s = t[i]) ? (s.__data__ = a[i], r[i] = s) : n[i] = new li(e, a[i]);
  for (; i < l; ++i)
    (s = t[i]) && (o[i] = s);
}
function u1(e, t, n, r, o, a, i) {
  var s, l, u = /* @__PURE__ */ new Map(), c = t.length, d = a.length, f = new Array(c), v;
  for (s = 0; s < c; ++s)
    (l = t[s]) && (f[s] = v = i.call(l, l.__data__, s, t) + "", u.has(v) ? o[s] = l : u.set(v, l));
  for (s = 0; s < d; ++s)
    v = i.call(e, a[s], s, a) + "", (l = u.get(v)) ? (r[s] = l, l.__data__ = a[s], u.delete(v)) : n[s] = new li(e, a[s]);
  for (s = 0; s < c; ++s)
    (l = t[s]) && u.get(f[s]) === l && (o[s] = l);
}
function c1(e) {
  return e.__data__;
}
function d1(e, t) {
  if (!arguments.length) return Array.from(this, c1);
  var n = t ? u1 : l1, r = this._parents, o = this._groups;
  typeof e != "function" && (e = s1(e));
  for (var a = o.length, i = new Array(a), s = new Array(a), l = new Array(a), u = 0; u < a; ++u) {
    var c = r[u], d = o[u], f = d.length, v = f1(e.call(c, c && c.__data__, u, r)), y = v.length, x = s[u] = new Array(y), b = i[u] = new Array(y), C = l[u] = new Array(f);
    n(c, d, x, b, C, v, t);
    for (var h = 0, $ = 0, w, k; h < y; ++h)
      if (w = x[h]) {
        for (h >= $ && ($ = h + 1); !(k = b[$]) && ++$ < y; ) ;
        w._next = k || null;
      }
  }
  return i = new Wt(i, r), i._enter = s, i._exit = l, i;
}
function f1(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function v1() {
  return new Wt(this._exit || this._groups.map(ku), this._parents);
}
function g1(e, t, n) {
  var r = this.enter(), o = this, a = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? a.remove() : n(a), r && o ? r.merge(o).order() : o;
}
function h1(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, a = r.length, i = Math.min(o, a), s = new Array(o), l = 0; l < i; ++l)
    for (var u = n[l], c = r[l], d = u.length, f = s[l] = new Array(d), v, y = 0; y < d; ++y)
      (v = u[y] || c[y]) && (f[y] = v);
  for (; l < o; ++l)
    s[l] = n[l];
  return new Wt(s, this._parents);
}
function p1() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, a = r[o], i; --o >= 0; )
      (i = r[o]) && (a && i.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(i, a), a = i);
  return this;
}
function m1(e) {
  e || (e = y1);
  function t(d, f) {
    return d && f ? e(d.__data__, f.__data__) : !d - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), a = 0; a < r; ++a) {
    for (var i = n[a], s = i.length, l = o[a] = new Array(s), u, c = 0; c < s; ++c)
      (u = i[c]) && (l[c] = u);
    l.sort(t);
  }
  return new Wt(o, this._parents).order();
}
function y1(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function w1() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function x1() {
  return Array.from(this);
}
function b1() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, a = r.length; o < a; ++o) {
      var i = r[o];
      if (i) return i;
    }
  return null;
}
function $1() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function C1() {
  return !this.node();
}
function k1(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], a = 0, i = o.length, s; a < i; ++a)
      (s = o[a]) && e.call(s, s.__data__, a, o);
  return this;
}
function _1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function S1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function M1(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function H1(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function E1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function V1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function z1(e, t) {
  var n = Li(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? S1 : _1 : typeof t == "function" ? n.local ? V1 : E1 : n.local ? H1 : M1)(n, t));
}
function _u(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function N1(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function P1(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function O1(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function T1(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? N1 : typeof t == "function" ? O1 : P1)(e, t, n ?? "")) : Vr(this.node(), e);
}
function Vr(e, t) {
  return e.style.getPropertyValue(t) || _u(e).getComputedStyle(e, null).getPropertyValue(t);
}
function D1(e) {
  return function() {
    delete this[e];
  };
}
function L1(e, t) {
  return function() {
    this[e] = t;
  };
}
function A1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function I1(e, t) {
  return arguments.length > 1 ? this.each((t == null ? D1 : typeof t == "function" ? A1 : L1)(e, t)) : this.node()[e];
}
function Su(e) {
  return e.trim().split(/^|\s+/);
}
function es(e) {
  return e.classList || new Mu(e);
}
function Mu(e) {
  this._node = e, this._names = Su(e.getAttribute("class") || "");
}
Mu.prototype = {
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
function Hu(e, t) {
  for (var n = es(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Eu(e, t) {
  for (var n = es(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Z1(e) {
  return function() {
    Hu(this, e);
  };
}
function B1(e) {
  return function() {
    Eu(this, e);
  };
}
function R1(e, t) {
  return function() {
    (t.apply(this, arguments) ? Hu : Eu)(this, e);
  };
}
function W1(e, t) {
  var n = Su(e + "");
  if (arguments.length < 2) {
    for (var r = es(this.node()), o = -1, a = n.length; ++o < a; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? R1 : t ? Z1 : B1)(n, t));
}
function X1() {
  this.textContent = "";
}
function Y1(e) {
  return function() {
    this.textContent = e;
  };
}
function K1(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function q1(e) {
  return arguments.length ? this.each(e == null ? X1 : (typeof e == "function" ? K1 : Y1)(e)) : this.node().textContent;
}
function j1() {
  this.innerHTML = "";
}
function F1(e) {
  return function() {
    this.innerHTML = e;
  };
}
function G1(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function U1(e) {
  return arguments.length ? this.each(e == null ? j1 : (typeof e == "function" ? G1 : F1)(e)) : this.node().innerHTML;
}
function J1() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Q1() {
  return this.each(J1);
}
function eg() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function tg() {
  return this.each(eg);
}
function ng(e) {
  var t = typeof e == "function" ? e : xu(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function rg() {
  return null;
}
function og(e, t) {
  var n = typeof e == "function" ? e : xu(e), r = t == null ? rg : typeof t == "function" ? t : Qa(t);
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
function Vu(e, t, n) {
  var r = _u(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function pg(e, t) {
  return function() {
    return Vu(this, e, t);
  };
}
function mg(e, t) {
  return function() {
    return Vu(this, e, t.apply(this, arguments));
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
var zu = [null];
function Wt(e, t) {
  this._groups = e, this._parents = t;
}
function ko() {
  return new Wt([[document.documentElement]], zu);
}
function xg() {
  return this;
}
Wt.prototype = ko.prototype = {
  constructor: Wt,
  select: Kv,
  selectAll: Gv,
  selectChild: e1,
  selectChildren: o1,
  filter: i1,
  data: d1,
  enter: a1,
  exit: v1,
  join: g1,
  merge: h1,
  selection: xg,
  order: p1,
  sort: m1,
  call: w1,
  nodes: x1,
  node: b1,
  size: $1,
  empty: C1,
  each: k1,
  attr: z1,
  style: T1,
  property: I1,
  classed: W1,
  text: q1,
  html: U1,
  raise: Q1,
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
function qt(e) {
  return typeof e == "string" ? new Wt([[document.querySelector(e)]], [document.documentElement]) : new Wt([[e]], zu);
}
function bg(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function en(e, t) {
  if (e = bg(e), t === void 0 && (t = e.currentTarget), t) {
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
function Ji(e) {
  e.stopImmediatePropagation();
}
function Cr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Nu(e) {
  var t = e.document.documentElement, n = qt(e).on("dragstart.drag", Cr, co);
  "onselectstart" in t ? n.on("selectstart.drag", Cr, co) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Pu(e, t) {
  var n = e.document.documentElement, r = qt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Cr, co), setTimeout(function() {
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
function kg() {
  return this.parentNode;
}
function _g(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Sg() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Mg() {
  var e = Cg, t = kg, n = _g, r = Sg, o = {}, a = Di("start", "drag", "end"), i = 0, s, l, u, c, d = 0;
  function f(w) {
    w.on("mousedown.drag", v).filter(r).on("touchstart.drag", b).on("touchmove.drag", C, $g).on("touchend.drag touchcancel.drag", h).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function v(w, k) {
    if (!(c || !e.call(this, w, k))) {
      var S = $(this, t.call(this, w, k), w, k, "mouse");
      S && (qt(w.view).on("mousemove.drag", y, co).on("mouseup.drag", x, co), Nu(w.view), Ji(w), u = !1, s = w.clientX, l = w.clientY, S("start", w));
    }
  }
  function y(w) {
    if (Cr(w), !u) {
      var k = w.clientX - s, S = w.clientY - l;
      u = k * k + S * S > d;
    }
    o.mouse("drag", w);
  }
  function x(w) {
    qt(w.view).on("mousemove.drag mouseup.drag", null), Pu(w.view, u), Cr(w), o.mouse("end", w);
  }
  function b(w, k) {
    if (e.call(this, w, k)) {
      var S = w.changedTouches, M = t.call(this, w, k), V = S.length, z, P;
      for (z = 0; z < V; ++z)
        (P = $(this, M, w, k, S[z].identifier, S[z])) && (Ji(w), P("start", w, S[z]));
    }
  }
  function C(w) {
    var k = w.changedTouches, S = k.length, M, V;
    for (M = 0; M < S; ++M)
      (V = o[k[M].identifier]) && (Cr(w), V("drag", w, k[M]));
  }
  function h(w) {
    var k = w.changedTouches, S = k.length, M, V;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), M = 0; M < S; ++M)
      (V = o[k[M].identifier]) && (Ji(w), V("end", w, k[M]));
  }
  function $(w, k, S, M, V, z) {
    var P = a.copy(), T = en(z || S, k), A, I, H;
    if ((H = n.call(w, new ya("beforestart", {
      sourceEvent: S,
      target: f,
      identifier: V,
      active: i,
      x: T[0],
      y: T[1],
      dx: 0,
      dy: 0,
      dispatch: P
    }), M)) != null)
      return A = H.x - T[0] || 0, I = H.y - T[1] || 0, function N(_, E, O) {
        var L = T, B;
        switch (_) {
          case "start":
            o[V] = N, B = i++;
            break;
          case "end":
            delete o[V], --i;
          // falls through
          case "drag":
            T = en(O || E, k), B = i;
            break;
        }
        P.call(
          _,
          w,
          new ya(_, {
            sourceEvent: E,
            subject: H,
            target: f,
            identifier: V,
            active: B,
            x: T[0] + A,
            y: T[1] + I,
            dx: T[0] - L[0],
            dy: T[1] - L[1],
            dispatch: P
          }),
          M
        );
      };
  }
  return f.filter = function(w) {
    return arguments.length ? (e = typeof w == "function" ? w : Io(!!w), f) : e;
  }, f.container = function(w) {
    return arguments.length ? (t = typeof w == "function" ? w : Io(w), f) : t;
  }, f.subject = function(w) {
    return arguments.length ? (n = typeof w == "function" ? w : Io(w), f) : n;
  }, f.touchable = function(w) {
    return arguments.length ? (r = typeof w == "function" ? w : Io(!!w), f) : r;
  }, f.on = function() {
    var w = a.on.apply(a, arguments);
    return w === a ? f : w;
  }, f.clickDistance = function(w) {
    return arguments.length ? (d = (w = +w) * w, f) : Math.sqrt(d);
  }, f;
}
function ts(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Ou(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function _o() {
}
var fo = 0.7, ui = 1 / fo, kr = "\\s*([+-]?\\d+)\\s*", vo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", hn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Hg = /^#([0-9a-f]{3,8})$/, Eg = new RegExp(`^rgb\\(${kr},${kr},${kr}\\)$`), Vg = new RegExp(`^rgb\\(${hn},${hn},${hn}\\)$`), zg = new RegExp(`^rgba\\(${kr},${kr},${kr},${vo}\\)$`), Ng = new RegExp(`^rgba\\(${hn},${hn},${hn},${vo}\\)$`), Pg = new RegExp(`^hsl\\(${vo},${hn},${hn}\\)$`), Og = new RegExp(`^hsla\\(${vo},${hn},${hn},${vo}\\)$`), Bs = {
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
ts(_o, go, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Rs,
  // Deprecated! Use color.formatHex.
  formatHex: Rs,
  formatHex8: Tg,
  formatHsl: Dg,
  formatRgb: Ws,
  toString: Ws
});
function Rs() {
  return this.rgb().formatHex();
}
function Tg() {
  return this.rgb().formatHex8();
}
function Dg() {
  return Tu(this).formatHsl();
}
function Ws() {
  return this.rgb().formatRgb();
}
function go(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Hg.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Xs(t) : n === 3 ? new zt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Zo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Zo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Eg.exec(e)) ? new zt(t[1], t[2], t[3], 1) : (t = Vg.exec(e)) ? new zt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = zg.exec(e)) ? Zo(t[1], t[2], t[3], t[4]) : (t = Ng.exec(e)) ? Zo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Pg.exec(e)) ? qs(t[1], t[2] / 100, t[3] / 100, 1) : (t = Og.exec(e)) ? qs(t[1], t[2] / 100, t[3] / 100, t[4]) : Bs.hasOwnProperty(e) ? Xs(Bs[e]) : e === "transparent" ? new zt(NaN, NaN, NaN, 0) : null;
}
function Xs(e) {
  return new zt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Zo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new zt(e, t, n, r);
}
function Lg(e) {
  return e instanceof _o || (e = go(e)), e ? (e = e.rgb(), new zt(e.r, e.g, e.b, e.opacity)) : new zt();
}
function wa(e, t, n, r) {
  return arguments.length === 1 ? Lg(e) : new zt(e, t, n, r ?? 1);
}
function zt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
ts(zt, wa, Ou(_o, {
  brighter(e) {
    return e = e == null ? ui : Math.pow(ui, e), new zt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? fo : Math.pow(fo, e), new zt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new zt(ir(this.r), ir(this.g), ir(this.b), ci(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ys,
  // Deprecated! Use color.formatHex.
  formatHex: Ys,
  formatHex8: Ag,
  formatRgb: Ks,
  toString: Ks
}));
function Ys() {
  return `#${rr(this.r)}${rr(this.g)}${rr(this.b)}`;
}
function Ag() {
  return `#${rr(this.r)}${rr(this.g)}${rr(this.b)}${rr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ks() {
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
function qs(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new nn(e, t, n, r);
}
function Tu(e) {
  if (e instanceof nn) return new nn(e.h, e.s, e.l, e.opacity);
  if (e instanceof _o || (e = go(e)), !e) return new nn();
  if (e instanceof nn) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), a = Math.max(t, n, r), i = NaN, s = a - o, l = (a + o) / 2;
  return s ? (t === a ? i = (n - r) / s + (n < r) * 6 : n === a ? i = (r - t) / s + 2 : i = (t - n) / s + 4, s /= l < 0.5 ? a + o : 2 - a - o, i *= 60) : s = l > 0 && l < 1 ? 0 : i, new nn(i, s, l, e.opacity);
}
function Ig(e, t, n, r) {
  return arguments.length === 1 ? Tu(e) : new nn(e, t, n, r ?? 1);
}
function nn(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
ts(nn, Ig, Ou(_o, {
  brighter(e) {
    return e = e == null ? ui : Math.pow(ui, e), new nn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? fo : Math.pow(fo, e), new nn(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new zt(
      Qi(e >= 240 ? e - 240 : e + 120, o, r),
      Qi(e, o, r),
      Qi(e < 120 ? e + 240 : e - 120, o, r),
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
function Qi(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Du = (e) => () => e;
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
  return (e = +e) == 1 ? Lu : function(t, n) {
    return n - t ? Bg(t, n, e) : Du(isNaN(t) ? n : t);
  };
}
function Lu(e, t) {
  var n = t - e;
  return n ? Zg(e, n) : Du(isNaN(e) ? t : e);
}
const Fs = function e(t) {
  var n = Rg(t);
  function r(o, a) {
    var i = n((o = wa(o)).r, (a = wa(a)).r), s = n(o.g, a.g), l = n(o.b, a.b), u = Lu(o.opacity, a.opacity);
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
var xa = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ea = new RegExp(xa.source, "g");
function Wg(e) {
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
  var n = xa.lastIndex = ea.lastIndex = 0, r, o, a, i = -1, s = [], l = [];
  for (e = e + "", t = t + ""; (r = xa.exec(e)) && (o = ea.exec(t)); )
    (a = o.index) > n && (a = t.slice(n, a), s[i] ? s[i] += a : s[++i] = a), (r = r[0]) === (o = o[0]) ? s[i] ? s[i] += o : s[++i] = o : (s[++i] = null, l.push({ i, x: Rn(r, o) })), n = ea.lastIndex;
  return n < t.length && (a = t.slice(n), s[i] ? s[i] += a : s[++i] = a), s.length < 2 ? l[0] ? Xg(l[0].x) : Wg(t) : (t = l.length, function(u) {
    for (var c = 0, d; c < t; ++c) s[(d = l[c]).i] = d.x(u);
    return s.join("");
  });
}
var Gs = 180 / Math.PI, Au = {
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
    rotate: Math.atan2(t, e) * Gs,
    skewX: Math.atan(l) * Gs,
    scaleX: i,
    scaleY: s
  };
}
var Ro;
function Kg(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Au : Iu(t.a, t.b, t.c, t.d, t.e, t.f);
}
function qg(e) {
  return e == null || (Ro || (Ro = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ro.setAttribute("transform", e), !(e = Ro.transform.baseVal.consolidate())) ? Au : (e = e.matrix, Iu(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Zu(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, c, d, f, v, y) {
    if (u !== d || c !== f) {
      var x = v.push("translate(", null, t, null, n);
      y.push({ i: x - 4, x: Rn(u, d) }, { i: x - 2, x: Rn(c, f) });
    } else (d || f) && v.push("translate(" + d + t + f + n);
  }
  function i(u, c, d, f) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), f.push({ i: d.push(o(d) + "rotate(", null, r) - 2, x: Rn(u, c) })) : c && d.push(o(d) + "rotate(" + c + r);
  }
  function s(u, c, d, f) {
    u !== c ? f.push({ i: d.push(o(d) + "skewX(", null, r) - 2, x: Rn(u, c) }) : c && d.push(o(d) + "skewX(" + c + r);
  }
  function l(u, c, d, f, v, y) {
    if (u !== d || c !== f) {
      var x = v.push(o(v) + "scale(", null, ",", null, ")");
      y.push({ i: x - 4, x: Rn(u, d) }, { i: x - 2, x: Rn(c, f) });
    } else (d !== 1 || f !== 1) && v.push(o(v) + "scale(" + d + "," + f + ")");
  }
  return function(u, c) {
    var d = [], f = [];
    return u = e(u), c = e(c), a(u.translateX, u.translateY, c.translateX, c.translateY, d, f), i(u.rotate, c.rotate, d, f), s(u.skewX, c.skewX, d, f), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, d, f), u = c = null, function(v) {
      for (var y = -1, x = f.length, b; ++y < x; ) d[(b = f[y]).i] = b.x(v);
      return d.join("");
    };
  };
}
var jg = Zu(Kg, "px, ", "px)", "deg)"), Fg = Zu(qg, ", ", ")", ")"), Gg = 1e-12;
function Us(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Ug(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Jg(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Qg = function e(t, n, r) {
  function o(a, i) {
    var s = a[0], l = a[1], u = a[2], c = i[0], d = i[1], f = i[2], v = c - s, y = d - l, x = v * v + y * y, b, C;
    if (x < Gg)
      C = Math.log(f / u) / t, b = function(M) {
        return [
          s + M * v,
          l + M * y,
          u * Math.exp(t * M * C)
        ];
      };
    else {
      var h = Math.sqrt(x), $ = (f * f - u * u + r * x) / (2 * u * n * h), w = (f * f - u * u - r * x) / (2 * f * n * h), k = Math.log(Math.sqrt($ * $ + 1) - $), S = Math.log(Math.sqrt(w * w + 1) - w);
      C = (S - k) / t, b = function(M) {
        var V = M * C, z = Us(k), P = u / (n * h) * (z * Jg(t * V + k) - Ug(k));
        return [
          s + P * v,
          l + P * y,
          u * z / Us(t * V + k)
        ];
      };
    }
    return b.duration = C * 1e3 * t / Math.SQRT2, b;
  }
  return o.rho = function(a) {
    var i = Math.max(1e-3, +a), s = i * i, l = s * s;
    return e(i, s, l);
  }, o;
}(Math.SQRT2, 2, 4);
var zr = 0, Jr = 0, Fr = 0, Bu = 1e3, di, Qr, fi = 0, ur = 0, Ai = 0, ho = typeof performance == "object" && performance.now ? performance : Date, Ru = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function ns() {
  return ur || (Ru(eh), ur = ho.now() + Ai);
}
function eh() {
  ur = 0;
}
function vi() {
  this._call = this._time = this._next = null;
}
vi.prototype = Wu.prototype = {
  constructor: vi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? ns() : +n) + (t == null ? 0 : +t), !this._next && Qr !== this && (Qr ? Qr._next = this : di = this, Qr = this), this._call = e, this._time = n, ba();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ba());
  }
};
function Wu(e, t, n) {
  var r = new vi();
  return r.restart(e, t, n), r;
}
function th() {
  ns(), ++zr;
  for (var e = di, t; e; )
    (t = ur - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --zr;
}
function Js() {
  ur = (fi = ho.now()) + Ai, zr = Jr = 0;
  try {
    th();
  } finally {
    zr = 0, rh(), ur = 0;
  }
}
function nh() {
  var e = ho.now(), t = e - fi;
  t > Bu && (Ai -= t, fi = e);
}
function rh() {
  for (var e, t = di, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : di = n);
  Qr = e, ba(r);
}
function ba(e) {
  if (!zr) {
    Jr && (Jr = clearTimeout(Jr));
    var t = e - ur;
    t > 24 ? (e < 1 / 0 && (Jr = setTimeout(Js, e - ho.now() - Ai)), Fr && (Fr = clearInterval(Fr))) : (Fr || (fi = ho.now(), Fr = setInterval(nh, Bu)), zr = 1, Ru(Js));
  }
}
function Qs(e, t, n) {
  var r = new vi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var oh = Di("start", "end", "cancel", "interrupt"), ih = [], Xu = 0, el = 1, $a = 2, Fo = 3, tl = 4, Ca = 5, Go = 6;
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
function rs(e, t) {
  var n = un(e, t);
  if (n.state > Xu) throw new Error("too late; already scheduled");
  return n;
}
function kn(e, t) {
  var n = un(e, t);
  if (n.state > Fo) throw new Error("too late; already running");
  return n;
}
function un(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function ah(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Wu(a, 0, n.time);
  function a(u) {
    n.state = el, n.timer.restart(i, n.delay, n.time), n.delay <= u && i(u - n.delay);
  }
  function i(u) {
    var c, d, f, v;
    if (n.state !== el) return l();
    for (c in r)
      if (v = r[c], v.name === n.name) {
        if (v.state === Fo) return Qs(i);
        v.state === tl ? (v.state = Go, v.timer.stop(), v.on.call("interrupt", e, e.__data__, v.index, v.group), delete r[c]) : +c < t && (v.state = Go, v.timer.stop(), v.on.call("cancel", e, e.__data__, v.index, v.group), delete r[c]);
      }
    if (Qs(function() {
      n.state === Fo && (n.state = tl, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = $a, n.on.call("start", e, e.__data__, n.index, n.group), n.state === $a) {
      for (n.state = Fo, o = new Array(f = n.tween.length), c = 0, d = -1; c < f; ++c)
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
    var o = kn(this, e), a = o.tween;
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
    var a = kn(this, e), i = a.tween;
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
function os(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = kn(this, r);
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
  var n = Li(e), r = n === "transform" ? Fg : Yu;
  return this.attrTween(e, typeof t == "function" ? (n.local ? ph : hh)(n, r, os(this, "attr." + e, t)) : t == null ? (n.local ? fh : dh)(n) : (n.local ? gh : vh)(n, r, t));
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
function xh(e, t) {
  var n, r;
  function o() {
    var a = t.apply(this, arguments);
    return a !== r && (n = (r = a) && wh(e, a)), n;
  }
  return o._value = t, o;
}
function bh(e, t) {
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
  var r = Li(e);
  return this.tween(n, (r.local ? xh : bh)(r, t));
}
function Ch(e, t) {
  return function() {
    rs(this, e).delay = +t.apply(this, arguments);
  };
}
function kh(e, t) {
  return t = +t, function() {
    rs(this, e).delay = t;
  };
}
function _h(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Ch : kh)(t, e)) : un(this.node(), t).delay;
}
function Sh(e, t) {
  return function() {
    kn(this, e).duration = +t.apply(this, arguments);
  };
}
function Mh(e, t) {
  return t = +t, function() {
    kn(this, e).duration = t;
  };
}
function Hh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Sh : Mh)(t, e)) : un(this.node(), t).duration;
}
function Eh(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    kn(this, e).ease = t;
  };
}
function Vh(e) {
  var t = this._id;
  return arguments.length ? this.each(Eh(t, e)) : un(this.node(), t).ease;
}
function zh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    kn(this, e).ease = n;
  };
}
function Nh(e) {
  if (typeof e != "function") throw new Error();
  return this.each(zh(this._id, e));
}
function Ph(e) {
  typeof e != "function" && (e = $u(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], i = a.length, s = r[o] = [], l, u = 0; u < i; ++u)
      (l = a[u]) && e.call(l, l.__data__, u, a) && s.push(l);
  return new Tn(r, this._parents, this._name, this._id);
}
function Oh(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, a = Math.min(r, o), i = new Array(r), s = 0; s < a; ++s)
    for (var l = t[s], u = n[s], c = l.length, d = i[s] = new Array(c), f, v = 0; v < c; ++v)
      (f = l[v] || u[v]) && (d[v] = f);
  for (; s < r; ++s)
    i[s] = t[s];
  return new Tn(i, this._parents, this._name, this._id);
}
function Th(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function Dh(e, t, n) {
  var r, o, a = Th(t) ? rs : kn;
  return function() {
    var i = a(this, e), s = i.on;
    s !== r && (o = (r = s).copy()).on(t, n), i.on = o;
  };
}
function Lh(e, t) {
  var n = this._id;
  return arguments.length < 2 ? un(this.node(), n).on.on(e) : this.each(Dh(n, e, t));
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
  return new Tn(a, this._parents, t, n);
}
function Bh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = bu(e));
  for (var r = this._groups, o = r.length, a = [], i = [], s = 0; s < o; ++s)
    for (var l = r[s], u = l.length, c, d = 0; d < u; ++d)
      if (c = l[d]) {
        for (var f = e.call(c, c.__data__, d, l), v, y = un(c, n), x = 0, b = f.length; x < b; ++x)
          (v = f[x]) && Ii(v, t, n, x, f, y);
        a.push(f), i.push(c);
      }
  return new Tn(a, i, t, n);
}
var Rh = ko.prototype.constructor;
function Wh() {
  return new Rh(this._groups, this._parents);
}
function Xh(e, t) {
  var n, r, o;
  return function() {
    var a = Vr(this, e), i = (this.style.removeProperty(e), Vr(this, e));
    return a === i ? null : a === n && i === r ? o : o = t(n = a, r = i);
  };
}
function Ku(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Yh(e, t, n) {
  var r, o = n + "", a;
  return function() {
    var i = Vr(this, e);
    return i === o ? null : i === r ? a : a = t(r = i, n);
  };
}
function Kh(e, t, n) {
  var r, o, a;
  return function() {
    var i = Vr(this, e), s = n(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(e), Vr(this, e))), i === l ? null : i === r && l === o ? a : (o = l, a = t(r = i, s));
  };
}
function qh(e, t) {
  var n, r, o, a = "style." + t, i = "end." + a, s;
  return function() {
    var l = kn(this, e), u = l.on, c = l.value[a] == null ? s || (s = Ku(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(i, o = c), l.on = r;
  };
}
function jh(e, t, n) {
  var r = (e += "") == "transform" ? jg : Yu;
  return t == null ? this.styleTween(e, Xh(e, r)).on("end.style." + e, Ku(e)) : typeof t == "function" ? this.styleTween(e, Kh(e, r, os(this, "style." + e, t))).each(qh(this._id, e)) : this.styleTween(e, Yh(e, r, t), n).on("end.style." + e, null);
}
function Fh(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function Gh(e, t, n) {
  var r, o;
  function a() {
    var i = t.apply(this, arguments);
    return i !== o && (r = (o = i) && Fh(e, i, n)), r;
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
function Jh(e) {
  return function() {
    this.textContent = e;
  };
}
function Qh(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function ep(e) {
  return this.tween("text", typeof e == "function" ? Qh(os(this, "text", e)) : Jh(e == null ? "" : e + ""));
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
  for (var e = this._name, t = this._id, n = qu(), r = this._groups, o = r.length, a = 0; a < o; ++a)
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
  return new Tn(r, this._parents, e, n);
}
function ip() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(a, i) {
    var s = { value: i }, l = { value: function() {
      --o === 0 && a();
    } };
    n.each(function() {
      var u = kn(this, r), c = u.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(l)), u.on = t;
    }), o === 0 && a();
  });
}
var ap = 0;
function Tn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function qu() {
  return ++ap;
}
var Sn = ko.prototype;
Tn.prototype = {
  constructor: Tn,
  select: Zh,
  selectAll: Bh,
  selectChild: Sn.selectChild,
  selectChildren: Sn.selectChildren,
  filter: Ph,
  merge: Oh,
  selection: Wh,
  transition: op,
  call: Sn.call,
  nodes: Sn.nodes,
  node: Sn.node,
  size: Sn.size,
  empty: Sn.empty,
  each: Sn.each,
  on: Lh,
  attr: mh,
  attrTween: $h,
  style: jh,
  styleTween: Uh,
  text: ep,
  textTween: rp,
  remove: Ih,
  tween: ch,
  delay: _h,
  duration: Hh,
  ease: Vh,
  easeVarying: Nh,
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
  e instanceof Tn ? (t = e._id, e = e._name) : (t = qu(), (n = lp).time = ns(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, a = 0; a < o; ++a)
    for (var i = r[a], s = i.length, l, u = 0; u < s; ++u)
      (l = i[u]) && Ii(l, e, t, u, i, n || up(l, t));
  return new Tn(r, this._parents, e, t);
}
ko.prototype.interrupt = sh;
ko.prototype.transition = cp;
const Wo = (e) => () => e;
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
function Hn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Hn.prototype = {
  constructor: Hn,
  scale: function(e) {
    return e === 1 ? this : new Hn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Hn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var Zi = new Hn(1, 0, 0);
ju.prototype = Hn.prototype;
function ju(e) {
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
function nl() {
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
function Fu() {
  var e = fp, t = vp, n = pp, r = gp, o = hp, a = [0, 1 / 0], i = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, l = Qg, u = Di("start", "zoom", "end"), c, d, f, v = 500, y = 150, x = 0, b = 10;
  function C(H) {
    H.property("__zoom", nl).on("wheel.zoom", V, { passive: !1 }).on("mousedown.zoom", z).on("dblclick.zoom", P).filter(o).on("touchstart.zoom", T).on("touchmove.zoom", A).on("touchend.zoom touchcancel.zoom", I).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  C.transform = function(H, N, _, E) {
    var O = H.selection ? H.selection() : H;
    O.property("__zoom", nl), H !== O ? k(H, N, _, E) : O.interrupt().each(function() {
      S(this, arguments).event(E).start().zoom(null, typeof N == "function" ? N.apply(this, arguments) : N).end();
    });
  }, C.scaleBy = function(H, N, _, E) {
    C.scaleTo(H, function() {
      var O = this.__zoom.k, L = typeof N == "function" ? N.apply(this, arguments) : N;
      return O * L;
    }, _, E);
  }, C.scaleTo = function(H, N, _, E) {
    C.transform(H, function() {
      var O = t.apply(this, arguments), L = this.__zoom, B = _ == null ? w(O) : typeof _ == "function" ? _.apply(this, arguments) : _, K = L.invert(B), j = typeof N == "function" ? N.apply(this, arguments) : N;
      return n($(h(L, j), B, K), O, i);
    }, _, E);
  }, C.translateBy = function(H, N, _, E) {
    C.transform(H, function() {
      return n(this.__zoom.translate(
        typeof N == "function" ? N.apply(this, arguments) : N,
        typeof _ == "function" ? _.apply(this, arguments) : _
      ), t.apply(this, arguments), i);
    }, null, E);
  }, C.translateTo = function(H, N, _, E, O) {
    C.transform(H, function() {
      var L = t.apply(this, arguments), B = this.__zoom, K = E == null ? w(L) : typeof E == "function" ? E.apply(this, arguments) : E;
      return n(Zi.translate(K[0], K[1]).scale(B.k).translate(
        typeof N == "function" ? -N.apply(this, arguments) : -N,
        typeof _ == "function" ? -_.apply(this, arguments) : -_
      ), L, i);
    }, E, O);
  };
  function h(H, N) {
    return N = Math.max(a[0], Math.min(a[1], N)), N === H.k ? H : new Hn(N, H.x, H.y);
  }
  function $(H, N, _) {
    var E = N[0] - _[0] * H.k, O = N[1] - _[1] * H.k;
    return E === H.x && O === H.y ? H : new Hn(H.k, E, O);
  }
  function w(H) {
    return [(+H[0][0] + +H[1][0]) / 2, (+H[0][1] + +H[1][1]) / 2];
  }
  function k(H, N, _, E) {
    H.on("start.zoom", function() {
      S(this, arguments).event(E).start();
    }).on("interrupt.zoom end.zoom", function() {
      S(this, arguments).event(E).end();
    }).tween("zoom", function() {
      var O = this, L = arguments, B = S(O, L).event(E), K = t.apply(O, L), j = _ == null ? w(K) : typeof _ == "function" ? _.apply(O, L) : _, te = Math.max(K[1][0] - K[0][0], K[1][1] - K[0][1]), U = O.__zoom, X = typeof N == "function" ? N.apply(O, L) : N, ae = l(U.invert(j).concat(te / U.k), X.invert(j).concat(te / X.k));
      return function($e) {
        if ($e === 1) $e = X;
        else {
          var ke = ae($e), he = te / ke[2];
          $e = new Hn(he, j[0] - ke[0] * he, j[1] - ke[1] * he);
        }
        B.zoom(null, $e);
      };
    });
  }
  function S(H, N, _) {
    return !_ && H.__zooming || new M(H, N);
  }
  function M(H, N) {
    this.that = H, this.args = N, this.active = 0, this.sourceEvent = null, this.extent = t.apply(H, N), this.taps = 0;
  }
  M.prototype = {
    event: function(H) {
      return H && (this.sourceEvent = H), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(H, N) {
      return this.mouse && H !== "mouse" && (this.mouse[1] = N.invert(this.mouse[0])), this.touch0 && H !== "touch" && (this.touch0[1] = N.invert(this.touch0[0])), this.touch1 && H !== "touch" && (this.touch1[1] = N.invert(this.touch1[0])), this.that.__zoom = N, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(H) {
      var N = qt(this.that).datum();
      u.call(
        H,
        this.that,
        new dp(H, {
          sourceEvent: this.sourceEvent,
          target: C,
          transform: this.that.__zoom,
          dispatch: u
        }),
        N
      );
    }
  };
  function V(H, ...N) {
    if (!e.apply(this, arguments)) return;
    var _ = S(this, N).event(H), E = this.__zoom, O = Math.max(a[0], Math.min(a[1], E.k * Math.pow(2, r.apply(this, arguments)))), L = en(H);
    if (_.wheel)
      (_.mouse[0][0] !== L[0] || _.mouse[0][1] !== L[1]) && (_.mouse[1] = E.invert(_.mouse[0] = L)), clearTimeout(_.wheel);
    else {
      if (E.k === O) return;
      _.mouse = [L, E.invert(L)], Uo(this), _.start();
    }
    Gr(H), _.wheel = setTimeout(B, y), _.zoom("mouse", n($(h(E, O), _.mouse[0], _.mouse[1]), _.extent, i));
    function B() {
      _.wheel = null, _.end();
    }
  }
  function z(H, ...N) {
    if (f || !e.apply(this, arguments)) return;
    var _ = H.currentTarget, E = S(this, N, !0).event(H), O = qt(H.view).on("mousemove.zoom", j, !0).on("mouseup.zoom", te, !0), L = en(H, _), B = H.clientX, K = H.clientY;
    Nu(H.view), ta(H), E.mouse = [L, this.__zoom.invert(L)], Uo(this), E.start();
    function j(U) {
      if (Gr(U), !E.moved) {
        var X = U.clientX - B, ae = U.clientY - K;
        E.moved = X * X + ae * ae > x;
      }
      E.event(U).zoom("mouse", n($(E.that.__zoom, E.mouse[0] = en(U, _), E.mouse[1]), E.extent, i));
    }
    function te(U) {
      O.on("mousemove.zoom mouseup.zoom", null), Pu(U.view, E.moved), Gr(U), E.event(U).end();
    }
  }
  function P(H, ...N) {
    if (e.apply(this, arguments)) {
      var _ = this.__zoom, E = en(H.changedTouches ? H.changedTouches[0] : H, this), O = _.invert(E), L = _.k * (H.shiftKey ? 0.5 : 2), B = n($(h(_, L), E, O), t.apply(this, N), i);
      Gr(H), s > 0 ? qt(this).transition().duration(s).call(k, B, E, H) : qt(this).call(C.transform, B, E, H);
    }
  }
  function T(H, ...N) {
    if (e.apply(this, arguments)) {
      var _ = H.touches, E = _.length, O = S(this, N, H.changedTouches.length === E).event(H), L, B, K, j;
      for (ta(H), B = 0; B < E; ++B)
        K = _[B], j = en(K, this), j = [j, this.__zoom.invert(j), K.identifier], O.touch0 ? !O.touch1 && O.touch0[2] !== j[2] && (O.touch1 = j, O.taps = 0) : (O.touch0 = j, L = !0, O.taps = 1 + !!c);
      c && (c = clearTimeout(c)), L && (O.taps < 2 && (d = j[0], c = setTimeout(function() {
        c = null;
      }, v)), Uo(this), O.start());
    }
  }
  function A(H, ...N) {
    if (this.__zooming) {
      var _ = S(this, N).event(H), E = H.changedTouches, O = E.length, L, B, K, j;
      for (Gr(H), L = 0; L < O; ++L)
        B = E[L], K = en(B, this), _.touch0 && _.touch0[2] === B.identifier ? _.touch0[0] = K : _.touch1 && _.touch1[2] === B.identifier && (_.touch1[0] = K);
      if (B = _.that.__zoom, _.touch1) {
        var te = _.touch0[0], U = _.touch0[1], X = _.touch1[0], ae = _.touch1[1], $e = ($e = X[0] - te[0]) * $e + ($e = X[1] - te[1]) * $e, ke = (ke = ae[0] - U[0]) * ke + (ke = ae[1] - U[1]) * ke;
        B = h(B, Math.sqrt($e / ke)), K = [(te[0] + X[0]) / 2, (te[1] + X[1]) / 2], j = [(U[0] + ae[0]) / 2, (U[1] + ae[1]) / 2];
      } else if (_.touch0) K = _.touch0[0], j = _.touch0[1];
      else return;
      _.zoom("touch", n($(B, K, j), _.extent, i));
    }
  }
  function I(H, ...N) {
    if (this.__zooming) {
      var _ = S(this, N).event(H), E = H.changedTouches, O = E.length, L, B;
      for (ta(H), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, v), L = 0; L < O; ++L)
        B = E[L], _.touch0 && _.touch0[2] === B.identifier ? delete _.touch0 : _.touch1 && _.touch1[2] === B.identifier && delete _.touch1;
      if (_.touch1 && !_.touch0 && (_.touch0 = _.touch1, delete _.touch1), _.touch0) _.touch0[1] = this.__zoom.invert(_.touch0[0]);
      else if (_.end(), _.taps === 2 && (B = en(B, this), Math.hypot(d[0] - B[0], d[1] - B[1]) < b)) {
        var K = qt(this).on("dblclick.zoom");
        K && K.apply(this, arguments);
      }
    }
  }
  return C.wheelDelta = function(H) {
    return arguments.length ? (r = typeof H == "function" ? H : Wo(+H), C) : r;
  }, C.filter = function(H) {
    return arguments.length ? (e = typeof H == "function" ? H : Wo(!!H), C) : e;
  }, C.touchable = function(H) {
    return arguments.length ? (o = typeof H == "function" ? H : Wo(!!H), C) : o;
  }, C.extent = function(H) {
    return arguments.length ? (t = typeof H == "function" ? H : Wo([[+H[0][0], +H[0][1]], [+H[1][0], +H[1][1]]]), C) : t;
  }, C.scaleExtent = function(H) {
    return arguments.length ? (a[0] = +H[0], a[1] = +H[1], C) : [a[0], a[1]];
  }, C.translateExtent = function(H) {
    return arguments.length ? (i[0][0] = +H[0][0], i[1][0] = +H[1][0], i[0][1] = +H[0][1], i[1][1] = +H[1][1], C) : [[i[0][0], i[0][1]], [i[1][0], i[1][1]]];
  }, C.constrain = function(H) {
    return arguments.length ? (n = H, C) : n;
  }, C.duration = function(H) {
    return arguments.length ? (s = +H, C) : s;
  }, C.interpolate = function(H) {
    return arguments.length ? (l = H, C) : l;
  }, C.on = function() {
    var H = u.on.apply(u, arguments);
    return H === u ? C : H;
  }, C.clickDistance = function(H) {
    return arguments.length ? (x = (H = +H) * H, C) : Math.sqrt(x);
  }, C.tapDistance = function(H) {
    return arguments.length ? (b = +H, C) : b;
  }, C;
}
const Nr = {
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
var qn;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(qn || (qn = {}));
var hi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(hi || (hi = {}));
const ka = {
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
const rl = {
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
function ol(e, t, n) {
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
const wp = (e) => "id" in e && "source" in e && "target" in e, xp = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), is = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), So = (e, t = [0, 0]) => {
  const { width: n, height: r } = er(e), o = e.origin ?? t, a = n * o[0], i = r * o[1];
  return {
    x: e.position.x - a,
    y: e.position.y - i
  };
}, bp = (e, t = { nodeOrigin: [0, 0], nodeLookup: void 0 }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const a = typeof o == "string";
    let i = !t.nodeLookup && !a ? o : void 0;
    t.nodeLookup && (i = a ? t.nodeLookup.get(o) : is(o) ? o : t.nodeLookup.get(o.id));
    const s = i ? pi(i, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Bi(r, s);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Ri(n);
}, Mo = (e, t = {}) => {
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
    ...Ho(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: d = !0, hidden: f = !1 } = u;
    if (i && !d || f)
      continue;
    const v = c.width ?? u.width ?? u.initialWidth ?? null, y = c.height ?? u.height ?? u.initialHeight ?? null, x = mo(s, Or(u)), b = (v ?? 0) * (y ?? 0), C = a && x > 0;
    (!u.internals.handleBounds || C || x >= b || u.dragging) && l.push(u);
  }
  return l;
}, _a = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function il(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t != null && t.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function al({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: a }, i) {
  if (e.size === 0)
    return Promise.resolve(!1);
  const s = Mo(e), l = ss(s, t, n, (i == null ? void 0 : i.minZoom) ?? o, (i == null ? void 0 : i.maxZoom) ?? a, (i == null ? void 0 : i.padding) ?? 0.1);
  return await r.setViewport(l, { duration: i == null ? void 0 : i.duration }), Promise.resolve(!0);
}
function $p({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: a }) {
  const i = n.get(e), s = i.parentId ? n.get(i.parentId) : void 0, { x: l, y: u } = s ? s.internals.positionAbsolute : { x: 0, y: 0 }, c = i.origin ?? r;
  let d = o;
  if (i.extent === "parent" && !i.expandParent)
    if (!s)
      a == null || a("005", Nr.error005());
    else {
      const v = s.measured.width, y = s.measured.height;
      v && y && (d = [
        [l, u],
        [l + v, u + y]
      ]);
    }
  else s && Tr(i.extent) && (d = [
    [i.extent[0][0] + l, i.extent[0][1] + u],
    [i.extent[1][0] + l, i.extent[1][1] + u]
  ]);
  const f = Tr(d) ? dr(t, d, i.measured) : t;
  return (i.measured.width === void 0 || i.measured.height === void 0) && (a == null || a("015", Nr.error015())), {
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
    const f = a.has(d.id), v = !f && d.parentId && i.find((y) => y.id === d.parentId);
    (f || v) && i.push(d);
  }
  const s = new Set(t.map((d) => d.id)), l = r.filter((d) => d.deletable !== !1), u = _a(i, l);
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
const Pr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), dr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Pr(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: Pr(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function Ju(e, t, n) {
  const { width: r, height: o } = er(n), { x: a, y: i } = n.internals.positionAbsolute;
  return dr(e, [
    [a, i],
    [a + r, i + o]
  ], t);
}
const sl = (e, t, n) => e < t ? Pr(Math.abs(e - t), 1, t) / t : e > n ? -Pr(Math.abs(e - n), 1, t) / t : 0, Qu = (e, t, n = 15, r = 40) => {
  const o = sl(e.x, r, t.width - r) * n, a = sl(e.y, r, t.height - r) * n;
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
}), Or = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: a } = is(e) ? e.internals.positionAbsolute : So(e, t);
  return {
    x: o,
    y: a,
    width: ((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, pi = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: a } = is(e) ? e.internals.positionAbsolute : So(e, t);
  return {
    x: o,
    y: a,
    x2: o + (((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: a + (((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, ec = (e, t) => Ri(Bi(Sa(e), Sa(t))), mo = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, ll = (e) => En(e.width) && En(e.height) && En(e.x) && En(e.y), En = (e) => !isNaN(e) && isFinite(e), Cp = (e, t) => {
}, as = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Ho = ({ x: e, y: t }, [n, r, o], a = !1, i = [1, 1]) => {
  const s = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return a ? as(s, i) : s;
}, tc = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
}), ss = (e, t, n, r, o, a) => {
  const i = t / (e.width * (1 + a)), s = n / (e.height * (1 + a)), l = Math.min(i, s), u = Pr(l, r, o), c = e.x + e.width / 2, d = e.y + e.height / 2, f = t / 2 - c * u, v = n / 2 - d * u;
  return { x: f, y: v, zoom: u };
}, mi = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function Tr(e) {
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
function kp(e, t = { width: 0, height: 0 }, n, r, o) {
  const a = { ...e }, i = r.get(n);
  if (i) {
    const s = i.origin || o;
    a.x += i.internals.positionAbsolute.x - (t.width ?? 0) * s[0], a.y += i.internals.positionAbsolute.y - (t.height ?? 0) * s[1];
  }
  return a;
}
function na(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: a, y: i } = Nn(e), s = Ho({ x: a - ((o == null ? void 0 : o.left) ?? 0), y: i - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? as(s, t) : s;
  return {
    xSnapped: l,
    ySnapped: u,
    ...s
  };
}
const ls = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), _p = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, Sp = ["INPUT", "SELECT", "TEXTAREA"];
function Mp(e) {
  var t, n;
  const r = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target;
  return (r == null ? void 0 : r.nodeType) !== 1 ? !1 : Sp.includes(r.nodeName) || r.hasAttribute("contenteditable") || !!r.closest(".nokey");
}
const rc = (e) => "clientX" in e, Nn = (e, t) => {
  var n, r;
  const o = rc(e), a = o ? e.clientX : (n = e.touches) == null ? void 0 : n[0].clientX, i = o ? e.clientY : (r = e.touches) == null ? void 0 : r[0].clientY;
  return {
    x: a - ((t == null ? void 0 : t.left) ?? 0),
    y: i - ((t == null ? void 0 : t.top) ?? 0)
  };
}, ul = (e, t, n, r, o) => {
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
      ...ls(i)
    };
  });
};
function Hp({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: a, targetControlX: i, targetControlY: s }) {
  const l = e * 0.125 + o * 0.375 + i * 0.375 + n * 0.125, u = t * 0.125 + a * 0.375 + s * 0.375 + r * 0.125, c = Math.abs(l - e), d = Math.abs(u - t);
  return [l, u, c, d];
}
function Xo(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function cl({ pos: e, x1: t, y1: n, x2: r, y2: o, c: a }) {
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
  const [s, l] = cl({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: i
  }), [u, c] = cl({
    pos: a,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: i
  }), [d, f, v, y] = Hp({
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
function ic({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, a = n < e ? n + o : n - o, i = Math.abs(r - t) / 2, s = r < t ? r + i : r - i;
  return [a, s, o, i];
}
function Ep({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const a = n || t.selected || e.selected, i = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (a ? i : 0);
}
function Vp({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
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
const zp = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, Np = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), Pp = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return wp(e) ? n = { ...e } : n = {
    ...e,
    id: zp(e)
  }, Np(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Ma({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, a, i, s] = ic({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, a, i, s];
}
const dl = {
  [Se.Left]: { x: -1, y: 0 },
  [Se.Right]: { x: 1, y: 0 },
  [Se.Top]: { x: 0, y: -1 },
  [Se.Bottom]: { x: 0, y: 1 }
}, Op = ({ source: e, sourcePosition: t = Se.Bottom, target: n }) => t === Se.Left || t === Se.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, fl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function Tp({ source: e, sourcePosition: t = Se.Bottom, target: n, targetPosition: r = Se.Top, center: o, offset: a }) {
  const i = dl[t], s = dl[r], l = { x: e.x + i.x * a, y: e.y + i.y * a }, u = { x: n.x + s.x * a, y: n.y + s.y * a }, c = Op({
    source: l,
    sourcePosition: t,
    target: u
  }), d = c.x !== 0 ? "x" : "y", f = c[d];
  let v = [], y, x;
  const b = { x: 0, y: 0 }, C = { x: 0, y: 0 }, [h, $, w, k] = ic({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (i[d] * s[d] === -1) {
    y = o.x ?? h, x = o.y ?? $;
    const S = [
      { x: y, y: l.y },
      { x: y, y: u.y }
    ], M = [
      { x: l.x, y: x },
      { x: u.x, y: x }
    ];
    i[d] === f ? v = d === "x" ? S : M : v = d === "x" ? M : S;
  } else {
    const S = [{ x: l.x, y: u.y }], M = [{ x: u.x, y: l.y }];
    if (d === "x" ? v = i.x === f ? M : S : v = i.y === f ? S : M, t === r) {
      const A = Math.abs(e[d] - n[d]);
      if (A <= a) {
        const I = Math.min(a - 1, a - A);
        i[d] === f ? b[d] = (l[d] > e[d] ? -1 : 1) * I : C[d] = (u[d] > n[d] ? -1 : 1) * I;
      }
    }
    if (t !== r) {
      const A = d === "x" ? "y" : "x", I = i[d] === s[A], H = l[A] > u[A], N = l[A] < u[A];
      (i[d] === 1 && (!I && H || I && N) || i[d] !== 1 && (!I && N || I && H)) && (v = d === "x" ? S : M);
    }
    const V = { x: l.x + b.x, y: l.y + b.y }, z = { x: u.x + C.x, y: u.y + C.y }, P = Math.max(Math.abs(V.x - v[0].x), Math.abs(z.x - v[0].x)), T = Math.max(Math.abs(V.y - v[0].y), Math.abs(z.y - v[0].y));
    P >= T ? (y = (V.x + z.x) / 2, x = v[0].y) : (y = v[0].x, x = (V.y + z.y) / 2);
  }
  return [[
    e,
    { x: l.x + b.x, y: l.y + b.y },
    ...v,
    { x: u.x + C.x, y: u.y + C.y },
    n
  ], y, x, w, k];
}
function Dp(e, t, n, r) {
  const o = Math.min(fl(e, t) / 2, fl(t, n) / 2, r), { x: a, y: i } = t;
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
  const [c, d, f, v, y] = Tp({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: a,
    center: { x: s, y: l },
    offset: u
  });
  return [c.reduce((x, b, C) => {
    let h = "";
    return C > 0 && C < c.length - 1 ? h = Dp(c[C - 1], b, c[C + 1], i) : h = `${C === 0 ? "M" : "L"}${b.x} ${b.y}`, x += h, x;
  }, ""), d, f, v, y];
}
function vl(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function Lp(e) {
  var t;
  const { sourceNode: n, targetNode: r } = e;
  if (!vl(n) || !vl(r))
    return null;
  const o = n.internals.handleBounds || gl(n.handles), a = r.internals.handleBounds || gl(r.handles), i = hl((o == null ? void 0 : o.source) ?? [], e.sourceHandle), s = hl(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === cr.Strict ? (a == null ? void 0 : a.target) ?? [] : ((a == null ? void 0 : a.target) ?? []).concat((a == null ? void 0 : a.source) ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return (t = e.onError) == null || t.call(e, "008", Nr.error008(i ? "target" : "source", {
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
function gl(e) {
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
function hl(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Ha(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function Ap(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const a = /* @__PURE__ */ new Set();
  return e.reduce((i, s) => ([s.markerStart || r, s.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = Ha(l, t);
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
const us = {
  nodeOrigin: [0, 0],
  nodeExtent: gi,
  elevateNodesOnSelect: !0,
  defaults: {}
}, Zp = {
  ...us,
  checkEquality: !0
};
function cs(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function Bp(e, t, n) {
  const r = cs(us, n);
  for (const o of e.values())
    if (o.parentId)
      ds(o, e, t, r);
    else {
      const a = So(o, r.nodeOrigin), i = Tr(o.extent) ? o.extent : r.nodeExtent, s = dr(a, i, er(o));
      o.internals.positionAbsolute = s;
    }
}
function ac(e, t, n, r) {
  var o, a;
  const i = cs(Zp, r), s = new Map(t), l = i != null && i.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let c = s.get(u.id);
    if (i.checkEquality && u === (c == null ? void 0 : c.internals.userNode))
      t.set(u.id, c);
    else {
      const d = So(u, i.nodeOrigin), f = Tr(u.extent) ? u.extent : i.nodeExtent, v = dr(d, f, er(u));
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
    u.parentId && ds(c, t, n, r);
  }
}
function Rp(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function ds(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: a, nodeExtent: i } = cs(us, r), s = e.parentId, l = t.get(s);
  if (!l) {
    console.warn(`Parent node ${s} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  Rp(e, n);
  const u = o ? 1e3 : 0, { x: c, y: d, z: f } = Wp(e, l, a, i, u), { positionAbsolute: v } = e.internals, y = c !== v.x || d !== v.y;
  (y || f !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: y ? { x: c, y: d } : v,
      z: f
    }
  });
}
function sc(e, t) {
  return (En(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function Wp(e, t, n, r, o) {
  const { x: a, y: i } = t.internals.positionAbsolute, s = er(e), l = So(e, n), u = Tr(e.extent) ? dr(l, e.extent, s) : l;
  let c = dr({ x: a + u.x, y: i + u.y }, r, s);
  e.extent === "parent" && (c = Ju(c, s, t));
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
    const u = ((o = i.get(s.parentId)) == null ? void 0 : o.expandedRect) ?? Or(l), c = ec(u, s.rect);
    i.set(s.parentId, { expandedRect: c, parent: l });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: l }, u) => {
    var c;
    const d = l.internals.positionAbsolute, f = er(l), v = l.origin ?? r, y = s.x < d.x ? Math.round(Math.abs(d.x - s.x)) : 0, x = s.y < d.y ? Math.round(Math.abs(d.y - s.y)) : 0, b = Math.max(f.width, Math.round(s.width)), C = Math.max(f.height, Math.round(s.height)), h = (b - f.width) * v[0], $ = (C - f.height) * v[1];
    (y > 0 || x > 0 || h || $) && (a.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - y + h,
        y: l.position.y - x + $
      }
    }), (c = n.get(u)) == null || c.forEach((w) => {
      e.some((k) => k.id === w.id) || a.push({
        id: w.id,
        type: "position",
        position: {
          x: w.position.x + y,
          y: w.position.y + x
        }
      });
    })), (f.width < s.width || f.height < s.height || y || x) && a.push({
      id: u,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: b + (y ? v[0] * y - h : 0),
        height: C + (x ? v[1] * x - $ : 0)
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
    const y = ls(f.nodeElement), x = v.measured.width !== y.width || v.measured.height !== y.height;
    if (y.width && y.height && (x || !v.internals.handleBounds || f.force)) {
      const b = f.nodeElement.getBoundingClientRect(), C = Tr(v.extent) ? v.extent : a;
      let { positionAbsolute: h } = v.internals;
      v.parentId && v.extent === "parent" ? h = Ju(h, y, t.get(v.parentId)) : C && (h = dr(h, C, y));
      const $ = {
        ...v,
        measured: y,
        internals: {
          ...v.internals,
          positionAbsolute: h,
          handleBounds: {
            source: ul("source", f.nodeElement, b, c, v.id),
            target: ul("target", f.nodeElement, b, c, v.id)
          }
        }
      };
      t.set(v.id, $), v.parentId && ds($, t, n, { nodeOrigin: o }), s = !0, x && (l.push({
        id: v.id,
        type: "dimensions",
        dimensions: y
      }), v.expandParent && v.parentId && d.push({
        id: v.id,
        parentId: v.parentId,
        rect: Or($, o)
      }));
    }
  }
  if (d.length > 0) {
    const f = Xp(d, t, n, o);
    l.push(...f);
  }
  return { changes: l, updatedInternals: s };
}
async function Kp({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: a }) {
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
function pl(e, t, n, r, o, a) {
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
    pl("source", l, c, e, o, i), pl("target", l, u, e, a, s), t.set(r.id, r);
  }
}
function qp(e, t) {
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
function ml(e, t, n) {
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
function jp(e, t, n, r) {
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
function Fp({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let a = { x: null, y: null }, i = 0, s = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, c = null, d = !1, f = null, v = !1;
  function y({ noDragClassName: b, handleSelector: C, domNode: h, isSelectable: $, nodeId: w, nodeClickDistance: k = 0 }) {
    f = qt(h);
    function S({ x: P, y: T }, A) {
      const { nodeLookup: I, nodeExtent: H, snapGrid: N, snapToGrid: _, nodeOrigin: E, onNodeDrag: O, onSelectionDrag: L, onError: B, updateNodePositions: K } = t();
      a = { x: P, y: T };
      let j = !1, te = { x: 0, y: 0, x2: 0, y2: 0 };
      if (s.size > 1 && H) {
        const U = Mo(s);
        te = Sa(U);
      }
      for (const [U, X] of s) {
        if (!I.has(U))
          continue;
        let ae = { x: P - X.distance.x, y: T - X.distance.y };
        _ && (ae = as(ae, N));
        let $e = [
          [H[0][0], H[0][1]],
          [H[1][0], H[1][1]]
        ];
        if (s.size > 1 && H && !X.extent) {
          const { positionAbsolute: ve } = X.internals, ne = ve.x - te.x + H[0][0], pe = ve.x + X.measured.width - te.x2 + H[1][0], Xe = ve.y - te.y + H[0][1], Ze = ve.y + X.measured.height - te.y2 + H[1][1];
          $e = [
            [ne, Xe],
            [pe, Ze]
          ];
        }
        const { position: ke, positionAbsolute: he } = $p({
          nodeId: U,
          nextPosition: ae,
          nodeLookup: I,
          nodeExtent: $e,
          nodeOrigin: E,
          onError: B
        });
        j = j || X.position.x !== ke.x || X.position.y !== ke.y, X.position = ke, X.internals.positionAbsolute = he;
      }
      if (j && (K(s, !0), A && (r || O || !w && L))) {
        const [U, X] = ra({
          nodeId: w,
          dragItems: s,
          nodeLookup: I
        });
        r == null || r(A, s, U, X), O == null || O(A, U, X), w || L == null || L(A, X);
      }
    }
    async function M() {
      if (!c)
        return;
      const { transform: P, panBy: T, autoPanSpeed: A, autoPanOnNodeDrag: I } = t();
      if (!I) {
        l = !1, cancelAnimationFrame(i);
        return;
      }
      const [H, N] = Qu(u, c, A);
      (H !== 0 || N !== 0) && (a.x = (a.x ?? 0) - H / P[2], a.y = (a.y ?? 0) - N / P[2], await T({ x: H, y: N }) && S(a, null)), i = requestAnimationFrame(M);
    }
    function V(P) {
      var T;
      const { nodeLookup: A, multiSelectionActive: I, nodesDraggable: H, transform: N, snapGrid: _, snapToGrid: E, selectNodesOnDrag: O, onNodeDragStart: L, onSelectionDragStart: B, unselectNodesAndEdges: K } = t();
      d = !0, (!O || !$) && !I && w && ((T = A.get(w)) != null && T.selected || K()), $ && O && w && (e == null || e(w));
      const j = na(P.sourceEvent, { transform: N, snapGrid: _, snapToGrid: E, containerBounds: c });
      if (a = j, s = jp(A, H, j, w), s.size > 0 && (n || L || !w && B)) {
        const [te, U] = ra({
          nodeId: w,
          dragItems: s,
          nodeLookup: A
        });
        n == null || n(P.sourceEvent, s, te, U), L == null || L(P.sourceEvent, te, U), w || B == null || B(P.sourceEvent, U);
      }
    }
    const z = Mg().clickDistance(k).on("start", (P) => {
      const { domNode: T, nodeDragThreshold: A, transform: I, snapGrid: H, snapToGrid: N } = t();
      c = (T == null ? void 0 : T.getBoundingClientRect()) || null, v = !1, A === 0 && V(P), a = na(P.sourceEvent, { transform: I, snapGrid: H, snapToGrid: N, containerBounds: c }), u = Nn(P.sourceEvent, c);
    }).on("drag", (P) => {
      const { autoPanOnNodeDrag: T, transform: A, snapGrid: I, snapToGrid: H, nodeDragThreshold: N, nodeLookup: _ } = t(), E = na(P.sourceEvent, { transform: A, snapGrid: I, snapToGrid: H, containerBounds: c });
      if ((P.sourceEvent.type === "touchmove" && P.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      w && !_.has(w)) && (v = !0), !v) {
        if (!l && T && d && (l = !0, M()), !d) {
          const O = E.xSnapped - (a.x ?? 0), L = E.ySnapped - (a.y ?? 0);
          Math.sqrt(O * O + L * L) > N && V(P);
        }
        (a.x !== E.xSnapped || a.y !== E.ySnapped) && s && d && (u = Nn(P.sourceEvent, c), S(E, P.sourceEvent));
      }
    }).on("end", (P) => {
      if (!(!d || v) && (l = !1, d = !1, cancelAnimationFrame(i), s.size > 0)) {
        const { nodeLookup: T, updateNodePositions: A, onNodeDragStop: I, onSelectionDragStop: H } = t();
        if (A(s, !1), o || I || !w && H) {
          const [N, _] = ra({
            nodeId: w,
            dragItems: s,
            nodeLookup: T,
            dragging: !1
          });
          o == null || o(P.sourceEvent, s, N, _), I == null || I(P.sourceEvent, N, _), w || H == null || H(P.sourceEvent, _);
        }
      }
    }).filter((P) => {
      const T = P.target;
      return !P.button && (!b || !ml(T, `.${b}`, h)) && (!C || ml(T, C, h));
    });
    f.call(z);
  }
  function x() {
    f == null || f.on(".drag", null);
  }
  return {
    update: y,
    destroy: x
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
    mo(o, Or(a)) > 0 && r.push(a);
  return r;
}
const Up = 250;
function Jp(e, t, n, r) {
  var o, a;
  let i = [], s = 1 / 0;
  const l = Gp(e, n, t + Up);
  for (const u of l) {
    const c = [...((o = u.internals.handleBounds) == null ? void 0 : o.source) ?? [], ...((a = u.internals.handleBounds) == null ? void 0 : a.target) ?? []];
    for (const d of c) {
      if (r.nodeId === d.nodeId && r.type === d.type && r.id === d.id)
        continue;
      const { x: f, y: v } = yo(u, d, d.position, !0), y = Math.sqrt(Math.pow(f - e.x, 2) + Math.pow(v - e.y, 2));
      y > t || (y < s ? (i = [{ ...d, x: f, y: v }], s = y) : y === s && i.push({ ...d, x: f, y: v }));
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
function Qp(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const fc = () => !0;
function e0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: a, isTarget: i, domNode: s, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: d, panBy: f, cancelConnection: v, onConnectStart: y, onConnect: x, onConnectEnd: b, isValidConnection: C = fc, onReconnectEnd: h, updateConnection: $, getTransform: w, getFromHandle: k, autoPanSpeed: S }) {
  const M = _p(e.target);
  let V = 0, z;
  const { x: P, y: T } = Nn(e), A = M == null ? void 0 : M.elementFromPoint(P, T), I = dc(a, A), H = s == null ? void 0 : s.getBoundingClientRect();
  if (!H || !I)
    return;
  const N = cc(o, I, r, l, t);
  if (!N)
    return;
  let _ = Nn(e, H), E = !1, O = null, L = !1, B = null;
  function K() {
    if (!c || !H)
      return;
    const [ke, he] = Qu(_, H, S);
    f({ x: ke, y: he }), V = requestAnimationFrame(K);
  }
  const j = {
    ...N,
    nodeId: o,
    type: I,
    position: N.position
  }, te = l.get(o), U = {
    inProgress: !0,
    isValid: null,
    from: yo(te, j, Se.Left, !0),
    fromHandle: j,
    fromPosition: j.position,
    fromNode: te,
    to: _,
    toHandle: null,
    toPosition: rl[j.position],
    toNode: null
  };
  $(U);
  let X = U;
  y == null || y(e, { nodeId: o, handleId: r, handleType: I });
  function ae(ke) {
    if (!k() || !j) {
      $e(ke);
      return;
    }
    const he = w();
    _ = Nn(ke, H), z = Jp(Ho(_, he, !1, [1, 1]), n, l, j), E || (K(), E = !0);
    const ve = vc(ke, {
      handle: z,
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
    B = ve.handleDomNode, O = ve.connection, L = Qp(!!z, ve.isValid);
    const ne = {
      // from stays the same
      ...X,
      isValid: L,
      to: z && L ? tc({ x: z.x, y: z.y }, he) : _,
      toHandle: ve.toHandle,
      toPosition: L && ve.toHandle ? ve.toHandle.position : rl[j.position],
      toNode: ve.toHandle ? l.get(ve.toHandle.nodeId) : null
    };
    L && z && X.toHandle && ne.toHandle && X.toHandle.type === ne.toHandle.type && X.toHandle.nodeId === ne.toHandle.nodeId && X.toHandle.id === ne.toHandle.id && X.to.x === ne.to.x && X.to.y === ne.to.y || ($(ne), X = ne);
  }
  function $e(ke) {
    (z || B) && O && L && (x == null || x(O));
    const { inProgress: he, ...ve } = X, ne = {
      ...ve,
      toPosition: X.toHandle ? X.toPosition : null
    };
    b == null || b(ke, ne), a && (h == null || h(ke, ne)), v(), cancelAnimationFrame(V), E = !1, L = !1, O = null, B = null, M.removeEventListener("mousemove", ae), M.removeEventListener("mouseup", $e), M.removeEventListener("touchmove", ae), M.removeEventListener("touchend", $e);
  }
  M.addEventListener("mousemove", ae), M.addEventListener("mouseup", $e), M.addEventListener("touchmove", ae), M.addEventListener("touchend", $e);
}
function vc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: a, doc: i, lib: s, flowId: l, isValidConnection: u = fc, nodeLookup: c }) {
  const d = a === "target", f = t ? i.querySelector(`.${s}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: v, y } = Nn(e), x = i.elementFromPoint(v, y), b = x != null && x.classList.contains(`${s}-flow__handle`) ? x : f, C = {
    handleDomNode: b,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (b) {
    const h = dc(void 0, b), $ = b.getAttribute("data-nodeid"), w = b.getAttribute("data-handleid"), k = b.classList.contains("connectable"), S = b.classList.contains("connectableend");
    if (!$ || !h)
      return C;
    const M = {
      source: d ? $ : r,
      sourceHandle: d ? w : o,
      target: d ? r : $,
      targetHandle: d ? o : w
    };
    C.connection = M;
    const V = k && S && (n === cr.Strict ? d && h === "source" || !d && h === "target" : $ !== r || w !== o);
    C.isValid = V && u(M), C.toHandle = cc($, h, w, c, n, !1);
  }
  return C;
}
const t0 = {
  onPointerDown: e0,
  isValid: vc
};
function n0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = qt(e);
  function a({ translateExtent: s, width: l, height: u, zoomStep: c = 10, pannable: d = !0, zoomable: f = !0, inversePan: v = !1 }) {
    const y = ($) => {
      const w = n();
      if ($.sourceEvent.type !== "wheel" || !t)
        return;
      const k = -$.sourceEvent.deltaY * ($.sourceEvent.deltaMode === 1 ? 0.05 : $.sourceEvent.deltaMode ? 1 : 2e-3) * c, S = w[2] * Math.pow(2, k);
      t.scaleTo(S);
    };
    let x = [0, 0];
    const b = ($) => {
      ($.sourceEvent.type === "mousedown" || $.sourceEvent.type === "touchstart") && (x = [
        $.sourceEvent.clientX ?? $.sourceEvent.touches[0].clientX,
        $.sourceEvent.clientY ?? $.sourceEvent.touches[0].clientY
      ]);
    }, C = ($) => {
      const w = n();
      if ($.sourceEvent.type !== "mousemove" && $.sourceEvent.type !== "touchmove" || !t)
        return;
      const k = [
        $.sourceEvent.clientX ?? $.sourceEvent.touches[0].clientX,
        $.sourceEvent.clientY ?? $.sourceEvent.touches[0].clientY
      ], S = [k[0] - x[0], k[1] - x[1]];
      x = k;
      const M = r() * Math.max(w[2], Math.log(w[2])) * (v ? -1 : 1), V = {
        x: w[0] - S[0] * M,
        y: w[1] - S[1] * M
      }, z = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: V.x,
        y: V.y,
        zoom: w[2]
      }, z, s);
    }, h = Fu().on("start", b).on("zoom", d ? C : null).on("zoom.wheel", f ? y : null);
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
const r0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Wi = (e) => ({
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
      const b = en(c), C = hc(c), h = d * Math.pow(2, C);
      r.scaleTo(n, h, b, c);
      return;
    }
    const f = c.deltaMode === 1 ? 20 : 1;
    let v = o === qn.Vertical ? 0 : c.deltaX * f, y = o === qn.Horizontal ? 0 : c.deltaY * f;
    !mi() && c.shiftKey && o !== qn.Vertical && (v = c.deltaY * f, y = 0), r.translateBy(
      n,
      -(v / d) * a,
      -(y / d) * a,
      // @ts-ignore
      { internal: !0 }
    );
    const x = Wi(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, s == null || s(c, x)), e.isPanScrolling && (l == null || l(c, x), e.panScrollTimeout = setTimeout(() => {
      u == null || u(c, x), e.isPanScrolling = !1;
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
    const s = Wi(r.transform);
    e.mouseButton = ((a = r.sourceEvent) == null ? void 0 : a.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = s, ((i = r.sourceEvent) == null ? void 0 : i.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, s));
  };
}
function s0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (a) => {
    var i, s;
    e.usedRightMouseButton = !!(n && gc(t, e.mouseButton ?? 0)), (i = a.sourceEvent) != null && i.sync || r([a.transform.x, a.transform.y, a.transform.k]), o && !((s = a.sourceEvent) != null && s.internal) && (o == null || o(a.sourceEvent, Wi(a.transform)));
  };
}
function l0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: a }) {
  return (i) => {
    var s;
    if (!((s = i.sourceEvent) != null && s.internal) && (e.isZoomingOrPanning = !1, a && gc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && i.sourceEvent && a(i.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && r0(e.prevViewport, i.transform))) {
      const l = Wi(i.transform);
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
    const y = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || c.type === "wheel") && y;
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
  }, d = e.getBoundingClientRect(), f = Fu().clickDistance(!En(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), v = qt(e).call(f);
  $({
    x: a.x,
    y: a.y,
    zoom: Pr(a.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], o);
  const y = v.on("wheel.zoom"), x = v.on("dblclick.zoom");
  f.wheelDelta(hc);
  function b(A, I) {
    return v ? new Promise((H) => {
      f == null || f.transform(ia(v, I == null ? void 0 : I.duration, () => H(!0)), A);
    }) : Promise.resolve(!1);
  }
  function C({ noWheelClassName: A, noPanClassName: I, onPaneContextMenu: H, userSelectionActive: N, panOnScroll: _, panOnDrag: E, panOnScrollMode: O, panOnScrollSpeed: L, preventScrolling: B, zoomOnPinch: K, zoomOnScroll: j, zoomOnDoubleClick: te, zoomActivationKeyPressed: U, lib: X, onTransformChange: ae }) {
    N && !c.isZoomingOrPanning && h();
    const $e = _ && !U && !N ? o0({
      zoomPanValues: c,
      noWheelClassName: A,
      d3Selection: v,
      d3Zoom: f,
      panOnScrollMode: O,
      panOnScrollSpeed: L,
      zoomOnPinch: K,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: l
    }) : i0({
      noWheelClassName: A,
      preventScrolling: B,
      d3ZoomHandler: y
    });
    if (v.on("wheel.zoom", $e, { passive: !1 }), !N) {
      const he = a0({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: s
      });
      f.on("start", he);
      const ve = s0({
        zoomPanValues: c,
        panOnDrag: E,
        onPaneContextMenu: !!H,
        onPanZoom: i,
        onTransformChange: ae
      });
      f.on("zoom", ve);
      const ne = l0({
        zoomPanValues: c,
        panOnDrag: E,
        panOnScroll: _,
        onPaneContextMenu: H,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      f.on("end", ne);
    }
    const ke = u0({
      zoomActivationKeyPressed: U,
      panOnDrag: E,
      zoomOnScroll: j,
      panOnScroll: _,
      zoomOnDoubleClick: te,
      zoomOnPinch: K,
      userSelectionActive: N,
      noPanClassName: I,
      noWheelClassName: A,
      lib: X
    });
    f.filter(ke), te ? v.on("dblclick.zoom", x) : v.on("dblclick.zoom", null);
  }
  function h() {
    f.on("zoom", null);
  }
  async function $(A, I, H) {
    const N = oa(A), _ = f == null ? void 0 : f.constrain()(N, I, H);
    return _ && await b(_), new Promise((E) => E(_));
  }
  async function w(A, I) {
    const H = oa(A);
    return await b(H, I), new Promise((N) => N(H));
  }
  function k(A) {
    if (v) {
      const I = oa(A), H = v.property("__zoom");
      (H.k !== A.zoom || H.x !== A.x || H.y !== A.y) && (f == null || f.transform(v, I, null, { sync: !0 }));
    }
  }
  function S() {
    const A = v ? ju(v.node()) : { x: 0, y: 0, k: 1 };
    return { x: A.x, y: A.y, zoom: A.k };
  }
  function M(A, I) {
    return v ? new Promise((H) => {
      f == null || f.scaleTo(ia(v, I == null ? void 0 : I.duration, () => H(!0)), A);
    }) : Promise.resolve(!1);
  }
  function V(A, I) {
    return v ? new Promise((H) => {
      f == null || f.scaleBy(ia(v, I == null ? void 0 : I.duration, () => H(!0)), A);
    }) : Promise.resolve(!1);
  }
  function z(A) {
    f == null || f.scaleExtent(A);
  }
  function P(A) {
    f == null || f.translateExtent(A);
  }
  function T(A) {
    const I = !En(A) || A < 0 ? 0 : A;
    f == null || f.clickDistance(I);
  }
  return {
    update: C,
    destroy: h,
    setViewport: w,
    setViewportConstrained: $,
    getViewport: S,
    scaleTo: M,
    scaleBy: V,
    setScaleExtent: z,
    setTranslateExtent: P,
    syncViewport: k,
    setClickDistance: T
  };
}
var yl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(yl || (yl = {}));
var d0 = /* @__PURE__ */ re('<div role="button" tabindex="-1"><!></div>');
function Jn(e, t) {
  le(t, !1);
  const [n, r] = et(), o = () => J(te, "$connectable", n), a = () => J(ke, "$connectionRadius", n), i = () => J(ae, "$domNode", n), s = () => J($e, "$nodeLookup", n), l = () => J(X, "$connectionMode", n), u = () => J(ne, "$lib", n), c = () => J(Ye, "$autoPanOnConnect", n), d = () => J(Ke, "$flowId", n), f = () => J(ve, "$isValidConnectionStore", n), v = () => J(Xe, "$onedgecreate", n), y = () => J(se, "$onConnectAction", n), x = () => J(_e, "$onConnectStartAction", n), b = () => J(Pe, "$onConnectEndAction", n), C = () => J(he, "$viewport", n), h = () => J(ct, "$connection", n), $ = () => J(Le, "$edges", n), w = () => J(fe, "$connectionLookup", n), k = oe(), S = oe(), M = oe(), V = oe(), z = oe(), P = oe(), T = oe(), A = oe();
  let I = m(t, "id", 12, void 0), H = m(t, "type", 12, "source"), N = m(t, "position", 28, () => Se.Top), _ = m(t, "style", 12, void 0), E = m(t, "isValidConnection", 12, void 0), O = m(t, "onconnect", 12, void 0), L = m(t, "ondisconnect", 12, void 0), B = m(t, "isConnectable", 12, void 0), K = m(t, "class", 12, void 0);
  const j = sr("svelteflow__node_id"), te = sr("svelteflow__node_connectable"), U = Fe(), {
    connectionMode: X,
    domNode: ae,
    nodeLookup: $e,
    connectionRadius: ke,
    viewport: he,
    isValidConnection: ve,
    lib: ne,
    addEdge: pe,
    onedgecreate: Xe,
    panBy: Ze,
    cancelConnection: Be,
    updateConnection: ee,
    autoPanOnConnect: Ye,
    edges: Le,
    connectionLookup: fe,
    onconnect: se,
    onconnectstart: _e,
    onconnectend: Pe,
    flowId: Ke,
    connection: ct
  } = U;
  function tt(Ve) {
    const rt = rc(Ve);
    (rt && Ve.button === 0 || !rt) && t0.onPointerDown(Ve, {
      handleId: g(M),
      nodeId: j,
      isTarget: g(k),
      connectionRadius: a(),
      domNode: i(),
      nodeLookup: s(),
      connectionMode: l(),
      lib: u(),
      autoPanOnConnect: c(),
      flowId: d(),
      isValidConnection: E() ?? f(),
      updateConnection: ee,
      cancelConnection: Be,
      panBy: Ze,
      onConnect: (ye) => {
        var ot;
        const at = v() ? v()(ye) : ye;
        at && (pe(at), (ot = y()) == null || ot(ye));
      },
      onConnectStart: (ye, ot) => {
        var at;
        (at = x()) == null || at(ye, {
          nodeId: ot.nodeId,
          handleId: ot.handleId,
          handleType: ot.handleType
        });
      },
      onConnectEnd: (ye, ot) => {
        var at;
        (at = b()) == null || at(ye, ot);
      },
      getTransform: () => [
        C().x,
        C().y,
        C().zoom
      ],
      getFromHandle: () => h().fromHandle
    });
  }
  let Q = oe(null), Ne = oe();
  de(() => G(H()), () => {
    F(k, H() === "target");
  }), de(
    () => (G(B()), o()),
    () => {
      F(S, B() !== void 0 ? B() : o());
    }
  ), de(() => G(I()), () => {
    F(M, I() || null);
  }), de(
    () => (G(O()), G(L()), $(), w(), G(H()), G(I())),
    () => {
      (O() || L()) && ($(), F(Ne, w().get(`${j}-${H()}${I() ? `-${I()}` : ""}`)));
    }
  ), de(
    () => (g(Q), g(Ne), G(L()), G(O())),
    () => {
      if (g(Q) && !mp(g(Ne), g(Q))) {
        const Ve = g(Ne) ?? /* @__PURE__ */ new Map();
        ol(g(Q), Ve, L()), ol(Ve, g(Q), O());
      }
      F(Q, g(Ne) ?? /* @__PURE__ */ new Map());
    }
  ), de(() => h(), () => {
    F(V, !!h().fromHandle);
  }), de(
    () => (h(), G(H()), g(M)),
    () => {
      var Ve, rt, ye;
      F(z, ((Ve = h().fromHandle) == null ? void 0 : Ve.nodeId) === j && ((rt = h().fromHandle) == null ? void 0 : rt.type) === H() && ((ye = h().fromHandle) == null ? void 0 : ye.id) === g(M));
    }
  ), de(
    () => (h(), G(H()), g(M)),
    () => {
      var Ve, rt, ye;
      F(P, ((Ve = h().toHandle) == null ? void 0 : Ve.nodeId) === j && ((rt = h().toHandle) == null ? void 0 : rt.type) === H() && ((ye = h().toHandle) == null ? void 0 : ye.id) === g(M));
    }
  ), de(
    () => (l(), h(), G(H()), g(M)),
    () => {
      var Ve, rt, ye;
      F(T, l() === cr.Strict ? ((Ve = h().fromHandle) == null ? void 0 : Ve.type) !== H() : j !== ((rt = h().fromHandle) == null ? void 0 : rt.nodeId) || g(M) !== ((ye = h().fromHandle) == null ? void 0 : ye.id));
    }
  ), de(() => (g(P), h()), () => {
    F(A, g(P) && h().isValid);
  }), vt(), Oe();
  var ge = d0();
  ce(ge, "data-nodeid", j);
  let dn;
  var Gt = Y(ge);
  pt(Gt, t, "default", {}), W(ge), Me(
    (Ve) => {
      ce(ge, "data-handleid", g(M)), ce(ge, "data-handlepos", N()), ce(ge, "data-id", `${d() ?? ""}-${j ?? ""}-${I() || ""}-${H() ?? ""}`), dn = Ct(ge, 1, Cn(Ve), null, dn, {
        valid: g(A),
        connectingto: g(P),
        connectingfrom: g(z),
        source: !g(k),
        target: g(k),
        connectablestart: g(S),
        connectableend: g(S),
        connectable: g(S),
        connectionindicator: g(S) && (!g(V) || g(T))
      }), ce(ge, "style", _());
    },
    [
      () => _t([
        "svelte-flow__handle",
        `svelte-flow__handle-${N()}`,
        "nodrag",
        "nopan",
        N(),
        K()
      ])
    ],
    me
  ), Re("mousedown", ge, tt), Re("touchstart", ge, tt), D(e, ge);
  var fn = ue({
    get id() {
      return I();
    },
    set id(Ve) {
      I(Ve), p();
    },
    get type() {
      return H();
    },
    set type(Ve) {
      H(Ve), p();
    },
    get position() {
      return N();
    },
    set position(Ve) {
      N(Ve), p();
    },
    get style() {
      return _();
    },
    set style(Ve) {
      _(Ve), p();
    },
    get isValidConnection() {
      return E();
    },
    set isValidConnection(Ve) {
      E(Ve), p();
    },
    get onconnect() {
      return O();
    },
    set onconnect(Ve) {
      O(Ve), p();
    },
    get ondisconnect() {
      return L();
    },
    set ondisconnect(Ve) {
      L(Ve), p();
    },
    get isConnectable() {
      return B();
    },
    set isConnectable(Ve) {
      B(Ve), p();
    },
    get class() {
      return K();
    },
    set class(Ve) {
      K(Ve), p();
    }
  });
  return r(), fn;
}
ie(
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
var f0 = /* @__PURE__ */ re("<!> <!>", 1);
function wi(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  nt(n, ["data", "targetPosition", "sourcePosition"]), le(t, !1);
  let r = m(t, "data", 28, () => ({ label: "Node" })), o = m(t, "targetPosition", 12, void 0), a = m(t, "sourcePosition", 12, void 0);
  Oe();
  var i = f0(), s = xe(i);
  const l = /* @__PURE__ */ me(() => o() ?? Se.Top);
  Jn(s, {
    type: "target",
    get position() {
      return g(l);
    }
  });
  var u = Z(s), c = Z(u);
  const d = /* @__PURE__ */ me(() => a() ?? Se.Bottom);
  return Jn(c, {
    type: "source",
    get position() {
      return g(d);
    }
  }), Me(() => {
    var f;
    return Bt(u, ` ${((f = r()) == null ? void 0 : f.label) ?? ""} `);
  }), D(e, i), ue({
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
ie(
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
var v0 = /* @__PURE__ */ re(" <!>", 1);
function pc(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  nt(n, ["data", "sourcePosition"]), le(t, !1);
  let r = m(t, "data", 28, () => ({ label: "Node" })), o = m(t, "sourcePosition", 12, void 0);
  Oe(), ze();
  var a = v0(), i = xe(a), s = Z(i);
  const l = /* @__PURE__ */ me(() => o() ?? Se.Bottom);
  return Jn(s, {
    type: "source",
    get position() {
      return g(l);
    }
  }), Me(() => {
    var u;
    return Bt(i, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), D(e, a), ue({
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
ie(pc, { data: {}, sourcePosition: {} }, [], [], !0);
var g0 = /* @__PURE__ */ re(" <!>", 1);
function mc(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  nt(n, ["data", "targetPosition"]), le(t, !1);
  let r = m(t, "data", 28, () => ({ label: "Node" })), o = m(t, "targetPosition", 12, void 0);
  Oe(), ze();
  var a = g0(), i = xe(a), s = Z(i);
  const l = /* @__PURE__ */ me(() => o() ?? Se.Top);
  return Jn(s, {
    type: "target",
    get position() {
      return g(l);
    }
  }), Me(() => {
    var u;
    return Bt(i, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), D(e, a), ue({
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
ie(mc, { data: {}, targetPosition: {} }, [], [], !0);
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
ie(yc, {}, [], [], !0);
function wl(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function xi(e, { target: t, domNode: n }) {
  return wl(e, n, t), {
    async update({ target: r, domNode: o }) {
      wl(e, o, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var h0 = /* @__PURE__ */ re("<div><!></div>");
function wc(e, t) {
  le(t, !1);
  const [n, r] = et(), o = () => J(a, "$domNode", n), { domNode: a } = Fe();
  Oe();
  var i = h0(), s = Y(i);
  pt(s, t, "default", {}), W(i), ht(i, (l, u) => xi == null ? void 0 : xi(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), D(e, i), ue(), r();
}
ie(wc, {}, ["default"], [], !0);
function xc() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: a, elementsSelectable: i } = Fe();
  return (s) => {
    const l = q(e).get(s);
    if (!l) {
      console.warn("012", Nr.error012(s));
      return;
    }
    (l.selectable || q(i) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && q(r) && a({ nodes: [], edges: [l] }) : o([s]));
  };
}
var p0 = /* @__PURE__ */ re('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function bc(e, t) {
  le(t, !1);
  let n = m(t, "style", 12, void 0), r = m(t, "x", 12, void 0), o = m(t, "y", 12, void 0);
  const a = xc(), i = sr("svelteflow__edge_id");
  return Oe(), wc(e, {
    children: (s, l) => {
      var u = p0(), c = Y(u);
      pt(c, t, "default", {}), W(u), Me(() => {
        ce(u, "style", "pointer-events: all;" + n()), it(u, "transform", `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`);
      }), Re("keyup", u, () => {
      }), Re("click", u, () => {
        i && a(i);
      }), D(s, u);
    },
    $$slots: { default: !0 }
  }), ue({
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
ie(bc, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var m0 = /* @__PURE__ */ be('<path fill="none" class="svelte-flow__edge-interaction"></path>'), y0 = /* @__PURE__ */ be('<path fill="none"></path><!><!>', 1);
function Eo(e, t) {
  le(t, !1);
  let n = m(t, "id", 12, void 0), r = m(t, "path", 12), o = m(t, "label", 12, void 0), a = m(t, "labelX", 12, void 0), i = m(t, "labelY", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "markerStart", 12, void 0), u = m(t, "markerEnd", 12, void 0), c = m(t, "style", 12, void 0), d = m(t, "interactionWidth", 12, 20), f = m(t, "class", 12, void 0), v = d() === void 0 ? 20 : d();
  Oe();
  var y = y0(), x = xe(y), b = Z(x);
  {
    var C = (w) => {
      var k = m0();
      ce(k, "stroke-opacity", 0), ce(k, "stroke-width", v), Me(() => ce(k, "d", r())), D(w, k);
    };
    Ce(b, (w) => {
      v && w(C);
    });
  }
  var h = Z(b);
  {
    var $ = (w) => {
      bc(w, {
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
          ze();
          var M = Ie();
          Me(() => Bt(M, o())), D(k, M);
        },
        $$slots: { default: !0 }
      });
    };
    Ce(h, (w) => {
      o() && w($);
    });
  }
  return Me(
    (w) => {
      ce(x, "id", n()), ce(x, "d", r()), Ct(x, 0, Cn(w)), ce(x, "marker-start", l()), ce(x, "marker-end", u()), ce(x, "style", c());
    },
    [
      () => _t(["svelte-flow__edge-path", f()])
    ],
    me
  ), D(e, y), ue({
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
      return a();
    },
    set labelX(w) {
      a(w), p();
    },
    get labelY() {
      return i();
    },
    set labelY(w) {
      i(w), p();
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
ie(
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
function bi(e, t) {
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
  ]), le(t, !1);
  const r = oe(), o = oe(), a = oe();
  let i = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), y = m(t, "sourcePosition", 12), x = m(t, "targetX", 12), b = m(t, "targetY", 12), C = m(t, "targetPosition", 12);
  return de(
    () => (g(r), g(o), g(a), G(f()), G(v()), G(x()), G(b()), G(y()), G(C())),
    () => {
      ((h) => (F(r, h[0]), F(o, h[1]), F(a, h[2])))(oc({
        sourceX: f(),
        sourceY: v(),
        targetX: x(),
        targetY: b(),
        sourcePosition: y(),
        targetPosition: C()
      }));
    }
  ), vt(), Oe(), Eo(e, {
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
  }), ue({
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
      return y();
    },
    set sourcePosition(h) {
      y(h), p();
    },
    get targetX() {
      return x();
    },
    set targetX(h) {
      x(h), p();
    },
    get targetY() {
      return b();
    },
    set targetY(h) {
      b(h), p();
    },
    get targetPosition() {
      return C();
    },
    set targetPosition(h) {
      C(h), p();
    }
  });
}
ie(
  bi,
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
  ]), le(t, !1);
  const r = oe(), o = oe(), a = oe();
  let i = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), y = m(t, "sourcePosition", 12), x = m(t, "targetX", 12), b = m(t, "targetY", 12), C = m(t, "targetPosition", 12);
  return de(
    () => (g(r), g(o), g(a), G(f()), G(v()), G(x()), G(b()), G(y()), G(C())),
    () => {
      ((h) => (F(r, h[0]), F(o, h[1]), F(a, h[2])))(yi({
        sourceX: f(),
        sourceY: v(),
        targetX: x(),
        targetY: b(),
        sourcePosition: y(),
        targetPosition: C()
      }));
    }
  ), vt(), Oe(), Eo(e, {
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
  }), ue({
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
      return y();
    },
    set sourcePosition(h) {
      y(h), p();
    },
    get targetX() {
      return x();
    },
    set targetX(h) {
      x(h), p();
    },
    get targetY() {
      return b();
    },
    set targetY(h) {
      b(h), p();
    },
    get targetPosition() {
      return C();
    },
    set targetPosition(h) {
      C(h), p();
    }
  });
}
ie(
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
  ]), le(t, !1);
  const r = oe(), o = oe(), a = oe();
  let i = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), y = m(t, "targetX", 12), x = m(t, "targetY", 12);
  return de(
    () => (g(r), g(o), g(a), G(f()), G(v()), G(y()), G(x())),
    () => {
      ((b) => (F(r, b[0]), F(o, b[1]), F(a, b[2])))(Ma({
        sourceX: f(),
        sourceY: v(),
        targetX: y(),
        targetY: x()
      }));
    }
  ), vt(), Oe(), Eo(e, {
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
  }), ue({
    get label() {
      return i();
    },
    set label(b) {
      i(b), p();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(b) {
      s(b), p();
    },
    get style() {
      return l();
    },
    set style(b) {
      l(b), p();
    },
    get markerStart() {
      return u();
    },
    set markerStart(b) {
      u(b), p();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(b) {
      c(b), p();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(b) {
      d(b), p();
    },
    get sourceX() {
      return f();
    },
    set sourceX(b) {
      f(b), p();
    },
    get sourceY() {
      return v();
    },
    set sourceY(b) {
      v(b), p();
    },
    get targetX() {
      return y();
    },
    set targetX(b) {
      y(b), p();
    },
    get targetY() {
      return x();
    },
    set targetY(b) {
      x(b), p();
    }
  });
}
ie(
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
function kc(e, t) {
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
  ]), le(t, !1);
  const r = oe(), o = oe(), a = oe();
  let i = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), y = m(t, "sourcePosition", 12), x = m(t, "targetX", 12), b = m(t, "targetY", 12), C = m(t, "targetPosition", 12);
  return de(
    () => (g(r), g(o), g(a), G(f()), G(v()), G(x()), G(b()), G(y()), G(C())),
    () => {
      ((h) => (F(r, h[0]), F(o, h[1]), F(a, h[2])))(yi({
        sourceX: f(),
        sourceY: v(),
        targetX: x(),
        targetY: b(),
        sourcePosition: y(),
        targetPosition: C(),
        borderRadius: 0
      }));
    }
  ), vt(), Oe(), Eo(e, {
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
  }), ue({
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
      return y();
    },
    set sourcePosition(h) {
      y(h), p();
    },
    get targetX() {
      return x();
    },
    set targetX(h) {
      x(h), p();
    },
    get targetY() {
      return b();
    },
    set targetY(h) {
      b(h), p();
    },
    get targetPosition() {
      return C();
    },
    set targetPosition(h) {
      C(h), p();
    }
  });
}
ie(
  kc,
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
  const n = e.set, r = t.set, o = q(e), a = q(t);
  let i = o.length === 0 && a.length > 0 ? a : o;
  e.set(i);
  const s = (l) => {
    const u = n(l);
    return i = u, r(i), u;
  };
  e.set = t.set = s, e.update = t.update = (l) => s(l(i));
}
function x0(e, t) {
  const n = e.set, r = t.set;
  let o = q(t);
  e.set(o);
  const a = (i) => {
    n(i), r(i), o = i;
  };
  e.set = t.set = a, e.update = t.update = (i) => a(i(o));
}
const b0 = (e, t, n) => {
  if (!n)
    return;
  const r = q(e), o = t.set, a = n.set;
  let i = n ? q(n) : { x: 0, y: 0, zoom: 1 };
  t.set(i), t.set = (s) => (o(s), a(s), i = s, s), n.set = (s) => (r == null || r.syncViewport(s), o(s), a(s), i = s, s), t.update = (s) => {
    t.set(s(i));
  }, n.update = (s) => {
    n.set(s(i));
  };
}, $0 = (e, t, n, r = [0, 0], o = gi) => {
  const { subscribe: a, set: i, update: s } = we([]);
  let l = e, u = {}, c = !0;
  const d = (x) => (ac(x, t, n, {
    elevateNodesOnSelect: c,
    nodeOrigin: r,
    nodeExtent: o,
    defaults: u,
    checkEquality: !1
  }), l = x, i(l), l), f = (x) => d(x(l)), v = (x) => {
    u = x;
  }, y = (x) => {
    c = x.elevateNodesOnSelect ?? c;
  };
  return d(l), {
    subscribe: a,
    set: d,
    update: f,
    setDefaultOptions: v,
    setOptions: y
  };
}, C0 = (e, t, n, r) => {
  const { subscribe: o, set: a, update: i } = we([]);
  let s = e, l = {};
  const u = (f) => {
    const v = l ? f.map((y) => ({ ...l, ...y })) : f;
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
}, _c = {
  input: pc,
  output: mc,
  default: wi,
  group: yc
}, Sc = {
  straight: Cc,
  smoothstep: $c,
  default: bi,
  step: kc
}, k0 = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: a, nodeExtent: i }) => {
  const s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = a ?? [0, 0], f = i ?? gi;
  ac(e, s, l, {
    nodeExtent: f,
    nodeOrigin: d,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), lc(u, c, t);
  let v = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const y = Mo(s, {
      filter: (x) => !!((x.width || x.initialWidth) && (x.height || x.initialHeight))
    });
    v = ss(y, n, r, 0.5, 2, 0.1);
  }
  return {
    flowId: we(null),
    nodes: $0(e, s, l, d, f),
    nodeLookup: Kt(s),
    parentLookup: Kt(l),
    edgeLookup: Kt(c),
    visibleNodes: Kt([]),
    edges: C0(t, u, c),
    visibleEdges: Kt([]),
    connectionLookup: Kt(u),
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
    nodeTypes: we(_c),
    edgeTypes: we(Sc),
    viewport: we(v),
    connectionMode: we(cr.Strict),
    domNode: we(null),
    connection: Kt(ka),
    connectionLineType: we(_r.Bezier),
    connectionRadius: we(20),
    isValidConnection: we(() => !0),
    nodesDraggable: we(!0),
    nodesConnectable: we(!0),
    elementsSelectable: we(!0),
    selectNodesOnDrag: we(!0),
    markers: Kt([]),
    defaultMarkerColor: we("#b1b1b7"),
    lib: Kt("svelte"),
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
    initialized: Kt(!1)
  };
};
function _0(e) {
  const t = Kn([
    e.edges,
    e.nodes,
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.viewport,
    e.width,
    e.height
  ], ([n, , r, o, a, i, s]) => o && i && s ? n.filter((l) => {
    const u = r.get(l.source), c = r.get(l.target);
    return u && c && Vp({
      sourceNode: u,
      targetNode: c,
      width: i,
      height: s,
      transform: [a.x, a.y, a.zoom]
    });
  }) : n);
  return Kn([t, e.nodes, e.nodeLookup, e.connectionMode, e.onerror], ([n, , r, o, a]) => n.reduce((i, s) => {
    const l = r.get(s.source), u = r.get(s.target);
    if (!l || !u)
      return i;
    const c = Lp({
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
function S0(e) {
  return Kn([
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
function Mc({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: a, nodeExtent: i }) {
  const s = k0({
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
      ..._c,
      ..._
    });
  }
  function u(_) {
    s.edgeTypes.set({
      ...Sc,
      ..._
    });
  }
  function c(_) {
    const E = q(s.edges);
    s.edges.set(Pp(_, E));
  }
  const d = (_, E = !1) => {
    var O;
    const L = q(s.nodeLookup);
    for (const [B, K] of _) {
      const j = (O = L.get(B)) == null ? void 0 : O.internals.userNode;
      j && (j.position = K.position, j.dragging = E);
    }
    s.nodes.update((B) => B);
  };
  function f(_) {
    var E, O, L;
    const B = q(s.nodeLookup), K = q(s.parentLookup), { changes: j, updatedInternals: te } = Yp(_, B, q(s.parentLookup), q(s.domNode), q(s.nodeOrigin));
    if (te) {
      if (Bp(B, K, { nodeOrigin: a, nodeExtent: i }), !q(s.fitViewOnInitDone) && q(s.fitViewOnInit)) {
        const U = q(s.fitViewOptions), X = y({
          ...U,
          nodes: U == null ? void 0 : U.nodes
        });
        s.fitViewOnInitDone.set(X);
      }
      for (const U of j) {
        const X = (E = B.get(U.id)) == null ? void 0 : E.internals.userNode;
        if (X)
          switch (U.type) {
            case "dimensions": {
              const ae = { ...X.measured, ...U.dimensions };
              U.setAttributes && (X.width = ((O = U.dimensions) == null ? void 0 : O.width) ?? X.width, X.height = ((L = U.dimensions) == null ? void 0 : L.height) ?? X.height), X.measured = ae;
              break;
            }
            case "position":
              X.position = U.position ?? X.position;
              break;
          }
      }
      s.nodes.update((U) => U), q(s.nodesInitialized) || s.nodesInitialized.set(!0);
    }
  }
  function v(_) {
    const E = q(s.panZoom), O = q(s.domNode);
    if (!E || !O)
      return Promise.resolve(!1);
    const { width: L, height: B } = ls(O), K = il(q(s.nodeLookup), _);
    return al({
      nodes: K,
      width: L,
      height: B,
      minZoom: q(s.minZoom),
      maxZoom: q(s.maxZoom),
      panZoom: E
    }, _);
  }
  function y(_) {
    const E = q(s.panZoom);
    if (!E)
      return !1;
    const O = il(q(s.nodeLookup), _);
    return al({
      nodes: O,
      width: q(s.width),
      height: q(s.height),
      minZoom: q(s.minZoom),
      maxZoom: q(s.maxZoom),
      panZoom: E
    }, _), O.size > 0;
  }
  function x(_, E) {
    const O = q(s.panZoom);
    return O ? O.scaleBy(_, E) : Promise.resolve(!1);
  }
  function b(_) {
    return x(1.2, _);
  }
  function C(_) {
    return x(1 / 1.2, _);
  }
  function h(_) {
    const E = q(s.panZoom);
    E && (E.setScaleExtent([_, q(s.maxZoom)]), s.minZoom.set(_));
  }
  function $(_) {
    const E = q(s.panZoom);
    E && (E.setScaleExtent([q(s.minZoom), _]), s.maxZoom.set(_));
  }
  function w(_) {
    const E = q(s.panZoom);
    E && (E.setTranslateExtent(_), s.translateExtent.set(_));
  }
  function k(_) {
    let E = !1;
    return _.forEach((O) => {
      O.selected && (O.selected = !1, E = !0);
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
      const O = q(s.nodes), L = q(s.edges), B = O.filter((U) => U.selected), K = L.filter((U) => U.selected), { nodes: j, edges: te } = await Uu({
        nodesToRemove: B,
        edgesToRemove: K,
        nodes: O,
        edges: L,
        onBeforeDelete: q(s.onbeforedelete)
      });
      (j.length || te.length) && (s.nodes.update((U) => U.filter((X) => !j.some((ae) => ae.id === X.id))), s.edges.update((U) => U.filter((X) => !te.some((ae) => ae.id === X.id))), (E = q(s.ondelete)) == null || E({
        nodes: j,
        edges: te
      }));
    }
  });
  function V(_) {
    const E = q(s.multiselectionKeyPressed);
    s.nodes.update((O) => O.map((L) => {
      const B = _.includes(L.id), K = E && L.selected || B;
      return L.selected = K, L;
    })), E || s.edges.update((O) => O.map((L) => (L.selected = !1, L)));
  }
  function z(_) {
    const E = q(s.multiselectionKeyPressed);
    s.edges.update((O) => O.map((L) => {
      const B = _.includes(L.id), K = E && L.selected || B;
      return L.selected = K, L;
    })), E || s.nodes.update((O) => O.map((L) => (L.selected = !1, L)));
  }
  function P(_) {
    var E;
    const O = (E = q(s.nodes)) == null ? void 0 : E.find((L) => L.id === _);
    if (!O) {
      console.warn("012", Nr.error012(_));
      return;
    }
    s.selectionRect.set(null), s.selectionRectMode.set(null), O.selected ? O.selected && q(s.multiselectionKeyPressed) && M({ nodes: [O], edges: [] }) : V([_]);
  }
  function T(_) {
    const E = q(s.viewport);
    return Kp({
      delta: _,
      panZoom: q(s.panZoom),
      transform: [E.x, E.y, E.zoom],
      translateExtent: q(s.translateExtent),
      width: q(s.width),
      height: q(s.height)
    });
  }
  const A = we(ka), I = (_) => {
    A.set({ ..._ });
  };
  function H() {
    A.set(ka);
  }
  function N() {
    s.fitViewOnInitDone.set(!1), s.selectionRect.set(null), s.selectionRectMode.set(null), s.snapGrid.set(null), s.isValidConnection.set(() => !0), M(), H();
  }
  return {
    // state
    ...s,
    // derived state
    visibleEdges: _0(s),
    visibleNodes: S0(s),
    connection: Kn([A, s.viewport], ([_, E]) => _.inProgress ? {
      ..._,
      to: Ho(_.to, [E.x, E.y, E.zoom])
    } : { ..._ }),
    markers: Kn([s.edges, s.defaultMarkerColor, s.flowId], ([_, E, O]) => Ap(_, { defaultColor: E, id: O })),
    initialized: (() => {
      let _ = !1;
      const E = q(s.nodes).length, O = q(s.edges).length;
      return Kn([s.nodesInitialized, s.edgesInitialized, s.viewportInitialized], ([L, B, K]) => _ || (E === 0 ? _ = K : O === 0 ? _ = K && L : _ = K && L && B, _));
    })(),
    // actions
    syncNodeStores: (_) => w0(s.nodes, _),
    syncEdgeStores: (_) => x0(s.edges, _),
    syncViewport: (_) => b0(s.panZoom, s.viewport, _),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: d,
    updateNodeInternals: f,
    zoomIn: b,
    zoomOut: C,
    fitView: (_) => v(_),
    setMinZoom: h,
    setMaxZoom: $,
    setTranslateExtent: w,
    setPaneClickDistance: S,
    unselectNodesAndEdges: M,
    addSelectedNodes: V,
    addSelectedEdges: z,
    handleNodeSelection: P,
    panBy: T,
    updateConnection: I,
    cancelConnection: H,
    reset: N
  };
}
function Fe() {
  const e = sr(Xi);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function M0({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: a, nodeExtent: i }) {
  const s = Mc({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: a, nodeExtent: i });
  return Er(Xi, {
    getStore: () => s
  }), s;
}
function xl(e, t) {
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
var H0 = /* @__PURE__ */ re('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const E0 = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function Hc(e, t) {
  le(t, !1), Je(e, E0);
  const [n, r] = et(), o = () => J(O, "$panActivationKeyPressed", n), a = () => J(I, "$minZoom", n), i = () => J(H, "$maxZoom", n), s = () => J(L, "$zoomActivationKeyPressed", n), l = () => J(A, "$selectionRect", n), u = () => J(_, "$translateExtent", n), c = () => J(E, "$lib", n), d = oe(), f = oe(), v = oe();
  let y = m(t, "initialViewport", 12, void 0), x = m(t, "onMoveStart", 12, void 0), b = m(t, "onMove", 12, void 0), C = m(t, "onMoveEnd", 12, void 0), h = m(t, "panOnScrollMode", 12), $ = m(t, "preventScrolling", 12), w = m(t, "zoomOnScroll", 12), k = m(t, "zoomOnDoubleClick", 12), S = m(t, "zoomOnPinch", 12), M = m(t, "panOnDrag", 12), V = m(t, "panOnScroll", 12), z = m(t, "paneClickDistance", 12);
  const {
    viewport: P,
    panZoom: T,
    selectionRect: A,
    minZoom: I,
    maxZoom: H,
    dragging: N,
    translateExtent: _,
    lib: E,
    panActivationKeyPressed: O,
    zoomActivationKeyPressed: L,
    viewportInitialized: B
  } = Fe(), K = (X) => P.set({
    x: X[0],
    y: X[1],
    zoom: X[2]
  });
  Xt(() => {
    si(B, !0);
  }), de(() => G(y()), () => {
    F(d, y() || { x: 0, y: 0, zoom: 1 });
  }), de(
    () => (o(), G(M())),
    () => {
      F(f, o() || M());
    }
  ), de(
    () => (o(), G(V())),
    () => {
      F(v, o() || V());
    }
  ), vt(), Oe();
  var j = H0(), te = Y(j);
  pt(te, t, "default", {}), W(j), ht(j, (X, ae) => xl == null ? void 0 : xl(X, ae), () => ({
    viewport: P,
    minZoom: a(),
    maxZoom: i(),
    initialViewport: g(d),
    dragging: N,
    panZoom: T,
    onPanZoomStart: x(),
    onPanZoom: b(),
    onPanZoomEnd: C(),
    zoomOnScroll: w(),
    zoomOnDoubleClick: k(),
    zoomOnPinch: S(),
    panOnScroll: g(v),
    panOnDrag: g(f),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: h() || qn.Free,
    zoomActivationKeyPressed: s(),
    preventScrolling: typeof $() == "boolean" ? $() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: z(),
    onTransformChange: K
  })), D(e, j);
  var U = ue({
    get initialViewport() {
      return y();
    },
    set initialViewport(X) {
      y(X), p();
    },
    get onMoveStart() {
      return x();
    },
    set onMoveStart(X) {
      x(X), p();
    },
    get onMove() {
      return b();
    },
    set onMove(X) {
      b(X), p();
    },
    get onMoveEnd() {
      return C();
    },
    set onMoveEnd(X) {
      C(X), p();
    },
    get panOnScrollMode() {
      return h();
    },
    set panOnScrollMode(X) {
      h(X), p();
    },
    get preventScrolling() {
      return $();
    },
    set preventScrolling(X) {
      $(X), p();
    },
    get zoomOnScroll() {
      return w();
    },
    set zoomOnScroll(X) {
      w(X), p();
    },
    get zoomOnDoubleClick() {
      return k();
    },
    set zoomOnDoubleClick(X) {
      k(X), p();
    },
    get zoomOnPinch() {
      return S();
    },
    set zoomOnPinch(X) {
      S(X), p();
    },
    get panOnDrag() {
      return M();
    },
    set panOnDrag(X) {
      M(X), p();
    },
    get panOnScroll() {
      return V();
    },
    set panOnScroll(X) {
      V(X), p();
    },
    get paneClickDistance() {
      return z();
    },
    set paneClickDistance(X) {
      z(X), p();
    }
  });
  return r(), U;
}
ie(
  Hc,
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
function $l(e) {
  return (t) => {
    const n = e.includes(t.id);
    return t.selected !== n && (t.selected = n), t;
  };
}
var V0 = /* @__PURE__ */ re("<div><!></div>");
const z0 = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function Ec(e, t) {
  le(t, !1), Je(e, z0);
  const [n, r] = et(), o = () => J(H, "$panActivationKeyPressed", n), a = () => J(A, "$selectionKeyPressed", n), i = () => J(P, "$selectionRect", n), s = () => J(z, "$elementsSelectable", n), l = () => J(T, "$selectionRectMode", n), u = () => J(S, "$edges", n), c = () => J(k, "$nodeLookup", n), d = () => J(M, "$viewport", n), f = () => J(I, "$selectionMode", n), v = () => J(V, "$dragging", n), y = oe(), x = oe(), b = oe();
  let C = m(t, "panOnDrag", 12, void 0), h = m(t, "selectionOnDrag", 12, void 0);
  const $ = Ti(), {
    nodes: w,
    nodeLookup: k,
    edges: S,
    viewport: M,
    dragging: V,
    elementsSelectable: z,
    selectionRect: P,
    selectionRectMode: T,
    selectionKeyPressed: A,
    selectionMode: I,
    panActivationKeyPressed: H,
    unselectNodesAndEdges: N
  } = Fe();
  let _ = oe(), E = null, O = [], L = !1;
  function B(ne) {
    if (L) {
      L = !1;
      return;
    }
    $("paneclick", { event: ne }), N(), T.set(null);
  }
  function K(ne) {
    var pe, Xe;
    if (E = g(_).getBoundingClientRect(), !z || !g(x) || ne.button !== 0 || ne.target !== g(_) || !E)
      return;
    (Xe = (pe = ne.target) == null ? void 0 : pe.setPointerCapture) == null || Xe.call(pe, ne.pointerId);
    const { x: Ze, y: Be } = Nn(ne, E);
    N(), P.set({
      width: 0,
      height: 0,
      startX: Ze,
      startY: Be,
      x: Ze,
      y: Be
    });
  }
  function j(ne) {
    if (!g(x) || !E || !i())
      return;
    L = !0;
    const pe = Nn(ne, E), Xe = i().startX ?? 0, Ze = i().startY ?? 0, Be = {
      ...i(),
      x: pe.x < Xe ? pe.x : Xe,
      y: pe.y < Ze ? pe.y : Ze,
      width: Math.abs(pe.x - Xe),
      height: Math.abs(pe.y - Ze)
    }, ee = O.map((se) => se.id), Ye = _a(O, u()).map((se) => se.id);
    O = Gu(
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
    const Le = _a(O, u()).map((se) => se.id), fe = O.map((se) => se.id);
    (ee.length !== fe.length || fe.some((se) => !ee.includes(se))) && w.update((se) => se.map($l(fe))), (Ye.length !== Le.length || Le.some((se) => !Ye.includes(se))) && S.update((se) => se.map($l(Le))), T.set("user"), P.set(Be);
  }
  function te(ne) {
    var pe, Xe;
    ne.button === 0 && ((Xe = (pe = ne.target) == null ? void 0 : pe.releasePointerCapture) == null || Xe.call(pe, ne.pointerId), !g(x) && l() === "user" && ne.target === g(_) && (B == null || B(ne)), P.set(null), O.length > 0 && si(T, "nodes"), a() && (L = !1));
  }
  const U = (ne) => {
    var pe;
    if (Array.isArray(g(y)) && (pe = g(y)) != null && pe.includes(2)) {
      ne.preventDefault();
      return;
    }
    $("panecontextmenu", { event: ne });
  };
  de(
    () => (o(), G(C())),
    () => {
      F(y, o() || C());
    }
  ), de(
    () => (a(), i(), G(h()), g(y)),
    () => {
      F(x, a() || i() || h() && g(y) !== !0);
    }
  ), de(
    () => (s(), g(x), l()),
    () => {
      F(b, s() && (g(x) || l() === "user"));
    }
  ), vt(), Oe();
  var X = V0(), ae = /* @__PURE__ */ Ee(() => g(b) ? void 0 : bl(B, g(_))), $e = /* @__PURE__ */ Ee(() => bl(U, g(_)));
  let ke;
  var he = Y(X);
  pt(he, t, "default", {}), W(X), wn(X, (ne) => F(_, ne), () => g(_)), Me(
    (ne) => ke = Ct(X, 1, "svelte-flow__pane svelte-1esy7hx", null, ke, {
      draggable: ne,
      dragging: v(),
      selection: g(x)
    }),
    [
      () => C() === !0 || Array.isArray(C()) && C().includes(0)
    ],
    me
  ), Re("click", X, function(...ne) {
    var pe;
    (pe = g(ae)) == null || pe.apply(this, ne);
  }), Re("pointerdown", X, function(...ne) {
    var pe;
    (pe = g(b) ? K : void 0) == null || pe.apply(this, ne);
  }), Re("pointermove", X, function(...ne) {
    var pe;
    (pe = g(b) ? j : void 0) == null || pe.apply(this, ne);
  }), Re("pointerup", X, function(...ne) {
    var pe;
    (pe = g(b) ? te : void 0) == null || pe.apply(this, ne);
  }), Re("contextmenu", X, function(...ne) {
    var pe;
    (pe = g($e)) == null || pe.apply(this, ne);
  }), D(e, X);
  var ve = ue({
    get panOnDrag() {
      return C();
    },
    set panOnDrag(ne) {
      C(ne), p();
    },
    get selectionOnDrag() {
      return h();
    },
    set selectionOnDrag(ne) {
      h(ne), p();
    }
  });
  return r(), ve;
}
ie(Ec, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var N0 = /* @__PURE__ */ re('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const P0 = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function Vc(e, t) {
  le(t, !1), Je(e, P0);
  const [n, r] = et(), o = () => J(a, "$viewport", n), { viewport: a } = Fe();
  Oe();
  var i = N0(), s = Y(i);
  pt(s, t, "default", {}), W(i), Me(() => ce(i, "style", `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), D(e, i), ue(), r();
}
ie(Vc, {}, ["default"], [], !0);
function $i(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: a, onNodeMouseDown: i } = t, s = Fp({
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
function O0({ width: e, height: t, initialWidth: n, initialHeight: r, measuredWidth: o, measuredHeight: a }) {
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
var T0 = /* @__PURE__ */ re("<div><!></div>");
function zc(e, t) {
  le(t, !1);
  const [n, r] = et(), o = () => J($e, "$nodeTypes", n), a = () => J(pe, "$elementsSelectable", n), i = () => J(Xe, "$nodesDraggable", n), s = () => J(Ye, "$connectableStore", n), l = oe(void 0, !0), u = oe(void 0, !0), c = oe(void 0, !0), d = oe(void 0, !0);
  let f = m(t, "node", 13), v = m(t, "id", 13), y = m(t, "data", 29, () => ({})), x = m(t, "selected", 13, !1), b = m(t, "draggable", 13, void 0), C = m(t, "selectable", 13, void 0), h = m(t, "connectable", 13, !0), $ = m(t, "deletable", 13, !0), w = m(t, "hidden", 13, !1), k = m(t, "dragging", 13, !1), S = m(t, "resizeObserver", 13, null), M = m(t, "style", 13, void 0), V = m(t, "type", 13, "default"), z = m(t, "isParent", 13, !1), P = m(t, "positionX", 13), T = m(t, "positionY", 13), A = m(t, "sourcePosition", 13, void 0), I = m(t, "targetPosition", 13, void 0), H = m(t, "zIndex", 13), N = m(t, "measuredWidth", 13, void 0), _ = m(t, "measuredHeight", 13, void 0), E = m(t, "initialWidth", 13, void 0), O = m(t, "initialHeight", 13, void 0), L = m(t, "width", 13, void 0), B = m(t, "height", 13, void 0), K = m(t, "dragHandle", 13, void 0), j = m(t, "initialized", 13, !1), te = m(t, "parentId", 13, void 0), U = m(t, "nodeClickDistance", 13, void 0), X = m(t, "class", 13, "");
  const ae = Fe(), {
    nodeTypes: $e,
    nodeDragThreshold: ke,
    selectNodesOnDrag: he,
    handleNodeSelection: ve,
    updateNodeInternals: ne,
    elementsSelectable: pe,
    nodesDraggable: Xe
  } = ae;
  let Ze = oe(void 0, !0), Be = oe(null, !0);
  const ee = Ti(), Ye = we(h());
  let Le = oe(void 0, !0), fe = oe(void 0, !0), se = oe(void 0, !0);
  Er("svelteflow__node_id", v()), Er("svelteflow__node_connectable", Ye), Ua(() => {
    var Q;
    g(Be) && ((Q = S()) == null || Q.unobserve(g(Be)));
  });
  function _e(Q) {
    C() && (!q(he) || !b() || q(ke) > 0) && ve(v()), ee("nodeclick", { node: f().internals.userNode, event: Q });
  }
  de(() => G(V()), () => {
    F(l, V() || "default");
  }), de(() => (o(), g(l)), () => {
    F(u, !!o()[g(l)]);
  }), de(
    () => (o(), g(l), wi),
    () => {
      F(c, o()[g(l)] || wi);
    }
  ), de(
    () => (g(u), G(V())),
    () => {
      g(u) || console.warn("003", Nr.error003(V()));
    }
  ), de(
    () => (G(L()), G(B()), G(E()), G(O()), G(N()), G(_())),
    () => {
      F(d, O0({
        width: L(),
        height: B(),
        initialWidth: E(),
        initialHeight: O(),
        measuredWidth: N(),
        measuredHeight: _()
      }));
    }
  ), de(() => G(h()), () => {
    Ye.set(!!h());
  }), de(
    () => (g(Le), g(l), g(fe), G(A()), g(se), G(I()), G(v()), g(Ze)),
    () => {
      (g(Le) && g(l) !== g(Le) || g(fe) && A() !== g(fe) || g(se) && I() !== g(se)) && requestAnimationFrame(() => ne(/* @__PURE__ */ new Map([
        [
          v(),
          {
            id: v(),
            nodeElement: g(Ze),
            force: !0
          }
        ]
      ]))), F(Le, g(l)), F(fe, A()), F(se, I());
    }
  ), de(
    () => (G(S()), g(Ze), g(Be), G(j())),
    () => {
      S() && (g(Ze) !== g(Be) || !j()) && (g(Be) && S().unobserve(g(Be)), g(Ze) && S().observe(g(Ze)), F(Be, g(Ze)));
    }
  ), vt(), Oe(!0);
  var Pe = Qe(), Ke = xe(Pe);
  {
    var ct = (Q) => {
      var Ne = T0();
      let ge;
      var dn = Y(Ne);
      const Gt = /* @__PURE__ */ me(() => x() ?? !1), fn = /* @__PURE__ */ me(() => C() ?? a() ?? !0), Ve = /* @__PURE__ */ me(() => $() ?? !0), rt = /* @__PURE__ */ me(() => b() ?? i() ?? !0);
      hu(dn, () => g(c), (ye, ot) => {
        ot(ye, {
          get data() {
            return y();
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
            return g(Ve);
          },
          get sourcePosition() {
            return A();
          },
          get targetPosition() {
            return I();
          },
          get zIndex() {
            return H();
          },
          get dragging() {
            return k();
          },
          get draggable() {
            return g(rt);
          },
          get dragHandle() {
            return K();
          },
          get parentId() {
            return te();
          },
          get type() {
            return g(l);
          },
          get isConnectable() {
            return s();
          },
          get positionAbsoluteX() {
            return P();
          },
          get positionAbsoluteY() {
            return T();
          },
          get width() {
            return L();
          },
          get height() {
            return B();
          }
        });
      }), W(Ne), ht(Ne, (ye, ot) => $i == null ? void 0 : $i(ye, ot), () => ({
        nodeId: v(),
        isSelectable: C(),
        disabled: !1,
        handleSelector: K(),
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
        store: ae
      })), wn(Ne, (ye) => F(Ze, ye), () => g(Ze)), At(() => Re("click", Ne, _e)), At(() => Re("mouseenter", Ne, (ye) => ee("nodemouseenter", { node: f(), event: ye }))), At(() => Re("mouseleave", Ne, (ye) => ee("nodemouseleave", { node: f(), event: ye }))), At(() => Re("mousemove", Ne, (ye) => ee("nodemousemove", { node: f(), event: ye }))), At(() => Re("contextmenu", Ne, (ye) => ee("nodecontextmenu", { node: f(), event: ye }))), Me(
        (ye) => {
          ce(Ne, "data-id", v()), ge = Ct(Ne, 1, Cn(ye), null, ge, {
            dragging: k(),
            selected: x(),
            draggable: b(),
            connectable: h(),
            selectable: C(),
            nopan: b(),
            parent: z()
          }), ce(Ne, "style", `${M() ?? ""};${g(d).width ?? ""}${g(d).height ?? ""}`), it(Ne, "z-index", H()), it(Ne, "transform", `translate(${P() ?? ""}px, ${T() ?? ""}px)`), it(Ne, "visibility", j() ? "visible" : "hidden");
        },
        [
          () => _t([
            "svelte-flow__node",
            `svelte-flow__node-${g(l)}`,
            X()
          ])
        ],
        me
      ), D(Q, Ne);
    };
    Ce(Ke, (Q) => {
      w() || Q(ct);
    });
  }
  D(e, Pe);
  var tt = ue({
    get node() {
      return f();
    },
    set node(Q) {
      f(Q), p();
    },
    get id() {
      return v();
    },
    set id(Q) {
      v(Q), p();
    },
    get data() {
      return y();
    },
    set data(Q) {
      y(Q), p();
    },
    get selected() {
      return x();
    },
    set selected(Q) {
      x(Q), p();
    },
    get draggable() {
      return b();
    },
    set draggable(Q) {
      b(Q), p();
    },
    get selectable() {
      return C();
    },
    set selectable(Q) {
      C(Q), p();
    },
    get connectable() {
      return h();
    },
    set connectable(Q) {
      h(Q), p();
    },
    get deletable() {
      return $();
    },
    set deletable(Q) {
      $(Q), p();
    },
    get hidden() {
      return w();
    },
    set hidden(Q) {
      w(Q), p();
    },
    get dragging() {
      return k();
    },
    set dragging(Q) {
      k(Q), p();
    },
    get resizeObserver() {
      return S();
    },
    set resizeObserver(Q) {
      S(Q), p();
    },
    get style() {
      return M();
    },
    set style(Q) {
      M(Q), p();
    },
    get type() {
      return V();
    },
    set type(Q) {
      V(Q), p();
    },
    get isParent() {
      return z();
    },
    set isParent(Q) {
      z(Q), p();
    },
    get positionX() {
      return P();
    },
    set positionX(Q) {
      P(Q), p();
    },
    get positionY() {
      return T();
    },
    set positionY(Q) {
      T(Q), p();
    },
    get sourcePosition() {
      return A();
    },
    set sourcePosition(Q) {
      A(Q), p();
    },
    get targetPosition() {
      return I();
    },
    set targetPosition(Q) {
      I(Q), p();
    },
    get zIndex() {
      return H();
    },
    set zIndex(Q) {
      H(Q), p();
    },
    get measuredWidth() {
      return N();
    },
    set measuredWidth(Q) {
      N(Q), p();
    },
    get measuredHeight() {
      return _();
    },
    set measuredHeight(Q) {
      _(Q), p();
    },
    get initialWidth() {
      return E();
    },
    set initialWidth(Q) {
      E(Q), p();
    },
    get initialHeight() {
      return O();
    },
    set initialHeight(Q) {
      O(Q), p();
    },
    get width() {
      return L();
    },
    set width(Q) {
      L(Q), p();
    },
    get height() {
      return B();
    },
    set height(Q) {
      B(Q), p();
    },
    get dragHandle() {
      return K();
    },
    set dragHandle(Q) {
      K(Q), p();
    },
    get initialized() {
      return j();
    },
    set initialized(Q) {
      j(Q), p();
    },
    get parentId() {
      return te();
    },
    set parentId(Q) {
      te(Q), p();
    },
    get nodeClickDistance() {
      return U();
    },
    set nodeClickDistance(Q) {
      U(Q), p();
    },
    get class() {
      return X();
    },
    set class(Q) {
      X(Q), p();
    }
  });
  return r(), tt;
}
ie(
  zc,
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
var D0 = /* @__PURE__ */ re('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const L0 = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function Nc(e, t) {
  le(t, !1), Je(e, L0);
  const [n, r] = et(), o = () => J(c, "$visibleNodes", n), a = () => J(d, "$nodesDraggable", n), i = () => J(v, "$elementsSelectable", n), s = () => J(f, "$nodesConnectable", n), l = () => J(x, "$parentLookup", n);
  let u = m(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: d,
    nodesConnectable: f,
    elementsSelectable: v,
    updateNodeInternals: y,
    parentLookup: x
  } = Fe(), b = typeof ResizeObserver > "u" ? null : new ResizeObserver(($) => {
    const w = /* @__PURE__ */ new Map();
    $.forEach((k) => {
      const S = k.target.getAttribute("data-id");
      w.set(S, { id: S, nodeElement: k.target, force: !0 });
    }), y(w);
  });
  Ua(() => {
    b == null || b.disconnect();
  }), Oe();
  var C = D0();
  Pt(C, 5, o, ($) => $.id, ($, w) => {
    const k = /* @__PURE__ */ me(() => !!g(w).selected), S = /* @__PURE__ */ me(() => !!g(w).hidden), M = /* @__PURE__ */ me(() => !!(g(w).draggable || a() && typeof g(w).draggable > "u")), V = /* @__PURE__ */ me(() => !!(g(w).selectable || i() && typeof g(w).selectable > "u")), z = /* @__PURE__ */ me(() => !!(g(w).connectable || s() && typeof g(w).connectable > "u")), P = /* @__PURE__ */ me(() => g(w).deletable ?? !0), T = /* @__PURE__ */ me(() => l().has(g(w).id)), A = /* @__PURE__ */ me(() => g(w).type ?? "default"), I = /* @__PURE__ */ me(() => g(w).internals.z ?? 0), H = /* @__PURE__ */ me(() => nc(g(w)));
    zc($, {
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
        return g(S);
      },
      get draggable() {
        return g(M);
      },
      get selectable() {
        return g(V);
      },
      get connectable() {
        return g(z);
      },
      get deletable() {
        return g(P);
      },
      get positionX() {
        return g(w).internals.positionAbsolute.x;
      },
      get positionY() {
        return g(w).internals.positionAbsolute.y;
      },
      get isParent() {
        return g(T);
      },
      get style() {
        return g(w).style;
      },
      get class() {
        return g(w).class;
      },
      get type() {
        return g(A);
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
        return g(I);
      },
      get dragHandle() {
        return g(w).dragHandle;
      },
      get initialized() {
        return g(H);
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
      resizeObserver: b,
      get nodeClickDistance() {
        return u();
      },
      $$events: {
        nodeclick(N) {
          Te.call(this, t, N);
        },
        nodemouseenter(N) {
          Te.call(this, t, N);
        },
        nodemousemove(N) {
          Te.call(this, t, N);
        },
        nodemouseleave(N) {
          Te.call(this, t, N);
        },
        nodedrag(N) {
          Te.call(this, t, N);
        },
        nodedragstart(N) {
          Te.call(this, t, N);
        },
        nodedragstop(N) {
          Te.call(this, t, N);
        },
        nodecontextmenu(N) {
          Te.call(this, t, N);
        }
      }
    });
  }), W(C), D(e, C);
  var h = ue({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance($) {
      u($), p();
    }
  });
  return r(), h;
}
ie(Nc, { nodeClickDistance: {} }, [], [], !0);
var A0 = /* @__PURE__ */ be('<svg><g role="img"><!></g></svg>');
function Pc(e, t) {
  le(t, !1);
  const [n, r] = et(), o = () => J(X, "$edgeTypes", n), a = () => J(ae, "$flowId", n), i = () => J($e, "$elementsSelectable", n), s = () => J(U, "$edgeLookup", n), l = oe(void 0, !0), u = oe(void 0, !0), c = oe(void 0, !0), d = oe(void 0, !0), f = oe(void 0, !0);
  let v = m(t, "id", 13), y = m(t, "type", 13, "default"), x = m(t, "source", 13, ""), b = m(t, "target", 13, ""), C = m(t, "data", 29, () => ({})), h = m(t, "style", 13, void 0), $ = m(t, "zIndex", 13, void 0), w = m(t, "animated", 13, !1), k = m(t, "selected", 13, !1), S = m(t, "selectable", 13, void 0), M = m(t, "deletable", 13, void 0), V = m(t, "hidden", 13, !1), z = m(t, "label", 13, void 0), P = m(t, "labelStyle", 13, void 0), T = m(t, "markerStart", 13, void 0), A = m(t, "markerEnd", 13, void 0), I = m(t, "sourceHandle", 13, void 0), H = m(t, "targetHandle", 13, void 0), N = m(t, "sourceX", 13), _ = m(t, "sourceY", 13), E = m(t, "targetX", 13), O = m(t, "targetY", 13), L = m(t, "sourcePosition", 13), B = m(t, "targetPosition", 13), K = m(t, "ariaLabel", 13, void 0), j = m(t, "interactionWidth", 13, void 0), te = m(t, "class", 13, "");
  Er("svelteflow__edge_id", v());
  const {
    edgeLookup: U,
    edgeTypes: X,
    flowId: ae,
    elementsSelectable: $e
  } = Fe(), ke = Ti(), he = xc();
  function ve(ee) {
    const Ye = s().get(v());
    Ye && (he(v()), ke("edgeclick", { event: ee, edge: Ye }));
  }
  function ne(ee, Ye) {
    const Le = s().get(v());
    Le && ke(Ye, { event: ee, edge: Le });
  }
  de(() => G(y()), () => {
    F(l, y() || "default");
  }), de(
    () => (o(), g(l), bi),
    () => {
      F(u, o()[g(l)] || bi);
    }
  ), de(
    () => (G(T()), a()),
    () => {
      F(c, T() ? `url('#${Ha(T(), a())}')` : void 0);
    }
  ), de(
    () => (G(A()), a()),
    () => {
      F(d, A() ? `url('#${Ha(A(), a())}')` : void 0);
    }
  ), de(
    () => (G(S()), i()),
    () => {
      F(f, S() ?? i());
    }
  ), vt(), Oe(!0);
  var pe = Qe(), Xe = xe(pe);
  {
    var Ze = (ee) => {
      var Ye = A0(), Le = Y(Ye);
      let fe;
      var se = Y(Le);
      const _e = /* @__PURE__ */ me(() => M() ?? !0);
      hu(se, () => g(u), (Pe, Ke) => {
        Ke(Pe, {
          get id() {
            return v();
          },
          get source() {
            return x();
          },
          get target() {
            return b();
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
            return O();
          },
          get sourcePosition() {
            return L();
          },
          get targetPosition() {
            return B();
          },
          get animated() {
            return w();
          },
          get selected() {
            return k();
          },
          get label() {
            return z();
          },
          get labelStyle() {
            return P();
          },
          get data() {
            return C();
          },
          get style() {
            return h();
          },
          get interactionWidth() {
            return j();
          },
          get selectable() {
            return g(f);
          },
          get deletable() {
            return g(_e);
          },
          get type() {
            return g(l);
          },
          get sourceHandleId() {
            return I();
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
      }), W(Le), W(Ye), Me(
        (Pe) => {
          it(Ye, "z-index", $()), fe = Ct(Le, 0, Cn(Pe), null, fe, {
            animated: w(),
            selected: k(),
            selectable: g(f)
          }), ce(Le, "data-id", v()), ce(Le, "aria-label", K() === null ? void 0 : K() ? K() : `Edge from ${x()} to ${b()}`);
        },
        [
          () => _t(["svelte-flow__edge", te()])
        ],
        me
      ), Re("click", Le, ve), Re("contextmenu", Le, (Pe) => {
        ne(Pe, "edgecontextmenu");
      }), Re("mouseenter", Le, (Pe) => {
        ne(Pe, "edgemouseenter");
      }), Re("mouseleave", Le, (Pe) => {
        ne(Pe, "edgemouseleave");
      }), D(ee, Ye);
    };
    Ce(Xe, (ee) => {
      V() || ee(Ze);
    });
  }
  D(e, pe);
  var Be = ue({
    get id() {
      return v();
    },
    set id(ee) {
      v(ee), p();
    },
    get type() {
      return y();
    },
    set type(ee) {
      y(ee), p();
    },
    get source() {
      return x();
    },
    set source(ee) {
      x(ee), p();
    },
    get target() {
      return b();
    },
    set target(ee) {
      b(ee), p();
    },
    get data() {
      return C();
    },
    set data(ee) {
      C(ee), p();
    },
    get style() {
      return h();
    },
    set style(ee) {
      h(ee), p();
    },
    get zIndex() {
      return $();
    },
    set zIndex(ee) {
      $(ee), p();
    },
    get animated() {
      return w();
    },
    set animated(ee) {
      w(ee), p();
    },
    get selected() {
      return k();
    },
    set selected(ee) {
      k(ee), p();
    },
    get selectable() {
      return S();
    },
    set selectable(ee) {
      S(ee), p();
    },
    get deletable() {
      return M();
    },
    set deletable(ee) {
      M(ee), p();
    },
    get hidden() {
      return V();
    },
    set hidden(ee) {
      V(ee), p();
    },
    get label() {
      return z();
    },
    set label(ee) {
      z(ee), p();
    },
    get labelStyle() {
      return P();
    },
    set labelStyle(ee) {
      P(ee), p();
    },
    get markerStart() {
      return T();
    },
    set markerStart(ee) {
      T(ee), p();
    },
    get markerEnd() {
      return A();
    },
    set markerEnd(ee) {
      A(ee), p();
    },
    get sourceHandle() {
      return I();
    },
    set sourceHandle(ee) {
      I(ee), p();
    },
    get targetHandle() {
      return H();
    },
    set targetHandle(ee) {
      H(ee), p();
    },
    get sourceX() {
      return N();
    },
    set sourceX(ee) {
      N(ee), p();
    },
    get sourceY() {
      return _();
    },
    set sourceY(ee) {
      _(ee), p();
    },
    get targetX() {
      return E();
    },
    set targetX(ee) {
      E(ee), p();
    },
    get targetY() {
      return O();
    },
    set targetY(ee) {
      O(ee), p();
    },
    get sourcePosition() {
      return L();
    },
    set sourcePosition(ee) {
      L(ee), p();
    },
    get targetPosition() {
      return B();
    },
    set targetPosition(ee) {
      B(ee), p();
    },
    get ariaLabel() {
      return K();
    },
    set ariaLabel(ee) {
      K(ee), p();
    },
    get interactionWidth() {
      return j();
    },
    set interactionWidth(ee) {
      j(ee), p();
    },
    get class() {
      return te();
    },
    set class(ee) {
      te(ee), p();
    }
  });
  return r(), Be;
}
ie(
  Pc,
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
function Oc(e, t) {
  le(t, !1);
  let n = m(t, "onMount", 12, void 0), r = m(t, "onDestroy", 12, void 0);
  return Xt(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), Oe(), ue({
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
ie(Oc, { onMount: {}, onDestroy: {} }, [], [], !0);
var I0 = /* @__PURE__ */ be("<defs></defs>");
function Tc(e, t) {
  le(t, !1);
  const [n, r] = et(), o = () => J(a, "$markers", n), { markers: a } = Fe();
  Oe();
  var i = I0();
  Pt(i, 5, o, (s) => s.id, (s, l) => {
    Dc(s, ut(() => g(l)));
  }), W(i), D(e, i), ue(), r();
}
ie(Tc, {}, [], [], !0);
var Z0 = /* @__PURE__ */ be('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), B0 = /* @__PURE__ */ be('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), R0 = /* @__PURE__ */ be('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Dc(e, t) {
  le(t, !1);
  let n = m(t, "id", 12), r = m(t, "type", 12), o = m(t, "width", 12, 12.5), a = m(t, "height", 12, 12.5), i = m(t, "markerUnits", 12, "strokeWidth"), s = m(t, "orient", 12, "auto-start-reverse"), l = m(t, "color", 12, void 0), u = m(t, "strokeWidth", 12, void 0);
  Oe();
  var c = R0(), d = Y(c);
  {
    var f = (y) => {
      var x = Z0();
      Me(() => {
        ce(x, "stroke", l()), ce(x, "stroke-width", u());
      }), D(y, x);
    }, v = (y, x) => {
      {
        var b = (C) => {
          var h = B0();
          Me(() => {
            ce(h, "stroke", l()), ce(h, "stroke-width", u()), ce(h, "fill", l());
          }), D(C, h);
        };
        Ce(
          y,
          (C) => {
            r() === po.ArrowClosed && C(b);
          },
          x
        );
      }
    };
    Ce(d, (y) => {
      r() === po.Arrow ? y(f) : y(v, !1);
    });
  }
  return W(c), Me(() => {
    ce(c, "id", n()), ce(c, "markerWidth", `${o()}`), ce(c, "markerHeight", `${a()}`), ce(c, "markerUnits", i()), ce(c, "orient", s());
  }), D(e, c), ue({
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
      return a();
    },
    set height(y) {
      a(y), p();
    },
    get markerUnits() {
      return i();
    },
    set markerUnits(y) {
      i(y), p();
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
ie(
  Dc,
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
var W0 = /* @__PURE__ */ re('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function Lc(e, t) {
  le(t, !1);
  const [n, r] = et(), o = () => J(s, "$visibleEdges", n), a = () => J(c, "$elementsSelectable", n);
  let i = m(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: s,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = Fe();
  Xt(() => {
    i() && u(i());
  }), Oe();
  var d = W0(), f = Y(d), v = Y(f);
  Tc(v, {}), W(f);
  var y = Z(f, 2);
  Pt(y, 1, o, (h) => h.id, (h, $) => {
    const w = /* @__PURE__ */ me(() => g($).selectable ?? a()), k = /* @__PURE__ */ me(() => g($).type || "default");
    Pc(h, {
      get id() {
        return g($).id;
      },
      get source() {
        return g($).source;
      },
      get target() {
        return g($).target;
      },
      get data() {
        return g($).data;
      },
      get style() {
        return g($).style;
      },
      get animated() {
        return g($).animated;
      },
      get selected() {
        return g($).selected;
      },
      get selectable() {
        return g(w);
      },
      get deletable() {
        return g($).deletable;
      },
      get hidden() {
        return g($).hidden;
      },
      get label() {
        return g($).label;
      },
      get labelStyle() {
        return g($).labelStyle;
      },
      get markerStart() {
        return g($).markerStart;
      },
      get markerEnd() {
        return g($).markerEnd;
      },
      get sourceHandle() {
        return g($).sourceHandle;
      },
      get targetHandle() {
        return g($).targetHandle;
      },
      get sourceX() {
        return g($).sourceX;
      },
      get sourceY() {
        return g($).sourceY;
      },
      get targetX() {
        return g($).targetX;
      },
      get targetY() {
        return g($).targetY;
      },
      get sourcePosition() {
        return g($).sourcePosition;
      },
      get targetPosition() {
        return g($).targetPosition;
      },
      get ariaLabel() {
        return g($).ariaLabel;
      },
      get interactionWidth() {
        return g($).interactionWidth;
      },
      get class() {
        return g($).class;
      },
      get type() {
        return g(k);
      },
      get zIndex() {
        return g($).zIndex;
      },
      $$events: {
        edgeclick(S) {
          Te.call(this, t, S);
        },
        edgecontextmenu(S) {
          Te.call(this, t, S);
        },
        edgemouseenter(S) {
          Te.call(this, t, S);
        },
        edgemouseleave(S) {
          Te.call(this, t, S);
        }
      }
    });
  });
  var x = Z(y, 2);
  {
    var b = (h) => {
      Oc(h, {
        onMount: () => {
          si(l, !0);
        },
        onDestroy: () => {
          si(l, !1);
        }
      });
    };
    Ce(x, (h) => {
      o().length > 0 && h(b);
    });
  }
  W(d), D(e, d);
  var C = ue({
    get defaultEdgeOptions() {
      return i();
    },
    set defaultEdgeOptions(h) {
      i(h), p();
    }
  });
  return r(), C;
}
ie(Lc, { defaultEdgeOptions: {} }, [], [], !0);
var X0 = /* @__PURE__ */ re('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const Y0 = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function fs(e, t) {
  le(t, !1), Je(e, Y0);
  let n = m(t, "x", 12, 0), r = m(t, "y", 12, 0), o = m(t, "width", 12, 0), a = m(t, "height", 12, 0), i = m(t, "isVisible", 12, !0);
  var s = Qe(), l = xe(s);
  {
    var u = (c) => {
      var d = X0();
      Me(() => {
        it(d, "width", typeof o() == "string" ? o() : `${o()}px`), it(d, "height", typeof a() == "string" ? a() : `${a()}px`), it(d, "transform", `translate(${n()}px, ${r()}px)`);
      }), D(c, d);
    };
    Ce(l, (c) => {
      i() && c(u);
    });
  }
  return D(e, s), ue({
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
ie(
  fs,
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
  le(t, !1);
  const [n, r] = et(), o = () => J(i, "$selectionRect", n), a = () => J(s, "$selectionRectMode", n), { selectionRect: i, selectionRectMode: s } = Fe();
  Oe();
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
  fs(e, {
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
  }), ue(), r();
}
ie(Ac, {}, [], [], !0);
var K0 = /* @__PURE__ */ re('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const q0 = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function Ic(e, t) {
  le(t, !1), Je(e, q0);
  const [n, r] = et(), o = () => J(l, "$selectionRectMode", n), a = () => J(c, "$nodeLookup", n), i = () => J(u, "$nodes", n), s = Fe(), { selectionRectMode: l, nodes: u, nodeLookup: c } = s, d = Ti();
  let f = oe(null);
  function v(h) {
    const $ = i().filter((w) => w.selected);
    d("selectioncontextmenu", { nodes: $, event: h });
  }
  function y(h) {
    const $ = i().filter((w) => w.selected);
    d("selectionclick", { nodes: $, event: h });
  }
  de(
    () => (o(), a(), i()),
    () => {
      o() === "nodes" && (F(f, Mo(a(), { filter: (h) => !!h.selected })), i());
    }
  ), vt(), Oe();
  var x = Qe(), b = xe(x);
  {
    var C = (h) => {
      var $ = K0(), w = Y($);
      fs(w, { width: "100%", height: "100%", x: 0, y: 0 }), W($), ht($, (k, S) => $i == null ? void 0 : $i(k, S), () => ({
        disabled: !1,
        store: s,
        onDrag: (k, S, M, V) => {
          d("nodedrag", { event: k, targetNode: null, nodes: V });
        },
        onDragStart: (k, S, M, V) => {
          d("nodedragstart", { event: k, targetNode: null, nodes: V });
        },
        onDragStop: (k, S, M, V) => {
          d("nodedragstop", { event: k, targetNode: null, nodes: V });
        }
      })), At(() => Re("contextmenu", $, v)), At(() => Re("click", $, y)), At(() => Re("keyup", $, () => {
      })), Me(() => ce($, "style", `width: ${g(f).width ?? ""}px; height: ${g(f).height ?? ""}px; transform: translate(${g(f).x ?? ""}px, ${g(f).y ?? ""}px)`)), D(h, $);
    };
    Ce(b, (h) => {
      o() === "nodes" && g(f) && En(g(f).x) && En(g(f).y) && h(C);
    });
  }
  D(e, x), ue(), r();
}
ie(Ic, {}, [], [], !0);
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
      }, { modifier: d, key: f, callback: v, preventDefault: y, enabled: x } = c;
      if (x) {
        if (d.length && !(Array.isArray(d) ? d : [d]).map(
          (b) => typeof b == "string" ? [b] : b
        ).some(
          (b) => b.every((C) => l[C])
        ))
          continue;
        if (i.key === f) {
          y && i.preventDefault();
          const b = {
            node: e,
            trigger: c,
            originalEvent: i
          };
          e.dispatchEvent(new CustomEvent("shortcut", { detail: b })), v == null || v(b);
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
  le(t, !1);
  let n = m(t, "selectionKey", 12, "Shift"), r = m(t, "multiSelectionKey", 28, () => mi() ? "Meta" : "Control"), o = m(t, "deleteKey", 12, "Backspace"), a = m(t, "panActivationKey", 12, " "), i = m(t, "zoomActivationKey", 28, () => mi() ? "Meta" : "Control");
  const {
    selectionKeyPressed: s,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: d,
    selectionRect: f
  } = Fe();
  function v(h) {
    return h !== null && typeof h == "object";
  }
  function y(h) {
    return v(h) ? h.modifier || [] : [];
  }
  function x(h) {
    return h == null ? "" : v(h) ? h.key : h;
  }
  function b(h, $) {
    return (Array.isArray(h) ? h : [h]).map((w) => {
      const k = x(w);
      return {
        key: k,
        modifier: y(w),
        enabled: k !== null,
        callback: $
      };
    });
  }
  function C() {
    f.set(null), s.set(!1), l.set(!1), u.set(!1), c.set(!1), d.set(!1);
  }
  return Oe(), Re("blur", Ht, C), Re("contextmenu", Ht, C), ht(Ht, (h, $) => lt == null ? void 0 : lt(h, $), () => ({
    trigger: b(n(), () => s.set(!0)),
    type: "keydown"
  })), ht(Ht, (h, $) => lt == null ? void 0 : lt(h, $), () => ({
    trigger: b(n(), () => s.set(!1)),
    type: "keyup"
  })), ht(Ht, (h, $) => lt == null ? void 0 : lt(h, $), () => ({
    trigger: b(r(), () => l.set(!0)),
    type: "keydown"
  })), ht(Ht, (h, $) => lt == null ? void 0 : lt(h, $), () => ({
    trigger: b(r(), () => l.set(!1)),
    type: "keyup"
  })), ht(Ht, (h, $) => lt == null ? void 0 : lt(h, $), () => ({
    trigger: b(o(), (h) => {
      !(h.originalEvent.ctrlKey || h.originalEvent.metaKey || h.originalEvent.shiftKey) && !Mp(h.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), ht(Ht, (h, $) => lt == null ? void 0 : lt(h, $), () => ({
    trigger: b(o(), () => u.set(!1)),
    type: "keyup"
  })), ht(Ht, (h, $) => lt == null ? void 0 : lt(h, $), () => ({
    trigger: b(a(), () => c.set(!0)),
    type: "keydown"
  })), ht(Ht, (h, $) => lt == null ? void 0 : lt(h, $), () => ({
    trigger: b(a(), () => c.set(!1)),
    type: "keyup"
  })), ht(Ht, (h, $) => lt == null ? void 0 : lt(h, $), () => ({
    trigger: b(i(), () => d.set(!0)),
    type: "keydown"
  })), ht(Ht, (h, $) => lt == null ? void 0 : lt(h, $), () => ({
    trigger: b(i(), () => d.set(!1)),
    type: "keyup"
  })), ue({
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
ie(
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
var j0 = /* @__PURE__ */ be('<path fill="none" class="svelte-flow__connection-path"></path>'), F0 = /* @__PURE__ */ be('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function Bc(e, t) {
  le(t, !1);
  const [n, r] = et(), o = () => J(v, "$connection", n), a = () => J(y, "$connectionLineType", n), i = () => J(d, "$width", n), s = () => J(f, "$height", n);
  let l = m(t, "containerStyle", 12, ""), u = m(t, "style", 12, ""), c = m(t, "isCustomComponent", 12, !1);
  const {
    width: d,
    height: f,
    connection: v,
    connectionLineType: y
  } = Fe();
  let x = oe(null);
  de(
    () => (o(), G(c()), a(), g(x), Ma),
    () => {
      if (o().inProgress && !c()) {
        const { from: w, to: k, fromPosition: S, toPosition: M } = o(), V = {
          sourceX: w.x,
          sourceY: w.y,
          sourcePosition: S,
          targetX: k.x,
          targetY: k.y,
          targetPosition: M
        };
        switch (a()) {
          case _r.Bezier:
            ((z) => F(x, z[0]))(oc(V));
            break;
          case _r.Step:
            ((z) => F(x, z[0]))(yi({ ...V, borderRadius: 0 }));
            break;
          case _r.SmoothStep:
            ((z) => F(x, z[0]))(yi(V));
            break;
          default:
            ((z) => F(x, z[0]))(Ma(V));
        }
      }
    }
  ), vt(), Oe();
  var b = Qe(), C = xe(b);
  {
    var h = (w) => {
      var k = F0(), S = Y(k), M = Y(S);
      pt(M, t, "connectionLine", {});
      var V = Z(M);
      {
        var z = (P) => {
          var T = j0();
          Me(() => {
            ce(T, "d", g(x)), ce(T, "style", u());
          }), D(P, T);
        };
        Ce(V, (P) => {
          c() || P(z);
        });
      }
      W(S), W(k), Me(
        (P) => {
          ce(k, "width", i()), ce(k, "height", s()), ce(k, "style", l()), Ct(S, 0, Cn(P));
        },
        [
          () => _t([
            "svelte-flow__connection",
            yp(o().isValid)
          ])
        ],
        me
      ), D(w, k);
    };
    Ce(C, (w) => {
      o().inProgress && w(h);
    });
  }
  D(e, b);
  var $ = ue({
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
  return r(), $;
}
ie(
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
var G0 = /* @__PURE__ */ re("<div><!></div>");
function Vo(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = nt(n, ["position", "style", "class"]);
  le(t, !1);
  const [o, a] = et(), i = () => J(d, "$selectionRectMode", o), s = oe();
  let l = m(t, "position", 12, "top-right"), u = m(t, "style", 12, void 0), c = m(t, "class", 12, void 0);
  const { selectionRectMode: d } = Fe();
  de(() => G(l()), () => {
    F(s, `${l()}`.split("-"));
  }), vt(), Oe();
  var f = G0();
  let v;
  var y = Y(f);
  pt(y, t, "default", {}), W(f), Me(
    (b) => {
      v = an(f, v, {
        class: b,
        style: u(),
        ...r
      }), it(f, "pointer-events", i() ? "none" : "");
    },
    [
      () => _t([
        "svelte-flow__panel",
        c(),
        ...g(s)
      ])
    ],
    me
  ), D(e, f);
  var x = ue({
    get position() {
      return l();
    },
    set position(b) {
      l(b), p();
    },
    get style() {
      return u();
    },
    set style(b) {
      u(b), p();
    },
    get class() {
      return c();
    },
    set class(b) {
      c(b), p();
    }
  });
  return a(), x;
}
ie(Vo, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var U0 = /* @__PURE__ */ re('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function Rc(e, t) {
  le(t, !1);
  let n = m(t, "proOptions", 12, void 0), r = m(t, "position", 12, "bottom-right");
  Oe();
  var o = Qe(), a = xe(o);
  {
    var i = (s) => {
      Vo(s, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var c = U0();
          D(l, c);
        },
        $$slots: { default: !0 }
      });
    };
    Ce(a, (s) => {
      var l;
      (l = n()) != null && l.hideAttribution || s(i);
    });
  }
  return D(e, o), ue({
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
ie(Rc, { proOptions: {}, position: {} }, [], [], !0);
function Cl(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: a, paneClickDistance: i }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), o !== void 0 && e.setMaxZoom(o), a !== void 0 && e.setTranslateExtent(a), i !== void 0 && e.setPaneClickDistance(i);
}
const J0 = (e) => Object.keys(e);
function kl(e, t) {
  J0(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function Q0() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function em(e = "light") {
  return Kt("light", (t) => {
    if (e !== "system") {
      t(e);
      return;
    }
    const n = Q0(), r = () => t(n != null && n.matches ? "dark" : "light");
    return t(n != null && n.matches ? "dark" : "light"), n == null || n.addEventListener("change", r), () => {
      n == null || n.removeEventListener("change", r);
    };
  });
}
var tm = /* @__PURE__ */ re('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), nm = /* @__PURE__ */ re("<!> <!>", 1), rm = /* @__PURE__ */ re("<div><!> <!> <!> <!></div>");
const om = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function Wc(e, t) {
  const n = Cv(t), r = nt(t, [
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
  le(t, !1), Je(e, om);
  const [a, i] = et(), s = () => J($(), "$viewport", a), l = () => J(Fi, "$initialized", a), u = () => J(g(c), "$colorModeClass", a), c = oe();
  let d = m(t, "id", 12, "1"), f = m(t, "nodes", 12), v = m(t, "edges", 12), y = m(t, "fitView", 12, void 0), x = m(t, "fitViewOptions", 12, void 0), b = m(t, "minZoom", 12, void 0), C = m(t, "maxZoom", 12, void 0), h = m(t, "initialViewport", 12, void 0), $ = m(t, "viewport", 12, void 0), w = m(t, "nodeTypes", 12, void 0), k = m(t, "edgeTypes", 12, void 0), S = m(t, "selectionKey", 12, void 0), M = m(t, "selectionMode", 12, void 0), V = m(t, "panActivationKey", 12, void 0), z = m(t, "multiSelectionKey", 12, void 0), P = m(t, "zoomActivationKey", 12, void 0), T = m(t, "nodesDraggable", 12, void 0), A = m(t, "nodesConnectable", 12, void 0), I = m(t, "nodeDragThreshold", 12, void 0), H = m(t, "elementsSelectable", 12, void 0), N = m(t, "snapGrid", 12, void 0), _ = m(t, "deleteKey", 12, void 0), E = m(t, "connectionRadius", 12, void 0), O = m(t, "connectionLineType", 12, void 0), L = m(t, "connectionMode", 28, () => cr.Strict), B = m(t, "connectionLineStyle", 12, ""), K = m(t, "connectionLineContainerStyle", 12, ""), j = m(t, "onMoveStart", 12, void 0), te = m(t, "onMove", 12, void 0), U = m(t, "onMoveEnd", 12, void 0), X = m(t, "isValidConnection", 12, void 0), ae = m(t, "translateExtent", 12, void 0), $e = m(t, "nodeExtent", 12, void 0), ke = m(t, "onlyRenderVisibleElements", 12, void 0), he = m(t, "panOnScrollMode", 28, () => qn.Free), ve = m(t, "preventScrolling", 12, !0), ne = m(t, "zoomOnScroll", 12, !0), pe = m(t, "zoomOnDoubleClick", 12, !0), Xe = m(t, "zoomOnPinch", 12, !0), Ze = m(t, "panOnScroll", 12, !1), Be = m(t, "panOnDrag", 12, !0), ee = m(t, "selectionOnDrag", 12, void 0), Ye = m(t, "autoPanOnConnect", 12, !0), Le = m(t, "autoPanOnNodeDrag", 12, !0), fe = m(t, "onerror", 12, void 0), se = m(t, "ondelete", 12, void 0), _e = m(t, "onedgecreate", 12, void 0), Pe = m(t, "attributionPosition", 12, void 0), Ke = m(t, "proOptions", 12, void 0), ct = m(t, "defaultEdgeOptions", 12, void 0), tt = m(t, "width", 12, void 0), Q = m(t, "height", 12, void 0), Ne = m(t, "colorMode", 12, "light"), ge = m(t, "onconnect", 12, void 0), dn = m(t, "onconnectstart", 12, void 0), Gt = m(t, "onconnectend", 12, void 0), fn = m(t, "onbeforedelete", 12, void 0), Ve = m(t, "oninit", 12, void 0), rt = m(t, "nodeOrigin", 12, void 0), ye = m(t, "paneClickDistance", 12, 0), ot = m(t, "nodeClickDistance", 12, 0), at = m(t, "defaultMarkerColor", 12, "#b1b1b7"), Yt = m(t, "style", 12, void 0), Yr = m(t, "class", 12, void 0), Tt = oe(), St = oe(), vn = oe();
  const Ut = s() || h(), ft = rv(Xi) ? Fe() : M0({
    nodes: q(f()),
    edges: q(v()),
    width: tt(),
    height: Q(),
    fitView: y(),
    nodeOrigin: rt(),
    nodeExtent: $e()
  });
  Xt(() => (ft.width.set(g(St)), ft.height.set(g(vn)), ft.domNode.set(g(Tt)), ft.syncNodeStores(f()), ft.syncEdgeStores(v()), ft.syncViewport($()), y() !== void 0 && ft.fitViewOnInit.set(y()), x() && ft.fitViewOptions.set(x()), Cl(ft, {
    nodeTypes: w(),
    edgeTypes: k(),
    minZoom: b(),
    maxZoom: C(),
    translateExtent: ae(),
    paneClickDistance: ye()
  }), () => {
    ft.reset();
  }));
  const { initialized: Fi } = ft;
  let tr = oe(!1);
  de(
    () => (g(St), g(vn)),
    () => {
      g(St) !== void 0 && g(vn) !== void 0 && (ft.width.set(g(St)), ft.height.set(g(vn)));
    }
  ), de(
    () => (g(tr), l(), G(Ve())),
    () => {
      var R;
      !g(tr) && l() && ((R = Ve()) == null || R(), F(tr, !0));
    }
  ), de(
    () => (G(d()), G(O()), G(E()), G(M()), G(N()), G(at()), G(T()), G(A()), G(H()), G(ke()), G(X()), G(Ye()), G(Le()), G(fe()), G(se()), G(_e()), G(L()), G(I()), G(ge()), G(dn()), G(Gt()), G(fn()), G(rt()), kl),
    () => {
      const R = {
        flowId: d(),
        connectionLineType: O(),
        connectionRadius: E(),
        selectionMode: M(),
        snapGrid: N(),
        defaultMarkerColor: at(),
        nodesDraggable: T(),
        nodesConnectable: A(),
        elementsSelectable: H(),
        onlyRenderVisibleElements: ke(),
        isValidConnection: X(),
        autoPanOnConnect: Ye(),
        autoPanOnNodeDrag: Le(),
        onerror: fe(),
        ondelete: se(),
        onedgecreate: _e(),
        connectionMode: L(),
        nodeDragThreshold: I(),
        onconnect: ge(),
        onconnectstart: dn(),
        onconnectend: Gt(),
        onbeforedelete: fn(),
        nodeOrigin: rt()
      };
      kl(ft, R);
    }
  ), de(
    () => (G(w()), G(k()), G(b()), G(C()), G(ae()), G(ye())),
    () => {
      Cl(ft, {
        nodeTypes: w(),
        edgeTypes: k(),
        minZoom: b(),
        maxZoom: C(),
        translateExtent: ae(),
        paneClickDistance: ye()
      });
    }
  ), de(
    () => G(Ne()),
    () => {
      Nv(F(c, em(Ne())), "$colorModeClass", a);
    }
  ), vt(), Oe();
  var Jt = rm();
  let To;
  var Do = Y(Jt);
  Zc(Do, {
    get selectionKey() {
      return S();
    },
    get deleteKey() {
      return _();
    },
    get panActivationKey() {
      return V();
    },
    get multiSelectionKey() {
      return z();
    },
    get zoomActivationKey() {
      return P();
    }
  });
  var Lo = Z(Do, 2);
  const Ld = /* @__PURE__ */ me(() => he() === void 0 ? qn.Free : he()), Ad = /* @__PURE__ */ me(() => ve() === void 0 ? !0 : ve()), Id = /* @__PURE__ */ me(() => ne() === void 0 ? !0 : ne()), Zd = /* @__PURE__ */ me(() => pe() === void 0 ? !0 : pe()), Bd = /* @__PURE__ */ me(() => Xe() === void 0 ? !0 : Xe()), Rd = /* @__PURE__ */ me(() => Ze() === void 0 ? !1 : Ze()), Wd = /* @__PURE__ */ me(() => Be() === void 0 ? !0 : Be()), Xd = /* @__PURE__ */ me(() => ye() === void 0 ? 0 : ye());
  Hc(Lo, {
    initialViewport: Ut,
    get onMoveStart() {
      return j();
    },
    get onMove() {
      return te();
    },
    get onMoveEnd() {
      return U();
    },
    get panOnScrollMode() {
      return g(Ld);
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
      return g(Wd);
    },
    get paneClickDistance() {
      return g(Xd);
    },
    children: (R, bw) => {
      const qd = /* @__PURE__ */ me(() => Be() === void 0 ? !0 : Be());
      Ec(R, {
        get panOnDrag() {
          return g(qd);
        },
        get selectionOnDrag() {
          return ee();
        },
        $$events: {
          paneclick(Kr) {
            Te.call(this, t, Kr);
          },
          panecontextmenu(Kr) {
            Te.call(this, t, Kr);
          }
        },
        children: (Kr, $w) => {
          var ws = nm(), xs = xe(ws);
          Vc(xs, {
            children: (Fd, Cw) => {
              var bs = tm(), $s = xe(bs);
              Lc($s, {
                get defaultEdgeOptions() {
                  return ct();
                },
                $$events: {
                  edgeclick(Ae) {
                    Te.call(this, t, Ae);
                  },
                  edgecontextmenu(Ae) {
                    Te.call(this, t, Ae);
                  },
                  edgemouseenter(Ae) {
                    Te.call(this, t, Ae);
                  },
                  edgemouseleave(Ae) {
                    Te.call(this, t, Ae);
                  }
                }
              });
              var Cs = Z($s, 2);
              Bc(Cs, {
                get containerStyle() {
                  return K();
                },
                get style() {
                  return B();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (Ae, kw) => {
                    var _s = Qe(), Ud = xe(_s);
                    pt(Ud, t, "connectionLine", {}), D(Ae, _s);
                  }
                }
              });
              var ks = Z(Cs, 6);
              Nc(ks, {
                get nodeClickDistance() {
                  return ot();
                },
                $$events: {
                  nodeclick(Ae) {
                    Te.call(this, t, Ae);
                  },
                  nodemouseenter(Ae) {
                    Te.call(this, t, Ae);
                  },
                  nodemousemove(Ae) {
                    Te.call(this, t, Ae);
                  },
                  nodemouseleave(Ae) {
                    Te.call(this, t, Ae);
                  },
                  nodedragstart(Ae) {
                    Te.call(this, t, Ae);
                  },
                  nodedrag(Ae) {
                    Te.call(this, t, Ae);
                  },
                  nodedragstop(Ae) {
                    Te.call(this, t, Ae);
                  },
                  nodecontextmenu(Ae) {
                    Te.call(this, t, Ae);
                  }
                }
              });
              var Gd = Z(ks, 2);
              Ic(Gd, {
                $$events: {
                  selectionclick(Ae) {
                    Te.call(this, t, Ae);
                  },
                  selectioncontextmenu(Ae) {
                    Te.call(this, t, Ae);
                  },
                  nodedragstart(Ae) {
                    Te.call(this, t, Ae);
                  },
                  nodedrag(Ae) {
                    Te.call(this, t, Ae);
                  },
                  nodedragstop(Ae) {
                    Te.call(this, t, Ae);
                  }
                }
              }), D(Fd, bs);
            },
            $$slots: { default: !0 }
          });
          var jd = Z(xs, 2);
          Ac(jd, {}), D(Kr, ws);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var ys = Z(Lo, 2);
  Rc(ys, {
    get proOptions() {
      return Ke();
    },
    get position() {
      return Pe();
    }
  });
  var Yd = Z(ys, 2);
  pt(Yd, t, "default", {}), W(Jt), wn(Jt, (R) => F(Tt, R), () => g(Tt)), Me(
    (R) => To = an(
      Jt,
      To,
      {
        style: Yt(),
        class: R,
        "data-testid": "svelte-flow__wrapper",
        ...o,
        role: "application"
      },
      "svelte-12wlba6"
    ),
    [
      () => _t([
        "svelte-flow",
        Yr(),
        u()
      ])
    ],
    me
  ), Ds(Jt, "clientWidth", (R) => F(St, R)), Ds(Jt, "clientHeight", (R) => F(vn, R)), Re("dragover", Jt, function(R) {
    Te.call(this, t, R);
  }), Re("drop", Jt, function(R) {
    Te.call(this, t, R);
  }), D(e, Jt);
  var Kd = ue({
    get id() {
      return d();
    },
    set id(R) {
      d(R), p();
    },
    get nodes() {
      return f();
    },
    set nodes(R) {
      f(R), p();
    },
    get edges() {
      return v();
    },
    set edges(R) {
      v(R), p();
    },
    get fitView() {
      return y();
    },
    set fitView(R) {
      y(R), p();
    },
    get fitViewOptions() {
      return x();
    },
    set fitViewOptions(R) {
      x(R), p();
    },
    get minZoom() {
      return b();
    },
    set minZoom(R) {
      b(R), p();
    },
    get maxZoom() {
      return C();
    },
    set maxZoom(R) {
      C(R), p();
    },
    get initialViewport() {
      return h();
    },
    set initialViewport(R) {
      h(R), p();
    },
    get viewport() {
      return $();
    },
    set viewport(R) {
      $(R), p();
    },
    get nodeTypes() {
      return w();
    },
    set nodeTypes(R) {
      w(R), p();
    },
    get edgeTypes() {
      return k();
    },
    set edgeTypes(R) {
      k(R), p();
    },
    get selectionKey() {
      return S();
    },
    set selectionKey(R) {
      S(R), p();
    },
    get selectionMode() {
      return M();
    },
    set selectionMode(R) {
      M(R), p();
    },
    get panActivationKey() {
      return V();
    },
    set panActivationKey(R) {
      V(R), p();
    },
    get multiSelectionKey() {
      return z();
    },
    set multiSelectionKey(R) {
      z(R), p();
    },
    get zoomActivationKey() {
      return P();
    },
    set zoomActivationKey(R) {
      P(R), p();
    },
    get nodesDraggable() {
      return T();
    },
    set nodesDraggable(R) {
      T(R), p();
    },
    get nodesConnectable() {
      return A();
    },
    set nodesConnectable(R) {
      A(R), p();
    },
    get nodeDragThreshold() {
      return I();
    },
    set nodeDragThreshold(R) {
      I(R), p();
    },
    get elementsSelectable() {
      return H();
    },
    set elementsSelectable(R) {
      H(R), p();
    },
    get snapGrid() {
      return N();
    },
    set snapGrid(R) {
      N(R), p();
    },
    get deleteKey() {
      return _();
    },
    set deleteKey(R) {
      _(R), p();
    },
    get connectionRadius() {
      return E();
    },
    set connectionRadius(R) {
      E(R), p();
    },
    get connectionLineType() {
      return O();
    },
    set connectionLineType(R) {
      O(R), p();
    },
    get connectionMode() {
      return L();
    },
    set connectionMode(R) {
      L(R), p();
    },
    get connectionLineStyle() {
      return B();
    },
    set connectionLineStyle(R) {
      B(R), p();
    },
    get connectionLineContainerStyle() {
      return K();
    },
    set connectionLineContainerStyle(R) {
      K(R), p();
    },
    get onMoveStart() {
      return j();
    },
    set onMoveStart(R) {
      j(R), p();
    },
    get onMove() {
      return te();
    },
    set onMove(R) {
      te(R), p();
    },
    get onMoveEnd() {
      return U();
    },
    set onMoveEnd(R) {
      U(R), p();
    },
    get isValidConnection() {
      return X();
    },
    set isValidConnection(R) {
      X(R), p();
    },
    get translateExtent() {
      return ae();
    },
    set translateExtent(R) {
      ae(R), p();
    },
    get nodeExtent() {
      return $e();
    },
    set nodeExtent(R) {
      $e(R), p();
    },
    get onlyRenderVisibleElements() {
      return ke();
    },
    set onlyRenderVisibleElements(R) {
      ke(R), p();
    },
    get panOnScrollMode() {
      return he();
    },
    set panOnScrollMode(R) {
      he(R), p();
    },
    get preventScrolling() {
      return ve();
    },
    set preventScrolling(R) {
      ve(R), p();
    },
    get zoomOnScroll() {
      return ne();
    },
    set zoomOnScroll(R) {
      ne(R), p();
    },
    get zoomOnDoubleClick() {
      return pe();
    },
    set zoomOnDoubleClick(R) {
      pe(R), p();
    },
    get zoomOnPinch() {
      return Xe();
    },
    set zoomOnPinch(R) {
      Xe(R), p();
    },
    get panOnScroll() {
      return Ze();
    },
    set panOnScroll(R) {
      Ze(R), p();
    },
    get panOnDrag() {
      return Be();
    },
    set panOnDrag(R) {
      Be(R), p();
    },
    get selectionOnDrag() {
      return ee();
    },
    set selectionOnDrag(R) {
      ee(R), p();
    },
    get autoPanOnConnect() {
      return Ye();
    },
    set autoPanOnConnect(R) {
      Ye(R), p();
    },
    get autoPanOnNodeDrag() {
      return Le();
    },
    set autoPanOnNodeDrag(R) {
      Le(R), p();
    },
    get onerror() {
      return fe();
    },
    set onerror(R) {
      fe(R), p();
    },
    get ondelete() {
      return se();
    },
    set ondelete(R) {
      se(R), p();
    },
    get onedgecreate() {
      return _e();
    },
    set onedgecreate(R) {
      _e(R), p();
    },
    get attributionPosition() {
      return Pe();
    },
    set attributionPosition(R) {
      Pe(R), p();
    },
    get proOptions() {
      return Ke();
    },
    set proOptions(R) {
      Ke(R), p();
    },
    get defaultEdgeOptions() {
      return ct();
    },
    set defaultEdgeOptions(R) {
      ct(R), p();
    },
    get width() {
      return tt();
    },
    set width(R) {
      tt(R), p();
    },
    get height() {
      return Q();
    },
    set height(R) {
      Q(R), p();
    },
    get colorMode() {
      return Ne();
    },
    set colorMode(R) {
      Ne(R), p();
    },
    get onconnect() {
      return ge();
    },
    set onconnect(R) {
      ge(R), p();
    },
    get onconnectstart() {
      return dn();
    },
    set onconnectstart(R) {
      dn(R), p();
    },
    get onconnectend() {
      return Gt();
    },
    set onconnectend(R) {
      Gt(R), p();
    },
    get onbeforedelete() {
      return fn();
    },
    set onbeforedelete(R) {
      fn(R), p();
    },
    get oninit() {
      return Ve();
    },
    set oninit(R) {
      Ve(R), p();
    },
    get nodeOrigin() {
      return rt();
    },
    set nodeOrigin(R) {
      rt(R), p();
    },
    get paneClickDistance() {
      return ye();
    },
    set paneClickDistance(R) {
      ye(R), p();
    },
    get nodeClickDistance() {
      return ot();
    },
    set nodeClickDistance(R) {
      ot(R), p();
    },
    get defaultMarkerColor() {
      return at();
    },
    set defaultMarkerColor(R) {
      at(R), p();
    },
    get style() {
      return Yt();
    },
    set style(R) {
      Yt(R), p();
    },
    get class() {
      return Yr();
    },
    set class(R) {
      Yr(R), p();
    }
  });
  return i(), Kd;
}
ie(
  Wc,
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
  le(t, !1);
  let n = m(t, "initialNodes", 12, void 0), r = m(t, "initialEdges", 12, void 0), o = m(t, "initialWidth", 12, void 0), a = m(t, "initialHeight", 12, void 0), i = m(t, "fitView", 12, void 0), s = m(t, "nodeOrigin", 12, void 0);
  const l = Mc({
    nodes: n(),
    edges: r(),
    width: o(),
    height: a(),
    nodeOrigin: s(),
    fitView: i()
  });
  Er(Xi, { getStore: () => l }), Ua(() => {
    l.reset();
  }), Oe();
  var u = Qe(), c = xe(u);
  return pt(c, t, "default", {}), D(e, u), ue({
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
ie(
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
var im = /* @__PURE__ */ re("<button><!></button>");
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
  le(t, !1);
  let o = m(t, "class", 12, void 0), a = m(t, "bgColor", 12, void 0), i = m(t, "bgColorHover", 12, void 0), s = m(t, "color", 12, void 0), l = m(t, "colorHover", 12, void 0), u = m(t, "borderColor", 12, void 0);
  Oe();
  var c = im();
  let d;
  var f = Y(c);
  return pt(f, t, "default", { class: "button-svg" }), W(c), Me(
    (v) => {
      d = an(c, d, { type: "button", class: v, ...r }), it(c, "--xy-controls-button-background-color-props", a()), it(c, "--xy-controls-button-background-color-hover-props", i()), it(c, "--xy-controls-button-color-props", s()), it(c, "--xy-controls-button-color-hover-props", l()), it(c, "--xy-controls-button-border-color-props", u());
    },
    [
      () => _t([
        "svelte-flow__controls-button",
        o()
      ])
    ],
    me
  ), Re("click", c, function(v) {
    Te.call(this, t, v);
  }), D(e, c), ue({
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
ie(
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
var am = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function Yc(e) {
  var t = am();
  D(e, t);
}
ie(Yc, {}, [], [], !0);
var sm = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Kc(e) {
  var t = sm();
  D(e, t);
}
ie(Kc, {}, [], [], !0);
var lm = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function qc(e) {
  var t = lm();
  D(e, t);
}
ie(qc, {}, [], [], !0);
var um = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function jc(e) {
  var t = um();
  D(e, t);
}
ie(jc, {}, [], [], !0);
var cm = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function Fc(e) {
  var t = cm();
  D(e, t);
}
ie(Fc, {}, [], [], !0);
var dm = /* @__PURE__ */ re("<!> <!>", 1), fm = /* @__PURE__ */ re("<!> <!> <!> <!> <!> <!>", 1);
function Gc(e, t) {
  le(t, !1);
  const [n, r] = et(), o = () => J(O, "$nodesDraggable", n), a = () => J(L, "$nodesConnectable", n), i = () => J(B, "$elementsSelectable", n), s = () => J(N, "$viewport", n), l = () => J(_, "$minZoom", n), u = () => J(E, "$maxZoom", n), c = oe(), d = oe(), f = oe(), v = oe();
  let y = m(t, "position", 12, "bottom-left"), x = m(t, "showZoom", 12, !0), b = m(t, "showFitView", 12, !0), C = m(t, "showLock", 12, !0), h = m(t, "buttonBgColor", 12, void 0), $ = m(t, "buttonBgColorHover", 12, void 0), w = m(t, "buttonColor", 12, void 0), k = m(t, "buttonColorHover", 12, void 0), S = m(t, "buttonBorderColor", 12, void 0), M = m(t, "ariaLabel", 12, void 0), V = m(t, "style", 12, void 0), z = m(t, "orientation", 12, "vertical"), P = m(t, "fitViewOptions", 12, void 0), T = m(t, "class", 12, "");
  const {
    zoomIn: A,
    zoomOut: I,
    fitView: H,
    viewport: N,
    minZoom: _,
    maxZoom: E,
    nodesDraggable: O,
    nodesConnectable: L,
    elementsSelectable: B
  } = Fe(), K = {
    bgColor: h(),
    bgColorHover: $(),
    color: w(),
    colorHover: k(),
    borderColor: S()
  }, j = () => {
    A();
  }, te = () => {
    I();
  }, U = () => {
    H(P());
  }, X = () => {
    F(c, !g(c)), O.set(g(c)), L.set(g(c)), B.set(g(c));
  };
  de(
    () => (o(), a(), i()),
    () => {
      F(c, o() || a() || i());
    }
  ), de(() => (s(), l()), () => {
    F(d, s().zoom <= l());
  }), de(() => (s(), u()), () => {
    F(f, s().zoom >= u());
  }), de(() => G(z()), () => {
    F(v, z() === "horizontal" ? "horizontal" : "vertical");
  }), vt(), Oe();
  const ae = /* @__PURE__ */ me(() => _t([
    "svelte-flow__controls",
    g(v),
    T()
  ])), $e = /* @__PURE__ */ me(() => M() ?? "Svelte Flow controls");
  Vo(e, {
    get class() {
      return g(ae);
    },
    get position() {
      return y();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return g($e);
    },
    get style() {
      return V();
    },
    children: (he, ve) => {
      var ne = fm(), pe = xe(ne);
      pt(pe, t, "before", {});
      var Xe = Z(pe, 2);
      {
        var Ze = (_e) => {
          var Pe = dm(), Ke = xe(Pe);
          eo(Ke, ut(
            {
              class: "svelte-flow__controls-zoomin",
              title: "zoom in",
              "aria-label": "zoom in",
              get disabled() {
                return g(f);
              }
            },
            K,
            {
              $$events: { click: j },
              children: (tt, Q) => {
                Yc(tt);
              },
              $$slots: { default: !0 }
            }
          ));
          var ct = Z(Ke, 2);
          eo(ct, ut(
            {
              class: "svelte-flow__controls-zoomout",
              title: "zoom out",
              "aria-label": "zoom out",
              get disabled() {
                return g(d);
              }
            },
            K,
            {
              $$events: { click: te },
              children: (tt, Q) => {
                Kc(tt);
              },
              $$slots: { default: !0 }
            }
          )), D(_e, Pe);
        };
        Ce(Xe, (_e) => {
          x() && _e(Ze);
        });
      }
      var Be = Z(Xe, 2);
      {
        var ee = (_e) => {
          eo(_e, ut(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            K,
            {
              $$events: { click: U },
              children: (Pe, Ke) => {
                qc(Pe);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        Ce(Be, (_e) => {
          b() && _e(ee);
        });
      }
      var Ye = Z(Be, 2);
      {
        var Le = (_e) => {
          eo(_e, ut(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            K,
            {
              $$events: { click: X },
              children: (Pe, Ke) => {
                var ct = Qe(), tt = xe(ct);
                {
                  var Q = (ge) => {
                    Fc(ge);
                  }, Ne = (ge) => {
                    jc(ge);
                  };
                  Ce(tt, (ge) => {
                    g(c) ? ge(Q) : ge(Ne, !1);
                  });
                }
                D(Pe, ct);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        Ce(Ye, (_e) => {
          C() && _e(Le);
        });
      }
      var fe = Z(Ye, 2);
      pt(fe, t, "default", {});
      var se = Z(fe, 2);
      pt(se, t, "after", {}), D(he, ne);
    },
    $$slots: { default: !0 }
  });
  var ke = ue({
    get position() {
      return y();
    },
    set position(he) {
      y(he), p();
    },
    get showZoom() {
      return x();
    },
    set showZoom(he) {
      x(he), p();
    },
    get showFitView() {
      return b();
    },
    set showFitView(he) {
      b(he), p();
    },
    get showLock() {
      return C();
    },
    set showLock(he) {
      C(he), p();
    },
    get buttonBgColor() {
      return h();
    },
    set buttonBgColor(he) {
      h(he), p();
    },
    get buttonBgColorHover() {
      return $();
    },
    set buttonBgColorHover(he) {
      $(he), p();
    },
    get buttonColor() {
      return w();
    },
    set buttonColor(he) {
      w(he), p();
    },
    get buttonColorHover() {
      return k();
    },
    set buttonColorHover(he) {
      k(he), p();
    },
    get buttonBorderColor() {
      return S();
    },
    set buttonBorderColor(he) {
      S(he), p();
    },
    get ariaLabel() {
      return M();
    },
    set ariaLabel(he) {
      M(he), p();
    },
    get style() {
      return V();
    },
    set style(he) {
      V(he), p();
    },
    get orientation() {
      return z();
    },
    set orientation(he) {
      z(he), p();
    },
    get fitViewOptions() {
      return P();
    },
    set fitViewOptions(he) {
      P(he), p();
    },
    get class() {
      return T();
    },
    set class(he) {
      T(he), p();
    }
  });
  return r(), ke;
}
ie(
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
var jn;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(jn || (jn = {}));
var vm = /* @__PURE__ */ be("<circle></circle>");
function Uc(e, t) {
  le(t, !1);
  let n = m(t, "radius", 12, 5), r = m(t, "class", 12, "");
  Oe();
  var o = vm();
  return Me(
    (a) => {
      ce(o, "cx", n()), ce(o, "cy", n()), ce(o, "r", n()), Ct(o, 0, Cn(a));
    },
    [
      () => _t([
        "svelte-flow__background-pattern",
        "dots",
        r()
      ])
    ],
    me
  ), D(e, o), ue({
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
ie(Uc, { radius: {}, class: {} }, [], [], !0);
var gm = /* @__PURE__ */ be("<path></path>");
function Jc(e, t) {
  le(t, !1);
  let n = m(t, "lineWidth", 12, 1), r = m(t, "dimensions", 12), o = m(t, "variant", 12, void 0), a = m(t, "class", 12, "");
  Oe();
  var i = gm();
  return Me(
    (s) => {
      ce(i, "stroke-width", n()), ce(i, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Ct(i, 0, Cn(s));
    },
    [
      () => _t([
        "svelte-flow__background-pattern",
        o(),
        a()
      ])
    ],
    me
  ), D(e, i), ue({
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
ie(
  Jc,
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
const hm = {
  [jn.Dots]: 1,
  [jn.Lines]: 1,
  [jn.Cross]: 6
};
var pm = /* @__PURE__ */ be('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const mm = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function Qc(e, t) {
  le(t, !1), Je(e, mm);
  const [n, r] = et(), o = () => J(k, "$flowId", n), a = () => J(w, "$viewport", n), i = oe(), s = oe(), l = oe(), u = oe(), c = oe();
  let d = m(t, "id", 12, void 0), f = m(t, "variant", 28, () => jn.Dots), v = m(t, "gap", 12, 20), y = m(t, "size", 12, 1), x = m(t, "lineWidth", 12, 1), b = m(t, "bgColor", 12, void 0), C = m(t, "patternColor", 12, void 0), h = m(t, "patternClass", 12, void 0), $ = m(t, "class", 12, "");
  const { viewport: w, flowId: k } = Fe(), S = y() || hm[f()], M = f() === jn.Dots, V = f() === jn.Cross, z = Array.isArray(v()) ? v() : [v(), v()];
  de(
    () => (o(), G(d())),
    () => {
      F(i, `background-pattern-${o()}-${d() ? d() : ""}`);
    }
  ), de(() => a(), () => {
    F(s, [
      z[0] * a().zoom || 1,
      z[1] * a().zoom || 1
    ]);
  }), de(() => a(), () => {
    F(l, S * a().zoom);
  }), de(() => (g(l), g(s)), () => {
    F(u, V ? [g(l), g(l)] : g(s));
  }), de(
    () => (g(l), g(u)),
    () => {
      F(c, M ? [
        g(l) / 2,
        g(l) / 2
      ] : [
        g(u)[0] / 2,
        g(u)[1] / 2
      ]);
    }
  ), vt(), Oe();
  var P = pm(), T = Y(P), A = Y(T);
  {
    var I = (E) => {
      const O = /* @__PURE__ */ me(() => g(l) / 2);
      Uc(E, {
        get radius() {
          return g(O);
        },
        get class() {
          return h();
        }
      });
    }, H = (E) => {
      Jc(E, {
        get dimensions() {
          return g(u);
        },
        get variant() {
          return f();
        },
        get lineWidth() {
          return x();
        },
        get class() {
          return h();
        }
      });
    };
    Ce(A, (E) => {
      M ? E(I) : E(H, !1);
    });
  }
  W(T);
  var N = Z(T);
  W(P), Me(
    (E) => {
      Ct(P, 0, Cn(E), "svelte-1r7pe8d"), it(P, "--xy-background-color-props", b()), it(P, "--xy-background-pattern-color-props", C()), ce(T, "id", g(i)), ce(T, "x", a().x % g(s)[0]), ce(T, "y", a().y % g(s)[1]), ce(T, "width", g(s)[0]), ce(T, "height", g(s)[1]), ce(T, "patternTransform", `translate(-${g(c)[0]},-${g(c)[1]})`), ce(N, "fill", `url(#${g(i)})`);
    },
    [
      () => _t(["svelte-flow__background", $()])
    ],
    me
  ), D(e, P);
  var _ = ue({
    get id() {
      return d();
    },
    set id(E) {
      d(E), p();
    },
    get variant() {
      return f();
    },
    set variant(E) {
      f(E), p();
    },
    get gap() {
      return v();
    },
    set gap(E) {
      v(E), p();
    },
    get size() {
      return y();
    },
    set size(E) {
      y(E), p();
    },
    get lineWidth() {
      return x();
    },
    set lineWidth(E) {
      x(E), p();
    },
    get bgColor() {
      return b();
    },
    set bgColor(E) {
      b(E), p();
    },
    get patternColor() {
      return C();
    },
    set patternColor(E) {
      C(E), p();
    },
    get patternClass() {
      return h();
    },
    set patternClass(E) {
      h(E), p();
    },
    get class() {
      return $();
    },
    set class(E) {
      $(E), p();
    }
  });
  return r(), _;
}
ie(
  Qc,
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
var ym = /* @__PURE__ */ be("<rect></rect>");
function ed(e, t) {
  le(t, !1);
  let n = m(t, "x", 12), r = m(t, "y", 12), o = m(t, "width", 12, 0), a = m(t, "height", 12, 0), i = m(t, "borderRadius", 12, 5), s = m(t, "color", 12, void 0), l = m(t, "shapeRendering", 12), u = m(t, "strokeColor", 12, void 0), c = m(t, "strokeWidth", 12, 2), d = m(t, "selected", 12, !1), f = m(t, "class", 12, "");
  Oe();
  var v = ym();
  let y;
  return Me(
    (x) => {
      y = Ct(v, 0, Cn(x), null, y, { selected: d() }), ce(v, "x", n()), ce(v, "y", r()), ce(v, "rx", i()), ce(v, "ry", i()), ce(v, "width", o()), ce(v, "height", a()), ce(v, "style", `${s() ? `fill: ${s()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), ce(v, "shape-rendering", l());
    },
    [
      () => _t(["svelte-flow__minimap-node", f()])
    ],
    me
  ), D(e, v), ue({
    get x() {
      return n();
    },
    set x(x) {
      n(x), p();
    },
    get y() {
      return r();
    },
    set y(x) {
      r(x), p();
    },
    get width() {
      return o();
    },
    set width(x) {
      o(x), p();
    },
    get height() {
      return a();
    },
    set height(x) {
      a(x), p();
    },
    get borderRadius() {
      return i();
    },
    set borderRadius(x) {
      i(x), p();
    },
    get color() {
      return s();
    },
    set color(x) {
      s(x), p();
    },
    get shapeRendering() {
      return l();
    },
    set shapeRendering(x) {
      l(x), p();
    },
    get strokeColor() {
      return u();
    },
    set strokeColor(x) {
      u(x), p();
    },
    get strokeWidth() {
      return c();
    },
    set strokeWidth(x) {
      c(x), p();
    },
    get selected() {
      return d();
    },
    set selected(x) {
      d(x), p();
    },
    get class() {
      return f();
    },
    set class(x) {
      f(x), p();
    }
  });
}
ie(
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
const aa = (e) => e instanceof Function ? e : () => e;
var wm = /* @__PURE__ */ be("<title> </title>"), xm = /* @__PURE__ */ be('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function td(e, t) {
  le(t, !1);
  const [n, r] = et(), o = () => J(Be, "$flowId", n), a = () => J(pe, "$viewport", n), i = () => J(Xe, "$containerWidth", n), s = () => J(Ze, "$containerHeight", n), l = () => J(ne, "$nodeLookup", n), u = () => J(ve, "$nodes", n), c = () => J(ee, "$panZoom", n), d = () => J(Ye, "$translateExtent", n), f = oe(), v = oe(), y = oe(), x = oe(), b = oe(), C = oe(), h = oe(), $ = oe(), w = oe(), k = oe(), S = oe(), M = oe(), V = oe();
  let z = m(t, "position", 12, "bottom-right"), P = m(t, "ariaLabel", 12, "Mini map"), T = m(t, "nodeStrokeColor", 12, "transparent"), A = m(t, "nodeColor", 12, void 0), I = m(t, "nodeClass", 12, ""), H = m(t, "nodeBorderRadius", 12, 5), N = m(t, "nodeStrokeWidth", 12, 2), _ = m(t, "bgColor", 12, void 0), E = m(t, "maskColor", 12, void 0), O = m(t, "maskStrokeColor", 12, void 0), L = m(t, "maskStrokeWidth", 12, void 0), B = m(t, "width", 12, void 0), K = m(t, "height", 12, void 0), j = m(t, "pannable", 12, !0), te = m(t, "zoomable", 12, !0), U = m(t, "inversePan", 12, void 0), X = m(t, "zoomStep", 12, void 0), ae = m(t, "style", 12, ""), $e = m(t, "class", 12, "");
  const ke = 200, he = 150, {
    nodes: ve,
    nodeLookup: ne,
    viewport: pe,
    width: Xe,
    height: Ze,
    flowId: Be,
    panZoom: ee,
    translateExtent: Ye
  } = Fe(), Le = A() === void 0 ? void 0 : aa(A()), fe = aa(T()), se = aa(I()), _e = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), Pe = `svelte-flow__minimap-desc-${o()}`;
  let Ke = oe(g(f));
  const ct = () => g(C);
  de(
    () => (a(), i(), s()),
    () => {
      F(f, {
        x: -a().x / a().zoom,
        y: -a().y / a().zoom,
        width: i() / a().zoom,
        height: s() / a().zoom
      });
    }
  ), de(
    () => (l(), g(f), u()),
    () => {
      F(Ke, l().size > 0 ? ec(Mo(l()), g(f)) : g(f)), u();
    }
  ), de(() => G(B()), () => {
    F(v, B() ?? ke);
  }), de(() => G(K()), () => {
    F(y, K() ?? he);
  }), de(
    () => (g(Ke), g(v)),
    () => {
      F(x, g(Ke).width / g(v));
    }
  ), de(
    () => (g(Ke), g(y)),
    () => {
      F(b, g(Ke).height / g(y));
    }
  ), de(
    () => (g(x), g(b)),
    () => {
      F(C, Math.max(g(x), g(b)));
    }
  ), de(() => (g(C), g(v)), () => {
    F(h, g(C) * g(v));
  }), de(
    () => (g(C), g(y)),
    () => {
      F($, g(C) * g(y));
    }
  ), de(() => g(C), () => {
    F(w, 5 * g(C));
  }), de(
    () => (g(Ke), g(h), g(w)),
    () => {
      F(k, g(Ke).x - (g(h) - g(Ke).width) / 2 - g(w));
    }
  ), de(
    () => (g(Ke), g($), g(w)),
    () => {
      F(S, g(Ke).y - (g($) - g(Ke).height) / 2 - g(w));
    }
  ), de(() => (g(h), g(w)), () => {
    F(M, g(h) + g(w) * 2);
  }), de(() => (g($), g(w)), () => {
    F(V, g($) + g(w) * 2);
  }), vt(), Oe();
  const tt = /* @__PURE__ */ me(() => ae() + (_() ? `;--xy-minimap-background-color-props:${_()}` : "")), Q = /* @__PURE__ */ me(() => _t(["svelte-flow__minimap", $e()]));
  Vo(e, {
    get position() {
      return z();
    },
    get style() {
      return g(tt);
    },
    get class() {
      return g(Q);
    },
    "data-testid": "svelte-flow__minimap",
    children: (ge, dn) => {
      var Gt = Qe(), fn = xe(Gt);
      {
        var Ve = (rt) => {
          var ye = xm();
          ce(ye, "aria-labelledby", Pe);
          var ot = Y(ye);
          {
            var at = (Tt) => {
              var St = wm();
              ce(St, "id", Pe);
              var vn = Y(St, !0);
              W(St), Me(() => Bt(vn, P())), D(Tt, St);
            };
            Ce(ot, (Tt) => {
              P() && Tt(at);
            });
          }
          var Yt = Z(ot);
          Pt(Yt, 1, u, (Tt) => Tt.id, (Tt, St) => {
            var vn = Qe();
            const Ut = /* @__PURE__ */ me(() => l().get(g(St).id));
            var ft = xe(vn);
            {
              var Fi = (tr) => {
                const Jt = /* @__PURE__ */ me(() => er(g(Ut))), To = /* @__PURE__ */ me(() => Le == null ? void 0 : Le(g(Ut))), Do = /* @__PURE__ */ me(() => fe(g(Ut))), Lo = /* @__PURE__ */ me(() => se(g(Ut)));
                ed(tr, ut(
                  {
                    get x() {
                      return g(Ut).internals.positionAbsolute.x;
                    },
                    get y() {
                      return g(Ut).internals.positionAbsolute.y;
                    }
                  },
                  () => g(Jt),
                  {
                    get selected() {
                      return g(Ut).selected;
                    },
                    get color() {
                      return g(To);
                    },
                    get borderRadius() {
                      return H();
                    },
                    get strokeColor() {
                      return g(Do);
                    },
                    get strokeWidth() {
                      return N();
                    },
                    shapeRendering: _e,
                    get class() {
                      return g(Lo);
                    }
                  }
                ));
              };
              Ce(ft, (tr) => {
                g(Ut) && nc(g(Ut)) && tr(Fi);
              });
            }
            D(Tt, vn);
          });
          var Yr = Z(Yt);
          W(ye), ht(ye, (Tt, St) => _l == null ? void 0 : _l(Tt, St), () => ({
            panZoom: c(),
            viewport: pe,
            getViewScale: ct,
            translateExtent: d(),
            width: i(),
            height: s(),
            inversePan: U(),
            zoomStep: X(),
            pannable: j(),
            zoomable: te()
          })), Me(() => {
            ce(ye, "width", g(v)), ce(ye, "height", g(y)), ce(ye, "viewBox", `${g(k) ?? ""} ${g(S) ?? ""} ${g(M) ?? ""} ${g(V) ?? ""}`), it(ye, "--xy-minimap-mask-background-color-props", E()), it(ye, "--xy-minimap-mask-stroke-color-props", O()), it(ye, "--xy-minimap-mask-stroke-width-props", L() ? L() * g(C) : void 0), ce(Yr, "d", `M${g(k) - g(w)},${g(S) - g(w)}h${g(M) + g(w) * 2}v${g(V) + g(w) * 2}h${-g(M) - g(w) * 2}z
      M${g(f).x ?? ""},${g(f).y ?? ""}h${g(f).width ?? ""}v${g(f).height ?? ""}h${-g(f).width}z`);
          }), D(rt, ye);
        };
        Ce(fn, (rt) => {
          c() && rt(Ve);
        });
      }
      D(ge, Gt);
    },
    $$slots: { default: !0 }
  });
  var Ne = ue({
    get position() {
      return z();
    },
    set position(ge) {
      z(ge), p();
    },
    get ariaLabel() {
      return P();
    },
    set ariaLabel(ge) {
      P(ge), p();
    },
    get nodeStrokeColor() {
      return T();
    },
    set nodeStrokeColor(ge) {
      T(ge), p();
    },
    get nodeColor() {
      return A();
    },
    set nodeColor(ge) {
      A(ge), p();
    },
    get nodeClass() {
      return I();
    },
    set nodeClass(ge) {
      I(ge), p();
    },
    get nodeBorderRadius() {
      return H();
    },
    set nodeBorderRadius(ge) {
      H(ge), p();
    },
    get nodeStrokeWidth() {
      return N();
    },
    set nodeStrokeWidth(ge) {
      N(ge), p();
    },
    get bgColor() {
      return _();
    },
    set bgColor(ge) {
      _(ge), p();
    },
    get maskColor() {
      return E();
    },
    set maskColor(ge) {
      E(ge), p();
    },
    get maskStrokeColor() {
      return O();
    },
    set maskStrokeColor(ge) {
      O(ge), p();
    },
    get maskStrokeWidth() {
      return L();
    },
    set maskStrokeWidth(ge) {
      L(ge), p();
    },
    get width() {
      return B();
    },
    set width(ge) {
      B(ge), p();
    },
    get height() {
      return K();
    },
    set height(ge) {
      K(ge), p();
    },
    get pannable() {
      return j();
    },
    set pannable(ge) {
      j(ge), p();
    },
    get zoomable() {
      return te();
    },
    set zoomable(ge) {
      te(ge), p();
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
      return ae();
    },
    set style(ge) {
      ae(ge), p();
    },
    get class() {
      return $e();
    },
    set class(ge) {
      $e(ge), p();
    }
  });
  return r(), Ne;
}
ie(
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
const Sl = (e) => xp(e);
function Ot() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: a, width: i, height: s, minZoom: l, maxZoom: u, panZoom: c, nodes: d, edges: f, domNode: v, nodeLookup: y, nodeOrigin: x, edgeLookup: b, connectionLookup: C } = Fe(), h = (k) => {
    var S, M;
    const V = q(y), z = Sl(k) ? k : V.get(k.id), P = z.parentId ? kp(z.position, z.measured, z.parentId, V, q(x)) : z.position, T = {
      ...z,
      position: P,
      width: ((S = z.measured) == null ? void 0 : S.width) ?? z.width,
      height: ((M = z.measured) == null ? void 0 : M.height) ?? z.height
    };
    return Or(T);
  }, $ = (k, S, M = { replace: !1 }) => {
    var V;
    const z = (V = q(y).get(k)) == null ? void 0 : V.internals.userNode;
    if (!z)
      return;
    const P = typeof S == "function" ? S(z) : S;
    M.replace ? d.update((T) => T.map((A) => A.id === k ? Sl(P) ? P : { ...A, ...P } : A)) : (Object.assign(z, P), d.update((T) => T));
  }, w = (k) => q(y).get(k);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: w,
    getNode: (k) => {
      var S;
      return (S = w(k)) == null ? void 0 : S.internals.userNode;
    },
    getNodes: (k) => k === void 0 ? q(d) : Ml(q(y), k),
    getEdge: (k) => q(b).get(k),
    getEdges: (k) => k === void 0 ? q(f) : Ml(q(b), k),
    setZoom: (k, S) => {
      const M = q(c);
      return M ? M.scaleTo(k, { duration: S == null ? void 0 : S.duration }) : Promise.resolve(!1);
    },
    getZoom: () => q(a).zoom,
    setViewport: async (k, S) => {
      const M = q(a), V = q(c);
      return V ? (await V.setViewport({
        x: k.x ?? M.x,
        y: k.y ?? M.y,
        zoom: k.zoom ?? M.zoom
      }, { duration: S == null ? void 0 : S.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => q(a),
    setCenter: async (k, S, M) => {
      const V = typeof (M == null ? void 0 : M.zoom) < "u" ? M.zoom : q(u), z = q(c);
      return z ? (await z.setViewport({
        x: q(i) / 2 - k * V,
        y: q(s) / 2 - S * V,
        zoom: V
      }, { duration: M == null ? void 0 : M.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (k, S) => {
      const M = q(c);
      if (!M)
        return Promise.resolve(!1);
      const V = ss(k, q(i), q(s), q(l), q(u), (S == null ? void 0 : S.padding) ?? 0.1);
      return await M.setViewport(V, { duration: S == null ? void 0 : S.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (k, S = !0, M) => {
      const V = ll(k), z = V ? k : h(k);
      return z ? (M || q(d)).filter((P) => {
        const T = q(y).get(P.id);
        if (!T || !V && P.id === k.id)
          return !1;
        const A = Or(T), I = mo(A, z);
        return S && I > 0 || I >= z.width * z.height;
      }) : [];
    },
    isNodeIntersecting: (k, S, M = !0) => {
      const V = ll(k) ? k : h(k);
      if (!V)
        return !1;
      const z = mo(V, S);
      return M && z > 0 || z >= V.width * V.height;
    },
    deleteElements: async ({ nodes: k = [], edges: S = [] }) => {
      const { nodes: M, edges: V } = await Uu({
        nodesToRemove: k,
        edgesToRemove: S,
        nodes: q(d),
        edges: q(f),
        onBeforeDelete: q(r)
      });
      return M && d.update((z) => z.filter((P) => !M.some(({ id: T }) => T === P.id))), V && f.update((z) => z.filter((P) => !V.some(({ id: T }) => T === P.id))), {
        deletedNodes: M,
        deletedEdges: V
      };
    },
    screenToFlowPosition: (k, S = { snapToGrid: !0 }) => {
      const M = q(v);
      if (!M)
        return k;
      const V = S.snapToGrid ? q(o) : !1, { x: z, y: P, zoom: T } = q(a), { x: A, y: I } = M.getBoundingClientRect(), H = {
        x: k.x - A,
        y: k.y - I
      };
      return Ho(H, [z, P, T], V !== null, V || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (k) => {
      const S = q(v);
      if (!S)
        return k;
      const { x: M, y: V, zoom: z } = q(a), { x: P, y: T } = S.getBoundingClientRect(), A = tc(k, [M, V, z]);
      return {
        x: A.x + P,
        y: A.y + T
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
    updateNode: $,
    updateNodeData: (k, S, M) => {
      var V;
      const z = (V = q(y).get(k)) == null ? void 0 : V.internals.userNode;
      if (!z)
        return;
      const P = typeof S == "function" ? S(z) : S;
      z.data = M != null && M.replace ? P : { ...z.data, ...P }, d.update((T) => T);
    },
    getNodesBounds: (k) => {
      const S = q(y), M = q(x);
      return bp(k, { nodeLookup: S, nodeOrigin: M });
    },
    getHandleConnections: ({ type: k, id: S, nodeId: M }) => {
      var V;
      return Array.from(((V = q(C).get(`${M}-${k}-${S ?? null}`)) == null ? void 0 : V.values()) ?? []);
    },
    viewport: a
  };
}
function Ml(e, t) {
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
var bm = /* @__PURE__ */ re('<div class="svelte-flow__node-toolbar"><!></div>');
function nd(e, t) {
  le(t, !1);
  const [n, r] = et(), o = () => J($, "$nodes", n), a = () => J(h, "$nodeLookup", n), i = () => J(C, "$viewport", n), s = () => J(b, "$domNode", n), l = oe(), u = oe(), c = oe();
  let d = m(t, "nodeId", 12, void 0), f = m(t, "position", 12, void 0), v = m(t, "align", 12, void 0), y = m(t, "offset", 12, void 0), x = m(t, "isVisible", 12, void 0);
  const { domNode: b, viewport: C, nodeLookup: h, nodes: $ } = Fe(), { getNodesBounds: w } = Ot(), k = sr("svelteflow__node_id");
  let S = oe(), M = oe([]), V = y() !== void 0 ? y() : 10, z = f() !== void 0 ? f() : Se.Top, P = v() !== void 0 ? v() : "center";
  de(
    () => (o(), G(d()), a()),
    () => {
      o();
      const N = Array.isArray(d()) ? d() : [d() || k];
      F(M, N.reduce(
        (_, E) => {
          const O = a().get(E);
          return O && _.push(O), _;
        },
        []
      ));
    }
  ), de(
    () => (g(M), i()),
    () => {
      const N = w(g(M));
      N && F(S, Ip(N, i(), z, V, P));
    }
  ), de(() => g(M), () => {
    F(l, g(M).length === 0 ? 1 : Math.max(...g(M).map((N) => (N.internals.z || 5) + 1)));
  }), de(() => o(), () => {
    F(u, o().filter((N) => N.selected).length);
  }), de(
    () => (G(x()), g(M), g(u)),
    () => {
      F(c, typeof x() == "boolean" ? x() : g(M).length === 1 && g(M)[0].selected && g(u) === 1);
    }
  ), vt(), Oe();
  var T = Qe(), A = xe(T);
  {
    var I = (N) => {
      var _ = bm(), E = Y(_);
      pt(E, t, "default", {}), W(_), ht(_, (O, L) => xi == null ? void 0 : xi(O, L), () => ({ domNode: s() })), Me(
        (O) => {
          ce(_, "data-id", O), it(_, "position", "absolute"), it(_, "transform", g(S)), it(_, "z-index", g(l));
        },
        [
          () => g(M).reduce((O, L) => `${O}${L.id} `, "").trim()
        ],
        me
      ), D(N, _);
    };
    Ce(A, (N) => {
      s() && g(c) && g(M) && N(I);
    });
  }
  D(e, T);
  var H = ue({
    get nodeId() {
      return d();
    },
    set nodeId(N) {
      d(N), p();
    },
    get position() {
      return f();
    },
    set position(N) {
      f(N), p();
    },
    get align() {
      return v();
    },
    set align(N) {
      v(N), p();
    },
    get offset() {
      return y();
    },
    set offset(N) {
      y(N), p();
    },
    get isVisible() {
      return x();
    },
    set isVisible(N) {
      x(N), p();
    }
  });
  return r(), H;
}
ie(
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
  const { nodes: t, nodeLookup: n } = Fe();
  let r = [], o = !0;
  return Kn([t, n], ([, a], i) => {
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
    (!qp(l, r) || o) && (r = l, i(u ? l : l[0] ?? null), o = !1);
  });
}
const Hl = "tinyflow-component";
class $m {
  constructor(t) {
    if (Et(this, "options"), Et(this, "rootEl"), Et(this, "svelteFlowInstance"), typeof t.element != "string" && !(t.element instanceof Element))
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
    const t = document.createElement(Hl);
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
    const n = document.createElement(Hl);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const Cm = () => {
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
}, Jo = Cm();
var km = /* @__PURE__ */ re("<button><!></button>");
function je(e, t) {
  le(t, !0);
  const n = m(t, "children", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = km();
  let a;
  var i = Y(o);
  return lr(i, () => n() ?? dt), W(o), Me(() => a = an(o, a, {
    type: "button",
    ...r,
    class: `tf-btn nopan nodrag ${t.class ?? ""}`
  })), D(e, o), ue({
    get children() {
      return n();
    },
    set children(s) {
      n(s), p();
    }
  });
}
ie(je, { children: {} }, [], [], !0);
var _m = /* @__PURE__ */ re("<input>");
function rd(e, t) {
  le(t, !0);
  const n = /* @__PURE__ */ yt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = _m();
  no(r);
  let o;
  Me(() => o = an(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), D(e, r), ue();
}
ie(rd, {}, [], [], !0);
var Sm = /* @__PURE__ */ re("<input>");
function xt(e, t) {
  le(t, !0);
  const n = /* @__PURE__ */ yt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Sm();
  no(r);
  let o;
  Me(() => o = an(r, o, {
    type: "text",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), D(e, r), ue();
}
ie(xt, {}, [], [], !0);
var Mm = /* @__PURE__ */ re("<textarea></textarea>");
function kt(e, t) {
  le(t, !0);
  const n = /* @__PURE__ */ yt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Mm();
  hv(r);
  let o;
  Me(() => o = an(r, o, {
    ...n,
    class: `tf-textarea nodrag ${t.class ?? ""}`
  })), D(e, r), ue();
}
ie(kt, {}, [], [], !0);
var Hm = /* @__PURE__ */ re('<div role="button"><!></div>'), Em = /* @__PURE__ */ re("<div></div>");
function od(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = nt(n, ["items", "onChange", "activeIndex"]);
  le(t, !1);
  let o = m(t, "items", 28, () => []), a = m(t, "onChange", 12, () => {
  }), i = m(t, "activeIndex", 12, 0);
  function s(c, d) {
    var f;
    i(d), (f = a()) == null || f(c, d);
  }
  Oe();
  var l = Em();
  let u;
  return Pt(l, 5, o, uo, (c, d, f) => {
    var v = Hm();
    ce(v, "tabindex", f), v.__click = () => s(g(d), f), v.__keydown = (C) => {
      (C.key === "Enter" || C.key === " ") && (C.preventDefault(), s(g(d), f));
    };
    var y = Y(v);
    {
      var x = (C) => {
        var h = Ie();
        Me(() => Bt(h, g(d).label)), D(C, h);
      }, b = (C) => {
        var h = Qe(), $ = xe(h);
        lr($, () => g(d).label ?? dt), D(C, h);
      };
      Ce(y, (C) => {
        typeof g(d).label == "string" ? C(x) : C(b, !1);
      });
    }
    W(v), Me(() => Ct(v, 1, `tf-tabs-item ${(f === i() ? "active" : "") ?? ""}`)), D(c, v);
  }), W(l), Me(() => u = an(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), D(e, l), ue({
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
Oi(["click", "keydown"]);
ie(od, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var Vm = (e, t, n) => t(g(n)), zm = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(g(n)));
}, Nm = /* @__PURE__ */ re('<span class="tf-collapse-item-title-icon"><!></span>'), Pm = /* @__PURE__ */ re('<div class="tf-collapse-item-description"><!></div>'), Om = /* @__PURE__ */ re('<div class="tf-collapse-item-content"><!></div>'), Tm = /* @__PURE__ */ re('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), Dm = /* @__PURE__ */ re("<div></div>");
const Lm = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function id(e, t) {
  le(t, !0), Je(e, Lm);
  let n = m(t, "items", 7), r = m(t, "onChange", 7), o = m(t, "activeKeys", 31, () => Lt([]));
  function a(s) {
    var l;
    o().includes(s.key) ? o(o().filter((u) => u !== s.key)) : (o().push(s.key), o(o())), (l = r()) == null || l(s, o());
  }
  var i = Dm();
  return Pt(i, 21, n, uo, (s, l, u) => {
    var c = Tm(), d = Y(c);
    ce(d, "tabindex", u), d.__click = [Vm, a, l], d.__keydown = [zm, a, l];
    var f = Y(d);
    {
      var v = (w) => {
        var k = Nm(), S = Y(k);
        Xn(S, {
          get target() {
            return g(l).icon;
          }
        }), W(k), D(w, k);
      };
      Ce(f, (w) => {
        g(l).icon && w(v);
      });
    }
    var y = Z(f, 2);
    Xn(y, {
      get target() {
        return g(l).title;
      }
    });
    var x = Z(y, 2);
    W(d);
    var b = Z(d, 2);
    {
      var C = (w) => {
        var k = Pm(), S = Y(k);
        Xn(S, {
          get target() {
            return g(l).description;
          }
        }), W(k), D(w, k);
      };
      Ce(b, (w) => {
        g(l).description && w(C);
      });
    }
    var h = Z(b, 2);
    {
      var $ = (w) => {
        var k = Om(), S = Y(k);
        Xn(S, {
          get target() {
            return g(l).content;
          }
        }), W(k), D(w, k);
      };
      Ce(h, (w) => {
        o().includes(g(l).key) && w($);
      });
    }
    W(c), Me((w) => Ct(x, 1, `tf-collapse-item-title-arrow ${w ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(g(l).key) ? "rotate-90" : ""
    ]), D(s, c);
  }), W(i), Me(() => {
    ce(i, "style", t.style), Ct(i, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), D(e, i), ue({
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
Oi(["click", "keydown"]);
ie(id, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Xn(e, t) {
  le(t, !0);
  let n = m(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = Qe(), o = xe(r);
  {
    var a = (s) => {
      var l = Qe(), u = xe(l);
      lr(u, () => n() ?? dt), D(s, l);
    }, i = (s) => {
      var l = Qe(), u = xe(l);
      Ga(u, n), D(s, l);
    };
    Ce(o, (s) => {
      typeof n() == "function" ? s(a) : s(i, !1);
    });
  }
  return D(e, r), ue({
    get target() {
      return n();
    },
    set target(s) {
      n(s), p();
    }
  });
}
ie(Xn, { target: {} }, [], [], !0);
var Am = (e, t, n) => t(g(n)), Im = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), Zm = /* @__PURE__ */ re('<div class="tf-select-content-children"><!></div>'), Bm = /* @__PURE__ */ re('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), Rm = /* @__PURE__ */ re('<div class="tf-select-content nopan nodrag"><!></div>'), Wm = /* @__PURE__ */ re("<!> <!>", 1), Xm = /* @__PURE__ */ re('<div class="tf-select-input-placeholder"> </div>'), Ym = /* @__PURE__ */ re('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), Km = /* @__PURE__ */ re("<div><!></div>");
function xn(e, t) {
  le(t, !0);
  const n = ($, w = dt) => {
    var k = Qe(), S = xe(k);
    Pt(S, 19, w, (M, V) => `${V}_${M.value}`, (M, V) => {
      var z = Bm(), P = xe(z);
      P.__click = [Am, x, V];
      var T = Y(P), A = Y(T);
      {
        var I = (E) => {
          var O = Im();
          D(E, O);
        };
        Ce(A, (E) => {
          g(V).children && g(V).children.length > 0 && E(I);
        });
      }
      W(T);
      var H = Z(T, 2);
      Xn(H, {
        get target() {
          return g(V).label;
        }
      }), W(P);
      var N = Z(P, 2);
      {
        var _ = (E) => {
          var O = Zm(), L = Y(O);
          n(L, () => g(V).children), W(O), D(E, O);
        };
        Ce(N, (E) => {
          g(V).children && g(V).children.length > 0 && (l() || c().includes(g(V).value)) && E(_);
        });
      }
      D(M, z);
    }), D($, k);
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
  ]), v = /* @__PURE__ */ Ee(() => {
    const $ = [], w = (k) => {
      for (let S of k)
        i().length > 0 ? i().includes(S.value) && $.push(S) : s().includes(S.value) && $.push(S), S.children && S.children.length > 0 && w(S.children);
    };
    return w(r()), $;
  }), y;
  function x($) {
    var w, k;
    if ($.children && $.children.length > 0) {
      (w = o()) == null || w($);
      return;
    } else
      y == null || y.hide(), (k = a()) == null || k($);
  }
  var b = Km();
  let C;
  var h = Y(b);
  return wn(
    Oo(h, {
      floating: ($) => {
        var w = Rm(), k = Y(w);
        n(k, r), W(w), D($, w);
      },
      children: ($, w) => {
        var k = Ym();
        let S;
        var M = Y(k);
        Pt(
          M,
          23,
          () => g(v),
          (V, z) => `${z}_${V.value}`,
          (V, z, P) => {
            var T = Qe(), A = xe(T);
            {
              var I = (N) => {
                var _ = Qe(), E = xe(_);
                {
                  var O = (L) => {
                    Xn(L, {
                      get target() {
                        return g(z).label;
                      }
                    });
                  };
                  Ce(E, (L) => {
                    g(P) === 0 && L(O);
                  });
                }
                D(N, _);
              }, H = (N) => {
                var _ = Wm(), E = xe(_);
                Xn(E, {
                  get target() {
                    return g(z).label;
                  }
                });
                var O = Z(E, 2);
                {
                  var L = (B) => {
                    var K = Ie(",");
                    D(B, K);
                  };
                  Ce(O, (B) => {
                    g(P) < g(v).length - 1 && B(L);
                  });
                }
                D(N, _);
              };
              Ce(A, (N) => {
                u() ? N(H, !1) : N(I);
              });
            }
            D(V, T);
          },
          (V) => {
            var z = Xm(), P = Y(z, !0);
            W(z), Me(() => Bt(P, d())), D(V, z);
          }
        ), W(M), ze(2), W(k), Me(() => S = an(k, S, {
          class: "tf-select-input nopan nodrag",
          ...f
        })), D($, k);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    ($) => y = $,
    () => y
  ), W(b), Me(() => C = an(b, C, {
    ...f,
    class: `tf-select ${f.class ?? ""}`
  })), D(e, b), ue({
    get items() {
      return r();
    },
    set items($) {
      r($), p();
    },
    get onExpand() {
      return o();
    },
    set onExpand($) {
      o($), p();
    },
    get onSelect() {
      return a();
    },
    set onSelect($) {
      a($), p();
    },
    get value() {
      return i();
    },
    set value($ = []) {
      i($), p();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue($ = []) {
      s($), p();
    },
    get expandAll() {
      return l();
    },
    set expandAll($ = !0) {
      l($), p();
    },
    get multiple() {
      return u();
    },
    set multiple($ = !1) {
      u($), p();
    },
    get expandValue() {
      return c();
    },
    set expandValue($ = []) {
      c($), p();
    },
    get placeholder() {
      return d();
    },
    set placeholder($) {
      d($), p();
    }
  });
}
Oi(["click"]);
ie(
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
const wo = Math.min, Sr = Math.max, Ci = Math.round, pn = (e) => ({
  x: e,
  y: e
}), qm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, jm = {
  start: "end",
  end: "start"
};
function Ea(e, t, n) {
  return Sr(e, wo(t, n));
}
function zo(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function fr(e) {
  return e.split("-")[0];
}
function No(e) {
  return e.split("-")[1];
}
function ad(e) {
  return e === "x" ? "y" : "x";
}
function vs(e) {
  return e === "y" ? "height" : "width";
}
function Dr(e) {
  return ["top", "bottom"].includes(fr(e)) ? "y" : "x";
}
function gs(e) {
  return ad(Dr(e));
}
function Fm(e, t, n) {
  n === void 0 && (n = !1);
  const r = No(e), o = gs(e), a = vs(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = ki(i)), [i, ki(i)];
}
function Gm(e) {
  const t = ki(e);
  return [Va(e), t, Va(t)];
}
function Va(e) {
  return e.replace(/start|end/g, (t) => jm[t]);
}
function Um(e, t, n) {
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
function Jm(e, t, n, r) {
  const o = No(e);
  let a = Um(fr(e), n === "start", r);
  return o && (a = a.map((i) => i + "-" + o), t && (a = a.concat(a.map(Va)))), a;
}
function ki(e) {
  return e.replace(/left|right|bottom|top/g, (t) => qm[t]);
}
function Qm(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function sd(e) {
  return typeof e != "number" ? Qm(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function _i(e) {
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
function El(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = Dr(t), i = gs(t), s = vs(i), l = fr(t), u = a === "y", c = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[s] / 2 - o[s] / 2;
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
  switch (No(t)) {
    case "start":
      v[i] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      v[i] += f * (n && u ? -1 : 1);
      break;
  }
  return v;
}
const e2 = async (e, t, n) => {
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
  } = El(u, r, l), f = r, v = {}, y = 0;
  for (let x = 0; x < s.length; x++) {
    const {
      name: b,
      fn: C
    } = s[x], {
      x: h,
      y: $,
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
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = h ?? c, d = $ ?? d, v = {
      ...v,
      [b]: {
        ...v[b],
        ...w
      }
    }, k && y <= 50 && (y++, typeof k == "object" && (k.placement && (f = k.placement), k.rects && (u = k.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : k.rects), {
      x: c,
      y: d
    } = El(u, f, l)), x = -1);
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
  } = zo(t, e), y = sd(v), x = s[f ? d === "floating" ? "reference" : "floating" : d], b = _i(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(x))) == null || n ? x : x.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), C = d === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, h = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), $ = await (a.isElement == null ? void 0 : a.isElement(h)) ? await (a.getScale == null ? void 0 : a.getScale(h)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = _i(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: C,
    offsetParent: h,
    strategy: l
  }) : C);
  return {
    top: (b.top - w.top + y.top) / $.y,
    bottom: (w.bottom - b.bottom + y.bottom) / $.y,
    left: (b.left - w.left + y.left) / $.x,
    right: (w.right - b.right + y.right) / $.x
  };
}
const t2 = (e) => ({
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
    } = zo(e, t) || {};
    if (u == null)
      return {};
    const d = sd(c), f = {
      x: n,
      y: r
    }, v = gs(o), y = vs(v), x = await i.getDimensions(u), b = v === "y", C = b ? "top" : "left", h = b ? "bottom" : "right", $ = b ? "clientHeight" : "clientWidth", w = a.reference[y] + a.reference[v] - f[v] - a.floating[y], k = f[v] - a.reference[v], S = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let M = S ? S[$] : 0;
    (!M || !await (i.isElement == null ? void 0 : i.isElement(S))) && (M = s.floating[$] || a.floating[y]);
    const V = w / 2 - k / 2, z = M / 2 - x[y] / 2 - 1, P = wo(d[C], z), T = wo(d[h], z), A = P, I = M - x[y] - T, H = M / 2 - x[y] / 2 + V, N = Ea(A, H, I), _ = !l.arrow && No(o) != null && H !== N && a.reference[y] / 2 - (H < A ? P : T) - x[y] / 2 < 0, E = _ ? H < A ? H - A : H - I : 0;
    return {
      [v]: f[v] + E,
      data: {
        [v]: N,
        centerOffset: H - N - E,
        ..._ && {
          alignmentOffset: E
        }
      },
      reset: _
    };
  }
}), n2 = function(e) {
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
        fallbackAxisSideDirection: y = "none",
        flipAlignment: x = !0,
        ...b
      } = zo(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const C = fr(o), h = Dr(s), $ = fr(s) === s, w = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), k = f || ($ || !x ? [ki(s)] : Gm(s)), S = y !== "none";
      !f && S && k.push(...Jm(s, x, y, w));
      const M = [s, ...k], V = await ld(t, b), z = [];
      let P = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (c && z.push(V[C]), d) {
        const H = Fm(o, i, w);
        z.push(V[H[0]], V[H[1]]);
      }
      if (P = [...P, {
        placement: o,
        overflows: z
      }], !z.every((H) => H <= 0)) {
        var T, A;
        const H = (((T = a.flip) == null ? void 0 : T.index) || 0) + 1, N = M[H];
        if (N)
          return {
            data: {
              index: H,
              overflows: P
            },
            reset: {
              placement: N
            }
          };
        let _ = (A = P.filter((E) => E.overflows[0] <= 0).sort((E, O) => E.overflows[1] - O.overflows[1])[0]) == null ? void 0 : A.placement;
        if (!_)
          switch (v) {
            case "bestFit": {
              var I;
              const E = (I = P.filter((O) => {
                if (S) {
                  const L = Dr(O.placement);
                  return L === h || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  L === "y";
                }
                return !0;
              }).map((O) => [O.placement, O.overflows.filter((L) => L > 0).reduce((L, B) => L + B, 0)]).sort((O, L) => O[1] - L[1])[0]) == null ? void 0 : I[0];
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
async function r2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = fr(n), s = No(n), l = Dr(n) === "y", u = ["left", "top"].includes(i) ? -1 : 1, c = a && l ? -1 : 1, d = zo(t, e);
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
const o2 = function(e) {
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
      } = t, l = await r2(t, e);
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
}, i2 = function(e) {
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
          fn: (b) => {
            let {
              x: C,
              y: h
            } = b;
            return {
              x: C,
              y: h
            };
          }
        },
        ...l
      } = zo(e, t), u = {
        x: n,
        y: r
      }, c = await ld(t, l), d = Dr(fr(o)), f = ad(d);
      let v = u[f], y = u[d];
      if (a) {
        const b = f === "y" ? "top" : "left", C = f === "y" ? "bottom" : "right", h = v + c[b], $ = v - c[C];
        v = Ea(h, v, $);
      }
      if (i) {
        const b = d === "y" ? "top" : "left", C = d === "y" ? "bottom" : "right", h = y + c[b], $ = y - c[C];
        y = Ea(h, y, $);
      }
      const x = s.fn({
        ...t,
        [f]: v,
        [d]: y
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
function Xr(e) {
  return ud(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Rt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function An(e) {
  var t;
  return (t = (ud(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ud(e) {
  return Yi() ? e instanceof Node || e instanceof Rt(e).Node : !1;
}
function sn(e) {
  return Yi() ? e instanceof Element || e instanceof Rt(e).Element : !1;
}
function bn(e) {
  return Yi() ? e instanceof HTMLElement || e instanceof Rt(e).HTMLElement : !1;
}
function Vl(e) {
  return !Yi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Rt(e).ShadowRoot;
}
function Po(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = ln(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function a2(e) {
  return ["table", "td", "th"].includes(Xr(e));
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
function hs(e) {
  const t = ps(), n = sn(e) ? ln(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function s2(e) {
  let t = Qn(e);
  for (; bn(t) && !Lr(t); ) {
    if (hs(t))
      return t;
    if (Ki(t))
      return null;
    t = Qn(t);
  }
  return null;
}
function ps() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Lr(e) {
  return ["html", "body", "#document"].includes(Xr(e));
}
function ln(e) {
  return Rt(e).getComputedStyle(e);
}
function qi(e) {
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
    Vl(e) && e.host || // Fallback.
    An(e)
  );
  return Vl(t) ? t.host : t;
}
function cd(e) {
  const t = Qn(e);
  return Lr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : bn(t) && Po(t) ? t : cd(t);
}
function dd(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = cd(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = Rt(o);
  return a ? (za(i), t.concat(i, i.visualViewport || [], Po(o) ? o : [], [])) : t.concat(o, dd(o, []));
}
function za(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function fd(e) {
  const t = ln(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = bn(e), a = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, s = Ci(n) !== a || Ci(r) !== i;
  return s && (n = a, r = i), {
    width: n,
    height: r,
    $: s
  };
}
function vd(e) {
  return sn(e) ? e : e.contextElement;
}
function Mr(e) {
  const t = vd(e);
  if (!bn(t))
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
const l2 = /* @__PURE__ */ pn(0);
function gd(e) {
  const t = Rt(e);
  return !ps() || !t.visualViewport ? l2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function u2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Rt(e) ? !1 : t;
}
function xo(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = vd(e);
  let i = pn(1);
  t && (r ? sn(r) && (i = Mr(r)) : i = Mr(e));
  const s = u2(a, n, r) ? gd(a) : pn(0);
  let l = (o.left + s.x) / i.x, u = (o.top + s.y) / i.y, c = o.width / i.x, d = o.height / i.y;
  if (a) {
    const f = Rt(a), v = r && sn(r) ? Rt(r) : r;
    let y = f, x = za(y);
    for (; x && r && v !== y; ) {
      const b = Mr(x), C = x.getBoundingClientRect(), h = ln(x), $ = C.left + (x.clientLeft + parseFloat(h.paddingLeft)) * b.x, w = C.top + (x.clientTop + parseFloat(h.paddingTop)) * b.y;
      l *= b.x, u *= b.y, c *= b.x, d *= b.y, l += $, u += w, y = Rt(x), x = za(y);
    }
  }
  return _i({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function ms(e, t) {
  const n = qi(e).scrollLeft;
  return t ? t.left + n : xo(An(e)).left + n;
}
function hd(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    ms(e, r)
  )), a = r.top + t.scrollTop;
  return {
    x: o,
    y: a
  };
}
function c2(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", i = An(r), s = t ? Ki(t.floating) : !1;
  if (r === i || s && a)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = pn(1);
  const c = pn(0), d = bn(r);
  if ((d || !d && !a) && ((Xr(r) !== "body" || Po(i)) && (l = qi(r)), bn(r))) {
    const v = xo(r);
    u = Mr(r), c.x = v.x + r.clientLeft, c.y = v.y + r.clientTop;
  }
  const f = i && !d && !a ? hd(i, l, !0) : pn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + f.y
  };
}
function d2(e) {
  return Array.from(e.getClientRects());
}
function f2(e) {
  const t = An(e), n = qi(e), r = e.ownerDocument.body, o = Sr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Sr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + ms(e);
  const s = -n.scrollTop;
  return ln(r).direction === "rtl" && (i += Sr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: i,
    y: s
  };
}
function v2(e, t) {
  const n = Rt(e), r = An(e), o = n.visualViewport;
  let a = r.clientWidth, i = r.clientHeight, s = 0, l = 0;
  if (o) {
    a = o.width, i = o.height;
    const u = ps();
    (!u || u && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s,
    y: l
  };
}
function g2(e, t) {
  const n = xo(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = bn(e) ? Mr(e) : pn(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, l = o * a.x, u = r * a.y;
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
    r = v2(e, n);
  else if (t === "document")
    r = f2(An(e));
  else if (sn(t))
    r = g2(t, n);
  else {
    const o = gd(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return _i(r);
}
function pd(e, t) {
  const n = Qn(e);
  return n === t || !sn(n) || Lr(n) ? !1 : ln(n).position === "fixed" || pd(n, t);
}
function h2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = dd(e, []).filter((s) => sn(s) && Xr(s) !== "body"), o = null;
  const a = ln(e).position === "fixed";
  let i = a ? Qn(e) : e;
  for (; sn(i) && !Lr(i); ) {
    const s = ln(i), l = hs(i);
    !l && s.position === "fixed" && (o = null), (a ? !l && !o : !l && s.position === "static" && o && ["absolute", "fixed"].includes(o.position) || Po(i) && !l && pd(e, i)) ? r = r.filter((u) => u !== i) : o = s, i = Qn(i);
  }
  return t.set(e, r), r;
}
function p2(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? Ki(t) ? [] : h2(t, this._c) : [].concat(n), r], i = a[0], s = a.reduce((l, u) => {
    const c = zl(t, u, o);
    return l.top = Sr(c.top, l.top), l.right = wo(c.right, l.right), l.bottom = wo(c.bottom, l.bottom), l.left = Sr(c.left, l.left), l;
  }, zl(t, i, o));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
function m2(e) {
  const {
    width: t,
    height: n
  } = fd(e);
  return {
    width: t,
    height: n
  };
}
function y2(e, t, n) {
  const r = bn(t), o = An(t), a = n === "fixed", i = xo(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = pn(0);
  if (r || !r && !a)
    if ((Xr(t) !== "body" || Po(o)) && (s = qi(t)), r) {
      const f = xo(t, !0, a, t);
      l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop;
    } else o && (l.x = ms(o));
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
function Nl(e, t) {
  if (!bn(e) || ln(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return An(e) === n && (n = n.ownerDocument.body), n;
}
function md(e, t) {
  const n = Rt(e);
  if (Ki(e))
    return n;
  if (!bn(e)) {
    let o = Qn(e);
    for (; o && !Lr(o); ) {
      if (sn(o) && !sa(o))
        return o;
      o = Qn(o);
    }
    return n;
  }
  let r = Nl(e, t);
  for (; r && a2(r) && sa(r); )
    r = Nl(r, t);
  return r && Lr(r) && sa(r) && !hs(r) ? n : r || s2(e) || n;
}
const w2 = async function(e) {
  const t = this.getOffsetParent || md, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: y2(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function x2(e) {
  return ln(e).direction === "rtl";
}
const b2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: c2,
  getDocumentElement: An,
  getClippingRect: p2,
  getOffsetParent: md,
  getElementRects: w2,
  getClientRects: d2,
  getDimensions: m2,
  getScale: Mr,
  isElement: sn,
  isRTL: x2
}, $2 = o2, C2 = i2, k2 = n2, _2 = t2, S2 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: b2,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return e2(e, t, {
    ...o,
    platform: a
  });
}, M2 = ({
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
    S2(e, u, {
      placement: r,
      middleware: [
        $2(o),
        // 手动偏移配置
        k2(a),
        //自动翻转
        C2(i),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [_2({ element: c })] : []
      ]
    }).then(({ x: C, y: h, placement: $, middlewareData: w }) => {
      if (Object.assign(u.style, {
        left: `${C}px`,
        top: `${h}px`
      }), l) {
        const { x: k, y: S } = w.arrow, M = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[$.split("-")[0]];
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
  function v() {
    u.style.display = "block", u.style.visibility = "block", u.style.position = "absolute", l && (c.style.display = "block"), f = !0, d();
  }
  function y() {
    u.style.display = "none", l && (c.style.display = "none"), f = !1;
  }
  function x(C) {
    C.stopPropagation(), f ? y() : v();
  }
  function b(C) {
    u.contains(C.target) || y();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((C) => {
    e.addEventListener(C, x);
  }), document.addEventListener("click", b), {
    destroy() {
      t.forEach((C) => {
        e.removeEventListener(C, x);
      }), document.removeEventListener("click", b);
    },
    hide() {
      y();
    },
    isVisible() {
      return f;
    }
  };
};
var H2 = /* @__PURE__ */ re('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function Oo(e, t) {
  le(t, !0);
  const n = m(t, "children", 7), r = m(t, "floating", 7), o = m(t, "placement", 7, "bottom");
  let a, i, s;
  Xt(() => (s = M2({
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
  var u = H2(), c = Y(u), d = Y(c);
  lr(d, n), W(c), wn(c, (y) => a = y, () => a);
  var f = Z(c, 2), v = Y(f);
  return lr(v, r), W(f), wn(f, (y) => i = y, () => i), W(u), D(e, u), ue({
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
ie(Oo, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Ge(e, t) {
  le(t, !0);
  const n = m(t, "children", 7), r = m(t, "level", 7, 1), o = m(t, "mt", 7), a = m(t, "mb", 7);
  var i = Qe(), s = xe(i);
  return kv(s, () => `h${r()}`, !1, (l, u) => {
    let c;
    Me(() => c = an(
      l,
      c,
      {
        class: "tf-heading",
        style: `margin-top:${o() || "0"};margin-bottom:${a() || "0"}`
      },
      void 0,
      l.namespaceURI === Al,
      l.nodeName.includes("-")
    ));
    var d = Qe(), f = xe(d);
    lr(f, () => n() ?? dt), D(u, d);
  }), D(e, i), ue({
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
ie(Ge, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var E2 = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const V2 = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function ji(e, t) {
  le(t, !0), Je(e, V2);
  const n = /* @__PURE__ */ yt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  je(e, ut(() => n, {
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
ie(ji, {}, [], [], !0);
const z2 = () => {
  const e = Fe();
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
}, N2 = () => {
  const { nodes: e, nodeLookup: t } = Fe();
  return {
    copyNode: (n) => {
      var r;
      const o = (r = q(t).get(n)) == null ? void 0 : r.internals.userNode;
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
var P2 = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), O2 = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), T2 = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), D2 = /* @__PURE__ */ re('<div class="tf-node-toolbar svelte-44dmwv"><!> <!> <!></div>'), L2 = /* @__PURE__ */ re('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const A2 = {
  hash: "svelte-44dmwv",
  code: ".tf-node-toolbar.svelte-44dmwv {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}"
};
function cn(e, t) {
  le(t, !0), Je(e, A2);
  const n = m(t, "data", 7), r = m(t, "id", 7, ""), o = m(t, "icon", 7), a = m(t, "handle", 7), i = m(t, "children", 7), s = m(t, "allowExecute", 7, !0), l = m(t, "allowCopy", 7, !0), u = m(t, "allowDelete", 7, !0), c = m(t, "showSourceHandle", 7, !0), d = m(t, "showTargetHandle", 7, !0), f = m(t, "onCollapse", 7);
  let v = n().expand ? ["key"] : [];
  const { updateNodeData: y } = Ot(), x = [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: i()
    }
  ], { deleteNode: b } = z2(), { copyNode: C } = N2();
  var h = L2(), $ = xe(h);
  {
    var w = (I) => {
      nd(I, {
        get position() {
          return Se.Top;
        },
        align: "end",
        children: (H, N) => {
          var _ = D2(), E = Y(_);
          {
            var O = (te) => {
              je(te, {
                class: "tf-node-toolbar-item",
                children: (U, X) => {
                  var ae = P2();
                  D(U, ae);
                },
                $$slots: { default: !0 }
              });
            };
            Ce(E, (te) => {
              s() && te(O);
            });
          }
          var L = Z(E, 2);
          {
            var B = (te) => {
              je(te, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  C(r());
                },
                children: (U, X) => {
                  var ae = O2();
                  D(U, ae);
                },
                $$slots: { default: !0 }
              });
            };
            Ce(L, (te) => {
              l() && te(B);
            });
          }
          var K = Z(L, 2);
          {
            var j = (te) => {
              je(te, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  b(r());
                },
                children: (U, X) => {
                  var ae = T2();
                  D(U, ae);
                },
                $$slots: { default: !0 }
              });
            };
            Ce(K, (te) => {
              u() && te(j);
            });
          }
          W(_), D(H, _);
        },
        $$slots: { default: !0 }
      });
    };
    Ce($, (I) => {
      (s() || l() || u()) && I(w);
    });
  }
  var k = Z($, 2), S = Z(Y(k), 2), M = Y(S);
  id(M, {
    items: x,
    activeKeys: v,
    onChange: (I, H) => {
      var N;
      y(r(), { expand: H == null ? void 0 : H.includes("key") }), (N = f()) == null || N(H != null && H.includes("key") ? "key" : "");
    }
  }), W(S), W(k);
  var V = Z(k, 2);
  {
    var z = (I) => {
      Jn(I, {
        type: "target",
        get position() {
          return Se.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    Ce(V, (I) => {
      d() && I(z);
    });
  }
  var P = Z(V, 2);
  {
    var T = (I) => {
      Jn(I, {
        type: "source",
        get position() {
          return Se.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    Ce(P, (I) => {
      c() && I(T);
    });
  }
  var A = Z(P, 2);
  return lr(A, () => a() ?? dt), D(e, h), ue({
    get data() {
      return n();
    },
    set data(I) {
      n(I), p();
    },
    get id() {
      return r();
    },
    set id(I = "") {
      r(I), p();
    },
    get icon() {
      return o();
    },
    set icon(I) {
      o(I), p();
    },
    get handle() {
      return a();
    },
    set handle(I) {
      a(I), p();
    },
    get children() {
      return i();
    },
    set children(I) {
      i(I), p();
    },
    get allowExecute() {
      return s();
    },
    set allowExecute(I = !0) {
      s(I), p();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(I = !0) {
      l(I), p();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(I = !0) {
      u(I), p();
    },
    get showSourceHandle() {
      return c();
    },
    set showSourceHandle(I = !0) {
      c(I), p();
    },
    get showTargetHandle() {
      return d();
    },
    set showTargetHandle(I = !0) {
      d(I), p();
    },
    get onCollapse() {
      return f();
    },
    set onCollapse(I) {
      f(I), p();
    }
  });
}
ie(
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
], I2 = [
  {
    value: "ref",
    label: "引用"
  },
  {
    value: "input",
    label: "固定值"
  }
];
var Z2 = /* @__PURE__ */ re('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), B2 = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), R2 = /* @__PURE__ */ re('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const W2 = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function wd(e, t) {
  le(t, !0), Je(e, W2);
  const [n, r] = et(), o = () => J(g(l), "$node", n), a = m(t, "parameter", 7), i = m(t, "index", 7);
  let s = gt(), l = /* @__PURE__ */ Ee(() => pr(s)), u = /* @__PURE__ */ Ee(() => {
    var V, z;
    return {
      ...a(),
      ...(z = (V = o()) == null ? void 0 : V.data) == null ? void 0 : z.parameters[i()]
    };
  });
  const { updateNodeData: c } = Ot(), d = (V) => {
    const z = V.target.value;
    c(s, (P) => {
      let T = P.data.parameters;
      return T[i()].name = z, { parameters: T };
    });
  }, f = (V) => {
    const z = V.target.checked;
    c(s, (P) => {
      let T = P.data.parameters;
      return T[i()].required = z, { parameters: T };
    });
  }, v = (V) => {
    const z = V.value;
    z && c(s, (P) => {
      let T = P.data.parameters;
      return T[i()].dataType = z, { parameters: T };
    });
  };
  let y;
  const x = () => {
    c(s, (V) => {
      let z = V.data.parameters;
      return z.splice(i(), 1), { parameters: [...z] };
    }), y == null || y.hide();
  };
  var b = R2(), C = xe(b), h = Y(C);
  xt(h, {
    style: "width: 100%;",
    get value() {
      return g(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), W(C);
  var $ = Z(C, 2), w = Y($);
  rd(w, {
    get checked() {
      return g(u).required;
    },
    onchange: f
  }), W($);
  var k = Z($, 2), S = Y(k);
  wn(
    Oo(S, {
      placement: "bottom",
      floating: (V) => {
        var z = Z2(), P = Y(z), T = Z(Y(P));
        const A = /* @__PURE__ */ Ee(() => g(u).dataType ? [g(u).dataType] : ["String"]);
        xn(T, {
          items: yd,
          style: "width: 100%",
          onSelect: v,
          get value() {
            return g(A);
          }
        }), W(P);
        var I = Z(P, 2), H = Z(Y(I));
        kt(H, { rows: 1, style: "width: 100%;" }), W(I);
        var N = Z(I, 2), _ = Z(Y(N));
        kt(_, { rows: 3, style: "width: 100%;" }), W(N);
        var E = Z(N, 2), O = Y(E);
        je(O, {
          onclick: x,
          children: (L, B) => {
            ze();
            var K = Ie("删除");
            D(L, K);
          },
          $$slots: { default: !0 }
        }), W(E), W(z), D(V, z);
      },
      children: (V, z) => {
        je(V, {
          class: "input-btn-more",
          children: (P, T) => {
            var A = B2();
            D(P, A);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (V) => y = V,
    () => y
  ), W(k), D(e, b);
  var M = ue({
    get parameter() {
      return a();
    },
    set parameter(V) {
      a(V), p();
    },
    get index() {
      return i();
    },
    set index(V) {
      i(V), p();
    }
  });
  return r(), M;
}
ie(wd, { parameter: {}, index: {} }, [], [], !0);
var X2 = /* @__PURE__ */ re('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), Y2 = /* @__PURE__ */ re('<div class="none-params svelte-3n0wca">无输入参数</div>'), K2 = /* @__PURE__ */ re('<div class="input-container svelte-3n0wca"><!> <!></div>');
const q2 = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function xd(e, t) {
  le(t, !0), Je(e, q2);
  const [n, r] = et(), o = () => J(g(i), "$node", n);
  let a = gt(), i = /* @__PURE__ */ Ee(() => pr(a)), s = /* @__PURE__ */ Ee(() => {
    var f, v;
    return [...((v = (f = o()) == null ? void 0 : f.data) == null ? void 0 : v.parameters) || []];
  });
  var l = K2(), u = Y(l);
  {
    var c = (f) => {
      var v = X2();
      ze(4), D(f, v);
    };
    Ce(u, (f) => {
      g(s).length !== 0 && f(c);
    });
  }
  var d = Z(u, 2);
  Pt(
    d,
    19,
    () => g(s),
    (f) => f.id,
    (f, v, y) => {
      wd(f, {
        get parameter() {
          return g(v);
        },
        get index() {
          return g(y);
        }
      });
    },
    (f) => {
      var v = Y2();
      D(f, v);
    }
  ), W(l), D(e, l), ue(), r();
}
ie(xd, {}, [], [], !0);
const bd = (e) => {
  !e || e.length == 0 || e.forEach((t) => {
    t.id || (t.id = Ar()), bd(t.children);
  });
}, _n = () => {
  const { updateNodeData: e } = Ot();
  return {
    addParameter: (t, n = "parameters", r) => {
      bd(r == null ? void 0 : r.children);
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
var j2 = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), F2 = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), G2 = /* @__PURE__ */ re('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const U2 = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function $d(e, t) {
  le(t, !0), Je(e, U2);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: a } = _n();
  return cn(e, ut(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    icon: (i) => {
      var s = j2();
      D(i, s);
    },
    children: (i, s) => {
      var l = G2(), u = xe(l), c = Y(u);
      Ge(c, {
        level: 3,
        children: (v, y) => {
          ze();
          var x = Ie("输入参数");
          D(v, x);
        },
        $$slots: { default: !0 }
      });
      var d = Z(c, 2);
      je(d, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          a(o);
        },
        children: (v, y) => {
          var x = F2();
          D(v, x);
        },
        $$slots: { default: !0 }
      }), W(u);
      var f = Z(u, 2);
      xd(f, {}), D(i, l);
    },
    $$slots: { icon: !0, default: !0 }
  })), ue({
    get data() {
      return n();
    },
    set data(i) {
      n(i), p();
    }
  });
}
ie($d, { data: {} }, [], [], !0);
const Cd = (e, t, n) => {
  for (let r of n)
    r.target === t && r.source && (e.push(r.source), Cd(e, r.source, n));
}, Pl = (e, t) => {
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
}, J2 = (e = !1) => {
  const t = gt(), n = pr(t), { nodes: r, edges: o } = Fe();
  return Kn([n, r, o], ([a, i, s]) => {
    const l = [];
    if (e) {
      for (let u of i)
        if (u.parentId === a.id) {
          const c = Pl(u, u.parentId === a.id);
          c && l.push(c);
        }
    } else {
      const u = [];
      Cd(u, t, s);
      for (let c of i)
        if (u.includes(c.id)) {
          const d = Pl(c, c.parentId === a.id);
          d && l.push(d);
        }
    }
    return l;
  });
};
var Q2 = /* @__PURE__ */ re('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), ey = /* @__PURE__ */ re('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const ty = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function kd(e, t) {
  le(t, !0), Je(e, ty);
  const [n, r] = et(), o = () => J(g(c), "$node", n), a = () => J(w, "$selectItems", n);
  Xt(() => {
    g(d).refType || C({ value: "ref" });
  });
  const i = m(t, "parameter", 7), s = m(t, "index", 7), l = m(t, "dataKeyName", 7);
  let u = gt(), c = /* @__PURE__ */ Ee(() => pr(u)), d = /* @__PURE__ */ Ee(() => {
    var N;
    return {
      ...i(),
      ...(N = o()) == null ? void 0 : N.data[l()][s()]
    };
  });
  const { updateNodeData: f } = Ot(), v = (N, _) => {
    f(u, (E) => {
      let O = E.data[l()];
      return O[s()] = { ...O[s()], [N]: _ }, { [l()]: O };
    });
  }, y = (N) => {
    const _ = N.target.value;
    v("name", _);
  }, x = (N) => {
    const _ = N.target.value;
    v("value", _);
  }, b = (N) => {
    const _ = N.value;
    v("ref", _);
  }, C = (N) => {
    const _ = N.value;
    v("refType", _);
  };
  let h;
  const $ = () => {
    f(u, (N) => {
      let _ = N.data[l()];
      return _.splice(s(), 1), { [l()]: [..._] };
    }), h == null || h.hide();
  }, w = J2();
  var k = ey(), S = xe(k), M = Y(S);
  xt(M, {
    style: "width: 100%;",
    get value() {
      return g(d).name;
    },
    placeholder: "请输入参数名称",
    oninput: y
  }), W(S);
  var V = Z(S, 2), z = Y(V);
  {
    var P = (N) => {
      xt(N, {
        get value() {
          return g(d).value;
        },
        placeholder: "请输入参数值",
        oninput: x
      });
    }, T = (N) => {
      const _ = /* @__PURE__ */ Ee(() => [g(d).ref]);
      xn(N, {
        get items() {
          return a();
        },
        style: "width: 100%",
        defaultValue: ["ref"],
        get value() {
          return g(_);
        },
        expandAll: !0,
        onSelect: b
      });
    };
    Ce(z, (N) => {
      g(d).refType === "input" ? N(P) : N(T, !1);
    });
  }
  W(V);
  var A = Z(V, 2), I = Y(A);
  wn(
    Oo(I, {
      placement: "bottom",
      floating: (N) => {
        var _ = Q2(), E = Y(_), O = Z(Y(E));
        const L = /* @__PURE__ */ Ee(() => g(d).refType ? [g(d).refType] : []);
        xn(O, {
          items: I2,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return g(L);
          },
          onSelect: C
        }), W(E);
        var B = Z(E, 2), K = Z(Y(B));
        kt(K, {
          rows: 1,
          style: "width: 100%;",
          onchange: (ae) => {
            const $e = ae.target.value;
            v("defaultValue", $e);
          }
        }), W(B);
        var j = Z(B, 2), te = Z(Y(j));
        kt(te, {
          rows: 3,
          style: "width: 100%;",
          onchange: (ae) => {
            const $e = ae.target.value;
            v("description", $e);
          }
        }), W(j);
        var U = Z(j, 2), X = Y(U);
        je(X, {
          onclick: $,
          children: (ae, $e) => {
            ze();
            var ke = Ie("删除");
            D(ae, ke);
          },
          $$slots: { default: !0 }
        }), W(U), W(_), D(N, _);
      },
      children: (N, _) => {
        ji(N, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (N) => h = N,
    () => h
  ), W(A), D(e, k);
  var H = ue({
    get parameter() {
      return i();
    },
    set parameter(N) {
      i(N), p();
    },
    get index() {
      return s();
    },
    set index(N) {
      s(N), p();
    },
    get dataKeyName() {
      return l();
    },
    set dataKeyName(N) {
      l(N), p();
    }
  });
  return r(), H;
}
ie(kd, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var ny = /* @__PURE__ */ re('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), ry = /* @__PURE__ */ re('<div class="none-params svelte-1sm1mgi"> </div>'), oy = /* @__PURE__ */ re('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const iy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Zt(e, t) {
  le(t, !0), Je(e, iy);
  const [n, r] = et(), o = () => J(g(l), "$node", n), a = m(t, "noneParameterText", 7, "无输入参数"), i = m(t, "dataKeyName", 7, "parameters");
  let s = gt(), l = /* @__PURE__ */ Ee(() => pr(s)), u = /* @__PURE__ */ Ee(() => {
    var x;
    return [...((x = o()) == null ? void 0 : x.data[i()]) || []];
  });
  var c = oy(), d = Y(c);
  {
    var f = (x) => {
      var b = ny();
      ze(4), D(x, b);
    };
    Ce(d, (x) => {
      g(u).length !== 0 && x(f);
    });
  }
  var v = Z(d, 2);
  Pt(
    v,
    19,
    () => g(u),
    (x) => x.id,
    (x, b, C) => {
      kd(x, {
        get parameter() {
          return g(b);
        },
        get index() {
          return g(C);
        },
        get dataKeyName() {
          return i();
        }
      });
    },
    (x) => {
      var b = ry(), C = Y(b, !0);
      W(b), Me(() => Bt(C, a())), D(x, b);
    }
  ), W(c), D(e, c);
  var y = ue({
    get noneParameterText() {
      return a();
    },
    set noneParameterText(x = "无输入参数") {
      a(x), p();
    },
    get dataKeyName() {
      return i();
    },
    set dataKeyName(x = "parameters") {
      i(x), p();
    }
  });
  return r(), y;
}
ie(Zt, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var ay = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), sy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ly = /* @__PURE__ */ re('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const uy = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function _d(e, t) {
  le(t, !0), Je(e, uy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: a } = _n();
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
        D(i, s);
      },
      children: (i, s) => {
        var l = ly(), u = xe(l), c = Y(u);
        Ge(c, {
          level: 3,
          children: (v, y) => {
            ze();
            var x = Ie("输出参数");
            D(v, x);
          },
          $$slots: { default: !0 }
        });
        var d = Z(c, 2);
        je(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "outputDefs");
          },
          children: (v, y) => {
            var x = sy();
            D(v, x);
          },
          $$slots: { default: !0 }
        }), W(u);
        var f = Z(u, 2);
        Zt(f, {
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
      n(i), p();
    }
  });
}
ie(_d, { data: {} }, [], [], !0);
const mr = () => sr("tinyflow_options");
var cy = /* @__PURE__ */ be('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), dy = /* @__PURE__ */ re('<div class="input-more-item svelte-1cfeest"><!></div>'), fy = /* @__PURE__ */ re('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), vy = /* @__PURE__ */ re('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const gy = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Sd(e, t) {
  le(t, !0), Je(e, gy);
  const [n, r] = et(), o = () => J(g(u), "$node", n), a = m(t, "parameter", 7), i = m(t, "position", 7), s = m(t, "dataKeyName", 7);
  let l = gt(), u = /* @__PURE__ */ Ee(() => pr(l)), c = /* @__PURE__ */ Ee(() => {
    var E;
    let O = (E = o()) == null ? void 0 : E.data[s()], L;
    if (O && i().length > 0) {
      let B = O;
      for (let K = 0; K < i().length; K++) {
        const j = i()[K];
        K == i().length - 1 ? L = B[j] : B = B[j].children;
      }
    }
    return { ...a(), ...L };
  });
  const { updateNodeData: d } = Ot(), f = (E, O) => {
    d(l, (L) => {
      const B = L.data[s()];
      if (B && i().length > 0) {
        let K = B;
        for (let j = 0; j < i().length; j++) {
          const te = i()[j];
          j == i().length - 1 ? K[te] = { ...K[te], [E]: O } : K = B[te].children;
        }
      }
      return { [s()]: B };
    });
  }, v = (E) => {
    const O = E.target.value;
    f("name", O);
  }, y = (E) => {
    const O = E.value;
    f("dataType", O);
  };
  let x;
  const b = () => {
    d(l, (E) => {
      let O = E.data[s()];
      if (O && i().length > 0) {
        let L = O;
        for (let B = 0; B < i().length; B++) {
          const K = i()[B];
          B == i().length - 1 ? L.splice(K, 1) : L = L[K].children;
        }
      }
      return { [s()]: [...O] };
    }), x == null || x.hide();
  }, C = () => {
    d(l, (E) => {
      let O = E.data[s()];
      if (O && i().length > 0) {
        let L = O;
        for (let B = 0; B < i().length; B++) {
          const K = i()[B];
          B == i().length - 1 ? L[K].children ? L[K].children.push({
            id: Ar(),
            name: "newParam",
            dataType: "String"
          }) : L[K].children = [
            {
              id: Ar(),
              name: "newParam",
              dataType: "String"
            }
          ] : L = L[K].children;
        }
      }
      return { [s()]: [...O] };
    });
  };
  var h = vy(), $ = xe(h), w = Y($);
  {
    var k = (E) => {
      var O = Qe(), L = xe(O);
      Pt(L, 17, i, uo, (B, K) => {
        ze();
        var j = Ie(" ");
        D(B, j);
      }), D(E, O);
    };
    Ce(w, (E) => {
      i().length > 1 && E(k);
    });
  }
  var S = Z(w, 2);
  const M = /* @__PURE__ */ Ee(() => g(c).nameDisabled === !0);
  xt(S, {
    style: "width: 100%;",
    get value() {
      return g(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: v,
    get disabled() {
      return g(M);
    }
  }), W($);
  var V = Z($, 2), z = Y(V);
  const P = /* @__PURE__ */ Ee(() => g(c).dataType ? [g(c).dataType] : []), T = /* @__PURE__ */ Ee(() => g(c).dataTypeDisabled === !0);
  xn(z, {
    items: yd,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return g(P);
    },
    get disabled() {
      return g(T);
    },
    onSelect: y
  });
  var A = Z(z, 2);
  {
    var I = (E) => {
      je(E, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: C,
        children: (O, L) => {
          var B = cy();
          D(O, B);
        },
        $$slots: { default: !0 }
      });
    };
    Ce(A, (E) => {
      (g(c).dataType === "Object" || g(c).dataType === "Array") && g(c).addChildDisabled !== !0 && E(I);
    });
  }
  W(V);
  var H = Z(V, 2), N = Y(H);
  wn(
    Oo(N, {
      placement: "bottom",
      floating: (E) => {
        var O = fy(), L = Y(O), B = Z(Y(L));
        kt(B, {
          rows: 1,
          style: "width: 100%;",
          onchange: (X) => {
            const ae = X.target.value;
            f("defaultValue", ae);
          }
        }), W(L);
        var K = Z(L, 2), j = Z(Y(K));
        kt(j, {
          rows: 3,
          style: "width: 100%;",
          onchange: (X) => {
            const ae = X.target.value;
            f("description", ae);
          }
        }), W(K);
        var te = Z(K, 2);
        {
          var U = (X) => {
            var ae = dy(), $e = Y(ae);
            je($e, {
              onclick: b,
              children: (ke, he) => {
                ze();
                var ve = Ie("删除");
                D(ke, ve);
              },
              $$slots: { default: !0 }
            }), W(ae), D(X, ae);
          };
          Ce(te, (X) => {
            g(c).deleteDisabled !== !0 && X(U);
          });
        }
        W(O), D(E, O);
      },
      children: (E, O) => {
        ji(E, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (E) => x = E,
    () => x
  ), W(H), D(e, h);
  var _ = ue({
    get parameter() {
      return a();
    },
    set parameter(E) {
      a(E), p();
    },
    get position() {
      return i();
    },
    set position(E) {
      i(E), p();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(E) {
      s(E), p();
    }
  });
  return r(), _;
}
ie(Sd, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var hy = /* @__PURE__ */ re("<!> <!>", 1), py = /* @__PURE__ */ re('<div class="none-params svelte-1sm1mgi"> </div>'), my = /* @__PURE__ */ re('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), yy = /* @__PURE__ */ re('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const wy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function In(e, t) {
  le(t, !0), Je(e, wy);
  const [n, r] = et(), o = () => J(g(u), "$node", n), a = (b, C = dt, h = dt) => {
    var $ = Qe(), w = xe($);
    Pt(
      w,
      19,
      C,
      (k) => `${k.id}_${k.children ? k.children.length : 0}`,
      (k, S, M) => {
        var V = hy(), z = xe(V);
        const P = /* @__PURE__ */ Ee(() => [...h(), g(M)]);
        Sd(z, {
          get parameter() {
            return g(S);
          },
          get position() {
            return g(P);
          },
          get dataKeyName() {
            return s();
          }
        });
        var T = Z(z, 2);
        {
          var A = (I) => {
            var H = /* @__PURE__ */ me(() => [...h(), g(M)]);
            a(I, () => g(S).children, () => g(H));
          };
          Ce(T, (I) => {
            g(S).children && I(A);
          });
        }
        D(k, V);
      },
      (k) => {
        var S = Qe(), M = xe(S);
        {
          var V = (z) => {
            var P = py(), T = Y(P, !0);
            W(P), Me(() => Bt(T, i())), D(z, P);
          };
          Ce(M, (z) => {
            h().length === 0 && z(V);
          });
        }
        D(k, S);
      }
    ), D(b, $);
  }, i = m(t, "noneParameterText", 7, "无输出参数"), s = m(t, "dataKeyName", 7, "outputDefs");
  let l = gt(), u = /* @__PURE__ */ Ee(() => pr(l)), c = /* @__PURE__ */ Ee(() => {
    var b;
    return [...((b = o()) == null ? void 0 : b.data[s()]) || []];
  });
  var d = yy(), f = Y(d);
  {
    var v = (b) => {
      var C = my();
      ze(4), D(b, C);
    };
    Ce(f, (b) => {
      g(c).length !== 0 && b(v);
    });
  }
  var y = Z(f, 2);
  a(y, () => g(c) || [], () => []), W(d), D(e, d);
  var x = ue({
    get noneParameterText() {
      return i();
    },
    set noneParameterText(b = "无输出参数") {
      i(b), p();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(b = "outputDefs") {
      s(b), p();
    }
  });
  return r(), x;
}
ie(In, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var xy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), by = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), $y = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Cy = /* @__PURE__ */ re('<div class="heading svelte-wn2kra"><!> <!></div> <!> <!> <div class="setting-title svelte-wn2kra">模型</div> <div class="setting-item svelte-wn2kra"><!> <!></div> <div class="setting-title svelte-wn2kra">采样参数</div> <div class="setting-item svelte-wn2kra"><div class="slider-container svelte-wn2kra"><label class="svelte-wn2kra"> </label> <input type="range" min="0" max="1" step="0.1" class="svelte-wn2kra"></div></div> <div class="setting-item svelte-wn2kra"><div class="slider-container svelte-wn2kra"><label class="svelte-wn2kra"> </label> <input type="range" min="0" max="1" step="0.1" class="svelte-wn2kra"></div></div> <div class="setting-item svelte-wn2kra"><div class="slider-container svelte-wn2kra"><label class="svelte-wn2kra"> </label> <input type="range" min="0" max="100" step="1" class="svelte-wn2kra"></div></div> <div class="setting-title svelte-wn2kra">系统提示词</div> <div class="setting-item svelte-wn2kra"><!></div> <div class="setting-title svelte-wn2kra">用户提示词</div> <div class="setting-item svelte-wn2kra"><!></div> <div class="heading svelte-wn2kra"><!> <!></div> <!>', 1);
const ky = {
  hash: "svelte-wn2kra",
  code: `.heading.svelte-wn2kra {display:flex;margin-bottom:10px;}.setting-title.svelte-wn2kra {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-wn2kra {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}
    /* 新增样式 */.slider-container.svelte-wn2kra {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-wn2kra label:where(.svelte-wn2kra) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-wn2kra {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-wn2kra::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Md(e, t) {
  le(t, !0), Je(e, ky);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: a } = _n(), i = mr();
  let s = ar(Lt([]));
  Xt(async () => {
    var u, c;
    const d = await ((c = (u = i.provider) == null ? void 0 : u.llm) == null ? void 0 : c.call(u));
    g(s).push(...d || []);
  });
  const { updateNodeData: l } = Ot();
  return cn(e, ut(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = xy();
        D(u, c);
      },
      children: (u, c) => {
        var d = Cy(), f = xe(d), v = Y(f);
        Ge(v, {
          level: 3,
          children: (ve, ne) => {
            ze();
            var pe = Ie("输入参数");
            D(ve, pe);
          },
          $$slots: { default: !0 }
        });
        var y = Z(v, 2);
        je(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (ve, ne) => {
            var pe = by();
            D(ve, pe);
          },
          $$slots: { default: !0 }
        }), W(f);
        var x = Z(f, 2);
        Zt(x, {});
        var b = Z(x, 2);
        Ge(b, {
          level: 3,
          mt: "10px",
          children: (ve, ne) => {
            ze();
            var pe = Ie("模型设置");
            D(ve, pe);
          },
          $$slots: { default: !0 }
        });
        var C = Z(b, 4), h = Y(C);
        const $ = /* @__PURE__ */ Ee(() => n().llmId ? [n().llmId] : []);
        xn(h, {
          get items() {
            return g(s);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (ve) => {
            const ne = ve.value;
            l(o, () => ({ llmId: ne }));
          },
          get value() {
            return g($);
          }
        });
        var w = Z(h, 2);
        ji(w, {}), W(C);
        var k = Z(C, 4), S = Y(k), M = Y(S), V = Y(M);
        W(M);
        var z = Z(M, 2);
        no(z), W(S), W(k);
        var P = Z(k, 2), T = Y(P), A = Y(T), I = Y(A);
        W(A);
        var H = Z(A, 2);
        no(H), W(T), W(P);
        var N = Z(P, 2), _ = Y(N), E = Y(_), O = Y(E);
        W(E);
        var L = Z(E, 2);
        no(L), W(_), W(N);
        var B = Z(N, 4), K = Y(B);
        const j = /* @__PURE__ */ Ee(() => n().systemPrompt || "");
        kt(K, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return g(j);
          },
          oninput: (ve) => {
            l(o, { systemPrompt: ve.target.value });
          }
        }), W(B);
        var te = Z(B, 4), U = Y(te);
        const X = /* @__PURE__ */ Ee(() => n().userPrompt || "");
        kt(U, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return g(X);
          },
          oninput: (ve) => {
            l(o, { userPrompt: ve.target.value });
          }
        }), W(te);
        var ae = Z(te, 2), $e = Y(ae);
        Ge($e, {
          level: 3,
          mt: "10px",
          children: (ve, ne) => {
            ze();
            var pe = Ie("输出参数");
            D(ve, pe);
          },
          $$slots: { default: !0 }
        });
        var ke = Z($e, 2);
        je(ke, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "outputDefs");
          },
          children: (ve, ne) => {
            var pe = $y();
            D(ve, pe);
          },
          $$slots: { default: !0 }
        }), W(ae);
        var he = Z(ae, 2);
        In(he, {}), Me(() => {
          Bt(V, `Temperature: ${n().temperature ?? 0.5}`), Gi(z, n().temperature ?? 0.5), Bt(I, `Top P: ${n().topP ?? 0.9}`), Gi(H, n().topP ?? 0.9), Bt(O, `Top K: ${n().topK ?? 50}`), Gi(L, n().topK ?? 50);
        }), Re("mousedown", z, Ui(function(ve) {
          Te.call(this, t, ve);
        })), Re("input", z, (ve) => l(o, { temperature: parseFloat(ve.target.value) })), Re("mousedown", H, Ui(function(ve) {
          Te.call(this, t, ve);
        })), Re("input", H, (ve) => l(o, { topP: parseFloat(ve.target.value) })), Re("mousedown", L, Ui(function(ve) {
          Te.call(this, t, ve);
        })), Re("input", L, (ve) => l(o, { topK: parseInt(ve.target.value) })), D(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue({
    get data() {
      return n();
    },
    set data(u) {
      n(u), p();
    }
  });
}
ie(Md, { data: {} }, [], [], !0);
var _y = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Sy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), My = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Hy = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const Ey = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Hd(e, t) {
  le(t, !0), Je(e, Ey);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  Xt(() => {
    n().engine || i(o, () => ({ engine: "qlexpress" }));
  });
  const o = gt(), { addParameter: a } = _n(), { updateNodeData: i } = Ot(), s = [
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
        var u = _y();
        D(l, u);
      },
      children: (l, u) => {
        var c = Hy(), d = xe(c), f = Y(d);
        Ge(f, {
          level: 3,
          children: (P, T) => {
            ze();
            var A = Ie("输入参数");
            D(P, A);
          },
          $$slots: { default: !0 }
        });
        var v = Z(f, 2);
        je(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (P, T) => {
            var A = Sy();
            D(P, A);
          },
          $$slots: { default: !0 }
        }), W(d);
        var y = Z(d, 2);
        Zt(y, {});
        var x = Z(y, 2);
        Ge(x, {
          level: 3,
          mt: "10px",
          children: (P, T) => {
            ze();
            var A = Ie("代码");
            D(P, A);
          },
          $$slots: { default: !0 }
        });
        var b = Z(x, 4), C = Y(b);
        const h = /* @__PURE__ */ Ee(() => n().engine ? [n().engine] : ["qlexpress"]);
        xn(C, {
          items: s,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (P) => {
            const T = P.value;
            i(o, () => ({ engine: T }));
          },
          get value() {
            return g(h);
          }
        }), W(b);
        var $ = Z(b, 4), w = Y($);
        const k = /* @__PURE__ */ Ee(() => n().code || "");
        kt(w, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (P) => {
            i(o, () => ({ code: P.target.value }));
          },
          get value() {
            return g(k);
          }
        }), W($);
        var S = Z($, 2), M = Y(S);
        Ge(M, {
          level: 3,
          mt: "10px",
          children: (P, T) => {
            ze();
            var A = Ie("输出参数");
            D(P, A);
          },
          $$slots: { default: !0 }
        });
        var V = Z(M, 2);
        je(V, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "outputDefs");
          },
          children: (P, T) => {
            var A = My();
            D(P, A);
          },
          $$slots: { default: !0 }
        }), W(S);
        var z = Z(S, 2);
        In(z, {}), D(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue({
    get data() {
      return n();
    },
    set data(l) {
      n(l), p();
    }
  });
}
ie(Hd, { data: {} }, [], [], !0);
var Vy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), zy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ny = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Py = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Ed(e, t) {
  le(t, !0), Je(e, Py);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: a } = _n(), { updateNodeData: i } = Ot();
  return Un(() => {
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
        var l = Vy();
        D(s, l);
      },
      children: (s, l) => {
        var u = Ny(), c = xe(u), d = Y(c);
        Ge(d, {
          level: 3,
          children: (k, S) => {
            ze();
            var M = Ie("输入参数");
            D(k, M);
          },
          $$slots: { default: !0 }
        });
        var f = Z(d, 2);
        je(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (k, S) => {
            var M = zy();
            D(k, M);
          },
          $$slots: { default: !0 }
        }), W(c);
        var v = Z(c, 2);
        Zt(v, {});
        var y = Z(v, 2);
        Ge(y, {
          level: 3,
          mt: "10px",
          children: (k, S) => {
            ze();
            var M = Ie("代码");
            D(k, M);
          },
          $$slots: { default: !0 }
        });
        var x = Z(y, 4), b = Y(x);
        const C = /* @__PURE__ */ Ee(() => n().template || "");
        kt(b, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: (k) => {
            i(o, () => ({ template: k.target.value }));
          },
          get value() {
            return g(C);
          }
        }), W(x);
        var h = Z(x, 2), $ = Y(h);
        Ge($, {
          level: 3,
          mt: "10px",
          children: (k, S) => {
            ze();
            var M = Ie("输出参数");
            D(k, M);
          },
          $$slots: { default: !0 }
        }), W(h);
        var w = Z(h, 2);
        In(w, {}), D(s, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue({
    get data() {
      return n();
    },
    set data(s) {
      n(s), p();
    }
  });
}
ie(Ed, { data: {} }, [], [], !0);
var Oy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), Ty = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Dy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ly = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ay = /* @__PURE__ */ re('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), Iy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Zy = /* @__PURE__ */ re('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), By = /* @__PURE__ */ re('<div style="width: 100%"><!></div>'), Ry = /* @__PURE__ */ re('<div style="width: 100%"><!></div>'), Wy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Xy = /* @__PURE__ */ re('<div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1vtcqdz"><!> <!></div> <!> <div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="radio-group svelte-1vtcqdz"><label class="svelte-1vtcqdz"><!>none</label> <label class="svelte-1vtcqdz"><!>form-data</label> <label class="svelte-1vtcqdz"><!>x-www-form-urlencoded</label> <label class="svelte-1vtcqdz"><!>json</label> <label class="svelte-1vtcqdz"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1vtcqdz"><!> <!></div> <!>', 1);
const Yy = {
  hash: "svelte-1vtcqdz",
  code: ".heading.svelte-1vtcqdz {display:flex;margin-bottom:10px;}.radio-group.svelte-1vtcqdz {display:flex;margin:10px 0;}.radio-group.svelte-1vtcqdz label:where(.svelte-1vtcqdz) {display:flex;font-size:14px;}"
};
function Vd(e, t) {
  le(t, !0), Je(e, Yy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  Xt(() => {
    n().method || s(a, () => ({ method: "get" }));
  });
  const o = [
    { value: "get", label: "GET" },
    { value: "post", label: "POST" },
    { value: "put", label: "PUT" },
    { value: "delete", label: "DELETE" },
    { value: "head", label: "HEAD" },
    { value: "patch", label: "PATCH" }
  ], a = gt(), { addParameter: i } = _n(), { updateNodeData: s } = Ot();
  return cn(e, ut(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Oy();
        D(l, u);
      },
      children: (l, u) => {
        var c = Xy(), d = xe(c), f = Y(d), v = Y(f);
        const y = /* @__PURE__ */ Ee(() => n().method ? [n().method] : ["get"]);
        xn(v, {
          items: o,
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (fe) => {
            const se = fe.value;
            s(a, () => ({ method: se }));
          },
          get value() {
            return g(y);
          }
        }), W(f);
        var x = Z(f, 2), b = Y(x);
        const C = /* @__PURE__ */ Ee(() => n().url || "");
        xt(b, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (fe) => {
            s(a, () => ({ url: fe.target.value }));
          },
          get value() {
            return g(C);
          }
        }), W(x), W(d);
        var h = Z(d, 2), $ = Y(h);
        Ge($, {
          level: 3,
          children: (fe, se) => {
            ze();
            var _e = Ie("Http 头信息");
            D(fe, _e);
          },
          $$slots: { default: !0 }
        });
        var w = Z($, 2);
        je(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(a, "headers");
          },
          children: (fe, se) => {
            var _e = Ty();
            D(fe, _e);
          },
          $$slots: { default: !0 }
        }), W(h);
        var k = Z(h, 2);
        Zt(k, { dataKeyName: "headers" });
        var S = Z(k, 2), M = Y(S);
        Ge(M, {
          level: 3,
          children: (fe, se) => {
            ze();
            var _e = Ie("参数");
            D(fe, _e);
          },
          $$slots: { default: !0 }
        });
        var V = Z(M, 2);
        je(V, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(a, "urlParameters");
          },
          children: (fe, se) => {
            var _e = Dy();
            D(fe, _e);
          },
          $$slots: { default: !0 }
        }), W(S);
        var z = Z(S, 2);
        Zt(z, { dataKeyName: "urlParameters" });
        var P = Z(z, 2);
        Ge(P, {
          level: 3,
          mt: "10px",
          children: (fe, se) => {
            ze();
            var _e = Ie("Body");
            D(fe, _e);
          },
          $$slots: { default: !0 }
        });
        var T = Z(P, 2), A = Y(T), I = Y(A);
        const H = /* @__PURE__ */ Ee(() => !n().bodyType);
        xt(I, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return g(H);
          },
          onchange: (fe) => {
            var se;
            (se = fe.target) != null && se.checked && s(a, { bodyType: "" });
          }
        }), ze(), W(A);
        var N = Z(A, 2), _ = Y(N);
        const E = /* @__PURE__ */ Ee(() => n().bodyType === "form-data");
        xt(_, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return g(E);
          },
          onchange: (fe) => {
            var se;
            (se = fe.target) != null && se.checked && s(a, { bodyType: "form-data" });
          }
        }), ze(), W(N);
        var O = Z(N, 2), L = Y(O);
        const B = /* @__PURE__ */ Ee(() => n().bodyType === "x-www-form-urlencoded");
        xt(L, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return g(B);
          },
          onchange: (fe) => {
            var se;
            (se = fe.target) != null && se.checked && s(a, { bodyType: "x-www-form-urlencoded" });
          }
        }), ze(), W(O);
        var K = Z(O, 2), j = Y(K);
        const te = /* @__PURE__ */ Ee(() => n().bodyType === "json");
        xt(j, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return g(te);
          },
          onchange: (fe) => {
            var se;
            (se = fe.target) != null && se.checked && s(a, { bodyType: "json" });
          }
        }), ze(), W(K);
        var U = Z(K, 2), X = Y(U);
        const ae = /* @__PURE__ */ Ee(() => n().bodyType === "raw");
        xt(X, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return g(ae);
          },
          onchange: (fe) => {
            var se;
            (se = fe.target) != null && se.checked && s(a, { bodyType: "raw" });
          }
        }), ze(), W(U), W(T);
        var $e = Z(T, 2);
        {
          var ke = (fe) => {
            var se = Ay(), _e = xe(se), Pe = Y(_e);
            Ge(Pe, {
              level: 3,
              children: (tt, Q) => {
                ze();
                var Ne = Ie("参数");
                D(tt, Ne);
              },
              $$slots: { default: !0 }
            });
            var Ke = Z(Pe, 2);
            je(Ke, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                i(a, "fromData");
              },
              children: (tt, Q) => {
                var Ne = Ly();
                D(tt, Ne);
              },
              $$slots: { default: !0 }
            }), W(_e);
            var ct = Z(_e, 2);
            Zt(ct, { dataKeyName: "fromData" }), D(fe, se);
          };
          Ce($e, (fe) => {
            n().bodyType === "form-data" && fe(ke);
          });
        }
        var he = Z($e, 2);
        {
          var ve = (fe) => {
            var se = Zy(), _e = xe(se), Pe = Y(_e);
            Ge(Pe, {
              level: 3,
              children: (tt, Q) => {
                ze();
                var Ne = Ie("参数");
                D(tt, Ne);
              },
              $$slots: { default: !0 }
            });
            var Ke = Z(Pe, 2);
            je(Ke, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                i(a, "fromUrlencoded");
              },
              children: (tt, Q) => {
                var Ne = Iy();
                D(tt, Ne);
              },
              $$slots: { default: !0 }
            }), W(_e);
            var ct = Z(_e, 2);
            Zt(ct, { dataKeyName: "fromUrlencoded" }), D(fe, se);
          };
          Ce(he, (fe) => {
            n().bodyType === "x-www-form-urlencoded" && fe(ve);
          });
        }
        var ne = Z(he, 2);
        {
          var pe = (fe) => {
            var se = By(), _e = Y(se);
            kt(_e, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Pe) => {
                s(a, { bodyJson: Pe.target.value });
              }
            }), W(se), D(fe, se);
          };
          Ce(ne, (fe) => {
            n().bodyType === "json" && fe(pe);
          });
        }
        var Xe = Z(ne, 2);
        {
          var Ze = (fe) => {
            var se = Ry(), _e = Y(se);
            kt(_e, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Pe) => {
                s(a, { bodyRaw: Pe.target.value });
              }
            }), W(se), D(fe, se);
          };
          Ce(Xe, (fe) => {
            n().bodyType === "raw" && fe(Ze);
          });
        }
        var Be = Z(Xe, 2), ee = Y(Be);
        Ge(ee, {
          level: 3,
          mt: "10px",
          children: (fe, se) => {
            ze();
            var _e = Ie("输出参数");
            D(fe, _e);
          },
          $$slots: { default: !0 }
        });
        var Ye = Z(ee, 2);
        je(Ye, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(a, "outputDefs");
          },
          children: (fe, se) => {
            var _e = Wy();
            D(fe, _e);
          },
          $$slots: { default: !0 }
        }), W(Be);
        var Le = Z(Be, 2);
        In(Le, {}), D(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue({
    get data() {
      return n();
    },
    set data(l) {
      n(l), p();
    }
  });
}
ie(Vd, { data: {} }, [], [], !0);
var Ky = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), qy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), jy = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Fy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function zd(e, t) {
  le(t, !0), Je(e, Fy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: a } = _n(), i = mr();
  let s = ar(Lt([]));
  Xt(async () => {
    var u, c;
    const d = await ((c = (u = i.provider) == null ? void 0 : u.knowledge) == null ? void 0 : c.call(u));
    g(s).push(...d || []);
  });
  const { updateNodeData: l } = Ot();
  return Un(() => {
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
        var c = Ky();
        D(u, c);
      },
      children: (u, c) => {
        var d = jy(), f = xe(d), v = Y(f);
        Ge(v, {
          level: 3,
          children: (z, P) => {
            ze();
            var T = Ie("输入参数");
            D(z, T);
          },
          $$slots: { default: !0 }
        });
        var y = Z(v, 2);
        je(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (z, P) => {
            var T = qy();
            D(z, T);
          },
          $$slots: { default: !0 }
        }), W(f);
        var x = Z(f, 2);
        Zt(x, {});
        var b = Z(x, 2);
        Ge(b, {
          level: 3,
          mt: "10px",
          children: (z, P) => {
            ze();
            var T = Ie("知识库设置");
            D(z, T);
          },
          $$slots: { default: !0 }
        });
        var C = Z(b, 4), h = Y(C);
        const $ = /* @__PURE__ */ Ee(() => n().knowledgeId ? [n().knowledgeId] : []);
        xn(h, {
          get items() {
            return g(s);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (z) => {
            const P = z.value;
            l(o, () => ({ knowledgeId: P }));
          },
          get value() {
            return g($);
          }
        }), W(C);
        var w = Z(C, 4), k = Y(w);
        xt(k, { placeholder: "搜索的数据条数", style: "width: 100%" }), W(w);
        var S = Z(w, 2), M = Y(S);
        Ge(M, {
          level: 3,
          mt: "10px",
          children: (z, P) => {
            ze();
            var T = Ie("输出参数");
            D(z, T);
          },
          $$slots: { default: !0 }
        }), W(S);
        var V = Z(S, 2);
        In(V, {}), D(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue({
    get data() {
      return n();
    },
    set data(u) {
      n(u), p();
    }
  });
}
ie(zd, { data: {} }, [], [], !0);
var Gy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), Uy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Jy = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">API 服务商</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">API Key</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">其他参数</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Qy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Nd(e, t) {
  le(t, !0), Je(e, Qy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: a } = _n(), i = mr();
  let s = ar(Lt([]));
  Xt(async () => {
    var u;
    const c = await ((u = i.provider) == null ? void 0 : u.knowledge());
    g(s).push(...c || []);
  });
  const { updateNodeData: l } = Ot();
  return Un(() => {
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
        D(u, c);
      },
      children: (u, c) => {
        var d = Jy(), f = xe(d), v = Y(f);
        Ge(v, {
          level: 3,
          children: (N, _) => {
            ze();
            var E = Ie("输入参数");
            D(N, E);
          },
          $$slots: { default: !0 }
        });
        var y = Z(v, 2);
        je(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (N, _) => {
            var E = Uy();
            D(N, E);
          },
          $$slots: { default: !0 }
        }), W(f);
        var x = Z(f, 2);
        Zt(x, {});
        var b = Z(x, 2);
        Ge(b, {
          level: 3,
          mt: "10px",
          children: (N, _) => {
            ze();
            var E = Ie("搜索引擎设置");
            D(N, E);
          },
          $$slots: { default: !0 }
        });
        var C = Z(b, 4), h = Y(C);
        const $ = /* @__PURE__ */ Ee(() => n().knowledgeId ? [n().knowledgeId] : []);
        xn(h, {
          get items() {
            return g(s);
          },
          style: "width: 100%",
          placeholder: "请选择 API 服务商",
          onSelect: (N) => {
            const _ = N.value;
            l(o, () => ({ knowledgeId: _ }));
          },
          get value() {
            return g($);
          }
        }), W(C);
        var w = Z(C, 4), k = Y(w);
        xt(k, {
          placeholder: "请输入 API Key",
          style: "width: 100%"
        }), W(w);
        var S = Z(w, 4), M = Y(S);
        xt(M, { placeholder: "请输入关键字", style: "width: 100%" }), W(S);
        var V = Z(S, 4), z = Y(V);
        xt(z, { placeholder: "搜索的数据条数", style: "width: 100%" }), W(V);
        var P = Z(V, 4), T = Y(P);
        kt(T, {
          rows: 3,
          placeholder: "请输入其他参数（Property 格式）",
          style: "width: 100%"
        }), W(P);
        var A = Z(P, 2), I = Y(A);
        Ge(I, {
          level: 3,
          mt: "10px",
          children: (N, _) => {
            ze();
            var E = Ie("输出参数");
            D(N, E);
          },
          $$slots: { default: !0 }
        }), W(A);
        var H = Z(A, 2);
        In(H, {}), D(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue({
    get data() {
      return n();
    },
    set data(u) {
      n(u), p();
    }
  });
}
ie(Nd, { data: {} }, [], [], !0);
var ew = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), tw = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), nw = /* @__PURE__ */ re('<div class="heading svelte-md8tgj"><!> <!></div> <!> <div class="heading svelte-md8tgj"><!></div> <!>', 1);
const rw = {
  hash: "svelte-md8tgj",
  code: ".heading.svelte-md8tgj {display:flex;margin-bottom:10px;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function Pd(e, t) {
  le(t, !0), Je(e, rw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: a } = _n(), i = mr();
  let s = ar(Lt([]));
  return Xt(async () => {
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
        D(l, u);
      },
      handle: (l) => {
        Jn(l, {
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
          children: (h, $) => {
            ze();
            var w = Ie("循环变量");
            D(h, w);
          },
          $$slots: { default: !0 }
        });
        var v = Z(f, 2);
        je(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (h, $) => {
            var w = tw();
            D(h, w);
          },
          $$slots: { default: !0 }
        }), W(d);
        var y = Z(d, 2);
        Zt(y, {});
        var x = Z(y, 2), b = Y(x);
        Ge(b, {
          level: 3,
          mt: "10px",
          children: (h, $) => {
            ze();
            var w = Ie("输出参数");
            D(h, w);
          },
          $$slots: { default: !0 }
        }), W(x);
        var C = Z(x, 2);
        In(C, {}), D(l, c);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), ue({
    get data() {
      return n();
    },
    set data(l) {
      n(l), p();
    }
  });
}
ie(Pd, { data: {} }, [], [], !0);
const ow = {
  startNode: $d,
  codeNode: Hd,
  llmNode: Md,
  templateNode: Ed,
  httpNode: Vd,
  knowledgeNode: zd,
  searchEngineNode: Nd,
  loopNode: Pd,
  endNode: _d
};
var iw = /* @__PURE__ */ re("<!> ", 1);
function Na(e, t) {
  le(t, !0);
  const n = m(t, "icon", 7), r = m(t, "title", 7), o = m(t, "type", 7), a = m(t, "description", 7), i = m(t, "extra", 7);
  return je(e, {
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
      Ga(c, n);
      var d = Z(c);
      Me(() => Bt(d, ` ${r() ?? ""}`)), D(s, u);
    },
    $$slots: { default: !0 }
  }), ue({
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
ie(
  Na,
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
var aw = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), sw = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), lw = /* @__PURE__ */ re('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Od(e, t) {
  le(t, !0);
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
  ], i = [], s = mr().customNodes;
  if (s) {
    const b = Object.keys(s).sort((C, h) => (s[C].sortNo || 0) - (s[h].sortNo || 0));
    for (let C of b)
      i.push({
        icon: s[C].icon,
        title: s[C].title,
        type: C
      });
  }
  var l = lw(), u = Y(l), c = Y(u), d = Y(c);
  od(d, {
    style: "width: 100%",
    items: a,
    onChange: (b) => {
      F(n, Lt(b.value.toString()));
    }
  }), W(c);
  var f = Z(c, 2), v = Y(f);
  Pt(v, 21, () => o, uo, (b, C) => {
    Na(b, ut(() => g(C)));
  }), W(v);
  var y = Z(v, 2);
  Pt(y, 21, () => i, uo, (b, C) => {
    Na(b, ut(() => g(C)));
  }), W(y), W(f), W(u);
  var x = Z(u, 2);
  je(x, {
    onclick: () => {
      F(r, Lt(g(r) ? "" : "show"));
    },
    children: (b, C) => {
      var h = Qe(), $ = xe(h);
      {
        var w = (S) => {
          var M = aw();
          D(S, M);
        }, k = (S) => {
          var M = sw();
          D(S, M);
        };
        Ce($, (S) => {
          g(r) === "show" ? S(w) : S(k, !1);
        });
      }
      D(b, h);
    },
    $$slots: { default: !0 }
  }), W(l), Me(() => {
    Ct(l, 1, `tf-toolbar ${g(r) ?? ""}`), ce(v, "style", `display: ${(g(n) === "base" ? "flex" : "none") ?? ""}`), ce(y, "style", `display: ${(g(n) !== "base" ? "flex" : "none") ?? ""}`);
  }), D(e, l), ue();
}
ie(Od, {}, [], [], !0);
const uw = () => {
  const { nodeLookup: e } = Fe();
  return {
    getNode: (t) => {
      var n;
      return (n = q(e).get(t)) == null ? void 0 : n.internals.userNode;
    }
  };
}, cw = () => {
  const { nodes: e } = Fe();
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
  const { edges: e } = Fe();
  return {
    getEdgesByTarget: (t) => q(e).filter((n) => n.target === t)
  };
};
var fw = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), vw = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), gw = /* @__PURE__ */ re('<div class="heading svelte-c71dg3"><!> <!></div> <!> <div></div> <div class="heading svelte-c71dg3"><!> <!></div> <!>', 1);
const hw = {
  hash: "svelte-c71dg3",
  code: ".heading.svelte-c71dg3 {display:flex;margin-bottom:10px;}"
};
function Td(e, t) {
  var n;
  le(t, !0), Je(e, hw);
  const r = m(t, "data", 7), o = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), a = gt(), { addParameter: i } = _n(), s = Ot(), l = { ...o, id: a, data: r() }, u = document.createElement("div"), c = mr().customNodes[t.type];
  (n = c.render) == null || n.call(c, u, l, s);
  let d;
  Un(() => {
    r().expand && d && d.append(u);
  }), Un(() => {
    var v;
    r() && ((v = c.onUpdate) == null || v.call(c, u, { ...l, data: r() }));
  });
  const f = /* @__PURE__ */ Ee(() => ({
    ...r(),
    description: c.description
  }));
  return cn(e, ut(
    {
      get data() {
        return g(f);
      }
    },
    () => o,
    {
      icon: (v) => {
        var y = Qe(), x = xe(y);
        Ga(x, () => c.icon), D(v, y);
      },
      children: (v, y) => {
        var x = gw(), b = xe(x), C = Y(b);
        Ge(C, {
          level: 3,
          children: (z, P) => {
            ze();
            var T = Ie("输入参数");
            D(z, T);
          },
          $$slots: { default: !0 }
        });
        var h = Z(C, 2);
        je(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(a);
          },
          children: (z, P) => {
            var T = fw();
            D(z, T);
          },
          $$slots: { default: !0 }
        }), W(b);
        var $ = Z(b, 2);
        Zt($, {});
        var w = Z($, 2);
        wn(w, (z) => d = z, () => d);
        var k = Z(w, 2), S = Y(k);
        Ge(S, {
          level: 3,
          mt: "10px",
          children: (z, P) => {
            ze();
            var T = Ie("输出参数");
            D(z, T);
          },
          $$slots: { default: !0 }
        });
        var M = Z(S, 2);
        je(M, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(a, "outputDefs");
          },
          children: (z, P) => {
            var T = vw();
            D(z, T);
          },
          $$slots: { default: !0 }
        }), W(k);
        var V = Z(k, 2);
        In(V, {}), D(v, x);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue({
    get data() {
      return r();
    },
    set data(v) {
      r(v), p();
    }
  });
}
ie(Td, { data: {} }, [], [], !0);
var pw = /* @__PURE__ */ re('<div class="panel-content svelte-1oe15vw"><div>边属性设置</div> <div class="setting-title svelte-1oe15vw">边条件设置</div> <div class="setting-item"><!></div></div>'), mw = /* @__PURE__ */ re("<!> <!> <!> <!>", 1), yw = /* @__PURE__ */ re('<div style="position: relative; height: 100%; width: 100%"><!> <!></div>');
const ww = {
  hash: "svelte-1oe15vw",
  code: ".panel-content.svelte-1oe15vw {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-1oe15vw {margin:10px 0;font-size:12px;color:#999;}"
};
function Dd(e, t) {
  le(t, !0), Je(e, ww);
  const n = m(t, "onInit", 7), r = Ot();
  n()(r);
  let o = ar(!1);
  const a = (S) => {
    S.preventDefault(), S.dataTransfer && (S.dataTransfer.dropEffect = "move");
  }, i = (S) => {
    var M;
    S.preventDefault();
    const V = r.screenToFlowPosition({
      x: S.clientX - 250,
      y: S.clientY - 100
    }), z = (M = S.dataTransfer) == null ? void 0 : M.getData("application/tinyflow"), P = z ? JSON.parse(z) : {}, T = {
      id: `node_${Ar()}`,
      position: V,
      data: {},
      ...P
    };
    Jo.addNode(T), Jo.selectNodeOnly(T.id);
  }, { getNode: s } = uw(), l = (S) => {
    const M = s(S.source), V = s(S.target);
    if (S.sourceHandle === "loop_handle" || M.parentId) {
      const z = r.getEdges();
      for (let P of z)
        if (P.target === S.target) {
          const T = s(P.source);
          if (S.sourceHandle === "loop_handle" && T.parentId !== M.id || M.parentId && T.parentId !== M.parentId)
            return !1;
        }
    }
    return !(!M.parentId && V.parentId && V.parentId !== M.id);
  }, { ensureParentInNodesBefore: u } = cw(), c = (S, M) => {
    if (!M.isValid)
      return;
    const V = M.toNode;
    if (V.parentId)
      return;
    const z = M.fromNode, P = M.fromHandle, T = { position: { ...V.position } };
    if (P.id === "loop_handle" ? T.parentId = z.id : z.parentId && (T.parentId = z.parentId), T.parentId) {
      const A = s(T.parentId);
      T.position = {
        x: V.position.x - A.position.x,
        y: V.position.y - A.position.y
      }, u(T.parentId, V.id), r.updateNode(V.id, T);
    }
  }, { getEdgesByTarget: d } = dw(), f = (S) => {
    S.edges.forEach((M) => {
      const V = s(M.target);
      if (V.parentId) {
        const z = d(M.target), P = s(V.parentId);
        if (z.length === 0)
          r.updateNode(V.id, {
            parentId: void 0,
            position: {
              x: V.position.x + P.position.x,
              y: V.position.y + P.position.y
            }
          });
        else {
          let T = !1;
          for (let A = 0; A < z.length; A++) {
            const I = z[A], H = s(I.source);
            if (H.parentId || H.type === "loopNode") {
              T = !0;
              break;
            }
          }
          T || r.updateNode(V.id, {
            parentId: void 0,
            position: {
              x: V.position.x + P.position.x,
              y: V.position.y + P.position.y
            }
          });
        }
      }
    });
  }, v = (S, M) => {
    console.log("onconnectstart: ", S, M);
  }, y = (S) => {
    console.log("onconnect: ", S);
  }, x = {}, b = mr().customNodes;
  if (b)
    for (let S of Object.keys(b))
      x[S] = Td;
  var C = yw(), h = Y(C);
  Od(h, {});
  var $ = Z(h, 2);
  const w = /* @__PURE__ */ Ee(() => ({ ...ow, ...x })), k = /* @__PURE__ */ Ee(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: po.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  return Wc($, ut(
    {
      get nodeTypes() {
        return g(w);
      }
    },
    Jo,
    {
      class: "tinyflow-logo",
      isValidConnection: l,
      onconnectend: c,
      onconnectstart: v,
      onconnect: y,
      connectionRadius: 50,
      ondelete: f,
      onclick: (S) => {
        const M = S.target;
        M.classList.contains("svelte-flow__edge-interaction") || M.classList.contains("panel-content") || M.closest(".panel-content") || F(o, !1);
      },
      get defaultEdgeOptions() {
        return g(k);
      },
      $$events: {
        drop: i,
        dragover: a,
        edgeclick: () => {
          F(o, !0);
        }
      },
      children: (S, M) => {
        var V = mw(), z = xe(V);
        Qc(z, {});
        var P = Z(z, 2);
        Gc(P, {});
        var T = Z(P, 2);
        td(T, {});
        var A = Z(T, 2);
        {
          var I = (H) => {
            Vo(H, {
              children: (N, _) => {
                var E = pw(), O = Z(Y(E), 4), L = Y(O);
                kt(L, {
                  rows: 3,
                  placeholder: "请输入边条件",
                  style: "width: 100%",
                  oninput: (B) => {
                  }
                }), W(O), W(E), D(N, E);
              },
              $$slots: { default: !0 }
            });
          };
          Ce(A, (H) => {
            g(o) && H(I);
          });
        }
        D(S, V);
      },
      $$slots: { default: !0 }
    }
  )), W(C), D(e, C), ue({
    get onInit() {
      return n();
    },
    set onInit(S) {
      n(S), p();
    }
  });
}
ie(Dd, { onInit: {} }, [], [], !0);
function xw(e, t) {
  le(t, !0);
  const n = m(t, "options", 7), r = m(t, "onInit", 7), { data: o } = n();
  return Jo.init((o == null ? void 0 : o.nodes) || [], (o == null ? void 0 : o.edges) || []), Er("tinyflow_options", n()), Xc(e, {
    fitView: !0,
    children: (a, i) => {
      Dd(a, {
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
customElements.define("tinyflow-component", ie(xw, { options: {}, onInit: {} }, [], [], !1));
const Mw = /* @__PURE__ */ Jd({
  __name: "Tinyflow",
  props: {
    className: {},
    style: {},
    data: {},
    provider: {},
    customNodes: {}
  },
  setup(e, { expose: t }) {
    const n = e, r = Qd(null);
    let o = null;
    return ef(() => {
      r.value && (o = new $m({
        ...n,
        element: r.value
      }));
    }), tf(() => {
      o && (o.destroy(), o = null);
    }), t({
      getData: () => o ? o.getData() : (console.warn("Tinyflow instance is not initialized"), null)
    }), (i, s) => (rf(), nf("div", {
      ref_key: "divRef",
      ref: r,
      class: af(["tinyflow", i.className]),
      style: of(i.style)
    }, null, 6));
  }
});
export {
  Mw as Tinyflow
};
//# sourceMappingURL=index.js.map
