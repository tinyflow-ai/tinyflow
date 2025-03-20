var tf = Object.defineProperty;
var Na = (e) => {
  throw TypeError(e);
};
var nf = (e, t, n) => t in e ? tf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var wt = (e, t, n) => nf(e, typeof t != "symbol" ? t + "" : t, n), Ji = (e, t, n) => t.has(e) || Na("Cannot " + n);
var it = (e, t, n) => (Ji(e, t, "read from private field"), n ? n.call(e) : t.get(e)), rr = (e, t, n) => t.has(e) ? Na("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Ur = (e, t, n, r) => (Ji(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Ta = (e, t, n) => (Ji(e, t, "access private method"), n);
const rf = "5";
var Ol;
typeof window < "u" && ((Ol = window.__svelte ?? (window.__svelte = {})).v ?? (Ol.v = /* @__PURE__ */ new Set())).add(rf);
let Yr = !1, of = !1;
function sf() {
  Yr = !0;
}
sf();
const Is = 1, zs = 2, Il = 4, af = 8, lf = 16, uf = 1, cf = 2, zl = 4, df = 8, ff = 16, Rl = 1, gf = 2, Rs = "[", Bs = "[!", Ys = "]", xr = {}, Pt = Symbol(), Bl = "http://www.w3.org/2000/svg", Ma = !1, rn = 2, Yl = 4, Pi = 8, Zs = 16, On = 32, Zr = 64, ni = 128, Gt = 256, ri = 512, mt = 1024, In = 2048, hr = 4096, Mn = 8192, Ni = 16384, hf = 32768, Xr = 65536, vf = 1 << 17, pf = 1 << 19, Zl = 1 << 20, Wn = Symbol("$state"), Xs = Symbol("legacy props"), mf = Symbol("");
var Eo = Array.isArray, yf = Array.prototype.indexOf, Fs = Array.from, oi = Object.keys, ao = Object.defineProperty, Hn = Object.getOwnPropertyDescriptor, Xl = Object.getOwnPropertyDescriptors, wf = Object.prototype, _f = Array.prototype, Ws = Object.getPrototypeOf;
function jr(e) {
  return typeof e == "function";
}
const dt = () => {
};
function xf(e) {
  return e();
}
function lo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const bf = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let uo = [], co = [];
function Fl() {
  var e = uo;
  uo = [], lo(e);
}
function Wl() {
  var e = co;
  co = [], lo(e);
}
function $o(e) {
  uo.length === 0 && queueMicrotask(Fl), uo.push(e);
}
function Cf(e) {
  co.length === 0 && bf(Wl), co.push(e);
}
function Ha() {
  uo.length > 0 && Fl(), co.length > 0 && Wl();
}
function Kl(e) {
  return e === this.v;
}
function Ks(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function qs(e) {
  return !Ks(e, this.v);
}
function kf(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ef() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function $f(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Sf() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Pf() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Nf(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Tf() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Mf() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Hf() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Vf() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Tt(e, t) {
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
  return /* @__PURE__ */ ql(Tt(e));
}
// @__NO_SIDE_EFFECTS__
function So(e, t = !1) {
  var r;
  const n = Tt(e);
  return t || (n.equals = qs), Yr && Ze !== null && Ze.l !== null && ((r = Ze.l).s ?? (r.s = [])).push(n), n;
}
function re(e, t = !1) {
  return /* @__PURE__ */ ql(/* @__PURE__ */ So(e, t));
}
// @__NO_SIDE_EFFECTS__
function ql(e) {
  return je !== null && !tn && je.f & rn && (hn === null ? Lf([e]) : hn.push(e)), e;
}
function U(e, t) {
  return je !== null && !tn && Ai() && je.f & (rn | Zs) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (hn === null || !hn.includes(e)) && Vf(), gs(e, t);
}
function gs(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = nu(), Gl(e, In), Ai() && Ke !== null && Ke.f & mt && !(Ke.f & (On | Zr)) && (Sn === null ? Of([e]) : Sn.push(e))), t;
}
function Va(e, t = 1) {
  var n = h(e), r = t === 1 ? n++ : n--;
  return U(e, n), r;
}
function Gl(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Ai(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      a & In || !r && s === Ke || (on(s, t), a & (mt | Gt) && (a & rn ? Gl(
        /** @type {Derived} */
        s,
        hr
      ) : Vi(
        /** @type {Effect} */
        s
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Te(e) {
  var t = rn | In, n = je !== null && je.f & rn ? (
    /** @type {Derived} */
    je
  ) : null;
  return Ke === null || n !== null && n.f & Gt ? t |= Gt : Ke.f |= Zl, {
    ctx: Ze,
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
    parent: n ?? Ke
  };
}
// @__NO_SIDE_EFFECTS__
function pe(e) {
  const t = /* @__PURE__ */ Te(e);
  return t.equals = qs, t;
}
function Ul(e) {
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
function Df(e) {
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
function Af(e) {
  var t, n = Ke;
  jn(Df(e));
  try {
    Ul(e), t = ou(e);
  } finally {
    jn(n);
  }
  return t;
}
function jl(e) {
  var t = Af(e), n = (Xn || e.f & Gt) && e.deps !== null ? hr : mt;
  on(e, n), e.equals(t) || (e.v = t, e.wv = nu());
}
function Ti(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let Se = !1;
function Rt(e) {
  Se = e;
}
let De;
function Ct(e) {
  if (e === null)
    throw Ti(), xr;
  return De = e;
}
function mn() {
  return Ct(
    /** @type {TemplateNode} */
    /* @__PURE__ */ bn(De)
  );
}
function Z(e) {
  if (Se) {
    if (/* @__PURE__ */ bn(De) !== null)
      throw Ti(), xr;
    De = e;
  }
}
function Ne(e = 1) {
  if (Se) {
    for (var t = e, n = De; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ bn(n);
    De = n;
  }
}
function hs() {
  for (var e = 0, t = De; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === Ys) {
        if (e === 0) return t;
        e -= 1;
      } else (n === Rs || n === Bs) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ bn(t)
    );
    t.remove(), t = r;
  }
}
function It(e, t = null, n) {
  if (typeof e != "object" || e === null || Wn in e)
    return e;
  const r = Ws(e);
  if (r !== wf && r !== _f)
    return e;
  var o = /* @__PURE__ */ new Map(), i = Eo(e), s = Tt(0);
  i && o.set("length", Tt(
    /** @type {any[]} */
    e.length
  ));
  var a;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, u, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Tf();
        var f = o.get(u);
        return f === void 0 ? (f = Tt(c.value), o.set(u, f)) : U(f, It(c.value, a)), !0;
      },
      deleteProperty(l, u) {
        var c = o.get(u);
        if (c === void 0)
          u in l && o.set(u, Tt(Pt));
        else {
          if (i && typeof u == "string") {
            var f = (
              /** @type {Source<number>} */
              o.get("length")
            ), d = Number(u);
            Number.isInteger(d) && d < f.v && U(f, d);
          }
          U(c, Pt), Da(s);
        }
        return !0;
      },
      get(l, u, c) {
        var v;
        if (u === Wn)
          return e;
        var f = o.get(u), d = u in l;
        if (f === void 0 && (!d || (v = Hn(l, u)) != null && v.writable) && (f = Tt(It(d ? l[u] : Pt, a)), o.set(u, f)), f !== void 0) {
          var g = h(f);
          return g === Pt ? void 0 : g;
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
          if (d !== void 0 && g !== Pt)
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
        var c = o.get(u), f = c !== void 0 && c.v !== Pt || Reflect.has(l, u);
        if (c !== void 0 || Ke !== null && (!f || (g = Hn(l, u)) != null && g.writable)) {
          c === void 0 && (c = Tt(f ? It(l[u], a) : Pt), o.set(u, c));
          var d = h(c);
          if (d === Pt)
            return !1;
        }
        return f;
      },
      set(l, u, c, f) {
        var C;
        var d = o.get(u), g = u in l;
        if (i && u === "length")
          for (var v = c; v < /** @type {Source<number>} */
          d.v; v += 1) {
            var x = o.get(v + "");
            x !== void 0 ? U(x, Pt) : v in l && (x = Tt(Pt), o.set(v + "", x));
          }
        d === void 0 ? (!g || (C = Hn(l, u)) != null && C.writable) && (d = Tt(void 0), U(d, It(c, a)), o.set(u, d)) : (g = d.v !== Pt, U(d, It(c, a)));
        var b = Reflect.getOwnPropertyDescriptor(l, u);
        if (b != null && b.set && b.set.call(f, c), !g) {
          if (i && typeof u == "string") {
            var E = (
              /** @type {Source<number>} */
              o.get("length")
            ), m = Number(u);
            Number.isInteger(m) && m >= E.v && U(E, m + 1);
          }
          Da(s);
        }
        return !0;
      },
      ownKeys(l) {
        h(s);
        var u = Reflect.ownKeys(l).filter((d) => {
          var g = o.get(d);
          return g === void 0 || g.v !== Pt;
        });
        for (var [c, f] of o)
          f.v !== Pt && !(c in l) && u.push(c);
        return u;
      },
      setPrototypeOf() {
        Mf();
      }
    }
  );
}
function Da(e, t = 1) {
  U(e, e.v + t);
}
var Nt, Jl, Ql, eu;
function vs() {
  if (Nt === void 0) {
    Nt = window, Jl = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    Ql = Hn(t, "firstChild").get, eu = Hn(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Dn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function bt(e) {
  return Ql.call(e);
}
// @__NO_SIDE_EFFECTS__
function bn(e) {
  return eu.call(e);
}
function X(e, t) {
  if (!Se)
    return /* @__PURE__ */ bt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ bt(De)
  );
  if (n === null)
    n = De.appendChild(Dn());
  else if (t && n.nodeType !== 3) {
    var r = Dn();
    return n == null || n.before(r), Ct(r), r;
  }
  return Ct(n), n;
}
function be(e, t) {
  if (!Se) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ bt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ bn(n) : n;
  }
  return De;
}
function R(e, t = 1, n = !1) {
  let r = Se ? De : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ bn(r);
  if (!Se)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var s = Dn();
    return r === null ? o == null || o.after(s) : r.before(s), Ct(s), s;
  }
  return Ct(r), /** @type {TemplateNode} */
  r;
}
function Gs(e) {
  e.textContent = "";
}
let Go = !1, ii = !1, si = null, ir = !1, Us = !1;
function Aa(e) {
  Us = e;
}
let io = [];
let je = null, tn = !1;
function Un(e) {
  je = e;
}
let Ke = null;
function jn(e) {
  Ke = e;
}
let hn = null;
function Lf(e) {
  hn = e;
}
let _t = null, Ot = 0, Sn = null;
function Of(e) {
  Sn = e;
}
let tu = 1, ai = 0, Xn = !1;
function nu() {
  return ++tu;
}
function Fr(e) {
  var f;
  var t = e.f;
  if (t & In)
    return !0;
  if (t & hr) {
    var n = e.deps, r = (t & Gt) !== 0;
    if (n !== null) {
      var o, i, s = (t & ri) !== 0, a = r && Ke !== null && !Xn, l = n.length;
      if (s || a) {
        var u = (
          /** @type {Derived} */
          e
        ), c = u.parent;
        for (o = 0; o < l; o++)
          i = n[o], (s || !((f = i == null ? void 0 : i.reactions) != null && f.includes(u))) && (i.reactions ?? (i.reactions = [])).push(u);
        s && (u.f ^= ri), a && c !== null && !(c.f & Gt) && (u.f ^= Gt);
      }
      for (o = 0; o < l; o++)
        if (i = n[o], Fr(
          /** @type {Derived} */
          i
        ) && jl(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!r || Ke !== null && !Xn) && on(e, mt);
  }
  return !1;
}
function If(e, t) {
  for (var n = t; n !== null; ) {
    if (n.f & ni)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= ni;
      }
    n = n.parent;
  }
  throw Go = !1, e;
}
function zf(e) {
  return (e.f & Ni) === 0 && (e.parent === null || (e.parent.f & ni) === 0);
}
function Mi(e, t, n, r) {
  if (Go) {
    if (n === null && (Go = !1), zf(t))
      throw e;
    return;
  }
  n !== null && (Go = !0);
  {
    If(e, t);
    return;
  }
}
function ru(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      i.f & rn ? ru(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? on(i, In) : i.f & mt && on(i, hr), Vi(
        /** @type {Effect} */
        i
      ));
    }
}
function ou(e) {
  var g;
  var t = _t, n = Ot, r = Sn, o = je, i = Xn, s = hn, a = Ze, l = tn, u = e.f;
  _t = /** @type {null | Value[]} */
  null, Ot = 0, Sn = null, Xn = (u & Gt) !== 0 && (tn || !ir || je === null), je = u & (On | Zr) ? null : e, hn = null, La(e.ctx), tn = !1, ai++;
  try {
    var c = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (_t !== null) {
      var d;
      if (li(e, Ot), f !== null && Ot > 0)
        for (f.length = Ot + _t.length, d = 0; d < _t.length; d++)
          f[Ot + d] = _t[d];
      else
        e.deps = f = _t;
      if (!Xn)
        for (d = Ot; d < f.length; d++)
          ((g = f[d]).reactions ?? (g.reactions = [])).push(e);
    } else f !== null && Ot < f.length && (li(e, Ot), f.length = Ot);
    if (Ai() && Sn !== null && !tn && f !== null && !(e.f & (rn | hr | In)))
      for (d = 0; d < /** @type {Source[]} */
      Sn.length; d++)
        ru(
          Sn[d],
          /** @type {Effect} */
          e
        );
    return o !== null && ai++, c;
  } finally {
    _t = t, Ot = n, Sn = r, je = o, Xn = i, hn = s, La(a), tn = l;
  }
}
function Rf(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = yf.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && t.f & rn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (_t === null || !_t.includes(t)) && (on(t, hr), t.f & (Gt | ri) || (t.f ^= ri), Ul(
    /** @type {Derived} **/
    t
  ), li(
    /** @type {Derived} **/
    t,
    0
  ));
}
function li(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Rf(e, n[r]);
}
function Hi(e) {
  var t = e.f;
  if (!(t & Ni)) {
    on(e, mt);
    var n = Ke, r = Ze, o = ir;
    Ke = e, ir = !0;
    try {
      t & Zs ? Gf(e) : uu(e), lu(e);
      var i = ou(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = tu;
      var s = e.deps, a;
      Ma && of && e.f & In;
    } catch (l) {
      Mi(l, e, n, r || e.ctx);
    } finally {
      ir = o, Ke = n;
    }
  }
}
function Bf() {
  try {
    Sf();
  } catch (e) {
    if (si !== null)
      Mi(e, si, null);
    else
      throw e;
  }
}
function iu() {
  var e = ir;
  try {
    var t = 0;
    for (ir = !0; io.length > 0; ) {
      t++ > 1e3 && Bf();
      var n = io, r = n.length;
      io = [];
      for (var o = 0; o < r; o++) {
        var i = n[o];
        i.f & mt || (i.f ^= mt);
        var s = Zf(i);
        Yf(s);
      }
    }
  } finally {
    ii = !1, ir = e, si = null;
  }
}
function Yf(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if (!(r.f & (Ni | Mn)))
        try {
          Fr(r) && (Hi(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? cu(r) : r.fn = null));
        } catch (o) {
          Mi(o, r, null, r.ctx);
        }
    }
}
function Vi(e) {
  ii || (ii = !0, queueMicrotask(iu));
  for (var t = si = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (Zr | On)) {
      if (!(n & mt)) return;
      t.f ^= mt;
    }
  }
  io.push(t);
}
function Zf(e) {
  for (var t = [], n = e.first; n !== null; ) {
    var r = n.f, o = (r & On) !== 0, i = o && (r & mt) !== 0;
    if (!i && !(r & Mn)) {
      if (r & Yl)
        t.push(n);
      else if (o)
        n.f ^= mt;
      else {
        var s = je;
        try {
          je = n, Fr(n) && Hi(n);
        } catch (u) {
          Mi(u, n, null, n.ctx);
        } finally {
          je = s;
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
  for (Ha(); io.length > 0; )
    ii = !0, iu(), Ha();
  return (
    /** @type {T} */
    t
  );
}
function h(e) {
  var t = e.f, n = (t & rn) !== 0;
  if (je !== null && !tn) {
    hn !== null && hn.includes(e) && Hf();
    var r = je.deps;
    e.rv < ai && (e.rv = ai, _t === null && r !== null && r[Ot] === e ? Ot++ : _t === null ? _t = [e] : (!Xn || !_t.includes(e)) && _t.push(e));
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), i = o.parent;
    i !== null && !(i.f & Gt) && (o.f ^= Gt);
  }
  return n && (o = /** @type {Derived} */
  e, Fr(o) && jl(o)), e.v;
}
function yn(e) {
  var t = tn;
  try {
    return tn = !0, e();
  } finally {
    tn = t;
  }
}
const Xf = -7169;
function on(e, t) {
  e.f = e.f & Xf | t;
}
function j(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Wn in e)
      ps(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Wn in n && ps(n);
      }
  }
}
function ps(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        ps(e[r], t);
      } catch {
      }
    const n = Ws(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Xl(n);
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
function su(e) {
  Ke === null && je === null && $f(), je !== null && je.f & Gt && Ke === null && Ef(), Us && kf();
}
function Ff(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function vr(e, t, n, r = !0) {
  var o = (e & Zr) !== 0, i = Ke, s = {
    ctx: Ze,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | In,
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
  if (n)
    try {
      Hi(s), s.f |= hf;
    } catch (u) {
      throw Ut(s), u;
    }
  else t !== null && Vi(s);
  var a = n && s.deps === null && s.first === null && s.nodes_start === null && s.teardown === null && (s.f & (Zl | ni)) === 0;
  if (!a && !o && r && (i !== null && Ff(s, i), je !== null && je.f & rn)) {
    var l = (
      /** @type {Derived} */
      je
    );
    (l.effects ?? (l.effects = [])).push(s);
  }
  return s;
}
function au(e) {
  const t = vr(Pi, null, !1);
  return on(t, mt), t.teardown = e, t;
}
function Tr(e) {
  su();
  var t = Ke !== null && (Ke.f & On) !== 0 && Ze !== null && !Ze.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      Ze
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: Ke,
      reaction: je
    });
  } else {
    var r = zt(e);
    return r;
  }
}
function Wf(e) {
  return su(), Wr(e);
}
function Kf(e) {
  const t = vr(Zr, e, !0);
  return () => {
    Ut(t);
  };
}
function qf(e) {
  const t = vr(Zr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Mr(t, () => {
      Ut(t), r(void 0);
    }) : (Ut(t), r(void 0));
  });
}
function zt(e) {
  return vr(Yl, e, !1);
}
function he(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    Ze
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = Wr(() => {
    e(), !r.ran && (r.ran = !0, U(n.l.r2, !0), yn(t));
  });
}
function gt() {
  var e = (
    /** @type {ComponentContextLegacy} */
    Ze
  );
  Wr(() => {
    if (h(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        n.f & mt && on(n, hr), Fr(n) && Hi(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function Wr(e) {
  return vr(Pi, e, !0);
}
function $e(e, t = [], n = Te) {
  const r = t.map(n);
  return pr(() => e(...r.map(h)));
}
function pr(e, t = 0) {
  return vr(Pi | Zs | t, e, !0);
}
function An(e, t = !0) {
  return vr(Pi | On, e, !0, t);
}
function lu(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Us, r = je;
    Aa(!0), Un(null);
    try {
      t.call(null);
    } finally {
      Aa(n), Un(r);
    }
  }
}
function uu(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    Ut(n, t), n = r;
  }
}
function Gf(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & On || Ut(t), t = n;
  }
}
function Ut(e, t = !0) {
  var n = !1;
  if ((t || e.f & pf) && e.nodes_start !== null) {
    for (var r = e.nodes_start, o = e.nodes_end; r !== null; ) {
      var i = r === o ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ bn(r)
      );
      r.remove(), r = i;
    }
    n = !0;
  }
  uu(e, t && !n), li(e, 0), on(e, Ni);
  var s = e.transitions;
  if (s !== null)
    for (const l of s)
      l.stop();
  lu(e);
  var a = e.parent;
  a !== null && a.first !== null && cu(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function cu(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Mr(e, t) {
  var n = [];
  js(e, n, !0), du(n, () => {
    Ut(e), t && t();
  });
}
function du(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function js(e, t, n) {
  if (!(e.f & Mn)) {
    if (e.f ^= Mn, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & Xr) !== 0 || (r.f & On) !== 0;
      js(r, t, i ? n : !1), r = o;
    }
  }
}
function fo(e) {
  fu(e, !0);
}
function fu(e, t) {
  if (e.f & Mn) {
    e.f ^= Mn, e.f & mt || (e.f ^= mt), Fr(e) && (on(e, In), Vi(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Xr) !== 0 || (n.f & On) !== 0;
      fu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
function Di(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let Ze = null;
function La(e) {
  Ze = e;
}
function lr(e) {
  return (
    /** @type {T} */
    Js().get(e)
  );
}
function Hr(e, t) {
  return Js().set(e, t), t;
}
function Uf(e) {
  return Js().has(e);
}
function ue(e, t = !1, n) {
  Ze = {
    p: Ze,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  }, Yr && !t && (Ze.l = {
    s: null,
    u: null,
    r1: [],
    r2: Tt(!1)
  });
}
function ce(e) {
  const t = Ze;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var n = Ke, r = je;
      t.e = null;
      try {
        for (var o = 0; o < s.length; o++) {
          var i = s[o];
          jn(i.effect), Un(i.reaction), zt(i.fn);
        }
      } finally {
        jn(n), Un(r);
      }
    }
    Ze = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Ai() {
  return !Yr || Ze !== null && Ze.l === null;
}
function Js(e) {
  return Ze === null && Di(), Ze.c ?? (Ze.c = new Map(jf(Ze) || void 0));
}
function jf(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function Jf(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const Qf = [
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
function e1(e) {
  return Qf.includes(e);
}
const t1 = {
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
function n1(e) {
  return e = e.toLowerCase(), t1[e] ?? e;
}
const r1 = ["touchstart", "touchmove"];
function o1(e) {
  return r1.includes(e);
}
const i1 = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function s1(e) {
  return i1.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function a1(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, $o(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function l1(e) {
  Se && /* @__PURE__ */ bt(e) !== null && Gs(e);
}
let Oa = !1;
function u1() {
  Oa || (Oa = !0, document.addEventListener(
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
function c1(e) {
  var t = je, n = Ke;
  Un(null), jn(null);
  try {
    return e();
  } finally {
    Un(t), jn(n);
  }
}
const gu = /* @__PURE__ */ new Set(), ms = /* @__PURE__ */ new Set();
function hu(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || to.call(t, i), !i.cancelBubble)
      return c1(() => n == null ? void 0 : n.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? $o(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function Ye(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = hu(e, t, n, i);
  (t === document.body || t === window || t === document) && au(() => {
    t.removeEventListener(e, s, i);
  });
}
function Li(e) {
  for (var t = 0; t < e.length; t++)
    gu.add(e[t]);
  for (var n of ms)
    n(e);
}
function to(e) {
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
    ao(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var c = je, f = Ke;
    Un(null), jn(null);
    try {
      for (var d, g = []; i !== null; ) {
        var v = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var x = i["__" + r];
          if (x !== void 0 && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (Eo(x)) {
              var [b, ...E] = x;
              b.apply(i, [e, ...E]);
            } else
              x.call(i, e);
        } catch (C) {
          d ? g.push(C) : d = C;
        }
        if (e.cancelBubble || v === t || v === null)
          break;
        i = v;
      }
      if (d) {
        for (let C of g)
          queueMicrotask(() => {
            throw C;
          });
        throw d;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Un(c), jn(f);
    }
  }
}
function Qs(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Ht(e, t) {
  var n = (
    /** @type {Effect} */
    Ke
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ne(e, t) {
  var n = (t & Rl) !== 0, r = (t & gf) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (Se)
      return Ht(De, null), De;
    o === void 0 && (o = Qs(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ bt(o)));
    var s = (
      /** @type {TemplateNode} */
      r || Jl ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ bt(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Ht(a, l);
    } else
      Ht(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function _e(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & Rl) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (Se)
      return Ht(De, null), De;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Qs(i)
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
      Ht(c, f);
    } else
      Ht(u, u);
    return u;
  };
}
function Be(e = "") {
  if (!Se) {
    var t = Dn(e + "");
    return Ht(t, t), t;
  }
  var n = De;
  return n.nodeType !== 3 && (n.before(n = Dn()), Ct(n)), Ht(n, n), n;
}
function et() {
  if (Se)
    return Ht(De, null), De;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Dn();
  return e.append(t, n), Ht(t, n), e;
}
function O(e, t) {
  if (Se) {
    Ke.nodes_end = De, mn();
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
function vu(e, t) {
  return pu(e, t);
}
function d1(e, t) {
  vs(), t.intro = t.intro ?? !1;
  const n = t.target, r = Se, o = De;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ bt(n)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== Rs); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ bn(i);
    if (!i)
      throw xr;
    Rt(!0), Ct(
      /** @type {Comment} */
      i
    ), mn();
    const s = pu(e, { ...t, anchor: i });
    if (De === null || De.nodeType !== 8 || /** @type {Comment} */
    De.data !== Ys)
      throw Ti(), xr;
    return Rt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === xr)
      return t.recover === !1 && Pf(), vs(), Gs(n), Rt(!1), vu(e, t);
    throw s;
  } finally {
    Rt(r), Ct(o);
  }
}
const yr = /* @__PURE__ */ new Map();
function pu(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  vs();
  var a = /* @__PURE__ */ new Set(), l = (f) => {
    for (var d = 0; d < f.length; d++) {
      var g = f[d];
      if (!a.has(g)) {
        a.add(g);
        var v = o1(g);
        t.addEventListener(g, to, { passive: v });
        var x = yr.get(g);
        x === void 0 ? (document.addEventListener(g, to, { passive: v }), yr.set(g, 1)) : yr.set(g, x + 1);
      }
    }
  };
  l(Fs(gu)), ms.add(l);
  var u = void 0, c = qf(() => {
    var f = n ?? t.appendChild(Dn());
    return An(() => {
      if (i) {
        ue({});
        var d = (
          /** @type {ComponentContext} */
          Ze
        );
        d.c = i;
      }
      o && (r.$$events = o), Se && Ht(
        /** @type {TemplateNode} */
        f,
        null
      ), u = e(f, r) || {}, Se && (Ke.nodes_end = De), i && ce();
    }), () => {
      var v;
      for (var d of a) {
        t.removeEventListener(d, to);
        var g = (
          /** @type {number} */
          yr.get(d)
        );
        --g === 0 ? (document.removeEventListener(d, to), yr.delete(d)) : yr.set(d, g);
      }
      ms.delete(l), f !== n && ((v = f.parentNode) == null || v.removeChild(f));
    };
  });
  return ys.set(u, c), u;
}
let ys = /* @__PURE__ */ new WeakMap();
function f1(e, t) {
  const n = ys.get(e);
  return n ? (ys.delete(e), n(t)) : Promise.resolve();
}
function ke(e, t, [n, r] = [0, 0]) {
  Se && n === 0 && mn();
  var o = e, i = null, s = null, a = Pt, l = n > 0 ? Xr : 0, u = !1;
  const c = (d, g = !0) => {
    u = !0, f(g, d);
  }, f = (d, g) => {
    if (a === (a = d)) return;
    let v = !1;
    if (Se && r !== -1) {
      if (n === 0) {
        const b = (
          /** @type {Comment} */
          o.data
        );
        b === Rs ? r = 0 : b === Bs ? r = 1 / 0 : (r = parseInt(b.substring(1)), r !== r && (r = a ? 1 / 0 : -1));
      }
      const x = r > n;
      !!a === x && (o = hs(), Ct(o), Rt(!1), v = !0, r = -1);
    }
    a ? (i ? fo(i) : g && (i = An(() => g(o))), s && Mr(s, () => {
      s = null;
    })) : (s ? fo(s) : g && (s = An(() => g(o, [n + 1, r]))), i && Mr(i, () => {
      i = null;
    })), v && Rt(!0);
  };
  pr(() => {
    u = !1, t(c), u || f(null, null);
  }, l), Se && (o = De);
}
function go(e, t) {
  return t;
}
function g1(e, t, n, r) {
  for (var o = [], i = t.length, s = 0; s < i; s++)
    js(t[s].e, o, !0);
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
    ), r.clear(), Bn(e, t[0].prev, t[i - 1].next);
  }
  du(o, () => {
    for (var u = 0; u < i; u++) {
      var c = t[u];
      a || (r.delete(c.k), Bn(e, c.prev, c.next)), Ut(c.e, !a);
    }
  });
}
function Vt(e, t, n, r, o, i = null) {
  var s = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & Il) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    s = Se ? Ct(
      /** @type {Comment | Text} */
      /* @__PURE__ */ bt(u)
    ) : u.appendChild(Dn());
  }
  Se && mn();
  var c = null, f = !1, d = /* @__PURE__ */ pe(() => {
    var g = n();
    return Eo(g) ? g : g == null ? [] : Fs(g);
  });
  pr(() => {
    var g = h(d), v = g.length;
    if (f && v === 0)
      return;
    f = v === 0;
    let x = !1;
    if (Se) {
      var b = (
        /** @type {Comment} */
        s.data === Bs
      );
      b !== (v === 0) && (s = hs(), Ct(s), Rt(!1), x = !0);
    }
    if (Se) {
      for (var E = null, m, C = 0; C < v; C++) {
        if (De.nodeType === 8 && /** @type {Comment} */
        De.data === Ys) {
          s = /** @type {Comment} */
          De, x = !0, Rt(!1);
          break;
        }
        var p = g[C], _ = r(p, C);
        m = mu(
          De,
          a,
          E,
          null,
          p,
          _,
          C,
          o,
          t,
          n
        ), a.items.set(_, m), E = m;
      }
      v > 0 && Ct(hs());
    }
    Se || h1(g, a, s, o, t, r, n), i !== null && (v === 0 ? c ? fo(c) : c = An(() => i(s)) : c !== null && Mr(c, () => {
      c = null;
    })), x && Rt(!0), h(d);
  }), Se && (s = De);
}
function h1(e, t, n, r, o, i, s) {
  var P, V, k, N;
  var a = (o & af) !== 0, l = (o & (Is | zs)) !== 0, u = e.length, c = t.items, f = t.first, d = f, g, v = null, x, b = [], E = [], m, C, p, _;
  if (a)
    for (_ = 0; _ < u; _ += 1)
      m = e[_], C = i(m, _), p = c.get(C), p !== void 0 && ((P = p.a) == null || P.measure(), (x ?? (x = /* @__PURE__ */ new Set())).add(p));
  for (_ = 0; _ < u; _ += 1) {
    if (m = e[_], C = i(m, _), p = c.get(C), p === void 0) {
      var S = d ? (
        /** @type {TemplateNode} */
        d.e.nodes_start
      ) : n;
      v = mu(
        S,
        t,
        v,
        v === null ? t.first : v.next,
        m,
        C,
        _,
        r,
        o,
        s
      ), c.set(C, v), b = [], E = [], d = v.next;
      continue;
    }
    if (l && v1(p, m, _, o), p.e.f & Mn && (fo(p.e), a && ((V = p.a) == null || V.unfix(), (x ?? (x = /* @__PURE__ */ new Set())).delete(p))), p !== d) {
      if (g !== void 0 && g.has(p)) {
        if (b.length < E.length) {
          var $ = E[0], T;
          v = $.prev;
          var D = b[0], H = b[b.length - 1];
          for (T = 0; T < b.length; T += 1)
            Ia(b[T], $, n);
          for (T = 0; T < E.length; T += 1)
            g.delete(E[T]);
          Bn(t, D.prev, H.next), Bn(t, v, D), Bn(t, H, $), d = $, v = H, _ -= 1, b = [], E = [];
        } else
          g.delete(p), Ia(p, d, n), Bn(t, p.prev, p.next), Bn(t, p, v === null ? t.first : v.next), Bn(t, v, p), v = p;
        continue;
      }
      for (b = [], E = []; d !== null && d.k !== C; )
        d.e.f & Mn || (g ?? (g = /* @__PURE__ */ new Set())).add(d), E.push(d), d = d.next;
      if (d === null)
        continue;
      p = d;
    }
    b.push(p), v = p, d = p.next;
  }
  if (d !== null || g !== void 0) {
    for (var A = g === void 0 ? [] : Fs(g); d !== null; )
      d.e.f & Mn || A.push(d), d = d.next;
    var L = A.length;
    if (L > 0) {
      var z = o & Il && u === 0 ? n : null;
      if (a) {
        for (_ = 0; _ < L; _ += 1)
          (k = A[_].a) == null || k.measure();
        for (_ = 0; _ < L; _ += 1)
          (N = A[_].a) == null || N.fix();
      }
      g1(t, A, z, c);
    }
  }
  a && $o(() => {
    var M;
    if (x !== void 0)
      for (p of x)
        (M = p.a) == null || M.apply();
  }), Ke.first = t.first && t.first.e, Ke.last = v && v.e;
}
function v1(e, t, n, r) {
  r & Is && gs(e.v, t), r & zs ? gs(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function mu(e, t, n, r, o, i, s, a, l, u) {
  var c = (l & Is) !== 0, f = (l & lf) === 0, d = c ? f ? /* @__PURE__ */ So(o) : Tt(o) : o, g = l & zs ? Tt(s) : s, v = {
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
    return v.e = An(() => a(e, d, g, u), Se), v.e.prev = n && n.e, v.e.next = r && r.e, n === null ? t.first = v : (n.next = v, n.e.next = v.e), r !== null && (r.prev = v, r.e.prev = v.e), v;
  } finally {
  }
}
function Ia(e, t, n) {
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
      /* @__PURE__ */ bn(i)
    );
    o.before(i), i = s;
  }
}
function Bn(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function yu(e, t, n, r, o) {
  var i = e, s = "", a;
  pr(() => {
    if (s === (s = t() ?? "")) {
      Se && mn();
      return;
    }
    a !== void 0 && (Ut(a), a = void 0), s !== "" && (a = An(() => {
      if (Se) {
        De.data;
        for (var l = mn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ bn(l);
        if (l === null)
          throw Ti(), xr;
        Ht(De, u), i = Ct(l);
        return;
      }
      var c = s + "", f = Qs(c);
      Ht(
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
  Se && mn();
  var i = (a = t.$$slots) == null ? void 0 : a[n], s = !1;
  i === !0 && (i = t[n === "default" ? "children" : n], s = !0), i === void 0 || i(e, s ? () => r : r);
}
function p1(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const n in e.$$slots)
    t[n] = !0;
  return t;
}
function ur(e, t, ...n) {
  var r = e, o = dt, i;
  pr(() => {
    o !== (o = t()) && (i && (Ut(i), i = null), i = An(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Xr), Se && (r = De);
}
function wu(e, t, n) {
  Se && mn();
  var r = e, o, i;
  pr(() => {
    o !== (o = t()) && (i && (Mr(i), i = null), o && (i = An(() => n(r, o))));
  }, Xr), Se && (r = De);
}
function m1(e, t, n, r, o, i) {
  let s = Se;
  Se && mn();
  var a, l, u = null;
  Se && De.nodeType === 1 && (u = /** @type {Element} */
  De, mn());
  var c = (
    /** @type {TemplateNode} */
    Se ? De : e
  ), f;
  pr(() => {
    const d = t() || null;
    var g = d === "svg" ? Bl : null;
    d !== a && (f && (d === null ? Mr(f, () => {
      f = null, l = null;
    }) : d === l ? fo(f) : Ut(f)), d && d !== l && (f = An(() => {
      if (u = Se ? (
        /** @type {Element} */
        u
      ) : g ? document.createElementNS(g, d) : document.createElement(d), Ht(u, u), r) {
        Se && s1(d) && u.append(document.createComment(""));
        var v = (
          /** @type {TemplateNode} */
          Se ? /* @__PURE__ */ bt(u) : u.appendChild(Dn())
        );
        Se && (v === null ? Rt(!1) : Ct(v)), r(u, v);
      }
      Ke.nodes_end = u, c.before(u);
    })), a = d, a && (l = a));
  }, Xr), s && (Rt(!0), Ct(c));
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
function vt(e, t, n) {
  zt(() => {
    var r = yn(() => t(e, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      Wr(() => {
        var s = n();
        j(s), o && Ks(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function _u(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = _u(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function y1() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = _u(e)) && (r && (r += " "), r += t);
  return r;
}
function Cn(e) {
  return typeof e == "object" ? y1(e) : e ?? "";
}
const za = [...` 	
\r\f \v\uFEFF`];
function w1(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || za.includes(r[s - 1])) && (a === r.length || za.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function kt(e, t, n, r, o, i) {
  var s = e.__className;
  if (Se || s !== n) {
    var a = w1(n, r, i);
    (!Se || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
  } else if (i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return i;
}
const Jr = Symbol("class");
function so(e) {
  if (Se) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          fe(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          fe(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, Cf(n), u1();
  }
}
function Qi(e, t) {
  var n = e.__attributes ?? (e.__attributes = {});
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function _1(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function fe(e, t, n, r) {
  var o = e.__attributes ?? (e.__attributes = {});
  Se && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[mf] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && xu(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function sn(e, t, n, r, o = !1, i = !1, s = !1) {
  let a = Se && i;
  a && Rt(!1);
  var l = t || {}, u = e.tagName === "OPTION";
  for (var c in t)
    c in n || (n[c] = null);
  n.class ? n.class = Cn(n.class) : (r || n[Jr]) && (n.class = null);
  var f = xu(e), d = (
    /** @type {Record<string, unknown>} **/
    e.__attributes ?? (e.__attributes = {})
  );
  for (const C in n) {
    let p = n[C];
    if (u && C === "value" && p == null) {
      e.value = e.__value = "", l[C] = p;
      continue;
    }
    if (C === "class") {
      var g = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      kt(e, g, p, r, t == null ? void 0 : t[Jr], n[Jr]), l[C] = p, l[Jr] = n[Jr];
      continue;
    }
    var v = l[C];
    if (p !== v) {
      l[C] = p;
      var x = C[0] + C[1];
      if (x !== "$$") {
        if (x === "on") {
          const _ = {}, S = "$$" + C;
          let $ = C.slice(2);
          var b = e1($);
          if (Jf($) && ($ = $.slice(0, -7), _.capture = !0), !b && v) {
            if (p != null) continue;
            e.removeEventListener($, l[S], _), l[S] = null;
          }
          if (p != null)
            if (b)
              e[`__${$}`] = p, Li([$]);
            else {
              let T = function(D) {
                l[C].call(this, D);
              };
              l[S] = hu($, e, T, _);
            }
          else b && (e[`__${$}`] = void 0);
        } else if (C === "style" && p != null)
          e.style.cssText = p + "";
        else if (C === "autofocus")
          a1(
            /** @type {HTMLElement} */
            e,
            !!p
          );
        else if (!i && (C === "__value" || C === "value" && p != null))
          e.value = e.__value = p;
        else if (C === "selected" && u)
          _1(
            /** @type {HTMLOptionElement} */
            e,
            p
          );
        else {
          var E = C;
          o || (E = n1(E));
          var m = E === "defaultValue" || E === "defaultChecked";
          if (p == null && !i && !m)
            if (d[C] = null, E === "value" || E === "checked") {
              let _ = (
                /** @type {HTMLInputElement} */
                e
              );
              const S = t === void 0;
              if (E === "value") {
                let $ = _.defaultValue;
                _.removeAttribute(E), _.defaultValue = $, _.value = _.__value = S ? $ : null;
              } else {
                let $ = _.defaultChecked;
                _.removeAttribute(E), _.defaultChecked = $, _.checked = S ? $ : !1;
              }
            } else
              e.removeAttribute(C);
          else m || f.includes(E) && (i || typeof p != "string") ? e[E] = p : typeof p != "function" && fe(e, E, p);
        }
        C === "style" && "__styles" in e && (e.__styles = {});
      }
    }
  }
  return a && Rt(!0), l;
}
var Ra = /* @__PURE__ */ new Map();
function xu(e) {
  var t = Ra.get(e.nodeName);
  if (t) return t;
  Ra.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = Xl(r);
    for (var i in n)
      n[i].set && t.push(i);
    r = Ws(r);
  }
  return t;
}
function st(e, t, n, r) {
  var o = e.__styles ?? (e.__styles = {});
  o[t] !== n && (o[t] = n, n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, ""));
}
var Zn, Nr, ko, $i, bu;
const Si = class Si {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    rr(this, $i);
    /** */
    rr(this, Zn, /* @__PURE__ */ new WeakMap());
    /** @type {ResizeObserver | undefined} */
    rr(this, Nr);
    /** @type {ResizeObserverOptions} */
    rr(this, ko);
    Ur(this, ko, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = it(this, Zn).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), it(this, Zn).set(t, r), Ta(this, $i, bu).call(this).observe(t, it(this, ko)), () => {
      var o = it(this, Zn).get(t);
      o.delete(n), o.size === 0 && (it(this, Zn).delete(t), it(this, Nr).unobserve(t));
    };
  }
};
Zn = new WeakMap(), Nr = new WeakMap(), ko = new WeakMap(), $i = new WeakSet(), bu = function() {
  return it(this, Nr) ?? Ur(this, Nr, new ResizeObserver(
    /** @param {any} entries */
    (t) => {
      for (var n of t) {
        Si.entries.set(n.target, n);
        for (var r of it(this, Zn).get(n.target) || [])
          r(n);
      }
    }
  ));
}, /** @static */
wt(Si, "entries", /* @__PURE__ */ new WeakMap());
let ws = Si;
var x1 = /* @__PURE__ */ new ws({
  box: "border-box"
});
function Ba(e, t, n) {
  var r = x1.observe(e, () => n(e[t]));
  zt(() => (yn(() => n(e[t])), r));
}
function Ya(e, t) {
  return e === t || (e == null ? void 0 : e[Wn]) === t;
}
function wn(e = {}, t, n, r) {
  return zt(() => {
    var o, i;
    return Wr(() => {
      o = i, i = [], yn(() => {
        e !== n(...i) && (t(e, ...i), o && Ya(n(...o), e) && t(null, ...o));
      });
    }), () => {
      $o(() => {
        i && Ya(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function es(e) {
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
    Ze
  ), n = t.l.u;
  if (!n) return;
  let r = () => j(t.s);
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
  n.b.length && Wf(() => {
    Za(t, r), lo(n.b);
  }), Tr(() => {
    const o = yn(() => n.m.map(xf));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Tr(() => {
    Za(t, r), lo(n.a);
  });
}
function Za(e, t) {
  if (e.l.s)
    for (const n of e.l.s) h(n);
  t();
}
function Ve(e, t) {
  var i;
  var n = (
    /** @type {Record<string, Function[] | Function>} */
    (i = e.$$events) == null ? void 0 : i[t.type]
  ), r = Eo(n) ? n.slice() : n == null ? [] : [n];
  for (var o of r)
    o.call(this, t);
}
function Dt(e) {
  Ze === null && Di(), Yr && Ze.l !== null ? C1(Ze).m.push(e) : Tr(() => {
    const t = yn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function ea(e) {
  Ze === null && Di(), Dt(() => () => yn(e));
}
function b1(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function Oi() {
  const e = Ze;
  return e === null && Di(), (t, n, r) => {
    var i;
    const o = (
      /** @type {Record<string, Function | Function[]>} */
      (i = e.s.$$events) == null ? void 0 : i[
        /** @type {any} */
        t
      ]
    );
    if (o) {
      const s = Eo(o) ? o.slice() : [o], a = b1(
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
function C1(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function ta(e, t, n) {
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
function Wt(e, t) {
  return {
    subscribe: we(e, t).subscribe
  };
}
function we(e, t = dt) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(a) {
    if (Ks(e, a) && (e = a, n)) {
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
  return Wt(n, (s, a) => {
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
      (v, x) => ta(
        v,
        (b) => {
          u[x] = b, c &= ~(1 << x), l && d();
        },
        () => {
          c |= 1 << x;
        }
      )
    );
    return l = !0, d(), function() {
      lo(g), f(), l = !1;
    };
  });
}
function q(e) {
  let t;
  return ta(e, (n) => t = n)(), t;
}
let Yo = !1, _s = Symbol();
function Q(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ So(void 0),
    unsubscribe: dt
  });
  if (r.store !== e && !(_s in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = dt;
    else {
      var o = !0;
      r.unsubscribe = ta(e, (i) => {
        o ? r.source.v = i : U(r.source, i);
      }), o = !1;
    }
  return e && _s in n ? q(e) : h(r.source);
}
function k1(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = dt), e;
}
function ui(e, t) {
  return e.set(t), t;
}
function tt() {
  const e = {};
  function t() {
    au(() => {
      for (var n in e)
        e[n].unsubscribe();
      ao(e, _s, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function E1(e) {
  var t = Yo;
  try {
    return Yo = !1, [e(), Yo];
  } finally {
    Yo = t;
  }
}
const $1 = {
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
    $1
  );
}
const S1 = {
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
      zl
    )), e.special[t](n), Va(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), Va(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function nt(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: Tt(0) }, S1);
}
const P1 = {
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
      if (jr(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = Hn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === Wn || t === Xs) return !1;
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
  return new Proxy({ props: e }, P1);
}
function w(e, t, n, r) {
  var S;
  var o = (n & uf) !== 0, i = !Yr || (n & cf) !== 0, s = (n & df) !== 0, a = (n & ff) !== 0, l = !1, u;
  s ? [u, l] = E1(() => (
    /** @type {V} */
    e[t]
  )) : u = /** @type {V} */
  e[t];
  var c = Wn in e || Xs in e, f = s && (((S = Hn(e, t)) == null ? void 0 : S.set) ?? (c && t in e && (($) => e[t] = $))) || void 0, d = (
    /** @type {V} */
    r
  ), g = !0, v = !1, x = () => (v = !0, g && (g = !1, a ? d = yn(
    /** @type {() => V} */
    r
  ) : d = /** @type {V} */
  r), d);
  u === void 0 && r !== void 0 && (f && i && Nf(), u = x(), f && f(u));
  var b;
  if (i)
    b = () => {
      var $ = (
        /** @type {V} */
        e[t]
      );
      return $ === void 0 ? x() : (g = !0, v = !1, $);
    };
  else {
    var E = (o ? Te : pe)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    E.f |= vf, b = () => {
      var $ = h(E);
      return $ !== void 0 && (d = /** @type {V} */
      void 0), $ === void 0 ? d : $;
    };
  }
  if (!(n & zl))
    return b;
  if (f) {
    var m = e.$$legacy;
    return function($, T) {
      return arguments.length > 0 ? ((!i || !T || m || l) && f(T ? b() : $), $) : b();
    };
  }
  var C = !1, p = /* @__PURE__ */ So(u), _ = /* @__PURE__ */ Te(() => {
    var $ = b(), T = h(p);
    return C ? (C = !1, T) : p.v = $;
  });
  return o || (_.equals = qs), function($, T) {
    if (arguments.length > 0) {
      const D = T ? h(_) : i && s ? It($) : $;
      return _.equals(D) || (C = !0, U(p, D), v && d !== void 0 && (d = D), yn(() => h(_))), $;
    }
    return h(_);
  };
}
function N1(e) {
  return new T1(e);
}
var Pn, Kt;
class T1 {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    rr(this, Pn);
    /** @type {Record<string, any>} */
    rr(this, Kt);
    var i;
    var n = /* @__PURE__ */ new Map(), r = (s, a) => {
      var l = /* @__PURE__ */ So(a);
      return n.set(s, l), l;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, a) {
          return h(n.get(a) ?? r(a, Reflect.get(s, a)));
        },
        has(s, a) {
          return a === Xs ? !0 : (h(n.get(a) ?? r(a, Reflect.get(s, a))), Reflect.has(s, a));
        },
        set(s, a, l) {
          return U(n.get(a) ?? r(a, l), l), Reflect.set(s, a, l);
        }
      }
    );
    Ur(this, Kt, (t.hydrate ? d1 : vu)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((i = t == null ? void 0 : t.props) != null && i.$$host) || t.sync === !1) && y(), Ur(this, Pn, o.$$events);
    for (const s of Object.keys(it(this, Kt)))
      s === "$set" || s === "$destroy" || s === "$on" || ao(this, s, {
        get() {
          return it(this, Kt)[s];
        },
        /** @param {any} value */
        set(a) {
          it(this, Kt)[s] = a;
        },
        enumerable: !0
      });
    it(this, Kt).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(o, s);
    }, it(this, Kt).$destroy = () => {
      f1(it(this, Kt));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    it(this, Kt).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    it(this, Pn)[t] = it(this, Pn)[t] || [];
    const r = (...o) => n.call(this, ...o);
    return it(this, Pn)[t].push(r), () => {
      it(this, Pn)[t] = it(this, Pn)[t].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    it(this, Kt).$destroy();
  }
}
Pn = new WeakMap(), Kt = new WeakMap();
let Cu;
typeof HTMLElement == "function" && (Cu = class extends HTMLElement {
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
      const n = {}, r = M1(this);
      for (const o of this.$$s)
        o in r && (o === "default" && !this.$$d.children ? (this.$$d.children = t(o), n.default = !0) : n[o] = t(o));
      for (const o of this.attributes) {
        const i = this.$$g_p(o.name);
        i in this.$$d || (this.$$d[i] = Uo(i, o.value, this.$$p_d, "toProp"));
      }
      for (const o in this.$$p_d)
        !(o in this.$$d) && this[o] !== void 0 && (this.$$d[o] = this[o], delete this[o]);
      this.$$c = N1({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = Kf(() => {
        Wr(() => {
          var o;
          this.$$r = !0;
          for (const i of oi(this.$$c)) {
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
    return oi(this.$$p_d).find(
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
function M1(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function ae(e, t, n, r, o, i) {
  let s = class extends Cu {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return oi(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return oi(t).forEach((a) => {
    ao(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        var f;
        l = Uo(a, l, t), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var c = (f = Hn(u, a)) == null ? void 0 : f.get;
          c ? u[a] = l : u.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    ao(s.prototype, a, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[a];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
function $t(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = $t(e[n])) !== "" && (t += (t && " ") + r);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
var H1 = { value: () => {
} };
function Ii() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new jo(n);
}
function jo(e) {
  this._ = e;
}
function V1(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
jo.prototype = Ii.prototype = {
  constructor: jo,
  on: function(e, t) {
    var n = this._, r = V1(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = D1(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = Xa(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = Xa(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new jo(e);
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
function D1(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Xa(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = H1, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var xs = "http://www.w3.org/1999/xhtml";
const Fa = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: xs,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function zi(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Fa.hasOwnProperty(t) ? { space: Fa[t], local: e } : e;
}
function A1(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === xs && t.documentElement.namespaceURI === xs ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function L1(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function ku(e) {
  var t = zi(e);
  return (t.local ? L1 : A1)(t);
}
function O1() {
}
function na(e) {
  return e == null ? O1 : function() {
    return this.querySelector(e);
  };
}
function I1(e) {
  typeof e != "function" && (e = na(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, u, c = 0; c < s; ++c)
      (l = i[c]) && (u = e.call(l, l.__data__, c, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[c] = u);
  return new Xt(r, this._parents);
}
function z1(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function R1() {
  return [];
}
function Eu(e) {
  return e == null ? R1 : function() {
    return this.querySelectorAll(e);
  };
}
function B1(e) {
  return function() {
    return z1(e.apply(this, arguments));
  };
}
function Y1(e) {
  typeof e == "function" ? e = B1(e) : e = Eu(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(e.call(l, l.__data__, u, s)), o.push(l));
  return new Xt(r, o);
}
function $u(e) {
  return function() {
    return this.matches(e);
  };
}
function Su(e) {
  return function(t) {
    return t.matches(e);
  };
}
var Z1 = Array.prototype.find;
function X1(e) {
  return function() {
    return Z1.call(this.children, e);
  };
}
function F1() {
  return this.firstElementChild;
}
function W1(e) {
  return this.select(e == null ? F1 : X1(typeof e == "function" ? e : Su(e)));
}
var K1 = Array.prototype.filter;
function q1() {
  return Array.from(this.children);
}
function G1(e) {
  return function() {
    return K1.call(this.children, e);
  };
}
function U1(e) {
  return this.selectAll(e == null ? q1 : G1(typeof e == "function" ? e : Su(e)));
}
function j1(e) {
  typeof e != "function" && (e = $u(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Xt(r, this._parents);
}
function Pu(e) {
  return new Array(e.length);
}
function J1() {
  return new Xt(this._enter || this._groups.map(Pu), this._parents);
}
function ci(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
ci.prototype = {
  constructor: ci,
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
function Q1(e) {
  return function() {
    return e;
  };
}
function eg(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, u = i.length; s < u; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new ci(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function tg(e, t, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), c = t.length, f = i.length, d = new Array(c), g;
  for (a = 0; a < c; ++a)
    (l = t[a]) && (d[a] = g = s.call(l, l.__data__, a, t) + "", u.has(g) ? o[a] = l : u.set(g, l));
  for (a = 0; a < f; ++a)
    g = s.call(e, i[a], a, i) + "", (l = u.get(g)) ? (r[a] = l, l.__data__ = i[a], u.delete(g)) : n[a] = new ci(e, i[a]);
  for (a = 0; a < c; ++a)
    (l = t[a]) && u.get(d[a]) === l && (o[a] = l);
}
function ng(e) {
  return e.__data__;
}
function rg(e, t) {
  if (!arguments.length) return Array.from(this, ng);
  var n = t ? tg : eg, r = this._parents, o = this._groups;
  typeof e != "function" && (e = Q1(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var c = r[u], f = o[u], d = f.length, g = og(e.call(c, c && c.__data__, u, r)), v = g.length, x = a[u] = new Array(v), b = s[u] = new Array(v), E = l[u] = new Array(d);
    n(c, f, x, b, E, g, t);
    for (var m = 0, C = 0, p, _; m < v; ++m)
      if (p = x[m]) {
        for (m >= C && (C = m + 1); !(_ = b[C]) && ++C < v; ) ;
        p._next = _ || null;
      }
  }
  return s = new Xt(s, r), s._enter = a, s._exit = l, s;
}
function og(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function ig() {
  return new Xt(this._exit || this._groups.map(Pu), this._parents);
}
function sg(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function ag(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], c = r[l], f = u.length, d = a[l] = new Array(f), g, v = 0; v < f; ++v)
      (g = u[v] || c[v]) && (d[v] = g);
  for (; l < o; ++l)
    a[l] = n[l];
  return new Xt(a, this._parents);
}
function lg() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function ug(e) {
  e || (e = cg);
  function t(f, d) {
    return f && d ? e(f.__data__, d.__data__) : !f - !d;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), u, c = 0; c < a; ++c)
      (u = s[c]) && (l[c] = u);
    l.sort(t);
  }
  return new Xt(o, this._parents).order();
}
function cg(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function dg() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function fg() {
  return Array.from(this);
}
function gg() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function hg() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function vg() {
  return !this.node();
}
function pg(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function mg(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function yg(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function wg(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function _g(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function xg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function bg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Cg(e, t) {
  var n = zi(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? yg : mg : typeof t == "function" ? n.local ? bg : xg : n.local ? _g : wg)(n, t));
}
function Nu(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function kg(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Eg(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function $g(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function Sg(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? kg : typeof t == "function" ? $g : Eg)(e, t, n ?? "")) : Vr(this.node(), e);
}
function Vr(e, t) {
  return e.style.getPropertyValue(t) || Nu(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Pg(e) {
  return function() {
    delete this[e];
  };
}
function Ng(e, t) {
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
function Mg(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Pg : typeof t == "function" ? Tg : Ng)(e, t)) : this.node()[e];
}
function Tu(e) {
  return e.trim().split(/^|\s+/);
}
function ra(e) {
  return e.classList || new Mu(e);
}
function Mu(e) {
  this._node = e, this._names = Tu(e.getAttribute("class") || "");
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
  for (var n = ra(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Vu(e, t) {
  for (var n = ra(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Hg(e) {
  return function() {
    Hu(this, e);
  };
}
function Vg(e) {
  return function() {
    Vu(this, e);
  };
}
function Dg(e, t) {
  return function() {
    (t.apply(this, arguments) ? Hu : Vu)(this, e);
  };
}
function Ag(e, t) {
  var n = Tu(e + "");
  if (arguments.length < 2) {
    for (var r = ra(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Dg : t ? Hg : Vg)(n, t));
}
function Lg() {
  this.textContent = "";
}
function Og(e) {
  return function() {
    this.textContent = e;
  };
}
function Ig(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function zg(e) {
  return arguments.length ? this.each(e == null ? Lg : (typeof e == "function" ? Ig : Og)(e)) : this.node().textContent;
}
function Rg() {
  this.innerHTML = "";
}
function Bg(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Yg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Zg(e) {
  return arguments.length ? this.each(e == null ? Rg : (typeof e == "function" ? Yg : Bg)(e)) : this.node().innerHTML;
}
function Xg() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Fg() {
  return this.each(Xg);
}
function Wg() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Kg() {
  return this.each(Wg);
}
function qg(e) {
  var t = typeof e == "function" ? e : ku(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Gg() {
  return null;
}
function Ug(e, t) {
  var n = typeof e == "function" ? e : ku(e), r = t == null ? Gg : typeof t == "function" ? t : na(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function jg() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Jg() {
  return this.each(jg);
}
function Qg() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function eh() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function th(e) {
  return this.select(e ? eh : Qg);
}
function nh(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function rh(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function oh(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function ih(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function sh(e, t, n) {
  return function() {
    var r = this.__on, o, i = rh(t);
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
function ah(e, t, n) {
  var r = oh(e + ""), o, i = r.length, s;
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
  for (a = t ? sh : ih, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function Du(e, t, n) {
  var r = Nu(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function lh(e, t) {
  return function() {
    return Du(this, e, t);
  };
}
function uh(e, t) {
  return function() {
    return Du(this, e, t.apply(this, arguments));
  };
}
function ch(e, t) {
  return this.each((typeof t == "function" ? uh : lh)(e, t));
}
function* dh() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Au = [null];
function Xt(e, t) {
  this._groups = e, this._parents = t;
}
function Po() {
  return new Xt([[document.documentElement]], Au);
}
function fh() {
  return this;
}
Xt.prototype = Po.prototype = {
  constructor: Xt,
  select: I1,
  selectAll: Y1,
  selectChild: W1,
  selectChildren: U1,
  filter: j1,
  data: rg,
  enter: J1,
  exit: ig,
  join: sg,
  merge: ag,
  selection: fh,
  order: lg,
  sort: ug,
  call: dg,
  nodes: fg,
  node: gg,
  size: hg,
  empty: vg,
  each: pg,
  attr: Cg,
  style: Sg,
  property: Mg,
  classed: Ag,
  text: zg,
  html: Zg,
  raise: Fg,
  lower: Kg,
  append: qg,
  insert: Ug,
  remove: Jg,
  clone: th,
  datum: nh,
  on: ah,
  dispatch: ch,
  [Symbol.iterator]: dh
};
function qt(e) {
  return typeof e == "string" ? new Xt([[document.querySelector(e)]], [document.documentElement]) : new Xt([[e]], Au);
}
function gh(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function en(e, t) {
  if (e = gh(e), t === void 0 && (t = e.currentTarget), t) {
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
const hh = { passive: !1 }, ho = { capture: !0, passive: !1 };
function ts(e) {
  e.stopImmediatePropagation();
}
function br(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Lu(e) {
  var t = e.document.documentElement, n = qt(e).on("dragstart.drag", br, ho);
  "onselectstart" in t ? n.on("selectstart.drag", br, ho) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Ou(e, t) {
  var n = e.document.documentElement, r = qt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", br, ho), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Zo = (e) => () => e;
function bs(e, {
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
bs.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function vh(e) {
  return !e.ctrlKey && !e.button;
}
function ph() {
  return this.parentNode;
}
function mh(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function yh() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function wh() {
  var e = vh, t = ph, n = mh, r = yh, o = {}, i = Ii("start", "drag", "end"), s = 0, a, l, u, c, f = 0;
  function d(p) {
    p.on("mousedown.drag", g).filter(r).on("touchstart.drag", b).on("touchmove.drag", E, hh).on("touchend.drag touchcancel.drag", m).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(p, _) {
    if (!(c || !e.call(this, p, _))) {
      var S = C(this, t.call(this, p, _), p, _, "mouse");
      S && (qt(p.view).on("mousemove.drag", v, ho).on("mouseup.drag", x, ho), Lu(p.view), ts(p), u = !1, a = p.clientX, l = p.clientY, S("start", p));
    }
  }
  function v(p) {
    if (br(p), !u) {
      var _ = p.clientX - a, S = p.clientY - l;
      u = _ * _ + S * S > f;
    }
    o.mouse("drag", p);
  }
  function x(p) {
    qt(p.view).on("mousemove.drag mouseup.drag", null), Ou(p.view, u), br(p), o.mouse("end", p);
  }
  function b(p, _) {
    if (e.call(this, p, _)) {
      var S = p.changedTouches, $ = t.call(this, p, _), T = S.length, D, H;
      for (D = 0; D < T; ++D)
        (H = C(this, $, p, _, S[D].identifier, S[D])) && (ts(p), H("start", p, S[D]));
    }
  }
  function E(p) {
    var _ = p.changedTouches, S = _.length, $, T;
    for ($ = 0; $ < S; ++$)
      (T = o[_[$].identifier]) && (br(p), T("drag", p, _[$]));
  }
  function m(p) {
    var _ = p.changedTouches, S = _.length, $, T;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), $ = 0; $ < S; ++$)
      (T = o[_[$].identifier]) && (ts(p), T("end", p, _[$]));
  }
  function C(p, _, S, $, T, D) {
    var H = i.copy(), A = en(D || S, _), L, z, P;
    if ((P = n.call(p, new bs("beforestart", {
      sourceEvent: S,
      target: d,
      identifier: T,
      active: s,
      x: A[0],
      y: A[1],
      dx: 0,
      dy: 0,
      dispatch: H
    }), $)) != null)
      return L = P.x - A[0] || 0, z = P.y - A[1] || 0, function V(k, N, M) {
        var I = A, B;
        switch (k) {
          case "start":
            o[T] = V, B = s++;
            break;
          case "end":
            delete o[T], --s;
          // falls through
          case "drag":
            A = en(M || N, _), B = s;
            break;
        }
        H.call(
          k,
          p,
          new bs(k, {
            sourceEvent: N,
            subject: P,
            target: d,
            identifier: T,
            active: B,
            x: A[0] + L,
            y: A[1] + z,
            dx: A[0] - I[0],
            dy: A[1] - I[1],
            dispatch: H
          }),
          $
        );
      };
  }
  return d.filter = function(p) {
    return arguments.length ? (e = typeof p == "function" ? p : Zo(!!p), d) : e;
  }, d.container = function(p) {
    return arguments.length ? (t = typeof p == "function" ? p : Zo(p), d) : t;
  }, d.subject = function(p) {
    return arguments.length ? (n = typeof p == "function" ? p : Zo(p), d) : n;
  }, d.touchable = function(p) {
    return arguments.length ? (r = typeof p == "function" ? p : Zo(!!p), d) : r;
  }, d.on = function() {
    var p = i.on.apply(i, arguments);
    return p === i ? d : p;
  }, d.clickDistance = function(p) {
    return arguments.length ? (f = (p = +p) * p, d) : Math.sqrt(f);
  }, d;
}
function oa(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Iu(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function No() {
}
var vo = 0.7, di = 1 / vo, Cr = "\\s*([+-]?\\d+)\\s*", po = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", vn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", _h = /^#([0-9a-f]{3,8})$/, xh = new RegExp(`^rgb\\(${Cr},${Cr},${Cr}\\)$`), bh = new RegExp(`^rgb\\(${vn},${vn},${vn}\\)$`), Ch = new RegExp(`^rgba\\(${Cr},${Cr},${Cr},${po}\\)$`), kh = new RegExp(`^rgba\\(${vn},${vn},${vn},${po}\\)$`), Eh = new RegExp(`^hsl\\(${po},${vn},${vn}\\)$`), $h = new RegExp(`^hsla\\(${po},${vn},${vn},${po}\\)$`), Wa = {
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
oa(No, mo, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ka,
  // Deprecated! Use color.formatHex.
  formatHex: Ka,
  formatHex8: Sh,
  formatHsl: Ph,
  formatRgb: qa,
  toString: qa
});
function Ka() {
  return this.rgb().formatHex();
}
function Sh() {
  return this.rgb().formatHex8();
}
function Ph() {
  return zu(this).formatHsl();
}
function qa() {
  return this.rgb().formatRgb();
}
function mo(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = _h.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Ga(t) : n === 3 ? new Mt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Xo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Xo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = xh.exec(e)) ? new Mt(t[1], t[2], t[3], 1) : (t = bh.exec(e)) ? new Mt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Ch.exec(e)) ? Xo(t[1], t[2], t[3], t[4]) : (t = kh.exec(e)) ? Xo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Eh.exec(e)) ? Ja(t[1], t[2] / 100, t[3] / 100, 1) : (t = $h.exec(e)) ? Ja(t[1], t[2] / 100, t[3] / 100, t[4]) : Wa.hasOwnProperty(e) ? Ga(Wa[e]) : e === "transparent" ? new Mt(NaN, NaN, NaN, 0) : null;
}
function Ga(e) {
  return new Mt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Xo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Mt(e, t, n, r);
}
function Nh(e) {
  return e instanceof No || (e = mo(e)), e ? (e = e.rgb(), new Mt(e.r, e.g, e.b, e.opacity)) : new Mt();
}
function Cs(e, t, n, r) {
  return arguments.length === 1 ? Nh(e) : new Mt(e, t, n, r ?? 1);
}
function Mt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
oa(Mt, Cs, Iu(No, {
  brighter(e) {
    return e = e == null ? di : Math.pow(di, e), new Mt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? vo : Math.pow(vo, e), new Mt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Mt(sr(this.r), sr(this.g), sr(this.b), fi(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ua,
  // Deprecated! Use color.formatHex.
  formatHex: Ua,
  formatHex8: Th,
  formatRgb: ja,
  toString: ja
}));
function Ua() {
  return `#${or(this.r)}${or(this.g)}${or(this.b)}`;
}
function Th() {
  return `#${or(this.r)}${or(this.g)}${or(this.b)}${or((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ja() {
  const e = fi(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${sr(this.r)}, ${sr(this.g)}, ${sr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function fi(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function sr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function or(e) {
  return e = sr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Ja(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new nn(e, t, n, r);
}
function zu(e) {
  if (e instanceof nn) return new nn(e.h, e.s, e.l, e.opacity);
  if (e instanceof No || (e = mo(e)), !e) return new nn();
  if (e instanceof nn) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new nn(s, a, l, e.opacity);
}
function Mh(e, t, n, r) {
  return arguments.length === 1 ? zu(e) : new nn(e, t, n, r ?? 1);
}
function nn(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
oa(nn, Mh, Iu(No, {
  brighter(e) {
    return e = e == null ? di : Math.pow(di, e), new nn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? vo : Math.pow(vo, e), new nn(this.h, this.s, this.l * e, this.opacity);
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
    return new nn(Qa(this.h), Fo(this.s), Fo(this.l), fi(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = fi(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Qa(this.h)}, ${Fo(this.s) * 100}%, ${Fo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Qa(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Fo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ns(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Ru = (e) => () => e;
function Hh(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Vh(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function Dh(e) {
  return (e = +e) == 1 ? Bu : function(t, n) {
    return n - t ? Vh(t, n, e) : Ru(isNaN(t) ? n : t);
  };
}
function Bu(e, t) {
  var n = t - e;
  return n ? Hh(e, n) : Ru(isNaN(e) ? t : e);
}
const el = function e(t) {
  var n = Dh(t);
  function r(o, i) {
    var s = n((o = Cs(o)).r, (i = Cs(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = Bu(o.opacity, i.opacity);
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
var ks = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, rs = new RegExp(ks.source, "g");
function Ah(e) {
  return function() {
    return e;
  };
}
function Lh(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Oh(e, t) {
  var n = ks.lastIndex = rs.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = ks.exec(e)) && (o = rs.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: Yn(r, o) })), n = rs.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? Lh(l[0].x) : Ah(t) : (t = l.length, function(u) {
    for (var c = 0, f; c < t; ++c) a[(f = l[c]).i] = f.x(u);
    return a.join("");
  });
}
var tl = 180 / Math.PI, Es = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Yu(e, t, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * r) && (n -= e * l, r -= t * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), e * r < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * tl,
    skewX: Math.atan(l) * tl,
    scaleX: s,
    scaleY: a
  };
}
var Wo;
function Ih(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Es : Yu(t.a, t.b, t.c, t.d, t.e, t.f);
}
function zh(e) {
  return e == null || (Wo || (Wo = document.createElementNS("http://www.w3.org/2000/svg", "g")), Wo.setAttribute("transform", e), !(e = Wo.transform.baseVal.consolidate())) ? Es : (e = e.matrix, Yu(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Zu(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, c, f, d, g, v) {
    if (u !== f || c !== d) {
      var x = g.push("translate(", null, t, null, n);
      v.push({ i: x - 4, x: Yn(u, f) }, { i: x - 2, x: Yn(c, d) });
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
      var x = g.push(o(g) + "scale(", null, ",", null, ")");
      v.push({ i: x - 4, x: Yn(u, f) }, { i: x - 2, x: Yn(c, d) });
    } else (f !== 1 || d !== 1) && g.push(o(g) + "scale(" + f + "," + d + ")");
  }
  return function(u, c) {
    var f = [], d = [];
    return u = e(u), c = e(c), i(u.translateX, u.translateY, c.translateX, c.translateY, f, d), s(u.rotate, c.rotate, f, d), a(u.skewX, c.skewX, f, d), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, f, d), u = c = null, function(g) {
      for (var v = -1, x = d.length, b; ++v < x; ) f[(b = d[v]).i] = b.x(g);
      return f.join("");
    };
  };
}
var Rh = Zu(Ih, "px, ", "px)", "deg)"), Bh = Zu(zh, ", ", ")", ")"), Yh = 1e-12;
function nl(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Zh(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Xh(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Fh = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], c = s[0], f = s[1], d = s[2], g = c - a, v = f - l, x = g * g + v * v, b, E;
    if (x < Yh)
      E = Math.log(d / u) / t, b = function($) {
        return [
          a + $ * g,
          l + $ * v,
          u * Math.exp(t * $ * E)
        ];
      };
    else {
      var m = Math.sqrt(x), C = (d * d - u * u + r * x) / (2 * u * n * m), p = (d * d - u * u - r * x) / (2 * d * n * m), _ = Math.log(Math.sqrt(C * C + 1) - C), S = Math.log(Math.sqrt(p * p + 1) - p);
      E = (S - _) / t, b = function($) {
        var T = $ * E, D = nl(_), H = u / (n * m) * (D * Xh(t * T + _) - Zh(_));
        return [
          a + H * g,
          l + H * v,
          u * D / nl(t * T + _)
        ];
      };
    }
    return b.duration = E * 1e3 * t / Math.SQRT2, b;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
}(Math.SQRT2, 2, 4);
var Dr = 0, no = 0, Qr = 0, Xu = 1e3, gi, ro, hi = 0, cr = 0, Ri = 0, yo = typeof performance == "object" && performance.now ? performance : Date, Fu = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function ia() {
  return cr || (Fu(Wh), cr = yo.now() + Ri);
}
function Wh() {
  cr = 0;
}
function vi() {
  this._call = this._time = this._next = null;
}
vi.prototype = Wu.prototype = {
  constructor: vi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? ia() : +n) + (t == null ? 0 : +t), !this._next && ro !== this && (ro ? ro._next = this : gi = this, ro = this), this._call = e, this._time = n, $s();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, $s());
  }
};
function Wu(e, t, n) {
  var r = new vi();
  return r.restart(e, t, n), r;
}
function Kh() {
  ia(), ++Dr;
  for (var e = gi, t; e; )
    (t = cr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Dr;
}
function rl() {
  cr = (hi = yo.now()) + Ri, Dr = no = 0;
  try {
    Kh();
  } finally {
    Dr = 0, Gh(), cr = 0;
  }
}
function qh() {
  var e = yo.now(), t = e - hi;
  t > Xu && (Ri -= t, hi = e);
}
function Gh() {
  for (var e, t = gi, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : gi = n);
  ro = e, $s(r);
}
function $s(e) {
  if (!Dr) {
    no && (no = clearTimeout(no));
    var t = e - cr;
    t > 24 ? (e < 1 / 0 && (no = setTimeout(rl, e - yo.now() - Ri)), Qr && (Qr = clearInterval(Qr))) : (Qr || (hi = yo.now(), Qr = setInterval(qh, Xu)), Dr = 1, Fu(rl));
  }
}
function ol(e, t, n) {
  var r = new vi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var Uh = Ii("start", "end", "cancel", "interrupt"), jh = [], Ku = 0, il = 1, Ss = 2, Jo = 3, sl = 4, Ps = 5, Qo = 6;
function Bi(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  Jh(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: Uh,
    tween: jh,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Ku
  });
}
function sa(e, t) {
  var n = un(e, t);
  if (n.state > Ku) throw new Error("too late; already scheduled");
  return n;
}
function kn(e, t) {
  var n = un(e, t);
  if (n.state > Jo) throw new Error("too late; already running");
  return n;
}
function un(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function Jh(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Wu(i, 0, n.time);
  function i(u) {
    n.state = il, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var c, f, d, g;
    if (n.state !== il) return l();
    for (c in r)
      if (g = r[c], g.name === n.name) {
        if (g.state === Jo) return ol(s);
        g.state === sl ? (g.state = Qo, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[c]) : +c < t && (g.state = Qo, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[c]);
      }
    if (ol(function() {
      n.state === Jo && (n.state = sl, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = Ss, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Ss) {
      for (n.state = Jo, o = new Array(d = n.tween.length), c = 0, f = -1; c < d; ++c)
        (g = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++f] = g);
      o.length = f + 1;
    }
  }
  function a(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Ps, 1), f = -1, d = o.length; ++f < d; )
      o[f].call(e, c);
    n.state === Ps && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = Qo, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function ei(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > Ss && r.state < Ps, r.state = Qo, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function Qh(e) {
  return this.each(function() {
    ei(this, e);
  });
}
function ev(e, t) {
  var n, r;
  return function() {
    var o = kn(this, e), i = o.tween;
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
function tv(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = kn(this, e), s = i.tween;
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
function nv(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = un(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? ev : tv)(n, e, t));
}
function aa(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = kn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return un(o, r).value[t];
  };
}
function qu(e, t) {
  var n;
  return (typeof t == "number" ? Yn : t instanceof mo ? el : (n = mo(t)) ? (t = n, el) : Oh)(e, t);
}
function rv(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function ov(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function iv(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function sv(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function av(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function lv(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function uv(e, t) {
  var n = zi(e), r = n === "transform" ? Bh : qu;
  return this.attrTween(e, typeof t == "function" ? (n.local ? lv : av)(n, r, aa(this, "attr." + e, t)) : t == null ? (n.local ? ov : rv)(n) : (n.local ? sv : iv)(n, r, t));
}
function cv(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function dv(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function fv(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && dv(e, i)), n;
  }
  return o._value = t, o;
}
function gv(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && cv(e, i)), n;
  }
  return o._value = t, o;
}
function hv(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = zi(e);
  return this.tween(n, (r.local ? fv : gv)(r, t));
}
function vv(e, t) {
  return function() {
    sa(this, e).delay = +t.apply(this, arguments);
  };
}
function pv(e, t) {
  return t = +t, function() {
    sa(this, e).delay = t;
  };
}
function mv(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? vv : pv)(t, e)) : un(this.node(), t).delay;
}
function yv(e, t) {
  return function() {
    kn(this, e).duration = +t.apply(this, arguments);
  };
}
function wv(e, t) {
  return t = +t, function() {
    kn(this, e).duration = t;
  };
}
function _v(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? yv : wv)(t, e)) : un(this.node(), t).duration;
}
function xv(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    kn(this, e).ease = t;
  };
}
function bv(e) {
  var t = this._id;
  return arguments.length ? this.each(xv(t, e)) : un(this.node(), t).ease;
}
function Cv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    kn(this, e).ease = n;
  };
}
function kv(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Cv(this._id, e));
}
function Ev(e) {
  typeof e != "function" && (e = $u(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Ln(r, this._parents, this._name, this._id);
}
function $v(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], u = n[a], c = l.length, f = s[a] = new Array(c), d, g = 0; g < c; ++g)
      (d = l[g] || u[g]) && (f[g] = d);
  for (; a < r; ++a)
    s[a] = t[a];
  return new Ln(s, this._parents, this._name, this._id);
}
function Sv(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function Pv(e, t, n) {
  var r, o, i = Sv(t) ? sa : kn;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function Nv(e, t) {
  var n = this._id;
  return arguments.length < 2 ? un(this.node(), n).on.on(e) : this.each(Pv(n, e, t));
}
function Tv(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Mv() {
  return this.on("end.remove", Tv(this._id));
}
function Hv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = na(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), c, f, d = 0; d < l; ++d)
      (c = a[d]) && (f = e.call(c, c.__data__, d, a)) && ("__data__" in c && (f.__data__ = c.__data__), u[d] = f, Bi(u[d], t, n, d, u, un(c, n)));
  return new Ln(i, this._parents, t, n);
}
function Vv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Eu(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, c, f = 0; f < u; ++f)
      if (c = l[f]) {
        for (var d = e.call(c, c.__data__, f, l), g, v = un(c, n), x = 0, b = d.length; x < b; ++x)
          (g = d[x]) && Bi(g, t, n, x, d, v);
        i.push(d), s.push(c);
      }
  return new Ln(i, s, t, n);
}
var Dv = Po.prototype.constructor;
function Av() {
  return new Dv(this._groups, this._parents);
}
function Lv(e, t) {
  var n, r, o;
  return function() {
    var i = Vr(this, e), s = (this.style.removeProperty(e), Vr(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function Gu(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Ov(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = Vr(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Iv(e, t, n) {
  var r, o, i;
  return function() {
    var s = Vr(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), Vr(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function zv(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = kn(this, e), u = l.on, c = l.value[i] == null ? a || (a = Gu(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(s, o = c), l.on = r;
  };
}
function Rv(e, t, n) {
  var r = (e += "") == "transform" ? Rh : qu;
  return t == null ? this.styleTween(e, Lv(e, r)).on("end.style." + e, Gu(e)) : typeof t == "function" ? this.styleTween(e, Iv(e, r, aa(this, "style." + e, t))).each(zv(this._id, e)) : this.styleTween(e, Ov(e, r, t), n).on("end.style." + e, null);
}
function Bv(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function Yv(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && Bv(e, s, n)), r;
  }
  return i._value = t, i;
}
function Zv(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, Yv(e, t, n ?? ""));
}
function Xv(e) {
  return function() {
    this.textContent = e;
  };
}
function Fv(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function Wv(e) {
  return this.tween("text", typeof e == "function" ? Fv(aa(this, "text", e)) : Xv(e == null ? "" : e + ""));
}
function Kv(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function qv(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && Kv(o)), t;
  }
  return r._value = e, r;
}
function Gv(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, qv(e));
}
function Uv() {
  for (var e = this._name, t = this._id, n = Uu(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var c = un(l, t);
        Bi(l, e, n, u, s, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new Ln(r, this._parents, e, n);
}
function jv() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = kn(this, r), c = u.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var Jv = 0;
function Ln(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Uu() {
  return ++Jv;
}
var $n = Po.prototype;
Ln.prototype = {
  constructor: Ln,
  select: Hv,
  selectAll: Vv,
  selectChild: $n.selectChild,
  selectChildren: $n.selectChildren,
  filter: Ev,
  merge: $v,
  selection: Av,
  transition: Uv,
  call: $n.call,
  nodes: $n.nodes,
  node: $n.node,
  size: $n.size,
  empty: $n.empty,
  each: $n.each,
  on: Nv,
  attr: uv,
  attrTween: hv,
  style: Rv,
  styleTween: Zv,
  text: Wv,
  textTween: Gv,
  remove: Mv,
  tween: nv,
  delay: mv,
  duration: _v,
  ease: bv,
  easeVarying: kv,
  end: jv,
  [Symbol.iterator]: $n[Symbol.iterator]
};
function Qv(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var e0 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Qv
};
function t0(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function n0(e) {
  var t, n;
  e instanceof Ln ? (t = e._id, e = e._name) : (t = Uu(), (n = e0).time = ia(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && Bi(l, e, t, u, s, n || t0(l, t));
  return new Ln(r, this._parents, e, t);
}
Po.prototype.interrupt = Qh;
Po.prototype.transition = n0;
const Ko = (e) => () => e;
function r0(e, {
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
var Yi = new Nn(1, 0, 0);
ju.prototype = Nn.prototype;
function ju(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Yi;
  return e.__zoom;
}
function os(e) {
  e.stopImmediatePropagation();
}
function eo(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function o0(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function i0() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function al() {
  return this.__zoom || Yi;
}
function s0(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function a0() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function l0(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function Ju() {
  var e = o0, t = i0, n = l0, r = s0, o = a0, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = Fh, u = Ii("start", "zoom", "end"), c, f, d, g = 500, v = 150, x = 0, b = 10;
  function E(P) {
    P.property("__zoom", al).on("wheel.zoom", T, { passive: !1 }).on("mousedown.zoom", D).on("dblclick.zoom", H).filter(o).on("touchstart.zoom", A).on("touchmove.zoom", L).on("touchend.zoom touchcancel.zoom", z).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  E.transform = function(P, V, k, N) {
    var M = P.selection ? P.selection() : P;
    M.property("__zoom", al), P !== M ? _(P, V, k, N) : M.interrupt().each(function() {
      S(this, arguments).event(N).start().zoom(null, typeof V == "function" ? V.apply(this, arguments) : V).end();
    });
  }, E.scaleBy = function(P, V, k, N) {
    E.scaleTo(P, function() {
      var M = this.__zoom.k, I = typeof V == "function" ? V.apply(this, arguments) : V;
      return M * I;
    }, k, N);
  }, E.scaleTo = function(P, V, k, N) {
    E.transform(P, function() {
      var M = t.apply(this, arguments), I = this.__zoom, B = k == null ? p(M) : typeof k == "function" ? k.apply(this, arguments) : k, F = I.invert(B), K = typeof V == "function" ? V.apply(this, arguments) : V;
      return n(C(m(I, K), B, F), M, s);
    }, k, N);
  }, E.translateBy = function(P, V, k, N) {
    E.transform(P, function() {
      return n(this.__zoom.translate(
        typeof V == "function" ? V.apply(this, arguments) : V,
        typeof k == "function" ? k.apply(this, arguments) : k
      ), t.apply(this, arguments), s);
    }, null, N);
  }, E.translateTo = function(P, V, k, N, M) {
    E.transform(P, function() {
      var I = t.apply(this, arguments), B = this.__zoom, F = N == null ? p(I) : typeof N == "function" ? N.apply(this, arguments) : N;
      return n(Yi.translate(F[0], F[1]).scale(B.k).translate(
        typeof V == "function" ? -V.apply(this, arguments) : -V,
        typeof k == "function" ? -k.apply(this, arguments) : -k
      ), I, s);
    }, N, M);
  };
  function m(P, V) {
    return V = Math.max(i[0], Math.min(i[1], V)), V === P.k ? P : new Nn(V, P.x, P.y);
  }
  function C(P, V, k) {
    var N = V[0] - k[0] * P.k, M = V[1] - k[1] * P.k;
    return N === P.x && M === P.y ? P : new Nn(P.k, N, M);
  }
  function p(P) {
    return [(+P[0][0] + +P[1][0]) / 2, (+P[0][1] + +P[1][1]) / 2];
  }
  function _(P, V, k, N) {
    P.on("start.zoom", function() {
      S(this, arguments).event(N).start();
    }).on("interrupt.zoom end.zoom", function() {
      S(this, arguments).event(N).end();
    }).tween("zoom", function() {
      var M = this, I = arguments, B = S(M, I).event(N), F = t.apply(M, I), K = k == null ? p(F) : typeof k == "function" ? k.apply(M, I) : k, ie = Math.max(F[1][0] - F[0][0], F[1][1] - F[0][1]), ee = M.__zoom, W = typeof V == "function" ? V.apply(M, I) : V, de = l(ee.invert(K).concat(ie / ee.k), W.invert(K).concat(ie / W.k));
      return function(me) {
        if (me === 1) me = W;
        else {
          var Ce = de(me), ge = ie / Ce[2];
          me = new Nn(ge, K[0] - Ce[0] * ge, K[1] - Ce[1] * ge);
        }
        B.zoom(null, me);
      };
    });
  }
  function S(P, V, k) {
    return !k && P.__zooming || new $(P, V);
  }
  function $(P, V) {
    this.that = P, this.args = V, this.active = 0, this.sourceEvent = null, this.extent = t.apply(P, V), this.taps = 0;
  }
  $.prototype = {
    event: function(P) {
      return P && (this.sourceEvent = P), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(P, V) {
      return this.mouse && P !== "mouse" && (this.mouse[1] = V.invert(this.mouse[0])), this.touch0 && P !== "touch" && (this.touch0[1] = V.invert(this.touch0[0])), this.touch1 && P !== "touch" && (this.touch1[1] = V.invert(this.touch1[0])), this.that.__zoom = V, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(P) {
      var V = qt(this.that).datum();
      u.call(
        P,
        this.that,
        new r0(P, {
          sourceEvent: this.sourceEvent,
          target: E,
          transform: this.that.__zoom,
          dispatch: u
        }),
        V
      );
    }
  };
  function T(P, ...V) {
    if (!e.apply(this, arguments)) return;
    var k = S(this, V).event(P), N = this.__zoom, M = Math.max(i[0], Math.min(i[1], N.k * Math.pow(2, r.apply(this, arguments)))), I = en(P);
    if (k.wheel)
      (k.mouse[0][0] !== I[0] || k.mouse[0][1] !== I[1]) && (k.mouse[1] = N.invert(k.mouse[0] = I)), clearTimeout(k.wheel);
    else {
      if (N.k === M) return;
      k.mouse = [I, N.invert(I)], ei(this), k.start();
    }
    eo(P), k.wheel = setTimeout(B, v), k.zoom("mouse", n(C(m(N, M), k.mouse[0], k.mouse[1]), k.extent, s));
    function B() {
      k.wheel = null, k.end();
    }
  }
  function D(P, ...V) {
    if (d || !e.apply(this, arguments)) return;
    var k = P.currentTarget, N = S(this, V, !0).event(P), M = qt(P.view).on("mousemove.zoom", K, !0).on("mouseup.zoom", ie, !0), I = en(P, k), B = P.clientX, F = P.clientY;
    Lu(P.view), os(P), N.mouse = [I, this.__zoom.invert(I)], ei(this), N.start();
    function K(ee) {
      if (eo(ee), !N.moved) {
        var W = ee.clientX - B, de = ee.clientY - F;
        N.moved = W * W + de * de > x;
      }
      N.event(ee).zoom("mouse", n(C(N.that.__zoom, N.mouse[0] = en(ee, k), N.mouse[1]), N.extent, s));
    }
    function ie(ee) {
      M.on("mousemove.zoom mouseup.zoom", null), Ou(ee.view, N.moved), eo(ee), N.event(ee).end();
    }
  }
  function H(P, ...V) {
    if (e.apply(this, arguments)) {
      var k = this.__zoom, N = en(P.changedTouches ? P.changedTouches[0] : P, this), M = k.invert(N), I = k.k * (P.shiftKey ? 0.5 : 2), B = n(C(m(k, I), N, M), t.apply(this, V), s);
      eo(P), a > 0 ? qt(this).transition().duration(a).call(_, B, N, P) : qt(this).call(E.transform, B, N, P);
    }
  }
  function A(P, ...V) {
    if (e.apply(this, arguments)) {
      var k = P.touches, N = k.length, M = S(this, V, P.changedTouches.length === N).event(P), I, B, F, K;
      for (os(P), B = 0; B < N; ++B)
        F = k[B], K = en(F, this), K = [K, this.__zoom.invert(K), F.identifier], M.touch0 ? !M.touch1 && M.touch0[2] !== K[2] && (M.touch1 = K, M.taps = 0) : (M.touch0 = K, I = !0, M.taps = 1 + !!c);
      c && (c = clearTimeout(c)), I && (M.taps < 2 && (f = K[0], c = setTimeout(function() {
        c = null;
      }, g)), ei(this), M.start());
    }
  }
  function L(P, ...V) {
    if (this.__zooming) {
      var k = S(this, V).event(P), N = P.changedTouches, M = N.length, I, B, F, K;
      for (eo(P), I = 0; I < M; ++I)
        B = N[I], F = en(B, this), k.touch0 && k.touch0[2] === B.identifier ? k.touch0[0] = F : k.touch1 && k.touch1[2] === B.identifier && (k.touch1[0] = F);
      if (B = k.that.__zoom, k.touch1) {
        var ie = k.touch0[0], ee = k.touch0[1], W = k.touch1[0], de = k.touch1[1], me = (me = W[0] - ie[0]) * me + (me = W[1] - ie[1]) * me, Ce = (Ce = de[0] - ee[0]) * Ce + (Ce = de[1] - ee[1]) * Ce;
        B = m(B, Math.sqrt(me / Ce)), F = [(ie[0] + W[0]) / 2, (ie[1] + W[1]) / 2], K = [(ee[0] + de[0]) / 2, (ee[1] + de[1]) / 2];
      } else if (k.touch0) F = k.touch0[0], K = k.touch0[1];
      else return;
      k.zoom("touch", n(C(B, F, K), k.extent, s));
    }
  }
  function z(P, ...V) {
    if (this.__zooming) {
      var k = S(this, V).event(P), N = P.changedTouches, M = N.length, I, B;
      for (os(P), d && clearTimeout(d), d = setTimeout(function() {
        d = null;
      }, g), I = 0; I < M; ++I)
        B = N[I], k.touch0 && k.touch0[2] === B.identifier ? delete k.touch0 : k.touch1 && k.touch1[2] === B.identifier && delete k.touch1;
      if (k.touch1 && !k.touch0 && (k.touch0 = k.touch1, delete k.touch1), k.touch0) k.touch0[1] = this.__zoom.invert(k.touch0[0]);
      else if (k.end(), k.taps === 2 && (B = en(B, this), Math.hypot(f[0] - B[0], f[1] - B[1]) < b)) {
        var F = qt(this).on("dblclick.zoom");
        F && F.apply(this, arguments);
      }
    }
  }
  return E.wheelDelta = function(P) {
    return arguments.length ? (r = typeof P == "function" ? P : Ko(+P), E) : r;
  }, E.filter = function(P) {
    return arguments.length ? (e = typeof P == "function" ? P : Ko(!!P), E) : e;
  }, E.touchable = function(P) {
    return arguments.length ? (o = typeof P == "function" ? P : Ko(!!P), E) : o;
  }, E.extent = function(P) {
    return arguments.length ? (t = typeof P == "function" ? P : Ko([[+P[0][0], +P[0][1]], [+P[1][0], +P[1][1]]]), E) : t;
  }, E.scaleExtent = function(P) {
    return arguments.length ? (i[0] = +P[0], i[1] = +P[1], E) : [i[0], i[1]];
  }, E.translateExtent = function(P) {
    return arguments.length ? (s[0][0] = +P[0][0], s[1][0] = +P[1][0], s[0][1] = +P[0][1], s[1][1] = +P[1][1], E) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, E.constrain = function(P) {
    return arguments.length ? (n = P, E) : n;
  }, E.duration = function(P) {
    return arguments.length ? (a = +P, E) : a;
  }, E.interpolate = function(P) {
    return arguments.length ? (l = P, E) : l;
  }, E.on = function() {
    var P = u.on.apply(u, arguments);
    return P === u ? E : P;
  }, E.clickDistance = function(P) {
    return arguments.length ? (x = (P = +P) * P, E) : Math.sqrt(x);
  }, E.tapDistance = function(P) {
    return arguments.length ? (b = +P, E) : b;
  }, E;
}
const Ar = {
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
}, pi = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
];
var dr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(dr || (dr = {}));
var qn;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(qn || (qn = {}));
var mi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(mi || (mi = {}));
const Ns = {
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
var Ee;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(Ee || (Ee = {}));
const ll = {
  [Ee.Left]: Ee.Right,
  [Ee.Right]: Ee.Left,
  [Ee.Top]: Ee.Bottom,
  [Ee.Bottom]: Ee.Top
};
function u0(e, t) {
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
function ul(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t != null && t.has(i) || r.push(o);
  }), r.length && n(r);
}
function c0(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const d0 = (e) => "id" in e && "source" in e && "target" in e, f0 = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), la = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), To = (e, t = [0, 0]) => {
  const { width: n, height: r } = tr(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, g0 = (e, t = { nodeOrigin: [0, 0], nodeLookup: void 0 }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : la(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? yi(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Zi(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Xi(n);
}, Mo = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = yi(r);
      n = Zi(n, o);
    }
  }), Xi(n);
}, Qu = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...Ho(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: f = !0, hidden: d = !1 } = u;
    if (s && !f || d)
      continue;
    const g = c.width ?? u.width ?? u.initialWidth ?? null, v = c.height ?? u.height ?? u.initialHeight ?? null, x = _o(a, Or(u)), b = (g ?? 0) * (v ?? 0), E = i && x > 0;
    (!u.internals.handleBounds || E || x >= b || u.dragging) && l.push(u);
  }
  return l;
}, Ts = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function cl(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && ((t == null ? void 0 : t.includeHiddenNodes) || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function dl({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!1);
  const a = Mo(e), l = ca(a, t, n, (s == null ? void 0 : s.minZoom) ?? o, (s == null ? void 0 : s.maxZoom) ?? i, (s == null ? void 0 : s.padding) ?? 0.1);
  return await r.setViewport(l, { duration: s == null ? void 0 : s.duration }), Promise.resolve(!0);
}
function h0({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: u } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, c = s.origin ?? r;
  let f = o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i == null || i("005", Ar.error005());
    else {
      const g = a.measured.width, v = a.measured.height;
      g && v && (f = [
        [l, u],
        [l + g, u + v]
      ]);
    }
  else a && Ir(s.extent) && (f = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const d = Ir(f) ? fr(t, f, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && (i == null || i("015", Ar.error015())), {
    position: {
      x: d.x - l + (s.measured.width ?? 0) * c[0],
      y: d.y - u + (s.measured.height ?? 0) * c[1]
    },
    positionAbsolute: d
  };
}
async function ec({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((d) => d.id)), s = [];
  for (const d of n) {
    if (d.deletable === !1)
      continue;
    const g = i.has(d.id), v = !g && d.parentId && s.find((x) => x.id === d.parentId);
    (g || v) && s.push(d);
  }
  const a = new Set(t.map((d) => d.id)), l = r.filter((d) => d.deletable !== !1), c = Ts(s, l);
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
const Lr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), fr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Lr(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: Lr(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function tc(e, t, n) {
  const { width: r, height: o } = tr(n), { x: i, y: s } = n.internals.positionAbsolute;
  return fr(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const fl = (e, t, n) => e < t ? Lr(Math.abs(e - t), 1, t) / t : e > n ? -Lr(Math.abs(e - n), 1, t) / t : 0, nc = (e, t, n = 15, r = 40) => {
  const o = fl(e.x, r, t.width - r) * n, i = fl(e.y, r, t.height - r) * n;
  return [o, i];
}, Zi = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Ms = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Xi = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Or = (e, t = [0, 0]) => {
  var o, i;
  const { x: n, y: r } = la(e) ? e.internals.positionAbsolute : To(e, t);
  return {
    x: n,
    y: r,
    width: ((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, yi = (e, t = [0, 0]) => {
  var o, i;
  const { x: n, y: r } = la(e) ? e.internals.positionAbsolute : To(e, t);
  return {
    x: n,
    y: r,
    x2: n + (((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, rc = (e, t) => Xi(Zi(Ms(e), Ms(t))), _o = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, gl = (e) => Tn(e.width) && Tn(e.height) && Tn(e.x) && Tn(e.y), Tn = (e) => !isNaN(e) && isFinite(e), v0 = (e, t) => {
}, ua = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Ho = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? ua(a, s) : a;
}, oc = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
}), ca = (e, t, n, r, o, i) => {
  const s = t / (e.width * (1 + i)), a = n / (e.height * (1 + i)), l = Math.min(s, a), u = Lr(l, r, o), c = e.x + e.width / 2, f = e.y + e.height / 2, d = t / 2 - c * u, g = n / 2 - f * u;
  return { x: d, y: g, zoom: u };
}, wi = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function Ir(e) {
  return e !== void 0 && e !== "parent";
}
function tr(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function ic(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function p0(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function is(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = Vn(e), a = Ho({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: s - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? ua(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const da = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), m0 = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, y0 = ["INPUT", "SELECT", "TEXTAREA"];
function w0(e) {
  var r, o;
  const t = ((o = (r = e.composedPath) == null ? void 0 : r.call(e)) == null ? void 0 : o[0]) || e.target;
  return (t == null ? void 0 : t.nodeType) !== 1 ? !1 : y0.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const sc = (e) => "clientX" in e, Vn = (e, t) => {
  var i, s;
  const n = sc(e), r = n ? e.clientX : (i = e.touches) == null ? void 0 : i[0].clientX, o = n ? e.clientY : (s = e.touches) == null ? void 0 : s[0].clientY;
  return {
    x: r - ((t == null ? void 0 : t.left) ?? 0),
    y: o - ((t == null ? void 0 : t.top) ?? 0)
  };
}, hl = (e, t, n, r, o) => {
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
      ...da(s)
    };
  });
};
function _0({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, c = Math.abs(l - e), f = Math.abs(u - t);
  return [l, u, c, f];
}
function qo(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function vl({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case Ee.Left:
      return [t - qo(t - r, i), n];
    case Ee.Right:
      return [t + qo(r - t, i), n];
    case Ee.Top:
      return [t, n - qo(n - o, i)];
    case Ee.Bottom:
      return [t, n + qo(o - n, i)];
  }
}
function ac({ sourceX: e, sourceY: t, sourcePosition: n = Ee.Bottom, targetX: r, targetY: o, targetPosition: i = Ee.Top, curvature: s = 0.25 }) {
  const [a, l] = vl({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [u, c] = vl({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [f, d, g, v] = _0({
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
function lc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function x0({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const i = n || t.selected || e.selected, s = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (i ? s : 0);
}
function b0({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = Zi(yi(e), yi(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return _o(s, Xi(i)) > 0;
}
const C0 = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, k0 = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), E0 = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return d0(e) ? n = { ...e } : n = {
    ...e,
    id: C0(e)
  }, k0(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Hs({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = lc({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const pl = {
  [Ee.Left]: { x: -1, y: 0 },
  [Ee.Right]: { x: 1, y: 0 },
  [Ee.Top]: { x: 0, y: -1 },
  [Ee.Bottom]: { x: 0, y: 1 }
}, $0 = ({ source: e, sourcePosition: t = Ee.Bottom, target: n }) => t === Ee.Left || t === Ee.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, ml = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function S0({ source: e, sourcePosition: t = Ee.Bottom, target: n, targetPosition: r = Ee.Top, center: o, offset: i }) {
  const s = pl[t], a = pl[r], l = { x: e.x + s.x * i, y: e.y + s.y * i }, u = { x: n.x + a.x * i, y: n.y + a.y * i }, c = $0({
    source: l,
    sourcePosition: t,
    target: u
  }), f = c.x !== 0 ? "x" : "y", d = c[f];
  let g = [], v, x;
  const b = { x: 0, y: 0 }, E = { x: 0, y: 0 }, [m, C, p, _] = lc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (s[f] * a[f] === -1) {
    v = o.x ?? m, x = o.y ?? C;
    const $ = [
      { x: v, y: l.y },
      { x: v, y: u.y }
    ], T = [
      { x: l.x, y: x },
      { x: u.x, y: x }
    ];
    s[f] === d ? g = f === "x" ? $ : T : g = f === "x" ? T : $;
  } else {
    const $ = [{ x: l.x, y: u.y }], T = [{ x: u.x, y: l.y }];
    if (f === "x" ? g = s.x === d ? T : $ : g = s.y === d ? $ : T, t === r) {
      const z = Math.abs(e[f] - n[f]);
      if (z <= i) {
        const P = Math.min(i - 1, i - z);
        s[f] === d ? b[f] = (l[f] > e[f] ? -1 : 1) * P : E[f] = (u[f] > n[f] ? -1 : 1) * P;
      }
    }
    if (t !== r) {
      const z = f === "x" ? "y" : "x", P = s[f] === a[z], V = l[z] > u[z], k = l[z] < u[z];
      (s[f] === 1 && (!P && V || P && k) || s[f] !== 1 && (!P && k || P && V)) && (g = f === "x" ? $ : T);
    }
    const D = { x: l.x + b.x, y: l.y + b.y }, H = { x: u.x + E.x, y: u.y + E.y }, A = Math.max(Math.abs(D.x - g[0].x), Math.abs(H.x - g[0].x)), L = Math.max(Math.abs(D.y - g[0].y), Math.abs(H.y - g[0].y));
    A >= L ? (v = (D.x + H.x) / 2, x = g[0].y) : (v = g[0].x, x = (D.y + H.y) / 2);
  }
  return [[
    e,
    { x: l.x + b.x, y: l.y + b.y },
    ...g,
    { x: u.x + E.x, y: u.y + E.y },
    n
  ], v, x, p, _];
}
function P0(e, t, n, r) {
  const o = Math.min(ml(e, t) / 2, ml(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, c = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * c}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function _i({ sourceX: e, sourceY: t, sourcePosition: n = Ee.Bottom, targetX: r, targetY: o, targetPosition: i = Ee.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20 }) {
  const [c, f, d, g, v] = S0({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u
  });
  return [c.reduce((b, E, m) => {
    let C = "";
    return m > 0 && m < c.length - 1 ? C = P0(c[m - 1], E, c[m + 1], s) : C = `${m === 0 ? "M" : "L"}${E.x} ${E.y}`, b += C, b;
  }, ""), f, d, g, v];
}
function yl(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function N0(e) {
  var f;
  const { sourceNode: t, targetNode: n } = e;
  if (!yl(t) || !yl(n))
    return null;
  const r = t.internals.handleBounds || wl(t.handles), o = n.internals.handleBounds || wl(n.handles), i = _l((r == null ? void 0 : r.source) ?? [], e.sourceHandle), s = _l(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === dr.Strict ? (o == null ? void 0 : o.target) ?? [] : ((o == null ? void 0 : o.target) ?? []).concat((o == null ? void 0 : o.source) ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return (f = e.onError) == null || f.call(e, "008", Ar.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = (i == null ? void 0 : i.position) || Ee.Bottom, l = (s == null ? void 0 : s.position) || Ee.Top, u = xo(t, i, a), c = xo(n, s, l);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: c.x,
    targetY: c.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function wl(e) {
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
function xo(e, t, n = Ee.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? tr(e);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case Ee.Top:
      return { x: o + s / 2, y: i };
    case Ee.Right:
      return { x: o + s, y: i + a / 2 };
    case Ee.Bottom:
      return { x: o + s / 2, y: i + a };
    case Ee.Left:
      return { x: o, y: i + a / 2 };
  }
}
function _l(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Vs(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function T0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = Vs(l, t);
      i.has(u) || (s.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function M0(e, t, n, r, o) {
  let i = 0.5;
  o === "start" ? i = 0 : o === "end" && (i = 1);
  let s = [
    (e.x + e.width * i) * t.zoom + t.x,
    e.y * t.zoom + t.y - r
  ], a = [-100 * i, -100];
  switch (n) {
    case Ee.Right:
      s = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [0, -100 * i];
      break;
    case Ee.Bottom:
      s[1] = (e.y + e.height) * t.zoom + t.y + r, a[1] = 0;
      break;
    case Ee.Left:
      s = [
        e.x * t.zoom + t.x - r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [-100, -100 * i];
      break;
  }
  return `translate(${s[0]}px, ${s[1]}px) translate(${a[0]}%, ${a[1]}%)`;
}
const fa = {
  nodeOrigin: [0, 0],
  nodeExtent: pi,
  elevateNodesOnSelect: !0,
  defaults: {}
}, H0 = {
  ...fa,
  checkEquality: !0
};
function ga(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function V0(e, t, n) {
  const r = ga(fa, n);
  for (const o of e.values())
    if (o.parentId)
      ha(o, e, t, r);
    else {
      const i = To(o, r.nodeOrigin), s = Ir(o.extent) ? o.extent : r.nodeExtent, a = fr(i, s, tr(o));
      o.internals.positionAbsolute = a;
    }
}
function uc(e, t, n, r) {
  var a, l;
  const o = ga(H0, r), i = new Map(t), s = o != null && o.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let c = i.get(u.id);
    if (o.checkEquality && u === (c == null ? void 0 : c.internals.userNode))
      t.set(u.id, c);
    else {
      const f = To(u, o.nodeOrigin), d = Ir(u.extent) ? u.extent : o.nodeExtent, g = fr(f, d, tr(u));
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
          z: cc(u, s),
          userNode: u
        }
      }, t.set(u.id, c);
    }
    u.parentId && ha(c, t, n, r);
  }
}
function D0(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function ha(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: s } = ga(fa, r), a = e.parentId, l = t.get(a);
  if (!l) {
    console.warn(`Parent node ${a} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  D0(e, n);
  const u = o ? 1e3 : 0, { x: c, y: f, z: d } = A0(e, l, i, s, u), { positionAbsolute: g } = e.internals, v = c !== g.x || f !== g.y;
  (v || d !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: v ? { x: c, y: f } : g,
      z: d
    }
  });
}
function cc(e, t) {
  return (Tn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function A0(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = tr(e), l = To(e, n), u = Ir(e.extent) ? fr(l, e.extent, a) : l;
  let c = fr({ x: i + u.x, y: s + u.y }, r, a);
  e.extent === "parent" && (c = tc(c, a, t));
  const f = cc(e, o), d = t.internals.z ?? 0;
  return {
    x: c.x,
    y: c.y,
    z: d > f ? d : f
  };
}
function L0(e, t, n, r = [0, 0]) {
  var s;
  const o = [], i = /* @__PURE__ */ new Map();
  for (const a of e) {
    const l = t.get(a.parentId);
    if (!l)
      continue;
    const u = ((s = i.get(a.parentId)) == null ? void 0 : s.expandedRect) ?? Or(l), c = rc(u, a.rect);
    i.set(a.parentId, { expandedRect: c, parent: l });
  }
  return i.size > 0 && i.forEach(({ expandedRect: a, parent: l }, u) => {
    var C;
    const c = l.internals.positionAbsolute, f = tr(l), d = l.origin ?? r, g = a.x < c.x ? Math.round(Math.abs(c.x - a.x)) : 0, v = a.y < c.y ? Math.round(Math.abs(c.y - a.y)) : 0, x = Math.max(f.width, Math.round(a.width)), b = Math.max(f.height, Math.round(a.height)), E = (x - f.width) * d[0], m = (b - f.height) * d[1];
    (g > 0 || v > 0 || E || m) && (o.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - g + E,
        y: l.position.y - v + m
      }
    }), (C = n.get(u)) == null || C.forEach((p) => {
      e.some((_) => _.id === p.id) || o.push({
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
        width: x + (g ? d[0] * g - E : 0),
        height: b + (v ? d[1] * v - m : 0)
      }
    });
  }), o;
}
function O0(e, t, n, r, o, i) {
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
    const v = da(d.nodeElement), x = g.measured.width !== v.width || g.measured.height !== v.height;
    if (!!(v.width && v.height && (x || !g.internals.handleBounds || d.force))) {
      const E = d.nodeElement.getBoundingClientRect(), m = Ir(g.extent) ? g.extent : i;
      let { positionAbsolute: C } = g.internals;
      g.parentId && g.extent === "parent" ? C = tc(C, v, t.get(g.parentId)) : m && (C = fr(C, m, v));
      const p = {
        ...g,
        measured: v,
        internals: {
          ...g.internals,
          positionAbsolute: C,
          handleBounds: {
            source: hl("source", d.nodeElement, E, c, g.id),
            target: hl("target", d.nodeElement, E, c, g.id)
          }
        }
      };
      t.set(g.id, p), g.parentId && ha(p, t, n, { nodeOrigin: o }), a = !0, x && (l.push({
        id: g.id,
        type: "dimensions",
        dimensions: v
      }), g.expandParent && g.parentId && f.push({
        id: g.id,
        parentId: g.parentId,
        rect: Or(p, o)
      }));
    }
  }
  if (f.length > 0) {
    const d = L0(f, t, n, o);
    l.push(...d);
  }
  return { changes: l, updatedInternals: a };
}
async function I0({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function xl(e, t, n, r, o, i) {
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
function dc(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, c = `${i}-${a}--${o}-${s}`;
    xl("source", l, c, e, o, s), xl("target", l, u, e, i, a), t.set(r.id, r);
  }
}
function z0(e, t) {
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
function fc(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : fc(n, t) : !1;
}
function bl(e, t, n) {
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
function R0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !fc(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function B0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, c = null, f = !1, d = null, g = !1;
  function v({ noDragClassName: b, handleSelector: E, domNode: m, isSelectable: C, nodeId: p, nodeClickDistance: _ = 0 }) {
    d = qt(m);
    function S({ x: H, y: A }, L) {
      const { nodeLookup: z, nodeExtent: P, snapGrid: V, snapToGrid: k, nodeOrigin: N, onNodeDrag: M, onSelectionDrag: I, onError: B, updateNodePositions: F } = t();
      i = { x: H, y: A };
      let K = !1, ie = { x: 0, y: 0, x2: 0, y2: 0 };
      if (a.size > 1 && P) {
        const ee = Mo(a);
        ie = Ms(ee);
      }
      for (const [ee, W] of a) {
        if (!z.has(ee))
          continue;
        let de = { x: H - W.distance.x, y: A - W.distance.y };
        k && (de = ua(de, V));
        let me = [
          [P[0][0], P[0][1]],
          [P[1][0], P[1][1]]
        ];
        if (a.size > 1 && P && !W.extent) {
          const { positionAbsolute: Ie } = W.internals, G = Ie.x - ie.x + P[0][0], se = Ie.x + W.measured.width - ie.x2 + P[1][0], Me = Ie.y - ie.y + P[0][1], Ae = Ie.y + W.measured.height - ie.y2 + P[1][1];
          me = [
            [G, Me],
            [se, Ae]
          ];
        }
        const { position: Ce, positionAbsolute: ge } = h0({
          nodeId: ee,
          nextPosition: de,
          nodeLookup: z,
          nodeExtent: me,
          nodeOrigin: N,
          onError: B
        });
        K = K || W.position.x !== Ce.x || W.position.y !== Ce.y, W.position = Ce, W.internals.positionAbsolute = ge;
      }
      if (K && (F(a, !0), L && (r || M || !p && I))) {
        const [ee, W] = ss({
          nodeId: p,
          dragItems: a,
          nodeLookup: z
        });
        r == null || r(L, a, ee, W), M == null || M(L, ee, W), p || I == null || I(L, W);
      }
    }
    async function $() {
      if (!c)
        return;
      const { transform: H, panBy: A, autoPanSpeed: L, autoPanOnNodeDrag: z } = t();
      if (!z) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [P, V] = nc(u, c, L);
      (P !== 0 || V !== 0) && (i.x = (i.x ?? 0) - P / H[2], i.y = (i.y ?? 0) - V / H[2], await A({ x: P, y: V }) && S(i, null)), s = requestAnimationFrame($);
    }
    function T(H) {
      var K;
      const { nodeLookup: A, multiSelectionActive: L, nodesDraggable: z, transform: P, snapGrid: V, snapToGrid: k, selectNodesOnDrag: N, onNodeDragStart: M, onSelectionDragStart: I, unselectNodesAndEdges: B } = t();
      f = !0, (!N || !C) && !L && p && ((K = A.get(p)) != null && K.selected || B()), C && N && p && (e == null || e(p));
      const F = is(H.sourceEvent, { transform: P, snapGrid: V, snapToGrid: k, containerBounds: c });
      if (i = F, a = R0(A, z, F, p), a.size > 0 && (n || M || !p && I)) {
        const [ie, ee] = ss({
          nodeId: p,
          dragItems: a,
          nodeLookup: A
        });
        n == null || n(H.sourceEvent, a, ie, ee), M == null || M(H.sourceEvent, ie, ee), p || I == null || I(H.sourceEvent, ee);
      }
    }
    const D = wh().clickDistance(_).on("start", (H) => {
      const { domNode: A, nodeDragThreshold: L, transform: z, snapGrid: P, snapToGrid: V } = t();
      c = (A == null ? void 0 : A.getBoundingClientRect()) || null, g = !1, L === 0 && T(H), i = is(H.sourceEvent, { transform: z, snapGrid: P, snapToGrid: V, containerBounds: c }), u = Vn(H.sourceEvent, c);
    }).on("drag", (H) => {
      const { autoPanOnNodeDrag: A, transform: L, snapGrid: z, snapToGrid: P, nodeDragThreshold: V, nodeLookup: k } = t(), N = is(H.sourceEvent, { transform: L, snapGrid: z, snapToGrid: P, containerBounds: c });
      if ((H.sourceEvent.type === "touchmove" && H.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      p && !k.has(p)) && (g = !0), !g) {
        if (!l && A && f && (l = !0, $()), !f) {
          const M = N.xSnapped - (i.x ?? 0), I = N.ySnapped - (i.y ?? 0);
          Math.sqrt(M * M + I * I) > V && T(H);
        }
        (i.x !== N.xSnapped || i.y !== N.ySnapped) && a && f && (u = Vn(H.sourceEvent, c), S(N, H.sourceEvent));
      }
    }).on("end", (H) => {
      if (!(!f || g) && (l = !1, f = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: A, updateNodePositions: L, onNodeDragStop: z, onSelectionDragStop: P } = t();
        if (L(a, !1), o || z || !p && P) {
          const [V, k] = ss({
            nodeId: p,
            dragItems: a,
            nodeLookup: A,
            dragging: !1
          });
          o == null || o(H.sourceEvent, a, V, k), z == null || z(H.sourceEvent, V, k), p || P == null || P(H.sourceEvent, k);
        }
      }
    }).filter((H) => {
      const A = H.target;
      return !H.button && (!b || !bl(A, `.${b}`, m)) && (!E || bl(A, E, m));
    });
    d.call(D);
  }
  function x() {
    d == null || d.on(".drag", null);
  }
  return {
    update: v,
    destroy: x
  };
}
function Y0(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    _o(o, Or(i)) > 0 && r.push(i);
  return r;
}
const Z0 = 250;
function X0(e, t, n, r) {
  var a, l;
  let o = [], i = 1 / 0;
  const s = Y0(e, n, t + Z0);
  for (const u of s) {
    const c = [...((a = u.internals.handleBounds) == null ? void 0 : a.source) ?? [], ...((l = u.internals.handleBounds) == null ? void 0 : l.target) ?? []];
    for (const f of c) {
      if (r.nodeId === f.nodeId && r.type === f.type && r.id === f.id)
        continue;
      const { x: d, y: g } = xo(u, f, f.position, !0), v = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(g - e.y, 2));
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
function gc(e, t, n, r, o, i = !1) {
  var u, c, f;
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? (u = s.internals.handleBounds) == null ? void 0 : u[t] : [...((c = s.internals.handleBounds) == null ? void 0 : c.source) ?? [], ...((f = s.internals.handleBounds) == null ? void 0 : f.target) ?? []], l = (n ? a == null ? void 0 : a.find((d) => d.id === n) : a == null ? void 0 : a[0]) ?? null;
  return l && i ? { ...l, ...xo(s, l, l.position, !0) } : l;
}
function hc(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function F0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const vc = () => !0;
function W0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: f, panBy: d, cancelConnection: g, onConnectStart: v, onConnect: x, onConnectEnd: b, isValidConnection: E = vc, onReconnectEnd: m, updateConnection: C, getTransform: p, getFromHandle: _, autoPanSpeed: S }) {
  const $ = m0(e.target);
  let T = 0, D;
  const { x: H, y: A } = Vn(e), L = $ == null ? void 0 : $.elementFromPoint(H, A), z = hc(i, L), P = a == null ? void 0 : a.getBoundingClientRect();
  if (!P || !z)
    return;
  const V = gc(o, z, r, l, t);
  if (!V)
    return;
  let k = Vn(e, P), N = !1, M = null, I = !1, B = null;
  function F() {
    if (!c || !P)
      return;
    const [ge, Ie] = nc(k, P, S);
    d({ x: ge, y: Ie }), T = requestAnimationFrame(F);
  }
  const K = {
    ...V,
    nodeId: o,
    type: z,
    position: V.position
  }, ie = l.get(o), W = {
    inProgress: !0,
    isValid: null,
    from: xo(ie, K, Ee.Left, !0),
    fromHandle: K,
    fromPosition: K.position,
    fromNode: ie,
    to: k,
    toHandle: null,
    toPosition: ll[K.position],
    toNode: null
  };
  C(W);
  let de = W;
  v == null || v(e, { nodeId: o, handleId: r, handleType: z });
  function me(ge) {
    if (!_() || !K) {
      Ce(ge);
      return;
    }
    const Ie = p();
    k = Vn(ge, P), D = X0(Ho(k, Ie, !1, [1, 1]), n, l, K), N || (F(), N = !0);
    const G = pc(ge, {
      handle: D,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: E,
      doc: $,
      lib: u,
      flowId: f,
      nodeLookup: l
    });
    B = G.handleDomNode, M = G.connection, I = F0(!!D, G.isValid);
    const se = {
      // from stays the same
      ...de,
      isValid: I,
      to: D && I ? oc({ x: D.x, y: D.y }, Ie) : k,
      toHandle: G.toHandle,
      toPosition: I && G.toHandle ? G.toHandle.position : ll[K.position],
      toNode: G.toHandle ? l.get(G.toHandle.nodeId) : null
    };
    I && D && de.toHandle && se.toHandle && de.toHandle.type === se.toHandle.type && de.toHandle.nodeId === se.toHandle.nodeId && de.toHandle.id === se.toHandle.id && de.to.x === se.to.x && de.to.y === se.to.y || (C(se), de = se);
  }
  function Ce(ge) {
    (D || B) && M && I && (x == null || x(M));
    const { inProgress: Ie, ...G } = de, se = {
      ...G,
      toPosition: de.toHandle ? de.toPosition : null
    };
    b == null || b(ge, se), i && (m == null || m(ge, se)), g(), cancelAnimationFrame(T), N = !1, I = !1, M = null, B = null, $.removeEventListener("mousemove", me), $.removeEventListener("mouseup", Ce), $.removeEventListener("touchmove", me), $.removeEventListener("touchend", Ce);
  }
  $.addEventListener("mousemove", me), $.addEventListener("mouseup", Ce), $.addEventListener("touchmove", me), $.addEventListener("touchend", Ce);
}
function pc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = vc, nodeLookup: c }) {
  const f = i === "target", d = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: g, y: v } = Vn(e), x = s.elementFromPoint(g, v), b = x != null && x.classList.contains(`${a}-flow__handle`) ? x : d, E = {
    handleDomNode: b,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (b) {
    const m = hc(void 0, b), C = b.getAttribute("data-nodeid"), p = b.getAttribute("data-handleid"), _ = b.classList.contains("connectable"), S = b.classList.contains("connectableend");
    if (!C || !m)
      return E;
    const $ = {
      source: f ? C : r,
      sourceHandle: f ? p : o,
      target: f ? r : C,
      targetHandle: f ? o : p
    };
    E.connection = $;
    const D = _ && S && (n === dr.Strict ? f && m === "source" || !f && m === "target" : C !== r || p !== o);
    E.isValid = D && u($), E.toHandle = gc(C, m, p, c, n, !1);
  }
  return E;
}
const K0 = {
  onPointerDown: W0,
  isValid: pc
};
function q0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = qt(e);
  function i({ translateExtent: a, width: l, height: u, zoomStep: c = 10, pannable: f = !0, zoomable: d = !0, inversePan: g = !1 }) {
    const v = (C) => {
      const p = n();
      if (C.sourceEvent.type !== "wheel" || !t)
        return;
      const _ = -C.sourceEvent.deltaY * (C.sourceEvent.deltaMode === 1 ? 0.05 : C.sourceEvent.deltaMode ? 1 : 2e-3) * c, S = p[2] * Math.pow(2, _);
      t.scaleTo(S);
    };
    let x = [0, 0];
    const b = (C) => {
      (C.sourceEvent.type === "mousedown" || C.sourceEvent.type === "touchstart") && (x = [
        C.sourceEvent.clientX ?? C.sourceEvent.touches[0].clientX,
        C.sourceEvent.clientY ?? C.sourceEvent.touches[0].clientY
      ]);
    }, E = (C) => {
      const p = n();
      if (C.sourceEvent.type !== "mousemove" && C.sourceEvent.type !== "touchmove" || !t)
        return;
      const _ = [
        C.sourceEvent.clientX ?? C.sourceEvent.touches[0].clientX,
        C.sourceEvent.clientY ?? C.sourceEvent.touches[0].clientY
      ], S = [_[0] - x[0], _[1] - x[1]];
      x = _;
      const $ = r() * Math.max(p[2], Math.log(p[2])) * (g ? -1 : 1), T = {
        x: p[0] - S[0] * $,
        y: p[1] - S[1] * $
      }, D = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: T.x,
        y: T.y,
        zoom: p[2]
      }, D, a);
    }, m = Ju().on("start", b).on("zoom", f ? E : null).on("zoom.wheel", d ? v : null);
    o.call(m, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: en
  };
}
const G0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Fi = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), as = ({ x: e, y: t, zoom: n }) => Yi.translate(e, t).scale(n), _r = (e, t) => e.target.closest(`.${t}`), mc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), ls = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, yc = (e) => {
  const t = e.ctrlKey && wi() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function U0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (_r(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const f = n.property("__zoom").k || 1;
    if (c.ctrlKey && s) {
      const b = en(c), E = yc(c), m = f * Math.pow(2, E);
      r.scaleTo(n, m, b, c);
      return;
    }
    const d = c.deltaMode === 1 ? 20 : 1;
    let g = o === qn.Vertical ? 0 : c.deltaX * d, v = o === qn.Horizontal ? 0 : c.deltaY * d;
    !wi() && c.shiftKey && o !== qn.Vertical && (g = c.deltaY * d, v = 0), r.translateBy(
      n,
      -(g / f) * i,
      -(v / f) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const x = Fi(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, a == null || a(c, x)), e.isPanScrolling && (l == null || l(c, x), e.panScrollTimeout = setTimeout(() => {
      u == null || u(c, x), e.isPanScrolling = !1;
    }, 150));
  };
}
function j0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    if (!t && r.type === "wheel" && !r.ctrlKey || _r(r, e))
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function J0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var i, s, a;
    if ((i = r.sourceEvent) != null && i.internal)
      return;
    const o = Fi(r.transform);
    e.mouseButton = ((s = r.sourceEvent) == null ? void 0 : s.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, ((a = r.sourceEvent) == null ? void 0 : a.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, o));
  };
}
function Q0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var s, a;
    e.usedRightMouseButton = !!(n && mc(t, e.mouseButton ?? 0)), (s = i.sourceEvent) != null && s.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((a = i.sourceEvent) != null && a.internal) && (o == null || o(i.sourceEvent, Fi(i.transform)));
  };
}
function e2({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    var a;
    if (!((a = s.sourceEvent) != null && a.internal) && (e.isZoomingOrPanning = !1, i && mc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && G0(e.prevViewport, s.transform))) {
      const l = Fi(s.transform);
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
function t2({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: u }) {
  return (c) => {
    var v;
    const f = e || t, d = n && c.ctrlKey;
    if (c.button === 1 && c.type === "mousedown" && (_r(c, `${u}-flow__node`) || _r(c, `${u}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || s || _r(c, a) && c.type === "wheel" || _r(c, l) && (c.type !== "wheel" || o && c.type === "wheel" && !e) || !n && c.ctrlKey && c.type === "wheel")
      return !1;
    if (!n && c.type === "touchstart" && ((v = c.touches) == null ? void 0 : v.length) > 1)
      return c.preventDefault(), !1;
    if (!f && !o && !d && c.type === "wheel" || !r && (c.type === "mousedown" || c.type === "touchstart") || Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
      return !1;
    const g = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || c.type === "wheel") && g;
  };
}
function n2({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: s, onPanZoomStart: a, onPanZoomEnd: l, onDraggingChange: u }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, f = e.getBoundingClientRect(), d = Ju().clickDistance(!Tn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), g = qt(e).call(d);
  C({
    x: i.x,
    y: i.y,
    zoom: Lr(i.zoom, t, n)
  }, [
    [0, 0],
    [f.width, f.height]
  ], o);
  const v = g.on("wheel.zoom"), x = g.on("dblclick.zoom");
  d.wheelDelta(yc);
  function b(L, z) {
    return g ? new Promise((P) => {
      d == null || d.transform(ls(g, z == null ? void 0 : z.duration, () => P(!0)), L);
    }) : Promise.resolve(!1);
  }
  function E({ noWheelClassName: L, noPanClassName: z, onPaneContextMenu: P, userSelectionActive: V, panOnScroll: k, panOnDrag: N, panOnScrollMode: M, panOnScrollSpeed: I, preventScrolling: B, zoomOnPinch: F, zoomOnScroll: K, zoomOnDoubleClick: ie, zoomActivationKeyPressed: ee, lib: W, onTransformChange: de }) {
    V && !c.isZoomingOrPanning && m();
    const Ce = k && !ee && !V ? U0({
      zoomPanValues: c,
      noWheelClassName: L,
      d3Selection: g,
      d3Zoom: d,
      panOnScrollMode: M,
      panOnScrollSpeed: I,
      zoomOnPinch: F,
      onPanZoomStart: a,
      onPanZoom: s,
      onPanZoomEnd: l
    }) : j0({
      noWheelClassName: L,
      preventScrolling: B,
      d3ZoomHandler: v
    });
    if (g.on("wheel.zoom", Ce, { passive: !1 }), !V) {
      const Ie = J0({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: a
      });
      d.on("start", Ie);
      const G = Q0({
        zoomPanValues: c,
        panOnDrag: N,
        onPaneContextMenu: !!P,
        onPanZoom: s,
        onTransformChange: de
      });
      d.on("zoom", G);
      const se = e2({
        zoomPanValues: c,
        panOnDrag: N,
        panOnScroll: k,
        onPaneContextMenu: P,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      d.on("end", se);
    }
    const ge = t2({
      zoomActivationKeyPressed: ee,
      panOnDrag: N,
      zoomOnScroll: K,
      panOnScroll: k,
      zoomOnDoubleClick: ie,
      zoomOnPinch: F,
      userSelectionActive: V,
      noPanClassName: z,
      noWheelClassName: L,
      lib: W
    });
    d.filter(ge), ie ? g.on("dblclick.zoom", x) : g.on("dblclick.zoom", null);
  }
  function m() {
    d.on("zoom", null);
  }
  async function C(L, z, P) {
    const V = as(L), k = d == null ? void 0 : d.constrain()(V, z, P);
    return k && await b(k), new Promise((N) => N(k));
  }
  async function p(L, z) {
    const P = as(L);
    return await b(P, z), new Promise((V) => V(P));
  }
  function _(L) {
    if (g) {
      const z = as(L), P = g.property("__zoom");
      (P.k !== L.zoom || P.x !== L.x || P.y !== L.y) && (d == null || d.transform(g, z, null, { sync: !0 }));
    }
  }
  function S() {
    const L = g ? ju(g.node()) : { x: 0, y: 0, k: 1 };
    return { x: L.x, y: L.y, zoom: L.k };
  }
  function $(L, z) {
    return g ? new Promise((P) => {
      d == null || d.scaleTo(ls(g, z == null ? void 0 : z.duration, () => P(!0)), L);
    }) : Promise.resolve(!1);
  }
  function T(L, z) {
    return g ? new Promise((P) => {
      d == null || d.scaleBy(ls(g, z == null ? void 0 : z.duration, () => P(!0)), L);
    }) : Promise.resolve(!1);
  }
  function D(L) {
    d == null || d.scaleExtent(L);
  }
  function H(L) {
    d == null || d.translateExtent(L);
  }
  function A(L) {
    const z = !Tn(L) || L < 0 ? 0 : L;
    d == null || d.clickDistance(z);
  }
  return {
    update: E,
    destroy: m,
    setViewport: p,
    setViewportConstrained: C,
    getViewport: S,
    scaleTo: $,
    scaleBy: T,
    setScaleExtent: D,
    setTranslateExtent: H,
    syncViewport: _,
    setClickDistance: A
  };
}
var Cl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Cl || (Cl = {}));
var r2 = /* @__PURE__ */ ne('<div role="button" tabindex="-1"><!></div>');
function Jn(e, t) {
  ue(t, !1);
  const [n, r] = tt(), o = () => Q(ie, "$connectable", n), i = () => Q(Ce, "$connectionRadius", n), s = () => Q(de, "$domNode", n), a = () => Q(me, "$nodeLookup", n), l = () => Q(W, "$connectionMode", n), u = () => Q(G, "$lib", n), c = () => Q(Fe, "$autoPanOnConnect", n), f = () => Q(Oe, "$flowId", n), d = () => Q(Ie, "$isValidConnectionStore", n), g = () => Q(Me, "$onedgecreate", n), v = () => Q(oe, "$onConnectAction", n), x = () => Q(ve, "$onConnectStartAction", n), b = () => Q(xe, "$onConnectEndAction", n), E = () => Q(ge, "$viewport", n), m = () => Q(ct, "$connection", n), C = () => Q(Le, "$edges", n), p = () => Q(Qe, "$connectionLookup", n), _ = re(), S = re(), $ = re(), T = re(), D = re(), H = re(), A = re(), L = re();
  let z = w(t, "id", 12, void 0), P = w(t, "type", 12, "source"), V = w(t, "position", 28, () => Ee.Top), k = w(t, "style", 12, void 0), N = w(t, "isValidConnection", 12, void 0), M = w(t, "onconnect", 12, void 0), I = w(t, "ondisconnect", 12, void 0), B = w(t, "isConnectable", 12, void 0), F = w(t, "class", 12, void 0);
  const K = lr("svelteflow__node_id"), ie = lr("svelteflow__node_connectable"), ee = Ge(), {
    connectionMode: W,
    domNode: de,
    nodeLookup: me,
    connectionRadius: Ce,
    viewport: ge,
    isValidConnection: Ie,
    lib: G,
    addEdge: se,
    onedgecreate: Me,
    panBy: Ae,
    cancelConnection: Xe,
    updateConnection: te,
    autoPanOnConnect: Fe,
    edges: Le,
    connectionLookup: Qe,
    onconnect: oe,
    onconnectstart: ve,
    onconnectend: xe,
    flowId: Oe,
    connection: ct
  } = ee;
  function lt(Pe) {
    const rt = sc(Pe);
    (rt && Pe.button === 0 || !rt) && K0.onPointerDown(Pe, {
      handleId: h($),
      nodeId: K,
      isTarget: h(_),
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
      panBy: Ae,
      onConnect: (ye) => {
        var at;
        const ot = g() ? g()(ye) : ye;
        ot && (se(ot), (at = v()) == null || at(ye));
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
        E().x,
        E().y,
        E().zoom
      ],
      getFromHandle: () => m().fromHandle
    });
  }
  let J = re(null), ze = re();
  he(() => j(P()), () => {
    U(_, P() === "target");
  }), he(
    () => (j(B()), o()),
    () => {
      U(S, B() !== void 0 ? B() : o());
    }
  ), he(() => j(z()), () => {
    U($, z() || null);
  }), he(
    () => (j(M()), j(I()), C(), p(), j(P()), j(z())),
    () => {
      (M() || I()) && (C(), U(ze, p().get(`${K}-${P()}${z() ? `-${z()}` : ""}`)));
    }
  ), he(
    () => (h(J), h(ze), j(I()), j(M())),
    () => {
      if (h(J) && !u0(h(ze), h(J))) {
        const Pe = h(ze) ?? /* @__PURE__ */ new Map();
        ul(h(J), Pe, I()), ul(Pe, h(J), M());
      }
      U(J, h(ze) ?? /* @__PURE__ */ new Map());
    }
  ), he(() => m(), () => {
    U(T, !!m().fromHandle);
  }), he(
    () => (m(), j(P()), h($)),
    () => {
      var Pe, rt, ye;
      U(D, ((Pe = m().fromHandle) == null ? void 0 : Pe.nodeId) === K && ((rt = m().fromHandle) == null ? void 0 : rt.type) === P() && ((ye = m().fromHandle) == null ? void 0 : ye.id) === h($));
    }
  ), he(
    () => (m(), j(P()), h($)),
    () => {
      var Pe, rt, ye;
      U(H, ((Pe = m().toHandle) == null ? void 0 : Pe.nodeId) === K && ((rt = m().toHandle) == null ? void 0 : rt.type) === P() && ((ye = m().toHandle) == null ? void 0 : ye.id) === h($));
    }
  ), he(
    () => (l(), m(), j(P()), h($)),
    () => {
      var Pe, rt, ye;
      U(A, l() === dr.Strict ? ((Pe = m().fromHandle) == null ? void 0 : Pe.type) !== P() : K !== ((rt = m().fromHandle) == null ? void 0 : rt.nodeId) || h($) !== ((ye = m().fromHandle) == null ? void 0 : ye.id));
    }
  ), he(() => (h(H), m()), () => {
    U(L, h(H) && m().isValid);
  }), gt(), He();
  var le = r2();
  fe(le, "data-nodeid", K);
  let dn;
  var jt = X(le);
  pt(jt, t, "default", {}), Z(le), $e(
    (Pe) => {
      fe(le, "data-handleid", h($)), fe(le, "data-handlepos", V()), fe(le, "data-id", `${f() ?? ""}-${K ?? ""}-${z() || ""}-${P() ?? ""}`), dn = kt(le, 1, Cn(Pe), null, dn, {
        valid: h(L),
        connectingto: h(H),
        connectingfrom: h(D),
        source: !h(_),
        target: h(_),
        connectablestart: h(S),
        connectableend: h(S),
        connectable: h(S),
        connectionindicator: h(S) && (!h(T) || h(A))
      }), fe(le, "style", k());
    },
    [
      () => $t([
        "svelte-flow__handle",
        `svelte-flow__handle-${V()}`,
        "nodrag",
        "nopan",
        V(),
        F()
      ])
    ],
    pe
  ), Ye("mousedown", le, lt), Ye("touchstart", le, lt), O(e, le);
  var fn = ce({
    get id() {
      return z();
    },
    set id(Pe) {
      z(Pe), y();
    },
    get type() {
      return P();
    },
    set type(Pe) {
      P(Pe), y();
    },
    get position() {
      return V();
    },
    set position(Pe) {
      V(Pe), y();
    },
    get style() {
      return k();
    },
    set style(Pe) {
      k(Pe), y();
    },
    get isValidConnection() {
      return N();
    },
    set isValidConnection(Pe) {
      N(Pe), y();
    },
    get onconnect() {
      return M();
    },
    set onconnect(Pe) {
      M(Pe), y();
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
      return F();
    },
    set class(Pe) {
      F(Pe), y();
    }
  });
  return r(), fn;
}
ae(
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
var o2 = /* @__PURE__ */ ne("<!> <!>", 1);
function xi(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  nt(n, ["data", "targetPosition", "sourcePosition"]), ue(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "targetPosition", 12, void 0), i = w(t, "sourcePosition", 12, void 0);
  He();
  var s = o2(), a = be(s);
  const l = /* @__PURE__ */ pe(() => o() ?? Ee.Top);
  Jn(a, {
    type: "target",
    get position() {
      return h(l);
    }
  });
  var u = R(a), c = R(u);
  const f = /* @__PURE__ */ pe(() => i() ?? Ee.Bottom);
  return Jn(c, {
    type: "source",
    get position() {
      return h(f);
    }
  }), $e(() => {
    var d;
    return Yt(u, ` ${((d = r()) == null ? void 0 : d.label) ?? ""} `);
  }), O(e, s), ce({
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
ae(
  xi,
  {
    data: {},
    targetPosition: {},
    sourcePosition: {}
  },
  [],
  [],
  !0
);
var i2 = /* @__PURE__ */ ne(" <!>", 1);
function wc(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  nt(n, ["data", "sourcePosition"]), ue(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "sourcePosition", 12, void 0);
  He(), Ne();
  var i = i2(), s = be(i), a = R(s);
  const l = /* @__PURE__ */ pe(() => o() ?? Ee.Bottom);
  return Jn(a, {
    type: "source",
    get position() {
      return h(l);
    }
  }), $e(() => {
    var u;
    return Yt(s, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), O(e, i), ce({
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
ae(wc, { data: {}, sourcePosition: {} }, [], [], !0);
var s2 = /* @__PURE__ */ ne(" <!>", 1);
function _c(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  nt(n, ["data", "targetPosition"]), ue(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "targetPosition", 12, void 0);
  He(), Ne();
  var i = s2(), s = be(i), a = R(s);
  const l = /* @__PURE__ */ pe(() => o() ?? Ee.Top);
  return Jn(a, {
    type: "target",
    get position() {
      return h(l);
    }
  }), $e(() => {
    var u;
    return Yt(s, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), O(e, i), ce({
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
ae(_c, { data: {}, targetPosition: {} }, [], [], !0);
function xc(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  nt(n, []);
}
ae(xc, {}, [], [], !0);
function kl(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function Er(e, { target: t, domNode: n }) {
  return kl(e, n, t), {
    async update({ target: r, domNode: o }) {
      kl(e, o, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var a2 = /* @__PURE__ */ ne("<div><!></div>");
function bc(e, t) {
  ue(t, !1);
  const [n, r] = tt(), o = () => Q(i, "$domNode", n), { domNode: i } = Ge();
  He();
  var s = a2(), a = X(s);
  pt(a, t, "default", {}), Z(s), vt(s, (l, u) => Er == null ? void 0 : Er(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), O(e, s), ce(), r();
}
ae(bc, {}, ["default"], [], !0);
function Cc() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: i, elementsSelectable: s } = Ge();
  return (a) => {
    const l = q(e).get(a);
    if (!l) {
      console.warn("012", Ar.error012(a));
      return;
    }
    (l.selectable || q(s) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && q(r) && i({ nodes: [], edges: [l] }) : o([a]));
  };
}
var l2 = /* @__PURE__ */ ne('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function kc(e, t) {
  ue(t, !1);
  let n = w(t, "style", 12, void 0), r = w(t, "x", 12, void 0), o = w(t, "y", 12, void 0);
  const i = Cc(), s = lr("svelteflow__edge_id");
  return He(), bc(e, {
    children: (a, l) => {
      var u = l2(), c = X(u);
      pt(c, t, "default", {}), Z(u), $e(() => {
        fe(u, "style", "pointer-events: all;" + n()), st(u, "transform", `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`);
      }), Ye("keyup", u, () => {
      }), Ye("click", u, () => {
        s && i(s);
      }), O(a, u);
    },
    $$slots: { default: !0 }
  }), ce({
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
ae(kc, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var u2 = /* @__PURE__ */ _e('<path fill="none" class="svelte-flow__edge-interaction"></path>'), c2 = /* @__PURE__ */ _e('<path fill="none"></path><!><!>', 1);
function Vo(e, t) {
  ue(t, !1);
  let n = w(t, "id", 12, void 0), r = w(t, "path", 12), o = w(t, "label", 12, void 0), i = w(t, "labelX", 12, void 0), s = w(t, "labelY", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "markerStart", 12, void 0), u = w(t, "markerEnd", 12, void 0), c = w(t, "style", 12, void 0), f = w(t, "interactionWidth", 12, 20), d = w(t, "class", 12, void 0), g = f() === void 0 ? 20 : f();
  He();
  var v = c2(), x = be(v), b = R(x);
  {
    var E = (p) => {
      var _ = u2();
      fe(_, "stroke-opacity", 0), fe(_, "stroke-width", g), $e(() => fe(_, "d", r())), O(p, _);
    };
    ke(b, (p) => {
      g && p(E);
    });
  }
  var m = R(b);
  {
    var C = (p) => {
      kc(p, {
        get x() {
          return i();
        },
        get y() {
          return s();
        },
        get style() {
          return a();
        },
        children: (_, S) => {
          Ne();
          var $ = Be();
          $e(() => Yt($, o())), O(_, $);
        },
        $$slots: { default: !0 }
      });
    };
    ke(m, (p) => {
      o() && p(C);
    });
  }
  return $e(
    (p) => {
      fe(x, "id", n()), fe(x, "d", r()), kt(x, 0, Cn(p)), fe(x, "marker-start", l()), fe(x, "marker-end", u()), fe(x, "style", c());
    },
    [
      () => $t(["svelte-flow__edge-path", d()])
    ],
    pe
  ), O(e, v), ce({
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
ae(
  Vo,
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
  ]), ue(t, !1);
  const r = re(), o = re(), i = re();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), g = w(t, "sourceY", 12), v = w(t, "sourcePosition", 12), x = w(t, "targetX", 12), b = w(t, "targetY", 12), E = w(t, "targetPosition", 12);
  return he(
    () => (h(r), h(o), h(i), j(d()), j(g()), j(x()), j(b()), j(v()), j(E())),
    () => {
      ((m) => (U(r, m[0]), U(o, m[1]), U(i, m[2])))(ac({
        sourceX: d(),
        sourceY: g(),
        targetX: x(),
        targetY: b(),
        sourcePosition: v(),
        targetPosition: E()
      }));
    }
  ), gt(), He(), Vo(e, {
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
  }), ce({
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
      return x();
    },
    set targetX(m) {
      x(m), y();
    },
    get targetY() {
      return b();
    },
    set targetY(m) {
      b(m), y();
    },
    get targetPosition() {
      return E();
    },
    set targetPosition(m) {
      E(m), y();
    }
  });
}
ae(
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
function Ec(e, t) {
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
  ]), ue(t, !1);
  const r = re(), o = re(), i = re();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), g = w(t, "sourceY", 12), v = w(t, "sourcePosition", 12), x = w(t, "targetX", 12), b = w(t, "targetY", 12), E = w(t, "targetPosition", 12);
  return he(
    () => (h(r), h(o), h(i), j(d()), j(g()), j(x()), j(b()), j(v()), j(E())),
    () => {
      ((m) => (U(r, m[0]), U(o, m[1]), U(i, m[2])))(_i({
        sourceX: d(),
        sourceY: g(),
        targetX: x(),
        targetY: b(),
        sourcePosition: v(),
        targetPosition: E()
      }));
    }
  ), gt(), He(), Vo(e, {
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
  }), ce({
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
      return x();
    },
    set targetX(m) {
      x(m), y();
    },
    get targetY() {
      return b();
    },
    set targetY(m) {
      b(m), y();
    },
    get targetPosition() {
      return E();
    },
    set targetPosition(m) {
      E(m), y();
    }
  });
}
ae(
  Ec,
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
    "targetX",
    "targetY"
  ]), ue(t, !1);
  const r = re(), o = re(), i = re();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), g = w(t, "sourceY", 12), v = w(t, "targetX", 12), x = w(t, "targetY", 12);
  return he(
    () => (h(r), h(o), h(i), j(d()), j(g()), j(v()), j(x())),
    () => {
      ((b) => (U(r, b[0]), U(o, b[1]), U(i, b[2])))(Hs({
        sourceX: d(),
        sourceY: g(),
        targetX: v(),
        targetY: x()
      }));
    }
  ), gt(), He(), Vo(e, {
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
  }), ce({
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
      return f();
    },
    set interactionWidth(b) {
      f(b), y();
    },
    get sourceX() {
      return d();
    },
    set sourceX(b) {
      d(b), y();
    },
    get sourceY() {
      return g();
    },
    set sourceY(b) {
      g(b), y();
    },
    get targetX() {
      return v();
    },
    set targetX(b) {
      v(b), y();
    },
    get targetY() {
      return x();
    },
    set targetY(b) {
      x(b), y();
    }
  });
}
ae(
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
    targetX: {},
    targetY: {}
  },
  [],
  [],
  !0
);
function Sc(e, t) {
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
  ]), ue(t, !1);
  const r = re(), o = re(), i = re();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), g = w(t, "sourceY", 12), v = w(t, "sourcePosition", 12), x = w(t, "targetX", 12), b = w(t, "targetY", 12), E = w(t, "targetPosition", 12);
  return he(
    () => (h(r), h(o), h(i), j(d()), j(g()), j(x()), j(b()), j(v()), j(E())),
    () => {
      ((m) => (U(r, m[0]), U(o, m[1]), U(i, m[2])))(_i({
        sourceX: d(),
        sourceY: g(),
        targetX: x(),
        targetY: b(),
        sourcePosition: v(),
        targetPosition: E(),
        borderRadius: 0
      }));
    }
  ), gt(), He(), Vo(e, {
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
  }), ce({
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
      return x();
    },
    set targetX(m) {
      x(m), y();
    },
    get targetY() {
      return b();
    },
    set targetY(m) {
      b(m), y();
    },
    get targetPosition() {
      return E();
    },
    set targetPosition(m) {
      E(m), y();
    }
  });
}
ae(
  Sc,
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
function d2(e, t) {
  const n = e.set, r = t.set, o = q(e), i = q(t);
  let a = o.length === 0 && i.length > 0 ? i : o;
  e.set(a);
  const l = (u) => {
    const c = n(u);
    return a = c, r(a), c;
  };
  e.set = t.set = l, e.update = t.update = (u) => l(u(a));
}
function f2(e, t) {
  const n = e.set, r = t.set;
  let o = q(t);
  e.set(o);
  const i = (s) => {
    n(s), r(s), o = s;
  };
  e.set = t.set = i, e.update = t.update = (s) => i(s(o));
}
const g2 = (e, t, n) => {
  if (!n)
    return;
  const r = q(e), o = t.set, i = n.set;
  let s = n ? q(n) : { x: 0, y: 0, zoom: 1 };
  t.set(s), t.set = (a) => (o(a), i(a), s = a, a), n.set = (a) => (r == null || r.syncViewport(a), o(a), i(a), s = a, a), t.update = (a) => {
    t.set(a(s));
  }, n.update = (a) => {
    n.set(a(s));
  };
}, h2 = (e, t, n, r = [0, 0], o = pi) => {
  const { subscribe: i, set: s, update: a } = we([]);
  let l = e, u = {}, c = !0;
  const f = (x) => (uc(x, t, n, {
    elevateNodesOnSelect: c,
    nodeOrigin: r,
    nodeExtent: o,
    defaults: u,
    checkEquality: !1
  }), l = x, s(l), l), d = (x) => f(x(l)), g = (x) => {
    u = x;
  }, v = (x) => {
    c = x.elevateNodesOnSelect ?? c;
  };
  return f(l), {
    subscribe: i,
    set: f,
    update: d,
    setDefaultOptions: g,
    setOptions: v
  };
}, v2 = (e, t, n, r) => {
  const { subscribe: o, set: i, update: s } = we([]);
  let a = e, l = {};
  const u = (d) => {
    const g = l ? d.map((v) => ({ ...l, ...v })) : d;
    dc(t, n, g), a = g, i(a);
  }, c = (d) => u(d(a)), f = (d) => {
    l = d;
  };
  return u(a), {
    subscribe: o,
    set: u,
    update: c,
    setDefaultOptions: f
  };
}, Pc = {
  input: wc,
  output: _c,
  default: xi,
  group: xc
}, Nc = {
  straight: $c,
  smoothstep: Ec,
  default: bi,
  step: Sc
}, p2 = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) => {
  const a = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), f = i ?? [0, 0], d = s ?? pi;
  uc(e, a, l, {
    nodeExtent: d,
    nodeOrigin: f,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), dc(u, c, t);
  let g = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const v = Mo(a, {
      filter: (x) => !!((x.width || x.initialWidth) && (x.height || x.initialHeight))
    });
    g = ca(v, n, r, 0.5, 2, 0.1);
  }
  return {
    flowId: we(null),
    nodes: h2(e, a, l, f, d),
    nodeLookup: Wt(a),
    parentLookup: Wt(l),
    edgeLookup: Wt(c),
    visibleNodes: Wt([]),
    edges: v2(t, u, c),
    visibleEdges: Wt([]),
    connectionLookup: Wt(u),
    height: we(500),
    width: we(500),
    minZoom: we(0.5),
    maxZoom: we(2),
    nodeOrigin: we(f),
    nodeDragThreshold: we(1),
    nodeExtent: we(d),
    translateExtent: we(pi),
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
    selectionMode: we(mi.Partial),
    nodeTypes: we(Pc),
    edgeTypes: we(Nc),
    viewport: we(g),
    connectionMode: we(dr.Strict),
    domNode: we(null),
    connection: Wt(Ns),
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
    onerror: we(v0),
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
function m2(e) {
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
    return c && f && b0({
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
    const f = N0({
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
      zIndex: x0({
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
function y2(e) {
  return Kn([
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.width,
    e.height,
    e.viewport,
    e.nodes
  ], ([t, n, r, o, i]) => {
    const s = [i.x, i.y, i.zoom];
    return n ? Qu(t, { x: 0, y: 0, width: r, height: o }, s, !0) : Array.from(t.values());
  });
}
const Wi = Symbol();
function Tc({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) {
  const a = p2({
    nodes: e,
    edges: t,
    width: n,
    height: r,
    fitView: o,
    nodeOrigin: i,
    nodeExtent: s
  });
  function l(k) {
    a.nodeTypes.set({
      ...Pc,
      ...k
    });
  }
  function u(k) {
    a.edgeTypes.set({
      ...Nc,
      ...k
    });
  }
  function c(k) {
    const N = q(a.edges);
    a.edges.set(E0(k, N));
  }
  const f = (k, N = !1) => {
    var I;
    const M = q(a.nodeLookup);
    for (const [B, F] of k) {
      const K = (I = M.get(B)) == null ? void 0 : I.internals.userNode;
      K && (K.position = F.position, K.dragging = N);
    }
    a.nodes.update((B) => B);
  };
  function d(k) {
    var F, K, ie;
    const N = q(a.nodeLookup), M = q(a.parentLookup), { changes: I, updatedInternals: B } = O0(k, N, q(a.parentLookup), q(a.domNode), q(a.nodeOrigin));
    if (B) {
      if (V0(N, M, { nodeOrigin: i, nodeExtent: s }), !q(a.fitViewOnInitDone) && q(a.fitViewOnInit)) {
        const ee = q(a.fitViewOptions), W = v({
          ...ee,
          nodes: ee == null ? void 0 : ee.nodes
        });
        a.fitViewOnInitDone.set(W);
      }
      for (const ee of I) {
        const W = (F = N.get(ee.id)) == null ? void 0 : F.internals.userNode;
        if (W)
          switch (ee.type) {
            case "dimensions": {
              const de = { ...W.measured, ...ee.dimensions };
              ee.setAttributes && (W.width = ((K = ee.dimensions) == null ? void 0 : K.width) ?? W.width, W.height = ((ie = ee.dimensions) == null ? void 0 : ie.height) ?? W.height), W.measured = de;
              break;
            }
            case "position":
              W.position = ee.position ?? W.position;
              break;
          }
      }
      a.nodes.update((ee) => ee), q(a.nodesInitialized) || a.nodesInitialized.set(!0);
    }
  }
  function g(k) {
    const N = q(a.panZoom), M = q(a.domNode);
    if (!N || !M)
      return Promise.resolve(!1);
    const { width: I, height: B } = da(M), F = cl(q(a.nodeLookup), k);
    return dl({
      nodes: F,
      width: I,
      height: B,
      minZoom: q(a.minZoom),
      maxZoom: q(a.maxZoom),
      panZoom: N
    }, k);
  }
  function v(k) {
    const N = q(a.panZoom);
    if (!N)
      return !1;
    const M = cl(q(a.nodeLookup), k);
    return dl({
      nodes: M,
      width: q(a.width),
      height: q(a.height),
      minZoom: q(a.minZoom),
      maxZoom: q(a.maxZoom),
      panZoom: N
    }, k), M.size > 0;
  }
  function x(k, N) {
    const M = q(a.panZoom);
    return M ? M.scaleBy(k, N) : Promise.resolve(!1);
  }
  function b(k) {
    return x(1.2, k);
  }
  function E(k) {
    return x(1 / 1.2, k);
  }
  function m(k) {
    const N = q(a.panZoom);
    N && (N.setScaleExtent([k, q(a.maxZoom)]), a.minZoom.set(k));
  }
  function C(k) {
    const N = q(a.panZoom);
    N && (N.setScaleExtent([q(a.minZoom), k]), a.maxZoom.set(k));
  }
  function p(k) {
    const N = q(a.panZoom);
    N && (N.setTranslateExtent(k), a.translateExtent.set(k));
  }
  function _(k) {
    let N = !1;
    return k.forEach((M) => {
      M.selected && (M.selected = !1, N = !0);
    }), N;
  }
  function S(k) {
    var N;
    (N = q(a.panZoom)) == null || N.setClickDistance(k);
  }
  function $(k) {
    _((k == null ? void 0 : k.nodes) || q(a.nodes)) && a.nodes.set(q(a.nodes)), _((k == null ? void 0 : k.edges) || q(a.edges)) && a.edges.set(q(a.edges));
  }
  a.deleteKeyPressed.subscribe(async (k) => {
    var N;
    if (k) {
      const M = q(a.nodes), I = q(a.edges), B = M.filter((ee) => ee.selected), F = I.filter((ee) => ee.selected), { nodes: K, edges: ie } = await ec({
        nodesToRemove: B,
        edgesToRemove: F,
        nodes: M,
        edges: I,
        onBeforeDelete: q(a.onbeforedelete)
      });
      (K.length || ie.length) && (a.nodes.update((ee) => ee.filter((W) => !K.some((de) => de.id === W.id))), a.edges.update((ee) => ee.filter((W) => !ie.some((de) => de.id === W.id))), (N = q(a.ondelete)) == null || N({
        nodes: K,
        edges: ie
      }));
    }
  });
  function T(k) {
    const N = q(a.multiselectionKeyPressed);
    a.nodes.update((M) => M.map((I) => {
      const B = k.includes(I.id), F = N && I.selected || B;
      return I.selected = F, I;
    })), N || a.edges.update((M) => M.map((I) => (I.selected = !1, I)));
  }
  function D(k) {
    const N = q(a.multiselectionKeyPressed);
    a.edges.update((M) => M.map((I) => {
      const B = k.includes(I.id), F = N && I.selected || B;
      return I.selected = F, I;
    })), N || a.nodes.update((M) => M.map((I) => (I.selected = !1, I)));
  }
  function H(k) {
    var M;
    const N = (M = q(a.nodes)) == null ? void 0 : M.find((I) => I.id === k);
    if (!N) {
      console.warn("012", Ar.error012(k));
      return;
    }
    a.selectionRect.set(null), a.selectionRectMode.set(null), N.selected ? N.selected && q(a.multiselectionKeyPressed) && $({ nodes: [N], edges: [] }) : T([k]);
  }
  function A(k) {
    const N = q(a.viewport);
    return I0({
      delta: k,
      panZoom: q(a.panZoom),
      transform: [N.x, N.y, N.zoom],
      translateExtent: q(a.translateExtent),
      width: q(a.width),
      height: q(a.height)
    });
  }
  const L = we(Ns), z = (k) => {
    L.set({ ...k });
  };
  function P() {
    L.set(Ns);
  }
  function V() {
    a.fitViewOnInitDone.set(!1), a.selectionRect.set(null), a.selectionRectMode.set(null), a.snapGrid.set(null), a.isValidConnection.set(() => !0), $(), P();
  }
  return {
    // state
    ...a,
    // derived state
    visibleEdges: m2(a),
    visibleNodes: y2(a),
    connection: Kn([L, a.viewport], ([k, N]) => k.inProgress ? {
      ...k,
      to: Ho(k.to, [N.x, N.y, N.zoom])
    } : { ...k }),
    markers: Kn([a.edges, a.defaultMarkerColor, a.flowId], ([k, N, M]) => T0(k, { defaultColor: N, id: M })),
    initialized: (() => {
      let k = !1;
      const N = q(a.nodes).length, M = q(a.edges).length;
      return Kn([a.nodesInitialized, a.edgesInitialized, a.viewportInitialized], ([I, B, F]) => k || (N === 0 ? k = F : M === 0 ? k = F && I : k = F && I && B, k));
    })(),
    // actions
    syncNodeStores: (k) => d2(a.nodes, k),
    syncEdgeStores: (k) => f2(a.edges, k),
    syncViewport: (k) => g2(a.panZoom, a.viewport, k),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: f,
    updateNodeInternals: d,
    zoomIn: b,
    zoomOut: E,
    fitView: (k) => g(k),
    setMinZoom: m,
    setMaxZoom: C,
    setTranslateExtent: p,
    setPaneClickDistance: S,
    unselectNodesAndEdges: $,
    addSelectedNodes: T,
    addSelectedEdges: D,
    handleNodeSelection: H,
    panBy: A,
    updateConnection: z,
    cancelConnection: P,
    reset: V
  };
}
function Ge() {
  const e = lr(Wi);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function w2({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) {
  const a = Tc({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s });
  return Hr(Wi, {
    getStore: () => a
  }), a;
}
function us(e, t) {
  const { panZoom: n, minZoom: r, maxZoom: o, initialViewport: i, viewport: s, dragging: a, translateExtent: l, paneClickDistance: u } = t, c = n2({
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
var _2 = /* @__PURE__ */ ne('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const x2 = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function Mc(e, t) {
  ue(t, !1), Je(e, x2);
  const [n, r] = tt(), o = () => Q(M, "$panActivationKeyPressed", n), i = () => Q(z, "$minZoom", n), s = () => Q(P, "$maxZoom", n), a = () => Q(I, "$zoomActivationKeyPressed", n), l = () => Q(L, "$selectionRect", n), u = () => Q(k, "$translateExtent", n), c = () => Q(N, "$lib", n), f = re(), d = re(), g = re();
  let v = w(t, "initialViewport", 12, void 0), x = w(t, "onMoveStart", 12, void 0), b = w(t, "onMove", 12, void 0), E = w(t, "onMoveEnd", 12, void 0), m = w(t, "panOnScrollMode", 12), C = w(t, "preventScrolling", 12), p = w(t, "zoomOnScroll", 12), _ = w(t, "zoomOnDoubleClick", 12), S = w(t, "zoomOnPinch", 12), $ = w(t, "panOnDrag", 12), T = w(t, "panOnScroll", 12), D = w(t, "paneClickDistance", 12);
  const {
    viewport: H,
    panZoom: A,
    selectionRect: L,
    minZoom: z,
    maxZoom: P,
    dragging: V,
    translateExtent: k,
    lib: N,
    panActivationKeyPressed: M,
    zoomActivationKeyPressed: I,
    viewportInitialized: B
  } = Ge(), F = (W) => H.set({
    x: W[0],
    y: W[1],
    zoom: W[2]
  });
  Dt(() => {
    ui(B, !0);
  }), he(() => j(v()), () => {
    U(f, v() || { x: 0, y: 0, zoom: 1 });
  }), he(
    () => (o(), j($())),
    () => {
      U(d, o() || $());
    }
  ), he(
    () => (o(), j(T())),
    () => {
      U(g, o() || T());
    }
  ), gt(), He();
  var K = _2(), ie = X(K);
  pt(ie, t, "default", {}), Z(K), vt(K, (W, de) => us == null ? void 0 : us(W, de), () => ({
    viewport: H,
    minZoom: i(),
    maxZoom: s(),
    initialViewport: h(f),
    dragging: V,
    panZoom: A,
    onPanZoomStart: x(),
    onPanZoom: b(),
    onPanZoomEnd: E(),
    zoomOnScroll: p(),
    zoomOnDoubleClick: _(),
    zoomOnPinch: S(),
    panOnScroll: h(g),
    panOnDrag: h(d),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: m() || qn.Free,
    zoomActivationKeyPressed: a(),
    preventScrolling: typeof C() == "boolean" ? C() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: D(),
    onTransformChange: F
  })), O(e, K);
  var ee = ce({
    get initialViewport() {
      return v();
    },
    set initialViewport(W) {
      v(W), y();
    },
    get onMoveStart() {
      return x();
    },
    set onMoveStart(W) {
      x(W), y();
    },
    get onMove() {
      return b();
    },
    set onMove(W) {
      b(W), y();
    },
    get onMoveEnd() {
      return E();
    },
    set onMoveEnd(W) {
      E(W), y();
    },
    get panOnScrollMode() {
      return m();
    },
    set panOnScrollMode(W) {
      m(W), y();
    },
    get preventScrolling() {
      return C();
    },
    set preventScrolling(W) {
      C(W), y();
    },
    get zoomOnScroll() {
      return p();
    },
    set zoomOnScroll(W) {
      p(W), y();
    },
    get zoomOnDoubleClick() {
      return _();
    },
    set zoomOnDoubleClick(W) {
      _(W), y();
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
      return T();
    },
    set panOnScroll(W) {
      T(W), y();
    },
    get paneClickDistance() {
      return D();
    },
    set paneClickDistance(W) {
      D(W), y();
    }
  });
  return r(), ee;
}
ae(
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
function El(e, t) {
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
var b2 = /* @__PURE__ */ ne("<div><!></div>");
const C2 = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function Hc(e, t) {
  ue(t, !1), Je(e, C2);
  const [n, r] = tt(), o = () => Q(P, "$panActivationKeyPressed", n), i = () => Q(L, "$selectionKeyPressed", n), s = () => Q(H, "$selectionRect", n), a = () => Q(D, "$elementsSelectable", n), l = () => Q(A, "$selectionRectMode", n), u = () => Q(S, "$edges", n), c = () => Q(_, "$nodeLookup", n), f = () => Q($, "$viewport", n), d = () => Q(z, "$selectionMode", n), g = () => Q(T, "$dragging", n), v = re(), x = re(), b = re();
  let E = w(t, "panOnDrag", 12, void 0), m = w(t, "selectionOnDrag", 12, void 0);
  const C = Oi(), {
    nodes: p,
    nodeLookup: _,
    edges: S,
    viewport: $,
    dragging: T,
    elementsSelectable: D,
    selectionRect: H,
    selectionRectMode: A,
    selectionKeyPressed: L,
    selectionMode: z,
    panActivationKeyPressed: P,
    unselectNodesAndEdges: V
  } = Ge();
  let k = re(), N = null, M = [], I = !1;
  function B(G) {
    if (I) {
      I = !1;
      return;
    }
    C("paneclick", { event: G }), V(), A.set(null);
  }
  function F(G) {
    var Ae, Xe;
    if (N = h(k).getBoundingClientRect(), !D || !h(x) || G.button !== 0 || G.target !== h(k) || !N)
      return;
    (Xe = (Ae = G.target) == null ? void 0 : Ae.setPointerCapture) == null || Xe.call(Ae, G.pointerId);
    const { x: se, y: Me } = Vn(G, N);
    V(), H.set({
      width: 0,
      height: 0,
      startX: se,
      startY: Me,
      x: se,
      y: Me
    });
  }
  function K(G) {
    if (!h(x) || !N || !s())
      return;
    I = !0;
    const se = Vn(G, N), Me = s().startX ?? 0, Ae = s().startY ?? 0, Xe = {
      ...s(),
      x: se.x < Me ? se.x : Me,
      y: se.y < Ae ? se.y : Ae,
      width: Math.abs(se.x - Me),
      height: Math.abs(se.y - Ae)
    }, te = M.map((oe) => oe.id), Fe = Ts(M, u()).map((oe) => oe.id);
    M = Qu(
      c(),
      Xe,
      [
        f().x,
        f().y,
        f().zoom
      ],
      d() === mi.Partial,
      !0
    );
    const Le = Ts(M, u()).map((oe) => oe.id), Qe = M.map((oe) => oe.id);
    (te.length !== Qe.length || Qe.some((oe) => !te.includes(oe))) && p.update((oe) => oe.map($l(Qe))), (Fe.length !== Le.length || Le.some((oe) => !Fe.includes(oe))) && S.update((oe) => oe.map($l(Le))), A.set("user"), H.set(Xe);
  }
  function ie(G) {
    var se, Me;
    G.button === 0 && ((Me = (se = G.target) == null ? void 0 : se.releasePointerCapture) == null || Me.call(se, G.pointerId), !h(x) && l() === "user" && G.target === h(k) && (B == null || B(G)), H.set(null), M.length > 0 && ui(A, "nodes"), i() && (I = !1));
  }
  const ee = (G) => {
    var se;
    if (Array.isArray(h(v)) && ((se = h(v)) != null && se.includes(2))) {
      G.preventDefault();
      return;
    }
    C("panecontextmenu", { event: G });
  };
  he(
    () => (o(), j(E())),
    () => {
      U(v, o() || E());
    }
  ), he(
    () => (i(), s(), j(m()), h(v)),
    () => {
      U(x, i() || s() || m() && h(v) !== !0);
    }
  ), he(
    () => (a(), h(x), l()),
    () => {
      U(b, a() && (h(x) || l() === "user"));
    }
  ), gt(), He();
  var W = b2(), de = /* @__PURE__ */ Te(() => h(b) ? void 0 : El(B, h(k))), me = /* @__PURE__ */ Te(() => El(ee, h(k)));
  let Ce;
  var ge = X(W);
  pt(ge, t, "default", {}), Z(W), wn(W, (G) => U(k, G), () => h(k)), $e(
    (G) => Ce = kt(W, 1, "svelte-flow__pane svelte-1esy7hx", null, Ce, {
      draggable: G,
      dragging: g(),
      selection: h(x)
    }),
    [
      () => E() === !0 || Array.isArray(E()) && E().includes(0)
    ],
    pe
  ), Ye("click", W, function(...G) {
    var se;
    (se = h(de)) == null || se.apply(this, G);
  }), Ye("pointerdown", W, function(...G) {
    var se;
    (se = h(b) ? F : void 0) == null || se.apply(this, G);
  }), Ye("pointermove", W, function(...G) {
    var se;
    (se = h(b) ? K : void 0) == null || se.apply(this, G);
  }), Ye("pointerup", W, function(...G) {
    var se;
    (se = h(b) ? ie : void 0) == null || se.apply(this, G);
  }), Ye("contextmenu", W, function(...G) {
    var se;
    (se = h(me)) == null || se.apply(this, G);
  }), O(e, W);
  var Ie = ce({
    get panOnDrag() {
      return E();
    },
    set panOnDrag(G) {
      E(G), y();
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
ae(Hc, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var k2 = /* @__PURE__ */ ne('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const E2 = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function Vc(e, t) {
  ue(t, !1), Je(e, E2);
  const [n, r] = tt(), o = () => Q(i, "$viewport", n), { viewport: i } = Ge();
  He();
  var s = k2(), a = X(s);
  pt(a, t, "default", {}), Z(s), $e(() => fe(s, "style", `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), O(e, s), ce(), r();
}
ae(Vc, {}, ["default"], [], !0);
function $r(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = B0({
    onDrag: r,
    onDragStart: o,
    onDragStop: i,
    onNodeMouseDown: s,
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
function $2({ width: e, height: t, initialWidth: n, initialHeight: r, measuredWidth: o, measuredHeight: i }) {
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
var S2 = /* @__PURE__ */ ne("<div><!></div>");
function Dc(e, t) {
  ue(t, !1);
  const [n, r] = tt(), o = () => Q(me, "$nodeTypes", n), i = () => Q(se, "$elementsSelectable", n), s = () => Q(Me, "$nodesDraggable", n), a = () => Q(Fe, "$connectableStore", n), l = re(void 0, !0), u = re(void 0, !0), c = re(void 0, !0), f = re(void 0, !0);
  let d = w(t, "node", 13), g = w(t, "id", 13), v = w(t, "data", 29, () => ({})), x = w(t, "selected", 13, !1), b = w(t, "draggable", 13, void 0), E = w(t, "selectable", 13, void 0), m = w(t, "connectable", 13, !0), C = w(t, "deletable", 13, !0), p = w(t, "hidden", 13, !1), _ = w(t, "dragging", 13, !1), S = w(t, "resizeObserver", 13, null), $ = w(t, "style", 13, void 0), T = w(t, "type", 13, "default"), D = w(t, "isParent", 13, !1), H = w(t, "positionX", 13), A = w(t, "positionY", 13), L = w(t, "sourcePosition", 13, void 0), z = w(t, "targetPosition", 13, void 0), P = w(t, "zIndex", 13), V = w(t, "measuredWidth", 13, void 0), k = w(t, "measuredHeight", 13, void 0), N = w(t, "initialWidth", 13, void 0), M = w(t, "initialHeight", 13, void 0), I = w(t, "width", 13, void 0), B = w(t, "height", 13, void 0), F = w(t, "dragHandle", 13, void 0), K = w(t, "initialized", 13, !1), ie = w(t, "parentId", 13, void 0), ee = w(t, "nodeClickDistance", 13, void 0), W = w(t, "class", 13, "");
  const de = Ge(), {
    nodeTypes: me,
    nodeDragThreshold: Ce,
    selectNodesOnDrag: ge,
    handleNodeSelection: Ie,
    updateNodeInternals: G,
    elementsSelectable: se,
    nodesDraggable: Me
  } = de;
  let Ae = re(void 0, !0), Xe = re(null, !0);
  const te = Oi(), Fe = we(m());
  let Le = re(void 0, !0), Qe = re(void 0, !0), oe = re(void 0, !0);
  Hr("svelteflow__node_id", g()), Hr("svelteflow__node_connectable", Fe), ea(() => {
    var J;
    h(Xe) && ((J = S()) == null || J.unobserve(h(Xe)));
  });
  function ve(J) {
    E() && (!q(ge) || !b() || q(Ce) > 0) && Ie(g()), te("nodeclick", { node: d().internals.userNode, event: J });
  }
  he(() => j(T()), () => {
    U(l, T() || "default");
  }), he(() => (o(), h(l)), () => {
    U(u, !!o()[h(l)]);
  }), he(
    () => (o(), h(l), xi),
    () => {
      U(c, o()[h(l)] || xi);
    }
  ), he(
    () => (h(u), j(T())),
    () => {
      h(u) || console.warn("003", Ar.error003(T()));
    }
  ), he(
    () => (j(I()), j(B()), j(N()), j(M()), j(V()), j(k())),
    () => {
      U(f, $2({
        width: I(),
        height: B(),
        initialWidth: N(),
        initialHeight: M(),
        measuredWidth: V(),
        measuredHeight: k()
      }));
    }
  ), he(() => j(m()), () => {
    Fe.set(!!m());
  }), he(
    () => (h(Le), h(l), h(Qe), j(L()), h(oe), j(z()), j(g()), h(Ae)),
    () => {
      (h(Le) && h(l) !== h(Le) || h(Qe) && L() !== h(Qe) || h(oe) && z() !== h(oe)) && requestAnimationFrame(() => G(/* @__PURE__ */ new Map([
        [
          g(),
          {
            id: g(),
            nodeElement: h(Ae),
            force: !0
          }
        ]
      ]))), U(Le, h(l)), U(Qe, L()), U(oe, z());
    }
  ), he(
    () => (j(S()), h(Ae), h(Xe), j(K())),
    () => {
      S() && (h(Ae) !== h(Xe) || !K()) && (h(Xe) && S().unobserve(h(Xe)), h(Ae) && S().observe(h(Ae)), U(Xe, h(Ae)));
    }
  ), gt(), He(!0);
  var xe = et(), Oe = be(xe);
  {
    var ct = (J) => {
      var ze = S2();
      let le;
      var dn = X(ze);
      const jt = /* @__PURE__ */ pe(() => x() ?? !1), fn = /* @__PURE__ */ pe(() => E() ?? i() ?? !0), Pe = /* @__PURE__ */ pe(() => C() ?? !0), rt = /* @__PURE__ */ pe(() => b() ?? s() ?? !0);
      wu(dn, () => h(c), (ye, ot) => {
        ot(ye, {
          get data() {
            return v();
          },
          get id() {
            return g();
          },
          get selected() {
            return h(jt);
          },
          get selectable() {
            return h(fn);
          },
          get deletable() {
            return h(Pe);
          },
          get sourcePosition() {
            return L();
          },
          get targetPosition() {
            return z();
          },
          get zIndex() {
            return P();
          },
          get dragging() {
            return _();
          },
          get draggable() {
            return h(rt);
          },
          get dragHandle() {
            return F();
          },
          get parentId() {
            return ie();
          },
          get type() {
            return h(l);
          },
          get isConnectable() {
            return a();
          },
          get positionAbsoluteX() {
            return H();
          },
          get positionAbsoluteY() {
            return A();
          },
          get width() {
            return I();
          },
          get height() {
            return B();
          }
        });
      }), Z(ze), vt(ze, (ye, ot) => $r == null ? void 0 : $r(ye, ot), () => ({
        nodeId: g(),
        isSelectable: E(),
        disabled: !1,
        handleSelector: F(),
        noDragClass: "nodrag",
        nodeClickDistance: ee(),
        onNodeMouseDown: Ie,
        onDrag: (ye, ot, at, Ft) => {
          te("nodedrag", { event: ye, targetNode: at, nodes: Ft });
        },
        onDragStart: (ye, ot, at, Ft) => {
          te("nodedragstart", { event: ye, targetNode: at, nodes: Ft });
        },
        onDragStop: (ye, ot, at, Ft) => {
          te("nodedragstop", { event: ye, targetNode: at, nodes: Ft });
        },
        store: de
      })), wn(ze, (ye) => U(Ae, ye), () => h(Ae)), zt(() => Ye("click", ze, ve)), zt(() => Ye("mouseenter", ze, (ye) => te("nodemouseenter", { node: d(), event: ye }))), zt(() => Ye("mouseleave", ze, (ye) => te("nodemouseleave", { node: d(), event: ye }))), zt(() => Ye("mousemove", ze, (ye) => te("nodemousemove", { node: d(), event: ye }))), zt(() => Ye("contextmenu", ze, (ye) => te("nodecontextmenu", { node: d(), event: ye }))), $e(
        (ye) => {
          fe(ze, "data-id", g()), le = kt(ze, 1, Cn(ye), null, le, {
            dragging: _(),
            selected: x(),
            draggable: b(),
            connectable: m(),
            selectable: E(),
            nopan: b(),
            parent: D()
          }), fe(ze, "style", `${$() ?? ""};${h(f).width ?? ""}${h(f).height ?? ""}`), st(ze, "z-index", P()), st(ze, "transform", `translate(${H() ?? ""}px, ${A() ?? ""}px)`), st(ze, "visibility", K() ? "visible" : "hidden");
        },
        [
          () => $t([
            "svelte-flow__node",
            `svelte-flow__node-${h(l)}`,
            W()
          ])
        ],
        pe
      ), O(J, ze);
    };
    ke(Oe, (J) => {
      p() || J(ct);
    });
  }
  O(e, xe);
  var lt = ce({
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
      return x();
    },
    set selected(J) {
      x(J), y();
    },
    get draggable() {
      return b();
    },
    set draggable(J) {
      b(J), y();
    },
    get selectable() {
      return E();
    },
    set selectable(J) {
      E(J), y();
    },
    get connectable() {
      return m();
    },
    set connectable(J) {
      m(J), y();
    },
    get deletable() {
      return C();
    },
    set deletable(J) {
      C(J), y();
    },
    get hidden() {
      return p();
    },
    set hidden(J) {
      p(J), y();
    },
    get dragging() {
      return _();
    },
    set dragging(J) {
      _(J), y();
    },
    get resizeObserver() {
      return S();
    },
    set resizeObserver(J) {
      S(J), y();
    },
    get style() {
      return $();
    },
    set style(J) {
      $(J), y();
    },
    get type() {
      return T();
    },
    set type(J) {
      T(J), y();
    },
    get isParent() {
      return D();
    },
    set isParent(J) {
      D(J), y();
    },
    get positionX() {
      return H();
    },
    set positionX(J) {
      H(J), y();
    },
    get positionY() {
      return A();
    },
    set positionY(J) {
      A(J), y();
    },
    get sourcePosition() {
      return L();
    },
    set sourcePosition(J) {
      L(J), y();
    },
    get targetPosition() {
      return z();
    },
    set targetPosition(J) {
      z(J), y();
    },
    get zIndex() {
      return P();
    },
    set zIndex(J) {
      P(J), y();
    },
    get measuredWidth() {
      return V();
    },
    set measuredWidth(J) {
      V(J), y();
    },
    get measuredHeight() {
      return k();
    },
    set measuredHeight(J) {
      k(J), y();
    },
    get initialWidth() {
      return N();
    },
    set initialWidth(J) {
      N(J), y();
    },
    get initialHeight() {
      return M();
    },
    set initialHeight(J) {
      M(J), y();
    },
    get width() {
      return I();
    },
    set width(J) {
      I(J), y();
    },
    get height() {
      return B();
    },
    set height(J) {
      B(J), y();
    },
    get dragHandle() {
      return F();
    },
    set dragHandle(J) {
      F(J), y();
    },
    get initialized() {
      return K();
    },
    set initialized(J) {
      K(J), y();
    },
    get parentId() {
      return ie();
    },
    set parentId(J) {
      ie(J), y();
    },
    get nodeClickDistance() {
      return ee();
    },
    set nodeClickDistance(J) {
      ee(J), y();
    },
    get class() {
      return W();
    },
    set class(J) {
      W(J), y();
    }
  });
  return r(), lt;
}
ae(
  Dc,
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
var P2 = /* @__PURE__ */ ne('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const N2 = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function Ac(e, t) {
  ue(t, !1), Je(e, N2);
  const [n, r] = tt(), o = () => Q(c, "$visibleNodes", n), i = () => Q(f, "$nodesDraggable", n), s = () => Q(g, "$elementsSelectable", n), a = () => Q(d, "$nodesConnectable", n), l = () => Q(x, "$parentLookup", n);
  let u = w(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: f,
    nodesConnectable: d,
    elementsSelectable: g,
    updateNodeInternals: v,
    parentLookup: x
  } = Ge(), b = typeof ResizeObserver > "u" ? null : new ResizeObserver((C) => {
    const p = /* @__PURE__ */ new Map();
    C.forEach((_) => {
      const S = _.target.getAttribute("data-id");
      p.set(S, { id: S, nodeElement: _.target, force: !0 });
    }), v(p);
  });
  ea(() => {
    b == null || b.disconnect();
  }), He();
  var E = P2();
  Vt(E, 5, o, (C) => C.id, (C, p) => {
    const _ = /* @__PURE__ */ pe(() => !!h(p).selected), S = /* @__PURE__ */ pe(() => !!h(p).hidden), $ = /* @__PURE__ */ pe(() => !!(h(p).draggable || i() && typeof h(p).draggable > "u")), T = /* @__PURE__ */ pe(() => !!(h(p).selectable || s() && typeof h(p).selectable > "u")), D = /* @__PURE__ */ pe(() => !!(h(p).connectable || a() && typeof h(p).connectable > "u")), H = /* @__PURE__ */ pe(() => h(p).deletable ?? !0), A = /* @__PURE__ */ pe(() => l().has(h(p).id)), L = /* @__PURE__ */ pe(() => h(p).type ?? "default"), z = /* @__PURE__ */ pe(() => h(p).internals.z ?? 0), P = /* @__PURE__ */ pe(() => ic(h(p)));
    Dc(C, {
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
        return h(_);
      },
      get hidden() {
        return h(S);
      },
      get draggable() {
        return h($);
      },
      get selectable() {
        return h(T);
      },
      get connectable() {
        return h(D);
      },
      get deletable() {
        return h(H);
      },
      get positionX() {
        return h(p).internals.positionAbsolute.x;
      },
      get positionY() {
        return h(p).internals.positionAbsolute.y;
      },
      get isParent() {
        return h(A);
      },
      get style() {
        return h(p).style;
      },
      get class() {
        return h(p).class;
      },
      get type() {
        return h(L);
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
        return h(z);
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
      resizeObserver: b,
      get nodeClickDistance() {
        return u();
      },
      $$events: {
        nodeclick(V) {
          Ve.call(this, t, V);
        },
        nodemouseenter(V) {
          Ve.call(this, t, V);
        },
        nodemousemove(V) {
          Ve.call(this, t, V);
        },
        nodemouseleave(V) {
          Ve.call(this, t, V);
        },
        nodedrag(V) {
          Ve.call(this, t, V);
        },
        nodedragstart(V) {
          Ve.call(this, t, V);
        },
        nodedragstop(V) {
          Ve.call(this, t, V);
        },
        nodecontextmenu(V) {
          Ve.call(this, t, V);
        }
      }
    });
  }), Z(E), O(e, E);
  var m = ce({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance(C) {
      u(C), y();
    }
  });
  return r(), m;
}
ae(Ac, { nodeClickDistance: {} }, [], [], !0);
var T2 = /* @__PURE__ */ _e('<svg><g role="img"><!></g></svg>');
function Lc(e, t) {
  ue(t, !1);
  const [n, r] = tt(), o = () => Q(W, "$edgeTypes", n), i = () => Q(de, "$flowId", n), s = () => Q(me, "$elementsSelectable", n), a = () => Q(ee, "$edgeLookup", n), l = re(void 0, !0), u = re(void 0, !0), c = re(void 0, !0), f = re(void 0, !0), d = re(void 0, !0);
  let g = w(t, "id", 13), v = w(t, "type", 13, "default"), x = w(t, "source", 13, ""), b = w(t, "target", 13, ""), E = w(t, "data", 29, () => ({})), m = w(t, "style", 13, void 0), C = w(t, "zIndex", 13, void 0), p = w(t, "animated", 13, !1), _ = w(t, "selected", 13, !1), S = w(t, "selectable", 13, void 0), $ = w(t, "deletable", 13, void 0), T = w(t, "hidden", 13, !1), D = w(t, "label", 13, void 0), H = w(t, "labelStyle", 13, void 0), A = w(t, "markerStart", 13, void 0), L = w(t, "markerEnd", 13, void 0), z = w(t, "sourceHandle", 13, void 0), P = w(t, "targetHandle", 13, void 0), V = w(t, "sourceX", 13), k = w(t, "sourceY", 13), N = w(t, "targetX", 13), M = w(t, "targetY", 13), I = w(t, "sourcePosition", 13), B = w(t, "targetPosition", 13), F = w(t, "ariaLabel", 13, void 0), K = w(t, "interactionWidth", 13, void 0), ie = w(t, "class", 13, "");
  Hr("svelteflow__edge_id", g());
  const {
    edgeLookup: ee,
    edgeTypes: W,
    flowId: de,
    elementsSelectable: me
  } = Ge(), Ce = Oi(), ge = Cc();
  function Ie(te) {
    const Fe = a().get(g());
    Fe && (ge(g()), Ce("edgeclick", { event: te, edge: Fe }));
  }
  function G(te, Fe) {
    const Le = a().get(g());
    Le && Ce(Fe, { event: te, edge: Le });
  }
  he(() => j(v()), () => {
    U(l, v() || "default");
  }), he(
    () => (o(), h(l), bi),
    () => {
      U(u, o()[h(l)] || bi);
    }
  ), he(
    () => (j(A()), i()),
    () => {
      U(c, A() ? `url('#${Vs(A(), i())}')` : void 0);
    }
  ), he(
    () => (j(L()), i()),
    () => {
      U(f, L() ? `url('#${Vs(L(), i())}')` : void 0);
    }
  ), he(
    () => (j(S()), s()),
    () => {
      U(d, S() ?? s());
    }
  ), gt(), He(!0);
  var se = et(), Me = be(se);
  {
    var Ae = (te) => {
      var Fe = T2(), Le = X(Fe);
      let Qe;
      var oe = X(Le);
      const ve = /* @__PURE__ */ pe(() => $() ?? !0);
      wu(oe, () => h(u), (xe, Oe) => {
        Oe(xe, {
          get id() {
            return g();
          },
          get source() {
            return x();
          },
          get target() {
            return b();
          },
          get sourceX() {
            return V();
          },
          get sourceY() {
            return k();
          },
          get targetX() {
            return N();
          },
          get targetY() {
            return M();
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
            return _();
          },
          get label() {
            return D();
          },
          get labelStyle() {
            return H();
          },
          get data() {
            return E();
          },
          get style() {
            return m();
          },
          get interactionWidth() {
            return K();
          },
          get selectable() {
            return h(d);
          },
          get deletable() {
            return h(ve);
          },
          get type() {
            return h(l);
          },
          get sourceHandleId() {
            return z();
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
      }), Z(Le), Z(Fe), $e(
        (xe) => {
          st(Fe, "z-index", C()), Qe = kt(Le, 0, Cn(xe), null, Qe, {
            animated: p(),
            selected: _(),
            selectable: h(d)
          }), fe(Le, "data-id", g()), fe(Le, "aria-label", F() === null ? void 0 : F() ? F() : `Edge from ${x()} to ${b()}`);
        },
        [
          () => $t(["svelte-flow__edge", ie()])
        ],
        pe
      ), Ye("click", Le, Ie), Ye("contextmenu", Le, (xe) => {
        G(xe, "edgecontextmenu");
      }), Ye("mouseenter", Le, (xe) => {
        G(xe, "edgemouseenter");
      }), Ye("mouseleave", Le, (xe) => {
        G(xe, "edgemouseleave");
      }), O(te, Fe);
    };
    ke(Me, (te) => {
      T() || te(Ae);
    });
  }
  O(e, se);
  var Xe = ce({
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
      return x();
    },
    set source(te) {
      x(te), y();
    },
    get target() {
      return b();
    },
    set target(te) {
      b(te), y();
    },
    get data() {
      return E();
    },
    set data(te) {
      E(te), y();
    },
    get style() {
      return m();
    },
    set style(te) {
      m(te), y();
    },
    get zIndex() {
      return C();
    },
    set zIndex(te) {
      C(te), y();
    },
    get animated() {
      return p();
    },
    set animated(te) {
      p(te), y();
    },
    get selected() {
      return _();
    },
    set selected(te) {
      _(te), y();
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
      return T();
    },
    set hidden(te) {
      T(te), y();
    },
    get label() {
      return D();
    },
    set label(te) {
      D(te), y();
    },
    get labelStyle() {
      return H();
    },
    set labelStyle(te) {
      H(te), y();
    },
    get markerStart() {
      return A();
    },
    set markerStart(te) {
      A(te), y();
    },
    get markerEnd() {
      return L();
    },
    set markerEnd(te) {
      L(te), y();
    },
    get sourceHandle() {
      return z();
    },
    set sourceHandle(te) {
      z(te), y();
    },
    get targetHandle() {
      return P();
    },
    set targetHandle(te) {
      P(te), y();
    },
    get sourceX() {
      return V();
    },
    set sourceX(te) {
      V(te), y();
    },
    get sourceY() {
      return k();
    },
    set sourceY(te) {
      k(te), y();
    },
    get targetX() {
      return N();
    },
    set targetX(te) {
      N(te), y();
    },
    get targetY() {
      return M();
    },
    set targetY(te) {
      M(te), y();
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
      return F();
    },
    set ariaLabel(te) {
      F(te), y();
    },
    get interactionWidth() {
      return K();
    },
    set interactionWidth(te) {
      K(te), y();
    },
    get class() {
      return ie();
    },
    set class(te) {
      ie(te), y();
    }
  });
  return r(), Xe;
}
ae(
  Lc,
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
  ue(t, !1);
  let n = w(t, "onMount", 12, void 0), r = w(t, "onDestroy", 12, void 0);
  return Dt(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), He(), ce({
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
ae(Oc, { onMount: {}, onDestroy: {} }, [], [], !0);
var M2 = /* @__PURE__ */ _e("<defs></defs>");
function Ic(e, t) {
  ue(t, !1);
  const [n, r] = tt(), o = () => Q(i, "$markers", n), { markers: i } = Ge();
  He();
  var s = M2();
  Vt(s, 5, o, (a) => a.id, (a, l) => {
    zc(a, ut(() => h(l)));
  }), Z(s), O(e, s), ce(), r();
}
ae(Ic, {}, [], [], !0);
var H2 = /* @__PURE__ */ _e('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), V2 = /* @__PURE__ */ _e('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), D2 = /* @__PURE__ */ _e('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function zc(e, t) {
  ue(t, !1);
  let n = w(t, "id", 12), r = w(t, "type", 12), o = w(t, "width", 12, 12.5), i = w(t, "height", 12, 12.5), s = w(t, "markerUnits", 12, "strokeWidth"), a = w(t, "orient", 12, "auto-start-reverse"), l = w(t, "color", 12, void 0), u = w(t, "strokeWidth", 12, void 0);
  He();
  var c = D2(), f = X(c);
  {
    var d = (v) => {
      var x = H2();
      $e(() => {
        fe(x, "stroke", l()), fe(x, "stroke-width", u());
      }), O(v, x);
    }, g = (v, x) => {
      {
        var b = (E) => {
          var m = V2();
          $e(() => {
            fe(m, "stroke", l()), fe(m, "stroke-width", u()), fe(m, "fill", l());
          }), O(E, m);
        };
        ke(
          v,
          (E) => {
            r() === wo.ArrowClosed && E(b);
          },
          x
        );
      }
    };
    ke(f, (v) => {
      r() === wo.Arrow ? v(d) : v(g, !1);
    });
  }
  return Z(c), $e(() => {
    fe(c, "id", n()), fe(c, "markerWidth", `${o()}`), fe(c, "markerHeight", `${i()}`), fe(c, "markerUnits", s()), fe(c, "orient", a());
  }), O(e, c), ce({
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
ae(
  zc,
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
var A2 = /* @__PURE__ */ ne('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function Rc(e, t) {
  ue(t, !1);
  const [n, r] = tt(), o = () => Q(a, "$visibleEdges", n), i = () => Q(c, "$elementsSelectable", n);
  let s = w(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: a,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = Ge();
  Dt(() => {
    s() && u(s());
  }), He();
  var f = A2(), d = X(f), g = X(d);
  Ic(g, {}), Z(d);
  var v = R(d, 2);
  Vt(v, 1, o, (m) => m.id, (m, C) => {
    const p = /* @__PURE__ */ pe(() => h(C).selectable ?? i()), _ = /* @__PURE__ */ pe(() => h(C).type || "default");
    Lc(m, {
      get id() {
        return h(C).id;
      },
      get source() {
        return h(C).source;
      },
      get target() {
        return h(C).target;
      },
      get data() {
        return h(C).data;
      },
      get style() {
        return h(C).style;
      },
      get animated() {
        return h(C).animated;
      },
      get selected() {
        return h(C).selected;
      },
      get selectable() {
        return h(p);
      },
      get deletable() {
        return h(C).deletable;
      },
      get hidden() {
        return h(C).hidden;
      },
      get label() {
        return h(C).label;
      },
      get labelStyle() {
        return h(C).labelStyle;
      },
      get markerStart() {
        return h(C).markerStart;
      },
      get markerEnd() {
        return h(C).markerEnd;
      },
      get sourceHandle() {
        return h(C).sourceHandle;
      },
      get targetHandle() {
        return h(C).targetHandle;
      },
      get sourceX() {
        return h(C).sourceX;
      },
      get sourceY() {
        return h(C).sourceY;
      },
      get targetX() {
        return h(C).targetX;
      },
      get targetY() {
        return h(C).targetY;
      },
      get sourcePosition() {
        return h(C).sourcePosition;
      },
      get targetPosition() {
        return h(C).targetPosition;
      },
      get ariaLabel() {
        return h(C).ariaLabel;
      },
      get interactionWidth() {
        return h(C).interactionWidth;
      },
      get class() {
        return h(C).class;
      },
      get type() {
        return h(_);
      },
      get zIndex() {
        return h(C).zIndex;
      },
      $$events: {
        edgeclick(S) {
          Ve.call(this, t, S);
        },
        edgecontextmenu(S) {
          Ve.call(this, t, S);
        },
        edgemouseenter(S) {
          Ve.call(this, t, S);
        },
        edgemouseleave(S) {
          Ve.call(this, t, S);
        }
      }
    });
  });
  var x = R(v, 2);
  {
    var b = (m) => {
      Oc(m, {
        onMount: () => {
          ui(l, !0);
        },
        onDestroy: () => {
          ui(l, !1);
        }
      });
    };
    ke(x, (m) => {
      o().length > 0 && m(b);
    });
  }
  Z(f), O(e, f);
  var E = ce({
    get defaultEdgeOptions() {
      return s();
    },
    set defaultEdgeOptions(m) {
      s(m), y();
    }
  });
  return r(), E;
}
ae(Rc, { defaultEdgeOptions: {} }, [], [], !0);
var L2 = /* @__PURE__ */ ne('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const O2 = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function va(e, t) {
  ue(t, !1), Je(e, O2);
  let n = w(t, "x", 12, 0), r = w(t, "y", 12, 0), o = w(t, "width", 12, 0), i = w(t, "height", 12, 0), s = w(t, "isVisible", 12, !0);
  var a = et(), l = be(a);
  {
    var u = (c) => {
      var f = L2();
      $e(() => {
        st(f, "width", typeof o() == "string" ? o() : `${o()}px`), st(f, "height", typeof i() == "string" ? i() : `${i()}px`), st(f, "transform", `translate(${n()}px, ${r()}px)`);
      }), O(c, f);
    };
    ke(l, (c) => {
      s() && c(u);
    });
  }
  return O(e, a), ce({
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
ae(
  va,
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
function Bc(e, t) {
  ue(t, !1);
  const [n, r] = tt(), o = () => Q(s, "$selectionRect", n), i = () => Q(a, "$selectionRectMode", n), { selectionRect: s, selectionRectMode: a } = Ge();
  He();
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
  va(e, {
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
  }), ce(), r();
}
ae(Bc, {}, [], [], !0);
var I2 = /* @__PURE__ */ ne('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const z2 = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function Yc(e, t) {
  ue(t, !1), Je(e, z2);
  const [n, r] = tt(), o = () => Q(l, "$selectionRectMode", n), i = () => Q(c, "$nodeLookup", n), s = () => Q(u, "$nodes", n), a = Ge(), { selectionRectMode: l, nodes: u, nodeLookup: c } = a, f = Oi();
  let d = re(null);
  function g(m) {
    const C = s().filter((p) => p.selected);
    f("selectioncontextmenu", { nodes: C, event: m });
  }
  function v(m) {
    const C = s().filter((p) => p.selected);
    f("selectionclick", { nodes: C, event: m });
  }
  he(
    () => (o(), i(), s()),
    () => {
      o() === "nodes" && (U(d, Mo(i(), { filter: (m) => !!m.selected })), s());
    }
  ), gt(), He();
  var x = et(), b = be(x);
  {
    var E = (m) => {
      var C = I2(), p = X(C);
      va(p, { width: "100%", height: "100%", x: 0, y: 0 }), Z(C), vt(C, (_, S) => $r == null ? void 0 : $r(_, S), () => ({
        disabled: !1,
        store: a,
        onDrag: (_, S, $, T) => {
          f("nodedrag", { event: _, targetNode: null, nodes: T });
        },
        onDragStart: (_, S, $, T) => {
          f("nodedragstart", { event: _, targetNode: null, nodes: T });
        },
        onDragStop: (_, S, $, T) => {
          f("nodedragstop", { event: _, targetNode: null, nodes: T });
        }
      })), zt(() => Ye("contextmenu", C, g)), zt(() => Ye("click", C, v)), zt(() => Ye("keyup", C, () => {
      })), $e(() => fe(C, "style", `width: ${h(d).width ?? ""}px; height: ${h(d).height ?? ""}px; transform: translate(${h(d).x ?? ""}px, ${h(d).y ?? ""}px)`)), O(m, C);
    };
    ke(b, (m) => {
      o() === "nodes" && h(d) && Tn(h(d).x) && Tn(h(d).y) && m(E);
    });
  }
  O(e, x), ce(), r();
}
ae(Yc, {}, [], [], !0);
function We(e, t) {
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
      }, { modifier: f, key: d, callback: g, preventDefault: v, enabled: x } = c;
      if (x) {
        if (f.length && !(Array.isArray(f) ? f : [f]).map(
          (m) => typeof m == "string" ? [m] : m
        ).some(
          (m) => m.every((C) => l[C])
        ))
          continue;
        if (s.key === d) {
          v && s.preventDefault();
          const b = {
            node: e,
            trigger: c,
            originalEvent: s
          };
          e.dispatchEvent(new CustomEvent("shortcut", { detail: b })), g == null || g(b);
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
function Zc(e, t) {
  ue(t, !1);
  let n = w(t, "selectionKey", 12, "Shift"), r = w(t, "multiSelectionKey", 28, () => wi() ? "Meta" : "Control"), o = w(t, "deleteKey", 12, "Backspace"), i = w(t, "panActivationKey", 12, " "), s = w(t, "zoomActivationKey", 28, () => wi() ? "Meta" : "Control");
  const {
    selectionKeyPressed: a,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: f,
    selectionRect: d
  } = Ge();
  function g(m) {
    return m !== null && typeof m == "object";
  }
  function v(m) {
    return g(m) ? m.modifier || [] : [];
  }
  function x(m) {
    return m == null ? "" : g(m) ? m.key : m;
  }
  function b(m, C) {
    return (Array.isArray(m) ? m : [m]).map((_) => {
      const S = x(_);
      return {
        key: S,
        modifier: v(_),
        enabled: S !== null,
        callback: C
      };
    });
  }
  function E() {
    d.set(null), a.set(!1), l.set(!1), u.set(!1), c.set(!1), f.set(!1);
  }
  return He(), Ye("blur", Nt, E), Ye("contextmenu", Nt, E), vt(Nt, (m, C) => We == null ? void 0 : We(m, C), () => ({
    trigger: b(n(), () => a.set(!0)),
    type: "keydown"
  })), vt(Nt, (m, C) => We == null ? void 0 : We(m, C), () => ({
    trigger: b(n(), () => a.set(!1)),
    type: "keyup"
  })), vt(Nt, (m, C) => We == null ? void 0 : We(m, C), () => ({
    trigger: b(r(), () => l.set(!0)),
    type: "keydown"
  })), vt(Nt, (m, C) => We == null ? void 0 : We(m, C), () => ({
    trigger: b(r(), () => l.set(!1)),
    type: "keyup"
  })), vt(Nt, (m, C) => We == null ? void 0 : We(m, C), () => ({
    trigger: b(o(), (m) => {
      !(m.originalEvent.ctrlKey || m.originalEvent.metaKey || m.originalEvent.shiftKey) && !w0(m.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), vt(Nt, (m, C) => We == null ? void 0 : We(m, C), () => ({
    trigger: b(o(), () => u.set(!1)),
    type: "keyup"
  })), vt(Nt, (m, C) => We == null ? void 0 : We(m, C), () => ({
    trigger: b(i(), () => c.set(!0)),
    type: "keydown"
  })), vt(Nt, (m, C) => We == null ? void 0 : We(m, C), () => ({
    trigger: b(i(), () => c.set(!1)),
    type: "keyup"
  })), vt(Nt, (m, C) => We == null ? void 0 : We(m, C), () => ({
    trigger: b(s(), () => f.set(!0)),
    type: "keydown"
  })), vt(Nt, (m, C) => We == null ? void 0 : We(m, C), () => ({
    trigger: b(s(), () => f.set(!1)),
    type: "keyup"
  })), ce({
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
ae(
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
var R2 = /* @__PURE__ */ _e('<path fill="none" class="svelte-flow__connection-path"></path>'), B2 = /* @__PURE__ */ _e('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function Xc(e, t) {
  ue(t, !1);
  const [n, r] = tt(), o = () => Q(g, "$connection", n), i = () => Q(v, "$connectionLineType", n), s = () => Q(f, "$width", n), a = () => Q(d, "$height", n);
  let l = w(t, "containerStyle", 12, ""), u = w(t, "style", 12, ""), c = w(t, "isCustomComponent", 12, !1);
  const {
    width: f,
    height: d,
    connection: g,
    connectionLineType: v
  } = Ge();
  let x = re(null);
  he(
    () => (o(), j(c()), i(), h(x), Hs),
    () => {
      if (o().inProgress && !c()) {
        const { from: p, to: _, fromPosition: S, toPosition: $ } = o(), T = {
          sourceX: p.x,
          sourceY: p.y,
          sourcePosition: S,
          targetX: _.x,
          targetY: _.y,
          targetPosition: $
        };
        switch (i()) {
          case kr.Bezier:
            ((D) => U(x, D[0]))(ac(T));
            break;
          case kr.Step:
            ((D) => U(x, D[0]))(_i({ ...T, borderRadius: 0 }));
            break;
          case kr.SmoothStep:
            ((D) => U(x, D[0]))(_i(T));
            break;
          default:
            ((D) => U(x, D[0]))(Hs(T));
        }
      }
    }
  ), gt(), He();
  var b = et(), E = be(b);
  {
    var m = (p) => {
      var _ = B2(), S = X(_), $ = X(S);
      pt($, t, "connectionLine", {});
      var T = R($);
      {
        var D = (H) => {
          var A = R2();
          $e(() => {
            fe(A, "d", h(x)), fe(A, "style", u());
          }), O(H, A);
        };
        ke(T, (H) => {
          c() || H(D);
        });
      }
      Z(S), Z(_), $e(
        (H) => {
          fe(_, "width", s()), fe(_, "height", a()), fe(_, "style", l()), kt(S, 0, Cn(H));
        },
        [
          () => $t([
            "svelte-flow__connection",
            c0(o().isValid)
          ])
        ],
        pe
      ), O(p, _);
    };
    ke(E, (p) => {
      o().inProgress && p(m);
    });
  }
  O(e, b);
  var C = ce({
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
  return r(), C;
}
ae(
  Xc,
  {
    containerStyle: {},
    style: {},
    isCustomComponent: {}
  },
  ["connectionLine"],
  [],
  !0
);
var Y2 = /* @__PURE__ */ ne("<div><!></div>");
function Do(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = nt(n, ["position", "style", "class"]);
  ue(t, !1);
  const [o, i] = tt(), s = () => Q(f, "$selectionRectMode", o), a = re();
  let l = w(t, "position", 12, "top-right"), u = w(t, "style", 12, void 0), c = w(t, "class", 12, void 0);
  const { selectionRectMode: f } = Ge();
  he(() => j(l()), () => {
    U(a, `${l()}`.split("-"));
  }), gt(), He();
  var d = Y2();
  let g;
  var v = X(d);
  pt(v, t, "default", {}), Z(d), $e(
    (b) => {
      g = sn(d, g, {
        class: b,
        style: u(),
        ...r
      }), st(d, "pointer-events", s() ? "none" : "");
    },
    [
      () => $t([
        "svelte-flow__panel",
        c(),
        ...h(a)
      ])
    ],
    pe
  ), O(e, d);
  var x = ce({
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
  return i(), x;
}
ae(Do, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var Z2 = /* @__PURE__ */ ne('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function Fc(e, t) {
  ue(t, !1);
  let n = w(t, "proOptions", 12, void 0), r = w(t, "position", 12, "bottom-right");
  He();
  var o = et(), i = be(o);
  {
    var s = (a) => {
      Do(a, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var c = Z2();
          O(l, c);
        },
        $$slots: { default: !0 }
      });
    };
    ke(i, (a) => {
      var l;
      (l = n()) != null && l.hideAttribution || a(s);
    });
  }
  return O(e, o), ce({
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
ae(Fc, { proOptions: {}, position: {} }, [], [], !0);
function Sl(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: i, paneClickDistance: s }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), o !== void 0 && e.setMaxZoom(o), i !== void 0 && e.setTranslateExtent(i), s !== void 0 && e.setPaneClickDistance(s);
}
const X2 = (e) => Object.keys(e);
function Pl(e, t) {
  X2(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function F2() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function W2(e = "light") {
  return Wt("light", (n) => {
    if (e !== "system") {
      n(e);
      return;
    }
    const r = F2(), o = () => n(r != null && r.matches ? "dark" : "light");
    return n(r != null && r.matches ? "dark" : "light"), r == null || r.addEventListener("change", o), () => {
      r == null || r.removeEventListener("change", o);
    };
  });
}
var K2 = /* @__PURE__ */ ne('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), q2 = /* @__PURE__ */ ne("<!> <!>", 1), G2 = /* @__PURE__ */ ne("<div><!> <!> <!> <!></div>");
const U2 = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function Wc(e, t) {
  const n = p1(t), r = nt(t, [
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
  ue(t, !1), Je(e, U2);
  const [i, s] = tt(), a = () => Q(C(), "$viewport", i), l = () => Q(ji, "$initialized", i), u = () => Q(h(c), "$colorModeClass", i), c = re();
  let f = w(t, "id", 12, "1"), d = w(t, "nodes", 12), g = w(t, "edges", 12), v = w(t, "fitView", 12, void 0), x = w(t, "fitViewOptions", 12, void 0), b = w(t, "minZoom", 12, void 0), E = w(t, "maxZoom", 12, void 0), m = w(t, "initialViewport", 12, void 0), C = w(t, "viewport", 12, void 0), p = w(t, "nodeTypes", 12, void 0), _ = w(t, "edgeTypes", 12, void 0), S = w(t, "selectionKey", 12, void 0), $ = w(t, "selectionMode", 12, void 0), T = w(t, "panActivationKey", 12, void 0), D = w(t, "multiSelectionKey", 12, void 0), H = w(t, "zoomActivationKey", 12, void 0), A = w(t, "nodesDraggable", 12, void 0), L = w(t, "nodesConnectable", 12, void 0), z = w(t, "nodeDragThreshold", 12, void 0), P = w(t, "elementsSelectable", 12, void 0), V = w(t, "snapGrid", 12, void 0), k = w(t, "deleteKey", 12, void 0), N = w(t, "connectionRadius", 12, void 0), M = w(t, "connectionLineType", 12, void 0), I = w(t, "connectionMode", 28, () => dr.Strict), B = w(t, "connectionLineStyle", 12, ""), F = w(t, "connectionLineContainerStyle", 12, ""), K = w(t, "onMoveStart", 12, void 0), ie = w(t, "onMove", 12, void 0), ee = w(t, "onMoveEnd", 12, void 0), W = w(t, "isValidConnection", 12, void 0), de = w(t, "translateExtent", 12, void 0), me = w(t, "nodeExtent", 12, void 0), Ce = w(t, "onlyRenderVisibleElements", 12, void 0), ge = w(t, "panOnScrollMode", 28, () => qn.Free), Ie = w(t, "preventScrolling", 12, !0), G = w(t, "zoomOnScroll", 12, !0), se = w(t, "zoomOnDoubleClick", 12, !0), Me = w(t, "zoomOnPinch", 12, !0), Ae = w(t, "panOnScroll", 12, !1), Xe = w(t, "panOnDrag", 12, !0), te = w(t, "selectionOnDrag", 12, void 0), Fe = w(t, "autoPanOnConnect", 12, !0), Le = w(t, "autoPanOnNodeDrag", 12, !0), Qe = w(t, "onerror", 12, void 0), oe = w(t, "ondelete", 12, void 0), ve = w(t, "onedgecreate", 12, void 0), xe = w(t, "attributionPosition", 12, void 0), Oe = w(t, "proOptions", 12, void 0), ct = w(t, "defaultEdgeOptions", 12, void 0), lt = w(t, "width", 12, void 0), J = w(t, "height", 12, void 0), ze = w(t, "colorMode", 12, "light"), le = w(t, "onconnect", 12, void 0), dn = w(t, "onconnectstart", 12, void 0), jt = w(t, "onconnectend", 12, void 0), fn = w(t, "onbeforedelete", 12, void 0), Pe = w(t, "oninit", 12, void 0), rt = w(t, "nodeOrigin", 12, void 0), ye = w(t, "paneClickDistance", 12, 0), ot = w(t, "nodeClickDistance", 12, 0), at = w(t, "defaultMarkerColor", 12, "#b1b1b7"), Ft = w(t, "style", 12, void 0), qr = w(t, "class", 12, void 0), Lt = re(), St = re(), gn = re();
  const Jt = a() || m(), ft = Uf(Wi) ? Ge() : w2({
    nodes: q(d()),
    edges: q(g()),
    width: lt(),
    height: J(),
    fitView: v(),
    nodeOrigin: rt(),
    nodeExtent: me()
  });
  Dt(() => (ft.width.set(h(St)), ft.height.set(h(gn)), ft.domNode.set(h(Lt)), ft.syncNodeStores(d()), ft.syncEdgeStores(g()), ft.syncViewport(C()), v() !== void 0 && ft.fitViewOnInit.set(v()), x() && ft.fitViewOptions.set(x()), Sl(ft, {
    nodeTypes: p(),
    edgeTypes: _(),
    minZoom: b(),
    maxZoom: E(),
    translateExtent: de(),
    paneClickDistance: ye()
  }), () => {
    ft.reset();
  }));
  const { initialized: ji } = ft;
  let nr = re(!1);
  he(
    () => (h(St), h(gn)),
    () => {
      h(St) !== void 0 && h(gn) !== void 0 && (ft.width.set(h(St)), ft.height.set(h(gn)));
    }
  ), he(
    () => (h(nr), l(), j(Pe())),
    () => {
      var Y;
      !h(nr) && l() && ((Y = Pe()) == null || Y(), U(nr, !0));
    }
  ), he(
    () => (j(f()), j(M()), j(N()), j($()), j(V()), j(at()), j(A()), j(L()), j(P()), j(Ce()), j(W()), j(Fe()), j(Le()), j(Qe()), j(oe()), j(ve()), j(I()), j(z()), j(le()), j(dn()), j(jt()), j(fn()), j(rt()), Pl),
    () => {
      const Y = {
        flowId: f(),
        connectionLineType: M(),
        connectionRadius: N(),
        selectionMode: $(),
        snapGrid: V(),
        defaultMarkerColor: at(),
        nodesDraggable: A(),
        nodesConnectable: L(),
        elementsSelectable: P(),
        onlyRenderVisibleElements: Ce(),
        isValidConnection: W(),
        autoPanOnConnect: Fe(),
        autoPanOnNodeDrag: Le(),
        onerror: Qe(),
        ondelete: oe(),
        onedgecreate: ve(),
        connectionMode: I(),
        nodeDragThreshold: z(),
        onconnect: le(),
        onconnectstart: dn(),
        onconnectend: jt(),
        onbeforedelete: fn(),
        nodeOrigin: rt()
      };
      Pl(ft, Y);
    }
  ), he(
    () => (j(p()), j(_()), j(b()), j(E()), j(de()), j(ye())),
    () => {
      Sl(ft, {
        nodeTypes: p(),
        edgeTypes: _(),
        minZoom: b(),
        maxZoom: E(),
        translateExtent: de(),
        paneClickDistance: ye()
      });
    }
  ), he(
    () => j(ze()),
    () => {
      k1(U(c, W2(ze())), "$colorModeClass", i);
    }
  ), gt(), He();
  var Qt = G2();
  let zo;
  var Ro = X(Qt);
  Zc(Ro, {
    get selectionKey() {
      return S();
    },
    get deleteKey() {
      return k();
    },
    get panActivationKey() {
      return T();
    },
    get multiSelectionKey() {
      return D();
    },
    get zoomActivationKey() {
      return H();
    }
  });
  var Bo = R(Ro, 2);
  const Rd = /* @__PURE__ */ pe(() => ge() === void 0 ? qn.Free : ge()), Bd = /* @__PURE__ */ pe(() => Ie() === void 0 ? !0 : Ie()), Yd = /* @__PURE__ */ pe(() => G() === void 0 ? !0 : G()), Zd = /* @__PURE__ */ pe(() => se() === void 0 ? !0 : se()), Xd = /* @__PURE__ */ pe(() => Me() === void 0 ? !0 : Me()), Fd = /* @__PURE__ */ pe(() => Ae() === void 0 ? !1 : Ae()), Wd = /* @__PURE__ */ pe(() => Xe() === void 0 ? !0 : Xe()), Kd = /* @__PURE__ */ pe(() => ye() === void 0 ? 0 : ye());
  Mc(Bo, {
    initialViewport: Jt,
    get onMoveStart() {
      return K();
    },
    get onMove() {
      return ie();
    },
    get onMoveEnd() {
      return ee();
    },
    get panOnScrollMode() {
      return h(Rd);
    },
    get preventScrolling() {
      return h(Bd);
    },
    get zoomOnScroll() {
      return h(Yd);
    },
    get zoomOnDoubleClick() {
      return h(Zd);
    },
    get zoomOnPinch() {
      return h(Xd);
    },
    get panOnScroll() {
      return h(Fd);
    },
    get panOnDrag() {
      return h(Wd);
    },
    get paneClickDistance() {
      return h(Kd);
    },
    children: (Y, gw) => {
      const Ud = /* @__PURE__ */ pe(() => Xe() === void 0 ? !0 : Xe());
      Hc(Y, {
        get panOnDrag() {
          return h(Ud);
        },
        get selectionOnDrag() {
          return te();
        },
        $$events: {
          paneclick(Gr) {
            Ve.call(this, t, Gr);
          },
          panecontextmenu(Gr) {
            Ve.call(this, t, Gr);
          }
        },
        children: (Gr, hw) => {
          var ba = q2(), Ca = be(ba);
          Vc(Ca, {
            children: (Jd, vw) => {
              var ka = K2(), Ea = be(ka);
              Rc(Ea, {
                get defaultEdgeOptions() {
                  return ct();
                },
                $$events: {
                  edgeclick(Re) {
                    Ve.call(this, t, Re);
                  },
                  edgecontextmenu(Re) {
                    Ve.call(this, t, Re);
                  },
                  edgemouseenter(Re) {
                    Ve.call(this, t, Re);
                  },
                  edgemouseleave(Re) {
                    Ve.call(this, t, Re);
                  }
                }
              });
              var $a = R(Ea, 2);
              Xc($a, {
                get containerStyle() {
                  return F();
                },
                get style() {
                  return B();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (Re, pw) => {
                    var Pa = et(), ef = be(Pa);
                    pt(ef, t, "connectionLine", {}), O(Re, Pa);
                  }
                }
              });
              var Sa = R($a, 6);
              Ac(Sa, {
                get nodeClickDistance() {
                  return ot();
                },
                $$events: {
                  nodeclick(Re) {
                    Ve.call(this, t, Re);
                  },
                  nodemouseenter(Re) {
                    Ve.call(this, t, Re);
                  },
                  nodemousemove(Re) {
                    Ve.call(this, t, Re);
                  },
                  nodemouseleave(Re) {
                    Ve.call(this, t, Re);
                  },
                  nodedragstart(Re) {
                    Ve.call(this, t, Re);
                  },
                  nodedrag(Re) {
                    Ve.call(this, t, Re);
                  },
                  nodedragstop(Re) {
                    Ve.call(this, t, Re);
                  },
                  nodecontextmenu(Re) {
                    Ve.call(this, t, Re);
                  }
                }
              });
              var Qd = R(Sa, 2);
              Yc(Qd, {
                $$events: {
                  selectionclick(Re) {
                    Ve.call(this, t, Re);
                  },
                  selectioncontextmenu(Re) {
                    Ve.call(this, t, Re);
                  },
                  nodedragstart(Re) {
                    Ve.call(this, t, Re);
                  },
                  nodedrag(Re) {
                    Ve.call(this, t, Re);
                  },
                  nodedragstop(Re) {
                    Ve.call(this, t, Re);
                  }
                }
              }), O(Jd, ka);
            },
            $$slots: { default: !0 }
          });
          var jd = R(Ca, 2);
          Bc(jd, {}), O(Gr, ba);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var xa = R(Bo, 2);
  Fc(xa, {
    get proOptions() {
      return Oe();
    },
    get position() {
      return xe();
    }
  });
  var qd = R(xa, 2);
  pt(qd, t, "default", {}), Z(Qt), wn(Qt, (Y) => U(Lt, Y), () => h(Lt)), $e(
    (Y) => zo = sn(
      Qt,
      zo,
      {
        style: Ft(),
        class: Y,
        "data-testid": "svelte-flow__wrapper",
        ...o,
        role: "application"
      },
      "svelte-12wlba6"
    ),
    [
      () => $t([
        "svelte-flow",
        qr(),
        u()
      ])
    ],
    pe
  ), Ba(Qt, "clientWidth", (Y) => U(St, Y)), Ba(Qt, "clientHeight", (Y) => U(gn, Y)), Ye("dragover", Qt, function(Y) {
    Ve.call(this, t, Y);
  }), Ye("drop", Qt, function(Y) {
    Ve.call(this, t, Y);
  }), O(e, Qt);
  var Gd = ce({
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
      return x();
    },
    set fitViewOptions(Y) {
      x(Y), y();
    },
    get minZoom() {
      return b();
    },
    set minZoom(Y) {
      b(Y), y();
    },
    get maxZoom() {
      return E();
    },
    set maxZoom(Y) {
      E(Y), y();
    },
    get initialViewport() {
      return m();
    },
    set initialViewport(Y) {
      m(Y), y();
    },
    get viewport() {
      return C();
    },
    set viewport(Y) {
      C(Y), y();
    },
    get nodeTypes() {
      return p();
    },
    set nodeTypes(Y) {
      p(Y), y();
    },
    get edgeTypes() {
      return _();
    },
    set edgeTypes(Y) {
      _(Y), y();
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
      return T();
    },
    set panActivationKey(Y) {
      T(Y), y();
    },
    get multiSelectionKey() {
      return D();
    },
    set multiSelectionKey(Y) {
      D(Y), y();
    },
    get zoomActivationKey() {
      return H();
    },
    set zoomActivationKey(Y) {
      H(Y), y();
    },
    get nodesDraggable() {
      return A();
    },
    set nodesDraggable(Y) {
      A(Y), y();
    },
    get nodesConnectable() {
      return L();
    },
    set nodesConnectable(Y) {
      L(Y), y();
    },
    get nodeDragThreshold() {
      return z();
    },
    set nodeDragThreshold(Y) {
      z(Y), y();
    },
    get elementsSelectable() {
      return P();
    },
    set elementsSelectable(Y) {
      P(Y), y();
    },
    get snapGrid() {
      return V();
    },
    set snapGrid(Y) {
      V(Y), y();
    },
    get deleteKey() {
      return k();
    },
    set deleteKey(Y) {
      k(Y), y();
    },
    get connectionRadius() {
      return N();
    },
    set connectionRadius(Y) {
      N(Y), y();
    },
    get connectionLineType() {
      return M();
    },
    set connectionLineType(Y) {
      M(Y), y();
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
      return F();
    },
    set connectionLineContainerStyle(Y) {
      F(Y), y();
    },
    get onMoveStart() {
      return K();
    },
    set onMoveStart(Y) {
      K(Y), y();
    },
    get onMove() {
      return ie();
    },
    set onMove(Y) {
      ie(Y), y();
    },
    get onMoveEnd() {
      return ee();
    },
    set onMoveEnd(Y) {
      ee(Y), y();
    },
    get isValidConnection() {
      return W();
    },
    set isValidConnection(Y) {
      W(Y), y();
    },
    get translateExtent() {
      return de();
    },
    set translateExtent(Y) {
      de(Y), y();
    },
    get nodeExtent() {
      return me();
    },
    set nodeExtent(Y) {
      me(Y), y();
    },
    get onlyRenderVisibleElements() {
      return Ce();
    },
    set onlyRenderVisibleElements(Y) {
      Ce(Y), y();
    },
    get panOnScrollMode() {
      return ge();
    },
    set panOnScrollMode(Y) {
      ge(Y), y();
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
      return se();
    },
    set zoomOnDoubleClick(Y) {
      se(Y), y();
    },
    get zoomOnPinch() {
      return Me();
    },
    set zoomOnPinch(Y) {
      Me(Y), y();
    },
    get panOnScroll() {
      return Ae();
    },
    set panOnScroll(Y) {
      Ae(Y), y();
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
      return Fe();
    },
    set autoPanOnConnect(Y) {
      Fe(Y), y();
    },
    get autoPanOnNodeDrag() {
      return Le();
    },
    set autoPanOnNodeDrag(Y) {
      Le(Y), y();
    },
    get onerror() {
      return Qe();
    },
    set onerror(Y) {
      Qe(Y), y();
    },
    get ondelete() {
      return oe();
    },
    set ondelete(Y) {
      oe(Y), y();
    },
    get onedgecreate() {
      return ve();
    },
    set onedgecreate(Y) {
      ve(Y), y();
    },
    get attributionPosition() {
      return xe();
    },
    set attributionPosition(Y) {
      xe(Y), y();
    },
    get proOptions() {
      return Oe();
    },
    set proOptions(Y) {
      Oe(Y), y();
    },
    get defaultEdgeOptions() {
      return ct();
    },
    set defaultEdgeOptions(Y) {
      ct(Y), y();
    },
    get width() {
      return lt();
    },
    set width(Y) {
      lt(Y), y();
    },
    get height() {
      return J();
    },
    set height(Y) {
      J(Y), y();
    },
    get colorMode() {
      return ze();
    },
    set colorMode(Y) {
      ze(Y), y();
    },
    get onconnect() {
      return le();
    },
    set onconnect(Y) {
      le(Y), y();
    },
    get onconnectstart() {
      return dn();
    },
    set onconnectstart(Y) {
      dn(Y), y();
    },
    get onconnectend() {
      return jt();
    },
    set onconnectend(Y) {
      jt(Y), y();
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
      return rt();
    },
    set nodeOrigin(Y) {
      rt(Y), y();
    },
    get paneClickDistance() {
      return ye();
    },
    set paneClickDistance(Y) {
      ye(Y), y();
    },
    get nodeClickDistance() {
      return ot();
    },
    set nodeClickDistance(Y) {
      ot(Y), y();
    },
    get defaultMarkerColor() {
      return at();
    },
    set defaultMarkerColor(Y) {
      at(Y), y();
    },
    get style() {
      return Ft();
    },
    set style(Y) {
      Ft(Y), y();
    },
    get class() {
      return qr();
    },
    set class(Y) {
      qr(Y), y();
    }
  });
  return s(), Gd;
}
ae(
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
function Kc(e, t) {
  ue(t, !1);
  let n = w(t, "initialNodes", 12, void 0), r = w(t, "initialEdges", 12, void 0), o = w(t, "initialWidth", 12, void 0), i = w(t, "initialHeight", 12, void 0), s = w(t, "fitView", 12, void 0), a = w(t, "nodeOrigin", 12, void 0);
  const l = Tc({
    nodes: n(),
    edges: r(),
    width: o(),
    height: i(),
    nodeOrigin: a(),
    fitView: s()
  });
  Hr(Wi, { getStore: () => l }), ea(() => {
    l.reset();
  }), He();
  var u = et(), c = be(u);
  return pt(c, t, "default", {}), O(e, u), ce({
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
ae(
  Kc,
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
var j2 = /* @__PURE__ */ ne("<button><!></button>");
function oo(e, t) {
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
  ue(t, !1);
  let o = w(t, "class", 12, void 0), i = w(t, "bgColor", 12, void 0), s = w(t, "bgColorHover", 12, void 0), a = w(t, "color", 12, void 0), l = w(t, "colorHover", 12, void 0), u = w(t, "borderColor", 12, void 0);
  He();
  var c = j2();
  let f;
  var d = X(c);
  return pt(d, t, "default", { class: "button-svg" }), Z(c), $e(
    (g) => {
      f = sn(c, f, { type: "button", class: g, ...r }), st(c, "--xy-controls-button-background-color-props", i()), st(c, "--xy-controls-button-background-color-hover-props", s()), st(c, "--xy-controls-button-color-props", a()), st(c, "--xy-controls-button-color-hover-props", l()), st(c, "--xy-controls-button-border-color-props", u());
    },
    [
      () => $t([
        "svelte-flow__controls-button",
        o()
      ])
    ],
    pe
  ), Ye("click", c, function(g) {
    Ve.call(this, t, g);
  }), O(e, c), ce({
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
ae(
  oo,
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
var J2 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function qc(e) {
  var t = J2();
  O(e, t);
}
ae(qc, {}, [], [], !0);
var Q2 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Gc(e) {
  var t = Q2();
  O(e, t);
}
ae(Gc, {}, [], [], !0);
var ep = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Uc(e) {
  var t = ep();
  O(e, t);
}
ae(Uc, {}, [], [], !0);
var tp = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function jc(e) {
  var t = tp();
  O(e, t);
}
ae(jc, {}, [], [], !0);
var np = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function Jc(e) {
  var t = np();
  O(e, t);
}
ae(Jc, {}, [], [], !0);
var rp = /* @__PURE__ */ ne("<!> <!>", 1), op = /* @__PURE__ */ ne("<!> <!> <!> <!> <!> <!>", 1);
function Qc(e, t) {
  ue(t, !1);
  const [n, r] = tt(), o = () => Q(M, "$nodesDraggable", n), i = () => Q(I, "$nodesConnectable", n), s = () => Q(B, "$elementsSelectable", n), a = () => Q(V, "$viewport", n), l = () => Q(k, "$minZoom", n), u = () => Q(N, "$maxZoom", n), c = re(), f = re(), d = re(), g = re();
  let v = w(t, "position", 12, "bottom-left"), x = w(t, "showZoom", 12, !0), b = w(t, "showFitView", 12, !0), E = w(t, "showLock", 12, !0), m = w(t, "buttonBgColor", 12, void 0), C = w(t, "buttonBgColorHover", 12, void 0), p = w(t, "buttonColor", 12, void 0), _ = w(t, "buttonColorHover", 12, void 0), S = w(t, "buttonBorderColor", 12, void 0), $ = w(t, "ariaLabel", 12, void 0), T = w(t, "style", 12, void 0), D = w(t, "orientation", 12, "vertical"), H = w(t, "fitViewOptions", 12, void 0), A = w(t, "class", 12, "");
  const {
    zoomIn: L,
    zoomOut: z,
    fitView: P,
    viewport: V,
    minZoom: k,
    maxZoom: N,
    nodesDraggable: M,
    nodesConnectable: I,
    elementsSelectable: B
  } = Ge(), F = {
    bgColor: m(),
    bgColorHover: C(),
    color: p(),
    colorHover: _(),
    borderColor: S()
  }, K = () => {
    L();
  }, ie = () => {
    z();
  }, ee = () => {
    P(H());
  }, W = () => {
    U(c, !h(c)), M.set(h(c)), I.set(h(c)), B.set(h(c));
  };
  he(
    () => (o(), i(), s()),
    () => {
      U(c, o() || i() || s());
    }
  ), he(() => (a(), l()), () => {
    U(f, a().zoom <= l());
  }), he(() => (a(), u()), () => {
    U(d, a().zoom >= u());
  }), he(() => j(D()), () => {
    U(g, D() === "horizontal" ? "horizontal" : "vertical");
  }), gt(), He();
  const de = /* @__PURE__ */ pe(() => $t([
    "svelte-flow__controls",
    h(g),
    A()
  ])), me = /* @__PURE__ */ pe(() => $() ?? "Svelte Flow controls");
  Do(e, {
    get class() {
      return h(de);
    },
    get position() {
      return v();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return h(me);
    },
    get style() {
      return T();
    },
    children: (ge, Ie) => {
      var G = op(), se = be(G);
      pt(se, t, "before", {});
      var Me = R(se, 2);
      {
        var Ae = (ve) => {
          var xe = rp(), Oe = be(xe);
          oo(Oe, ut(
            {
              class: "svelte-flow__controls-zoomin",
              title: "zoom in",
              "aria-label": "zoom in",
              get disabled() {
                return h(d);
              }
            },
            F,
            {
              $$events: { click: K },
              children: (lt, J) => {
                qc(lt);
              },
              $$slots: { default: !0 }
            }
          ));
          var ct = R(Oe, 2);
          oo(ct, ut(
            {
              class: "svelte-flow__controls-zoomout",
              title: "zoom out",
              "aria-label": "zoom out",
              get disabled() {
                return h(f);
              }
            },
            F,
            {
              $$events: { click: ie },
              children: (lt, J) => {
                Gc(lt);
              },
              $$slots: { default: !0 }
            }
          )), O(ve, xe);
        };
        ke(Me, (ve) => {
          x() && ve(Ae);
        });
      }
      var Xe = R(Me, 2);
      {
        var te = (ve) => {
          oo(ve, ut(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            F,
            {
              $$events: { click: ee },
              children: (xe, Oe) => {
                Uc(xe);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        ke(Xe, (ve) => {
          b() && ve(te);
        });
      }
      var Fe = R(Xe, 2);
      {
        var Le = (ve) => {
          oo(ve, ut(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            F,
            {
              $$events: { click: W },
              children: (xe, Oe) => {
                var ct = et(), lt = be(ct);
                {
                  var J = (le) => {
                    Jc(le);
                  }, ze = (le) => {
                    jc(le);
                  };
                  ke(lt, (le) => {
                    h(c) ? le(J) : le(ze, !1);
                  });
                }
                O(xe, ct);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        ke(Fe, (ve) => {
          E() && ve(Le);
        });
      }
      var Qe = R(Fe, 2);
      pt(Qe, t, "default", {});
      var oe = R(Qe, 2);
      pt(oe, t, "after", {}), O(ge, G);
    },
    $$slots: { default: !0 }
  });
  var Ce = ce({
    get position() {
      return v();
    },
    set position(ge) {
      v(ge), y();
    },
    get showZoom() {
      return x();
    },
    set showZoom(ge) {
      x(ge), y();
    },
    get showFitView() {
      return b();
    },
    set showFitView(ge) {
      b(ge), y();
    },
    get showLock() {
      return E();
    },
    set showLock(ge) {
      E(ge), y();
    },
    get buttonBgColor() {
      return m();
    },
    set buttonBgColor(ge) {
      m(ge), y();
    },
    get buttonBgColorHover() {
      return C();
    },
    set buttonBgColorHover(ge) {
      C(ge), y();
    },
    get buttonColor() {
      return p();
    },
    set buttonColor(ge) {
      p(ge), y();
    },
    get buttonColorHover() {
      return _();
    },
    set buttonColorHover(ge) {
      _(ge), y();
    },
    get buttonBorderColor() {
      return S();
    },
    set buttonBorderColor(ge) {
      S(ge), y();
    },
    get ariaLabel() {
      return $();
    },
    set ariaLabel(ge) {
      $(ge), y();
    },
    get style() {
      return T();
    },
    set style(ge) {
      T(ge), y();
    },
    get orientation() {
      return D();
    },
    set orientation(ge) {
      D(ge), y();
    },
    get fitViewOptions() {
      return H();
    },
    set fitViewOptions(ge) {
      H(ge), y();
    },
    get class() {
      return A();
    },
    set class(ge) {
      A(ge), y();
    }
  });
  return r(), Ce;
}
ae(
  Qc,
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
var ip = /* @__PURE__ */ _e("<circle></circle>");
function ed(e, t) {
  ue(t, !1);
  let n = w(t, "radius", 12, 5), r = w(t, "class", 12, "");
  He();
  var o = ip();
  return $e(
    (i) => {
      fe(o, "cx", n()), fe(o, "cy", n()), fe(o, "r", n()), kt(o, 0, Cn(i));
    },
    [
      () => $t([
        "svelte-flow__background-pattern",
        "dots",
        r()
      ])
    ],
    pe
  ), O(e, o), ce({
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
ae(ed, { radius: {}, class: {} }, [], [], !0);
var sp = /* @__PURE__ */ _e("<path></path>");
function td(e, t) {
  ue(t, !1);
  let n = w(t, "lineWidth", 12, 1), r = w(t, "dimensions", 12), o = w(t, "variant", 12, void 0), i = w(t, "class", 12, "");
  He();
  var s = sp();
  return $e(
    (a) => {
      fe(s, "stroke-width", n()), fe(s, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), kt(s, 0, Cn(a));
    },
    [
      () => $t([
        "svelte-flow__background-pattern",
        o(),
        i()
      ])
    ],
    pe
  ), O(e, s), ce({
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
ae(
  td,
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
const ap = {
  [Gn.Dots]: 1,
  [Gn.Lines]: 1,
  [Gn.Cross]: 6
};
var lp = /* @__PURE__ */ _e('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const up = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function nd(e, t) {
  ue(t, !1), Je(e, up);
  const [n, r] = tt(), o = () => Q(_, "$flowId", n), i = () => Q(p, "$viewport", n), s = re(), a = re(), l = re(), u = re(), c = re();
  let f = w(t, "id", 12, void 0), d = w(t, "variant", 28, () => Gn.Dots), g = w(t, "gap", 12, 20), v = w(t, "size", 12, 1), x = w(t, "lineWidth", 12, 1), b = w(t, "bgColor", 12, void 0), E = w(t, "patternColor", 12, void 0), m = w(t, "patternClass", 12, void 0), C = w(t, "class", 12, "");
  const { viewport: p, flowId: _ } = Ge(), S = v() || ap[d()], $ = d() === Gn.Dots, T = d() === Gn.Cross, D = Array.isArray(g()) ? g() : [g(), g()];
  he(
    () => (o(), j(f())),
    () => {
      U(s, `background-pattern-${o()}-${f() ? f() : ""}`);
    }
  ), he(() => i(), () => {
    U(a, [
      D[0] * i().zoom || 1,
      D[1] * i().zoom || 1
    ]);
  }), he(() => i(), () => {
    U(l, S * i().zoom);
  }), he(() => (h(l), h(a)), () => {
    U(u, T ? [h(l), h(l)] : h(a));
  }), he(
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
  var H = lp(), A = X(H), L = X(A);
  {
    var z = (N) => {
      const M = /* @__PURE__ */ pe(() => h(l) / 2);
      ed(N, {
        get radius() {
          return h(M);
        },
        get class() {
          return m();
        }
      });
    }, P = (N) => {
      td(N, {
        get dimensions() {
          return h(u);
        },
        get variant() {
          return d();
        },
        get lineWidth() {
          return x();
        },
        get class() {
          return m();
        }
      });
    };
    ke(L, (N) => {
      $ ? N(z) : N(P, !1);
    });
  }
  Z(A);
  var V = R(A);
  Z(H), $e(
    (N) => {
      kt(H, 0, Cn(N), "svelte-1r7pe8d"), st(H, "--xy-background-color-props", b()), st(H, "--xy-background-pattern-color-props", E()), fe(A, "id", h(s)), fe(A, "x", i().x % h(a)[0]), fe(A, "y", i().y % h(a)[1]), fe(A, "width", h(a)[0]), fe(A, "height", h(a)[1]), fe(A, "patternTransform", `translate(-${h(c)[0]},-${h(c)[1]})`), fe(V, "fill", `url(#${h(s)})`);
    },
    [
      () => $t(["svelte-flow__background", C()])
    ],
    pe
  ), O(e, H);
  var k = ce({
    get id() {
      return f();
    },
    set id(N) {
      f(N), y();
    },
    get variant() {
      return d();
    },
    set variant(N) {
      d(N), y();
    },
    get gap() {
      return g();
    },
    set gap(N) {
      g(N), y();
    },
    get size() {
      return v();
    },
    set size(N) {
      v(N), y();
    },
    get lineWidth() {
      return x();
    },
    set lineWidth(N) {
      x(N), y();
    },
    get bgColor() {
      return b();
    },
    set bgColor(N) {
      b(N), y();
    },
    get patternColor() {
      return E();
    },
    set patternColor(N) {
      E(N), y();
    },
    get patternClass() {
      return m();
    },
    set patternClass(N) {
      m(N), y();
    },
    get class() {
      return C();
    },
    set class(N) {
      C(N), y();
    }
  });
  return r(), k;
}
ae(
  nd,
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
var cp = /* @__PURE__ */ _e("<rect></rect>");
function rd(e, t) {
  ue(t, !1);
  let n = w(t, "x", 12), r = w(t, "y", 12), o = w(t, "width", 12, 0), i = w(t, "height", 12, 0), s = w(t, "borderRadius", 12, 5), a = w(t, "color", 12, void 0), l = w(t, "shapeRendering", 12), u = w(t, "strokeColor", 12, void 0), c = w(t, "strokeWidth", 12, 2), f = w(t, "selected", 12, !1), d = w(t, "class", 12, "");
  He();
  var g = cp();
  let v;
  return $e(
    (x) => {
      v = kt(g, 0, Cn(x), null, v, { selected: f() }), fe(g, "x", n()), fe(g, "y", r()), fe(g, "rx", s()), fe(g, "ry", s()), fe(g, "width", o()), fe(g, "height", i()), fe(g, "style", `${a() ? `fill: ${a()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), fe(g, "shape-rendering", l());
    },
    [
      () => $t(["svelte-flow__minimap-node", d()])
    ],
    pe
  ), O(e, g), ce({
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
ae(
  rd,
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
  const n = q0({
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
const ds = (e) => e instanceof Function ? e : () => e;
var dp = /* @__PURE__ */ _e("<title> </title>"), fp = /* @__PURE__ */ _e('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function od(e, t) {
  ue(t, !1);
  const [n, r] = tt(), o = () => Q(Xe, "$flowId", n), i = () => Q(se, "$viewport", n), s = () => Q(Me, "$containerWidth", n), a = () => Q(Ae, "$containerHeight", n), l = () => Q(G, "$nodeLookup", n), u = () => Q(Ie, "$nodes", n), c = () => Q(te, "$panZoom", n), f = () => Q(Fe, "$translateExtent", n), d = re(), g = re(), v = re(), x = re(), b = re(), E = re(), m = re(), C = re(), p = re(), _ = re(), S = re(), $ = re(), T = re();
  let D = w(t, "position", 12, "bottom-right"), H = w(t, "ariaLabel", 12, "Mini map"), A = w(t, "nodeStrokeColor", 12, "transparent"), L = w(t, "nodeColor", 12, void 0), z = w(t, "nodeClass", 12, ""), P = w(t, "nodeBorderRadius", 12, 5), V = w(t, "nodeStrokeWidth", 12, 2), k = w(t, "bgColor", 12, void 0), N = w(t, "maskColor", 12, void 0), M = w(t, "maskStrokeColor", 12, void 0), I = w(t, "maskStrokeWidth", 12, void 0), B = w(t, "width", 12, void 0), F = w(t, "height", 12, void 0), K = w(t, "pannable", 12, !0), ie = w(t, "zoomable", 12, !0), ee = w(t, "inversePan", 12, void 0), W = w(t, "zoomStep", 12, void 0), de = w(t, "style", 12, ""), me = w(t, "class", 12, "");
  const Ce = 200, ge = 150, {
    nodes: Ie,
    nodeLookup: G,
    viewport: se,
    width: Me,
    height: Ae,
    flowId: Xe,
    panZoom: te,
    translateExtent: Fe
  } = Ge(), Le = L() === void 0 ? void 0 : ds(L()), Qe = ds(A()), oe = ds(z()), ve = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), xe = `svelte-flow__minimap-desc-${o()}`;
  let Oe = re(h(d));
  const ct = () => h(E);
  he(
    () => (i(), s(), a()),
    () => {
      U(d, {
        x: -i().x / i().zoom,
        y: -i().y / i().zoom,
        width: s() / i().zoom,
        height: a() / i().zoom
      });
    }
  ), he(
    () => (l(), h(d), u()),
    () => {
      U(Oe, l().size > 0 ? rc(Mo(l()), h(d)) : h(d)), u();
    }
  ), he(() => j(B()), () => {
    U(g, B() ?? Ce);
  }), he(() => j(F()), () => {
    U(v, F() ?? ge);
  }), he(
    () => (h(Oe), h(g)),
    () => {
      U(x, h(Oe).width / h(g));
    }
  ), he(
    () => (h(Oe), h(v)),
    () => {
      U(b, h(Oe).height / h(v));
    }
  ), he(
    () => (h(x), h(b)),
    () => {
      U(E, Math.max(h(x), h(b)));
    }
  ), he(() => (h(E), h(g)), () => {
    U(m, h(E) * h(g));
  }), he(
    () => (h(E), h(v)),
    () => {
      U(C, h(E) * h(v));
    }
  ), he(() => h(E), () => {
    U(p, 5 * h(E));
  }), he(
    () => (h(Oe), h(m), h(p)),
    () => {
      U(_, h(Oe).x - (h(m) - h(Oe).width) / 2 - h(p));
    }
  ), he(
    () => (h(Oe), h(C), h(p)),
    () => {
      U(S, h(Oe).y - (h(C) - h(Oe).height) / 2 - h(p));
    }
  ), he(() => (h(m), h(p)), () => {
    U($, h(m) + h(p) * 2);
  }), he(() => (h(C), h(p)), () => {
    U(T, h(C) + h(p) * 2);
  }), gt(), He();
  const lt = /* @__PURE__ */ pe(() => de() + (k() ? `;--xy-minimap-background-color-props:${k()}` : "")), J = /* @__PURE__ */ pe(() => $t(["svelte-flow__minimap", me()]));
  Do(e, {
    get position() {
      return D();
    },
    get style() {
      return h(lt);
    },
    get class() {
      return h(J);
    },
    "data-testid": "svelte-flow__minimap",
    children: (le, dn) => {
      var jt = et(), fn = be(jt);
      {
        var Pe = (rt) => {
          var ye = fp();
          fe(ye, "aria-labelledby", xe);
          var ot = X(ye);
          {
            var at = (Lt) => {
              var St = dp();
              fe(St, "id", xe);
              var gn = X(St, !0);
              Z(St), $e(() => Yt(gn, H())), O(Lt, St);
            };
            ke(ot, (Lt) => {
              H() && Lt(at);
            });
          }
          var Ft = R(ot);
          Vt(Ft, 1, u, (Lt) => Lt.id, (Lt, St) => {
            var gn = et();
            const Jt = /* @__PURE__ */ pe(() => l().get(h(St).id));
            var ft = be(gn);
            {
              var ji = (nr) => {
                const Qt = /* @__PURE__ */ pe(() => tr(h(Jt))), zo = /* @__PURE__ */ pe(() => Le == null ? void 0 : Le(h(Jt))), Ro = /* @__PURE__ */ pe(() => Qe(h(Jt))), Bo = /* @__PURE__ */ pe(() => oe(h(Jt)));
                rd(nr, ut(
                  {
                    get x() {
                      return h(Jt).internals.positionAbsolute.x;
                    },
                    get y() {
                      return h(Jt).internals.positionAbsolute.y;
                    }
                  },
                  () => h(Qt),
                  {
                    get selected() {
                      return h(Jt).selected;
                    },
                    get color() {
                      return h(zo);
                    },
                    get borderRadius() {
                      return P();
                    },
                    get strokeColor() {
                      return h(Ro);
                    },
                    get strokeWidth() {
                      return V();
                    },
                    shapeRendering: ve,
                    get class() {
                      return h(Bo);
                    }
                  }
                ));
              };
              ke(ft, (nr) => {
                h(Jt) && ic(h(Jt)) && nr(ji);
              });
            }
            O(Lt, gn);
          });
          var qr = R(Ft);
          Z(ye), vt(ye, (Lt, St) => cs == null ? void 0 : cs(Lt, St), () => ({
            panZoom: c(),
            viewport: se,
            getViewScale: ct,
            translateExtent: f(),
            width: s(),
            height: a(),
            inversePan: ee(),
            zoomStep: W(),
            pannable: K(),
            zoomable: ie()
          })), $e(() => {
            fe(ye, "width", h(g)), fe(ye, "height", h(v)), fe(ye, "viewBox", `${h(_) ?? ""} ${h(S) ?? ""} ${h($) ?? ""} ${h(T) ?? ""}`), st(ye, "--xy-minimap-mask-background-color-props", N()), st(ye, "--xy-minimap-mask-stroke-color-props", M()), st(ye, "--xy-minimap-mask-stroke-width-props", I() ? I() * h(E) : void 0), fe(qr, "d", `M${h(_) - h(p)},${h(S) - h(p)}h${h($) + h(p) * 2}v${h(T) + h(p) * 2}h${-h($) - h(p) * 2}z
      M${h(d).x ?? ""},${h(d).y ?? ""}h${h(d).width ?? ""}v${h(d).height ?? ""}h${-h(d).width}z`);
          }), O(rt, ye);
        };
        ke(fn, (rt) => {
          c() && rt(Pe);
        });
      }
      O(le, jt);
    },
    $$slots: { default: !0 }
  });
  var ze = ce({
    get position() {
      return D();
    },
    set position(le) {
      D(le), y();
    },
    get ariaLabel() {
      return H();
    },
    set ariaLabel(le) {
      H(le), y();
    },
    get nodeStrokeColor() {
      return A();
    },
    set nodeStrokeColor(le) {
      A(le), y();
    },
    get nodeColor() {
      return L();
    },
    set nodeColor(le) {
      L(le), y();
    },
    get nodeClass() {
      return z();
    },
    set nodeClass(le) {
      z(le), y();
    },
    get nodeBorderRadius() {
      return P();
    },
    set nodeBorderRadius(le) {
      P(le), y();
    },
    get nodeStrokeWidth() {
      return V();
    },
    set nodeStrokeWidth(le) {
      V(le), y();
    },
    get bgColor() {
      return k();
    },
    set bgColor(le) {
      k(le), y();
    },
    get maskColor() {
      return N();
    },
    set maskColor(le) {
      N(le), y();
    },
    get maskStrokeColor() {
      return M();
    },
    set maskStrokeColor(le) {
      M(le), y();
    },
    get maskStrokeWidth() {
      return I();
    },
    set maskStrokeWidth(le) {
      I(le), y();
    },
    get width() {
      return B();
    },
    set width(le) {
      B(le), y();
    },
    get height() {
      return F();
    },
    set height(le) {
      F(le), y();
    },
    get pannable() {
      return K();
    },
    set pannable(le) {
      K(le), y();
    },
    get zoomable() {
      return ie();
    },
    set zoomable(le) {
      ie(le), y();
    },
    get inversePan() {
      return ee();
    },
    set inversePan(le) {
      ee(le), y();
    },
    get zoomStep() {
      return W();
    },
    set zoomStep(le) {
      W(le), y();
    },
    get style() {
      return de();
    },
    set style(le) {
      de(le), y();
    },
    get class() {
      return me();
    },
    set class(le) {
      me(le), y();
    }
  });
  return r(), ze;
}
ae(
  od,
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
const Nl = (e) => f0(e);
function At() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: s, height: a, minZoom: l, maxZoom: u, panZoom: c, nodes: f, edges: d, domNode: g, nodeLookup: v, nodeOrigin: x, edgeLookup: b, connectionLookup: E } = Ge(), m = (_) => {
    var H, A;
    const S = q(v), $ = Nl(_) ? _ : S.get(_.id), T = $.parentId ? p0($.position, $.measured, $.parentId, S, q(x)) : $.position, D = {
      ...$,
      position: T,
      width: ((H = $.measured) == null ? void 0 : H.width) ?? $.width,
      height: ((A = $.measured) == null ? void 0 : A.height) ?? $.height
    };
    return Or(D);
  }, C = (_, S, $ = { replace: !1 }) => {
    var H;
    const T = (H = q(v).get(_)) == null ? void 0 : H.internals.userNode;
    if (!T)
      return;
    const D = typeof S == "function" ? S(T) : S;
    $.replace ? f.update((A) => A.map((L) => L.id === _ ? Nl(D) ? D : { ...L, ...D } : L)) : (Object.assign(T, D), f.update((A) => A));
  }, p = (_) => q(v).get(_);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: p,
    getNode: (_) => {
      var S;
      return (S = p(_)) == null ? void 0 : S.internals.userNode;
    },
    getNodes: (_) => _ === void 0 ? q(f) : Tl(q(v), _),
    getEdge: (_) => q(b).get(_),
    getEdges: (_) => _ === void 0 ? q(d) : Tl(q(b), _),
    setZoom: (_, S) => {
      const $ = q(c);
      return $ ? $.scaleTo(_, { duration: S == null ? void 0 : S.duration }) : Promise.resolve(!1);
    },
    getZoom: () => q(i).zoom,
    setViewport: async (_, S) => {
      const $ = q(i), T = q(c);
      return T ? (await T.setViewport({
        x: _.x ?? $.x,
        y: _.y ?? $.y,
        zoom: _.zoom ?? $.zoom
      }, { duration: S == null ? void 0 : S.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => q(i),
    setCenter: async (_, S, $) => {
      const T = typeof ($ == null ? void 0 : $.zoom) < "u" ? $.zoom : q(u), D = q(c);
      return D ? (await D.setViewport({
        x: q(s) / 2 - _ * T,
        y: q(a) / 2 - S * T,
        zoom: T
      }, { duration: $ == null ? void 0 : $.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (_, S) => {
      const $ = q(c);
      if (!$)
        return Promise.resolve(!1);
      const T = ca(_, q(s), q(a), q(l), q(u), (S == null ? void 0 : S.padding) ?? 0.1);
      return await $.setViewport(T, { duration: S == null ? void 0 : S.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (_, S = !0, $) => {
      const T = gl(_), D = T ? _ : m(_);
      return D ? ($ || q(f)).filter((H) => {
        const A = q(v).get(H.id);
        if (!A || !T && H.id === _.id)
          return !1;
        const L = Or(A), z = _o(L, D);
        return S && z > 0 || z >= D.width * D.height;
      }) : [];
    },
    isNodeIntersecting: (_, S, $ = !0) => {
      const D = gl(_) ? _ : m(_);
      if (!D)
        return !1;
      const H = _o(D, S);
      return $ && H > 0 || H >= D.width * D.height;
    },
    deleteElements: async ({ nodes: _ = [], edges: S = [] }) => {
      const { nodes: $, edges: T } = await ec({
        nodesToRemove: _,
        edgesToRemove: S,
        nodes: q(f),
        edges: q(d),
        onBeforeDelete: q(r)
      });
      return $ && f.update((D) => D.filter((H) => !$.some(({ id: A }) => A === H.id))), T && d.update((D) => D.filter((H) => !T.some(({ id: A }) => A === H.id))), {
        deletedNodes: $,
        deletedEdges: T
      };
    },
    screenToFlowPosition: (_, S = { snapToGrid: !0 }) => {
      const $ = q(g);
      if (!$)
        return _;
      const T = S.snapToGrid ? q(o) : !1, { x: D, y: H, zoom: A } = q(i), { x: L, y: z } = $.getBoundingClientRect(), P = {
        x: _.x - L,
        y: _.y - z
      };
      return Ho(P, [D, H, A], T !== null, T || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (_) => {
      const S = q(g);
      if (!S)
        return _;
      const { x: $, y: T, zoom: D } = q(i), { x: H, y: A } = S.getBoundingClientRect(), L = oc(_, [$, T, D]);
      return {
        x: L.x + H,
        y: L.y + A
      };
    },
    toObject: () => ({
      nodes: q(f).map((_) => ({
        ..._,
        // we want to make sure that changes to the nodes object that gets returned by toObject
        // do not affect the nodes object
        position: { ..._.position },
        data: { ..._.data }
      })),
      edges: q(d).map((_) => ({ ..._ })),
      viewport: { ...q(i) }
    }),
    updateNode: C,
    updateNodeData: (_, S, $) => {
      var H;
      const T = (H = q(v).get(_)) == null ? void 0 : H.internals.userNode;
      if (!T)
        return;
      const D = typeof S == "function" ? S(T) : S;
      T.data = $ != null && $.replace ? D : { ...T.data, ...D }, f.update((A) => A);
    },
    getNodesBounds: (_) => {
      const S = q(v), $ = q(x);
      return g0(_, { nodeLookup: S, nodeOrigin: $ });
    },
    getHandleConnections: ({ type: _, id: S, nodeId: $ }) => {
      var T;
      return Array.from(((T = q(E).get(`${$}-${_}-${S ?? null}`)) == null ? void 0 : T.values()) ?? []);
    },
    viewport: i
  };
}
function Tl(e, t) {
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
var gp = /* @__PURE__ */ ne('<div class="svelte-flow__node-toolbar"><!></div>');
function id(e, t) {
  ue(t, !1);
  const [n, r] = tt(), o = () => Q(C, "$nodes", n), i = () => Q(m, "$nodeLookup", n), s = () => Q(E, "$viewport", n), a = () => Q(b, "$domNode", n), l = re(), u = re(), c = re();
  let f = w(t, "nodeId", 12, void 0), d = w(t, "position", 12, void 0), g = w(t, "align", 12, void 0), v = w(t, "offset", 12, void 0), x = w(t, "isVisible", 12, void 0);
  const { domNode: b, viewport: E, nodeLookup: m, nodes: C } = Ge(), { getNodesBounds: p } = At(), _ = lr("svelteflow__node_id");
  let S = re(), $ = re([]), T = v() !== void 0 ? v() : 10, D = d() !== void 0 ? d() : Ee.Top, H = g() !== void 0 ? g() : "center";
  he(
    () => (o(), j(f()), i()),
    () => {
      o();
      const V = Array.isArray(f()) ? f() : [f() || _];
      U($, V.reduce(
        (k, N) => {
          const M = i().get(N);
          return M && k.push(M), k;
        },
        []
      ));
    }
  ), he(
    () => (h($), s()),
    () => {
      const V = p(h($));
      V && U(S, M0(V, s(), D, T, H));
    }
  ), he(() => h($), () => {
    U(l, h($).length === 0 ? 1 : Math.max(...h($).map((V) => (V.internals.z || 5) + 1)));
  }), he(() => o(), () => {
    U(u, o().filter((V) => V.selected).length);
  }), he(
    () => (j(x()), h($), h(u)),
    () => {
      U(c, typeof x() == "boolean" ? x() : h($).length === 1 && h($)[0].selected && h(u) === 1);
    }
  ), gt(), He();
  var A = et(), L = be(A);
  {
    var z = (V) => {
      var k = gp(), N = X(k);
      pt(N, t, "default", {}), Z(k), vt(k, (M, I) => Er == null ? void 0 : Er(M, I), () => ({ domNode: a() })), $e(
        (M) => {
          fe(k, "data-id", M), st(k, "position", "absolute"), st(k, "transform", h(S)), st(k, "z-index", h(l));
        },
        [
          () => h($).reduce((M, I) => `${M}${I.id} `, "").trim()
        ],
        pe
      ), O(V, k);
    };
    ke(L, (V) => {
      a() && h(c) && h($) && V(z);
    });
  }
  O(e, A);
  var P = ce({
    get nodeId() {
      return f();
    },
    set nodeId(V) {
      f(V), y();
    },
    get position() {
      return d();
    },
    set position(V) {
      d(V), y();
    },
    get align() {
      return g();
    },
    set align(V) {
      g(V), y();
    },
    get offset() {
      return v();
    },
    set offset(V) {
      v(V), y();
    },
    get isVisible() {
      return x();
    },
    set isVisible(V) {
      x(V), y();
    }
  });
  return r(), P;
}
ae(
  id,
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
function mr(e) {
  const { nodes: t, nodeLookup: n } = Ge();
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
    (!z0(a, r) || o) && (r = a, s(l ? a : a[0] ?? null), o = !1);
  });
}
const Ml = "tinyflow-component";
class yw {
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
const hp = () => {
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
}, ti = hp();
var vp = /* @__PURE__ */ ne("<button><!></button>");
function qe(e, t) {
  ue(t, !0);
  const n = w(t, "children", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = vp();
  let i;
  var s = X(o);
  return ur(s, () => n() ?? dt), Z(o), $e(() => i = sn(o, i, {
    type: "button",
    ...r,
    class: `tf-btn nopan nodrag ${t.class ?? ""}`
  })), O(e, o), ce({
    get children() {
      return n();
    },
    set children(a) {
      n(a), y();
    }
  });
}
ae(qe, { children: {} }, [], [], !0);
var pp = /* @__PURE__ */ ne("<input>");
function sd(e, t) {
  ue(t, !0);
  const n = /* @__PURE__ */ yt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = pp();
  so(r);
  let o;
  $e(() => o = sn(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), O(e, r), ce();
}
ae(sd, {}, [], [], !0);
var mp = /* @__PURE__ */ ne("<input>");
function xt(e, t) {
  ue(t, !0);
  const n = /* @__PURE__ */ yt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = mp();
  so(r);
  let o;
  $e(() => o = sn(r, o, {
    type: "text",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), O(e, r), ce();
}
ae(xt, {}, [], [], !0);
var yp = /* @__PURE__ */ ne("<textarea></textarea>");
function Et(e, t) {
  ue(t, !0);
  const n = /* @__PURE__ */ yt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = yp();
  l1(r);
  let o;
  $e(() => o = sn(r, o, {
    ...n,
    class: `tf-textarea nodrag ${t.class ?? ""}`
  })), O(e, r), ce();
}
ae(Et, {}, [], [], !0);
var wp = /* @__PURE__ */ ne('<div role="button"><!></div>'), _p = /* @__PURE__ */ ne("<div></div>");
function ad(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = nt(n, ["items", "onChange", "activeIndex"]);
  ue(t, !1);
  let o = w(t, "items", 28, () => []), i = w(t, "onChange", 12, () => {
  }), s = w(t, "activeIndex", 12, 0);
  function a(c, f) {
    var d;
    s(f), (d = i()) == null || d(c, f);
  }
  He();
  var l = _p();
  let u;
  return Vt(l, 5, o, go, (c, f, d) => {
    var g = wp();
    fe(g, "tabindex", d), g.__click = () => a(h(f), d), g.__keydown = (E) => {
      (E.key === "Enter" || E.key === " ") && (E.preventDefault(), a(h(f), d));
    };
    var v = X(g);
    {
      var x = (E) => {
        var m = Be();
        $e(() => Yt(m, h(f).label)), O(E, m);
      }, b = (E) => {
        var m = et(), C = be(m);
        ur(C, () => h(f).label ?? dt), O(E, m);
      };
      ke(v, (E) => {
        typeof h(f).label == "string" ? E(x) : E(b, !1);
      });
    }
    Z(g), $e(() => kt(g, 1, `tf-tabs-item ${(d === s() ? "active" : "") ?? ""}`)), O(c, g);
  }), Z(l), $e(() => u = sn(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), O(e, l), ce({
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
Li(["click", "keydown"]);
ae(ad, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var xp = (e, t, n) => t(h(n)), bp = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(h(n)));
}, Cp = /* @__PURE__ */ ne('<span class="tf-collapse-item-title-icon"><!></span>'), kp = /* @__PURE__ */ ne('<div class="tf-collapse-item-description"><!></div>'), Ep = /* @__PURE__ */ ne('<div class="tf-collapse-item-content"><!></div>'), $p = /* @__PURE__ */ ne('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), Sp = /* @__PURE__ */ ne("<div></div>");
const Pp = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function ld(e, t) {
  ue(t, !0), Je(e, Pp);
  let n = w(t, "items", 7), r = w(t, "onChange", 7), o = w(t, "activeKeys", 31, () => It([]));
  function i(a) {
    var l;
    o().includes(a.key) ? o(o().filter((u) => u !== a.key)) : (o().push(a.key), o(o())), (l = r()) == null || l(a, o());
  }
  var s = Sp();
  return Vt(s, 21, n, go, (a, l, u) => {
    var c = $p(), f = X(c);
    fe(f, "tabindex", u), f.__click = [xp, i, l], f.__keydown = [bp, i, l];
    var d = X(f);
    {
      var g = (p) => {
        var _ = Cp(), S = X(_);
        Fn(S, {
          get target() {
            return h(l).icon;
          }
        }), Z(_), O(p, _);
      };
      ke(d, (p) => {
        h(l).icon && p(g);
      });
    }
    var v = R(d, 2);
    Fn(v, {
      get target() {
        return h(l).title;
      }
    });
    var x = R(v, 2);
    Z(f);
    var b = R(f, 2);
    {
      var E = (p) => {
        var _ = kp(), S = X(_);
        Fn(S, {
          get target() {
            return h(l).description;
          }
        }), Z(_), O(p, _);
      };
      ke(b, (p) => {
        h(l).description && p(E);
      });
    }
    var m = R(b, 2);
    {
      var C = (p) => {
        var _ = Ep(), S = X(_);
        Fn(S, {
          get target() {
            return h(l).content;
          }
        }), Z(_), O(p, _);
      };
      ke(m, (p) => {
        o().includes(h(l).key) && p(C);
      });
    }
    Z(c), $e((p) => kt(x, 1, `tf-collapse-item-title-arrow ${p ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(h(l).key) ? "rotate-90" : ""
    ]), O(a, c);
  }), Z(s), $e(() => {
    fe(s, "style", t.style), kt(s, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), O(e, s), ce({
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
Li(["click", "keydown"]);
ae(ld, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Fn(e, t) {
  ue(t, !0);
  let n = w(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = et(), o = be(r);
  {
    var i = (a) => {
      var l = et(), u = be(l);
      ur(u, () => n() ?? dt), O(a, l);
    }, s = (a) => {
      var l = et(), u = be(l);
      yu(u, n), O(a, l);
    };
    ke(o, (a) => {
      typeof n() == "function" ? a(i) : a(s, !1);
    });
  }
  return O(e, r), ce({
    get target() {
      return n();
    },
    set target(a) {
      n(a), y();
    }
  });
}
ae(Fn, { target: {} }, [], [], !0);
var Np = (e, t, n) => t(h(n)), Tp = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), Mp = /* @__PURE__ */ ne('<div class="tf-select-content-children"><!></div>'), Hp = /* @__PURE__ */ ne('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), Vp = /* @__PURE__ */ ne('<div class="tf-select-content nopan nodrag"><!></div>'), Dp = /* @__PURE__ */ ne("<!> <!>", 1), Ap = /* @__PURE__ */ ne('<div class="tf-select-input-placeholder"> </div>'), Lp = /* @__PURE__ */ ne('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), Op = /* @__PURE__ */ ne("<div><!></div>");
function _n(e, t) {
  ue(t, !0);
  const n = (C, p = dt) => {
    var _ = et(), S = be(_);
    Vt(S, 19, p, ($, T) => `${T}_${$.value}`, ($, T) => {
      var D = Hp(), H = be(D);
      H.__click = [Np, x, T];
      var A = X(H), L = X(A);
      {
        var z = (N) => {
          var M = Tp();
          O(N, M);
        };
        ke(L, (N) => {
          h(T).children && h(T).children.length > 0 && N(z);
        });
      }
      Z(A);
      var P = R(A, 2);
      Fn(P, {
        get target() {
          return h(T).label;
        }
      }), Z(H);
      var V = R(H, 2);
      {
        var k = (N) => {
          var M = Mp(), I = X(M);
          n(I, () => h(T).children), Z(M), O(N, M);
        };
        ke(V, (N) => {
          h(T).children && h(T).children.length > 0 && (l() || c().includes(h(T).value)) && N(k);
        });
      }
      O($, D);
    }), O(C, _);
  };
  let r = w(t, "items", 7), o = w(t, "onExpand", 7), i = w(t, "onSelect", 7), s = w(t, "value", 23, () => []), a = w(t, "defaultValue", 23, () => []), l = w(t, "expandAll", 7, !0), u = w(t, "multiple", 7, !1), c = w(t, "expandValue", 23, () => []), f = w(t, "placeholder", 7), d = /* @__PURE__ */ yt(t, [
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
    const C = [], p = (_) => {
      for (let S of _)
        s().length > 0 ? s().includes(S.value) && C.push(S) : a().includes(S.value) && C.push(S), S.children && S.children.length > 0 && p(S.children);
    };
    return p(r()), C;
  }), v;
  function x(C) {
    var p, _;
    if (C.children && C.children.length > 0) {
      (p = o()) == null || p(C);
      return;
    } else
      v == null || v.hide(), (_ = i()) == null || _(C);
  }
  var b = Op();
  let E;
  var m = X(b);
  return wn(
    Io(m, {
      floating: (p) => {
        var _ = Vp(), S = X(_);
        n(S, r), Z(_), O(p, _);
      },
      children: (p, _) => {
        var S = Lp();
        let $;
        var T = X(S);
        Vt(
          T,
          23,
          () => h(g),
          (D, H) => `${H}_${D.value}`,
          (D, H, A) => {
            var L = et(), z = be(L);
            {
              var P = (k) => {
                var N = et(), M = be(N);
                {
                  var I = (B) => {
                    Fn(B, {
                      get target() {
                        return h(H).label;
                      }
                    });
                  };
                  ke(M, (B) => {
                    h(A) === 0 && B(I);
                  });
                }
                O(k, N);
              }, V = (k) => {
                var N = Dp(), M = be(N);
                Fn(M, {
                  get target() {
                    return h(H).label;
                  }
                });
                var I = R(M, 2);
                {
                  var B = (F) => {
                    var K = Be(",");
                    O(F, K);
                  };
                  ke(I, (F) => {
                    h(A) < h(g).length - 1 && F(B);
                  });
                }
                O(k, N);
              };
              ke(z, (k) => {
                u() ? k(V, !1) : k(P);
              });
            }
            O(D, L);
          },
          (D) => {
            var H = Ap(), A = X(H, !0);
            Z(H), $e(() => Yt(A, f())), O(D, H);
          }
        ), Z(T), Ne(2), Z(S), $e(() => $ = sn(S, $, {
          class: "tf-select-input nopan nodrag",
          ...d
        })), O(p, S);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (p) => v = p,
    () => v
  ), Z(b), $e(() => E = sn(b, E, {
    ...d,
    class: `tf-select ${d.class ?? ""}`
  })), O(e, b), ce({
    get items() {
      return r();
    },
    set items(C) {
      r(C), y();
    },
    get onExpand() {
      return o();
    },
    set onExpand(C) {
      o(C), y();
    },
    get onSelect() {
      return i();
    },
    set onSelect(C) {
      i(C), y();
    },
    get value() {
      return s();
    },
    set value(C = []) {
      s(C), y();
    },
    get defaultValue() {
      return a();
    },
    set defaultValue(C = []) {
      a(C), y();
    },
    get expandAll() {
      return l();
    },
    set expandAll(C = !0) {
      l(C), y();
    },
    get multiple() {
      return u();
    },
    set multiple(C = !1) {
      u(C), y();
    },
    get expandValue() {
      return c();
    },
    set expandValue(C = []) {
      c(C), y();
    },
    get placeholder() {
      return f();
    },
    set placeholder(C) {
      f(C), y();
    }
  });
}
Li(["click"]);
ae(
  _n,
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
const bo = Math.min, Sr = Math.max, Ci = Math.round, pn = (e) => ({
  x: e,
  y: e
}), Ip = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, zp = {
  start: "end",
  end: "start"
};
function Ds(e, t, n) {
  return Sr(e, bo(t, n));
}
function Ao(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function gr(e) {
  return e.split("-")[0];
}
function Lo(e) {
  return e.split("-")[1];
}
function ud(e) {
  return e === "x" ? "y" : "x";
}
function pa(e) {
  return e === "y" ? "height" : "width";
}
function zr(e) {
  return ["top", "bottom"].includes(gr(e)) ? "y" : "x";
}
function ma(e) {
  return ud(zr(e));
}
function Rp(e, t, n) {
  n === void 0 && (n = !1);
  const r = Lo(e), o = ma(e), i = pa(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = ki(s)), [s, ki(s)];
}
function Bp(e) {
  const t = ki(e);
  return [As(e), t, As(t)];
}
function As(e) {
  return e.replace(/start|end/g, (t) => zp[t]);
}
function Yp(e, t, n) {
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
function Zp(e, t, n, r) {
  const o = Lo(e);
  let i = Yp(gr(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(As)))), i;
}
function ki(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ip[t]);
}
function Xp(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function cd(e) {
  return typeof e != "number" ? Xp(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ei(e) {
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
function Hl(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = zr(t), s = ma(t), a = pa(s), l = gr(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, d = r[a] / 2 - o[a] / 2;
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
  switch (Lo(t)) {
    case "start":
      g[s] -= d * (n && u ? -1 : 1);
      break;
    case "end":
      g[s] += d * (n && u ? -1 : 1);
      break;
  }
  return g;
}
const Fp = async (e, t, n) => {
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
  } = Hl(u, r, l), d = r, g = {}, v = 0;
  for (let x = 0; x < a.length; x++) {
    const {
      name: b,
      fn: E
    } = a[x], {
      x: m,
      y: C,
      data: p,
      reset: _
    } = await E({
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
    c = m ?? c, f = C ?? f, g = {
      ...g,
      [b]: {
        ...g[b],
        ...p
      }
    }, _ && v <= 50 && (v++, typeof _ == "object" && (_.placement && (d = _.placement), _.rects && (u = _.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : _.rects), {
      x: c,
      y: f
    } = Hl(u, d, l)), x = -1);
  }
  return {
    x: c,
    y: f,
    placement: d,
    strategy: o,
    middlewareData: g
  };
};
async function dd(e, t) {
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
  } = Ao(t, e), v = cd(g), b = a[d ? f === "floating" ? "reference" : "floating" : f], E = Ei(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(b))) == null || n ? b : b.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), m = f === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, C = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), p = await (i.isElement == null ? void 0 : i.isElement(C)) ? await (i.getScale == null ? void 0 : i.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, _ = Ei(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: m,
    offsetParent: C,
    strategy: l
  }) : m);
  return {
    top: (E.top - _.top + v.top) / p.y,
    bottom: (_.bottom - E.bottom + v.bottom) / p.y,
    left: (E.left - _.left + v.left) / p.x,
    right: (_.right - E.right + v.right) / p.x
  };
}
const Wp = (e) => ({
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
    const f = cd(c), d = {
      x: n,
      y: r
    }, g = ma(o), v = pa(g), x = await s.getDimensions(u), b = g === "y", E = b ? "top" : "left", m = b ? "bottom" : "right", C = b ? "clientHeight" : "clientWidth", p = i.reference[v] + i.reference[g] - d[g] - i.floating[v], _ = d[g] - i.reference[g], S = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let $ = S ? S[C] : 0;
    (!$ || !await (s.isElement == null ? void 0 : s.isElement(S))) && ($ = a.floating[C] || i.floating[v]);
    const T = p / 2 - _ / 2, D = $ / 2 - x[v] / 2 - 1, H = bo(f[E], D), A = bo(f[m], D), L = H, z = $ - x[v] - A, P = $ / 2 - x[v] / 2 + T, V = Ds(L, P, z), k = !l.arrow && Lo(o) != null && P !== V && i.reference[v] / 2 - (P < L ? H : A) - x[v] / 2 < 0, N = k ? P < L ? P - L : P - z : 0;
    return {
      [g]: d[g] + N,
      data: {
        [g]: V,
        centerOffset: P - V - N,
        ...k && {
          alignmentOffset: N
        }
      },
      reset: k
    };
  }
}), Kp = function(e) {
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
        flipAlignment: x = !0,
        ...b
      } = Ao(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const E = gr(o), m = zr(a), C = gr(a) === a, p = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), _ = d || (C || !x ? [ki(a)] : Bp(a)), S = v !== "none";
      !d && S && _.push(...Zp(a, x, v, p));
      const $ = [a, ..._], T = await dd(t, b), D = [];
      let H = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && D.push(T[E]), f) {
        const P = Rp(o, s, p);
        D.push(T[P[0]], T[P[1]]);
      }
      if (H = [...H, {
        placement: o,
        overflows: D
      }], !D.every((P) => P <= 0)) {
        var A, L;
        const P = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, V = $[P];
        if (V)
          return {
            data: {
              index: P,
              overflows: H
            },
            reset: {
              placement: V
            }
          };
        let k = (L = H.filter((N) => N.overflows[0] <= 0).sort((N, M) => N.overflows[1] - M.overflows[1])[0]) == null ? void 0 : L.placement;
        if (!k)
          switch (g) {
            case "bestFit": {
              var z;
              const N = (z = H.filter((M) => {
                if (S) {
                  const I = zr(M.placement);
                  return I === m || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  I === "y";
                }
                return !0;
              }).map((M) => [M.placement, M.overflows.filter((I) => I > 0).reduce((I, B) => I + B, 0)]).sort((M, I) => M[1] - I[1])[0]) == null ? void 0 : z[0];
              N && (k = N);
              break;
            }
            case "initialPlacement":
              k = a;
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
async function qp(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = gr(n), a = Lo(n), l = zr(n) === "y", u = ["left", "top"].includes(s) ? -1 : 1, c = i && l ? -1 : 1, f = Ao(t, e);
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
const Gp = function(e) {
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
      } = t, l = await qp(t, e);
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
}, Up = function(e) {
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
              x: E,
              y: m
            } = b;
            return {
              x: E,
              y: m
            };
          }
        },
        ...l
      } = Ao(e, t), u = {
        x: n,
        y: r
      }, c = await dd(t, l), f = zr(gr(o)), d = ud(f);
      let g = u[d], v = u[f];
      if (i) {
        const b = d === "y" ? "top" : "left", E = d === "y" ? "bottom" : "right", m = g + c[b], C = g - c[E];
        g = Ds(m, g, C);
      }
      if (s) {
        const b = f === "y" ? "top" : "left", E = f === "y" ? "bottom" : "right", m = v + c[b], C = v - c[E];
        v = Ds(m, v, C);
      }
      const x = a.fn({
        ...t,
        [d]: g,
        [f]: v
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
function Ki() {
  return typeof window < "u";
}
function Kr(e) {
  return fd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Zt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function zn(e) {
  var t;
  return (t = (fd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function fd(e) {
  return Ki() ? e instanceof Node || e instanceof Zt(e).Node : !1;
}
function an(e) {
  return Ki() ? e instanceof Element || e instanceof Zt(e).Element : !1;
}
function xn(e) {
  return Ki() ? e instanceof HTMLElement || e instanceof Zt(e).HTMLElement : !1;
}
function Vl(e) {
  return !Ki() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Zt(e).ShadowRoot;
}
function Oo(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = ln(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function jp(e) {
  return ["table", "td", "th"].includes(Kr(e));
}
function qi(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function ya(e) {
  const t = wa(), n = an(e) ? ln(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Jp(e) {
  let t = Qn(e);
  for (; xn(t) && !Rr(t); ) {
    if (ya(t))
      return t;
    if (qi(t))
      return null;
    t = Qn(t);
  }
  return null;
}
function wa() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Rr(e) {
  return ["html", "body", "#document"].includes(Kr(e));
}
function ln(e) {
  return Zt(e).getComputedStyle(e);
}
function Gi(e) {
  return an(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Qn(e) {
  if (Kr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Vl(e) && e.host || // Fallback.
    zn(e)
  );
  return Vl(t) ? t.host : t;
}
function gd(e) {
  const t = Qn(e);
  return Rr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : xn(t) && Oo(t) ? t : gd(t);
}
function hd(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = gd(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Zt(o);
  return i ? (Ls(s), t.concat(s, s.visualViewport || [], Oo(o) ? o : [], [])) : t.concat(o, hd(o, []));
}
function Ls(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function vd(e) {
  const t = ln(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = xn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = Ci(n) !== i || Ci(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function pd(e) {
  return an(e) ? e : e.contextElement;
}
function Pr(e) {
  const t = pd(e);
  if (!xn(t))
    return pn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = vd(t);
  let s = (i ? Ci(n.width) : n.width) / r, a = (i ? Ci(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const Qp = /* @__PURE__ */ pn(0);
function md(e) {
  const t = Zt(e);
  return !wa() || !t.visualViewport ? Qp : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function em(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Zt(e) ? !1 : t;
}
function Co(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = pd(e);
  let s = pn(1);
  t && (r ? an(r) && (s = Pr(r)) : s = Pr(e));
  const a = em(i, n, r) ? md(i) : pn(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, c = o.width / s.x, f = o.height / s.y;
  if (i) {
    const d = Zt(i), g = r && an(r) ? Zt(r) : r;
    let v = d, x = Ls(v);
    for (; x && r && g !== v; ) {
      const b = Pr(x), E = x.getBoundingClientRect(), m = ln(x), C = E.left + (x.clientLeft + parseFloat(m.paddingLeft)) * b.x, p = E.top + (x.clientTop + parseFloat(m.paddingTop)) * b.y;
      l *= b.x, u *= b.y, c *= b.x, f *= b.y, l += C, u += p, v = Zt(x), x = Ls(v);
    }
  }
  return Ei({
    width: c,
    height: f,
    x: l,
    y: u
  });
}
function _a(e, t) {
  const n = Gi(e).scrollLeft;
  return t ? t.left + n : Co(zn(e)).left + n;
}
function yd(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    _a(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function tm(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = zn(r), a = t ? qi(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = pn(1);
  const c = pn(0), f = xn(r);
  if ((f || !f && !i) && ((Kr(r) !== "body" || Oo(s)) && (l = Gi(r)), xn(r))) {
    const g = Co(r);
    u = Pr(r), c.x = g.x + r.clientLeft, c.y = g.y + r.clientTop;
  }
  const d = s && !f && !i ? yd(s, l, !0) : pn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + d.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + d.y
  };
}
function nm(e) {
  return Array.from(e.getClientRects());
}
function rm(e) {
  const t = zn(e), n = Gi(e), r = e.ownerDocument.body, o = Sr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Sr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + _a(e);
  const a = -n.scrollTop;
  return ln(r).direction === "rtl" && (s += Sr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function om(e, t) {
  const n = Zt(e), r = zn(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const u = wa();
    (!u || u && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
function im(e, t) {
  const n = Co(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = xn(e) ? Pr(e) : pn(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function Dl(e, t, n) {
  let r;
  if (t === "viewport")
    r = om(e, n);
  else if (t === "document")
    r = rm(zn(e));
  else if (an(t))
    r = im(t, n);
  else {
    const o = md(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Ei(r);
}
function wd(e, t) {
  const n = Qn(e);
  return n === t || !an(n) || Rr(n) ? !1 : ln(n).position === "fixed" || wd(n, t);
}
function sm(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = hd(e, []).filter((a) => an(a) && Kr(a) !== "body"), o = null;
  const i = ln(e).position === "fixed";
  let s = i ? Qn(e) : e;
  for (; an(s) && !Rr(s); ) {
    const a = ln(s), l = ya(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Oo(s) && !l && wd(e, s)) ? r = r.filter((c) => c !== s) : o = a, s = Qn(s);
  }
  return t.set(e, r), r;
}
function am(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? qi(t) ? [] : sm(t, this._c) : [].concat(n), r], a = s[0], l = s.reduce((u, c) => {
    const f = Dl(t, c, o);
    return u.top = Sr(f.top, u.top), u.right = bo(f.right, u.right), u.bottom = bo(f.bottom, u.bottom), u.left = Sr(f.left, u.left), u;
  }, Dl(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function lm(e) {
  const {
    width: t,
    height: n
  } = vd(e);
  return {
    width: t,
    height: n
  };
}
function um(e, t, n) {
  const r = xn(t), o = zn(t), i = n === "fixed", s = Co(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = pn(0);
  if (r || !r && !i)
    if ((Kr(t) !== "body" || Oo(o)) && (a = Gi(t)), r) {
      const d = Co(t, !0, i, t);
      l.x = d.x + t.clientLeft, l.y = d.y + t.clientTop;
    } else o && (l.x = _a(o));
  const u = o && !r && !i ? yd(o, a) : pn(0), c = s.left + a.scrollLeft - l.x - u.x, f = s.top + a.scrollTop - l.y - u.y;
  return {
    x: c,
    y: f,
    width: s.width,
    height: s.height
  };
}
function fs(e) {
  return ln(e).position === "static";
}
function Al(e, t) {
  if (!xn(e) || ln(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return zn(e) === n && (n = n.ownerDocument.body), n;
}
function _d(e, t) {
  const n = Zt(e);
  if (qi(e))
    return n;
  if (!xn(e)) {
    let o = Qn(e);
    for (; o && !Rr(o); ) {
      if (an(o) && !fs(o))
        return o;
      o = Qn(o);
    }
    return n;
  }
  let r = Al(e, t);
  for (; r && jp(r) && fs(r); )
    r = Al(r, t);
  return r && Rr(r) && fs(r) && !ya(r) ? n : r || Jp(e) || n;
}
const cm = async function(e) {
  const t = this.getOffsetParent || _d, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: um(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function dm(e) {
  return ln(e).direction === "rtl";
}
const fm = {
  convertOffsetParentRelativeRectToViewportRelativeRect: tm,
  getDocumentElement: zn,
  getClippingRect: am,
  getOffsetParent: _d,
  getElementRects: cm,
  getClientRects: nm,
  getDimensions: lm,
  getScale: Pr,
  isElement: an,
  isRTL: dm
}, gm = Gp, hm = Up, vm = Kp, pm = Wp, mm = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: fm,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return Fp(e, t, {
    ...o,
    platform: i
  });
}, ym = ({
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
    const E = document.querySelector(e);
    if (E)
      e = E;
    else
      throw new Error("element not found by document.querySelector('" + e + "')");
  }
  let u;
  if (typeof n == "string") {
    const E = document.querySelector(n);
    if (E)
      u = E;
    else
      throw new Error("element not found by document.querySelector('" + n + "')");
  } else
    u = n;
  let c;
  l && (c = document.createElement("div"), c.style.position = "absolute", c.style.backgroundColor = "#222", c.style.width = "8px", c.style.height = "8px", c.style.transform = "rotate(45deg)", c.style.display = "none", u.firstElementChild.before(c));
  function f() {
    mm(e, u, {
      placement: r,
      middleware: [
        gm(o),
        // 手动偏移配置
        vm(i),
        //自动翻转
        hm(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [pm({ element: c })] : []
      ]
    }).then(({ x: E, y: m, placement: C, middlewareData: p }) => {
      if (Object.assign(u.style, {
        left: `${E}px`,
        top: `${m}px`
      }), l) {
        const { x: _, y: S } = p.arrow, $ = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[C.split("-")[0]];
        Object.assign(c.style, {
          zIndex: -1,
          left: _ != null ? `${_}px` : "",
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
  function x(E) {
    E.stopPropagation(), d ? v() : g();
  }
  function b(E) {
    u.contains(E.target) || v();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((E) => {
    e.addEventListener(E, x);
  }), document.addEventListener("click", b), {
    destroy() {
      t.forEach((E) => {
        e.removeEventListener(E, x);
      }), document.removeEventListener("click", b);
    },
    hide() {
      v();
    },
    isVisible() {
      return d;
    }
  };
};
var wm = /* @__PURE__ */ ne('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function Io(e, t) {
  ue(t, !0);
  const n = w(t, "children", 7), r = w(t, "floating", 7), o = w(t, "placement", 7, "bottom");
  let i, s, a;
  Dt(() => (a = ym({
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
  var u = wm(), c = X(u), f = X(c);
  ur(f, n), Z(c), wn(c, (v) => i = v, () => i);
  var d = R(c, 2), g = X(d);
  return ur(g, r), Z(d), wn(d, (v) => s = v, () => s), Z(u), O(e, u), ce({
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
ae(Io, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Ue(e, t) {
  ue(t, !0);
  const n = w(t, "children", 7), r = w(t, "level", 7, 1), o = w(t, "mt", 7), i = w(t, "mb", 7);
  var s = et(), a = be(s);
  return m1(a, () => `h${r()}`, !1, (l, u) => {
    let c;
    $e(() => c = sn(
      l,
      c,
      {
        class: "tf-heading",
        style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
      },
      void 0,
      l.namespaceURI === Bl,
      l.nodeName.includes("-")
    ));
    var f = et(), d = be(f);
    ur(d, () => n() ?? dt), O(u, f);
  }), O(e, s), ce({
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
ae(Ue, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var _m = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const xm = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function Ui(e, t) {
  ue(t, !0), Je(e, xm);
  const n = /* @__PURE__ */ yt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  qe(e, ut(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = _m();
      O(r, i);
    },
    $$slots: { default: !0 }
  })), ce();
}
ae(Ui, {}, [], [], !0);
const bm = () => {
  const e = Ge();
  return {
    deleteNode: (n) => {
      e.nodes.update((r) => r.filter((o) => o.id !== n)), e.edges.update(
        (r) => r.filter((o) => o.source !== n && o.target !== n)
      );
    }
  };
}, Br = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, Cm = () => {
  const { nodes: e, nodeLookup: t } = Ge();
  return {
    copyNode: (r) => {
      var s;
      const i = (s = q(t).get(r)) == null ? void 0 : s.internals.userNode;
      if (i) {
        const a = Br(), l = {
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
var km = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), Em = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), $m = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), Sm = /* @__PURE__ */ ne('<div class="tf-node-toolbar svelte-44dmwv"><!> <!> <!></div>'), Pm = /* @__PURE__ */ ne('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const Nm = {
  hash: "svelte-44dmwv",
  code: ".tf-node-toolbar.svelte-44dmwv {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}"
};
function cn(e, t) {
  ue(t, !0), Je(e, Nm);
  const n = w(t, "data", 7), r = w(t, "id", 7, ""), o = w(t, "icon", 7), i = w(t, "handle", 7), s = w(t, "children", 7), a = w(t, "allowExecute", 7, !0), l = w(t, "allowCopy", 7, !0), u = w(t, "allowDelete", 7, !0), c = w(t, "showSourceHandle", 7, !0), f = w(t, "showTargetHandle", 7, !0);
  let d = n().expand ? ["key"] : [];
  const { updateNodeData: g } = At(), v = [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ], { deleteNode: x } = bm(), { copyNode: b } = Cm();
  var E = Pm(), m = be(E);
  {
    var C = (L) => {
      id(L, {
        get position() {
          return Ee.Top;
        },
        align: "end",
        children: (z, P) => {
          var V = Sm(), k = X(V);
          {
            var N = (K) => {
              qe(K, {
                class: "tf-node-toolbar-item",
                children: (ie, ee) => {
                  var W = km();
                  O(ie, W);
                },
                $$slots: { default: !0 }
              });
            };
            ke(k, (K) => {
              a() && K(N);
            });
          }
          var M = R(k, 2);
          {
            var I = (K) => {
              qe(K, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  b(r());
                },
                children: (ie, ee) => {
                  var W = Em();
                  O(ie, W);
                },
                $$slots: { default: !0 }
              });
            };
            ke(M, (K) => {
              l() && K(I);
            });
          }
          var B = R(M, 2);
          {
            var F = (K) => {
              qe(K, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  x(r());
                },
                children: (ie, ee) => {
                  var W = $m();
                  O(ie, W);
                },
                $$slots: { default: !0 }
              });
            };
            ke(B, (K) => {
              u() && K(F);
            });
          }
          Z(V), O(z, V);
        },
        $$slots: { default: !0 }
      });
    };
    ke(m, (L) => {
      (a() || l() || u()) && L(C);
    });
  }
  var p = R(m, 2), _ = R(X(p), 2), S = X(_);
  ld(S, {
    items: v,
    activeKeys: d,
    onChange: (L, z) => {
      g(r(), { expand: z == null ? void 0 : z.includes("key") });
    }
  }), Z(_), Z(p);
  var $ = R(p, 2);
  {
    var T = (L) => {
      Jn(L, {
        type: "target",
        get position() {
          return Ee.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    ke($, (L) => {
      f() && L(T);
    });
  }
  var D = R($, 2);
  {
    var H = (L) => {
      Jn(L, {
        type: "source",
        get position() {
          return Ee.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    ke(D, (L) => {
      c() && L(H);
    });
  }
  var A = R(D, 2);
  return ur(A, () => i() ?? dt), O(e, E), ce({
    get data() {
      return n();
    },
    set data(L) {
      n(L), y();
    },
    get id() {
      return r();
    },
    set id(L = "") {
      r(L), y();
    },
    get icon() {
      return o();
    },
    set icon(L) {
      o(L), y();
    },
    get handle() {
      return i();
    },
    set handle(L) {
      i(L), y();
    },
    get children() {
      return s();
    },
    set children(L) {
      s(L), y();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(L = !0) {
      a(L), y();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(L = !0) {
      l(L), y();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(L = !0) {
      u(L), y();
    },
    get showSourceHandle() {
      return c();
    },
    set showSourceHandle(L = !0) {
      c(L), y();
    },
    get showTargetHandle() {
      return f();
    },
    set showTargetHandle(L = !0) {
      f(L), y();
    }
  });
}
ae(
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
function ht() {
  return lr("svelteflow__node_id");
}
const xd = [
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
], Tm = [
  {
    value: "ref",
    label: "引用"
  },
  {
    value: "input",
    label: "固定值"
  }
];
var Mm = /* @__PURE__ */ ne('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), Hm = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), Vm = /* @__PURE__ */ ne('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const Dm = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function bd(e, t) {
  ue(t, !0), Je(e, Dm);
  const [n, r] = tt(), o = () => Q(h(l), "$node", n), i = w(t, "parameter", 7), s = w(t, "index", 7);
  let a = ht(), l = /* @__PURE__ */ Te(() => mr(a)), u = /* @__PURE__ */ Te(() => {
    var T, D;
    return {
      ...i(),
      ...(D = (T = o()) == null ? void 0 : T.data) == null ? void 0 : D.parameters[s()]
    };
  });
  const { updateNodeData: c } = At(), f = (T) => {
    const D = T.target.value;
    c(a, (H) => {
      let A = H.data.parameters;
      return A[s()].name = D, { parameters: A };
    });
  }, d = (T) => {
    const D = T.target.checked;
    c(a, (H) => {
      let A = H.data.parameters;
      return A[s()].required = D, { parameters: A };
    });
  }, g = (T) => {
    const D = T.value;
    D && c(a, (H) => {
      let A = H.data.parameters;
      return A[s()].dataType = D, { parameters: A };
    });
  };
  let v;
  const x = () => {
    c(a, (T) => {
      let D = T.data.parameters;
      return D.splice(s(), 1), { parameters: [...D] };
    }), v == null || v.hide();
  };
  var b = Vm(), E = be(b), m = X(E);
  xt(m, {
    style: "width: 100%;",
    get value() {
      return h(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: f
  }), Z(E);
  var C = R(E, 2), p = X(C);
  sd(p, {
    get checked() {
      return h(u).required;
    },
    onchange: d
  }), Z(C);
  var _ = R(C, 2), S = X(_);
  wn(
    Io(S, {
      placement: "bottom",
      floating: (D) => {
        var H = Mm(), A = X(H), L = R(X(A));
        const z = /* @__PURE__ */ Te(() => h(u).dataType ? [h(u).dataType] : ["String"]);
        _n(L, {
          items: xd,
          style: "width: 100%",
          onSelect: g,
          get value() {
            return h(z);
          }
        }), Z(A);
        var P = R(A, 2), V = R(X(P));
        Et(V, { rows: 1, style: "width: 100%;" }), Z(P);
        var k = R(P, 2), N = R(X(k));
        Et(N, { rows: 3, style: "width: 100%;" }), Z(k);
        var M = R(k, 2), I = X(M);
        qe(I, {
          onclick: x,
          children: (B, F) => {
            Ne();
            var K = Be("删除");
            O(B, K);
          },
          $$slots: { default: !0 }
        }), Z(M), Z(H), O(D, H);
      },
      children: (D, H) => {
        qe(D, {
          class: "input-btn-more",
          children: (A, L) => {
            var z = Hm();
            O(A, z);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (D) => v = D,
    () => v
  ), Z(_), O(e, b);
  var $ = ce({
    get parameter() {
      return i();
    },
    set parameter(T) {
      i(T), y();
    },
    get index() {
      return s();
    },
    set index(T) {
      s(T), y();
    }
  });
  return r(), $;
}
ae(bd, { parameter: {}, index: {} }, [], [], !0);
var Am = /* @__PURE__ */ ne('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), Lm = /* @__PURE__ */ ne('<div class="none-params svelte-3n0wca">无输入参数</div>'), Om = /* @__PURE__ */ ne('<div class="input-container svelte-3n0wca"><!> <!></div>');
const Im = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function Cd(e, t) {
  ue(t, !0), Je(e, Im);
  const [n, r] = tt(), o = () => Q(h(s), "$node", n);
  let i = ht(), s = /* @__PURE__ */ Te(() => mr(i)), a = /* @__PURE__ */ Te(() => {
    var d, g;
    return [...((g = (d = o()) == null ? void 0 : d.data) == null ? void 0 : g.parameters) || []];
  });
  var l = Om(), u = X(l);
  {
    var c = (d) => {
      var g = Am();
      Ne(4), O(d, g);
    };
    ke(u, (d) => {
      h(a).length !== 0 && d(c);
    });
  }
  var f = R(u, 2);
  Vt(
    f,
    19,
    () => h(a),
    (d) => d.id,
    (d, g, v) => {
      bd(d, {
        get parameter() {
          return h(g);
        },
        get index() {
          return h(v);
        }
      });
    },
    (d) => {
      var g = Lm();
      O(d, g);
    }
  ), Z(l), O(e, l), ce(), r();
}
ae(Cd, {}, [], [], !0);
const kd = (e) => {
  !e || e.length == 0 || e.forEach((t) => {
    t.id || (t.id = Br()), kd(t.children);
  });
}, En = () => {
  const { updateNodeData: e } = At();
  return {
    addParameter: (t, n = "parameters", r) => {
      kd(r == null ? void 0 : r.children);
      const o = {
        ...r,
        id: Br()
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
var zm = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), Rm = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Bm = /* @__PURE__ */ ne('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const Ym = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function Ed(e, t) {
  ue(t, !0), Je(e, Ym);
  const n = w(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = En();
  return cn(e, ut(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    icon: (a) => {
      var l = zm();
      O(a, l);
    },
    children: (a, l) => {
      var u = Bm(), c = be(u), f = X(c);
      Ue(f, {
        level: 3,
        children: (v, x) => {
          Ne();
          var b = Be("输入参数");
          O(v, b);
        },
        $$slots: { default: !0 }
      });
      var d = R(f, 2);
      qe(d, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o);
        },
        children: (v, x) => {
          var b = Rm();
          O(v, b);
        },
        $$slots: { default: !0 }
      }), Z(c);
      var g = R(c, 2);
      Cd(g, {}), O(a, u);
    },
    $$slots: { icon: !0, default: !0 }
  })), ce({
    get data() {
      return n();
    },
    set data(s) {
      n(s), y();
    }
  });
}
ae(Ed, { data: {} }, [], [], !0);
const $d = (e, t, n) => {
  for (let r of n)
    r.target === t && r.source && (e.push(r.source), $d(e, r.source, n));
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
}, Zm = (e = !1) => {
  const t = ht(), n = mr(t), { nodes: r, edges: o } = Ge();
  return Kn([n, r, o], ([i, s, a]) => {
    const l = [];
    if (e) {
      for (let u of s)
        if (u.parentId === i.id) {
          const c = Ll(u, u.parentId === i.id);
          c && l.push(c);
        }
    } else {
      const u = [];
      $d(u, t, a);
      for (let c of s)
        if (u.includes(c.id)) {
          const f = Ll(c, c.parentId === i.id);
          f && l.push(f);
        }
    }
    return l;
  });
};
var Xm = /* @__PURE__ */ ne('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), Fm = /* @__PURE__ */ ne('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const Wm = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Sd(e, t) {
  ue(t, !0), Je(e, Wm);
  const [n, r] = tt(), o = () => Q(h(c), "$node", n), i = () => Q(p, "$selectItems", n);
  Dt(() => {
    h(f).refType || E({ value: "ref" });
  });
  const s = w(t, "parameter", 7), a = w(t, "index", 7), l = w(t, "dataKeyName", 7);
  let u = ht(), c = /* @__PURE__ */ Te(() => mr(u)), f = /* @__PURE__ */ Te(() => {
    var V;
    return {
      ...s(),
      ...(V = o()) == null ? void 0 : V.data[l()][a()]
    };
  });
  const { updateNodeData: d } = At(), g = (V, k) => {
    d(u, (N) => {
      let M = N.data[l()];
      return M[a()] = { ...M[a()], [V]: k }, { [l()]: M };
    });
  }, v = (V) => {
    const k = V.target.value;
    g("name", k);
  }, x = (V) => {
    const k = V.target.value;
    g("value", k);
  }, b = (V) => {
    const k = V.value;
    g("ref", k);
  }, E = (V) => {
    const k = V.value;
    g("refType", k);
  };
  let m;
  const C = () => {
    d(u, (V) => {
      let k = V.data[l()];
      return k.splice(a(), 1), { [l()]: [...k] };
    }), m == null || m.hide();
  }, p = Zm();
  var _ = Fm(), S = be(_), $ = X(S);
  xt($, {
    style: "width: 100%;",
    get value() {
      return h(f).name;
    },
    placeholder: "请输入参数名称",
    oninput: v
  }), Z(S);
  var T = R(S, 2), D = X(T);
  {
    var H = (V) => {
      xt(V, {
        get value() {
          return h(f).value;
        },
        placeholder: "请输入参数值",
        oninput: x
      });
    }, A = (V) => {
      const k = /* @__PURE__ */ Te(() => [h(f).ref]);
      _n(V, {
        get items() {
          return i();
        },
        style: "width: 100%",
        defaultValue: ["ref"],
        get value() {
          return h(k);
        },
        expandAll: !0,
        onSelect: b
      });
    };
    ke(D, (V) => {
      h(f).refType === "input" ? V(H) : V(A, !1);
    });
  }
  Z(T);
  var L = R(T, 2), z = X(L);
  wn(
    Io(z, {
      placement: "bottom",
      floating: (k) => {
        var N = Xm(), M = X(N), I = R(X(M));
        const B = /* @__PURE__ */ Te(() => h(f).refType ? [h(f).refType] : []);
        _n(I, {
          items: Tm,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return h(B);
          },
          onSelect: E
        }), Z(M);
        var F = R(M, 2), K = R(X(F));
        Et(K, {
          rows: 1,
          style: "width: 100%;",
          onchange: (me) => {
            const Ce = me.target.value;
            g("defaultValue", Ce);
          }
        }), Z(F);
        var ie = R(F, 2), ee = R(X(ie));
        Et(ee, {
          rows: 3,
          style: "width: 100%;",
          onchange: (me) => {
            const Ce = me.target.value;
            g("description", Ce);
          }
        }), Z(ie);
        var W = R(ie, 2), de = X(W);
        qe(de, {
          onclick: C,
          children: (me, Ce) => {
            Ne();
            var ge = Be("删除");
            O(me, ge);
          },
          $$slots: { default: !0 }
        }), Z(W), Z(N), O(k, N);
      },
      children: (k, N) => {
        Ui(k, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (k) => m = k,
    () => m
  ), Z(L), O(e, _);
  var P = ce({
    get parameter() {
      return s();
    },
    set parameter(V) {
      s(V), y();
    },
    get index() {
      return a();
    },
    set index(V) {
      a(V), y();
    },
    get dataKeyName() {
      return l();
    },
    set dataKeyName(V) {
      l(V), y();
    }
  });
  return r(), P;
}
ae(Sd, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var Km = /* @__PURE__ */ ne('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), qm = /* @__PURE__ */ ne('<div class="none-params svelte-1sm1mgi"> </div>'), Gm = /* @__PURE__ */ ne('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Um = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Bt(e, t) {
  ue(t, !0), Je(e, Um);
  const [n, r] = tt(), o = () => Q(h(l), "$node", n), i = w(t, "noneParameterText", 7, "无输入参数"), s = w(t, "dataKeyName", 7, "parameters");
  let a = ht(), l = /* @__PURE__ */ Te(() => mr(a)), u = /* @__PURE__ */ Te(() => {
    var x;
    return [...((x = o()) == null ? void 0 : x.data[s()]) || []];
  });
  var c = Gm(), f = X(c);
  {
    var d = (x) => {
      var b = Km();
      Ne(4), O(x, b);
    };
    ke(f, (x) => {
      h(u).length !== 0 && x(d);
    });
  }
  var g = R(f, 2);
  Vt(
    g,
    19,
    () => h(u),
    (x) => x.id,
    (x, b, E) => {
      Sd(x, {
        get parameter() {
          return h(b);
        },
        get index() {
          return h(E);
        },
        get dataKeyName() {
          return s();
        }
      });
    },
    (x) => {
      var b = qm(), E = X(b, !0);
      Z(b), $e(() => Yt(E, i())), O(x, b);
    }
  ), Z(c), O(e, c);
  var v = ce({
    get noneParameterText() {
      return i();
    },
    set noneParameterText(x = "无输入参数") {
      i(x), y();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(x = "parameters") {
      s(x), y();
    }
  });
  return r(), v;
}
ae(Bt, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var jm = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), Jm = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Qm = /* @__PURE__ */ ne('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const ey = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function Pd(e, t) {
  ue(t, !0), Je(e, ey);
  const n = w(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = En();
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
      icon: (a) => {
        var l = jm();
        O(a, l);
      },
      children: (a, l) => {
        var u = Qm(), c = be(u), f = X(c);
        Ue(f, {
          level: 3,
          children: (v, x) => {
            Ne();
            var b = Be("输出参数");
            O(v, b);
          },
          $$slots: { default: !0 }
        });
        var d = R(f, 2);
        qe(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (v, x) => {
            var b = Jm();
            O(v, b);
          },
          $$slots: { default: !0 }
        }), Z(c);
        var g = R(c, 2);
        Bt(g, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs"
        }), O(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(s) {
      n(s), y();
    }
  });
}
ae(Pd, { data: {} }, [], [], !0);
const er = () => lr("tinyflow_options");
var ty = /* @__PURE__ */ _e('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), ny = /* @__PURE__ */ ne('<div class="input-more-item svelte-1cfeest"><!></div>'), ry = /* @__PURE__ */ ne('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), oy = /* @__PURE__ */ ne('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const iy = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Nd(e, t) {
  ue(t, !0), Je(e, iy);
  const [n, r] = tt(), o = () => Q(h(u), "$node", n), i = w(t, "parameter", 7), s = w(t, "position", 7), a = w(t, "dataKeyName", 7);
  let l = ht(), u = /* @__PURE__ */ Te(() => mr(l)), c = /* @__PURE__ */ Te(() => {
    var I;
    let N = (I = o()) == null ? void 0 : I.data[a()], M;
    if (N && s().length > 0) {
      let B = N;
      for (let F = 0; F < s().length; F++) {
        const K = s()[F];
        F == s().length - 1 ? M = B[K] : B = B[K].children;
      }
    }
    return { ...i(), ...M };
  });
  const { updateNodeData: f } = At(), d = (N, M) => {
    f(l, (I) => {
      const B = I.data[a()];
      if (B && s().length > 0) {
        let F = B;
        for (let K = 0; K < s().length; K++) {
          const ie = s()[K];
          K == s().length - 1 ? F[ie] = { ...F[ie], [N]: M } : F = B[ie].children;
        }
      }
      return { [a()]: B };
    });
  }, g = (N) => {
    const M = N.target.value;
    d("name", M);
  }, v = (N) => {
    const M = N.value;
    d("dataType", M);
  };
  let x;
  const b = () => {
    f(l, (N) => {
      let M = N.data[a()];
      if (M && s().length > 0) {
        let I = M;
        for (let B = 0; B < s().length; B++) {
          const F = s()[B];
          B == s().length - 1 ? I.splice(F, 1) : I = I[F].children;
        }
      }
      return { [a()]: [...M] };
    }), x == null || x.hide();
  }, E = () => {
    f(l, (N) => {
      let M = N.data[a()];
      if (M && s().length > 0) {
        let I = M;
        for (let B = 0; B < s().length; B++) {
          const F = s()[B];
          B == s().length - 1 ? I[F].children ? I[F].children.push({
            id: Br(),
            name: "newParam",
            dataType: "String"
          }) : I[F].children = [
            {
              id: Br(),
              name: "newParam",
              dataType: "String"
            }
          ] : I = I[F].children;
        }
      }
      return { [a()]: [...M] };
    });
  };
  var m = oy(), C = be(m), p = X(C);
  {
    var _ = (N) => {
      var M = et(), I = be(M);
      Vt(I, 17, s, go, (B, F) => {
        Ne();
        var K = Be(" ");
        O(B, K);
      }), O(N, M);
    };
    ke(p, (N) => {
      s().length > 1 && N(_);
    });
  }
  var S = R(p, 2);
  const $ = /* @__PURE__ */ Te(() => h(c).nameDisabled === !0);
  xt(S, {
    style: "width: 100%;",
    get value() {
      return h(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: g,
    get disabled() {
      return h($);
    }
  }), Z(C);
  var T = R(C, 2), D = X(T);
  const H = /* @__PURE__ */ Te(() => h(c).dataType ? [h(c).dataType] : []), A = /* @__PURE__ */ Te(() => h(c).dataTypeDisabled === !0);
  _n(D, {
    items: xd,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return h(H);
    },
    get disabled() {
      return h(A);
    },
    onSelect: v
  });
  var L = R(D, 2);
  {
    var z = (N) => {
      qe(N, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: E,
        children: (M, I) => {
          var B = ty();
          O(M, B);
        },
        $$slots: { default: !0 }
      });
    };
    ke(L, (N) => {
      (h(c).dataType === "Object" || h(c).dataType === "Array") && h(c).addChildDisabled !== !0 && N(z);
    });
  }
  Z(T);
  var P = R(T, 2), V = X(P);
  wn(
    Io(V, {
      placement: "bottom",
      floating: (M) => {
        var I = ry(), B = X(I), F = R(X(B));
        Et(F, {
          rows: 1,
          style: "width: 100%;",
          onchange: (de) => {
            const me = de.target.value;
            d("defaultValue", me);
          }
        }), Z(B);
        var K = R(B, 2), ie = R(X(K));
        Et(ie, {
          rows: 3,
          style: "width: 100%;",
          onchange: (de) => {
            const me = de.target.value;
            d("description", me);
          }
        }), Z(K);
        var ee = R(K, 2);
        {
          var W = (de) => {
            var me = ny(), Ce = X(me);
            qe(Ce, {
              onclick: b,
              children: (ge, Ie) => {
                Ne();
                var G = Be("删除");
                O(ge, G);
              },
              $$slots: { default: !0 }
            }), Z(me), O(de, me);
          };
          ke(ee, (de) => {
            h(c).deleteDisabled !== !0 && de(W);
          });
        }
        Z(I), O(M, I);
      },
      children: (M, I) => {
        Ui(M, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (M) => x = M,
    () => x
  ), Z(P), O(e, m);
  var k = ce({
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
  return r(), k;
}
ae(Nd, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var sy = /* @__PURE__ */ ne("<!> <!>", 1), ay = /* @__PURE__ */ ne('<div class="none-params svelte-1sm1mgi"> </div>'), ly = /* @__PURE__ */ ne('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), uy = /* @__PURE__ */ ne('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const cy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Rn(e, t) {
  ue(t, !0), Je(e, cy);
  const [n, r] = tt(), o = () => Q(h(u), "$node", n), i = (b, E = dt, m = dt) => {
    var C = et(), p = be(C);
    Vt(
      p,
      19,
      E,
      (_) => `${_.id}_${_.children ? _.children.length : 0}`,
      (_, S, $) => {
        var T = sy(), D = be(T);
        const H = /* @__PURE__ */ Te(() => [...m(), h($)]);
        Nd(D, {
          get parameter() {
            return h(S);
          },
          get position() {
            return h(H);
          },
          get dataKeyName() {
            return a();
          }
        });
        var A = R(D, 2);
        {
          var L = (z) => {
            var P = /* @__PURE__ */ pe(() => [...m(), h($)]);
            i(z, () => h(S).children, () => h(P));
          };
          ke(A, (z) => {
            h(S).children && z(L);
          });
        }
        O(_, T);
      },
      (_) => {
        var S = et(), $ = be(S);
        {
          var T = (D) => {
            var H = ay(), A = X(H, !0);
            Z(H), $e(() => Yt(A, s())), O(D, H);
          };
          ke($, (D) => {
            m().length === 0 && D(T);
          });
        }
        O(_, S);
      }
    ), O(b, C);
  }, s = w(t, "noneParameterText", 7, "无输出参数"), a = w(t, "dataKeyName", 7, "outputDefs");
  let l = ht(), u = /* @__PURE__ */ Te(() => mr(l)), c = /* @__PURE__ */ Te(() => {
    var b;
    return [...((b = o()) == null ? void 0 : b.data[a()]) || []];
  });
  var f = uy(), d = X(f);
  {
    var g = (b) => {
      var E = ly();
      Ne(4), O(b, E);
    };
    ke(d, (b) => {
      h(c).length !== 0 && b(g);
    });
  }
  var v = R(d, 2);
  i(v, () => h(c) || [], () => []), Z(f), O(e, f);
  var x = ce({
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
  return r(), x;
}
ae(Rn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var dy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), fy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), gy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), hy = /* @__PURE__ */ ne('<div class="heading svelte-wn2kra"><!> <!></div> <!> <!> <div class="setting-title svelte-wn2kra">模型</div> <div class="setting-item svelte-wn2kra"><!> <!></div> <div class="setting-title svelte-wn2kra">采样参数</div> <div class="setting-item svelte-wn2kra"><div class="slider-container svelte-wn2kra"><label class="svelte-wn2kra"> </label> <input type="range" min="0" max="1" step="0.1" class="svelte-wn2kra"></div></div> <div class="setting-item svelte-wn2kra"><div class="slider-container svelte-wn2kra"><label class="svelte-wn2kra"> </label> <input type="range" min="0" max="1" step="0.1" class="svelte-wn2kra"></div></div> <div class="setting-item svelte-wn2kra"><div class="slider-container svelte-wn2kra"><label class="svelte-wn2kra"> </label> <input type="range" min="0" max="100" step="1" class="svelte-wn2kra"></div></div> <div class="setting-title svelte-wn2kra">系统提示词</div> <div class="setting-item svelte-wn2kra"><!></div> <div class="setting-title svelte-wn2kra">用户提示词</div> <div class="setting-item svelte-wn2kra"><!></div> <div class="heading svelte-wn2kra"><!> <!></div> <!>', 1);
const vy = {
  hash: "svelte-wn2kra",
  code: `.heading.svelte-wn2kra {display:flex;margin-bottom:10px;}.setting-title.svelte-wn2kra {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-wn2kra {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}
    /* 新增样式 */.slider-container.svelte-wn2kra {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-wn2kra label:where(.svelte-wn2kra) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-wn2kra {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-wn2kra::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Td(e, t) {
  ue(t, !0), Je(e, vy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = En(), s = er();
  let a = ar(It([]));
  Dt(async () => {
    var c, f;
    const u = await ((f = (c = s.provider) == null ? void 0 : c.llm) == null ? void 0 : f.call(c));
    h(a).push(...u || []);
  });
  const { updateNodeData: l } = At();
  return cn(e, ut(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var f = dy();
        O(c, f);
      },
      children: (c, f) => {
        var d = hy(), g = be(d), v = X(g);
        Ue(v, {
          level: 3,
          children: (G, se) => {
            Ne();
            var Me = Be("输入参数");
            O(G, Me);
          },
          $$slots: { default: !0 }
        });
        var x = R(v, 2);
        qe(x, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (G, se) => {
            var Me = fy();
            O(G, Me);
          },
          $$slots: { default: !0 }
        }), Z(g);
        var b = R(g, 2);
        Bt(b, {});
        var E = R(b, 2);
        Ue(E, {
          level: 3,
          mt: "10px",
          children: (G, se) => {
            Ne();
            var Me = Be("模型设置");
            O(G, Me);
          },
          $$slots: { default: !0 }
        });
        var m = R(E, 4), C = X(m);
        const p = /* @__PURE__ */ Te(() => n().llmId ? [n().llmId] : []);
        _n(C, {
          get items() {
            return h(a);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (G) => {
            const se = G.value;
            l(o, () => ({ llmId: se }));
          },
          get value() {
            return h(p);
          }
        });
        var _ = R(C, 2);
        Ui(_, {}), Z(m);
        var S = R(m, 4), $ = X(S), T = X($), D = X(T);
        Z(T);
        var H = R(T, 2);
        so(H), Z($), Z(S);
        var A = R(S, 2), L = X(A), z = X(L), P = X(z);
        Z(z);
        var V = R(z, 2);
        so(V), Z(L), Z(A);
        var k = R(A, 2), N = X(k), M = X(N), I = X(M);
        Z(M);
        var B = R(M, 2);
        so(B), Z(N), Z(k);
        var F = R(k, 4), K = X(F);
        const ie = /* @__PURE__ */ Te(() => n().systemPrompt || "");
        Et(K, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return h(ie);
          },
          oninput: (G) => {
            l(o, { systemPrompt: G.target.value });
          }
        }), Z(F);
        var ee = R(F, 4), W = X(ee);
        const de = /* @__PURE__ */ Te(() => n().userPrompt || "");
        Et(W, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return h(de);
          },
          oninput: (G) => {
            l(o, { userPrompt: G.target.value });
          }
        }), Z(ee);
        var me = R(ee, 2), Ce = X(me);
        Ue(Ce, {
          level: 3,
          mt: "10px",
          children: (G, se) => {
            Ne();
            var Me = Be("输出参数");
            O(G, Me);
          },
          $$slots: { default: !0 }
        });
        var ge = R(Ce, 2);
        qe(ge, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (G, se) => {
            var Me = gy();
            O(G, Me);
          },
          $$slots: { default: !0 }
        }), Z(me);
        var Ie = R(me, 2);
        Rn(Ie, {}), $e(() => {
          Yt(D, `Temperature: ${n().temperature ?? 0.5}`), Qi(H, n().temperature ?? 0.5), Yt(P, `Top P: ${n().topP ?? 0.9}`), Qi(V, n().topP ?? 0.9), Yt(I, `Top K: ${n().topK ?? 50}`), Qi(B, n().topK ?? 50);
        }), Ye("mousedown", H, es(function(G) {
          Ve.call(this, t, G);
        })), Ye("input", H, (G) => l(o, { temperature: parseFloat(G.target.value) })), Ye("mousedown", V, es(function(G) {
          Ve.call(this, t, G);
        })), Ye("input", V, (G) => l(o, { topP: parseFloat(G.target.value) })), Ye("mousedown", B, es(function(G) {
          Ve.call(this, t, G);
        })), Ye("input", B, (G) => l(o, { topK: parseInt(G.target.value) })), O(c, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(u) {
      n(u), y();
    }
  });
}
ae(Td, { data: {} }, [], [], !0);
var py = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), my = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), yy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), wy = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const _y = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Md(e, t) {
  ue(t, !0), Je(e, _y);
  const n = w(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  Dt(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = ht(), { addParameter: i } = En(), { updateNodeData: s } = At(), a = [
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
      icon: (u) => {
        var c = py();
        O(u, c);
      },
      children: (u, c) => {
        var f = wy(), d = be(f), g = X(d);
        Ue(g, {
          level: 3,
          children: (A, L) => {
            Ne();
            var z = Be("输入参数");
            O(A, z);
          },
          $$slots: { default: !0 }
        });
        var v = R(g, 2);
        qe(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (A, L) => {
            var z = my();
            O(A, z);
          },
          $$slots: { default: !0 }
        }), Z(d);
        var x = R(d, 2);
        Bt(x, {});
        var b = R(x, 2);
        Ue(b, {
          level: 3,
          mt: "10px",
          children: (A, L) => {
            Ne();
            var z = Be("代码");
            O(A, z);
          },
          $$slots: { default: !0 }
        });
        var E = R(b, 4), m = X(E);
        const C = /* @__PURE__ */ Te(() => n().engine ? [n().engine] : ["qlexpress"]);
        _n(m, {
          items: a,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (A) => {
            const L = A.value;
            s(o, () => ({ engine: L }));
          },
          get value() {
            return h(C);
          }
        }), Z(E);
        var p = R(E, 4), _ = X(p);
        const S = /* @__PURE__ */ Te(() => n().code || "");
        Et(_, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (A) => {
            s(o, () => ({ code: A.target.value }));
          },
          get value() {
            return h(S);
          }
        }), Z(p);
        var $ = R(p, 2), T = X($);
        Ue(T, {
          level: 3,
          mt: "10px",
          children: (A, L) => {
            Ne();
            var z = Be("输出参数");
            O(A, z);
          },
          $$slots: { default: !0 }
        });
        var D = R(T, 2);
        qe(D, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (A, L) => {
            var z = yy();
            O(A, z);
          },
          $$slots: { default: !0 }
        }), Z($);
        var H = R($, 2);
        Rn(H, {}), O(u, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(l) {
      n(l), y();
    }
  });
}
ae(Md, { data: {} }, [], [], !0);
var xy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), by = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Cy = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const ky = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Hd(e, t) {
  ue(t, !0), Je(e, ky);
  const n = w(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = En(), { updateNodeData: s } = At();
  return Tr(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
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
      icon: (l) => {
        var u = xy();
        O(l, u);
      },
      children: (l, u) => {
        var c = Cy(), f = be(c), d = X(f);
        Ue(d, {
          level: 3,
          children: (S, $) => {
            Ne();
            var T = Be("输入参数");
            O(S, T);
          },
          $$slots: { default: !0 }
        });
        var g = R(d, 2);
        qe(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (S, $) => {
            var T = by();
            O(S, T);
          },
          $$slots: { default: !0 }
        }), Z(f);
        var v = R(f, 2);
        Bt(v, {});
        var x = R(v, 2);
        Ue(x, {
          level: 3,
          mt: "10px",
          children: (S, $) => {
            Ne();
            var T = Be("代码");
            O(S, T);
          },
          $$slots: { default: !0 }
        });
        var b = R(x, 4), E = X(b);
        const m = /* @__PURE__ */ Te(() => n().template || "");
        Et(E, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: (S) => {
            s(o, () => ({ template: S.target.value }));
          },
          get value() {
            return h(m);
          }
        }), Z(b);
        var C = R(b, 2), p = X(C);
        Ue(p, {
          level: 3,
          mt: "10px",
          children: (S, $) => {
            Ne();
            var T = Be("输出参数");
            O(S, T);
          },
          $$slots: { default: !0 }
        }), Z(C);
        var _ = R(C, 2);
        Rn(_, {}), O(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(a) {
      n(a), y();
    }
  });
}
ae(Hd, { data: {} }, [], [], !0);
var Ey = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), $y = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Sy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Py = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ny = /* @__PURE__ */ ne('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), Ty = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), My = /* @__PURE__ */ ne('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), Hy = /* @__PURE__ */ ne('<div style="width: 100%"><!></div>'), Vy = /* @__PURE__ */ ne('<div style="width: 100%"><!></div>'), Dy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ay = /* @__PURE__ */ ne('<div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1vtcqdz"><!> <!></div> <!> <div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="radio-group svelte-1vtcqdz"><label class="svelte-1vtcqdz"><!>none</label> <label class="svelte-1vtcqdz"><!>form-data</label> <label class="svelte-1vtcqdz"><!>x-www-form-urlencoded</label> <label class="svelte-1vtcqdz"><!>json</label> <label class="svelte-1vtcqdz"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1vtcqdz"><!> <!></div> <!>', 1);
const Ly = {
  hash: "svelte-1vtcqdz",
  code: ".heading.svelte-1vtcqdz {display:flex;margin-bottom:10px;}.radio-group.svelte-1vtcqdz {display:flex;margin:10px 0;}.radio-group.svelte-1vtcqdz label:where(.svelte-1vtcqdz) {display:flex;font-size:14px;}"
};
function Vd(e, t) {
  ue(t, !0), Je(e, Ly);
  const n = w(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  Dt(() => {
    n().method || a(i, () => ({ method: "get" }));
  });
  const o = [
    { value: "get", label: "GET" },
    { value: "post", label: "POST" },
    { value: "put", label: "PUT" },
    { value: "delete", label: "DELETE" },
    { value: "head", label: "HEAD" },
    { value: "patch", label: "PATCH" }
  ], i = ht(), { addParameter: s } = En(), { updateNodeData: a } = At();
  return cn(e, ut(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = Ey();
        O(u, c);
      },
      children: (u, c) => {
        var f = Ay(), d = be(f), g = X(d), v = X(g);
        const x = /* @__PURE__ */ Te(() => n().method ? [n().method] : ["get"]);
        _n(v, {
          items: o,
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (oe) => {
            const ve = oe.value;
            a(i, () => ({ method: ve }));
          },
          get value() {
            return h(x);
          }
        }), Z(g);
        var b = R(g, 2), E = X(b);
        const m = /* @__PURE__ */ Te(() => n().url || "");
        xt(E, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (oe) => {
            a(i, () => ({ url: oe.target.value }));
          },
          get value() {
            return h(m);
          }
        }), Z(b), Z(d);
        var C = R(d, 2), p = X(C);
        Ue(p, {
          level: 3,
          children: (oe, ve) => {
            Ne();
            var xe = Be("Http 头信息");
            O(oe, xe);
          },
          $$slots: { default: !0 }
        });
        var _ = R(p, 2);
        qe(_, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (oe, ve) => {
            var xe = $y();
            O(oe, xe);
          },
          $$slots: { default: !0 }
        }), Z(C);
        var S = R(C, 2);
        Bt(S, { dataKeyName: "headers" });
        var $ = R(S, 2), T = X($);
        Ue(T, {
          level: 3,
          children: (oe, ve) => {
            Ne();
            var xe = Be("参数");
            O(oe, xe);
          },
          $$slots: { default: !0 }
        });
        var D = R(T, 2);
        qe(D, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "urlParameters");
          },
          children: (oe, ve) => {
            var xe = Sy();
            O(oe, xe);
          },
          $$slots: { default: !0 }
        }), Z($);
        var H = R($, 2);
        Bt(H, { dataKeyName: "urlParameters" });
        var A = R(H, 2);
        Ue(A, {
          level: 3,
          mt: "10px",
          children: (oe, ve) => {
            Ne();
            var xe = Be("Body");
            O(oe, xe);
          },
          $$slots: { default: !0 }
        });
        var L = R(A, 2), z = X(L), P = X(z);
        const V = /* @__PURE__ */ Te(() => !n().bodyType);
        xt(P, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return h(V);
          },
          onchange: (oe) => {
            var ve;
            (ve = oe.target) != null && ve.checked && a(i, { bodyType: "" });
          }
        }), Ne(), Z(z);
        var k = R(z, 2), N = X(k);
        const M = /* @__PURE__ */ Te(() => n().bodyType === "form-data");
        xt(N, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return h(M);
          },
          onchange: (oe) => {
            var ve;
            (ve = oe.target) != null && ve.checked && a(i, { bodyType: "form-data" });
          }
        }), Ne(), Z(k);
        var I = R(k, 2), B = X(I);
        const F = /* @__PURE__ */ Te(() => n().bodyType === "x-www-form-urlencoded");
        xt(B, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return h(F);
          },
          onchange: (oe) => {
            var ve;
            (ve = oe.target) != null && ve.checked && a(i, { bodyType: "x-www-form-urlencoded" });
          }
        }), Ne(), Z(I);
        var K = R(I, 2), ie = X(K);
        const ee = /* @__PURE__ */ Te(() => n().bodyType === "json");
        xt(ie, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return h(ee);
          },
          onchange: (oe) => {
            var ve;
            (ve = oe.target) != null && ve.checked && a(i, { bodyType: "json" });
          }
        }), Ne(), Z(K);
        var W = R(K, 2), de = X(W);
        const me = /* @__PURE__ */ Te(() => n().bodyType === "raw");
        xt(de, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return h(me);
          },
          onchange: (oe) => {
            var ve;
            (ve = oe.target) != null && ve.checked && a(i, { bodyType: "raw" });
          }
        }), Ne(), Z(W), Z(L);
        var Ce = R(L, 2);
        {
          var ge = (oe) => {
            var ve = Ny(), xe = be(ve), Oe = X(xe);
            Ue(Oe, {
              level: 3,
              children: (J, ze) => {
                Ne();
                var le = Be("参数");
                O(J, le);
              },
              $$slots: { default: !0 }
            });
            var ct = R(Oe, 2);
            qe(ct, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "fromData");
              },
              children: (J, ze) => {
                var le = Py();
                O(J, le);
              },
              $$slots: { default: !0 }
            }), Z(xe);
            var lt = R(xe, 2);
            Bt(lt, { dataKeyName: "fromData" }), O(oe, ve);
          };
          ke(Ce, (oe) => {
            n().bodyType === "form-data" && oe(ge);
          });
        }
        var Ie = R(Ce, 2);
        {
          var G = (oe) => {
            var ve = My(), xe = be(ve), Oe = X(xe);
            Ue(Oe, {
              level: 3,
              children: (J, ze) => {
                Ne();
                var le = Be("参数");
                O(J, le);
              },
              $$slots: { default: !0 }
            });
            var ct = R(Oe, 2);
            qe(ct, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "fromUrlencoded");
              },
              children: (J, ze) => {
                var le = Ty();
                O(J, le);
              },
              $$slots: { default: !0 }
            }), Z(xe);
            var lt = R(xe, 2);
            Bt(lt, { dataKeyName: "fromUrlencoded" }), O(oe, ve);
          };
          ke(Ie, (oe) => {
            n().bodyType === "x-www-form-urlencoded" && oe(G);
          });
        }
        var se = R(Ie, 2);
        {
          var Me = (oe) => {
            var ve = Hy(), xe = X(ve);
            Et(xe, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Oe) => {
                a(i, { bodyJson: Oe.target.value });
              }
            }), Z(ve), O(oe, ve);
          };
          ke(se, (oe) => {
            n().bodyType === "json" && oe(Me);
          });
        }
        var Ae = R(se, 2);
        {
          var Xe = (oe) => {
            var ve = Vy(), xe = X(ve);
            Et(xe, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Oe) => {
                a(i, { bodyRaw: Oe.target.value });
              }
            }), Z(ve), O(oe, ve);
          };
          ke(Ae, (oe) => {
            n().bodyType === "raw" && oe(Xe);
          });
        }
        var te = R(Ae, 2), Fe = X(te);
        Ue(Fe, {
          level: 3,
          mt: "10px",
          children: (oe, ve) => {
            Ne();
            var xe = Be("输出参数");
            O(oe, xe);
          },
          $$slots: { default: !0 }
        });
        var Le = R(Fe, 2);
        qe(Le, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (oe, ve) => {
            var xe = Dy();
            O(oe, xe);
          },
          $$slots: { default: !0 }
        }), Z(te);
        var Qe = R(te, 2);
        Rn(Qe, {}), O(u, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(l) {
      n(l), y();
    }
  });
}
ae(Vd, { data: {} }, [], [], !0);
var Oy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), Iy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), zy = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Ry = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Dd(e, t) {
  ue(t, !0), Je(e, Ry);
  const n = w(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = En(), s = er();
  let a = ar(It([]));
  Dt(async () => {
    var c, f;
    const u = await ((f = (c = s.provider) == null ? void 0 : c.knowledge) == null ? void 0 : f.call(c));
    h(a).push(...u || []);
  });
  const { updateNodeData: l } = At();
  return Tr(() => {
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
  }), cn(e, ut(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var f = Oy();
        O(c, f);
      },
      children: (c, f) => {
        var d = zy(), g = be(d), v = X(g);
        Ue(v, {
          level: 3,
          children: (H, A) => {
            Ne();
            var L = Be("输入参数");
            O(H, L);
          },
          $$slots: { default: !0 }
        });
        var x = R(v, 2);
        qe(x, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (H, A) => {
            var L = Iy();
            O(H, L);
          },
          $$slots: { default: !0 }
        }), Z(g);
        var b = R(g, 2);
        Bt(b, {});
        var E = R(b, 2);
        Ue(E, {
          level: 3,
          mt: "10px",
          children: (H, A) => {
            Ne();
            var L = Be("知识库设置");
            O(H, L);
          },
          $$slots: { default: !0 }
        });
        var m = R(E, 4), C = X(m);
        const p = /* @__PURE__ */ Te(() => n().knowledgeId ? [n().knowledgeId] : []);
        _n(C, {
          get items() {
            return h(a);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (H) => {
            const A = H.value;
            l(o, () => ({ knowledgeId: A }));
          },
          get value() {
            return h(p);
          }
        }), Z(m);
        var _ = R(m, 4), S = X(_);
        xt(S, { placeholder: "搜索的数据条数", style: "width: 100%" }), Z(_);
        var $ = R(_, 2), T = X($);
        Ue(T, {
          level: 3,
          mt: "10px",
          children: (H, A) => {
            Ne();
            var L = Be("输出参数");
            O(H, L);
          },
          $$slots: { default: !0 }
        }), Z($);
        var D = R($, 2);
        Rn(D, {}), O(c, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(u) {
      n(u), y();
    }
  });
}
ae(Dd, { data: {} }, [], [], !0);
var By = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), Yy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Zy = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">API 服务商</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">API Key</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">其他参数</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Xy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Ad(e, t) {
  ue(t, !0), Je(e, Xy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = En(), s = er();
  let a = ar(It([]));
  Dt(async () => {
    var c;
    const u = await ((c = s.provider) == null ? void 0 : c.knowledge());
    h(a).push(...u || []);
  });
  const { updateNodeData: l } = At();
  return Tr(() => {
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
  }), cn(e, ut(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var f = By();
        O(c, f);
      },
      children: (c, f) => {
        var d = Zy(), g = be(d), v = X(g);
        Ue(v, {
          level: 3,
          children: (k, N) => {
            Ne();
            var M = Be("输入参数");
            O(k, M);
          },
          $$slots: { default: !0 }
        });
        var x = R(v, 2);
        qe(x, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (k, N) => {
            var M = Yy();
            O(k, M);
          },
          $$slots: { default: !0 }
        }), Z(g);
        var b = R(g, 2);
        Bt(b, {});
        var E = R(b, 2);
        Ue(E, {
          level: 3,
          mt: "10px",
          children: (k, N) => {
            Ne();
            var M = Be("搜索引擎设置");
            O(k, M);
          },
          $$slots: { default: !0 }
        });
        var m = R(E, 4), C = X(m);
        const p = /* @__PURE__ */ Te(() => n().knowledgeId ? [n().knowledgeId] : []);
        _n(C, {
          get items() {
            return h(a);
          },
          style: "width: 100%",
          placeholder: "请选择 API 服务商",
          onSelect: (k) => {
            const N = k.value;
            l(o, () => ({ knowledgeId: N }));
          },
          get value() {
            return h(p);
          }
        }), Z(m);
        var _ = R(m, 4), S = X(_);
        xt(S, {
          placeholder: "请输入 API Key",
          style: "width: 100%"
        }), Z(_);
        var $ = R(_, 4), T = X($);
        xt(T, { placeholder: "请输入关键字", style: "width: 100%" }), Z($);
        var D = R($, 4), H = X(D);
        xt(H, { placeholder: "搜索的数据条数", style: "width: 100%" }), Z(D);
        var A = R(D, 4), L = X(A);
        Et(L, {
          rows: 3,
          placeholder: "请输入其他参数（Property 格式）",
          style: "width: 100%"
        }), Z(A);
        var z = R(A, 2), P = X(z);
        Ue(P, {
          level: 3,
          mt: "10px",
          children: (k, N) => {
            Ne();
            var M = Be("输出参数");
            O(k, M);
          },
          $$slots: { default: !0 }
        }), Z(z);
        var V = R(z, 2);
        Rn(V, {}), O(c, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(u) {
      n(u), y();
    }
  });
}
ae(Ad, { data: {} }, [], [], !0);
var Fy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), Wy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ky = /* @__PURE__ */ ne('<div class="heading svelte-md8tgj"><!> <!></div> <!> <div class="heading svelte-md8tgj"><!></div> <!>', 1);
const qy = {
  hash: "svelte-md8tgj",
  code: ".heading.svelte-md8tgj {display:flex;margin-bottom:10px;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function Ld(e, t) {
  ue(t, !0), Je(e, qy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = En(), s = er();
  let a = ar(It([]));
  return Dt(async () => {
    var u;
    const l = await ((u = s.provider) == null ? void 0 : u.knowledge());
    h(a).push(...l || []);
  }), cn(e, ut(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var f = Fy();
        O(c, f);
      },
      handle: (c) => {
        Jn(c, {
          type: "source",
          get position() {
            return Ee.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (c, f) => {
        var d = Ky(), g = be(d), v = X(g);
        Ue(v, {
          level: 3,
          children: (p, _) => {
            Ne();
            var S = Be("循环变量");
            O(p, S);
          },
          $$slots: { default: !0 }
        });
        var x = R(v, 2);
        qe(x, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (p, _) => {
            var S = Wy();
            O(p, S);
          },
          $$slots: { default: !0 }
        }), Z(g);
        var b = R(g, 2);
        Bt(b, {});
        var E = R(b, 2), m = X(E);
        Ue(m, {
          level: 3,
          mt: "10px",
          children: (p, _) => {
            Ne();
            var S = Be("输出参数");
            O(p, S);
          },
          $$slots: { default: !0 }
        }), Z(E);
        var C = R(E, 2);
        Rn(C, {}), O(c, d);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(l) {
      n(l), y();
    }
  });
}
ae(Ld, { data: {} }, [], [], !0);
const Gy = {
  startNode: Ed,
  codeNode: Md,
  llmNode: Td,
  templateNode: Hd,
  httpNode: Vd,
  knowledgeNode: Dd,
  searchEngineNode: Ad,
  loopNode: Ld,
  endNode: Pd
};
var Uy = /* @__PURE__ */ ne("<!> ", 1);
function Os(e, t) {
  ue(t, !0);
  const n = w(t, "icon", 7), r = w(t, "title", 7), o = w(t, "type", 7), i = w(t, "description", 7), s = w(t, "extra", 7);
  return qe(e, {
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
      var c = Uy(), f = be(c);
      yu(f, n);
      var d = R(f);
      $e(() => Yt(d, ` ${r() ?? ""}`)), O(l, c);
    },
    $$slots: { default: !0 }
  }), ce({
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
ae(
  Os,
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
var jy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), Jy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), Qy = /* @__PURE__ */ ne('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Od(e, t) {
  ue(t, !0);
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
  ], i = [
    {
      label: "基础节点",
      value: "base"
    },
    {
      label: "业务工具",
      value: "tools"
    }
  ], s = [], a = er().customNodes;
  if (console.log("options", er()), console.log("customNodes", a), a)
    for (let b of Object.keys(a))
      s.push({
        icon: a[b].icon,
        title: a[b].name,
        type: b
      });
  var l = Qy(), u = X(l), c = X(u), f = X(c);
  ad(f, {
    style: "width: 100%",
    items: i,
    onChange: (b) => {
      U(n, It(b.value.toString()));
    }
  }), Z(c);
  var d = R(c, 2), g = X(d);
  Vt(g, 21, () => o, go, (b, E) => {
    Os(b, ut(() => h(E)));
  }), Z(g);
  var v = R(g, 2);
  Vt(v, 21, () => s, go, (b, E) => {
    Os(b, ut(() => h(E)));
  }), Z(v), Z(d), Z(u);
  var x = R(u, 2);
  qe(x, {
    onclick: () => {
      U(r, It(h(r) ? "" : "show"));
    },
    children: (b, E) => {
      var m = et(), C = be(m);
      {
        var p = (S) => {
          var $ = jy();
          O(S, $);
        }, _ = (S) => {
          var $ = Jy();
          O(S, $);
        };
        ke(C, (S) => {
          h(r) === "show" ? S(p) : S(_, !1);
        });
      }
      O(b, m);
    },
    $$slots: { default: !0 }
  }), Z(l), $e(() => {
    kt(l, 1, `tf-toolbar ${h(r) ?? ""}`), fe(g, "style", `display: ${(h(n) === "base" ? "flex" : "none") ?? ""}`), fe(v, "style", `display: ${(h(n) !== "base" ? "flex" : "none") ?? ""}`);
  }), O(e, l), ce();
}
ae(Od, {}, [], [], !0);
const ew = () => {
  const { nodeLookup: e } = Ge();
  return {
    getNode: (n) => {
      var o;
      return (o = q(e).get(n)) == null ? void 0 : o.internals.userNode;
    }
  };
}, tw = () => {
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
}, nw = () => {
  const { edges: e } = Ge();
  return {
    getEdgesByTarget: (n) => q(e).filter((o) => o.target === n)
  };
};
var rw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), ow = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), iw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), sw = /* @__PURE__ */ ne('<div class="heading svelte-1anjpai"><!> <!></div> <!> <div></div> <div class="heading svelte-1anjpai"><!> <!></div> <!>', 1);
const aw = {
  hash: "svelte-1anjpai",
  code: `.heading.svelte-1anjpai {display:flex;margin-bottom:10px;}

    /* 新增样式 */`
};
function Id(e, t) {
  ue(t, !0), Je(e, aw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = En(), { updateNodeData: s } = At(), l = er().customNodes[n().type];
  let u;
  function c(d, g) {
    d && d.appendChild(g);
  }
  const f = document.createElement("div");
  return f.textContent = "点击我", f.style.backgroundColor = "green", f.style.color = "white", Dt(() => {
    var d;
    (d = l.render) == null || d.call(l, f), c(u, f);
  }), cn(e, ut(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (g) => {
        var v = rw();
        O(g, v);
      },
      children: (g, v) => {
        var x = sw(), b = be(x), E = X(b);
        Ue(E, {
          level: 3,
          children: (D, H) => {
            Ne();
            var A = Be("输入参数");
            O(D, A);
          },
          $$slots: { default: !0 }
        });
        var m = R(E, 2);
        qe(m, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (D, H) => {
            var A = ow();
            O(D, A);
          },
          $$slots: { default: !0 }
        }), Z(b);
        var C = R(b, 2);
        Bt(C, {});
        var p = R(C, 2);
        wn(p, (D) => u = D, () => u);
        var _ = R(p, 2), S = X(_);
        Ue(S, {
          level: 3,
          mt: "10px",
          children: (D, H) => {
            Ne();
            var A = Be("输出参数");
            O(D, A);
          },
          $$slots: { default: !0 }
        });
        var $ = R(S, 2);
        qe($, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (D, H) => {
            var A = iw();
            O(D, A);
          },
          $$slots: { default: !0 }
        }), Z(_);
        var T = R(_, 2);
        Rn(T, {}), O(g, x);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(d) {
      n(d), y();
    }
  });
}
ae(Id, { data: {} }, [], [], !0);
var lw = /* @__PURE__ */ ne('<div class="panel-content svelte-1oe15vw"><div>边属性设置</div> <div class="setting-title svelte-1oe15vw">边条件设置</div> <div class="setting-item"><!></div></div>'), uw = /* @__PURE__ */ ne("<!> <!> <!> <!>", 1), cw = /* @__PURE__ */ ne('<div style="position: relative; height: 100%; width: 100%"><!> <!></div>');
const dw = {
  hash: "svelte-1oe15vw",
  code: ".panel-content.svelte-1oe15vw {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-1oe15vw {margin:10px 0;font-size:12px;color:#999;}"
};
function zd(e, t) {
  ue(t, !0), Je(e, dw);
  const n = w(t, "onInit", 7), r = At();
  n()(r);
  let o = ar(!1);
  const i = (_) => {
    _.preventDefault(), _.dataTransfer && (_.dataTransfer.dropEffect = "move");
  }, s = (_) => {
    var H;
    _.preventDefault();
    const S = r.screenToFlowPosition({
      x: _.clientX - 250,
      y: _.clientY - 100
    }), $ = (H = _.dataTransfer) == null ? void 0 : H.getData("application/tinyflow"), T = $ ? JSON.parse($) : {}, D = {
      id: `node_${Br()}`,
      position: S,
      data: {},
      ...T
    };
    ti.addNode(D), ti.selectNodeOnly(D.id);
  }, { getNode: a } = ew(), l = (_) => {
    const S = a(_.source), $ = a(_.target);
    if (_.sourceHandle === "loop_handle" || S.parentId) {
      const T = r.getEdges();
      for (let D of T)
        if (D.target === _.target) {
          const H = a(D.source);
          if (_.sourceHandle === "loop_handle" && H.parentId !== S.id || S.parentId && H.parentId !== S.parentId)
            return !1;
        }
    }
    return !(!S.parentId && $.parentId && $.parentId !== S.id);
  }, { ensureParentInNodesBefore: u } = tw(), c = (_, S) => {
    if (!S.isValid)
      return;
    const $ = S.toNode;
    if ($.parentId)
      return;
    const T = S.fromNode, D = S.fromHandle, H = { position: { ...$.position } };
    if (D.id === "loop_handle" ? H.parentId = T.id : T.parentId && (H.parentId = T.parentId), H.parentId) {
      const A = a(H.parentId);
      H.position = {
        x: $.position.x - A.position.x,
        y: $.position.y - A.position.y
      }, u(H.parentId, $.id), r.updateNode($.id, H);
    }
  }, { getEdgesByTarget: f } = nw(), d = (_) => {
    _.edges.forEach(($) => {
      const T = a($.target);
      if (T.parentId) {
        const D = f($.target), H = a(T.parentId);
        if (D.length === 0)
          r.updateNode(T.id, {
            parentId: void 0,
            position: {
              x: T.position.x + H.position.x,
              y: T.position.y + H.position.y
            }
          });
        else {
          let A = !1;
          for (let L = 0; L < D.length; L++) {
            const z = D[L], P = a(z.source);
            if (P.parentId || P.type === "loopNode") {
              A = !0;
              break;
            }
          }
          A || r.updateNode(T.id, {
            parentId: void 0,
            position: {
              x: T.position.x + H.position.x,
              y: T.position.y + H.position.y
            }
          });
        }
      }
    });
  }, g = (_, S) => {
    console.log("onconnectstart: ", _, S);
  }, v = (_) => {
    console.log("onconnect: ", _);
  }, x = { ...Gy }, b = er().customNodes;
  if (b)
    for (let _ of Object.keys(b))
      x[_] = Id;
  var E = cw(), m = X(E);
  Od(m, {});
  var C = R(m, 2);
  const p = /* @__PURE__ */ Te(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: wo.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  return Wc(C, ut({ nodeTypes: x }, ti, {
    class: "tinyflow-logo",
    isValidConnection: l,
    onconnectend: c,
    onconnectstart: g,
    onconnect: v,
    connectionRadius: 50,
    ondelete: d,
    onclick: (_) => {
      const S = _.target;
      S.classList.contains("svelte-flow__edge-interaction") || S.classList.contains("panel-content") || S.closest(".panel-content") || U(o, !1);
    },
    get defaultEdgeOptions() {
      return h(p);
    },
    $$events: {
      drop: s,
      dragover: i,
      edgeclick: () => {
        U(o, !0);
      }
    },
    children: (_, S) => {
      var $ = uw(), T = be($);
      nd(T, {});
      var D = R(T, 2);
      Qc(D, {});
      var H = R(D, 2);
      od(H, {});
      var A = R(H, 2);
      {
        var L = (z) => {
          Do(z, {
            children: (P, V) => {
              var k = lw(), N = R(X(k), 4), M = X(N);
              Et(M, {
                rows: 3,
                placeholder: "请输入边条件",
                style: "width: 100%",
                oninput: (I) => {
                }
              }), Z(N), Z(k), O(P, k);
            },
            $$slots: { default: !0 }
          });
        };
        ke(A, (z) => {
          h(o) && z(L);
        });
      }
      O(_, $);
    },
    $$slots: { default: !0 }
  })), Z(E), O(e, E), ce({
    get onInit() {
      return n();
    },
    set onInit(_) {
      n(_), y();
    }
  });
}
ae(zd, { onInit: {} }, [], [], !0);
function fw(e, t) {
  ue(t, !0);
  const n = w(t, "options", 7), r = w(t, "onInit", 7), { data: o } = n();
  return ti.init((o == null ? void 0 : o.nodes) || [], (o == null ? void 0 : o.edges) || []), Hr("tinyflow_options", n()), Kc(e, {
    fitView: !0,
    children: (i, s) => {
      zd(i, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), ce({
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
customElements.define("tinyflow-component", ae(fw, { options: {}, onInit: {} }, [], [], !1));
export {
  yw as Tinyflow
};
//# sourceMappingURL=index.js.map
