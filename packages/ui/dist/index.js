var Ud = Object.defineProperty;
var Pa = (e) => {
  throw TypeError(e);
};
var jd = (e, t, n) => t in e ? Ud(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ht = (e, t, n) => jd(e, typeof t != "symbol" ? t + "" : t, n), qi = (e, t, n) => t.has(e) || Pa("Cannot " + n);
var Je = (e, t, n) => (qi(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Fn = (e, t, n) => t.has(e) ? Pa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Kr = (e, t, n, r) => (qi(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Ma = (e, t, n) => (qi(e, t, "access private method"), n);
const Jd = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Jd);
let zr = !1, Qd = !1;
function ef() {
  zr = !0;
}
ef();
const zs = 1, Hs = 2, Ol = 4, tf = 8, nf = 16, rf = 1, of = 2, Dl = 4, sf = 8, af = 16, Ll = 1, lf = 2, zl = "[", Vs = "[!", Is = "]", fr = {}, xt = Symbol(), Hl = "http://www.w3.org/2000/svg", as = !1, Ft = 2, Vl = 4, xi = 8, Rs = 16, Nn = 32, Hr = 64, Go = 128, It = 256, Uo = 512, gt = 1024, Pn = 2048, nr = 4096, wn = 8192, bi = 16384, uf = 32768, Vr = 65536, cf = 1 << 17, df = 1 << 19, Il = 1 << 20, zn = Symbol("$state"), Bs = Symbol("legacy props"), ff = Symbol("");
var yo = Array.isArray, gf = Array.prototype.indexOf, Ys = Array.from, jo = Object.keys, Qr = Object.defineProperty, _n = Object.getOwnPropertyDescriptor, Rl = Object.getOwnPropertyDescriptors, hf = Object.prototype, vf = Array.prototype, Xs = Object.getPrototypeOf;
function Fr(e) {
  return typeof e == "function";
}
const st = () => {
};
function pf(e) {
  return e();
}
function eo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const mf = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Jo = !1, Qo = !1, ls = [], us = [];
function Bl() {
  Jo = !1;
  const e = ls.slice();
  ls = [], eo(e);
}
function Yl() {
  Qo = !1;
  const e = us.slice();
  us = [], eo(e);
}
function wo(e) {
  Jo || (Jo = !0, queueMicrotask(Bl)), ls.push(e);
}
function yf(e) {
  Qo || (Qo = !0, mf(Yl)), us.push(e);
}
function wf() {
  Jo && Bl(), Qo && Yl();
}
function Xl(e) {
  return e === this.v;
}
function Ws(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ks(e) {
  return !Ws(e, this.v);
}
function _f(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function xf() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function bf(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Cf() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function kf() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Ef(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Sf() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Nf() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Pf() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Mf() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ct(e, t) {
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
function cs(e) {
  return /* @__PURE__ */ Wl(Ct(e));
}
// @__NO_SIDE_EFFECTS__
function _o(e, t = !1) {
  var r;
  const n = Ct(e);
  return t || (n.equals = Ks), zr && ze !== null && ze.l !== null && ((r = ze.l).s ?? (r.s = [])).push(n), n;
}
function te(e, t = !1) {
  return /* @__PURE__ */ Wl(/* @__PURE__ */ _o(e, t));
}
// @__NO_SIDE_EFFECTS__
function Wl(e) {
  return Be !== null && !en && Be.f & Ft && (tn === null ? Of([e]) : tn.push(e)), e;
}
function F(e, t) {
  return Be !== null && !en && Pi() && Be.f & (Ft | Rs) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (tn === null || !tn.includes(e)) && Mf(), ds(e, t);
}
function ds(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = Ql(), Kl(e, Pn), Pi() && Ie !== null && Ie.f & gt && !(Ie.f & (Nn | Hr)) && (vn === null ? Df([e]) : vn.push(e))), t;
}
function $a(e, t = 1) {
  var n = h(e), r = t === 1 ? n++ : n--;
  return F(e, n), r;
}
function Kl(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Pi(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      a & Pn || !r && s === Ie || (Zt(s, t), a & (gt | It) && (a & Ft ? Kl(
        /** @type {Derived} */
        s,
        nr
      ) : Si(
        /** @type {Effect} */
        s
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Fe(e) {
  var t = Ft | Pn, n = Be !== null && Be.f & Ft ? (
    /** @type {Derived} */
    Be
  ) : null;
  return Ie === null || n !== null && n.f & It ? t |= It : Ie.f |= Il, {
    ctx: ze,
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
    parent: n ?? Ie
  };
}
// @__NO_SIDE_EFFECTS__
function ge(e) {
  const t = /* @__PURE__ */ Fe(e);
  return t.equals = Ks, t;
}
function Fl(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Rt(
        /** @type {Effect} */
        t[n]
      );
  }
}
function $f(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & Ft))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Tf(e) {
  var t, n = Ie;
  Bn($f(e));
  try {
    Fl(e), t = tu(e);
  } finally {
    Bn(n);
  }
  return t;
}
function Zl(e) {
  var t = Tf(e), n = (Dn || e.f & It) && e.deps !== null ? nr : gt;
  Zt(e, n), e.equals(t) || (e.v = t, e.wv = Ql());
}
function Ci(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let me = !1;
function Mt(e) {
  me = e;
}
let Me;
function mt(e) {
  if (e === null)
    throw Ci(), fr;
  return Me = e;
}
function on() {
  return mt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ ln(Me)
  );
}
function G(e) {
  if (me) {
    if (/* @__PURE__ */ ln(Me) !== null)
      throw Ci(), fr;
    Me = e;
  }
}
function at(e = 1) {
  if (me) {
    for (var t = e, n = Me; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ ln(n);
    Me = n;
  }
}
function fs() {
  for (var e = 0, t = Me; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === Is) {
        if (e === 0) return t;
        e -= 1;
      } else (n === zl || n === Vs) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ln(t)
    );
    t.remove(), t = r;
  }
}
function Qt(e, t = null, n) {
  if (typeof e != "object" || e === null || zn in e)
    return e;
  const r = Xs(e);
  if (r !== hf && r !== vf)
    return e;
  var o = /* @__PURE__ */ new Map(), i = yo(e), s = Ct(0);
  i && o.set("length", Ct(
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
        return f === void 0 ? (f = Ct(c.value), o.set(u, f)) : F(f, Qt(c.value, a)), !0;
      },
      deleteProperty(l, u) {
        var c = o.get(u);
        if (c === void 0)
          u in l && o.set(u, Ct(xt));
        else {
          if (i && typeof u == "string") {
            var f = (
              /** @type {Source<number>} */
              o.get("length")
            ), d = Number(u);
            Number.isInteger(d) && d < f.v && F(f, d);
          }
          F(c, xt), Ta(s);
        }
        return !0;
      },
      get(l, u, c) {
        var v;
        if (u === zn)
          return e;
        var f = o.get(u), d = u in l;
        if (f === void 0 && (!d || (v = _n(l, u)) != null && v.writable) && (f = Ct(Qt(d ? l[u] : xt, a)), o.set(u, f)), f !== void 0) {
          var g = h(f);
          return g === xt ? void 0 : g;
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
          if (d !== void 0 && g !== xt)
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
        if (u === zn)
          return !0;
        var c = o.get(u), f = c !== void 0 && c.v !== xt || Reflect.has(l, u);
        if (c !== void 0 || Ie !== null && (!f || (g = _n(l, u)) != null && g.writable)) {
          c === void 0 && (c = Ct(f ? Qt(l[u], a) : xt), o.set(u, c));
          var d = h(c);
          if (d === xt)
            return !1;
        }
        return f;
      },
      set(l, u, c, f) {
        var b;
        var d = o.get(u), g = u in l;
        if (i && u === "length")
          for (var v = c; v < /** @type {Source<number>} */
          d.v; v += 1) {
            var x = o.get(v + "");
            x !== void 0 ? F(x, xt) : v in l && (x = Ct(xt), o.set(v + "", x));
          }
        d === void 0 ? (!g || (b = _n(l, u)) != null && b.writable) && (d = Ct(void 0), F(d, Qt(c, a)), o.set(u, d)) : (g = d.v !== xt, F(d, Qt(c, a)));
        var C = Reflect.getOwnPropertyDescriptor(l, u);
        if (C != null && C.set && C.set.call(f, c), !g) {
          if (i && typeof u == "string") {
            var S = (
              /** @type {Source<number>} */
              o.get("length")
            ), p = Number(u);
            Number.isInteger(p) && p >= S.v && F(S, p + 1);
          }
          Ta(s);
        }
        return !0;
      },
      ownKeys(l) {
        h(s);
        var u = Reflect.ownKeys(l).filter((d) => {
          var g = o.get(d);
          return g === void 0 || g.v !== xt;
        });
        for (var [c, f] of o)
          f.v !== xt && !(c in l) && u.push(c);
        return u;
      },
      setPrototypeOf() {
        Nf();
      }
    }
  );
}
function Ta(e, t = 1) {
  F(e, e.v + t);
}
var bt, ql, Gl, Ul;
function gs() {
  if (bt === void 0) {
    bt = window, ql = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    Gl = _n(t, "firstChild").get, Ul = _n(t, "nextSibling").get, e.__click = void 0, e.__className = "", e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function bn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function pt(e) {
  return Gl.call(e);
}
// @__NO_SIDE_EFFECTS__
function ln(e) {
  return Ul.call(e);
}
function Q(e, t) {
  if (!me)
    return /* @__PURE__ */ pt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ pt(Me)
  );
  if (n === null)
    n = Me.appendChild(bn());
  else if (t && n.nodeType !== 3) {
    var r = bn();
    return n == null || n.before(r), mt(r), r;
  }
  return mt(n), n;
}
function we(e, t) {
  if (!me) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ pt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ ln(n) : n;
  }
  return Me;
}
function U(e, t = 1, n = !1) {
  let r = me ? Me : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ ln(r);
  if (!me)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var s = bn();
    return r === null ? o == null || o.after(s) : r.before(s), mt(s), s;
  }
  return mt(r), /** @type {TemplateNode} */
  r;
}
function Fs(e) {
  e.textContent = "";
}
const jl = 0, Af = 1;
let Bo = !1, Yo = jl, to = !1, no = null, gr = !1, Zs = !1;
function Aa(e) {
  gr = e;
}
function Oa(e) {
  Zs = e;
}
let Zn = [], hr = 0;
let Be = null, en = !1;
function Rn(e) {
  Be = e;
}
let Ie = null;
function Bn(e) {
  Ie = e;
}
let tn = null;
function Of(e) {
  tn = e;
}
let vt = null, Nt = 0, vn = null;
function Df(e) {
  vn = e;
}
let Jl = 1, ei = 0, Dn = !1;
function Ql() {
  return ++Jl;
}
function Ir(e) {
  var f;
  var t = e.f;
  if (t & Pn)
    return !0;
  if (t & nr) {
    var n = e.deps, r = (t & It) !== 0;
    if (n !== null) {
      var o, i, s = (t & Uo) !== 0, a = r && Ie !== null && !Dn, l = n.length;
      if (s || a) {
        var u = (
          /** @type {Derived} */
          e
        ), c = u.parent;
        for (o = 0; o < l; o++)
          i = n[o], (s || !((f = i == null ? void 0 : i.reactions) != null && f.includes(u))) && (i.reactions ?? (i.reactions = [])).push(u);
        s && (u.f ^= Uo), a && c !== null && !(c.f & It) && (u.f ^= It);
      }
      for (o = 0; o < l; o++)
        if (i = n[o], Ir(
          /** @type {Derived} */
          i
        ) && Zl(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!r || Ie !== null && !Dn) && Zt(e, gt);
  }
  return !1;
}
function Lf(e, t) {
  for (var n = t; n !== null; ) {
    if (n.f & Go)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= Go;
      }
    n = n.parent;
  }
  throw Bo = !1, e;
}
function zf(e) {
  return (e.f & bi) === 0 && (e.parent === null || (e.parent.f & Go) === 0);
}
function ki(e, t, n, r) {
  if (Bo) {
    if (n === null && (Bo = !1), zf(t))
      throw e;
    return;
  }
  n !== null && (Bo = !0);
  {
    Lf(e, t);
    return;
  }
}
function eu(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      i.f & Ft ? eu(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? Zt(i, Pn) : i.f & gt && Zt(i, nr), Si(
        /** @type {Effect} */
        i
      ));
    }
}
function tu(e) {
  var g;
  var t = vt, n = Nt, r = vn, o = Be, i = Dn, s = tn, a = ze, l = en, u = e.f;
  vt = /** @type {null | Value[]} */
  null, Nt = 0, vn = null, Be = u & (Nn | Hr) ? null : e, Dn = (u & It) !== 0 && (!gr || o === null || l), tn = null, Da(e.ctx), en = !1, ei++;
  try {
    var c = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (vt !== null) {
      var d;
      if (ti(e, Nt), f !== null && Nt > 0)
        for (f.length = Nt + vt.length, d = 0; d < vt.length; d++)
          f[Nt + d] = vt[d];
      else
        e.deps = f = vt;
      if (!Dn)
        for (d = Nt; d < f.length; d++)
          ((g = f[d]).reactions ?? (g.reactions = [])).push(e);
    } else f !== null && Nt < f.length && (ti(e, Nt), f.length = Nt);
    if (Pi() && vn !== null && !en && f !== null && !(e.f & (Ft | nr | Pn)))
      for (d = 0; d < /** @type {Source[]} */
      vn.length; d++)
        eu(
          vn[d],
          /** @type {Effect} */
          e
        );
    return o !== null && ei++, c;
  } finally {
    vt = t, Nt = n, vn = r, Be = o, Dn = i, tn = s, Da(a), en = l;
  }
}
function Hf(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = gf.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && t.f & Ft && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (vt === null || !vt.includes(t)) && (Zt(t, nr), t.f & (It | Uo) || (t.f ^= Uo), Fl(
    /** @type {Derived} **/
    t
  ), ti(
    /** @type {Derived} **/
    t,
    0
  ));
}
function ti(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Hf(e, n[r]);
}
function Ei(e) {
  var t = e.f;
  if (!(t & bi)) {
    Zt(e, gt);
    var n = Ie, r = ze;
    Ie = e;
    try {
      t & Rs ? Ff(e) : au(e), su(e);
      var o = tu(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = Jl;
      var i = e.deps, s;
      as && Qd && e.f & Pn;
    } catch (a) {
      ki(a, e, n, r || e.ctx);
    } finally {
      Ie = n;
    }
  }
}
function nu() {
  if (hr > 1e3) {
    hr = 0;
    try {
      Cf();
    } catch (e) {
      if (no !== null)
        ki(e, no, null);
      else
        throw e;
    }
  }
  hr++;
}
function ru(e) {
  var t = e.length;
  if (t !== 0) {
    nu();
    var n = gr;
    gr = !0;
    try {
      for (var r = 0; r < t; r++) {
        var o = e[r];
        o.f & gt || (o.f ^= gt);
        var i = Rf(o);
        Vf(i);
      }
    } finally {
      gr = n;
    }
  }
}
function Vf(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if (!(r.f & (bi | wn)))
        try {
          Ir(r) && (Ei(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? lu(r) : r.fn = null));
        } catch (o) {
          ki(o, r, null, r.ctx);
        }
    }
}
function If() {
  if (to = !1, hr > 1001)
    return;
  const e = Zn;
  Zn = [], ru(e), to || (hr = 0, no = null);
}
function Si(e) {
  Yo === jl && (to || (to = !0, queueMicrotask(If))), no = e;
  for (var t = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (Hr | Nn)) {
      if (!(n & gt)) return;
      t.f ^= gt;
    }
  }
  Zn.push(t);
}
function Rf(e) {
  var t = [], n = e.first;
  e: for (; n !== null; ) {
    var r = n.f, o = (r & Nn) !== 0, i = o && (r & gt) !== 0, s = n.next;
    if (!i && !(r & wn)) {
      if (r & Vl)
        t.push(n);
      else if (o)
        n.f ^= gt;
      else {
        var a = Be;
        try {
          Be = n, Ir(n) && Ei(n);
        } catch (c) {
          ki(c, n, null, n.ctx);
        } finally {
          Be = a;
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
  var t = Yo, n = Zn;
  try {
    nu();
    const o = [];
    Yo = Af, Zn = o, to = !1, ru(n);
    var r = e == null ? void 0 : e();
    return wf(), (Zn.length > 0 || o.length > 0) && y(), hr = 0, no = null, r;
  } finally {
    Yo = t, Zn = n;
  }
}
function h(e) {
  var t = e.f, n = (t & Ft) !== 0;
  if (Be !== null && !en) {
    tn !== null && tn.includes(e) && Pf();
    var r = Be.deps;
    e.rv < ei && (e.rv = ei, vt === null && r !== null && r[Nt] === e ? Nt++ : vt === null ? vt = [e] : (!Dn || !vt.includes(e)) && vt.push(e));
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), i = o.parent;
    i !== null && !(i.f & It) && (o.f ^= It);
  }
  return n && (o = /** @type {Derived} */
  e, Ir(o) && Zl(o)), e.v;
}
function sn(e) {
  var t = en;
  try {
    return en = !0, e();
  } finally {
    en = t;
  }
}
const Bf = -7169;
function Zt(e, t) {
  e.f = e.f & Bf | t;
}
function K(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (zn in e)
      hs(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && zn in n && hs(n);
      }
  }
}
function hs(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        hs(e[r], t);
      } catch {
      }
    const n = Xs(e);
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
function ou(e) {
  Ie === null && Be === null && bf(), Be !== null && Be.f & It && Ie === null && xf(), Zs && _f();
}
function Yf(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function rr(e, t, n, r = !0) {
  var o = (e & Hr) !== 0, i = Ie, s = {
    ctx: ze,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Pn,
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
    var a = gr;
    try {
      Aa(!0), Ei(s), s.f |= uf;
    } catch (c) {
      throw Rt(s), c;
    } finally {
      Aa(a);
    }
  } else t !== null && Si(s);
  var l = n && s.deps === null && s.first === null && s.nodes_start === null && s.teardown === null && (s.f & (Il | Go)) === 0;
  if (!l && !o && r && (i !== null && Yf(s, i), Be !== null && Be.f & Ft)) {
    var u = (
      /** @type {Derived} */
      Be
    );
    (u.effects ?? (u.effects = [])).push(s);
  }
  return s;
}
function iu(e) {
  const t = rr(xi, null, !1);
  return Zt(t, gt), t.teardown = e, t;
}
function vs(e) {
  ou();
  var t = Ie !== null && (Ie.f & Nn) !== 0 && ze !== null && !ze.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      ze
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: Ie,
      reaction: Be
    });
  } else {
    var r = Pt(e);
    return r;
  }
}
function Xf(e) {
  return ou(), Rr(e);
}
function Wf(e) {
  const t = rr(Hr, e, !0);
  return () => {
    Rt(t);
  };
}
function Kf(e) {
  const t = rr(Hr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? kr(t, () => {
      Rt(t), r(void 0);
    }) : (Rt(t), r(void 0));
  });
}
function Pt(e) {
  return rr(Vl, e, !1);
}
function oe(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    ze
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = Rr(() => {
    e(), !r.ran && (r.ran = !0, F(n.l.r2, !0), sn(t));
  });
}
function ut() {
  var e = (
    /** @type {ComponentContextLegacy} */
    ze
  );
  Rr(() => {
    if (h(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        n.f & gt && Zt(n, nr), Ir(n) && Ei(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function Rr(e) {
  return rr(xi, e, !0);
}
function _e(e, t = [], n = Fe) {
  const r = t.map(n);
  return or(() => e(...r.map(h)));
}
function or(e, t = 0) {
  return rr(xi | Rs | t, e, !0);
}
function Cn(e, t = !0) {
  return rr(xi | Nn, e, !0, t);
}
function su(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Zs, r = Be;
    Oa(!0), Rn(null);
    try {
      t.call(null);
    } finally {
      Oa(n), Rn(r);
    }
  }
}
function au(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    Rt(n, t), n = r;
  }
}
function Ff(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & Nn || Rt(t), t = n;
  }
}
function Rt(e, t = !0) {
  var n = !1;
  if ((t || e.f & df) && e.nodes_start !== null) {
    for (var r = e.nodes_start, o = e.nodes_end; r !== null; ) {
      var i = r === o ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ln(r)
      );
      r.remove(), r = i;
    }
    n = !0;
  }
  au(e, t && !n), ti(e, 0), Zt(e, bi);
  var s = e.transitions;
  if (s !== null)
    for (const l of s)
      l.stop();
  su(e);
  var a = e.parent;
  a !== null && a.first !== null && lu(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function lu(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function kr(e, t) {
  var n = [];
  qs(e, n, !0), uu(n, () => {
    Rt(e), t && t();
  });
}
function uu(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function qs(e, t, n) {
  if (!(e.f & wn)) {
    if (e.f ^= wn, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & Vr) !== 0 || (r.f & Nn) !== 0;
      qs(r, t, i ? n : !1), r = o;
    }
  }
}
function ro(e) {
  cu(e, !0);
}
function cu(e, t) {
  if (e.f & wn) {
    e.f ^= wn, e.f & gt || (e.f ^= gt), Ir(e) && (Zt(e, Pn), Si(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Vr) !== 0 || (n.f & Nn) !== 0;
      cu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
function Ni(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let ze = null;
function Da(e) {
  ze = e;
}
function Un(e) {
  return (
    /** @type {T} */
    Gs().get(e)
  );
}
function Er(e, t) {
  return Gs().set(e, t), t;
}
function Zf(e) {
  return Gs().has(e);
}
function ce(e, t = !1, n) {
  ze = {
    p: ze,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  }, zr && !t && (ze.l = {
    s: null,
    u: null,
    r1: [],
    r2: Ct(!1)
  });
}
function de(e) {
  const t = ze;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var n = Ie, r = Be;
      t.e = null;
      try {
        for (var o = 0; o < s.length; o++) {
          var i = s[o];
          Bn(i.effect), Rn(i.reaction), Pt(i.fn);
        }
      } finally {
        Bn(n), Rn(r);
      }
    }
    ze = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Pi() {
  return !zr || ze !== null && ze.l === null;
}
function Gs(e) {
  return ze === null && Ni(), ze.c ?? (ze.c = new Map(qf(ze) || void 0));
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
const eg = ["touchstart", "touchmove"];
function tg(e) {
  return eg.includes(e);
}
const ng = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function rg(e) {
  return ng.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function og(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, wo(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function ig(e) {
  me && /* @__PURE__ */ pt(e) !== null && Fs(e);
}
let La = !1;
function sg() {
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
function ag(e) {
  var t = Be, n = Ie;
  Rn(null), Bn(null);
  try {
    return e();
  } finally {
    Rn(t), Bn(n);
  }
}
const du = /* @__PURE__ */ new Set(), ps = /* @__PURE__ */ new Set();
function fu(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || Gr.call(t, i), !i.cancelBubble)
      return ag(() => n == null ? void 0 : n.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? wo(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function Ke(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = fu(e, t, n, i);
  (t === document.body || t === window || t === document) && iu(() => {
    t.removeEventListener(e, s, i);
  });
}
function Mi(e) {
  for (var t = 0; t < e.length; t++)
    du.add(e[t]);
  for (var n of ps)
    n(e);
}
function Gr(e) {
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
    Qr(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var c = Be, f = Ie;
    Rn(null), Bn(null);
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
            if (yo(x)) {
              var [C, ...S] = x;
              C.apply(i, [e, ...S]);
            } else
              x.call(i, e);
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
      e.__root = t, delete e.currentTarget, Rn(c), Bn(f);
    }
  }
}
function Us(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Et(e, t) {
  var n = (
    /** @type {Effect} */
    Ie
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function se(e, t) {
  var n = (t & Ll) !== 0, r = (t & lf) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (me)
      return Et(Me, null), Me;
    o === void 0 && (o = Us(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ pt(o)));
    var s = (
      /** @type {TemplateNode} */
      r || ql ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ pt(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Et(a, l);
    } else
      Et(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function $e(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & Ll) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (me)
      return Et(Me, null), Me;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Us(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ pt(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ pt(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ pt(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ pt(l);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ pt(u)
      ), f = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Et(c, f);
    } else
      Et(u, u);
    return u;
  };
}
function $t(e = "") {
  if (!me) {
    var t = bn(e + "");
    return Et(t, t), t;
  }
  var n = Me;
  return n.nodeType !== 3 && (n.before(n = bn()), mt(n)), Et(n, n), n;
}
function Ze() {
  if (me)
    return Et(Me, null), Me;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = bn();
  return e.append(t, n), Et(t, n), e;
}
function V(e, t) {
  if (me) {
    Ie.nodes_end = Me, on();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function un(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function gu(e, t) {
  return hu(e, t);
}
function lg(e, t) {
  gs(), t.intro = t.intro ?? !1;
  const n = t.target, r = me, o = Me;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ pt(n)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== zl); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ ln(i);
    if (!i)
      throw fr;
    Mt(!0), mt(
      /** @type {Comment} */
      i
    ), on();
    const s = hu(e, { ...t, anchor: i });
    if (Me === null || Me.nodeType !== 8 || /** @type {Comment} */
    Me.data !== Is)
      throw Ci(), fr;
    return Mt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === fr)
      return t.recover === !1 && kf(), gs(), Fs(n), Mt(!1), gu(e, t);
    throw s;
  } finally {
    Mt(r), mt(o);
  }
}
const ur = /* @__PURE__ */ new Map();
function hu(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  gs();
  var a = /* @__PURE__ */ new Set(), l = (f) => {
    for (var d = 0; d < f.length; d++) {
      var g = f[d];
      if (!a.has(g)) {
        a.add(g);
        var v = tg(g);
        t.addEventListener(g, Gr, { passive: v });
        var x = ur.get(g);
        x === void 0 ? (document.addEventListener(g, Gr, { passive: v }), ur.set(g, 1)) : ur.set(g, x + 1);
      }
    }
  };
  l(Ys(du)), ps.add(l);
  var u = void 0, c = Kf(() => {
    var f = n ?? t.appendChild(bn());
    return Cn(() => {
      if (i) {
        ce({});
        var d = (
          /** @type {ComponentContext} */
          ze
        );
        d.c = i;
      }
      o && (r.$$events = o), me && Et(
        /** @type {TemplateNode} */
        f,
        null
      ), u = e(f, r) || {}, me && (Ie.nodes_end = Me), i && de();
    }), () => {
      var v;
      for (var d of a) {
        t.removeEventListener(d, Gr);
        var g = (
          /** @type {number} */
          ur.get(d)
        );
        --g === 0 ? (document.removeEventListener(d, Gr), ur.delete(d)) : ur.set(d, g);
      }
      ps.delete(l), f !== n && ((v = f.parentNode) == null || v.removeChild(f));
    };
  });
  return ms.set(u, c), u;
}
let ms = /* @__PURE__ */ new WeakMap();
function ug(e, t) {
  const n = ms.get(e);
  return n ? (ms.delete(e), n(t)) : Promise.resolve();
}
function Ee(e, t, n = !1) {
  me && on();
  var r = e, o = null, i = null, s = xt, a = n ? Vr : 0, l = !1;
  const u = (f, d = !0) => {
    l = !0, c(d, f);
  }, c = (f, d) => {
    if (s === (s = f)) return;
    let g = !1;
    if (me) {
      const v = (
        /** @type {Comment} */
        r.data === Vs
      );
      !!s === v && (r = fs(), mt(r), Mt(!1), g = !0);
    }
    s ? (o ? ro(o) : d && (o = Cn(() => d(r))), i && kr(i, () => {
      i = null;
    })) : (i ? ro(i) : d && (i = Cn(() => d(r))), o && kr(o, () => {
      o = null;
    })), g && Mt(!0);
  };
  or(() => {
    l = !1, t(u), l || c(null, null);
  }, a), me && (r = Me);
}
function $i(e, t) {
  return t;
}
function cg(e, t, n, r) {
  for (var o = [], i = t.length, s = 0; s < i; s++)
    qs(t[s].e, o, !0);
  var a = i > 0 && o.length === 0 && n !== null;
  if (a) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Fs(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), Tn(e, t[0].prev, t[i - 1].next);
  }
  uu(o, () => {
    for (var u = 0; u < i; u++) {
      var c = t[u];
      a || (r.delete(c.k), Tn(e, c.prev, c.next)), Rt(c.e, !a);
    }
  });
}
function At(e, t, n, r, o, i = null) {
  var s = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & Ol) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    s = me ? mt(
      /** @type {Comment | Text} */
      /* @__PURE__ */ pt(u)
    ) : u.appendChild(bn());
  }
  me && on();
  var c = null, f = !1, d = /* @__PURE__ */ ge(() => {
    var g = n();
    return yo(g) ? g : g == null ? [] : Ys(g);
  });
  or(() => {
    var g = h(d), v = g.length;
    if (f && v === 0)
      return;
    f = v === 0;
    let x = !1;
    if (me) {
      var C = (
        /** @type {Comment} */
        s.data === Vs
      );
      C !== (v === 0) && (s = fs(), mt(s), Mt(!1), x = !0);
    }
    if (me) {
      for (var S = null, p, b = 0; b < v; b++) {
        if (Me.nodeType === 8 && /** @type {Comment} */
        Me.data === Is) {
          s = /** @type {Comment} */
          Me, x = !0, Mt(!1);
          break;
        }
        var m = g[b], k = r(m, b);
        p = vu(
          Me,
          a,
          S,
          null,
          m,
          k,
          b,
          o,
          t,
          n
        ), a.items.set(k, p), S = p;
      }
      v > 0 && mt(fs());
    }
    me || dg(g, a, s, o, t, r, n), i !== null && (v === 0 ? c ? ro(c) : c = Cn(() => i(s)) : c !== null && kr(c, () => {
      c = null;
    })), x && Mt(!0), h(d);
  }), me && (s = Me);
}
function dg(e, t, n, r, o, i, s) {
  var E, M, _, N;
  var a = (o & tf) !== 0, l = (o & (zs | Hs)) !== 0, u = e.length, c = t.items, f = t.first, d = f, g, v = null, x, C = [], S = [], p, b, m, k;
  if (a)
    for (k = 0; k < u; k += 1)
      p = e[k], b = i(p, k), m = c.get(b), m !== void 0 && ((E = m.a) == null || E.measure(), (x ?? (x = /* @__PURE__ */ new Set())).add(m));
  for (k = 0; k < u; k += 1) {
    if (p = e[k], b = i(p, k), m = c.get(b), m === void 0) {
      var $ = d ? (
        /** @type {TemplateNode} */
        d.e.nodes_start
      ) : n;
      v = vu(
        $,
        t,
        v,
        v === null ? t.first : v.next,
        p,
        b,
        k,
        r,
        o,
        s
      ), c.set(b, v), C = [], S = [], d = v.next;
      continue;
    }
    if (l && fg(m, p, k, o), m.e.f & wn && (ro(m.e), a && ((M = m.a) == null || M.unfix(), (x ?? (x = /* @__PURE__ */ new Set())).delete(m))), m !== d) {
      if (g !== void 0 && g.has(m)) {
        if (C.length < S.length) {
          var P = S[0], A;
          v = P.prev;
          var L = C[0], O = C[C.length - 1];
          for (A = 0; A < C.length; A += 1)
            za(C[A], P, n);
          for (A = 0; A < S.length; A += 1)
            g.delete(S[A]);
          Tn(t, L.prev, O.next), Tn(t, v, L), Tn(t, O, P), d = P, v = O, k -= 1, C = [], S = [];
        } else
          g.delete(m), za(m, d, n), Tn(t, m.prev, m.next), Tn(t, m, v === null ? t.first : v.next), Tn(t, v, m), v = m;
        continue;
      }
      for (C = [], S = []; d !== null && d.k !== b; )
        d.e.f & wn || (g ?? (g = /* @__PURE__ */ new Set())).add(d), S.push(d), d = d.next;
      if (d === null)
        continue;
      m = d;
    }
    C.push(m), v = m, d = m.next;
  }
  if (d !== null || g !== void 0) {
    for (var z = g === void 0 ? [] : Ys(g); d !== null; )
      d.e.f & wn || z.push(d), d = d.next;
    var I = z.length;
    if (I > 0) {
      var R = o & Ol && u === 0 ? n : null;
      if (a) {
        for (k = 0; k < I; k += 1)
          (_ = z[k].a) == null || _.measure();
        for (k = 0; k < I; k += 1)
          (N = z[k].a) == null || N.fix();
      }
      cg(t, z, R, c);
    }
  }
  a && wo(() => {
    var T;
    if (x !== void 0)
      for (m of x)
        (T = m.a) == null || T.apply();
  }), Ie.first = t.first && t.first.e, Ie.last = v && v.e;
}
function fg(e, t, n, r) {
  r & zs && ds(e.v, t), r & Hs ? ds(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function vu(e, t, n, r, o, i, s, a, l, u) {
  var c = (l & zs) !== 0, f = (l & nf) === 0, d = c ? f ? /* @__PURE__ */ _o(o) : Ct(o) : o, g = l & Hs ? Ct(s) : s, v = {
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
    return v.e = Cn(() => a(e, d, g, u), me), v.e.prev = n && n.e, v.e.next = r && r.e, n === null ? t.first = v : (n.next = v, n.e.next = v.e), r !== null && (r.prev = v, r.e.prev = v.e), v;
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
      /* @__PURE__ */ ln(i)
    );
    o.before(i), i = s;
  }
}
function Tn(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function pu(e, t, n, r, o) {
  var i = e, s = "", a;
  or(() => {
    if (s === (s = t() ?? "")) {
      me && on();
      return;
    }
    a !== void 0 && (Rt(a), a = void 0), s !== "" && (a = Cn(() => {
      if (me) {
        Me.data;
        for (var l = on(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ ln(l);
        if (l === null)
          throw Ci(), fr;
        Et(Me, u), i = mt(l);
        return;
      }
      var c = s + "", f = Us(c);
      Et(
        /** @type {TemplateNode} */
        /* @__PURE__ */ pt(f),
        /** @type {TemplateNode} */
        f.lastChild
      ), i.before(f);
    }));
  });
}
function ft(e, t, n, r, o) {
  var a;
  me && on();
  var i = (a = t.$$slots) == null ? void 0 : a[n], s = !1;
  i === !0 && (i = t[n === "default" ? "children" : n], s = !0), i === void 0 || i(e, s ? () => r : r);
}
function gg(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const n in e.$$slots)
    t[n] = !0;
  return t;
}
function Sr(e, t, ...n) {
  var r = e, o = st, i;
  or(() => {
    o !== (o = t()) && (i && (Rt(i), i = null), i = Cn(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Vr), me && (r = Me);
}
function mu(e, t, n) {
  me && on();
  var r = e, o, i;
  or(() => {
    o !== (o = t()) && (i && (kr(i), i = null), o && (i = Cn(() => n(r, o))));
  }, Vr), me && (r = Me);
}
function hg(e, t, n, r, o, i) {
  let s = me;
  me && on();
  var a, l, u = null;
  me && Me.nodeType === 1 && (u = /** @type {Element} */
  Me, on());
  var c = (
    /** @type {TemplateNode} */
    me ? Me : e
  ), f;
  or(() => {
    const d = t() || null;
    var g = d === "svg" ? Hl : null;
    d !== a && (f && (d === null ? kr(f, () => {
      f = null, l = null;
    }) : d === l ? ro(f) : Rt(f)), d && d !== l && (f = Cn(() => {
      if (u = me ? (
        /** @type {Element} */
        u
      ) : g ? document.createElementNS(g, d) : document.createElement(d), Et(u, u), r) {
        me && rg(d) && u.append(document.createComment(""));
        var v = (
          /** @type {TemplateNode} */
          me ? /* @__PURE__ */ pt(u) : u.appendChild(bn())
        );
        me && (v === null ? Mt(!1) : mt(v)), r(u, v);
      }
      Ie.nodes_end = u, c.before(u);
    })), a = d, a && (l = a));
  }, Vr), s && (Mt(!0), mt(c));
}
function rt(e, t) {
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
function dt(e, t, n) {
  Pt(() => {
    var r = sn(() => t(e, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      Rr(() => {
        var s = n();
        K(s), o && Ws(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function yu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = yu(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function vg() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = yu(e)) && (r && (r += " "), r += t);
  return r;
}
function cn(e) {
  return typeof e == "object" ? vg(e) : e ?? "";
}
function wu(e) {
  if (me) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          re(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          re(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, yf(n), sg();
  }
}
function pg(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function re(e, t, n, r) {
  var o = e.__attributes ?? (e.__attributes = {});
  me && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[ff] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && _u(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function qt(e, t, n, r, o = !1, i = !1, s = !1) {
  let a = me && i;
  a && Mt(!1);
  var l = t || {}, u = e.tagName === "OPTION";
  for (var c in t)
    c in n || (n[c] = null);
  n.class && (n.class = cn(n.class)), r !== void 0 && (n.class = n.class ? n.class + " " + r : r);
  var f = _u(e), d = (
    /** @type {Record<string, unknown>} **/
    e.__attributes ?? (e.__attributes = {})
  );
  for (const p in n) {
    let b = n[p];
    if (u && p === "value" && b == null) {
      e.value = e.__value = "", l[p] = b;
      continue;
    }
    var g = l[p];
    if (b !== g) {
      l[p] = b;
      var v = p[0] + p[1];
      if (v !== "$$") {
        if (v === "on") {
          const m = {}, k = "$$" + p;
          let $ = p.slice(2);
          var x = jf($);
          if (Gf($) && ($ = $.slice(0, -7), m.capture = !0), !x && g) {
            if (b != null) continue;
            e.removeEventListener($, l[k], m), l[k] = null;
          }
          if (b != null)
            if (x)
              e[`__${$}`] = b, Mi([$]);
            else {
              let P = function(A) {
                l[p].call(this, A);
              };
              l[k] = fu($, e, P, m);
            }
          else x && (e[`__${$}`] = void 0);
        } else if (p === "style" && b != null)
          e.style.cssText = b + "";
        else if (p === "autofocus")
          og(
            /** @type {HTMLElement} */
            e,
            !!b
          );
        else if (!i && (p === "__value" || p === "value" && b != null))
          e.value = e.__value = b;
        else if (p === "selected" && u)
          pg(
            /** @type {HTMLOptionElement} */
            e,
            b
          );
        else {
          var C = p;
          o || (C = Qf(C));
          var S = C === "defaultValue" || C === "defaultChecked";
          if (b == null && !i && !S)
            if (d[p] = null, C === "value" || C === "checked") {
              let m = (
                /** @type {HTMLInputElement} */
                e
              );
              const k = t === void 0;
              if (C === "value") {
                let $ = m.defaultValue;
                m.removeAttribute(C), m.defaultValue = $, m.value = m.__value = k ? $ : null;
              } else {
                let $ = m.defaultChecked;
                m.removeAttribute(C), m.defaultChecked = $, m.checked = k ? $ : !1;
              }
            } else
              e.removeAttribute(p);
          else S || f.includes(C) && (i || typeof b != "string") ? e[C] = b : typeof b != "function" && re(e, C, b);
        }
        p === "style" && "__styles" in e && (e.__styles = {});
      }
    }
  }
  return a && Mt(!0), l;
}
var Ha = /* @__PURE__ */ new Map();
function _u(e) {
  var t = Ha.get(e.nodeName);
  if (t) return t;
  Ha.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = Rl(r);
    for (var i in n)
      n[i].set && t.push(i);
    r = Xs(r);
  }
  return t;
}
function ir(e, t, n) {
  var r = e.__className, o = xu(t, n);
  me && e.getAttribute("class") === o ? e.__className = o : (r !== o || me && e.getAttribute("class") !== o) && (o === "" ? e.removeAttribute("class") : e.setAttribute("class", o), e.__className = o);
}
function Nr(e, t, n) {
  var r = e.__className, o = xu(t, n);
  me && e.className === o ? e.__className = o : (r !== o || me && e.className !== o) && (t == null ? e.removeAttribute("class") : e.className = o, e.__className = o);
}
function xu(e, t) {
  return (e ?? "") + (t ? " " + t : "");
}
function je(e, t, n) {
  if (n) {
    if (e.classList.contains(t)) return;
    e.classList.add(t);
  } else {
    if (!e.classList.contains(t)) return;
    e.classList.remove(t);
  }
}
function Qe(e, t, n, r) {
  var o = e.__styles ?? (e.__styles = {});
  o[t] !== n && (o[t] = n, n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, ""));
}
var On, Cr, mo, wi, bu;
const _i = class _i {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    Fn(this, wi);
    /** */
    Fn(this, On, /* @__PURE__ */ new WeakMap());
    /** @type {ResizeObserver | undefined} */
    Fn(this, Cr);
    /** @type {ResizeObserverOptions} */
    Fn(this, mo);
    Kr(this, mo, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = Je(this, On).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), Je(this, On).set(t, r), Ma(this, wi, bu).call(this).observe(t, Je(this, mo)), () => {
      var o = Je(this, On).get(t);
      o.delete(n), o.size === 0 && (Je(this, On).delete(t), Je(this, Cr).unobserve(t));
    };
  }
};
On = new WeakMap(), Cr = new WeakMap(), mo = new WeakMap(), wi = new WeakSet(), bu = function() {
  return Je(this, Cr) ?? Kr(this, Cr, new ResizeObserver(
    /** @param {any} entries */
    (t) => {
      for (var n of t) {
        _i.entries.set(n.target, n);
        for (var r of Je(this, On).get(n.target) || [])
          r(n);
      }
    }
  ));
}, /** @static */
ht(_i, "entries", /* @__PURE__ */ new WeakMap());
let ys = _i;
var mg = /* @__PURE__ */ new ys({
  box: "border-box"
});
function Va(e, t, n) {
  var r = mg.observe(e, () => n(e[t]));
  Pt(() => (sn(() => n(e[t])), r));
}
function Ia(e, t) {
  return e === t || (e == null ? void 0 : e[zn]) === t;
}
function kn(e = {}, t, n, r) {
  return Pt(() => {
    var o, i;
    return Rr(() => {
      o = i, i = [], sn(() => {
        e !== n(...i) && (t(e, ...i), o && Ia(n(...o), e) && t(null, ...o));
      });
    }), () => {
      wo(() => {
        i && Ia(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Ne(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    ze
  ), n = t.l.u;
  if (!n) return;
  let r = () => K(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ Fe(() => {
      let a = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], a = !0);
      return a && o++, o;
    });
    r = () => h(s);
  }
  n.b.length && Xf(() => {
    Ra(t, r), eo(n.b);
  }), vs(() => {
    const o = sn(() => n.m.map(pf));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && vs(() => {
    Ra(t, r), eo(n.a);
  });
}
function Ra(e, t) {
  if (e.l.s)
    for (const n of e.l.s) h(n);
  t();
}
function De(e, t) {
  var i;
  var n = (
    /** @type {Record<string, Function[] | Function>} */
    (i = e.$$events) == null ? void 0 : i[t.type]
  ), r = yo(n) ? n.slice() : n == null ? [] : [n];
  for (var o of r)
    o.call(this, t);
}
function sr(e) {
  ze === null && Ni(), zr && ze.l !== null ? wg(ze).m.push(e) : vs(() => {
    const t = sn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function js(e) {
  ze === null && Ni(), sr(() => () => sn(e));
}
function yg(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function Ti() {
  const e = ze;
  return e === null && Ni(), (t, n, r) => {
    var i;
    const o = (
      /** @type {Record<string, Function | Function[]>} */
      (i = e.s.$$events) == null ? void 0 : i[
        /** @type {any} */
        t
      ]
    );
    if (o) {
      const s = yo(o) ? o.slice() : [o], a = yg(
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
function wg(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function Js(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), st;
  const r = sn(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const cr = [];
function Lt(e, t) {
  return {
    subscribe: ve(e, t).subscribe
  };
}
function ve(e, t = st) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(a) {
    if (Ws(e, a) && (e = a, n)) {
      const l = !cr.length;
      for (const u of r)
        u[1](), cr.push(u, e);
      if (l) {
        for (let u = 0; u < cr.length; u += 2)
          cr[u][0](cr[u + 1]);
        cr.length = 0;
      }
    }
  }
  function i(a) {
    o(a(
      /** @type {T} */
      e
    ));
  }
  function s(a, l = st) {
    const u = [a, l];
    return r.add(u), r.size === 1 && (n = t(o, i) || st), a(
      /** @type {T} */
      e
    ), () => {
      r.delete(u), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: o, update: i, subscribe: s };
}
function Hn(e, t, n) {
  const r = !Array.isArray(e), o = r ? [e] : e;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = t.length < 2;
  return Lt(n, (s, a) => {
    let l = !1;
    const u = [];
    let c = 0, f = st;
    const d = () => {
      if (c)
        return;
      f();
      const v = t(r ? u[0] : u, s, a);
      i ? s(v) : f = typeof v == "function" ? v : st;
    }, g = o.map(
      (v, x) => Js(
        v,
        (C) => {
          u[x] = C, c &= ~(1 << x), l && d();
        },
        () => {
          c |= 1 << x;
        }
      )
    );
    return l = !0, d(), function() {
      eo(g), f(), l = !1;
    };
  });
}
function X(e) {
  let t;
  return Js(e, (n) => t = n)(), t;
}
let Do = !1, ws = Symbol();
function Z(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ _o(void 0),
    unsubscribe: st
  });
  if (r.store !== e && !(ws in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = st;
    else {
      var o = !0;
      r.unsubscribe = Js(e, (i) => {
        o ? r.source.v = i : F(r.source, i);
      }), o = !1;
    }
  return e && ws in n ? X(e) : h(r.source);
}
function _g(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = st), e;
}
function ni(e, t) {
  return e.set(t), t;
}
function qe() {
  const e = {};
  function t() {
    iu(() => {
      for (var n in e)
        e[n].unsubscribe();
      Qr(e, ws, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function xg(e) {
  var t = Do;
  try {
    return Do = !1, [e(), Do];
  } finally {
    Do = t;
  }
}
const bg = {
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
function Mn(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    bg
  );
}
const Cg = {
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
    )), e.special[t](n), $a(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), $a(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function Ue(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: Ct(0) }, Cg);
}
const kg = {
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
      const i = _n(o, t);
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
        const o = _n(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === zn || t === Bs) return !1;
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
function Vt(...e) {
  return new Proxy({ props: e }, kg);
}
function w(e, t, n, r) {
  var $;
  var o = (n & rf) !== 0, i = !zr || (n & of) !== 0, s = (n & sf) !== 0, a = (n & af) !== 0, l = !1, u;
  s ? [u, l] = xg(() => (
    /** @type {V} */
    e[t]
  )) : u = /** @type {V} */
  e[t];
  var c = zn in e || Bs in e, f = s && ((($ = _n(e, t)) == null ? void 0 : $.set) ?? (c && t in e && ((P) => e[t] = P))) || void 0, d = (
    /** @type {V} */
    r
  ), g = !0, v = !1, x = () => (v = !0, g && (g = !1, a ? d = sn(
    /** @type {() => V} */
    r
  ) : d = /** @type {V} */
  r), d);
  u === void 0 && r !== void 0 && (f && i && Ef(), u = x(), f && f(u));
  var C;
  if (i)
    C = () => {
      var P = (
        /** @type {V} */
        e[t]
      );
      return P === void 0 ? x() : (g = !0, v = !1, P);
    };
  else {
    var S = (o ? Fe : ge)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    S.f |= cf, C = () => {
      var P = h(S);
      return P !== void 0 && (d = /** @type {V} */
      void 0), P === void 0 ? d : P;
    };
  }
  if (!(n & Dl))
    return C;
  if (f) {
    var p = e.$$legacy;
    return function(P, A) {
      return arguments.length > 0 ? ((!i || !A || p || l) && f(A ? C() : P), P) : C();
    };
  }
  var b = !1, m = /* @__PURE__ */ _o(u), k = /* @__PURE__ */ Fe(() => {
    var P = C(), A = h(m);
    return b ? (b = !1, A) : m.v = P;
  });
  return o || (k.equals = Ks), function(P, A) {
    if (arguments.length > 0) {
      const L = A ? h(k) : i && s ? Qt(P) : P;
      return k.equals(L) || (b = !0, F(m, L), v && d !== void 0 && (d = L), sn(() => h(k))), P;
    }
    return h(k);
  };
}
function Eg(e) {
  return new Sg(e);
}
var pn, zt;
class Sg {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Fn(this, pn);
    /** @type {Record<string, any>} */
    Fn(this, zt);
    var i;
    var n = /* @__PURE__ */ new Map(), r = (s, a) => {
      var l = /* @__PURE__ */ _o(a);
      return n.set(s, l), l;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, a) {
          return h(n.get(a) ?? r(a, Reflect.get(s, a)));
        },
        has(s, a) {
          return a === Bs ? !0 : (h(n.get(a) ?? r(a, Reflect.get(s, a))), Reflect.has(s, a));
        },
        set(s, a, l) {
          return F(n.get(a) ?? r(a, l), l), Reflect.set(s, a, l);
        }
      }
    );
    Kr(this, zt, (t.hydrate ? lg : gu)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((i = t == null ? void 0 : t.props) != null && i.$$host) || t.sync === !1) && y(), Kr(this, pn, o.$$events);
    for (const s of Object.keys(Je(this, zt)))
      s === "$set" || s === "$destroy" || s === "$on" || Qr(this, s, {
        get() {
          return Je(this, zt)[s];
        },
        /** @param {any} value */
        set(a) {
          Je(this, zt)[s] = a;
        },
        enumerable: !0
      });
    Je(this, zt).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(o, s);
    }, Je(this, zt).$destroy = () => {
      ug(Je(this, zt));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    Je(this, zt).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    Je(this, pn)[t] = Je(this, pn)[t] || [];
    const r = (...o) => n.call(this, ...o);
    return Je(this, pn)[t].push(r), () => {
      Je(this, pn)[t] = Je(this, pn)[t].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    Je(this, zt).$destroy();
  }
}
pn = new WeakMap(), zt = new WeakMap();
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
    ht(this, "$$ctor");
    /** Slots */
    ht(this, "$$s");
    /** @type {any} The Svelte component instance */
    ht(this, "$$c");
    /** Whether or not the custom element is connected */
    ht(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    ht(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    ht(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    ht(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    ht(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    ht(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    ht(this, "$$me");
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
          o !== "default" && (s.name = o), V(i, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, r = Ng(this);
      for (const o of this.$$s)
        o in r && (o === "default" && !this.$$d.children ? (this.$$d.children = t(o), n.default = !0) : n[o] = t(o));
      for (const o of this.attributes) {
        const i = this.$$g_p(o.name);
        i in this.$$d || (this.$$d[i] = Xo(i, o.value, this.$$p_d, "toProp"));
      }
      for (const o in this.$$p_d)
        !(o in this.$$d) && this[o] !== void 0 && (this.$$d[o] = this[o], delete this[o]);
      this.$$c = Eg({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = Wf(() => {
        Rr(() => {
          var o;
          this.$$r = !0;
          for (const i of jo(this.$$c)) {
            if (!((o = this.$$p_d[i]) != null && o.reflect)) continue;
            this.$$d[i] = this.$$c[i];
            const s = Xo(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Xo(t, r, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [t]: this.$$d[t] }));
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
    return jo(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function Xo(e, t, n, r) {
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
function Ng(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function ie(e, t, n, r, o, i) {
  let s = class extends Cu {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return jo(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return jo(t).forEach((a) => {
    Qr(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        var f;
        l = Xo(a, l, t), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var c = (f = _n(u, a)) == null ? void 0 : f.get;
          c ? u[a] = l : u.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    Qr(s.prototype, a, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[a];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
function yt(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = yt(e[n])) !== "" && (t += (t && " ") + r);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
var Pg = { value: () => {
} };
function Ai() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Wo(n);
}
function Wo(e) {
  this._ = e;
}
function Mg(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Wo.prototype = Ai.prototype = {
  constructor: Wo,
  on: function(e, t) {
    var n = this._, r = Mg(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = $g(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = Ba(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = Ba(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Wo(e);
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
function $g(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Ba(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Pg, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var _s = "http://www.w3.org/1999/xhtml";
const Ya = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: _s,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Oi(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Ya.hasOwnProperty(t) ? { space: Ya[t], local: e } : e;
}
function Tg(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === _s && t.documentElement.namespaceURI === _s ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function Ag(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function ku(e) {
  var t = Oi(e);
  return (t.local ? Ag : Tg)(t);
}
function Og() {
}
function Qs(e) {
  return e == null ? Og : function() {
    return this.querySelector(e);
  };
}
function Dg(e) {
  typeof e != "function" && (e = Qs(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, u, c = 0; c < s; ++c)
      (l = i[c]) && (u = e.call(l, l.__data__, c, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[c] = u);
  return new Ot(r, this._parents);
}
function Lg(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function zg() {
  return [];
}
function Eu(e) {
  return e == null ? zg : function() {
    return this.querySelectorAll(e);
  };
}
function Hg(e) {
  return function() {
    return Lg(e.apply(this, arguments));
  };
}
function Vg(e) {
  typeof e == "function" ? e = Hg(e) : e = Eu(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(e.call(l, l.__data__, u, s)), o.push(l));
  return new Ot(r, o);
}
function Su(e) {
  return function() {
    return this.matches(e);
  };
}
function Nu(e) {
  return function(t) {
    return t.matches(e);
  };
}
var Ig = Array.prototype.find;
function Rg(e) {
  return function() {
    return Ig.call(this.children, e);
  };
}
function Bg() {
  return this.firstElementChild;
}
function Yg(e) {
  return this.select(e == null ? Bg : Rg(typeof e == "function" ? e : Nu(e)));
}
var Xg = Array.prototype.filter;
function Wg() {
  return Array.from(this.children);
}
function Kg(e) {
  return function() {
    return Xg.call(this.children, e);
  };
}
function Fg(e) {
  return this.selectAll(e == null ? Wg : Kg(typeof e == "function" ? e : Nu(e)));
}
function Zg(e) {
  typeof e != "function" && (e = Su(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Ot(r, this._parents);
}
function Pu(e) {
  return new Array(e.length);
}
function qg() {
  return new Ot(this._enter || this._groups.map(Pu), this._parents);
}
function ri(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
ri.prototype = {
  constructor: ri,
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
function Gg(e) {
  return function() {
    return e;
  };
}
function Ug(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, u = i.length; s < u; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new ri(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function jg(e, t, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), c = t.length, f = i.length, d = new Array(c), g;
  for (a = 0; a < c; ++a)
    (l = t[a]) && (d[a] = g = s.call(l, l.__data__, a, t) + "", u.has(g) ? o[a] = l : u.set(g, l));
  for (a = 0; a < f; ++a)
    g = s.call(e, i[a], a, i) + "", (l = u.get(g)) ? (r[a] = l, l.__data__ = i[a], u.delete(g)) : n[a] = new ri(e, i[a]);
  for (a = 0; a < c; ++a)
    (l = t[a]) && u.get(d[a]) === l && (o[a] = l);
}
function Jg(e) {
  return e.__data__;
}
function Qg(e, t) {
  if (!arguments.length) return Array.from(this, Jg);
  var n = t ? jg : Ug, r = this._parents, o = this._groups;
  typeof e != "function" && (e = Gg(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var c = r[u], f = o[u], d = f.length, g = eh(e.call(c, c && c.__data__, u, r)), v = g.length, x = a[u] = new Array(v), C = s[u] = new Array(v), S = l[u] = new Array(d);
    n(c, f, x, C, S, g, t);
    for (var p = 0, b = 0, m, k; p < v; ++p)
      if (m = x[p]) {
        for (p >= b && (b = p + 1); !(k = C[b]) && ++b < v; ) ;
        m._next = k || null;
      }
  }
  return s = new Ot(s, r), s._enter = a, s._exit = l, s;
}
function eh(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function th() {
  return new Ot(this._exit || this._groups.map(Pu), this._parents);
}
function nh(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function rh(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], c = r[l], f = u.length, d = a[l] = new Array(f), g, v = 0; v < f; ++v)
      (g = u[v] || c[v]) && (d[v] = g);
  for (; l < o; ++l)
    a[l] = n[l];
  return new Ot(a, this._parents);
}
function oh() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function ih(e) {
  e || (e = sh);
  function t(f, d) {
    return f && d ? e(f.__data__, d.__data__) : !f - !d;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), u, c = 0; c < a; ++c)
      (u = s[c]) && (l[c] = u);
    l.sort(t);
  }
  return new Ot(o, this._parents).order();
}
function sh(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function ah() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function lh() {
  return Array.from(this);
}
function uh() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function ch() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function dh() {
  return !this.node();
}
function fh(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function gh(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function hh(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function vh(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function ph(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function mh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function yh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function wh(e, t) {
  var n = Oi(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? hh : gh : typeof t == "function" ? n.local ? yh : mh : n.local ? ph : vh)(n, t));
}
function Mu(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function _h(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function xh(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function bh(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function Ch(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? _h : typeof t == "function" ? bh : xh)(e, t, n ?? "")) : Pr(this.node(), e);
}
function Pr(e, t) {
  return e.style.getPropertyValue(t) || Mu(e).getComputedStyle(e, null).getPropertyValue(t);
}
function kh(e) {
  return function() {
    delete this[e];
  };
}
function Eh(e, t) {
  return function() {
    this[e] = t;
  };
}
function Sh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Nh(e, t) {
  return arguments.length > 1 ? this.each((t == null ? kh : typeof t == "function" ? Sh : Eh)(e, t)) : this.node()[e];
}
function $u(e) {
  return e.trim().split(/^|\s+/);
}
function ea(e) {
  return e.classList || new Tu(e);
}
function Tu(e) {
  this._node = e, this._names = $u(e.getAttribute("class") || "");
}
Tu.prototype = {
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
function Au(e, t) {
  for (var n = ea(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Ou(e, t) {
  for (var n = ea(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Ph(e) {
  return function() {
    Au(this, e);
  };
}
function Mh(e) {
  return function() {
    Ou(this, e);
  };
}
function $h(e, t) {
  return function() {
    (t.apply(this, arguments) ? Au : Ou)(this, e);
  };
}
function Th(e, t) {
  var n = $u(e + "");
  if (arguments.length < 2) {
    for (var r = ea(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? $h : t ? Ph : Mh)(n, t));
}
function Ah() {
  this.textContent = "";
}
function Oh(e) {
  return function() {
    this.textContent = e;
  };
}
function Dh(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Lh(e) {
  return arguments.length ? this.each(e == null ? Ah : (typeof e == "function" ? Dh : Oh)(e)) : this.node().textContent;
}
function zh() {
  this.innerHTML = "";
}
function Hh(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Vh(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Ih(e) {
  return arguments.length ? this.each(e == null ? zh : (typeof e == "function" ? Vh : Hh)(e)) : this.node().innerHTML;
}
function Rh() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Bh() {
  return this.each(Rh);
}
function Yh() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Xh() {
  return this.each(Yh);
}
function Wh(e) {
  var t = typeof e == "function" ? e : ku(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Kh() {
  return null;
}
function Fh(e, t) {
  var n = typeof e == "function" ? e : ku(e), r = t == null ? Kh : typeof t == "function" ? t : Qs(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Zh() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function qh() {
  return this.each(Zh);
}
function Gh() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Uh() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function jh(e) {
  return this.select(e ? Uh : Gh);
}
function Jh(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Qh(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function e1(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function t1(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function n1(e, t, n) {
  return function() {
    var r = this.__on, o, i = Qh(t);
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
function r1(e, t, n) {
  var r = e1(e + ""), o, i = r.length, s;
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
  for (a = t ? n1 : t1, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function Du(e, t, n) {
  var r = Mu(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function o1(e, t) {
  return function() {
    return Du(this, e, t);
  };
}
function i1(e, t) {
  return function() {
    return Du(this, e, t.apply(this, arguments));
  };
}
function s1(e, t) {
  return this.each((typeof t == "function" ? i1 : o1)(e, t));
}
function* a1() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Lu = [null];
function Ot(e, t) {
  this._groups = e, this._parents = t;
}
function xo() {
  return new Ot([[document.documentElement]], Lu);
}
function l1() {
  return this;
}
Ot.prototype = xo.prototype = {
  constructor: Ot,
  select: Dg,
  selectAll: Vg,
  selectChild: Yg,
  selectChildren: Fg,
  filter: Zg,
  data: Qg,
  enter: qg,
  exit: th,
  join: nh,
  merge: rh,
  selection: l1,
  order: oh,
  sort: ih,
  call: ah,
  nodes: lh,
  node: uh,
  size: ch,
  empty: dh,
  each: fh,
  attr: wh,
  style: Ch,
  property: Nh,
  classed: Th,
  text: Lh,
  html: Ih,
  raise: Bh,
  lower: Xh,
  append: Wh,
  insert: Fh,
  remove: qh,
  clone: jh,
  datum: Jh,
  on: r1,
  dispatch: s1,
  [Symbol.iterator]: a1
};
function Ht(e) {
  return typeof e == "string" ? new Ot([[document.querySelector(e)]], [document.documentElement]) : new Ot([[e]], Lu);
}
function u1(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function Wt(e, t) {
  if (e = u1(e), t === void 0 && (t = e.currentTarget), t) {
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
const c1 = { passive: !1 }, oo = { capture: !0, passive: !1 };
function Gi(e) {
  e.stopImmediatePropagation();
}
function vr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function zu(e) {
  var t = e.document.documentElement, n = Ht(e).on("dragstart.drag", vr, oo);
  "onselectstart" in t ? n.on("selectstart.drag", vr, oo) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Hu(e, t) {
  var n = e.document.documentElement, r = Ht(e).on("dragstart.drag", null);
  t && (r.on("click.drag", vr, oo), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Lo = (e) => () => e;
function xs(e, {
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
xs.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function d1(e) {
  return !e.ctrlKey && !e.button;
}
function f1() {
  return this.parentNode;
}
function g1(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function h1() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function v1() {
  var e = d1, t = f1, n = g1, r = h1, o = {}, i = Ai("start", "drag", "end"), s = 0, a, l, u, c, f = 0;
  function d(m) {
    m.on("mousedown.drag", g).filter(r).on("touchstart.drag", C).on("touchmove.drag", S, c1).on("touchend.drag touchcancel.drag", p).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(m, k) {
    if (!(c || !e.call(this, m, k))) {
      var $ = b(this, t.call(this, m, k), m, k, "mouse");
      $ && (Ht(m.view).on("mousemove.drag", v, oo).on("mouseup.drag", x, oo), zu(m.view), Gi(m), u = !1, a = m.clientX, l = m.clientY, $("start", m));
    }
  }
  function v(m) {
    if (vr(m), !u) {
      var k = m.clientX - a, $ = m.clientY - l;
      u = k * k + $ * $ > f;
    }
    o.mouse("drag", m);
  }
  function x(m) {
    Ht(m.view).on("mousemove.drag mouseup.drag", null), Hu(m.view, u), vr(m), o.mouse("end", m);
  }
  function C(m, k) {
    if (e.call(this, m, k)) {
      var $ = m.changedTouches, P = t.call(this, m, k), A = $.length, L, O;
      for (L = 0; L < A; ++L)
        (O = b(this, P, m, k, $[L].identifier, $[L])) && (Gi(m), O("start", m, $[L]));
    }
  }
  function S(m) {
    var k = m.changedTouches, $ = k.length, P, A;
    for (P = 0; P < $; ++P)
      (A = o[k[P].identifier]) && (vr(m), A("drag", m, k[P]));
  }
  function p(m) {
    var k = m.changedTouches, $ = k.length, P, A;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), P = 0; P < $; ++P)
      (A = o[k[P].identifier]) && (Gi(m), A("end", m, k[P]));
  }
  function b(m, k, $, P, A, L) {
    var O = i.copy(), z = Wt(L || $, k), I, R, E;
    if ((E = n.call(m, new xs("beforestart", {
      sourceEvent: $,
      target: d,
      identifier: A,
      active: s,
      x: z[0],
      y: z[1],
      dx: 0,
      dy: 0,
      dispatch: O
    }), P)) != null)
      return I = E.x - z[0] || 0, R = E.y - z[1] || 0, function M(_, N, T) {
        var D = z, B;
        switch (_) {
          case "start":
            o[A] = M, B = s++;
            break;
          case "end":
            delete o[A], --s;
          // falls through
          case "drag":
            z = Wt(T || N, k), B = s;
            break;
        }
        O.call(
          _,
          m,
          new xs(_, {
            sourceEvent: N,
            subject: E,
            target: d,
            identifier: A,
            active: B,
            x: z[0] + I,
            y: z[1] + R,
            dx: z[0] - D[0],
            dy: z[1] - D[1],
            dispatch: O
          }),
          P
        );
      };
  }
  return d.filter = function(m) {
    return arguments.length ? (e = typeof m == "function" ? m : Lo(!!m), d) : e;
  }, d.container = function(m) {
    return arguments.length ? (t = typeof m == "function" ? m : Lo(m), d) : t;
  }, d.subject = function(m) {
    return arguments.length ? (n = typeof m == "function" ? m : Lo(m), d) : n;
  }, d.touchable = function(m) {
    return arguments.length ? (r = typeof m == "function" ? m : Lo(!!m), d) : r;
  }, d.on = function() {
    var m = i.on.apply(i, arguments);
    return m === i ? d : m;
  }, d.clickDistance = function(m) {
    return arguments.length ? (f = (m = +m) * m, d) : Math.sqrt(f);
  }, d;
}
function ta(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Vu(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function bo() {
}
var io = 0.7, oi = 1 / io, pr = "\\s*([+-]?\\d+)\\s*", so = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", nn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", p1 = /^#([0-9a-f]{3,8})$/, m1 = new RegExp(`^rgb\\(${pr},${pr},${pr}\\)$`), y1 = new RegExp(`^rgb\\(${nn},${nn},${nn}\\)$`), w1 = new RegExp(`^rgba\\(${pr},${pr},${pr},${so}\\)$`), _1 = new RegExp(`^rgba\\(${nn},${nn},${nn},${so}\\)$`), x1 = new RegExp(`^hsl\\(${so},${nn},${nn}\\)$`), b1 = new RegExp(`^hsla\\(${so},${nn},${nn},${so}\\)$`), Xa = {
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
ta(bo, ao, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Wa,
  // Deprecated! Use color.formatHex.
  formatHex: Wa,
  formatHex8: C1,
  formatHsl: k1,
  formatRgb: Ka,
  toString: Ka
});
function Wa() {
  return this.rgb().formatHex();
}
function C1() {
  return this.rgb().formatHex8();
}
function k1() {
  return Iu(this).formatHsl();
}
function Ka() {
  return this.rgb().formatRgb();
}
function ao(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = p1.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Fa(t) : n === 3 ? new kt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? zo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? zo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = m1.exec(e)) ? new kt(t[1], t[2], t[3], 1) : (t = y1.exec(e)) ? new kt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = w1.exec(e)) ? zo(t[1], t[2], t[3], t[4]) : (t = _1.exec(e)) ? zo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = x1.exec(e)) ? Ga(t[1], t[2] / 100, t[3] / 100, 1) : (t = b1.exec(e)) ? Ga(t[1], t[2] / 100, t[3] / 100, t[4]) : Xa.hasOwnProperty(e) ? Fa(Xa[e]) : e === "transparent" ? new kt(NaN, NaN, NaN, 0) : null;
}
function Fa(e) {
  return new kt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function zo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new kt(e, t, n, r);
}
function E1(e) {
  return e instanceof bo || (e = ao(e)), e ? (e = e.rgb(), new kt(e.r, e.g, e.b, e.opacity)) : new kt();
}
function bs(e, t, n, r) {
  return arguments.length === 1 ? E1(e) : new kt(e, t, n, r ?? 1);
}
function kt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
ta(kt, bs, Vu(bo, {
  brighter(e) {
    return e = e == null ? oi : Math.pow(oi, e), new kt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? io : Math.pow(io, e), new kt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new kt(Gn(this.r), Gn(this.g), Gn(this.b), ii(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Za,
  // Deprecated! Use color.formatHex.
  formatHex: Za,
  formatHex8: S1,
  formatRgb: qa,
  toString: qa
}));
function Za() {
  return `#${qn(this.r)}${qn(this.g)}${qn(this.b)}`;
}
function S1() {
  return `#${qn(this.r)}${qn(this.g)}${qn(this.b)}${qn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function qa() {
  const e = ii(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Gn(this.r)}, ${Gn(this.g)}, ${Gn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ii(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Gn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function qn(e) {
  return e = Gn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Ga(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Kt(e, t, n, r);
}
function Iu(e) {
  if (e instanceof Kt) return new Kt(e.h, e.s, e.l, e.opacity);
  if (e instanceof bo || (e = ao(e)), !e) return new Kt();
  if (e instanceof Kt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new Kt(s, a, l, e.opacity);
}
function N1(e, t, n, r) {
  return arguments.length === 1 ? Iu(e) : new Kt(e, t, n, r ?? 1);
}
function Kt(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
ta(Kt, N1, Vu(bo, {
  brighter(e) {
    return e = e == null ? oi : Math.pow(oi, e), new Kt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? io : Math.pow(io, e), new Kt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new kt(
      Ui(e >= 240 ? e - 240 : e + 120, o, r),
      Ui(e, o, r),
      Ui(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Kt(Ua(this.h), Ho(this.s), Ho(this.l), ii(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = ii(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Ua(this.h)}, ${Ho(this.s) * 100}%, ${Ho(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Ua(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Ho(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Ui(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Ru = (e) => () => e;
function P1(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function M1(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function $1(e) {
  return (e = +e) == 1 ? Bu : function(t, n) {
    return n - t ? M1(t, n, e) : Ru(isNaN(t) ? n : t);
  };
}
function Bu(e, t) {
  var n = t - e;
  return n ? P1(e, n) : Ru(isNaN(e) ? t : e);
}
const ja = function e(t) {
  var n = $1(t);
  function r(o, i) {
    var s = n((o = bs(o)).r, (i = bs(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = Bu(o.opacity, i.opacity);
    return function(c) {
      return o.r = s(c), o.g = a(c), o.b = l(c), o.opacity = u(c), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function An(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
var Cs = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ji = new RegExp(Cs.source, "g");
function T1(e) {
  return function() {
    return e;
  };
}
function A1(e) {
  return function(t) {
    return e(t) + "";
  };
}
function O1(e, t) {
  var n = Cs.lastIndex = ji.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = Cs.exec(e)) && (o = ji.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: An(r, o) })), n = ji.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? A1(l[0].x) : T1(t) : (t = l.length, function(u) {
    for (var c = 0, f; c < t; ++c) a[(f = l[c]).i] = f.x(u);
    return a.join("");
  });
}
var Ja = 180 / Math.PI, ks = {
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
    rotate: Math.atan2(t, e) * Ja,
    skewX: Math.atan(l) * Ja,
    scaleX: s,
    scaleY: a
  };
}
var Vo;
function D1(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? ks : Yu(t.a, t.b, t.c, t.d, t.e, t.f);
}
function L1(e) {
  return e == null || (Vo || (Vo = document.createElementNS("http://www.w3.org/2000/svg", "g")), Vo.setAttribute("transform", e), !(e = Vo.transform.baseVal.consolidate())) ? ks : (e = e.matrix, Yu(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Xu(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, c, f, d, g, v) {
    if (u !== f || c !== d) {
      var x = g.push("translate(", null, t, null, n);
      v.push({ i: x - 4, x: An(u, f) }, { i: x - 2, x: An(c, d) });
    } else (f || d) && g.push("translate(" + f + t + d + n);
  }
  function s(u, c, f, d) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), d.push({ i: f.push(o(f) + "rotate(", null, r) - 2, x: An(u, c) })) : c && f.push(o(f) + "rotate(" + c + r);
  }
  function a(u, c, f, d) {
    u !== c ? d.push({ i: f.push(o(f) + "skewX(", null, r) - 2, x: An(u, c) }) : c && f.push(o(f) + "skewX(" + c + r);
  }
  function l(u, c, f, d, g, v) {
    if (u !== f || c !== d) {
      var x = g.push(o(g) + "scale(", null, ",", null, ")");
      v.push({ i: x - 4, x: An(u, f) }, { i: x - 2, x: An(c, d) });
    } else (f !== 1 || d !== 1) && g.push(o(g) + "scale(" + f + "," + d + ")");
  }
  return function(u, c) {
    var f = [], d = [];
    return u = e(u), c = e(c), i(u.translateX, u.translateY, c.translateX, c.translateY, f, d), s(u.rotate, c.rotate, f, d), a(u.skewX, c.skewX, f, d), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, f, d), u = c = null, function(g) {
      for (var v = -1, x = d.length, C; ++v < x; ) f[(C = d[v]).i] = C.x(g);
      return f.join("");
    };
  };
}
var z1 = Xu(D1, "px, ", "px)", "deg)"), H1 = Xu(L1, ", ", ")", ")"), V1 = 1e-12;
function Qa(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function I1(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function R1(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const B1 = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], c = s[0], f = s[1], d = s[2], g = c - a, v = f - l, x = g * g + v * v, C, S;
    if (x < V1)
      S = Math.log(d / u) / t, C = function(P) {
        return [
          a + P * g,
          l + P * v,
          u * Math.exp(t * P * S)
        ];
      };
    else {
      var p = Math.sqrt(x), b = (d * d - u * u + r * x) / (2 * u * n * p), m = (d * d - u * u - r * x) / (2 * d * n * p), k = Math.log(Math.sqrt(b * b + 1) - b), $ = Math.log(Math.sqrt(m * m + 1) - m);
      S = ($ - k) / t, C = function(P) {
        var A = P * S, L = Qa(k), O = u / (n * p) * (L * R1(t * A + k) - I1(k));
        return [
          a + O * g,
          l + O * v,
          u * L / Qa(t * A + k)
        ];
      };
    }
    return C.duration = S * 1e3 * t / Math.SQRT2, C;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
}(Math.SQRT2, 2, 4);
var Mr = 0, Ur = 0, Zr = 0, Wu = 1e3, si, jr, ai = 0, jn = 0, Di = 0, lo = typeof performance == "object" && performance.now ? performance : Date, Ku = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function na() {
  return jn || (Ku(Y1), jn = lo.now() + Di);
}
function Y1() {
  jn = 0;
}
function li() {
  this._call = this._time = this._next = null;
}
li.prototype = Fu.prototype = {
  constructor: li,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? na() : +n) + (t == null ? 0 : +t), !this._next && jr !== this && (jr ? jr._next = this : si = this, jr = this), this._call = e, this._time = n, Es();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Es());
  }
};
function Fu(e, t, n) {
  var r = new li();
  return r.restart(e, t, n), r;
}
function X1() {
  na(), ++Mr;
  for (var e = si, t; e; )
    (t = jn - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Mr;
}
function el() {
  jn = (ai = lo.now()) + Di, Mr = Ur = 0;
  try {
    X1();
  } finally {
    Mr = 0, K1(), jn = 0;
  }
}
function W1() {
  var e = lo.now(), t = e - ai;
  t > Wu && (Di -= t, ai = e);
}
function K1() {
  for (var e, t = si, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : si = n);
  jr = e, Es(r);
}
function Es(e) {
  if (!Mr) {
    Ur && (Ur = clearTimeout(Ur));
    var t = e - jn;
    t > 24 ? (e < 1 / 0 && (Ur = setTimeout(el, e - lo.now() - Di)), Zr && (Zr = clearInterval(Zr))) : (Zr || (ai = lo.now(), Zr = setInterval(W1, Wu)), Mr = 1, Ku(el));
  }
}
function tl(e, t, n) {
  var r = new li();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var F1 = Ai("start", "end", "cancel", "interrupt"), Z1 = [], Zu = 0, nl = 1, Ss = 2, Ko = 3, rl = 4, Ns = 5, Fo = 6;
function Li(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  q1(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: F1,
    tween: Z1,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Zu
  });
}
function ra(e, t) {
  var n = jt(e, t);
  if (n.state > Zu) throw new Error("too late; already scheduled");
  return n;
}
function dn(e, t) {
  var n = jt(e, t);
  if (n.state > Ko) throw new Error("too late; already running");
  return n;
}
function jt(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function q1(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Fu(i, 0, n.time);
  function i(u) {
    n.state = nl, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var c, f, d, g;
    if (n.state !== nl) return l();
    for (c in r)
      if (g = r[c], g.name === n.name) {
        if (g.state === Ko) return tl(s);
        g.state === rl ? (g.state = Fo, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[c]) : +c < t && (g.state = Fo, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[c]);
      }
    if (tl(function() {
      n.state === Ko && (n.state = rl, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = Ss, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Ss) {
      for (n.state = Ko, o = new Array(d = n.tween.length), c = 0, f = -1; c < d; ++c)
        (g = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++f] = g);
      o.length = f + 1;
    }
  }
  function a(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Ns, 1), f = -1, d = o.length; ++f < d; )
      o[f].call(e, c);
    n.state === Ns && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = Fo, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function Zo(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > Ss && r.state < Ns, r.state = Fo, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function G1(e) {
  return this.each(function() {
    Zo(this, e);
  });
}
function U1(e, t) {
  var n, r;
  return function() {
    var o = dn(this, e), i = o.tween;
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
function j1(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = dn(this, e), s = i.tween;
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
function J1(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = jt(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? U1 : j1)(n, e, t));
}
function oa(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = dn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return jt(o, r).value[t];
  };
}
function qu(e, t) {
  var n;
  return (typeof t == "number" ? An : t instanceof ao ? ja : (n = ao(t)) ? (t = n, ja) : O1)(e, t);
}
function Q1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function ev(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function tv(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function nv(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function rv(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function ov(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function iv(e, t) {
  var n = Oi(e), r = n === "transform" ? H1 : qu;
  return this.attrTween(e, typeof t == "function" ? (n.local ? ov : rv)(n, r, oa(this, "attr." + e, t)) : t == null ? (n.local ? ev : Q1)(n) : (n.local ? nv : tv)(n, r, t));
}
function sv(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function av(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function lv(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && av(e, i)), n;
  }
  return o._value = t, o;
}
function uv(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && sv(e, i)), n;
  }
  return o._value = t, o;
}
function cv(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Oi(e);
  return this.tween(n, (r.local ? lv : uv)(r, t));
}
function dv(e, t) {
  return function() {
    ra(this, e).delay = +t.apply(this, arguments);
  };
}
function fv(e, t) {
  return t = +t, function() {
    ra(this, e).delay = t;
  };
}
function gv(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? dv : fv)(t, e)) : jt(this.node(), t).delay;
}
function hv(e, t) {
  return function() {
    dn(this, e).duration = +t.apply(this, arguments);
  };
}
function vv(e, t) {
  return t = +t, function() {
    dn(this, e).duration = t;
  };
}
function pv(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? hv : vv)(t, e)) : jt(this.node(), t).duration;
}
function mv(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    dn(this, e).ease = t;
  };
}
function yv(e) {
  var t = this._id;
  return arguments.length ? this.each(mv(t, e)) : jt(this.node(), t).ease;
}
function wv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    dn(this, e).ease = n;
  };
}
function _v(e) {
  if (typeof e != "function") throw new Error();
  return this.each(wv(this._id, e));
}
function xv(e) {
  typeof e != "function" && (e = Su(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new En(r, this._parents, this._name, this._id);
}
function bv(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], u = n[a], c = l.length, f = s[a] = new Array(c), d, g = 0; g < c; ++g)
      (d = l[g] || u[g]) && (f[g] = d);
  for (; a < r; ++a)
    s[a] = t[a];
  return new En(s, this._parents, this._name, this._id);
}
function Cv(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function kv(e, t, n) {
  var r, o, i = Cv(t) ? ra : dn;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function Ev(e, t) {
  var n = this._id;
  return arguments.length < 2 ? jt(this.node(), n).on.on(e) : this.each(kv(n, e, t));
}
function Sv(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Nv() {
  return this.on("end.remove", Sv(this._id));
}
function Pv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Qs(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), c, f, d = 0; d < l; ++d)
      (c = a[d]) && (f = e.call(c, c.__data__, d, a)) && ("__data__" in c && (f.__data__ = c.__data__), u[d] = f, Li(u[d], t, n, d, u, jt(c, n)));
  return new En(i, this._parents, t, n);
}
function Mv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Eu(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, c, f = 0; f < u; ++f)
      if (c = l[f]) {
        for (var d = e.call(c, c.__data__, f, l), g, v = jt(c, n), x = 0, C = d.length; x < C; ++x)
          (g = d[x]) && Li(g, t, n, x, d, v);
        i.push(d), s.push(c);
      }
  return new En(i, s, t, n);
}
var $v = xo.prototype.constructor;
function Tv() {
  return new $v(this._groups, this._parents);
}
function Av(e, t) {
  var n, r, o;
  return function() {
    var i = Pr(this, e), s = (this.style.removeProperty(e), Pr(this, e));
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
    var s = Pr(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Dv(e, t, n) {
  var r, o, i;
  return function() {
    var s = Pr(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), Pr(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function Lv(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = dn(this, e), u = l.on, c = l.value[i] == null ? a || (a = Gu(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(s, o = c), l.on = r;
  };
}
function zv(e, t, n) {
  var r = (e += "") == "transform" ? z1 : qu;
  return t == null ? this.styleTween(e, Av(e, r)).on("end.style." + e, Gu(e)) : typeof t == "function" ? this.styleTween(e, Dv(e, r, oa(this, "style." + e, t))).each(Lv(this._id, e)) : this.styleTween(e, Ov(e, r, t), n).on("end.style." + e, null);
}
function Hv(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function Vv(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && Hv(e, s, n)), r;
  }
  return i._value = t, i;
}
function Iv(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, Vv(e, t, n ?? ""));
}
function Rv(e) {
  return function() {
    this.textContent = e;
  };
}
function Bv(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function Yv(e) {
  return this.tween("text", typeof e == "function" ? Bv(oa(this, "text", e)) : Rv(e == null ? "" : e + ""));
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
function Kv(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, Wv(e));
}
function Fv() {
  for (var e = this._name, t = this._id, n = Uu(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var c = jt(l, t);
        Li(l, e, n, u, s, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new En(r, this._parents, e, n);
}
function Zv() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = dn(this, r), c = u.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var qv = 0;
function En(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Uu() {
  return ++qv;
}
var hn = xo.prototype;
En.prototype = {
  constructor: En,
  select: Pv,
  selectAll: Mv,
  selectChild: hn.selectChild,
  selectChildren: hn.selectChildren,
  filter: xv,
  merge: bv,
  selection: Tv,
  transition: Fv,
  call: hn.call,
  nodes: hn.nodes,
  node: hn.node,
  size: hn.size,
  empty: hn.empty,
  each: hn.each,
  on: Ev,
  attr: iv,
  attrTween: cv,
  style: zv,
  styleTween: Iv,
  text: Yv,
  textTween: Kv,
  remove: Nv,
  tween: J1,
  delay: gv,
  duration: pv,
  ease: yv,
  easeVarying: _v,
  end: Zv,
  [Symbol.iterator]: hn[Symbol.iterator]
};
function Gv(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Uv = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Gv
};
function jv(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Jv(e) {
  var t, n;
  e instanceof En ? (t = e._id, e = e._name) : (t = Uu(), (n = Uv).time = na(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && Li(l, e, t, u, s, n || jv(l, t));
  return new En(r, this._parents, e, t);
}
xo.prototype.interrupt = G1;
xo.prototype.transition = Jv;
const Io = (e) => () => e;
function Qv(e, {
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
function mn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
mn.prototype = {
  constructor: mn,
  scale: function(e) {
    return e === 1 ? this : new mn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new mn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var zi = new mn(1, 0, 0);
ju.prototype = mn.prototype;
function ju(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return zi;
  return e.__zoom;
}
function Ji(e) {
  e.stopImmediatePropagation();
}
function qr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function e0(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function t0() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function ol() {
  return this.__zoom || zi;
}
function n0(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function r0() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function o0(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function Ju() {
  var e = e0, t = t0, n = o0, r = n0, o = r0, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = B1, u = Ai("start", "zoom", "end"), c, f, d, g = 500, v = 150, x = 0, C = 10;
  function S(E) {
    E.property("__zoom", ol).on("wheel.zoom", A, { passive: !1 }).on("mousedown.zoom", L).on("dblclick.zoom", O).filter(o).on("touchstart.zoom", z).on("touchmove.zoom", I).on("touchend.zoom touchcancel.zoom", R).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  S.transform = function(E, M, _, N) {
    var T = E.selection ? E.selection() : E;
    T.property("__zoom", ol), E !== T ? k(E, M, _, N) : T.interrupt().each(function() {
      $(this, arguments).event(N).start().zoom(null, typeof M == "function" ? M.apply(this, arguments) : M).end();
    });
  }, S.scaleBy = function(E, M, _, N) {
    S.scaleTo(E, function() {
      var T = this.__zoom.k, D = typeof M == "function" ? M.apply(this, arguments) : M;
      return T * D;
    }, _, N);
  }, S.scaleTo = function(E, M, _, N) {
    S.transform(E, function() {
      var T = t.apply(this, arguments), D = this.__zoom, B = _ == null ? m(T) : typeof _ == "function" ? _.apply(this, arguments) : _, W = D.invert(B), q = typeof M == "function" ? M.apply(this, arguments) : M;
      return n(b(p(D, q), B, W), T, s);
    }, _, N);
  }, S.translateBy = function(E, M, _, N) {
    S.transform(E, function() {
      return n(this.__zoom.translate(
        typeof M == "function" ? M.apply(this, arguments) : M,
        typeof _ == "function" ? _.apply(this, arguments) : _
      ), t.apply(this, arguments), s);
    }, null, N);
  }, S.translateTo = function(E, M, _, N, T) {
    S.transform(E, function() {
      var D = t.apply(this, arguments), B = this.__zoom, W = N == null ? m(D) : typeof N == "function" ? N.apply(this, arguments) : N;
      return n(zi.translate(W[0], W[1]).scale(B.k).translate(
        typeof M == "function" ? -M.apply(this, arguments) : -M,
        typeof _ == "function" ? -_.apply(this, arguments) : -_
      ), D, s);
    }, N, T);
  };
  function p(E, M) {
    return M = Math.max(i[0], Math.min(i[1], M)), M === E.k ? E : new mn(M, E.x, E.y);
  }
  function b(E, M, _) {
    var N = M[0] - _[0] * E.k, T = M[1] - _[1] * E.k;
    return N === E.x && T === E.y ? E : new mn(E.k, N, T);
  }
  function m(E) {
    return [(+E[0][0] + +E[1][0]) / 2, (+E[0][1] + +E[1][1]) / 2];
  }
  function k(E, M, _, N) {
    E.on("start.zoom", function() {
      $(this, arguments).event(N).start();
    }).on("interrupt.zoom end.zoom", function() {
      $(this, arguments).event(N).end();
    }).tween("zoom", function() {
      var T = this, D = arguments, B = $(T, D).event(N), W = t.apply(T, D), q = _ == null ? m(W) : typeof _ == "function" ? _.apply(T, D) : _, fe = Math.max(W[1][0] - W[0][0], W[1][1] - W[0][1]), j = T.__zoom, Y = typeof M == "function" ? M.apply(T, D) : M, he = l(j.invert(q).concat(fe / j.k), Y.invert(q).concat(fe / Y.k));
      return function(xe) {
        if (xe === 1) xe = Y;
        else {
          var be = he(xe), ue = fe / be[2];
          xe = new mn(ue, q[0] - be[0] * ue, q[1] - be[1] * ue);
        }
        B.zoom(null, xe);
      };
    });
  }
  function $(E, M, _) {
    return !_ && E.__zooming || new P(E, M);
  }
  function P(E, M) {
    this.that = E, this.args = M, this.active = 0, this.sourceEvent = null, this.extent = t.apply(E, M), this.taps = 0;
  }
  P.prototype = {
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
      var M = Ht(this.that).datum();
      u.call(
        E,
        this.that,
        new Qv(E, {
          sourceEvent: this.sourceEvent,
          target: S,
          transform: this.that.__zoom,
          dispatch: u
        }),
        M
      );
    }
  };
  function A(E, ...M) {
    if (!e.apply(this, arguments)) return;
    var _ = $(this, M).event(E), N = this.__zoom, T = Math.max(i[0], Math.min(i[1], N.k * Math.pow(2, r.apply(this, arguments)))), D = Wt(E);
    if (_.wheel)
      (_.mouse[0][0] !== D[0] || _.mouse[0][1] !== D[1]) && (_.mouse[1] = N.invert(_.mouse[0] = D)), clearTimeout(_.wheel);
    else {
      if (N.k === T) return;
      _.mouse = [D, N.invert(D)], Zo(this), _.start();
    }
    qr(E), _.wheel = setTimeout(B, v), _.zoom("mouse", n(b(p(N, T), _.mouse[0], _.mouse[1]), _.extent, s));
    function B() {
      _.wheel = null, _.end();
    }
  }
  function L(E, ...M) {
    if (d || !e.apply(this, arguments)) return;
    var _ = E.currentTarget, N = $(this, M, !0).event(E), T = Ht(E.view).on("mousemove.zoom", q, !0).on("mouseup.zoom", fe, !0), D = Wt(E, _), B = E.clientX, W = E.clientY;
    zu(E.view), Ji(E), N.mouse = [D, this.__zoom.invert(D)], Zo(this), N.start();
    function q(j) {
      if (qr(j), !N.moved) {
        var Y = j.clientX - B, he = j.clientY - W;
        N.moved = Y * Y + he * he > x;
      }
      N.event(j).zoom("mouse", n(b(N.that.__zoom, N.mouse[0] = Wt(j, _), N.mouse[1]), N.extent, s));
    }
    function fe(j) {
      T.on("mousemove.zoom mouseup.zoom", null), Hu(j.view, N.moved), qr(j), N.event(j).end();
    }
  }
  function O(E, ...M) {
    if (e.apply(this, arguments)) {
      var _ = this.__zoom, N = Wt(E.changedTouches ? E.changedTouches[0] : E, this), T = _.invert(N), D = _.k * (E.shiftKey ? 0.5 : 2), B = n(b(p(_, D), N, T), t.apply(this, M), s);
      qr(E), a > 0 ? Ht(this).transition().duration(a).call(k, B, N, E) : Ht(this).call(S.transform, B, N, E);
    }
  }
  function z(E, ...M) {
    if (e.apply(this, arguments)) {
      var _ = E.touches, N = _.length, T = $(this, M, E.changedTouches.length === N).event(E), D, B, W, q;
      for (Ji(E), B = 0; B < N; ++B)
        W = _[B], q = Wt(W, this), q = [q, this.__zoom.invert(q), W.identifier], T.touch0 ? !T.touch1 && T.touch0[2] !== q[2] && (T.touch1 = q, T.taps = 0) : (T.touch0 = q, D = !0, T.taps = 1 + !!c);
      c && (c = clearTimeout(c)), D && (T.taps < 2 && (f = q[0], c = setTimeout(function() {
        c = null;
      }, g)), Zo(this), T.start());
    }
  }
  function I(E, ...M) {
    if (this.__zooming) {
      var _ = $(this, M).event(E), N = E.changedTouches, T = N.length, D, B, W, q;
      for (qr(E), D = 0; D < T; ++D)
        B = N[D], W = Wt(B, this), _.touch0 && _.touch0[2] === B.identifier ? _.touch0[0] = W : _.touch1 && _.touch1[2] === B.identifier && (_.touch1[0] = W);
      if (B = _.that.__zoom, _.touch1) {
        var fe = _.touch0[0], j = _.touch0[1], Y = _.touch1[0], he = _.touch1[1], xe = (xe = Y[0] - fe[0]) * xe + (xe = Y[1] - fe[1]) * xe, be = (be = he[0] - j[0]) * be + (be = he[1] - j[1]) * be;
        B = p(B, Math.sqrt(xe / be)), W = [(fe[0] + Y[0]) / 2, (fe[1] + Y[1]) / 2], q = [(j[0] + he[0]) / 2, (j[1] + he[1]) / 2];
      } else if (_.touch0) W = _.touch0[0], q = _.touch0[1];
      else return;
      _.zoom("touch", n(b(B, W, q), _.extent, s));
    }
  }
  function R(E, ...M) {
    if (this.__zooming) {
      var _ = $(this, M).event(E), N = E.changedTouches, T = N.length, D, B;
      for (Ji(E), d && clearTimeout(d), d = setTimeout(function() {
        d = null;
      }, g), D = 0; D < T; ++D)
        B = N[D], _.touch0 && _.touch0[2] === B.identifier ? delete _.touch0 : _.touch1 && _.touch1[2] === B.identifier && delete _.touch1;
      if (_.touch1 && !_.touch0 && (_.touch0 = _.touch1, delete _.touch1), _.touch0) _.touch0[1] = this.__zoom.invert(_.touch0[0]);
      else if (_.end(), _.taps === 2 && (B = Wt(B, this), Math.hypot(f[0] - B[0], f[1] - B[1]) < C)) {
        var W = Ht(this).on("dblclick.zoom");
        W && W.apply(this, arguments);
      }
    }
  }
  return S.wheelDelta = function(E) {
    return arguments.length ? (r = typeof E == "function" ? E : Io(+E), S) : r;
  }, S.filter = function(E) {
    return arguments.length ? (e = typeof E == "function" ? E : Io(!!E), S) : e;
  }, S.touchable = function(E) {
    return arguments.length ? (o = typeof E == "function" ? E : Io(!!E), S) : o;
  }, S.extent = function(E) {
    return arguments.length ? (t = typeof E == "function" ? E : Io([[+E[0][0], +E[0][1]], [+E[1][0], +E[1][1]]]), S) : t;
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
    return arguments.length ? (x = (E = +E) * E, S) : Math.sqrt(x);
  }, S.tapDistance = function(E) {
    return arguments.length ? (C = +E, S) : C;
  }, S;
}
const Br = {
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
}, ui = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
];
var Jn;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Jn || (Jn = {}));
var Vn;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(Vn || (Vn = {}));
var ci;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(ci || (ci = {}));
const Ps = {
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
var mr;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(mr || (mr = {}));
var uo;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(uo || (uo = {}));
var ye;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(ye || (ye = {}));
const il = {
  [ye.Left]: ye.Right,
  [ye.Right]: ye.Left,
  [ye.Top]: ye.Bottom,
  [ye.Bottom]: ye.Top
};
function i0(e, t) {
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
function sl(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t != null && t.has(i) || r.push(o);
  }), r.length && n(r);
}
function s0(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const a0 = (e) => "id" in e && "source" in e && "target" in e, l0 = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), ia = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Co = (e, t = [0, 0]) => {
  const { width: n, height: r } = Xn(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, u0 = (e, t = { nodeOrigin: [0, 0], nodeLookup: void 0 }) => {
  if (process.env.NODE_ENV === "development" && !t.nodeLookup && console.warn("Please use `getNodesBounds` from `useReactFlow`/`useSvelteFlow` hook to ensure correct values for sub flows. If not possible, you have to provide a nodeLookup to support sub flows."), e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : ia(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? di(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Hi(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Vi(n);
}, ko = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = di(r);
      n = Hi(n, o);
    }
  }), Vi(n);
}, Qu = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...Eo(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: f = !0, hidden: d = !1 } = u;
    if (s && !f || d)
      continue;
    const g = c.width ?? u.width ?? u.initialWidth ?? null, v = c.height ?? u.height ?? u.initialHeight ?? null, x = co(a, Tr(u)), C = (g ?? 0) * (v ?? 0), S = i && x > 0;
    (!u.internals.handleBounds || S || x >= C || u.dragging) && l.push(u);
  }
  return l;
}, Ms = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function al(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && ((t == null ? void 0 : t.includeHiddenNodes) || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function ll({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!1);
  const a = ko(e), l = aa(a, t, n, (s == null ? void 0 : s.minZoom) ?? o, (s == null ? void 0 : s.maxZoom) ?? i, (s == null ? void 0 : s.padding) ?? 0.1);
  return await r.setViewport(l, { duration: s == null ? void 0 : s.duration }), Promise.resolve(!0);
}
function c0({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: u } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, c = s.origin ?? r;
  let f = o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i == null || i("005", Br.error005());
    else {
      const g = a.measured.width, v = a.measured.height;
      g && v && (f = [
        [l, u],
        [l + g, u + v]
      ]);
    }
  else a && Ar(s.extent) && (f = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const d = Ar(f) ? Qn(t, f, s.measured) : t;
  return {
    position: {
      x: d.x - l + s.measured.width * c[0],
      y: d.y - u + s.measured.height * c[1]
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
  const a = new Set(t.map((d) => d.id)), l = r.filter((d) => d.deletable !== !1), c = Ms(s, l);
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
const $r = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), Qn = (e = { x: 0, y: 0 }, t, n) => ({
  x: $r(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: $r(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function tc(e, t, n) {
  const { width: r, height: o } = Xn(n), { x: i, y: s } = n.internals.positionAbsolute;
  return Qn(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const ul = (e, t, n) => e < t ? $r(Math.abs(e - t), 1, t) / t : e > n ? -$r(Math.abs(e - n), 1, t) / t : 0, nc = (e, t, n = 15, r = 40) => {
  const o = ul(e.x, r, t.width - r) * n, i = ul(e.y, r, t.height - r) * n;
  return [o, i];
}, Hi = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), $s = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Vi = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Tr = (e, t = [0, 0]) => {
  var o, i;
  const { x: n, y: r } = ia(e) ? e.internals.positionAbsolute : Co(e, t);
  return {
    x: n,
    y: r,
    width: ((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, di = (e, t = [0, 0]) => {
  var o, i;
  const { x: n, y: r } = ia(e) ? e.internals.positionAbsolute : Co(e, t);
  return {
    x: n,
    y: r,
    x2: n + (((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, rc = (e, t) => Vi(Hi($s(e), $s(t))), co = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, cl = (e) => yn(e.width) && yn(e.height) && yn(e.x) && yn(e.y), yn = (e) => !isNaN(e) && isFinite(e), oc = (e, t) => {
  process.env.NODE_ENV === "development" && console.warn(`[React Flow]: ${t} Help: https://reactflow.dev/error#${e}`);
}, sa = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Eo = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? sa(a, s) : a;
}, ic = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
}), aa = (e, t, n, r, o, i) => {
  const s = t / (e.width * (1 + i)), a = n / (e.height * (1 + i)), l = Math.min(s, a), u = $r(l, r, o), c = e.x + e.width / 2, f = e.y + e.height / 2, d = t / 2 - c * u, g = n / 2 - f * u;
  return { x: d, y: g, zoom: u };
}, fi = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function Ar(e) {
  return e !== void 0 && e !== "parent";
}
function Xn(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function sc(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function d0(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function Qi(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = xn(e), a = Eo({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: s - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? sa(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const la = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), f0 = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, g0 = ["INPUT", "SELECT", "TEXTAREA"];
function h0(e) {
  var r, o;
  const t = ((o = (r = e.composedPath) == null ? void 0 : r.call(e)) == null ? void 0 : o[0]) || e.target;
  return (t == null ? void 0 : t.nodeType) !== 1 ? !1 : g0.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const ac = (e) => "clientX" in e, xn = (e, t) => {
  var i, s;
  const n = ac(e), r = n ? e.clientX : (i = e.touches) == null ? void 0 : i[0].clientX, o = n ? e.clientY : (s = e.touches) == null ? void 0 : s[0].clientY;
  return {
    x: r - ((t == null ? void 0 : t.left) ?? 0),
    y: o - ((t == null ? void 0 : t.top) ?? 0)
  };
}, dl = (e, t, n, r, o) => {
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
      ...la(s)
    };
  });
};
function v0({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, c = Math.abs(l - e), f = Math.abs(u - t);
  return [l, u, c, f];
}
function Ro(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function fl({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case ye.Left:
      return [t - Ro(t - r, i), n];
    case ye.Right:
      return [t + Ro(r - t, i), n];
    case ye.Top:
      return [t, n - Ro(n - o, i)];
    case ye.Bottom:
      return [t, n + Ro(o - n, i)];
  }
}
function lc({ sourceX: e, sourceY: t, sourcePosition: n = ye.Bottom, targetX: r, targetY: o, targetPosition: i = ye.Top, curvature: s = 0.25 }) {
  const [a, l] = fl({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [u, c] = fl({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [f, d, g, v] = v0({
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
function uc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function p0({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const i = n || t.selected || e.selected, s = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (i ? s : 0);
}
function m0({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = Hi(di(e), di(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return co(s, Vi(i)) > 0;
}
const y0 = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, w0 = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), _0 = (e, t) => {
  if (!e.source || !e.target)
    return oc("006", Br.error006()), t;
  let n;
  return a0(e) ? n = { ...e } : n = {
    ...e,
    id: y0(e)
  }, w0(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Ts({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = uc({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const gl = {
  [ye.Left]: { x: -1, y: 0 },
  [ye.Right]: { x: 1, y: 0 },
  [ye.Top]: { x: 0, y: -1 },
  [ye.Bottom]: { x: 0, y: 1 }
}, x0 = ({ source: e, sourcePosition: t = ye.Bottom, target: n }) => t === ye.Left || t === ye.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, hl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function b0({ source: e, sourcePosition: t = ye.Bottom, target: n, targetPosition: r = ye.Top, center: o, offset: i }) {
  const s = gl[t], a = gl[r], l = { x: e.x + s.x * i, y: e.y + s.y * i }, u = { x: n.x + a.x * i, y: n.y + a.y * i }, c = x0({
    source: l,
    sourcePosition: t,
    target: u
  }), f = c.x !== 0 ? "x" : "y", d = c[f];
  let g = [], v, x;
  const C = { x: 0, y: 0 }, S = { x: 0, y: 0 }, [p, b, m, k] = uc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (s[f] * a[f] === -1) {
    v = o.x ?? p, x = o.y ?? b;
    const P = [
      { x: v, y: l.y },
      { x: v, y: u.y }
    ], A = [
      { x: l.x, y: x },
      { x: u.x, y: x }
    ];
    s[f] === d ? g = f === "x" ? P : A : g = f === "x" ? A : P;
  } else {
    const P = [{ x: l.x, y: u.y }], A = [{ x: u.x, y: l.y }];
    if (f === "x" ? g = s.x === d ? A : P : g = s.y === d ? P : A, t === r) {
      const R = Math.abs(e[f] - n[f]);
      if (R <= i) {
        const E = Math.min(i - 1, i - R);
        s[f] === d ? C[f] = (l[f] > e[f] ? -1 : 1) * E : S[f] = (u[f] > n[f] ? -1 : 1) * E;
      }
    }
    if (t !== r) {
      const R = f === "x" ? "y" : "x", E = s[f] === a[R], M = l[R] > u[R], _ = l[R] < u[R];
      (s[f] === 1 && (!E && M || E && _) || s[f] !== 1 && (!E && _ || E && M)) && (g = f === "x" ? P : A);
    }
    const L = { x: l.x + C.x, y: l.y + C.y }, O = { x: u.x + S.x, y: u.y + S.y }, z = Math.max(Math.abs(L.x - g[0].x), Math.abs(O.x - g[0].x)), I = Math.max(Math.abs(L.y - g[0].y), Math.abs(O.y - g[0].y));
    z >= I ? (v = (L.x + O.x) / 2, x = g[0].y) : (v = g[0].x, x = (L.y + O.y) / 2);
  }
  return [[
    e,
    { x: l.x + C.x, y: l.y + C.y },
    ...g,
    { x: u.x + S.x, y: u.y + S.y },
    n
  ], v, x, m, k];
}
function C0(e, t, n, r) {
  const o = Math.min(hl(e, t) / 2, hl(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, c = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * c}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function gi({ sourceX: e, sourceY: t, sourcePosition: n = ye.Bottom, targetX: r, targetY: o, targetPosition: i = ye.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20 }) {
  const [c, f, d, g, v] = b0({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u
  });
  return [c.reduce((C, S, p) => {
    let b = "";
    return p > 0 && p < c.length - 1 ? b = C0(c[p - 1], S, c[p + 1], s) : b = `${p === 0 ? "M" : "L"}${S.x} ${S.y}`, C += b, C;
  }, ""), f, d, g, v];
}
function vl(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function k0(e) {
  var f;
  const { sourceNode: t, targetNode: n } = e;
  if (!vl(t) || !vl(n))
    return null;
  const r = t.internals.handleBounds || pl(t.handles), o = n.internals.handleBounds || pl(n.handles), i = ml((r == null ? void 0 : r.source) ?? [], e.sourceHandle), s = ml(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === Jn.Strict ? (o == null ? void 0 : o.target) ?? [] : ((o == null ? void 0 : o.target) ?? []).concat((o == null ? void 0 : o.source) ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return (f = e.onError) == null || f.call(e, "008", Br.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = (i == null ? void 0 : i.position) || ye.Bottom, l = (s == null ? void 0 : s.position) || ye.Top, u = fo(t, i, a), c = fo(n, s, l);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: c.x,
    targetY: c.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function pl(e) {
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
function fo(e, t, n = ye.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? Xn(e);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case ye.Top:
      return { x: o + s / 2, y: i };
    case ye.Right:
      return { x: o + s, y: i + a / 2 };
    case ye.Bottom:
      return { x: o + s / 2, y: i + a };
    case ye.Left:
      return { x: o, y: i + a / 2 };
  }
}
function ml(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function As(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function E0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = As(l, t);
      i.has(u) || (s.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function S0(e, t, n, r, o) {
  let i = 0.5;
  o === "start" ? i = 0 : o === "end" && (i = 1);
  let s = [
    (e.x + e.width * i) * t.zoom + t.x,
    e.y * t.zoom + t.y - r
  ], a = [-100 * i, -100];
  switch (n) {
    case ye.Right:
      s = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [0, -100 * i];
      break;
    case ye.Bottom:
      s[1] = (e.y + e.height) * t.zoom + t.y + r, a[1] = 0;
      break;
    case ye.Left:
      s = [
        e.x * t.zoom + t.x - r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [-100, -100 * i];
      break;
  }
  return `translate(${s[0]}px, ${s[1]}px) translate(${a[0]}%, ${a[1]}%)`;
}
const ua = {
  nodeOrigin: [0, 0],
  nodeExtent: ui,
  elevateNodesOnSelect: !0,
  defaults: {}
}, N0 = {
  ...ua,
  checkEquality: !0
};
function ca(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function P0(e, t, n) {
  const r = ca(ua, n);
  for (const o of e.values())
    if (o.parentId)
      da(o, e, t, r);
    else {
      const i = Co(o, r.nodeOrigin), s = Ar(o.extent) ? o.extent : r.nodeExtent, a = Qn(i, s, Xn(o));
      o.internals.positionAbsolute = a;
    }
}
function cc(e, t, n, r) {
  var a, l;
  const o = ca(N0, r), i = new Map(t), s = o != null && o.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let c = i.get(u.id);
    if (o.checkEquality && u === (c == null ? void 0 : c.internals.userNode))
      t.set(u.id, c);
    else {
      const f = Co(u, o.nodeOrigin), d = Ar(u.extent) ? u.extent : o.nodeExtent, g = Qn(f, d, Xn(u));
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
          z: dc(u, s),
          userNode: u
        }
      }, t.set(u.id, c);
    }
    u.parentId && da(c, t, n, r);
  }
}
function M0(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function da(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: s } = ca(ua, r), a = e.parentId, l = t.get(a);
  if (!l) {
    console.warn(`Parent node ${a} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  M0(e, n);
  const u = o ? 1e3 : 0, { x: c, y: f, z: d } = $0(e, l, i, s, u), { positionAbsolute: g } = e.internals, v = c !== g.x || f !== g.y;
  (v || d !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: v ? { x: c, y: f } : g,
      z: d
    }
  });
}
function dc(e, t) {
  return (yn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function $0(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = Xn(e), l = Co(e, n), u = Ar(e.extent) ? Qn(l, e.extent, a) : l;
  let c = Qn({ x: i + u.x, y: s + u.y }, r, a);
  e.extent === "parent" && (c = tc(c, a, t));
  const f = dc(e, o), d = t.internals.z ?? 0;
  return {
    x: c.x,
    y: c.y,
    z: d > f ? d : f
  };
}
function T0(e, t, n, r = [0, 0]) {
  var s;
  const o = [], i = /* @__PURE__ */ new Map();
  for (const a of e) {
    const l = t.get(a.parentId);
    if (!l)
      continue;
    const u = ((s = i.get(a.parentId)) == null ? void 0 : s.expandedRect) ?? Tr(l), c = rc(u, a.rect);
    i.set(a.parentId, { expandedRect: c, parent: l });
  }
  return i.size > 0 && i.forEach(({ expandedRect: a, parent: l }, u) => {
    var b;
    const c = l.internals.positionAbsolute, f = Xn(l), d = l.origin ?? r, g = a.x < c.x ? Math.round(Math.abs(c.x - a.x)) : 0, v = a.y < c.y ? Math.round(Math.abs(c.y - a.y)) : 0, x = Math.max(f.width, Math.round(a.width)), C = Math.max(f.height, Math.round(a.height)), S = (x - f.width) * d[0], p = (C - f.height) * d[1];
    (g > 0 || v > 0 || S || p) && (o.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - g + S,
        y: l.position.y - v + p
      }
    }), (b = n.get(u)) == null || b.forEach((m) => {
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
        width: x + (g ? d[0] * g - S : 0),
        height: C + (v ? d[1] * v - p : 0)
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
    const v = la(d.nodeElement), x = g.measured.width !== v.width || g.measured.height !== v.height;
    if (!!(v.width && v.height && (x || !g.internals.handleBounds || d.force))) {
      const S = d.nodeElement.getBoundingClientRect(), p = Ar(g.extent) ? g.extent : i;
      let { positionAbsolute: b } = g.internals;
      g.parentId && g.extent === "parent" ? b = tc(b, v, t.get(g.parentId)) : p && (b = Qn(b, p, v));
      const m = {
        ...g,
        measured: v,
        internals: {
          ...g.internals,
          positionAbsolute: b,
          handleBounds: {
            source: dl("source", d.nodeElement, S, c, g.id),
            target: dl("target", d.nodeElement, S, c, g.id)
          }
        }
      };
      t.set(g.id, m), g.parentId && da(m, t, n, { nodeOrigin: o }), a = !0, x && (l.push({
        id: g.id,
        type: "dimensions",
        dimensions: v
      }), g.expandParent && g.parentId && f.push({
        id: g.id,
        parentId: g.parentId,
        rect: Tr(m, o)
      }));
    }
  }
  if (f.length > 0) {
    const d = T0(f, t, n, o);
    l.push(...d);
  }
  return { changes: l, updatedInternals: a };
}
async function O0({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function yl(e, t, n, r, o, i) {
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
function fc(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, c = `${i}-${a}--${o}-${s}`;
    yl("source", l, c, e, o, s), yl("target", l, u, e, i, a), t.set(r.id, r);
  }
}
function D0(e, t) {
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
function gc(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : gc(n, t) : !1;
}
function wl(e, t, n) {
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
    if ((s.selected || s.id === r) && (!s.parentId || !gc(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function es({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
function z0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, c = null, f = !1, d = null, g = !1;
  function v({ noDragClassName: C, handleSelector: S, domNode: p, isSelectable: b, nodeId: m, nodeClickDistance: k = 0 }) {
    d = Ht(p);
    function $({ x: O, y: z }, I) {
      const { nodeLookup: R, nodeExtent: E, snapGrid: M, snapToGrid: _, nodeOrigin: N, onNodeDrag: T, onSelectionDrag: D, onError: B, updateNodePositions: W } = t();
      i = { x: O, y: z };
      let q = !1, fe = { x: 0, y: 0, x2: 0, y2: 0 };
      if (a.size > 1 && E) {
        const j = ko(a);
        fe = $s(j);
      }
      for (const [j, Y] of a) {
        if (!R.has(j))
          continue;
        let he = { x: O - Y.distance.x, y: z - Y.distance.y };
        _ && (he = sa(he, M));
        let xe = [
          [E[0][0], E[0][1]],
          [E[1][0], E[1][1]]
        ];
        if (a.size > 1 && E && !Y.extent) {
          const { positionAbsolute: le } = Y.internals, ae = le.x - fe.x + E[0][0], ke = le.x + Y.measured.width - fe.x2 + E[1][0], Xe = le.y - fe.y + E[0][1], He = le.y + Y.measured.height - fe.y2 + E[1][1];
          xe = [
            [ae, Xe],
            [ke, He]
          ];
        }
        const { position: be, positionAbsolute: ue } = c0({
          nodeId: j,
          nextPosition: he,
          nodeLookup: R,
          nodeExtent: xe,
          nodeOrigin: N,
          onError: B
        });
        q = q || Y.position.x !== be.x || Y.position.y !== be.y, Y.position = be, Y.internals.positionAbsolute = ue;
      }
      if (q && (W(a, !0), I && (r || T || !m && D))) {
        const [j, Y] = es({
          nodeId: m,
          dragItems: a,
          nodeLookup: R
        });
        r == null || r(I, a, j, Y), T == null || T(I, j, Y), m || D == null || D(I, Y);
      }
    }
    async function P() {
      if (!c)
        return;
      const { transform: O, panBy: z, autoPanSpeed: I, autoPanOnNodeDrag: R } = t();
      if (!R) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [E, M] = nc(u, c, I);
      (E !== 0 || M !== 0) && (i.x = (i.x ?? 0) - E / O[2], i.y = (i.y ?? 0) - M / O[2], await z({ x: E, y: M }) && $(i, null)), s = requestAnimationFrame(P);
    }
    function A(O) {
      var q;
      const { nodeLookup: z, multiSelectionActive: I, nodesDraggable: R, transform: E, snapGrid: M, snapToGrid: _, selectNodesOnDrag: N, onNodeDragStart: T, onSelectionDragStart: D, unselectNodesAndEdges: B } = t();
      f = !0, (!N || !b) && !I && m && ((q = z.get(m)) != null && q.selected || B()), b && N && m && (e == null || e(m));
      const W = Qi(O.sourceEvent, { transform: E, snapGrid: M, snapToGrid: _, containerBounds: c });
      if (i = W, a = L0(z, R, W, m), a.size > 0 && (n || T || !m && D)) {
        const [fe, j] = es({
          nodeId: m,
          dragItems: a,
          nodeLookup: z
        });
        n == null || n(O.sourceEvent, a, fe, j), T == null || T(O.sourceEvent, fe, j), m || D == null || D(O.sourceEvent, j);
      }
    }
    const L = v1().clickDistance(k).on("start", (O) => {
      const { domNode: z, nodeDragThreshold: I, transform: R, snapGrid: E, snapToGrid: M } = t();
      c = (z == null ? void 0 : z.getBoundingClientRect()) || null, g = !1, I === 0 && A(O), i = Qi(O.sourceEvent, { transform: R, snapGrid: E, snapToGrid: M, containerBounds: c }), u = xn(O.sourceEvent, c);
    }).on("drag", (O) => {
      const { autoPanOnNodeDrag: z, transform: I, snapGrid: R, snapToGrid: E, nodeDragThreshold: M, nodeLookup: _ } = t(), N = Qi(O.sourceEvent, { transform: I, snapGrid: R, snapToGrid: E, containerBounds: c });
      if ((O.sourceEvent.type === "touchmove" && O.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      m && !_.has(m)) && (g = !0), !g) {
        if (!l && z && f && (l = !0, P()), !f) {
          const T = N.xSnapped - (i.x ?? 0), D = N.ySnapped - (i.y ?? 0);
          Math.sqrt(T * T + D * D) > M && A(O);
        }
        (i.x !== N.xSnapped || i.y !== N.ySnapped) && a && f && (u = xn(O.sourceEvent, c), $(N, O.sourceEvent));
      }
    }).on("end", (O) => {
      if (!(!f || g) && (l = !1, f = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: z, updateNodePositions: I, onNodeDragStop: R, onSelectionDragStop: E } = t();
        if (I(a, !1), o || R || !m && E) {
          const [M, _] = es({
            nodeId: m,
            dragItems: a,
            nodeLookup: z,
            dragging: !1
          });
          o == null || o(O.sourceEvent, a, M, _), R == null || R(O.sourceEvent, M, _), m || E == null || E(O.sourceEvent, _);
        }
      }
    }).filter((O) => {
      const z = O.target;
      return !O.button && (!C || !wl(z, `.${C}`, p)) && (!S || wl(z, S, p));
    });
    d.call(L);
  }
  function x() {
    d == null || d.on(".drag", null);
  }
  return {
    update: v,
    destroy: x
  };
}
function H0(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    co(o, Tr(i)) > 0 && r.push(i);
  return r;
}
const V0 = 250;
function I0(e, t, n, r) {
  var a, l;
  let o = [], i = 1 / 0;
  const s = H0(e, n, t + V0);
  for (const u of s) {
    const c = [...((a = u.internals.handleBounds) == null ? void 0 : a.source) ?? [], ...((l = u.internals.handleBounds) == null ? void 0 : l.target) ?? []];
    for (const f of c) {
      if (r.nodeId === f.nodeId && r.type === f.type && r.id === f.id)
        continue;
      const { x: d, y: g } = fo(u, f, f.position, !0), v = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(g - e.y, 2));
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
function hc(e, t, n, r, o, i = !1) {
  var u, c, f;
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? (u = s.internals.handleBounds) == null ? void 0 : u[t] : [...((c = s.internals.handleBounds) == null ? void 0 : c.source) ?? [], ...((f = s.internals.handleBounds) == null ? void 0 : f.target) ?? []], l = (n ? a == null ? void 0 : a.find((d) => d.id === n) : a == null ? void 0 : a[0]) ?? null;
  return l && i ? { ...l, ...fo(s, l, l.position, !0) } : l;
}
function vc(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function R0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const pc = () => !0;
function B0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: f, panBy: d, cancelConnection: g, onConnectStart: v, onConnect: x, onConnectEnd: C, isValidConnection: S = pc, onReconnectEnd: p, updateConnection: b, getTransform: m, getFromHandle: k, autoPanSpeed: $ }) {
  const P = f0(e.target);
  let A = 0, L;
  const { x: O, y: z } = xn(e), I = P == null ? void 0 : P.elementFromPoint(O, z), R = vc(i, I), E = a == null ? void 0 : a.getBoundingClientRect();
  if (!E || !R)
    return;
  const M = hc(o, R, r, l, t);
  if (!M)
    return;
  let _ = xn(e, E), N = !1, T = null, D = !1, B = null;
  function W() {
    if (!c || !E)
      return;
    const [ue, le] = nc(_, E, $);
    d({ x: ue, y: le }), A = requestAnimationFrame(W);
  }
  const q = {
    ...M,
    nodeId: o,
    type: R,
    position: M.position
  }, fe = l.get(o), Y = {
    inProgress: !0,
    isValid: null,
    from: fo(fe, q, ye.Left, !0),
    fromHandle: q,
    fromPosition: q.position,
    fromNode: fe,
    to: _,
    toHandle: null,
    toPosition: il[q.position],
    toNode: null
  };
  b(Y);
  let he = Y;
  v == null || v(e, { nodeId: o, handleId: r, handleType: R });
  function xe(ue) {
    if (!k() || !q) {
      be(ue);
      return;
    }
    const le = m();
    _ = xn(ue, E), L = I0(Eo(_, le, !1, [1, 1]), n, l, q), N || (W(), N = !0);
    const ae = mc(ue, {
      handle: L,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: S,
      doc: P,
      lib: u,
      flowId: f,
      nodeLookup: l
    });
    B = ae.handleDomNode, T = ae.connection, D = R0(!!L, ae.isValid);
    const ke = {
      // from stays the same
      ...he,
      isValid: D,
      to: L && D ? ic({ x: L.x, y: L.y }, le) : _,
      toHandle: ae.toHandle,
      toPosition: D && ae.toHandle ? ae.toHandle.position : il[q.position],
      toNode: ae.toHandle ? l.get(ae.toHandle.nodeId) : null
    };
    D && L && he.toHandle && ke.toHandle && he.toHandle.type === ke.toHandle.type && he.toHandle.nodeId === ke.toHandle.nodeId && he.toHandle.id === ke.toHandle.id && he.to.x === ke.to.x && he.to.y === ke.to.y || (b(ke), he = ke);
  }
  function be(ue) {
    (L || B) && T && D && (x == null || x(T));
    const { inProgress: le, ...ae } = he, ke = {
      ...ae,
      toPosition: he.toHandle ? he.toPosition : null
    };
    C == null || C(ue, ke), i && (p == null || p(ue, ke)), g(), cancelAnimationFrame(A), N = !1, D = !1, T = null, B = null, P.removeEventListener("mousemove", xe), P.removeEventListener("mouseup", be), P.removeEventListener("touchmove", xe), P.removeEventListener("touchend", be);
  }
  P.addEventListener("mousemove", xe), P.addEventListener("mouseup", be), P.addEventListener("touchmove", xe), P.addEventListener("touchend", be);
}
function mc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = pc, nodeLookup: c }) {
  const f = i === "target", d = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: g, y: v } = xn(e), x = s.elementFromPoint(g, v), C = x != null && x.classList.contains(`${a}-flow__handle`) ? x : d, S = {
    handleDomNode: C,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (C) {
    const p = vc(void 0, C), b = C.getAttribute("data-nodeid"), m = C.getAttribute("data-handleid"), k = C.classList.contains("connectable"), $ = C.classList.contains("connectableend");
    if (!b || !p)
      return S;
    const P = {
      source: f ? b : r,
      sourceHandle: f ? m : o,
      target: f ? r : b,
      targetHandle: f ? o : m
    };
    S.connection = P;
    const L = k && $ && (n === Jn.Strict ? f && p === "source" || !f && p === "target" : b !== r || m !== o);
    S.isValid = L && u(P), S.toHandle = hc(b, p, m, c, n, !1);
  }
  return S;
}
const Y0 = {
  onPointerDown: B0,
  isValid: mc
};
function X0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Ht(e);
  function i({ translateExtent: a, width: l, height: u, zoomStep: c = 10, pannable: f = !0, zoomable: d = !0, inversePan: g = !1 }) {
    const v = (b) => {
      const m = n();
      if (b.sourceEvent.type !== "wheel" || !t)
        return;
      const k = -b.sourceEvent.deltaY * (b.sourceEvent.deltaMode === 1 ? 0.05 : b.sourceEvent.deltaMode ? 1 : 2e-3) * c, $ = m[2] * Math.pow(2, k);
      t.scaleTo($);
    };
    let x = [0, 0];
    const C = (b) => {
      (b.sourceEvent.type === "mousedown" || b.sourceEvent.type === "touchstart") && (x = [
        b.sourceEvent.clientX ?? b.sourceEvent.touches[0].clientX,
        b.sourceEvent.clientY ?? b.sourceEvent.touches[0].clientY
      ]);
    }, S = (b) => {
      const m = n();
      if (b.sourceEvent.type !== "mousemove" && b.sourceEvent.type !== "touchmove" || !t)
        return;
      const k = [
        b.sourceEvent.clientX ?? b.sourceEvent.touches[0].clientX,
        b.sourceEvent.clientY ?? b.sourceEvent.touches[0].clientY
      ], $ = [k[0] - x[0], k[1] - x[1]];
      x = k;
      const P = r() * Math.max(m[2], Math.log(m[2])) * (g ? -1 : 1), A = {
        x: m[0] - $[0] * P,
        y: m[1] - $[1] * P
      }, L = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: A.x,
        y: A.y,
        zoom: m[2]
      }, L, a);
    }, p = Ju().on("start", C).on("zoom", f ? S : null).on("zoom.wheel", d ? v : null);
    o.call(p, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: Wt
  };
}
const W0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Ii = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), ts = ({ x: e, y: t, zoom: n }) => zi.translate(e, t).scale(n), dr = (e, t) => e.target.closest(`.${t}`), yc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), ns = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, wc = (e) => {
  const t = e.ctrlKey && fi() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function K0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (dr(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const f = n.property("__zoom").k || 1;
    if (c.ctrlKey && s) {
      const C = Wt(c), S = wc(c), p = f * Math.pow(2, S);
      r.scaleTo(n, p, C, c);
      return;
    }
    const d = c.deltaMode === 1 ? 20 : 1;
    let g = o === Vn.Vertical ? 0 : c.deltaX * d, v = o === Vn.Horizontal ? 0 : c.deltaY * d;
    !fi() && c.shiftKey && o !== Vn.Vertical && (g = c.deltaY * d, v = 0), r.translateBy(
      n,
      -(g / f) * i,
      -(v / f) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const x = Ii(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, a == null || a(c, x)), e.isPanScrolling && (l == null || l(c, x), e.panScrollTimeout = setTimeout(() => {
      u == null || u(c, x), e.isPanScrolling = !1;
    }, 150));
  };
}
function F0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    if (!t && r.type === "wheel" && !r.ctrlKey || dr(r, e))
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function Z0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var i, s, a;
    if ((i = r.sourceEvent) != null && i.internal)
      return;
    const o = Ii(r.transform);
    e.mouseButton = ((s = r.sourceEvent) == null ? void 0 : s.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, ((a = r.sourceEvent) == null ? void 0 : a.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, o));
  };
}
function q0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var s, a;
    e.usedRightMouseButton = !!(n && yc(t, e.mouseButton ?? 0)), (s = i.sourceEvent) != null && s.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((a = i.sourceEvent) != null && a.internal) && (o == null || o(i.sourceEvent, Ii(i.transform)));
  };
}
function G0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    var a;
    if (!((a = s.sourceEvent) != null && a.internal) && (e.isZoomingOrPanning = !1, i && yc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && W0(e.prevViewport, s.transform))) {
      const l = Ii(s.transform);
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
function U0({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: u }) {
  return (c) => {
    var v;
    const f = e || t, d = n && c.ctrlKey;
    if (c.button === 1 && c.type === "mousedown" && (dr(c, `${u}-flow__node`) || dr(c, `${u}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || s || dr(c, a) && c.type === "wheel" || dr(c, l) && (c.type !== "wheel" || o && c.type === "wheel" && !e) || !n && c.ctrlKey && c.type === "wheel")
      return !1;
    if (!n && c.type === "touchstart" && ((v = c.touches) == null ? void 0 : v.length) > 1)
      return c.preventDefault(), !1;
    if (!f && !o && !d && c.type === "wheel" || !r && (c.type === "mousedown" || c.type === "touchstart") || Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
      return !1;
    const g = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || c.type === "wheel") && g;
  };
}
function j0({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: s, onPanZoomStart: a, onPanZoomEnd: l, onDraggingChange: u }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, f = e.getBoundingClientRect(), d = Ju().clickDistance(!yn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), g = Ht(e).call(d);
  b({
    x: i.x,
    y: i.y,
    zoom: $r(i.zoom, t, n)
  }, [
    [0, 0],
    [f.width, f.height]
  ], o);
  const v = g.on("wheel.zoom"), x = g.on("dblclick.zoom");
  d.wheelDelta(wc);
  function C(I, R) {
    return g ? new Promise((E) => {
      d == null || d.transform(ns(g, R == null ? void 0 : R.duration, () => E(!0)), I);
    }) : Promise.resolve(!1);
  }
  function S({ noWheelClassName: I, noPanClassName: R, onPaneContextMenu: E, userSelectionActive: M, panOnScroll: _, panOnDrag: N, panOnScrollMode: T, panOnScrollSpeed: D, preventScrolling: B, zoomOnPinch: W, zoomOnScroll: q, zoomOnDoubleClick: fe, zoomActivationKeyPressed: j, lib: Y, onTransformChange: he }) {
    M && !c.isZoomingOrPanning && p();
    const be = _ && !j && !M ? K0({
      zoomPanValues: c,
      noWheelClassName: I,
      d3Selection: g,
      d3Zoom: d,
      panOnScrollMode: T,
      panOnScrollSpeed: D,
      zoomOnPinch: W,
      onPanZoomStart: a,
      onPanZoom: s,
      onPanZoomEnd: l
    }) : F0({
      noWheelClassName: I,
      preventScrolling: B,
      d3ZoomHandler: v
    });
    if (g.on("wheel.zoom", be, { passive: !1 }), !M) {
      const le = Z0({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: a
      });
      d.on("start", le);
      const ae = q0({
        zoomPanValues: c,
        panOnDrag: N,
        onPaneContextMenu: !!E,
        onPanZoom: s,
        onTransformChange: he
      });
      d.on("zoom", ae);
      const ke = G0({
        zoomPanValues: c,
        panOnDrag: N,
        panOnScroll: _,
        onPaneContextMenu: E,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      d.on("end", ke);
    }
    const ue = U0({
      zoomActivationKeyPressed: j,
      panOnDrag: N,
      zoomOnScroll: q,
      panOnScroll: _,
      zoomOnDoubleClick: fe,
      zoomOnPinch: W,
      userSelectionActive: M,
      noPanClassName: R,
      noWheelClassName: I,
      lib: Y
    });
    d.filter(ue), fe ? g.on("dblclick.zoom", x) : g.on("dblclick.zoom", null);
  }
  function p() {
    d.on("zoom", null);
  }
  async function b(I, R, E) {
    const M = ts(I), _ = d == null ? void 0 : d.constrain()(M, R, E);
    return _ && await C(_), new Promise((N) => N(_));
  }
  async function m(I, R) {
    const E = ts(I);
    return await C(E, R), new Promise((M) => M(E));
  }
  function k(I) {
    if (g) {
      const R = ts(I), E = g.property("__zoom");
      (E.k !== I.zoom || E.x !== I.x || E.y !== I.y) && (d == null || d.transform(g, R, null, { sync: !0 }));
    }
  }
  function $() {
    const I = g ? ju(g.node()) : { x: 0, y: 0, k: 1 };
    return { x: I.x, y: I.y, zoom: I.k };
  }
  function P(I, R) {
    return g ? new Promise((E) => {
      d == null || d.scaleTo(ns(g, R == null ? void 0 : R.duration, () => E(!0)), I);
    }) : Promise.resolve(!1);
  }
  function A(I, R) {
    return g ? new Promise((E) => {
      d == null || d.scaleBy(ns(g, R == null ? void 0 : R.duration, () => E(!0)), I);
    }) : Promise.resolve(!1);
  }
  function L(I) {
    d == null || d.scaleExtent(I);
  }
  function O(I) {
    d == null || d.translateExtent(I);
  }
  function z(I) {
    const R = !yn(I) || I < 0 ? 0 : I;
    d == null || d.clickDistance(R);
  }
  return {
    update: S,
    destroy: p,
    setViewport: m,
    setViewportConstrained: b,
    getViewport: $,
    scaleTo: P,
    scaleBy: A,
    setScaleExtent: L,
    setTranslateExtent: O,
    syncViewport: k,
    setClickDistance: z
  };
}
var _l;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(_l || (_l = {}));
var J0 = /* @__PURE__ */ se('<div role="button" tabindex="-1"><!></div>');
function er(e, t) {
  ce(t, !1);
  const [n, r] = qe(), o = () => Z(fe, "$connectable", n), i = () => Z(be, "$connectionRadius", n), s = () => Z(he, "$domNode", n), a = () => Z(xe, "$nodeLookup", n), l = () => Z(Y, "$connectionMode", n), u = () => Z(ae, "$lib", n), c = () => Z(Re, "$autoPanOnConnect", n), f = () => Z(Ge, "$flowId", n), d = () => Z(le, "$isValidConnectionStore", n), g = () => Z(Xe, "$onedgecreate", n), v = () => Z(ot, "$onConnectAction", n), x = () => Z(Le, "$onConnectStartAction", n), C = () => Z(tt, "$onConnectEndAction", n), S = () => Z(ue, "$viewport", n), p = () => Z(wt, "$connection", n), b = () => Z(Pe, "$edges", n), m = () => Z(Oe, "$connectionLookup", n), k = te(), $ = te(), P = te(), A = te(), L = te(), O = te(), z = te(), I = te();
  let R = w(t, "id", 12, void 0), E = w(t, "type", 12, "source"), M = w(t, "position", 28, () => ye.Top), _ = w(t, "style", 12, void 0), N = w(t, "isValidConnection", 12, void 0), T = w(t, "onconnect", 12, void 0), D = w(t, "ondisconnect", 12, void 0), B = w(t, "isConnectable", 12, void 0), W = w(t, "class", 12, void 0);
  const q = Un("svelteflow__node_id"), fe = Un("svelteflow__node_connectable"), j = Ye(), {
    connectionMode: Y,
    domNode: he,
    nodeLookup: xe,
    connectionRadius: be,
    viewport: ue,
    isValidConnection: le,
    lib: ae,
    addEdge: ke,
    onedgecreate: Xe,
    panBy: He,
    cancelConnection: We,
    updateConnection: ee,
    autoPanOnConnect: Re,
    edges: Pe,
    connectionLookup: Oe,
    onconnect: ot,
    onconnectstart: Le,
    onconnectend: tt,
    flowId: Ge,
    connection: wt
  } = j;
  function ct(Ce) {
    const nt = ac(Ce);
    (nt && Ce.button === 0 || !nt) && Y0.onPointerDown(Ce, {
      handleId: h(P),
      nodeId: q,
      isTarget: h(k),
      connectionRadius: i(),
      domNode: s(),
      nodeLookup: a(),
      connectionMode: l(),
      lib: u(),
      autoPanOnConnect: c(),
      flowId: f(),
      isValidConnection: N() ?? d(),
      updateConnection: ee,
      cancelConnection: We,
      panBy: He,
      onConnect: (pe) => {
        var et;
        const Te = g() ? g()(pe) : pe;
        Te && (ke(Te), (et = v()) == null || et(pe));
      },
      onConnectStart: (pe, Te) => {
        var et;
        (et = x()) == null || et(pe, {
          nodeId: Te.nodeId,
          handleId: Te.handleId,
          handleType: Te.handleType
        });
      },
      onConnectEnd: (pe, Te) => {
        var et;
        (et = C()) == null || et(pe, Te);
      },
      getTransform: () => [
        S().x,
        S().y,
        S().zoom
      ],
      getFromHandle: () => p().fromHandle
    });
  }
  let J = te(null), Se = te();
  oe(() => K(E()), () => {
    F(k, E() === "target");
  }), oe(
    () => (K(B()), o()),
    () => {
      F($, B() !== void 0 ? B() : o());
    }
  ), oe(() => K(R()), () => {
    F(P, R() || null);
  }), oe(
    () => (K(T()), K(D()), b(), m(), K(E()), K(R())),
    () => {
      (T() || D()) && (b(), F(Se, m().get(`${q}-${E()}${R() ? `-${R()}` : ""}`)));
    }
  ), oe(
    () => (h(J), h(Se), K(D()), K(T())),
    () => {
      if (h(J) && !i0(h(Se), h(J))) {
        const Ce = h(Se) ?? /* @__PURE__ */ new Map();
        sl(h(J), Ce, D()), sl(Ce, h(J), T());
      }
      F(J, h(Se) ?? /* @__PURE__ */ new Map());
    }
  ), oe(() => p(), () => {
    F(A, !!p().fromHandle);
  }), oe(
    () => (p(), K(E()), h(P)),
    () => {
      var Ce, nt, pe;
      F(L, ((Ce = p().fromHandle) == null ? void 0 : Ce.nodeId) === q && ((nt = p().fromHandle) == null ? void 0 : nt.type) === E() && ((pe = p().fromHandle) == null ? void 0 : pe.id) === h(P));
    }
  ), oe(
    () => (p(), K(E()), h(P)),
    () => {
      var Ce, nt, pe;
      F(O, ((Ce = p().toHandle) == null ? void 0 : Ce.nodeId) === q && ((nt = p().toHandle) == null ? void 0 : nt.type) === E() && ((pe = p().toHandle) == null ? void 0 : pe.id) === h(P));
    }
  ), oe(
    () => (l(), p(), K(E()), h(P)),
    () => {
      var Ce, nt, pe;
      F(z, l() === Jn.Strict ? ((Ce = p().fromHandle) == null ? void 0 : Ce.type) !== E() : q !== ((nt = p().fromHandle) == null ? void 0 : nt.nodeId) || h(P) !== ((pe = p().fromHandle) == null ? void 0 : pe.id));
    }
  ), oe(() => (h(O), p()), () => {
    F(I, h(O) && p().isValid);
  }), ut(), Ne();
  var ne = J0();
  re(ne, "data-nodeid", q);
  var gn = Q(ne);
  ft(gn, t, "default", {}), G(ne), _e(
    (Ce) => {
      re(ne, "data-handleid", h(P)), re(ne, "data-handlepos", M()), re(ne, "data-id", `${f() ?? ""}-${q ?? ""}-${R() || ""}-${E() ?? ""}`), Nr(ne, cn(Ce)), re(ne, "style", _()), je(ne, "valid", h(I)), je(ne, "connectingto", h(O)), je(ne, "connectingfrom", h(L)), je(ne, "source", !h(k)), je(ne, "target", h(k)), je(ne, "connectablestart", h($)), je(ne, "connectableend", h($)), je(ne, "connectable", h($)), je(ne, "connectionindicator", h($) && (!h(A) || h(z)));
    },
    [
      () => yt([
        "svelte-flow__handle",
        `svelte-flow__handle-${M()}`,
        "nodrag",
        "nopan",
        M(),
        W()
      ])
    ],
    ge
  ), Ke("mousedown", ne, ct), Ke("touchstart", ne, ct), V(e, ne);
  var Bt = de({
    get id() {
      return R();
    },
    set id(Ce) {
      R(Ce), y();
    },
    get type() {
      return E();
    },
    set type(Ce) {
      E(Ce), y();
    },
    get position() {
      return M();
    },
    set position(Ce) {
      M(Ce), y();
    },
    get style() {
      return _();
    },
    set style(Ce) {
      _(Ce), y();
    },
    get isValidConnection() {
      return N();
    },
    set isValidConnection(Ce) {
      N(Ce), y();
    },
    get onconnect() {
      return T();
    },
    set onconnect(Ce) {
      T(Ce), y();
    },
    get ondisconnect() {
      return D();
    },
    set ondisconnect(Ce) {
      D(Ce), y();
    },
    get isConnectable() {
      return B();
    },
    set isConnectable(Ce) {
      B(Ce), y();
    },
    get class() {
      return W();
    },
    set class(Ce) {
      W(Ce), y();
    }
  });
  return r(), Bt;
}
ie(
  er,
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
var Q0 = /* @__PURE__ */ se("<!> <!>", 1);
function hi(e, t) {
  const n = Ue(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Ue(n, ["data", "targetPosition", "sourcePosition"]), ce(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "targetPosition", 12, void 0), i = w(t, "sourcePosition", 12, void 0);
  Ne();
  var s = Q0(), a = we(s);
  const l = /* @__PURE__ */ ge(() => o() ?? ye.Top);
  er(a, {
    type: "target",
    get position() {
      return h(l);
    }
  });
  var u = U(a), c = U(u);
  const f = /* @__PURE__ */ ge(() => i() ?? ye.Bottom);
  return er(c, {
    type: "source",
    get position() {
      return h(f);
    }
  }), _e(() => {
    var d;
    return un(u, ` ${((d = r()) == null ? void 0 : d.label) ?? ""} `);
  }), V(e, s), de({
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
  hi,
  {
    data: {},
    targetPosition: {},
    sourcePosition: {}
  },
  [],
  [],
  !0
);
var ep = /* @__PURE__ */ se(" <!>", 1);
function _c(e, t) {
  const n = Ue(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Ue(n, ["data", "sourcePosition"]), ce(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "sourcePosition", 12, void 0);
  Ne(), at();
  var i = ep(), s = we(i), a = U(s);
  const l = /* @__PURE__ */ ge(() => o() ?? ye.Bottom);
  return er(a, {
    type: "source",
    get position() {
      return h(l);
    }
  }), _e(() => {
    var u;
    return un(s, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), V(e, i), de({
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
ie(_c, { data: {}, sourcePosition: {} }, [], [], !0);
var tp = /* @__PURE__ */ se(" <!>", 1);
function xc(e, t) {
  const n = Ue(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Ue(n, ["data", "targetPosition"]), ce(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "targetPosition", 12, void 0);
  Ne(), at();
  var i = tp(), s = we(i), a = U(s);
  const l = /* @__PURE__ */ ge(() => o() ?? ye.Top);
  return er(a, {
    type: "target",
    get position() {
      return h(l);
    }
  }), _e(() => {
    var u;
    return un(s, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), V(e, i), de({
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
ie(xc, { data: {}, targetPosition: {} }, [], [], !0);
function bc(e, t) {
  const n = Ue(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Ue(n, []);
}
ie(bc, {}, [], [], !0);
function xl(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function yr(e, { target: t, domNode: n }) {
  return xl(e, n, t), {
    async update({ target: r, domNode: o }) {
      xl(e, o, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var np = /* @__PURE__ */ se("<div><!></div>");
function Cc(e, t) {
  ce(t, !1);
  const [n, r] = qe(), o = () => Z(i, "$domNode", n), { domNode: i } = Ye();
  Ne();
  var s = np(), a = Q(s);
  ft(a, t, "default", {}), G(s), dt(s, (l, u) => yr == null ? void 0 : yr(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), V(e, s), de(), r();
}
ie(Cc, {}, ["default"], [], !0);
function kc() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: i, elementsSelectable: s } = Ye();
  return (a) => {
    const l = X(e).get(a);
    if (!l) {
      console.warn("012", Br.error012(a));
      return;
    }
    (l.selectable || X(s) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && X(r) && i({ nodes: [], edges: [l] }) : o([a]));
  };
}
var rp = /* @__PURE__ */ se('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function Ec(e, t) {
  ce(t, !1);
  let n = w(t, "style", 12, void 0), r = w(t, "x", 12, void 0), o = w(t, "y", 12, void 0);
  const i = kc(), s = Un("svelteflow__edge_id");
  return Ne(), Cc(e, {
    children: (a, l) => {
      var u = rp(), c = Q(u);
      ft(c, t, "default", {}), G(u), _e(() => {
        re(u, "style", "pointer-events: all;" + n()), Qe(u, "transform", `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`);
      }), Ke("keyup", u, () => {
      }), Ke("click", u, () => {
        s && i(s);
      }), V(a, u);
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
ie(Ec, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var op = /* @__PURE__ */ $e('<path fill="none" class="svelte-flow__edge-interaction"></path>'), ip = /* @__PURE__ */ $e('<path fill="none"></path><!><!>', 1);
function So(e, t) {
  ce(t, !1);
  let n = w(t, "id", 12, void 0), r = w(t, "path", 12), o = w(t, "label", 12, void 0), i = w(t, "labelX", 12, void 0), s = w(t, "labelY", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "markerStart", 12, void 0), u = w(t, "markerEnd", 12, void 0), c = w(t, "style", 12, void 0), f = w(t, "interactionWidth", 12, 20), d = w(t, "class", 12, void 0), g = f() === void 0 ? 20 : f();
  Ne();
  var v = ip(), x = we(v), C = U(x);
  {
    var S = (m) => {
      var k = op();
      re(k, "stroke-opacity", 0), re(k, "stroke-width", g), _e(() => re(k, "d", r())), V(m, k);
    };
    Ee(C, (m) => {
      g && m(S);
    });
  }
  var p = U(C);
  {
    var b = (m) => {
      Ec(m, {
        get x() {
          return i();
        },
        get y() {
          return s();
        },
        get style() {
          return a();
        },
        children: (k, $) => {
          at();
          var P = $t();
          _e(() => un(P, o())), V(k, P);
        },
        $$slots: { default: !0 }
      });
    };
    Ee(p, (m) => {
      o() && m(b);
    });
  }
  return _e(
    (m) => {
      re(x, "id", n()), re(x, "d", r()), ir(x, cn(m)), re(x, "marker-start", l()), re(x, "marker-end", u()), re(x, "style", c());
    },
    [
      () => yt(["svelte-flow__edge-path", d()])
    ],
    ge
  ), V(e, v), de({
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
  So,
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
function vi(e, t) {
  const n = Ue(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Ue(n, [
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
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), g = w(t, "sourceY", 12), v = w(t, "sourcePosition", 12), x = w(t, "targetX", 12), C = w(t, "targetY", 12), S = w(t, "targetPosition", 12);
  return oe(
    () => (h(r), h(o), h(i), K(d()), K(g()), K(x()), K(C()), K(v()), K(S())),
    () => {
      ((p) => (F(r, p[0]), F(o, p[1]), F(i, p[2])))(lc({
        sourceX: d(),
        sourceY: g(),
        targetX: x(),
        targetY: C(),
        sourcePosition: v(),
        targetPosition: S()
      }));
    }
  ), ut(), Ne(), So(e, {
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
      return x();
    },
    set targetX(p) {
      x(p), y();
    },
    get targetY() {
      return C();
    },
    set targetY(p) {
      C(p), y();
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
  vi,
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
function Sc(e, t) {
  const n = Ue(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Ue(n, [
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
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), g = w(t, "sourceY", 12), v = w(t, "sourcePosition", 12), x = w(t, "targetX", 12), C = w(t, "targetY", 12), S = w(t, "targetPosition", 12);
  return oe(
    () => (h(r), h(o), h(i), K(d()), K(g()), K(x()), K(C()), K(v()), K(S())),
    () => {
      ((p) => (F(r, p[0]), F(o, p[1]), F(i, p[2])))(gi({
        sourceX: d(),
        sourceY: g(),
        targetX: x(),
        targetY: C(),
        sourcePosition: v(),
        targetPosition: S()
      }));
    }
  ), ut(), Ne(), So(e, {
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
      return x();
    },
    set targetX(p) {
      x(p), y();
    },
    get targetY() {
      return C();
    },
    set targetY(p) {
      C(p), y();
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
function Nc(e, t) {
  const n = Ue(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Ue(n, [
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
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), g = w(t, "sourceY", 12), v = w(t, "targetX", 12), x = w(t, "targetY", 12);
  return oe(
    () => (h(r), h(o), h(i), K(d()), K(g()), K(v()), K(x())),
    () => {
      ((C) => (F(r, C[0]), F(o, C[1]), F(i, C[2])))(Ts({
        sourceX: d(),
        sourceY: g(),
        targetX: v(),
        targetY: x()
      }));
    }
  ), ut(), Ne(), So(e, {
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
    set label(C) {
      s(C), y();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(C) {
      a(C), y();
    },
    get style() {
      return l();
    },
    set style(C) {
      l(C), y();
    },
    get markerStart() {
      return u();
    },
    set markerStart(C) {
      u(C), y();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(C) {
      c(C), y();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(C) {
      f(C), y();
    },
    get sourceX() {
      return d();
    },
    set sourceX(C) {
      d(C), y();
    },
    get sourceY() {
      return g();
    },
    set sourceY(C) {
      g(C), y();
    },
    get targetX() {
      return v();
    },
    set targetX(C) {
      v(C), y();
    },
    get targetY() {
      return x();
    },
    set targetY(C) {
      x(C), y();
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
    targetX: {},
    targetY: {}
  },
  [],
  [],
  !0
);
function Pc(e, t) {
  const n = Ue(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Ue(n, [
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
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), g = w(t, "sourceY", 12), v = w(t, "sourcePosition", 12), x = w(t, "targetX", 12), C = w(t, "targetY", 12), S = w(t, "targetPosition", 12);
  return oe(
    () => (h(r), h(o), h(i), K(d()), K(g()), K(x()), K(C()), K(v()), K(S())),
    () => {
      ((p) => (F(r, p[0]), F(o, p[1]), F(i, p[2])))(gi({
        sourceX: d(),
        sourceY: g(),
        targetX: x(),
        targetY: C(),
        sourcePosition: v(),
        targetPosition: S(),
        borderRadius: 0
      }));
    }
  ), ut(), Ne(), So(e, {
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
      return x();
    },
    set targetX(p) {
      x(p), y();
    },
    get targetY() {
      return C();
    },
    set targetY(p) {
      C(p), y();
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
function sp(e, t) {
  const n = e.set, r = t.set, o = X(e), i = X(t);
  let a = o.length === 0 && i.length > 0 ? i : o;
  e.set(a);
  const l = (u) => {
    const c = n(u);
    return a = c, r(a), c;
  };
  e.set = t.set = l, e.update = t.update = (u) => l(u(a));
}
function ap(e, t) {
  const n = e.set, r = t.set;
  let o = X(t);
  e.set(o);
  const i = (s) => {
    n(s), r(s), o = s;
  };
  e.set = t.set = i, e.update = t.update = (s) => i(s(o));
}
const lp = (e, t, n) => {
  if (!n)
    return;
  const r = X(e), o = t.set, i = n.set;
  let s = n ? X(n) : { x: 0, y: 0, zoom: 1 };
  t.set(s), t.set = (a) => (o(a), i(a), s = a, a), n.set = (a) => (r == null || r.syncViewport(a), o(a), i(a), s = a, a), t.update = (a) => {
    t.set(a(s));
  }, n.update = (a) => {
    n.set(a(s));
  };
}, up = (e, t, n, r = [0, 0], o = ui) => {
  const { subscribe: i, set: s, update: a } = ve([]);
  let l = e, u = {}, c = !0;
  const f = (x) => (cc(x, t, n, {
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
}, cp = (e, t, n, r) => {
  const { subscribe: o, set: i, update: s } = ve([]);
  let a = e, l = {};
  const u = (d) => {
    const g = l ? d.map((v) => ({ ...l, ...v })) : d;
    fc(t, n, g), a = g, i(a);
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
  input: _c,
  output: xc,
  default: hi,
  group: bc
}, $c = {
  straight: Nc,
  smoothstep: Sc,
  default: vi,
  step: Pc
}, dp = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) => {
  const a = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), f = i ?? [0, 0], d = s ?? ui;
  cc(e, a, l, {
    nodeExtent: d,
    nodeOrigin: f,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), fc(u, c, t);
  let g = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const v = ko(a, {
      filter: (x) => !!((x.width || x.initialWidth) && (x.height || x.initialHeight))
    });
    g = aa(v, n, r, 0.5, 2, 0.1);
  }
  return {
    flowId: ve(null),
    nodes: up(e, a, l, f, d),
    nodeLookup: Lt(a),
    parentLookup: Lt(l),
    edgeLookup: Lt(c),
    visibleNodes: Lt([]),
    edges: cp(t, u, c),
    visibleEdges: Lt([]),
    connectionLookup: Lt(u),
    height: ve(500),
    width: ve(500),
    minZoom: ve(0.5),
    maxZoom: ve(2),
    nodeOrigin: ve(f),
    nodeDragThreshold: ve(1),
    nodeExtent: ve(d),
    translateExtent: ve(ui),
    autoPanOnNodeDrag: ve(!0),
    autoPanOnConnect: ve(!0),
    fitViewOnInit: ve(!1),
    fitViewOnInitDone: ve(!1),
    fitViewOptions: ve(void 0),
    panZoom: ve(null),
    snapGrid: ve(null),
    dragging: ve(!1),
    selectionRect: ve(null),
    selectionKeyPressed: ve(!1),
    multiselectionKeyPressed: ve(!1),
    deleteKeyPressed: ve(!1),
    panActivationKeyPressed: ve(!1),
    zoomActivationKeyPressed: ve(!1),
    selectionRectMode: ve(null),
    selectionMode: ve(ci.Partial),
    nodeTypes: ve(Mc),
    edgeTypes: ve($c),
    viewport: ve(g),
    connectionMode: ve(Jn.Strict),
    domNode: ve(null),
    connection: Lt(Ps),
    connectionLineType: ve(mr.Bezier),
    connectionRadius: ve(20),
    isValidConnection: ve(() => !0),
    nodesDraggable: ve(!0),
    nodesConnectable: ve(!0),
    elementsSelectable: ve(!0),
    selectNodesOnDrag: ve(!0),
    markers: Lt([]),
    defaultMarkerColor: ve("#b1b1b7"),
    lib: Lt("svelte"),
    onlyRenderVisibleElements: ve(!1),
    onerror: ve(oc),
    ondelete: ve(void 0),
    onedgecreate: ve(void 0),
    onconnect: ve(void 0),
    onconnectstart: ve(void 0),
    onconnectend: ve(void 0),
    onbeforedelete: ve(void 0),
    nodesInitialized: ve(!1),
    edgesInitialized: ve(!1),
    viewportInitialized: ve(!1),
    initialized: Lt(!1)
  };
};
function fp(e) {
  const t = Hn([
    e.edges,
    e.nodes,
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.viewport,
    e.width,
    e.height
  ], ([n, , r, o, i, s, a]) => o && s && a ? n.filter((u) => {
    const c = r.get(u.source), f = r.get(u.target);
    return c && f && m0({
      sourceNode: c,
      targetNode: f,
      width: s,
      height: a,
      transform: [i.x, i.y, i.zoom]
    });
  }) : n);
  return Hn([t, e.nodes, e.nodeLookup, e.connectionMode, e.onerror], ([n, , r, o, i]) => n.reduce((a, l) => {
    const u = r.get(l.source), c = r.get(l.target);
    if (!u || !c)
      return a;
    const f = k0({
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
      zIndex: p0({
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
function gp(e) {
  return Hn([
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
const Ri = Symbol();
function Tc({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) {
  const a = dp({
    nodes: e,
    edges: t,
    width: n,
    height: r,
    fitView: o,
    nodeOrigin: i,
    nodeExtent: s
  });
  function l(_) {
    a.nodeTypes.set({
      ...Mc,
      ..._
    });
  }
  function u(_) {
    a.edgeTypes.set({
      ...$c,
      ..._
    });
  }
  function c(_) {
    const N = X(a.edges);
    a.edges.set(_0(_, N));
  }
  const f = (_, N = !1) => {
    var D;
    const T = X(a.nodeLookup);
    for (const [B, W] of _) {
      const q = (D = T.get(B)) == null ? void 0 : D.internals.userNode;
      q && (q.position = W.position, q.dragging = N);
    }
    a.nodes.update((B) => B);
  };
  function d(_) {
    var W, q, fe;
    const N = X(a.nodeLookup), T = X(a.parentLookup), { changes: D, updatedInternals: B } = A0(_, N, X(a.parentLookup), X(a.domNode), X(a.nodeOrigin));
    if (B) {
      if (P0(N, T, { nodeOrigin: i, nodeExtent: s }), !X(a.fitViewOnInitDone) && X(a.fitViewOnInit)) {
        const j = X(a.fitViewOptions), Y = v({
          ...j,
          nodes: j == null ? void 0 : j.nodes
        });
        a.fitViewOnInitDone.set(Y);
      }
      for (const j of D) {
        const Y = (W = N.get(j.id)) == null ? void 0 : W.internals.userNode;
        if (Y)
          switch (j.type) {
            case "dimensions": {
              const he = { ...Y.measured, ...j.dimensions };
              j.setAttributes && (Y.width = ((q = j.dimensions) == null ? void 0 : q.width) ?? Y.width, Y.height = ((fe = j.dimensions) == null ? void 0 : fe.height) ?? Y.height), Y.measured = he;
              break;
            }
            case "position":
              Y.position = j.position ?? Y.position;
              break;
          }
      }
      a.nodes.update((j) => j), X(a.nodesInitialized) || a.nodesInitialized.set(!0);
    }
  }
  function g(_) {
    const N = X(a.panZoom), T = X(a.domNode);
    if (!N || !T)
      return Promise.resolve(!1);
    const { width: D, height: B } = la(T), W = al(X(a.nodeLookup), _);
    return ll({
      nodes: W,
      width: D,
      height: B,
      minZoom: X(a.minZoom),
      maxZoom: X(a.maxZoom),
      panZoom: N
    }, _);
  }
  function v(_) {
    const N = X(a.panZoom);
    if (!N)
      return !1;
    const T = al(X(a.nodeLookup), _);
    return ll({
      nodes: T,
      width: X(a.width),
      height: X(a.height),
      minZoom: X(a.minZoom),
      maxZoom: X(a.maxZoom),
      panZoom: N
    }, _), T.size > 0;
  }
  function x(_, N) {
    const T = X(a.panZoom);
    return T ? T.scaleBy(_, N) : Promise.resolve(!1);
  }
  function C(_) {
    return x(1.2, _);
  }
  function S(_) {
    return x(1 / 1.2, _);
  }
  function p(_) {
    const N = X(a.panZoom);
    N && (N.setScaleExtent([_, X(a.maxZoom)]), a.minZoom.set(_));
  }
  function b(_) {
    const N = X(a.panZoom);
    N && (N.setScaleExtent([X(a.minZoom), _]), a.maxZoom.set(_));
  }
  function m(_) {
    const N = X(a.panZoom);
    N && (N.setTranslateExtent(_), a.translateExtent.set(_));
  }
  function k(_) {
    let N = !1;
    return _.forEach((T) => {
      T.selected && (T.selected = !1, N = !0);
    }), N;
  }
  function $(_) {
    var N;
    (N = X(a.panZoom)) == null || N.setClickDistance(_);
  }
  function P(_) {
    k((_ == null ? void 0 : _.nodes) || X(a.nodes)) && a.nodes.set(X(a.nodes)), k((_ == null ? void 0 : _.edges) || X(a.edges)) && a.edges.set(X(a.edges));
  }
  a.deleteKeyPressed.subscribe(async (_) => {
    var N;
    if (_) {
      const T = X(a.nodes), D = X(a.edges), B = T.filter((j) => j.selected), W = D.filter((j) => j.selected), { nodes: q, edges: fe } = await ec({
        nodesToRemove: B,
        edgesToRemove: W,
        nodes: T,
        edges: D,
        onBeforeDelete: X(a.onbeforedelete)
      });
      (q.length || fe.length) && (a.nodes.update((j) => j.filter((Y) => !q.some((he) => he.id === Y.id))), a.edges.update((j) => j.filter((Y) => !fe.some((he) => he.id === Y.id))), (N = X(a.ondelete)) == null || N({
        nodes: q,
        edges: fe
      }));
    }
  });
  function A(_) {
    const N = X(a.multiselectionKeyPressed);
    a.nodes.update((T) => T.map((D) => {
      const B = _.includes(D.id), W = N && D.selected || B;
      return D.selected = W, D;
    })), N || a.edges.update((T) => T.map((D) => (D.selected = !1, D)));
  }
  function L(_) {
    const N = X(a.multiselectionKeyPressed);
    a.edges.update((T) => T.map((D) => {
      const B = _.includes(D.id), W = N && D.selected || B;
      return D.selected = W, D;
    })), N || a.nodes.update((T) => T.map((D) => (D.selected = !1, D)));
  }
  function O(_) {
    var T;
    const N = (T = X(a.nodes)) == null ? void 0 : T.find((D) => D.id === _);
    if (!N) {
      console.warn("012", Br.error012(_));
      return;
    }
    a.selectionRect.set(null), a.selectionRectMode.set(null), N.selected ? N.selected && X(a.multiselectionKeyPressed) && P({ nodes: [N], edges: [] }) : A([_]);
  }
  function z(_) {
    const N = X(a.viewport);
    return O0({
      delta: _,
      panZoom: X(a.panZoom),
      transform: [N.x, N.y, N.zoom],
      translateExtent: X(a.translateExtent),
      width: X(a.width),
      height: X(a.height)
    });
  }
  const I = ve(Ps), R = (_) => {
    I.set({ ..._ });
  };
  function E() {
    I.set(Ps);
  }
  function M() {
    a.fitViewOnInitDone.set(!1), a.selectionRect.set(null), a.selectionRectMode.set(null), a.snapGrid.set(null), a.isValidConnection.set(() => !0), P(), E();
  }
  return {
    // state
    ...a,
    // derived state
    visibleEdges: fp(a),
    visibleNodes: gp(a),
    connection: Hn([I, a.viewport], ([_, N]) => _.inProgress ? {
      ..._,
      to: Eo(_.to, [N.x, N.y, N.zoom])
    } : { ..._ }),
    markers: Hn([a.edges, a.defaultMarkerColor, a.flowId], ([_, N, T]) => E0(_, { defaultColor: N, id: T })),
    initialized: (() => {
      let _ = !1;
      const N = X(a.nodes).length, T = X(a.edges).length;
      return Hn([a.nodesInitialized, a.edgesInitialized, a.viewportInitialized], ([D, B, W]) => _ || (N === 0 ? _ = W : T === 0 ? _ = W && D : _ = W && D && B, _));
    })(),
    // actions
    syncNodeStores: (_) => sp(a.nodes, _),
    syncEdgeStores: (_) => ap(a.edges, _),
    syncViewport: (_) => lp(a.panZoom, a.viewport, _),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: f,
    updateNodeInternals: d,
    zoomIn: C,
    zoomOut: S,
    fitView: (_) => g(_),
    setMinZoom: p,
    setMaxZoom: b,
    setTranslateExtent: m,
    setPaneClickDistance: $,
    unselectNodesAndEdges: P,
    addSelectedNodes: A,
    addSelectedEdges: L,
    handleNodeSelection: O,
    panBy: z,
    updateConnection: R,
    cancelConnection: E,
    reset: M
  };
}
function Ye() {
  const e = Un(Ri);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function hp({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) {
  const a = Tc({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s });
  return Er(Ri, {
    getStore: () => a
  }), a;
}
function rs(e, t) {
  const { panZoom: n, minZoom: r, maxZoom: o, initialViewport: i, viewport: s, dragging: a, translateExtent: l, paneClickDistance: u } = t, c = j0({
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
var vp = /* @__PURE__ */ se('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const pp = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function Ac(e, t) {
  ce(t, !1), rt(e, pp);
  const [n, r] = qe(), o = () => Z(T, "$panActivationKeyPressed", n), i = () => Z(R, "$minZoom", n), s = () => Z(E, "$maxZoom", n), a = () => Z(D, "$zoomActivationKeyPressed", n), l = () => Z(I, "$selectionRect", n), u = () => Z(_, "$translateExtent", n), c = () => Z(N, "$lib", n), f = te(), d = te(), g = te();
  let v = w(t, "initialViewport", 12, void 0), x = w(t, "onMoveStart", 12, void 0), C = w(t, "onMove", 12, void 0), S = w(t, "onMoveEnd", 12, void 0), p = w(t, "panOnScrollMode", 12), b = w(t, "preventScrolling", 12), m = w(t, "zoomOnScroll", 12), k = w(t, "zoomOnDoubleClick", 12), $ = w(t, "zoomOnPinch", 12), P = w(t, "panOnDrag", 12), A = w(t, "panOnScroll", 12), L = w(t, "paneClickDistance", 12);
  const {
    viewport: O,
    panZoom: z,
    selectionRect: I,
    minZoom: R,
    maxZoom: E,
    dragging: M,
    translateExtent: _,
    lib: N,
    panActivationKeyPressed: T,
    zoomActivationKeyPressed: D,
    viewportInitialized: B
  } = Ye(), W = (Y) => O.set({
    x: Y[0],
    y: Y[1],
    zoom: Y[2]
  });
  sr(() => {
    ni(B, !0);
  }), oe(() => K(v()), () => {
    F(f, v() || { x: 0, y: 0, zoom: 1 });
  }), oe(
    () => (o(), K(P())),
    () => {
      F(d, o() || P());
    }
  ), oe(
    () => (o(), K(A())),
    () => {
      F(g, o() || A());
    }
  ), ut(), Ne();
  var q = vp(), fe = Q(q);
  ft(fe, t, "default", {}), G(q), dt(q, (Y, he) => rs == null ? void 0 : rs(Y, he), () => ({
    viewport: O,
    minZoom: i(),
    maxZoom: s(),
    initialViewport: h(f),
    dragging: M,
    panZoom: z,
    onPanZoomStart: x(),
    onPanZoom: C(),
    onPanZoomEnd: S(),
    zoomOnScroll: m(),
    zoomOnDoubleClick: k(),
    zoomOnPinch: $(),
    panOnScroll: h(g),
    panOnDrag: h(d),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: p() || Vn.Free,
    zoomActivationKeyPressed: a(),
    preventScrolling: typeof b() == "boolean" ? b() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: L(),
    onTransformChange: W
  })), V(e, q);
  var j = de({
    get initialViewport() {
      return v();
    },
    set initialViewport(Y) {
      v(Y), y();
    },
    get onMoveStart() {
      return x();
    },
    set onMoveStart(Y) {
      x(Y), y();
    },
    get onMove() {
      return C();
    },
    set onMove(Y) {
      C(Y), y();
    },
    get onMoveEnd() {
      return S();
    },
    set onMoveEnd(Y) {
      S(Y), y();
    },
    get panOnScrollMode() {
      return p();
    },
    set panOnScrollMode(Y) {
      p(Y), y();
    },
    get preventScrolling() {
      return b();
    },
    set preventScrolling(Y) {
      b(Y), y();
    },
    get zoomOnScroll() {
      return m();
    },
    set zoomOnScroll(Y) {
      m(Y), y();
    },
    get zoomOnDoubleClick() {
      return k();
    },
    set zoomOnDoubleClick(Y) {
      k(Y), y();
    },
    get zoomOnPinch() {
      return $();
    },
    set zoomOnPinch(Y) {
      $(Y), y();
    },
    get panOnDrag() {
      return P();
    },
    set panOnDrag(Y) {
      P(Y), y();
    },
    get panOnScroll() {
      return A();
    },
    set panOnScroll(Y) {
      A(Y), y();
    },
    get paneClickDistance() {
      return L();
    },
    set paneClickDistance(Y) {
      L(Y), y();
    }
  });
  return r(), j;
}
ie(
  Ac,
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
function Cl(e) {
  return (t) => {
    const n = e.includes(t.id);
    return t.selected !== n && (t.selected = n), t;
  };
}
var mp = /* @__PURE__ */ se('<div class="svelte-flow__pane svelte-1esy7hx"><!></div>');
const yp = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function Oc(e, t) {
  ce(t, !1), rt(e, yp);
  const [n, r] = qe(), o = () => Z(E, "$panActivationKeyPressed", n), i = () => Z(I, "$selectionKeyPressed", n), s = () => Z(O, "$selectionRect", n), a = () => Z(L, "$elementsSelectable", n), l = () => Z(z, "$selectionRectMode", n), u = () => Z($, "$edges", n), c = () => Z(k, "$nodeLookup", n), f = () => Z(P, "$viewport", n), d = () => Z(R, "$selectionMode", n), g = () => Z(A, "$dragging", n), v = te(), x = te(), C = te();
  let S = w(t, "panOnDrag", 12, void 0), p = w(t, "selectionOnDrag", 12, void 0);
  const b = Ti(), {
    nodes: m,
    nodeLookup: k,
    edges: $,
    viewport: P,
    dragging: A,
    elementsSelectable: L,
    selectionRect: O,
    selectionRectMode: z,
    selectionKeyPressed: I,
    selectionMode: R,
    panActivationKeyPressed: E,
    unselectNodesAndEdges: M
  } = Ye();
  let _ = te(), N = null, T = [], D = !1;
  function B(le) {
    if (D) {
      D = !1;
      return;
    }
    b("paneclick", { event: le }), M(), z.set(null);
  }
  function W(le) {
    var Xe, He;
    if (N = h(_).getBoundingClientRect(), !L || !h(x) || le.button !== 0 || le.target !== h(_) || !N)
      return;
    (He = (Xe = le.target) == null ? void 0 : Xe.setPointerCapture) == null || He.call(Xe, le.pointerId);
    const { x: ae, y: ke } = xn(le, N);
    M(), O.set({
      width: 0,
      height: 0,
      startX: ae,
      startY: ke,
      x: ae,
      y: ke
    });
  }
  function q(le) {
    if (!h(x) || !N || !s())
      return;
    D = !0;
    const ae = xn(le, N), ke = s().startX ?? 0, Xe = s().startY ?? 0, He = {
      ...s(),
      x: ae.x < ke ? ae.x : ke,
      y: ae.y < Xe ? ae.y : Xe,
      width: Math.abs(ae.x - ke),
      height: Math.abs(ae.y - Xe)
    }, We = T.map((Oe) => Oe.id), ee = Ms(T, u()).map((Oe) => Oe.id);
    T = Qu(
      c(),
      He,
      [
        f().x,
        f().y,
        f().zoom
      ],
      d() === ci.Partial,
      !0
    );
    const Re = Ms(T, u()).map((Oe) => Oe.id), Pe = T.map((Oe) => Oe.id);
    (We.length !== Pe.length || Pe.some((Oe) => !We.includes(Oe))) && m.update((Oe) => Oe.map(Cl(Pe))), (ee.length !== Re.length || Re.some((Oe) => !ee.includes(Oe))) && $.update((Oe) => Oe.map(Cl(Re))), z.set("user"), O.set(He);
  }
  function fe(le) {
    var ae, ke;
    le.button === 0 && ((ke = (ae = le.target) == null ? void 0 : ae.releasePointerCapture) == null || ke.call(ae, le.pointerId), !h(x) && l() === "user" && le.target === h(_) && (B == null || B(le)), O.set(null), T.length > 0 && ni(z, "nodes"), i() && (D = !1));
  }
  const j = (le) => {
    var ae;
    if (Array.isArray(h(v)) && ((ae = h(v)) != null && ae.includes(2))) {
      le.preventDefault();
      return;
    }
    b("panecontextmenu", { event: le });
  };
  oe(
    () => (o(), K(S())),
    () => {
      F(v, o() || S());
    }
  ), oe(
    () => (i(), s(), K(p()), h(v)),
    () => {
      F(x, i() || s() || p() && h(v) !== !0);
    }
  ), oe(
    () => (a(), h(x), l()),
    () => {
      F(C, a() && (h(x) || l() === "user"));
    }
  ), ut(), Ne();
  var Y = mp(), he = /* @__PURE__ */ Fe(() => h(C) ? void 0 : bl(B, h(_))), xe = /* @__PURE__ */ Fe(() => bl(j, h(_))), be = Q(Y);
  ft(be, t, "default", {}), G(Y), kn(Y, (le) => F(_, le), () => h(_)), _e(
    (le) => {
      je(Y, "draggable", le), je(Y, "dragging", g()), je(Y, "selection", h(x));
    },
    [
      () => S() === !0 || Array.isArray(S()) && S().includes(0)
    ],
    ge
  ), Ke("click", Y, function(...le) {
    var ae;
    (ae = h(he)) == null || ae.apply(this, le);
  }), Ke("pointerdown", Y, function(...le) {
    var ae;
    (ae = h(C) ? W : void 0) == null || ae.apply(this, le);
  }), Ke("pointermove", Y, function(...le) {
    var ae;
    (ae = h(C) ? q : void 0) == null || ae.apply(this, le);
  }), Ke("pointerup", Y, function(...le) {
    var ae;
    (ae = h(C) ? fe : void 0) == null || ae.apply(this, le);
  }), Ke("contextmenu", Y, function(...le) {
    var ae;
    (ae = h(xe)) == null || ae.apply(this, le);
  }), V(e, Y);
  var ue = de({
    get panOnDrag() {
      return S();
    },
    set panOnDrag(le) {
      S(le), y();
    },
    get selectionOnDrag() {
      return p();
    },
    set selectionOnDrag(le) {
      p(le), y();
    }
  });
  return r(), ue;
}
ie(Oc, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var wp = /* @__PURE__ */ se('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const _p = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function Dc(e, t) {
  ce(t, !1), rt(e, _p);
  const [n, r] = qe(), o = () => Z(i, "$viewport", n), { viewport: i } = Ye();
  Ne();
  var s = wp(), a = Q(s);
  ft(a, t, "default", {}), G(s), _e(() => re(s, "style", `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), V(e, s), de(), r();
}
ie(Dc, {}, ["default"], [], !0);
function wr(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = z0({
    onDrag: r,
    onDragStart: o,
    onDragStop: i,
    onNodeMouseDown: s,
    getStoreItems: () => {
      const u = X(n.snapGrid), c = X(n.viewport);
      return {
        nodes: X(n.nodes),
        nodeLookup: X(n.nodeLookup),
        edges: X(n.edges),
        nodeExtent: X(n.nodeExtent),
        snapGrid: u || [0, 0],
        snapToGrid: !!u,
        nodeOrigin: X(n.nodeOrigin),
        multiSelectionActive: X(n.multiselectionKeyPressed),
        domNode: X(n.domNode),
        transform: [c.x, c.y, c.zoom],
        autoPanOnNodeDrag: X(n.autoPanOnNodeDrag),
        nodesDraggable: X(n.nodesDraggable),
        selectNodesOnDrag: X(n.selectNodesOnDrag),
        nodeDragThreshold: X(n.nodeDragThreshold),
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
function xp({ width: e, height: t, initialWidth: n, initialHeight: r, measuredWidth: o, measuredHeight: i }) {
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
var bp = /* @__PURE__ */ se("<div><!></div>");
function Lc(e, t) {
  ce(t, !1);
  const [n, r] = qe(), o = () => Z(xe, "$nodeTypes", n), i = () => Z(ke, "$elementsSelectable", n), s = () => Z(Xe, "$nodesDraggable", n), a = () => Z(Re, "$connectableStore", n), l = te(void 0, !0), u = te(void 0, !0), c = te(void 0, !0), f = te(void 0, !0);
  let d = w(t, "node", 13), g = w(t, "id", 13), v = w(t, "data", 29, () => ({})), x = w(t, "selected", 13, !1), C = w(t, "draggable", 13, void 0), S = w(t, "selectable", 13, void 0), p = w(t, "connectable", 13, !0), b = w(t, "deletable", 13, !0), m = w(t, "hidden", 13, !1), k = w(t, "dragging", 13, !1), $ = w(t, "resizeObserver", 13, null), P = w(t, "style", 13, void 0), A = w(t, "type", 13, "default"), L = w(t, "isParent", 13, !1), O = w(t, "positionX", 13), z = w(t, "positionY", 13), I = w(t, "sourcePosition", 13, void 0), R = w(t, "targetPosition", 13, void 0), E = w(t, "zIndex", 13), M = w(t, "measuredWidth", 13, void 0), _ = w(t, "measuredHeight", 13, void 0), N = w(t, "initialWidth", 13, void 0), T = w(t, "initialHeight", 13, void 0), D = w(t, "width", 13, void 0), B = w(t, "height", 13, void 0), W = w(t, "dragHandle", 13, void 0), q = w(t, "initialized", 13, !1), fe = w(t, "parentId", 13, void 0), j = w(t, "nodeClickDistance", 13, void 0), Y = w(t, "class", 13, "");
  const he = Ye(), {
    nodeTypes: xe,
    nodeDragThreshold: be,
    selectNodesOnDrag: ue,
    handleNodeSelection: le,
    updateNodeInternals: ae,
    elementsSelectable: ke,
    nodesDraggable: Xe
  } = he;
  let He = te(void 0, !0), We = te(null, !0);
  const ee = Ti(), Re = ve(p());
  let Pe = te(void 0, !0), Oe = te(void 0, !0), ot = te(void 0, !0);
  Er("svelteflow__node_id", g()), Er("svelteflow__node_connectable", Re), js(() => {
    var J;
    h(We) && ((J = $()) == null || J.unobserve(h(We)));
  });
  function Le(J) {
    S() && (!X(ue) || !C() || X(be) > 0) && le(g()), ee("nodeclick", { node: d().internals.userNode, event: J });
  }
  oe(() => K(A()), () => {
    F(l, A() || "default");
  }), oe(() => (o(), h(l)), () => {
    F(u, !!o()[h(l)]);
  }), oe(
    () => (o(), h(l), hi),
    () => {
      F(c, o()[h(l)] || hi);
    }
  ), oe(
    () => (h(u), K(A())),
    () => {
      h(u) || console.warn("003", Br.error003(A()));
    }
  ), oe(
    () => (K(D()), K(B()), K(N()), K(T()), K(M()), K(_())),
    () => {
      F(f, xp({
        width: D(),
        height: B(),
        initialWidth: N(),
        initialHeight: T(),
        measuredWidth: M(),
        measuredHeight: _()
      }));
    }
  ), oe(() => K(p()), () => {
    Re.set(!!p());
  }), oe(
    () => (h(Pe), h(l), h(Oe), K(I()), h(ot), K(R()), K(g()), h(He)),
    () => {
      (h(Pe) && h(l) !== h(Pe) || h(Oe) && I() !== h(Oe) || h(ot) && R() !== h(ot)) && requestAnimationFrame(() => ae(/* @__PURE__ */ new Map([
        [
          g(),
          {
            id: g(),
            nodeElement: h(He),
            force: !0
          }
        ]
      ]))), F(Pe, h(l)), F(Oe, I()), F(ot, R());
    }
  ), oe(
    () => (K($()), h(He), h(We), K(q())),
    () => {
      $() && (h(He) !== h(We) || !q()) && (h(We) && $().unobserve(h(We)), h(He) && $().observe(h(He)), F(We, h(He)));
    }
  ), ut(), Ne(!0);
  var tt = Ze(), Ge = we(tt);
  {
    var wt = (J) => {
      var Se = bp(), ne = Q(Se);
      const gn = /* @__PURE__ */ ge(() => x() ?? !1), Bt = /* @__PURE__ */ ge(() => S() ?? i() ?? !0), Ce = /* @__PURE__ */ ge(() => b() ?? !0), nt = /* @__PURE__ */ ge(() => C() ?? s() ?? !0);
      mu(ne, () => h(c), (pe, Te) => {
        Te(pe, {
          get data() {
            return v();
          },
          get id() {
            return g();
          },
          get selected() {
            return h(gn);
          },
          get selectable() {
            return h(Bt);
          },
          get deletable() {
            return h(Ce);
          },
          get sourcePosition() {
            return I();
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
            return h(nt);
          },
          get dragHandle() {
            return W();
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
            return O();
          },
          get positionAbsoluteY() {
            return z();
          },
          get width() {
            return D();
          },
          get height() {
            return B();
          }
        });
      }), G(Se), dt(Se, (pe, Te) => wr == null ? void 0 : wr(pe, Te), () => ({
        nodeId: g(),
        isSelectable: S(),
        disabled: !1,
        handleSelector: W(),
        noDragClass: "nodrag",
        nodeClickDistance: j(),
        onNodeMouseDown: le,
        onDrag: (pe, Te, et, Dt) => {
          ee("nodedrag", { event: pe, targetNode: et, nodes: Dt });
        },
        onDragStart: (pe, Te, et, Dt) => {
          ee("nodedragstart", { event: pe, targetNode: et, nodes: Dt });
        },
        onDragStop: (pe, Te, et, Dt) => {
          ee("nodedragstop", { event: pe, targetNode: et, nodes: Dt });
        },
        store: he
      })), kn(Se, (pe) => F(He, pe), () => h(He)), Pt(() => Ke("click", Se, Le)), Pt(() => Ke("mouseenter", Se, (pe) => ee("nodemouseenter", { node: d(), event: pe }))), Pt(() => Ke("mouseleave", Se, (pe) => ee("nodemouseleave", { node: d(), event: pe }))), Pt(() => Ke("mousemove", Se, (pe) => ee("nodemousemove", { node: d(), event: pe }))), Pt(() => Ke("contextmenu", Se, (pe) => ee("nodecontextmenu", { node: d(), event: pe }))), _e(
        (pe) => {
          re(Se, "data-id", g()), Nr(Se, cn(pe)), re(Se, "style", `${P() ?? ""};${h(f).width ?? ""}${h(f).height ?? ""}`), je(Se, "dragging", k()), je(Se, "selected", x()), je(Se, "draggable", C()), je(Se, "connectable", p()), je(Se, "selectable", S()), je(Se, "nopan", C()), je(Se, "parent", L()), Qe(Se, "z-index", E()), Qe(Se, "transform", `translate(${O() ?? ""}px, ${z() ?? ""}px)`), Qe(Se, "visibility", q() ? "visible" : "hidden");
        },
        [
          () => yt([
            "svelte-flow__node",
            `svelte-flow__node-${h(l)}`,
            Y()
          ])
        ],
        ge
      ), V(J, Se);
    };
    Ee(Ge, (J) => {
      m() || J(wt);
    });
  }
  V(e, tt);
  var ct = de({
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
      return C();
    },
    set draggable(J) {
      C(J), y();
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
      return b();
    },
    set deletable(J) {
      b(J), y();
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
      return $();
    },
    set resizeObserver(J) {
      $(J), y();
    },
    get style() {
      return P();
    },
    set style(J) {
      P(J), y();
    },
    get type() {
      return A();
    },
    set type(J) {
      A(J), y();
    },
    get isParent() {
      return L();
    },
    set isParent(J) {
      L(J), y();
    },
    get positionX() {
      return O();
    },
    set positionX(J) {
      O(J), y();
    },
    get positionY() {
      return z();
    },
    set positionY(J) {
      z(J), y();
    },
    get sourcePosition() {
      return I();
    },
    set sourcePosition(J) {
      I(J), y();
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
      return _();
    },
    set measuredHeight(J) {
      _(J), y();
    },
    get initialWidth() {
      return N();
    },
    set initialWidth(J) {
      N(J), y();
    },
    get initialHeight() {
      return T();
    },
    set initialHeight(J) {
      T(J), y();
    },
    get width() {
      return D();
    },
    set width(J) {
      D(J), y();
    },
    get height() {
      return B();
    },
    set height(J) {
      B(J), y();
    },
    get dragHandle() {
      return W();
    },
    set dragHandle(J) {
      W(J), y();
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
      return j();
    },
    set nodeClickDistance(J) {
      j(J), y();
    },
    get class() {
      return Y();
    },
    set class(J) {
      Y(J), y();
    }
  });
  return r(), ct;
}
ie(
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
var Cp = /* @__PURE__ */ se('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const kp = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function zc(e, t) {
  ce(t, !1), rt(e, kp);
  const [n, r] = qe(), o = () => Z(c, "$visibleNodes", n), i = () => Z(f, "$nodesDraggable", n), s = () => Z(g, "$elementsSelectable", n), a = () => Z(d, "$nodesConnectable", n), l = () => Z(x, "$parentLookup", n);
  let u = w(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: f,
    nodesConnectable: d,
    elementsSelectable: g,
    updateNodeInternals: v,
    parentLookup: x
  } = Ye(), C = typeof ResizeObserver > "u" ? null : new ResizeObserver((b) => {
    const m = /* @__PURE__ */ new Map();
    b.forEach((k) => {
      const $ = k.target.getAttribute("data-id");
      m.set($, { id: $, nodeElement: k.target, force: !0 });
    }), v(m);
  });
  js(() => {
    C == null || C.disconnect();
  }), Ne();
  var S = Cp();
  At(S, 5, o, (b) => b.id, (b, m) => {
    const k = /* @__PURE__ */ ge(() => !!h(m).selected), $ = /* @__PURE__ */ ge(() => !!h(m).hidden), P = /* @__PURE__ */ ge(() => !!(h(m).draggable || i() && typeof h(m).draggable > "u")), A = /* @__PURE__ */ ge(() => !!(h(m).selectable || s() && typeof h(m).selectable > "u")), L = /* @__PURE__ */ ge(() => !!(h(m).connectable || a() && typeof h(m).connectable > "u")), O = /* @__PURE__ */ ge(() => h(m).deletable ?? !0), z = /* @__PURE__ */ ge(() => l().has(h(m).id)), I = /* @__PURE__ */ ge(() => h(m).type ?? "default"), R = /* @__PURE__ */ ge(() => h(m).internals.z ?? 0), E = /* @__PURE__ */ ge(() => sc(h(m)));
    Lc(b, {
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
        return h($);
      },
      get draggable() {
        return h(P);
      },
      get selectable() {
        return h(A);
      },
      get connectable() {
        return h(L);
      },
      get deletable() {
        return h(O);
      },
      get positionX() {
        return h(m).internals.positionAbsolute.x;
      },
      get positionY() {
        return h(m).internals.positionAbsolute.y;
      },
      get isParent() {
        return h(z);
      },
      get style() {
        return h(m).style;
      },
      get class() {
        return h(m).class;
      },
      get type() {
        return h(I);
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
      resizeObserver: C,
      get nodeClickDistance() {
        return u();
      },
      $$events: {
        nodeclick(M) {
          De.call(this, t, M);
        },
        nodemouseenter(M) {
          De.call(this, t, M);
        },
        nodemousemove(M) {
          De.call(this, t, M);
        },
        nodemouseleave(M) {
          De.call(this, t, M);
        },
        nodedrag(M) {
          De.call(this, t, M);
        },
        nodedragstart(M) {
          De.call(this, t, M);
        },
        nodedragstop(M) {
          De.call(this, t, M);
        },
        nodecontextmenu(M) {
          De.call(this, t, M);
        }
      }
    });
  }), G(S), V(e, S);
  var p = de({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance(b) {
      u(b), y();
    }
  });
  return r(), p;
}
ie(zc, { nodeClickDistance: {} }, [], [], !0);
var Ep = /* @__PURE__ */ $e('<svg><g role="img"><!></g></svg>');
function Hc(e, t) {
  ce(t, !1);
  const [n, r] = qe(), o = () => Z(Y, "$edgeTypes", n), i = () => Z(he, "$flowId", n), s = () => Z(xe, "$elementsSelectable", n), a = () => Z(j, "$edgeLookup", n), l = te(void 0, !0), u = te(void 0, !0), c = te(void 0, !0), f = te(void 0, !0), d = te(void 0, !0);
  let g = w(t, "id", 13), v = w(t, "type", 13, "default"), x = w(t, "source", 13, ""), C = w(t, "target", 13, ""), S = w(t, "data", 29, () => ({})), p = w(t, "style", 13, void 0), b = w(t, "zIndex", 13, void 0), m = w(t, "animated", 13, !1), k = w(t, "selected", 13, !1), $ = w(t, "selectable", 13, void 0), P = w(t, "deletable", 13, void 0), A = w(t, "hidden", 13, !1), L = w(t, "label", 13, void 0), O = w(t, "labelStyle", 13, void 0), z = w(t, "markerStart", 13, void 0), I = w(t, "markerEnd", 13, void 0), R = w(t, "sourceHandle", 13, void 0), E = w(t, "targetHandle", 13, void 0), M = w(t, "sourceX", 13), _ = w(t, "sourceY", 13), N = w(t, "targetX", 13), T = w(t, "targetY", 13), D = w(t, "sourcePosition", 13), B = w(t, "targetPosition", 13), W = w(t, "ariaLabel", 13, void 0), q = w(t, "interactionWidth", 13, void 0), fe = w(t, "class", 13, "");
  Er("svelteflow__edge_id", g());
  const {
    edgeLookup: j,
    edgeTypes: Y,
    flowId: he,
    elementsSelectable: xe
  } = Ye(), be = Ti(), ue = kc();
  function le(ee) {
    const Re = a().get(g());
    Re && (ue(g()), be("edgeclick", { event: ee, edge: Re }));
  }
  function ae(ee, Re) {
    const Pe = a().get(g());
    Pe && be(Re, { event: ee, edge: Pe });
  }
  oe(() => K(v()), () => {
    F(l, v() || "default");
  }), oe(
    () => (o(), h(l), vi),
    () => {
      F(u, o()[h(l)] || vi);
    }
  ), oe(
    () => (K(z()), i()),
    () => {
      F(c, z() ? `url('#${As(z(), i())}')` : void 0);
    }
  ), oe(
    () => (K(I()), i()),
    () => {
      F(f, I() ? `url('#${As(I(), i())}')` : void 0);
    }
  ), oe(
    () => (K($()), s()),
    () => {
      F(d, $() ?? s());
    }
  ), ut(), Ne(!0);
  var ke = Ze(), Xe = we(ke);
  {
    var He = (ee) => {
      var Re = Ep(), Pe = Q(Re), Oe = Q(Pe);
      const ot = /* @__PURE__ */ ge(() => P() ?? !0);
      mu(Oe, () => h(u), (Le, tt) => {
        tt(Le, {
          get id() {
            return g();
          },
          get source() {
            return x();
          },
          get target() {
            return C();
          },
          get sourceX() {
            return M();
          },
          get sourceY() {
            return _();
          },
          get targetX() {
            return N();
          },
          get targetY() {
            return T();
          },
          get sourcePosition() {
            return D();
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
            return L();
          },
          get labelStyle() {
            return O();
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
            return h(ot);
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
      }), G(Pe), G(Re), _e(
        (Le) => {
          Qe(Re, "z-index", b()), ir(Pe, cn(Le)), re(Pe, "data-id", g()), re(Pe, "aria-label", W() === null ? void 0 : W() ? W() : `Edge from ${x()} to ${C()}`), je(Pe, "animated", m()), je(Pe, "selected", k()), je(Pe, "selectable", h(d));
        },
        [
          () => yt(["svelte-flow__edge", fe()])
        ],
        ge
      ), Ke("click", Pe, le), Ke("contextmenu", Pe, (Le) => {
        ae(Le, "edgecontextmenu");
      }), Ke("mouseenter", Pe, (Le) => {
        ae(Le, "edgemouseenter");
      }), Ke("mouseleave", Pe, (Le) => {
        ae(Le, "edgemouseleave");
      }), V(ee, Re);
    };
    Ee(Xe, (ee) => {
      A() || ee(He);
    });
  }
  V(e, ke);
  var We = de({
    get id() {
      return g();
    },
    set id(ee) {
      g(ee), y();
    },
    get type() {
      return v();
    },
    set type(ee) {
      v(ee), y();
    },
    get source() {
      return x();
    },
    set source(ee) {
      x(ee), y();
    },
    get target() {
      return C();
    },
    set target(ee) {
      C(ee), y();
    },
    get data() {
      return S();
    },
    set data(ee) {
      S(ee), y();
    },
    get style() {
      return p();
    },
    set style(ee) {
      p(ee), y();
    },
    get zIndex() {
      return b();
    },
    set zIndex(ee) {
      b(ee), y();
    },
    get animated() {
      return m();
    },
    set animated(ee) {
      m(ee), y();
    },
    get selected() {
      return k();
    },
    set selected(ee) {
      k(ee), y();
    },
    get selectable() {
      return $();
    },
    set selectable(ee) {
      $(ee), y();
    },
    get deletable() {
      return P();
    },
    set deletable(ee) {
      P(ee), y();
    },
    get hidden() {
      return A();
    },
    set hidden(ee) {
      A(ee), y();
    },
    get label() {
      return L();
    },
    set label(ee) {
      L(ee), y();
    },
    get labelStyle() {
      return O();
    },
    set labelStyle(ee) {
      O(ee), y();
    },
    get markerStart() {
      return z();
    },
    set markerStart(ee) {
      z(ee), y();
    },
    get markerEnd() {
      return I();
    },
    set markerEnd(ee) {
      I(ee), y();
    },
    get sourceHandle() {
      return R();
    },
    set sourceHandle(ee) {
      R(ee), y();
    },
    get targetHandle() {
      return E();
    },
    set targetHandle(ee) {
      E(ee), y();
    },
    get sourceX() {
      return M();
    },
    set sourceX(ee) {
      M(ee), y();
    },
    get sourceY() {
      return _();
    },
    set sourceY(ee) {
      _(ee), y();
    },
    get targetX() {
      return N();
    },
    set targetX(ee) {
      N(ee), y();
    },
    get targetY() {
      return T();
    },
    set targetY(ee) {
      T(ee), y();
    },
    get sourcePosition() {
      return D();
    },
    set sourcePosition(ee) {
      D(ee), y();
    },
    get targetPosition() {
      return B();
    },
    set targetPosition(ee) {
      B(ee), y();
    },
    get ariaLabel() {
      return W();
    },
    set ariaLabel(ee) {
      W(ee), y();
    },
    get interactionWidth() {
      return q();
    },
    set interactionWidth(ee) {
      q(ee), y();
    },
    get class() {
      return fe();
    },
    set class(ee) {
      fe(ee), y();
    }
  });
  return r(), We;
}
ie(
  Hc,
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
  ce(t, !1);
  let n = w(t, "onMount", 12, void 0), r = w(t, "onDestroy", 12, void 0);
  return sr(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), Ne(), de({
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
ie(Vc, { onMount: {}, onDestroy: {} }, [], [], !0);
var Sp = /* @__PURE__ */ $e("<defs></defs>");
function Ic(e, t) {
  ce(t, !1);
  const [n, r] = qe(), o = () => Z(i, "$markers", n), { markers: i } = Ye();
  Ne();
  var s = Sp();
  At(s, 5, o, (a) => a.id, (a, l) => {
    Rc(a, Vt(() => h(l)));
  }), G(s), V(e, s), de(), r();
}
ie(Ic, {}, [], [], !0);
var Np = /* @__PURE__ */ $e('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), Pp = /* @__PURE__ */ $e('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), Mp = /* @__PURE__ */ $e('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Rc(e, t) {
  ce(t, !1);
  let n = w(t, "id", 12), r = w(t, "type", 12), o = w(t, "width", 12, 12.5), i = w(t, "height", 12, 12.5), s = w(t, "markerUnits", 12, "strokeWidth"), a = w(t, "orient", 12, "auto-start-reverse"), l = w(t, "color", 12, void 0), u = w(t, "strokeWidth", 12, void 0);
  Ne();
  var c = Mp(), f = Q(c);
  {
    var d = (v) => {
      var x = Np();
      _e(() => {
        re(x, "stroke", l()), re(x, "stroke-width", u());
      }), V(v, x);
    }, g = (v) => {
      var x = Ze(), C = we(x);
      {
        var S = (p) => {
          var b = Pp();
          _e(() => {
            re(b, "stroke", l()), re(b, "stroke-width", u()), re(b, "fill", l());
          }), V(p, b);
        };
        Ee(
          C,
          (p) => {
            r() === uo.ArrowClosed && p(S);
          },
          !0
        );
      }
      V(v, x);
    };
    Ee(f, (v) => {
      r() === uo.Arrow ? v(d) : v(g, !1);
    });
  }
  return G(c), _e(() => {
    re(c, "id", n()), re(c, "markerWidth", `${o()}`), re(c, "markerHeight", `${i()}`), re(c, "markerUnits", s()), re(c, "orient", a());
  }), V(e, c), de({
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
  Rc,
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
var $p = /* @__PURE__ */ se('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function Bc(e, t) {
  ce(t, !1);
  const [n, r] = qe(), o = () => Z(a, "$visibleEdges", n), i = () => Z(c, "$elementsSelectable", n);
  let s = w(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: a,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = Ye();
  sr(() => {
    s() && u(s());
  }), Ne();
  var f = $p(), d = Q(f), g = Q(d);
  Ic(g, {}), G(d);
  var v = U(d, 2);
  At(v, 1, o, (p) => p.id, (p, b) => {
    const m = /* @__PURE__ */ ge(() => h(b).selectable ?? i()), k = /* @__PURE__ */ ge(() => h(b).type || "default");
    Hc(p, {
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
        return h(m);
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
        return h(k);
      },
      get zIndex() {
        return h(b).zIndex;
      },
      $$events: {
        edgeclick($) {
          De.call(this, t, $);
        },
        edgecontextmenu($) {
          De.call(this, t, $);
        },
        edgemouseenter($) {
          De.call(this, t, $);
        },
        edgemouseleave($) {
          De.call(this, t, $);
        }
      }
    });
  });
  var x = U(v, 2);
  {
    var C = (p) => {
      Vc(p, {
        onMount: () => {
          ni(l, !0);
        },
        onDestroy: () => {
          ni(l, !1);
        }
      });
    };
    Ee(x, (p) => {
      o().length > 0 && p(C);
    });
  }
  G(f), V(e, f);
  var S = de({
    get defaultEdgeOptions() {
      return s();
    },
    set defaultEdgeOptions(p) {
      s(p), y();
    }
  });
  return r(), S;
}
ie(Bc, { defaultEdgeOptions: {} }, [], [], !0);
var Tp = /* @__PURE__ */ se('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const Ap = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function fa(e, t) {
  ce(t, !1), rt(e, Ap);
  let n = w(t, "x", 12, 0), r = w(t, "y", 12, 0), o = w(t, "width", 12, 0), i = w(t, "height", 12, 0), s = w(t, "isVisible", 12, !0);
  var a = Ze(), l = we(a);
  {
    var u = (c) => {
      var f = Tp();
      _e(() => {
        Qe(f, "width", typeof o() == "string" ? o() : `${o()}px`), Qe(f, "height", typeof i() == "string" ? i() : `${i()}px`), Qe(f, "transform", `translate(${n()}px, ${r()}px)`);
      }), V(c, f);
    };
    Ee(l, (c) => {
      s() && c(u);
    });
  }
  return V(e, a), de({
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
  fa,
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
function Yc(e, t) {
  ce(t, !1);
  const [n, r] = qe(), o = () => Z(s, "$selectionRect", n), i = () => Z(a, "$selectionRectMode", n), { selectionRect: s, selectionRectMode: a } = Ye();
  Ne();
  const l = /* @__PURE__ */ ge(() => !!(o() && i() === "user")), u = /* @__PURE__ */ ge(() => {
    var g;
    return (g = o()) == null ? void 0 : g.width;
  }), c = /* @__PURE__ */ ge(() => {
    var g;
    return (g = o()) == null ? void 0 : g.height;
  }), f = /* @__PURE__ */ ge(() => {
    var g;
    return (g = o()) == null ? void 0 : g.x;
  }), d = /* @__PURE__ */ ge(() => {
    var g;
    return (g = o()) == null ? void 0 : g.y;
  });
  fa(e, {
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
ie(Yc, {}, [], [], !0);
var Op = /* @__PURE__ */ se('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const Dp = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function Xc(e, t) {
  ce(t, !1), rt(e, Dp);
  const [n, r] = qe(), o = () => Z(l, "$selectionRectMode", n), i = () => Z(c, "$nodeLookup", n), s = () => Z(u, "$nodes", n), a = Ye(), { selectionRectMode: l, nodes: u, nodeLookup: c } = a, f = Ti();
  let d = te(null);
  function g(p) {
    const b = s().filter((m) => m.selected);
    f("selectioncontextmenu", { nodes: b, event: p });
  }
  function v(p) {
    const b = s().filter((m) => m.selected);
    f("selectionclick", { nodes: b, event: p });
  }
  oe(
    () => (o(), i(), s()),
    () => {
      o() === "nodes" && (F(d, ko(i(), { filter: (p) => !!p.selected })), s());
    }
  ), ut(), Ne();
  var x = Ze(), C = we(x);
  {
    var S = (p) => {
      var b = Op(), m = Q(b);
      fa(m, { width: "100%", height: "100%", x: 0, y: 0 }), G(b), dt(b, (k, $) => wr == null ? void 0 : wr(k, $), () => ({
        disabled: !1,
        store: a,
        onDrag: (k, $, P, A) => {
          f("nodedrag", { event: k, targetNode: null, nodes: A });
        },
        onDragStart: (k, $, P, A) => {
          f("nodedragstart", { event: k, targetNode: null, nodes: A });
        },
        onDragStop: (k, $, P, A) => {
          f("nodedragstop", { event: k, targetNode: null, nodes: A });
        }
      })), Pt(() => Ke("contextmenu", b, g)), Pt(() => Ke("click", b, v)), Pt(() => Ke("keyup", b, () => {
      })), _e(() => re(b, "style", `width: ${h(d).width ?? ""}px; height: ${h(d).height ?? ""}px; transform: translate(${h(d).x ?? ""}px, ${h(d).y ?? ""}px)`)), V(p, b);
    };
    Ee(C, (p) => {
      o() === "nodes" && h(d) && yn(h(d).x) && yn(h(d).y) && p(S);
    });
  }
  V(e, x), de(), r();
}
ie(Xc, {}, [], [], !0);
function Ve(e, t) {
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
          (p) => typeof p == "string" ? [p] : p
        ).some(
          (p) => p.every((b) => l[b])
        ))
          continue;
        if (s.key === d) {
          v && s.preventDefault();
          const C = {
            node: e,
            trigger: c,
            originalEvent: s
          };
          e.dispatchEvent(new CustomEvent("shortcut", { detail: C })), g == null || g(C);
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
function Wc(e, t) {
  ce(t, !1);
  let n = w(t, "selectionKey", 12, "Shift"), r = w(t, "multiSelectionKey", 28, () => fi() ? "Meta" : "Control"), o = w(t, "deleteKey", 12, "Backspace"), i = w(t, "panActivationKey", 12, " "), s = w(t, "zoomActivationKey", 28, () => fi() ? "Meta" : "Control");
  const {
    selectionKeyPressed: a,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: f,
    selectionRect: d
  } = Ye();
  function g(p) {
    return p !== null && typeof p == "object";
  }
  function v(p) {
    return g(p) ? p.modifier || [] : [];
  }
  function x(p) {
    return p == null ? "" : g(p) ? p.key : p;
  }
  function C(p, b) {
    return (Array.isArray(p) ? p : [p]).map((k) => {
      const $ = x(k);
      return {
        key: $,
        modifier: v(k),
        enabled: $ !== null,
        callback: b
      };
    });
  }
  function S() {
    d.set(null), a.set(!1), l.set(!1), u.set(!1), c.set(!1), f.set(!1);
  }
  return Ne(), Ke("blur", bt, S), Ke("contextmenu", bt, S), dt(bt, (p, b) => Ve == null ? void 0 : Ve(p, b), () => ({
    trigger: C(n(), () => a.set(!0)),
    type: "keydown"
  })), dt(bt, (p, b) => Ve == null ? void 0 : Ve(p, b), () => ({
    trigger: C(n(), () => a.set(!1)),
    type: "keyup"
  })), dt(bt, (p, b) => Ve == null ? void 0 : Ve(p, b), () => ({
    trigger: C(r(), () => l.set(!0)),
    type: "keydown"
  })), dt(bt, (p, b) => Ve == null ? void 0 : Ve(p, b), () => ({
    trigger: C(r(), () => l.set(!1)),
    type: "keyup"
  })), dt(bt, (p, b) => Ve == null ? void 0 : Ve(p, b), () => ({
    trigger: C(o(), (p) => {
      !(p.originalEvent.ctrlKey || p.originalEvent.metaKey || p.originalEvent.shiftKey) && !h0(p.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), dt(bt, (p, b) => Ve == null ? void 0 : Ve(p, b), () => ({
    trigger: C(o(), () => u.set(!1)),
    type: "keyup"
  })), dt(bt, (p, b) => Ve == null ? void 0 : Ve(p, b), () => ({
    trigger: C(i(), () => c.set(!0)),
    type: "keydown"
  })), dt(bt, (p, b) => Ve == null ? void 0 : Ve(p, b), () => ({
    trigger: C(i(), () => c.set(!1)),
    type: "keyup"
  })), dt(bt, (p, b) => Ve == null ? void 0 : Ve(p, b), () => ({
    trigger: C(s(), () => f.set(!0)),
    type: "keydown"
  })), dt(bt, (p, b) => Ve == null ? void 0 : Ve(p, b), () => ({
    trigger: C(s(), () => f.set(!1)),
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
ie(
  Wc,
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
var Lp = /* @__PURE__ */ $e('<path fill="none" class="svelte-flow__connection-path"></path>'), zp = /* @__PURE__ */ $e('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function Kc(e, t) {
  ce(t, !1);
  const [n, r] = qe(), o = () => Z(g, "$connection", n), i = () => Z(v, "$connectionLineType", n), s = () => Z(f, "$width", n), a = () => Z(d, "$height", n);
  let l = w(t, "containerStyle", 12, ""), u = w(t, "style", 12, ""), c = w(t, "isCustomComponent", 12, !1);
  const {
    width: f,
    height: d,
    connection: g,
    connectionLineType: v
  } = Ye();
  let x = te(null);
  oe(
    () => (o(), K(c()), i(), h(x), Ts),
    () => {
      if (o().inProgress && !c()) {
        const { from: m, to: k, fromPosition: $, toPosition: P } = o(), A = {
          sourceX: m.x,
          sourceY: m.y,
          sourcePosition: $,
          targetX: k.x,
          targetY: k.y,
          targetPosition: P
        };
        switch (i()) {
          case mr.Bezier:
            ((L) => F(x, L[0]))(lc(A));
            break;
          case mr.Step:
            ((L) => F(x, L[0]))(gi({ ...A, borderRadius: 0 }));
            break;
          case mr.SmoothStep:
            ((L) => F(x, L[0]))(gi(A));
            break;
          default:
            ((L) => F(x, L[0]))(Ts(A));
        }
      }
    }
  ), ut(), Ne();
  var C = Ze(), S = we(C);
  {
    var p = (m) => {
      var k = zp(), $ = Q(k), P = Q($);
      ft(P, t, "connectionLine", {});
      var A = U(P);
      {
        var L = (O) => {
          var z = Lp();
          _e(() => {
            re(z, "d", h(x)), re(z, "style", u());
          }), V(O, z);
        };
        Ee(A, (O) => {
          c() || O(L);
        });
      }
      G($), G(k), _e(
        (O) => {
          re(k, "width", s()), re(k, "height", a()), re(k, "style", l()), ir($, cn(O));
        },
        [
          () => yt([
            "svelte-flow__connection",
            s0(o().isValid)
          ])
        ],
        ge
      ), V(m, k);
    };
    Ee(S, (m) => {
      o().inProgress && m(p);
    });
  }
  V(e, C);
  var b = de({
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
  return r(), b;
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
var Hp = /* @__PURE__ */ se("<div><!></div>");
function Bi(e, t) {
  const n = Ue(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = Ue(n, ["position", "style", "class"]);
  ce(t, !1);
  const [o, i] = qe(), s = () => Z(f, "$selectionRectMode", o), a = te();
  let l = w(t, "position", 12, "top-right"), u = w(t, "style", 12, void 0), c = w(t, "class", 12, void 0);
  const { selectionRectMode: f } = Ye();
  oe(() => K(l()), () => {
    F(a, `${l()}`.split("-"));
  }), ut(), Ne();
  var d = Hp();
  let g;
  var v = Q(d);
  ft(v, t, "default", {}), G(d), _e(
    (C) => {
      g = qt(d, g, {
        class: C,
        style: u(),
        ...r
      }), Qe(d, "pointer-events", s() ? "none" : "");
    },
    [
      () => yt([
        "svelte-flow__panel",
        c(),
        ...h(a)
      ])
    ],
    ge
  ), V(e, d);
  var x = de({
    get position() {
      return l();
    },
    set position(C) {
      l(C), y();
    },
    get style() {
      return u();
    },
    set style(C) {
      u(C), y();
    },
    get class() {
      return c();
    },
    set class(C) {
      c(C), y();
    }
  });
  return i(), x;
}
ie(Bi, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var Vp = /* @__PURE__ */ se('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function Fc(e, t) {
  ce(t, !1);
  let n = w(t, "proOptions", 12, void 0), r = w(t, "position", 12, "bottom-right");
  Ne();
  var o = Ze(), i = we(o);
  {
    var s = (a) => {
      Bi(a, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var c = Vp();
          V(l, c);
        },
        $$slots: { default: !0 }
      });
    };
    Ee(i, (a) => {
      var l;
      (l = n()) != null && l.hideAttribution || a(s);
    });
  }
  return V(e, o), de({
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
ie(Fc, { proOptions: {}, position: {} }, [], [], !0);
function kl(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: i, paneClickDistance: s }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), o !== void 0 && e.setMaxZoom(o), i !== void 0 && e.setTranslateExtent(i), s !== void 0 && e.setPaneClickDistance(s);
}
const Ip = (e) => Object.keys(e);
function El(e, t) {
  Ip(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function Rp() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function Bp(e = "light") {
  return Lt("light", (n) => {
    if (e !== "system") {
      n(e);
      return;
    }
    const r = Rp(), o = () => n(r != null && r.matches ? "dark" : "light");
    return n(r != null && r.matches ? "dark" : "light"), r == null || r.addEventListener("change", o), () => {
      r == null || r.removeEventListener("change", o);
    };
  });
}
var Yp = /* @__PURE__ */ se('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), Xp = /* @__PURE__ */ se("<!> <!>", 1), Wp = /* @__PURE__ */ se("<div><!> <!> <!> <!></div>");
const Kp = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function Zc(e, t) {
  const n = gg(t), r = Ue(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), o = Ue(r, [
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
  ce(t, !1), rt(e, Kp);
  const [i, s] = qe(), a = () => Z(b(), "$viewport", i), l = () => Z(Zi, "$initialized", i), u = () => Z(h(c), "$colorModeClass", i), c = te();
  let f = w(t, "id", 12, "1"), d = w(t, "nodes", 12), g = w(t, "edges", 12), v = w(t, "fitView", 12, void 0), x = w(t, "fitViewOptions", 12, void 0), C = w(t, "minZoom", 12, void 0), S = w(t, "maxZoom", 12, void 0), p = w(t, "initialViewport", 12, void 0), b = w(t, "viewport", 12, void 0), m = w(t, "nodeTypes", 12, void 0), k = w(t, "edgeTypes", 12, void 0), $ = w(t, "selectionKey", 12, void 0), P = w(t, "selectionMode", 12, void 0), A = w(t, "panActivationKey", 12, void 0), L = w(t, "multiSelectionKey", 12, void 0), O = w(t, "zoomActivationKey", 12, void 0), z = w(t, "nodesDraggable", 12, void 0), I = w(t, "nodesConnectable", 12, void 0), R = w(t, "nodeDragThreshold", 12, void 0), E = w(t, "elementsSelectable", 12, void 0), M = w(t, "snapGrid", 12, void 0), _ = w(t, "deleteKey", 12, void 0), N = w(t, "connectionRadius", 12, void 0), T = w(t, "connectionLineType", 12, void 0), D = w(t, "connectionMode", 28, () => Jn.Strict), B = w(t, "connectionLineStyle", 12, ""), W = w(t, "connectionLineContainerStyle", 12, ""), q = w(t, "onMoveStart", 12, void 0), fe = w(t, "onMove", 12, void 0), j = w(t, "onMoveEnd", 12, void 0), Y = w(t, "isValidConnection", 12, void 0), he = w(t, "translateExtent", 12, void 0), xe = w(t, "nodeExtent", 12, void 0), be = w(t, "onlyRenderVisibleElements", 12, void 0), ue = w(t, "panOnScrollMode", 28, () => Vn.Free), le = w(t, "preventScrolling", 12, !0), ae = w(t, "zoomOnScroll", 12, !0), ke = w(t, "zoomOnDoubleClick", 12, !0), Xe = w(t, "zoomOnPinch", 12, !0), He = w(t, "panOnScroll", 12, !1), We = w(t, "panOnDrag", 12, !0), ee = w(t, "selectionOnDrag", 12, void 0), Re = w(t, "autoPanOnConnect", 12, !0), Pe = w(t, "autoPanOnNodeDrag", 12, !0), Oe = w(t, "onerror", 12, void 0), ot = w(t, "ondelete", 12, void 0), Le = w(t, "onedgecreate", 12, void 0), tt = w(t, "attributionPosition", 12, void 0), Ge = w(t, "proOptions", 12, void 0), wt = w(t, "defaultEdgeOptions", 12, void 0), ct = w(t, "width", 12, void 0), J = w(t, "height", 12, void 0), Se = w(t, "colorMode", 12, "light"), ne = w(t, "onconnect", 12, void 0), gn = w(t, "onconnectstart", 12, void 0), Bt = w(t, "onconnectend", 12, void 0), Ce = w(t, "onbeforedelete", 12, void 0), nt = w(t, "oninit", 12, void 0), pe = w(t, "nodeOrigin", 12, void 0), Te = w(t, "paneClickDistance", 12, 0), et = w(t, "nodeClickDistance", 12, 0), Dt = w(t, "defaultMarkerColor", 12, "#b1b1b7"), lr = w(t, "style", 12, void 0), Xr = w(t, "class", 12, void 0), St = te(), _t = te(), Jt = te();
  const Yt = a() || p(), it = Zf(Ri) ? Ye() : hp({
    nodes: X(d()),
    edges: X(g()),
    width: ct(),
    height: J(),
    fitView: v(),
    nodeOrigin: pe(),
    nodeExtent: xe()
  });
  sr(() => (it.width.set(h(_t)), it.height.set(h(Jt)), it.domNode.set(h(St)), it.syncNodeStores(d()), it.syncEdgeStores(g()), it.syncViewport(b()), v() !== void 0 && it.fitViewOnInit.set(v()), x() && it.fitViewOptions.set(x()), kl(it, {
    nodeTypes: m(),
    edgeTypes: k(),
    minZoom: C(),
    maxZoom: S(),
    translateExtent: he(),
    paneClickDistance: Te()
  }), () => {
    it.reset();
  }));
  const { initialized: Zi } = it;
  let Kn = te(!1);
  oe(
    () => (h(_t), h(Jt)),
    () => {
      h(_t) !== void 0 && h(Jt) !== void 0 && (it.width.set(h(_t)), it.height.set(h(Jt)));
    }
  ), oe(
    () => (h(Kn), l(), K(nt())),
    () => {
      var H;
      !h(Kn) && l() && ((H = nt()) == null || H(), F(Kn, !0));
    }
  ), oe(
    () => (K(f()), K(T()), K(N()), K(P()), K(M()), K(Dt()), K(z()), K(I()), K(E()), K(be()), K(Y()), K(Re()), K(Pe()), K(Oe()), K(ot()), K(Le()), K(D()), K(R()), K(ne()), K(gn()), K(Bt()), K(Ce()), K(pe()), El),
    () => {
      const H = {
        flowId: f(),
        connectionLineType: T(),
        connectionRadius: N(),
        selectionMode: P(),
        snapGrid: M(),
        defaultMarkerColor: Dt(),
        nodesDraggable: z(),
        nodesConnectable: I(),
        elementsSelectable: E(),
        onlyRenderVisibleElements: be(),
        isValidConnection: Y(),
        autoPanOnConnect: Re(),
        autoPanOnNodeDrag: Pe(),
        onerror: Oe(),
        ondelete: ot(),
        onedgecreate: Le(),
        connectionMode: D(),
        nodeDragThreshold: R(),
        onconnect: ne(),
        onconnectstart: gn(),
        onconnectend: Bt(),
        onbeforedelete: Ce(),
        nodeOrigin: pe()
      };
      El(it, H);
    }
  ), oe(
    () => (K(m()), K(k()), K(C()), K(S()), K(he()), K(Te())),
    () => {
      kl(it, {
        nodeTypes: m(),
        edgeTypes: k(),
        minZoom: C(),
        maxZoom: S(),
        translateExtent: he(),
        paneClickDistance: Te()
      });
    }
  ), oe(
    () => K(Se()),
    () => {
      _g(F(c, Bp(Se())), "$colorModeClass", i);
    }
  ), ut(), Ne();
  var Xt = Wp();
  let To;
  var Ao = Q(Xt);
  Wc(Ao, {
    get selectionKey() {
      return $();
    },
    get deleteKey() {
      return _();
    },
    get panActivationKey() {
      return A();
    },
    get multiSelectionKey() {
      return L();
    },
    get zoomActivationKey() {
      return O();
    }
  });
  var Oo = U(Ao, 2);
  const Ld = /* @__PURE__ */ ge(() => ue() === void 0 ? Vn.Free : ue()), zd = /* @__PURE__ */ ge(() => le() === void 0 ? !0 : le()), Hd = /* @__PURE__ */ ge(() => ae() === void 0 ? !0 : ae()), Vd = /* @__PURE__ */ ge(() => ke() === void 0 ? !0 : ke()), Id = /* @__PURE__ */ ge(() => Xe() === void 0 ? !0 : Xe()), Rd = /* @__PURE__ */ ge(() => He() === void 0 ? !1 : He()), Bd = /* @__PURE__ */ ge(() => We() === void 0 ? !0 : We()), Yd = /* @__PURE__ */ ge(() => Te() === void 0 ? 0 : Te());
  Ac(Oo, {
    initialViewport: Yt,
    get onMoveStart() {
      return q();
    },
    get onMove() {
      return fe();
    },
    get onMoveEnd() {
      return j();
    },
    get panOnScrollMode() {
      return h(Ld);
    },
    get preventScrolling() {
      return h(zd);
    },
    get zoomOnScroll() {
      return h(Hd);
    },
    get zoomOnDoubleClick() {
      return h(Vd);
    },
    get zoomOnPinch() {
      return h(Id);
    },
    get panOnScroll() {
      return h(Rd);
    },
    get panOnDrag() {
      return h(Bd);
    },
    get paneClickDistance() {
      return h(Yd);
    },
    children: (H, yy) => {
      const Kd = /* @__PURE__ */ ge(() => We() === void 0 ? !0 : We());
      Oc(H, {
        get panOnDrag() {
          return h(Kd);
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
        children: (Wr, wy) => {
          var xa = Xp(), ba = we(xa);
          Dc(ba, {
            children: (Zd, _y) => {
              var Ca = Yp(), ka = we(Ca);
              Bc(ka, {
                get defaultEdgeOptions() {
                  return wt();
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
              var Ea = U(ka, 2);
              Kc(Ea, {
                get containerStyle() {
                  return W();
                },
                get style() {
                  return B();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (Ae, xy) => {
                    var Na = Ze(), Gd = we(Na);
                    ft(Gd, t, "connectionLine", {}), V(Ae, Na);
                  }
                }
              });
              var Sa = U(Ea, 6);
              zc(Sa, {
                get nodeClickDistance() {
                  return et();
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
              var qd = U(Sa, 2);
              Xc(qd, {
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
              }), V(Zd, Ca);
            },
            $$slots: { default: !0 }
          });
          var Fd = U(ba, 2);
          Yc(Fd, {}), V(Wr, xa);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var _a = U(Oo, 2);
  Fc(_a, {
    get proOptions() {
      return Ge();
    },
    get position() {
      return tt();
    }
  });
  var Xd = U(_a, 2);
  ft(Xd, t, "default", {}), G(Xt), kn(Xt, (H) => F(St, H), () => h(St)), _e(
    (H) => To = qt(
      Xt,
      To,
      {
        style: lr(),
        class: H,
        "data-testid": "svelte-flow__wrapper",
        ...o,
        role: "application"
      },
      "svelte-12wlba6"
    ),
    [
      () => yt([
        "svelte-flow",
        Xr(),
        u()
      ])
    ],
    ge
  ), Va(Xt, "clientWidth", (H) => F(_t, H)), Va(Xt, "clientHeight", (H) => F(Jt, H)), Ke("dragover", Xt, function(H) {
    De.call(this, t, H);
  }), Ke("drop", Xt, function(H) {
    De.call(this, t, H);
  }), V(e, Xt);
  var Wd = de({
    get id() {
      return f();
    },
    set id(H) {
      f(H), y();
    },
    get nodes() {
      return d();
    },
    set nodes(H) {
      d(H), y();
    },
    get edges() {
      return g();
    },
    set edges(H) {
      g(H), y();
    },
    get fitView() {
      return v();
    },
    set fitView(H) {
      v(H), y();
    },
    get fitViewOptions() {
      return x();
    },
    set fitViewOptions(H) {
      x(H), y();
    },
    get minZoom() {
      return C();
    },
    set minZoom(H) {
      C(H), y();
    },
    get maxZoom() {
      return S();
    },
    set maxZoom(H) {
      S(H), y();
    },
    get initialViewport() {
      return p();
    },
    set initialViewport(H) {
      p(H), y();
    },
    get viewport() {
      return b();
    },
    set viewport(H) {
      b(H), y();
    },
    get nodeTypes() {
      return m();
    },
    set nodeTypes(H) {
      m(H), y();
    },
    get edgeTypes() {
      return k();
    },
    set edgeTypes(H) {
      k(H), y();
    },
    get selectionKey() {
      return $();
    },
    set selectionKey(H) {
      $(H), y();
    },
    get selectionMode() {
      return P();
    },
    set selectionMode(H) {
      P(H), y();
    },
    get panActivationKey() {
      return A();
    },
    set panActivationKey(H) {
      A(H), y();
    },
    get multiSelectionKey() {
      return L();
    },
    set multiSelectionKey(H) {
      L(H), y();
    },
    get zoomActivationKey() {
      return O();
    },
    set zoomActivationKey(H) {
      O(H), y();
    },
    get nodesDraggable() {
      return z();
    },
    set nodesDraggable(H) {
      z(H), y();
    },
    get nodesConnectable() {
      return I();
    },
    set nodesConnectable(H) {
      I(H), y();
    },
    get nodeDragThreshold() {
      return R();
    },
    set nodeDragThreshold(H) {
      R(H), y();
    },
    get elementsSelectable() {
      return E();
    },
    set elementsSelectable(H) {
      E(H), y();
    },
    get snapGrid() {
      return M();
    },
    set snapGrid(H) {
      M(H), y();
    },
    get deleteKey() {
      return _();
    },
    set deleteKey(H) {
      _(H), y();
    },
    get connectionRadius() {
      return N();
    },
    set connectionRadius(H) {
      N(H), y();
    },
    get connectionLineType() {
      return T();
    },
    set connectionLineType(H) {
      T(H), y();
    },
    get connectionMode() {
      return D();
    },
    set connectionMode(H) {
      D(H), y();
    },
    get connectionLineStyle() {
      return B();
    },
    set connectionLineStyle(H) {
      B(H), y();
    },
    get connectionLineContainerStyle() {
      return W();
    },
    set connectionLineContainerStyle(H) {
      W(H), y();
    },
    get onMoveStart() {
      return q();
    },
    set onMoveStart(H) {
      q(H), y();
    },
    get onMove() {
      return fe();
    },
    set onMove(H) {
      fe(H), y();
    },
    get onMoveEnd() {
      return j();
    },
    set onMoveEnd(H) {
      j(H), y();
    },
    get isValidConnection() {
      return Y();
    },
    set isValidConnection(H) {
      Y(H), y();
    },
    get translateExtent() {
      return he();
    },
    set translateExtent(H) {
      he(H), y();
    },
    get nodeExtent() {
      return xe();
    },
    set nodeExtent(H) {
      xe(H), y();
    },
    get onlyRenderVisibleElements() {
      return be();
    },
    set onlyRenderVisibleElements(H) {
      be(H), y();
    },
    get panOnScrollMode() {
      return ue();
    },
    set panOnScrollMode(H) {
      ue(H), y();
    },
    get preventScrolling() {
      return le();
    },
    set preventScrolling(H) {
      le(H), y();
    },
    get zoomOnScroll() {
      return ae();
    },
    set zoomOnScroll(H) {
      ae(H), y();
    },
    get zoomOnDoubleClick() {
      return ke();
    },
    set zoomOnDoubleClick(H) {
      ke(H), y();
    },
    get zoomOnPinch() {
      return Xe();
    },
    set zoomOnPinch(H) {
      Xe(H), y();
    },
    get panOnScroll() {
      return He();
    },
    set panOnScroll(H) {
      He(H), y();
    },
    get panOnDrag() {
      return We();
    },
    set panOnDrag(H) {
      We(H), y();
    },
    get selectionOnDrag() {
      return ee();
    },
    set selectionOnDrag(H) {
      ee(H), y();
    },
    get autoPanOnConnect() {
      return Re();
    },
    set autoPanOnConnect(H) {
      Re(H), y();
    },
    get autoPanOnNodeDrag() {
      return Pe();
    },
    set autoPanOnNodeDrag(H) {
      Pe(H), y();
    },
    get onerror() {
      return Oe();
    },
    set onerror(H) {
      Oe(H), y();
    },
    get ondelete() {
      return ot();
    },
    set ondelete(H) {
      ot(H), y();
    },
    get onedgecreate() {
      return Le();
    },
    set onedgecreate(H) {
      Le(H), y();
    },
    get attributionPosition() {
      return tt();
    },
    set attributionPosition(H) {
      tt(H), y();
    },
    get proOptions() {
      return Ge();
    },
    set proOptions(H) {
      Ge(H), y();
    },
    get defaultEdgeOptions() {
      return wt();
    },
    set defaultEdgeOptions(H) {
      wt(H), y();
    },
    get width() {
      return ct();
    },
    set width(H) {
      ct(H), y();
    },
    get height() {
      return J();
    },
    set height(H) {
      J(H), y();
    },
    get colorMode() {
      return Se();
    },
    set colorMode(H) {
      Se(H), y();
    },
    get onconnect() {
      return ne();
    },
    set onconnect(H) {
      ne(H), y();
    },
    get onconnectstart() {
      return gn();
    },
    set onconnectstart(H) {
      gn(H), y();
    },
    get onconnectend() {
      return Bt();
    },
    set onconnectend(H) {
      Bt(H), y();
    },
    get onbeforedelete() {
      return Ce();
    },
    set onbeforedelete(H) {
      Ce(H), y();
    },
    get oninit() {
      return nt();
    },
    set oninit(H) {
      nt(H), y();
    },
    get nodeOrigin() {
      return pe();
    },
    set nodeOrigin(H) {
      pe(H), y();
    },
    get paneClickDistance() {
      return Te();
    },
    set paneClickDistance(H) {
      Te(H), y();
    },
    get nodeClickDistance() {
      return et();
    },
    set nodeClickDistance(H) {
      et(H), y();
    },
    get defaultMarkerColor() {
      return Dt();
    },
    set defaultMarkerColor(H) {
      Dt(H), y();
    },
    get style() {
      return lr();
    },
    set style(H) {
      lr(H), y();
    },
    get class() {
      return Xr();
    },
    set class(H) {
      Xr(H), y();
    }
  });
  return s(), Wd;
}
ie(
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
function qc(e, t) {
  ce(t, !1);
  let n = w(t, "initialNodes", 12, void 0), r = w(t, "initialEdges", 12, void 0), o = w(t, "initialWidth", 12, void 0), i = w(t, "initialHeight", 12, void 0), s = w(t, "fitView", 12, void 0), a = w(t, "nodeOrigin", 12, void 0);
  const l = Tc({
    nodes: n(),
    edges: r(),
    width: o(),
    height: i(),
    nodeOrigin: a(),
    fitView: s()
  });
  Er(Ri, { getStore: () => l }), js(() => {
    l.reset();
  }), Ne();
  var u = Ze(), c = we(u);
  return ft(c, t, "default", {}), V(e, u), de({
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
  qc,
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
var Fp = /* @__PURE__ */ se("<button><!></button>");
function Jr(e, t) {
  const n = Ue(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = Ue(n, [
    "class",
    "bgColor",
    "bgColorHover",
    "color",
    "colorHover",
    "borderColor"
  ]);
  ce(t, !1);
  let o = w(t, "class", 12, void 0), i = w(t, "bgColor", 12, void 0), s = w(t, "bgColorHover", 12, void 0), a = w(t, "color", 12, void 0), l = w(t, "colorHover", 12, void 0), u = w(t, "borderColor", 12, void 0);
  Ne();
  var c = Fp();
  let f;
  var d = Q(c);
  return ft(d, t, "default", { class: "button-svg" }), G(c), _e(
    (g) => {
      f = qt(c, f, { type: "button", class: g, ...r }), Qe(c, "--xy-controls-button-background-color-props", i()), Qe(c, "--xy-controls-button-background-color-hover-props", s()), Qe(c, "--xy-controls-button-color-props", a()), Qe(c, "--xy-controls-button-color-hover-props", l()), Qe(c, "--xy-controls-button-border-color-props", u());
    },
    [
      () => yt([
        "svelte-flow__controls-button",
        o()
      ])
    ],
    ge
  ), Ke("click", c, function(g) {
    De.call(this, t, g);
  }), V(e, c), de({
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
  Jr,
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
var Zp = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function Gc(e) {
  var t = Zp();
  V(e, t);
}
ie(Gc, {}, [], [], !0);
var qp = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Uc(e) {
  var t = qp();
  V(e, t);
}
ie(Uc, {}, [], [], !0);
var Gp = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function jc(e) {
  var t = Gp();
  V(e, t);
}
ie(jc, {}, [], [], !0);
var Up = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Jc(e) {
  var t = Up();
  V(e, t);
}
ie(Jc, {}, [], [], !0);
var jp = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function Qc(e) {
  var t = jp();
  V(e, t);
}
ie(Qc, {}, [], [], !0);
var Jp = /* @__PURE__ */ se("<!> <!>", 1), Qp = /* @__PURE__ */ se("<!> <!> <!> <!> <!> <!>", 1);
function ed(e, t) {
  ce(t, !1);
  const [n, r] = qe(), o = () => Z(T, "$nodesDraggable", n), i = () => Z(D, "$nodesConnectable", n), s = () => Z(B, "$elementsSelectable", n), a = () => Z(M, "$viewport", n), l = () => Z(_, "$minZoom", n), u = () => Z(N, "$maxZoom", n), c = te(), f = te(), d = te(), g = te();
  let v = w(t, "position", 12, "bottom-left"), x = w(t, "showZoom", 12, !0), C = w(t, "showFitView", 12, !0), S = w(t, "showLock", 12, !0), p = w(t, "buttonBgColor", 12, void 0), b = w(t, "buttonBgColorHover", 12, void 0), m = w(t, "buttonColor", 12, void 0), k = w(t, "buttonColorHover", 12, void 0), $ = w(t, "buttonBorderColor", 12, void 0), P = w(t, "ariaLabel", 12, void 0), A = w(t, "style", 12, void 0), L = w(t, "orientation", 12, "vertical"), O = w(t, "fitViewOptions", 12, void 0), z = w(t, "class", 12, "");
  const {
    zoomIn: I,
    zoomOut: R,
    fitView: E,
    viewport: M,
    minZoom: _,
    maxZoom: N,
    nodesDraggable: T,
    nodesConnectable: D,
    elementsSelectable: B
  } = Ye(), W = {
    bgColor: p(),
    bgColorHover: b(),
    color: m(),
    colorHover: k(),
    borderColor: $()
  }, q = () => {
    I();
  }, fe = () => {
    R();
  }, j = () => {
    E(O());
  }, Y = () => {
    F(c, !h(c)), T.set(h(c)), D.set(h(c)), B.set(h(c));
  };
  oe(
    () => (o(), i(), s()),
    () => {
      F(c, o() || i() || s());
    }
  ), oe(() => (a(), l()), () => {
    F(f, a().zoom <= l());
  }), oe(() => (a(), u()), () => {
    F(d, a().zoom >= u());
  }), oe(() => K(L()), () => {
    F(g, L() === "horizontal" ? "horizontal" : "vertical");
  }), ut(), Ne();
  const he = /* @__PURE__ */ ge(() => yt([
    "svelte-flow__controls",
    h(g),
    z()
  ])), xe = /* @__PURE__ */ ge(() => P() ?? "Svelte Flow controls");
  Bi(e, {
    get class() {
      return h(he);
    },
    get position() {
      return v();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return h(xe);
    },
    get style() {
      return A();
    },
    children: (ue, le) => {
      var ae = Qp(), ke = we(ae);
      ft(ke, t, "before", {});
      var Xe = U(ke, 2);
      {
        var He = (Le) => {
          var tt = Jp(), Ge = we(tt);
          Jr(Ge, Vt(
            {
              class: "svelte-flow__controls-zoomin",
              title: "zoom in",
              "aria-label": "zoom in",
              get disabled() {
                return h(d);
              }
            },
            W,
            {
              $$events: { click: q },
              children: (ct, J) => {
                Gc(ct);
              },
              $$slots: { default: !0 }
            }
          ));
          var wt = U(Ge, 2);
          Jr(wt, Vt(
            {
              class: "svelte-flow__controls-zoomout",
              title: "zoom out",
              "aria-label": "zoom out",
              get disabled() {
                return h(f);
              }
            },
            W,
            {
              $$events: { click: fe },
              children: (ct, J) => {
                Uc(ct);
              },
              $$slots: { default: !0 }
            }
          )), V(Le, tt);
        };
        Ee(Xe, (Le) => {
          x() && Le(He);
        });
      }
      var We = U(Xe, 2);
      {
        var ee = (Le) => {
          Jr(Le, Vt(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            W,
            {
              $$events: { click: j },
              children: (tt, Ge) => {
                jc(tt);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        Ee(We, (Le) => {
          C() && Le(ee);
        });
      }
      var Re = U(We, 2);
      {
        var Pe = (Le) => {
          Jr(Le, Vt(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            W,
            {
              $$events: { click: Y },
              children: (tt, Ge) => {
                var wt = Ze(), ct = we(wt);
                {
                  var J = (ne) => {
                    Qc(ne);
                  }, Se = (ne) => {
                    Jc(ne);
                  };
                  Ee(ct, (ne) => {
                    h(c) ? ne(J) : ne(Se, !1);
                  });
                }
                V(tt, wt);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        Ee(Re, (Le) => {
          S() && Le(Pe);
        });
      }
      var Oe = U(Re, 2);
      ft(Oe, t, "default", {});
      var ot = U(Oe, 2);
      ft(ot, t, "after", {}), V(ue, ae);
    },
    $$slots: { default: !0 }
  });
  var be = de({
    get position() {
      return v();
    },
    set position(ue) {
      v(ue), y();
    },
    get showZoom() {
      return x();
    },
    set showZoom(ue) {
      x(ue), y();
    },
    get showFitView() {
      return C();
    },
    set showFitView(ue) {
      C(ue), y();
    },
    get showLock() {
      return S();
    },
    set showLock(ue) {
      S(ue), y();
    },
    get buttonBgColor() {
      return p();
    },
    set buttonBgColor(ue) {
      p(ue), y();
    },
    get buttonBgColorHover() {
      return b();
    },
    set buttonBgColorHover(ue) {
      b(ue), y();
    },
    get buttonColor() {
      return m();
    },
    set buttonColor(ue) {
      m(ue), y();
    },
    get buttonColorHover() {
      return k();
    },
    set buttonColorHover(ue) {
      k(ue), y();
    },
    get buttonBorderColor() {
      return $();
    },
    set buttonBorderColor(ue) {
      $(ue), y();
    },
    get ariaLabel() {
      return P();
    },
    set ariaLabel(ue) {
      P(ue), y();
    },
    get style() {
      return A();
    },
    set style(ue) {
      A(ue), y();
    },
    get orientation() {
      return L();
    },
    set orientation(ue) {
      L(ue), y();
    },
    get fitViewOptions() {
      return O();
    },
    set fitViewOptions(ue) {
      O(ue), y();
    },
    get class() {
      return z();
    },
    set class(ue) {
      z(ue), y();
    }
  });
  return r(), be;
}
ie(
  ed,
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
var In;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(In || (In = {}));
var em = /* @__PURE__ */ $e("<circle></circle>");
function td(e, t) {
  ce(t, !1);
  let n = w(t, "radius", 12, 5), r = w(t, "class", 12, "");
  Ne();
  var o = em();
  return _e(
    (i) => {
      re(o, "cx", n()), re(o, "cy", n()), re(o, "r", n()), ir(o, cn(i));
    },
    [
      () => yt([
        "svelte-flow__background-pattern",
        "dots",
        r()
      ])
    ],
    ge
  ), V(e, o), de({
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
ie(td, { radius: {}, class: {} }, [], [], !0);
var tm = /* @__PURE__ */ $e("<path></path>");
function nd(e, t) {
  ce(t, !1);
  let n = w(t, "lineWidth", 12, 1), r = w(t, "dimensions", 12), o = w(t, "variant", 12, void 0), i = w(t, "class", 12, "");
  Ne();
  var s = tm();
  return _e(
    (a) => {
      re(s, "stroke-width", n()), re(s, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), ir(s, cn(a));
    },
    [
      () => yt([
        "svelte-flow__background-pattern",
        o(),
        i()
      ])
    ],
    ge
  ), V(e, s), de({
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
  nd,
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
const nm = {
  [In.Dots]: 1,
  [In.Lines]: 1,
  [In.Cross]: 6
};
var rm = /* @__PURE__ */ $e('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const om = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function rd(e, t) {
  ce(t, !1), rt(e, om);
  const [n, r] = qe(), o = () => Z(k, "$flowId", n), i = () => Z(m, "$viewport", n), s = te(), a = te(), l = te(), u = te(), c = te();
  let f = w(t, "id", 12, void 0), d = w(t, "variant", 28, () => In.Dots), g = w(t, "gap", 12, 20), v = w(t, "size", 12, 1), x = w(t, "lineWidth", 12, 1), C = w(t, "bgColor", 12, void 0), S = w(t, "patternColor", 12, void 0), p = w(t, "patternClass", 12, void 0), b = w(t, "class", 12, "");
  const { viewport: m, flowId: k } = Ye(), $ = v() || nm[d()], P = d() === In.Dots, A = d() === In.Cross, L = Array.isArray(g()) ? g() : [g(), g()];
  oe(
    () => (o(), K(f())),
    () => {
      F(s, `background-pattern-${o()}-${f() ? f() : ""}`);
    }
  ), oe(() => i(), () => {
    F(a, [
      L[0] * i().zoom || 1,
      L[1] * i().zoom || 1
    ]);
  }), oe(() => i(), () => {
    F(l, $ * i().zoom);
  }), oe(() => (h(l), h(a)), () => {
    F(u, A ? [h(l), h(l)] : h(a));
  }), oe(
    () => (h(l), h(u)),
    () => {
      F(c, P ? [
        h(l) / 2,
        h(l) / 2
      ] : [
        h(u)[0] / 2,
        h(u)[1] / 2
      ]);
    }
  ), ut(), Ne();
  var O = rm(), z = Q(O), I = Q(z);
  {
    var R = (N) => {
      const T = /* @__PURE__ */ ge(() => h(l) / 2);
      td(N, {
        get radius() {
          return h(T);
        },
        get class() {
          return p();
        }
      });
    }, E = (N) => {
      nd(N, {
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
          return p();
        }
      });
    };
    Ee(I, (N) => {
      P ? N(R) : N(E, !1);
    });
  }
  G(z);
  var M = U(z);
  G(O), _e(
    (N) => {
      ir(O, cn(N), "svelte-1r7pe8d"), Qe(O, "--xy-background-color-props", C()), Qe(O, "--xy-background-pattern-color-props", S()), re(z, "id", h(s)), re(z, "x", i().x % h(a)[0]), re(z, "y", i().y % h(a)[1]), re(z, "width", h(a)[0]), re(z, "height", h(a)[1]), re(z, "patternTransform", `translate(-${h(c)[0]},-${h(c)[1]})`), re(M, "fill", `url(#${h(s)})`);
    },
    [
      () => yt(["svelte-flow__background", b()])
    ],
    ge
  ), V(e, O);
  var _ = de({
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
      return C();
    },
    set bgColor(N) {
      C(N), y();
    },
    get patternColor() {
      return S();
    },
    set patternColor(N) {
      S(N), y();
    },
    get patternClass() {
      return p();
    },
    set patternClass(N) {
      p(N), y();
    },
    get class() {
      return b();
    },
    set class(N) {
      b(N), y();
    }
  });
  return r(), _;
}
ie(
  rd,
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
var im = /* @__PURE__ */ $e("<rect></rect>");
function od(e, t) {
  ce(t, !1);
  let n = w(t, "x", 12), r = w(t, "y", 12), o = w(t, "width", 12, 0), i = w(t, "height", 12, 0), s = w(t, "borderRadius", 12, 5), a = w(t, "color", 12, void 0), l = w(t, "shapeRendering", 12), u = w(t, "strokeColor", 12, void 0), c = w(t, "strokeWidth", 12, 2), f = w(t, "selected", 12, !1), d = w(t, "class", 12, "");
  Ne();
  var g = im();
  return _e(
    (v) => {
      ir(g, cn(v)), re(g, "x", n()), re(g, "y", r()), re(g, "rx", s()), re(g, "ry", s()), re(g, "width", o()), re(g, "height", i()), re(g, "style", `${a() ? `fill: ${a()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), re(g, "shape-rendering", l()), je(g, "selected", f());
    },
    [
      () => yt(["svelte-flow__minimap-node", d()])
    ],
    ge
  ), V(e, g), de({
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
  od,
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
function os(e, t) {
  const n = X0({
    domNode: e,
    panZoom: t.panZoom,
    getTransform: () => {
      const o = X(t.viewport);
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
const is = (e) => e instanceof Function ? e : () => e;
var sm = /* @__PURE__ */ $e("<title> </title>"), am = /* @__PURE__ */ $e('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function id(e, t) {
  ce(t, !1);
  const [n, r] = qe(), o = () => Z(We, "$flowId", n), i = () => Z(ke, "$viewport", n), s = () => Z(Xe, "$containerWidth", n), a = () => Z(He, "$containerHeight", n), l = () => Z(ae, "$nodeLookup", n), u = () => Z(le, "$nodes", n), c = () => Z(ee, "$panZoom", n), f = () => Z(Re, "$translateExtent", n), d = te(), g = te(), v = te(), x = te(), C = te(), S = te(), p = te(), b = te(), m = te(), k = te(), $ = te(), P = te(), A = te();
  let L = w(t, "position", 12, "bottom-right"), O = w(t, "ariaLabel", 12, "Mini map"), z = w(t, "nodeStrokeColor", 12, "transparent"), I = w(t, "nodeColor", 12, void 0), R = w(t, "nodeClass", 12, ""), E = w(t, "nodeBorderRadius", 12, 5), M = w(t, "nodeStrokeWidth", 12, 2), _ = w(t, "bgColor", 12, void 0), N = w(t, "maskColor", 12, void 0), T = w(t, "maskStrokeColor", 12, void 0), D = w(t, "maskStrokeWidth", 12, void 0), B = w(t, "width", 12, void 0), W = w(t, "height", 12, void 0), q = w(t, "pannable", 12, !0), fe = w(t, "zoomable", 12, !0), j = w(t, "inversePan", 12, void 0), Y = w(t, "zoomStep", 12, void 0), he = w(t, "style", 12, ""), xe = w(t, "class", 12, "");
  const be = 200, ue = 150, {
    nodes: le,
    nodeLookup: ae,
    viewport: ke,
    width: Xe,
    height: He,
    flowId: We,
    panZoom: ee,
    translateExtent: Re
  } = Ye(), Pe = I() === void 0 ? void 0 : is(I()), Oe = is(z()), ot = is(R()), Le = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), tt = `svelte-flow__minimap-desc-${o()}`;
  let Ge = te(h(d));
  const wt = () => h(S);
  oe(
    () => (i(), s(), a()),
    () => {
      F(d, {
        x: -i().x / i().zoom,
        y: -i().y / i().zoom,
        width: s() / i().zoom,
        height: a() / i().zoom
      });
    }
  ), oe(
    () => (l(), h(d), u()),
    () => {
      F(Ge, l().size > 0 ? rc(ko(l()), h(d)) : h(d)), u();
    }
  ), oe(() => K(B()), () => {
    F(g, B() ?? be);
  }), oe(() => K(W()), () => {
    F(v, W() ?? ue);
  }), oe(
    () => (h(Ge), h(g)),
    () => {
      F(x, h(Ge).width / h(g));
    }
  ), oe(
    () => (h(Ge), h(v)),
    () => {
      F(C, h(Ge).height / h(v));
    }
  ), oe(
    () => (h(x), h(C)),
    () => {
      F(S, Math.max(h(x), h(C)));
    }
  ), oe(() => (h(S), h(g)), () => {
    F(p, h(S) * h(g));
  }), oe(
    () => (h(S), h(v)),
    () => {
      F(b, h(S) * h(v));
    }
  ), oe(() => h(S), () => {
    F(m, 5 * h(S));
  }), oe(
    () => (h(Ge), h(p), h(m)),
    () => {
      F(k, h(Ge).x - (h(p) - h(Ge).width) / 2 - h(m));
    }
  ), oe(
    () => (h(Ge), h(b), h(m)),
    () => {
      F($, h(Ge).y - (h(b) - h(Ge).height) / 2 - h(m));
    }
  ), oe(() => (h(p), h(m)), () => {
    F(P, h(p) + h(m) * 2);
  }), oe(() => (h(b), h(m)), () => {
    F(A, h(b) + h(m) * 2);
  }), ut(), Ne();
  const ct = /* @__PURE__ */ ge(() => he() + (_() ? `;--xy-minimap-background-color-props:${_()}` : "")), J = /* @__PURE__ */ ge(() => yt(["svelte-flow__minimap", xe()]));
  Bi(e, {
    get position() {
      return L();
    },
    get style() {
      return h(ct);
    },
    get class() {
      return h(J);
    },
    "data-testid": "svelte-flow__minimap",
    children: (ne, gn) => {
      var Bt = Ze(), Ce = we(Bt);
      {
        var nt = (pe) => {
          var Te = am();
          re(Te, "aria-labelledby", tt);
          var et = Q(Te);
          {
            var Dt = (St) => {
              var _t = sm();
              re(_t, "id", tt);
              var Jt = Q(_t, !0);
              G(_t), _e(() => un(Jt, O())), V(St, _t);
            };
            Ee(et, (St) => {
              O() && St(Dt);
            });
          }
          var lr = U(et);
          At(lr, 1, u, (St) => St.id, (St, _t) => {
            var Jt = Ze();
            const Yt = /* @__PURE__ */ ge(() => l().get(h(_t).id));
            var it = we(Jt);
            {
              var Zi = (Kn) => {
                const Xt = /* @__PURE__ */ ge(() => Xn(h(Yt))), To = /* @__PURE__ */ ge(() => Pe == null ? void 0 : Pe(h(Yt))), Ao = /* @__PURE__ */ ge(() => Oe(h(Yt))), Oo = /* @__PURE__ */ ge(() => ot(h(Yt)));
                od(Kn, Vt(
                  {
                    get x() {
                      return h(Yt).internals.positionAbsolute.x;
                    },
                    get y() {
                      return h(Yt).internals.positionAbsolute.y;
                    }
                  },
                  () => h(Xt),
                  {
                    get selected() {
                      return h(Yt).selected;
                    },
                    get color() {
                      return h(To);
                    },
                    get borderRadius() {
                      return E();
                    },
                    get strokeColor() {
                      return h(Ao);
                    },
                    get strokeWidth() {
                      return M();
                    },
                    shapeRendering: Le,
                    get class() {
                      return h(Oo);
                    }
                  }
                ));
              };
              Ee(it, (Kn) => {
                h(Yt) && sc(h(Yt)) && Kn(Zi);
              });
            }
            V(St, Jt);
          });
          var Xr = U(lr);
          G(Te), dt(Te, (St, _t) => os == null ? void 0 : os(St, _t), () => ({
            panZoom: c(),
            viewport: ke,
            getViewScale: wt,
            translateExtent: f(),
            width: s(),
            height: a(),
            inversePan: j(),
            zoomStep: Y(),
            pannable: q(),
            zoomable: fe()
          })), _e(() => {
            re(Te, "width", h(g)), re(Te, "height", h(v)), re(Te, "viewBox", `${h(k) ?? ""} ${h($) ?? ""} ${h(P) ?? ""} ${h(A) ?? ""}`), Qe(Te, "--xy-minimap-mask-background-color-props", N()), Qe(Te, "--xy-minimap-mask-stroke-color-props", T()), Qe(Te, "--xy-minimap-mask-stroke-width-props", D() ? D() * h(S) : void 0), re(Xr, "d", `M${h(k) - h(m)},${h($) - h(m)}h${h(P) + h(m) * 2}v${h(A) + h(m) * 2}h${-h(P) - h(m) * 2}z
      M${h(d).x ?? ""},${h(d).y ?? ""}h${h(d).width ?? ""}v${h(d).height ?? ""}h${-h(d).width}z`);
          }), V(pe, Te);
        };
        Ee(Ce, (pe) => {
          c() && pe(nt);
        });
      }
      V(ne, Bt);
    },
    $$slots: { default: !0 }
  });
  var Se = de({
    get position() {
      return L();
    },
    set position(ne) {
      L(ne), y();
    },
    get ariaLabel() {
      return O();
    },
    set ariaLabel(ne) {
      O(ne), y();
    },
    get nodeStrokeColor() {
      return z();
    },
    set nodeStrokeColor(ne) {
      z(ne), y();
    },
    get nodeColor() {
      return I();
    },
    set nodeColor(ne) {
      I(ne), y();
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
      return _();
    },
    set bgColor(ne) {
      _(ne), y();
    },
    get maskColor() {
      return N();
    },
    set maskColor(ne) {
      N(ne), y();
    },
    get maskStrokeColor() {
      return T();
    },
    set maskStrokeColor(ne) {
      T(ne), y();
    },
    get maskStrokeWidth() {
      return D();
    },
    set maskStrokeWidth(ne) {
      D(ne), y();
    },
    get width() {
      return B();
    },
    set width(ne) {
      B(ne), y();
    },
    get height() {
      return W();
    },
    set height(ne) {
      W(ne), y();
    },
    get pannable() {
      return q();
    },
    set pannable(ne) {
      q(ne), y();
    },
    get zoomable() {
      return fe();
    },
    set zoomable(ne) {
      fe(ne), y();
    },
    get inversePan() {
      return j();
    },
    set inversePan(ne) {
      j(ne), y();
    },
    get zoomStep() {
      return Y();
    },
    set zoomStep(ne) {
      Y(ne), y();
    },
    get style() {
      return he();
    },
    set style(ne) {
      he(ne), y();
    },
    get class() {
      return xe();
    },
    set class(ne) {
      xe(ne), y();
    }
  });
  return r(), Se;
}
ie(
  id,
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
const Sl = (e) => l0(e);
function Wn() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: s, height: a, minZoom: l, maxZoom: u, panZoom: c, nodes: f, edges: d, domNode: g, nodeLookup: v, nodeOrigin: x, edgeLookup: C, connectionLookup: S } = Ye(), p = (k) => {
    var O, z;
    const $ = X(v), P = Sl(k) ? k : $.get(k.id), A = P.parentId ? d0(P.position, P.measured, P.parentId, $, X(x)) : P.position, L = {
      ...P,
      position: A,
      width: ((O = P.measured) == null ? void 0 : O.width) ?? P.width,
      height: ((z = P.measured) == null ? void 0 : z.height) ?? P.height
    };
    return Tr(L);
  }, b = (k, $, P = { replace: !1 }) => {
    var O;
    const A = (O = X(v).get(k)) == null ? void 0 : O.internals.userNode;
    if (!A)
      return;
    const L = typeof $ == "function" ? $(A) : $;
    P.replace ? f.update((z) => z.map((I) => I.id === k ? Sl(L) ? L : { ...I, ...L } : I)) : (Object.assign(A, L), f.update((z) => z));
  }, m = (k) => X(v).get(k);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: m,
    getNode: (k) => {
      var $;
      return ($ = m(k)) == null ? void 0 : $.internals.userNode;
    },
    getNodes: (k) => k === void 0 ? X(f) : Nl(X(v), k),
    getEdge: (k) => X(C).get(k),
    getEdges: (k) => k === void 0 ? X(d) : Nl(X(C), k),
    setZoom: (k, $) => {
      const P = X(c);
      return P ? P.scaleTo(k, { duration: $ == null ? void 0 : $.duration }) : Promise.resolve(!1);
    },
    getZoom: () => X(i).zoom,
    setViewport: async (k, $) => {
      const P = X(i), A = X(c);
      return A ? (await A.setViewport({
        x: k.x ?? P.x,
        y: k.y ?? P.y,
        zoom: k.zoom ?? P.zoom
      }, { duration: $ == null ? void 0 : $.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => X(i),
    setCenter: async (k, $, P) => {
      const A = typeof (P == null ? void 0 : P.zoom) < "u" ? P.zoom : X(u), L = X(c);
      return L ? (await L.setViewport({
        x: X(s) / 2 - k * A,
        y: X(a) / 2 - $ * A,
        zoom: A
      }, { duration: P == null ? void 0 : P.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (k, $) => {
      const P = X(c);
      if (!P)
        return Promise.resolve(!1);
      const A = aa(k, X(s), X(a), X(l), X(u), ($ == null ? void 0 : $.padding) ?? 0.1);
      return await P.setViewport(A, { duration: $ == null ? void 0 : $.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (k, $ = !0, P) => {
      const A = cl(k), L = A ? k : p(k);
      return L ? (P || X(f)).filter((O) => {
        const z = X(v).get(O.id);
        if (!z || !A && O.id === k.id)
          return !1;
        const I = Tr(z), R = co(I, L);
        return $ && R > 0 || R >= L.width * L.height;
      }) : [];
    },
    isNodeIntersecting: (k, $, P = !0) => {
      const L = cl(k) ? k : p(k);
      if (!L)
        return !1;
      const O = co(L, $);
      return P && O > 0 || O >= L.width * L.height;
    },
    deleteElements: async ({ nodes: k = [], edges: $ = [] }) => {
      const { nodes: P, edges: A } = await ec({
        nodesToRemove: k,
        edgesToRemove: $,
        nodes: X(f),
        edges: X(d),
        onBeforeDelete: X(r)
      });
      return P && f.update((L) => L.filter((O) => !P.some(({ id: z }) => z === O.id))), A && d.update((L) => L.filter((O) => !A.some(({ id: z }) => z === O.id))), {
        deletedNodes: P,
        deletedEdges: A
      };
    },
    screenToFlowPosition: (k, $ = { snapToGrid: !0 }) => {
      const P = X(g);
      if (!P)
        return k;
      const A = $.snapToGrid ? X(o) : !1, { x: L, y: O, zoom: z } = X(i), { x: I, y: R } = P.getBoundingClientRect(), E = {
        x: k.x - I,
        y: k.y - R
      };
      return Eo(E, [L, O, z], A !== null, A || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (k) => {
      const $ = X(g);
      if (!$)
        return k;
      const { x: P, y: A, zoom: L } = X(i), { x: O, y: z } = $.getBoundingClientRect(), I = ic(k, [P, A, L]);
      return {
        x: I.x + O,
        y: I.y + z
      };
    },
    toObject: () => ({
      nodes: X(f).map((k) => ({
        ...k,
        // we want to make sure that changes to the nodes object that gets returned by toObject
        // do not affect the nodes object
        position: { ...k.position },
        data: { ...k.data }
      })),
      edges: X(d).map((k) => ({ ...k })),
      viewport: { ...X(i) }
    }),
    updateNode: b,
    updateNodeData: (k, $, P) => {
      var O;
      const A = (O = X(v).get(k)) == null ? void 0 : O.internals.userNode;
      if (!A)
        return;
      const L = typeof $ == "function" ? $(A) : $;
      A.data = P != null && P.replace ? L : { ...A.data, ...L }, f.update((z) => z);
    },
    getNodesBounds: (k) => {
      const $ = X(v), P = X(x);
      return u0(k, { nodeLookup: $, nodeOrigin: P });
    },
    getHandleConnections: ({ type: k, id: $, nodeId: P }) => {
      var A;
      return Array.from(((A = X(S).get(`${P}-${k}-${$ ?? null}`)) == null ? void 0 : A.values()) ?? []);
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
var lm = /* @__PURE__ */ se('<div class="svelte-flow__node-toolbar"><!></div>');
function sd(e, t) {
  ce(t, !1);
  const [n, r] = qe(), o = () => Z(b, "$nodes", n), i = () => Z(p, "$nodeLookup", n), s = () => Z(S, "$viewport", n), a = () => Z(C, "$domNode", n), l = te(), u = te(), c = te();
  let f = w(t, "nodeId", 12, void 0), d = w(t, "position", 12, void 0), g = w(t, "align", 12, void 0), v = w(t, "offset", 12, void 0), x = w(t, "isVisible", 12, void 0);
  const { domNode: C, viewport: S, nodeLookup: p, nodes: b } = Ye(), { getNodesBounds: m } = Wn(), k = Un("svelteflow__node_id");
  let $ = te(), P = te([]), A = v() !== void 0 ? v() : 10, L = d() !== void 0 ? d() : ye.Top, O = g() !== void 0 ? g() : "center";
  oe(
    () => (o(), K(f()), i()),
    () => {
      o();
      const M = Array.isArray(f()) ? f() : [f() || k];
      F(P, M.reduce(
        (_, N) => {
          const T = i().get(N);
          return T && _.push(T), _;
        },
        []
      ));
    }
  ), oe(
    () => (h(P), s()),
    () => {
      const M = m(h(P));
      M && F($, S0(M, s(), L, A, O));
    }
  ), oe(() => h(P), () => {
    F(l, h(P).length === 0 ? 1 : Math.max(...h(P).map((M) => (M.internals.z || 5) + 1)));
  }), oe(() => o(), () => {
    F(u, o().filter((M) => M.selected).length);
  }), oe(
    () => (K(x()), h(P), h(u)),
    () => {
      F(c, typeof x() == "boolean" ? x() : h(P).length === 1 && h(P)[0].selected && h(u) === 1);
    }
  ), ut(), Ne();
  var z = Ze(), I = we(z);
  {
    var R = (M) => {
      var _ = lm(), N = Q(_);
      ft(N, t, "default", {}), G(_), dt(_, (T, D) => yr == null ? void 0 : yr(T, D), () => ({ domNode: a() })), _e(
        (T) => {
          re(_, "data-id", T), Qe(_, "position", "absolute"), Qe(_, "transform", h($)), Qe(_, "z-index", h(l));
        },
        [
          () => h(P).reduce((T, D) => `${T}${D.id} `, "").trim()
        ],
        ge
      ), V(M, _);
    };
    Ee(I, (M) => {
      a() && h(c) && h(P) && M(R);
    });
  }
  V(e, z);
  var E = de({
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
      return x();
    },
    set isVisible(M) {
      x(M), y();
    }
  });
  return r(), E;
}
ie(
  sd,
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
function ar(e) {
  const { nodes: t, nodeLookup: n } = Ye();
  let r = [], o = !0;
  return Hn([t, n], ([, i], s) => {
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
    (!D0(a, r) || o) && (r = a, s(l ? a : a[0] ?? null), o = !1);
  });
}
const um = "tinyflow-component";
class Cy {
  constructor(t) {
    ht(this, "options");
    ht(this, "rootEl");
    ht(this, "svelteFlowInstance");
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
    const t = document.createElement(um);
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
}
const cm = () => {
  const e = ve([]), t = ve([]), n = ve({ x: 250, y: 100, zoom: 1 });
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
}, qo = cm();
var dm = /* @__PURE__ */ se("<button><!></button>");
function lt(e, t) {
  ce(t, !0);
  const n = w(t, "children", 7), r = /* @__PURE__ */ Mn(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = dm();
  let i;
  var s = Q(o);
  return Sr(s, () => n() ?? st), G(o), _e(() => i = qt(o, i, {
    type: "button",
    ...r,
    class: `tf-btn nopan nodrag ${t.class ?? ""}`
  })), V(e, o), de({
    get children() {
      return n();
    },
    set children(a) {
      n(a), y();
    }
  });
}
ie(lt, { children: {} }, [], [], !0);
var fm = /* @__PURE__ */ se("<input>");
function ad(e, t) {
  ce(t, !0);
  const n = /* @__PURE__ */ Mn(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = fm();
  wu(r);
  let o;
  _e(() => o = qt(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), V(e, r), de();
}
ie(ad, {}, [], [], !0);
var gm = /* @__PURE__ */ se("<input>");
function go(e, t) {
  ce(t, !0);
  const n = /* @__PURE__ */ Mn(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = gm();
  wu(r);
  let o;
  _e(() => o = qt(r, o, {
    type: "text",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), V(e, r), de();
}
ie(go, {}, [], [], !0);
var hm = /* @__PURE__ */ se("<textarea></textarea>");
function Sn(e, t) {
  ce(t, !0);
  const n = /* @__PURE__ */ Mn(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = hm();
  ig(r);
  let o;
  _e(() => o = qt(r, o, {
    ...n,
    class: `tf-textarea nodrag ${t.class ?? ""}`
  })), V(e, r), de();
}
ie(Sn, {}, [], [], !0);
var vm = /* @__PURE__ */ se('<div role="button"><!></div>'), pm = /* @__PURE__ */ se("<div></div>");
function ld(e, t) {
  const n = Ue(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = Ue(n, ["items", "onChange", "activeIndex"]);
  ce(t, !1);
  let o = w(t, "items", 28, () => []), i = w(t, "onChange", 12, () => {
  }), s = w(t, "activeIndex", 12, 0);
  function a(c, f) {
    var d;
    s(f), (d = i()) == null || d(c, f);
  }
  Ne();
  var l = pm();
  let u;
  return At(l, 5, o, $i, (c, f, d) => {
    var g = vm();
    re(g, "tabindex", d), g.__click = () => a(h(f), d), g.__keydown = (S) => {
      (S.key === "Enter" || S.key === " ") && (S.preventDefault(), a(h(f), d));
    };
    var v = Q(g);
    {
      var x = (S) => {
        var p = $t();
        _e(() => un(p, h(f).label)), V(S, p);
      }, C = (S) => {
        var p = Ze(), b = we(p);
        Sr(b, () => h(f).label ?? st), V(S, p);
      };
      Ee(v, (S) => {
        typeof h(f).label == "string" ? S(x) : S(C, !1);
      });
    }
    G(g), _e(() => Nr(g, `tf-tabs-item ${(d === s() ? "active" : "") ?? ""}`)), V(c, g);
  }), G(l), _e(() => u = qt(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), V(e, l), de({
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
Mi(["click", "keydown"]);
ie(ld, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var mm = (e, t, n) => t(h(n)), ym = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(h(n)));
}, wm = /* @__PURE__ */ se('<div class="tf-collapse-item-description"><!></div>'), _m = /* @__PURE__ */ se('<div class="tf-collapse-item-content"><!></div>'), xm = /* @__PURE__ */ se('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><span class="tf-collapse-item-title-icon"><!></span> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), bm = /* @__PURE__ */ se("<div></div>");
const Cm = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function ud(e, t) {
  ce(t, !0), rt(e, Cm);
  let n = w(t, "items", 7), r = w(t, "onChange", 7), o = w(t, "activeKeys", 31, () => Qt([]));
  function i(a) {
    var l;
    o().includes(a.key) ? o(o().filter((u) => u !== a.key)) : (o().push(a.key), o(o())), (l = r()) == null || l(a, o());
  }
  var s = bm();
  return At(s, 21, n, $i, (a, l, u) => {
    var c = xm(), f = Q(c);
    re(f, "tabindex", u), f.__click = [mm, i, l], f.__keydown = [ym, i, l];
    var d = Q(f), g = Q(d);
    Ln(g, {
      get target() {
        return h(l).icon;
      }
    }), G(d);
    var v = U(d, 2);
    Ln(v, {
      get target() {
        return h(l).title;
      }
    });
    var x = U(v, 2);
    G(f);
    var C = U(f, 2);
    {
      var S = (m) => {
        var k = wm(), $ = Q(k);
        Ln($, {
          get target() {
            return h(l).description;
          }
        }), G(k), V(m, k);
      };
      Ee(C, (m) => {
        h(l).description && m(S);
      });
    }
    var p = U(C, 2);
    {
      var b = (m) => {
        var k = _m(), $ = Q(k);
        Ln($, {
          get target() {
            return h(l).content;
          }
        }), G(k), V(m, k);
      };
      Ee(p, (m) => {
        o().includes(h(l).key) && m(b);
      });
    }
    G(c), _e((m) => Nr(x, `tf-collapse-item-title-arrow ${m ?? ""} svelte-1jfktzw`), [
      () => o().includes(h(l).key) ? "rotate-90" : ""
    ]), V(a, c);
  }), G(s), _e(() => {
    re(s, "style", t.style), Nr(s, `tf-collapse ${t.class ?? ""} svelte-1jfktzw`);
  }), V(e, s), de({
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
Mi(["click", "keydown"]);
ie(ud, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Ln(e, t) {
  ce(t, !0);
  let n = w(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = Ze(), o = we(r);
  {
    var i = (a) => {
      var l = Ze(), u = we(l);
      Sr(u, () => n() ?? st), V(a, l);
    }, s = (a) => {
      var l = Ze(), u = we(l);
      pu(u, n), V(a, l);
    };
    Ee(o, (a) => {
      typeof n() == "function" ? a(i) : a(s, !1);
    });
  }
  return V(e, r), de({
    get target() {
      return n();
    },
    set target(a) {
      n(a), y();
    }
  });
}
ie(Ln, { target: {} }, [], [], !0);
var km = (e, t, n) => t(h(n)), Em = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), Sm = /* @__PURE__ */ se('<div class="tf-select-content-children"><!></div>'), Nm = /* @__PURE__ */ se('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), Pm = /* @__PURE__ */ se('<div class="tf-select-content nopan nodrag"><!></div>'), Mm = /* @__PURE__ */ se("<!> <!>", 1), $m = /* @__PURE__ */ se('<div class="tf-select-input-placeholder"> </div>'), Tm = /* @__PURE__ */ se('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), Am = /* @__PURE__ */ se("<div><!></div>");
function Or(e, t) {
  ce(t, !0);
  const n = (b, m = st) => {
    var k = Ze(), $ = we(k);
    At($, 19, m, (P, A) => `${A}_${P.value}`, (P, A) => {
      var L = Nm(), O = we(L);
      O.__click = [km, x, A];
      var z = Q(O), I = Q(z);
      {
        var R = (N) => {
          var T = Em();
          V(N, T);
        };
        Ee(I, (N) => {
          h(A).children && h(A).children.length > 0 && N(R);
        });
      }
      G(z);
      var E = U(z, 2);
      Ln(E, {
        get target() {
          return h(A).label;
        }
      }), G(O);
      var M = U(O, 2);
      {
        var _ = (N) => {
          var T = Sm(), D = Q(T);
          n(D, () => h(A).children), G(T), V(N, T);
        };
        Ee(M, (N) => {
          h(A).children && h(A).children.length > 0 && (l() || c().includes(h(A).value)) && N(_);
        });
      }
      V(P, L);
    }), V(b, k);
  };
  let r = w(t, "items", 7), o = w(t, "onExpand", 7), i = w(t, "onSelect", 7), s = w(t, "value", 23, () => []), a = w(t, "defaultValue", 23, () => []), l = w(t, "expandAll", 7, !0), u = w(t, "multiple", 7, !1), c = w(t, "expandValue", 23, () => []), f = w(t, "placeholder", 7), d = /* @__PURE__ */ Mn(t, [
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
  ]), g = /* @__PURE__ */ Fe(() => {
    const b = [], m = (k) => {
      for (let $ of k)
        s().length > 0 ? s().includes($.value) && b.push($) : a().includes($.value) && b.push($), $.children && $.children.length > 0 && m($.children);
    };
    return m(r()), b;
  }), v;
  function x(b) {
    var m, k;
    if (b.children && b.children.length > 0) {
      (m = o()) == null || m(b);
      return;
    } else
      v == null || v.hide(), (k = i()) == null || k(b);
  }
  var C = Am();
  let S;
  var p = Q(C);
  return kn(
    $o(p, {
      floating: (m) => {
        var k = Pm(), $ = Q(k);
        n($, r), G(k), V(m, k);
      },
      children: (m, k) => {
        var $ = Tm();
        let P;
        var A = Q($);
        At(
          A,
          23,
          () => h(g),
          (L, O) => `${O}_${L.value}`,
          (L, O, z) => {
            var I = Ze(), R = we(I);
            {
              var E = (_) => {
                var N = Ze(), T = we(N);
                {
                  var D = (B) => {
                    Ln(B, {
                      get target() {
                        return h(O).label;
                      }
                    });
                  };
                  Ee(T, (B) => {
                    h(z) === 0 && B(D);
                  });
                }
                V(_, N);
              }, M = (_) => {
                var N = Mm(), T = we(N);
                Ln(T, {
                  get target() {
                    return h(O).label;
                  }
                });
                var D = U(T, 2);
                {
                  var B = (W) => {
                    var q = $t(",");
                    V(W, q);
                  };
                  Ee(D, (W) => {
                    h(z) < h(g).length - 1 && W(B);
                  });
                }
                V(_, N);
              };
              Ee(R, (_) => {
                u() ? _(M, !1) : _(E);
              });
            }
            V(L, I);
          },
          (L) => {
            var O = $m(), z = Q(O, !0);
            G(O), _e(() => un(z, f())), V(L, O);
          }
        ), G(A), at(2), G($), _e(() => P = qt($, P, {
          class: "tf-select-input nopan nodrag",
          ...d
        })), V(m, $);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (m) => v = m,
    () => v
  ), G(C), _e(() => S = qt(C, S, {
    ...d,
    class: `tf-select ${d.class ?? ""}`
  })), V(e, C), de({
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
Mi(["click"]);
ie(
  Or,
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
const ho = Math.min, _r = Math.max, pi = Math.round, rn = (e) => ({
  x: e,
  y: e
}), Om = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Dm = {
  start: "end",
  end: "start"
};
function Os(e, t, n) {
  return _r(e, ho(t, n));
}
function No(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function tr(e) {
  return e.split("-")[0];
}
function Po(e) {
  return e.split("-")[1];
}
function cd(e) {
  return e === "x" ? "y" : "x";
}
function ga(e) {
  return e === "y" ? "height" : "width";
}
function Dr(e) {
  return ["top", "bottom"].includes(tr(e)) ? "y" : "x";
}
function ha(e) {
  return cd(Dr(e));
}
function Lm(e, t, n) {
  n === void 0 && (n = !1);
  const r = Po(e), o = ha(e), i = ga(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = mi(s)), [s, mi(s)];
}
function zm(e) {
  const t = mi(e);
  return [Ds(e), t, Ds(t)];
}
function Ds(e) {
  return e.replace(/start|end/g, (t) => Dm[t]);
}
function Hm(e, t, n) {
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
function Vm(e, t, n, r) {
  const o = Po(e);
  let i = Hm(tr(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Ds)))), i;
}
function mi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Om[t]);
}
function Im(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function dd(e) {
  return typeof e != "number" ? Im(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function yi(e) {
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
  const i = Dr(t), s = ha(t), a = ga(s), l = tr(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, d = r[a] / 2 - o[a] / 2;
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
  switch (Po(t)) {
    case "start":
      g[s] -= d * (n && u ? -1 : 1);
      break;
    case "end":
      g[s] += d * (n && u ? -1 : 1);
      break;
  }
  return g;
}
const Rm = async (e, t, n) => {
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
  } = Pl(u, r, l), d = r, g = {}, v = 0;
  for (let x = 0; x < a.length; x++) {
    const {
      name: C,
      fn: S
    } = a[x], {
      x: p,
      y: b,
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
    c = p ?? c, f = b ?? f, g = {
      ...g,
      [C]: {
        ...g[C],
        ...m
      }
    }, k && v <= 50 && (v++, typeof k == "object" && (k.placement && (d = k.placement), k.rects && (u = k.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : k.rects), {
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
async function fd(e, t) {
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
  } = No(t, e), v = dd(g), C = a[d ? f === "floating" ? "reference" : "floating" : f], S = yi(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(C))) == null || n ? C : C.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), p = f === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, b = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), m = await (i.isElement == null ? void 0 : i.isElement(b)) ? await (i.getScale == null ? void 0 : i.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, k = yi(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: p,
    offsetParent: b,
    strategy: l
  }) : p);
  return {
    top: (S.top - k.top + v.top) / m.y,
    bottom: (k.bottom - S.bottom + v.bottom) / m.y,
    left: (S.left - k.left + v.left) / m.x,
    right: (k.right - S.right + v.right) / m.x
  };
}
const Bm = (e) => ({
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
    } = No(e, t) || {};
    if (u == null)
      return {};
    const f = dd(c), d = {
      x: n,
      y: r
    }, g = ha(o), v = ga(g), x = await s.getDimensions(u), C = g === "y", S = C ? "top" : "left", p = C ? "bottom" : "right", b = C ? "clientHeight" : "clientWidth", m = i.reference[v] + i.reference[g] - d[g] - i.floating[v], k = d[g] - i.reference[g], $ = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let P = $ ? $[b] : 0;
    (!P || !await (s.isElement == null ? void 0 : s.isElement($))) && (P = a.floating[b] || i.floating[v]);
    const A = m / 2 - k / 2, L = P / 2 - x[v] / 2 - 1, O = ho(f[S], L), z = ho(f[p], L), I = O, R = P - x[v] - z, E = P / 2 - x[v] / 2 + A, M = Os(I, E, R), _ = !l.arrow && Po(o) != null && E !== M && i.reference[v] / 2 - (E < I ? O : z) - x[v] / 2 < 0, N = _ ? E < I ? E - I : E - R : 0;
    return {
      [g]: d[g] + N,
      data: {
        [g]: M,
        centerOffset: E - M - N,
        ..._ && {
          alignmentOffset: N
        }
      },
      reset: _
    };
  }
}), Ym = function(e) {
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
        ...C
      } = No(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const S = tr(o), p = Dr(a), b = tr(a) === a, m = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), k = d || (b || !x ? [mi(a)] : zm(a)), $ = v !== "none";
      !d && $ && k.push(...Vm(a, x, v, m));
      const P = [a, ...k], A = await fd(t, C), L = [];
      let O = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && L.push(A[S]), f) {
        const E = Lm(o, s, m);
        L.push(A[E[0]], A[E[1]]);
      }
      if (O = [...O, {
        placement: o,
        overflows: L
      }], !L.every((E) => E <= 0)) {
        var z, I;
        const E = (((z = i.flip) == null ? void 0 : z.index) || 0) + 1, M = P[E];
        if (M)
          return {
            data: {
              index: E,
              overflows: O
            },
            reset: {
              placement: M
            }
          };
        let _ = (I = O.filter((N) => N.overflows[0] <= 0).sort((N, T) => N.overflows[1] - T.overflows[1])[0]) == null ? void 0 : I.placement;
        if (!_)
          switch (g) {
            case "bestFit": {
              var R;
              const N = (R = O.filter((T) => {
                if ($) {
                  const D = Dr(T.placement);
                  return D === p || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  D === "y";
                }
                return !0;
              }).map((T) => [T.placement, T.overflows.filter((D) => D > 0).reduce((D, B) => D + B, 0)]).sort((T, D) => T[1] - D[1])[0]) == null ? void 0 : R[0];
              N && (_ = N);
              break;
            }
            case "initialPlacement":
              _ = a;
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
async function Xm(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = tr(n), a = Po(n), l = Dr(n) === "y", u = ["left", "top"].includes(s) ? -1 : 1, c = i && l ? -1 : 1, f = No(t, e);
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
const Wm = function(e) {
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
      } = t, l = await Xm(t, e);
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
}, Km = function(e) {
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
          fn: (C) => {
            let {
              x: S,
              y: p
            } = C;
            return {
              x: S,
              y: p
            };
          }
        },
        ...l
      } = No(e, t), u = {
        x: n,
        y: r
      }, c = await fd(t, l), f = Dr(tr(o)), d = cd(f);
      let g = u[d], v = u[f];
      if (i) {
        const C = d === "y" ? "top" : "left", S = d === "y" ? "bottom" : "right", p = g + c[C], b = g - c[S];
        g = Os(p, g, b);
      }
      if (s) {
        const C = f === "y" ? "top" : "left", S = f === "y" ? "bottom" : "right", p = v + c[C], b = v - c[S];
        v = Os(p, v, b);
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
function Yi() {
  return typeof window < "u";
}
function Yr(e) {
  return gd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Tt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function $n(e) {
  var t;
  return (t = (gd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function gd(e) {
  return Yi() ? e instanceof Node || e instanceof Tt(e).Node : !1;
}
function Gt(e) {
  return Yi() ? e instanceof Element || e instanceof Tt(e).Element : !1;
}
function an(e) {
  return Yi() ? e instanceof HTMLElement || e instanceof Tt(e).HTMLElement : !1;
}
function Ml(e) {
  return !Yi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Tt(e).ShadowRoot;
}
function Mo(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Ut(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Fm(e) {
  return ["table", "td", "th"].includes(Yr(e));
}
function Xi(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function va(e) {
  const t = pa(), n = Gt(e) ? Ut(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Zm(e) {
  let t = Yn(e);
  for (; an(t) && !Lr(t); ) {
    if (va(t))
      return t;
    if (Xi(t))
      return null;
    t = Yn(t);
  }
  return null;
}
function pa() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Lr(e) {
  return ["html", "body", "#document"].includes(Yr(e));
}
function Ut(e) {
  return Tt(e).getComputedStyle(e);
}
function Wi(e) {
  return Gt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Yn(e) {
  if (Yr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ml(e) && e.host || // Fallback.
    $n(e)
  );
  return Ml(t) ? t.host : t;
}
function hd(e) {
  const t = Yn(e);
  return Lr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : an(t) && Mo(t) ? t : hd(t);
}
function vd(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = hd(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Tt(o);
  return i ? (Ls(s), t.concat(s, s.visualViewport || [], Mo(o) ? o : [], [])) : t.concat(o, vd(o, []));
}
function Ls(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function pd(e) {
  const t = Ut(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = an(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = pi(n) !== i || pi(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function md(e) {
  return Gt(e) ? e : e.contextElement;
}
function xr(e) {
  const t = md(e);
  if (!an(t))
    return rn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = pd(t);
  let s = (i ? pi(n.width) : n.width) / r, a = (i ? pi(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const qm = /* @__PURE__ */ rn(0);
function yd(e) {
  const t = Tt(e);
  return !pa() || !t.visualViewport ? qm : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Gm(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Tt(e) ? !1 : t;
}
function vo(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = md(e);
  let s = rn(1);
  t && (r ? Gt(r) && (s = xr(r)) : s = xr(e));
  const a = Gm(i, n, r) ? yd(i) : rn(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, c = o.width / s.x, f = o.height / s.y;
  if (i) {
    const d = Tt(i), g = r && Gt(r) ? Tt(r) : r;
    let v = d, x = Ls(v);
    for (; x && r && g !== v; ) {
      const C = xr(x), S = x.getBoundingClientRect(), p = Ut(x), b = S.left + (x.clientLeft + parseFloat(p.paddingLeft)) * C.x, m = S.top + (x.clientTop + parseFloat(p.paddingTop)) * C.y;
      l *= C.x, u *= C.y, c *= C.x, f *= C.y, l += b, u += m, v = Tt(x), x = Ls(v);
    }
  }
  return yi({
    width: c,
    height: f,
    x: l,
    y: u
  });
}
function ma(e, t) {
  const n = Wi(e).scrollLeft;
  return t ? t.left + n : vo($n(e)).left + n;
}
function wd(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    ma(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function Um(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = $n(r), a = t ? Xi(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = rn(1);
  const c = rn(0), f = an(r);
  if ((f || !f && !i) && ((Yr(r) !== "body" || Mo(s)) && (l = Wi(r)), an(r))) {
    const g = vo(r);
    u = xr(r), c.x = g.x + r.clientLeft, c.y = g.y + r.clientTop;
  }
  const d = s && !f && !i ? wd(s, l, !0) : rn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + d.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + d.y
  };
}
function jm(e) {
  return Array.from(e.getClientRects());
}
function Jm(e) {
  const t = $n(e), n = Wi(e), r = e.ownerDocument.body, o = _r(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = _r(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + ma(e);
  const a = -n.scrollTop;
  return Ut(r).direction === "rtl" && (s += _r(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function Qm(e, t) {
  const n = Tt(e), r = $n(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const u = pa();
    (!u || u && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
function e2(e, t) {
  const n = vo(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = an(e) ? xr(e) : rn(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function $l(e, t, n) {
  let r;
  if (t === "viewport")
    r = Qm(e, n);
  else if (t === "document")
    r = Jm($n(e));
  else if (Gt(t))
    r = e2(t, n);
  else {
    const o = yd(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return yi(r);
}
function _d(e, t) {
  const n = Yn(e);
  return n === t || !Gt(n) || Lr(n) ? !1 : Ut(n).position === "fixed" || _d(n, t);
}
function t2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = vd(e, []).filter((a) => Gt(a) && Yr(a) !== "body"), o = null;
  const i = Ut(e).position === "fixed";
  let s = i ? Yn(e) : e;
  for (; Gt(s) && !Lr(s); ) {
    const a = Ut(s), l = va(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Mo(s) && !l && _d(e, s)) ? r = r.filter((c) => c !== s) : o = a, s = Yn(s);
  }
  return t.set(e, r), r;
}
function n2(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Xi(t) ? [] : t2(t, this._c) : [].concat(n), r], a = s[0], l = s.reduce((u, c) => {
    const f = $l(t, c, o);
    return u.top = _r(f.top, u.top), u.right = ho(f.right, u.right), u.bottom = ho(f.bottom, u.bottom), u.left = _r(f.left, u.left), u;
  }, $l(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function r2(e) {
  const {
    width: t,
    height: n
  } = pd(e);
  return {
    width: t,
    height: n
  };
}
function o2(e, t, n) {
  const r = an(t), o = $n(t), i = n === "fixed", s = vo(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = rn(0);
  if (r || !r && !i)
    if ((Yr(t) !== "body" || Mo(o)) && (a = Wi(t)), r) {
      const d = vo(t, !0, i, t);
      l.x = d.x + t.clientLeft, l.y = d.y + t.clientTop;
    } else o && (l.x = ma(o));
  const u = o && !r && !i ? wd(o, a) : rn(0), c = s.left + a.scrollLeft - l.x - u.x, f = s.top + a.scrollTop - l.y - u.y;
  return {
    x: c,
    y: f,
    width: s.width,
    height: s.height
  };
}
function ss(e) {
  return Ut(e).position === "static";
}
function Tl(e, t) {
  if (!an(e) || Ut(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return $n(e) === n && (n = n.ownerDocument.body), n;
}
function xd(e, t) {
  const n = Tt(e);
  if (Xi(e))
    return n;
  if (!an(e)) {
    let o = Yn(e);
    for (; o && !Lr(o); ) {
      if (Gt(o) && !ss(o))
        return o;
      o = Yn(o);
    }
    return n;
  }
  let r = Tl(e, t);
  for (; r && Fm(r) && ss(r); )
    r = Tl(r, t);
  return r && Lr(r) && ss(r) && !va(r) ? n : r || Zm(e) || n;
}
const i2 = async function(e) {
  const t = this.getOffsetParent || xd, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: o2(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function s2(e) {
  return Ut(e).direction === "rtl";
}
const a2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Um,
  getDocumentElement: $n,
  getClippingRect: n2,
  getOffsetParent: xd,
  getElementRects: i2,
  getClientRects: jm,
  getDimensions: r2,
  getScale: xr,
  isElement: Gt,
  isRTL: s2
}, l2 = Wm, u2 = Km, c2 = Ym, d2 = Bm, f2 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: a2,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return Rm(e, t, {
    ...o,
    platform: i
  });
}, g2 = ({
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
    f2(e, u, {
      placement: r,
      middleware: [
        l2(o),
        // 手动偏移配置
        c2(i),
        //自动翻转
        u2(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [d2({ element: c })] : []
      ]
    }).then(({ x: S, y: p, placement: b, middlewareData: m }) => {
      if (Object.assign(u.style, {
        left: `${S}px`,
        top: `${p}px`
      }), l) {
        const { x: k, y: $ } = m.arrow, P = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[b.split("-")[0]];
        Object.assign(c.style, {
          zIndex: -1,
          left: k != null ? `${k}px` : "",
          top: $ != null ? `${$}px` : "",
          right: "",
          bottom: "",
          [P]: "2px"
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
  function x(S) {
    S.stopPropagation(), d ? v() : g();
  }
  function C(S) {
    u.contains(S.target) || v();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((S) => {
    e.addEventListener(S, x);
  }), document.addEventListener("click", C), {
    destroy() {
      t.forEach((S) => {
        e.removeEventListener(S, x);
      }), document.removeEventListener("click", C);
    },
    hide() {
      v();
    },
    isVisible() {
      return d;
    }
  };
};
var h2 = /* @__PURE__ */ se('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function $o(e, t) {
  ce(t, !0);
  const n = w(t, "children", 7), r = w(t, "floating", 7), o = w(t, "placement", 7, "bottom");
  let i, s, a;
  sr(() => (a = g2({
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
  var u = h2(), c = Q(u), f = Q(c);
  Sr(f, n), G(c), kn(c, (v) => i = v, () => i);
  var d = U(c, 2), g = Q(d);
  return Sr(g, r), G(d), kn(d, (v) => s = v, () => s), G(u), V(e, u), de({
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
ie($o, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function br(e, t) {
  ce(t, !0);
  const n = w(t, "children", 7), r = w(t, "level", 7, 1), o = w(t, "mt", 7), i = w(t, "mb", 7);
  var s = Ze(), a = we(s);
  return hg(a, () => `h${r()}`, !1, (l, u) => {
    let c;
    _e(() => c = qt(
      l,
      c,
      {
        class: "tf-heading",
        style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
      },
      void 0,
      l.namespaceURI === Hl,
      l.nodeName.includes("-")
    ));
    var f = Ze(), d = we(f);
    Sr(d, () => n() ?? st), V(u, f);
  }), V(e, s), de({
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
ie(br, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var v2 = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const p2 = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function Ki(e, t) {
  ce(t, !0), rt(e, p2);
  const n = /* @__PURE__ */ Mn(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  lt(e, Vt(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = v2();
      V(r, i);
    },
    $$slots: { default: !0 }
  })), de();
}
ie(Ki, {}, [], [], !0);
const m2 = () => {
  const e = Ye();
  return {
    deleteNode: (n) => {
      e.nodes.update((r) => r.filter((o) => o.id !== n)), e.edges.update(
        (r) => r.filter((o) => o.source !== n && o.target !== n)
      );
    }
  };
};
var y2 = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), w2 = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), _2 = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), x2 = /* @__PURE__ */ se('<div class="tf-node-toolbar svelte-44dmwv"><!> <!> <!></div>'), b2 = /* @__PURE__ */ se('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!>', 1);
const C2 = {
  hash: "svelte-44dmwv",
  code: ".tf-node-toolbar.svelte-44dmwv {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}"
};
function Fi(e, t) {
  ce(t, !0), rt(e, C2);
  const n = w(t, "data", 7), r = w(t, "id", 7, ""), o = w(t, "icon", 7), i = w(t, "children", 7);
  let s = n().expand ? ["key"] : [];
  const { updateNodeData: a } = Wn();
  Ye();
  const l = [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: i()
    }
  ], { deleteNode: u } = m2();
  var c = b2(), f = we(c);
  sd(f, {
    get position() {
      return ye.Top;
    },
    align: "end",
    children: (S, p) => {
      var b = x2(), m = Q(b);
      lt(m, {
        class: "tf-node-toolbar-item",
        children: (P, A) => {
          var L = y2();
          V(P, L);
        },
        $$slots: { default: !0 }
      });
      var k = U(m, 2);
      lt(k, {
        class: "tf-node-toolbar-item",
        children: (P, A) => {
          var L = w2();
          V(P, L);
        },
        $$slots: { default: !0 }
      });
      var $ = U(k, 2);
      lt($, {
        class: "tf-node-toolbar-item",
        onclick: () => {
          u(r());
        },
        children: (P, A) => {
          var L = _2();
          V(P, L);
        },
        $$slots: { default: !0 }
      }), G(b), V(S, b);
    },
    $$slots: { default: !0 }
  });
  var d = U(f, 2), g = U(Q(d), 2), v = Q(g);
  ud(v, {
    items: l,
    activeKeys: s,
    onChange: (S, p) => {
      a(r(), { expand: p == null ? void 0 : p.includes("key") });
    }
  }), G(g), G(d);
  var x = U(d, 2);
  er(x, {
    type: "target",
    get position() {
      return ye.Left;
    },
    style: " left: -12px;top: 20px"
  });
  var C = U(x, 2);
  return er(C, {
    type: "source",
    get position() {
      return ye.Right;
    },
    style: "right: -12px;top: 20px"
  }), V(e, c), de({
    get data() {
      return n();
    },
    set data(S) {
      n(S), y();
    },
    get id() {
      return r();
    },
    set id(S = "") {
      r(S), y();
    },
    get icon() {
      return o();
    },
    set icon(S) {
      o(S), y();
    },
    get children() {
      return i();
    },
    set children(S) {
      i(S), y();
    }
  });
}
ie(Fi, { data: {}, id: {}, icon: {}, children: {} }, [], [], !0);
function fn() {
  return Un("svelteflow__node_id");
}
const bd = [
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
], k2 = [
  {
    value: "ref",
    label: "引用"
  },
  {
    value: "input",
    label: "固定值"
  }
];
var E2 = /* @__PURE__ */ se('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), S2 = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), N2 = /* @__PURE__ */ se('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const P2 = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Cd(e, t) {
  ce(t, !0), rt(e, P2);
  const [n, r] = qe(), o = () => Z(h(l), "$node", n), i = w(t, "parameter", 7), s = w(t, "index", 7);
  let a = fn(), l = /* @__PURE__ */ Fe(() => ar(a)), u = /* @__PURE__ */ Fe(() => {
    var P, A;
    return {
      ...i(),
      ...(A = (P = o()) == null ? void 0 : P.data) == null ? void 0 : A.parameters[s()]
    };
  });
  const { updateNodeData: c } = Wn(), f = (P) => {
    const A = P.target.value;
    c(a, (L) => {
      let O = L.data.parameters;
      return O[s()].name = A, { parameters: O };
    });
  }, d = (P) => {
    const A = P.target.checked;
    c(a, (L) => {
      let O = L.data.parameters;
      return O[s()].required = A, { parameters: O };
    });
  };
  let g;
  const v = () => {
    c(a, (P) => {
      let A = P.data.parameters;
      return A.splice(s(), 1), { parameters: [...A] };
    }), g == null || g.hide();
  };
  var x = N2(), C = we(x), S = Q(C);
  go(S, {
    style: "width: 100%;",
    get value() {
      return h(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: f
  }), G(C);
  var p = U(C, 2), b = Q(p);
  ad(b, {
    get checked() {
      return h(u).required;
    },
    onchange: d
  }), G(p);
  var m = U(p, 2), k = Q(m);
  kn(
    $o(k, {
      placement: "bottom",
      floating: (A) => {
        var L = E2(), O = Q(L), z = U(Q(O));
        Or(z, {
          items: bd,
          style: "width: 100%"
        }), G(O);
        var I = U(O, 2), R = U(Q(I));
        Sn(R, { rows: 1, style: "width: 100%;" }), G(I);
        var E = U(I, 2), M = U(Q(E));
        Sn(M, { rows: 3, style: "width: 100%;" }), G(E);
        var _ = U(E, 2), N = Q(_);
        lt(N, {
          onclick: v,
          children: (T, D) => {
            at();
            var B = $t("删除");
            V(T, B);
          },
          $$slots: { default: !0 }
        }), G(_), G(L), V(A, L);
      },
      children: (A, L) => {
        lt(A, {
          class: "input-btn-more",
          children: (O, z) => {
            var I = S2();
            V(O, I);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (A) => g = A,
    () => g
  ), G(m), V(e, x);
  var $ = de({
    get parameter() {
      return i();
    },
    set parameter(P) {
      i(P), y();
    },
    get index() {
      return s();
    },
    set index(P) {
      s(P), y();
    }
  });
  return r(), $;
}
ie(Cd, { parameter: {}, index: {} }, [], [], !0);
var M2 = /* @__PURE__ */ se('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), $2 = /* @__PURE__ */ se('<div class="none-params svelte-3n0wca">无输入参数</div>'), T2 = /* @__PURE__ */ se('<div class="input-container svelte-3n0wca"><!> <!></div>');
const A2 = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function kd(e, t) {
  ce(t, !0), rt(e, A2);
  const [n, r] = qe(), o = () => Z(h(s), "$node", n);
  let i = fn(), s = /* @__PURE__ */ Fe(() => ar(i)), a = /* @__PURE__ */ Fe(() => {
    var d, g;
    return [...((g = (d = o()) == null ? void 0 : d.data) == null ? void 0 : g.parameters) || []];
  });
  var l = T2(), u = Q(l);
  {
    var c = (d) => {
      var g = M2();
      at(4), V(d, g);
    };
    Ee(u, (d) => {
      h(a).length !== 0 && d(c);
    });
  }
  var f = U(u, 2);
  At(
    f,
    19,
    () => h(a),
    (d) => d.id,
    (d, g, v) => {
      Cd(d, {
        get parameter() {
          return h(g);
        },
        get index() {
          return h(v);
        }
      });
    },
    (d) => {
      var g = $2();
      V(d, g);
    }
  ), G(l), V(e, l), de(), r();
}
ie(kd, {}, [], [], !0);
const po = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, ya = () => {
  const { updateNodeData: e } = Wn();
  return {
    addParameter: (t, n = "parameters") => {
      e(t, (r) => {
        let o = r.data[n];
        return o ? o.push({
          id: po()
        }) : o = [{ id: po() }], {
          [n]: [...o]
        };
      });
    }
  };
};
var O2 = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), D2 = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), L2 = /* @__PURE__ */ se('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const z2 = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function Ed(e, t) {
  ce(t, !0), rt(e, z2);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Mn(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = fn(), { addParameter: i } = ya();
  return Fi(e, Vt(() => r, {
    get data() {
      return n();
    },
    icon: (a) => {
      var l = O2();
      V(a, l);
    },
    children: (a, l) => {
      var u = L2(), c = we(u), f = Q(c);
      br(f, {
        level: 3,
        children: (v, x) => {
          at();
          var C = $t("输入参数");
          V(v, C);
        },
        $$slots: { default: !0 }
      });
      var d = U(f, 2);
      lt(d, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o);
        },
        children: (v, x) => {
          var C = D2();
          V(v, C);
        },
        $$slots: { default: !0 }
      }), G(c);
      var g = U(c, 2);
      kd(g, {}), V(a, u);
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
ie(Ed, { data: {} }, [], [], !0);
const Sd = (e, t, n) => {
  for (let r of n)
    r.target === t && r.source && (e.push(r.source), Sd(e, r.source, n));
}, Al = (e, t) => {
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
}, H2 = (e = !1) => {
  const t = fn(), n = ar(t), { nodes: r, edges: o } = Ye();
  return Hn([n, r, o], ([i, s, a]) => {
    const l = [];
    if (e) {
      for (let u of s)
        if (u.parentId === i.id) {
          const c = Al(u, u.parentId === i.id);
          c && l.push(c);
        }
    } else {
      const u = [];
      Sd(u, t, a);
      for (let c of s)
        if (u.includes(c.id)) {
          const f = Al(c, c.parentId === i.id);
          f && l.push(f);
        }
    }
    return l;
  });
};
var V2 = /* @__PURE__ */ se('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), I2 = /* @__PURE__ */ se('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const R2 = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Nd(e, t) {
  ce(t, !0), rt(e, R2);
  const [n, r] = qe(), o = () => Z(h(c), "$node", n), i = () => Z(m, "$selectItems", n), s = w(t, "parameter", 7), a = w(t, "index", 7), l = w(t, "dataKeyName", 7);
  let u = fn(), c = /* @__PURE__ */ Fe(() => ar(u)), f = /* @__PURE__ */ Fe(() => {
    var M;
    return {
      ...s(),
      ...(M = o()) == null ? void 0 : M.data[l()][a()]
    };
  });
  const { updateNodeData: d } = Wn(), g = (M, _) => {
    d(u, (N) => {
      let T = N.data[l()];
      return T[a()] = { ...T[a()], [M]: _ }, { [l()]: T };
    });
  }, v = (M) => {
    const _ = M.target.value;
    g("name", _);
  }, x = (M) => {
    const _ = M.target.value;
    g("value", _);
  }, C = (M) => {
    const _ = M.value;
    g("ref", _);
  }, S = (M) => {
    const _ = M.value;
    g("refType", _);
  };
  let p;
  const b = () => {
    d(u, (M) => {
      let _ = M.data[l()];
      return _.splice(a(), 1), { [l()]: [..._] };
    }), p == null || p.hide();
  }, m = H2();
  var k = I2(), $ = we(k), P = Q($);
  go(P, {
    style: "width: 100%;",
    get value() {
      return h(f).name;
    },
    placeholder: "请输入参数名称",
    oninput: v
  }), G($);
  var A = U($, 2), L = Q(A);
  {
    var O = (M) => {
      go(M, {
        get value() {
          return h(f).value;
        },
        placeholder: "请输入参数值",
        oninput: x
      });
    }, z = (M) => {
      const _ = /* @__PURE__ */ Fe(() => [h(f).ref]);
      Or(M, {
        get items() {
          return i();
        },
        style: "width: 100%",
        defaultValue: ["ref"],
        get value() {
          return h(_);
        },
        expandAll: !0,
        onSelect: C
      });
    };
    Ee(L, (M) => {
      h(f).refType === "input" ? M(O) : M(z, !1);
    });
  }
  G(A);
  var I = U(A, 2), R = Q(I);
  kn(
    $o(R, {
      placement: "bottom",
      floating: (_) => {
        var N = V2(), T = Q(N), D = U(Q(T));
        const B = /* @__PURE__ */ Fe(() => h(f).refType ? [h(f).refType] : []);
        Or(D, {
          items: k2,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return h(B);
          },
          onSelect: S
        }), G(T);
        var W = U(T, 2), q = U(Q(W));
        Sn(q, {
          rows: 1,
          style: "width: 100%;",
          onchange: (xe) => {
            const be = xe.target.value;
            g("defaultValue", be);
          }
        }), G(W);
        var fe = U(W, 2), j = U(Q(fe));
        Sn(j, {
          rows: 3,
          style: "width: 100%;",
          onchange: (xe) => {
            const be = xe.target.value;
            g("description", be);
          }
        }), G(fe);
        var Y = U(fe, 2), he = Q(Y);
        lt(he, {
          onclick: b,
          children: (xe, be) => {
            at();
            var ue = $t("删除");
            V(xe, ue);
          },
          $$slots: { default: !0 }
        }), G(Y), G(N), V(_, N);
      },
      children: (_, N) => {
        Ki(_, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (_) => p = _,
    () => p
  ), G(I), V(e, k);
  var E = de({
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
ie(Nd, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var B2 = /* @__PURE__ */ se('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Y2 = /* @__PURE__ */ se('<div class="none-params svelte-1sm1mgi"> </div>'), X2 = /* @__PURE__ */ se('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const W2 = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function wa(e, t) {
  ce(t, !0), rt(e, W2);
  const [n, r] = qe(), o = () => Z(h(l), "$node", n), i = w(t, "noneParameterText", 7, "无输入参数"), s = w(t, "dataKeyName", 7, "parameters");
  let a = fn(), l = /* @__PURE__ */ Fe(() => ar(a)), u = /* @__PURE__ */ Fe(() => {
    var x;
    return [...((x = o()) == null ? void 0 : x.data[s()]) || []];
  });
  var c = X2(), f = Q(c);
  {
    var d = (x) => {
      var C = B2();
      at(4), V(x, C);
    };
    Ee(f, (x) => {
      h(u).length !== 0 && x(d);
    });
  }
  var g = U(f, 2);
  At(
    g,
    19,
    () => h(u),
    (x) => x.id,
    (x, C, S) => {
      Nd(x, {
        get parameter() {
          return h(C);
        },
        get index() {
          return h(S);
        },
        get dataKeyName() {
          return s();
        }
      });
    },
    (x) => {
      var C = Y2(), S = Q(C, !0);
      G(C), _e(() => un(S, i())), V(x, C);
    }
  ), G(c), V(e, c);
  var v = de({
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
ie(wa, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var K2 = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), F2 = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Z2 = /* @__PURE__ */ se('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const q2 = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function Pd(e, t) {
  ce(t, !0), rt(e, q2);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Mn(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = fn(), { addParameter: i } = ya();
  return Fi(e, Vt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var l = K2();
        V(a, l);
      },
      children: (a, l) => {
        var u = Z2(), c = we(u), f = Q(c);
        br(f, {
          level: 3,
          children: (v, x) => {
            at();
            var C = $t("输出参数");
            V(v, C);
          },
          $$slots: { default: !0 }
        });
        var d = U(f, 2);
        lt(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (v, x) => {
            var C = F2();
            V(v, C);
          },
          $$slots: { default: !0 }
        }), G(c);
        var g = U(c, 2);
        wa(g, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs"
        }), V(a, u);
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
ie(Pd, { data: {} }, [], [], !0);
const G2 = () => Un("tinyflow_options");
var U2 = /* @__PURE__ */ $e('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), j2 = /* @__PURE__ */ se('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <div class="input-more-item svelte-1cfeest"><!></div></div>'), J2 = /* @__PURE__ */ se('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const Q2 = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Md(e, t) {
  ce(t, !0), rt(e, Q2);
  const [n, r] = qe(), o = () => Z(h(u), "$node", n), i = w(t, "parameter", 7), s = w(t, "position", 7), a = w(t, "dataKeyName", 7);
  let l = fn(), u = /* @__PURE__ */ Fe(() => ar(l)), c = /* @__PURE__ */ Fe(() => {
    var N;
    let M = (N = o()) == null ? void 0 : N.data[a()], _;
    if (M && s().length > 0) {
      let T = M;
      for (let D = 0; D < s().length; D++) {
        const B = s()[D];
        D == s().length - 1 ? _ = T[B] : T = T[B].children;
      }
    }
    return {
      ...i(),
      ..._
      // ...($node?.data[dataKeyName] as Array<Parameter>)[index]
    };
  });
  const { updateNodeData: f } = Wn(), d = (M, _) => {
    f(l, (N) => {
      const T = N.data[a()];
      if (T && s().length > 0) {
        let D = T;
        for (let B = 0; B < s().length; B++) {
          const W = s()[B];
          B == s().length - 1 ? D[W] = { ...D[W], [M]: _ } : D = T[W].children;
        }
      }
      return { [a()]: T };
    });
  }, g = (M) => {
    const _ = M.target.value;
    d("name", _);
  }, v = (M) => {
    const _ = M.value;
    d("dataType", _);
  };
  let x;
  const C = () => {
    f(l, (M) => {
      let _ = M.data[a()];
      if (_ && s().length > 0) {
        let N = _;
        for (let T = 0; T < s().length; T++) {
          const D = s()[T];
          T == s().length - 1 ? N.splice(D, 1) : N = N[D].children;
        }
      }
      return { [a()]: [..._] };
    }), x == null || x.hide();
  }, S = () => {
    f(l, (M) => {
      let _ = M.data[a()];
      if (_ && s().length > 0) {
        let N = _;
        for (let T = 0; T < s().length; T++) {
          const D = s()[T];
          T == s().length - 1 ? N[D].children ? N[D].children.push({
            id: po(),
            name: "newParam",
            dataType: "String"
          }) : N[D].children = [
            {
              id: po(),
              name: "newParam",
              dataType: "String"
            }
          ] : N = N[D].children;
        }
      }
      return { [a()]: [..._] };
    });
  };
  var p = J2(), b = we(p), m = Q(b);
  {
    var k = (M) => {
      var _ = Ze(), N = we(_);
      At(N, 17, s, $i, (T, D) => {
        at();
        var B = $t(" ");
        V(T, B);
      }), V(M, _);
    };
    Ee(m, (M) => {
      s().length > 1 && M(k);
    });
  }
  var $ = U(m, 2);
  go($, {
    style: "width: 100%;",
    get value() {
      return h(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: g
  }), G(b);
  var P = U(b, 2), A = Q(P);
  const L = /* @__PURE__ */ Fe(() => h(c).dataType ? [h(c).dataType] : []);
  Or(A, {
    items: bd,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return h(L);
    },
    onSelect: v
  });
  var O = U(A, 2);
  {
    var z = (M) => {
      lt(M, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: S,
        children: (_, N) => {
          var T = U2();
          V(_, T);
        },
        $$slots: { default: !0 }
      });
    };
    Ee(O, (M) => {
      (h(c).dataType === "Object" || h(c).dataType === "Array") && M(z);
    });
  }
  G(P);
  var I = U(P, 2), R = Q(I);
  kn(
    $o(R, {
      placement: "bottom",
      floating: (_) => {
        var N = j2(), T = Q(N), D = U(Q(T));
        Sn(D, {
          rows: 1,
          style: "width: 100%;",
          onchange: (j) => {
            const Y = j.target.value;
            d("defaultValue", Y);
          }
        }), G(T);
        var B = U(T, 2), W = U(Q(B));
        Sn(W, {
          rows: 3,
          style: "width: 100%;",
          onchange: (j) => {
            const Y = j.target.value;
            d("description", Y);
          }
        }), G(B);
        var q = U(B, 2), fe = Q(q);
        lt(fe, {
          onclick: C,
          children: (j, Y) => {
            at();
            var he = $t("删除");
            V(j, he);
          },
          $$slots: { default: !0 }
        }), G(q), G(N), V(_, N);
      },
      children: (_, N) => {
        Ki(_, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (_) => x = _,
    () => x
  ), G(I), V(e, p);
  var E = de({
    get parameter() {
      return i();
    },
    set parameter(M) {
      i(M), y();
    },
    get position() {
      return s();
    },
    set position(M) {
      s(M), y();
    },
    get dataKeyName() {
      return a();
    },
    set dataKeyName(M) {
      a(M), y();
    }
  });
  return r(), E;
}
ie(Md, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var ey = /* @__PURE__ */ se("<!> <!>", 1), ty = /* @__PURE__ */ se('<div class="none-params svelte-1sm1mgi"> </div>'), ny = /* @__PURE__ */ se('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), ry = /* @__PURE__ */ se('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const oy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function $d(e, t) {
  ce(t, !0), rt(e, oy);
  const [n, r] = qe(), o = () => Z(h(u), "$node", n), i = (C, S = st, p = st) => {
    var b = Ze(), m = we(b);
    At(
      m,
      19,
      S,
      (k) => `${k.id}_${k.children ? k.children.length : 0}`,
      (k, $, P) => {
        var A = ey(), L = we(A);
        const O = /* @__PURE__ */ Fe(() => [...p(), h(P)]);
        Md(L, {
          get parameter() {
            return h($);
          },
          get position() {
            return h(O);
          },
          get dataKeyName() {
            return a();
          }
        });
        var z = U(L, 2);
        {
          var I = (R) => {
            var E = /* @__PURE__ */ ge(() => [...p(), h(P)]);
            i(R, () => h($).children, () => h(E));
          };
          Ee(z, (R) => {
            h($).children && R(I);
          });
        }
        V(k, A);
      },
      (k) => {
        var $ = Ze(), P = we($);
        {
          var A = (L) => {
            var O = ty(), z = Q(O, !0);
            G(O), _e(() => un(z, s())), V(L, O);
          };
          Ee(P, (L) => {
            p().length === 0 && L(A);
          });
        }
        V(k, $);
      }
    ), V(C, b);
  }, s = w(t, "noneParameterText", 7, "无输出参数"), a = w(t, "dataKeyName", 7, "outputDefs");
  let l = fn(), u = /* @__PURE__ */ Fe(() => ar(l)), c = /* @__PURE__ */ Fe(() => {
    var C;
    return [...((C = o()) == null ? void 0 : C.data[a()]) || []];
  });
  var f = ry(), d = Q(f);
  {
    var g = (C) => {
      var S = ny();
      at(4), V(C, S);
    };
    Ee(d, (C) => {
      h(c).length !== 0 && C(g);
    });
  }
  var v = U(d, 2);
  i(v, () => h(c) || [], () => []), G(f), V(e, f);
  var x = de({
    get noneParameterText() {
      return s();
    },
    set noneParameterText(C = "无输出参数") {
      s(C), y();
    },
    get dataKeyName() {
      return a();
    },
    set dataKeyName(C = "outputDefs") {
      a(C), y();
    }
  });
  return r(), x;
}
ie($d, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var iy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), sy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ay = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ly = /* @__PURE__ */ se('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">模型</div> <div class="setting-item svelte-15t2v24"><!> <!></div> <div class="setting-title svelte-15t2v24">系统提示词</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">用户提示词</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const uy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Td(e, t) {
  ce(t, !0), rt(e, uy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Mn(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = fn(), { addParameter: i } = ya(), s = G2();
  let a = cs(Qt([]));
  sr(async () => {
    var c;
    const u = await ((c = s.provider) == null ? void 0 : c.llms());
    h(a).push(...u || []);
  });
  const { updateNodeData: l } = Wn();
  return Fi(e, Vt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var f = iy();
        V(c, f);
      },
      children: (c, f) => {
        var d = ly(), g = we(d), v = Q(g);
        br(v, {
          level: 3,
          children: (E, M) => {
            at();
            var _ = $t("输入参数");
            V(E, _);
          },
          $$slots: { default: !0 }
        });
        var x = U(v, 2);
        lt(x, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (E, M) => {
            var _ = sy();
            V(E, _);
          },
          $$slots: { default: !0 }
        }), G(g);
        var C = U(g, 2);
        wa(C, {});
        var S = U(C, 2);
        br(S, {
          level: 3,
          mt: "10px",
          children: (E, M) => {
            at();
            var _ = $t("模型设置");
            V(E, _);
          },
          $$slots: { default: !0 }
        });
        var p = U(S, 4), b = Q(p);
        const m = /* @__PURE__ */ Fe(() => n().llmId ? [n().llmId] : []);
        Or(b, {
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
        var k = U(b, 2);
        Ki(k, {}), G(p);
        var $ = U(p, 4), P = Q($);
        Sn(P, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%"
        }), G($);
        var A = U($, 4), L = Q(A);
        Sn(L, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%"
        }), G(A);
        var O = U(A, 2), z = Q(O);
        br(z, {
          level: 3,
          mt: "10px",
          children: (E, M) => {
            at();
            var _ = $t("输出参数");
            V(E, _);
          },
          $$slots: { default: !0 }
        });
        var I = U(z, 2);
        lt(I, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (E, M) => {
            var _ = ay();
            V(E, _);
          },
          $$slots: { default: !0 }
        }), G(O);
        var R = U(O, 2);
        $d(R, {}), V(c, d);
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
ie(Td, { data: {} }, [], [], !0);
const cy = {
  startNode: Ed,
  llmNode: Td,
  endNode: Pd
};
var dy = /* @__PURE__ */ se("<!> ", 1);
function Ad(e, t) {
  ce(t, !0);
  const n = w(t, "icon", 7), r = w(t, "title", 7), o = w(t, "type", 7), i = w(t, "description", 7), s = w(t, "extra", 7);
  return lt(e, {
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
      var c = dy(), f = we(c);
      pu(f, n);
      var d = U(f);
      _e(() => un(d, ` ${r() ?? ""}`)), V(l, c);
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
ie(
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
var fy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), gy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), hy = /* @__PURE__ */ se('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"><!></div></div></div> <!></div>');
function Od(e) {
  let t = cs("base"), n = cs("show");
  const r = [
    {
      // icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14ZM12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16Z"></path></svg>',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>',
      title: "开始节点",
      type: "startNode",
      description: "startNode"
      // extra:{},
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>',
      title: "循环",
      type: "startNode",
      description: "startNode"
      // extra:{},
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>',
      title: "大模型",
      type: "startNode",
      description: "startNode"
      // extra:{},
    },
    {
      // icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.7134 7.12811L4.46682 7.69379C4.28637 8.10792 3.71357 8.10792 3.53312 7.69379L3.28656 7.12811C2.84706 6.11947 2.05545 5.31641 1.06767 4.87708L0.308047 4.53922C-0.102682 4.35653 -0.102682 3.75881 0.308047 3.57612L1.0252 3.25714C2.03838 2.80651 2.84417 1.97373 3.27612 0.930828L3.52932 0.319534C3.70578 -0.106511 4.29417 -0.106511 4.47063 0.319534L4.72382 0.930828C5.15577 1.97373 5.96158 2.80651 6.9748 3.25714L7.69188 3.57612C8.10271 3.75881 8.10271 4.35653 7.69188 4.53922L6.93228 4.87708C5.94451 5.31641 5.15288 6.11947 4.7134 7.12811ZM6.33421 15.8154C6.51032 15.233 6.7072 14.6562 6.93912 14.0327C8.99484 8.50636 12.4197 5.08172 18.0129 4.21479C17.5 5.35838 17.0151 6.15301 16.5858 6.58237C16.2521 6.91603 15.9185 7.24993 15.5848 7.58407L14.1721 8.99878L15.6279 10.4535C14.4976 12.5384 12.2652 14.1979 9.75193 14.512C8.43544 14.6766 7.29345 15.1188 6.33421 15.8154ZM18 9.99658L17 8.99728C17.3331 8.66372 17.6662 8.33039 18.0027 7.99391C19.0018 6.99303 20.0009 4.99392 21 1.99658C6.31105 1.99658 4.08854 15.422 3.06361 21.6132C3.0419 21.7443 3.02074 21.8722 3 21.9966H4.99824C5.66421 18.6635 7.33146 16.8301 10 16.4966C14 15.9966 17 12.9966 18 9.99658Z"></path></svg>',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>',
      title: "知识库",
      type: "startNode",
      description: "startNode"
      // extra:{},
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>',
      title: "搜索引擎",
      type: "startNode",
      description: "startNode"
      // extra:{},
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>',
      title: "Http 请求",
      type: "startNode",
      description: "startNode"
      // extra:{},
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>',
      title: "动态代码",
      type: "startNode",
      description: "startNode"
      // extra:{},
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>',
      title: "内容模板",
      type: "startNode",
      description: "startNode"
      // extra:{},
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>',
      title: "结束节点",
      type: "endNode",
      description: "startNode"
      // extra:{},
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
  var i = hy(), s = Q(i), a = Q(s), l = Q(a);
  ld(l, {
    style: "width: 100%",
    items: o,
    onChange: (v) => {
      F(t, Qt(v.value.toString()));
    }
  }), G(a);
  var u = U(a, 2), c = Q(u);
  At(c, 21, () => r, $i, (v, x) => {
    Ad(v, Vt(() => h(x)));
  }), G(c);
  var f = U(c, 2), d = Q(f);
  lt(d, {
    children: (v, x) => {
      at();
      var C = $t("一个按钮22");
      V(v, C);
    },
    $$slots: { default: !0 }
  }), G(f), G(u), G(s);
  var g = U(s, 2);
  lt(g, {
    onclick: () => {
      F(n, Qt(h(n) ? "" : "show"));
    },
    children: (v, x) => {
      var C = Ze(), S = we(C);
      {
        var p = (m) => {
          var k = fy();
          V(m, k);
        }, b = (m) => {
          var k = gy();
          V(m, k);
        };
        Ee(S, (m) => {
          h(n) === "show" ? m(p) : m(b, !1);
        });
      }
      V(v, C);
    },
    $$slots: { default: !0 }
  }), G(i), _e(() => {
    Nr(i, `tf-toolbar ${h(n) ?? ""}`), re(c, "style", `display: ${(h(t) === "base" ? "flex" : "none") ?? ""}`), re(f, "style", `display: ${(h(t) !== "base" ? "flex" : "none") ?? ""}`);
  }), V(e, i);
}
ie(Od, {}, [], [], !0);
var vy = /* @__PURE__ */ se("<!> <!> <!>", 1), py = /* @__PURE__ */ se('<div style="position: relative; height: 100%; width: 100%"><!> <!></div>');
function Dd(e, t) {
  ce(t, !0);
  const n = w(t, "onInit", 7), r = Wn(), o = Ye();
  n()(r), console.log("svelteFlow: ", r), window.svelteFlow = r, console.log("xyStore: ", o), console.log("xyStore nodeLookup: ", X(o.nodeLookup));
  function i(x) {
    console.log("onNodeDragStart: ", x);
  }
  const s = (x) => {
    x.preventDefault(), x.dataTransfer && (x.dataTransfer.dropEffect = "move");
  }, a = (x) => {
    var m;
    x.preventDefault();
    const C = r.screenToFlowPosition({
      x: x.clientX - 250,
      y: x.clientY - 100
    }), S = (m = x.dataTransfer) == null ? void 0 : m.getData("application/tinyflow"), p = S ? JSON.parse(S) : {}, b = {
      id: `node_${po()}`,
      position: C,
      data: {},
      ...p
    };
    qo.addNode(b), qo.selectNodeOnly(b.id);
  }, l = (x) => {
    console.log("onconnect: ", x);
  }, u = (x, C) => {
    console.log("onconnectend: ", x, C);
  }, c = (x, C) => {
    console.log("onconnectstart: ", x, C);
  };
  var f = py(), d = Q(f);
  Od(d);
  var g = U(d, 2);
  const v = /* @__PURE__ */ Fe(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: uo.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  return Zc(g, Vt({ nodeTypes: cy }, qo, {
    class: "tinyflow-logo",
    onconnect: l,
    onconnectend: u,
    onconnectstart: c,
    get defaultEdgeOptions() {
      return h(v);
    },
    $$events: {
      nodedragstart: i,
      drop: a,
      dragover: s
    },
    children: (x, C) => {
      var S = vy(), p = we(S);
      rd(p, {});
      var b = U(p, 2);
      ed(b, {});
      var m = U(b, 2);
      id(m, {}), V(x, S);
    },
    $$slots: { default: !0 }
  })), G(f), V(e, f), de({
    get onInit() {
      return n();
    },
    set onInit(x) {
      n(x), y();
    }
  });
}
ie(Dd, { onInit: {} }, [], [], !0);
function my(e, t) {
  ce(t, !0);
  const n = w(t, "options", 7), r = w(t, "onInit", 7), { data: o } = n();
  return qo.init(o.nodes, o.edges), Er("tinyflow_options", n()), qc(e, {
    fitView: !0,
    children: (i, s) => {
      Dd(i, {
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
customElements.define("tinyflow-component", ie(my, { options: {}, onInit: {} }, [], [], !1));
export {
  Cy as Tinyflow
};
