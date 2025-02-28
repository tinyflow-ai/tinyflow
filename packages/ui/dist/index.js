var Qd = Object.defineProperty;
var Na = (e) => {
  throw TypeError(e);
};
var ef = (e, t, n) => t in e ? Qd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var mt = (e, t, n) => ef(e, typeof t != "symbol" ? t + "" : t, n), Ji = (e, t, n) => t.has(e) || Na("Cannot " + n);
var it = (e, t, n) => (Ji(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Gn = (e, t, n) => t.has(e) ? Na("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), qr = (e, t, n, r) => (Ji(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Ma = (e, t, n) => (Ji(e, t, "access private method"), n);
const tf = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(tf);
let Ir = !1, nf = !1;
function rf() {
  Ir = !0;
}
rf();
const Is = 1, Rs = 2, Vl = 4, of = 8, sf = 16, af = 1, lf = 2, Dl = 4, uf = 8, cf = 16, Ll = 1, df = 2, zl = "[", Bs = "[!", Ys = "]", mr = {}, kt = Symbol(), Il = "http://www.w3.org/2000/svg", ds = !1, jt = 2, Rl = 4, Si = 8, Xs = 16, An = 32, Rr = 64, Qo = 128, Yt = 256, ei = 512, pt = 1024, Hn = 2048, sr = 4096, En = 8192, $i = 16384, ff = 32768, Br = 65536, gf = 1 << 17, hf = 1 << 19, Bl = 1 << 20, Rn = Symbol("$state"), Ws = Symbol("legacy props"), vf = Symbol("");
var _o = Array.isArray, pf = Array.prototype.indexOf, Fs = Array.from, ti = Object.keys, no = Object.defineProperty, Sn = Object.getOwnPropertyDescriptor, Yl = Object.getOwnPropertyDescriptors, mf = Object.prototype, yf = Array.prototype, Ks = Object.getPrototypeOf;
function Ur(e) {
  return typeof e == "function";
}
const ft = () => {
};
function wf(e) {
  return e();
}
function ro(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const _f = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let ni = !1, ri = !1, fs = [], gs = [];
function Xl() {
  ni = !1;
  const e = fs.slice();
  fs = [], ro(e);
}
function Wl() {
  ri = !1;
  const e = gs.slice();
  gs = [], ro(e);
}
function xo(e) {
  ni || (ni = !0, queueMicrotask(Xl)), fs.push(e);
}
function xf(e) {
  ri || (ri = !0, _f(Wl)), gs.push(e);
}
function bf() {
  ni && Xl(), ri && Wl();
}
function Fl(e) {
  return e === this.v;
}
function Zs(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function qs(e) {
  return !Zs(e, this.v);
}
function Cf(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function kf() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ef(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Sf() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function $f() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Pf(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Nf() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Mf() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Tf() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Af() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function St(e, t) {
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
function hs(e) {
  return /* @__PURE__ */ Kl(St(e));
}
// @__NO_SIDE_EFFECTS__
function bo(e, t = !1) {
  var r;
  const n = St(e);
  return t || (n.equals = qs), Ir && Be !== null && Be.l !== null && ((r = Be.l).s ?? (r.s = [])).push(n), n;
}
function te(e, t = !1) {
  return /* @__PURE__ */ Kl(/* @__PURE__ */ bo(e, t));
}
// @__NO_SIDE_EFFECTS__
function Kl(e) {
  return Ze !== null && !an && Ze.f & jt && (ln === null ? Df([e]) : ln.push(e)), e;
}
function G(e, t) {
  return Ze !== null && !an && Hi() && Ze.f & (jt | Xs) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (ln === null || !ln.includes(e)) && Af(), vs(e, t);
}
function vs(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = tu(), Zl(e, Hn), Hi() && We !== null && We.f & pt && !(We.f & (An | Rr)) && (_n === null ? Lf([e]) : _n.push(e))), t;
}
function Ta(e, t = 1) {
  var n = h(e), r = t === 1 ? n++ : n--;
  return G(e, n), r;
}
function Zl(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Hi(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      a & Hn || !r && s === We || (Jt(s, t), a & (pt | Yt) && (a & jt ? Zl(
        /** @type {Derived} */
        s,
        sr
      ) : Ti(
        /** @type {Effect} */
        s
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Oe(e) {
  var t = jt | Hn, n = Ze !== null && Ze.f & jt ? (
    /** @type {Derived} */
    Ze
  ) : null;
  return We === null || n !== null && n.f & Yt ? t |= Yt : We.f |= Bl, {
    ctx: Be,
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
  const t = /* @__PURE__ */ Oe(e);
  return t.equals = qs, t;
}
function ql(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Xt(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Hf(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & jt))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Of(e) {
  var t, n = We;
  Fn(Hf(e));
  try {
    ql(e), t = ru(e);
  } finally {
    Fn(n);
  }
  return t;
}
function Ul(e) {
  var t = Of(e), n = (zn || e.f & Yt) && e.deps !== null ? sr : pt;
  Jt(e, n), e.equals(t) || (e.v = t, e.wv = tu());
}
function Pi(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let ke = !1;
function At(e) {
  ke = e;
}
let Ae;
function xt(e) {
  if (e === null)
    throw Pi(), mr;
  return Ae = e;
}
function dn() {
  return xt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ hn(Ae)
  );
}
function K(e) {
  if (ke) {
    if (/* @__PURE__ */ hn(Ae) !== null)
      throw Pi(), mr;
    Ae = e;
  }
}
function ze(e = 1) {
  if (ke) {
    for (var t = e, n = Ae; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ hn(n);
    Ae = n;
  }
}
function ps() {
  for (var e = 0, t = Ae; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === Ys) {
        if (e === 0) return t;
        e -= 1;
      } else (n === zl || n === Bs) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ hn(t)
    );
    t.remove(), t = r;
  }
}
function sn(e, t = null, n) {
  if (typeof e != "object" || e === null || Rn in e)
    return e;
  const r = Ks(e);
  if (r !== mf && r !== yf)
    return e;
  var o = /* @__PURE__ */ new Map(), i = _o(e), s = St(0);
  i && o.set("length", St(
    /** @type {any[]} */
    e.length
  ));
  var a;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, u, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Nf();
        var f = o.get(u);
        return f === void 0 ? (f = St(c.value), o.set(u, f)) : G(f, sn(c.value, a)), !0;
      },
      deleteProperty(l, u) {
        var c = o.get(u);
        if (c === void 0)
          u in l && o.set(u, St(kt));
        else {
          if (i && typeof u == "string") {
            var f = (
              /** @type {Source<number>} */
              o.get("length")
            ), d = Number(u);
            Number.isInteger(d) && d < f.v && G(f, d);
          }
          G(c, kt), Aa(s);
        }
        return !0;
      },
      get(l, u, c) {
        var v;
        if (u === Rn)
          return e;
        var f = o.get(u), d = u in l;
        if (f === void 0 && (!d || (v = Sn(l, u)) != null && v.writable) && (f = St(sn(d ? l[u] : kt, a)), o.set(u, f)), f !== void 0) {
          var g = h(f);
          return g === kt ? void 0 : g;
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
          if (d !== void 0 && g !== kt)
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
        if (u === Rn)
          return !0;
        var c = o.get(u), f = c !== void 0 && c.v !== kt || Reflect.has(l, u);
        if (c !== void 0 || We !== null && (!f || (g = Sn(l, u)) != null && g.writable)) {
          c === void 0 && (c = St(f ? sn(l[u], a) : kt), o.set(u, c));
          var d = h(c);
          if (d === kt)
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
            C !== void 0 ? G(C, kt) : v in l && (C = St(kt), o.set(v + "", C));
          }
        d === void 0 ? (!g || (x = Sn(l, u)) != null && x.writable) && (d = St(void 0), G(d, sn(c, a)), o.set(u, d)) : (g = d.v !== kt, G(d, sn(c, a)));
        var _ = Reflect.getOwnPropertyDescriptor(l, u);
        if (_ != null && _.set && _.set.call(f, c), !g) {
          if (i && typeof u == "string") {
            var S = (
              /** @type {Source<number>} */
              o.get("length")
            ), p = Number(u);
            Number.isInteger(p) && p >= S.v && G(S, p + 1);
          }
          Aa(s);
        }
        return !0;
      },
      ownKeys(l) {
        h(s);
        var u = Reflect.ownKeys(l).filter((d) => {
          var g = o.get(d);
          return g === void 0 || g.v !== kt;
        });
        for (var [c, f] of o)
          f.v !== kt && !(c in l) && u.push(c);
        return u;
      },
      setPrototypeOf() {
        Mf();
      }
    }
  );
}
function Aa(e, t = 1) {
  G(e, e.v + t);
}
var Et, Gl, jl, Jl;
function ms() {
  if (Et === void 0) {
    Et = window, Gl = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    jl = Sn(t, "firstChild").get, Jl = Sn(t, "nextSibling").get, e.__click = void 0, e.__className = "", e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Pn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function wt(e) {
  return jl.call(e);
}
// @__NO_SIDE_EFFECTS__
function hn(e) {
  return Jl.call(e);
}
function Z(e, t) {
  if (!ke)
    return /* @__PURE__ */ wt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ wt(Ae)
  );
  if (n === null)
    n = Ae.appendChild(Pn());
  else if (t && n.nodeType !== 3) {
    var r = Pn();
    return n == null || n.before(r), xt(r), r;
  }
  return xt(n), n;
}
function _e(e, t) {
  if (!ke) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ wt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ hn(n) : n;
  }
  return Ae;
}
function Y(e, t = 1, n = !1) {
  let r = ke ? Ae : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ hn(r);
  if (!ke)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var s = Pn();
    return r === null ? o == null || o.after(s) : r.before(s), xt(s), s;
  }
  return xt(r), /** @type {TemplateNode} */
  r;
}
function Us(e) {
  e.textContent = "";
}
const Ql = 0, Vf = 1;
let Fo = !1, Ko = Ql, oo = !1, io = null, yr = !1, Gs = !1;
function Ha(e) {
  yr = e;
}
function Oa(e) {
  Gs = e;
}
let jn = [], wr = 0;
let Ze = null, an = !1;
function Wn(e) {
  Ze = e;
}
let We = null;
function Fn(e) {
  We = e;
}
let ln = null;
function Df(e) {
  ln = e;
}
let yt = null, Mt = 0, _n = null;
function Lf(e) {
  _n = e;
}
let eu = 1, oi = 0, zn = !1;
function tu() {
  return ++eu;
}
function Yr(e) {
  var f;
  var t = e.f;
  if (t & Hn)
    return !0;
  if (t & sr) {
    var n = e.deps, r = (t & Yt) !== 0;
    if (n !== null) {
      var o, i, s = (t & ei) !== 0, a = r && We !== null && !zn, l = n.length;
      if (s || a) {
        var u = (
          /** @type {Derived} */
          e
        ), c = u.parent;
        for (o = 0; o < l; o++)
          i = n[o], (s || !((f = i == null ? void 0 : i.reactions) != null && f.includes(u))) && (i.reactions ?? (i.reactions = [])).push(u);
        s && (u.f ^= ei), a && c !== null && !(c.f & Yt) && (u.f ^= Yt);
      }
      for (o = 0; o < l; o++)
        if (i = n[o], Yr(
          /** @type {Derived} */
          i
        ) && Ul(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!r || We !== null && !zn) && Jt(e, pt);
  }
  return !1;
}
function zf(e, t) {
  for (var n = t; n !== null; ) {
    if (n.f & Qo)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= Qo;
      }
    n = n.parent;
  }
  throw Fo = !1, e;
}
function If(e) {
  return (e.f & $i) === 0 && (e.parent === null || (e.parent.f & Qo) === 0);
}
function Ni(e, t, n, r) {
  if (Fo) {
    if (n === null && (Fo = !1), If(t))
      throw e;
    return;
  }
  n !== null && (Fo = !0);
  {
    zf(e, t);
    return;
  }
}
function nu(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      i.f & jt ? nu(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? Jt(i, Hn) : i.f & pt && Jt(i, sr), Ti(
        /** @type {Effect} */
        i
      ));
    }
}
function ru(e) {
  var g;
  var t = yt, n = Mt, r = _n, o = Ze, i = zn, s = ln, a = Be, l = an, u = e.f;
  yt = /** @type {null | Value[]} */
  null, Mt = 0, _n = null, Ze = u & (An | Rr) ? null : e, zn = (u & Yt) !== 0 && (!yr || o === null || l), ln = null, Va(e.ctx), an = !1, oi++;
  try {
    var c = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (yt !== null) {
      var d;
      if (ii(e, Mt), f !== null && Mt > 0)
        for (f.length = Mt + yt.length, d = 0; d < yt.length; d++)
          f[Mt + d] = yt[d];
      else
        e.deps = f = yt;
      if (!zn)
        for (d = Mt; d < f.length; d++)
          ((g = f[d]).reactions ?? (g.reactions = [])).push(e);
    } else f !== null && Mt < f.length && (ii(e, Mt), f.length = Mt);
    if (Hi() && _n !== null && !an && f !== null && !(e.f & (jt | sr | Hn)))
      for (d = 0; d < /** @type {Source[]} */
      _n.length; d++)
        nu(
          _n[d],
          /** @type {Effect} */
          e
        );
    return o !== null && oi++, c;
  } finally {
    yt = t, Mt = n, _n = r, Ze = o, zn = i, ln = s, Va(a), an = l;
  }
}
function Rf(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = pf.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && t.f & jt && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (yt === null || !yt.includes(t)) && (Jt(t, sr), t.f & (Yt | ei) || (t.f ^= ei), ql(
    /** @type {Derived} **/
    t
  ), ii(
    /** @type {Derived} **/
    t,
    0
  ));
}
function ii(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Rf(e, n[r]);
}
function Mi(e) {
  var t = e.f;
  if (!(t & $i)) {
    Jt(e, pt);
    var n = We, r = Be;
    We = e;
    try {
      t & Xs ? Uf(e) : uu(e), lu(e);
      var o = ru(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = eu;
      var i = e.deps, s;
      ds && nf && e.f & Hn;
    } catch (a) {
      Ni(a, e, n, r || e.ctx);
    } finally {
      We = n;
    }
  }
}
function ou() {
  if (wr > 1e3) {
    wr = 0;
    try {
      Sf();
    } catch (e) {
      if (io !== null)
        Ni(e, io, null);
      else
        throw e;
    }
  }
  wr++;
}
function iu(e) {
  var t = e.length;
  if (t !== 0) {
    ou();
    var n = yr;
    yr = !0;
    try {
      for (var r = 0; r < t; r++) {
        var o = e[r];
        o.f & pt || (o.f ^= pt);
        var i = Xf(o);
        Bf(i);
      }
    } finally {
      yr = n;
    }
  }
}
function Bf(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if (!(r.f & ($i | En)))
        try {
          Yr(r) && (Mi(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? cu(r) : r.fn = null));
        } catch (o) {
          Ni(o, r, null, r.ctx);
        }
    }
}
function Yf() {
  if (oo = !1, wr > 1001)
    return;
  const e = jn;
  jn = [], iu(e), oo || (wr = 0, io = null);
}
function Ti(e) {
  Ko === Ql && (oo || (oo = !0, queueMicrotask(Yf))), io = e;
  for (var t = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (Rr | An)) {
      if (!(n & pt)) return;
      t.f ^= pt;
    }
  }
  jn.push(t);
}
function Xf(e) {
  var t = [], n = e.first;
  e: for (; n !== null; ) {
    var r = n.f, o = (r & An) !== 0, i = o && (r & pt) !== 0, s = n.next;
    if (!i && !(r & En)) {
      if (r & Rl)
        t.push(n);
      else if (o)
        n.f ^= pt;
      else {
        var a = Ze;
        try {
          Ze = n, Yr(n) && Mi(n);
        } catch (c) {
          Ni(c, n, null, n.ctx);
        } finally {
          Ze = a;
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
  var t = Ko, n = jn;
  try {
    ou();
    const o = [];
    Ko = Vf, jn = o, oo = !1, iu(n);
    var r = e == null ? void 0 : e();
    return bf(), (jn.length > 0 || o.length > 0) && y(), wr = 0, io = null, r;
  } finally {
    Ko = t, jn = n;
  }
}
function h(e) {
  var t = e.f, n = (t & jt) !== 0;
  if (Ze !== null && !an) {
    ln !== null && ln.includes(e) && Tf();
    var r = Ze.deps;
    e.rv < oi && (e.rv = oi, yt === null && r !== null && r[Mt] === e ? Mt++ : yt === null ? yt = [e] : (!zn || !yt.includes(e)) && yt.push(e));
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), i = o.parent;
    i !== null && !(i.f & Yt) && (o.f ^= Yt);
  }
  return n && (o = /** @type {Derived} */
  e, Yr(o) && Ul(o)), e.v;
}
function fn(e) {
  var t = an;
  try {
    return an = !0, e();
  } finally {
    an = t;
  }
}
const Wf = -7169;
function Jt(e, t) {
  e.f = e.f & Wf | t;
}
function U(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Rn in e)
      ys(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Rn in n && ys(n);
      }
  }
}
function ys(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        ys(e[r], t);
      } catch {
      }
    const n = Ks(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Yl(n);
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
  We === null && Ze === null && Ef(), Ze !== null && Ze.f & Yt && We === null && kf(), Gs && Cf();
}
function Ff(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function ar(e, t, n, r = !0) {
  var o = (e & Rr) !== 0, i = We, s = {
    ctx: Be,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Hn,
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
    var a = yr;
    try {
      Ha(!0), Mi(s), s.f |= ff;
    } catch (c) {
      throw Xt(s), c;
    } finally {
      Ha(a);
    }
  } else t !== null && Ti(s);
  var l = n && s.deps === null && s.first === null && s.nodes_start === null && s.teardown === null && (s.f & (Bl | Qo)) === 0;
  if (!l && !o && r && (i !== null && Ff(s, i), Ze !== null && Ze.f & jt)) {
    var u = (
      /** @type {Derived} */
      Ze
    );
    (u.effects ?? (u.effects = [])).push(s);
  }
  return s;
}
function au(e) {
  const t = ar(Si, null, !1);
  return Jt(t, pt), t.teardown = e, t;
}
function si(e) {
  su();
  var t = We !== null && (We.f & An) !== 0 && Be !== null && !Be.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      Be
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: We,
      reaction: Ze
    });
  } else {
    var r = Tt(e);
    return r;
  }
}
function Kf(e) {
  return su(), Xr(e);
}
function Zf(e) {
  const t = ar(Rr, e, !0);
  return () => {
    Xt(t);
  };
}
function qf(e) {
  const t = ar(Rr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Pr(t, () => {
      Xt(t), r(void 0);
    }) : (Xt(t), r(void 0));
  });
}
function Tt(e) {
  return ar(Rl, e, !1);
}
function ue(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    Be
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = Xr(() => {
    e(), !r.ran && (r.ran = !0, G(n.l.r2, !0), fn(t));
  });
}
function gt() {
  var e = (
    /** @type {ComponentContextLegacy} */
    Be
  );
  Xr(() => {
    if (h(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        n.f & pt && Jt(n, sr), Yr(n) && Mi(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function Xr(e) {
  return ar(Si, e, !0);
}
function $e(e, t = [], n = Oe) {
  const r = t.map(n);
  return lr(() => e(...r.map(h)));
}
function lr(e, t = 0) {
  return ar(Si | Xs | t, e, !0);
}
function Nn(e, t = !0) {
  return ar(Si | An, e, !0, t);
}
function lu(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Gs, r = Ze;
    Oa(!0), Wn(null);
    try {
      t.call(null);
    } finally {
      Oa(n), Wn(r);
    }
  }
}
function uu(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    Xt(n, t), n = r;
  }
}
function Uf(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & An || Xt(t), t = n;
  }
}
function Xt(e, t = !0) {
  var n = !1;
  if ((t || e.f & hf) && e.nodes_start !== null) {
    for (var r = e.nodes_start, o = e.nodes_end; r !== null; ) {
      var i = r === o ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ hn(r)
      );
      r.remove(), r = i;
    }
    n = !0;
  }
  uu(e, t && !n), ii(e, 0), Jt(e, $i);
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
function Pr(e, t) {
  var n = [];
  js(e, n, !0), du(n, () => {
    Xt(e), t && t();
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
  if (!(e.f & En)) {
    if (e.f ^= En, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & Br) !== 0 || (r.f & An) !== 0;
      js(r, t, i ? n : !1), r = o;
    }
  }
}
function so(e) {
  fu(e, !0);
}
function fu(e, t) {
  if (e.f & En) {
    e.f ^= En, e.f & pt || (e.f ^= pt), Yr(e) && (Jt(e, Hn), Ti(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Br) !== 0 || (n.f & An) !== 0;
      fu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
function Ai(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let Be = null;
function Va(e) {
  Be = e;
}
function er(e) {
  return (
    /** @type {T} */
    Js().get(e)
  );
}
function Nr(e, t) {
  return Js().set(e, t), t;
}
function Gf(e) {
  return Js().has(e);
}
function he(e, t = !1, n) {
  Be = {
    p: Be,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  }, Ir && !t && (Be.l = {
    s: null,
    u: null,
    r1: [],
    r2: St(!1)
  });
}
function ve(e) {
  const t = Be;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var n = We, r = Ze;
      t.e = null;
      try {
        for (var o = 0; o < s.length; o++) {
          var i = s[o];
          Fn(i.effect), Wn(i.reaction), Tt(i.fn);
        }
      } finally {
        Fn(n), Wn(r);
      }
    }
    Be = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Hi() {
  return !Ir || Be !== null && Be.l === null;
}
function Js(e) {
  return Be === null && Ai(), Be.c ?? (Be.c = new Map(jf(Be) || void 0));
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
function eg(e) {
  return Qf.includes(e);
}
const tg = {
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
function ng(e) {
  return e = e.toLowerCase(), tg[e] ?? e;
}
const rg = ["touchstart", "touchmove"];
function og(e) {
  return rg.includes(e);
}
const ig = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function sg(e) {
  return ig.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function ag(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, xo(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function lg(e) {
  ke && /* @__PURE__ */ wt(e) !== null && Us(e);
}
let Da = !1;
function ug() {
  Da || (Da = !0, document.addEventListener(
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
function cg(e) {
  var t = Ze, n = We;
  Wn(null), Fn(null);
  try {
    return e();
  } finally {
    Wn(t), Fn(n);
  }
}
const gu = /* @__PURE__ */ new Set(), ws = /* @__PURE__ */ new Set();
function hu(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || Jr.call(t, i), !i.cancelBubble)
      return cg(() => n == null ? void 0 : n.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? xo(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function qe(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = hu(e, t, n, i);
  (t === document.body || t === window || t === document) && au(() => {
    t.removeEventListener(e, s, i);
  });
}
function Oi(e) {
  for (var t = 0; t < e.length; t++)
    gu.add(e[t]);
  for (var n of ws)
    n(e);
}
function Jr(e) {
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
    no(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var c = Ze, f = We;
    Wn(null), Fn(null);
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
            if (_o(C)) {
              var [_, ...S] = C;
              _.apply(i, [e, ...S]);
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
      e.__root = t, delete e.currentTarget, Wn(c), Fn(f);
    }
  }
}
function Qs(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Pt(e, t) {
  var n = (
    /** @type {Effect} */
    We
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function re(e, t) {
  var n = (t & Ll) !== 0, r = (t & df) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (ke)
      return Pt(Ae, null), Ae;
    o === void 0 && (o = Qs(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ wt(o)));
    var s = (
      /** @type {TemplateNode} */
      r || Gl ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ wt(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Pt(a, l);
    } else
      Pt(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Se(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & Ll) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (ke)
      return Pt(Ae, null), Ae;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Qs(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ wt(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ wt(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ wt(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ wt(l);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ wt(u)
      ), f = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Pt(c, f);
    } else
      Pt(u, u);
    return u;
  };
}
function je(e = "") {
  if (!ke) {
    var t = Pn(e + "");
    return Pt(t, t), t;
  }
  var n = Ae;
  return n.nodeType !== 3 && (n.before(n = Pn()), xt(n)), Pt(n, n), n;
}
function Ue() {
  if (ke)
    return Pt(Ae, null), Ae;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Pn();
  return e.append(t, n), Pt(t, n), e;
}
function D(e, t) {
  if (ke) {
    We.nodes_end = Ae, dn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function vn(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function vu(e, t) {
  return pu(e, t);
}
function dg(e, t) {
  ms(), t.intro = t.intro ?? !1;
  const n = t.target, r = ke, o = Ae;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ wt(n)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== zl); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ hn(i);
    if (!i)
      throw mr;
    At(!0), xt(
      /** @type {Comment} */
      i
    ), dn();
    const s = pu(e, { ...t, anchor: i });
    if (Ae === null || Ae.nodeType !== 8 || /** @type {Comment} */
    Ae.data !== Ys)
      throw Pi(), mr;
    return At(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === mr)
      return t.recover === !1 && $f(), ms(), Us(n), At(!1), vu(e, t);
    throw s;
  } finally {
    At(r), xt(o);
  }
}
const hr = /* @__PURE__ */ new Map();
function pu(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  ms();
  var a = /* @__PURE__ */ new Set(), l = (f) => {
    for (var d = 0; d < f.length; d++) {
      var g = f[d];
      if (!a.has(g)) {
        a.add(g);
        var v = og(g);
        t.addEventListener(g, Jr, { passive: v });
        var C = hr.get(g);
        C === void 0 ? (document.addEventListener(g, Jr, { passive: v }), hr.set(g, 1)) : hr.set(g, C + 1);
      }
    }
  };
  l(Fs(gu)), ws.add(l);
  var u = void 0, c = qf(() => {
    var f = n ?? t.appendChild(Pn());
    return Nn(() => {
      if (i) {
        he({});
        var d = (
          /** @type {ComponentContext} */
          Be
        );
        d.c = i;
      }
      o && (r.$$events = o), ke && Pt(
        /** @type {TemplateNode} */
        f,
        null
      ), u = e(f, r) || {}, ke && (We.nodes_end = Ae), i && ve();
    }), () => {
      var v;
      for (var d of a) {
        t.removeEventListener(d, Jr);
        var g = (
          /** @type {number} */
          hr.get(d)
        );
        --g === 0 ? (document.removeEventListener(d, Jr), hr.delete(d)) : hr.set(d, g);
      }
      ws.delete(l), f !== n && ((v = f.parentNode) == null || v.removeChild(f));
    };
  });
  return _s.set(u, c), u;
}
let _s = /* @__PURE__ */ new WeakMap();
function fg(e, t) {
  const n = _s.get(e);
  return n ? (_s.delete(e), n(t)) : Promise.resolve();
}
function Ce(e, t, n = !1) {
  ke && dn();
  var r = e, o = null, i = null, s = kt, a = n ? Br : 0, l = !1;
  const u = (f, d = !0) => {
    l = !0, c(d, f);
  }, c = (f, d) => {
    if (s === (s = f)) return;
    let g = !1;
    if (ke) {
      const v = (
        /** @type {Comment} */
        r.data === Bs
      );
      !!s === v && (r = ps(), xt(r), At(!1), g = !0);
    }
    s ? (o ? so(o) : d && (o = Nn(() => d(r))), i && Pr(i, () => {
      i = null;
    })) : (i ? so(i) : d && (i = Nn(() => d(r))), o && Pr(o, () => {
      o = null;
    })), g && At(!0);
  };
  lr(() => {
    l = !1, t(u), l || c(null, null);
  }, a), ke && (r = Ae);
}
function Vi(e, t) {
  return t;
}
function gg(e, t, n, r) {
  for (var o = [], i = t.length, s = 0; s < i; s++)
    js(t[s].e, o, !0);
  var a = i > 0 && o.length === 0 && n !== null;
  if (a) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Us(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), Vn(e, t[0].prev, t[i - 1].next);
  }
  du(o, () => {
    for (var u = 0; u < i; u++) {
      var c = t[u];
      a || (r.delete(c.k), Vn(e, c.prev, c.next)), Xt(c.e, !a);
    }
  });
}
function Ot(e, t, n, r, o, i = null) {
  var s = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & Vl) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    s = ke ? xt(
      /** @type {Comment | Text} */
      /* @__PURE__ */ wt(u)
    ) : u.appendChild(Pn());
  }
  ke && dn();
  var c = null, f = !1, d = /* @__PURE__ */ pe(() => {
    var g = n();
    return _o(g) ? g : g == null ? [] : Fs(g);
  });
  lr(() => {
    var g = h(d), v = g.length;
    if (f && v === 0)
      return;
    f = v === 0;
    let C = !1;
    if (ke) {
      var _ = (
        /** @type {Comment} */
        s.data === Bs
      );
      _ !== (v === 0) && (s = ps(), xt(s), At(!1), C = !0);
    }
    if (ke) {
      for (var S = null, p, x = 0; x < v; x++) {
        if (Ae.nodeType === 8 && /** @type {Comment} */
        Ae.data === Ys) {
          s = /** @type {Comment} */
          Ae, C = !0, At(!1);
          break;
        }
        var m = g[x], k = r(m, x);
        p = mu(
          Ae,
          a,
          S,
          null,
          m,
          k,
          x,
          o,
          t,
          n
        ), a.items.set(k, p), S = p;
      }
      v > 0 && xt(ps());
    }
    ke || hg(g, a, s, o, t, r, n), i !== null && (v === 0 ? c ? so(c) : c = Nn(() => i(s)) : c !== null && Pr(c, () => {
      c = null;
    })), C && At(!0), h(d);
  }), ke && (s = Ae);
}
function hg(e, t, n, r, o, i, s) {
  var E, M, b, $;
  var a = (o & of) !== 0, l = (o & (Is | Rs)) !== 0, u = e.length, c = t.items, f = t.first, d = f, g, v = null, C, _ = [], S = [], p, x, m, k;
  if (a)
    for (k = 0; k < u; k += 1)
      p = e[k], x = i(p, k), m = c.get(x), m !== void 0 && ((E = m.a) == null || E.measure(), (C ?? (C = /* @__PURE__ */ new Set())).add(m));
  for (k = 0; k < u; k += 1) {
    if (p = e[k], x = i(p, k), m = c.get(x), m === void 0) {
      var P = d ? (
        /** @type {TemplateNode} */
        d.e.nodes_start
      ) : n;
      v = mu(
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
      ), c.set(x, v), _ = [], S = [], d = v.next;
      continue;
    }
    if (l && vg(m, p, k, o), m.e.f & En && (so(m.e), a && ((M = m.a) == null || M.unfix(), (C ?? (C = /* @__PURE__ */ new Set())).delete(m))), m !== d) {
      if (g !== void 0 && g.has(m)) {
        if (_.length < S.length) {
          var N = S[0], T;
          v = N.prev;
          var V = _[0], H = _[_.length - 1];
          for (T = 0; T < _.length; T += 1)
            La(_[T], N, n);
          for (T = 0; T < S.length; T += 1)
            g.delete(S[T]);
          Vn(t, V.prev, H.next), Vn(t, v, V), Vn(t, H, N), d = N, v = H, k -= 1, _ = [], S = [];
        } else
          g.delete(m), La(m, d, n), Vn(t, m.prev, m.next), Vn(t, m, v === null ? t.first : v.next), Vn(t, v, m), v = m;
        continue;
      }
      for (_ = [], S = []; d !== null && d.k !== x; )
        d.e.f & En || (g ?? (g = /* @__PURE__ */ new Set())).add(d), S.push(d), d = d.next;
      if (d === null)
        continue;
      m = d;
    }
    _.push(m), v = m, d = m.next;
  }
  if (d !== null || g !== void 0) {
    for (var L = g === void 0 ? [] : Fs(g); d !== null; )
      d.e.f & En || L.push(d), d = d.next;
    var z = L.length;
    if (z > 0) {
      var R = o & Vl && u === 0 ? n : null;
      if (a) {
        for (k = 0; k < z; k += 1)
          (b = L[k].a) == null || b.measure();
        for (k = 0; k < z; k += 1)
          ($ = L[k].a) == null || $.fix();
      }
      gg(t, L, R, c);
    }
  }
  a && xo(() => {
    var A;
    if (C !== void 0)
      for (m of C)
        (A = m.a) == null || A.apply();
  }), We.first = t.first && t.first.e, We.last = v && v.e;
}
function vg(e, t, n, r) {
  r & Is && vs(e.v, t), r & Rs ? vs(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function mu(e, t, n, r, o, i, s, a, l, u) {
  var c = (l & Is) !== 0, f = (l & sf) === 0, d = c ? f ? /* @__PURE__ */ bo(o) : St(o) : o, g = l & Rs ? St(s) : s, v = {
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
    return v.e = Nn(() => a(e, d, g, u), ke), v.e.prev = n && n.e, v.e.next = r && r.e, n === null ? t.first = v : (n.next = v, n.e.next = v.e), r !== null && (r.prev = v, r.e.prev = v.e), v;
  } finally {
  }
}
function La(e, t, n) {
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
      /* @__PURE__ */ hn(i)
    );
    o.before(i), i = s;
  }
}
function Vn(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function yu(e, t, n, r, o) {
  var i = e, s = "", a;
  lr(() => {
    if (s === (s = t() ?? "")) {
      ke && dn();
      return;
    }
    a !== void 0 && (Xt(a), a = void 0), s !== "" && (a = Nn(() => {
      if (ke) {
        Ae.data;
        for (var l = dn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ hn(l);
        if (l === null)
          throw Pi(), mr;
        Pt(Ae, u), i = xt(l);
        return;
      }
      var c = s + "", f = Qs(c);
      Pt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ wt(f),
        /** @type {TemplateNode} */
        f.lastChild
      ), i.before(f);
    }));
  });
}
function vt(e, t, n, r, o) {
  var a;
  ke && dn();
  var i = (a = t.$$slots) == null ? void 0 : a[n], s = !1;
  i === !0 && (i = t[n === "default" ? "children" : n], s = !0), i === void 0 || i(e, s ? () => r : r);
}
function pg(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const n in e.$$slots)
    t[n] = !0;
  return t;
}
function Mr(e, t, ...n) {
  var r = e, o = ft, i;
  lr(() => {
    o !== (o = t()) && (i && (Xt(i), i = null), i = Nn(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Br), ke && (r = Ae);
}
function wu(e, t, n) {
  ke && dn();
  var r = e, o, i;
  lr(() => {
    o !== (o = t()) && (i && (Pr(i), i = null), o && (i = Nn(() => n(r, o))));
  }, Br), ke && (r = Ae);
}
function mg(e, t, n, r, o, i) {
  let s = ke;
  ke && dn();
  var a, l, u = null;
  ke && Ae.nodeType === 1 && (u = /** @type {Element} */
  Ae, dn());
  var c = (
    /** @type {TemplateNode} */
    ke ? Ae : e
  ), f;
  lr(() => {
    const d = t() || null;
    var g = d === "svg" ? Il : null;
    d !== a && (f && (d === null ? Pr(f, () => {
      f = null, l = null;
    }) : d === l ? so(f) : Xt(f)), d && d !== l && (f = Nn(() => {
      if (u = ke ? (
        /** @type {Element} */
        u
      ) : g ? document.createElementNS(g, d) : document.createElement(d), Pt(u, u), r) {
        ke && sg(d) && u.append(document.createComment(""));
        var v = (
          /** @type {TemplateNode} */
          ke ? /* @__PURE__ */ wt(u) : u.appendChild(Pn())
        );
        ke && (v === null ? At(!1) : xt(v)), r(u, v);
      }
      We.nodes_end = u, c.before(u);
    })), a = d, a && (l = a));
  }, Br), s && (At(!0), xt(c));
}
function ot(e, t) {
  xo(() => {
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
  Tt(() => {
    var r = fn(() => t(e, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      Xr(() => {
        var s = n();
        U(s), o && Zs(i, s) && (i = s, r.update(s));
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
function yg() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = _u(e)) && (r && (r += " "), r += t);
  return r;
}
function pn(e) {
  return typeof e == "object" ? yg(e) : e ?? "";
}
function xu(e) {
  if (ke) {
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
    e.__on_r = n, xf(n), ug();
  }
}
function wg(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function ae(e, t, n, r) {
  var o = e.__attributes ?? (e.__attributes = {});
  ke && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[vf] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && bu(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Qt(e, t, n, r, o = !1, i = !1, s = !1) {
  let a = ke && i;
  a && At(!1);
  var l = t || {}, u = e.tagName === "OPTION";
  for (var c in t)
    c in n || (n[c] = null);
  n.class && (n.class = pn(n.class)), r !== void 0 && (n.class = n.class ? n.class + " " + r : r);
  var f = bu(e), d = (
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
          var C = eg(P);
          if (Jf(P) && (P = P.slice(0, -7), m.capture = !0), !C && g) {
            if (x != null) continue;
            e.removeEventListener(P, l[k], m), l[k] = null;
          }
          if (x != null)
            if (C)
              e[`__${P}`] = x, Oi([P]);
            else {
              let N = function(T) {
                l[p].call(this, T);
              };
              l[k] = hu(P, e, N, m);
            }
          else C && (e[`__${P}`] = void 0);
        } else if (p === "style" && x != null)
          e.style.cssText = x + "";
        else if (p === "autofocus")
          ag(
            /** @type {HTMLElement} */
            e,
            !!x
          );
        else if (!i && (p === "__value" || p === "value" && x != null))
          e.value = e.__value = x;
        else if (p === "selected" && u)
          wg(
            /** @type {HTMLOptionElement} */
            e,
            x
          );
        else {
          var _ = p;
          o || (_ = ng(_));
          var S = _ === "defaultValue" || _ === "defaultChecked";
          if (x == null && !i && !S)
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
          else S || f.includes(_) && (i || typeof x != "string") ? e[_] = x : typeof x != "function" && ae(e, _, x);
        }
        p === "style" && "__styles" in e && (e.__styles = {});
      }
    }
  }
  return a && At(!0), l;
}
var za = /* @__PURE__ */ new Map();
function bu(e) {
  var t = za.get(e.nodeName);
  if (t) return t;
  za.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = Yl(r);
    for (var i in n)
      n[i].set && t.push(i);
    r = Ks(r);
  }
  return t;
}
function ur(e, t, n) {
  var r = e.__className, o = Cu(t, n);
  ke && e.getAttribute("class") === o ? e.__className = o : (r !== o || ke && e.getAttribute("class") !== o) && (o === "" ? e.removeAttribute("class") : e.setAttribute("class", o), e.__className = o);
}
function Tr(e, t, n) {
  var r = e.__className, o = Cu(t, n);
  ke && e.className === o ? e.__className = o : (r !== o || ke && e.className !== o) && (t == null ? e.removeAttribute("class") : e.className = o, e.__className = o);
}
function Cu(e, t) {
  return (e ?? "") + (t ? " " + t : "");
}
function rt(e, t, n) {
  if (n) {
    if (e.classList.contains(t)) return;
    e.classList.add(t);
  } else {
    if (!e.classList.contains(t)) return;
    e.classList.remove(t);
  }
}
function st(e, t, n, r) {
  var o = e.__styles ?? (e.__styles = {});
  o[t] !== n && (o[t] = n, n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, ""));
}
var Ln, $r, wo, ki, ku;
const Ei = class Ei {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    Gn(this, ki);
    /** */
    Gn(this, Ln, /* @__PURE__ */ new WeakMap());
    /** @type {ResizeObserver | undefined} */
    Gn(this, $r);
    /** @type {ResizeObserverOptions} */
    Gn(this, wo);
    qr(this, wo, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = it(this, Ln).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), it(this, Ln).set(t, r), Ma(this, ki, ku).call(this).observe(t, it(this, wo)), () => {
      var o = it(this, Ln).get(t);
      o.delete(n), o.size === 0 && (it(this, Ln).delete(t), it(this, $r).unobserve(t));
    };
  }
};
Ln = new WeakMap(), $r = new WeakMap(), wo = new WeakMap(), ki = new WeakSet(), ku = function() {
  return it(this, $r) ?? qr(this, $r, new ResizeObserver(
    /** @param {any} entries */
    (t) => {
      for (var n of t) {
        Ei.entries.set(n.target, n);
        for (var r of it(this, Ln).get(n.target) || [])
          r(n);
      }
    }
  ));
}, /** @static */
mt(Ei, "entries", /* @__PURE__ */ new WeakMap());
let xs = Ei;
var _g = /* @__PURE__ */ new xs({
  box: "border-box"
});
function Ia(e, t, n) {
  var r = _g.observe(e, () => n(e[t]));
  Tt(() => (fn(() => n(e[t])), r));
}
function Ra(e, t) {
  return e === t || (e == null ? void 0 : e[Rn]) === t;
}
function Mn(e = {}, t, n, r) {
  return Tt(() => {
    var o, i;
    return Xr(() => {
      o = i, i = [], fn(() => {
        e !== n(...i) && (t(e, ...i), o && Ra(n(...o), e) && t(null, ...o));
      });
    }), () => {
      xo(() => {
        i && Ra(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Te(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Be
  ), n = t.l.u;
  if (!n) return;
  let r = () => U(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ Oe(() => {
      let a = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], a = !0);
      return a && o++, o;
    });
    r = () => h(s);
  }
  n.b.length && Kf(() => {
    Ba(t, r), ro(n.b);
  }), si(() => {
    const o = fn(() => n.m.map(wf));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && si(() => {
    Ba(t, r), ro(n.a);
  });
}
function Ba(e, t) {
  if (e.l.s)
    for (const n of e.l.s) h(n);
  t();
}
function Le(e, t) {
  var i;
  var n = (
    /** @type {Record<string, Function[] | Function>} */
    (i = e.$$events) == null ? void 0 : i[t.type]
  ), r = _o(n) ? n.slice() : n == null ? [] : [n];
  for (var o of r)
    o.call(this, t);
}
function cr(e) {
  Be === null && Ai(), Ir && Be.l !== null ? bg(Be).m.push(e) : si(() => {
    const t = fn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function ea(e) {
  Be === null && Ai(), cr(() => () => fn(e));
}
function xg(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function Di() {
  const e = Be;
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
      const s = _o(o) ? o.slice() : [o], a = xg(
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
function bg(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function ta(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), ft;
  const r = fn(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const vr = [];
function It(e, t) {
  return {
    subscribe: ye(e, t).subscribe
  };
}
function ye(e, t = ft) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(a) {
    if (Zs(e, a) && (e = a, n)) {
      const l = !vr.length;
      for (const u of r)
        u[1](), vr.push(u, e);
      if (l) {
        for (let u = 0; u < vr.length; u += 2)
          vr[u][0](vr[u + 1]);
        vr.length = 0;
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
function Bn(e, t, n) {
  const r = !Array.isArray(e), o = r ? [e] : e;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = t.length < 2;
  return It(n, (s, a) => {
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
      (v, C) => ta(
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
      ro(g), f(), l = !1;
    };
  });
}
function F(e) {
  let t;
  return ta(e, (n) => t = n)(), t;
}
let zo = !1, bs = Symbol();
function j(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ bo(void 0),
    unsubscribe: ft
  });
  if (r.store !== e && !(bs in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = ft;
    else {
      var o = !0;
      r.unsubscribe = ta(e, (i) => {
        o ? r.source.v = i : G(r.source, i);
      }), o = !1;
    }
  return e && bs in n ? F(e) : h(r.source);
}
function Cg(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = ft), e;
}
function ai(e, t) {
  return e.set(t), t;
}
function Qe() {
  const e = {};
  function t() {
    au(() => {
      for (var n in e)
        e[n].unsubscribe();
      no(e, bs, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function kg(e) {
  var t = zo;
  try {
    return zo = !1, [e(), zo];
  } finally {
    zo = t;
  }
}
const Eg = {
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
function Wt(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    Eg
  );
}
const Sg = {
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
      Dl
    )), e.special[t](n), Ta(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), Ta(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function nt(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: St(0) }, Sg);
}
const $g = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Ur(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      Ur(o) && (o = o());
      const i = Sn(o, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Ur(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = Sn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === Rn || t === Ws) return !1;
    for (let n of e.props)
      if (Ur(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props) {
      Ur(n) && (n = n());
      for (const r in n)
        t.includes(r) || t.push(r);
    }
    return t;
  }
};
function _t(...e) {
  return new Proxy({ props: e }, $g);
}
function w(e, t, n, r) {
  var P;
  var o = (n & af) !== 0, i = !Ir || (n & lf) !== 0, s = (n & uf) !== 0, a = (n & cf) !== 0, l = !1, u;
  s ? [u, l] = kg(() => (
    /** @type {V} */
    e[t]
  )) : u = /** @type {V} */
  e[t];
  var c = Rn in e || Ws in e, f = s && (((P = Sn(e, t)) == null ? void 0 : P.set) ?? (c && t in e && ((N) => e[t] = N))) || void 0, d = (
    /** @type {V} */
    r
  ), g = !0, v = !1, C = () => (v = !0, g && (g = !1, a ? d = fn(
    /** @type {() => V} */
    r
  ) : d = /** @type {V} */
  r), d);
  u === void 0 && r !== void 0 && (f && i && Pf(), u = C(), f && f(u));
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
    var S = (o ? Oe : pe)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    S.f |= gf, _ = () => {
      var N = h(S);
      return N !== void 0 && (d = /** @type {V} */
      void 0), N === void 0 ? d : N;
    };
  }
  if (!(n & Dl))
    return _;
  if (f) {
    var p = e.$$legacy;
    return function(N, T) {
      return arguments.length > 0 ? ((!i || !T || p || l) && f(T ? _() : N), N) : _();
    };
  }
  var x = !1, m = /* @__PURE__ */ bo(u), k = /* @__PURE__ */ Oe(() => {
    var N = _(), T = h(m);
    return x ? (x = !1, T) : m.v = N;
  });
  return o || (k.equals = qs), function(N, T) {
    if (arguments.length > 0) {
      const V = T ? h(k) : i && s ? sn(N) : N;
      return k.equals(V) || (x = !0, G(m, V), v && d !== void 0 && (d = V), fn(() => h(k))), N;
    }
    return h(k);
  };
}
function Pg(e) {
  return new Ng(e);
}
var xn, Rt;
class Ng {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Gn(this, xn);
    /** @type {Record<string, any>} */
    Gn(this, Rt);
    var i;
    var n = /* @__PURE__ */ new Map(), r = (s, a) => {
      var l = /* @__PURE__ */ bo(a);
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
    qr(this, Rt, (t.hydrate ? dg : vu)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((i = t == null ? void 0 : t.props) != null && i.$$host) || t.sync === !1) && y(), qr(this, xn, o.$$events);
    for (const s of Object.keys(it(this, Rt)))
      s === "$set" || s === "$destroy" || s === "$on" || no(this, s, {
        get() {
          return it(this, Rt)[s];
        },
        /** @param {any} value */
        set(a) {
          it(this, Rt)[s] = a;
        },
        enumerable: !0
      });
    it(this, Rt).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(o, s);
    }, it(this, Rt).$destroy = () => {
      fg(it(this, Rt));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    it(this, Rt).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    it(this, xn)[t] = it(this, xn)[t] || [];
    const r = (...o) => n.call(this, ...o);
    return it(this, xn)[t].push(r), () => {
      it(this, xn)[t] = it(this, xn)[t].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    it(this, Rt).$destroy();
  }
}
xn = new WeakMap(), Rt = new WeakMap();
let Eu;
typeof HTMLElement == "function" && (Eu = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, n, r) {
    super();
    /** The Svelte component constructor */
    mt(this, "$$ctor");
    /** Slots */
    mt(this, "$$s");
    /** @type {any} The Svelte component instance */
    mt(this, "$$c");
    /** Whether or not the custom element is connected */
    mt(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    mt(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    mt(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    mt(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    mt(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    mt(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    mt(this, "$$me");
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
      const n = {}, r = Mg(this);
      for (const o of this.$$s)
        o in r && (o === "default" && !this.$$d.children ? (this.$$d.children = t(o), n.default = !0) : n[o] = t(o));
      for (const o of this.attributes) {
        const i = this.$$g_p(o.name);
        i in this.$$d || (this.$$d[i] = Zo(i, o.value, this.$$p_d, "toProp"));
      }
      for (const o in this.$$p_d)
        !(o in this.$$d) && this[o] !== void 0 && (this.$$d[o] = this[o], delete this[o]);
      this.$$c = Pg({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = Zf(() => {
        Xr(() => {
          var o;
          this.$$r = !0;
          for (const i of ti(this.$$c)) {
            if (!((o = this.$$p_d[i]) != null && o.reflect)) continue;
            this.$$d[i] = this.$$c[i];
            const s = Zo(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Zo(t, r, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [t]: this.$$d[t] }));
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
    return ti(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function Zo(e, t, n, r) {
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
function Mg(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function ie(e, t, n, r, o, i) {
  let s = class extends Eu {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return ti(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return ti(t).forEach((a) => {
    no(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        var f;
        l = Zo(a, l, t), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var c = (f = Sn(u, a)) == null ? void 0 : f.get;
          c ? u[a] = l : u.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    no(s.prototype, a, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[a];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
function bt(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = bt(e[n])) !== "" && (t += (t && " ") + r);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
var Tg = { value: () => {
} };
function Li() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new qo(n);
}
function qo(e) {
  this._ = e;
}
function Ag(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
qo.prototype = Li.prototype = {
  constructor: qo,
  on: function(e, t) {
    var n = this._, r = Ag(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = Hg(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = Ya(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = Ya(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new qo(e);
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
function Hg(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Ya(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Tg, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Cs = "http://www.w3.org/1999/xhtml";
const Xa = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Cs,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function zi(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Xa.hasOwnProperty(t) ? { space: Xa[t], local: e } : e;
}
function Og(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Cs && t.documentElement.namespaceURI === Cs ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function Vg(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Su(e) {
  var t = zi(e);
  return (t.local ? Vg : Og)(t);
}
function Dg() {
}
function na(e) {
  return e == null ? Dg : function() {
    return this.querySelector(e);
  };
}
function Lg(e) {
  typeof e != "function" && (e = na(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, u, c = 0; c < s; ++c)
      (l = i[c]) && (u = e.call(l, l.__data__, c, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[c] = u);
  return new Vt(r, this._parents);
}
function zg(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Ig() {
  return [];
}
function $u(e) {
  return e == null ? Ig : function() {
    return this.querySelectorAll(e);
  };
}
function Rg(e) {
  return function() {
    return zg(e.apply(this, arguments));
  };
}
function Bg(e) {
  typeof e == "function" ? e = Rg(e) : e = $u(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(e.call(l, l.__data__, u, s)), o.push(l));
  return new Vt(r, o);
}
function Pu(e) {
  return function() {
    return this.matches(e);
  };
}
function Nu(e) {
  return function(t) {
    return t.matches(e);
  };
}
var Yg = Array.prototype.find;
function Xg(e) {
  return function() {
    return Yg.call(this.children, e);
  };
}
function Wg() {
  return this.firstElementChild;
}
function Fg(e) {
  return this.select(e == null ? Wg : Xg(typeof e == "function" ? e : Nu(e)));
}
var Kg = Array.prototype.filter;
function Zg() {
  return Array.from(this.children);
}
function qg(e) {
  return function() {
    return Kg.call(this.children, e);
  };
}
function Ug(e) {
  return this.selectAll(e == null ? Zg : qg(typeof e == "function" ? e : Nu(e)));
}
function Gg(e) {
  typeof e != "function" && (e = Pu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Vt(r, this._parents);
}
function Mu(e) {
  return new Array(e.length);
}
function jg() {
  return new Vt(this._enter || this._groups.map(Mu), this._parents);
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
function Jg(e) {
  return function() {
    return e;
  };
}
function Qg(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, u = i.length; s < u; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new li(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function e1(e, t, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), c = t.length, f = i.length, d = new Array(c), g;
  for (a = 0; a < c; ++a)
    (l = t[a]) && (d[a] = g = s.call(l, l.__data__, a, t) + "", u.has(g) ? o[a] = l : u.set(g, l));
  for (a = 0; a < f; ++a)
    g = s.call(e, i[a], a, i) + "", (l = u.get(g)) ? (r[a] = l, l.__data__ = i[a], u.delete(g)) : n[a] = new li(e, i[a]);
  for (a = 0; a < c; ++a)
    (l = t[a]) && u.get(d[a]) === l && (o[a] = l);
}
function t1(e) {
  return e.__data__;
}
function n1(e, t) {
  if (!arguments.length) return Array.from(this, t1);
  var n = t ? e1 : Qg, r = this._parents, o = this._groups;
  typeof e != "function" && (e = Jg(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var c = r[u], f = o[u], d = f.length, g = r1(e.call(c, c && c.__data__, u, r)), v = g.length, C = a[u] = new Array(v), _ = s[u] = new Array(v), S = l[u] = new Array(d);
    n(c, f, C, _, S, g, t);
    for (var p = 0, x = 0, m, k; p < v; ++p)
      if (m = C[p]) {
        for (p >= x && (x = p + 1); !(k = _[x]) && ++x < v; ) ;
        m._next = k || null;
      }
  }
  return s = new Vt(s, r), s._enter = a, s._exit = l, s;
}
function r1(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function o1() {
  return new Vt(this._exit || this._groups.map(Mu), this._parents);
}
function i1(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function s1(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], c = r[l], f = u.length, d = a[l] = new Array(f), g, v = 0; v < f; ++v)
      (g = u[v] || c[v]) && (d[v] = g);
  for (; l < o; ++l)
    a[l] = n[l];
  return new Vt(a, this._parents);
}
function a1() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function l1(e) {
  e || (e = u1);
  function t(f, d) {
    return f && d ? e(f.__data__, d.__data__) : !f - !d;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), u, c = 0; c < a; ++c)
      (u = s[c]) && (l[c] = u);
    l.sort(t);
  }
  return new Vt(o, this._parents).order();
}
function u1(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function c1() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function d1() {
  return Array.from(this);
}
function f1() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function g1() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function h1() {
  return !this.node();
}
function v1(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function p1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function m1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function y1(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function w1(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function _1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function x1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function b1(e, t) {
  var n = zi(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? m1 : p1 : typeof t == "function" ? n.local ? x1 : _1 : n.local ? w1 : y1)(n, t));
}
function Tu(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function C1(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function k1(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function E1(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function S1(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? C1 : typeof t == "function" ? E1 : k1)(e, t, n ?? "")) : Ar(this.node(), e);
}
function Ar(e, t) {
  return e.style.getPropertyValue(t) || Tu(e).getComputedStyle(e, null).getPropertyValue(t);
}
function $1(e) {
  return function() {
    delete this[e];
  };
}
function P1(e, t) {
  return function() {
    this[e] = t;
  };
}
function N1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function M1(e, t) {
  return arguments.length > 1 ? this.each((t == null ? $1 : typeof t == "function" ? N1 : P1)(e, t)) : this.node()[e];
}
function Au(e) {
  return e.trim().split(/^|\s+/);
}
function ra(e) {
  return e.classList || new Hu(e);
}
function Hu(e) {
  this._node = e, this._names = Au(e.getAttribute("class") || "");
}
Hu.prototype = {
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
function Ou(e, t) {
  for (var n = ra(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Vu(e, t) {
  for (var n = ra(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function T1(e) {
  return function() {
    Ou(this, e);
  };
}
function A1(e) {
  return function() {
    Vu(this, e);
  };
}
function H1(e, t) {
  return function() {
    (t.apply(this, arguments) ? Ou : Vu)(this, e);
  };
}
function O1(e, t) {
  var n = Au(e + "");
  if (arguments.length < 2) {
    for (var r = ra(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? H1 : t ? T1 : A1)(n, t));
}
function V1() {
  this.textContent = "";
}
function D1(e) {
  return function() {
    this.textContent = e;
  };
}
function L1(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function z1(e) {
  return arguments.length ? this.each(e == null ? V1 : (typeof e == "function" ? L1 : D1)(e)) : this.node().textContent;
}
function I1() {
  this.innerHTML = "";
}
function R1(e) {
  return function() {
    this.innerHTML = e;
  };
}
function B1(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Y1(e) {
  return arguments.length ? this.each(e == null ? I1 : (typeof e == "function" ? B1 : R1)(e)) : this.node().innerHTML;
}
function X1() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function W1() {
  return this.each(X1);
}
function F1() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function K1() {
  return this.each(F1);
}
function Z1(e) {
  var t = typeof e == "function" ? e : Su(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function q1() {
  return null;
}
function U1(e, t) {
  var n = typeof e == "function" ? e : Su(e), r = t == null ? q1 : typeof t == "function" ? t : na(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function G1() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function j1() {
  return this.each(G1);
}
function J1() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Q1() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function eh(e) {
  return this.select(e ? Q1 : J1);
}
function th(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function nh(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function rh(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function oh(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function ih(e, t, n) {
  return function() {
    var r = this.__on, o, i = nh(t);
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
function sh(e, t, n) {
  var r = rh(e + ""), o, i = r.length, s;
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
  for (a = t ? ih : oh, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function Du(e, t, n) {
  var r = Tu(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function ah(e, t) {
  return function() {
    return Du(this, e, t);
  };
}
function lh(e, t) {
  return function() {
    return Du(this, e, t.apply(this, arguments));
  };
}
function uh(e, t) {
  return this.each((typeof t == "function" ? lh : ah)(e, t));
}
function* ch() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Lu = [null];
function Vt(e, t) {
  this._groups = e, this._parents = t;
}
function Co() {
  return new Vt([[document.documentElement]], Lu);
}
function dh() {
  return this;
}
Vt.prototype = Co.prototype = {
  constructor: Vt,
  select: Lg,
  selectAll: Bg,
  selectChild: Fg,
  selectChildren: Ug,
  filter: Gg,
  data: n1,
  enter: jg,
  exit: o1,
  join: i1,
  merge: s1,
  selection: dh,
  order: a1,
  sort: l1,
  call: c1,
  nodes: d1,
  node: f1,
  size: g1,
  empty: h1,
  each: v1,
  attr: b1,
  style: S1,
  property: M1,
  classed: O1,
  text: z1,
  html: Y1,
  raise: W1,
  lower: K1,
  append: Z1,
  insert: U1,
  remove: j1,
  clone: eh,
  datum: th,
  on: sh,
  dispatch: uh,
  [Symbol.iterator]: ch
};
function Bt(e) {
  return typeof e == "string" ? new Vt([[document.querySelector(e)]], [document.documentElement]) : new Vt([[e]], Lu);
}
function fh(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function qt(e, t) {
  if (e = fh(e), t === void 0 && (t = e.currentTarget), t) {
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
const gh = { passive: !1 }, ao = { capture: !0, passive: !1 };
function Qi(e) {
  e.stopImmediatePropagation();
}
function _r(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function zu(e) {
  var t = e.document.documentElement, n = Bt(e).on("dragstart.drag", _r, ao);
  "onselectstart" in t ? n.on("selectstart.drag", _r, ao) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Iu(e, t) {
  var n = e.document.documentElement, r = Bt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", _r, ao), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Io = (e) => () => e;
function ks(e, {
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
ks.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function hh(e) {
  return !e.ctrlKey && !e.button;
}
function vh() {
  return this.parentNode;
}
function ph(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function mh() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function yh() {
  var e = hh, t = vh, n = ph, r = mh, o = {}, i = Li("start", "drag", "end"), s = 0, a, l, u, c, f = 0;
  function d(m) {
    m.on("mousedown.drag", g).filter(r).on("touchstart.drag", _).on("touchmove.drag", S, gh).on("touchend.drag touchcancel.drag", p).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(m, k) {
    if (!(c || !e.call(this, m, k))) {
      var P = x(this, t.call(this, m, k), m, k, "mouse");
      P && (Bt(m.view).on("mousemove.drag", v, ao).on("mouseup.drag", C, ao), zu(m.view), Qi(m), u = !1, a = m.clientX, l = m.clientY, P("start", m));
    }
  }
  function v(m) {
    if (_r(m), !u) {
      var k = m.clientX - a, P = m.clientY - l;
      u = k * k + P * P > f;
    }
    o.mouse("drag", m);
  }
  function C(m) {
    Bt(m.view).on("mousemove.drag mouseup.drag", null), Iu(m.view, u), _r(m), o.mouse("end", m);
  }
  function _(m, k) {
    if (e.call(this, m, k)) {
      var P = m.changedTouches, N = t.call(this, m, k), T = P.length, V, H;
      for (V = 0; V < T; ++V)
        (H = x(this, N, m, k, P[V].identifier, P[V])) && (Qi(m), H("start", m, P[V]));
    }
  }
  function S(m) {
    var k = m.changedTouches, P = k.length, N, T;
    for (N = 0; N < P; ++N)
      (T = o[k[N].identifier]) && (_r(m), T("drag", m, k[N]));
  }
  function p(m) {
    var k = m.changedTouches, P = k.length, N, T;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), N = 0; N < P; ++N)
      (T = o[k[N].identifier]) && (Qi(m), T("end", m, k[N]));
  }
  function x(m, k, P, N, T, V) {
    var H = i.copy(), L = qt(V || P, k), z, R, E;
    if ((E = n.call(m, new ks("beforestart", {
      sourceEvent: P,
      target: d,
      identifier: T,
      active: s,
      x: L[0],
      y: L[1],
      dx: 0,
      dy: 0,
      dispatch: H
    }), N)) != null)
      return z = E.x - L[0] || 0, R = E.y - L[1] || 0, function M(b, $, A) {
        var O = L, B;
        switch (b) {
          case "start":
            o[T] = M, B = s++;
            break;
          case "end":
            delete o[T], --s;
          // falls through
          case "drag":
            L = qt(A || $, k), B = s;
            break;
        }
        H.call(
          b,
          m,
          new ks(b, {
            sourceEvent: $,
            subject: E,
            target: d,
            identifier: T,
            active: B,
            x: L[0] + z,
            y: L[1] + R,
            dx: L[0] - O[0],
            dy: L[1] - O[1],
            dispatch: H
          }),
          N
        );
      };
  }
  return d.filter = function(m) {
    return arguments.length ? (e = typeof m == "function" ? m : Io(!!m), d) : e;
  }, d.container = function(m) {
    return arguments.length ? (t = typeof m == "function" ? m : Io(m), d) : t;
  }, d.subject = function(m) {
    return arguments.length ? (n = typeof m == "function" ? m : Io(m), d) : n;
  }, d.touchable = function(m) {
    return arguments.length ? (r = typeof m == "function" ? m : Io(!!m), d) : r;
  }, d.on = function() {
    var m = i.on.apply(i, arguments);
    return m === i ? d : m;
  }, d.clickDistance = function(m) {
    return arguments.length ? (f = (m = +m) * m, d) : Math.sqrt(f);
  }, d;
}
function oa(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Ru(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function ko() {
}
var lo = 0.7, ui = 1 / lo, xr = "\\s*([+-]?\\d+)\\s*", uo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", un = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", wh = /^#([0-9a-f]{3,8})$/, _h = new RegExp(`^rgb\\(${xr},${xr},${xr}\\)$`), xh = new RegExp(`^rgb\\(${un},${un},${un}\\)$`), bh = new RegExp(`^rgba\\(${xr},${xr},${xr},${uo}\\)$`), Ch = new RegExp(`^rgba\\(${un},${un},${un},${uo}\\)$`), kh = new RegExp(`^hsl\\(${uo},${un},${un}\\)$`), Eh = new RegExp(`^hsla\\(${uo},${un},${un},${uo}\\)$`), Wa = {
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
oa(ko, co, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Fa,
  // Deprecated! Use color.formatHex.
  formatHex: Fa,
  formatHex8: Sh,
  formatHsl: $h,
  formatRgb: Ka,
  toString: Ka
});
function Fa() {
  return this.rgb().formatHex();
}
function Sh() {
  return this.rgb().formatHex8();
}
function $h() {
  return Bu(this).formatHsl();
}
function Ka() {
  return this.rgb().formatRgb();
}
function co(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = wh.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Za(t) : n === 3 ? new $t(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Ro(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Ro(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = _h.exec(e)) ? new $t(t[1], t[2], t[3], 1) : (t = xh.exec(e)) ? new $t(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = bh.exec(e)) ? Ro(t[1], t[2], t[3], t[4]) : (t = Ch.exec(e)) ? Ro(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = kh.exec(e)) ? Ga(t[1], t[2] / 100, t[3] / 100, 1) : (t = Eh.exec(e)) ? Ga(t[1], t[2] / 100, t[3] / 100, t[4]) : Wa.hasOwnProperty(e) ? Za(Wa[e]) : e === "transparent" ? new $t(NaN, NaN, NaN, 0) : null;
}
function Za(e) {
  return new $t(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Ro(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new $t(e, t, n, r);
}
function Ph(e) {
  return e instanceof ko || (e = co(e)), e ? (e = e.rgb(), new $t(e.r, e.g, e.b, e.opacity)) : new $t();
}
function Es(e, t, n, r) {
  return arguments.length === 1 ? Ph(e) : new $t(e, t, n, r ?? 1);
}
function $t(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
oa($t, Es, Ru(ko, {
  brighter(e) {
    return e = e == null ? ui : Math.pow(ui, e), new $t(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? lo : Math.pow(lo, e), new $t(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new $t(Qn(this.r), Qn(this.g), Qn(this.b), ci(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: qa,
  // Deprecated! Use color.formatHex.
  formatHex: qa,
  formatHex8: Nh,
  formatRgb: Ua,
  toString: Ua
}));
function qa() {
  return `#${Jn(this.r)}${Jn(this.g)}${Jn(this.b)}`;
}
function Nh() {
  return `#${Jn(this.r)}${Jn(this.g)}${Jn(this.b)}${Jn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ua() {
  const e = ci(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Qn(this.r)}, ${Qn(this.g)}, ${Qn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ci(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Qn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Jn(e) {
  return e = Qn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Ga(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Gt(e, t, n, r);
}
function Bu(e) {
  if (e instanceof Gt) return new Gt(e.h, e.s, e.l, e.opacity);
  if (e instanceof ko || (e = co(e)), !e) return new Gt();
  if (e instanceof Gt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new Gt(s, a, l, e.opacity);
}
function Mh(e, t, n, r) {
  return arguments.length === 1 ? Bu(e) : new Gt(e, t, n, r ?? 1);
}
function Gt(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
oa(Gt, Mh, Ru(ko, {
  brighter(e) {
    return e = e == null ? ui : Math.pow(ui, e), new Gt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? lo : Math.pow(lo, e), new Gt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new $t(
      es(e >= 240 ? e - 240 : e + 120, o, r),
      es(e, o, r),
      es(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Gt(ja(this.h), Bo(this.s), Bo(this.l), ci(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = ci(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${ja(this.h)}, ${Bo(this.s) * 100}%, ${Bo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function ja(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Bo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function es(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Yu = (e) => () => e;
function Th(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Ah(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function Hh(e) {
  return (e = +e) == 1 ? Xu : function(t, n) {
    return n - t ? Ah(t, n, e) : Yu(isNaN(t) ? n : t);
  };
}
function Xu(e, t) {
  var n = t - e;
  return n ? Th(e, n) : Yu(isNaN(e) ? t : e);
}
const Ja = function e(t) {
  var n = Hh(t);
  function r(o, i) {
    var s = n((o = Es(o)).r, (i = Es(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = Xu(o.opacity, i.opacity);
    return function(c) {
      return o.r = s(c), o.g = a(c), o.b = l(c), o.opacity = u(c), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function Dn(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
var Ss = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ts = new RegExp(Ss.source, "g");
function Oh(e) {
  return function() {
    return e;
  };
}
function Vh(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Dh(e, t) {
  var n = Ss.lastIndex = ts.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = Ss.exec(e)) && (o = ts.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: Dn(r, o) })), n = ts.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? Vh(l[0].x) : Oh(t) : (t = l.length, function(u) {
    for (var c = 0, f; c < t; ++c) a[(f = l[c]).i] = f.x(u);
    return a.join("");
  });
}
var Qa = 180 / Math.PI, $s = {
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
    rotate: Math.atan2(t, e) * Qa,
    skewX: Math.atan(l) * Qa,
    scaleX: s,
    scaleY: a
  };
}
var Yo;
function Lh(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? $s : Wu(t.a, t.b, t.c, t.d, t.e, t.f);
}
function zh(e) {
  return e == null || (Yo || (Yo = document.createElementNS("http://www.w3.org/2000/svg", "g")), Yo.setAttribute("transform", e), !(e = Yo.transform.baseVal.consolidate())) ? $s : (e = e.matrix, Wu(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Fu(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, c, f, d, g, v) {
    if (u !== f || c !== d) {
      var C = g.push("translate(", null, t, null, n);
      v.push({ i: C - 4, x: Dn(u, f) }, { i: C - 2, x: Dn(c, d) });
    } else (f || d) && g.push("translate(" + f + t + d + n);
  }
  function s(u, c, f, d) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), d.push({ i: f.push(o(f) + "rotate(", null, r) - 2, x: Dn(u, c) })) : c && f.push(o(f) + "rotate(" + c + r);
  }
  function a(u, c, f, d) {
    u !== c ? d.push({ i: f.push(o(f) + "skewX(", null, r) - 2, x: Dn(u, c) }) : c && f.push(o(f) + "skewX(" + c + r);
  }
  function l(u, c, f, d, g, v) {
    if (u !== f || c !== d) {
      var C = g.push(o(g) + "scale(", null, ",", null, ")");
      v.push({ i: C - 4, x: Dn(u, f) }, { i: C - 2, x: Dn(c, d) });
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
var Ih = Fu(Lh, "px, ", "px)", "deg)"), Rh = Fu(zh, ", ", ")", ")"), Bh = 1e-12;
function el(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Yh(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Xh(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Wh = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], c = s[0], f = s[1], d = s[2], g = c - a, v = f - l, C = g * g + v * v, _, S;
    if (C < Bh)
      S = Math.log(d / u) / t, _ = function(N) {
        return [
          a + N * g,
          l + N * v,
          u * Math.exp(t * N * S)
        ];
      };
    else {
      var p = Math.sqrt(C), x = (d * d - u * u + r * C) / (2 * u * n * p), m = (d * d - u * u - r * C) / (2 * d * n * p), k = Math.log(Math.sqrt(x * x + 1) - x), P = Math.log(Math.sqrt(m * m + 1) - m);
      S = (P - k) / t, _ = function(N) {
        var T = N * S, V = el(k), H = u / (n * p) * (V * Xh(t * T + k) - Yh(k));
        return [
          a + H * g,
          l + H * v,
          u * V / el(t * T + k)
        ];
      };
    }
    return _.duration = S * 1e3 * t / Math.SQRT2, _;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
}(Math.SQRT2, 2, 4);
var Hr = 0, Qr = 0, Gr = 0, Ku = 1e3, di, eo, fi = 0, tr = 0, Ii = 0, fo = typeof performance == "object" && performance.now ? performance : Date, Zu = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function ia() {
  return tr || (Zu(Fh), tr = fo.now() + Ii);
}
function Fh() {
  tr = 0;
}
function gi() {
  this._call = this._time = this._next = null;
}
gi.prototype = qu.prototype = {
  constructor: gi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? ia() : +n) + (t == null ? 0 : +t), !this._next && eo !== this && (eo ? eo._next = this : di = this, eo = this), this._call = e, this._time = n, Ps();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ps());
  }
};
function qu(e, t, n) {
  var r = new gi();
  return r.restart(e, t, n), r;
}
function Kh() {
  ia(), ++Hr;
  for (var e = di, t; e; )
    (t = tr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Hr;
}
function tl() {
  tr = (fi = fo.now()) + Ii, Hr = Qr = 0;
  try {
    Kh();
  } finally {
    Hr = 0, qh(), tr = 0;
  }
}
function Zh() {
  var e = fo.now(), t = e - fi;
  t > Ku && (Ii -= t, fi = e);
}
function qh() {
  for (var e, t = di, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : di = n);
  eo = e, Ps(r);
}
function Ps(e) {
  if (!Hr) {
    Qr && (Qr = clearTimeout(Qr));
    var t = e - tr;
    t > 24 ? (e < 1 / 0 && (Qr = setTimeout(tl, e - fo.now() - Ii)), Gr && (Gr = clearInterval(Gr))) : (Gr || (fi = fo.now(), Gr = setInterval(Zh, Ku)), Hr = 1, Zu(tl));
  }
}
function nl(e, t, n) {
  var r = new gi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var Uh = Li("start", "end", "cancel", "interrupt"), Gh = [], Uu = 0, rl = 1, Ns = 2, Uo = 3, ol = 4, Ms = 5, Go = 6;
function Ri(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  jh(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: Uh,
    tween: Gh,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Uu
  });
}
function sa(e, t) {
  var n = nn(e, t);
  if (n.state > Uu) throw new Error("too late; already scheduled");
  return n;
}
function mn(e, t) {
  var n = nn(e, t);
  if (n.state > Uo) throw new Error("too late; already running");
  return n;
}
function nn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function jh(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = qu(i, 0, n.time);
  function i(u) {
    n.state = rl, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var c, f, d, g;
    if (n.state !== rl) return l();
    for (c in r)
      if (g = r[c], g.name === n.name) {
        if (g.state === Uo) return nl(s);
        g.state === ol ? (g.state = Go, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[c]) : +c < t && (g.state = Go, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[c]);
      }
    if (nl(function() {
      n.state === Uo && (n.state = ol, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = Ns, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Ns) {
      for (n.state = Uo, o = new Array(d = n.tween.length), c = 0, f = -1; c < d; ++c)
        (g = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++f] = g);
      o.length = f + 1;
    }
  }
  function a(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Ms, 1), f = -1, d = o.length; ++f < d; )
      o[f].call(e, c);
    n.state === Ms && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = Go, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function jo(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > Ns && r.state < Ms, r.state = Go, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function Jh(e) {
  return this.each(function() {
    jo(this, e);
  });
}
function Qh(e, t) {
  var n, r;
  return function() {
    var o = mn(this, e), i = o.tween;
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
function ev(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = mn(this, e), s = i.tween;
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
function tv(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = nn(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? Qh : ev)(n, e, t));
}
function aa(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = mn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return nn(o, r).value[t];
  };
}
function Gu(e, t) {
  var n;
  return (typeof t == "number" ? Dn : t instanceof co ? Ja : (n = co(t)) ? (t = n, Ja) : Dh)(e, t);
}
function nv(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function rv(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function ov(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function iv(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function sv(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function av(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function lv(e, t) {
  var n = zi(e), r = n === "transform" ? Rh : Gu;
  return this.attrTween(e, typeof t == "function" ? (n.local ? av : sv)(n, r, aa(this, "attr." + e, t)) : t == null ? (n.local ? rv : nv)(n) : (n.local ? iv : ov)(n, r, t));
}
function uv(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function cv(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function dv(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && cv(e, i)), n;
  }
  return o._value = t, o;
}
function fv(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && uv(e, i)), n;
  }
  return o._value = t, o;
}
function gv(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = zi(e);
  return this.tween(n, (r.local ? dv : fv)(r, t));
}
function hv(e, t) {
  return function() {
    sa(this, e).delay = +t.apply(this, arguments);
  };
}
function vv(e, t) {
  return t = +t, function() {
    sa(this, e).delay = t;
  };
}
function pv(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? hv : vv)(t, e)) : nn(this.node(), t).delay;
}
function mv(e, t) {
  return function() {
    mn(this, e).duration = +t.apply(this, arguments);
  };
}
function yv(e, t) {
  return t = +t, function() {
    mn(this, e).duration = t;
  };
}
function wv(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? mv : yv)(t, e)) : nn(this.node(), t).duration;
}
function _v(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    mn(this, e).ease = t;
  };
}
function xv(e) {
  var t = this._id;
  return arguments.length ? this.each(_v(t, e)) : nn(this.node(), t).ease;
}
function bv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    mn(this, e).ease = n;
  };
}
function Cv(e) {
  if (typeof e != "function") throw new Error();
  return this.each(bv(this._id, e));
}
function kv(e) {
  typeof e != "function" && (e = Pu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Tn(r, this._parents, this._name, this._id);
}
function Ev(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], u = n[a], c = l.length, f = s[a] = new Array(c), d, g = 0; g < c; ++g)
      (d = l[g] || u[g]) && (f[g] = d);
  for (; a < r; ++a)
    s[a] = t[a];
  return new Tn(s, this._parents, this._name, this._id);
}
function Sv(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function $v(e, t, n) {
  var r, o, i = Sv(t) ? sa : mn;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function Pv(e, t) {
  var n = this._id;
  return arguments.length < 2 ? nn(this.node(), n).on.on(e) : this.each($v(n, e, t));
}
function Nv(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Mv() {
  return this.on("end.remove", Nv(this._id));
}
function Tv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = na(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), c, f, d = 0; d < l; ++d)
      (c = a[d]) && (f = e.call(c, c.__data__, d, a)) && ("__data__" in c && (f.__data__ = c.__data__), u[d] = f, Ri(u[d], t, n, d, u, nn(c, n)));
  return new Tn(i, this._parents, t, n);
}
function Av(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = $u(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, c, f = 0; f < u; ++f)
      if (c = l[f]) {
        for (var d = e.call(c, c.__data__, f, l), g, v = nn(c, n), C = 0, _ = d.length; C < _; ++C)
          (g = d[C]) && Ri(g, t, n, C, d, v);
        i.push(d), s.push(c);
      }
  return new Tn(i, s, t, n);
}
var Hv = Co.prototype.constructor;
function Ov() {
  return new Hv(this._groups, this._parents);
}
function Vv(e, t) {
  var n, r, o;
  return function() {
    var i = Ar(this, e), s = (this.style.removeProperty(e), Ar(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function ju(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Dv(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = Ar(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Lv(e, t, n) {
  var r, o, i;
  return function() {
    var s = Ar(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), Ar(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function zv(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = mn(this, e), u = l.on, c = l.value[i] == null ? a || (a = ju(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(s, o = c), l.on = r;
  };
}
function Iv(e, t, n) {
  var r = (e += "") == "transform" ? Ih : Gu;
  return t == null ? this.styleTween(e, Vv(e, r)).on("end.style." + e, ju(e)) : typeof t == "function" ? this.styleTween(e, Lv(e, r, aa(this, "style." + e, t))).each(zv(this._id, e)) : this.styleTween(e, Dv(e, r, t), n).on("end.style." + e, null);
}
function Rv(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function Bv(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && Rv(e, s, n)), r;
  }
  return i._value = t, i;
}
function Yv(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, Bv(e, t, n ?? ""));
}
function Xv(e) {
  return function() {
    this.textContent = e;
  };
}
function Wv(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function Fv(e) {
  return this.tween("text", typeof e == "function" ? Wv(aa(this, "text", e)) : Xv(e == null ? "" : e + ""));
}
function Kv(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function Zv(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && Kv(o)), t;
  }
  return r._value = e, r;
}
function qv(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, Zv(e));
}
function Uv() {
  for (var e = this._name, t = this._id, n = Ju(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var c = nn(l, t);
        Ri(l, e, n, u, s, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new Tn(r, this._parents, e, n);
}
function Gv() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = mn(this, r), c = u.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var jv = 0;
function Tn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Ju() {
  return ++jv;
}
var wn = Co.prototype;
Tn.prototype = {
  constructor: Tn,
  select: Tv,
  selectAll: Av,
  selectChild: wn.selectChild,
  selectChildren: wn.selectChildren,
  filter: kv,
  merge: Ev,
  selection: Ov,
  transition: Uv,
  call: wn.call,
  nodes: wn.nodes,
  node: wn.node,
  size: wn.size,
  empty: wn.empty,
  each: wn.each,
  on: Pv,
  attr: lv,
  attrTween: gv,
  style: Iv,
  styleTween: Yv,
  text: Fv,
  textTween: qv,
  remove: Mv,
  tween: tv,
  delay: pv,
  duration: wv,
  ease: xv,
  easeVarying: Cv,
  end: Gv,
  [Symbol.iterator]: wn[Symbol.iterator]
};
function Jv(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Qv = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Jv
};
function e0(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function t0(e) {
  var t, n;
  e instanceof Tn ? (t = e._id, e = e._name) : (t = Ju(), (n = Qv).time = ia(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && Ri(l, e, t, u, s, n || e0(l, t));
  return new Tn(r, this._parents, e, t);
}
Co.prototype.interrupt = Jh;
Co.prototype.transition = t0;
const Xo = (e) => () => e;
function n0(e, {
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
function bn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
bn.prototype = {
  constructor: bn,
  scale: function(e) {
    return e === 1 ? this : new bn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new bn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var Bi = new bn(1, 0, 0);
Qu.prototype = bn.prototype;
function Qu(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Bi;
  return e.__zoom;
}
function ns(e) {
  e.stopImmediatePropagation();
}
function jr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function r0(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function o0() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function il() {
  return this.__zoom || Bi;
}
function i0(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function s0() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function a0(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function ec() {
  var e = r0, t = o0, n = a0, r = i0, o = s0, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = Wh, u = Li("start", "zoom", "end"), c, f, d, g = 500, v = 150, C = 0, _ = 10;
  function S(E) {
    E.property("__zoom", il).on("wheel.zoom", T, { passive: !1 }).on("mousedown.zoom", V).on("dblclick.zoom", H).filter(o).on("touchstart.zoom", L).on("touchmove.zoom", z).on("touchend.zoom touchcancel.zoom", R).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  S.transform = function(E, M, b, $) {
    var A = E.selection ? E.selection() : E;
    A.property("__zoom", il), E !== A ? k(E, M, b, $) : A.interrupt().each(function() {
      P(this, arguments).event($).start().zoom(null, typeof M == "function" ? M.apply(this, arguments) : M).end();
    });
  }, S.scaleBy = function(E, M, b, $) {
    S.scaleTo(E, function() {
      var A = this.__zoom.k, O = typeof M == "function" ? M.apply(this, arguments) : M;
      return A * O;
    }, b, $);
  }, S.scaleTo = function(E, M, b, $) {
    S.transform(E, function() {
      var A = t.apply(this, arguments), O = this.__zoom, B = b == null ? m(A) : typeof b == "function" ? b.apply(this, arguments) : b, X = O.invert(B), q = typeof M == "function" ? M.apply(this, arguments) : M;
      return n(x(p(O, q), B, X), A, s);
    }, b, $);
  }, S.translateBy = function(E, M, b, $) {
    S.transform(E, function() {
      return n(this.__zoom.translate(
        typeof M == "function" ? M.apply(this, arguments) : M,
        typeof b == "function" ? b.apply(this, arguments) : b
      ), t.apply(this, arguments), s);
    }, null, $);
  }, S.translateTo = function(E, M, b, $, A) {
    S.transform(E, function() {
      var O = t.apply(this, arguments), B = this.__zoom, X = $ == null ? m(O) : typeof $ == "function" ? $.apply(this, arguments) : $;
      return n(Bi.translate(X[0], X[1]).scale(B.k).translate(
        typeof M == "function" ? -M.apply(this, arguments) : -M,
        typeof b == "function" ? -b.apply(this, arguments) : -b
      ), O, s);
    }, $, A);
  };
  function p(E, M) {
    return M = Math.max(i[0], Math.min(i[1], M)), M === E.k ? E : new bn(M, E.x, E.y);
  }
  function x(E, M, b) {
    var $ = M[0] - b[0] * E.k, A = M[1] - b[1] * E.k;
    return $ === E.x && A === E.y ? E : new bn(E.k, $, A);
  }
  function m(E) {
    return [(+E[0][0] + +E[1][0]) / 2, (+E[0][1] + +E[1][1]) / 2];
  }
  function k(E, M, b, $) {
    E.on("start.zoom", function() {
      P(this, arguments).event($).start();
    }).on("interrupt.zoom end.zoom", function() {
      P(this, arguments).event($).end();
    }).tween("zoom", function() {
      var A = this, O = arguments, B = P(A, O).event($), X = t.apply(A, O), q = b == null ? m(X) : typeof b == "function" ? b.apply(A, O) : b, ce = Math.max(X[1][0] - X[0][0], X[1][1] - X[0][1]), ee = A.__zoom, W = typeof M == "function" ? M.apply(A, O) : M, de = l(ee.invert(q).concat(ce / ee.k), W.invert(q).concat(ce / W.k));
      return function(we) {
        if (we === 1) we = W;
        else {
          var xe = de(we), fe = ce / xe[2];
          we = new bn(fe, q[0] - xe[0] * fe, q[1] - xe[1] * fe);
        }
        B.zoom(null, we);
      };
    });
  }
  function P(E, M, b) {
    return !b && E.__zooming || new N(E, M);
  }
  function N(E, M) {
    this.that = E, this.args = M, this.active = 0, this.sourceEvent = null, this.extent = t.apply(E, M), this.taps = 0;
  }
  N.prototype = {
    event: function(E) {
      return E && (this.sourceEvent = E), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(E, M) {
      return this.mouse && E !== "mouse" && (this.mouse[1] = M.invert(this.mouse[0])), this.touch0 && E !== "touch" && (this.touch0[1] = M.invert(this.touch0[0])), this.touch1 && E !== "touch" && (this.touch1[1] = M.invert(this.touch1[0])), this.that.__zoom = M, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(E) {
      var M = Bt(this.that).datum();
      u.call(
        E,
        this.that,
        new n0(E, {
          sourceEvent: this.sourceEvent,
          target: S,
          transform: this.that.__zoom,
          dispatch: u
        }),
        M
      );
    }
  };
  function T(E, ...M) {
    if (!e.apply(this, arguments)) return;
    var b = P(this, M).event(E), $ = this.__zoom, A = Math.max(i[0], Math.min(i[1], $.k * Math.pow(2, r.apply(this, arguments)))), O = qt(E);
    if (b.wheel)
      (b.mouse[0][0] !== O[0] || b.mouse[0][1] !== O[1]) && (b.mouse[1] = $.invert(b.mouse[0] = O)), clearTimeout(b.wheel);
    else {
      if ($.k === A) return;
      b.mouse = [O, $.invert(O)], jo(this), b.start();
    }
    jr(E), b.wheel = setTimeout(B, v), b.zoom("mouse", n(x(p($, A), b.mouse[0], b.mouse[1]), b.extent, s));
    function B() {
      b.wheel = null, b.end();
    }
  }
  function V(E, ...M) {
    if (d || !e.apply(this, arguments)) return;
    var b = E.currentTarget, $ = P(this, M, !0).event(E), A = Bt(E.view).on("mousemove.zoom", q, !0).on("mouseup.zoom", ce, !0), O = qt(E, b), B = E.clientX, X = E.clientY;
    zu(E.view), ns(E), $.mouse = [O, this.__zoom.invert(O)], jo(this), $.start();
    function q(ee) {
      if (jr(ee), !$.moved) {
        var W = ee.clientX - B, de = ee.clientY - X;
        $.moved = W * W + de * de > C;
      }
      $.event(ee).zoom("mouse", n(x($.that.__zoom, $.mouse[0] = qt(ee, b), $.mouse[1]), $.extent, s));
    }
    function ce(ee) {
      A.on("mousemove.zoom mouseup.zoom", null), Iu(ee.view, $.moved), jr(ee), $.event(ee).end();
    }
  }
  function H(E, ...M) {
    if (e.apply(this, arguments)) {
      var b = this.__zoom, $ = qt(E.changedTouches ? E.changedTouches[0] : E, this), A = b.invert($), O = b.k * (E.shiftKey ? 0.5 : 2), B = n(x(p(b, O), $, A), t.apply(this, M), s);
      jr(E), a > 0 ? Bt(this).transition().duration(a).call(k, B, $, E) : Bt(this).call(S.transform, B, $, E);
    }
  }
  function L(E, ...M) {
    if (e.apply(this, arguments)) {
      var b = E.touches, $ = b.length, A = P(this, M, E.changedTouches.length === $).event(E), O, B, X, q;
      for (ns(E), B = 0; B < $; ++B)
        X = b[B], q = qt(X, this), q = [q, this.__zoom.invert(q), X.identifier], A.touch0 ? !A.touch1 && A.touch0[2] !== q[2] && (A.touch1 = q, A.taps = 0) : (A.touch0 = q, O = !0, A.taps = 1 + !!c);
      c && (c = clearTimeout(c)), O && (A.taps < 2 && (f = q[0], c = setTimeout(function() {
        c = null;
      }, g)), jo(this), A.start());
    }
  }
  function z(E, ...M) {
    if (this.__zooming) {
      var b = P(this, M).event(E), $ = E.changedTouches, A = $.length, O, B, X, q;
      for (jr(E), O = 0; O < A; ++O)
        B = $[O], X = qt(B, this), b.touch0 && b.touch0[2] === B.identifier ? b.touch0[0] = X : b.touch1 && b.touch1[2] === B.identifier && (b.touch1[0] = X);
      if (B = b.that.__zoom, b.touch1) {
        var ce = b.touch0[0], ee = b.touch0[1], W = b.touch1[0], de = b.touch1[1], we = (we = W[0] - ce[0]) * we + (we = W[1] - ce[1]) * we, xe = (xe = de[0] - ee[0]) * xe + (xe = de[1] - ee[1]) * xe;
        B = p(B, Math.sqrt(we / xe)), X = [(ce[0] + W[0]) / 2, (ce[1] + W[1]) / 2], q = [(ee[0] + de[0]) / 2, (ee[1] + de[1]) / 2];
      } else if (b.touch0) X = b.touch0[0], q = b.touch0[1];
      else return;
      b.zoom("touch", n(x(B, X, q), b.extent, s));
    }
  }
  function R(E, ...M) {
    if (this.__zooming) {
      var b = P(this, M).event(E), $ = E.changedTouches, A = $.length, O, B;
      for (ns(E), d && clearTimeout(d), d = setTimeout(function() {
        d = null;
      }, g), O = 0; O < A; ++O)
        B = $[O], b.touch0 && b.touch0[2] === B.identifier ? delete b.touch0 : b.touch1 && b.touch1[2] === B.identifier && delete b.touch1;
      if (b.touch1 && !b.touch0 && (b.touch0 = b.touch1, delete b.touch1), b.touch0) b.touch0[1] = this.__zoom.invert(b.touch0[0]);
      else if (b.end(), b.taps === 2 && (B = qt(B, this), Math.hypot(f[0] - B[0], f[1] - B[1]) < _)) {
        var X = Bt(this).on("dblclick.zoom");
        X && X.apply(this, arguments);
      }
    }
  }
  return S.wheelDelta = function(E) {
    return arguments.length ? (r = typeof E == "function" ? E : Xo(+E), S) : r;
  }, S.filter = function(E) {
    return arguments.length ? (e = typeof E == "function" ? E : Xo(!!E), S) : e;
  }, S.touchable = function(E) {
    return arguments.length ? (o = typeof E == "function" ? E : Xo(!!E), S) : o;
  }, S.extent = function(E) {
    return arguments.length ? (t = typeof E == "function" ? E : Xo([[+E[0][0], +E[0][1]], [+E[1][0], +E[1][1]]]), S) : t;
  }, S.scaleExtent = function(E) {
    return arguments.length ? (i[0] = +E[0], i[1] = +E[1], S) : [i[0], i[1]];
  }, S.translateExtent = function(E) {
    return arguments.length ? (s[0][0] = +E[0][0], s[1][0] = +E[1][0], s[0][1] = +E[0][1], s[1][1] = +E[1][1], S) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, S.constrain = function(E) {
    return arguments.length ? (n = E, S) : n;
  }, S.duration = function(E) {
    return arguments.length ? (a = +E, S) : a;
  }, S.interpolate = function(E) {
    return arguments.length ? (l = E, S) : l;
  }, S.on = function() {
    var E = u.on.apply(u, arguments);
    return E === u ? S : E;
  }, S.clickDistance = function(E) {
    return arguments.length ? (C = (E = +E) * E, S) : Math.sqrt(C);
  }, S.tapDistance = function(E) {
    return arguments.length ? (_ = +E, S) : _;
  }, S;
}
const Eo = {
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
}, hi = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
];
var nr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(nr || (nr = {}));
var Yn;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(Yn || (Yn = {}));
var vi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(vi || (vi = {}));
const Ts = {
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
var br;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(br || (br = {}));
var go;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(go || (go = {}));
var Ee;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(Ee || (Ee = {}));
const sl = {
  [Ee.Left]: Ee.Right,
  [Ee.Right]: Ee.Left,
  [Ee.Top]: Ee.Bottom,
  [Ee.Bottom]: Ee.Top
};
function l0(e, t) {
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
function al(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t != null && t.has(i) || r.push(o);
  }), r.length && n(r);
}
function u0(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const c0 = (e) => "id" in e && "source" in e && "target" in e, d0 = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), la = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), So = (e, t = [0, 0]) => {
  const { width: n, height: r } = qn(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, f0 = (e, t = { nodeOrigin: [0, 0], nodeLookup: void 0 }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : la(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? pi(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Yi(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Xi(n);
}, $o = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = pi(r);
      n = Yi(n, o);
    }
  }), Xi(n);
}, tc = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...Po(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: f = !0, hidden: d = !1 } = u;
    if (s && !f || d)
      continue;
    const g = c.width ?? u.width ?? u.initialWidth ?? null, v = c.height ?? u.height ?? u.initialHeight ?? null, C = ho(a, Vr(u)), _ = (g ?? 0) * (v ?? 0), S = i && C > 0;
    (!u.internals.handleBounds || S || C >= _ || u.dragging) && l.push(u);
  }
  return l;
}, As = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function ll(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && ((t == null ? void 0 : t.includeHiddenNodes) || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function ul({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!1);
  const a = $o(e), l = ca(a, t, n, (s == null ? void 0 : s.minZoom) ?? o, (s == null ? void 0 : s.maxZoom) ?? i, (s == null ? void 0 : s.padding) ?? 0.1);
  return await r.setViewport(l, { duration: s == null ? void 0 : s.duration }), Promise.resolve(!0);
}
function g0({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: u } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, c = s.origin ?? r;
  let f = o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i == null || i("005", Eo.error005());
    else {
      const g = a.measured.width, v = a.measured.height;
      g && v && (f = [
        [l, u],
        [l + g, u + v]
      ]);
    }
  else a && Dr(s.extent) && (f = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const d = Dr(f) ? rr(t, f, s.measured) : t;
  return {
    position: {
      x: d.x - l + s.measured.width * c[0],
      y: d.y - u + s.measured.height * c[1]
    },
    positionAbsolute: d
  };
}
async function nc({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
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
const Or = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), rr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Or(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: Or(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function rc(e, t, n) {
  const { width: r, height: o } = qn(n), { x: i, y: s } = n.internals.positionAbsolute;
  return rr(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const cl = (e, t, n) => e < t ? Or(Math.abs(e - t), 1, t) / t : e > n ? -Or(Math.abs(e - n), 1, t) / t : 0, oc = (e, t, n = 15, r = 40) => {
  const o = cl(e.x, r, t.width - r) * n, i = cl(e.y, r, t.height - r) * n;
  return [o, i];
}, Yi = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Hs = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Xi = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Vr = (e, t = [0, 0]) => {
  var o, i;
  const { x: n, y: r } = la(e) ? e.internals.positionAbsolute : So(e, t);
  return {
    x: n,
    y: r,
    width: ((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, pi = (e, t = [0, 0]) => {
  var o, i;
  const { x: n, y: r } = la(e) ? e.internals.positionAbsolute : So(e, t);
  return {
    x: n,
    y: r,
    x2: n + (((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, ic = (e, t) => Xi(Yi(Hs(e), Hs(t))), ho = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, dl = (e) => Cn(e.width) && Cn(e.height) && Cn(e.x) && Cn(e.y), Cn = (e) => !isNaN(e) && isFinite(e), h0 = (e, t) => {
}, ua = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Po = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? ua(a, s) : a;
}, sc = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
}), ca = (e, t, n, r, o, i) => {
  const s = t / (e.width * (1 + i)), a = n / (e.height * (1 + i)), l = Math.min(s, a), u = Or(l, r, o), c = e.x + e.width / 2, f = e.y + e.height / 2, d = t / 2 - c * u, g = n / 2 - f * u;
  return { x: d, y: g, zoom: u };
}, mi = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function Dr(e) {
  return e !== void 0 && e !== "parent";
}
function qn(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function ac(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function v0(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function rs(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = $n(e), a = Po({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: s - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? ua(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const da = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), p0 = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, m0 = ["INPUT", "SELECT", "TEXTAREA"];
function y0(e) {
  var r, o;
  const t = ((o = (r = e.composedPath) == null ? void 0 : r.call(e)) == null ? void 0 : o[0]) || e.target;
  return (t == null ? void 0 : t.nodeType) !== 1 ? !1 : m0.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const lc = (e) => "clientX" in e, $n = (e, t) => {
  var i, s;
  const n = lc(e), r = n ? e.clientX : (i = e.touches) == null ? void 0 : i[0].clientX, o = n ? e.clientY : (s = e.touches) == null ? void 0 : s[0].clientY;
  return {
    x: r - ((t == null ? void 0 : t.left) ?? 0),
    y: o - ((t == null ? void 0 : t.top) ?? 0)
  };
}, fl = (e, t, n, r, o) => {
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
function w0({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, c = Math.abs(l - e), f = Math.abs(u - t);
  return [l, u, c, f];
}
function Wo(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function gl({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case Ee.Left:
      return [t - Wo(t - r, i), n];
    case Ee.Right:
      return [t + Wo(r - t, i), n];
    case Ee.Top:
      return [t, n - Wo(n - o, i)];
    case Ee.Bottom:
      return [t, n + Wo(o - n, i)];
  }
}
function uc({ sourceX: e, sourceY: t, sourcePosition: n = Ee.Bottom, targetX: r, targetY: o, targetPosition: i = Ee.Top, curvature: s = 0.25 }) {
  const [a, l] = gl({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [u, c] = gl({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [f, d, g, v] = w0({
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
function cc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function _0({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const i = n || t.selected || e.selected, s = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (i ? s : 0);
}
function x0({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = Yi(pi(e), pi(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return ho(s, Xi(i)) > 0;
}
const b0 = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, C0 = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), k0 = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return c0(e) ? n = { ...e } : n = {
    ...e,
    id: b0(e)
  }, C0(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Os({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = cc({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const hl = {
  [Ee.Left]: { x: -1, y: 0 },
  [Ee.Right]: { x: 1, y: 0 },
  [Ee.Top]: { x: 0, y: -1 },
  [Ee.Bottom]: { x: 0, y: 1 }
}, E0 = ({ source: e, sourcePosition: t = Ee.Bottom, target: n }) => t === Ee.Left || t === Ee.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, vl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function S0({ source: e, sourcePosition: t = Ee.Bottom, target: n, targetPosition: r = Ee.Top, center: o, offset: i }) {
  const s = hl[t], a = hl[r], l = { x: e.x + s.x * i, y: e.y + s.y * i }, u = { x: n.x + a.x * i, y: n.y + a.y * i }, c = E0({
    source: l,
    sourcePosition: t,
    target: u
  }), f = c.x !== 0 ? "x" : "y", d = c[f];
  let g = [], v, C;
  const _ = { x: 0, y: 0 }, S = { x: 0, y: 0 }, [p, x, m, k] = cc({
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
    ], T = [
      { x: l.x, y: C },
      { x: u.x, y: C }
    ];
    s[f] === d ? g = f === "x" ? N : T : g = f === "x" ? T : N;
  } else {
    const N = [{ x: l.x, y: u.y }], T = [{ x: u.x, y: l.y }];
    if (f === "x" ? g = s.x === d ? T : N : g = s.y === d ? N : T, t === r) {
      const R = Math.abs(e[f] - n[f]);
      if (R <= i) {
        const E = Math.min(i - 1, i - R);
        s[f] === d ? _[f] = (l[f] > e[f] ? -1 : 1) * E : S[f] = (u[f] > n[f] ? -1 : 1) * E;
      }
    }
    if (t !== r) {
      const R = f === "x" ? "y" : "x", E = s[f] === a[R], M = l[R] > u[R], b = l[R] < u[R];
      (s[f] === 1 && (!E && M || E && b) || s[f] !== 1 && (!E && b || E && M)) && (g = f === "x" ? N : T);
    }
    const V = { x: l.x + _.x, y: l.y + _.y }, H = { x: u.x + S.x, y: u.y + S.y }, L = Math.max(Math.abs(V.x - g[0].x), Math.abs(H.x - g[0].x)), z = Math.max(Math.abs(V.y - g[0].y), Math.abs(H.y - g[0].y));
    L >= z ? (v = (V.x + H.x) / 2, C = g[0].y) : (v = g[0].x, C = (V.y + H.y) / 2);
  }
  return [[
    e,
    { x: l.x + _.x, y: l.y + _.y },
    ...g,
    { x: u.x + S.x, y: u.y + S.y },
    n
  ], v, C, m, k];
}
function $0(e, t, n, r) {
  const o = Math.min(vl(e, t) / 2, vl(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, c = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * c}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function yi({ sourceX: e, sourceY: t, sourcePosition: n = Ee.Bottom, targetX: r, targetY: o, targetPosition: i = Ee.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20 }) {
  const [c, f, d, g, v] = S0({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u
  });
  return [c.reduce((_, S, p) => {
    let x = "";
    return p > 0 && p < c.length - 1 ? x = $0(c[p - 1], S, c[p + 1], s) : x = `${p === 0 ? "M" : "L"}${S.x} ${S.y}`, _ += x, _;
  }, ""), f, d, g, v];
}
function pl(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function P0(e) {
  var f;
  const { sourceNode: t, targetNode: n } = e;
  if (!pl(t) || !pl(n))
    return null;
  const r = t.internals.handleBounds || ml(t.handles), o = n.internals.handleBounds || ml(n.handles), i = yl((r == null ? void 0 : r.source) ?? [], e.sourceHandle), s = yl(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === nr.Strict ? (o == null ? void 0 : o.target) ?? [] : ((o == null ? void 0 : o.target) ?? []).concat((o == null ? void 0 : o.source) ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return (f = e.onError) == null || f.call(e, "008", Eo.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = (i == null ? void 0 : i.position) || Ee.Bottom, l = (s == null ? void 0 : s.position) || Ee.Top, u = vo(t, i, a), c = vo(n, s, l);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: c.x,
    targetY: c.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function ml(e) {
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
function vo(e, t, n = Ee.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? qn(e);
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
function yl(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Vs(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function N0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
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
  nodeExtent: hi,
  elevateNodesOnSelect: !0,
  defaults: {}
}, T0 = {
  ...fa,
  checkEquality: !0
};
function ga(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function A0(e, t, n) {
  const r = ga(fa, n);
  for (const o of e.values())
    if (o.parentId)
      ha(o, e, t, r);
    else {
      const i = So(o, r.nodeOrigin), s = Dr(o.extent) ? o.extent : r.nodeExtent, a = rr(i, s, qn(o));
      o.internals.positionAbsolute = a;
    }
}
function dc(e, t, n, r) {
  var a, l;
  const o = ga(T0, r), i = new Map(t), s = o != null && o.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let c = i.get(u.id);
    if (o.checkEquality && u === (c == null ? void 0 : c.internals.userNode))
      t.set(u.id, c);
    else {
      const f = So(u, o.nodeOrigin), d = Dr(u.extent) ? u.extent : o.nodeExtent, g = rr(f, d, qn(u));
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
          z: fc(u, s),
          userNode: u
        }
      }, t.set(u.id, c);
    }
    u.parentId && ha(c, t, n, r);
  }
}
function H0(e, t) {
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
  H0(e, n);
  const u = o ? 1e3 : 0, { x: c, y: f, z: d } = O0(e, l, i, s, u), { positionAbsolute: g } = e.internals, v = c !== g.x || f !== g.y;
  (v || d !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: v ? { x: c, y: f } : g,
      z: d
    }
  });
}
function fc(e, t) {
  return (Cn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function O0(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = qn(e), l = So(e, n), u = Dr(e.extent) ? rr(l, e.extent, a) : l;
  let c = rr({ x: i + u.x, y: s + u.y }, r, a);
  e.extent === "parent" && (c = rc(c, a, t));
  const f = fc(e, o), d = t.internals.z ?? 0;
  return {
    x: c.x,
    y: c.y,
    z: d > f ? d : f
  };
}
function V0(e, t, n, r = [0, 0]) {
  var s;
  const o = [], i = /* @__PURE__ */ new Map();
  for (const a of e) {
    const l = t.get(a.parentId);
    if (!l)
      continue;
    const u = ((s = i.get(a.parentId)) == null ? void 0 : s.expandedRect) ?? Vr(l), c = ic(u, a.rect);
    i.set(a.parentId, { expandedRect: c, parent: l });
  }
  return i.size > 0 && i.forEach(({ expandedRect: a, parent: l }, u) => {
    var x;
    const c = l.internals.positionAbsolute, f = qn(l), d = l.origin ?? r, g = a.x < c.x ? Math.round(Math.abs(c.x - a.x)) : 0, v = a.y < c.y ? Math.round(Math.abs(c.y - a.y)) : 0, C = Math.max(f.width, Math.round(a.width)), _ = Math.max(f.height, Math.round(a.height)), S = (C - f.width) * d[0], p = (_ - f.height) * d[1];
    (g > 0 || v > 0 || S || p) && (o.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - g + S,
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
        width: C + (g ? d[0] * g - S : 0),
        height: _ + (v ? d[1] * v - p : 0)
      }
    });
  }), o;
}
function D0(e, t, n, r, o, i) {
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
    const v = da(d.nodeElement), C = g.measured.width !== v.width || g.measured.height !== v.height;
    if (!!(v.width && v.height && (C || !g.internals.handleBounds || d.force))) {
      const S = d.nodeElement.getBoundingClientRect(), p = Dr(g.extent) ? g.extent : i;
      let { positionAbsolute: x } = g.internals;
      g.parentId && g.extent === "parent" ? x = rc(x, v, t.get(g.parentId)) : p && (x = rr(x, p, v));
      const m = {
        ...g,
        measured: v,
        internals: {
          ...g.internals,
          positionAbsolute: x,
          handleBounds: {
            source: fl("source", d.nodeElement, S, c, g.id),
            target: fl("target", d.nodeElement, S, c, g.id)
          }
        }
      };
      t.set(g.id, m), g.parentId && ha(m, t, n, { nodeOrigin: o }), a = !0, C && (l.push({
        id: g.id,
        type: "dimensions",
        dimensions: v
      }), g.expandParent && g.parentId && f.push({
        id: g.id,
        parentId: g.parentId,
        rect: Vr(m, o)
      }));
    }
  }
  if (f.length > 0) {
    const d = V0(f, t, n, o);
    l.push(...d);
  }
  return { changes: l, updatedInternals: a };
}
async function L0({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function wl(e, t, n, r, o, i) {
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
function gc(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, c = `${i}-${a}--${o}-${s}`;
    wl("source", l, c, e, o, s), wl("target", l, u, e, i, a), t.set(r.id, r);
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
function hc(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : hc(n, t) : !1;
}
function _l(e, t, n) {
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
function I0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !hc(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function os({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
function R0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, c = null, f = !1, d = null, g = !1;
  function v({ noDragClassName: _, handleSelector: S, domNode: p, isSelectable: x, nodeId: m, nodeClickDistance: k = 0 }) {
    d = Bt(p);
    function P({ x: H, y: L }, z) {
      const { nodeLookup: R, nodeExtent: E, snapGrid: M, snapToGrid: b, nodeOrigin: $, onNodeDrag: A, onSelectionDrag: O, onError: B, updateNodePositions: X } = t();
      i = { x: H, y: L };
      let q = !1, ce = { x: 0, y: 0, x2: 0, y2: 0 };
      if (a.size > 1 && E) {
        const ee = $o(a);
        ce = Hs(ee);
      }
      for (const [ee, W] of a) {
        if (!R.has(ee))
          continue;
        let de = { x: H - W.distance.x, y: L - W.distance.y };
        b && (de = ua(de, M));
        let we = [
          [E[0][0], E[0][1]],
          [E[1][0], E[1][1]]
        ];
        if (a.size > 1 && E && !W.extent) {
          const { positionAbsolute: ge } = W.internals, se = ge.x - ce.x + E[0][0], Pe = ge.x + W.measured.width - ce.x2 + E[1][0], Ye = ge.y - ce.y + E[0][1], Ie = ge.y + W.measured.height - ce.y2 + E[1][1];
          we = [
            [se, Ye],
            [Pe, Ie]
          ];
        }
        const { position: xe, positionAbsolute: fe } = g0({
          nodeId: ee,
          nextPosition: de,
          nodeLookup: R,
          nodeExtent: we,
          nodeOrigin: $,
          onError: B
        });
        q = q || W.position.x !== xe.x || W.position.y !== xe.y, W.position = xe, W.internals.positionAbsolute = fe;
      }
      if (q && (X(a, !0), z && (r || A || !m && O))) {
        const [ee, W] = os({
          nodeId: m,
          dragItems: a,
          nodeLookup: R
        });
        r == null || r(z, a, ee, W), A == null || A(z, ee, W), m || O == null || O(z, W);
      }
    }
    async function N() {
      if (!c)
        return;
      const { transform: H, panBy: L, autoPanSpeed: z, autoPanOnNodeDrag: R } = t();
      if (!R) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [E, M] = oc(u, c, z);
      (E !== 0 || M !== 0) && (i.x = (i.x ?? 0) - E / H[2], i.y = (i.y ?? 0) - M / H[2], await L({ x: E, y: M }) && P(i, null)), s = requestAnimationFrame(N);
    }
    function T(H) {
      var q;
      const { nodeLookup: L, multiSelectionActive: z, nodesDraggable: R, transform: E, snapGrid: M, snapToGrid: b, selectNodesOnDrag: $, onNodeDragStart: A, onSelectionDragStart: O, unselectNodesAndEdges: B } = t();
      f = !0, (!$ || !x) && !z && m && ((q = L.get(m)) != null && q.selected || B()), x && $ && m && (e == null || e(m));
      const X = rs(H.sourceEvent, { transform: E, snapGrid: M, snapToGrid: b, containerBounds: c });
      if (i = X, a = I0(L, R, X, m), a.size > 0 && (n || A || !m && O)) {
        const [ce, ee] = os({
          nodeId: m,
          dragItems: a,
          nodeLookup: L
        });
        n == null || n(H.sourceEvent, a, ce, ee), A == null || A(H.sourceEvent, ce, ee), m || O == null || O(H.sourceEvent, ee);
      }
    }
    const V = yh().clickDistance(k).on("start", (H) => {
      const { domNode: L, nodeDragThreshold: z, transform: R, snapGrid: E, snapToGrid: M } = t();
      c = (L == null ? void 0 : L.getBoundingClientRect()) || null, g = !1, z === 0 && T(H), i = rs(H.sourceEvent, { transform: R, snapGrid: E, snapToGrid: M, containerBounds: c }), u = $n(H.sourceEvent, c);
    }).on("drag", (H) => {
      const { autoPanOnNodeDrag: L, transform: z, snapGrid: R, snapToGrid: E, nodeDragThreshold: M, nodeLookup: b } = t(), $ = rs(H.sourceEvent, { transform: z, snapGrid: R, snapToGrid: E, containerBounds: c });
      if ((H.sourceEvent.type === "touchmove" && H.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      m && !b.has(m)) && (g = !0), !g) {
        if (!l && L && f && (l = !0, N()), !f) {
          const A = $.xSnapped - (i.x ?? 0), O = $.ySnapped - (i.y ?? 0);
          Math.sqrt(A * A + O * O) > M && T(H);
        }
        (i.x !== $.xSnapped || i.y !== $.ySnapped) && a && f && (u = $n(H.sourceEvent, c), P($, H.sourceEvent));
      }
    }).on("end", (H) => {
      if (!(!f || g) && (l = !1, f = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: L, updateNodePositions: z, onNodeDragStop: R, onSelectionDragStop: E } = t();
        if (z(a, !1), o || R || !m && E) {
          const [M, b] = os({
            nodeId: m,
            dragItems: a,
            nodeLookup: L,
            dragging: !1
          });
          o == null || o(H.sourceEvent, a, M, b), R == null || R(H.sourceEvent, M, b), m || E == null || E(H.sourceEvent, b);
        }
      }
    }).filter((H) => {
      const L = H.target;
      return !H.button && (!_ || !_l(L, `.${_}`, p)) && (!S || _l(L, S, p));
    });
    d.call(V);
  }
  function C() {
    d == null || d.on(".drag", null);
  }
  return {
    update: v,
    destroy: C
  };
}
function B0(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    ho(o, Vr(i)) > 0 && r.push(i);
  return r;
}
const Y0 = 250;
function X0(e, t, n, r) {
  var a, l;
  let o = [], i = 1 / 0;
  const s = B0(e, n, t + Y0);
  for (const u of s) {
    const c = [...((a = u.internals.handleBounds) == null ? void 0 : a.source) ?? [], ...((l = u.internals.handleBounds) == null ? void 0 : l.target) ?? []];
    for (const f of c) {
      if (r.nodeId === f.nodeId && r.type === f.type && r.id === f.id)
        continue;
      const { x: d, y: g } = vo(u, f, f.position, !0), v = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(g - e.y, 2));
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
function vc(e, t, n, r, o, i = !1) {
  var u, c, f;
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? (u = s.internals.handleBounds) == null ? void 0 : u[t] : [...((c = s.internals.handleBounds) == null ? void 0 : c.source) ?? [], ...((f = s.internals.handleBounds) == null ? void 0 : f.target) ?? []], l = (n ? a == null ? void 0 : a.find((d) => d.id === n) : a == null ? void 0 : a[0]) ?? null;
  return l && i ? { ...l, ...vo(s, l, l.position, !0) } : l;
}
function pc(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function W0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const mc = () => !0;
function F0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: f, panBy: d, cancelConnection: g, onConnectStart: v, onConnect: C, onConnectEnd: _, isValidConnection: S = mc, onReconnectEnd: p, updateConnection: x, getTransform: m, getFromHandle: k, autoPanSpeed: P }) {
  const N = p0(e.target);
  let T = 0, V;
  const { x: H, y: L } = $n(e), z = N == null ? void 0 : N.elementFromPoint(H, L), R = pc(i, z), E = a == null ? void 0 : a.getBoundingClientRect();
  if (!E || !R)
    return;
  const M = vc(o, R, r, l, t);
  if (!M)
    return;
  let b = $n(e, E), $ = !1, A = null, O = !1, B = null;
  function X() {
    if (!c || !E)
      return;
    const [fe, ge] = oc(b, E, P);
    d({ x: fe, y: ge }), T = requestAnimationFrame(X);
  }
  const q = {
    ...M,
    nodeId: o,
    type: R,
    position: M.position
  }, ce = l.get(o), W = {
    inProgress: !0,
    isValid: null,
    from: vo(ce, q, Ee.Left, !0),
    fromHandle: q,
    fromPosition: q.position,
    fromNode: ce,
    to: b,
    toHandle: null,
    toPosition: sl[q.position],
    toNode: null
  };
  x(W);
  let de = W;
  v == null || v(e, { nodeId: o, handleId: r, handleType: R });
  function we(fe) {
    if (!k() || !q) {
      xe(fe);
      return;
    }
    const ge = m();
    b = $n(fe, E), V = X0(Po(b, ge, !1, [1, 1]), n, l, q), $ || (X(), $ = !0);
    const se = yc(fe, {
      handle: V,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: S,
      doc: N,
      lib: u,
      flowId: f,
      nodeLookup: l
    });
    B = se.handleDomNode, A = se.connection, O = W0(!!V, se.isValid);
    const Pe = {
      // from stays the same
      ...de,
      isValid: O,
      to: V && O ? sc({ x: V.x, y: V.y }, ge) : b,
      toHandle: se.toHandle,
      toPosition: O && se.toHandle ? se.toHandle.position : sl[q.position],
      toNode: se.toHandle ? l.get(se.toHandle.nodeId) : null
    };
    O && V && de.toHandle && Pe.toHandle && de.toHandle.type === Pe.toHandle.type && de.toHandle.nodeId === Pe.toHandle.nodeId && de.toHandle.id === Pe.toHandle.id && de.to.x === Pe.to.x && de.to.y === Pe.to.y || (x(Pe), de = Pe);
  }
  function xe(fe) {
    (V || B) && A && O && (C == null || C(A));
    const { inProgress: ge, ...se } = de, Pe = {
      ...se,
      toPosition: de.toHandle ? de.toPosition : null
    };
    _ == null || _(fe, Pe), i && (p == null || p(fe, Pe)), g(), cancelAnimationFrame(T), $ = !1, O = !1, A = null, B = null, N.removeEventListener("mousemove", we), N.removeEventListener("mouseup", xe), N.removeEventListener("touchmove", we), N.removeEventListener("touchend", xe);
  }
  N.addEventListener("mousemove", we), N.addEventListener("mouseup", xe), N.addEventListener("touchmove", we), N.addEventListener("touchend", xe);
}
function yc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = mc, nodeLookup: c }) {
  const f = i === "target", d = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: g, y: v } = $n(e), C = s.elementFromPoint(g, v), _ = C != null && C.classList.contains(`${a}-flow__handle`) ? C : d, S = {
    handleDomNode: _,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (_) {
    const p = pc(void 0, _), x = _.getAttribute("data-nodeid"), m = _.getAttribute("data-handleid"), k = _.classList.contains("connectable"), P = _.classList.contains("connectableend");
    if (!x || !p)
      return S;
    const N = {
      source: f ? x : r,
      sourceHandle: f ? m : o,
      target: f ? r : x,
      targetHandle: f ? o : m
    };
    S.connection = N;
    const V = k && P && (n === nr.Strict ? f && p === "source" || !f && p === "target" : x !== r || m !== o);
    S.isValid = V && u(N), S.toHandle = vc(x, p, m, c, n, !1);
  }
  return S;
}
const K0 = {
  onPointerDown: F0,
  isValid: yc
};
function Z0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Bt(e);
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
    }, S = (x) => {
      const m = n();
      if (x.sourceEvent.type !== "mousemove" && x.sourceEvent.type !== "touchmove" || !t)
        return;
      const k = [
        x.sourceEvent.clientX ?? x.sourceEvent.touches[0].clientX,
        x.sourceEvent.clientY ?? x.sourceEvent.touches[0].clientY
      ], P = [k[0] - C[0], k[1] - C[1]];
      C = k;
      const N = r() * Math.max(m[2], Math.log(m[2])) * (g ? -1 : 1), T = {
        x: m[0] - P[0] * N,
        y: m[1] - P[1] * N
      }, V = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: T.x,
        y: T.y,
        zoom: m[2]
      }, V, a);
    }, p = ec().on("start", _).on("zoom", f ? S : null).on("zoom.wheel", d ? v : null);
    o.call(p, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: qt
  };
}
const q0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Wi = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), is = ({ x: e, y: t, zoom: n }) => Bi.translate(e, t).scale(n), pr = (e, t) => e.target.closest(`.${t}`), wc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), ss = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, _c = (e) => {
  const t = e.ctrlKey && mi() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function U0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (pr(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const f = n.property("__zoom").k || 1;
    if (c.ctrlKey && s) {
      const _ = qt(c), S = _c(c), p = f * Math.pow(2, S);
      r.scaleTo(n, p, _, c);
      return;
    }
    const d = c.deltaMode === 1 ? 20 : 1;
    let g = o === Yn.Vertical ? 0 : c.deltaX * d, v = o === Yn.Horizontal ? 0 : c.deltaY * d;
    !mi() && c.shiftKey && o !== Yn.Vertical && (g = c.deltaY * d, v = 0), r.translateBy(
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
function G0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    if (!t && r.type === "wheel" && !r.ctrlKey || pr(r, e))
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function j0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var i, s, a;
    if ((i = r.sourceEvent) != null && i.internal)
      return;
    const o = Wi(r.transform);
    e.mouseButton = ((s = r.sourceEvent) == null ? void 0 : s.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, ((a = r.sourceEvent) == null ? void 0 : a.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, o));
  };
}
function J0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var s, a;
    e.usedRightMouseButton = !!(n && wc(t, e.mouseButton ?? 0)), (s = i.sourceEvent) != null && s.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((a = i.sourceEvent) != null && a.internal) && (o == null || o(i.sourceEvent, Wi(i.transform)));
  };
}
function Q0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    var a;
    if (!((a = s.sourceEvent) != null && a.internal) && (e.isZoomingOrPanning = !1, i && wc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && q0(e.prevViewport, s.transform))) {
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
function ep({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: u }) {
  return (c) => {
    var v;
    const f = e || t, d = n && c.ctrlKey;
    if (c.button === 1 && c.type === "mousedown" && (pr(c, `${u}-flow__node`) || pr(c, `${u}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || s || pr(c, a) && c.type === "wheel" || pr(c, l) && (c.type !== "wheel" || o && c.type === "wheel" && !e) || !n && c.ctrlKey && c.type === "wheel")
      return !1;
    if (!n && c.type === "touchstart" && ((v = c.touches) == null ? void 0 : v.length) > 1)
      return c.preventDefault(), !1;
    if (!f && !o && !d && c.type === "wheel" || !r && (c.type === "mousedown" || c.type === "touchstart") || Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
      return !1;
    const g = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || c.type === "wheel") && g;
  };
}
function tp({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: s, onPanZoomStart: a, onPanZoomEnd: l, onDraggingChange: u }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, f = e.getBoundingClientRect(), d = ec().clickDistance(!Cn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), g = Bt(e).call(d);
  x({
    x: i.x,
    y: i.y,
    zoom: Or(i.zoom, t, n)
  }, [
    [0, 0],
    [f.width, f.height]
  ], o);
  const v = g.on("wheel.zoom"), C = g.on("dblclick.zoom");
  d.wheelDelta(_c);
  function _(z, R) {
    return g ? new Promise((E) => {
      d == null || d.transform(ss(g, R == null ? void 0 : R.duration, () => E(!0)), z);
    }) : Promise.resolve(!1);
  }
  function S({ noWheelClassName: z, noPanClassName: R, onPaneContextMenu: E, userSelectionActive: M, panOnScroll: b, panOnDrag: $, panOnScrollMode: A, panOnScrollSpeed: O, preventScrolling: B, zoomOnPinch: X, zoomOnScroll: q, zoomOnDoubleClick: ce, zoomActivationKeyPressed: ee, lib: W, onTransformChange: de }) {
    M && !c.isZoomingOrPanning && p();
    const xe = b && !ee && !M ? U0({
      zoomPanValues: c,
      noWheelClassName: z,
      d3Selection: g,
      d3Zoom: d,
      panOnScrollMode: A,
      panOnScrollSpeed: O,
      zoomOnPinch: X,
      onPanZoomStart: a,
      onPanZoom: s,
      onPanZoomEnd: l
    }) : G0({
      noWheelClassName: z,
      preventScrolling: B,
      d3ZoomHandler: v
    });
    if (g.on("wheel.zoom", xe, { passive: !1 }), !M) {
      const ge = j0({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: a
      });
      d.on("start", ge);
      const se = J0({
        zoomPanValues: c,
        panOnDrag: $,
        onPaneContextMenu: !!E,
        onPanZoom: s,
        onTransformChange: de
      });
      d.on("zoom", se);
      const Pe = Q0({
        zoomPanValues: c,
        panOnDrag: $,
        panOnScroll: b,
        onPaneContextMenu: E,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      d.on("end", Pe);
    }
    const fe = ep({
      zoomActivationKeyPressed: ee,
      panOnDrag: $,
      zoomOnScroll: q,
      panOnScroll: b,
      zoomOnDoubleClick: ce,
      zoomOnPinch: X,
      userSelectionActive: M,
      noPanClassName: R,
      noWheelClassName: z,
      lib: W
    });
    d.filter(fe), ce ? g.on("dblclick.zoom", C) : g.on("dblclick.zoom", null);
  }
  function p() {
    d.on("zoom", null);
  }
  async function x(z, R, E) {
    const M = is(z), b = d == null ? void 0 : d.constrain()(M, R, E);
    return b && await _(b), new Promise(($) => $(b));
  }
  async function m(z, R) {
    const E = is(z);
    return await _(E, R), new Promise((M) => M(E));
  }
  function k(z) {
    if (g) {
      const R = is(z), E = g.property("__zoom");
      (E.k !== z.zoom || E.x !== z.x || E.y !== z.y) && (d == null || d.transform(g, R, null, { sync: !0 }));
    }
  }
  function P() {
    const z = g ? Qu(g.node()) : { x: 0, y: 0, k: 1 };
    return { x: z.x, y: z.y, zoom: z.k };
  }
  function N(z, R) {
    return g ? new Promise((E) => {
      d == null || d.scaleTo(ss(g, R == null ? void 0 : R.duration, () => E(!0)), z);
    }) : Promise.resolve(!1);
  }
  function T(z, R) {
    return g ? new Promise((E) => {
      d == null || d.scaleBy(ss(g, R == null ? void 0 : R.duration, () => E(!0)), z);
    }) : Promise.resolve(!1);
  }
  function V(z) {
    d == null || d.scaleExtent(z);
  }
  function H(z) {
    d == null || d.translateExtent(z);
  }
  function L(z) {
    const R = !Cn(z) || z < 0 ? 0 : z;
    d == null || d.clickDistance(R);
  }
  return {
    update: S,
    destroy: p,
    setViewport: m,
    setViewportConstrained: x,
    getViewport: P,
    scaleTo: N,
    scaleBy: T,
    setScaleExtent: V,
    setTranslateExtent: H,
    syncViewport: k,
    setClickDistance: L
  };
}
var xl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(xl || (xl = {}));
var np = /* @__PURE__ */ re('<div role="button" tabindex="-1"><!></div>');
function or(e, t) {
  he(t, !1);
  const [n, r] = Qe(), o = () => j(ce, "$connectable", n), i = () => j(xe, "$connectionRadius", n), s = () => j(de, "$domNode", n), a = () => j(we, "$nodeLookup", n), l = () => j(W, "$connectionMode", n), u = () => j(se, "$lib", n), c = () => j(le, "$autoPanOnConnect", n), f = () => j(Re, "$flowId", n), d = () => j(ge, "$isValidConnectionStore", n), g = () => j(Ye, "$onedgecreate", n), v = () => j(Ke, "$onConnectAction", n), C = () => j(He, "$onConnectStartAction", n), _ = () => j(et, "$onConnectEndAction", n), S = () => j(fe, "$viewport", n), p = () => j(ut, "$connection", n), x = () => j(oe, "$edges", n), m = () => j(me, "$connectionLookup", n), k = te(), P = te(), N = te(), T = te(), V = te(), H = te(), L = te(), z = te();
  let R = w(t, "id", 12, void 0), E = w(t, "type", 12, "source"), M = w(t, "position", 28, () => Ee.Top), b = w(t, "style", 12, void 0), $ = w(t, "isValidConnection", 12, void 0), A = w(t, "onconnect", 12, void 0), O = w(t, "ondisconnect", 12, void 0), B = w(t, "isConnectable", 12, void 0), X = w(t, "class", 12, void 0);
  const q = er("svelteflow__node_id"), ce = er("svelteflow__node_connectable"), ee = Ge(), {
    connectionMode: W,
    domNode: de,
    nodeLookup: we,
    connectionRadius: xe,
    viewport: fe,
    isValidConnection: ge,
    lib: se,
    addEdge: Pe,
    onedgecreate: Ye,
    panBy: Ie,
    cancelConnection: Fe,
    updateConnection: Q,
    autoPanOnConnect: le,
    edges: oe,
    connectionLookup: me,
    onconnect: Ke,
    onconnectstart: He,
    onconnectend: et,
    flowId: Re,
    connection: ut
  } = ee;
  function tt(Ne) {
    const lt = lc(Ne);
    (lt && Ne.button === 0 || !lt) && K0.onPointerDown(Ne, {
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
      isValidConnection: $() ?? d(),
      updateConnection: Q,
      cancelConnection: Fe,
      panBy: Ie,
      onConnect: (be) => {
        var at;
        const Ve = g() ? g()(be) : be;
        Ve && (Pe(Ve), (at = v()) == null || at(be));
      },
      onConnectStart: (be, Ve) => {
        var at;
        (at = C()) == null || at(be, {
          nodeId: Ve.nodeId,
          handleId: Ve.handleId,
          handleType: Ve.handleType
        });
      },
      onConnectEnd: (be, Ve) => {
        var at;
        (at = _()) == null || at(be, Ve);
      },
      getTransform: () => [
        S().x,
        S().y,
        S().zoom
      ],
      getFromHandle: () => p().fromHandle
    });
  }
  let J = te(null), Me = te();
  ue(() => U(E()), () => {
    G(k, E() === "target");
  }), ue(
    () => (U(B()), o()),
    () => {
      G(P, B() !== void 0 ? B() : o());
    }
  ), ue(() => U(R()), () => {
    G(N, R() || null);
  }), ue(
    () => (U(A()), U(O()), x(), m(), U(E()), U(R())),
    () => {
      (A() || O()) && (x(), G(Me, m().get(`${q}-${E()}${R() ? `-${R()}` : ""}`)));
    }
  ), ue(
    () => (h(J), h(Me), U(O()), U(A())),
    () => {
      if (h(J) && !l0(h(Me), h(J))) {
        const Ne = h(Me) ?? /* @__PURE__ */ new Map();
        al(h(J), Ne, O()), al(Ne, h(J), A());
      }
      G(J, h(Me) ?? /* @__PURE__ */ new Map());
    }
  ), ue(() => p(), () => {
    G(T, !!p().fromHandle);
  }), ue(
    () => (p(), U(E()), h(N)),
    () => {
      var Ne, lt, be;
      G(V, ((Ne = p().fromHandle) == null ? void 0 : Ne.nodeId) === q && ((lt = p().fromHandle) == null ? void 0 : lt.type) === E() && ((be = p().fromHandle) == null ? void 0 : be.id) === h(N));
    }
  ), ue(
    () => (p(), U(E()), h(N)),
    () => {
      var Ne, lt, be;
      G(H, ((Ne = p().toHandle) == null ? void 0 : Ne.nodeId) === q && ((lt = p().toHandle) == null ? void 0 : lt.type) === E() && ((be = p().toHandle) == null ? void 0 : be.id) === h(N));
    }
  ), ue(
    () => (l(), p(), U(E()), h(N)),
    () => {
      var Ne, lt, be;
      G(L, l() === nr.Strict ? ((Ne = p().fromHandle) == null ? void 0 : Ne.type) !== E() : q !== ((lt = p().fromHandle) == null ? void 0 : lt.nodeId) || h(N) !== ((be = p().fromHandle) == null ? void 0 : be.id));
    }
  ), ue(() => (h(H), p()), () => {
    G(z, h(H) && p().isValid);
  }), gt(), Te();
  var ne = np();
  ae(ne, "data-nodeid", q);
  var yn = Z(ne);
  vt(yn, t, "default", {}), K(ne), $e(
    (Ne) => {
      ae(ne, "data-handleid", h(N)), ae(ne, "data-handlepos", M()), ae(ne, "data-id", `${f() ?? ""}-${q ?? ""}-${R() || ""}-${E() ?? ""}`), Tr(ne, pn(Ne)), ae(ne, "style", b()), rt(ne, "valid", h(z)), rt(ne, "connectingto", h(H)), rt(ne, "connectingfrom", h(V)), rt(ne, "source", !h(k)), rt(ne, "target", h(k)), rt(ne, "connectablestart", h(P)), rt(ne, "connectableend", h(P)), rt(ne, "connectable", h(P)), rt(ne, "connectionindicator", h(P) && (!h(T) || h(L)));
    },
    [
      () => bt([
        "svelte-flow__handle",
        `svelte-flow__handle-${M()}`,
        "nodrag",
        "nopan",
        M(),
        X()
      ])
    ],
    pe
  ), qe("mousedown", ne, tt), qe("touchstart", ne, tt), D(e, ne);
  var Ft = ve({
    get id() {
      return R();
    },
    set id(Ne) {
      R(Ne), y();
    },
    get type() {
      return E();
    },
    set type(Ne) {
      E(Ne), y();
    },
    get position() {
      return M();
    },
    set position(Ne) {
      M(Ne), y();
    },
    get style() {
      return b();
    },
    set style(Ne) {
      b(Ne), y();
    },
    get isValidConnection() {
      return $();
    },
    set isValidConnection(Ne) {
      $(Ne), y();
    },
    get onconnect() {
      return A();
    },
    set onconnect(Ne) {
      A(Ne), y();
    },
    get ondisconnect() {
      return O();
    },
    set ondisconnect(Ne) {
      O(Ne), y();
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
  return r(), Ft;
}
ie(
  or,
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
var rp = /* @__PURE__ */ re("<!> <!>", 1);
function wi(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  nt(n, ["data", "targetPosition", "sourcePosition"]), he(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "targetPosition", 12, void 0), i = w(t, "sourcePosition", 12, void 0);
  Te();
  var s = rp(), a = _e(s);
  const l = /* @__PURE__ */ pe(() => o() ?? Ee.Top);
  or(a, {
    type: "target",
    get position() {
      return h(l);
    }
  });
  var u = Y(a), c = Y(u);
  const f = /* @__PURE__ */ pe(() => i() ?? Ee.Bottom);
  return or(c, {
    type: "source",
    get position() {
      return h(f);
    }
  }), $e(() => {
    var d;
    return vn(u, ` ${((d = r()) == null ? void 0 : d.label) ?? ""} `);
  }), D(e, s), ve({
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
var op = /* @__PURE__ */ re(" <!>", 1);
function xc(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  nt(n, ["data", "sourcePosition"]), he(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "sourcePosition", 12, void 0);
  Te(), ze();
  var i = op(), s = _e(i), a = Y(s);
  const l = /* @__PURE__ */ pe(() => o() ?? Ee.Bottom);
  return or(a, {
    type: "source",
    get position() {
      return h(l);
    }
  }), $e(() => {
    var u;
    return vn(s, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
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
ie(xc, { data: {}, sourcePosition: {} }, [], [], !0);
var ip = /* @__PURE__ */ re(" <!>", 1);
function bc(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  nt(n, ["data", "targetPosition"]), he(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "targetPosition", 12, void 0);
  Te(), ze();
  var i = ip(), s = _e(i), a = Y(s);
  const l = /* @__PURE__ */ pe(() => o() ?? Ee.Top);
  return or(a, {
    type: "target",
    get position() {
      return h(l);
    }
  }), $e(() => {
    var u;
    return vn(s, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
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
ie(bc, { data: {}, targetPosition: {} }, [], [], !0);
function Cc(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  nt(n, []);
}
ie(Cc, {}, [], [], !0);
function bl(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function Cr(e, { target: t, domNode: n }) {
  return bl(e, n, t), {
    async update({ target: r, domNode: o }) {
      bl(e, o, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var sp = /* @__PURE__ */ re("<div><!></div>");
function kc(e, t) {
  he(t, !1);
  const [n, r] = Qe(), o = () => j(i, "$domNode", n), { domNode: i } = Ge();
  Te();
  var s = sp(), a = Z(s);
  vt(a, t, "default", {}), K(s), ht(s, (l, u) => Cr == null ? void 0 : Cr(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), D(e, s), ve(), r();
}
ie(kc, {}, ["default"], [], !0);
function Ec() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: i, elementsSelectable: s } = Ge();
  return (a) => {
    const l = F(e).get(a);
    if (!l) {
      console.warn("012", Eo.error012(a));
      return;
    }
    (l.selectable || F(s) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && F(r) && i({ nodes: [], edges: [l] }) : o([a]));
  };
}
var ap = /* @__PURE__ */ re('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function Sc(e, t) {
  he(t, !1);
  let n = w(t, "style", 12, void 0), r = w(t, "x", 12, void 0), o = w(t, "y", 12, void 0);
  const i = Ec(), s = er("svelteflow__edge_id");
  return Te(), kc(e, {
    children: (a, l) => {
      var u = ap(), c = Z(u);
      vt(c, t, "default", {}), K(u), $e(() => {
        ae(u, "style", "pointer-events: all;" + n()), st(u, "transform", `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`);
      }), qe("keyup", u, () => {
      }), qe("click", u, () => {
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
ie(Sc, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var lp = /* @__PURE__ */ Se('<path fill="none" class="svelte-flow__edge-interaction"></path>'), up = /* @__PURE__ */ Se('<path fill="none"></path><!><!>', 1);
function No(e, t) {
  he(t, !1);
  let n = w(t, "id", 12, void 0), r = w(t, "path", 12), o = w(t, "label", 12, void 0), i = w(t, "labelX", 12, void 0), s = w(t, "labelY", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "markerStart", 12, void 0), u = w(t, "markerEnd", 12, void 0), c = w(t, "style", 12, void 0), f = w(t, "interactionWidth", 12, 20), d = w(t, "class", 12, void 0), g = f() === void 0 ? 20 : f();
  Te();
  var v = up(), C = _e(v), _ = Y(C);
  {
    var S = (m) => {
      var k = lp();
      ae(k, "stroke-opacity", 0), ae(k, "stroke-width", g), $e(() => ae(k, "d", r())), D(m, k);
    };
    Ce(_, (m) => {
      g && m(S);
    });
  }
  var p = Y(_);
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
          ze();
          var N = je();
          $e(() => vn(N, o())), D(k, N);
        },
        $$slots: { default: !0 }
      });
    };
    Ce(p, (m) => {
      o() && m(x);
    });
  }
  return $e(
    (m) => {
      ae(C, "id", n()), ae(C, "d", r()), ur(C, pn(m)), ae(C, "marker-start", l()), ae(C, "marker-end", u()), ae(C, "style", c());
    },
    [
      () => bt(["svelte-flow__edge-path", d()])
    ],
    pe
  ), D(e, v), ve({
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
ie(
  No,
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
function _i(e, t) {
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
  ]), he(t, !1);
  const r = te(), o = te(), i = te();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), g = w(t, "sourceY", 12), v = w(t, "sourcePosition", 12), C = w(t, "targetX", 12), _ = w(t, "targetY", 12), S = w(t, "targetPosition", 12);
  return ue(
    () => (h(r), h(o), h(i), U(d()), U(g()), U(C()), U(_()), U(v()), U(S())),
    () => {
      ((p) => (G(r, p[0]), G(o, p[1]), G(i, p[2])))(uc({
        sourceX: d(),
        sourceY: g(),
        targetX: C(),
        targetY: _(),
        sourcePosition: v(),
        targetPosition: S()
      }));
    }
  ), gt(), Te(), No(e, {
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
  }), ve({
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
      return S();
    },
    set targetPosition(p) {
      S(p), y();
    }
  });
}
ie(
  _i,
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
  ]), he(t, !1);
  const r = te(), o = te(), i = te();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), g = w(t, "sourceY", 12), v = w(t, "sourcePosition", 12), C = w(t, "targetX", 12), _ = w(t, "targetY", 12), S = w(t, "targetPosition", 12);
  return ue(
    () => (h(r), h(o), h(i), U(d()), U(g()), U(C()), U(_()), U(v()), U(S())),
    () => {
      ((p) => (G(r, p[0]), G(o, p[1]), G(i, p[2])))(yi({
        sourceX: d(),
        sourceY: g(),
        targetX: C(),
        targetY: _(),
        sourcePosition: v(),
        targetPosition: S()
      }));
    }
  ), gt(), Te(), No(e, {
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
  }), ve({
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
      return S();
    },
    set targetPosition(p) {
      S(p), y();
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
function Pc(e, t) {
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
  ]), he(t, !1);
  const r = te(), o = te(), i = te();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), g = w(t, "sourceY", 12), v = w(t, "targetX", 12), C = w(t, "targetY", 12);
  return ue(
    () => (h(r), h(o), h(i), U(d()), U(g()), U(v()), U(C())),
    () => {
      ((_) => (G(r, _[0]), G(o, _[1]), G(i, _[2])))(Os({
        sourceX: d(),
        sourceY: g(),
        targetX: v(),
        targetY: C()
      }));
    }
  ), gt(), Te(), No(e, {
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
  }), ve({
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
ie(
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
    targetX: {},
    targetY: {}
  },
  [],
  [],
  !0
);
function Nc(e, t) {
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
  ]), he(t, !1);
  const r = te(), o = te(), i = te();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), g = w(t, "sourceY", 12), v = w(t, "sourcePosition", 12), C = w(t, "targetX", 12), _ = w(t, "targetY", 12), S = w(t, "targetPosition", 12);
  return ue(
    () => (h(r), h(o), h(i), U(d()), U(g()), U(C()), U(_()), U(v()), U(S())),
    () => {
      ((p) => (G(r, p[0]), G(o, p[1]), G(i, p[2])))(yi({
        sourceX: d(),
        sourceY: g(),
        targetX: C(),
        targetY: _(),
        sourcePosition: v(),
        targetPosition: S(),
        borderRadius: 0
      }));
    }
  ), gt(), Te(), No(e, {
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
  }), ve({
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
      return S();
    },
    set targetPosition(p) {
      S(p), y();
    }
  });
}
ie(
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
    sourcePosition: {},
    targetX: {},
    targetY: {},
    targetPosition: {}
  },
  [],
  [],
  !0
);
function cp(e, t) {
  const n = e.set, r = t.set, o = F(e), i = F(t);
  let a = o.length === 0 && i.length > 0 ? i : o;
  e.set(a);
  const l = (u) => {
    const c = n(u);
    return a = c, r(a), c;
  };
  e.set = t.set = l, e.update = t.update = (u) => l(u(a));
}
function dp(e, t) {
  const n = e.set, r = t.set;
  let o = F(t);
  e.set(o);
  const i = (s) => {
    n(s), r(s), o = s;
  };
  e.set = t.set = i, e.update = t.update = (s) => i(s(o));
}
const fp = (e, t, n) => {
  if (!n)
    return;
  const r = F(e), o = t.set, i = n.set;
  let s = n ? F(n) : { x: 0, y: 0, zoom: 1 };
  t.set(s), t.set = (a) => (o(a), i(a), s = a, a), n.set = (a) => (r == null || r.syncViewport(a), o(a), i(a), s = a, a), t.update = (a) => {
    t.set(a(s));
  }, n.update = (a) => {
    n.set(a(s));
  };
}, gp = (e, t, n, r = [0, 0], o = hi) => {
  const { subscribe: i, set: s, update: a } = ye([]);
  let l = e, u = {}, c = !0;
  const f = (C) => (dc(C, t, n, {
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
}, hp = (e, t, n, r) => {
  const { subscribe: o, set: i, update: s } = ye([]);
  let a = e, l = {};
  const u = (d) => {
    const g = l ? d.map((v) => ({ ...l, ...v })) : d;
    gc(t, n, g), a = g, i(a);
  }, c = (d) => u(d(a)), f = (d) => {
    l = d;
  };
  return u(a), {
    subscribe: o,
    set: u,
    update: c,
    setDefaultOptions: f
  };
}, Mc = {
  input: xc,
  output: bc,
  default: wi,
  group: Cc
}, Tc = {
  straight: Pc,
  smoothstep: $c,
  default: _i,
  step: Nc
}, vp = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) => {
  const a = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), f = i ?? [0, 0], d = s ?? hi;
  dc(e, a, l, {
    nodeExtent: d,
    nodeOrigin: f,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), gc(u, c, t);
  let g = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const v = $o(a, {
      filter: (C) => !!((C.width || C.initialWidth) && (C.height || C.initialHeight))
    });
    g = ca(v, n, r, 0.5, 2, 0.1);
  }
  return {
    flowId: ye(null),
    nodes: gp(e, a, l, f, d),
    nodeLookup: It(a),
    parentLookup: It(l),
    edgeLookup: It(c),
    visibleNodes: It([]),
    edges: hp(t, u, c),
    visibleEdges: It([]),
    connectionLookup: It(u),
    height: ye(500),
    width: ye(500),
    minZoom: ye(0.5),
    maxZoom: ye(2),
    nodeOrigin: ye(f),
    nodeDragThreshold: ye(1),
    nodeExtent: ye(d),
    translateExtent: ye(hi),
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
    selectionMode: ye(vi.Partial),
    nodeTypes: ye(Mc),
    edgeTypes: ye(Tc),
    viewport: ye(g),
    connectionMode: ye(nr.Strict),
    domNode: ye(null),
    connection: It(Ts),
    connectionLineType: ye(br.Bezier),
    connectionRadius: ye(20),
    isValidConnection: ye(() => !0),
    nodesDraggable: ye(!0),
    nodesConnectable: ye(!0),
    elementsSelectable: ye(!0),
    selectNodesOnDrag: ye(!0),
    markers: It([]),
    defaultMarkerColor: ye("#b1b1b7"),
    lib: It("svelte"),
    onlyRenderVisibleElements: ye(!1),
    onerror: ye(h0),
    ondelete: ye(void 0),
    onedgecreate: ye(void 0),
    onconnect: ye(void 0),
    onconnectstart: ye(void 0),
    onconnectend: ye(void 0),
    onbeforedelete: ye(void 0),
    nodesInitialized: ye(!1),
    edgesInitialized: ye(!1),
    viewportInitialized: ye(!1),
    initialized: It(!1)
  };
};
function pp(e) {
  const t = Bn([
    e.edges,
    e.nodes,
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.viewport,
    e.width,
    e.height
  ], ([n, , r, o, i, s, a]) => o && s && a ? n.filter((u) => {
    const c = r.get(u.source), f = r.get(u.target);
    return c && f && x0({
      sourceNode: c,
      targetNode: f,
      width: s,
      height: a,
      transform: [i.x, i.y, i.zoom]
    });
  }) : n);
  return Bn([t, e.nodes, e.nodeLookup, e.connectionMode, e.onerror], ([n, , r, o, i]) => n.reduce((a, l) => {
    const u = r.get(l.source), c = r.get(l.target);
    if (!u || !c)
      return a;
    const f = P0({
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
      zIndex: _0({
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
function mp(e) {
  return Bn([
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.width,
    e.height,
    e.viewport,
    e.nodes
  ], ([t, n, r, o, i]) => {
    const s = [i.x, i.y, i.zoom];
    return n ? tc(t, { x: 0, y: 0, width: r, height: o }, s, !0) : Array.from(t.values());
  });
}
const Fi = Symbol();
function Ac({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) {
  const a = vp({
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
      ...Mc,
      ...b
    });
  }
  function u(b) {
    a.edgeTypes.set({
      ...Tc,
      ...b
    });
  }
  function c(b) {
    const $ = F(a.edges);
    a.edges.set(k0(b, $));
  }
  const f = (b, $ = !1) => {
    var O;
    const A = F(a.nodeLookup);
    for (const [B, X] of b) {
      const q = (O = A.get(B)) == null ? void 0 : O.internals.userNode;
      q && (q.position = X.position, q.dragging = $);
    }
    a.nodes.update((B) => B);
  };
  function d(b) {
    var X, q, ce;
    const $ = F(a.nodeLookup), A = F(a.parentLookup), { changes: O, updatedInternals: B } = D0(b, $, F(a.parentLookup), F(a.domNode), F(a.nodeOrigin));
    if (B) {
      if (A0($, A, { nodeOrigin: i, nodeExtent: s }), !F(a.fitViewOnInitDone) && F(a.fitViewOnInit)) {
        const ee = F(a.fitViewOptions), W = v({
          ...ee,
          nodes: ee == null ? void 0 : ee.nodes
        });
        a.fitViewOnInitDone.set(W);
      }
      for (const ee of O) {
        const W = (X = $.get(ee.id)) == null ? void 0 : X.internals.userNode;
        if (W)
          switch (ee.type) {
            case "dimensions": {
              const de = { ...W.measured, ...ee.dimensions };
              ee.setAttributes && (W.width = ((q = ee.dimensions) == null ? void 0 : q.width) ?? W.width, W.height = ((ce = ee.dimensions) == null ? void 0 : ce.height) ?? W.height), W.measured = de;
              break;
            }
            case "position":
              W.position = ee.position ?? W.position;
              break;
          }
      }
      a.nodes.update((ee) => ee), F(a.nodesInitialized) || a.nodesInitialized.set(!0);
    }
  }
  function g(b) {
    const $ = F(a.panZoom), A = F(a.domNode);
    if (!$ || !A)
      return Promise.resolve(!1);
    const { width: O, height: B } = da(A), X = ll(F(a.nodeLookup), b);
    return ul({
      nodes: X,
      width: O,
      height: B,
      minZoom: F(a.minZoom),
      maxZoom: F(a.maxZoom),
      panZoom: $
    }, b);
  }
  function v(b) {
    const $ = F(a.panZoom);
    if (!$)
      return !1;
    const A = ll(F(a.nodeLookup), b);
    return ul({
      nodes: A,
      width: F(a.width),
      height: F(a.height),
      minZoom: F(a.minZoom),
      maxZoom: F(a.maxZoom),
      panZoom: $
    }, b), A.size > 0;
  }
  function C(b, $) {
    const A = F(a.panZoom);
    return A ? A.scaleBy(b, $) : Promise.resolve(!1);
  }
  function _(b) {
    return C(1.2, b);
  }
  function S(b) {
    return C(1 / 1.2, b);
  }
  function p(b) {
    const $ = F(a.panZoom);
    $ && ($.setScaleExtent([b, F(a.maxZoom)]), a.minZoom.set(b));
  }
  function x(b) {
    const $ = F(a.panZoom);
    $ && ($.setScaleExtent([F(a.minZoom), b]), a.maxZoom.set(b));
  }
  function m(b) {
    const $ = F(a.panZoom);
    $ && ($.setTranslateExtent(b), a.translateExtent.set(b));
  }
  function k(b) {
    let $ = !1;
    return b.forEach((A) => {
      A.selected && (A.selected = !1, $ = !0);
    }), $;
  }
  function P(b) {
    var $;
    ($ = F(a.panZoom)) == null || $.setClickDistance(b);
  }
  function N(b) {
    k((b == null ? void 0 : b.nodes) || F(a.nodes)) && a.nodes.set(F(a.nodes)), k((b == null ? void 0 : b.edges) || F(a.edges)) && a.edges.set(F(a.edges));
  }
  a.deleteKeyPressed.subscribe(async (b) => {
    var $;
    if (b) {
      const A = F(a.nodes), O = F(a.edges), B = A.filter((ee) => ee.selected), X = O.filter((ee) => ee.selected), { nodes: q, edges: ce } = await nc({
        nodesToRemove: B,
        edgesToRemove: X,
        nodes: A,
        edges: O,
        onBeforeDelete: F(a.onbeforedelete)
      });
      (q.length || ce.length) && (a.nodes.update((ee) => ee.filter((W) => !q.some((de) => de.id === W.id))), a.edges.update((ee) => ee.filter((W) => !ce.some((de) => de.id === W.id))), ($ = F(a.ondelete)) == null || $({
        nodes: q,
        edges: ce
      }));
    }
  });
  function T(b) {
    const $ = F(a.multiselectionKeyPressed);
    a.nodes.update((A) => A.map((O) => {
      const B = b.includes(O.id), X = $ && O.selected || B;
      return O.selected = X, O;
    })), $ || a.edges.update((A) => A.map((O) => (O.selected = !1, O)));
  }
  function V(b) {
    const $ = F(a.multiselectionKeyPressed);
    a.edges.update((A) => A.map((O) => {
      const B = b.includes(O.id), X = $ && O.selected || B;
      return O.selected = X, O;
    })), $ || a.nodes.update((A) => A.map((O) => (O.selected = !1, O)));
  }
  function H(b) {
    var A;
    const $ = (A = F(a.nodes)) == null ? void 0 : A.find((O) => O.id === b);
    if (!$) {
      console.warn("012", Eo.error012(b));
      return;
    }
    a.selectionRect.set(null), a.selectionRectMode.set(null), $.selected ? $.selected && F(a.multiselectionKeyPressed) && N({ nodes: [$], edges: [] }) : T([b]);
  }
  function L(b) {
    const $ = F(a.viewport);
    return L0({
      delta: b,
      panZoom: F(a.panZoom),
      transform: [$.x, $.y, $.zoom],
      translateExtent: F(a.translateExtent),
      width: F(a.width),
      height: F(a.height)
    });
  }
  const z = ye(Ts), R = (b) => {
    z.set({ ...b });
  };
  function E() {
    z.set(Ts);
  }
  function M() {
    a.fitViewOnInitDone.set(!1), a.selectionRect.set(null), a.selectionRectMode.set(null), a.snapGrid.set(null), a.isValidConnection.set(() => !0), N(), E();
  }
  return {
    // state
    ...a,
    // derived state
    visibleEdges: pp(a),
    visibleNodes: mp(a),
    connection: Bn([z, a.viewport], ([b, $]) => b.inProgress ? {
      ...b,
      to: Po(b.to, [$.x, $.y, $.zoom])
    } : { ...b }),
    markers: Bn([a.edges, a.defaultMarkerColor, a.flowId], ([b, $, A]) => N0(b, { defaultColor: $, id: A })),
    initialized: (() => {
      let b = !1;
      const $ = F(a.nodes).length, A = F(a.edges).length;
      return Bn([a.nodesInitialized, a.edgesInitialized, a.viewportInitialized], ([O, B, X]) => b || ($ === 0 ? b = X : A === 0 ? b = X && O : b = X && O && B, b));
    })(),
    // actions
    syncNodeStores: (b) => cp(a.nodes, b),
    syncEdgeStores: (b) => dp(a.edges, b),
    syncViewport: (b) => fp(a.panZoom, a.viewport, b),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: f,
    updateNodeInternals: d,
    zoomIn: _,
    zoomOut: S,
    fitView: (b) => g(b),
    setMinZoom: p,
    setMaxZoom: x,
    setTranslateExtent: m,
    setPaneClickDistance: P,
    unselectNodesAndEdges: N,
    addSelectedNodes: T,
    addSelectedEdges: V,
    handleNodeSelection: H,
    panBy: L,
    updateConnection: R,
    cancelConnection: E,
    reset: M
  };
}
function Ge() {
  const e = er(Fi);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function yp({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) {
  const a = Ac({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s });
  return Nr(Fi, {
    getStore: () => a
  }), a;
}
function as(e, t) {
  const { panZoom: n, minZoom: r, maxZoom: o, initialViewport: i, viewport: s, dragging: a, translateExtent: l, paneClickDistance: u } = t, c = tp({
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
var wp = /* @__PURE__ */ re('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const _p = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function Hc(e, t) {
  he(t, !1), ot(e, _p);
  const [n, r] = Qe(), o = () => j(A, "$panActivationKeyPressed", n), i = () => j(R, "$minZoom", n), s = () => j(E, "$maxZoom", n), a = () => j(O, "$zoomActivationKeyPressed", n), l = () => j(z, "$selectionRect", n), u = () => j(b, "$translateExtent", n), c = () => j($, "$lib", n), f = te(), d = te(), g = te();
  let v = w(t, "initialViewport", 12, void 0), C = w(t, "onMoveStart", 12, void 0), _ = w(t, "onMove", 12, void 0), S = w(t, "onMoveEnd", 12, void 0), p = w(t, "panOnScrollMode", 12), x = w(t, "preventScrolling", 12), m = w(t, "zoomOnScroll", 12), k = w(t, "zoomOnDoubleClick", 12), P = w(t, "zoomOnPinch", 12), N = w(t, "panOnDrag", 12), T = w(t, "panOnScroll", 12), V = w(t, "paneClickDistance", 12);
  const {
    viewport: H,
    panZoom: L,
    selectionRect: z,
    minZoom: R,
    maxZoom: E,
    dragging: M,
    translateExtent: b,
    lib: $,
    panActivationKeyPressed: A,
    zoomActivationKeyPressed: O,
    viewportInitialized: B
  } = Ge(), X = (W) => H.set({
    x: W[0],
    y: W[1],
    zoom: W[2]
  });
  cr(() => {
    ai(B, !0);
  }), ue(() => U(v()), () => {
    G(f, v() || { x: 0, y: 0, zoom: 1 });
  }), ue(
    () => (o(), U(N())),
    () => {
      G(d, o() || N());
    }
  ), ue(
    () => (o(), U(T())),
    () => {
      G(g, o() || T());
    }
  ), gt(), Te();
  var q = wp(), ce = Z(q);
  vt(ce, t, "default", {}), K(q), ht(q, (W, de) => as == null ? void 0 : as(W, de), () => ({
    viewport: H,
    minZoom: i(),
    maxZoom: s(),
    initialViewport: h(f),
    dragging: M,
    panZoom: L,
    onPanZoomStart: C(),
    onPanZoom: _(),
    onPanZoomEnd: S(),
    zoomOnScroll: m(),
    zoomOnDoubleClick: k(),
    zoomOnPinch: P(),
    panOnScroll: h(g),
    panOnDrag: h(d),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: p() || Yn.Free,
    zoomActivationKeyPressed: a(),
    preventScrolling: typeof x() == "boolean" ? x() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: V(),
    onTransformChange: X
  })), D(e, q);
  var ee = ve({
    get initialViewport() {
      return v();
    },
    set initialViewport(W) {
      v(W), y();
    },
    get onMoveStart() {
      return C();
    },
    set onMoveStart(W) {
      C(W), y();
    },
    get onMove() {
      return _();
    },
    set onMove(W) {
      _(W), y();
    },
    get onMoveEnd() {
      return S();
    },
    set onMoveEnd(W) {
      S(W), y();
    },
    get panOnScrollMode() {
      return p();
    },
    set panOnScrollMode(W) {
      p(W), y();
    },
    get preventScrolling() {
      return x();
    },
    set preventScrolling(W) {
      x(W), y();
    },
    get zoomOnScroll() {
      return m();
    },
    set zoomOnScroll(W) {
      m(W), y();
    },
    get zoomOnDoubleClick() {
      return k();
    },
    set zoomOnDoubleClick(W) {
      k(W), y();
    },
    get zoomOnPinch() {
      return P();
    },
    set zoomOnPinch(W) {
      P(W), y();
    },
    get panOnDrag() {
      return N();
    },
    set panOnDrag(W) {
      N(W), y();
    },
    get panOnScroll() {
      return T();
    },
    set panOnScroll(W) {
      T(W), y();
    },
    get paneClickDistance() {
      return V();
    },
    set paneClickDistance(W) {
      V(W), y();
    }
  });
  return r(), ee;
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
function Cl(e, t) {
  return (n) => {
    n.target === t && (e == null || e(n));
  };
}
function kl(e) {
  return (t) => {
    const n = e.includes(t.id);
    return t.selected !== n && (t.selected = n), t;
  };
}
var xp = /* @__PURE__ */ re('<div class="svelte-flow__pane svelte-1esy7hx"><!></div>');
const bp = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function Oc(e, t) {
  he(t, !1), ot(e, bp);
  const [n, r] = Qe(), o = () => j(E, "$panActivationKeyPressed", n), i = () => j(z, "$selectionKeyPressed", n), s = () => j(H, "$selectionRect", n), a = () => j(V, "$elementsSelectable", n), l = () => j(L, "$selectionRectMode", n), u = () => j(P, "$edges", n), c = () => j(k, "$nodeLookup", n), f = () => j(N, "$viewport", n), d = () => j(R, "$selectionMode", n), g = () => j(T, "$dragging", n), v = te(), C = te(), _ = te();
  let S = w(t, "panOnDrag", 12, void 0), p = w(t, "selectionOnDrag", 12, void 0);
  const x = Di(), {
    nodes: m,
    nodeLookup: k,
    edges: P,
    viewport: N,
    dragging: T,
    elementsSelectable: V,
    selectionRect: H,
    selectionRectMode: L,
    selectionKeyPressed: z,
    selectionMode: R,
    panActivationKeyPressed: E,
    unselectNodesAndEdges: M
  } = Ge();
  let b = te(), $ = null, A = [], O = !1;
  function B(ge) {
    if (O) {
      O = !1;
      return;
    }
    x("paneclick", { event: ge }), M(), L.set(null);
  }
  function X(ge) {
    var Ye, Ie;
    if ($ = h(b).getBoundingClientRect(), !V || !h(C) || ge.button !== 0 || ge.target !== h(b) || !$)
      return;
    (Ie = (Ye = ge.target) == null ? void 0 : Ye.setPointerCapture) == null || Ie.call(Ye, ge.pointerId);
    const { x: se, y: Pe } = $n(ge, $);
    M(), H.set({
      width: 0,
      height: 0,
      startX: se,
      startY: Pe,
      x: se,
      y: Pe
    });
  }
  function q(ge) {
    if (!h(C) || !$ || !s())
      return;
    O = !0;
    const se = $n(ge, $), Pe = s().startX ?? 0, Ye = s().startY ?? 0, Ie = {
      ...s(),
      x: se.x < Pe ? se.x : Pe,
      y: se.y < Ye ? se.y : Ye,
      width: Math.abs(se.x - Pe),
      height: Math.abs(se.y - Ye)
    }, Fe = A.map((me) => me.id), Q = As(A, u()).map((me) => me.id);
    A = tc(
      c(),
      Ie,
      [
        f().x,
        f().y,
        f().zoom
      ],
      d() === vi.Partial,
      !0
    );
    const le = As(A, u()).map((me) => me.id), oe = A.map((me) => me.id);
    (Fe.length !== oe.length || oe.some((me) => !Fe.includes(me))) && m.update((me) => me.map(kl(oe))), (Q.length !== le.length || le.some((me) => !Q.includes(me))) && P.update((me) => me.map(kl(le))), L.set("user"), H.set(Ie);
  }
  function ce(ge) {
    var se, Pe;
    ge.button === 0 && ((Pe = (se = ge.target) == null ? void 0 : se.releasePointerCapture) == null || Pe.call(se, ge.pointerId), !h(C) && l() === "user" && ge.target === h(b) && (B == null || B(ge)), H.set(null), A.length > 0 && ai(L, "nodes"), i() && (O = !1));
  }
  const ee = (ge) => {
    var se;
    if (Array.isArray(h(v)) && ((se = h(v)) != null && se.includes(2))) {
      ge.preventDefault();
      return;
    }
    x("panecontextmenu", { event: ge });
  };
  ue(
    () => (o(), U(S())),
    () => {
      G(v, o() || S());
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
  ), gt(), Te();
  var W = xp(), de = /* @__PURE__ */ Oe(() => h(_) ? void 0 : Cl(B, h(b))), we = /* @__PURE__ */ Oe(() => Cl(ee, h(b))), xe = Z(W);
  vt(xe, t, "default", {}), K(W), Mn(W, (ge) => G(b, ge), () => h(b)), $e(
    (ge) => {
      rt(W, "draggable", ge), rt(W, "dragging", g()), rt(W, "selection", h(C));
    },
    [
      () => S() === !0 || Array.isArray(S()) && S().includes(0)
    ],
    pe
  ), qe("click", W, function(...ge) {
    var se;
    (se = h(de)) == null || se.apply(this, ge);
  }), qe("pointerdown", W, function(...ge) {
    var se;
    (se = h(_) ? X : void 0) == null || se.apply(this, ge);
  }), qe("pointermove", W, function(...ge) {
    var se;
    (se = h(_) ? q : void 0) == null || se.apply(this, ge);
  }), qe("pointerup", W, function(...ge) {
    var se;
    (se = h(_) ? ce : void 0) == null || se.apply(this, ge);
  }), qe("contextmenu", W, function(...ge) {
    var se;
    (se = h(we)) == null || se.apply(this, ge);
  }), D(e, W);
  var fe = ve({
    get panOnDrag() {
      return S();
    },
    set panOnDrag(ge) {
      S(ge), y();
    },
    get selectionOnDrag() {
      return p();
    },
    set selectionOnDrag(ge) {
      p(ge), y();
    }
  });
  return r(), fe;
}
ie(Oc, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var Cp = /* @__PURE__ */ re('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const kp = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function Vc(e, t) {
  he(t, !1), ot(e, kp);
  const [n, r] = Qe(), o = () => j(i, "$viewport", n), { viewport: i } = Ge();
  Te();
  var s = Cp(), a = Z(s);
  vt(a, t, "default", {}), K(s), $e(() => ae(s, "style", `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), D(e, s), ve(), r();
}
ie(Vc, {}, ["default"], [], !0);
function kr(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = R0({
    onDrag: r,
    onDragStart: o,
    onDragStop: i,
    onNodeMouseDown: s,
    getStoreItems: () => {
      const u = F(n.snapGrid), c = F(n.viewport);
      return {
        nodes: F(n.nodes),
        nodeLookup: F(n.nodeLookup),
        edges: F(n.edges),
        nodeExtent: F(n.nodeExtent),
        snapGrid: u || [0, 0],
        snapToGrid: !!u,
        nodeOrigin: F(n.nodeOrigin),
        multiSelectionActive: F(n.multiselectionKeyPressed),
        domNode: F(n.domNode),
        transform: [c.x, c.y, c.zoom],
        autoPanOnNodeDrag: F(n.autoPanOnNodeDrag),
        nodesDraggable: F(n.nodesDraggable),
        selectNodesOnDrag: F(n.selectNodesOnDrag),
        nodeDragThreshold: F(n.nodeDragThreshold),
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
function Ep({ width: e, height: t, initialWidth: n, initialHeight: r, measuredWidth: o, measuredHeight: i }) {
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
var Sp = /* @__PURE__ */ re("<div><!></div>");
function Dc(e, t) {
  he(t, !1);
  const [n, r] = Qe(), o = () => j(we, "$nodeTypes", n), i = () => j(Pe, "$elementsSelectable", n), s = () => j(Ye, "$nodesDraggable", n), a = () => j(le, "$connectableStore", n), l = te(void 0, !0), u = te(void 0, !0), c = te(void 0, !0), f = te(void 0, !0);
  let d = w(t, "node", 13), g = w(t, "id", 13), v = w(t, "data", 29, () => ({})), C = w(t, "selected", 13, !1), _ = w(t, "draggable", 13, void 0), S = w(t, "selectable", 13, void 0), p = w(t, "connectable", 13, !0), x = w(t, "deletable", 13, !0), m = w(t, "hidden", 13, !1), k = w(t, "dragging", 13, !1), P = w(t, "resizeObserver", 13, null), N = w(t, "style", 13, void 0), T = w(t, "type", 13, "default"), V = w(t, "isParent", 13, !1), H = w(t, "positionX", 13), L = w(t, "positionY", 13), z = w(t, "sourcePosition", 13, void 0), R = w(t, "targetPosition", 13, void 0), E = w(t, "zIndex", 13), M = w(t, "measuredWidth", 13, void 0), b = w(t, "measuredHeight", 13, void 0), $ = w(t, "initialWidth", 13, void 0), A = w(t, "initialHeight", 13, void 0), O = w(t, "width", 13, void 0), B = w(t, "height", 13, void 0), X = w(t, "dragHandle", 13, void 0), q = w(t, "initialized", 13, !1), ce = w(t, "parentId", 13, void 0), ee = w(t, "nodeClickDistance", 13, void 0), W = w(t, "class", 13, "");
  const de = Ge(), {
    nodeTypes: we,
    nodeDragThreshold: xe,
    selectNodesOnDrag: fe,
    handleNodeSelection: ge,
    updateNodeInternals: se,
    elementsSelectable: Pe,
    nodesDraggable: Ye
  } = de;
  let Ie = te(void 0, !0), Fe = te(null, !0);
  const Q = Di(), le = ye(p());
  let oe = te(void 0, !0), me = te(void 0, !0), Ke = te(void 0, !0);
  Nr("svelteflow__node_id", g()), Nr("svelteflow__node_connectable", le), ea(() => {
    var J;
    h(Fe) && ((J = P()) == null || J.unobserve(h(Fe)));
  });
  function He(J) {
    S() && (!F(fe) || !_() || F(xe) > 0) && ge(g()), Q("nodeclick", { node: d().internals.userNode, event: J });
  }
  ue(() => U(T()), () => {
    G(l, T() || "default");
  }), ue(() => (o(), h(l)), () => {
    G(u, !!o()[h(l)]);
  }), ue(
    () => (o(), h(l), wi),
    () => {
      G(c, o()[h(l)] || wi);
    }
  ), ue(
    () => (h(u), U(T())),
    () => {
      h(u) || console.warn("003", Eo.error003(T()));
    }
  ), ue(
    () => (U(O()), U(B()), U($()), U(A()), U(M()), U(b())),
    () => {
      G(f, Ep({
        width: O(),
        height: B(),
        initialWidth: $(),
        initialHeight: A(),
        measuredWidth: M(),
        measuredHeight: b()
      }));
    }
  ), ue(() => U(p()), () => {
    le.set(!!p());
  }), ue(
    () => (h(oe), h(l), h(me), U(z()), h(Ke), U(R()), U(g()), h(Ie)),
    () => {
      (h(oe) && h(l) !== h(oe) || h(me) && z() !== h(me) || h(Ke) && R() !== h(Ke)) && requestAnimationFrame(() => se(/* @__PURE__ */ new Map([
        [
          g(),
          {
            id: g(),
            nodeElement: h(Ie),
            force: !0
          }
        ]
      ]))), G(oe, h(l)), G(me, z()), G(Ke, R());
    }
  ), ue(
    () => (U(P()), h(Ie), h(Fe), U(q())),
    () => {
      P() && (h(Ie) !== h(Fe) || !q()) && (h(Fe) && P().unobserve(h(Fe)), h(Ie) && P().observe(h(Ie)), G(Fe, h(Ie)));
    }
  ), gt(), Te(!0);
  var et = Ue(), Re = _e(et);
  {
    var ut = (J) => {
      var Me = Sp(), ne = Z(Me);
      const yn = /* @__PURE__ */ pe(() => C() ?? !1), Ft = /* @__PURE__ */ pe(() => S() ?? i() ?? !0), Ne = /* @__PURE__ */ pe(() => x() ?? !0), lt = /* @__PURE__ */ pe(() => _() ?? s() ?? !0);
      wu(ne, () => h(c), (be, Ve) => {
        Ve(be, {
          get data() {
            return v();
          },
          get id() {
            return g();
          },
          get selected() {
            return h(yn);
          },
          get selectable() {
            return h(Ft);
          },
          get deletable() {
            return h(Ne);
          },
          get sourcePosition() {
            return z();
          },
          get targetPosition() {
            return R();
          },
          get zIndex() {
            return E();
          },
          get dragging() {
            return k();
          },
          get draggable() {
            return h(lt);
          },
          get dragHandle() {
            return X();
          },
          get parentId() {
            return ce();
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
            return L();
          },
          get width() {
            return O();
          },
          get height() {
            return B();
          }
        });
      }), K(Me), ht(Me, (be, Ve) => kr == null ? void 0 : kr(be, Ve), () => ({
        nodeId: g(),
        isSelectable: S(),
        disabled: !1,
        handleSelector: X(),
        noDragClass: "nodrag",
        nodeClickDistance: ee(),
        onNodeMouseDown: ge,
        onDrag: (be, Ve, at, zt) => {
          Q("nodedrag", { event: be, targetNode: at, nodes: zt });
        },
        onDragStart: (be, Ve, at, zt) => {
          Q("nodedragstart", { event: be, targetNode: at, nodes: zt });
        },
        onDragStop: (be, Ve, at, zt) => {
          Q("nodedragstop", { event: be, targetNode: at, nodes: zt });
        },
        store: de
      })), Mn(Me, (be) => G(Ie, be), () => h(Ie)), Tt(() => qe("click", Me, He)), Tt(() => qe("mouseenter", Me, (be) => Q("nodemouseenter", { node: d(), event: be }))), Tt(() => qe("mouseleave", Me, (be) => Q("nodemouseleave", { node: d(), event: be }))), Tt(() => qe("mousemove", Me, (be) => Q("nodemousemove", { node: d(), event: be }))), Tt(() => qe("contextmenu", Me, (be) => Q("nodecontextmenu", { node: d(), event: be }))), $e(
        (be) => {
          ae(Me, "data-id", g()), Tr(Me, pn(be)), ae(Me, "style", `${N() ?? ""};${h(f).width ?? ""}${h(f).height ?? ""}`), rt(Me, "dragging", k()), rt(Me, "selected", C()), rt(Me, "draggable", _()), rt(Me, "connectable", p()), rt(Me, "selectable", S()), rt(Me, "nopan", _()), rt(Me, "parent", V()), st(Me, "z-index", E()), st(Me, "transform", `translate(${H() ?? ""}px, ${L() ?? ""}px)`), st(Me, "visibility", q() ? "visible" : "hidden");
        },
        [
          () => bt([
            "svelte-flow__node",
            `svelte-flow__node-${h(l)}`,
            W()
          ])
        ],
        pe
      ), D(J, Me);
    };
    Ce(Re, (J) => {
      m() || J(ut);
    });
  }
  D(e, et);
  var tt = ve({
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
      return S();
    },
    set selectable(J) {
      S(J), y();
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
      return T();
    },
    set type(J) {
      T(J), y();
    },
    get isParent() {
      return V();
    },
    set isParent(J) {
      V(J), y();
    },
    get positionX() {
      return H();
    },
    set positionX(J) {
      H(J), y();
    },
    get positionY() {
      return L();
    },
    set positionY(J) {
      L(J), y();
    },
    get sourcePosition() {
      return z();
    },
    set sourcePosition(J) {
      z(J), y();
    },
    get targetPosition() {
      return R();
    },
    set targetPosition(J) {
      R(J), y();
    },
    get zIndex() {
      return E();
    },
    set zIndex(J) {
      E(J), y();
    },
    get measuredWidth() {
      return M();
    },
    set measuredWidth(J) {
      M(J), y();
    },
    get measuredHeight() {
      return b();
    },
    set measuredHeight(J) {
      b(J), y();
    },
    get initialWidth() {
      return $();
    },
    set initialWidth(J) {
      $(J), y();
    },
    get initialHeight() {
      return A();
    },
    set initialHeight(J) {
      A(J), y();
    },
    get width() {
      return O();
    },
    set width(J) {
      O(J), y();
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
      return ce();
    },
    set parentId(J) {
      ce(J), y();
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
  return r(), tt;
}
ie(
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
var $p = /* @__PURE__ */ re('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const Pp = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function Lc(e, t) {
  he(t, !1), ot(e, Pp);
  const [n, r] = Qe(), o = () => j(c, "$visibleNodes", n), i = () => j(f, "$nodesDraggable", n), s = () => j(g, "$elementsSelectable", n), a = () => j(d, "$nodesConnectable", n), l = () => j(C, "$parentLookup", n);
  let u = w(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: f,
    nodesConnectable: d,
    elementsSelectable: g,
    updateNodeInternals: v,
    parentLookup: C
  } = Ge(), _ = typeof ResizeObserver > "u" ? null : new ResizeObserver((x) => {
    const m = /* @__PURE__ */ new Map();
    x.forEach((k) => {
      const P = k.target.getAttribute("data-id");
      m.set(P, { id: P, nodeElement: k.target, force: !0 });
    }), v(m);
  });
  ea(() => {
    _ == null || _.disconnect();
  }), Te();
  var S = $p();
  Ot(S, 5, o, (x) => x.id, (x, m) => {
    const k = /* @__PURE__ */ pe(() => !!h(m).selected), P = /* @__PURE__ */ pe(() => !!h(m).hidden), N = /* @__PURE__ */ pe(() => !!(h(m).draggable || i() && typeof h(m).draggable > "u")), T = /* @__PURE__ */ pe(() => !!(h(m).selectable || s() && typeof h(m).selectable > "u")), V = /* @__PURE__ */ pe(() => !!(h(m).connectable || a() && typeof h(m).connectable > "u")), H = /* @__PURE__ */ pe(() => h(m).deletable ?? !0), L = /* @__PURE__ */ pe(() => l().has(h(m).id)), z = /* @__PURE__ */ pe(() => h(m).type ?? "default"), R = /* @__PURE__ */ pe(() => h(m).internals.z ?? 0), E = /* @__PURE__ */ pe(() => ac(h(m)));
    Dc(x, {
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
        return h(T);
      },
      get connectable() {
        return h(V);
      },
      get deletable() {
        return h(H);
      },
      get positionX() {
        return h(m).internals.positionAbsolute.x;
      },
      get positionY() {
        return h(m).internals.positionAbsolute.y;
      },
      get isParent() {
        return h(L);
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
        return h(R);
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
        nodeclick(M) {
          Le.call(this, t, M);
        },
        nodemouseenter(M) {
          Le.call(this, t, M);
        },
        nodemousemove(M) {
          Le.call(this, t, M);
        },
        nodemouseleave(M) {
          Le.call(this, t, M);
        },
        nodedrag(M) {
          Le.call(this, t, M);
        },
        nodedragstart(M) {
          Le.call(this, t, M);
        },
        nodedragstop(M) {
          Le.call(this, t, M);
        },
        nodecontextmenu(M) {
          Le.call(this, t, M);
        }
      }
    });
  }), K(S), D(e, S);
  var p = ve({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance(x) {
      u(x), y();
    }
  });
  return r(), p;
}
ie(Lc, { nodeClickDistance: {} }, [], [], !0);
var Np = /* @__PURE__ */ Se('<svg><g role="img"><!></g></svg>');
function zc(e, t) {
  he(t, !1);
  const [n, r] = Qe(), o = () => j(W, "$edgeTypes", n), i = () => j(de, "$flowId", n), s = () => j(we, "$elementsSelectable", n), a = () => j(ee, "$edgeLookup", n), l = te(void 0, !0), u = te(void 0, !0), c = te(void 0, !0), f = te(void 0, !0), d = te(void 0, !0);
  let g = w(t, "id", 13), v = w(t, "type", 13, "default"), C = w(t, "source", 13, ""), _ = w(t, "target", 13, ""), S = w(t, "data", 29, () => ({})), p = w(t, "style", 13, void 0), x = w(t, "zIndex", 13, void 0), m = w(t, "animated", 13, !1), k = w(t, "selected", 13, !1), P = w(t, "selectable", 13, void 0), N = w(t, "deletable", 13, void 0), T = w(t, "hidden", 13, !1), V = w(t, "label", 13, void 0), H = w(t, "labelStyle", 13, void 0), L = w(t, "markerStart", 13, void 0), z = w(t, "markerEnd", 13, void 0), R = w(t, "sourceHandle", 13, void 0), E = w(t, "targetHandle", 13, void 0), M = w(t, "sourceX", 13), b = w(t, "sourceY", 13), $ = w(t, "targetX", 13), A = w(t, "targetY", 13), O = w(t, "sourcePosition", 13), B = w(t, "targetPosition", 13), X = w(t, "ariaLabel", 13, void 0), q = w(t, "interactionWidth", 13, void 0), ce = w(t, "class", 13, "");
  Nr("svelteflow__edge_id", g());
  const {
    edgeLookup: ee,
    edgeTypes: W,
    flowId: de,
    elementsSelectable: we
  } = Ge(), xe = Di(), fe = Ec();
  function ge(Q) {
    const le = a().get(g());
    le && (fe(g()), xe("edgeclick", { event: Q, edge: le }));
  }
  function se(Q, le) {
    const oe = a().get(g());
    oe && xe(le, { event: Q, edge: oe });
  }
  ue(() => U(v()), () => {
    G(l, v() || "default");
  }), ue(
    () => (o(), h(l), _i),
    () => {
      G(u, o()[h(l)] || _i);
    }
  ), ue(
    () => (U(L()), i()),
    () => {
      G(c, L() ? `url('#${Vs(L(), i())}')` : void 0);
    }
  ), ue(
    () => (U(z()), i()),
    () => {
      G(f, z() ? `url('#${Vs(z(), i())}')` : void 0);
    }
  ), ue(
    () => (U(P()), s()),
    () => {
      G(d, P() ?? s());
    }
  ), gt(), Te(!0);
  var Pe = Ue(), Ye = _e(Pe);
  {
    var Ie = (Q) => {
      var le = Np(), oe = Z(le), me = Z(oe);
      const Ke = /* @__PURE__ */ pe(() => N() ?? !0);
      wu(me, () => h(u), (He, et) => {
        et(He, {
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
            return M();
          },
          get sourceY() {
            return b();
          },
          get targetX() {
            return $();
          },
          get targetY() {
            return A();
          },
          get sourcePosition() {
            return O();
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
            return V();
          },
          get labelStyle() {
            return H();
          },
          get data() {
            return S();
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
            return h(Ke);
          },
          get type() {
            return h(l);
          },
          get sourceHandleId() {
            return R();
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
      }), K(oe), K(le), $e(
        (He) => {
          st(le, "z-index", x()), ur(oe, pn(He)), ae(oe, "data-id", g()), ae(oe, "aria-label", X() === null ? void 0 : X() ? X() : `Edge from ${C()} to ${_()}`), rt(oe, "animated", m()), rt(oe, "selected", k()), rt(oe, "selectable", h(d));
        },
        [
          () => bt(["svelte-flow__edge", ce()])
        ],
        pe
      ), qe("click", oe, ge), qe("contextmenu", oe, (He) => {
        se(He, "edgecontextmenu");
      }), qe("mouseenter", oe, (He) => {
        se(He, "edgemouseenter");
      }), qe("mouseleave", oe, (He) => {
        se(He, "edgemouseleave");
      }), D(Q, le);
    };
    Ce(Ye, (Q) => {
      T() || Q(Ie);
    });
  }
  D(e, Pe);
  var Fe = ve({
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
      return S();
    },
    set data(Q) {
      S(Q), y();
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
      return T();
    },
    set hidden(Q) {
      T(Q), y();
    },
    get label() {
      return V();
    },
    set label(Q) {
      V(Q), y();
    },
    get labelStyle() {
      return H();
    },
    set labelStyle(Q) {
      H(Q), y();
    },
    get markerStart() {
      return L();
    },
    set markerStart(Q) {
      L(Q), y();
    },
    get markerEnd() {
      return z();
    },
    set markerEnd(Q) {
      z(Q), y();
    },
    get sourceHandle() {
      return R();
    },
    set sourceHandle(Q) {
      R(Q), y();
    },
    get targetHandle() {
      return E();
    },
    set targetHandle(Q) {
      E(Q), y();
    },
    get sourceX() {
      return M();
    },
    set sourceX(Q) {
      M(Q), y();
    },
    get sourceY() {
      return b();
    },
    set sourceY(Q) {
      b(Q), y();
    },
    get targetX() {
      return $();
    },
    set targetX(Q) {
      $(Q), y();
    },
    get targetY() {
      return A();
    },
    set targetY(Q) {
      A(Q), y();
    },
    get sourcePosition() {
      return O();
    },
    set sourcePosition(Q) {
      O(Q), y();
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
      return ce();
    },
    set class(Q) {
      ce(Q), y();
    }
  });
  return r(), Fe;
}
ie(
  zc,
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
function Ic(e, t) {
  he(t, !1);
  let n = w(t, "onMount", 12, void 0), r = w(t, "onDestroy", 12, void 0);
  return cr(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), Te(), ve({
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
ie(Ic, { onMount: {}, onDestroy: {} }, [], [], !0);
var Mp = /* @__PURE__ */ Se("<defs></defs>");
function Rc(e, t) {
  he(t, !1);
  const [n, r] = Qe(), o = () => j(i, "$markers", n), { markers: i } = Ge();
  Te();
  var s = Mp();
  Ot(s, 5, o, (a) => a.id, (a, l) => {
    Bc(a, _t(() => h(l)));
  }), K(s), D(e, s), ve(), r();
}
ie(Rc, {}, [], [], !0);
var Tp = /* @__PURE__ */ Se('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), Ap = /* @__PURE__ */ Se('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), Hp = /* @__PURE__ */ Se('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Bc(e, t) {
  he(t, !1);
  let n = w(t, "id", 12), r = w(t, "type", 12), o = w(t, "width", 12, 12.5), i = w(t, "height", 12, 12.5), s = w(t, "markerUnits", 12, "strokeWidth"), a = w(t, "orient", 12, "auto-start-reverse"), l = w(t, "color", 12, void 0), u = w(t, "strokeWidth", 12, void 0);
  Te();
  var c = Hp(), f = Z(c);
  {
    var d = (v) => {
      var C = Tp();
      $e(() => {
        ae(C, "stroke", l()), ae(C, "stroke-width", u());
      }), D(v, C);
    }, g = (v) => {
      var C = Ue(), _ = _e(C);
      {
        var S = (p) => {
          var x = Ap();
          $e(() => {
            ae(x, "stroke", l()), ae(x, "stroke-width", u()), ae(x, "fill", l());
          }), D(p, x);
        };
        Ce(
          _,
          (p) => {
            r() === go.ArrowClosed && p(S);
          },
          !0
        );
      }
      D(v, C);
    };
    Ce(f, (v) => {
      r() === go.Arrow ? v(d) : v(g, !1);
    });
  }
  return K(c), $e(() => {
    ae(c, "id", n()), ae(c, "markerWidth", `${o()}`), ae(c, "markerHeight", `${i()}`), ae(c, "markerUnits", s()), ae(c, "orient", a());
  }), D(e, c), ve({
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
ie(
  Bc,
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
var Op = /* @__PURE__ */ re('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function Yc(e, t) {
  he(t, !1);
  const [n, r] = Qe(), o = () => j(a, "$visibleEdges", n), i = () => j(c, "$elementsSelectable", n);
  let s = w(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: a,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = Ge();
  cr(() => {
    s() && u(s());
  }), Te();
  var f = Op(), d = Z(f), g = Z(d);
  Rc(g, {}), K(d);
  var v = Y(d, 2);
  Ot(v, 1, o, (p) => p.id, (p, x) => {
    const m = /* @__PURE__ */ pe(() => h(x).selectable ?? i()), k = /* @__PURE__ */ pe(() => h(x).type || "default");
    zc(p, {
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
          Le.call(this, t, P);
        },
        edgecontextmenu(P) {
          Le.call(this, t, P);
        },
        edgemouseenter(P) {
          Le.call(this, t, P);
        },
        edgemouseleave(P) {
          Le.call(this, t, P);
        }
      }
    });
  });
  var C = Y(v, 2);
  {
    var _ = (p) => {
      Ic(p, {
        onMount: () => {
          ai(l, !0);
        },
        onDestroy: () => {
          ai(l, !1);
        }
      });
    };
    Ce(C, (p) => {
      o().length > 0 && p(_);
    });
  }
  K(f), D(e, f);
  var S = ve({
    get defaultEdgeOptions() {
      return s();
    },
    set defaultEdgeOptions(p) {
      s(p), y();
    }
  });
  return r(), S;
}
ie(Yc, { defaultEdgeOptions: {} }, [], [], !0);
var Vp = /* @__PURE__ */ re('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const Dp = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function va(e, t) {
  he(t, !1), ot(e, Dp);
  let n = w(t, "x", 12, 0), r = w(t, "y", 12, 0), o = w(t, "width", 12, 0), i = w(t, "height", 12, 0), s = w(t, "isVisible", 12, !0);
  var a = Ue(), l = _e(a);
  {
    var u = (c) => {
      var f = Vp();
      $e(() => {
        st(f, "width", typeof o() == "string" ? o() : `${o()}px`), st(f, "height", typeof i() == "string" ? i() : `${i()}px`), st(f, "transform", `translate(${n()}px, ${r()}px)`);
      }), D(c, f);
    };
    Ce(l, (c) => {
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
ie(
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
function Xc(e, t) {
  he(t, !1);
  const [n, r] = Qe(), o = () => j(s, "$selectionRect", n), i = () => j(a, "$selectionRectMode", n), { selectionRect: s, selectionRectMode: a } = Ge();
  Te();
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
  }), ve(), r();
}
ie(Xc, {}, [], [], !0);
var Lp = /* @__PURE__ */ re('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const zp = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function Wc(e, t) {
  he(t, !1), ot(e, zp);
  const [n, r] = Qe(), o = () => j(l, "$selectionRectMode", n), i = () => j(c, "$nodeLookup", n), s = () => j(u, "$nodes", n), a = Ge(), { selectionRectMode: l, nodes: u, nodeLookup: c } = a, f = Di();
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
      o() === "nodes" && (G(d, $o(i(), { filter: (p) => !!p.selected })), s());
    }
  ), gt(), Te();
  var C = Ue(), _ = _e(C);
  {
    var S = (p) => {
      var x = Lp(), m = Z(x);
      va(m, { width: "100%", height: "100%", x: 0, y: 0 }), K(x), ht(x, (k, P) => kr == null ? void 0 : kr(k, P), () => ({
        disabled: !1,
        store: a,
        onDrag: (k, P, N, T) => {
          f("nodedrag", { event: k, targetNode: null, nodes: T });
        },
        onDragStart: (k, P, N, T) => {
          f("nodedragstart", { event: k, targetNode: null, nodes: T });
        },
        onDragStop: (k, P, N, T) => {
          f("nodedragstop", { event: k, targetNode: null, nodes: T });
        }
      })), Tt(() => qe("contextmenu", x, g)), Tt(() => qe("click", x, v)), Tt(() => qe("keyup", x, () => {
      })), $e(() => ae(x, "style", `width: ${h(d).width ?? ""}px; height: ${h(d).height ?? ""}px; transform: translate(${h(d).x ?? ""}px, ${h(d).y ?? ""}px)`)), D(p, x);
    };
    Ce(_, (p) => {
      o() === "nodes" && h(d) && Cn(h(d).x) && Cn(h(d).y) && p(S);
    });
  }
  D(e, C), ve(), r();
}
ie(Wc, {}, [], [], !0);
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
  he(t, !1);
  let n = w(t, "selectionKey", 12, "Shift"), r = w(t, "multiSelectionKey", 28, () => mi() ? "Meta" : "Control"), o = w(t, "deleteKey", 12, "Backspace"), i = w(t, "panActivationKey", 12, " "), s = w(t, "zoomActivationKey", 28, () => mi() ? "Meta" : "Control");
  const {
    selectionKeyPressed: a,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: f,
    selectionRect: d
  } = Ge();
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
  function S() {
    d.set(null), a.set(!1), l.set(!1), u.set(!1), c.set(!1), f.set(!1);
  }
  return Te(), qe("blur", Et, S), qe("contextmenu", Et, S), ht(Et, (p, x) => Xe == null ? void 0 : Xe(p, x), () => ({
    trigger: _(n(), () => a.set(!0)),
    type: "keydown"
  })), ht(Et, (p, x) => Xe == null ? void 0 : Xe(p, x), () => ({
    trigger: _(n(), () => a.set(!1)),
    type: "keyup"
  })), ht(Et, (p, x) => Xe == null ? void 0 : Xe(p, x), () => ({
    trigger: _(r(), () => l.set(!0)),
    type: "keydown"
  })), ht(Et, (p, x) => Xe == null ? void 0 : Xe(p, x), () => ({
    trigger: _(r(), () => l.set(!1)),
    type: "keyup"
  })), ht(Et, (p, x) => Xe == null ? void 0 : Xe(p, x), () => ({
    trigger: _(o(), (p) => {
      !(p.originalEvent.ctrlKey || p.originalEvent.metaKey || p.originalEvent.shiftKey) && !y0(p.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), ht(Et, (p, x) => Xe == null ? void 0 : Xe(p, x), () => ({
    trigger: _(o(), () => u.set(!1)),
    type: "keyup"
  })), ht(Et, (p, x) => Xe == null ? void 0 : Xe(p, x), () => ({
    trigger: _(i(), () => c.set(!0)),
    type: "keydown"
  })), ht(Et, (p, x) => Xe == null ? void 0 : Xe(p, x), () => ({
    trigger: _(i(), () => c.set(!1)),
    type: "keyup"
  })), ht(Et, (p, x) => Xe == null ? void 0 : Xe(p, x), () => ({
    trigger: _(s(), () => f.set(!0)),
    type: "keydown"
  })), ht(Et, (p, x) => Xe == null ? void 0 : Xe(p, x), () => ({
    trigger: _(s(), () => f.set(!1)),
    type: "keyup"
  })), ve({
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
ie(
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
var Ip = /* @__PURE__ */ Se('<path fill="none" class="svelte-flow__connection-path"></path>'), Rp = /* @__PURE__ */ Se('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function Kc(e, t) {
  he(t, !1);
  const [n, r] = Qe(), o = () => j(g, "$connection", n), i = () => j(v, "$connectionLineType", n), s = () => j(f, "$width", n), a = () => j(d, "$height", n);
  let l = w(t, "containerStyle", 12, ""), u = w(t, "style", 12, ""), c = w(t, "isCustomComponent", 12, !1);
  const {
    width: f,
    height: d,
    connection: g,
    connectionLineType: v
  } = Ge();
  let C = te(null);
  ue(
    () => (o(), U(c()), i(), h(C), Os),
    () => {
      if (o().inProgress && !c()) {
        const { from: m, to: k, fromPosition: P, toPosition: N } = o(), T = {
          sourceX: m.x,
          sourceY: m.y,
          sourcePosition: P,
          targetX: k.x,
          targetY: k.y,
          targetPosition: N
        };
        switch (i()) {
          case br.Bezier:
            ((V) => G(C, V[0]))(uc(T));
            break;
          case br.Step:
            ((V) => G(C, V[0]))(yi({ ...T, borderRadius: 0 }));
            break;
          case br.SmoothStep:
            ((V) => G(C, V[0]))(yi(T));
            break;
          default:
            ((V) => G(C, V[0]))(Os(T));
        }
      }
    }
  ), gt(), Te();
  var _ = Ue(), S = _e(_);
  {
    var p = (m) => {
      var k = Rp(), P = Z(k), N = Z(P);
      vt(N, t, "connectionLine", {});
      var T = Y(N);
      {
        var V = (H) => {
          var L = Ip();
          $e(() => {
            ae(L, "d", h(C)), ae(L, "style", u());
          }), D(H, L);
        };
        Ce(T, (H) => {
          c() || H(V);
        });
      }
      K(P), K(k), $e(
        (H) => {
          ae(k, "width", s()), ae(k, "height", a()), ae(k, "style", l()), ur(P, pn(H));
        },
        [
          () => bt([
            "svelte-flow__connection",
            u0(o().isValid)
          ])
        ],
        pe
      ), D(m, k);
    };
    Ce(S, (m) => {
      o().inProgress && m(p);
    });
  }
  D(e, _);
  var x = ve({
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
ie(
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
var Bp = /* @__PURE__ */ re("<div><!></div>");
function Ki(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = nt(n, ["position", "style", "class"]);
  he(t, !1);
  const [o, i] = Qe(), s = () => j(f, "$selectionRectMode", o), a = te();
  let l = w(t, "position", 12, "top-right"), u = w(t, "style", 12, void 0), c = w(t, "class", 12, void 0);
  const { selectionRectMode: f } = Ge();
  ue(() => U(l()), () => {
    G(a, `${l()}`.split("-"));
  }), gt(), Te();
  var d = Bp();
  let g;
  var v = Z(d);
  vt(v, t, "default", {}), K(d), $e(
    (_) => {
      g = Qt(d, g, {
        class: _,
        style: u(),
        ...r
      }), st(d, "pointer-events", s() ? "none" : "");
    },
    [
      () => bt([
        "svelte-flow__panel",
        c(),
        ...h(a)
      ])
    ],
    pe
  ), D(e, d);
  var C = ve({
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
ie(Ki, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var Yp = /* @__PURE__ */ re('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function Zc(e, t) {
  he(t, !1);
  let n = w(t, "proOptions", 12, void 0), r = w(t, "position", 12, "bottom-right");
  Te();
  var o = Ue(), i = _e(o);
  {
    var s = (a) => {
      Ki(a, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var c = Yp();
          D(l, c);
        },
        $$slots: { default: !0 }
      });
    };
    Ce(i, (a) => {
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
ie(Zc, { proOptions: {}, position: {} }, [], [], !0);
function El(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: i, paneClickDistance: s }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), o !== void 0 && e.setMaxZoom(o), i !== void 0 && e.setTranslateExtent(i), s !== void 0 && e.setPaneClickDistance(s);
}
const Xp = (e) => Object.keys(e);
function Sl(e, t) {
  Xp(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function Wp() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function Fp(e = "light") {
  return It("light", (n) => {
    if (e !== "system") {
      n(e);
      return;
    }
    const r = Wp(), o = () => n(r != null && r.matches ? "dark" : "light");
    return n(r != null && r.matches ? "dark" : "light"), r == null || r.addEventListener("change", o), () => {
      r == null || r.removeEventListener("change", o);
    };
  });
}
var Kp = /* @__PURE__ */ re('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), Zp = /* @__PURE__ */ re("<!> <!>", 1), qp = /* @__PURE__ */ re("<div><!> <!> <!> <!></div>");
const Up = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function qc(e, t) {
  const n = pg(t), r = nt(t, [
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
  he(t, !1), ot(e, Up);
  const [i, s] = Qe(), a = () => j(x(), "$viewport", i), l = () => j(ji, "$initialized", i), u = () => j(h(c), "$colorModeClass", i), c = te();
  let f = w(t, "id", 12, "1"), d = w(t, "nodes", 12), g = w(t, "edges", 12), v = w(t, "fitView", 12, void 0), C = w(t, "fitViewOptions", 12, void 0), _ = w(t, "minZoom", 12, void 0), S = w(t, "maxZoom", 12, void 0), p = w(t, "initialViewport", 12, void 0), x = w(t, "viewport", 12, void 0), m = w(t, "nodeTypes", 12, void 0), k = w(t, "edgeTypes", 12, void 0), P = w(t, "selectionKey", 12, void 0), N = w(t, "selectionMode", 12, void 0), T = w(t, "panActivationKey", 12, void 0), V = w(t, "multiSelectionKey", 12, void 0), H = w(t, "zoomActivationKey", 12, void 0), L = w(t, "nodesDraggable", 12, void 0), z = w(t, "nodesConnectable", 12, void 0), R = w(t, "nodeDragThreshold", 12, void 0), E = w(t, "elementsSelectable", 12, void 0), M = w(t, "snapGrid", 12, void 0), b = w(t, "deleteKey", 12, void 0), $ = w(t, "connectionRadius", 12, void 0), A = w(t, "connectionLineType", 12, void 0), O = w(t, "connectionMode", 28, () => nr.Strict), B = w(t, "connectionLineStyle", 12, ""), X = w(t, "connectionLineContainerStyle", 12, ""), q = w(t, "onMoveStart", 12, void 0), ce = w(t, "onMove", 12, void 0), ee = w(t, "onMoveEnd", 12, void 0), W = w(t, "isValidConnection", 12, void 0), de = w(t, "translateExtent", 12, void 0), we = w(t, "nodeExtent", 12, void 0), xe = w(t, "onlyRenderVisibleElements", 12, void 0), fe = w(t, "panOnScrollMode", 28, () => Yn.Free), ge = w(t, "preventScrolling", 12, !0), se = w(t, "zoomOnScroll", 12, !0), Pe = w(t, "zoomOnDoubleClick", 12, !0), Ye = w(t, "zoomOnPinch", 12, !0), Ie = w(t, "panOnScroll", 12, !1), Fe = w(t, "panOnDrag", 12, !0), Q = w(t, "selectionOnDrag", 12, void 0), le = w(t, "autoPanOnConnect", 12, !0), oe = w(t, "autoPanOnNodeDrag", 12, !0), me = w(t, "onerror", 12, void 0), Ke = w(t, "ondelete", 12, void 0), He = w(t, "onedgecreate", 12, void 0), et = w(t, "attributionPosition", 12, void 0), Re = w(t, "proOptions", 12, void 0), ut = w(t, "defaultEdgeOptions", 12, void 0), tt = w(t, "width", 12, void 0), J = w(t, "height", 12, void 0), Me = w(t, "colorMode", 12, "light"), ne = w(t, "onconnect", 12, void 0), yn = w(t, "onconnectstart", 12, void 0), Ft = w(t, "onconnectend", 12, void 0), Ne = w(t, "onbeforedelete", 12, void 0), lt = w(t, "oninit", 12, void 0), be = w(t, "nodeOrigin", 12, void 0), Ve = w(t, "paneClickDistance", 12, 0), at = w(t, "nodeClickDistance", 12, 0), zt = w(t, "defaultMarkerColor", 12, "#b1b1b7"), gr = w(t, "style", 12, void 0), Kr = w(t, "class", 12, void 0), Nt = te(), Ct = te(), on = te();
  const Kt = a() || p(), dt = Gf(Fi) ? Ge() : yp({
    nodes: F(d()),
    edges: F(g()),
    width: tt(),
    height: J(),
    fitView: v(),
    nodeOrigin: be(),
    nodeExtent: we()
  });
  cr(() => (dt.width.set(h(Ct)), dt.height.set(h(on)), dt.domNode.set(h(Nt)), dt.syncNodeStores(d()), dt.syncEdgeStores(g()), dt.syncViewport(x()), v() !== void 0 && dt.fitViewOnInit.set(v()), C() && dt.fitViewOptions.set(C()), El(dt, {
    nodeTypes: m(),
    edgeTypes: k(),
    minZoom: _(),
    maxZoom: S(),
    translateExtent: de(),
    paneClickDistance: Ve()
  }), () => {
    dt.reset();
  }));
  const { initialized: ji } = dt;
  let Un = te(!1);
  ue(
    () => (h(Ct), h(on)),
    () => {
      h(Ct) !== void 0 && h(on) !== void 0 && (dt.width.set(h(Ct)), dt.height.set(h(on)));
    }
  ), ue(
    () => (h(Un), l(), U(lt())),
    () => {
      var I;
      !h(Un) && l() && ((I = lt()) == null || I(), G(Un, !0));
    }
  ), ue(
    () => (U(f()), U(A()), U($()), U(N()), U(M()), U(zt()), U(L()), U(z()), U(E()), U(xe()), U(W()), U(le()), U(oe()), U(me()), U(Ke()), U(He()), U(O()), U(R()), U(ne()), U(yn()), U(Ft()), U(Ne()), U(be()), Sl),
    () => {
      const I = {
        flowId: f(),
        connectionLineType: A(),
        connectionRadius: $(),
        selectionMode: N(),
        snapGrid: M(),
        defaultMarkerColor: zt(),
        nodesDraggable: L(),
        nodesConnectable: z(),
        elementsSelectable: E(),
        onlyRenderVisibleElements: xe(),
        isValidConnection: W(),
        autoPanOnConnect: le(),
        autoPanOnNodeDrag: oe(),
        onerror: me(),
        ondelete: Ke(),
        onedgecreate: He(),
        connectionMode: O(),
        nodeDragThreshold: R(),
        onconnect: ne(),
        onconnectstart: yn(),
        onconnectend: Ft(),
        onbeforedelete: Ne(),
        nodeOrigin: be()
      };
      Sl(dt, I);
    }
  ), ue(
    () => (U(m()), U(k()), U(_()), U(S()), U(de()), U(Ve())),
    () => {
      El(dt, {
        nodeTypes: m(),
        edgeTypes: k(),
        minZoom: _(),
        maxZoom: S(),
        translateExtent: de(),
        paneClickDistance: Ve()
      });
    }
  ), ue(
    () => U(Me()),
    () => {
      Cg(G(c, Fp(Me())), "$colorModeClass", i);
    }
  ), gt(), Te();
  var Zt = qp();
  let Vo;
  var Do = Z(Zt);
  Fc(Do, {
    get selectionKey() {
      return P();
    },
    get deleteKey() {
      return b();
    },
    get panActivationKey() {
      return T();
    },
    get multiSelectionKey() {
      return V();
    },
    get zoomActivationKey() {
      return H();
    }
  });
  var Lo = Y(Do, 2);
  const zd = /* @__PURE__ */ pe(() => fe() === void 0 ? Yn.Free : fe()), Id = /* @__PURE__ */ pe(() => ge() === void 0 ? !0 : ge()), Rd = /* @__PURE__ */ pe(() => se() === void 0 ? !0 : se()), Bd = /* @__PURE__ */ pe(() => Pe() === void 0 ? !0 : Pe()), Yd = /* @__PURE__ */ pe(() => Ye() === void 0 ? !0 : Ye()), Xd = /* @__PURE__ */ pe(() => Ie() === void 0 ? !1 : Ie()), Wd = /* @__PURE__ */ pe(() => Fe() === void 0 ? !0 : Fe()), Fd = /* @__PURE__ */ pe(() => Ve() === void 0 ? 0 : Ve());
  Hc(Lo, {
    initialViewport: Kt,
    get onMoveStart() {
      return q();
    },
    get onMove() {
      return ce();
    },
    get onMoveEnd() {
      return ee();
    },
    get panOnScrollMode() {
      return h(zd);
    },
    get preventScrolling() {
      return h(Id);
    },
    get zoomOnScroll() {
      return h(Rd);
    },
    get zoomOnDoubleClick() {
      return h(Bd);
    },
    get zoomOnPinch() {
      return h(Yd);
    },
    get panOnScroll() {
      return h(Xd);
    },
    get panOnDrag() {
      return h(Wd);
    },
    get paneClickDistance() {
      return h(Fd);
    },
    children: (I, Wy) => {
      const qd = /* @__PURE__ */ pe(() => Fe() === void 0 ? !0 : Fe());
      Oc(I, {
        get panOnDrag() {
          return h(qd);
        },
        get selectionOnDrag() {
          return Q();
        },
        $$events: {
          paneclick(Zr) {
            Le.call(this, t, Zr);
          },
          panecontextmenu(Zr) {
            Le.call(this, t, Zr);
          }
        },
        children: (Zr, Fy) => {
          var ba = Zp(), Ca = _e(ba);
          Vc(Ca, {
            children: (Gd, Ky) => {
              var ka = Kp(), Ea = _e(ka);
              Yc(Ea, {
                get defaultEdgeOptions() {
                  return ut();
                },
                $$events: {
                  edgeclick(De) {
                    Le.call(this, t, De);
                  },
                  edgecontextmenu(De) {
                    Le.call(this, t, De);
                  },
                  edgemouseenter(De) {
                    Le.call(this, t, De);
                  },
                  edgemouseleave(De) {
                    Le.call(this, t, De);
                  }
                }
              });
              var Sa = Y(Ea, 2);
              Kc(Sa, {
                get containerStyle() {
                  return X();
                },
                get style() {
                  return B();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (De, Zy) => {
                    var Pa = Ue(), Jd = _e(Pa);
                    vt(Jd, t, "connectionLine", {}), D(De, Pa);
                  }
                }
              });
              var $a = Y(Sa, 6);
              Lc($a, {
                get nodeClickDistance() {
                  return at();
                },
                $$events: {
                  nodeclick(De) {
                    Le.call(this, t, De);
                  },
                  nodemouseenter(De) {
                    Le.call(this, t, De);
                  },
                  nodemousemove(De) {
                    Le.call(this, t, De);
                  },
                  nodemouseleave(De) {
                    Le.call(this, t, De);
                  },
                  nodedragstart(De) {
                    Le.call(this, t, De);
                  },
                  nodedrag(De) {
                    Le.call(this, t, De);
                  },
                  nodedragstop(De) {
                    Le.call(this, t, De);
                  },
                  nodecontextmenu(De) {
                    Le.call(this, t, De);
                  }
                }
              });
              var jd = Y($a, 2);
              Wc(jd, {
                $$events: {
                  selectionclick(De) {
                    Le.call(this, t, De);
                  },
                  selectioncontextmenu(De) {
                    Le.call(this, t, De);
                  },
                  nodedragstart(De) {
                    Le.call(this, t, De);
                  },
                  nodedrag(De) {
                    Le.call(this, t, De);
                  },
                  nodedragstop(De) {
                    Le.call(this, t, De);
                  }
                }
              }), D(Gd, ka);
            },
            $$slots: { default: !0 }
          });
          var Ud = Y(Ca, 2);
          Xc(Ud, {}), D(Zr, ba);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var xa = Y(Lo, 2);
  Zc(xa, {
    get proOptions() {
      return Re();
    },
    get position() {
      return et();
    }
  });
  var Kd = Y(xa, 2);
  vt(Kd, t, "default", {}), K(Zt), Mn(Zt, (I) => G(Nt, I), () => h(Nt)), $e(
    (I) => Vo = Qt(
      Zt,
      Vo,
      {
        style: gr(),
        class: I,
        "data-testid": "svelte-flow__wrapper",
        ...o,
        role: "application"
      },
      "svelte-12wlba6"
    ),
    [
      () => bt([
        "svelte-flow",
        Kr(),
        u()
      ])
    ],
    pe
  ), Ia(Zt, "clientWidth", (I) => G(Ct, I)), Ia(Zt, "clientHeight", (I) => G(on, I)), qe("dragover", Zt, function(I) {
    Le.call(this, t, I);
  }), qe("drop", Zt, function(I) {
    Le.call(this, t, I);
  }), D(e, Zt);
  var Zd = ve({
    get id() {
      return f();
    },
    set id(I) {
      f(I), y();
    },
    get nodes() {
      return d();
    },
    set nodes(I) {
      d(I), y();
    },
    get edges() {
      return g();
    },
    set edges(I) {
      g(I), y();
    },
    get fitView() {
      return v();
    },
    set fitView(I) {
      v(I), y();
    },
    get fitViewOptions() {
      return C();
    },
    set fitViewOptions(I) {
      C(I), y();
    },
    get minZoom() {
      return _();
    },
    set minZoom(I) {
      _(I), y();
    },
    get maxZoom() {
      return S();
    },
    set maxZoom(I) {
      S(I), y();
    },
    get initialViewport() {
      return p();
    },
    set initialViewport(I) {
      p(I), y();
    },
    get viewport() {
      return x();
    },
    set viewport(I) {
      x(I), y();
    },
    get nodeTypes() {
      return m();
    },
    set nodeTypes(I) {
      m(I), y();
    },
    get edgeTypes() {
      return k();
    },
    set edgeTypes(I) {
      k(I), y();
    },
    get selectionKey() {
      return P();
    },
    set selectionKey(I) {
      P(I), y();
    },
    get selectionMode() {
      return N();
    },
    set selectionMode(I) {
      N(I), y();
    },
    get panActivationKey() {
      return T();
    },
    set panActivationKey(I) {
      T(I), y();
    },
    get multiSelectionKey() {
      return V();
    },
    set multiSelectionKey(I) {
      V(I), y();
    },
    get zoomActivationKey() {
      return H();
    },
    set zoomActivationKey(I) {
      H(I), y();
    },
    get nodesDraggable() {
      return L();
    },
    set nodesDraggable(I) {
      L(I), y();
    },
    get nodesConnectable() {
      return z();
    },
    set nodesConnectable(I) {
      z(I), y();
    },
    get nodeDragThreshold() {
      return R();
    },
    set nodeDragThreshold(I) {
      R(I), y();
    },
    get elementsSelectable() {
      return E();
    },
    set elementsSelectable(I) {
      E(I), y();
    },
    get snapGrid() {
      return M();
    },
    set snapGrid(I) {
      M(I), y();
    },
    get deleteKey() {
      return b();
    },
    set deleteKey(I) {
      b(I), y();
    },
    get connectionRadius() {
      return $();
    },
    set connectionRadius(I) {
      $(I), y();
    },
    get connectionLineType() {
      return A();
    },
    set connectionLineType(I) {
      A(I), y();
    },
    get connectionMode() {
      return O();
    },
    set connectionMode(I) {
      O(I), y();
    },
    get connectionLineStyle() {
      return B();
    },
    set connectionLineStyle(I) {
      B(I), y();
    },
    get connectionLineContainerStyle() {
      return X();
    },
    set connectionLineContainerStyle(I) {
      X(I), y();
    },
    get onMoveStart() {
      return q();
    },
    set onMoveStart(I) {
      q(I), y();
    },
    get onMove() {
      return ce();
    },
    set onMove(I) {
      ce(I), y();
    },
    get onMoveEnd() {
      return ee();
    },
    set onMoveEnd(I) {
      ee(I), y();
    },
    get isValidConnection() {
      return W();
    },
    set isValidConnection(I) {
      W(I), y();
    },
    get translateExtent() {
      return de();
    },
    set translateExtent(I) {
      de(I), y();
    },
    get nodeExtent() {
      return we();
    },
    set nodeExtent(I) {
      we(I), y();
    },
    get onlyRenderVisibleElements() {
      return xe();
    },
    set onlyRenderVisibleElements(I) {
      xe(I), y();
    },
    get panOnScrollMode() {
      return fe();
    },
    set panOnScrollMode(I) {
      fe(I), y();
    },
    get preventScrolling() {
      return ge();
    },
    set preventScrolling(I) {
      ge(I), y();
    },
    get zoomOnScroll() {
      return se();
    },
    set zoomOnScroll(I) {
      se(I), y();
    },
    get zoomOnDoubleClick() {
      return Pe();
    },
    set zoomOnDoubleClick(I) {
      Pe(I), y();
    },
    get zoomOnPinch() {
      return Ye();
    },
    set zoomOnPinch(I) {
      Ye(I), y();
    },
    get panOnScroll() {
      return Ie();
    },
    set panOnScroll(I) {
      Ie(I), y();
    },
    get panOnDrag() {
      return Fe();
    },
    set panOnDrag(I) {
      Fe(I), y();
    },
    get selectionOnDrag() {
      return Q();
    },
    set selectionOnDrag(I) {
      Q(I), y();
    },
    get autoPanOnConnect() {
      return le();
    },
    set autoPanOnConnect(I) {
      le(I), y();
    },
    get autoPanOnNodeDrag() {
      return oe();
    },
    set autoPanOnNodeDrag(I) {
      oe(I), y();
    },
    get onerror() {
      return me();
    },
    set onerror(I) {
      me(I), y();
    },
    get ondelete() {
      return Ke();
    },
    set ondelete(I) {
      Ke(I), y();
    },
    get onedgecreate() {
      return He();
    },
    set onedgecreate(I) {
      He(I), y();
    },
    get attributionPosition() {
      return et();
    },
    set attributionPosition(I) {
      et(I), y();
    },
    get proOptions() {
      return Re();
    },
    set proOptions(I) {
      Re(I), y();
    },
    get defaultEdgeOptions() {
      return ut();
    },
    set defaultEdgeOptions(I) {
      ut(I), y();
    },
    get width() {
      return tt();
    },
    set width(I) {
      tt(I), y();
    },
    get height() {
      return J();
    },
    set height(I) {
      J(I), y();
    },
    get colorMode() {
      return Me();
    },
    set colorMode(I) {
      Me(I), y();
    },
    get onconnect() {
      return ne();
    },
    set onconnect(I) {
      ne(I), y();
    },
    get onconnectstart() {
      return yn();
    },
    set onconnectstart(I) {
      yn(I), y();
    },
    get onconnectend() {
      return Ft();
    },
    set onconnectend(I) {
      Ft(I), y();
    },
    get onbeforedelete() {
      return Ne();
    },
    set onbeforedelete(I) {
      Ne(I), y();
    },
    get oninit() {
      return lt();
    },
    set oninit(I) {
      lt(I), y();
    },
    get nodeOrigin() {
      return be();
    },
    set nodeOrigin(I) {
      be(I), y();
    },
    get paneClickDistance() {
      return Ve();
    },
    set paneClickDistance(I) {
      Ve(I), y();
    },
    get nodeClickDistance() {
      return at();
    },
    set nodeClickDistance(I) {
      at(I), y();
    },
    get defaultMarkerColor() {
      return zt();
    },
    set defaultMarkerColor(I) {
      zt(I), y();
    },
    get style() {
      return gr();
    },
    set style(I) {
      gr(I), y();
    },
    get class() {
      return Kr();
    },
    set class(I) {
      Kr(I), y();
    }
  });
  return s(), Zd;
}
ie(
  qc,
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
function Uc(e, t) {
  he(t, !1);
  let n = w(t, "initialNodes", 12, void 0), r = w(t, "initialEdges", 12, void 0), o = w(t, "initialWidth", 12, void 0), i = w(t, "initialHeight", 12, void 0), s = w(t, "fitView", 12, void 0), a = w(t, "nodeOrigin", 12, void 0);
  const l = Ac({
    nodes: n(),
    edges: r(),
    width: o(),
    height: i(),
    nodeOrigin: a(),
    fitView: s()
  });
  Nr(Fi, { getStore: () => l }), ea(() => {
    l.reset();
  }), Te();
  var u = Ue(), c = _e(u);
  return vt(c, t, "default", {}), D(e, u), ve({
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
ie(
  Uc,
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
var Gp = /* @__PURE__ */ re("<button><!></button>");
function to(e, t) {
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
  he(t, !1);
  let o = w(t, "class", 12, void 0), i = w(t, "bgColor", 12, void 0), s = w(t, "bgColorHover", 12, void 0), a = w(t, "color", 12, void 0), l = w(t, "colorHover", 12, void 0), u = w(t, "borderColor", 12, void 0);
  Te();
  var c = Gp();
  let f;
  var d = Z(c);
  return vt(d, t, "default", { class: "button-svg" }), K(c), $e(
    (g) => {
      f = Qt(c, f, { type: "button", class: g, ...r }), st(c, "--xy-controls-button-background-color-props", i()), st(c, "--xy-controls-button-background-color-hover-props", s()), st(c, "--xy-controls-button-color-props", a()), st(c, "--xy-controls-button-color-hover-props", l()), st(c, "--xy-controls-button-border-color-props", u());
    },
    [
      () => bt([
        "svelte-flow__controls-button",
        o()
      ])
    ],
    pe
  ), qe("click", c, function(g) {
    Le.call(this, t, g);
  }), D(e, c), ve({
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
ie(
  to,
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
var jp = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function Gc(e) {
  var t = jp();
  D(e, t);
}
ie(Gc, {}, [], [], !0);
var Jp = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function jc(e) {
  var t = Jp();
  D(e, t);
}
ie(jc, {}, [], [], !0);
var Qp = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Jc(e) {
  var t = Qp();
  D(e, t);
}
ie(Jc, {}, [], [], !0);
var e2 = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Qc(e) {
  var t = e2();
  D(e, t);
}
ie(Qc, {}, [], [], !0);
var t2 = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function ed(e) {
  var t = t2();
  D(e, t);
}
ie(ed, {}, [], [], !0);
var n2 = /* @__PURE__ */ re("<!> <!>", 1), r2 = /* @__PURE__ */ re("<!> <!> <!> <!> <!> <!>", 1);
function td(e, t) {
  he(t, !1);
  const [n, r] = Qe(), o = () => j(A, "$nodesDraggable", n), i = () => j(O, "$nodesConnectable", n), s = () => j(B, "$elementsSelectable", n), a = () => j(M, "$viewport", n), l = () => j(b, "$minZoom", n), u = () => j($, "$maxZoom", n), c = te(), f = te(), d = te(), g = te();
  let v = w(t, "position", 12, "bottom-left"), C = w(t, "showZoom", 12, !0), _ = w(t, "showFitView", 12, !0), S = w(t, "showLock", 12, !0), p = w(t, "buttonBgColor", 12, void 0), x = w(t, "buttonBgColorHover", 12, void 0), m = w(t, "buttonColor", 12, void 0), k = w(t, "buttonColorHover", 12, void 0), P = w(t, "buttonBorderColor", 12, void 0), N = w(t, "ariaLabel", 12, void 0), T = w(t, "style", 12, void 0), V = w(t, "orientation", 12, "vertical"), H = w(t, "fitViewOptions", 12, void 0), L = w(t, "class", 12, "");
  const {
    zoomIn: z,
    zoomOut: R,
    fitView: E,
    viewport: M,
    minZoom: b,
    maxZoom: $,
    nodesDraggable: A,
    nodesConnectable: O,
    elementsSelectable: B
  } = Ge(), X = {
    bgColor: p(),
    bgColorHover: x(),
    color: m(),
    colorHover: k(),
    borderColor: P()
  }, q = () => {
    z();
  }, ce = () => {
    R();
  }, ee = () => {
    E(H());
  }, W = () => {
    G(c, !h(c)), A.set(h(c)), O.set(h(c)), B.set(h(c));
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
  }), ue(() => U(V()), () => {
    G(g, V() === "horizontal" ? "horizontal" : "vertical");
  }), gt(), Te();
  const de = /* @__PURE__ */ pe(() => bt([
    "svelte-flow__controls",
    h(g),
    L()
  ])), we = /* @__PURE__ */ pe(() => N() ?? "Svelte Flow controls");
  Ki(e, {
    get class() {
      return h(de);
    },
    get position() {
      return v();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return h(we);
    },
    get style() {
      return T();
    },
    children: (fe, ge) => {
      var se = r2(), Pe = _e(se);
      vt(Pe, t, "before", {});
      var Ye = Y(Pe, 2);
      {
        var Ie = (He) => {
          var et = n2(), Re = _e(et);
          to(Re, _t(
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
              children: (tt, J) => {
                Gc(tt);
              },
              $$slots: { default: !0 }
            }
          ));
          var ut = Y(Re, 2);
          to(ut, _t(
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
              $$events: { click: ce },
              children: (tt, J) => {
                jc(tt);
              },
              $$slots: { default: !0 }
            }
          )), D(He, et);
        };
        Ce(Ye, (He) => {
          C() && He(Ie);
        });
      }
      var Fe = Y(Ye, 2);
      {
        var Q = (He) => {
          to(He, _t(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            X,
            {
              $$events: { click: ee },
              children: (et, Re) => {
                Jc(et);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        Ce(Fe, (He) => {
          _() && He(Q);
        });
      }
      var le = Y(Fe, 2);
      {
        var oe = (He) => {
          to(He, _t(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            X,
            {
              $$events: { click: W },
              children: (et, Re) => {
                var ut = Ue(), tt = _e(ut);
                {
                  var J = (ne) => {
                    ed(ne);
                  }, Me = (ne) => {
                    Qc(ne);
                  };
                  Ce(tt, (ne) => {
                    h(c) ? ne(J) : ne(Me, !1);
                  });
                }
                D(et, ut);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        Ce(le, (He) => {
          S() && He(oe);
        });
      }
      var me = Y(le, 2);
      vt(me, t, "default", {});
      var Ke = Y(me, 2);
      vt(Ke, t, "after", {}), D(fe, se);
    },
    $$slots: { default: !0 }
  });
  var xe = ve({
    get position() {
      return v();
    },
    set position(fe) {
      v(fe), y();
    },
    get showZoom() {
      return C();
    },
    set showZoom(fe) {
      C(fe), y();
    },
    get showFitView() {
      return _();
    },
    set showFitView(fe) {
      _(fe), y();
    },
    get showLock() {
      return S();
    },
    set showLock(fe) {
      S(fe), y();
    },
    get buttonBgColor() {
      return p();
    },
    set buttonBgColor(fe) {
      p(fe), y();
    },
    get buttonBgColorHover() {
      return x();
    },
    set buttonBgColorHover(fe) {
      x(fe), y();
    },
    get buttonColor() {
      return m();
    },
    set buttonColor(fe) {
      m(fe), y();
    },
    get buttonColorHover() {
      return k();
    },
    set buttonColorHover(fe) {
      k(fe), y();
    },
    get buttonBorderColor() {
      return P();
    },
    set buttonBorderColor(fe) {
      P(fe), y();
    },
    get ariaLabel() {
      return N();
    },
    set ariaLabel(fe) {
      N(fe), y();
    },
    get style() {
      return T();
    },
    set style(fe) {
      T(fe), y();
    },
    get orientation() {
      return V();
    },
    set orientation(fe) {
      V(fe), y();
    },
    get fitViewOptions() {
      return H();
    },
    set fitViewOptions(fe) {
      H(fe), y();
    },
    get class() {
      return L();
    },
    set class(fe) {
      L(fe), y();
    }
  });
  return r(), xe;
}
ie(
  td,
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
var Xn;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Xn || (Xn = {}));
var o2 = /* @__PURE__ */ Se("<circle></circle>");
function nd(e, t) {
  he(t, !1);
  let n = w(t, "radius", 12, 5), r = w(t, "class", 12, "");
  Te();
  var o = o2();
  return $e(
    (i) => {
      ae(o, "cx", n()), ae(o, "cy", n()), ae(o, "r", n()), ur(o, pn(i));
    },
    [
      () => bt([
        "svelte-flow__background-pattern",
        "dots",
        r()
      ])
    ],
    pe
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
ie(nd, { radius: {}, class: {} }, [], [], !0);
var i2 = /* @__PURE__ */ Se("<path></path>");
function rd(e, t) {
  he(t, !1);
  let n = w(t, "lineWidth", 12, 1), r = w(t, "dimensions", 12), o = w(t, "variant", 12, void 0), i = w(t, "class", 12, "");
  Te();
  var s = i2();
  return $e(
    (a) => {
      ae(s, "stroke-width", n()), ae(s, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), ur(s, pn(a));
    },
    [
      () => bt([
        "svelte-flow__background-pattern",
        o(),
        i()
      ])
    ],
    pe
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
ie(
  rd,
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
const s2 = {
  [Xn.Dots]: 1,
  [Xn.Lines]: 1,
  [Xn.Cross]: 6
};
var a2 = /* @__PURE__ */ Se('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const l2 = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function od(e, t) {
  he(t, !1), ot(e, l2);
  const [n, r] = Qe(), o = () => j(k, "$flowId", n), i = () => j(m, "$viewport", n), s = te(), a = te(), l = te(), u = te(), c = te();
  let f = w(t, "id", 12, void 0), d = w(t, "variant", 28, () => Xn.Dots), g = w(t, "gap", 12, 20), v = w(t, "size", 12, 1), C = w(t, "lineWidth", 12, 1), _ = w(t, "bgColor", 12, void 0), S = w(t, "patternColor", 12, void 0), p = w(t, "patternClass", 12, void 0), x = w(t, "class", 12, "");
  const { viewport: m, flowId: k } = Ge(), P = v() || s2[d()], N = d() === Xn.Dots, T = d() === Xn.Cross, V = Array.isArray(g()) ? g() : [g(), g()];
  ue(
    () => (o(), U(f())),
    () => {
      G(s, `background-pattern-${o()}-${f() ? f() : ""}`);
    }
  ), ue(() => i(), () => {
    G(a, [
      V[0] * i().zoom || 1,
      V[1] * i().zoom || 1
    ]);
  }), ue(() => i(), () => {
    G(l, P * i().zoom);
  }), ue(() => (h(l), h(a)), () => {
    G(u, T ? [h(l), h(l)] : h(a));
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
  ), gt(), Te();
  var H = a2(), L = Z(H), z = Z(L);
  {
    var R = ($) => {
      const A = /* @__PURE__ */ pe(() => h(l) / 2);
      nd($, {
        get radius() {
          return h(A);
        },
        get class() {
          return p();
        }
      });
    }, E = ($) => {
      rd($, {
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
    Ce(z, ($) => {
      N ? $(R) : $(E, !1);
    });
  }
  K(L);
  var M = Y(L);
  K(H), $e(
    ($) => {
      ur(H, pn($), "svelte-1r7pe8d"), st(H, "--xy-background-color-props", _()), st(H, "--xy-background-pattern-color-props", S()), ae(L, "id", h(s)), ae(L, "x", i().x % h(a)[0]), ae(L, "y", i().y % h(a)[1]), ae(L, "width", h(a)[0]), ae(L, "height", h(a)[1]), ae(L, "patternTransform", `translate(-${h(c)[0]},-${h(c)[1]})`), ae(M, "fill", `url(#${h(s)})`);
    },
    [
      () => bt(["svelte-flow__background", x()])
    ],
    pe
  ), D(e, H);
  var b = ve({
    get id() {
      return f();
    },
    set id($) {
      f($), y();
    },
    get variant() {
      return d();
    },
    set variant($) {
      d($), y();
    },
    get gap() {
      return g();
    },
    set gap($) {
      g($), y();
    },
    get size() {
      return v();
    },
    set size($) {
      v($), y();
    },
    get lineWidth() {
      return C();
    },
    set lineWidth($) {
      C($), y();
    },
    get bgColor() {
      return _();
    },
    set bgColor($) {
      _($), y();
    },
    get patternColor() {
      return S();
    },
    set patternColor($) {
      S($), y();
    },
    get patternClass() {
      return p();
    },
    set patternClass($) {
      p($), y();
    },
    get class() {
      return x();
    },
    set class($) {
      x($), y();
    }
  });
  return r(), b;
}
ie(
  od,
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
var u2 = /* @__PURE__ */ Se("<rect></rect>");
function id(e, t) {
  he(t, !1);
  let n = w(t, "x", 12), r = w(t, "y", 12), o = w(t, "width", 12, 0), i = w(t, "height", 12, 0), s = w(t, "borderRadius", 12, 5), a = w(t, "color", 12, void 0), l = w(t, "shapeRendering", 12), u = w(t, "strokeColor", 12, void 0), c = w(t, "strokeWidth", 12, 2), f = w(t, "selected", 12, !1), d = w(t, "class", 12, "");
  Te();
  var g = u2();
  return $e(
    (v) => {
      ur(g, pn(v)), ae(g, "x", n()), ae(g, "y", r()), ae(g, "rx", s()), ae(g, "ry", s()), ae(g, "width", o()), ae(g, "height", i()), ae(g, "style", `${a() ? `fill: ${a()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), ae(g, "shape-rendering", l()), rt(g, "selected", f());
    },
    [
      () => bt(["svelte-flow__minimap-node", d()])
    ],
    pe
  ), D(e, g), ve({
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
ie(
  id,
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
function ls(e, t) {
  const n = Z0({
    domNode: e,
    panZoom: t.panZoom,
    getTransform: () => {
      const o = F(t.viewport);
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
const us = (e) => e instanceof Function ? e : () => e;
var c2 = /* @__PURE__ */ Se("<title> </title>"), d2 = /* @__PURE__ */ Se('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function sd(e, t) {
  he(t, !1);
  const [n, r] = Qe(), o = () => j(Fe, "$flowId", n), i = () => j(Pe, "$viewport", n), s = () => j(Ye, "$containerWidth", n), a = () => j(Ie, "$containerHeight", n), l = () => j(se, "$nodeLookup", n), u = () => j(ge, "$nodes", n), c = () => j(Q, "$panZoom", n), f = () => j(le, "$translateExtent", n), d = te(), g = te(), v = te(), C = te(), _ = te(), S = te(), p = te(), x = te(), m = te(), k = te(), P = te(), N = te(), T = te();
  let V = w(t, "position", 12, "bottom-right"), H = w(t, "ariaLabel", 12, "Mini map"), L = w(t, "nodeStrokeColor", 12, "transparent"), z = w(t, "nodeColor", 12, void 0), R = w(t, "nodeClass", 12, ""), E = w(t, "nodeBorderRadius", 12, 5), M = w(t, "nodeStrokeWidth", 12, 2), b = w(t, "bgColor", 12, void 0), $ = w(t, "maskColor", 12, void 0), A = w(t, "maskStrokeColor", 12, void 0), O = w(t, "maskStrokeWidth", 12, void 0), B = w(t, "width", 12, void 0), X = w(t, "height", 12, void 0), q = w(t, "pannable", 12, !0), ce = w(t, "zoomable", 12, !0), ee = w(t, "inversePan", 12, void 0), W = w(t, "zoomStep", 12, void 0), de = w(t, "style", 12, ""), we = w(t, "class", 12, "");
  const xe = 200, fe = 150, {
    nodes: ge,
    nodeLookup: se,
    viewport: Pe,
    width: Ye,
    height: Ie,
    flowId: Fe,
    panZoom: Q,
    translateExtent: le
  } = Ge(), oe = z() === void 0 ? void 0 : us(z()), me = us(L()), Ke = us(R()), He = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), et = `svelte-flow__minimap-desc-${o()}`;
  let Re = te(h(d));
  const ut = () => h(S);
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
      G(Re, l().size > 0 ? ic($o(l()), h(d)) : h(d)), u();
    }
  ), ue(() => U(B()), () => {
    G(g, B() ?? xe);
  }), ue(() => U(X()), () => {
    G(v, X() ?? fe);
  }), ue(
    () => (h(Re), h(g)),
    () => {
      G(C, h(Re).width / h(g));
    }
  ), ue(
    () => (h(Re), h(v)),
    () => {
      G(_, h(Re).height / h(v));
    }
  ), ue(
    () => (h(C), h(_)),
    () => {
      G(S, Math.max(h(C), h(_)));
    }
  ), ue(() => (h(S), h(g)), () => {
    G(p, h(S) * h(g));
  }), ue(
    () => (h(S), h(v)),
    () => {
      G(x, h(S) * h(v));
    }
  ), ue(() => h(S), () => {
    G(m, 5 * h(S));
  }), ue(
    () => (h(Re), h(p), h(m)),
    () => {
      G(k, h(Re).x - (h(p) - h(Re).width) / 2 - h(m));
    }
  ), ue(
    () => (h(Re), h(x), h(m)),
    () => {
      G(P, h(Re).y - (h(x) - h(Re).height) / 2 - h(m));
    }
  ), ue(() => (h(p), h(m)), () => {
    G(N, h(p) + h(m) * 2);
  }), ue(() => (h(x), h(m)), () => {
    G(T, h(x) + h(m) * 2);
  }), gt(), Te();
  const tt = /* @__PURE__ */ pe(() => de() + (b() ? `;--xy-minimap-background-color-props:${b()}` : "")), J = /* @__PURE__ */ pe(() => bt(["svelte-flow__minimap", we()]));
  Ki(e, {
    get position() {
      return V();
    },
    get style() {
      return h(tt);
    },
    get class() {
      return h(J);
    },
    "data-testid": "svelte-flow__minimap",
    children: (ne, yn) => {
      var Ft = Ue(), Ne = _e(Ft);
      {
        var lt = (be) => {
          var Ve = d2();
          ae(Ve, "aria-labelledby", et);
          var at = Z(Ve);
          {
            var zt = (Nt) => {
              var Ct = c2();
              ae(Ct, "id", et);
              var on = Z(Ct, !0);
              K(Ct), $e(() => vn(on, H())), D(Nt, Ct);
            };
            Ce(at, (Nt) => {
              H() && Nt(zt);
            });
          }
          var gr = Y(at);
          Ot(gr, 1, u, (Nt) => Nt.id, (Nt, Ct) => {
            var on = Ue();
            const Kt = /* @__PURE__ */ pe(() => l().get(h(Ct).id));
            var dt = _e(on);
            {
              var ji = (Un) => {
                const Zt = /* @__PURE__ */ pe(() => qn(h(Kt))), Vo = /* @__PURE__ */ pe(() => oe == null ? void 0 : oe(h(Kt))), Do = /* @__PURE__ */ pe(() => me(h(Kt))), Lo = /* @__PURE__ */ pe(() => Ke(h(Kt)));
                id(Un, _t(
                  {
                    get x() {
                      return h(Kt).internals.positionAbsolute.x;
                    },
                    get y() {
                      return h(Kt).internals.positionAbsolute.y;
                    }
                  },
                  () => h(Zt),
                  {
                    get selected() {
                      return h(Kt).selected;
                    },
                    get color() {
                      return h(Vo);
                    },
                    get borderRadius() {
                      return E();
                    },
                    get strokeColor() {
                      return h(Do);
                    },
                    get strokeWidth() {
                      return M();
                    },
                    shapeRendering: He,
                    get class() {
                      return h(Lo);
                    }
                  }
                ));
              };
              Ce(dt, (Un) => {
                h(Kt) && ac(h(Kt)) && Un(ji);
              });
            }
            D(Nt, on);
          });
          var Kr = Y(gr);
          K(Ve), ht(Ve, (Nt, Ct) => ls == null ? void 0 : ls(Nt, Ct), () => ({
            panZoom: c(),
            viewport: Pe,
            getViewScale: ut,
            translateExtent: f(),
            width: s(),
            height: a(),
            inversePan: ee(),
            zoomStep: W(),
            pannable: q(),
            zoomable: ce()
          })), $e(() => {
            ae(Ve, "width", h(g)), ae(Ve, "height", h(v)), ae(Ve, "viewBox", `${h(k) ?? ""} ${h(P) ?? ""} ${h(N) ?? ""} ${h(T) ?? ""}`), st(Ve, "--xy-minimap-mask-background-color-props", $()), st(Ve, "--xy-minimap-mask-stroke-color-props", A()), st(Ve, "--xy-minimap-mask-stroke-width-props", O() ? O() * h(S) : void 0), ae(Kr, "d", `M${h(k) - h(m)},${h(P) - h(m)}h${h(N) + h(m) * 2}v${h(T) + h(m) * 2}h${-h(N) - h(m) * 2}z
      M${h(d).x ?? ""},${h(d).y ?? ""}h${h(d).width ?? ""}v${h(d).height ?? ""}h${-h(d).width}z`);
          }), D(be, Ve);
        };
        Ce(Ne, (be) => {
          c() && be(lt);
        });
      }
      D(ne, Ft);
    },
    $$slots: { default: !0 }
  });
  var Me = ve({
    get position() {
      return V();
    },
    set position(ne) {
      V(ne), y();
    },
    get ariaLabel() {
      return H();
    },
    set ariaLabel(ne) {
      H(ne), y();
    },
    get nodeStrokeColor() {
      return L();
    },
    set nodeStrokeColor(ne) {
      L(ne), y();
    },
    get nodeColor() {
      return z();
    },
    set nodeColor(ne) {
      z(ne), y();
    },
    get nodeClass() {
      return R();
    },
    set nodeClass(ne) {
      R(ne), y();
    },
    get nodeBorderRadius() {
      return E();
    },
    set nodeBorderRadius(ne) {
      E(ne), y();
    },
    get nodeStrokeWidth() {
      return M();
    },
    set nodeStrokeWidth(ne) {
      M(ne), y();
    },
    get bgColor() {
      return b();
    },
    set bgColor(ne) {
      b(ne), y();
    },
    get maskColor() {
      return $();
    },
    set maskColor(ne) {
      $(ne), y();
    },
    get maskStrokeColor() {
      return A();
    },
    set maskStrokeColor(ne) {
      A(ne), y();
    },
    get maskStrokeWidth() {
      return O();
    },
    set maskStrokeWidth(ne) {
      O(ne), y();
    },
    get width() {
      return B();
    },
    set width(ne) {
      B(ne), y();
    },
    get height() {
      return X();
    },
    set height(ne) {
      X(ne), y();
    },
    get pannable() {
      return q();
    },
    set pannable(ne) {
      q(ne), y();
    },
    get zoomable() {
      return ce();
    },
    set zoomable(ne) {
      ce(ne), y();
    },
    get inversePan() {
      return ee();
    },
    set inversePan(ne) {
      ee(ne), y();
    },
    get zoomStep() {
      return W();
    },
    set zoomStep(ne) {
      W(ne), y();
    },
    get style() {
      return de();
    },
    set style(ne) {
      de(ne), y();
    },
    get class() {
      return we();
    },
    set class(ne) {
      we(ne), y();
    }
  });
  return r(), Me;
}
ie(
  sd,
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
const $l = (e) => d0(e);
function rn() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: s, height: a, minZoom: l, maxZoom: u, panZoom: c, nodes: f, edges: d, domNode: g, nodeLookup: v, nodeOrigin: C, edgeLookup: _, connectionLookup: S } = Ge(), p = (k) => {
    var H, L;
    const P = F(v), N = $l(k) ? k : P.get(k.id), T = N.parentId ? v0(N.position, N.measured, N.parentId, P, F(C)) : N.position, V = {
      ...N,
      position: T,
      width: ((H = N.measured) == null ? void 0 : H.width) ?? N.width,
      height: ((L = N.measured) == null ? void 0 : L.height) ?? N.height
    };
    return Vr(V);
  }, x = (k, P, N = { replace: !1 }) => {
    var H;
    const T = (H = F(v).get(k)) == null ? void 0 : H.internals.userNode;
    if (!T)
      return;
    const V = typeof P == "function" ? P(T) : P;
    N.replace ? f.update((L) => L.map((z) => z.id === k ? $l(V) ? V : { ...z, ...V } : z)) : (Object.assign(T, V), f.update((L) => L));
  }, m = (k) => F(v).get(k);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: m,
    getNode: (k) => {
      var P;
      return (P = m(k)) == null ? void 0 : P.internals.userNode;
    },
    getNodes: (k) => k === void 0 ? F(f) : Pl(F(v), k),
    getEdge: (k) => F(_).get(k),
    getEdges: (k) => k === void 0 ? F(d) : Pl(F(_), k),
    setZoom: (k, P) => {
      const N = F(c);
      return N ? N.scaleTo(k, { duration: P == null ? void 0 : P.duration }) : Promise.resolve(!1);
    },
    getZoom: () => F(i).zoom,
    setViewport: async (k, P) => {
      const N = F(i), T = F(c);
      return T ? (await T.setViewport({
        x: k.x ?? N.x,
        y: k.y ?? N.y,
        zoom: k.zoom ?? N.zoom
      }, { duration: P == null ? void 0 : P.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => F(i),
    setCenter: async (k, P, N) => {
      const T = typeof (N == null ? void 0 : N.zoom) < "u" ? N.zoom : F(u), V = F(c);
      return V ? (await V.setViewport({
        x: F(s) / 2 - k * T,
        y: F(a) / 2 - P * T,
        zoom: T
      }, { duration: N == null ? void 0 : N.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (k, P) => {
      const N = F(c);
      if (!N)
        return Promise.resolve(!1);
      const T = ca(k, F(s), F(a), F(l), F(u), (P == null ? void 0 : P.padding) ?? 0.1);
      return await N.setViewport(T, { duration: P == null ? void 0 : P.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (k, P = !0, N) => {
      const T = dl(k), V = T ? k : p(k);
      return V ? (N || F(f)).filter((H) => {
        const L = F(v).get(H.id);
        if (!L || !T && H.id === k.id)
          return !1;
        const z = Vr(L), R = ho(z, V);
        return P && R > 0 || R >= V.width * V.height;
      }) : [];
    },
    isNodeIntersecting: (k, P, N = !0) => {
      const V = dl(k) ? k : p(k);
      if (!V)
        return !1;
      const H = ho(V, P);
      return N && H > 0 || H >= V.width * V.height;
    },
    deleteElements: async ({ nodes: k = [], edges: P = [] }) => {
      const { nodes: N, edges: T } = await nc({
        nodesToRemove: k,
        edgesToRemove: P,
        nodes: F(f),
        edges: F(d),
        onBeforeDelete: F(r)
      });
      return N && f.update((V) => V.filter((H) => !N.some(({ id: L }) => L === H.id))), T && d.update((V) => V.filter((H) => !T.some(({ id: L }) => L === H.id))), {
        deletedNodes: N,
        deletedEdges: T
      };
    },
    screenToFlowPosition: (k, P = { snapToGrid: !0 }) => {
      const N = F(g);
      if (!N)
        return k;
      const T = P.snapToGrid ? F(o) : !1, { x: V, y: H, zoom: L } = F(i), { x: z, y: R } = N.getBoundingClientRect(), E = {
        x: k.x - z,
        y: k.y - R
      };
      return Po(E, [V, H, L], T !== null, T || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (k) => {
      const P = F(g);
      if (!P)
        return k;
      const { x: N, y: T, zoom: V } = F(i), { x: H, y: L } = P.getBoundingClientRect(), z = sc(k, [N, T, V]);
      return {
        x: z.x + H,
        y: z.y + L
      };
    },
    toObject: () => ({
      nodes: F(f).map((k) => ({
        ...k,
        // we want to make sure that changes to the nodes object that gets returned by toObject
        // do not affect the nodes object
        position: { ...k.position },
        data: { ...k.data }
      })),
      edges: F(d).map((k) => ({ ...k })),
      viewport: { ...F(i) }
    }),
    updateNode: x,
    updateNodeData: (k, P, N) => {
      var H;
      const T = (H = F(v).get(k)) == null ? void 0 : H.internals.userNode;
      if (!T)
        return;
      const V = typeof P == "function" ? P(T) : P;
      T.data = N != null && N.replace ? V : { ...T.data, ...V }, f.update((L) => L);
    },
    getNodesBounds: (k) => {
      const P = F(v), N = F(C);
      return f0(k, { nodeLookup: P, nodeOrigin: N });
    },
    getHandleConnections: ({ type: k, id: P, nodeId: N }) => {
      var T;
      return Array.from(((T = F(S).get(`${N}-${k}-${P ?? null}`)) == null ? void 0 : T.values()) ?? []);
    },
    viewport: i
  };
}
function Pl(e, t) {
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
var f2 = /* @__PURE__ */ re('<div class="svelte-flow__node-toolbar"><!></div>');
function ad(e, t) {
  he(t, !1);
  const [n, r] = Qe(), o = () => j(x, "$nodes", n), i = () => j(p, "$nodeLookup", n), s = () => j(S, "$viewport", n), a = () => j(_, "$domNode", n), l = te(), u = te(), c = te();
  let f = w(t, "nodeId", 12, void 0), d = w(t, "position", 12, void 0), g = w(t, "align", 12, void 0), v = w(t, "offset", 12, void 0), C = w(t, "isVisible", 12, void 0);
  const { domNode: _, viewport: S, nodeLookup: p, nodes: x } = Ge(), { getNodesBounds: m } = rn(), k = er("svelteflow__node_id");
  let P = te(), N = te([]), T = v() !== void 0 ? v() : 10, V = d() !== void 0 ? d() : Ee.Top, H = g() !== void 0 ? g() : "center";
  ue(
    () => (o(), U(f()), i()),
    () => {
      o();
      const M = Array.isArray(f()) ? f() : [f() || k];
      G(N, M.reduce(
        (b, $) => {
          const A = i().get($);
          return A && b.push(A), b;
        },
        []
      ));
    }
  ), ue(
    () => (h(N), s()),
    () => {
      const M = m(h(N));
      M && G(P, M0(M, s(), V, T, H));
    }
  ), ue(() => h(N), () => {
    G(l, h(N).length === 0 ? 1 : Math.max(...h(N).map((M) => (M.internals.z || 5) + 1)));
  }), ue(() => o(), () => {
    G(u, o().filter((M) => M.selected).length);
  }), ue(
    () => (U(C()), h(N), h(u)),
    () => {
      G(c, typeof C() == "boolean" ? C() : h(N).length === 1 && h(N)[0].selected && h(u) === 1);
    }
  ), gt(), Te();
  var L = Ue(), z = _e(L);
  {
    var R = (M) => {
      var b = f2(), $ = Z(b);
      vt($, t, "default", {}), K(b), ht(b, (A, O) => Cr == null ? void 0 : Cr(A, O), () => ({ domNode: a() })), $e(
        (A) => {
          ae(b, "data-id", A), st(b, "position", "absolute"), st(b, "transform", h(P)), st(b, "z-index", h(l));
        },
        [
          () => h(N).reduce((A, O) => `${A}${O.id} `, "").trim()
        ],
        pe
      ), D(M, b);
    };
    Ce(z, (M) => {
      a() && h(c) && h(N) && M(R);
    });
  }
  D(e, L);
  var E = ve({
    get nodeId() {
      return f();
    },
    set nodeId(M) {
      f(M), y();
    },
    get position() {
      return d();
    },
    set position(M) {
      d(M), y();
    },
    get align() {
      return g();
    },
    set align(M) {
      g(M), y();
    },
    get offset() {
      return v();
    },
    set offset(M) {
      v(M), y();
    },
    get isVisible() {
      return C();
    },
    set isVisible(M) {
      C(M), y();
    }
  });
  return r(), E;
}
ie(
  ad,
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
function dr(e) {
  const { nodes: t, nodeLookup: n } = Ge();
  let r = [], o = !0;
  return Bn([t, n], ([, i], s) => {
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
const Nl = "tinyflow-component";
class Uy {
  constructor(t) {
    mt(this, "options");
    mt(this, "rootEl");
    mt(this, "svelteFlowInstance");
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
    const t = document.createElement(Nl);
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
    const n = document.createElement(Nl);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const g2 = () => {
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
}, Jo = g2();
var h2 = /* @__PURE__ */ re("<button><!></button>");
function Je(e, t) {
  he(t, !0);
  const n = w(t, "children", 7), r = /* @__PURE__ */ Wt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = h2();
  let i;
  var s = Z(o);
  return Mr(s, () => n() ?? ft), K(o), $e(() => i = Qt(o, i, {
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
ie(Je, { children: {} }, [], [], !0);
var v2 = /* @__PURE__ */ re("<input>");
function ld(e, t) {
  he(t, !0);
  const n = /* @__PURE__ */ Wt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = v2();
  xu(r);
  let o;
  $e(() => o = Qt(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), D(e, r), ve();
}
ie(ld, {}, [], [], !0);
var p2 = /* @__PURE__ */ re("<input>");
function Ut(e, t) {
  he(t, !0);
  const n = /* @__PURE__ */ Wt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = p2();
  xu(r);
  let o;
  $e(() => o = Qt(r, o, {
    type: "text",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), D(e, r), ve();
}
ie(Ut, {}, [], [], !0);
var m2 = /* @__PURE__ */ re("<textarea></textarea>");
function Dt(e, t) {
  he(t, !0);
  const n = /* @__PURE__ */ Wt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = m2();
  lg(r);
  let o;
  $e(() => o = Qt(r, o, {
    ...n,
    class: `tf-textarea nodrag ${t.class ?? ""}`
  })), D(e, r), ve();
}
ie(Dt, {}, [], [], !0);
var y2 = /* @__PURE__ */ re('<div role="button"><!></div>'), w2 = /* @__PURE__ */ re("<div></div>");
function ud(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = nt(n, ["items", "onChange", "activeIndex"]);
  he(t, !1);
  let o = w(t, "items", 28, () => []), i = w(t, "onChange", 12, () => {
  }), s = w(t, "activeIndex", 12, 0);
  function a(c, f) {
    var d;
    s(f), (d = i()) == null || d(c, f);
  }
  Te();
  var l = w2();
  let u;
  return Ot(l, 5, o, Vi, (c, f, d) => {
    var g = y2();
    ae(g, "tabindex", d), g.__click = () => a(h(f), d), g.__keydown = (S) => {
      (S.key === "Enter" || S.key === " ") && (S.preventDefault(), a(h(f), d));
    };
    var v = Z(g);
    {
      var C = (S) => {
        var p = je();
        $e(() => vn(p, h(f).label)), D(S, p);
      }, _ = (S) => {
        var p = Ue(), x = _e(p);
        Mr(x, () => h(f).label ?? ft), D(S, p);
      };
      Ce(v, (S) => {
        typeof h(f).label == "string" ? S(C) : S(_, !1);
      });
    }
    K(g), $e(() => Tr(g, `tf-tabs-item ${(d === s() ? "active" : "") ?? ""}`)), D(c, g);
  }), K(l), $e(() => u = Qt(l, u, {
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
Oi(["click", "keydown"]);
ie(ud, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var _2 = (e, t, n) => t(h(n)), x2 = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(h(n)));
}, b2 = /* @__PURE__ */ re('<div class="tf-collapse-item-description"><!></div>'), C2 = /* @__PURE__ */ re('<div class="tf-collapse-item-content"><!></div>'), k2 = /* @__PURE__ */ re('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><span class="tf-collapse-item-title-icon"><!></span> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), E2 = /* @__PURE__ */ re("<div></div>");
const S2 = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function cd(e, t) {
  he(t, !0), ot(e, S2);
  let n = w(t, "items", 7), r = w(t, "onChange", 7), o = w(t, "activeKeys", 31, () => sn([]));
  function i(a) {
    var l;
    o().includes(a.key) ? o(o().filter((u) => u !== a.key)) : (o().push(a.key), o(o())), (l = r()) == null || l(a, o());
  }
  var s = E2();
  return Ot(s, 21, n, Vi, (a, l, u) => {
    var c = k2(), f = Z(c);
    ae(f, "tabindex", u), f.__click = [_2, i, l], f.__keydown = [x2, i, l];
    var d = Z(f), g = Z(d);
    In(g, {
      get target() {
        return h(l).icon;
      }
    }), K(d);
    var v = Y(d, 2);
    In(v, {
      get target() {
        return h(l).title;
      }
    });
    var C = Y(v, 2);
    K(f);
    var _ = Y(f, 2);
    {
      var S = (m) => {
        var k = b2(), P = Z(k);
        In(P, {
          get target() {
            return h(l).description;
          }
        }), K(k), D(m, k);
      };
      Ce(_, (m) => {
        h(l).description && m(S);
      });
    }
    var p = Y(_, 2);
    {
      var x = (m) => {
        var k = C2(), P = Z(k);
        In(P, {
          get target() {
            return h(l).content;
          }
        }), K(k), D(m, k);
      };
      Ce(p, (m) => {
        o().includes(h(l).key) && m(x);
      });
    }
    K(c), $e((m) => Tr(C, `tf-collapse-item-title-arrow ${m ?? ""} svelte-1jfktzw`), [
      () => o().includes(h(l).key) ? "rotate-90" : ""
    ]), D(a, c);
  }), K(s), $e(() => {
    ae(s, "style", t.style), Tr(s, `tf-collapse ${t.class ?? ""} svelte-1jfktzw`);
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
Oi(["click", "keydown"]);
ie(cd, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function In(e, t) {
  he(t, !0);
  let n = w(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = Ue(), o = _e(r);
  {
    var i = (a) => {
      var l = Ue(), u = _e(l);
      Mr(u, () => n() ?? ft), D(a, l);
    }, s = (a) => {
      var l = Ue(), u = _e(l);
      yu(u, n), D(a, l);
    };
    Ce(o, (a) => {
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
ie(In, { target: {} }, [], [], !0);
var $2 = (e, t, n) => t(h(n)), P2 = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), N2 = /* @__PURE__ */ re('<div class="tf-select-content-children"><!></div>'), M2 = /* @__PURE__ */ re('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), T2 = /* @__PURE__ */ re('<div class="tf-select-content nopan nodrag"><!></div>'), A2 = /* @__PURE__ */ re("<!> <!>", 1), H2 = /* @__PURE__ */ re('<div class="tf-select-input-placeholder"> </div>'), O2 = /* @__PURE__ */ re('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), V2 = /* @__PURE__ */ re("<div><!></div>");
function Kn(e, t) {
  he(t, !0);
  const n = (x, m = ft) => {
    var k = Ue(), P = _e(k);
    Ot(P, 19, m, (N, T) => `${T}_${N.value}`, (N, T) => {
      var V = M2(), H = _e(V);
      H.__click = [$2, C, T];
      var L = Z(H), z = Z(L);
      {
        var R = ($) => {
          var A = P2();
          D($, A);
        };
        Ce(z, ($) => {
          h(T).children && h(T).children.length > 0 && $(R);
        });
      }
      K(L);
      var E = Y(L, 2);
      In(E, {
        get target() {
          return h(T).label;
        }
      }), K(H);
      var M = Y(H, 2);
      {
        var b = ($) => {
          var A = N2(), O = Z(A);
          n(O, () => h(T).children), K(A), D($, A);
        };
        Ce(M, ($) => {
          h(T).children && h(T).children.length > 0 && (l() || c().includes(h(T).value)) && $(b);
        });
      }
      D(N, V);
    }), D(x, k);
  };
  let r = w(t, "items", 7), o = w(t, "onExpand", 7), i = w(t, "onSelect", 7), s = w(t, "value", 23, () => []), a = w(t, "defaultValue", 23, () => []), l = w(t, "expandAll", 7, !0), u = w(t, "multiple", 7, !1), c = w(t, "expandValue", 23, () => []), f = w(t, "placeholder", 7), d = /* @__PURE__ */ Wt(t, [
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
  ]), g = /* @__PURE__ */ Oe(() => {
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
  var _ = V2();
  let S;
  var p = Z(_);
  return Mn(
    Ho(p, {
      floating: (m) => {
        var k = T2(), P = Z(k);
        n(P, r), K(k), D(m, k);
      },
      children: (m, k) => {
        var P = O2();
        let N;
        var T = Z(P);
        Ot(
          T,
          23,
          () => h(g),
          (V, H) => `${H}_${V.value}`,
          (V, H, L) => {
            var z = Ue(), R = _e(z);
            {
              var E = (b) => {
                var $ = Ue(), A = _e($);
                {
                  var O = (B) => {
                    In(B, {
                      get target() {
                        return h(H).label;
                      }
                    });
                  };
                  Ce(A, (B) => {
                    h(L) === 0 && B(O);
                  });
                }
                D(b, $);
              }, M = (b) => {
                var $ = A2(), A = _e($);
                In(A, {
                  get target() {
                    return h(H).label;
                  }
                });
                var O = Y(A, 2);
                {
                  var B = (X) => {
                    var q = je(",");
                    D(X, q);
                  };
                  Ce(O, (X) => {
                    h(L) < h(g).length - 1 && X(B);
                  });
                }
                D(b, $);
              };
              Ce(R, (b) => {
                u() ? b(M, !1) : b(E);
              });
            }
            D(V, z);
          },
          (V) => {
            var H = H2(), L = Z(H, !0);
            K(H), $e(() => vn(L, f())), D(V, H);
          }
        ), K(T), ze(2), K(P), $e(() => N = Qt(P, N, {
          class: "tf-select-input nopan nodrag",
          ...d
        })), D(m, P);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (m) => v = m,
    () => v
  ), K(_), $e(() => S = Qt(_, S, {
    ...d,
    class: `tf-select ${d.class ?? ""}`
  })), D(e, _), ve({
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
Oi(["click"]);
ie(
  Kn,
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
const po = Math.min, Er = Math.max, xi = Math.round, cn = (e) => ({
  x: e,
  y: e
}), D2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, L2 = {
  start: "end",
  end: "start"
};
function Ds(e, t, n) {
  return Er(e, po(t, n));
}
function Mo(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ir(e) {
  return e.split("-")[0];
}
function To(e) {
  return e.split("-")[1];
}
function dd(e) {
  return e === "x" ? "y" : "x";
}
function pa(e) {
  return e === "y" ? "height" : "width";
}
function Lr(e) {
  return ["top", "bottom"].includes(ir(e)) ? "y" : "x";
}
function ma(e) {
  return dd(Lr(e));
}
function z2(e, t, n) {
  n === void 0 && (n = !1);
  const r = To(e), o = ma(e), i = pa(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = bi(s)), [s, bi(s)];
}
function I2(e) {
  const t = bi(e);
  return [Ls(e), t, Ls(t)];
}
function Ls(e) {
  return e.replace(/start|end/g, (t) => L2[t]);
}
function R2(e, t, n) {
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
function B2(e, t, n, r) {
  const o = To(e);
  let i = R2(ir(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Ls)))), i;
}
function bi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => D2[t]);
}
function Y2(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function fd(e) {
  return typeof e != "number" ? Y2(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ci(e) {
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
  const i = Lr(t), s = ma(t), a = pa(s), l = ir(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, d = r[a] / 2 - o[a] / 2;
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
  switch (To(t)) {
    case "start":
      g[s] -= d * (n && u ? -1 : 1);
      break;
    case "end":
      g[s] += d * (n && u ? -1 : 1);
      break;
  }
  return g;
}
const X2 = async (e, t, n) => {
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
  } = Ml(u, r, l), d = r, g = {}, v = 0;
  for (let C = 0; C < a.length; C++) {
    const {
      name: _,
      fn: S
    } = a[C], {
      x: p,
      y: x,
      data: m,
      reset: k
    } = await S({
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
    } = Ml(u, d, l)), C = -1);
  }
  return {
    x: c,
    y: f,
    placement: d,
    strategy: o,
    middlewareData: g
  };
};
async function gd(e, t) {
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
  } = Mo(t, e), v = fd(g), _ = a[d ? f === "floating" ? "reference" : "floating" : f], S = Ci(await i.getClippingRect({
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
  }, k = Ci(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: p,
    offsetParent: x,
    strategy: l
  }) : p);
  return {
    top: (S.top - k.top + v.top) / m.y,
    bottom: (k.bottom - S.bottom + v.bottom) / m.y,
    left: (S.left - k.left + v.left) / m.x,
    right: (k.right - S.right + v.right) / m.x
  };
}
const W2 = (e) => ({
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
    } = Mo(e, t) || {};
    if (u == null)
      return {};
    const f = fd(c), d = {
      x: n,
      y: r
    }, g = ma(o), v = pa(g), C = await s.getDimensions(u), _ = g === "y", S = _ ? "top" : "left", p = _ ? "bottom" : "right", x = _ ? "clientHeight" : "clientWidth", m = i.reference[v] + i.reference[g] - d[g] - i.floating[v], k = d[g] - i.reference[g], P = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let N = P ? P[x] : 0;
    (!N || !await (s.isElement == null ? void 0 : s.isElement(P))) && (N = a.floating[x] || i.floating[v]);
    const T = m / 2 - k / 2, V = N / 2 - C[v] / 2 - 1, H = po(f[S], V), L = po(f[p], V), z = H, R = N - C[v] - L, E = N / 2 - C[v] / 2 + T, M = Ds(z, E, R), b = !l.arrow && To(o) != null && E !== M && i.reference[v] / 2 - (E < z ? H : L) - C[v] / 2 < 0, $ = b ? E < z ? E - z : E - R : 0;
    return {
      [g]: d[g] + $,
      data: {
        [g]: M,
        centerOffset: E - M - $,
        ...b && {
          alignmentOffset: $
        }
      },
      reset: b
    };
  }
}), F2 = function(e) {
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
      } = Mo(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const S = ir(o), p = Lr(a), x = ir(a) === a, m = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), k = d || (x || !C ? [bi(a)] : I2(a)), P = v !== "none";
      !d && P && k.push(...B2(a, C, v, m));
      const N = [a, ...k], T = await gd(t, _), V = [];
      let H = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && V.push(T[S]), f) {
        const E = z2(o, s, m);
        V.push(T[E[0]], T[E[1]]);
      }
      if (H = [...H, {
        placement: o,
        overflows: V
      }], !V.every((E) => E <= 0)) {
        var L, z;
        const E = (((L = i.flip) == null ? void 0 : L.index) || 0) + 1, M = N[E];
        if (M)
          return {
            data: {
              index: E,
              overflows: H
            },
            reset: {
              placement: M
            }
          };
        let b = (z = H.filter(($) => $.overflows[0] <= 0).sort(($, A) => $.overflows[1] - A.overflows[1])[0]) == null ? void 0 : z.placement;
        if (!b)
          switch (g) {
            case "bestFit": {
              var R;
              const $ = (R = H.filter((A) => {
                if (P) {
                  const O = Lr(A.placement);
                  return O === p || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  O === "y";
                }
                return !0;
              }).map((A) => [A.placement, A.overflows.filter((O) => O > 0).reduce((O, B) => O + B, 0)]).sort((A, O) => A[1] - O[1])[0]) == null ? void 0 : R[0];
              $ && (b = $);
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
async function K2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = ir(n), a = To(n), l = Lr(n) === "y", u = ["left", "top"].includes(s) ? -1 : 1, c = i && l ? -1 : 1, f = Mo(t, e);
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
const Z2 = function(e) {
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
      } = t, l = await K2(t, e);
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
}, q2 = function(e) {
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
              x: S,
              y: p
            } = _;
            return {
              x: S,
              y: p
            };
          }
        },
        ...l
      } = Mo(e, t), u = {
        x: n,
        y: r
      }, c = await gd(t, l), f = Lr(ir(o)), d = dd(f);
      let g = u[d], v = u[f];
      if (i) {
        const _ = d === "y" ? "top" : "left", S = d === "y" ? "bottom" : "right", p = g + c[_], x = g - c[S];
        g = Ds(p, g, x);
      }
      if (s) {
        const _ = f === "y" ? "top" : "left", S = f === "y" ? "bottom" : "right", p = v + c[_], x = v - c[S];
        v = Ds(p, v, x);
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
function Zi() {
  return typeof window < "u";
}
function Wr(e) {
  return hd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ht(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function On(e) {
  var t;
  return (t = (hd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function hd(e) {
  return Zi() ? e instanceof Node || e instanceof Ht(e).Node : !1;
}
function en(e) {
  return Zi() ? e instanceof Element || e instanceof Ht(e).Element : !1;
}
function gn(e) {
  return Zi() ? e instanceof HTMLElement || e instanceof Ht(e).HTMLElement : !1;
}
function Tl(e) {
  return !Zi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ht(e).ShadowRoot;
}
function Ao(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = tn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function U2(e) {
  return ["table", "td", "th"].includes(Wr(e));
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
  const t = wa(), n = en(e) ? tn(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function G2(e) {
  let t = Zn(e);
  for (; gn(t) && !zr(t); ) {
    if (ya(t))
      return t;
    if (qi(t))
      return null;
    t = Zn(t);
  }
  return null;
}
function wa() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function zr(e) {
  return ["html", "body", "#document"].includes(Wr(e));
}
function tn(e) {
  return Ht(e).getComputedStyle(e);
}
function Ui(e) {
  return en(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Zn(e) {
  if (Wr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Tl(e) && e.host || // Fallback.
    On(e)
  );
  return Tl(t) ? t.host : t;
}
function vd(e) {
  const t = Zn(e);
  return zr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : gn(t) && Ao(t) ? t : vd(t);
}
function pd(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = vd(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Ht(o);
  return i ? (zs(s), t.concat(s, s.visualViewport || [], Ao(o) ? o : [], [])) : t.concat(o, pd(o, []));
}
function zs(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function md(e) {
  const t = tn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = gn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = xi(n) !== i || xi(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function yd(e) {
  return en(e) ? e : e.contextElement;
}
function Sr(e) {
  const t = yd(e);
  if (!gn(t))
    return cn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = md(t);
  let s = (i ? xi(n.width) : n.width) / r, a = (i ? xi(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const j2 = /* @__PURE__ */ cn(0);
function wd(e) {
  const t = Ht(e);
  return !wa() || !t.visualViewport ? j2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function J2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ht(e) ? !1 : t;
}
function mo(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = yd(e);
  let s = cn(1);
  t && (r ? en(r) && (s = Sr(r)) : s = Sr(e));
  const a = J2(i, n, r) ? wd(i) : cn(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, c = o.width / s.x, f = o.height / s.y;
  if (i) {
    const d = Ht(i), g = r && en(r) ? Ht(r) : r;
    let v = d, C = zs(v);
    for (; C && r && g !== v; ) {
      const _ = Sr(C), S = C.getBoundingClientRect(), p = tn(C), x = S.left + (C.clientLeft + parseFloat(p.paddingLeft)) * _.x, m = S.top + (C.clientTop + parseFloat(p.paddingTop)) * _.y;
      l *= _.x, u *= _.y, c *= _.x, f *= _.y, l += x, u += m, v = Ht(C), C = zs(v);
    }
  }
  return Ci({
    width: c,
    height: f,
    x: l,
    y: u
  });
}
function _a(e, t) {
  const n = Ui(e).scrollLeft;
  return t ? t.left + n : mo(On(e)).left + n;
}
function _d(e, t, n) {
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
function Q2(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = On(r), a = t ? qi(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = cn(1);
  const c = cn(0), f = gn(r);
  if ((f || !f && !i) && ((Wr(r) !== "body" || Ao(s)) && (l = Ui(r)), gn(r))) {
    const g = mo(r);
    u = Sr(r), c.x = g.x + r.clientLeft, c.y = g.y + r.clientTop;
  }
  const d = s && !f && !i ? _d(s, l, !0) : cn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + d.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + d.y
  };
}
function em(e) {
  return Array.from(e.getClientRects());
}
function tm(e) {
  const t = On(e), n = Ui(e), r = e.ownerDocument.body, o = Er(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Er(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + _a(e);
  const a = -n.scrollTop;
  return tn(r).direction === "rtl" && (s += Er(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function nm(e, t) {
  const n = Ht(e), r = On(e), o = n.visualViewport;
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
function rm(e, t) {
  const n = mo(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = gn(e) ? Sr(e) : cn(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
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
    r = nm(e, n);
  else if (t === "document")
    r = tm(On(e));
  else if (en(t))
    r = rm(t, n);
  else {
    const o = wd(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Ci(r);
}
function xd(e, t) {
  const n = Zn(e);
  return n === t || !en(n) || zr(n) ? !1 : tn(n).position === "fixed" || xd(n, t);
}
function om(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = pd(e, []).filter((a) => en(a) && Wr(a) !== "body"), o = null;
  const i = tn(e).position === "fixed";
  let s = i ? Zn(e) : e;
  for (; en(s) && !zr(s); ) {
    const a = tn(s), l = ya(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Ao(s) && !l && xd(e, s)) ? r = r.filter((c) => c !== s) : o = a, s = Zn(s);
  }
  return t.set(e, r), r;
}
function im(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? qi(t) ? [] : om(t, this._c) : [].concat(n), r], a = s[0], l = s.reduce((u, c) => {
    const f = Al(t, c, o);
    return u.top = Er(f.top, u.top), u.right = po(f.right, u.right), u.bottom = po(f.bottom, u.bottom), u.left = Er(f.left, u.left), u;
  }, Al(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function sm(e) {
  const {
    width: t,
    height: n
  } = md(e);
  return {
    width: t,
    height: n
  };
}
function am(e, t, n) {
  const r = gn(t), o = On(t), i = n === "fixed", s = mo(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = cn(0);
  if (r || !r && !i)
    if ((Wr(t) !== "body" || Ao(o)) && (a = Ui(t)), r) {
      const d = mo(t, !0, i, t);
      l.x = d.x + t.clientLeft, l.y = d.y + t.clientTop;
    } else o && (l.x = _a(o));
  const u = o && !r && !i ? _d(o, a) : cn(0), c = s.left + a.scrollLeft - l.x - u.x, f = s.top + a.scrollTop - l.y - u.y;
  return {
    x: c,
    y: f,
    width: s.width,
    height: s.height
  };
}
function cs(e) {
  return tn(e).position === "static";
}
function Hl(e, t) {
  if (!gn(e) || tn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return On(e) === n && (n = n.ownerDocument.body), n;
}
function bd(e, t) {
  const n = Ht(e);
  if (qi(e))
    return n;
  if (!gn(e)) {
    let o = Zn(e);
    for (; o && !zr(o); ) {
      if (en(o) && !cs(o))
        return o;
      o = Zn(o);
    }
    return n;
  }
  let r = Hl(e, t);
  for (; r && U2(r) && cs(r); )
    r = Hl(r, t);
  return r && zr(r) && cs(r) && !ya(r) ? n : r || G2(e) || n;
}
const lm = async function(e) {
  const t = this.getOffsetParent || bd, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: am(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function um(e) {
  return tn(e).direction === "rtl";
}
const cm = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Q2,
  getDocumentElement: On,
  getClippingRect: im,
  getOffsetParent: bd,
  getElementRects: lm,
  getClientRects: em,
  getDimensions: sm,
  getScale: Sr,
  isElement: en,
  isRTL: um
}, dm = Z2, fm = q2, gm = F2, hm = W2, vm = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: cm,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return X2(e, t, {
    ...o,
    platform: i
  });
}, pm = ({
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
    const S = document.querySelector(e);
    if (S)
      e = S;
    else
      throw new Error("element not found by document.querySelector('" + e + "')");
  }
  let u;
  if (typeof n == "string") {
    const S = document.querySelector(n);
    if (S)
      u = S;
    else
      throw new Error("element not found by document.querySelector('" + n + "')");
  } else
    u = n;
  let c;
  l && (c = document.createElement("div"), c.style.position = "absolute", c.style.backgroundColor = "#222", c.style.width = "8px", c.style.height = "8px", c.style.transform = "rotate(45deg)", c.style.display = "none", u.firstElementChild.before(c));
  function f() {
    vm(e, u, {
      placement: r,
      middleware: [
        dm(o),
        // 手动偏移配置
        gm(i),
        //自动翻转
        fm(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [hm({ element: c })] : []
      ]
    }).then(({ x: S, y: p, placement: x, middlewareData: m }) => {
      if (Object.assign(u.style, {
        left: `${S}px`,
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
  function C(S) {
    S.stopPropagation(), d ? v() : g();
  }
  function _(S) {
    u.contains(S.target) || v();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((S) => {
    e.addEventListener(S, C);
  }), document.addEventListener("click", _), {
    destroy() {
      t.forEach((S) => {
        e.removeEventListener(S, C);
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
var mm = /* @__PURE__ */ re('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function Ho(e, t) {
  he(t, !0);
  const n = w(t, "children", 7), r = w(t, "floating", 7), o = w(t, "placement", 7, "bottom");
  let i, s, a;
  cr(() => (a = pm({
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
  var u = mm(), c = Z(u), f = Z(c);
  Mr(f, n), K(c), Mn(c, (v) => i = v, () => i);
  var d = Y(c, 2), g = Z(d);
  return Mr(g, r), K(d), Mn(d, (v) => s = v, () => s), K(u), D(e, u), ve({
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
ie(Ho, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function ct(e, t) {
  he(t, !0);
  const n = w(t, "children", 7), r = w(t, "level", 7, 1), o = w(t, "mt", 7), i = w(t, "mb", 7);
  var s = Ue(), a = _e(s);
  return mg(a, () => `h${r()}`, !1, (l, u) => {
    let c;
    $e(() => c = Qt(
      l,
      c,
      {
        class: "tf-heading",
        style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
      },
      void 0,
      l.namespaceURI === Il,
      l.nodeName.includes("-")
    ));
    var f = Ue(), d = _e(f);
    Mr(d, () => n() ?? ft), D(u, f);
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
ie(ct, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var ym = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const wm = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function Gi(e, t) {
  he(t, !0), ot(e, wm);
  const n = /* @__PURE__ */ Wt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Je(e, _t(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = ym();
      D(r, i);
    },
    $$slots: { default: !0 }
  })), ve();
}
ie(Gi, {}, [], [], !0);
const _m = () => {
  const e = Ge();
  return {
    deleteNode: (n) => {
      e.nodes.update((r) => r.filter((o) => o.id !== n)), e.edges.update(
        (r) => r.filter((o) => o.source !== n && o.target !== n)
      );
    }
  };
}, yo = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, xm = () => {
  const { nodes: e, nodeLookup: t } = Ge();
  return {
    copyNode: (r) => {
      var s;
      const i = (s = F(t).get(r)) == null ? void 0 : s.internals.userNode;
      if (i) {
        const a = yo(), l = {
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
var bm = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), Cm = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), km = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), Em = /* @__PURE__ */ re('<div class="tf-node-toolbar svelte-44dmwv"><!> <!> <!></div>'), Sm = /* @__PURE__ */ re('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!>', 1);
const $m = {
  hash: "svelte-44dmwv",
  code: ".tf-node-toolbar.svelte-44dmwv {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}"
};
function fr(e, t) {
  he(t, !0), ot(e, $m);
  const n = w(t, "data", 7), r = w(t, "id", 7, ""), o = w(t, "icon", 7), i = w(t, "children", 7), s = w(t, "allowExecute", 7, !0), a = w(t, "allowCopy", 7, !0), l = w(t, "allowDelete", 7, !0);
  let u = n().expand ? ["key"] : [];
  const { updateNodeData: c } = rn(), f = [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: i()
    }
  ], { deleteNode: d } = _m(), { copyNode: g } = xm();
  var v = Sm(), C = _e(v);
  {
    var _ = (P) => {
      ad(P, {
        get position() {
          return Ee.Top;
        },
        align: "end",
        children: (N, T) => {
          var V = Em(), H = Z(V);
          {
            var L = (b) => {
              Je(b, {
                class: "tf-node-toolbar-item",
                children: ($, A) => {
                  var O = bm();
                  D($, O);
                },
                $$slots: { default: !0 }
              });
            };
            Ce(H, (b) => {
              s() && b(L);
            });
          }
          var z = Y(H, 2);
          {
            var R = (b) => {
              Je(b, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  g(r());
                },
                children: ($, A) => {
                  var O = Cm();
                  D($, O);
                },
                $$slots: { default: !0 }
              });
            };
            Ce(z, (b) => {
              a() && b(R);
            });
          }
          var E = Y(z, 2);
          {
            var M = (b) => {
              Je(b, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  d(r());
                },
                children: ($, A) => {
                  var O = km();
                  D($, O);
                },
                $$slots: { default: !0 }
              });
            };
            Ce(E, (b) => {
              l() && b(M);
            });
          }
          K(V), D(N, V);
        },
        $$slots: { default: !0 }
      });
    };
    Ce(C, (P) => {
      (s() || a() || l()) && P(_);
    });
  }
  var S = Y(C, 2), p = Y(Z(S), 2), x = Z(p);
  cd(x, {
    items: f,
    activeKeys: u,
    onChange: (P, N) => {
      c(r(), { expand: N == null ? void 0 : N.includes("key") });
    }
  }), K(p), K(S);
  var m = Y(S, 2);
  or(m, {
    type: "target",
    get position() {
      return Ee.Left;
    },
    style: " left: -12px;top: 20px"
  });
  var k = Y(m, 2);
  return or(k, {
    type: "source",
    get position() {
      return Ee.Right;
    },
    style: "right: -12px;top: 20px"
  }), D(e, v), ve({
    get data() {
      return n();
    },
    set data(P) {
      n(P), y();
    },
    get id() {
      return r();
    },
    set id(P = "") {
      r(P), y();
    },
    get icon() {
      return o();
    },
    set icon(P) {
      o(P), y();
    },
    get children() {
      return i();
    },
    set children(P) {
      i(P), y();
    },
    get allowExecute() {
      return s();
    },
    set allowExecute(P = !0) {
      s(P), y();
    },
    get allowCopy() {
      return a();
    },
    set allowCopy(P = !0) {
      a(P), y();
    },
    get allowDelete() {
      return l();
    },
    set allowDelete(P = !0) {
      l(P), y();
    }
  });
}
ie(
  fr,
  {
    data: {},
    id: {},
    icon: {},
    children: {},
    allowExecute: {},
    allowCopy: {},
    allowDelete: {}
  },
  [],
  [],
  !0
);
function Lt() {
  return er("svelteflow__node_id");
}
const Cd = [
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
], Pm = [
  {
    value: "ref",
    label: "引用"
  },
  {
    value: "input",
    label: "固定值"
  }
];
var Nm = /* @__PURE__ */ re('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), Mm = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), Tm = /* @__PURE__ */ re('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const Am = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function kd(e, t) {
  he(t, !0), ot(e, Am);
  const [n, r] = Qe(), o = () => j(h(l), "$node", n), i = w(t, "parameter", 7), s = w(t, "index", 7);
  let a = Lt(), l = /* @__PURE__ */ Oe(() => dr(a)), u = /* @__PURE__ */ Oe(() => {
    var N, T;
    return {
      ...i(),
      ...(T = (N = o()) == null ? void 0 : N.data) == null ? void 0 : T.parameters[s()]
    };
  });
  const { updateNodeData: c } = rn(), f = (N) => {
    const T = N.target.value;
    c(a, (V) => {
      let H = V.data.parameters;
      return H[s()].name = T, { parameters: H };
    });
  }, d = (N) => {
    const T = N.target.checked;
    c(a, (V) => {
      let H = V.data.parameters;
      return H[s()].required = T, { parameters: H };
    });
  };
  let g;
  const v = () => {
    c(a, (N) => {
      let T = N.data.parameters;
      return T.splice(s(), 1), { parameters: [...T] };
    }), g == null || g.hide();
  };
  var C = Tm(), _ = _e(C), S = Z(_);
  Ut(S, {
    style: "width: 100%;",
    get value() {
      return h(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: f
  }), K(_);
  var p = Y(_, 2), x = Z(p);
  ld(x, {
    get checked() {
      return h(u).required;
    },
    onchange: d
  }), K(p);
  var m = Y(p, 2), k = Z(m);
  Mn(
    Ho(k, {
      placement: "bottom",
      floating: (T) => {
        var V = Nm(), H = Z(V), L = Y(Z(H));
        Kn(L, {
          items: Cd,
          style: "width: 100%"
        }), K(H);
        var z = Y(H, 2), R = Y(Z(z));
        Dt(R, { rows: 1, style: "width: 100%;" }), K(z);
        var E = Y(z, 2), M = Y(Z(E));
        Dt(M, { rows: 3, style: "width: 100%;" }), K(E);
        var b = Y(E, 2), $ = Z(b);
        Je($, {
          onclick: v,
          children: (A, O) => {
            ze();
            var B = je("删除");
            D(A, B);
          },
          $$slots: { default: !0 }
        }), K(b), K(V), D(T, V);
      },
      children: (T, V) => {
        Je(T, {
          class: "input-btn-more",
          children: (H, L) => {
            var z = Mm();
            D(H, z);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => g = T,
    () => g
  ), K(m), D(e, C);
  var P = ve({
    get parameter() {
      return i();
    },
    set parameter(N) {
      i(N), y();
    },
    get index() {
      return s();
    },
    set index(N) {
      s(N), y();
    }
  });
  return r(), P;
}
ie(kd, { parameter: {}, index: {} }, [], [], !0);
var Hm = /* @__PURE__ */ re('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), Om = /* @__PURE__ */ re('<div class="none-params svelte-3n0wca">无输入参数</div>'), Vm = /* @__PURE__ */ re('<div class="input-container svelte-3n0wca"><!> <!></div>');
const Dm = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function Ed(e, t) {
  he(t, !0), ot(e, Dm);
  const [n, r] = Qe(), o = () => j(h(s), "$node", n);
  let i = Lt(), s = /* @__PURE__ */ Oe(() => dr(i)), a = /* @__PURE__ */ Oe(() => {
    var d, g;
    return [...((g = (d = o()) == null ? void 0 : d.data) == null ? void 0 : g.parameters) || []];
  });
  var l = Vm(), u = Z(l);
  {
    var c = (d) => {
      var g = Hm();
      ze(4), D(d, g);
    };
    Ce(u, (d) => {
      h(a).length !== 0 && d(c);
    });
  }
  var f = Y(u, 2);
  Ot(
    f,
    19,
    () => h(a),
    (d) => d.id,
    (d, g, v) => {
      kd(d, {
        get parameter() {
          return h(g);
        },
        get index() {
          return h(v);
        }
      });
    },
    (d) => {
      var g = Om();
      D(d, g);
    }
  ), K(l), D(e, l), ve(), r();
}
ie(Ed, {}, [], [], !0);
const Fr = () => {
  const { updateNodeData: e } = rn();
  return {
    addParameter: (t, n = "parameters", r) => {
      const o = {
        ...r,
        id: yo()
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
var Lm = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), zm = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Im = /* @__PURE__ */ re('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const Rm = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function Sd(e, t) {
  he(t, !0), ot(e, Rm);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Wt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Lt(), { addParameter: i } = Fr();
  return fr(e, _t(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    icon: (a) => {
      var l = Lm();
      D(a, l);
    },
    children: (a, l) => {
      var u = Im(), c = _e(u), f = Z(c);
      ct(f, {
        level: 3,
        children: (v, C) => {
          ze();
          var _ = je("输入参数");
          D(v, _);
        },
        $$slots: { default: !0 }
      });
      var d = Y(f, 2);
      Je(d, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o);
        },
        children: (v, C) => {
          var _ = zm();
          D(v, _);
        },
        $$slots: { default: !0 }
      }), K(c);
      var g = Y(c, 2);
      Ed(g, {}), D(a, u);
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
ie(Sd, { data: {} }, [], [], !0);
const $d = (e, t, n) => {
  for (let r of n)
    r.target === t && r.source && (e.push(r.source), $d(e, r.source, n));
}, Ol = (e, t) => {
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
}, Bm = (e = !1) => {
  const t = Lt(), n = dr(t), { nodes: r, edges: o } = Ge();
  return Bn([n, r, o], ([i, s, a]) => {
    const l = [];
    if (e) {
      for (let u of s)
        if (u.parentId === i.id) {
          const c = Ol(u, u.parentId === i.id);
          c && l.push(c);
        }
    } else {
      const u = [];
      $d(u, t, a);
      for (let c of s)
        if (u.includes(c.id)) {
          const f = Ol(c, c.parentId === i.id);
          f && l.push(f);
        }
    }
    return l;
  });
};
var Ym = /* @__PURE__ */ re('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), Xm = /* @__PURE__ */ re('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const Wm = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Pd(e, t) {
  he(t, !0), ot(e, Wm);
  const [n, r] = Qe(), o = () => j(h(c), "$node", n), i = () => j(m, "$selectItems", n), s = w(t, "parameter", 7), a = w(t, "index", 7), l = w(t, "dataKeyName", 7);
  let u = Lt(), c = /* @__PURE__ */ Oe(() => dr(u)), f = /* @__PURE__ */ Oe(() => {
    var M;
    return {
      ...s(),
      ...(M = o()) == null ? void 0 : M.data[l()][a()]
    };
  });
  const { updateNodeData: d } = rn(), g = (M, b) => {
    d(u, ($) => {
      let A = $.data[l()];
      return A[a()] = { ...A[a()], [M]: b }, { [l()]: A };
    });
  }, v = (M) => {
    const b = M.target.value;
    g("name", b);
  }, C = (M) => {
    const b = M.target.value;
    g("value", b);
  }, _ = (M) => {
    const b = M.value;
    g("ref", b);
  }, S = (M) => {
    const b = M.value;
    g("refType", b);
  };
  let p;
  const x = () => {
    d(u, (M) => {
      let b = M.data[l()];
      return b.splice(a(), 1), { [l()]: [...b] };
    }), p == null || p.hide();
  }, m = Bm();
  var k = Xm(), P = _e(k), N = Z(P);
  Ut(N, {
    style: "width: 100%;",
    get value() {
      return h(f).name;
    },
    placeholder: "请输入参数名称",
    oninput: v
  }), K(P);
  var T = Y(P, 2), V = Z(T);
  {
    var H = (M) => {
      Ut(M, {
        get value() {
          return h(f).value;
        },
        placeholder: "请输入参数值",
        oninput: C
      });
    }, L = (M) => {
      const b = /* @__PURE__ */ Oe(() => [h(f).ref]);
      Kn(M, {
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
    Ce(V, (M) => {
      h(f).refType === "input" ? M(H) : M(L, !1);
    });
  }
  K(T);
  var z = Y(T, 2), R = Z(z);
  Mn(
    Ho(R, {
      placement: "bottom",
      floating: (b) => {
        var $ = Ym(), A = Z($), O = Y(Z(A));
        const B = /* @__PURE__ */ Oe(() => h(f).refType ? [h(f).refType] : []);
        Kn(O, {
          items: Pm,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return h(B);
          },
          onSelect: S
        }), K(A);
        var X = Y(A, 2), q = Y(Z(X));
        Dt(q, {
          rows: 1,
          style: "width: 100%;",
          onchange: (we) => {
            const xe = we.target.value;
            g("defaultValue", xe);
          }
        }), K(X);
        var ce = Y(X, 2), ee = Y(Z(ce));
        Dt(ee, {
          rows: 3,
          style: "width: 100%;",
          onchange: (we) => {
            const xe = we.target.value;
            g("description", xe);
          }
        }), K(ce);
        var W = Y(ce, 2), de = Z(W);
        Je(de, {
          onclick: x,
          children: (we, xe) => {
            ze();
            var fe = je("删除");
            D(we, fe);
          },
          $$slots: { default: !0 }
        }), K(W), K($), D(b, $);
      },
      children: (b, $) => {
        Gi(b, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (b) => p = b,
    () => p
  ), K(z), D(e, k);
  var E = ve({
    get parameter() {
      return s();
    },
    set parameter(M) {
      s(M), y();
    },
    get index() {
      return a();
    },
    set index(M) {
      a(M), y();
    },
    get dataKeyName() {
      return l();
    },
    set dataKeyName(M) {
      l(M), y();
    }
  });
  return r(), E;
}
ie(Pd, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var Fm = /* @__PURE__ */ re('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Km = /* @__PURE__ */ re('<div class="none-params svelte-1sm1mgi"> </div>'), Zm = /* @__PURE__ */ re('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const qm = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function kn(e, t) {
  he(t, !0), ot(e, qm);
  const [n, r] = Qe(), o = () => j(h(l), "$node", n), i = w(t, "noneParameterText", 7, "无输入参数"), s = w(t, "dataKeyName", 7, "parameters");
  let a = Lt(), l = /* @__PURE__ */ Oe(() => dr(a)), u = /* @__PURE__ */ Oe(() => {
    var C;
    return [...((C = o()) == null ? void 0 : C.data[s()]) || []];
  });
  var c = Zm(), f = Z(c);
  {
    var d = (C) => {
      var _ = Fm();
      ze(4), D(C, _);
    };
    Ce(f, (C) => {
      h(u).length !== 0 && C(d);
    });
  }
  var g = Y(f, 2);
  Ot(
    g,
    19,
    () => h(u),
    (C) => C.id,
    (C, _, S) => {
      Pd(C, {
        get parameter() {
          return h(_);
        },
        get index() {
          return h(S);
        },
        get dataKeyName() {
          return s();
        }
      });
    },
    (C) => {
      var _ = Km(), S = Z(_, !0);
      K(_), $e(() => vn(S, i())), D(C, _);
    }
  ), K(c), D(e, c);
  var v = ve({
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
ie(kn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Um = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), Gm = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), jm = /* @__PURE__ */ re('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const Jm = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function Nd(e, t) {
  he(t, !0), ot(e, Jm);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Wt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Lt(), { addParameter: i } = Fr();
  return fr(e, _t(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      allowExecute: !1,
      icon: (a) => {
        var l = Um();
        D(a, l);
      },
      children: (a, l) => {
        var u = jm(), c = _e(u), f = Z(c);
        ct(f, {
          level: 3,
          children: (v, C) => {
            ze();
            var _ = je("输出参数");
            D(v, _);
          },
          $$slots: { default: !0 }
        });
        var d = Y(f, 2);
        Je(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (v, C) => {
            var _ = Gm();
            D(v, _);
          },
          $$slots: { default: !0 }
        }), K(c);
        var g = Y(c, 2);
        kn(g, {
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
ie(Nd, { data: {} }, [], [], !0);
const Qm = () => er("tinyflow_options");
var ey = /* @__PURE__ */ Se('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), ty = /* @__PURE__ */ re('<div class="input-more-item svelte-1cfeest"><!></div>'), ny = /* @__PURE__ */ re('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), ry = /* @__PURE__ */ re('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const oy = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Md(e, t) {
  he(t, !0), ot(e, oy);
  const [n, r] = Qe(), o = () => j(h(u), "$node", n), i = w(t, "parameter", 7), s = w(t, "position", 7), a = w(t, "dataKeyName", 7);
  let l = Lt(), u = /* @__PURE__ */ Oe(() => dr(l)), c = /* @__PURE__ */ Oe(() => {
    var O;
    let $ = (O = o()) == null ? void 0 : O.data[a()], A;
    if ($ && s().length > 0) {
      let B = $;
      for (let X = 0; X < s().length; X++) {
        const q = s()[X];
        X == s().length - 1 ? A = B[q] : B = B[q].children;
      }
    }
    return { ...i(), ...A };
  });
  const { updateNodeData: f } = rn(), d = ($, A) => {
    f(l, (O) => {
      const B = O.data[a()];
      if (B && s().length > 0) {
        let X = B;
        for (let q = 0; q < s().length; q++) {
          const ce = s()[q];
          q == s().length - 1 ? X[ce] = { ...X[ce], [$]: A } : X = B[ce].children;
        }
      }
      return { [a()]: B };
    });
  }, g = ($) => {
    const A = $.target.value;
    d("name", A);
  }, v = ($) => {
    const A = $.value;
    d("dataType", A);
  };
  let C;
  const _ = () => {
    f(l, ($) => {
      let A = $.data[a()];
      if (A && s().length > 0) {
        let O = A;
        for (let B = 0; B < s().length; B++) {
          const X = s()[B];
          B == s().length - 1 ? O.splice(X, 1) : O = O[X].children;
        }
      }
      return { [a()]: [...A] };
    }), C == null || C.hide();
  }, S = () => {
    f(l, ($) => {
      let A = $.data[a()];
      if (A && s().length > 0) {
        let O = A;
        for (let B = 0; B < s().length; B++) {
          const X = s()[B];
          B == s().length - 1 ? O[X].children ? O[X].children.push({
            id: yo(),
            name: "newParam",
            dataType: "String"
          }) : O[X].children = [
            {
              id: yo(),
              name: "newParam",
              dataType: "String"
            }
          ] : O = O[X].children;
        }
      }
      return { [a()]: [...A] };
    });
  };
  var p = ry(), x = _e(p), m = Z(x);
  {
    var k = ($) => {
      var A = Ue(), O = _e(A);
      Ot(O, 17, s, Vi, (B, X) => {
        ze();
        var q = je(" ");
        D(B, q);
      }), D($, A);
    };
    Ce(m, ($) => {
      s().length > 1 && $(k);
    });
  }
  var P = Y(m, 2);
  const N = /* @__PURE__ */ Oe(() => h(c).nameDisabled === !0);
  Ut(P, {
    style: "width: 100%;",
    get value() {
      return h(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: g,
    get disabled() {
      return h(N);
    }
  }), K(x);
  var T = Y(x, 2), V = Z(T);
  const H = /* @__PURE__ */ Oe(() => h(c).dataType ? [h(c).dataType] : []), L = /* @__PURE__ */ Oe(() => h(c).dataTypeDisabled === !0);
  Kn(V, {
    items: Cd,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return h(H);
    },
    get disabled() {
      return h(L);
    },
    onSelect: v
  });
  var z = Y(V, 2);
  {
    var R = ($) => {
      Je($, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: S,
        children: (A, O) => {
          var B = ey();
          D(A, B);
        },
        $$slots: { default: !0 }
      });
    };
    Ce(z, ($) => {
      (h(c).dataType === "Object" || h(c).dataType === "Array") && $(R);
    });
  }
  K(T);
  var E = Y(T, 2), M = Z(E);
  Mn(
    Ho(M, {
      placement: "bottom",
      floating: (A) => {
        var O = ny(), B = Z(O), X = Y(Z(B));
        Dt(X, {
          rows: 1,
          style: "width: 100%;",
          onchange: (de) => {
            const we = de.target.value;
            d("defaultValue", we);
          }
        }), K(B);
        var q = Y(B, 2), ce = Y(Z(q));
        Dt(ce, {
          rows: 3,
          style: "width: 100%;",
          onchange: (de) => {
            const we = de.target.value;
            d("description", we);
          }
        }), K(q);
        var ee = Y(q, 2);
        {
          var W = (de) => {
            var we = ty(), xe = Z(we);
            Je(xe, {
              onclick: _,
              children: (fe, ge) => {
                ze();
                var se = je("删除");
                D(fe, se);
              },
              $$slots: { default: !0 }
            }), K(we), D(de, we);
          };
          Ce(ee, (de) => {
            h(c).deleteDisabled !== !0 && de(W);
          });
        }
        K(O), D(A, O);
      },
      children: (A, O) => {
        Gi(A, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (A) => C = A,
    () => C
  ), K(E), D(e, p);
  var b = ve({
    get parameter() {
      return i();
    },
    set parameter($) {
      i($), y();
    },
    get position() {
      return s();
    },
    set position($) {
      s($), y();
    },
    get dataKeyName() {
      return a();
    },
    set dataKeyName($) {
      a($), y();
    }
  });
  return r(), b;
}
ie(Md, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var iy = /* @__PURE__ */ re("<!> <!>", 1), sy = /* @__PURE__ */ re('<div class="none-params svelte-1sm1mgi"> </div>'), ay = /* @__PURE__ */ re('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), ly = /* @__PURE__ */ re('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const uy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Oo(e, t) {
  he(t, !0), ot(e, uy);
  const [n, r] = Qe(), o = () => j(h(u), "$node", n), i = (_, S = ft, p = ft) => {
    var x = Ue(), m = _e(x);
    Ot(
      m,
      19,
      S,
      (k) => `${k.id}_${k.children ? k.children.length : 0}`,
      (k, P, N) => {
        var T = iy(), V = _e(T);
        const H = /* @__PURE__ */ Oe(() => [...p(), h(N)]);
        Md(V, {
          get parameter() {
            return h(P);
          },
          get position() {
            return h(H);
          },
          get dataKeyName() {
            return a();
          }
        });
        var L = Y(V, 2);
        {
          var z = (R) => {
            var E = /* @__PURE__ */ pe(() => [...p(), h(N)]);
            i(R, () => h(P).children, () => h(E));
          };
          Ce(L, (R) => {
            h(P).children && R(z);
          });
        }
        D(k, T);
      },
      (k) => {
        var P = Ue(), N = _e(P);
        {
          var T = (V) => {
            var H = sy(), L = Z(H, !0);
            K(H), $e(() => vn(L, s())), D(V, H);
          };
          Ce(N, (V) => {
            p().length === 0 && V(T);
          });
        }
        D(k, P);
      }
    ), D(_, x);
  }, s = w(t, "noneParameterText", 7, "无输出参数"), a = w(t, "dataKeyName", 7, "outputDefs");
  let l = Lt(), u = /* @__PURE__ */ Oe(() => dr(l)), c = /* @__PURE__ */ Oe(() => {
    var _;
    return [...((_ = o()) == null ? void 0 : _.data[a()]) || []];
  });
  var f = ly(), d = Z(f);
  {
    var g = (_) => {
      var S = ay();
      ze(4), D(_, S);
    };
    Ce(d, (_) => {
      h(c).length !== 0 && _(g);
    });
  }
  var v = Y(d, 2);
  i(v, () => h(c) || [], () => []), K(f), D(e, f);
  var C = ve({
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
ie(Oo, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var cy = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), dy = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), fy = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), gy = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">模型</div> <div class="setting-item svelte-15t2v24"><!> <!></div> <div class="setting-title svelte-15t2v24">系统提示词</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">用户提示词</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const hy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Td(e, t) {
  he(t, !0), ot(e, hy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Wt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Lt(), { addParameter: i } = Fr(), s = Qm();
  let a = hs(sn([]));
  cr(async () => {
    var c;
    const u = await ((c = s.provider) == null ? void 0 : c.llms());
    h(a).push(...u || []);
  });
  const { updateNodeData: l } = rn();
  return fr(e, _t(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var f = cy();
        D(c, f);
      },
      children: (c, f) => {
        var d = gy(), g = _e(d), v = Z(g);
        ct(v, {
          level: 3,
          children: (E, M) => {
            ze();
            var b = je("输入参数");
            D(E, b);
          },
          $$slots: { default: !0 }
        });
        var C = Y(v, 2);
        Je(C, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (E, M) => {
            var b = dy();
            D(E, b);
          },
          $$slots: { default: !0 }
        }), K(g);
        var _ = Y(g, 2);
        kn(_, {});
        var S = Y(_, 2);
        ct(S, {
          level: 3,
          mt: "10px",
          children: (E, M) => {
            ze();
            var b = je("模型设置");
            D(E, b);
          },
          $$slots: { default: !0 }
        });
        var p = Y(S, 4), x = Z(p);
        const m = /* @__PURE__ */ Oe(() => n().llmId ? [n().llmId] : []);
        Kn(x, {
          get items() {
            return h(a);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (E) => {
            const M = E.value;
            l(o, () => ({ llmId: M }));
          },
          get value() {
            return h(m);
          }
        });
        var k = Y(x, 2);
        Gi(k, {}), K(p);
        var P = Y(p, 4), N = Z(P);
        Dt(N, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%"
        }), K(P);
        var T = Y(P, 4), V = Z(T);
        Dt(V, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%"
        }), K(T);
        var H = Y(T, 2), L = Z(H);
        ct(L, {
          level: 3,
          mt: "10px",
          children: (E, M) => {
            ze();
            var b = je("输出参数");
            D(E, b);
          },
          $$slots: { default: !0 }
        });
        var z = Y(L, 2);
        Je(z, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (E, M) => {
            var b = fy();
            D(E, b);
          },
          $$slots: { default: !0 }
        }), K(H);
        var R = Y(H, 2);
        Oo(R, {}), D(c, d);
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
ie(Td, { data: {} }, [], [], !0);
var vy = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), py = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), my = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), yy = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const wy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Ad(e, t) {
  he(t, !0), ot(e, wy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Wt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Lt(), { addParameter: i } = Fr(), { updateNodeData: s } = rn(), a = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" }
  ];
  return fr(e, _t(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = vy();
        D(u, c);
      },
      children: (u, c) => {
        var f = yy(), d = _e(f), g = Z(d);
        ct(g, {
          level: 3,
          children: (L, z) => {
            ze();
            var R = je("输入参数");
            D(L, R);
          },
          $$slots: { default: !0 }
        });
        var v = Y(g, 2);
        Je(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (L, z) => {
            var R = py();
            D(L, R);
          },
          $$slots: { default: !0 }
        }), K(d);
        var C = Y(d, 2);
        kn(C, {});
        var _ = Y(C, 2);
        ct(_, {
          level: 3,
          mt: "10px",
          children: (L, z) => {
            ze();
            var R = je("代码");
            D(L, R);
          },
          $$slots: { default: !0 }
        });
        var S = Y(_, 4), p = Z(S);
        const x = /* @__PURE__ */ Oe(() => n().engine ? [n().engine] : ["qlexpress"]);
        Kn(p, {
          items: a,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (L) => {
            const z = L.value;
            s(o, () => ({ engine: z }));
          },
          get value() {
            return h(x);
          }
        }), K(S);
        var m = Y(S, 4), k = Z(m);
        const P = /* @__PURE__ */ Oe(() => n().code || "");
        Dt(k, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: (L) => {
            s(o, () => ({ code: L.target.value }));
          },
          get value() {
            return h(P);
          }
        }), K(m);
        var N = Y(m, 2), T = Z(N);
        ct(T, {
          level: 3,
          mt: "10px",
          children: (L, z) => {
            ze();
            var R = je("输出参数");
            D(L, R);
          },
          $$slots: { default: !0 }
        });
        var V = Y(T, 2);
        Je(V, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (L, z) => {
            var R = my();
            D(L, R);
          },
          $$slots: { default: !0 }
        }), K(N);
        var H = Y(N, 2);
        Oo(H, {}), D(u, f);
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
ie(Ad, { data: {} }, [], [], !0);
var _y = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), xy = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), by = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Cy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Hd(e, t) {
  he(t, !0), ot(e, Cy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Wt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Lt(), { addParameter: i } = Fr(), { updateNodeData: s } = rn();
  return si(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), fr(e, _t(
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
        var c = by(), f = _e(c), d = Z(f);
        ct(d, {
          level: 3,
          children: (P, N) => {
            ze();
            var T = je("输入参数");
            D(P, T);
          },
          $$slots: { default: !0 }
        });
        var g = Y(d, 2);
        Je(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (P, N) => {
            var T = xy();
            D(P, T);
          },
          $$slots: { default: !0 }
        }), K(f);
        var v = Y(f, 2);
        kn(v, {});
        var C = Y(v, 2);
        ct(C, {
          level: 3,
          mt: "10px",
          children: (P, N) => {
            ze();
            var T = je("代码");
            D(P, T);
          },
          $$slots: { default: !0 }
        });
        var _ = Y(C, 4), S = Z(_);
        const p = /* @__PURE__ */ Oe(() => n().template || "");
        Dt(S, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: (P) => {
            s(o, () => ({ template: P.target.value }));
          },
          get value() {
            return h(p);
          }
        }), K(_);
        var x = Y(_, 2), m = Z(x);
        ct(m, {
          level: 3,
          mt: "10px",
          children: (P, N) => {
            ze();
            var T = je("输出参数");
            D(P, T);
          },
          $$slots: { default: !0 }
        }), K(x);
        var k = Y(x, 2);
        Oo(k, {}), D(l, c);
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
ie(Hd, { data: {} }, [], [], !0);
var ky = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), Ey = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Sy = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), $y = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Py = /* @__PURE__ */ re('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), Ny = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), My = /* @__PURE__ */ re('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), Ty = /* @__PURE__ */ re('<div style="width: 100%"><!></div>'), Ay = /* @__PURE__ */ re('<div style="width: 100%"><!></div>'), Hy = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Oy = /* @__PURE__ */ re('<div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1vtcqdz"><!> <!></div> <!> <div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="radio-group svelte-1vtcqdz"><label class="svelte-1vtcqdz"><!>none</label> <label class="svelte-1vtcqdz"><!>form-data</label> <label class="svelte-1vtcqdz"><!>x-www-form-urlencoded</label> <label class="svelte-1vtcqdz"><!>json</label> <label class="svelte-1vtcqdz"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1vtcqdz"><!> <!></div> <!>', 1);
const Vy = {
  hash: "svelte-1vtcqdz",
  code: ".heading.svelte-1vtcqdz {display:flex;margin-bottom:10px;}.radio-group.svelte-1vtcqdz {display:flex;margin:10px 0;}.radio-group.svelte-1vtcqdz label:where(.svelte-1vtcqdz) {display:flex;font-size:14px;}"
};
function Od(e, t) {
  he(t, !0), ot(e, Vy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Wt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Lt(), { addParameter: i } = Fr(), { updateNodeData: s } = rn();
  return fr(e, _t(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = ky();
        D(l, u);
      },
      children: (l, u) => {
        var c = Oy(), f = _e(c), d = Z(f), g = Z(d);
        Kn(g, {
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
        var v = Y(d, 2), C = Z(v);
        Ut(C, { placeholder: "请输入url", style: "width: 100%" }), K(v), K(f);
        var _ = Y(f, 2), S = Z(_);
        ct(S, {
          level: 3,
          children: (le, oe) => {
            ze();
            var me = je("Http 头信息");
            D(le, me);
          },
          $$slots: { default: !0 }
        });
        var p = Y(S, 2);
        Je(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "headers");
          },
          children: (le, oe) => {
            var me = Ey();
            D(le, me);
          },
          $$slots: { default: !0 }
        }), K(_);
        var x = Y(_, 2);
        kn(x, { dataKeyName: "headers" });
        var m = Y(x, 2), k = Z(m);
        ct(k, {
          level: 3,
          children: (le, oe) => {
            ze();
            var me = je("参数");
            D(le, me);
          },
          $$slots: { default: !0 }
        });
        var P = Y(k, 2);
        Je(P, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "urlParameters");
          },
          children: (le, oe) => {
            var me = Sy();
            D(le, me);
          },
          $$slots: { default: !0 }
        }), K(m);
        var N = Y(m, 2);
        kn(N, { dataKeyName: "urlParameters" });
        var T = Y(N, 2);
        ct(T, {
          level: 3,
          mt: "10px",
          children: (le, oe) => {
            ze();
            var me = je("Body");
            D(le, me);
          },
          $$slots: { default: !0 }
        });
        var V = Y(T, 2), H = Z(V), L = Z(H);
        const z = /* @__PURE__ */ Oe(() => !n().bodyType);
        Ut(L, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return h(z);
          },
          onchange: (le) => {
            var oe;
            (oe = le.target) != null && oe.checked && s(o, { bodyType: "" });
          }
        }), ze(), K(H);
        var R = Y(H, 2), E = Z(R);
        const M = /* @__PURE__ */ Oe(() => n().bodyType === "form-data");
        Ut(E, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return h(M);
          },
          onchange: (le) => {
            var oe;
            (oe = le.target) != null && oe.checked && s(o, { bodyType: "form-data" });
          }
        }), ze(), K(R);
        var b = Y(R, 2), $ = Z(b);
        const A = /* @__PURE__ */ Oe(() => n().bodyType === "x-www-form-urlencoded");
        Ut($, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return h(A);
          },
          onchange: (le) => {
            var oe;
            (oe = le.target) != null && oe.checked && s(o, { bodyType: "x-www-form-urlencoded" });
          }
        }), ze(), K(b);
        var O = Y(b, 2), B = Z(O);
        const X = /* @__PURE__ */ Oe(() => n().bodyType === "json");
        Ut(B, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return h(X);
          },
          onchange: (le) => {
            var oe;
            (oe = le.target) != null && oe.checked && s(o, { bodyType: "json" });
          }
        }), ze(), K(O);
        var q = Y(O, 2), ce = Z(q);
        const ee = /* @__PURE__ */ Oe(() => n().bodyType === "raw");
        Ut(ce, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return h(ee);
          },
          onchange: (le) => {
            var oe;
            (oe = le.target) != null && oe.checked && s(o, { bodyType: "raw" });
          }
        }), ze(), K(q), K(V);
        var W = Y(V, 2);
        {
          var de = (le) => {
            var oe = Py(), me = _e(oe), Ke = Z(me);
            ct(Ke, {
              level: 3,
              children: (Re, ut) => {
                ze();
                var tt = je("参数");
                D(Re, tt);
              },
              $$slots: { default: !0 }
            });
            var He = Y(Ke, 2);
            Je(He, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                i(o, "fromData");
              },
              children: (Re, ut) => {
                var tt = $y();
                D(Re, tt);
              },
              $$slots: { default: !0 }
            }), K(me);
            var et = Y(me, 2);
            kn(et, { dataKeyName: "fromData" }), D(le, oe);
          };
          Ce(W, (le) => {
            n().bodyType === "form-data" && le(de);
          });
        }
        var we = Y(W, 2);
        {
          var xe = (le) => {
            var oe = My(), me = _e(oe), Ke = Z(me);
            ct(Ke, {
              level: 3,
              children: (Re, ut) => {
                ze();
                var tt = je("参数");
                D(Re, tt);
              },
              $$slots: { default: !0 }
            });
            var He = Y(Ke, 2);
            Je(He, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                i(o, "fromUrlencoded");
              },
              children: (Re, ut) => {
                var tt = Ny();
                D(Re, tt);
              },
              $$slots: { default: !0 }
            }), K(me);
            var et = Y(me, 2);
            kn(et, { dataKeyName: "fromUrlencoded" }), D(le, oe);
          };
          Ce(we, (le) => {
            n().bodyType === "x-www-form-urlencoded" && le(xe);
          });
        }
        var fe = Y(we, 2);
        {
          var ge = (le) => {
            var oe = Ty(), me = Z(oe);
            Dt(me, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Ke) => {
                s(o, { bodyJson: Ke.target.value });
              }
            }), K(oe), D(le, oe);
          };
          Ce(fe, (le) => {
            n().bodyType === "json" && le(ge);
          });
        }
        var se = Y(fe, 2);
        {
          var Pe = (le) => {
            var oe = Ay(), me = Z(oe);
            Dt(me, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Ke) => {
                s(o, { bodyRaw: Ke.target.value });
              }
            }), K(oe), D(le, oe);
          };
          Ce(se, (le) => {
            n().bodyType === "raw" && le(Pe);
          });
        }
        var Ye = Y(se, 2), Ie = Z(Ye);
        ct(Ie, {
          level: 3,
          mt: "10px",
          children: (le, oe) => {
            ze();
            var me = je("输出参数");
            D(le, me);
          },
          $$slots: { default: !0 }
        });
        var Fe = Y(Ie, 2);
        Je(Fe, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (le, oe) => {
            var me = Hy();
            D(le, me);
          },
          $$slots: { default: !0 }
        }), K(Ye);
        var Q = Y(Ye, 2);
        Oo(Q, {}), D(l, c);
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
ie(Od, { data: {} }, [], [], !0);
const Dy = {
  startNode: Sd,
  codeNode: Ad,
  llmNode: Td,
  templateNode: Hd,
  httpNode: Od,
  endNode: Nd
};
var Ly = /* @__PURE__ */ re("<!> ", 1);
function Vd(e, t) {
  he(t, !0);
  const n = w(t, "icon", 7), r = w(t, "title", 7), o = w(t, "type", 7), i = w(t, "description", 7), s = w(t, "extra", 7);
  return Je(e, {
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
      var c = Ly(), f = _e(c);
      yu(f, n);
      var d = Y(f);
      $e(() => vn(d, ` ${r() ?? ""}`)), D(l, c);
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
ie(
  Vd,
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
var zy = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), Iy = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), Ry = /* @__PURE__ */ re('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"><!></div></div></div> <!></div>');
function Dd(e) {
  let t = hs("base"), n = hs("show");
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
      type: "startNode",
      description: "startNode"
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
      type: "startNode",
      description: "startNode"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>',
      title: "搜索引擎",
      type: "startNode",
      description: "startNode"
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
  var i = Ry(), s = Z(i), a = Z(s), l = Z(a);
  ud(l, {
    style: "width: 100%",
    items: o,
    onChange: (v) => {
      G(t, sn(v.value.toString()));
    }
  }), K(a);
  var u = Y(a, 2), c = Z(u);
  Ot(c, 21, () => r, Vi, (v, C) => {
    Vd(v, _t(() => h(C)));
  }), K(c);
  var f = Y(c, 2), d = Z(f);
  Je(d, {
    children: (v, C) => {
      ze();
      var _ = je("测试业务按钮");
      D(v, _);
    },
    $$slots: { default: !0 }
  }), K(f), K(u), K(s);
  var g = Y(s, 2);
  Je(g, {
    onclick: () => {
      G(n, sn(h(n) ? "" : "show"));
    },
    children: (v, C) => {
      var _ = Ue(), S = _e(_);
      {
        var p = (m) => {
          var k = zy();
          D(m, k);
        }, x = (m) => {
          var k = Iy();
          D(m, k);
        };
        Ce(S, (m) => {
          h(n) === "show" ? m(p) : m(x, !1);
        });
      }
      D(v, _);
    },
    $$slots: { default: !0 }
  }), K(i), $e(() => {
    Tr(i, `tf-toolbar ${h(n) ?? ""}`), ae(c, "style", `display: ${(h(t) === "base" ? "flex" : "none") ?? ""}`), ae(f, "style", `display: ${(h(t) !== "base" ? "flex" : "none") ?? ""}`);
  }), D(e, i);
}
ie(Dd, {}, [], [], !0);
var By = /* @__PURE__ */ re("<!> <!> <!>", 1), Yy = /* @__PURE__ */ re('<div style="position: relative; height: 100%; width: 100%"><!> <!></div>');
function Ld(e, t) {
  he(t, !0);
  const n = w(t, "onInit", 7), r = rn();
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
      id: `node_${yo()}`,
      position: f,
      data: {},
      ...g
    };
    Jo.addNode(v), Jo.selectNodeOnly(v.id);
  };
  var s = Yy(), a = Z(s);
  Dd(a);
  var l = Y(a, 2);
  const u = /* @__PURE__ */ Oe(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: go.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  return qc(l, _t({ nodeTypes: Dy }, Jo, {
    class: "tinyflow-logo",
    get defaultEdgeOptions() {
      return h(u);
    },
    $$events: { drop: i, dragover: o },
    children: (c, f) => {
      var d = By(), g = _e(d);
      od(g, {});
      var v = Y(g, 2);
      td(v, {});
      var C = Y(v, 2);
      sd(C, {}), D(c, d);
    },
    $$slots: { default: !0 }
  })), K(s), D(e, s), ve({
    get onInit() {
      return n();
    },
    set onInit(c) {
      n(c), y();
    }
  });
}
ie(Ld, { onInit: {} }, [], [], !0);
function Xy(e, t) {
  he(t, !0);
  const n = w(t, "options", 7), r = w(t, "onInit", 7), { data: o } = n();
  return Jo.init(o.nodes || [], o.edges || []), Nr("tinyflow_options", n()), Uc(e, {
    fitView: !0,
    children: (i, s) => {
      Ld(i, {
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
customElements.define("tinyflow-component", ie(Xy, { options: {}, onInit: {} }, [], [], !1));
export {
  Uy as Tinyflow
};
//# sourceMappingURL=index.js.map
