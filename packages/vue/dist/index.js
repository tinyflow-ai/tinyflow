import { defineComponent as Hd, ref as Ad, onMounted as Id, onUnmounted as Zd, createElementBlock as qd, openBlock as Bd, normalizeStyle as Kd, normalizeClass as Rd } from "vue";
const jd = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(jd);
const ss = 1, as = 2, gl = 4, Yd = 8, Wd = 16, Xd = 1, Fd = 2, hl = 4, Gd = 8, Jd = 16, vl = 1, Ud = 2, ls = "[", us = "[!", cs = "]", Bn = {}, ot = Symbol(), Qd = "http://www.w3.org/1999/xhtml", ef = "http://www.w3.org/2000/svg", tf = "@attach", nf = !1;
var Jr = Array.isArray, rf = Array.prototype.indexOf, ds = Array.from, Do = Object.keys, zo = Object.defineProperty, un = Object.getOwnPropertyDescriptor, ml = Object.getOwnPropertyDescriptors, yl = Object.prototype, of = Array.prototype, Qo = Object.getPrototypeOf, oa = Object.isExtensible;
function _r(e) {
  return typeof e == "function";
}
const nt = () => {
};
function sf(e) {
  return e();
}
function Mo(e) {
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
function Ur(e, t) {
  if (Array.isArray(e))
    return e;
  if (t === void 0 || !(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const kt = 2, fs = 4, Qr = 8, ps = 16, vn = 32, Qn = 64, gs = 128, xt = 256, Oo = 512, Ct = 1024, fn = 2048, er = 4096, cn = 8192, ei = 16384, wl = 32768, xr = 65536, ia = 1 << 17, af = 1 << 18, bl = 1 << 19, Mi = 1 << 20, hs = 1 << 21, jt = Symbol("$state"), vs = Symbol("legacy props"), lf = Symbol(""), xl = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), uf = 1, ms = 3, cr = 8;
function $l(e) {
  return e === this.v;
}
function kl(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Cl(e) {
  return !kl(e, this.v);
}
function cf(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function df() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ff(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function pf() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function gf() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function hf(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function vf() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function mf() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function yf() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let $r = !1, wf = !1;
function bf() {
  $r = !0;
}
const xf = [];
function _l(e, t = !1) {
  return ko(e, /* @__PURE__ */ new Map(), "", xf);
}
function ko(e, t, n, r, o = null) {
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
    if (Jr(e)) {
      var s = (
        /** @type {Snapshot<any>} */
        Array(e.length)
      );
      t.set(e, s), o !== null && t.set(o, s);
      for (var a = 0; a < e.length; a += 1) {
        var l = e[a];
        a in e && (s[a] = ko(l, t, n, r));
      }
      return s;
    }
    if (Qo(e) === yl) {
      s = {}, t.set(e, s), o !== null && t.set(o, s);
      for (var u in e)
        s[u] = ko(e[u], t, n, r);
      return s;
    }
    if (e instanceof Date)
      return (
        /** @type {Snapshot<T>} */
        structuredClone(e)
      );
    if (typeof /** @type {T & { toJSON?: any } } */
    e.toJSON == "function")
      return ko(
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
function ys(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let Ie = null;
function sa(e) {
  Ie = e;
}
function Pn(e) {
  return (
    /** @type {T} */
    Sl().get(e)
  );
}
function dr(e, t) {
  return Sl().set(e, t), t;
}
function ue(e, t = !1, n) {
  Ie = {
    p: Ie,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  }, $r && !t && (Ie.l = {
    s: null,
    u: null,
    r1: [],
    r2: Wn(!1)
  });
}
function ce(e) {
  var t = (
    /** @type {ComponentContext} */
    Ie
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Hl(r);
  }
  return e !== void 0 && (t.x = e), Ie = t.p, e ?? /** @type {T} */
  {};
}
function ti() {
  return !$r || Ie !== null && Ie.l === null;
}
function Sl(e) {
  return Ie === null && ys(), Ie.c ??= new Map($f(Ie) || void 0);
}
function $f(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function Nt(e) {
  if (typeof e != "object" || e === null || jt in e)
    return e;
  const t = Qo(e);
  if (t !== yl && t !== of)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Jr(e), o = /* @__PURE__ */ Ce(0), i = jn, s = (a) => {
    if (jn === i)
      return a();
    var l = De, u = jn;
    Nn(null), ca(i);
    var d = a();
    return Nn(l), ca(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ Ce(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && vf();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var p = /* @__PURE__ */ Ce(u.value);
          return n.set(l, p), p;
        }) : X(d, u.value, !0), !0;
      },
      deleteProperty(a, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in a) {
            const f = s(() => /* @__PURE__ */ Ce(ot));
            n.set(l, f), Co(o);
          }
        } else {
          if (r && typeof l == "string") {
            var d = (
              /** @type {Source<number>} */
              n.get("length")
            ), p = Number(l);
            Number.isInteger(p) && p < d.v && X(d, p);
          }
          X(u, ot), Co(o);
        }
        return !0;
      },
      get(a, l, u) {
        if (l === jt)
          return e;
        var d = n.get(l), p = l in a;
        if (d === void 0 && (!p || un(a, l)?.writable) && (d = s(() => {
          var g = Nt(p ? a[l] : ot), h = /* @__PURE__ */ Ce(g);
          return h;
        }), n.set(l, d)), d !== void 0) {
          var f = c(d);
          return f === ot ? void 0 : f;
        }
        return Reflect.get(a, l, u);
      },
      getOwnPropertyDescriptor(a, l) {
        var u = Reflect.getOwnPropertyDescriptor(a, l);
        if (u && "value" in u) {
          var d = n.get(l);
          d && (u.value = c(d));
        } else if (u === void 0) {
          var p = n.get(l), f = p?.v;
          if (p !== void 0 && f !== ot)
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
        if (l === jt)
          return !0;
        var u = n.get(l), d = u !== void 0 && u.v !== ot || Reflect.has(a, l);
        if (u !== void 0 || Pe !== null && (!d || un(a, l)?.writable)) {
          u === void 0 && (u = s(() => {
            var f = d ? Nt(a[l]) : ot, g = /* @__PURE__ */ Ce(f);
            return g;
          }), n.set(l, u));
          var p = c(u);
          if (p === ot)
            return !1;
        }
        return d;
      },
      set(a, l, u, d) {
        var p = n.get(l), f = l in a;
        if (r && l === "length")
          for (var g = u; g < /** @type {Source<number>} */
          p.v; g += 1) {
            var h = n.get(g + "");
            h !== void 0 ? X(h, ot) : g in a && (h = s(() => /* @__PURE__ */ Ce(ot)), n.set(g + "", h));
          }
        if (p === void 0)
          (!f || un(a, l)?.writable) && (p = s(() => /* @__PURE__ */ Ce(void 0)), X(p, Nt(u)), n.set(l, p));
        else {
          f = p.v !== ot;
          var y = s(() => Nt(u));
          X(p, y);
        }
        var k = Reflect.getOwnPropertyDescriptor(a, l);
        if (k?.set && k.set.call(d, u), !f) {
          if (r && typeof l == "string") {
            var w = (
              /** @type {Source<number>} */
              n.get("length")
            ), L = Number(l);
            Number.isInteger(L) && L >= w.v && X(w, L + 1);
          }
          Co(o);
        }
        return !0;
      },
      ownKeys(a) {
        c(o);
        var l = Reflect.ownKeys(a).filter((p) => {
          var f = n.get(p);
          return f === void 0 || f.v !== ot;
        });
        for (var [u, d] of n)
          d.v !== ot && !(u in a) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        mf();
      }
    }
  );
}
function aa(e) {
  try {
    if (e !== null && typeof e == "object" && jt in e)
      return e[jt];
  } catch {
  }
  return e;
}
function kf(e, t) {
  return Object.is(aa(e), aa(t));
}
// @__NO_SIDE_EFFECTS__
function kr(e) {
  var t = kt | fn, n = De !== null && (De.f & kt) !== 0 ? (
    /** @type {Derived} */
    De
  ) : null;
  return Pe === null || n !== null && (n.f & xt) !== 0 ? t |= xt : Pe.f |= bl, {
    ctx: Ie,
    deps: null,
    effects: null,
    equals: $l,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      ot
    ),
    wv: 0,
    parent: n ?? Pe,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function S(e) {
  const t = /* @__PURE__ */ kr(e);
  return Xl(t), t;
}
// @__NO_SIDE_EFFECTS__
function ws(e) {
  const t = /* @__PURE__ */ kr(e);
  return t.equals = Cl, t;
}
function El(e) {
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
function Cf(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & kt) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function bs(e) {
  var t, n = Pe;
  Tn(Cf(e));
  try {
    El(e), t = Jl(e);
  } finally {
    Tn(n);
  }
  return t;
}
function Pl(e) {
  var t = bs(e);
  if (e.equals(t) || (e.v = t, e.wv = Fl()), !Ln) {
    var n = (_n || (e.f & xt) !== 0) && e.deps !== null ? er : Ct;
    Jt(e, n);
  }
}
const Kn = /* @__PURE__ */ new Map();
function Wn(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: $l,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Ce(e, t) {
  const n = Wn(e);
  return Xl(n), n;
}
// @__NO_SIDE_EFFECTS__
function Ll(e, t = !1, n = !0) {
  const r = Wn(e);
  return t || (r.equals = Cl), $r && n && Ie !== null && Ie.l !== null && (Ie.l.s ??= []).push(r), r;
}
function X(e, t, n = !1) {
  De !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!zt || (De.f & ia) !== 0) && ti() && (De.f & (kt | ps | ia)) !== 0 && !dn?.includes(e) && yf();
  let r = n ? Nt(t) : t;
  return Oi(e, r);
}
function Oi(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Ln ? Kn.set(e, t) : Kn.set(e, n), e.v = t, (e.f & kt) !== 0 && ((e.f & fn) !== 0 && bs(
      /** @type {Derived} */
      e
    ), Jt(e, (e.f & xt) === 0 ? Ct : er)), e.wv = Fl(), Nl(e, fn), ti() && Pe !== null && (Pe.f & Ct) !== 0 && (Pe.f & (vn | Qn)) === 0 && (Pt === null ? Mf([e]) : Pt.push(e));
  }
  return t;
}
function la(e, t = 1) {
  var n = c(e), r = t === 1 ? n++ : n--;
  return X(e, n), r;
}
function Co(e) {
  X(e, e.v + 1);
}
function Nl(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = ti(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      (a & fn) === 0 && (!r && s === Pe || (Jt(s, t), (a & (Ct | xt)) !== 0 && ((a & kt) !== 0 ? Nl(
        /** @type {Derived} */
        s,
        er
      ) : ri(
        /** @type {Effect} */
        s
      ))));
    }
}
function eo(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function _f() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
let be = !1;
function bt(e) {
  be = e;
}
let _e;
function st(e) {
  if (e === null)
    throw eo(), Bn;
  return _e = e;
}
function pn() {
  return st(
    /** @type {TemplateNode} */
    /* @__PURE__ */ en(_e)
  );
}
function A(e) {
  if (be) {
    if (/* @__PURE__ */ en(_e) !== null)
      throw eo(), Bn;
    _e = e;
  }
}
function me(e = 1) {
  if (be) {
    for (var t = e, n = _e; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ en(n);
    _e = n;
  }
}
function Vi() {
  for (var e = 0, t = _e; ; ) {
    if (t.nodeType === cr) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === cs) {
        if (e === 0) return t;
        e -= 1;
      } else (n === ls || n === us) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ en(t)
    );
    t.remove(), t = r;
  }
}
function Tl(e) {
  if (!e || e.nodeType !== cr)
    throw eo(), Bn;
  return (
    /** @type {Comment} */
    e.data
  );
}
var pt, Dl, zl, Ml;
function Hi() {
  if (pt === void 0) {
    pt = window, Dl = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    zl = un(t, "firstChild").get, Ml = un(t, "nextSibling").get, oa(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), oa(n) && (n.__t = void 0);
  }
}
function gn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Fe(e) {
  return zl.call(e);
}
// @__NO_SIDE_EFFECTS__
function en(e) {
  return Ml.call(e);
}
function I(e, t) {
  if (!be)
    return /* @__PURE__ */ Fe(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Fe(_e)
  );
  if (n === null)
    n = _e.appendChild(gn());
  else if (t && n.nodeType !== ms) {
    var r = gn();
    return n?.before(r), st(r), r;
  }
  return st(n), n;
}
function le(e, t) {
  if (!be) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Fe(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ en(n) : n;
  }
  return _e;
}
function V(e, t = 1, n = !1) {
  let r = be ? _e : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ en(r);
  if (!be)
    return r;
  if (n && r?.nodeType !== ms) {
    var i = gn();
    return r === null ? o?.after(i) : r.before(i), st(i), i;
  }
  return st(r), /** @type {TemplateNode} */
  r;
}
function xs(e) {
  e.textContent = "";
}
function Ol(e) {
  Pe === null && De === null && ff(), De !== null && (De.f & xt) !== 0 && Pe === null && df(), Ln && cf();
}
function Sf(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function mn(e, t, n, r = !0) {
  var o = Pe, i = {
    ctx: Ie,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | fn,
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
      Cs(i), i.f |= wl;
    } catch (l) {
      throw mt(i), l;
    }
  else t !== null && ri(i);
  var s = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (bl | gs)) === 0;
  if (!s && r && (o !== null && Sf(i, o), De !== null && (De.f & kt) !== 0)) {
    var a = (
      /** @type {Derived} */
      De
    );
    (a.effects ??= []).push(i);
  }
  return i;
}
function Ef() {
  return De !== null && !zt;
}
function Vl(e) {
  const t = mn(Qr, null, !1);
  return Jt(t, Ct), t.teardown = e, t;
}
function Re(e) {
  if (Ol(), !De && Pe && (Pe.f & vn) !== 0) {
    var t = (
      /** @type {ComponentContext} */
      Ie
    );
    (t.e ??= []).push(e);
  } else
    return Hl(e);
}
function Hl(e) {
  return mn(fs | hs, e, !1);
}
function Al(e) {
  return Ol(), mn(Qr | hs, e, !0);
}
function $s(e) {
  const t = mn(Qn, e, !0);
  return () => {
    mt(t);
  };
}
function Pf(e) {
  const t = mn(Qn, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? fr(t, () => {
      mt(t), r(void 0);
    }) : (mt(t), r(void 0));
  });
}
function to(e) {
  return mn(fs, e, !1);
}
function no(e) {
  return mn(Qr, e, !0);
}
function xe(e, t = [], n = kr) {
  const r = t.map(n);
  return On(() => e(...r.map(c)));
}
function On(e, t = 0) {
  var n = mn(Qr | ps | t, e, !0);
  return n;
}
function Gt(e, t = !0) {
  return mn(Qr | vn, e, !0, t);
}
function Il(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Ln, r = De;
    ua(!0), Nn(null);
    try {
      t.call(null);
    } finally {
      ua(n), Nn(r);
    }
  }
}
function Zl(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    n.ac?.abort(xl);
    var r = n.next;
    (n.f & Qn) !== 0 ? n.parent = null : mt(n, t), n = r;
  }
}
function Lf(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & vn) === 0 && mt(t), t = n;
  }
}
function mt(e, t = !0) {
  var n = !1;
  (t || (e.f & af) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (ql(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), Zl(e, t && !n), Ho(e, 0), Jt(e, ei);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  Il(e);
  var o = e.parent;
  o !== null && o.first !== null && Bl(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function ql(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ en(e)
    );
    e.remove(), e = n;
  }
}
function Bl(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function fr(e, t) {
  var n = [];
  ks(e, n, !0), Kl(n, () => {
    mt(e), t && t();
  });
}
function Kl(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function ks(e, t, n) {
  if ((e.f & cn) === 0) {
    if (e.f ^= cn, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & xr) !== 0 || (r.f & vn) !== 0;
      ks(r, t, i ? n : !1), r = o;
    }
  }
}
function Mr(e) {
  Rl(e, !0);
}
function Rl(e, t) {
  if ((e.f & cn) !== 0) {
    e.f ^= cn;
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & xr) !== 0 || (n.f & vn) !== 0;
      Rl(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
const Nf = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Or = [], Vr = [];
function jl() {
  var e = Or;
  Or = [], Mo(e);
}
function Yl() {
  var e = Vr;
  Vr = [], Mo(e);
}
function ro(e) {
  Or.length === 0 && queueMicrotask(jl), Or.push(e);
}
function Tf(e) {
  Vr.length === 0 && Nf(Yl), Vr.push(e);
}
function Df() {
  Or.length > 0 && jl(), Vr.length > 0 && Yl();
}
function zf(e) {
  var t = (
    /** @type {Effect} */
    Pe
  );
  if ((t.f & wl) === 0) {
    if ((t.f & gs) === 0)
      throw e;
    t.fn(e);
  } else
    Wl(e, t);
}
function Wl(e, t) {
  for (; t !== null; ) {
    if ((t.f & gs) !== 0)
      try {
        t.b.error(e);
        return;
      } catch {
      }
    t = t.parent;
  }
  throw e;
}
let Hr = !1, Ar = null, Rn = !1, Ln = !1;
function ua(e) {
  Ln = e;
}
let Dr = [], De = null, zt = !1;
function Nn(e) {
  De = e;
}
let Pe = null;
function Tn(e) {
  Pe = e;
}
let dn = null;
function Xl(e) {
  De !== null && De.f & Mi && (dn === null ? dn = [e] : dn.push(e));
}
let dt = null, wt = 0, Pt = null;
function Mf(e) {
  Pt = e;
}
let Vo = 1, Ir = 0, jn = Ir;
function ca(e) {
  jn = e;
}
let _n = !1;
function Fl() {
  return ++Vo;
}
function ni(e) {
  var t = e.f;
  if ((t & fn) !== 0)
    return !0;
  if ((t & er) !== 0) {
    var n = e.deps, r = (t & xt) !== 0;
    if (n !== null) {
      var o, i, s = (t & Oo) !== 0, a = r && Pe !== null && !_n, l = n.length;
      if (s || a) {
        var u = (
          /** @type {Derived} */
          e
        ), d = u.parent;
        for (o = 0; o < l; o++)
          i = n[o], (s || !i?.reactions?.includes(u)) && (i.reactions ??= []).push(u);
        s && (u.f ^= Oo), a && d !== null && (d.f & xt) === 0 && (u.f ^= xt);
      }
      for (o = 0; o < l; o++)
        if (i = n[o], ni(
          /** @type {Derived} */
          i
        ) && Pl(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!r || Pe !== null && !_n) && Jt(e, Ct);
  }
  return !1;
}
function Gl(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !dn?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & kt) !== 0 ? Gl(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? Jt(i, fn) : (i.f & Ct) !== 0 && Jt(i, er), ri(
        /** @type {Effect} */
        i
      ));
    }
}
function Jl(e) {
  var t = dt, n = wt, r = Pt, o = De, i = _n, s = dn, a = Ie, l = zt, u = jn, d = e.f;
  dt = /** @type {null | Value[]} */
  null, wt = 0, Pt = null, _n = (d & xt) !== 0 && (zt || !Rn || De === null), De = (d & (vn | Qn)) === 0 ? e : null, dn = null, sa(e.ctx), zt = !1, jn = ++Ir, e.f |= Mi, e.ac !== null && (e.ac.abort(xl), e.ac = null);
  try {
    var p = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (dt !== null) {
      var g;
      if (Ho(e, wt), f !== null && wt > 0)
        for (f.length = wt + dt.length, g = 0; g < dt.length; g++)
          f[wt + g] = dt[g];
      else
        e.deps = f = dt;
      if (!_n || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (d & kt) !== 0 && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (g = wt; g < f.length; g++)
          (f[g].reactions ??= []).push(e);
    } else f !== null && wt < f.length && (Ho(e, wt), f.length = wt);
    if (ti() && Pt !== null && !zt && f !== null && (e.f & (kt | er | fn)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      Pt.length; g++)
        Gl(
          Pt[g],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (Ir++, Pt !== null && (r === null ? r = Pt : r.push(.../** @type {Source[]} */
    Pt))), p;
  } catch (h) {
    zf(h);
  } finally {
    dt = t, wt = n, Pt = r, De = o, _n = i, dn = s, sa(a), zt = l, jn = u, e.f ^= Mi;
  }
}
function Of(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = rf.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & kt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (dt === null || !dt.includes(t)) && (Jt(t, er), (t.f & (xt | Oo)) === 0 && (t.f ^= Oo), El(
    /** @type {Derived} **/
    t
  ), Ho(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Ho(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Of(e, n[r]);
}
function Cs(e) {
  var t = e.f;
  if ((t & ei) === 0) {
    Jt(e, Ct);
    var n = Pe, r = Rn;
    Pe = e, Rn = !0;
    try {
      (t & ps) !== 0 ? Lf(e) : Zl(e), Il(e);
      var o = Jl(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = Vo;
      var i;
      nf && wf && (e.f & fn) !== 0 && e.deps;
    } finally {
      Rn = r, Pe = n;
    }
  }
}
function Vf() {
  try {
    pf();
  } catch (e) {
    if (Ar !== null)
      Wl(e, Ar);
    else
      throw e;
  }
}
function Ul() {
  var e = Rn;
  try {
    var t = 0;
    for (Rn = !0; Dr.length > 0; ) {
      t++ > 1e3 && Vf();
      var n = Dr, r = n.length;
      Dr = [];
      for (var o = 0; o < r; o++) {
        var i = Af(n[o]);
        Hf(i);
      }
      Kn.clear();
    }
  } finally {
    Hr = !1, Rn = e, Ar = null;
  }
}
function Hf(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if ((r.f & (ei | cn)) === 0 && ni(r)) {
        var o = Vo;
        if (Cs(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? Bl(r) : r.fn = null), Vo > o && (r.f & hs) !== 0)
          break;
      }
    }
    for (; n < t; n += 1)
      ri(e[n]);
  }
}
function ri(e) {
  Hr || (Hr = !0, queueMicrotask(Ul));
  for (var t = Ar = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if ((n & (Qn | vn)) !== 0) {
      if ((n & Ct) === 0) return;
      t.f ^= Ct;
    }
  }
  Dr.push(t);
}
function Af(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, o = (r & (vn | Qn)) !== 0, i = o && (r & Ct) !== 0;
    if (!i && (r & cn) === 0) {
      (r & fs) !== 0 ? t.push(n) : o ? n.f ^= Ct : ni(n) && Cs(n);
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
function v(e) {
  for (var t; ; ) {
    if (Df(), Dr.length === 0)
      return Hr = !1, Ar = null, /** @type {T} */
      t;
    Hr = !0, Ul();
  }
}
async function If() {
  await Promise.resolve(), v();
}
function c(e) {
  var t = e.f, n = (t & kt) !== 0;
  if (De !== null && !zt) {
    if (!dn?.includes(e)) {
      var r = De.deps;
      e.rv < Ir && (e.rv = Ir, dt === null && r !== null && r[wt] === e ? wt++ : dt === null ? dt = [e] : (!_n || !dt.includes(e)) && dt.push(e));
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), i = o.parent;
    i !== null && (i.f & xt) === 0 && (o.f ^= xt);
  }
  if (n && !Ln && (o = /** @type {Derived} */
  e, ni(o) && Pl(o)), Ln) {
    if (Kn.has(e))
      return Kn.get(e);
    if (n) {
      o = /** @type {Derived} */
      e;
      var s = o.v;
      return ((o.f & Ct) !== 0 || Ql(o)) && (s = bs(o)), Kn.set(o, s), s;
    }
  }
  return e.v;
}
function Ql(e) {
  if (e.v === ot) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Kn.has(t) || (t.f & kt) !== 0 && Ql(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function et(e) {
  var t = zt;
  try {
    return zt = !0, e();
  } finally {
    zt = t;
  }
}
const Zf = -7169;
function Jt(e, t) {
  e.f = e.f & Zf | t;
}
function qf(e, t) {
  var n = {};
  for (var r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}
function _s(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (jt in e)
      Ai(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && jt in n && Ai(n);
      }
  }
}
function Ai(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        Ai(e[r], t);
      } catch {
      }
    const n = Qo(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = ml(n);
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
function Bf(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, ro(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function Kf(e) {
  be && /* @__PURE__ */ Fe(e) !== null && xs(e);
}
let da = !1;
function Rf() {
  da || (da = !0, document.addEventListener(
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
function jf(e) {
  var t = De, n = Pe;
  Nn(null), Tn(null);
  try {
    return e();
  } finally {
    Nn(t), Tn(n);
  }
}
const eu = /* @__PURE__ */ new Set(), Ii = /* @__PURE__ */ new Set();
function Ss(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || Pr.call(t, i), !i.cancelBubble)
      return jf(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? ro(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function Zi(e, t, n, r = {}) {
  var o = Ss(t, e, n, r);
  return () => {
    e.removeEventListener(t, o, r);
  };
}
function fa(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = Ss(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Vl(() => {
    t.removeEventListener(e, s, i);
  });
}
function yn(e) {
  for (var t = 0; t < e.length; t++)
    eu.add(e[t]);
  for (var n of Ii)
    n(e);
}
function Pr(e) {
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
    zo(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = De, p = Pe;
    Nn(null), Tn(null);
    try {
      for (var f, g = []; i !== null; ) {
        var h = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var y = i["__" + r];
          if (y != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (Jr(y)) {
              var [k, ...w] = y;
              k.apply(i, [e, ...w]);
            } else
              y.call(i, e);
        } catch (L) {
          f ? g.push(L) : f = L;
        }
        if (e.cancelBubble || h === t || h === null)
          break;
        i = h;
      }
      if (f) {
        for (let L of g)
          queueMicrotask(() => {
            throw L;
          });
        throw f;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Nn(d), Tn(p);
    }
  }
}
function Es(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function vt(e, t) {
  var n = (
    /** @type {Effect} */
    Pe
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ee(e, t) {
  var n = (t & vl) !== 0, r = (t & Ud) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (be)
      return vt(_e, null), _e;
    o === void 0 && (o = Es(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ Fe(o)));
    var s = (
      /** @type {TemplateNode} */
      r || Dl ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Fe(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      vt(a, l);
    } else
      vt(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Yf(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & vl) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (be)
      return vt(_e, null), _e;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Es(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ Fe(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ Fe(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ Fe(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ Fe(l);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Fe(u)
      ), p = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      vt(d, p);
    } else
      vt(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function ge(e, t) {
  return /* @__PURE__ */ Yf(e, t, "svg");
}
function $e(e = "") {
  if (!be) {
    var t = gn(e + "");
    return vt(t, t), t;
  }
  var n = _e;
  return n.nodeType !== ms && (n.before(n = gn()), st(n)), vt(n, n), n;
}
function Le() {
  if (be)
    return vt(_e, null), _e;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = gn();
  return e.append(t, n), vt(t, n), e;
}
function N(e, t) {
  if (be) {
    Pe.nodes_end = _e, pn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Wf(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const Xf = [
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
function Ff(e) {
  return Xf.includes(e);
}
const Gf = {
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
function Jf(e) {
  return e = e.toLowerCase(), Gf[e] ?? e;
}
const Uf = ["touchstart", "touchmove"];
function Qf(e) {
  return Uf.includes(e);
}
const ep = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function tp(e) {
  return ep.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function Ve(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function tu(e, t) {
  return nu(e, t);
}
function np(e, t) {
  Hi(), t.intro = t.intro ?? !1;
  const n = t.target, r = be, o = _e;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Fe(n)
    ); i && (i.nodeType !== cr || /** @type {Comment} */
    i.data !== ls); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ en(i);
    if (!i)
      throw Bn;
    bt(!0), st(
      /** @type {Comment} */
      i
    ), pn();
    const s = nu(e, { ...t, anchor: i });
    if (_e === null || _e.nodeType !== cr || /** @type {Comment} */
    _e.data !== cs)
      throw eo(), Bn;
    return bt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === Bn)
      return t.recover === !1 && gf(), Hi(), xs(n), bt(!1), tu(e, t);
    throw s;
  } finally {
    bt(r), st(o);
  }
}
const nr = /* @__PURE__ */ new Map();
function nu(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  Hi();
  var a = /* @__PURE__ */ new Set(), l = (p) => {
    for (var f = 0; f < p.length; f++) {
      var g = p[f];
      if (!a.has(g)) {
        a.add(g);
        var h = Qf(g);
        t.addEventListener(g, Pr, { passive: h });
        var y = nr.get(g);
        y === void 0 ? (document.addEventListener(g, Pr, { passive: h }), nr.set(g, 1)) : nr.set(g, y + 1);
      }
    }
  };
  l(ds(eu)), Ii.add(l);
  var u = void 0, d = Pf(() => {
    var p = n ?? t.appendChild(gn());
    return Gt(() => {
      if (i) {
        ue({});
        var f = (
          /** @type {ComponentContext} */
          Ie
        );
        f.c = i;
      }
      o && (r.$$events = o), be && vt(
        /** @type {TemplateNode} */
        p,
        null
      ), u = e(p, r) || {}, be && (Pe.nodes_end = _e), i && ce();
    }), () => {
      for (var f of a) {
        t.removeEventListener(f, Pr);
        var g = (
          /** @type {number} */
          nr.get(f)
        );
        --g === 0 ? (document.removeEventListener(f, Pr), nr.delete(f)) : nr.set(f, g);
      }
      Ii.delete(l), p !== n && p.parentNode?.removeChild(p);
    };
  });
  return qi.set(u, d), u;
}
let qi = /* @__PURE__ */ new WeakMap();
function rp(e, t) {
  const n = qi.get(e);
  return n ? (qi.delete(e), n(t)) : Promise.resolve();
}
function je(e, t, ...n) {
  var r = e, o = nt, i;
  On(() => {
    o !== (o = t()) && (i && (mt(i), i = null), i = Gt(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, xr), be && (r = _e);
}
function Vn(e) {
  Ie === null && ys(), $r && Ie.l !== null ? op(Ie).m.push(e) : Re(() => {
    const t = et(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function oi(e) {
  Ie === null && ys(), Vn(() => () => et(e));
}
function op(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
function ae(e, t, [n, r] = [0, 0]) {
  be && n === 0 && pn();
  var o = e, i = null, s = null, a = ot, l = n > 0 ? xr : 0, u = !1;
  const d = (f, g = !0) => {
    u = !0, p(g, f);
  }, p = (f, g) => {
    if (a === (a = f)) return;
    let h = !1;
    if (be && r !== -1) {
      if (n === 0) {
        const k = Tl(o);
        k === ls ? r = 0 : k === us ? r = 1 / 0 : (r = parseInt(k.substring(1)), r !== r && (r = a ? 1 / 0 : -1));
      }
      const y = r > n;
      !!a === y && (o = Vi(), st(o), bt(!1), h = !0, r = -1);
    }
    a ? (i ? Mr(i) : g && (i = Gt(() => g(o))), s && fr(s, () => {
      s = null;
    })) : (s ? Mr(s) : g && (s = Gt(() => g(o, [n + 1, r]))), i && fr(i, () => {
      i = null;
    })), h && bt(!0);
  };
  On(() => {
    u = !1, t(d), u || p(null, null);
  }, l), be && (o = _e);
}
function ip(e, t) {
  be && st(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Fe(e)
  ), no(() => {
    var n = t();
    for (var r in n) {
      var o = n[r];
      o ? e.style.setProperty(r, o) : e.style.removeProperty(r);
    }
  });
}
function pr(e, t) {
  return t;
}
function sp(e, t, n, r) {
  for (var o = [], i = t.length, s = 0; s < i; s++)
    ks(t[s].e, o, !0);
  var a = i > 0 && o.length === 0 && n !== null;
  if (a) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    xs(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), kn(e, t[0].prev, t[i - 1].next);
  }
  Kl(o, () => {
    for (var u = 0; u < i; u++) {
      var d = t[u];
      a || (r.delete(d.k), kn(e, d.prev, d.next)), mt(d.e, !a);
    }
  });
}
function at(e, t, n, r, o, i = null) {
  var s = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & gl) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    s = be ? st(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Fe(u)
    ) : u.appendChild(gn());
  }
  be && pn();
  var d = null, p = !1, f = /* @__PURE__ */ ws(() => {
    var g = n();
    return Jr(g) ? g : g == null ? [] : ds(g);
  });
  On(() => {
    var g = c(f), h = g.length;
    if (p && h === 0)
      return;
    p = h === 0;
    let y = !1;
    if (be) {
      var k = Tl(s) === us;
      k !== (h === 0) && (s = Vi(), st(s), bt(!1), y = !0);
    }
    if (be) {
      for (var w = null, L, x = 0; x < h; x++) {
        if (_e.nodeType === cr && /** @type {Comment} */
        _e.data === cs) {
          s = /** @type {Comment} */
          _e, y = !0, bt(!1);
          break;
        }
        var $ = g[x], C = r($, x);
        L = ru(
          _e,
          a,
          w,
          null,
          $,
          C,
          x,
          o,
          t,
          n
        ), a.items.set(C, L), w = L;
      }
      h > 0 && st(Vi());
    }
    be || ap(g, a, s, o, t, r, n), i !== null && (h === 0 ? d ? Mr(d) : d = Gt(() => i(s)) : d !== null && fr(d, () => {
      d = null;
    })), y && bt(!0), c(f);
  }), be && (s = _e);
}
function ap(e, t, n, r, o, i, s) {
  var a = (o & Yd) !== 0, l = (o & (ss | as)) !== 0, u = e.length, d = t.items, p = t.first, f = p, g, h = null, y, k = [], w = [], L, x, $, C;
  if (a)
    for (C = 0; C < u; C += 1)
      L = e[C], x = i(L, C), $ = d.get(x), $ !== void 0 && ($.a?.measure(), (y ??= /* @__PURE__ */ new Set()).add($));
  for (C = 0; C < u; C += 1) {
    if (L = e[C], x = i(L, C), $ = d.get(x), $ === void 0) {
      var M = f ? (
        /** @type {TemplateNode} */
        f.e.nodes_start
      ) : n;
      h = ru(
        M,
        t,
        h,
        h === null ? t.first : h.next,
        L,
        x,
        C,
        r,
        o,
        s
      ), d.set(x, h), k = [], w = [], f = h.next;
      continue;
    }
    if (l && lp($, L, C, o), ($.e.f & cn) !== 0 && (Mr($.e), a && ($.a?.unfix(), (y ??= /* @__PURE__ */ new Set()).delete($))), $ !== f) {
      if (g !== void 0 && g.has($)) {
        if (k.length < w.length) {
          var O = w[0], q;
          h = O.prev;
          var J = k[0], j = k[k.length - 1];
          for (q = 0; q < k.length; q += 1)
            pa(k[q], O, n);
          for (q = 0; q < w.length; q += 1)
            g.delete(w[q]);
          kn(t, J.prev, j.next), kn(t, h, J), kn(t, j, O), f = O, h = j, C -= 1, k = [], w = [];
        } else
          g.delete($), pa($, f, n), kn(t, $.prev, $.next), kn(t, $, h === null ? t.first : h.next), kn(t, h, $), h = $;
        continue;
      }
      for (k = [], w = []; f !== null && f.k !== x; )
        (f.e.f & cn) === 0 && (g ??= /* @__PURE__ */ new Set()).add(f), w.push(f), f = f.next;
      if (f === null)
        continue;
      $ = f;
    }
    k.push($), h = $, f = $.next;
  }
  if (f !== null || g !== void 0) {
    for (var T = g === void 0 ? [] : ds(g); f !== null; )
      (f.e.f & cn) === 0 && T.push(f), f = f.next;
    var _ = T.length;
    if (_ > 0) {
      var z = (o & gl) !== 0 && u === 0 ? n : null;
      if (a) {
        for (C = 0; C < _; C += 1)
          T[C].a?.measure();
        for (C = 0; C < _; C += 1)
          T[C].a?.fix();
      }
      sp(t, T, z, d);
    }
  }
  a && ro(() => {
    if (y !== void 0)
      for ($ of y)
        $.a?.apply();
  }), Pe.first = t.first && t.first.e, Pe.last = h && h.e;
}
function lp(e, t, n, r) {
  (r & ss) !== 0 && Oi(e.v, t), (r & as) !== 0 ? Oi(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function ru(e, t, n, r, o, i, s, a, l, u) {
  var d = (l & ss) !== 0, p = (l & Wd) === 0, f = d ? p ? /* @__PURE__ */ Ll(o, !1, !1) : Wn(o) : o, g = (l & as) === 0 ? s : Wn(s), h = {
    i: g,
    v: f,
    k: i,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    return h.e = Gt(() => a(e, f, g, u), be), h.e.prev = n && n.e, h.e.next = r && r.e, n === null ? t.first = h : (n.next = h, n.e.next = h.e), r !== null && (r.prev = h, r.e.prev = h.e), h;
  } finally {
  }
}
function pa(e, t, n) {
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
      /* @__PURE__ */ en(i)
    );
    o.before(i), i = s;
  }
}
function kn(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function Ps(e, t, n = !1, r = !1, o = !1) {
  var i = e, s = "";
  xe(() => {
    var a = (
      /** @type {Effect} */
      Pe
    );
    if (s === (s = t() ?? "")) {
      be && pn();
      return;
    }
    if (a.nodes_start !== null && (ql(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if (be) {
        _e.data;
        for (var l = pn(), u = l; l !== null && (l.nodeType !== cr || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ en(l);
        if (l === null)
          throw eo(), Bn;
        vt(_e, u), i = st(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var p = Es(d);
      if ((n || r) && (p = /** @type {Element} */
      /* @__PURE__ */ Fe(p)), vt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Fe(p),
        /** @type {TemplateNode} */
        p.lastChild
      ), n || r)
        for (; /* @__PURE__ */ Fe(p); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ Fe(p)
          );
      else
        i.before(p);
    }
  });
}
function Ls(e, t, n) {
  be && pn();
  var r = e, o, i;
  On(() => {
    o !== (o = t()) && (i && (fr(i), i = null), o && (i = Gt(() => n(r, o))));
  }, xr), be && (r = _e);
}
function up(e, t, n, r, o, i) {
  let s = be;
  be && pn();
  var a, l, u = null;
  be && _e.nodeType === uf && (u = /** @type {Element} */
  _e, pn());
  var d = (
    /** @type {TemplateNode} */
    be ? _e : e
  ), p;
  On(() => {
    const f = t() || null;
    var g = f === "svg" ? ef : null;
    f !== a && (p && (f === null ? fr(p, () => {
      p = null, l = null;
    }) : f === l ? Mr(p) : mt(p)), f && f !== l && (p = Gt(() => {
      if (u = be ? (
        /** @type {Element} */
        u
      ) : g ? document.createElementNS(g, f) : document.createElement(f), vt(u, u), r) {
        be && tp(f) && u.append(document.createComment(""));
        var h = (
          /** @type {TemplateNode} */
          be ? /* @__PURE__ */ Fe(u) : u.appendChild(gn())
        );
        be && (h === null ? bt(!1) : st(h)), r(u, h);
      }
      Pe.nodes_end = u, d.before(u);
    })), a = f, a && (l = a));
  }, xr), s && (bt(!0), st(d));
}
function Ne(e, t) {
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
function it(e, t, n) {
  to(() => {
    var r = et(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      no(() => {
        var s = n();
        _s(s), o && kl(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function cp(e, t) {
  var n = void 0, r;
  On(() => {
    n !== (n = t()) && (r && (mt(r), r = null), n && (r = Gt(() => {
      to(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function ou(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = ou(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function dp() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = ou(e)) && (r && (r += " "), r += t);
  return r;
}
function wn(e) {
  return typeof e == "object" ? dp(e) : e ?? "";
}
const ga = [...` 	
\r\f \v\uFEFF`];
function fp(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || ga.includes(r[s - 1])) && (a === r.length || ga.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function ha(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var o in e) {
    var i = e[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function bi(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function pp(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(bi)), o && l.push(...Object.keys(o).map(bi));
      var u = 0, d = -1;
      const y = e.length;
      for (var p = 0; p < y; p++) {
        var f = e[p];
        if (a ? f === "/" && e[p - 1] === "*" && (a = !1) : i ? i === f && (i = !1) : f === "/" && e[p + 1] === "*" ? a = !0 : f === '"' || f === "'" ? i = f : f === "(" ? s++ : f === ")" && s--, !a && i === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = p;
          else if (f === ";" || p === y - 1) {
            if (d !== -1) {
              var g = bi(e.substring(u, d).trim());
              if (!l.includes(g)) {
                f !== ";" && p++;
                var h = e.substring(u, p).trim();
                n += " " + h + ";";
              }
            }
            u = p + 1, d = -1;
          }
        }
      }
    }
    return r && (n += ha(r)), o && (n += ha(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function yt(e, t, n, r, o, i) {
  var s = e.__className;
  if (be || s !== n || s === void 0) {
    var a = fp(n, r, i);
    (!be || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
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
  if (be || o !== t) {
    var i = pp(t, r);
    (!be || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (xi(e, n?.[0], r[0]), xi(e, n?.[1], r[1], "important")) : xi(e, n, r));
  return r;
}
function Bi(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!Jr(t))
      return _f();
    for (var r of e.options)
      r.selected = t.includes(va(r));
    return;
  }
  for (r of e.options) {
    var o = va(r);
    if (kf(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function gp(e) {
  var t = new MutationObserver(() => {
    Bi(e, e.__value);
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
  }), Vl(() => {
    t.disconnect();
  });
}
function va(e) {
  return "__value" in e ? e.__value : e.value;
}
const Cn = Symbol("class"), Kt = Symbol("style"), iu = Symbol("is custom element"), su = Symbol("is html");
function Yt(e) {
  if (be) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          we(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          we(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, Tf(n), Rf();
  }
}
function _o(e, t) {
  var n = ii(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function Ki(e, t) {
  var n = ii(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function hp(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function we(e, t, n, r) {
  var o = ii(e);
  be && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[lf] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && au(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function vp(e, t, n, r, o = !1) {
  var i = ii(e), s = i[iu], a = !i[su];
  let l = be && s;
  l && bt(!1);
  var u = t || {}, d = e.tagName === "OPTION";
  for (var p in t)
    p in n || (n[p] = null);
  n.class ? n.class = wn(n.class) : (r || n[Cn]) && (n.class = null), n[Kt] && (n.style ??= null);
  var f = au(e);
  for (const x in n) {
    let $ = n[x];
    if (d && x === "value" && $ == null) {
      e.value = e.__value = "", u[x] = $;
      continue;
    }
    if (x === "class") {
      var g = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      yt(e, g, $, r, t?.[Cn], n[Cn]), u[x] = $, u[Cn] = n[Cn];
      continue;
    }
    if (x === "style") {
      ft(e, $, t?.[Kt], n[Kt]), u[x] = $, u[Kt] = n[Kt];
      continue;
    }
    var h = u[x];
    if (!($ === h && !($ === void 0 && e.hasAttribute(x)))) {
      u[x] = $;
      var y = x[0] + x[1];
      if (y !== "$$")
        if (y === "on") {
          const C = {}, M = "$$" + x;
          let O = x.slice(2);
          var k = Ff(O);
          if (Wf(O) && (O = O.slice(0, -7), C.capture = !0), !k && h) {
            if ($ != null) continue;
            e.removeEventListener(O, u[M], C), u[M] = null;
          }
          if ($ != null)
            if (k)
              e[`__${O}`] = $, yn([O]);
            else {
              let q = function(J) {
                u[x].call(this, J);
              };
              u[M] = Ss(O, e, q, C);
            }
          else k && (e[`__${O}`] = void 0);
        } else if (x === "style")
          we(e, x, $);
        else if (x === "autofocus")
          Bf(
            /** @type {HTMLElement} */
            e,
            !!$
          );
        else if (!s && (x === "__value" || x === "value" && $ != null))
          e.value = e.__value = $;
        else if (x === "selected" && d)
          hp(
            /** @type {HTMLOptionElement} */
            e,
            $
          );
        else {
          var w = x;
          a || (w = Jf(w));
          var L = w === "defaultValue" || w === "defaultChecked";
          if ($ == null && !s && !L)
            if (i[x] = null, w === "value" || w === "checked") {
              let C = (
                /** @type {HTMLInputElement} */
                e
              );
              const M = t === void 0;
              if (w === "value") {
                let O = C.defaultValue;
                C.removeAttribute(w), C.defaultValue = O, C.value = C.__value = M ? O : null;
              } else {
                let O = C.defaultChecked;
                C.removeAttribute(w), C.defaultChecked = O, C.checked = M ? O : !1;
              }
            } else
              e.removeAttribute(x);
          else L || f.includes(w) && (s || typeof $ != "string") ? e[w] = $ : typeof $ != "function" && we(e, w, $);
        }
    }
  }
  return l && bt(!0), u;
}
function Ge(e, t, n = [], r, o = !1, i = kr) {
  const s = n.map(i);
  var a = void 0, l = {}, u = e.nodeName === "SELECT", d = !1;
  if (On(() => {
    var f = t(...s.map(c)), g = vp(e, a, f, r, o);
    d && u && "value" in f && Bi(
      /** @type {HTMLSelectElement} */
      e,
      f.value
    );
    for (let y of Object.getOwnPropertySymbols(l))
      f[y] || mt(l[y]);
    for (let y of Object.getOwnPropertySymbols(f)) {
      var h = f[y];
      y.description === tf && (!a || h !== a[y]) && (l[y] && mt(l[y]), l[y] = Gt(() => cp(e, () => h))), g[y] = h;
    }
    a = g;
  }), u) {
    var p = (
      /** @type {HTMLSelectElement} */
      e
    );
    to(() => {
      Bi(
        p,
        /** @type {Record<string | symbol, any>} */
        a.value,
        !0
      ), gp(p);
    });
  }
  d = !0;
}
function ii(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [iu]: e.nodeName.includes("-"),
      [su]: e.namespaceURI === Qd
    }
  );
}
var ma = /* @__PURE__ */ new Map();
function au(e) {
  var t = ma.get(e.nodeName);
  if (t) return t;
  ma.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = ml(r);
    for (var i in n)
      n[i].set && t.push(i);
    r = Qo(r);
  }
  return t;
}
class Ns {
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
          Ns.entries.set(n.target, n);
          for (var r of this.#t.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var mp = /* @__PURE__ */ new Ns({
  box: "border-box"
});
function ya(e, t, n) {
  var r = mp.observe(e, () => n(e[t]));
  to(() => (et(() => n(e[t])), r));
}
function wa(e, t) {
  return e === t || e?.[jt] === t;
}
function _t(e = {}, t, n, r) {
  return to(() => {
    var o, i;
    return no(() => {
      o = i, i = [], et(() => {
        e !== n(...i) && (t(e, ...i), o && wa(n(...o), e) && t(null, ...o));
      });
    }), () => {
      ro(() => {
        i && wa(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function lu(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Ie
  ), n = t.l.u;
  if (!n) return;
  let r = () => _s(t.s);
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
  n.b.length && Al(() => {
    ba(t, r), Mo(n.b);
  }), Re(() => {
    const o = et(() => n.m.map(sf));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Re(() => {
    ba(t, r), Mo(n.a);
  });
}
function ba(e, t) {
  if (e.l.s)
    for (const n of e.l.s) c(n);
  t();
}
let vo = !1;
function yp(e) {
  var t = vo;
  try {
    return vo = !1, [e(), vo];
  } finally {
    vo = t;
  }
}
const wp = {
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
function ze(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    wp
  );
}
const bp = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return c(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    if (!(t in e.special)) {
      var r = Pe;
      try {
        Tn(e.parent_effect), e.special[t] = m(
          {
            get [t]() {
              return e.props[t];
            }
          },
          /** @type {string} */
          t,
          hl
        );
      } finally {
        Tn(r);
      }
    }
    return e.special[t](n), la(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), la(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function xa(e, t) {
  return new Proxy(
    {
      props: e,
      exclude: t,
      special: {},
      version: Wn(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        Pe
      )
    },
    bp
  );
}
const xp = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (_r(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      _r(o) && (o = o());
      const i = un(o, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (_r(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = un(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === jt || t === vs) return !1;
    for (let n of e.props)
      if (_r(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props)
      if (_r(n) && (n = n()), !!n) {
        for (const r in n)
          t.includes(r) || t.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          t.includes(r) || t.push(r);
      }
    return t;
  }
};
function He(...e) {
  return new Proxy({ props: e }, xp);
}
function m(e, t, n, r) {
  var o = !$r || (n & Fd) !== 0, i = (n & Gd) !== 0, s = (n & Jd) !== 0, a = (
    /** @type {V} */
    r
  ), l = !0, u = () => (l && (l = !1, a = s ? et(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (i) {
    var p = jt in e || vs in e;
    d = un(e, t)?.set ?? (p && t in e ? (x) => e[t] = x : void 0);
  }
  var f, g = !1;
  i ? [f, g] = yp(() => (
    /** @type {V} */
    e[t]
  )) : f = /** @type {V} */
  e[t], f === void 0 && r !== void 0 && (f = u(), d && (o && hf(), d(f)));
  var h;
  if (o ? h = () => {
    var x = (
      /** @type {V} */
      e[t]
    );
    return x === void 0 ? u() : (l = !0, x);
  } : h = () => {
    var x = (
      /** @type {V} */
      e[t]
    );
    return x !== void 0 && (a = /** @type {V} */
    void 0), x === void 0 ? a : x;
  }, o && (n & hl) === 0)
    return h;
  if (d) {
    var y = e.$$legacy;
    return function(x, $) {
      return arguments.length > 0 ? ((!o || !$ || y || g) && d($ ? h() : x), x) : h();
    };
  }
  var k = !1, w = ((n & Xd) !== 0 ? kr : ws)(() => (k = !1, h()));
  i && c(w);
  var L = (
    /** @type {Effect} */
    Pe
  );
  return function(x, $) {
    if (arguments.length > 0) {
      const C = $ ? c(w) : o && i ? Nt(x) : x;
      return X(w, C), k = !0, a !== void 0 && (a = C), x;
    }
    return Ln && k || (L.f & ei) !== 0 ? w.v : c(w);
  };
}
function $p(e) {
  return new kp(e);
}
class kp {
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
      var a = /* @__PURE__ */ Ll(s, !1, !1);
      return n.set(i, a), a;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, s) {
          return c(n.get(s) ?? r(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === vs ? !0 : (c(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, a) {
          return X(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
        }
      }
    );
    this.#e = (t.hydrate ? np : tu)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && v(), this.#t = o.$$events;
    for (const i of Object.keys(this.#e))
      i === "$set" || i === "$destroy" || i === "$on" || zo(this, i, {
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
      rp(this.#e);
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
let uu;
typeof HTMLElement == "function" && (uu = class extends HTMLElement {
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
          r !== "default" && (i.name = r), N(o, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, n = Cp(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = So(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = $p({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = $s(() => {
        no(() => {
          this.$$r = !0;
          for (const r of Do(this.$$c)) {
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
    return Do(this.$$p_d).find(
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
function Cp(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function se(e, t, n, r, o, i) {
  let s = class extends uu {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Do(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return Do(t).forEach((a) => {
    zo(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = So(a, l, t), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var d = un(u, a)?.get;
          d ? u[a] = l : u.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    zo(s.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
var _p = { value: () => {
} };
function si() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Eo(n);
}
function Eo(e) {
  this._ = e;
}
function Sp(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Eo.prototype = si.prototype = {
  constructor: Eo,
  on: function(e, t) {
    var n = this._, r = Sp(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = Ep(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = $a(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = $a(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Eo(e);
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
function Ep(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function $a(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = _p, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Ri = "http://www.w3.org/1999/xhtml";
const ka = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ri,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function ai(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), ka.hasOwnProperty(t) ? { space: ka[t], local: e } : e;
}
function Pp(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Ri && t.documentElement.namespaceURI === Ri ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function Lp(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function cu(e) {
  var t = ai(e);
  return (t.local ? Lp : Pp)(t);
}
function Np() {
}
function Ts(e) {
  return e == null ? Np : function() {
    return this.querySelector(e);
  };
}
function Tp(e) {
  typeof e != "function" && (e = Ts(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, u, d = 0; d < s; ++d)
      (l = i[d]) && (u = e.call(l, l.__data__, d, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[d] = u);
  return new St(r, this._parents);
}
function Dp(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function zp() {
  return [];
}
function du(e) {
  return e == null ? zp : function() {
    return this.querySelectorAll(e);
  };
}
function Mp(e) {
  return function() {
    return Dp(e.apply(this, arguments));
  };
}
function Op(e) {
  typeof e == "function" ? e = Mp(e) : e = du(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(e.call(l, l.__data__, u, s)), o.push(l));
  return new St(r, o);
}
function fu(e) {
  return function() {
    return this.matches(e);
  };
}
function pu(e) {
  return function(t) {
    return t.matches(e);
  };
}
var Vp = Array.prototype.find;
function Hp(e) {
  return function() {
    return Vp.call(this.children, e);
  };
}
function Ap() {
  return this.firstElementChild;
}
function Ip(e) {
  return this.select(e == null ? Ap : Hp(typeof e == "function" ? e : pu(e)));
}
var Zp = Array.prototype.filter;
function qp() {
  return Array.from(this.children);
}
function Bp(e) {
  return function() {
    return Zp.call(this.children, e);
  };
}
function Kp(e) {
  return this.selectAll(e == null ? qp : Bp(typeof e == "function" ? e : pu(e)));
}
function Rp(e) {
  typeof e != "function" && (e = fu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new St(r, this._parents);
}
function gu(e) {
  return new Array(e.length);
}
function jp() {
  return new St(this._enter || this._groups.map(gu), this._parents);
}
function Ao(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Ao.prototype = {
  constructor: Ao,
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
function Yp(e) {
  return function() {
    return e;
  };
}
function Wp(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, u = i.length; s < u; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new Ao(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function Xp(e, t, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), d = t.length, p = i.length, f = new Array(d), g;
  for (a = 0; a < d; ++a)
    (l = t[a]) && (f[a] = g = s.call(l, l.__data__, a, t) + "", u.has(g) ? o[a] = l : u.set(g, l));
  for (a = 0; a < p; ++a)
    g = s.call(e, i[a], a, i) + "", (l = u.get(g)) ? (r[a] = l, l.__data__ = i[a], u.delete(g)) : n[a] = new Ao(e, i[a]);
  for (a = 0; a < d; ++a)
    (l = t[a]) && u.get(f[a]) === l && (o[a] = l);
}
function Fp(e) {
  return e.__data__;
}
function Gp(e, t) {
  if (!arguments.length) return Array.from(this, Fp);
  var n = t ? Xp : Wp, r = this._parents, o = this._groups;
  typeof e != "function" && (e = Yp(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var d = r[u], p = o[u], f = p.length, g = Jp(e.call(d, d && d.__data__, u, r)), h = g.length, y = a[u] = new Array(h), k = s[u] = new Array(h), w = l[u] = new Array(f);
    n(d, p, y, k, w, g, t);
    for (var L = 0, x = 0, $, C; L < h; ++L)
      if ($ = y[L]) {
        for (L >= x && (x = L + 1); !(C = k[x]) && ++x < h; ) ;
        $._next = C || null;
      }
  }
  return s = new St(s, r), s._enter = a, s._exit = l, s;
}
function Jp(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Up() {
  return new St(this._exit || this._groups.map(gu), this._parents);
}
function Qp(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function eg(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], d = r[l], p = u.length, f = a[l] = new Array(p), g, h = 0; h < p; ++h)
      (g = u[h] || d[h]) && (f[h] = g);
  for (; l < o; ++l)
    a[l] = n[l];
  return new St(a, this._parents);
}
function tg() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function ng(e) {
  e || (e = rg);
  function t(p, f) {
    return p && f ? e(p.__data__, f.__data__) : !p - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), u, d = 0; d < a; ++d)
      (u = s[d]) && (l[d] = u);
    l.sort(t);
  }
  return new St(o, this._parents).order();
}
function rg(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function og() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function ig() {
  return Array.from(this);
}
function sg() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function ag() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function lg() {
  return !this.node();
}
function ug(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function cg(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function dg(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function fg(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function pg(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function gg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function hg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function vg(e, t) {
  var n = ai(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? dg : cg : typeof t == "function" ? n.local ? hg : gg : n.local ? pg : fg)(n, t));
}
function hu(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function mg(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function yg(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function wg(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function bg(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? mg : typeof t == "function" ? wg : yg)(e, t, n ?? "")) : gr(this.node(), e);
}
function gr(e, t) {
  return e.style.getPropertyValue(t) || hu(e).getComputedStyle(e, null).getPropertyValue(t);
}
function xg(e) {
  return function() {
    delete this[e];
  };
}
function $g(e, t) {
  return function() {
    this[e] = t;
  };
}
function kg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Cg(e, t) {
  return arguments.length > 1 ? this.each((t == null ? xg : typeof t == "function" ? kg : $g)(e, t)) : this.node()[e];
}
function vu(e) {
  return e.trim().split(/^|\s+/);
}
function Ds(e) {
  return e.classList || new mu(e);
}
function mu(e) {
  this._node = e, this._names = vu(e.getAttribute("class") || "");
}
mu.prototype = {
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
function yu(e, t) {
  for (var n = Ds(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function wu(e, t) {
  for (var n = Ds(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function _g(e) {
  return function() {
    yu(this, e);
  };
}
function Sg(e) {
  return function() {
    wu(this, e);
  };
}
function Eg(e, t) {
  return function() {
    (t.apply(this, arguments) ? yu : wu)(this, e);
  };
}
function Pg(e, t) {
  var n = vu(e + "");
  if (arguments.length < 2) {
    for (var r = Ds(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Eg : t ? _g : Sg)(n, t));
}
function Lg() {
  this.textContent = "";
}
function Ng(e) {
  return function() {
    this.textContent = e;
  };
}
function Tg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Dg(e) {
  return arguments.length ? this.each(e == null ? Lg : (typeof e == "function" ? Tg : Ng)(e)) : this.node().textContent;
}
function zg() {
  this.innerHTML = "";
}
function Mg(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Og(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Vg(e) {
  return arguments.length ? this.each(e == null ? zg : (typeof e == "function" ? Og : Mg)(e)) : this.node().innerHTML;
}
function Hg() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Ag() {
  return this.each(Hg);
}
function Ig() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Zg() {
  return this.each(Ig);
}
function qg(e) {
  var t = typeof e == "function" ? e : cu(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Bg() {
  return null;
}
function Kg(e, t) {
  var n = typeof e == "function" ? e : cu(e), r = t == null ? Bg : typeof t == "function" ? t : Ts(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Rg() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function jg() {
  return this.each(Rg);
}
function Yg() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Wg() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Xg(e) {
  return this.select(e ? Wg : Yg);
}
function Fg(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Gg(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Jg(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function Ug(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Qg(e, t, n) {
  return function() {
    var r = this.__on, o, i = Gg(t);
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
function eh(e, t, n) {
  var r = Jg(e + ""), o, i = r.length, s;
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
  for (a = t ? Qg : Ug, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function bu(e, t, n) {
  var r = hu(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function th(e, t) {
  return function() {
    return bu(this, e, t);
  };
}
function nh(e, t) {
  return function() {
    return bu(this, e, t.apply(this, arguments));
  };
}
function rh(e, t) {
  return this.each((typeof t == "function" ? nh : th)(e, t));
}
function* oh() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var xu = [null];
function St(e, t) {
  this._groups = e, this._parents = t;
}
function oo() {
  return new St([[document.documentElement]], xu);
}
function ih() {
  return this;
}
St.prototype = oo.prototype = {
  constructor: St,
  select: Tp,
  selectAll: Op,
  selectChild: Ip,
  selectChildren: Kp,
  filter: Rp,
  data: Gp,
  enter: jp,
  exit: Up,
  join: Qp,
  merge: eg,
  selection: ih,
  order: tg,
  sort: ng,
  call: og,
  nodes: ig,
  node: sg,
  size: ag,
  empty: lg,
  each: ug,
  attr: vg,
  style: bg,
  property: Cg,
  classed: Pg,
  text: Dg,
  html: Vg,
  raise: Ag,
  lower: Zg,
  append: qg,
  insert: Kg,
  remove: jg,
  clone: Xg,
  datum: Fg,
  on: eh,
  dispatch: rh,
  [Symbol.iterator]: oh
};
function Lt(e) {
  return typeof e == "string" ? new St([[document.querySelector(e)]], [document.documentElement]) : new St([[e]], xu);
}
function sh(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function Dt(e, t) {
  if (e = sh(e), t === void 0 && (t = e.currentTarget), t) {
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
const ah = { passive: !1 }, Zr = { capture: !0, passive: !1 };
function $i(e) {
  e.stopImmediatePropagation();
}
function sr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function $u(e) {
  var t = e.document.documentElement, n = Lt(e).on("dragstart.drag", sr, Zr);
  "onselectstart" in t ? n.on("selectstart.drag", sr, Zr) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function ku(e, t) {
  var n = e.document.documentElement, r = Lt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", sr, Zr), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const mo = (e) => () => e;
function ji(e, {
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
ji.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function lh(e) {
  return !e.ctrlKey && !e.button;
}
function uh() {
  return this.parentNode;
}
function ch(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function dh() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function fh() {
  var e = lh, t = uh, n = ch, r = dh, o = {}, i = si("start", "drag", "end"), s = 0, a, l, u, d, p = 0;
  function f($) {
    $.on("mousedown.drag", g).filter(r).on("touchstart.drag", k).on("touchmove.drag", w, ah).on("touchend.drag touchcancel.drag", L).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g($, C) {
    if (!(d || !e.call(this, $, C))) {
      var M = x(this, t.call(this, $, C), $, C, "mouse");
      M && (Lt($.view).on("mousemove.drag", h, Zr).on("mouseup.drag", y, Zr), $u($.view), $i($), u = !1, a = $.clientX, l = $.clientY, M("start", $));
    }
  }
  function h($) {
    if (sr($), !u) {
      var C = $.clientX - a, M = $.clientY - l;
      u = C * C + M * M > p;
    }
    o.mouse("drag", $);
  }
  function y($) {
    Lt($.view).on("mousemove.drag mouseup.drag", null), ku($.view, u), sr($), o.mouse("end", $);
  }
  function k($, C) {
    if (e.call(this, $, C)) {
      var M = $.changedTouches, O = t.call(this, $, C), q = M.length, J, j;
      for (J = 0; J < q; ++J)
        (j = x(this, O, $, C, M[J].identifier, M[J])) && ($i($), j("start", $, M[J]));
    }
  }
  function w($) {
    var C = $.changedTouches, M = C.length, O, q;
    for (O = 0; O < M; ++O)
      (q = o[C[O].identifier]) && (sr($), q("drag", $, C[O]));
  }
  function L($) {
    var C = $.changedTouches, M = C.length, O, q;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), O = 0; O < M; ++O)
      (q = o[C[O].identifier]) && ($i($), q("end", $, C[O]));
  }
  function x($, C, M, O, q, J) {
    var j = i.copy(), T = Dt(J || M, C), _, z, b;
    if ((b = n.call($, new ji("beforestart", {
      sourceEvent: M,
      target: f,
      identifier: q,
      active: s,
      x: T[0],
      y: T[1],
      dx: 0,
      dy: 0,
      dispatch: j
    }), O)) != null)
      return _ = b.x - T[0] || 0, z = b.y - T[1] || 0, function E(P, H, Z) {
        var D = T, B;
        switch (P) {
          case "start":
            o[q] = E, B = s++;
            break;
          case "end":
            delete o[q], --s;
          // falls through
          case "drag":
            T = Dt(Z || H, C), B = s;
            break;
        }
        j.call(
          P,
          $,
          new ji(P, {
            sourceEvent: H,
            subject: b,
            target: f,
            identifier: q,
            active: B,
            x: T[0] + _,
            y: T[1] + z,
            dx: T[0] - D[0],
            dy: T[1] - D[1],
            dispatch: j
          }),
          O
        );
      };
  }
  return f.filter = function($) {
    return arguments.length ? (e = typeof $ == "function" ? $ : mo(!!$), f) : e;
  }, f.container = function($) {
    return arguments.length ? (t = typeof $ == "function" ? $ : mo($), f) : t;
  }, f.subject = function($) {
    return arguments.length ? (n = typeof $ == "function" ? $ : mo($), f) : n;
  }, f.touchable = function($) {
    return arguments.length ? (r = typeof $ == "function" ? $ : mo(!!$), f) : r;
  }, f.on = function() {
    var $ = i.on.apply(i, arguments);
    return $ === i ? f : $;
  }, f.clickDistance = function($) {
    return arguments.length ? (p = ($ = +$) * $, f) : Math.sqrt(p);
  }, f;
}
function zs(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Cu(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function io() {
}
var qr = 0.7, Io = 1 / qr, ar = "\\s*([+-]?\\d+)\\s*", Br = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Wt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ph = /^#([0-9a-f]{3,8})$/, gh = new RegExp(`^rgb\\(${ar},${ar},${ar}\\)$`), hh = new RegExp(`^rgb\\(${Wt},${Wt},${Wt}\\)$`), vh = new RegExp(`^rgba\\(${ar},${ar},${ar},${Br}\\)$`), mh = new RegExp(`^rgba\\(${Wt},${Wt},${Wt},${Br}\\)$`), yh = new RegExp(`^hsl\\(${Br},${Wt},${Wt}\\)$`), wh = new RegExp(`^hsla\\(${Br},${Wt},${Wt},${Br}\\)$`), Ca = {
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
zs(io, Xn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: _a,
  // Deprecated! Use color.formatHex.
  formatHex: _a,
  formatHex8: bh,
  formatHsl: xh,
  formatRgb: Sa,
  toString: Sa
});
function _a() {
  return this.rgb().formatHex();
}
function bh() {
  return this.rgb().formatHex8();
}
function xh() {
  return _u(this).formatHsl();
}
function Sa() {
  return this.rgb().formatRgb();
}
function Xn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = ph.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Ea(t) : n === 3 ? new gt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? yo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? yo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = gh.exec(e)) ? new gt(t[1], t[2], t[3], 1) : (t = hh.exec(e)) ? new gt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = vh.exec(e)) ? yo(t[1], t[2], t[3], t[4]) : (t = mh.exec(e)) ? yo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = yh.exec(e)) ? Na(t[1], t[2] / 100, t[3] / 100, 1) : (t = wh.exec(e)) ? Na(t[1], t[2] / 100, t[3] / 100, t[4]) : Ca.hasOwnProperty(e) ? Ea(Ca[e]) : e === "transparent" ? new gt(NaN, NaN, NaN, 0) : null;
}
function Ea(e) {
  return new gt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function yo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new gt(e, t, n, r);
}
function $h(e) {
  return e instanceof io || (e = Xn(e)), e ? (e = e.rgb(), new gt(e.r, e.g, e.b, e.opacity)) : new gt();
}
function Yi(e, t, n, r) {
  return arguments.length === 1 ? $h(e) : new gt(e, t, n, r ?? 1);
}
function gt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
zs(gt, Yi, Cu(io, {
  brighter(e) {
    return e = e == null ? Io : Math.pow(Io, e), new gt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? qr : Math.pow(qr, e), new gt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new gt(Yn(this.r), Yn(this.g), Yn(this.b), Zo(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Pa,
  // Deprecated! Use color.formatHex.
  formatHex: Pa,
  formatHex8: kh,
  formatRgb: La,
  toString: La
}));
function Pa() {
  return `#${qn(this.r)}${qn(this.g)}${qn(this.b)}`;
}
function kh() {
  return `#${qn(this.r)}${qn(this.g)}${qn(this.b)}${qn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function La() {
  const e = Zo(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Yn(this.r)}, ${Yn(this.g)}, ${Yn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Zo(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Yn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function qn(e) {
  return e = Yn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Na(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Mt(e, t, n, r);
}
function _u(e) {
  if (e instanceof Mt) return new Mt(e.h, e.s, e.l, e.opacity);
  if (e instanceof io || (e = Xn(e)), !e) return new Mt();
  if (e instanceof Mt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new Mt(s, a, l, e.opacity);
}
function Ch(e, t, n, r) {
  return arguments.length === 1 ? _u(e) : new Mt(e, t, n, r ?? 1);
}
function Mt(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
zs(Mt, Ch, Cu(io, {
  brighter(e) {
    return e = e == null ? Io : Math.pow(Io, e), new Mt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? qr : Math.pow(qr, e), new Mt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new gt(
      ki(e >= 240 ? e - 240 : e + 120, o, r),
      ki(e, o, r),
      ki(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Mt(Ta(this.h), wo(this.s), wo(this.l), Zo(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Zo(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Ta(this.h)}, ${wo(this.s) * 100}%, ${wo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Ta(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function wo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ki(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Ms = (e) => () => e;
function _h(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Sh(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function Eh(e) {
  return (e = +e) == 1 ? Su : function(t, n) {
    return n - t ? Sh(t, n, e) : Ms(isNaN(t) ? n : t);
  };
}
function Su(e, t) {
  var n = t - e;
  return n ? _h(e, n) : Ms(isNaN(e) ? t : e);
}
const qo = function e(t) {
  var n = Eh(t);
  function r(o, i) {
    var s = n((o = Yi(o)).r, (i = Yi(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = Su(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = l(d), o.opacity = u(d), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function Ph(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function Lh(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Nh(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = zr(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function Th(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function Bt(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function Dh(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = zr(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var Wi = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ci = new RegExp(Wi.source, "g");
function zh(e) {
  return function() {
    return e;
  };
}
function Mh(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Eu(e, t) {
  var n = Wi.lastIndex = Ci.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = Wi.exec(e)) && (o = Ci.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: Bt(r, o) })), n = Ci.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? Mh(l[0].x) : zh(t) : (t = l.length, function(u) {
    for (var d = 0, p; d < t; ++d) a[(p = l[d]).i] = p.x(u);
    return a.join("");
  });
}
function zr(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? Ms(t) : (n === "number" ? Bt : n === "string" ? (r = Xn(t)) ? (t = r, qo) : Eu : t instanceof Xn ? qo : t instanceof Date ? Th : Lh(t) ? Ph : Array.isArray(t) ? Nh : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Dh : Bt)(e, t);
}
var Da = 180 / Math.PI, Pu = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Lu(e, t, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * r) && (n -= e * l, r -= t * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), e * r < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * Da,
    skewX: Math.atan(l) * Da,
    scaleX: s,
    scaleY: a
  };
}
var bo;
function Oh(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Pu : Lu(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Vh(e) {
  return e == null || (bo || (bo = document.createElementNS("http://www.w3.org/2000/svg", "g")), bo.setAttribute("transform", e), !(e = bo.transform.baseVal.consolidate())) ? Pu : (e = e.matrix, Lu(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Nu(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, d, p, f, g, h) {
    if (u !== p || d !== f) {
      var y = g.push("translate(", null, t, null, n);
      h.push({ i: y - 4, x: Bt(u, p) }, { i: y - 2, x: Bt(d, f) });
    } else (p || f) && g.push("translate(" + p + t + f + n);
  }
  function s(u, d, p, f) {
    u !== d ? (u - d > 180 ? d += 360 : d - u > 180 && (u += 360), f.push({ i: p.push(o(p) + "rotate(", null, r) - 2, x: Bt(u, d) })) : d && p.push(o(p) + "rotate(" + d + r);
  }
  function a(u, d, p, f) {
    u !== d ? f.push({ i: p.push(o(p) + "skewX(", null, r) - 2, x: Bt(u, d) }) : d && p.push(o(p) + "skewX(" + d + r);
  }
  function l(u, d, p, f, g, h) {
    if (u !== p || d !== f) {
      var y = g.push(o(g) + "scale(", null, ",", null, ")");
      h.push({ i: y - 4, x: Bt(u, p) }, { i: y - 2, x: Bt(d, f) });
    } else (p !== 1 || f !== 1) && g.push(o(g) + "scale(" + p + "," + f + ")");
  }
  return function(u, d) {
    var p = [], f = [];
    return u = e(u), d = e(d), i(u.translateX, u.translateY, d.translateX, d.translateY, p, f), s(u.rotate, d.rotate, p, f), a(u.skewX, d.skewX, p, f), l(u.scaleX, u.scaleY, d.scaleX, d.scaleY, p, f), u = d = null, function(g) {
      for (var h = -1, y = f.length, k; ++h < y; ) p[(k = f[h]).i] = k.x(g);
      return p.join("");
    };
  };
}
var Hh = Nu(Oh, "px, ", "px)", "deg)"), Ah = Nu(Vh, ", ", ")", ")"), Ih = 1e-12;
function za(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Zh(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function qh(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Po = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], d = s[0], p = s[1], f = s[2], g = d - a, h = p - l, y = g * g + h * h, k, w;
    if (y < Ih)
      w = Math.log(f / u) / t, k = function(O) {
        return [
          a + O * g,
          l + O * h,
          u * Math.exp(t * O * w)
        ];
      };
    else {
      var L = Math.sqrt(y), x = (f * f - u * u + r * y) / (2 * u * n * L), $ = (f * f - u * u - r * y) / (2 * f * n * L), C = Math.log(Math.sqrt(x * x + 1) - x), M = Math.log(Math.sqrt($ * $ + 1) - $);
      w = (M - C) / t, k = function(O) {
        var q = O * w, J = za(C), j = u / (n * L) * (J * qh(t * q + C) - Zh(C));
        return [
          a + j * g,
          l + j * h,
          u * J / za(t * q + C)
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
var hr = 0, Lr = 0, Sr = 0, Tu = 1e3, Bo, Nr, Ko = 0, Fn = 0, li = 0, Kr = typeof performance == "object" && performance.now ? performance : Date, Du = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Os() {
  return Fn || (Du(Bh), Fn = Kr.now() + li);
}
function Bh() {
  Fn = 0;
}
function Ro() {
  this._call = this._time = this._next = null;
}
Ro.prototype = zu.prototype = {
  constructor: Ro,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Os() : +n) + (t == null ? 0 : +t), !this._next && Nr !== this && (Nr ? Nr._next = this : Bo = this, Nr = this), this._call = e, this._time = n, Xi();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Xi());
  }
};
function zu(e, t, n) {
  var r = new Ro();
  return r.restart(e, t, n), r;
}
function Kh() {
  Os(), ++hr;
  for (var e = Bo, t; e; )
    (t = Fn - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --hr;
}
function Ma() {
  Fn = (Ko = Kr.now()) + li, hr = Lr = 0;
  try {
    Kh();
  } finally {
    hr = 0, jh(), Fn = 0;
  }
}
function Rh() {
  var e = Kr.now(), t = e - Ko;
  t > Tu && (li -= t, Ko = e);
}
function jh() {
  for (var e, t = Bo, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Bo = n);
  Nr = e, Xi(r);
}
function Xi(e) {
  if (!hr) {
    Lr && (Lr = clearTimeout(Lr));
    var t = e - Fn;
    t > 24 ? (e < 1 / 0 && (Lr = setTimeout(Ma, e - Kr.now() - li)), Sr && (Sr = clearInterval(Sr))) : (Sr || (Ko = Kr.now(), Sr = setInterval(Rh, Tu)), hr = 1, Du(Ma));
  }
}
function Oa(e, t, n) {
  var r = new Ro();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var Yh = si("start", "end", "cancel", "interrupt"), Wh = [], Mu = 0, Va = 1, Fi = 2, Lo = 3, Ha = 4, Gi = 5, No = 6;
function ui(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  Xh(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: Yh,
    tween: Wh,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Mu
  });
}
function Vs(e, t) {
  var n = Ht(e, t);
  if (n.state > Mu) throw new Error("too late; already scheduled");
  return n;
}
function tn(e, t) {
  var n = Ht(e, t);
  if (n.state > Lo) throw new Error("too late; already running");
  return n;
}
function Ht(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function Xh(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = zu(i, 0, n.time);
  function i(u) {
    n.state = Va, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var d, p, f, g;
    if (n.state !== Va) return l();
    for (d in r)
      if (g = r[d], g.name === n.name) {
        if (g.state === Lo) return Oa(s);
        g.state === Ha ? (g.state = No, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[d]) : +d < t && (g.state = No, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[d]);
      }
    if (Oa(function() {
      n.state === Lo && (n.state = Ha, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = Fi, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Fi) {
      for (n.state = Lo, o = new Array(f = n.tween.length), d = 0, p = -1; d < f; ++d)
        (g = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++p] = g);
      o.length = p + 1;
    }
  }
  function a(u) {
    for (var d = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Gi, 1), p = -1, f = o.length; ++p < f; )
      o[p].call(e, d);
    n.state === Gi && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = No, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function To(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > Fi && r.state < Gi, r.state = No, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function Fh(e) {
  return this.each(function() {
    To(this, e);
  });
}
function Gh(e, t) {
  var n, r;
  return function() {
    var o = tn(this, e), i = o.tween;
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
    var i = tn(this, e), s = i.tween;
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
function Uh(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = Ht(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? Gh : Jh)(n, e, t));
}
function Hs(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = tn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return Ht(o, r).value[t];
  };
}
function Ou(e, t) {
  var n;
  return (typeof t == "number" ? Bt : t instanceof Xn ? qo : (n = Xn(t)) ? (t = n, qo) : Eu)(e, t);
}
function Qh(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function e1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function t1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function n1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function r1(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function o1(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function i1(e, t) {
  var n = ai(e), r = n === "transform" ? Ah : Ou;
  return this.attrTween(e, typeof t == "function" ? (n.local ? o1 : r1)(n, r, Hs(this, "attr." + e, t)) : t == null ? (n.local ? e1 : Qh)(n) : (n.local ? n1 : t1)(n, r, t));
}
function s1(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function a1(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function l1(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && a1(e, i)), n;
  }
  return o._value = t, o;
}
function u1(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && s1(e, i)), n;
  }
  return o._value = t, o;
}
function c1(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = ai(e);
  return this.tween(n, (r.local ? l1 : u1)(r, t));
}
function d1(e, t) {
  return function() {
    Vs(this, e).delay = +t.apply(this, arguments);
  };
}
function f1(e, t) {
  return t = +t, function() {
    Vs(this, e).delay = t;
  };
}
function p1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? d1 : f1)(t, e)) : Ht(this.node(), t).delay;
}
function g1(e, t) {
  return function() {
    tn(this, e).duration = +t.apply(this, arguments);
  };
}
function h1(e, t) {
  return t = +t, function() {
    tn(this, e).duration = t;
  };
}
function v1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? g1 : h1)(t, e)) : Ht(this.node(), t).duration;
}
function m1(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    tn(this, e).ease = t;
  };
}
function y1(e) {
  var t = this._id;
  return arguments.length ? this.each(m1(t, e)) : Ht(this.node(), t).ease;
}
function w1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    tn(this, e).ease = n;
  };
}
function b1(e) {
  if (typeof e != "function") throw new Error();
  return this.each(w1(this._id, e));
}
function x1(e) {
  typeof e != "function" && (e = fu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new hn(r, this._parents, this._name, this._id);
}
function $1(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], u = n[a], d = l.length, p = s[a] = new Array(d), f, g = 0; g < d; ++g)
      (f = l[g] || u[g]) && (p[g] = f);
  for (; a < r; ++a)
    s[a] = t[a];
  return new hn(s, this._parents, this._name, this._id);
}
function k1(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function C1(e, t, n) {
  var r, o, i = k1(t) ? Vs : tn;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function _1(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Ht(this.node(), n).on.on(e) : this.each(C1(n, e, t));
}
function S1(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function E1() {
  return this.on("end.remove", S1(this._id));
}
function P1(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Ts(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), d, p, f = 0; f < l; ++f)
      (d = a[f]) && (p = e.call(d, d.__data__, f, a)) && ("__data__" in d && (p.__data__ = d.__data__), u[f] = p, ui(u[f], t, n, f, u, Ht(d, n)));
  return new hn(i, this._parents, t, n);
}
function L1(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = du(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, d, p = 0; p < u; ++p)
      if (d = l[p]) {
        for (var f = e.call(d, d.__data__, p, l), g, h = Ht(d, n), y = 0, k = f.length; y < k; ++y)
          (g = f[y]) && ui(g, t, n, y, f, h);
        i.push(f), s.push(d);
      }
  return new hn(i, s, t, n);
}
var N1 = oo.prototype.constructor;
function T1() {
  return new N1(this._groups, this._parents);
}
function D1(e, t) {
  var n, r, o;
  return function() {
    var i = gr(this, e), s = (this.style.removeProperty(e), gr(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function Vu(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function z1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = gr(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function M1(e, t, n) {
  var r, o, i;
  return function() {
    var s = gr(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), gr(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function O1(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = tn(this, e), u = l.on, d = l.value[i] == null ? a || (a = Vu(t)) : void 0;
    (u !== n || o !== d) && (r = (n = u).copy()).on(s, o = d), l.on = r;
  };
}
function V1(e, t, n) {
  var r = (e += "") == "transform" ? Hh : Ou;
  return t == null ? this.styleTween(e, D1(e, r)).on("end.style." + e, Vu(e)) : typeof t == "function" ? this.styleTween(e, M1(e, r, Hs(this, "style." + e, t))).each(O1(this._id, e)) : this.styleTween(e, z1(e, r, t), n).on("end.style." + e, null);
}
function H1(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function A1(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && H1(e, s, n)), r;
  }
  return i._value = t, i;
}
function I1(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, A1(e, t, n ?? ""));
}
function Z1(e) {
  return function() {
    this.textContent = e;
  };
}
function q1(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function B1(e) {
  return this.tween("text", typeof e == "function" ? q1(Hs(this, "text", e)) : Z1(e == null ? "" : e + ""));
}
function K1(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function R1(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && K1(o)), t;
  }
  return r._value = e, r;
}
function j1(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, R1(e));
}
function Y1() {
  for (var e = this._name, t = this._id, n = Hu(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var d = Ht(l, t);
        ui(l, e, n, u, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new hn(r, this._parents, e, n);
}
function W1() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = tn(this, r), d = u.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var X1 = 0;
function hn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Hu() {
  return ++X1;
}
var rn = oo.prototype;
hn.prototype = {
  constructor: hn,
  select: P1,
  selectAll: L1,
  selectChild: rn.selectChild,
  selectChildren: rn.selectChildren,
  filter: x1,
  merge: $1,
  selection: T1,
  transition: Y1,
  call: rn.call,
  nodes: rn.nodes,
  node: rn.node,
  size: rn.size,
  empty: rn.empty,
  each: rn.each,
  on: _1,
  attr: i1,
  attrTween: c1,
  style: V1,
  styleTween: I1,
  text: B1,
  textTween: j1,
  remove: E1,
  tween: Uh,
  delay: p1,
  duration: v1,
  ease: y1,
  easeVarying: b1,
  end: W1,
  [Symbol.iterator]: rn[Symbol.iterator]
};
function F1(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var G1 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: F1
};
function J1(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function U1(e) {
  var t, n;
  e instanceof hn ? (t = e._id, e = e._name) : (t = Hu(), (n = G1).time = Os(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && ui(l, e, t, u, s, n || J1(l, t));
  return new hn(r, this._parents, e, t);
}
oo.prototype.interrupt = Fh;
oo.prototype.transition = U1;
const xo = (e) => () => e;
function Q1(e, {
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
function sn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
sn.prototype = {
  constructor: sn,
  scale: function(e) {
    return e === 1 ? this : new sn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new sn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var ci = new sn(1, 0, 0);
Au.prototype = sn.prototype;
function Au(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return ci;
  return e.__zoom;
}
function _i(e) {
  e.stopImmediatePropagation();
}
function Er(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function ev(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function tv() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Aa() {
  return this.__zoom || ci;
}
function nv(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function rv() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function ov(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function Iu() {
  var e = ev, t = tv, n = ov, r = nv, o = rv, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = Po, u = si("start", "zoom", "end"), d, p, f, g = 500, h = 150, y = 0, k = 10;
  function w(b) {
    b.property("__zoom", Aa).on("wheel.zoom", q, { passive: !1 }).on("mousedown.zoom", J).on("dblclick.zoom", j).filter(o).on("touchstart.zoom", T).on("touchmove.zoom", _).on("touchend.zoom touchcancel.zoom", z).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  w.transform = function(b, E, P, H) {
    var Z = b.selection ? b.selection() : b;
    Z.property("__zoom", Aa), b !== Z ? C(b, E, P, H) : Z.interrupt().each(function() {
      M(this, arguments).event(H).start().zoom(null, typeof E == "function" ? E.apply(this, arguments) : E).end();
    });
  }, w.scaleBy = function(b, E, P, H) {
    w.scaleTo(b, function() {
      var Z = this.__zoom.k, D = typeof E == "function" ? E.apply(this, arguments) : E;
      return Z * D;
    }, P, H);
  }, w.scaleTo = function(b, E, P, H) {
    w.transform(b, function() {
      var Z = t.apply(this, arguments), D = this.__zoom, B = P == null ? $(Z) : typeof P == "function" ? P.apply(this, arguments) : P, G = D.invert(B), U = typeof E == "function" ? E.apply(this, arguments) : E;
      return n(x(L(D, U), B, G), Z, s);
    }, P, H);
  }, w.translateBy = function(b, E, P, H) {
    w.transform(b, function() {
      return n(this.__zoom.translate(
        typeof E == "function" ? E.apply(this, arguments) : E,
        typeof P == "function" ? P.apply(this, arguments) : P
      ), t.apply(this, arguments), s);
    }, null, H);
  }, w.translateTo = function(b, E, P, H, Z) {
    w.transform(b, function() {
      var D = t.apply(this, arguments), B = this.__zoom, G = H == null ? $(D) : typeof H == "function" ? H.apply(this, arguments) : H;
      return n(ci.translate(G[0], G[1]).scale(B.k).translate(
        typeof E == "function" ? -E.apply(this, arguments) : -E,
        typeof P == "function" ? -P.apply(this, arguments) : -P
      ), D, s);
    }, H, Z);
  };
  function L(b, E) {
    return E = Math.max(i[0], Math.min(i[1], E)), E === b.k ? b : new sn(E, b.x, b.y);
  }
  function x(b, E, P) {
    var H = E[0] - P[0] * b.k, Z = E[1] - P[1] * b.k;
    return H === b.x && Z === b.y ? b : new sn(b.k, H, Z);
  }
  function $(b) {
    return [(+b[0][0] + +b[1][0]) / 2, (+b[0][1] + +b[1][1]) / 2];
  }
  function C(b, E, P, H) {
    b.on("start.zoom", function() {
      M(this, arguments).event(H).start();
    }).on("interrupt.zoom end.zoom", function() {
      M(this, arguments).event(H).end();
    }).tween("zoom", function() {
      var Z = this, D = arguments, B = M(Z, D).event(H), G = t.apply(Z, D), U = P == null ? $(G) : typeof P == "function" ? P.apply(Z, D) : P, re = Math.max(G[1][0] - G[0][0], G[1][1] - G[0][1]), F = Z.__zoom, R = typeof E == "function" ? E.apply(Z, D) : E, Y = l(F.invert(U).concat(re / F.k), R.invert(U).concat(re / R.k));
      return function(Q) {
        if (Q === 1) Q = R;
        else {
          var W = Y(Q), he = re / W[2];
          Q = new sn(he, U[0] - W[0] * he, U[1] - W[1] * he);
        }
        B.zoom(null, Q);
      };
    });
  }
  function M(b, E, P) {
    return !P && b.__zooming || new O(b, E);
  }
  function O(b, E) {
    this.that = b, this.args = E, this.active = 0, this.sourceEvent = null, this.extent = t.apply(b, E), this.taps = 0;
  }
  O.prototype = {
    event: function(b) {
      return b && (this.sourceEvent = b), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(b, E) {
      return this.mouse && b !== "mouse" && (this.mouse[1] = E.invert(this.mouse[0])), this.touch0 && b !== "touch" && (this.touch0[1] = E.invert(this.touch0[0])), this.touch1 && b !== "touch" && (this.touch1[1] = E.invert(this.touch1[0])), this.that.__zoom = E, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(b) {
      var E = Lt(this.that).datum();
      u.call(
        b,
        this.that,
        new Q1(b, {
          sourceEvent: this.sourceEvent,
          target: w,
          transform: this.that.__zoom,
          dispatch: u
        }),
        E
      );
    }
  };
  function q(b, ...E) {
    if (!e.apply(this, arguments)) return;
    var P = M(this, E).event(b), H = this.__zoom, Z = Math.max(i[0], Math.min(i[1], H.k * Math.pow(2, r.apply(this, arguments)))), D = Dt(b);
    if (P.wheel)
      (P.mouse[0][0] !== D[0] || P.mouse[0][1] !== D[1]) && (P.mouse[1] = H.invert(P.mouse[0] = D)), clearTimeout(P.wheel);
    else {
      if (H.k === Z) return;
      P.mouse = [D, H.invert(D)], To(this), P.start();
    }
    Er(b), P.wheel = setTimeout(B, h), P.zoom("mouse", n(x(L(H, Z), P.mouse[0], P.mouse[1]), P.extent, s));
    function B() {
      P.wheel = null, P.end();
    }
  }
  function J(b, ...E) {
    if (f || !e.apply(this, arguments)) return;
    var P = b.currentTarget, H = M(this, E, !0).event(b), Z = Lt(b.view).on("mousemove.zoom", U, !0).on("mouseup.zoom", re, !0), D = Dt(b, P), B = b.clientX, G = b.clientY;
    $u(b.view), _i(b), H.mouse = [D, this.__zoom.invert(D)], To(this), H.start();
    function U(F) {
      if (Er(F), !H.moved) {
        var R = F.clientX - B, Y = F.clientY - G;
        H.moved = R * R + Y * Y > y;
      }
      H.event(F).zoom("mouse", n(x(H.that.__zoom, H.mouse[0] = Dt(F, P), H.mouse[1]), H.extent, s));
    }
    function re(F) {
      Z.on("mousemove.zoom mouseup.zoom", null), ku(F.view, H.moved), Er(F), H.event(F).end();
    }
  }
  function j(b, ...E) {
    if (e.apply(this, arguments)) {
      var P = this.__zoom, H = Dt(b.changedTouches ? b.changedTouches[0] : b, this), Z = P.invert(H), D = P.k * (b.shiftKey ? 0.5 : 2), B = n(x(L(P, D), H, Z), t.apply(this, E), s);
      Er(b), a > 0 ? Lt(this).transition().duration(a).call(C, B, H, b) : Lt(this).call(w.transform, B, H, b);
    }
  }
  function T(b, ...E) {
    if (e.apply(this, arguments)) {
      var P = b.touches, H = P.length, Z = M(this, E, b.changedTouches.length === H).event(b), D, B, G, U;
      for (_i(b), B = 0; B < H; ++B)
        G = P[B], U = Dt(G, this), U = [U, this.__zoom.invert(U), G.identifier], Z.touch0 ? !Z.touch1 && Z.touch0[2] !== U[2] && (Z.touch1 = U, Z.taps = 0) : (Z.touch0 = U, D = !0, Z.taps = 1 + !!d);
      d && (d = clearTimeout(d)), D && (Z.taps < 2 && (p = U[0], d = setTimeout(function() {
        d = null;
      }, g)), To(this), Z.start());
    }
  }
  function _(b, ...E) {
    if (this.__zooming) {
      var P = M(this, E).event(b), H = b.changedTouches, Z = H.length, D, B, G, U;
      for (Er(b), D = 0; D < Z; ++D)
        B = H[D], G = Dt(B, this), P.touch0 && P.touch0[2] === B.identifier ? P.touch0[0] = G : P.touch1 && P.touch1[2] === B.identifier && (P.touch1[0] = G);
      if (B = P.that.__zoom, P.touch1) {
        var re = P.touch0[0], F = P.touch0[1], R = P.touch1[0], Y = P.touch1[1], Q = (Q = R[0] - re[0]) * Q + (Q = R[1] - re[1]) * Q, W = (W = Y[0] - F[0]) * W + (W = Y[1] - F[1]) * W;
        B = L(B, Math.sqrt(Q / W)), G = [(re[0] + R[0]) / 2, (re[1] + R[1]) / 2], U = [(F[0] + Y[0]) / 2, (F[1] + Y[1]) / 2];
      } else if (P.touch0) G = P.touch0[0], U = P.touch0[1];
      else return;
      P.zoom("touch", n(x(B, G, U), P.extent, s));
    }
  }
  function z(b, ...E) {
    if (this.__zooming) {
      var P = M(this, E).event(b), H = b.changedTouches, Z = H.length, D, B;
      for (_i(b), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, g), D = 0; D < Z; ++D)
        B = H[D], P.touch0 && P.touch0[2] === B.identifier ? delete P.touch0 : P.touch1 && P.touch1[2] === B.identifier && delete P.touch1;
      if (P.touch1 && !P.touch0 && (P.touch0 = P.touch1, delete P.touch1), P.touch0) P.touch0[1] = this.__zoom.invert(P.touch0[0]);
      else if (P.end(), P.taps === 2 && (B = Dt(B, this), Math.hypot(p[0] - B[0], p[1] - B[1]) < k)) {
        var G = Lt(this).on("dblclick.zoom");
        G && G.apply(this, arguments);
      }
    }
  }
  return w.wheelDelta = function(b) {
    return arguments.length ? (r = typeof b == "function" ? b : xo(+b), w) : r;
  }, w.filter = function(b) {
    return arguments.length ? (e = typeof b == "function" ? b : xo(!!b), w) : e;
  }, w.touchable = function(b) {
    return arguments.length ? (o = typeof b == "function" ? b : xo(!!b), w) : o;
  }, w.extent = function(b) {
    return arguments.length ? (t = typeof b == "function" ? b : xo([[+b[0][0], +b[0][1]], [+b[1][0], +b[1][1]]]), w) : t;
  }, w.scaleExtent = function(b) {
    return arguments.length ? (i[0] = +b[0], i[1] = +b[1], w) : [i[0], i[1]];
  }, w.translateExtent = function(b) {
    return arguments.length ? (s[0][0] = +b[0][0], s[1][0] = +b[1][0], s[0][1] = +b[0][1], s[1][1] = +b[1][1], w) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, w.constrain = function(b) {
    return arguments.length ? (n = b, w) : n;
  }, w.duration = function(b) {
    return arguments.length ? (a = +b, w) : a;
  }, w.interpolate = function(b) {
    return arguments.length ? (l = b, w) : l;
  }, w.on = function() {
    var b = u.on.apply(u, arguments);
    return b === u ? w : b;
  }, w.clickDistance = function(b) {
    return arguments.length ? (y = (b = +b) * b, w) : Math.sqrt(y);
  }, w.tapDistance = function(b) {
    return arguments.length ? (k = +b, w) : k;
  }, w;
}
const Rr = {
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
], Zu = ["Enter", " ", "Escape"], iv = {
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
var vr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(vr || (vr = {}));
var Xt;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(Xt || (Xt = {}));
var jo;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(jo || (jo = {}));
const Ui = {
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
var on;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(on || (on = {}));
var jr;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(jr || (jr = {}));
var ye;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(ye || (ye = {}));
const Ia = {
  [ye.Left]: ye.Right,
  [ye.Right]: ye.Left,
  [ye.Top]: ye.Bottom,
  [ye.Bottom]: ye.Top
};
function sv(e, t) {
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
function Za(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t?.has(i) || r.push(o);
  }), r.length && n(r);
}
function av(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const qu = (e) => "id" in e && "source" in e && "target" in e, lv = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), As = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), so = (e, t = [0, 0]) => {
  const { width: n, height: r } = Hn(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, uv = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : As(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? Yo(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return di(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return fi(n);
}, ao = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = Yo(r);
      n = di(n, o);
    }
  }), fi(n);
}, Is = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...lo(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: d, selectable: p = !0, hidden: f = !1 } = u;
    if (s && !p || f)
      continue;
    const g = d.width ?? u.width ?? u.initialWidth ?? null, h = d.height ?? u.height ?? u.initialHeight ?? null, y = Yr(a, yr(u)), k = (g ?? 0) * (h ?? 0), w = i && y > 0;
    (!u.internals.handleBounds || w || y >= k || u.dragging) && l.push(u);
  }
  return l;
}, cv = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function dv(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t?.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function fv({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const a = dv(e, s), l = ao(a), u = Zs(l, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(u, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function Bu({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: u } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let p = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", Rr.error005());
    else {
      const g = a.measured.width, h = a.measured.height;
      g && h && (p = [
        [l, u],
        [l + g, u + h]
      ]);
    }
  else a && wr(s.extent) && (p = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const f = wr(p) ? Gn(t, p, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", Rr.error015()), {
    position: {
      x: f.x - l + (s.measured.width ?? 0) * d[0],
      y: f.y - u + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: f
  };
}
async function pv({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((p) => p.id)), s = [];
  for (const p of n) {
    if (p.deletable === !1)
      continue;
    const f = i.has(p.id), g = !f && p.parentId && s.find((h) => h.id === p.parentId);
    (f || g) && s.push(p);
  }
  const a = new Set(t.map((p) => p.id)), l = r.filter((p) => p.deletable !== !1), u = cv(s, l);
  for (const p of l)
    a.has(p.id) && !u.find((f) => f.id === p.id) && u.push(p);
  if (!o)
    return {
      edges: u,
      nodes: s
    };
  const d = await o({
    nodes: s,
    edges: u
  });
  return typeof d == "boolean" ? d ? { edges: u, nodes: s } : { edges: [], nodes: [] } : d;
}
const mr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), Gn = (e = { x: 0, y: 0 }, t, n) => ({
  x: mr(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: mr(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function Ku(e, t, n) {
  const { width: r, height: o } = Hn(n), { x: i, y: s } = n.internals.positionAbsolute;
  return Gn(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const qa = (e, t, n) => e < t ? mr(Math.abs(e - t), 1, t) / t : e > n ? -mr(Math.abs(e - n), 1, t) / t : 0, Ru = (e, t, n = 15, r = 40) => {
  const o = qa(e.x, r, t.width - r) * n, i = qa(e.y, r, t.height - r) * n;
  return [o, i];
}, di = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Qi = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), fi = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), yr = (e, t = [0, 0]) => {
  const { x: n, y: r } = As(e) ? e.internals.positionAbsolute : so(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, Yo = (e, t = [0, 0]) => {
  const { x: n, y: r } = As(e) ? e.internals.positionAbsolute : so(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, ju = (e, t) => fi(di(Qi(e), Qi(t))), Yr = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, Ba = (e) => an(e.width) && an(e.height) && an(e.x) && an(e.y), an = (e) => !isNaN(e) && isFinite(e), gv = (e, t) => {
}, pi = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), lo = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? pi(a, s) : a;
}, Wo = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
});
function rr(e, t) {
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
function hv(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = rr(e, n), o = rr(e, t);
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
    const r = rr(e.top ?? e.y ?? 0, n), o = rr(e.bottom ?? e.y ?? 0, n), i = rr(e.left ?? e.x ?? 0, t), s = rr(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function vv(e, t, n, r, o, i) {
  const { x: s, y: a } = Wo(e, [t, n, r]), { x: l, y: u } = Wo({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - l, p = i - u;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(p)
  };
}
const Zs = (e, t, n, r, o, i) => {
  const s = hv(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, u = Math.min(a, l), d = mr(u, r, o), p = e.x + e.width / 2, f = e.y + e.height / 2, g = t / 2 - p * d, h = n / 2 - f * d, y = vv(e, g, h, d, t, n), k = {
    left: Math.min(y.left - s.left, 0),
    top: Math.min(y.top - s.top, 0),
    right: Math.min(y.right - s.right, 0),
    bottom: Math.min(y.bottom - s.bottom, 0)
  };
  return {
    x: g - k.left + k.right,
    y: h - k.top + k.bottom,
    zoom: d
  };
}, or = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function wr(e) {
  return e !== void 0 && e !== "parent";
}
function Hn(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function Yu(e) {
  return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function mv(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function yv(e) {
  return { ...iv, ...e || {} };
}
function Si(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = Rt(e), a = lo({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: u } = n ? pi(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const Wu = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), Xu = (e) => e?.getRootNode?.() || window?.document, wv = ["INPUT", "SELECT", "TEXTAREA"];
function Fu(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : wv.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const Gu = (e) => "clientX" in e, Rt = (e, t) => {
  const n = Gu(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
  return {
    x: r - (t?.left ?? 0),
    y: o - (t?.top ?? 0)
  };
}, Ka = (e, t, n, r, o) => {
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
      ...Wu(s)
    };
  });
};
function bv({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - e), p = Math.abs(u - t);
  return [l, u, d, p];
}
function $o(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Ra({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case ye.Left:
      return [t - $o(t - r, i), n];
    case ye.Right:
      return [t + $o(r - t, i), n];
    case ye.Top:
      return [t, n - $o(n - o, i)];
    case ye.Bottom:
      return [t, n + $o(o - n, i)];
  }
}
function Ju({ sourceX: e, sourceY: t, sourcePosition: n = ye.Bottom, targetX: r, targetY: o, targetPosition: i = ye.Top, curvature: s = 0.25 }) {
  const [a, l] = Ra({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [u, d] = Ra({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [p, f, g, h] = bv({
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
    p,
    f,
    g,
    h
  ];
}
function Uu({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function xv({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r, elevateOnSelect: o = !1 }) {
  if (r !== void 0)
    return r;
  const i = o && n ? 1e3 : 0, s = Math.max(e.parentId ? e.internals.z : 0, t.parentId ? t.internals.z : 0);
  return i + s;
}
function $v({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = di(Yo(e), Yo(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Yr(s, fi(i)) > 0;
}
const kv = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, Cv = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), _v = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return qu(e) ? n = { ...e } : n = {
    ...e,
    id: kv(e)
  }, Cv(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Qu({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = Uu({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const ja = {
  [ye.Left]: { x: -1, y: 0 },
  [ye.Right]: { x: 1, y: 0 },
  [ye.Top]: { x: 0, y: -1 },
  [ye.Bottom]: { x: 0, y: 1 }
}, Sv = ({ source: e, sourcePosition: t = ye.Bottom, target: n }) => t === ye.Left || t === ye.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Ya = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function Ev({ source: e, sourcePosition: t = ye.Bottom, target: n, targetPosition: r = ye.Top, center: o, offset: i, stepPosition: s }) {
  const a = ja[t], l = ja[r], u = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, p = Sv({
    source: u,
    sourcePosition: t,
    target: d
  }), f = p.x !== 0 ? "x" : "y", g = p[f];
  let h = [], y, k;
  const w = { x: 0, y: 0 }, L = { x: 0, y: 0 }, [, , x, $] = Uu({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[f] * l[f] === -1) {
    f === "x" ? (y = o.x ?? u.x + (d.x - u.x) * s, k = o.y ?? (u.y + d.y) / 2) : (y = o.x ?? (u.x + d.x) / 2, k = o.y ?? u.y + (d.y - u.y) * s);
    const C = [
      { x: y, y: u.y },
      { x: y, y: d.y }
    ], M = [
      { x: u.x, y: k },
      { x: d.x, y: k }
    ];
    a[f] === g ? h = f === "x" ? C : M : h = f === "x" ? M : C;
  } else {
    const C = [{ x: u.x, y: d.y }], M = [{ x: d.x, y: u.y }];
    if (f === "x" ? h = a.x === g ? M : C : h = a.y === g ? C : M, t === r) {
      const T = Math.abs(e[f] - n[f]);
      if (T <= i) {
        const _ = Math.min(i - 1, i - T);
        a[f] === g ? w[f] = (u[f] > e[f] ? -1 : 1) * _ : L[f] = (d[f] > n[f] ? -1 : 1) * _;
      }
    }
    if (t !== r) {
      const T = f === "x" ? "y" : "x", _ = a[f] === l[T], z = u[T] > d[T], b = u[T] < d[T];
      (a[f] === 1 && (!_ && z || _ && b) || a[f] !== 1 && (!_ && b || _ && z)) && (h = f === "x" ? C : M);
    }
    const O = { x: u.x + w.x, y: u.y + w.y }, q = { x: d.x + L.x, y: d.y + L.y }, J = Math.max(Math.abs(O.x - h[0].x), Math.abs(q.x - h[0].x)), j = Math.max(Math.abs(O.y - h[0].y), Math.abs(q.y - h[0].y));
    J >= j ? (y = (O.x + q.x) / 2, k = h[0].y) : (y = h[0].x, k = (O.y + q.y) / 2);
  }
  return [[
    e,
    { x: u.x + w.x, y: u.y + w.y },
    ...h,
    { x: d.x + L.x, y: d.y + L.y },
    n
  ], y, k, x, $];
}
function Pv(e, t, n, r) {
  const o = Math.min(Ya(e, t) / 2, Ya(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function qs({ sourceX: e, sourceY: t, sourcePosition: n = ye.Bottom, targetX: r, targetY: o, targetPosition: i = ye.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20, stepPosition: d = 0.5 }) {
  const [p, f, g, h, y] = Ev({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u,
    stepPosition: d
  });
  return [p.reduce((k, w, L) => {
    let x = "";
    return L > 0 && L < p.length - 1 ? x = Pv(p[L - 1], w, p[L + 1], s) : x = `${L === 0 ? "M" : "L"}${w.x} ${w.y}`, k += x, k;
  }, ""), f, g, h, y];
}
function Wa(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function Lv(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!Wa(t) || !Wa(n))
    return null;
  const r = t.internals.handleBounds || Xa(t.handles), o = n.internals.handleBounds || Xa(n.handles), i = Fa(r?.source ?? [], e.sourceHandle), s = Fa(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === vr.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return e.onError?.("008", Rr.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = i?.position || ye.Bottom, l = s?.position || ye.Top, u = Wr(t, i, a), d = Wr(n, s, l);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function Xa(e) {
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
function Wr(e, t, n = ye.Left, r = !1) {
  const o = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? Hn(e);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch (t?.position ?? n) {
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
function Fa(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function es(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function Nv(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = es(l, t);
      i.has(u) || (s.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function Tv(e, t, n, r, o) {
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
const Bs = {
  nodeOrigin: [0, 0],
  nodeExtent: Ji,
  elevateNodesOnSelect: !0,
  defaults: {}
}, Dv = {
  ...Bs,
  checkEquality: !0
};
function Ks(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function zv(e, t, n) {
  const r = Ks(Bs, n);
  for (const o of e.values())
    if (o.parentId)
      Rs(o, e, t, r);
    else {
      const i = so(o, r.nodeOrigin), s = wr(o.extent) ? o.extent : r.nodeExtent, a = Gn(i, s, Hn(o));
      o.internals.positionAbsolute = a;
    }
}
function Mv(e, t, n, r) {
  const o = Ks(Dv, r);
  let i = e.length > 0;
  const s = new Map(t), a = o?.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const l of e) {
    let u = s.get(l.id);
    if (o.checkEquality && l === u?.internals.userNode)
      t.set(l.id, u);
    else {
      const d = so(l, o.nodeOrigin), p = wr(l.extent) ? l.extent : o.nodeExtent, f = Gn(d, p, Hn(l));
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
          z: ec(l, a),
          userNode: l
        }
      }, t.set(l.id, u);
    }
    (u.measured === void 0 || u.measured.width === void 0 || u.measured.height === void 0) && !u.hidden && (i = !1), l.parentId && Rs(u, t, n, r);
  }
  return i;
}
function Ov(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Rs(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: s } = Ks(Bs, r), a = e.parentId, l = t.get(a);
  if (!l) {
    console.warn(`Parent node ${a} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  Ov(e, n);
  const u = o ? 1e3 : 0, { x: d, y: p, z: f } = Vv(e, l, i, s, u), { positionAbsolute: g } = e.internals, h = d !== g.x || p !== g.y;
  (h || f !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: h ? { x: d, y: p } : g,
      z: f
    }
  });
}
function ec(e, t) {
  return (an(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function Vv(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = Hn(e), l = so(e, n), u = wr(e.extent) ? Gn(l, e.extent, a) : l;
  let d = Gn({ x: i + u.x, y: s + u.y }, r, a);
  e.extent === "parent" && (d = Ku(d, a, t));
  const p = ec(e, o), f = t.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: f >= p ? f + 1 : p
  };
}
function Hv(e, t, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const a = t.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? yr(a), u = ju(l, s.rect);
    i.set(s.parentId, { expandedRect: u, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const u = a.internals.positionAbsolute, d = Hn(a), p = a.origin ?? r, f = s.x < u.x ? Math.round(Math.abs(u.x - s.x)) : 0, g = s.y < u.y ? Math.round(Math.abs(u.y - s.y)) : 0, h = Math.max(d.width, Math.round(s.width)), y = Math.max(d.height, Math.round(s.height)), k = (h - d.width) * p[0], w = (y - d.height) * p[1];
    (f > 0 || g > 0 || k || w) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - f + k,
        y: a.position.y - g + w
      }
    }), n.get(l)?.forEach((L) => {
      e.some((x) => x.id === L.id) || o.push({
        id: L.id,
        type: "position",
        position: {
          x: L.position.x + f,
          y: L.position.y + g
        }
      });
    })), (d.width < s.width || d.height < s.height || f || g) && o.push({
      id: l,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: h + (f ? p[0] * f - k : 0),
        height: y + (g ? p[1] * g - w : 0)
      }
    });
  }), o;
}
function Av(e, t, n, r, o, i) {
  const s = r?.querySelector(".xyflow__viewport");
  let a = !1;
  if (!s)
    return { changes: [], updatedInternals: a };
  const l = [], u = window.getComputedStyle(s), { m22: d } = new window.DOMMatrixReadOnly(u.transform), p = [];
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
      }), a = !0;
      continue;
    }
    const h = Wu(f.nodeElement), y = g.measured.width !== h.width || g.measured.height !== h.height;
    if (h.width && h.height && (y || !g.internals.handleBounds || f.force)) {
      const k = f.nodeElement.getBoundingClientRect(), w = wr(g.extent) ? g.extent : i;
      let { positionAbsolute: L } = g.internals;
      g.parentId && g.extent === "parent" ? L = Ku(L, h, t.get(g.parentId)) : w && (L = Gn(L, w, h));
      const x = {
        ...g,
        measured: h,
        internals: {
          ...g.internals,
          positionAbsolute: L,
          handleBounds: {
            source: Ka("source", f.nodeElement, k, d, g.id),
            target: Ka("target", f.nodeElement, k, d, g.id)
          }
        }
      };
      t.set(g.id, x), g.parentId && Rs(x, t, n, { nodeOrigin: o }), a = !0, y && (l.push({
        id: g.id,
        type: "dimensions",
        dimensions: h
      }), g.expandParent && g.parentId && p.push({
        id: g.id,
        parentId: g.parentId,
        rect: yr(x, o)
      }));
    }
  }
  if (p.length > 0) {
    const f = Hv(p, t, n, o);
    l.push(...f);
  }
  return { changes: l, updatedInternals: a };
}
async function Iv({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function Ga(e, t, n, r, o, i) {
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
function Zv(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    Ga("source", l, d, e, o, s), Ga("target", l, u, e, i, a), t.set(r.id, r);
  }
}
function qv(e, t) {
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
function tc(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : tc(n, t) : !1;
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
function Bv(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !tc(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function Ei({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
function Kv({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, d = null, p = !1, f = null, g = !1, h = !1;
  function y({ noDragClassName: w, handleSelector: L, domNode: x, isSelectable: $, nodeId: C, nodeClickDistance: M = 0 }) {
    f = Lt(x);
    function O({ x: T, y: _ }, z) {
      const { nodeLookup: b, nodeExtent: E, snapGrid: P, snapToGrid: H, nodeOrigin: Z, onNodeDrag: D, onSelectionDrag: B, onError: G, updateNodePositions: U } = t();
      i = { x: T, y: _ };
      let re = !1, F = { x: 0, y: 0, x2: 0, y2: 0 };
      if (a.size > 1 && E) {
        const R = ao(a);
        F = Qi(R);
      }
      for (const [R, Y] of a) {
        if (!b.has(R))
          continue;
        let Q = { x: T - Y.distance.x, y: _ - Y.distance.y };
        H && (Q = pi(Q, P));
        let W = [
          [E[0][0], E[0][1]],
          [E[1][0], E[1][1]]
        ];
        if (a.size > 1 && E && !Y.extent) {
          const { positionAbsolute: oe } = Y.internals, ne = oe.x - F.x + E[0][0], de = oe.x + Y.measured.width - F.x2 + E[1][0], te = oe.y - F.y + E[0][1], ve = oe.y + Y.measured.height - F.y2 + E[1][1];
          W = [
            [ne, te],
            [de, ve]
          ];
        }
        const { position: he, positionAbsolute: fe } = Bu({
          nodeId: R,
          nextPosition: Q,
          nodeLookup: b,
          nodeExtent: W,
          nodeOrigin: Z,
          onError: G
        });
        re = re || Y.position.x !== he.x || Y.position.y !== he.y, Y.position = he, Y.internals.positionAbsolute = fe;
      }
      if (h = h || re, !!re && (U(a, !0), z && (r || D || !C && B))) {
        const [R, Y] = Ei({
          nodeId: C,
          dragItems: a,
          nodeLookup: b
        });
        r?.(z, a, R, Y), D?.(z, R, Y), C || B?.(z, Y);
      }
    }
    async function q() {
      if (!d)
        return;
      const { transform: T, panBy: _, autoPanSpeed: z, autoPanOnNodeDrag: b } = t();
      if (!b) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [E, P] = Ru(u, d, z);
      (E !== 0 || P !== 0) && (i.x = (i.x ?? 0) - E / T[2], i.y = (i.y ?? 0) - P / T[2], await _({ x: E, y: P }) && O(i, null)), s = requestAnimationFrame(q);
    }
    function J(T) {
      const { nodeLookup: _, multiSelectionActive: z, nodesDraggable: b, transform: E, snapGrid: P, snapToGrid: H, selectNodesOnDrag: Z, onNodeDragStart: D, onSelectionDragStart: B, unselectNodesAndEdges: G } = t();
      p = !0, (!Z || !$) && !z && C && (_.get(C)?.selected || G()), $ && Z && C && e?.(C);
      const U = Si(T.sourceEvent, { transform: E, snapGrid: P, snapToGrid: H, containerBounds: d });
      if (i = U, a = Bv(_, b, U, C), a.size > 0 && (n || D || !C && B)) {
        const [re, F] = Ei({
          nodeId: C,
          dragItems: a,
          nodeLookup: _
        });
        n?.(T.sourceEvent, a, re, F), D?.(T.sourceEvent, re, F), C || B?.(T.sourceEvent, F);
      }
    }
    const j = fh().clickDistance(M).on("start", (T) => {
      const { domNode: _, nodeDragThreshold: z, transform: b, snapGrid: E, snapToGrid: P } = t();
      d = _?.getBoundingClientRect() || null, g = !1, h = !1, z === 0 && J(T), i = Si(T.sourceEvent, { transform: b, snapGrid: E, snapToGrid: P, containerBounds: d }), u = Rt(T.sourceEvent, d);
    }).on("drag", (T) => {
      const { autoPanOnNodeDrag: _, transform: z, snapGrid: b, snapToGrid: E, nodeDragThreshold: P, nodeLookup: H } = t(), Z = Si(T.sourceEvent, { transform: z, snapGrid: b, snapToGrid: E, containerBounds: d });
      if ((T.sourceEvent.type === "touchmove" && T.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      C && !H.has(C)) && (g = !0), !g) {
        if (!l && _ && p && (l = !0, q()), !p) {
          const D = Z.xSnapped - (i.x ?? 0), B = Z.ySnapped - (i.y ?? 0);
          Math.sqrt(D * D + B * B) > P && J(T);
        }
        (i.x !== Z.xSnapped || i.y !== Z.ySnapped) && a && p && (u = Rt(T.sourceEvent, d), O(Z, T.sourceEvent));
      }
    }).on("end", (T) => {
      if (!(!p || g) && (l = !1, p = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: _, updateNodePositions: z, onNodeDragStop: b, onSelectionDragStop: E } = t();
        if (h && (z(a, !1), h = !1), o || b || !C && E) {
          const [P, H] = Ei({
            nodeId: C,
            dragItems: a,
            nodeLookup: _,
            dragging: !1
          });
          o?.(T.sourceEvent, a, P, H), b?.(T.sourceEvent, P, H), C || E?.(T.sourceEvent, H);
        }
      }
    }).filter((T) => {
      const _ = T.target;
      return !T.button && (!w || !Ja(_, `.${w}`, x)) && (!L || Ja(_, L, x));
    });
    f.call(j);
  }
  function k() {
    f?.on(".drag", null);
  }
  return {
    update: y,
    destroy: k
  };
}
function Rv(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    Yr(o, yr(i)) > 0 && r.push(i);
  return r;
}
const jv = 250;
function Yv(e, t, n, r) {
  let o = [], i = 1 / 0;
  const s = Rv(e, n, t + jv);
  for (const a of s) {
    const l = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const u of l) {
      if (r.nodeId === u.nodeId && r.type === u.type && r.id === u.id)
        continue;
      const { x: d, y: p } = Wr(a, u, u.position, !0), f = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(p - e.y, 2));
      f > t || (f < i ? (o = [{ ...u, x: d, y: p }], i = f) : f === i && o.push({ ...u, x: d, y: p }));
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
function nc(e, t, n, r, o, i = !1) {
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((u) => u.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...Wr(s, l, l.position, !0) } : l;
}
function rc(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function Wv(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const oc = () => !0;
function Xv(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: d, flowId: p, panBy: f, cancelConnection: g, onConnectStart: h, onConnect: y, onConnectEnd: k, isValidConnection: w = oc, onReconnectEnd: L, updateConnection: x, getTransform: $, getFromHandle: C, autoPanSpeed: M, dragThreshold: O = 1 }) {
  const q = Xu(e.target);
  let J = 0, j;
  const { x: T, y: _ } = Rt(e), z = q?.elementFromPoint(T, _), b = rc(i, z), E = a?.getBoundingClientRect();
  let P = !1;
  if (!E || !b)
    return;
  const H = nc(o, b, r, l, t);
  if (!H)
    return;
  let Z = Rt(e, E), D = !1, B = null, G = !1, U = null;
  function re() {
    if (!d || !E)
      return;
    const [fe, oe] = Ru(Z, E, M);
    f({ x: fe, y: oe }), J = requestAnimationFrame(re);
  }
  const F = {
    ...H,
    nodeId: o,
    type: b,
    position: H.position
  }, R = l.get(o);
  let Y = {
    inProgress: !0,
    isValid: null,
    from: Wr(R, F, ye.Left, !0),
    fromHandle: F,
    fromPosition: F.position,
    fromNode: R,
    to: Z,
    toHandle: null,
    toPosition: Ia[F.position],
    toNode: null
  };
  function Q() {
    P = !0, x(Y), h?.(e, { nodeId: o, handleId: r, handleType: b });
  }
  O === 0 && Q();
  function W(fe) {
    if (!P) {
      const { x: te, y: ve } = Rt(fe), ie = te - T, ke = ve - _;
      if (!(ie * ie + ke * ke > O * O))
        return;
      Q();
    }
    if (!C() || !F) {
      he(fe);
      return;
    }
    const oe = $();
    Z = Rt(fe, E), j = Yv(lo(Z, oe, !1, [1, 1]), n, l, F), D || (re(), D = !0);
    const ne = ic(fe, {
      handle: j,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: w,
      doc: q,
      lib: u,
      flowId: p,
      nodeLookup: l
    });
    U = ne.handleDomNode, B = ne.connection, G = Wv(!!j, ne.isValid);
    const de = {
      // from stays the same
      ...Y,
      isValid: G,
      to: ne.toHandle && G ? Wo({ x: ne.toHandle.x, y: ne.toHandle.y }, oe) : Z,
      toHandle: ne.toHandle,
      toPosition: G && ne.toHandle ? ne.toHandle.position : Ia[F.position],
      toNode: ne.toHandle ? l.get(ne.toHandle.nodeId) : null
    };
    G && j && Y.toHandle && de.toHandle && Y.toHandle.type === de.toHandle.type && Y.toHandle.nodeId === de.toHandle.nodeId && Y.toHandle.id === de.toHandle.id && Y.to.x === de.to.x && Y.to.y === de.to.y || (x(de), Y = de);
  }
  function he(fe) {
    if (P) {
      (j || U) && B && G && y?.(B);
      const { inProgress: oe, ...ne } = Y, de = {
        ...ne,
        toPosition: Y.toHandle ? Y.toPosition : null
      };
      k?.(fe, de), i && L?.(fe, de);
    }
    g(), cancelAnimationFrame(J), D = !1, G = !1, B = null, U = null, q.removeEventListener("mousemove", W), q.removeEventListener("mouseup", he), q.removeEventListener("touchmove", W), q.removeEventListener("touchend", he);
  }
  q.addEventListener("mousemove", W), q.addEventListener("mouseup", he), q.addEventListener("touchmove", W), q.addEventListener("touchend", he);
}
function ic(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = oc, nodeLookup: d }) {
  const p = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: g, y: h } = Rt(e), y = s.elementFromPoint(g, h), k = y?.classList.contains(`${a}-flow__handle`) ? y : f, w = {
    handleDomNode: k,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (k) {
    const L = rc(void 0, k), x = k.getAttribute("data-nodeid"), $ = k.getAttribute("data-handleid"), C = k.classList.contains("connectable"), M = k.classList.contains("connectableend");
    if (!x || !L)
      return w;
    const O = {
      source: p ? x : r,
      sourceHandle: p ? $ : o,
      target: p ? r : x,
      targetHandle: p ? o : $
    };
    w.connection = O;
    const q = C && M && (n === vr.Strict ? p && L === "source" || !p && L === "target" : x !== r || $ !== o);
    w.isValid = q && u(O), w.toHandle = nc(x, L, $, d, n, !0);
  }
  return w;
}
const Ua = {
  onPointerDown: Xv,
  isValid: ic
};
function Fv({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Lt(e);
  function i({ translateExtent: a, width: l, height: u, zoomStep: d = 10, pannable: p = !0, zoomable: f = !0, inversePan: g = !1 }) {
    const h = (x) => {
      const $ = n();
      if (x.sourceEvent.type !== "wheel" || !t)
        return;
      const C = -x.sourceEvent.deltaY * (x.sourceEvent.deltaMode === 1 ? 0.05 : x.sourceEvent.deltaMode ? 1 : 2e-3) * d, M = $[2] * Math.pow(2, C);
      t.scaleTo(M);
    };
    let y = [0, 0];
    const k = (x) => {
      (x.sourceEvent.type === "mousedown" || x.sourceEvent.type === "touchstart") && (y = [
        x.sourceEvent.clientX ?? x.sourceEvent.touches[0].clientX,
        x.sourceEvent.clientY ?? x.sourceEvent.touches[0].clientY
      ]);
    }, w = (x) => {
      const $ = n();
      if (x.sourceEvent.type !== "mousemove" && x.sourceEvent.type !== "touchmove" || !t)
        return;
      const C = [
        x.sourceEvent.clientX ?? x.sourceEvent.touches[0].clientX,
        x.sourceEvent.clientY ?? x.sourceEvent.touches[0].clientY
      ], M = [C[0] - y[0], C[1] - y[1]];
      y = C;
      const O = r() * Math.max($[2], Math.log($[2])) * (g ? -1 : 1), q = {
        x: $[0] - M[0] * O,
        y: $[1] - M[1] * O
      }, J = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: q.x,
        y: q.y,
        zoom: $[2]
      }, J, a);
    }, L = Iu().on("start", k).on("zoom", p ? w : null).on("zoom.wheel", f ? h : null);
    o.call(L, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: Dt
  };
}
const Gv = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, gi = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Pi = ({ x: e, y: t, zoom: n }) => ci.translate(e, t).scale(n), ir = (e, t) => e.target.closest(`.${t}`), sc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), Jv = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, Li = (e, t = 0, n = Jv, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, ac = (e) => {
  const t = e.ctrlKey && or() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function Uv({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (d) => {
    if (ir(d, t))
      return !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const p = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const k = Dt(d), w = ac(d), L = p * Math.pow(2, w);
      r.scaleTo(n, L, k, d);
      return;
    }
    const f = d.deltaMode === 1 ? 20 : 1;
    let g = o === Xt.Vertical ? 0 : d.deltaX * f, h = o === Xt.Horizontal ? 0 : d.deltaY * f;
    !or() && d.shiftKey && o !== Xt.Vertical && (g = d.deltaY * f, h = 0), r.translateBy(
      n,
      -(g / p) * i,
      -(h / p) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const y = gi(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, a?.(d, y)), e.isPanScrolling && (l?.(d, y), e.panScrollTimeout = setTimeout(() => {
      u?.(d, y), e.isPanScrolling = !1;
    }, 150));
  };
}
function Qv({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = ir(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function e0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = gi(r.transform);
    e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, o);
  };
}
function t0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && sc(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, gi(i.transform));
  };
}
function n0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && sc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && Gv(e.prevViewport, s.transform))) {
      const a = gi(s.transform);
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
function r0({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: u }) {
  return (d) => {
    const p = e || t, f = n && d.ctrlKey;
    if (d.button === 1 && d.type === "mousedown" && (ir(d, `${u}-flow__node`) || ir(d, `${u}-flow__edge`)))
      return !0;
    if (!r && !p && !o && !i && !n || s || ir(d, a) && d.type === "wheel" || ir(d, l) && (d.type !== "wheel" || o && d.type === "wheel" && !e) || !n && d.ctrlKey && d.type === "wheel")
      return !1;
    if (!n && d.type === "touchstart" && d.touches?.length > 1)
      return d.preventDefault(), !1;
    if (!p && !o && !f && d.type === "wheel" || !r && (d.type === "mousedown" || d.type === "touchstart") || Array.isArray(r) && !r.includes(d.button) && d.type === "mousedown")
      return !1;
    const g = Array.isArray(r) && r.includes(d.button) || !d.button || d.button <= 1;
    return (!d.ctrlKey || d.type === "wheel") && g;
  };
}
function o0({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: s, onPanZoomStart: a, onPanZoomEnd: l, onDraggingChange: u }) {
  const d = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, p = e.getBoundingClientRect(), f = Iu().clickDistance(!an(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), g = Lt(e).call(f);
  x({
    x: i.x,
    y: i.y,
    zoom: mr(i.zoom, t, n)
  }, [
    [0, 0],
    [p.width, p.height]
  ], o);
  const h = g.on("wheel.zoom"), y = g.on("dblclick.zoom");
  f.wheelDelta(ac);
  function k(_, z) {
    return g ? new Promise((b) => {
      f?.interpolate(z?.interpolate === "linear" ? zr : Po).transform(Li(g, z?.duration, z?.ease, () => b(!0)), _);
    }) : Promise.resolve(!1);
  }
  function w({ noWheelClassName: _, noPanClassName: z, onPaneContextMenu: b, userSelectionActive: E, panOnScroll: P, panOnDrag: H, panOnScrollMode: Z, panOnScrollSpeed: D, preventScrolling: B, zoomOnPinch: G, zoomOnScroll: U, zoomOnDoubleClick: re, zoomActivationKeyPressed: F, lib: R, onTransformChange: Y }) {
    E && !d.isZoomingOrPanning && L();
    const Q = P && !F && !E ? Uv({
      zoomPanValues: d,
      noWheelClassName: _,
      d3Selection: g,
      d3Zoom: f,
      panOnScrollMode: Z,
      panOnScrollSpeed: D,
      zoomOnPinch: G,
      onPanZoomStart: a,
      onPanZoom: s,
      onPanZoomEnd: l
    }) : Qv({
      noWheelClassName: _,
      preventScrolling: B,
      d3ZoomHandler: h
    });
    if (g.on("wheel.zoom", Q, { passive: !1 }), !E) {
      const he = e0({
        zoomPanValues: d,
        onDraggingChange: u,
        onPanZoomStart: a
      });
      f.on("start", he);
      const fe = t0({
        zoomPanValues: d,
        panOnDrag: H,
        onPaneContextMenu: !!b,
        onPanZoom: s,
        onTransformChange: Y
      });
      f.on("zoom", fe);
      const oe = n0({
        zoomPanValues: d,
        panOnDrag: H,
        panOnScroll: P,
        onPaneContextMenu: b,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      f.on("end", oe);
    }
    const W = r0({
      zoomActivationKeyPressed: F,
      panOnDrag: H,
      zoomOnScroll: U,
      panOnScroll: P,
      zoomOnDoubleClick: re,
      zoomOnPinch: G,
      userSelectionActive: E,
      noPanClassName: z,
      noWheelClassName: _,
      lib: R
    });
    f.filter(W), re ? g.on("dblclick.zoom", y) : g.on("dblclick.zoom", null);
  }
  function L() {
    f.on("zoom", null);
  }
  async function x(_, z, b) {
    const E = Pi(_), P = f?.constrain()(E, z, b);
    return P && await k(P), new Promise((H) => H(P));
  }
  async function $(_, z) {
    const b = Pi(_);
    return await k(b, z), new Promise((E) => E(b));
  }
  function C(_) {
    if (g) {
      const z = Pi(_), b = g.property("__zoom");
      (b.k !== _.zoom || b.x !== _.x || b.y !== _.y) && f?.transform(g, z, null, { sync: !0 });
    }
  }
  function M() {
    const _ = g ? Au(g.node()) : { x: 0, y: 0, k: 1 };
    return { x: _.x, y: _.y, zoom: _.k };
  }
  function O(_, z) {
    return g ? new Promise((b) => {
      f?.interpolate(z?.interpolate === "linear" ? zr : Po).scaleTo(Li(g, z?.duration, z?.ease, () => b(!0)), _);
    }) : Promise.resolve(!1);
  }
  function q(_, z) {
    return g ? new Promise((b) => {
      f?.interpolate(z?.interpolate === "linear" ? zr : Po).scaleBy(Li(g, z?.duration, z?.ease, () => b(!0)), _);
    }) : Promise.resolve(!1);
  }
  function J(_) {
    f?.scaleExtent(_);
  }
  function j(_) {
    f?.translateExtent(_);
  }
  function T(_) {
    const z = !an(_) || _ < 0 ? 0 : _;
    f?.clickDistance(z);
  }
  return {
    update: w,
    destroy: L,
    setViewport: $,
    setViewportConstrained: x,
    getViewport: M,
    scaleTo: O,
    scaleBy: q,
    setScaleExtent: J,
    setTranslateExtent: j,
    syncViewport: C,
    setClickDistance: T
  };
}
var Qa;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Qa || (Qa = {}));
var i0 = /* @__PURE__ */ ee("<div><!></div>");
function Dn(e, t) {
  ue(t, !0);
  let n = m(t, "id", 7, null), r = m(t, "type", 7, "source"), o = m(t, "position", 23, () => ye.Top), i = m(t, "style", 7), s = m(t, "class", 7), a = m(t, "isConnectable", 7), l = m(t, "isConnectableStart", 7, !0), u = m(t, "isConnectableEnd", 7, !0), d = m(t, "isValidConnection", 7), p = m(t, "onconnect", 7), f = m(t, "ondisconnect", 7), g = m(t, "children", 7), h = /* @__PURE__ */ ze(t, [
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
  const y = Pn("svelteflow__node_id"), k = Pn("svelteflow__node_connectable");
  let w = /* @__PURE__ */ S(() => r() === "target"), L = /* @__PURE__ */ S(() => a() !== void 0 ? a() : k.value), x = At(), $ = /* @__PURE__ */ S(() => x.ariaLabelConfig), C = null;
  Al(() => {
    if (p() || f()) {
      x.edges;
      let D = x.connectionLookup.get(`${y}-${r()}${n() ? `-${n()}` : ""}`);
      if (C && !sv(D, C)) {
        const B = D ?? /* @__PURE__ */ new Map();
        Za(C, B, f()), Za(B, C, p());
      }
      C = new Map(D);
    }
  });
  let M = /* @__PURE__ */ S(() => {
    if (!x.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: D, toHandle: B, isValid: G } = x.connection, U = D && D.nodeId === y && D.type === r() && D.id === n(), re = B && B.nodeId === y && B.type === r() && B.id === n(), F = x.connectionMode === vr.Strict ? D?.type !== r() : y !== D?.nodeId || n() !== D?.id;
    return [
      !0,
      U,
      re,
      F,
      re && G
    ];
  }), O = /* @__PURE__ */ S(() => Ur(c(M), 5)), q = /* @__PURE__ */ S(() => c(O)[0]), J = /* @__PURE__ */ S(() => c(O)[1]), j = /* @__PURE__ */ S(() => c(O)[2]), T = /* @__PURE__ */ S(() => c(O)[3]), _ = /* @__PURE__ */ S(() => c(O)[4]);
  function z(D) {
    const B = x.onbeforeconnect?.(D) ?? D;
    B && (x.addEdge(B), x.onconnect?.(D));
  }
  function b(D) {
    const B = Gu(D);
    (B && D.button === 0 || !B) && Ua.onPointerDown(D, {
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
      onConnect: z,
      onConnectStart: (G, U) => {
        x.onconnectstart?.(G, {
          nodeId: U.nodeId,
          handleId: U.handleId,
          handleType: U.handleType
        });
      },
      onConnectEnd: (G, U) => {
        x.onconnectend?.(G, U);
      },
      getTransform: () => [x.viewport.x, x.viewport.y, x.viewport.zoom],
      getFromHandle: () => x.connection.fromHandle,
      dragThreshold: x.connectionDragThreshold
    });
  }
  function E(D) {
    if (!y || !x.clickConnectStartHandle && !l())
      return;
    if (!x.clickConnectStartHandle) {
      x.onclickconnectstart?.(D, { nodeId: y, handleId: n(), handleType: r() }), x.clickConnectStartHandle = { nodeId: y, type: r(), id: n() };
      return;
    }
    const B = Xu(D.target), G = d() ?? x.isValidConnection, { connectionMode: U, clickConnectStartHandle: re, flowId: F, nodeLookup: R } = x, { connection: Y, isValid: Q } = Ua.isValid(D, {
      handle: { nodeId: y, id: n(), type: r() },
      connectionMode: U,
      fromNodeId: re.nodeId,
      fromHandleId: re.id ?? null,
      fromType: re.type,
      isValidConnection: G,
      flowId: F,
      doc: B,
      lib: "svelte",
      nodeLookup: R
    });
    Q && Y && z(Y);
    const W = structuredClone(_l(x.connection));
    delete W.inProgress, W.toPosition = W.toHandle ? W.toHandle.position : null, x.onclickconnectend?.(D, W), x.clickConnectStartHandle = null;
  }
  var P = i0(), H = () => {
  };
  Ge(
    P,
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
      onmousedown: b,
      ontouchstart: b,
      onclick: x.clickConnect ? E : void 0,
      onkeypress: H,
      style: i(),
      role: "button",
      "aria-label": c($)["handle.ariaLabel"],
      tabindex: "-1",
      ...h,
      [Cn]: D
    }),
    [
      () => ({
        valid: c(_),
        connectingto: c(j),
        connectingfrom: c(J),
        source: !c(w),
        target: c(w),
        connectablestart: l(),
        connectableend: u(),
        connectable: c(L),
        connectionindicator: c(L) && (!c(q) || c(T)) && (c(q) || x.clickConnectStartHandle ? u() : l())
      })
    ]
  );
  var Z = I(P);
  return je(Z, () => g() ?? nt), A(P), N(e, P), ce({
    get id() {
      return n();
    },
    set id(D = null) {
      n(D), v();
    },
    get type() {
      return r();
    },
    set type(D = "source") {
      r(D), v();
    },
    get position() {
      return o();
    },
    set position(D = ye.Top) {
      o(D), v();
    },
    get style() {
      return i();
    },
    set style(D) {
      i(D), v();
    },
    get class() {
      return s();
    },
    set class(D) {
      s(D), v();
    },
    get isConnectable() {
      return a();
    },
    set isConnectable(D) {
      a(D), v();
    },
    get isConnectableStart() {
      return l();
    },
    set isConnectableStart(D = !0) {
      l(D), v();
    },
    get isConnectableEnd() {
      return u();
    },
    set isConnectableEnd(D = !0) {
      u(D), v();
    },
    get isValidConnection() {
      return d();
    },
    set isValidConnection(D) {
      d(D), v();
    },
    get onconnect() {
      return p();
    },
    set onconnect(D) {
      p(D), v();
    },
    get ondisconnect() {
      return f();
    },
    set ondisconnect(D) {
      f(D), v();
    },
    get children() {
      return g();
    },
    set children(D) {
      g(D), v();
    }
  });
}
se(
  Dn,
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
var s0 = /* @__PURE__ */ ee("<!> <!>", 1);
function js(e, t) {
  ue(t, !0);
  let n = m(t, "data", 7), r = m(t, "targetPosition", 23, () => ye.Top), o = m(t, "sourcePosition", 23, () => ye.Bottom);
  var i = s0(), s = le(i);
  Dn(s, {
    type: "target",
    get position() {
      return r();
    }
  });
  var a = V(s), l = V(a);
  return Dn(l, {
    type: "source",
    get position() {
      return o();
    }
  }), xe(() => Ve(a, ` ${n()?.label ?? ""} `)), N(e, i), ce({
    get data() {
      return n();
    },
    set data(u) {
      n(u), v();
    },
    get targetPosition() {
      return r();
    },
    set targetPosition(u = ye.Top) {
      r(u), v();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(u = ye.Bottom) {
      o(u), v();
    }
  });
}
se(js, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var a0 = /* @__PURE__ */ ee(" <!>", 1);
function lc(e, t) {
  ue(t, !0);
  let n = m(t, "data", 23, () => ({ label: "Node" })), r = m(t, "sourcePosition", 23, () => ye.Bottom);
  me();
  var o = a0(), i = le(o), s = V(i);
  return Dn(s, {
    type: "source",
    get position() {
      return r();
    }
  }), xe(() => Ve(i, `${n()?.label ?? ""} `)), N(e, o), ce({
    get data() {
      return n();
    },
    set data(a = { label: "Node" }) {
      n(a), v();
    },
    get sourcePosition() {
      return r();
    },
    set sourcePosition(a = ye.Bottom) {
      r(a), v();
    }
  });
}
se(lc, { data: {}, sourcePosition: {} }, [], [], !0);
var l0 = /* @__PURE__ */ ee(" <!>", 1);
function uc(e, t) {
  ue(t, !0);
  let n = m(t, "data", 23, () => ({ label: "Node" })), r = m(t, "targetPosition", 23, () => ye.Top);
  me();
  var o = l0(), i = le(o), s = V(i);
  return Dn(s, {
    type: "target",
    get position() {
      return r();
    }
  }), xe(() => Ve(i, `${n()?.label ?? ""} `)), N(e, o), ce({
    get data() {
      return n();
    },
    set data(a = { label: "Node" }) {
      n(a), v();
    },
    get targetPosition() {
      return r();
    },
    set targetPosition(a = ye.Top) {
      r(a), v();
    }
  });
}
se(uc, { data: {}, targetPosition: {} }, [], [], !0);
function cc(e, t) {
}
se(cc, {}, [], [], !0);
function Ni(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function dc(e, t) {
  const n = /* @__PURE__ */ S(At), r = /* @__PURE__ */ S(() => c(n).domNode);
  let o;
  return c(r) ? Ni(e, c(r), t) : o = $s(() => {
    Re(() => {
      Ni(e, c(r), t), o?.();
    });
  }), {
    async update(i) {
      Ni(e, c(r), i);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e), o?.();
    }
  };
}
function fc() {
  let e = /* @__PURE__ */ Ce(typeof window > "u");
  if (c(e)) {
    const t = $s(() => {
      Re(() => {
        X(e, !1), t?.();
      });
    });
  }
  return {
    get value() {
      return c(e);
    }
  };
}
const el = (e) => lv(e), u0 = (e) => qu(e);
function Ut(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const Xo = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var c0 = /* @__PURE__ */ ee("<div><!></div>");
const d0 = {
  hash: "svelte-w2n27y",
  code: ".transparent.svelte-w2n27y {background:transparent;}"
};
function pc(e, t) {
  ue(t, !0), Ne(e, d0);
  let n = m(t, "x", 7, 0), r = m(t, "y", 7, 0), o = m(t, "width", 7), i = m(t, "height", 7), s = m(t, "selectEdgeOnClick", 7, !1), a = m(t, "transparent", 7, !1), l = m(t, "class", 7), u = m(t, "children", 7), d = /* @__PURE__ */ ze(t, [
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
  const p = At(), f = Pn("svelteflow__edge_id");
  let g = /* @__PURE__ */ S(() => p.visible.edges.get(f)?.zIndex);
  var h = c0(), y = () => {
    s() && f && p.handleEdgeSelection(f);
  };
  Ge(
    h,
    (w) => ({
      class: [
        "svelte-flow__edge-label",
        { transparent: a() },
        l()
      ],
      tabindex: "-1",
      onclick: y,
      ...d,
      [Kt]: w
    }),
    [
      () => ({
        display: fc().value ? "none" : void 0,
        cursor: s() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: Ut(o()),
        height: Ut(i()),
        "z-index": c(g)
      })
    ],
    "svelte-w2n27y"
  );
  var k = I(h);
  return je(k, () => u() ?? nt), A(h), it(h, (w, L) => dc?.(w, L), () => "edge-labels"), N(e, h), ce({
    get x() {
      return n();
    },
    set x(w = 0) {
      n(w), v();
    },
    get y() {
      return r();
    },
    set y(w = 0) {
      r(w), v();
    },
    get width() {
      return o();
    },
    set width(w) {
      o(w), v();
    },
    get height() {
      return i();
    },
    set height(w) {
      i(w), v();
    },
    get selectEdgeOnClick() {
      return s();
    },
    set selectEdgeOnClick(w = !1) {
      s(w), v();
    },
    get transparent() {
      return a();
    },
    set transparent(w = !1) {
      a(w), v();
    },
    get class() {
      return l();
    },
    set class(w) {
      l(w), v();
    },
    get children() {
      return u();
    },
    set children(w) {
      u(w), v();
    }
  });
}
se(
  pc,
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
var f0 = /* @__PURE__ */ ge("<path></path>"), p0 = /* @__PURE__ */ ge('<path fill="none"></path><!><!>', 1);
function uo(e, t) {
  ue(t, !0);
  let n = m(t, "id", 7), r = m(t, "path", 7), o = m(t, "label", 7), i = m(t, "labelX", 7), s = m(t, "labelY", 7), a = m(t, "labelStyle", 7), l = m(t, "markerStart", 7), u = m(t, "markerEnd", 7), d = m(t, "style", 7), p = m(t, "interactionWidth", 7, 20), f = m(t, "class", 7), g = /* @__PURE__ */ ze(t, [
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
  var h = p0(), y = le(h), k = V(y);
  {
    var w = ($) => {
      var C = f0();
      Ge(C, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": p(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...g
      })), N($, C);
    };
    ae(k, ($) => {
      p() > 0 && $(w);
    });
  }
  var L = V(k);
  {
    var x = ($) => {
      pc($, {
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
        children: (C, M) => {
          me();
          var O = $e();
          xe(() => Ve(O, o())), N(C, O);
        },
        $$slots: { default: !0 }
      });
    };
    ae(L, ($) => {
      o() && $(x);
    });
  }
  return xe(() => {
    we(y, "id", n()), we(y, "d", r()), yt(y, 0, wn(["svelte-flow__edge-path", f()])), we(y, "marker-start", l()), we(y, "marker-end", u()), ft(y, d());
  }), N(e, h), ce({
    get id() {
      return n();
    },
    set id($) {
      n($), v();
    },
    get path() {
      return r();
    },
    set path($) {
      r($), v();
    },
    get label() {
      return o();
    },
    set label($) {
      o($), v();
    },
    get labelX() {
      return i();
    },
    set labelX($) {
      i($), v();
    },
    get labelY() {
      return s();
    },
    set labelY($) {
      s($), v();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle($) {
      a($), v();
    },
    get markerStart() {
      return l();
    },
    set markerStart($) {
      l($), v();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd($) {
      u($), v();
    },
    get style() {
      return d();
    },
    set style($) {
      d($), v();
    },
    get interactionWidth() {
      return p();
    },
    set interactionWidth($ = 20) {
      p($), v();
    },
    get class() {
      return f();
    },
    set class($) {
      f($), v();
    }
  });
}
se(
  uo,
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
function Ys(e, t) {
  ue(t, !0);
  let n = m(t, "id", 7), r = m(t, "interactionWidth", 7), o = m(t, "label", 7), i = m(t, "labelStyle", 7), s = m(t, "markerEnd", 7), a = m(t, "markerStart", 7), l = m(t, "pathOptions", 7), u = m(t, "sourcePosition", 7), d = m(t, "sourceX", 7), p = m(t, "sourceY", 7), f = m(t, "style", 7), g = m(t, "targetPosition", 7), h = m(t, "targetX", 7), y = m(t, "targetY", 7), k = /* @__PURE__ */ S(() => Ju({
    sourceX: d(),
    sourceY: p(),
    targetX: h(),
    targetY: y(),
    sourcePosition: u(),
    targetPosition: g(),
    curvature: l()?.curvature
  })), w = /* @__PURE__ */ S(() => Ur(c(k), 3)), L = /* @__PURE__ */ S(() => c(w)[0]), x = /* @__PURE__ */ S(() => c(w)[1]), $ = /* @__PURE__ */ S(() => c(w)[2]);
  return uo(e, {
    get id() {
      return n();
    },
    get path() {
      return c(L);
    },
    get labelX() {
      return c(x);
    },
    get labelY() {
      return c($);
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
  }), ce({
    get id() {
      return n();
    },
    set id(C) {
      n(C), v();
    },
    get interactionWidth() {
      return r();
    },
    set interactionWidth(C) {
      r(C), v();
    },
    get label() {
      return o();
    },
    set label(C) {
      o(C), v();
    },
    get labelStyle() {
      return i();
    },
    set labelStyle(C) {
      i(C), v();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(C) {
      s(C), v();
    },
    get markerStart() {
      return a();
    },
    set markerStart(C) {
      a(C), v();
    },
    get pathOptions() {
      return l();
    },
    set pathOptions(C) {
      l(C), v();
    },
    get sourcePosition() {
      return u();
    },
    set sourcePosition(C) {
      u(C), v();
    },
    get sourceX() {
      return d();
    },
    set sourceX(C) {
      d(C), v();
    },
    get sourceY() {
      return p();
    },
    set sourceY(C) {
      p(C), v();
    },
    get style() {
      return f();
    },
    set style(C) {
      f(C), v();
    },
    get targetPosition() {
      return g();
    },
    set targetPosition(C) {
      g(C), v();
    },
    get targetX() {
      return h();
    },
    set targetX(C) {
      h(C), v();
    },
    get targetY() {
      return y();
    },
    set targetY(C) {
      y(C), v();
    }
  });
}
se(
  Ys,
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
function gc(e, t) {
  ue(t, !0);
  let n = m(t, "interactionWidth", 7), r = m(t, "label", 7), o = m(t, "labelStyle", 7), i = m(t, "style", 7), s = m(t, "markerEnd", 7), a = m(t, "markerStart", 7), l = m(t, "sourcePosition", 7), u = m(t, "sourceX", 7), d = m(t, "sourceY", 7), p = m(t, "targetPosition", 7), f = m(t, "targetX", 7), g = m(t, "targetY", 7), h = /* @__PURE__ */ S(() => qs({
    sourceX: u(),
    sourceY: d(),
    targetX: f(),
    targetY: g(),
    sourcePosition: l(),
    targetPosition: p()
  })), y = /* @__PURE__ */ S(() => Ur(c(h), 3)), k = /* @__PURE__ */ S(() => c(y)[0]), w = /* @__PURE__ */ S(() => c(y)[1]), L = /* @__PURE__ */ S(() => c(y)[2]);
  return uo(e, {
    get path() {
      return c(k);
    },
    get labelX() {
      return c(w);
    },
    get labelY() {
      return c(L);
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
  }), ce({
    get interactionWidth() {
      return n();
    },
    set interactionWidth(x) {
      n(x), v();
    },
    get label() {
      return r();
    },
    set label(x) {
      r(x), v();
    },
    get labelStyle() {
      return o();
    },
    set labelStyle(x) {
      o(x), v();
    },
    get style() {
      return i();
    },
    set style(x) {
      i(x), v();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(x) {
      s(x), v();
    },
    get markerStart() {
      return a();
    },
    set markerStart(x) {
      a(x), v();
    },
    get sourcePosition() {
      return l();
    },
    set sourcePosition(x) {
      l(x), v();
    },
    get sourceX() {
      return u();
    },
    set sourceX(x) {
      u(x), v();
    },
    get sourceY() {
      return d();
    },
    set sourceY(x) {
      d(x), v();
    },
    get targetPosition() {
      return p();
    },
    set targetPosition(x) {
      p(x), v();
    },
    get targetX() {
      return f();
    },
    set targetX(x) {
      f(x), v();
    },
    get targetY() {
      return g();
    },
    set targetY(x) {
      g(x), v();
    }
  });
}
se(
  gc,
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
function hc(e, t) {
  ue(t, !0);
  let n = m(t, "sourceX", 7), r = m(t, "sourceY", 7), o = m(t, "targetX", 7), i = m(t, "targetY", 7), s = m(t, "label", 7), a = m(t, "labelStyle", 7), l = m(t, "markerStart", 7), u = m(t, "markerEnd", 7), d = m(t, "interactionWidth", 7), p = m(t, "style", 7), f = /* @__PURE__ */ S(() => Qu({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), g = /* @__PURE__ */ S(() => Ur(c(f), 3)), h = /* @__PURE__ */ S(() => c(g)[0]), y = /* @__PURE__ */ S(() => c(g)[1]), k = /* @__PURE__ */ S(() => c(g)[2]);
  return uo(e, {
    get path() {
      return c(h);
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
      return p();
    }
  }), ce({
    get sourceX() {
      return n();
    },
    set sourceX(w) {
      n(w), v();
    },
    get sourceY() {
      return r();
    },
    set sourceY(w) {
      r(w), v();
    },
    get targetX() {
      return o();
    },
    set targetX(w) {
      o(w), v();
    },
    get targetY() {
      return i();
    },
    set targetY(w) {
      i(w), v();
    },
    get label() {
      return s();
    },
    set label(w) {
      s(w), v();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(w) {
      a(w), v();
    },
    get markerStart() {
      return l();
    },
    set markerStart(w) {
      l(w), v();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(w) {
      u(w), v();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(w) {
      d(w), v();
    },
    get style() {
      return p();
    },
    set style(w) {
      p(w), v();
    }
  });
}
se(
  hc,
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
function vc(e, t) {
  ue(t, !0);
  let n = m(t, "sourceX", 7), r = m(t, "sourceY", 7), o = m(t, "sourcePosition", 7), i = m(t, "targetX", 7), s = m(t, "targetY", 7), a = m(t, "targetPosition", 7), l = m(t, "label", 7), u = m(t, "labelStyle", 7), d = m(t, "markerStart", 7), p = m(t, "markerEnd", 7), f = m(t, "interactionWidth", 7), g = m(t, "style", 7), h = /* @__PURE__ */ S(() => qs({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), y = /* @__PURE__ */ S(() => Ur(c(h), 3)), k = /* @__PURE__ */ S(() => c(y)[0]), w = /* @__PURE__ */ S(() => c(y)[1]), L = /* @__PURE__ */ S(() => c(y)[2]);
  return uo(e, {
    get path() {
      return c(k);
    },
    get labelX() {
      return c(w);
    },
    get labelY() {
      return c(L);
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
      return p();
    },
    get interactionWidth() {
      return f();
    },
    get style() {
      return g();
    }
  }), ce({
    get sourceX() {
      return n();
    },
    set sourceX(x) {
      n(x), v();
    },
    get sourceY() {
      return r();
    },
    set sourceY(x) {
      r(x), v();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(x) {
      o(x), v();
    },
    get targetX() {
      return i();
    },
    set targetX(x) {
      i(x), v();
    },
    get targetY() {
      return s();
    },
    set targetY(x) {
      s(x), v();
    },
    get targetPosition() {
      return a();
    },
    set targetPosition(x) {
      a(x), v();
    },
    get label() {
      return l();
    },
    set label(x) {
      l(x), v();
    },
    get labelStyle() {
      return u();
    },
    set labelStyle(x) {
      u(x), v();
    },
    get markerStart() {
      return d();
    },
    set markerStart(x) {
      d(x), v();
    },
    get markerEnd() {
      return p();
    },
    set markerEnd(x) {
      p(x), v();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(x) {
      f(x), v();
    },
    get style() {
      return g();
    },
    set style(x) {
      g(x), v();
    }
  });
}
se(
  vc,
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
function g0(e) {
  let t = 0, n = Wn(0), r;
  return () => {
    Ef() && (c(n), no(() => (t === 0 && (r = et(() => e(() => Co(n)))), t += 1, () => {
      If().then(() => {
        t -= 1, t === 0 && (r?.(), r = void 0);
      });
    })));
  };
}
class h0 {
  #t;
  #e;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(t, n) {
    this.#t = t, this.#e = g0(n);
  }
  get current() {
    return this.#e(), this.#t();
  }
}
const v0 = /\(.+\)/, m0 = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class y0 extends h0 {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(t, n) {
    let r = v0.test(t) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    t.split(/[\s,]+/).some((i) => m0.has(i.trim())) ? t : `(${t})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => Zi(o, "change", i)
    );
  }
}
function w0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  return Is(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function tl(e) {
  const { edges: t, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l } = e, u = /* @__PURE__ */ new Map();
  for (const d of t) {
    const p = r.get(d.source), f = r.get(d.target);
    if (!p || !f)
      continue;
    if (a) {
      const { visibleNodes: y, transform: k, width: w, height: L } = e;
      if ($v({
        sourceNode: p,
        targetNode: f,
        width: w,
        height: L,
        transform: k
      }))
        y.set(p.id, p), y.set(f.id, f);
      else
        continue;
    }
    const g = o.get(d.id);
    if (g && d === g.edge && p == g.sourceNode && f == g.targetNode) {
      u.set(d.id, g);
      continue;
    }
    const h = Lv({
      id: d.id,
      sourceNode: p,
      targetNode: f,
      sourceHandle: d.sourceHandle || null,
      targetHandle: d.targetHandle || null,
      connectionMode: i,
      onError: s
    });
    h && u.set(d.id, {
      ...n,
      ...d,
      ...h,
      zIndex: xv({
        selected: d.selected,
        zIndex: d.zIndex ?? n.zIndex,
        sourceNode: p,
        targetNode: f,
        elevateOnSelect: l
      }),
      sourceNode: p,
      targetNode: f,
      edge: d
    });
  }
  return u;
}
const mc = {
  input: lc,
  output: uc,
  default: js,
  group: cc
}, yc = {
  straight: hc,
  smoothstep: gc,
  default: Ys,
  step: vc
};
function b0(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = ao(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return Zs(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function x0(e) {
  class t {
    #t = /* @__PURE__ */ S(() => e.props.id ?? "1");
    get flowId() {
      return c(this.#t);
    }
    set flowId(r) {
      X(this.#t, r);
    }
    #e = /* @__PURE__ */ Ce(null);
    get domNode() {
      return c(this.#e);
    }
    set domNode(r) {
      X(this.#e, r);
    }
    #n = /* @__PURE__ */ Ce(null);
    get panZoom() {
      return c(this.#n);
    }
    set panZoom(r) {
      X(this.#n, r);
    }
    #r = /* @__PURE__ */ Ce(e.width ?? 0);
    get width() {
      return c(this.#r);
    }
    set width(r) {
      X(this.#r, r);
    }
    #o = /* @__PURE__ */ Ce(e.height ?? 0);
    get height() {
      return c(this.#o);
    }
    set height(r) {
      X(this.#o, r);
    }
    #i = /* @__PURE__ */ S(() => {
      const r = Mv(e.nodes, this.nodeLookup, this.parentLookup, {
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
      X(this.#i, r);
    }
    #s = /* @__PURE__ */ S(() => this.panZoom !== null);
    get viewportInitialized() {
      return c(this.#s);
    }
    set viewportInitialized(r) {
      X(this.#s, r);
    }
    #a = /* @__PURE__ */ S(() => (Zv(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
    get _edges() {
      return c(this.#a);
    }
    set _edges(r) {
      X(this.#a, r);
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
    #l = /* @__PURE__ */ S(() => {
      const r = this._prevSelectedNodeIds.size, o = /* @__PURE__ */ new Set(), i = this.nodes.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedNodeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedNodeIds.size > 0) && (this._prevSelectedNodes = i), this._prevSelectedNodeIds = o, this._prevSelectedNodes;
    });
    get selectedNodes() {
      return c(this.#l);
    }
    set selectedNodes(r) {
      X(this.#l, r);
    }
    _prevSelectedEdges = [];
    _prevSelectedEdgeIds = /* @__PURE__ */ new Set();
    #u = /* @__PURE__ */ S(() => {
      const r = this._prevSelectedEdgeIds.size, o = /* @__PURE__ */ new Set(), i = this.edges.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedEdgeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedEdgeIds.size > 0) && (this._prevSelectedEdges = i), this._prevSelectedEdgeIds = o, this._prevSelectedEdges;
    });
    get selectedEdges() {
      return c(this.#u);
    }
    set selectedEdges(r) {
      X(this.#u, r);
    }
    selectionChangeHandlers = /* @__PURE__ */ new Map();
    nodeLookup = /* @__PURE__ */ new Map();
    parentLookup = /* @__PURE__ */ new Map();
    connectionLookup = /* @__PURE__ */ new Map();
    edgeLookup = /* @__PURE__ */ new Map();
    _prevVisibleEdges = /* @__PURE__ */ new Map();
    #c = /* @__PURE__ */ S(() => {
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
      let p, f;
      const g = {
        edges: o,
        defaultEdgeOptions: d,
        previousEdges: i,
        nodeLookup: s,
        connectionMode: a,
        elevateEdgesOnSelect: e.props.elevateEdgesOnSelect ?? !0,
        onerror: l
      };
      if (u) {
        const { viewport: h, width: y, height: k } = this, w = [h.x, h.y, h.zoom];
        p = w0(s, w, y, k), f = tl({
          ...g,
          onlyRenderVisible: !0,
          visibleNodes: p,
          transform: w,
          width: y,
          height: k
        });
      } else
        p = this.nodeLookup, f = tl(g);
      return { nodes: p, edges: f };
    });
    get visible() {
      return c(this.#c);
    }
    set visible(r) {
      X(this.#c, r);
    }
    #d = /* @__PURE__ */ S(() => e.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return c(this.#d);
    }
    set nodesDraggable(r) {
      X(this.#d, r);
    }
    #f = /* @__PURE__ */ S(() => e.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return c(this.#f);
    }
    set nodesConnectable(r) {
      X(this.#f, r);
    }
    #p = /* @__PURE__ */ S(() => e.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return c(this.#p);
    }
    set elementsSelectable(r) {
      X(this.#p, r);
    }
    #g = /* @__PURE__ */ S(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return c(this.#g);
    }
    set nodesFocusable(r) {
      X(this.#g, r);
    }
    #h = /* @__PURE__ */ S(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return c(this.#h);
    }
    set edgesFocusable(r) {
      X(this.#h, r);
    }
    #v = /* @__PURE__ */ S(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return c(this.#v);
    }
    set disableKeyboardA11y(r) {
      X(this.#v, r);
    }
    #m = /* @__PURE__ */ S(() => e.props.minZoom ?? 0.5);
    get minZoom() {
      return c(this.#m);
    }
    set minZoom(r) {
      X(this.#m, r);
    }
    #y = /* @__PURE__ */ S(() => e.props.maxZoom ?? 2);
    get maxZoom() {
      return c(this.#y);
    }
    set maxZoom(r) {
      X(this.#y, r);
    }
    #w = /* @__PURE__ */ S(() => e.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return c(this.#w);
    }
    set nodeOrigin(r) {
      X(this.#w, r);
    }
    #b = /* @__PURE__ */ S(() => e.props.nodeExtent ?? Ji);
    get nodeExtent() {
      return c(this.#b);
    }
    set nodeExtent(r) {
      X(this.#b, r);
    }
    #x = /* @__PURE__ */ S(() => e.props.translateExtent ?? Ji);
    get translateExtent() {
      return c(this.#x);
    }
    set translateExtent(r) {
      X(this.#x, r);
    }
    #$ = /* @__PURE__ */ S(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return c(this.#$);
    }
    set defaultEdgeOptions(r) {
      X(this.#$, r);
    }
    #k = /* @__PURE__ */ S(() => e.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return c(this.#k);
    }
    set nodeDragThreshold(r) {
      X(this.#k, r);
    }
    #C = /* @__PURE__ */ S(() => e.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return c(this.#C);
    }
    set autoPanOnNodeDrag(r) {
      X(this.#C, r);
    }
    #_ = /* @__PURE__ */ S(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return c(this.#_);
    }
    set autoPanOnConnect(r) {
      X(this.#_, r);
    }
    #S = /* @__PURE__ */ S(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return c(this.#S);
    }
    set autoPanOnNodeFocus(r) {
      X(this.#S, r);
    }
    #E = /* @__PURE__ */ S(() => e.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return c(this.#E);
    }
    set connectionDragThreshold(r) {
      X(this.#E, r);
    }
    fitViewQueued = e.props.fitView ?? !1;
    fitViewOptions = e.props.fitViewOptions;
    fitViewResolver = null;
    #P = /* @__PURE__ */ S(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return c(this.#P);
    }
    set snapGrid(r) {
      X(this.#P, r);
    }
    #L = /* @__PURE__ */ Ce(!1);
    get dragging() {
      return c(this.#L);
    }
    set dragging(r) {
      X(this.#L, r);
    }
    #N = /* @__PURE__ */ Ce(null);
    get selectionRect() {
      return c(this.#N);
    }
    set selectionRect(r) {
      X(this.#N, r);
    }
    #T = /* @__PURE__ */ Ce(!1);
    get selectionKeyPressed() {
      return c(this.#T);
    }
    set selectionKeyPressed(r) {
      X(this.#T, r);
    }
    #D = /* @__PURE__ */ Ce(!1);
    get multiselectionKeyPressed() {
      return c(this.#D);
    }
    set multiselectionKeyPressed(r) {
      X(this.#D, r);
    }
    #z = /* @__PURE__ */ Ce(!1);
    get deleteKeyPressed() {
      return c(this.#z);
    }
    set deleteKeyPressed(r) {
      X(this.#z, r);
    }
    #M = /* @__PURE__ */ Ce(!1);
    get panActivationKeyPressed() {
      return c(this.#M);
    }
    set panActivationKeyPressed(r) {
      X(this.#M, r);
    }
    #O = /* @__PURE__ */ Ce(!1);
    get zoomActivationKeyPressed() {
      return c(this.#O);
    }
    set zoomActivationKeyPressed(r) {
      X(this.#O, r);
    }
    #V = /* @__PURE__ */ Ce(null);
    get selectionRectMode() {
      return c(this.#V);
    }
    set selectionRectMode(r) {
      X(this.#V, r);
    }
    #H = /* @__PURE__ */ Ce("");
    get ariaLiveMessage() {
      return c(this.#H);
    }
    set ariaLiveMessage(r) {
      X(this.#H, r);
    }
    #A = /* @__PURE__ */ S(() => e.props.selectionMode ?? jo.Partial);
    get selectionMode() {
      return c(this.#A);
    }
    set selectionMode(r) {
      X(this.#A, r);
    }
    #I = /* @__PURE__ */ S(() => ({ ...mc, ...e.props.nodeTypes }));
    get nodeTypes() {
      return c(this.#I);
    }
    set nodeTypes(r) {
      X(this.#I, r);
    }
    #Z = /* @__PURE__ */ S(() => ({ ...yc, ...e.props.edgeTypes }));
    get edgeTypes() {
      return c(this.#Z);
    }
    set edgeTypes(r) {
      X(this.#Z, r);
    }
    #q = /* @__PURE__ */ S(() => e.props.noPanClass ?? "nopan");
    get noPanClass() {
      return c(this.#q);
    }
    set noPanClass(r) {
      X(this.#q, r);
    }
    #B = /* @__PURE__ */ S(() => e.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return c(this.#B);
    }
    set noDragClass(r) {
      X(this.#B, r);
    }
    #K = /* @__PURE__ */ S(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return c(this.#K);
    }
    set noWheelClass(r) {
      X(this.#K, r);
    }
    #R = /* @__PURE__ */ S(() => yv(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return c(this.#R);
    }
    set ariaLabelConfig(r) {
      X(this.#R, r);
    }
    #j = /* @__PURE__ */ Ce(b0(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return c(this.#j);
    }
    set _viewport(r) {
      X(this.#j, r);
    }
    get viewport() {
      return e.viewport ?? this._viewport;
    }
    set viewport(r) {
      e.viewport && (e.viewport = r), this._viewport = r;
    }
    #Y = /* @__PURE__ */ Ce(
      // _connection is viewport independent and originating from XYHandle
      Ui
    );
    get _connection() {
      return c(this.#Y);
    }
    set _connection(r) {
      X(this.#Y, r);
    }
    #W = /* @__PURE__ */ S(() => this._connection.inProgress ? {
      ...this._connection,
      to: lo(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return c(this.#W);
    }
    set connection(r) {
      X(this.#W, r);
    }
    #X = /* @__PURE__ */ S(() => e.props.connectionMode ?? vr.Strict);
    get connectionMode() {
      return c(this.#X);
    }
    set connectionMode(r) {
      X(this.#X, r);
    }
    #F = /* @__PURE__ */ S(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return c(this.#F);
    }
    set connectionRadius(r) {
      X(this.#F, r);
    }
    #G = /* @__PURE__ */ S(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return c(this.#G);
    }
    set isValidConnection(r) {
      X(this.#G, r);
    }
    #J = /* @__PURE__ */ S(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return c(this.#J);
    }
    set selectNodesOnDrag(r) {
      X(this.#J, r);
    }
    #U = /* @__PURE__ */ S(() => e.props.defaultMarkerColor ?? "#b1b1b7");
    get defaultMarkerColor() {
      return c(this.#U);
    }
    set defaultMarkerColor(r) {
      X(this.#U, r);
    }
    #Q = /* @__PURE__ */ S(() => Nv(e.edges, {
      defaultColor: this.defaultMarkerColor,
      id: this.flowId,
      defaultMarkerStart: this.defaultEdgeOptions.markerStart,
      defaultMarkerEnd: this.defaultEdgeOptions.markerEnd
    }));
    get markers() {
      return c(this.#Q);
    }
    set markers(r) {
      X(this.#Q, r);
    }
    #ee = /* @__PURE__ */ S(() => e.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return c(this.#ee);
    }
    set onlyRenderVisibleElements(r) {
      X(this.#ee, r);
    }
    #te = /* @__PURE__ */ S(() => e.props.onflowerror ?? gv);
    get onerror() {
      return c(this.#te);
    }
    set onerror(r) {
      X(this.#te, r);
    }
    #ne = /* @__PURE__ */ S(() => e.props.ondelete);
    get ondelete() {
      return c(this.#ne);
    }
    set ondelete(r) {
      X(this.#ne, r);
    }
    #re = /* @__PURE__ */ S(() => e.props.onbeforedelete);
    get onbeforedelete() {
      return c(this.#re);
    }
    set onbeforedelete(r) {
      X(this.#re, r);
    }
    #oe = /* @__PURE__ */ S(() => e.props.onbeforeconnect);
    get onbeforeconnect() {
      return c(this.#oe);
    }
    set onbeforeconnect(r) {
      X(this.#oe, r);
    }
    #ie = /* @__PURE__ */ S(() => e.props.onconnect);
    get onconnect() {
      return c(this.#ie);
    }
    set onconnect(r) {
      X(this.#ie, r);
    }
    #se = /* @__PURE__ */ S(() => e.props.onconnectstart);
    get onconnectstart() {
      return c(this.#se);
    }
    set onconnectstart(r) {
      X(this.#se, r);
    }
    #ae = /* @__PURE__ */ S(() => e.props.onconnectend);
    get onconnectend() {
      return c(this.#ae);
    }
    set onconnectend(r) {
      X(this.#ae, r);
    }
    #le = /* @__PURE__ */ S(() => e.props.onbeforereconnect);
    get onbeforereconnect() {
      return c(this.#le);
    }
    set onbeforereconnect(r) {
      X(this.#le, r);
    }
    #ue = /* @__PURE__ */ S(() => e.props.onreconnect);
    get onreconnect() {
      return c(this.#ue);
    }
    set onreconnect(r) {
      X(this.#ue, r);
    }
    #ce = /* @__PURE__ */ S(() => e.props.onreconnectstart);
    get onreconnectstart() {
      return c(this.#ce);
    }
    set onreconnectstart(r) {
      X(this.#ce, r);
    }
    #de = /* @__PURE__ */ S(() => e.props.onreconnectend);
    get onreconnectend() {
      return c(this.#de);
    }
    set onreconnectend(r) {
      X(this.#de, r);
    }
    #fe = /* @__PURE__ */ S(() => e.props.clickConnect ?? !0);
    get clickConnect() {
      return c(this.#fe);
    }
    set clickConnect(r) {
      X(this.#fe, r);
    }
    #pe = /* @__PURE__ */ S(() => e.props.onclickconnectstart);
    get onclickconnectstart() {
      return c(this.#pe);
    }
    set onclickconnectstart(r) {
      X(this.#pe, r);
    }
    #ge = /* @__PURE__ */ S(() => e.props.onclickconnectend);
    get onclickconnectend() {
      return c(this.#ge);
    }
    set onclickconnectend(r) {
      X(this.#ge, r);
    }
    #he = /* @__PURE__ */ Ce(null);
    get clickConnectStartHandle() {
      return c(this.#he);
    }
    set clickConnectStartHandle(r) {
      X(this.#he, r);
    }
    #ve = /* @__PURE__ */ S(() => e.props.onselectiondrag);
    get onselectiondrag() {
      return c(this.#ve);
    }
    set onselectiondrag(r) {
      X(this.#ve, r);
    }
    #me = /* @__PURE__ */ S(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return c(this.#me);
    }
    set onselectiondragstart(r) {
      X(this.#me, r);
    }
    #ye = /* @__PURE__ */ S(() => e.props.onselectiondragstop);
    get onselectiondragstop() {
      return c(this.#ye);
    }
    set onselectiondragstop(r) {
      X(this.#ye, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await fv(
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
    _prefersDark = new y0("(prefers-color-scheme: dark)", e.props.colorModeSSR === "dark");
    #we = /* @__PURE__ */ S(() => e.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : e.props.colorMode ?? "light");
    get colorMode() {
      return c(this.#we);
    }
    set colorMode(r) {
      X(this.#we, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = Ui, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new t();
}
function At() {
  const e = Pn(Fo);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
const Fo = Symbol();
function wc(e) {
  const t = x0(e);
  function n(T) {
    t.nodeTypes = {
      ...mc,
      ...T
    };
  }
  function r(T) {
    t.edgeTypes = {
      ...yc,
      ...T
    };
  }
  function o(T) {
    t.edges = _v(T, t.edges);
  }
  const i = (T, _ = !1) => {
    t.nodes = t.nodes.map((z) => {
      const b = T.get(z.id);
      return b ? { ...z, position: b.position, dragging: _ } : z;
    });
  };
  function s(T) {
    const { changes: _, updatedInternals: z } = Av(T, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin);
    if (!z)
      return;
    zv(t.nodeLookup, t.parentLookup, {
      nodeOrigin: t.nodeOrigin,
      nodeExtent: t.nodeExtent
    }), t.fitViewQueued && t.resolveFitView();
    const b = /* @__PURE__ */ new Map();
    for (const E of _) {
      const P = t.nodeLookup.get(E.id)?.internals.userNode;
      if (!P)
        continue;
      const H = { ...P };
      switch (E.type) {
        case "dimensions": {
          const Z = { ...H.measured, ...E.dimensions };
          E.setAttributes && (H.width = E.dimensions?.width ?? H.width, H.height = E.dimensions?.height ?? H.height), H.measured = Z;
          break;
        }
        case "position":
          H.position = E.position ?? H.position;
          break;
      }
      b.set(E.id, H);
    }
    t.nodes = t.nodes.map((E) => b.get(E.id) ?? E);
  }
  function a(T) {
    const _ = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = T, t.fitViewResolver = _, t.nodes = [...t.nodes], _.promise;
  }
  async function l(T, _, z) {
    const b = typeof z?.zoom < "u" ? z.zoom : t.maxZoom, E = t.panZoom;
    return E ? (await E.setViewport({
      x: t.width / 2 - T * b,
      y: t.height / 2 - _ * b,
      zoom: b
    }, { duration: z?.duration, ease: z?.ease, interpolate: z?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function u(T, _) {
    const z = t.panZoom;
    return z ? z.scaleBy(T, _) : Promise.resolve(!1);
  }
  function d(T) {
    return u(1.2, T);
  }
  function p(T) {
    return u(1 / 1.2, T);
  }
  function f(T) {
    const _ = t.panZoom;
    _ && (_.setScaleExtent([T, t.maxZoom]), t.minZoom = T);
  }
  function g(T) {
    const _ = t.panZoom;
    _ && (_.setScaleExtent([t.minZoom, T]), t.maxZoom = T);
  }
  function h(T) {
    const _ = t.panZoom;
    _ && (_.setTranslateExtent(T), t.translateExtent = T);
  }
  function y(T) {
    t.panZoom?.setClickDistance(T);
  }
  function k(T, _ = null) {
    let z = !1;
    const b = T.map((E) => (!_ || _.has(E.id)) && E.selected ? (z = !0, { ...E, selected: !1 }) : E);
    return [z, b];
  }
  function w(T) {
    const _ = T?.nodes ? new Set(T.nodes.map((Z) => Z.id)) : null, [z, b] = k(t.nodes, _);
    z && (t.nodes = b);
    const E = T?.edges ? new Set(T.edges.map((Z) => Z.id)) : null, [P, H] = k(t.edges, E);
    P && (t.edges = H);
  }
  function L(T) {
    const _ = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((z) => {
      const b = T.includes(z.id), E = _ && z.selected || b;
      if (z.selected !== E) {
        const P = t.nodeLookup.get(z.id);
        return P && (P.selected = E), z.selected = E, { ...z };
      }
      return z;
    }), _ || w({ nodes: [] });
  }
  function x(T) {
    const _ = t.multiselectionKeyPressed;
    t.edges = t.edges.map((z) => {
      const b = T.includes(z.id), E = _ && z.selected || b;
      return z.selected !== E ? { ...z, selected: E } : z;
    }), _ || w({ edges: [] });
  }
  function $(T, _, z) {
    const b = t.nodeLookup.get(T);
    if (!b) {
      console.warn("012", Rr.error012(T));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, b.selected ? (_ || b.selected && t.multiselectionKeyPressed) && (w({ nodes: [b], edges: [] }), requestAnimationFrame(() => z?.blur())) : L([T]);
  }
  function C(T) {
    const _ = t.edgeLookup.get(T);
    if (!_) {
      console.warn("012", Rr.error012(T));
      return;
    }
    (_.selectable || t.elementsSelectable && typeof _.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, _.selected ? _.selected && t.multiselectionKeyPressed && w({ nodes: [], edges: [_] }) : x([T]));
  }
  function M(T, _) {
    const { nodeExtent: z, snapGrid: b, nodeOrigin: E, nodeLookup: P, nodesDraggable: H, onerror: Z } = t, D = /* @__PURE__ */ new Map(), B = b?.[0] ?? 5, G = b?.[1] ?? 5, U = T.x * B * _, re = T.y * G * _;
    for (const F of P.values()) {
      if (!(F.selected && (F.draggable || H && typeof F.draggable > "u")))
        continue;
      let R = {
        x: F.internals.positionAbsolute.x + U,
        y: F.internals.positionAbsolute.y + re
      };
      b && (R = pi(R, b));
      const { position: Y, positionAbsolute: Q } = Bu({
        nodeId: F.id,
        nextPosition: R,
        nodeLookup: P,
        nodeExtent: z,
        nodeOrigin: E,
        onError: Z
      });
      F.position = Y, F.internals.positionAbsolute = Q, D.set(F.id, F);
    }
    i(D);
  }
  function O(T) {
    return Iv({
      delta: T,
      panZoom: t.panZoom,
      transform: [t.viewport.x, t.viewport.y, t.viewport.zoom],
      translateExtent: t.translateExtent,
      width: t.width,
      height: t.height
    });
  }
  const q = (T) => {
    t._connection = { ...T };
  };
  function J() {
    t._connection = Ui;
  }
  function j() {
    t.resetStoreValues(), w();
  }
  return Object.assign(t, {
    setNodeTypes: n,
    setEdgeTypes: r,
    addEdge: o,
    updateNodePositions: i,
    updateNodeInternals: s,
    zoomIn: d,
    zoomOut: p,
    fitView: a,
    setCenter: l,
    setMinZoom: f,
    setMaxZoom: g,
    setTranslateExtent: h,
    setPaneClickDistance: y,
    unselectNodesAndEdges: w,
    addSelectedNodes: L,
    addSelectedEdges: x,
    handleNodeSelection: $,
    handleEdgeSelection: C,
    moveSelectedNodes: M,
    panBy: O,
    updateConnection: q,
    cancelConnection: J,
    reset: j
  });
}
function $0(e, t) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: l, paneClickDistance: u, setPanZoomInstance: d, onDraggingChange: p, onTransformChange: f } = t, g = o0({
    domNode: e,
    minZoom: n,
    maxZoom: r,
    translateExtent: l,
    viewport: o,
    paneClickDistance: u,
    onPanZoom: s,
    onPanZoomStart: i,
    onPanZoomEnd: a,
    onDraggingChange: p
  }), h = g.getViewport();
  return (o.x !== h.x || o.y !== h.y || o.zoom !== h.zoom) && f([h.x, h.y, h.zoom]), d(g), g.update(t), {
    update(y) {
      g.update(y);
    }
  };
}
var k0 = /* @__PURE__ */ ee('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function bc(e, t) {
  ue(t, !0);
  let n = m(t, "store", 15), r = m(t, "panOnScrollMode", 23, () => Xt.Free), o = m(t, "preventScrolling", 7, !0), i = m(t, "zoomOnScroll", 7, !0), s = m(t, "zoomOnDoubleClick", 7, !0), a = m(t, "zoomOnPinch", 7, !0), l = m(t, "panOnDrag", 7, !0), u = m(t, "panOnScroll", 7, !1), d = m(t, "paneClickDistance", 7, 1), p = m(t, "onmovestart", 7), f = m(t, "onmove", 7), g = m(t, "onmoveend", 7), h = m(t, "oninit", 7), y = m(t, "children", 7), k = /* @__PURE__ */ S(() => n().panActivationKeyPressed || l()), w = /* @__PURE__ */ S(() => n().panActivationKeyPressed || u());
  const { viewport: L } = n();
  let x = !1;
  Re(() => {
    !x && n().viewportInitialized && (h()?.(), x = !0);
  });
  var $ = k0(), C = I($);
  return je(C, y), A($), it($, (M, O) => $0?.(M, O), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: L,
    onDraggingChange: (M) => {
      n(n().dragging = M, !0);
    },
    setPanZoomInstance: (M) => {
      n(n().panZoom = M, !0);
    },
    onPanZoomStart: p(),
    onPanZoom: f(),
    onPanZoomEnd: g(),
    zoomOnScroll: i(),
    zoomOnDoubleClick: s(),
    zoomOnPinch: a(),
    panOnScroll: c(w),
    panOnDrag: c(k),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: r() || Xt.Free,
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
  })), N(e, $), ce({
    get store() {
      return n();
    },
    set store(M) {
      n(M), v();
    },
    get panOnScrollMode() {
      return r();
    },
    set panOnScrollMode(M = Xt.Free) {
      r(M), v();
    },
    get preventScrolling() {
      return o();
    },
    set preventScrolling(M = !0) {
      o(M), v();
    },
    get zoomOnScroll() {
      return i();
    },
    set zoomOnScroll(M = !0) {
      i(M), v();
    },
    get zoomOnDoubleClick() {
      return s();
    },
    set zoomOnDoubleClick(M = !0) {
      s(M), v();
    },
    get zoomOnPinch() {
      return a();
    },
    set zoomOnPinch(M = !0) {
      a(M), v();
    },
    get panOnDrag() {
      return l();
    },
    set panOnDrag(M = !0) {
      l(M), v();
    },
    get panOnScroll() {
      return u();
    },
    set panOnScroll(M = !1) {
      u(M), v();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(M = 1) {
      d(M), v();
    },
    get onmovestart() {
      return p();
    },
    set onmovestart(M) {
      p(M), v();
    },
    get onmove() {
      return f();
    },
    set onmove(M) {
      f(M), v();
    },
    get onmoveend() {
      return g();
    },
    set onmoveend(M) {
      g(M), v();
    },
    get oninit() {
      return h();
    },
    set oninit(M) {
      h(M), v();
    },
    get children() {
      return y();
    },
    set children(M) {
      y(M), v();
    }
  });
}
se(
  bc,
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
function nl(e, t) {
  return (n) => {
    n.target === t && e?.(n);
  };
}
function rl(e) {
  return (t) => {
    const n = e.has(t.id);
    return !!t.selected !== n ? { ...t, selected: n } : t;
  };
}
function ol(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
var C0 = /* @__PURE__ */ ee("<div><!></div>");
function xc(e, t) {
  ue(t, !0);
  let n = m(t, "store", 15), r = m(t, "panOnDrag", 7, !0), o = m(t, "selectionOnDrag", 7), i = m(t, "onpaneclick", 7), s = m(t, "onpanecontextmenu", 7), a = m(t, "onselectionstart", 7), l = m(t, "onselectionend", 7), u = m(t, "children", 7), d, p = null, f = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ S(() => n().panActivationKeyPressed || r()), y = /* @__PURE__ */ S(() => n().selectionKeyPressed || n().selectionRect || o() && c(h) !== !0), k = /* @__PURE__ */ S(() => n().elementsSelectable && (c(y) || n().selectionRectMode === "user")), w = !1;
  function L(_) {
    if (w || n().connection.inProgress) {
      w = !1;
      return;
    }
    i()?.({ event: _ }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0);
  }
  function x(_) {
    if (p = d?.getBoundingClientRect(), !n().elementsSelectable || !c(y) || _.button !== 0 || _.target !== d || !p)
      return;
    _.target?.setPointerCapture?.(_.pointerId);
    const { x: z, y: b } = Rt(_, p);
    n().unselectNodesAndEdges(), n(n().selectionRect = { width: 0, height: 0, startX: z, startY: b, x: z, y: b }, !0), a()?.(_);
  }
  function $(_) {
    if (!c(y) || !p || !n().selectionRect)
      return;
    w = !0;
    const z = Rt(_, p), { startX: b = 0, startY: E = 0 } = n().selectionRect, P = {
      ...n().selectionRect,
      x: z.x < b ? z.x : b,
      y: z.y < E ? z.y : E,
      width: Math.abs(z.x - b),
      height: Math.abs(z.y - E)
    }, H = f, Z = g;
    f = new Set(Is(
      n().nodeLookup,
      P,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === jo.Partial,
      !0
    ).map((B) => B.id));
    const D = n().defaultEdgeOptions.selectable ?? !0;
    g = /* @__PURE__ */ new Set();
    for (const B of f) {
      const G = n().connectionLookup.get(B);
      if (G)
        for (const { edgeId: U } of G.values()) {
          const re = n().edgeLookup.get(U);
          re && (re.selectable ?? D) && g.add(U);
        }
    }
    ol(H, f) || n(n().nodes = n().nodes.map(rl(f)), !0), ol(Z, g) || n(n().edges = n().edges.map(rl(g)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = P, !0);
  }
  function C(_) {
    _.button === 0 && (_.target?.releasePointerCapture?.(_.pointerId), !c(y) && n().selectionRectMode === "user" && _.target === d && L?.(_), n(n().selectionRect = null, !0), f.size > 0 && n(n().selectionRectMode = "nodes", !0), n().selectionKeyPressed && (w = !1), l()?.(_));
  }
  const M = (_) => {
    if (Array.isArray(c(h)) && c(h).includes(2)) {
      _.preventDefault();
      return;
    }
    s()?.({ event: _ });
  };
  var O = C0();
  let q;
  var J = /* @__PURE__ */ S(() => c(k) ? void 0 : nl(L, d));
  O.__click = function(..._) {
    c(J)?.apply(this, _);
  }, O.__pointerdown = function(..._) {
    (c(k) ? x : void 0)?.apply(this, _);
  }, O.__pointermove = function(..._) {
    (c(k) ? $ : void 0)?.apply(this, _);
  }, O.__pointerup = function(..._) {
    (c(k) ? C : void 0)?.apply(this, _);
  };
  var j = /* @__PURE__ */ S(() => nl(M, d));
  O.__contextmenu = function(..._) {
    c(j)?.apply(this, _);
  };
  var T = I(O);
  return je(T, u), A(O), _t(O, (_) => d = _, () => d), xe((_) => q = yt(O, 1, "svelte-flow__pane svelte-flow__container", null, q, _), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: c(y)
    })
  ]), N(e, O), ce({
    get store() {
      return n();
    },
    set store(_) {
      n(_), v();
    },
    get panOnDrag() {
      return r();
    },
    set panOnDrag(_ = !0) {
      r(_), v();
    },
    get selectionOnDrag() {
      return o();
    },
    set selectionOnDrag(_) {
      o(_), v();
    },
    get onpaneclick() {
      return i();
    },
    set onpaneclick(_) {
      i(_), v();
    },
    get onpanecontextmenu() {
      return s();
    },
    set onpanecontextmenu(_) {
      s(_), v();
    },
    get onselectionstart() {
      return a();
    },
    set onselectionstart(_) {
      a(_), v();
    },
    get onselectionend() {
      return l();
    },
    set onselectionend(_) {
      l(_), v();
    },
    get children() {
      return u();
    },
    set children(_) {
      u(_), v();
    }
  });
}
yn([
  "click",
  "pointerdown",
  "pointermove",
  "pointerup",
  "contextmenu"
]);
se(
  xc,
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
var _0 = /* @__PURE__ */ ee('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function $c(e, t) {
  ue(t, !0);
  let n = m(t, "store", 15), r = m(t, "children", 7);
  var o = _0();
  let i;
  var s = I(o);
  return je(s, r), A(o), xe((a) => i = ft(o, "", i, a), [
    () => ({
      transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
    })
  ]), N(e, o), ce({
    get store() {
      return n();
    },
    set store(a) {
      n(a), v();
    },
    get children() {
      return r();
    },
    set children(a) {
      r(a), v();
    }
  });
}
se($c, { store: {}, children: {} }, [], [], !0);
function kc(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = Kv({
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
var S0 = /* @__PURE__ */ ee('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-62ze0y"> </div>'), E0 = /* @__PURE__ */ ee('<div class="a11y-hidden svelte-62ze0y"> </div> <div class="a11y-hidden svelte-62ze0y"> </div> <!>', 1);
const P0 = {
  hash: "svelte-62ze0y",
  code: ".a11y-hidden.svelte-62ze0y {display:none;}.a11y-live-msg.svelte-62ze0y {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function Cc(e, t) {
  ue(t, !0), Ne(e, P0);
  let n = m(t, "store", 7);
  var r = E0(), o = le(r), i = I(o, !0);
  A(o);
  var s = V(o, 2), a = I(s, !0);
  A(s);
  var l = V(s, 2);
  {
    var u = (d) => {
      var p = S0(), f = I(p, !0);
      A(p), xe(() => {
        we(p, "id", `${L0}-${n().flowId}`), Ve(f, n().ariaLiveMessage);
      }), N(d, p);
    };
    ae(l, (d) => {
      n().disableKeyboardA11y || d(u);
    });
  }
  return xe(() => {
    we(o, "id", `${_c}-${n().flowId}`), Ve(i, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), we(s, "id", `${Sc}-${n().flowId}`), Ve(a, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), N(e, r), ce({
    get store() {
      return n();
    },
    set store(d) {
      n(d), v();
    }
  });
}
se(Cc, { store: {} }, [], [], !0);
const _c = "svelte-flow__node-desc", Sc = "svelte-flow__edge-desc", L0 = "svelte-flow__aria-live";
var N0 = /* @__PURE__ */ ee("<div><!></div>");
function Ec(e, t) {
  ue(t, !0);
  let n = m(t, "store", 15), r = m(t, "node", 7), o = m(t, "resizeObserver", 7), i = m(t, "nodeClickDistance", 7), s = m(t, "onnodeclick", 7), a = m(t, "onnodedrag", 7), l = m(t, "onnodedragstart", 7), u = m(t, "onnodedragstop", 7), d = m(t, "onnodepointerenter", 7), p = m(t, "onnodepointerleave", 7), f = m(t, "onnodepointermove", 7), g = m(t, "onnodecontextmenu", 7), h = /* @__PURE__ */ S(() => ct(r().data, () => ({}), !0)), y = /* @__PURE__ */ S(() => ct(r().selected, !1)), k = /* @__PURE__ */ S(() => r().draggable), w = /* @__PURE__ */ S(() => r().selectable), L = /* @__PURE__ */ S(() => ct(r().deletable, !0)), x = /* @__PURE__ */ S(() => r().connectable), $ = /* @__PURE__ */ S(() => r().focusable), C = /* @__PURE__ */ S(() => ct(r().hidden, !1)), M = /* @__PURE__ */ S(() => ct(r().dragging, !1)), O = /* @__PURE__ */ S(() => ct(r().style, "")), q = /* @__PURE__ */ S(() => r().class), J = /* @__PURE__ */ S(() => ct(r().type, "default")), j = /* @__PURE__ */ S(() => r().parentId), T = /* @__PURE__ */ S(() => r().sourcePosition), _ = /* @__PURE__ */ S(() => r().targetPosition), z = /* @__PURE__ */ S(() => ct(r().measured, () => ({ width: 0, height: 0 }), !0).width), b = /* @__PURE__ */ S(() => ct(r().measured, () => ({ width: 0, height: 0 }), !0).height), E = /* @__PURE__ */ S(() => r().initialWidth), P = /* @__PURE__ */ S(() => r().initialHeight), H = /* @__PURE__ */ S(() => r().width), Z = /* @__PURE__ */ S(() => r().height), D = /* @__PURE__ */ S(() => r().dragHandle), B = /* @__PURE__ */ S(() => ct(r().internals.z, 0)), G = /* @__PURE__ */ S(() => r().internals.positionAbsolute.x), U = /* @__PURE__ */ S(() => r().internals.positionAbsolute.y), re = /* @__PURE__ */ S(() => r().internals.userNode), { id: F } = r(), R = /* @__PURE__ */ S(() => c(k) ?? n().nodesDraggable), Y = /* @__PURE__ */ S(() => c(w) ?? n().elementsSelectable), Q = /* @__PURE__ */ S(() => c(x) ?? n().nodesConnectable), W = /* @__PURE__ */ S(() => Yu(r())), he = /* @__PURE__ */ S(() => !!r().internals.handleBounds), fe = /* @__PURE__ */ S(() => c(W) && c(he)), oe = /* @__PURE__ */ S(() => c($) ?? n().nodesFocusable);
  function ne(pe) {
    return n().parentLookup.has(pe);
  }
  let de = /* @__PURE__ */ S(() => ne(F)), te = /* @__PURE__ */ Ce(null), ve = null, ie = c(J), ke = c(T), K = c(_), Je = /* @__PURE__ */ S(() => n().nodeTypes[c(J)] ?? js), Te = /* @__PURE__ */ S(() => n().ariaLabelConfig);
  dr("svelteflow__node_connectable", {
    get value() {
      return c(Q);
    }
  }), dr("svelteflow__node_id", F);
  let Me = /* @__PURE__ */ S(() => {
    const pe = c(z) === void 0 ? c(H) ?? c(E) : c(H), Ke = c(b) === void 0 ? c(Z) ?? c(P) : c(Z);
    if (!(pe === void 0 && Ke === void 0 && c(O) === void 0))
      return `${c(O)};${pe ? `width:${Ut(pe)};` : ""}${Ke ? `height:${Ut(Ke)};` : ""}`;
  });
  Re(() => {
    (c(J) !== ie || c(T) !== ke || c(_) !== K) && c(te) !== null && requestAnimationFrame(() => {
      c(te) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[F, { id: F, nodeElement: c(te), force: !0 }]]));
    }), ie = c(J), ke = c(T), K = c(_);
  }), Re(() => {
    o() && (!c(fe) || c(te) !== ve) && (ve && o().unobserve(ve), c(te) && o().observe(c(te)), ve = c(te));
  }), oi(() => {
    ve && o()?.unobserve(ve);
  });
  function Ue(pe) {
    c(Y) && (!n().selectNodesOnDrag || !c(R) || n().nodeDragThreshold > 0) && n().handleNodeSelection(F), s()?.({ node: c(re), event: pe });
  }
  function qe(pe) {
    if (!(Fu(pe) || n().disableKeyboardA11y))
      if (Zu.includes(pe.key) && c(Y)) {
        const Ke = pe.key === "Escape";
        n().handleNodeSelection(F, Ke, c(te));
      } else c(R) && r().selected && Object.prototype.hasOwnProperty.call(Xo, pe.key) && (pe.preventDefault(), n(
        n().ariaLiveMessage = c(Te)["node.a11yDescription.ariaLiveMessage"]({
          direction: pe.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(Xo[pe.key], pe.shiftKey ? 4 : 1));
  }
  const Be = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !c(te)?.matches(":focus-visible"))
      return;
    const { width: pe, height: Ke, viewport: ut } = n();
    Is(/* @__PURE__ */ new Map([[F, r()]]), { x: 0, y: 0, width: pe, height: Ke }, [ut.x, ut.y, ut.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: ut.zoom });
  };
  var nn = Le(), Oe = le(nn);
  {
    var lt = (pe) => {
      var Ke = N0();
      Ge(
        Ke,
        (We, Et) => ({
          "data-id": F,
          class: [
            "svelte-flow__node",
            `svelte-flow__node-${c(J)}`,
            c(q)
          ],
          style: c(Me),
          onclick: Ue,
          onpointerenter: d() ? (Qe) => d()({ node: c(re), event: Qe }) : void 0,
          onpointerleave: p() ? (Qe) => p()({ node: c(re), event: Qe }) : void 0,
          onpointermove: f() ? (Qe) => f()({ node: c(re), event: Qe }) : void 0,
          oncontextmenu: g() ? (Qe) => g()({ node: c(re), event: Qe }) : void 0,
          onkeydown: c(oe) ? qe : void 0,
          onfocus: c(oe) ? Be : void 0,
          tabIndex: c(oe) ? 0 : void 0,
          role: r().ariaRole ?? (c(oe) ? "group" : void 0),
          "aria-roledescription": "node",
          "aria-describedby": n().disableKeyboardA11y ? void 0 : `${_c}-${n().flowId}`,
          ...r().domAttributes,
          [Cn]: We,
          [Kt]: Et
        }),
        [
          () => ({
            dragging: c(M),
            selected: c(y),
            draggable: c(R),
            connectable: c(Q),
            selectable: c(Y),
            nopan: c(R),
            parent: c(de)
          }),
          () => ({
            "z-index": c(B),
            transform: `translate(${c(G) ?? ""}px, ${c(U) ?? ""}px)`,
            visibility: c(W) ? "visible" : "hidden"
          })
        ]
      );
      var ut = I(Ke);
      Ls(ut, () => c(Je), (We, Et) => {
        Et(We, {
          get data() {
            return c(h);
          },
          get id() {
            return F;
          },
          get selected() {
            return c(y);
          },
          get selectable() {
            return c(Y);
          },
          get deletable() {
            return c(L);
          },
          get sourcePosition() {
            return c(T);
          },
          get targetPosition() {
            return c(_);
          },
          get zIndex() {
            return c(B);
          },
          get dragging() {
            return c(M);
          },
          get draggable() {
            return c(R);
          },
          get dragHandle() {
            return c(D);
          },
          get parentId() {
            return c(j);
          },
          get type() {
            return c(J);
          },
          get isConnectable() {
            return c(Q);
          },
          get positionAbsoluteX() {
            return c(G);
          },
          get positionAbsoluteY() {
            return c(U);
          },
          get width() {
            return c(H);
          },
          get height() {
            return c(Z);
          }
        });
      }), A(Ke), it(Ke, (We, Et) => kc?.(We, Et), () => ({
        nodeId: F,
        isSelectable: c(Y),
        disabled: !c(R),
        handleSelector: c(D),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (We, Et, Qe, Zt) => {
          a()?.({ event: We, targetNode: Qe, nodes: Zt });
        },
        onDragStart: (We, Et, Qe, Zt) => {
          l()?.({ event: We, targetNode: Qe, nodes: Zt });
        },
        onDragStop: (We, Et, Qe, Zt) => {
          u()?.({ event: We, targetNode: Qe, nodes: Zt });
        },
        store: n()
      })), _t(Ke, (We) => X(te, We), () => c(te)), N(pe, Ke);
    };
    ae(Oe, (pe) => {
      c(C) || pe(lt);
    });
  }
  return N(e, nn), ce({
    get store() {
      return n();
    },
    set store(pe) {
      n(pe), v();
    },
    get node() {
      return r();
    },
    set node(pe) {
      r(pe), v();
    },
    get resizeObserver() {
      return o();
    },
    set resizeObserver(pe) {
      o(pe), v();
    },
    get nodeClickDistance() {
      return i();
    },
    set nodeClickDistance(pe) {
      i(pe), v();
    },
    get onnodeclick() {
      return s();
    },
    set onnodeclick(pe) {
      s(pe), v();
    },
    get onnodedrag() {
      return a();
    },
    set onnodedrag(pe) {
      a(pe), v();
    },
    get onnodedragstart() {
      return l();
    },
    set onnodedragstart(pe) {
      l(pe), v();
    },
    get onnodedragstop() {
      return u();
    },
    set onnodedragstop(pe) {
      u(pe), v();
    },
    get onnodepointerenter() {
      return d();
    },
    set onnodepointerenter(pe) {
      d(pe), v();
    },
    get onnodepointerleave() {
      return p();
    },
    set onnodepointerleave(pe) {
      p(pe), v();
    },
    get onnodepointermove() {
      return f();
    },
    set onnodepointermove(pe) {
      f(pe), v();
    },
    get onnodecontextmenu() {
      return g();
    },
    set onnodecontextmenu(pe) {
      g(pe), v();
    }
  });
}
se(
  Ec,
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
var T0 = /* @__PURE__ */ ee('<div class="svelte-flow__nodes"></div>');
function Pc(e, t) {
  ue(t, !0);
  let n = m(t, "store", 15), r = m(t, "nodeClickDistance", 7), o = m(t, "onnodeclick", 7), i = m(t, "onnodecontextmenu", 7), s = m(t, "onnodepointerenter", 7), a = m(t, "onnodepointermove", 7), l = m(t, "onnodepointerleave", 7), u = m(t, "onnodedrag", 7), d = m(t, "onnodedragstart", 7), p = m(t, "onnodedragstop", 7);
  const f = typeof ResizeObserver > "u" ? null : new ResizeObserver((h) => {
    const y = /* @__PURE__ */ new Map();
    h.forEach((k) => {
      const w = k.target.getAttribute("data-id");
      y.set(w, { id: w, nodeElement: k.target, force: !0 });
    }), n().updateNodeInternals(y);
  });
  oi(() => {
    f?.disconnect();
  });
  var g = T0();
  return at(g, 21, () => n().visible.nodes.values(), (h) => h.id, (h, y) => {
    Ec(h, {
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
        return p();
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
  }), A(g), N(e, g), ce({
    get store() {
      return n();
    },
    set store(h) {
      n(h), v();
    },
    get nodeClickDistance() {
      return r();
    },
    set nodeClickDistance(h) {
      r(h), v();
    },
    get onnodeclick() {
      return o();
    },
    set onnodeclick(h) {
      o(h), v();
    },
    get onnodecontextmenu() {
      return i();
    },
    set onnodecontextmenu(h) {
      i(h), v();
    },
    get onnodepointerenter() {
      return s();
    },
    set onnodepointerenter(h) {
      s(h), v();
    },
    get onnodepointermove() {
      return a();
    },
    set onnodepointermove(h) {
      a(h), v();
    },
    get onnodepointerleave() {
      return l();
    },
    set onnodepointerleave(h) {
      l(h), v();
    },
    get onnodedrag() {
      return u();
    },
    set onnodedrag(h) {
      u(h), v();
    },
    get onnodedragstart() {
      return d();
    },
    set onnodedragstart(h) {
      d(h), v();
    },
    get onnodedragstop() {
      return p();
    },
    set onnodedragstop(h) {
      p(h), v();
    }
  });
}
se(
  Pc,
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
var D0 = /* @__PURE__ */ ge('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function Lc(e, t) {
  ue(t, !0);
  const n = m(t, "edge", 7), r = m(t, "store", 15), o = m(t, "onedgeclick", 7), i = m(t, "onedgecontextmenu", 7), s = m(t, "onedgepointerenter", 7), a = m(t, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ S(() => n().source), u = /* @__PURE__ */ S(() => n().target), d = /* @__PURE__ */ S(() => n().sourceX), p = /* @__PURE__ */ S(() => n().sourceY), f = /* @__PURE__ */ S(() => n().targetX), g = /* @__PURE__ */ S(() => n().targetY), h = /* @__PURE__ */ S(() => n().sourcePosition), y = /* @__PURE__ */ S(() => n().targetPosition), k = /* @__PURE__ */ S(() => ct(n().animated, !1)), w = /* @__PURE__ */ S(() => ct(n().selected, !1)), L = /* @__PURE__ */ S(() => n().label), x = /* @__PURE__ */ S(() => n().labelStyle), $ = /* @__PURE__ */ S(() => ct(n().data, () => ({}), !0)), C = /* @__PURE__ */ S(() => n().style), M = /* @__PURE__ */ S(() => n().interactionWidth), O = /* @__PURE__ */ S(() => ct(n().type, "default")), q = /* @__PURE__ */ S(() => n().sourceHandle), J = /* @__PURE__ */ S(() => n().targetHandle), j = /* @__PURE__ */ S(() => n().markerStart), T = /* @__PURE__ */ S(() => n().markerEnd), _ = /* @__PURE__ */ S(() => n().selectable), z = /* @__PURE__ */ S(() => n().focusable), b = /* @__PURE__ */ S(() => ct(n().deletable, !0)), E = /* @__PURE__ */ S(() => n().hidden), P = /* @__PURE__ */ S(() => n().zIndex), H = /* @__PURE__ */ S(() => n().class), Z = /* @__PURE__ */ S(() => n().ariaLabel), D = null;
  const { id: B } = n();
  dr("svelteflow__edge_id", B);
  let G = /* @__PURE__ */ S(() => c(_) ?? r().elementsSelectable), U = /* @__PURE__ */ S(() => c(z) ?? r().edgesFocusable), re = /* @__PURE__ */ S(() => r().edgeTypes[c(O)] ?? Ys), F = /* @__PURE__ */ S(() => c(j) ? `url('#${es(c(j), r().flowId)}')` : void 0), R = /* @__PURE__ */ S(() => c(T) ? `url('#${es(c(T), r().flowId)}')` : void 0);
  function Y(ne) {
    const de = r().edgeLookup.get(B);
    de && (c(G) && r().handleEdgeSelection(B), o()?.({ event: ne, edge: de }));
  }
  function Q(ne, de) {
    const te = r().edgeLookup.get(B);
    te && de({ event: ne, edge: te });
  }
  function W(ne) {
    if (!r().disableKeyboardA11y && Zu.includes(ne.key) && c(G)) {
      const { unselectNodesAndEdges: de, addSelectedEdges: te } = r();
      ne.key === "Escape" ? (D?.blur(), de({ edges: [n()] })) : te([B]);
    }
  }
  var he = Le(), fe = le(he);
  {
    var oe = (ne) => {
      var de = D0();
      let te;
      var ve = I(de);
      Ge(
        ve,
        (ke) => ({
          class: ["svelte-flow__edge", c(H)],
          "data-id": B,
          onclick: Y,
          oncontextmenu: i() ? (K) => {
            Q(K, i());
          } : void 0,
          onpointerenter: s() ? (K) => {
            Q(K, s());
          } : void 0,
          onpointerleave: a() ? (K) => {
            Q(K, a());
          } : void 0,
          "aria-label": c(Z) === null ? void 0 : c(Z) ? c(Z) : `Edge from ${c(l)} to ${c(u)}`,
          "aria-describedby": c(U) ? `${Sc}-${r().flowId}` : void 0,
          role: n().ariaRole ?? (c(U) ? "group" : "img"),
          "aria-roledescription": "edge",
          onkeydown: c(U) ? W : void 0,
          tabindex: c(U) ? 0 : void 0,
          ...n().domAttributes,
          [Cn]: ke
        }),
        [
          () => ({
            animated: c(k),
            selected: c(w),
            selectable: c(G)
          })
        ]
      );
      var ie = I(ve);
      Ls(ie, () => c(re), (ke, K) => {
        K(ke, {
          get id() {
            return B;
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
            return c(p);
          },
          get targetX() {
            return c(f);
          },
          get targetY() {
            return c(g);
          },
          get sourcePosition() {
            return c(h);
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
            return c(L);
          },
          get labelStyle() {
            return c(x);
          },
          get data() {
            return c($);
          },
          get style() {
            return c(C);
          },
          get interactionWidth() {
            return c(M);
          },
          get selectable() {
            return c(G);
          },
          get deletable() {
            return c(b);
          },
          get type() {
            return c(O);
          },
          get sourceHandleId() {
            return c(q);
          },
          get targetHandleId() {
            return c(J);
          },
          get markerStart() {
            return c(F);
          },
          get markerEnd() {
            return c(R);
          }
        });
      }), A(ve), _t(ve, (ke) => D = ke, () => D), A(de), xe((ke) => te = ft(de, "", te, ke), [() => ({ "z-index": c(P) })]), N(ne, de);
    };
    ae(fe, (ne) => {
      c(E) || ne(oe);
    });
  }
  return N(e, he), ce({
    get edge() {
      return n();
    },
    set edge(ne) {
      n(ne), v();
    },
    get store() {
      return r();
    },
    set store(ne) {
      r(ne), v();
    },
    get onedgeclick() {
      return o();
    },
    set onedgeclick(ne) {
      o(ne), v();
    },
    get onedgecontextmenu() {
      return i();
    },
    set onedgecontextmenu(ne) {
      i(ne), v();
    },
    get onedgepointerenter() {
      return s();
    },
    set onedgepointerenter(ne) {
      s(ne), v();
    },
    get onedgepointerleave() {
      return a();
    },
    set onedgepointerleave(ne) {
      a(ne), v();
    }
  });
}
se(
  Lc,
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
bf();
var z0 = /* @__PURE__ */ ge("<defs></defs>");
function Nc(e, t) {
  ue(t, !1);
  const n = At();
  lu();
  var r = z0();
  at(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    Tc(o, He(() => c(i)));
  }), A(r), N(e, r), ce();
}
se(Nc, {}, [], [], !0);
var M0 = /* @__PURE__ */ ge('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), O0 = /* @__PURE__ */ ge('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), V0 = /* @__PURE__ */ ge('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Tc(e, t) {
  ue(t, !0);
  let n = m(t, "id", 7), r = m(t, "type", 7), o = m(t, "width", 7, 12.5), i = m(t, "height", 7, 12.5), s = m(t, "markerUnits", 7, "strokeWidth"), a = m(t, "orient", 7, "auto-start-reverse"), l = m(t, "color", 7), u = m(t, "strokeWidth", 7);
  var d = V0(), p = I(d);
  {
    var f = (h) => {
      var y = M0();
      xe(() => {
        we(y, "stroke", l()), we(y, "stroke-width", u());
      }), N(h, y);
    }, g = (h, y) => {
      {
        var k = (w) => {
          var L = O0();
          xe(() => {
            we(L, "stroke", l()), we(L, "stroke-width", u()), we(L, "fill", l());
          }), N(w, L);
        };
        ae(
          h,
          (w) => {
            r() === jr.ArrowClosed && w(k);
          },
          y
        );
      }
    };
    ae(p, (h) => {
      r() === jr.Arrow ? h(f) : h(g, !1);
    });
  }
  return A(d), xe(() => {
    we(d, "id", n()), we(d, "markerWidth", `${o()}`), we(d, "markerHeight", `${i()}`), we(d, "markerUnits", s()), we(d, "orient", a());
  }), N(e, d), ce({
    get id() {
      return n();
    },
    set id(h) {
      n(h), v();
    },
    get type() {
      return r();
    },
    set type(h) {
      r(h), v();
    },
    get width() {
      return o();
    },
    set width(h = 12.5) {
      o(h), v();
    },
    get height() {
      return i();
    },
    set height(h = 12.5) {
      i(h), v();
    },
    get markerUnits() {
      return s();
    },
    set markerUnits(h = "strokeWidth") {
      s(h), v();
    },
    get orient() {
      return a();
    },
    set orient(h = "auto-start-reverse") {
      a(h), v();
    },
    get color() {
      return l();
    },
    set color(h) {
      l(h), v();
    },
    get strokeWidth() {
      return u();
    },
    set strokeWidth(h) {
      u(h), v();
    }
  });
}
se(
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
var H0 = /* @__PURE__ */ ee('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function Dc(e, t) {
  ue(t, !0);
  let n = m(t, "store", 15), r = m(t, "onedgeclick", 7), o = m(t, "onedgecontextmenu", 7), i = m(t, "onedgepointerenter", 7), s = m(t, "onedgepointerleave", 7);
  var a = H0(), l = I(a), u = I(l);
  Nc(u, {}), A(l);
  var d = V(l, 2);
  return at(d, 17, () => n().visible.edges.values(), (p) => p.id, (p, f) => {
    Lc(p, {
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
      set store(g) {
        n(g);
      }
    });
  }), A(a), N(e, a), ce({
    get store() {
      return n();
    },
    set store(p) {
      n(p), v();
    },
    get onedgeclick() {
      return r();
    },
    set onedgeclick(p) {
      r(p), v();
    },
    get onedgecontextmenu() {
      return o();
    },
    set onedgecontextmenu(p) {
      o(p), v();
    },
    get onedgepointerenter() {
      return i();
    },
    set onedgepointerenter(p) {
      i(p), v();
    },
    get onedgepointerleave() {
      return s();
    },
    set onedgepointerleave(p) {
      s(p), v();
    }
  });
}
se(
  Dc,
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
var A0 = /* @__PURE__ */ ee('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const I0 = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function Ws(e, t) {
  ue(t, !0), Ne(e, I0);
  let n = m(t, "x", 7, 0), r = m(t, "y", 7, 0), o = m(t, "width", 7, 0), i = m(t, "height", 7, 0), s = m(t, "isVisible", 7, !0);
  var a = Le(), l = le(a);
  {
    var u = (d) => {
      var p = A0();
      let f;
      xe((g) => f = ft(p, "", f, g), [
        () => ({
          width: typeof o() == "string" ? o() : Ut(o()),
          height: typeof i() == "string" ? i() : Ut(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), N(d, p);
    };
    ae(l, (d) => {
      s() && d(u);
    });
  }
  return N(e, a), ce({
    get x() {
      return n();
    },
    set x(d = 0) {
      n(d), v();
    },
    get y() {
      return r();
    },
    set y(d = 0) {
      r(d), v();
    },
    get width() {
      return o();
    },
    set width(d = 0) {
      o(d), v();
    },
    get height() {
      return i();
    },
    set height(d = 0) {
      i(d), v();
    },
    get isVisible() {
      return s();
    },
    set isVisible(d = !0) {
      s(d), v();
    }
  });
}
se(Ws, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
function Z0(e, t, n) {
  const r = t().nodes.filter((o) => o.selected);
  n()?.({ nodes: r, event: e });
}
function q0(e, t, n) {
  const r = t().nodes.filter((o) => o.selected);
  n()?.({ nodes: r, event: e });
}
var B0 = /* @__PURE__ */ ee("<div><!></div>");
const K0 = {
  hash: "svelte-16qgzgd",
  code: ".svelte-flow__selection-wrapper.svelte-16qgzgd {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}"
};
function zc(e, t) {
  ue(t, !0), Ne(e, K0);
  let n = m(t, "store", 15), r = m(t, "onnodedrag", 7), o = m(t, "onnodedragstart", 7), i = m(t, "onnodedragstop", 7), s = m(t, "onselectionclick", 7), a = m(t, "onselectioncontextmenu", 7), l = /* @__PURE__ */ Ce(void 0);
  Re(() => {
    n().disableKeyboardA11y || c(l)?.focus({ preventScroll: !0 });
  });
  let u = /* @__PURE__ */ S(() => n().selectionRectMode === "nodes" ? (n().nodes, ao(n().nodeLookup, { filter: (h) => !!h.selected })) : null);
  function d(h) {
    Object.prototype.hasOwnProperty.call(Xo, h.key) && (h.preventDefault(), n().moveSelectedNodes(Xo[h.key], h.shiftKey ? 4 : 1));
  }
  var p = Le(), f = le(p);
  {
    var g = (h) => {
      var y = B0();
      y.__contextmenu = [Z0, n, a], y.__click = [q0, n, s], y.__keydown = function(...L) {
        (n().disableKeyboardA11y ? void 0 : d)?.apply(this, L);
      };
      let k;
      var w = I(y);
      Ws(w, { width: "100%", height: "100%", x: 0, y: 0 }), A(y), it(y, (L, x) => kc?.(L, x), () => ({
        disabled: !1,
        store: n(),
        onDrag: (L, x, $, C) => {
          r()?.({ event: L, targetNode: null, nodes: C });
        },
        onDragStart: (L, x, $, C) => {
          o()?.({ event: L, targetNode: null, nodes: C });
        },
        onDragStop: (L, x, $, C) => {
          i()?.({ event: L, targetNode: null, nodes: C });
        }
      })), _t(y, (L) => X(l, L), () => c(l)), xe(
        (L) => {
          yt(y, 1, wn(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-16qgzgd"), we(y, "role", n().disableKeyboardA11y ? void 0 : "button"), we(y, "tabindex", n().disableKeyboardA11y ? void 0 : -1), k = ft(y, "", k, L);
        },
        [
          () => ({
            width: Ut(c(u).width),
            height: Ut(c(u).height),
            transform: `translate(${c(u).x ?? ""}px, ${c(u).y ?? ""}px)`
          })
        ]
      ), N(h, y);
    };
    ae(f, (h) => {
      n().selectionRectMode === "nodes" && c(u) && an(c(u).x) && an(c(u).y) && h(g);
    });
  }
  return N(e, p), ce({
    get store() {
      return n();
    },
    set store(h) {
      n(h), v();
    },
    get onnodedrag() {
      return r();
    },
    set onnodedrag(h) {
      r(h), v();
    },
    get onnodedragstart() {
      return o();
    },
    set onnodedragstart(h) {
      o(h), v();
    },
    get onnodedragstop() {
      return i();
    },
    set onnodedragstop(h) {
      i(h), v();
    },
    get onselectionclick() {
      return s();
    },
    set onselectionclick(h) {
      s(h), v();
    },
    get onselectioncontextmenu() {
      return a();
    },
    set onselectioncontextmenu(h) {
      a(h), v();
    }
  });
}
yn(["contextmenu", "click", "keydown"]);
se(
  zc,
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
function R0(e) {
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
function qt(e, t) {
  let { enabled: n = !0, trigger: r, type: o = "keydown" } = t;
  function i(a) {
    const l = Array.isArray(r) ? r : [r], u = [a.metaKey, a.altKey, a.shiftKey, a.ctrlKey].reduce(
      (d, p, f) => p ? d | 1 << f : d,
      0
    );
    for (const d of l) {
      const p = {
        preventDefault: !1,
        enabled: !0,
        ...d
      }, { modifier: f, key: g, callback: h, preventDefault: y, enabled: k } = p;
      if (k) {
        if (a.key !== g) continue;
        if (f === null || f === !1) {
          if (u !== 0) continue;
        } else if (f !== void 0 && f?.[0]?.length > 0) {
          const L = Array.isArray(f) ? f : [f];
          let x = !1;
          for (const $ of L)
            if ((Array.isArray($) ? $ : [$]).reduce(
              (C, M) => C | R0(M),
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
          trigger: p,
          originalEvent: a
        };
        e.dispatchEvent(new CustomEvent("shortcut", { detail: w })), h?.(w);
      }
    }
  }
  let s;
  return n && (s = Zi(e, o, i)), {
    update: (a) => {
      const { enabled: l = !0, type: u = "keydown" } = a;
      n && (!l || o !== u) ? s?.() : !n && l && (s = Zi(e, u, i)), n = l, o = u, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function rt() {
  const e = /* @__PURE__ */ S(At), t = (i) => {
    const s = el(i) ? i : c(e).nodeLookup.get(i.id), a = s.parentId ? mv(s.position, s.measured, s.parentId, c(e).nodeLookup, c(e).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return yr(l);
  };
  function n(i, s, a = { replace: !1 }) {
    c(e).nodes = et(() => c(e).nodes).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a?.replace && el(u) ? u : { ...l, ...u };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    c(e).edges = et(() => c(e).edges).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a.replace && u0(u) ? u : { ...l, ...u };
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
    getNodes: (i) => i === void 0 ? c(e).nodes : il(c(e).nodeLookup, i),
    getEdge: (i) => c(e).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? c(e).edges : il(c(e).edgeLookup, i),
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
    getViewport: () => _l(c(e).viewport),
    setCenter: async (i, s, a) => c(e).setCenter(i, s, a),
    fitView: (i) => c(e).fitView(i),
    fitBounds: async (i, s) => {
      if (!c(e).panZoom)
        return Promise.resolve(!1);
      const a = Zs(i, c(e).width, c(e).height, c(e).minZoom, c(e).maxZoom, s?.padding ?? 0.1);
      return await c(e).panZoom.setViewport(a, {
        duration: s?.duration,
        ease: s?.ease,
        interpolate: s?.interpolate
      }), Promise.resolve(!0);
    },
    getIntersectingNodes: (i, s = !0, a) => {
      const l = Ba(i), u = l ? i : t(i);
      return u ? (a || c(e).nodes).filter((d) => {
        const p = c(e).nodeLookup.get(d.id);
        if (!p || !l && d.id === i.id)
          return !1;
        const f = yr(p), g = Yr(f, u);
        return s && g > 0 || g >= f.width * f.height || g >= u.width * u.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const l = Ba(i) ? i : t(i);
      if (!l)
        return !1;
      const u = Yr(l, s);
      return a && u > 0 || u >= l.width * l.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: l } = await pv({
        nodesToRemove: i,
        edgesToRemove: s,
        nodes: c(e).nodes,
        edges: c(e).edges,
        onBeforeDelete: c(e).onbeforedelete
      });
      return a && (c(e).nodes = et(() => c(e).nodes).filter((u) => !a.some(({ id: d }) => d === u.id))), l && (c(e).edges = et(() => c(e).edges).filter((u) => !l.some(({ id: d }) => d === u.id))), { deletedNodes: a, deletedEdges: l };
    },
    screenToFlowPosition: (i, s = { snapToGrid: !0 }) => {
      if (!c(e).domNode)
        return i;
      const a = s.snapToGrid ? c(e).snapGrid : !1, { x: l, y: u, zoom: d } = c(e).viewport, { x: p, y: f } = c(e).domNode.getBoundingClientRect(), g = { x: i.x - p, y: i.y - f };
      return lo(g, [l, u, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!c(e).domNode)
        return i;
      const { x: s, y: a, zoom: l } = c(e).viewport, { x: u, y: d } = c(e).domNode.getBoundingClientRect(), p = Wo(i, [s, a, l]);
      return { x: p.x + u, y: p.y + d };
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
    getNodesBounds: (i) => uv(i, {
      nodeLookup: c(e).nodeLookup,
      nodeOrigin: c(e).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(c(e).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
  };
}
function il(e, t) {
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
function Mc(e, t) {
  ue(t, !0);
  let n = m(t, "store", 15), r = m(t, "selectionKey", 7, "Shift"), o = m(t, "multiSelectionKey", 23, () => or() ? "Meta" : "Control"), i = m(t, "deleteKey", 7, "Backspace"), s = m(t, "panActivationKey", 7, " "), a = m(t, "zoomActivationKey", 23, () => or() ? "Meta" : "Control"), { deleteElements: l } = rt();
  function u(y) {
    return y !== null && typeof y == "object";
  }
  function d(y) {
    return u(y) ? y.modifier || [] : [];
  }
  function p(y) {
    return y == null ? "" : u(y) ? y.key : y;
  }
  function f(y, k) {
    return (Array.isArray(y) ? y : [y]).map((w) => {
      const L = p(w);
      return {
        key: L,
        modifier: d(w),
        enabled: L !== null,
        callback: k
      };
    });
  }
  function g() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  async function h() {
    const y = n().nodes.filter((x) => x.selected), k = n().edges.filter((x) => x.selected), { deletedNodes: w, deletedEdges: L } = await l({ nodes: y, edges: k });
    (w.length > 0 || L.length > 0) && n().ondelete?.({ nodes: w, edges: L });
  }
  return fa("blur", pt, g), fa("contextmenu", pt, g), it(pt, (y, k) => qt?.(y, k), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), it(pt, (y, k) => qt?.(y, k), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), it(pt, (y, k) => qt?.(y, k), () => ({
    trigger: f(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), it(pt, (y, k) => qt?.(y, k), () => ({
    trigger: f(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), it(pt, (y, k) => qt?.(y, k), () => ({
    trigger: f(i(), (y) => {
      !(y.originalEvent.ctrlKey || y.originalEvent.metaKey || y.originalEvent.shiftKey) && !Fu(y.originalEvent) && (n(n().deleteKeyPressed = !0, !0), h());
    }),
    type: "keydown"
  })), it(pt, (y, k) => qt?.(y, k), () => ({
    trigger: f(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), it(pt, (y, k) => qt?.(y, k), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), it(pt, (y, k) => qt?.(y, k), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), it(pt, (y, k) => qt?.(y, k), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), it(pt, (y, k) => qt?.(y, k), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), ce({
    get store() {
      return n();
    },
    set store(y) {
      n(y), v();
    },
    get selectionKey() {
      return r();
    },
    set selectionKey(y = "Shift") {
      r(y), v();
    },
    get multiSelectionKey() {
      return o();
    },
    set multiSelectionKey(y = or() ? "Meta" : "Control") {
      o(y), v();
    },
    get deleteKey() {
      return i();
    },
    set deleteKey(y = "Backspace") {
      i(y), v();
    },
    get panActivationKey() {
      return s();
    },
    set panActivationKey(y = " ") {
      s(y), v();
    },
    get zoomActivationKey() {
      return a();
    },
    set zoomActivationKey(y = or() ? "Meta" : "Control") {
      a(y), v();
    }
  });
}
se(
  Mc,
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
var j0 = /* @__PURE__ */ ge('<path fill="none" class="svelte-flow__connection-path"></path>'), Y0 = /* @__PURE__ */ ge('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function Oc(e, t) {
  ue(t, !0);
  let n = m(t, "store", 15), r = m(t, "type", 7), o = m(t, "containerStyle", 7), i = m(t, "style", 7), s = m(t, "LineComponent", 7), a = /* @__PURE__ */ S(() => {
    if (!n().connection.inProgress)
      return "";
    const p = {
      sourceX: n().connection.from.x,
      sourceY: n().connection.from.y,
      sourcePosition: n().connection.fromPosition,
      targetX: n().connection.to.x,
      targetY: n().connection.to.y,
      targetPosition: n().connection.toPosition
    };
    switch (r()) {
      case on.Bezier: {
        const [f] = Ju(p);
        return f;
      }
      case on.Straight: {
        const [f] = Qu(p);
        return f;
      }
      case on.Step:
      case on.SmoothStep: {
        const [f] = qs({
          ...p,
          borderRadius: r() === on.Step ? 0 : void 0
        });
        return f;
      }
    }
  });
  var l = Le(), u = le(l);
  {
    var d = (p) => {
      var f = Y0(), g = I(f), h = I(g);
      {
        var y = (w) => {
          var L = Le(), x = le(L);
          Ls(x, s, ($, C) => {
            C($, {});
          }), N(w, L);
        }, k = (w) => {
          var L = j0();
          xe(() => {
            we(L, "d", c(a)), ft(L, i());
          }), N(w, L);
        };
        ae(h, (w) => {
          s() ? w(y) : w(k, !1);
        });
      }
      A(g), A(f), xe(
        (w) => {
          we(f, "width", n().width), we(f, "height", n().height), ft(f, o()), yt(g, 0, w);
        },
        [
          () => wn([
            "svelte-flow__connection",
            av(n().connection.isValid)
          ])
        ]
      ), N(p, f);
    };
    ae(u, (p) => {
      n().connection.inProgress && p(d);
    });
  }
  return N(e, l), ce({
    get store() {
      return n();
    },
    set store(p) {
      n(p), v();
    },
    get type() {
      return r();
    },
    set type(p) {
      r(p), v();
    },
    get containerStyle() {
      return o();
    },
    set containerStyle(p) {
      o(p), v();
    },
    get style() {
      return i();
    },
    set style(p) {
      i(p), v();
    },
    get LineComponent() {
      return s();
    },
    set LineComponent(p) {
      s(p), v();
    }
  });
}
se(
  Oc,
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
var W0 = /* @__PURE__ */ ee("<div><!></div>");
function co(e, t) {
  ue(t, !0);
  let n = m(t, "position", 7, "top-right"), r = m(t, "style", 7), o = m(t, "class", 7), i = m(t, "children", 7), s = /* @__PURE__ */ ze(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "position",
    "style",
    "class",
    "children"
  ]), a = /* @__PURE__ */ S(() => `${n()}`.split("-"));
  var l = W0();
  Ge(l, (d) => ({ class: d, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...c(a)]
  ]);
  var u = I(l);
  return je(u, () => i() ?? nt), A(l), N(e, l), ce({
    get position() {
      return n();
    },
    set position(d = "top-right") {
      n(d), v();
    },
    get style() {
      return r();
    },
    set style(d) {
      r(d), v();
    },
    get class() {
      return o();
    },
    set class(d) {
      o(d), v();
    },
    get children() {
      return i();
    },
    set children(d) {
      i(d), v();
    }
  });
}
se(co, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var X0 = /* @__PURE__ */ ee('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function Vc(e, t) {
  ue(t, !0);
  let n = m(t, "proOptions", 7), r = m(t, "position", 7, "bottom-right");
  var o = Le(), i = le(o);
  {
    var s = (a) => {
      co(a, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var d = X0();
          N(l, d);
        },
        $$slots: { default: !0 }
      });
    };
    ae(i, (a) => {
      n()?.hideAttribution || a(s);
    });
  }
  return N(e, o), ce({
    get proOptions() {
      return n();
    },
    set proOptions(a) {
      n(a), v();
    },
    get position() {
      return r();
    },
    set position(a = "bottom-right") {
      r(a), v();
    }
  });
}
se(Vc, { proOptions: {}, position: {} }, [], [], !0);
var F0 = /* @__PURE__ */ ee("<div><!></div>");
const G0 = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function Hc(e, t) {
  ue(t, !0), Ne(e, G0);
  let n = m(t, "width", 7), r = m(t, "height", 7), o = m(t, "colorMode", 7), i = m(t, "domNode", 15), s = m(t, "clientWidth", 15), a = m(t, "clientHeight", 15), l = m(t, "children", 7), u = m(t, "rest", 7), d = /* @__PURE__ */ S(() => u().class), p = /* @__PURE__ */ S(() => qf(u(), [
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
  var g = F0();
  Ge(
    g,
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
      ...c(p),
      [Kt]: y
    }),
    [
      () => ({ width: Ut(n()), height: Ut(r()) })
    ],
    "svelte-12wlba6"
  );
  var h = I(g);
  return je(h, () => l() ?? nt), A(g), _t(g, (y) => i(y), () => i()), ya(g, "clientHeight", a), ya(g, "clientWidth", s), N(e, g), ce({
    get width() {
      return n();
    },
    set width(y) {
      n(y), v();
    },
    get height() {
      return r();
    },
    set height(y) {
      r(y), v();
    },
    get colorMode() {
      return o();
    },
    set colorMode(y) {
      o(y), v();
    },
    get domNode() {
      return i();
    },
    set domNode(y) {
      i(y), v();
    },
    get clientWidth() {
      return s();
    },
    set clientWidth(y) {
      s(y), v();
    },
    get clientHeight() {
      return a();
    },
    set clientHeight(y) {
      a(y), v();
    },
    get children() {
      return l();
    },
    set children(y) {
      l(y), v();
    },
    get rest() {
      return u();
    },
    set rest(y) {
      u(y), v();
    }
  });
}
se(
  Hc,
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
var J0 = /* @__PURE__ */ ee('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), U0 = /* @__PURE__ */ ee("<!> <!>", 1), Q0 = /* @__PURE__ */ ee("<!> <!> <!> <!> <!>", 1);
function Ac(e, t) {
  ue(t, !0);
  let n = m(t, "width", 7), r = m(t, "height", 7), o = m(t, "proOptions", 7), i = m(t, "selectionKey", 7), s = m(t, "deleteKey", 7), a = m(t, "panActivationKey", 7), l = m(t, "multiSelectionKey", 7), u = m(t, "zoomActivationKey", 7), d = m(t, "paneClickDistance", 7, 1), p = m(t, "nodeClickDistance", 7, 1), f = m(t, "onmovestart", 7), g = m(t, "onmoveend", 7), h = m(t, "onmove", 7), y = m(t, "oninit", 7), k = m(t, "onnodeclick", 7), w = m(t, "onnodecontextmenu", 7), L = m(t, "onnodedrag", 7), x = m(t, "onnodedragstart", 7), $ = m(t, "onnodedragstop", 7), C = m(t, "onnodepointerenter", 7), M = m(t, "onnodepointermove", 7), O = m(t, "onnodepointerleave", 7), q = m(t, "onselectionclick", 7), J = m(t, "onselectioncontextmenu", 7), j = m(t, "onselectionstart", 7), T = m(t, "onselectionend", 7), _ = m(t, "onedgeclick", 7), z = m(t, "onedgecontextmenu", 7), b = m(t, "onedgepointerenter", 7), E = m(t, "onedgepointerleave", 7), P = m(t, "onpaneclick", 7), H = m(t, "onpanecontextmenu", 7), Z = m(t, "panOnScrollMode", 23, () => Xt.Free), D = m(t, "preventScrolling", 7, !0), B = m(t, "zoomOnScroll", 7, !0), G = m(t, "zoomOnDoubleClick", 7, !0), U = m(t, "zoomOnPinch", 7, !0), re = m(t, "panOnScroll", 7, !1), F = m(t, "panOnDrag", 7, !0), R = m(t, "selectionOnDrag", 7, !0), Y = m(t, "connectionLineComponent", 7), Q = m(t, "connectionLineStyle", 7), W = m(t, "connectionLineContainerStyle", 7), he = m(t, "connectionLineType", 23, () => on.Bezier), fe = m(t, "attributionPosition", 7), oe = m(t, "children", 7), ne = m(t, "nodes", 31, () => Nt([])), de = m(t, "edges", 31, () => Nt([])), te = m(t, "viewport", 31, () => {
  }), ve = /* @__PURE__ */ ze(t, [
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
  ]), ie = wc({
    props: ve,
    width: n(),
    height: r(),
    get nodes() {
      return ne();
    },
    set nodes(K) {
      ne(K);
    },
    get edges() {
      return de();
    },
    set edges(K) {
      de(K);
    },
    get viewport() {
      return te();
    },
    set viewport(K) {
      te(K);
    }
  });
  const ke = Pn(Fo);
  return ke && ke.setStore && ke.setStore(ie), dr(Fo, {
    provider: !1,
    getStore() {
      return ie;
    }
  }), Re(() => {
    const K = { nodes: ie.selectedNodes, edges: ie.selectedEdges };
    et(() => t.onselectionchange)?.(K);
    for (const Je of ie.selectionChangeHandlers.values())
      Je(K);
  }), oi(() => {
    ie.reset();
  }), Hc(e, {
    get colorMode() {
      return ie.colorMode;
    },
    get width() {
      return n();
    },
    get height() {
      return r();
    },
    get rest() {
      return ve;
    },
    get domNode() {
      return ie.domNode;
    },
    set domNode(K) {
      ie.domNode = K;
    },
    get clientWidth() {
      return ie.width;
    },
    set clientWidth(K) {
      ie.width = K;
    },
    get clientHeight() {
      return ie.height;
    },
    set clientHeight(K) {
      ie.height = K;
    },
    children: (K, Je) => {
      var Te = Q0(), Me = le(Te);
      Mc(Me, {
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
          return ie;
        },
        set store(Oe) {
          ie = Oe;
        }
      });
      var Ue = V(Me, 2);
      bc(Ue, {
        get panOnScrollMode() {
          return Z();
        },
        get preventScrolling() {
          return D();
        },
        get zoomOnScroll() {
          return B();
        },
        get zoomOnDoubleClick() {
          return G();
        },
        get zoomOnPinch() {
          return U();
        },
        get panOnScroll() {
          return re();
        },
        get panOnDrag() {
          return F();
        },
        get paneClickDistance() {
          return d();
        },
        get onmovestart() {
          return f();
        },
        get onmove() {
          return h();
        },
        get onmoveend() {
          return g();
        },
        get oninit() {
          return y();
        },
        get store() {
          return ie;
        },
        set store(Oe) {
          ie = Oe;
        },
        children: (Oe, lt) => {
          xc(Oe, {
            get onpaneclick() {
              return P();
            },
            get onpanecontextmenu() {
              return H();
            },
            get onselectionstart() {
              return j();
            },
            get onselectionend() {
              return T();
            },
            get panOnDrag() {
              return F();
            },
            get selectionOnDrag() {
              return R();
            },
            get store() {
              return ie;
            },
            set store(pe) {
              ie = pe;
            },
            children: (pe, Ke) => {
              var ut = U0(), We = le(ut);
              $c(We, {
                get store() {
                  return ie;
                },
                set store(wi) {
                  ie = wi;
                },
                children: (wi, fb) => {
                  var ea = J0(), ta = V(le(ea), 2);
                  Dc(ta, {
                    get onedgeclick() {
                      return _();
                    },
                    get onedgecontextmenu() {
                      return z();
                    },
                    get onedgepointerenter() {
                      return b();
                    },
                    get onedgepointerleave() {
                      return E();
                    },
                    get store() {
                      return ie;
                    },
                    set store(Zn) {
                      ie = Zn;
                    }
                  });
                  var na = V(ta, 4);
                  Oc(na, {
                    get type() {
                      return he();
                    },
                    get LineComponent() {
                      return Y();
                    },
                    get containerStyle() {
                      return W();
                    },
                    get style() {
                      return Q();
                    },
                    get store() {
                      return ie;
                    },
                    set store(Zn) {
                      ie = Zn;
                    }
                  });
                  var ra = V(na, 2);
                  Pc(ra, {
                    get nodeClickDistance() {
                      return p();
                    },
                    get onnodeclick() {
                      return k();
                    },
                    get onnodecontextmenu() {
                      return w();
                    },
                    get onnodepointerenter() {
                      return C();
                    },
                    get onnodepointermove() {
                      return M();
                    },
                    get onnodepointerleave() {
                      return O();
                    },
                    get onnodedrag() {
                      return L();
                    },
                    get onnodedragstart() {
                      return x();
                    },
                    get onnodedragstop() {
                      return $();
                    },
                    get store() {
                      return ie;
                    },
                    set store(Zn) {
                      ie = Zn;
                    }
                  });
                  var Vd = V(ra, 2);
                  zc(Vd, {
                    get onselectionclick() {
                      return q();
                    },
                    get onselectioncontextmenu() {
                      return J();
                    },
                    get onnodedrag() {
                      return L();
                    },
                    get onnodedragstart() {
                      return x();
                    },
                    get onnodedragstop() {
                      return $();
                    },
                    get store() {
                      return ie;
                    },
                    set store(Zn) {
                      ie = Zn;
                    }
                  }), me(2), N(wi, ea);
                },
                $$slots: { default: !0 }
              });
              var Et = V(We, 2);
              const Qe = /* @__PURE__ */ S(() => !!(ie.selectionRect && ie.selectionRectMode === "user")), Zt = /* @__PURE__ */ S(() => ie.selectionRect?.width), yi = /* @__PURE__ */ S(() => ie.selectionRect?.height), An = /* @__PURE__ */ S(() => ie.selectionRect?.x), In = /* @__PURE__ */ S(() => ie.selectionRect?.y);
              Ws(Et, {
                get isVisible() {
                  return c(Qe);
                },
                get width() {
                  return c(Zt);
                },
                get height() {
                  return c(yi);
                },
                get x() {
                  return c(An);
                },
                get y() {
                  return c(In);
                }
              }), N(pe, ut);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var qe = V(Ue, 2);
      Vc(qe, {
        get proOptions() {
          return o();
        },
        get position() {
          return fe();
        }
      });
      var Be = V(qe, 2);
      Cc(Be, {
        get store() {
          return ie;
        }
      });
      var nn = V(Be, 2);
      je(nn, () => oe() ?? nt), N(K, Te);
    },
    $$slots: { default: !0 }
  }), ce({
    get width() {
      return n();
    },
    set width(K) {
      n(K), v();
    },
    get height() {
      return r();
    },
    set height(K) {
      r(K), v();
    },
    get proOptions() {
      return o();
    },
    set proOptions(K) {
      o(K), v();
    },
    get selectionKey() {
      return i();
    },
    set selectionKey(K) {
      i(K), v();
    },
    get deleteKey() {
      return s();
    },
    set deleteKey(K) {
      s(K), v();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(K) {
      a(K), v();
    },
    get multiSelectionKey() {
      return l();
    },
    set multiSelectionKey(K) {
      l(K), v();
    },
    get zoomActivationKey() {
      return u();
    },
    set zoomActivationKey(K) {
      u(K), v();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(K = 1) {
      d(K), v();
    },
    get nodeClickDistance() {
      return p();
    },
    set nodeClickDistance(K = 1) {
      p(K), v();
    },
    get onmovestart() {
      return f();
    },
    set onmovestart(K) {
      f(K), v();
    },
    get onmoveend() {
      return g();
    },
    set onmoveend(K) {
      g(K), v();
    },
    get onmove() {
      return h();
    },
    set onmove(K) {
      h(K), v();
    },
    get oninit() {
      return y();
    },
    set oninit(K) {
      y(K), v();
    },
    get onnodeclick() {
      return k();
    },
    set onnodeclick(K) {
      k(K), v();
    },
    get onnodecontextmenu() {
      return w();
    },
    set onnodecontextmenu(K) {
      w(K), v();
    },
    get onnodedrag() {
      return L();
    },
    set onnodedrag(K) {
      L(K), v();
    },
    get onnodedragstart() {
      return x();
    },
    set onnodedragstart(K) {
      x(K), v();
    },
    get onnodedragstop() {
      return $();
    },
    set onnodedragstop(K) {
      $(K), v();
    },
    get onnodepointerenter() {
      return C();
    },
    set onnodepointerenter(K) {
      C(K), v();
    },
    get onnodepointermove() {
      return M();
    },
    set onnodepointermove(K) {
      M(K), v();
    },
    get onnodepointerleave() {
      return O();
    },
    set onnodepointerleave(K) {
      O(K), v();
    },
    get onselectionclick() {
      return q();
    },
    set onselectionclick(K) {
      q(K), v();
    },
    get onselectioncontextmenu() {
      return J();
    },
    set onselectioncontextmenu(K) {
      J(K), v();
    },
    get onselectionstart() {
      return j();
    },
    set onselectionstart(K) {
      j(K), v();
    },
    get onselectionend() {
      return T();
    },
    set onselectionend(K) {
      T(K), v();
    },
    get onedgeclick() {
      return _();
    },
    set onedgeclick(K) {
      _(K), v();
    },
    get onedgecontextmenu() {
      return z();
    },
    set onedgecontextmenu(K) {
      z(K), v();
    },
    get onedgepointerenter() {
      return b();
    },
    set onedgepointerenter(K) {
      b(K), v();
    },
    get onedgepointerleave() {
      return E();
    },
    set onedgepointerleave(K) {
      E(K), v();
    },
    get onpaneclick() {
      return P();
    },
    set onpaneclick(K) {
      P(K), v();
    },
    get onpanecontextmenu() {
      return H();
    },
    set onpanecontextmenu(K) {
      H(K), v();
    },
    get panOnScrollMode() {
      return Z();
    },
    set panOnScrollMode(K = Xt.Free) {
      Z(K), v();
    },
    get preventScrolling() {
      return D();
    },
    set preventScrolling(K = !0) {
      D(K), v();
    },
    get zoomOnScroll() {
      return B();
    },
    set zoomOnScroll(K = !0) {
      B(K), v();
    },
    get zoomOnDoubleClick() {
      return G();
    },
    set zoomOnDoubleClick(K = !0) {
      G(K), v();
    },
    get zoomOnPinch() {
      return U();
    },
    set zoomOnPinch(K = !0) {
      U(K), v();
    },
    get panOnScroll() {
      return re();
    },
    set panOnScroll(K = !1) {
      re(K), v();
    },
    get panOnDrag() {
      return F();
    },
    set panOnDrag(K = !0) {
      F(K), v();
    },
    get selectionOnDrag() {
      return R();
    },
    set selectionOnDrag(K = !0) {
      R(K), v();
    },
    get connectionLineComponent() {
      return Y();
    },
    set connectionLineComponent(K) {
      Y(K), v();
    },
    get connectionLineStyle() {
      return Q();
    },
    set connectionLineStyle(K) {
      Q(K), v();
    },
    get connectionLineContainerStyle() {
      return W();
    },
    set connectionLineContainerStyle(K) {
      W(K), v();
    },
    get connectionLineType() {
      return he();
    },
    set connectionLineType(K = on.Bezier) {
      he(K), v();
    },
    get attributionPosition() {
      return fe();
    },
    set attributionPosition(K) {
      fe(K), v();
    },
    get children() {
      return oe();
    },
    set children(K) {
      oe(K), v();
    },
    get nodes() {
      return ne();
    },
    set nodes(K = []) {
      ne(K), v();
    },
    get edges() {
      return de();
    },
    set edges(K = []) {
      de(K), v();
    },
    get viewport() {
      return te();
    },
    set viewport(K = void 0) {
      te(K), v();
    }
  });
}
se(
  Ac,
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
function Ic(e, t) {
  ue(t, !0);
  let n = m(t, "children", 7), r = /* @__PURE__ */ Ce(wc({ props: {}, nodes: [], edges: [] }));
  dr(Fo, {
    provider: !0,
    getStore() {
      return c(r);
    },
    setStore: (s) => {
      X(r, s);
    }
  }), oi(() => {
    c(r).reset();
  });
  var o = Le(), i = le(o);
  return je(i, () => n() ?? nt), N(e, o), ce({
    get children() {
      return n();
    },
    set children(s) {
      n(s), v();
    }
  });
}
se(Ic, { children: {} }, [], [], !0);
var em = /* @__PURE__ */ ee("<button><!></button>");
function Tr(e, t) {
  ue(t, !0);
  let n = m(t, "class", 7), r = m(t, "bgColor", 7), o = m(t, "bgColorHover", 7), i = m(t, "color", 7), s = m(t, "colorHover", 7), a = m(t, "borderColor", 7), l = m(t, "onclick", 7), u = m(t, "children", 7), d = /* @__PURE__ */ ze(t, [
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
  var p = em();
  Ge(
    p,
    (g) => ({
      type: "button",
      onclick: l(),
      class: ["svelte-flow__controls-button", n()],
      ...d,
      [Kt]: g
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
  var f = I(p);
  return je(f, () => u() ?? nt), A(p), N(e, p), ce({
    get class() {
      return n();
    },
    set class(g) {
      n(g), v();
    },
    get bgColor() {
      return r();
    },
    set bgColor(g) {
      r(g), v();
    },
    get bgColorHover() {
      return o();
    },
    set bgColorHover(g) {
      o(g), v();
    },
    get color() {
      return i();
    },
    set color(g) {
      i(g), v();
    },
    get colorHover() {
      return s();
    },
    set colorHover(g) {
      s(g), v();
    },
    get borderColor() {
      return a();
    },
    set borderColor(g) {
      a(g), v();
    },
    get onclick() {
      return l();
    },
    set onclick(g) {
      l(g), v();
    },
    get children() {
      return u();
    },
    set children(g) {
      u(g), v();
    }
  });
}
se(
  Tr,
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
var tm = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function Zc(e) {
  var t = tm();
  N(e, t);
}
se(Zc, {}, [], [], !0);
var nm = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function qc(e) {
  var t = nm();
  N(e, t);
}
se(qc, {}, [], [], !0);
var rm = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Bc(e) {
  var t = rm();
  N(e, t);
}
se(Bc, {}, [], [], !0);
var om = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Kc(e) {
  var t = om();
  N(e, t);
}
se(Kc, {}, [], [], !0);
var im = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function Rc(e) {
  var t = im();
  N(e, t);
}
se(Rc, {}, [], [], !0);
var sm = /* @__PURE__ */ ee("<!> <!>", 1), am = /* @__PURE__ */ ee("<!> <!> <!> <!> <!> <!>", 1);
function jc(e, t) {
  ue(t, !0);
  let n = m(t, "position", 7, "bottom-left"), r = m(t, "orientation", 7, "vertical"), o = m(t, "showZoom", 7, !0), i = m(t, "showFitView", 7, !0), s = m(t, "showLock", 7, !0), a = m(t, "style", 7), l = m(t, "class", 7), u = m(t, "buttonBgColor", 7), d = m(t, "buttonBgColorHover", 7), p = m(t, "buttonColor", 7), f = m(t, "buttonColorHover", 7), g = m(t, "buttonBorderColor", 7), h = m(t, "fitViewOptions", 7), y = m(t, "children", 7), k = m(t, "before", 7), w = m(t, "after", 7), L = /* @__PURE__ */ ze(t, [
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
  ]), x = /* @__PURE__ */ S(At);
  const $ = {
    bgColor: u(),
    bgColorHover: d(),
    color: p(),
    colorHover: f(),
    borderColor: g()
  };
  let C = /* @__PURE__ */ S(() => c(x).nodesDraggable || c(x).nodesConnectable || c(x).elementsSelectable), M = /* @__PURE__ */ S(() => c(x).viewport.zoom <= c(x).minZoom), O = /* @__PURE__ */ S(() => c(x).viewport.zoom >= c(x).maxZoom), q = /* @__PURE__ */ S(() => c(x).ariaLabelConfig), J = /* @__PURE__ */ S(() => r() === "horizontal" ? "horizontal" : "vertical");
  const j = () => {
    c(x).zoomIn();
  }, T = () => {
    c(x).zoomOut();
  }, _ = () => {
    c(x).fitView(h());
  }, z = () => {
    let E = !c(C);
    c(x).nodesDraggable = E, c(x).nodesConnectable = E, c(x).elementsSelectable = E;
  }, b = /* @__PURE__ */ S(() => [
    "svelte-flow__controls",
    c(J),
    l()
  ]);
  return co(e, He(
    {
      get class() {
        return c(b);
      },
      get position() {
        return n();
      },
      "data-testid": "svelte-flow__controls",
      get "aria-label"() {
        return c(q)["controls.ariaLabel"];
      },
      get style() {
        return a();
      }
    },
    () => L,
    {
      children: (E, P) => {
        var H = am(), Z = le(H);
        {
          var D = (fe) => {
            var oe = Le(), ne = le(oe);
            je(ne, k), N(fe, oe);
          };
          ae(Z, (fe) => {
            k() && fe(D);
          });
        }
        var B = V(Z, 2);
        {
          var G = (fe) => {
            var oe = sm(), ne = le(oe);
            Tr(ne, He(
              {
                onclick: j,
                class: "svelte-flow__controls-zoomin",
                get title() {
                  return c(q)["controls.zoomIn.ariaLabel"];
                },
                get "aria-label"() {
                  return c(q)["controls.zoomIn.ariaLabel"];
                },
                get disabled() {
                  return c(O);
                }
              },
              () => $,
              {
                children: (te, ve) => {
                  Zc(te);
                },
                $$slots: { default: !0 }
              }
            ));
            var de = V(ne, 2);
            Tr(de, He(
              {
                onclick: T,
                class: "svelte-flow__controls-zoomout",
                get title() {
                  return c(q)["controls.zoomOut.ariaLabel"];
                },
                get "aria-label"() {
                  return c(q)["controls.zoomOut.ariaLabel"];
                },
                get disabled() {
                  return c(M);
                }
              },
              () => $,
              {
                children: (te, ve) => {
                  qc(te);
                },
                $$slots: { default: !0 }
              }
            )), N(fe, oe);
          };
          ae(B, (fe) => {
            o() && fe(G);
          });
        }
        var U = V(B, 2);
        {
          var re = (fe) => {
            Tr(fe, He(
              {
                class: "svelte-flow__controls-fitview",
                onclick: _,
                get title() {
                  return c(q)["controls.fitView.ariaLabel"];
                },
                get "aria-label"() {
                  return c(q)["controls.fitView.ariaLabel"];
                }
              },
              () => $,
              {
                children: (oe, ne) => {
                  Bc(oe);
                },
                $$slots: { default: !0 }
              }
            ));
          };
          ae(U, (fe) => {
            i() && fe(re);
          });
        }
        var F = V(U, 2);
        {
          var R = (fe) => {
            Tr(fe, He(
              {
                class: "svelte-flow__controls-interactive",
                onclick: z,
                get title() {
                  return c(q)["controls.interactive.ariaLabel"];
                },
                get "aria-label"() {
                  return c(q)["controls.interactive.ariaLabel"];
                }
              },
              () => $,
              {
                children: (oe, ne) => {
                  var de = Le(), te = le(de);
                  {
                    var ve = (ke) => {
                      Rc(ke);
                    }, ie = (ke) => {
                      Kc(ke);
                    };
                    ae(te, (ke) => {
                      c(C) ? ke(ve) : ke(ie, !1);
                    });
                  }
                  N(oe, de);
                },
                $$slots: { default: !0 }
              }
            ));
          };
          ae(F, (fe) => {
            s() && fe(R);
          });
        }
        var Y = V(F, 2);
        {
          var Q = (fe) => {
            var oe = Le(), ne = le(oe);
            je(ne, y), N(fe, oe);
          };
          ae(Y, (fe) => {
            y() && fe(Q);
          });
        }
        var W = V(Y, 2);
        {
          var he = (fe) => {
            var oe = Le(), ne = le(oe);
            je(ne, w), N(fe, oe);
          };
          ae(W, (fe) => {
            w() && fe(he);
          });
        }
        N(E, H);
      },
      $$slots: { default: !0 }
    }
  )), ce({
    get position() {
      return n();
    },
    set position(E = "bottom-left") {
      n(E), v();
    },
    get orientation() {
      return r();
    },
    set orientation(E = "vertical") {
      r(E), v();
    },
    get showZoom() {
      return o();
    },
    set showZoom(E = !0) {
      o(E), v();
    },
    get showFitView() {
      return i();
    },
    set showFitView(E = !0) {
      i(E), v();
    },
    get showLock() {
      return s();
    },
    set showLock(E = !0) {
      s(E), v();
    },
    get style() {
      return a();
    },
    set style(E) {
      a(E), v();
    },
    get class() {
      return l();
    },
    set class(E) {
      l(E), v();
    },
    get buttonBgColor() {
      return u();
    },
    set buttonBgColor(E) {
      u(E), v();
    },
    get buttonBgColorHover() {
      return d();
    },
    set buttonBgColorHover(E) {
      d(E), v();
    },
    get buttonColor() {
      return p();
    },
    set buttonColor(E) {
      p(E), v();
    },
    get buttonColorHover() {
      return f();
    },
    set buttonColorHover(E) {
      f(E), v();
    },
    get buttonBorderColor() {
      return g();
    },
    set buttonBorderColor(E) {
      g(E), v();
    },
    get fitViewOptions() {
      return h();
    },
    set fitViewOptions(E) {
      h(E), v();
    },
    get children() {
      return y();
    },
    set children(E) {
      y(E), v();
    },
    get before() {
      return k();
    },
    set before(E) {
      k(E), v();
    },
    get after() {
      return w();
    },
    set after(E) {
      w(E), v();
    }
  });
}
se(
  jc,
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
var ln;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(ln || (ln = {}));
var lm = /* @__PURE__ */ ge("<circle></circle>");
function Yc(e, t) {
  ue(t, !0);
  let n = m(t, "radius", 7), r = m(t, "class", 7);
  var o = lm();
  return xe(() => {
    we(o, "cx", n()), we(o, "cy", n()), we(o, "r", n()), yt(o, 0, wn(["svelte-flow__background-pattern", "dots", r()]));
  }), N(e, o), ce({
    get radius() {
      return n();
    },
    set radius(i) {
      n(i), v();
    },
    get class() {
      return r();
    },
    set class(i) {
      r(i), v();
    }
  });
}
se(Yc, { radius: {}, class: {} }, [], [], !0);
var um = /* @__PURE__ */ ge("<path></path>");
function Wc(e, t) {
  ue(t, !0);
  let n = m(t, "lineWidth", 7), r = m(t, "dimensions", 7), o = m(t, "variant", 7), i = m(t, "class", 7);
  var s = um();
  return xe(() => {
    we(s, "stroke-width", n()), we(s, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), yt(s, 0, wn(["svelte-flow__background-pattern", o(), i()]));
  }), N(e, s), ce({
    get lineWidth() {
      return n();
    },
    set lineWidth(a) {
      n(a), v();
    },
    get dimensions() {
      return r();
    },
    set dimensions(a) {
      r(a), v();
    },
    get variant() {
      return o();
    },
    set variant(a) {
      o(a), v();
    },
    get class() {
      return i();
    },
    set class(a) {
      i(a), v();
    }
  });
}
se(Wc, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const cm = {
  [ln.Dots]: 1,
  [ln.Lines]: 1,
  [ln.Cross]: 6
};
var dm = /* @__PURE__ */ ge('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function Xc(e, t) {
  ue(t, !0);
  let n = m(t, "id", 7), r = m(t, "variant", 23, () => ln.Dots), o = m(t, "gap", 7, 20), i = m(t, "size", 7), s = m(t, "lineWidth", 7, 1), a = m(t, "bgColor", 7), l = m(t, "patternColor", 7), u = m(t, "patternClass", 7), d = m(t, "class", 7), p = /* @__PURE__ */ S(At), f = /* @__PURE__ */ S(() => r() === ln.Dots), g = /* @__PURE__ */ S(() => r() === ln.Cross), h = /* @__PURE__ */ S(() => Array.isArray(o()) ? o() : [o(), o()]), y = /* @__PURE__ */ S(() => `background-pattern-${c(p).flowId}-${n() ?? ""}`), k = /* @__PURE__ */ S(() => [
    c(h)[0] * c(p).viewport.zoom || 1,
    c(h)[1] * c(p).viewport.zoom || 1
  ]), w = /* @__PURE__ */ S(() => (i() ?? cm[r()]) * c(p).viewport.zoom), L = /* @__PURE__ */ S(() => c(g) ? [c(w), c(w)] : c(k)), x = /* @__PURE__ */ S(() => c(f) ? [c(w) / 2, c(w) / 2] : [
    c(L)[0] / 2,
    c(L)[1] / 2
  ]);
  var $ = dm();
  let C;
  var M = I($), O = I(M);
  {
    var q = (T) => {
      const _ = /* @__PURE__ */ S(() => c(w) / 2);
      Yc(T, {
        get radius() {
          return c(_);
        },
        get class() {
          return u();
        }
      });
    }, J = (T) => {
      Wc(T, {
        get dimensions() {
          return c(L);
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
    ae(O, (T) => {
      c(f) ? T(q) : T(J, !1);
    });
  }
  A(M);
  var j = V(M);
  return A($), xe(
    (T) => {
      yt($, 0, wn([
        "svelte-flow__background",
        "svelte-flow__container",
        d()
      ])), C = ft($, "", C, T), we(M, "id", c(y)), we(M, "x", c(p).viewport.x % c(k)[0]), we(M, "y", c(p).viewport.y % c(k)[1]), we(M, "width", c(k)[0]), we(M, "height", c(k)[1]), we(M, "patternTransform", `translate(-${c(x)[0]},-${c(x)[1]})`), we(j, "fill", `url(#${c(y)})`);
    },
    [
      () => ({
        "--xy-background-color-props": a(),
        "--xy-background-pattern-color-props": l()
      })
    ]
  ), N(e, $), ce({
    get id() {
      return n();
    },
    set id(T) {
      n(T), v();
    },
    get variant() {
      return r();
    },
    set variant(T = ln.Dots) {
      r(T), v();
    },
    get gap() {
      return o();
    },
    set gap(T = 20) {
      o(T), v();
    },
    get size() {
      return i();
    },
    set size(T) {
      i(T), v();
    },
    get lineWidth() {
      return s();
    },
    set lineWidth(T = 1) {
      s(T), v();
    },
    get bgColor() {
      return a();
    },
    set bgColor(T) {
      a(T), v();
    },
    get patternColor() {
      return l();
    },
    set patternColor(T) {
      l(T), v();
    },
    get patternClass() {
      return u();
    },
    set patternClass(T) {
      u(T), v();
    },
    get class() {
      return d();
    },
    set class(T) {
      d(T), v();
    }
  });
}
se(
  Xc,
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
var fm = /* @__PURE__ */ ge("<rect></rect>");
function Fc(e, t) {
  ue(t, !0);
  let n = m(t, "x", 7), r = m(t, "y", 7), o = m(t, "width", 7), i = m(t, "height", 7), s = m(t, "borderRadius", 7, 5), a = m(t, "color", 7), l = m(t, "shapeRendering", 7), u = m(t, "strokeColor", 7), d = m(t, "strokeWidth", 7, 2), p = m(t, "selected", 7), f = m(t, "class", 7);
  var g = fm();
  let h, y;
  return xe(
    (k, w) => {
      h = yt(g, 0, wn(["svelte-flow__minimap-node", f()]), null, h, k), we(g, "x", n()), we(g, "y", r()), we(g, "rx", s()), we(g, "ry", s()), we(g, "width", o()), we(g, "height", i()), we(g, "shape-rendering", l()), y = ft(g, "", y, w);
    },
    [
      () => ({ selected: p() }),
      () => ({
        fill: a(),
        stroke: u(),
        "stroke-width": d()
      })
    ]
  ), N(e, g), ce({
    get x() {
      return n();
    },
    set x(k) {
      n(k), v();
    },
    get y() {
      return r();
    },
    set y(k) {
      r(k), v();
    },
    get width() {
      return o();
    },
    set width(k) {
      o(k), v();
    },
    get height() {
      return i();
    },
    set height(k) {
      i(k), v();
    },
    get borderRadius() {
      return s();
    },
    set borderRadius(k = 5) {
      s(k), v();
    },
    get color() {
      return a();
    },
    set color(k) {
      a(k), v();
    },
    get shapeRendering() {
      return l();
    },
    set shapeRendering(k) {
      l(k), v();
    },
    get strokeColor() {
      return u();
    },
    set strokeColor(k) {
      u(k), v();
    },
    get strokeWidth() {
      return d();
    },
    set strokeWidth(k = 2) {
      d(k), v();
    },
    get selected() {
      return p();
    },
    set selected(k) {
      p(k), v();
    },
    get class() {
      return f();
    },
    set class(k) {
      f(k), v();
    }
  });
}
se(
  Fc,
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
function pm(e, t) {
  const n = Fv({
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
const Ti = (e) => e instanceof Function ? e : () => e;
var gm = /* @__PURE__ */ ge("<title> </title>"), hm = /* @__PURE__ */ ge('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), vm = /* @__PURE__ */ ee('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function Gc(e, t) {
  ue(t, !0);
  let n = m(t, "position", 7, "bottom-right"), r = m(t, "ariaLabel", 7), o = m(t, "nodeStrokeColor", 7, "transparent"), i = m(t, "nodeColor", 7), s = m(t, "nodeClass", 7, ""), a = m(t, "nodeBorderRadius", 7, 5), l = m(t, "nodeStrokeWidth", 7, 2), u = m(t, "bgColor", 7), d = m(t, "maskColor", 7), p = m(t, "maskStrokeColor", 7), f = m(t, "maskStrokeWidth", 7), g = m(t, "width", 7, 200), h = m(t, "height", 7, 150), y = m(t, "pannable", 7, !0), k = m(t, "zoomable", 7, !0), w = m(t, "inversePan", 7), L = m(t, "zoomStep", 7), x = m(t, "class", 7), $ = /* @__PURE__ */ ze(t, [
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
  ]), C = /* @__PURE__ */ S(At), M = /* @__PURE__ */ S(() => c(C).ariaLabelConfig);
  const O = i() === void 0 ? void 0 : Ti(i()), q = Ti(o()), J = Ti(s()), j = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let T = /* @__PURE__ */ S(() => `svelte-flow__minimap-desc-${c(C).flowId}`), _ = /* @__PURE__ */ S(() => ({
    x: -c(C).viewport.x / c(C).viewport.zoom,
    y: -c(C).viewport.y / c(C).viewport.zoom,
    width: c(C).width / c(C).viewport.zoom,
    height: c(C).height / c(C).viewport.zoom
  })), z = /* @__PURE__ */ S(() => c(C).nodeLookup.size > 0 ? ju(ao(c(C).nodeLookup, { filter: (W) => !W.hidden }), c(_)) : c(_)), b = /* @__PURE__ */ S(() => c(z).width / g()), E = /* @__PURE__ */ S(() => c(z).height / h()), P = /* @__PURE__ */ S(() => Math.max(c(b), c(E))), H = /* @__PURE__ */ S(() => c(P) * g()), Z = /* @__PURE__ */ S(() => c(P) * h()), D = /* @__PURE__ */ S(() => 5 * c(P)), B = /* @__PURE__ */ S(() => c(z).x - (c(H) - c(z).width) / 2 - c(D)), G = /* @__PURE__ */ S(() => c(z).y - (c(Z) - c(z).height) / 2 - c(D)), U = /* @__PURE__ */ S(() => c(H) + c(D) * 2), re = /* @__PURE__ */ S(() => c(Z) + c(D) * 2);
  const F = () => c(P);
  var R = vm(), Y = le(R);
  const Q = /* @__PURE__ */ S(() => ["svelte-flow__minimap", x()]);
  return ip(Y, () => ({ "--xy-minimap-background-color-props": u() })), co(Y.lastChild, He(
    {
      get position() {
        return n();
      },
      get class() {
        return c(Q);
      },
      "data-testid": "svelte-flow__minimap"
    },
    () => $,
    {
      children: (W, he) => {
        var fe = Le(), oe = le(fe);
        {
          var ne = (de) => {
            var te = hm();
            let ve;
            var ie = I(te);
            {
              var ke = (Te) => {
                var Me = gm(), Ue = I(Me, !0);
                A(Me), xe(() => {
                  we(Me, "id", c(T)), Ve(Ue, r() ?? c(M)["minimap.ariaLabel"]);
                }), N(Te, Me);
              };
              ae(ie, (Te) => {
                (r() ?? c(M)["minimap.ariaLabel"]) && Te(ke);
              });
            }
            var K = V(ie);
            at(K, 17, () => c(C).nodes, (Te) => Te.id, (Te, Me) => {
              var Ue = Le();
              const qe = /* @__PURE__ */ S(() => c(C).nodeLookup.get(c(Me).id));
              var Be = le(Ue);
              {
                var nn = (Oe) => {
                  const lt = /* @__PURE__ */ S(() => Hn(c(qe))), pe = /* @__PURE__ */ S(() => O?.(c(qe))), Ke = /* @__PURE__ */ S(() => q(c(qe))), ut = /* @__PURE__ */ S(() => J(c(qe)));
                  Fc(Oe, He(
                    {
                      get x() {
                        return c(qe).internals.positionAbsolute.x;
                      },
                      get y() {
                        return c(qe).internals.positionAbsolute.y;
                      }
                    },
                    () => c(lt),
                    {
                      get selected() {
                        return c(qe).selected;
                      },
                      get color() {
                        return c(pe);
                      },
                      get borderRadius() {
                        return a();
                      },
                      get strokeColor() {
                        return c(Ke);
                      },
                      get strokeWidth() {
                        return l();
                      },
                      get shapeRendering() {
                        return j;
                      },
                      get class() {
                        return c(ut);
                      }
                    }
                  ));
                };
                ae(Be, (Oe) => {
                  c(qe) && Yu(c(qe)) && Oe(nn);
                });
              }
              N(Te, Ue);
            });
            var Je = V(K);
            A(te), it(te, (Te, Me) => pm?.(Te, Me), () => ({
              store: c(C),
              panZoom: c(C).panZoom,
              getViewScale: F,
              translateExtent: c(C).translateExtent,
              width: c(C).width,
              height: c(C).height,
              inversePan: w(),
              zoomStep: L(),
              pannable: y(),
              zoomable: k()
            })), xe(
              (Te) => {
                we(te, "width", g()), we(te, "height", h()), we(te, "viewBox", `${c(B) ?? ""} ${c(G) ?? ""} ${c(U) ?? ""} ${c(re) ?? ""}`), we(te, "aria-labelledby", c(T)), ve = ft(te, "", ve, Te), we(Je, "d", `M${c(B) - c(D)},${c(G) - c(D)}h${c(U) + c(D) * 2}v${c(re) + c(D) * 2}h${-c(U) - c(D) * 2}z
      M${c(_).x ?? ""},${c(_).y ?? ""}h${c(_).width ?? ""}v${c(_).height ?? ""}h${-c(_).width}z`);
              },
              [
                () => ({
                  "--xy-minimap-mask-background-color-props": d(),
                  "--xy-minimap-mask-stroke-color-props": p(),
                  "--xy-minimap-mask-stroke-width-props": f() ? f() * c(P) : void 0
                })
              ]
            ), N(de, te);
          };
          ae(oe, (de) => {
            c(C).panZoom && de(ne);
          });
        }
        N(W, fe);
      },
      $$slots: { default: !0 }
    }
  )), A(Y), N(e, R), ce({
    get position() {
      return n();
    },
    set position(W = "bottom-right") {
      n(W), v();
    },
    get ariaLabel() {
      return r();
    },
    set ariaLabel(W) {
      r(W), v();
    },
    get nodeStrokeColor() {
      return o();
    },
    set nodeStrokeColor(W = "transparent") {
      o(W), v();
    },
    get nodeColor() {
      return i();
    },
    set nodeColor(W) {
      i(W), v();
    },
    get nodeClass() {
      return s();
    },
    set nodeClass(W = "") {
      s(W), v();
    },
    get nodeBorderRadius() {
      return a();
    },
    set nodeBorderRadius(W = 5) {
      a(W), v();
    },
    get nodeStrokeWidth() {
      return l();
    },
    set nodeStrokeWidth(W = 2) {
      l(W), v();
    },
    get bgColor() {
      return u();
    },
    set bgColor(W) {
      u(W), v();
    },
    get maskColor() {
      return d();
    },
    set maskColor(W) {
      d(W), v();
    },
    get maskStrokeColor() {
      return p();
    },
    set maskStrokeColor(W) {
      p(W), v();
    },
    get maskStrokeWidth() {
      return f();
    },
    set maskStrokeWidth(W) {
      f(W), v();
    },
    get width() {
      return g();
    },
    set width(W = 200) {
      g(W), v();
    },
    get height() {
      return h();
    },
    set height(W = 150) {
      h(W), v();
    },
    get pannable() {
      return y();
    },
    set pannable(W = !0) {
      y(W), v();
    },
    get zoomable() {
      return k();
    },
    set zoomable(W = !0) {
      k(W), v();
    },
    get inversePan() {
      return w();
    },
    set inversePan(W) {
      w(W), v();
    },
    get zoomStep() {
      return L();
    },
    set zoomStep(W) {
      L(W), v();
    },
    get class() {
      return x();
    },
    set class(W) {
      x(W), v();
    }
  });
}
se(
  Gc,
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
var mm = /* @__PURE__ */ ee("<div><!></div>");
function Jc(e, t) {
  ue(t, !0);
  let n = m(t, "nodeId", 7), r = m(t, "position", 23, () => ye.Top), o = m(t, "align", 7, "center"), i = m(t, "offset", 7, 10), s = m(t, "isVisible", 7), a = m(t, "children", 7), l = /* @__PURE__ */ ze(t, [
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
  const u = At(), { getNodesBounds: d } = rt(), p = Pn("svelteflow__node_id");
  let f = /* @__PURE__ */ S(() => (u.nodes, (Array.isArray(n()) ? n() : [n() ?? p]).reduce(
    ($, C) => {
      const M = u.nodeLookup.get(C);
      return M && $.push(M), $;
    },
    []
  ))), g = /* @__PURE__ */ S(() => {
    const $ = d(c(f));
    return $ ? Tv($, u.viewport, r(), i(), o()) : "";
  }), h = /* @__PURE__ */ S(() => c(f).length === 0 ? 1 : Math.max(...c(f).map(($) => ($.internals.z || 5) + 1))), y = /* @__PURE__ */ S(() => u.nodes.filter(($) => $.selected).length), k = /* @__PURE__ */ S(() => typeof s() == "boolean" ? s() : c(f).length === 1 && c(f)[0].selected && c(y) === 1);
  var w = Le(), L = le(w);
  {
    var x = ($) => {
      var C = mm();
      Ge(
        C,
        (O, q) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": O,
          ...l,
          [Kt]: q
        }),
        [
          () => c(f).reduce((O, q) => `${O}${q.id} `, "").trim(),
          () => ({
            display: fc().value ? "none" : void 0,
            position: "absolute",
            transform: c(g),
            "z-index": c(h)
          })
        ]
      );
      var M = I(C);
      je(M, () => a() ?? nt), A(C), it(C, (O, q) => dc?.(O, q), () => "root"), N($, C);
    };
    ae(L, ($) => {
      u.domNode && c(k) && c(f) && $(x);
    });
  }
  return N(e, w), ce({
    get nodeId() {
      return n();
    },
    set nodeId($) {
      n($), v();
    },
    get position() {
      return r();
    },
    set position($ = ye.Top) {
      r($), v();
    },
    get align() {
      return o();
    },
    set align($ = "center") {
      o($), v();
    },
    get offset() {
      return i();
    },
    set offset($ = 10) {
      i($), v();
    },
    get isVisible() {
      return s();
    },
    set isVisible($) {
      s($), v();
    },
    get children() {
      return a();
    },
    set children($) {
      a($), v();
    }
  });
}
se(
  Jc,
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
  const t = /* @__PURE__ */ S(At), n = /* @__PURE__ */ S(() => c(t).nodes), r = /* @__PURE__ */ S(() => c(t).nodeLookup);
  let o = [], i = !0;
  const s = /* @__PURE__ */ S(() => {
    c(n);
    const a = [], l = Array.isArray(e), u = l ? e : [e];
    for (const d of u) {
      const p = c(r).get(d)?.internals.userNode;
      p && a.push({ id: p.id, type: p.type, data: p.data });
    }
    return (!qv(a, o) || i) && (o = a, i = !1), l ? o : o[0] ?? null;
  });
  return {
    get current() {
      return c(s);
    }
  };
}
const sl = "tinyflow-component", ym = [
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
], wm = [
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
], Xs = [
  { label: "文字", value: "text" },
  { label: "图片", value: "image" },
  { label: "视频", value: "video" },
  { label: "音频", value: "audio" },
  { label: "文件", value: "file" },
  { label: "其他", value: "other" }
], bm = [
  { label: "当行输入框", value: "input" },
  { label: "多行输入框", value: "textarea" },
  { label: "下拉菜单", value: "select" },
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
], xm = [
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
];
class $m {
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
    const t = document.createElement(sl);
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
    const n = document.createElement(sl);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const km = () => {
  let e = /* @__PURE__ */ Ce([]), t = /* @__PURE__ */ Ce([]), n = /* @__PURE__ */ Ce({ x: 250, y: 100, zoom: 1 });
  return {
    // nodes: nodesInternal,
    // edges: edgesInternal,
    // viewport,
    init: (r, o) => {
      X(e, r), X(t, o);
    },
    getNodes: () => c(e),
    setNodes: (r) => {
      X(e, r);
    },
    getEdges: () => c(t),
    setEdges: (r) => {
      X(t, r);
    },
    getViewport: () => c(n),
    setViewport: (r) => {
      X(n, r);
    },
    getNode: (r) => c(e).find((o) => o.id === r),
    addNode: (r) => {
      X(e, [...c(e), r]);
    },
    removeNode: (r) => {
      X(e, c(e).filter((o) => o.id !== r));
    },
    updateNode: (r, o) => {
      X(e, c(e).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateNodes: (r) => {
      X(e, r(c(e)));
    },
    updateNodeData: (r, o) => {
      X(e, c(e).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    },
    selectNodeOnly: (r) => {
      X(e, c(e).map((o) => o.id === r ? { ...o, selected: !0 } : { ...o, selected: !1 }));
    },
    getEdge: (r) => c(t).find((o) => o.id === r),
    addEdge: (r) => {
      X(t, [...c(t), r]);
    },
    removeEdge: (r) => {
      X(t, c(t).filter((o) => o.id !== r));
    },
    updateEdge: (r, o) => {
      X(t, c(t).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateEdges: (r) => {
      X(t, r(c(t)));
    },
    updateEdgeData: (r, o) => {
      X(t, c(t).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    }
  };
}, Ze = km();
var Cm = /* @__PURE__ */ ee("<button><!></button>");
function Se(e, t) {
  ue(t, !0);
  const n = m(t, "children", 7), r = m(t, "primary", 7), o = /* @__PURE__ */ ze(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children",
    "primary"
  ]);
  var i = Cm();
  Ge(i, () => ({
    type: "button",
    ...o,
    class: `tf-btn ${r() ? "tf-btn-primary" : ""} nopan nodrag ${t.class ?? ""}`
  }));
  var s = I(i);
  return je(s, () => n() ?? nt), A(i), N(e, i), ce({
    get children() {
      return n();
    },
    set children(a) {
      n(a), v();
    },
    get primary() {
      return r();
    },
    set primary(a) {
      r(a), v();
    }
  });
}
se(Se, { children: {}, primary: {} }, [], [], !0);
var _m = /* @__PURE__ */ ee("<input/>");
function Uc(e, t) {
  ue(t, !0);
  const n = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = _m();
  Yt(r), Ge(r, () => ({
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), N(e, r), ce();
}
se(Uc, {}, [], [], !0);
var Sm = /* @__PURE__ */ ee('<div><input type="hidden"/> <!> <!></div>');
const Em = {
  hash: "svelte-1swt2gg",
  code: ".tf-chosen.svelte-1swt2gg {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function Qc(e, t) {
  ue(t, !0), Ne(e, Em);
  const n = m(t, "placeholder", 7), r = m(t, "label", 7), o = m(t, "value", 7), i = m(t, "buttonText", 7, "选择..."), s = m(t, "onChosen", 7), a = /* @__PURE__ */ ze(t, [
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
  var l = Sm();
  Ge(
    l,
    () => ({
      ...a,
      class: `tf-chosen nopan nodrag ${t.class ?? ""}`
    }),
    void 0,
    "svelte-1swt2gg"
  );
  var u = I(l);
  Yt(u);
  var d = V(u, 2);
  Xe(d, {
    get value() {
      return r();
    },
    get placeholder() {
      return n();
    },
    style: "flex-grow: 1;",
    disabled: !0
  });
  var p = V(d, 2);
  return Se(p, {
    onclick: (f) => {
      s()?.(o(), r(), f);
    },
    style: "padding: 3px",
    children: (f, g) => {
      me();
      var h = $e();
      xe(() => Ve(h, i())), N(f, h);
    },
    $$slots: { default: !0 }
  }), A(l), xe(() => _o(u, o())), N(e, l), ce({
    get placeholder() {
      return n();
    },
    set placeholder(f) {
      n(f), v();
    },
    get label() {
      return r();
    },
    set label(f) {
      r(f), v();
    },
    get value() {
      return o();
    },
    set value(f) {
      o(f), v();
    },
    get buttonText() {
      return i();
    },
    set buttonText(f = "选择...") {
      i(f), v();
    },
    get onChosen() {
      return s();
    },
    set onChosen(f) {
      s(f), v();
    }
  });
}
se(
  Qc,
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
var Pm = /* @__PURE__ */ ee("<input/>");
function Xe(e, t) {
  ue(t, !0);
  const n = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Pm();
  Yt(r), Ge(r, () => ({
    type: "text",
    spellcheck: "false",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), N(e, r), ce();
}
se(Xe, {}, [], [], !0);
var Lm = /* @__PURE__ */ ee("<textarea></textarea>");
function Ae(e, t) {
  ue(t, !0);
  const n = m(t, "value", 7), r = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "value"]);
  var o = Lm();
  return Kf(o), Ge(o, () => ({
    spellcheck: "false",
    ...r,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), N(e, o), ce({
    get value() {
      return n();
    },
    set value(i) {
      n(i), v();
    }
  });
}
se(Ae, { value: {} }, [], [], !0);
var Nm = /* @__PURE__ */ ee('<div role="button"><!></div>'), Tm = /* @__PURE__ */ ee("<div></div>");
function ed(e, t) {
  const n = xa(t, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = xa(n, ["items", "onChange", "activeIndex"]);
  ue(t, !1);
  let o = m(t, "items", 28, () => []), i = m(t, "onChange", 12, () => {
  }), s = m(t, "activeIndex", 12, 0);
  function a(u, d) {
    s(d), i()?.(u, d);
  }
  lu();
  var l = Tm();
  return Ge(l, () => ({
    ...r,
    class: `tf-tabs ${_s(r), et(() => r.class) ?? ""}`
  })), at(l, 5, o, pr, (u, d, p) => {
    var f = Nm();
    we(f, "tabindex", p), f.__click = () => a(c(d), p), f.__keydown = (k) => {
      (k.key === "Enter" || k.key === " ") && (k.preventDefault(), a(c(d), p));
    };
    var g = I(f);
    {
      var h = (k) => {
        var w = $e();
        xe(() => Ve(w, (c(d), et(() => c(d).label)))), N(k, w);
      }, y = (k) => {
        var w = Le(), L = le(w);
        je(L, () => (c(d), et(() => c(d).label) ?? nt)), N(k, w);
      };
      ae(g, (k) => {
        c(d), et(() => typeof c(d).label == "string") ? k(h) : k(y, !1);
      });
    }
    A(f), xe(() => yt(f, 1, `tf-tabs-item ${p === s() ? "active" : ""}`)), N(u, f);
  }), A(l), N(e, l), ce({
    get items() {
      return o();
    },
    set items(u) {
      o(u), v();
    },
    get onChange() {
      return i();
    },
    set onChange(u) {
      i(u), v();
    },
    get activeIndex() {
      return s();
    },
    set activeIndex(u) {
      s(u), v();
    }
  });
}
yn(["click", "keydown"]);
se(ed, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var Dm = (e, t, n) => t(c(n)), zm = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(c(n)));
}, Mm = /* @__PURE__ */ ee('<span class="tf-collapse-item-title-icon"><!></span>'), Om = /* @__PURE__ */ ee('<div class="tf-collapse-item-description"><!></div>'), Vm = /* @__PURE__ */ ee('<div class="tf-collapse-item-content"><!></div>'), Hm = /* @__PURE__ */ ee('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), Am = /* @__PURE__ */ ee("<div></div>");
const Im = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function td(e, t) {
  ue(t, !0), Ne(e, Im);
  let n = m(t, "items", 7), r = m(t, "onChange", 7), o = m(t, "activeKeys", 31, () => Nt([]));
  function i(a) {
    o().includes(a.key) ? o(o().filter((l) => l !== a.key)) : (o().push(a.key), o(o())), r()?.(a, o());
  }
  var s = Am();
  return at(s, 21, n, pr, (a, l, u) => {
    var d = Hm(), p = I(d);
    we(p, "tabindex", u), p.__click = [Dm, i, l], p.__keydown = [zm, i, l];
    var f = I(p);
    {
      var g = ($) => {
        var C = Mm(), M = I(C);
        Sn(M, {
          get target() {
            return c(l).icon;
          }
        }), A(C), N($, C);
      };
      ae(f, ($) => {
        c(l).icon && $(g);
      });
    }
    var h = V(f, 2);
    Sn(h, {
      get target() {
        return c(l).title;
      }
    });
    var y = V(h, 2);
    A(p);
    var k = V(p, 2);
    {
      var w = ($) => {
        var C = Om(), M = I(C);
        Sn(M, {
          get target() {
            return c(l).description;
          }
        }), A(C), N($, C);
      };
      ae(k, ($) => {
        c(l).description && $(w);
      });
    }
    var L = V(k, 2);
    {
      var x = ($) => {
        var C = Vm(), M = I(C);
        Sn(M, {
          get target() {
            return c(l).content;
          }
        }), A(C), N($, C);
      };
      ae(L, ($) => {
        o().includes(c(l).key) && $(x);
      });
    }
    A(d), xe(($) => yt(y, 1, `tf-collapse-item-title-arrow ${$ ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(c(l).key) ? "rotate-90" : ""
    ]), N(a, d);
  }), A(s), xe(() => {
    ft(s, t.style), yt(s, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), N(e, s), ce({
    get items() {
      return n();
    },
    set items(a) {
      n(a), v();
    },
    get onChange() {
      return r();
    },
    set onChange(a) {
      r(a), v();
    },
    get activeKeys() {
      return o();
    },
    set activeKeys(a = []) {
      o(a), v();
    }
  });
}
yn(["click", "keydown"]);
se(td, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Sn(e, t) {
  ue(t, !0);
  let n = m(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = Le(), o = le(r);
  {
    var i = (a) => {
      var l = Le(), u = le(l);
      je(u, () => n() ?? nt), N(a, l);
    }, s = (a) => {
      var l = Le(), u = le(l);
      Ps(u, n), N(a, l);
    };
    ae(o, (a) => {
      typeof n() == "function" ? a(i) : a(s, !1);
    });
  }
  return N(e, r), ce({
    get target() {
      return n();
    },
    set target(a) {
      n(a), v();
    }
  });
}
se(Sn, { target: {} }, [], [], !0);
var Zm = (e, t, n) => t(c(n)), qm = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), Bm = /* @__PURE__ */ ee('<div class="tf-select-content-children"><!></div>'), Km = /* @__PURE__ */ ee('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), Rm = /* @__PURE__ */ ee('<div class="tf-select-content nopan nodrag"><!></div>'), jm = /* @__PURE__ */ ee("<!> <!>", 1), Ym = /* @__PURE__ */ ee('<div class="tf-select-input-placeholder"> </div>'), Wm = /* @__PURE__ */ ee('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), Xm = /* @__PURE__ */ ee("<div><!></div>");
function tt(e, t) {
  ue(t, !0);
  const n = (w, L = nt) => {
    var x = Le(), $ = le(x);
    at($, 19, L, (C, M) => `${M}_${C.value}`, (C, M) => {
      var O = Km(), q = le(O);
      q.__click = [Zm, h, M];
      var J = I(q), j = I(J);
      {
        var T = (E) => {
          var P = qm();
          N(E, P);
        };
        ae(j, (E) => {
          c(M).children && c(M).children.length > 0 && E(T);
        });
      }
      A(J);
      var _ = V(J, 2);
      Sn(_, {
        get target() {
          return c(M).label;
        }
      }), A(q);
      var z = V(q, 2);
      {
        var b = (E) => {
          var P = Bm(), H = I(P);
          n(H, () => c(M).children), A(P), N(E, P);
        };
        ae(z, (E) => {
          c(M).children && c(M).children.length > 0 && (a() || u().includes(c(M).value)) && E(b);
        });
      }
      N(C, O);
    }), N(w, x);
  };
  let r = m(t, "items", 7), o = m(t, "onSelect", 7), i = m(t, "value", 23, () => []), s = m(t, "defaultValue", 23, () => []), a = m(t, "expandAll", 7, !0), l = m(t, "multiple", 7, !1), u = m(t, "expandValue", 23, () => []), d = m(t, "placeholder", 7), p = /* @__PURE__ */ ze(t, [
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
  ]), f = /* @__PURE__ */ S(() => {
    const w = [], L = (x) => {
      for (let $ of x)
        i().length > 0 ? i().includes($.value) && w.push($) : s().includes($.value) && w.push($), $.children && $.children.length > 0 && L($.children);
    };
    return L(r()), w;
  }), g;
  function h(w) {
    g?.hide(), o()?.(w);
  }
  var y = Xm();
  Ge(y, () => ({ ...p, class: `tf-select ${p.class ?? ""}` }));
  var k = I(y);
  return _t(
    tr(k, {
      floating: (w) => {
        var L = Rm(), x = I(L);
        n(x, r), A(L), N(w, L);
      },
      children: (w, L) => {
        var x = Wm();
        Ge(x, () => ({ class: "tf-select-input nopan nodrag", ...p }));
        var $ = I(x);
        at(
          $,
          23,
          () => c(f),
          (C, M) => `${M}_${C.value}`,
          (C, M, O) => {
            var q = Le(), J = le(q);
            {
              var j = (_) => {
                var z = Le(), b = le(z);
                {
                  var E = (P) => {
                    Sn(P, {
                      get target() {
                        return c(M).label;
                      }
                    });
                  };
                  ae(b, (P) => {
                    c(O) === 0 && P(E);
                  });
                }
                N(_, z);
              }, T = (_) => {
                var z = jm(), b = le(z);
                Sn(b, {
                  get target() {
                    return c(M).label;
                  }
                });
                var E = V(b, 2);
                {
                  var P = (H) => {
                    var Z = $e(",");
                    N(H, Z);
                  };
                  ae(E, (H) => {
                    c(O) < c(f).length - 1 && H(P);
                  });
                }
                N(_, z);
              };
              ae(J, (_) => {
                l() ? _(T, !1) : _(j);
              });
            }
            N(C, q);
          },
          (C) => {
            var M = Ym(), O = I(M, !0);
            A(M), xe(() => Ve(O, d())), N(C, M);
          }
        ), A($), me(2), A(x), N(w, x);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (w) => g = w,
    () => g
  ), A(y), N(e, y), ce({
    get items() {
      return r();
    },
    set items(w) {
      r(w), v();
    },
    get onSelect() {
      return o();
    },
    set onSelect(w) {
      o(w), v();
    },
    get value() {
      return i();
    },
    set value(w = []) {
      i(w), v();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue(w = []) {
      s(w), v();
    },
    get expandAll() {
      return a();
    },
    set expandAll(w = !0) {
      a(w), v();
    },
    get multiple() {
      return l();
    },
    set multiple(w = !1) {
      l(w), v();
    },
    get expandValue() {
      return u();
    },
    set expandValue(w = []) {
      u(w), v();
    },
    get placeholder() {
      return d();
    },
    set placeholder(w) {
      d(w), v();
    }
  });
}
yn(["click"]);
se(
  tt,
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
const Xr = Math.min, lr = Math.max, Go = Math.round, Ft = (e) => ({
  x: e,
  y: e
}), Fm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Gm = {
  start: "end",
  end: "start"
};
function ts(e, t, n) {
  return lr(e, Xr(t, n));
}
function fo(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Jn(e) {
  return e.split("-")[0];
}
function po(e) {
  return e.split("-")[1];
}
function nd(e) {
  return e === "x" ? "y" : "x";
}
function Fs(e) {
  return e === "y" ? "height" : "width";
}
const Jm = /* @__PURE__ */ new Set(["top", "bottom"]);
function En(e) {
  return Jm.has(Jn(e)) ? "y" : "x";
}
function Gs(e) {
  return nd(En(e));
}
function Um(e, t, n) {
  n === void 0 && (n = !1);
  const r = po(e), o = Gs(e), i = Fs(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Jo(s)), [s, Jo(s)];
}
function Qm(e) {
  const t = Jo(e);
  return [ns(e), t, ns(t)];
}
function ns(e) {
  return e.replace(/start|end/g, (t) => Gm[t]);
}
const al = ["left", "right"], ll = ["right", "left"], e2 = ["top", "bottom"], t2 = ["bottom", "top"];
function n2(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? ll : al : t ? al : ll;
    case "left":
    case "right":
      return t ? e2 : t2;
    default:
      return [];
  }
}
function r2(e, t, n, r) {
  const o = po(e);
  let i = n2(Jn(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(ns)))), i;
}
function Jo(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Fm[t]);
}
function o2(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function rd(e) {
  return typeof e != "number" ? o2(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Uo(e) {
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
  const i = En(t), s = Gs(t), a = Fs(s), l = Jn(t), u = i === "y", d = r.x + r.width / 2 - o.width / 2, p = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
  let g;
  switch (l) {
    case "top":
      g = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      g = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      g = {
        x: r.x + r.width,
        y: p
      };
      break;
    case "left":
      g = {
        x: r.x - o.width,
        y: p
      };
      break;
    default:
      g = {
        x: r.x,
        y: r.y
      };
  }
  switch (po(t)) {
    case "start":
      g[s] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      g[s] += f * (n && u ? -1 : 1);
      break;
  }
  return g;
}
const i2 = async (e, t, n) => {
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
    y: p
  } = ul(u, r, l), f = r, g = {}, h = 0;
  for (let y = 0; y < a.length; y++) {
    const {
      name: k,
      fn: w
    } = a[y], {
      x: L,
      y: x,
      data: $,
      reset: C
    } = await w({
      x: d,
      y: p,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: g,
      rects: u,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = L ?? d, p = x ?? p, g = {
      ...g,
      [k]: {
        ...g[k],
        ...$
      }
    }, C && h <= 50 && (h++, typeof C == "object" && (C.placement && (f = C.placement), C.rects && (u = C.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : C.rects), {
      x: d,
      y: p
    } = ul(u, f, l)), y = -1);
  }
  return {
    x: d,
    y: p,
    placement: f,
    strategy: o,
    middlewareData: g
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
    elementContext: p = "floating",
    altBoundary: f = !1,
    padding: g = 0
  } = fo(t, e), h = rd(g), y = a[f ? p === "floating" ? "reference" : "floating" : p], k = Uo(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(y))) == null || n ? y : y.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: l
  })), w = p === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, L = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), x = await (i.isElement == null ? void 0 : i.isElement(L)) ? await (i.getScale == null ? void 0 : i.getScale(L)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, $ = Uo(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: w,
    offsetParent: L,
    strategy: l
  }) : w);
  return {
    top: (k.top - $.top + h.top) / x.y,
    bottom: ($.bottom - k.bottom + h.bottom) / x.y,
    left: (k.left - $.left + h.left) / x.x,
    right: ($.right - k.right + h.right) / x.x
  };
}
const s2 = (e) => ({
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
    const p = rd(d), f = {
      x: n,
      y: r
    }, g = Gs(o), h = Fs(g), y = await s.getDimensions(u), k = g === "y", w = k ? "top" : "left", L = k ? "bottom" : "right", x = k ? "clientHeight" : "clientWidth", $ = i.reference[h] + i.reference[g] - f[g] - i.floating[h], C = f[g] - i.reference[g], M = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let O = M ? M[x] : 0;
    (!O || !await (s.isElement == null ? void 0 : s.isElement(M))) && (O = a.floating[x] || i.floating[h]);
    const q = $ / 2 - C / 2, J = O / 2 - y[h] / 2 - 1, j = Xr(p[w], J), T = Xr(p[L], J), _ = j, z = O - y[h] - T, b = O / 2 - y[h] / 2 + q, E = ts(_, b, z), P = !l.arrow && po(o) != null && b !== E && i.reference[h] / 2 - (b < _ ? j : T) - y[h] / 2 < 0, H = P ? b < _ ? b - _ : b - z : 0;
    return {
      [g]: f[g] + H,
      data: {
        [g]: E,
        centerOffset: b - E - H,
        ...P && {
          alignmentOffset: H
        }
      },
      reset: P
    };
  }
}), a2 = function(e) {
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
        crossAxis: p = !0,
        fallbackPlacements: f,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: y = !0,
        ...k
      } = fo(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const w = Jn(o), L = En(a), x = Jn(a) === a, $ = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), C = f || (x || !y ? [Jo(a)] : Qm(a)), M = h !== "none";
      !f && M && C.push(...r2(a, y, h, $));
      const O = [a, ...C], q = await od(t, k), J = [];
      let j = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && J.push(q[w]), p) {
        const b = Um(o, s, $);
        J.push(q[b[0]], q[b[1]]);
      }
      if (j = [...j, {
        placement: o,
        overflows: J
      }], !J.every((b) => b <= 0)) {
        var T, _;
        const b = (((T = i.flip) == null ? void 0 : T.index) || 0) + 1, E = O[b];
        if (E && (!(p === "alignment" && L !== En(E)) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        j.every((H) => H.overflows[0] > 0 && En(H.placement) === L)))
          return {
            data: {
              index: b,
              overflows: j
            },
            reset: {
              placement: E
            }
          };
        let P = (_ = j.filter((H) => H.overflows[0] <= 0).sort((H, Z) => H.overflows[1] - Z.overflows[1])[0]) == null ? void 0 : _.placement;
        if (!P)
          switch (g) {
            case "bestFit": {
              var z;
              const H = (z = j.filter((Z) => {
                if (M) {
                  const D = En(Z.placement);
                  return D === L || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  D === "y";
                }
                return !0;
              }).map((Z) => [Z.placement, Z.overflows.filter((D) => D > 0).reduce((D, B) => D + B, 0)]).sort((Z, D) => Z[1] - D[1])[0]) == null ? void 0 : z[0];
              H && (P = H);
              break;
            }
            case "initialPlacement":
              P = a;
              break;
          }
        if (o !== P)
          return {
            reset: {
              placement: P
            }
          };
      }
      return {};
    }
  };
}, l2 = /* @__PURE__ */ new Set(["left", "top"]);
async function u2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Jn(n), a = po(n), l = En(n) === "y", u = l2.has(s) ? -1 : 1, d = i && l ? -1 : 1, p = fo(t, e);
  let {
    mainAxis: f,
    crossAxis: g,
    alignmentAxis: h
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return a && typeof h == "number" && (g = a === "end" ? h * -1 : h), l ? {
    x: g * d,
    y: f * u
  } : {
    x: f * u,
    y: g * d
  };
}
const c2 = function(e) {
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
      } = t, l = await u2(t, e);
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
}, d2 = function(e) {
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
              y: L
            } = k;
            return {
              x: w,
              y: L
            };
          }
        },
        ...l
      } = fo(e, t), u = {
        x: n,
        y: r
      }, d = await od(t, l), p = En(Jn(o)), f = nd(p);
      let g = u[f], h = u[p];
      if (i) {
        const k = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", L = g + d[k], x = g - d[w];
        g = ts(L, g, x);
      }
      if (s) {
        const k = p === "y" ? "top" : "left", w = p === "y" ? "bottom" : "right", L = h + d[k], x = h - d[w];
        h = ts(L, h, x);
      }
      const y = a.fn({
        ...t,
        [f]: g,
        [p]: h
      });
      return {
        ...y,
        data: {
          x: y.x - n,
          y: y.y - r,
          enabled: {
            [f]: i,
            [p]: s
          }
        }
      };
    }
  };
};
function hi() {
  return typeof window < "u";
}
function Cr(e) {
  return id(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function $t(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function xn(e) {
  var t;
  return (t = (id(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function id(e) {
  return hi() ? e instanceof Node || e instanceof $t(e).Node : !1;
}
function Ot(e) {
  return hi() ? e instanceof Element || e instanceof $t(e).Element : !1;
}
function Qt(e) {
  return hi() ? e instanceof HTMLElement || e instanceof $t(e).HTMLElement : !1;
}
function cl(e) {
  return !hi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof $t(e).ShadowRoot;
}
const f2 = /* @__PURE__ */ new Set(["inline", "contents"]);
function go(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Vt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !f2.has(o);
}
const p2 = /* @__PURE__ */ new Set(["table", "td", "th"]);
function g2(e) {
  return p2.has(Cr(e));
}
const h2 = [":popover-open", ":modal"];
function vi(e) {
  return h2.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const v2 = ["transform", "translate", "scale", "rotate", "perspective"], m2 = ["transform", "translate", "scale", "rotate", "perspective", "filter"], y2 = ["paint", "layout", "strict", "content"];
function Js(e) {
  const t = Us(), n = Ot(e) ? Vt(e) : e;
  return v2.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || m2.some((r) => (n.willChange || "").includes(r)) || y2.some((r) => (n.contain || "").includes(r));
}
function w2(e) {
  let t = zn(e);
  for (; Qt(t) && !br(t); ) {
    if (Js(t))
      return t;
    if (vi(t))
      return null;
    t = zn(t);
  }
  return null;
}
function Us() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const b2 = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function br(e) {
  return b2.has(Cr(e));
}
function Vt(e) {
  return $t(e).getComputedStyle(e);
}
function mi(e) {
  return Ot(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function zn(e) {
  if (Cr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    cl(e) && e.host || // Fallback.
    xn(e)
  );
  return cl(t) ? t.host : t;
}
function sd(e) {
  const t = zn(e);
  return br(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Qt(t) && go(t) ? t : sd(t);
}
function ad(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = sd(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = $t(o);
  return i ? (rs(s), t.concat(s, s.visualViewport || [], go(o) ? o : [], [])) : t.concat(o, ad(o, []));
}
function rs(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ld(e) {
  const t = Vt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Qt(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = Go(n) !== i || Go(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function ud(e) {
  return Ot(e) ? e : e.contextElement;
}
function ur(e) {
  const t = ud(e);
  if (!Qt(t))
    return Ft(1);
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
const x2 = /* @__PURE__ */ Ft(0);
function cd(e) {
  const t = $t(e);
  return !Us() || !t.visualViewport ? x2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function $2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== $t(e) ? !1 : t;
}
function Fr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = ud(e);
  let s = Ft(1);
  t && (r ? Ot(r) && (s = ur(r)) : s = ur(e));
  const a = $2(i, n, r) ? cd(i) : Ft(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, d = o.width / s.x, p = o.height / s.y;
  if (i) {
    const f = $t(i), g = r && Ot(r) ? $t(r) : r;
    let h = f, y = rs(h);
    for (; y && r && g !== h; ) {
      const k = ur(y), w = y.getBoundingClientRect(), L = Vt(y), x = w.left + (y.clientLeft + parseFloat(L.paddingLeft)) * k.x, $ = w.top + (y.clientTop + parseFloat(L.paddingTop)) * k.y;
      l *= k.x, u *= k.y, d *= k.x, p *= k.y, l += x, u += $, h = $t(y), y = rs(h);
    }
  }
  return Uo({
    width: d,
    height: p,
    x: l,
    y: u
  });
}
function Qs(e, t) {
  const n = mi(e).scrollLeft;
  return t ? t.left + n : Fr(xn(e)).left + n;
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
function k2(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = xn(r), a = t ? vi(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Ft(1);
  const d = Ft(0), p = Qt(r);
  if ((p || !p && !i) && ((Cr(r) !== "body" || go(s)) && (l = mi(r)), Qt(r))) {
    const g = Fr(r);
    u = ur(r), d.x = g.x + r.clientLeft, d.y = g.y + r.clientTop;
  }
  const f = s && !p && !i ? dd(s, l, !0) : Ft(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y + f.y
  };
}
function C2(e) {
  return Array.from(e.getClientRects());
}
function _2(e) {
  const t = xn(e), n = mi(e), r = e.ownerDocument.body, o = lr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = lr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Qs(e);
  const a = -n.scrollTop;
  return Vt(r).direction === "rtl" && (s += lr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function S2(e, t) {
  const n = $t(e), r = xn(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const u = Us();
    (!u || u && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const E2 = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function P2(e, t) {
  const n = Fr(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Qt(e) ? ur(e) : Ft(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function dl(e, t, n) {
  let r;
  if (t === "viewport")
    r = S2(e, n);
  else if (t === "document")
    r = _2(xn(e));
  else if (Ot(t))
    r = P2(t, n);
  else {
    const o = cd(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Uo(r);
}
function fd(e, t) {
  const n = zn(e);
  return n === t || !Ot(n) || br(n) ? !1 : Vt(n).position === "fixed" || fd(n, t);
}
function L2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = ad(e, []).filter((a) => Ot(a) && Cr(a) !== "body"), o = null;
  const i = Vt(e).position === "fixed";
  let s = i ? zn(e) : e;
  for (; Ot(s) && !br(s); ) {
    const a = Vt(s), l = Js(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && o && E2.has(o.position) || go(s) && !l && fd(e, s)) ? r = r.filter((u) => u !== s) : o = a, s = zn(s);
  }
  return t.set(e, r), r;
}
function N2(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? vi(t) ? [] : L2(t, this._c) : [].concat(n), r], s = i[0], a = i.reduce((l, u) => {
    const d = dl(t, u, o);
    return l.top = lr(d.top, l.top), l.right = Xr(d.right, l.right), l.bottom = Xr(d.bottom, l.bottom), l.left = lr(d.left, l.left), l;
  }, dl(t, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function T2(e) {
  const {
    width: t,
    height: n
  } = ld(e);
  return {
    width: t,
    height: n
  };
}
function D2(e, t, n) {
  const r = Qt(t), o = xn(t), i = n === "fixed", s = Fr(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Ft(0);
  function u() {
    l.x = Qs(o);
  }
  if (r || !r && !i)
    if ((Cr(t) !== "body" || go(o)) && (a = mi(t)), r) {
      const g = Fr(t, !0, i, t);
      l.x = g.x + t.clientLeft, l.y = g.y + t.clientTop;
    } else o && u();
  i && !r && o && u();
  const d = o && !r && !i ? dd(o, a) : Ft(0), p = s.left + a.scrollLeft - l.x - d.x, f = s.top + a.scrollTop - l.y - d.y;
  return {
    x: p,
    y: f,
    width: s.width,
    height: s.height
  };
}
function Di(e) {
  return Vt(e).position === "static";
}
function fl(e, t) {
  if (!Qt(e) || Vt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return xn(e) === n && (n = n.ownerDocument.body), n;
}
function pd(e, t) {
  const n = $t(e);
  if (vi(e))
    return n;
  if (!Qt(e)) {
    let o = zn(e);
    for (; o && !br(o); ) {
      if (Ot(o) && !Di(o))
        return o;
      o = zn(o);
    }
    return n;
  }
  let r = fl(e, t);
  for (; r && g2(r) && Di(r); )
    r = fl(r, t);
  return r && br(r) && Di(r) && !Js(r) ? n : r || w2(e) || n;
}
const z2 = async function(e) {
  const t = this.getOffsetParent || pd, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: D2(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function M2(e) {
  return Vt(e).direction === "rtl";
}
const O2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: k2,
  getDocumentElement: xn,
  getClippingRect: N2,
  getOffsetParent: pd,
  getElementRects: z2,
  getClientRects: C2,
  getDimensions: T2,
  getScale: ur,
  isElement: Ot,
  isRTL: M2
}, V2 = c2, H2 = d2, A2 = a2, I2 = s2, Z2 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: O2,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return i2(e, t, {
    ...o,
    platform: i
  });
}, q2 = ({
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
  function p() {
    Z2(e, u, {
      placement: r,
      middleware: [
        V2(o),
        // 手动偏移配置
        A2(i),
        //自动翻转
        H2(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [I2({ element: d })] : []
      ]
    }).then(({ x: w, y: L, placement: x, middlewareData: $ }) => {
      if (Object.assign(u.style, {
        left: `${w}px`,
        top: `${L}px`
      }), l) {
        const { x: C, y: M } = $.arrow, O = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[x.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: C != null ? `${C}px` : "",
          top: M != null ? `${M}px` : "",
          right: "",
          bottom: "",
          [O]: "2px"
        });
      }
    });
  }
  let f = !1;
  function g() {
    u.style.display = "block", u.style.visibility = "block", u.style.position = "absolute", l && (d.style.display = "block"), f = !0, p();
  }
  function h() {
    u.style.display = "none", l && (d.style.display = "none"), f = !1;
  }
  function y(w) {
    w.stopPropagation(), f ? h() : g();
  }
  function k(w) {
    u.contains(w.target) || h();
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
      h();
    },
    isVisible() {
      return f;
    }
  };
};
var B2 = /* @__PURE__ */ ee('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function tr(e, t) {
  ue(t, !0);
  const n = m(t, "children", 7), r = m(t, "floating", 7), o = m(t, "placement", 7, "bottom");
  let i, s, a;
  Vn(() => (a = q2({
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
  var u = B2(), d = I(u), p = I(d);
  je(p, n), A(d), _t(d, (h) => i = h, () => i);
  var f = V(d, 2), g = I(f);
  return je(g, r), A(f), _t(f, (h) => s = h, () => s), A(u), N(e, u), ce({
    hide: l,
    get children() {
      return n();
    },
    set children(h) {
      n(h), v();
    },
    get floating() {
      return r();
    },
    set floating(h) {
      r(h), v();
    },
    get placement() {
      return o();
    },
    set placement(h = "bottom") {
      o(h), v();
    }
  });
}
se(tr, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Ee(e, t) {
  ue(t, !0);
  const n = m(t, "children", 7), r = m(t, "level", 7, 1), o = m(t, "mt", 7), i = m(t, "mb", 7);
  var s = Le(), a = le(s);
  return up(a, () => `h${r()}`, !1, (l, u) => {
    Ge(l, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var d = Le(), p = le(d);
    je(p, () => n() ?? nt), N(u, d);
  }), N(e, s), ce({
    get children() {
      return n();
    },
    set children(l) {
      n(l), v();
    },
    get level() {
      return r();
    },
    set level(l = 1) {
      r(l), v();
    },
    get mt() {
      return o();
    },
    set mt(l) {
      o(l), v();
    },
    get mb() {
      return i();
    },
    set mb(l) {
      i(l), v();
    }
  });
}
se(Ee, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var K2 = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const R2 = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function ho(e, t) {
  ue(t, !0), Ne(e, R2);
  const n = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Se(e, He(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = K2();
      N(r, i);
    },
    $$slots: { default: !0 }
  })), ce();
}
se(ho, {}, [], [], !0);
const j2 = () => ({ deleteNode: (e) => {
  Ze.removeNode(e), Ze.updateEdges((t) => t.filter((n) => n.source !== e && n.target !== e));
} }), Un = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, Y2 = () => ({ copyNode: (e) => {
  const t = Ze.getNode(e);
  if (t) {
    const n = Un(), r = {
      ...t,
      id: n,
      position: { x: t.position.x + 50, y: t.position.y + 50 }
    };
    Ze.updateNodes((o) => [...o.map((i) => ({ ...i, selected: !1 })), r]);
  }
} }), Ye = () => Pn("svelteflow__node_id"), Mn = () => Pn("tinyflow_options");
var W2 = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), X2 = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), F2 = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), G2 = /* @__PURE__ */ ee('<div class="input-item svelte-1jesvb7">执行条件： <!></div>'), J2 = (e, t, n) => {
  const r = e.target.checked;
  t(n, { async: r });
}, U2 = (e, t, n) => {
  const r = e.target.checked;
  t(n, { loopEnable: r });
}, Q2 = /* @__PURE__ */ ee('<div class="input-item svelte-1jesvb7">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-1jesvb7">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-1jesvb7">退出条件： <!></div>', 1), ey = /* @__PURE__ */ ee('<div class="settings svelte-1jesvb7"><div class="input-item svelte-1jesvb7">节点名称： <!></div> <div class="input-item svelte-1jesvb7">参数描述： <!></div> <!> <label class="input-item-inline svelte-1jesvb7"><span>异步执行：</span> <input type="checkbox"/></label> <label class="input-item-inline svelte-1jesvb7"><span>循环执行：</span> <input type="checkbox"/></label> <!></div>'), ty = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), ny = /* @__PURE__ */ ee('<div class="tf-node-toolbar svelte-1jesvb7"><!> <!> <!> <!></div>'), ry = /* @__PURE__ */ ee('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const oy = {
  hash: "svelte-1jesvb7",
  code: ".tf-node-toolbar.svelte-1jesvb7 {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-1jesvb7 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-1jesvb7 .input-item:where(.svelte-1jesvb7) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-1jesvb7 .input-item-inline:where(.svelte-1jesvb7) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function Tt(e, t) {
  ue(t, !0), Ne(e, oy);
  const n = m(t, "data", 7), r = m(t, "id", 7, ""), o = m(t, "icon", 7), i = m(t, "handle", 7), s = m(t, "children", 7), a = m(t, "allowExecute", 7, !0), l = m(t, "allowCopy", 7, !0), u = m(t, "allowDelete", 7, !0), d = m(t, "allowSetting", 7, !0), p = m(t, "allowSettingOfCondition", 7, !0), f = m(t, "showSourceHandle", 7, !0), g = m(t, "showTargetHandle", 7, !0), h = m(t, "onCollapse", 7);
  let y = n().expand ? ["key"] : [];
  const { updateNodeData: k, getNode: w } = rt(), L = /* @__PURE__ */ S(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: x } = j2(), { copyNode: $ } = Y2(), C = Mn(), M = () => {
    C.onNodeExecute?.(w(r()));
  };
  let O = Ye();
  var q = ry(), J = le(q);
  {
    var j = (D) => {
      Jc(D, {
        get position() {
          return ye.Top;
        },
        align: "start",
        children: (B, G) => {
          var U = ny(), re = I(U);
          {
            var F = (oe) => {
              Se(oe, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  x(r());
                },
                children: (ne, de) => {
                  var te = W2();
                  N(ne, te);
                },
                $$slots: { default: !0 }
              });
            };
            ae(re, (oe) => {
              u() && oe(F);
            });
          }
          var R = V(re, 2);
          {
            var Y = (oe) => {
              Se(oe, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  $(r());
                },
                children: (ne, de) => {
                  var te = X2();
                  N(ne, te);
                },
                $$slots: { default: !0 }
              });
            };
            ae(R, (oe) => {
              l() && oe(Y);
            });
          }
          var Q = V(R, 2);
          {
            var W = (oe) => {
              Se(oe, {
                class: "tf-node-toolbar-item",
                onclick: M,
                children: (ne, de) => {
                  var te = F2();
                  N(ne, te);
                },
                $$slots: { default: !0 }
              });
            };
            ae(Q, (oe) => {
              a() && oe(W);
            });
          }
          var he = V(Q, 2);
          {
            var fe = (oe) => {
              tr(oe, {
                placement: "bottom",
                floating: (ne) => {
                  var de = ey(), te = I(de), ve = V(I(te));
                  Xe(ve, {
                    style: "width: 100%;",
                    onchange: (Oe) => {
                      const lt = Oe.target.value;
                      k(O, { title: lt });
                    },
                    get value() {
                      return n().title;
                    }
                  }), A(te);
                  var ie = V(te, 2), ke = V(I(ie));
                  Ae(ke, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (Oe) => {
                      const lt = Oe.target.value;
                      k(O, { description: lt });
                    },
                    get value() {
                      return n().description;
                    }
                  }), A(ie);
                  var K = V(ie, 2);
                  {
                    var Je = (Oe) => {
                      var lt = G2(), pe = V(I(lt));
                      Ae(pe, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Ke) => {
                          const ut = Ke.target.value;
                          k(O, { condition: ut });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), A(lt), N(Oe, lt);
                    };
                    ae(K, (Oe) => {
                      p() && Oe(Je);
                    });
                  }
                  var Te = V(K, 2), Me = V(I(Te), 2);
                  Yt(Me), Me.__change = [J2, k, O], A(Te);
                  var Ue = V(Te, 2), qe = V(I(Ue), 2);
                  Yt(qe), qe.__change = [U2, k, O], A(Ue);
                  var Be = V(Ue, 2);
                  {
                    var nn = (Oe) => {
                      var lt = Q2(), pe = le(lt), Ke = V(I(pe));
                      const ut = /* @__PURE__ */ S(() => n().loopIntervalMs || "1000");
                      Ae(Ke, {
                        rows: 1,
                        style: "width: 100%;",
                        onchange: (An) => {
                          const In = An.target.value;
                          k(O, { loopIntervalMs: In });
                        },
                        get value() {
                          return c(ut);
                        }
                      }), A(pe);
                      var We = V(pe, 2), Et = V(I(We));
                      const Qe = /* @__PURE__ */ S(() => n().maxLoopCount || "0");
                      Ae(Et, {
                        rows: 1,
                        style: "width: 100%;",
                        onchange: (An) => {
                          const In = An.target.value;
                          k(O, { maxLoopCount: In });
                        },
                        get value() {
                          return c(Qe);
                        }
                      }), A(We);
                      var Zt = V(We, 2), yi = V(I(Zt));
                      Ae(yi, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (An) => {
                          const In = An.target.value;
                          k(O, { loopBreakCondition: In });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), A(Zt), N(Oe, lt);
                    };
                    ae(Be, (Oe) => {
                      n().loopEnable && Oe(nn);
                    });
                  }
                  A(de), xe(() => {
                    Ki(Me, !!n().async), Ki(qe, !!n().loopEnable);
                  }), N(ne, de);
                },
                children: (ne, de) => {
                  Se(ne, {
                    class: "tf-node-toolbar-item",
                    children: (te, ve) => {
                      var ie = ty();
                      N(te, ie);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            ae(he, (oe) => {
              d() && oe(fe);
            });
          }
          A(U), N(B, U);
        },
        $$slots: { default: !0 }
      });
    };
    ae(J, (D) => {
      (a() || l() || u()) && D(j);
    });
  }
  var T = V(J, 2), _ = V(I(T), 2), z = I(_);
  td(z, {
    get items() {
      return c(L);
    },
    get activeKeys() {
      return y;
    },
    onChange: (D, B) => {
      k(r(), { expand: B?.includes("key") }), h()?.(B?.includes("key") ? "key" : "");
    }
  }), A(_), A(T);
  var b = V(T, 2);
  {
    var E = (D) => {
      Dn(D, {
        type: "target",
        get position() {
          return ye.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    ae(b, (D) => {
      g() && D(E);
    });
  }
  var P = V(b, 2);
  {
    var H = (D) => {
      Dn(D, {
        type: "source",
        get position() {
          return ye.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    ae(P, (D) => {
      f() && D(H);
    });
  }
  var Z = V(P, 2);
  return je(Z, () => i() ?? nt), N(e, q), ce({
    get data() {
      return n();
    },
    set data(D) {
      n(D), v();
    },
    get id() {
      return r();
    },
    set id(D = "") {
      r(D), v();
    },
    get icon() {
      return o();
    },
    set icon(D) {
      o(D), v();
    },
    get handle() {
      return i();
    },
    set handle(D) {
      i(D), v();
    },
    get children() {
      return s();
    },
    set children(D) {
      s(D), v();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(D = !0) {
      a(D), v();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(D = !0) {
      l(D), v();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(D = !0) {
      u(D), v();
    },
    get allowSetting() {
      return d();
    },
    set allowSetting(D = !0) {
      d(D), v();
    },
    get allowSettingOfCondition() {
      return p();
    },
    set allowSettingOfCondition(D = !0) {
      p(D), v();
    },
    get showSourceHandle() {
      return f();
    },
    set showSourceHandle(D = !0) {
      f(D), v();
    },
    get showTargetHandle() {
      return g();
    },
    set showTargetHandle(D = !0) {
      g(D), v();
    },
    get onCollapse() {
      return h();
    },
    set onCollapse(D) {
      h(D), v();
    }
  });
}
yn(["change"]);
se(
  Tt,
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
var iy = /* @__PURE__ */ ee('<div class="input-more-item svelte-2f9bnc">数据选项： <!></div>'), sy = /* @__PURE__ */ ee('<div class="input-more-setting svelte-2f9bnc"><div class="input-more-item svelte-2f9bnc">数据内容： <!></div> <div class="input-more-item svelte-2f9bnc">输入方式： <!></div> <!> <div class="input-more-item svelte-2f9bnc">数据标题： <!></div> <div class="input-more-item svelte-2f9bnc">数据描述： <!></div> <div class="input-more-item svelte-2f9bnc">占位符： <!></div> <div class="input-more-item svelte-2f9bnc"><!></div></div>'), ay = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), ly = /* @__PURE__ */ ee('<div class="input-item svelte-2f9bnc"><!></div> <div class="input-item svelte-2f9bnc"><!></div> <div class="input-item svelte-2f9bnc"><!></div>', 1);
const uy = {
  hash: "svelte-2f9bnc",
  code: ".input-item.svelte-2f9bnc {display:flex;align-items:center;}.input-more-setting.svelte-2f9bnc {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-2f9bnc .input-more-item:where(.svelte-2f9bnc) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function gd(e, t) {
  ue(t, !0), Ne(e, uy);
  const n = m(t, "parameter", 7), r = m(t, "index", 7);
  let o = Ye(), i = bn(o), s = /* @__PURE__ */ S(() => ({ ...n(), ...i?.current?.data?.parameters[r()] }));
  const { updateNodeData: a } = rt(), l = (O, q) => {
    a(o, (J) => {
      let j = J.data.parameters;
      return j[r()][O] = q, { parameters: j };
    });
  }, u = (O, q) => {
    const J = q.target.value;
    l(O, J);
  }, d = (O) => {
    const q = O.target.value;
    l("name", q);
  }, p = (O) => {
    const q = O.target.checked;
    l("required", q);
  }, f = (O) => {
    const q = O.value;
    l("formType", q);
  }, g = (O) => {
    const q = O.value;
    l("contentType", q);
  };
  let h;
  const y = () => {
    a(o, (O) => {
      let q = O.data.parameters;
      return q.splice(r(), 1), { parameters: [...q] };
    }), h?.hide();
  };
  var k = ly(), w = le(k), L = I(w);
  Xe(L, {
    style: "width: 100%;",
    get value() {
      return c(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), A(w);
  var x = V(w, 2), $ = I(x);
  Uc($, {
    get checked() {
      return c(s).required;
    },
    onchange: p
  }), A(x);
  var C = V(x, 2), M = I(C);
  return _t(
    tr(M, {
      placement: "bottom",
      floating: (O) => {
        var q = sy(), J = I(q), j = V(I(J));
        const T = /* @__PURE__ */ S(() => c(s).contentType ? [c(s).contentType] : []);
        tt(j, {
          get items() {
            return Xs;
          },
          style: "width: 100%",
          defaultValue: ["text"],
          get value() {
            return c(T);
          },
          onSelect: g
        }), A(J);
        var _ = V(J, 2), z = V(I(_));
        const b = /* @__PURE__ */ S(() => c(s).formType ? [c(s).formType] : []);
        tt(z, {
          get items() {
            return bm;
          },
          style: "width: 100%",
          defaultValue: ["input"],
          get value() {
            return c(b);
          },
          onSelect: f
        }), A(_);
        var E = V(_, 2);
        {
          var P = (R) => {
            var Y = iy(), Q = V(I(Y));
            const W = /* @__PURE__ */ S(() => c(s).enums?.join(`
`));
            Ae(Q, {
              rows: 3,
              style: "width: 100%;",
              onchange: (he) => {
                l("enums", he.target?.value.trim().split(`
`));
              },
              get value() {
                return c(W);
              },
              placeholder: "一行一个选项"
            }), A(Y), N(R, Y);
          };
          ae(E, (R) => {
            (c(s).formType === "radio" || c(s).formType === "checkbox" || c(s).formType === "select") && R(P);
          });
        }
        var H = V(E, 2), Z = V(I(H));
        Ae(Z, {
          rows: 1,
          style: "width: 100%;",
          onchange: (R) => {
            u("formLabel", R);
          },
          get value() {
            return c(s).formLabel;
          }
        }), A(H);
        var D = V(H, 2), B = V(I(D));
        Ae(B, {
          rows: 2,
          style: "width: 100%;",
          onchange: (R) => {
            u("formDescription", R);
          },
          get value() {
            return c(s).formDescription;
          }
        }), A(D);
        var G = V(D, 2), U = V(I(G));
        Ae(U, {
          rows: 2,
          style: "width: 100%;",
          onchange: (R) => {
            u("formPlaceholder", R);
          },
          get value() {
            return c(s).formPlaceholder;
          }
        }), A(G);
        var re = V(G, 2), F = I(re);
        Se(F, {
          onclick: y,
          children: (R, Y) => {
            me();
            var Q = $e("删除");
            N(R, Q);
          },
          $$slots: { default: !0 }
        }), A(re), A(q), N(O, q);
      },
      children: (O, q) => {
        Se(O, {
          class: "input-btn-more",
          children: (J, j) => {
            var T = ay();
            N(J, T);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (O) => h = O,
    () => h
  ), A(C), N(e, k), ce({
    get parameter() {
      return n();
    },
    set parameter(O) {
      n(O), v();
    },
    get index() {
      return r();
    },
    set index(O) {
      r(O), v();
    }
  });
}
se(gd, { parameter: {}, index: {} }, [], [], !0);
var cy = /* @__PURE__ */ ee('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), dy = /* @__PURE__ */ ee('<div class="none-params svelte-3n0wca">无输入参数</div>'), fy = /* @__PURE__ */ ee('<div class="input-container svelte-3n0wca"><!> <!></div>');
const py = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function hd(e, t) {
  ue(t, !0), Ne(e, py);
  let n = Ye(), r = bn(n), o = /* @__PURE__ */ S(() => [...r?.current?.data?.parameters || []]);
  var i = fy(), s = I(i);
  {
    var a = (u) => {
      var d = cy();
      me(4), N(u, d);
    };
    ae(s, (u) => {
      c(o).length !== 0 && u(a);
    });
  }
  var l = V(s, 2);
  at(
    l,
    19,
    () => c(o),
    (u) => u.id,
    (u, d, p) => {
      gd(u, {
        get parameter() {
          return c(d);
        },
        get index() {
          return c(p);
        }
      });
    },
    (u) => {
      var d = dy();
      N(u, d);
    }
  ), A(i), N(e, i), ce();
}
se(hd, {}, [], [], !0);
const Gr = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = Un()), Gr(t.children);
}), e), It = () => {
  const { updateNodeData: e } = rt();
  return {
    addParameter: (t, n = "parameters", r) => {
      Array.isArray(r) ? r.forEach((s) => Gr(s?.children)) : Gr(r?.children);
      function o(s) {
        return {
          name: "",
          dataType: "String",
          refType: "ref",
          ...s,
          id: Un()
        };
      }
      const i = [];
      Array.isArray(r) ? i.push(...r.map(o)) : i.push(o(r)), e(t, (s) => {
        let a = s.data[n];
        return a ? a.push(...i) : a = [...i], { [n]: [...a] };
      });
    }
  };
};
var gy = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), hy = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), vy = /* @__PURE__ */ ee('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const my = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function vd(e, t) {
  ue(t, !0), Ne(e, my);
  const n = m(t, "data", 7), r = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ye(), { addParameter: i } = It();
  return Tt(e, He(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (s) => {
      var a = gy();
      N(s, a);
    },
    children: (s, a) => {
      var l = vy(), u = le(l), d = I(u);
      Ee(d, {
        level: 3,
        children: (g, h) => {
          me();
          var y = $e("输入参数");
          N(g, y);
        },
        $$slots: { default: !0 }
      });
      var p = V(d, 2);
      Se(p, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input" });
        },
        children: (g, h) => {
          var y = hy();
          N(g, y);
        },
        $$slots: { default: !0 }
      }), A(u);
      var f = V(u, 2);
      hd(f, {}), N(s, l);
    },
    $$slots: { icon: !0, default: !0 }
  })), ce({
    get data() {
      return n();
    },
    set data(s) {
      n(s), v();
    }
  });
}
se(vd, { data: {} }, [], [], !0);
const md = (e, t, n) => {
  for (const r of n)
    r.target === t && r.source && (e.push(r.source), md(e, r.source, n));
}, yd = (e, t, n) => !e || e.length === 0 ? [] : e.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: t + "." + r.name,
  children: yd(r.children, t + "." + r.name, n)
})), pl = (e, t, n) => {
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
          children: yd(r, e.id, t)
        };
    }
  }
}, wd = (e = !1) => {
  const t = Ye(), n = bn(t), r = /* @__PURE__ */ S(At), o = /* @__PURE__ */ S(() => c(r).nodes), i = /* @__PURE__ */ S(() => c(r).edges), s = /* @__PURE__ */ S(() => c(r).nodeLookup);
  let a = /* @__PURE__ */ S(() => {
    const l = [];
    if (!n.current)
      return [];
    const u = c(s).get(t);
    if (e)
      for (const d of c(o)) {
        const p = d.parentId === n.current.id;
        if (p) {
          const f = pl(d, p, u);
          f && l.push(f);
        }
      }
    else {
      const d = [];
      md(d, t, c(i));
      for (const p of c(o))
        if (d.includes(p.id)) {
          const f = p.parentId === n.current.id, g = pl(p, f, u);
          g && l.push(g);
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
var yy = /* @__PURE__ */ ee('<div class="input-more-item svelte-laou7w">数据内容： <!></div>'), wy = /* @__PURE__ */ ee('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <!> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), by = /* @__PURE__ */ ee('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const xy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function bd(e, t) {
  ue(t, !0), Ne(e, xy), Vn(() => {
    c(u).refType || h({ value: "ref" });
  });
  const n = m(t, "parameter", 7), r = m(t, "index", 7), o = m(t, "dataKeyName", 7), i = m(t, "useChildrenOnly", 7), s = m(t, "showContentType", 7, !1);
  let a = Ye(), l = bn(a), u = /* @__PURE__ */ S(() => ({
    ...n(),
    ...l?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: d } = rt(), p = (z, b) => {
    d(a, (E) => {
      let P = E.data?.[o()];
      return P[r()] = { ...P[r()], [z]: b }, { [o()]: P };
    });
  }, f = (z, b) => {
    const E = b.target.value;
    p(z, E);
  }, g = (z) => {
    const b = z.value;
    p("ref", b);
  }, h = (z) => {
    const b = z.value;
    p("refType", b);
  }, y = (z) => {
    const b = z.value;
    p("contentType", b);
  };
  let k;
  const w = () => {
    d(a, (z) => {
      let b = z.data?.[o()];
      return b.splice(r(), 1), { [o()]: [...b] };
    }), k?.hide();
  };
  let L = wd(i());
  var x = by(), $ = le(x), C = I($);
  const M = /* @__PURE__ */ S(() => c(u).nameDisabled === !0);
  Xe(C, {
    style: "width: 100%;",
    get value() {
      return c(u).name;
    },
    placeholder: "请输入参数名称",
    get disabled() {
      return c(M);
    },
    oninput: (z) => f("name", z)
  }), A($);
  var O = V($, 2), q = I(O);
  {
    var J = (z) => {
      Xe(z, {
        get value() {
          return c(u).value;
        },
        placeholder: "请输入参数值",
        oninput: (b) => f("value", b)
      });
    }, j = (z, b) => {
      {
        var E = (P) => {
          const H = /* @__PURE__ */ S(() => [c(u).ref]);
          tt(P, {
            get items() {
              return L.current;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return c(H);
            },
            expandAll: !0,
            onSelect: g
          });
        };
        ae(
          z,
          (P) => {
            c(u).refType !== "input" && P(E);
          },
          b
        );
      }
    };
    ae(q, (z) => {
      c(u).refType === "fixed" ? z(J) : z(j, !1);
    });
  }
  A(O);
  var T = V(O, 2), _ = I(T);
  return _t(
    tr(_, {
      placement: "bottom",
      floating: (z) => {
        var b = wy(), E = I(b), P = V(I(E));
        const H = /* @__PURE__ */ S(() => c(u).refType ? [c(u).refType] : []);
        tt(P, {
          get items() {
            return wm;
          },
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return c(H);
          },
          onSelect: h
        }), A(E);
        var Z = V(E, 2);
        {
          var D = (Y) => {
            var Q = yy(), W = V(I(Q));
            const he = /* @__PURE__ */ S(() => c(u).contentType ? [c(u).contentType] : []);
            tt(W, {
              get items() {
                return Xs;
              },
              style: "width: 100%",
              defaultValue: ["text"],
              get value() {
                return c(he);
              },
              onSelect: y
            }), A(Q), N(Y, Q);
          };
          ae(Z, (Y) => {
            s() && Y(D);
          });
        }
        var B = V(Z, 2), G = V(I(B));
        Ae(G, {
          rows: 1,
          style: "width: 100%;",
          onchange: (Y) => {
            f("defaultValue", Y);
          },
          get value() {
            return c(u).defaultValue;
          }
        }), A(B);
        var U = V(B, 2), re = V(I(U));
        Ae(re, {
          rows: 3,
          style: "width: 100%;",
          onchange: (Y) => {
            f("description", Y);
          },
          get value() {
            return c(u).description;
          }
        }), A(U);
        var F = V(U, 2), R = I(F);
        Se(R, {
          onclick: w,
          children: (Y, Q) => {
            me();
            var W = $e("删除");
            N(Y, W);
          },
          $$slots: { default: !0 }
        }), A(F), A(b), N(z, b);
      },
      children: (z, b) => {
        ho(z, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (z) => k = z,
    () => k
  ), A(T), N(e, x), ce({
    get parameter() {
      return n();
    },
    set parameter(z) {
      n(z), v();
    },
    get index() {
      return r();
    },
    set index(z) {
      r(z), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(z) {
      o(z), v();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(z) {
      i(z), v();
    },
    get showContentType() {
      return s();
    },
    set showContentType(z = !1) {
      s(z), v();
    }
  });
}
se(
  bd,
  {
    parameter: {},
    index: {},
    dataKeyName: {},
    useChildrenOnly: {},
    showContentType: {}
  },
  [],
  [],
  !0
);
var $y = /* @__PURE__ */ ee('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), ky = /* @__PURE__ */ ee('<div class="none-params svelte-1sm1mgi"> </div>'), Cy = /* @__PURE__ */ ee('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const _y = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function ht(e, t) {
  ue(t, !0), Ne(e, _y);
  const n = m(t, "noneParameterText", 7, "无输入参数"), r = m(t, "dataKeyName", 7, "parameters"), o = m(t, "useChildrenOnly", 7), i = m(t, "showContentType", 7, !1);
  let s = Ye(), a = bn(s), l = /* @__PURE__ */ S(() => [...a?.current?.data?.[r()] || []]);
  var u = Cy(), d = I(u);
  {
    var p = (g) => {
      var h = $y();
      me(4), N(g, h);
    };
    ae(d, (g) => {
      c(l).length !== 0 && g(p);
    });
  }
  var f = V(d, 2);
  return at(
    f,
    19,
    () => c(l),
    (g) => g.id,
    (g, h, y) => {
      bd(g, {
        get parameter() {
          return c(h);
        },
        get index() {
          return c(y);
        },
        get dataKeyName() {
          return r();
        },
        get useChildrenOnly() {
          return o();
        },
        get showContentType() {
          return i();
        }
      });
    },
    (g) => {
      var h = ky(), y = I(h, !0);
      A(h), xe(() => Ve(y, n())), N(g, h);
    }
  ), A(u), N(e, u), ce({
    get noneParameterText() {
      return n();
    },
    set noneParameterText(g = "无输入参数") {
      n(g), v();
    },
    get dataKeyName() {
      return r();
    },
    set dataKeyName(g = "parameters") {
      r(g), v();
    },
    get useChildrenOnly() {
      return o();
    },
    set useChildrenOnly(g) {
      o(g), v();
    },
    get showContentType() {
      return i();
    },
    set showContentType(g = !1) {
      i(g), v();
    }
  });
}
se(
  ht,
  {
    noneParameterText: {},
    dataKeyName: {},
    useChildrenOnly: {},
    showContentType: {}
  },
  [],
  [],
  !0
);
var Sy = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), Ey = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Py = /* @__PURE__ */ ee('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const Ly = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function xd(e, t) {
  ue(t, !0), Ne(e, Ly);
  const n = m(t, "data", 7), r = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ye(), { addParameter: i } = It();
  return Tt(e, He(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      allowExecute: !1,
      showSourceHandle: !1,
      icon: (s) => {
        var a = Sy();
        N(s, a);
      },
      children: (s, a) => {
        var l = Py(), u = le(l), d = I(u);
        Ee(d, {
          level: 3,
          children: (g, h) => {
            me();
            var y = $e("输出参数");
            N(g, y);
          },
          $$slots: { default: !0 }
        });
        var p = V(d, 2);
        Se(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (g, h) => {
            var y = Ey();
            N(g, y);
          },
          $$slots: { default: !0 }
        }), A(u);
        var f = V(u, 2);
        ht(f, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          showContentType: !0
        }), N(s, l);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(s) {
      n(s), v();
    }
  });
}
se(xd, { data: {} }, [], [], !0);
const zi = (e) => JSON.parse(JSON.stringify(e));
var Ny = /* @__PURE__ */ ge('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Ty = /* @__PURE__ */ ee('<div class="input-more-item svelte-1cfeest"><!></div>'), Dy = /* @__PURE__ */ ee('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), zy = /* @__PURE__ */ ee('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const My = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function $d(e, t) {
  ue(t, !0), Ne(e, My);
  const n = m(t, "parameter", 7), r = m(t, "position", 7), o = m(t, "dataKeyName", 7), i = m(t, "placeholder", 7, "请输入参数值");
  let s = Ye(), a = bn(s), l = /* @__PURE__ */ S(() => {
    let b = a?.current?.data?.[o()], E;
    if (b && r().length > 0) {
      let P = b;
      for (let H = 0; H < r().length; H++) {
        const Z = r()[H];
        H == r().length - 1 ? E = P[Z] : P = P[Z].children;
      }
    }
    return { ...n(), ...E };
  });
  const { updateNodeData: u } = rt(), d = (b, E) => {
    u(s, (P) => {
      const H = P.data?.[o()];
      if (H && r().length > 0) {
        let Z = H;
        for (let D = 0; D < r().length; D++) {
          const B = r()[D];
          D == r().length - 1 ? Z[B] = { ...Z[B], [b]: E } : Z = Z[B].children;
        }
      }
      return { [o()]: [...zi(H)] };
    });
  }, p = (b, E) => {
    const P = E.target.value;
    d(b, P);
  }, f = (b) => {
    const E = b.value;
    d("dataType", E);
  };
  let g;
  const h = () => {
    u(s, (b) => {
      let E = b.data?.[o()];
      if (E && r().length > 0) {
        let P = E;
        for (let H = 0; H < r().length; H++) {
          const Z = r()[H];
          H == r().length - 1 ? P.splice(Z, 1) : P = P[Z].children;
        }
      }
      return { [o()]: [...zi(E)] };
    }), g?.hide();
  }, y = () => {
    u(s, (b) => {
      let E = b.data?.[o()];
      if (E && r().length > 0) {
        let P = E;
        for (let H = 0; H < r().length; H++) {
          const Z = r()[H];
          H == r().length - 1 ? P[Z].children ? P[Z].children.push({ id: Un(), name: "newParam", dataType: "String" }) : P[Z].children = [{ id: Un(), name: "newParam", dataType: "String" }] : P = P[Z].children;
        }
      }
      return { [o()]: [...zi(E)] };
    });
  };
  var k = zy(), w = le(k), L = I(w);
  {
    var x = (b) => {
      var E = Le(), P = le(E);
      at(P, 17, r, pr, (H, Z) => {
        me();
        var D = $e(" ");
        N(H, D);
      }), N(b, E);
    };
    ae(L, (b) => {
      r().length > 1 && b(x);
    });
  }
  var $ = V(L, 2);
  const C = /* @__PURE__ */ S(() => c(l).nameDisabled === !0);
  Xe($, {
    style: "width: 100%;",
    get value() {
      return c(l).name;
    },
    get placeholder() {
      return i();
    },
    oninput: (b) => {
      p("name", b);
    },
    get disabled() {
      return c(C);
    }
  }), A(w);
  var M = V(w, 2), O = I(M);
  const q = /* @__PURE__ */ S(() => c(l).dataType ? [c(l).dataType] : []), J = /* @__PURE__ */ S(() => c(l).dataTypeDisabled === !0);
  tt(O, {
    get items() {
      return ym;
    },
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return c(q);
    },
    get disabled() {
      return c(J);
    },
    onSelect: f
  });
  var j = V(O, 2);
  {
    var T = (b) => {
      Se(b, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: y,
        children: (E, P) => {
          var H = Ny();
          N(E, H);
        },
        $$slots: { default: !0 }
      });
    };
    ae(j, (b) => {
      (c(l).dataType === "Object" || c(l).dataType === "Array") && c(l).addChildDisabled !== !0 && b(T);
    });
  }
  A(M);
  var _ = V(M, 2), z = I(_);
  return _t(
    tr(z, {
      placement: "bottom",
      floating: (b) => {
        var E = Dy(), P = I(E), H = V(I(P));
        const Z = /* @__PURE__ */ S(() => c(l).defaultValue || "");
        Ae(H, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return c(Z);
          },
          onchange: (F) => {
            p("defaultValue", F);
          }
        }), A(P);
        var D = V(P, 2), B = V(I(D));
        const G = /* @__PURE__ */ S(() => c(l).description || "");
        Ae(B, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return c(G);
          },
          onchange: (F) => {
            p("description", F);
          }
        }), A(D);
        var U = V(D, 2);
        {
          var re = (F) => {
            var R = Ty(), Y = I(R);
            Se(Y, {
              onclick: h,
              children: (Q, W) => {
                me();
                var he = $e("删除");
                N(Q, he);
              },
              $$slots: { default: !0 }
            }), A(R), N(F, R);
          };
          ae(U, (F) => {
            c(l).deleteDisabled !== !0 && F(re);
          });
        }
        A(E), N(b, E);
      },
      children: (b, E) => {
        ho(b, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (b) => g = b,
    () => g
  ), A(_), N(e, k), ce({
    get parameter() {
      return n();
    },
    set parameter(b) {
      n(b), v();
    },
    get position() {
      return r();
    },
    set position(b) {
      r(b), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(b) {
      o(b), v();
    },
    get placeholder() {
      return i();
    },
    set placeholder(b = "请输入参数值") {
      i(b), v();
    }
  });
}
se(
  $d,
  {
    parameter: {},
    position: {},
    dataKeyName: {},
    placeholder: {}
  },
  [],
  [],
  !0
);
var Oy = /* @__PURE__ */ ee("<!> <!>", 1), Vy = /* @__PURE__ */ ee('<div class="none-params svelte-1sm1mgi"> </div>'), Hy = /* @__PURE__ */ ee('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Ay = /* @__PURE__ */ ee('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Iy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function $n(e, t) {
  ue(t, !0), Ne(e, Iy);
  const n = (g, h = nt, y = nt) => {
    var k = Le(), w = le(k);
    at(
      w,
      19,
      h,
      (L) => `${L.id}_${L.children ? L.children.length : 0}`,
      (L, x, $) => {
        var C = Oy(), M = le(C);
        const O = /* @__PURE__ */ S(() => [...y(), c($)]);
        $d(M, {
          get parameter() {
            return c(x);
          },
          get position() {
            return c(O);
          },
          get dataKeyName() {
            return o();
          },
          get placeholder() {
            return i();
          }
        });
        var q = V(M, 2);
        {
          var J = (j) => {
            var T = /* @__PURE__ */ ws(() => [...y(), c($)]);
            n(j, () => c(x).children, () => c(T));
          };
          ae(q, (j) => {
            c(x).children && j(J);
          });
        }
        N(L, C);
      },
      (L) => {
        var x = Le(), $ = le(x);
        {
          var C = (M) => {
            var O = Vy(), q = I(O, !0);
            A(O), xe(() => Ve(q, r())), N(M, O);
          };
          ae($, (M) => {
            y().length === 0 && M(C);
          });
        }
        N(L, x);
      }
    ), N(g, k);
  }, r = m(t, "noneParameterText", 7, "无输出参数"), o = m(t, "dataKeyName", 7, "outputDefs"), i = m(t, "placeholder", 7, "请输入参数名称");
  let s = Ye(), a = bn(s), l = /* @__PURE__ */ S(() => [...a?.current?.data?.[o()] || []]);
  var u = Ay(), d = I(u);
  {
    var p = (g) => {
      var h = Hy();
      me(4), N(g, h);
    };
    ae(d, (g) => {
      c(l).length !== 0 && g(p);
    });
  }
  var f = V(d, 2);
  return n(f, () => c(l) || [], () => []), A(u), N(e, u), ce({
    get noneParameterText() {
      return r();
    },
    set noneParameterText(g = "无输出参数") {
      r(g), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(g = "outputDefs") {
      o(g), v();
    },
    get placeholder() {
      return i();
    },
    set placeholder(g = "请输入参数名称") {
      i(g), v();
    }
  });
}
se($n, { noneParameterText: {}, dataKeyName: {}, placeholder: {} }, [], [], !0);
var Zy = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), qy = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), By = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), Ky = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), Ry = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), jy = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Yy = /* @__PURE__ */ ee('<div class="heading svelte-q0cqsa"><!> <!></div> <!> <!> <div class="setting-title svelte-q0cqsa">模型</div> <div class="setting-item svelte-q0cqsa"><!> <!></div> <div class="setting-title svelte-q0cqsa">采样参数</div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="100" step="1"/></div></div> <div class="setting-title svelte-q0cqsa">系统提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="setting-title svelte-q0cqsa">用户提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="heading svelte-q0cqsa"><!> <!> <!></div> <!>', 1);
const Wy = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function kd(e, t) {
  ue(t, !0), Ne(e, Wy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ye(), { addParameter: i } = It(), s = Mn();
  let a = /* @__PURE__ */ Ce(Nt([]));
  Vn(async () => {
    const d = await s.provider?.llm?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = rt(), u = (d) => {
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
  return Re(() => {
    n().outType || u("text");
  }), Tt(e, He(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var p = Zy();
        N(d, p);
      },
      children: (d, p) => {
        var f = Yy(), g = le(f), h = I(g);
        Ee(h, {
          level: 3,
          children: (te, ve) => {
            me();
            var ie = $e("输入参数");
            N(te, ie);
          },
          $$slots: { default: !0 }
        });
        var y = V(h, 2);
        Se(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (te, ve) => {
            var ie = qy();
            N(te, ie);
          },
          $$slots: { default: !0 }
        }), A(g);
        var k = V(g, 2);
        ht(k, {});
        var w = V(k, 2);
        Ee(w, {
          level: 3,
          mt: "10px",
          children: (te, ve) => {
            me();
            var ie = $e("模型设置");
            N(te, ie);
          },
          $$slots: { default: !0 }
        });
        var L = V(w, 4), x = I(L);
        const $ = /* @__PURE__ */ S(() => n().llmId ? [n().llmId] : []);
        tt(x, {
          get items() {
            return c(a);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (te) => {
            const ve = te.value;
            l(o, () => ({ llmId: ve }));
          },
          get value() {
            return c($);
          }
        });
        var C = V(x, 2);
        ho(C, {}), A(L);
        var M = V(L, 4), O = I(M), q = I(O), J = I(q);
        A(q);
        var j = V(q, 2);
        Yt(j), j.__input = [By, l, o], A(O), A(M);
        var T = V(M, 2), _ = I(T), z = I(_), b = I(z);
        A(z);
        var E = V(z, 2);
        Yt(E), E.__input = [Ky, l, o], A(_), A(T);
        var P = V(T, 2), H = I(P), Z = I(H), D = I(Z);
        A(Z);
        var B = V(Z, 2);
        Yt(B), B.__input = [Ry, l, o], A(H), A(P);
        var G = V(P, 4), U = I(G);
        const re = /* @__PURE__ */ S(() => n().systemPrompt || "");
        Ae(U, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return c(re);
          },
          oninput: (te) => {
            l(o, { systemPrompt: te.target.value });
          }
        }), A(G);
        var F = V(G, 4), R = I(F);
        const Y = /* @__PURE__ */ S(() => n().userPrompt || "");
        Ae(R, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return c(Y);
          },
          oninput: (te) => {
            l(o, { userPrompt: te.target.value });
          }
        }), A(F);
        var Q = V(F, 2), W = I(Q);
        Ee(W, {
          level: 3,
          children: (te, ve) => {
            me();
            var ie = $e("输出参数");
            N(te, ie);
          },
          $$slots: { default: !0 }
        });
        var he = V(W, 2);
        const fe = /* @__PURE__ */ S(() => n().outType ? [n().outType] : []);
        tt(he, {
          items: [
            { label: "文本", value: "text" },
            { label: "JSON", value: "json" }
          ],
          style: "width: 100px;margin-left: auto",
          defaultValue: "text",
          onSelect: (te) => {
            u(te.value);
          },
          get value() {
            return c(fe);
          }
        });
        var oe = V(he, 2);
        {
          var ne = (te) => {
            Se(te, {
              class: "input-btn-more",
              style: "margin-left: 10px",
              onclick: () => {
                i(o, "outputDefs");
              },
              children: (ve, ie) => {
                var ke = jy();
                N(ve, ke);
              },
              $$slots: { default: !0 }
            });
          };
          ae(oe, (te) => {
            n().outType === "json" && te(ne);
          });
        }
        A(Q);
        var de = V(Q, 2);
        $n(de, {}), xe(() => {
          Ve(J, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), _o(j, n().temperature ?? 0.5), Ve(b, `Top P: ${n().topP ?? 0.9 ?? ""}`), _o(E, n().topP ?? 0.9), Ve(D, `Top K: ${n().topK ?? 50 ?? ""}`), _o(B, n().topK ?? 50);
        }), N(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(d) {
      n(d), v();
    }
  });
}
yn(["input"]);
se(kd, { data: {} }, [], [], !0);
var Xy = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Fy = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Gy = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Jy = /* @__PURE__ */ ee('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const Uy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Cd(e, t) {
  ue(t, !0), Ne(e, Uy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Vn(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = Ye(), { addParameter: i } = It(), { updateNodeData: s } = rt(), a = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  return Tt(e, He(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Xy();
        N(l, u);
      },
      children: (l, u) => {
        var d = Jy(), p = le(d), f = I(p);
        Ee(f, {
          level: 3,
          children: (j, T) => {
            me();
            var _ = $e("输入参数");
            N(j, _);
          },
          $$slots: { default: !0 }
        });
        var g = V(f, 2);
        Se(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (j, T) => {
            var _ = Fy();
            N(j, _);
          },
          $$slots: { default: !0 }
        }), A(p);
        var h = V(p, 2);
        ht(h, {});
        var y = V(h, 2);
        Ee(y, {
          level: 3,
          mt: "10px",
          children: (j, T) => {
            me();
            var _ = $e("代码");
            N(j, _);
          },
          $$slots: { default: !0 }
        });
        var k = V(y, 4), w = I(k);
        const L = /* @__PURE__ */ S(() => n().engine ? [n().engine] : ["qlexpress"]);
        tt(w, {
          get items() {
            return a;
          },
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (j) => {
            const T = j.value;
            s(o, () => ({ engine: T }));
          },
          get value() {
            return c(L);
          }
        }), A(k);
        var x = V(k, 4), $ = I(x);
        const C = /* @__PURE__ */ S(() => n().code || "");
        Ae($, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (j) => {
            s(o, () => ({ code: j.target.value }));
          },
          get value() {
            return c(C);
          }
        }), A(x);
        var M = V(x, 2), O = I(M);
        Ee(O, {
          level: 3,
          mt: "10px",
          children: (j, T) => {
            me();
            var _ = $e("输出参数");
            N(j, _);
          },
          $$slots: { default: !0 }
        });
        var q = V(O, 2);
        Se(q, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (j, T) => {
            var _ = Gy();
            N(j, _);
          },
          $$slots: { default: !0 }
        }), A(M);
        var J = V(M, 2);
        $n(J, {}), N(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(l) {
      n(l), v();
    }
  });
}
se(Cd, { data: {} }, [], [], !0);
var Qy = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), ew = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), tw = /* @__PURE__ */ ee('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const nw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function _d(e, t) {
  ue(t, !0), Ne(e, nw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ye(), { addParameter: i } = It(), { updateNodeData: s } = rt();
  return Re(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), Tt(e, He(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var l = Qy();
        N(a, l);
      },
      children: (a, l) => {
        var u = tw(), d = le(u), p = I(d);
        Ee(p, {
          level: 3,
          children: (C, M) => {
            me();
            var O = $e("输入参数");
            N(C, O);
          },
          $$slots: { default: !0 }
        });
        var f = V(p, 2);
        Se(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (C, M) => {
            var O = ew();
            N(C, O);
          },
          $$slots: { default: !0 }
        }), A(d);
        var g = V(d, 2);
        ht(g, {});
        var h = V(g, 2);
        Ee(h, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (C, M) => {
            me();
            var O = $e("模板内容");
            N(C, O);
          },
          $$slots: { default: !0 }
        });
        var y = V(h, 2), k = I(y);
        const w = /* @__PURE__ */ S(() => n().template || "");
        Ae(k, {
          rows: 10,
          placeholder: "请输入模板内容",
          style: "width: 100%",
          onchange: (C) => {
            s(o, () => ({ template: C.target.value }));
          },
          get value() {
            return c(w);
          }
        }), A(y);
        var L = V(y, 2), x = I(L);
        Ee(x, {
          level: 3,
          mt: "10px",
          children: (C, M) => {
            me();
            var O = $e("输出参数");
            N(C, O);
          },
          $$slots: { default: !0 }
        }), A(L);
        var $ = V(L, 2);
        $n($, {}), N(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(a) {
      n(a), v();
    }
  });
}
se(_d, { data: {} }, [], [], !0);
var rw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), ow = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), iw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), sw = /* @__PURE__ */ ee('<!> <div class="radio-group svelte-1dxz5e"><label class="svelte-1dxz5e"><!>none</label> <label class="svelte-1dxz5e"><!>form-data</label> <label class="svelte-1dxz5e"><!>x-www-form-urlencoded</label> <label class="svelte-1dxz5e"><!>json</label> <label class="svelte-1dxz5e"><!>raw</label></div>', 1), aw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), lw = /* @__PURE__ */ ee('<div class="heading svelte-1dxz5e" style="padding-top: 10px"><!> <!></div> <!>', 1), uw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), cw = /* @__PURE__ */ ee('<div class="heading svelte-1dxz5e" style="padding-top: 10px"><!> <!></div> <!>', 1), dw = /* @__PURE__ */ ee('<div style="width: 100%"><!></div>'), fw = /* @__PURE__ */ ee('<div style="width: 100%"><!></div>'), pw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), gw = /* @__PURE__ */ ee('<div class="heading svelte-1dxz5e"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1dxz5e"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class="heading svelte-1dxz5e"><!> <!></div> <!>', 1);
const hw = {
  hash: "svelte-1dxz5e",
  code: ".heading.svelte-1dxz5e {display:flex;margin-bottom:10px;}.radio-group.svelte-1dxz5e {display:flex;margin:10px 0;flex-wrap:wrap;}.radio-group.svelte-1dxz5e label:where(.svelte-1dxz5e) {display:flex;font-size:14px;box-sizing:border-box;}"
};
function Sd(e, t) {
  ue(t, !0), Ne(e, hw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Vn(() => {
    n().method || a(i, () => ({ method: "get" })), n().outputDefs || s(i, "outputDefs", [
      {
        name: "headers",
        nameDisabled: !0,
        dataType: "Object",
        dataTypeDisabled: !0,
        deleteDisabled: !0
      },
      {
        name: "body",
        nameDisabled: !0,
        dataType: "String",
        deleteDisabled: !0
      },
      {
        name: "statusCode",
        nameDisabled: !0,
        dataType: "Number",
        dataTypeDisabled: !0,
        deleteDisabled: !0
      }
    ]);
  });
  const o = [
    { value: "get", label: "GET" },
    { value: "post", label: "POST" },
    { value: "put", label: "PUT" },
    { value: "delete", label: "DELETE" },
    { value: "head", label: "HEAD" },
    { value: "patch", label: "PATCH" }
  ], i = Ye(), { addParameter: s } = It(), { updateNodeData: a } = rt();
  return Tt(e, He(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = rw();
        N(l, u);
      },
      children: (l, u) => {
        var d = gw(), p = le(d), f = I(p);
        Ee(f, {
          level: 3,
          children: (R, Y) => {
            me();
            var Q = $e("输入参数");
            N(R, Q);
          },
          $$slots: { default: !0 }
        });
        var g = V(f, 2);
        Se(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (R, Y) => {
            var Q = ow();
            N(R, Q);
          },
          $$slots: { default: !0 }
        }), A(p);
        var h = V(p, 2);
        ht(h, {});
        var y = V(h, 2);
        Ee(y, {
          level: 3,
          mt: "10px",
          children: (R, Y) => {
            me();
            var Q = $e("URL 地址");
            N(R, Q);
          },
          $$slots: { default: !0 }
        });
        var k = V(y, 2), w = I(k), L = I(w);
        const x = /* @__PURE__ */ S(() => n().method ? [n().method] : ["get"]);
        tt(L, {
          get items() {
            return o;
          },
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (R) => {
            const Y = R.value;
            a(i, () => ({ method: Y }));
          },
          get value() {
            return c(x);
          }
        }), A(w);
        var $ = V(w, 2), C = I($);
        const M = /* @__PURE__ */ S(() => n().url || "");
        Xe(C, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (R) => {
            a(i, () => ({ url: R.target.value }));
          },
          get value() {
            return c(M);
          }
        }), A($), A(k);
        var O = V(k, 2), q = I(O);
        Ee(q, {
          level: 3,
          children: (R, Y) => {
            me();
            var Q = $e("Http 头信息");
            N(R, Q);
          },
          $$slots: { default: !0 }
        });
        var J = V(q, 2);
        Se(J, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (R, Y) => {
            var Q = iw();
            N(R, Q);
          },
          $$slots: { default: !0 }
        }), A(O);
        var j = V(O, 2);
        ht(j, { dataKeyName: "headers" });
        var T = V(j, 2);
        {
          var _ = (R) => {
            var Y = sw(), Q = le(Y);
            Ee(Q, {
              level: 3,
              mt: "10px",
              children: (Be, nn) => {
                me();
                var Oe = $e("Body");
                N(Be, Oe);
              },
              $$slots: { default: !0 }
            });
            var W = V(Q, 2), he = I(W), fe = I(he);
            const oe = /* @__PURE__ */ S(() => !n().bodyType || n().bodyType === "");
            Xe(fe, {
              type: "radio",
              name: "bodyType",
              value: "",
              get checked() {
                return c(oe);
              },
              onchange: (Be) => {
                Be.target?.checked && a(i, { bodyType: "" });
              }
            }), me(), A(he);
            var ne = V(he, 2), de = I(ne);
            const te = /* @__PURE__ */ S(() => n().bodyType === "form-data");
            Xe(de, {
              type: "radio",
              name: "bodyType",
              value: "form-data",
              get checked() {
                return c(te);
              },
              onchange: (Be) => {
                Be.target?.checked && a(i, { bodyType: "form-data" });
              }
            }), me(), A(ne);
            var ve = V(ne, 2), ie = I(ve);
            const ke = /* @__PURE__ */ S(() => n().bodyType === "x-www-form-urlencoded");
            Xe(ie, {
              type: "radio",
              name: "bodyType",
              value: "x-www-form-urlencoded",
              get checked() {
                return c(ke);
              },
              onchange: (Be) => {
                Be.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
              }
            }), me(), A(ve);
            var K = V(ve, 2), Je = I(K);
            const Te = /* @__PURE__ */ S(() => n().bodyType === "json");
            Xe(Je, {
              type: "radio",
              name: "bodyType",
              value: "json",
              get checked() {
                return c(Te);
              },
              onchange: (Be) => {
                Be.target?.checked && a(i, { bodyType: "json" });
              }
            }), me(), A(K);
            var Me = V(K, 2), Ue = I(Me);
            const qe = /* @__PURE__ */ S(() => n().bodyType === "raw");
            Xe(Ue, {
              type: "radio",
              name: "bodyType",
              value: "raw",
              get checked() {
                return c(qe);
              },
              onchange: (Be) => {
                Be.target?.checked && a(i, { bodyType: "raw" });
              }
            }), me(), A(Me), A(W), N(R, Y);
          };
          ae(T, (R) => {
            (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && R(_);
          });
        }
        var z = V(T, 2);
        {
          var b = (R) => {
            var Y = lw(), Q = le(Y), W = I(Q);
            Ee(W, {
              level: 3,
              children: (oe, ne) => {
                me();
                var de = $e("参数");
                N(oe, de);
              },
              $$slots: { default: !0 }
            });
            var he = V(W, 2);
            Se(he, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (oe, ne) => {
                var de = aw();
                N(oe, de);
              },
              $$slots: { default: !0 }
            }), A(Q);
            var fe = V(Q, 2);
            ht(fe, { dataKeyName: "formData" }), N(R, Y);
          };
          ae(z, (R) => {
            n().bodyType === "form-data" && R(b);
          });
        }
        var E = V(z, 2);
        {
          var P = (R) => {
            var Y = cw(), Q = le(Y), W = I(Q);
            Ee(W, {
              level: 3,
              children: (oe, ne) => {
                me();
                var de = $e("Body 参数");
                N(oe, de);
              },
              $$slots: { default: !0 }
            });
            var he = V(W, 2);
            Se(he, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (oe, ne) => {
                var de = uw();
                N(oe, de);
              },
              $$slots: { default: !0 }
            }), A(Q);
            var fe = V(Q, 2);
            ht(fe, { dataKeyName: "formUrlencoded" }), N(R, Y);
          };
          ae(E, (R) => {
            n().bodyType === "x-www-form-urlencoded" && R(P);
          });
        }
        var H = V(E, 2);
        {
          var Z = (R) => {
            var Y = dw(), Q = I(Y);
            Ae(Q, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (W) => {
                a(i, { bodyJson: W.target.value });
              }
            }), A(Y), N(R, Y);
          };
          ae(H, (R) => {
            n().bodyType === "json" && R(Z);
          });
        }
        var D = V(H, 2);
        {
          var B = (R) => {
            var Y = fw(), Q = I(Y);
            Ae(Q, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (W) => {
                a(i, { bodyRaw: W.target.value });
              }
            }), A(Y), N(R, Y);
          };
          ae(D, (R) => {
            n().bodyType === "raw" && R(B);
          });
        }
        var G = V(D, 2), U = I(G);
        Ee(U, {
          level: 3,
          mt: "10px",
          children: (R, Y) => {
            me();
            var Q = $e("输出参数");
            N(R, Q);
          },
          $$slots: { default: !0 }
        });
        var re = V(U, 2);
        Se(re, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (R, Y) => {
            var Q = pw();
            N(R, Q);
          },
          $$slots: { default: !0 }
        }), A(G);
        var F = V(G, 2);
        $n(F, {}), N(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(l) {
      n(l), v();
    }
  });
}
se(Sd, { data: {} }, [], [], !0);
var vw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), mw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), yw = /* @__PURE__ */ ee('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const ww = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Ed(e, t) {
  ue(t, !0), Ne(e, ww);
  const n = m(t, "data", 7), r = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ye(), { addParameter: i } = It(), s = Mn();
  let a = /* @__PURE__ */ Ce(Nt([]));
  Vn(async () => {
    const u = await s.provider?.knowledge?.();
    c(a).push(...u || []);
  });
  const { updateNodeData: l } = rt();
  return Re(() => {
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
  }), Tt(e, He(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = vw();
        N(u, d);
      },
      children: (u, d) => {
        var p = yw(), f = le(p), g = I(f);
        Ee(g, {
          level: 3,
          children: (_, z) => {
            me();
            var b = $e("输入参数");
            N(_, b);
          },
          $$slots: { default: !0 }
        });
        var h = V(g, 2);
        Se(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (_, z) => {
            var b = mw();
            N(_, b);
          },
          $$slots: { default: !0 }
        }), A(f);
        var y = V(f, 2);
        ht(y, {});
        var k = V(y, 2);
        Ee(k, {
          level: 3,
          mt: "10px",
          children: (_, z) => {
            me();
            var b = $e("知识库设置");
            N(_, b);
          },
          $$slots: { default: !0 }
        });
        var w = V(k, 4), L = I(w);
        const x = /* @__PURE__ */ S(() => n().knowledgeId ? [n().knowledgeId] : []);
        tt(L, {
          get items() {
            return c(a);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (_) => {
            const z = _.value;
            l(o, () => ({ knowledgeId: z }));
          },
          get value() {
            return c(x);
          }
        }), A(w);
        var $ = V(w, 4), C = I($);
        Xe(C, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (_) => {
            const z = _.target.value;
            l(o, () => ({ keyword: z }));
          }
        }), A($);
        var M = V($, 4), O = I(M);
        const q = /* @__PURE__ */ S(() => n().limit || "");
        Xe(O, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          onchange: (_) => {
            const z = _.target.value;
            l(o, () => ({ limit: z }));
          },
          get value() {
            return c(q);
          }
        }), A(M);
        var J = V(M, 2), j = I(J);
        Ee(j, {
          level: 3,
          mt: "10px",
          children: (_, z) => {
            me();
            var b = $e("输出参数");
            N(_, b);
          },
          $$slots: { default: !0 }
        }), A(J);
        var T = V(J, 2);
        $n(T, {}), N(u, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(u) {
      n(u), v();
    }
  });
}
se(Ed, { data: {} }, [], [], !0);
var bw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), xw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), $w = /* @__PURE__ */ ee('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const kw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Pd(e, t) {
  ue(t, !0), Ne(e, kw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ye(), { addParameter: i } = It(), s = Mn();
  let a = /* @__PURE__ */ Ce(Nt([]));
  Vn(async () => {
    const u = await s.provider?.searchEngine?.();
    c(a).push(...u || []);
  });
  const { updateNodeData: l } = rt();
  return Re(() => {
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
  }), Tt(e, He(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = bw();
        N(u, d);
      },
      children: (u, d) => {
        var p = $w(), f = le(p), g = I(f);
        Ee(g, {
          level: 3,
          children: (T, _) => {
            me();
            var z = $e("输入参数");
            N(T, z);
          },
          $$slots: { default: !0 }
        });
        var h = V(g, 2);
        Se(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (T, _) => {
            var z = xw();
            N(T, z);
          },
          $$slots: { default: !0 }
        }), A(f);
        var y = V(f, 2);
        ht(y, {});
        var k = V(y, 2);
        Ee(k, {
          level: 3,
          mt: "10px",
          children: (T, _) => {
            me();
            var z = $e("搜索引擎设置");
            N(T, z);
          },
          $$slots: { default: !0 }
        });
        var w = V(k, 4), L = I(w);
        const x = /* @__PURE__ */ S(() => n().engine ? [n().engine] : []);
        tt(L, {
          get items() {
            return c(a);
          },
          style: "width: 100%",
          placeholder: "请选择搜索引擎",
          onSelect: (T) => {
            const _ = T.value;
            l(o, () => ({ engine: _ }));
          },
          get value() {
            return c(x);
          }
        }), A(w);
        var $ = V(w, 4), C = I($);
        Xe(C, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (T) => {
            const _ = T.target.value;
            l(o, () => ({ keyword: _ }));
          }
        }), A($);
        var M = V($, 4), O = I(M);
        Xe(O, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (T) => {
            const _ = T.target.value;
            l(o, () => ({ limit: _ }));
          }
        }), A(M);
        var q = V(M, 2), J = I(q);
        Ee(J, {
          level: 3,
          mt: "10px",
          children: (T, _) => {
            me();
            var z = $e("输出参数");
            N(T, z);
          },
          $$slots: { default: !0 }
        }), A(q);
        var j = V(q, 2);
        $n(j, {}), N(u, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(u) {
      n(u), v();
    }
  });
}
se(Pd, { data: {} }, [], [], !0);
var Cw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), _w = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Sw = /* @__PURE__ */ ee('<div class="heading svelte-1eqcy61"><!></div> <!> <div class="heading svelte-1eqcy61"><!> <!></div> <!>', 1);
const Ew = {
  hash: "svelte-1eqcy61",
  code: ".heading.svelte-1eqcy61 {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function Ld(e, t) {
  ue(t, !0), Ne(e, Ew);
  const n = m(t, "data", 7), r = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ye(), { addParameter: i } = It();
  return Re(() => {
    (!n().loopVars || n().loopVars.length === 0) && i(o, "loopVars", { name: "loopVar", nameDisabled: !0, deleteDisabled: !0 });
  }), Tt(e, He(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (s) => {
        var a = Cw();
        N(s, a);
      },
      handle: (s) => {
        Dn(s, {
          type: "source",
          get position() {
            return ye.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (s, a) => {
        var l = Sw(), u = le(l), d = I(u);
        Ee(d, {
          level: 3,
          children: (k, w) => {
            me();
            var L = $e("循环变量");
            N(k, L);
          },
          $$slots: { default: !0 }
        }), A(u);
        var p = V(u, 2);
        ht(p, { dataKeyName: "loopVars" });
        var f = V(p, 2), g = I(f);
        Ee(g, {
          level: 3,
          children: (k, w) => {
            me();
            var L = $e("输出参数");
            N(k, L);
          },
          $$slots: { default: !0 }
        });
        var h = V(g, 2);
        Se(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (k, w) => {
            var L = _w();
            N(k, L);
          },
          $$slots: { default: !0 }
        }), A(f);
        var y = V(f, 2);
        ht(y, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), N(s, l);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(s) {
      n(s), v();
    }
  });
}
se(Ld, { data: {} }, [], [], !0);
const Pw = (e, t) => {
  const n = e.target.checked;
  t("required", n);
};
var Lw = /* @__PURE__ */ ee('<div class="input-more-setting svelte-2f9bnc"><div class="input-more-item svelte-2f9bnc">数据内容： <!></div> <div class="input-more-item svelte-2f9bnc">确认方式： <!></div> <div class="input-more-item svelte-2f9bnc">数据标题： <!></div> <div class="input-more-item svelte-2f9bnc">数据描述： <!></div> <label class="input-item-inline svelte-2f9bnc"><span>是否必填：</span> <input type="checkbox"/></label> <div class="input-more-item svelte-2f9bnc"><!></div></div>'), Nw = /* @__PURE__ */ ee('<div class="input-item svelte-2f9bnc"><!></div> <div class="input-item svelte-2f9bnc"><!></div> <div class="input-item svelte-2f9bnc"><!></div>', 1);
const Tw = {
  hash: "svelte-2f9bnc",
  code: ".input-item.svelte-2f9bnc {display:flex;align-items:center;}.input-item-inline.svelte-2f9bnc {display:flex;align-items:center;font-size:12px;color:#666;}.input-more-setting.svelte-2f9bnc {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-2f9bnc .input-more-item:where(.svelte-2f9bnc) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Nd(e, t) {
  ue(t, !0), Ne(e, Tw);
  const n = m(t, "parameter", 7), r = m(t, "index", 7), o = m(t, "dataKeyName", 7), i = m(t, "useChildrenOnly", 7);
  let s = Ye(), a = bn(s), l = /* @__PURE__ */ S(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: u } = rt(), d = (_, z) => {
    u(s, (b) => {
      let E = b.data?.[o()];
      return E[r()] = { ...E[r()], [_]: z }, { [o()]: E };
    });
  }, p = (_, z) => {
    const b = z.target.value;
    d(_, b);
  }, f = (_) => {
    const z = _.value;
    d("ref", z);
  }, g = (_) => {
    const z = _.value;
    d("formType", z);
  }, h = (_) => {
    const z = _.value;
    d("contentType", z);
  };
  let y;
  const k = () => {
    u(s, (_) => {
      let z = _.data?.[o()];
      return z.splice(r(), 1), { [o()]: [...z] };
    }), y?.hide();
  };
  let w = wd(i());
  var L = Nw(), x = le(L), $ = I(x);
  const C = /* @__PURE__ */ S(() => c(l).nameDisabled === !0);
  Xe($, {
    style: "width: 100%;",
    get value() {
      return c(l).name;
    },
    placeholder: "请输入参数名称",
    get disabled() {
      return c(C);
    },
    oninput: (_) => p("name", _)
  }), A(x);
  var M = V(x, 2), O = I(M);
  {
    var q = (_) => {
      Xe(_, {
        get value() {
          return c(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (z) => p("value", z)
      });
    }, J = (_, z) => {
      {
        var b = (E) => {
          const P = /* @__PURE__ */ S(() => [c(l).ref]);
          tt(E, {
            get items() {
              return w.current;
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
        ae(
          _,
          (E) => {
            c(l).refType !== "input" && E(b);
          },
          z
        );
      }
    };
    ae(O, (_) => {
      c(l).refType === "fixed" ? _(q) : _(J, !1);
    });
  }
  A(M);
  var j = V(M, 2), T = I(j);
  return _t(
    tr(T, {
      placement: "bottom",
      floating: (_) => {
        var z = Lw(), b = I(z), E = V(I(b));
        const P = /* @__PURE__ */ S(() => c(l).contentType ? [c(l).contentType] : []);
        tt(E, {
          get items() {
            return Xs;
          },
          style: "width: 100%",
          defaultValue: ["text"],
          get value() {
            return c(P);
          },
          onSelect: h
        }), A(b);
        var H = V(b, 2), Z = V(I(H));
        const D = /* @__PURE__ */ S(() => c(l).formType ? [c(l).formType] : []);
        tt(Z, {
          get items() {
            return xm;
          },
          style: "width: 100%",
          defaultValue: ["single"],
          get value() {
            return c(D);
          },
          onSelect: g
        }), A(H);
        var B = V(H, 2), G = V(I(B));
        Ae(G, {
          rows: 1,
          style: "width: 100%;",
          onchange: (W) => {
            p("formLabel", W);
          },
          get value() {
            return c(l).formLabel;
          }
        }), A(B);
        var U = V(B, 2), re = V(I(U));
        Ae(re, {
          rows: 2,
          style: "width: 100%;",
          onchange: (W) => {
            p("formDescription", W);
          },
          get value() {
            return c(l).formDescription;
          }
        }), A(U);
        var F = V(U, 2), R = V(I(F), 2);
        Yt(R), Ki(R, !1), R.__change = [Pw, d], A(F);
        var Y = V(F, 2), Q = I(Y);
        Se(Q, {
          onclick: k,
          children: (W, he) => {
            me();
            var fe = $e("删除");
            N(W, fe);
          },
          $$slots: { default: !0 }
        }), A(Y), A(z), N(_, z);
      },
      children: (_, z) => {
        ho(_, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (_) => y = _,
    () => y
  ), A(j), N(e, L), ce({
    get parameter() {
      return n();
    },
    set parameter(_) {
      n(_), v();
    },
    get index() {
      return r();
    },
    set index(_) {
      r(_), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(_) {
      o(_), v();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(_) {
      i(_), v();
    }
  });
}
yn(["change"]);
se(
  Nd,
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
var Dw = /* @__PURE__ */ ee('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), zw = /* @__PURE__ */ ee('<div class="none-params svelte-1sm1mgi"> </div>'), Mw = /* @__PURE__ */ ee('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Ow = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Td(e, t) {
  ue(t, !0), Ne(e, Ow);
  const n = m(t, "noneParameterText", 7, "无确认数据"), r = m(t, "dataKeyName", 7, "parameters"), o = m(t, "useChildrenOnly", 7);
  let i = Ye(), s = bn(i), a = /* @__PURE__ */ S(() => [...s?.current?.data?.[r()] || []]);
  var l = Mw(), u = I(l);
  {
    var d = (f) => {
      var g = Dw();
      me(4), N(f, g);
    };
    ae(u, (f) => {
      c(a).length !== 0 && f(d);
    });
  }
  var p = V(u, 2);
  return at(
    p,
    19,
    () => c(a),
    (f) => f.id,
    (f, g, h) => {
      Nd(f, {
        get parameter() {
          return c(g);
        },
        get index() {
          return c(h);
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
      var g = zw(), h = I(g, !0);
      A(g), xe(() => Ve(h, n())), N(f, g);
    }
  ), A(l), N(e, l), ce({
    get noneParameterText() {
      return n();
    },
    set noneParameterText(f = "无确认数据") {
      n(f), v();
    },
    get dataKeyName() {
      return r();
    },
    set dataKeyName(f = "parameters") {
      r(f), v();
    },
    get useChildrenOnly() {
      return o();
    },
    set useChildrenOnly(f) {
      o(f), v();
    }
  });
}
se(Td, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
const os = (e, t) => {
  if (e === t) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Array.isArray(e), r = Array.isArray(t);
  if (n !== r) return !1;
  if (n && r) {
    if (e.length !== t.length) return !1;
    for (let o = 0; o < e.length; o++)
      if (!os(e[o], t[o])) return !1;
    return !0;
  } else {
    const o = Object.keys(e), i = Object.keys(t);
    if (o.length !== i.length) return !1;
    for (const s of o)
      if (!(s in t) || !os(e[s], t[s])) return !1;
    return !0;
  }
};
var Vw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Hw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Aw = /* @__PURE__ */ ee('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">消息内容</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Iw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Dd(e, t) {
  ue(t, !0), Ne(e, Iw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ye(), { addParameter: i } = It(), { updateNodeData: s } = rt();
  return Re(() => {
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
        dataType: l.formType === "checkbox" || l.formType === "select" ? "Array" : "String",
        addChildDisabled: !0
      }));
      os(a, n().outputDefs) || s(o, () => ({ outputDefs: a }));
    }
  }), Tt(e, He(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var l = Vw();
        N(a, l);
      },
      children: (a, l) => {
        var u = Aw(), d = le(u), p = I(d);
        Ee(p, {
          level: 3,
          children: (C, M) => {
            me();
            var O = $e("确认数据");
            N(C, O);
          },
          $$slots: { default: !0 }
        });
        var f = V(p, 2);
        Se(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "confirms");
          },
          children: (C, M) => {
            var O = Hw();
            N(C, O);
          },
          $$slots: { default: !0 }
        }), A(d);
        var g = V(d, 2);
        Td(g, { dataKeyName: "confirms", noneParameterText: "无确认数据" });
        var h = V(g, 2);
        Ee(h, {
          level: 3,
          mt: "10px",
          children: (C, M) => {
            me();
            var O = $e("确认消息");
            N(C, O);
          },
          $$slots: { default: !0 }
        });
        var y = V(h, 4), k = I(y);
        const w = /* @__PURE__ */ S(() => n().message || "");
        Ae(k, {
          rows: 5,
          placeholder: "请输入用户需要确认的消息内容",
          style: "width: 100%",
          onchange: (C) => {
            s(o, () => ({ message: C.target.value }));
          },
          get value() {
            return c(w);
          }
        }), A(y);
        var L = V(y, 2), x = I(L);
        Ee(x, {
          level: 3,
          mt: "10px",
          children: (C, M) => {
            me();
            var O = $e("输出参数");
            N(C, O);
          },
          $$slots: { default: !0 }
        }), A(L);
        var $ = V(L, 2);
        $n($, { placeholder: "" }), N(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(a) {
      n(a), v();
    }
  });
}
se(Dd, { data: {} }, [], [], !0);
const Zw = {
  startNode: vd,
  codeNode: Cd,
  confirmNode: Dd,
  llmNode: kd,
  templateNode: _d,
  httpNode: Sd,
  knowledgeNode: Ed,
  searchEngineNode: Pd,
  loopNode: Ld,
  endNode: xd
};
var qw = /* @__PURE__ */ ee("<!> ", 1);
function is(e, t) {
  ue(t, !0);
  const n = m(t, "icon", 7), r = m(t, "title", 7), o = m(t, "type", 7), i = m(t, "description", 7), s = m(t, "extra", 7);
  return Se(e, {
    draggable: !0,
    ondragstart: (a) => {
      if (!a.dataTransfer)
        return null;
      const l = {
        type: o(),
        data: { title: r(), description: i(), ...s() }
      };
      a.dataTransfer.setData("application/tinyflow", JSON.stringify(l)), a.dataTransfer.effectAllowed = "move";
    },
    get "data-node-type"() {
      return o();
    },
    children: (a, l) => {
      var u = qw(), d = le(u);
      Ps(d, n);
      var p = V(d);
      xe(() => Ve(p, ` ${r() ?? ""}`)), N(a, u);
    },
    $$slots: { default: !0 }
  }), ce({
    get icon() {
      return n();
    },
    set icon(a) {
      n(a), v();
    },
    get title() {
      return r();
    },
    set title(a) {
      r(a), v();
    },
    get type() {
      return o();
    },
    set type(a) {
      o(a), v();
    },
    get description() {
      return i();
    },
    set description(a) {
      i(a), v();
    },
    get extra() {
      return s();
    },
    set extra(a) {
      s(a), v();
    }
  });
}
se(is, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var Bw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), Kw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), Rw = /* @__PURE__ */ ee('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function zd(e, t) {
  ue(t, !0);
  let n = /* @__PURE__ */ Ce("base"), r = /* @__PURE__ */ Ce("show");
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
  ], s = [], a = Mn(), l = a.customNodes;
  if (l) {
    const w = Object.keys(l).sort((L, x) => (l[L].sortNo || 0) - (l[x].sortNo || 0));
    for (let L of w)
      l[L].group === "base" ? o.push({ type: L, ...l[L] }) : s.push({
        icon: l[L].icon,
        title: l[L].title,
        type: L
      });
    o.sort((L, x) => (L.sortNo || 0) - (x.sortNo || 0));
  }
  if (a.hiddenNodes) {
    const w = typeof a.hiddenNodes == "function" ? a.hiddenNodes() : a.hiddenNodes;
    if (Array.isArray(w)) {
      for (let L of w)
        for (let x = 0; x < o.length; x++)
          if (o[x].type === L) {
            o.splice(x, 1);
            break;
          }
    }
  }
  var u = Rw(), d = I(u), p = I(d), f = I(p);
  ed(f, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (w) => {
      X(n, w.value.toString(), !0);
    }
  }), A(p);
  var g = V(p, 2), h = I(g);
  at(h, 21, () => o, pr, (w, L) => {
    is(w, He(() => c(L)));
  }), A(h);
  var y = V(h, 2);
  at(y, 21, () => s, pr, (w, L) => {
    is(w, He(() => c(L)));
  }), A(y), A(g), A(d);
  var k = V(d, 2);
  Se(k, {
    onclick: () => {
      X(r, c(r) ? "" : "show", !0);
    },
    children: (w, L) => {
      var x = Le(), $ = le(x);
      {
        var C = (O) => {
          var q = Bw();
          N(O, q);
        }, M = (O) => {
          var q = Kw();
          N(O, q);
        };
        ae($, (O) => {
          c(r) === "show" ? O(C) : O(M, !1);
        });
      }
      N(w, x);
    },
    $$slots: { default: !0 }
  }), A(u), xe(() => {
    yt(u, 1, `tf-toolbar ${c(r) ?? ""}`), ft(h, `display: ${c(n) === "base" ? "flex" : "none"}`), ft(y, `display: ${c(n) !== "base" ? "flex" : "none"}`);
  }), N(e, u), ce();
}
se(zd, {}, [], [], !0);
const jw = () => ({ getNode: (e) => Ze.getNode(e) }), Yw = () => ({ ensureParentInNodesBefore: (e, t) => {
  Ze.updateNodes((n) => {
    let r = -1;
    for (let s = 0; s < n.length; s++)
      if (n[s].id === e) {
        r = s;
        break;
      }
    if (r <= 0)
      return n;
    let o = -1;
    for (let s = 0; s < r; s++)
      if (n[s].parentId === e || n[s].id === t) {
        o = s;
        break;
      }
    if (o == -1)
      return n;
    const i = n[r];
    for (let s = r; s > o; s--)
      n[s] = n[s - 1];
    return n[o] = i, n;
  });
} }), Ww = () => ({ getEdgesByTarget: (e) => Ze.getEdges().filter((t) => t.target === e) });
var Xw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Fw = /* @__PURE__ */ ee('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Gw = /* @__PURE__ */ ee('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Jw = /* @__PURE__ */ ee('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Uw = /* @__PURE__ */ ee('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input/></div></div>', 1), Qw = /* @__PURE__ */ ee('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), eb = /* @__PURE__ */ ee('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), tb = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), nb = /* @__PURE__ */ ee('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), rb = /* @__PURE__ */ ee("<!> <!> <div></div> <!>", 1);
const ob = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Md(e, t) {
  ue(t, !0), Ne(e, ob);
  const n = m(t, "data", 7), r = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ye(), { addParameter: i } = It(), s = rt(), { updateNodeData: a } = s, l = (k) => {
    a(o, k);
  }, u = (k, w) => {
    l({ [k]: w.target?.value });
  }, d = { ...r, id: o, data: n() }, p = document.createElement("div"), f = Mn().customNodes[t.type];
  f.render?.(p, d, s);
  const g = f.forms;
  let h;
  Re(() => {
    n().expand && h && h.append(p);
  }), Re(() => {
    n() && f.onUpdate?.(p, { ...d, data: n() });
  }), Re(() => {
    !n().parameters && f.parameters && l({
      parameters: Gr(JSON.parse(JSON.stringify(f.parameters)))
    });
  }), Re(() => {
    !n().outputDefs && f.outputDefs && l({
      outputDefs: Gr(JSON.parse(JSON.stringify(f.outputDefs)))
    });
  });
  const y = /* @__PURE__ */ S(() => ({ ...n(), description: f.description }));
  return Tt(e, He(
    {
      get data() {
        return c(y);
      }
    },
    () => r,
    {
      icon: (k) => {
        var w = Le(), L = le(w);
        Ps(L, () => f.icon), N(k, w);
      },
      children: (k, w) => {
        var L = rb(), x = le(L);
        {
          var $ = (j) => {
            var T = Fw(), _ = le(T), z = I(_);
            Ee(z, {
              level: 3,
              children: (H, Z) => {
                me();
                var D = $e("输入参数");
                N(H, D);
              },
              $$slots: { default: !0 }
            });
            var b = V(z, 2);
            {
              var E = (H) => {
                Se(H, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    i(o);
                  },
                  children: (Z, D) => {
                    var B = Xw();
                    N(Z, B);
                  },
                  $$slots: { default: !0 }
                });
              };
              ae(b, (H) => {
                f.parametersAddEnable !== !1 && H(E);
              });
            }
            A(_);
            var P = V(_, 2);
            ht(P, {}), N(j, T);
          };
          ae(x, (j) => {
            f.parametersEnable !== !1 && j($);
          });
        }
        var C = V(x, 2);
        {
          var M = (j) => {
            var T = Le(), _ = le(T);
            at(_, 17, () => g, pr, (z, b) => {
              var E = Le(), P = le(E);
              {
                var H = (D) => {
                  var B = Gw(), G = le(B), U = I(G, !0);
                  A(G);
                  var re = V(G, 2), F = I(re);
                  const R = /* @__PURE__ */ S(() => n()[c(b).name] || c(b).defaultValue);
                  Xe(F, He(
                    {
                      get placeholder() {
                        return c(b).placeholder;
                      },
                      style: "width: 100%",
                      get value() {
                        return c(R);
                      }
                    },
                    () => c(b).attrs,
                    {
                      onchange: (Y) => {
                        u(c(b).name, Y);
                      }
                    }
                  )), A(re), xe(() => Ve(U, c(b).label)), N(D, B);
                }, Z = (D, B) => {
                  {
                    var G = (re) => {
                      var F = Jw(), R = le(F), Y = I(R, !0);
                      A(R);
                      var Q = V(R, 2), W = I(Q);
                      const he = /* @__PURE__ */ S(() => n()[c(b).name] || c(b).defaultValue);
                      Ae(W, He(
                        {
                          rows: 3,
                          get placeholder() {
                            return c(b).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return c(he);
                          }
                        },
                        () => c(b).attrs,
                        {
                          onchange: (fe) => {
                            u(c(b).name, fe);
                          }
                        }
                      )), A(Q), xe(() => Ve(Y, c(b).label)), N(re, F);
                    }, U = (re, F) => {
                      {
                        var R = (Q) => {
                          var W = Uw(), he = le(W), fe = I(he, !0);
                          A(he);
                          var oe = V(he, 2), ne = I(oe), de = I(ne), te = I(de);
                          A(de);
                          var ve = V(de, 2);
                          Yt(ve);
                          var ie = (ke) => l({ [c(b).name]: parseFloat(ke.target.value) });
                          Ge(
                            ve,
                            () => ({
                              class: "nodrag",
                              type: "range",
                              ...c(b).attrs,
                              value: n()[c(b).name] ?? c(b).defaultValue,
                              oninput: ie
                            }),
                            void 0,
                            "svelte-q0cqsa"
                          ), A(ne), A(oe), xe(() => {
                            Ve(fe, c(b).label), Ve(te, `${c(b).description ?? ""}: ${n()[c(b).name] ?? c(b).defaultValue ?? ""}`);
                          }), N(Q, W);
                        }, Y = (Q, W) => {
                          {
                            var he = (oe) => {
                              var ne = Qw(), de = le(ne), te = I(de, !0);
                              A(de);
                              var ve = V(de, 2), ie = I(ve);
                              const ke = /* @__PURE__ */ S(() => c(b).options || []), K = /* @__PURE__ */ S(() => n()[c(b).name] ? [n()[c(b).name]] : [c(b).defaultValue]);
                              tt(ie, {
                                get items() {
                                  return c(ke);
                                },
                                style: "width: 100%",
                                get placeholder() {
                                  return c(b).placeholder;
                                },
                                onSelect: (Je) => {
                                  const Te = Je.value;
                                  l({ [c(b).name]: Te });
                                },
                                get value() {
                                  return c(K);
                                }
                              }), A(ve), xe(() => Ve(te, c(b).label)), N(oe, ne);
                            }, fe = (oe, ne) => {
                              {
                                var de = (ve) => {
                                  var ie = eb(), ke = le(ie), K = I(ke, !0);
                                  A(ke);
                                  var Je = V(ke, 2), Te = I(Je);
                                  const Me = /* @__PURE__ */ S(() => c(b).chosen?.buttonText);
                                  Qc(Te, {
                                    style: "width: 100%",
                                    get placeholder() {
                                      return c(b).placeholder;
                                    },
                                    get buttonText() {
                                      return c(Me);
                                    },
                                    onChosen: (Ue, qe, Be) => {
                                      c(b).chosen?.onChosen?.(l, Ue, qe, Be);
                                    },
                                    get value() {
                                      return n()[c(b).chosen?.valueDataKey || ""];
                                    },
                                    get label() {
                                      return n()[c(b).chosen?.labelDataKey || ""];
                                    }
                                  }), A(Je), xe(() => Ve(K, c(b).label)), N(ve, ie);
                                }, te = (ve, ie) => {
                                  {
                                    var ke = (K) => {
                                      Ee(K, He({ level: 3, mt: "10px" }, () => c(b).attrs, {
                                        children: (Je, Te) => {
                                          me();
                                          var Me = $e();
                                          xe(() => Ve(Me, c(b).label)), N(Je, Me);
                                        },
                                        $$slots: { default: !0 }
                                      }));
                                    };
                                    ae(
                                      ve,
                                      (K) => {
                                        c(b).type === "heading" && K(ke);
                                      },
                                      ie
                                    );
                                  }
                                };
                                ae(
                                  oe,
                                  (ve) => {
                                    c(b).type === "chosen" ? ve(de) : ve(te, !1);
                                  },
                                  ne
                                );
                              }
                            };
                            ae(
                              Q,
                              (oe) => {
                                c(b).type === "select" ? oe(he) : oe(fe, !1);
                              },
                              W
                            );
                          }
                        };
                        ae(
                          re,
                          (Q) => {
                            c(b).type === "slider" ? Q(R) : Q(Y, !1);
                          },
                          F
                        );
                      }
                    };
                    ae(
                      D,
                      (re) => {
                        c(b).type === "textarea" ? re(G) : re(U, !1);
                      },
                      B
                    );
                  }
                };
                ae(P, (D) => {
                  c(b).type === "input" ? D(H) : D(Z, !1);
                });
              }
              N(z, E);
            }), N(j, T);
          };
          ae(C, (j) => {
            g && j(M);
          });
        }
        var O = V(C, 2);
        _t(O, (j) => h = j, () => h);
        var q = V(O, 2);
        {
          var J = (j) => {
            var T = nb(), _ = le(T), z = I(_);
            Ee(z, {
              level: 3,
              mt: "10px",
              children: (H, Z) => {
                me();
                var D = $e("输出参数");
                N(H, D);
              },
              $$slots: { default: !0 }
            });
            var b = V(z, 2);
            {
              var E = (H) => {
                Se(H, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    i(o, "outputDefs");
                  },
                  children: (Z, D) => {
                    var B = tb();
                    N(Z, B);
                  },
                  $$slots: { default: !0 }
                });
              };
              ae(b, (H) => {
                f.outputDefsAddEnable !== !1 && H(E);
              });
            }
            A(_);
            var P = V(_, 2);
            $n(P, {}), N(j, T);
          };
          ae(q, (j) => {
            f.outputDefsEnable !== !1 && j(J);
          });
        }
        xe(() => {
          ft(O, f.rootStyle || ""), yt(O, 1, wn(f.rootClass), "svelte-q0cqsa");
        }), N(k, L);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(k) {
      n(k), v();
    }
  });
}
se(Md, { data: {} }, [], [], !0);
const ib = () => ({ updateEdgeData: (e, t, n) => {
  const r = Ze.getEdge(e);
  if (!r)
    return;
  const o = typeof t == "function" ? t(r) : t;
  r.data = n?.replace ? o : { ...r.data, ...o }, Ze.updateEdges((i) => i.map((s) => s.id === e ? r : s));
} }), sb = () => ({ deleteEdge: (e) => {
  Ze.removeEdge(e);
} });
var ab = /* @__PURE__ */ ee('<div class="panel-content svelte-80qc4q"><div>边属性设置</div> <div class="setting-title svelte-80qc4q">边条件设置</div> <div class="setting-item svelte-80qc4q"><!></div> <div class="setting-item svelte-80qc4q" style="padding: 8px 0"><!> <!></div></div>'), lb = /* @__PURE__ */ ee("<!> <!> <!> <!>", 1), ub = /* @__PURE__ */ ee('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const cb = {
  hash: "svelte-80qc4q",
  code: ".panel-content.svelte-80qc4q {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-80qc4q {margin:10px 0;font-size:12px;color:#999;}.setting-item.svelte-80qc4q {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function Od(e, t) {
  ue(t, !0), Ne(e, cb);
  const n = m(t, "onInit", 7), r = rt();
  n()(r);
  let o = /* @__PURE__ */ Ce(!1), i = /* @__PURE__ */ Ce(null);
  const { updateEdgeData: s } = ib(), a = (P) => {
    P.preventDefault(), P.dataTransfer && (P.dataTransfer.dropEffect = "move");
  }, l = (P) => {
    P.preventDefault();
    const H = r.screenToFlowPosition({ x: P.clientX - 250, y: P.clientY - 100 }), Z = P.dataTransfer?.getData("application/tinyflow");
    if (!Z)
      return;
    const D = JSON.parse(Z), B = { id: `node_${Un()}`, position: H, data: {}, ...D };
    Ze.addNode(B), Ze.selectNodeOnly(B.id);
  }, { getNode: u } = jw(), d = (P) => {
    const H = u(P.source), Z = u(P.target);
    if (P.sourceHandle === "loop_handle" || H.parentId) {
      const D = r.getEdges();
      for (let B of D)
        if (B.target === P.target) {
          const G = u(B.source);
          if (P.sourceHandle === "loop_handle" && G.parentId !== H.id || H.parentId && G.parentId !== H.parentId)
            return !1;
        }
    }
    return !(!H.parentId && Z.parentId && Z.parentId !== H.id);
  }, { ensureParentInNodesBefore: p } = Yw(), f = (P, H) => {
    if (!H.isValid)
      return;
    const Z = H.toNode;
    if (Z.parentId)
      return;
    const D = H.fromNode, B = H.fromHandle, G = { position: { ...Z.position } };
    if (B.id === "loop_handle" ? G.parentId = D.id : D.parentId && (G.parentId = D.parentId), G.parentId) {
      const U = u(G.parentId);
      G.position = {
        x: Z.position.x - U.position.x,
        y: Z.position.y - U.position.y
      }, p(G.parentId, Z.id), r.updateNode(Z.id, G);
    }
    setTimeout(() => {
      Ze.getEdges().forEach((U) => {
        U.target === Z.id && U.source == D.id && (X(o, !0), X(i, U, !0));
      });
    });
  }, { getEdgesByTarget: g } = Ww(), h = (P) => {
    P.edges.forEach((H) => {
      H.id === c(i)?.id && (X(i, null), X(o, !1));
      const Z = u(H.target);
      if (Z && Z.parentId) {
        const D = g(H.target), B = u(Z.parentId);
        if (D.length === 0)
          r.updateNode(Z.id, {
            parentId: void 0,
            position: {
              x: Z.position.x + B.position.x,
              y: Z.position.y + B.position.y
            }
          });
        else {
          let G = !1;
          for (let U = 0; U < D.length; U++) {
            const re = D[U], F = u(re.source);
            if (F.parentId || F.type === "loopNode") {
              G = !0;
              break;
            }
          }
          G || r.updateNode(Z.id, {
            parentId: void 0,
            position: {
              x: Z.position.x + B.position.x,
              y: Z.position.y + B.position.y
            }
          });
        }
      }
    });
  }, { deleteEdge: y } = sb(), k = (P, H) => {
  }, w = (P) => {
  }, L = {
    // ...nodeTypes
  }, x = Mn().customNodes;
  if (x)
    for (let P of Object.keys(x))
      L[P] = Md;
  const $ = Mn().onDataChange;
  Re(() => {
    $?.({
      nodes: Ze.getNodes(),
      edges: Ze.getEdges(),
      viewport: Ze.getViewport()
    });
  });
  var C = ub(), M = I(C);
  const O = /* @__PURE__ */ S(() => ({ ...Zw, ...L }));
  var q = Ze.getNodes, J = Ze.setNodes, j = Ze.getEdges, T = Ze.setEdges, _ = Ze.getViewport, z = Ze.setViewport;
  const b = /* @__PURE__ */ S(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: jr.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  Ac(M, {
    get nodeTypes() {
      return c(O);
    },
    get nodes() {
      return q();
    },
    set nodes(P) {
      J(P);
    },
    get edges() {
      return j();
    },
    set edges(P) {
      T(P);
    },
    get viewport() {
      return _();
    },
    set viewport(P) {
      z(P);
    },
    class: "tinyflow-logo",
    ondrop: l,
    ondragover: a,
    isValidConnection: d,
    onconnectend: f,
    onconnectstart: k,
    onconnect: w,
    connectionRadius: 50,
    onedgeclick: (P) => {
      X(o, !0), X(i, P.edge, !0);
    },
    onbeforeconnect: (P) => ({ ...P, id: Un() }),
    ondelete: h,
    onclick: (P) => {
      const H = P.target;
      H.classList.contains("svelte-flow__edge-interaction") || H.classList.contains("panel-content") || H.closest(".panel-content") || (X(o, !1), X(i, null));
    },
    get defaultEdgeOptions() {
      return c(b);
    },
    children: (P, H) => {
      var Z = lb(), D = le(Z);
      Xc(D, {});
      var B = V(D, 2);
      jc(B, {});
      var G = V(B, 2);
      Gc(G, {});
      var U = V(G, 2);
      {
        var re = (F) => {
          co(F, {
            children: (R, Y) => {
              var Q = ab(), W = V(I(Q), 4), he = I(W);
              const fe = /* @__PURE__ */ S(() => c(i)?.data?.condition);
              Ae(he, {
                rows: 3,
                placeholder: "请输入边条件",
                style: "width: 100%",
                get value() {
                  return c(fe);
                },
                onchange: (te) => {
                  c(i) && s(c(i).id, { condition: te.target?.value });
                }
              }), A(W);
              var oe = V(W, 2), ne = I(oe);
              Se(ne, {
                onclick: () => {
                  y(c(i)?.id), X(o, !1);
                },
                children: (te, ve) => {
                  me();
                  var ie = $e("删除");
                  N(te, ie);
                },
                $$slots: { default: !0 }
              });
              var de = V(ne, 2);
              Se(de, {
                primary: !0,
                onclick: () => {
                  X(o, !1);
                },
                children: (te, ve) => {
                  me();
                  var ie = $e("保存");
                  N(te, ie);
                },
                $$slots: { default: !0 }
              }), A(oe), A(Q), N(R, Q);
            },
            $$slots: { default: !0 }
          });
        };
        ae(U, (F) => {
          c(o) && F(re);
        });
      }
      N(P, Z);
    },
    $$slots: { default: !0 }
  });
  var E = V(M, 2);
  return zd(E, {}), A(C), N(e, C), ce({
    get onInit() {
      return n();
    },
    set onInit(P) {
      n(P), v();
    }
  });
}
se(Od, { onInit: {} }, [], [], !0);
function db(e, t) {
  ue(t, !0);
  const n = m(t, "options", 7), r = m(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  return Ze.init(o?.nodes || [], o?.edges || []), dr("tinyflow_options", n()), Ic(e, {
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
      n(i), v();
    },
    get onInit() {
      return r();
    },
    set onInit(i) {
      r(i), v();
    }
  });
}
customElements.define("tinyflow-component", se(db, { options: {}, onInit: {} }, [], [], !1));
const gb = /* @__PURE__ */ Hd({
  __name: "Tinyflow",
  props: {
    className: {},
    style: {},
    data: {},
    provider: {},
    customNodes: {},
    onNodeExecute: { type: Function },
    hiddenNodes: { type: [Array, Function] },
    onDataChange: { type: Function }
  },
  setup(e, { expose: t }) {
    const n = e, r = Ad(null);
    let o = null;
    return Id(() => {
      r.value && (o = new $m({
        ...n,
        element: r.value
      }));
    }), Zd(() => {
      o && (o.destroy(), o = null);
    }), t({
      getData: () => o ? o.getData() : (console.warn("Tinyflow instance is not initialized"), null)
    }), (s, a) => (Bd(), qd("div", {
      ref_key: "divRef",
      ref: r,
      class: Rd(["tinyflow", s.className]),
      style: Kd(s.style)
    }, null, 6));
  }
});
export {
  gb as Tinyflow
};
//# sourceMappingURL=index.js.map
