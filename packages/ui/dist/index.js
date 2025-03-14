var Jd = Object.defineProperty;
var Ea = (e) => {
  throw TypeError(e);
};
var Qd = (e, t, n) => t in e ? Jd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var yt = (e, t, n) => Qd(e, typeof t != "symbol" ? t + "" : t, n), ji = (e, t, n) => t.has(e) || Ea("Cannot " + n);
var st = (e, t, n) => (ji(e, t, "read from private field"), n ? n.call(e) : t.get(e)), nr = (e, t, n) => t.has(e) ? Ea("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Gr = (e, t, n, r) => (ji(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), $a = (e, t, n) => (ji(e, t, "access private method"), n);
const ef = "5";
var Dl;
typeof window < "u" && ((Dl = window.__svelte ?? (window.__svelte = {})).v ?? (Dl.v = /* @__PURE__ */ new Set())).add(ef);
let Br = !1, tf = !1;
function nf() {
  Br = !0;
}
nf();
const As = 1, Vs = 2, Al = 4, rf = 8, of = 16, sf = 1, af = 2, Vl = 4, lf = 8, uf = 16, Ol = 1, cf = 2, Os = "[", Ls = "[!", Is = "]", _r = {}, Pt = Symbol(), Ll = "http://www.w3.org/2000/svg", Sa = !1, tn = 2, Il = 4, Ei = 8, zs = 16, On = 32, Yr = 64, Qo = 128, Kt = 256, ei = 512, pt = 1024, Ln = 2048, gr = 4096, Nn = 8192, $i = 16384, df = 32768, Zr = 65536, ff = 1 << 17, gf = 1 << 19, zl = 1 << 20, Wn = Symbol("$state"), Rs = Symbol("legacy props"), hf = Symbol("");
var bo = Array.isArray, vf = Array.prototype.indexOf, Bs = Array.from, ti = Object.keys, io = Object.defineProperty, Tn = Object.getOwnPropertyDescriptor, Rl = Object.getOwnPropertyDescriptors, pf = Object.prototype, mf = Array.prototype, Ys = Object.getPrototypeOf;
function Ur(e) {
  return typeof e == "function";
}
const dt = () => {
};
function yf(e) {
  return e();
}
function so(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const wf = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let ao = [], lo = [];
function Bl() {
  var e = ao;
  ao = [], so(e);
}
function Yl() {
  var e = lo;
  lo = [], so(e);
}
function Co(e) {
  ao.length === 0 && queueMicrotask(Bl), ao.push(e);
}
function _f(e) {
  lo.length === 0 && wf(Yl), lo.push(e);
}
function Pa() {
  ao.length > 0 && Bl(), lo.length > 0 && Yl();
}
function Zl(e) {
  return e === this.v;
}
function Zs(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Xs(e) {
  return !Zs(e, this.v);
}
function xf(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function bf() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Cf(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function kf() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ef() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function $f(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Sf() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Pf() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Nf() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Tf() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Tt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Zl,
    rv: 0,
    wv: 0
  };
  return n;
}
function sr(e) {
  return /* @__PURE__ */ Xl(Tt(e));
}
// @__NO_SIDE_EFFECTS__
function ko(e, t = !1) {
  var r;
  const n = Tt(e);
  return t || (n.equals = Xs), Br && Be !== null && Be.l !== null && ((r = Be.l).s ?? (r.s = [])).push(n), n;
}
function te(e, t = !1) {
  return /* @__PURE__ */ Xl(/* @__PURE__ */ ko(e, t));
}
// @__NO_SIDE_EFFECTS__
function Xl(e) {
  return Ue !== null && !Qt && Ue.f & tn && (dn === null ? Df([e]) : dn.push(e)), e;
}
function G(e, t) {
  return Ue !== null && !Qt && Hi() && Ue.f & (tn | zs) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (dn === null || !dn.includes(e)) && Tf(), cs(e, t);
}
function cs(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = Jl(), Wl(e, Ln), Hi() && Fe !== null && Fe.f & pt && !(Fe.f & (On | Yr)) && (En === null ? Af([e]) : En.push(e))), t;
}
function Na(e, t = 1) {
  var n = h(e), r = t === 1 ? n++ : n--;
  return G(e, n), r;
}
function Wl(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Hi(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      a & Ln || !r && s === Fe || (nn(s, t), a & (pt | Kt) && (a & tn ? Wl(
        /** @type {Derived} */
        s,
        gr
      ) : Ti(
        /** @type {Effect} */
        s
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Me(e) {
  var t = tn | Ln, n = Ue !== null && Ue.f & tn ? (
    /** @type {Derived} */
    Ue
  ) : null;
  return Fe === null || n !== null && n.f & Kt ? t |= Kt : Fe.f |= zl, {
    ctx: Be,
    deps: null,
    effects: null,
    equals: Zl,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: n ?? Fe
  };
}
// @__NO_SIDE_EFFECTS__
function pe(e) {
  const t = /* @__PURE__ */ Me(e);
  return t.equals = Xs, t;
}
function Fl(e) {
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
function Mf(e) {
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
function Hf(e) {
  var t, n = Fe;
  Un(Mf(e));
  try {
    Fl(e), t = eu(e);
  } finally {
    Un(n);
  }
  return t;
}
function Kl(e) {
  var t = Hf(e), n = (Zn || e.f & Kt) && e.deps !== null ? gr : pt;
  nn(e, n), e.equals(t) || (e.v = t, e.wv = Jl());
}
function Si(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let Se = !1;
function Lt(e) {
  Se = e;
}
let De;
function bt(e) {
  if (e === null)
    throw Si(), _r;
  return De = e;
}
function hn() {
  return bt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ yn(De)
  );
}
function Z(e) {
  if (Se) {
    if (/* @__PURE__ */ yn(De) !== null)
      throw Si(), _r;
    De = e;
  }
}
function Te(e = 1) {
  if (Se) {
    for (var t = e, n = De; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ yn(n);
    De = n;
  }
}
function ds() {
  for (var e = 0, t = De; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === Is) {
        if (e === 0) return t;
        e -= 1;
      } else (n === Os || n === Ls) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ yn(t)
    );
    t.remove(), t = r;
  }
}
function Vt(e, t = null, n) {
  if (typeof e != "object" || e === null || Wn in e)
    return e;
  const r = Ys(e);
  if (r !== pf && r !== mf)
    return e;
  var o = /* @__PURE__ */ new Map(), i = bo(e), s = Tt(0);
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
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Sf();
        var f = o.get(u);
        return f === void 0 ? (f = Tt(c.value), o.set(u, f)) : G(f, Vt(c.value, a)), !0;
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
            Number.isInteger(d) && d < f.v && G(f, d);
          }
          G(c, Pt), Ta(s);
        }
        return !0;
      },
      get(l, u, c) {
        var p;
        if (u === Wn)
          return e;
        var f = o.get(u), d = u in l;
        if (f === void 0 && (!d || (p = Tn(l, u)) != null && p.writable) && (f = Tt(Vt(d ? l[u] : Pt, a)), o.set(u, f)), f !== void 0) {
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
        if (c !== void 0 || Fe !== null && (!f || (g = Tn(l, u)) != null && g.writable)) {
          c === void 0 && (c = Tt(f ? Vt(l[u], a) : Pt), o.set(u, c));
          var d = h(c);
          if (d === Pt)
            return !1;
        }
        return f;
      },
      set(l, u, c, f) {
        var _;
        var d = o.get(u), g = u in l;
        if (i && u === "length")
          for (var p = c; p < /** @type {Source<number>} */
          d.v; p += 1) {
            var x = o.get(p + "");
            x !== void 0 ? G(x, Pt) : p in l && (x = Tt(Pt), o.set(p + "", x));
          }
        d === void 0 ? (!g || (_ = Tn(l, u)) != null && _.writable) && (d = Tt(void 0), G(d, Vt(c, a)), o.set(u, d)) : (g = d.v !== Pt, G(d, Vt(c, a)));
        var k = Reflect.getOwnPropertyDescriptor(l, u);
        if (k != null && k.set && k.set.call(f, c), !g) {
          if (i && typeof u == "string") {
            var E = (
              /** @type {Source<number>} */
              o.get("length")
            ), m = Number(u);
            Number.isInteger(m) && m >= E.v && G(E, m + 1);
          }
          Ta(s);
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
        Pf();
      }
    }
  );
}
function Ta(e, t = 1) {
  G(e, e.v + t);
}
var Nt, ql, Gl, Ul;
function fs() {
  if (Nt === void 0) {
    Nt = window, ql = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    Gl = Tn(t, "firstChild").get, Ul = Tn(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Hn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function xt(e) {
  return Gl.call(e);
}
// @__NO_SIDE_EFFECTS__
function yn(e) {
  return Ul.call(e);
}
function X(e, t) {
  if (!Se)
    return /* @__PURE__ */ xt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ xt(De)
  );
  if (n === null)
    n = De.appendChild(Hn());
  else if (t && n.nodeType !== 3) {
    var r = Hn();
    return n == null || n.before(r), bt(r), r;
  }
  return bt(n), n;
}
function _e(e, t) {
  if (!Se) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ xt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ yn(n) : n;
  }
  return De;
}
function R(e, t = 1, n = !1) {
  let r = Se ? De : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ yn(r);
  if (!Se)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var s = Hn();
    return r === null ? o == null || o.after(s) : r.before(s), bt(s), s;
  }
  return bt(r), /** @type {TemplateNode} */
  r;
}
function Ws(e) {
  e.textContent = "";
}
let Fo = !1, ni = !1, ri = null, or = !1, Fs = !1;
function Ma(e) {
  Fs = e;
}
let oo = [];
let Ue = null, Qt = !1;
function Gn(e) {
  Ue = e;
}
let Fe = null;
function Un(e) {
  Fe = e;
}
let dn = null;
function Df(e) {
  dn = e;
}
let wt = null, At = 0, En = null;
function Af(e) {
  En = e;
}
let jl = 1, oi = 0, Zn = !1;
function Jl() {
  return ++jl;
}
function Xr(e) {
  var f;
  var t = e.f;
  if (t & Ln)
    return !0;
  if (t & gr) {
    var n = e.deps, r = (t & Kt) !== 0;
    if (n !== null) {
      var o, i, s = (t & ei) !== 0, a = r && Fe !== null && !Zn, l = n.length;
      if (s || a) {
        var u = (
          /** @type {Derived} */
          e
        ), c = u.parent;
        for (o = 0; o < l; o++)
          i = n[o], (s || !((f = i == null ? void 0 : i.reactions) != null && f.includes(u))) && (i.reactions ?? (i.reactions = [])).push(u);
        s && (u.f ^= ei), a && c !== null && !(c.f & Kt) && (u.f ^= Kt);
      }
      for (o = 0; o < l; o++)
        if (i = n[o], Xr(
          /** @type {Derived} */
          i
        ) && Kl(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!r || Fe !== null && !Zn) && nn(e, pt);
  }
  return !1;
}
function Vf(e, t) {
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
function Of(e) {
  return (e.f & $i) === 0 && (e.parent === null || (e.parent.f & Qo) === 0);
}
function Pi(e, t, n, r) {
  if (Fo) {
    if (n === null && (Fo = !1), Of(t))
      throw e;
    return;
  }
  n !== null && (Fo = !0);
  {
    Vf(e, t);
    return;
  }
}
function Ql(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      i.f & tn ? Ql(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? nn(i, Ln) : i.f & pt && nn(i, gr), Ti(
        /** @type {Effect} */
        i
      ));
    }
}
function eu(e) {
  var g;
  var t = wt, n = At, r = En, o = Ue, i = Zn, s = dn, a = Be, l = Qt, u = e.f;
  wt = /** @type {null | Value[]} */
  null, At = 0, En = null, Zn = (u & Kt) !== 0 && (Qt || !or || Ue === null), Ue = u & (On | Yr) ? null : e, dn = null, Ha(e.ctx), Qt = !1, oi++;
  try {
    var c = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (wt !== null) {
      var d;
      if (ii(e, At), f !== null && At > 0)
        for (f.length = At + wt.length, d = 0; d < wt.length; d++)
          f[At + d] = wt[d];
      else
        e.deps = f = wt;
      if (!Zn)
        for (d = At; d < f.length; d++)
          ((g = f[d]).reactions ?? (g.reactions = [])).push(e);
    } else f !== null && At < f.length && (ii(e, At), f.length = At);
    if (Hi() && En !== null && !Qt && f !== null && !(e.f & (tn | gr | Ln)))
      for (d = 0; d < /** @type {Source[]} */
      En.length; d++)
        Ql(
          En[d],
          /** @type {Effect} */
          e
        );
    return o !== null && oi++, c;
  } finally {
    wt = t, At = n, En = r, Ue = o, Zn = i, dn = s, Ha(a), Qt = l;
  }
}
function Lf(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = vf.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && t.f & tn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (wt === null || !wt.includes(t)) && (nn(t, gr), t.f & (Kt | ei) || (t.f ^= ei), Fl(
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
      Lf(e, n[r]);
}
function Ni(e) {
  var t = e.f;
  if (!(t & $i)) {
    nn(e, pt);
    var n = Fe, r = Be, o = or;
    Fe = e, or = !0;
    try {
      t & zs ? Ff(e) : iu(e), ou(e);
      var i = eu(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = jl;
      var s = e.deps, a;
      Sa && tf && e.f & Ln;
    } catch (l) {
      Pi(l, e, n, r || e.ctx);
    } finally {
      or = o, Fe = n;
    }
  }
}
function If() {
  try {
    kf();
  } catch (e) {
    if (ri !== null)
      Pi(e, ri, null);
    else
      throw e;
  }
}
function tu() {
  var e = or;
  try {
    var t = 0;
    for (or = !0; oo.length > 0; ) {
      t++ > 1e3 && If();
      var n = oo, r = n.length;
      oo = [];
      for (var o = 0; o < r; o++) {
        var i = n[o];
        i.f & pt || (i.f ^= pt);
        var s = Rf(i);
        zf(s);
      }
    }
  } finally {
    ni = !1, or = e, ri = null;
  }
}
function zf(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if (!(r.f & ($i | Nn)))
        try {
          Xr(r) && (Ni(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? su(r) : r.fn = null));
        } catch (o) {
          Pi(o, r, null, r.ctx);
        }
    }
}
function Ti(e) {
  ni || (ni = !0, queueMicrotask(tu));
  for (var t = ri = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (Yr | On)) {
      if (!(n & pt)) return;
      t.f ^= pt;
    }
  }
  oo.push(t);
}
function Rf(e) {
  for (var t = [], n = e.first; n !== null; ) {
    var r = n.f, o = (r & On) !== 0, i = o && (r & pt) !== 0;
    if (!i && !(r & Nn)) {
      if (r & Il)
        t.push(n);
      else if (o)
        n.f ^= pt;
      else {
        var s = Ue;
        try {
          Ue = n, Xr(n) && Ni(n);
        } catch (u) {
          Pi(u, n, null, n.ctx);
        } finally {
          Ue = s;
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
  for (Pa(); oo.length > 0; )
    ni = !0, tu(), Pa();
  return (
    /** @type {T} */
    t
  );
}
function h(e) {
  var t = e.f, n = (t & tn) !== 0;
  if (Ue !== null && !Qt) {
    dn !== null && dn.includes(e) && Nf();
    var r = Ue.deps;
    e.rv < oi && (e.rv = oi, wt === null && r !== null && r[At] === e ? At++ : wt === null ? wt = [e] : (!Zn || !wt.includes(e)) && wt.push(e));
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
  e, Xr(o) && Kl(o)), e.v;
}
function vn(e) {
  var t = Qt;
  try {
    return Qt = !0, e();
  } finally {
    Qt = t;
  }
}
const Bf = -7169;
function nn(e, t) {
  e.f = e.f & Bf | t;
}
function U(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Wn in e)
      gs(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Wn in n && gs(n);
      }
  }
}
function gs(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        gs(e[r], t);
      } catch {
      }
    const n = Ys(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Rl(n);
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
function nu(e) {
  Fe === null && Ue === null && Cf(), Ue !== null && Ue.f & Kt && Fe === null && bf(), Fs && xf();
}
function Yf(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function hr(e, t, n, r = !0) {
  var o = (e & Yr) !== 0, i = Fe, s = {
    ctx: Be,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Ln,
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
      Ni(s), s.f |= df;
    } catch (u) {
      throw qt(s), u;
    }
  else t !== null && Ti(s);
  var a = n && s.deps === null && s.first === null && s.nodes_start === null && s.teardown === null && (s.f & (zl | Qo)) === 0;
  if (!a && !o && r && (i !== null && Yf(s, i), Ue !== null && Ue.f & tn)) {
    var l = (
      /** @type {Derived} */
      Ue
    );
    (l.effects ?? (l.effects = [])).push(s);
  }
  return s;
}
function ru(e) {
  const t = hr(Ei, null, !1);
  return nn(t, pt), t.teardown = e, t;
}
function Nr(e) {
  nu();
  var t = Fe !== null && (Fe.f & On) !== 0 && Be !== null && !Be.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      Be
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: Fe,
      reaction: Ue
    });
  } else {
    var r = Ot(e);
    return r;
  }
}
function Zf(e) {
  return nu(), Wr(e);
}
function Xf(e) {
  const t = hr(Yr, e, !0);
  return () => {
    qt(t);
  };
}
function Wf(e) {
  const t = hr(Yr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Tr(t, () => {
      qt(t), r(void 0);
    }) : (qt(t), r(void 0));
  });
}
function Ot(e) {
  return hr(Il, e, !1);
}
function le(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    Be
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = Wr(() => {
    e(), !r.ran && (r.ran = !0, G(n.l.r2, !0), vn(t));
  });
}
function gt() {
  var e = (
    /** @type {ComponentContextLegacy} */
    Be
  );
  Wr(() => {
    if (h(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        n.f & pt && nn(n, gr), Xr(n) && Ni(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function Wr(e) {
  return hr(Ei, e, !0);
}
function $e(e, t = [], n = Me) {
  const r = t.map(n);
  return vr(() => e(...r.map(h)));
}
function vr(e, t = 0) {
  return hr(Ei | zs | t, e, !0);
}
function Dn(e, t = !0) {
  return hr(Ei | On, e, !0, t);
}
function ou(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Fs, r = Ue;
    Ma(!0), Gn(null);
    try {
      t.call(null);
    } finally {
      Ma(n), Gn(r);
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
function Ff(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & On || qt(t), t = n;
  }
}
function qt(e, t = !0) {
  var n = !1;
  if ((t || e.f & gf) && e.nodes_start !== null) {
    for (var r = e.nodes_start, o = e.nodes_end; r !== null; ) {
      var i = r === o ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ yn(r)
      );
      r.remove(), r = i;
    }
    n = !0;
  }
  iu(e, t && !n), ii(e, 0), nn(e, $i);
  var s = e.transitions;
  if (s !== null)
    for (const l of s)
      l.stop();
  ou(e);
  var a = e.parent;
  a !== null && a.first !== null && su(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function su(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Tr(e, t) {
  var n = [];
  Ks(e, n, !0), au(n, () => {
    qt(e), t && t();
  });
}
function au(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function Ks(e, t, n) {
  if (!(e.f & Nn)) {
    if (e.f ^= Nn, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & Zr) !== 0 || (r.f & On) !== 0;
      Ks(r, t, i ? n : !1), r = o;
    }
  }
}
function uo(e) {
  lu(e, !0);
}
function lu(e, t) {
  if (e.f & Nn) {
    e.f ^= Nn, e.f & pt || (e.f ^= pt), Xr(e) && (nn(e, Ln), Ti(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Zr) !== 0 || (n.f & On) !== 0;
      lu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
function Mi(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let Be = null;
function Ha(e) {
  Be = e;
}
function ar(e) {
  return (
    /** @type {T} */
    qs().get(e)
  );
}
function Mr(e, t) {
  return qs().set(e, t), t;
}
function Kf(e) {
  return qs().has(e);
}
function ue(e, t = !1, n) {
  Be = {
    p: Be,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  }, Br && !t && (Be.l = {
    s: null,
    u: null,
    r1: [],
    r2: Tt(!1)
  });
}
function ce(e) {
  const t = Be;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var n = Fe, r = Ue;
      t.e = null;
      try {
        for (var o = 0; o < s.length; o++) {
          var i = s[o];
          Un(i.effect), Gn(i.reaction), Ot(i.fn);
        }
      } finally {
        Un(n), Gn(r);
      }
    }
    Be = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Hi() {
  return !Br || Be !== null && Be.l === null;
}
function qs(e) {
  return Be === null && Mi(), Be.c ?? (Be.c = new Map(qf(Be) || void 0));
}
function qf(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function Gf(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const Uf = [
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
function jf(e) {
  return Uf.includes(e);
}
const Jf = {
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
function Qf(e) {
  return e = e.toLowerCase(), Jf[e] ?? e;
}
const e1 = ["touchstart", "touchmove"];
function t1(e) {
  return e1.includes(e);
}
const n1 = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function r1(e) {
  return n1.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function o1(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, Co(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function i1(e) {
  Se && /* @__PURE__ */ xt(e) !== null && Ws(e);
}
let Da = !1;
function s1() {
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
function a1(e) {
  var t = Ue, n = Fe;
  Gn(null), Un(null);
  try {
    return e();
  } finally {
    Gn(t), Un(n);
  }
}
const uu = /* @__PURE__ */ new Set(), hs = /* @__PURE__ */ new Set();
function cu(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || eo.call(t, i), !i.cancelBubble)
      return a1(() => n == null ? void 0 : n.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Co(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function Qe(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = cu(e, t, n, i);
  (t === document.body || t === window || t === document) && ru(() => {
    t.removeEventListener(e, s, i);
  });
}
function Di(e) {
  for (var t = 0; t < e.length; t++)
    uu.add(e[t]);
  for (var n of hs)
    n(e);
}
function eo(e) {
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
    io(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var c = Ue, f = Fe;
    Gn(null), Un(null);
    try {
      for (var d, g = []; i !== null; ) {
        var p = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var x = i["__" + r];
          if (x !== void 0 && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (bo(x)) {
              var [k, ...E] = x;
              k.apply(i, [e, ...E]);
            } else
              x.call(i, e);
        } catch (_) {
          d ? g.push(_) : d = _;
        }
        if (e.cancelBubble || p === t || p === null)
          break;
        i = p;
      }
      if (d) {
        for (let _ of g)
          queueMicrotask(() => {
            throw _;
          });
        throw d;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Gn(c), Un(f);
    }
  }
}
function Gs(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Ht(e, t) {
  var n = (
    /** @type {Effect} */
    Fe
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ne(e, t) {
  var n = (t & Ol) !== 0, r = (t & cf) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (Se)
      return Ht(De, null), De;
    o === void 0 && (o = Gs(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ xt(o)));
    var s = (
      /** @type {TemplateNode} */
      r || ql ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ xt(s)
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
function xe(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & Ol) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (Se)
      return Ht(De, null), De;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Gs(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ xt(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ xt(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ xt(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ xt(l);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ xt(u)
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
function Ie(e = "") {
  if (!Se) {
    var t = Hn(e + "");
    return Ht(t, t), t;
  }
  var n = De;
  return n.nodeType !== 3 && (n.before(n = Hn()), bt(n)), Ht(n, n), n;
}
function et() {
  if (Se)
    return Ht(De, null), De;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Hn();
  return e.append(t, n), Ht(t, n), e;
}
function L(e, t) {
  if (Se) {
    Fe.nodes_end = De, hn();
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
function du(e, t) {
  return fu(e, t);
}
function l1(e, t) {
  fs(), t.intro = t.intro ?? !1;
  const n = t.target, r = Se, o = De;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ xt(n)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== Os); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ yn(i);
    if (!i)
      throw _r;
    Lt(!0), bt(
      /** @type {Comment} */
      i
    ), hn();
    const s = fu(e, { ...t, anchor: i });
    if (De === null || De.nodeType !== 8 || /** @type {Comment} */
    De.data !== Is)
      throw Si(), _r;
    return Lt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === _r)
      return t.recover === !1 && Ef(), fs(), Ws(n), Lt(!1), du(e, t);
    throw s;
  } finally {
    Lt(r), bt(o);
  }
}
const mr = /* @__PURE__ */ new Map();
function fu(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  fs();
  var a = /* @__PURE__ */ new Set(), l = (f) => {
    for (var d = 0; d < f.length; d++) {
      var g = f[d];
      if (!a.has(g)) {
        a.add(g);
        var p = t1(g);
        t.addEventListener(g, eo, { passive: p });
        var x = mr.get(g);
        x === void 0 ? (document.addEventListener(g, eo, { passive: p }), mr.set(g, 1)) : mr.set(g, x + 1);
      }
    }
  };
  l(Bs(uu)), hs.add(l);
  var u = void 0, c = Wf(() => {
    var f = n ?? t.appendChild(Hn());
    return Dn(() => {
      if (i) {
        ue({});
        var d = (
          /** @type {ComponentContext} */
          Be
        );
        d.c = i;
      }
      o && (r.$$events = o), Se && Ht(
        /** @type {TemplateNode} */
        f,
        null
      ), u = e(f, r) || {}, Se && (Fe.nodes_end = De), i && ce();
    }), () => {
      var p;
      for (var d of a) {
        t.removeEventListener(d, eo);
        var g = (
          /** @type {number} */
          mr.get(d)
        );
        --g === 0 ? (document.removeEventListener(d, eo), mr.delete(d)) : mr.set(d, g);
      }
      hs.delete(l), f !== n && ((p = f.parentNode) == null || p.removeChild(f));
    };
  });
  return vs.set(u, c), u;
}
let vs = /* @__PURE__ */ new WeakMap();
function u1(e, t) {
  const n = vs.get(e);
  return n ? (vs.delete(e), n(t)) : Promise.resolve();
}
function be(e, t, [n, r] = [0, 0]) {
  Se && n === 0 && hn();
  var o = e, i = null, s = null, a = Pt, l = n > 0 ? Zr : 0, u = !1;
  const c = (d, g = !0) => {
    u = !0, f(g, d);
  }, f = (d, g) => {
    if (a === (a = d)) return;
    let p = !1;
    if (Se && r !== -1) {
      if (n === 0) {
        const k = (
          /** @type {Comment} */
          o.data
        );
        k === Os ? r = 0 : k === Ls ? r = 1 / 0 : (r = parseInt(k.substring(1)), r !== r && (r = a ? 1 / 0 : -1));
      }
      const x = r > n;
      !!a === x && (o = ds(), bt(o), Lt(!1), p = !0, r = -1);
    }
    a ? (i ? uo(i) : g && (i = Dn(() => g(o))), s && Tr(s, () => {
      s = null;
    })) : (s ? uo(s) : g && (s = Dn(() => g(o, [n + 1, r]))), i && Tr(i, () => {
      i = null;
    })), p && Lt(!0);
  };
  vr(() => {
    u = !1, t(c), u || f(null, null);
  }, l), Se && (o = De);
}
function Ai(e, t) {
  return t;
}
function c1(e, t, n, r) {
  for (var o = [], i = t.length, s = 0; s < i; s++)
    Ks(t[s].e, o, !0);
  var a = i > 0 && o.length === 0 && n !== null;
  if (a) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Ws(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), Rn(e, t[0].prev, t[i - 1].next);
  }
  au(o, () => {
    for (var u = 0; u < i; u++) {
      var c = t[u];
      a || (r.delete(c.k), Rn(e, c.prev, c.next)), qt(c.e, !a);
    }
  });
}
function zt(e, t, n, r, o, i = null) {
  var s = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & Al) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    s = Se ? bt(
      /** @type {Comment | Text} */
      /* @__PURE__ */ xt(u)
    ) : u.appendChild(Hn());
  }
  Se && hn();
  var c = null, f = !1, d = /* @__PURE__ */ pe(() => {
    var g = n();
    return bo(g) ? g : g == null ? [] : Bs(g);
  });
  vr(() => {
    var g = h(d), p = g.length;
    if (f && p === 0)
      return;
    f = p === 0;
    let x = !1;
    if (Se) {
      var k = (
        /** @type {Comment} */
        s.data === Ls
      );
      k !== (p === 0) && (s = ds(), bt(s), Lt(!1), x = !0);
    }
    if (Se) {
      for (var E = null, m, _ = 0; _ < p; _++) {
        if (De.nodeType === 8 && /** @type {Comment} */
        De.data === Is) {
          s = /** @type {Comment} */
          De, x = !0, Lt(!1);
          break;
        }
        var v = g[_], b = r(v, _);
        m = gu(
          De,
          a,
          E,
          null,
          v,
          b,
          _,
          o,
          t,
          n
        ), a.items.set(b, m), E = m;
      }
      p > 0 && bt(ds());
    }
    Se || d1(g, a, s, o, t, r, n), i !== null && (p === 0 ? c ? uo(c) : c = Dn(() => i(s)) : c !== null && Tr(c, () => {
      c = null;
    })), x && Lt(!0), h(d);
  }), Se && (s = De);
}
function d1(e, t, n, r, o, i, s) {
  var S, H, C, P;
  var a = (o & rf) !== 0, l = (o & (As | Vs)) !== 0, u = e.length, c = t.items, f = t.first, d = f, g, p = null, x, k = [], E = [], m, _, v, b;
  if (a)
    for (b = 0; b < u; b += 1)
      m = e[b], _ = i(m, b), v = c.get(_), v !== void 0 && ((S = v.a) == null || S.measure(), (x ?? (x = /* @__PURE__ */ new Set())).add(v));
  for (b = 0; b < u; b += 1) {
    if (m = e[b], _ = i(m, b), v = c.get(_), v === void 0) {
      var N = d ? (
        /** @type {TemplateNode} */
        d.e.nodes_start
      ) : n;
      p = gu(
        N,
        t,
        p,
        p === null ? t.first : p.next,
        m,
        _,
        b,
        r,
        o,
        s
      ), c.set(_, p), k = [], E = [], d = p.next;
      continue;
    }
    if (l && f1(v, m, b, o), v.e.f & Nn && (uo(v.e), a && ((H = v.a) == null || H.unfix(), (x ?? (x = /* @__PURE__ */ new Set())).delete(v))), v !== d) {
      if (g !== void 0 && g.has(v)) {
        if (k.length < E.length) {
          var $ = E[0], T;
          p = $.prev;
          var A = k[0], D = k[k.length - 1];
          for (T = 0; T < k.length; T += 1)
            Aa(k[T], $, n);
          for (T = 0; T < E.length; T += 1)
            g.delete(E[T]);
          Rn(t, A.prev, D.next), Rn(t, p, A), Rn(t, D, $), d = $, p = D, b -= 1, k = [], E = [];
        } else
          g.delete(v), Aa(v, d, n), Rn(t, v.prev, v.next), Rn(t, v, p === null ? t.first : p.next), Rn(t, p, v), p = v;
        continue;
      }
      for (k = [], E = []; d !== null && d.k !== _; )
        d.e.f & Nn || (g ?? (g = /* @__PURE__ */ new Set())).add(d), E.push(d), d = d.next;
      if (d === null)
        continue;
      v = d;
    }
    k.push(v), p = v, d = v.next;
  }
  if (d !== null || g !== void 0) {
    for (var O = g === void 0 ? [] : Bs(g); d !== null; )
      d.e.f & Nn || O.push(d), d = d.next;
    var V = O.length;
    if (V > 0) {
      var z = o & Al && u === 0 ? n : null;
      if (a) {
        for (b = 0; b < V; b += 1)
          (C = O[b].a) == null || C.measure();
        for (b = 0; b < V; b += 1)
          (P = O[b].a) == null || P.fix();
      }
      c1(t, O, z, c);
    }
  }
  a && Co(() => {
    var M;
    if (x !== void 0)
      for (v of x)
        (M = v.a) == null || M.apply();
  }), Fe.first = t.first && t.first.e, Fe.last = p && p.e;
}
function f1(e, t, n, r) {
  r & As && cs(e.v, t), r & Vs ? cs(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function gu(e, t, n, r, o, i, s, a, l, u) {
  var c = (l & As) !== 0, f = (l & of) === 0, d = c ? f ? /* @__PURE__ */ ko(o) : Tt(o) : o, g = l & Vs ? Tt(s) : s, p = {
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
    return p.e = Dn(() => a(e, d, g, u), Se), p.e.prev = n && n.e, p.e.next = r && r.e, n === null ? t.first = p : (n.next = p, n.e.next = p.e), r !== null && (r.prev = p, r.e.prev = p.e), p;
  } finally {
  }
}
function Aa(e, t, n) {
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
      /* @__PURE__ */ yn(i)
    );
    o.before(i), i = s;
  }
}
function Rn(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function hu(e, t, n, r, o) {
  var i = e, s = "", a;
  vr(() => {
    if (s === (s = t() ?? "")) {
      Se && hn();
      return;
    }
    a !== void 0 && (qt(a), a = void 0), s !== "" && (a = Dn(() => {
      if (Se) {
        De.data;
        for (var l = hn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ yn(l);
        if (l === null)
          throw Si(), _r;
        Ht(De, u), i = bt(l);
        return;
      }
      var c = s + "", f = Gs(c);
      Ht(
        /** @type {TemplateNode} */
        /* @__PURE__ */ xt(f),
        /** @type {TemplateNode} */
        f.lastChild
      ), i.before(f);
    }));
  });
}
function vt(e, t, n, r, o) {
  var a;
  Se && hn();
  var i = (a = t.$$slots) == null ? void 0 : a[n], s = !1;
  i === !0 && (i = t[n === "default" ? "children" : n], s = !0), i === void 0 || i(e, s ? () => r : r);
}
function g1(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const n in e.$$slots)
    t[n] = !0;
  return t;
}
function lr(e, t, ...n) {
  var r = e, o = dt, i;
  vr(() => {
    o !== (o = t()) && (i && (qt(i), i = null), i = Dn(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Zr), Se && (r = De);
}
function vu(e, t, n) {
  Se && hn();
  var r = e, o, i;
  vr(() => {
    o !== (o = t()) && (i && (Tr(i), i = null), o && (i = Dn(() => n(r, o))));
  }, Zr), Se && (r = De);
}
function h1(e, t, n, r, o, i) {
  let s = Se;
  Se && hn();
  var a, l, u = null;
  Se && De.nodeType === 1 && (u = /** @type {Element} */
  De, hn());
  var c = (
    /** @type {TemplateNode} */
    Se ? De : e
  ), f;
  vr(() => {
    const d = t() || null;
    var g = d === "svg" ? Ll : null;
    d !== a && (f && (d === null ? Tr(f, () => {
      f = null, l = null;
    }) : d === l ? uo(f) : qt(f)), d && d !== l && (f = Dn(() => {
      if (u = Se ? (
        /** @type {Element} */
        u
      ) : g ? document.createElementNS(g, d) : document.createElement(d), Ht(u, u), r) {
        Se && r1(d) && u.append(document.createComment(""));
        var p = (
          /** @type {TemplateNode} */
          Se ? /* @__PURE__ */ xt(u) : u.appendChild(Hn())
        );
        Se && (p === null ? Lt(!1) : bt(p)), r(u, p);
      }
      Fe.nodes_end = u, c.before(u);
    })), a = d, a && (l = a));
  }, Zr), s && (Lt(!0), bt(c));
}
function je(e, t) {
  Co(() => {
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
  Ot(() => {
    var r = vn(() => t(e, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      Wr(() => {
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
function pu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = pu(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function v1() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = pu(e)) && (r && (r += " "), r += t);
  return r;
}
function _n(e) {
  return typeof e == "object" ? v1(e) : e ?? "";
}
const Va = [...` 	
\r\f \v\uFEFF`];
function p1(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || Va.includes(r[s - 1])) && (a === r.length || Va.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function Ct(e, t, n, r, o, i) {
  var s = e.__className;
  if (Se || s !== n) {
    var a = p1(n, r, i);
    (!Se || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
  } else if (i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return i;
}
const jr = Symbol("class");
function mu(e) {
  if (Se) {
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
    e.__on_r = n, _f(n), s1();
  }
}
function m1(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function ae(e, t, n, r) {
  var o = e.__attributes ?? (e.__attributes = {});
  Se && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[hf] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && yu(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function rn(e, t, n, r, o = !1, i = !1, s = !1) {
  let a = Se && i;
  a && Lt(!1);
  var l = t || {}, u = e.tagName === "OPTION";
  for (var c in t)
    c in n || (n[c] = null);
  n.class ? n.class = _n(n.class) : (r || n[jr]) && (n.class = null);
  var f = yu(e), d = (
    /** @type {Record<string, unknown>} **/
    e.__attributes ?? (e.__attributes = {})
  );
  for (const _ in n) {
    let v = n[_];
    if (u && _ === "value" && v == null) {
      e.value = e.__value = "", l[_] = v;
      continue;
    }
    if (_ === "class") {
      var g = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Ct(e, g, v, r, t == null ? void 0 : t[jr], n[jr]), l[_] = v, l[jr] = n[jr];
      continue;
    }
    var p = l[_];
    if (v !== p) {
      l[_] = v;
      var x = _[0] + _[1];
      if (x !== "$$") {
        if (x === "on") {
          const b = {}, N = "$$" + _;
          let $ = _.slice(2);
          var k = jf($);
          if (Gf($) && ($ = $.slice(0, -7), b.capture = !0), !k && p) {
            if (v != null) continue;
            e.removeEventListener($, l[N], b), l[N] = null;
          }
          if (v != null)
            if (k)
              e[`__${$}`] = v, Di([$]);
            else {
              let T = function(A) {
                l[_].call(this, A);
              };
              l[N] = cu($, e, T, b);
            }
          else k && (e[`__${$}`] = void 0);
        } else if (_ === "style" && v != null)
          e.style.cssText = v + "";
        else if (_ === "autofocus")
          o1(
            /** @type {HTMLElement} */
            e,
            !!v
          );
        else if (!i && (_ === "__value" || _ === "value" && v != null))
          e.value = e.__value = v;
        else if (_ === "selected" && u)
          m1(
            /** @type {HTMLOptionElement} */
            e,
            v
          );
        else {
          var E = _;
          o || (E = Qf(E));
          var m = E === "defaultValue" || E === "defaultChecked";
          if (v == null && !i && !m)
            if (d[_] = null, E === "value" || E === "checked") {
              let b = (
                /** @type {HTMLInputElement} */
                e
              );
              const N = t === void 0;
              if (E === "value") {
                let $ = b.defaultValue;
                b.removeAttribute(E), b.defaultValue = $, b.value = b.__value = N ? $ : null;
              } else {
                let $ = b.defaultChecked;
                b.removeAttribute(E), b.defaultChecked = $, b.checked = N ? $ : !1;
              }
            } else
              e.removeAttribute(_);
          else m || f.includes(E) && (i || typeof v != "string") ? e[E] = v : typeof v != "function" && ae(e, E, v);
        }
        _ === "style" && "__styles" in e && (e.__styles = {});
      }
    }
  }
  return a && Lt(!0), l;
}
var Oa = /* @__PURE__ */ new Map();
function yu(e) {
  var t = Oa.get(e.nodeName);
  if (t) return t;
  Oa.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = Rl(r);
    for (var i in n)
      n[i].set && t.push(i);
    r = Ys(r);
  }
  return t;
}
function at(e, t, n, r) {
  var o = e.__styles ?? (e.__styles = {});
  o[t] !== n && (o[t] = n, n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, ""));
}
var Yn, Pr, xo, Ci, wu;
const ki = class ki {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    nr(this, Ci);
    /** */
    nr(this, Yn, /* @__PURE__ */ new WeakMap());
    /** @type {ResizeObserver | undefined} */
    nr(this, Pr);
    /** @type {ResizeObserverOptions} */
    nr(this, xo);
    Gr(this, xo, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = st(this, Yn).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), st(this, Yn).set(t, r), $a(this, Ci, wu).call(this).observe(t, st(this, xo)), () => {
      var o = st(this, Yn).get(t);
      o.delete(n), o.size === 0 && (st(this, Yn).delete(t), st(this, Pr).unobserve(t));
    };
  }
};
Yn = new WeakMap(), Pr = new WeakMap(), xo = new WeakMap(), Ci = new WeakSet(), wu = function() {
  return st(this, Pr) ?? Gr(this, Pr, new ResizeObserver(
    /** @param {any} entries */
    (t) => {
      for (var n of t) {
        ki.entries.set(n.target, n);
        for (var r of st(this, Yn).get(n.target) || [])
          r(n);
      }
    }
  ));
}, /** @static */
yt(ki, "entries", /* @__PURE__ */ new WeakMap());
let ps = ki;
var y1 = /* @__PURE__ */ new ps({
  box: "border-box"
});
function La(e, t, n) {
  var r = y1.observe(e, () => n(e[t]));
  Ot(() => (vn(() => n(e[t])), r));
}
function Ia(e, t) {
  return e === t || (e == null ? void 0 : e[Wn]) === t;
}
function An(e = {}, t, n, r) {
  return Ot(() => {
    var o, i;
    return Wr(() => {
      o = i, i = [], vn(() => {
        e !== n(...i) && (t(e, ...i), o && Ia(n(...o), e) && t(null, ...o));
      });
    }), () => {
      Co(() => {
        i && Ia(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function He(e = !1) {
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
    const s = /* @__PURE__ */ Me(() => {
      let a = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], a = !0);
      return a && o++, o;
    });
    r = () => h(s);
  }
  n.b.length && Zf(() => {
    za(t, r), so(n.b);
  }), Nr(() => {
    const o = vn(() => n.m.map(yf));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Nr(() => {
    za(t, r), so(n.a);
  });
}
function za(e, t) {
  if (e.l.s)
    for (const n of e.l.s) h(n);
  t();
}
function Le(e, t) {
  var i;
  var n = (
    /** @type {Record<string, Function[] | Function>} */
    (i = e.$$events) == null ? void 0 : i[t.type]
  ), r = bo(n) ? n.slice() : n == null ? [] : [n];
  for (var o of r)
    o.call(this, t);
}
function xn(e) {
  Be === null && Mi(), Br && Be.l !== null ? _1(Be).m.push(e) : Nr(() => {
    const t = vn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Us(e) {
  Be === null && Mi(), xn(() => () => vn(e));
}
function w1(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function Vi() {
  const e = Be;
  return e === null && Mi(), (t, n, r) => {
    var i;
    const o = (
      /** @type {Record<string, Function | Function[]>} */
      (i = e.s.$$events) == null ? void 0 : i[
        /** @type {any} */
        t
      ]
    );
    if (o) {
      const s = bo(o) ? o.slice() : [o], a = w1(
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
function _1(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function js(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), dt;
  const r = vn(
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
function ye(e, t = dt) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(a) {
    if (Zs(e, a) && (e = a, n)) {
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
function Fn(e, t, n) {
  const r = !Array.isArray(e), o = r ? [e] : e;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = t.length < 2;
  return Zt(n, (s, a) => {
    let l = !1;
    const u = [];
    let c = 0, f = dt;
    const d = () => {
      if (c)
        return;
      f();
      const p = t(r ? u[0] : u, s, a);
      i ? s(p) : f = typeof p == "function" ? p : dt;
    }, g = o.map(
      (p, x) => js(
        p,
        (k) => {
          u[x] = k, c &= ~(1 << x), l && d();
        },
        () => {
          c |= 1 << x;
        }
      )
    );
    return l = !0, d(), function() {
      so(g), f(), l = !1;
    };
  });
}
function q(e) {
  let t;
  return js(e, (n) => t = n)(), t;
}
let zo = !1, ms = Symbol();
function j(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ ko(void 0),
    unsubscribe: dt
  });
  if (r.store !== e && !(ms in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = dt;
    else {
      var o = !0;
      r.unsubscribe = js(e, (i) => {
        o ? r.source.v = i : G(r.source, i);
      }), o = !1;
    }
  return e && ms in n ? q(e) : h(r.source);
}
function x1(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = dt), e;
}
function si(e, t) {
  return e.set(t), t;
}
function tt() {
  const e = {};
  function t() {
    ru(() => {
      for (var n in e)
        e[n].unsubscribe();
      io(e, ms, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function b1(e) {
  var t = zo;
  try {
    return zo = !1, [e(), zo];
  } finally {
    zo = t;
  }
}
const C1 = {
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
function Et(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    C1
  );
}
const k1 = {
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
      Vl
    )), e.special[t](n), Na(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), Na(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function rt(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: Tt(0) }, k1);
}
const E1 = {
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
      const i = Tn(o, t);
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
        const o = Tn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === Wn || t === Rs) return !1;
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
function ct(...e) {
  return new Proxy({ props: e }, E1);
}
function w(e, t, n, r) {
  var N;
  var o = (n & sf) !== 0, i = !Br || (n & af) !== 0, s = (n & lf) !== 0, a = (n & uf) !== 0, l = !1, u;
  s ? [u, l] = b1(() => (
    /** @type {V} */
    e[t]
  )) : u = /** @type {V} */
  e[t];
  var c = Wn in e || Rs in e, f = s && (((N = Tn(e, t)) == null ? void 0 : N.set) ?? (c && t in e && (($) => e[t] = $))) || void 0, d = (
    /** @type {V} */
    r
  ), g = !0, p = !1, x = () => (p = !0, g && (g = !1, a ? d = vn(
    /** @type {() => V} */
    r
  ) : d = /** @type {V} */
  r), d);
  u === void 0 && r !== void 0 && (f && i && $f(), u = x(), f && f(u));
  var k;
  if (i)
    k = () => {
      var $ = (
        /** @type {V} */
        e[t]
      );
      return $ === void 0 ? x() : (g = !0, p = !1, $);
    };
  else {
    var E = (o ? Me : pe)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    E.f |= ff, k = () => {
      var $ = h(E);
      return $ !== void 0 && (d = /** @type {V} */
      void 0), $ === void 0 ? d : $;
    };
  }
  if (!(n & Vl))
    return k;
  if (f) {
    var m = e.$$legacy;
    return function($, T) {
      return arguments.length > 0 ? ((!i || !T || m || l) && f(T ? k() : $), $) : k();
    };
  }
  var _ = !1, v = /* @__PURE__ */ ko(u), b = /* @__PURE__ */ Me(() => {
    var $ = k(), T = h(v);
    return _ ? (_ = !1, T) : v.v = $;
  });
  return o || (b.equals = Xs), function($, T) {
    if (arguments.length > 0) {
      const A = T ? h(b) : i && s ? Vt($) : $;
      return b.equals(A) || (_ = !0, G(v, A), p && d !== void 0 && (d = A), vn(() => h(b))), $;
    }
    return h(b);
  };
}
function $1(e) {
  return new S1(e);
}
var $n, Xt;
class S1 {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    nr(this, $n);
    /** @type {Record<string, any>} */
    nr(this, Xt);
    var i;
    var n = /* @__PURE__ */ new Map(), r = (s, a) => {
      var l = /* @__PURE__ */ ko(a);
      return n.set(s, l), l;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, a) {
          return h(n.get(a) ?? r(a, Reflect.get(s, a)));
        },
        has(s, a) {
          return a === Rs ? !0 : (h(n.get(a) ?? r(a, Reflect.get(s, a))), Reflect.has(s, a));
        },
        set(s, a, l) {
          return G(n.get(a) ?? r(a, l), l), Reflect.set(s, a, l);
        }
      }
    );
    Gr(this, Xt, (t.hydrate ? l1 : du)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((i = t == null ? void 0 : t.props) != null && i.$$host) || t.sync === !1) && y(), Gr(this, $n, o.$$events);
    for (const s of Object.keys(st(this, Xt)))
      s === "$set" || s === "$destroy" || s === "$on" || io(this, s, {
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
      u1(st(this, Xt));
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
    st(this, $n)[t] = st(this, $n)[t] || [];
    const r = (...o) => n.call(this, ...o);
    return st(this, $n)[t].push(r), () => {
      st(this, $n)[t] = st(this, $n)[t].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    st(this, Xt).$destroy();
  }
}
$n = new WeakMap(), Xt = new WeakMap();
let _u;
typeof HTMLElement == "function" && (_u = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, n, r) {
    super();
    /** The Svelte component constructor */
    yt(this, "$$ctor");
    /** Slots */
    yt(this, "$$s");
    /** @type {any} The Svelte component instance */
    yt(this, "$$c");
    /** Whether or not the custom element is connected */
    yt(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    yt(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    yt(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    yt(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    yt(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    yt(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    yt(this, "$$me");
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
      const n = {}, r = P1(this);
      for (const o of this.$$s)
        o in r && (o === "default" && !this.$$d.children ? (this.$$d.children = t(o), n.default = !0) : n[o] = t(o));
      for (const o of this.attributes) {
        const i = this.$$g_p(o.name);
        i in this.$$d || (this.$$d[i] = Ko(i, o.value, this.$$p_d, "toProp"));
      }
      for (const o in this.$$p_d)
        !(o in this.$$d) && this[o] !== void 0 && (this.$$d[o] = this[o], delete this[o]);
      this.$$c = $1({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = Xf(() => {
        Wr(() => {
          var o;
          this.$$r = !0;
          for (const i of ti(this.$$c)) {
            if (!((o = this.$$p_d[i]) != null && o.reflect)) continue;
            this.$$d[i] = this.$$c[i];
            const s = Ko(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Ko(t, r, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [t]: this.$$d[t] }));
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
function Ko(e, t, n, r) {
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
function P1(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function re(e, t, n, r, o, i) {
  let s = class extends _u {
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
    io(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        var f;
        l = Ko(a, l, t), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var c = (f = Tn(u, a)) == null ? void 0 : f.get;
          c ? u[a] = l : u.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    io(s.prototype, a, {
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
var N1 = { value: () => {
} };
function Oi() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new qo(n);
}
function qo(e) {
  this._ = e;
}
function T1(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
qo.prototype = Oi.prototype = {
  constructor: qo,
  on: function(e, t) {
    var n = this._, r = T1(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = M1(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = Ra(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = Ra(n[o], e.name, null);
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
function M1(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Ra(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = N1, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var ys = "http://www.w3.org/1999/xhtml";
const Ba = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: ys,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Li(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Ba.hasOwnProperty(t) ? { space: Ba[t], local: e } : e;
}
function H1(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === ys && t.documentElement.namespaceURI === ys ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function D1(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function xu(e) {
  var t = Li(e);
  return (t.local ? D1 : H1)(t);
}
function A1() {
}
function Js(e) {
  return e == null ? A1 : function() {
    return this.querySelector(e);
  };
}
function V1(e) {
  typeof e != "function" && (e = Js(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, u, c = 0; c < s; ++c)
      (l = i[c]) && (u = e.call(l, l.__data__, c, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[c] = u);
  return new Rt(r, this._parents);
}
function O1(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function L1() {
  return [];
}
function bu(e) {
  return e == null ? L1 : function() {
    return this.querySelectorAll(e);
  };
}
function I1(e) {
  return function() {
    return O1(e.apply(this, arguments));
  };
}
function z1(e) {
  typeof e == "function" ? e = I1(e) : e = bu(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(e.call(l, l.__data__, u, s)), o.push(l));
  return new Rt(r, o);
}
function Cu(e) {
  return function() {
    return this.matches(e);
  };
}
function ku(e) {
  return function(t) {
    return t.matches(e);
  };
}
var R1 = Array.prototype.find;
function B1(e) {
  return function() {
    return R1.call(this.children, e);
  };
}
function Y1() {
  return this.firstElementChild;
}
function Z1(e) {
  return this.select(e == null ? Y1 : B1(typeof e == "function" ? e : ku(e)));
}
var X1 = Array.prototype.filter;
function W1() {
  return Array.from(this.children);
}
function F1(e) {
  return function() {
    return X1.call(this.children, e);
  };
}
function K1(e) {
  return this.selectAll(e == null ? W1 : F1(typeof e == "function" ? e : ku(e)));
}
function q1(e) {
  typeof e != "function" && (e = Cu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Rt(r, this._parents);
}
function Eu(e) {
  return new Array(e.length);
}
function G1() {
  return new Rt(this._enter || this._groups.map(Eu), this._parents);
}
function ai(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
ai.prototype = {
  constructor: ai,
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
function U1(e) {
  return function() {
    return e;
  };
}
function j1(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, u = i.length; s < u; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new ai(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function J1(e, t, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), c = t.length, f = i.length, d = new Array(c), g;
  for (a = 0; a < c; ++a)
    (l = t[a]) && (d[a] = g = s.call(l, l.__data__, a, t) + "", u.has(g) ? o[a] = l : u.set(g, l));
  for (a = 0; a < f; ++a)
    g = s.call(e, i[a], a, i) + "", (l = u.get(g)) ? (r[a] = l, l.__data__ = i[a], u.delete(g)) : n[a] = new ai(e, i[a]);
  for (a = 0; a < c; ++a)
    (l = t[a]) && u.get(d[a]) === l && (o[a] = l);
}
function Q1(e) {
  return e.__data__;
}
function eg(e, t) {
  if (!arguments.length) return Array.from(this, Q1);
  var n = t ? J1 : j1, r = this._parents, o = this._groups;
  typeof e != "function" && (e = U1(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var c = r[u], f = o[u], d = f.length, g = tg(e.call(c, c && c.__data__, u, r)), p = g.length, x = a[u] = new Array(p), k = s[u] = new Array(p), E = l[u] = new Array(d);
    n(c, f, x, k, E, g, t);
    for (var m = 0, _ = 0, v, b; m < p; ++m)
      if (v = x[m]) {
        for (m >= _ && (_ = m + 1); !(b = k[_]) && ++_ < p; ) ;
        v._next = b || null;
      }
  }
  return s = new Rt(s, r), s._enter = a, s._exit = l, s;
}
function tg(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function ng() {
  return new Rt(this._exit || this._groups.map(Eu), this._parents);
}
function rg(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function og(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], c = r[l], f = u.length, d = a[l] = new Array(f), g, p = 0; p < f; ++p)
      (g = u[p] || c[p]) && (d[p] = g);
  for (; l < o; ++l)
    a[l] = n[l];
  return new Rt(a, this._parents);
}
function ig() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function sg(e) {
  e || (e = ag);
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
function ag(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function lg() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function ug() {
  return Array.from(this);
}
function cg() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function dg() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function fg() {
  return !this.node();
}
function gg(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function hg(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function vg(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function pg(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function mg(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function yg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function wg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function _g(e, t) {
  var n = Li(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? vg : hg : typeof t == "function" ? n.local ? wg : yg : n.local ? mg : pg)(n, t));
}
function $u(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function xg(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function bg(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function Cg(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function kg(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? xg : typeof t == "function" ? Cg : bg)(e, t, n ?? "")) : Hr(this.node(), e);
}
function Hr(e, t) {
  return e.style.getPropertyValue(t) || $u(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Eg(e) {
  return function() {
    delete this[e];
  };
}
function $g(e, t) {
  return function() {
    this[e] = t;
  };
}
function Sg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Pg(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Eg : typeof t == "function" ? Sg : $g)(e, t)) : this.node()[e];
}
function Su(e) {
  return e.trim().split(/^|\s+/);
}
function Qs(e) {
  return e.classList || new Pu(e);
}
function Pu(e) {
  this._node = e, this._names = Su(e.getAttribute("class") || "");
}
Pu.prototype = {
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
function Nu(e, t) {
  for (var n = Qs(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Tu(e, t) {
  for (var n = Qs(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Ng(e) {
  return function() {
    Nu(this, e);
  };
}
function Tg(e) {
  return function() {
    Tu(this, e);
  };
}
function Mg(e, t) {
  return function() {
    (t.apply(this, arguments) ? Nu : Tu)(this, e);
  };
}
function Hg(e, t) {
  var n = Su(e + "");
  if (arguments.length < 2) {
    for (var r = Qs(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Mg : t ? Ng : Tg)(n, t));
}
function Dg() {
  this.textContent = "";
}
function Ag(e) {
  return function() {
    this.textContent = e;
  };
}
function Vg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Og(e) {
  return arguments.length ? this.each(e == null ? Dg : (typeof e == "function" ? Vg : Ag)(e)) : this.node().textContent;
}
function Lg() {
  this.innerHTML = "";
}
function Ig(e) {
  return function() {
    this.innerHTML = e;
  };
}
function zg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Rg(e) {
  return arguments.length ? this.each(e == null ? Lg : (typeof e == "function" ? zg : Ig)(e)) : this.node().innerHTML;
}
function Bg() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Yg() {
  return this.each(Bg);
}
function Zg() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Xg() {
  return this.each(Zg);
}
function Wg(e) {
  var t = typeof e == "function" ? e : xu(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Fg() {
  return null;
}
function Kg(e, t) {
  var n = typeof e == "function" ? e : xu(e), r = t == null ? Fg : typeof t == "function" ? t : Js(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function qg() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Gg() {
  return this.each(qg);
}
function Ug() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function jg() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Jg(e) {
  return this.select(e ? jg : Ug);
}
function Qg(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function eh(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function th(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function nh(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function rh(e, t, n) {
  return function() {
    var r = this.__on, o, i = eh(t);
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
function oh(e, t, n) {
  var r = th(e + ""), o, i = r.length, s;
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
  for (a = t ? rh : nh, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function Mu(e, t, n) {
  var r = $u(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function ih(e, t) {
  return function() {
    return Mu(this, e, t);
  };
}
function sh(e, t) {
  return function() {
    return Mu(this, e, t.apply(this, arguments));
  };
}
function ah(e, t) {
  return this.each((typeof t == "function" ? sh : ih)(e, t));
}
function* lh() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Hu = [null];
function Rt(e, t) {
  this._groups = e, this._parents = t;
}
function Eo() {
  return new Rt([[document.documentElement]], Hu);
}
function uh() {
  return this;
}
Rt.prototype = Eo.prototype = {
  constructor: Rt,
  select: V1,
  selectAll: z1,
  selectChild: Z1,
  selectChildren: K1,
  filter: q1,
  data: eg,
  enter: G1,
  exit: ng,
  join: rg,
  merge: og,
  selection: uh,
  order: ig,
  sort: sg,
  call: lg,
  nodes: ug,
  node: cg,
  size: dg,
  empty: fg,
  each: gg,
  attr: _g,
  style: kg,
  property: Pg,
  classed: Hg,
  text: Og,
  html: Rg,
  raise: Yg,
  lower: Xg,
  append: Wg,
  insert: Kg,
  remove: Gg,
  clone: Jg,
  datum: Qg,
  on: oh,
  dispatch: ah,
  [Symbol.iterator]: lh
};
function Wt(e) {
  return typeof e == "string" ? new Rt([[document.querySelector(e)]], [document.documentElement]) : new Rt([[e]], Hu);
}
function ch(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function Jt(e, t) {
  if (e = ch(e), t === void 0 && (t = e.currentTarget), t) {
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
const dh = { passive: !1 }, co = { capture: !0, passive: !1 };
function Ji(e) {
  e.stopImmediatePropagation();
}
function xr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Du(e) {
  var t = e.document.documentElement, n = Wt(e).on("dragstart.drag", xr, co);
  "onselectstart" in t ? n.on("selectstart.drag", xr, co) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Au(e, t) {
  var n = e.document.documentElement, r = Wt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", xr, co), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Ro = (e) => () => e;
function ws(e, {
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
ws.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function fh(e) {
  return !e.ctrlKey && !e.button;
}
function gh() {
  return this.parentNode;
}
function hh(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function vh() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function ph() {
  var e = fh, t = gh, n = hh, r = vh, o = {}, i = Oi("start", "drag", "end"), s = 0, a, l, u, c, f = 0;
  function d(v) {
    v.on("mousedown.drag", g).filter(r).on("touchstart.drag", k).on("touchmove.drag", E, dh).on("touchend.drag touchcancel.drag", m).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(v, b) {
    if (!(c || !e.call(this, v, b))) {
      var N = _(this, t.call(this, v, b), v, b, "mouse");
      N && (Wt(v.view).on("mousemove.drag", p, co).on("mouseup.drag", x, co), Du(v.view), Ji(v), u = !1, a = v.clientX, l = v.clientY, N("start", v));
    }
  }
  function p(v) {
    if (xr(v), !u) {
      var b = v.clientX - a, N = v.clientY - l;
      u = b * b + N * N > f;
    }
    o.mouse("drag", v);
  }
  function x(v) {
    Wt(v.view).on("mousemove.drag mouseup.drag", null), Au(v.view, u), xr(v), o.mouse("end", v);
  }
  function k(v, b) {
    if (e.call(this, v, b)) {
      var N = v.changedTouches, $ = t.call(this, v, b), T = N.length, A, D;
      for (A = 0; A < T; ++A)
        (D = _(this, $, v, b, N[A].identifier, N[A])) && (Ji(v), D("start", v, N[A]));
    }
  }
  function E(v) {
    var b = v.changedTouches, N = b.length, $, T;
    for ($ = 0; $ < N; ++$)
      (T = o[b[$].identifier]) && (xr(v), T("drag", v, b[$]));
  }
  function m(v) {
    var b = v.changedTouches, N = b.length, $, T;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), $ = 0; $ < N; ++$)
      (T = o[b[$].identifier]) && (Ji(v), T("end", v, b[$]));
  }
  function _(v, b, N, $, T, A) {
    var D = i.copy(), O = Jt(A || N, b), V, z, S;
    if ((S = n.call(v, new ws("beforestart", {
      sourceEvent: N,
      target: d,
      identifier: T,
      active: s,
      x: O[0],
      y: O[1],
      dx: 0,
      dy: 0,
      dispatch: D
    }), $)) != null)
      return V = S.x - O[0] || 0, z = S.y - O[1] || 0, function H(C, P, M) {
        var I = O, B;
        switch (C) {
          case "start":
            o[T] = H, B = s++;
            break;
          case "end":
            delete o[T], --s;
          // falls through
          case "drag":
            O = Jt(M || P, b), B = s;
            break;
        }
        D.call(
          C,
          v,
          new ws(C, {
            sourceEvent: P,
            subject: S,
            target: d,
            identifier: T,
            active: B,
            x: O[0] + V,
            y: O[1] + z,
            dx: O[0] - I[0],
            dy: O[1] - I[1],
            dispatch: D
          }),
          $
        );
      };
  }
  return d.filter = function(v) {
    return arguments.length ? (e = typeof v == "function" ? v : Ro(!!v), d) : e;
  }, d.container = function(v) {
    return arguments.length ? (t = typeof v == "function" ? v : Ro(v), d) : t;
  }, d.subject = function(v) {
    return arguments.length ? (n = typeof v == "function" ? v : Ro(v), d) : n;
  }, d.touchable = function(v) {
    return arguments.length ? (r = typeof v == "function" ? v : Ro(!!v), d) : r;
  }, d.on = function() {
    var v = i.on.apply(i, arguments);
    return v === i ? d : v;
  }, d.clickDistance = function(v) {
    return arguments.length ? (f = (v = +v) * v, d) : Math.sqrt(f);
  }, d;
}
function ea(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Vu(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function $o() {
}
var fo = 0.7, li = 1 / fo, br = "\\s*([+-]?\\d+)\\s*", go = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", fn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", mh = /^#([0-9a-f]{3,8})$/, yh = new RegExp(`^rgb\\(${br},${br},${br}\\)$`), wh = new RegExp(`^rgb\\(${fn},${fn},${fn}\\)$`), _h = new RegExp(`^rgba\\(${br},${br},${br},${go}\\)$`), xh = new RegExp(`^rgba\\(${fn},${fn},${fn},${go}\\)$`), bh = new RegExp(`^hsl\\(${go},${fn},${fn}\\)$`), Ch = new RegExp(`^hsla\\(${go},${fn},${fn},${go}\\)$`), Ya = {
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
ea($o, ho, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Za,
  // Deprecated! Use color.formatHex.
  formatHex: Za,
  formatHex8: kh,
  formatHsl: Eh,
  formatRgb: Xa,
  toString: Xa
});
function Za() {
  return this.rgb().formatHex();
}
function kh() {
  return this.rgb().formatHex8();
}
function Eh() {
  return Ou(this).formatHsl();
}
function Xa() {
  return this.rgb().formatRgb();
}
function ho(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = mh.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Wa(t) : n === 3 ? new Mt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Bo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Bo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = yh.exec(e)) ? new Mt(t[1], t[2], t[3], 1) : (t = wh.exec(e)) ? new Mt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = _h.exec(e)) ? Bo(t[1], t[2], t[3], t[4]) : (t = xh.exec(e)) ? Bo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = bh.exec(e)) ? qa(t[1], t[2] / 100, t[3] / 100, 1) : (t = Ch.exec(e)) ? qa(t[1], t[2] / 100, t[3] / 100, t[4]) : Ya.hasOwnProperty(e) ? Wa(Ya[e]) : e === "transparent" ? new Mt(NaN, NaN, NaN, 0) : null;
}
function Wa(e) {
  return new Mt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Bo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Mt(e, t, n, r);
}
function $h(e) {
  return e instanceof $o || (e = ho(e)), e ? (e = e.rgb(), new Mt(e.r, e.g, e.b, e.opacity)) : new Mt();
}
function _s(e, t, n, r) {
  return arguments.length === 1 ? $h(e) : new Mt(e, t, n, r ?? 1);
}
function Mt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
ea(Mt, _s, Vu($o, {
  brighter(e) {
    return e = e == null ? li : Math.pow(li, e), new Mt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? fo : Math.pow(fo, e), new Mt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Mt(ir(this.r), ir(this.g), ir(this.b), ui(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Fa,
  // Deprecated! Use color.formatHex.
  formatHex: Fa,
  formatHex8: Sh,
  formatRgb: Ka,
  toString: Ka
}));
function Fa() {
  return `#${rr(this.r)}${rr(this.g)}${rr(this.b)}`;
}
function Sh() {
  return `#${rr(this.r)}${rr(this.g)}${rr(this.b)}${rr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ka() {
  const e = ui(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${ir(this.r)}, ${ir(this.g)}, ${ir(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ui(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function ir(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function rr(e) {
  return e = ir(e), (e < 16 ? "0" : "") + e.toString(16);
}
function qa(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new en(e, t, n, r);
}
function Ou(e) {
  if (e instanceof en) return new en(e.h, e.s, e.l, e.opacity);
  if (e instanceof $o || (e = ho(e)), !e) return new en();
  if (e instanceof en) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new en(s, a, l, e.opacity);
}
function Ph(e, t, n, r) {
  return arguments.length === 1 ? Ou(e) : new en(e, t, n, r ?? 1);
}
function en(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
ea(en, Ph, Vu($o, {
  brighter(e) {
    return e = e == null ? li : Math.pow(li, e), new en(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? fo : Math.pow(fo, e), new en(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Mt(
      Qi(e >= 240 ? e - 240 : e + 120, o, r),
      Qi(e, o, r),
      Qi(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new en(Ga(this.h), Yo(this.s), Yo(this.l), ui(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = ui(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Ga(this.h)}, ${Yo(this.s) * 100}%, ${Yo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Ga(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Yo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Qi(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Lu = (e) => () => e;
function Nh(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Th(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function Mh(e) {
  return (e = +e) == 1 ? Iu : function(t, n) {
    return n - t ? Th(t, n, e) : Lu(isNaN(t) ? n : t);
  };
}
function Iu(e, t) {
  var n = t - e;
  return n ? Nh(e, n) : Lu(isNaN(e) ? t : e);
}
const Ua = function e(t) {
  var n = Mh(t);
  function r(o, i) {
    var s = n((o = _s(o)).r, (i = _s(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = Iu(o.opacity, i.opacity);
    return function(c) {
      return o.r = s(c), o.g = a(c), o.b = l(c), o.opacity = u(c), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function Bn(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
var xs = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, es = new RegExp(xs.source, "g");
function Hh(e) {
  return function() {
    return e;
  };
}
function Dh(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Ah(e, t) {
  var n = xs.lastIndex = es.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = xs.exec(e)) && (o = es.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: Bn(r, o) })), n = es.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? Dh(l[0].x) : Hh(t) : (t = l.length, function(u) {
    for (var c = 0, f; c < t; ++c) a[(f = l[c]).i] = f.x(u);
    return a.join("");
  });
}
var ja = 180 / Math.PI, bs = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function zu(e, t, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * r) && (n -= e * l, r -= t * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), e * r < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * ja,
    skewX: Math.atan(l) * ja,
    scaleX: s,
    scaleY: a
  };
}
var Zo;
function Vh(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? bs : zu(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Oh(e) {
  return e == null || (Zo || (Zo = document.createElementNS("http://www.w3.org/2000/svg", "g")), Zo.setAttribute("transform", e), !(e = Zo.transform.baseVal.consolidate())) ? bs : (e = e.matrix, zu(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Ru(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, c, f, d, g, p) {
    if (u !== f || c !== d) {
      var x = g.push("translate(", null, t, null, n);
      p.push({ i: x - 4, x: Bn(u, f) }, { i: x - 2, x: Bn(c, d) });
    } else (f || d) && g.push("translate(" + f + t + d + n);
  }
  function s(u, c, f, d) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), d.push({ i: f.push(o(f) + "rotate(", null, r) - 2, x: Bn(u, c) })) : c && f.push(o(f) + "rotate(" + c + r);
  }
  function a(u, c, f, d) {
    u !== c ? d.push({ i: f.push(o(f) + "skewX(", null, r) - 2, x: Bn(u, c) }) : c && f.push(o(f) + "skewX(" + c + r);
  }
  function l(u, c, f, d, g, p) {
    if (u !== f || c !== d) {
      var x = g.push(o(g) + "scale(", null, ",", null, ")");
      p.push({ i: x - 4, x: Bn(u, f) }, { i: x - 2, x: Bn(c, d) });
    } else (f !== 1 || d !== 1) && g.push(o(g) + "scale(" + f + "," + d + ")");
  }
  return function(u, c) {
    var f = [], d = [];
    return u = e(u), c = e(c), i(u.translateX, u.translateY, c.translateX, c.translateY, f, d), s(u.rotate, c.rotate, f, d), a(u.skewX, c.skewX, f, d), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, f, d), u = c = null, function(g) {
      for (var p = -1, x = d.length, k; ++p < x; ) f[(k = d[p]).i] = k.x(g);
      return f.join("");
    };
  };
}
var Lh = Ru(Vh, "px, ", "px)", "deg)"), Ih = Ru(Oh, ", ", ")", ")"), zh = 1e-12;
function Ja(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Rh(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Bh(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Yh = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], c = s[0], f = s[1], d = s[2], g = c - a, p = f - l, x = g * g + p * p, k, E;
    if (x < zh)
      E = Math.log(d / u) / t, k = function($) {
        return [
          a + $ * g,
          l + $ * p,
          u * Math.exp(t * $ * E)
        ];
      };
    else {
      var m = Math.sqrt(x), _ = (d * d - u * u + r * x) / (2 * u * n * m), v = (d * d - u * u - r * x) / (2 * d * n * m), b = Math.log(Math.sqrt(_ * _ + 1) - _), N = Math.log(Math.sqrt(v * v + 1) - v);
      E = (N - b) / t, k = function($) {
        var T = $ * E, A = Ja(b), D = u / (n * m) * (A * Bh(t * T + b) - Rh(b));
        return [
          a + D * g,
          l + D * p,
          u * A / Ja(t * T + b)
        ];
      };
    }
    return k.duration = E * 1e3 * t / Math.SQRT2, k;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
}(Math.SQRT2, 2, 4);
var Dr = 0, to = 0, Jr = 0, Bu = 1e3, ci, no, di = 0, ur = 0, Ii = 0, vo = typeof performance == "object" && performance.now ? performance : Date, Yu = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function ta() {
  return ur || (Yu(Zh), ur = vo.now() + Ii);
}
function Zh() {
  ur = 0;
}
function fi() {
  this._call = this._time = this._next = null;
}
fi.prototype = Zu.prototype = {
  constructor: fi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? ta() : +n) + (t == null ? 0 : +t), !this._next && no !== this && (no ? no._next = this : ci = this, no = this), this._call = e, this._time = n, Cs();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Cs());
  }
};
function Zu(e, t, n) {
  var r = new fi();
  return r.restart(e, t, n), r;
}
function Xh() {
  ta(), ++Dr;
  for (var e = ci, t; e; )
    (t = ur - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Dr;
}
function Qa() {
  ur = (di = vo.now()) + Ii, Dr = to = 0;
  try {
    Xh();
  } finally {
    Dr = 0, Fh(), ur = 0;
  }
}
function Wh() {
  var e = vo.now(), t = e - di;
  t > Bu && (Ii -= t, di = e);
}
function Fh() {
  for (var e, t = ci, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : ci = n);
  no = e, Cs(r);
}
function Cs(e) {
  if (!Dr) {
    to && (to = clearTimeout(to));
    var t = e - ur;
    t > 24 ? (e < 1 / 0 && (to = setTimeout(Qa, e - vo.now() - Ii)), Jr && (Jr = clearInterval(Jr))) : (Jr || (di = vo.now(), Jr = setInterval(Wh, Bu)), Dr = 1, Yu(Qa));
  }
}
function el(e, t, n) {
  var r = new fi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var Kh = Oi("start", "end", "cancel", "interrupt"), qh = [], Xu = 0, tl = 1, ks = 2, Go = 3, nl = 4, Es = 5, Uo = 6;
function zi(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  Gh(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: Kh,
    tween: qh,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Xu
  });
}
function na(e, t) {
  var n = an(e, t);
  if (n.state > Xu) throw new Error("too late; already scheduled");
  return n;
}
function bn(e, t) {
  var n = an(e, t);
  if (n.state > Go) throw new Error("too late; already running");
  return n;
}
function an(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function Gh(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Zu(i, 0, n.time);
  function i(u) {
    n.state = tl, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var c, f, d, g;
    if (n.state !== tl) return l();
    for (c in r)
      if (g = r[c], g.name === n.name) {
        if (g.state === Go) return el(s);
        g.state === nl ? (g.state = Uo, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[c]) : +c < t && (g.state = Uo, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[c]);
      }
    if (el(function() {
      n.state === Go && (n.state = nl, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = ks, n.on.call("start", e, e.__data__, n.index, n.group), n.state === ks) {
      for (n.state = Go, o = new Array(d = n.tween.length), c = 0, f = -1; c < d; ++c)
        (g = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++f] = g);
      o.length = f + 1;
    }
  }
  function a(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Es, 1), f = -1, d = o.length; ++f < d; )
      o[f].call(e, c);
    n.state === Es && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = Uo, n.timer.stop(), delete r[t];
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
      o = r.state > ks && r.state < Es, r.state = Uo, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function Uh(e) {
  return this.each(function() {
    jo(this, e);
  });
}
function jh(e, t) {
  var n, r;
  return function() {
    var o = bn(this, e), i = o.tween;
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
function Jh(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = bn(this, e), s = i.tween;
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
function Qh(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = an(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? jh : Jh)(n, e, t));
}
function ra(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = bn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return an(o, r).value[t];
  };
}
function Wu(e, t) {
  var n;
  return (typeof t == "number" ? Bn : t instanceof ho ? Ua : (n = ho(t)) ? (t = n, Ua) : Ah)(e, t);
}
function ev(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function tv(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function nv(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function rv(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function ov(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function iv(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function sv(e, t) {
  var n = Li(e), r = n === "transform" ? Ih : Wu;
  return this.attrTween(e, typeof t == "function" ? (n.local ? iv : ov)(n, r, ra(this, "attr." + e, t)) : t == null ? (n.local ? tv : ev)(n) : (n.local ? rv : nv)(n, r, t));
}
function av(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function lv(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function uv(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && lv(e, i)), n;
  }
  return o._value = t, o;
}
function cv(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && av(e, i)), n;
  }
  return o._value = t, o;
}
function dv(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Li(e);
  return this.tween(n, (r.local ? uv : cv)(r, t));
}
function fv(e, t) {
  return function() {
    na(this, e).delay = +t.apply(this, arguments);
  };
}
function gv(e, t) {
  return t = +t, function() {
    na(this, e).delay = t;
  };
}
function hv(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? fv : gv)(t, e)) : an(this.node(), t).delay;
}
function vv(e, t) {
  return function() {
    bn(this, e).duration = +t.apply(this, arguments);
  };
}
function pv(e, t) {
  return t = +t, function() {
    bn(this, e).duration = t;
  };
}
function mv(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? vv : pv)(t, e)) : an(this.node(), t).duration;
}
function yv(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    bn(this, e).ease = t;
  };
}
function wv(e) {
  var t = this._id;
  return arguments.length ? this.each(yv(t, e)) : an(this.node(), t).ease;
}
function _v(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    bn(this, e).ease = n;
  };
}
function xv(e) {
  if (typeof e != "function") throw new Error();
  return this.each(_v(this._id, e));
}
function bv(e) {
  typeof e != "function" && (e = Cu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Vn(r, this._parents, this._name, this._id);
}
function Cv(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], u = n[a], c = l.length, f = s[a] = new Array(c), d, g = 0; g < c; ++g)
      (d = l[g] || u[g]) && (f[g] = d);
  for (; a < r; ++a)
    s[a] = t[a];
  return new Vn(s, this._parents, this._name, this._id);
}
function kv(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function Ev(e, t, n) {
  var r, o, i = kv(t) ? na : bn;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function $v(e, t) {
  var n = this._id;
  return arguments.length < 2 ? an(this.node(), n).on.on(e) : this.each(Ev(n, e, t));
}
function Sv(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Pv() {
  return this.on("end.remove", Sv(this._id));
}
function Nv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Js(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), c, f, d = 0; d < l; ++d)
      (c = a[d]) && (f = e.call(c, c.__data__, d, a)) && ("__data__" in c && (f.__data__ = c.__data__), u[d] = f, zi(u[d], t, n, d, u, an(c, n)));
  return new Vn(i, this._parents, t, n);
}
function Tv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = bu(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, c, f = 0; f < u; ++f)
      if (c = l[f]) {
        for (var d = e.call(c, c.__data__, f, l), g, p = an(c, n), x = 0, k = d.length; x < k; ++x)
          (g = d[x]) && zi(g, t, n, x, d, p);
        i.push(d), s.push(c);
      }
  return new Vn(i, s, t, n);
}
var Mv = Eo.prototype.constructor;
function Hv() {
  return new Mv(this._groups, this._parents);
}
function Dv(e, t) {
  var n, r, o;
  return function() {
    var i = Hr(this, e), s = (this.style.removeProperty(e), Hr(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function Fu(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Av(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = Hr(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Vv(e, t, n) {
  var r, o, i;
  return function() {
    var s = Hr(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), Hr(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function Ov(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = bn(this, e), u = l.on, c = l.value[i] == null ? a || (a = Fu(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(s, o = c), l.on = r;
  };
}
function Lv(e, t, n) {
  var r = (e += "") == "transform" ? Lh : Wu;
  return t == null ? this.styleTween(e, Dv(e, r)).on("end.style." + e, Fu(e)) : typeof t == "function" ? this.styleTween(e, Vv(e, r, ra(this, "style." + e, t))).each(Ov(this._id, e)) : this.styleTween(e, Av(e, r, t), n).on("end.style." + e, null);
}
function Iv(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function zv(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && Iv(e, s, n)), r;
  }
  return i._value = t, i;
}
function Rv(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, zv(e, t, n ?? ""));
}
function Bv(e) {
  return function() {
    this.textContent = e;
  };
}
function Yv(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function Zv(e) {
  return this.tween("text", typeof e == "function" ? Yv(ra(this, "text", e)) : Bv(e == null ? "" : e + ""));
}
function Xv(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function Wv(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && Xv(o)), t;
  }
  return r._value = e, r;
}
function Fv(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, Wv(e));
}
function Kv() {
  for (var e = this._name, t = this._id, n = Ku(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var c = an(l, t);
        zi(l, e, n, u, s, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new Vn(r, this._parents, e, n);
}
function qv() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = bn(this, r), c = u.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var Gv = 0;
function Vn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Ku() {
  return ++Gv;
}
var kn = Eo.prototype;
Vn.prototype = {
  constructor: Vn,
  select: Nv,
  selectAll: Tv,
  selectChild: kn.selectChild,
  selectChildren: kn.selectChildren,
  filter: bv,
  merge: Cv,
  selection: Hv,
  transition: Kv,
  call: kn.call,
  nodes: kn.nodes,
  node: kn.node,
  size: kn.size,
  empty: kn.empty,
  each: kn.each,
  on: $v,
  attr: sv,
  attrTween: dv,
  style: Lv,
  styleTween: Rv,
  text: Zv,
  textTween: Fv,
  remove: Pv,
  tween: Qh,
  delay: hv,
  duration: mv,
  ease: wv,
  easeVarying: xv,
  end: qv,
  [Symbol.iterator]: kn[Symbol.iterator]
};
function Uv(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var jv = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Uv
};
function Jv(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Qv(e) {
  var t, n;
  e instanceof Vn ? (t = e._id, e = e._name) : (t = Ku(), (n = jv).time = ta(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && zi(l, e, t, u, s, n || Jv(l, t));
  return new Vn(r, this._parents, e, t);
}
Eo.prototype.interrupt = Uh;
Eo.prototype.transition = Qv;
const Xo = (e) => () => e;
function e0(e, {
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
function Sn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Sn.prototype = {
  constructor: Sn,
  scale: function(e) {
    return e === 1 ? this : new Sn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Sn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var Ri = new Sn(1, 0, 0);
qu.prototype = Sn.prototype;
function qu(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Ri;
  return e.__zoom;
}
function ts(e) {
  e.stopImmediatePropagation();
}
function Qr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function t0(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function n0() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function rl() {
  return this.__zoom || Ri;
}
function r0(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function o0() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function i0(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function Gu() {
  var e = t0, t = n0, n = i0, r = r0, o = o0, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = Yh, u = Oi("start", "zoom", "end"), c, f, d, g = 500, p = 150, x = 0, k = 10;
  function E(S) {
    S.property("__zoom", rl).on("wheel.zoom", T, { passive: !1 }).on("mousedown.zoom", A).on("dblclick.zoom", D).filter(o).on("touchstart.zoom", O).on("touchmove.zoom", V).on("touchend.zoom touchcancel.zoom", z).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  E.transform = function(S, H, C, P) {
    var M = S.selection ? S.selection() : S;
    M.property("__zoom", rl), S !== M ? b(S, H, C, P) : M.interrupt().each(function() {
      N(this, arguments).event(P).start().zoom(null, typeof H == "function" ? H.apply(this, arguments) : H).end();
    });
  }, E.scaleBy = function(S, H, C, P) {
    E.scaleTo(S, function() {
      var M = this.__zoom.k, I = typeof H == "function" ? H.apply(this, arguments) : H;
      return M * I;
    }, C, P);
  }, E.scaleTo = function(S, H, C, P) {
    E.transform(S, function() {
      var M = t.apply(this, arguments), I = this.__zoom, B = C == null ? v(M) : typeof C == "function" ? C.apply(this, arguments) : C, F = I.invert(B), K = typeof H == "function" ? H.apply(this, arguments) : H;
      return n(_(m(I, K), B, F), M, s);
    }, C, P);
  }, E.translateBy = function(S, H, C, P) {
    E.transform(S, function() {
      return n(this.__zoom.translate(
        typeof H == "function" ? H.apply(this, arguments) : H,
        typeof C == "function" ? C.apply(this, arguments) : C
      ), t.apply(this, arguments), s);
    }, null, P);
  }, E.translateTo = function(S, H, C, P, M) {
    E.transform(S, function() {
      var I = t.apply(this, arguments), B = this.__zoom, F = P == null ? v(I) : typeof P == "function" ? P.apply(this, arguments) : P;
      return n(Ri.translate(F[0], F[1]).scale(B.k).translate(
        typeof H == "function" ? -H.apply(this, arguments) : -H,
        typeof C == "function" ? -C.apply(this, arguments) : -C
      ), I, s);
    }, P, M);
  };
  function m(S, H) {
    return H = Math.max(i[0], Math.min(i[1], H)), H === S.k ? S : new Sn(H, S.x, S.y);
  }
  function _(S, H, C) {
    var P = H[0] - C[0] * S.k, M = H[1] - C[1] * S.k;
    return P === S.x && M === S.y ? S : new Sn(S.k, P, M);
  }
  function v(S) {
    return [(+S[0][0] + +S[1][0]) / 2, (+S[0][1] + +S[1][1]) / 2];
  }
  function b(S, H, C, P) {
    S.on("start.zoom", function() {
      N(this, arguments).event(P).start();
    }).on("interrupt.zoom end.zoom", function() {
      N(this, arguments).event(P).end();
    }).tween("zoom", function() {
      var M = this, I = arguments, B = N(M, I).event(P), F = t.apply(M, I), K = C == null ? v(F) : typeof C == "function" ? C.apply(M, I) : C, oe = Math.max(F[1][0] - F[0][0], F[1][1] - F[0][1]), J = M.__zoom, W = typeof H == "function" ? H.apply(M, I) : H, de = l(J.invert(K).concat(oe / J.k), W.invert(K).concat(oe / W.k));
      return function(we) {
        if (we === 1) we = W;
        else {
          var Ce = de(we), fe = oe / Ce[2];
          we = new Sn(fe, K[0] - Ce[0] * fe, K[1] - Ce[1] * fe);
        }
        B.zoom(null, we);
      };
    });
  }
  function N(S, H, C) {
    return !C && S.__zooming || new $(S, H);
  }
  function $(S, H) {
    this.that = S, this.args = H, this.active = 0, this.sourceEvent = null, this.extent = t.apply(S, H), this.taps = 0;
  }
  $.prototype = {
    event: function(S) {
      return S && (this.sourceEvent = S), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(S, H) {
      return this.mouse && S !== "mouse" && (this.mouse[1] = H.invert(this.mouse[0])), this.touch0 && S !== "touch" && (this.touch0[1] = H.invert(this.touch0[0])), this.touch1 && S !== "touch" && (this.touch1[1] = H.invert(this.touch1[0])), this.that.__zoom = H, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(S) {
      var H = Wt(this.that).datum();
      u.call(
        S,
        this.that,
        new e0(S, {
          sourceEvent: this.sourceEvent,
          target: E,
          transform: this.that.__zoom,
          dispatch: u
        }),
        H
      );
    }
  };
  function T(S, ...H) {
    if (!e.apply(this, arguments)) return;
    var C = N(this, H).event(S), P = this.__zoom, M = Math.max(i[0], Math.min(i[1], P.k * Math.pow(2, r.apply(this, arguments)))), I = Jt(S);
    if (C.wheel)
      (C.mouse[0][0] !== I[0] || C.mouse[0][1] !== I[1]) && (C.mouse[1] = P.invert(C.mouse[0] = I)), clearTimeout(C.wheel);
    else {
      if (P.k === M) return;
      C.mouse = [I, P.invert(I)], jo(this), C.start();
    }
    Qr(S), C.wheel = setTimeout(B, p), C.zoom("mouse", n(_(m(P, M), C.mouse[0], C.mouse[1]), C.extent, s));
    function B() {
      C.wheel = null, C.end();
    }
  }
  function A(S, ...H) {
    if (d || !e.apply(this, arguments)) return;
    var C = S.currentTarget, P = N(this, H, !0).event(S), M = Wt(S.view).on("mousemove.zoom", K, !0).on("mouseup.zoom", oe, !0), I = Jt(S, C), B = S.clientX, F = S.clientY;
    Du(S.view), ts(S), P.mouse = [I, this.__zoom.invert(I)], jo(this), P.start();
    function K(J) {
      if (Qr(J), !P.moved) {
        var W = J.clientX - B, de = J.clientY - F;
        P.moved = W * W + de * de > x;
      }
      P.event(J).zoom("mouse", n(_(P.that.__zoom, P.mouse[0] = Jt(J, C), P.mouse[1]), P.extent, s));
    }
    function oe(J) {
      M.on("mousemove.zoom mouseup.zoom", null), Au(J.view, P.moved), Qr(J), P.event(J).end();
    }
  }
  function D(S, ...H) {
    if (e.apply(this, arguments)) {
      var C = this.__zoom, P = Jt(S.changedTouches ? S.changedTouches[0] : S, this), M = C.invert(P), I = C.k * (S.shiftKey ? 0.5 : 2), B = n(_(m(C, I), P, M), t.apply(this, H), s);
      Qr(S), a > 0 ? Wt(this).transition().duration(a).call(b, B, P, S) : Wt(this).call(E.transform, B, P, S);
    }
  }
  function O(S, ...H) {
    if (e.apply(this, arguments)) {
      var C = S.touches, P = C.length, M = N(this, H, S.changedTouches.length === P).event(S), I, B, F, K;
      for (ts(S), B = 0; B < P; ++B)
        F = C[B], K = Jt(F, this), K = [K, this.__zoom.invert(K), F.identifier], M.touch0 ? !M.touch1 && M.touch0[2] !== K[2] && (M.touch1 = K, M.taps = 0) : (M.touch0 = K, I = !0, M.taps = 1 + !!c);
      c && (c = clearTimeout(c)), I && (M.taps < 2 && (f = K[0], c = setTimeout(function() {
        c = null;
      }, g)), jo(this), M.start());
    }
  }
  function V(S, ...H) {
    if (this.__zooming) {
      var C = N(this, H).event(S), P = S.changedTouches, M = P.length, I, B, F, K;
      for (Qr(S), I = 0; I < M; ++I)
        B = P[I], F = Jt(B, this), C.touch0 && C.touch0[2] === B.identifier ? C.touch0[0] = F : C.touch1 && C.touch1[2] === B.identifier && (C.touch1[0] = F);
      if (B = C.that.__zoom, C.touch1) {
        var oe = C.touch0[0], J = C.touch0[1], W = C.touch1[0], de = C.touch1[1], we = (we = W[0] - oe[0]) * we + (we = W[1] - oe[1]) * we, Ce = (Ce = de[0] - J[0]) * Ce + (Ce = de[1] - J[1]) * Ce;
        B = m(B, Math.sqrt(we / Ce)), F = [(oe[0] + W[0]) / 2, (oe[1] + W[1]) / 2], K = [(J[0] + de[0]) / 2, (J[1] + de[1]) / 2];
      } else if (C.touch0) F = C.touch0[0], K = C.touch0[1];
      else return;
      C.zoom("touch", n(_(B, F, K), C.extent, s));
    }
  }
  function z(S, ...H) {
    if (this.__zooming) {
      var C = N(this, H).event(S), P = S.changedTouches, M = P.length, I, B;
      for (ts(S), d && clearTimeout(d), d = setTimeout(function() {
        d = null;
      }, g), I = 0; I < M; ++I)
        B = P[I], C.touch0 && C.touch0[2] === B.identifier ? delete C.touch0 : C.touch1 && C.touch1[2] === B.identifier && delete C.touch1;
      if (C.touch1 && !C.touch0 && (C.touch0 = C.touch1, delete C.touch1), C.touch0) C.touch0[1] = this.__zoom.invert(C.touch0[0]);
      else if (C.end(), C.taps === 2 && (B = Jt(B, this), Math.hypot(f[0] - B[0], f[1] - B[1]) < k)) {
        var F = Wt(this).on("dblclick.zoom");
        F && F.apply(this, arguments);
      }
    }
  }
  return E.wheelDelta = function(S) {
    return arguments.length ? (r = typeof S == "function" ? S : Xo(+S), E) : r;
  }, E.filter = function(S) {
    return arguments.length ? (e = typeof S == "function" ? S : Xo(!!S), E) : e;
  }, E.touchable = function(S) {
    return arguments.length ? (o = typeof S == "function" ? S : Xo(!!S), E) : o;
  }, E.extent = function(S) {
    return arguments.length ? (t = typeof S == "function" ? S : Xo([[+S[0][0], +S[0][1]], [+S[1][0], +S[1][1]]]), E) : t;
  }, E.scaleExtent = function(S) {
    return arguments.length ? (i[0] = +S[0], i[1] = +S[1], E) : [i[0], i[1]];
  }, E.translateExtent = function(S) {
    return arguments.length ? (s[0][0] = +S[0][0], s[1][0] = +S[1][0], s[0][1] = +S[0][1], s[1][1] = +S[1][1], E) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, E.constrain = function(S) {
    return arguments.length ? (n = S, E) : n;
  }, E.duration = function(S) {
    return arguments.length ? (a = +S, E) : a;
  }, E.interpolate = function(S) {
    return arguments.length ? (l = S, E) : l;
  }, E.on = function() {
    var S = u.on.apply(u, arguments);
    return S === u ? E : S;
  }, E.clickDistance = function(S) {
    return arguments.length ? (x = (S = +S) * S, E) : Math.sqrt(x);
  }, E.tapDistance = function(S) {
    return arguments.length ? (k = +S, E) : k;
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
}, gi = [
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
var hi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(hi || (hi = {}));
const $s = {
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
var Cr;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Cr || (Cr = {}));
var po;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(po || (po = {}));
var Ee;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(Ee || (Ee = {}));
const ol = {
  [Ee.Left]: Ee.Right,
  [Ee.Right]: Ee.Left,
  [Ee.Top]: Ee.Bottom,
  [Ee.Bottom]: Ee.Top
};
function s0(e, t) {
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
function il(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t != null && t.has(i) || r.push(o);
  }), r.length && n(r);
}
function a0(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const l0 = (e) => "id" in e && "source" in e && "target" in e, u0 = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), oa = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), So = (e, t = [0, 0]) => {
  const { width: n, height: r } = Qn(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, c0 = (e, t = { nodeOrigin: [0, 0], nodeLookup: void 0 }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : oa(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? vi(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Bi(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Yi(n);
}, Po = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = vi(r);
      n = Bi(n, o);
    }
  }), Yi(n);
}, Uu = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...No(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: f = !0, hidden: d = !1 } = u;
    if (s && !f || d)
      continue;
    const g = c.width ?? u.width ?? u.initialWidth ?? null, p = c.height ?? u.height ?? u.initialHeight ?? null, x = mo(a, Or(u)), k = (g ?? 0) * (p ?? 0), E = i && x > 0;
    (!u.internals.handleBounds || E || x >= k || u.dragging) && l.push(u);
  }
  return l;
}, Ss = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function sl(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && ((t == null ? void 0 : t.includeHiddenNodes) || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function al({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!1);
  const a = Po(e), l = sa(a, t, n, (s == null ? void 0 : s.minZoom) ?? o, (s == null ? void 0 : s.maxZoom) ?? i, (s == null ? void 0 : s.padding) ?? 0.1);
  return await r.setViewport(l, { duration: s == null ? void 0 : s.duration }), Promise.resolve(!0);
}
function d0({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: u } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, c = s.origin ?? r;
  let f = o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i == null || i("005", Ar.error005());
    else {
      const g = a.measured.width, p = a.measured.height;
      g && p && (f = [
        [l, u],
        [l + g, u + p]
      ]);
    }
  else a && Lr(s.extent) && (f = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const d = Lr(f) ? dr(t, f, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && (i == null || i("015", Ar.error015())), {
    position: {
      x: d.x - l + (s.measured.width ?? 0) * c[0],
      y: d.y - u + (s.measured.height ?? 0) * c[1]
    },
    positionAbsolute: d
  };
}
async function ju({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((d) => d.id)), s = [];
  for (const d of n) {
    if (d.deletable === !1)
      continue;
    const g = i.has(d.id), p = !g && d.parentId && s.find((x) => x.id === d.parentId);
    (g || p) && s.push(d);
  }
  const a = new Set(t.map((d) => d.id)), l = r.filter((d) => d.deletable !== !1), c = Ss(s, l);
  for (const d of l)
    a.has(d.id) && !c.find((p) => p.id === d.id) && c.push(d);
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
const Vr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), dr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Vr(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: Vr(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function Ju(e, t, n) {
  const { width: r, height: o } = Qn(n), { x: i, y: s } = n.internals.positionAbsolute;
  return dr(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const ll = (e, t, n) => e < t ? Vr(Math.abs(e - t), 1, t) / t : e > n ? -Vr(Math.abs(e - n), 1, t) / t : 0, Qu = (e, t, n = 15, r = 40) => {
  const o = ll(e.x, r, t.width - r) * n, i = ll(e.y, r, t.height - r) * n;
  return [o, i];
}, Bi = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Ps = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Yi = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Or = (e, t = [0, 0]) => {
  var o, i;
  const { x: n, y: r } = oa(e) ? e.internals.positionAbsolute : So(e, t);
  return {
    x: n,
    y: r,
    width: ((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, vi = (e, t = [0, 0]) => {
  var o, i;
  const { x: n, y: r } = oa(e) ? e.internals.positionAbsolute : So(e, t);
  return {
    x: n,
    y: r,
    x2: n + (((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, ec = (e, t) => Yi(Bi(Ps(e), Ps(t))), mo = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, ul = (e) => Pn(e.width) && Pn(e.height) && Pn(e.x) && Pn(e.y), Pn = (e) => !isNaN(e) && isFinite(e), f0 = (e, t) => {
}, ia = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), No = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? ia(a, s) : a;
}, tc = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
}), sa = (e, t, n, r, o, i) => {
  const s = t / (e.width * (1 + i)), a = n / (e.height * (1 + i)), l = Math.min(s, a), u = Vr(l, r, o), c = e.x + e.width / 2, f = e.y + e.height / 2, d = t / 2 - c * u, g = n / 2 - f * u;
  return { x: d, y: g, zoom: u };
}, pi = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function Lr(e) {
  return e !== void 0 && e !== "parent";
}
function Qn(e) {
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
function g0(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function ns(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = Mn(e), a = No({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: s - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? ia(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const aa = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), h0 = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, v0 = ["INPUT", "SELECT", "TEXTAREA"];
function p0(e) {
  var r, o;
  const t = ((o = (r = e.composedPath) == null ? void 0 : r.call(e)) == null ? void 0 : o[0]) || e.target;
  return (t == null ? void 0 : t.nodeType) !== 1 ? !1 : v0.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const rc = (e) => "clientX" in e, Mn = (e, t) => {
  var i, s;
  const n = rc(e), r = n ? e.clientX : (i = e.touches) == null ? void 0 : i[0].clientX, o = n ? e.clientY : (s = e.touches) == null ? void 0 : s[0].clientY;
  return {
    x: r - ((t == null ? void 0 : t.left) ?? 0),
    y: o - ((t == null ? void 0 : t.top) ?? 0)
  };
}, cl = (e, t, n, r, o) => {
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
      ...aa(s)
    };
  });
};
function m0({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, c = Math.abs(l - e), f = Math.abs(u - t);
  return [l, u, c, f];
}
function Wo(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function dl({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
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
function oc({ sourceX: e, sourceY: t, sourcePosition: n = Ee.Bottom, targetX: r, targetY: o, targetPosition: i = Ee.Top, curvature: s = 0.25 }) {
  const [a, l] = dl({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [u, c] = dl({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [f, d, g, p] = m0({
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
    p
  ];
}
function ic({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function y0({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const i = n || t.selected || e.selected, s = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (i ? s : 0);
}
function w0({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = Bi(vi(e), vi(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return mo(s, Yi(i)) > 0;
}
const _0 = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, x0 = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), b0 = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return l0(e) ? n = { ...e } : n = {
    ...e,
    id: _0(e)
  }, x0(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Ns({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = ic({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const fl = {
  [Ee.Left]: { x: -1, y: 0 },
  [Ee.Right]: { x: 1, y: 0 },
  [Ee.Top]: { x: 0, y: -1 },
  [Ee.Bottom]: { x: 0, y: 1 }
}, C0 = ({ source: e, sourcePosition: t = Ee.Bottom, target: n }) => t === Ee.Left || t === Ee.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, gl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function k0({ source: e, sourcePosition: t = Ee.Bottom, target: n, targetPosition: r = Ee.Top, center: o, offset: i }) {
  const s = fl[t], a = fl[r], l = { x: e.x + s.x * i, y: e.y + s.y * i }, u = { x: n.x + a.x * i, y: n.y + a.y * i }, c = C0({
    source: l,
    sourcePosition: t,
    target: u
  }), f = c.x !== 0 ? "x" : "y", d = c[f];
  let g = [], p, x;
  const k = { x: 0, y: 0 }, E = { x: 0, y: 0 }, [m, _, v, b] = ic({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (s[f] * a[f] === -1) {
    p = o.x ?? m, x = o.y ?? _;
    const $ = [
      { x: p, y: l.y },
      { x: p, y: u.y }
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
        const S = Math.min(i - 1, i - z);
        s[f] === d ? k[f] = (l[f] > e[f] ? -1 : 1) * S : E[f] = (u[f] > n[f] ? -1 : 1) * S;
      }
    }
    if (t !== r) {
      const z = f === "x" ? "y" : "x", S = s[f] === a[z], H = l[z] > u[z], C = l[z] < u[z];
      (s[f] === 1 && (!S && H || S && C) || s[f] !== 1 && (!S && C || S && H)) && (g = f === "x" ? $ : T);
    }
    const A = { x: l.x + k.x, y: l.y + k.y }, D = { x: u.x + E.x, y: u.y + E.y }, O = Math.max(Math.abs(A.x - g[0].x), Math.abs(D.x - g[0].x)), V = Math.max(Math.abs(A.y - g[0].y), Math.abs(D.y - g[0].y));
    O >= V ? (p = (A.x + D.x) / 2, x = g[0].y) : (p = g[0].x, x = (A.y + D.y) / 2);
  }
  return [[
    e,
    { x: l.x + k.x, y: l.y + k.y },
    ...g,
    { x: u.x + E.x, y: u.y + E.y },
    n
  ], p, x, v, b];
}
function E0(e, t, n, r) {
  const o = Math.min(gl(e, t) / 2, gl(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, c = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * c}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function mi({ sourceX: e, sourceY: t, sourcePosition: n = Ee.Bottom, targetX: r, targetY: o, targetPosition: i = Ee.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20 }) {
  const [c, f, d, g, p] = k0({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u
  });
  return [c.reduce((k, E, m) => {
    let _ = "";
    return m > 0 && m < c.length - 1 ? _ = E0(c[m - 1], E, c[m + 1], s) : _ = `${m === 0 ? "M" : "L"}${E.x} ${E.y}`, k += _, k;
  }, ""), f, d, g, p];
}
function hl(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function $0(e) {
  var f;
  const { sourceNode: t, targetNode: n } = e;
  if (!hl(t) || !hl(n))
    return null;
  const r = t.internals.handleBounds || vl(t.handles), o = n.internals.handleBounds || vl(n.handles), i = pl((r == null ? void 0 : r.source) ?? [], e.sourceHandle), s = pl(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === cr.Strict ? (o == null ? void 0 : o.target) ?? [] : ((o == null ? void 0 : o.target) ?? []).concat((o == null ? void 0 : o.source) ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return (f = e.onError) == null || f.call(e, "008", Ar.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = (i == null ? void 0 : i.position) || Ee.Bottom, l = (s == null ? void 0 : s.position) || Ee.Top, u = yo(t, i, a), c = yo(n, s, l);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: c.x,
    targetY: c.y,
    sourcePosition: a,
    targetPosition: l
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
function yo(e, t, n = Ee.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? Qn(e);
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
function pl(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Ts(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function S0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = Ts(l, t);
      i.has(u) || (s.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function P0(e, t, n, r, o) {
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
const la = {
  nodeOrigin: [0, 0],
  nodeExtent: gi,
  elevateNodesOnSelect: !0,
  defaults: {}
}, N0 = {
  ...la,
  checkEquality: !0
};
function ua(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function T0(e, t, n) {
  const r = ua(la, n);
  for (const o of e.values())
    if (o.parentId)
      ca(o, e, t, r);
    else {
      const i = So(o, r.nodeOrigin), s = Lr(o.extent) ? o.extent : r.nodeExtent, a = dr(i, s, Qn(o));
      o.internals.positionAbsolute = a;
    }
}
function sc(e, t, n, r) {
  var a, l;
  const o = ua(N0, r), i = new Map(t), s = o != null && o.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let c = i.get(u.id);
    if (o.checkEquality && u === (c == null ? void 0 : c.internals.userNode))
      t.set(u.id, c);
    else {
      const f = So(u, o.nodeOrigin), d = Lr(u.extent) ? u.extent : o.nodeExtent, g = dr(f, d, Qn(u));
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
          z: ac(u, s),
          userNode: u
        }
      }, t.set(u.id, c);
    }
    u.parentId && ca(c, t, n, r);
  }
}
function M0(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function ca(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: s } = ua(la, r), a = e.parentId, l = t.get(a);
  if (!l) {
    console.warn(`Parent node ${a} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  M0(e, n);
  const u = o ? 1e3 : 0, { x: c, y: f, z: d } = H0(e, l, i, s, u), { positionAbsolute: g } = e.internals, p = c !== g.x || f !== g.y;
  (p || d !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: p ? { x: c, y: f } : g,
      z: d
    }
  });
}
function ac(e, t) {
  return (Pn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function H0(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = Qn(e), l = So(e, n), u = Lr(e.extent) ? dr(l, e.extent, a) : l;
  let c = dr({ x: i + u.x, y: s + u.y }, r, a);
  e.extent === "parent" && (c = Ju(c, a, t));
  const f = ac(e, o), d = t.internals.z ?? 0;
  return {
    x: c.x,
    y: c.y,
    z: d > f ? d : f
  };
}
function D0(e, t, n, r = [0, 0]) {
  var s;
  const o = [], i = /* @__PURE__ */ new Map();
  for (const a of e) {
    const l = t.get(a.parentId);
    if (!l)
      continue;
    const u = ((s = i.get(a.parentId)) == null ? void 0 : s.expandedRect) ?? Or(l), c = ec(u, a.rect);
    i.set(a.parentId, { expandedRect: c, parent: l });
  }
  return i.size > 0 && i.forEach(({ expandedRect: a, parent: l }, u) => {
    var _;
    const c = l.internals.positionAbsolute, f = Qn(l), d = l.origin ?? r, g = a.x < c.x ? Math.round(Math.abs(c.x - a.x)) : 0, p = a.y < c.y ? Math.round(Math.abs(c.y - a.y)) : 0, x = Math.max(f.width, Math.round(a.width)), k = Math.max(f.height, Math.round(a.height)), E = (x - f.width) * d[0], m = (k - f.height) * d[1];
    (g > 0 || p > 0 || E || m) && (o.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - g + E,
        y: l.position.y - p + m
      }
    }), (_ = n.get(u)) == null || _.forEach((v) => {
      e.some((b) => b.id === v.id) || o.push({
        id: v.id,
        type: "position",
        position: {
          x: v.position.x + g,
          y: v.position.y + p
        }
      });
    })), (f.width < a.width || f.height < a.height || g || p) && o.push({
      id: u,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: x + (g ? d[0] * g - E : 0),
        height: k + (p ? d[1] * p - m : 0)
      }
    });
  }), o;
}
function A0(e, t, n, r, o, i) {
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
    const p = aa(d.nodeElement), x = g.measured.width !== p.width || g.measured.height !== p.height;
    if (!!(p.width && p.height && (x || !g.internals.handleBounds || d.force))) {
      const E = d.nodeElement.getBoundingClientRect(), m = Lr(g.extent) ? g.extent : i;
      let { positionAbsolute: _ } = g.internals;
      g.parentId && g.extent === "parent" ? _ = Ju(_, p, t.get(g.parentId)) : m && (_ = dr(_, m, p));
      const v = {
        ...g,
        measured: p,
        internals: {
          ...g.internals,
          positionAbsolute: _,
          handleBounds: {
            source: cl("source", d.nodeElement, E, c, g.id),
            target: cl("target", d.nodeElement, E, c, g.id)
          }
        }
      };
      t.set(g.id, v), g.parentId && ca(v, t, n, { nodeOrigin: o }), a = !0, x && (l.push({
        id: g.id,
        type: "dimensions",
        dimensions: p
      }), g.expandParent && g.parentId && f.push({
        id: g.id,
        parentId: g.parentId,
        rect: Or(v, o)
      }));
    }
  }
  if (f.length > 0) {
    const d = D0(f, t, n, o);
    l.push(...d);
  }
  return { changes: l, updatedInternals: a };
}
async function V0({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function ml(e, t, n, r, o, i) {
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
function lc(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, c = `${i}-${a}--${o}-${s}`;
    ml("source", l, c, e, o, s), ml("target", l, u, e, i, a), t.set(r.id, r);
  }
}
function O0(e, t) {
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
function yl(e, t, n) {
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
function L0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !uc(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function rs({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
function I0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, c = null, f = !1, d = null, g = !1;
  function p({ noDragClassName: k, handleSelector: E, domNode: m, isSelectable: _, nodeId: v, nodeClickDistance: b = 0 }) {
    d = Wt(m);
    function N({ x: D, y: O }, V) {
      const { nodeLookup: z, nodeExtent: S, snapGrid: H, snapToGrid: C, nodeOrigin: P, onNodeDrag: M, onSelectionDrag: I, onError: B, updateNodePositions: F } = t();
      i = { x: D, y: O };
      let K = !1, oe = { x: 0, y: 0, x2: 0, y2: 0 };
      if (a.size > 1 && S) {
        const J = Po(a);
        oe = Ps(J);
      }
      for (const [J, W] of a) {
        if (!z.has(J))
          continue;
        let de = { x: D - W.distance.x, y: O - W.distance.y };
        C && (de = ia(de, H));
        let we = [
          [S[0][0], S[0][1]],
          [S[1][0], S[1][1]]
        ];
        if (a.size > 1 && S && !W.extent) {
          const { positionAbsolute: ze } = W.internals, ie = ze.x - oe.x + S[0][0], ge = ze.x + W.measured.width - oe.x2 + S[1][0], Ye = ze.y - oe.y + S[0][1], Ae = ze.y + W.measured.height - oe.y2 + S[1][1];
          we = [
            [ie, Ye],
            [ge, Ae]
          ];
        }
        const { position: Ce, positionAbsolute: fe } = d0({
          nodeId: J,
          nextPosition: de,
          nodeLookup: z,
          nodeExtent: we,
          nodeOrigin: P,
          onError: B
        });
        K = K || W.position.x !== Ce.x || W.position.y !== Ce.y, W.position = Ce, W.internals.positionAbsolute = fe;
      }
      if (K && (F(a, !0), V && (r || M || !v && I))) {
        const [J, W] = rs({
          nodeId: v,
          dragItems: a,
          nodeLookup: z
        });
        r == null || r(V, a, J, W), M == null || M(V, J, W), v || I == null || I(V, W);
      }
    }
    async function $() {
      if (!c)
        return;
      const { transform: D, panBy: O, autoPanSpeed: V, autoPanOnNodeDrag: z } = t();
      if (!z) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [S, H] = Qu(u, c, V);
      (S !== 0 || H !== 0) && (i.x = (i.x ?? 0) - S / D[2], i.y = (i.y ?? 0) - H / D[2], await O({ x: S, y: H }) && N(i, null)), s = requestAnimationFrame($);
    }
    function T(D) {
      var K;
      const { nodeLookup: O, multiSelectionActive: V, nodesDraggable: z, transform: S, snapGrid: H, snapToGrid: C, selectNodesOnDrag: P, onNodeDragStart: M, onSelectionDragStart: I, unselectNodesAndEdges: B } = t();
      f = !0, (!P || !_) && !V && v && ((K = O.get(v)) != null && K.selected || B()), _ && P && v && (e == null || e(v));
      const F = ns(D.sourceEvent, { transform: S, snapGrid: H, snapToGrid: C, containerBounds: c });
      if (i = F, a = L0(O, z, F, v), a.size > 0 && (n || M || !v && I)) {
        const [oe, J] = rs({
          nodeId: v,
          dragItems: a,
          nodeLookup: O
        });
        n == null || n(D.sourceEvent, a, oe, J), M == null || M(D.sourceEvent, oe, J), v || I == null || I(D.sourceEvent, J);
      }
    }
    const A = ph().clickDistance(b).on("start", (D) => {
      const { domNode: O, nodeDragThreshold: V, transform: z, snapGrid: S, snapToGrid: H } = t();
      c = (O == null ? void 0 : O.getBoundingClientRect()) || null, g = !1, V === 0 && T(D), i = ns(D.sourceEvent, { transform: z, snapGrid: S, snapToGrid: H, containerBounds: c }), u = Mn(D.sourceEvent, c);
    }).on("drag", (D) => {
      const { autoPanOnNodeDrag: O, transform: V, snapGrid: z, snapToGrid: S, nodeDragThreshold: H, nodeLookup: C } = t(), P = ns(D.sourceEvent, { transform: V, snapGrid: z, snapToGrid: S, containerBounds: c });
      if ((D.sourceEvent.type === "touchmove" && D.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      v && !C.has(v)) && (g = !0), !g) {
        if (!l && O && f && (l = !0, $()), !f) {
          const M = P.xSnapped - (i.x ?? 0), I = P.ySnapped - (i.y ?? 0);
          Math.sqrt(M * M + I * I) > H && T(D);
        }
        (i.x !== P.xSnapped || i.y !== P.ySnapped) && a && f && (u = Mn(D.sourceEvent, c), N(P, D.sourceEvent));
      }
    }).on("end", (D) => {
      if (!(!f || g) && (l = !1, f = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: O, updateNodePositions: V, onNodeDragStop: z, onSelectionDragStop: S } = t();
        if (V(a, !1), o || z || !v && S) {
          const [H, C] = rs({
            nodeId: v,
            dragItems: a,
            nodeLookup: O,
            dragging: !1
          });
          o == null || o(D.sourceEvent, a, H, C), z == null || z(D.sourceEvent, H, C), v || S == null || S(D.sourceEvent, C);
        }
      }
    }).filter((D) => {
      const O = D.target;
      return !D.button && (!k || !yl(O, `.${k}`, m)) && (!E || yl(O, E, m));
    });
    d.call(A);
  }
  function x() {
    d == null || d.on(".drag", null);
  }
  return {
    update: p,
    destroy: x
  };
}
function z0(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    mo(o, Or(i)) > 0 && r.push(i);
  return r;
}
const R0 = 250;
function B0(e, t, n, r) {
  var a, l;
  let o = [], i = 1 / 0;
  const s = z0(e, n, t + R0);
  for (const u of s) {
    const c = [...((a = u.internals.handleBounds) == null ? void 0 : a.source) ?? [], ...((l = u.internals.handleBounds) == null ? void 0 : l.target) ?? []];
    for (const f of c) {
      if (r.nodeId === f.nodeId && r.type === f.type && r.id === f.id)
        continue;
      const { x: d, y: g } = yo(u, f, f.position, !0), p = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(g - e.y, 2));
      p > t || (p < i ? (o = [{ ...f, x: d, y: g }], i = p) : p === i && o.push({ ...f, x: d, y: g }));
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
function cc(e, t, n, r, o, i = !1) {
  var u, c, f;
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? (u = s.internals.handleBounds) == null ? void 0 : u[t] : [...((c = s.internals.handleBounds) == null ? void 0 : c.source) ?? [], ...((f = s.internals.handleBounds) == null ? void 0 : f.target) ?? []], l = (n ? a == null ? void 0 : a.find((d) => d.id === n) : a == null ? void 0 : a[0]) ?? null;
  return l && i ? { ...l, ...yo(s, l, l.position, !0) } : l;
}
function dc(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function Y0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const fc = () => !0;
function Z0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: f, panBy: d, cancelConnection: g, onConnectStart: p, onConnect: x, onConnectEnd: k, isValidConnection: E = fc, onReconnectEnd: m, updateConnection: _, getTransform: v, getFromHandle: b, autoPanSpeed: N }) {
  const $ = h0(e.target);
  let T = 0, A;
  const { x: D, y: O } = Mn(e), V = $ == null ? void 0 : $.elementFromPoint(D, O), z = dc(i, V), S = a == null ? void 0 : a.getBoundingClientRect();
  if (!S || !z)
    return;
  const H = cc(o, z, r, l, t);
  if (!H)
    return;
  let C = Mn(e, S), P = !1, M = null, I = !1, B = null;
  function F() {
    if (!c || !S)
      return;
    const [fe, ze] = Qu(C, S, N);
    d({ x: fe, y: ze }), T = requestAnimationFrame(F);
  }
  const K = {
    ...H,
    nodeId: o,
    type: z,
    position: H.position
  }, oe = l.get(o), W = {
    inProgress: !0,
    isValid: null,
    from: yo(oe, K, Ee.Left, !0),
    fromHandle: K,
    fromPosition: K.position,
    fromNode: oe,
    to: C,
    toHandle: null,
    toPosition: ol[K.position],
    toNode: null
  };
  _(W);
  let de = W;
  p == null || p(e, { nodeId: o, handleId: r, handleType: z });
  function we(fe) {
    if (!b() || !K) {
      Ce(fe);
      return;
    }
    const ze = v();
    C = Mn(fe, S), A = B0(No(C, ze, !1, [1, 1]), n, l, K), P || (F(), P = !0);
    const ie = gc(fe, {
      handle: A,
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
    B = ie.handleDomNode, M = ie.connection, I = Y0(!!A, ie.isValid);
    const ge = {
      // from stays the same
      ...de,
      isValid: I,
      to: A && I ? tc({ x: A.x, y: A.y }, ze) : C,
      toHandle: ie.toHandle,
      toPosition: I && ie.toHandle ? ie.toHandle.position : ol[K.position],
      toNode: ie.toHandle ? l.get(ie.toHandle.nodeId) : null
    };
    I && A && de.toHandle && ge.toHandle && de.toHandle.type === ge.toHandle.type && de.toHandle.nodeId === ge.toHandle.nodeId && de.toHandle.id === ge.toHandle.id && de.to.x === ge.to.x && de.to.y === ge.to.y || (_(ge), de = ge);
  }
  function Ce(fe) {
    (A || B) && M && I && (x == null || x(M));
    const { inProgress: ze, ...ie } = de, ge = {
      ...ie,
      toPosition: de.toHandle ? de.toPosition : null
    };
    k == null || k(fe, ge), i && (m == null || m(fe, ge)), g(), cancelAnimationFrame(T), P = !1, I = !1, M = null, B = null, $.removeEventListener("mousemove", we), $.removeEventListener("mouseup", Ce), $.removeEventListener("touchmove", we), $.removeEventListener("touchend", Ce);
  }
  $.addEventListener("mousemove", we), $.addEventListener("mouseup", Ce), $.addEventListener("touchmove", we), $.addEventListener("touchend", Ce);
}
function gc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = fc, nodeLookup: c }) {
  const f = i === "target", d = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: g, y: p } = Mn(e), x = s.elementFromPoint(g, p), k = x != null && x.classList.contains(`${a}-flow__handle`) ? x : d, E = {
    handleDomNode: k,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (k) {
    const m = dc(void 0, k), _ = k.getAttribute("data-nodeid"), v = k.getAttribute("data-handleid"), b = k.classList.contains("connectable"), N = k.classList.contains("connectableend");
    if (!_ || !m)
      return E;
    const $ = {
      source: f ? _ : r,
      sourceHandle: f ? v : o,
      target: f ? r : _,
      targetHandle: f ? o : v
    };
    E.connection = $;
    const A = b && N && (n === cr.Strict ? f && m === "source" || !f && m === "target" : _ !== r || v !== o);
    E.isValid = A && u($), E.toHandle = cc(_, m, v, c, n, !1);
  }
  return E;
}
const X0 = {
  onPointerDown: Z0,
  isValid: gc
};
function W0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Wt(e);
  function i({ translateExtent: a, width: l, height: u, zoomStep: c = 10, pannable: f = !0, zoomable: d = !0, inversePan: g = !1 }) {
    const p = (_) => {
      const v = n();
      if (_.sourceEvent.type !== "wheel" || !t)
        return;
      const b = -_.sourceEvent.deltaY * (_.sourceEvent.deltaMode === 1 ? 0.05 : _.sourceEvent.deltaMode ? 1 : 2e-3) * c, N = v[2] * Math.pow(2, b);
      t.scaleTo(N);
    };
    let x = [0, 0];
    const k = (_) => {
      (_.sourceEvent.type === "mousedown" || _.sourceEvent.type === "touchstart") && (x = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ]);
    }, E = (_) => {
      const v = n();
      if (_.sourceEvent.type !== "mousemove" && _.sourceEvent.type !== "touchmove" || !t)
        return;
      const b = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ], N = [b[0] - x[0], b[1] - x[1]];
      x = b;
      const $ = r() * Math.max(v[2], Math.log(v[2])) * (g ? -1 : 1), T = {
        x: v[0] - N[0] * $,
        y: v[1] - N[1] * $
      }, A = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: T.x,
        y: T.y,
        zoom: v[2]
      }, A, a);
    }, m = Gu().on("start", k).on("zoom", f ? E : null).on("zoom.wheel", d ? p : null);
    o.call(m, {});
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
const F0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Zi = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), os = ({ x: e, y: t, zoom: n }) => Ri.translate(e, t).scale(n), wr = (e, t) => e.target.closest(`.${t}`), hc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), is = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, vc = (e) => {
  const t = e.ctrlKey && pi() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function K0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (wr(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const f = n.property("__zoom").k || 1;
    if (c.ctrlKey && s) {
      const k = Jt(c), E = vc(c), m = f * Math.pow(2, E);
      r.scaleTo(n, m, k, c);
      return;
    }
    const d = c.deltaMode === 1 ? 20 : 1;
    let g = o === Kn.Vertical ? 0 : c.deltaX * d, p = o === Kn.Horizontal ? 0 : c.deltaY * d;
    !pi() && c.shiftKey && o !== Kn.Vertical && (g = c.deltaY * d, p = 0), r.translateBy(
      n,
      -(g / f) * i,
      -(p / f) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const x = Zi(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, a == null || a(c, x)), e.isPanScrolling && (l == null || l(c, x), e.panScrollTimeout = setTimeout(() => {
      u == null || u(c, x), e.isPanScrolling = !1;
    }, 150));
  };
}
function q0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    if (!t && r.type === "wheel" && !r.ctrlKey || wr(r, e))
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function G0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var i, s, a;
    if ((i = r.sourceEvent) != null && i.internal)
      return;
    const o = Zi(r.transform);
    e.mouseButton = ((s = r.sourceEvent) == null ? void 0 : s.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, ((a = r.sourceEvent) == null ? void 0 : a.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, o));
  };
}
function U0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var s, a;
    e.usedRightMouseButton = !!(n && hc(t, e.mouseButton ?? 0)), (s = i.sourceEvent) != null && s.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((a = i.sourceEvent) != null && a.internal) && (o == null || o(i.sourceEvent, Zi(i.transform)));
  };
}
function j0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    var a;
    if (!((a = s.sourceEvent) != null && a.internal) && (e.isZoomingOrPanning = !1, i && hc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && F0(e.prevViewport, s.transform))) {
      const l = Zi(s.transform);
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
function J0({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: u }) {
  return (c) => {
    var p;
    const f = e || t, d = n && c.ctrlKey;
    if (c.button === 1 && c.type === "mousedown" && (wr(c, `${u}-flow__node`) || wr(c, `${u}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || s || wr(c, a) && c.type === "wheel" || wr(c, l) && (c.type !== "wheel" || o && c.type === "wheel" && !e) || !n && c.ctrlKey && c.type === "wheel")
      return !1;
    if (!n && c.type === "touchstart" && ((p = c.touches) == null ? void 0 : p.length) > 1)
      return c.preventDefault(), !1;
    if (!f && !o && !d && c.type === "wheel" || !r && (c.type === "mousedown" || c.type === "touchstart") || Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
      return !1;
    const g = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || c.type === "wheel") && g;
  };
}
function Q0({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: s, onPanZoomStart: a, onPanZoomEnd: l, onDraggingChange: u }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, f = e.getBoundingClientRect(), d = Gu().clickDistance(!Pn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), g = Wt(e).call(d);
  _({
    x: i.x,
    y: i.y,
    zoom: Vr(i.zoom, t, n)
  }, [
    [0, 0],
    [f.width, f.height]
  ], o);
  const p = g.on("wheel.zoom"), x = g.on("dblclick.zoom");
  d.wheelDelta(vc);
  function k(V, z) {
    return g ? new Promise((S) => {
      d == null || d.transform(is(g, z == null ? void 0 : z.duration, () => S(!0)), V);
    }) : Promise.resolve(!1);
  }
  function E({ noWheelClassName: V, noPanClassName: z, onPaneContextMenu: S, userSelectionActive: H, panOnScroll: C, panOnDrag: P, panOnScrollMode: M, panOnScrollSpeed: I, preventScrolling: B, zoomOnPinch: F, zoomOnScroll: K, zoomOnDoubleClick: oe, zoomActivationKeyPressed: J, lib: W, onTransformChange: de }) {
    H && !c.isZoomingOrPanning && m();
    const Ce = C && !J && !H ? K0({
      zoomPanValues: c,
      noWheelClassName: V,
      d3Selection: g,
      d3Zoom: d,
      panOnScrollMode: M,
      panOnScrollSpeed: I,
      zoomOnPinch: F,
      onPanZoomStart: a,
      onPanZoom: s,
      onPanZoomEnd: l
    }) : q0({
      noWheelClassName: V,
      preventScrolling: B,
      d3ZoomHandler: p
    });
    if (g.on("wheel.zoom", Ce, { passive: !1 }), !H) {
      const ze = G0({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: a
      });
      d.on("start", ze);
      const ie = U0({
        zoomPanValues: c,
        panOnDrag: P,
        onPaneContextMenu: !!S,
        onPanZoom: s,
        onTransformChange: de
      });
      d.on("zoom", ie);
      const ge = j0({
        zoomPanValues: c,
        panOnDrag: P,
        panOnScroll: C,
        onPaneContextMenu: S,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      d.on("end", ge);
    }
    const fe = J0({
      zoomActivationKeyPressed: J,
      panOnDrag: P,
      zoomOnScroll: K,
      panOnScroll: C,
      zoomOnDoubleClick: oe,
      zoomOnPinch: F,
      userSelectionActive: H,
      noPanClassName: z,
      noWheelClassName: V,
      lib: W
    });
    d.filter(fe), oe ? g.on("dblclick.zoom", x) : g.on("dblclick.zoom", null);
  }
  function m() {
    d.on("zoom", null);
  }
  async function _(V, z, S) {
    const H = os(V), C = d == null ? void 0 : d.constrain()(H, z, S);
    return C && await k(C), new Promise((P) => P(C));
  }
  async function v(V, z) {
    const S = os(V);
    return await k(S, z), new Promise((H) => H(S));
  }
  function b(V) {
    if (g) {
      const z = os(V), S = g.property("__zoom");
      (S.k !== V.zoom || S.x !== V.x || S.y !== V.y) && (d == null || d.transform(g, z, null, { sync: !0 }));
    }
  }
  function N() {
    const V = g ? qu(g.node()) : { x: 0, y: 0, k: 1 };
    return { x: V.x, y: V.y, zoom: V.k };
  }
  function $(V, z) {
    return g ? new Promise((S) => {
      d == null || d.scaleTo(is(g, z == null ? void 0 : z.duration, () => S(!0)), V);
    }) : Promise.resolve(!1);
  }
  function T(V, z) {
    return g ? new Promise((S) => {
      d == null || d.scaleBy(is(g, z == null ? void 0 : z.duration, () => S(!0)), V);
    }) : Promise.resolve(!1);
  }
  function A(V) {
    d == null || d.scaleExtent(V);
  }
  function D(V) {
    d == null || d.translateExtent(V);
  }
  function O(V) {
    const z = !Pn(V) || V < 0 ? 0 : V;
    d == null || d.clickDistance(z);
  }
  return {
    update: E,
    destroy: m,
    setViewport: v,
    setViewportConstrained: _,
    getViewport: N,
    scaleTo: $,
    scaleBy: T,
    setScaleExtent: A,
    setTranslateExtent: D,
    syncViewport: b,
    setClickDistance: O
  };
}
var wl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(wl || (wl = {}));
var ep = /* @__PURE__ */ ne('<div role="button" tabindex="-1"><!></div>');
function jn(e, t) {
  ue(t, !1);
  const [n, r] = tt(), o = () => j(oe, "$connectable", n), i = () => j(Ce, "$connectionRadius", n), s = () => j(de, "$domNode", n), a = () => j(we, "$nodeLookup", n), l = () => j(W, "$connectionMode", n), u = () => j(ie, "$lib", n), c = () => j(he, "$autoPanOnConnect", n), f = () => j(Oe, "$flowId", n), d = () => j(ze, "$isValidConnectionStore", n), g = () => j(Ye, "$onedgecreate", n), p = () => j(Ne, "$onConnectAction", n), x = () => j(qe, "$onConnectStartAction", n), k = () => j(Re, "$onConnectEndAction", n), E = () => j(fe, "$viewport", n), m = () => j(ut, "$connection", n), _ = () => j(se, "$edges", n), v = () => j(ke, "$connectionLookup", n), b = te(), N = te(), $ = te(), T = te(), A = te(), D = te(), O = te(), V = te();
  let z = w(t, "id", 12, void 0), S = w(t, "type", 12, "source"), H = w(t, "position", 28, () => Ee.Top), C = w(t, "style", 12, void 0), P = w(t, "isValidConnection", 12, void 0), M = w(t, "onconnect", 12, void 0), I = w(t, "ondisconnect", 12, void 0), B = w(t, "isConnectable", 12, void 0), F = w(t, "class", 12, void 0);
  const K = ar("svelteflow__node_id"), oe = ar("svelteflow__node_connectable"), J = Ke(), {
    connectionMode: W,
    domNode: de,
    nodeLookup: we,
    connectionRadius: Ce,
    viewport: fe,
    isValidConnection: ze,
    lib: ie,
    addEdge: ge,
    onedgecreate: Ye,
    panBy: Ae,
    cancelConnection: Ze,
    updateConnection: ee,
    autoPanOnConnect: he,
    edges: se,
    connectionLookup: ke,
    onconnect: Ne,
    onconnectstart: qe,
    onconnectend: Re,
    flowId: Oe,
    connection: ut
  } = J;
  function nt(Pe) {
    const ot = rc(Pe);
    (ot && Pe.button === 0 || !ot) && X0.onPointerDown(Pe, {
      handleId: h($),
      nodeId: K,
      isTarget: h(b),
      connectionRadius: i(),
      domNode: s(),
      nodeLookup: a(),
      connectionMode: l(),
      lib: u(),
      autoPanOnConnect: c(),
      flowId: f(),
      isValidConnection: P() ?? d(),
      updateConnection: ee,
      cancelConnection: Ze,
      panBy: Ae,
      onConnect: (me) => {
        var lt;
        const it = g() ? g()(me) : me;
        it && (ge(it), (lt = p()) == null || lt(me));
      },
      onConnectStart: (me, it) => {
        var lt;
        (lt = x()) == null || lt(me, {
          nodeId: it.nodeId,
          handleId: it.handleId,
          handleType: it.handleType
        });
      },
      onConnectEnd: (me, it) => {
        var lt;
        (lt = k()) == null || lt(me, it);
      },
      getTransform: () => [
        E().x,
        E().y,
        E().zoom
      ],
      getFromHandle: () => m().fromHandle
    });
  }
  let Q = te(null), Xe = te();
  le(() => U(S()), () => {
    G(b, S() === "target");
  }), le(
    () => (U(B()), o()),
    () => {
      G(N, B() !== void 0 ? B() : o());
    }
  ), le(() => U(z()), () => {
    G($, z() || null);
  }), le(
    () => (U(M()), U(I()), _(), v(), U(S()), U(z())),
    () => {
      (M() || I()) && (_(), G(Xe, v().get(`${K}-${S()}${z() ? `-${z()}` : ""}`)));
    }
  ), le(
    () => (h(Q), h(Xe), U(I()), U(M())),
    () => {
      if (h(Q) && !s0(h(Xe), h(Q))) {
        const Pe = h(Xe) ?? /* @__PURE__ */ new Map();
        il(h(Q), Pe, I()), il(Pe, h(Q), M());
      }
      G(Q, h(Xe) ?? /* @__PURE__ */ new Map());
    }
  ), le(() => m(), () => {
    G(T, !!m().fromHandle);
  }), le(
    () => (m(), U(S()), h($)),
    () => {
      var Pe, ot, me;
      G(A, ((Pe = m().fromHandle) == null ? void 0 : Pe.nodeId) === K && ((ot = m().fromHandle) == null ? void 0 : ot.type) === S() && ((me = m().fromHandle) == null ? void 0 : me.id) === h($));
    }
  ), le(
    () => (m(), U(S()), h($)),
    () => {
      var Pe, ot, me;
      G(D, ((Pe = m().toHandle) == null ? void 0 : Pe.nodeId) === K && ((ot = m().toHandle) == null ? void 0 : ot.type) === S() && ((me = m().toHandle) == null ? void 0 : me.id) === h($));
    }
  ), le(
    () => (l(), m(), U(S()), h($)),
    () => {
      var Pe, ot, me;
      G(O, l() === cr.Strict ? ((Pe = m().fromHandle) == null ? void 0 : Pe.type) !== S() : K !== ((ot = m().fromHandle) == null ? void 0 : ot.nodeId) || h($) !== ((me = m().fromHandle) == null ? void 0 : me.id));
    }
  ), le(() => (h(D), m()), () => {
    G(V, h(D) && m().isValid);
  }), gt(), He();
  var ve = ep();
  ae(ve, "data-nodeid", K);
  let ln;
  var Gt = X(ve);
  vt(Gt, t, "default", {}), Z(ve), $e(
    (Pe) => {
      ae(ve, "data-handleid", h($)), ae(ve, "data-handlepos", H()), ae(ve, "data-id", `${f() ?? ""}-${K ?? ""}-${z() || ""}-${S() ?? ""}`), ln = Ct(ve, 1, _n(Pe), null, ln, {
        valid: h(V),
        connectingto: h(D),
        connectingfrom: h(A),
        source: !h(b),
        target: h(b),
        connectablestart: h(N),
        connectableend: h(N),
        connectable: h(N),
        connectionindicator: h(N) && (!h(T) || h(O))
      }), ae(ve, "style", C());
    },
    [
      () => $t([
        "svelte-flow__handle",
        `svelte-flow__handle-${H()}`,
        "nodrag",
        "nopan",
        H(),
        F()
      ])
    ],
    pe
  ), Qe("mousedown", ve, nt), Qe("touchstart", ve, nt), L(e, ve);
  var un = ce({
    get id() {
      return z();
    },
    set id(Pe) {
      z(Pe), y();
    },
    get type() {
      return S();
    },
    set type(Pe) {
      S(Pe), y();
    },
    get position() {
      return H();
    },
    set position(Pe) {
      H(Pe), y();
    },
    get style() {
      return C();
    },
    set style(Pe) {
      C(Pe), y();
    },
    get isValidConnection() {
      return P();
    },
    set isValidConnection(Pe) {
      P(Pe), y();
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
  return r(), un;
}
re(
  jn,
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
var tp = /* @__PURE__ */ ne("<!> <!>", 1);
function yi(e, t) {
  const n = rt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  rt(n, ["data", "targetPosition", "sourcePosition"]), ue(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "targetPosition", 12, void 0), i = w(t, "sourcePosition", 12, void 0);
  He();
  var s = tp(), a = _e(s);
  const l = /* @__PURE__ */ pe(() => o() ?? Ee.Top);
  jn(a, {
    type: "target",
    get position() {
      return h(l);
    }
  });
  var u = R(a), c = R(u);
  const f = /* @__PURE__ */ pe(() => i() ?? Ee.Bottom);
  return jn(c, {
    type: "source",
    get position() {
      return h(f);
    }
  }), $e(() => {
    var d;
    return wn(u, ` ${((d = r()) == null ? void 0 : d.label) ?? ""} `);
  }), L(e, s), ce({
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
  yi,
  {
    data: {},
    targetPosition: {},
    sourcePosition: {}
  },
  [],
  [],
  !0
);
var np = /* @__PURE__ */ ne(" <!>", 1);
function pc(e, t) {
  const n = rt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  rt(n, ["data", "sourcePosition"]), ue(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "sourcePosition", 12, void 0);
  He(), Te();
  var i = np(), s = _e(i), a = R(s);
  const l = /* @__PURE__ */ pe(() => o() ?? Ee.Bottom);
  return jn(a, {
    type: "source",
    get position() {
      return h(l);
    }
  }), $e(() => {
    var u;
    return wn(s, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), L(e, i), ce({
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
re(pc, { data: {}, sourcePosition: {} }, [], [], !0);
var rp = /* @__PURE__ */ ne(" <!>", 1);
function mc(e, t) {
  const n = rt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  rt(n, ["data", "targetPosition"]), ue(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "targetPosition", 12, void 0);
  He(), Te();
  var i = rp(), s = _e(i), a = R(s);
  const l = /* @__PURE__ */ pe(() => o() ?? Ee.Top);
  return jn(a, {
    type: "target",
    get position() {
      return h(l);
    }
  }), $e(() => {
    var u;
    return wn(s, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), L(e, i), ce({
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
re(mc, { data: {}, targetPosition: {} }, [], [], !0);
function yc(e, t) {
  const n = rt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  rt(n, []);
}
re(yc, {}, [], [], !0);
function _l(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function kr(e, { target: t, domNode: n }) {
  return _l(e, n, t), {
    async update({ target: r, domNode: o }) {
      _l(e, o, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var op = /* @__PURE__ */ ne("<div><!></div>");
function wc(e, t) {
  ue(t, !1);
  const [n, r] = tt(), o = () => j(i, "$domNode", n), { domNode: i } = Ke();
  He();
  var s = op(), a = X(s);
  vt(a, t, "default", {}), Z(s), ht(s, (l, u) => kr == null ? void 0 : kr(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), L(e, s), ce(), r();
}
re(wc, {}, ["default"], [], !0);
function _c() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: i, elementsSelectable: s } = Ke();
  return (a) => {
    const l = q(e).get(a);
    if (!l) {
      console.warn("012", Ar.error012(a));
      return;
    }
    (l.selectable || q(s) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && q(r) && i({ nodes: [], edges: [l] }) : o([a]));
  };
}
var ip = /* @__PURE__ */ ne('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function xc(e, t) {
  ue(t, !1);
  let n = w(t, "style", 12, void 0), r = w(t, "x", 12, void 0), o = w(t, "y", 12, void 0);
  const i = _c(), s = ar("svelteflow__edge_id");
  return He(), wc(e, {
    children: (a, l) => {
      var u = ip(), c = X(u);
      vt(c, t, "default", {}), Z(u), $e(() => {
        ae(u, "style", "pointer-events: all;" + n()), at(u, "transform", `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`);
      }), Qe("keyup", u, () => {
      }), Qe("click", u, () => {
        s && i(s);
      }), L(a, u);
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
re(xc, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var sp = /* @__PURE__ */ xe('<path fill="none" class="svelte-flow__edge-interaction"></path>'), ap = /* @__PURE__ */ xe('<path fill="none"></path><!><!>', 1);
function To(e, t) {
  ue(t, !1);
  let n = w(t, "id", 12, void 0), r = w(t, "path", 12), o = w(t, "label", 12, void 0), i = w(t, "labelX", 12, void 0), s = w(t, "labelY", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "markerStart", 12, void 0), u = w(t, "markerEnd", 12, void 0), c = w(t, "style", 12, void 0), f = w(t, "interactionWidth", 12, 20), d = w(t, "class", 12, void 0), g = f() === void 0 ? 20 : f();
  He();
  var p = ap(), x = _e(p), k = R(x);
  {
    var E = (v) => {
      var b = sp();
      ae(b, "stroke-opacity", 0), ae(b, "stroke-width", g), $e(() => ae(b, "d", r())), L(v, b);
    };
    be(k, (v) => {
      g && v(E);
    });
  }
  var m = R(k);
  {
    var _ = (v) => {
      xc(v, {
        get x() {
          return i();
        },
        get y() {
          return s();
        },
        get style() {
          return a();
        },
        children: (b, N) => {
          Te();
          var $ = Ie();
          $e(() => wn($, o())), L(b, $);
        },
        $$slots: { default: !0 }
      });
    };
    be(m, (v) => {
      o() && v(_);
    });
  }
  return $e(
    (v) => {
      ae(x, "id", n()), ae(x, "d", r()), Ct(x, 0, _n(v)), ae(x, "marker-start", l()), ae(x, "marker-end", u()), ae(x, "style", c());
    },
    [
      () => $t(["svelte-flow__edge-path", d()])
    ],
    pe
  ), L(e, p), ce({
    get id() {
      return n();
    },
    set id(v) {
      n(v), y();
    },
    get path() {
      return r();
    },
    set path(v) {
      r(v), y();
    },
    get label() {
      return o();
    },
    set label(v) {
      o(v), y();
    },
    get labelX() {
      return i();
    },
    set labelX(v) {
      i(v), y();
    },
    get labelY() {
      return s();
    },
    set labelY(v) {
      s(v), y();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(v) {
      a(v), y();
    },
    get markerStart() {
      return l();
    },
    set markerStart(v) {
      l(v), y();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(v) {
      u(v), y();
    },
    get style() {
      return c();
    },
    set style(v) {
      c(v), y();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(v) {
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
  To,
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
function wi(e, t) {
  const n = rt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  rt(n, [
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
  const r = te(), o = te(), i = te();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), g = w(t, "sourceY", 12), p = w(t, "sourcePosition", 12), x = w(t, "targetX", 12), k = w(t, "targetY", 12), E = w(t, "targetPosition", 12);
  return le(
    () => (h(r), h(o), h(i), U(d()), U(g()), U(x()), U(k()), U(p()), U(E())),
    () => {
      ((m) => (G(r, m[0]), G(o, m[1]), G(i, m[2])))(oc({
        sourceX: d(),
        sourceY: g(),
        targetX: x(),
        targetY: k(),
        sourcePosition: p(),
        targetPosition: E()
      }));
    }
  ), gt(), He(), To(e, {
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
      return p();
    },
    set sourcePosition(m) {
      p(m), y();
    },
    get targetX() {
      return x();
    },
    set targetX(m) {
      x(m), y();
    },
    get targetY() {
      return k();
    },
    set targetY(m) {
      k(m), y();
    },
    get targetPosition() {
      return E();
    },
    set targetPosition(m) {
      E(m), y();
    }
  });
}
re(
  wi,
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
function bc(e, t) {
  const n = rt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  rt(n, [
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
  const r = te(), o = te(), i = te();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), g = w(t, "sourceY", 12), p = w(t, "sourcePosition", 12), x = w(t, "targetX", 12), k = w(t, "targetY", 12), E = w(t, "targetPosition", 12);
  return le(
    () => (h(r), h(o), h(i), U(d()), U(g()), U(x()), U(k()), U(p()), U(E())),
    () => {
      ((m) => (G(r, m[0]), G(o, m[1]), G(i, m[2])))(mi({
        sourceX: d(),
        sourceY: g(),
        targetX: x(),
        targetY: k(),
        sourcePosition: p(),
        targetPosition: E()
      }));
    }
  ), gt(), He(), To(e, {
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
      return p();
    },
    set sourcePosition(m) {
      p(m), y();
    },
    get targetX() {
      return x();
    },
    set targetX(m) {
      x(m), y();
    },
    get targetY() {
      return k();
    },
    set targetY(m) {
      k(m), y();
    },
    get targetPosition() {
      return E();
    },
    set targetPosition(m) {
      E(m), y();
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
function Cc(e, t) {
  const n = rt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  rt(n, [
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
  const r = te(), o = te(), i = te();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), g = w(t, "sourceY", 12), p = w(t, "targetX", 12), x = w(t, "targetY", 12);
  return le(
    () => (h(r), h(o), h(i), U(d()), U(g()), U(p()), U(x())),
    () => {
      ((k) => (G(r, k[0]), G(o, k[1]), G(i, k[2])))(Ns({
        sourceX: d(),
        sourceY: g(),
        targetX: p(),
        targetY: x()
      }));
    }
  ), gt(), He(), To(e, {
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
    set label(k) {
      s(k), y();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(k) {
      a(k), y();
    },
    get style() {
      return l();
    },
    set style(k) {
      l(k), y();
    },
    get markerStart() {
      return u();
    },
    set markerStart(k) {
      u(k), y();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(k) {
      c(k), y();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(k) {
      f(k), y();
    },
    get sourceX() {
      return d();
    },
    set sourceX(k) {
      d(k), y();
    },
    get sourceY() {
      return g();
    },
    set sourceY(k) {
      g(k), y();
    },
    get targetX() {
      return p();
    },
    set targetX(k) {
      p(k), y();
    },
    get targetY() {
      return x();
    },
    set targetY(k) {
      x(k), y();
    }
  });
}
re(
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
  const n = rt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  rt(n, [
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
  const r = te(), o = te(), i = te();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), g = w(t, "sourceY", 12), p = w(t, "sourcePosition", 12), x = w(t, "targetX", 12), k = w(t, "targetY", 12), E = w(t, "targetPosition", 12);
  return le(
    () => (h(r), h(o), h(i), U(d()), U(g()), U(x()), U(k()), U(p()), U(E())),
    () => {
      ((m) => (G(r, m[0]), G(o, m[1]), G(i, m[2])))(mi({
        sourceX: d(),
        sourceY: g(),
        targetX: x(),
        targetY: k(),
        sourcePosition: p(),
        targetPosition: E(),
        borderRadius: 0
      }));
    }
  ), gt(), He(), To(e, {
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
      return p();
    },
    set sourcePosition(m) {
      p(m), y();
    },
    get targetX() {
      return x();
    },
    set targetX(m) {
      x(m), y();
    },
    get targetY() {
      return k();
    },
    set targetY(m) {
      k(m), y();
    },
    get targetPosition() {
      return E();
    },
    set targetPosition(m) {
      E(m), y();
    }
  });
}
re(
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
function lp(e, t) {
  const n = e.set, r = t.set, o = q(e), i = q(t);
  let a = o.length === 0 && i.length > 0 ? i : o;
  e.set(a);
  const l = (u) => {
    const c = n(u);
    return a = c, r(a), c;
  };
  e.set = t.set = l, e.update = t.update = (u) => l(u(a));
}
function up(e, t) {
  const n = e.set, r = t.set;
  let o = q(t);
  e.set(o);
  const i = (s) => {
    n(s), r(s), o = s;
  };
  e.set = t.set = i, e.update = t.update = (s) => i(s(o));
}
const cp = (e, t, n) => {
  if (!n)
    return;
  const r = q(e), o = t.set, i = n.set;
  let s = n ? q(n) : { x: 0, y: 0, zoom: 1 };
  t.set(s), t.set = (a) => (o(a), i(a), s = a, a), n.set = (a) => (r == null || r.syncViewport(a), o(a), i(a), s = a, a), t.update = (a) => {
    t.set(a(s));
  }, n.update = (a) => {
    n.set(a(s));
  };
}, dp = (e, t, n, r = [0, 0], o = gi) => {
  const { subscribe: i, set: s, update: a } = ye([]);
  let l = e, u = {}, c = !0;
  const f = (x) => (sc(x, t, n, {
    elevateNodesOnSelect: c,
    nodeOrigin: r,
    nodeExtent: o,
    defaults: u,
    checkEquality: !1
  }), l = x, s(l), l), d = (x) => f(x(l)), g = (x) => {
    u = x;
  }, p = (x) => {
    c = x.elevateNodesOnSelect ?? c;
  };
  return f(l), {
    subscribe: i,
    set: f,
    update: d,
    setDefaultOptions: g,
    setOptions: p
  };
}, fp = (e, t, n, r) => {
  const { subscribe: o, set: i, update: s } = ye([]);
  let a = e, l = {};
  const u = (d) => {
    const g = l ? d.map((p) => ({ ...l, ...p })) : d;
    lc(t, n, g), a = g, i(a);
  }, c = (d) => u(d(a)), f = (d) => {
    l = d;
  };
  return u(a), {
    subscribe: o,
    set: u,
    update: c,
    setDefaultOptions: f
  };
}, Ec = {
  input: pc,
  output: mc,
  default: yi,
  group: yc
}, $c = {
  straight: Cc,
  smoothstep: bc,
  default: wi,
  step: kc
}, gp = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) => {
  const a = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), f = i ?? [0, 0], d = s ?? gi;
  sc(e, a, l, {
    nodeExtent: d,
    nodeOrigin: f,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), lc(u, c, t);
  let g = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const p = Po(a, {
      filter: (x) => !!((x.width || x.initialWidth) && (x.height || x.initialHeight))
    });
    g = sa(p, n, r, 0.5, 2, 0.1);
  }
  return {
    flowId: ye(null),
    nodes: dp(e, a, l, f, d),
    nodeLookup: Zt(a),
    parentLookup: Zt(l),
    edgeLookup: Zt(c),
    visibleNodes: Zt([]),
    edges: fp(t, u, c),
    visibleEdges: Zt([]),
    connectionLookup: Zt(u),
    height: ye(500),
    width: ye(500),
    minZoom: ye(0.5),
    maxZoom: ye(2),
    nodeOrigin: ye(f),
    nodeDragThreshold: ye(1),
    nodeExtent: ye(d),
    translateExtent: ye(gi),
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
    selectionMode: ye(hi.Partial),
    nodeTypes: ye(Ec),
    edgeTypes: ye($c),
    viewport: ye(g),
    connectionMode: ye(cr.Strict),
    domNode: ye(null),
    connection: Zt($s),
    connectionLineType: ye(Cr.Bezier),
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
    onerror: ye(f0),
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
function hp(e) {
  const t = Fn([
    e.edges,
    e.nodes,
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.viewport,
    e.width,
    e.height
  ], ([n, , r, o, i, s, a]) => o && s && a ? n.filter((u) => {
    const c = r.get(u.source), f = r.get(u.target);
    return c && f && w0({
      sourceNode: c,
      targetNode: f,
      width: s,
      height: a,
      transform: [i.x, i.y, i.zoom]
    });
  }) : n);
  return Fn([t, e.nodes, e.nodeLookup, e.connectionMode, e.onerror], ([n, , r, o, i]) => n.reduce((a, l) => {
    const u = r.get(l.source), c = r.get(l.target);
    if (!u || !c)
      return a;
    const f = $0({
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
      zIndex: y0({
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
function vp(e) {
  return Fn([
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.width,
    e.height,
    e.viewport,
    e.nodes
  ], ([t, n, r, o, i]) => {
    const s = [i.x, i.y, i.zoom];
    return n ? Uu(t, { x: 0, y: 0, width: r, height: o }, s, !0) : Array.from(t.values());
  });
}
const Xi = Symbol();
function Sc({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) {
  const a = gp({
    nodes: e,
    edges: t,
    width: n,
    height: r,
    fitView: o,
    nodeOrigin: i,
    nodeExtent: s
  });
  function l(C) {
    a.nodeTypes.set({
      ...Ec,
      ...C
    });
  }
  function u(C) {
    a.edgeTypes.set({
      ...$c,
      ...C
    });
  }
  function c(C) {
    const P = q(a.edges);
    a.edges.set(b0(C, P));
  }
  const f = (C, P = !1) => {
    var I;
    const M = q(a.nodeLookup);
    for (const [B, F] of C) {
      const K = (I = M.get(B)) == null ? void 0 : I.internals.userNode;
      K && (K.position = F.position, K.dragging = P);
    }
    a.nodes.update((B) => B);
  };
  function d(C) {
    var F, K, oe;
    const P = q(a.nodeLookup), M = q(a.parentLookup), { changes: I, updatedInternals: B } = A0(C, P, q(a.parentLookup), q(a.domNode), q(a.nodeOrigin));
    if (B) {
      if (T0(P, M, { nodeOrigin: i, nodeExtent: s }), !q(a.fitViewOnInitDone) && q(a.fitViewOnInit)) {
        const J = q(a.fitViewOptions), W = p({
          ...J,
          nodes: J == null ? void 0 : J.nodes
        });
        a.fitViewOnInitDone.set(W);
      }
      for (const J of I) {
        const W = (F = P.get(J.id)) == null ? void 0 : F.internals.userNode;
        if (W)
          switch (J.type) {
            case "dimensions": {
              const de = { ...W.measured, ...J.dimensions };
              J.setAttributes && (W.width = ((K = J.dimensions) == null ? void 0 : K.width) ?? W.width, W.height = ((oe = J.dimensions) == null ? void 0 : oe.height) ?? W.height), W.measured = de;
              break;
            }
            case "position":
              W.position = J.position ?? W.position;
              break;
          }
      }
      a.nodes.update((J) => J), q(a.nodesInitialized) || a.nodesInitialized.set(!0);
    }
  }
  function g(C) {
    const P = q(a.panZoom), M = q(a.domNode);
    if (!P || !M)
      return Promise.resolve(!1);
    const { width: I, height: B } = aa(M), F = sl(q(a.nodeLookup), C);
    return al({
      nodes: F,
      width: I,
      height: B,
      minZoom: q(a.minZoom),
      maxZoom: q(a.maxZoom),
      panZoom: P
    }, C);
  }
  function p(C) {
    const P = q(a.panZoom);
    if (!P)
      return !1;
    const M = sl(q(a.nodeLookup), C);
    return al({
      nodes: M,
      width: q(a.width),
      height: q(a.height),
      minZoom: q(a.minZoom),
      maxZoom: q(a.maxZoom),
      panZoom: P
    }, C), M.size > 0;
  }
  function x(C, P) {
    const M = q(a.panZoom);
    return M ? M.scaleBy(C, P) : Promise.resolve(!1);
  }
  function k(C) {
    return x(1.2, C);
  }
  function E(C) {
    return x(1 / 1.2, C);
  }
  function m(C) {
    const P = q(a.panZoom);
    P && (P.setScaleExtent([C, q(a.maxZoom)]), a.minZoom.set(C));
  }
  function _(C) {
    const P = q(a.panZoom);
    P && (P.setScaleExtent([q(a.minZoom), C]), a.maxZoom.set(C));
  }
  function v(C) {
    const P = q(a.panZoom);
    P && (P.setTranslateExtent(C), a.translateExtent.set(C));
  }
  function b(C) {
    let P = !1;
    return C.forEach((M) => {
      M.selected && (M.selected = !1, P = !0);
    }), P;
  }
  function N(C) {
    var P;
    (P = q(a.panZoom)) == null || P.setClickDistance(C);
  }
  function $(C) {
    b((C == null ? void 0 : C.nodes) || q(a.nodes)) && a.nodes.set(q(a.nodes)), b((C == null ? void 0 : C.edges) || q(a.edges)) && a.edges.set(q(a.edges));
  }
  a.deleteKeyPressed.subscribe(async (C) => {
    var P;
    if (C) {
      const M = q(a.nodes), I = q(a.edges), B = M.filter((J) => J.selected), F = I.filter((J) => J.selected), { nodes: K, edges: oe } = await ju({
        nodesToRemove: B,
        edgesToRemove: F,
        nodes: M,
        edges: I,
        onBeforeDelete: q(a.onbeforedelete)
      });
      (K.length || oe.length) && (a.nodes.update((J) => J.filter((W) => !K.some((de) => de.id === W.id))), a.edges.update((J) => J.filter((W) => !oe.some((de) => de.id === W.id))), (P = q(a.ondelete)) == null || P({
        nodes: K,
        edges: oe
      }));
    }
  });
  function T(C) {
    const P = q(a.multiselectionKeyPressed);
    a.nodes.update((M) => M.map((I) => {
      const B = C.includes(I.id), F = P && I.selected || B;
      return I.selected = F, I;
    })), P || a.edges.update((M) => M.map((I) => (I.selected = !1, I)));
  }
  function A(C) {
    const P = q(a.multiselectionKeyPressed);
    a.edges.update((M) => M.map((I) => {
      const B = C.includes(I.id), F = P && I.selected || B;
      return I.selected = F, I;
    })), P || a.nodes.update((M) => M.map((I) => (I.selected = !1, I)));
  }
  function D(C) {
    var M;
    const P = (M = q(a.nodes)) == null ? void 0 : M.find((I) => I.id === C);
    if (!P) {
      console.warn("012", Ar.error012(C));
      return;
    }
    a.selectionRect.set(null), a.selectionRectMode.set(null), P.selected ? P.selected && q(a.multiselectionKeyPressed) && $({ nodes: [P], edges: [] }) : T([C]);
  }
  function O(C) {
    const P = q(a.viewport);
    return V0({
      delta: C,
      panZoom: q(a.panZoom),
      transform: [P.x, P.y, P.zoom],
      translateExtent: q(a.translateExtent),
      width: q(a.width),
      height: q(a.height)
    });
  }
  const V = ye($s), z = (C) => {
    V.set({ ...C });
  };
  function S() {
    V.set($s);
  }
  function H() {
    a.fitViewOnInitDone.set(!1), a.selectionRect.set(null), a.selectionRectMode.set(null), a.snapGrid.set(null), a.isValidConnection.set(() => !0), $(), S();
  }
  return {
    // state
    ...a,
    // derived state
    visibleEdges: hp(a),
    visibleNodes: vp(a),
    connection: Fn([V, a.viewport], ([C, P]) => C.inProgress ? {
      ...C,
      to: No(C.to, [P.x, P.y, P.zoom])
    } : { ...C }),
    markers: Fn([a.edges, a.defaultMarkerColor, a.flowId], ([C, P, M]) => S0(C, { defaultColor: P, id: M })),
    initialized: (() => {
      let C = !1;
      const P = q(a.nodes).length, M = q(a.edges).length;
      return Fn([a.nodesInitialized, a.edgesInitialized, a.viewportInitialized], ([I, B, F]) => C || (P === 0 ? C = F : M === 0 ? C = F && I : C = F && I && B, C));
    })(),
    // actions
    syncNodeStores: (C) => lp(a.nodes, C),
    syncEdgeStores: (C) => up(a.edges, C),
    syncViewport: (C) => cp(a.panZoom, a.viewport, C),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: f,
    updateNodeInternals: d,
    zoomIn: k,
    zoomOut: E,
    fitView: (C) => g(C),
    setMinZoom: m,
    setMaxZoom: _,
    setTranslateExtent: v,
    setPaneClickDistance: N,
    unselectNodesAndEdges: $,
    addSelectedNodes: T,
    addSelectedEdges: A,
    handleNodeSelection: D,
    panBy: O,
    updateConnection: z,
    cancelConnection: S,
    reset: H
  };
}
function Ke() {
  const e = ar(Xi);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function pp({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) {
  const a = Sc({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s });
  return Mr(Xi, {
    getStore: () => a
  }), a;
}
function ss(e, t) {
  const { panZoom: n, minZoom: r, maxZoom: o, initialViewport: i, viewport: s, dragging: a, translateExtent: l, paneClickDistance: u } = t, c = Q0({
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
var mp = /* @__PURE__ */ ne('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const yp = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function Pc(e, t) {
  ue(t, !1), je(e, yp);
  const [n, r] = tt(), o = () => j(M, "$panActivationKeyPressed", n), i = () => j(z, "$minZoom", n), s = () => j(S, "$maxZoom", n), a = () => j(I, "$zoomActivationKeyPressed", n), l = () => j(V, "$selectionRect", n), u = () => j(C, "$translateExtent", n), c = () => j(P, "$lib", n), f = te(), d = te(), g = te();
  let p = w(t, "initialViewport", 12, void 0), x = w(t, "onMoveStart", 12, void 0), k = w(t, "onMove", 12, void 0), E = w(t, "onMoveEnd", 12, void 0), m = w(t, "panOnScrollMode", 12), _ = w(t, "preventScrolling", 12), v = w(t, "zoomOnScroll", 12), b = w(t, "zoomOnDoubleClick", 12), N = w(t, "zoomOnPinch", 12), $ = w(t, "panOnDrag", 12), T = w(t, "panOnScroll", 12), A = w(t, "paneClickDistance", 12);
  const {
    viewport: D,
    panZoom: O,
    selectionRect: V,
    minZoom: z,
    maxZoom: S,
    dragging: H,
    translateExtent: C,
    lib: P,
    panActivationKeyPressed: M,
    zoomActivationKeyPressed: I,
    viewportInitialized: B
  } = Ke(), F = (W) => D.set({
    x: W[0],
    y: W[1],
    zoom: W[2]
  });
  xn(() => {
    si(B, !0);
  }), le(() => U(p()), () => {
    G(f, p() || { x: 0, y: 0, zoom: 1 });
  }), le(
    () => (o(), U($())),
    () => {
      G(d, o() || $());
    }
  ), le(
    () => (o(), U(T())),
    () => {
      G(g, o() || T());
    }
  ), gt(), He();
  var K = mp(), oe = X(K);
  vt(oe, t, "default", {}), Z(K), ht(K, (W, de) => ss == null ? void 0 : ss(W, de), () => ({
    viewport: D,
    minZoom: i(),
    maxZoom: s(),
    initialViewport: h(f),
    dragging: H,
    panZoom: O,
    onPanZoomStart: x(),
    onPanZoom: k(),
    onPanZoomEnd: E(),
    zoomOnScroll: v(),
    zoomOnDoubleClick: b(),
    zoomOnPinch: N(),
    panOnScroll: h(g),
    panOnDrag: h(d),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: m() || Kn.Free,
    zoomActivationKeyPressed: a(),
    preventScrolling: typeof _() == "boolean" ? _() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: A(),
    onTransformChange: F
  })), L(e, K);
  var J = ce({
    get initialViewport() {
      return p();
    },
    set initialViewport(W) {
      p(W), y();
    },
    get onMoveStart() {
      return x();
    },
    set onMoveStart(W) {
      x(W), y();
    },
    get onMove() {
      return k();
    },
    set onMove(W) {
      k(W), y();
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
      return _();
    },
    set preventScrolling(W) {
      _(W), y();
    },
    get zoomOnScroll() {
      return v();
    },
    set zoomOnScroll(W) {
      v(W), y();
    },
    get zoomOnDoubleClick() {
      return b();
    },
    set zoomOnDoubleClick(W) {
      b(W), y();
    },
    get zoomOnPinch() {
      return N();
    },
    set zoomOnPinch(W) {
      N(W), y();
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
      return A();
    },
    set paneClickDistance(W) {
      A(W), y();
    }
  });
  return r(), J;
}
re(
  Pc,
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
function xl(e, t) {
  return (n) => {
    n.target === t && (e == null || e(n));
  };
}
function bl(e) {
  return (t) => {
    const n = e.includes(t.id);
    return t.selected !== n && (t.selected = n), t;
  };
}
var wp = /* @__PURE__ */ ne("<div><!></div>");
const _p = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function Nc(e, t) {
  ue(t, !1), je(e, _p);
  const [n, r] = tt(), o = () => j(S, "$panActivationKeyPressed", n), i = () => j(V, "$selectionKeyPressed", n), s = () => j(D, "$selectionRect", n), a = () => j(A, "$elementsSelectable", n), l = () => j(O, "$selectionRectMode", n), u = () => j(N, "$edges", n), c = () => j(b, "$nodeLookup", n), f = () => j($, "$viewport", n), d = () => j(z, "$selectionMode", n), g = () => j(T, "$dragging", n), p = te(), x = te(), k = te();
  let E = w(t, "panOnDrag", 12, void 0), m = w(t, "selectionOnDrag", 12, void 0);
  const _ = Vi(), {
    nodes: v,
    nodeLookup: b,
    edges: N,
    viewport: $,
    dragging: T,
    elementsSelectable: A,
    selectionRect: D,
    selectionRectMode: O,
    selectionKeyPressed: V,
    selectionMode: z,
    panActivationKeyPressed: S,
    unselectNodesAndEdges: H
  } = Ke();
  let C = te(), P = null, M = [], I = !1;
  function B(ie) {
    if (I) {
      I = !1;
      return;
    }
    _("paneclick", { event: ie }), H(), O.set(null);
  }
  function F(ie) {
    var Ae, Ze;
    if (P = h(C).getBoundingClientRect(), !A || !h(x) || ie.button !== 0 || ie.target !== h(C) || !P)
      return;
    (Ze = (Ae = ie.target) == null ? void 0 : Ae.setPointerCapture) == null || Ze.call(Ae, ie.pointerId);
    const { x: ge, y: Ye } = Mn(ie, P);
    H(), D.set({
      width: 0,
      height: 0,
      startX: ge,
      startY: Ye,
      x: ge,
      y: Ye
    });
  }
  function K(ie) {
    if (!h(x) || !P || !s())
      return;
    I = !0;
    const ge = Mn(ie, P), Ye = s().startX ?? 0, Ae = s().startY ?? 0, Ze = {
      ...s(),
      x: ge.x < Ye ? ge.x : Ye,
      y: ge.y < Ae ? ge.y : Ae,
      width: Math.abs(ge.x - Ye),
      height: Math.abs(ge.y - Ae)
    }, ee = M.map((Ne) => Ne.id), he = Ss(M, u()).map((Ne) => Ne.id);
    M = Uu(
      c(),
      Ze,
      [
        f().x,
        f().y,
        f().zoom
      ],
      d() === hi.Partial,
      !0
    );
    const se = Ss(M, u()).map((Ne) => Ne.id), ke = M.map((Ne) => Ne.id);
    (ee.length !== ke.length || ke.some((Ne) => !ee.includes(Ne))) && v.update((Ne) => Ne.map(bl(ke))), (he.length !== se.length || se.some((Ne) => !he.includes(Ne))) && N.update((Ne) => Ne.map(bl(se))), O.set("user"), D.set(Ze);
  }
  function oe(ie) {
    var ge, Ye;
    ie.button === 0 && ((Ye = (ge = ie.target) == null ? void 0 : ge.releasePointerCapture) == null || Ye.call(ge, ie.pointerId), !h(x) && l() === "user" && ie.target === h(C) && (B == null || B(ie)), D.set(null), M.length > 0 && si(O, "nodes"), i() && (I = !1));
  }
  const J = (ie) => {
    var ge;
    if (Array.isArray(h(p)) && ((ge = h(p)) != null && ge.includes(2))) {
      ie.preventDefault();
      return;
    }
    _("panecontextmenu", { event: ie });
  };
  le(
    () => (o(), U(E())),
    () => {
      G(p, o() || E());
    }
  ), le(
    () => (i(), s(), U(m()), h(p)),
    () => {
      G(x, i() || s() || m() && h(p) !== !0);
    }
  ), le(
    () => (a(), h(x), l()),
    () => {
      G(k, a() && (h(x) || l() === "user"));
    }
  ), gt(), He();
  var W = wp(), de = /* @__PURE__ */ Me(() => h(k) ? void 0 : xl(B, h(C))), we = /* @__PURE__ */ Me(() => xl(J, h(C)));
  let Ce;
  var fe = X(W);
  vt(fe, t, "default", {}), Z(W), An(W, (ie) => G(C, ie), () => h(C)), $e(
    (ie) => Ce = Ct(W, 1, "svelte-flow__pane svelte-1esy7hx", null, Ce, {
      draggable: ie,
      dragging: g(),
      selection: h(x)
    }),
    [
      () => E() === !0 || Array.isArray(E()) && E().includes(0)
    ],
    pe
  ), Qe("click", W, function(...ie) {
    var ge;
    (ge = h(de)) == null || ge.apply(this, ie);
  }), Qe("pointerdown", W, function(...ie) {
    var ge;
    (ge = h(k) ? F : void 0) == null || ge.apply(this, ie);
  }), Qe("pointermove", W, function(...ie) {
    var ge;
    (ge = h(k) ? K : void 0) == null || ge.apply(this, ie);
  }), Qe("pointerup", W, function(...ie) {
    var ge;
    (ge = h(k) ? oe : void 0) == null || ge.apply(this, ie);
  }), Qe("contextmenu", W, function(...ie) {
    var ge;
    (ge = h(we)) == null || ge.apply(this, ie);
  }), L(e, W);
  var ze = ce({
    get panOnDrag() {
      return E();
    },
    set panOnDrag(ie) {
      E(ie), y();
    },
    get selectionOnDrag() {
      return m();
    },
    set selectionOnDrag(ie) {
      m(ie), y();
    }
  });
  return r(), ze;
}
re(Nc, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var xp = /* @__PURE__ */ ne('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const bp = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function Tc(e, t) {
  ue(t, !1), je(e, bp);
  const [n, r] = tt(), o = () => j(i, "$viewport", n), { viewport: i } = Ke();
  He();
  var s = xp(), a = X(s);
  vt(a, t, "default", {}), Z(s), $e(() => ae(s, "style", `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), L(e, s), ce(), r();
}
re(Tc, {}, ["default"], [], !0);
function Er(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = I0({
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
function Cp({ width: e, height: t, initialWidth: n, initialHeight: r, measuredWidth: o, measuredHeight: i }) {
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
var kp = /* @__PURE__ */ ne("<div><!></div>");
function Mc(e, t) {
  ue(t, !1);
  const [n, r] = tt(), o = () => j(we, "$nodeTypes", n), i = () => j(ge, "$elementsSelectable", n), s = () => j(Ye, "$nodesDraggable", n), a = () => j(he, "$connectableStore", n), l = te(void 0, !0), u = te(void 0, !0), c = te(void 0, !0), f = te(void 0, !0);
  let d = w(t, "node", 13), g = w(t, "id", 13), p = w(t, "data", 29, () => ({})), x = w(t, "selected", 13, !1), k = w(t, "draggable", 13, void 0), E = w(t, "selectable", 13, void 0), m = w(t, "connectable", 13, !0), _ = w(t, "deletable", 13, !0), v = w(t, "hidden", 13, !1), b = w(t, "dragging", 13, !1), N = w(t, "resizeObserver", 13, null), $ = w(t, "style", 13, void 0), T = w(t, "type", 13, "default"), A = w(t, "isParent", 13, !1), D = w(t, "positionX", 13), O = w(t, "positionY", 13), V = w(t, "sourcePosition", 13, void 0), z = w(t, "targetPosition", 13, void 0), S = w(t, "zIndex", 13), H = w(t, "measuredWidth", 13, void 0), C = w(t, "measuredHeight", 13, void 0), P = w(t, "initialWidth", 13, void 0), M = w(t, "initialHeight", 13, void 0), I = w(t, "width", 13, void 0), B = w(t, "height", 13, void 0), F = w(t, "dragHandle", 13, void 0), K = w(t, "initialized", 13, !1), oe = w(t, "parentId", 13, void 0), J = w(t, "nodeClickDistance", 13, void 0), W = w(t, "class", 13, "");
  const de = Ke(), {
    nodeTypes: we,
    nodeDragThreshold: Ce,
    selectNodesOnDrag: fe,
    handleNodeSelection: ze,
    updateNodeInternals: ie,
    elementsSelectable: ge,
    nodesDraggable: Ye
  } = de;
  let Ae = te(void 0, !0), Ze = te(null, !0);
  const ee = Vi(), he = ye(m());
  let se = te(void 0, !0), ke = te(void 0, !0), Ne = te(void 0, !0);
  Mr("svelteflow__node_id", g()), Mr("svelteflow__node_connectable", he), Us(() => {
    var Q;
    h(Ze) && ((Q = N()) == null || Q.unobserve(h(Ze)));
  });
  function qe(Q) {
    E() && (!q(fe) || !k() || q(Ce) > 0) && ze(g()), ee("nodeclick", { node: d().internals.userNode, event: Q });
  }
  le(() => U(T()), () => {
    G(l, T() || "default");
  }), le(() => (o(), h(l)), () => {
    G(u, !!o()[h(l)]);
  }), le(
    () => (o(), h(l), yi),
    () => {
      G(c, o()[h(l)] || yi);
    }
  ), le(
    () => (h(u), U(T())),
    () => {
      h(u) || console.warn("003", Ar.error003(T()));
    }
  ), le(
    () => (U(I()), U(B()), U(P()), U(M()), U(H()), U(C())),
    () => {
      G(f, Cp({
        width: I(),
        height: B(),
        initialWidth: P(),
        initialHeight: M(),
        measuredWidth: H(),
        measuredHeight: C()
      }));
    }
  ), le(() => U(m()), () => {
    he.set(!!m());
  }), le(
    () => (h(se), h(l), h(ke), U(V()), h(Ne), U(z()), U(g()), h(Ae)),
    () => {
      (h(se) && h(l) !== h(se) || h(ke) && V() !== h(ke) || h(Ne) && z() !== h(Ne)) && requestAnimationFrame(() => ie(/* @__PURE__ */ new Map([
        [
          g(),
          {
            id: g(),
            nodeElement: h(Ae),
            force: !0
          }
        ]
      ]))), G(se, h(l)), G(ke, V()), G(Ne, z());
    }
  ), le(
    () => (U(N()), h(Ae), h(Ze), U(K())),
    () => {
      N() && (h(Ae) !== h(Ze) || !K()) && (h(Ze) && N().unobserve(h(Ze)), h(Ae) && N().observe(h(Ae)), G(Ze, h(Ae)));
    }
  ), gt(), He(!0);
  var Re = et(), Oe = _e(Re);
  {
    var ut = (Q) => {
      var Xe = kp();
      let ve;
      var ln = X(Xe);
      const Gt = /* @__PURE__ */ pe(() => x() ?? !1), un = /* @__PURE__ */ pe(() => E() ?? i() ?? !0), Pe = /* @__PURE__ */ pe(() => _() ?? !0), ot = /* @__PURE__ */ pe(() => k() ?? s() ?? !0);
      vu(ln, () => h(c), (me, it) => {
        it(me, {
          get data() {
            return p();
          },
          get id() {
            return g();
          },
          get selected() {
            return h(Gt);
          },
          get selectable() {
            return h(un);
          },
          get deletable() {
            return h(Pe);
          },
          get sourcePosition() {
            return V();
          },
          get targetPosition() {
            return z();
          },
          get zIndex() {
            return S();
          },
          get dragging() {
            return b();
          },
          get draggable() {
            return h(ot);
          },
          get dragHandle() {
            return F();
          },
          get parentId() {
            return oe();
          },
          get type() {
            return h(l);
          },
          get isConnectable() {
            return a();
          },
          get positionAbsoluteX() {
            return D();
          },
          get positionAbsoluteY() {
            return O();
          },
          get width() {
            return I();
          },
          get height() {
            return B();
          }
        });
      }), Z(Xe), ht(Xe, (me, it) => Er == null ? void 0 : Er(me, it), () => ({
        nodeId: g(),
        isSelectable: E(),
        disabled: !1,
        handleSelector: F(),
        noDragClass: "nodrag",
        nodeClickDistance: J(),
        onNodeMouseDown: ze,
        onDrag: (me, it, lt, Yt) => {
          ee("nodedrag", { event: me, targetNode: lt, nodes: Yt });
        },
        onDragStart: (me, it, lt, Yt) => {
          ee("nodedragstart", { event: me, targetNode: lt, nodes: Yt });
        },
        onDragStop: (me, it, lt, Yt) => {
          ee("nodedragstop", { event: me, targetNode: lt, nodes: Yt });
        },
        store: de
      })), An(Xe, (me) => G(Ae, me), () => h(Ae)), Ot(() => Qe("click", Xe, qe)), Ot(() => Qe("mouseenter", Xe, (me) => ee("nodemouseenter", { node: d(), event: me }))), Ot(() => Qe("mouseleave", Xe, (me) => ee("nodemouseleave", { node: d(), event: me }))), Ot(() => Qe("mousemove", Xe, (me) => ee("nodemousemove", { node: d(), event: me }))), Ot(() => Qe("contextmenu", Xe, (me) => ee("nodecontextmenu", { node: d(), event: me }))), $e(
        (me) => {
          ae(Xe, "data-id", g()), ve = Ct(Xe, 1, _n(me), null, ve, {
            dragging: b(),
            selected: x(),
            draggable: k(),
            connectable: m(),
            selectable: E(),
            nopan: k(),
            parent: A()
          }), ae(Xe, "style", `${$() ?? ""};${h(f).width ?? ""}${h(f).height ?? ""}`), at(Xe, "z-index", S()), at(Xe, "transform", `translate(${D() ?? ""}px, ${O() ?? ""}px)`), at(Xe, "visibility", K() ? "visible" : "hidden");
        },
        [
          () => $t([
            "svelte-flow__node",
            `svelte-flow__node-${h(l)}`,
            W()
          ])
        ],
        pe
      ), L(Q, Xe);
    };
    be(Oe, (Q) => {
      v() || Q(ut);
    });
  }
  L(e, Re);
  var nt = ce({
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
      return p();
    },
    set data(Q) {
      p(Q), y();
    },
    get selected() {
      return x();
    },
    set selected(Q) {
      x(Q), y();
    },
    get draggable() {
      return k();
    },
    set draggable(Q) {
      k(Q), y();
    },
    get selectable() {
      return E();
    },
    set selectable(Q) {
      E(Q), y();
    },
    get connectable() {
      return m();
    },
    set connectable(Q) {
      m(Q), y();
    },
    get deletable() {
      return _();
    },
    set deletable(Q) {
      _(Q), y();
    },
    get hidden() {
      return v();
    },
    set hidden(Q) {
      v(Q), y();
    },
    get dragging() {
      return b();
    },
    set dragging(Q) {
      b(Q), y();
    },
    get resizeObserver() {
      return N();
    },
    set resizeObserver(Q) {
      N(Q), y();
    },
    get style() {
      return $();
    },
    set style(Q) {
      $(Q), y();
    },
    get type() {
      return T();
    },
    set type(Q) {
      T(Q), y();
    },
    get isParent() {
      return A();
    },
    set isParent(Q) {
      A(Q), y();
    },
    get positionX() {
      return D();
    },
    set positionX(Q) {
      D(Q), y();
    },
    get positionY() {
      return O();
    },
    set positionY(Q) {
      O(Q), y();
    },
    get sourcePosition() {
      return V();
    },
    set sourcePosition(Q) {
      V(Q), y();
    },
    get targetPosition() {
      return z();
    },
    set targetPosition(Q) {
      z(Q), y();
    },
    get zIndex() {
      return S();
    },
    set zIndex(Q) {
      S(Q), y();
    },
    get measuredWidth() {
      return H();
    },
    set measuredWidth(Q) {
      H(Q), y();
    },
    get measuredHeight() {
      return C();
    },
    set measuredHeight(Q) {
      C(Q), y();
    },
    get initialWidth() {
      return P();
    },
    set initialWidth(Q) {
      P(Q), y();
    },
    get initialHeight() {
      return M();
    },
    set initialHeight(Q) {
      M(Q), y();
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
      return F();
    },
    set dragHandle(Q) {
      F(Q), y();
    },
    get initialized() {
      return K();
    },
    set initialized(Q) {
      K(Q), y();
    },
    get parentId() {
      return oe();
    },
    set parentId(Q) {
      oe(Q), y();
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
  return r(), nt;
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
var Ep = /* @__PURE__ */ ne('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const $p = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function Hc(e, t) {
  ue(t, !1), je(e, $p);
  const [n, r] = tt(), o = () => j(c, "$visibleNodes", n), i = () => j(f, "$nodesDraggable", n), s = () => j(g, "$elementsSelectable", n), a = () => j(d, "$nodesConnectable", n), l = () => j(x, "$parentLookup", n);
  let u = w(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: f,
    nodesConnectable: d,
    elementsSelectable: g,
    updateNodeInternals: p,
    parentLookup: x
  } = Ke(), k = typeof ResizeObserver > "u" ? null : new ResizeObserver((_) => {
    const v = /* @__PURE__ */ new Map();
    _.forEach((b) => {
      const N = b.target.getAttribute("data-id");
      v.set(N, { id: N, nodeElement: b.target, force: !0 });
    }), p(v);
  });
  Us(() => {
    k == null || k.disconnect();
  }), He();
  var E = Ep();
  zt(E, 5, o, (_) => _.id, (_, v) => {
    const b = /* @__PURE__ */ pe(() => !!h(v).selected), N = /* @__PURE__ */ pe(() => !!h(v).hidden), $ = /* @__PURE__ */ pe(() => !!(h(v).draggable || i() && typeof h(v).draggable > "u")), T = /* @__PURE__ */ pe(() => !!(h(v).selectable || s() && typeof h(v).selectable > "u")), A = /* @__PURE__ */ pe(() => !!(h(v).connectable || a() && typeof h(v).connectable > "u")), D = /* @__PURE__ */ pe(() => h(v).deletable ?? !0), O = /* @__PURE__ */ pe(() => l().has(h(v).id)), V = /* @__PURE__ */ pe(() => h(v).type ?? "default"), z = /* @__PURE__ */ pe(() => h(v).internals.z ?? 0), S = /* @__PURE__ */ pe(() => nc(h(v)));
    Mc(_, {
      get node() {
        return h(v);
      },
      get id() {
        return h(v).id;
      },
      get data() {
        return h(v).data;
      },
      get selected() {
        return h(b);
      },
      get hidden() {
        return h(N);
      },
      get draggable() {
        return h($);
      },
      get selectable() {
        return h(T);
      },
      get connectable() {
        return h(A);
      },
      get deletable() {
        return h(D);
      },
      get positionX() {
        return h(v).internals.positionAbsolute.x;
      },
      get positionY() {
        return h(v).internals.positionAbsolute.y;
      },
      get isParent() {
        return h(O);
      },
      get style() {
        return h(v).style;
      },
      get class() {
        return h(v).class;
      },
      get type() {
        return h(V);
      },
      get sourcePosition() {
        return h(v).sourcePosition;
      },
      get targetPosition() {
        return h(v).targetPosition;
      },
      get dragging() {
        return h(v).dragging;
      },
      get zIndex() {
        return h(z);
      },
      get dragHandle() {
        return h(v).dragHandle;
      },
      get initialized() {
        return h(S);
      },
      get width() {
        return h(v).width;
      },
      get height() {
        return h(v).height;
      },
      get initialWidth() {
        return h(v).initialWidth;
      },
      get initialHeight() {
        return h(v).initialHeight;
      },
      get measuredWidth() {
        return h(v).measured.width;
      },
      get measuredHeight() {
        return h(v).measured.height;
      },
      get parentId() {
        return h(v).parentId;
      },
      resizeObserver: k,
      get nodeClickDistance() {
        return u();
      },
      $$events: {
        nodeclick(H) {
          Le.call(this, t, H);
        },
        nodemouseenter(H) {
          Le.call(this, t, H);
        },
        nodemousemove(H) {
          Le.call(this, t, H);
        },
        nodemouseleave(H) {
          Le.call(this, t, H);
        },
        nodedrag(H) {
          Le.call(this, t, H);
        },
        nodedragstart(H) {
          Le.call(this, t, H);
        },
        nodedragstop(H) {
          Le.call(this, t, H);
        },
        nodecontextmenu(H) {
          Le.call(this, t, H);
        }
      }
    });
  }), Z(E), L(e, E);
  var m = ce({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance(_) {
      u(_), y();
    }
  });
  return r(), m;
}
re(Hc, { nodeClickDistance: {} }, [], [], !0);
var Sp = /* @__PURE__ */ xe('<svg><g role="img"><!></g></svg>');
function Dc(e, t) {
  ue(t, !1);
  const [n, r] = tt(), o = () => j(W, "$edgeTypes", n), i = () => j(de, "$flowId", n), s = () => j(we, "$elementsSelectable", n), a = () => j(J, "$edgeLookup", n), l = te(void 0, !0), u = te(void 0, !0), c = te(void 0, !0), f = te(void 0, !0), d = te(void 0, !0);
  let g = w(t, "id", 13), p = w(t, "type", 13, "default"), x = w(t, "source", 13, ""), k = w(t, "target", 13, ""), E = w(t, "data", 29, () => ({})), m = w(t, "style", 13, void 0), _ = w(t, "zIndex", 13, void 0), v = w(t, "animated", 13, !1), b = w(t, "selected", 13, !1), N = w(t, "selectable", 13, void 0), $ = w(t, "deletable", 13, void 0), T = w(t, "hidden", 13, !1), A = w(t, "label", 13, void 0), D = w(t, "labelStyle", 13, void 0), O = w(t, "markerStart", 13, void 0), V = w(t, "markerEnd", 13, void 0), z = w(t, "sourceHandle", 13, void 0), S = w(t, "targetHandle", 13, void 0), H = w(t, "sourceX", 13), C = w(t, "sourceY", 13), P = w(t, "targetX", 13), M = w(t, "targetY", 13), I = w(t, "sourcePosition", 13), B = w(t, "targetPosition", 13), F = w(t, "ariaLabel", 13, void 0), K = w(t, "interactionWidth", 13, void 0), oe = w(t, "class", 13, "");
  Mr("svelteflow__edge_id", g());
  const {
    edgeLookup: J,
    edgeTypes: W,
    flowId: de,
    elementsSelectable: we
  } = Ke(), Ce = Vi(), fe = _c();
  function ze(ee) {
    const he = a().get(g());
    he && (fe(g()), Ce("edgeclick", { event: ee, edge: he }));
  }
  function ie(ee, he) {
    const se = a().get(g());
    se && Ce(he, { event: ee, edge: se });
  }
  le(() => U(p()), () => {
    G(l, p() || "default");
  }), le(
    () => (o(), h(l), wi),
    () => {
      G(u, o()[h(l)] || wi);
    }
  ), le(
    () => (U(O()), i()),
    () => {
      G(c, O() ? `url('#${Ts(O(), i())}')` : void 0);
    }
  ), le(
    () => (U(V()), i()),
    () => {
      G(f, V() ? `url('#${Ts(V(), i())}')` : void 0);
    }
  ), le(
    () => (U(N()), s()),
    () => {
      G(d, N() ?? s());
    }
  ), gt(), He(!0);
  var ge = et(), Ye = _e(ge);
  {
    var Ae = (ee) => {
      var he = Sp(), se = X(he);
      let ke;
      var Ne = X(se);
      const qe = /* @__PURE__ */ pe(() => $() ?? !0);
      vu(Ne, () => h(u), (Re, Oe) => {
        Oe(Re, {
          get id() {
            return g();
          },
          get source() {
            return x();
          },
          get target() {
            return k();
          },
          get sourceX() {
            return H();
          },
          get sourceY() {
            return C();
          },
          get targetX() {
            return P();
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
            return v();
          },
          get selected() {
            return b();
          },
          get label() {
            return A();
          },
          get labelStyle() {
            return D();
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
            return h(qe);
          },
          get type() {
            return h(l);
          },
          get sourceHandleId() {
            return z();
          },
          get targetHandleId() {
            return S();
          },
          get markerStart() {
            return h(c);
          },
          get markerEnd() {
            return h(f);
          }
        });
      }), Z(se), Z(he), $e(
        (Re) => {
          at(he, "z-index", _()), ke = Ct(se, 0, _n(Re), null, ke, {
            animated: v(),
            selected: b(),
            selectable: h(d)
          }), ae(se, "data-id", g()), ae(se, "aria-label", F() === null ? void 0 : F() ? F() : `Edge from ${x()} to ${k()}`);
        },
        [
          () => $t(["svelte-flow__edge", oe()])
        ],
        pe
      ), Qe("click", se, ze), Qe("contextmenu", se, (Re) => {
        ie(Re, "edgecontextmenu");
      }), Qe("mouseenter", se, (Re) => {
        ie(Re, "edgemouseenter");
      }), Qe("mouseleave", se, (Re) => {
        ie(Re, "edgemouseleave");
      }), L(ee, he);
    };
    be(Ye, (ee) => {
      T() || ee(Ae);
    });
  }
  L(e, ge);
  var Ze = ce({
    get id() {
      return g();
    },
    set id(ee) {
      g(ee), y();
    },
    get type() {
      return p();
    },
    set type(ee) {
      p(ee), y();
    },
    get source() {
      return x();
    },
    set source(ee) {
      x(ee), y();
    },
    get target() {
      return k();
    },
    set target(ee) {
      k(ee), y();
    },
    get data() {
      return E();
    },
    set data(ee) {
      E(ee), y();
    },
    get style() {
      return m();
    },
    set style(ee) {
      m(ee), y();
    },
    get zIndex() {
      return _();
    },
    set zIndex(ee) {
      _(ee), y();
    },
    get animated() {
      return v();
    },
    set animated(ee) {
      v(ee), y();
    },
    get selected() {
      return b();
    },
    set selected(ee) {
      b(ee), y();
    },
    get selectable() {
      return N();
    },
    set selectable(ee) {
      N(ee), y();
    },
    get deletable() {
      return $();
    },
    set deletable(ee) {
      $(ee), y();
    },
    get hidden() {
      return T();
    },
    set hidden(ee) {
      T(ee), y();
    },
    get label() {
      return A();
    },
    set label(ee) {
      A(ee), y();
    },
    get labelStyle() {
      return D();
    },
    set labelStyle(ee) {
      D(ee), y();
    },
    get markerStart() {
      return O();
    },
    set markerStart(ee) {
      O(ee), y();
    },
    get markerEnd() {
      return V();
    },
    set markerEnd(ee) {
      V(ee), y();
    },
    get sourceHandle() {
      return z();
    },
    set sourceHandle(ee) {
      z(ee), y();
    },
    get targetHandle() {
      return S();
    },
    set targetHandle(ee) {
      S(ee), y();
    },
    get sourceX() {
      return H();
    },
    set sourceX(ee) {
      H(ee), y();
    },
    get sourceY() {
      return C();
    },
    set sourceY(ee) {
      C(ee), y();
    },
    get targetX() {
      return P();
    },
    set targetX(ee) {
      P(ee), y();
    },
    get targetY() {
      return M();
    },
    set targetY(ee) {
      M(ee), y();
    },
    get sourcePosition() {
      return I();
    },
    set sourcePosition(ee) {
      I(ee), y();
    },
    get targetPosition() {
      return B();
    },
    set targetPosition(ee) {
      B(ee), y();
    },
    get ariaLabel() {
      return F();
    },
    set ariaLabel(ee) {
      F(ee), y();
    },
    get interactionWidth() {
      return K();
    },
    set interactionWidth(ee) {
      K(ee), y();
    },
    get class() {
      return oe();
    },
    set class(ee) {
      oe(ee), y();
    }
  });
  return r(), Ze;
}
re(
  Dc,
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
function Ac(e, t) {
  ue(t, !1);
  let n = w(t, "onMount", 12, void 0), r = w(t, "onDestroy", 12, void 0);
  return xn(() => {
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
re(Ac, { onMount: {}, onDestroy: {} }, [], [], !0);
var Pp = /* @__PURE__ */ xe("<defs></defs>");
function Vc(e, t) {
  ue(t, !1);
  const [n, r] = tt(), o = () => j(i, "$markers", n), { markers: i } = Ke();
  He();
  var s = Pp();
  zt(s, 5, o, (a) => a.id, (a, l) => {
    Oc(a, ct(() => h(l)));
  }), Z(s), L(e, s), ce(), r();
}
re(Vc, {}, [], [], !0);
var Np = /* @__PURE__ */ xe('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), Tp = /* @__PURE__ */ xe('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), Mp = /* @__PURE__ */ xe('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Oc(e, t) {
  ue(t, !1);
  let n = w(t, "id", 12), r = w(t, "type", 12), o = w(t, "width", 12, 12.5), i = w(t, "height", 12, 12.5), s = w(t, "markerUnits", 12, "strokeWidth"), a = w(t, "orient", 12, "auto-start-reverse"), l = w(t, "color", 12, void 0), u = w(t, "strokeWidth", 12, void 0);
  He();
  var c = Mp(), f = X(c);
  {
    var d = (p) => {
      var x = Np();
      $e(() => {
        ae(x, "stroke", l()), ae(x, "stroke-width", u());
      }), L(p, x);
    }, g = (p, x) => {
      {
        var k = (E) => {
          var m = Tp();
          $e(() => {
            ae(m, "stroke", l()), ae(m, "stroke-width", u()), ae(m, "fill", l());
          }), L(E, m);
        };
        be(
          p,
          (E) => {
            r() === po.ArrowClosed && E(k);
          },
          x
        );
      }
    };
    be(f, (p) => {
      r() === po.Arrow ? p(d) : p(g, !1);
    });
  }
  return Z(c), $e(() => {
    ae(c, "id", n()), ae(c, "markerWidth", `${o()}`), ae(c, "markerHeight", `${i()}`), ae(c, "markerUnits", s()), ae(c, "orient", a());
  }), L(e, c), ce({
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
re(
  Oc,
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
var Hp = /* @__PURE__ */ ne('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function Lc(e, t) {
  ue(t, !1);
  const [n, r] = tt(), o = () => j(a, "$visibleEdges", n), i = () => j(c, "$elementsSelectable", n);
  let s = w(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: a,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = Ke();
  xn(() => {
    s() && u(s());
  }), He();
  var f = Hp(), d = X(f), g = X(d);
  Vc(g, {}), Z(d);
  var p = R(d, 2);
  zt(p, 1, o, (m) => m.id, (m, _) => {
    const v = /* @__PURE__ */ pe(() => h(_).selectable ?? i()), b = /* @__PURE__ */ pe(() => h(_).type || "default");
    Dc(m, {
      get id() {
        return h(_).id;
      },
      get source() {
        return h(_).source;
      },
      get target() {
        return h(_).target;
      },
      get data() {
        return h(_).data;
      },
      get style() {
        return h(_).style;
      },
      get animated() {
        return h(_).animated;
      },
      get selected() {
        return h(_).selected;
      },
      get selectable() {
        return h(v);
      },
      get deletable() {
        return h(_).deletable;
      },
      get hidden() {
        return h(_).hidden;
      },
      get label() {
        return h(_).label;
      },
      get labelStyle() {
        return h(_).labelStyle;
      },
      get markerStart() {
        return h(_).markerStart;
      },
      get markerEnd() {
        return h(_).markerEnd;
      },
      get sourceHandle() {
        return h(_).sourceHandle;
      },
      get targetHandle() {
        return h(_).targetHandle;
      },
      get sourceX() {
        return h(_).sourceX;
      },
      get sourceY() {
        return h(_).sourceY;
      },
      get targetX() {
        return h(_).targetX;
      },
      get targetY() {
        return h(_).targetY;
      },
      get sourcePosition() {
        return h(_).sourcePosition;
      },
      get targetPosition() {
        return h(_).targetPosition;
      },
      get ariaLabel() {
        return h(_).ariaLabel;
      },
      get interactionWidth() {
        return h(_).interactionWidth;
      },
      get class() {
        return h(_).class;
      },
      get type() {
        return h(b);
      },
      get zIndex() {
        return h(_).zIndex;
      },
      $$events: {
        edgeclick(N) {
          Le.call(this, t, N);
        },
        edgecontextmenu(N) {
          Le.call(this, t, N);
        },
        edgemouseenter(N) {
          Le.call(this, t, N);
        },
        edgemouseleave(N) {
          Le.call(this, t, N);
        }
      }
    });
  });
  var x = R(p, 2);
  {
    var k = (m) => {
      Ac(m, {
        onMount: () => {
          si(l, !0);
        },
        onDestroy: () => {
          si(l, !1);
        }
      });
    };
    be(x, (m) => {
      o().length > 0 && m(k);
    });
  }
  Z(f), L(e, f);
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
re(Lc, { defaultEdgeOptions: {} }, [], [], !0);
var Dp = /* @__PURE__ */ ne('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const Ap = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function da(e, t) {
  ue(t, !1), je(e, Ap);
  let n = w(t, "x", 12, 0), r = w(t, "y", 12, 0), o = w(t, "width", 12, 0), i = w(t, "height", 12, 0), s = w(t, "isVisible", 12, !0);
  var a = et(), l = _e(a);
  {
    var u = (c) => {
      var f = Dp();
      $e(() => {
        at(f, "width", typeof o() == "string" ? o() : `${o()}px`), at(f, "height", typeof i() == "string" ? i() : `${i()}px`), at(f, "transform", `translate(${n()}px, ${r()}px)`);
      }), L(c, f);
    };
    be(l, (c) => {
      s() && c(u);
    });
  }
  return L(e, a), ce({
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
  da,
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
function Ic(e, t) {
  ue(t, !1);
  const [n, r] = tt(), o = () => j(s, "$selectionRect", n), i = () => j(a, "$selectionRectMode", n), { selectionRect: s, selectionRectMode: a } = Ke();
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
  da(e, {
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
re(Ic, {}, [], [], !0);
var Vp = /* @__PURE__ */ ne('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const Op = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function zc(e, t) {
  ue(t, !1), je(e, Op);
  const [n, r] = tt(), o = () => j(l, "$selectionRectMode", n), i = () => j(c, "$nodeLookup", n), s = () => j(u, "$nodes", n), a = Ke(), { selectionRectMode: l, nodes: u, nodeLookup: c } = a, f = Vi();
  let d = te(null);
  function g(m) {
    const _ = s().filter((v) => v.selected);
    f("selectioncontextmenu", { nodes: _, event: m });
  }
  function p(m) {
    const _ = s().filter((v) => v.selected);
    f("selectionclick", { nodes: _, event: m });
  }
  le(
    () => (o(), i(), s()),
    () => {
      o() === "nodes" && (G(d, Po(i(), { filter: (m) => !!m.selected })), s());
    }
  ), gt(), He();
  var x = et(), k = _e(x);
  {
    var E = (m) => {
      var _ = Vp(), v = X(_);
      da(v, { width: "100%", height: "100%", x: 0, y: 0 }), Z(_), ht(_, (b, N) => Er == null ? void 0 : Er(b, N), () => ({
        disabled: !1,
        store: a,
        onDrag: (b, N, $, T) => {
          f("nodedrag", { event: b, targetNode: null, nodes: T });
        },
        onDragStart: (b, N, $, T) => {
          f("nodedragstart", { event: b, targetNode: null, nodes: T });
        },
        onDragStop: (b, N, $, T) => {
          f("nodedragstop", { event: b, targetNode: null, nodes: T });
        }
      })), Ot(() => Qe("contextmenu", _, g)), Ot(() => Qe("click", _, p)), Ot(() => Qe("keyup", _, () => {
      })), $e(() => ae(_, "style", `width: ${h(d).width ?? ""}px; height: ${h(d).height ?? ""}px; transform: translate(${h(d).x ?? ""}px, ${h(d).y ?? ""}px)`)), L(m, _);
    };
    be(k, (m) => {
      o() === "nodes" && h(d) && Pn(h(d).x) && Pn(h(d).y) && m(E);
    });
  }
  L(e, x), ce(), r();
}
re(zc, {}, [], [], !0);
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
      }, { modifier: f, key: d, callback: g, preventDefault: p, enabled: x } = c;
      if (x) {
        if (f.length && !(Array.isArray(f) ? f : [f]).map(
          (m) => typeof m == "string" ? [m] : m
        ).some(
          (m) => m.every((_) => l[_])
        ))
          continue;
        if (s.key === d) {
          p && s.preventDefault();
          const k = {
            node: e,
            trigger: c,
            originalEvent: s
          };
          e.dispatchEvent(new CustomEvent("shortcut", { detail: k })), g == null || g(k);
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
function Rc(e, t) {
  ue(t, !1);
  let n = w(t, "selectionKey", 12, "Shift"), r = w(t, "multiSelectionKey", 28, () => pi() ? "Meta" : "Control"), o = w(t, "deleteKey", 12, "Backspace"), i = w(t, "panActivationKey", 12, " "), s = w(t, "zoomActivationKey", 28, () => pi() ? "Meta" : "Control");
  const {
    selectionKeyPressed: a,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: f,
    selectionRect: d
  } = Ke();
  function g(m) {
    return m !== null && typeof m == "object";
  }
  function p(m) {
    return g(m) ? m.modifier || [] : [];
  }
  function x(m) {
    return m == null ? "" : g(m) ? m.key : m;
  }
  function k(m, _) {
    return (Array.isArray(m) ? m : [m]).map((b) => {
      const N = x(b);
      return {
        key: N,
        modifier: p(b),
        enabled: N !== null,
        callback: _
      };
    });
  }
  function E() {
    d.set(null), a.set(!1), l.set(!1), u.set(!1), c.set(!1), f.set(!1);
  }
  return He(), Qe("blur", Nt, E), Qe("contextmenu", Nt, E), ht(Nt, (m, _) => We == null ? void 0 : We(m, _), () => ({
    trigger: k(n(), () => a.set(!0)),
    type: "keydown"
  })), ht(Nt, (m, _) => We == null ? void 0 : We(m, _), () => ({
    trigger: k(n(), () => a.set(!1)),
    type: "keyup"
  })), ht(Nt, (m, _) => We == null ? void 0 : We(m, _), () => ({
    trigger: k(r(), () => l.set(!0)),
    type: "keydown"
  })), ht(Nt, (m, _) => We == null ? void 0 : We(m, _), () => ({
    trigger: k(r(), () => l.set(!1)),
    type: "keyup"
  })), ht(Nt, (m, _) => We == null ? void 0 : We(m, _), () => ({
    trigger: k(o(), (m) => {
      !(m.originalEvent.ctrlKey || m.originalEvent.metaKey || m.originalEvent.shiftKey) && !p0(m.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), ht(Nt, (m, _) => We == null ? void 0 : We(m, _), () => ({
    trigger: k(o(), () => u.set(!1)),
    type: "keyup"
  })), ht(Nt, (m, _) => We == null ? void 0 : We(m, _), () => ({
    trigger: k(i(), () => c.set(!0)),
    type: "keydown"
  })), ht(Nt, (m, _) => We == null ? void 0 : We(m, _), () => ({
    trigger: k(i(), () => c.set(!1)),
    type: "keyup"
  })), ht(Nt, (m, _) => We == null ? void 0 : We(m, _), () => ({
    trigger: k(s(), () => f.set(!0)),
    type: "keydown"
  })), ht(Nt, (m, _) => We == null ? void 0 : We(m, _), () => ({
    trigger: k(s(), () => f.set(!1)),
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
re(
  Rc,
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
var Lp = /* @__PURE__ */ xe('<path fill="none" class="svelte-flow__connection-path"></path>'), Ip = /* @__PURE__ */ xe('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function Bc(e, t) {
  ue(t, !1);
  const [n, r] = tt(), o = () => j(g, "$connection", n), i = () => j(p, "$connectionLineType", n), s = () => j(f, "$width", n), a = () => j(d, "$height", n);
  let l = w(t, "containerStyle", 12, ""), u = w(t, "style", 12, ""), c = w(t, "isCustomComponent", 12, !1);
  const {
    width: f,
    height: d,
    connection: g,
    connectionLineType: p
  } = Ke();
  let x = te(null);
  le(
    () => (o(), U(c()), i(), h(x), Ns),
    () => {
      if (o().inProgress && !c()) {
        const { from: v, to: b, fromPosition: N, toPosition: $ } = o(), T = {
          sourceX: v.x,
          sourceY: v.y,
          sourcePosition: N,
          targetX: b.x,
          targetY: b.y,
          targetPosition: $
        };
        switch (i()) {
          case Cr.Bezier:
            ((A) => G(x, A[0]))(oc(T));
            break;
          case Cr.Step:
            ((A) => G(x, A[0]))(mi({ ...T, borderRadius: 0 }));
            break;
          case Cr.SmoothStep:
            ((A) => G(x, A[0]))(mi(T));
            break;
          default:
            ((A) => G(x, A[0]))(Ns(T));
        }
      }
    }
  ), gt(), He();
  var k = et(), E = _e(k);
  {
    var m = (v) => {
      var b = Ip(), N = X(b), $ = X(N);
      vt($, t, "connectionLine", {});
      var T = R($);
      {
        var A = (D) => {
          var O = Lp();
          $e(() => {
            ae(O, "d", h(x)), ae(O, "style", u());
          }), L(D, O);
        };
        be(T, (D) => {
          c() || D(A);
        });
      }
      Z(N), Z(b), $e(
        (D) => {
          ae(b, "width", s()), ae(b, "height", a()), ae(b, "style", l()), Ct(N, 0, _n(D));
        },
        [
          () => $t([
            "svelte-flow__connection",
            a0(o().isValid)
          ])
        ],
        pe
      ), L(v, b);
    };
    be(E, (v) => {
      o().inProgress && v(m);
    });
  }
  L(e, k);
  var _ = ce({
    get containerStyle() {
      return l();
    },
    set containerStyle(v) {
      l(v), y();
    },
    get style() {
      return u();
    },
    set style(v) {
      u(v), y();
    },
    get isCustomComponent() {
      return c();
    },
    set isCustomComponent(v) {
      c(v), y();
    }
  });
  return r(), _;
}
re(
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
var zp = /* @__PURE__ */ ne("<div><!></div>");
function Mo(e, t) {
  const n = rt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = rt(n, ["position", "style", "class"]);
  ue(t, !1);
  const [o, i] = tt(), s = () => j(f, "$selectionRectMode", o), a = te();
  let l = w(t, "position", 12, "top-right"), u = w(t, "style", 12, void 0), c = w(t, "class", 12, void 0);
  const { selectionRectMode: f } = Ke();
  le(() => U(l()), () => {
    G(a, `${l()}`.split("-"));
  }), gt(), He();
  var d = zp();
  let g;
  var p = X(d);
  vt(p, t, "default", {}), Z(d), $e(
    (k) => {
      g = rn(d, g, {
        class: k,
        style: u(),
        ...r
      }), at(d, "pointer-events", s() ? "none" : "");
    },
    [
      () => $t([
        "svelte-flow__panel",
        c(),
        ...h(a)
      ])
    ],
    pe
  ), L(e, d);
  var x = ce({
    get position() {
      return l();
    },
    set position(k) {
      l(k), y();
    },
    get style() {
      return u();
    },
    set style(k) {
      u(k), y();
    },
    get class() {
      return c();
    },
    set class(k) {
      c(k), y();
    }
  });
  return i(), x;
}
re(Mo, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var Rp = /* @__PURE__ */ ne('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function Yc(e, t) {
  ue(t, !1);
  let n = w(t, "proOptions", 12, void 0), r = w(t, "position", 12, "bottom-right");
  He();
  var o = et(), i = _e(o);
  {
    var s = (a) => {
      Mo(a, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var c = Rp();
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
  return L(e, o), ce({
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
re(Yc, { proOptions: {}, position: {} }, [], [], !0);
function Cl(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: i, paneClickDistance: s }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), o !== void 0 && e.setMaxZoom(o), i !== void 0 && e.setTranslateExtent(i), s !== void 0 && e.setPaneClickDistance(s);
}
const Bp = (e) => Object.keys(e);
function kl(e, t) {
  Bp(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function Yp() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function Zp(e = "light") {
  return Zt("light", (n) => {
    if (e !== "system") {
      n(e);
      return;
    }
    const r = Yp(), o = () => n(r != null && r.matches ? "dark" : "light");
    return n(r != null && r.matches ? "dark" : "light"), r == null || r.addEventListener("change", o), () => {
      r == null || r.removeEventListener("change", o);
    };
  });
}
var Xp = /* @__PURE__ */ ne('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), Wp = /* @__PURE__ */ ne("<!> <!>", 1), Fp = /* @__PURE__ */ ne("<div><!> <!> <!> <!></div>");
const Kp = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function Zc(e, t) {
  const n = g1(t), r = rt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), o = rt(r, [
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
  ue(t, !1), je(e, Kp);
  const [i, s] = tt(), a = () => j(_(), "$viewport", i), l = () => j(Ui, "$initialized", i), u = () => j(h(c), "$colorModeClass", i), c = te();
  let f = w(t, "id", 12, "1"), d = w(t, "nodes", 12), g = w(t, "edges", 12), p = w(t, "fitView", 12, void 0), x = w(t, "fitViewOptions", 12, void 0), k = w(t, "minZoom", 12, void 0), E = w(t, "maxZoom", 12, void 0), m = w(t, "initialViewport", 12, void 0), _ = w(t, "viewport", 12, void 0), v = w(t, "nodeTypes", 12, void 0), b = w(t, "edgeTypes", 12, void 0), N = w(t, "selectionKey", 12, void 0), $ = w(t, "selectionMode", 12, void 0), T = w(t, "panActivationKey", 12, void 0), A = w(t, "multiSelectionKey", 12, void 0), D = w(t, "zoomActivationKey", 12, void 0), O = w(t, "nodesDraggable", 12, void 0), V = w(t, "nodesConnectable", 12, void 0), z = w(t, "nodeDragThreshold", 12, void 0), S = w(t, "elementsSelectable", 12, void 0), H = w(t, "snapGrid", 12, void 0), C = w(t, "deleteKey", 12, void 0), P = w(t, "connectionRadius", 12, void 0), M = w(t, "connectionLineType", 12, void 0), I = w(t, "connectionMode", 28, () => cr.Strict), B = w(t, "connectionLineStyle", 12, ""), F = w(t, "connectionLineContainerStyle", 12, ""), K = w(t, "onMoveStart", 12, void 0), oe = w(t, "onMove", 12, void 0), J = w(t, "onMoveEnd", 12, void 0), W = w(t, "isValidConnection", 12, void 0), de = w(t, "translateExtent", 12, void 0), we = w(t, "nodeExtent", 12, void 0), Ce = w(t, "onlyRenderVisibleElements", 12, void 0), fe = w(t, "panOnScrollMode", 28, () => Kn.Free), ze = w(t, "preventScrolling", 12, !0), ie = w(t, "zoomOnScroll", 12, !0), ge = w(t, "zoomOnDoubleClick", 12, !0), Ye = w(t, "zoomOnPinch", 12, !0), Ae = w(t, "panOnScroll", 12, !1), Ze = w(t, "panOnDrag", 12, !0), ee = w(t, "selectionOnDrag", 12, void 0), he = w(t, "autoPanOnConnect", 12, !0), se = w(t, "autoPanOnNodeDrag", 12, !0), ke = w(t, "onerror", 12, void 0), Ne = w(t, "ondelete", 12, void 0), qe = w(t, "onedgecreate", 12, void 0), Re = w(t, "attributionPosition", 12, void 0), Oe = w(t, "proOptions", 12, void 0), ut = w(t, "defaultEdgeOptions", 12, void 0), nt = w(t, "width", 12, void 0), Q = w(t, "height", 12, void 0), Xe = w(t, "colorMode", 12, "light"), ve = w(t, "onconnect", 12, void 0), ln = w(t, "onconnectstart", 12, void 0), Gt = w(t, "onconnectend", 12, void 0), un = w(t, "onbeforedelete", 12, void 0), Pe = w(t, "oninit", 12, void 0), ot = w(t, "nodeOrigin", 12, void 0), me = w(t, "paneClickDistance", 12, 0), it = w(t, "nodeClickDistance", 12, 0), lt = w(t, "defaultMarkerColor", 12, "#b1b1b7"), Yt = w(t, "style", 12, void 0), Kr = w(t, "class", 12, void 0), Dt = te(), St = te(), cn = te();
  const Ut = a() || m(), ft = Kf(Xi) ? Ke() : pp({
    nodes: q(d()),
    edges: q(g()),
    width: nt(),
    height: Q(),
    fitView: p(),
    nodeOrigin: ot(),
    nodeExtent: we()
  });
  xn(() => (ft.width.set(h(St)), ft.height.set(h(cn)), ft.domNode.set(h(Dt)), ft.syncNodeStores(d()), ft.syncEdgeStores(g()), ft.syncViewport(_()), p() !== void 0 && ft.fitViewOnInit.set(p()), x() && ft.fitViewOptions.set(x()), Cl(ft, {
    nodeTypes: v(),
    edgeTypes: b(),
    minZoom: k(),
    maxZoom: E(),
    translateExtent: de(),
    paneClickDistance: me()
  }), () => {
    ft.reset();
  }));
  const { initialized: Ui } = ft;
  let tr = te(!1);
  le(
    () => (h(St), h(cn)),
    () => {
      h(St) !== void 0 && h(cn) !== void 0 && (ft.width.set(h(St)), ft.height.set(h(cn)));
    }
  ), le(
    () => (h(tr), l(), U(Pe())),
    () => {
      var Y;
      !h(tr) && l() && ((Y = Pe()) == null || Y(), G(tr, !0));
    }
  ), le(
    () => (U(f()), U(M()), U(P()), U($()), U(H()), U(lt()), U(O()), U(V()), U(S()), U(Ce()), U(W()), U(he()), U(se()), U(ke()), U(Ne()), U(qe()), U(I()), U(z()), U(ve()), U(ln()), U(Gt()), U(un()), U(ot()), kl),
    () => {
      const Y = {
        flowId: f(),
        connectionLineType: M(),
        connectionRadius: P(),
        selectionMode: $(),
        snapGrid: H(),
        defaultMarkerColor: lt(),
        nodesDraggable: O(),
        nodesConnectable: V(),
        elementsSelectable: S(),
        onlyRenderVisibleElements: Ce(),
        isValidConnection: W(),
        autoPanOnConnect: he(),
        autoPanOnNodeDrag: se(),
        onerror: ke(),
        ondelete: Ne(),
        onedgecreate: qe(),
        connectionMode: I(),
        nodeDragThreshold: z(),
        onconnect: ve(),
        onconnectstart: ln(),
        onconnectend: Gt(),
        onbeforedelete: un(),
        nodeOrigin: ot()
      };
      kl(ft, Y);
    }
  ), le(
    () => (U(v()), U(b()), U(k()), U(E()), U(de()), U(me())),
    () => {
      Cl(ft, {
        nodeTypes: v(),
        edgeTypes: b(),
        minZoom: k(),
        maxZoom: E(),
        translateExtent: de(),
        paneClickDistance: me()
      });
    }
  ), le(
    () => U(Xe()),
    () => {
      x1(G(c, Zp(Xe())), "$colorModeClass", i);
    }
  ), gt(), He();
  var jt = Fp();
  let Oo;
  var Lo = X(jt);
  Rc(Lo, {
    get selectionKey() {
      return N();
    },
    get deleteKey() {
      return C();
    },
    get panActivationKey() {
      return T();
    },
    get multiSelectionKey() {
      return A();
    },
    get zoomActivationKey() {
      return D();
    }
  });
  var Io = R(Lo, 2);
  const Ld = /* @__PURE__ */ pe(() => fe() === void 0 ? Kn.Free : fe()), Id = /* @__PURE__ */ pe(() => ze() === void 0 ? !0 : ze()), zd = /* @__PURE__ */ pe(() => ie() === void 0 ? !0 : ie()), Rd = /* @__PURE__ */ pe(() => ge() === void 0 ? !0 : ge()), Bd = /* @__PURE__ */ pe(() => Ye() === void 0 ? !0 : Ye()), Yd = /* @__PURE__ */ pe(() => Ae() === void 0 ? !1 : Ae()), Zd = /* @__PURE__ */ pe(() => Ze() === void 0 ? !0 : Ze()), Xd = /* @__PURE__ */ pe(() => me() === void 0 ? 0 : me());
  Pc(Io, {
    initialViewport: Ut,
    get onMoveStart() {
      return K();
    },
    get onMove() {
      return oe();
    },
    get onMoveEnd() {
      return J();
    },
    get panOnScrollMode() {
      return h(Ld);
    },
    get preventScrolling() {
      return h(Id);
    },
    get zoomOnScroll() {
      return h(zd);
    },
    get zoomOnDoubleClick() {
      return h(Rd);
    },
    get zoomOnPinch() {
      return h(Bd);
    },
    get panOnScroll() {
      return h(Yd);
    },
    get panOnDrag() {
      return h(Zd);
    },
    get paneClickDistance() {
      return h(Xd);
    },
    children: (Y, iw) => {
      const Kd = /* @__PURE__ */ pe(() => Ze() === void 0 ? !0 : Ze());
      Nc(Y, {
        get panOnDrag() {
          return h(Kd);
        },
        get selectionOnDrag() {
          return ee();
        },
        $$events: {
          paneclick(qr) {
            Le.call(this, t, qr);
          },
          panecontextmenu(qr) {
            Le.call(this, t, qr);
          }
        },
        children: (qr, sw) => {
          var ya = Wp(), wa = _e(ya);
          Tc(wa, {
            children: (Gd, aw) => {
              var _a = Xp(), xa = _e(_a);
              Lc(xa, {
                get defaultEdgeOptions() {
                  return ut();
                },
                $$events: {
                  edgeclick(Ve) {
                    Le.call(this, t, Ve);
                  },
                  edgecontextmenu(Ve) {
                    Le.call(this, t, Ve);
                  },
                  edgemouseenter(Ve) {
                    Le.call(this, t, Ve);
                  },
                  edgemouseleave(Ve) {
                    Le.call(this, t, Ve);
                  }
                }
              });
              var ba = R(xa, 2);
              Bc(ba, {
                get containerStyle() {
                  return F();
                },
                get style() {
                  return B();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (Ve, lw) => {
                    var ka = et(), jd = _e(ka);
                    vt(jd, t, "connectionLine", {}), L(Ve, ka);
                  }
                }
              });
              var Ca = R(ba, 6);
              Hc(Ca, {
                get nodeClickDistance() {
                  return it();
                },
                $$events: {
                  nodeclick(Ve) {
                    Le.call(this, t, Ve);
                  },
                  nodemouseenter(Ve) {
                    Le.call(this, t, Ve);
                  },
                  nodemousemove(Ve) {
                    Le.call(this, t, Ve);
                  },
                  nodemouseleave(Ve) {
                    Le.call(this, t, Ve);
                  },
                  nodedragstart(Ve) {
                    Le.call(this, t, Ve);
                  },
                  nodedrag(Ve) {
                    Le.call(this, t, Ve);
                  },
                  nodedragstop(Ve) {
                    Le.call(this, t, Ve);
                  },
                  nodecontextmenu(Ve) {
                    Le.call(this, t, Ve);
                  }
                }
              });
              var Ud = R(Ca, 2);
              zc(Ud, {
                $$events: {
                  selectionclick(Ve) {
                    Le.call(this, t, Ve);
                  },
                  selectioncontextmenu(Ve) {
                    Le.call(this, t, Ve);
                  },
                  nodedragstart(Ve) {
                    Le.call(this, t, Ve);
                  },
                  nodedrag(Ve) {
                    Le.call(this, t, Ve);
                  },
                  nodedragstop(Ve) {
                    Le.call(this, t, Ve);
                  }
                }
              }), L(Gd, _a);
            },
            $$slots: { default: !0 }
          });
          var qd = R(wa, 2);
          Ic(qd, {}), L(qr, ya);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var ma = R(Io, 2);
  Yc(ma, {
    get proOptions() {
      return Oe();
    },
    get position() {
      return Re();
    }
  });
  var Wd = R(ma, 2);
  vt(Wd, t, "default", {}), Z(jt), An(jt, (Y) => G(Dt, Y), () => h(Dt)), $e(
    (Y) => Oo = rn(
      jt,
      Oo,
      {
        style: Yt(),
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
        Kr(),
        u()
      ])
    ],
    pe
  ), La(jt, "clientWidth", (Y) => G(St, Y)), La(jt, "clientHeight", (Y) => G(cn, Y)), Qe("dragover", jt, function(Y) {
    Le.call(this, t, Y);
  }), Qe("drop", jt, function(Y) {
    Le.call(this, t, Y);
  }), L(e, jt);
  var Fd = ce({
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
      return p();
    },
    set fitView(Y) {
      p(Y), y();
    },
    get fitViewOptions() {
      return x();
    },
    set fitViewOptions(Y) {
      x(Y), y();
    },
    get minZoom() {
      return k();
    },
    set minZoom(Y) {
      k(Y), y();
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
      return _();
    },
    set viewport(Y) {
      _(Y), y();
    },
    get nodeTypes() {
      return v();
    },
    set nodeTypes(Y) {
      v(Y), y();
    },
    get edgeTypes() {
      return b();
    },
    set edgeTypes(Y) {
      b(Y), y();
    },
    get selectionKey() {
      return N();
    },
    set selectionKey(Y) {
      N(Y), y();
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
      return A();
    },
    set multiSelectionKey(Y) {
      A(Y), y();
    },
    get zoomActivationKey() {
      return D();
    },
    set zoomActivationKey(Y) {
      D(Y), y();
    },
    get nodesDraggable() {
      return O();
    },
    set nodesDraggable(Y) {
      O(Y), y();
    },
    get nodesConnectable() {
      return V();
    },
    set nodesConnectable(Y) {
      V(Y), y();
    },
    get nodeDragThreshold() {
      return z();
    },
    set nodeDragThreshold(Y) {
      z(Y), y();
    },
    get elementsSelectable() {
      return S();
    },
    set elementsSelectable(Y) {
      S(Y), y();
    },
    get snapGrid() {
      return H();
    },
    set snapGrid(Y) {
      H(Y), y();
    },
    get deleteKey() {
      return C();
    },
    set deleteKey(Y) {
      C(Y), y();
    },
    get connectionRadius() {
      return P();
    },
    set connectionRadius(Y) {
      P(Y), y();
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
      return oe();
    },
    set onMove(Y) {
      oe(Y), y();
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
      return de();
    },
    set translateExtent(Y) {
      de(Y), y();
    },
    get nodeExtent() {
      return we();
    },
    set nodeExtent(Y) {
      we(Y), y();
    },
    get onlyRenderVisibleElements() {
      return Ce();
    },
    set onlyRenderVisibleElements(Y) {
      Ce(Y), y();
    },
    get panOnScrollMode() {
      return fe();
    },
    set panOnScrollMode(Y) {
      fe(Y), y();
    },
    get preventScrolling() {
      return ze();
    },
    set preventScrolling(Y) {
      ze(Y), y();
    },
    get zoomOnScroll() {
      return ie();
    },
    set zoomOnScroll(Y) {
      ie(Y), y();
    },
    get zoomOnDoubleClick() {
      return ge();
    },
    set zoomOnDoubleClick(Y) {
      ge(Y), y();
    },
    get zoomOnPinch() {
      return Ye();
    },
    set zoomOnPinch(Y) {
      Ye(Y), y();
    },
    get panOnScroll() {
      return Ae();
    },
    set panOnScroll(Y) {
      Ae(Y), y();
    },
    get panOnDrag() {
      return Ze();
    },
    set panOnDrag(Y) {
      Ze(Y), y();
    },
    get selectionOnDrag() {
      return ee();
    },
    set selectionOnDrag(Y) {
      ee(Y), y();
    },
    get autoPanOnConnect() {
      return he();
    },
    set autoPanOnConnect(Y) {
      he(Y), y();
    },
    get autoPanOnNodeDrag() {
      return se();
    },
    set autoPanOnNodeDrag(Y) {
      se(Y), y();
    },
    get onerror() {
      return ke();
    },
    set onerror(Y) {
      ke(Y), y();
    },
    get ondelete() {
      return Ne();
    },
    set ondelete(Y) {
      Ne(Y), y();
    },
    get onedgecreate() {
      return qe();
    },
    set onedgecreate(Y) {
      qe(Y), y();
    },
    get attributionPosition() {
      return Re();
    },
    set attributionPosition(Y) {
      Re(Y), y();
    },
    get proOptions() {
      return Oe();
    },
    set proOptions(Y) {
      Oe(Y), y();
    },
    get defaultEdgeOptions() {
      return ut();
    },
    set defaultEdgeOptions(Y) {
      ut(Y), y();
    },
    get width() {
      return nt();
    },
    set width(Y) {
      nt(Y), y();
    },
    get height() {
      return Q();
    },
    set height(Y) {
      Q(Y), y();
    },
    get colorMode() {
      return Xe();
    },
    set colorMode(Y) {
      Xe(Y), y();
    },
    get onconnect() {
      return ve();
    },
    set onconnect(Y) {
      ve(Y), y();
    },
    get onconnectstart() {
      return ln();
    },
    set onconnectstart(Y) {
      ln(Y), y();
    },
    get onconnectend() {
      return Gt();
    },
    set onconnectend(Y) {
      Gt(Y), y();
    },
    get onbeforedelete() {
      return un();
    },
    set onbeforedelete(Y) {
      un(Y), y();
    },
    get oninit() {
      return Pe();
    },
    set oninit(Y) {
      Pe(Y), y();
    },
    get nodeOrigin() {
      return ot();
    },
    set nodeOrigin(Y) {
      ot(Y), y();
    },
    get paneClickDistance() {
      return me();
    },
    set paneClickDistance(Y) {
      me(Y), y();
    },
    get nodeClickDistance() {
      return it();
    },
    set nodeClickDistance(Y) {
      it(Y), y();
    },
    get defaultMarkerColor() {
      return lt();
    },
    set defaultMarkerColor(Y) {
      lt(Y), y();
    },
    get style() {
      return Yt();
    },
    set style(Y) {
      Yt(Y), y();
    },
    get class() {
      return Kr();
    },
    set class(Y) {
      Kr(Y), y();
    }
  });
  return s(), Fd;
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
function Xc(e, t) {
  ue(t, !1);
  let n = w(t, "initialNodes", 12, void 0), r = w(t, "initialEdges", 12, void 0), o = w(t, "initialWidth", 12, void 0), i = w(t, "initialHeight", 12, void 0), s = w(t, "fitView", 12, void 0), a = w(t, "nodeOrigin", 12, void 0);
  const l = Sc({
    nodes: n(),
    edges: r(),
    width: o(),
    height: i(),
    nodeOrigin: a(),
    fitView: s()
  });
  Mr(Xi, { getStore: () => l }), Us(() => {
    l.reset();
  }), He();
  var u = et(), c = _e(u);
  return vt(c, t, "default", {}), L(e, u), ce({
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
var qp = /* @__PURE__ */ ne("<button><!></button>");
function ro(e, t) {
  const n = rt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = rt(n, [
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
  var c = qp();
  let f;
  var d = X(c);
  return vt(d, t, "default", { class: "button-svg" }), Z(c), $e(
    (g) => {
      f = rn(c, f, { type: "button", class: g, ...r }), at(c, "--xy-controls-button-background-color-props", i()), at(c, "--xy-controls-button-background-color-hover-props", s()), at(c, "--xy-controls-button-color-props", a()), at(c, "--xy-controls-button-color-hover-props", l()), at(c, "--xy-controls-button-border-color-props", u());
    },
    [
      () => $t([
        "svelte-flow__controls-button",
        o()
      ])
    ],
    pe
  ), Qe("click", c, function(g) {
    Le.call(this, t, g);
  }), L(e, c), ce({
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
  ro,
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
var Gp = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function Wc(e) {
  var t = Gp();
  L(e, t);
}
re(Wc, {}, [], [], !0);
var Up = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Fc(e) {
  var t = Up();
  L(e, t);
}
re(Fc, {}, [], [], !0);
var jp = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Kc(e) {
  var t = jp();
  L(e, t);
}
re(Kc, {}, [], [], !0);
var Jp = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function qc(e) {
  var t = Jp();
  L(e, t);
}
re(qc, {}, [], [], !0);
var Qp = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function Gc(e) {
  var t = Qp();
  L(e, t);
}
re(Gc, {}, [], [], !0);
var e2 = /* @__PURE__ */ ne("<!> <!>", 1), t2 = /* @__PURE__ */ ne("<!> <!> <!> <!> <!> <!>", 1);
function Uc(e, t) {
  ue(t, !1);
  const [n, r] = tt(), o = () => j(M, "$nodesDraggable", n), i = () => j(I, "$nodesConnectable", n), s = () => j(B, "$elementsSelectable", n), a = () => j(H, "$viewport", n), l = () => j(C, "$minZoom", n), u = () => j(P, "$maxZoom", n), c = te(), f = te(), d = te(), g = te();
  let p = w(t, "position", 12, "bottom-left"), x = w(t, "showZoom", 12, !0), k = w(t, "showFitView", 12, !0), E = w(t, "showLock", 12, !0), m = w(t, "buttonBgColor", 12, void 0), _ = w(t, "buttonBgColorHover", 12, void 0), v = w(t, "buttonColor", 12, void 0), b = w(t, "buttonColorHover", 12, void 0), N = w(t, "buttonBorderColor", 12, void 0), $ = w(t, "ariaLabel", 12, void 0), T = w(t, "style", 12, void 0), A = w(t, "orientation", 12, "vertical"), D = w(t, "fitViewOptions", 12, void 0), O = w(t, "class", 12, "");
  const {
    zoomIn: V,
    zoomOut: z,
    fitView: S,
    viewport: H,
    minZoom: C,
    maxZoom: P,
    nodesDraggable: M,
    nodesConnectable: I,
    elementsSelectable: B
  } = Ke(), F = {
    bgColor: m(),
    bgColorHover: _(),
    color: v(),
    colorHover: b(),
    borderColor: N()
  }, K = () => {
    V();
  }, oe = () => {
    z();
  }, J = () => {
    S(D());
  }, W = () => {
    G(c, !h(c)), M.set(h(c)), I.set(h(c)), B.set(h(c));
  };
  le(
    () => (o(), i(), s()),
    () => {
      G(c, o() || i() || s());
    }
  ), le(() => (a(), l()), () => {
    G(f, a().zoom <= l());
  }), le(() => (a(), u()), () => {
    G(d, a().zoom >= u());
  }), le(() => U(A()), () => {
    G(g, A() === "horizontal" ? "horizontal" : "vertical");
  }), gt(), He();
  const de = /* @__PURE__ */ pe(() => $t([
    "svelte-flow__controls",
    h(g),
    O()
  ])), we = /* @__PURE__ */ pe(() => $() ?? "Svelte Flow controls");
  Mo(e, {
    get class() {
      return h(de);
    },
    get position() {
      return p();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return h(we);
    },
    get style() {
      return T();
    },
    children: (fe, ze) => {
      var ie = t2(), ge = _e(ie);
      vt(ge, t, "before", {});
      var Ye = R(ge, 2);
      {
        var Ae = (qe) => {
          var Re = e2(), Oe = _e(Re);
          ro(Oe, ct(
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
              children: (nt, Q) => {
                Wc(nt);
              },
              $$slots: { default: !0 }
            }
          ));
          var ut = R(Oe, 2);
          ro(ut, ct(
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
              $$events: { click: oe },
              children: (nt, Q) => {
                Fc(nt);
              },
              $$slots: { default: !0 }
            }
          )), L(qe, Re);
        };
        be(Ye, (qe) => {
          x() && qe(Ae);
        });
      }
      var Ze = R(Ye, 2);
      {
        var ee = (qe) => {
          ro(qe, ct(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            F,
            {
              $$events: { click: J },
              children: (Re, Oe) => {
                Kc(Re);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        be(Ze, (qe) => {
          k() && qe(ee);
        });
      }
      var he = R(Ze, 2);
      {
        var se = (qe) => {
          ro(qe, ct(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            F,
            {
              $$events: { click: W },
              children: (Re, Oe) => {
                var ut = et(), nt = _e(ut);
                {
                  var Q = (ve) => {
                    Gc(ve);
                  }, Xe = (ve) => {
                    qc(ve);
                  };
                  be(nt, (ve) => {
                    h(c) ? ve(Q) : ve(Xe, !1);
                  });
                }
                L(Re, ut);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        be(he, (qe) => {
          E() && qe(se);
        });
      }
      var ke = R(he, 2);
      vt(ke, t, "default", {});
      var Ne = R(ke, 2);
      vt(Ne, t, "after", {}), L(fe, ie);
    },
    $$slots: { default: !0 }
  });
  var Ce = ce({
    get position() {
      return p();
    },
    set position(fe) {
      p(fe), y();
    },
    get showZoom() {
      return x();
    },
    set showZoom(fe) {
      x(fe), y();
    },
    get showFitView() {
      return k();
    },
    set showFitView(fe) {
      k(fe), y();
    },
    get showLock() {
      return E();
    },
    set showLock(fe) {
      E(fe), y();
    },
    get buttonBgColor() {
      return m();
    },
    set buttonBgColor(fe) {
      m(fe), y();
    },
    get buttonBgColorHover() {
      return _();
    },
    set buttonBgColorHover(fe) {
      _(fe), y();
    },
    get buttonColor() {
      return v();
    },
    set buttonColor(fe) {
      v(fe), y();
    },
    get buttonColorHover() {
      return b();
    },
    set buttonColorHover(fe) {
      b(fe), y();
    },
    get buttonBorderColor() {
      return N();
    },
    set buttonBorderColor(fe) {
      N(fe), y();
    },
    get ariaLabel() {
      return $();
    },
    set ariaLabel(fe) {
      $(fe), y();
    },
    get style() {
      return T();
    },
    set style(fe) {
      T(fe), y();
    },
    get orientation() {
      return A();
    },
    set orientation(fe) {
      A(fe), y();
    },
    get fitViewOptions() {
      return D();
    },
    set fitViewOptions(fe) {
      D(fe), y();
    },
    get class() {
      return O();
    },
    set class(fe) {
      O(fe), y();
    }
  });
  return r(), Ce;
}
re(
  Uc,
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
var qn;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(qn || (qn = {}));
var n2 = /* @__PURE__ */ xe("<circle></circle>");
function jc(e, t) {
  ue(t, !1);
  let n = w(t, "radius", 12, 5), r = w(t, "class", 12, "");
  He();
  var o = n2();
  return $e(
    (i) => {
      ae(o, "cx", n()), ae(o, "cy", n()), ae(o, "r", n()), Ct(o, 0, _n(i));
    },
    [
      () => $t([
        "svelte-flow__background-pattern",
        "dots",
        r()
      ])
    ],
    pe
  ), L(e, o), ce({
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
re(jc, { radius: {}, class: {} }, [], [], !0);
var r2 = /* @__PURE__ */ xe("<path></path>");
function Jc(e, t) {
  ue(t, !1);
  let n = w(t, "lineWidth", 12, 1), r = w(t, "dimensions", 12), o = w(t, "variant", 12, void 0), i = w(t, "class", 12, "");
  He();
  var s = r2();
  return $e(
    (a) => {
      ae(s, "stroke-width", n()), ae(s, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Ct(s, 0, _n(a));
    },
    [
      () => $t([
        "svelte-flow__background-pattern",
        o(),
        i()
      ])
    ],
    pe
  ), L(e, s), ce({
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
const o2 = {
  [qn.Dots]: 1,
  [qn.Lines]: 1,
  [qn.Cross]: 6
};
var i2 = /* @__PURE__ */ xe('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const s2 = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function Qc(e, t) {
  ue(t, !1), je(e, s2);
  const [n, r] = tt(), o = () => j(b, "$flowId", n), i = () => j(v, "$viewport", n), s = te(), a = te(), l = te(), u = te(), c = te();
  let f = w(t, "id", 12, void 0), d = w(t, "variant", 28, () => qn.Dots), g = w(t, "gap", 12, 20), p = w(t, "size", 12, 1), x = w(t, "lineWidth", 12, 1), k = w(t, "bgColor", 12, void 0), E = w(t, "patternColor", 12, void 0), m = w(t, "patternClass", 12, void 0), _ = w(t, "class", 12, "");
  const { viewport: v, flowId: b } = Ke(), N = p() || o2[d()], $ = d() === qn.Dots, T = d() === qn.Cross, A = Array.isArray(g()) ? g() : [g(), g()];
  le(
    () => (o(), U(f())),
    () => {
      G(s, `background-pattern-${o()}-${f() ? f() : ""}`);
    }
  ), le(() => i(), () => {
    G(a, [
      A[0] * i().zoom || 1,
      A[1] * i().zoom || 1
    ]);
  }), le(() => i(), () => {
    G(l, N * i().zoom);
  }), le(() => (h(l), h(a)), () => {
    G(u, T ? [h(l), h(l)] : h(a));
  }), le(
    () => (h(l), h(u)),
    () => {
      G(c, $ ? [
        h(l) / 2,
        h(l) / 2
      ] : [
        h(u)[0] / 2,
        h(u)[1] / 2
      ]);
    }
  ), gt(), He();
  var D = i2(), O = X(D), V = X(O);
  {
    var z = (P) => {
      const M = /* @__PURE__ */ pe(() => h(l) / 2);
      jc(P, {
        get radius() {
          return h(M);
        },
        get class() {
          return m();
        }
      });
    }, S = (P) => {
      Jc(P, {
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
    be(V, (P) => {
      $ ? P(z) : P(S, !1);
    });
  }
  Z(O);
  var H = R(O);
  Z(D), $e(
    (P) => {
      Ct(D, 0, _n(P), "svelte-1r7pe8d"), at(D, "--xy-background-color-props", k()), at(D, "--xy-background-pattern-color-props", E()), ae(O, "id", h(s)), ae(O, "x", i().x % h(a)[0]), ae(O, "y", i().y % h(a)[1]), ae(O, "width", h(a)[0]), ae(O, "height", h(a)[1]), ae(O, "patternTransform", `translate(-${h(c)[0]},-${h(c)[1]})`), ae(H, "fill", `url(#${h(s)})`);
    },
    [
      () => $t(["svelte-flow__background", _()])
    ],
    pe
  ), L(e, D);
  var C = ce({
    get id() {
      return f();
    },
    set id(P) {
      f(P), y();
    },
    get variant() {
      return d();
    },
    set variant(P) {
      d(P), y();
    },
    get gap() {
      return g();
    },
    set gap(P) {
      g(P), y();
    },
    get size() {
      return p();
    },
    set size(P) {
      p(P), y();
    },
    get lineWidth() {
      return x();
    },
    set lineWidth(P) {
      x(P), y();
    },
    get bgColor() {
      return k();
    },
    set bgColor(P) {
      k(P), y();
    },
    get patternColor() {
      return E();
    },
    set patternColor(P) {
      E(P), y();
    },
    get patternClass() {
      return m();
    },
    set patternClass(P) {
      m(P), y();
    },
    get class() {
      return _();
    },
    set class(P) {
      _(P), y();
    }
  });
  return r(), C;
}
re(
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
var a2 = /* @__PURE__ */ xe("<rect></rect>");
function ed(e, t) {
  ue(t, !1);
  let n = w(t, "x", 12), r = w(t, "y", 12), o = w(t, "width", 12, 0), i = w(t, "height", 12, 0), s = w(t, "borderRadius", 12, 5), a = w(t, "color", 12, void 0), l = w(t, "shapeRendering", 12), u = w(t, "strokeColor", 12, void 0), c = w(t, "strokeWidth", 12, 2), f = w(t, "selected", 12, !1), d = w(t, "class", 12, "");
  He();
  var g = a2();
  let p;
  return $e(
    (x) => {
      p = Ct(g, 0, _n(x), null, p, { selected: f() }), ae(g, "x", n()), ae(g, "y", r()), ae(g, "rx", s()), ae(g, "ry", s()), ae(g, "width", o()), ae(g, "height", i()), ae(g, "style", `${a() ? `fill: ${a()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), ae(g, "shape-rendering", l());
    },
    [
      () => $t(["svelte-flow__minimap-node", d()])
    ],
    pe
  ), L(e, g), ce({
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
re(
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
function as(e, t) {
  const n = W0({
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
const ls = (e) => e instanceof Function ? e : () => e;
var l2 = /* @__PURE__ */ xe("<title> </title>"), u2 = /* @__PURE__ */ xe('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function td(e, t) {
  ue(t, !1);
  const [n, r] = tt(), o = () => j(Ze, "$flowId", n), i = () => j(ge, "$viewport", n), s = () => j(Ye, "$containerWidth", n), a = () => j(Ae, "$containerHeight", n), l = () => j(ie, "$nodeLookup", n), u = () => j(ze, "$nodes", n), c = () => j(ee, "$panZoom", n), f = () => j(he, "$translateExtent", n), d = te(), g = te(), p = te(), x = te(), k = te(), E = te(), m = te(), _ = te(), v = te(), b = te(), N = te(), $ = te(), T = te();
  let A = w(t, "position", 12, "bottom-right"), D = w(t, "ariaLabel", 12, "Mini map"), O = w(t, "nodeStrokeColor", 12, "transparent"), V = w(t, "nodeColor", 12, void 0), z = w(t, "nodeClass", 12, ""), S = w(t, "nodeBorderRadius", 12, 5), H = w(t, "nodeStrokeWidth", 12, 2), C = w(t, "bgColor", 12, void 0), P = w(t, "maskColor", 12, void 0), M = w(t, "maskStrokeColor", 12, void 0), I = w(t, "maskStrokeWidth", 12, void 0), B = w(t, "width", 12, void 0), F = w(t, "height", 12, void 0), K = w(t, "pannable", 12, !0), oe = w(t, "zoomable", 12, !0), J = w(t, "inversePan", 12, void 0), W = w(t, "zoomStep", 12, void 0), de = w(t, "style", 12, ""), we = w(t, "class", 12, "");
  const Ce = 200, fe = 150, {
    nodes: ze,
    nodeLookup: ie,
    viewport: ge,
    width: Ye,
    height: Ae,
    flowId: Ze,
    panZoom: ee,
    translateExtent: he
  } = Ke(), se = V() === void 0 ? void 0 : ls(V()), ke = ls(O()), Ne = ls(z()), qe = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), Re = `svelte-flow__minimap-desc-${o()}`;
  let Oe = te(h(d));
  const ut = () => h(E);
  le(
    () => (i(), s(), a()),
    () => {
      G(d, {
        x: -i().x / i().zoom,
        y: -i().y / i().zoom,
        width: s() / i().zoom,
        height: a() / i().zoom
      });
    }
  ), le(
    () => (l(), h(d), u()),
    () => {
      G(Oe, l().size > 0 ? ec(Po(l()), h(d)) : h(d)), u();
    }
  ), le(() => U(B()), () => {
    G(g, B() ?? Ce);
  }), le(() => U(F()), () => {
    G(p, F() ?? fe);
  }), le(
    () => (h(Oe), h(g)),
    () => {
      G(x, h(Oe).width / h(g));
    }
  ), le(
    () => (h(Oe), h(p)),
    () => {
      G(k, h(Oe).height / h(p));
    }
  ), le(
    () => (h(x), h(k)),
    () => {
      G(E, Math.max(h(x), h(k)));
    }
  ), le(() => (h(E), h(g)), () => {
    G(m, h(E) * h(g));
  }), le(
    () => (h(E), h(p)),
    () => {
      G(_, h(E) * h(p));
    }
  ), le(() => h(E), () => {
    G(v, 5 * h(E));
  }), le(
    () => (h(Oe), h(m), h(v)),
    () => {
      G(b, h(Oe).x - (h(m) - h(Oe).width) / 2 - h(v));
    }
  ), le(
    () => (h(Oe), h(_), h(v)),
    () => {
      G(N, h(Oe).y - (h(_) - h(Oe).height) / 2 - h(v));
    }
  ), le(() => (h(m), h(v)), () => {
    G($, h(m) + h(v) * 2);
  }), le(() => (h(_), h(v)), () => {
    G(T, h(_) + h(v) * 2);
  }), gt(), He();
  const nt = /* @__PURE__ */ pe(() => de() + (C() ? `;--xy-minimap-background-color-props:${C()}` : "")), Q = /* @__PURE__ */ pe(() => $t(["svelte-flow__minimap", we()]));
  Mo(e, {
    get position() {
      return A();
    },
    get style() {
      return h(nt);
    },
    get class() {
      return h(Q);
    },
    "data-testid": "svelte-flow__minimap",
    children: (ve, ln) => {
      var Gt = et(), un = _e(Gt);
      {
        var Pe = (ot) => {
          var me = u2();
          ae(me, "aria-labelledby", Re);
          var it = X(me);
          {
            var lt = (Dt) => {
              var St = l2();
              ae(St, "id", Re);
              var cn = X(St, !0);
              Z(St), $e(() => wn(cn, D())), L(Dt, St);
            };
            be(it, (Dt) => {
              D() && Dt(lt);
            });
          }
          var Yt = R(it);
          zt(Yt, 1, u, (Dt) => Dt.id, (Dt, St) => {
            var cn = et();
            const Ut = /* @__PURE__ */ pe(() => l().get(h(St).id));
            var ft = _e(cn);
            {
              var Ui = (tr) => {
                const jt = /* @__PURE__ */ pe(() => Qn(h(Ut))), Oo = /* @__PURE__ */ pe(() => se == null ? void 0 : se(h(Ut))), Lo = /* @__PURE__ */ pe(() => ke(h(Ut))), Io = /* @__PURE__ */ pe(() => Ne(h(Ut)));
                ed(tr, ct(
                  {
                    get x() {
                      return h(Ut).internals.positionAbsolute.x;
                    },
                    get y() {
                      return h(Ut).internals.positionAbsolute.y;
                    }
                  },
                  () => h(jt),
                  {
                    get selected() {
                      return h(Ut).selected;
                    },
                    get color() {
                      return h(Oo);
                    },
                    get borderRadius() {
                      return S();
                    },
                    get strokeColor() {
                      return h(Lo);
                    },
                    get strokeWidth() {
                      return H();
                    },
                    shapeRendering: qe,
                    get class() {
                      return h(Io);
                    }
                  }
                ));
              };
              be(ft, (tr) => {
                h(Ut) && nc(h(Ut)) && tr(Ui);
              });
            }
            L(Dt, cn);
          });
          var Kr = R(Yt);
          Z(me), ht(me, (Dt, St) => as == null ? void 0 : as(Dt, St), () => ({
            panZoom: c(),
            viewport: ge,
            getViewScale: ut,
            translateExtent: f(),
            width: s(),
            height: a(),
            inversePan: J(),
            zoomStep: W(),
            pannable: K(),
            zoomable: oe()
          })), $e(() => {
            ae(me, "width", h(g)), ae(me, "height", h(p)), ae(me, "viewBox", `${h(b) ?? ""} ${h(N) ?? ""} ${h($) ?? ""} ${h(T) ?? ""}`), at(me, "--xy-minimap-mask-background-color-props", P()), at(me, "--xy-minimap-mask-stroke-color-props", M()), at(me, "--xy-minimap-mask-stroke-width-props", I() ? I() * h(E) : void 0), ae(Kr, "d", `M${h(b) - h(v)},${h(N) - h(v)}h${h($) + h(v) * 2}v${h(T) + h(v) * 2}h${-h($) - h(v) * 2}z
      M${h(d).x ?? ""},${h(d).y ?? ""}h${h(d).width ?? ""}v${h(d).height ?? ""}h${-h(d).width}z`);
          }), L(ot, me);
        };
        be(un, (ot) => {
          c() && ot(Pe);
        });
      }
      L(ve, Gt);
    },
    $$slots: { default: !0 }
  });
  var Xe = ce({
    get position() {
      return A();
    },
    set position(ve) {
      A(ve), y();
    },
    get ariaLabel() {
      return D();
    },
    set ariaLabel(ve) {
      D(ve), y();
    },
    get nodeStrokeColor() {
      return O();
    },
    set nodeStrokeColor(ve) {
      O(ve), y();
    },
    get nodeColor() {
      return V();
    },
    set nodeColor(ve) {
      V(ve), y();
    },
    get nodeClass() {
      return z();
    },
    set nodeClass(ve) {
      z(ve), y();
    },
    get nodeBorderRadius() {
      return S();
    },
    set nodeBorderRadius(ve) {
      S(ve), y();
    },
    get nodeStrokeWidth() {
      return H();
    },
    set nodeStrokeWidth(ve) {
      H(ve), y();
    },
    get bgColor() {
      return C();
    },
    set bgColor(ve) {
      C(ve), y();
    },
    get maskColor() {
      return P();
    },
    set maskColor(ve) {
      P(ve), y();
    },
    get maskStrokeColor() {
      return M();
    },
    set maskStrokeColor(ve) {
      M(ve), y();
    },
    get maskStrokeWidth() {
      return I();
    },
    set maskStrokeWidth(ve) {
      I(ve), y();
    },
    get width() {
      return B();
    },
    set width(ve) {
      B(ve), y();
    },
    get height() {
      return F();
    },
    set height(ve) {
      F(ve), y();
    },
    get pannable() {
      return K();
    },
    set pannable(ve) {
      K(ve), y();
    },
    get zoomable() {
      return oe();
    },
    set zoomable(ve) {
      oe(ve), y();
    },
    get inversePan() {
      return J();
    },
    set inversePan(ve) {
      J(ve), y();
    },
    get zoomStep() {
      return W();
    },
    set zoomStep(ve) {
      W(ve), y();
    },
    get style() {
      return de();
    },
    set style(ve) {
      de(ve), y();
    },
    get class() {
      return we();
    },
    set class(ve) {
      we(ve), y();
    }
  });
  return r(), Xe;
}
re(
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
const El = (e) => u0(e);
function Bt() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: s, height: a, minZoom: l, maxZoom: u, panZoom: c, nodes: f, edges: d, domNode: g, nodeLookup: p, nodeOrigin: x, edgeLookup: k, connectionLookup: E } = Ke(), m = (b) => {
    var D, O;
    const N = q(p), $ = El(b) ? b : N.get(b.id), T = $.parentId ? g0($.position, $.measured, $.parentId, N, q(x)) : $.position, A = {
      ...$,
      position: T,
      width: ((D = $.measured) == null ? void 0 : D.width) ?? $.width,
      height: ((O = $.measured) == null ? void 0 : O.height) ?? $.height
    };
    return Or(A);
  }, _ = (b, N, $ = { replace: !1 }) => {
    var D;
    const T = (D = q(p).get(b)) == null ? void 0 : D.internals.userNode;
    if (!T)
      return;
    const A = typeof N == "function" ? N(T) : N;
    $.replace ? f.update((O) => O.map((V) => V.id === b ? El(A) ? A : { ...V, ...A } : V)) : (Object.assign(T, A), f.update((O) => O));
  }, v = (b) => q(p).get(b);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: v,
    getNode: (b) => {
      var N;
      return (N = v(b)) == null ? void 0 : N.internals.userNode;
    },
    getNodes: (b) => b === void 0 ? q(f) : $l(q(p), b),
    getEdge: (b) => q(k).get(b),
    getEdges: (b) => b === void 0 ? q(d) : $l(q(k), b),
    setZoom: (b, N) => {
      const $ = q(c);
      return $ ? $.scaleTo(b, { duration: N == null ? void 0 : N.duration }) : Promise.resolve(!1);
    },
    getZoom: () => q(i).zoom,
    setViewport: async (b, N) => {
      const $ = q(i), T = q(c);
      return T ? (await T.setViewport({
        x: b.x ?? $.x,
        y: b.y ?? $.y,
        zoom: b.zoom ?? $.zoom
      }, { duration: N == null ? void 0 : N.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => q(i),
    setCenter: async (b, N, $) => {
      const T = typeof ($ == null ? void 0 : $.zoom) < "u" ? $.zoom : q(u), A = q(c);
      return A ? (await A.setViewport({
        x: q(s) / 2 - b * T,
        y: q(a) / 2 - N * T,
        zoom: T
      }, { duration: $ == null ? void 0 : $.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (b, N) => {
      const $ = q(c);
      if (!$)
        return Promise.resolve(!1);
      const T = sa(b, q(s), q(a), q(l), q(u), (N == null ? void 0 : N.padding) ?? 0.1);
      return await $.setViewport(T, { duration: N == null ? void 0 : N.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (b, N = !0, $) => {
      const T = ul(b), A = T ? b : m(b);
      return A ? ($ || q(f)).filter((D) => {
        const O = q(p).get(D.id);
        if (!O || !T && D.id === b.id)
          return !1;
        const V = Or(O), z = mo(V, A);
        return N && z > 0 || z >= A.width * A.height;
      }) : [];
    },
    isNodeIntersecting: (b, N, $ = !0) => {
      const A = ul(b) ? b : m(b);
      if (!A)
        return !1;
      const D = mo(A, N);
      return $ && D > 0 || D >= A.width * A.height;
    },
    deleteElements: async ({ nodes: b = [], edges: N = [] }) => {
      const { nodes: $, edges: T } = await ju({
        nodesToRemove: b,
        edgesToRemove: N,
        nodes: q(f),
        edges: q(d),
        onBeforeDelete: q(r)
      });
      return $ && f.update((A) => A.filter((D) => !$.some(({ id: O }) => O === D.id))), T && d.update((A) => A.filter((D) => !T.some(({ id: O }) => O === D.id))), {
        deletedNodes: $,
        deletedEdges: T
      };
    },
    screenToFlowPosition: (b, N = { snapToGrid: !0 }) => {
      const $ = q(g);
      if (!$)
        return b;
      const T = N.snapToGrid ? q(o) : !1, { x: A, y: D, zoom: O } = q(i), { x: V, y: z } = $.getBoundingClientRect(), S = {
        x: b.x - V,
        y: b.y - z
      };
      return No(S, [A, D, O], T !== null, T || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (b) => {
      const N = q(g);
      if (!N)
        return b;
      const { x: $, y: T, zoom: A } = q(i), { x: D, y: O } = N.getBoundingClientRect(), V = tc(b, [$, T, A]);
      return {
        x: V.x + D,
        y: V.y + O
      };
    },
    toObject: () => ({
      nodes: q(f).map((b) => ({
        ...b,
        // we want to make sure that changes to the nodes object that gets returned by toObject
        // do not affect the nodes object
        position: { ...b.position },
        data: { ...b.data }
      })),
      edges: q(d).map((b) => ({ ...b })),
      viewport: { ...q(i) }
    }),
    updateNode: _,
    updateNodeData: (b, N, $) => {
      var D;
      const T = (D = q(p).get(b)) == null ? void 0 : D.internals.userNode;
      if (!T)
        return;
      const A = typeof N == "function" ? N(T) : N;
      T.data = $ != null && $.replace ? A : { ...T.data, ...A }, f.update((O) => O);
    },
    getNodesBounds: (b) => {
      const N = q(p), $ = q(x);
      return c0(b, { nodeLookup: N, nodeOrigin: $ });
    },
    getHandleConnections: ({ type: b, id: N, nodeId: $ }) => {
      var T;
      return Array.from(((T = q(E).get(`${$}-${b}-${N ?? null}`)) == null ? void 0 : T.values()) ?? []);
    },
    viewport: i
  };
}
function $l(e, t) {
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
var c2 = /* @__PURE__ */ ne('<div class="svelte-flow__node-toolbar"><!></div>');
function nd(e, t) {
  ue(t, !1);
  const [n, r] = tt(), o = () => j(_, "$nodes", n), i = () => j(m, "$nodeLookup", n), s = () => j(E, "$viewport", n), a = () => j(k, "$domNode", n), l = te(), u = te(), c = te();
  let f = w(t, "nodeId", 12, void 0), d = w(t, "position", 12, void 0), g = w(t, "align", 12, void 0), p = w(t, "offset", 12, void 0), x = w(t, "isVisible", 12, void 0);
  const { domNode: k, viewport: E, nodeLookup: m, nodes: _ } = Ke(), { getNodesBounds: v } = Bt(), b = ar("svelteflow__node_id");
  let N = te(), $ = te([]), T = p() !== void 0 ? p() : 10, A = d() !== void 0 ? d() : Ee.Top, D = g() !== void 0 ? g() : "center";
  le(
    () => (o(), U(f()), i()),
    () => {
      o();
      const H = Array.isArray(f()) ? f() : [f() || b];
      G($, H.reduce(
        (C, P) => {
          const M = i().get(P);
          return M && C.push(M), C;
        },
        []
      ));
    }
  ), le(
    () => (h($), s()),
    () => {
      const H = v(h($));
      H && G(N, P0(H, s(), A, T, D));
    }
  ), le(() => h($), () => {
    G(l, h($).length === 0 ? 1 : Math.max(...h($).map((H) => (H.internals.z || 5) + 1)));
  }), le(() => o(), () => {
    G(u, o().filter((H) => H.selected).length);
  }), le(
    () => (U(x()), h($), h(u)),
    () => {
      G(c, typeof x() == "boolean" ? x() : h($).length === 1 && h($)[0].selected && h(u) === 1);
    }
  ), gt(), He();
  var O = et(), V = _e(O);
  {
    var z = (H) => {
      var C = c2(), P = X(C);
      vt(P, t, "default", {}), Z(C), ht(C, (M, I) => kr == null ? void 0 : kr(M, I), () => ({ domNode: a() })), $e(
        (M) => {
          ae(C, "data-id", M), at(C, "position", "absolute"), at(C, "transform", h(N)), at(C, "z-index", h(l));
        },
        [
          () => h($).reduce((M, I) => `${M}${I.id} `, "").trim()
        ],
        pe
      ), L(H, C);
    };
    be(V, (H) => {
      a() && h(c) && h($) && H(z);
    });
  }
  L(e, O);
  var S = ce({
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
      return p();
    },
    set offset(H) {
      p(H), y();
    },
    get isVisible() {
      return x();
    },
    set isVisible(H) {
      x(H), y();
    }
  });
  return r(), S;
}
re(
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
  const { nodes: t, nodeLookup: n } = Ke();
  let r = [], o = !0;
  return Fn([t, n], ([, i], s) => {
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
    (!O0(a, r) || o) && (r = a, s(l ? a : a[0] ?? null), o = !1);
  });
}
const Sl = "tinyflow-component";
class cw {
  constructor(t) {
    yt(this, "options");
    yt(this, "rootEl");
    yt(this, "svelteFlowInstance");
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
    const t = document.createElement(Sl);
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
    const n = document.createElement(Sl);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const d2 = () => {
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
}, Jo = d2();
var f2 = /* @__PURE__ */ ne("<button><!></button>");
function Ge(e, t) {
  ue(t, !0);
  const n = w(t, "children", 7), r = /* @__PURE__ */ Et(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = f2();
  let i;
  var s = X(o);
  return lr(s, () => n() ?? dt), Z(o), $e(() => i = rn(o, i, {
    type: "button",
    ...r,
    class: `tf-btn nopan nodrag ${t.class ?? ""}`
  })), L(e, o), ce({
    get children() {
      return n();
    },
    set children(a) {
      n(a), y();
    }
  });
}
re(Ge, { children: {} }, [], [], !0);
var g2 = /* @__PURE__ */ ne("<input>");
function rd(e, t) {
  ue(t, !0);
  const n = /* @__PURE__ */ Et(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = g2();
  mu(r);
  let o;
  $e(() => o = rn(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), L(e, r), ce();
}
re(rd, {}, [], [], !0);
var h2 = /* @__PURE__ */ ne("<input>");
function _t(e, t) {
  ue(t, !0);
  const n = /* @__PURE__ */ Et(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = h2();
  mu(r);
  let o;
  $e(() => o = rn(r, o, {
    type: "text",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), L(e, r), ce();
}
re(_t, {}, [], [], !0);
var v2 = /* @__PURE__ */ ne("<textarea></textarea>");
function kt(e, t) {
  ue(t, !0);
  const n = /* @__PURE__ */ Et(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = v2();
  i1(r);
  let o;
  $e(() => o = rn(r, o, {
    ...n,
    class: `tf-textarea nodrag ${t.class ?? ""}`
  })), L(e, r), ce();
}
re(kt, {}, [], [], !0);
var p2 = /* @__PURE__ */ ne('<div role="button"><!></div>'), m2 = /* @__PURE__ */ ne("<div></div>");
function od(e, t) {
  const n = rt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = rt(n, ["items", "onChange", "activeIndex"]);
  ue(t, !1);
  let o = w(t, "items", 28, () => []), i = w(t, "onChange", 12, () => {
  }), s = w(t, "activeIndex", 12, 0);
  function a(c, f) {
    var d;
    s(f), (d = i()) == null || d(c, f);
  }
  He();
  var l = m2();
  let u;
  return zt(l, 5, o, Ai, (c, f, d) => {
    var g = p2();
    ae(g, "tabindex", d), g.__click = () => a(h(f), d), g.__keydown = (E) => {
      (E.key === "Enter" || E.key === " ") && (E.preventDefault(), a(h(f), d));
    };
    var p = X(g);
    {
      var x = (E) => {
        var m = Ie();
        $e(() => wn(m, h(f).label)), L(E, m);
      }, k = (E) => {
        var m = et(), _ = _e(m);
        lr(_, () => h(f).label ?? dt), L(E, m);
      };
      be(p, (E) => {
        typeof h(f).label == "string" ? E(x) : E(k, !1);
      });
    }
    Z(g), $e(() => Ct(g, 1, `tf-tabs-item ${(d === s() ? "active" : "") ?? ""}`)), L(c, g);
  }), Z(l), $e(() => u = rn(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), L(e, l), ce({
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
Di(["click", "keydown"]);
re(od, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var y2 = (e, t, n) => t(h(n)), w2 = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(h(n)));
}, _2 = /* @__PURE__ */ ne('<span class="tf-collapse-item-title-icon"><!></span>'), x2 = /* @__PURE__ */ ne('<div class="tf-collapse-item-description"><!></div>'), b2 = /* @__PURE__ */ ne('<div class="tf-collapse-item-content"><!></div>'), C2 = /* @__PURE__ */ ne('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), k2 = /* @__PURE__ */ ne("<div></div>");
const E2 = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function id(e, t) {
  ue(t, !0), je(e, E2);
  let n = w(t, "items", 7), r = w(t, "onChange", 7), o = w(t, "activeKeys", 31, () => Vt([]));
  function i(a) {
    var l;
    o().includes(a.key) ? o(o().filter((u) => u !== a.key)) : (o().push(a.key), o(o())), (l = r()) == null || l(a, o());
  }
  var s = k2();
  return zt(s, 21, n, Ai, (a, l, u) => {
    var c = C2(), f = X(c);
    ae(f, "tabindex", u), f.__click = [y2, i, l], f.__keydown = [w2, i, l];
    var d = X(f);
    {
      var g = (v) => {
        var b = _2(), N = X(b);
        Xn(N, {
          get target() {
            return h(l).icon;
          }
        }), Z(b), L(v, b);
      };
      be(d, (v) => {
        h(l).icon && v(g);
      });
    }
    var p = R(d, 2);
    Xn(p, {
      get target() {
        return h(l).title;
      }
    });
    var x = R(p, 2);
    Z(f);
    var k = R(f, 2);
    {
      var E = (v) => {
        var b = x2(), N = X(b);
        Xn(N, {
          get target() {
            return h(l).description;
          }
        }), Z(b), L(v, b);
      };
      be(k, (v) => {
        h(l).description && v(E);
      });
    }
    var m = R(k, 2);
    {
      var _ = (v) => {
        var b = b2(), N = X(b);
        Xn(N, {
          get target() {
            return h(l).content;
          }
        }), Z(b), L(v, b);
      };
      be(m, (v) => {
        o().includes(h(l).key) && v(_);
      });
    }
    Z(c), $e((v) => Ct(x, 1, `tf-collapse-item-title-arrow ${v ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(h(l).key) ? "rotate-90" : ""
    ]), L(a, c);
  }), Z(s), $e(() => {
    ae(s, "style", t.style), Ct(s, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), L(e, s), ce({
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
Di(["click", "keydown"]);
re(id, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Xn(e, t) {
  ue(t, !0);
  let n = w(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = et(), o = _e(r);
  {
    var i = (a) => {
      var l = et(), u = _e(l);
      lr(u, () => n() ?? dt), L(a, l);
    }, s = (a) => {
      var l = et(), u = _e(l);
      hu(u, n), L(a, l);
    };
    be(o, (a) => {
      typeof n() == "function" ? a(i) : a(s, !1);
    });
  }
  return L(e, r), ce({
    get target() {
      return n();
    },
    set target(a) {
      n(a), y();
    }
  });
}
re(Xn, { target: {} }, [], [], !0);
var $2 = (e, t, n) => t(h(n)), S2 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), P2 = /* @__PURE__ */ ne('<div class="tf-select-content-children"><!></div>'), N2 = /* @__PURE__ */ ne('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), T2 = /* @__PURE__ */ ne('<div class="tf-select-content nopan nodrag"><!></div>'), M2 = /* @__PURE__ */ ne("<!> <!>", 1), H2 = /* @__PURE__ */ ne('<div class="tf-select-input-placeholder"> </div>'), D2 = /* @__PURE__ */ ne('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), A2 = /* @__PURE__ */ ne("<div><!></div>");
function pn(e, t) {
  ue(t, !0);
  const n = (_, v = dt) => {
    var b = et(), N = _e(b);
    zt(N, 19, v, ($, T) => `${T}_${$.value}`, ($, T) => {
      var A = N2(), D = _e(A);
      D.__click = [$2, x, T];
      var O = X(D), V = X(O);
      {
        var z = (P) => {
          var M = S2();
          L(P, M);
        };
        be(V, (P) => {
          h(T).children && h(T).children.length > 0 && P(z);
        });
      }
      Z(O);
      var S = R(O, 2);
      Xn(S, {
        get target() {
          return h(T).label;
        }
      }), Z(D);
      var H = R(D, 2);
      {
        var C = (P) => {
          var M = P2(), I = X(M);
          n(I, () => h(T).children), Z(M), L(P, M);
        };
        be(H, (P) => {
          h(T).children && h(T).children.length > 0 && (l() || c().includes(h(T).value)) && P(C);
        });
      }
      L($, A);
    }), L(_, b);
  };
  let r = w(t, "items", 7), o = w(t, "onExpand", 7), i = w(t, "onSelect", 7), s = w(t, "value", 23, () => []), a = w(t, "defaultValue", 23, () => []), l = w(t, "expandAll", 7, !0), u = w(t, "multiple", 7, !1), c = w(t, "expandValue", 23, () => []), f = w(t, "placeholder", 7), d = /* @__PURE__ */ Et(t, [
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
  ]), g = /* @__PURE__ */ Me(() => {
    const _ = [], v = (b) => {
      for (let N of b)
        s().length > 0 ? s().includes(N.value) && _.push(N) : a().includes(N.value) && _.push(N), N.children && N.children.length > 0 && v(N.children);
    };
    return v(r()), _;
  }), p;
  function x(_) {
    var v, b;
    if (_.children && _.children.length > 0) {
      (v = o()) == null || v(_);
      return;
    } else
      p == null || p.hide(), (b = i()) == null || b(_);
  }
  var k = A2();
  let E;
  var m = X(k);
  return An(
    Vo(m, {
      floating: (v) => {
        var b = T2(), N = X(b);
        n(N, r), Z(b), L(v, b);
      },
      children: (v, b) => {
        var N = D2();
        let $;
        var T = X(N);
        zt(
          T,
          23,
          () => h(g),
          (A, D) => `${D}_${A.value}`,
          (A, D, O) => {
            var V = et(), z = _e(V);
            {
              var S = (C) => {
                var P = et(), M = _e(P);
                {
                  var I = (B) => {
                    Xn(B, {
                      get target() {
                        return h(D).label;
                      }
                    });
                  };
                  be(M, (B) => {
                    h(O) === 0 && B(I);
                  });
                }
                L(C, P);
              }, H = (C) => {
                var P = M2(), M = _e(P);
                Xn(M, {
                  get target() {
                    return h(D).label;
                  }
                });
                var I = R(M, 2);
                {
                  var B = (F) => {
                    var K = Ie(",");
                    L(F, K);
                  };
                  be(I, (F) => {
                    h(O) < h(g).length - 1 && F(B);
                  });
                }
                L(C, P);
              };
              be(z, (C) => {
                u() ? C(H, !1) : C(S);
              });
            }
            L(A, V);
          },
          (A) => {
            var D = H2(), O = X(D, !0);
            Z(D), $e(() => wn(O, f())), L(A, D);
          }
        ), Z(T), Te(2), Z(N), $e(() => $ = rn(N, $, {
          class: "tf-select-input nopan nodrag",
          ...d
        })), L(v, N);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (v) => p = v,
    () => p
  ), Z(k), $e(() => E = rn(k, E, {
    ...d,
    class: `tf-select ${d.class ?? ""}`
  })), L(e, k), ce({
    get items() {
      return r();
    },
    set items(_) {
      r(_), y();
    },
    get onExpand() {
      return o();
    },
    set onExpand(_) {
      o(_), y();
    },
    get onSelect() {
      return i();
    },
    set onSelect(_) {
      i(_), y();
    },
    get value() {
      return s();
    },
    set value(_ = []) {
      s(_), y();
    },
    get defaultValue() {
      return a();
    },
    set defaultValue(_ = []) {
      a(_), y();
    },
    get expandAll() {
      return l();
    },
    set expandAll(_ = !0) {
      l(_), y();
    },
    get multiple() {
      return u();
    },
    set multiple(_ = !1) {
      u(_), y();
    },
    get expandValue() {
      return c();
    },
    set expandValue(_ = []) {
      c(_), y();
    },
    get placeholder() {
      return f();
    },
    set placeholder(_) {
      f(_), y();
    }
  });
}
Di(["click"]);
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
const wo = Math.min, $r = Math.max, _i = Math.round, gn = (e) => ({
  x: e,
  y: e
}), V2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, O2 = {
  start: "end",
  end: "start"
};
function Ms(e, t, n) {
  return $r(e, wo(t, n));
}
function Ho(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function fr(e) {
  return e.split("-")[0];
}
function Do(e) {
  return e.split("-")[1];
}
function sd(e) {
  return e === "x" ? "y" : "x";
}
function fa(e) {
  return e === "y" ? "height" : "width";
}
function Ir(e) {
  return ["top", "bottom"].includes(fr(e)) ? "y" : "x";
}
function ga(e) {
  return sd(Ir(e));
}
function L2(e, t, n) {
  n === void 0 && (n = !1);
  const r = Do(e), o = ga(e), i = fa(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = xi(s)), [s, xi(s)];
}
function I2(e) {
  const t = xi(e);
  return [Hs(e), t, Hs(t)];
}
function Hs(e) {
  return e.replace(/start|end/g, (t) => O2[t]);
}
function z2(e, t, n) {
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
function R2(e, t, n, r) {
  const o = Do(e);
  let i = z2(fr(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Hs)))), i;
}
function xi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => V2[t]);
}
function B2(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ad(e) {
  return typeof e != "number" ? B2(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function bi(e) {
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
function Pl(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Ir(t), s = ga(t), a = fa(s), l = fr(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, d = r[a] / 2 - o[a] / 2;
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
const Y2 = async (e, t, n) => {
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
  } = Pl(u, r, l), d = r, g = {}, p = 0;
  for (let x = 0; x < a.length; x++) {
    const {
      name: k,
      fn: E
    } = a[x], {
      x: m,
      y: _,
      data: v,
      reset: b
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
    c = m ?? c, f = _ ?? f, g = {
      ...g,
      [k]: {
        ...g[k],
        ...v
      }
    }, b && p <= 50 && (p++, typeof b == "object" && (b.placement && (d = b.placement), b.rects && (u = b.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : b.rects), {
      x: c,
      y: f
    } = Pl(u, d, l)), x = -1);
  }
  return {
    x: c,
    y: f,
    placement: d,
    strategy: o,
    middlewareData: g
  };
};
async function ld(e, t) {
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
  } = Ho(t, e), p = ad(g), k = a[d ? f === "floating" ? "reference" : "floating" : f], E = bi(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(k))) == null || n ? k : k.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), m = f === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), v = await (i.isElement == null ? void 0 : i.isElement(_)) ? await (i.getScale == null ? void 0 : i.getScale(_)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, b = bi(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: m,
    offsetParent: _,
    strategy: l
  }) : m);
  return {
    top: (E.top - b.top + p.top) / v.y,
    bottom: (b.bottom - E.bottom + p.bottom) / v.y,
    left: (E.left - b.left + p.left) / v.x,
    right: (b.right - E.right + p.right) / v.x
  };
}
const Z2 = (e) => ({
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
    } = Ho(e, t) || {};
    if (u == null)
      return {};
    const f = ad(c), d = {
      x: n,
      y: r
    }, g = ga(o), p = fa(g), x = await s.getDimensions(u), k = g === "y", E = k ? "top" : "left", m = k ? "bottom" : "right", _ = k ? "clientHeight" : "clientWidth", v = i.reference[p] + i.reference[g] - d[g] - i.floating[p], b = d[g] - i.reference[g], N = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let $ = N ? N[_] : 0;
    (!$ || !await (s.isElement == null ? void 0 : s.isElement(N))) && ($ = a.floating[_] || i.floating[p]);
    const T = v / 2 - b / 2, A = $ / 2 - x[p] / 2 - 1, D = wo(f[E], A), O = wo(f[m], A), V = D, z = $ - x[p] - O, S = $ / 2 - x[p] / 2 + T, H = Ms(V, S, z), C = !l.arrow && Do(o) != null && S !== H && i.reference[p] / 2 - (S < V ? D : O) - x[p] / 2 < 0, P = C ? S < V ? S - V : S - z : 0;
    return {
      [g]: d[g] + P,
      data: {
        [g]: H,
        centerOffset: S - H - P,
        ...C && {
          alignmentOffset: P
        }
      },
      reset: C
    };
  }
}), X2 = function(e) {
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
        fallbackAxisSideDirection: p = "none",
        flipAlignment: x = !0,
        ...k
      } = Ho(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const E = fr(o), m = Ir(a), _ = fr(a) === a, v = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), b = d || (_ || !x ? [xi(a)] : I2(a)), N = p !== "none";
      !d && N && b.push(...R2(a, x, p, v));
      const $ = [a, ...b], T = await ld(t, k), A = [];
      let D = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && A.push(T[E]), f) {
        const S = L2(o, s, v);
        A.push(T[S[0]], T[S[1]]);
      }
      if (D = [...D, {
        placement: o,
        overflows: A
      }], !A.every((S) => S <= 0)) {
        var O, V;
        const S = (((O = i.flip) == null ? void 0 : O.index) || 0) + 1, H = $[S];
        if (H)
          return {
            data: {
              index: S,
              overflows: D
            },
            reset: {
              placement: H
            }
          };
        let C = (V = D.filter((P) => P.overflows[0] <= 0).sort((P, M) => P.overflows[1] - M.overflows[1])[0]) == null ? void 0 : V.placement;
        if (!C)
          switch (g) {
            case "bestFit": {
              var z;
              const P = (z = D.filter((M) => {
                if (N) {
                  const I = Ir(M.placement);
                  return I === m || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  I === "y";
                }
                return !0;
              }).map((M) => [M.placement, M.overflows.filter((I) => I > 0).reduce((I, B) => I + B, 0)]).sort((M, I) => M[1] - I[1])[0]) == null ? void 0 : z[0];
              P && (C = P);
              break;
            }
            case "initialPlacement":
              C = a;
              break;
          }
        if (o !== C)
          return {
            reset: {
              placement: C
            }
          };
      }
      return {};
    }
  };
};
async function W2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = fr(n), a = Do(n), l = Ir(n) === "y", u = ["left", "top"].includes(s) ? -1 : 1, c = i && l ? -1 : 1, f = Ho(t, e);
  let {
    mainAxis: d,
    crossAxis: g,
    alignmentAxis: p
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return a && typeof p == "number" && (g = a === "end" ? p * -1 : p), l ? {
    x: g * c,
    y: d * u
  } : {
    x: d * u,
    y: g * c
  };
}
const F2 = function(e) {
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
      } = t, l = await W2(t, e);
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
}, K2 = function(e) {
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
          fn: (k) => {
            let {
              x: E,
              y: m
            } = k;
            return {
              x: E,
              y: m
            };
          }
        },
        ...l
      } = Ho(e, t), u = {
        x: n,
        y: r
      }, c = await ld(t, l), f = Ir(fr(o)), d = sd(f);
      let g = u[d], p = u[f];
      if (i) {
        const k = d === "y" ? "top" : "left", E = d === "y" ? "bottom" : "right", m = g + c[k], _ = g - c[E];
        g = Ms(m, g, _);
      }
      if (s) {
        const k = f === "y" ? "top" : "left", E = f === "y" ? "bottom" : "right", m = p + c[k], _ = p - c[E];
        p = Ms(m, p, _);
      }
      const x = a.fn({
        ...t,
        [d]: g,
        [f]: p
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
function Wi() {
  return typeof window < "u";
}
function Fr(e) {
  return ud(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function It(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function In(e) {
  var t;
  return (t = (ud(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ud(e) {
  return Wi() ? e instanceof Node || e instanceof It(e).Node : !1;
}
function on(e) {
  return Wi() ? e instanceof Element || e instanceof It(e).Element : !1;
}
function mn(e) {
  return Wi() ? e instanceof HTMLElement || e instanceof It(e).HTMLElement : !1;
}
function Nl(e) {
  return !Wi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof It(e).ShadowRoot;
}
function Ao(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = sn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function q2(e) {
  return ["table", "td", "th"].includes(Fr(e));
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
function ha(e) {
  const t = va(), n = on(e) ? sn(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function G2(e) {
  let t = Jn(e);
  for (; mn(t) && !zr(t); ) {
    if (ha(t))
      return t;
    if (Fi(t))
      return null;
    t = Jn(t);
  }
  return null;
}
function va() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function zr(e) {
  return ["html", "body", "#document"].includes(Fr(e));
}
function sn(e) {
  return It(e).getComputedStyle(e);
}
function Ki(e) {
  return on(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Jn(e) {
  if (Fr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Nl(e) && e.host || // Fallback.
    In(e)
  );
  return Nl(t) ? t.host : t;
}
function cd(e) {
  const t = Jn(e);
  return zr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : mn(t) && Ao(t) ? t : cd(t);
}
function dd(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = cd(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = It(o);
  return i ? (Ds(s), t.concat(s, s.visualViewport || [], Ao(o) ? o : [], [])) : t.concat(o, dd(o, []));
}
function Ds(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function fd(e) {
  const t = sn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = mn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = _i(n) !== i || _i(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function gd(e) {
  return on(e) ? e : e.contextElement;
}
function Sr(e) {
  const t = gd(e);
  if (!mn(t))
    return gn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = fd(t);
  let s = (i ? _i(n.width) : n.width) / r, a = (i ? _i(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const U2 = /* @__PURE__ */ gn(0);
function hd(e) {
  const t = It(e);
  return !va() || !t.visualViewport ? U2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function j2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== It(e) ? !1 : t;
}
function _o(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = gd(e);
  let s = gn(1);
  t && (r ? on(r) && (s = Sr(r)) : s = Sr(e));
  const a = j2(i, n, r) ? hd(i) : gn(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, c = o.width / s.x, f = o.height / s.y;
  if (i) {
    const d = It(i), g = r && on(r) ? It(r) : r;
    let p = d, x = Ds(p);
    for (; x && r && g !== p; ) {
      const k = Sr(x), E = x.getBoundingClientRect(), m = sn(x), _ = E.left + (x.clientLeft + parseFloat(m.paddingLeft)) * k.x, v = E.top + (x.clientTop + parseFloat(m.paddingTop)) * k.y;
      l *= k.x, u *= k.y, c *= k.x, f *= k.y, l += _, u += v, p = It(x), x = Ds(p);
    }
  }
  return bi({
    width: c,
    height: f,
    x: l,
    y: u
  });
}
function pa(e, t) {
  const n = Ki(e).scrollLeft;
  return t ? t.left + n : _o(In(e)).left + n;
}
function vd(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    pa(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function J2(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = In(r), a = t ? Fi(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = gn(1);
  const c = gn(0), f = mn(r);
  if ((f || !f && !i) && ((Fr(r) !== "body" || Ao(s)) && (l = Ki(r)), mn(r))) {
    const g = _o(r);
    u = Sr(r), c.x = g.x + r.clientLeft, c.y = g.y + r.clientTop;
  }
  const d = s && !f && !i ? vd(s, l, !0) : gn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + d.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + d.y
  };
}
function Q2(e) {
  return Array.from(e.getClientRects());
}
function em(e) {
  const t = In(e), n = Ki(e), r = e.ownerDocument.body, o = $r(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = $r(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + pa(e);
  const a = -n.scrollTop;
  return sn(r).direction === "rtl" && (s += $r(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function tm(e, t) {
  const n = It(e), r = In(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const u = va();
    (!u || u && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
function nm(e, t) {
  const n = _o(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = mn(e) ? Sr(e) : gn(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function Tl(e, t, n) {
  let r;
  if (t === "viewport")
    r = tm(e, n);
  else if (t === "document")
    r = em(In(e));
  else if (on(t))
    r = nm(t, n);
  else {
    const o = hd(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return bi(r);
}
function pd(e, t) {
  const n = Jn(e);
  return n === t || !on(n) || zr(n) ? !1 : sn(n).position === "fixed" || pd(n, t);
}
function rm(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = dd(e, []).filter((a) => on(a) && Fr(a) !== "body"), o = null;
  const i = sn(e).position === "fixed";
  let s = i ? Jn(e) : e;
  for (; on(s) && !zr(s); ) {
    const a = sn(s), l = ha(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Ao(s) && !l && pd(e, s)) ? r = r.filter((c) => c !== s) : o = a, s = Jn(s);
  }
  return t.set(e, r), r;
}
function om(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Fi(t) ? [] : rm(t, this._c) : [].concat(n), r], a = s[0], l = s.reduce((u, c) => {
    const f = Tl(t, c, o);
    return u.top = $r(f.top, u.top), u.right = wo(f.right, u.right), u.bottom = wo(f.bottom, u.bottom), u.left = $r(f.left, u.left), u;
  }, Tl(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function im(e) {
  const {
    width: t,
    height: n
  } = fd(e);
  return {
    width: t,
    height: n
  };
}
function sm(e, t, n) {
  const r = mn(t), o = In(t), i = n === "fixed", s = _o(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = gn(0);
  if (r || !r && !i)
    if ((Fr(t) !== "body" || Ao(o)) && (a = Ki(t)), r) {
      const d = _o(t, !0, i, t);
      l.x = d.x + t.clientLeft, l.y = d.y + t.clientTop;
    } else o && (l.x = pa(o));
  const u = o && !r && !i ? vd(o, a) : gn(0), c = s.left + a.scrollLeft - l.x - u.x, f = s.top + a.scrollTop - l.y - u.y;
  return {
    x: c,
    y: f,
    width: s.width,
    height: s.height
  };
}
function us(e) {
  return sn(e).position === "static";
}
function Ml(e, t) {
  if (!mn(e) || sn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return In(e) === n && (n = n.ownerDocument.body), n;
}
function md(e, t) {
  const n = It(e);
  if (Fi(e))
    return n;
  if (!mn(e)) {
    let o = Jn(e);
    for (; o && !zr(o); ) {
      if (on(o) && !us(o))
        return o;
      o = Jn(o);
    }
    return n;
  }
  let r = Ml(e, t);
  for (; r && q2(r) && us(r); )
    r = Ml(r, t);
  return r && zr(r) && us(r) && !ha(r) ? n : r || G2(e) || n;
}
const am = async function(e) {
  const t = this.getOffsetParent || md, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: sm(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function lm(e) {
  return sn(e).direction === "rtl";
}
const um = {
  convertOffsetParentRelativeRectToViewportRelativeRect: J2,
  getDocumentElement: In,
  getClippingRect: om,
  getOffsetParent: md,
  getElementRects: am,
  getClientRects: Q2,
  getDimensions: im,
  getScale: Sr,
  isElement: on,
  isRTL: lm
}, cm = F2, dm = K2, fm = X2, gm = Z2, hm = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: um,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return Y2(e, t, {
    ...o,
    platform: i
  });
}, vm = ({
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
    hm(e, u, {
      placement: r,
      middleware: [
        cm(o),
        // 手动偏移配置
        fm(i),
        //自动翻转
        dm(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [gm({ element: c })] : []
      ]
    }).then(({ x: E, y: m, placement: _, middlewareData: v }) => {
      if (Object.assign(u.style, {
        left: `${E}px`,
        top: `${m}px`
      }), l) {
        const { x: b, y: N } = v.arrow, $ = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[_.split("-")[0]];
        Object.assign(c.style, {
          zIndex: -1,
          left: b != null ? `${b}px` : "",
          top: N != null ? `${N}px` : "",
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
  function p() {
    u.style.display = "none", l && (c.style.display = "none"), d = !1;
  }
  function x(E) {
    E.stopPropagation(), d ? p() : g();
  }
  function k(E) {
    u.contains(E.target) || p();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((E) => {
    e.addEventListener(E, x);
  }), document.addEventListener("click", k), {
    destroy() {
      t.forEach((E) => {
        e.removeEventListener(E, x);
      }), document.removeEventListener("click", k);
    },
    hide() {
      p();
    },
    isVisible() {
      return d;
    }
  };
};
var pm = /* @__PURE__ */ ne('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function Vo(e, t) {
  ue(t, !0);
  const n = w(t, "children", 7), r = w(t, "floating", 7), o = w(t, "placement", 7, "bottom");
  let i, s, a;
  xn(() => (a = vm({
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
  var u = pm(), c = X(u), f = X(c);
  lr(f, n), Z(c), An(c, (p) => i = p, () => i);
  var d = R(c, 2), g = X(d);
  return lr(g, r), Z(d), An(d, (p) => s = p, () => s), Z(u), L(e, u), ce({
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
re(Vo, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Je(e, t) {
  ue(t, !0);
  const n = w(t, "children", 7), r = w(t, "level", 7, 1), o = w(t, "mt", 7), i = w(t, "mb", 7);
  var s = et(), a = _e(s);
  return h1(a, () => `h${r()}`, !1, (l, u) => {
    let c;
    $e(() => c = rn(
      l,
      c,
      {
        class: "tf-heading",
        style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
      },
      void 0,
      l.namespaceURI === Ll,
      l.nodeName.includes("-")
    ));
    var f = et(), d = _e(f);
    lr(d, () => n() ?? dt), L(u, f);
  }), L(e, s), ce({
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
re(Je, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var mm = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const ym = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function qi(e, t) {
  ue(t, !0), je(e, ym);
  const n = /* @__PURE__ */ Et(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Ge(e, ct(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = mm();
      L(r, i);
    },
    $$slots: { default: !0 }
  })), ce();
}
re(qi, {}, [], [], !0);
const wm = () => {
  const e = Ke();
  return {
    deleteNode: (n) => {
      e.nodes.update((r) => r.filter((o) => o.id !== n)), e.edges.update(
        (r) => r.filter((o) => o.source !== n && o.target !== n)
      );
    }
  };
}, Rr = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, _m = () => {
  const { nodes: e, nodeLookup: t } = Ke();
  return {
    copyNode: (r) => {
      var s;
      const i = (s = q(t).get(r)) == null ? void 0 : s.internals.userNode;
      if (i) {
        const a = Rr(), l = {
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
var xm = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), bm = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), Cm = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), km = /* @__PURE__ */ ne('<div class="tf-node-toolbar svelte-44dmwv"><!> <!> <!></div>'), Em = /* @__PURE__ */ ne('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const $m = {
  hash: "svelte-44dmwv",
  code: ".tf-node-toolbar.svelte-44dmwv {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}"
};
function Cn(e, t) {
  ue(t, !0), je(e, $m);
  const n = w(t, "data", 7), r = w(t, "id", 7, ""), o = w(t, "icon", 7), i = w(t, "handle", 7), s = w(t, "children", 7), a = w(t, "allowExecute", 7, !0), l = w(t, "allowCopy", 7, !0), u = w(t, "allowDelete", 7, !0), c = w(t, "showSourceHandle", 7, !0), f = w(t, "showTargetHandle", 7, !0);
  let d = n().expand ? ["key"] : [];
  const { updateNodeData: g } = Bt(), p = [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ], { deleteNode: x } = wm(), { copyNode: k } = _m();
  var E = Em(), m = _e(E);
  {
    var _ = (V) => {
      nd(V, {
        get position() {
          return Ee.Top;
        },
        align: "end",
        children: (z, S) => {
          var H = km(), C = X(H);
          {
            var P = (K) => {
              Ge(K, {
                class: "tf-node-toolbar-item",
                children: (oe, J) => {
                  var W = xm();
                  L(oe, W);
                },
                $$slots: { default: !0 }
              });
            };
            be(C, (K) => {
              a() && K(P);
            });
          }
          var M = R(C, 2);
          {
            var I = (K) => {
              Ge(K, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  k(r());
                },
                children: (oe, J) => {
                  var W = bm();
                  L(oe, W);
                },
                $$slots: { default: !0 }
              });
            };
            be(M, (K) => {
              l() && K(I);
            });
          }
          var B = R(M, 2);
          {
            var F = (K) => {
              Ge(K, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  x(r());
                },
                children: (oe, J) => {
                  var W = Cm();
                  L(oe, W);
                },
                $$slots: { default: !0 }
              });
            };
            be(B, (K) => {
              u() && K(F);
            });
          }
          Z(H), L(z, H);
        },
        $$slots: { default: !0 }
      });
    };
    be(m, (V) => {
      (a() || l() || u()) && V(_);
    });
  }
  var v = R(m, 2), b = R(X(v), 2), N = X(b);
  id(N, {
    items: p,
    activeKeys: d,
    onChange: (V, z) => {
      g(r(), { expand: z == null ? void 0 : z.includes("key") });
    }
  }), Z(b), Z(v);
  var $ = R(v, 2);
  {
    var T = (V) => {
      jn(V, {
        type: "target",
        get position() {
          return Ee.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    be($, (V) => {
      f() && V(T);
    });
  }
  var A = R($, 2);
  {
    var D = (V) => {
      jn(V, {
        type: "source",
        get position() {
          return Ee.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    be(A, (V) => {
      c() && V(D);
    });
  }
  var O = R(A, 2);
  return lr(O, () => i() ?? dt), L(e, E), ce({
    get data() {
      return n();
    },
    set data(V) {
      n(V), y();
    },
    get id() {
      return r();
    },
    set id(V = "") {
      r(V), y();
    },
    get icon() {
      return o();
    },
    set icon(V) {
      o(V), y();
    },
    get handle() {
      return i();
    },
    set handle(V) {
      i(V), y();
    },
    get children() {
      return s();
    },
    set children(V) {
      s(V), y();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(V = !0) {
      a(V), y();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(V = !0) {
      l(V), y();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(V = !0) {
      u(V), y();
    },
    get showSourceHandle() {
      return c();
    },
    set showSourceHandle(V = !0) {
      c(V), y();
    },
    get showTargetHandle() {
      return f();
    },
    set showTargetHandle(V = !0) {
      f(V), y();
    }
  });
}
re(
  Cn,
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
], Sm = [
  {
    value: "ref",
    label: "引用"
  },
  {
    value: "input",
    label: "固定值"
  }
];
var Pm = /* @__PURE__ */ ne('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), Nm = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), Tm = /* @__PURE__ */ ne('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const Mm = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function wd(e, t) {
  ue(t, !0), je(e, Mm);
  const [n, r] = tt(), o = () => j(h(l), "$node", n), i = w(t, "parameter", 7), s = w(t, "index", 7);
  let a = mt(), l = /* @__PURE__ */ Me(() => pr(a)), u = /* @__PURE__ */ Me(() => {
    var T, A;
    return {
      ...i(),
      ...(A = (T = o()) == null ? void 0 : T.data) == null ? void 0 : A.parameters[s()]
    };
  });
  const { updateNodeData: c } = Bt(), f = (T) => {
    const A = T.target.value;
    c(a, (D) => {
      let O = D.data.parameters;
      return O[s()].name = A, { parameters: O };
    });
  }, d = (T) => {
    const A = T.target.checked;
    c(a, (D) => {
      let O = D.data.parameters;
      return O[s()].required = A, { parameters: O };
    });
  }, g = (T) => {
    const A = T.value;
    A && c(a, (D) => {
      let O = D.data.parameters;
      return O[s()].dataType = A, { parameters: O };
    });
  };
  let p;
  const x = () => {
    c(a, (T) => {
      let A = T.data.parameters;
      return A.splice(s(), 1), { parameters: [...A] };
    }), p == null || p.hide();
  };
  var k = Tm(), E = _e(k), m = X(E);
  _t(m, {
    style: "width: 100%;",
    get value() {
      return h(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: f
  }), Z(E);
  var _ = R(E, 2), v = X(_);
  rd(v, {
    get checked() {
      return h(u).required;
    },
    onchange: d
  }), Z(_);
  var b = R(_, 2), N = X(b);
  An(
    Vo(N, {
      placement: "bottom",
      floating: (A) => {
        var D = Pm(), O = X(D), V = R(X(O));
        const z = /* @__PURE__ */ Me(() => h(u).dataType ? [h(u).dataType] : ["String"]);
        pn(V, {
          items: yd,
          style: "width: 100%",
          onSelect: g,
          get value() {
            return h(z);
          }
        }), Z(O);
        var S = R(O, 2), H = R(X(S));
        kt(H, { rows: 1, style: "width: 100%;" }), Z(S);
        var C = R(S, 2), P = R(X(C));
        kt(P, { rows: 3, style: "width: 100%;" }), Z(C);
        var M = R(C, 2), I = X(M);
        Ge(I, {
          onclick: x,
          children: (B, F) => {
            Te();
            var K = Ie("删除");
            L(B, K);
          },
          $$slots: { default: !0 }
        }), Z(M), Z(D), L(A, D);
      },
      children: (A, D) => {
        Ge(A, {
          class: "input-btn-more",
          children: (O, V) => {
            var z = Nm();
            L(O, z);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (A) => p = A,
    () => p
  ), Z(b), L(e, k);
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
re(wd, { parameter: {}, index: {} }, [], [], !0);
var Hm = /* @__PURE__ */ ne('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), Dm = /* @__PURE__ */ ne('<div class="none-params svelte-3n0wca">无输入参数</div>'), Am = /* @__PURE__ */ ne('<div class="input-container svelte-3n0wca"><!> <!></div>');
const Vm = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function _d(e, t) {
  ue(t, !0), je(e, Vm);
  const [n, r] = tt(), o = () => j(h(s), "$node", n);
  let i = mt(), s = /* @__PURE__ */ Me(() => pr(i)), a = /* @__PURE__ */ Me(() => {
    var d, g;
    return [...((g = (d = o()) == null ? void 0 : d.data) == null ? void 0 : g.parameters) || []];
  });
  var l = Am(), u = X(l);
  {
    var c = (d) => {
      var g = Hm();
      Te(4), L(d, g);
    };
    be(u, (d) => {
      h(a).length !== 0 && d(c);
    });
  }
  var f = R(u, 2);
  zt(
    f,
    19,
    () => h(a),
    (d) => d.id,
    (d, g, p) => {
      wd(d, {
        get parameter() {
          return h(g);
        },
        get index() {
          return h(p);
        }
      });
    },
    (d) => {
      var g = Dm();
      L(d, g);
    }
  ), Z(l), L(e, l), ce(), r();
}
re(_d, {}, [], [], !0);
const xd = (e) => {
  !e || e.length == 0 || e.forEach((t) => {
    t.id || (t.id = Rr()), xd(t.children);
  });
}, zn = () => {
  const { updateNodeData: e } = Bt();
  return {
    addParameter: (t, n = "parameters", r) => {
      xd(r == null ? void 0 : r.children);
      const o = {
        ...r,
        id: Rr()
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
var Om = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), Lm = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Im = /* @__PURE__ */ ne('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const zm = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function bd(e, t) {
  ue(t, !0), je(e, zm);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Et(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: i } = zn();
  return Cn(e, ct(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    icon: (a) => {
      var l = Om();
      L(a, l);
    },
    children: (a, l) => {
      var u = Im(), c = _e(u), f = X(c);
      Je(f, {
        level: 3,
        children: (p, x) => {
          Te();
          var k = Ie("输入参数");
          L(p, k);
        },
        $$slots: { default: !0 }
      });
      var d = R(f, 2);
      Ge(d, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o);
        },
        children: (p, x) => {
          var k = Lm();
          L(p, k);
        },
        $$slots: { default: !0 }
      }), Z(c);
      var g = R(c, 2);
      _d(g, {}), L(a, u);
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
re(bd, { data: {} }, [], [], !0);
const Cd = (e, t, n) => {
  for (let r of n)
    r.target === t && r.source && (e.push(r.source), Cd(e, r.source, n));
}, Hl = (e, t) => {
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
}, Rm = (e = !1) => {
  const t = mt(), n = pr(t), { nodes: r, edges: o } = Ke();
  return Fn([n, r, o], ([i, s, a]) => {
    const l = [];
    if (e) {
      for (let u of s)
        if (u.parentId === i.id) {
          const c = Hl(u, u.parentId === i.id);
          c && l.push(c);
        }
    } else {
      const u = [];
      Cd(u, t, a);
      for (let c of s)
        if (u.includes(c.id)) {
          const f = Hl(c, c.parentId === i.id);
          f && l.push(f);
        }
    }
    return l;
  });
};
var Bm = /* @__PURE__ */ ne('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), Ym = /* @__PURE__ */ ne('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const Zm = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function kd(e, t) {
  ue(t, !0), je(e, Zm);
  const [n, r] = tt(), o = () => j(h(c), "$node", n), i = () => j(v, "$selectItems", n), s = w(t, "parameter", 7), a = w(t, "index", 7), l = w(t, "dataKeyName", 7);
  let u = mt(), c = /* @__PURE__ */ Me(() => pr(u)), f = /* @__PURE__ */ Me(() => {
    var H;
    return {
      ...s(),
      ...(H = o()) == null ? void 0 : H.data[l()][a()]
    };
  });
  const { updateNodeData: d } = Bt(), g = (H, C) => {
    d(u, (P) => {
      let M = P.data[l()];
      return M[a()] = { ...M[a()], [H]: C }, { [l()]: M };
    });
  }, p = (H) => {
    const C = H.target.value;
    g("name", C);
  }, x = (H) => {
    const C = H.target.value;
    g("value", C);
  }, k = (H) => {
    const C = H.value;
    g("ref", C);
  }, E = (H) => {
    const C = H.value;
    g("refType", C);
  };
  let m;
  const _ = () => {
    d(u, (H) => {
      let C = H.data[l()];
      return C.splice(a(), 1), { [l()]: [...C] };
    }), m == null || m.hide();
  }, v = Rm();
  var b = Ym(), N = _e(b), $ = X(N);
  _t($, {
    style: "width: 100%;",
    get value() {
      return h(f).name;
    },
    placeholder: "请输入参数名称",
    oninput: p
  }), Z(N);
  var T = R(N, 2), A = X(T);
  {
    var D = (H) => {
      _t(H, {
        get value() {
          return h(f).value;
        },
        placeholder: "请输入参数值",
        oninput: x
      });
    }, O = (H) => {
      const C = /* @__PURE__ */ Me(() => [h(f).ref]);
      pn(H, {
        get items() {
          return i();
        },
        style: "width: 100%",
        defaultValue: ["ref"],
        get value() {
          return h(C);
        },
        expandAll: !0,
        onSelect: k
      });
    };
    be(A, (H) => {
      h(f).refType === "input" ? H(D) : H(O, !1);
    });
  }
  Z(T);
  var V = R(T, 2), z = X(V);
  An(
    Vo(z, {
      placement: "bottom",
      floating: (C) => {
        var P = Bm(), M = X(P), I = R(X(M));
        const B = /* @__PURE__ */ Me(() => h(f).refType ? [h(f).refType] : []);
        pn(I, {
          items: Sm,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return h(B);
          },
          onSelect: E
        }), Z(M);
        var F = R(M, 2), K = R(X(F));
        kt(K, {
          rows: 1,
          style: "width: 100%;",
          onchange: (we) => {
            const Ce = we.target.value;
            g("defaultValue", Ce);
          }
        }), Z(F);
        var oe = R(F, 2), J = R(X(oe));
        kt(J, {
          rows: 3,
          style: "width: 100%;",
          onchange: (we) => {
            const Ce = we.target.value;
            g("description", Ce);
          }
        }), Z(oe);
        var W = R(oe, 2), de = X(W);
        Ge(de, {
          onclick: _,
          children: (we, Ce) => {
            Te();
            var fe = Ie("删除");
            L(we, fe);
          },
          $$slots: { default: !0 }
        }), Z(W), Z(P), L(C, P);
      },
      children: (C, P) => {
        qi(C, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (C) => m = C,
    () => m
  ), Z(V), L(e, b);
  var S = ce({
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
  return r(), S;
}
re(kd, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var Xm = /* @__PURE__ */ ne('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Wm = /* @__PURE__ */ ne('<div class="none-params svelte-1sm1mgi"> </div>'), Fm = /* @__PURE__ */ ne('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Km = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Ft(e, t) {
  ue(t, !0), je(e, Km);
  const [n, r] = tt(), o = () => j(h(l), "$node", n), i = w(t, "noneParameterText", 7, "无输入参数"), s = w(t, "dataKeyName", 7, "parameters");
  let a = mt(), l = /* @__PURE__ */ Me(() => pr(a)), u = /* @__PURE__ */ Me(() => {
    var x;
    return [...((x = o()) == null ? void 0 : x.data[s()]) || []];
  });
  var c = Fm(), f = X(c);
  {
    var d = (x) => {
      var k = Xm();
      Te(4), L(x, k);
    };
    be(f, (x) => {
      h(u).length !== 0 && x(d);
    });
  }
  var g = R(f, 2);
  zt(
    g,
    19,
    () => h(u),
    (x) => x.id,
    (x, k, E) => {
      kd(x, {
        get parameter() {
          return h(k);
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
      var k = Wm(), E = X(k, !0);
      Z(k), $e(() => wn(E, i())), L(x, k);
    }
  ), Z(c), L(e, c);
  var p = ce({
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
  return r(), p;
}
re(Ft, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var qm = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), Gm = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Um = /* @__PURE__ */ ne('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const jm = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function Ed(e, t) {
  ue(t, !0), je(e, jm);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Et(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: i } = zn();
  return Cn(e, ct(
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
        var l = qm();
        L(a, l);
      },
      children: (a, l) => {
        var u = Um(), c = _e(u), f = X(c);
        Je(f, {
          level: 3,
          children: (p, x) => {
            Te();
            var k = Ie("输出参数");
            L(p, k);
          },
          $$slots: { default: !0 }
        });
        var d = R(f, 2);
        Ge(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (p, x) => {
            var k = Gm();
            L(p, k);
          },
          $$slots: { default: !0 }
        }), Z(c);
        var g = R(c, 2);
        Ft(g, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs"
        }), L(a, u);
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
re(Ed, { data: {} }, [], [], !0);
const Gi = () => ar("tinyflow_options");
var Jm = /* @__PURE__ */ xe('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Qm = /* @__PURE__ */ ne('<div class="input-more-item svelte-1cfeest"><!></div>'), ey = /* @__PURE__ */ ne('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), ty = /* @__PURE__ */ ne('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const ny = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function $d(e, t) {
  ue(t, !0), je(e, ny);
  const [n, r] = tt(), o = () => j(h(u), "$node", n), i = w(t, "parameter", 7), s = w(t, "position", 7), a = w(t, "dataKeyName", 7);
  let l = mt(), u = /* @__PURE__ */ Me(() => pr(l)), c = /* @__PURE__ */ Me(() => {
    var I;
    let P = (I = o()) == null ? void 0 : I.data[a()], M;
    if (P && s().length > 0) {
      let B = P;
      for (let F = 0; F < s().length; F++) {
        const K = s()[F];
        F == s().length - 1 ? M = B[K] : B = B[K].children;
      }
    }
    return { ...i(), ...M };
  });
  const { updateNodeData: f } = Bt(), d = (P, M) => {
    f(l, (I) => {
      const B = I.data[a()];
      if (B && s().length > 0) {
        let F = B;
        for (let K = 0; K < s().length; K++) {
          const oe = s()[K];
          K == s().length - 1 ? F[oe] = { ...F[oe], [P]: M } : F = B[oe].children;
        }
      }
      return { [a()]: B };
    });
  }, g = (P) => {
    const M = P.target.value;
    d("name", M);
  }, p = (P) => {
    const M = P.value;
    d("dataType", M);
  };
  let x;
  const k = () => {
    f(l, (P) => {
      let M = P.data[a()];
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
    f(l, (P) => {
      let M = P.data[a()];
      if (M && s().length > 0) {
        let I = M;
        for (let B = 0; B < s().length; B++) {
          const F = s()[B];
          B == s().length - 1 ? I[F].children ? I[F].children.push({
            id: Rr(),
            name: "newParam",
            dataType: "String"
          }) : I[F].children = [
            {
              id: Rr(),
              name: "newParam",
              dataType: "String"
            }
          ] : I = I[F].children;
        }
      }
      return { [a()]: [...M] };
    });
  };
  var m = ty(), _ = _e(m), v = X(_);
  {
    var b = (P) => {
      var M = et(), I = _e(M);
      zt(I, 17, s, Ai, (B, F) => {
        Te();
        var K = Ie(" ");
        L(B, K);
      }), L(P, M);
    };
    be(v, (P) => {
      s().length > 1 && P(b);
    });
  }
  var N = R(v, 2);
  const $ = /* @__PURE__ */ Me(() => h(c).nameDisabled === !0);
  _t(N, {
    style: "width: 100%;",
    get value() {
      return h(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: g,
    get disabled() {
      return h($);
    }
  }), Z(_);
  var T = R(_, 2), A = X(T);
  const D = /* @__PURE__ */ Me(() => h(c).dataType ? [h(c).dataType] : []), O = /* @__PURE__ */ Me(() => h(c).dataTypeDisabled === !0);
  pn(A, {
    items: yd,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return h(D);
    },
    get disabled() {
      return h(O);
    },
    onSelect: p
  });
  var V = R(A, 2);
  {
    var z = (P) => {
      Ge(P, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: E,
        children: (M, I) => {
          var B = Jm();
          L(M, B);
        },
        $$slots: { default: !0 }
      });
    };
    be(V, (P) => {
      (h(c).dataType === "Object" || h(c).dataType === "Array") && h(c).addChildDisabled !== !0 && P(z);
    });
  }
  Z(T);
  var S = R(T, 2), H = X(S);
  An(
    Vo(H, {
      placement: "bottom",
      floating: (M) => {
        var I = ey(), B = X(I), F = R(X(B));
        kt(F, {
          rows: 1,
          style: "width: 100%;",
          onchange: (de) => {
            const we = de.target.value;
            d("defaultValue", we);
          }
        }), Z(B);
        var K = R(B, 2), oe = R(X(K));
        kt(oe, {
          rows: 3,
          style: "width: 100%;",
          onchange: (de) => {
            const we = de.target.value;
            d("description", we);
          }
        }), Z(K);
        var J = R(K, 2);
        {
          var W = (de) => {
            var we = Qm(), Ce = X(we);
            Ge(Ce, {
              onclick: k,
              children: (fe, ze) => {
                Te();
                var ie = Ie("删除");
                L(fe, ie);
              },
              $$slots: { default: !0 }
            }), Z(we), L(de, we);
          };
          be(J, (de) => {
            h(c).deleteDisabled !== !0 && de(W);
          });
        }
        Z(I), L(M, I);
      },
      children: (M, I) => {
        qi(M, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (M) => x = M,
    () => x
  ), Z(S), L(e, m);
  var C = ce({
    get parameter() {
      return i();
    },
    set parameter(P) {
      i(P), y();
    },
    get position() {
      return s();
    },
    set position(P) {
      s(P), y();
    },
    get dataKeyName() {
      return a();
    },
    set dataKeyName(P) {
      a(P), y();
    }
  });
  return r(), C;
}
re($d, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var ry = /* @__PURE__ */ ne("<!> <!>", 1), oy = /* @__PURE__ */ ne('<div class="none-params svelte-1sm1mgi"> </div>'), iy = /* @__PURE__ */ ne('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), sy = /* @__PURE__ */ ne('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const ay = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function er(e, t) {
  ue(t, !0), je(e, ay);
  const [n, r] = tt(), o = () => j(h(u), "$node", n), i = (k, E = dt, m = dt) => {
    var _ = et(), v = _e(_);
    zt(
      v,
      19,
      E,
      (b) => `${b.id}_${b.children ? b.children.length : 0}`,
      (b, N, $) => {
        var T = ry(), A = _e(T);
        const D = /* @__PURE__ */ Me(() => [...m(), h($)]);
        $d(A, {
          get parameter() {
            return h(N);
          },
          get position() {
            return h(D);
          },
          get dataKeyName() {
            return a();
          }
        });
        var O = R(A, 2);
        {
          var V = (z) => {
            var S = /* @__PURE__ */ pe(() => [...m(), h($)]);
            i(z, () => h(N).children, () => h(S));
          };
          be(O, (z) => {
            h(N).children && z(V);
          });
        }
        L(b, T);
      },
      (b) => {
        var N = et(), $ = _e(N);
        {
          var T = (A) => {
            var D = oy(), O = X(D, !0);
            Z(D), $e(() => wn(O, s())), L(A, D);
          };
          be($, (A) => {
            m().length === 0 && A(T);
          });
        }
        L(b, N);
      }
    ), L(k, _);
  }, s = w(t, "noneParameterText", 7, "无输出参数"), a = w(t, "dataKeyName", 7, "outputDefs");
  let l = mt(), u = /* @__PURE__ */ Me(() => pr(l)), c = /* @__PURE__ */ Me(() => {
    var k;
    return [...((k = o()) == null ? void 0 : k.data[a()]) || []];
  });
  var f = sy(), d = X(f);
  {
    var g = (k) => {
      var E = iy();
      Te(4), L(k, E);
    };
    be(d, (k) => {
      h(c).length !== 0 && k(g);
    });
  }
  var p = R(d, 2);
  i(p, () => h(c) || [], () => []), Z(f), L(e, f);
  var x = ce({
    get noneParameterText() {
      return s();
    },
    set noneParameterText(k = "无输出参数") {
      s(k), y();
    },
    get dataKeyName() {
      return a();
    },
    set dataKeyName(k = "outputDefs") {
      a(k), y();
    }
  });
  return r(), x;
}
re(er, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var ly = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), uy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), cy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), dy = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">模型</div> <div class="setting-item svelte-15t2v24"><!> <!></div> <div class="setting-title svelte-15t2v24">系统提示词</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">用户提示词</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const fy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Sd(e, t) {
  ue(t, !0), je(e, fy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Et(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: i } = zn(), s = Gi();
  let a = sr(Vt([]));
  xn(async () => {
    var c, f;
    const u = await ((f = (c = s.provider) == null ? void 0 : c.llm) == null ? void 0 : f.call(c));
    h(a).push(...u || []);
  });
  const { updateNodeData: l } = Bt();
  return Cn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var f = ly();
        L(c, f);
      },
      children: (c, f) => {
        var d = dy(), g = _e(d), p = X(g);
        Je(p, {
          level: 3,
          children: (C, P) => {
            Te();
            var M = Ie("输入参数");
            L(C, M);
          },
          $$slots: { default: !0 }
        });
        var x = R(p, 2);
        Ge(x, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (C, P) => {
            var M = uy();
            L(C, M);
          },
          $$slots: { default: !0 }
        }), Z(g);
        var k = R(g, 2);
        Ft(k, {});
        var E = R(k, 2);
        Je(E, {
          level: 3,
          mt: "10px",
          children: (C, P) => {
            Te();
            var M = Ie("模型设置");
            L(C, M);
          },
          $$slots: { default: !0 }
        });
        var m = R(E, 4), _ = X(m);
        const v = /* @__PURE__ */ Me(() => n().llmId ? [n().llmId] : []);
        pn(_, {
          get items() {
            return h(a);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (C) => {
            const P = C.value;
            l(o, () => ({ llmId: P }));
          },
          get value() {
            return h(v);
          }
        });
        var b = R(_, 2);
        qi(b, {}), Z(m);
        var N = R(m, 4), $ = X(N);
        const T = /* @__PURE__ */ Me(() => n().systemPrompt || "");
        kt($, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return h(T);
          },
          oninput: (C) => {
            l(o, { systemPrompt: C.target.value });
          }
        }), Z(N);
        var A = R(N, 4), D = X(A);
        const O = /* @__PURE__ */ Me(() => n().userPrompt || "");
        kt(D, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return h(O);
          },
          oninput: (C) => {
            l(o, { userPrompt: C.target.value });
          }
        }), Z(A);
        var V = R(A, 2), z = X(V);
        Je(z, {
          level: 3,
          mt: "10px",
          children: (C, P) => {
            Te();
            var M = Ie("输出参数");
            L(C, M);
          },
          $$slots: { default: !0 }
        });
        var S = R(z, 2);
        Ge(S, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (C, P) => {
            var M = cy();
            L(C, M);
          },
          $$slots: { default: !0 }
        }), Z(V);
        var H = R(V, 2);
        er(H, {}), L(c, d);
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
re(Sd, { data: {} }, [], [], !0);
var gy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), hy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), vy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), py = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const my = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Pd(e, t) {
  ue(t, !0), je(e, my);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Et(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: i } = zn(), { updateNodeData: s } = Bt(), a = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" }
  ];
  return Cn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = gy();
        L(u, c);
      },
      children: (u, c) => {
        var f = py(), d = _e(f), g = X(d);
        Je(g, {
          level: 3,
          children: (O, V) => {
            Te();
            var z = Ie("输入参数");
            L(O, z);
          },
          $$slots: { default: !0 }
        });
        var p = R(g, 2);
        Ge(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (O, V) => {
            var z = hy();
            L(O, z);
          },
          $$slots: { default: !0 }
        }), Z(d);
        var x = R(d, 2);
        Ft(x, {});
        var k = R(x, 2);
        Je(k, {
          level: 3,
          mt: "10px",
          children: (O, V) => {
            Te();
            var z = Ie("代码");
            L(O, z);
          },
          $$slots: { default: !0 }
        });
        var E = R(k, 4), m = X(E);
        const _ = /* @__PURE__ */ Me(() => n().engine ? [n().engine] : ["qlexpress"]);
        pn(m, {
          items: a,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (O) => {
            const V = O.value;
            s(o, () => ({ engine: V }));
          },
          get value() {
            return h(_);
          }
        }), Z(E);
        var v = R(E, 4), b = X(v);
        const N = /* @__PURE__ */ Me(() => n().code || "");
        kt(b, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: (O) => {
            s(o, () => ({ code: O.target.value }));
          },
          get value() {
            return h(N);
          }
        }), Z(v);
        var $ = R(v, 2), T = X($);
        Je(T, {
          level: 3,
          mt: "10px",
          children: (O, V) => {
            Te();
            var z = Ie("输出参数");
            L(O, z);
          },
          $$slots: { default: !0 }
        });
        var A = R(T, 2);
        Ge(A, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (O, V) => {
            var z = vy();
            L(O, z);
          },
          $$slots: { default: !0 }
        }), Z($);
        var D = R($, 2);
        er(D, {}), L(u, f);
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
re(Pd, { data: {} }, [], [], !0);
var yy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), wy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), _y = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const xy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Nd(e, t) {
  ue(t, !0), je(e, xy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Et(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: i } = zn(), { updateNodeData: s } = Bt();
  return Nr(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), Cn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = yy();
        L(l, u);
      },
      children: (l, u) => {
        var c = _y(), f = _e(c), d = X(f);
        Je(d, {
          level: 3,
          children: (N, $) => {
            Te();
            var T = Ie("输入参数");
            L(N, T);
          },
          $$slots: { default: !0 }
        });
        var g = R(d, 2);
        Ge(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (N, $) => {
            var T = wy();
            L(N, T);
          },
          $$slots: { default: !0 }
        }), Z(f);
        var p = R(f, 2);
        Ft(p, {});
        var x = R(p, 2);
        Je(x, {
          level: 3,
          mt: "10px",
          children: (N, $) => {
            Te();
            var T = Ie("代码");
            L(N, T);
          },
          $$slots: { default: !0 }
        });
        var k = R(x, 4), E = X(k);
        const m = /* @__PURE__ */ Me(() => n().template || "");
        kt(E, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: (N) => {
            s(o, () => ({ template: N.target.value }));
          },
          get value() {
            return h(m);
          }
        }), Z(k);
        var _ = R(k, 2), v = X(_);
        Je(v, {
          level: 3,
          mt: "10px",
          children: (N, $) => {
            Te();
            var T = Ie("输出参数");
            L(N, T);
          },
          $$slots: { default: !0 }
        }), Z(_);
        var b = R(_, 2);
        er(b, {}), L(l, c);
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
re(Nd, { data: {} }, [], [], !0);
var by = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), Cy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ky = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ey = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), $y = /* @__PURE__ */ ne('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), Sy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Py = /* @__PURE__ */ ne('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), Ny = /* @__PURE__ */ ne('<div style="width: 100%"><!></div>'), Ty = /* @__PURE__ */ ne('<div style="width: 100%"><!></div>'), My = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Hy = /* @__PURE__ */ ne('<div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1vtcqdz"><!> <!></div> <!> <div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="radio-group svelte-1vtcqdz"><label class="svelte-1vtcqdz"><!>none</label> <label class="svelte-1vtcqdz"><!>form-data</label> <label class="svelte-1vtcqdz"><!>x-www-form-urlencoded</label> <label class="svelte-1vtcqdz"><!>json</label> <label class="svelte-1vtcqdz"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1vtcqdz"><!> <!></div> <!>', 1);
const Dy = {
  hash: "svelte-1vtcqdz",
  code: ".heading.svelte-1vtcqdz {display:flex;margin-bottom:10px;}.radio-group.svelte-1vtcqdz {display:flex;margin:10px 0;}.radio-group.svelte-1vtcqdz label:where(.svelte-1vtcqdz) {display:flex;font-size:14px;}"
};
function Td(e, t) {
  ue(t, !0), je(e, Dy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Et(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: i } = zn(), { updateNodeData: s } = Bt();
  return Cn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = by();
        L(l, u);
      },
      children: (l, u) => {
        var c = Hy(), f = _e(c), d = X(f), g = X(d);
        pn(g, {
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
        var p = R(d, 2), x = X(p);
        _t(x, { placeholder: "请输入url", style: "width: 100%" }), Z(p), Z(f);
        var k = R(f, 2), E = X(k);
        Je(E, {
          level: 3,
          children: (he, se) => {
            Te();
            var ke = Ie("Http 头信息");
            L(he, ke);
          },
          $$slots: { default: !0 }
        });
        var m = R(E, 2);
        Ge(m, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "headers");
          },
          children: (he, se) => {
            var ke = Cy();
            L(he, ke);
          },
          $$slots: { default: !0 }
        }), Z(k);
        var _ = R(k, 2);
        Ft(_, { dataKeyName: "headers" });
        var v = R(_, 2), b = X(v);
        Je(b, {
          level: 3,
          children: (he, se) => {
            Te();
            var ke = Ie("参数");
            L(he, ke);
          },
          $$slots: { default: !0 }
        });
        var N = R(b, 2);
        Ge(N, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "urlParameters");
          },
          children: (he, se) => {
            var ke = ky();
            L(he, ke);
          },
          $$slots: { default: !0 }
        }), Z(v);
        var $ = R(v, 2);
        Ft($, { dataKeyName: "urlParameters" });
        var T = R($, 2);
        Je(T, {
          level: 3,
          mt: "10px",
          children: (he, se) => {
            Te();
            var ke = Ie("Body");
            L(he, ke);
          },
          $$slots: { default: !0 }
        });
        var A = R(T, 2), D = X(A), O = X(D);
        const V = /* @__PURE__ */ Me(() => !n().bodyType);
        _t(O, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return h(V);
          },
          onchange: (he) => {
            var se;
            (se = he.target) != null && se.checked && s(o, { bodyType: "" });
          }
        }), Te(), Z(D);
        var z = R(D, 2), S = X(z);
        const H = /* @__PURE__ */ Me(() => n().bodyType === "form-data");
        _t(S, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return h(H);
          },
          onchange: (he) => {
            var se;
            (se = he.target) != null && se.checked && s(o, { bodyType: "form-data" });
          }
        }), Te(), Z(z);
        var C = R(z, 2), P = X(C);
        const M = /* @__PURE__ */ Me(() => n().bodyType === "x-www-form-urlencoded");
        _t(P, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return h(M);
          },
          onchange: (he) => {
            var se;
            (se = he.target) != null && se.checked && s(o, { bodyType: "x-www-form-urlencoded" });
          }
        }), Te(), Z(C);
        var I = R(C, 2), B = X(I);
        const F = /* @__PURE__ */ Me(() => n().bodyType === "json");
        _t(B, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return h(F);
          },
          onchange: (he) => {
            var se;
            (se = he.target) != null && se.checked && s(o, { bodyType: "json" });
          }
        }), Te(), Z(I);
        var K = R(I, 2), oe = X(K);
        const J = /* @__PURE__ */ Me(() => n().bodyType === "raw");
        _t(oe, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return h(J);
          },
          onchange: (he) => {
            var se;
            (se = he.target) != null && se.checked && s(o, { bodyType: "raw" });
          }
        }), Te(), Z(K), Z(A);
        var W = R(A, 2);
        {
          var de = (he) => {
            var se = $y(), ke = _e(se), Ne = X(ke);
            Je(Ne, {
              level: 3,
              children: (Oe, ut) => {
                Te();
                var nt = Ie("参数");
                L(Oe, nt);
              },
              $$slots: { default: !0 }
            });
            var qe = R(Ne, 2);
            Ge(qe, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                i(o, "fromData");
              },
              children: (Oe, ut) => {
                var nt = Ey();
                L(Oe, nt);
              },
              $$slots: { default: !0 }
            }), Z(ke);
            var Re = R(ke, 2);
            Ft(Re, { dataKeyName: "fromData" }), L(he, se);
          };
          be(W, (he) => {
            n().bodyType === "form-data" && he(de);
          });
        }
        var we = R(W, 2);
        {
          var Ce = (he) => {
            var se = Py(), ke = _e(se), Ne = X(ke);
            Je(Ne, {
              level: 3,
              children: (Oe, ut) => {
                Te();
                var nt = Ie("参数");
                L(Oe, nt);
              },
              $$slots: { default: !0 }
            });
            var qe = R(Ne, 2);
            Ge(qe, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                i(o, "fromUrlencoded");
              },
              children: (Oe, ut) => {
                var nt = Sy();
                L(Oe, nt);
              },
              $$slots: { default: !0 }
            }), Z(ke);
            var Re = R(ke, 2);
            Ft(Re, { dataKeyName: "fromUrlencoded" }), L(he, se);
          };
          be(we, (he) => {
            n().bodyType === "x-www-form-urlencoded" && he(Ce);
          });
        }
        var fe = R(we, 2);
        {
          var ze = (he) => {
            var se = Ny(), ke = X(se);
            kt(ke, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Ne) => {
                s(o, { bodyJson: Ne.target.value });
              }
            }), Z(se), L(he, se);
          };
          be(fe, (he) => {
            n().bodyType === "json" && he(ze);
          });
        }
        var ie = R(fe, 2);
        {
          var ge = (he) => {
            var se = Ty(), ke = X(se);
            kt(ke, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Ne) => {
                s(o, { bodyRaw: Ne.target.value });
              }
            }), Z(se), L(he, se);
          };
          be(ie, (he) => {
            n().bodyType === "raw" && he(ge);
          });
        }
        var Ye = R(ie, 2), Ae = X(Ye);
        Je(Ae, {
          level: 3,
          mt: "10px",
          children: (he, se) => {
            Te();
            var ke = Ie("输出参数");
            L(he, ke);
          },
          $$slots: { default: !0 }
        });
        var Ze = R(Ae, 2);
        Ge(Ze, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (he, se) => {
            var ke = My();
            L(he, ke);
          },
          $$slots: { default: !0 }
        }), Z(Ye);
        var ee = R(Ye, 2);
        er(ee, {}), L(l, c);
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
re(Td, { data: {} }, [], [], !0);
var Ay = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), Vy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Oy = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Ly = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Md(e, t) {
  ue(t, !0), je(e, Ly);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Et(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: i } = zn(), s = Gi();
  let a = sr(Vt([]));
  xn(async () => {
    var c, f;
    const u = await ((f = (c = s.provider) == null ? void 0 : c.knowledge) == null ? void 0 : f.call(c));
    h(a).push(...u || []);
  });
  const { updateNodeData: l } = Bt();
  return Nr(() => {
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
  }), Cn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var f = Ay();
        L(c, f);
      },
      children: (c, f) => {
        var d = Oy(), g = _e(d), p = X(g);
        Je(p, {
          level: 3,
          children: (D, O) => {
            Te();
            var V = Ie("输入参数");
            L(D, V);
          },
          $$slots: { default: !0 }
        });
        var x = R(p, 2);
        Ge(x, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (D, O) => {
            var V = Vy();
            L(D, V);
          },
          $$slots: { default: !0 }
        }), Z(g);
        var k = R(g, 2);
        Ft(k, {});
        var E = R(k, 2);
        Je(E, {
          level: 3,
          mt: "10px",
          children: (D, O) => {
            Te();
            var V = Ie("知识库设置");
            L(D, V);
          },
          $$slots: { default: !0 }
        });
        var m = R(E, 4), _ = X(m);
        const v = /* @__PURE__ */ Me(() => n().knowledgeId ? [n().knowledgeId] : []);
        pn(_, {
          get items() {
            return h(a);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (D) => {
            const O = D.value;
            l(o, () => ({ knowledgeId: O }));
          },
          get value() {
            return h(v);
          }
        }), Z(m);
        var b = R(m, 4), N = X(b);
        _t(N, { placeholder: "搜索的数据条数", style: "width: 100%" }), Z(b);
        var $ = R(b, 2), T = X($);
        Je(T, {
          level: 3,
          mt: "10px",
          children: (D, O) => {
            Te();
            var V = Ie("输出参数");
            L(D, V);
          },
          $$slots: { default: !0 }
        }), Z($);
        var A = R($, 2);
        er(A, {}), L(c, d);
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
re(Md, { data: {} }, [], [], !0);
var Iy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), zy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ry = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">API 服务商</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">API Key</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">其他参数</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const By = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Hd(e, t) {
  ue(t, !0), je(e, By);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Et(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: i } = zn(), s = Gi();
  let a = sr(Vt([]));
  xn(async () => {
    var c;
    const u = await ((c = s.provider) == null ? void 0 : c.knowledge());
    h(a).push(...u || []);
  });
  const { updateNodeData: l } = Bt();
  return Nr(() => {
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
  }), Cn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var f = Iy();
        L(c, f);
      },
      children: (c, f) => {
        var d = Ry(), g = _e(d), p = X(g);
        Je(p, {
          level: 3,
          children: (C, P) => {
            Te();
            var M = Ie("输入参数");
            L(C, M);
          },
          $$slots: { default: !0 }
        });
        var x = R(p, 2);
        Ge(x, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (C, P) => {
            var M = zy();
            L(C, M);
          },
          $$slots: { default: !0 }
        }), Z(g);
        var k = R(g, 2);
        Ft(k, {});
        var E = R(k, 2);
        Je(E, {
          level: 3,
          mt: "10px",
          children: (C, P) => {
            Te();
            var M = Ie("搜索引擎设置");
            L(C, M);
          },
          $$slots: { default: !0 }
        });
        var m = R(E, 4), _ = X(m);
        const v = /* @__PURE__ */ Me(() => n().knowledgeId ? [n().knowledgeId] : []);
        pn(_, {
          get items() {
            return h(a);
          },
          style: "width: 100%",
          placeholder: "请选择 API 服务商",
          onSelect: (C) => {
            const P = C.value;
            l(o, () => ({ knowledgeId: P }));
          },
          get value() {
            return h(v);
          }
        }), Z(m);
        var b = R(m, 4), N = X(b);
        _t(N, {
          placeholder: "请输入 API Key",
          style: "width: 100%"
        }), Z(b);
        var $ = R(b, 4), T = X($);
        _t(T, { placeholder: "请输入关键字", style: "width: 100%" }), Z($);
        var A = R($, 4), D = X(A);
        _t(D, { placeholder: "搜索的数据条数", style: "width: 100%" }), Z(A);
        var O = R(A, 4), V = X(O);
        kt(V, {
          rows: 3,
          placeholder: "请输入其他参数（Property 格式）",
          style: "width: 100%"
        }), Z(O);
        var z = R(O, 2), S = X(z);
        Je(S, {
          level: 3,
          mt: "10px",
          children: (C, P) => {
            Te();
            var M = Ie("输出参数");
            L(C, M);
          },
          $$slots: { default: !0 }
        }), Z(z);
        var H = R(z, 2);
        er(H, {}), L(c, d);
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
re(Hd, { data: {} }, [], [], !0);
var Yy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), Zy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Xy = /* @__PURE__ */ ne('<div class="heading svelte-md8tgj"><!> <!></div> <!> <div class="heading svelte-md8tgj"><!></div> <!>', 1);
const Wy = {
  hash: "svelte-md8tgj",
  code: ".heading.svelte-md8tgj {display:flex;margin-bottom:10px;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function Dd(e, t) {
  ue(t, !0), je(e, Wy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Et(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: i } = zn(), s = Gi();
  let a = sr(Vt([]));
  return xn(async () => {
    var u;
    const l = await ((u = s.provider) == null ? void 0 : u.knowledge());
    h(a).push(...l || []);
  }), Cn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var f = Yy();
        L(c, f);
      },
      handle: (c) => {
        jn(c, {
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
        var d = Xy(), g = _e(d), p = X(g);
        Je(p, {
          level: 3,
          children: (v, b) => {
            Te();
            var N = Ie("循环变量");
            L(v, N);
          },
          $$slots: { default: !0 }
        });
        var x = R(p, 2);
        Ge(x, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (v, b) => {
            var N = Zy();
            L(v, N);
          },
          $$slots: { default: !0 }
        }), Z(g);
        var k = R(g, 2);
        Ft(k, {});
        var E = R(k, 2), m = X(E);
        Je(m, {
          level: 3,
          mt: "10px",
          children: (v, b) => {
            Te();
            var N = Ie("输出参数");
            L(v, N);
          },
          $$slots: { default: !0 }
        }), Z(E);
        var _ = R(E, 2);
        er(_, {}), L(c, d);
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
re(Dd, { data: {} }, [], [], !0);
const Fy = {
  startNode: bd,
  codeNode: Pd,
  llmNode: Sd,
  templateNode: Nd,
  httpNode: Td,
  knowledgeNode: Md,
  searchEngineNode: Hd,
  loopNode: Dd,
  endNode: Ed
};
var Ky = /* @__PURE__ */ ne("<!> ", 1);
function Ad(e, t) {
  ue(t, !0);
  const n = w(t, "icon", 7), r = w(t, "title", 7), o = w(t, "type", 7), i = w(t, "description", 7), s = w(t, "extra", 7);
  return Ge(e, {
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
      var c = Ky(), f = _e(c);
      hu(f, n);
      var d = R(f);
      $e(() => wn(d, ` ${r() ?? ""}`)), L(l, c);
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
re(
  Ad,
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
var qy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), Gy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), Uy = /* @__PURE__ */ ne('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"><!></div></div></div> <!></div>');
function Vd(e) {
  let t = sr("base"), n = sr("show");
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
  var i = Uy(), s = X(i), a = X(s), l = X(a);
  od(l, {
    style: "width: 100%",
    items: o,
    onChange: (p) => {
      G(t, Vt(p.value.toString()));
    }
  }), Z(a);
  var u = R(a, 2), c = X(u);
  zt(c, 21, () => r, Ai, (p, x) => {
    Ad(p, ct(() => h(x)));
  }), Z(c);
  var f = R(c, 2), d = X(f);
  Ge(d, {
    children: (p, x) => {
      Te();
      var k = Ie("测试业务按钮");
      L(p, k);
    },
    $$slots: { default: !0 }
  }), Z(f), Z(u), Z(s);
  var g = R(s, 2);
  Ge(g, {
    onclick: () => {
      G(n, Vt(h(n) ? "" : "show"));
    },
    children: (p, x) => {
      var k = et(), E = _e(k);
      {
        var m = (v) => {
          var b = qy();
          L(v, b);
        }, _ = (v) => {
          var b = Gy();
          L(v, b);
        };
        be(E, (v) => {
          h(n) === "show" ? v(m) : v(_, !1);
        });
      }
      L(p, k);
    },
    $$slots: { default: !0 }
  }), Z(i), $e(() => {
    Ct(i, 1, `tf-toolbar ${h(n) ?? ""}`), ae(c, "style", `display: ${(h(t) === "base" ? "flex" : "none") ?? ""}`), ae(f, "style", `display: ${(h(t) !== "base" ? "flex" : "none") ?? ""}`);
  }), L(e, i);
}
re(Vd, {}, [], [], !0);
const jy = () => {
  const { nodeLookup: e } = Ke();
  return {
    getNode: (n) => {
      var o;
      return (o = q(e).get(n)) == null ? void 0 : o.internals.userNode;
    }
  };
}, Jy = () => {
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
}, Qy = () => {
  const { edges: e } = Ke();
  return {
    getEdgesByTarget: (n) => q(e).filter((o) => o.target === n)
  };
};
var ew = /* @__PURE__ */ ne('<div class="panel-content svelte-1oe15vw"><div>边属性设置</div> <div class="setting-title svelte-1oe15vw">边条件设置</div> <div class="setting-item"><!></div></div>'), tw = /* @__PURE__ */ ne("<!> <!> <!> <!>", 1), nw = /* @__PURE__ */ ne('<div style="position: relative; height: 100%; width: 100%"><!> <!></div>');
const rw = {
  hash: "svelte-1oe15vw",
  code: ".panel-content.svelte-1oe15vw {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-1oe15vw {margin:10px 0;font-size:12px;color:#999;}"
};
function Od(e, t) {
  ue(t, !0), je(e, rw);
  const n = w(t, "onInit", 7), r = Bt();
  n()(r);
  let o = sr(!1);
  const i = (_) => {
    _.preventDefault(), _.dataTransfer && (_.dataTransfer.dropEffect = "move");
  }, s = (_) => {
    var T;
    _.preventDefault();
    const v = r.screenToFlowPosition({
      x: _.clientX - 250,
      y: _.clientY - 100
    }), b = (T = _.dataTransfer) == null ? void 0 : T.getData("application/tinyflow"), N = b ? JSON.parse(b) : {}, $ = {
      id: `node_${Rr()}`,
      position: v,
      data: {},
      ...N
    };
    Jo.addNode($), Jo.selectNodeOnly($.id);
  }, { getNode: a } = jy(), l = (_) => {
    const v = a(_.source), b = a(_.target);
    if (_.sourceHandle === "loop_handle" || v.parentId) {
      const N = r.getEdges();
      for (let $ of N)
        if ($.target === _.target) {
          const T = a($.source);
          if (_.sourceHandle === "loop_handle" && T.parentId !== v.id || v.parentId && T.parentId !== v.parentId)
            return !1;
        }
    }
    return !(!v.parentId && b.parentId && b.parentId !== v.id);
  }, { ensureParentInNodesBefore: u } = Jy(), c = (_, v) => {
    if (!v.isValid)
      return;
    const b = v.toNode;
    if (b.parentId)
      return;
    const N = v.fromNode, $ = v.fromHandle, T = { position: { ...b.position } };
    if ($.id === "loop_handle" ? T.parentId = N.id : N.parentId && (T.parentId = N.parentId), T.parentId) {
      const A = a(T.parentId);
      T.position = {
        x: b.position.x - A.position.x,
        y: b.position.y - A.position.y
      }, u(T.parentId, b.id), r.updateNode(b.id, T);
    }
  }, { getEdgesByTarget: f } = Qy(), d = (_) => {
    _.edges.forEach((b) => {
      const N = a(b.target);
      if (N.parentId) {
        const $ = f(b.target), T = a(N.parentId);
        if ($.length === 0)
          r.updateNode(N.id, {
            parentId: void 0,
            position: {
              x: N.position.x + T.position.x,
              y: N.position.y + T.position.y
            }
          });
        else {
          let A = !1;
          for (let D = 0; D < $.length; D++) {
            const O = $[D], V = a(O.source);
            if (V.parentId || V.type === "loopNode") {
              A = !0;
              break;
            }
          }
          A || r.updateNode(N.id, {
            parentId: void 0,
            position: {
              x: N.position.x + T.position.x,
              y: N.position.y + T.position.y
            }
          });
        }
      }
    });
  }, g = (_, v) => {
    console.log("onconnectstart: ", _, v);
  }, p = (_) => {
    console.log("onconnect: ", _);
  };
  var x = nw(), k = X(x);
  Vd(k);
  var E = R(k, 2);
  const m = /* @__PURE__ */ Me(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: po.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  return Zc(E, ct({ nodeTypes: Fy }, Jo, {
    class: "tinyflow-logo",
    isValidConnection: l,
    onconnectend: c,
    onconnectstart: g,
    onconnect: p,
    connectionRadius: 50,
    ondelete: d,
    onclick: (_) => {
      const v = _.target;
      v.classList.contains("svelte-flow__edge-interaction") || v.classList.contains("panel-content") || v.closest(".panel-content") || G(o, !1);
    },
    get defaultEdgeOptions() {
      return h(m);
    },
    $$events: {
      drop: s,
      dragover: i,
      edgeclick: () => {
        G(o, !0);
      }
    },
    children: (_, v) => {
      var b = tw(), N = _e(b);
      Qc(N, {});
      var $ = R(N, 2);
      Uc($, {});
      var T = R($, 2);
      td(T, {});
      var A = R(T, 2);
      {
        var D = (O) => {
          Mo(O, {
            children: (V, z) => {
              var S = ew(), H = R(X(S), 4), C = X(H);
              kt(C, {
                rows: 3,
                placeholder: "请输入边条件",
                style: "width: 100%",
                oninput: (P) => {
                }
              }), Z(H), Z(S), L(V, S);
            },
            $$slots: { default: !0 }
          });
        };
        be(A, (O) => {
          h(o) && O(D);
        });
      }
      L(_, b);
    },
    $$slots: { default: !0 }
  })), Z(x), L(e, x), ce({
    get onInit() {
      return n();
    },
    set onInit(_) {
      n(_), y();
    }
  });
}
re(Od, { onInit: {} }, [], [], !0);
function ow(e, t) {
  ue(t, !0);
  const n = w(t, "options", 7), r = w(t, "onInit", 7), { data: o } = n();
  return Jo.init((o == null ? void 0 : o.nodes) || [], (o == null ? void 0 : o.edges) || []), Mr("tinyflow_options", n()), Xc(e, {
    fitView: !0,
    children: (i, s) => {
      Od(i, {
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
customElements.define("tinyflow-component", re(ow, { options: {}, onInit: {} }, [], [], !1));
export {
  cw as Tinyflow
};
//# sourceMappingURL=index.js.map
