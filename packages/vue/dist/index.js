import { defineComponent as Ld, ref as zd, onMounted as Td, onUnmounted as Ad, createElementBlock as Id, openBlock as qd, normalizeStyle as Zd, normalizeClass as Bd } from "vue";
const Rd = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Rd);
const os = 1, is = 2, pl = 4, Kd = 8, jd = 16, Yd = 1, Wd = 2, gl = 4, Xd = 8, Fd = 16, hl = 1, Gd = 2, ss = "[", as = "[!", ls = "]", Zn = {}, nt = Symbol(), Ud = "http://www.w3.org/1999/xhtml", Jd = "http://www.w3.org/2000/svg", Qd = "@attach", ef = !1;
var Ur = Array.isArray, tf = Array.prototype.indexOf, us = Array.from, Vo = Object.keys, Do = Object.defineProperty, ln = Object.getOwnPropertyDescriptor, vl = Object.getOwnPropertyDescriptors, ml = Object.prototype, nf = Array.prototype, Jo = Object.getPrototypeOf, ta = Object.isExtensible;
function Sr(e) {
  return typeof e == "function";
}
const tt = () => {
};
function rf(e) {
  return e();
}
function Oo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function at(e, t, n = !1) {
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
const Ct = 2, cs = 4, Qr = 8, ds = 16, mn = 32, Qn = 64, fs = 128, bt = 256, Ho = 512, $t = 1024, fn = 2048, er = 4096, un = 8192, Qo = 16384, yl = 32768, xr = 65536, na = 1 << 17, of = 1 << 18, wl = 1 << 19, Hi = 1 << 20, ps = 1 << 21, jt = Symbol("$state"), gs = Symbol("legacy props"), sf = Symbol(""), bl = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), af = 1, hs = 3, cr = 8;
function xl(e) {
  return e === this.v;
}
function Cl(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function $l(e) {
  return !Cl(e, this.v);
}
function lf(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function uf() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function cf(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function df() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ff() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function pf(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function gf() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function hf() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function vf() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Cr = !1, mf = !1;
function yf() {
  Cr = !0;
}
const wf = [];
function _l(e, t = !1) {
  return Co(e, /* @__PURE__ */ new Map(), "", wf);
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
    if (Jo(e) === ml) {
      s = {}, t.set(e, s), o !== null && t.set(o, s);
      for (var c in e)
        s[c] = Co(e[c], t, n, r);
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
function vs(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let qe = null;
function ra(e) {
  qe = e;
}
function pn(e) {
  return (
    /** @type {T} */
    kl().get(e)
  );
}
function dr(e, t) {
  return kl().set(e, t), t;
}
function le(e, t = !1, n) {
  qe = {
    p: qe,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  }, Cr && !t && (qe.l = {
    s: null,
    u: null,
    r1: [],
    r2: Yn(!1)
  });
}
function ue(e) {
  var t = (
    /** @type {ComponentContext} */
    qe
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Tl(r);
  }
  return e !== void 0 && (t.x = e), qe = t.p, e ?? /** @type {T} */
  {};
}
function ei() {
  return !Cr || qe !== null && qe.l === null;
}
function kl(e) {
  return qe === null && vs(), qe.c ??= new Map(bf(qe) || void 0);
}
function bf(e) {
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
  const t = Jo(e);
  if (t !== ml && t !== nf)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Ur(e), o = /* @__PURE__ */ Ee(0), i = Kn, s = (a) => {
    if (Kn === i)
      return a();
    var l = Le, c = Kn;
    En(null), aa(i);
    var d = a();
    return En(l), aa(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ Ee(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && gf();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var p = /* @__PURE__ */ Ee(c.value);
          return n.set(l, p), p;
        }) : K(d, c.value, !0), !0;
      },
      deleteProperty(a, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in a) {
            const f = s(() => /* @__PURE__ */ Ee(nt));
            n.set(l, f), $o(o);
          }
        } else {
          if (r && typeof l == "string") {
            var d = (
              /** @type {Source<number>} */
              n.get("length")
            ), p = Number(l);
            Number.isInteger(p) && p < d.v && K(d, p);
          }
          K(c, nt), $o(o);
        }
        return !0;
      },
      get(a, l, c) {
        if (l === jt)
          return e;
        var d = n.get(l), p = l in a;
        if (d === void 0 && (!p || ln(a, l)?.writable) && (d = s(() => {
          var g = Nt(p ? a[l] : nt), h = /* @__PURE__ */ Ee(g);
          return h;
        }), n.set(l, d)), d !== void 0) {
          var f = u(d);
          return f === nt ? void 0 : f;
        }
        return Reflect.get(a, l, c);
      },
      getOwnPropertyDescriptor(a, l) {
        var c = Reflect.getOwnPropertyDescriptor(a, l);
        if (c && "value" in c) {
          var d = n.get(l);
          d && (c.value = u(d));
        } else if (c === void 0) {
          var p = n.get(l), f = p?.v;
          if (p !== void 0 && f !== nt)
            return {
              enumerable: !0,
              configurable: !0,
              value: f,
              writable: !0
            };
        }
        return c;
      },
      has(a, l) {
        if (l === jt)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== nt || Reflect.has(a, l);
        if (c !== void 0 || Me !== null && (!d || ln(a, l)?.writable)) {
          c === void 0 && (c = s(() => {
            var f = d ? Nt(a[l]) : nt, g = /* @__PURE__ */ Ee(f);
            return g;
          }), n.set(l, c));
          var p = u(c);
          if (p === nt)
            return !1;
        }
        return d;
      },
      set(a, l, c, d) {
        var p = n.get(l), f = l in a;
        if (r && l === "length")
          for (var g = c; g < /** @type {Source<number>} */
          p.v; g += 1) {
            var h = n.get(g + "");
            h !== void 0 ? K(h, nt) : g in a && (h = s(() => /* @__PURE__ */ Ee(nt)), n.set(g + "", h));
          }
        if (p === void 0)
          (!f || ln(a, l)?.writable) && (p = s(() => /* @__PURE__ */ Ee(void 0)), K(p, Nt(c)), n.set(l, p));
        else {
          f = p.v !== nt;
          var y = s(() => Nt(c));
          K(p, y);
        }
        var $ = Reflect.getOwnPropertyDescriptor(a, l);
        if ($?.set && $.set.call(d, c), !f) {
          if (r && typeof l == "string") {
            var w = (
              /** @type {Source<number>} */
              n.get("length")
            ), P = Number(l);
            Number.isInteger(P) && P >= w.v && K(w, P + 1);
          }
          $o(o);
        }
        return !0;
      },
      ownKeys(a) {
        u(o);
        var l = Reflect.ownKeys(a).filter((p) => {
          var f = n.get(p);
          return f === void 0 || f.v !== nt;
        });
        for (var [c, d] of n)
          d.v !== nt && !(c in a) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        hf();
      }
    }
  );
}
function oa(e) {
  try {
    if (e !== null && typeof e == "object" && jt in e)
      return e[jt];
  } catch {
  }
  return e;
}
function xf(e, t) {
  return Object.is(oa(e), oa(t));
}
// @__NO_SIDE_EFFECTS__
function $r(e) {
  var t = Ct | fn, n = Le !== null && (Le.f & Ct) !== 0 ? (
    /** @type {Derived} */
    Le
  ) : null;
  return Me === null || n !== null && (n.f & bt) !== 0 ? t |= bt : Me.f |= wl, {
    ctx: qe,
    deps: null,
    effects: null,
    equals: xl,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      nt
    ),
    wv: 0,
    parent: n ?? Me,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function S(e) {
  const t = /* @__PURE__ */ $r(e);
  return Xl(t), t;
}
// @__NO_SIDE_EFFECTS__
function ms(e) {
  const t = /* @__PURE__ */ $r(e);
  return t.equals = $l, t;
}
function Sl(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      vt(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Cf(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & Ct) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function ys(e) {
  var t, n = Me;
  Pn(Cf(e));
  try {
    Sl(e), t = Ul(e);
  } finally {
    Pn(n);
  }
  return t;
}
function El(e) {
  var t = ys(e);
  if (e.equals(t) || (e.v = t, e.wv = Fl()), !Sn) {
    var n = ($n || (e.f & bt) !== 0) && e.deps !== null ? er : $t;
    Gt(e, n);
  }
}
const Bn = /* @__PURE__ */ new Map();
function Yn(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: xl,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Ee(e, t) {
  const n = Yn(e);
  return Xl(n), n;
}
// @__NO_SIDE_EFFECTS__
function Pl(e, t = !1, n = !0) {
  const r = Yn(e);
  return t || (r.equals = $l), Cr && n && qe !== null && qe.l !== null && (qe.l.s ??= []).push(r), r;
}
function K(e, t, n = !1) {
  Le !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ht || (Le.f & na) !== 0) && ei() && (Le.f & (Ct | ds | na)) !== 0 && !cn?.includes(e) && vf();
  let r = n ? Nt(t) : t;
  return Li(e, r);
}
function Li(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Sn ? Bn.set(e, t) : Bn.set(e, n), e.v = t, (e.f & Ct) !== 0 && ((e.f & fn) !== 0 && ys(
      /** @type {Derived} */
      e
    ), Gt(e, (e.f & bt) === 0 ? $t : er)), e.wv = Fl(), Nl(e, fn), ei() && Me !== null && (Me.f & $t) !== 0 && (Me.f & (mn | Qn)) === 0 && (Et === null ? Vf([e]) : Et.push(e));
  }
  return t;
}
function ia(e, t = 1) {
  var n = u(e), r = t === 1 ? n++ : n--;
  return K(e, n), r;
}
function $o(e) {
  K(e, e.v + 1);
}
function Nl(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = ei(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      (a & fn) === 0 && (!r && s === Me || (Gt(s, t), (a & ($t | bt)) !== 0 && ((a & Ct) !== 0 ? Nl(
        /** @type {Derived} */
        s,
        er
      ) : ni(
        /** @type {Effect} */
        s
      ))));
    }
}
function eo(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function $f() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
let be = !1;
function wt(e) {
  be = e;
}
let Pe;
function ot(e) {
  if (e === null)
    throw eo(), Zn;
  return Pe = e;
}
function gn() {
  return ot(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Qt(Pe)
  );
}
function A(e) {
  if (be) {
    if (/* @__PURE__ */ Qt(Pe) !== null)
      throw eo(), Zn;
    Pe = e;
  }
}
function we(e = 1) {
  if (be) {
    for (var t = e, n = Pe; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Qt(n);
    Pe = n;
  }
}
function zi() {
  for (var e = 0, t = Pe; ; ) {
    if (t.nodeType === cr) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === ls) {
        if (e === 0) return t;
        e -= 1;
      } else (n === ss || n === as) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Qt(t)
    );
    t.remove(), t = r;
  }
}
function Ml(e) {
  if (!e || e.nodeType !== cr)
    throw eo(), Zn;
  return (
    /** @type {Comment} */
    e.data
  );
}
var ft, Vl, Dl, Ol;
function Ti() {
  if (ft === void 0) {
    ft = window, Vl = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Dl = ln(t, "firstChild").get, Ol = ln(t, "nextSibling").get, ta(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), ta(n) && (n.__t = void 0);
  }
}
function hn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function We(e) {
  return Dl.call(e);
}
// @__NO_SIDE_EFFECTS__
function Qt(e) {
  return Ol.call(e);
}
function I(e, t) {
  if (!be)
    return /* @__PURE__ */ We(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ We(Pe)
  );
  if (n === null)
    n = Pe.appendChild(hn());
  else if (t && n.nodeType !== hs) {
    var r = hn();
    return n?.before(r), ot(r), r;
  }
  return ot(n), n;
}
function se(e, t) {
  if (!be) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ We(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Qt(n) : n;
  }
  return Pe;
}
function T(e, t = 1, n = !1) {
  let r = be ? Pe : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Qt(r);
  if (!be)
    return r;
  if (n && r?.nodeType !== hs) {
    var i = hn();
    return r === null ? o?.after(i) : r.before(i), ot(i), i;
  }
  return ot(r), /** @type {TemplateNode} */
  r;
}
function ws(e) {
  e.textContent = "";
}
function Hl(e) {
  Me === null && Le === null && cf(), Le !== null && (Le.f & bt) !== 0 && Me === null && uf(), Sn && lf();
}
function _f(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function yn(e, t, n, r = !0) {
  var o = Me, i = {
    ctx: qe,
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
      Cs(i), i.f |= yl;
    } catch (l) {
      throw vt(i), l;
    }
  else t !== null && ni(i);
  var s = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (wl | fs)) === 0;
  if (!s && r && (o !== null && _f(i, o), Le !== null && (Le.f & Ct) !== 0)) {
    var a = (
      /** @type {Derived} */
      Le
    );
    (a.effects ??= []).push(i);
  }
  return i;
}
function Ll() {
  return Le !== null && !Ht;
}
function zl(e) {
  const t = yn(Qr, null, !1);
  return Gt(t, $t), t.teardown = e, t;
}
function je(e) {
  if (Hl(), !Le && Me && (Me.f & mn) !== 0) {
    var t = (
      /** @type {ComponentContext} */
      qe
    );
    (t.e ??= []).push(e);
  } else
    return Tl(e);
}
function Tl(e) {
  return yn(cs | ps, e, !1);
}
function Al(e) {
  return Hl(), yn(Qr | ps, e, !0);
}
function bs(e) {
  const t = yn(Qn, e, !0);
  return () => {
    vt(t);
  };
}
function kf(e) {
  const t = yn(Qn, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? fr(t, () => {
      vt(t), r(void 0);
    }) : (vt(t), r(void 0));
  });
}
function to(e) {
  return yn(cs, e, !1);
}
function no(e) {
  return yn(Qr, e, !0);
}
function $e(e, t = [], n = $r) {
  const r = t.map(n);
  return Dn(() => e(...r.map(u)));
}
function Dn(e, t = 0) {
  var n = yn(Qr | ds | t, e, !0);
  return n;
}
function Ft(e, t = !0) {
  return yn(Qr | mn, e, !0, t);
}
function Il(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Sn, r = Le;
    sa(!0), En(null);
    try {
      t.call(null);
    } finally {
      sa(n), En(r);
    }
  }
}
function ql(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    n.ac?.abort(bl);
    var r = n.next;
    (n.f & Qn) !== 0 ? n.parent = null : vt(n, t), n = r;
  }
}
function Sf(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & mn) === 0 && vt(t), t = n;
  }
}
function vt(e, t = !0) {
  var n = !1;
  (t || (e.f & of) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (Zl(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), ql(e, t && !n), zo(e, 0), Gt(e, Qo);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  Il(e);
  var o = e.parent;
  o !== null && o.first !== null && Bl(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function Zl(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Qt(e)
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
  xs(e, n, !0), Rl(n, () => {
    vt(e), t && t();
  });
}
function Rl(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function xs(e, t, n) {
  if ((e.f & un) === 0) {
    if (e.f ^= un, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & xr) !== 0 || (r.f & mn) !== 0;
      xs(r, t, i ? n : !1), r = o;
    }
  }
}
function Lr(e) {
  Kl(e, !0);
}
function Kl(e, t) {
  if ((e.f & un) !== 0) {
    e.f ^= un;
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & xr) !== 0 || (n.f & mn) !== 0;
      Kl(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
const Ef = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let zr = [], Tr = [];
function jl() {
  var e = zr;
  zr = [], Oo(e);
}
function Yl() {
  var e = Tr;
  Tr = [], Oo(e);
}
function ro(e) {
  zr.length === 0 && queueMicrotask(jl), zr.push(e);
}
function Pf(e) {
  Tr.length === 0 && Ef(Yl), Tr.push(e);
}
function Nf() {
  zr.length > 0 && jl(), Tr.length > 0 && Yl();
}
function Mf(e) {
  var t = (
    /** @type {Effect} */
    Me
  );
  if ((t.f & yl) === 0) {
    if ((t.f & fs) === 0)
      throw e;
    t.fn(e);
  } else
    Wl(e, t);
}
function Wl(e, t) {
  for (; t !== null; ) {
    if ((t.f & fs) !== 0)
      try {
        t.b.error(e);
        return;
      } catch {
      }
    t = t.parent;
  }
  throw e;
}
let Ar = !1, Ir = null, Rn = !1, Sn = !1;
function sa(e) {
  Sn = e;
}
let Or = [], Le = null, Ht = !1;
function En(e) {
  Le = e;
}
let Me = null;
function Pn(e) {
  Me = e;
}
let cn = null;
function Xl(e) {
  Le !== null && Le.f & Hi && (cn === null ? cn = [e] : cn.push(e));
}
let lt = null, yt = 0, Et = null;
function Vf(e) {
  Et = e;
}
let Lo = 1, qr = 0, Kn = qr;
function aa(e) {
  Kn = e;
}
let $n = !1;
function Fl() {
  return ++Lo;
}
function ti(e) {
  var t = e.f;
  if ((t & fn) !== 0)
    return !0;
  if ((t & er) !== 0) {
    var n = e.deps, r = (t & bt) !== 0;
    if (n !== null) {
      var o, i, s = (t & Ho) !== 0, a = r && Me !== null && !$n, l = n.length;
      if (s || a) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (o = 0; o < l; o++)
          i = n[o], (s || !i?.reactions?.includes(c)) && (i.reactions ??= []).push(c);
        s && (c.f ^= Ho), a && d !== null && (d.f & bt) === 0 && (c.f ^= bt);
      }
      for (o = 0; o < l; o++)
        if (i = n[o], ti(
          /** @type {Derived} */
          i
        ) && El(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!r || Me !== null && !$n) && Gt(e, $t);
  }
  return !1;
}
function Gl(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !cn?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & Ct) !== 0 ? Gl(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? Gt(i, fn) : (i.f & $t) !== 0 && Gt(i, er), ni(
        /** @type {Effect} */
        i
      ));
    }
}
function Ul(e) {
  var t = lt, n = yt, r = Et, o = Le, i = $n, s = cn, a = qe, l = Ht, c = Kn, d = e.f;
  lt = /** @type {null | Value[]} */
  null, yt = 0, Et = null, $n = (d & bt) !== 0 && (Ht || !Rn || Le === null), Le = (d & (mn | Qn)) === 0 ? e : null, cn = null, ra(e.ctx), Ht = !1, Kn = ++qr, e.f |= Hi, e.ac !== null && (e.ac.abort(bl), e.ac = null);
  try {
    var p = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (lt !== null) {
      var g;
      if (zo(e, yt), f !== null && yt > 0)
        for (f.length = yt + lt.length, g = 0; g < lt.length; g++)
          f[yt + g] = lt[g];
      else
        e.deps = f = lt;
      if (!$n || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (d & Ct) !== 0 && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (g = yt; g < f.length; g++)
          (f[g].reactions ??= []).push(e);
    } else f !== null && yt < f.length && (zo(e, yt), f.length = yt);
    if (ei() && Et !== null && !Ht && f !== null && (e.f & (Ct | er | fn)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      Et.length; g++)
        Gl(
          Et[g],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (qr++, Et !== null && (r === null ? r = Et : r.push(.../** @type {Source[]} */
    Et))), p;
  } catch (h) {
    Mf(h);
  } finally {
    lt = t, yt = n, Et = r, Le = o, $n = i, cn = s, ra(a), Ht = l, Kn = c, e.f ^= Hi;
  }
}
function Df(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = tf.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & Ct) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (lt === null || !lt.includes(t)) && (Gt(t, er), (t.f & (bt | Ho)) === 0 && (t.f ^= Ho), Sl(
    /** @type {Derived} **/
    t
  ), zo(
    /** @type {Derived} **/
    t,
    0
  ));
}
function zo(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Df(e, n[r]);
}
function Cs(e) {
  var t = e.f;
  if ((t & Qo) === 0) {
    Gt(e, $t);
    var n = Me, r = Rn;
    Me = e, Rn = !0;
    try {
      (t & ds) !== 0 ? Sf(e) : ql(e), Il(e);
      var o = Ul(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = Lo;
      var i;
      ef && mf && (e.f & fn) !== 0 && e.deps;
    } finally {
      Rn = r, Me = n;
    }
  }
}
function Of() {
  try {
    df();
  } catch (e) {
    if (Ir !== null)
      Wl(e, Ir);
    else
      throw e;
  }
}
function Jl() {
  var e = Rn;
  try {
    var t = 0;
    for (Rn = !0; Or.length > 0; ) {
      t++ > 1e3 && Of();
      var n = Or, r = n.length;
      Or = [];
      for (var o = 0; o < r; o++) {
        var i = Lf(n[o]);
        Hf(i);
      }
      Bn.clear();
    }
  } finally {
    Ar = !1, Rn = e, Ir = null;
  }
}
function Hf(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if ((r.f & (Qo | un)) === 0 && ti(r)) {
        var o = Lo;
        if (Cs(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? Bl(r) : r.fn = null), Lo > o && (r.f & ps) !== 0)
          break;
      }
    }
    for (; n < t; n += 1)
      ni(e[n]);
  }
}
function ni(e) {
  Ar || (Ar = !0, queueMicrotask(Jl));
  for (var t = Ir = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if ((n & (Qn | mn)) !== 0) {
      if ((n & $t) === 0) return;
      t.f ^= $t;
    }
  }
  Or.push(t);
}
function Lf(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, o = (r & (mn | Qn)) !== 0, i = o && (r & $t) !== 0;
    if (!i && (r & un) === 0) {
      (r & cs) !== 0 ? t.push(n) : o ? n.f ^= $t : ti(n) && Cs(n);
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
    if (Nf(), Or.length === 0)
      return Ar = !1, Ir = null, /** @type {T} */
      t;
    Ar = !0, Jl();
  }
}
async function zf() {
  await Promise.resolve(), v();
}
function u(e) {
  var t = e.f, n = (t & Ct) !== 0;
  if (Le !== null && !Ht) {
    if (!cn?.includes(e)) {
      var r = Le.deps;
      e.rv < qr && (e.rv = qr, lt === null && r !== null && r[yt] === e ? yt++ : lt === null ? lt = [e] : (!$n || !lt.includes(e)) && lt.push(e));
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), i = o.parent;
    i !== null && (i.f & bt) === 0 && (o.f ^= bt);
  }
  if (n && !Sn && (o = /** @type {Derived} */
  e, ti(o) && El(o)), Sn) {
    if (Bn.has(e))
      return Bn.get(e);
    if (n) {
      o = /** @type {Derived} */
      e;
      var s = o.v;
      return ((o.f & $t) !== 0 || Ql(o)) && (s = ys(o)), Bn.set(o, s), s;
    }
  }
  return e.v;
}
function Ql(e) {
  if (e.v === nt) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Bn.has(t) || (t.f & Ct) !== 0 && Ql(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function et(e) {
  var t = Ht;
  try {
    return Ht = !0, e();
  } finally {
    Ht = t;
  }
}
const Tf = -7169;
function Gt(e, t) {
  e.f = e.f & Tf | t;
}
function Af(e, t) {
  var n = {};
  for (var r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}
function $s(e) {
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
    const n = Jo(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = vl(n);
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
function If(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, ro(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function qf(e) {
  be && /* @__PURE__ */ We(e) !== null && ws(e);
}
let la = !1;
function Zf() {
  la || (la = !0, document.addEventListener(
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
function Bf(e) {
  var t = Le, n = Me;
  En(null), Pn(null);
  try {
    return e();
  } finally {
    En(t), Pn(n);
  }
}
const eu = /* @__PURE__ */ new Set(), Ii = /* @__PURE__ */ new Set();
function _s(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || Nr.call(t, i), !i.cancelBubble)
      return Bf(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? ro(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function qi(e, t, n, r = {}) {
  var o = _s(t, e, n, r);
  return () => {
    e.removeEventListener(t, o, r);
  };
}
function ua(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = _s(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && zl(() => {
    t.removeEventListener(e, s, i);
  });
}
function On(e) {
  for (var t = 0; t < e.length; t++)
    eu.add(e[t]);
  for (var n of Ii)
    n(e);
}
function Nr(e) {
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
    var c = o.indexOf(t);
    if (c === -1)
      return;
    l <= c && (s = l);
  }
  if (i = /** @type {Element} */
  o[s] || e.target, i !== t) {
    Do(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = Le, p = Me;
    En(null), Pn(null);
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
            if (Ur(y)) {
              var [$, ...w] = y;
              $.apply(i, [e, ...w]);
            } else
              y.call(i, e);
        } catch (P) {
          f ? g.push(P) : f = P;
        }
        if (e.cancelBubble || h === t || h === null)
          break;
        i = h;
      }
      if (f) {
        for (let P of g)
          queueMicrotask(() => {
            throw P;
          });
        throw f;
      }
    } finally {
      e.__root = t, delete e.currentTarget, En(d), Pn(p);
    }
  }
}
function ks(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function ht(e, t) {
  var n = (
    /** @type {Effect} */
    Me
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function G(e, t) {
  var n = (t & hl) !== 0, r = (t & Gd) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (be)
      return ht(Pe, null), Pe;
    o === void 0 && (o = ks(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ We(o)));
    var s = (
      /** @type {TemplateNode} */
      r || Vl ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ We(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      ht(a, l);
    } else
      ht(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Rf(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & hl) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (be)
      return ht(Pe, null), Pe;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        ks(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ We(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ We(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ We(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ We(l);
    }
    var c = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ We(c)
      ), p = (
        /** @type {TemplateNode} */
        c.lastChild
      );
      ht(d, p);
    } else
      ht(c, c);
    return c;
  };
}
// @__NO_SIDE_EFFECTS__
function he(e, t) {
  return /* @__PURE__ */ Rf(e, t, "svg");
}
function Se(e = "") {
  if (!be) {
    var t = hn(e + "");
    return ht(t, t), t;
  }
  var n = Pe;
  return n.nodeType !== hs && (n.before(n = hn()), ot(n)), ht(n, n), n;
}
function De() {
  if (be)
    return ht(Pe, null), Pe;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = hn();
  return e.append(t, n), ht(t, n), e;
}
function O(e, t) {
  if (be) {
    Me.nodes_end = Pe, gn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Kf(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const jf = [
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
function Yf(e) {
  return jf.includes(e);
}
const Wf = {
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
function Xf(e) {
  return e = e.toLowerCase(), Wf[e] ?? e;
}
const Ff = ["touchstart", "touchmove"];
function Gf(e) {
  return Ff.includes(e);
}
const Uf = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function Jf(e) {
  return Uf.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function Ae(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function tu(e, t) {
  return nu(e, t);
}
function Qf(e, t) {
  Ti(), t.intro = t.intro ?? !1;
  const n = t.target, r = be, o = Pe;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ We(n)
    ); i && (i.nodeType !== cr || /** @type {Comment} */
    i.data !== ss); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Qt(i);
    if (!i)
      throw Zn;
    wt(!0), ot(
      /** @type {Comment} */
      i
    ), gn();
    const s = nu(e, { ...t, anchor: i });
    if (Pe === null || Pe.nodeType !== cr || /** @type {Comment} */
    Pe.data !== ls)
      throw eo(), Zn;
    return wt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === Zn)
      return t.recover === !1 && ff(), Ti(), ws(n), wt(!1), tu(e, t);
    throw s;
  } finally {
    wt(r), ot(o);
  }
}
const nr = /* @__PURE__ */ new Map();
function nu(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  Ti();
  var a = /* @__PURE__ */ new Set(), l = (p) => {
    for (var f = 0; f < p.length; f++) {
      var g = p[f];
      if (!a.has(g)) {
        a.add(g);
        var h = Gf(g);
        t.addEventListener(g, Nr, { passive: h });
        var y = nr.get(g);
        y === void 0 ? (document.addEventListener(g, Nr, { passive: h }), nr.set(g, 1)) : nr.set(g, y + 1);
      }
    }
  };
  l(us(eu)), Ii.add(l);
  var c = void 0, d = kf(() => {
    var p = n ?? t.appendChild(hn());
    return Ft(() => {
      if (i) {
        le({});
        var f = (
          /** @type {ComponentContext} */
          qe
        );
        f.c = i;
      }
      o && (r.$$events = o), be && ht(
        /** @type {TemplateNode} */
        p,
        null
      ), c = e(p, r) || {}, be && (Me.nodes_end = Pe), i && ue();
    }), () => {
      for (var f of a) {
        t.removeEventListener(f, Nr);
        var g = (
          /** @type {number} */
          nr.get(f)
        );
        --g === 0 ? (document.removeEventListener(f, Nr), nr.delete(f)) : nr.set(f, g);
      }
      Ii.delete(l), p !== n && p.parentNode?.removeChild(p);
    };
  });
  return Zi.set(c, d), c;
}
let Zi = /* @__PURE__ */ new WeakMap();
function ep(e, t) {
  const n = Zi.get(e);
  return n ? (Zi.delete(e), n(t)) : Promise.resolve();
}
function Be(e, t, ...n) {
  var r = e, o = tt, i;
  Dn(() => {
    o !== (o = t()) && (i && (vt(i), i = null), i = Ft(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, xr), be && (r = Pe);
}
function Hn(e) {
  qe === null && vs(), Cr && qe.l !== null ? tp(qe).m.push(e) : je(() => {
    const t = et(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function ri(e) {
  qe === null && vs(), Hn(() => () => et(e));
}
function tp(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
function ae(e, t, [n, r] = [0, 0]) {
  be && n === 0 && gn();
  var o = e, i = null, s = null, a = nt, l = n > 0 ? xr : 0, c = !1;
  const d = (f, g = !0) => {
    c = !0, p(g, f);
  }, p = (f, g) => {
    if (a === (a = f)) return;
    let h = !1;
    if (be && r !== -1) {
      if (n === 0) {
        const $ = Ml(o);
        $ === ss ? r = 0 : $ === as ? r = 1 / 0 : (r = parseInt($.substring(1)), r !== r && (r = a ? 1 / 0 : -1));
      }
      const y = r > n;
      !!a === y && (o = zi(), ot(o), wt(!1), h = !0, r = -1);
    }
    a ? (i ? Lr(i) : g && (i = Ft(() => g(o))), s && fr(s, () => {
      s = null;
    })) : (s ? Lr(s) : g && (s = Ft(() => g(o, [n + 1, r]))), i && fr(i, () => {
      i = null;
    })), h && wt(!0);
  };
  Dn(() => {
    c = !1, t(d), c || p(null, null);
  }, l), be && (o = Pe);
}
function np(e, t) {
  be && ot(
    /** @type {TemplateNode} */
    /* @__PURE__ */ We(e)
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
function rp(e, t, n, r) {
  for (var o = [], i = t.length, s = 0; s < i; s++)
    xs(t[s].e, o, !0);
  var a = i > 0 && o.length === 0 && n !== null;
  if (a) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    ws(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), xn(e, t[0].prev, t[i - 1].next);
  }
  Rl(o, () => {
    for (var c = 0; c < i; c++) {
      var d = t[c];
      a || (r.delete(d.k), xn(e, d.prev, d.next)), vt(d.e, !a);
    }
  });
}
function ut(e, t, n, r, o, i = null) {
  var s = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & pl) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      e
    );
    s = be ? ot(
      /** @type {Comment | Text} */
      /* @__PURE__ */ We(c)
    ) : c.appendChild(hn());
  }
  be && gn();
  var d = null, p = !1, f = /* @__PURE__ */ ms(() => {
    var g = n();
    return Ur(g) ? g : g == null ? [] : us(g);
  });
  Dn(() => {
    var g = u(f), h = g.length;
    if (p && h === 0)
      return;
    p = h === 0;
    let y = !1;
    if (be) {
      var $ = Ml(s) === as;
      $ !== (h === 0) && (s = zi(), ot(s), wt(!1), y = !0);
    }
    if (be) {
      for (var w = null, P, x = 0; x < h; x++) {
        if (Pe.nodeType === cr && /** @type {Comment} */
        Pe.data === ls) {
          s = /** @type {Comment} */
          Pe, y = !0, wt(!1);
          break;
        }
        var C = g[x], _ = r(C, x);
        P = ru(
          Pe,
          a,
          w,
          null,
          C,
          _,
          x,
          o,
          t,
          n
        ), a.items.set(_, P), w = P;
      }
      h > 0 && ot(zi());
    }
    be || op(g, a, s, o, t, r, n), i !== null && (h === 0 ? d ? Lr(d) : d = Ft(() => i(s)) : d !== null && fr(d, () => {
      d = null;
    })), y && wt(!0), u(f);
  }), be && (s = Pe);
}
function op(e, t, n, r, o, i, s) {
  var a = (o & Kd) !== 0, l = (o & (os | is)) !== 0, c = e.length, d = t.items, p = t.first, f = p, g, h = null, y, $ = [], w = [], P, x, C, _;
  if (a)
    for (_ = 0; _ < c; _ += 1)
      P = e[_], x = i(P, _), C = d.get(x), C !== void 0 && (C.a?.measure(), (y ??= /* @__PURE__ */ new Set()).add(C));
  for (_ = 0; _ < c; _ += 1) {
    if (P = e[_], x = i(P, _), C = d.get(x), C === void 0) {
      var V = f ? (
        /** @type {TemplateNode} */
        f.e.nodes_start
      ) : n;
      h = ru(
        V,
        t,
        h,
        h === null ? t.first : h.next,
        P,
        x,
        _,
        r,
        o,
        s
      ), d.set(x, h), $ = [], w = [], f = h.next;
      continue;
    }
    if (l && ip(C, P, _, o), (C.e.f & un) !== 0 && (Lr(C.e), a && (C.a?.unfix(), (y ??= /* @__PURE__ */ new Set()).delete(C))), C !== f) {
      if (g !== void 0 && g.has(C)) {
        if ($.length < w.length) {
          var L = w[0], Z;
          h = L.prev;
          var Y = $[0], j = $[$.length - 1];
          for (Z = 0; Z < $.length; Z += 1)
            ca($[Z], L, n);
          for (Z = 0; Z < w.length; Z += 1)
            g.delete(w[Z]);
          xn(t, Y.prev, j.next), xn(t, h, Y), xn(t, j, L), f = L, h = j, _ -= 1, $ = [], w = [];
        } else
          g.delete(C), ca(C, f, n), xn(t, C.prev, C.next), xn(t, C, h === null ? t.first : h.next), xn(t, h, C), h = C;
        continue;
      }
      for ($ = [], w = []; f !== null && f.k !== x; )
        (f.e.f & un) === 0 && (g ??= /* @__PURE__ */ new Set()).add(f), w.push(f), f = f.next;
      if (f === null)
        continue;
      C = f;
    }
    $.push(C), h = C, f = C.next;
  }
  if (f !== null || g !== void 0) {
    for (var N = g === void 0 ? [] : us(g); f !== null; )
      (f.e.f & un) === 0 && N.push(f), f = f.next;
    var k = N.length;
    if (k > 0) {
      var H = (o & pl) !== 0 && c === 0 ? n : null;
      if (a) {
        for (_ = 0; _ < k; _ += 1)
          N[_].a?.measure();
        for (_ = 0; _ < k; _ += 1)
          N[_].a?.fix();
      }
      rp(t, N, H, d);
    }
  }
  a && ro(() => {
    if (y !== void 0)
      for (C of y)
        C.a?.apply();
  }), Me.first = t.first && t.first.e, Me.last = h && h.e;
}
function ip(e, t, n, r) {
  (r & os) !== 0 && Li(e.v, t), (r & is) !== 0 ? Li(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function ru(e, t, n, r, o, i, s, a, l, c) {
  var d = (l & os) !== 0, p = (l & jd) === 0, f = d ? p ? /* @__PURE__ */ Pl(o, !1, !1) : Yn(o) : o, g = (l & is) === 0 ? s : Yn(s), h = {
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
    return h.e = Ft(() => a(e, f, g, c), be), h.e.prev = n && n.e, h.e.next = r && r.e, n === null ? t.first = h : (n.next = h, n.e.next = h.e), r !== null && (r.prev = h, r.e.prev = h.e), h;
  } finally {
  }
}
function ca(e, t, n) {
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
      /* @__PURE__ */ Qt(i)
    );
    o.before(i), i = s;
  }
}
function xn(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function Ss(e, t, n = !1, r = !1, o = !1) {
  var i = e, s = "";
  $e(() => {
    var a = (
      /** @type {Effect} */
      Me
    );
    if (s === (s = t() ?? "")) {
      be && gn();
      return;
    }
    if (a.nodes_start !== null && (Zl(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if (be) {
        Pe.data;
        for (var l = gn(), c = l; l !== null && (l.nodeType !== cr || /** @type {Comment} */
        l.data !== ""); )
          c = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ Qt(l);
        if (l === null)
          throw eo(), Zn;
        ht(Pe, c), i = ot(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var p = ks(d);
      if ((n || r) && (p = /** @type {Element} */
      /* @__PURE__ */ We(p)), ht(
        /** @type {TemplateNode} */
        /* @__PURE__ */ We(p),
        /** @type {TemplateNode} */
        p.lastChild
      ), n || r)
        for (; /* @__PURE__ */ We(p); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ We(p)
          );
      else
        i.before(p);
    }
  });
}
function Es(e, t, n) {
  be && gn();
  var r = e, o, i;
  Dn(() => {
    o !== (o = t()) && (i && (fr(i), i = null), o && (i = Ft(() => n(r, o))));
  }, xr), be && (r = Pe);
}
function sp(e, t, n, r, o, i) {
  let s = be;
  be && gn();
  var a, l, c = null;
  be && Pe.nodeType === af && (c = /** @type {Element} */
  Pe, gn());
  var d = (
    /** @type {TemplateNode} */
    be ? Pe : e
  ), p;
  Dn(() => {
    const f = t() || null;
    var g = f === "svg" ? Jd : null;
    f !== a && (p && (f === null ? fr(p, () => {
      p = null, l = null;
    }) : f === l ? Lr(p) : vt(p)), f && f !== l && (p = Ft(() => {
      if (c = be ? (
        /** @type {Element} */
        c
      ) : g ? document.createElementNS(g, f) : document.createElement(f), ht(c, c), r) {
        be && Jf(f) && c.append(document.createComment(""));
        var h = (
          /** @type {TemplateNode} */
          be ? /* @__PURE__ */ We(c) : c.appendChild(hn())
        );
        be && (h === null ? wt(!1) : ot(h)), r(c, h);
      }
      Me.nodes_end = c, d.before(c);
    })), a = f, a && (l = a));
  }, xr), s && (wt(!0), ot(d));
}
function ze(e, t) {
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
function rt(e, t, n) {
  to(() => {
    var r = et(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      no(() => {
        var s = n();
        $s(s), o && Cl(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function ap(e, t) {
  var n = void 0, r;
  Dn(() => {
    n !== (n = t()) && (r && (vt(r), r = null), n && (r = Ft(() => {
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
function lp() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = ou(e)) && (r && (r += " "), r += t);
  return r;
}
function wn(e) {
  return typeof e == "object" ? lp(e) : e ?? "";
}
const da = [...` 	
\r\f \v\uFEFF`];
function up(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || da.includes(r[s - 1])) && (a === r.length || da.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function fa(e, t = !1) {
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
function cp(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(bi)), o && l.push(...Object.keys(o).map(bi));
      var c = 0, d = -1;
      const y = e.length;
      for (var p = 0; p < y; p++) {
        var f = e[p];
        if (a ? f === "/" && e[p - 1] === "*" && (a = !1) : i ? i === f && (i = !1) : f === "/" && e[p + 1] === "*" ? a = !0 : f === '"' || f === "'" ? i = f : f === "(" ? s++ : f === ")" && s--, !a && i === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = p;
          else if (f === ";" || p === y - 1) {
            if (d !== -1) {
              var g = bi(e.substring(c, d).trim());
              if (!l.includes(g)) {
                f !== ";" && p++;
                var h = e.substring(c, p).trim();
                n += " " + h + ";";
              }
            }
            c = p + 1, d = -1;
          }
        }
      }
    }
    return r && (n += fa(r)), o && (n += fa(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function mt(e, t, n, r, o, i) {
  var s = e.__className;
  if (be || s !== n || s === void 0) {
    var a = up(n, r, i);
    (!be || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var c = !!i[l];
      (o == null || c !== !!o[l]) && e.classList.toggle(l, c);
    }
  return i;
}
function xi(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function ct(e, t, n, r) {
  var o = e.__style;
  if (be || o !== t) {
    var i = cp(t, r);
    (!be || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (xi(e, n?.[0], r[0]), xi(e, n?.[1], r[1], "important")) : xi(e, n, r));
  return r;
}
function Bi(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!Ur(t))
      return $f();
    for (var r of e.options)
      r.selected = t.includes(pa(r));
    return;
  }
  for (r of e.options) {
    var o = pa(r);
    if (xf(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function dp(e) {
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
  }), zl(() => {
    t.disconnect();
  });
}
function pa(e) {
  return "__value" in e ? e.__value : e.value;
}
const Cn = Symbol("class"), Rt = Symbol("style"), iu = Symbol("is custom element"), su = Symbol("is html");
function dn(e) {
  if (be) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          me(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          me(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, Pf(n), Zf();
  }
}
function _o(e, t) {
  var n = oi(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function ga(e, t) {
  var n = oi(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function fp(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function me(e, t, n, r) {
  var o = oi(e);
  be && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[sf] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && au(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function pp(e, t, n, r, o = !1) {
  var i = oi(e), s = i[iu], a = !i[su];
  let l = be && s;
  l && wt(!1);
  var c = t || {}, d = e.tagName === "OPTION";
  for (var p in t)
    p in n || (n[p] = null);
  n.class ? n.class = wn(n.class) : (r || n[Cn]) && (n.class = null), n[Rt] && (n.style ??= null);
  var f = au(e);
  for (const x in n) {
    let C = n[x];
    if (d && x === "value" && C == null) {
      e.value = e.__value = "", c[x] = C;
      continue;
    }
    if (x === "class") {
      var g = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      mt(e, g, C, r, t?.[Cn], n[Cn]), c[x] = C, c[Cn] = n[Cn];
      continue;
    }
    if (x === "style") {
      ct(e, C, t?.[Rt], n[Rt]), c[x] = C, c[Rt] = n[Rt];
      continue;
    }
    var h = c[x];
    if (!(C === h && !(C === void 0 && e.hasAttribute(x)))) {
      c[x] = C;
      var y = x[0] + x[1];
      if (y !== "$$")
        if (y === "on") {
          const _ = {}, V = "$$" + x;
          let L = x.slice(2);
          var $ = Yf(L);
          if (Kf(L) && (L = L.slice(0, -7), _.capture = !0), !$ && h) {
            if (C != null) continue;
            e.removeEventListener(L, c[V], _), c[V] = null;
          }
          if (C != null)
            if ($)
              e[`__${L}`] = C, On([L]);
            else {
              let Z = function(Y) {
                c[x].call(this, Y);
              };
              c[V] = _s(L, e, Z, _);
            }
          else $ && (e[`__${L}`] = void 0);
        } else if (x === "style")
          me(e, x, C);
        else if (x === "autofocus")
          If(
            /** @type {HTMLElement} */
            e,
            !!C
          );
        else if (!s && (x === "__value" || x === "value" && C != null))
          e.value = e.__value = C;
        else if (x === "selected" && d)
          fp(
            /** @type {HTMLOptionElement} */
            e,
            C
          );
        else {
          var w = x;
          a || (w = Xf(w));
          var P = w === "defaultValue" || w === "defaultChecked";
          if (C == null && !s && !P)
            if (i[x] = null, w === "value" || w === "checked") {
              let _ = (
                /** @type {HTMLInputElement} */
                e
              );
              const V = t === void 0;
              if (w === "value") {
                let L = _.defaultValue;
                _.removeAttribute(w), _.defaultValue = L, _.value = _.__value = V ? L : null;
              } else {
                let L = _.defaultChecked;
                _.removeAttribute(w), _.defaultChecked = L, _.checked = V ? L : !1;
              }
            } else
              e.removeAttribute(x);
          else P || f.includes(w) && (s || typeof C != "string") ? e[w] = C : typeof C != "function" && me(e, w, C);
        }
    }
  }
  return l && wt(!0), c;
}
function Xe(e, t, n = [], r, o = !1, i = $r) {
  const s = n.map(i);
  var a = void 0, l = {}, c = e.nodeName === "SELECT", d = !1;
  if (Dn(() => {
    var f = t(...s.map(u)), g = pp(e, a, f, r, o);
    d && c && "value" in f && Bi(
      /** @type {HTMLSelectElement} */
      e,
      f.value
    );
    for (let y of Object.getOwnPropertySymbols(l))
      f[y] || vt(l[y]);
    for (let y of Object.getOwnPropertySymbols(f)) {
      var h = f[y];
      y.description === Qd && (!a || h !== a[y]) && (l[y] && vt(l[y]), l[y] = Ft(() => ap(e, () => h))), g[y] = h;
    }
    a = g;
  }), c) {
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
      ), dp(p);
    });
  }
  d = !0;
}
function oi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [iu]: e.nodeName.includes("-"),
      [su]: e.namespaceURI === Ud
    }
  );
}
var ha = /* @__PURE__ */ new Map();
function au(e) {
  var t = ha.get(e.nodeName);
  if (t) return t;
  ha.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = vl(r);
    for (var i in n)
      n[i].set && t.push(i);
    r = Jo(r);
  }
  return t;
}
class Ps {
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
          Ps.entries.set(n.target, n);
          for (var r of this.#t.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var gp = /* @__PURE__ */ new Ps({
  box: "border-box"
});
function va(e, t, n) {
  var r = gp.observe(e, () => n(e[t]));
  to(() => (et(() => n(e[t])), r));
}
function ma(e, t) {
  return e === t || e?.[jt] === t;
}
function Mt(e = {}, t, n, r) {
  return to(() => {
    var o, i;
    return no(() => {
      o = i, i = [], et(() => {
        e !== n(...i) && (t(e, ...i), o && ma(n(...o), e) && t(null, ...o));
      });
    }), () => {
      ro(() => {
        i && ma(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function lu(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    qe
  ), n = t.l.u;
  if (!n) return;
  let r = () => $s(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ $r(() => {
      let a = !1;
      const l = t.s;
      for (const c in l)
        l[c] !== i[c] && (i[c] = l[c], a = !0);
      return a && o++, o;
    });
    r = () => u(s);
  }
  n.b.length && Al(() => {
    ya(t, r), Oo(n.b);
  }), je(() => {
    const o = et(() => n.m.map(rf));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && je(() => {
    ya(t, r), Oo(n.a);
  });
}
function ya(e, t) {
  if (e.l.s)
    for (const n of e.l.s) u(n);
  t();
}
let ho = !1;
function hp(e) {
  var t = ho;
  try {
    return ho = !1, [e(), ho];
  } finally {
    ho = t;
  }
}
const vp = {
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
function Te(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    vp
  );
}
const mp = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return u(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    if (!(t in e.special)) {
      var r = Me;
      try {
        Pn(e.parent_effect), e.special[t] = m(
          {
            get [t]() {
              return e.props[t];
            }
          },
          /** @type {string} */
          t,
          gl
        );
      } finally {
        Pn(r);
      }
    }
    return e.special[t](n), ia(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), ia(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function wa(e, t) {
  return new Proxy(
    {
      props: e,
      exclude: t,
      special: {},
      version: Yn(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        Me
      )
    },
    mp
  );
}
const yp = {
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
      const i = ln(o, t);
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
        const o = ln(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === jt || t === gs) return !1;
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
  return new Proxy({ props: e }, yp);
}
function m(e, t, n, r) {
  var o = !Cr || (n & Wd) !== 0, i = (n & Xd) !== 0, s = (n & Fd) !== 0, a = (
    /** @type {V} */
    r
  ), l = !0, c = () => (l && (l = !1, a = s ? et(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (i) {
    var p = jt in e || gs in e;
    d = ln(e, t)?.set ?? (p && t in e ? (x) => e[t] = x : void 0);
  }
  var f, g = !1;
  i ? [f, g] = hp(() => (
    /** @type {V} */
    e[t]
  )) : f = /** @type {V} */
  e[t], f === void 0 && r !== void 0 && (f = c(), d && (o && pf(), d(f)));
  var h;
  if (o ? h = () => {
    var x = (
      /** @type {V} */
      e[t]
    );
    return x === void 0 ? c() : (l = !0, x);
  } : h = () => {
    var x = (
      /** @type {V} */
      e[t]
    );
    return x !== void 0 && (a = /** @type {V} */
    void 0), x === void 0 ? a : x;
  }, o && (n & gl) === 0)
    return h;
  if (d) {
    var y = e.$$legacy;
    return function(x, C) {
      return arguments.length > 0 ? ((!o || !C || y || g) && d(C ? h() : x), x) : h();
    };
  }
  var $ = !1, w = ((n & Yd) !== 0 ? $r : ms)(() => ($ = !1, h()));
  i && u(w);
  var P = (
    /** @type {Effect} */
    Me
  );
  return function(x, C) {
    if (arguments.length > 0) {
      const _ = C ? u(w) : o && i ? Nt(x) : x;
      return K(w, _), $ = !0, a !== void 0 && (a = _), x;
    }
    return Sn && $ || (P.f & Qo) !== 0 ? w.v : u(w);
  };
}
function wp(e) {
  return new bp(e);
}
class bp {
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
      var a = /* @__PURE__ */ Pl(s, !1, !1);
      return n.set(i, a), a;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, s) {
          return u(n.get(s) ?? r(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === gs ? !0 : (u(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, a) {
          return K(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
        }
      }
    );
    this.#e = (t.hydrate ? Qf : tu)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && v(), this.#t = o.$$events;
    for (const i of Object.keys(this.#e))
      i === "$set" || i === "$destroy" || i === "$on" || Do(this, i, {
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
      ep(this.#e);
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
          r !== "default" && (i.name = r), O(o, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, n = xp(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = ko(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = wp({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = bs(() => {
        no(() => {
          this.$$r = !0;
          for (const r of Vo(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const o = ko(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = ko(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
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
    return Vo(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function ko(e, t, n, r) {
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
function xp(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function re(e, t, n, r, o, i) {
  let s = class extends uu {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Vo(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return Vo(t).forEach((a) => {
    Do(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = ko(a, l, t), this.$$d[a] = l;
        var c = this.$$c;
        if (c) {
          var d = ln(c, a)?.get;
          d ? c[a] = l : c.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    Do(s.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
var Cp = { value: () => {
} };
function ii() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new So(n);
}
function So(e) {
  this._ = e;
}
function $p(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
So.prototype = ii.prototype = {
  constructor: So,
  on: function(e, t) {
    var n = this._, r = $p(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = _p(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = ba(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = ba(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new So(e);
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
function _p(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function ba(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Cp, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Ri = "http://www.w3.org/1999/xhtml";
const xa = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ri,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function si(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), xa.hasOwnProperty(t) ? { space: xa[t], local: e } : e;
}
function kp(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Ri && t.documentElement.namespaceURI === Ri ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function Sp(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function cu(e) {
  var t = si(e);
  return (t.local ? Sp : kp)(t);
}
function Ep() {
}
function Ns(e) {
  return e == null ? Ep : function() {
    return this.querySelector(e);
  };
}
function Pp(e) {
  typeof e != "function" && (e = Ns(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, c, d = 0; d < s; ++d)
      (l = i[d]) && (c = e.call(l, l.__data__, d, i)) && ("__data__" in l && (c.__data__ = l.__data__), a[d] = c);
  return new _t(r, this._parents);
}
function Np(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Mp() {
  return [];
}
function du(e) {
  return e == null ? Mp : function() {
    return this.querySelectorAll(e);
  };
}
function Vp(e) {
  return function() {
    return Np(e.apply(this, arguments));
  };
}
function Dp(e) {
  typeof e == "function" ? e = Vp(e) : e = du(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, c = 0; c < a; ++c)
      (l = s[c]) && (r.push(e.call(l, l.__data__, c, s)), o.push(l));
  return new _t(r, o);
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
var Op = Array.prototype.find;
function Hp(e) {
  return function() {
    return Op.call(this.children, e);
  };
}
function Lp() {
  return this.firstElementChild;
}
function zp(e) {
  return this.select(e == null ? Lp : Hp(typeof e == "function" ? e : pu(e)));
}
var Tp = Array.prototype.filter;
function Ap() {
  return Array.from(this.children);
}
function Ip(e) {
  return function() {
    return Tp.call(this.children, e);
  };
}
function qp(e) {
  return this.selectAll(e == null ? Ap : Ip(typeof e == "function" ? e : pu(e)));
}
function Zp(e) {
  typeof e != "function" && (e = fu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, c = 0; c < s; ++c)
      (l = i[c]) && e.call(l, l.__data__, c, i) && a.push(l);
  return new _t(r, this._parents);
}
function gu(e) {
  return new Array(e.length);
}
function Bp() {
  return new _t(this._enter || this._groups.map(gu), this._parents);
}
function To(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
To.prototype = {
  constructor: To,
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
function Rp(e) {
  return function() {
    return e;
  };
}
function Kp(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, c = i.length; s < c; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new To(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function jp(e, t, n, r, o, i, s) {
  var a, l, c = /* @__PURE__ */ new Map(), d = t.length, p = i.length, f = new Array(d), g;
  for (a = 0; a < d; ++a)
    (l = t[a]) && (f[a] = g = s.call(l, l.__data__, a, t) + "", c.has(g) ? o[a] = l : c.set(g, l));
  for (a = 0; a < p; ++a)
    g = s.call(e, i[a], a, i) + "", (l = c.get(g)) ? (r[a] = l, l.__data__ = i[a], c.delete(g)) : n[a] = new To(e, i[a]);
  for (a = 0; a < d; ++a)
    (l = t[a]) && c.get(f[a]) === l && (o[a] = l);
}
function Yp(e) {
  return e.__data__;
}
function Wp(e, t) {
  if (!arguments.length) return Array.from(this, Yp);
  var n = t ? jp : Kp, r = this._parents, o = this._groups;
  typeof e != "function" && (e = Rp(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), c = 0; c < i; ++c) {
    var d = r[c], p = o[c], f = p.length, g = Xp(e.call(d, d && d.__data__, c, r)), h = g.length, y = a[c] = new Array(h), $ = s[c] = new Array(h), w = l[c] = new Array(f);
    n(d, p, y, $, w, g, t);
    for (var P = 0, x = 0, C, _; P < h; ++P)
      if (C = y[P]) {
        for (P >= x && (x = P + 1); !(_ = $[x]) && ++x < h; ) ;
        C._next = _ || null;
      }
  }
  return s = new _t(s, r), s._enter = a, s._exit = l, s;
}
function Xp(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Fp() {
  return new _t(this._exit || this._groups.map(gu), this._parents);
}
function Gp(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function Up(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var c = n[l], d = r[l], p = c.length, f = a[l] = new Array(p), g, h = 0; h < p; ++h)
      (g = c[h] || d[h]) && (f[h] = g);
  for (; l < o; ++l)
    a[l] = n[l];
  return new _t(a, this._parents);
}
function Jp() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function Qp(e) {
  e || (e = eg);
  function t(p, f) {
    return p && f ? e(p.__data__, f.__data__) : !p - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), c, d = 0; d < a; ++d)
      (c = s[d]) && (l[d] = c);
    l.sort(t);
  }
  return new _t(o, this._parents).order();
}
function eg(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function tg() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function ng() {
  return Array.from(this);
}
function rg() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function og() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function ig() {
  return !this.node();
}
function sg(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function ag(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function lg(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function ug(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function cg(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function dg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function fg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function pg(e, t) {
  var n = si(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? lg : ag : typeof t == "function" ? n.local ? fg : dg : n.local ? cg : ug)(n, t));
}
function hu(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function gg(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function hg(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function vg(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function mg(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? gg : typeof t == "function" ? vg : hg)(e, t, n ?? "")) : gr(this.node(), e);
}
function gr(e, t) {
  return e.style.getPropertyValue(t) || hu(e).getComputedStyle(e, null).getPropertyValue(t);
}
function yg(e) {
  return function() {
    delete this[e];
  };
}
function wg(e, t) {
  return function() {
    this[e] = t;
  };
}
function bg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function xg(e, t) {
  return arguments.length > 1 ? this.each((t == null ? yg : typeof t == "function" ? bg : wg)(e, t)) : this.node()[e];
}
function vu(e) {
  return e.trim().split(/^|\s+/);
}
function Ms(e) {
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
  for (var n = Ms(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function wu(e, t) {
  for (var n = Ms(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Cg(e) {
  return function() {
    yu(this, e);
  };
}
function $g(e) {
  return function() {
    wu(this, e);
  };
}
function _g(e, t) {
  return function() {
    (t.apply(this, arguments) ? yu : wu)(this, e);
  };
}
function kg(e, t) {
  var n = vu(e + "");
  if (arguments.length < 2) {
    for (var r = Ms(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? _g : t ? Cg : $g)(n, t));
}
function Sg() {
  this.textContent = "";
}
function Eg(e) {
  return function() {
    this.textContent = e;
  };
}
function Pg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Ng(e) {
  return arguments.length ? this.each(e == null ? Sg : (typeof e == "function" ? Pg : Eg)(e)) : this.node().textContent;
}
function Mg() {
  this.innerHTML = "";
}
function Vg(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Dg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Og(e) {
  return arguments.length ? this.each(e == null ? Mg : (typeof e == "function" ? Dg : Vg)(e)) : this.node().innerHTML;
}
function Hg() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Lg() {
  return this.each(Hg);
}
function zg() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Tg() {
  return this.each(zg);
}
function Ag(e) {
  var t = typeof e == "function" ? e : cu(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Ig() {
  return null;
}
function qg(e, t) {
  var n = typeof e == "function" ? e : cu(e), r = t == null ? Ig : typeof t == "function" ? t : Ns(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Zg() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Bg() {
  return this.each(Zg);
}
function Rg() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Kg() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function jg(e) {
  return this.select(e ? Kg : Rg);
}
function Yg(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Wg(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Xg(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function Fg(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Gg(e, t, n) {
  return function() {
    var r = this.__on, o, i = Wg(t);
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
function Ug(e, t, n) {
  var r = Xg(e + ""), o, i = r.length, s;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var l = 0, c = a.length, d; l < c; ++l)
        for (o = 0, d = a[l]; o < i; ++o)
          if ((s = r[o]).type === d.type && s.name === d.name)
            return d.value;
    }
    return;
  }
  for (a = t ? Gg : Fg, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function bu(e, t, n) {
  var r = hu(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Jg(e, t) {
  return function() {
    return bu(this, e, t);
  };
}
function Qg(e, t) {
  return function() {
    return bu(this, e, t.apply(this, arguments));
  };
}
function eh(e, t) {
  return this.each((typeof t == "function" ? Qg : Jg)(e, t));
}
function* th() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var xu = [null];
function _t(e, t) {
  this._groups = e, this._parents = t;
}
function oo() {
  return new _t([[document.documentElement]], xu);
}
function nh() {
  return this;
}
_t.prototype = oo.prototype = {
  constructor: _t,
  select: Pp,
  selectAll: Dp,
  selectChild: zp,
  selectChildren: qp,
  filter: Zp,
  data: Wp,
  enter: Bp,
  exit: Fp,
  join: Gp,
  merge: Up,
  selection: nh,
  order: Jp,
  sort: Qp,
  call: tg,
  nodes: ng,
  node: rg,
  size: og,
  empty: ig,
  each: sg,
  attr: pg,
  style: mg,
  property: xg,
  classed: kg,
  text: Ng,
  html: Og,
  raise: Lg,
  lower: Tg,
  append: Ag,
  insert: qg,
  remove: Bg,
  clone: jg,
  datum: Yg,
  on: Ug,
  dispatch: eh,
  [Symbol.iterator]: th
};
function Pt(e) {
  return typeof e == "string" ? new _t([[document.querySelector(e)]], [document.documentElement]) : new _t([[e]], xu);
}
function rh(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function Ot(e, t) {
  if (e = rh(e), t === void 0 && (t = e.currentTarget), t) {
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
const oh = { passive: !1 }, Zr = { capture: !0, passive: !1 };
function Ci(e) {
  e.stopImmediatePropagation();
}
function sr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Cu(e) {
  var t = e.document.documentElement, n = Pt(e).on("dragstart.drag", sr, Zr);
  "onselectstart" in t ? n.on("selectstart.drag", sr, Zr) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function $u(e, t) {
  var n = e.document.documentElement, r = Pt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", sr, Zr), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const vo = (e) => () => e;
function Ki(e, {
  sourceEvent: t,
  subject: n,
  target: r,
  identifier: o,
  active: i,
  x: s,
  y: a,
  dx: l,
  dy: c,
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
    dy: { value: c, enumerable: !0, configurable: !0 },
    _: { value: d }
  });
}
Ki.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function ih(e) {
  return !e.ctrlKey && !e.button;
}
function sh() {
  return this.parentNode;
}
function ah(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function lh() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function uh() {
  var e = ih, t = sh, n = ah, r = lh, o = {}, i = ii("start", "drag", "end"), s = 0, a, l, c, d, p = 0;
  function f(C) {
    C.on("mousedown.drag", g).filter(r).on("touchstart.drag", $).on("touchmove.drag", w, oh).on("touchend.drag touchcancel.drag", P).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(C, _) {
    if (!(d || !e.call(this, C, _))) {
      var V = x(this, t.call(this, C, _), C, _, "mouse");
      V && (Pt(C.view).on("mousemove.drag", h, Zr).on("mouseup.drag", y, Zr), Cu(C.view), Ci(C), c = !1, a = C.clientX, l = C.clientY, V("start", C));
    }
  }
  function h(C) {
    if (sr(C), !c) {
      var _ = C.clientX - a, V = C.clientY - l;
      c = _ * _ + V * V > p;
    }
    o.mouse("drag", C);
  }
  function y(C) {
    Pt(C.view).on("mousemove.drag mouseup.drag", null), $u(C.view, c), sr(C), o.mouse("end", C);
  }
  function $(C, _) {
    if (e.call(this, C, _)) {
      var V = C.changedTouches, L = t.call(this, C, _), Z = V.length, Y, j;
      for (Y = 0; Y < Z; ++Y)
        (j = x(this, L, C, _, V[Y].identifier, V[Y])) && (Ci(C), j("start", C, V[Y]));
    }
  }
  function w(C) {
    var _ = C.changedTouches, V = _.length, L, Z;
    for (L = 0; L < V; ++L)
      (Z = o[_[L].identifier]) && (sr(C), Z("drag", C, _[L]));
  }
  function P(C) {
    var _ = C.changedTouches, V = _.length, L, Z;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), L = 0; L < V; ++L)
      (Z = o[_[L].identifier]) && (Ci(C), Z("end", C, _[L]));
  }
  function x(C, _, V, L, Z, Y) {
    var j = i.copy(), N = Ot(Y || V, _), k, H, b;
    if ((b = n.call(C, new Ki("beforestart", {
      sourceEvent: V,
      target: f,
      identifier: Z,
      active: s,
      x: N[0],
      y: N[1],
      dx: 0,
      dy: 0,
      dispatch: j
    }), L)) != null)
      return k = b.x - N[0] || 0, H = b.y - N[1] || 0, function E(M, z, q) {
        var D = N, R;
        switch (M) {
          case "start":
            o[Z] = E, R = s++;
            break;
          case "end":
            delete o[Z], --s;
          // falls through
          case "drag":
            N = Ot(q || z, _), R = s;
            break;
        }
        j.call(
          M,
          C,
          new Ki(M, {
            sourceEvent: z,
            subject: b,
            target: f,
            identifier: Z,
            active: R,
            x: N[0] + k,
            y: N[1] + H,
            dx: N[0] - D[0],
            dy: N[1] - D[1],
            dispatch: j
          }),
          L
        );
      };
  }
  return f.filter = function(C) {
    return arguments.length ? (e = typeof C == "function" ? C : vo(!!C), f) : e;
  }, f.container = function(C) {
    return arguments.length ? (t = typeof C == "function" ? C : vo(C), f) : t;
  }, f.subject = function(C) {
    return arguments.length ? (n = typeof C == "function" ? C : vo(C), f) : n;
  }, f.touchable = function(C) {
    return arguments.length ? (r = typeof C == "function" ? C : vo(!!C), f) : r;
  }, f.on = function() {
    var C = i.on.apply(i, arguments);
    return C === i ? f : C;
  }, f.clickDistance = function(C) {
    return arguments.length ? (p = (C = +C) * C, f) : Math.sqrt(p);
  }, f;
}
function Vs(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function _u(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function io() {
}
var Br = 0.7, Ao = 1 / Br, ar = "\\s*([+-]?\\d+)\\s*", Rr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Yt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ch = /^#([0-9a-f]{3,8})$/, dh = new RegExp(`^rgb\\(${ar},${ar},${ar}\\)$`), fh = new RegExp(`^rgb\\(${Yt},${Yt},${Yt}\\)$`), ph = new RegExp(`^rgba\\(${ar},${ar},${ar},${Rr}\\)$`), gh = new RegExp(`^rgba\\(${Yt},${Yt},${Yt},${Rr}\\)$`), hh = new RegExp(`^hsl\\(${Rr},${Yt},${Yt}\\)$`), vh = new RegExp(`^hsla\\(${Rr},${Yt},${Yt},${Rr}\\)$`), Ca = {
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
Vs(io, Wn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: $a,
  // Deprecated! Use color.formatHex.
  formatHex: $a,
  formatHex8: mh,
  formatHsl: yh,
  formatRgb: _a,
  toString: _a
});
function $a() {
  return this.rgb().formatHex();
}
function mh() {
  return this.rgb().formatHex8();
}
function yh() {
  return ku(this).formatHsl();
}
function _a() {
  return this.rgb().formatRgb();
}
function Wn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = ch.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? ka(t) : n === 3 ? new pt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? mo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? mo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = dh.exec(e)) ? new pt(t[1], t[2], t[3], 1) : (t = fh.exec(e)) ? new pt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = ph.exec(e)) ? mo(t[1], t[2], t[3], t[4]) : (t = gh.exec(e)) ? mo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = hh.exec(e)) ? Pa(t[1], t[2] / 100, t[3] / 100, 1) : (t = vh.exec(e)) ? Pa(t[1], t[2] / 100, t[3] / 100, t[4]) : Ca.hasOwnProperty(e) ? ka(Ca[e]) : e === "transparent" ? new pt(NaN, NaN, NaN, 0) : null;
}
function ka(e) {
  return new pt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function mo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new pt(e, t, n, r);
}
function wh(e) {
  return e instanceof io || (e = Wn(e)), e ? (e = e.rgb(), new pt(e.r, e.g, e.b, e.opacity)) : new pt();
}
function ji(e, t, n, r) {
  return arguments.length === 1 ? wh(e) : new pt(e, t, n, r ?? 1);
}
function pt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Vs(pt, ji, _u(io, {
  brighter(e) {
    return e = e == null ? Ao : Math.pow(Ao, e), new pt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Br : Math.pow(Br, e), new pt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new pt(jn(this.r), jn(this.g), jn(this.b), Io(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Sa,
  // Deprecated! Use color.formatHex.
  formatHex: Sa,
  formatHex8: bh,
  formatRgb: Ea,
  toString: Ea
}));
function Sa() {
  return `#${qn(this.r)}${qn(this.g)}${qn(this.b)}`;
}
function bh() {
  return `#${qn(this.r)}${qn(this.g)}${qn(this.b)}${qn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ea() {
  const e = Io(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${jn(this.r)}, ${jn(this.g)}, ${jn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Io(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function jn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function qn(e) {
  return e = jn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Pa(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Lt(e, t, n, r);
}
function ku(e) {
  if (e instanceof Lt) return new Lt(e.h, e.s, e.l, e.opacity);
  if (e instanceof io || (e = Wn(e)), !e) return new Lt();
  if (e instanceof Lt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new Lt(s, a, l, e.opacity);
}
function xh(e, t, n, r) {
  return arguments.length === 1 ? ku(e) : new Lt(e, t, n, r ?? 1);
}
function Lt(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Vs(Lt, xh, _u(io, {
  brighter(e) {
    return e = e == null ? Ao : Math.pow(Ao, e), new Lt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Br : Math.pow(Br, e), new Lt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new pt(
      $i(e >= 240 ? e - 240 : e + 120, o, r),
      $i(e, o, r),
      $i(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Lt(Na(this.h), yo(this.s), yo(this.l), Io(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Io(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Na(this.h)}, ${yo(this.s) * 100}%, ${yo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Na(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function yo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function $i(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Ds = (e) => () => e;
function Ch(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function $h(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function _h(e) {
  return (e = +e) == 1 ? Su : function(t, n) {
    return n - t ? $h(t, n, e) : Ds(isNaN(t) ? n : t);
  };
}
function Su(e, t) {
  var n = t - e;
  return n ? Ch(e, n) : Ds(isNaN(e) ? t : e);
}
const qo = function e(t) {
  var n = _h(t);
  function r(o, i) {
    var s = n((o = ji(o)).r, (i = ji(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), c = Su(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = l(d), o.opacity = c(d), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function kh(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function Sh(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Eh(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = Hr(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function Ph(e, t) {
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
function Nh(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Hr(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var Yi = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, _i = new RegExp(Yi.source, "g");
function Mh(e) {
  return function() {
    return e;
  };
}
function Vh(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Eu(e, t) {
  var n = Yi.lastIndex = _i.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = Yi.exec(e)) && (o = _i.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: Bt(r, o) })), n = _i.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? Vh(l[0].x) : Mh(t) : (t = l.length, function(c) {
    for (var d = 0, p; d < t; ++d) a[(p = l[d]).i] = p.x(c);
    return a.join("");
  });
}
function Hr(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? Ds(t) : (n === "number" ? Bt : n === "string" ? (r = Wn(t)) ? (t = r, qo) : Eu : t instanceof Wn ? qo : t instanceof Date ? Ph : Sh(t) ? kh : Array.isArray(t) ? Eh : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Nh : Bt)(e, t);
}
var Ma = 180 / Math.PI, Pu = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Nu(e, t, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * r) && (n -= e * l, r -= t * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), e * r < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * Ma,
    skewX: Math.atan(l) * Ma,
    scaleX: s,
    scaleY: a
  };
}
var wo;
function Dh(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Pu : Nu(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Oh(e) {
  return e == null || (wo || (wo = document.createElementNS("http://www.w3.org/2000/svg", "g")), wo.setAttribute("transform", e), !(e = wo.transform.baseVal.consolidate())) ? Pu : (e = e.matrix, Nu(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Mu(e, t, n, r) {
  function o(c) {
    return c.length ? c.pop() + " " : "";
  }
  function i(c, d, p, f, g, h) {
    if (c !== p || d !== f) {
      var y = g.push("translate(", null, t, null, n);
      h.push({ i: y - 4, x: Bt(c, p) }, { i: y - 2, x: Bt(d, f) });
    } else (p || f) && g.push("translate(" + p + t + f + n);
  }
  function s(c, d, p, f) {
    c !== d ? (c - d > 180 ? d += 360 : d - c > 180 && (c += 360), f.push({ i: p.push(o(p) + "rotate(", null, r) - 2, x: Bt(c, d) })) : d && p.push(o(p) + "rotate(" + d + r);
  }
  function a(c, d, p, f) {
    c !== d ? f.push({ i: p.push(o(p) + "skewX(", null, r) - 2, x: Bt(c, d) }) : d && p.push(o(p) + "skewX(" + d + r);
  }
  function l(c, d, p, f, g, h) {
    if (c !== p || d !== f) {
      var y = g.push(o(g) + "scale(", null, ",", null, ")");
      h.push({ i: y - 4, x: Bt(c, p) }, { i: y - 2, x: Bt(d, f) });
    } else (p !== 1 || f !== 1) && g.push(o(g) + "scale(" + p + "," + f + ")");
  }
  return function(c, d) {
    var p = [], f = [];
    return c = e(c), d = e(d), i(c.translateX, c.translateY, d.translateX, d.translateY, p, f), s(c.rotate, d.rotate, p, f), a(c.skewX, d.skewX, p, f), l(c.scaleX, c.scaleY, d.scaleX, d.scaleY, p, f), c = d = null, function(g) {
      for (var h = -1, y = f.length, $; ++h < y; ) p[($ = f[h]).i] = $.x(g);
      return p.join("");
    };
  };
}
var Hh = Mu(Dh, "px, ", "px)", "deg)"), Lh = Mu(Oh, ", ", ")", ")"), zh = 1e-12;
function Va(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Th(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Ah(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Eo = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], c = i[2], d = s[0], p = s[1], f = s[2], g = d - a, h = p - l, y = g * g + h * h, $, w;
    if (y < zh)
      w = Math.log(f / c) / t, $ = function(L) {
        return [
          a + L * g,
          l + L * h,
          c * Math.exp(t * L * w)
        ];
      };
    else {
      var P = Math.sqrt(y), x = (f * f - c * c + r * y) / (2 * c * n * P), C = (f * f - c * c - r * y) / (2 * f * n * P), _ = Math.log(Math.sqrt(x * x + 1) - x), V = Math.log(Math.sqrt(C * C + 1) - C);
      w = (V - _) / t, $ = function(L) {
        var Z = L * w, Y = Va(_), j = c / (n * P) * (Y * Ah(t * Z + _) - Th(_));
        return [
          a + j * g,
          l + j * h,
          c * Y / Va(t * Z + _)
        ];
      };
    }
    return $.duration = w * 1e3 * t / Math.SQRT2, $;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
}(Math.SQRT2, 2, 4);
var hr = 0, Mr = 0, Er = 0, Vu = 1e3, Zo, Vr, Bo = 0, Xn = 0, ai = 0, Kr = typeof performance == "object" && performance.now ? performance : Date, Du = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Os() {
  return Xn || (Du(Ih), Xn = Kr.now() + ai);
}
function Ih() {
  Xn = 0;
}
function Ro() {
  this._call = this._time = this._next = null;
}
Ro.prototype = Ou.prototype = {
  constructor: Ro,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Os() : +n) + (t == null ? 0 : +t), !this._next && Vr !== this && (Vr ? Vr._next = this : Zo = this, Vr = this), this._call = e, this._time = n, Wi();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Wi());
  }
};
function Ou(e, t, n) {
  var r = new Ro();
  return r.restart(e, t, n), r;
}
function qh() {
  Os(), ++hr;
  for (var e = Zo, t; e; )
    (t = Xn - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --hr;
}
function Da() {
  Xn = (Bo = Kr.now()) + ai, hr = Mr = 0;
  try {
    qh();
  } finally {
    hr = 0, Bh(), Xn = 0;
  }
}
function Zh() {
  var e = Kr.now(), t = e - Bo;
  t > Vu && (ai -= t, Bo = e);
}
function Bh() {
  for (var e, t = Zo, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Zo = n);
  Vr = e, Wi(r);
}
function Wi(e) {
  if (!hr) {
    Mr && (Mr = clearTimeout(Mr));
    var t = e - Xn;
    t > 24 ? (e < 1 / 0 && (Mr = setTimeout(Da, e - Kr.now() - ai)), Er && (Er = clearInterval(Er))) : (Er || (Bo = Kr.now(), Er = setInterval(Zh, Vu)), hr = 1, Du(Da));
  }
}
function Oa(e, t, n) {
  var r = new Ro();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var Rh = ii("start", "end", "cancel", "interrupt"), Kh = [], Hu = 0, Ha = 1, Xi = 2, Po = 3, La = 4, Fi = 5, No = 6;
function li(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  jh(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: Rh,
    tween: Kh,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Hu
  });
}
function Hs(e, t) {
  var n = At(e, t);
  if (n.state > Hu) throw new Error("too late; already scheduled");
  return n;
}
function en(e, t) {
  var n = At(e, t);
  if (n.state > Po) throw new Error("too late; already running");
  return n;
}
function At(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function jh(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Ou(i, 0, n.time);
  function i(c) {
    n.state = Ha, n.timer.restart(s, n.delay, n.time), n.delay <= c && s(c - n.delay);
  }
  function s(c) {
    var d, p, f, g;
    if (n.state !== Ha) return l();
    for (d in r)
      if (g = r[d], g.name === n.name) {
        if (g.state === Po) return Oa(s);
        g.state === La ? (g.state = No, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[d]) : +d < t && (g.state = No, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[d]);
      }
    if (Oa(function() {
      n.state === Po && (n.state = La, n.timer.restart(a, n.delay, n.time), a(c));
    }), n.state = Xi, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Xi) {
      for (n.state = Po, o = new Array(f = n.tween.length), d = 0, p = -1; d < f; ++d)
        (g = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++p] = g);
      o.length = p + 1;
    }
  }
  function a(c) {
    for (var d = c < n.duration ? n.ease.call(null, c / n.duration) : (n.timer.restart(l), n.state = Fi, 1), p = -1, f = o.length; ++p < f; )
      o[p].call(e, d);
    n.state === Fi && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = No, n.timer.stop(), delete r[t];
    for (var c in r) return;
    delete e.__transition;
  }
}
function Mo(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > Xi && r.state < Fi, r.state = No, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function Yh(e) {
  return this.each(function() {
    Mo(this, e);
  });
}
function Wh(e, t) {
  var n, r;
  return function() {
    var o = en(this, e), i = o.tween;
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
function Xh(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = en(this, e), s = i.tween;
    if (s !== r) {
      o = (r = s).slice();
      for (var a = { name: t, value: n }, l = 0, c = o.length; l < c; ++l)
        if (o[l].name === t) {
          o[l] = a;
          break;
        }
      l === c && o.push(a);
    }
    i.tween = o;
  };
}
function Fh(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = At(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? Wh : Xh)(n, e, t));
}
function Ls(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = en(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return At(o, r).value[t];
  };
}
function Lu(e, t) {
  var n;
  return (typeof t == "number" ? Bt : t instanceof Wn ? qo : (n = Wn(t)) ? (t = n, qo) : Eu)(e, t);
}
function Gh(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Uh(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Jh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Qh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function e1(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function t1(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function n1(e, t) {
  var n = si(e), r = n === "transform" ? Lh : Lu;
  return this.attrTween(e, typeof t == "function" ? (n.local ? t1 : e1)(n, r, Ls(this, "attr." + e, t)) : t == null ? (n.local ? Uh : Gh)(n) : (n.local ? Qh : Jh)(n, r, t));
}
function r1(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function o1(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function i1(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && o1(e, i)), n;
  }
  return o._value = t, o;
}
function s1(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && r1(e, i)), n;
  }
  return o._value = t, o;
}
function a1(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = si(e);
  return this.tween(n, (r.local ? i1 : s1)(r, t));
}
function l1(e, t) {
  return function() {
    Hs(this, e).delay = +t.apply(this, arguments);
  };
}
function u1(e, t) {
  return t = +t, function() {
    Hs(this, e).delay = t;
  };
}
function c1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? l1 : u1)(t, e)) : At(this.node(), t).delay;
}
function d1(e, t) {
  return function() {
    en(this, e).duration = +t.apply(this, arguments);
  };
}
function f1(e, t) {
  return t = +t, function() {
    en(this, e).duration = t;
  };
}
function p1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? d1 : f1)(t, e)) : At(this.node(), t).duration;
}
function g1(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    en(this, e).ease = t;
  };
}
function h1(e) {
  var t = this._id;
  return arguments.length ? this.each(g1(t, e)) : At(this.node(), t).ease;
}
function v1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    en(this, e).ease = n;
  };
}
function m1(e) {
  if (typeof e != "function") throw new Error();
  return this.each(v1(this._id, e));
}
function y1(e) {
  typeof e != "function" && (e = fu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, c = 0; c < s; ++c)
      (l = i[c]) && e.call(l, l.__data__, c, i) && a.push(l);
  return new vn(r, this._parents, this._name, this._id);
}
function w1(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], c = n[a], d = l.length, p = s[a] = new Array(d), f, g = 0; g < d; ++g)
      (f = l[g] || c[g]) && (p[g] = f);
  for (; a < r; ++a)
    s[a] = t[a];
  return new vn(s, this._parents, this._name, this._id);
}
function b1(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function x1(e, t, n) {
  var r, o, i = b1(t) ? Hs : en;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function C1(e, t) {
  var n = this._id;
  return arguments.length < 2 ? At(this.node(), n).on.on(e) : this.each(x1(n, e, t));
}
function $1(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function _1() {
  return this.on("end.remove", $1(this._id));
}
function k1(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Ns(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, c = i[s] = new Array(l), d, p, f = 0; f < l; ++f)
      (d = a[f]) && (p = e.call(d, d.__data__, f, a)) && ("__data__" in d && (p.__data__ = d.__data__), c[f] = p, li(c[f], t, n, f, c, At(d, n)));
  return new vn(i, this._parents, t, n);
}
function S1(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = du(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], c = l.length, d, p = 0; p < c; ++p)
      if (d = l[p]) {
        for (var f = e.call(d, d.__data__, p, l), g, h = At(d, n), y = 0, $ = f.length; y < $; ++y)
          (g = f[y]) && li(g, t, n, y, f, h);
        i.push(f), s.push(d);
      }
  return new vn(i, s, t, n);
}
var E1 = oo.prototype.constructor;
function P1() {
  return new E1(this._groups, this._parents);
}
function N1(e, t) {
  var n, r, o;
  return function() {
    var i = gr(this, e), s = (this.style.removeProperty(e), gr(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function zu(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function M1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = gr(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function V1(e, t, n) {
  var r, o, i;
  return function() {
    var s = gr(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), gr(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function D1(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = en(this, e), c = l.on, d = l.value[i] == null ? a || (a = zu(t)) : void 0;
    (c !== n || o !== d) && (r = (n = c).copy()).on(s, o = d), l.on = r;
  };
}
function O1(e, t, n) {
  var r = (e += "") == "transform" ? Hh : Lu;
  return t == null ? this.styleTween(e, N1(e, r)).on("end.style." + e, zu(e)) : typeof t == "function" ? this.styleTween(e, V1(e, r, Ls(this, "style." + e, t))).each(D1(this._id, e)) : this.styleTween(e, M1(e, r, t), n).on("end.style." + e, null);
}
function H1(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function L1(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && H1(e, s, n)), r;
  }
  return i._value = t, i;
}
function z1(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, L1(e, t, n ?? ""));
}
function T1(e) {
  return function() {
    this.textContent = e;
  };
}
function A1(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function I1(e) {
  return this.tween("text", typeof e == "function" ? A1(Ls(this, "text", e)) : T1(e == null ? "" : e + ""));
}
function q1(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function Z1(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && q1(o)), t;
  }
  return r._value = e, r;
}
function B1(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, Z1(e));
}
function R1() {
  for (var e = this._name, t = this._id, n = Tu(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, c = 0; c < a; ++c)
      if (l = s[c]) {
        var d = At(l, t);
        li(l, e, n, c, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new vn(r, this._parents, e, n);
}
function K1() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var c = en(this, r), d = c.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), c.on = t;
    }), o === 0 && i();
  });
}
var j1 = 0;
function vn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Tu() {
  return ++j1;
}
var nn = oo.prototype;
vn.prototype = {
  constructor: vn,
  select: k1,
  selectAll: S1,
  selectChild: nn.selectChild,
  selectChildren: nn.selectChildren,
  filter: y1,
  merge: w1,
  selection: P1,
  transition: R1,
  call: nn.call,
  nodes: nn.nodes,
  node: nn.node,
  size: nn.size,
  empty: nn.empty,
  each: nn.each,
  on: C1,
  attr: n1,
  attrTween: a1,
  style: O1,
  styleTween: z1,
  text: I1,
  textTween: B1,
  remove: _1,
  tween: Fh,
  delay: c1,
  duration: p1,
  ease: h1,
  easeVarying: m1,
  end: K1,
  [Symbol.iterator]: nn[Symbol.iterator]
};
function Y1(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var W1 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Y1
};
function X1(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function F1(e) {
  var t, n;
  e instanceof vn ? (t = e._id, e = e._name) : (t = Tu(), (n = W1).time = Os(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, c = 0; c < a; ++c)
      (l = s[c]) && li(l, e, t, c, s, n || X1(l, t));
  return new vn(r, this._parents, e, t);
}
oo.prototype.interrupt = Yh;
oo.prototype.transition = F1;
const bo = (e) => () => e;
function G1(e, {
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
function on(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
on.prototype = {
  constructor: on,
  scale: function(e) {
    return e === 1 ? this : new on(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new on(this.k, this.x + this.k * e, this.y + this.k * t);
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
var ui = new on(1, 0, 0);
Au.prototype = on.prototype;
function Au(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return ui;
  return e.__zoom;
}
function ki(e) {
  e.stopImmediatePropagation();
}
function Pr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function U1(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function J1() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function za() {
  return this.__zoom || ui;
}
function Q1(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function ev() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function tv(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function Iu() {
  var e = U1, t = J1, n = tv, r = Q1, o = ev, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = Eo, c = ii("start", "zoom", "end"), d, p, f, g = 500, h = 150, y = 0, $ = 10;
  function w(b) {
    b.property("__zoom", za).on("wheel.zoom", Z, { passive: !1 }).on("mousedown.zoom", Y).on("dblclick.zoom", j).filter(o).on("touchstart.zoom", N).on("touchmove.zoom", k).on("touchend.zoom touchcancel.zoom", H).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  w.transform = function(b, E, M, z) {
    var q = b.selection ? b.selection() : b;
    q.property("__zoom", za), b !== q ? _(b, E, M, z) : q.interrupt().each(function() {
      V(this, arguments).event(z).start().zoom(null, typeof E == "function" ? E.apply(this, arguments) : E).end();
    });
  }, w.scaleBy = function(b, E, M, z) {
    w.scaleTo(b, function() {
      var q = this.__zoom.k, D = typeof E == "function" ? E.apply(this, arguments) : E;
      return q * D;
    }, M, z);
  }, w.scaleTo = function(b, E, M, z) {
    w.transform(b, function() {
      var q = t.apply(this, arguments), D = this.__zoom, R = M == null ? C(q) : typeof M == "function" ? M.apply(this, arguments) : M, U = D.invert(R), X = typeof E == "function" ? E.apply(this, arguments) : E;
      return n(x(P(D, X), R, U), q, s);
    }, M, z);
  }, w.translateBy = function(b, E, M, z) {
    w.transform(b, function() {
      return n(this.__zoom.translate(
        typeof E == "function" ? E.apply(this, arguments) : E,
        typeof M == "function" ? M.apply(this, arguments) : M
      ), t.apply(this, arguments), s);
    }, null, z);
  }, w.translateTo = function(b, E, M, z, q) {
    w.transform(b, function() {
      var D = t.apply(this, arguments), R = this.__zoom, U = z == null ? C(D) : typeof z == "function" ? z.apply(this, arguments) : z;
      return n(ui.translate(U[0], U[1]).scale(R.k).translate(
        typeof E == "function" ? -E.apply(this, arguments) : -E,
        typeof M == "function" ? -M.apply(this, arguments) : -M
      ), D, s);
    }, z, q);
  };
  function P(b, E) {
    return E = Math.max(i[0], Math.min(i[1], E)), E === b.k ? b : new on(E, b.x, b.y);
  }
  function x(b, E, M) {
    var z = E[0] - M[0] * b.k, q = E[1] - M[1] * b.k;
    return z === b.x && q === b.y ? b : new on(b.k, z, q);
  }
  function C(b) {
    return [(+b[0][0] + +b[1][0]) / 2, (+b[0][1] + +b[1][1]) / 2];
  }
  function _(b, E, M, z) {
    b.on("start.zoom", function() {
      V(this, arguments).event(z).start();
    }).on("interrupt.zoom end.zoom", function() {
      V(this, arguments).event(z).end();
    }).tween("zoom", function() {
      var q = this, D = arguments, R = V(q, D).event(z), U = t.apply(q, D), X = M == null ? C(U) : typeof M == "function" ? M.apply(q, D) : M, ee = Math.max(U[1][0] - U[0][0], U[1][1] - U[0][1]), W = q.__zoom, ce = typeof E == "function" ? E.apply(q, D) : E, te = l(W.invert(X).concat(ee / W.k), ce.invert(X).concat(ee / ce.k));
      return function(ge) {
        if (ge === 1) ge = ce;
        else {
          var F = te(ge), Ce = ee / F[2];
          ge = new on(Ce, X[0] - F[0] * Ce, X[1] - F[1] * Ce);
        }
        R.zoom(null, ge);
      };
    });
  }
  function V(b, E, M) {
    return !M && b.__zooming || new L(b, E);
  }
  function L(b, E) {
    this.that = b, this.args = E, this.active = 0, this.sourceEvent = null, this.extent = t.apply(b, E), this.taps = 0;
  }
  L.prototype = {
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
      var E = Pt(this.that).datum();
      c.call(
        b,
        this.that,
        new G1(b, {
          sourceEvent: this.sourceEvent,
          target: w,
          transform: this.that.__zoom,
          dispatch: c
        }),
        E
      );
    }
  };
  function Z(b, ...E) {
    if (!e.apply(this, arguments)) return;
    var M = V(this, E).event(b), z = this.__zoom, q = Math.max(i[0], Math.min(i[1], z.k * Math.pow(2, r.apply(this, arguments)))), D = Ot(b);
    if (M.wheel)
      (M.mouse[0][0] !== D[0] || M.mouse[0][1] !== D[1]) && (M.mouse[1] = z.invert(M.mouse[0] = D)), clearTimeout(M.wheel);
    else {
      if (z.k === q) return;
      M.mouse = [D, z.invert(D)], Mo(this), M.start();
    }
    Pr(b), M.wheel = setTimeout(R, h), M.zoom("mouse", n(x(P(z, q), M.mouse[0], M.mouse[1]), M.extent, s));
    function R() {
      M.wheel = null, M.end();
    }
  }
  function Y(b, ...E) {
    if (f || !e.apply(this, arguments)) return;
    var M = b.currentTarget, z = V(this, E, !0).event(b), q = Pt(b.view).on("mousemove.zoom", X, !0).on("mouseup.zoom", ee, !0), D = Ot(b, M), R = b.clientX, U = b.clientY;
    Cu(b.view), ki(b), z.mouse = [D, this.__zoom.invert(D)], Mo(this), z.start();
    function X(W) {
      if (Pr(W), !z.moved) {
        var ce = W.clientX - R, te = W.clientY - U;
        z.moved = ce * ce + te * te > y;
      }
      z.event(W).zoom("mouse", n(x(z.that.__zoom, z.mouse[0] = Ot(W, M), z.mouse[1]), z.extent, s));
    }
    function ee(W) {
      q.on("mousemove.zoom mouseup.zoom", null), $u(W.view, z.moved), Pr(W), z.event(W).end();
    }
  }
  function j(b, ...E) {
    if (e.apply(this, arguments)) {
      var M = this.__zoom, z = Ot(b.changedTouches ? b.changedTouches[0] : b, this), q = M.invert(z), D = M.k * (b.shiftKey ? 0.5 : 2), R = n(x(P(M, D), z, q), t.apply(this, E), s);
      Pr(b), a > 0 ? Pt(this).transition().duration(a).call(_, R, z, b) : Pt(this).call(w.transform, R, z, b);
    }
  }
  function N(b, ...E) {
    if (e.apply(this, arguments)) {
      var M = b.touches, z = M.length, q = V(this, E, b.changedTouches.length === z).event(b), D, R, U, X;
      for (ki(b), R = 0; R < z; ++R)
        U = M[R], X = Ot(U, this), X = [X, this.__zoom.invert(X), U.identifier], q.touch0 ? !q.touch1 && q.touch0[2] !== X[2] && (q.touch1 = X, q.taps = 0) : (q.touch0 = X, D = !0, q.taps = 1 + !!d);
      d && (d = clearTimeout(d)), D && (q.taps < 2 && (p = X[0], d = setTimeout(function() {
        d = null;
      }, g)), Mo(this), q.start());
    }
  }
  function k(b, ...E) {
    if (this.__zooming) {
      var M = V(this, E).event(b), z = b.changedTouches, q = z.length, D, R, U, X;
      for (Pr(b), D = 0; D < q; ++D)
        R = z[D], U = Ot(R, this), M.touch0 && M.touch0[2] === R.identifier ? M.touch0[0] = U : M.touch1 && M.touch1[2] === R.identifier && (M.touch1[0] = U);
      if (R = M.that.__zoom, M.touch1) {
        var ee = M.touch0[0], W = M.touch0[1], ce = M.touch1[0], te = M.touch1[1], ge = (ge = ce[0] - ee[0]) * ge + (ge = ce[1] - ee[1]) * ge, F = (F = te[0] - W[0]) * F + (F = te[1] - W[1]) * F;
        R = P(R, Math.sqrt(ge / F)), U = [(ee[0] + ce[0]) / 2, (ee[1] + ce[1]) / 2], X = [(W[0] + te[0]) / 2, (W[1] + te[1]) / 2];
      } else if (M.touch0) U = M.touch0[0], X = M.touch0[1];
      else return;
      M.zoom("touch", n(x(R, U, X), M.extent, s));
    }
  }
  function H(b, ...E) {
    if (this.__zooming) {
      var M = V(this, E).event(b), z = b.changedTouches, q = z.length, D, R;
      for (ki(b), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, g), D = 0; D < q; ++D)
        R = z[D], M.touch0 && M.touch0[2] === R.identifier ? delete M.touch0 : M.touch1 && M.touch1[2] === R.identifier && delete M.touch1;
      if (M.touch1 && !M.touch0 && (M.touch0 = M.touch1, delete M.touch1), M.touch0) M.touch0[1] = this.__zoom.invert(M.touch0[0]);
      else if (M.end(), M.taps === 2 && (R = Ot(R, this), Math.hypot(p[0] - R[0], p[1] - R[1]) < $)) {
        var U = Pt(this).on("dblclick.zoom");
        U && U.apply(this, arguments);
      }
    }
  }
  return w.wheelDelta = function(b) {
    return arguments.length ? (r = typeof b == "function" ? b : bo(+b), w) : r;
  }, w.filter = function(b) {
    return arguments.length ? (e = typeof b == "function" ? b : bo(!!b), w) : e;
  }, w.touchable = function(b) {
    return arguments.length ? (o = typeof b == "function" ? b : bo(!!b), w) : o;
  }, w.extent = function(b) {
    return arguments.length ? (t = typeof b == "function" ? b : bo([[+b[0][0], +b[0][1]], [+b[1][0], +b[1][1]]]), w) : t;
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
    var b = c.on.apply(c, arguments);
    return b === c ? w : b;
  }, w.clickDistance = function(b) {
    return arguments.length ? (y = (b = +b) * b, w) : Math.sqrt(y);
  }, w.tapDistance = function(b) {
    return arguments.length ? ($ = +b, w) : $;
  }, w;
}
const Fn = {
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
}, Gi = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], qu = ["Enter", " ", "Escape"], nv = {
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
var Wt;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(Wt || (Wt = {}));
var Ko;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(Ko || (Ko = {}));
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
var rn;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(rn || (rn = {}));
var jr;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(jr || (jr = {}));
var ve;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(ve || (ve = {}));
const Ta = {
  [ve.Left]: ve.Right,
  [ve.Right]: ve.Left,
  [ve.Top]: ve.Bottom,
  [ve.Bottom]: ve.Top
};
function rv(e, t) {
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
function Aa(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t?.has(i) || r.push(o);
  }), r.length && n(r);
}
function ov(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const Zu = (e) => "id" in e && "source" in e && "target" in e, iv = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), zs = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), so = (e, t = [0, 0]) => {
  const { width: n, height: r } = Ln(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, sv = (e, t = { nodeOrigin: [0, 0] }) => {
  if (process.env.NODE_ENV === "development" && !t.nodeLookup && console.warn("Please use `getNodesBounds` from `useReactFlow`/`useSvelteFlow` hook to ensure correct values for sub flows. If not possible, you have to provide a nodeLookup to support sub flows."), e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : zs(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? jo(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return ci(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return di(n);
}, ao = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = jo(r);
      n = ci(n, o);
    }
  }), di(n);
}, Ts = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...lo(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const c of e.values()) {
    const { measured: d, selectable: p = !0, hidden: f = !1 } = c;
    if (s && !p || f)
      continue;
    const g = d.width ?? c.width ?? c.initialWidth ?? null, h = d.height ?? c.height ?? c.initialHeight ?? null, y = Yr(a, yr(c)), $ = (g ?? 0) * (h ?? 0), w = i && y > 0;
    (!c.internals.handleBounds || w || y >= $ || c.dragging) && l.push(c);
  }
  return l;
}, av = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function lv(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t?.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function uv({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const a = lv(e, s), l = ao(a), c = As(l, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(c, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function Bu({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: c } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let p = o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", Fn.error005());
    else {
      const g = a.measured.width, h = a.measured.height;
      g && h && (p = [
        [l, c],
        [l + g, c + h]
      ]);
    }
  else a && wr(s.extent) && (p = [
    [s.extent[0][0] + l, s.extent[0][1] + c],
    [s.extent[1][0] + l, s.extent[1][1] + c]
  ]);
  const f = wr(p) ? Gn(t, p, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", Fn.error015()), {
    position: {
      x: f.x - l + (s.measured.width ?? 0) * d[0],
      y: f.y - c + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: f
  };
}
async function cv({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((p) => p.id)), s = [];
  for (const p of n) {
    if (p.deletable === !1)
      continue;
    const f = i.has(p.id), g = !f && p.parentId && s.find((h) => h.id === p.parentId);
    (f || g) && s.push(p);
  }
  const a = new Set(t.map((p) => p.id)), l = r.filter((p) => p.deletable !== !1), c = av(s, l);
  for (const p of l)
    a.has(p.id) && !c.find((f) => f.id === p.id) && c.push(p);
  if (!o)
    return {
      edges: c,
      nodes: s
    };
  const d = await o({
    nodes: s,
    edges: c
  });
  return typeof d == "boolean" ? d ? { edges: c, nodes: s } : { edges: [], nodes: [] } : d;
}
const mr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), Gn = (e = { x: 0, y: 0 }, t, n) => ({
  x: mr(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: mr(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function Ru(e, t, n) {
  const { width: r, height: o } = Ln(n), { x: i, y: s } = n.internals.positionAbsolute;
  return Gn(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const Ia = (e, t, n) => e < t ? mr(Math.abs(e - t), 1, t) / t : e > n ? -mr(Math.abs(e - n), 1, t) / t : 0, Ku = (e, t, n = 15, r = 40) => {
  const o = Ia(e.x, r, t.width - r) * n, i = Ia(e.y, r, t.height - r) * n;
  return [o, i];
}, ci = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Ji = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), di = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), yr = (e, t = [0, 0]) => {
  const { x: n, y: r } = zs(e) ? e.internals.positionAbsolute : so(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, jo = (e, t = [0, 0]) => {
  const { x: n, y: r } = zs(e) ? e.internals.positionAbsolute : so(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, ju = (e, t) => di(ci(Ji(e), Ji(t))), Yr = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, qa = (e) => sn(e.width) && sn(e.height) && sn(e.x) && sn(e.y), sn = (e) => !isNaN(e) && isFinite(e), Yu = (e, t) => {
  process.env.NODE_ENV === "development" && console.warn(`[React Flow]: ${t} Help: https://reactflow.dev/error#${e}`);
}, fi = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), lo = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? fi(a, s) : a;
}, Yo = ({ x: e, y: t }, [n, r, o]) => ({
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
function dv(e, t, n) {
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
function fv(e, t, n, r, o, i) {
  const { x: s, y: a } = Yo(e, [t, n, r]), { x: l, y: c } = Yo({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - l, p = i - c;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(p)
  };
}
const As = (e, t, n, r, o, i) => {
  const s = dv(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, c = Math.min(a, l), d = mr(c, r, o), p = e.x + e.width / 2, f = e.y + e.height / 2, g = t / 2 - p * d, h = n / 2 - f * d, y = fv(e, g, h, d, t, n), $ = {
    left: Math.min(y.left - s.left, 0),
    top: Math.min(y.top - s.top, 0),
    right: Math.min(y.right - s.right, 0),
    bottom: Math.min(y.bottom - s.bottom, 0)
  };
  return {
    x: g - $.left + $.right,
    y: h - $.top + $.bottom,
    zoom: d
  };
}, or = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function wr(e) {
  return e !== void 0 && e !== "parent";
}
function Ln(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function Wu(e) {
  return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function pv(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function gv(e) {
  return { ...nv, ...e || {} };
}
function Si(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = Kt(e), a = lo({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: c } = n ? fi(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: c,
    ...a
  };
}
const Xu = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), Fu = (e) => e?.getRootNode?.() || window?.document, hv = ["INPUT", "SELECT", "TEXTAREA"];
function Gu(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : hv.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const Uu = (e) => "clientX" in e, Kt = (e, t) => {
  const n = Uu(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
  return {
    x: r - (t?.left ?? 0),
    y: o - (t?.top ?? 0)
  };
}, Za = (e, t, n, r, o) => {
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
      ...Xu(s)
    };
  });
};
function vv({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, c = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - e), p = Math.abs(c - t);
  return [l, c, d, p];
}
function xo(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Ba({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case ve.Left:
      return [t - xo(t - r, i), n];
    case ve.Right:
      return [t + xo(r - t, i), n];
    case ve.Top:
      return [t, n - xo(n - o, i)];
    case ve.Bottom:
      return [t, n + xo(o - n, i)];
  }
}
function Ju({ sourceX: e, sourceY: t, sourcePosition: n = ve.Bottom, targetX: r, targetY: o, targetPosition: i = ve.Top, curvature: s = 0.25 }) {
  const [a, l] = Ba({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [c, d] = Ba({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [p, f, g, h] = vv({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: o,
    sourceControlX: a,
    sourceControlY: l,
    targetControlX: c,
    targetControlY: d
  });
  return [
    `M${e},${t} C${a},${l} ${c},${d} ${r},${o}`,
    p,
    f,
    g,
    h
  ];
}
function Qu({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function mv({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r, elevateOnSelect: o = !1 }) {
  if (r !== void 0)
    return r;
  const i = o && n ? 1e3 : 0, s = Math.max(e.parentId ? e.internals.z : 0, t.parentId ? t.internals.z : 0);
  return i + s;
}
function yv({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = ci(jo(e), jo(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Yr(s, di(i)) > 0;
}
const wv = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, bv = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), xv = (e, t) => {
  if (!e.source || !e.target)
    return Yu("006", Fn.error006()), t;
  let n;
  return Zu(e) ? n = { ...e } : n = {
    ...e,
    id: wv(e)
  }, bv(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function ec({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = Qu({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const Ra = {
  [ve.Left]: { x: -1, y: 0 },
  [ve.Right]: { x: 1, y: 0 },
  [ve.Top]: { x: 0, y: -1 },
  [ve.Bottom]: { x: 0, y: 1 }
}, Cv = ({ source: e, sourcePosition: t = ve.Bottom, target: n }) => t === ve.Left || t === ve.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Ka = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function $v({ source: e, sourcePosition: t = ve.Bottom, target: n, targetPosition: r = ve.Top, center: o, offset: i }) {
  const s = Ra[t], a = Ra[r], l = { x: e.x + s.x * i, y: e.y + s.y * i }, c = { x: n.x + a.x * i, y: n.y + a.y * i }, d = Cv({
    source: l,
    sourcePosition: t,
    target: c
  }), p = d.x !== 0 ? "x" : "y", f = d[p];
  let g = [], h, y;
  const $ = { x: 0, y: 0 }, w = { x: 0, y: 0 }, [P, x, C, _] = Qu({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (s[p] * a[p] === -1) {
    h = o.x ?? P, y = o.y ?? x;
    const V = [
      { x: h, y: l.y },
      { x: h, y: c.y }
    ], L = [
      { x: l.x, y },
      { x: c.x, y }
    ];
    s[p] === f ? g = p === "x" ? V : L : g = p === "x" ? L : V;
  } else {
    const V = [{ x: l.x, y: c.y }], L = [{ x: c.x, y: l.y }];
    if (p === "x" ? g = s.x === f ? L : V : g = s.y === f ? V : L, t === r) {
      const k = Math.abs(e[p] - n[p]);
      if (k <= i) {
        const H = Math.min(i - 1, i - k);
        s[p] === f ? $[p] = (l[p] > e[p] ? -1 : 1) * H : w[p] = (c[p] > n[p] ? -1 : 1) * H;
      }
    }
    if (t !== r) {
      const k = p === "x" ? "y" : "x", H = s[p] === a[k], b = l[k] > c[k], E = l[k] < c[k];
      (s[p] === 1 && (!H && b || H && E) || s[p] !== 1 && (!H && E || H && b)) && (g = p === "x" ? V : L);
    }
    const Z = { x: l.x + $.x, y: l.y + $.y }, Y = { x: c.x + w.x, y: c.y + w.y }, j = Math.max(Math.abs(Z.x - g[0].x), Math.abs(Y.x - g[0].x)), N = Math.max(Math.abs(Z.y - g[0].y), Math.abs(Y.y - g[0].y));
    j >= N ? (h = (Z.x + Y.x) / 2, y = g[0].y) : (h = g[0].x, y = (Z.y + Y.y) / 2);
  }
  return [[
    e,
    { x: l.x + $.x, y: l.y + $.y },
    ...g,
    { x: c.x + w.x, y: c.y + w.y },
    n
  ], h, y, C, _];
}
function _v(e, t, n, r) {
  const o = Math.min(Ka(e, t) / 2, Ka(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const c = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * c},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function Is({ sourceX: e, sourceY: t, sourcePosition: n = ve.Bottom, targetX: r, targetY: o, targetPosition: i = ve.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: c = 20 }) {
  const [d, p, f, g, h] = $v({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: c
  });
  return [d.reduce((y, $, w) => {
    let P = "";
    return w > 0 && w < d.length - 1 ? P = _v(d[w - 1], $, d[w + 1], s) : P = `${w === 0 ? "M" : "L"}${$.x} ${$.y}`, y += P, y;
  }, ""), p, f, g, h];
}
function ja(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function kv(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!ja(t) || !ja(n))
    return null;
  const r = t.internals.handleBounds || Ya(t.handles), o = n.internals.handleBounds || Ya(n.handles), i = Wa(r?.source ?? [], e.sourceHandle), s = Wa(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === vr.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return e.onError?.("008", Fn.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = i?.position || ve.Bottom, l = s?.position || ve.Top, c = Wr(t, i, a), d = Wr(n, s, l);
  return {
    sourceX: c.x,
    sourceY: c.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function Ya(e) {
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
function Wr(e, t, n = ve.Left, r = !1) {
  const o = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? Ln(e);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch (t?.position ?? n) {
    case ve.Top:
      return { x: o + s / 2, y: i };
    case ve.Right:
      return { x: o + s, y: i + a / 2 };
    case ve.Bottom:
      return { x: o + s / 2, y: i + a };
    case ve.Left:
      return { x: o, y: i + a / 2 };
  }
}
function Wa(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Qi(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function Sv(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const c = Qi(l, t);
      i.has(c) || (s.push({ id: c, color: l.color || n, ...l }), i.add(c));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function Ev(e, t, n, r, o) {
  let i = 0.5;
  o === "start" ? i = 0 : o === "end" && (i = 1);
  let s = [
    (e.x + e.width * i) * t.zoom + t.x,
    e.y * t.zoom + t.y - r
  ], a = [-100 * i, -100];
  switch (n) {
    case ve.Right:
      s = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [0, -100 * i];
      break;
    case ve.Bottom:
      s[1] = (e.y + e.height) * t.zoom + t.y + r, a[1] = 0;
      break;
    case ve.Left:
      s = [
        e.x * t.zoom + t.x - r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [-100, -100 * i];
      break;
  }
  return `translate(${s[0]}px, ${s[1]}px) translate(${a[0]}%, ${a[1]}%)`;
}
const qs = {
  nodeOrigin: [0, 0],
  nodeExtent: Gi,
  elevateNodesOnSelect: !0,
  defaults: {}
}, Pv = {
  ...qs,
  checkEquality: !0
};
function Zs(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function Nv(e, t, n) {
  const r = Zs(qs, n);
  for (const o of e.values())
    if (o.parentId)
      Bs(o, e, t, r);
    else {
      const i = so(o, r.nodeOrigin), s = wr(o.extent) ? o.extent : r.nodeExtent, a = Gn(i, s, Ln(o));
      o.internals.positionAbsolute = a;
    }
}
function Mv(e, t, n, r) {
  const o = Zs(Pv, r);
  let i = e.length > 0;
  const s = new Map(t), a = o?.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const l of e) {
    let c = s.get(l.id);
    if (o.checkEquality && l === c?.internals.userNode)
      t.set(l.id, c);
    else {
      const d = so(l, o.nodeOrigin), p = wr(l.extent) ? l.extent : o.nodeExtent, f = Gn(d, p, Ln(l));
      c = {
        ...o.defaults,
        ...l,
        measured: {
          width: l.measured?.width,
          height: l.measured?.height
        },
        internals: {
          positionAbsolute: f,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: l.measured ? c?.internals.handleBounds : void 0,
          z: tc(l, a),
          userNode: l
        }
      }, t.set(l.id, c);
    }
    (c.measured === void 0 || c.measured.width === void 0 || c.measured.height === void 0) && !c.hidden && (i = !1), l.parentId && Bs(c, t, n, r);
  }
  return i;
}
function Vv(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Bs(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: s } = Zs(qs, r), a = e.parentId, l = t.get(a);
  if (!l) {
    console.warn(`Parent node ${a} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  Vv(e, n);
  const c = o ? 1e3 : 0, { x: d, y: p, z: f } = Dv(e, l, i, s, c), { positionAbsolute: g } = e.internals, h = d !== g.x || p !== g.y;
  (h || f !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: h ? { x: d, y: p } : g,
      z: f
    }
  });
}
function tc(e, t) {
  return (sn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function Dv(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = Ln(e), l = so(e, n), c = wr(e.extent) ? Gn(l, e.extent, a) : l;
  let d = Gn({ x: i + c.x, y: s + c.y }, r, a);
  e.extent === "parent" && (d = Ru(d, a, t));
  const p = tc(e, o), f = t.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: f >= p ? f + 1 : p
  };
}
function Ov(e, t, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const a = t.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? yr(a), c = ju(l, s.rect);
    i.set(s.parentId, { expandedRect: c, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const c = a.internals.positionAbsolute, d = Ln(a), p = a.origin ?? r, f = s.x < c.x ? Math.round(Math.abs(c.x - s.x)) : 0, g = s.y < c.y ? Math.round(Math.abs(c.y - s.y)) : 0, h = Math.max(d.width, Math.round(s.width)), y = Math.max(d.height, Math.round(s.height)), $ = (h - d.width) * p[0], w = (y - d.height) * p[1];
    (f > 0 || g > 0 || $ || w) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - f + $,
        y: a.position.y - g + w
      }
    }), n.get(l)?.forEach((P) => {
      e.some((x) => x.id === P.id) || o.push({
        id: P.id,
        type: "position",
        position: {
          x: P.position.x + f,
          y: P.position.y + g
        }
      });
    })), (d.width < s.width || d.height < s.height || f || g) && o.push({
      id: l,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: h + (f ? p[0] * f - $ : 0),
        height: y + (g ? p[1] * g - w : 0)
      }
    });
  }), o;
}
function Hv(e, t, n, r, o, i) {
  const s = r?.querySelector(".xyflow__viewport");
  let a = !1;
  if (!s)
    return { changes: [], updatedInternals: a };
  const l = [], c = window.getComputedStyle(s), { m22: d } = new window.DOMMatrixReadOnly(c.transform), p = [];
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
    const h = Xu(f.nodeElement), y = g.measured.width !== h.width || g.measured.height !== h.height;
    if (h.width && h.height && (y || !g.internals.handleBounds || f.force)) {
      const $ = f.nodeElement.getBoundingClientRect(), w = wr(g.extent) ? g.extent : i;
      let { positionAbsolute: P } = g.internals;
      g.parentId && g.extent === "parent" ? P = Ru(P, h, t.get(g.parentId)) : w && (P = Gn(P, w, h));
      const x = {
        ...g,
        measured: h,
        internals: {
          ...g.internals,
          positionAbsolute: P,
          handleBounds: {
            source: Za("source", f.nodeElement, $, d, g.id),
            target: Za("target", f.nodeElement, $, d, g.id)
          }
        }
      };
      t.set(g.id, x), g.parentId && Bs(x, t, n, { nodeOrigin: o }), a = !0, y && (l.push({
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
    const f = Ov(p, t, n, o);
    l.push(...f);
  }
  return { changes: l, updatedInternals: a };
}
async function Lv({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function Xa(e, t, n, r, o, i) {
  let s = o;
  const a = r.get(s) || /* @__PURE__ */ new Map();
  r.set(s, a.set(n, t)), s = `${o}-${e}`;
  const l = r.get(s) || /* @__PURE__ */ new Map();
  if (r.set(s, l.set(n, t)), i) {
    s = `${o}-${e}-${i}`;
    const c = r.get(s) || /* @__PURE__ */ new Map();
    r.set(s, c.set(n, t));
  }
}
function zv(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, c = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    Xa("source", l, d, e, o, s), Xa("target", l, c, e, i, a), t.set(r.id, r);
  }
}
function Tv(e, t) {
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
function nc(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : nc(n, t) : !1;
}
function Fa(e, t, n) {
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
function Av(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !nc(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function Iv({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, c = { x: 0, y: 0 }, d = null, p = !1, f = null, g = !1, h = !1;
  function y({ noDragClassName: w, handleSelector: P, domNode: x, isSelectable: C, nodeId: _, nodeClickDistance: V = 0 }) {
    f = Pt(x);
    function L({ x: N, y: k }, H) {
      const { nodeLookup: b, nodeExtent: E, snapGrid: M, snapToGrid: z, nodeOrigin: q, onNodeDrag: D, onSelectionDrag: R, onError: U, updateNodePositions: X } = t();
      i = { x: N, y: k };
      let ee = !1, W = { x: 0, y: 0, x2: 0, y2: 0 };
      if (a.size > 1 && E) {
        const ce = ao(a);
        W = Ji(ce);
      }
      for (const [ce, te] of a) {
        if (!b.has(ce))
          continue;
        let ge = { x: N - te.distance.x, y: k - te.distance.y };
        z && (ge = fi(ge, M));
        let F = [
          [E[0][0], E[0][1]],
          [E[1][0], E[1][1]]
        ];
        if (a.size > 1 && E && !te.extent) {
          const { positionAbsolute: oe } = te.internals, Q = oe.x - W.x + E[0][0], fe = oe.x + te.measured.width - W.x2 + E[1][0], J = oe.y - W.y + E[0][1], ye = oe.y + te.measured.height - W.y2 + E[1][1];
          F = [
            [Q, J],
            [fe, ye]
          ];
        }
        const { position: Ce, positionAbsolute: pe } = Bu({
          nodeId: ce,
          nextPosition: ge,
          nodeLookup: b,
          nodeExtent: F,
          nodeOrigin: q,
          onError: U
        });
        ee = ee || te.position.x !== Ce.x || te.position.y !== Ce.y, te.position = Ce, te.internals.positionAbsolute = pe;
      }
      if (h = h || ee, !!ee && (X(a, !0), H && (r || D || !_ && R))) {
        const [ce, te] = Ei({
          nodeId: _,
          dragItems: a,
          nodeLookup: b
        });
        r?.(H, a, ce, te), D?.(H, ce, te), _ || R?.(H, te);
      }
    }
    async function Z() {
      if (!d)
        return;
      const { transform: N, panBy: k, autoPanSpeed: H, autoPanOnNodeDrag: b } = t();
      if (!b) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [E, M] = Ku(c, d, H);
      (E !== 0 || M !== 0) && (i.x = (i.x ?? 0) - E / N[2], i.y = (i.y ?? 0) - M / N[2], await k({ x: E, y: M }) && L(i, null)), s = requestAnimationFrame(Z);
    }
    function Y(N) {
      const { nodeLookup: k, multiSelectionActive: H, nodesDraggable: b, transform: E, snapGrid: M, snapToGrid: z, selectNodesOnDrag: q, onNodeDragStart: D, onSelectionDragStart: R, unselectNodesAndEdges: U } = t();
      p = !0, (!q || !C) && !H && _ && (k.get(_)?.selected || U()), C && q && _ && e?.(_);
      const X = Si(N.sourceEvent, { transform: E, snapGrid: M, snapToGrid: z, containerBounds: d });
      if (i = X, a = Av(k, b, X, _), a.size > 0 && (n || D || !_ && R)) {
        const [ee, W] = Ei({
          nodeId: _,
          dragItems: a,
          nodeLookup: k
        });
        n?.(N.sourceEvent, a, ee, W), D?.(N.sourceEvent, ee, W), _ || R?.(N.sourceEvent, W);
      }
    }
    const j = uh().clickDistance(V).on("start", (N) => {
      const { domNode: k, nodeDragThreshold: H, transform: b, snapGrid: E, snapToGrid: M } = t();
      d = k?.getBoundingClientRect() || null, g = !1, h = !1, H === 0 && Y(N), i = Si(N.sourceEvent, { transform: b, snapGrid: E, snapToGrid: M, containerBounds: d }), c = Kt(N.sourceEvent, d);
    }).on("drag", (N) => {
      const { autoPanOnNodeDrag: k, transform: H, snapGrid: b, snapToGrid: E, nodeDragThreshold: M, nodeLookup: z } = t(), q = Si(N.sourceEvent, { transform: H, snapGrid: b, snapToGrid: E, containerBounds: d });
      if ((N.sourceEvent.type === "touchmove" && N.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      _ && !z.has(_)) && (g = !0), !g) {
        if (!l && k && p && (l = !0, Z()), !p) {
          const D = q.xSnapped - (i.x ?? 0), R = q.ySnapped - (i.y ?? 0);
          Math.sqrt(D * D + R * R) > M && Y(N);
        }
        (i.x !== q.xSnapped || i.y !== q.ySnapped) && a && p && (c = Kt(N.sourceEvent, d), L(q, N.sourceEvent));
      }
    }).on("end", (N) => {
      if (!(!p || g) && (l = !1, p = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: k, updateNodePositions: H, onNodeDragStop: b, onSelectionDragStop: E } = t();
        if (h && (H(a, !1), h = !1), o || b || !_ && E) {
          const [M, z] = Ei({
            nodeId: _,
            dragItems: a,
            nodeLookup: k,
            dragging: !1
          });
          o?.(N.sourceEvent, a, M, z), b?.(N.sourceEvent, M, z), _ || E?.(N.sourceEvent, z);
        }
      }
    }).filter((N) => {
      const k = N.target;
      return !N.button && (!w || !Fa(k, `.${w}`, x)) && (!P || Fa(k, P, x));
    });
    f.call(j);
  }
  function $() {
    f?.on(".drag", null);
  }
  return {
    update: y,
    destroy: $
  };
}
function qv(e, t, n) {
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
const Zv = 250;
function Bv(e, t, n, r) {
  let o = [], i = 1 / 0;
  const s = qv(e, n, t + Zv);
  for (const a of s) {
    const l = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const c of l) {
      if (r.nodeId === c.nodeId && r.type === c.type && r.id === c.id)
        continue;
      const { x: d, y: p } = Wr(a, c, c.position, !0), f = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(p - e.y, 2));
      f > t || (f < i ? (o = [{ ...c, x: d, y: p }], i = f) : f === i && o.push({ ...c, x: d, y: p }));
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
function rc(e, t, n, r, o, i = !1) {
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((c) => c.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...Wr(s, l, l.position, !0) } : l;
}
function oc(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function Rv(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const ic = () => !0;
function Kv(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: c, autoPanOnConnect: d, flowId: p, panBy: f, cancelConnection: g, onConnectStart: h, onConnect: y, onConnectEnd: $, isValidConnection: w = ic, onReconnectEnd: P, updateConnection: x, getTransform: C, getFromHandle: _, autoPanSpeed: V, dragThreshold: L = 1 }) {
  const Z = Fu(e.target);
  let Y = 0, j;
  const { x: N, y: k } = Kt(e), H = Z?.elementFromPoint(N, k), b = oc(i, H), E = a?.getBoundingClientRect();
  let M = !1;
  if (!E || !b)
    return;
  const z = rc(o, b, r, l, t);
  if (!z)
    return;
  let q = Kt(e, E), D = !1, R = null, U = !1, X = null;
  function ee() {
    if (!d || !E)
      return;
    const [pe, oe] = Ku(q, E, V);
    f({ x: pe, y: oe }), Y = requestAnimationFrame(ee);
  }
  const W = {
    ...z,
    nodeId: o,
    type: b,
    position: z.position
  }, ce = l.get(o);
  let te = {
    inProgress: !0,
    isValid: null,
    from: Wr(ce, W, ve.Left, !0),
    fromHandle: W,
    fromPosition: W.position,
    fromNode: ce,
    to: q,
    toHandle: null,
    toPosition: Ta[W.position],
    toNode: null
  };
  function ge() {
    M = !0, x(te), h?.(e, { nodeId: o, handleId: r, handleType: b });
  }
  L === 0 && ge();
  function F(pe) {
    if (!M) {
      const { x: J, y: ye } = Kt(pe), ne = J - N, _e = ye - k;
      if (!(ne * ne + _e * _e > L * L))
        return;
      ge();
    }
    if (!_() || !W) {
      Ce(pe);
      return;
    }
    const oe = C();
    q = Kt(pe, E), j = Bv(lo(q, oe, !1, [1, 1]), n, l, W), D || (ee(), D = !0);
    const Q = sc(pe, {
      handle: j,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: w,
      doc: Z,
      lib: c,
      flowId: p,
      nodeLookup: l
    });
    X = Q.handleDomNode, R = Q.connection, U = Rv(!!j, Q.isValid);
    const fe = {
      // from stays the same
      ...te,
      isValid: U,
      to: Q.toHandle && U ? Yo({ x: Q.toHandle.x, y: Q.toHandle.y }, oe) : q,
      toHandle: Q.toHandle,
      toPosition: U && Q.toHandle ? Q.toHandle.position : Ta[W.position],
      toNode: Q.toHandle ? l.get(Q.toHandle.nodeId) : null
    };
    U && j && te.toHandle && fe.toHandle && te.toHandle.type === fe.toHandle.type && te.toHandle.nodeId === fe.toHandle.nodeId && te.toHandle.id === fe.toHandle.id && te.to.x === fe.to.x && te.to.y === fe.to.y || (x(fe), te = fe);
  }
  function Ce(pe) {
    if (M) {
      (j || X) && R && U && y?.(R);
      const { inProgress: oe, ...Q } = te, fe = {
        ...Q,
        toPosition: te.toHandle ? te.toPosition : null
      };
      $?.(pe, fe), i && P?.(pe, fe);
    }
    g(), cancelAnimationFrame(Y), D = !1, U = !1, R = null, X = null, Z.removeEventListener("mousemove", F), Z.removeEventListener("mouseup", Ce), Z.removeEventListener("touchmove", F), Z.removeEventListener("touchend", Ce);
  }
  Z.addEventListener("mousemove", F), Z.addEventListener("mouseup", Ce), Z.addEventListener("touchmove", F), Z.addEventListener("touchend", Ce);
}
function sc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: c = ic, nodeLookup: d }) {
  const p = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: g, y: h } = Kt(e), y = s.elementFromPoint(g, h), $ = y?.classList.contains(`${a}-flow__handle`) ? y : f, w = {
    handleDomNode: $,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if ($) {
    const P = oc(void 0, $), x = $.getAttribute("data-nodeid"), C = $.getAttribute("data-handleid"), _ = $.classList.contains("connectable"), V = $.classList.contains("connectableend");
    if (!x || !P)
      return w;
    const L = {
      source: p ? x : r,
      sourceHandle: p ? C : o,
      target: p ? r : x,
      targetHandle: p ? o : C
    };
    w.connection = L;
    const Z = _ && V && (n === vr.Strict ? p && P === "source" || !p && P === "target" : x !== r || C !== o);
    w.isValid = Z && c(L), w.toHandle = rc(x, P, C, d, n, !0);
  }
  return w;
}
const Ga = {
  onPointerDown: Kv,
  isValid: sc
};
function jv({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Pt(e);
  function i({ translateExtent: a, width: l, height: c, zoomStep: d = 10, pannable: p = !0, zoomable: f = !0, inversePan: g = !1 }) {
    const h = (x) => {
      const C = n();
      if (x.sourceEvent.type !== "wheel" || !t)
        return;
      const _ = -x.sourceEvent.deltaY * (x.sourceEvent.deltaMode === 1 ? 0.05 : x.sourceEvent.deltaMode ? 1 : 2e-3) * d, V = C[2] * Math.pow(2, _);
      t.scaleTo(V);
    };
    let y = [0, 0];
    const $ = (x) => {
      (x.sourceEvent.type === "mousedown" || x.sourceEvent.type === "touchstart") && (y = [
        x.sourceEvent.clientX ?? x.sourceEvent.touches[0].clientX,
        x.sourceEvent.clientY ?? x.sourceEvent.touches[0].clientY
      ]);
    }, w = (x) => {
      const C = n();
      if (x.sourceEvent.type !== "mousemove" && x.sourceEvent.type !== "touchmove" || !t)
        return;
      const _ = [
        x.sourceEvent.clientX ?? x.sourceEvent.touches[0].clientX,
        x.sourceEvent.clientY ?? x.sourceEvent.touches[0].clientY
      ], V = [_[0] - y[0], _[1] - y[1]];
      y = _;
      const L = r() * Math.max(C[2], Math.log(C[2])) * (g ? -1 : 1), Z = {
        x: C[0] - V[0] * L,
        y: C[1] - V[1] * L
      }, Y = [
        [0, 0],
        [l, c]
      ];
      t.setViewportConstrained({
        x: Z.x,
        y: Z.y,
        zoom: C[2]
      }, Y, a);
    }, P = Iu().on("start", $).on("zoom", p ? w : null).on("zoom.wheel", f ? h : null);
    o.call(P, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: Ot
  };
}
const Yv = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, pi = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Pi = ({ x: e, y: t, zoom: n }) => ui.translate(e, t).scale(n), ir = (e, t) => e.target.closest(`.${t}`), ac = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), Wv = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, Ni = (e, t = 0, n = Wv, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, lc = (e) => {
  const t = e.ctrlKey && or() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function Xv({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: c }) {
  return (d) => {
    if (ir(d, t))
      return !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const p = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const $ = Ot(d), w = lc(d), P = p * Math.pow(2, w);
      r.scaleTo(n, P, $, d);
      return;
    }
    const f = d.deltaMode === 1 ? 20 : 1;
    let g = o === Wt.Vertical ? 0 : d.deltaX * f, h = o === Wt.Horizontal ? 0 : d.deltaY * f;
    !or() && d.shiftKey && o !== Wt.Vertical && (g = d.deltaY * f, h = 0), r.translateBy(
      n,
      -(g / p) * i,
      -(h / p) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const y = pi(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, a?.(d, y)), e.isPanScrolling && (l?.(d, y), e.panScrollTimeout = setTimeout(() => {
      c?.(d, y), e.isPanScrolling = !1;
    }, 150));
  };
}
function Fv({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = ir(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function Gv({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = pi(r.transform);
    e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, o);
  };
}
function Uv({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && ac(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, pi(i.transform));
  };
}
function Jv({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && ac(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && Yv(e.prevViewport, s.transform))) {
      const a = pi(s.transform);
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
function Qv({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: c }) {
  return (d) => {
    const p = e || t, f = n && d.ctrlKey;
    if (d.button === 1 && d.type === "mousedown" && (ir(d, `${c}-flow__node`) || ir(d, `${c}-flow__edge`)))
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
function e0({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: s, onPanZoomStart: a, onPanZoomEnd: l, onDraggingChange: c }) {
  const d = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, p = e.getBoundingClientRect(), f = Iu().clickDistance(!sn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), g = Pt(e).call(f);
  x({
    x: i.x,
    y: i.y,
    zoom: mr(i.zoom, t, n)
  }, [
    [0, 0],
    [p.width, p.height]
  ], o);
  const h = g.on("wheel.zoom"), y = g.on("dblclick.zoom");
  f.wheelDelta(lc);
  function $(k, H) {
    return g ? new Promise((b) => {
      f?.interpolate(H?.interpolate === "linear" ? Hr : Eo).transform(Ni(g, H?.duration, H?.ease, () => b(!0)), k);
    }) : Promise.resolve(!1);
  }
  function w({ noWheelClassName: k, noPanClassName: H, onPaneContextMenu: b, userSelectionActive: E, panOnScroll: M, panOnDrag: z, panOnScrollMode: q, panOnScrollSpeed: D, preventScrolling: R, zoomOnPinch: U, zoomOnScroll: X, zoomOnDoubleClick: ee, zoomActivationKeyPressed: W, lib: ce, onTransformChange: te }) {
    E && !d.isZoomingOrPanning && P();
    const ge = M && !W && !E ? Xv({
      zoomPanValues: d,
      noWheelClassName: k,
      d3Selection: g,
      d3Zoom: f,
      panOnScrollMode: q,
      panOnScrollSpeed: D,
      zoomOnPinch: U,
      onPanZoomStart: a,
      onPanZoom: s,
      onPanZoomEnd: l
    }) : Fv({
      noWheelClassName: k,
      preventScrolling: R,
      d3ZoomHandler: h
    });
    if (g.on("wheel.zoom", ge, { passive: !1 }), !E) {
      const Ce = Gv({
        zoomPanValues: d,
        onDraggingChange: c,
        onPanZoomStart: a
      });
      f.on("start", Ce);
      const pe = Uv({
        zoomPanValues: d,
        panOnDrag: z,
        onPaneContextMenu: !!b,
        onPanZoom: s,
        onTransformChange: te
      });
      f.on("zoom", pe);
      const oe = Jv({
        zoomPanValues: d,
        panOnDrag: z,
        panOnScroll: M,
        onPaneContextMenu: b,
        onPanZoomEnd: l,
        onDraggingChange: c
      });
      f.on("end", oe);
    }
    const F = Qv({
      zoomActivationKeyPressed: W,
      panOnDrag: z,
      zoomOnScroll: X,
      panOnScroll: M,
      zoomOnDoubleClick: ee,
      zoomOnPinch: U,
      userSelectionActive: E,
      noPanClassName: H,
      noWheelClassName: k,
      lib: ce
    });
    f.filter(F), ee ? g.on("dblclick.zoom", y) : g.on("dblclick.zoom", null);
  }
  function P() {
    f.on("zoom", null);
  }
  async function x(k, H, b) {
    const E = Pi(k), M = f?.constrain()(E, H, b);
    return M && await $(M), new Promise((z) => z(M));
  }
  async function C(k, H) {
    const b = Pi(k);
    return await $(b, H), new Promise((E) => E(b));
  }
  function _(k) {
    if (g) {
      const H = Pi(k), b = g.property("__zoom");
      (b.k !== k.zoom || b.x !== k.x || b.y !== k.y) && f?.transform(g, H, null, { sync: !0 });
    }
  }
  function V() {
    const k = g ? Au(g.node()) : { x: 0, y: 0, k: 1 };
    return { x: k.x, y: k.y, zoom: k.k };
  }
  function L(k, H) {
    return g ? new Promise((b) => {
      f?.interpolate(H?.interpolate === "linear" ? Hr : Eo).scaleTo(Ni(g, H?.duration, H?.ease, () => b(!0)), k);
    }) : Promise.resolve(!1);
  }
  function Z(k, H) {
    return g ? new Promise((b) => {
      f?.interpolate(H?.interpolate === "linear" ? Hr : Eo).scaleBy(Ni(g, H?.duration, H?.ease, () => b(!0)), k);
    }) : Promise.resolve(!1);
  }
  function Y(k) {
    f?.scaleExtent(k);
  }
  function j(k) {
    f?.translateExtent(k);
  }
  function N(k) {
    const H = !sn(k) || k < 0 ? 0 : k;
    f?.clickDistance(H);
  }
  return {
    update: w,
    destroy: P,
    setViewport: C,
    setViewportConstrained: x,
    getViewport: V,
    scaleTo: L,
    scaleBy: Z,
    setScaleExtent: Y,
    setTranslateExtent: j,
    syncViewport: _,
    setClickDistance: N
  };
}
var Ua;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Ua || (Ua = {}));
var t0 = /* @__PURE__ */ G("<div><!></div>");
function Nn(e, t) {
  le(t, !0);
  let n = m(t, "id", 7, null), r = m(t, "type", 7, "source"), o = m(t, "position", 23, () => ve.Top), i = m(t, "style", 7), s = m(t, "class", 7), a = m(t, "isConnectable", 7), l = m(t, "isConnectableStart", 7, !0), c = m(t, "isConnectableEnd", 7, !0), d = m(t, "isValidConnection", 7), p = m(t, "onconnect", 7), f = m(t, "ondisconnect", 7), g = m(t, "children", 7), h = /* @__PURE__ */ Te(t, [
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
  const y = pn("svelteflow__node_id"), $ = pn("svelteflow__node_connectable");
  let w = /* @__PURE__ */ S(() => r() === "target"), P = /* @__PURE__ */ S(() => a() !== void 0 ? a() : $.value), x = Dt(), C = /* @__PURE__ */ S(() => x.ariaLabelConfig), _ = null;
  Al(() => {
    if (p() || f()) {
      x.edges;
      let D = x.connectionLookup.get(`${y}-${r()}${n() ? `-${n()}` : ""}`);
      if (_ && !rv(D, _)) {
        const R = D ?? /* @__PURE__ */ new Map();
        Aa(_, R, f()), Aa(R, _, p());
      }
      _ = new Map(D);
    }
  });
  let V = /* @__PURE__ */ S(() => {
    if (!x.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: D, toHandle: R, isValid: U } = x.connection, X = D && D.nodeId === y && D.type === r() && D.id === n(), ee = R && R.nodeId === y && R.type === r() && R.id === n(), W = x.connectionMode === vr.Strict ? D?.type !== r() : y !== D?.nodeId || n() !== D?.id;
    return [
      !0,
      X,
      ee,
      W,
      ee && U
    ];
  }), L = /* @__PURE__ */ S(() => Jr(u(V), 5)), Z = /* @__PURE__ */ S(() => u(L)[0]), Y = /* @__PURE__ */ S(() => u(L)[1]), j = /* @__PURE__ */ S(() => u(L)[2]), N = /* @__PURE__ */ S(() => u(L)[3]), k = /* @__PURE__ */ S(() => u(L)[4]);
  function H(D) {
    const R = x.onbeforeconnect?.(D) ?? D;
    R && (x.addEdge(R), x.onconnect?.(D));
  }
  function b(D) {
    const R = Uu(D);
    (R && D.button === 0 || !R) && Ga.onPointerDown(D, {
      handleId: n(),
      nodeId: y,
      isTarget: u(w),
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
      onConnect: H,
      onConnectStart: (U, X) => {
        x.onconnectstart?.(U, {
          nodeId: X.nodeId,
          handleId: X.handleId,
          handleType: X.handleType
        });
      },
      onConnectEnd: (U, X) => {
        x.onconnectend?.(U, X);
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
    const R = Fu(D.target), U = d() ?? x.isValidConnection, { connectionMode: X, clickConnectStartHandle: ee, flowId: W, nodeLookup: ce } = x, { connection: te, isValid: ge } = Ga.isValid(D, {
      handle: { nodeId: y, id: n(), type: r() },
      connectionMode: X,
      fromNodeId: ee.nodeId,
      fromHandleId: ee.id ?? null,
      fromType: ee.type,
      isValidConnection: U,
      flowId: W,
      doc: R,
      lib: "svelte",
      nodeLookup: ce
    });
    ge && te && H(te);
    const F = structuredClone(_l(x.connection));
    delete F.inProgress, F.toPosition = F.toHandle ? F.toHandle.position : null, x.onclickconnectend?.(D, F), x.clickConnectStartHandle = null;
  }
  var M = t0(), z = () => {
  };
  Xe(
    M,
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
      onkeypress: z,
      style: i(),
      role: "button",
      "aria-label": u(C)["handle.ariaLabel"],
      tabindex: "-1",
      ...h,
      [Cn]: D
    }),
    [
      () => ({
        valid: u(k),
        connectingto: u(j),
        connectingfrom: u(Y),
        source: !u(w),
        target: u(w),
        connectablestart: l(),
        connectableend: c(),
        connectable: u(P),
        connectionindicator: u(P) && (!u(Z) || u(N)) && (u(Z) || x.clickConnectStartHandle ? c() : l())
      })
    ]
  );
  var q = I(M);
  return Be(q, () => g() ?? tt), A(M), O(e, M), ue({
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
    set position(D = ve.Top) {
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
      return c();
    },
    set isConnectableEnd(D = !0) {
      c(D), v();
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
re(
  Nn,
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
var n0 = /* @__PURE__ */ G("<!> <!>", 1);
function Rs(e, t) {
  le(t, !0);
  let n = m(t, "data", 7), r = m(t, "targetPosition", 23, () => ve.Top), o = m(t, "sourcePosition", 23, () => ve.Bottom);
  var i = n0(), s = se(i);
  Nn(s, {
    type: "target",
    get position() {
      return r();
    }
  });
  var a = T(s), l = T(a);
  return Nn(l, {
    type: "source",
    get position() {
      return o();
    }
  }), $e(() => Ae(a, ` ${n()?.label ?? ""} `)), O(e, i), ue({
    get data() {
      return n();
    },
    set data(c) {
      n(c), v();
    },
    get targetPosition() {
      return r();
    },
    set targetPosition(c = ve.Top) {
      r(c), v();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(c = ve.Bottom) {
      o(c), v();
    }
  });
}
re(Rs, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var r0 = /* @__PURE__ */ G(" <!>", 1);
function uc(e, t) {
  le(t, !0);
  let n = m(t, "data", 23, () => ({ label: "Node" })), r = m(t, "sourcePosition", 23, () => ve.Bottom);
  we();
  var o = r0(), i = se(o), s = T(i);
  return Nn(s, {
    type: "source",
    get position() {
      return r();
    }
  }), $e(() => Ae(i, `${n()?.label ?? ""} `)), O(e, o), ue({
    get data() {
      return n();
    },
    set data(a = { label: "Node" }) {
      n(a), v();
    },
    get sourcePosition() {
      return r();
    },
    set sourcePosition(a = ve.Bottom) {
      r(a), v();
    }
  });
}
re(uc, { data: {}, sourcePosition: {} }, [], [], !0);
var o0 = /* @__PURE__ */ G(" <!>", 1);
function cc(e, t) {
  le(t, !0);
  let n = m(t, "data", 23, () => ({ label: "Node" })), r = m(t, "targetPosition", 23, () => ve.Top);
  we();
  var o = o0(), i = se(o), s = T(i);
  return Nn(s, {
    type: "target",
    get position() {
      return r();
    }
  }), $e(() => Ae(i, `${n()?.label ?? ""} `)), O(e, o), ue({
    get data() {
      return n();
    },
    set data(a = { label: "Node" }) {
      n(a), v();
    },
    get targetPosition() {
      return r();
    },
    set targetPosition(a = ve.Top) {
      r(a), v();
    }
  });
}
re(cc, { data: {}, targetPosition: {} }, [], [], !0);
function dc(e, t) {
}
re(dc, {}, [], [], !0);
function Mi(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function fc(e, t) {
  const n = /* @__PURE__ */ S(Dt), r = /* @__PURE__ */ S(() => u(n).domNode);
  let o;
  return u(r) ? Mi(e, u(r), t) : o = bs(() => {
    je(() => {
      Mi(e, u(r), t), o?.();
    });
  }), {
    async update(i) {
      Mi(e, u(r), i);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e), o?.();
    }
  };
}
function pc() {
  let e = /* @__PURE__ */ Ee(typeof window > "u");
  if (u(e)) {
    const t = bs(() => {
      je(() => {
        K(e, !1), t?.();
      });
    });
  }
  return {
    get value() {
      return u(e);
    }
  };
}
const Ja = (e) => iv(e), i0 = (e) => Zu(e);
function Ut(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const Wo = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var s0 = /* @__PURE__ */ G("<div><!></div>");
const a0 = {
  hash: "svelte-w2n27y",
  code: ".transparent.svelte-w2n27y {background:transparent;}"
};
function gc(e, t) {
  le(t, !0), ze(e, a0);
  let n = m(t, "x", 7, 0), r = m(t, "y", 7, 0), o = m(t, "width", 7), i = m(t, "height", 7), s = m(t, "selectEdgeOnClick", 7, !1), a = m(t, "transparent", 7, !1), l = m(t, "class", 7), c = m(t, "children", 7), d = /* @__PURE__ */ Te(t, [
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
  const p = Dt(), f = pn("svelteflow__edge_id");
  let g = /* @__PURE__ */ S(() => p.visible.edges.get(f)?.zIndex);
  var h = s0(), y = () => {
    s() && f && p.handleEdgeSelection(f);
  };
  Xe(
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
      [Rt]: w
    }),
    [
      () => ({
        display: pc().value ? "none" : void 0,
        cursor: s() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: Ut(o()),
        height: Ut(i()),
        "z-index": u(g)
      })
    ],
    "svelte-w2n27y"
  );
  var $ = I(h);
  return Be($, () => c() ?? tt), A(h), rt(h, (w, P) => fc?.(w, P), () => "edge-labels"), O(e, h), ue({
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
      return c();
    },
    set children(w) {
      c(w), v();
    }
  });
}
re(
  gc,
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
var l0 = /* @__PURE__ */ he("<path></path>"), u0 = /* @__PURE__ */ he('<path fill="none"></path><!><!>', 1);
function uo(e, t) {
  le(t, !0);
  let n = m(t, "id", 7), r = m(t, "path", 7), o = m(t, "label", 7), i = m(t, "labelX", 7), s = m(t, "labelY", 7), a = m(t, "labelStyle", 7), l = m(t, "markerStart", 7), c = m(t, "markerEnd", 7), d = m(t, "style", 7), p = m(t, "interactionWidth", 7, 20), f = m(t, "class", 7), g = /* @__PURE__ */ Te(t, [
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
  var h = u0(), y = se(h), $ = T(y);
  {
    var w = (C) => {
      var _ = l0();
      Xe(_, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": p(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...g
      })), O(C, _);
    };
    ae($, (C) => {
      p() > 0 && C(w);
    });
  }
  var P = T($);
  {
    var x = (C) => {
      gc(C, {
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
        children: (_, V) => {
          we();
          var L = Se();
          $e(() => Ae(L, o())), O(_, L);
        },
        $$slots: { default: !0 }
      });
    };
    ae(P, (C) => {
      o() && C(x);
    });
  }
  return $e(() => {
    me(y, "id", n()), me(y, "d", r()), mt(y, 0, wn(["svelte-flow__edge-path", f()])), me(y, "marker-start", l()), me(y, "marker-end", c()), ct(y, d());
  }), O(e, h), ue({
    get id() {
      return n();
    },
    set id(C) {
      n(C), v();
    },
    get path() {
      return r();
    },
    set path(C) {
      r(C), v();
    },
    get label() {
      return o();
    },
    set label(C) {
      o(C), v();
    },
    get labelX() {
      return i();
    },
    set labelX(C) {
      i(C), v();
    },
    get labelY() {
      return s();
    },
    set labelY(C) {
      s(C), v();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(C) {
      a(C), v();
    },
    get markerStart() {
      return l();
    },
    set markerStart(C) {
      l(C), v();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(C) {
      c(C), v();
    },
    get style() {
      return d();
    },
    set style(C) {
      d(C), v();
    },
    get interactionWidth() {
      return p();
    },
    set interactionWidth(C = 20) {
      p(C), v();
    },
    get class() {
      return f();
    },
    set class(C) {
      f(C), v();
    }
  });
}
re(
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
function Ks(e, t) {
  le(t, !0);
  let n = m(t, "id", 7), r = m(t, "interactionWidth", 7), o = m(t, "label", 7), i = m(t, "labelStyle", 7), s = m(t, "markerEnd", 7), a = m(t, "markerStart", 7), l = m(t, "pathOptions", 7), c = m(t, "sourcePosition", 7), d = m(t, "sourceX", 7), p = m(t, "sourceY", 7), f = m(t, "style", 7), g = m(t, "targetPosition", 7), h = m(t, "targetX", 7), y = m(t, "targetY", 7), $ = /* @__PURE__ */ S(() => Ju({
    sourceX: d(),
    sourceY: p(),
    targetX: h(),
    targetY: y(),
    sourcePosition: c(),
    targetPosition: g(),
    curvature: l()?.curvature
  })), w = /* @__PURE__ */ S(() => Jr(u($), 3)), P = /* @__PURE__ */ S(() => u(w)[0]), x = /* @__PURE__ */ S(() => u(w)[1]), C = /* @__PURE__ */ S(() => u(w)[2]);
  return uo(e, {
    get id() {
      return n();
    },
    get path() {
      return u(P);
    },
    get labelX() {
      return u(x);
    },
    get labelY() {
      return u(C);
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
  }), ue({
    get id() {
      return n();
    },
    set id(_) {
      n(_), v();
    },
    get interactionWidth() {
      return r();
    },
    set interactionWidth(_) {
      r(_), v();
    },
    get label() {
      return o();
    },
    set label(_) {
      o(_), v();
    },
    get labelStyle() {
      return i();
    },
    set labelStyle(_) {
      i(_), v();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(_) {
      s(_), v();
    },
    get markerStart() {
      return a();
    },
    set markerStart(_) {
      a(_), v();
    },
    get pathOptions() {
      return l();
    },
    set pathOptions(_) {
      l(_), v();
    },
    get sourcePosition() {
      return c();
    },
    set sourcePosition(_) {
      c(_), v();
    },
    get sourceX() {
      return d();
    },
    set sourceX(_) {
      d(_), v();
    },
    get sourceY() {
      return p();
    },
    set sourceY(_) {
      p(_), v();
    },
    get style() {
      return f();
    },
    set style(_) {
      f(_), v();
    },
    get targetPosition() {
      return g();
    },
    set targetPosition(_) {
      g(_), v();
    },
    get targetX() {
      return h();
    },
    set targetX(_) {
      h(_), v();
    },
    get targetY() {
      return y();
    },
    set targetY(_) {
      y(_), v();
    }
  });
}
re(
  Ks,
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
function hc(e, t) {
  le(t, !0);
  let n = m(t, "interactionWidth", 7), r = m(t, "label", 7), o = m(t, "labelStyle", 7), i = m(t, "style", 7), s = m(t, "markerEnd", 7), a = m(t, "markerStart", 7), l = m(t, "sourcePosition", 7), c = m(t, "sourceX", 7), d = m(t, "sourceY", 7), p = m(t, "targetPosition", 7), f = m(t, "targetX", 7), g = m(t, "targetY", 7), h = /* @__PURE__ */ S(() => Is({
    sourceX: c(),
    sourceY: d(),
    targetX: f(),
    targetY: g(),
    sourcePosition: l(),
    targetPosition: p()
  })), y = /* @__PURE__ */ S(() => Jr(u(h), 3)), $ = /* @__PURE__ */ S(() => u(y)[0]), w = /* @__PURE__ */ S(() => u(y)[1]), P = /* @__PURE__ */ S(() => u(y)[2]);
  return uo(e, {
    get path() {
      return u($);
    },
    get labelX() {
      return u(w);
    },
    get labelY() {
      return u(P);
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
  }), ue({
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
      return c();
    },
    set sourceX(x) {
      c(x), v();
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
re(
  hc,
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
function vc(e, t) {
  le(t, !0);
  let n = m(t, "sourceX", 7), r = m(t, "sourceY", 7), o = m(t, "targetX", 7), i = m(t, "targetY", 7), s = m(t, "label", 7), a = m(t, "labelStyle", 7), l = m(t, "markerStart", 7), c = m(t, "markerEnd", 7), d = m(t, "interactionWidth", 7), p = m(t, "style", 7), f = /* @__PURE__ */ S(() => ec({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), g = /* @__PURE__ */ S(() => Jr(u(f), 3)), h = /* @__PURE__ */ S(() => u(g)[0]), y = /* @__PURE__ */ S(() => u(g)[1]), $ = /* @__PURE__ */ S(() => u(g)[2]);
  return uo(e, {
    get path() {
      return u(h);
    },
    get labelX() {
      return u(y);
    },
    get labelY() {
      return u($);
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
      return c();
    },
    get interactionWidth() {
      return d();
    },
    get style() {
      return p();
    }
  }), ue({
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
      return c();
    },
    set markerEnd(w) {
      c(w), v();
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
re(
  vc,
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
function mc(e, t) {
  le(t, !0);
  let n = m(t, "sourceX", 7), r = m(t, "sourceY", 7), o = m(t, "sourcePosition", 7), i = m(t, "targetX", 7), s = m(t, "targetY", 7), a = m(t, "targetPosition", 7), l = m(t, "label", 7), c = m(t, "labelStyle", 7), d = m(t, "markerStart", 7), p = m(t, "markerEnd", 7), f = m(t, "interactionWidth", 7), g = m(t, "style", 7), h = /* @__PURE__ */ S(() => Is({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), y = /* @__PURE__ */ S(() => Jr(u(h), 3)), $ = /* @__PURE__ */ S(() => u(y)[0]), w = /* @__PURE__ */ S(() => u(y)[1]), P = /* @__PURE__ */ S(() => u(y)[2]);
  return uo(e, {
    get path() {
      return u($);
    },
    get labelX() {
      return u(w);
    },
    get labelY() {
      return u(P);
    },
    get label() {
      return l();
    },
    get labelStyle() {
      return c();
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
  }), ue({
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
      return c();
    },
    set labelStyle(x) {
      c(x), v();
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
re(
  mc,
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
function c0(e) {
  let t = 0, n = Yn(0), r;
  return () => {
    Ll() && (u(n), no(() => (t === 0 && (r = et(() => e(() => $o(n)))), t += 1, () => {
      zf().then(() => {
        t -= 1, t === 0 && (r?.(), r = void 0);
      });
    })));
  };
}
class d0 {
  #t;
  #e;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(t, n) {
    this.#t = t, this.#e = c0(n);
  }
  get current() {
    return this.#e(), this.#t();
  }
}
const f0 = /\(.+\)/, p0 = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class g0 extends d0 {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(t, n) {
    let r = f0.test(t) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    t.split(/[\s,]+/).some((i) => p0.has(i.trim())) ? t : `(${t})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => qi(o, "change", i)
    );
  }
}
function h0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  return Ts(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function Qa(e) {
  const { edges: t, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l } = e, c = /* @__PURE__ */ new Map();
  for (const d of t) {
    const p = r.get(d.source), f = r.get(d.target);
    if (!p || !f)
      continue;
    if (a) {
      const { visibleNodes: y, transform: $, width: w, height: P } = e;
      if (yv({
        sourceNode: p,
        targetNode: f,
        width: w,
        height: P,
        transform: $
      }))
        y.set(p.id, p), y.set(f.id, f);
      else
        continue;
    }
    const g = o.get(d.id);
    if (g && d === g.edge && p == g.sourceNode && f == g.targetNode) {
      c.set(d.id, g);
      continue;
    }
    const h = kv({
      id: d.id,
      sourceNode: p,
      targetNode: f,
      sourceHandle: d.sourceHandle || null,
      targetHandle: d.targetHandle || null,
      connectionMode: i,
      onError: s
    });
    h && c.set(d.id, {
      ...n,
      ...d,
      ...h,
      zIndex: mv({
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
  return c;
}
const yc = {
  input: uc,
  output: cc,
  default: Rs,
  group: dc
}, wc = {
  straight: vc,
  smoothstep: hc,
  default: Ks,
  step: mc
};
function v0(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = ao(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return As(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function m0(e) {
  class t {
    #t = /* @__PURE__ */ S(() => e.props.id ?? "1");
    get flowId() {
      return u(this.#t);
    }
    set flowId(r) {
      K(this.#t, r);
    }
    #e = /* @__PURE__ */ Ee(null);
    get domNode() {
      return u(this.#e);
    }
    set domNode(r) {
      K(this.#e, r);
    }
    #n = /* @__PURE__ */ Ee(null);
    get panZoom() {
      return u(this.#n);
    }
    set panZoom(r) {
      K(this.#n, r);
    }
    #r = /* @__PURE__ */ Ee(e.width ?? 0);
    get width() {
      return u(this.#r);
    }
    set width(r) {
      K(this.#r, r);
    }
    #o = /* @__PURE__ */ Ee(e.height ?? 0);
    get height() {
      return u(this.#o);
    }
    set height(r) {
      K(this.#o, r);
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
      return u(this.#i);
    }
    set nodesInitialized(r) {
      K(this.#i, r);
    }
    #s = /* @__PURE__ */ S(() => this.panZoom !== null);
    get viewportInitialized() {
      return u(this.#s);
    }
    set viewportInitialized(r) {
      K(this.#s, r);
    }
    #a = /* @__PURE__ */ S(() => (zv(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
    get _edges() {
      return u(this.#a);
    }
    set _edges(r) {
      K(this.#a, r);
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
      return u(this.#l);
    }
    set selectedNodes(r) {
      K(this.#l, r);
    }
    _prevSelectedEdges = [];
    _prevSelectedEdgeIds = /* @__PURE__ */ new Set();
    #u = /* @__PURE__ */ S(() => {
      const r = this._prevSelectedEdgeIds.size, o = /* @__PURE__ */ new Set(), i = this.edges.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedEdgeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedEdgeIds.size > 0) && (this._prevSelectedEdges = i), this._prevSelectedEdgeIds = o, this._prevSelectedEdges;
    });
    get selectedEdges() {
      return u(this.#u);
    }
    set selectedEdges(r) {
      K(this.#u, r);
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
        onlyRenderVisibleElements: c,
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
      if (c) {
        const { viewport: h, width: y, height: $ } = this, w = [h.x, h.y, h.zoom];
        p = h0(s, w, y, $), f = Qa({
          ...g,
          onlyRenderVisible: !0,
          visibleNodes: p,
          transform: w,
          width: y,
          height: $
        });
      } else
        p = this.nodeLookup, f = Qa(g);
      return { nodes: p, edges: f };
    });
    get visible() {
      return u(this.#c);
    }
    set visible(r) {
      K(this.#c, r);
    }
    #d = /* @__PURE__ */ S(() => e.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return u(this.#d);
    }
    set nodesDraggable(r) {
      K(this.#d, r);
    }
    #f = /* @__PURE__ */ S(() => e.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return u(this.#f);
    }
    set nodesConnectable(r) {
      K(this.#f, r);
    }
    #p = /* @__PURE__ */ S(() => e.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return u(this.#p);
    }
    set elementsSelectable(r) {
      K(this.#p, r);
    }
    #g = /* @__PURE__ */ S(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return u(this.#g);
    }
    set nodesFocusable(r) {
      K(this.#g, r);
    }
    #h = /* @__PURE__ */ S(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return u(this.#h);
    }
    set edgesFocusable(r) {
      K(this.#h, r);
    }
    #v = /* @__PURE__ */ S(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return u(this.#v);
    }
    set disableKeyboardA11y(r) {
      K(this.#v, r);
    }
    #m = /* @__PURE__ */ S(() => e.props.minZoom ?? 0.5);
    get minZoom() {
      return u(this.#m);
    }
    set minZoom(r) {
      K(this.#m, r);
    }
    #y = /* @__PURE__ */ S(() => e.props.maxZoom ?? 2);
    get maxZoom() {
      return u(this.#y);
    }
    set maxZoom(r) {
      K(this.#y, r);
    }
    #w = /* @__PURE__ */ S(() => e.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return u(this.#w);
    }
    set nodeOrigin(r) {
      K(this.#w, r);
    }
    #b = /* @__PURE__ */ S(() => e.props.nodeExtent ?? Gi);
    get nodeExtent() {
      return u(this.#b);
    }
    set nodeExtent(r) {
      K(this.#b, r);
    }
    #x = /* @__PURE__ */ S(() => e.props.translateExtent ?? Gi);
    get translateExtent() {
      return u(this.#x);
    }
    set translateExtent(r) {
      K(this.#x, r);
    }
    #C = /* @__PURE__ */ S(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return u(this.#C);
    }
    set defaultEdgeOptions(r) {
      K(this.#C, r);
    }
    #$ = /* @__PURE__ */ S(() => e.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return u(this.#$);
    }
    set nodeDragThreshold(r) {
      K(this.#$, r);
    }
    #_ = /* @__PURE__ */ S(() => e.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return u(this.#_);
    }
    set autoPanOnNodeDrag(r) {
      K(this.#_, r);
    }
    #k = /* @__PURE__ */ S(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return u(this.#k);
    }
    set autoPanOnConnect(r) {
      K(this.#k, r);
    }
    #S = /* @__PURE__ */ S(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return u(this.#S);
    }
    set autoPanOnNodeFocus(r) {
      K(this.#S, r);
    }
    #E = /* @__PURE__ */ S(() => e.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return u(this.#E);
    }
    set connectionDragThreshold(r) {
      K(this.#E, r);
    }
    fitViewQueued = e.props.fitView ?? !1;
    fitViewOptions = e.props.fitViewOptions;
    fitViewResolver = null;
    #P = /* @__PURE__ */ S(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return u(this.#P);
    }
    set snapGrid(r) {
      K(this.#P, r);
    }
    #N = /* @__PURE__ */ Ee(!1);
    get dragging() {
      return u(this.#N);
    }
    set dragging(r) {
      K(this.#N, r);
    }
    #M = /* @__PURE__ */ Ee(null);
    get selectionRect() {
      return u(this.#M);
    }
    set selectionRect(r) {
      K(this.#M, r);
    }
    #V = /* @__PURE__ */ Ee(!1);
    get selectionKeyPressed() {
      return u(this.#V);
    }
    set selectionKeyPressed(r) {
      K(this.#V, r);
    }
    #D = /* @__PURE__ */ Ee(!1);
    get multiselectionKeyPressed() {
      return u(this.#D);
    }
    set multiselectionKeyPressed(r) {
      K(this.#D, r);
    }
    #O = /* @__PURE__ */ Ee(!1);
    get deleteKeyPressed() {
      return u(this.#O);
    }
    set deleteKeyPressed(r) {
      K(this.#O, r);
    }
    #H = /* @__PURE__ */ Ee(!1);
    get panActivationKeyPressed() {
      return u(this.#H);
    }
    set panActivationKeyPressed(r) {
      K(this.#H, r);
    }
    #L = /* @__PURE__ */ Ee(!1);
    get zoomActivationKeyPressed() {
      return u(this.#L);
    }
    set zoomActivationKeyPressed(r) {
      K(this.#L, r);
    }
    #z = /* @__PURE__ */ Ee(null);
    get selectionRectMode() {
      return u(this.#z);
    }
    set selectionRectMode(r) {
      K(this.#z, r);
    }
    #T = /* @__PURE__ */ Ee("");
    get ariaLiveMessage() {
      return u(this.#T);
    }
    set ariaLiveMessage(r) {
      K(this.#T, r);
    }
    #A = /* @__PURE__ */ S(() => e.props.selectionMode ?? Ko.Partial);
    get selectionMode() {
      return u(this.#A);
    }
    set selectionMode(r) {
      K(this.#A, r);
    }
    #I = /* @__PURE__ */ S(() => ({ ...yc, ...e.props.nodeTypes }));
    get nodeTypes() {
      return u(this.#I);
    }
    set nodeTypes(r) {
      K(this.#I, r);
    }
    #q = /* @__PURE__ */ S(() => ({ ...wc, ...e.props.edgeTypes }));
    get edgeTypes() {
      return u(this.#q);
    }
    set edgeTypes(r) {
      K(this.#q, r);
    }
    #Z = /* @__PURE__ */ S(() => e.props.noPanClass ?? "nopan");
    get noPanClass() {
      return u(this.#Z);
    }
    set noPanClass(r) {
      K(this.#Z, r);
    }
    #B = /* @__PURE__ */ S(() => e.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return u(this.#B);
    }
    set noDragClass(r) {
      K(this.#B, r);
    }
    #R = /* @__PURE__ */ S(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return u(this.#R);
    }
    set noWheelClass(r) {
      K(this.#R, r);
    }
    #K = /* @__PURE__ */ S(() => gv(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return u(this.#K);
    }
    set ariaLabelConfig(r) {
      K(this.#K, r);
    }
    #j = /* @__PURE__ */ Ee(v0(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return u(this.#j);
    }
    set _viewport(r) {
      K(this.#j, r);
    }
    get viewport() {
      return e.viewport ?? this._viewport;
    }
    set viewport(r) {
      e.viewport && (e.viewport = r), this._viewport = r;
    }
    #Y = /* @__PURE__ */ Ee(
      // _connection is viewport independent and originating from XYHandle
      Ui
    );
    get _connection() {
      return u(this.#Y);
    }
    set _connection(r) {
      K(this.#Y, r);
    }
    #W = /* @__PURE__ */ S(() => this._connection.inProgress ? {
      ...this._connection,
      to: lo(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return u(this.#W);
    }
    set connection(r) {
      K(this.#W, r);
    }
    #X = /* @__PURE__ */ S(() => e.props.connectionMode ?? vr.Strict);
    get connectionMode() {
      return u(this.#X);
    }
    set connectionMode(r) {
      K(this.#X, r);
    }
    #F = /* @__PURE__ */ S(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return u(this.#F);
    }
    set connectionRadius(r) {
      K(this.#F, r);
    }
    #G = /* @__PURE__ */ S(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return u(this.#G);
    }
    set isValidConnection(r) {
      K(this.#G, r);
    }
    #U = /* @__PURE__ */ S(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return u(this.#U);
    }
    set selectNodesOnDrag(r) {
      K(this.#U, r);
    }
    #J = /* @__PURE__ */ S(() => e.props.defaultMarkerColor ?? "#b1b1b7");
    get defaultMarkerColor() {
      return u(this.#J);
    }
    set defaultMarkerColor(r) {
      K(this.#J, r);
    }
    #Q = /* @__PURE__ */ S(() => Sv(e.edges, {
      defaultColor: this.defaultMarkerColor,
      id: this.flowId,
      defaultMarkerStart: this.defaultEdgeOptions.markerStart,
      defaultMarkerEnd: this.defaultEdgeOptions.markerEnd
    }));
    get markers() {
      return u(this.#Q);
    }
    set markers(r) {
      K(this.#Q, r);
    }
    #ee = /* @__PURE__ */ S(() => e.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return u(this.#ee);
    }
    set onlyRenderVisibleElements(r) {
      K(this.#ee, r);
    }
    #te = /* @__PURE__ */ S(() => e.props.onflowerror ?? Yu);
    get onerror() {
      return u(this.#te);
    }
    set onerror(r) {
      K(this.#te, r);
    }
    #ne = /* @__PURE__ */ S(() => e.props.ondelete);
    get ondelete() {
      return u(this.#ne);
    }
    set ondelete(r) {
      K(this.#ne, r);
    }
    #re = /* @__PURE__ */ S(() => e.props.onbeforedelete);
    get onbeforedelete() {
      return u(this.#re);
    }
    set onbeforedelete(r) {
      K(this.#re, r);
    }
    #oe = /* @__PURE__ */ S(() => e.props.onbeforeconnect);
    get onbeforeconnect() {
      return u(this.#oe);
    }
    set onbeforeconnect(r) {
      K(this.#oe, r);
    }
    #ie = /* @__PURE__ */ S(() => e.props.onconnect);
    get onconnect() {
      return u(this.#ie);
    }
    set onconnect(r) {
      K(this.#ie, r);
    }
    #se = /* @__PURE__ */ S(() => e.props.onconnectstart);
    get onconnectstart() {
      return u(this.#se);
    }
    set onconnectstart(r) {
      K(this.#se, r);
    }
    #ae = /* @__PURE__ */ S(() => e.props.onconnectend);
    get onconnectend() {
      return u(this.#ae);
    }
    set onconnectend(r) {
      K(this.#ae, r);
    }
    #le = /* @__PURE__ */ S(() => e.props.onbeforereconnect);
    get onbeforereconnect() {
      return u(this.#le);
    }
    set onbeforereconnect(r) {
      K(this.#le, r);
    }
    #ue = /* @__PURE__ */ S(() => e.props.onreconnect);
    get onreconnect() {
      return u(this.#ue);
    }
    set onreconnect(r) {
      K(this.#ue, r);
    }
    #ce = /* @__PURE__ */ S(() => e.props.onreconnectstart);
    get onreconnectstart() {
      return u(this.#ce);
    }
    set onreconnectstart(r) {
      K(this.#ce, r);
    }
    #de = /* @__PURE__ */ S(() => e.props.onreconnectend);
    get onreconnectend() {
      return u(this.#de);
    }
    set onreconnectend(r) {
      K(this.#de, r);
    }
    #fe = /* @__PURE__ */ S(() => e.props.clickConnect ?? !0);
    get clickConnect() {
      return u(this.#fe);
    }
    set clickConnect(r) {
      K(this.#fe, r);
    }
    #pe = /* @__PURE__ */ S(() => e.props.onclickconnectstart);
    get onclickconnectstart() {
      return u(this.#pe);
    }
    set onclickconnectstart(r) {
      K(this.#pe, r);
    }
    #ge = /* @__PURE__ */ S(() => e.props.onclickconnectend);
    get onclickconnectend() {
      return u(this.#ge);
    }
    set onclickconnectend(r) {
      K(this.#ge, r);
    }
    #he = /* @__PURE__ */ Ee(null);
    get clickConnectStartHandle() {
      return u(this.#he);
    }
    set clickConnectStartHandle(r) {
      K(this.#he, r);
    }
    #ve = /* @__PURE__ */ S(() => e.props.onselectiondrag);
    get onselectiondrag() {
      return u(this.#ve);
    }
    set onselectiondrag(r) {
      K(this.#ve, r);
    }
    #me = /* @__PURE__ */ S(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return u(this.#me);
    }
    set onselectiondragstart(r) {
      K(this.#me, r);
    }
    #ye = /* @__PURE__ */ S(() => e.props.onselectiondragstop);
    get onselectiondragstop() {
      return u(this.#ye);
    }
    set onselectiondragstop(r) {
      K(this.#ye, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await uv(
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
    _prefersDark = new g0("(prefers-color-scheme: dark)", e.props.colorModeSSR === "dark");
    #we = /* @__PURE__ */ S(() => e.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : e.props.colorMode ?? "light");
    get colorMode() {
      return u(this.#we);
    }
    set colorMode(r) {
      K(this.#we, r);
    }
    constructor() {
      process.env.NODE_ENV === "development" && (el(e.nodes, "nodes"), el(e.edges, "edges"));
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = Ui, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new t();
}
function el(e, t) {
  try {
    e && e.length > 0 && structuredClone(e[0]);
  } catch {
    console.warn(`Use $state.raw for ${t} to prevent performance issues.`);
  }
}
function y0(e) {
  const t = pn(Xr);
  if (!t)
    throw new Error(`In order to use ${e}() you need to wrap your component in a <SvelteFlowProvider />`);
  if (t.provider && typeof window == "object" && !Ll())
    throw new Error(`Use $derived(${e}()) to receive updates when values change.`);
}
function Dt() {
  const e = pn(Xr);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return process.env.NODE_ENV === "development" && y0("useStore"), e.getStore();
}
const Xr = Symbol();
function bc(e) {
  const t = m0(e);
  function n(N) {
    t.nodeTypes = {
      ...yc,
      ...N
    };
  }
  function r(N) {
    t.edgeTypes = {
      ...wc,
      ...N
    };
  }
  function o(N) {
    t.edges = xv(N, t.edges);
  }
  const i = (N, k = !1) => {
    t.nodes = t.nodes.map((H) => {
      const b = N.get(H.id);
      return b ? { ...H, position: b.position, dragging: k } : H;
    });
  };
  function s(N) {
    const { changes: k, updatedInternals: H } = Hv(N, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin);
    if (!H)
      return;
    Nv(t.nodeLookup, t.parentLookup, {
      nodeOrigin: t.nodeOrigin,
      nodeExtent: t.nodeExtent
    }), t.fitViewQueued && t.resolveFitView();
    const b = /* @__PURE__ */ new Map();
    for (const E of k) {
      const M = t.nodeLookup.get(E.id)?.internals.userNode;
      if (!M)
        continue;
      const z = { ...M };
      switch (E.type) {
        case "dimensions": {
          const q = { ...z.measured, ...E.dimensions };
          E.setAttributes && (z.width = E.dimensions?.width ?? z.width, z.height = E.dimensions?.height ?? z.height), z.measured = q;
          break;
        }
        case "position":
          z.position = E.position ?? z.position;
          break;
      }
      b.set(E.id, z);
    }
    t.nodes = t.nodes.map((E) => b.get(E.id) ?? E);
  }
  function a(N) {
    const k = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = N, t.fitViewResolver = k, t.nodes = [...t.nodes], k.promise;
  }
  async function l(N, k, H) {
    const b = typeof H?.zoom < "u" ? H.zoom : t.maxZoom, E = t.panZoom;
    return E ? (await E.setViewport({
      x: t.width / 2 - N * b,
      y: t.height / 2 - k * b,
      zoom: b
    }, { duration: H?.duration, ease: H?.ease, interpolate: H?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function c(N, k) {
    const H = t.panZoom;
    return H ? H.scaleBy(N, k) : Promise.resolve(!1);
  }
  function d(N) {
    return c(1.2, N);
  }
  function p(N) {
    return c(1 / 1.2, N);
  }
  function f(N) {
    const k = t.panZoom;
    k && (k.setScaleExtent([N, t.maxZoom]), t.minZoom = N);
  }
  function g(N) {
    const k = t.panZoom;
    k && (k.setScaleExtent([t.minZoom, N]), t.maxZoom = N);
  }
  function h(N) {
    const k = t.panZoom;
    k && (k.setTranslateExtent(N), t.translateExtent = N);
  }
  function y(N) {
    t.panZoom?.setClickDistance(N);
  }
  function $(N, k = null) {
    let H = !1;
    const b = N.map((E) => (!k || k.has(E.id)) && E.selected ? (H = !0, { ...E, selected: !1 }) : E);
    return [H, b];
  }
  function w(N) {
    const k = N?.nodes ? new Set(N.nodes.map((q) => q.id)) : null, [H, b] = $(t.nodes, k);
    H && (t.nodes = b);
    const E = N?.edges ? new Set(N.edges.map((q) => q.id)) : null, [M, z] = $(t.edges, E);
    M && (t.edges = z);
  }
  function P(N) {
    const k = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((H) => {
      const b = N.includes(H.id), E = k && H.selected || b;
      if (H.selected !== E) {
        const M = t.nodeLookup.get(H.id);
        return M && (M.selected = E), H.selected = E, { ...H };
      }
      return H;
    }), k || w({ nodes: [] });
  }
  function x(N) {
    const k = t.multiselectionKeyPressed;
    t.edges = t.edges.map((H) => {
      const b = N.includes(H.id), E = k && H.selected || b;
      return H.selected !== E ? { ...H, selected: E } : H;
    }), k || w({ edges: [] });
  }
  function C(N, k, H) {
    const b = t.nodeLookup.get(N);
    if (!b) {
      console.warn("012", Fn.error012(N));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, b.selected ? (k || b.selected && t.multiselectionKeyPressed) && (w({ nodes: [b], edges: [] }), requestAnimationFrame(() => H?.blur())) : P([N]);
  }
  function _(N) {
    const k = t.edgeLookup.get(N);
    if (!k) {
      console.warn("012", Fn.error012(N));
      return;
    }
    (k.selectable || t.elementsSelectable && typeof k.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, k.selected ? k.selected && t.multiselectionKeyPressed && w({ nodes: [], edges: [k] }) : x([N]));
  }
  function V(N, k) {
    const { nodeExtent: H, snapGrid: b, nodeOrigin: E, nodeLookup: M, nodesDraggable: z, onerror: q } = t, D = /* @__PURE__ */ new Map(), R = b?.[0] ?? 5, U = b?.[1] ?? 5, X = N.x * R * k, ee = N.y * U * k;
    for (const W of M.values()) {
      if (!(W.selected && (W.draggable || z && typeof W.draggable > "u")))
        continue;
      let ce = {
        x: W.internals.positionAbsolute.x + X,
        y: W.internals.positionAbsolute.y + ee
      };
      b && (ce = fi(ce, b));
      const { position: te, positionAbsolute: ge } = Bu({
        nodeId: W.id,
        nextPosition: ce,
        nodeLookup: M,
        nodeExtent: H,
        nodeOrigin: E,
        onError: q
      });
      W.position = te, W.internals.positionAbsolute = ge, D.set(W.id, W);
    }
    i(D);
  }
  function L(N) {
    return Lv({
      delta: N,
      panZoom: t.panZoom,
      transform: [t.viewport.x, t.viewport.y, t.viewport.zoom],
      translateExtent: t.translateExtent,
      width: t.width,
      height: t.height
    });
  }
  const Z = (N) => {
    t._connection = { ...N };
  };
  function Y() {
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
    addSelectedNodes: P,
    addSelectedEdges: x,
    handleNodeSelection: C,
    handleEdgeSelection: _,
    moveSelectedNodes: V,
    panBy: L,
    updateConnection: Z,
    cancelConnection: Y,
    reset: j
  });
}
function w0(e, t) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: l, paneClickDistance: c, setPanZoomInstance: d, onDraggingChange: p, onTransformChange: f } = t, g = e0({
    domNode: e,
    minZoom: n,
    maxZoom: r,
    translateExtent: l,
    viewport: o,
    paneClickDistance: c,
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
var b0 = /* @__PURE__ */ G('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function xc(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "panOnScrollMode", 23, () => Wt.Free), o = m(t, "preventScrolling", 7, !0), i = m(t, "zoomOnScroll", 7, !0), s = m(t, "zoomOnDoubleClick", 7, !0), a = m(t, "zoomOnPinch", 7, !0), l = m(t, "panOnDrag", 7, !0), c = m(t, "panOnScroll", 7, !1), d = m(t, "paneClickDistance", 7, 1), p = m(t, "onmovestart", 7), f = m(t, "onmove", 7), g = m(t, "onmoveend", 7), h = m(t, "oninit", 7), y = m(t, "children", 7), $ = /* @__PURE__ */ S(() => n().panActivationKeyPressed || l()), w = /* @__PURE__ */ S(() => n().panActivationKeyPressed || c());
  const { viewport: P } = n();
  let x = !1;
  je(() => {
    !x && n().viewportInitialized && (h()?.(), x = !0);
  });
  var C = b0(), _ = I(C);
  return Be(_, y), A(C), rt(C, (V, L) => w0?.(V, L), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: P,
    onDraggingChange: (V) => {
      n(n().dragging = V, !0);
    },
    setPanZoomInstance: (V) => {
      n(n().panZoom = V, !0);
    },
    onPanZoomStart: p(),
    onPanZoom: f(),
    onPanZoomEnd: g(),
    zoomOnScroll: i(),
    zoomOnDoubleClick: s(),
    zoomOnPinch: a(),
    panOnScroll: u(w),
    panOnDrag: u($),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: r() || Wt.Free,
    zoomActivationKeyPressed: n().zoomActivationKeyPressed,
    preventScrolling: typeof o() == "boolean" ? o() : !0,
    noPanClassName: n().noPanClass,
    noWheelClassName: n().noWheelClass,
    userSelectionActive: !!n().selectionRect,
    translateExtent: n().translateExtent,
    lib: "svelte",
    paneClickDistance: d(),
    onTransformChange: (V) => {
      n(n().viewport = { x: V[0], y: V[1], zoom: V[2] }, !0);
    }
  })), O(e, C), ue({
    get store() {
      return n();
    },
    set store(V) {
      n(V), v();
    },
    get panOnScrollMode() {
      return r();
    },
    set panOnScrollMode(V = Wt.Free) {
      r(V), v();
    },
    get preventScrolling() {
      return o();
    },
    set preventScrolling(V = !0) {
      o(V), v();
    },
    get zoomOnScroll() {
      return i();
    },
    set zoomOnScroll(V = !0) {
      i(V), v();
    },
    get zoomOnDoubleClick() {
      return s();
    },
    set zoomOnDoubleClick(V = !0) {
      s(V), v();
    },
    get zoomOnPinch() {
      return a();
    },
    set zoomOnPinch(V = !0) {
      a(V), v();
    },
    get panOnDrag() {
      return l();
    },
    set panOnDrag(V = !0) {
      l(V), v();
    },
    get panOnScroll() {
      return c();
    },
    set panOnScroll(V = !1) {
      c(V), v();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(V = 1) {
      d(V), v();
    },
    get onmovestart() {
      return p();
    },
    set onmovestart(V) {
      p(V), v();
    },
    get onmove() {
      return f();
    },
    set onmove(V) {
      f(V), v();
    },
    get onmoveend() {
      return g();
    },
    set onmoveend(V) {
      g(V), v();
    },
    get oninit() {
      return h();
    },
    set oninit(V) {
      h(V), v();
    },
    get children() {
      return y();
    },
    set children(V) {
      y(V), v();
    }
  });
}
re(
  xc,
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
function tl(e, t) {
  return (n) => {
    n.target === t && e?.(n);
  };
}
function nl(e) {
  return (t) => {
    const n = e.has(t.id);
    return !!t.selected !== n ? { ...t, selected: n } : t;
  };
}
function rl(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
var x0 = /* @__PURE__ */ G("<div><!></div>");
function Cc(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "panOnDrag", 7, !0), o = m(t, "selectionOnDrag", 7), i = m(t, "onpaneclick", 7), s = m(t, "onpanecontextmenu", 7), a = m(t, "onselectionstart", 7), l = m(t, "onselectionend", 7), c = m(t, "children", 7), d, p = null, f = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ S(() => n().panActivationKeyPressed || r()), y = /* @__PURE__ */ S(() => n().selectionKeyPressed || n().selectionRect || o() && u(h) !== !0), $ = /* @__PURE__ */ S(() => n().elementsSelectable && (u(y) || n().selectionRectMode === "user")), w = !1;
  function P(k) {
    if (w || n().connection.inProgress) {
      w = !1;
      return;
    }
    i()?.({ event: k }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0);
  }
  function x(k) {
    if (p = d?.getBoundingClientRect(), !n().elementsSelectable || !u(y) || k.button !== 0 || k.target !== d || !p)
      return;
    k.target?.setPointerCapture?.(k.pointerId);
    const { x: H, y: b } = Kt(k, p);
    n().unselectNodesAndEdges(), n(n().selectionRect = { width: 0, height: 0, startX: H, startY: b, x: H, y: b }, !0), a()?.(k);
  }
  function C(k) {
    if (!u(y) || !p || !n().selectionRect)
      return;
    w = !0;
    const H = Kt(k, p), { startX: b = 0, startY: E = 0 } = n().selectionRect, M = {
      ...n().selectionRect,
      x: H.x < b ? H.x : b,
      y: H.y < E ? H.y : E,
      width: Math.abs(H.x - b),
      height: Math.abs(H.y - E)
    }, z = f, q = g;
    f = new Set(Ts(
      n().nodeLookup,
      M,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === Ko.Partial,
      !0
    ).map((R) => R.id));
    const D = n().defaultEdgeOptions.selectable ?? !0;
    g = /* @__PURE__ */ new Set();
    for (const R of f) {
      const U = n().connectionLookup.get(R);
      if (U)
        for (const { edgeId: X } of U.values()) {
          const ee = n().edgeLookup.get(X);
          ee && (ee.selectable ?? D) && g.add(X);
        }
    }
    rl(z, f) || n(n().nodes = n().nodes.map(nl(f)), !0), rl(q, g) || n(n().edges = n().edges.map(nl(g)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = M, !0);
  }
  function _(k) {
    k.button === 0 && (k.target?.releasePointerCapture?.(k.pointerId), !u(y) && n().selectionRectMode === "user" && k.target === d && P?.(k), n(n().selectionRect = null, !0), f.size > 0 && n(n().selectionRectMode = "nodes", !0), n().selectionKeyPressed && (w = !1), l()?.(k));
  }
  const V = (k) => {
    if (Array.isArray(u(h)) && u(h).includes(2)) {
      k.preventDefault();
      return;
    }
    s()?.({ event: k });
  };
  var L = x0();
  let Z;
  var Y = /* @__PURE__ */ S(() => u($) ? void 0 : tl(P, d));
  L.__click = function(...k) {
    u(Y)?.apply(this, k);
  }, L.__pointerdown = function(...k) {
    (u($) ? x : void 0)?.apply(this, k);
  }, L.__pointermove = function(...k) {
    (u($) ? C : void 0)?.apply(this, k);
  }, L.__pointerup = function(...k) {
    (u($) ? _ : void 0)?.apply(this, k);
  };
  var j = /* @__PURE__ */ S(() => tl(V, d));
  L.__contextmenu = function(...k) {
    u(j)?.apply(this, k);
  };
  var N = I(L);
  return Be(N, c), A(L), Mt(L, (k) => d = k, () => d), $e((k) => Z = mt(L, 1, "svelte-flow__pane svelte-flow__container", null, Z, k), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: u(y)
    })
  ]), O(e, L), ue({
    get store() {
      return n();
    },
    set store(k) {
      n(k), v();
    },
    get panOnDrag() {
      return r();
    },
    set panOnDrag(k = !0) {
      r(k), v();
    },
    get selectionOnDrag() {
      return o();
    },
    set selectionOnDrag(k) {
      o(k), v();
    },
    get onpaneclick() {
      return i();
    },
    set onpaneclick(k) {
      i(k), v();
    },
    get onpanecontextmenu() {
      return s();
    },
    set onpanecontextmenu(k) {
      s(k), v();
    },
    get onselectionstart() {
      return a();
    },
    set onselectionstart(k) {
      a(k), v();
    },
    get onselectionend() {
      return l();
    },
    set onselectionend(k) {
      l(k), v();
    },
    get children() {
      return c();
    },
    set children(k) {
      c(k), v();
    }
  });
}
On([
  "click",
  "pointerdown",
  "pointermove",
  "pointerup",
  "contextmenu"
]);
re(
  Cc,
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
var C0 = /* @__PURE__ */ G('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function $c(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "children", 7);
  var o = C0();
  let i;
  var s = I(o);
  return Be(s, r), A(o), $e((a) => i = ct(o, "", i, a), [
    () => ({
      transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
    })
  ]), O(e, o), ue({
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
re($c, { store: {}, children: {} }, [], [], !0);
function _c(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = Iv({
    onDrag: r,
    onDragStart: o,
    onDragStop: i,
    onNodeMouseDown: s,
    getStoreItems: () => {
      const { snapGrid: c, viewport: d } = n;
      return {
        nodes: n.nodes,
        nodeLookup: n.nodeLookup,
        edges: n.edges,
        nodeExtent: n.nodeExtent,
        snapGrid: c || [0, 0],
        snapToGrid: !!c,
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
  function l(c, d) {
    if (d.disabled) {
      a.destroy();
      return;
    }
    a.update({
      domNode: c,
      noDragClassName: d.noDragClass,
      handleSelector: d.handleSelector,
      nodeId: d.nodeId,
      isSelectable: d.isSelectable,
      nodeClickDistance: d.nodeClickDistance
    });
  }
  return l(e, t), {
    update(c) {
      l(e, c);
    },
    destroy() {
      a.destroy();
    }
  };
}
var $0 = /* @__PURE__ */ G('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-62ze0y"> </div>'), _0 = /* @__PURE__ */ G('<div class="a11y-hidden svelte-62ze0y"> </div> <div class="a11y-hidden svelte-62ze0y"> </div> <!>', 1);
const k0 = {
  hash: "svelte-62ze0y",
  code: ".a11y-hidden.svelte-62ze0y {display:none;}.a11y-live-msg.svelte-62ze0y {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function kc(e, t) {
  le(t, !0), ze(e, k0);
  let n = m(t, "store", 7);
  var r = _0(), o = se(r), i = I(o, !0);
  A(o);
  var s = T(o, 2), a = I(s, !0);
  A(s);
  var l = T(s, 2);
  {
    var c = (d) => {
      var p = $0(), f = I(p, !0);
      A(p), $e(() => {
        me(p, "id", `${S0}-${n().flowId}`), Ae(f, n().ariaLiveMessage);
      }), O(d, p);
    };
    ae(l, (d) => {
      n().disableKeyboardA11y || d(c);
    });
  }
  return $e(() => {
    me(o, "id", `${Sc}-${n().flowId}`), Ae(i, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), me(s, "id", `${Ec}-${n().flowId}`), Ae(a, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), O(e, r), ue({
    get store() {
      return n();
    },
    set store(d) {
      n(d), v();
    }
  });
}
re(kc, { store: {} }, [], [], !0);
const Sc = "svelte-flow__node-desc", Ec = "svelte-flow__edge-desc", S0 = "svelte-flow__aria-live";
var E0 = /* @__PURE__ */ G("<div><!></div>");
function Pc(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "node", 7), o = m(t, "resizeObserver", 7), i = m(t, "nodeClickDistance", 7), s = m(t, "onnodeclick", 7), a = m(t, "onnodedrag", 7), l = m(t, "onnodedragstart", 7), c = m(t, "onnodedragstop", 7), d = m(t, "onnodepointerenter", 7), p = m(t, "onnodepointerleave", 7), f = m(t, "onnodepointermove", 7), g = m(t, "onnodecontextmenu", 7), h = /* @__PURE__ */ S(() => at(r().data, () => ({}), !0)), y = /* @__PURE__ */ S(() => at(r().selected, !1)), $ = /* @__PURE__ */ S(() => r().draggable), w = /* @__PURE__ */ S(() => r().selectable), P = /* @__PURE__ */ S(() => at(r().deletable, !0)), x = /* @__PURE__ */ S(() => r().connectable), C = /* @__PURE__ */ S(() => r().focusable), _ = /* @__PURE__ */ S(() => at(r().hidden, !1)), V = /* @__PURE__ */ S(() => at(r().dragging, !1)), L = /* @__PURE__ */ S(() => at(r().style, "")), Z = /* @__PURE__ */ S(() => r().class), Y = /* @__PURE__ */ S(() => at(r().type, "default")), j = /* @__PURE__ */ S(() => r().parentId), N = /* @__PURE__ */ S(() => r().sourcePosition), k = /* @__PURE__ */ S(() => r().targetPosition), H = /* @__PURE__ */ S(() => at(r().measured, () => ({ width: 0, height: 0 }), !0).width), b = /* @__PURE__ */ S(() => at(r().measured, () => ({ width: 0, height: 0 }), !0).height), E = /* @__PURE__ */ S(() => r().initialWidth), M = /* @__PURE__ */ S(() => r().initialHeight), z = /* @__PURE__ */ S(() => r().width), q = /* @__PURE__ */ S(() => r().height), D = /* @__PURE__ */ S(() => r().dragHandle), R = /* @__PURE__ */ S(() => at(r().internals.z, 0)), U = /* @__PURE__ */ S(() => r().internals.positionAbsolute.x), X = /* @__PURE__ */ S(() => r().internals.positionAbsolute.y), ee = /* @__PURE__ */ S(() => r().internals.userNode), { id: W } = r(), ce = /* @__PURE__ */ S(() => u($) ?? n().nodesDraggable), te = /* @__PURE__ */ S(() => u(w) ?? n().elementsSelectable), ge = /* @__PURE__ */ S(() => u(x) ?? n().nodesConnectable), F = /* @__PURE__ */ S(() => Wu(r())), Ce = /* @__PURE__ */ S(() => !!r().internals.handleBounds), pe = /* @__PURE__ */ S(() => u(F) && u(Ce)), oe = /* @__PURE__ */ S(() => u(C) ?? n().nodesFocusable);
  function Q(de) {
    return n().parentLookup.has(de);
  }
  let fe = /* @__PURE__ */ S(() => Q(W)), J = /* @__PURE__ */ Ee(null), ye = null, ne = u(Y), _e = u(N), B = u(k), Ue = /* @__PURE__ */ S(() => n().nodeTypes[u(Y)] ?? Rs), ie = /* @__PURE__ */ S(() => n().ariaLabelConfig);
  dr("svelteflow__node_connectable", {
    get value() {
      return u(ge);
    }
  }), dr("svelteflow__node_id", W), process.env.NODE_ENV === "development" && je(() => {
    n().nodeTypes[u(Y)] || console.warn("003", Fn.error003(u(Y)));
  });
  let xe = /* @__PURE__ */ S(() => {
    const de = u(H) === void 0 ? u(z) ?? u(E) : u(z), Ze = u(b) === void 0 ? u(q) ?? u(M) : u(q);
    if (!(de === void 0 && Ze === void 0 && u(L) === void 0))
      return `${u(L)};${de ? `width:${Ut(de)};` : ""}${Ze ? `height:${Ut(Ze)};` : ""}`;
  });
  je(() => {
    (u(Y) !== ne || u(N) !== _e || u(k) !== B) && u(J) !== null && requestAnimationFrame(() => {
      u(J) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[W, { id: W, nodeElement: u(J), force: !0 }]]));
    }), ne = u(Y), _e = u(N), B = u(k);
  }), je(() => {
    o() && (!u(pe) || u(J) !== ye) && (ye && o().unobserve(ye), u(J) && o().observe(u(J)), ye = u(J));
  }), ri(() => {
    ye && o()?.unobserve(ye);
  });
  function ke(de) {
    u(te) && (!n().selectNodesOnDrag || !u(ce) || n().nodeDragThreshold > 0) && n().handleNodeSelection(W), s()?.({ node: u(ee), event: de });
  }
  function Oe(de) {
    if (!(Gu(de) || n().disableKeyboardA11y))
      if (qu.includes(de.key) && u(te)) {
        const Ze = de.key === "Escape";
        n().handleNodeSelection(W, Ze, u(J));
      } else u(ce) && r().selected && Object.prototype.hasOwnProperty.call(Wo, de.key) && (de.preventDefault(), n(
        n().ariaLiveMessage = u(ie)["node.a11yDescription.ariaLiveMessage"]({
          direction: de.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(Wo[de.key], de.shiftKey ? 4 : 1));
  }
  const dt = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !u(J)?.matches(":focus-visible"))
      return;
    const { width: de, height: Ze, viewport: st } = n();
    Ts(/* @__PURE__ */ new Map([[W, r()]]), { x: 0, y: 0, width: de, height: Ze }, [st.x, st.y, st.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: st.zoom });
  };
  var kt = De(), Ve = se(kt);
  {
    var Ye = (de) => {
      var Ze = E0();
      Xe(
        Ze,
        (Re, St) => ({
          "data-id": W,
          class: [
            "svelte-flow__node",
            `svelte-flow__node-${u(Y)}`,
            u(Z)
          ],
          style: u(xe),
          onclick: ke,
          onpointerenter: d() ? (Je) => d()({ node: u(ee), event: Je }) : void 0,
          onpointerleave: p() ? (Je) => p()({ node: u(ee), event: Je }) : void 0,
          onpointermove: f() ? (Je) => f()({ node: u(ee), event: Je }) : void 0,
          oncontextmenu: g() ? (Je) => g()({ node: u(ee), event: Je }) : void 0,
          onkeydown: u(oe) ? Oe : void 0,
          onfocus: u(oe) ? dt : void 0,
          tabIndex: u(oe) ? 0 : void 0,
          role: r().ariaRole ?? (u(oe) ? "group" : void 0),
          "aria-roledescription": "node",
          "aria-describedby": n().disableKeyboardA11y ? void 0 : `${Sc}-${n().flowId}`,
          ...r().domAttributes,
          [Cn]: Re,
          [Rt]: St
        }),
        [
          () => ({
            dragging: u(V),
            selected: u(y),
            draggable: u(ce),
            connectable: u(ge),
            selectable: u(te),
            nopan: u(ce),
            parent: u(fe)
          }),
          () => ({
            "z-index": u(R),
            transform: `translate(${u(U) ?? ""}px, ${u(X) ?? ""}px)`,
            visibility: u(F) ? "visible" : "hidden"
          })
        ]
      );
      var st = I(Ze);
      Es(st, () => u(Ue), (Re, St) => {
        St(Re, {
          get data() {
            return u(h);
          },
          get id() {
            return W;
          },
          get selected() {
            return u(y);
          },
          get selectable() {
            return u(te);
          },
          get deletable() {
            return u(P);
          },
          get sourcePosition() {
            return u(N);
          },
          get targetPosition() {
            return u(k);
          },
          get zIndex() {
            return u(R);
          },
          get dragging() {
            return u(V);
          },
          get draggable() {
            return u(ce);
          },
          get dragHandle() {
            return u(D);
          },
          get parentId() {
            return u(j);
          },
          get type() {
            return u(Y);
          },
          get isConnectable() {
            return u(ge);
          },
          get positionAbsoluteX() {
            return u(U);
          },
          get positionAbsoluteY() {
            return u(X);
          },
          get width() {
            return u(z);
          },
          get height() {
            return u(q);
          }
        });
      }), A(Ze), rt(Ze, (Re, St) => _c?.(Re, St), () => ({
        nodeId: W,
        isSelectable: u(te),
        disabled: !u(ce),
        handleSelector: u(D),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (Re, St, Je, qt) => {
          a()?.({ event: Re, targetNode: Je, nodes: qt });
        },
        onDragStart: (Re, St, Je, qt) => {
          l()?.({ event: Re, targetNode: Je, nodes: qt });
        },
        onDragStop: (Re, St, Je, qt) => {
          c()?.({ event: Re, targetNode: Je, nodes: qt });
        },
        store: n()
      })), Mt(Ze, (Re) => K(J, Re), () => u(J)), O(de, Ze);
    };
    ae(Ve, (de) => {
      u(_) || de(Ye);
    });
  }
  return O(e, kt), ue({
    get store() {
      return n();
    },
    set store(de) {
      n(de), v();
    },
    get node() {
      return r();
    },
    set node(de) {
      r(de), v();
    },
    get resizeObserver() {
      return o();
    },
    set resizeObserver(de) {
      o(de), v();
    },
    get nodeClickDistance() {
      return i();
    },
    set nodeClickDistance(de) {
      i(de), v();
    },
    get onnodeclick() {
      return s();
    },
    set onnodeclick(de) {
      s(de), v();
    },
    get onnodedrag() {
      return a();
    },
    set onnodedrag(de) {
      a(de), v();
    },
    get onnodedragstart() {
      return l();
    },
    set onnodedragstart(de) {
      l(de), v();
    },
    get onnodedragstop() {
      return c();
    },
    set onnodedragstop(de) {
      c(de), v();
    },
    get onnodepointerenter() {
      return d();
    },
    set onnodepointerenter(de) {
      d(de), v();
    },
    get onnodepointerleave() {
      return p();
    },
    set onnodepointerleave(de) {
      p(de), v();
    },
    get onnodepointermove() {
      return f();
    },
    set onnodepointermove(de) {
      f(de), v();
    },
    get onnodecontextmenu() {
      return g();
    },
    set onnodecontextmenu(de) {
      g(de), v();
    }
  });
}
re(
  Pc,
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
var P0 = /* @__PURE__ */ G('<div class="svelte-flow__nodes"></div>');
function Nc(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "nodeClickDistance", 7), o = m(t, "onnodeclick", 7), i = m(t, "onnodecontextmenu", 7), s = m(t, "onnodepointerenter", 7), a = m(t, "onnodepointermove", 7), l = m(t, "onnodepointerleave", 7), c = m(t, "onnodedrag", 7), d = m(t, "onnodedragstart", 7), p = m(t, "onnodedragstop", 7);
  const f = typeof ResizeObserver > "u" ? null : new ResizeObserver((h) => {
    const y = /* @__PURE__ */ new Map();
    h.forEach(($) => {
      const w = $.target.getAttribute("data-id");
      y.set(w, { id: w, nodeElement: $.target, force: !0 });
    }), n().updateNodeInternals(y);
  });
  ri(() => {
    f?.disconnect();
  });
  var g = P0();
  return ut(g, 21, () => n().visible.nodes.values(), (h) => h.id, (h, y) => {
    Pc(h, {
      get node() {
        return u(y);
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
        return c();
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
      set store($) {
        n($);
      }
    });
  }), A(g), O(e, g), ue({
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
      return c();
    },
    set onnodedrag(h) {
      c(h), v();
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
re(
  Nc,
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
var N0 = /* @__PURE__ */ he('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function Mc(e, t) {
  le(t, !0);
  const n = m(t, "edge", 7), r = m(t, "store", 15), o = m(t, "onedgeclick", 7), i = m(t, "onedgecontextmenu", 7), s = m(t, "onedgepointerenter", 7), a = m(t, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ S(() => n().source), c = /* @__PURE__ */ S(() => n().target), d = /* @__PURE__ */ S(() => n().sourceX), p = /* @__PURE__ */ S(() => n().sourceY), f = /* @__PURE__ */ S(() => n().targetX), g = /* @__PURE__ */ S(() => n().targetY), h = /* @__PURE__ */ S(() => n().sourcePosition), y = /* @__PURE__ */ S(() => n().targetPosition), $ = /* @__PURE__ */ S(() => at(n().animated, !1)), w = /* @__PURE__ */ S(() => at(n().selected, !1)), P = /* @__PURE__ */ S(() => n().label), x = /* @__PURE__ */ S(() => n().labelStyle), C = /* @__PURE__ */ S(() => at(n().data, () => ({}), !0)), _ = /* @__PURE__ */ S(() => n().style), V = /* @__PURE__ */ S(() => n().interactionWidth), L = /* @__PURE__ */ S(() => at(n().type, "default")), Z = /* @__PURE__ */ S(() => n().sourceHandle), Y = /* @__PURE__ */ S(() => n().targetHandle), j = /* @__PURE__ */ S(() => n().markerStart), N = /* @__PURE__ */ S(() => n().markerEnd), k = /* @__PURE__ */ S(() => n().selectable), H = /* @__PURE__ */ S(() => n().focusable), b = /* @__PURE__ */ S(() => at(n().deletable, !0)), E = /* @__PURE__ */ S(() => n().hidden), M = /* @__PURE__ */ S(() => n().zIndex), z = /* @__PURE__ */ S(() => n().class), q = /* @__PURE__ */ S(() => n().ariaLabel), D = null;
  const { id: R } = n();
  dr("svelteflow__edge_id", R);
  let U = /* @__PURE__ */ S(() => u(k) ?? r().elementsSelectable), X = /* @__PURE__ */ S(() => u(H) ?? r().edgesFocusable), ee = /* @__PURE__ */ S(() => r().edgeTypes[u(L)] ?? Ks), W = /* @__PURE__ */ S(() => u(j) ? `url('#${Qi(u(j), r().flowId)}')` : void 0), ce = /* @__PURE__ */ S(() => u(N) ? `url('#${Qi(u(N), r().flowId)}')` : void 0);
  function te(Q) {
    const fe = r().edgeLookup.get(R);
    fe && (u(U) && r().handleEdgeSelection(R), o()?.({ event: Q, edge: fe }));
  }
  function ge(Q, fe) {
    const J = r().edgeLookup.get(R);
    J && fe({ event: Q, edge: J });
  }
  function F(Q) {
    if (!r().disableKeyboardA11y && qu.includes(Q.key) && u(U)) {
      const { unselectNodesAndEdges: fe, addSelectedEdges: J } = r();
      Q.key === "Escape" ? (D?.blur(), fe({ edges: [n()] })) : J([R]);
    }
  }
  var Ce = De(), pe = se(Ce);
  {
    var oe = (Q) => {
      var fe = N0();
      let J;
      var ye = I(fe);
      Xe(
        ye,
        (_e) => ({
          class: ["svelte-flow__edge", u(z)],
          "data-id": R,
          onclick: te,
          oncontextmenu: i() ? (B) => {
            ge(B, i());
          } : void 0,
          onpointerenter: s() ? (B) => {
            ge(B, s());
          } : void 0,
          onpointerleave: a() ? (B) => {
            ge(B, a());
          } : void 0,
          "aria-label": u(q) === null ? void 0 : u(q) ? u(q) : `Edge from ${u(l)} to ${u(c)}`,
          "aria-describedby": u(X) ? `${Ec}-${r().flowId}` : void 0,
          role: n().ariaRole ?? (u(X) ? "group" : "img"),
          "aria-roledescription": "edge",
          onkeydown: u(X) ? F : void 0,
          tabindex: u(X) ? 0 : void 0,
          ...n().domAttributes,
          [Cn]: _e
        }),
        [
          () => ({
            animated: u($),
            selected: u(w),
            selectable: u(U)
          })
        ]
      );
      var ne = I(ye);
      Es(ne, () => u(ee), (_e, B) => {
        B(_e, {
          get id() {
            return R;
          },
          get source() {
            return u(l);
          },
          get target() {
            return u(c);
          },
          get sourceX() {
            return u(d);
          },
          get sourceY() {
            return u(p);
          },
          get targetX() {
            return u(f);
          },
          get targetY() {
            return u(g);
          },
          get sourcePosition() {
            return u(h);
          },
          get targetPosition() {
            return u(y);
          },
          get animated() {
            return u($);
          },
          get selected() {
            return u(w);
          },
          get label() {
            return u(P);
          },
          get labelStyle() {
            return u(x);
          },
          get data() {
            return u(C);
          },
          get style() {
            return u(_);
          },
          get interactionWidth() {
            return u(V);
          },
          get selectable() {
            return u(U);
          },
          get deletable() {
            return u(b);
          },
          get type() {
            return u(L);
          },
          get sourceHandleId() {
            return u(Z);
          },
          get targetHandleId() {
            return u(Y);
          },
          get markerStart() {
            return u(W);
          },
          get markerEnd() {
            return u(ce);
          }
        });
      }), A(ye), Mt(ye, (_e) => D = _e, () => D), A(fe), $e((_e) => J = ct(fe, "", J, _e), [() => ({ "z-index": u(M) })]), O(Q, fe);
    };
    ae(pe, (Q) => {
      u(E) || Q(oe);
    });
  }
  return O(e, Ce), ue({
    get edge() {
      return n();
    },
    set edge(Q) {
      n(Q), v();
    },
    get store() {
      return r();
    },
    set store(Q) {
      r(Q), v();
    },
    get onedgeclick() {
      return o();
    },
    set onedgeclick(Q) {
      o(Q), v();
    },
    get onedgecontextmenu() {
      return i();
    },
    set onedgecontextmenu(Q) {
      i(Q), v();
    },
    get onedgepointerenter() {
      return s();
    },
    set onedgepointerenter(Q) {
      s(Q), v();
    },
    get onedgepointerleave() {
      return a();
    },
    set onedgepointerleave(Q) {
      a(Q), v();
    }
  });
}
re(
  Mc,
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
yf();
var M0 = /* @__PURE__ */ he("<defs></defs>");
function Vc(e, t) {
  le(t, !1);
  const n = Dt();
  lu();
  var r = M0();
  ut(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    Dc(o, Ie(() => u(i)));
  }), A(r), O(e, r), ue();
}
re(Vc, {}, [], [], !0);
var V0 = /* @__PURE__ */ he('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), D0 = /* @__PURE__ */ he('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), O0 = /* @__PURE__ */ he('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Dc(e, t) {
  le(t, !0);
  let n = m(t, "id", 7), r = m(t, "type", 7), o = m(t, "width", 7, 12.5), i = m(t, "height", 7, 12.5), s = m(t, "markerUnits", 7, "strokeWidth"), a = m(t, "orient", 7, "auto-start-reverse"), l = m(t, "color", 7), c = m(t, "strokeWidth", 7);
  var d = O0(), p = I(d);
  {
    var f = (h) => {
      var y = V0();
      $e(() => {
        me(y, "stroke", l()), me(y, "stroke-width", c());
      }), O(h, y);
    }, g = (h, y) => {
      {
        var $ = (w) => {
          var P = D0();
          $e(() => {
            me(P, "stroke", l()), me(P, "stroke-width", c()), me(P, "fill", l());
          }), O(w, P);
        };
        ae(
          h,
          (w) => {
            r() === jr.ArrowClosed && w($);
          },
          y
        );
      }
    };
    ae(p, (h) => {
      r() === jr.Arrow ? h(f) : h(g, !1);
    });
  }
  return A(d), $e(() => {
    me(d, "id", n()), me(d, "markerWidth", `${o()}`), me(d, "markerHeight", `${i()}`), me(d, "markerUnits", s()), me(d, "orient", a());
  }), O(e, d), ue({
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
      return c();
    },
    set strokeWidth(h) {
      c(h), v();
    }
  });
}
re(
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
var H0 = /* @__PURE__ */ G('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function Oc(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "onedgeclick", 7), o = m(t, "onedgecontextmenu", 7), i = m(t, "onedgepointerenter", 7), s = m(t, "onedgepointerleave", 7);
  var a = H0(), l = I(a), c = I(l);
  Vc(c, {}), A(l);
  var d = T(l, 2);
  return ut(d, 17, () => n().visible.edges.values(), (p) => p.id, (p, f) => {
    Mc(p, {
      get edge() {
        return u(f);
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
  }), A(a), O(e, a), ue({
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
re(
  Oc,
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
var L0 = /* @__PURE__ */ G('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const z0 = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function js(e, t) {
  le(t, !0), ze(e, z0);
  let n = m(t, "x", 7, 0), r = m(t, "y", 7, 0), o = m(t, "width", 7, 0), i = m(t, "height", 7, 0), s = m(t, "isVisible", 7, !0);
  var a = De(), l = se(a);
  {
    var c = (d) => {
      var p = L0();
      let f;
      $e((g) => f = ct(p, "", f, g), [
        () => ({
          width: typeof o() == "string" ? o() : Ut(o()),
          height: typeof i() == "string" ? i() : Ut(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), O(d, p);
    };
    ae(l, (d) => {
      s() && d(c);
    });
  }
  return O(e, a), ue({
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
re(js, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
function T0(e, t, n) {
  const r = t().nodes.filter((o) => o.selected);
  n()?.({ nodes: r, event: e });
}
function A0(e, t, n) {
  const r = t().nodes.filter((o) => o.selected);
  n()?.({ nodes: r, event: e });
}
var I0 = /* @__PURE__ */ G("<div><!></div>");
const q0 = {
  hash: "svelte-16qgzgd",
  code: ".svelte-flow__selection-wrapper.svelte-16qgzgd {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}"
};
function Hc(e, t) {
  le(t, !0), ze(e, q0);
  let n = m(t, "store", 15), r = m(t, "onnodedrag", 7), o = m(t, "onnodedragstart", 7), i = m(t, "onnodedragstop", 7), s = m(t, "onselectionclick", 7), a = m(t, "onselectioncontextmenu", 7), l = /* @__PURE__ */ Ee(void 0);
  je(() => {
    n().disableKeyboardA11y || u(l)?.focus({ preventScroll: !0 });
  });
  let c = /* @__PURE__ */ S(() => n().selectionRectMode === "nodes" ? (n().nodes, ao(n().nodeLookup, { filter: (h) => !!h.selected })) : null);
  function d(h) {
    Object.prototype.hasOwnProperty.call(Wo, h.key) && (h.preventDefault(), n().moveSelectedNodes(Wo[h.key], h.shiftKey ? 4 : 1));
  }
  var p = De(), f = se(p);
  {
    var g = (h) => {
      var y = I0();
      y.__contextmenu = [T0, n, a], y.__click = [A0, n, s], y.__keydown = function(...P) {
        (n().disableKeyboardA11y ? void 0 : d)?.apply(this, P);
      };
      let $;
      var w = I(y);
      js(w, { width: "100%", height: "100%", x: 0, y: 0 }), A(y), rt(y, (P, x) => _c?.(P, x), () => ({
        disabled: !1,
        store: n(),
        onDrag: (P, x, C, _) => {
          r()?.({ event: P, targetNode: null, nodes: _ });
        },
        onDragStart: (P, x, C, _) => {
          o()?.({ event: P, targetNode: null, nodes: _ });
        },
        onDragStop: (P, x, C, _) => {
          i()?.({ event: P, targetNode: null, nodes: _ });
        }
      })), Mt(y, (P) => K(l, P), () => u(l)), $e(
        (P) => {
          mt(y, 1, wn(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-16qgzgd"), me(y, "role", n().disableKeyboardA11y ? void 0 : "button"), me(y, "tabindex", n().disableKeyboardA11y ? void 0 : -1), $ = ct(y, "", $, P);
        },
        [
          () => ({
            width: Ut(u(c).width),
            height: Ut(u(c).height),
            transform: `translate(${u(c).x ?? ""}px, ${u(c).y ?? ""}px)`
          })
        ]
      ), O(h, y);
    };
    ae(f, (h) => {
      n().selectionRectMode === "nodes" && u(c) && sn(u(c).x) && sn(u(c).y) && h(g);
    });
  }
  return O(e, p), ue({
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
On(["contextmenu", "click", "keydown"]);
re(
  Hc,
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
function Z0(e) {
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
function Zt(e, t) {
  let { enabled: n = !0, trigger: r, type: o = "keydown" } = t;
  function i(a) {
    const l = Array.isArray(r) ? r : [r], c = [a.metaKey, a.altKey, a.shiftKey, a.ctrlKey].reduce(
      (d, p, f) => p ? d | 1 << f : d,
      0
    );
    for (const d of l) {
      const p = {
        preventDefault: !1,
        enabled: !0,
        ...d
      }, { modifier: f, key: g, callback: h, preventDefault: y, enabled: $ } = p;
      if ($) {
        if (a.key !== g) continue;
        if (f === null || f === !1) {
          if (c !== 0) continue;
        } else if (f !== void 0 && f?.[0]?.length > 0) {
          const P = Array.isArray(f) ? f : [f];
          let x = !1;
          for (const C of P)
            if ((Array.isArray(C) ? C : [C]).reduce(
              (_, V) => _ | Z0(V),
              0
            ) === c) {
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
  return n && (s = qi(e, o, i)), {
    update: (a) => {
      const { enabled: l = !0, type: c = "keydown" } = a;
      n && (!l || o !== c) ? s?.() : !n && l && (s = qi(e, c, i)), n = l, o = c, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function it() {
  const e = /* @__PURE__ */ S(Dt), t = (i) => {
    const s = Ja(i) ? i : u(e).nodeLookup.get(i.id), a = s.parentId ? pv(s.position, s.measured, s.parentId, u(e).nodeLookup, u(e).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return yr(l);
  };
  function n(i, s, a = { replace: !1 }) {
    u(e).nodes = et(() => u(e).nodes).map((l) => {
      if (l.id === i) {
        const c = typeof s == "function" ? s(l) : s;
        return a?.replace && Ja(c) ? c : { ...l, ...c };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    u(e).edges = et(() => u(e).edges).map((l) => {
      if (l.id === i) {
        const c = typeof s == "function" ? s(l) : s;
        return a.replace && i0(c) ? c : { ...l, ...c };
      }
      return l;
    });
  }
  const o = (i) => u(e).nodeLookup.get(i);
  return {
    zoomIn: u(e).zoomIn,
    zoomOut: u(e).zoomOut,
    getInternalNode: o,
    getNode: (i) => o(i)?.internals.userNode,
    getNodes: (i) => i === void 0 ? u(e).nodes : ol(u(e).nodeLookup, i),
    getEdge: (i) => u(e).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? u(e).edges : ol(u(e).edgeLookup, i),
    setZoom: (i, s) => {
      const a = u(e).panZoom;
      return a ? a.scaleTo(i, { duration: s?.duration }) : Promise.resolve(!1);
    },
    getZoom: () => u(e).viewport.zoom,
    setViewport: async (i, s) => {
      const a = u(e).viewport;
      return u(e).panZoom ? (await u(e).panZoom.setViewport(
        {
          x: i.x ?? a.x,
          y: i.y ?? a.y,
          zoom: i.zoom ?? a.zoom
        },
        s
      ), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => _l(u(e).viewport),
    setCenter: async (i, s, a) => u(e).setCenter(i, s, a),
    fitView: (i) => u(e).fitView(i),
    fitBounds: async (i, s) => {
      if (!u(e).panZoom)
        return Promise.resolve(!1);
      const a = As(i, u(e).width, u(e).height, u(e).minZoom, u(e).maxZoom, s?.padding ?? 0.1);
      return await u(e).panZoom.setViewport(a, {
        duration: s?.duration,
        ease: s?.ease,
        interpolate: s?.interpolate
      }), Promise.resolve(!0);
    },
    getIntersectingNodes: (i, s = !0, a) => {
      const l = qa(i), c = l ? i : t(i);
      return c ? (a || u(e).nodes).filter((d) => {
        const p = u(e).nodeLookup.get(d.id);
        if (!p || !l && d.id === i.id)
          return !1;
        const f = yr(p), g = Yr(f, c);
        return s && g > 0 || g >= c.width * c.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const l = qa(i) ? i : t(i);
      if (!l)
        return !1;
      const c = Yr(l, s);
      return a && c > 0 || c >= l.width * l.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: l } = await cv({
        nodesToRemove: i,
        edgesToRemove: s,
        nodes: u(e).nodes,
        edges: u(e).edges,
        onBeforeDelete: u(e).onbeforedelete
      });
      return a && (u(e).nodes = et(() => u(e).nodes).filter((c) => !a.some(({ id: d }) => d === c.id))), l && (u(e).edges = et(() => u(e).edges).filter((c) => !l.some(({ id: d }) => d === c.id))), { deletedNodes: a, deletedEdges: l };
    },
    screenToFlowPosition: (i, s = { snapToGrid: !0 }) => {
      if (!u(e).domNode)
        return i;
      const a = s.snapToGrid ? u(e).snapGrid : !1, { x: l, y: c, zoom: d } = u(e).viewport, { x: p, y: f } = u(e).domNode.getBoundingClientRect(), g = { x: i.x - p, y: i.y - f };
      return lo(g, [l, c, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!u(e).domNode)
        return i;
      const { x: s, y: a, zoom: l } = u(e).viewport, { x: c, y: d } = u(e).domNode.getBoundingClientRect(), p = Yo(i, [s, a, l]);
      return { x: p.x + c, y: p.y + d };
    },
    toObject: () => structuredClone({
      nodes: [...u(e).nodes],
      edges: [...u(e).edges],
      viewport: { ...u(e).viewport }
    }),
    updateNode: n,
    updateNodeData: (i, s, a) => {
      const l = u(e).nodeLookup.get(i)?.internals.userNode;
      if (!l)
        return;
      const c = typeof s == "function" ? s(l) : s;
      n(i, (d) => ({
        ...d,
        data: a?.replace ? c : { ...d.data, ...c }
      }));
    },
    updateEdge: r,
    getNodesBounds: (i) => sv(i, {
      nodeLookup: u(e).nodeLookup,
      nodeOrigin: u(e).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(u(e).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
  };
}
function ol(e, t) {
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
function Lc(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "selectionKey", 7, "Shift"), o = m(t, "multiSelectionKey", 23, () => or() ? "Meta" : "Control"), i = m(t, "deleteKey", 7, "Backspace"), s = m(t, "panActivationKey", 7, " "), a = m(t, "zoomActivationKey", 23, () => or() ? "Meta" : "Control"), { deleteElements: l } = it();
  function c(y) {
    return y !== null && typeof y == "object";
  }
  function d(y) {
    return c(y) ? y.modifier || [] : [];
  }
  function p(y) {
    return y == null ? "" : c(y) ? y.key : y;
  }
  function f(y, $) {
    return (Array.isArray(y) ? y : [y]).map((w) => {
      const P = p(w);
      return {
        key: P,
        modifier: d(w),
        enabled: P !== null,
        callback: $
      };
    });
  }
  function g() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  async function h() {
    const y = n().nodes.filter((x) => x.selected), $ = n().edges.filter((x) => x.selected), { deletedNodes: w, deletedEdges: P } = await l({ nodes: y, edges: $ });
    (w.length > 0 || P.length > 0) && n().ondelete?.({ nodes: w, edges: P });
  }
  return ua("blur", ft, g), ua("contextmenu", ft, g), rt(ft, (y, $) => Zt?.(y, $), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), rt(ft, (y, $) => Zt?.(y, $), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), rt(ft, (y, $) => Zt?.(y, $), () => ({
    trigger: f(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), rt(ft, (y, $) => Zt?.(y, $), () => ({
    trigger: f(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), rt(ft, (y, $) => Zt?.(y, $), () => ({
    trigger: f(i(), (y) => {
      !(y.originalEvent.ctrlKey || y.originalEvent.metaKey || y.originalEvent.shiftKey) && !Gu(y.originalEvent) && (n(n().deleteKeyPressed = !0, !0), h());
    }),
    type: "keydown"
  })), rt(ft, (y, $) => Zt?.(y, $), () => ({
    trigger: f(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), rt(ft, (y, $) => Zt?.(y, $), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), rt(ft, (y, $) => Zt?.(y, $), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), rt(ft, (y, $) => Zt?.(y, $), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), rt(ft, (y, $) => Zt?.(y, $), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), ue({
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
re(
  Lc,
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
var B0 = /* @__PURE__ */ he('<path fill="none" class="svelte-flow__connection-path"></path>'), R0 = /* @__PURE__ */ he('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function zc(e, t) {
  le(t, !0);
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
      case rn.Bezier: {
        const [f] = Ju(p);
        return f;
      }
      case rn.Straight: {
        const [f] = ec(p);
        return f;
      }
      case rn.Step:
      case rn.SmoothStep: {
        const [f] = Is({
          ...p,
          borderRadius: r() === rn.Step ? 0 : void 0
        });
        return f;
      }
    }
  });
  var l = De(), c = se(l);
  {
    var d = (p) => {
      var f = R0(), g = I(f), h = I(g);
      {
        var y = (w) => {
          var P = De(), x = se(P);
          Es(x, s, (C, _) => {
            _(C, {});
          }), O(w, P);
        }, $ = (w) => {
          var P = B0();
          $e(() => {
            me(P, "d", u(a)), ct(P, i());
          }), O(w, P);
        };
        ae(h, (w) => {
          s() ? w(y) : w($, !1);
        });
      }
      A(g), A(f), $e(
        (w) => {
          me(f, "width", n().width), me(f, "height", n().height), ct(f, o()), mt(g, 0, w);
        },
        [
          () => wn([
            "svelte-flow__connection",
            ov(n().connection.isValid)
          ])
        ]
      ), O(p, f);
    };
    ae(c, (p) => {
      n().connection.inProgress && p(d);
    });
  }
  return O(e, l), ue({
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
re(
  zc,
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
var K0 = /* @__PURE__ */ G("<div><!></div>");
function co(e, t) {
  le(t, !0);
  let n = m(t, "position", 7, "top-right"), r = m(t, "style", 7), o = m(t, "class", 7), i = m(t, "children", 7), s = /* @__PURE__ */ Te(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "position",
    "style",
    "class",
    "children"
  ]), a = /* @__PURE__ */ S(() => `${n()}`.split("-"));
  var l = K0();
  Xe(l, (d) => ({ class: d, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...u(a)]
  ]);
  var c = I(l);
  return Be(c, () => i() ?? tt), A(l), O(e, l), ue({
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
re(co, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var j0 = /* @__PURE__ */ G('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function Tc(e, t) {
  le(t, !0);
  let n = m(t, "proOptions", 7), r = m(t, "position", 7, "bottom-right");
  var o = De(), i = se(o);
  {
    var s = (a) => {
      co(a, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, c) => {
          var d = j0();
          O(l, d);
        },
        $$slots: { default: !0 }
      });
    };
    ae(i, (a) => {
      n()?.hideAttribution || a(s);
    });
  }
  return O(e, o), ue({
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
re(Tc, { proOptions: {}, position: {} }, [], [], !0);
var Y0 = /* @__PURE__ */ G("<div><!></div>");
const W0 = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function Ac(e, t) {
  le(t, !0), ze(e, W0);
  let n = m(t, "width", 7), r = m(t, "height", 7), o = m(t, "colorMode", 7), i = m(t, "domNode", 15), s = m(t, "clientWidth", 15), a = m(t, "clientHeight", 15), l = m(t, "children", 7), c = m(t, "rest", 7), d = /* @__PURE__ */ S(() => c().class), p = /* @__PURE__ */ S(() => Af(c(), [
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
    y.currentTarget.scrollTo({ top: 0, left: 0, behavior: "auto" }), c().onscroll && c().onscroll(y);
  }
  var g = Y0();
  Xe(
    g,
    (y) => ({
      class: [
        "svelte-flow",
        "svelte-flow__container",
        u(d),
        o()
      ],
      "data-testid": "svelte-flow__wrapper",
      role: "application",
      onscroll: f,
      ...u(p),
      [Rt]: y
    }),
    [
      () => ({ width: Ut(n()), height: Ut(r()) })
    ],
    "svelte-12wlba6"
  );
  var h = I(g);
  return Be(h, () => l() ?? tt), A(g), Mt(g, (y) => i(y), () => i()), va(g, "clientHeight", a), va(g, "clientWidth", s), O(e, g), ue({
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
      return c();
    },
    set rest(y) {
      c(y), v();
    }
  });
}
re(
  Ac,
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
var X0 = /* @__PURE__ */ G('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), F0 = /* @__PURE__ */ G("<!> <!>", 1), G0 = /* @__PURE__ */ G("<!> <!> <!> <!> <!>", 1);
function Ic(e, t) {
  le(t, !0);
  let n = m(t, "width", 7), r = m(t, "height", 7), o = m(t, "proOptions", 7), i = m(t, "selectionKey", 7), s = m(t, "deleteKey", 7), a = m(t, "panActivationKey", 7), l = m(t, "multiSelectionKey", 7), c = m(t, "zoomActivationKey", 7), d = m(t, "paneClickDistance", 7, 1), p = m(t, "nodeClickDistance", 7, 1), f = m(t, "onmovestart", 7), g = m(t, "onmoveend", 7), h = m(t, "onmove", 7), y = m(t, "oninit", 7), $ = m(t, "onnodeclick", 7), w = m(t, "onnodecontextmenu", 7), P = m(t, "onnodedrag", 7), x = m(t, "onnodedragstart", 7), C = m(t, "onnodedragstop", 7), _ = m(t, "onnodepointerenter", 7), V = m(t, "onnodepointermove", 7), L = m(t, "onnodepointerleave", 7), Z = m(t, "onselectionclick", 7), Y = m(t, "onselectioncontextmenu", 7), j = m(t, "onselectionstart", 7), N = m(t, "onselectionend", 7), k = m(t, "onedgeclick", 7), H = m(t, "onedgecontextmenu", 7), b = m(t, "onedgepointerenter", 7), E = m(t, "onedgepointerleave", 7), M = m(t, "onpaneclick", 7), z = m(t, "onpanecontextmenu", 7), q = m(t, "panOnScrollMode", 23, () => Wt.Free), D = m(t, "preventScrolling", 7, !0), R = m(t, "zoomOnScroll", 7, !0), U = m(t, "zoomOnDoubleClick", 7, !0), X = m(t, "zoomOnPinch", 7, !0), ee = m(t, "panOnScroll", 7, !1), W = m(t, "panOnDrag", 7, !0), ce = m(t, "selectionOnDrag", 7, !0), te = m(t, "connectionLineComponent", 7), ge = m(t, "connectionLineStyle", 7), F = m(t, "connectionLineContainerStyle", 7), Ce = m(t, "connectionLineType", 23, () => rn.Bezier), pe = m(t, "attributionPosition", 7), oe = m(t, "children", 7), Q = m(t, "nodes", 31, () => Nt([])), fe = m(t, "edges", 31, () => Nt([])), J = m(t, "viewport", 31, () => {
  }), ye = /* @__PURE__ */ Te(t, [
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
  ]), ne = bc({
    props: ye,
    width: n(),
    height: r(),
    get nodes() {
      return Q();
    },
    set nodes(B) {
      Q(B);
    },
    get edges() {
      return fe();
    },
    set edges(B) {
      fe(B);
    },
    get viewport() {
      return J();
    },
    set viewport(B) {
      J(B);
    }
  });
  const _e = pn(Xr);
  return _e && _e.setStore && _e.setStore(ne), dr(Xr, {
    provider: !1,
    getStore() {
      return ne;
    }
  }), je(() => {
    const B = { nodes: ne.selectedNodes, edges: ne.selectedEdges };
    et(() => t.onselectionchange)?.(B);
    for (const Ue of ne.selectionChangeHandlers.values())
      Ue(B);
  }), ri(() => {
    ne.reset();
  }), Ac(e, {
    get colorMode() {
      return ne.colorMode;
    },
    get width() {
      return n();
    },
    get height() {
      return r();
    },
    get rest() {
      return ye;
    },
    get domNode() {
      return ne.domNode;
    },
    set domNode(B) {
      ne.domNode = B;
    },
    get clientWidth() {
      return ne.width;
    },
    set clientWidth(B) {
      ne.width = B;
    },
    get clientHeight() {
      return ne.height;
    },
    set clientHeight(B) {
      ne.height = B;
    },
    children: (B, Ue) => {
      var ie = G0(), xe = se(ie);
      Lc(xe, {
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
          return c();
        },
        get store() {
          return ne;
        },
        set store(Ve) {
          ne = Ve;
        }
      });
      var ke = T(xe, 2);
      xc(ke, {
        get panOnScrollMode() {
          return q();
        },
        get preventScrolling() {
          return D();
        },
        get zoomOnScroll() {
          return R();
        },
        get zoomOnDoubleClick() {
          return U();
        },
        get zoomOnPinch() {
          return X();
        },
        get panOnScroll() {
          return ee();
        },
        get panOnDrag() {
          return W();
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
          return ne;
        },
        set store(Ve) {
          ne = Ve;
        },
        children: (Ve, Ye) => {
          Cc(Ve, {
            get onpaneclick() {
              return M();
            },
            get onpanecontextmenu() {
              return z();
            },
            get onselectionstart() {
              return j();
            },
            get onselectionend() {
              return N();
            },
            get panOnDrag() {
              return W();
            },
            get selectionOnDrag() {
              return ce();
            },
            get store() {
              return ne;
            },
            set store(de) {
              ne = de;
            },
            children: (de, Ze) => {
              var st = F0(), Re = se(st);
              $c(Re, {
                get store() {
                  return ne;
                },
                set store(wi) {
                  ne = wi;
                },
                children: (wi, jw) => {
                  var Us = X0(), Js = T(se(Us), 2);
                  Oc(Js, {
                    get onedgeclick() {
                      return k();
                    },
                    get onedgecontextmenu() {
                      return H();
                    },
                    get onedgepointerenter() {
                      return b();
                    },
                    get onedgepointerleave() {
                      return E();
                    },
                    get store() {
                      return ne;
                    },
                    set store(In) {
                      ne = In;
                    }
                  });
                  var Qs = T(Js, 4);
                  zc(Qs, {
                    get type() {
                      return Ce();
                    },
                    get LineComponent() {
                      return te();
                    },
                    get containerStyle() {
                      return F();
                    },
                    get style() {
                      return ge();
                    },
                    get store() {
                      return ne;
                    },
                    set store(In) {
                      ne = In;
                    }
                  });
                  var ea = T(Qs, 2);
                  Nc(ea, {
                    get nodeClickDistance() {
                      return p();
                    },
                    get onnodeclick() {
                      return $();
                    },
                    get onnodecontextmenu() {
                      return w();
                    },
                    get onnodepointerenter() {
                      return _();
                    },
                    get onnodepointermove() {
                      return V();
                    },
                    get onnodepointerleave() {
                      return L();
                    },
                    get onnodedrag() {
                      return P();
                    },
                    get onnodedragstart() {
                      return x();
                    },
                    get onnodedragstop() {
                      return C();
                    },
                    get store() {
                      return ne;
                    },
                    set store(In) {
                      ne = In;
                    }
                  });
                  var Hd = T(ea, 2);
                  Hc(Hd, {
                    get onselectionclick() {
                      return Z();
                    },
                    get onselectioncontextmenu() {
                      return Y();
                    },
                    get onnodedrag() {
                      return P();
                    },
                    get onnodedragstart() {
                      return x();
                    },
                    get onnodedragstop() {
                      return C();
                    },
                    get store() {
                      return ne;
                    },
                    set store(In) {
                      ne = In;
                    }
                  }), we(2), O(wi, Us);
                },
                $$slots: { default: !0 }
              });
              var St = T(Re, 2);
              const Je = /* @__PURE__ */ S(() => !!(ne.selectionRect && ne.selectionRectMode === "user")), qt = /* @__PURE__ */ S(() => ne.selectionRect?.width), yi = /* @__PURE__ */ S(() => ne.selectionRect?.height), Tn = /* @__PURE__ */ S(() => ne.selectionRect?.x), An = /* @__PURE__ */ S(() => ne.selectionRect?.y);
              js(St, {
                get isVisible() {
                  return u(Je);
                },
                get width() {
                  return u(qt);
                },
                get height() {
                  return u(yi);
                },
                get x() {
                  return u(Tn);
                },
                get y() {
                  return u(An);
                }
              }), O(de, st);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var Oe = T(ke, 2);
      Tc(Oe, {
        get proOptions() {
          return o();
        },
        get position() {
          return pe();
        }
      });
      var dt = T(Oe, 2);
      kc(dt, {
        get store() {
          return ne;
        }
      });
      var kt = T(dt, 2);
      Be(kt, () => oe() ?? tt), O(B, ie);
    },
    $$slots: { default: !0 }
  }), ue({
    get width() {
      return n();
    },
    set width(B) {
      n(B), v();
    },
    get height() {
      return r();
    },
    set height(B) {
      r(B), v();
    },
    get proOptions() {
      return o();
    },
    set proOptions(B) {
      o(B), v();
    },
    get selectionKey() {
      return i();
    },
    set selectionKey(B) {
      i(B), v();
    },
    get deleteKey() {
      return s();
    },
    set deleteKey(B) {
      s(B), v();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(B) {
      a(B), v();
    },
    get multiSelectionKey() {
      return l();
    },
    set multiSelectionKey(B) {
      l(B), v();
    },
    get zoomActivationKey() {
      return c();
    },
    set zoomActivationKey(B) {
      c(B), v();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(B = 1) {
      d(B), v();
    },
    get nodeClickDistance() {
      return p();
    },
    set nodeClickDistance(B = 1) {
      p(B), v();
    },
    get onmovestart() {
      return f();
    },
    set onmovestart(B) {
      f(B), v();
    },
    get onmoveend() {
      return g();
    },
    set onmoveend(B) {
      g(B), v();
    },
    get onmove() {
      return h();
    },
    set onmove(B) {
      h(B), v();
    },
    get oninit() {
      return y();
    },
    set oninit(B) {
      y(B), v();
    },
    get onnodeclick() {
      return $();
    },
    set onnodeclick(B) {
      $(B), v();
    },
    get onnodecontextmenu() {
      return w();
    },
    set onnodecontextmenu(B) {
      w(B), v();
    },
    get onnodedrag() {
      return P();
    },
    set onnodedrag(B) {
      P(B), v();
    },
    get onnodedragstart() {
      return x();
    },
    set onnodedragstart(B) {
      x(B), v();
    },
    get onnodedragstop() {
      return C();
    },
    set onnodedragstop(B) {
      C(B), v();
    },
    get onnodepointerenter() {
      return _();
    },
    set onnodepointerenter(B) {
      _(B), v();
    },
    get onnodepointermove() {
      return V();
    },
    set onnodepointermove(B) {
      V(B), v();
    },
    get onnodepointerleave() {
      return L();
    },
    set onnodepointerleave(B) {
      L(B), v();
    },
    get onselectionclick() {
      return Z();
    },
    set onselectionclick(B) {
      Z(B), v();
    },
    get onselectioncontextmenu() {
      return Y();
    },
    set onselectioncontextmenu(B) {
      Y(B), v();
    },
    get onselectionstart() {
      return j();
    },
    set onselectionstart(B) {
      j(B), v();
    },
    get onselectionend() {
      return N();
    },
    set onselectionend(B) {
      N(B), v();
    },
    get onedgeclick() {
      return k();
    },
    set onedgeclick(B) {
      k(B), v();
    },
    get onedgecontextmenu() {
      return H();
    },
    set onedgecontextmenu(B) {
      H(B), v();
    },
    get onedgepointerenter() {
      return b();
    },
    set onedgepointerenter(B) {
      b(B), v();
    },
    get onedgepointerleave() {
      return E();
    },
    set onedgepointerleave(B) {
      E(B), v();
    },
    get onpaneclick() {
      return M();
    },
    set onpaneclick(B) {
      M(B), v();
    },
    get onpanecontextmenu() {
      return z();
    },
    set onpanecontextmenu(B) {
      z(B), v();
    },
    get panOnScrollMode() {
      return q();
    },
    set panOnScrollMode(B = Wt.Free) {
      q(B), v();
    },
    get preventScrolling() {
      return D();
    },
    set preventScrolling(B = !0) {
      D(B), v();
    },
    get zoomOnScroll() {
      return R();
    },
    set zoomOnScroll(B = !0) {
      R(B), v();
    },
    get zoomOnDoubleClick() {
      return U();
    },
    set zoomOnDoubleClick(B = !0) {
      U(B), v();
    },
    get zoomOnPinch() {
      return X();
    },
    set zoomOnPinch(B = !0) {
      X(B), v();
    },
    get panOnScroll() {
      return ee();
    },
    set panOnScroll(B = !1) {
      ee(B), v();
    },
    get panOnDrag() {
      return W();
    },
    set panOnDrag(B = !0) {
      W(B), v();
    },
    get selectionOnDrag() {
      return ce();
    },
    set selectionOnDrag(B = !0) {
      ce(B), v();
    },
    get connectionLineComponent() {
      return te();
    },
    set connectionLineComponent(B) {
      te(B), v();
    },
    get connectionLineStyle() {
      return ge();
    },
    set connectionLineStyle(B) {
      ge(B), v();
    },
    get connectionLineContainerStyle() {
      return F();
    },
    set connectionLineContainerStyle(B) {
      F(B), v();
    },
    get connectionLineType() {
      return Ce();
    },
    set connectionLineType(B = rn.Bezier) {
      Ce(B), v();
    },
    get attributionPosition() {
      return pe();
    },
    set attributionPosition(B) {
      pe(B), v();
    },
    get children() {
      return oe();
    },
    set children(B) {
      oe(B), v();
    },
    get nodes() {
      return Q();
    },
    set nodes(B = []) {
      Q(B), v();
    },
    get edges() {
      return fe();
    },
    set edges(B = []) {
      fe(B), v();
    },
    get viewport() {
      return J();
    },
    set viewport(B = void 0) {
      J(B), v();
    }
  });
}
re(
  Ic,
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
function qc(e, t) {
  le(t, !0);
  let n = m(t, "children", 7), r = /* @__PURE__ */ Ee(bc({ props: {}, nodes: [], edges: [] }));
  dr(Xr, {
    provider: !0,
    getStore() {
      return u(r);
    },
    setStore: (s) => {
      K(r, s);
    }
  }), ri(() => {
    u(r).reset();
  });
  var o = De(), i = se(o);
  return Be(i, () => n() ?? tt), O(e, o), ue({
    get children() {
      return n();
    },
    set children(s) {
      n(s), v();
    }
  });
}
re(qc, { children: {} }, [], [], !0);
var U0 = /* @__PURE__ */ G("<button><!></button>");
function Dr(e, t) {
  le(t, !0);
  let n = m(t, "class", 7), r = m(t, "bgColor", 7), o = m(t, "bgColorHover", 7), i = m(t, "color", 7), s = m(t, "colorHover", 7), a = m(t, "borderColor", 7), l = m(t, "onclick", 7), c = m(t, "children", 7), d = /* @__PURE__ */ Te(t, [
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
  var p = U0();
  Xe(
    p,
    (g) => ({
      type: "button",
      onclick: l(),
      class: ["svelte-flow__controls-button", n()],
      ...d,
      [Rt]: g
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
  return Be(f, () => c() ?? tt), A(p), O(e, p), ue({
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
      return c();
    },
    set children(g) {
      c(g), v();
    }
  });
}
re(
  Dr,
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
var J0 = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function Zc(e) {
  var t = J0();
  O(e, t);
}
re(Zc, {}, [], [], !0);
var Q0 = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Bc(e) {
  var t = Q0();
  O(e, t);
}
re(Bc, {}, [], [], !0);
var em = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Rc(e) {
  var t = em();
  O(e, t);
}
re(Rc, {}, [], [], !0);
var tm = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Kc(e) {
  var t = tm();
  O(e, t);
}
re(Kc, {}, [], [], !0);
var nm = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function jc(e) {
  var t = nm();
  O(e, t);
}
re(jc, {}, [], [], !0);
var rm = /* @__PURE__ */ G("<!> <!>", 1), om = /* @__PURE__ */ G("<!> <!> <!> <!> <!> <!>", 1);
function Yc(e, t) {
  le(t, !0);
  let n = m(t, "position", 7, "bottom-left"), r = m(t, "orientation", 7, "vertical"), o = m(t, "showZoom", 7, !0), i = m(t, "showFitView", 7, !0), s = m(t, "showLock", 7, !0), a = m(t, "style", 7), l = m(t, "class", 7), c = m(t, "buttonBgColor", 7), d = m(t, "buttonBgColorHover", 7), p = m(t, "buttonColor", 7), f = m(t, "buttonColorHover", 7), g = m(t, "buttonBorderColor", 7), h = m(t, "fitViewOptions", 7), y = m(t, "children", 7), $ = m(t, "before", 7), w = m(t, "after", 7), P = /* @__PURE__ */ Te(t, [
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
  ]), x = /* @__PURE__ */ S(Dt);
  const C = {
    bgColor: c(),
    bgColorHover: d(),
    color: p(),
    colorHover: f(),
    borderColor: g()
  };
  let _ = /* @__PURE__ */ S(() => u(x).nodesDraggable || u(x).nodesConnectable || u(x).elementsSelectable), V = /* @__PURE__ */ S(() => u(x).viewport.zoom <= u(x).minZoom), L = /* @__PURE__ */ S(() => u(x).viewport.zoom >= u(x).maxZoom), Z = /* @__PURE__ */ S(() => u(x).ariaLabelConfig), Y = /* @__PURE__ */ S(() => r() === "horizontal" ? "horizontal" : "vertical");
  const j = () => {
    u(x).zoomIn();
  }, N = () => {
    u(x).zoomOut();
  }, k = () => {
    u(x).fitView(h());
  }, H = () => {
    let E = !u(_);
    u(x).nodesDraggable = E, u(x).nodesConnectable = E, u(x).elementsSelectable = E;
  }, b = /* @__PURE__ */ S(() => [
    "svelte-flow__controls",
    u(Y),
    l()
  ]);
  return co(e, Ie(
    {
      get class() {
        return u(b);
      },
      get position() {
        return n();
      },
      "data-testid": "svelte-flow__controls",
      get "aria-label"() {
        return u(Z)["controls.ariaLabel"];
      },
      get style() {
        return a();
      }
    },
    () => P,
    {
      children: (E, M) => {
        var z = om(), q = se(z);
        {
          var D = (pe) => {
            var oe = De(), Q = se(oe);
            Be(Q, $), O(pe, oe);
          };
          ae(q, (pe) => {
            $() && pe(D);
          });
        }
        var R = T(q, 2);
        {
          var U = (pe) => {
            var oe = rm(), Q = se(oe);
            Dr(Q, Ie(
              {
                onclick: j,
                class: "svelte-flow__controls-zoomin",
                get title() {
                  return u(Z)["controls.zoomIn.ariaLabel"];
                },
                get "aria-label"() {
                  return u(Z)["controls.zoomIn.ariaLabel"];
                },
                get disabled() {
                  return u(L);
                }
              },
              () => C,
              {
                children: (J, ye) => {
                  Zc(J);
                },
                $$slots: { default: !0 }
              }
            ));
            var fe = T(Q, 2);
            Dr(fe, Ie(
              {
                onclick: N,
                class: "svelte-flow__controls-zoomout",
                get title() {
                  return u(Z)["controls.zoomOut.ariaLabel"];
                },
                get "aria-label"() {
                  return u(Z)["controls.zoomOut.ariaLabel"];
                },
                get disabled() {
                  return u(V);
                }
              },
              () => C,
              {
                children: (J, ye) => {
                  Bc(J);
                },
                $$slots: { default: !0 }
              }
            )), O(pe, oe);
          };
          ae(R, (pe) => {
            o() && pe(U);
          });
        }
        var X = T(R, 2);
        {
          var ee = (pe) => {
            Dr(pe, Ie(
              {
                class: "svelte-flow__controls-fitview",
                onclick: k,
                get title() {
                  return u(Z)["controls.fitView.ariaLabel"];
                },
                get "aria-label"() {
                  return u(Z)["controls.fitView.ariaLabel"];
                }
              },
              () => C,
              {
                children: (oe, Q) => {
                  Rc(oe);
                },
                $$slots: { default: !0 }
              }
            ));
          };
          ae(X, (pe) => {
            i() && pe(ee);
          });
        }
        var W = T(X, 2);
        {
          var ce = (pe) => {
            Dr(pe, Ie(
              {
                class: "svelte-flow__controls-interactive",
                onclick: H,
                get title() {
                  return u(Z)["controls.interactive.ariaLabel"];
                },
                get "aria-label"() {
                  return u(Z)["controls.interactive.ariaLabel"];
                }
              },
              () => C,
              {
                children: (oe, Q) => {
                  var fe = De(), J = se(fe);
                  {
                    var ye = (_e) => {
                      jc(_e);
                    }, ne = (_e) => {
                      Kc(_e);
                    };
                    ae(J, (_e) => {
                      u(_) ? _e(ye) : _e(ne, !1);
                    });
                  }
                  O(oe, fe);
                },
                $$slots: { default: !0 }
              }
            ));
          };
          ae(W, (pe) => {
            s() && pe(ce);
          });
        }
        var te = T(W, 2);
        {
          var ge = (pe) => {
            var oe = De(), Q = se(oe);
            Be(Q, y), O(pe, oe);
          };
          ae(te, (pe) => {
            y() && pe(ge);
          });
        }
        var F = T(te, 2);
        {
          var Ce = (pe) => {
            var oe = De(), Q = se(oe);
            Be(Q, w), O(pe, oe);
          };
          ae(F, (pe) => {
            w() && pe(Ce);
          });
        }
        O(E, z);
      },
      $$slots: { default: !0 }
    }
  )), ue({
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
      return c();
    },
    set buttonBgColor(E) {
      c(E), v();
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
      return $();
    },
    set before(E) {
      $(E), v();
    },
    get after() {
      return w();
    },
    set after(E) {
      w(E), v();
    }
  });
}
re(
  Yc,
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
var an;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(an || (an = {}));
var im = /* @__PURE__ */ he("<circle></circle>");
function Wc(e, t) {
  le(t, !0);
  let n = m(t, "radius", 7), r = m(t, "class", 7);
  var o = im();
  return $e(() => {
    me(o, "cx", n()), me(o, "cy", n()), me(o, "r", n()), mt(o, 0, wn(["svelte-flow__background-pattern", "dots", r()]));
  }), O(e, o), ue({
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
re(Wc, { radius: {}, class: {} }, [], [], !0);
var sm = /* @__PURE__ */ he("<path></path>");
function Xc(e, t) {
  le(t, !0);
  let n = m(t, "lineWidth", 7), r = m(t, "dimensions", 7), o = m(t, "variant", 7), i = m(t, "class", 7);
  var s = sm();
  return $e(() => {
    me(s, "stroke-width", n()), me(s, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), mt(s, 0, wn(["svelte-flow__background-pattern", o(), i()]));
  }), O(e, s), ue({
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
re(Xc, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const am = {
  [an.Dots]: 1,
  [an.Lines]: 1,
  [an.Cross]: 6
};
var lm = /* @__PURE__ */ he('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function Fc(e, t) {
  le(t, !0);
  let n = m(t, "id", 7), r = m(t, "variant", 23, () => an.Dots), o = m(t, "gap", 7, 20), i = m(t, "size", 7), s = m(t, "lineWidth", 7, 1), a = m(t, "bgColor", 7), l = m(t, "patternColor", 7), c = m(t, "patternClass", 7), d = m(t, "class", 7), p = /* @__PURE__ */ S(Dt), f = /* @__PURE__ */ S(() => r() === an.Dots), g = /* @__PURE__ */ S(() => r() === an.Cross), h = /* @__PURE__ */ S(() => Array.isArray(o()) ? o() : [o(), o()]), y = /* @__PURE__ */ S(() => `background-pattern-${u(p).flowId}-${n() ?? ""}`), $ = /* @__PURE__ */ S(() => [
    u(h)[0] * u(p).viewport.zoom || 1,
    u(h)[1] * u(p).viewport.zoom || 1
  ]), w = /* @__PURE__ */ S(() => (i() ?? am[r()]) * u(p).viewport.zoom), P = /* @__PURE__ */ S(() => u(g) ? [u(w), u(w)] : u($)), x = /* @__PURE__ */ S(() => u(f) ? [u(w) / 2, u(w) / 2] : [
    u(P)[0] / 2,
    u(P)[1] / 2
  ]);
  var C = lm();
  let _;
  var V = I(C), L = I(V);
  {
    var Z = (N) => {
      const k = /* @__PURE__ */ S(() => u(w) / 2);
      Wc(N, {
        get radius() {
          return u(k);
        },
        get class() {
          return c();
        }
      });
    }, Y = (N) => {
      Xc(N, {
        get dimensions() {
          return u(P);
        },
        get variant() {
          return r();
        },
        get lineWidth() {
          return s();
        },
        get class() {
          return c();
        }
      });
    };
    ae(L, (N) => {
      u(f) ? N(Z) : N(Y, !1);
    });
  }
  A(V);
  var j = T(V);
  return A(C), $e(
    (N) => {
      mt(C, 0, wn([
        "svelte-flow__background",
        "svelte-flow__container",
        d()
      ])), _ = ct(C, "", _, N), me(V, "id", u(y)), me(V, "x", u(p).viewport.x % u($)[0]), me(V, "y", u(p).viewport.y % u($)[1]), me(V, "width", u($)[0]), me(V, "height", u($)[1]), me(V, "patternTransform", `translate(-${u(x)[0]},-${u(x)[1]})`), me(j, "fill", `url(#${u(y)})`);
    },
    [
      () => ({
        "--xy-background-color-props": a(),
        "--xy-background-pattern-color-props": l()
      })
    ]
  ), O(e, C), ue({
    get id() {
      return n();
    },
    set id(N) {
      n(N), v();
    },
    get variant() {
      return r();
    },
    set variant(N = an.Dots) {
      r(N), v();
    },
    get gap() {
      return o();
    },
    set gap(N = 20) {
      o(N), v();
    },
    get size() {
      return i();
    },
    set size(N) {
      i(N), v();
    },
    get lineWidth() {
      return s();
    },
    set lineWidth(N = 1) {
      s(N), v();
    },
    get bgColor() {
      return a();
    },
    set bgColor(N) {
      a(N), v();
    },
    get patternColor() {
      return l();
    },
    set patternColor(N) {
      l(N), v();
    },
    get patternClass() {
      return c();
    },
    set patternClass(N) {
      c(N), v();
    },
    get class() {
      return d();
    },
    set class(N) {
      d(N), v();
    }
  });
}
re(
  Fc,
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
var um = /* @__PURE__ */ he("<rect></rect>");
function Gc(e, t) {
  le(t, !0);
  let n = m(t, "x", 7), r = m(t, "y", 7), o = m(t, "width", 7), i = m(t, "height", 7), s = m(t, "borderRadius", 7, 5), a = m(t, "color", 7), l = m(t, "shapeRendering", 7), c = m(t, "strokeColor", 7), d = m(t, "strokeWidth", 7, 2), p = m(t, "selected", 7), f = m(t, "class", 7);
  var g = um();
  let h, y;
  return $e(
    ($, w) => {
      h = mt(g, 0, wn(["svelte-flow__minimap-node", f()]), null, h, $), me(g, "x", n()), me(g, "y", r()), me(g, "rx", s()), me(g, "ry", s()), me(g, "width", o()), me(g, "height", i()), me(g, "shape-rendering", l()), y = ct(g, "", y, w);
    },
    [
      () => ({ selected: p() }),
      () => ({
        fill: a(),
        stroke: c(),
        "stroke-width": d()
      })
    ]
  ), O(e, g), ue({
    get x() {
      return n();
    },
    set x($) {
      n($), v();
    },
    get y() {
      return r();
    },
    set y($) {
      r($), v();
    },
    get width() {
      return o();
    },
    set width($) {
      o($), v();
    },
    get height() {
      return i();
    },
    set height($) {
      i($), v();
    },
    get borderRadius() {
      return s();
    },
    set borderRadius($ = 5) {
      s($), v();
    },
    get color() {
      return a();
    },
    set color($) {
      a($), v();
    },
    get shapeRendering() {
      return l();
    },
    set shapeRendering($) {
      l($), v();
    },
    get strokeColor() {
      return c();
    },
    set strokeColor($) {
      c($), v();
    },
    get strokeWidth() {
      return d();
    },
    set strokeWidth($ = 2) {
      d($), v();
    },
    get selected() {
      return p();
    },
    set selected($) {
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
re(
  Gc,
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
function cm(e, t) {
  const n = jv({
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
const Vi = (e) => e instanceof Function ? e : () => e;
var dm = /* @__PURE__ */ he("<title> </title>"), fm = /* @__PURE__ */ he('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), pm = /* @__PURE__ */ G('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function Uc(e, t) {
  le(t, !0);
  let n = m(t, "position", 7, "bottom-right"), r = m(t, "ariaLabel", 7), o = m(t, "nodeStrokeColor", 7, "transparent"), i = m(t, "nodeColor", 7), s = m(t, "nodeClass", 7, ""), a = m(t, "nodeBorderRadius", 7, 5), l = m(t, "nodeStrokeWidth", 7, 2), c = m(t, "bgColor", 7), d = m(t, "maskColor", 7), p = m(t, "maskStrokeColor", 7), f = m(t, "maskStrokeWidth", 7), g = m(t, "width", 7, 200), h = m(t, "height", 7, 150), y = m(t, "pannable", 7, !0), $ = m(t, "zoomable", 7, !0), w = m(t, "inversePan", 7), P = m(t, "zoomStep", 7), x = m(t, "class", 7), C = /* @__PURE__ */ Te(t, [
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
  ]), _ = /* @__PURE__ */ S(Dt), V = /* @__PURE__ */ S(() => u(_).ariaLabelConfig);
  const L = i() === void 0 ? void 0 : Vi(i()), Z = Vi(o()), Y = Vi(s()), j = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let N = /* @__PURE__ */ S(() => `svelte-flow__minimap-desc-${u(_).flowId}`), k = /* @__PURE__ */ S(() => ({
    x: -u(_).viewport.x / u(_).viewport.zoom,
    y: -u(_).viewport.y / u(_).viewport.zoom,
    width: u(_).width / u(_).viewport.zoom,
    height: u(_).height / u(_).viewport.zoom
  })), H = /* @__PURE__ */ S(() => u(_).nodeLookup.size > 0 ? ju(ao(u(_).nodeLookup, { filter: (F) => !F.hidden }), u(k)) : u(k)), b = /* @__PURE__ */ S(() => u(H).width / g()), E = /* @__PURE__ */ S(() => u(H).height / h()), M = /* @__PURE__ */ S(() => Math.max(u(b), u(E))), z = /* @__PURE__ */ S(() => u(M) * g()), q = /* @__PURE__ */ S(() => u(M) * h()), D = /* @__PURE__ */ S(() => 5 * u(M)), R = /* @__PURE__ */ S(() => u(H).x - (u(z) - u(H).width) / 2 - u(D)), U = /* @__PURE__ */ S(() => u(H).y - (u(q) - u(H).height) / 2 - u(D)), X = /* @__PURE__ */ S(() => u(z) + u(D) * 2), ee = /* @__PURE__ */ S(() => u(q) + u(D) * 2);
  const W = () => u(M);
  var ce = pm(), te = se(ce);
  const ge = /* @__PURE__ */ S(() => ["svelte-flow__minimap", x()]);
  return np(te, () => ({ "--xy-minimap-background-color-props": c() })), co(te.lastChild, Ie(
    {
      get position() {
        return n();
      },
      get class() {
        return u(ge);
      },
      "data-testid": "svelte-flow__minimap"
    },
    () => C,
    {
      children: (F, Ce) => {
        var pe = De(), oe = se(pe);
        {
          var Q = (fe) => {
            var J = fm();
            let ye;
            var ne = I(J);
            {
              var _e = (ie) => {
                var xe = dm(), ke = I(xe, !0);
                A(xe), $e(() => {
                  me(xe, "id", u(N)), Ae(ke, r() ?? u(V)["minimap.ariaLabel"]);
                }), O(ie, xe);
              };
              ae(ne, (ie) => {
                (r() ?? u(V)["minimap.ariaLabel"]) && ie(_e);
              });
            }
            var B = T(ne);
            ut(B, 17, () => u(_).nodes, (ie) => ie.id, (ie, xe) => {
              var ke = De();
              const Oe = /* @__PURE__ */ S(() => u(_).nodeLookup.get(u(xe).id));
              var dt = se(ke);
              {
                var kt = (Ve) => {
                  const Ye = /* @__PURE__ */ S(() => Ln(u(Oe))), de = /* @__PURE__ */ S(() => L?.(u(Oe))), Ze = /* @__PURE__ */ S(() => Z(u(Oe))), st = /* @__PURE__ */ S(() => Y(u(Oe)));
                  Gc(Ve, Ie(
                    {
                      get x() {
                        return u(Oe).internals.positionAbsolute.x;
                      },
                      get y() {
                        return u(Oe).internals.positionAbsolute.y;
                      }
                    },
                    () => u(Ye),
                    {
                      get selected() {
                        return u(Oe).selected;
                      },
                      get color() {
                        return u(de);
                      },
                      get borderRadius() {
                        return a();
                      },
                      get strokeColor() {
                        return u(Ze);
                      },
                      get strokeWidth() {
                        return l();
                      },
                      get shapeRendering() {
                        return j;
                      },
                      get class() {
                        return u(st);
                      }
                    }
                  ));
                };
                ae(dt, (Ve) => {
                  u(Oe) && Wu(u(Oe)) && Ve(kt);
                });
              }
              O(ie, ke);
            });
            var Ue = T(B);
            A(J), rt(J, (ie, xe) => cm?.(ie, xe), () => ({
              store: u(_),
              panZoom: u(_).panZoom,
              getViewScale: W,
              translateExtent: u(_).translateExtent,
              width: u(_).width,
              height: u(_).height,
              inversePan: w(),
              zoomStep: P(),
              pannable: y(),
              zoomable: $()
            })), $e(
              (ie) => {
                me(J, "width", g()), me(J, "height", h()), me(J, "viewBox", `${u(R) ?? ""} ${u(U) ?? ""} ${u(X) ?? ""} ${u(ee) ?? ""}`), me(J, "aria-labelledby", u(N)), ye = ct(J, "", ye, ie), me(Ue, "d", `M${u(R) - u(D)},${u(U) - u(D)}h${u(X) + u(D) * 2}v${u(ee) + u(D) * 2}h${-u(X) - u(D) * 2}z
      M${u(k).x ?? ""},${u(k).y ?? ""}h${u(k).width ?? ""}v${u(k).height ?? ""}h${-u(k).width}z`);
              },
              [
                () => ({
                  "--xy-minimap-mask-background-color-props": d(),
                  "--xy-minimap-mask-stroke-color-props": p(),
                  "--xy-minimap-mask-stroke-width-props": f() ? f() * u(M) : void 0
                })
              ]
            ), O(fe, J);
          };
          ae(oe, (fe) => {
            u(_).panZoom && fe(Q);
          });
        }
        O(F, pe);
      },
      $$slots: { default: !0 }
    }
  )), A(te), O(e, ce), ue({
    get position() {
      return n();
    },
    set position(F = "bottom-right") {
      n(F), v();
    },
    get ariaLabel() {
      return r();
    },
    set ariaLabel(F) {
      r(F), v();
    },
    get nodeStrokeColor() {
      return o();
    },
    set nodeStrokeColor(F = "transparent") {
      o(F), v();
    },
    get nodeColor() {
      return i();
    },
    set nodeColor(F) {
      i(F), v();
    },
    get nodeClass() {
      return s();
    },
    set nodeClass(F = "") {
      s(F), v();
    },
    get nodeBorderRadius() {
      return a();
    },
    set nodeBorderRadius(F = 5) {
      a(F), v();
    },
    get nodeStrokeWidth() {
      return l();
    },
    set nodeStrokeWidth(F = 2) {
      l(F), v();
    },
    get bgColor() {
      return c();
    },
    set bgColor(F) {
      c(F), v();
    },
    get maskColor() {
      return d();
    },
    set maskColor(F) {
      d(F), v();
    },
    get maskStrokeColor() {
      return p();
    },
    set maskStrokeColor(F) {
      p(F), v();
    },
    get maskStrokeWidth() {
      return f();
    },
    set maskStrokeWidth(F) {
      f(F), v();
    },
    get width() {
      return g();
    },
    set width(F = 200) {
      g(F), v();
    },
    get height() {
      return h();
    },
    set height(F = 150) {
      h(F), v();
    },
    get pannable() {
      return y();
    },
    set pannable(F = !0) {
      y(F), v();
    },
    get zoomable() {
      return $();
    },
    set zoomable(F = !0) {
      $(F), v();
    },
    get inversePan() {
      return w();
    },
    set inversePan(F) {
      w(F), v();
    },
    get zoomStep() {
      return P();
    },
    set zoomStep(F) {
      P(F), v();
    },
    get class() {
      return x();
    },
    set class(F) {
      x(F), v();
    }
  });
}
re(
  Uc,
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
var gm = /* @__PURE__ */ G("<div><!></div>");
function Jc(e, t) {
  le(t, !0);
  let n = m(t, "nodeId", 7), r = m(t, "position", 23, () => ve.Top), o = m(t, "align", 7, "center"), i = m(t, "offset", 7, 10), s = m(t, "isVisible", 7), a = m(t, "children", 7), l = /* @__PURE__ */ Te(t, [
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
  const c = Dt(), { getNodesBounds: d } = it(), p = pn("svelteflow__node_id");
  let f = /* @__PURE__ */ S(() => (c.nodes, (Array.isArray(n()) ? n() : [n() ?? p]).reduce(
    (C, _) => {
      const V = c.nodeLookup.get(_);
      return V && C.push(V), C;
    },
    []
  ))), g = /* @__PURE__ */ S(() => {
    const C = d(u(f));
    return C ? Ev(C, c.viewport, r(), i(), o()) : "";
  }), h = /* @__PURE__ */ S(() => u(f).length === 0 ? 1 : Math.max(...u(f).map((C) => (C.internals.z || 5) + 1))), y = /* @__PURE__ */ S(() => c.nodes.filter((C) => C.selected).length), $ = /* @__PURE__ */ S(() => typeof s() == "boolean" ? s() : u(f).length === 1 && u(f)[0].selected && u(y) === 1);
  var w = De(), P = se(w);
  {
    var x = (C) => {
      var _ = gm();
      Xe(
        _,
        (L, Z) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": L,
          ...l,
          [Rt]: Z
        }),
        [
          () => u(f).reduce((L, Z) => `${L}${Z.id} `, "").trim(),
          () => ({
            display: pc().value ? "none" : void 0,
            position: "absolute",
            transform: u(g),
            "z-index": u(h)
          })
        ]
      );
      var V = I(_);
      Be(V, () => a() ?? tt), A(_), rt(_, (L, Z) => fc?.(L, Z), () => "root"), O(C, _);
    };
    ae(P, (C) => {
      c.domNode && u($) && u(f) && C(x);
    });
  }
  return O(e, w), ue({
    get nodeId() {
      return n();
    },
    set nodeId(C) {
      n(C), v();
    },
    get position() {
      return r();
    },
    set position(C = ve.Top) {
      r(C), v();
    },
    get align() {
      return o();
    },
    set align(C = "center") {
      o(C), v();
    },
    get offset() {
      return i();
    },
    set offset(C = 10) {
      i(C), v();
    },
    get isVisible() {
      return s();
    },
    set isVisible(C) {
      s(C), v();
    },
    get children() {
      return a();
    },
    set children(C) {
      a(C), v();
    }
  });
}
re(
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
function tr(e) {
  const t = /* @__PURE__ */ S(Dt), n = /* @__PURE__ */ S(() => u(t).nodes), r = /* @__PURE__ */ S(() => u(t).nodeLookup);
  let o = [], i = !0;
  const s = /* @__PURE__ */ S(() => {
    u(n);
    const a = [], l = Array.isArray(e), c = l ? e : [e];
    for (const d of c) {
      const p = u(r).get(d)?.internals.userNode;
      p && a.push({ id: p.id, type: p.type, data: p.data });
    }
    return (!Tv(a, o) || i) && (o = a, i = !1), l ? o : o[0] ?? null;
  });
  return {
    get current() {
      return u(s);
    }
  };
}
const il = "tinyflow-component";
class hm {
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
    const t = document.createElement(il);
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
    const n = document.createElement(il);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const vm = () => {
  let e = /* @__PURE__ */ Ee([]), t = /* @__PURE__ */ Ee([]), n = /* @__PURE__ */ Ee({ x: 250, y: 100, zoom: 1 });
  return {
    // nodes: nodesInternal,
    // edges: edgesInternal,
    // viewport,
    init: (r, o) => {
      K(e, r), K(t, o);
    },
    getNodes: () => u(e),
    setNodes: (r) => {
      K(e, r);
    },
    getEdges: () => u(t),
    setEdges: (r) => {
      K(t, r);
    },
    getViewport: () => u(n),
    setViewport: (r) => {
      K(n, r);
    },
    getNode: (r) => u(e).find((o) => o.id === r),
    addNode: (r) => {
      K(e, [...u(e), r]);
    },
    removeNode: (r) => {
      K(e, u(e).filter((o) => o.id !== r));
    },
    updateNode: (r, o) => {
      K(e, u(e).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateNodes: (r) => {
      K(e, r(u(e)));
    },
    updateNodeData: (r, o) => {
      K(e, u(e).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    },
    selectNodeOnly: (r) => {
      K(e, u(e).map((o) => o.id === r ? { ...o, selected: !0 } : { ...o, selected: !1 }));
    },
    getEdge: (r) => u(t).find((o) => o.id === r),
    addEdge: (r) => {
      K(t, [...u(t), r]);
    },
    removeEdge: (r) => {
      K(t, u(t).filter((o) => o.id !== r));
    },
    updateEdge: (r, o) => {
      K(t, u(t).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateEdges: (r) => {
      K(t, r(u(t)));
    },
    updateEdgeData: (r, o) => {
      K(t, u(t).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    }
  };
}, Qe = vm();
var mm = /* @__PURE__ */ G("<button><!></button>");
function Ne(e, t) {
  le(t, !0);
  const n = m(t, "children", 7), r = m(t, "primary", 7), o = /* @__PURE__ */ Te(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children",
    "primary"
  ]);
  var i = mm();
  Xe(i, () => ({
    type: "button",
    ...o,
    class: `tf-btn ${r() ? "tf-btn-primary" : ""} nopan nodrag ${t.class ?? ""}`
  }));
  var s = I(i);
  return Be(s, () => n() ?? tt), A(i), O(e, i), ue({
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
re(Ne, { children: {}, primary: {} }, [], [], !0);
var ym = /* @__PURE__ */ G("<input/>");
function Qc(e, t) {
  le(t, !0);
  const n = /* @__PURE__ */ Te(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = ym();
  dn(r), Xe(r, () => ({
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), O(e, r), ue();
}
re(Qc, {}, [], [], !0);
var wm = /* @__PURE__ */ G('<div><input type="hidden"/> <!> <!></div>');
const bm = {
  hash: "svelte-1swt2gg",
  code: ".tf-chosen.svelte-1swt2gg {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function ed(e, t) {
  le(t, !0), ze(e, bm);
  const n = m(t, "placeholder", 7), r = m(t, "label", 7), o = m(t, "value", 7), i = m(t, "buttonText", 7, "选择..."), s = m(t, "onChosen", 7), a = /* @__PURE__ */ Te(t, [
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
  var l = wm();
  Xe(
    l,
    () => ({
      ...a,
      class: `tf-chosen nopan nodrag ${t.class ?? ""}`
    }),
    void 0,
    "svelte-1swt2gg"
  );
  var c = I(l);
  dn(c);
  var d = T(c, 2);
  Fe(d, {
    get value() {
      return r();
    },
    get placeholder() {
      return n();
    },
    style: "flex-grow: 1;",
    disabled: !0
  });
  var p = T(d, 2);
  return Ne(p, {
    onclick: (f) => {
      s()?.(o(), r(), f);
    },
    style: "padding: 3px",
    children: (f, g) => {
      we();
      var h = Se();
      $e(() => Ae(h, i())), O(f, h);
    },
    $$slots: { default: !0 }
  }), A(l), $e(() => _o(c, o())), O(e, l), ue({
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
re(
  ed,
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
var xm = /* @__PURE__ */ G("<input/>");
function Fe(e, t) {
  le(t, !0);
  const n = /* @__PURE__ */ Te(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = xm();
  dn(r), Xe(r, () => ({
    type: "text",
    spellcheck: "false",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), O(e, r), ue();
}
re(Fe, {}, [], [], !0);
var Cm = /* @__PURE__ */ G("<textarea></textarea>");
function Ke(e, t) {
  le(t, !0);
  const n = m(t, "value", 7), r = /* @__PURE__ */ Te(t, ["$$slots", "$$events", "$$legacy", "$$host", "value"]);
  var o = Cm();
  return qf(o), Xe(o, () => ({
    spellcheck: "false",
    ...r,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), O(e, o), ue({
    get value() {
      return n();
    },
    set value(i) {
      n(i), v();
    }
  });
}
re(Ke, { value: {} }, [], [], !0);
var $m = /* @__PURE__ */ G('<div role="button"><!></div>'), _m = /* @__PURE__ */ G("<div></div>");
function td(e, t) {
  const n = wa(t, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = wa(n, ["items", "onChange", "activeIndex"]);
  le(t, !1);
  let o = m(t, "items", 28, () => []), i = m(t, "onChange", 12, () => {
  }), s = m(t, "activeIndex", 12, 0);
  function a(c, d) {
    s(d), i()?.(c, d);
  }
  lu();
  var l = _m();
  return Xe(l, () => ({
    ...r,
    class: `tf-tabs ${$s(r), et(() => r.class) ?? ""}`
  })), ut(l, 5, o, pr, (c, d, p) => {
    var f = $m();
    me(f, "tabindex", p), f.__click = () => a(u(d), p), f.__keydown = ($) => {
      ($.key === "Enter" || $.key === " ") && ($.preventDefault(), a(u(d), p));
    };
    var g = I(f);
    {
      var h = ($) => {
        var w = Se();
        $e(() => Ae(w, (u(d), et(() => u(d).label)))), O($, w);
      }, y = ($) => {
        var w = De(), P = se(w);
        Be(P, () => (u(d), et(() => u(d).label) ?? tt)), O($, w);
      };
      ae(g, ($) => {
        u(d), et(() => typeof u(d).label == "string") ? $(h) : $(y, !1);
      });
    }
    A(f), $e(() => mt(f, 1, `tf-tabs-item ${p === s() ? "active" : ""}`)), O(c, f);
  }), A(l), O(e, l), ue({
    get items() {
      return o();
    },
    set items(c) {
      o(c), v();
    },
    get onChange() {
      return i();
    },
    set onChange(c) {
      i(c), v();
    },
    get activeIndex() {
      return s();
    },
    set activeIndex(c) {
      s(c), v();
    }
  });
}
On(["click", "keydown"]);
re(td, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var km = (e, t, n) => t(u(n)), Sm = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(u(n)));
}, Em = /* @__PURE__ */ G('<span class="tf-collapse-item-title-icon"><!></span>'), Pm = /* @__PURE__ */ G('<div class="tf-collapse-item-description"><!></div>'), Nm = /* @__PURE__ */ G('<div class="tf-collapse-item-content"><!></div>'), Mm = /* @__PURE__ */ G('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), Vm = /* @__PURE__ */ G("<div></div>");
const Dm = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function nd(e, t) {
  le(t, !0), ze(e, Dm);
  let n = m(t, "items", 7), r = m(t, "onChange", 7), o = m(t, "activeKeys", 31, () => Nt([]));
  function i(a) {
    o().includes(a.key) ? o(o().filter((l) => l !== a.key)) : (o().push(a.key), o(o())), r()?.(a, o());
  }
  var s = Vm();
  return ut(s, 21, n, pr, (a, l, c) => {
    var d = Mm(), p = I(d);
    me(p, "tabindex", c), p.__click = [km, i, l], p.__keydown = [Sm, i, l];
    var f = I(p);
    {
      var g = (C) => {
        var _ = Em(), V = I(_);
        _n(V, {
          get target() {
            return u(l).icon;
          }
        }), A(_), O(C, _);
      };
      ae(f, (C) => {
        u(l).icon && C(g);
      });
    }
    var h = T(f, 2);
    _n(h, {
      get target() {
        return u(l).title;
      }
    });
    var y = T(h, 2);
    A(p);
    var $ = T(p, 2);
    {
      var w = (C) => {
        var _ = Pm(), V = I(_);
        _n(V, {
          get target() {
            return u(l).description;
          }
        }), A(_), O(C, _);
      };
      ae($, (C) => {
        u(l).description && C(w);
      });
    }
    var P = T($, 2);
    {
      var x = (C) => {
        var _ = Nm(), V = I(_);
        _n(V, {
          get target() {
            return u(l).content;
          }
        }), A(_), O(C, _);
      };
      ae(P, (C) => {
        o().includes(u(l).key) && C(x);
      });
    }
    A(d), $e((C) => mt(y, 1, `tf-collapse-item-title-arrow ${C ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(u(l).key) ? "rotate-90" : ""
    ]), O(a, d);
  }), A(s), $e(() => {
    ct(s, t.style), mt(s, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), O(e, s), ue({
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
On(["click", "keydown"]);
re(nd, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function _n(e, t) {
  le(t, !0);
  let n = m(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = De(), o = se(r);
  {
    var i = (a) => {
      var l = De(), c = se(l);
      Be(c, () => n() ?? tt), O(a, l);
    }, s = (a) => {
      var l = De(), c = se(l);
      Ss(c, n), O(a, l);
    };
    ae(o, (a) => {
      typeof n() == "function" ? a(i) : a(s, !1);
    });
  }
  return O(e, r), ue({
    get target() {
      return n();
    },
    set target(a) {
      n(a), v();
    }
  });
}
re(_n, { target: {} }, [], [], !0);
var Om = (e, t, n) => t(u(n)), Hm = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), Lm = /* @__PURE__ */ G('<div class="tf-select-content-children"><!></div>'), zm = /* @__PURE__ */ G('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), Tm = /* @__PURE__ */ G('<div class="tf-select-content nopan nodrag"><!></div>'), Am = /* @__PURE__ */ G("<!> <!>", 1), Im = /* @__PURE__ */ G('<div class="tf-select-input-placeholder"> </div>'), qm = /* @__PURE__ */ G('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), Zm = /* @__PURE__ */ G("<div><!></div>");
function Vt(e, t) {
  le(t, !0);
  const n = (w, P = tt) => {
    var x = De(), C = se(x);
    ut(C, 19, P, (_, V) => `${V}_${_.value}`, (_, V) => {
      var L = zm(), Z = se(L);
      Z.__click = [Om, h, V];
      var Y = I(Z), j = I(Y);
      {
        var N = (E) => {
          var M = Hm();
          O(E, M);
        };
        ae(j, (E) => {
          u(V).children && u(V).children.length > 0 && E(N);
        });
      }
      A(Y);
      var k = T(Y, 2);
      _n(k, {
        get target() {
          return u(V).label;
        }
      }), A(Z);
      var H = T(Z, 2);
      {
        var b = (E) => {
          var M = Lm(), z = I(M);
          n(z, () => u(V).children), A(M), O(E, M);
        };
        ae(H, (E) => {
          u(V).children && u(V).children.length > 0 && (a() || c().includes(u(V).value)) && E(b);
        });
      }
      O(_, L);
    }), O(w, x);
  };
  let r = m(t, "items", 7), o = m(t, "onSelect", 7), i = m(t, "value", 23, () => []), s = m(t, "defaultValue", 23, () => []), a = m(t, "expandAll", 7, !0), l = m(t, "multiple", 7, !1), c = m(t, "expandValue", 23, () => []), d = m(t, "placeholder", 7), p = /* @__PURE__ */ Te(t, [
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
    const w = [], P = (x) => {
      for (let C of x)
        i().length > 0 ? i().includes(C.value) && w.push(C) : s().includes(C.value) && w.push(C), C.children && C.children.length > 0 && P(C.children);
    };
    return P(r()), w;
  }), g;
  function h(w) {
    g?.hide(), o()?.(w);
  }
  var y = Zm();
  Xe(y, () => ({ ...p, class: `tf-select ${p.class ?? ""}` }));
  var $ = I(y);
  return Mt(
    kr($, {
      floating: (w) => {
        var P = Tm(), x = I(P);
        n(x, r), A(P), O(w, P);
      },
      children: (w, P) => {
        var x = qm();
        Xe(x, () => ({ class: "tf-select-input nopan nodrag", ...p }));
        var C = I(x);
        ut(
          C,
          23,
          () => u(f),
          (_, V) => `${V}_${_.value}`,
          (_, V, L) => {
            var Z = De(), Y = se(Z);
            {
              var j = (k) => {
                var H = De(), b = se(H);
                {
                  var E = (M) => {
                    _n(M, {
                      get target() {
                        return u(V).label;
                      }
                    });
                  };
                  ae(b, (M) => {
                    u(L) === 0 && M(E);
                  });
                }
                O(k, H);
              }, N = (k) => {
                var H = Am(), b = se(H);
                _n(b, {
                  get target() {
                    return u(V).label;
                  }
                });
                var E = T(b, 2);
                {
                  var M = (z) => {
                    var q = Se(",");
                    O(z, q);
                  };
                  ae(E, (z) => {
                    u(L) < u(f).length - 1 && z(M);
                  });
                }
                O(k, H);
              };
              ae(Y, (k) => {
                l() ? k(N, !1) : k(j);
              });
            }
            O(_, Z);
          },
          (_) => {
            var V = Im(), L = I(V, !0);
            A(V), $e(() => Ae(L, d())), O(_, V);
          }
        ), A(C), we(2), A(x), O(w, x);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (w) => g = w,
    () => g
  ), A(y), O(e, y), ue({
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
      return c();
    },
    set expandValue(w = []) {
      c(w), v();
    },
    get placeholder() {
      return d();
    },
    set placeholder(w) {
      d(w), v();
    }
  });
}
On(["click"]);
re(
  Vt,
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
const Fr = Math.min, lr = Math.max, Xo = Math.round, Xt = (e) => ({
  x: e,
  y: e
}), Bm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Rm = {
  start: "end",
  end: "start"
};
function es(e, t, n) {
  return lr(e, Fr(t, n));
}
function fo(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Un(e) {
  return e.split("-")[0];
}
function po(e) {
  return e.split("-")[1];
}
function rd(e) {
  return e === "x" ? "y" : "x";
}
function Ys(e) {
  return e === "y" ? "height" : "width";
}
const Km = /* @__PURE__ */ new Set(["top", "bottom"]);
function kn(e) {
  return Km.has(Un(e)) ? "y" : "x";
}
function Ws(e) {
  return rd(kn(e));
}
function jm(e, t, n) {
  n === void 0 && (n = !1);
  const r = po(e), o = Ws(e), i = Ys(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Fo(s)), [s, Fo(s)];
}
function Ym(e) {
  const t = Fo(e);
  return [ts(e), t, ts(t)];
}
function ts(e) {
  return e.replace(/start|end/g, (t) => Rm[t]);
}
const sl = ["left", "right"], al = ["right", "left"], Wm = ["top", "bottom"], Xm = ["bottom", "top"];
function Fm(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? al : sl : t ? sl : al;
    case "left":
    case "right":
      return t ? Wm : Xm;
    default:
      return [];
  }
}
function Gm(e, t, n, r) {
  const o = po(e);
  let i = Fm(Un(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(ts)))), i;
}
function Fo(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Bm[t]);
}
function Um(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function od(e) {
  return typeof e != "number" ? Um(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Go(e) {
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
function ll(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = kn(t), s = Ws(t), a = Ys(s), l = Un(t), c = i === "y", d = r.x + r.width / 2 - o.width / 2, p = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
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
      g[s] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      g[s] += f * (n && c ? -1 : 1);
      break;
  }
  return g;
}
const Jm = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, a = i.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let c = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: p
  } = ll(c, r, l), f = r, g = {}, h = 0;
  for (let y = 0; y < a.length; y++) {
    const {
      name: $,
      fn: w
    } = a[y], {
      x: P,
      y: x,
      data: C,
      reset: _
    } = await w({
      x: d,
      y: p,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: g,
      rects: c,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = P ?? d, p = x ?? p, g = {
      ...g,
      [$]: {
        ...g[$],
        ...C
      }
    }, _ && h <= 50 && (h++, typeof _ == "object" && (_.placement && (f = _.placement), _.rects && (c = _.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : _.rects), {
      x: d,
      y: p
    } = ll(c, f, l)), y = -1);
  }
  return {
    x: d,
    y: p,
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
    platform: i,
    rects: s,
    elements: a,
    strategy: l
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: p = "floating",
    altBoundary: f = !1,
    padding: g = 0
  } = fo(t, e), h = od(g), y = a[f ? p === "floating" ? "reference" : "floating" : p], $ = Go(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(y))) == null || n ? y : y.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), w = p === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, P = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), x = await (i.isElement == null ? void 0 : i.isElement(P)) ? await (i.getScale == null ? void 0 : i.getScale(P)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Go(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: w,
    offsetParent: P,
    strategy: l
  }) : w);
  return {
    top: ($.top - C.top + h.top) / x.y,
    bottom: (C.bottom - $.bottom + h.bottom) / x.y,
    left: ($.left - C.left + h.left) / x.x,
    right: (C.right - $.right + h.right) / x.x
  };
}
const Qm = (e) => ({
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
      element: c,
      padding: d = 0
    } = fo(e, t) || {};
    if (c == null)
      return {};
    const p = od(d), f = {
      x: n,
      y: r
    }, g = Ws(o), h = Ys(g), y = await s.getDimensions(c), $ = g === "y", w = $ ? "top" : "left", P = $ ? "bottom" : "right", x = $ ? "clientHeight" : "clientWidth", C = i.reference[h] + i.reference[g] - f[g] - i.floating[h], _ = f[g] - i.reference[g], V = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let L = V ? V[x] : 0;
    (!L || !await (s.isElement == null ? void 0 : s.isElement(V))) && (L = a.floating[x] || i.floating[h]);
    const Z = C / 2 - _ / 2, Y = L / 2 - y[h] / 2 - 1, j = Fr(p[w], Y), N = Fr(p[P], Y), k = j, H = L - y[h] - N, b = L / 2 - y[h] / 2 + Z, E = es(k, b, H), M = !l.arrow && po(o) != null && b !== E && i.reference[h] / 2 - (b < k ? j : N) - y[h] / 2 < 0, z = M ? b < k ? b - k : b - H : 0;
    return {
      [g]: f[g] + z,
      data: {
        [g]: E,
        centerOffset: b - E - z,
        ...M && {
          alignmentOffset: z
        }
      },
      reset: M
    };
  }
}), e2 = function(e) {
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
        elements: c
      } = t, {
        mainAxis: d = !0,
        crossAxis: p = !0,
        fallbackPlacements: f,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: y = !0,
        ...$
      } = fo(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const w = Un(o), P = kn(a), x = Un(a) === a, C = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), _ = f || (x || !y ? [Fo(a)] : Ym(a)), V = h !== "none";
      !f && V && _.push(...Gm(a, y, h, C));
      const L = [a, ..._], Z = await id(t, $), Y = [];
      let j = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && Y.push(Z[w]), p) {
        const b = jm(o, s, C);
        Y.push(Z[b[0]], Z[b[1]]);
      }
      if (j = [...j, {
        placement: o,
        overflows: Y
      }], !Y.every((b) => b <= 0)) {
        var N, k;
        const b = (((N = i.flip) == null ? void 0 : N.index) || 0) + 1, E = L[b];
        if (E && (!(p === "alignment" && P !== kn(E)) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        j.every((z) => z.overflows[0] > 0 && kn(z.placement) === P)))
          return {
            data: {
              index: b,
              overflows: j
            },
            reset: {
              placement: E
            }
          };
        let M = (k = j.filter((z) => z.overflows[0] <= 0).sort((z, q) => z.overflows[1] - q.overflows[1])[0]) == null ? void 0 : k.placement;
        if (!M)
          switch (g) {
            case "bestFit": {
              var H;
              const z = (H = j.filter((q) => {
                if (V) {
                  const D = kn(q.placement);
                  return D === P || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  D === "y";
                }
                return !0;
              }).map((q) => [q.placement, q.overflows.filter((D) => D > 0).reduce((D, R) => D + R, 0)]).sort((q, D) => q[1] - D[1])[0]) == null ? void 0 : H[0];
              z && (M = z);
              break;
            }
            case "initialPlacement":
              M = a;
              break;
          }
        if (o !== M)
          return {
            reset: {
              placement: M
            }
          };
      }
      return {};
    }
  };
}, t2 = /* @__PURE__ */ new Set(["left", "top"]);
async function n2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Un(n), a = po(n), l = kn(n) === "y", c = t2.has(s) ? -1 : 1, d = i && l ? -1 : 1, p = fo(t, e);
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
    y: f * c
  } : {
    x: f * c,
    y: g * d
  };
}
const r2 = function(e) {
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
      } = t, l = await n2(t, e);
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
}, o2 = function(e) {
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
          fn: ($) => {
            let {
              x: w,
              y: P
            } = $;
            return {
              x: w,
              y: P
            };
          }
        },
        ...l
      } = fo(e, t), c = {
        x: n,
        y: r
      }, d = await id(t, l), p = kn(Un(o)), f = rd(p);
      let g = c[f], h = c[p];
      if (i) {
        const $ = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", P = g + d[$], x = g - d[w];
        g = es(P, g, x);
      }
      if (s) {
        const $ = p === "y" ? "top" : "left", w = p === "y" ? "bottom" : "right", P = h + d[$], x = h - d[w];
        h = es(P, h, x);
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
function gi() {
  return typeof window < "u";
}
function _r(e) {
  return sd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function xt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function bn(e) {
  var t;
  return (t = (sd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function sd(e) {
  return gi() ? e instanceof Node || e instanceof xt(e).Node : !1;
}
function zt(e) {
  return gi() ? e instanceof Element || e instanceof xt(e).Element : !1;
}
function Jt(e) {
  return gi() ? e instanceof HTMLElement || e instanceof xt(e).HTMLElement : !1;
}
function ul(e) {
  return !gi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof xt(e).ShadowRoot;
}
const i2 = /* @__PURE__ */ new Set(["inline", "contents"]);
function go(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Tt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !i2.has(o);
}
const s2 = /* @__PURE__ */ new Set(["table", "td", "th"]);
function a2(e) {
  return s2.has(_r(e));
}
const l2 = [":popover-open", ":modal"];
function hi(e) {
  return l2.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const u2 = ["transform", "translate", "scale", "rotate", "perspective"], c2 = ["transform", "translate", "scale", "rotate", "perspective", "filter"], d2 = ["paint", "layout", "strict", "content"];
function Xs(e) {
  const t = Fs(), n = zt(e) ? Tt(e) : e;
  return u2.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || c2.some((r) => (n.willChange || "").includes(r)) || d2.some((r) => (n.contain || "").includes(r));
}
function f2(e) {
  let t = Mn(e);
  for (; Jt(t) && !br(t); ) {
    if (Xs(t))
      return t;
    if (hi(t))
      return null;
    t = Mn(t);
  }
  return null;
}
function Fs() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const p2 = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function br(e) {
  return p2.has(_r(e));
}
function Tt(e) {
  return xt(e).getComputedStyle(e);
}
function vi(e) {
  return zt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Mn(e) {
  if (_r(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    ul(e) && e.host || // Fallback.
    bn(e)
  );
  return ul(t) ? t.host : t;
}
function ad(e) {
  const t = Mn(e);
  return br(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Jt(t) && go(t) ? t : ad(t);
}
function ld(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = ad(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = xt(o);
  return i ? (ns(s), t.concat(s, s.visualViewport || [], go(o) ? o : [], [])) : t.concat(o, ld(o, []));
}
function ns(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ud(e) {
  const t = Tt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Jt(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = Xo(n) !== i || Xo(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function cd(e) {
  return zt(e) ? e : e.contextElement;
}
function ur(e) {
  const t = cd(e);
  if (!Jt(t))
    return Xt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = ud(t);
  let s = (i ? Xo(n.width) : n.width) / r, a = (i ? Xo(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const g2 = /* @__PURE__ */ Xt(0);
function dd(e) {
  const t = xt(e);
  return !Fs() || !t.visualViewport ? g2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function h2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== xt(e) ? !1 : t;
}
function Gr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = cd(e);
  let s = Xt(1);
  t && (r ? zt(r) && (s = ur(r)) : s = ur(e));
  const a = h2(i, n, r) ? dd(i) : Xt(0);
  let l = (o.left + a.x) / s.x, c = (o.top + a.y) / s.y, d = o.width / s.x, p = o.height / s.y;
  if (i) {
    const f = xt(i), g = r && zt(r) ? xt(r) : r;
    let h = f, y = ns(h);
    for (; y && r && g !== h; ) {
      const $ = ur(y), w = y.getBoundingClientRect(), P = Tt(y), x = w.left + (y.clientLeft + parseFloat(P.paddingLeft)) * $.x, C = w.top + (y.clientTop + parseFloat(P.paddingTop)) * $.y;
      l *= $.x, c *= $.y, d *= $.x, p *= $.y, l += x, c += C, h = xt(y), y = ns(h);
    }
  }
  return Go({
    width: d,
    height: p,
    x: l,
    y: c
  });
}
function Gs(e, t) {
  const n = vi(e).scrollLeft;
  return t ? t.left + n : Gr(bn(e)).left + n;
}
function fd(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Gs(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function v2(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = bn(r), a = t ? hi(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Xt(1);
  const d = Xt(0), p = Jt(r);
  if ((p || !p && !i) && ((_r(r) !== "body" || go(s)) && (l = vi(r)), Jt(r))) {
    const g = Gr(r);
    c = ur(r), d.x = g.x + r.clientLeft, d.y = g.y + r.clientTop;
  }
  const f = s && !p && !i ? fd(s, l, !0) : Xt(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + d.x + f.x,
    y: n.y * c.y - l.scrollTop * c.y + d.y + f.y
  };
}
function m2(e) {
  return Array.from(e.getClientRects());
}
function y2(e) {
  const t = bn(e), n = vi(e), r = e.ownerDocument.body, o = lr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = lr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Gs(e);
  const a = -n.scrollTop;
  return Tt(r).direction === "rtl" && (s += lr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function w2(e, t) {
  const n = xt(e), r = bn(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const c = Fs();
    (!c || c && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const b2 = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function x2(e, t) {
  const n = Gr(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Jt(e) ? ur(e) : Xt(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, c = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: c
  };
}
function cl(e, t, n) {
  let r;
  if (t === "viewport")
    r = w2(e, n);
  else if (t === "document")
    r = y2(bn(e));
  else if (zt(t))
    r = x2(t, n);
  else {
    const o = dd(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Go(r);
}
function pd(e, t) {
  const n = Mn(e);
  return n === t || !zt(n) || br(n) ? !1 : Tt(n).position === "fixed" || pd(n, t);
}
function C2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = ld(e, []).filter((a) => zt(a) && _r(a) !== "body"), o = null;
  const i = Tt(e).position === "fixed";
  let s = i ? Mn(e) : e;
  for (; zt(s) && !br(s); ) {
    const a = Tt(s), l = Xs(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && o && b2.has(o.position) || go(s) && !l && pd(e, s)) ? r = r.filter((c) => c !== s) : o = a, s = Mn(s);
  }
  return t.set(e, r), r;
}
function $2(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? hi(t) ? [] : C2(t, this._c) : [].concat(n), r], s = i[0], a = i.reduce((l, c) => {
    const d = cl(t, c, o);
    return l.top = lr(d.top, l.top), l.right = Fr(d.right, l.right), l.bottom = Fr(d.bottom, l.bottom), l.left = lr(d.left, l.left), l;
  }, cl(t, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function _2(e) {
  const {
    width: t,
    height: n
  } = ud(e);
  return {
    width: t,
    height: n
  };
}
function k2(e, t, n) {
  const r = Jt(t), o = bn(t), i = n === "fixed", s = Gr(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Xt(0);
  function c() {
    l.x = Gs(o);
  }
  if (r || !r && !i)
    if ((_r(t) !== "body" || go(o)) && (a = vi(t)), r) {
      const g = Gr(t, !0, i, t);
      l.x = g.x + t.clientLeft, l.y = g.y + t.clientTop;
    } else o && c();
  i && !r && o && c();
  const d = o && !r && !i ? fd(o, a) : Xt(0), p = s.left + a.scrollLeft - l.x - d.x, f = s.top + a.scrollTop - l.y - d.y;
  return {
    x: p,
    y: f,
    width: s.width,
    height: s.height
  };
}
function Di(e) {
  return Tt(e).position === "static";
}
function dl(e, t) {
  if (!Jt(e) || Tt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return bn(e) === n && (n = n.ownerDocument.body), n;
}
function gd(e, t) {
  const n = xt(e);
  if (hi(e))
    return n;
  if (!Jt(e)) {
    let o = Mn(e);
    for (; o && !br(o); ) {
      if (zt(o) && !Di(o))
        return o;
      o = Mn(o);
    }
    return n;
  }
  let r = dl(e, t);
  for (; r && a2(r) && Di(r); )
    r = dl(r, t);
  return r && br(r) && Di(r) && !Xs(r) ? n : r || f2(e) || n;
}
const S2 = async function(e) {
  const t = this.getOffsetParent || gd, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: k2(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function E2(e) {
  return Tt(e).direction === "rtl";
}
const P2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: v2,
  getDocumentElement: bn,
  getClippingRect: $2,
  getOffsetParent: gd,
  getElementRects: S2,
  getClientRects: m2,
  getDimensions: _2,
  getScale: ur,
  isElement: zt,
  isRTL: E2
}, N2 = r2, M2 = o2, V2 = e2, D2 = Qm, O2 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: P2,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return Jm(e, t, {
    ...o,
    platform: i
  });
}, H2 = ({
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
  let c;
  if (typeof n == "string") {
    const w = document.querySelector(n);
    if (w)
      c = w;
    else
      throw new Error("element not found by document.querySelector('" + n + "')");
  } else
    c = n;
  let d;
  l && (d = document.createElement("div"), d.style.position = "absolute", d.style.backgroundColor = "#222", d.style.width = "8px", d.style.height = "8px", d.style.transform = "rotate(45deg)", d.style.display = "none", c.firstElementChild.before(d));
  function p() {
    O2(e, c, {
      placement: r,
      middleware: [
        N2(o),
        // 手动偏移配置
        V2(i),
        //自动翻转
        M2(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [D2({ element: d })] : []
      ]
    }).then(({ x: w, y: P, placement: x, middlewareData: C }) => {
      if (Object.assign(c.style, {
        left: `${w}px`,
        top: `${P}px`
      }), l) {
        const { x: _, y: V } = C.arrow, L = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[x.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: _ != null ? `${_}px` : "",
          top: V != null ? `${V}px` : "",
          right: "",
          bottom: "",
          [L]: "2px"
        });
      }
    });
  }
  let f = !1;
  function g() {
    c.style.display = "block", c.style.visibility = "block", c.style.position = "absolute", l && (d.style.display = "block"), f = !0, p();
  }
  function h() {
    c.style.display = "none", l && (d.style.display = "none"), f = !1;
  }
  function y(w) {
    w.stopPropagation(), f ? h() : g();
  }
  function $(w) {
    c.contains(w.target) || h();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((w) => {
    e.addEventListener(w, y);
  }), document.addEventListener("click", $), {
    destroy() {
      t.forEach((w) => {
        e.removeEventListener(w, y);
      }), document.removeEventListener("click", $);
    },
    hide() {
      h();
    },
    isVisible() {
      return f;
    }
  };
};
var L2 = /* @__PURE__ */ G('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function kr(e, t) {
  le(t, !0);
  const n = m(t, "children", 7), r = m(t, "floating", 7), o = m(t, "placement", 7, "bottom");
  let i, s, a;
  Hn(() => (a = H2({
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
  var c = L2(), d = I(c), p = I(d);
  Be(p, n), A(d), Mt(d, (h) => i = h, () => i);
  var f = T(d, 2), g = I(f);
  return Be(g, r), A(f), Mt(f, (h) => s = h, () => s), A(c), O(e, c), ue({
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
re(kr, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function He(e, t) {
  le(t, !0);
  const n = m(t, "children", 7), r = m(t, "level", 7, 1), o = m(t, "mt", 7), i = m(t, "mb", 7);
  var s = De(), a = se(s);
  return sp(a, () => `h${r()}`, !1, (l, c) => {
    Xe(l, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var d = De(), p = se(d);
    Be(p, () => n() ?? tt), O(c, d);
  }), O(e, s), ue({
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
re(He, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var z2 = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const T2 = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function mi(e, t) {
  le(t, !0), ze(e, T2);
  const n = /* @__PURE__ */ Te(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Ne(e, Ie(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = z2();
      O(r, i);
    },
    $$slots: { default: !0 }
  })), ue();
}
re(mi, {}, [], [], !0);
const A2 = () => ({ deleteNode: (e) => {
  Qe.removeNode(e), Qe.updateEdges((t) => t.filter((n) => n.source !== e && n.target !== e));
} }), Jn = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, I2 = () => ({ copyNode: (e) => {
  const t = Qe.getNode(e);
  if (t) {
    const n = Jn(), r = {
      ...t,
      id: n,
      position: { x: t.position.x + 50, y: t.position.y + 50 }
    };
    Qe.updateNodes((o) => [...o.map((i) => ({ ...i, selected: !1 })), r]);
  }
} }), Ge = () => pn("svelteflow__node_id"), Vn = () => pn("tinyflow_options");
var q2 = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), Z2 = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), B2 = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), R2 = /* @__PURE__ */ G('<div class="input-item svelte-1jesvb7">执行条件： <!></div>'), K2 = (e, t, n) => {
  const r = e.target.checked;
  t(n, { async: r });
}, j2 = (e, t, n) => {
  const r = e.target.checked;
  t(n, { loopEnable: r });
}, Y2 = /* @__PURE__ */ G('<div class="input-item svelte-1jesvb7">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-1jesvb7">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-1jesvb7">退出条件： <!></div>', 1), W2 = /* @__PURE__ */ G('<div class="settings svelte-1jesvb7"><div class="input-item svelte-1jesvb7">节点名称： <!></div> <div class="input-item svelte-1jesvb7">参数描述： <!></div> <!> <label class="input-item-inline svelte-1jesvb7"><span>异步执行：</span> <input type="checkbox"/></label> <label class="input-item-inline svelte-1jesvb7"><span>循环执行：</span> <input type="checkbox"/></label> <!></div>'), X2 = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), F2 = /* @__PURE__ */ G('<div class="tf-node-toolbar svelte-1jesvb7"><!> <!> <!> <!></div>'), G2 = /* @__PURE__ */ G('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const U2 = {
  hash: "svelte-1jesvb7",
  code: ".tf-node-toolbar.svelte-1jesvb7 {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-1jesvb7 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-1jesvb7 .input-item:where(.svelte-1jesvb7) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-1jesvb7 .input-item-inline:where(.svelte-1jesvb7) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function It(e, t) {
  le(t, !0), ze(e, U2);
  const n = m(t, "data", 7), r = m(t, "id", 7, ""), o = m(t, "icon", 7), i = m(t, "handle", 7), s = m(t, "children", 7), a = m(t, "allowExecute", 7, !0), l = m(t, "allowCopy", 7, !0), c = m(t, "allowDelete", 7, !0), d = m(t, "allowSetting", 7, !0), p = m(t, "allowSettingOfCondition", 7, !0), f = m(t, "showSourceHandle", 7, !0), g = m(t, "showTargetHandle", 7, !0), h = m(t, "onCollapse", 7);
  let y = n().expand ? ["key"] : [];
  const { updateNodeData: $, getNode: w } = it(), P = /* @__PURE__ */ S(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: x } = A2(), { copyNode: C } = I2(), _ = Vn(), V = () => {
    _.onNodeExecute?.(w(r()));
  };
  let L = Ge();
  var Z = G2(), Y = se(Z);
  {
    var j = (D) => {
      Jc(D, {
        get position() {
          return ve.Top;
        },
        align: "end",
        children: (R, U) => {
          var X = F2(), ee = I(X);
          {
            var W = (oe) => {
              Ne(oe, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  x(r());
                },
                children: (Q, fe) => {
                  var J = q2();
                  O(Q, J);
                },
                $$slots: { default: !0 }
              });
            };
            ae(ee, (oe) => {
              c() && oe(W);
            });
          }
          var ce = T(ee, 2);
          {
            var te = (oe) => {
              Ne(oe, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  C(r());
                },
                children: (Q, fe) => {
                  var J = Z2();
                  O(Q, J);
                },
                $$slots: { default: !0 }
              });
            };
            ae(ce, (oe) => {
              l() && oe(te);
            });
          }
          var ge = T(ce, 2);
          {
            var F = (oe) => {
              Ne(oe, {
                class: "tf-node-toolbar-item",
                onclick: V,
                children: (Q, fe) => {
                  var J = B2();
                  O(Q, J);
                },
                $$slots: { default: !0 }
              });
            };
            ae(ge, (oe) => {
              a() && oe(F);
            });
          }
          var Ce = T(ge, 2);
          {
            var pe = (oe) => {
              kr(oe, {
                placement: "bottom",
                floating: (Q) => {
                  var fe = W2(), J = I(fe), ye = T(I(J));
                  Fe(ye, {
                    style: "width: 100%;",
                    onchange: (Ve) => {
                      const Ye = Ve.target.value;
                      $(L, { title: Ye });
                    },
                    get value() {
                      return n().title;
                    }
                  }), A(J);
                  var ne = T(J, 2), _e = T(I(ne));
                  Ke(_e, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (Ve) => {
                      const Ye = Ve.target.value;
                      $(L, { description: Ye });
                    },
                    get value() {
                      return n().description;
                    }
                  }), A(ne);
                  var B = T(ne, 2);
                  {
                    var Ue = (Ve) => {
                      var Ye = R2(), de = T(I(Ye));
                      Ke(de, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Ze) => {
                          const st = Ze.target.value;
                          $(L, { condition: st });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), A(Ye), O(Ve, Ye);
                    };
                    ae(B, (Ve) => {
                      p() && Ve(Ue);
                    });
                  }
                  var ie = T(B, 2), xe = T(I(ie), 2);
                  dn(xe), xe.__change = [K2, $, L], A(ie);
                  var ke = T(ie, 2), Oe = T(I(ke), 2);
                  dn(Oe), Oe.__change = [j2, $, L], A(ke);
                  var dt = T(ke, 2);
                  {
                    var kt = (Ve) => {
                      var Ye = Y2(), de = se(Ye), Ze = T(I(de));
                      const st = /* @__PURE__ */ S(() => n().loopIntervalMs || "1000");
                      Ke(Ze, {
                        rows: 1,
                        style: "width: 100%;",
                        onchange: (Tn) => {
                          const An = Tn.target.value;
                          $(L, { loopIntervalMs: An });
                        },
                        get value() {
                          return u(st);
                        }
                      }), A(de);
                      var Re = T(de, 2), St = T(I(Re));
                      const Je = /* @__PURE__ */ S(() => n().maxLoopCount || "0");
                      Ke(St, {
                        rows: 1,
                        style: "width: 100%;",
                        onchange: (Tn) => {
                          const An = Tn.target.value;
                          $(L, { maxLoopCount: An });
                        },
                        get value() {
                          return u(Je);
                        }
                      }), A(Re);
                      var qt = T(Re, 2), yi = T(I(qt));
                      Ke(yi, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Tn) => {
                          const An = Tn.target.value;
                          $(L, { loopBreakCondition: An });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), A(qt), O(Ve, Ye);
                    };
                    ae(dt, (Ve) => {
                      n().loopEnable && Ve(kt);
                    });
                  }
                  A(fe), $e(() => {
                    ga(xe, !!n().async), ga(Oe, !!n().loopEnable);
                  }), O(Q, fe);
                },
                children: (Q, fe) => {
                  Ne(Q, {
                    class: "tf-node-toolbar-item",
                    children: (J, ye) => {
                      var ne = X2();
                      O(J, ne);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            ae(Ce, (oe) => {
              d() && oe(pe);
            });
          }
          A(X), O(R, X);
        },
        $$slots: { default: !0 }
      });
    };
    ae(Y, (D) => {
      (a() || l() || c()) && D(j);
    });
  }
  var N = T(Y, 2), k = T(I(N), 2), H = I(k);
  nd(H, {
    get items() {
      return u(P);
    },
    get activeKeys() {
      return y;
    },
    onChange: (D, R) => {
      $(r(), { expand: R?.includes("key") }), h()?.(R?.includes("key") ? "key" : "");
    }
  }), A(k), A(N);
  var b = T(N, 2);
  {
    var E = (D) => {
      Nn(D, {
        type: "target",
        get position() {
          return ve.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    ae(b, (D) => {
      g() && D(E);
    });
  }
  var M = T(b, 2);
  {
    var z = (D) => {
      Nn(D, {
        type: "source",
        get position() {
          return ve.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    ae(M, (D) => {
      f() && D(z);
    });
  }
  var q = T(M, 2);
  return Be(q, () => i() ?? tt), O(e, Z), ue({
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
      return c();
    },
    set allowDelete(D = !0) {
      c(D), v();
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
On(["change"]);
re(
  It,
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
], J2 = [
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
var Q2 = /* @__PURE__ */ G('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), ey = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), ty = /* @__PURE__ */ G('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const ny = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function vd(e, t) {
  le(t, !0), ze(e, ny);
  const n = m(t, "parameter", 7), r = m(t, "index", 7);
  let o = Ge(), i = /* @__PURE__ */ S(() => tr(o)), s = /* @__PURE__ */ S(() => ({
    ...n(),
    ...u(i)?.current?.data?.parameters[r()]
  }));
  const { updateNodeData: a } = it(), l = (_, V) => {
    a(o, (L) => {
      let Z = L.data.parameters;
      return Z[r()][_] = V, { parameters: Z };
    });
  }, c = (_) => {
    const V = _.target.value;
    l("name", V);
  }, d = (_) => {
    const V = _.target.checked;
    l("required", V);
  }, p = (_) => {
    const V = _.value;
    V && l("dataType", V);
  };
  let f;
  const g = () => {
    a(o, (_) => {
      let V = _.data.parameters;
      return V.splice(r(), 1), { parameters: [...V] };
    }), f?.hide();
  };
  var h = ty(), y = se(h), $ = I(y);
  Fe($, {
    style: "width: 100%;",
    get value() {
      return u(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: c
  }), A(y);
  var w = T(y, 2), P = I(w);
  Qc(P, {
    get checked() {
      return u(s).required;
    },
    onchange: d
  }), A(w);
  var x = T(w, 2), C = I(x);
  return Mt(
    kr(C, {
      placement: "bottom",
      floating: (_) => {
        var V = Q2(), L = I(V), Z = T(I(L));
        const Y = /* @__PURE__ */ S(() => u(s).dataType ? [u(s).dataType] : ["String"]);
        Vt(Z, {
          get items() {
            return hd;
          },
          style: "width: 100%",
          onSelect: p,
          get value() {
            return u(Y);
          }
        }), A(L);
        var j = T(L, 2), N = T(I(j));
        Ke(N, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return u(s).defaultValue;
          },
          onchange: (M) => {
            const z = M.target.value;
            l("defaultValue", z);
          }
        }), A(j);
        var k = T(j, 2), H = T(I(k));
        Ke(H, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return u(s).description;
          },
          onchange: (M) => {
            const z = M.target.value;
            l("description", z);
          }
        }), A(k);
        var b = T(k, 2), E = I(b);
        Ne(E, {
          onclick: g,
          children: (M, z) => {
            we();
            var q = Se("删除");
            O(M, q);
          },
          $$slots: { default: !0 }
        }), A(b), A(V), O(_, V);
      },
      children: (_, V) => {
        Ne(_, {
          class: "input-btn-more",
          children: (L, Z) => {
            var Y = ey();
            O(L, Y);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (_) => f = _,
    () => f
  ), A(x), O(e, h), ue({
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
    }
  });
}
re(vd, { parameter: {}, index: {} }, [], [], !0);
var ry = /* @__PURE__ */ G('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), oy = /* @__PURE__ */ G('<div class="none-params svelte-3n0wca">无输入参数</div>'), iy = /* @__PURE__ */ G('<div class="input-container svelte-3n0wca"><!> <!></div>');
const sy = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function md(e, t) {
  le(t, !0), ze(e, sy);
  let n = Ge(), r = /* @__PURE__ */ S(() => tr(n)), o = /* @__PURE__ */ S(() => [...u(r)?.current?.data?.parameters || []]);
  var i = iy(), s = I(i);
  {
    var a = (c) => {
      var d = ry();
      we(4), O(c, d);
    };
    ae(s, (c) => {
      u(o).length !== 0 && c(a);
    });
  }
  var l = T(s, 2);
  ut(
    l,
    19,
    () => u(o),
    (c) => c.id,
    (c, d, p) => {
      vd(c, {
        get parameter() {
          return u(d);
        },
        get index() {
          return u(p);
        }
      });
    },
    (c) => {
      var d = oy();
      O(c, d);
    }
  ), A(i), O(e, i), ue();
}
re(md, {}, [], [], !0);
const Uo = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = Jn()), Uo(t.children);
}), e), tn = () => {
  const { updateNodeData: e } = it();
  return {
    addParameter: (t, n = "parameters", r) => {
      Uo(r?.children);
      const o = {
        name: "",
        dataType: "String",
        refType: "ref",
        ...r,
        id: Jn()
      };
      e(t, (i) => {
        let s = i.data[n];
        return s ? s.push(o) : s = [o], { [n]: [...s] };
      });
    }
  };
};
var ay = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), ly = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), uy = /* @__PURE__ */ G('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const cy = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function yd(e, t) {
  le(t, !0), ze(e, cy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Te(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ge(), { addParameter: i } = tn();
  return It(e, Ie(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (s) => {
      var a = ay();
      O(s, a);
    },
    children: (s, a) => {
      var l = uy(), c = se(l), d = I(c);
      He(d, {
        level: 3,
        children: (g, h) => {
          we();
          var y = Se("输入参数");
          O(g, y);
        },
        $$slots: { default: !0 }
      });
      var p = T(d, 2);
      Ne(p, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input" });
        },
        children: (g, h) => {
          var y = ly();
          O(g, y);
        },
        $$slots: { default: !0 }
      }), A(c);
      var f = T(c, 2);
      md(f, {}), O(s, l);
    },
    $$slots: { icon: !0, default: !0 }
  })), ue({
    get data() {
      return n();
    },
    set data(s) {
      n(s), v();
    }
  });
}
re(yd, { data: {} }, [], [], !0);
const wd = (e, t, n) => {
  for (const r of n)
    r.target === t && r.source && (e.push(r.source), wd(e, r.source, n));
}, bd = (e, t, n) => !e || e.length === 0 ? [] : e.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: t + "." + r.name,
  children: bd(r.children, t + "." + r.name, n)
})), fl = (e, t, n) => {
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
          children: bd(r, e.id, t)
        };
    }
  }
}, dy = (e = !1) => {
  const t = Ge(), n = tr(t), r = /* @__PURE__ */ S(Dt), o = /* @__PURE__ */ S(() => u(r).nodes), i = /* @__PURE__ */ S(() => u(r).edges), s = /* @__PURE__ */ S(() => u(r).nodeLookup);
  let a = /* @__PURE__ */ S(() => {
    const l = [];
    if (!n.current)
      return [];
    const c = u(s).get(t);
    if (e)
      for (const d of u(o)) {
        const p = d.parentId === n.current.id;
        if (p) {
          const f = fl(d, p, c);
          f && l.push(f);
        }
      }
    else {
      const d = [];
      wd(d, t, u(i));
      for (const p of u(o))
        if (d.includes(p.id)) {
          const f = p.parentId === n.current.id, g = fl(p, f, c);
          g && l.push(g);
        }
    }
    return l;
  });
  return {
    get current() {
      return u(a);
    }
  };
};
var fy = /* @__PURE__ */ G('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), py = /* @__PURE__ */ G('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const gy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function xd(e, t) {
  le(t, !0), ze(e, gy), Hn(() => {
    u(l).refType || g({ value: "ref" });
  });
  const n = m(t, "parameter", 7), r = m(t, "index", 7), o = m(t, "dataKeyName", 7), i = m(t, "useChildrenOnly", 7);
  let s = Ge(), a = /* @__PURE__ */ S(() => tr(s)), l = /* @__PURE__ */ S(() => ({
    ...n(),
    ...u(a)?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: c } = it(), d = (N, k) => {
    c(s, (H) => {
      let b = H.data?.[o()];
      return b[r()] = { ...b[r()], [N]: k }, { [o()]: b };
    });
  }, p = (N, k) => {
    const H = k.target.value;
    d(N, H);
  }, f = (N) => {
    const k = N.value;
    d("ref", k);
  }, g = (N) => {
    const k = N.value;
    d("refType", k);
  };
  let h;
  const y = () => {
    c(s, (N) => {
      let k = N.data?.[o()];
      return k.splice(r(), 1), { [o()]: [...k] };
    }), h?.hide();
  };
  let $ = dy(i());
  var w = py(), P = se(w), x = I(P);
  const C = /* @__PURE__ */ S(() => u(l).nameDisabled === !0);
  Fe(x, {
    style: "width: 100%;",
    get value() {
      return u(l).name;
    },
    placeholder: "请输入参数名称",
    get disabled() {
      return u(C);
    },
    oninput: (N) => p("name", N)
  }), A(P);
  var _ = T(P, 2), V = I(_);
  {
    var L = (N) => {
      Fe(N, {
        get value() {
          return u(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (k) => p("value", k)
      });
    }, Z = (N, k) => {
      {
        var H = (b) => {
          const E = /* @__PURE__ */ S(() => [u(l).ref]);
          Vt(b, {
            get items() {
              return $.current;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return u(E);
            },
            expandAll: !0,
            onSelect: f
          });
        };
        ae(
          N,
          (b) => {
            u(l).refType !== "input" && b(H);
          },
          k
        );
      }
    };
    ae(V, (N) => {
      u(l).refType === "fixed" ? N(L) : N(Z, !1);
    });
  }
  A(_);
  var Y = T(_, 2), j = I(Y);
  return Mt(
    kr(j, {
      placement: "bottom",
      floating: (N) => {
        var k = fy(), H = I(k), b = T(I(H));
        const E = /* @__PURE__ */ S(() => u(l).refType ? [u(l).refType] : []);
        Vt(b, {
          get items() {
            return J2;
          },
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return u(E);
          },
          onSelect: g
        }), A(H);
        var M = T(H, 2), z = T(I(M));
        Ke(z, {
          rows: 1,
          style: "width: 100%;",
          onchange: (X) => {
            p("defaultValue", X);
          },
          get value() {
            return u(l).defaultValue;
          }
        }), A(M);
        var q = T(M, 2), D = T(I(q));
        Ke(D, {
          rows: 3,
          style: "width: 100%;",
          onchange: (X) => {
            p("description", X);
          },
          get value() {
            return u(l).description;
          }
        }), A(q);
        var R = T(q, 2), U = I(R);
        Ne(U, {
          onclick: y,
          children: (X, ee) => {
            we();
            var W = Se("删除");
            O(X, W);
          },
          $$slots: { default: !0 }
        }), A(R), A(k), O(N, k);
      },
      children: (N, k) => {
        mi(N, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (N) => h = N,
    () => h
  ), A(Y), O(e, w), ue({
    get parameter() {
      return n();
    },
    set parameter(N) {
      n(N), v();
    },
    get index() {
      return r();
    },
    set index(N) {
      r(N), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(N) {
      o(N), v();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(N) {
      i(N), v();
    }
  });
}
re(
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
var hy = /* @__PURE__ */ G('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), vy = /* @__PURE__ */ G('<div class="none-params svelte-1sm1mgi"> </div>'), my = /* @__PURE__ */ G('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const yy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function gt(e, t) {
  le(t, !0), ze(e, yy);
  const n = m(t, "noneParameterText", 7, "无输入参数"), r = m(t, "dataKeyName", 7, "parameters"), o = m(t, "useChildrenOnly", 7);
  let i = Ge(), s = /* @__PURE__ */ S(() => tr(i)), a = /* @__PURE__ */ S(() => [...u(s)?.current?.data?.[r()] || []]);
  var l = my(), c = I(l);
  {
    var d = (f) => {
      var g = hy();
      we(4), O(f, g);
    };
    ae(c, (f) => {
      u(a).length !== 0 && f(d);
    });
  }
  var p = T(c, 2);
  return ut(
    p,
    19,
    () => u(a),
    (f) => f.id,
    (f, g, h) => {
      xd(f, {
        get parameter() {
          return u(g);
        },
        get index() {
          return u(h);
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
      var g = vy(), h = I(g, !0);
      A(g), $e(() => Ae(h, n())), O(f, g);
    }
  ), A(l), O(e, l), ue({
    get noneParameterText() {
      return n();
    },
    set noneParameterText(f = "无输入参数") {
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
re(gt, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
var wy = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), by = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), xy = /* @__PURE__ */ G('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const Cy = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function Cd(e, t) {
  le(t, !0), ze(e, Cy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Te(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ge(), { addParameter: i } = tn();
  return It(e, Ie(
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
        var a = wy();
        O(s, a);
      },
      children: (s, a) => {
        var l = xy(), c = se(l), d = I(c);
        He(d, {
          level: 3,
          children: (g, h) => {
            we();
            var y = Se("输出参数");
            O(g, y);
          },
          $$slots: { default: !0 }
        });
        var p = T(d, 2);
        Ne(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (g, h) => {
            var y = by();
            O(g, y);
          },
          $$slots: { default: !0 }
        }), A(c);
        var f = T(c, 2);
        gt(f, { noneParameterText: "无输出参数", dataKeyName: "outputDefs" }), O(s, l);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue({
    get data() {
      return n();
    },
    set data(s) {
      n(s), v();
    }
  });
}
re(Cd, { data: {} }, [], [], !0);
const Oi = (e) => JSON.parse(JSON.stringify(e));
var $y = /* @__PURE__ */ he('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), _y = /* @__PURE__ */ G('<div class="input-more-item svelte-1cfeest"><!></div>'), ky = /* @__PURE__ */ G('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), Sy = /* @__PURE__ */ G('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const Ey = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function $d(e, t) {
  le(t, !0), ze(e, Ey);
  const n = m(t, "parameter", 7), r = m(t, "position", 7), o = m(t, "dataKeyName", 7);
  let i = Ge(), s = /* @__PURE__ */ S(() => tr(i)), a = /* @__PURE__ */ S(() => {
    let H = u(s)?.current?.data?.[o()], b;
    if (H && r().length > 0) {
      let E = H;
      for (let M = 0; M < r().length; M++) {
        const z = r()[M];
        M == r().length - 1 ? b = E[z] : E = E[z].children;
      }
    }
    return { ...n(), ...b };
  });
  const { updateNodeData: l } = it(), c = (H, b) => {
    l(i, (E) => {
      const M = E.data?.[o()];
      if (M && r().length > 0) {
        let z = M;
        for (let q = 0; q < r().length; q++) {
          const D = r()[q];
          q == r().length - 1 ? z[D] = { ...z[D], [H]: b } : z = z[D].children;
        }
      }
      return { [o()]: [...Oi(M)] };
    });
  }, d = (H, b) => {
    const E = b.target.value;
    c(H, E);
  }, p = (H) => {
    const b = H.value;
    c("dataType", b);
  };
  let f;
  const g = () => {
    l(i, (H) => {
      let b = H.data?.[o()];
      if (b && r().length > 0) {
        let E = b;
        for (let M = 0; M < r().length; M++) {
          const z = r()[M];
          M == r().length - 1 ? E.splice(z, 1) : E = E[z].children;
        }
      }
      return { [o()]: [...Oi(b)] };
    }), f?.hide();
  }, h = () => {
    l(i, (H) => {
      let b = H.data?.[o()];
      if (b && r().length > 0) {
        let E = b;
        for (let M = 0; M < r().length; M++) {
          const z = r()[M];
          M == r().length - 1 ? E[z].children ? E[z].children.push({ id: Jn(), name: "newParam", dataType: "String" }) : E[z].children = [{ id: Jn(), name: "newParam", dataType: "String" }] : E = E[z].children;
        }
      }
      return { [o()]: [...Oi(b)] };
    });
  };
  var y = Sy(), $ = se(y), w = I($);
  {
    var P = (H) => {
      var b = De(), E = se(b);
      ut(E, 17, r, pr, (M, z) => {
        we();
        var q = Se(" ");
        O(M, q);
      }), O(H, b);
    };
    ae(w, (H) => {
      r().length > 1 && H(P);
    });
  }
  var x = T(w, 2);
  const C = /* @__PURE__ */ S(() => u(a).nameDisabled === !0);
  Fe(x, {
    style: "width: 100%;",
    get value() {
      return u(a).name;
    },
    placeholder: "请输入参数名称",
    oninput: (H) => {
      d("name", H);
    },
    get disabled() {
      return u(C);
    }
  }), A($);
  var _ = T($, 2), V = I(_);
  const L = /* @__PURE__ */ S(() => u(a).dataType ? [u(a).dataType] : []), Z = /* @__PURE__ */ S(() => u(a).dataTypeDisabled === !0);
  Vt(V, {
    get items() {
      return hd;
    },
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return u(L);
    },
    get disabled() {
      return u(Z);
    },
    onSelect: p
  });
  var Y = T(V, 2);
  {
    var j = (H) => {
      Ne(H, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: h,
        children: (b, E) => {
          var M = $y();
          O(b, M);
        },
        $$slots: { default: !0 }
      });
    };
    ae(Y, (H) => {
      (u(a).dataType === "Object" || u(a).dataType === "Array") && u(a).addChildDisabled !== !0 && H(j);
    });
  }
  A(_);
  var N = T(_, 2), k = I(N);
  return Mt(
    kr(k, {
      placement: "bottom",
      floating: (H) => {
        var b = ky(), E = I(b), M = T(I(E));
        const z = /* @__PURE__ */ S(() => u(a).defaultValue || "");
        Ke(M, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return u(z);
          },
          onchange: (ee) => {
            d("defaultValue", ee);
          }
        }), A(E);
        var q = T(E, 2), D = T(I(q));
        const R = /* @__PURE__ */ S(() => u(a).description || "");
        Ke(D, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return u(R);
          },
          onchange: (ee) => {
            d("description", ee);
          }
        }), A(q);
        var U = T(q, 2);
        {
          var X = (ee) => {
            var W = _y(), ce = I(W);
            Ne(ce, {
              onclick: g,
              children: (te, ge) => {
                we();
                var F = Se("删除");
                O(te, F);
              },
              $$slots: { default: !0 }
            }), A(W), O(ee, W);
          };
          ae(U, (ee) => {
            u(a).deleteDisabled !== !0 && ee(X);
          });
        }
        A(b), O(H, b);
      },
      children: (H, b) => {
        mi(H, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (H) => f = H,
    () => f
  ), A(N), O(e, y), ue({
    get parameter() {
      return n();
    },
    set parameter(H) {
      n(H), v();
    },
    get position() {
      return r();
    },
    set position(H) {
      r(H), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(H) {
      o(H), v();
    }
  });
}
re($d, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var Py = /* @__PURE__ */ G("<!> <!>", 1), Ny = /* @__PURE__ */ G('<div class="none-params svelte-1sm1mgi"> </div>'), My = /* @__PURE__ */ G('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Vy = /* @__PURE__ */ G('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Dy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function zn(e, t) {
  le(t, !0), ze(e, Dy);
  const n = (f, g = tt, h = tt) => {
    var y = De(), $ = se(y);
    ut(
      $,
      19,
      g,
      (w) => `${w.id}_${w.children ? w.children.length : 0}`,
      (w, P, x) => {
        var C = Py(), _ = se(C);
        const V = /* @__PURE__ */ S(() => [...h(), u(x)]);
        $d(_, {
          get parameter() {
            return u(P);
          },
          get position() {
            return u(V);
          },
          get dataKeyName() {
            return o();
          }
        });
        var L = T(_, 2);
        {
          var Z = (Y) => {
            var j = /* @__PURE__ */ ms(() => [...h(), u(x)]);
            n(Y, () => u(P).children, () => u(j));
          };
          ae(L, (Y) => {
            u(P).children && Y(Z);
          });
        }
        O(w, C);
      },
      (w) => {
        var P = De(), x = se(P);
        {
          var C = (_) => {
            var V = Ny(), L = I(V, !0);
            A(V), $e(() => Ae(L, r())), O(_, V);
          };
          ae(x, (_) => {
            h().length === 0 && _(C);
          });
        }
        O(w, P);
      }
    ), O(f, y);
  }, r = m(t, "noneParameterText", 7, "无输出参数"), o = m(t, "dataKeyName", 7, "outputDefs");
  let i = Ge(), s = /* @__PURE__ */ S(() => tr(i)), a = /* @__PURE__ */ S(() => [...u(s)?.current?.data?.[o()] || []]);
  var l = Vy(), c = I(l);
  {
    var d = (f) => {
      var g = My();
      we(4), O(f, g);
    };
    ae(c, (f) => {
      u(a).length !== 0 && f(d);
    });
  }
  var p = T(c, 2);
  return n(p, () => u(a) || [], () => []), A(l), O(e, l), ue({
    get noneParameterText() {
      return r();
    },
    set noneParameterText(f = "无输出参数") {
      r(f), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(f = "outputDefs") {
      o(f), v();
    }
  });
}
re(zn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Oy = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), Hy = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ly = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), zy = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), Ty = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), Ay = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Iy = /* @__PURE__ */ G('<div class="heading svelte-q0cqsa"><!> <!></div> <!> <!> <div class="setting-title svelte-q0cqsa">模型</div> <div class="setting-item svelte-q0cqsa"><!> <!></div> <div class="setting-title svelte-q0cqsa">采样参数</div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="100" step="1"/></div></div> <div class="setting-title svelte-q0cqsa">系统提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="setting-title svelte-q0cqsa">用户提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="heading svelte-q0cqsa"><!> <!> <!></div> <!>', 1);
const qy = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function _d(e, t) {
  le(t, !0), ze(e, qy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Te(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ge(), { addParameter: i } = tn(), s = Vn();
  let a = /* @__PURE__ */ Ee(Nt([]));
  Hn(async () => {
    const d = await s.provider?.llm?.();
    u(a).push(...d || []);
  });
  const { updateNodeData: l } = it(), c = (d) => {
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
  return je(() => {
    n().outType || c("text");
  }), It(e, Ie(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var p = Oy();
        O(d, p);
      },
      children: (d, p) => {
        var f = Iy(), g = se(f), h = I(g);
        He(h, {
          level: 3,
          children: (J, ye) => {
            we();
            var ne = Se("输入参数");
            O(J, ne);
          },
          $$slots: { default: !0 }
        });
        var y = T(h, 2);
        Ne(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (J, ye) => {
            var ne = Hy();
            O(J, ne);
          },
          $$slots: { default: !0 }
        }), A(g);
        var $ = T(g, 2);
        gt($, {});
        var w = T($, 2);
        He(w, {
          level: 3,
          mt: "10px",
          children: (J, ye) => {
            we();
            var ne = Se("模型设置");
            O(J, ne);
          },
          $$slots: { default: !0 }
        });
        var P = T(w, 4), x = I(P);
        const C = /* @__PURE__ */ S(() => n().llmId ? [n().llmId] : []);
        Vt(x, {
          get items() {
            return u(a);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (J) => {
            const ye = J.value;
            l(o, () => ({ llmId: ye }));
          },
          get value() {
            return u(C);
          }
        });
        var _ = T(x, 2);
        mi(_, {}), A(P);
        var V = T(P, 4), L = I(V), Z = I(L), Y = I(Z);
        A(Z);
        var j = T(Z, 2);
        dn(j), j.__input = [Ly, l, o], A(L), A(V);
        var N = T(V, 2), k = I(N), H = I(k), b = I(H);
        A(H);
        var E = T(H, 2);
        dn(E), E.__input = [zy, l, o], A(k), A(N);
        var M = T(N, 2), z = I(M), q = I(z), D = I(q);
        A(q);
        var R = T(q, 2);
        dn(R), R.__input = [Ty, l, o], A(z), A(M);
        var U = T(M, 4), X = I(U);
        const ee = /* @__PURE__ */ S(() => n().systemPrompt || "");
        Ke(X, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return u(ee);
          },
          oninput: (J) => {
            l(o, { systemPrompt: J.target.value });
          }
        }), A(U);
        var W = T(U, 4), ce = I(W);
        const te = /* @__PURE__ */ S(() => n().userPrompt || "");
        Ke(ce, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return u(te);
          },
          oninput: (J) => {
            l(o, { userPrompt: J.target.value });
          }
        }), A(W);
        var ge = T(W, 2), F = I(ge);
        He(F, {
          level: 3,
          mt: "10px",
          children: (J, ye) => {
            we();
            var ne = Se("输出参数");
            O(J, ne);
          },
          $$slots: { default: !0 }
        });
        var Ce = T(F, 2);
        const pe = /* @__PURE__ */ S(() => n().outType ? [n().outType] : []);
        Vt(Ce, {
          items: [
            { label: "文本", value: "text" },
            { label: "JSON", value: "json" }
          ],
          style: "width: 100px;margin-left: auto",
          defaultValue: "text",
          onSelect: (J) => {
            c(J.value);
          },
          get value() {
            return u(pe);
          }
        });
        var oe = T(Ce, 2);
        {
          var Q = (J) => {
            Ne(J, {
              class: "input-btn-more",
              style: "margin-left: 10px",
              onclick: () => {
                i(o, "outputDefs");
              },
              children: (ye, ne) => {
                var _e = Ay();
                O(ye, _e);
              },
              $$slots: { default: !0 }
            });
          };
          ae(oe, (J) => {
            n().outType === "json" && J(Q);
          });
        }
        A(ge);
        var fe = T(ge, 2);
        zn(fe, {}), $e(() => {
          Ae(Y, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), _o(j, n().temperature ?? 0.5), Ae(b, `Top P: ${n().topP ?? 0.9 ?? ""}`), _o(E, n().topP ?? 0.9), Ae(D, `Top K: ${n().topK ?? 50 ?? ""}`), _o(R, n().topK ?? 50);
        }), O(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue({
    get data() {
      return n();
    },
    set data(d) {
      n(d), v();
    }
  });
}
On(["input"]);
re(_d, { data: {} }, [], [], !0);
var Zy = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), By = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ry = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ky = /* @__PURE__ */ G('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const jy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function kd(e, t) {
  le(t, !0), ze(e, jy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Te(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Hn(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = Ge(), { addParameter: i } = tn(), { updateNodeData: s } = it(), a = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  return It(e, Ie(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var c = Zy();
        O(l, c);
      },
      children: (l, c) => {
        var d = Ky(), p = se(d), f = I(p);
        He(f, {
          level: 3,
          children: (j, N) => {
            we();
            var k = Se("输入参数");
            O(j, k);
          },
          $$slots: { default: !0 }
        });
        var g = T(f, 2);
        Ne(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (j, N) => {
            var k = By();
            O(j, k);
          },
          $$slots: { default: !0 }
        }), A(p);
        var h = T(p, 2);
        gt(h, {});
        var y = T(h, 2);
        He(y, {
          level: 3,
          mt: "10px",
          children: (j, N) => {
            we();
            var k = Se("代码");
            O(j, k);
          },
          $$slots: { default: !0 }
        });
        var $ = T(y, 4), w = I($);
        const P = /* @__PURE__ */ S(() => n().engine ? [n().engine] : ["qlexpress"]);
        Vt(w, {
          get items() {
            return a;
          },
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (j) => {
            const N = j.value;
            s(o, () => ({ engine: N }));
          },
          get value() {
            return u(P);
          }
        }), A($);
        var x = T($, 4), C = I(x);
        const _ = /* @__PURE__ */ S(() => n().code || "");
        Ke(C, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (j) => {
            s(o, () => ({ code: j.target.value }));
          },
          get value() {
            return u(_);
          }
        }), A(x);
        var V = T(x, 2), L = I(V);
        He(L, {
          level: 3,
          mt: "10px",
          children: (j, N) => {
            we();
            var k = Se("输出参数");
            O(j, k);
          },
          $$slots: { default: !0 }
        });
        var Z = T(L, 2);
        Ne(Z, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (j, N) => {
            var k = Ry();
            O(j, k);
          },
          $$slots: { default: !0 }
        }), A(V);
        var Y = T(V, 2);
        zn(Y, {}), O(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue({
    get data() {
      return n();
    },
    set data(l) {
      n(l), v();
    }
  });
}
re(kd, { data: {} }, [], [], !0);
var Yy = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), Wy = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Xy = /* @__PURE__ */ G('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Fy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Sd(e, t) {
  le(t, !0), ze(e, Fy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Te(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ge(), { addParameter: i } = tn(), { updateNodeData: s } = it();
  return je(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), It(e, Ie(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var l = Yy();
        O(a, l);
      },
      children: (a, l) => {
        var c = Xy(), d = se(c), p = I(d);
        He(p, {
          level: 3,
          children: (_, V) => {
            we();
            var L = Se("输入参数");
            O(_, L);
          },
          $$slots: { default: !0 }
        });
        var f = T(p, 2);
        Ne(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (_, V) => {
            var L = Wy();
            O(_, L);
          },
          $$slots: { default: !0 }
        }), A(d);
        var g = T(d, 2);
        gt(g, {});
        var h = T(g, 2);
        He(h, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (_, V) => {
            we();
            var L = Se("模板内容");
            O(_, L);
          },
          $$slots: { default: !0 }
        });
        var y = T(h, 2), $ = I(y);
        const w = /* @__PURE__ */ S(() => n().template || "");
        Ke($, {
          rows: 10,
          placeholder: "请输入模板内容",
          style: "width: 100%",
          onchange: (_) => {
            s(o, () => ({ template: _.target.value }));
          },
          get value() {
            return u(w);
          }
        }), A(y);
        var P = T(y, 2), x = I(P);
        He(x, {
          level: 3,
          mt: "10px",
          children: (_, V) => {
            we();
            var L = Se("输出参数");
            O(_, L);
          },
          $$slots: { default: !0 }
        }), A(P);
        var C = T(P, 2);
        zn(C, {}), O(a, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue({
    get data() {
      return n();
    },
    set data(a) {
      n(a), v();
    }
  });
}
re(Sd, { data: {} }, [], [], !0);
var Gy = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), Uy = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Jy = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Qy = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ew = /* @__PURE__ */ G('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), tw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), nw = /* @__PURE__ */ G('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), rw = /* @__PURE__ */ G('<div style="width: 100%"><!></div>'), ow = /* @__PURE__ */ G('<div style="width: 100%"><!></div>'), iw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), sw = /* @__PURE__ */ G('<div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div class="radio-group svelte-1mo2w1q"><label class="svelte-1mo2w1q"><!>none</label> <label class="svelte-1mo2w1q"><!>form-data</label> <label class="svelte-1mo2w1q"><!>x-www-form-urlencoded</label> <label class="svelte-1mo2w1q"><!>json</label> <label class="svelte-1mo2w1q"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1mo2w1q"><!> <!></div> <!>', 1);
const aw = {
  hash: "svelte-1mo2w1q",
  code: ".heading.svelte-1mo2w1q {display:flex;margin-bottom:10px;}.radio-group.svelte-1mo2w1q {display:flex;margin:10px 0;}.radio-group.svelte-1mo2w1q label:where(.svelte-1mo2w1q) {display:flex;font-size:14px;}"
};
function Ed(e, t) {
  le(t, !0), ze(e, aw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Te(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Hn(() => {
    n().method || a(i, () => ({ method: "get" }));
  });
  const o = [
    { value: "get", label: "GET" },
    { value: "post", label: "POST" },
    { value: "put", label: "PUT" },
    { value: "delete", label: "DELETE" },
    { value: "head", label: "HEAD" },
    { value: "patch", label: "PATCH" }
  ], i = Ge(), { addParameter: s } = tn(), { updateNodeData: a } = it();
  return It(e, Ie(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var c = Gy();
        O(l, c);
      },
      children: (l, c) => {
        var d = sw(), p = se(d), f = I(p);
        He(f, {
          level: 3,
          children: (ie, xe) => {
            we();
            var ke = Se("输入参数");
            O(ie, ke);
          },
          $$slots: { default: !0 }
        });
        var g = T(f, 2);
        Ne(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (ie, xe) => {
            var ke = Uy();
            O(ie, ke);
          },
          $$slots: { default: !0 }
        }), A(p);
        var h = T(p, 2);
        gt(h, {});
        var y = T(h, 2);
        He(y, {
          level: 3,
          mt: "10px",
          children: (ie, xe) => {
            we();
            var ke = Se("URL 地址");
            O(ie, ke);
          },
          $$slots: { default: !0 }
        });
        var $ = T(y, 2), w = I($), P = I(w);
        const x = /* @__PURE__ */ S(() => n().method ? [n().method] : ["get"]);
        Vt(P, {
          get items() {
            return o;
          },
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (ie) => {
            const xe = ie.value;
            a(i, () => ({ method: xe }));
          },
          get value() {
            return u(x);
          }
        }), A(w);
        var C = T(w, 2), _ = I(C);
        const V = /* @__PURE__ */ S(() => n().url || "");
        Fe(_, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (ie) => {
            a(i, () => ({ url: ie.target.value }));
          },
          get value() {
            return u(V);
          }
        }), A(C), A($);
        var L = T($, 2), Z = I(L);
        He(Z, {
          level: 3,
          children: (ie, xe) => {
            we();
            var ke = Se("Http 头信息");
            O(ie, ke);
          },
          $$slots: { default: !0 }
        });
        var Y = T(Z, 2);
        Ne(Y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (ie, xe) => {
            var ke = Jy();
            O(ie, ke);
          },
          $$slots: { default: !0 }
        }), A(L);
        var j = T(L, 2);
        gt(j, { dataKeyName: "headers" });
        var N = T(j, 2);
        He(N, {
          level: 3,
          mt: "10px",
          children: (ie, xe) => {
            we();
            var ke = Se("Body");
            O(ie, ke);
          },
          $$slots: { default: !0 }
        });
        var k = T(N, 2), H = I(k), b = I(H);
        const E = /* @__PURE__ */ S(() => !n().bodyType);
        Fe(b, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return u(E);
          },
          onchange: (ie) => {
            ie.target?.checked && a(i, { bodyType: "" });
          }
        }), we(), A(H);
        var M = T(H, 2), z = I(M);
        const q = /* @__PURE__ */ S(() => n().bodyType === "form-data");
        Fe(z, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return u(q);
          },
          onchange: (ie) => {
            ie.target?.checked && a(i, { bodyType: "form-data" });
          }
        }), we(), A(M);
        var D = T(M, 2), R = I(D);
        const U = /* @__PURE__ */ S(() => n().bodyType === "x-www-form-urlencoded");
        Fe(R, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return u(U);
          },
          onchange: (ie) => {
            ie.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
          }
        }), we(), A(D);
        var X = T(D, 2), ee = I(X);
        const W = /* @__PURE__ */ S(() => n().bodyType === "json");
        Fe(ee, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return u(W);
          },
          onchange: (ie) => {
            ie.target?.checked && a(i, { bodyType: "json" });
          }
        }), we(), A(X);
        var ce = T(X, 2), te = I(ce);
        const ge = /* @__PURE__ */ S(() => n().bodyType === "raw");
        Fe(te, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return u(ge);
          },
          onchange: (ie) => {
            ie.target?.checked && a(i, { bodyType: "raw" });
          }
        }), we(), A(ce), A(k);
        var F = T(k, 2);
        {
          var Ce = (ie) => {
            var xe = ew(), ke = se(xe), Oe = I(ke);
            He(Oe, {
              level: 3,
              children: (Ve, Ye) => {
                we();
                var de = Se("参数");
                O(Ve, de);
              },
              $$slots: { default: !0 }
            });
            var dt = T(Oe, 2);
            Ne(dt, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (Ve, Ye) => {
                var de = Qy();
                O(Ve, de);
              },
              $$slots: { default: !0 }
            }), A(ke);
            var kt = T(ke, 2);
            gt(kt, { dataKeyName: "formData" }), O(ie, xe);
          };
          ae(F, (ie) => {
            n().bodyType === "form-data" && ie(Ce);
          });
        }
        var pe = T(F, 2);
        {
          var oe = (ie) => {
            var xe = nw(), ke = se(xe), Oe = I(ke);
            He(Oe, {
              level: 3,
              children: (Ve, Ye) => {
                we();
                var de = Se("Body 参数");
                O(Ve, de);
              },
              $$slots: { default: !0 }
            });
            var dt = T(Oe, 2);
            Ne(dt, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (Ve, Ye) => {
                var de = tw();
                O(Ve, de);
              },
              $$slots: { default: !0 }
            }), A(ke);
            var kt = T(ke, 2);
            gt(kt, { dataKeyName: "formUrlencoded" }), O(ie, xe);
          };
          ae(pe, (ie) => {
            n().bodyType === "x-www-form-urlencoded" && ie(oe);
          });
        }
        var Q = T(pe, 2);
        {
          var fe = (ie) => {
            var xe = rw(), ke = I(xe);
            Ke(ke, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Oe) => {
                a(i, { bodyJson: Oe.target.value });
              }
            }), A(xe), O(ie, xe);
          };
          ae(Q, (ie) => {
            n().bodyType === "json" && ie(fe);
          });
        }
        var J = T(Q, 2);
        {
          var ye = (ie) => {
            var xe = ow(), ke = I(xe);
            Ke(ke, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Oe) => {
                a(i, { bodyRaw: Oe.target.value });
              }
            }), A(xe), O(ie, xe);
          };
          ae(J, (ie) => {
            n().bodyType === "raw" && ie(ye);
          });
        }
        var ne = T(J, 2), _e = I(ne);
        He(_e, {
          level: 3,
          mt: "10px",
          children: (ie, xe) => {
            we();
            var ke = Se("输出参数");
            O(ie, ke);
          },
          $$slots: { default: !0 }
        });
        var B = T(_e, 2);
        Ne(B, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (ie, xe) => {
            var ke = iw();
            O(ie, ke);
          },
          $$slots: { default: !0 }
        }), A(ne);
        var Ue = T(ne, 2);
        zn(Ue, {}), O(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue({
    get data() {
      return n();
    },
    set data(l) {
      n(l), v();
    }
  });
}
re(Ed, { data: {} }, [], [], !0);
var lw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), uw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), cw = /* @__PURE__ */ G('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const dw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Pd(e, t) {
  le(t, !0), ze(e, dw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Te(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ge(), { addParameter: i } = tn(), s = Vn();
  let a = /* @__PURE__ */ Ee(Nt([]));
  Hn(async () => {
    const c = await s.provider?.knowledge?.();
    u(a).push(...c || []);
  });
  const { updateNodeData: l } = it();
  return je(() => {
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
  }), It(e, Ie(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = lw();
        O(c, d);
      },
      children: (c, d) => {
        var p = cw(), f = se(p), g = I(f);
        He(g, {
          level: 3,
          children: (k, H) => {
            we();
            var b = Se("输入参数");
            O(k, b);
          },
          $$slots: { default: !0 }
        });
        var h = T(g, 2);
        Ne(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (k, H) => {
            var b = uw();
            O(k, b);
          },
          $$slots: { default: !0 }
        }), A(f);
        var y = T(f, 2);
        gt(y, {});
        var $ = T(y, 2);
        He($, {
          level: 3,
          mt: "10px",
          children: (k, H) => {
            we();
            var b = Se("知识库设置");
            O(k, b);
          },
          $$slots: { default: !0 }
        });
        var w = T($, 4), P = I(w);
        const x = /* @__PURE__ */ S(() => n().knowledgeId ? [n().knowledgeId] : []);
        Vt(P, {
          get items() {
            return u(a);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (k) => {
            const H = k.value;
            l(o, () => ({ knowledgeId: H }));
          },
          get value() {
            return u(x);
          }
        }), A(w);
        var C = T(w, 4), _ = I(C);
        Fe(_, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (k) => {
            const H = k.target.value;
            l(o, () => ({ keyword: H }));
          }
        }), A(C);
        var V = T(C, 4), L = I(V);
        const Z = /* @__PURE__ */ S(() => n().limit || "");
        Fe(L, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          onchange: (k) => {
            const H = k.target.value;
            l(o, () => ({ limit: H }));
          },
          get value() {
            return u(Z);
          }
        }), A(V);
        var Y = T(V, 2), j = I(Y);
        He(j, {
          level: 3,
          mt: "10px",
          children: (k, H) => {
            we();
            var b = Se("输出参数");
            O(k, b);
          },
          $$slots: { default: !0 }
        }), A(Y);
        var N = T(Y, 2);
        zn(N, {}), O(c, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue({
    get data() {
      return n();
    },
    set data(c) {
      n(c), v();
    }
  });
}
re(Pd, { data: {} }, [], [], !0);
var fw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), pw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), gw = /* @__PURE__ */ G('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const hw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Nd(e, t) {
  le(t, !0), ze(e, hw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Te(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ge(), { addParameter: i } = tn(), s = Vn();
  let a = /* @__PURE__ */ Ee(Nt([]));
  Hn(async () => {
    const c = await s.provider?.searchEngine?.();
    u(a).push(...c || []);
  });
  const { updateNodeData: l } = it();
  return je(() => {
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
  }), It(e, Ie(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = fw();
        O(c, d);
      },
      children: (c, d) => {
        var p = gw(), f = se(p), g = I(f);
        He(g, {
          level: 3,
          children: (N, k) => {
            we();
            var H = Se("输入参数");
            O(N, H);
          },
          $$slots: { default: !0 }
        });
        var h = T(g, 2);
        Ne(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (N, k) => {
            var H = pw();
            O(N, H);
          },
          $$slots: { default: !0 }
        }), A(f);
        var y = T(f, 2);
        gt(y, {});
        var $ = T(y, 2);
        He($, {
          level: 3,
          mt: "10px",
          children: (N, k) => {
            we();
            var H = Se("搜索引擎设置");
            O(N, H);
          },
          $$slots: { default: !0 }
        });
        var w = T($, 4), P = I(w);
        const x = /* @__PURE__ */ S(() => n().engine ? [n().engine] : []);
        Vt(P, {
          get items() {
            return u(a);
          },
          style: "width: 100%",
          placeholder: "请选择搜索引擎",
          onSelect: (N) => {
            const k = N.value;
            l(o, () => ({ engine: k }));
          },
          get value() {
            return u(x);
          }
        }), A(w);
        var C = T(w, 4), _ = I(C);
        Fe(_, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (N) => {
            const k = N.target.value;
            l(o, () => ({ keyword: k }));
          }
        }), A(C);
        var V = T(C, 4), L = I(V);
        Fe(L, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (N) => {
            const k = N.target.value;
            l(o, () => ({ limit: k }));
          }
        }), A(V);
        var Z = T(V, 2), Y = I(Z);
        He(Y, {
          level: 3,
          mt: "10px",
          children: (N, k) => {
            we();
            var H = Se("输出参数");
            O(N, H);
          },
          $$slots: { default: !0 }
        }), A(Z);
        var j = T(Z, 2);
        zn(j, {}), O(c, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue({
    get data() {
      return n();
    },
    set data(c) {
      n(c), v();
    }
  });
}
re(Nd, { data: {} }, [], [], !0);
var vw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), mw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), yw = /* @__PURE__ */ G('<div class="heading svelte-1eqcy61"><!></div> <!> <div class="heading svelte-1eqcy61"><!> <!></div> <!>', 1);
const ww = {
  hash: "svelte-1eqcy61",
  code: ".heading.svelte-1eqcy61 {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function Md(e, t) {
  le(t, !0), ze(e, ww);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Te(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ge(), { addParameter: i } = tn();
  return je(() => {
    (!n().loopVars || n().loopVars.length === 0) && i(o, "loopVars", { name: "loopVar", nameDisabled: !0, deleteDisabled: !0 });
  }), It(e, Ie(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (s) => {
        var a = vw();
        O(s, a);
      },
      handle: (s) => {
        Nn(s, {
          type: "source",
          get position() {
            return ve.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (s, a) => {
        var l = yw(), c = se(l), d = I(c);
        He(d, {
          level: 3,
          children: ($, w) => {
            we();
            var P = Se("循环变量");
            O($, P);
          },
          $$slots: { default: !0 }
        }), A(c);
        var p = T(c, 2);
        gt(p, { dataKeyName: "loopVars" });
        var f = T(p, 2), g = I(f);
        He(g, {
          level: 3,
          children: ($, w) => {
            we();
            var P = Se("输出参数");
            O($, P);
          },
          $$slots: { default: !0 }
        });
        var h = T(g, 2);
        Ne(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: ($, w) => {
            var P = mw();
            O($, P);
          },
          $$slots: { default: !0 }
        }), A(f);
        var y = T(f, 2);
        gt(y, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), O(s, l);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), ue({
    get data() {
      return n();
    },
    set data(s) {
      n(s), v();
    }
  });
}
re(Md, { data: {} }, [], [], !0);
const bw = {
  startNode: yd,
  codeNode: kd,
  llmNode: _d,
  templateNode: Sd,
  httpNode: Ed,
  knowledgeNode: Pd,
  searchEngineNode: Nd,
  loopNode: Md,
  endNode: Cd
};
var xw = /* @__PURE__ */ G("<!> ", 1);
function rs(e, t) {
  le(t, !0);
  const n = m(t, "icon", 7), r = m(t, "title", 7), o = m(t, "type", 7), i = m(t, "description", 7), s = m(t, "extra", 7);
  return Ne(e, {
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
      var c = xw(), d = se(c);
      Ss(d, n);
      var p = T(d);
      $e(() => Ae(p, ` ${r() ?? ""}`)), O(a, c);
    },
    $$slots: { default: !0 }
  }), ue({
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
re(rs, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var Cw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), $w = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), _w = /* @__PURE__ */ G('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Vd(e, t) {
  le(t, !0);
  let n = /* @__PURE__ */ Ee("base"), r = /* @__PURE__ */ Ee("show");
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
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>',
      title: "结束节点",
      type: "endNode",
      sortNo: 900,
      description: "结束定义输出参数"
    }
  ], i = [
    { label: "基础节点", value: "base" },
    { label: "业务工具", value: "tools" }
  ], s = [], a = Vn(), l = a.customNodes;
  if (l) {
    const w = Object.keys(l).sort((P, x) => (l[P].sortNo || 0) - (l[x].sortNo || 0));
    for (let P of w)
      l[P].group === "base" ? o.push({ type: P, ...l[P] }) : s.push({
        icon: l[P].icon,
        title: l[P].title,
        type: P
      });
    o.sort((P, x) => (P.sortNo || 0) - (x.sortNo || 0));
  }
  if (a.hiddenNodes) {
    const w = typeof a.hiddenNodes == "function" ? a.hiddenNodes() : a.hiddenNodes;
    if (Array.isArray(w)) {
      for (let P of w)
        for (let x = 0; x < o.length; x++)
          if (o[x].type === P) {
            o.splice(x, 1);
            break;
          }
    }
  }
  var c = _w(), d = I(c), p = I(d), f = I(p);
  td(f, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (w) => {
      K(n, w.value.toString(), !0);
    }
  }), A(p);
  var g = T(p, 2), h = I(g);
  ut(h, 21, () => o, pr, (w, P) => {
    rs(w, Ie(() => u(P)));
  }), A(h);
  var y = T(h, 2);
  ut(y, 21, () => s, pr, (w, P) => {
    rs(w, Ie(() => u(P)));
  }), A(y), A(g), A(d);
  var $ = T(d, 2);
  Ne($, {
    onclick: () => {
      K(r, u(r) ? "" : "show", !0);
    },
    children: (w, P) => {
      var x = De(), C = se(x);
      {
        var _ = (L) => {
          var Z = Cw();
          O(L, Z);
        }, V = (L) => {
          var Z = $w();
          O(L, Z);
        };
        ae(C, (L) => {
          u(r) === "show" ? L(_) : L(V, !1);
        });
      }
      O(w, x);
    },
    $$slots: { default: !0 }
  }), A(c), $e(() => {
    mt(c, 1, `tf-toolbar ${u(r) ?? ""}`), ct(h, `display: ${u(n) === "base" ? "flex" : "none"}`), ct(y, `display: ${u(n) !== "base" ? "flex" : "none"}`);
  }), O(e, c), ue();
}
re(Vd, {}, [], [], !0);
const kw = () => ({ getNode: (e) => Qe.getNode(e) }), Sw = () => ({ getEdgesByTarget: (e) => Qe.getEdges().filter((t) => t.target === e) });
var Ew = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Pw = /* @__PURE__ */ G('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Nw = /* @__PURE__ */ G('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Mw = /* @__PURE__ */ G('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Vw = /* @__PURE__ */ G('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input/></div></div>', 1), Dw = /* @__PURE__ */ G('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Ow = /* @__PURE__ */ G('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Hw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Lw = /* @__PURE__ */ G('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), zw = /* @__PURE__ */ G("<!> <!> <div></div> <!>", 1);
const Tw = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Dd(e, t) {
  le(t, !0), ze(e, Tw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Te(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ge(), { addParameter: i } = tn(), s = it(), { updateNodeData: a } = s, l = ($) => {
    a(o, $);
  }, c = ($, w) => {
    l({ [$]: w.target?.value });
  }, d = { ...r, id: o, data: n() }, p = document.createElement("div"), f = Vn().customNodes[t.type];
  f.render?.(p, d, s);
  const g = f.forms;
  let h;
  je(() => {
    n().expand && h && h.append(p);
  }), je(() => {
    n() && f.onUpdate?.(p, { ...d, data: n() });
  }), je(() => {
    !n().parameters && f.parameters && l({
      parameters: Uo(JSON.parse(JSON.stringify(f.parameters)))
    });
  }), je(() => {
    !n().outputDefs && f.outputDefs && l({
      outputDefs: Uo(JSON.parse(JSON.stringify(f.outputDefs)))
    });
  });
  const y = /* @__PURE__ */ S(() => ({ ...n(), description: f.description }));
  return It(e, Ie(
    {
      get data() {
        return u(y);
      }
    },
    () => r,
    {
      icon: ($) => {
        var w = De(), P = se(w);
        Ss(P, () => f.icon), O($, w);
      },
      children: ($, w) => {
        var P = zw(), x = se(P);
        {
          var C = (j) => {
            var N = Pw(), k = se(N), H = I(k);
            He(H, {
              level: 3,
              children: (z, q) => {
                we();
                var D = Se("输入参数");
                O(z, D);
              },
              $$slots: { default: !0 }
            });
            var b = T(H, 2);
            {
              var E = (z) => {
                Ne(z, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    i(o);
                  },
                  children: (q, D) => {
                    var R = Ew();
                    O(q, R);
                  },
                  $$slots: { default: !0 }
                });
              };
              ae(b, (z) => {
                f.parametersAddEnable !== !1 && z(E);
              });
            }
            A(k);
            var M = T(k, 2);
            gt(M, {}), O(j, N);
          };
          ae(x, (j) => {
            f.parametersEnable !== !1 && j(C);
          });
        }
        var _ = T(x, 2);
        {
          var V = (j) => {
            var N = De(), k = se(N);
            ut(k, 17, () => g, pr, (H, b) => {
              var E = De(), M = se(E);
              {
                var z = (D) => {
                  var R = Nw(), U = se(R), X = I(U, !0);
                  A(U);
                  var ee = T(U, 2), W = I(ee);
                  const ce = /* @__PURE__ */ S(() => n()[u(b).name] || u(b).defaultValue);
                  Fe(W, Ie(
                    {
                      get placeholder() {
                        return u(b).placeholder;
                      },
                      style: "width: 100%",
                      get value() {
                        return u(ce);
                      }
                    },
                    () => u(b).attrs,
                    {
                      onchange: (te) => {
                        c(u(b).name, te);
                      }
                    }
                  )), A(ee), $e(() => Ae(X, u(b).label)), O(D, R);
                }, q = (D, R) => {
                  {
                    var U = (ee) => {
                      var W = Mw(), ce = se(W), te = I(ce, !0);
                      A(ce);
                      var ge = T(ce, 2), F = I(ge);
                      const Ce = /* @__PURE__ */ S(() => n()[u(b).name] || u(b).defaultValue);
                      Ke(F, Ie(
                        {
                          rows: 3,
                          get placeholder() {
                            return u(b).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return u(Ce);
                          }
                        },
                        () => u(b).attrs,
                        {
                          onchange: (pe) => {
                            c(u(b).name, pe);
                          }
                        }
                      )), A(ge), $e(() => Ae(te, u(b).label)), O(ee, W);
                    }, X = (ee, W) => {
                      {
                        var ce = (ge) => {
                          var F = Vw(), Ce = se(F), pe = I(Ce, !0);
                          A(Ce);
                          var oe = T(Ce, 2), Q = I(oe), fe = I(Q), J = I(fe);
                          A(fe);
                          var ye = T(fe, 2);
                          dn(ye);
                          var ne = (_e) => l({ [u(b).name]: parseFloat(_e.target.value) });
                          Xe(
                            ye,
                            () => ({
                              class: "nodrag",
                              type: "range",
                              ...u(b).attrs,
                              value: n()[u(b).name] ?? u(b).defaultValue,
                              oninput: ne
                            }),
                            void 0,
                            "svelte-q0cqsa"
                          ), A(Q), A(oe), $e(() => {
                            Ae(pe, u(b).label), Ae(J, `${u(b).description ?? ""}: ${n()[u(b).name] ?? u(b).defaultValue ?? ""}`);
                          }), O(ge, F);
                        }, te = (ge, F) => {
                          {
                            var Ce = (oe) => {
                              var Q = Dw(), fe = se(Q), J = I(fe, !0);
                              A(fe);
                              var ye = T(fe, 2), ne = I(ye);
                              const _e = /* @__PURE__ */ S(() => u(b).options || []), B = /* @__PURE__ */ S(() => n()[u(b).name] ? [n()[u(b).name]] : [u(b).defaultValue]);
                              Vt(ne, {
                                get items() {
                                  return u(_e);
                                },
                                style: "width: 100%",
                                get placeholder() {
                                  return u(b).placeholder;
                                },
                                onSelect: (Ue) => {
                                  const ie = Ue.value;
                                  l({ [u(b).name]: ie });
                                },
                                get value() {
                                  return u(B);
                                }
                              }), A(ye), $e(() => Ae(J, u(b).label)), O(oe, Q);
                            }, pe = (oe, Q) => {
                              {
                                var fe = (ye) => {
                                  var ne = Ow(), _e = se(ne), B = I(_e, !0);
                                  A(_e);
                                  var Ue = T(_e, 2), ie = I(Ue);
                                  const xe = /* @__PURE__ */ S(() => u(b).chosen?.buttonText);
                                  ed(ie, {
                                    style: "width: 100%",
                                    get placeholder() {
                                      return u(b).placeholder;
                                    },
                                    get buttonText() {
                                      return u(xe);
                                    },
                                    onChosen: (ke, Oe, dt) => {
                                      u(b).chosen?.onChosen?.(l, ke, Oe, dt);
                                    },
                                    get value() {
                                      return n()[u(b).chosen?.valueDataKey || ""];
                                    },
                                    get label() {
                                      return n()[u(b).chosen?.labelDataKey || ""];
                                    }
                                  }), A(Ue), $e(() => Ae(B, u(b).label)), O(ye, ne);
                                }, J = (ye, ne) => {
                                  {
                                    var _e = (B) => {
                                      He(B, Ie({ level: 3, mt: "10px" }, () => u(b).attrs, {
                                        children: (Ue, ie) => {
                                          we();
                                          var xe = Se();
                                          $e(() => Ae(xe, u(b).label)), O(Ue, xe);
                                        },
                                        $$slots: { default: !0 }
                                      }));
                                    };
                                    ae(
                                      ye,
                                      (B) => {
                                        u(b).type === "heading" && B(_e);
                                      },
                                      ne
                                    );
                                  }
                                };
                                ae(
                                  oe,
                                  (ye) => {
                                    u(b).type === "chosen" ? ye(fe) : ye(J, !1);
                                  },
                                  Q
                                );
                              }
                            };
                            ae(
                              ge,
                              (oe) => {
                                u(b).type === "select" ? oe(Ce) : oe(pe, !1);
                              },
                              F
                            );
                          }
                        };
                        ae(
                          ee,
                          (ge) => {
                            u(b).type === "slider" ? ge(ce) : ge(te, !1);
                          },
                          W
                        );
                      }
                    };
                    ae(
                      D,
                      (ee) => {
                        u(b).type === "textarea" ? ee(U) : ee(X, !1);
                      },
                      R
                    );
                  }
                };
                ae(M, (D) => {
                  u(b).type === "input" ? D(z) : D(q, !1);
                });
              }
              O(H, E);
            }), O(j, N);
          };
          ae(_, (j) => {
            g && j(V);
          });
        }
        var L = T(_, 2);
        Mt(L, (j) => h = j, () => h);
        var Z = T(L, 2);
        {
          var Y = (j) => {
            var N = Lw(), k = se(N), H = I(k);
            He(H, {
              level: 3,
              mt: "10px",
              children: (z, q) => {
                we();
                var D = Se("输出参数");
                O(z, D);
              },
              $$slots: { default: !0 }
            });
            var b = T(H, 2);
            {
              var E = (z) => {
                Ne(z, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    i(o, "outputDefs");
                  },
                  children: (q, D) => {
                    var R = Hw();
                    O(q, R);
                  },
                  $$slots: { default: !0 }
                });
              };
              ae(b, (z) => {
                f.outputDefsAddEnable !== !1 && z(E);
              });
            }
            A(k);
            var M = T(k, 2);
            zn(M, {}), O(j, N);
          };
          ae(Z, (j) => {
            f.outputDefsEnable !== !1 && j(Y);
          });
        }
        $e(() => {
          ct(L, f.rootStyle || ""), mt(L, 1, wn(f.rootClass), "svelte-q0cqsa");
        }), O($, P);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue({
    get data() {
      return n();
    },
    set data($) {
      n($), v();
    }
  });
}
re(Dd, { data: {} }, [], [], !0);
const Aw = () => ({ updateEdgeData: (e, t, n) => {
  const r = Qe.getEdge(e);
  if (!r)
    return;
  const o = typeof t == "function" ? t(r) : t;
  r.data = n?.replace ? o : { ...r.data, ...o }, Qe.updateEdges((i) => i.map((s) => s.id === e ? r : s));
} }), Iw = () => {
  let e = /* @__PURE__ */ S(Dt), t = /* @__PURE__ */ S(() => u(e).edges);
  return it(), { deleteEdge: (n) => {
    K(t, u(t).filter((r) => r.id !== n));
  } };
};
var qw = /* @__PURE__ */ G('<div class="panel-content svelte-80qc4q"><div>边属性设置</div> <div class="setting-title svelte-80qc4q">边条件设置</div> <div class="setting-item svelte-80qc4q"><!></div> <div class="setting-item svelte-80qc4q" style="padding: 8px 0"><!> <!></div></div>'), Zw = /* @__PURE__ */ G("<!> <!> <!> <!>", 1), Bw = /* @__PURE__ */ G('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const Rw = {
  hash: "svelte-80qc4q",
  code: ".panel-content.svelte-80qc4q {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-80qc4q {margin:10px 0;font-size:12px;color:#999;}.setting-item.svelte-80qc4q {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function Od(e, t) {
  le(t, !0), ze(e, Rw);
  const n = m(t, "onInit", 7), r = it();
  n()(r);
  let o = /* @__PURE__ */ Ee(!1), i = /* @__PURE__ */ Ee(void 0);
  const { updateEdgeData: s } = Aw(), a = (b) => {
    b.preventDefault(), b.dataTransfer && (b.dataTransfer.dropEffect = "move");
  }, l = (b) => {
    b.preventDefault();
    const E = r.screenToFlowPosition({ x: b.clientX - 250, y: b.clientY - 100 }), M = b.dataTransfer?.getData("application/tinyflow");
    if (!M)
      return;
    const z = JSON.parse(M), q = { id: `node_${Jn()}`, position: E, data: {}, ...z };
    Qe.addNode(q), Qe.selectNodeOnly(q.id);
  }, { getNode: c } = kw(), d = (b) => {
    const E = c(b.source), M = c(b.target);
    if (b.sourceHandle === "loop_handle" || E.parentId) {
      const z = r.getEdges();
      for (let q of z)
        if (q.target === b.target) {
          const D = c(q.source);
          if (b.sourceHandle === "loop_handle" && D.parentId !== E.id || E.parentId && D.parentId !== E.parentId)
            return !1;
        }
    }
    return !(!E.parentId && M.parentId && M.parentId !== E.id);
  }, p = (b, E) => {
    if (!E.isValid)
      return;
    const M = E.toNode;
    if (M.parentId)
      return;
    const z = E.fromNode, q = E.fromHandle, D = { position: { ...M.position } };
    if (q.id === "loop_handle" ? D.parentId = z.id : z.parentId && (D.parentId = z.parentId), D.parentId) {
      const R = c(D.parentId);
      D.position = {
        x: M.position.x - R.position.x,
        y: M.position.y - R.position.y
      }, r.updateNode(M.id, D);
    }
  }, { getEdgesByTarget: f } = Sw(), g = (b) => {
    b.edges.forEach((E) => {
      E.id === u(i)?.id && (K(i, null), K(o, !1));
      const M = c(E.target);
      if (M && M.parentId) {
        const z = f(E.target), q = c(M.parentId);
        if (z.length === 0)
          r.updateNode(M.id, {
            parentId: void 0,
            position: {
              x: M.position.x + q.position.x,
              y: M.position.y + q.position.y
            }
          });
        else {
          let D = !1;
          for (let R = 0; R < z.length; R++) {
            const U = z[R], X = c(U.source);
            if (X.parentId || X.type === "loopNode") {
              D = !0;
              break;
            }
          }
          D || r.updateNode(M.id, {
            parentId: void 0,
            position: {
              x: M.position.x + q.position.x,
              y: M.position.y + q.position.y
            }
          });
        }
      }
    });
  }, { deleteEdge: h } = Iw(), y = (b, E) => {
  }, $ = (b) => {
  }, w = {
    // ...nodeTypes
  }, P = Vn().customNodes;
  if (P)
    for (let b of Object.keys(P))
      w[b] = Dd;
  Vn().onDataChange;
  var x = Bw(), C = I(x);
  const _ = /* @__PURE__ */ S(() => ({ ...bw, ...w }));
  var V = Qe.getNodes, L = Qe.setNodes, Z = Qe.getEdges, Y = Qe.setEdges, j = Qe.getViewport, N = Qe.setViewport;
  const k = /* @__PURE__ */ S(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: jr.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  Ic(C, {
    get nodeTypes() {
      return u(_);
    },
    get nodes() {
      return V();
    },
    set nodes(b) {
      L(b);
    },
    get edges() {
      return Z();
    },
    set edges(b) {
      Y(b);
    },
    get viewport() {
      return j();
    },
    set viewport(b) {
      N(b);
    },
    class: "tinyflow-logo",
    ondrop: l,
    ondragover: a,
    isValidConnection: d,
    onconnectend: p,
    onconnectstart: y,
    onconnect: $,
    connectionRadius: 50,
    onedgeclick: (b) => {
      K(o, !0), K(i, b.detail.edge, !0);
    },
    onbeforeconnect: (b) => ({ ...b, id: Jn() }),
    ondelete: g,
    onclick: (b) => {
      const E = b.target;
      E.classList.contains("svelte-flow__edge-interaction") || E.classList.contains("panel-content") || E.closest(".panel-content") || (K(o, !1), K(i, null));
    },
    get defaultEdgeOptions() {
      return u(k);
    },
    children: (b, E) => {
      var M = Zw(), z = se(M);
      Fc(z, {});
      var q = T(z, 2);
      Yc(q, {});
      var D = T(q, 2);
      Uc(D, {});
      var R = T(D, 2);
      {
        var U = (X) => {
          co(X, {
            children: (ee, W) => {
              var ce = qw(), te = T(I(ce), 4), ge = I(te);
              const F = /* @__PURE__ */ S(() => u(i)?.data?.condition);
              Ke(ge, {
                rows: 3,
                placeholder: "请输入边条件",
                style: "width: 100%",
                get value() {
                  return u(F);
                },
                onchange: (Q) => {
                  u(i) && s(u(i).id, { condition: Q.target?.value });
                }
              }), A(te);
              var Ce = T(te, 2), pe = I(Ce);
              Ne(pe, {
                onclick: () => {
                  h(u(i)?.id), K(o, !1);
                },
                children: (Q, fe) => {
                  we();
                  var J = Se("删除");
                  O(Q, J);
                },
                $$slots: { default: !0 }
              });
              var oe = T(pe, 2);
              Ne(oe, {
                primary: !0,
                onclick: () => {
                  K(o, !1);
                },
                children: (Q, fe) => {
                  we();
                  var J = Se("保存");
                  O(Q, J);
                },
                $$slots: { default: !0 }
              }), A(Ce), A(ce), O(ee, ce);
            },
            $$slots: { default: !0 }
          });
        };
        ae(R, (X) => {
          u(o) && X(U);
        });
      }
      O(b, M);
    },
    $$slots: { default: !0 }
  });
  var H = T(C, 2);
  return Vd(H, {}), A(x), O(e, x), ue({
    get onInit() {
      return n();
    },
    set onInit(b) {
      n(b), v();
    }
  });
}
re(Od, { onInit: {} }, [], [], !0);
function Kw(e, t) {
  le(t, !0);
  const n = m(t, "options", 7), r = m(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  return Qe.init(o?.nodes || [], o?.edges || []), dr("tinyflow_options", n()), qc(e, {
    children: (i, s) => {
      Od(i, {
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
customElements.define("tinyflow-component", re(
  Kw,
  {
    options: { attribute: "options", reflect: !0, type: "Object" },
    onInit: { attribute: "onInit", reflect: !0, type: "Object" }
  },
  [],
  [],
  !1
));
const Ww = /* @__PURE__ */ Ld({
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
    const n = e, r = zd(null);
    let o = null;
    return Td(() => {
      r.value && (o = new hm({
        ...n,
        element: r.value
      }));
    }), Ad(() => {
      o && (o.destroy(), o = null);
    }), t({
      getData: () => o ? o.getData() : (console.warn("Tinyflow instance is not initialized"), null)
    }), (s, a) => (qd(), Id("div", {
      ref_key: "divRef",
      ref: r,
      class: Bd(["tinyflow", s.className]),
      style: Zd(s.style)
    }, null, 6));
  }
});
export {
  Ww as Tinyflow
};
//# sourceMappingURL=index.js.map
