const Id = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Id);
const as = 1, ls = 2, vl = 4, zd = 8, Rd = 16, Bd = 1, qd = 2, pl = 4, Kd = 8, Fd = 16, ml = 1, Zd = 2, cs = "[", us = "[!", ds = "]", Kn = {}, it = Symbol(), Yd = "http://www.w3.org/1999/xhtml", Wd = "http://www.w3.org/2000/svg", Xd = "@attach", oa = !1;
var Ur = Array.isArray, jd = Array.prototype.indexOf, fs = Array.from, Mo = Object.keys, Oo = Object.defineProperty, dn = Object.getOwnPropertyDescriptor, yl = Object.getOwnPropertyDescriptors, wl = Object.prototype, Gd = Array.prototype, ei = Object.getPrototypeOf, ia = Object.isExtensible;
function Sr(e) {
  return typeof e == "function";
}
const rt = () => {
};
function Ud(e) {
  return e();
}
function Vo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function ct(e, t, n = !1) {
  return e === void 0 ? n ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
function Jr(e, t) {
  if (Array.isArray(e))
    return e;
  if (t === void 0 || !(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const Et = 2, gs = 4, Qr = 8, hs = 16, yn = 32, er = 64, vs = 128, Ct = 256, Ho = 512, St = 1024, hn = 2048, tr = 4096, fn = 8192, ti = 16384, _l = 32768, br = 65536, sa = 1 << 17, Jd = 1 << 18, xl = 1 << 19, Vi = 1 << 20, ps = 1 << 21, Wt = Symbol("$state"), ms = Symbol("legacy props"), Qd = Symbol(""), bl = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), ef = 1, ys = 3, dr = 8;
function Cl(e) {
  return e === this.v;
}
function kl(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function El(e) {
  return !kl(e, this.v);
}
function tf(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function nf() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function rf(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function of() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function sf() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function af(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function lf() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function cf() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function uf() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Cr = !1, df = !1;
function ff() {
  Cr = !0;
}
const gf = [];
function Sl(e, t = !1) {
  return Co(e, /* @__PURE__ */ new Map(), "", gf);
}
function Co(e, t, n, r, o = null) {
  if (typeof e == "object" && e !== null) {
    var i = t.get(e);
    if (i !== void 0) return i;
    if (e instanceof Map) return (
      /** @type {Snapshot<T>} */
      new Map(e)
    );
    if (e instanceof Set) return (
      /** @type {Snapshot<T>} */
      new Set(e)
    );
    if (Ur(e)) {
      var s = (
        /** @type {Snapshot<any>} */
        Array(e.length)
      );
      t.set(e, s), o !== null && t.set(o, s);
      for (var a = 0; a < e.length; a += 1) {
        var l = e[a];
        a in e && (s[a] = Co(l, t, n, r));
      }
      return s;
    }
    if (ei(e) === wl) {
      s = {}, t.set(e, s), o !== null && t.set(o, s);
      for (var u in e)
        s[u] = Co(e[u], t, n, r);
      return s;
    }
    if (e instanceof Date)
      return (
        /** @type {Snapshot<T>} */
        structuredClone(e)
      );
    if (typeof /** @type {T & { toJSON?: any } } */
    e.toJSON == "function")
      return Co(
        /** @type {T & { toJSON(): any } } */
        e.toJSON(),
        t,
        n,
        r,
        // Associate the instance with the toJSON clone
        e
      );
  }
  if (e instanceof EventTarget)
    return (
      /** @type {Snapshot<T>} */
      e
    );
  try {
    return (
      /** @type {Snapshot<T>} */
      structuredClone(e)
    );
  } catch {
    return (
      /** @type {Snapshot<T>} */
      e
    );
  }
}
function ws(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let Re = null;
function aa(e) {
  Re = e;
}
function Dn(e) {
  return (
    /** @type {T} */
    Nl().get(e)
  );
}
function fr(e, t) {
  return Nl().set(e, t), t;
}
function ie(e, t = !1, n) {
  Re = {
    p: Re,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  }, Cr && !t && (Re.l = {
    s: null,
    u: null,
    r1: [],
    r2: Xn(!1)
  });
}
function se(e) {
  var t = (
    /** @type {ComponentContext} */
    Re
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Il(r);
  }
  return e !== void 0 && (t.x = e), Re = t.p, e ?? /** @type {T} */
  {};
}
function ni() {
  return !Cr || Re !== null && Re.l === null;
}
function Nl(e) {
  return Re === null && ws(), Re.c ??= new Map(hf(Re) || void 0);
}
function hf(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function Mt(e) {
  if (typeof e != "object" || e === null || Wt in e)
    return e;
  const t = ei(e);
  if (t !== wl && t !== Gd)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Ur(e), o = /* @__PURE__ */ Ne(0), i = Yn, s = (a) => {
    if (Yn === i)
      return a();
    var l = He, u = Yn;
    Mn(null), da(i);
    var d = a();
    return Mn(l), da(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ Ne(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && lf();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var g = /* @__PURE__ */ Ne(u.value);
          return n.set(l, g), g;
        }) : Z(d, u.value, !0), !0;
      },
      deleteProperty(a, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in a) {
            const f = s(() => /* @__PURE__ */ Ne(it));
            n.set(l, f), ko(o);
          }
        } else {
          if (r && typeof l == "string") {
            var d = (
              /** @type {Source<number>} */
              n.get("length")
            ), g = Number(l);
            Number.isInteger(g) && g < d.v && Z(d, g);
          }
          Z(u, it), ko(o);
        }
        return !0;
      },
      get(a, l, u) {
        if (l === Wt)
          return e;
        var d = n.get(l), g = l in a;
        if (d === void 0 && (!g || dn(a, l)?.writable) && (d = s(() => {
          var h = Mt(g ? a[l] : it), v = /* @__PURE__ */ Ne(h);
          return v;
        }), n.set(l, d)), d !== void 0) {
          var f = c(d);
          return f === it ? void 0 : f;
        }
        return Reflect.get(a, l, u);
      },
      getOwnPropertyDescriptor(a, l) {
        var u = Reflect.getOwnPropertyDescriptor(a, l);
        if (u && "value" in u) {
          var d = n.get(l);
          d && (u.value = c(d));
        } else if (u === void 0) {
          var g = n.get(l), f = g?.v;
          if (g !== void 0 && f !== it)
            return {
              enumerable: !0,
              configurable: !0,
              value: f,
              writable: !0
            };
        }
        return u;
      },
      has(a, l) {
        if (l === Wt)
          return !0;
        var u = n.get(l), d = u !== void 0 && u.v !== it || Reflect.has(a, l);
        if (u !== void 0 || Ae !== null && (!d || dn(a, l)?.writable)) {
          u === void 0 && (u = s(() => {
            var f = d ? Mt(a[l]) : it, h = /* @__PURE__ */ Ne(f);
            return h;
          }), n.set(l, u));
          var g = c(u);
          if (g === it)
            return !1;
        }
        return d;
      },
      set(a, l, u, d) {
        var g = n.get(l), f = l in a;
        if (r && l === "length")
          for (var h = u; h < /** @type {Source<number>} */
          g.v; h += 1) {
            var v = n.get(h + "");
            v !== void 0 ? Z(v, it) : h in a && (v = s(() => /* @__PURE__ */ Ne(it)), n.set(h + "", v));
          }
        if (g === void 0)
          (!f || dn(a, l)?.writable) && (g = s(() => /* @__PURE__ */ Ne(void 0)), Z(g, Mt(u)), n.set(l, g));
        else {
          f = g.v !== it;
          var y = s(() => Mt(u));
          Z(g, y);
        }
        var k = Reflect.getOwnPropertyDescriptor(a, l);
        if (k?.set && k.set.call(d, u), !f) {
          if (r && typeof l == "string") {
            var w = (
              /** @type {Source<number>} */
              n.get("length")
            ), T = Number(l);
            Number.isInteger(T) && T >= w.v && Z(w, T + 1);
          }
          ko(o);
        }
        return !0;
      },
      ownKeys(a) {
        c(o);
        var l = Reflect.ownKeys(a).filter((g) => {
          var f = n.get(g);
          return f === void 0 || f.v !== it;
        });
        for (var [u, d] of n)
          d.v !== it && !(u in a) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        cf();
      }
    }
  );
}
function la(e) {
  try {
    if (e !== null && typeof e == "object" && Wt in e)
      return e[Wt];
  } catch {
  }
  return e;
}
function vf(e, t) {
  return Object.is(la(e), la(t));
}
// @__NO_SIDE_EFFECTS__
function kr(e) {
  var t = Et | hn, n = He !== null && (He.f & Et) !== 0 ? (
    /** @type {Derived} */
    He
  ) : null;
  return Ae === null || n !== null && (n.f & Ct) !== 0 ? t |= Ct : Ae.f |= xl, {
    ctx: Re,
    deps: null,
    effects: null,
    equals: Cl,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      it
    ),
    wv: 0,
    parent: n ?? Ae,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function N(e) {
  const t = /* @__PURE__ */ kr(e);
  return jl(t), t;
}
// @__NO_SIDE_EFFECTS__
function _s(e) {
  const t = /* @__PURE__ */ kr(e);
  return t.equals = El, t;
}
function Pl(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      mt(
        /** @type {Effect} */
        t[n]
      );
  }
}
function pf(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & Et) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function xs(e) {
  var t, n = Ae;
  On(pf(e));
  try {
    Pl(e), t = Jl(e);
  } finally {
    On(n);
  }
  return t;
}
function Tl(e) {
  var t = xs(e);
  if (e.equals(t) || (e.v = t, e.wv = Gl()), !An) {
    var n = (Nn || (e.f & Ct) !== 0) && e.deps !== null ? tr : St;
    Qt(e, n);
  }
}
const Fn = /* @__PURE__ */ new Map();
function Xn(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Cl,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Ne(e, t) {
  const n = Xn(e);
  return jl(n), n;
}
// @__NO_SIDE_EFFECTS__
function Dl(e, t = !1, n = !0) {
  const r = Xn(e);
  return t || (r.equals = El), Cr && n && Re !== null && Re.l !== null && (Re.l.s ??= []).push(r), r;
}
function Z(e, t, n = !1) {
  He !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ht || (He.f & sa) !== 0) && ni() && (He.f & (Et | hs | sa)) !== 0 && !gn?.includes(e) && uf();
  let r = n ? Mt(t) : t;
  return Hi(e, r);
}
function Hi(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    An ? Fn.set(e, t) : Fn.set(e, n), e.v = t, (e.f & Et) !== 0 && ((e.f & hn) !== 0 && xs(
      /** @type {Derived} */
      e
    ), Qt(e, (e.f & Ct) === 0 ? St : tr)), e.wv = Gl(), Al(e, hn), ni() && Ae !== null && (Ae.f & St) !== 0 && (Ae.f & (yn | er)) === 0 && (Dt === null ? Sf([e]) : Dt.push(e));
  }
  return t;
}
function ca(e, t = 1) {
  var n = c(e), r = t === 1 ? n++ : n--;
  return Z(e, n), r;
}
function ko(e) {
  Z(e, e.v + 1);
}
function Al(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = ni(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      (a & hn) === 0 && (!r && s === Ae || (Qt(s, t), (a & (St | Ct)) !== 0 && ((a & Et) !== 0 ? Al(
        /** @type {Derived} */
        s,
        tr
      ) : oi(
        /** @type {Effect} */
        s
      ))));
    }
}
function eo(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function mf() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
let Ce = !1;
function bt(e) {
  Ce = e;
}
let Pe;
function at(e) {
  if (e === null)
    throw eo(), Kn;
  return Pe = e;
}
function vn() {
  return at(
    /** @type {TemplateNode} */
    /* @__PURE__ */ nn(Pe)
  );
}
function I(e) {
  if (Ce) {
    if (/* @__PURE__ */ nn(Pe) !== null)
      throw eo(), Kn;
    Pe = e;
  }
}
function ye(e = 1) {
  if (Ce) {
    for (var t = e, n = Pe; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ nn(n);
    Pe = n;
  }
}
function Li() {
  for (var e = 0, t = Pe; ; ) {
    if (t.nodeType === dr) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === ds) {
        if (e === 0) return t;
        e -= 1;
      } else (n === cs || n === us) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ nn(t)
    );
    t.remove(), t = r;
  }
}
function Ml(e) {
  if (!e || e.nodeType !== dr)
    throw eo(), Kn;
  return (
    /** @type {Comment} */
    e.data
  );
}
var gt, Ol, Vl, Hl;
function $i() {
  if (gt === void 0) {
    gt = window, Ol = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Vl = dn(t, "firstChild").get, Hl = dn(t, "nextSibling").get, ia(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), ia(n) && (n.__t = void 0);
  }
}
function pn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Qe(e) {
  return Vl.call(e);
}
// @__NO_SIDE_EFFECTS__
function nn(e) {
  return Hl.call(e);
}
function z(e, t) {
  if (!Ce)
    return /* @__PURE__ */ Qe(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Qe(Pe)
  );
  if (n === null)
    n = Pe.appendChild(pn());
  else if (t && n.nodeType !== ys) {
    var r = pn();
    return n?.before(r), at(r), r;
  }
  return at(n), n;
}
function le(e, t) {
  if (!Ce) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Qe(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ nn(n) : n;
  }
  return Pe;
}
function V(e, t = 1, n = !1) {
  let r = Ce ? Pe : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ nn(r);
  if (!Ce)
    return r;
  if (n && r?.nodeType !== ys) {
    var i = pn();
    return r === null ? o?.after(i) : r.before(i), at(i), i;
  }
  return at(r), /** @type {TemplateNode} */
  r;
}
function bs(e) {
  e.textContent = "";
}
function Ll(e) {
  Ae === null && He === null && rf(), He !== null && (He.f & Ct) !== 0 && Ae === null && nf(), An && tf();
}
function yf(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function wn(e, t, n, r = !0) {
  var o = Ae, i = {
    ctx: Re,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | hn,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: o,
    b: o && o.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (n)
    try {
      Es(i), i.f |= _l;
    } catch (l) {
      throw mt(i), l;
    }
  else t !== null && oi(i);
  var s = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (xl | vs)) === 0;
  if (!s && r && (o !== null && yf(i, o), He !== null && (He.f & Et) !== 0)) {
    var a = (
      /** @type {Derived} */
      He
    );
    (a.effects ??= []).push(i);
  }
  return i;
}
function wf() {
  return He !== null && !Ht;
}
function $l(e) {
  const t = wn(Qr, null, !1);
  return Qt(t, St), t.teardown = e, t;
}
function We(e) {
  if (Ll(), !He && Ae && (Ae.f & yn) !== 0) {
    var t = (
      /** @type {ComponentContext} */
      Re
    );
    (t.e ??= []).push(e);
  } else
    return Il(e);
}
function Il(e) {
  return wn(gs | ps, e, !1);
}
function zl(e) {
  return Ll(), wn(Qr | ps, e, !0);
}
function Cs(e) {
  const t = wn(er, e, !0);
  return () => {
    mt(t);
  };
}
function _f(e) {
  const t = wn(er, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? gr(t, () => {
      mt(t), r(void 0);
    }) : (mt(t), r(void 0));
  });
}
function to(e) {
  return wn(gs, e, !1);
}
function no(e) {
  return wn(Qr, e, !0);
}
function ke(e, t = [], n = kr) {
  const r = t.map(n);
  return $n(() => e(...r.map(c)));
}
function $n(e, t = 0) {
  var n = wn(Qr | hs | t, e, !0);
  return n;
}
function Jt(e, t = !0) {
  return wn(Qr | yn, e, !0, t);
}
function Rl(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = An, r = He;
    ua(!0), Mn(null);
    try {
      t.call(null);
    } finally {
      ua(n), Mn(r);
    }
  }
}
function Bl(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    n.ac?.abort(bl);
    var r = n.next;
    (n.f & er) !== 0 ? n.parent = null : mt(n, t), n = r;
  }
}
function xf(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & yn) === 0 && mt(t), t = n;
  }
}
function mt(e, t = !0) {
  var n = !1;
  (t || (e.f & Jd) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (ql(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), Bl(e, t && !n), $o(e, 0), Qt(e, ti);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  Rl(e);
  var o = e.parent;
  o !== null && o.first !== null && Kl(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function ql(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ nn(e)
    );
    e.remove(), e = n;
  }
}
function Kl(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function gr(e, t) {
  var n = [];
  ks(e, n, !0), Fl(n, () => {
    mt(e), t && t();
  });
}
function Fl(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function ks(e, t, n) {
  if ((e.f & fn) === 0) {
    if (e.f ^= fn, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & br) !== 0 || (r.f & yn) !== 0;
      ks(r, t, i ? n : !1), r = o;
    }
  }
}
function Hr(e) {
  Zl(e, !0);
}
function Zl(e, t) {
  if ((e.f & fn) !== 0) {
    e.f ^= fn;
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & br) !== 0 || (n.f & yn) !== 0;
      Zl(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
const bf = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Lr = [], $r = [];
function Yl() {
  var e = Lr;
  Lr = [], Vo(e);
}
function Wl() {
  var e = $r;
  $r = [], Vo(e);
}
function ro(e) {
  Lr.length === 0 && queueMicrotask(Yl), Lr.push(e);
}
function Cf(e) {
  $r.length === 0 && bf(Wl), $r.push(e);
}
function kf() {
  Lr.length > 0 && Yl(), $r.length > 0 && Wl();
}
function Ef(e) {
  var t = (
    /** @type {Effect} */
    Ae
  );
  if ((t.f & _l) === 0) {
    if ((t.f & vs) === 0)
      throw e;
    t.fn(e);
  } else
    Xl(e, t);
}
function Xl(e, t) {
  for (; t !== null; ) {
    if ((t.f & vs) !== 0)
      try {
        t.b.error(e);
        return;
      } catch {
      }
    t = t.parent;
  }
  throw e;
}
let Ir = !1, zr = null, Zn = !1, An = !1;
function ua(e) {
  An = e;
}
let Or = [];
let He = null, Ht = !1;
function Mn(e) {
  He = e;
}
let Ae = null;
function On(e) {
  Ae = e;
}
let gn = null;
function jl(e) {
  He !== null && He.f & Vi && (gn === null ? gn = [e] : gn.push(e));
}
let ut = null, xt = 0, Dt = null;
function Sf(e) {
  Dt = e;
}
let Lo = 1, Rr = 0, Yn = Rr;
function da(e) {
  Yn = e;
}
let Nn = !1;
function Gl() {
  return ++Lo;
}
function ri(e) {
  var t = e.f;
  if ((t & hn) !== 0)
    return !0;
  if ((t & tr) !== 0) {
    var n = e.deps, r = (t & Ct) !== 0;
    if (n !== null) {
      var o, i, s = (t & Ho) !== 0, a = r && Ae !== null && !Nn, l = n.length;
      if (s || a) {
        var u = (
          /** @type {Derived} */
          e
        ), d = u.parent;
        for (o = 0; o < l; o++)
          i = n[o], (s || !i?.reactions?.includes(u)) && (i.reactions ??= []).push(u);
        s && (u.f ^= Ho), a && d !== null && (d.f & Ct) === 0 && (u.f ^= Ct);
      }
      for (o = 0; o < l; o++)
        if (i = n[o], ri(
          /** @type {Derived} */
          i
        ) && Tl(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!r || Ae !== null && !Nn) && Qt(e, St);
  }
  return !1;
}
function Ul(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !gn?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & Et) !== 0 ? Ul(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? Qt(i, hn) : (i.f & St) !== 0 && Qt(i, tr), oi(
        /** @type {Effect} */
        i
      ));
    }
}
function Jl(e) {
  var t = ut, n = xt, r = Dt, o = He, i = Nn, s = gn, a = Re, l = Ht, u = Yn, d = e.f;
  ut = /** @type {null | Value[]} */
  null, xt = 0, Dt = null, Nn = (d & Ct) !== 0 && (Ht || !Zn || He === null), He = (d & (yn | er)) === 0 ? e : null, gn = null, aa(e.ctx), Ht = !1, Yn = ++Rr, e.f |= Vi, e.ac !== null && (e.ac.abort(bl), e.ac = null);
  try {
    var g = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (ut !== null) {
      var h;
      if ($o(e, xt), f !== null && xt > 0)
        for (f.length = xt + ut.length, h = 0; h < ut.length; h++)
          f[xt + h] = ut[h];
      else
        e.deps = f = ut;
      if (!Nn || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (d & Et) !== 0 && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (h = xt; h < f.length; h++)
          (f[h].reactions ??= []).push(e);
    } else f !== null && xt < f.length && ($o(e, xt), f.length = xt);
    if (ni() && Dt !== null && !Ht && f !== null && (e.f & (Et | tr | hn)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      Dt.length; h++)
        Ul(
          Dt[h],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (Rr++, Dt !== null && (r === null ? r = Dt : r.push(.../** @type {Source[]} */
    Dt))), g;
  } catch (v) {
    Ef(v);
  } finally {
    ut = t, xt = n, Dt = r, He = o, Nn = i, gn = s, aa(a), Ht = l, Yn = u, e.f ^= Vi;
  }
}
function Nf(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = jd.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & Et) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ut === null || !ut.includes(t)) && (Qt(t, tr), (t.f & (Ct | Ho)) === 0 && (t.f ^= Ho), Pl(
    /** @type {Derived} **/
    t
  ), $o(
    /** @type {Derived} **/
    t,
    0
  ));
}
function $o(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Nf(e, n[r]);
}
function Es(e) {
  var t = e.f;
  if ((t & ti) === 0) {
    Qt(e, St);
    var n = Ae, r = Zn;
    Ae = e, Zn = !0;
    try {
      (t & hs) !== 0 ? xf(e) : Bl(e), Rl(e);
      var o = Jl(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = Lo;
      var i;
      oa && df && (e.f & hn) !== 0 && e.deps;
    } finally {
      Zn = r, Ae = n;
    }
  }
}
function Pf() {
  try {
    of();
  } catch (e) {
    if (zr !== null)
      Xl(e, zr);
    else
      throw e;
  }
}
function Ql() {
  var e = Zn;
  try {
    var t = 0;
    for (Zn = !0; Or.length > 0; ) {
      t++ > 1e3 && Pf();
      var n = Or, r = n.length;
      Or = [];
      for (var o = 0; o < r; o++) {
        var i = Df(n[o]);
        Tf(i);
      }
      Fn.clear();
    }
  } finally {
    Ir = !1, Zn = e, zr = null;
  }
}
function Tf(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if ((r.f & (ti | fn)) === 0 && ri(r)) {
        var o = Lo;
        if (Es(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? Kl(r) : r.fn = null), Lo > o && (r.f & ps) !== 0)
          break;
      }
    }
    for (; n < t; n += 1)
      oi(e[n]);
  }
}
function oi(e) {
  Ir || (Ir = !0, queueMicrotask(Ql));
  for (var t = zr = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if ((n & (er | yn)) !== 0) {
      if ((n & St) === 0) return;
      t.f ^= St;
    }
  }
  Or.push(t);
}
function Df(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, o = (r & (yn | er)) !== 0, i = o && (r & St) !== 0;
    if (!i && (r & fn) === 0) {
      (r & gs) !== 0 ? t.push(n) : o ? n.f ^= St : ri(n) && Es(n);
      var s = n.first;
      if (s !== null) {
        n = s;
        continue;
      }
    }
    var a = n.parent;
    for (n = n.next; n === null && a !== null; )
      n = a.next, a = a.parent;
  }
  return t;
}
function p(e) {
  for (var t; ; ) {
    if (kf(), Or.length === 0)
      return Ir = !1, zr = null, /** @type {T} */
      t;
    Ir = !0, Ql();
  }
}
async function Af() {
  await Promise.resolve(), p();
}
function c(e) {
  var t = e.f, n = (t & Et) !== 0;
  if (He !== null && !Ht) {
    if (!gn?.includes(e)) {
      var r = He.deps;
      e.rv < Rr && (e.rv = Rr, ut === null && r !== null && r[xt] === e ? xt++ : ut === null ? ut = [e] : (!Nn || !ut.includes(e)) && ut.push(e));
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), i = o.parent;
    i !== null && (i.f & Ct) === 0 && (o.f ^= Ct);
  }
  if (n && !An && (o = /** @type {Derived} */
  e, ri(o) && Tl(o)), An) {
    if (Fn.has(e))
      return Fn.get(e);
    if (n) {
      o = /** @type {Derived} */
      e;
      var s = o.v;
      return ((o.f & St) !== 0 || ec(o)) && (s = xs(o)), Fn.set(o, s), s;
    }
  }
  return e.v;
}
function ec(e) {
  if (e.v === it) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Fn.has(t) || (t.f & Et) !== 0 && ec(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function nt(e) {
  var t = Ht;
  try {
    return Ht = !0, e();
  } finally {
    Ht = t;
  }
}
const Mf = -7169;
function Qt(e, t) {
  e.f = e.f & Mf | t;
}
function Of(e, t) {
  var n = {};
  for (var r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}
function Ss(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Wt in e)
      Ii(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Wt in n && Ii(n);
      }
  }
}
function Ii(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        Ii(e[r], t);
      } catch {
      }
    const n = ei(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = yl(n);
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
function Vf(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, ro(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function Hf(e) {
  Ce && /* @__PURE__ */ Qe(e) !== null && bs(e);
}
let fa = !1;
function Lf() {
  fa || (fa = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        if (!e.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            t.__on_r?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function $f(e) {
  var t = He, n = Ae;
  Mn(null), On(null);
  try {
    return e();
  } finally {
    Mn(t), On(n);
  }
}
const tc = /* @__PURE__ */ new Set(), zi = /* @__PURE__ */ new Set();
function Ns(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || Tr.call(t, i), !i.cancelBubble)
      return $f(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? ro(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function Ri(e, t, n, r = {}) {
  var o = Ns(t, e, n, r);
  return () => {
    e.removeEventListener(t, o, r);
  };
}
function ga(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = Ns(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && $l(() => {
    t.removeEventListener(e, s, i);
  });
}
function _n(e) {
  for (var t = 0; t < e.length; t++)
    tc.add(e[t]);
  for (var n of zi)
    n(e);
}
function Tr(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, o = e.composedPath?.() || [], i = (
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
    Oo(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = He, g = Ae;
    Mn(null), On(null);
    try {
      for (var f, h = []; i !== null; ) {
        var v = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var y = i["__" + r];
          if (y != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (Ur(y)) {
              var [k, ...w] = y;
              k.apply(i, [e, ...w]);
            } else
              y.call(i, e);
        } catch (T) {
          f ? h.push(T) : f = T;
        }
        if (e.cancelBubble || v === t || v === null)
          break;
        i = v;
      }
      if (f) {
        for (let T of h)
          queueMicrotask(() => {
            throw T;
          });
        throw f;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Mn(d), On(g);
    }
  }
}
function Ps(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function pt(e, t) {
  var n = (
    /** @type {Effect} */
    Ae
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function X(e, t) {
  var n = (t & ml) !== 0, r = (t & Zd) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (Ce)
      return pt(Pe, null), Pe;
    o === void 0 && (o = Ps(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ Qe(o)));
    var s = (
      /** @type {TemplateNode} */
      r || Ol ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Qe(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      pt(a, l);
    } else
      pt(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function If(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & ml) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (Ce)
      return pt(Pe, null), Pe;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Ps(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ Qe(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ Qe(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ Qe(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ Qe(l);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Qe(u)
      ), g = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      pt(d, g);
    } else
      pt(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function me(e, t) {
  return /* @__PURE__ */ If(e, t, "svg");
}
function Ee(e = "") {
  if (!Ce) {
    var t = pn(e + "");
    return pt(t, t), t;
  }
  var n = Pe;
  return n.nodeType !== ys && (n.before(n = pn()), at(n)), pt(n, n), n;
}
function Me() {
  if (Ce)
    return pt(Pe, null), Pe;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = pn();
  return e.append(t, n), pt(t, n), e;
}
function O(e, t) {
  if (Ce) {
    Ae.nodes_end = Pe, vn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function zf(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const Rf = [
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
function Bf(e) {
  return Rf.includes(e);
}
const qf = {
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
function Kf(e) {
  return e = e.toLowerCase(), qf[e] ?? e;
}
const Ff = ["touchstart", "touchmove"];
function Zf(e) {
  return Ff.includes(e);
}
const Yf = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function Wf(e) {
  return Yf.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function $e(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function nc(e, t) {
  return rc(e, t);
}
function Xf(e, t) {
  $i(), t.intro = t.intro ?? !1;
  const n = t.target, r = Ce, o = Pe;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Qe(n)
    ); i && (i.nodeType !== dr || /** @type {Comment} */
    i.data !== cs); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ nn(i);
    if (!i)
      throw Kn;
    bt(!0), at(
      /** @type {Comment} */
      i
    ), vn();
    const s = rc(e, { ...t, anchor: i });
    if (Pe === null || Pe.nodeType !== dr || /** @type {Comment} */
    Pe.data !== ds)
      throw eo(), Kn;
    return bt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === Kn)
      return t.recover === !1 && sf(), $i(), bs(n), bt(!1), nc(e, t);
    throw s;
  } finally {
    bt(r), at(o);
  }
}
const rr = /* @__PURE__ */ new Map();
function rc(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  $i();
  var a = /* @__PURE__ */ new Set(), l = (g) => {
    for (var f = 0; f < g.length; f++) {
      var h = g[f];
      if (!a.has(h)) {
        a.add(h);
        var v = Zf(h);
        t.addEventListener(h, Tr, { passive: v });
        var y = rr.get(h);
        y === void 0 ? (document.addEventListener(h, Tr, { passive: v }), rr.set(h, 1)) : rr.set(h, y + 1);
      }
    }
  };
  l(fs(tc)), zi.add(l);
  var u = void 0, d = _f(() => {
    var g = n ?? t.appendChild(pn());
    return Jt(() => {
      if (i) {
        ie({});
        var f = (
          /** @type {ComponentContext} */
          Re
        );
        f.c = i;
      }
      o && (r.$$events = o), Ce && pt(
        /** @type {TemplateNode} */
        g,
        null
      ), u = e(g, r) || {}, Ce && (Ae.nodes_end = Pe), i && se();
    }), () => {
      for (var f of a) {
        t.removeEventListener(f, Tr);
        var h = (
          /** @type {number} */
          rr.get(f)
        );
        --h === 0 ? (document.removeEventListener(f, Tr), rr.delete(f)) : rr.set(f, h);
      }
      zi.delete(l), g !== n && g.parentNode?.removeChild(g);
    };
  });
  return Bi.set(u, d), u;
}
let Bi = /* @__PURE__ */ new WeakMap();
function jf(e, t) {
  const n = Bi.get(e);
  return n ? (Bi.delete(e), n(t)) : Promise.resolve();
}
function Xe(e, t, ...n) {
  var r = e, o = rt, i;
  $n(() => {
    o !== (o = t()) && (i && (mt(i), i = null), i = Jt(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, br), Ce && (r = Pe);
}
function In(e) {
  Re === null && ws(), Cr && Re.l !== null ? Gf(Re).m.push(e) : We(() => {
    const t = nt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function ii(e) {
  Re === null && ws(), In(() => () => nt(e));
}
function Gf(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
function oe(e, t, [n, r] = [0, 0]) {
  Ce && n === 0 && vn();
  var o = e, i = null, s = null, a = it, l = n > 0 ? br : 0, u = !1;
  const d = (f, h = !0) => {
    u = !0, g(h, f);
  }, g = (f, h) => {
    if (a === (a = f)) return;
    let v = !1;
    if (Ce && r !== -1) {
      if (n === 0) {
        const k = Ml(o);
        k === cs ? r = 0 : k === us ? r = 1 / 0 : (r = parseInt(k.substring(1)), r !== r && (r = a ? 1 / 0 : -1));
      }
      const y = r > n;
      !!a === y && (o = Li(), at(o), bt(!1), v = !0, r = -1);
    }
    a ? (i ? Hr(i) : h && (i = Jt(() => h(o))), s && gr(s, () => {
      s = null;
    })) : (s ? Hr(s) : h && (s = Jt(() => h(o, [n + 1, r]))), i && gr(i, () => {
      i = null;
    })), v && bt(!0);
  };
  $n(() => {
    u = !1, t(d), u || g(null, null);
  }, l), Ce && (o = Pe);
}
function Uf(e, t) {
  Ce && at(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Qe(e)
  ), no(() => {
    var n = t();
    for (var r in n) {
      var o = n[r];
      o ? e.style.setProperty(r, o) : e.style.removeProperty(r);
    }
  });
}
function hr(e, t) {
  return t;
}
function Jf(e, t, n, r) {
  for (var o = [], i = t.length, s = 0; s < i; s++)
    ks(t[s].e, o, !0);
  var a = i > 0 && o.length === 0 && n !== null;
  if (a) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    bs(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), En(e, t[0].prev, t[i - 1].next);
  }
  Fl(o, () => {
    for (var u = 0; u < i; u++) {
      var d = t[u];
      a || (r.delete(d.k), En(e, d.prev, d.next)), mt(d.e, !a);
    }
  });
}
function lt(e, t, n, r, o, i = null) {
  var s = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & vl) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    s = Ce ? at(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Qe(u)
    ) : u.appendChild(pn());
  }
  Ce && vn();
  var d = null, g = !1, f = /* @__PURE__ */ _s(() => {
    var h = n();
    return Ur(h) ? h : h == null ? [] : fs(h);
  });
  $n(() => {
    var h = c(f), v = h.length;
    if (g && v === 0)
      return;
    g = v === 0;
    let y = !1;
    if (Ce) {
      var k = Ml(s) === us;
      k !== (v === 0) && (s = Li(), at(s), bt(!1), y = !0);
    }
    if (Ce) {
      for (var w = null, T, x = 0; x < v; x++) {
        if (Pe.nodeType === dr && /** @type {Comment} */
        Pe.data === ds) {
          s = /** @type {Comment} */
          Pe, y = !0, bt(!1);
          break;
        }
        var b = h[x], E = r(b, x);
        T = oc(
          Pe,
          a,
          w,
          null,
          b,
          E,
          x,
          o,
          t,
          n
        ), a.items.set(E, T), w = T;
      }
      v > 0 && at(Li());
    }
    Ce || Qf(h, a, s, o, t, r, n), i !== null && (v === 0 ? d ? Hr(d) : d = Jt(() => i(s)) : d !== null && gr(d, () => {
      d = null;
    })), y && bt(!0), c(f);
  }), Ce && (s = Pe);
}
function Qf(e, t, n, r, o, i, s) {
  var a = (o & zd) !== 0, l = (o & (as | ls)) !== 0, u = e.length, d = t.items, g = t.first, f = g, h, v = null, y, k = [], w = [], T, x, b, E;
  if (a)
    for (E = 0; E < u; E += 1)
      T = e[E], x = i(T, E), b = d.get(x), b !== void 0 && (b.a?.measure(), (y ??= /* @__PURE__ */ new Set()).add(b));
  for (E = 0; E < u; E += 1) {
    if (T = e[E], x = i(T, E), b = d.get(x), b === void 0) {
      var M = f ? (
        /** @type {TemplateNode} */
        f.e.nodes_start
      ) : n;
      v = oc(
        M,
        t,
        v,
        v === null ? t.first : v.next,
        T,
        x,
        E,
        r,
        o,
        s
      ), d.set(x, v), k = [], w = [], f = v.next;
      continue;
    }
    if (l && eg(b, T, E, o), (b.e.f & fn) !== 0 && (Hr(b.e), a && (b.a?.unfix(), (y ??= /* @__PURE__ */ new Set()).delete(b))), b !== f) {
      if (h !== void 0 && h.has(b)) {
        if (k.length < w.length) {
          var L = w[0], B;
          v = L.prev;
          var Y = k[0], U = k[k.length - 1];
          for (B = 0; B < k.length; B += 1)
            ha(k[B], L, n);
          for (B = 0; B < w.length; B += 1)
            h.delete(w[B]);
          En(t, Y.prev, U.next), En(t, v, Y), En(t, U, L), f = L, v = U, E -= 1, k = [], w = [];
        } else
          h.delete(b), ha(b, f, n), En(t, b.prev, b.next), En(t, b, v === null ? t.first : v.next), En(t, v, b), v = b;
        continue;
      }
      for (k = [], w = []; f !== null && f.k !== x; )
        (f.e.f & fn) === 0 && (h ??= /* @__PURE__ */ new Set()).add(f), w.push(f), f = f.next;
      if (f === null)
        continue;
      b = f;
    }
    k.push(b), v = b, f = b.next;
  }
  if (f !== null || h !== void 0) {
    for (var $ = h === void 0 ? [] : fs(h); f !== null; )
      (f.e.f & fn) === 0 && $.push(f), f = f.next;
    var S = $.length;
    if (S > 0) {
      var A = (o & vl) !== 0 && u === 0 ? n : null;
      if (a) {
        for (E = 0; E < S; E += 1)
          $[E].a?.measure();
        for (E = 0; E < S; E += 1)
          $[E].a?.fix();
      }
      Jf(t, $, A, d);
    }
  }
  a && ro(() => {
    if (y !== void 0)
      for (b of y)
        b.a?.apply();
  }), Ae.first = t.first && t.first.e, Ae.last = v && v.e;
}
function eg(e, t, n, r) {
  (r & as) !== 0 && Hi(e.v, t), (r & ls) !== 0 ? Hi(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function oc(e, t, n, r, o, i, s, a, l, u) {
  var d = (l & as) !== 0, g = (l & Rd) === 0, f = d ? g ? /* @__PURE__ */ Dl(o, !1, !1) : Xn(o) : o, h = (l & ls) === 0 ? s : Xn(s), v = {
    i: h,
    v: f,
    k: i,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    return v.e = Jt(() => a(e, f, h, u), Ce), v.e.prev = n && n.e, v.e.next = r && r.e, n === null ? t.first = v : (n.next = v, n.e.next = v.e), r !== null && (r.prev = v, r.e.prev = v.e), v;
  } finally {
  }
}
function ha(e, t, n) {
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
      /* @__PURE__ */ nn(i)
    );
    o.before(i), i = s;
  }
}
function En(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function Ts(e, t, n = !1, r = !1, o = !1) {
  var i = e, s = "";
  ke(() => {
    var a = (
      /** @type {Effect} */
      Ae
    );
    if (s === (s = t() ?? "")) {
      Ce && vn();
      return;
    }
    if (a.nodes_start !== null && (ql(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if (Ce) {
        Pe.data;
        for (var l = vn(), u = l; l !== null && (l.nodeType !== dr || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ nn(l);
        if (l === null)
          throw eo(), Kn;
        pt(Pe, u), i = at(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var g = Ps(d);
      if ((n || r) && (g = /** @type {Element} */
      /* @__PURE__ */ Qe(g)), pt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Qe(g),
        /** @type {TemplateNode} */
        g.lastChild
      ), n || r)
        for (; /* @__PURE__ */ Qe(g); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ Qe(g)
          );
      else
        i.before(g);
    }
  });
}
function Ds(e, t, n) {
  Ce && vn();
  var r = e, o, i;
  $n(() => {
    o !== (o = t()) && (i && (gr(i), i = null), o && (i = Jt(() => n(r, o))));
  }, br), Ce && (r = Pe);
}
function tg(e, t, n, r, o, i) {
  let s = Ce;
  Ce && vn();
  var a, l, u = null;
  Ce && Pe.nodeType === ef && (u = /** @type {Element} */
  Pe, vn());
  var d = (
    /** @type {TemplateNode} */
    Ce ? Pe : e
  ), g;
  $n(() => {
    const f = t() || null;
    var h = f === "svg" ? Wd : null;
    f !== a && (g && (f === null ? gr(g, () => {
      g = null, l = null;
    }) : f === l ? Hr(g) : mt(g)), f && f !== l && (g = Jt(() => {
      if (u = Ce ? (
        /** @type {Element} */
        u
      ) : h ? document.createElementNS(h, f) : document.createElement(f), pt(u, u), r) {
        Ce && Wf(f) && u.append(document.createComment(""));
        var v = (
          /** @type {TemplateNode} */
          Ce ? /* @__PURE__ */ Qe(u) : u.appendChild(pn())
        );
        Ce && (v === null ? bt(!1) : at(v)), r(u, v);
      }
      Ae.nodes_end = u, d.before(u);
    })), a = f, a && (l = a));
  }, br), s && (bt(!0), at(d));
}
function Oe(e, t) {
  ro(() => {
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
function st(e, t, n) {
  to(() => {
    var r = nt(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      no(() => {
        var s = n();
        Ss(s), o && kl(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function ng(e, t) {
  var n = void 0, r;
  $n(() => {
    n !== (n = t()) && (r && (mt(r), r = null), n && (r = Jt(() => {
      to(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function ic(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = ic(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function rg() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = ic(e)) && (r && (r += " "), r += t);
  return r;
}
function xn(e) {
  return typeof e == "object" ? rg(e) : e ?? "";
}
const va = [...` 	
\r\f \v\uFEFF`];
function og(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || va.includes(r[s - 1])) && (a === r.length || va.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function pa(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var o in e) {
    var i = e[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function _i(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function ig(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(_i)), o && l.push(...Object.keys(o).map(_i));
      var u = 0, d = -1;
      const y = e.length;
      for (var g = 0; g < y; g++) {
        var f = e[g];
        if (a ? f === "/" && e[g - 1] === "*" && (a = !1) : i ? i === f && (i = !1) : f === "/" && e[g + 1] === "*" ? a = !0 : f === '"' || f === "'" ? i = f : f === "(" ? s++ : f === ")" && s--, !a && i === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = g;
          else if (f === ";" || g === y - 1) {
            if (d !== -1) {
              var h = _i(e.substring(u, d).trim());
              if (!l.includes(h)) {
                f !== ";" && g++;
                var v = e.substring(u, g).trim();
                n += " " + v + ";";
              }
            }
            u = g + 1, d = -1;
          }
        }
      }
    }
    return r && (n += pa(r)), o && (n += pa(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function yt(e, t, n, r, o, i) {
  var s = e.__className;
  if (Ce || s !== n || s === void 0) {
    var a = og(n, r, i);
    (!Ce || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return i;
}
function xi(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function ft(e, t, n, r) {
  var o = e.__style;
  if (Ce || o !== t) {
    var i = ig(t, r);
    (!Ce || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (xi(e, n?.[0], r[0]), xi(e, n?.[1], r[1], "important")) : xi(e, n, r));
  return r;
}
function qi(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!Ur(t))
      return mf();
    for (var r of e.options)
      r.selected = t.includes(ma(r));
    return;
  }
  for (r of e.options) {
    var o = ma(r);
    if (vf(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function sg(e) {
  var t = new MutationObserver(() => {
    qi(e, e.__value);
  });
  t.observe(e, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), $l(() => {
    t.disconnect();
  });
}
function ma(e) {
  return "__value" in e ? e.__value : e.value;
}
const Sn = Symbol("class"), Zt = Symbol("style"), sc = Symbol("is custom element"), ac = Symbol("is html");
function Xt(e) {
  if (Ce) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          xe(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          xe(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, Cf(n), Lf();
  }
}
function Eo(e, t) {
  var n = si(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function Ki(e, t) {
  var n = si(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function ag(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function xe(e, t, n, r) {
  var o = si(e);
  Ce && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[Qd] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && lc(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function lg(e, t, n, r, o = !1) {
  var i = si(e), s = i[sc], a = !i[ac];
  let l = Ce && s;
  l && bt(!1);
  var u = t || {}, d = e.tagName === "OPTION";
  for (var g in t)
    g in n || (n[g] = null);
  n.class ? n.class = xn(n.class) : (r || n[Sn]) && (n.class = null), n[Zt] && (n.style ??= null);
  var f = lc(e);
  for (const x in n) {
    let b = n[x];
    if (d && x === "value" && b == null) {
      e.value = e.__value = "", u[x] = b;
      continue;
    }
    if (x === "class") {
      var h = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      yt(e, h, b, r, t?.[Sn], n[Sn]), u[x] = b, u[Sn] = n[Sn];
      continue;
    }
    if (x === "style") {
      ft(e, b, t?.[Zt], n[Zt]), u[x] = b, u[Zt] = n[Zt];
      continue;
    }
    var v = u[x];
    if (!(b === v && !(b === void 0 && e.hasAttribute(x)))) {
      u[x] = b;
      var y = x[0] + x[1];
      if (y !== "$$")
        if (y === "on") {
          const E = {}, M = "$$" + x;
          let L = x.slice(2);
          var k = Bf(L);
          if (zf(L) && (L = L.slice(0, -7), E.capture = !0), !k && v) {
            if (b != null) continue;
            e.removeEventListener(L, u[M], E), u[M] = null;
          }
          if (b != null)
            if (k)
              e[`__${L}`] = b, _n([L]);
            else {
              let B = function(Y) {
                u[x].call(this, Y);
              };
              u[M] = Ns(L, e, B, E);
            }
          else k && (e[`__${L}`] = void 0);
        } else if (x === "style")
          xe(e, x, b);
        else if (x === "autofocus")
          Vf(
            /** @type {HTMLElement} */
            e,
            !!b
          );
        else if (!s && (x === "__value" || x === "value" && b != null))
          e.value = e.__value = b;
        else if (x === "selected" && d)
          ag(
            /** @type {HTMLOptionElement} */
            e,
            b
          );
        else {
          var w = x;
          a || (w = Kf(w));
          var T = w === "defaultValue" || w === "defaultChecked";
          if (b == null && !s && !T)
            if (i[x] = null, w === "value" || w === "checked") {
              let E = (
                /** @type {HTMLInputElement} */
                e
              );
              const M = t === void 0;
              if (w === "value") {
                let L = E.defaultValue;
                E.removeAttribute(w), E.defaultValue = L, E.value = E.__value = M ? L : null;
              } else {
                let L = E.defaultChecked;
                E.removeAttribute(w), E.defaultChecked = L, E.checked = M ? L : !1;
              }
            } else
              e.removeAttribute(x);
          else T || f.includes(w) && (s || typeof b != "string") ? e[w] = b : typeof b != "function" && xe(e, w, b);
        }
    }
  }
  return l && bt(!0), u;
}
function et(e, t, n = [], r, o = !1, i = kr) {
  const s = n.map(i);
  var a = void 0, l = {}, u = e.nodeName === "SELECT", d = !1;
  if ($n(() => {
    var f = t(...s.map(c)), h = lg(e, a, f, r, o);
    d && u && "value" in f && qi(
      /** @type {HTMLSelectElement} */
      e,
      f.value
    );
    for (let y of Object.getOwnPropertySymbols(l))
      f[y] || mt(l[y]);
    for (let y of Object.getOwnPropertySymbols(f)) {
      var v = f[y];
      y.description === Xd && (!a || v !== a[y]) && (l[y] && mt(l[y]), l[y] = Jt(() => ng(e, () => v))), h[y] = v;
    }
    a = h;
  }), u) {
    var g = (
      /** @type {HTMLSelectElement} */
      e
    );
    to(() => {
      qi(
        g,
        /** @type {Record<string | symbol, any>} */
        a.value,
        !0
      ), sg(g);
    });
  }
  d = !0;
}
function si(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [sc]: e.nodeName.includes("-"),
      [ac]: e.namespaceURI === Yd
    }
  );
}
var ya = /* @__PURE__ */ new Map();
function lc(e) {
  var t = ya.get(e.nodeName);
  if (t) return t;
  ya.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = yl(r);
    for (var i in n)
      n[i].set && t.push(i);
    r = ei(r);
  }
  return t;
}
class As {
  /** */
  #t = /* @__PURE__ */ new WeakMap();
  /** @type {ResizeObserver | undefined} */
  #e;
  /** @type {ResizeObserverOptions} */
  #n;
  /** @static */
  static entries = /* @__PURE__ */ new WeakMap();
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    this.#n = t;
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = this.#t.get(t) || /* @__PURE__ */ new Set();
    return r.add(n), this.#t.set(t, r), this.#r().observe(t, this.#n), () => {
      var o = this.#t.get(t);
      o.delete(n), o.size === 0 && (this.#t.delete(t), this.#e.unobserve(t));
    };
  }
  #r() {
    return this.#e ?? (this.#e = new ResizeObserver(
      /** @param {any} entries */
      (t) => {
        for (var n of t) {
          As.entries.set(n.target, n);
          for (var r of this.#t.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var cg = /* @__PURE__ */ new As({
  box: "border-box"
});
function wa(e, t, n) {
  var r = cg.observe(e, () => n(e[t]));
  to(() => (nt(() => n(e[t])), r));
}
function _a(e, t) {
  return e === t || e?.[Wt] === t;
}
function Nt(e = {}, t, n, r) {
  return to(() => {
    var o, i;
    return no(() => {
      o = i, i = [], nt(() => {
        e !== n(...i) && (t(e, ...i), o && _a(n(...o), e) && t(null, ...o));
      });
    }), () => {
      ro(() => {
        i && _a(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function cc(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Re
  ), n = t.l.u;
  if (!n) return;
  let r = () => Ss(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ kr(() => {
      let a = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], a = !0);
      return a && o++, o;
    });
    r = () => c(s);
  }
  n.b.length && zl(() => {
    xa(t, r), Vo(n.b);
  }), We(() => {
    const o = nt(() => n.m.map(Ud));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && We(() => {
    xa(t, r), Vo(n.a);
  });
}
function xa(e, t) {
  if (e.l.s)
    for (const n of e.l.s) c(n);
  t();
}
let po = !1;
function ug(e) {
  var t = po;
  try {
    return po = !1, [e(), po];
  } finally {
    po = t;
  }
}
const dg = {
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
function Le(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    dg
  );
}
const fg = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return c(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    if (!(t in e.special)) {
      var r = Ae;
      try {
        On(e.parent_effect), e.special[t] = m(
          {
            get [t]() {
              return e.props[t];
            }
          },
          /** @type {string} */
          t,
          pl
        );
      } finally {
        On(r);
      }
    }
    return e.special[t](n), ca(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), ca(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function ba(e, t) {
  return new Proxy(
    {
      props: e,
      exclude: t,
      special: {},
      version: Xn(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        Ae
      )
    },
    fg
  );
}
const gg = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Sr(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      Sr(o) && (o = o());
      const i = dn(o, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Sr(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = dn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === Wt || t === ms) return !1;
    for (let n of e.props)
      if (Sr(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props)
      if (Sr(n) && (n = n()), !!n) {
        for (const r in n)
          t.includes(r) || t.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          t.includes(r) || t.push(r);
      }
    return t;
  }
};
function Ie(...e) {
  return new Proxy({ props: e }, gg);
}
function m(e, t, n, r) {
  var o = !Cr || (n & qd) !== 0, i = (n & Kd) !== 0, s = (n & Fd) !== 0, a = (
    /** @type {V} */
    r
  ), l = !0, u = () => (l && (l = !1, a = s ? nt(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (i) {
    var g = Wt in e || ms in e;
    d = dn(e, t)?.set ?? (g && t in e ? (x) => e[t] = x : void 0);
  }
  var f, h = !1;
  i ? [f, h] = ug(() => (
    /** @type {V} */
    e[t]
  )) : f = /** @type {V} */
  e[t], f === void 0 && r !== void 0 && (f = u(), d && (o && af(), d(f)));
  var v;
  if (o ? v = () => {
    var x = (
      /** @type {V} */
      e[t]
    );
    return x === void 0 ? u() : (l = !0, x);
  } : v = () => {
    var x = (
      /** @type {V} */
      e[t]
    );
    return x !== void 0 && (a = /** @type {V} */
    void 0), x === void 0 ? a : x;
  }, o && (n & pl) === 0)
    return v;
  if (d) {
    var y = e.$$legacy;
    return function(x, b) {
      return arguments.length > 0 ? ((!o || !b || y || h) && d(b ? v() : x), x) : v();
    };
  }
  var k = !1, w = ((n & Bd) !== 0 ? kr : _s)(() => (k = !1, v()));
  i && c(w);
  var T = (
    /** @type {Effect} */
    Ae
  );
  return function(x, b) {
    if (arguments.length > 0) {
      const E = b ? c(w) : o && i ? Mt(x) : x;
      return Z(w, E), k = !0, a !== void 0 && (a = E), x;
    }
    return An && k || (T.f & ti) !== 0 ? w.v : c(w);
  };
}
function hg(e) {
  return new vg(e);
}
class vg {
  /** @type {any} */
  #t;
  /** @type {Record<string, any>} */
  #e;
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    var n = /* @__PURE__ */ new Map(), r = (i, s) => {
      var a = /* @__PURE__ */ Dl(s, !1, !1);
      return n.set(i, a), a;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, s) {
          return c(n.get(s) ?? r(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === ms ? !0 : (c(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, a) {
          return Z(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
        }
      }
    );
    this.#e = (t.hydrate ? Xf : nc)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && p(), this.#t = o.$$events;
    for (const i of Object.keys(this.#e))
      i === "$set" || i === "$destroy" || i === "$on" || Oo(this, i, {
        get() {
          return this.#e[i];
        },
        /** @param {any} value */
        set(s) {
          this.#e[i] = s;
        },
        enumerable: !0
      });
    this.#e.$set = /** @param {Record<string, any>} next */
    (i) => {
      Object.assign(o, i);
    }, this.#e.$destroy = () => {
      jf(this.#e);
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    this.#e.$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    this.#t[t] = this.#t[t] || [];
    const r = (...o) => n.call(this, ...o);
    return this.#t[t].push(r), () => {
      this.#t[t] = this.#t[t].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    this.#e.$destroy();
  }
}
let uc;
typeof HTMLElement == "function" && (uc = class extends HTMLElement {
  /** The Svelte component constructor */
  $$ctor;
  /** Slots */
  $$s;
  /** @type {any} The Svelte component instance */
  $$c;
  /** Whether or not the custom element is connected */
  $$cn = !1;
  /** @type {Record<string, any>} Component props data */
  $$d = {};
  /** `true` if currently in the process of reflecting component props back to attributes */
  $$r = !1;
  /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
  $$p_d = {};
  /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
  $$l = {};
  /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
  $$l_u = /* @__PURE__ */ new Map();
  /** @type {any} The managed render effect for reflecting attributes */
  $$me;
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, t, n) {
    super(), this.$$ctor = e, this.$$s = t, n && this.attachShadow({ mode: "open" });
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
      const t = {}, n = pg(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = So(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = hg({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = Cs(() => {
        no(() => {
          this.$$r = !0;
          for (const r of Mo(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const o = So(
              r,
              this.$$d[r],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(this.$$p_d[r].attribute || r) : this.setAttribute(this.$$p_d[r].attribute || r, o);
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = So(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
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
    return Mo(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function So(e, t, n, r) {
  const o = n[e]?.type;
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
function pg(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function ne(e, t, n, r, o, i) {
  let s = class extends uc {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Mo(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return Mo(t).forEach((a) => {
    Oo(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = So(a, l, t), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var d = dn(u, a)?.get;
          d ? u[a] = l : u.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    Oo(s.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
var mg = { value: () => {
} };
function ai() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new No(n);
}
function No(e) {
  this._ = e;
}
function yg(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
No.prototype = ai.prototype = {
  constructor: No,
  on: function(e, t) {
    var n = this._, r = yg(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = wg(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = Ca(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = Ca(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new No(e);
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
function wg(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Ca(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = mg, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Fi = "http://www.w3.org/1999/xhtml";
const ka = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Fi,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function li(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), ka.hasOwnProperty(t) ? { space: ka[t], local: e } : e;
}
function _g(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Fi && t.documentElement.namespaceURI === Fi ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function xg(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function dc(e) {
  var t = li(e);
  return (t.local ? xg : _g)(t);
}
function bg() {
}
function Ms(e) {
  return e == null ? bg : function() {
    return this.querySelector(e);
  };
}
function Cg(e) {
  typeof e != "function" && (e = Ms(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, u, d = 0; d < s; ++d)
      (l = i[d]) && (u = e.call(l, l.__data__, d, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[d] = u);
  return new Pt(r, this._parents);
}
function kg(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Eg() {
  return [];
}
function fc(e) {
  return e == null ? Eg : function() {
    return this.querySelectorAll(e);
  };
}
function Sg(e) {
  return function() {
    return kg(e.apply(this, arguments));
  };
}
function Ng(e) {
  typeof e == "function" ? e = Sg(e) : e = fc(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(e.call(l, l.__data__, u, s)), o.push(l));
  return new Pt(r, o);
}
function gc(e) {
  return function() {
    return this.matches(e);
  };
}
function hc(e) {
  return function(t) {
    return t.matches(e);
  };
}
var Pg = Array.prototype.find;
function Tg(e) {
  return function() {
    return Pg.call(this.children, e);
  };
}
function Dg() {
  return this.firstElementChild;
}
function Ag(e) {
  return this.select(e == null ? Dg : Tg(typeof e == "function" ? e : hc(e)));
}
var Mg = Array.prototype.filter;
function Og() {
  return Array.from(this.children);
}
function Vg(e) {
  return function() {
    return Mg.call(this.children, e);
  };
}
function Hg(e) {
  return this.selectAll(e == null ? Og : Vg(typeof e == "function" ? e : hc(e)));
}
function Lg(e) {
  typeof e != "function" && (e = gc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Pt(r, this._parents);
}
function vc(e) {
  return new Array(e.length);
}
function $g() {
  return new Pt(this._enter || this._groups.map(vc), this._parents);
}
function Io(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Io.prototype = {
  constructor: Io,
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
function Ig(e) {
  return function() {
    return e;
  };
}
function zg(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, u = i.length; s < u; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new Io(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function Rg(e, t, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), d = t.length, g = i.length, f = new Array(d), h;
  for (a = 0; a < d; ++a)
    (l = t[a]) && (f[a] = h = s.call(l, l.__data__, a, t) + "", u.has(h) ? o[a] = l : u.set(h, l));
  for (a = 0; a < g; ++a)
    h = s.call(e, i[a], a, i) + "", (l = u.get(h)) ? (r[a] = l, l.__data__ = i[a], u.delete(h)) : n[a] = new Io(e, i[a]);
  for (a = 0; a < d; ++a)
    (l = t[a]) && u.get(f[a]) === l && (o[a] = l);
}
function Bg(e) {
  return e.__data__;
}
function qg(e, t) {
  if (!arguments.length) return Array.from(this, Bg);
  var n = t ? Rg : zg, r = this._parents, o = this._groups;
  typeof e != "function" && (e = Ig(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var d = r[u], g = o[u], f = g.length, h = Kg(e.call(d, d && d.__data__, u, r)), v = h.length, y = a[u] = new Array(v), k = s[u] = new Array(v), w = l[u] = new Array(f);
    n(d, g, y, k, w, h, t);
    for (var T = 0, x = 0, b, E; T < v; ++T)
      if (b = y[T]) {
        for (T >= x && (x = T + 1); !(E = k[x]) && ++x < v; ) ;
        b._next = E || null;
      }
  }
  return s = new Pt(s, r), s._enter = a, s._exit = l, s;
}
function Kg(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Fg() {
  return new Pt(this._exit || this._groups.map(vc), this._parents);
}
function Zg(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function Yg(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], d = r[l], g = u.length, f = a[l] = new Array(g), h, v = 0; v < g; ++v)
      (h = u[v] || d[v]) && (f[v] = h);
  for (; l < o; ++l)
    a[l] = n[l];
  return new Pt(a, this._parents);
}
function Wg() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function Xg(e) {
  e || (e = jg);
  function t(g, f) {
    return g && f ? e(g.__data__, f.__data__) : !g - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), u, d = 0; d < a; ++d)
      (u = s[d]) && (l[d] = u);
    l.sort(t);
  }
  return new Pt(o, this._parents).order();
}
function jg(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Gg() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Ug() {
  return Array.from(this);
}
function Jg() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function Qg() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function e1() {
  return !this.node();
}
function t1(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function n1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function r1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function o1(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function i1(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function s1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function a1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function l1(e, t) {
  var n = li(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? r1 : n1 : typeof t == "function" ? n.local ? a1 : s1 : n.local ? i1 : o1)(n, t));
}
function pc(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function c1(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function u1(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function d1(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function f1(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? c1 : typeof t == "function" ? d1 : u1)(e, t, n ?? "")) : vr(this.node(), e);
}
function vr(e, t) {
  return e.style.getPropertyValue(t) || pc(e).getComputedStyle(e, null).getPropertyValue(t);
}
function g1(e) {
  return function() {
    delete this[e];
  };
}
function h1(e, t) {
  return function() {
    this[e] = t;
  };
}
function v1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function p1(e, t) {
  return arguments.length > 1 ? this.each((t == null ? g1 : typeof t == "function" ? v1 : h1)(e, t)) : this.node()[e];
}
function mc(e) {
  return e.trim().split(/^|\s+/);
}
function Os(e) {
  return e.classList || new yc(e);
}
function yc(e) {
  this._node = e, this._names = mc(e.getAttribute("class") || "");
}
yc.prototype = {
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
function wc(e, t) {
  for (var n = Os(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function _c(e, t) {
  for (var n = Os(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function m1(e) {
  return function() {
    wc(this, e);
  };
}
function y1(e) {
  return function() {
    _c(this, e);
  };
}
function w1(e, t) {
  return function() {
    (t.apply(this, arguments) ? wc : _c)(this, e);
  };
}
function _1(e, t) {
  var n = mc(e + "");
  if (arguments.length < 2) {
    for (var r = Os(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? w1 : t ? m1 : y1)(n, t));
}
function x1() {
  this.textContent = "";
}
function b1(e) {
  return function() {
    this.textContent = e;
  };
}
function C1(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function k1(e) {
  return arguments.length ? this.each(e == null ? x1 : (typeof e == "function" ? C1 : b1)(e)) : this.node().textContent;
}
function E1() {
  this.innerHTML = "";
}
function S1(e) {
  return function() {
    this.innerHTML = e;
  };
}
function N1(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function P1(e) {
  return arguments.length ? this.each(e == null ? E1 : (typeof e == "function" ? N1 : S1)(e)) : this.node().innerHTML;
}
function T1() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function D1() {
  return this.each(T1);
}
function A1() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function M1() {
  return this.each(A1);
}
function O1(e) {
  var t = typeof e == "function" ? e : dc(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function V1() {
  return null;
}
function H1(e, t) {
  var n = typeof e == "function" ? e : dc(e), r = t == null ? V1 : typeof t == "function" ? t : Ms(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function L1() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function $1() {
  return this.each(L1);
}
function I1() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function z1() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function R1(e) {
  return this.select(e ? z1 : I1);
}
function B1(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function q1(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function K1(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function F1(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Z1(e, t, n) {
  return function() {
    var r = this.__on, o, i = q1(t);
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
function Y1(e, t, n) {
  var r = K1(e + ""), o, i = r.length, s;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var l = 0, u = a.length, d; l < u; ++l)
        for (o = 0, d = a[l]; o < i; ++o)
          if ((s = r[o]).type === d.type && s.name === d.name)
            return d.value;
    }
    return;
  }
  for (a = t ? Z1 : F1, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function xc(e, t, n) {
  var r = pc(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function W1(e, t) {
  return function() {
    return xc(this, e, t);
  };
}
function X1(e, t) {
  return function() {
    return xc(this, e, t.apply(this, arguments));
  };
}
function j1(e, t) {
  return this.each((typeof t == "function" ? X1 : W1)(e, t));
}
function* G1() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var bc = [null];
function Pt(e, t) {
  this._groups = e, this._parents = t;
}
function oo() {
  return new Pt([[document.documentElement]], bc);
}
function U1() {
  return this;
}
Pt.prototype = oo.prototype = {
  constructor: Pt,
  select: Cg,
  selectAll: Ng,
  selectChild: Ag,
  selectChildren: Hg,
  filter: Lg,
  data: qg,
  enter: $g,
  exit: Fg,
  join: Zg,
  merge: Yg,
  selection: U1,
  order: Wg,
  sort: Xg,
  call: Gg,
  nodes: Ug,
  node: Jg,
  size: Qg,
  empty: e1,
  each: t1,
  attr: l1,
  style: f1,
  property: p1,
  classed: _1,
  text: k1,
  html: P1,
  raise: D1,
  lower: M1,
  append: O1,
  insert: H1,
  remove: $1,
  clone: R1,
  datum: B1,
  on: Y1,
  dispatch: j1,
  [Symbol.iterator]: G1
};
function At(e) {
  return typeof e == "string" ? new Pt([[document.querySelector(e)]], [document.documentElement]) : new Pt([[e]], bc);
}
function J1(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function Vt(e, t) {
  if (e = J1(e), t === void 0 && (t = e.currentTarget), t) {
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
const Q1 = { passive: !1 }, Br = { capture: !0, passive: !1 };
function bi(e) {
  e.stopImmediatePropagation();
}
function ar(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Cc(e) {
  var t = e.document.documentElement, n = At(e).on("dragstart.drag", ar, Br);
  "onselectstart" in t ? n.on("selectstart.drag", ar, Br) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function kc(e, t) {
  var n = e.document.documentElement, r = At(e).on("dragstart.drag", null);
  t && (r.on("click.drag", ar, Br), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const mo = (e) => () => e;
function Zi(e, {
  sourceEvent: t,
  subject: n,
  target: r,
  identifier: o,
  active: i,
  x: s,
  y: a,
  dx: l,
  dy: u,
  dispatch: d
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
    _: { value: d }
  });
}
Zi.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function eh(e) {
  return !e.ctrlKey && !e.button;
}
function th() {
  return this.parentNode;
}
function nh(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function rh() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function oh() {
  var e = eh, t = th, n = nh, r = rh, o = {}, i = ai("start", "drag", "end"), s = 0, a, l, u, d, g = 0;
  function f(b) {
    b.on("mousedown.drag", h).filter(r).on("touchstart.drag", k).on("touchmove.drag", w, Q1).on("touchend.drag touchcancel.drag", T).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function h(b, E) {
    if (!(d || !e.call(this, b, E))) {
      var M = x(this, t.call(this, b, E), b, E, "mouse");
      M && (At(b.view).on("mousemove.drag", v, Br).on("mouseup.drag", y, Br), Cc(b.view), bi(b), u = !1, a = b.clientX, l = b.clientY, M("start", b));
    }
  }
  function v(b) {
    if (ar(b), !u) {
      var E = b.clientX - a, M = b.clientY - l;
      u = E * E + M * M > g;
    }
    o.mouse("drag", b);
  }
  function y(b) {
    At(b.view).on("mousemove.drag mouseup.drag", null), kc(b.view, u), ar(b), o.mouse("end", b);
  }
  function k(b, E) {
    if (e.call(this, b, E)) {
      var M = b.changedTouches, L = t.call(this, b, E), B = M.length, Y, U;
      for (Y = 0; Y < B; ++Y)
        (U = x(this, L, b, E, M[Y].identifier, M[Y])) && (bi(b), U("start", b, M[Y]));
    }
  }
  function w(b) {
    var E = b.changedTouches, M = E.length, L, B;
    for (L = 0; L < M; ++L)
      (B = o[E[L].identifier]) && (ar(b), B("drag", b, E[L]));
  }
  function T(b) {
    var E = b.changedTouches, M = E.length, L, B;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), L = 0; L < M; ++L)
      (B = o[E[L].identifier]) && (bi(b), B("end", b, E[L]));
  }
  function x(b, E, M, L, B, Y) {
    var U = i.copy(), $ = Vt(Y || M, E), S, A, _;
    if ((_ = n.call(b, new Zi("beforestart", {
      sourceEvent: M,
      target: f,
      identifier: B,
      active: s,
      x: $[0],
      y: $[1],
      dx: 0,
      dy: 0,
      dispatch: U
    }), L)) != null)
      return S = _.x - $[0] || 0, A = _.y - $[1] || 0, function P(C, H, R) {
        var D = $, K;
        switch (C) {
          case "start":
            o[B] = P, K = s++;
            break;
          case "end":
            delete o[B], --s;
          // falls through
          case "drag":
            $ = Vt(R || H, E), K = s;
            break;
        }
        U.call(
          C,
          b,
          new Zi(C, {
            sourceEvent: H,
            subject: _,
            target: f,
            identifier: B,
            active: K,
            x: $[0] + S,
            y: $[1] + A,
            dx: $[0] - D[0],
            dy: $[1] - D[1],
            dispatch: U
          }),
          L
        );
      };
  }
  return f.filter = function(b) {
    return arguments.length ? (e = typeof b == "function" ? b : mo(!!b), f) : e;
  }, f.container = function(b) {
    return arguments.length ? (t = typeof b == "function" ? b : mo(b), f) : t;
  }, f.subject = function(b) {
    return arguments.length ? (n = typeof b == "function" ? b : mo(b), f) : n;
  }, f.touchable = function(b) {
    return arguments.length ? (r = typeof b == "function" ? b : mo(!!b), f) : r;
  }, f.on = function() {
    var b = i.on.apply(i, arguments);
    return b === i ? f : b;
  }, f.clickDistance = function(b) {
    return arguments.length ? (g = (b = +b) * b, f) : Math.sqrt(g);
  }, f;
}
function Vs(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Ec(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function io() {
}
var qr = 0.7, zo = 1 / qr, lr = "\\s*([+-]?\\d+)\\s*", Kr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", jt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ih = /^#([0-9a-f]{3,8})$/, sh = new RegExp(`^rgb\\(${lr},${lr},${lr}\\)$`), ah = new RegExp(`^rgb\\(${jt},${jt},${jt}\\)$`), lh = new RegExp(`^rgba\\(${lr},${lr},${lr},${Kr}\\)$`), ch = new RegExp(`^rgba\\(${jt},${jt},${jt},${Kr}\\)$`), uh = new RegExp(`^hsl\\(${Kr},${jt},${jt}\\)$`), dh = new RegExp(`^hsla\\(${Kr},${jt},${jt},${Kr}\\)$`), Ea = {
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
Vs(io, jn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Sa,
  // Deprecated! Use color.formatHex.
  formatHex: Sa,
  formatHex8: fh,
  formatHsl: gh,
  formatRgb: Na,
  toString: Na
});
function Sa() {
  return this.rgb().formatHex();
}
function fh() {
  return this.rgb().formatHex8();
}
function gh() {
  return Sc(this).formatHsl();
}
function Na() {
  return this.rgb().formatRgb();
}
function jn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = ih.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Pa(t) : n === 3 ? new ht(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? yo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? yo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = sh.exec(e)) ? new ht(t[1], t[2], t[3], 1) : (t = ah.exec(e)) ? new ht(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = lh.exec(e)) ? yo(t[1], t[2], t[3], t[4]) : (t = ch.exec(e)) ? yo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = uh.exec(e)) ? Aa(t[1], t[2] / 100, t[3] / 100, 1) : (t = dh.exec(e)) ? Aa(t[1], t[2] / 100, t[3] / 100, t[4]) : Ea.hasOwnProperty(e) ? Pa(Ea[e]) : e === "transparent" ? new ht(NaN, NaN, NaN, 0) : null;
}
function Pa(e) {
  return new ht(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function yo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new ht(e, t, n, r);
}
function hh(e) {
  return e instanceof io || (e = jn(e)), e ? (e = e.rgb(), new ht(e.r, e.g, e.b, e.opacity)) : new ht();
}
function Yi(e, t, n, r) {
  return arguments.length === 1 ? hh(e) : new ht(e, t, n, r ?? 1);
}
function ht(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Vs(ht, Yi, Ec(io, {
  brighter(e) {
    return e = e == null ? zo : Math.pow(zo, e), new ht(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? qr : Math.pow(qr, e), new ht(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new ht(Wn(this.r), Wn(this.g), Wn(this.b), Ro(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ta,
  // Deprecated! Use color.formatHex.
  formatHex: Ta,
  formatHex8: vh,
  formatRgb: Da,
  toString: Da
}));
function Ta() {
  return `#${qn(this.r)}${qn(this.g)}${qn(this.b)}`;
}
function vh() {
  return `#${qn(this.r)}${qn(this.g)}${qn(this.b)}${qn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Da() {
  const e = Ro(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Wn(this.r)}, ${Wn(this.g)}, ${Wn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ro(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Wn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function qn(e) {
  return e = Wn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Aa(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Lt(e, t, n, r);
}
function Sc(e) {
  if (e instanceof Lt) return new Lt(e.h, e.s, e.l, e.opacity);
  if (e instanceof io || (e = jn(e)), !e) return new Lt();
  if (e instanceof Lt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new Lt(s, a, l, e.opacity);
}
function ph(e, t, n, r) {
  return arguments.length === 1 ? Sc(e) : new Lt(e, t, n, r ?? 1);
}
function Lt(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Vs(Lt, ph, Ec(io, {
  brighter(e) {
    return e = e == null ? zo : Math.pow(zo, e), new Lt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? qr : Math.pow(qr, e), new Lt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new ht(
      Ci(e >= 240 ? e - 240 : e + 120, o, r),
      Ci(e, o, r),
      Ci(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Lt(Ma(this.h), wo(this.s), wo(this.l), Ro(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Ro(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Ma(this.h)}, ${wo(this.s) * 100}%, ${wo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Ma(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function wo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Ci(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Hs = (e) => () => e;
function mh(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function yh(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function wh(e) {
  return (e = +e) == 1 ? Nc : function(t, n) {
    return n - t ? yh(t, n, e) : Hs(isNaN(t) ? n : t);
  };
}
function Nc(e, t) {
  var n = t - e;
  return n ? mh(e, n) : Hs(isNaN(e) ? t : e);
}
const Bo = function e(t) {
  var n = wh(t);
  function r(o, i) {
    var s = n((o = Yi(o)).r, (i = Yi(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = Nc(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = l(d), o.opacity = u(d), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function _h(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function xh(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function bh(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = Vr(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function Ch(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function Ft(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function kh(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Vr(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var Wi = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ki = new RegExp(Wi.source, "g");
function Eh(e) {
  return function() {
    return e;
  };
}
function Sh(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Pc(e, t) {
  var n = Wi.lastIndex = ki.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = Wi.exec(e)) && (o = ki.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: Ft(r, o) })), n = ki.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? Sh(l[0].x) : Eh(t) : (t = l.length, function(u) {
    for (var d = 0, g; d < t; ++d) a[(g = l[d]).i] = g.x(u);
    return a.join("");
  });
}
function Vr(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? Hs(t) : (n === "number" ? Ft : n === "string" ? (r = jn(t)) ? (t = r, Bo) : Pc : t instanceof jn ? Bo : t instanceof Date ? Ch : xh(t) ? _h : Array.isArray(t) ? bh : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? kh : Ft)(e, t);
}
var Oa = 180 / Math.PI, Xi = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Tc(e, t, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * r) && (n -= e * l, r -= t * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), e * r < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * Oa,
    skewX: Math.atan(l) * Oa,
    scaleX: s,
    scaleY: a
  };
}
var _o;
function Nh(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Xi : Tc(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Ph(e) {
  return e == null || (_o || (_o = document.createElementNS("http://www.w3.org/2000/svg", "g")), _o.setAttribute("transform", e), !(e = _o.transform.baseVal.consolidate())) ? Xi : (e = e.matrix, Tc(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Dc(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, d, g, f, h, v) {
    if (u !== g || d !== f) {
      var y = h.push("translate(", null, t, null, n);
      v.push({ i: y - 4, x: Ft(u, g) }, { i: y - 2, x: Ft(d, f) });
    } else (g || f) && h.push("translate(" + g + t + f + n);
  }
  function s(u, d, g, f) {
    u !== d ? (u - d > 180 ? d += 360 : d - u > 180 && (u += 360), f.push({ i: g.push(o(g) + "rotate(", null, r) - 2, x: Ft(u, d) })) : d && g.push(o(g) + "rotate(" + d + r);
  }
  function a(u, d, g, f) {
    u !== d ? f.push({ i: g.push(o(g) + "skewX(", null, r) - 2, x: Ft(u, d) }) : d && g.push(o(g) + "skewX(" + d + r);
  }
  function l(u, d, g, f, h, v) {
    if (u !== g || d !== f) {
      var y = h.push(o(h) + "scale(", null, ",", null, ")");
      v.push({ i: y - 4, x: Ft(u, g) }, { i: y - 2, x: Ft(d, f) });
    } else (g !== 1 || f !== 1) && h.push(o(h) + "scale(" + g + "," + f + ")");
  }
  return function(u, d) {
    var g = [], f = [];
    return u = e(u), d = e(d), i(u.translateX, u.translateY, d.translateX, d.translateY, g, f), s(u.rotate, d.rotate, g, f), a(u.skewX, d.skewX, g, f), l(u.scaleX, u.scaleY, d.scaleX, d.scaleY, g, f), u = d = null, function(h) {
      for (var v = -1, y = f.length, k; ++v < y; ) g[(k = f[v]).i] = k.x(h);
      return g.join("");
    };
  };
}
var Th = Dc(Nh, "px, ", "px)", "deg)"), Dh = Dc(Ph, ", ", ")", ")"), Ah = 1e-12;
function Va(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Mh(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Oh(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Po = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], d = s[0], g = s[1], f = s[2], h = d - a, v = g - l, y = h * h + v * v, k, w;
    if (y < Ah)
      w = Math.log(f / u) / t, k = function(L) {
        return [
          a + L * h,
          l + L * v,
          u * Math.exp(t * L * w)
        ];
      };
    else {
      var T = Math.sqrt(y), x = (f * f - u * u + r * y) / (2 * u * n * T), b = (f * f - u * u - r * y) / (2 * f * n * T), E = Math.log(Math.sqrt(x * x + 1) - x), M = Math.log(Math.sqrt(b * b + 1) - b);
      w = (M - E) / t, k = function(L) {
        var B = L * w, Y = Va(E), U = u / (n * T) * (Y * Oh(t * B + E) - Mh(E));
        return [
          a + U * h,
          l + U * v,
          u * Y / Va(t * B + E)
        ];
      };
    }
    return k.duration = w * 1e3 * t / Math.SQRT2, k;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
}(Math.SQRT2, 2, 4);
var pr = 0, Dr = 0, Nr = 0, Ac = 1e3, qo, Ar, Ko = 0, Gn = 0, ci = 0, Fr = typeof performance == "object" && performance.now ? performance : Date, Mc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Ls() {
  return Gn || (Mc(Vh), Gn = Fr.now() + ci);
}
function Vh() {
  Gn = 0;
}
function Fo() {
  this._call = this._time = this._next = null;
}
Fo.prototype = Oc.prototype = {
  constructor: Fo,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Ls() : +n) + (t == null ? 0 : +t), !this._next && Ar !== this && (Ar ? Ar._next = this : qo = this, Ar = this), this._call = e, this._time = n, ji();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ji());
  }
};
function Oc(e, t, n) {
  var r = new Fo();
  return r.restart(e, t, n), r;
}
function Hh() {
  Ls(), ++pr;
  for (var e = qo, t; e; )
    (t = Gn - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --pr;
}
function Ha() {
  Gn = (Ko = Fr.now()) + ci, pr = Dr = 0;
  try {
    Hh();
  } finally {
    pr = 0, $h(), Gn = 0;
  }
}
function Lh() {
  var e = Fr.now(), t = e - Ko;
  t > Ac && (ci -= t, Ko = e);
}
function $h() {
  for (var e, t = qo, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : qo = n);
  Ar = e, ji(r);
}
function ji(e) {
  if (!pr) {
    Dr && (Dr = clearTimeout(Dr));
    var t = e - Gn;
    t > 24 ? (e < 1 / 0 && (Dr = setTimeout(Ha, e - Fr.now() - ci)), Nr && (Nr = clearInterval(Nr))) : (Nr || (Ko = Fr.now(), Nr = setInterval(Lh, Ac)), pr = 1, Mc(Ha));
  }
}
function La(e, t, n) {
  var r = new Fo();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var Ih = ai("start", "end", "cancel", "interrupt"), zh = [], Vc = 0, $a = 1, Gi = 2, To = 3, Ia = 4, Ui = 5, Do = 6;
function ui(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  Rh(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: Ih,
    tween: zh,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Vc
  });
}
function $s(e, t) {
  var n = zt(e, t);
  if (n.state > Vc) throw new Error("too late; already scheduled");
  return n;
}
function rn(e, t) {
  var n = zt(e, t);
  if (n.state > To) throw new Error("too late; already running");
  return n;
}
function zt(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function Rh(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Oc(i, 0, n.time);
  function i(u) {
    n.state = $a, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var d, g, f, h;
    if (n.state !== $a) return l();
    for (d in r)
      if (h = r[d], h.name === n.name) {
        if (h.state === To) return La(s);
        h.state === Ia ? (h.state = Do, h.timer.stop(), h.on.call("interrupt", e, e.__data__, h.index, h.group), delete r[d]) : +d < t && (h.state = Do, h.timer.stop(), h.on.call("cancel", e, e.__data__, h.index, h.group), delete r[d]);
      }
    if (La(function() {
      n.state === To && (n.state = Ia, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = Gi, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Gi) {
      for (n.state = To, o = new Array(f = n.tween.length), d = 0, g = -1; d < f; ++d)
        (h = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++g] = h);
      o.length = g + 1;
    }
  }
  function a(u) {
    for (var d = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Ui, 1), g = -1, f = o.length; ++g < f; )
      o[g].call(e, d);
    n.state === Ui && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = Do, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function Ao(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > Gi && r.state < Ui, r.state = Do, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function Bh(e) {
  return this.each(function() {
    Ao(this, e);
  });
}
function qh(e, t) {
  var n, r;
  return function() {
    var o = rn(this, e), i = o.tween;
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
function Kh(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = rn(this, e), s = i.tween;
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
function Fh(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = zt(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? qh : Kh)(n, e, t));
}
function Is(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = rn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return zt(o, r).value[t];
  };
}
function Hc(e, t) {
  var n;
  return (typeof t == "number" ? Ft : t instanceof jn ? Bo : (n = jn(t)) ? (t = n, Bo) : Pc)(e, t);
}
function Zh(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Yh(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Wh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Xh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function jh(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function Gh(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function Uh(e, t) {
  var n = li(e), r = n === "transform" ? Dh : Hc;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Gh : jh)(n, r, Is(this, "attr." + e, t)) : t == null ? (n.local ? Yh : Zh)(n) : (n.local ? Xh : Wh)(n, r, t));
}
function Jh(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Qh(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function ev(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Qh(e, i)), n;
  }
  return o._value = t, o;
}
function tv(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Jh(e, i)), n;
  }
  return o._value = t, o;
}
function nv(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = li(e);
  return this.tween(n, (r.local ? ev : tv)(r, t));
}
function rv(e, t) {
  return function() {
    $s(this, e).delay = +t.apply(this, arguments);
  };
}
function ov(e, t) {
  return t = +t, function() {
    $s(this, e).delay = t;
  };
}
function iv(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? rv : ov)(t, e)) : zt(this.node(), t).delay;
}
function sv(e, t) {
  return function() {
    rn(this, e).duration = +t.apply(this, arguments);
  };
}
function av(e, t) {
  return t = +t, function() {
    rn(this, e).duration = t;
  };
}
function lv(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? sv : av)(t, e)) : zt(this.node(), t).duration;
}
function cv(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    rn(this, e).ease = t;
  };
}
function uv(e) {
  var t = this._id;
  return arguments.length ? this.each(cv(t, e)) : zt(this.node(), t).ease;
}
function dv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    rn(this, e).ease = n;
  };
}
function fv(e) {
  if (typeof e != "function") throw new Error();
  return this.each(dv(this._id, e));
}
function gv(e) {
  typeof e != "function" && (e = gc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new mn(r, this._parents, this._name, this._id);
}
function hv(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], u = n[a], d = l.length, g = s[a] = new Array(d), f, h = 0; h < d; ++h)
      (f = l[h] || u[h]) && (g[h] = f);
  for (; a < r; ++a)
    s[a] = t[a];
  return new mn(s, this._parents, this._name, this._id);
}
function vv(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function pv(e, t, n) {
  var r, o, i = vv(t) ? $s : rn;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function mv(e, t) {
  var n = this._id;
  return arguments.length < 2 ? zt(this.node(), n).on.on(e) : this.each(pv(n, e, t));
}
function yv(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function wv() {
  return this.on("end.remove", yv(this._id));
}
function _v(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Ms(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), d, g, f = 0; f < l; ++f)
      (d = a[f]) && (g = e.call(d, d.__data__, f, a)) && ("__data__" in d && (g.__data__ = d.__data__), u[f] = g, ui(u[f], t, n, f, u, zt(d, n)));
  return new mn(i, this._parents, t, n);
}
function xv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = fc(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, d, g = 0; g < u; ++g)
      if (d = l[g]) {
        for (var f = e.call(d, d.__data__, g, l), h, v = zt(d, n), y = 0, k = f.length; y < k; ++y)
          (h = f[y]) && ui(h, t, n, y, f, v);
        i.push(f), s.push(d);
      }
  return new mn(i, s, t, n);
}
var bv = oo.prototype.constructor;
function Cv() {
  return new bv(this._groups, this._parents);
}
function kv(e, t) {
  var n, r, o;
  return function() {
    var i = vr(this, e), s = (this.style.removeProperty(e), vr(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function Lc(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Ev(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = vr(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Sv(e, t, n) {
  var r, o, i;
  return function() {
    var s = vr(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), vr(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function Nv(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = rn(this, e), u = l.on, d = l.value[i] == null ? a || (a = Lc(t)) : void 0;
    (u !== n || o !== d) && (r = (n = u).copy()).on(s, o = d), l.on = r;
  };
}
function Pv(e, t, n) {
  var r = (e += "") == "transform" ? Th : Hc;
  return t == null ? this.styleTween(e, kv(e, r)).on("end.style." + e, Lc(e)) : typeof t == "function" ? this.styleTween(e, Sv(e, r, Is(this, "style." + e, t))).each(Nv(this._id, e)) : this.styleTween(e, Ev(e, r, t), n).on("end.style." + e, null);
}
function Tv(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function Dv(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && Tv(e, s, n)), r;
  }
  return i._value = t, i;
}
function Av(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, Dv(e, t, n ?? ""));
}
function Mv(e) {
  return function() {
    this.textContent = e;
  };
}
function Ov(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function Vv(e) {
  return this.tween("text", typeof e == "function" ? Ov(Is(this, "text", e)) : Mv(e == null ? "" : e + ""));
}
function Hv(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function Lv(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && Hv(o)), t;
  }
  return r._value = e, r;
}
function $v(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, Lv(e));
}
function Iv() {
  for (var e = this._name, t = this._id, n = $c(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var d = zt(l, t);
        ui(l, e, n, u, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new mn(r, this._parents, e, n);
}
function zv() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = rn(this, r), d = u.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var Rv = 0;
function mn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function $c() {
  return ++Rv;
}
var sn = oo.prototype;
mn.prototype = {
  constructor: mn,
  select: _v,
  selectAll: xv,
  selectChild: sn.selectChild,
  selectChildren: sn.selectChildren,
  filter: gv,
  merge: hv,
  selection: Cv,
  transition: Iv,
  call: sn.call,
  nodes: sn.nodes,
  node: sn.node,
  size: sn.size,
  empty: sn.empty,
  each: sn.each,
  on: mv,
  attr: Uh,
  attrTween: nv,
  style: Pv,
  styleTween: Av,
  text: Vv,
  textTween: $v,
  remove: wv,
  tween: Fh,
  delay: iv,
  duration: lv,
  ease: uv,
  easeVarying: fv,
  end: zv,
  [Symbol.iterator]: sn[Symbol.iterator]
};
function Bv(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var qv = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Bv
};
function Kv(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Fv(e) {
  var t, n;
  e instanceof mn ? (t = e._id, e = e._name) : (t = $c(), (n = qv).time = Ls(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && ui(l, e, t, u, s, n || Kv(l, t));
  return new mn(r, this._parents, e, t);
}
oo.prototype.interrupt = Bh;
oo.prototype.transition = Fv;
const xo = (e) => () => e;
function Zv(e, {
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
function ln(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
ln.prototype = {
  constructor: ln,
  scale: function(e) {
    return e === 1 ? this : new ln(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new ln(this.k, this.x + this.k * e, this.y + this.k * t);
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
var di = new ln(1, 0, 0);
Ic.prototype = ln.prototype;
function Ic(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return di;
  return e.__zoom;
}
function Ei(e) {
  e.stopImmediatePropagation();
}
function Pr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Yv(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Wv() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function za() {
  return this.__zoom || di;
}
function Xv(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function jv() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Gv(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function zc() {
  var e = Yv, t = Wv, n = Gv, r = Xv, o = jv, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = Po, u = ai("start", "zoom", "end"), d, g, f, h = 500, v = 150, y = 0, k = 10;
  function w(_) {
    _.property("__zoom", za).on("wheel.zoom", B, { passive: !1 }).on("mousedown.zoom", Y).on("dblclick.zoom", U).filter(o).on("touchstart.zoom", $).on("touchmove.zoom", S).on("touchend.zoom touchcancel.zoom", A).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  w.transform = function(_, P, C, H) {
    var R = _.selection ? _.selection() : _;
    R.property("__zoom", za), _ !== R ? E(_, P, C, H) : R.interrupt().each(function() {
      M(this, arguments).event(H).start().zoom(null, typeof P == "function" ? P.apply(this, arguments) : P).end();
    });
  }, w.scaleBy = function(_, P, C, H) {
    w.scaleTo(_, function() {
      var R = this.__zoom.k, D = typeof P == "function" ? P.apply(this, arguments) : P;
      return R * D;
    }, C, H);
  }, w.scaleTo = function(_, P, C, H) {
    w.transform(_, function() {
      var R = t.apply(this, arguments), D = this.__zoom, K = C == null ? b(R) : typeof C == "function" ? C.apply(this, arguments) : C, F = D.invert(K), W = typeof P == "function" ? P.apply(this, arguments) : P;
      return n(x(T(D, W), K, F), R, s);
    }, C, H);
  }, w.translateBy = function(_, P, C, H) {
    w.transform(_, function() {
      return n(this.__zoom.translate(
        typeof P == "function" ? P.apply(this, arguments) : P,
        typeof C == "function" ? C.apply(this, arguments) : C
      ), t.apply(this, arguments), s);
    }, null, H);
  }, w.translateTo = function(_, P, C, H, R) {
    w.transform(_, function() {
      var D = t.apply(this, arguments), K = this.__zoom, F = H == null ? b(D) : typeof H == "function" ? H.apply(this, arguments) : H;
      return n(di.translate(F[0], F[1]).scale(K.k).translate(
        typeof P == "function" ? -P.apply(this, arguments) : -P,
        typeof C == "function" ? -C.apply(this, arguments) : -C
      ), D, s);
    }, H, R);
  };
  function T(_, P) {
    return P = Math.max(i[0], Math.min(i[1], P)), P === _.k ? _ : new ln(P, _.x, _.y);
  }
  function x(_, P, C) {
    var H = P[0] - C[0] * _.k, R = P[1] - C[1] * _.k;
    return H === _.x && R === _.y ? _ : new ln(_.k, H, R);
  }
  function b(_) {
    return [(+_[0][0] + +_[1][0]) / 2, (+_[0][1] + +_[1][1]) / 2];
  }
  function E(_, P, C, H) {
    _.on("start.zoom", function() {
      M(this, arguments).event(H).start();
    }).on("interrupt.zoom end.zoom", function() {
      M(this, arguments).event(H).end();
    }).tween("zoom", function() {
      var R = this, D = arguments, K = M(R, D).event(H), F = t.apply(R, D), W = C == null ? b(F) : typeof C == "function" ? C.apply(R, D) : C, Q = Math.max(F[1][0] - F[0][0], F[1][1] - F[0][1]), G = R.__zoom, J = typeof P == "function" ? P.apply(R, D) : P, ue = l(G.invert(W).concat(Q / G.k), J.invert(W).concat(Q / J.k));
      return function(re) {
        if (re === 1) re = J;
        else {
          var j = ue(re), _e = Q / j[2];
          re = new ln(_e, W[0] - j[0] * _e, W[1] - j[1] * _e);
        }
        K.zoom(null, re);
      };
    });
  }
  function M(_, P, C) {
    return !C && _.__zooming || new L(_, P);
  }
  function L(_, P) {
    this.that = _, this.args = P, this.active = 0, this.sourceEvent = null, this.extent = t.apply(_, P), this.taps = 0;
  }
  L.prototype = {
    event: function(_) {
      return _ && (this.sourceEvent = _), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(_, P) {
      return this.mouse && _ !== "mouse" && (this.mouse[1] = P.invert(this.mouse[0])), this.touch0 && _ !== "touch" && (this.touch0[1] = P.invert(this.touch0[0])), this.touch1 && _ !== "touch" && (this.touch1[1] = P.invert(this.touch1[0])), this.that.__zoom = P, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(_) {
      var P = At(this.that).datum();
      u.call(
        _,
        this.that,
        new Zv(_, {
          sourceEvent: this.sourceEvent,
          target: w,
          transform: this.that.__zoom,
          dispatch: u
        }),
        P
      );
    }
  };
  function B(_, ...P) {
    if (!e.apply(this, arguments)) return;
    var C = M(this, P).event(_), H = this.__zoom, R = Math.max(i[0], Math.min(i[1], H.k * Math.pow(2, r.apply(this, arguments)))), D = Vt(_);
    if (C.wheel)
      (C.mouse[0][0] !== D[0] || C.mouse[0][1] !== D[1]) && (C.mouse[1] = H.invert(C.mouse[0] = D)), clearTimeout(C.wheel);
    else {
      if (H.k === R) return;
      C.mouse = [D, H.invert(D)], Ao(this), C.start();
    }
    Pr(_), C.wheel = setTimeout(K, v), C.zoom("mouse", n(x(T(H, R), C.mouse[0], C.mouse[1]), C.extent, s));
    function K() {
      C.wheel = null, C.end();
    }
  }
  function Y(_, ...P) {
    if (f || !e.apply(this, arguments)) return;
    var C = _.currentTarget, H = M(this, P, !0).event(_), R = At(_.view).on("mousemove.zoom", W, !0).on("mouseup.zoom", Q, !0), D = Vt(_, C), K = _.clientX, F = _.clientY;
    Cc(_.view), Ei(_), H.mouse = [D, this.__zoom.invert(D)], Ao(this), H.start();
    function W(G) {
      if (Pr(G), !H.moved) {
        var J = G.clientX - K, ue = G.clientY - F;
        H.moved = J * J + ue * ue > y;
      }
      H.event(G).zoom("mouse", n(x(H.that.__zoom, H.mouse[0] = Vt(G, C), H.mouse[1]), H.extent, s));
    }
    function Q(G) {
      R.on("mousemove.zoom mouseup.zoom", null), kc(G.view, H.moved), Pr(G), H.event(G).end();
    }
  }
  function U(_, ...P) {
    if (e.apply(this, arguments)) {
      var C = this.__zoom, H = Vt(_.changedTouches ? _.changedTouches[0] : _, this), R = C.invert(H), D = C.k * (_.shiftKey ? 0.5 : 2), K = n(x(T(C, D), H, R), t.apply(this, P), s);
      Pr(_), a > 0 ? At(this).transition().duration(a).call(E, K, H, _) : At(this).call(w.transform, K, H, _);
    }
  }
  function $(_, ...P) {
    if (e.apply(this, arguments)) {
      var C = _.touches, H = C.length, R = M(this, P, _.changedTouches.length === H).event(_), D, K, F, W;
      for (Ei(_), K = 0; K < H; ++K)
        F = C[K], W = Vt(F, this), W = [W, this.__zoom.invert(W), F.identifier], R.touch0 ? !R.touch1 && R.touch0[2] !== W[2] && (R.touch1 = W, R.taps = 0) : (R.touch0 = W, D = !0, R.taps = 1 + !!d);
      d && (d = clearTimeout(d)), D && (R.taps < 2 && (g = W[0], d = setTimeout(function() {
        d = null;
      }, h)), Ao(this), R.start());
    }
  }
  function S(_, ...P) {
    if (this.__zooming) {
      var C = M(this, P).event(_), H = _.changedTouches, R = H.length, D, K, F, W;
      for (Pr(_), D = 0; D < R; ++D)
        K = H[D], F = Vt(K, this), C.touch0 && C.touch0[2] === K.identifier ? C.touch0[0] = F : C.touch1 && C.touch1[2] === K.identifier && (C.touch1[0] = F);
      if (K = C.that.__zoom, C.touch1) {
        var Q = C.touch0[0], G = C.touch0[1], J = C.touch1[0], ue = C.touch1[1], re = (re = J[0] - Q[0]) * re + (re = J[1] - Q[1]) * re, j = (j = ue[0] - G[0]) * j + (j = ue[1] - G[1]) * j;
        K = T(K, Math.sqrt(re / j)), F = [(Q[0] + J[0]) / 2, (Q[1] + J[1]) / 2], W = [(G[0] + ue[0]) / 2, (G[1] + ue[1]) / 2];
      } else if (C.touch0) F = C.touch0[0], W = C.touch0[1];
      else return;
      C.zoom("touch", n(x(K, F, W), C.extent, s));
    }
  }
  function A(_, ...P) {
    if (this.__zooming) {
      var C = M(this, P).event(_), H = _.changedTouches, R = H.length, D, K;
      for (Ei(_), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, h), D = 0; D < R; ++D)
        K = H[D], C.touch0 && C.touch0[2] === K.identifier ? delete C.touch0 : C.touch1 && C.touch1[2] === K.identifier && delete C.touch1;
      if (C.touch1 && !C.touch0 && (C.touch0 = C.touch1, delete C.touch1), C.touch0) C.touch0[1] = this.__zoom.invert(C.touch0[0]);
      else if (C.end(), C.taps === 2 && (K = Vt(K, this), Math.hypot(g[0] - K[0], g[1] - K[1]) < k)) {
        var F = At(this).on("dblclick.zoom");
        F && F.apply(this, arguments);
      }
    }
  }
  return w.wheelDelta = function(_) {
    return arguments.length ? (r = typeof _ == "function" ? _ : xo(+_), w) : r;
  }, w.filter = function(_) {
    return arguments.length ? (e = typeof _ == "function" ? _ : xo(!!_), w) : e;
  }, w.touchable = function(_) {
    return arguments.length ? (o = typeof _ == "function" ? _ : xo(!!_), w) : o;
  }, w.extent = function(_) {
    return arguments.length ? (t = typeof _ == "function" ? _ : xo([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), w) : t;
  }, w.scaleExtent = function(_) {
    return arguments.length ? (i[0] = +_[0], i[1] = +_[1], w) : [i[0], i[1]];
  }, w.translateExtent = function(_) {
    return arguments.length ? (s[0][0] = +_[0][0], s[1][0] = +_[1][0], s[0][1] = +_[0][1], s[1][1] = +_[1][1], w) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, w.constrain = function(_) {
    return arguments.length ? (n = _, w) : n;
  }, w.duration = function(_) {
    return arguments.length ? (a = +_, w) : a;
  }, w.interpolate = function(_) {
    return arguments.length ? (l = _, w) : l;
  }, w.on = function() {
    var _ = u.on.apply(u, arguments);
    return _ === u ? w : _;
  }, w.clickDistance = function(_) {
    return arguments.length ? (y = (_ = +_) * _, w) : Math.sqrt(y);
  }, w.tapDistance = function(_) {
    return arguments.length ? (k = +_, w) : k;
  }, w;
}
const Zr = {
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
}, Ji = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], Rc = ["Enter", " ", "Escape"], Uv = {
  "node.a11yDescription.default": "Press enter or space to select a node. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.keyboardDisabled": "Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.ariaLiveMessage": ({ direction: e, x: t, y: n }) => `Moved selected node ${e}. New position, x: ${t}, y: ${n}`,
  "edge.a11yDescription.default": "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.",
  // Control elements
  "controls.ariaLabel": "Control Panel",
  "controls.zoomIn.ariaLabel": "Zoom In",
  "controls.zoomOut.ariaLabel": "Zoom Out",
  "controls.fitView.ariaLabel": "Fit View",
  "controls.interactive.ariaLabel": "Toggle Interactivity",
  // Mini map
  "minimap.ariaLabel": "Mini Map",
  // Handle
  "handle.ariaLabel": "Handle"
};
var mr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(mr || (mr = {}));
var Gt;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(Gt || (Gt = {}));
var Zo;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(Zo || (Zo = {}));
const Qi = {
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
var an;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(an || (an = {}));
var Yr;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(Yr || (Yr = {}));
var we;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(we || (we = {}));
const Ra = {
  [we.Left]: we.Right,
  [we.Right]: we.Left,
  [we.Top]: we.Bottom,
  [we.Bottom]: we.Top
};
function Jv(e, t) {
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
function Ba(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t?.has(i) || r.push(o);
  }), r.length && n(r);
}
function Qv(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const Bc = (e) => "id" in e && "source" in e && "target" in e, ep = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), zs = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), so = (e, t = [0, 0]) => {
  const { width: n, height: r } = zn(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, tp = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : zs(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? Yo(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return fi(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return gi(n);
}, ao = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = Yo(r);
      n = fi(n, o);
    }
  }), gi(n);
}, Rs = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...lo(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: d, selectable: g = !0, hidden: f = !1 } = u;
    if (s && !g || f)
      continue;
    const h = d.width ?? u.width ?? u.initialWidth ?? null, v = d.height ?? u.height ?? u.initialHeight ?? null, y = Wr(a, wr(u)), k = (h ?? 0) * (v ?? 0), w = i && y > 0;
    (!u.internals.handleBounds || w || y >= k || u.dragging) && l.push(u);
  }
  return l;
}, np = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function rp(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t?.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function op({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const a = rp(e, s), l = ao(a), u = Bs(l, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(u, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function qc({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: u } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let g = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", Zr.error005());
    else {
      const h = a.measured.width, v = a.measured.height;
      h && v && (g = [
        [l, u],
        [l + h, u + v]
      ]);
    }
  else a && _r(s.extent) && (g = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const f = _r(g) ? Un(t, g, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", Zr.error015()), {
    position: {
      x: f.x - l + (s.measured.width ?? 0) * d[0],
      y: f.y - u + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: f
  };
}
async function ip({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((f) => f.id)), s = [];
  for (const f of n) {
    if (f.deletable === !1)
      continue;
    const h = i.has(f.id), v = !h && f.parentId && s.find((y) => y.id === f.parentId);
    (h || v) && s.push(f);
  }
  const a = new Set(t.map((f) => f.id)), l = r.filter((f) => f.deletable !== !1), d = np(s, l);
  for (const f of l)
    a.has(f.id) && !d.find((v) => v.id === f.id) && d.push(f);
  if (!o)
    return {
      edges: d,
      nodes: s
    };
  const g = await o({
    nodes: s,
    edges: d
  });
  return typeof g == "boolean" ? g ? { edges: d, nodes: s } : { edges: [], nodes: [] } : g;
}
const yr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), Un = (e = { x: 0, y: 0 }, t, n) => ({
  x: yr(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: yr(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function Kc(e, t, n) {
  const { width: r, height: o } = zn(n), { x: i, y: s } = n.internals.positionAbsolute;
  return Un(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const qa = (e, t, n) => e < t ? yr(Math.abs(e - t), 1, t) / t : e > n ? -yr(Math.abs(e - n), 1, t) / t : 0, Fc = (e, t, n = 15, r = 40) => {
  const o = qa(e.x, r, t.width - r) * n, i = qa(e.y, r, t.height - r) * n;
  return [o, i];
}, fi = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), es = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), gi = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), wr = (e, t = [0, 0]) => {
  const { x: n, y: r } = zs(e) ? e.internals.positionAbsolute : so(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, Yo = (e, t = [0, 0]) => {
  const { x: n, y: r } = zs(e) ? e.internals.positionAbsolute : so(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, Zc = (e, t) => gi(fi(es(e), es(t))), Wr = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, Ka = (e) => cn(e.width) && cn(e.height) && cn(e.x) && cn(e.y), cn = (e) => !isNaN(e) && isFinite(e), sp = (e, t) => {
}, hi = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), lo = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? hi(a, s) : a;
}, Wo = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
});
function or(e, t) {
  if (typeof e == "number")
    return Math.floor((t - t / (1 + e)) * 0.5);
  if (typeof e == "string" && e.endsWith("px")) {
    const n = parseFloat(e);
    if (!Number.isNaN(n))
      return Math.floor(n);
  }
  if (typeof e == "string" && e.endsWith("%")) {
    const n = parseFloat(e);
    if (!Number.isNaN(n))
      return Math.floor(t * n * 0.01);
  }
  return console.error(`[React Flow] The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`), 0;
}
function ap(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = or(e, n), o = or(e, t);
    return {
      top: r,
      right: o,
      bottom: r,
      left: o,
      x: o * 2,
      y: r * 2
    };
  }
  if (typeof e == "object") {
    const r = or(e.top ?? e.y ?? 0, n), o = or(e.bottom ?? e.y ?? 0, n), i = or(e.left ?? e.x ?? 0, t), s = or(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function lp(e, t, n, r, o, i) {
  const { x: s, y: a } = Wo(e, [t, n, r]), { x: l, y: u } = Wo({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - l, g = i - u;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(g)
  };
}
const Bs = (e, t, n, r, o, i) => {
  const s = ap(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, u = Math.min(a, l), d = yr(u, r, o), g = e.x + e.width / 2, f = e.y + e.height / 2, h = t / 2 - g * d, v = n / 2 - f * d, y = lp(e, h, v, d, t, n), k = {
    left: Math.min(y.left - s.left, 0),
    top: Math.min(y.top - s.top, 0),
    right: Math.min(y.right - s.right, 0),
    bottom: Math.min(y.bottom - s.bottom, 0)
  };
  return {
    x: h - k.left + k.right,
    y: v - k.top + k.bottom,
    zoom: d
  };
}, ir = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function _r(e) {
  return e !== void 0 && e !== "parent";
}
function zn(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function Yc(e) {
  return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function cp(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function up(e) {
  return { ...Uv, ...e || {} };
}
function Si(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = Yt(e), a = lo({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: u } = n ? hi(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const Wc = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), Xc = (e) => e?.getRootNode?.() || window?.document, dp = ["INPUT", "SELECT", "TEXTAREA"];
function jc(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : dp.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const Gc = (e) => "clientX" in e, Yt = (e, t) => {
  const n = Gc(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
  return {
    x: r - (t?.left ?? 0),
    y: o - (t?.top ?? 0)
  };
}, Fa = (e, t, n, r, o) => {
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
      ...Wc(s)
    };
  });
};
function fp({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - e), g = Math.abs(u - t);
  return [l, u, d, g];
}
function bo(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Za({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case we.Left:
      return [t - bo(t - r, i), n];
    case we.Right:
      return [t + bo(r - t, i), n];
    case we.Top:
      return [t, n - bo(n - o, i)];
    case we.Bottom:
      return [t, n + bo(o - n, i)];
  }
}
function Uc({ sourceX: e, sourceY: t, sourcePosition: n = we.Bottom, targetX: r, targetY: o, targetPosition: i = we.Top, curvature: s = 0.25 }) {
  const [a, l] = Za({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [u, d] = Za({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [g, f, h, v] = fp({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: o,
    sourceControlX: a,
    sourceControlY: l,
    targetControlX: u,
    targetControlY: d
  });
  return [
    `M${e},${t} C${a},${l} ${u},${d} ${r},${o}`,
    g,
    f,
    h,
    v
  ];
}
function Jc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function gp({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r, elevateOnSelect: o = !1 }) {
  if (r !== void 0)
    return r;
  const i = o && n ? 1e3 : 0, s = Math.max(e.parentId ? e.internals.z : 0, t.parentId ? t.internals.z : 0);
  return i + s;
}
function hp({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = fi(Yo(e), Yo(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Wr(s, gi(i)) > 0;
}
const vp = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, pp = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), mp = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return Bc(e) ? n = { ...e } : n = {
    ...e,
    id: vp(e)
  }, pp(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Qc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = Jc({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const Ya = {
  [we.Left]: { x: -1, y: 0 },
  [we.Right]: { x: 1, y: 0 },
  [we.Top]: { x: 0, y: -1 },
  [we.Bottom]: { x: 0, y: 1 }
}, yp = ({ source: e, sourcePosition: t = we.Bottom, target: n }) => t === we.Left || t === we.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Wa = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function wp({ source: e, sourcePosition: t = we.Bottom, target: n, targetPosition: r = we.Top, center: o, offset: i, stepPosition: s }) {
  const a = Ya[t], l = Ya[r], u = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, g = yp({
    source: u,
    sourcePosition: t,
    target: d
  }), f = g.x !== 0 ? "x" : "y", h = g[f];
  let v = [], y, k;
  const w = { x: 0, y: 0 }, T = { x: 0, y: 0 }, [, , x, b] = Jc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[f] * l[f] === -1) {
    f === "x" ? (y = o.x ?? u.x + (d.x - u.x) * s, k = o.y ?? (u.y + d.y) / 2) : (y = o.x ?? (u.x + d.x) / 2, k = o.y ?? u.y + (d.y - u.y) * s);
    const M = [
      { x: y, y: u.y },
      { x: y, y: d.y }
    ], L = [
      { x: u.x, y: k },
      { x: d.x, y: k }
    ];
    a[f] === h ? v = f === "x" ? M : L : v = f === "x" ? L : M;
  } else {
    const M = [{ x: u.x, y: d.y }], L = [{ x: d.x, y: u.y }];
    if (f === "x" ? v = a.x === h ? L : M : v = a.y === h ? M : L, t === r) {
      const S = Math.abs(e[f] - n[f]);
      if (S <= i) {
        const A = Math.min(i - 1, i - S);
        a[f] === h ? w[f] = (u[f] > e[f] ? -1 : 1) * A : T[f] = (d[f] > n[f] ? -1 : 1) * A;
      }
    }
    if (t !== r) {
      const S = f === "x" ? "y" : "x", A = a[f] === l[S], _ = u[S] > d[S], P = u[S] < d[S];
      (a[f] === 1 && (!A && _ || A && P) || a[f] !== 1 && (!A && P || A && _)) && (v = f === "x" ? M : L);
    }
    const B = { x: u.x + w.x, y: u.y + w.y }, Y = { x: d.x + T.x, y: d.y + T.y }, U = Math.max(Math.abs(B.x - v[0].x), Math.abs(Y.x - v[0].x)), $ = Math.max(Math.abs(B.y - v[0].y), Math.abs(Y.y - v[0].y));
    U >= $ ? (y = (B.x + Y.x) / 2, k = v[0].y) : (y = v[0].x, k = (B.y + Y.y) / 2);
  }
  return [[
    e,
    { x: u.x + w.x, y: u.y + w.y },
    ...v,
    { x: d.x + T.x, y: d.y + T.y },
    n
  ], y, k, x, b];
}
function _p(e, t, n, r) {
  const o = Math.min(Wa(e, t) / 2, Wa(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function qs({ sourceX: e, sourceY: t, sourcePosition: n = we.Bottom, targetX: r, targetY: o, targetPosition: i = we.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20, stepPosition: d = 0.5 }) {
  const [g, f, h, v, y] = wp({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u,
    stepPosition: d
  });
  return [g.reduce((w, T, x) => {
    let b = "";
    return x > 0 && x < g.length - 1 ? b = _p(g[x - 1], T, g[x + 1], s) : b = `${x === 0 ? "M" : "L"}${T.x} ${T.y}`, w += b, w;
  }, ""), f, h, v, y];
}
function Xa(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function xp(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!Xa(t) || !Xa(n))
    return null;
  const r = t.internals.handleBounds || ja(t.handles), o = n.internals.handleBounds || ja(n.handles), i = Ga(r?.source ?? [], e.sourceHandle), s = Ga(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === mr.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return e.onError?.("008", Zr.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = i?.position || we.Bottom, l = s?.position || we.Top, u = Xr(t, i, a), d = Xr(n, s, l);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function ja(e) {
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
function Xr(e, t, n = we.Left, r = !1) {
  const o = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? zn(e);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch (t?.position ?? n) {
    case we.Top:
      return { x: o + s / 2, y: i };
    case we.Right:
      return { x: o + s, y: i + a / 2 };
    case we.Bottom:
      return { x: o + s / 2, y: i + a };
    case we.Left:
      return { x: o, y: i + a / 2 };
  }
}
function Ga(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function ts(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function bp(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = ts(l, t);
      i.has(u) || (s.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function Cp(e, t, n, r, o) {
  let i = 0.5;
  o === "start" ? i = 0 : o === "end" && (i = 1);
  let s = [
    (e.x + e.width * i) * t.zoom + t.x,
    e.y * t.zoom + t.y - r
  ], a = [-100 * i, -100];
  switch (n) {
    case we.Right:
      s = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [0, -100 * i];
      break;
    case we.Bottom:
      s[1] = (e.y + e.height) * t.zoom + t.y + r, a[1] = 0;
      break;
    case we.Left:
      s = [
        e.x * t.zoom + t.x - r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [-100, -100 * i];
      break;
  }
  return `translate(${s[0]}px, ${s[1]}px) translate(${a[0]}%, ${a[1]}%)`;
}
const Ks = {
  nodeOrigin: [0, 0],
  nodeExtent: Ji,
  elevateNodesOnSelect: !0,
  defaults: {}
}, kp = {
  ...Ks,
  checkEquality: !0
};
function Fs(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function Ep(e, t, n) {
  const r = Fs(Ks, n);
  for (const o of e.values())
    if (o.parentId)
      Zs(o, e, t, r);
    else {
      const i = so(o, r.nodeOrigin), s = _r(o.extent) ? o.extent : r.nodeExtent, a = Un(i, s, zn(o));
      o.internals.positionAbsolute = a;
    }
}
function Sp(e, t, n, r) {
  const o = Fs(kp, r);
  let i = e.length > 0;
  const s = new Map(t), a = o?.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const l of e) {
    let u = s.get(l.id);
    if (o.checkEquality && l === u?.internals.userNode)
      t.set(l.id, u);
    else {
      const d = so(l, o.nodeOrigin), g = _r(l.extent) ? l.extent : o.nodeExtent, f = Un(d, g, zn(l));
      u = {
        ...o.defaults,
        ...l,
        measured: {
          width: l.measured?.width,
          height: l.measured?.height
        },
        internals: {
          positionAbsolute: f,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: l.measured ? u?.internals.handleBounds : void 0,
          z: eu(l, a),
          userNode: l
        }
      }, t.set(l.id, u);
    }
    (u.measured === void 0 || u.measured.width === void 0 || u.measured.height === void 0) && !u.hidden && (i = !1), l.parentId && Zs(u, t, n, r);
  }
  return i;
}
function Np(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Zs(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: s } = Fs(Ks, r), a = e.parentId, l = t.get(a);
  if (!l) {
    console.warn(`Parent node ${a} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  Np(e, n);
  const u = o ? 1e3 : 0, { x: d, y: g, z: f } = Pp(e, l, i, s, u), { positionAbsolute: h } = e.internals, v = d !== h.x || g !== h.y;
  (v || f !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: v ? { x: d, y: g } : h,
      z: f
    }
  });
}
function eu(e, t) {
  return (cn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function Pp(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = zn(e), l = so(e, n), u = _r(e.extent) ? Un(l, e.extent, a) : l;
  let d = Un({ x: i + u.x, y: s + u.y }, r, a);
  e.extent === "parent" && (d = Kc(d, a, t));
  const g = eu(e, o), f = t.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: f >= g ? f + 1 : g
  };
}
function Tp(e, t, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const a = t.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? wr(a), u = Zc(l, s.rect);
    i.set(s.parentId, { expandedRect: u, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const u = a.internals.positionAbsolute, d = zn(a), g = a.origin ?? r, f = s.x < u.x ? Math.round(Math.abs(u.x - s.x)) : 0, h = s.y < u.y ? Math.round(Math.abs(u.y - s.y)) : 0, v = Math.max(d.width, Math.round(s.width)), y = Math.max(d.height, Math.round(s.height)), k = (v - d.width) * g[0], w = (y - d.height) * g[1];
    (f > 0 || h > 0 || k || w) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - f + k,
        y: a.position.y - h + w
      }
    }), n.get(l)?.forEach((T) => {
      e.some((x) => x.id === T.id) || o.push({
        id: T.id,
        type: "position",
        position: {
          x: T.position.x + f,
          y: T.position.y + h
        }
      });
    })), (d.width < s.width || d.height < s.height || f || h) && o.push({
      id: l,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: v + (f ? g[0] * f - k : 0),
        height: y + (h ? g[1] * h - w : 0)
      }
    });
  }), o;
}
function Dp(e, t, n, r, o, i) {
  const s = r?.querySelector(".xyflow__viewport");
  let a = !1;
  if (!s)
    return { changes: [], updatedInternals: a };
  const l = [], u = window.getComputedStyle(s), { m22: d } = new window.DOMMatrixReadOnly(u.transform), g = [];
  for (const f of e.values()) {
    const h = t.get(f.id);
    if (!h)
      continue;
    if (h.hidden) {
      t.set(h.id, {
        ...h,
        internals: {
          ...h.internals,
          handleBounds: void 0
        }
      }), a = !0;
      continue;
    }
    const v = Wc(f.nodeElement), y = h.measured.width !== v.width || h.measured.height !== v.height;
    if (!!(v.width && v.height && (y || !h.internals.handleBounds || f.force))) {
      const w = f.nodeElement.getBoundingClientRect(), T = _r(h.extent) ? h.extent : i;
      let { positionAbsolute: x } = h.internals;
      h.parentId && h.extent === "parent" ? x = Kc(x, v, t.get(h.parentId)) : T && (x = Un(x, T, v));
      const b = {
        ...h,
        measured: v,
        internals: {
          ...h.internals,
          positionAbsolute: x,
          handleBounds: {
            source: Fa("source", f.nodeElement, w, d, h.id),
            target: Fa("target", f.nodeElement, w, d, h.id)
          }
        }
      };
      t.set(h.id, b), h.parentId && Zs(b, t, n, { nodeOrigin: o }), a = !0, y && (l.push({
        id: h.id,
        type: "dimensions",
        dimensions: v
      }), h.expandParent && h.parentId && g.push({
        id: h.id,
        parentId: h.parentId,
        rect: wr(b, o)
      }));
    }
  }
  if (g.length > 0) {
    const f = Tp(g, t, n, o);
    l.push(...f);
  }
  return { changes: l, updatedInternals: a };
}
async function Ap({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function Ua(e, t, n, r, o, i) {
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
function Mp(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    Ua("source", l, d, e, o, s), Ua("target", l, u, e, i, a), t.set(r.id, r);
  }
}
function Op(e, t) {
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
function tu(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : tu(n, t) : !1;
}
function Ja(e, t, n) {
  let r = e;
  do {
    if (r?.matches?.(t))
      return !0;
    if (r === n)
      return !1;
    r = r?.parentElement;
  } while (r);
  return !1;
}
function Vp(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !tu(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function Ni({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
  const o = [];
  for (const [s, a] of t) {
    const l = n.get(s)?.internals.userNode;
    l && o.push({
      ...l,
      position: a.position,
      dragging: r
    });
  }
  if (!e)
    return [o[0], o];
  const i = n.get(e)?.internals.userNode;
  return [
    i ? {
      ...i,
      position: t.get(e)?.position || i.position,
      dragging: r
    } : o[0],
    o
  ];
}
function Hp({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, d = null, g = !1, f = null, h = !1, v = !1;
  function y({ noDragClassName: w, handleSelector: T, domNode: x, isSelectable: b, nodeId: E, nodeClickDistance: M = 0 }) {
    f = At(x);
    function L({ x: $, y: S }, A) {
      const { nodeLookup: _, nodeExtent: P, snapGrid: C, snapToGrid: H, nodeOrigin: R, onNodeDrag: D, onSelectionDrag: K, onError: F, updateNodePositions: W } = t();
      i = { x: $, y: S };
      let Q = !1, G = { x: 0, y: 0, x2: 0, y2: 0 };
      if (a.size > 1 && P) {
        const J = ao(a);
        G = es(J);
      }
      for (const [J, ue] of a) {
        if (!_.has(J))
          continue;
        let re = { x: $ - ue.distance.x, y: S - ue.distance.y };
        H && (re = hi(re, C));
        let j = [
          [P[0][0], P[0][1]],
          [P[1][0], P[1][1]]
        ];
        if (a.size > 1 && P && !ue.extent) {
          const { positionAbsolute: ee } = ue.internals, ae = ee.x - G.x + P[0][0], de = ee.x + ue.measured.width - G.x2 + P[1][0], te = ee.y - G.y + P[0][1], ge = ee.y + ue.measured.height - G.y2 + P[1][1];
          j = [
            [ae, te],
            [de, ge]
          ];
        }
        const { position: _e, positionAbsolute: ve } = qc({
          nodeId: J,
          nextPosition: re,
          nodeLookup: _,
          nodeExtent: j,
          nodeOrigin: R,
          onError: F
        });
        Q = Q || ue.position.x !== _e.x || ue.position.y !== _e.y, ue.position = _e, ue.internals.positionAbsolute = ve;
      }
      if (v = v || Q, !!Q && (W(a, !0), A && (r || D || !E && K))) {
        const [J, ue] = Ni({
          nodeId: E,
          dragItems: a,
          nodeLookup: _
        });
        r?.(A, a, J, ue), D?.(A, J, ue), E || K?.(A, ue);
      }
    }
    async function B() {
      if (!d)
        return;
      const { transform: $, panBy: S, autoPanSpeed: A, autoPanOnNodeDrag: _ } = t();
      if (!_) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [P, C] = Fc(u, d, A);
      (P !== 0 || C !== 0) && (i.x = (i.x ?? 0) - P / $[2], i.y = (i.y ?? 0) - C / $[2], await S({ x: P, y: C }) && L(i, null)), s = requestAnimationFrame(B);
    }
    function Y($) {
      const { nodeLookup: S, multiSelectionActive: A, nodesDraggable: _, transform: P, snapGrid: C, snapToGrid: H, selectNodesOnDrag: R, onNodeDragStart: D, onSelectionDragStart: K, unselectNodesAndEdges: F } = t();
      g = !0, (!R || !b) && !A && E && (S.get(E)?.selected || F()), b && R && E && e?.(E);
      const W = Si($.sourceEvent, { transform: P, snapGrid: C, snapToGrid: H, containerBounds: d });
      if (i = W, a = Vp(S, _, W, E), a.size > 0 && (n || D || !E && K)) {
        const [Q, G] = Ni({
          nodeId: E,
          dragItems: a,
          nodeLookup: S
        });
        n?.($.sourceEvent, a, Q, G), D?.($.sourceEvent, Q, G), E || K?.($.sourceEvent, G);
      }
    }
    const U = oh().clickDistance(M).on("start", ($) => {
      const { domNode: S, nodeDragThreshold: A, transform: _, snapGrid: P, snapToGrid: C } = t();
      d = S?.getBoundingClientRect() || null, h = !1, v = !1, A === 0 && Y($), i = Si($.sourceEvent, { transform: _, snapGrid: P, snapToGrid: C, containerBounds: d }), u = Yt($.sourceEvent, d);
    }).on("drag", ($) => {
      const { autoPanOnNodeDrag: S, transform: A, snapGrid: _, snapToGrid: P, nodeDragThreshold: C, nodeLookup: H } = t(), R = Si($.sourceEvent, { transform: A, snapGrid: _, snapToGrid: P, containerBounds: d });
      if (($.sourceEvent.type === "touchmove" && $.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      E && !H.has(E)) && (h = !0), !h) {
        if (!l && S && g && (l = !0, B()), !g) {
          const D = R.xSnapped - (i.x ?? 0), K = R.ySnapped - (i.y ?? 0);
          Math.sqrt(D * D + K * K) > C && Y($);
        }
        (i.x !== R.xSnapped || i.y !== R.ySnapped) && a && g && (u = Yt($.sourceEvent, d), L(R, $.sourceEvent));
      }
    }).on("end", ($) => {
      if (!(!g || h) && (l = !1, g = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: S, updateNodePositions: A, onNodeDragStop: _, onSelectionDragStop: P } = t();
        if (v && (A(a, !1), v = !1), o || _ || !E && P) {
          const [C, H] = Ni({
            nodeId: E,
            dragItems: a,
            nodeLookup: S,
            dragging: !1
          });
          o?.($.sourceEvent, a, C, H), _?.($.sourceEvent, C, H), E || P?.($.sourceEvent, H);
        }
      }
    }).filter(($) => {
      const S = $.target;
      return !$.button && (!w || !Ja(S, `.${w}`, x)) && (!T || Ja(S, T, x));
    });
    f.call(U);
  }
  function k() {
    f?.on(".drag", null);
  }
  return {
    update: y,
    destroy: k
  };
}
function Lp(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    Wr(o, wr(i)) > 0 && r.push(i);
  return r;
}
const $p = 250;
function Ip(e, t, n, r) {
  let o = [], i = 1 / 0;
  const s = Lp(e, n, t + $p);
  for (const a of s) {
    const l = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const u of l) {
      if (r.nodeId === u.nodeId && r.type === u.type && r.id === u.id)
        continue;
      const { x: d, y: g } = Xr(a, u, u.position, !0), f = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(g - e.y, 2));
      f > t || (f < i ? (o = [{ ...u, x: d, y: g }], i = f) : f === i && o.push({ ...u, x: d, y: g }));
    }
  }
  if (!o.length)
    return null;
  if (o.length > 1) {
    const a = r.type === "source" ? "target" : "source";
    return o.find((l) => l.type === a) ?? o[0];
  }
  return o[0];
}
function nu(e, t, n, r, o, i = !1) {
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((u) => u.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...Xr(s, l, l.position, !0) } : l;
}
function ru(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function zp(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const ou = () => !0;
function Rp(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: d, flowId: g, panBy: f, cancelConnection: h, onConnectStart: v, onConnect: y, onConnectEnd: k, isValidConnection: w = ou, onReconnectEnd: T, updateConnection: x, getTransform: b, getFromHandle: E, autoPanSpeed: M, dragThreshold: L = 1 }) {
  const B = Xc(e.target);
  let Y = 0, U;
  const { x: $, y: S } = Yt(e), A = B?.elementFromPoint($, S), _ = ru(i, A), P = a?.getBoundingClientRect();
  let C = !1;
  if (!P || !_)
    return;
  const H = nu(o, _, r, l, t);
  if (!H)
    return;
  let R = Yt(e, P), D = !1, K = null, F = !1, W = null;
  function Q() {
    if (!d || !P)
      return;
    const [ee, ae] = Fc(R, P, M);
    f({ x: ee, y: ae }), Y = requestAnimationFrame(Q);
  }
  const G = {
    ...H,
    nodeId: o,
    type: _,
    position: H.position
  }, J = l.get(o);
  let re = {
    inProgress: !0,
    isValid: null,
    from: Xr(J, G, we.Left, !0),
    fromHandle: G,
    fromPosition: G.position,
    fromNode: J,
    to: R,
    toHandle: null,
    toPosition: Ra[G.position],
    toNode: null
  };
  function j() {
    C = !0, x(re), v?.(e, { nodeId: o, handleId: r, handleType: _ });
  }
  L === 0 && j();
  function _e(ee) {
    if (!C) {
      const { x: ge, y: ce } = Yt(ee), pe = ge - $, q = ce - S;
      if (!(pe * pe + q * q > L * L))
        return;
      j();
    }
    if (!E() || !G) {
      ve(ee);
      return;
    }
    const ae = b();
    R = Yt(ee, P), U = Ip(lo(R, ae, !1, [1, 1]), n, l, G), D || (Q(), D = !0);
    const de = iu(ee, {
      handle: U,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: w,
      doc: B,
      lib: u,
      flowId: g,
      nodeLookup: l
    });
    W = de.handleDomNode, K = de.connection, F = zp(!!U, de.isValid);
    const te = {
      // from stays the same
      ...re,
      isValid: F,
      to: de.toHandle && F ? Wo({ x: de.toHandle.x, y: de.toHandle.y }, ae) : R,
      toHandle: de.toHandle,
      toPosition: F && de.toHandle ? de.toHandle.position : Ra[G.position],
      toNode: de.toHandle ? l.get(de.toHandle.nodeId) : null
    };
    F && U && re.toHandle && te.toHandle && re.toHandle.type === te.toHandle.type && re.toHandle.nodeId === te.toHandle.nodeId && re.toHandle.id === te.toHandle.id && re.to.x === te.to.x && re.to.y === te.to.y || (x(te), re = te);
  }
  function ve(ee) {
    if (C) {
      (U || W) && K && F && y?.(K);
      const { inProgress: ae, ...de } = re, te = {
        ...de,
        toPosition: re.toHandle ? re.toPosition : null
      };
      k?.(ee, te), i && T?.(ee, te);
    }
    h(), cancelAnimationFrame(Y), D = !1, F = !1, K = null, W = null, B.removeEventListener("mousemove", _e), B.removeEventListener("mouseup", ve), B.removeEventListener("touchmove", _e), B.removeEventListener("touchend", ve);
  }
  B.addEventListener("mousemove", _e), B.addEventListener("mouseup", ve), B.addEventListener("touchmove", _e), B.addEventListener("touchend", ve);
}
function iu(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = ou, nodeLookup: d }) {
  const g = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: h, y: v } = Yt(e), y = s.elementFromPoint(h, v), k = y?.classList.contains(`${a}-flow__handle`) ? y : f, w = {
    handleDomNode: k,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (k) {
    const T = ru(void 0, k), x = k.getAttribute("data-nodeid"), b = k.getAttribute("data-handleid"), E = k.classList.contains("connectable"), M = k.classList.contains("connectableend");
    if (!x || !T)
      return w;
    const L = {
      source: g ? x : r,
      sourceHandle: g ? b : o,
      target: g ? r : x,
      targetHandle: g ? o : b
    };
    w.connection = L;
    const Y = E && M && (n === mr.Strict ? g && T === "source" || !g && T === "target" : x !== r || b !== o);
    w.isValid = Y && u(L), w.toHandle = nu(x, T, b, d, n, !0);
  }
  return w;
}
const Qa = {
  onPointerDown: Rp,
  isValid: iu
};
function Bp({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = At(e);
  function i({ translateExtent: a, width: l, height: u, zoomStep: d = 10, pannable: g = !0, zoomable: f = !0, inversePan: h = !1 }) {
    const v = (x) => {
      const b = n();
      if (x.sourceEvent.type !== "wheel" || !t)
        return;
      const E = -x.sourceEvent.deltaY * (x.sourceEvent.deltaMode === 1 ? 0.05 : x.sourceEvent.deltaMode ? 1 : 2e-3) * d, M = b[2] * Math.pow(2, E);
      t.scaleTo(M);
    };
    let y = [0, 0];
    const k = (x) => {
      (x.sourceEvent.type === "mousedown" || x.sourceEvent.type === "touchstart") && (y = [
        x.sourceEvent.clientX ?? x.sourceEvent.touches[0].clientX,
        x.sourceEvent.clientY ?? x.sourceEvent.touches[0].clientY
      ]);
    }, w = (x) => {
      const b = n();
      if (x.sourceEvent.type !== "mousemove" && x.sourceEvent.type !== "touchmove" || !t)
        return;
      const E = [
        x.sourceEvent.clientX ?? x.sourceEvent.touches[0].clientX,
        x.sourceEvent.clientY ?? x.sourceEvent.touches[0].clientY
      ], M = [E[0] - y[0], E[1] - y[1]];
      y = E;
      const L = r() * Math.max(b[2], Math.log(b[2])) * (h ? -1 : 1), B = {
        x: b[0] - M[0] * L,
        y: b[1] - M[1] * L
      }, Y = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: B.x,
        y: B.y,
        zoom: b[2]
      }, Y, a);
    }, T = zc().on("start", k).on("zoom", g ? w : null).on("zoom.wheel", f ? v : null);
    o.call(T, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: Vt
  };
}
const qp = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, vi = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Pi = ({ x: e, y: t, zoom: n }) => di.translate(e, t).scale(n), sr = (e, t) => e.target.closest(`.${t}`), su = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), Kp = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, Ti = (e, t = 0, n = Kp, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, au = (e) => {
  const t = e.ctrlKey && ir() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function Fp({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (d) => {
    if (sr(d, t))
      return !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const g = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const k = Vt(d), w = au(d), T = g * Math.pow(2, w);
      r.scaleTo(n, T, k, d);
      return;
    }
    const f = d.deltaMode === 1 ? 20 : 1;
    let h = o === Gt.Vertical ? 0 : d.deltaX * f, v = o === Gt.Horizontal ? 0 : d.deltaY * f;
    !ir() && d.shiftKey && o !== Gt.Vertical && (h = d.deltaY * f, v = 0), r.translateBy(
      n,
      -(h / g) * i,
      -(v / g) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const y = vi(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, a?.(d, y)), e.isPanScrolling && (l?.(d, y), e.panScrollTimeout = setTimeout(() => {
      u?.(d, y), e.isPanScrolling = !1;
    }, 150));
  };
}
function Zp({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = sr(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function Yp({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = vi(r.transform);
    e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, o);
  };
}
function Wp({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && su(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, vi(i.transform));
  };
}
function Xp({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && su(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && qp(e.prevViewport, s.transform))) {
      const a = vi(s.transform);
      e.prevViewport = a, clearTimeout(e.timerId), e.timerId = setTimeout(
        () => {
          o?.(s.sourceEvent, a);
        },
        // we need a setTimeout for panOnScroll to supress multiple end events fired during scroll
        n ? 150 : 0
      );
    }
  };
}
function jp({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: u }) {
  return (d) => {
    const g = e || t, f = n && d.ctrlKey;
    if (d.button === 1 && d.type === "mousedown" && (sr(d, `${u}-flow__node`) || sr(d, `${u}-flow__edge`)))
      return !0;
    if (!r && !g && !o && !i && !n || s || sr(d, a) && d.type === "wheel" || sr(d, l) && (d.type !== "wheel" || o && d.type === "wheel" && !e) || !n && d.ctrlKey && d.type === "wheel")
      return !1;
    if (!n && d.type === "touchstart" && d.touches?.length > 1)
      return d.preventDefault(), !1;
    if (!g && !o && !f && d.type === "wheel" || !r && (d.type === "mousedown" || d.type === "touchstart") || Array.isArray(r) && !r.includes(d.button) && d.type === "mousedown")
      return !1;
    const h = Array.isArray(r) && r.includes(d.button) || !d.button || d.button <= 1;
    return (!d.ctrlKey || d.type === "wheel") && h;
  };
}
function Gp({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: s, onPanZoomStart: a, onPanZoomEnd: l, onDraggingChange: u }) {
  const d = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, g = e.getBoundingClientRect(), f = zc().clickDistance(!cn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), h = At(e).call(f);
  x({
    x: i.x,
    y: i.y,
    zoom: yr(i.zoom, t, n)
  }, [
    [0, 0],
    [g.width, g.height]
  ], o);
  const v = h.on("wheel.zoom"), y = h.on("dblclick.zoom");
  f.wheelDelta(au);
  function k(S, A) {
    return h ? new Promise((_) => {
      f?.interpolate(A?.interpolate === "linear" ? Vr : Po).transform(Ti(h, A?.duration, A?.ease, () => _(!0)), S);
    }) : Promise.resolve(!1);
  }
  function w({ noWheelClassName: S, noPanClassName: A, onPaneContextMenu: _, userSelectionActive: P, panOnScroll: C, panOnDrag: H, panOnScrollMode: R, panOnScrollSpeed: D, preventScrolling: K, zoomOnPinch: F, zoomOnScroll: W, zoomOnDoubleClick: Q, zoomActivationKeyPressed: G, lib: J, onTransformChange: ue }) {
    P && !d.isZoomingOrPanning && T();
    const j = C && !G && !P ? Fp({
      zoomPanValues: d,
      noWheelClassName: S,
      d3Selection: h,
      d3Zoom: f,
      panOnScrollMode: R,
      panOnScrollSpeed: D,
      zoomOnPinch: F,
      onPanZoomStart: a,
      onPanZoom: s,
      onPanZoomEnd: l
    }) : Zp({
      noWheelClassName: S,
      preventScrolling: K,
      d3ZoomHandler: v
    });
    if (h.on("wheel.zoom", j, { passive: !1 }), !P) {
      const ve = Yp({
        zoomPanValues: d,
        onDraggingChange: u,
        onPanZoomStart: a
      });
      f.on("start", ve);
      const ee = Wp({
        zoomPanValues: d,
        panOnDrag: H,
        onPaneContextMenu: !!_,
        onPanZoom: s,
        onTransformChange: ue
      });
      f.on("zoom", ee);
      const ae = Xp({
        zoomPanValues: d,
        panOnDrag: H,
        panOnScroll: C,
        onPaneContextMenu: _,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      f.on("end", ae);
    }
    const _e = jp({
      zoomActivationKeyPressed: G,
      panOnDrag: H,
      zoomOnScroll: W,
      panOnScroll: C,
      zoomOnDoubleClick: Q,
      zoomOnPinch: F,
      userSelectionActive: P,
      noPanClassName: A,
      noWheelClassName: S,
      lib: J
    });
    f.filter(_e), Q ? h.on("dblclick.zoom", y) : h.on("dblclick.zoom", null);
  }
  function T() {
    f.on("zoom", null);
  }
  async function x(S, A, _) {
    const P = Pi(S), C = f?.constrain()(P, A, _);
    return C && await k(C), new Promise((H) => H(C));
  }
  async function b(S, A) {
    const _ = Pi(S);
    return await k(_, A), new Promise((P) => P(_));
  }
  function E(S) {
    if (h) {
      const A = Pi(S), _ = h.property("__zoom");
      (_.k !== S.zoom || _.x !== S.x || _.y !== S.y) && f?.transform(h, A, null, { sync: !0 });
    }
  }
  function M() {
    const S = h ? Ic(h.node()) : { x: 0, y: 0, k: 1 };
    return { x: S.x, y: S.y, zoom: S.k };
  }
  function L(S, A) {
    return h ? new Promise((_) => {
      f?.interpolate(A?.interpolate === "linear" ? Vr : Po).scaleTo(Ti(h, A?.duration, A?.ease, () => _(!0)), S);
    }) : Promise.resolve(!1);
  }
  function B(S, A) {
    return h ? new Promise((_) => {
      f?.interpolate(A?.interpolate === "linear" ? Vr : Po).scaleBy(Ti(h, A?.duration, A?.ease, () => _(!0)), S);
    }) : Promise.resolve(!1);
  }
  function Y(S) {
    f?.scaleExtent(S);
  }
  function U(S) {
    f?.translateExtent(S);
  }
  function $(S) {
    const A = !cn(S) || S < 0 ? 0 : S;
    f?.clickDistance(A);
  }
  return {
    update: w,
    destroy: T,
    setViewport: b,
    setViewportConstrained: x,
    getViewport: M,
    scaleTo: L,
    scaleBy: B,
    setScaleExtent: Y,
    setTranslateExtent: U,
    syncViewport: E,
    setClickDistance: $
  };
}
var el;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(el || (el = {}));
var Up = /* @__PURE__ */ X("<div><!></div>");
function Vn(e, t) {
  ie(t, !0);
  let n = m(t, "id", 7, null), r = m(t, "type", 7, "source"), o = m(t, "position", 23, () => we.Top), i = m(t, "style", 7), s = m(t, "class", 7), a = m(t, "isConnectable", 7), l = m(t, "isConnectableStart", 7, !0), u = m(t, "isConnectableEnd", 7, !0), d = m(t, "isValidConnection", 7), g = m(t, "onconnect", 7), f = m(t, "ondisconnect", 7), h = m(t, "children", 7), v = /* @__PURE__ */ Le(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "id",
    "type",
    "position",
    "style",
    "class",
    "isConnectable",
    "isConnectableStart",
    "isConnectableEnd",
    "isValidConnection",
    "onconnect",
    "ondisconnect",
    "children"
  ]);
  const y = Dn("svelteflow__node_id"), k = Dn("svelteflow__node_connectable");
  let w = /* @__PURE__ */ N(() => r() === "target"), T = /* @__PURE__ */ N(() => a() !== void 0 ? a() : k.value), x = Rt(), b = /* @__PURE__ */ N(() => x.ariaLabelConfig), E = null;
  zl(() => {
    if (g() || f()) {
      x.edges;
      let D = x.connectionLookup.get(`${y}-${r()}${n() ? `-${n()}` : ""}`);
      if (E && !Jv(D, E)) {
        const K = D ?? /* @__PURE__ */ new Map();
        Ba(E, K, f()), Ba(K, E, g());
      }
      E = new Map(D);
    }
  });
  let M = /* @__PURE__ */ N(() => {
    if (!x.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: D, toHandle: K, isValid: F } = x.connection, W = D && D.nodeId === y && D.type === r() && D.id === n(), Q = K && K.nodeId === y && K.type === r() && K.id === n(), G = x.connectionMode === mr.Strict ? D?.type !== r() : y !== D?.nodeId || n() !== D?.id;
    return [
      !0,
      W,
      Q,
      G,
      Q && F
    ];
  }), L = /* @__PURE__ */ N(() => Jr(c(M), 5)), B = /* @__PURE__ */ N(() => c(L)[0]), Y = /* @__PURE__ */ N(() => c(L)[1]), U = /* @__PURE__ */ N(() => c(L)[2]), $ = /* @__PURE__ */ N(() => c(L)[3]), S = /* @__PURE__ */ N(() => c(L)[4]);
  function A(D) {
    const K = x.onbeforeconnect?.(D) ?? D;
    K && (x.addEdge(K), x.onconnect?.(D));
  }
  function _(D) {
    const K = Gc(D);
    (K && D.button === 0 || !K) && Qa.onPointerDown(D, {
      handleId: n(),
      nodeId: y,
      isTarget: c(w),
      connectionRadius: x.connectionRadius,
      domNode: x.domNode,
      nodeLookup: x.nodeLookup,
      connectionMode: x.connectionMode,
      lib: "svelte",
      autoPanOnConnect: x.autoPanOnConnect,
      flowId: x.flowId,
      isValidConnection: d() ?? x.isValidConnection,
      updateConnection: x.updateConnection,
      cancelConnection: x.cancelConnection,
      panBy: x.panBy,
      onConnect: A,
      onConnectStart: (F, W) => {
        x.onconnectstart?.(F, {
          nodeId: W.nodeId,
          handleId: W.handleId,
          handleType: W.handleType
        });
      },
      onConnectEnd: (F, W) => {
        x.onconnectend?.(F, W);
      },
      getTransform: () => [x.viewport.x, x.viewport.y, x.viewport.zoom],
      getFromHandle: () => x.connection.fromHandle,
      dragThreshold: x.connectionDragThreshold
    });
  }
  function P(D) {
    if (!y || !x.clickConnectStartHandle && !l())
      return;
    if (!x.clickConnectStartHandle) {
      x.onclickconnectstart?.(D, { nodeId: y, handleId: n(), handleType: r() }), x.clickConnectStartHandle = { nodeId: y, type: r(), id: n() };
      return;
    }
    const K = Xc(D.target), F = d() ?? x.isValidConnection, { connectionMode: W, clickConnectStartHandle: Q, flowId: G, nodeLookup: J } = x, { connection: ue, isValid: re } = Qa.isValid(D, {
      handle: { nodeId: y, id: n(), type: r() },
      connectionMode: W,
      fromNodeId: Q.nodeId,
      fromHandleId: Q.id ?? null,
      fromType: Q.type,
      isValidConnection: F,
      flowId: G,
      doc: K,
      lib: "svelte",
      nodeLookup: J
    });
    re && ue && A(ue);
    const j = structuredClone(Sl(x.connection));
    delete j.inProgress, j.toPosition = j.toHandle ? j.toHandle.position : null, x.onclickconnectend?.(D, j), x.clickConnectStartHandle = null;
  }
  var C = Up(), H = () => {
  };
  et(
    C,
    (D) => ({
      "data-handleid": n(),
      "data-nodeid": y,
      "data-handlepos": o(),
      "data-id": `${x.flowId ?? ""}-${y ?? ""}-${n() ?? "null" ?? ""}-${r() ?? ""}`,
      class: [
        "svelte-flow__handle",
        `svelte-flow__handle-${o()}`,
        x.noDragClass,
        x.noPanClass,
        o(),
        s()
      ],
      onmousedown: _,
      ontouchstart: _,
      onclick: x.clickConnect ? P : void 0,
      onkeypress: H,
      style: i(),
      role: "button",
      "aria-label": c(b)["handle.ariaLabel"],
      tabindex: "-1",
      ...v,
      [Sn]: D
    }),
    [
      () => ({
        valid: c(S),
        connectingto: c(U),
        connectingfrom: c(Y),
        source: !c(w),
        target: c(w),
        connectablestart: l(),
        connectableend: u(),
        connectable: c(T),
        connectionindicator: c(T) && (!c(B) || c($)) && (c(B) || x.clickConnectStartHandle ? u() : l())
      })
    ]
  );
  var R = z(C);
  return Xe(R, () => h() ?? rt), I(C), O(e, C), se({
    get id() {
      return n();
    },
    set id(D = null) {
      n(D), p();
    },
    get type() {
      return r();
    },
    set type(D = "source") {
      r(D), p();
    },
    get position() {
      return o();
    },
    set position(D = we.Top) {
      o(D), p();
    },
    get style() {
      return i();
    },
    set style(D) {
      i(D), p();
    },
    get class() {
      return s();
    },
    set class(D) {
      s(D), p();
    },
    get isConnectable() {
      return a();
    },
    set isConnectable(D) {
      a(D), p();
    },
    get isConnectableStart() {
      return l();
    },
    set isConnectableStart(D = !0) {
      l(D), p();
    },
    get isConnectableEnd() {
      return u();
    },
    set isConnectableEnd(D = !0) {
      u(D), p();
    },
    get isValidConnection() {
      return d();
    },
    set isValidConnection(D) {
      d(D), p();
    },
    get onconnect() {
      return g();
    },
    set onconnect(D) {
      g(D), p();
    },
    get ondisconnect() {
      return f();
    },
    set ondisconnect(D) {
      f(D), p();
    },
    get children() {
      return h();
    },
    set children(D) {
      h(D), p();
    }
  });
}
ne(
  Vn,
  {
    id: {},
    type: {},
    position: {},
    style: {},
    class: {},
    isConnectable: {},
    isConnectableStart: {},
    isConnectableEnd: {},
    isValidConnection: {},
    onconnect: {},
    ondisconnect: {},
    children: {}
  },
  [],
  [],
  !0
);
var Jp = /* @__PURE__ */ X("<!> <!>", 1);
function Ys(e, t) {
  ie(t, !0);
  let n = m(t, "data", 7), r = m(t, "targetPosition", 23, () => we.Top), o = m(t, "sourcePosition", 23, () => we.Bottom);
  var i = Jp(), s = le(i);
  Vn(s, {
    type: "target",
    get position() {
      return r();
    }
  });
  var a = V(s), l = V(a);
  return Vn(l, {
    type: "source",
    get position() {
      return o();
    }
  }), ke(() => $e(a, ` ${n()?.label ?? ""} `)), O(e, i), se({
    get data() {
      return n();
    },
    set data(u) {
      n(u), p();
    },
    get targetPosition() {
      return r();
    },
    set targetPosition(u = we.Top) {
      r(u), p();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(u = we.Bottom) {
      o(u), p();
    }
  });
}
ne(Ys, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var Qp = /* @__PURE__ */ X(" <!>", 1);
function lu(e, t) {
  ie(t, !0);
  let n = m(t, "data", 23, () => ({ label: "Node" })), r = m(t, "sourcePosition", 23, () => we.Bottom);
  ye();
  var o = Qp(), i = le(o), s = V(i);
  return Vn(s, {
    type: "source",
    get position() {
      return r();
    }
  }), ke(() => $e(i, `${n()?.label ?? ""} `)), O(e, o), se({
    get data() {
      return n();
    },
    set data(a = { label: "Node" }) {
      n(a), p();
    },
    get sourcePosition() {
      return r();
    },
    set sourcePosition(a = we.Bottom) {
      r(a), p();
    }
  });
}
ne(lu, { data: {}, sourcePosition: {} }, [], [], !0);
var e0 = /* @__PURE__ */ X(" <!>", 1);
function cu(e, t) {
  ie(t, !0);
  let n = m(t, "data", 23, () => ({ label: "Node" })), r = m(t, "targetPosition", 23, () => we.Top);
  ye();
  var o = e0(), i = le(o), s = V(i);
  return Vn(s, {
    type: "target",
    get position() {
      return r();
    }
  }), ke(() => $e(i, `${n()?.label ?? ""} `)), O(e, o), se({
    get data() {
      return n();
    },
    set data(a = { label: "Node" }) {
      n(a), p();
    },
    get targetPosition() {
      return r();
    },
    set targetPosition(a = we.Top) {
      r(a), p();
    }
  });
}
ne(cu, { data: {}, targetPosition: {} }, [], [], !0);
function uu(e, t) {
}
ne(uu, {}, [], [], !0);
function Di(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function du(e, t) {
  const n = /* @__PURE__ */ N(Rt), r = /* @__PURE__ */ N(() => c(n).domNode);
  let o;
  return c(r) ? Di(e, c(r), t) : o = Cs(() => {
    We(() => {
      Di(e, c(r), t), o?.();
    });
  }), {
    async update(i) {
      Di(e, c(r), i);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e), o?.();
    }
  };
}
function fu() {
  let e = /* @__PURE__ */ Ne(typeof window > "u");
  if (c(e)) {
    const t = Cs(() => {
      We(() => {
        Z(e, !1), t?.();
      });
    });
  }
  return {
    get value() {
      return c(e);
    }
  };
}
const tl = (e) => ep(e), t0 = (e) => Bc(e);
function en(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const Xo = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var n0 = /* @__PURE__ */ X("<div><!></div>");
const r0 = {
  hash: "svelte-w2n27y",
  code: ".transparent.svelte-w2n27y {background:transparent;}"
};
function gu(e, t) {
  ie(t, !0), Oe(e, r0);
  let n = m(t, "x", 7, 0), r = m(t, "y", 7, 0), o = m(t, "width", 7), i = m(t, "height", 7), s = m(t, "selectEdgeOnClick", 7, !1), a = m(t, "transparent", 7, !1), l = m(t, "class", 7), u = m(t, "children", 7), d = /* @__PURE__ */ Le(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "x",
    "y",
    "width",
    "height",
    "selectEdgeOnClick",
    "transparent",
    "class",
    "children"
  ]);
  const g = Rt(), f = Dn("svelteflow__edge_id");
  let h = /* @__PURE__ */ N(() => g.visible.edges.get(f)?.zIndex);
  var v = n0(), y = () => {
    s() && f && g.handleEdgeSelection(f);
  };
  et(
    v,
    (w) => ({
      class: [
        "svelte-flow__edge-label",
        { transparent: a() },
        l()
      ],
      tabindex: "-1",
      onclick: y,
      ...d,
      [Zt]: w
    }),
    [
      () => ({
        display: fu().value ? "none" : void 0,
        cursor: s() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: en(o()),
        height: en(i()),
        "z-index": c(h)
      })
    ],
    "svelte-w2n27y"
  );
  var k = z(v);
  return Xe(k, () => u() ?? rt), I(v), st(v, (w, T) => du?.(w, T), () => "edge-labels"), O(e, v), se({
    get x() {
      return n();
    },
    set x(w = 0) {
      n(w), p();
    },
    get y() {
      return r();
    },
    set y(w = 0) {
      r(w), p();
    },
    get width() {
      return o();
    },
    set width(w) {
      o(w), p();
    },
    get height() {
      return i();
    },
    set height(w) {
      i(w), p();
    },
    get selectEdgeOnClick() {
      return s();
    },
    set selectEdgeOnClick(w = !1) {
      s(w), p();
    },
    get transparent() {
      return a();
    },
    set transparent(w = !1) {
      a(w), p();
    },
    get class() {
      return l();
    },
    set class(w) {
      l(w), p();
    },
    get children() {
      return u();
    },
    set children(w) {
      u(w), p();
    }
  });
}
ne(
  gu,
  {
    x: {},
    y: {},
    width: {},
    height: {},
    selectEdgeOnClick: {},
    transparent: {},
    class: {},
    children: {}
  },
  [],
  [],
  !0
);
var o0 = /* @__PURE__ */ me("<path></path>"), i0 = /* @__PURE__ */ me('<path fill="none"></path><!><!>', 1);
function co(e, t) {
  ie(t, !0);
  let n = m(t, "id", 7), r = m(t, "path", 7), o = m(t, "label", 7), i = m(t, "labelX", 7), s = m(t, "labelY", 7), a = m(t, "labelStyle", 7), l = m(t, "markerStart", 7), u = m(t, "markerEnd", 7), d = m(t, "style", 7), g = m(t, "interactionWidth", 7, 20), f = m(t, "class", 7), h = /* @__PURE__ */ Le(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "id",
    "path",
    "label",
    "labelX",
    "labelY",
    "labelStyle",
    "markerStart",
    "markerEnd",
    "style",
    "interactionWidth",
    "class"
  ]);
  var v = i0(), y = le(v), k = V(y);
  {
    var w = (b) => {
      var E = o0();
      et(E, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": g(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...h
      })), O(b, E);
    };
    oe(k, (b) => {
      g() > 0 && b(w);
    });
  }
  var T = V(k);
  {
    var x = (b) => {
      gu(b, {
        get x() {
          return i();
        },
        get y() {
          return s();
        },
        get style() {
          return a();
        },
        selectEdgeOnClick: !0,
        children: (E, M) => {
          ye();
          var L = Ee();
          ke(() => $e(L, o())), O(E, L);
        },
        $$slots: { default: !0 }
      });
    };
    oe(T, (b) => {
      o() && b(x);
    });
  }
  return ke(() => {
    xe(y, "id", n()), xe(y, "d", r()), yt(y, 0, xn(["svelte-flow__edge-path", f()])), xe(y, "marker-start", l()), xe(y, "marker-end", u()), ft(y, d());
  }), O(e, v), se({
    get id() {
      return n();
    },
    set id(b) {
      n(b), p();
    },
    get path() {
      return r();
    },
    set path(b) {
      r(b), p();
    },
    get label() {
      return o();
    },
    set label(b) {
      o(b), p();
    },
    get labelX() {
      return i();
    },
    set labelX(b) {
      i(b), p();
    },
    get labelY() {
      return s();
    },
    set labelY(b) {
      s(b), p();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(b) {
      a(b), p();
    },
    get markerStart() {
      return l();
    },
    set markerStart(b) {
      l(b), p();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(b) {
      u(b), p();
    },
    get style() {
      return d();
    },
    set style(b) {
      d(b), p();
    },
    get interactionWidth() {
      return g();
    },
    set interactionWidth(b = 20) {
      g(b), p();
    },
    get class() {
      return f();
    },
    set class(b) {
      f(b), p();
    }
  });
}
ne(
  co,
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
function Ws(e, t) {
  ie(t, !0);
  let n = m(t, "id", 7), r = m(t, "interactionWidth", 7), o = m(t, "label", 7), i = m(t, "labelStyle", 7), s = m(t, "markerEnd", 7), a = m(t, "markerStart", 7), l = m(t, "pathOptions", 7), u = m(t, "sourcePosition", 7), d = m(t, "sourceX", 7), g = m(t, "sourceY", 7), f = m(t, "style", 7), h = m(t, "targetPosition", 7), v = m(t, "targetX", 7), y = m(t, "targetY", 7), k = /* @__PURE__ */ N(() => Uc({
    sourceX: d(),
    sourceY: g(),
    targetX: v(),
    targetY: y(),
    sourcePosition: u(),
    targetPosition: h(),
    curvature: l()?.curvature
  })), w = /* @__PURE__ */ N(() => Jr(c(k), 3)), T = /* @__PURE__ */ N(() => c(w)[0]), x = /* @__PURE__ */ N(() => c(w)[1]), b = /* @__PURE__ */ N(() => c(w)[2]);
  return co(e, {
    get id() {
      return n();
    },
    get path() {
      return c(T);
    },
    get labelX() {
      return c(x);
    },
    get labelY() {
      return c(b);
    },
    get label() {
      return o();
    },
    get labelStyle() {
      return i();
    },
    get markerStart() {
      return a();
    },
    get markerEnd() {
      return s();
    },
    get interactionWidth() {
      return r();
    },
    get style() {
      return f();
    }
  }), se({
    get id() {
      return n();
    },
    set id(E) {
      n(E), p();
    },
    get interactionWidth() {
      return r();
    },
    set interactionWidth(E) {
      r(E), p();
    },
    get label() {
      return o();
    },
    set label(E) {
      o(E), p();
    },
    get labelStyle() {
      return i();
    },
    set labelStyle(E) {
      i(E), p();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(E) {
      s(E), p();
    },
    get markerStart() {
      return a();
    },
    set markerStart(E) {
      a(E), p();
    },
    get pathOptions() {
      return l();
    },
    set pathOptions(E) {
      l(E), p();
    },
    get sourcePosition() {
      return u();
    },
    set sourcePosition(E) {
      u(E), p();
    },
    get sourceX() {
      return d();
    },
    set sourceX(E) {
      d(E), p();
    },
    get sourceY() {
      return g();
    },
    set sourceY(E) {
      g(E), p();
    },
    get style() {
      return f();
    },
    set style(E) {
      f(E), p();
    },
    get targetPosition() {
      return h();
    },
    set targetPosition(E) {
      h(E), p();
    },
    get targetX() {
      return v();
    },
    set targetX(E) {
      v(E), p();
    },
    get targetY() {
      return y();
    },
    set targetY(E) {
      y(E), p();
    }
  });
}
ne(
  Ws,
  {
    id: {},
    interactionWidth: {},
    label: {},
    labelStyle: {},
    markerEnd: {},
    markerStart: {},
    pathOptions: {},
    sourcePosition: {},
    sourceX: {},
    sourceY: {},
    style: {},
    targetPosition: {},
    targetX: {},
    targetY: {}
  },
  [],
  [],
  !0
);
function hu(e, t) {
  ie(t, !0);
  let n = m(t, "interactionWidth", 7), r = m(t, "label", 7), o = m(t, "labelStyle", 7), i = m(t, "style", 7), s = m(t, "markerEnd", 7), a = m(t, "markerStart", 7), l = m(t, "sourcePosition", 7), u = m(t, "sourceX", 7), d = m(t, "sourceY", 7), g = m(t, "targetPosition", 7), f = m(t, "targetX", 7), h = m(t, "targetY", 7), v = /* @__PURE__ */ N(() => qs({
    sourceX: u(),
    sourceY: d(),
    targetX: f(),
    targetY: h(),
    sourcePosition: l(),
    targetPosition: g()
  })), y = /* @__PURE__ */ N(() => Jr(c(v), 3)), k = /* @__PURE__ */ N(() => c(y)[0]), w = /* @__PURE__ */ N(() => c(y)[1]), T = /* @__PURE__ */ N(() => c(y)[2]);
  return co(e, {
    get path() {
      return c(k);
    },
    get labelX() {
      return c(w);
    },
    get labelY() {
      return c(T);
    },
    get label() {
      return r();
    },
    get labelStyle() {
      return o();
    },
    get markerStart() {
      return a();
    },
    get markerEnd() {
      return s();
    },
    get interactionWidth() {
      return n();
    },
    get style() {
      return i();
    }
  }), se({
    get interactionWidth() {
      return n();
    },
    set interactionWidth(x) {
      n(x), p();
    },
    get label() {
      return r();
    },
    set label(x) {
      r(x), p();
    },
    get labelStyle() {
      return o();
    },
    set labelStyle(x) {
      o(x), p();
    },
    get style() {
      return i();
    },
    set style(x) {
      i(x), p();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(x) {
      s(x), p();
    },
    get markerStart() {
      return a();
    },
    set markerStart(x) {
      a(x), p();
    },
    get sourcePosition() {
      return l();
    },
    set sourcePosition(x) {
      l(x), p();
    },
    get sourceX() {
      return u();
    },
    set sourceX(x) {
      u(x), p();
    },
    get sourceY() {
      return d();
    },
    set sourceY(x) {
      d(x), p();
    },
    get targetPosition() {
      return g();
    },
    set targetPosition(x) {
      g(x), p();
    },
    get targetX() {
      return f();
    },
    set targetX(x) {
      f(x), p();
    },
    get targetY() {
      return h();
    },
    set targetY(x) {
      h(x), p();
    }
  });
}
ne(
  hu,
  {
    interactionWidth: {},
    label: {},
    labelStyle: {},
    style: {},
    markerEnd: {},
    markerStart: {},
    sourcePosition: {},
    sourceX: {},
    sourceY: {},
    targetPosition: {},
    targetX: {},
    targetY: {}
  },
  [],
  [],
  !0
);
function vu(e, t) {
  ie(t, !0);
  let n = m(t, "sourceX", 7), r = m(t, "sourceY", 7), o = m(t, "targetX", 7), i = m(t, "targetY", 7), s = m(t, "label", 7), a = m(t, "labelStyle", 7), l = m(t, "markerStart", 7), u = m(t, "markerEnd", 7), d = m(t, "interactionWidth", 7), g = m(t, "style", 7), f = /* @__PURE__ */ N(() => Qc({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), h = /* @__PURE__ */ N(() => Jr(c(f), 3)), v = /* @__PURE__ */ N(() => c(h)[0]), y = /* @__PURE__ */ N(() => c(h)[1]), k = /* @__PURE__ */ N(() => c(h)[2]);
  return co(e, {
    get path() {
      return c(v);
    },
    get labelX() {
      return c(y);
    },
    get labelY() {
      return c(k);
    },
    get label() {
      return s();
    },
    get labelStyle() {
      return a();
    },
    get markerStart() {
      return l();
    },
    get markerEnd() {
      return u();
    },
    get interactionWidth() {
      return d();
    },
    get style() {
      return g();
    }
  }), se({
    get sourceX() {
      return n();
    },
    set sourceX(w) {
      n(w), p();
    },
    get sourceY() {
      return r();
    },
    set sourceY(w) {
      r(w), p();
    },
    get targetX() {
      return o();
    },
    set targetX(w) {
      o(w), p();
    },
    get targetY() {
      return i();
    },
    set targetY(w) {
      i(w), p();
    },
    get label() {
      return s();
    },
    set label(w) {
      s(w), p();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(w) {
      a(w), p();
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
    get interactionWidth() {
      return d();
    },
    set interactionWidth(w) {
      d(w), p();
    },
    get style() {
      return g();
    },
    set style(w) {
      g(w), p();
    }
  });
}
ne(
  vu,
  {
    sourceX: {},
    sourceY: {},
    targetX: {},
    targetY: {},
    label: {},
    labelStyle: {},
    markerStart: {},
    markerEnd: {},
    interactionWidth: {},
    style: {}
  },
  [],
  [],
  !0
);
function pu(e, t) {
  ie(t, !0);
  let n = m(t, "sourceX", 7), r = m(t, "sourceY", 7), o = m(t, "sourcePosition", 7), i = m(t, "targetX", 7), s = m(t, "targetY", 7), a = m(t, "targetPosition", 7), l = m(t, "label", 7), u = m(t, "labelStyle", 7), d = m(t, "markerStart", 7), g = m(t, "markerEnd", 7), f = m(t, "interactionWidth", 7), h = m(t, "style", 7), v = /* @__PURE__ */ N(() => qs({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), y = /* @__PURE__ */ N(() => Jr(c(v), 3)), k = /* @__PURE__ */ N(() => c(y)[0]), w = /* @__PURE__ */ N(() => c(y)[1]), T = /* @__PURE__ */ N(() => c(y)[2]);
  return co(e, {
    get path() {
      return c(k);
    },
    get labelX() {
      return c(w);
    },
    get labelY() {
      return c(T);
    },
    get label() {
      return l();
    },
    get labelStyle() {
      return u();
    },
    get markerStart() {
      return d();
    },
    get markerEnd() {
      return g();
    },
    get interactionWidth() {
      return f();
    },
    get style() {
      return h();
    }
  }), se({
    get sourceX() {
      return n();
    },
    set sourceX(x) {
      n(x), p();
    },
    get sourceY() {
      return r();
    },
    set sourceY(x) {
      r(x), p();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(x) {
      o(x), p();
    },
    get targetX() {
      return i();
    },
    set targetX(x) {
      i(x), p();
    },
    get targetY() {
      return s();
    },
    set targetY(x) {
      s(x), p();
    },
    get targetPosition() {
      return a();
    },
    set targetPosition(x) {
      a(x), p();
    },
    get label() {
      return l();
    },
    set label(x) {
      l(x), p();
    },
    get labelStyle() {
      return u();
    },
    set labelStyle(x) {
      u(x), p();
    },
    get markerStart() {
      return d();
    },
    set markerStart(x) {
      d(x), p();
    },
    get markerEnd() {
      return g();
    },
    set markerEnd(x) {
      g(x), p();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(x) {
      f(x), p();
    },
    get style() {
      return h();
    },
    set style(x) {
      h(x), p();
    }
  });
}
ne(
  pu,
  {
    sourceX: {},
    sourceY: {},
    sourcePosition: {},
    targetX: {},
    targetY: {},
    targetPosition: {},
    label: {},
    labelStyle: {},
    markerStart: {},
    markerEnd: {},
    interactionWidth: {},
    style: {}
  },
  [],
  [],
  !0
);
function s0(e) {
  let t = 0, n = Xn(0), r;
  return () => {
    wf() && (c(n), no(() => (t === 0 && (r = nt(() => e(() => ko(n)))), t += 1, () => {
      Af().then(() => {
        t -= 1, t === 0 && (r?.(), r = void 0);
      });
    })));
  };
}
class a0 {
  #t;
  #e;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(t, n) {
    this.#t = t, this.#e = s0(n);
  }
  get current() {
    return this.#e(), this.#t();
  }
}
const l0 = /\(.+\)/, c0 = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class u0 extends a0 {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(t, n) {
    let r = l0.test(t) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    t.split(/[\s,]+/).some((i) => c0.has(i.trim())) ? t : `(${t})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => Ri(o, "change", i)
    );
  }
}
function d0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  return Rs(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function nl(e) {
  const { edges: t, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l } = e, u = /* @__PURE__ */ new Map();
  for (const d of t) {
    const g = r.get(d.source), f = r.get(d.target);
    if (!g || !f)
      continue;
    if (a) {
      const { visibleNodes: y, transform: k, width: w, height: T } = e;
      if (hp({
        sourceNode: g,
        targetNode: f,
        width: w,
        height: T,
        transform: k
      }))
        y.set(g.id, g), y.set(f.id, f);
      else
        continue;
    }
    const h = o.get(d.id);
    if (h && d === h.edge && g == h.sourceNode && f == h.targetNode) {
      u.set(d.id, h);
      continue;
    }
    const v = xp({
      id: d.id,
      sourceNode: g,
      targetNode: f,
      sourceHandle: d.sourceHandle || null,
      targetHandle: d.targetHandle || null,
      connectionMode: i,
      onError: s
    });
    v && u.set(d.id, {
      ...n,
      ...d,
      ...v,
      zIndex: gp({
        selected: d.selected,
        zIndex: d.zIndex ?? n.zIndex,
        sourceNode: g,
        targetNode: f,
        elevateOnSelect: l
      }),
      sourceNode: g,
      targetNode: f,
      edge: d
    });
  }
  return u;
}
const mu = {
  input: lu,
  output: cu,
  default: Ys,
  group: uu
}, yu = {
  straight: vu,
  smoothstep: hu,
  default: Ws,
  step: pu
};
function f0(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = ao(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return Bs(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function g0(e) {
  class t {
    #t = /* @__PURE__ */ N(() => e.props.id ?? "1");
    get flowId() {
      return c(this.#t);
    }
    set flowId(r) {
      Z(this.#t, r);
    }
    #e = /* @__PURE__ */ Ne(null);
    get domNode() {
      return c(this.#e);
    }
    set domNode(r) {
      Z(this.#e, r);
    }
    #n = /* @__PURE__ */ Ne(null);
    get panZoom() {
      return c(this.#n);
    }
    set panZoom(r) {
      Z(this.#n, r);
    }
    #r = /* @__PURE__ */ Ne(e.width ?? 0);
    get width() {
      return c(this.#r);
    }
    set width(r) {
      Z(this.#r, r);
    }
    #o = /* @__PURE__ */ Ne(e.height ?? 0);
    get height() {
      return c(this.#o);
    }
    set height(r) {
      Z(this.#o, r);
    }
    #i = /* @__PURE__ */ N(() => {
      const r = Sp(e.nodes, this.nodeLookup, this.parentLookup, {
        nodeExtent: this.nodeExtent,
        nodeOrigin: this.nodeOrigin,
        elevateNodesOnSelect: e.props.elevateNodesOnSelect ?? !0,
        checkEquality: !0
      });
      return this.fitViewQueued && r && (this.fitViewOptions?.duration ? this.resolveFitView() : queueMicrotask(() => {
        this.resolveFitView();
      })), r;
    });
    get nodesInitialized() {
      return c(this.#i);
    }
    set nodesInitialized(r) {
      Z(this.#i, r);
    }
    #s = /* @__PURE__ */ N(() => this.panZoom !== null);
    get viewportInitialized() {
      return c(this.#s);
    }
    set viewportInitialized(r) {
      Z(this.#s, r);
    }
    #a = /* @__PURE__ */ N(() => (Mp(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
    get _edges() {
      return c(this.#a);
    }
    set _edges(r) {
      Z(this.#a, r);
    }
    get nodes() {
      return this.nodesInitialized, e.nodes;
    }
    set nodes(r) {
      e.nodes = r;
    }
    get edges() {
      return this._edges;
    }
    set edges(r) {
      e.edges = r;
    }
    _prevSelectedNodes = [];
    _prevSelectedNodeIds = /* @__PURE__ */ new Set();
    #l = /* @__PURE__ */ N(() => {
      const r = this._prevSelectedNodeIds.size, o = /* @__PURE__ */ new Set(), i = this.nodes.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedNodeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedNodeIds.size > 0) && (this._prevSelectedNodes = i), this._prevSelectedNodeIds = o, this._prevSelectedNodes;
    });
    get selectedNodes() {
      return c(this.#l);
    }
    set selectedNodes(r) {
      Z(this.#l, r);
    }
    _prevSelectedEdges = [];
    _prevSelectedEdgeIds = /* @__PURE__ */ new Set();
    #c = /* @__PURE__ */ N(() => {
      const r = this._prevSelectedEdgeIds.size, o = /* @__PURE__ */ new Set(), i = this.edges.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedEdgeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedEdgeIds.size > 0) && (this._prevSelectedEdges = i), this._prevSelectedEdgeIds = o, this._prevSelectedEdges;
    });
    get selectedEdges() {
      return c(this.#c);
    }
    set selectedEdges(r) {
      Z(this.#c, r);
    }
    selectionChangeHandlers = /* @__PURE__ */ new Map();
    nodeLookup = /* @__PURE__ */ new Map();
    parentLookup = /* @__PURE__ */ new Map();
    connectionLookup = /* @__PURE__ */ new Map();
    edgeLookup = /* @__PURE__ */ new Map();
    _prevVisibleEdges = /* @__PURE__ */ new Map();
    #u = /* @__PURE__ */ N(() => {
      const {
        // We need to access this._nodes to trigger on changes
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        nodes: r,
        _edges: o,
        _prevVisibleEdges: i,
        nodeLookup: s,
        connectionMode: a,
        onerror: l,
        onlyRenderVisibleElements: u,
        defaultEdgeOptions: d
      } = this;
      let g, f;
      const h = {
        edges: o,
        defaultEdgeOptions: d,
        previousEdges: i,
        nodeLookup: s,
        connectionMode: a,
        elevateEdgesOnSelect: e.props.elevateEdgesOnSelect ?? !0,
        onerror: l
      };
      if (u) {
        const { viewport: v, width: y, height: k } = this, w = [v.x, v.y, v.zoom];
        g = d0(s, w, y, k), f = nl({
          ...h,
          onlyRenderVisible: !0,
          visibleNodes: g,
          transform: w,
          width: y,
          height: k
        });
      } else
        g = this.nodeLookup, f = nl(h);
      return { nodes: g, edges: f };
    });
    get visible() {
      return c(this.#u);
    }
    set visible(r) {
      Z(this.#u, r);
    }
    #d = /* @__PURE__ */ N(() => e.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return c(this.#d);
    }
    set nodesDraggable(r) {
      Z(this.#d, r);
    }
    #f = /* @__PURE__ */ N(() => e.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return c(this.#f);
    }
    set nodesConnectable(r) {
      Z(this.#f, r);
    }
    #g = /* @__PURE__ */ N(() => e.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return c(this.#g);
    }
    set elementsSelectable(r) {
      Z(this.#g, r);
    }
    #h = /* @__PURE__ */ N(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return c(this.#h);
    }
    set nodesFocusable(r) {
      Z(this.#h, r);
    }
    #v = /* @__PURE__ */ N(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return c(this.#v);
    }
    set edgesFocusable(r) {
      Z(this.#v, r);
    }
    #p = /* @__PURE__ */ N(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return c(this.#p);
    }
    set disableKeyboardA11y(r) {
      Z(this.#p, r);
    }
    #m = /* @__PURE__ */ N(() => e.props.minZoom ?? 0.5);
    get minZoom() {
      return c(this.#m);
    }
    set minZoom(r) {
      Z(this.#m, r);
    }
    #y = /* @__PURE__ */ N(() => e.props.maxZoom ?? 2);
    get maxZoom() {
      return c(this.#y);
    }
    set maxZoom(r) {
      Z(this.#y, r);
    }
    #w = /* @__PURE__ */ N(() => e.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return c(this.#w);
    }
    set nodeOrigin(r) {
      Z(this.#w, r);
    }
    #_ = /* @__PURE__ */ N(() => e.props.nodeExtent ?? Ji);
    get nodeExtent() {
      return c(this.#_);
    }
    set nodeExtent(r) {
      Z(this.#_, r);
    }
    #x = /* @__PURE__ */ N(() => e.props.translateExtent ?? Ji);
    get translateExtent() {
      return c(this.#x);
    }
    set translateExtent(r) {
      Z(this.#x, r);
    }
    #b = /* @__PURE__ */ N(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return c(this.#b);
    }
    set defaultEdgeOptions(r) {
      Z(this.#b, r);
    }
    #C = /* @__PURE__ */ N(() => e.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return c(this.#C);
    }
    set nodeDragThreshold(r) {
      Z(this.#C, r);
    }
    #k = /* @__PURE__ */ N(() => e.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return c(this.#k);
    }
    set autoPanOnNodeDrag(r) {
      Z(this.#k, r);
    }
    #E = /* @__PURE__ */ N(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return c(this.#E);
    }
    set autoPanOnConnect(r) {
      Z(this.#E, r);
    }
    #S = /* @__PURE__ */ N(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return c(this.#S);
    }
    set autoPanOnNodeFocus(r) {
      Z(this.#S, r);
    }
    #N = /* @__PURE__ */ N(() => e.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return c(this.#N);
    }
    set connectionDragThreshold(r) {
      Z(this.#N, r);
    }
    fitViewQueued = e.props.fitView ?? !1;
    fitViewOptions = e.props.fitViewOptions;
    fitViewResolver = null;
    #P = /* @__PURE__ */ N(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return c(this.#P);
    }
    set snapGrid(r) {
      Z(this.#P, r);
    }
    #T = /* @__PURE__ */ Ne(!1);
    get dragging() {
      return c(this.#T);
    }
    set dragging(r) {
      Z(this.#T, r);
    }
    #D = /* @__PURE__ */ Ne(null);
    get selectionRect() {
      return c(this.#D);
    }
    set selectionRect(r) {
      Z(this.#D, r);
    }
    #A = /* @__PURE__ */ Ne(!1);
    get selectionKeyPressed() {
      return c(this.#A);
    }
    set selectionKeyPressed(r) {
      Z(this.#A, r);
    }
    #M = /* @__PURE__ */ Ne(!1);
    get multiselectionKeyPressed() {
      return c(this.#M);
    }
    set multiselectionKeyPressed(r) {
      Z(this.#M, r);
    }
    #O = /* @__PURE__ */ Ne(!1);
    get deleteKeyPressed() {
      return c(this.#O);
    }
    set deleteKeyPressed(r) {
      Z(this.#O, r);
    }
    #V = /* @__PURE__ */ Ne(!1);
    get panActivationKeyPressed() {
      return c(this.#V);
    }
    set panActivationKeyPressed(r) {
      Z(this.#V, r);
    }
    #H = /* @__PURE__ */ Ne(!1);
    get zoomActivationKeyPressed() {
      return c(this.#H);
    }
    set zoomActivationKeyPressed(r) {
      Z(this.#H, r);
    }
    #L = /* @__PURE__ */ Ne(null);
    get selectionRectMode() {
      return c(this.#L);
    }
    set selectionRectMode(r) {
      Z(this.#L, r);
    }
    #$ = /* @__PURE__ */ Ne("");
    get ariaLiveMessage() {
      return c(this.#$);
    }
    set ariaLiveMessage(r) {
      Z(this.#$, r);
    }
    #I = /* @__PURE__ */ N(() => e.props.selectionMode ?? Zo.Partial);
    get selectionMode() {
      return c(this.#I);
    }
    set selectionMode(r) {
      Z(this.#I, r);
    }
    #z = /* @__PURE__ */ N(() => ({ ...mu, ...e.props.nodeTypes }));
    get nodeTypes() {
      return c(this.#z);
    }
    set nodeTypes(r) {
      Z(this.#z, r);
    }
    #R = /* @__PURE__ */ N(() => ({ ...yu, ...e.props.edgeTypes }));
    get edgeTypes() {
      return c(this.#R);
    }
    set edgeTypes(r) {
      Z(this.#R, r);
    }
    #B = /* @__PURE__ */ N(() => e.props.noPanClass ?? "nopan");
    get noPanClass() {
      return c(this.#B);
    }
    set noPanClass(r) {
      Z(this.#B, r);
    }
    #q = /* @__PURE__ */ N(() => e.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return c(this.#q);
    }
    set noDragClass(r) {
      Z(this.#q, r);
    }
    #K = /* @__PURE__ */ N(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return c(this.#K);
    }
    set noWheelClass(r) {
      Z(this.#K, r);
    }
    #F = /* @__PURE__ */ N(() => up(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return c(this.#F);
    }
    set ariaLabelConfig(r) {
      Z(this.#F, r);
    }
    #Z = /* @__PURE__ */ Ne(f0(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return c(this.#Z);
    }
    set _viewport(r) {
      Z(this.#Z, r);
    }
    get viewport() {
      return e.viewport ?? this._viewport;
    }
    set viewport(r) {
      e.viewport && (e.viewport = r), this._viewport = r;
    }
    #Y = /* @__PURE__ */ Ne(
      // _connection is viewport independent and originating from XYHandle
      Qi
    );
    get _connection() {
      return c(this.#Y);
    }
    set _connection(r) {
      Z(this.#Y, r);
    }
    #W = /* @__PURE__ */ N(() => this._connection.inProgress ? {
      ...this._connection,
      to: lo(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return c(this.#W);
    }
    set connection(r) {
      Z(this.#W, r);
    }
    #X = /* @__PURE__ */ N(() => e.props.connectionMode ?? mr.Strict);
    get connectionMode() {
      return c(this.#X);
    }
    set connectionMode(r) {
      Z(this.#X, r);
    }
    #j = /* @__PURE__ */ N(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return c(this.#j);
    }
    set connectionRadius(r) {
      Z(this.#j, r);
    }
    #G = /* @__PURE__ */ N(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return c(this.#G);
    }
    set isValidConnection(r) {
      Z(this.#G, r);
    }
    #U = /* @__PURE__ */ N(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return c(this.#U);
    }
    set selectNodesOnDrag(r) {
      Z(this.#U, r);
    }
    #J = /* @__PURE__ */ N(() => e.props.defaultMarkerColor ?? "#b1b1b7");
    get defaultMarkerColor() {
      return c(this.#J);
    }
    set defaultMarkerColor(r) {
      Z(this.#J, r);
    }
    #Q = /* @__PURE__ */ N(() => bp(e.edges, {
      defaultColor: this.defaultMarkerColor,
      id: this.flowId,
      defaultMarkerStart: this.defaultEdgeOptions.markerStart,
      defaultMarkerEnd: this.defaultEdgeOptions.markerEnd
    }));
    get markers() {
      return c(this.#Q);
    }
    set markers(r) {
      Z(this.#Q, r);
    }
    #ee = /* @__PURE__ */ N(() => e.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return c(this.#ee);
    }
    set onlyRenderVisibleElements(r) {
      Z(this.#ee, r);
    }
    #te = /* @__PURE__ */ N(() => e.props.onflowerror ?? sp);
    get onerror() {
      return c(this.#te);
    }
    set onerror(r) {
      Z(this.#te, r);
    }
    #ne = /* @__PURE__ */ N(() => e.props.ondelete);
    get ondelete() {
      return c(this.#ne);
    }
    set ondelete(r) {
      Z(this.#ne, r);
    }
    #re = /* @__PURE__ */ N(() => e.props.onbeforedelete);
    get onbeforedelete() {
      return c(this.#re);
    }
    set onbeforedelete(r) {
      Z(this.#re, r);
    }
    #oe = /* @__PURE__ */ N(() => e.props.onbeforeconnect);
    get onbeforeconnect() {
      return c(this.#oe);
    }
    set onbeforeconnect(r) {
      Z(this.#oe, r);
    }
    #ie = /* @__PURE__ */ N(() => e.props.onconnect);
    get onconnect() {
      return c(this.#ie);
    }
    set onconnect(r) {
      Z(this.#ie, r);
    }
    #se = /* @__PURE__ */ N(() => e.props.onconnectstart);
    get onconnectstart() {
      return c(this.#se);
    }
    set onconnectstart(r) {
      Z(this.#se, r);
    }
    #ae = /* @__PURE__ */ N(() => e.props.onconnectend);
    get onconnectend() {
      return c(this.#ae);
    }
    set onconnectend(r) {
      Z(this.#ae, r);
    }
    #le = /* @__PURE__ */ N(() => e.props.onbeforereconnect);
    get onbeforereconnect() {
      return c(this.#le);
    }
    set onbeforereconnect(r) {
      Z(this.#le, r);
    }
    #ce = /* @__PURE__ */ N(() => e.props.onreconnect);
    get onreconnect() {
      return c(this.#ce);
    }
    set onreconnect(r) {
      Z(this.#ce, r);
    }
    #ue = /* @__PURE__ */ N(() => e.props.onreconnectstart);
    get onreconnectstart() {
      return c(this.#ue);
    }
    set onreconnectstart(r) {
      Z(this.#ue, r);
    }
    #de = /* @__PURE__ */ N(() => e.props.onreconnectend);
    get onreconnectend() {
      return c(this.#de);
    }
    set onreconnectend(r) {
      Z(this.#de, r);
    }
    #fe = /* @__PURE__ */ N(() => e.props.clickConnect ?? !0);
    get clickConnect() {
      return c(this.#fe);
    }
    set clickConnect(r) {
      Z(this.#fe, r);
    }
    #ge = /* @__PURE__ */ N(() => e.props.onclickconnectstart);
    get onclickconnectstart() {
      return c(this.#ge);
    }
    set onclickconnectstart(r) {
      Z(this.#ge, r);
    }
    #he = /* @__PURE__ */ N(() => e.props.onclickconnectend);
    get onclickconnectend() {
      return c(this.#he);
    }
    set onclickconnectend(r) {
      Z(this.#he, r);
    }
    #ve = /* @__PURE__ */ Ne(null);
    get clickConnectStartHandle() {
      return c(this.#ve);
    }
    set clickConnectStartHandle(r) {
      Z(this.#ve, r);
    }
    #pe = /* @__PURE__ */ N(() => e.props.onselectiondrag);
    get onselectiondrag() {
      return c(this.#pe);
    }
    set onselectiondrag(r) {
      Z(this.#pe, r);
    }
    #me = /* @__PURE__ */ N(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return c(this.#me);
    }
    set onselectiondragstart(r) {
      Z(this.#me, r);
    }
    #ye = /* @__PURE__ */ N(() => e.props.onselectiondragstop);
    get onselectiondragstop() {
      return c(this.#ye);
    }
    set onselectiondragstop(r) {
      Z(this.#ye, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await op(
        {
          nodes: this.nodeLookup,
          width: this.width,
          height: this.height,
          panZoom: this.panZoom,
          minZoom: this.minZoom,
          maxZoom: this.maxZoom
        },
        this.fitViewOptions
      ), this.fitViewResolver?.resolve(!0), this.fitViewQueued = !1, this.fitViewOptions = void 0, this.fitViewResolver = null);
    };
    _prefersDark = new u0("(prefers-color-scheme: dark)", e.props.colorModeSSR === "dark");
    #we = /* @__PURE__ */ N(() => e.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : e.props.colorMode ?? "light");
    get colorMode() {
      return c(this.#we);
    }
    set colorMode(r) {
      Z(this.#we, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = Qi, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new t();
}
function Rt() {
  const e = Dn(jo);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
const jo = Symbol();
function wu(e) {
  const t = g0(e);
  function n(S) {
    t.nodeTypes = {
      ...mu,
      ...S
    };
  }
  function r(S) {
    t.edgeTypes = {
      ...yu,
      ...S
    };
  }
  function o(S) {
    t.edges = mp(S, t.edges);
  }
  const i = (S, A = !1) => {
    t.nodes = t.nodes.map((_) => {
      const P = S.get(_.id);
      return P ? { ..._, position: P.position, dragging: A } : _;
    });
  };
  function s(S) {
    const { changes: A, updatedInternals: _ } = Dp(S, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin);
    if (!_)
      return;
    Ep(t.nodeLookup, t.parentLookup, {
      nodeOrigin: t.nodeOrigin,
      nodeExtent: t.nodeExtent
    }), t.fitViewQueued && t.resolveFitView();
    const P = /* @__PURE__ */ new Map();
    for (const C of A) {
      const H = t.nodeLookup.get(C.id)?.internals.userNode;
      if (!H)
        continue;
      const R = { ...H };
      switch (C.type) {
        case "dimensions": {
          const D = { ...R.measured, ...C.dimensions };
          C.setAttributes && (R.width = C.dimensions?.width ?? R.width, R.height = C.dimensions?.height ?? R.height), R.measured = D;
          break;
        }
        case "position":
          R.position = C.position ?? R.position;
          break;
      }
      P.set(C.id, R);
    }
    t.nodes = t.nodes.map((C) => P.get(C.id) ?? C);
  }
  function a(S) {
    const A = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = S, t.fitViewResolver = A, t.nodes = [...t.nodes], A.promise;
  }
  async function l(S, A, _) {
    const P = typeof _?.zoom < "u" ? _.zoom : t.maxZoom, C = t.panZoom;
    return C ? (await C.setViewport({
      x: t.width / 2 - S * P,
      y: t.height / 2 - A * P,
      zoom: P
    }, { duration: _?.duration, ease: _?.ease, interpolate: _?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function u(S, A) {
    const _ = t.panZoom;
    return _ ? _.scaleBy(S, A) : Promise.resolve(!1);
  }
  function d(S) {
    return u(1.2, S);
  }
  function g(S) {
    return u(1 / 1.2, S);
  }
  function f(S) {
    const A = t.panZoom;
    A && (A.setScaleExtent([S, t.maxZoom]), t.minZoom = S);
  }
  function h(S) {
    const A = t.panZoom;
    A && (A.setScaleExtent([t.minZoom, S]), t.maxZoom = S);
  }
  function v(S) {
    const A = t.panZoom;
    A && (A.setTranslateExtent(S), t.translateExtent = S);
  }
  function y(S) {
    t.panZoom?.setClickDistance(S);
  }
  function k(S, A = null) {
    let _ = !1;
    const P = S.map((C) => (A ? A.has(C.id) : !0) && C.selected ? (_ = !0, { ...C, selected: !1 }) : C);
    return [_, P];
  }
  function w(S) {
    const A = S?.nodes ? new Set(S.nodes.map((D) => D.id)) : null, [_, P] = k(t.nodes, A);
    _ && (t.nodes = P);
    const C = S?.edges ? new Set(S.edges.map((D) => D.id)) : null, [H, R] = k(t.edges, C);
    H && (t.edges = R);
  }
  function T(S) {
    const A = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((_) => {
      const P = S.includes(_.id), C = A && _.selected || P;
      if (_.selected !== C) {
        const H = t.nodeLookup.get(_.id);
        return H && (H.selected = C), _.selected = C, { ..._ };
      }
      return _;
    }), A || w({ nodes: [] });
  }
  function x(S) {
    const A = t.multiselectionKeyPressed;
    t.edges = t.edges.map((_) => {
      const P = S.includes(_.id), C = A && _.selected || P;
      return _.selected !== C ? { ..._, selected: C } : _;
    }), A || w({ edges: [] });
  }
  function b(S, A, _) {
    const P = t.nodeLookup.get(S);
    if (!P) {
      console.warn("012", Zr.error012(S));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, P.selected ? (A || P.selected && t.multiselectionKeyPressed) && (w({ nodes: [P], edges: [] }), requestAnimationFrame(() => _?.blur())) : T([S]);
  }
  function E(S) {
    const A = t.edgeLookup.get(S);
    if (!A) {
      console.warn("012", Zr.error012(S));
      return;
    }
    (A.selectable || t.elementsSelectable && typeof A.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, A.selected ? A.selected && t.multiselectionKeyPressed && w({ nodes: [], edges: [A] }) : x([S]));
  }
  function M(S, A) {
    const { nodeExtent: _, snapGrid: P, nodeOrigin: C, nodeLookup: H, nodesDraggable: R, onerror: D } = t, K = /* @__PURE__ */ new Map(), F = P?.[0] ?? 5, W = P?.[1] ?? 5, Q = S.x * F * A, G = S.y * W * A;
    for (const J of H.values()) {
      if (!(J.selected && (J.draggable || R && typeof J.draggable > "u")))
        continue;
      let re = {
        x: J.internals.positionAbsolute.x + Q,
        y: J.internals.positionAbsolute.y + G
      };
      P && (re = hi(re, P));
      const { position: j, positionAbsolute: _e } = qc({
        nodeId: J.id,
        nextPosition: re,
        nodeLookup: H,
        nodeExtent: _,
        nodeOrigin: C,
        onError: D
      });
      J.position = j, J.internals.positionAbsolute = _e, K.set(J.id, J);
    }
    i(K);
  }
  function L(S) {
    return Ap({
      delta: S,
      panZoom: t.panZoom,
      transform: [t.viewport.x, t.viewport.y, t.viewport.zoom],
      translateExtent: t.translateExtent,
      width: t.width,
      height: t.height
    });
  }
  const B = (S) => {
    t._connection = { ...S };
  };
  function Y() {
    t._connection = Qi;
  }
  function U() {
    t.resetStoreValues(), w();
  }
  return Object.assign(t, {
    setNodeTypes: n,
    setEdgeTypes: r,
    addEdge: o,
    updateNodePositions: i,
    updateNodeInternals: s,
    zoomIn: d,
    zoomOut: g,
    fitView: a,
    setCenter: l,
    setMinZoom: f,
    setMaxZoom: h,
    setTranslateExtent: v,
    setPaneClickDistance: y,
    unselectNodesAndEdges: w,
    addSelectedNodes: T,
    addSelectedEdges: x,
    handleNodeSelection: b,
    handleEdgeSelection: E,
    moveSelectedNodes: M,
    panBy: L,
    updateConnection: B,
    cancelConnection: Y,
    reset: U
  });
}
function h0(e, t) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: l, paneClickDistance: u, setPanZoomInstance: d, onDraggingChange: g, onTransformChange: f } = t, h = Gp({
    domNode: e,
    minZoom: n,
    maxZoom: r,
    translateExtent: l,
    viewport: o,
    paneClickDistance: u,
    onPanZoom: s,
    onPanZoomStart: i,
    onPanZoomEnd: a,
    onDraggingChange: g
  }), v = h.getViewport();
  return (o.x !== v.x || o.y !== v.y || o.zoom !== v.zoom) && f([v.x, v.y, v.zoom]), d(h), h.update(t), {
    update(y) {
      h.update(y);
    }
  };
}
var v0 = /* @__PURE__ */ X('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function _u(e, t) {
  ie(t, !0);
  let n = m(t, "store", 15), r = m(t, "panOnScrollMode", 23, () => Gt.Free), o = m(t, "preventScrolling", 7, !0), i = m(t, "zoomOnScroll", 7, !0), s = m(t, "zoomOnDoubleClick", 7, !0), a = m(t, "zoomOnPinch", 7, !0), l = m(t, "panOnDrag", 7, !0), u = m(t, "panOnScroll", 7, !1), d = m(t, "paneClickDistance", 7, 1), g = m(t, "onmovestart", 7), f = m(t, "onmove", 7), h = m(t, "onmoveend", 7), v = m(t, "oninit", 7), y = m(t, "children", 7), k = /* @__PURE__ */ N(() => n().panActivationKeyPressed || l()), w = /* @__PURE__ */ N(() => n().panActivationKeyPressed || u());
  const { viewport: T } = n();
  let x = !1;
  We(() => {
    !x && n().viewportInitialized && (v()?.(), x = !0);
  });
  var b = v0(), E = z(b);
  return Xe(E, y), I(b), st(b, (M, L) => h0?.(M, L), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: T,
    onDraggingChange: (M) => {
      n(n().dragging = M, !0);
    },
    setPanZoomInstance: (M) => {
      n(n().panZoom = M, !0);
    },
    onPanZoomStart: g(),
    onPanZoom: f(),
    onPanZoomEnd: h(),
    zoomOnScroll: i(),
    zoomOnDoubleClick: s(),
    zoomOnPinch: a(),
    panOnScroll: c(w),
    panOnDrag: c(k),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: r() || Gt.Free,
    zoomActivationKeyPressed: n().zoomActivationKeyPressed,
    preventScrolling: typeof o() == "boolean" ? o() : !0,
    noPanClassName: n().noPanClass,
    noWheelClassName: n().noWheelClass,
    userSelectionActive: !!n().selectionRect,
    translateExtent: n().translateExtent,
    lib: "svelte",
    paneClickDistance: d(),
    onTransformChange: (M) => {
      n(n().viewport = { x: M[0], y: M[1], zoom: M[2] }, !0);
    }
  })), O(e, b), se({
    get store() {
      return n();
    },
    set store(M) {
      n(M), p();
    },
    get panOnScrollMode() {
      return r();
    },
    set panOnScrollMode(M = Gt.Free) {
      r(M), p();
    },
    get preventScrolling() {
      return o();
    },
    set preventScrolling(M = !0) {
      o(M), p();
    },
    get zoomOnScroll() {
      return i();
    },
    set zoomOnScroll(M = !0) {
      i(M), p();
    },
    get zoomOnDoubleClick() {
      return s();
    },
    set zoomOnDoubleClick(M = !0) {
      s(M), p();
    },
    get zoomOnPinch() {
      return a();
    },
    set zoomOnPinch(M = !0) {
      a(M), p();
    },
    get panOnDrag() {
      return l();
    },
    set panOnDrag(M = !0) {
      l(M), p();
    },
    get panOnScroll() {
      return u();
    },
    set panOnScroll(M = !1) {
      u(M), p();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(M = 1) {
      d(M), p();
    },
    get onmovestart() {
      return g();
    },
    set onmovestart(M) {
      g(M), p();
    },
    get onmove() {
      return f();
    },
    set onmove(M) {
      f(M), p();
    },
    get onmoveend() {
      return h();
    },
    set onmoveend(M) {
      h(M), p();
    },
    get oninit() {
      return v();
    },
    set oninit(M) {
      v(M), p();
    },
    get children() {
      return y();
    },
    set children(M) {
      y(M), p();
    }
  });
}
ne(
  _u,
  {
    store: {},
    panOnScrollMode: {},
    preventScrolling: {},
    zoomOnScroll: {},
    zoomOnDoubleClick: {},
    zoomOnPinch: {},
    panOnDrag: {},
    panOnScroll: {},
    paneClickDistance: {},
    onmovestart: {},
    onmove: {},
    onmoveend: {},
    oninit: {},
    children: {}
  },
  [],
  [],
  !0
);
function rl(e, t) {
  return (n) => {
    n.target === t && e?.(n);
  };
}
function ol(e) {
  return (t) => {
    const n = e.has(t.id);
    return !!t.selected !== n ? { ...t, selected: n } : t;
  };
}
function il(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
var p0 = /* @__PURE__ */ X("<div><!></div>");
function xu(e, t) {
  ie(t, !0);
  let n = m(t, "store", 15), r = m(t, "panOnDrag", 7, !0), o = m(t, "selectionOnDrag", 7), i = m(t, "onpaneclick", 7), s = m(t, "onpanecontextmenu", 7), a = m(t, "onselectionstart", 7), l = m(t, "onselectionend", 7), u = m(t, "children", 7), d, g = null, f = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ N(() => n().panActivationKeyPressed || r()), y = /* @__PURE__ */ N(() => n().selectionKeyPressed || n().selectionRect || o() && c(v) !== !0), k = /* @__PURE__ */ N(() => n().elementsSelectable && (c(y) || n().selectionRectMode === "user")), w = !1;
  function T(S) {
    if (w || n().connection.inProgress) {
      w = !1;
      return;
    }
    i()?.({ event: S }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0);
  }
  function x(S) {
    if (g = d?.getBoundingClientRect(), !n().elementsSelectable || !c(y) || S.button !== 0 || S.target !== d || !g)
      return;
    S.target?.setPointerCapture?.(S.pointerId);
    const { x: A, y: _ } = Yt(S, g);
    n().unselectNodesAndEdges(), n(n().selectionRect = { width: 0, height: 0, startX: A, startY: _, x: A, y: _ }, !0), a()?.(S);
  }
  function b(S) {
    if (!c(y) || !g || !n().selectionRect)
      return;
    w = !0;
    const A = Yt(S, g), { startX: _ = 0, startY: P = 0 } = n().selectionRect, C = {
      ...n().selectionRect,
      x: A.x < _ ? A.x : _,
      y: A.y < P ? A.y : P,
      width: Math.abs(A.x - _),
      height: Math.abs(A.y - P)
    }, H = f, R = h;
    f = new Set(Rs(
      n().nodeLookup,
      C,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === Zo.Partial,
      !0
    ).map((K) => K.id));
    const D = n().defaultEdgeOptions.selectable ?? !0;
    h = /* @__PURE__ */ new Set();
    for (const K of f) {
      const F = n().connectionLookup.get(K);
      if (F)
        for (const { edgeId: W } of F.values()) {
          const Q = n().edgeLookup.get(W);
          Q && (Q.selectable ?? D) && h.add(W);
        }
    }
    il(H, f) || n(n().nodes = n().nodes.map(ol(f)), !0), il(R, h) || n(n().edges = n().edges.map(ol(h)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = C, !0);
  }
  function E(S) {
    S.button === 0 && (S.target?.releasePointerCapture?.(S.pointerId), !c(y) && n().selectionRectMode === "user" && S.target === d && T?.(S), n(n().selectionRect = null, !0), f.size > 0 && n(n().selectionRectMode = "nodes", !0), n().selectionKeyPressed && (w = !1), l()?.(S));
  }
  const M = (S) => {
    if (Array.isArray(c(v)) && c(v).includes(2)) {
      S.preventDefault();
      return;
    }
    s()?.({ event: S });
  };
  var L = p0();
  let B;
  var Y = /* @__PURE__ */ N(() => c(k) ? void 0 : rl(T, d));
  L.__click = function(...S) {
    c(Y)?.apply(this, S);
  }, L.__pointerdown = function(...S) {
    (c(k) ? x : void 0)?.apply(this, S);
  }, L.__pointermove = function(...S) {
    (c(k) ? b : void 0)?.apply(this, S);
  }, L.__pointerup = function(...S) {
    (c(k) ? E : void 0)?.apply(this, S);
  };
  var U = /* @__PURE__ */ N(() => rl(M, d));
  L.__contextmenu = function(...S) {
    c(U)?.apply(this, S);
  };
  var $ = z(L);
  return Xe($, u), I(L), Nt(L, (S) => d = S, () => d), ke((S) => B = yt(L, 1, "svelte-flow__pane svelte-flow__container", null, B, S), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: c(y)
    })
  ]), O(e, L), se({
    get store() {
      return n();
    },
    set store(S) {
      n(S), p();
    },
    get panOnDrag() {
      return r();
    },
    set panOnDrag(S = !0) {
      r(S), p();
    },
    get selectionOnDrag() {
      return o();
    },
    set selectionOnDrag(S) {
      o(S), p();
    },
    get onpaneclick() {
      return i();
    },
    set onpaneclick(S) {
      i(S), p();
    },
    get onpanecontextmenu() {
      return s();
    },
    set onpanecontextmenu(S) {
      s(S), p();
    },
    get onselectionstart() {
      return a();
    },
    set onselectionstart(S) {
      a(S), p();
    },
    get onselectionend() {
      return l();
    },
    set onselectionend(S) {
      l(S), p();
    },
    get children() {
      return u();
    },
    set children(S) {
      u(S), p();
    }
  });
}
_n([
  "click",
  "pointerdown",
  "pointermove",
  "pointerup",
  "contextmenu"
]);
ne(
  xu,
  {
    store: {},
    panOnDrag: {},
    selectionOnDrag: {},
    onpaneclick: {},
    onpanecontextmenu: {},
    onselectionstart: {},
    onselectionend: {},
    children: {}
  },
  [],
  [],
  !0
);
var m0 = /* @__PURE__ */ X('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function bu(e, t) {
  ie(t, !0);
  let n = m(t, "store", 15), r = m(t, "children", 7);
  var o = m0();
  let i;
  var s = z(o);
  return Xe(s, r), I(o), ke((a) => i = ft(o, "", i, a), [
    () => ({
      transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
    })
  ]), O(e, o), se({
    get store() {
      return n();
    },
    set store(a) {
      n(a), p();
    },
    get children() {
      return r();
    },
    set children(a) {
      r(a), p();
    }
  });
}
ne(bu, { store: {}, children: {} }, [], [], !0);
function Cu(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = Hp({
    onDrag: r,
    onDragStart: o,
    onDragStop: i,
    onNodeMouseDown: s,
    getStoreItems: () => {
      const { snapGrid: u, viewport: d } = n;
      return {
        nodes: n.nodes,
        nodeLookup: n.nodeLookup,
        edges: n.edges,
        nodeExtent: n.nodeExtent,
        snapGrid: u || [0, 0],
        snapToGrid: !!u,
        nodeOrigin: n.nodeOrigin,
        multiSelectionActive: n.multiselectionKeyPressed,
        domNode: n.domNode,
        transform: [d.x, d.y, d.zoom],
        autoPanOnNodeDrag: n.autoPanOnNodeDrag,
        nodesDraggable: n.nodesDraggable,
        selectNodesOnDrag: n.selectNodesOnDrag,
        nodeDragThreshold: n.nodeDragThreshold,
        unselectNodesAndEdges: n.unselectNodesAndEdges,
        updateNodePositions: n.updateNodePositions,
        onSelectionDrag: n.onselectiondrag,
        onSelectionDragStart: n.onselectiondragstart,
        onSelectionDragStop: n.onselectiondragstop,
        panBy: n.panBy
      };
    }
  });
  function l(u, d) {
    if (d.disabled) {
      a.destroy();
      return;
    }
    a.update({
      domNode: u,
      noDragClassName: d.noDragClass,
      handleSelector: d.handleSelector,
      nodeId: d.nodeId,
      isSelectable: d.isSelectable,
      nodeClickDistance: d.nodeClickDistance
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
var y0 = /* @__PURE__ */ X('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-62ze0y"> </div>'), w0 = /* @__PURE__ */ X('<div class="a11y-hidden svelte-62ze0y"> </div> <div class="a11y-hidden svelte-62ze0y"> </div> <!>', 1);
const _0 = {
  hash: "svelte-62ze0y",
  code: ".a11y-hidden.svelte-62ze0y {display:none;}.a11y-live-msg.svelte-62ze0y {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function ku(e, t) {
  ie(t, !0), Oe(e, _0);
  let n = m(t, "store", 7);
  var r = w0(), o = le(r), i = z(o, !0);
  I(o);
  var s = V(o, 2), a = z(s, !0);
  I(s);
  var l = V(s, 2);
  {
    var u = (d) => {
      var g = y0(), f = z(g, !0);
      I(g), ke(() => {
        xe(g, "id", `${x0}-${n().flowId}`), $e(f, n().ariaLiveMessage);
      }), O(d, g);
    };
    oe(l, (d) => {
      n().disableKeyboardA11y || d(u);
    });
  }
  return ke(() => {
    xe(o, "id", `${Eu}-${n().flowId}`), $e(i, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), xe(s, "id", `${Su}-${n().flowId}`), $e(a, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), O(e, r), se({
    get store() {
      return n();
    },
    set store(d) {
      n(d), p();
    }
  });
}
ne(ku, { store: {} }, [], [], !0);
const Eu = "svelte-flow__node-desc", Su = "svelte-flow__edge-desc", x0 = "svelte-flow__aria-live";
var b0 = /* @__PURE__ */ X("<div><!></div>");
function Nu(e, t) {
  ie(t, !0);
  let n = m(t, "store", 15), r = m(t, "node", 7), o = m(t, "resizeObserver", 7), i = m(t, "nodeClickDistance", 7), s = m(t, "onnodeclick", 7), a = m(t, "onnodedrag", 7), l = m(t, "onnodedragstart", 7), u = m(t, "onnodedragstop", 7), d = m(t, "onnodepointerenter", 7), g = m(t, "onnodepointerleave", 7), f = m(t, "onnodepointermove", 7), h = m(t, "onnodecontextmenu", 7), v = /* @__PURE__ */ N(() => ct(r().data, () => ({}), !0)), y = /* @__PURE__ */ N(() => ct(r().selected, !1)), k = /* @__PURE__ */ N(() => r().draggable), w = /* @__PURE__ */ N(() => r().selectable), T = /* @__PURE__ */ N(() => ct(r().deletable, !0)), x = /* @__PURE__ */ N(() => r().connectable), b = /* @__PURE__ */ N(() => r().focusable), E = /* @__PURE__ */ N(() => ct(r().hidden, !1)), M = /* @__PURE__ */ N(() => ct(r().dragging, !1)), L = /* @__PURE__ */ N(() => ct(r().style, "")), B = /* @__PURE__ */ N(() => r().class), Y = /* @__PURE__ */ N(() => ct(r().type, "default")), U = /* @__PURE__ */ N(() => r().parentId), $ = /* @__PURE__ */ N(() => r().sourcePosition), S = /* @__PURE__ */ N(() => r().targetPosition), A = /* @__PURE__ */ N(() => ct(r().measured, () => ({ width: 0, height: 0 }), !0).width), _ = /* @__PURE__ */ N(() => ct(r().measured, () => ({ width: 0, height: 0 }), !0).height), P = /* @__PURE__ */ N(() => r().initialWidth), C = /* @__PURE__ */ N(() => r().initialHeight), H = /* @__PURE__ */ N(() => r().width), R = /* @__PURE__ */ N(() => r().height), D = /* @__PURE__ */ N(() => r().dragHandle), K = /* @__PURE__ */ N(() => ct(r().internals.z, 0)), F = /* @__PURE__ */ N(() => r().internals.positionAbsolute.x), W = /* @__PURE__ */ N(() => r().internals.positionAbsolute.y), Q = /* @__PURE__ */ N(() => r().internals.userNode), { id: G } = r(), J = /* @__PURE__ */ N(() => c(k) ?? n().nodesDraggable), ue = /* @__PURE__ */ N(() => c(w) ?? n().elementsSelectable), re = /* @__PURE__ */ N(() => c(x) ?? n().nodesConnectable), j = /* @__PURE__ */ N(() => Yc(r())), _e = /* @__PURE__ */ N(() => !!r().internals.handleBounds), ve = /* @__PURE__ */ N(() => c(j) && c(_e)), ee = /* @__PURE__ */ N(() => c(b) ?? n().nodesFocusable);
  function ae(he) {
    return n().parentLookup.has(he);
  }
  let de = /* @__PURE__ */ N(() => ae(G)), te = /* @__PURE__ */ Ne(null), ge = null, ce = c(Y), pe = c($), q = c(S), Fe = /* @__PURE__ */ N(() => n().nodeTypes[c(Y)] ?? Ys), Ve = /* @__PURE__ */ N(() => n().ariaLabelConfig);
  fr("svelteflow__node_connectable", {
    get value() {
      return c(re);
    }
  }), fr("svelteflow__node_id", G);
  let Se = /* @__PURE__ */ N(() => {
    const he = c(A) === void 0 ? c(H) ?? c(P) : c(H), Be = c(_) === void 0 ? c(R) ?? c(C) : c(R);
    if (!(he === void 0 && Be === void 0 && c(L) === void 0))
      return `${c(L)};${he ? `width:${en(he)};` : ""}${Be ? `height:${en(Be)};` : ""}`;
  });
  We(() => {
    (c(Y) !== ce || c($) !== pe || c(S) !== q) && c(te) !== null && requestAnimationFrame(() => {
      c(te) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[G, { id: G, nodeElement: c(te), force: !0 }]]));
    }), ce = c(Y), pe = c($), q = c(S);
  }), We(() => {
    o() && (!c(ve) || c(te) !== ge) && (ge && o().unobserve(ge), c(te) && o().observe(c(te)), ge = c(te));
  }), ii(() => {
    ge && o()?.unobserve(ge);
  });
  function be(he) {
    c(ue) && (!n().selectNodesOnDrag || !c(J) || n().nodeDragThreshold > 0) && n().handleNodeSelection(G), s()?.({ node: c(Q), event: he });
  }
  function Ze(he) {
    if (!(jc(he) || n().disableKeyboardA11y))
      if (Rc.includes(he.key) && c(ue)) {
        const Be = he.key === "Escape";
        n().handleNodeSelection(G, Be, c(te));
      } else c(J) && r().selected && Object.prototype.hasOwnProperty.call(Xo, he.key) && (he.preventDefault(), n(
        n().ariaLiveMessage = c(Ve)["node.a11yDescription.ariaLiveMessage"]({
          direction: he.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(Xo[he.key], he.shiftKey ? 4 : 1));
  }
  const wt = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !c(te)?.matches(":focus-visible"))
      return;
    const { width: he, height: Be, viewport: _t } = n();
    Rs(/* @__PURE__ */ new Map([[G, r()]]), { x: 0, y: 0, width: he, height: Be }, [_t.x, _t.y, _t.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: _t.zoom });
  };
  var Ge = Me(), ze = le(Ge);
  {
    var Ye = (he) => {
      var Be = b0();
      et(
        Be,
        (Ue, Tt) => ({
          "data-id": G,
          class: [
            "svelte-flow__node",
            `svelte-flow__node-${c(Y)}`,
            c(B)
          ],
          style: c(Se),
          onclick: be,
          onpointerenter: d() ? (tt) => d()({ node: c(Q), event: tt }) : void 0,
          onpointerleave: g() ? (tt) => g()({ node: c(Q), event: tt }) : void 0,
          onpointermove: f() ? (tt) => f()({ node: c(Q), event: tt }) : void 0,
          oncontextmenu: h() ? (tt) => h()({ node: c(Q), event: tt }) : void 0,
          onkeydown: c(ee) ? Ze : void 0,
          onfocus: c(ee) ? wt : void 0,
          tabIndex: c(ee) ? 0 : void 0,
          role: r().ariaRole ?? (c(ee) ? "group" : void 0),
          "aria-roledescription": "node",
          "aria-describedby": n().disableKeyboardA11y ? void 0 : `${Eu}-${n().flowId}`,
          ...r().domAttributes,
          [Sn]: Ue,
          [Zt]: Tt
        }),
        [
          () => ({
            dragging: c(M),
            selected: c(y),
            draggable: c(J),
            connectable: c(re),
            selectable: c(ue),
            nopan: c(J),
            parent: c(de)
          }),
          () => ({
            "z-index": c(K),
            transform: `translate(${c(F) ?? ""}px, ${c(W) ?? ""}px)`,
            visibility: c(j) ? "visible" : "hidden"
          })
        ]
      );
      var _t = z(Be);
      Ds(_t, () => c(Fe), (Ue, Tt) => {
        Tt(Ue, {
          get data() {
            return c(v);
          },
          get id() {
            return G;
          },
          get selected() {
            return c(y);
          },
          get selectable() {
            return c(ue);
          },
          get deletable() {
            return c(T);
          },
          get sourcePosition() {
            return c($);
          },
          get targetPosition() {
            return c(S);
          },
          get zIndex() {
            return c(K);
          },
          get dragging() {
            return c(M);
          },
          get draggable() {
            return c(J);
          },
          get dragHandle() {
            return c(D);
          },
          get parentId() {
            return c(U);
          },
          get type() {
            return c(Y);
          },
          get isConnectable() {
            return c(re);
          },
          get positionAbsoluteX() {
            return c(F);
          },
          get positionAbsoluteY() {
            return c(W);
          },
          get width() {
            return c(H);
          },
          get height() {
            return c(R);
          }
        });
      }), I(Be), st(Be, (Ue, Tt) => Cu?.(Ue, Tt), () => ({
        nodeId: G,
        isSelectable: c(ue),
        disabled: !c(J),
        handleSelector: c(D),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (Ue, Tt, tt, qt) => {
          a()?.({ event: Ue, targetNode: tt, nodes: qt });
        },
        onDragStart: (Ue, Tt, tt, qt) => {
          l()?.({ event: Ue, targetNode: tt, nodes: qt });
        },
        onDragStop: (Ue, Tt, tt, qt) => {
          u()?.({ event: Ue, targetNode: tt, nodes: qt });
        },
        store: n()
      })), Nt(Be, (Ue) => Z(te, Ue), () => c(te)), O(he, Be);
    };
    oe(ze, (he) => {
      c(E) || he(Ye);
    });
  }
  return O(e, Ge), se({
    get store() {
      return n();
    },
    set store(he) {
      n(he), p();
    },
    get node() {
      return r();
    },
    set node(he) {
      r(he), p();
    },
    get resizeObserver() {
      return o();
    },
    set resizeObserver(he) {
      o(he), p();
    },
    get nodeClickDistance() {
      return i();
    },
    set nodeClickDistance(he) {
      i(he), p();
    },
    get onnodeclick() {
      return s();
    },
    set onnodeclick(he) {
      s(he), p();
    },
    get onnodedrag() {
      return a();
    },
    set onnodedrag(he) {
      a(he), p();
    },
    get onnodedragstart() {
      return l();
    },
    set onnodedragstart(he) {
      l(he), p();
    },
    get onnodedragstop() {
      return u();
    },
    set onnodedragstop(he) {
      u(he), p();
    },
    get onnodepointerenter() {
      return d();
    },
    set onnodepointerenter(he) {
      d(he), p();
    },
    get onnodepointerleave() {
      return g();
    },
    set onnodepointerleave(he) {
      g(he), p();
    },
    get onnodepointermove() {
      return f();
    },
    set onnodepointermove(he) {
      f(he), p();
    },
    get onnodecontextmenu() {
      return h();
    },
    set onnodecontextmenu(he) {
      h(he), p();
    }
  });
}
ne(
  Nu,
  {
    store: {},
    node: {},
    resizeObserver: {},
    nodeClickDistance: {},
    onnodeclick: {},
    onnodedrag: {},
    onnodedragstart: {},
    onnodedragstop: {},
    onnodepointerenter: {},
    onnodepointerleave: {},
    onnodepointermove: {},
    onnodecontextmenu: {}
  },
  [],
  [],
  !0
);
var C0 = /* @__PURE__ */ X('<div class="svelte-flow__nodes"></div>');
function Pu(e, t) {
  ie(t, !0);
  let n = m(t, "store", 15), r = m(t, "nodeClickDistance", 7), o = m(t, "onnodeclick", 7), i = m(t, "onnodecontextmenu", 7), s = m(t, "onnodepointerenter", 7), a = m(t, "onnodepointermove", 7), l = m(t, "onnodepointerleave", 7), u = m(t, "onnodedrag", 7), d = m(t, "onnodedragstart", 7), g = m(t, "onnodedragstop", 7);
  const f = typeof ResizeObserver > "u" ? null : new ResizeObserver((v) => {
    const y = /* @__PURE__ */ new Map();
    v.forEach((k) => {
      const w = k.target.getAttribute("data-id");
      y.set(w, { id: w, nodeElement: k.target, force: !0 });
    }), n().updateNodeInternals(y);
  });
  ii(() => {
    f?.disconnect();
  });
  var h = C0();
  return lt(h, 21, () => n().visible.nodes.values(), (v) => v.id, (v, y) => {
    Nu(v, {
      get node() {
        return c(y);
      },
      get resizeObserver() {
        return f;
      },
      get nodeClickDistance() {
        return r();
      },
      get onnodeclick() {
        return o();
      },
      get onnodepointerenter() {
        return s();
      },
      get onnodepointermove() {
        return a();
      },
      get onnodepointerleave() {
        return l();
      },
      get onnodedrag() {
        return u();
      },
      get onnodedragstart() {
        return d();
      },
      get onnodedragstop() {
        return g();
      },
      get onnodecontextmenu() {
        return i();
      },
      get store() {
        return n();
      },
      set store(k) {
        n(k);
      }
    });
  }), I(h), O(e, h), se({
    get store() {
      return n();
    },
    set store(v) {
      n(v), p();
    },
    get nodeClickDistance() {
      return r();
    },
    set nodeClickDistance(v) {
      r(v), p();
    },
    get onnodeclick() {
      return o();
    },
    set onnodeclick(v) {
      o(v), p();
    },
    get onnodecontextmenu() {
      return i();
    },
    set onnodecontextmenu(v) {
      i(v), p();
    },
    get onnodepointerenter() {
      return s();
    },
    set onnodepointerenter(v) {
      s(v), p();
    },
    get onnodepointermove() {
      return a();
    },
    set onnodepointermove(v) {
      a(v), p();
    },
    get onnodepointerleave() {
      return l();
    },
    set onnodepointerleave(v) {
      l(v), p();
    },
    get onnodedrag() {
      return u();
    },
    set onnodedrag(v) {
      u(v), p();
    },
    get onnodedragstart() {
      return d();
    },
    set onnodedragstart(v) {
      d(v), p();
    },
    get onnodedragstop() {
      return g();
    },
    set onnodedragstop(v) {
      g(v), p();
    }
  });
}
ne(
  Pu,
  {
    store: {},
    nodeClickDistance: {},
    onnodeclick: {},
    onnodecontextmenu: {},
    onnodepointerenter: {},
    onnodepointermove: {},
    onnodepointerleave: {},
    onnodedrag: {},
    onnodedragstart: {},
    onnodedragstop: {}
  },
  [],
  [],
  !0
);
var k0 = /* @__PURE__ */ me('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function Tu(e, t) {
  ie(t, !0);
  const n = m(t, "edge", 7), r = m(t, "store", 15), o = m(t, "onedgeclick", 7), i = m(t, "onedgecontextmenu", 7), s = m(t, "onedgepointerenter", 7), a = m(t, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ N(() => n().source), u = /* @__PURE__ */ N(() => n().target), d = /* @__PURE__ */ N(() => n().sourceX), g = /* @__PURE__ */ N(() => n().sourceY), f = /* @__PURE__ */ N(() => n().targetX), h = /* @__PURE__ */ N(() => n().targetY), v = /* @__PURE__ */ N(() => n().sourcePosition), y = /* @__PURE__ */ N(() => n().targetPosition), k = /* @__PURE__ */ N(() => ct(n().animated, !1)), w = /* @__PURE__ */ N(() => ct(n().selected, !1)), T = /* @__PURE__ */ N(() => n().label), x = /* @__PURE__ */ N(() => n().labelStyle), b = /* @__PURE__ */ N(() => ct(n().data, () => ({}), !0)), E = /* @__PURE__ */ N(() => n().style), M = /* @__PURE__ */ N(() => n().interactionWidth), L = /* @__PURE__ */ N(() => ct(n().type, "default")), B = /* @__PURE__ */ N(() => n().sourceHandle), Y = /* @__PURE__ */ N(() => n().targetHandle), U = /* @__PURE__ */ N(() => n().markerStart), $ = /* @__PURE__ */ N(() => n().markerEnd), S = /* @__PURE__ */ N(() => n().selectable), A = /* @__PURE__ */ N(() => n().focusable), _ = /* @__PURE__ */ N(() => ct(n().deletable, !0)), P = /* @__PURE__ */ N(() => n().hidden), C = /* @__PURE__ */ N(() => n().zIndex), H = /* @__PURE__ */ N(() => n().class), R = /* @__PURE__ */ N(() => n().ariaLabel), D = null;
  const { id: K } = n();
  fr("svelteflow__edge_id", K);
  let F = /* @__PURE__ */ N(() => c(S) ?? r().elementsSelectable), W = /* @__PURE__ */ N(() => c(A) ?? r().edgesFocusable), Q = /* @__PURE__ */ N(() => r().edgeTypes[c(L)] ?? Ws), G = /* @__PURE__ */ N(() => c(U) ? `url('#${ts(c(U), r().flowId)}')` : void 0), J = /* @__PURE__ */ N(() => c($) ? `url('#${ts(c($), r().flowId)}')` : void 0);
  function ue(ae) {
    const de = r().edgeLookup.get(K);
    de && (c(F) && r().handleEdgeSelection(K), o()?.({ event: ae, edge: de }));
  }
  function re(ae, de) {
    const te = r().edgeLookup.get(K);
    te && de({ event: ae, edge: te });
  }
  function j(ae) {
    if (!r().disableKeyboardA11y && Rc.includes(ae.key) && c(F)) {
      const { unselectNodesAndEdges: de, addSelectedEdges: te } = r();
      ae.key === "Escape" ? (D?.blur(), de({ edges: [n()] })) : te([K]);
    }
  }
  var _e = Me(), ve = le(_e);
  {
    var ee = (ae) => {
      var de = k0();
      let te;
      var ge = z(de);
      et(
        ge,
        (pe) => ({
          class: ["svelte-flow__edge", c(H)],
          "data-id": K,
          onclick: ue,
          oncontextmenu: i() ? (q) => {
            re(q, i());
          } : void 0,
          onpointerenter: s() ? (q) => {
            re(q, s());
          } : void 0,
          onpointerleave: a() ? (q) => {
            re(q, a());
          } : void 0,
          "aria-label": c(R) === null ? void 0 : c(R) ? c(R) : `Edge from ${c(l)} to ${c(u)}`,
          "aria-describedby": c(W) ? `${Su}-${r().flowId}` : void 0,
          role: n().ariaRole ?? (c(W) ? "group" : "img"),
          "aria-roledescription": "edge",
          onkeydown: c(W) ? j : void 0,
          tabindex: c(W) ? 0 : void 0,
          ...n().domAttributes,
          [Sn]: pe
        }),
        [
          () => ({
            animated: c(k),
            selected: c(w),
            selectable: c(F)
          })
        ]
      );
      var ce = z(ge);
      Ds(ce, () => c(Q), (pe, q) => {
        q(pe, {
          get id() {
            return K;
          },
          get source() {
            return c(l);
          },
          get target() {
            return c(u);
          },
          get sourceX() {
            return c(d);
          },
          get sourceY() {
            return c(g);
          },
          get targetX() {
            return c(f);
          },
          get targetY() {
            return c(h);
          },
          get sourcePosition() {
            return c(v);
          },
          get targetPosition() {
            return c(y);
          },
          get animated() {
            return c(k);
          },
          get selected() {
            return c(w);
          },
          get label() {
            return c(T);
          },
          get labelStyle() {
            return c(x);
          },
          get data() {
            return c(b);
          },
          get style() {
            return c(E);
          },
          get interactionWidth() {
            return c(M);
          },
          get selectable() {
            return c(F);
          },
          get deletable() {
            return c(_);
          },
          get type() {
            return c(L);
          },
          get sourceHandleId() {
            return c(B);
          },
          get targetHandleId() {
            return c(Y);
          },
          get markerStart() {
            return c(G);
          },
          get markerEnd() {
            return c(J);
          }
        });
      }), I(ge), Nt(ge, (pe) => D = pe, () => D), I(de), ke((pe) => te = ft(de, "", te, pe), [() => ({ "z-index": c(C) })]), O(ae, de);
    };
    oe(ve, (ae) => {
      c(P) || ae(ee);
    });
  }
  return O(e, _e), se({
    get edge() {
      return n();
    },
    set edge(ae) {
      n(ae), p();
    },
    get store() {
      return r();
    },
    set store(ae) {
      r(ae), p();
    },
    get onedgeclick() {
      return o();
    },
    set onedgeclick(ae) {
      o(ae), p();
    },
    get onedgecontextmenu() {
      return i();
    },
    set onedgecontextmenu(ae) {
      i(ae), p();
    },
    get onedgepointerenter() {
      return s();
    },
    set onedgepointerenter(ae) {
      s(ae), p();
    },
    get onedgepointerleave() {
      return a();
    },
    set onedgepointerleave(ae) {
      a(ae), p();
    }
  });
}
ne(
  Tu,
  {
    edge: {},
    store: {},
    onedgeclick: {},
    onedgecontextmenu: {},
    onedgepointerenter: {},
    onedgepointerleave: {}
  },
  [],
  [],
  !0
);
ff();
var E0 = /* @__PURE__ */ me("<defs></defs>");
function Du(e, t) {
  ie(t, !1);
  const n = Rt();
  cc();
  var r = E0();
  lt(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    Au(o, Ie(() => c(i)));
  }), I(r), O(e, r), se();
}
ne(Du, {}, [], [], !0);
var S0 = /* @__PURE__ */ me('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), N0 = /* @__PURE__ */ me('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), P0 = /* @__PURE__ */ me('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Au(e, t) {
  ie(t, !0);
  let n = m(t, "id", 7), r = m(t, "type", 7), o = m(t, "width", 7, 12.5), i = m(t, "height", 7, 12.5), s = m(t, "markerUnits", 7, "strokeWidth"), a = m(t, "orient", 7, "auto-start-reverse"), l = m(t, "color", 7), u = m(t, "strokeWidth", 7);
  var d = P0(), g = z(d);
  {
    var f = (v) => {
      var y = S0();
      ke(() => {
        xe(y, "stroke", l()), xe(y, "stroke-width", u());
      }), O(v, y);
    }, h = (v, y) => {
      {
        var k = (w) => {
          var T = N0();
          ke(() => {
            xe(T, "stroke", l()), xe(T, "stroke-width", u()), xe(T, "fill", l());
          }), O(w, T);
        };
        oe(
          v,
          (w) => {
            r() === Yr.ArrowClosed && w(k);
          },
          y
        );
      }
    };
    oe(g, (v) => {
      r() === Yr.Arrow ? v(f) : v(h, !1);
    });
  }
  return I(d), ke(() => {
    xe(d, "id", n()), xe(d, "markerWidth", `${o()}`), xe(d, "markerHeight", `${i()}`), xe(d, "markerUnits", s()), xe(d, "orient", a());
  }), O(e, d), se({
    get id() {
      return n();
    },
    set id(v) {
      n(v), p();
    },
    get type() {
      return r();
    },
    set type(v) {
      r(v), p();
    },
    get width() {
      return o();
    },
    set width(v = 12.5) {
      o(v), p();
    },
    get height() {
      return i();
    },
    set height(v = 12.5) {
      i(v), p();
    },
    get markerUnits() {
      return s();
    },
    set markerUnits(v = "strokeWidth") {
      s(v), p();
    },
    get orient() {
      return a();
    },
    set orient(v = "auto-start-reverse") {
      a(v), p();
    },
    get color() {
      return l();
    },
    set color(v) {
      l(v), p();
    },
    get strokeWidth() {
      return u();
    },
    set strokeWidth(v) {
      u(v), p();
    }
  });
}
ne(
  Au,
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
var T0 = /* @__PURE__ */ X('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function Mu(e, t) {
  ie(t, !0);
  let n = m(t, "store", 15), r = m(t, "onedgeclick", 7), o = m(t, "onedgecontextmenu", 7), i = m(t, "onedgepointerenter", 7), s = m(t, "onedgepointerleave", 7);
  var a = T0(), l = z(a), u = z(l);
  Du(u, {}), I(l);
  var d = V(l, 2);
  return lt(d, 17, () => n().visible.edges.values(), (g) => g.id, (g, f) => {
    Tu(g, {
      get edge() {
        return c(f);
      },
      get onedgeclick() {
        return r();
      },
      get onedgecontextmenu() {
        return o();
      },
      get onedgepointerenter() {
        return i();
      },
      get onedgepointerleave() {
        return s();
      },
      get store() {
        return n();
      },
      set store(h) {
        n(h);
      }
    });
  }), I(a), O(e, a), se({
    get store() {
      return n();
    },
    set store(g) {
      n(g), p();
    },
    get onedgeclick() {
      return r();
    },
    set onedgeclick(g) {
      r(g), p();
    },
    get onedgecontextmenu() {
      return o();
    },
    set onedgecontextmenu(g) {
      o(g), p();
    },
    get onedgepointerenter() {
      return i();
    },
    set onedgepointerenter(g) {
      i(g), p();
    },
    get onedgepointerleave() {
      return s();
    },
    set onedgepointerleave(g) {
      s(g), p();
    }
  });
}
ne(
  Mu,
  {
    store: {},
    onedgeclick: {},
    onedgecontextmenu: {},
    onedgepointerenter: {},
    onedgepointerleave: {}
  },
  [],
  [],
  !0
);
var D0 = /* @__PURE__ */ X('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const A0 = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function Xs(e, t) {
  ie(t, !0), Oe(e, A0);
  let n = m(t, "x", 7, 0), r = m(t, "y", 7, 0), o = m(t, "width", 7, 0), i = m(t, "height", 7, 0), s = m(t, "isVisible", 7, !0);
  var a = Me(), l = le(a);
  {
    var u = (d) => {
      var g = D0();
      let f;
      ke((h) => f = ft(g, "", f, h), [
        () => ({
          width: typeof o() == "string" ? o() : en(o()),
          height: typeof i() == "string" ? i() : en(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), O(d, g);
    };
    oe(l, (d) => {
      s() && d(u);
    });
  }
  return O(e, a), se({
    get x() {
      return n();
    },
    set x(d = 0) {
      n(d), p();
    },
    get y() {
      return r();
    },
    set y(d = 0) {
      r(d), p();
    },
    get width() {
      return o();
    },
    set width(d = 0) {
      o(d), p();
    },
    get height() {
      return i();
    },
    set height(d = 0) {
      i(d), p();
    },
    get isVisible() {
      return s();
    },
    set isVisible(d = !0) {
      s(d), p();
    }
  });
}
ne(Xs, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
function M0(e, t, n) {
  const r = t().nodes.filter((o) => o.selected);
  n()?.({ nodes: r, event: e });
}
function O0(e, t, n) {
  const r = t().nodes.filter((o) => o.selected);
  n()?.({ nodes: r, event: e });
}
var V0 = /* @__PURE__ */ X("<div><!></div>");
const H0 = {
  hash: "svelte-16qgzgd",
  code: ".svelte-flow__selection-wrapper.svelte-16qgzgd {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}"
};
function Ou(e, t) {
  ie(t, !0), Oe(e, H0);
  let n = m(t, "store", 15), r = m(t, "onnodedrag", 7), o = m(t, "onnodedragstart", 7), i = m(t, "onnodedragstop", 7), s = m(t, "onselectionclick", 7), a = m(t, "onselectioncontextmenu", 7), l = /* @__PURE__ */ Ne(void 0);
  We(() => {
    n().disableKeyboardA11y || c(l)?.focus({ preventScroll: !0 });
  });
  let u = /* @__PURE__ */ N(() => n().selectionRectMode === "nodes" ? (n().nodes, ao(n().nodeLookup, { filter: (v) => !!v.selected })) : null);
  function d(v) {
    Object.prototype.hasOwnProperty.call(Xo, v.key) && (v.preventDefault(), n().moveSelectedNodes(Xo[v.key], v.shiftKey ? 4 : 1));
  }
  var g = Me(), f = le(g);
  {
    var h = (v) => {
      var y = V0();
      y.__contextmenu = [M0, n, a], y.__click = [O0, n, s], y.__keydown = function(...T) {
        (n().disableKeyboardA11y ? void 0 : d)?.apply(this, T);
      };
      let k;
      var w = z(y);
      Xs(w, { width: "100%", height: "100%", x: 0, y: 0 }), I(y), st(y, (T, x) => Cu?.(T, x), () => ({
        disabled: !1,
        store: n(),
        onDrag: (T, x, b, E) => {
          r()?.({ event: T, targetNode: null, nodes: E });
        },
        onDragStart: (T, x, b, E) => {
          o()?.({ event: T, targetNode: null, nodes: E });
        },
        onDragStop: (T, x, b, E) => {
          i()?.({ event: T, targetNode: null, nodes: E });
        }
      })), Nt(y, (T) => Z(l, T), () => c(l)), ke(
        (T) => {
          yt(y, 1, xn(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-16qgzgd"), xe(y, "role", n().disableKeyboardA11y ? void 0 : "button"), xe(y, "tabindex", n().disableKeyboardA11y ? void 0 : -1), k = ft(y, "", k, T);
        },
        [
          () => ({
            width: en(c(u).width),
            height: en(c(u).height),
            transform: `translate(${c(u).x ?? ""}px, ${c(u).y ?? ""}px)`
          })
        ]
      ), O(v, y);
    };
    oe(f, (v) => {
      n().selectionRectMode === "nodes" && c(u) && cn(c(u).x) && cn(c(u).y) && v(h);
    });
  }
  return O(e, g), se({
    get store() {
      return n();
    },
    set store(v) {
      n(v), p();
    },
    get onnodedrag() {
      return r();
    },
    set onnodedrag(v) {
      r(v), p();
    },
    get onnodedragstart() {
      return o();
    },
    set onnodedragstart(v) {
      o(v), p();
    },
    get onnodedragstop() {
      return i();
    },
    set onnodedragstop(v) {
      i(v), p();
    },
    get onselectionclick() {
      return s();
    },
    set onselectionclick(v) {
      s(v), p();
    },
    get onselectioncontextmenu() {
      return a();
    },
    set onselectioncontextmenu(v) {
      a(v), p();
    }
  });
}
_n(["contextmenu", "click", "keydown"]);
ne(
  Ou,
  {
    store: {},
    onnodedrag: {},
    onnodedragstart: {},
    onnodedragstop: {},
    onselectionclick: {},
    onselectioncontextmenu: {}
  },
  [],
  [],
  !0
);
function L0(e) {
  switch (e) {
    case "ctrl":
      return 8;
    case "shift":
      return 4;
    case "alt":
      return 2;
    case "meta":
      return 1;
  }
}
function Kt(e, t) {
  let { enabled: n = !0, trigger: r, type: o = "keydown" } = t;
  function i(a) {
    const l = Array.isArray(r) ? r : [r], u = [a.metaKey, a.altKey, a.shiftKey, a.ctrlKey].reduce(
      (d, g, f) => g ? d | 1 << f : d,
      0
    );
    for (const d of l) {
      const g = {
        preventDefault: !1,
        enabled: !0,
        ...d
      }, { modifier: f, key: h, callback: v, preventDefault: y, enabled: k } = g;
      if (k) {
        if (a.key !== h) continue;
        if (f === null || f === !1) {
          if (u !== 0) continue;
        } else if (f !== void 0 && f?.[0]?.length > 0) {
          const T = Array.isArray(f) ? f : [f];
          let x = !1;
          for (const b of T)
            if ((Array.isArray(b) ? b : [b]).reduce(
              (M, L) => M | L0(L),
              0
            ) === u) {
              x = !0;
              break;
            }
          if (!x) continue;
        }
        y && a.preventDefault();
        const w = {
          node: e,
          trigger: g,
          originalEvent: a
        };
        e.dispatchEvent(new CustomEvent("shortcut", { detail: w })), v?.(w);
      }
    }
  }
  let s;
  return n && (s = Ri(e, o, i)), {
    update: (a) => {
      const { enabled: l = !0, type: u = "keydown" } = a;
      n && (!l || o !== u) ? s?.() : !n && l && (s = Ri(e, u, i)), n = l, o = u, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function ot() {
  const e = /* @__PURE__ */ N(Rt), t = (i) => {
    const s = tl(i) ? i : c(e).nodeLookup.get(i.id), a = s.parentId ? cp(s.position, s.measured, s.parentId, c(e).nodeLookup, c(e).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return wr(l);
  };
  function n(i, s, a = { replace: !1 }) {
    c(e).nodes = nt(() => c(e).nodes).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a?.replace && tl(u) ? u : { ...l, ...u };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    c(e).edges = nt(() => c(e).edges).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a.replace && t0(u) ? u : { ...l, ...u };
      }
      return l;
    });
  }
  const o = (i) => c(e).nodeLookup.get(i);
  return {
    zoomIn: c(e).zoomIn,
    zoomOut: c(e).zoomOut,
    getInternalNode: o,
    getNode: (i) => o(i)?.internals.userNode,
    getNodes: (i) => i === void 0 ? c(e).nodes : sl(c(e).nodeLookup, i),
    getEdge: (i) => c(e).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? c(e).edges : sl(c(e).edgeLookup, i),
    setZoom: (i, s) => {
      const a = c(e).panZoom;
      return a ? a.scaleTo(i, { duration: s?.duration }) : Promise.resolve(!1);
    },
    getZoom: () => c(e).viewport.zoom,
    setViewport: async (i, s) => {
      const a = c(e).viewport;
      return c(e).panZoom ? (await c(e).panZoom.setViewport(
        {
          x: i.x ?? a.x,
          y: i.y ?? a.y,
          zoom: i.zoom ?? a.zoom
        },
        s
      ), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => Sl(c(e).viewport),
    setCenter: async (i, s, a) => c(e).setCenter(i, s, a),
    fitView: (i) => c(e).fitView(i),
    fitBounds: async (i, s) => {
      if (!c(e).panZoom)
        return Promise.resolve(!1);
      const a = Bs(i, c(e).width, c(e).height, c(e).minZoom, c(e).maxZoom, s?.padding ?? 0.1);
      return await c(e).panZoom.setViewport(a, {
        duration: s?.duration,
        ease: s?.ease,
        interpolate: s?.interpolate
      }), Promise.resolve(!0);
    },
    getIntersectingNodes: (i, s = !0, a) => {
      const l = Ka(i), u = l ? i : t(i);
      return u ? (a || c(e).nodes).filter((d) => {
        const g = c(e).nodeLookup.get(d.id);
        if (!g || !l && d.id === i.id)
          return !1;
        const f = wr(g), h = Wr(f, u);
        return s && h > 0 || h >= f.width * f.height || h >= u.width * u.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const u = Ka(i) ? i : t(i);
      if (!u)
        return !1;
      const d = Wr(u, s);
      return a && d > 0 || d >= u.width * u.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: l } = await ip({
        nodesToRemove: i,
        edgesToRemove: s,
        nodes: c(e).nodes,
        edges: c(e).edges,
        onBeforeDelete: c(e).onbeforedelete
      });
      return a && (c(e).nodes = nt(() => c(e).nodes).filter((u) => !a.some(({ id: d }) => d === u.id))), l && (c(e).edges = nt(() => c(e).edges).filter((u) => !l.some(({ id: d }) => d === u.id))), { deletedNodes: a, deletedEdges: l };
    },
    screenToFlowPosition: (i, s = { snapToGrid: !0 }) => {
      if (!c(e).domNode)
        return i;
      const a = s.snapToGrid ? c(e).snapGrid : !1, { x: l, y: u, zoom: d } = c(e).viewport, { x: g, y: f } = c(e).domNode.getBoundingClientRect(), h = { x: i.x - g, y: i.y - f };
      return lo(h, [l, u, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!c(e).domNode)
        return i;
      const { x: s, y: a, zoom: l } = c(e).viewport, { x: u, y: d } = c(e).domNode.getBoundingClientRect(), g = Wo(i, [s, a, l]);
      return { x: g.x + u, y: g.y + d };
    },
    toObject: () => structuredClone({
      nodes: [...c(e).nodes],
      edges: [...c(e).edges],
      viewport: { ...c(e).viewport }
    }),
    updateNode: n,
    updateNodeData: (i, s, a) => {
      const l = c(e).nodeLookup.get(i)?.internals.userNode;
      if (!l)
        return;
      const u = typeof s == "function" ? s(l) : s;
      n(i, (d) => ({
        ...d,
        data: a?.replace ? u : { ...d.data, ...u }
      }));
    },
    updateEdge: r,
    getNodesBounds: (i) => tp(i, {
      nodeLookup: c(e).nodeLookup,
      nodeOrigin: c(e).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(c(e).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
  };
}
function sl(e, t) {
  const n = [];
  for (const r of t) {
    const o = e.get(r);
    if (o) {
      const i = "internals" in o ? o.internals?.userNode : o;
      n.push(i);
    }
  }
  return n;
}
function Vu(e, t) {
  ie(t, !0);
  let n = m(t, "store", 15), r = m(t, "selectionKey", 7, "Shift"), o = m(t, "multiSelectionKey", 23, () => ir() ? "Meta" : "Control"), i = m(t, "deleteKey", 7, "Backspace"), s = m(t, "panActivationKey", 7, " "), a = m(t, "zoomActivationKey", 23, () => ir() ? "Meta" : "Control"), { deleteElements: l } = ot();
  function u(y) {
    return y !== null && typeof y == "object";
  }
  function d(y) {
    return u(y) ? y.modifier || [] : [];
  }
  function g(y) {
    return y == null ? "" : u(y) ? y.key : y;
  }
  function f(y, k) {
    return (Array.isArray(y) ? y : [y]).map((T) => {
      const x = g(T);
      return {
        key: x,
        modifier: d(T),
        enabled: x !== null,
        callback: k
      };
    });
  }
  function h() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  async function v() {
    const y = n().nodes.filter((x) => x.selected), k = n().edges.filter((x) => x.selected), { deletedNodes: w, deletedEdges: T } = await l({ nodes: y, edges: k });
    (w.length > 0 || T.length > 0) && n().ondelete?.({ nodes: w, edges: T });
  }
  return ga("blur", gt, h), ga("contextmenu", gt, h), st(gt, (y, k) => Kt?.(y, k), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), st(gt, (y, k) => Kt?.(y, k), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), st(gt, (y, k) => Kt?.(y, k), () => ({
    trigger: f(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), st(gt, (y, k) => Kt?.(y, k), () => ({
    trigger: f(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), st(gt, (y, k) => Kt?.(y, k), () => ({
    trigger: f(i(), (y) => {
      !(y.originalEvent.ctrlKey || y.originalEvent.metaKey || y.originalEvent.shiftKey) && !jc(y.originalEvent) && (n(n().deleteKeyPressed = !0, !0), v());
    }),
    type: "keydown"
  })), st(gt, (y, k) => Kt?.(y, k), () => ({
    trigger: f(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), st(gt, (y, k) => Kt?.(y, k), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), st(gt, (y, k) => Kt?.(y, k), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), st(gt, (y, k) => Kt?.(y, k), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), st(gt, (y, k) => Kt?.(y, k), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), se({
    get store() {
      return n();
    },
    set store(y) {
      n(y), p();
    },
    get selectionKey() {
      return r();
    },
    set selectionKey(y = "Shift") {
      r(y), p();
    },
    get multiSelectionKey() {
      return o();
    },
    set multiSelectionKey(y = ir() ? "Meta" : "Control") {
      o(y), p();
    },
    get deleteKey() {
      return i();
    },
    set deleteKey(y = "Backspace") {
      i(y), p();
    },
    get panActivationKey() {
      return s();
    },
    set panActivationKey(y = " ") {
      s(y), p();
    },
    get zoomActivationKey() {
      return a();
    },
    set zoomActivationKey(y = ir() ? "Meta" : "Control") {
      a(y), p();
    }
  });
}
ne(
  Vu,
  {
    store: {},
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
var $0 = /* @__PURE__ */ me('<path fill="none" class="svelte-flow__connection-path"></path>'), I0 = /* @__PURE__ */ me('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function Hu(e, t) {
  ie(t, !0);
  let n = m(t, "store", 15), r = m(t, "type", 7), o = m(t, "containerStyle", 7), i = m(t, "style", 7), s = m(t, "LineComponent", 7), a = /* @__PURE__ */ N(() => {
    if (!n().connection.inProgress)
      return "";
    const g = {
      sourceX: n().connection.from.x,
      sourceY: n().connection.from.y,
      sourcePosition: n().connection.fromPosition,
      targetX: n().connection.to.x,
      targetY: n().connection.to.y,
      targetPosition: n().connection.toPosition
    };
    switch (r()) {
      case an.Bezier: {
        const [f] = Uc(g);
        return f;
      }
      case an.Straight: {
        const [f] = Qc(g);
        return f;
      }
      case an.Step:
      case an.SmoothStep: {
        const [f] = qs({
          ...g,
          borderRadius: r() === an.Step ? 0 : void 0
        });
        return f;
      }
    }
  });
  var l = Me(), u = le(l);
  {
    var d = (g) => {
      var f = I0(), h = z(f), v = z(h);
      {
        var y = (w) => {
          var T = Me(), x = le(T);
          Ds(x, s, (b, E) => {
            E(b, {});
          }), O(w, T);
        }, k = (w) => {
          var T = $0();
          ke(() => {
            xe(T, "d", c(a)), ft(T, i());
          }), O(w, T);
        };
        oe(v, (w) => {
          s() ? w(y) : w(k, !1);
        });
      }
      I(h), I(f), ke(
        (w) => {
          xe(f, "width", n().width), xe(f, "height", n().height), ft(f, o()), yt(h, 0, w);
        },
        [
          () => xn([
            "svelte-flow__connection",
            Qv(n().connection.isValid)
          ])
        ]
      ), O(g, f);
    };
    oe(u, (g) => {
      n().connection.inProgress && g(d);
    });
  }
  return O(e, l), se({
    get store() {
      return n();
    },
    set store(g) {
      n(g), p();
    },
    get type() {
      return r();
    },
    set type(g) {
      r(g), p();
    },
    get containerStyle() {
      return o();
    },
    set containerStyle(g) {
      o(g), p();
    },
    get style() {
      return i();
    },
    set style(g) {
      i(g), p();
    },
    get LineComponent() {
      return s();
    },
    set LineComponent(g) {
      s(g), p();
    }
  });
}
ne(
  Hu,
  {
    store: {},
    type: {},
    containerStyle: {},
    style: {},
    LineComponent: {}
  },
  [],
  [],
  !0
);
var z0 = /* @__PURE__ */ X("<div><!></div>");
function uo(e, t) {
  ie(t, !0);
  let n = m(t, "position", 7, "top-right"), r = m(t, "style", 7), o = m(t, "class", 7), i = m(t, "children", 7), s = /* @__PURE__ */ Le(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "position",
    "style",
    "class",
    "children"
  ]), a = /* @__PURE__ */ N(() => `${n()}`.split("-"));
  var l = z0();
  et(l, (d) => ({ class: d, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...c(a)]
  ]);
  var u = z(l);
  return Xe(u, () => i() ?? rt), I(l), O(e, l), se({
    get position() {
      return n();
    },
    set position(d = "top-right") {
      n(d), p();
    },
    get style() {
      return r();
    },
    set style(d) {
      r(d), p();
    },
    get class() {
      return o();
    },
    set class(d) {
      o(d), p();
    },
    get children() {
      return i();
    },
    set children(d) {
      i(d), p();
    }
  });
}
ne(uo, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var R0 = /* @__PURE__ */ X('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function Lu(e, t) {
  ie(t, !0);
  let n = m(t, "proOptions", 7), r = m(t, "position", 7, "bottom-right");
  var o = Me(), i = le(o);
  {
    var s = (a) => {
      uo(a, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var d = R0();
          O(l, d);
        },
        $$slots: { default: !0 }
      });
    };
    oe(i, (a) => {
      n()?.hideAttribution || a(s);
    });
  }
  return O(e, o), se({
    get proOptions() {
      return n();
    },
    set proOptions(a) {
      n(a), p();
    },
    get position() {
      return r();
    },
    set position(a = "bottom-right") {
      r(a), p();
    }
  });
}
ne(Lu, { proOptions: {}, position: {} }, [], [], !0);
var B0 = /* @__PURE__ */ X("<div><!></div>");
const q0 = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function $u(e, t) {
  ie(t, !0), Oe(e, q0);
  let n = m(t, "width", 7), r = m(t, "height", 7), o = m(t, "colorMode", 7), i = m(t, "domNode", 15), s = m(t, "clientWidth", 15), a = m(t, "clientHeight", 15), l = m(t, "children", 7), u = m(t, "rest", 7), d = /* @__PURE__ */ N(() => u().class), g = /* @__PURE__ */ N(() => Of(u(), [
    "id",
    "class",
    "nodeTypes",
    "edgeTypes",
    "colorMode",
    "isValidConnection",
    "onmove",
    "onmovestart",
    "onmoveend",
    "onflowerror",
    "ondelete",
    "onbeforedelete",
    "onbeforeconnect",
    "onconnect",
    "onconnectstart",
    "onconnectend",
    "onbeforereconnect",
    "onreconnect",
    "onreconnectstart",
    "onreconnectend",
    "onclickconnectstart",
    "onclickconnectend",
    "oninit",
    "onselectionchange",
    "onselectiondragstart",
    "onselectiondrag",
    "onselectiondragstop",
    "onselectionstart",
    "onselectionend",
    "clickConnect",
    "fitView",
    "fitViewOptions",
    "nodeOrigin",
    "nodeDragThreshold",
    "connectionDragThreshold",
    "minZoom",
    "maxZoom",
    "initialViewport",
    "connectionRadius",
    "connectionMode",
    "selectionMode",
    "selectNodesOnDrag",
    "snapGrid",
    "defaultMarkerColor",
    "translateExtent",
    "nodeExtent",
    "onlyRenderVisibleElements",
    "autoPanOnConnect",
    "autoPanOnNodeDrag",
    "colorModeSSR",
    "style",
    "defaultEdgeOptions",
    "elevateNodesOnSelect",
    "elevateEdgesOnSelect",
    "nodesDraggable",
    "autoPanOnNodeFocus",
    "nodesConnectable",
    "elementsSelectable",
    "nodesFocusable",
    "edgesFocusable",
    "disableKeyboardA11y",
    "noDragClass",
    "noPanClass",
    "noWheelClass",
    "ariaLabelConfig"
  ]));
  function f(y) {
    y.currentTarget.scrollTo({ top: 0, left: 0, behavior: "auto" }), u().onscroll && u().onscroll(y);
  }
  var h = B0();
  et(
    h,
    (y) => ({
      class: [
        "svelte-flow",
        "svelte-flow__container",
        c(d),
        o()
      ],
      "data-testid": "svelte-flow__wrapper",
      role: "application",
      onscroll: f,
      ...c(g),
      [Zt]: y
    }),
    [
      () => ({ width: en(n()), height: en(r()) })
    ],
    "svelte-12wlba6"
  );
  var v = z(h);
  return Xe(v, () => l() ?? rt), I(h), Nt(h, (y) => i(y), () => i()), wa(h, "clientHeight", a), wa(h, "clientWidth", s), O(e, h), se({
    get width() {
      return n();
    },
    set width(y) {
      n(y), p();
    },
    get height() {
      return r();
    },
    set height(y) {
      r(y), p();
    },
    get colorMode() {
      return o();
    },
    set colorMode(y) {
      o(y), p();
    },
    get domNode() {
      return i();
    },
    set domNode(y) {
      i(y), p();
    },
    get clientWidth() {
      return s();
    },
    set clientWidth(y) {
      s(y), p();
    },
    get clientHeight() {
      return a();
    },
    set clientHeight(y) {
      a(y), p();
    },
    get children() {
      return l();
    },
    set children(y) {
      l(y), p();
    },
    get rest() {
      return u();
    },
    set rest(y) {
      u(y), p();
    }
  });
}
ne(
  $u,
  {
    width: {},
    height: {},
    colorMode: {},
    domNode: {},
    clientWidth: {},
    clientHeight: {},
    children: {},
    rest: {}
  },
  [],
  [],
  !0
);
var K0 = /* @__PURE__ */ X('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), F0 = /* @__PURE__ */ X("<!> <!>", 1), Z0 = /* @__PURE__ */ X("<!> <!> <!> <!> <!>", 1);
function Iu(e, t) {
  ie(t, !0);
  let n = m(t, "width", 7), r = m(t, "height", 7), o = m(t, "proOptions", 7), i = m(t, "selectionKey", 7), s = m(t, "deleteKey", 7), a = m(t, "panActivationKey", 7), l = m(t, "multiSelectionKey", 7), u = m(t, "zoomActivationKey", 7), d = m(t, "paneClickDistance", 7, 1), g = m(t, "nodeClickDistance", 7, 1), f = m(t, "onmovestart", 7), h = m(t, "onmoveend", 7), v = m(t, "onmove", 7), y = m(t, "oninit", 7), k = m(t, "onnodeclick", 7), w = m(t, "onnodecontextmenu", 7), T = m(t, "onnodedrag", 7), x = m(t, "onnodedragstart", 7), b = m(t, "onnodedragstop", 7), E = m(t, "onnodepointerenter", 7), M = m(t, "onnodepointermove", 7), L = m(t, "onnodepointerleave", 7), B = m(t, "onselectionclick", 7), Y = m(t, "onselectioncontextmenu", 7), U = m(t, "onselectionstart", 7), $ = m(t, "onselectionend", 7), S = m(t, "onedgeclick", 7), A = m(t, "onedgecontextmenu", 7), _ = m(t, "onedgepointerenter", 7), P = m(t, "onedgepointerleave", 7), C = m(t, "onpaneclick", 7), H = m(t, "onpanecontextmenu", 7), R = m(t, "panOnScrollMode", 23, () => Gt.Free), D = m(t, "preventScrolling", 7, !0), K = m(t, "zoomOnScroll", 7, !0), F = m(t, "zoomOnDoubleClick", 7, !0), W = m(t, "zoomOnPinch", 7, !0), Q = m(t, "panOnScroll", 7, !1), G = m(t, "panOnDrag", 7, !0), J = m(t, "selectionOnDrag", 7, !0), ue = m(t, "connectionLineComponent", 7), re = m(t, "connectionLineStyle", 7), j = m(t, "connectionLineContainerStyle", 7), _e = m(t, "connectionLineType", 23, () => an.Bezier), ve = m(t, "attributionPosition", 7), ee = m(t, "children", 7), ae = m(t, "nodes", 31, () => Mt([])), de = m(t, "edges", 31, () => Mt([])), te = m(t, "viewport", 31, () => {
  }), ge = /* @__PURE__ */ Le(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "width",
    "height",
    "proOptions",
    "selectionKey",
    "deleteKey",
    "panActivationKey",
    "multiSelectionKey",
    "zoomActivationKey",
    "paneClickDistance",
    "nodeClickDistance",
    "onmovestart",
    "onmoveend",
    "onmove",
    "oninit",
    "onnodeclick",
    "onnodecontextmenu",
    "onnodedrag",
    "onnodedragstart",
    "onnodedragstop",
    "onnodepointerenter",
    "onnodepointermove",
    "onnodepointerleave",
    "onselectionclick",
    "onselectioncontextmenu",
    "onselectionstart",
    "onselectionend",
    "onedgeclick",
    "onedgecontextmenu",
    "onedgepointerenter",
    "onedgepointerleave",
    "onpaneclick",
    "onpanecontextmenu",
    "panOnScrollMode",
    "preventScrolling",
    "zoomOnScroll",
    "zoomOnDoubleClick",
    "zoomOnPinch",
    "panOnScroll",
    "panOnDrag",
    "selectionOnDrag",
    "connectionLineComponent",
    "connectionLineStyle",
    "connectionLineContainerStyle",
    "connectionLineType",
    "attributionPosition",
    "children",
    "nodes",
    "edges",
    "viewport"
  ]), ce = wu({
    props: ge,
    width: n(),
    height: r(),
    get nodes() {
      return ae();
    },
    set nodes(q) {
      ae(q);
    },
    get edges() {
      return de();
    },
    set edges(q) {
      de(q);
    },
    get viewport() {
      return te();
    },
    set viewport(q) {
      te(q);
    }
  });
  const pe = Dn(jo);
  return pe && pe.setStore && pe.setStore(ce), fr(jo, {
    provider: !1,
    getStore() {
      return ce;
    }
  }), We(() => {
    const q = { nodes: ce.selectedNodes, edges: ce.selectedEdges };
    nt(() => t.onselectionchange)?.(q);
    for (const Fe of ce.selectionChangeHandlers.values())
      Fe(q);
  }), ii(() => {
    ce.reset();
  }), $u(e, {
    get colorMode() {
      return ce.colorMode;
    },
    get width() {
      return n();
    },
    get height() {
      return r();
    },
    get rest() {
      return ge;
    },
    get domNode() {
      return ce.domNode;
    },
    set domNode(q) {
      ce.domNode = q;
    },
    get clientWidth() {
      return ce.width;
    },
    set clientWidth(q) {
      ce.width = q;
    },
    get clientHeight() {
      return ce.height;
    },
    set clientHeight(q) {
      ce.height = q;
    },
    children: (q, Fe) => {
      var Ve = Z0(), fe = le(Ve);
      Vu(fe, {
        get selectionKey() {
          return i();
        },
        get deleteKey() {
          return s();
        },
        get panActivationKey() {
          return a();
        },
        get multiSelectionKey() {
          return l();
        },
        get zoomActivationKey() {
          return u();
        },
        get store() {
          return ce;
        },
        set store(Ge) {
          ce = Ge;
        }
      });
      var Se = V(fe, 2);
      _u(Se, {
        get panOnScrollMode() {
          return R();
        },
        get preventScrolling() {
          return D();
        },
        get zoomOnScroll() {
          return K();
        },
        get zoomOnDoubleClick() {
          return F();
        },
        get zoomOnPinch() {
          return W();
        },
        get panOnScroll() {
          return Q();
        },
        get panOnDrag() {
          return G();
        },
        get paneClickDistance() {
          return d();
        },
        get onmovestart() {
          return f();
        },
        get onmove() {
          return v();
        },
        get onmoveend() {
          return h();
        },
        get oninit() {
          return y();
        },
        get store() {
          return ce;
        },
        set store(Ge) {
          ce = Ge;
        },
        children: (Ge, ze) => {
          xu(Ge, {
            get onpaneclick() {
              return C();
            },
            get onpanecontextmenu() {
              return H();
            },
            get onselectionstart() {
              return U();
            },
            get onselectionend() {
              return $();
            },
            get panOnDrag() {
              return G();
            },
            get selectionOnDrag() {
              return J();
            },
            get store() {
              return ce;
            },
            set store(Ye) {
              ce = Ye;
            },
            children: (Ye, he) => {
              var Be = F0(), _t = le(Be);
              bu(_t, {
                get store() {
                  return ce;
                },
                set store(on) {
                  ce = on;
                },
                children: (on, Uw) => {
                  var ea = K0(), ta = V(le(ea), 2);
                  Mu(ta, {
                    get onedgeclick() {
                      return S();
                    },
                    get onedgecontextmenu() {
                      return A();
                    },
                    get onedgepointerenter() {
                      return _();
                    },
                    get onedgepointerleave() {
                      return P();
                    },
                    get store() {
                      return ce;
                    },
                    set store(Bn) {
                      ce = Bn;
                    }
                  });
                  var na = V(ta, 4);
                  Hu(na, {
                    get type() {
                      return _e();
                    },
                    get LineComponent() {
                      return ue();
                    },
                    get containerStyle() {
                      return j();
                    },
                    get style() {
                      return re();
                    },
                    get store() {
                      return ce;
                    },
                    set store(Bn) {
                      ce = Bn;
                    }
                  });
                  var ra = V(na, 2);
                  Pu(ra, {
                    get nodeClickDistance() {
                      return g();
                    },
                    get onnodeclick() {
                      return k();
                    },
                    get onnodecontextmenu() {
                      return w();
                    },
                    get onnodepointerenter() {
                      return E();
                    },
                    get onnodepointermove() {
                      return M();
                    },
                    get onnodepointerleave() {
                      return L();
                    },
                    get onnodedrag() {
                      return T();
                    },
                    get onnodedragstart() {
                      return x();
                    },
                    get onnodedragstop() {
                      return b();
                    },
                    get store() {
                      return ce;
                    },
                    set store(Bn) {
                      ce = Bn;
                    }
                  });
                  var $d = V(ra, 2);
                  Ou($d, {
                    get onselectionclick() {
                      return B();
                    },
                    get onselectioncontextmenu() {
                      return Y();
                    },
                    get onnodedrag() {
                      return T();
                    },
                    get onnodedragstart() {
                      return x();
                    },
                    get onnodedragstop() {
                      return b();
                    },
                    get store() {
                      return ce;
                    },
                    set store(Bn) {
                      ce = Bn;
                    }
                  }), ye(2), O(on, ea);
                },
                $$slots: { default: !0 }
              });
              var Ue = V(_t, 2);
              const Tt = /* @__PURE__ */ N(() => !!(ce.selectionRect && ce.selectionRectMode === "user")), tt = /* @__PURE__ */ N(() => ce.selectionRect?.width), qt = /* @__PURE__ */ N(() => ce.selectionRect?.height), wi = /* @__PURE__ */ N(() => ce.selectionRect?.x), Rn = /* @__PURE__ */ N(() => ce.selectionRect?.y);
              Xs(Ue, {
                get isVisible() {
                  return c(Tt);
                },
                get width() {
                  return c(tt);
                },
                get height() {
                  return c(qt);
                },
                get x() {
                  return c(wi);
                },
                get y() {
                  return c(Rn);
                }
              }), O(Ye, Be);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var be = V(Se, 2);
      Lu(be, {
        get proOptions() {
          return o();
        },
        get position() {
          return ve();
        }
      });
      var Ze = V(be, 2);
      ku(Ze, {
        get store() {
          return ce;
        }
      });
      var wt = V(Ze, 2);
      Xe(wt, () => ee() ?? rt), O(q, Ve);
    },
    $$slots: { default: !0 }
  }), se({
    get width() {
      return n();
    },
    set width(q) {
      n(q), p();
    },
    get height() {
      return r();
    },
    set height(q) {
      r(q), p();
    },
    get proOptions() {
      return o();
    },
    set proOptions(q) {
      o(q), p();
    },
    get selectionKey() {
      return i();
    },
    set selectionKey(q) {
      i(q), p();
    },
    get deleteKey() {
      return s();
    },
    set deleteKey(q) {
      s(q), p();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(q) {
      a(q), p();
    },
    get multiSelectionKey() {
      return l();
    },
    set multiSelectionKey(q) {
      l(q), p();
    },
    get zoomActivationKey() {
      return u();
    },
    set zoomActivationKey(q) {
      u(q), p();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(q = 1) {
      d(q), p();
    },
    get nodeClickDistance() {
      return g();
    },
    set nodeClickDistance(q = 1) {
      g(q), p();
    },
    get onmovestart() {
      return f();
    },
    set onmovestart(q) {
      f(q), p();
    },
    get onmoveend() {
      return h();
    },
    set onmoveend(q) {
      h(q), p();
    },
    get onmove() {
      return v();
    },
    set onmove(q) {
      v(q), p();
    },
    get oninit() {
      return y();
    },
    set oninit(q) {
      y(q), p();
    },
    get onnodeclick() {
      return k();
    },
    set onnodeclick(q) {
      k(q), p();
    },
    get onnodecontextmenu() {
      return w();
    },
    set onnodecontextmenu(q) {
      w(q), p();
    },
    get onnodedrag() {
      return T();
    },
    set onnodedrag(q) {
      T(q), p();
    },
    get onnodedragstart() {
      return x();
    },
    set onnodedragstart(q) {
      x(q), p();
    },
    get onnodedragstop() {
      return b();
    },
    set onnodedragstop(q) {
      b(q), p();
    },
    get onnodepointerenter() {
      return E();
    },
    set onnodepointerenter(q) {
      E(q), p();
    },
    get onnodepointermove() {
      return M();
    },
    set onnodepointermove(q) {
      M(q), p();
    },
    get onnodepointerleave() {
      return L();
    },
    set onnodepointerleave(q) {
      L(q), p();
    },
    get onselectionclick() {
      return B();
    },
    set onselectionclick(q) {
      B(q), p();
    },
    get onselectioncontextmenu() {
      return Y();
    },
    set onselectioncontextmenu(q) {
      Y(q), p();
    },
    get onselectionstart() {
      return U();
    },
    set onselectionstart(q) {
      U(q), p();
    },
    get onselectionend() {
      return $();
    },
    set onselectionend(q) {
      $(q), p();
    },
    get onedgeclick() {
      return S();
    },
    set onedgeclick(q) {
      S(q), p();
    },
    get onedgecontextmenu() {
      return A();
    },
    set onedgecontextmenu(q) {
      A(q), p();
    },
    get onedgepointerenter() {
      return _();
    },
    set onedgepointerenter(q) {
      _(q), p();
    },
    get onedgepointerleave() {
      return P();
    },
    set onedgepointerleave(q) {
      P(q), p();
    },
    get onpaneclick() {
      return C();
    },
    set onpaneclick(q) {
      C(q), p();
    },
    get onpanecontextmenu() {
      return H();
    },
    set onpanecontextmenu(q) {
      H(q), p();
    },
    get panOnScrollMode() {
      return R();
    },
    set panOnScrollMode(q = Gt.Free) {
      R(q), p();
    },
    get preventScrolling() {
      return D();
    },
    set preventScrolling(q = !0) {
      D(q), p();
    },
    get zoomOnScroll() {
      return K();
    },
    set zoomOnScroll(q = !0) {
      K(q), p();
    },
    get zoomOnDoubleClick() {
      return F();
    },
    set zoomOnDoubleClick(q = !0) {
      F(q), p();
    },
    get zoomOnPinch() {
      return W();
    },
    set zoomOnPinch(q = !0) {
      W(q), p();
    },
    get panOnScroll() {
      return Q();
    },
    set panOnScroll(q = !1) {
      Q(q), p();
    },
    get panOnDrag() {
      return G();
    },
    set panOnDrag(q = !0) {
      G(q), p();
    },
    get selectionOnDrag() {
      return J();
    },
    set selectionOnDrag(q = !0) {
      J(q), p();
    },
    get connectionLineComponent() {
      return ue();
    },
    set connectionLineComponent(q) {
      ue(q), p();
    },
    get connectionLineStyle() {
      return re();
    },
    set connectionLineStyle(q) {
      re(q), p();
    },
    get connectionLineContainerStyle() {
      return j();
    },
    set connectionLineContainerStyle(q) {
      j(q), p();
    },
    get connectionLineType() {
      return _e();
    },
    set connectionLineType(q = an.Bezier) {
      _e(q), p();
    },
    get attributionPosition() {
      return ve();
    },
    set attributionPosition(q) {
      ve(q), p();
    },
    get children() {
      return ee();
    },
    set children(q) {
      ee(q), p();
    },
    get nodes() {
      return ae();
    },
    set nodes(q = []) {
      ae(q), p();
    },
    get edges() {
      return de();
    },
    set edges(q = []) {
      de(q), p();
    },
    get viewport() {
      return te();
    },
    set viewport(q = void 0) {
      te(q), p();
    }
  });
}
ne(
  Iu,
  {
    width: {},
    height: {},
    proOptions: {},
    selectionKey: {},
    deleteKey: {},
    panActivationKey: {},
    multiSelectionKey: {},
    zoomActivationKey: {},
    paneClickDistance: {},
    nodeClickDistance: {},
    onmovestart: {},
    onmoveend: {},
    onmove: {},
    oninit: {},
    onnodeclick: {},
    onnodecontextmenu: {},
    onnodedrag: {},
    onnodedragstart: {},
    onnodedragstop: {},
    onnodepointerenter: {},
    onnodepointermove: {},
    onnodepointerleave: {},
    onselectionclick: {},
    onselectioncontextmenu: {},
    onselectionstart: {},
    onselectionend: {},
    onedgeclick: {},
    onedgecontextmenu: {},
    onedgepointerenter: {},
    onedgepointerleave: {},
    onpaneclick: {},
    onpanecontextmenu: {},
    panOnScrollMode: {},
    preventScrolling: {},
    zoomOnScroll: {},
    zoomOnDoubleClick: {},
    zoomOnPinch: {},
    panOnScroll: {},
    panOnDrag: {},
    selectionOnDrag: {},
    connectionLineComponent: {},
    connectionLineStyle: {},
    connectionLineContainerStyle: {},
    connectionLineType: {},
    attributionPosition: {},
    children: {},
    nodes: {},
    edges: {},
    viewport: {}
  },
  [],
  [],
  !0
);
function zu(e, t) {
  ie(t, !0);
  let n = m(t, "children", 7), r = /* @__PURE__ */ Ne(wu({ props: {}, nodes: [], edges: [] }));
  fr(jo, {
    provider: !0,
    getStore() {
      return c(r);
    },
    setStore: (s) => {
      Z(r, s);
    }
  }), ii(() => {
    c(r).reset();
  });
  var o = Me(), i = le(o);
  return Xe(i, () => n() ?? rt), O(e, o), se({
    get children() {
      return n();
    },
    set children(s) {
      n(s), p();
    }
  });
}
ne(zu, { children: {} }, [], [], !0);
var Y0 = /* @__PURE__ */ X("<button><!></button>");
function Mr(e, t) {
  ie(t, !0);
  let n = m(t, "class", 7), r = m(t, "bgColor", 7), o = m(t, "bgColorHover", 7), i = m(t, "color", 7), s = m(t, "colorHover", 7), a = m(t, "borderColor", 7), l = m(t, "onclick", 7), u = m(t, "children", 7), d = /* @__PURE__ */ Le(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "class",
    "bgColor",
    "bgColorHover",
    "color",
    "colorHover",
    "borderColor",
    "onclick",
    "children"
  ]);
  var g = Y0();
  et(
    g,
    (h) => ({
      type: "button",
      onclick: l(),
      class: ["svelte-flow__controls-button", n()],
      ...d,
      [Zt]: h
    }),
    [
      () => ({
        "--xy-controls-button-background-color-props": r(),
        "--xy-controls-button-background-color-hover-props": o(),
        "--xy-controls-button-color-props": i(),
        "--xy-controls-button-color-hover-props": s(),
        "--xy-controls-button-border-color-props": a()
      })
    ]
  );
  var f = z(g);
  return Xe(f, () => u() ?? rt), I(g), O(e, g), se({
    get class() {
      return n();
    },
    set class(h) {
      n(h), p();
    },
    get bgColor() {
      return r();
    },
    set bgColor(h) {
      r(h), p();
    },
    get bgColorHover() {
      return o();
    },
    set bgColorHover(h) {
      o(h), p();
    },
    get color() {
      return i();
    },
    set color(h) {
      i(h), p();
    },
    get colorHover() {
      return s();
    },
    set colorHover(h) {
      s(h), p();
    },
    get borderColor() {
      return a();
    },
    set borderColor(h) {
      a(h), p();
    },
    get onclick() {
      return l();
    },
    set onclick(h) {
      l(h), p();
    },
    get children() {
      return u();
    },
    set children(h) {
      u(h), p();
    }
  });
}
ne(
  Mr,
  {
    class: {},
    bgColor: {},
    bgColorHover: {},
    color: {},
    colorHover: {},
    borderColor: {},
    onclick: {},
    children: {}
  },
  [],
  [],
  !0
);
var W0 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function Ru(e) {
  var t = W0();
  O(e, t);
}
ne(Ru, {}, [], [], !0);
var X0 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Bu(e) {
  var t = X0();
  O(e, t);
}
ne(Bu, {}, [], [], !0);
var j0 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function qu(e) {
  var t = j0();
  O(e, t);
}
ne(qu, {}, [], [], !0);
var G0 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Ku(e) {
  var t = G0();
  O(e, t);
}
ne(Ku, {}, [], [], !0);
var U0 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function Fu(e) {
  var t = U0();
  O(e, t);
}
ne(Fu, {}, [], [], !0);
var J0 = /* @__PURE__ */ X("<!> <!>", 1), Q0 = /* @__PURE__ */ X("<!> <!> <!> <!> <!> <!>", 1);
function Zu(e, t) {
  ie(t, !0);
  let n = m(t, "position", 7, "bottom-left"), r = m(t, "orientation", 7, "vertical"), o = m(t, "showZoom", 7, !0), i = m(t, "showFitView", 7, !0), s = m(t, "showLock", 7, !0), a = m(t, "style", 7), l = m(t, "class", 7), u = m(t, "buttonBgColor", 7), d = m(t, "buttonBgColorHover", 7), g = m(t, "buttonColor", 7), f = m(t, "buttonColorHover", 7), h = m(t, "buttonBorderColor", 7), v = m(t, "fitViewOptions", 7), y = m(t, "children", 7), k = m(t, "before", 7), w = m(t, "after", 7), T = /* @__PURE__ */ Le(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "position",
    "orientation",
    "showZoom",
    "showFitView",
    "showLock",
    "style",
    "class",
    "buttonBgColor",
    "buttonBgColorHover",
    "buttonColor",
    "buttonColorHover",
    "buttonBorderColor",
    "fitViewOptions",
    "children",
    "before",
    "after"
  ]), x = /* @__PURE__ */ N(Rt);
  const b = {
    bgColor: u(),
    bgColorHover: d(),
    color: g(),
    colorHover: f(),
    borderColor: h()
  };
  let E = /* @__PURE__ */ N(() => c(x).nodesDraggable || c(x).nodesConnectable || c(x).elementsSelectable), M = /* @__PURE__ */ N(() => c(x).viewport.zoom <= c(x).minZoom), L = /* @__PURE__ */ N(() => c(x).viewport.zoom >= c(x).maxZoom), B = /* @__PURE__ */ N(() => c(x).ariaLabelConfig), Y = /* @__PURE__ */ N(() => r() === "horizontal" ? "horizontal" : "vertical");
  const U = () => {
    c(x).zoomIn();
  }, $ = () => {
    c(x).zoomOut();
  }, S = () => {
    c(x).fitView(v());
  }, A = () => {
    let P = !c(E);
    c(x).nodesDraggable = P, c(x).nodesConnectable = P, c(x).elementsSelectable = P;
  }, _ = /* @__PURE__ */ N(() => [
    "svelte-flow__controls",
    c(Y),
    l()
  ]);
  return uo(e, Ie(
    {
      get class() {
        return c(_);
      },
      get position() {
        return n();
      },
      "data-testid": "svelte-flow__controls",
      get "aria-label"() {
        return c(B)["controls.ariaLabel"];
      },
      get style() {
        return a();
      }
    },
    () => T,
    {
      children: (P, C) => {
        var H = Q0(), R = le(H);
        {
          var D = (ve) => {
            var ee = Me(), ae = le(ee);
            Xe(ae, k), O(ve, ee);
          };
          oe(R, (ve) => {
            k() && ve(D);
          });
        }
        var K = V(R, 2);
        {
          var F = (ve) => {
            var ee = J0(), ae = le(ee);
            Mr(ae, Ie(
              {
                onclick: U,
                class: "svelte-flow__controls-zoomin",
                get title() {
                  return c(B)["controls.zoomIn.ariaLabel"];
                },
                get "aria-label"() {
                  return c(B)["controls.zoomIn.ariaLabel"];
                },
                get disabled() {
                  return c(L);
                }
              },
              () => b,
              {
                children: (te, ge) => {
                  Ru(te);
                },
                $$slots: { default: !0 }
              }
            ));
            var de = V(ae, 2);
            Mr(de, Ie(
              {
                onclick: $,
                class: "svelte-flow__controls-zoomout",
                get title() {
                  return c(B)["controls.zoomOut.ariaLabel"];
                },
                get "aria-label"() {
                  return c(B)["controls.zoomOut.ariaLabel"];
                },
                get disabled() {
                  return c(M);
                }
              },
              () => b,
              {
                children: (te, ge) => {
                  Bu(te);
                },
                $$slots: { default: !0 }
              }
            )), O(ve, ee);
          };
          oe(K, (ve) => {
            o() && ve(F);
          });
        }
        var W = V(K, 2);
        {
          var Q = (ve) => {
            Mr(ve, Ie(
              {
                class: "svelte-flow__controls-fitview",
                onclick: S,
                get title() {
                  return c(B)["controls.fitView.ariaLabel"];
                },
                get "aria-label"() {
                  return c(B)["controls.fitView.ariaLabel"];
                }
              },
              () => b,
              {
                children: (ee, ae) => {
                  qu(ee);
                },
                $$slots: { default: !0 }
              }
            ));
          };
          oe(W, (ve) => {
            i() && ve(Q);
          });
        }
        var G = V(W, 2);
        {
          var J = (ve) => {
            Mr(ve, Ie(
              {
                class: "svelte-flow__controls-interactive",
                onclick: A,
                get title() {
                  return c(B)["controls.interactive.ariaLabel"];
                },
                get "aria-label"() {
                  return c(B)["controls.interactive.ariaLabel"];
                }
              },
              () => b,
              {
                children: (ee, ae) => {
                  var de = Me(), te = le(de);
                  {
                    var ge = (pe) => {
                      Fu(pe);
                    }, ce = (pe) => {
                      Ku(pe);
                    };
                    oe(te, (pe) => {
                      c(E) ? pe(ge) : pe(ce, !1);
                    });
                  }
                  O(ee, de);
                },
                $$slots: { default: !0 }
              }
            ));
          };
          oe(G, (ve) => {
            s() && ve(J);
          });
        }
        var ue = V(G, 2);
        {
          var re = (ve) => {
            var ee = Me(), ae = le(ee);
            Xe(ae, y), O(ve, ee);
          };
          oe(ue, (ve) => {
            y() && ve(re);
          });
        }
        var j = V(ue, 2);
        {
          var _e = (ve) => {
            var ee = Me(), ae = le(ee);
            Xe(ae, w), O(ve, ee);
          };
          oe(j, (ve) => {
            w() && ve(_e);
          });
        }
        O(P, H);
      },
      $$slots: { default: !0 }
    }
  )), se({
    get position() {
      return n();
    },
    set position(P = "bottom-left") {
      n(P), p();
    },
    get orientation() {
      return r();
    },
    set orientation(P = "vertical") {
      r(P), p();
    },
    get showZoom() {
      return o();
    },
    set showZoom(P = !0) {
      o(P), p();
    },
    get showFitView() {
      return i();
    },
    set showFitView(P = !0) {
      i(P), p();
    },
    get showLock() {
      return s();
    },
    set showLock(P = !0) {
      s(P), p();
    },
    get style() {
      return a();
    },
    set style(P) {
      a(P), p();
    },
    get class() {
      return l();
    },
    set class(P) {
      l(P), p();
    },
    get buttonBgColor() {
      return u();
    },
    set buttonBgColor(P) {
      u(P), p();
    },
    get buttonBgColorHover() {
      return d();
    },
    set buttonBgColorHover(P) {
      d(P), p();
    },
    get buttonColor() {
      return g();
    },
    set buttonColor(P) {
      g(P), p();
    },
    get buttonColorHover() {
      return f();
    },
    set buttonColorHover(P) {
      f(P), p();
    },
    get buttonBorderColor() {
      return h();
    },
    set buttonBorderColor(P) {
      h(P), p();
    },
    get fitViewOptions() {
      return v();
    },
    set fitViewOptions(P) {
      v(P), p();
    },
    get children() {
      return y();
    },
    set children(P) {
      y(P), p();
    },
    get before() {
      return k();
    },
    set before(P) {
      k(P), p();
    },
    get after() {
      return w();
    },
    set after(P) {
      w(P), p();
    }
  });
}
ne(
  Zu,
  {
    position: {},
    orientation: {},
    showZoom: {},
    showFitView: {},
    showLock: {},
    style: {},
    class: {},
    buttonBgColor: {},
    buttonBgColorHover: {},
    buttonColor: {},
    buttonColorHover: {},
    buttonBorderColor: {},
    fitViewOptions: {},
    children: {},
    before: {},
    after: {}
  },
  [],
  [],
  !0
);
var un;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(un || (un = {}));
var em = /* @__PURE__ */ me("<circle></circle>");
function Yu(e, t) {
  ie(t, !0);
  let n = m(t, "radius", 7), r = m(t, "class", 7);
  var o = em();
  return ke(() => {
    xe(o, "cx", n()), xe(o, "cy", n()), xe(o, "r", n()), yt(o, 0, xn(["svelte-flow__background-pattern", "dots", r()]));
  }), O(e, o), se({
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
ne(Yu, { radius: {}, class: {} }, [], [], !0);
var tm = /* @__PURE__ */ me("<path></path>");
function Wu(e, t) {
  ie(t, !0);
  let n = m(t, "lineWidth", 7), r = m(t, "dimensions", 7), o = m(t, "variant", 7), i = m(t, "class", 7);
  var s = tm();
  return ke(() => {
    xe(s, "stroke-width", n()), xe(s, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), yt(s, 0, xn(["svelte-flow__background-pattern", o(), i()]));
  }), O(e, s), se({
    get lineWidth() {
      return n();
    },
    set lineWidth(a) {
      n(a), p();
    },
    get dimensions() {
      return r();
    },
    set dimensions(a) {
      r(a), p();
    },
    get variant() {
      return o();
    },
    set variant(a) {
      o(a), p();
    },
    get class() {
      return i();
    },
    set class(a) {
      i(a), p();
    }
  });
}
ne(Wu, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const nm = {
  [un.Dots]: 1,
  [un.Lines]: 1,
  [un.Cross]: 6
};
var rm = /* @__PURE__ */ me('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function Xu(e, t) {
  ie(t, !0);
  let n = m(t, "id", 7), r = m(t, "variant", 23, () => un.Dots), o = m(t, "gap", 7, 20), i = m(t, "size", 7), s = m(t, "lineWidth", 7, 1), a = m(t, "bgColor", 7), l = m(t, "patternColor", 7), u = m(t, "patternClass", 7), d = m(t, "class", 7), g = /* @__PURE__ */ N(Rt), f = /* @__PURE__ */ N(() => r() === un.Dots), h = /* @__PURE__ */ N(() => r() === un.Cross), v = /* @__PURE__ */ N(() => Array.isArray(o()) ? o() : [o(), o()]), y = /* @__PURE__ */ N(() => `background-pattern-${c(g).flowId}-${n() ?? ""}`), k = /* @__PURE__ */ N(() => [
    c(v)[0] * c(g).viewport.zoom || 1,
    c(v)[1] * c(g).viewport.zoom || 1
  ]), w = /* @__PURE__ */ N(() => (i() ?? nm[r()]) * c(g).viewport.zoom), T = /* @__PURE__ */ N(() => c(h) ? [c(w), c(w)] : c(k)), x = /* @__PURE__ */ N(() => c(f) ? [c(w) / 2, c(w) / 2] : [
    c(T)[0] / 2,
    c(T)[1] / 2
  ]);
  var b = rm();
  let E;
  var M = z(b), L = z(M);
  {
    var B = ($) => {
      const S = /* @__PURE__ */ N(() => c(w) / 2);
      Yu($, {
        get radius() {
          return c(S);
        },
        get class() {
          return u();
        }
      });
    }, Y = ($) => {
      Wu($, {
        get dimensions() {
          return c(T);
        },
        get variant() {
          return r();
        },
        get lineWidth() {
          return s();
        },
        get class() {
          return u();
        }
      });
    };
    oe(L, ($) => {
      c(f) ? $(B) : $(Y, !1);
    });
  }
  I(M);
  var U = V(M);
  return I(b), ke(
    ($) => {
      yt(b, 0, xn([
        "svelte-flow__background",
        "svelte-flow__container",
        d()
      ])), E = ft(b, "", E, $), xe(M, "id", c(y)), xe(M, "x", c(g).viewport.x % c(k)[0]), xe(M, "y", c(g).viewport.y % c(k)[1]), xe(M, "width", c(k)[0]), xe(M, "height", c(k)[1]), xe(M, "patternTransform", `translate(-${c(x)[0]},-${c(x)[1]})`), xe(U, "fill", `url(#${c(y)})`);
    },
    [
      () => ({
        "--xy-background-color-props": a(),
        "--xy-background-pattern-color-props": l()
      })
    ]
  ), O(e, b), se({
    get id() {
      return n();
    },
    set id($) {
      n($), p();
    },
    get variant() {
      return r();
    },
    set variant($ = un.Dots) {
      r($), p();
    },
    get gap() {
      return o();
    },
    set gap($ = 20) {
      o($), p();
    },
    get size() {
      return i();
    },
    set size($) {
      i($), p();
    },
    get lineWidth() {
      return s();
    },
    set lineWidth($ = 1) {
      s($), p();
    },
    get bgColor() {
      return a();
    },
    set bgColor($) {
      a($), p();
    },
    get patternColor() {
      return l();
    },
    set patternColor($) {
      l($), p();
    },
    get patternClass() {
      return u();
    },
    set patternClass($) {
      u($), p();
    },
    get class() {
      return d();
    },
    set class($) {
      d($), p();
    }
  });
}
ne(
  Xu,
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
var om = /* @__PURE__ */ me("<rect></rect>");
function ju(e, t) {
  ie(t, !0);
  let n = m(t, "x", 7), r = m(t, "y", 7), o = m(t, "width", 7), i = m(t, "height", 7), s = m(t, "borderRadius", 7, 5), a = m(t, "color", 7), l = m(t, "shapeRendering", 7), u = m(t, "strokeColor", 7), d = m(t, "strokeWidth", 7, 2), g = m(t, "selected", 7), f = m(t, "class", 7);
  var h = om();
  let v, y;
  return ke(
    (k, w) => {
      v = yt(h, 0, xn(["svelte-flow__minimap-node", f()]), null, v, k), xe(h, "x", n()), xe(h, "y", r()), xe(h, "rx", s()), xe(h, "ry", s()), xe(h, "width", o()), xe(h, "height", i()), xe(h, "shape-rendering", l()), y = ft(h, "", y, w);
    },
    [
      () => ({ selected: g() }),
      () => ({
        fill: a(),
        stroke: u(),
        "stroke-width": d()
      })
    ]
  ), O(e, h), se({
    get x() {
      return n();
    },
    set x(k) {
      n(k), p();
    },
    get y() {
      return r();
    },
    set y(k) {
      r(k), p();
    },
    get width() {
      return o();
    },
    set width(k) {
      o(k), p();
    },
    get height() {
      return i();
    },
    set height(k) {
      i(k), p();
    },
    get borderRadius() {
      return s();
    },
    set borderRadius(k = 5) {
      s(k), p();
    },
    get color() {
      return a();
    },
    set color(k) {
      a(k), p();
    },
    get shapeRendering() {
      return l();
    },
    set shapeRendering(k) {
      l(k), p();
    },
    get strokeColor() {
      return u();
    },
    set strokeColor(k) {
      u(k), p();
    },
    get strokeWidth() {
      return d();
    },
    set strokeWidth(k = 2) {
      d(k), p();
    },
    get selected() {
      return g();
    },
    set selected(k) {
      g(k), p();
    },
    get class() {
      return f();
    },
    set class(k) {
      f(k), p();
    }
  });
}
ne(
  ju,
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
function im(e, t) {
  const n = Bp({
    domNode: e,
    panZoom: t.panZoom,
    getTransform: () => {
      const { viewport: o } = t.store;
      return [o.x, o.y, o.zoom];
    },
    getViewScale: t.getViewScale
  });
  n.update({
    translateExtent: t.translateExtent,
    width: t.width,
    height: t.height,
    inversePan: t.inversePan,
    zoomStep: t.zoomStep,
    pannable: t.pannable,
    zoomable: t.zoomable
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
const Ai = (e) => e instanceof Function ? e : () => e;
var sm = /* @__PURE__ */ me("<title> </title>"), am = /* @__PURE__ */ me('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), lm = /* @__PURE__ */ X('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function Gu(e, t) {
  ie(t, !0);
  let n = m(t, "position", 7, "bottom-right"), r = m(t, "ariaLabel", 7), o = m(t, "nodeStrokeColor", 7, "transparent"), i = m(t, "nodeColor", 7), s = m(t, "nodeClass", 7, ""), a = m(t, "nodeBorderRadius", 7, 5), l = m(t, "nodeStrokeWidth", 7, 2), u = m(t, "bgColor", 7), d = m(t, "maskColor", 7), g = m(t, "maskStrokeColor", 7), f = m(t, "maskStrokeWidth", 7), h = m(t, "width", 7, 200), v = m(t, "height", 7, 150), y = m(t, "pannable", 7, !0), k = m(t, "zoomable", 7, !0), w = m(t, "inversePan", 7), T = m(t, "zoomStep", 7), x = m(t, "class", 7), b = /* @__PURE__ */ Le(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "position",
    "ariaLabel",
    "nodeStrokeColor",
    "nodeColor",
    "nodeClass",
    "nodeBorderRadius",
    "nodeStrokeWidth",
    "bgColor",
    "maskColor",
    "maskStrokeColor",
    "maskStrokeWidth",
    "width",
    "height",
    "pannable",
    "zoomable",
    "inversePan",
    "zoomStep",
    "class"
  ]), E = /* @__PURE__ */ N(Rt), M = /* @__PURE__ */ N(() => c(E).ariaLabelConfig);
  const L = i() === void 0 ? void 0 : Ai(i()), B = Ai(o()), Y = Ai(s()), U = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let $ = /* @__PURE__ */ N(() => `svelte-flow__minimap-desc-${c(E).flowId}`), S = /* @__PURE__ */ N(() => ({
    x: -c(E).viewport.x / c(E).viewport.zoom,
    y: -c(E).viewport.y / c(E).viewport.zoom,
    width: c(E).width / c(E).viewport.zoom,
    height: c(E).height / c(E).viewport.zoom
  })), A = /* @__PURE__ */ N(() => c(E).nodeLookup.size > 0 ? Zc(ao(c(E).nodeLookup, { filter: (j) => !j.hidden }), c(S)) : c(S)), _ = /* @__PURE__ */ N(() => c(A).width / h()), P = /* @__PURE__ */ N(() => c(A).height / v()), C = /* @__PURE__ */ N(() => Math.max(c(_), c(P))), H = /* @__PURE__ */ N(() => c(C) * h()), R = /* @__PURE__ */ N(() => c(C) * v()), D = /* @__PURE__ */ N(() => 5 * c(C)), K = /* @__PURE__ */ N(() => c(A).x - (c(H) - c(A).width) / 2 - c(D)), F = /* @__PURE__ */ N(() => c(A).y - (c(R) - c(A).height) / 2 - c(D)), W = /* @__PURE__ */ N(() => c(H) + c(D) * 2), Q = /* @__PURE__ */ N(() => c(R) + c(D) * 2);
  const G = () => c(C);
  var J = lm(), ue = le(J);
  const re = /* @__PURE__ */ N(() => ["svelte-flow__minimap", x()]);
  return Uf(ue, () => ({ "--xy-minimap-background-color-props": u() })), uo(ue.lastChild, Ie(
    {
      get position() {
        return n();
      },
      get class() {
        return c(re);
      },
      "data-testid": "svelte-flow__minimap"
    },
    () => b,
    {
      children: (j, _e) => {
        var ve = Me(), ee = le(ve);
        {
          var ae = (de) => {
            var te = am();
            let ge;
            var ce = z(te);
            {
              var pe = (Ve) => {
                var fe = sm(), Se = z(fe, !0);
                I(fe), ke(() => {
                  xe(fe, "id", c($)), $e(Se, r() ?? c(M)["minimap.ariaLabel"]);
                }), O(Ve, fe);
              };
              oe(ce, (Ve) => {
                (r() ?? c(M)["minimap.ariaLabel"]) && Ve(pe);
              });
            }
            var q = V(ce);
            lt(q, 17, () => c(E).nodes, (Ve) => Ve.id, (Ve, fe) => {
              var Se = Me();
              const be = /* @__PURE__ */ N(() => c(E).nodeLookup.get(c(fe).id));
              var Ze = le(Se);
              {
                var wt = (Ge) => {
                  const ze = /* @__PURE__ */ N(() => zn(c(be))), Ye = /* @__PURE__ */ N(() => L?.(c(be))), he = /* @__PURE__ */ N(() => B(c(be))), Be = /* @__PURE__ */ N(() => Y(c(be)));
                  ju(Ge, Ie(
                    {
                      get x() {
                        return c(be).internals.positionAbsolute.x;
                      },
                      get y() {
                        return c(be).internals.positionAbsolute.y;
                      }
                    },
                    () => c(ze),
                    {
                      get selected() {
                        return c(be).selected;
                      },
                      get color() {
                        return c(Ye);
                      },
                      get borderRadius() {
                        return a();
                      },
                      get strokeColor() {
                        return c(he);
                      },
                      get strokeWidth() {
                        return l();
                      },
                      get shapeRendering() {
                        return U;
                      },
                      get class() {
                        return c(Be);
                      }
                    }
                  ));
                };
                oe(Ze, (Ge) => {
                  c(be) && Yc(c(be)) && Ge(wt);
                });
              }
              O(Ve, Se);
            });
            var Fe = V(q);
            I(te), st(te, (Ve, fe) => im?.(Ve, fe), () => ({
              store: c(E),
              panZoom: c(E).panZoom,
              getViewScale: G,
              translateExtent: c(E).translateExtent,
              width: c(E).width,
              height: c(E).height,
              inversePan: w(),
              zoomStep: T(),
              pannable: y(),
              zoomable: k()
            })), ke(
              (Ve) => {
                xe(te, "width", h()), xe(te, "height", v()), xe(te, "viewBox", `${c(K) ?? ""} ${c(F) ?? ""} ${c(W) ?? ""} ${c(Q) ?? ""}`), xe(te, "aria-labelledby", c($)), ge = ft(te, "", ge, Ve), xe(Fe, "d", `M${c(K) - c(D)},${c(F) - c(D)}h${c(W) + c(D) * 2}v${c(Q) + c(D) * 2}h${-c(W) - c(D) * 2}z
      M${c(S).x ?? ""},${c(S).y ?? ""}h${c(S).width ?? ""}v${c(S).height ?? ""}h${-c(S).width}z`);
              },
              [
                () => ({
                  "--xy-minimap-mask-background-color-props": d(),
                  "--xy-minimap-mask-stroke-color-props": g(),
                  "--xy-minimap-mask-stroke-width-props": f() ? f() * c(C) : void 0
                })
              ]
            ), O(de, te);
          };
          oe(ee, (de) => {
            c(E).panZoom && de(ae);
          });
        }
        O(j, ve);
      },
      $$slots: { default: !0 }
    }
  )), I(ue), O(e, J), se({
    get position() {
      return n();
    },
    set position(j = "bottom-right") {
      n(j), p();
    },
    get ariaLabel() {
      return r();
    },
    set ariaLabel(j) {
      r(j), p();
    },
    get nodeStrokeColor() {
      return o();
    },
    set nodeStrokeColor(j = "transparent") {
      o(j), p();
    },
    get nodeColor() {
      return i();
    },
    set nodeColor(j) {
      i(j), p();
    },
    get nodeClass() {
      return s();
    },
    set nodeClass(j = "") {
      s(j), p();
    },
    get nodeBorderRadius() {
      return a();
    },
    set nodeBorderRadius(j = 5) {
      a(j), p();
    },
    get nodeStrokeWidth() {
      return l();
    },
    set nodeStrokeWidth(j = 2) {
      l(j), p();
    },
    get bgColor() {
      return u();
    },
    set bgColor(j) {
      u(j), p();
    },
    get maskColor() {
      return d();
    },
    set maskColor(j) {
      d(j), p();
    },
    get maskStrokeColor() {
      return g();
    },
    set maskStrokeColor(j) {
      g(j), p();
    },
    get maskStrokeWidth() {
      return f();
    },
    set maskStrokeWidth(j) {
      f(j), p();
    },
    get width() {
      return h();
    },
    set width(j = 200) {
      h(j), p();
    },
    get height() {
      return v();
    },
    set height(j = 150) {
      v(j), p();
    },
    get pannable() {
      return y();
    },
    set pannable(j = !0) {
      y(j), p();
    },
    get zoomable() {
      return k();
    },
    set zoomable(j = !0) {
      k(j), p();
    },
    get inversePan() {
      return w();
    },
    set inversePan(j) {
      w(j), p();
    },
    get zoomStep() {
      return T();
    },
    set zoomStep(j) {
      T(j), p();
    },
    get class() {
      return x();
    },
    set class(j) {
      x(j), p();
    }
  });
}
ne(
  Gu,
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
    class: {}
  },
  [],
  [],
  !0
);
var cm = /* @__PURE__ */ X("<div><!></div>");
function Uu(e, t) {
  ie(t, !0);
  let n = m(t, "nodeId", 7), r = m(t, "position", 23, () => we.Top), o = m(t, "align", 7, "center"), i = m(t, "offset", 7, 10), s = m(t, "isVisible", 7), a = m(t, "children", 7), l = /* @__PURE__ */ Le(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "nodeId",
    "position",
    "align",
    "offset",
    "isVisible",
    "children"
  ]);
  const u = Rt(), { getNodesBounds: d } = ot(), g = Dn("svelteflow__node_id");
  let f = /* @__PURE__ */ N(() => (u.nodes, (Array.isArray(n()) ? n() : [n() ?? g]).reduce(
    (E, M) => {
      const L = u.nodeLookup.get(M);
      return L && E.push(L), E;
    },
    []
  ))), h = /* @__PURE__ */ N(() => {
    const b = d(c(f));
    return b ? Cp(b, u.viewport, r(), i(), o()) : "";
  }), v = /* @__PURE__ */ N(() => c(f).length === 0 ? 1 : Math.max(...c(f).map((b) => (b.internals.z || 5) + 1))), y = /* @__PURE__ */ N(() => u.nodes.filter((b) => b.selected).length), k = /* @__PURE__ */ N(() => typeof s() == "boolean" ? s() : c(f).length === 1 && c(f)[0].selected && c(y) === 1);
  var w = Me(), T = le(w);
  {
    var x = (b) => {
      var E = cm();
      et(
        E,
        (L, B) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": L,
          ...l,
          [Zt]: B
        }),
        [
          () => c(f).reduce((L, B) => `${L}${B.id} `, "").trim(),
          () => ({
            display: fu().value ? "none" : void 0,
            position: "absolute",
            transform: c(h),
            "z-index": c(v)
          })
        ]
      );
      var M = z(E);
      Xe(M, () => a() ?? rt), I(E), st(E, (L, B) => du?.(L, B), () => "root"), O(b, E);
    };
    oe(T, (b) => {
      u.domNode && c(k) && c(f) && b(x);
    });
  }
  return O(e, w), se({
    get nodeId() {
      return n();
    },
    set nodeId(b) {
      n(b), p();
    },
    get position() {
      return r();
    },
    set position(b = we.Top) {
      r(b), p();
    },
    get align() {
      return o();
    },
    set align(b = "center") {
      o(b), p();
    },
    get offset() {
      return i();
    },
    set offset(b = 10) {
      i(b), p();
    },
    get isVisible() {
      return s();
    },
    set isVisible(b) {
      s(b), p();
    },
    get children() {
      return a();
    },
    set children(b) {
      a(b), p();
    }
  });
}
ne(
  Uu,
  {
    nodeId: {},
    position: {},
    align: {},
    offset: {},
    isVisible: {},
    children: {}
  },
  [],
  [],
  !0
);
function bn(e) {
  const t = /* @__PURE__ */ N(Rt), n = /* @__PURE__ */ N(() => c(t).nodes), r = /* @__PURE__ */ N(() => c(t).nodeLookup);
  let o = [], i = !0;
  const s = /* @__PURE__ */ N(() => {
    c(n);
    const a = [], l = Array.isArray(e), u = l ? e : [e];
    for (const d of u) {
      const g = c(r).get(d)?.internals.userNode;
      g && a.push({ id: g.id, type: g.type, data: g.data });
    }
    return (!Op(a, o) || i) && (o = a, i = !1), l ? o : o[0] ?? null;
  });
  return {
    get current() {
      return c(s);
    }
  };
}
const al = "tinyflow-component";
class Qw {
  options;
  rootEl;
  svelteFlowInstance;
  constructor(t) {
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
    const t = document.createElement(al);
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
    const n = document.createElement(al);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const um = () => {
  let e = /* @__PURE__ */ Ne([]), t = /* @__PURE__ */ Ne([]), n = /* @__PURE__ */ Ne({ x: 250, y: 100, zoom: 1 });
  return {
    // nodes: nodesInternal,
    // edges: edgesInternal,
    // viewport,
    init: (r, o) => {
      Z(e, r), Z(t, o);
    },
    getNodes: () => c(e),
    setNodes: (r) => {
      Z(e, r);
    },
    getEdges: () => c(t),
    setEdges: (r) => {
      Z(t, r);
    },
    getViewport: () => c(n),
    setViewport: (r) => {
      Z(n, r);
    },
    getNode: (r) => c(e).find((o) => o.id === r),
    addNode: (r) => {
      Z(e, [...c(e), r]);
    },
    removeNode: (r) => {
      Z(e, c(e).filter((o) => o.id !== r));
    },
    updateNode: (r, o) => {
      Z(e, c(e).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateNodes: (r) => {
      Z(e, r(c(e)));
    },
    updateNodeData: (r, o) => {
      Z(e, c(e).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    },
    selectNodeOnly: (r) => {
      Z(e, c(e).map((o) => o.id === r ? { ...o, selected: !0 } : { ...o, selected: !1 }));
    },
    getEdge: (r) => c(t).find((o) => o.id === r),
    addEdge: (r) => {
      Z(t, [...c(t), r]);
    },
    removeEdge: (r) => {
      Z(t, c(t).filter((o) => o.id !== r));
    },
    updateEdge: (r, o) => {
      Z(t, c(t).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateEdges: (r) => {
      Z(t, r(c(t)));
    },
    updateEdgeData: (r, o) => {
      Z(t, c(t).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    }
  };
}, qe = um();
var dm = /* @__PURE__ */ X("<button><!></button>");
function Te(e, t) {
  ie(t, !0);
  const n = m(t, "children", 7), r = m(t, "primary", 7), o = /* @__PURE__ */ Le(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children",
    "primary"
  ]);
  var i = dm();
  et(i, () => ({
    type: "button",
    ...o,
    class: `tf-btn ${r() ? "tf-btn-primary" : ""} nopan nodrag ${t.class ?? ""}`
  }));
  var s = z(i);
  return Xe(s, () => n() ?? rt), I(i), O(e, i), se({
    get children() {
      return n();
    },
    set children(a) {
      n(a), p();
    },
    get primary() {
      return r();
    },
    set primary(a) {
      r(a), p();
    }
  });
}
ne(Te, { children: {}, primary: {} }, [], [], !0);
var fm = /* @__PURE__ */ X("<input/>");
function Ju(e, t) {
  ie(t, !0);
  const n = /* @__PURE__ */ Le(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = fm();
  Xt(r), et(r, () => ({
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), O(e, r), se();
}
ne(Ju, {}, [], [], !0);
var gm = /* @__PURE__ */ X('<div><input type="hidden"/> <!> <!></div>');
const hm = {
  hash: "svelte-1swt2gg",
  code: ".tf-chosen.svelte-1swt2gg {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function Qu(e, t) {
  ie(t, !0), Oe(e, hm);
  const n = m(t, "placeholder", 7), r = m(t, "label", 7), o = m(t, "value", 7), i = m(t, "buttonText", 7, "选择..."), s = m(t, "onChosen", 7), a = /* @__PURE__ */ Le(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "placeholder",
    "label",
    "value",
    "buttonText",
    "onChosen"
  ]);
  var l = gm();
  et(
    l,
    () => ({
      ...a,
      class: `tf-chosen nopan nodrag ${t.class ?? ""}`
    }),
    void 0,
    "svelte-1swt2gg"
  );
  var u = z(l);
  Xt(u);
  var d = V(u, 2);
  Je(d, {
    get value() {
      return r();
    },
    get placeholder() {
      return n();
    },
    style: "flex-grow: 1;",
    disabled: !0
  });
  var g = V(d, 2);
  return Te(g, {
    onclick: (f) => {
      s()?.(o(), r(), f);
    },
    style: "padding: 3px",
    children: (f, h) => {
      ye();
      var v = Ee();
      ke(() => $e(v, i())), O(f, v);
    },
    $$slots: { default: !0 }
  }), I(l), ke(() => Eo(u, o())), O(e, l), se({
    get placeholder() {
      return n();
    },
    set placeholder(f) {
      n(f), p();
    },
    get label() {
      return r();
    },
    set label(f) {
      r(f), p();
    },
    get value() {
      return o();
    },
    set value(f) {
      o(f), p();
    },
    get buttonText() {
      return i();
    },
    set buttonText(f = "选择...") {
      i(f), p();
    },
    get onChosen() {
      return s();
    },
    set onChosen(f) {
      s(f), p();
    }
  });
}
ne(
  Qu,
  {
    placeholder: {},
    label: {},
    value: {},
    buttonText: {},
    onChosen: {}
  },
  [],
  [],
  !0
);
var vm = /* @__PURE__ */ X("<input/>");
function Je(e, t) {
  ie(t, !0);
  const n = /* @__PURE__ */ Le(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = vm();
  Xt(r), et(r, () => ({
    type: "text",
    spellcheck: "false",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), O(e, r), se();
}
ne(Je, {}, [], [], !0);
var pm = /* @__PURE__ */ X("<textarea></textarea>");
function Ke(e, t) {
  ie(t, !0);
  const n = m(t, "value", 7), r = /* @__PURE__ */ Le(t, ["$$slots", "$$events", "$$legacy", "$$host", "value"]);
  var o = pm();
  return Hf(o), et(o, () => ({
    spellcheck: "false",
    ...r,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), O(e, o), se({
    get value() {
      return n();
    },
    set value(i) {
      n(i), p();
    }
  });
}
ne(Ke, { value: {} }, [], [], !0);
var mm = /* @__PURE__ */ X('<div role="button"><!></div>'), ym = /* @__PURE__ */ X("<div></div>");
function ed(e, t) {
  const n = ba(t, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = ba(n, ["items", "onChange", "activeIndex"]);
  ie(t, !1);
  let o = m(t, "items", 28, () => []), i = m(t, "onChange", 12, () => {
  }), s = m(t, "activeIndex", 12, 0);
  function a(u, d) {
    s(d), i()?.(u, d);
  }
  cc();
  var l = ym();
  return et(l, () => ({
    ...r,
    class: `tf-tabs ${Ss(r), nt(() => r.class) ?? ""}`
  })), lt(l, 5, o, hr, (u, d, g) => {
    var f = mm();
    xe(f, "tabindex", g), f.__click = () => a(c(d), g), f.__keydown = (k) => {
      (k.key === "Enter" || k.key === " ") && (k.preventDefault(), a(c(d), g));
    };
    var h = z(f);
    {
      var v = (k) => {
        var w = Ee();
        ke(() => $e(w, (c(d), nt(() => c(d).label)))), O(k, w);
      }, y = (k) => {
        var w = Me(), T = le(w);
        Xe(T, () => (c(d), nt(() => c(d).label) ?? rt)), O(k, w);
      };
      oe(h, (k) => {
        c(d), nt(() => typeof c(d).label == "string") ? k(v) : k(y, !1);
      });
    }
    I(f), ke(() => yt(f, 1, `tf-tabs-item ${g === s() ? "active" : ""}`)), O(u, f);
  }), I(l), O(e, l), se({
    get items() {
      return o();
    },
    set items(u) {
      o(u), p();
    },
    get onChange() {
      return i();
    },
    set onChange(u) {
      i(u), p();
    },
    get activeIndex() {
      return s();
    },
    set activeIndex(u) {
      s(u), p();
    }
  });
}
_n(["click", "keydown"]);
ne(ed, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var wm = (e, t, n) => t(c(n)), _m = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(c(n)));
}, xm = /* @__PURE__ */ X('<span class="tf-collapse-item-title-icon"><!></span>'), bm = /* @__PURE__ */ X('<div class="tf-collapse-item-description"><!></div>'), Cm = /* @__PURE__ */ X('<div class="tf-collapse-item-content"><!></div>'), km = /* @__PURE__ */ X('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), Em = /* @__PURE__ */ X("<div></div>");
const Sm = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function td(e, t) {
  ie(t, !0), Oe(e, Sm);
  let n = m(t, "items", 7), r = m(t, "onChange", 7), o = m(t, "activeKeys", 31, () => Mt([]));
  function i(a) {
    o().includes(a.key) ? o(o().filter((l) => l !== a.key)) : (o().push(a.key), o(o())), r()?.(a, o());
  }
  var s = Em();
  return lt(s, 21, n, hr, (a, l, u) => {
    var d = km(), g = z(d);
    xe(g, "tabindex", u), g.__click = [wm, i, l], g.__keydown = [_m, i, l];
    var f = z(g);
    {
      var h = (b) => {
        var E = xm(), M = z(E);
        Pn(M, {
          get target() {
            return c(l).icon;
          }
        }), I(E), O(b, E);
      };
      oe(f, (b) => {
        c(l).icon && b(h);
      });
    }
    var v = V(f, 2);
    Pn(v, {
      get target() {
        return c(l).title;
      }
    });
    var y = V(v, 2);
    I(g);
    var k = V(g, 2);
    {
      var w = (b) => {
        var E = bm(), M = z(E);
        Pn(M, {
          get target() {
            return c(l).description;
          }
        }), I(E), O(b, E);
      };
      oe(k, (b) => {
        c(l).description && b(w);
      });
    }
    var T = V(k, 2);
    {
      var x = (b) => {
        var E = Cm(), M = z(E);
        Pn(M, {
          get target() {
            return c(l).content;
          }
        }), I(E), O(b, E);
      };
      oe(T, (b) => {
        o().includes(c(l).key) && b(x);
      });
    }
    I(d), ke((b) => yt(y, 1, `tf-collapse-item-title-arrow ${b ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(c(l).key) ? "rotate-90" : ""
    ]), O(a, d);
  }), I(s), ke(() => {
    ft(s, t.style), yt(s, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), O(e, s), se({
    get items() {
      return n();
    },
    set items(a) {
      n(a), p();
    },
    get onChange() {
      return r();
    },
    set onChange(a) {
      r(a), p();
    },
    get activeKeys() {
      return o();
    },
    set activeKeys(a = []) {
      o(a), p();
    }
  });
}
_n(["click", "keydown"]);
ne(td, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Pn(e, t) {
  ie(t, !0);
  let n = m(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = Me(), o = le(r);
  {
    var i = (a) => {
      var l = Me(), u = le(l);
      Xe(u, () => n() ?? rt), O(a, l);
    }, s = (a) => {
      var l = Me(), u = le(l);
      Ts(u, n), O(a, l);
    };
    oe(o, (a) => {
      typeof n() == "function" ? a(i) : a(s, !1);
    });
  }
  return O(e, r), se({
    get target() {
      return n();
    },
    set target(a) {
      n(a), p();
    }
  });
}
ne(Pn, { target: {} }, [], [], !0);
var Nm = (e, t, n) => t(c(n)), Pm = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), Tm = /* @__PURE__ */ X('<div class="tf-select-content-children"><!></div>'), Dm = /* @__PURE__ */ X('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), Am = /* @__PURE__ */ X('<div class="tf-select-content nopan nodrag"><!></div>'), Mm = /* @__PURE__ */ X("<!> <!>", 1), Om = /* @__PURE__ */ X('<div class="tf-select-input-placeholder"> </div>'), Vm = /* @__PURE__ */ X('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), Hm = /* @__PURE__ */ X("<div><!></div>");
function dt(e, t) {
  ie(t, !0);
  const n = (w, T = rt) => {
    var x = Me(), b = le(x);
    lt(b, 19, T, (E, M) => `${M}_${E.value}`, (E, M) => {
      var L = Dm(), B = le(L);
      B.__click = [Nm, v, M];
      var Y = z(B), U = z(Y);
      {
        var $ = (P) => {
          var C = Pm();
          O(P, C);
        };
        oe(U, (P) => {
          c(M).children && c(M).children.length > 0 && P($);
        });
      }
      I(Y);
      var S = V(Y, 2);
      Pn(S, {
        get target() {
          return c(M).label;
        }
      }), I(B);
      var A = V(B, 2);
      {
        var _ = (P) => {
          var C = Tm(), H = z(C);
          n(H, () => c(M).children), I(C), O(P, C);
        };
        oe(A, (P) => {
          c(M).children && c(M).children.length > 0 && (a() || u().includes(c(M).value)) && P(_);
        });
      }
      O(E, L);
    }), O(w, x);
  };
  let r = m(t, "items", 7), o = m(t, "onSelect", 7), i = m(t, "value", 23, () => []), s = m(t, "defaultValue", 23, () => []), a = m(t, "expandAll", 7, !0), l = m(t, "multiple", 7, !1), u = m(t, "expandValue", 23, () => []), d = m(t, "placeholder", 7), g = /* @__PURE__ */ Le(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "items",
    "onSelect",
    "value",
    "defaultValue",
    "expandAll",
    "multiple",
    "expandValue",
    "placeholder"
  ]), f = /* @__PURE__ */ N(() => {
    const w = [], T = (x) => {
      for (let b of x)
        i().length > 0 ? i().includes(b.value) && w.push(b) : s().includes(b.value) && w.push(b), b.children && b.children.length > 0 && T(b.children);
    };
    return T(r()), w;
  }), h;
  function v(w) {
    h?.hide(), o()?.(w);
  }
  var y = Hm();
  et(y, () => ({ ...g, class: `tf-select ${g.class ?? ""}` }));
  var k = z(y);
  return Nt(
    nr(k, {
      floating: (T) => {
        var x = Am(), b = z(x);
        n(b, r), I(x), O(T, x);
      },
      children: (T, x) => {
        var b = Vm();
        et(b, () => ({ class: "tf-select-input nopan nodrag", ...g }));
        var E = z(b);
        lt(
          E,
          23,
          () => c(f),
          (M, L) => `${L}_${M.value}`,
          (M, L, B) => {
            var Y = Me(), U = le(Y);
            {
              var $ = (A) => {
                var _ = Me(), P = le(_);
                {
                  var C = (H) => {
                    Pn(H, {
                      get target() {
                        return c(L).label;
                      }
                    });
                  };
                  oe(P, (H) => {
                    c(B) === 0 && H(C);
                  });
                }
                O(A, _);
              }, S = (A) => {
                var _ = Mm(), P = le(_);
                Pn(P, {
                  get target() {
                    return c(L).label;
                  }
                });
                var C = V(P, 2);
                {
                  var H = (R) => {
                    var D = Ee(",");
                    O(R, D);
                  };
                  oe(C, (R) => {
                    c(B) < c(f).length - 1 && R(H);
                  });
                }
                O(A, _);
              };
              oe(U, (A) => {
                l() ? A(S, !1) : A($);
              });
            }
            O(M, Y);
          },
          (M) => {
            var L = Om(), B = z(L, !0);
            I(L), ke(() => $e(B, d())), O(M, L);
          }
        ), I(E), ye(2), I(b), O(T, b);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => h = T,
    () => h
  ), I(y), O(e, y), se({
    get items() {
      return r();
    },
    set items(w) {
      r(w), p();
    },
    get onSelect() {
      return o();
    },
    set onSelect(w) {
      o(w), p();
    },
    get value() {
      return i();
    },
    set value(w = []) {
      i(w), p();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue(w = []) {
      s(w), p();
    },
    get expandAll() {
      return a();
    },
    set expandAll(w = !0) {
      a(w), p();
    },
    get multiple() {
      return l();
    },
    set multiple(w = !1) {
      l(w), p();
    },
    get expandValue() {
      return u();
    },
    set expandValue(w = []) {
      u(w), p();
    },
    get placeholder() {
      return d();
    },
    set placeholder(w) {
      d(w), p();
    }
  });
}
_n(["click"]);
ne(
  dt,
  {
    items: {},
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
const jr = Math.min, cr = Math.max, Go = Math.round, Ut = (e) => ({
  x: e,
  y: e
}), Lm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, $m = {
  start: "end",
  end: "start"
};
function ns(e, t, n) {
  return cr(e, jr(t, n));
}
function fo(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Jn(e) {
  return e.split("-")[0];
}
function go(e) {
  return e.split("-")[1];
}
function nd(e) {
  return e === "x" ? "y" : "x";
}
function js(e) {
  return e === "y" ? "height" : "width";
}
const Im = /* @__PURE__ */ new Set(["top", "bottom"]);
function Tn(e) {
  return Im.has(Jn(e)) ? "y" : "x";
}
function Gs(e) {
  return nd(Tn(e));
}
function zm(e, t, n) {
  n === void 0 && (n = !1);
  const r = go(e), o = Gs(e), i = js(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Uo(s)), [s, Uo(s)];
}
function Rm(e) {
  const t = Uo(e);
  return [rs(e), t, rs(t)];
}
function rs(e) {
  return e.replace(/start|end/g, (t) => $m[t]);
}
const ll = ["left", "right"], cl = ["right", "left"], Bm = ["top", "bottom"], qm = ["bottom", "top"];
function Km(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? cl : ll : t ? ll : cl;
    case "left":
    case "right":
      return t ? Bm : qm;
    default:
      return [];
  }
}
function Fm(e, t, n, r) {
  const o = go(e);
  let i = Km(Jn(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(rs)))), i;
}
function Uo(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Lm[t]);
}
function Zm(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function rd(e) {
  return typeof e != "number" ? Zm(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Jo(e) {
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
function ul(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Tn(t), s = Gs(t), a = js(s), l = Jn(t), u = i === "y", d = r.x + r.width / 2 - o.width / 2, g = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
  let h;
  switch (l) {
    case "top":
      h = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: g
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: g
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (go(t)) {
    case "start":
      h[s] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      h[s] += f * (n && u ? -1 : 1);
      break;
  }
  return h;
}
const Ym = async (e, t, n) => {
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
    x: d,
    y: g
  } = ul(u, r, l), f = r, h = {}, v = 0;
  for (let y = 0; y < a.length; y++) {
    const {
      name: k,
      fn: w
    } = a[y], {
      x: T,
      y: x,
      data: b,
      reset: E
    } = await w({
      x: d,
      y: g,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: h,
      rects: u,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = T ?? d, g = x ?? g, h = {
      ...h,
      [k]: {
        ...h[k],
        ...b
      }
    }, E && v <= 50 && (v++, typeof E == "object" && (E.placement && (f = E.placement), E.rects && (u = E.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : E.rects), {
      x: d,
      y: g
    } = ul(u, f, l)), y = -1);
  }
  return {
    x: d,
    y: g,
    placement: f,
    strategy: o,
    middlewareData: h
  };
};
async function od(e, t) {
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
    rootBoundary: d = "viewport",
    elementContext: g = "floating",
    altBoundary: f = !1,
    padding: h = 0
  } = fo(t, e), v = rd(h), k = a[f ? g === "floating" ? "reference" : "floating" : g], w = Jo(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(k))) == null || n ? k : k.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: l
  })), T = g === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, x = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), b = await (i.isElement == null ? void 0 : i.isElement(x)) ? await (i.getScale == null ? void 0 : i.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, E = Jo(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: T,
    offsetParent: x,
    strategy: l
  }) : T);
  return {
    top: (w.top - E.top + v.top) / b.y,
    bottom: (E.bottom - w.bottom + v.bottom) / b.y,
    left: (w.left - E.left + v.left) / b.x,
    right: (E.right - w.right + v.right) / b.x
  };
}
const Wm = (e) => ({
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
      padding: d = 0
    } = fo(e, t) || {};
    if (u == null)
      return {};
    const g = rd(d), f = {
      x: n,
      y: r
    }, h = Gs(o), v = js(h), y = await s.getDimensions(u), k = h === "y", w = k ? "top" : "left", T = k ? "bottom" : "right", x = k ? "clientHeight" : "clientWidth", b = i.reference[v] + i.reference[h] - f[h] - i.floating[v], E = f[h] - i.reference[h], M = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let L = M ? M[x] : 0;
    (!L || !await (s.isElement == null ? void 0 : s.isElement(M))) && (L = a.floating[x] || i.floating[v]);
    const B = b / 2 - E / 2, Y = L / 2 - y[v] / 2 - 1, U = jr(g[w], Y), $ = jr(g[T], Y), S = U, A = L - y[v] - $, _ = L / 2 - y[v] / 2 + B, P = ns(S, _, A), C = !l.arrow && go(o) != null && _ !== P && i.reference[v] / 2 - (_ < S ? U : $) - y[v] / 2 < 0, H = C ? _ < S ? _ - S : _ - A : 0;
    return {
      [h]: f[h] + H,
      data: {
        [h]: P,
        centerOffset: _ - P - H,
        ...C && {
          alignmentOffset: H
        }
      },
      reset: C
    };
  }
}), Xm = function(e) {
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
        mainAxis: d = !0,
        crossAxis: g = !0,
        fallbackPlacements: f,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: y = !0,
        ...k
      } = fo(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const w = Jn(o), T = Tn(a), x = Jn(a) === a, b = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), E = f || (x || !y ? [Uo(a)] : Rm(a)), M = v !== "none";
      !f && M && E.push(...Fm(a, y, v, b));
      const L = [a, ...E], B = await od(t, k), Y = [];
      let U = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && Y.push(B[w]), g) {
        const _ = zm(o, s, b);
        Y.push(B[_[0]], B[_[1]]);
      }
      if (U = [...U, {
        placement: o,
        overflows: Y
      }], !Y.every((_) => _ <= 0)) {
        var $, S;
        const _ = ((($ = i.flip) == null ? void 0 : $.index) || 0) + 1, P = L[_];
        if (P && (!(g === "alignment" ? T !== Tn(P) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        U.every((R) => R.overflows[0] > 0 && Tn(R.placement) === T)))
          return {
            data: {
              index: _,
              overflows: U
            },
            reset: {
              placement: P
            }
          };
        let C = (S = U.filter((H) => H.overflows[0] <= 0).sort((H, R) => H.overflows[1] - R.overflows[1])[0]) == null ? void 0 : S.placement;
        if (!C)
          switch (h) {
            case "bestFit": {
              var A;
              const H = (A = U.filter((R) => {
                if (M) {
                  const D = Tn(R.placement);
                  return D === T || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  D === "y";
                }
                return !0;
              }).map((R) => [R.placement, R.overflows.filter((D) => D > 0).reduce((D, K) => D + K, 0)]).sort((R, D) => R[1] - D[1])[0]) == null ? void 0 : A[0];
              H && (C = H);
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
}, jm = /* @__PURE__ */ new Set(["left", "top"]);
async function Gm(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Jn(n), a = go(n), l = Tn(n) === "y", u = jm.has(s) ? -1 : 1, d = i && l ? -1 : 1, g = fo(t, e);
  let {
    mainAxis: f,
    crossAxis: h,
    alignmentAxis: v
  } = typeof g == "number" ? {
    mainAxis: g,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: g.mainAxis || 0,
    crossAxis: g.crossAxis || 0,
    alignmentAxis: g.alignmentAxis
  };
  return a && typeof v == "number" && (h = a === "end" ? v * -1 : v), l ? {
    x: h * d,
    y: f * u
  } : {
    x: f * u,
    y: h * d
  };
}
const Um = function(e) {
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
      } = t, l = await Gm(t, e);
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
}, Jm = function(e) {
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
              x: w,
              y: T
            } = k;
            return {
              x: w,
              y: T
            };
          }
        },
        ...l
      } = fo(e, t), u = {
        x: n,
        y: r
      }, d = await od(t, l), g = Tn(Jn(o)), f = nd(g);
      let h = u[f], v = u[g];
      if (i) {
        const k = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", T = h + d[k], x = h - d[w];
        h = ns(T, h, x);
      }
      if (s) {
        const k = g === "y" ? "top" : "left", w = g === "y" ? "bottom" : "right", T = v + d[k], x = v - d[w];
        v = ns(T, v, x);
      }
      const y = a.fn({
        ...t,
        [f]: h,
        [g]: v
      });
      return {
        ...y,
        data: {
          x: y.x - n,
          y: y.y - r,
          enabled: {
            [f]: i,
            [g]: s
          }
        }
      };
    }
  };
};
function pi() {
  return typeof window < "u";
}
function Er(e) {
  return id(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function kt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Cn(e) {
  var t;
  return (t = (id(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function id(e) {
  return pi() ? e instanceof Node || e instanceof kt(e).Node : !1;
}
function $t(e) {
  return pi() ? e instanceof Element || e instanceof kt(e).Element : !1;
}
function tn(e) {
  return pi() ? e instanceof HTMLElement || e instanceof kt(e).HTMLElement : !1;
}
function dl(e) {
  return !pi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof kt(e).ShadowRoot;
}
const Qm = /* @__PURE__ */ new Set(["inline", "contents"]);
function ho(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = It(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Qm.has(o);
}
const e2 = /* @__PURE__ */ new Set(["table", "td", "th"]);
function t2(e) {
  return e2.has(Er(e));
}
const n2 = [":popover-open", ":modal"];
function mi(e) {
  return n2.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const r2 = ["transform", "translate", "scale", "rotate", "perspective"], o2 = ["transform", "translate", "scale", "rotate", "perspective", "filter"], i2 = ["paint", "layout", "strict", "content"];
function Us(e) {
  const t = Js(), n = $t(e) ? It(e) : e;
  return r2.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || o2.some((r) => (n.willChange || "").includes(r)) || i2.some((r) => (n.contain || "").includes(r));
}
function s2(e) {
  let t = Hn(e);
  for (; tn(t) && !xr(t); ) {
    if (Us(t))
      return t;
    if (mi(t))
      return null;
    t = Hn(t);
  }
  return null;
}
function Js() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const a2 = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function xr(e) {
  return a2.has(Er(e));
}
function It(e) {
  return kt(e).getComputedStyle(e);
}
function yi(e) {
  return $t(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Hn(e) {
  if (Er(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    dl(e) && e.host || // Fallback.
    Cn(e)
  );
  return dl(t) ? t.host : t;
}
function sd(e) {
  const t = Hn(e);
  return xr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : tn(t) && ho(t) ? t : sd(t);
}
function ad(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = sd(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = kt(o);
  return i ? (os(s), t.concat(s, s.visualViewport || [], ho(o) ? o : [], [])) : t.concat(o, ad(o, []));
}
function os(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ld(e) {
  const t = It(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = tn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = Go(n) !== i || Go(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function cd(e) {
  return $t(e) ? e : e.contextElement;
}
function ur(e) {
  const t = cd(e);
  if (!tn(t))
    return Ut(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = ld(t);
  let s = (i ? Go(n.width) : n.width) / r, a = (i ? Go(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const l2 = /* @__PURE__ */ Ut(0);
function ud(e) {
  const t = kt(e);
  return !Js() || !t.visualViewport ? l2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function c2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== kt(e) ? !1 : t;
}
function Gr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = cd(e);
  let s = Ut(1);
  t && (r ? $t(r) && (s = ur(r)) : s = ur(e));
  const a = c2(i, n, r) ? ud(i) : Ut(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, d = o.width / s.x, g = o.height / s.y;
  if (i) {
    const f = kt(i), h = r && $t(r) ? kt(r) : r;
    let v = f, y = os(v);
    for (; y && r && h !== v; ) {
      const k = ur(y), w = y.getBoundingClientRect(), T = It(y), x = w.left + (y.clientLeft + parseFloat(T.paddingLeft)) * k.x, b = w.top + (y.clientTop + parseFloat(T.paddingTop)) * k.y;
      l *= k.x, u *= k.y, d *= k.x, g *= k.y, l += x, u += b, v = kt(y), y = os(v);
    }
  }
  return Jo({
    width: d,
    height: g,
    x: l,
    y: u
  });
}
function Qs(e, t) {
  const n = yi(e).scrollLeft;
  return t ? t.left + n : Gr(Cn(e)).left + n;
}
function dd(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Qs(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function u2(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = Cn(r), a = t ? mi(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Ut(1);
  const d = Ut(0), g = tn(r);
  if ((g || !g && !i) && ((Er(r) !== "body" || ho(s)) && (l = yi(r)), tn(r))) {
    const h = Gr(r);
    u = ur(r), d.x = h.x + r.clientLeft, d.y = h.y + r.clientTop;
  }
  const f = s && !g && !i ? dd(s, l, !0) : Ut(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y + f.y
  };
}
function d2(e) {
  return Array.from(e.getClientRects());
}
function f2(e) {
  const t = Cn(e), n = yi(e), r = e.ownerDocument.body, o = cr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = cr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Qs(e);
  const a = -n.scrollTop;
  return It(r).direction === "rtl" && (s += cr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function g2(e, t) {
  const n = kt(e), r = Cn(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const u = Js();
    (!u || u && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const h2 = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function v2(e, t) {
  const n = Gr(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = tn(e) ? ur(e) : Ut(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function fl(e, t, n) {
  let r;
  if (t === "viewport")
    r = g2(e, n);
  else if (t === "document")
    r = f2(Cn(e));
  else if ($t(t))
    r = v2(t, n);
  else {
    const o = ud(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Jo(r);
}
function fd(e, t) {
  const n = Hn(e);
  return n === t || !$t(n) || xr(n) ? !1 : It(n).position === "fixed" || fd(n, t);
}
function p2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = ad(e, []).filter((a) => $t(a) && Er(a) !== "body"), o = null;
  const i = It(e).position === "fixed";
  let s = i ? Hn(e) : e;
  for (; $t(s) && !xr(s); ) {
    const a = It(s), l = Us(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && h2.has(o.position) || ho(s) && !l && fd(e, s)) ? r = r.filter((d) => d !== s) : o = a, s = Hn(s);
  }
  return t.set(e, r), r;
}
function m2(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? mi(t) ? [] : p2(t, this._c) : [].concat(n), r], a = s[0], l = s.reduce((u, d) => {
    const g = fl(t, d, o);
    return u.top = cr(g.top, u.top), u.right = jr(g.right, u.right), u.bottom = jr(g.bottom, u.bottom), u.left = cr(g.left, u.left), u;
  }, fl(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function y2(e) {
  const {
    width: t,
    height: n
  } = ld(e);
  return {
    width: t,
    height: n
  };
}
function w2(e, t, n) {
  const r = tn(t), o = Cn(t), i = n === "fixed", s = Gr(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Ut(0);
  function u() {
    l.x = Qs(o);
  }
  if (r || !r && !i)
    if ((Er(t) !== "body" || ho(o)) && (a = yi(t)), r) {
      const h = Gr(t, !0, i, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && u();
  i && !r && o && u();
  const d = o && !r && !i ? dd(o, a) : Ut(0), g = s.left + a.scrollLeft - l.x - d.x, f = s.top + a.scrollTop - l.y - d.y;
  return {
    x: g,
    y: f,
    width: s.width,
    height: s.height
  };
}
function Mi(e) {
  return It(e).position === "static";
}
function gl(e, t) {
  if (!tn(e) || It(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Cn(e) === n && (n = n.ownerDocument.body), n;
}
function gd(e, t) {
  const n = kt(e);
  if (mi(e))
    return n;
  if (!tn(e)) {
    let o = Hn(e);
    for (; o && !xr(o); ) {
      if ($t(o) && !Mi(o))
        return o;
      o = Hn(o);
    }
    return n;
  }
  let r = gl(e, t);
  for (; r && t2(r) && Mi(r); )
    r = gl(r, t);
  return r && xr(r) && Mi(r) && !Us(r) ? n : r || s2(e) || n;
}
const _2 = async function(e) {
  const t = this.getOffsetParent || gd, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: w2(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function x2(e) {
  return It(e).direction === "rtl";
}
const b2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: u2,
  getDocumentElement: Cn,
  getClippingRect: m2,
  getOffsetParent: gd,
  getElementRects: _2,
  getClientRects: d2,
  getDimensions: y2,
  getScale: ur,
  isElement: $t,
  isRTL: x2
}, C2 = Um, k2 = Jm, E2 = Xm, S2 = Wm, N2 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: b2,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return Ym(e, t, {
    ...o,
    platform: i
  });
}, P2 = ({
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
    const w = document.querySelector(e);
    if (w)
      e = w;
    else
      throw new Error("element not found by document.querySelector('" + e + "')");
  }
  let u;
  if (typeof n == "string") {
    const w = document.querySelector(n);
    if (w)
      u = w;
    else
      throw new Error("element not found by document.querySelector('" + n + "')");
  } else
    u = n;
  let d;
  l && (d = document.createElement("div"), d.style.position = "absolute", d.style.backgroundColor = "#222", d.style.width = "8px", d.style.height = "8px", d.style.transform = "rotate(45deg)", d.style.display = "none", u.firstElementChild.before(d));
  function g() {
    N2(e, u, {
      placement: r,
      middleware: [
        C2(o),
        // 手动偏移配置
        E2(i),
        //自动翻转
        k2(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [S2({ element: d })] : []
      ]
    }).then(({ x: w, y: T, placement: x, middlewareData: b }) => {
      if (Object.assign(u.style, {
        left: `${w}px`,
        top: `${T}px`
      }), l) {
        const { x: E, y: M } = b.arrow, L = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[x.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: E != null ? `${E}px` : "",
          top: M != null ? `${M}px` : "",
          right: "",
          bottom: "",
          [L]: "2px"
        });
      }
    });
  }
  let f = !1;
  function h() {
    u.style.display = "block", u.style.visibility = "block", u.style.position = "absolute", l && (d.style.display = "block"), f = !0, g();
  }
  function v() {
    u.style.display = "none", l && (d.style.display = "none"), f = !1;
  }
  function y(w) {
    w.stopPropagation(), f ? v() : h();
  }
  function k(w) {
    u.contains(w.target) || v();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((w) => {
    e.addEventListener(w, y);
  }), document.addEventListener("click", k), {
    destroy() {
      t.forEach((w) => {
        e.removeEventListener(w, y);
      }), document.removeEventListener("click", k);
    },
    hide() {
      v();
    },
    isVisible() {
      return f;
    }
  };
};
var T2 = /* @__PURE__ */ X('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function nr(e, t) {
  ie(t, !0);
  const n = m(t, "children", 7), r = m(t, "floating", 7), o = m(t, "placement", 7, "bottom");
  let i, s, a;
  In(() => (a = P2({
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
  var u = T2(), d = z(u), g = z(d);
  Xe(g, n), I(d), Nt(d, (v) => i = v, () => i);
  var f = V(d, 2), h = z(f);
  return Xe(h, r), I(f), Nt(f, (v) => s = v, () => s), I(u), O(e, u), se({
    hide: l,
    get children() {
      return n();
    },
    set children(v) {
      n(v), p();
    },
    get floating() {
      return r();
    },
    set floating(v) {
      r(v), p();
    },
    get placement() {
      return o();
    },
    set placement(v = "bottom") {
      o(v), p();
    }
  });
}
ne(nr, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function De(e, t) {
  ie(t, !0);
  const n = m(t, "children", 7), r = m(t, "level", 7, 1), o = m(t, "mt", 7), i = m(t, "mb", 7);
  var s = Me(), a = le(s);
  return tg(a, () => `h${r()}`, !1, (l, u) => {
    et(l, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var d = Me(), g = le(d);
    Xe(g, () => n() ?? rt), O(u, d);
  }), O(e, s), se({
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
ne(De, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var D2 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const A2 = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function vo(e, t) {
  ie(t, !0), Oe(e, A2);
  const n = /* @__PURE__ */ Le(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Te(e, Ie(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = D2();
      O(r, i);
    },
    $$slots: { default: !0 }
  })), se();
}
ne(vo, {}, [], [], !0);
const M2 = () => ({ deleteNode: (t) => {
  qe.removeNode(t), qe.updateEdges((n) => n.filter((r) => r.source !== t && r.target !== t));
} }), Qn = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, O2 = () => ({ copyNode: (t) => {
  const n = qe.getNode(t);
  if (n) {
    const r = Qn(), o = {
      ...n,
      id: r,
      position: { x: n.position.x + 50, y: n.position.y + 50 }
    };
    qe.updateNodes((i) => [...i.map((a) => ({ ...a, selected: !1 })), o]);
  }
} }), je = () => Dn("svelteflow__node_id"), Ln = () => Dn("tinyflow_options");
var V2 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), H2 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), L2 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), $2 = /* @__PURE__ */ X('<div class="input-item svelte-1jesvb7">执行条件： <!></div>'), I2 = (e, t, n) => {
  const r = e.target.checked;
  t(n, { async: r });
}, z2 = (e, t, n) => {
  const r = e.target.checked;
  t(n, { loopEnable: r });
}, R2 = /* @__PURE__ */ X('<div class="input-item svelte-1jesvb7">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-1jesvb7">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-1jesvb7">退出条件： <!></div>', 1), B2 = /* @__PURE__ */ X('<div class="settings svelte-1jesvb7"><div class="input-item svelte-1jesvb7">节点名称： <!></div> <div class="input-item svelte-1jesvb7">参数描述： <!></div> <!> <label class="input-item-inline svelte-1jesvb7"><span>异步执行：</span> <input type="checkbox"/></label> <label class="input-item-inline svelte-1jesvb7"><span>循环执行：</span> <input type="checkbox"/></label> <!></div>'), q2 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), K2 = /* @__PURE__ */ X('<div class="tf-node-toolbar svelte-1jesvb7"><!> <!> <!> <!></div>'), F2 = /* @__PURE__ */ X('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const Z2 = {
  hash: "svelte-1jesvb7",
  code: ".tf-node-toolbar.svelte-1jesvb7 {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-1jesvb7 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-1jesvb7 .input-item:where(.svelte-1jesvb7) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-1jesvb7 .input-item-inline:where(.svelte-1jesvb7) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function Ot(e, t) {
  ie(t, !0), Oe(e, Z2);
  const n = m(t, "data", 7), r = m(t, "id", 7, ""), o = m(t, "icon", 7), i = m(t, "handle", 7), s = m(t, "children", 7), a = m(t, "allowExecute", 7, !0), l = m(t, "allowCopy", 7, !0), u = m(t, "allowDelete", 7, !0), d = m(t, "allowSetting", 7, !0), g = m(t, "allowSettingOfCondition", 7, !0), f = m(t, "showSourceHandle", 7, !0), h = m(t, "showTargetHandle", 7, !0), v = m(t, "onCollapse", 7);
  let y = n().expand ? ["key"] : [];
  const { updateNodeData: k, getNode: w } = ot(), T = /* @__PURE__ */ N(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: x } = M2(), { copyNode: b } = O2(), E = Ln(), M = () => {
    E.onNodeExecute?.(w(r()));
  };
  let L = je();
  var B = F2(), Y = le(B);
  {
    var U = (D) => {
      Uu(D, {
        get position() {
          return we.Top;
        },
        align: "end",
        children: (K, F) => {
          var W = K2(), Q = z(W);
          {
            var G = (ee) => {
              Te(ee, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  x(r());
                },
                children: (ae, de) => {
                  var te = V2();
                  O(ae, te);
                },
                $$slots: { default: !0 }
              });
            };
            oe(Q, (ee) => {
              u() && ee(G);
            });
          }
          var J = V(Q, 2);
          {
            var ue = (ee) => {
              Te(ee, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  b(r());
                },
                children: (ae, de) => {
                  var te = H2();
                  O(ae, te);
                },
                $$slots: { default: !0 }
              });
            };
            oe(J, (ee) => {
              l() && ee(ue);
            });
          }
          var re = V(J, 2);
          {
            var j = (ee) => {
              Te(ee, {
                class: "tf-node-toolbar-item",
                onclick: M,
                children: (ae, de) => {
                  var te = L2();
                  O(ae, te);
                },
                $$slots: { default: !0 }
              });
            };
            oe(re, (ee) => {
              a() && ee(j);
            });
          }
          var _e = V(re, 2);
          {
            var ve = (ee) => {
              nr(ee, {
                placement: "bottom",
                floating: (de) => {
                  var te = B2(), ge = z(te), ce = V(z(ge));
                  Je(ce, {
                    style: "width: 100%;",
                    onchange: (ze) => {
                      const Ye = ze.target.value;
                      k(L, { title: Ye });
                    },
                    get value() {
                      return n().title;
                    }
                  }), I(ge);
                  var pe = V(ge, 2), q = V(z(pe));
                  Ke(q, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (ze) => {
                      const Ye = ze.target.value;
                      k(L, { description: Ye });
                    },
                    get value() {
                      return n().description;
                    }
                  }), I(pe);
                  var Fe = V(pe, 2);
                  {
                    var Ve = (ze) => {
                      var Ye = $2(), he = V(z(Ye));
                      Ke(he, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Be) => {
                          const _t = Be.target.value;
                          k(L, { condition: _t });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), I(Ye), O(ze, Ye);
                    };
                    oe(Fe, (ze) => {
                      g() && ze(Ve);
                    });
                  }
                  var fe = V(Fe, 2), Se = V(z(fe), 2);
                  Xt(Se), Se.__change = [I2, k, L], I(fe);
                  var be = V(fe, 2), Ze = V(z(be), 2);
                  Xt(Ze), Ze.__change = [z2, k, L], I(be);
                  var wt = V(be, 2);
                  {
                    var Ge = (ze) => {
                      var Ye = R2(), he = le(Ye), Be = V(z(he));
                      const _t = /* @__PURE__ */ N(() => n().loopIntervalMs || "1000");
                      Ke(Be, {
                        rows: 1,
                        style: "width: 100%;",
                        onchange: (Rn) => {
                          const on = Rn.target.value;
                          k(L, { loopIntervalMs: on });
                        },
                        get value() {
                          return c(_t);
                        }
                      }), I(he);
                      var Ue = V(he, 2), Tt = V(z(Ue));
                      const tt = /* @__PURE__ */ N(() => n().maxLoopCount || "0");
                      Ke(Tt, {
                        rows: 1,
                        style: "width: 100%;",
                        onchange: (Rn) => {
                          const on = Rn.target.value;
                          k(L, { maxLoopCount: on });
                        },
                        get value() {
                          return c(tt);
                        }
                      }), I(Ue);
                      var qt = V(Ue, 2), wi = V(z(qt));
                      Ke(wi, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Rn) => {
                          const on = Rn.target.value;
                          k(L, { loopBreakCondition: on });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), I(qt), O(ze, Ye);
                    };
                    oe(wt, (ze) => {
                      n().loopEnable && ze(Ge);
                    });
                  }
                  I(te), ke(() => {
                    Ki(Se, !!n().async), Ki(Ze, !!n().loopEnable);
                  }), O(de, te);
                },
                children: (de, te) => {
                  Te(de, {
                    class: "tf-node-toolbar-item",
                    children: (ge, ce) => {
                      var pe = q2();
                      O(ge, pe);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            oe(_e, (ee) => {
              d() && ee(ve);
            });
          }
          I(W), O(K, W);
        },
        $$slots: { default: !0 }
      });
    };
    oe(Y, (D) => {
      (a() || l() || u()) && D(U);
    });
  }
  var $ = V(Y, 2), S = V(z($), 2), A = z(S);
  td(A, {
    get items() {
      return c(T);
    },
    get activeKeys() {
      return y;
    },
    onChange: (D, K) => {
      k(r(), { expand: K?.includes("key") }), v()?.(K?.includes("key") ? "key" : "");
    }
  }), I(S), I($);
  var _ = V($, 2);
  {
    var P = (D) => {
      Vn(D, {
        type: "target",
        get position() {
          return we.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    oe(_, (D) => {
      h() && D(P);
    });
  }
  var C = V(_, 2);
  {
    var H = (D) => {
      Vn(D, {
        type: "source",
        get position() {
          return we.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    oe(C, (D) => {
      f() && D(H);
    });
  }
  var R = V(C, 2);
  return Xe(R, () => i() ?? rt), O(e, B), se({
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
      return i();
    },
    set handle(D) {
      i(D), p();
    },
    get children() {
      return s();
    },
    set children(D) {
      s(D), p();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(D = !0) {
      a(D), p();
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
    get allowSetting() {
      return d();
    },
    set allowSetting(D = !0) {
      d(D), p();
    },
    get allowSettingOfCondition() {
      return g();
    },
    set allowSettingOfCondition(D = !0) {
      g(D), p();
    },
    get showSourceHandle() {
      return f();
    },
    set showSourceHandle(D = !0) {
      f(D), p();
    },
    get showTargetHandle() {
      return h();
    },
    set showTargetHandle(D = !0) {
      h(D), p();
    },
    get onCollapse() {
      return v();
    },
    set onCollapse(D) {
      v(D), p();
    }
  });
}
_n(["change"]);
ne(
  Ot,
  {
    data: {},
    id: {},
    icon: {},
    handle: {},
    children: {},
    allowExecute: {},
    allowCopy: {},
    allowDelete: {},
    allowSetting: {},
    allowSettingOfCondition: {},
    showSourceHandle: {},
    showTargetHandle: {},
    onCollapse: {}
  },
  [],
  [],
  !0
);
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
], Y2 = [
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
var W2 = /* @__PURE__ */ X('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), X2 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), j2 = /* @__PURE__ */ X('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const G2 = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function vd(e, t) {
  ie(t, !0), Oe(e, G2);
  const n = m(t, "parameter", 7), r = m(t, "index", 7);
  let o = je(), i = /* @__PURE__ */ N(() => bn(o)), s = /* @__PURE__ */ N(() => ({
    ...n(),
    ...c(i)?.current?.data?.parameters[r()]
  }));
  const { updateNodeData: a } = ot(), l = (E, M) => {
    a(o, (L) => {
      let B = L.data.parameters;
      return B[r()][E] = M, { parameters: B };
    });
  }, u = (E) => {
    const M = E.target.value;
    l("name", M);
  }, d = (E) => {
    const M = E.target.checked;
    l("required", M);
  }, g = (E) => {
    const M = E.value;
    M && l("dataType", M);
  };
  let f;
  const h = () => {
    a(o, (E) => {
      let M = E.data.parameters;
      return M.splice(r(), 1), { parameters: [...M] };
    }), f?.hide();
  };
  var v = j2(), y = le(v), k = z(y);
  Je(k, {
    style: "width: 100%;",
    get value() {
      return c(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: u
  }), I(y);
  var w = V(y, 2), T = z(w);
  Ju(T, {
    get checked() {
      return c(s).required;
    },
    onchange: d
  }), I(w);
  var x = V(w, 2), b = z(x);
  return Nt(
    nr(b, {
      placement: "bottom",
      floating: (M) => {
        var L = W2(), B = z(L), Y = V(z(B));
        const U = /* @__PURE__ */ N(() => c(s).dataType ? [c(s).dataType] : ["String"]);
        dt(Y, {
          get items() {
            return hd;
          },
          style: "width: 100%",
          onSelect: g,
          get value() {
            return c(U);
          }
        }), I(B);
        var $ = V(B, 2), S = V(z($));
        Ke(S, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return c(s).defaultValue;
          },
          onchange: (H) => {
            const R = H.target.value;
            l("defaultValue", R);
          }
        }), I($);
        var A = V($, 2), _ = V(z(A));
        Ke(_, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return c(s).description;
          },
          onchange: (H) => {
            const R = H.target.value;
            l("description", R);
          }
        }), I(A);
        var P = V(A, 2), C = z(P);
        Te(C, {
          onclick: h,
          children: (H, R) => {
            ye();
            var D = Ee("删除");
            O(H, D);
          },
          $$slots: { default: !0 }
        }), I(P), I(L), O(M, L);
      },
      children: (M, L) => {
        Te(M, {
          class: "input-btn-more",
          children: (B, Y) => {
            var U = X2();
            O(B, U);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (M) => f = M,
    () => f
  ), I(x), O(e, v), se({
    get parameter() {
      return n();
    },
    set parameter(E) {
      n(E), p();
    },
    get index() {
      return r();
    },
    set index(E) {
      r(E), p();
    }
  });
}
ne(vd, { parameter: {}, index: {} }, [], [], !0);
var U2 = /* @__PURE__ */ X('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), J2 = /* @__PURE__ */ X('<div class="none-params svelte-3n0wca">无输入参数</div>'), Q2 = /* @__PURE__ */ X('<div class="input-container svelte-3n0wca"><!> <!></div>');
const ey = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function pd(e, t) {
  ie(t, !0), Oe(e, ey);
  let n = je(), r = /* @__PURE__ */ N(() => bn(n)), o = /* @__PURE__ */ N(() => [...c(r)?.current?.data?.parameters || []]);
  var i = Q2(), s = z(i);
  {
    var a = (u) => {
      var d = U2();
      ye(4), O(u, d);
    };
    oe(s, (u) => {
      c(o).length !== 0 && u(a);
    });
  }
  var l = V(s, 2);
  lt(
    l,
    19,
    () => c(o),
    (u) => u.id,
    (u, d, g) => {
      vd(u, {
        get parameter() {
          return c(d);
        },
        get index() {
          return c(g);
        }
      });
    },
    (u) => {
      var d = J2();
      O(u, d);
    }
  ), I(i), O(e, i), se();
}
ne(pd, {}, [], [], !0);
const Qo = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = Qn()), Qo(t.children);
}), e), Bt = () => {
  const { updateNodeData: e } = ot();
  return {
    addParameter: (t, n = "parameters", r) => {
      Qo(r?.children);
      const o = {
        name: "",
        dataType: "String",
        refType: "ref",
        ...r,
        id: Qn()
      };
      e(t, (i) => {
        let s = i.data[n];
        return s ? s.push(o) : s = [o], { [n]: [...s] };
      });
    }
  };
};
var ty = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), ny = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ry = /* @__PURE__ */ X('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const oy = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function md(e, t) {
  ie(t, !0), Oe(e, oy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Le(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = je(), { addParameter: i } = Bt();
  return Ot(e, Ie(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (a) => {
      var l = ty();
      O(a, l);
    },
    children: (a, l) => {
      var u = ry(), d = le(u), g = z(d);
      De(g, {
        level: 3,
        children: (v, y) => {
          ye();
          var k = Ee("输入参数");
          O(v, k);
        },
        $$slots: { default: !0 }
      });
      var f = V(g, 2);
      Te(f, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input" });
        },
        children: (v, y) => {
          var k = ny();
          O(v, k);
        },
        $$slots: { default: !0 }
      }), I(d);
      var h = V(d, 2);
      pd(h, {}), O(a, u);
    },
    $$slots: { icon: !0, default: !0 }
  })), se({
    get data() {
      return n();
    },
    set data(s) {
      n(s), p();
    }
  });
}
ne(md, { data: {} }, [], [], !0);
const yd = (e, t, n) => {
  for (const r of n)
    r.target === t && r.source && (e.push(r.source), yd(e, r.source, n));
}, wd = (e, t, n) => !e || e.length === 0 ? [] : e.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: t + "." + r.name,
  children: wd(r.children, t + "." + r.name, n)
})), hl = (e, t, n) => {
  if (e.type === "startNode") {
    const r = e.data.parameters, o = [];
    if (r) for (const i of r)
      o.push({
        label: i.name + (t ? ` (Array<${i.dataType || "String"}>)` : ` (${i.dataType || "String"})`),
        value: e.id + "." + i.name
      });
    return { label: e.data.title, value: e.id, children: o };
  } else {
    if (e.type === "loopNode" && n.parentId)
      return {
        label: e.data.title,
        value: e.id,
        children: [
          { label: "loopItem", value: e.id + ".loopItem" },
          { label: "index (Number)", value: e.id + ".index" }
        ]
      };
    {
      const r = e.data.outputDefs;
      if (r)
        return {
          label: e.data.title,
          value: e.id,
          children: wd(r, e.id, t)
        };
    }
  }
}, _d = (e = !1) => {
  const t = je(), n = bn(t), r = /* @__PURE__ */ N(Rt), o = /* @__PURE__ */ N(() => c(r).nodes), i = /* @__PURE__ */ N(() => c(r).edges), s = /* @__PURE__ */ N(() => c(r).nodeLookup);
  let a = /* @__PURE__ */ N(() => {
    const l = [];
    if (!n.current)
      return [];
    const u = c(s).get(t);
    if (e)
      for (const d of c(o)) {
        const g = d.parentId === n.current.id;
        if (g) {
          const f = hl(d, g, u);
          f && l.push(f);
        }
      }
    else {
      const d = [];
      yd(d, t, c(i));
      for (const g of c(o))
        if (d.includes(g.id)) {
          const f = g.parentId === n.current.id, h = hl(g, f, u);
          h && l.push(h);
        }
    }
    return l;
  });
  return {
    get current() {
      return c(a);
    }
  };
};
var iy = /* @__PURE__ */ X('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), sy = /* @__PURE__ */ X('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const ay = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function xd(e, t) {
  ie(t, !0), Oe(e, ay), In(() => {
    c(l).refType || h({ value: "ref" });
  });
  const n = m(t, "parameter", 7), r = m(t, "index", 7), o = m(t, "dataKeyName", 7), i = m(t, "useChildrenOnly", 7);
  let s = je(), a = /* @__PURE__ */ N(() => bn(s)), l = /* @__PURE__ */ N(() => ({
    ...n(),
    ...c(a)?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: u } = ot(), d = ($, S) => {
    u(s, (A) => {
      let _ = A.data?.[o()];
      return _[r()] = { ..._[r()], [$]: S }, { [o()]: _ };
    });
  }, g = ($, S) => {
    const A = S.target.value;
    d($, A);
  }, f = ($) => {
    const S = $.value;
    d("ref", S);
  }, h = ($) => {
    const S = $.value;
    d("refType", S);
  };
  let v;
  const y = () => {
    u(s, ($) => {
      let S = $.data?.[o()];
      return S.splice(r(), 1), { [o()]: [...S] };
    }), v?.hide();
  };
  let k = _d(i());
  var w = sy(), T = le(w), x = z(T);
  const b = /* @__PURE__ */ N(() => c(l).nameDisabled === !0);
  Je(x, {
    style: "width: 100%;",
    get value() {
      return c(l).name;
    },
    placeholder: "请输入参数名称",
    get disabled() {
      return c(b);
    },
    oninput: ($) => g("name", $)
  }), I(T);
  var E = V(T, 2), M = z(E);
  {
    var L = ($) => {
      Je($, {
        get value() {
          return c(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (S) => g("value", S)
      });
    }, B = ($, S) => {
      {
        var A = (_) => {
          const P = /* @__PURE__ */ N(() => [c(l).ref]);
          dt(_, {
            get items() {
              return k.current;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return c(P);
            },
            expandAll: !0,
            onSelect: f
          });
        };
        oe(
          $,
          (_) => {
            c(l).refType !== "input" && _(A);
          },
          S
        );
      }
    };
    oe(M, ($) => {
      c(l).refType === "fixed" ? $(L) : $(B, !1);
    });
  }
  I(E);
  var Y = V(E, 2), U = z(Y);
  return Nt(
    nr(U, {
      placement: "bottom",
      floating: (S) => {
        var A = iy(), _ = z(A), P = V(z(_));
        const C = /* @__PURE__ */ N(() => c(l).refType ? [c(l).refType] : []);
        dt(P, {
          get items() {
            return Y2;
          },
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return c(C);
          },
          onSelect: h
        }), I(_);
        var H = V(_, 2), R = V(z(H));
        Ke(R, {
          rows: 1,
          style: "width: 100%;",
          onchange: (Q) => {
            g("defaultValue", Q);
          },
          get value() {
            return c(l).defaultValue;
          }
        }), I(H);
        var D = V(H, 2), K = V(z(D));
        Ke(K, {
          rows: 3,
          style: "width: 100%;",
          onchange: (Q) => {
            g("description", Q);
          },
          get value() {
            return c(l).description;
          }
        }), I(D);
        var F = V(D, 2), W = z(F);
        Te(W, {
          onclick: y,
          children: (Q, G) => {
            ye();
            var J = Ee("删除");
            O(Q, J);
          },
          $$slots: { default: !0 }
        }), I(F), I(A), O(S, A);
      },
      children: (S, A) => {
        vo(S, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (S) => v = S,
    () => v
  ), I(Y), O(e, w), se({
    get parameter() {
      return n();
    },
    set parameter($) {
      n($), p();
    },
    get index() {
      return r();
    },
    set index($) {
      r($), p();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName($) {
      o($), p();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly($) {
      i($), p();
    }
  });
}
ne(
  xd,
  {
    parameter: {},
    index: {},
    dataKeyName: {},
    useChildrenOnly: {}
  },
  [],
  [],
  !0
);
var ly = /* @__PURE__ */ X('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), cy = /* @__PURE__ */ X('<div class="none-params svelte-1sm1mgi"> </div>'), uy = /* @__PURE__ */ X('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const dy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function vt(e, t) {
  ie(t, !0), Oe(e, dy);
  const n = m(t, "noneParameterText", 7, "无输入参数"), r = m(t, "dataKeyName", 7, "parameters"), o = m(t, "useChildrenOnly", 7);
  let i = je(), s = /* @__PURE__ */ N(() => bn(i)), a = /* @__PURE__ */ N(() => [...c(s)?.current?.data?.[r()] || []]);
  var l = uy(), u = z(l);
  {
    var d = (f) => {
      var h = ly();
      ye(4), O(f, h);
    };
    oe(u, (f) => {
      c(a).length !== 0 && f(d);
    });
  }
  var g = V(u, 2);
  return lt(
    g,
    19,
    () => c(a),
    (f) => f.id,
    (f, h, v) => {
      xd(f, {
        get parameter() {
          return c(h);
        },
        get index() {
          return c(v);
        },
        get dataKeyName() {
          return r();
        },
        get useChildrenOnly() {
          return o();
        }
      });
    },
    (f) => {
      var h = cy(), v = z(h, !0);
      I(h), ke(() => $e(v, n())), O(f, h);
    }
  ), I(l), O(e, l), se({
    get noneParameterText() {
      return n();
    },
    set noneParameterText(f = "无输入参数") {
      n(f), p();
    },
    get dataKeyName() {
      return r();
    },
    set dataKeyName(f = "parameters") {
      r(f), p();
    },
    get useChildrenOnly() {
      return o();
    },
    set useChildrenOnly(f) {
      o(f), p();
    }
  });
}
ne(vt, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
var fy = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), gy = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), hy = /* @__PURE__ */ X('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const vy = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function bd(e, t) {
  ie(t, !0), Oe(e, vy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Le(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = je(), { addParameter: i } = Bt();
  return Ot(e, Ie(
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
        var l = fy();
        O(a, l);
      },
      children: (a, l) => {
        var u = hy(), d = le(u), g = z(d);
        De(g, {
          level: 3,
          children: (v, y) => {
            ye();
            var k = Ee("输出参数");
            O(v, k);
          },
          $$slots: { default: !0 }
        });
        var f = V(g, 2);
        Te(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (v, y) => {
            var k = gy();
            O(v, k);
          },
          $$slots: { default: !0 }
        }), I(d);
        var h = V(d, 2);
        vt(h, { noneParameterText: "无输出参数", dataKeyName: "outputDefs" }), O(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), se({
    get data() {
      return n();
    },
    set data(s) {
      n(s), p();
    }
  });
}
ne(bd, { data: {} }, [], [], !0);
const Oi = (e) => JSON.parse(JSON.stringify(e));
var py = /* @__PURE__ */ me('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), my = /* @__PURE__ */ X('<div class="input-more-item svelte-1cfeest"><!></div>'), yy = /* @__PURE__ */ X('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), wy = /* @__PURE__ */ X('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const _y = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Cd(e, t) {
  ie(t, !0), Oe(e, _y);
  const n = m(t, "parameter", 7), r = m(t, "position", 7), o = m(t, "dataKeyName", 7);
  let i = je(), s = /* @__PURE__ */ N(() => bn(i)), a = /* @__PURE__ */ N(() => {
    let A = c(s)?.current?.data?.[o()], _;
    if (A && r().length > 0) {
      let P = A;
      for (let C = 0; C < r().length; C++) {
        const H = r()[C];
        C == r().length - 1 ? _ = P[H] : P = P[H].children;
      }
    }
    return { ...n(), ..._ };
  });
  const { updateNodeData: l } = ot(), u = (A, _) => {
    l(i, (P) => {
      const C = P.data?.[o()];
      if (C && r().length > 0) {
        let H = C;
        for (let R = 0; R < r().length; R++) {
          const D = r()[R];
          R == r().length - 1 ? H[D] = { ...H[D], [A]: _ } : H = H[D].children;
        }
      }
      return { [o()]: [...Oi(C)] };
    });
  }, d = (A, _) => {
    const P = _.target.value;
    u(A, P);
  }, g = (A) => {
    const _ = A.value;
    u("dataType", _);
  };
  let f;
  const h = () => {
    l(i, (A) => {
      let _ = A.data?.[o()];
      if (_ && r().length > 0) {
        let P = _;
        for (let C = 0; C < r().length; C++) {
          const H = r()[C];
          C == r().length - 1 ? P.splice(H, 1) : P = P[H].children;
        }
      }
      return { [o()]: [...Oi(_)] };
    }), f?.hide();
  }, v = () => {
    l(i, (A) => {
      let _ = A.data?.[o()];
      if (_ && r().length > 0) {
        let P = _;
        for (let C = 0; C < r().length; C++) {
          const H = r()[C];
          C == r().length - 1 ? P[H].children ? P[H].children.push({ id: Qn(), name: "newParam", dataType: "String" }) : P[H].children = [{ id: Qn(), name: "newParam", dataType: "String" }] : P = P[H].children;
        }
      }
      return { [o()]: [...Oi(_)] };
    });
  };
  var y = wy(), k = le(y), w = z(k);
  {
    var T = (A) => {
      var _ = Me(), P = le(_);
      lt(P, 17, r, hr, (C, H) => {
        ye();
        var R = Ee(" ");
        O(C, R);
      }), O(A, _);
    };
    oe(w, (A) => {
      r().length > 1 && A(T);
    });
  }
  var x = V(w, 2);
  const b = /* @__PURE__ */ N(() => c(a).nameDisabled === !0);
  Je(x, {
    style: "width: 100%;",
    get value() {
      return c(a).name;
    },
    placeholder: "请输入参数名称",
    oninput: (A) => {
      d("name", A);
    },
    get disabled() {
      return c(b);
    }
  }), I(k);
  var E = V(k, 2), M = z(E);
  const L = /* @__PURE__ */ N(() => c(a).dataType ? [c(a).dataType] : []), B = /* @__PURE__ */ N(() => c(a).dataTypeDisabled === !0);
  dt(M, {
    get items() {
      return hd;
    },
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return c(L);
    },
    get disabled() {
      return c(B);
    },
    onSelect: g
  });
  var Y = V(M, 2);
  {
    var U = (A) => {
      Te(A, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: v,
        children: (_, P) => {
          var C = py();
          O(_, C);
        },
        $$slots: { default: !0 }
      });
    };
    oe(Y, (A) => {
      (c(a).dataType === "Object" || c(a).dataType === "Array") && c(a).addChildDisabled !== !0 && A(U);
    });
  }
  I(E);
  var $ = V(E, 2), S = z($);
  return Nt(
    nr(S, {
      placement: "bottom",
      floating: (_) => {
        var P = yy(), C = z(P), H = V(z(C));
        const R = /* @__PURE__ */ N(() => c(a).defaultValue || "");
        Ke(H, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return c(R);
          },
          onchange: (G) => {
            d("defaultValue", G);
          }
        }), I(C);
        var D = V(C, 2), K = V(z(D));
        const F = /* @__PURE__ */ N(() => c(a).description || "");
        Ke(K, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return c(F);
          },
          onchange: (G) => {
            d("description", G);
          }
        }), I(D);
        var W = V(D, 2);
        {
          var Q = (G) => {
            var J = my(), ue = z(J);
            Te(ue, {
              onclick: h,
              children: (re, j) => {
                ye();
                var _e = Ee("删除");
                O(re, _e);
              },
              $$slots: { default: !0 }
            }), I(J), O(G, J);
          };
          oe(W, (G) => {
            c(a).deleteDisabled !== !0 && G(Q);
          });
        }
        I(P), O(_, P);
      },
      children: (_, P) => {
        vo(_, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (_) => f = _,
    () => f
  ), I($), O(e, y), se({
    get parameter() {
      return n();
    },
    set parameter(A) {
      n(A), p();
    },
    get position() {
      return r();
    },
    set position(A) {
      r(A), p();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(A) {
      o(A), p();
    }
  });
}
ne(Cd, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var xy = /* @__PURE__ */ X("<!> <!>", 1), by = /* @__PURE__ */ X('<div class="none-params svelte-1sm1mgi"> </div>'), Cy = /* @__PURE__ */ X('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), ky = /* @__PURE__ */ X('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Ey = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function kn(e, t) {
  ie(t, !0), Oe(e, Ey);
  const n = (f, h = rt, v = rt) => {
    var y = Me(), k = le(y);
    lt(
      k,
      19,
      h,
      (w) => `${w.id}_${w.children ? w.children.length : 0}`,
      (w, T, x) => {
        var b = xy(), E = le(b);
        const M = /* @__PURE__ */ N(() => [...v(), c(x)]);
        Cd(E, {
          get parameter() {
            return c(T);
          },
          get position() {
            return c(M);
          },
          get dataKeyName() {
            return o();
          }
        });
        var L = V(E, 2);
        {
          var B = (Y) => {
            var U = /* @__PURE__ */ _s(() => [...v(), c(x)]);
            n(Y, () => c(T).children, () => c(U));
          };
          oe(L, (Y) => {
            c(T).children && Y(B);
          });
        }
        O(w, b);
      },
      (w) => {
        var T = Me(), x = le(T);
        {
          var b = (E) => {
            var M = by(), L = z(M, !0);
            I(M), ke(() => $e(L, r())), O(E, M);
          };
          oe(x, (E) => {
            v().length === 0 && E(b);
          });
        }
        O(w, T);
      }
    ), O(f, y);
  }, r = m(t, "noneParameterText", 7, "无输出参数"), o = m(t, "dataKeyName", 7, "outputDefs");
  let i = je(), s = /* @__PURE__ */ N(() => bn(i)), a = /* @__PURE__ */ N(() => [...c(s)?.current?.data?.[o()] || []]);
  var l = ky(), u = z(l);
  {
    var d = (f) => {
      var h = Cy();
      ye(4), O(f, h);
    };
    oe(u, (f) => {
      c(a).length !== 0 && f(d);
    });
  }
  var g = V(u, 2);
  return n(g, () => c(a) || [], () => []), I(l), O(e, l), se({
    get noneParameterText() {
      return r();
    },
    set noneParameterText(f = "无输出参数") {
      r(f), p();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(f = "outputDefs") {
      o(f), p();
    }
  });
}
ne(kn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Sy = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), Ny = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Py = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), Ty = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), Dy = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), Ay = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), My = /* @__PURE__ */ X('<div class="heading svelte-q0cqsa"><!> <!></div> <!> <!> <div class="setting-title svelte-q0cqsa">模型</div> <div class="setting-item svelte-q0cqsa"><!> <!></div> <div class="setting-title svelte-q0cqsa">采样参数</div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="100" step="1"/></div></div> <div class="setting-title svelte-q0cqsa">系统提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="setting-title svelte-q0cqsa">用户提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="heading svelte-q0cqsa"><!> <!> <!></div> <!>', 1);
const Oy = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function kd(e, t) {
  ie(t, !0), Oe(e, Oy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Le(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = je(), { addParameter: i } = Bt(), s = Ln();
  let a = /* @__PURE__ */ Ne(Mt([]));
  In(async () => {
    const d = await s.provider?.llm?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = ot(), u = (d) => {
    l(o, () => ({ outType: d })), d === "text" ? l(o, {
      outputDefs: [
        {
          name: "output",
          dataType: "String",
          dataTypeDisabled: !0,
          deleteDisabled: !0
        }
      ]
    }) : l(o, { outputDefs: [] });
  };
  return We(() => {
    n().outType || u("text");
  }), Ot(e, Ie(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (g) => {
        var f = Sy();
        O(g, f);
      },
      children: (g, f) => {
        var h = My(), v = le(h), y = z(v);
        De(y, {
          level: 3,
          children: (ge, ce) => {
            ye();
            var pe = Ee("输入参数");
            O(ge, pe);
          },
          $$slots: { default: !0 }
        });
        var k = V(y, 2);
        Te(k, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (ge, ce) => {
            var pe = Ny();
            O(ge, pe);
          },
          $$slots: { default: !0 }
        }), I(v);
        var w = V(v, 2);
        vt(w, {});
        var T = V(w, 2);
        De(T, {
          level: 3,
          mt: "10px",
          children: (ge, ce) => {
            ye();
            var pe = Ee("模型设置");
            O(ge, pe);
          },
          $$slots: { default: !0 }
        });
        var x = V(T, 4), b = z(x);
        const E = /* @__PURE__ */ N(() => n().llmId ? [n().llmId] : []);
        dt(b, {
          get items() {
            return c(a);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (ge) => {
            const ce = ge.value;
            l(o, () => ({ llmId: ce }));
          },
          get value() {
            return c(E);
          }
        });
        var M = V(b, 2);
        vo(M, {}), I(x);
        var L = V(x, 4), B = z(L), Y = z(B), U = z(Y);
        I(Y);
        var $ = V(Y, 2);
        Xt($), $.__input = [Py, l, o], I(B), I(L);
        var S = V(L, 2), A = z(S), _ = z(A), P = z(_);
        I(_);
        var C = V(_, 2);
        Xt(C), C.__input = [Ty, l, o], I(A), I(S);
        var H = V(S, 2), R = z(H), D = z(R), K = z(D);
        I(D);
        var F = V(D, 2);
        Xt(F), F.__input = [Dy, l, o], I(R), I(H);
        var W = V(H, 4), Q = z(W);
        const G = /* @__PURE__ */ N(() => n().systemPrompt || "");
        Ke(Q, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return c(G);
          },
          oninput: (ge) => {
            l(o, { systemPrompt: ge.target.value });
          }
        }), I(W);
        var J = V(W, 4), ue = z(J);
        const re = /* @__PURE__ */ N(() => n().userPrompt || "");
        Ke(ue, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return c(re);
          },
          oninput: (ge) => {
            l(o, { userPrompt: ge.target.value });
          }
        }), I(J);
        var j = V(J, 2), _e = z(j);
        De(_e, {
          level: 3,
          mt: "10px",
          children: (ge, ce) => {
            ye();
            var pe = Ee("输出参数");
            O(ge, pe);
          },
          $$slots: { default: !0 }
        });
        var ve = V(_e, 2);
        const ee = /* @__PURE__ */ N(() => n().outType ? [n().outType] : []);
        dt(ve, {
          items: [
            { label: "文本", value: "text" },
            { label: "JSON", value: "json" }
          ],
          style: "width: 100px;margin-left: auto",
          defaultValue: "text",
          onSelect: (ge) => {
            u(ge.value);
          },
          get value() {
            return c(ee);
          }
        });
        var ae = V(ve, 2);
        {
          var de = (ge) => {
            Te(ge, {
              class: "input-btn-more",
              style: "margin-left: 10px",
              onclick: () => {
                i(o, "outputDefs");
              },
              children: (ce, pe) => {
                var q = Ay();
                O(ce, q);
              },
              $$slots: { default: !0 }
            });
          };
          oe(ae, (ge) => {
            n().outType === "json" && ge(de);
          });
        }
        I(j);
        var te = V(j, 2);
        kn(te, {}), ke(() => {
          $e(U, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), Eo($, n().temperature ?? 0.5), $e(P, `Top P: ${n().topP ?? 0.9 ?? ""}`), Eo(C, n().topP ?? 0.9), $e(K, `Top K: ${n().topK ?? 50 ?? ""}`), Eo(F, n().topK ?? 50);
        }), O(g, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), se({
    get data() {
      return n();
    },
    set data(d) {
      n(d), p();
    }
  });
}
_n(["input"]);
ne(kd, { data: {} }, [], [], !0);
var Vy = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Hy = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ly = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), $y = /* @__PURE__ */ X('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const Iy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Ed(e, t) {
  ie(t, !0), Oe(e, Iy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Le(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  In(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = je(), { addParameter: i } = Bt(), { updateNodeData: s } = ot(), a = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  return Ot(e, Ie(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = Vy();
        O(u, d);
      },
      children: (u, d) => {
        var g = $y(), f = le(g), h = z(f);
        De(h, {
          level: 3,
          children: ($, S) => {
            ye();
            var A = Ee("输入参数");
            O($, A);
          },
          $$slots: { default: !0 }
        });
        var v = V(h, 2);
        Te(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: ($, S) => {
            var A = Hy();
            O($, A);
          },
          $$slots: { default: !0 }
        }), I(f);
        var y = V(f, 2);
        vt(y, {});
        var k = V(y, 2);
        De(k, {
          level: 3,
          mt: "10px",
          children: ($, S) => {
            ye();
            var A = Ee("代码");
            O($, A);
          },
          $$slots: { default: !0 }
        });
        var w = V(k, 4), T = z(w);
        const x = /* @__PURE__ */ N(() => n().engine ? [n().engine] : ["qlexpress"]);
        dt(T, {
          get items() {
            return a;
          },
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: ($) => {
            const S = $.value;
            s(o, () => ({ engine: S }));
          },
          get value() {
            return c(x);
          }
        }), I(w);
        var b = V(w, 4), E = z(b);
        const M = /* @__PURE__ */ N(() => n().code || "");
        Ke(E, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: ($) => {
            s(o, () => ({ code: $.target.value }));
          },
          get value() {
            return c(M);
          }
        }), I(b);
        var L = V(b, 2), B = z(L);
        De(B, {
          level: 3,
          mt: "10px",
          children: ($, S) => {
            ye();
            var A = Ee("输出参数");
            O($, A);
          },
          $$slots: { default: !0 }
        });
        var Y = V(B, 2);
        Te(Y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: ($, S) => {
            var A = Ly();
            O($, A);
          },
          $$slots: { default: !0 }
        }), I(L);
        var U = V(L, 2);
        kn(U, {}), O(u, g);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), se({
    get data() {
      return n();
    },
    set data(l) {
      n(l), p();
    }
  });
}
ne(Ed, { data: {} }, [], [], !0);
var zy = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), Ry = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), By = /* @__PURE__ */ X('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const qy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Sd(e, t) {
  ie(t, !0), Oe(e, qy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Le(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = je(), { addParameter: i } = Bt(), { updateNodeData: s } = ot();
  return We(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), Ot(e, Ie(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = zy();
        O(l, u);
      },
      children: (l, u) => {
        var d = By(), g = le(d), f = z(g);
        De(f, {
          level: 3,
          children: (M, L) => {
            ye();
            var B = Ee("输入参数");
            O(M, B);
          },
          $$slots: { default: !0 }
        });
        var h = V(f, 2);
        Te(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (M, L) => {
            var B = Ry();
            O(M, B);
          },
          $$slots: { default: !0 }
        }), I(g);
        var v = V(g, 2);
        vt(v, {});
        var y = V(v, 2);
        De(y, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (M, L) => {
            ye();
            var B = Ee("模板内容");
            O(M, B);
          },
          $$slots: { default: !0 }
        });
        var k = V(y, 2), w = z(k);
        const T = /* @__PURE__ */ N(() => n().template || "");
        Ke(w, {
          rows: 10,
          placeholder: "请输入模板内容",
          style: "width: 100%",
          onchange: (M) => {
            s(o, () => ({ template: M.target.value }));
          },
          get value() {
            return c(T);
          }
        }), I(k);
        var x = V(k, 2), b = z(x);
        De(b, {
          level: 3,
          mt: "10px",
          children: (M, L) => {
            ye();
            var B = Ee("输出参数");
            O(M, B);
          },
          $$slots: { default: !0 }
        }), I(x);
        var E = V(x, 2);
        kn(E, {}), O(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), se({
    get data() {
      return n();
    },
    set data(a) {
      n(a), p();
    }
  });
}
ne(Sd, { data: {} }, [], [], !0);
var Ky = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), Fy = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Zy = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Yy = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Wy = /* @__PURE__ */ X('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), Xy = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), jy = /* @__PURE__ */ X('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), Gy = /* @__PURE__ */ X('<div style="width: 100%"><!></div>'), Uy = /* @__PURE__ */ X('<div style="width: 100%"><!></div>'), Jy = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Qy = /* @__PURE__ */ X('<div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div class="radio-group svelte-1mo2w1q"><label class="svelte-1mo2w1q"><!>none</label> <label class="svelte-1mo2w1q"><!>form-data</label> <label class="svelte-1mo2w1q"><!>x-www-form-urlencoded</label> <label class="svelte-1mo2w1q"><!>json</label> <label class="svelte-1mo2w1q"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1mo2w1q"><!> <!></div> <!>', 1);
const ew = {
  hash: "svelte-1mo2w1q",
  code: ".heading.svelte-1mo2w1q {display:flex;margin-bottom:10px;}.radio-group.svelte-1mo2w1q {display:flex;margin:10px 0;}.radio-group.svelte-1mo2w1q label:where(.svelte-1mo2w1q) {display:flex;font-size:14px;}"
};
function Nd(e, t) {
  ie(t, !0), Oe(e, ew);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Le(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  In(() => {
    n().method || a(i, () => ({ method: "get" }));
  });
  const o = [
    { value: "get", label: "GET" },
    { value: "post", label: "POST" },
    { value: "put", label: "PUT" },
    { value: "delete", label: "DELETE" },
    { value: "head", label: "HEAD" },
    { value: "patch", label: "PATCH" }
  ], i = je(), { addParameter: s } = Bt(), { updateNodeData: a } = ot();
  return Ot(e, Ie(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = Ky();
        O(u, d);
      },
      children: (u, d) => {
        var g = Qy(), f = le(g), h = z(f);
        De(h, {
          level: 3,
          children: (fe, Se) => {
            ye();
            var be = Ee("输入参数");
            O(fe, be);
          },
          $$slots: { default: !0 }
        });
        var v = V(h, 2);
        Te(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (fe, Se) => {
            var be = Fy();
            O(fe, be);
          },
          $$slots: { default: !0 }
        }), I(f);
        var y = V(f, 2);
        vt(y, {});
        var k = V(y, 2);
        De(k, {
          level: 3,
          mt: "10px",
          children: (fe, Se) => {
            ye();
            var be = Ee("URL 地址");
            O(fe, be);
          },
          $$slots: { default: !0 }
        });
        var w = V(k, 2), T = z(w), x = z(T);
        const b = /* @__PURE__ */ N(() => n().method ? [n().method] : ["get"]);
        dt(x, {
          get items() {
            return o;
          },
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (fe) => {
            const Se = fe.value;
            a(i, () => ({ method: Se }));
          },
          get value() {
            return c(b);
          }
        }), I(T);
        var E = V(T, 2), M = z(E);
        const L = /* @__PURE__ */ N(() => n().url || "");
        Je(M, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (fe) => {
            a(i, () => ({ url: fe.target.value }));
          },
          get value() {
            return c(L);
          }
        }), I(E), I(w);
        var B = V(w, 2), Y = z(B);
        De(Y, {
          level: 3,
          children: (fe, Se) => {
            ye();
            var be = Ee("Http 头信息");
            O(fe, be);
          },
          $$slots: { default: !0 }
        });
        var U = V(Y, 2);
        Te(U, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (fe, Se) => {
            var be = Zy();
            O(fe, be);
          },
          $$slots: { default: !0 }
        }), I(B);
        var $ = V(B, 2);
        vt($, { dataKeyName: "headers" });
        var S = V($, 2);
        De(S, {
          level: 3,
          mt: "10px",
          children: (fe, Se) => {
            ye();
            var be = Ee("Body");
            O(fe, be);
          },
          $$slots: { default: !0 }
        });
        var A = V(S, 2), _ = z(A), P = z(_);
        const C = /* @__PURE__ */ N(() => !n().bodyType);
        Je(P, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return c(C);
          },
          onchange: (fe) => {
            fe.target?.checked && a(i, { bodyType: "" });
          }
        }), ye(), I(_);
        var H = V(_, 2), R = z(H);
        const D = /* @__PURE__ */ N(() => n().bodyType === "form-data");
        Je(R, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return c(D);
          },
          onchange: (fe) => {
            fe.target?.checked && a(i, { bodyType: "form-data" });
          }
        }), ye(), I(H);
        var K = V(H, 2), F = z(K);
        const W = /* @__PURE__ */ N(() => n().bodyType === "x-www-form-urlencoded");
        Je(F, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return c(W);
          },
          onchange: (fe) => {
            fe.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
          }
        }), ye(), I(K);
        var Q = V(K, 2), G = z(Q);
        const J = /* @__PURE__ */ N(() => n().bodyType === "json");
        Je(G, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return c(J);
          },
          onchange: (fe) => {
            fe.target?.checked && a(i, { bodyType: "json" });
          }
        }), ye(), I(Q);
        var ue = V(Q, 2), re = z(ue);
        const j = /* @__PURE__ */ N(() => n().bodyType === "raw");
        Je(re, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return c(j);
          },
          onchange: (fe) => {
            fe.target?.checked && a(i, { bodyType: "raw" });
          }
        }), ye(), I(ue), I(A);
        var _e = V(A, 2);
        {
          var ve = (fe) => {
            var Se = Wy(), be = le(Se), Ze = z(be);
            De(Ze, {
              level: 3,
              children: (ze, Ye) => {
                ye();
                var he = Ee("参数");
                O(ze, he);
              },
              $$slots: { default: !0 }
            });
            var wt = V(Ze, 2);
            Te(wt, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (ze, Ye) => {
                var he = Yy();
                O(ze, he);
              },
              $$slots: { default: !0 }
            }), I(be);
            var Ge = V(be, 2);
            vt(Ge, { dataKeyName: "formData" }), O(fe, Se);
          };
          oe(_e, (fe) => {
            n().bodyType === "form-data" && fe(ve);
          });
        }
        var ee = V(_e, 2);
        {
          var ae = (fe) => {
            var Se = jy(), be = le(Se), Ze = z(be);
            De(Ze, {
              level: 3,
              children: (ze, Ye) => {
                ye();
                var he = Ee("Body 参数");
                O(ze, he);
              },
              $$slots: { default: !0 }
            });
            var wt = V(Ze, 2);
            Te(wt, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (ze, Ye) => {
                var he = Xy();
                O(ze, he);
              },
              $$slots: { default: !0 }
            }), I(be);
            var Ge = V(be, 2);
            vt(Ge, { dataKeyName: "formUrlencoded" }), O(fe, Se);
          };
          oe(ee, (fe) => {
            n().bodyType === "x-www-form-urlencoded" && fe(ae);
          });
        }
        var de = V(ee, 2);
        {
          var te = (fe) => {
            var Se = Gy(), be = z(Se);
            Ke(be, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Ze) => {
                a(i, { bodyJson: Ze.target.value });
              }
            }), I(Se), O(fe, Se);
          };
          oe(de, (fe) => {
            n().bodyType === "json" && fe(te);
          });
        }
        var ge = V(de, 2);
        {
          var ce = (fe) => {
            var Se = Uy(), be = z(Se);
            Ke(be, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Ze) => {
                a(i, { bodyRaw: Ze.target.value });
              }
            }), I(Se), O(fe, Se);
          };
          oe(ge, (fe) => {
            n().bodyType === "raw" && fe(ce);
          });
        }
        var pe = V(ge, 2), q = z(pe);
        De(q, {
          level: 3,
          mt: "10px",
          children: (fe, Se) => {
            ye();
            var be = Ee("输出参数");
            O(fe, be);
          },
          $$slots: { default: !0 }
        });
        var Fe = V(q, 2);
        Te(Fe, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (fe, Se) => {
            var be = Jy();
            O(fe, be);
          },
          $$slots: { default: !0 }
        }), I(pe);
        var Ve = V(pe, 2);
        kn(Ve, {}), O(u, g);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), se({
    get data() {
      return n();
    },
    set data(l) {
      n(l), p();
    }
  });
}
ne(Nd, { data: {} }, [], [], !0);
var tw = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), nw = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), rw = /* @__PURE__ */ X('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const ow = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Pd(e, t) {
  ie(t, !0), Oe(e, ow);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Le(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = je(), { addParameter: i } = Bt(), s = Ln();
  let a = /* @__PURE__ */ Ne(Mt([]));
  In(async () => {
    const u = await s.provider?.knowledge?.();
    c(a).push(...u || []);
  });
  const { updateNodeData: l } = ot();
  return We(() => {
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
  }), Ot(e, Ie(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var g = tw();
        O(d, g);
      },
      children: (d, g) => {
        var f = rw(), h = le(f), v = z(h);
        De(v, {
          level: 3,
          children: (A, _) => {
            ye();
            var P = Ee("输入参数");
            O(A, P);
          },
          $$slots: { default: !0 }
        });
        var y = V(v, 2);
        Te(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (A, _) => {
            var P = nw();
            O(A, P);
          },
          $$slots: { default: !0 }
        }), I(h);
        var k = V(h, 2);
        vt(k, {});
        var w = V(k, 2);
        De(w, {
          level: 3,
          mt: "10px",
          children: (A, _) => {
            ye();
            var P = Ee("知识库设置");
            O(A, P);
          },
          $$slots: { default: !0 }
        });
        var T = V(w, 4), x = z(T);
        const b = /* @__PURE__ */ N(() => n().knowledgeId ? [n().knowledgeId] : []);
        dt(x, {
          get items() {
            return c(a);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (A) => {
            const _ = A.value;
            l(o, () => ({ knowledgeId: _ }));
          },
          get value() {
            return c(b);
          }
        }), I(T);
        var E = V(T, 4), M = z(E);
        Je(M, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (A) => {
            const _ = A.target.value;
            l(o, () => ({ keyword: _ }));
          }
        }), I(E);
        var L = V(E, 4), B = z(L);
        const Y = /* @__PURE__ */ N(() => n().limit || "");
        Je(B, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          onchange: (A) => {
            const _ = A.target.value;
            l(o, () => ({ limit: _ }));
          },
          get value() {
            return c(Y);
          }
        }), I(L);
        var U = V(L, 2), $ = z(U);
        De($, {
          level: 3,
          mt: "10px",
          children: (A, _) => {
            ye();
            var P = Ee("输出参数");
            O(A, P);
          },
          $$slots: { default: !0 }
        }), I(U);
        var S = V(U, 2);
        kn(S, {}), O(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), se({
    get data() {
      return n();
    },
    set data(u) {
      n(u), p();
    }
  });
}
ne(Pd, { data: {} }, [], [], !0);
var iw = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), sw = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), aw = /* @__PURE__ */ X('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const lw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Td(e, t) {
  ie(t, !0), Oe(e, lw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Le(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = je(), { addParameter: i } = Bt(), s = Ln();
  let a = /* @__PURE__ */ Ne(Mt([]));
  In(async () => {
    const u = await s.provider?.searchEngine?.();
    c(a).push(...u || []);
  });
  const { updateNodeData: l } = ot();
  return We(() => {
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
  }), Ot(e, Ie(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var g = iw();
        O(d, g);
      },
      children: (d, g) => {
        var f = aw(), h = le(f), v = z(h);
        De(v, {
          level: 3,
          children: (S, A) => {
            ye();
            var _ = Ee("输入参数");
            O(S, _);
          },
          $$slots: { default: !0 }
        });
        var y = V(v, 2);
        Te(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (S, A) => {
            var _ = sw();
            O(S, _);
          },
          $$slots: { default: !0 }
        }), I(h);
        var k = V(h, 2);
        vt(k, {});
        var w = V(k, 2);
        De(w, {
          level: 3,
          mt: "10px",
          children: (S, A) => {
            ye();
            var _ = Ee("搜索引擎设置");
            O(S, _);
          },
          $$slots: { default: !0 }
        });
        var T = V(w, 4), x = z(T);
        const b = /* @__PURE__ */ N(() => n().engine ? [n().engine] : []);
        dt(x, {
          get items() {
            return c(a);
          },
          style: "width: 100%",
          placeholder: "请选择搜索引擎",
          onSelect: (S) => {
            const A = S.value;
            l(o, () => ({ engine: A }));
          },
          get value() {
            return c(b);
          }
        }), I(T);
        var E = V(T, 4), M = z(E);
        Je(M, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (S) => {
            const A = S.target.value;
            l(o, () => ({ keyword: A }));
          }
        }), I(E);
        var L = V(E, 4), B = z(L);
        Je(B, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (S) => {
            const A = S.target.value;
            l(o, () => ({ limit: A }));
          }
        }), I(L);
        var Y = V(L, 2), U = z(Y);
        De(U, {
          level: 3,
          mt: "10px",
          children: (S, A) => {
            ye();
            var _ = Ee("输出参数");
            O(S, _);
          },
          $$slots: { default: !0 }
        }), I(Y);
        var $ = V(Y, 2);
        kn($, {}), O(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), se({
    get data() {
      return n();
    },
    set data(u) {
      n(u), p();
    }
  });
}
ne(Td, { data: {} }, [], [], !0);
var cw = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), uw = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), dw = /* @__PURE__ */ X('<div class="heading svelte-1eqcy61"><!></div> <!> <div class="heading svelte-1eqcy61"><!> <!></div> <!>', 1);
const fw = {
  hash: "svelte-1eqcy61",
  code: ".heading.svelte-1eqcy61 {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function Dd(e, t) {
  ie(t, !0), Oe(e, fw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Le(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = je(), { addParameter: i } = Bt();
  return We(() => {
    (!n().loopVars || n().loopVars.length === 0) && i(o, "loopVars", { name: "loopVar", nameDisabled: !0, deleteDisabled: !0 });
  }), Ot(e, Ie(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = cw();
        O(l, u);
      },
      handle: (l) => {
        Vn(l, {
          type: "source",
          get position() {
            return we.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (l, u) => {
        var d = dw(), g = le(d), f = z(g);
        De(f, {
          level: 3,
          children: (T, x) => {
            ye();
            var b = Ee("循环变量");
            O(T, b);
          },
          $$slots: { default: !0 }
        }), I(g);
        var h = V(g, 2);
        vt(h, { dataKeyName: "loopVars" });
        var v = V(h, 2), y = z(v);
        De(y, {
          level: 3,
          children: (T, x) => {
            ye();
            var b = Ee("输出参数");
            O(T, b);
          },
          $$slots: { default: !0 }
        });
        var k = V(y, 2);
        Te(k, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (T, x) => {
            var b = uw();
            O(T, b);
          },
          $$slots: { default: !0 }
        }), I(v);
        var w = V(v, 2);
        vt(w, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), O(l, d);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), se({
    get data() {
      return n();
    },
    set data(s) {
      n(s), p();
    }
  });
}
ne(Dd, { data: {} }, [], [], !0);
const gw = (e, t) => {
  const n = e.checked;
  t("required", n);
};
var hw = /* @__PURE__ */ X('<div class="input-more-setting svelte-2f9bnc"><div class="input-more-item svelte-2f9bnc">数据类型： <!></div> <div class="input-more-item svelte-2f9bnc">确认方式： <!></div> <label class="input-item-inline svelte-2f9bnc"><span>是否必填：</span> <input type="checkbox"/></label> <div class="input-more-item svelte-2f9bnc">默认值： <!></div> <div class="input-more-item svelte-2f9bnc">参数描述： <!></div> <div class="input-more-item svelte-2f9bnc"><!></div></div>'), vw = /* @__PURE__ */ X('<div class="input-item svelte-2f9bnc"><!></div> <div class="input-item svelte-2f9bnc"><!></div> <div class="input-item svelte-2f9bnc"><!></div>', 1);
const pw = {
  hash: "svelte-2f9bnc",
  code: ".input-item.svelte-2f9bnc {display:flex;align-items:center;}.input-item-inline.svelte-2f9bnc {display:flex;align-items:center;font-size:12px;color:#666;}.input-more-setting.svelte-2f9bnc {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-2f9bnc .input-more-item:where(.svelte-2f9bnc) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Ad(e, t) {
  ie(t, !0), Oe(e, pw);
  const n = m(t, "parameter", 7), r = m(t, "index", 7), o = m(t, "dataKeyName", 7), i = m(t, "useChildrenOnly", 7);
  let s = je(), a = bn(s), l = /* @__PURE__ */ N(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: u } = ot(), d = (_, P) => {
    u(s, (C) => {
      let H = C.data?.[o()];
      return H[r()] = { ...H[r()], [_]: P }, { [o()]: H };
    });
  }, g = (_, P) => {
    const C = P.target.value;
    d(_, C);
  }, f = (_) => {
    const P = _.value;
    d("ref", P);
  }, h = (_) => {
    const P = _.value;
    d("selectionMode", P);
  }, v = (_) => {
    const P = _.value;
    d("selectionDataType", P);
  };
  let y;
  const k = () => {
    u(s, (_) => {
      let P = _.data?.[o()];
      return P.splice(r(), 1), { [o()]: [...P] };
    }), y?.hide();
  };
  let w = _d(i());
  const T = [
    { label: "文字", value: "text" },
    { label: "图片", value: "image" },
    { label: "视频", value: "video" },
    { label: "音频", value: "audio" },
    { label: "文件", value: "file" },
    { label: "其他", value: "other" }
  ], x = [
    { label: "单选", value: "single" },
    { label: "多选", value: "multiple" }
  ];
  var b = vw(), E = le(b), M = z(E);
  const L = /* @__PURE__ */ N(() => c(l).nameDisabled === !0);
  Je(M, {
    style: "width: 100%;",
    get value() {
      return c(l).name;
    },
    placeholder: "请输入参数名称",
    get disabled() {
      return c(L);
    },
    oninput: (_) => g("name", _)
  }), I(E);
  var B = V(E, 2), Y = z(B);
  {
    var U = (_) => {
      Je(_, {
        get value() {
          return c(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (P) => g("value", P)
      });
    }, $ = (_, P) => {
      {
        var C = (H) => {
          const R = /* @__PURE__ */ N(() => [c(l).ref]);
          dt(H, {
            get items() {
              return w.current;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return c(R);
            },
            expandAll: !0,
            onSelect: f
          });
        };
        oe(
          _,
          (H) => {
            c(l).refType !== "input" && H(C);
          },
          P
        );
      }
    };
    oe(Y, (_) => {
      c(l).refType === "fixed" ? _(U) : _($, !1);
    });
  }
  I(B);
  var S = V(B, 2), A = z(S);
  return Nt(
    nr(A, {
      placement: "bottom",
      floating: (P) => {
        var C = hw(), H = z(C), R = V(z(H));
        const D = /* @__PURE__ */ N(() => c(l).selectionDataType ? [c(l).selectionDataType] : []);
        dt(R, {
          get items() {
            return T;
          },
          style: "width: 100%",
          defaultValue: ["text"],
          get value() {
            return c(D);
          },
          onSelect: v
        }), I(H);
        var K = V(H, 2), F = V(z(K));
        const W = /* @__PURE__ */ N(() => c(l).selectionMode ? [c(l).selectionMode] : []);
        dt(F, {
          get items() {
            return x;
          },
          style: "width: 100%",
          defaultValue: ["single"],
          get value() {
            return c(W);
          },
          onSelect: h
        }), I(K);
        var Q = V(K, 2), G = V(z(Q), 2);
        Xt(G), Ki(G, !1), G.__change = [gw, d], I(Q);
        var J = V(Q, 2), ue = V(z(J));
        Ke(ue, {
          rows: 1,
          style: "width: 100%;",
          onchange: (ee) => {
            g("defaultValue", ee);
          },
          get value() {
            return c(l).defaultValue;
          }
        }), I(J);
        var re = V(J, 2), j = V(z(re));
        Ke(j, {
          rows: 3,
          style: "width: 100%;",
          onchange: (ee) => {
            g("description", ee);
          },
          get value() {
            return c(l).description;
          }
        }), I(re);
        var _e = V(re, 2), ve = z(_e);
        Te(ve, {
          onclick: k,
          children: (ee, ae) => {
            ye();
            var de = Ee("删除");
            O(ee, de);
          },
          $$slots: { default: !0 }
        }), I(_e), I(C), O(P, C);
      },
      children: (P, C) => {
        vo(P, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (P) => y = P,
    () => y
  ), I(S), O(e, b), se({
    get parameter() {
      return n();
    },
    set parameter(_) {
      n(_), p();
    },
    get index() {
      return r();
    },
    set index(_) {
      r(_), p();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(_) {
      o(_), p();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(_) {
      i(_), p();
    }
  });
}
_n(["change"]);
ne(
  Ad,
  {
    parameter: {},
    index: {},
    dataKeyName: {},
    useChildrenOnly: {}
  },
  [],
  [],
  !0
);
var mw = /* @__PURE__ */ X('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), yw = /* @__PURE__ */ X('<div class="none-params svelte-1sm1mgi"> </div>'), ww = /* @__PURE__ */ X('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const _w = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Md(e, t) {
  ie(t, !0), Oe(e, _w);
  const n = m(t, "noneParameterText", 7, "无输入参数"), r = m(t, "dataKeyName", 7, "parameters"), o = m(t, "useChildrenOnly", 7);
  let i = je(), s = /* @__PURE__ */ N(() => bn(i)), a = /* @__PURE__ */ N(() => [...c(s)?.current?.data?.[r()] || []]);
  var l = ww(), u = z(l);
  {
    var d = (f) => {
      var h = mw();
      ye(4), O(f, h);
    };
    oe(u, (f) => {
      c(a).length !== 0 && f(d);
    });
  }
  var g = V(u, 2);
  return lt(
    g,
    19,
    () => c(a),
    (f) => f.id,
    (f, h, v) => {
      Ad(f, {
        get parameter() {
          return c(h);
        },
        get index() {
          return c(v);
        },
        get dataKeyName() {
          return r();
        },
        get useChildrenOnly() {
          return o();
        }
      });
    },
    (f) => {
      var h = yw(), v = z(h, !0);
      I(h), ke(() => $e(v, n())), O(f, h);
    }
  ), I(l), O(e, l), se({
    get noneParameterText() {
      return n();
    },
    set noneParameterText(f = "无输入参数") {
      n(f), p();
    },
    get dataKeyName() {
      return r();
    },
    set dataKeyName(f = "parameters") {
      r(f), p();
    },
    get useChildrenOnly() {
      return o();
    },
    set useChildrenOnly(f) {
      o(f), p();
    }
  });
}
ne(Md, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
const is = (e, t) => {
  if (e === t) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Array.isArray(e), r = Array.isArray(t);
  if (n !== r) return !1;
  if (n && r) {
    if (e.length !== t.length) return !1;
    for (let o = 0; o < e.length; o++)
      if (!is(e[o], t[o])) return !1;
    return !0;
  } else {
    const o = Object.keys(e), i = Object.keys(t);
    if (o.length !== i.length) return !1;
    for (const s of o)
      if (!(s in t) || !is(e[s], t[s])) return !1;
    return !0;
  }
};
var xw = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), bw = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Cw = /* @__PURE__ */ X('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">消息内容</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const kw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Od(e, t) {
  ie(t, !0), Oe(e, kw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Le(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = je(), { addParameter: i } = Bt(), { updateNodeData: s } = ot();
  return We(() => {
    if (n().confirms) {
      const a = n().confirms.map((l) => ({
        // id?: string;
        // name?: string;
        // nameDisabled?: boolean;
        // dataType?: string;
        // dataTypeDisabled?: boolean;
        // ref?: string;
        // refType?: string;
        // value?: string;
        // description?: string;
        // required?: boolean;
        // defaultValue?: string;
        // deleteDisabled?: boolean;
        // addChildDisabled?: boolean;
        // children?: Parameter[];
        ...l,
        nameDisabled: !0,
        dataTypeDisabled: !0,
        dataType: l.selectionMode === "multiple" ? "Array" : "String",
        addChildDisabled: !0
      }));
      is(a, n().outputDefs) || s(o, () => ({ outputDefs: a }));
    }
  }), Ot(e, Ie(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = xw();
        O(l, u);
      },
      children: (l, u) => {
        var d = Cw(), g = le(d), f = z(g);
        De(f, {
          level: 3,
          children: (M, L) => {
            ye();
            var B = Ee("确认数据");
            O(M, B);
          },
          $$slots: { default: !0 }
        });
        var h = V(f, 2);
        Te(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "confirms");
          },
          children: (M, L) => {
            var B = bw();
            O(M, B);
          },
          $$slots: { default: !0 }
        }), I(g);
        var v = V(g, 2);
        Md(v, { dataKeyName: "confirms" });
        var y = V(v, 2);
        De(y, {
          level: 3,
          mt: "10px",
          children: (M, L) => {
            ye();
            var B = Ee("确认消息");
            O(M, B);
          },
          $$slots: { default: !0 }
        });
        var k = V(y, 4), w = z(k);
        const T = /* @__PURE__ */ N(() => n().message || "");
        Ke(w, {
          rows: 5,
          placeholder: "请输入用户需要确认的消息内容",
          style: "width: 100%",
          onchange: (M) => {
            s(o, () => ({ message: M.target.value }));
          },
          get value() {
            return c(T);
          }
        }), I(k);
        var x = V(k, 2), b = z(x);
        De(b, {
          level: 3,
          mt: "10px",
          children: (M, L) => {
            ye();
            var B = Ee("输出参数");
            O(M, B);
          },
          $$slots: { default: !0 }
        }), I(x);
        var E = V(x, 2);
        kn(E, {}), O(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), se({
    get data() {
      return n();
    },
    set data(a) {
      n(a), p();
    }
  });
}
ne(Od, { data: {} }, [], [], !0);
const Ew = {
  startNode: md,
  codeNode: Ed,
  confirmNode: Od,
  llmNode: kd,
  templateNode: Sd,
  httpNode: Nd,
  knowledgeNode: Pd,
  searchEngineNode: Td,
  loopNode: Dd,
  endNode: bd
};
var Sw = /* @__PURE__ */ X("<!> ", 1);
function ss(e, t) {
  ie(t, !0);
  const n = m(t, "icon", 7), r = m(t, "title", 7), o = m(t, "type", 7), i = m(t, "description", 7), s = m(t, "extra", 7);
  return Te(e, {
    draggable: !0,
    ondragstart: (l) => {
      if (!l.dataTransfer)
        return null;
      const u = {
        type: o(),
        data: { title: r(), description: i(), ...s() }
      };
      l.dataTransfer.setData("application/tinyflow", JSON.stringify(u)), l.dataTransfer.effectAllowed = "move";
    },
    get "data-node-type"() {
      return o();
    },
    children: (l, u) => {
      var d = Sw(), g = le(d);
      Ts(g, n);
      var f = V(g);
      ke(() => $e(f, ` ${r() ?? ""}`)), O(l, d);
    },
    $$slots: { default: !0 }
  }), se({
    get icon() {
      return n();
    },
    set icon(l) {
      n(l), p();
    },
    get title() {
      return r();
    },
    set title(l) {
      r(l), p();
    },
    get type() {
      return o();
    },
    set type(l) {
      o(l), p();
    },
    get description() {
      return i();
    },
    set description(l) {
      i(l), p();
    },
    get extra() {
      return s();
    },
    set extra(l) {
      s(l), p();
    }
  });
}
ne(ss, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var Nw = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), Pw = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), Tw = /* @__PURE__ */ X('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Vd(e, t) {
  ie(t, !0);
  let n = /* @__PURE__ */ Ne("base"), r = /* @__PURE__ */ Ne("show");
  const o = [
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>',
      title: "开始节点",
      type: "startNode",
      sortNo: 100,
      description: "开始定义输入参数"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>',
      title: "循环",
      type: "loopNode",
      sortNo: 200,
      description: "用于循环执行任务"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>',
      title: "大模型",
      type: "llmNode",
      sortNo: 300,
      description: "使用大模型处理问题"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>',
      title: "知识库",
      type: "knowledgeNode",
      sortNo: 400,
      description: "通过知识库获取内容"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>',
      title: "搜索引擎",
      type: "searchEngineNode",
      sortNo: 500,
      description: "通过搜索引擎搜索内容"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>',
      title: "Http 请求",
      type: "httpNode",
      sortNo: 600,
      description: "通过 HTTP 请求获取数据"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>',
      title: "动态代码",
      type: "codeNode",
      sortNo: 700,
      description: "动态执行代码"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>',
      title: "内容模板",
      type: "templateNode",
      sortNo: 800,
      description: "通过模板引擎生成内容"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.3873 13.4975L17.9403 20.5117L13.2418 22.2218L10.6889 15.2076L6.79004 17.6529L8.4086 1.63318L19.9457 12.8646L15.3873 13.4975ZM15.3768 19.3163L12.6618 11.8568L15.6212 11.4459L9.98201 5.9561L9.19088 13.7863L11.7221 12.1988L14.4371 19.6583L15.3768 19.3163Z"></path></svg>',
      title: "用户确认",
      type: "confirmNode",
      sortNo: 900,
      description: "确认继续或选择内容"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>',
      title: "结束节点",
      type: "endNode",
      sortNo: 1e3,
      description: "结束定义输出参数"
    }
  ], i = [
    { label: "基础节点", value: "base" },
    { label: "业务工具", value: "tools" }
  ], s = [], a = Ln(), l = a.customNodes;
  if (l) {
    const w = Object.keys(l).sort((T, x) => (l[T].sortNo || 0) - (l[x].sortNo || 0));
    for (let T of w)
      l[T].group === "base" ? o.push({ type: T, ...l[T] }) : s.push({
        icon: l[T].icon,
        title: l[T].title,
        type: T
      });
    o.sort((T, x) => (T.sortNo || 0) - (x.sortNo || 0));
  }
  if (a.hiddenNodes) {
    const w = typeof a.hiddenNodes == "function" ? a.hiddenNodes() : a.hiddenNodes;
    if (Array.isArray(w)) {
      for (let T of w)
        for (let x = 0; x < o.length; x++)
          if (o[x].type === T) {
            o.splice(x, 1);
            break;
          }
    }
  }
  var u = Tw(), d = z(u), g = z(d), f = z(g);
  ed(f, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (w) => {
      Z(n, w.value.toString(), !0);
    }
  }), I(g);
  var h = V(g, 2), v = z(h);
  lt(v, 21, () => o, hr, (w, T) => {
    ss(w, Ie(() => c(T)));
  }), I(v);
  var y = V(v, 2);
  lt(y, 21, () => s, hr, (w, T) => {
    ss(w, Ie(() => c(T)));
  }), I(y), I(h), I(d);
  var k = V(d, 2);
  Te(k, {
    onclick: () => {
      Z(r, c(r) ? "" : "show", !0);
    },
    children: (w, T) => {
      var x = Me(), b = le(x);
      {
        var E = (L) => {
          var B = Nw();
          O(L, B);
        }, M = (L) => {
          var B = Pw();
          O(L, B);
        };
        oe(b, (L) => {
          c(r) === "show" ? L(E) : L(M, !1);
        });
      }
      O(w, x);
    },
    $$slots: { default: !0 }
  }), I(u), ke(() => {
    yt(u, 1, `tf-toolbar ${c(r) ?? ""}`), ft(v, `display: ${c(n) === "base" ? "flex" : "none"}`), ft(y, `display: ${c(n) !== "base" ? "flex" : "none"}`);
  }), O(e, u), se();
}
ne(Vd, {}, [], [], !0);
const Dw = () => ({ getNode: (t) => qe.getNode(t) }), Aw = () => ({ ensureParentInNodesBefore: (t, n) => {
  qe.updateNodes((r) => {
    let o = -1;
    for (let a = 0; a < r.length; a++)
      if (r[a].id === t) {
        o = a;
        break;
      }
    if (o <= 0)
      return r;
    let i = -1;
    for (let a = 0; a < o; a++)
      if (r[a].parentId === t || r[a].id === n) {
        i = a;
        break;
      }
    if (i == -1)
      return r;
    const s = r[o];
    for (let a = o; a > i; a--)
      r[a] = r[a - 1];
    return r[i] = s, r;
  });
} }), Mw = () => ({ getEdgesByTarget: (t) => qe.getEdges().filter((r) => r.target === t) });
var Ow = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Vw = /* @__PURE__ */ X('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Hw = /* @__PURE__ */ X('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Lw = /* @__PURE__ */ X('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), $w = /* @__PURE__ */ X('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input/></div></div>', 1), Iw = /* @__PURE__ */ X('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), zw = /* @__PURE__ */ X('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Rw = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Bw = /* @__PURE__ */ X('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), qw = /* @__PURE__ */ X("<!> <!> <div></div> <!>", 1);
const Kw = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Hd(e, t) {
  ie(t, !0), Oe(e, Kw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Le(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = je(), { addParameter: i } = Bt(), s = ot(), { updateNodeData: a } = s, l = (w) => {
    a(o, w);
  }, u = (w, T) => {
    l({ [w]: T.target?.value });
  }, d = { ...r, id: o, data: n() }, g = document.createElement("div"), h = Ln().customNodes[t.type];
  h.render?.(g, d, s);
  const v = h.forms;
  let y;
  We(() => {
    n().expand && y && y.append(g);
  }), We(() => {
    n() && h.onUpdate?.(g, { ...d, data: n() });
  }), We(() => {
    !n().parameters && h.parameters && l({
      parameters: Qo(JSON.parse(JSON.stringify(h.parameters)))
    });
  }), We(() => {
    !n().outputDefs && h.outputDefs && l({
      outputDefs: Qo(JSON.parse(JSON.stringify(h.outputDefs)))
    });
  });
  const k = /* @__PURE__ */ N(() => ({ ...n(), description: h.description }));
  return Ot(e, Ie(
    {
      get data() {
        return c(k);
      }
    },
    () => r,
    {
      icon: (T) => {
        var x = Me(), b = le(x);
        Ts(b, () => h.icon), O(T, x);
      },
      children: (T, x) => {
        var b = qw(), E = le(b);
        {
          var M = (S) => {
            var A = Vw(), _ = le(A), P = z(_);
            De(P, {
              level: 3,
              children: (D, K) => {
                ye();
                var F = Ee("输入参数");
                O(D, F);
              },
              $$slots: { default: !0 }
            });
            var C = V(P, 2);
            {
              var H = (D) => {
                Te(D, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    i(o);
                  },
                  children: (K, F) => {
                    var W = Ow();
                    O(K, W);
                  },
                  $$slots: { default: !0 }
                });
              };
              oe(C, (D) => {
                h.parametersAddEnable !== !1 && D(H);
              });
            }
            I(_);
            var R = V(_, 2);
            vt(R, {}), O(S, A);
          };
          oe(E, (S) => {
            h.parametersEnable !== !1 && S(M);
          });
        }
        var L = V(E, 2);
        {
          var B = (S) => {
            var A = Me(), _ = le(A);
            lt(_, 17, () => v, hr, (P, C) => {
              var H = Me(), R = le(H);
              {
                var D = (F) => {
                  var W = Hw(), Q = le(W), G = z(Q, !0);
                  I(Q);
                  var J = V(Q, 2), ue = z(J);
                  const re = /* @__PURE__ */ N(() => n()[c(C).name] || c(C).defaultValue);
                  Je(ue, Ie(
                    {
                      get placeholder() {
                        return c(C).placeholder;
                      },
                      style: "width: 100%",
                      get value() {
                        return c(re);
                      }
                    },
                    () => c(C).attrs,
                    {
                      onchange: (j) => {
                        u(c(C).name, j);
                      }
                    }
                  )), I(J), ke(() => $e(G, c(C).label)), O(F, W);
                }, K = (F, W) => {
                  {
                    var Q = (J) => {
                      var ue = Lw(), re = le(ue), j = z(re, !0);
                      I(re);
                      var _e = V(re, 2), ve = z(_e);
                      const ee = /* @__PURE__ */ N(() => n()[c(C).name] || c(C).defaultValue);
                      Ke(ve, Ie(
                        {
                          rows: 3,
                          get placeholder() {
                            return c(C).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return c(ee);
                          }
                        },
                        () => c(C).attrs,
                        {
                          onchange: (ae) => {
                            u(c(C).name, ae);
                          }
                        }
                      )), I(_e), ke(() => $e(j, c(C).label)), O(J, ue);
                    }, G = (J, ue) => {
                      {
                        var re = (_e) => {
                          var ve = $w(), ee = le(ve), ae = z(ee, !0);
                          I(ee);
                          var de = V(ee, 2), te = z(de), ge = z(te), ce = z(ge);
                          I(ge);
                          var pe = V(ge, 2);
                          Xt(pe);
                          var q = (Fe) => l({ [c(C).name]: parseFloat(Fe.target.value) });
                          et(
                            pe,
                            () => ({
                              class: "nodrag",
                              type: "range",
                              ...c(C).attrs,
                              value: n()[c(C).name] ?? c(C).defaultValue,
                              oninput: q
                            }),
                            void 0,
                            "svelte-q0cqsa"
                          ), I(te), I(de), ke(() => {
                            $e(ae, c(C).label), $e(ce, `${c(C).description ?? ""}: ${n()[c(C).name] ?? c(C).defaultValue ?? ""}`);
                          }), O(_e, ve);
                        }, j = (_e, ve) => {
                          {
                            var ee = (de) => {
                              var te = Iw(), ge = le(te), ce = z(ge, !0);
                              I(ge);
                              var pe = V(ge, 2), q = z(pe);
                              const Fe = /* @__PURE__ */ N(() => c(C).options || []), Ve = /* @__PURE__ */ N(() => n()[c(C).name] ? [n()[c(C).name]] : [c(C).defaultValue]);
                              dt(q, {
                                get items() {
                                  return c(Fe);
                                },
                                style: "width: 100%",
                                get placeholder() {
                                  return c(C).placeholder;
                                },
                                onSelect: (fe) => {
                                  const Se = fe.value;
                                  l({ [c(C).name]: Se });
                                },
                                get value() {
                                  return c(Ve);
                                }
                              }), I(pe), ke(() => $e(ce, c(C).label)), O(de, te);
                            }, ae = (de, te) => {
                              {
                                var ge = (pe) => {
                                  var q = zw(), Fe = le(q), Ve = z(Fe, !0);
                                  I(Fe);
                                  var fe = V(Fe, 2), Se = z(fe);
                                  const be = /* @__PURE__ */ N(() => c(C).chosen?.buttonText);
                                  Qu(Se, {
                                    style: "width: 100%",
                                    get placeholder() {
                                      return c(C).placeholder;
                                    },
                                    get buttonText() {
                                      return c(be);
                                    },
                                    onChosen: (Ze, wt, Ge) => {
                                      c(C).chosen?.onChosen?.(l, Ze, wt, Ge);
                                    },
                                    get value() {
                                      return n()[c(C).chosen?.valueDataKey || ""];
                                    },
                                    get label() {
                                      return n()[c(C).chosen?.labelDataKey || ""];
                                    }
                                  }), I(fe), ke(() => $e(Ve, c(C).label)), O(pe, q);
                                }, ce = (pe, q) => {
                                  {
                                    var Fe = (Ve) => {
                                      De(Ve, Ie({ level: 3, mt: "10px" }, () => c(C).attrs, {
                                        children: (fe, Se) => {
                                          ye();
                                          var be = Ee();
                                          ke(() => $e(be, c(C).label)), O(fe, be);
                                        },
                                        $$slots: { default: !0 }
                                      }));
                                    };
                                    oe(
                                      pe,
                                      (Ve) => {
                                        c(C).type === "heading" && Ve(Fe);
                                      },
                                      q
                                    );
                                  }
                                };
                                oe(
                                  de,
                                  (pe) => {
                                    c(C).type === "chosen" ? pe(ge) : pe(ce, !1);
                                  },
                                  te
                                );
                              }
                            };
                            oe(
                              _e,
                              (de) => {
                                c(C).type === "select" ? de(ee) : de(ae, !1);
                              },
                              ve
                            );
                          }
                        };
                        oe(
                          J,
                          (_e) => {
                            c(C).type === "slider" ? _e(re) : _e(j, !1);
                          },
                          ue
                        );
                      }
                    };
                    oe(
                      F,
                      (J) => {
                        c(C).type === "textarea" ? J(Q) : J(G, !1);
                      },
                      W
                    );
                  }
                };
                oe(R, (F) => {
                  c(C).type === "input" ? F(D) : F(K, !1);
                });
              }
              O(P, H);
            }), O(S, A);
          };
          oe(L, (S) => {
            v && S(B);
          });
        }
        var Y = V(L, 2);
        Nt(Y, (S) => y = S, () => y);
        var U = V(Y, 2);
        {
          var $ = (S) => {
            var A = Bw(), _ = le(A), P = z(_);
            De(P, {
              level: 3,
              mt: "10px",
              children: (D, K) => {
                ye();
                var F = Ee("输出参数");
                O(D, F);
              },
              $$slots: { default: !0 }
            });
            var C = V(P, 2);
            {
              var H = (D) => {
                Te(D, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    i(o, "outputDefs");
                  },
                  children: (K, F) => {
                    var W = Rw();
                    O(K, W);
                  },
                  $$slots: { default: !0 }
                });
              };
              oe(C, (D) => {
                h.outputDefsAddEnable !== !1 && D(H);
              });
            }
            I(_);
            var R = V(_, 2);
            kn(R, {}), O(S, A);
          };
          oe(U, (S) => {
            h.outputDefsEnable !== !1 && S($);
          });
        }
        ke(() => {
          ft(Y, h.rootStyle || ""), yt(Y, 1, xn(h.rootClass), "svelte-q0cqsa");
        }), O(T, b);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), se({
    get data() {
      return n();
    },
    set data(w) {
      n(w), p();
    }
  });
}
ne(Hd, { data: {} }, [], [], !0);
const Fw = () => ({ updateEdgeData: (t, n, r) => {
  const o = qe.getEdge(t);
  if (!o)
    return;
  const i = typeof n == "function" ? n(o) : n;
  o.data = r?.replace ? i : { ...o.data, ...i }, qe.updateEdges((s) => s.map((a) => a.id === t ? o : a));
} }), Zw = () => ({ deleteEdge: (t) => {
  qe.removeEdge(t);
} });
var Yw = /* @__PURE__ */ X('<div class="panel-content svelte-80qc4q"><div>边属性设置</div> <div class="setting-title svelte-80qc4q">边条件设置</div> <div class="setting-item svelte-80qc4q"><!></div> <div class="setting-item svelte-80qc4q" style="padding: 8px 0"><!> <!></div></div>'), Ww = /* @__PURE__ */ X("<!> <!> <!> <!>", 1), Xw = /* @__PURE__ */ X('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const jw = {
  hash: "svelte-80qc4q",
  code: ".panel-content.svelte-80qc4q {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-80qc4q {margin:10px 0;font-size:12px;color:#999;}.setting-item.svelte-80qc4q {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function Ld(e, t) {
  ie(t, !0), Oe(e, jw);
  const n = m(t, "onInit", 7), r = ot();
  n()(r);
  let o = /* @__PURE__ */ Ne(!1), i = /* @__PURE__ */ Ne(null);
  const { updateEdgeData: s } = Fw(), a = (C) => {
    C.preventDefault(), C.dataTransfer && (C.dataTransfer.dropEffect = "move");
  }, l = (C) => {
    C.preventDefault();
    const H = r.screenToFlowPosition({ x: C.clientX - 250, y: C.clientY - 100 }), R = C.dataTransfer?.getData("application/tinyflow");
    if (!R)
      return;
    const D = JSON.parse(R), K = { id: `node_${Qn()}`, position: H, data: {}, ...D };
    qe.addNode(K), qe.selectNodeOnly(K.id);
  }, { getNode: u } = Dw(), d = (C) => {
    const H = u(C.source), R = u(C.target);
    if (C.sourceHandle === "loop_handle" || H.parentId) {
      const D = r.getEdges();
      for (let K of D)
        if (K.target === C.target) {
          const F = u(K.source);
          if (C.sourceHandle === "loop_handle" && F.parentId !== H.id || H.parentId && F.parentId !== H.parentId)
            return !1;
        }
    }
    return !(!H.parentId && R.parentId && R.parentId !== H.id);
  }, { ensureParentInNodesBefore: g } = Aw(), f = (C, H) => {
    if (!H.isValid)
      return;
    const R = H.toNode;
    if (R.parentId)
      return;
    const D = H.fromNode, K = H.fromHandle, F = { position: { ...R.position } };
    if (K.id === "loop_handle" ? F.parentId = D.id : D.parentId && (F.parentId = D.parentId), F.parentId) {
      const W = u(F.parentId);
      F.position = {
        x: R.position.x - W.position.x,
        y: R.position.y - W.position.y
      }, g(F.parentId, R.id), r.updateNode(R.id, F);
    }
    setTimeout(() => {
      qe.getEdges().forEach((W) => {
        W.target === R.id && W.source == D.id && (Z(o, !0), Z(i, W, !0));
      });
    });
  }, { getEdgesByTarget: h } = Mw(), v = (C) => {
    C.edges.forEach((R) => {
      R.id === c(i)?.id && (Z(i, null), Z(o, !1));
      const D = u(R.target);
      if (D && D.parentId) {
        const K = h(R.target), F = u(D.parentId);
        if (K.length === 0)
          r.updateNode(D.id, {
            parentId: void 0,
            position: {
              x: D.position.x + F.position.x,
              y: D.position.y + F.position.y
            }
          });
        else {
          let W = !1;
          for (let Q = 0; Q < K.length; Q++) {
            const G = K[Q], J = u(G.source);
            if (J.parentId || J.type === "loopNode") {
              W = !0;
              break;
            }
          }
          W || r.updateNode(D.id, {
            parentId: void 0,
            position: {
              x: D.position.x + F.position.x,
              y: D.position.y + F.position.y
            }
          });
        }
      }
    });
  }, { deleteEdge: y } = Zw(), k = (C, H) => {
  }, w = (C) => {
  }, T = {
    // ...nodeTypes
  }, x = Ln().customNodes;
  if (x)
    for (let C of Object.keys(x))
      T[C] = Hd;
  const b = Ln().onDataChange;
  We(() => {
    b?.({
      nodes: qe.getNodes(),
      edges: qe.getEdges(),
      viewport: qe.getViewport()
    });
  });
  var E = Xw(), M = z(E);
  const L = /* @__PURE__ */ N(() => ({ ...Ew, ...T }));
  var B = qe.getNodes, Y = qe.setNodes, U = qe.getEdges, $ = qe.setEdges, S = qe.getViewport, A = qe.setViewport;
  const _ = /* @__PURE__ */ N(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: Yr.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  Iu(M, {
    get nodeTypes() {
      return c(L);
    },
    get nodes() {
      return B();
    },
    set nodes(C) {
      Y(C);
    },
    get edges() {
      return U();
    },
    set edges(C) {
      $(C);
    },
    get viewport() {
      return S();
    },
    set viewport(C) {
      A(C);
    },
    class: "tinyflow-logo",
    ondrop: l,
    ondragover: a,
    isValidConnection: d,
    onconnectend: f,
    onconnectstart: k,
    onconnect: w,
    connectionRadius: 50,
    onedgeclick: (C) => {
      Z(o, !0), Z(i, C.edge, !0);
    },
    onbeforeconnect: (C) => ({ ...C, id: Qn() }),
    ondelete: v,
    onclick: (C) => {
      const H = C.target;
      H.classList.contains("svelte-flow__edge-interaction") || H.classList.contains("panel-content") || H.closest(".panel-content") || (Z(o, !1), Z(i, null));
    },
    get defaultEdgeOptions() {
      return c(_);
    },
    children: (C, H) => {
      var R = Ww(), D = le(R);
      Xu(D, {});
      var K = V(D, 2);
      Zu(K, {});
      var F = V(K, 2);
      Gu(F, {});
      var W = V(F, 2);
      {
        var Q = (G) => {
          uo(G, {
            children: (J, ue) => {
              var re = Yw(), j = V(z(re), 4), _e = z(j);
              const ve = /* @__PURE__ */ N(() => c(i)?.data?.condition);
              Ke(_e, {
                rows: 3,
                placeholder: "请输入边条件",
                style: "width: 100%",
                get value() {
                  return c(ve);
                },
                onchange: (te) => {
                  c(i) && s(c(i).id, { condition: te.target?.value });
                }
              }), I(j);
              var ee = V(j, 2), ae = z(ee);
              Te(ae, {
                onclick: () => {
                  y(c(i)?.id), Z(o, !1);
                },
                children: (te, ge) => {
                  ye();
                  var ce = Ee("删除");
                  O(te, ce);
                },
                $$slots: { default: !0 }
              });
              var de = V(ae, 2);
              Te(de, {
                primary: !0,
                onclick: () => {
                  Z(o, !1);
                },
                children: (te, ge) => {
                  ye();
                  var ce = Ee("保存");
                  O(te, ce);
                },
                $$slots: { default: !0 }
              }), I(ee), I(re), O(J, re);
            },
            $$slots: { default: !0 }
          });
        };
        oe(W, (G) => {
          c(o) && G(Q);
        });
      }
      O(C, R);
    },
    $$slots: { default: !0 }
  });
  var P = V(M, 2);
  return Vd(P, {}), I(E), O(e, E), se({
    get onInit() {
      return n();
    },
    set onInit(C) {
      n(C), p();
    }
  });
}
ne(Ld, { onInit: {} }, [], [], !0);
function Gw(e, t) {
  ie(t, !0);
  const n = m(t, "options", 7), r = m(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  return qe.init(o?.nodes || [], o?.edges || []), fr("tinyflow_options", n()), zu(e, {
    children: (i, s) => {
      Ld(i, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), se({
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
customElements.define("tinyflow-component", ne(Gw, { options: {}, onInit: {} }, [], [], !1));
export {
  Qw as Tinyflow
};
//# sourceMappingURL=index.js.map
