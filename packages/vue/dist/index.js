import { defineComponent as Bd, ref as qd, onMounted as Rd, onUnmounted as Zd, createElementBlock as Kd, openBlock as Yd, normalizeStyle as jd, normalizeClass as Fd } from "vue";
const Wd = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Wd);
const ss = 1, as = 2, gl = 4, Xd = 8, Ud = 16, Gd = 1, Jd = 2, hl = 4, Qd = 8, ef = 16, vl = 1, tf = 2, ls = "[", us = "[!", cs = "]", Rn = {}, rt = Symbol(), nf = "http://www.w3.org/1999/xhtml", rf = "http://www.w3.org/2000/svg", of = "@attach", sf = !1;
var Gr = Array.isArray, af = Array.prototype.indexOf, ds = Array.from, Vo = Object.keys, Do = Object.defineProperty, un = Object.getOwnPropertyDescriptor, ml = Object.getOwnPropertyDescriptors, yl = Object.prototype, lf = Array.prototype, Qo = Object.getPrototypeOf, ra = Object.isExtensible;
function Sr(e) {
  return typeof e == "function";
}
const tt = () => {
};
function uf(e) {
  return e();
}
function To(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function lt(e, t, n = !1) {
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
const kt = 2, fs = 4, Qr = 8, ps = 16, mn = 32, er = 64, gs = 128, xt = 256, Ho = 512, Ct = 1024, fn = 2048, tr = 4096, cn = 8192, ei = 16384, wl = 32768, $r = 65536, oa = 1 << 17, cf = 1 << 18, bl = 1 << 19, Ti = 1 << 20, hs = 1 << 21, jt = Symbol("$state"), vs = Symbol("legacy props"), df = Symbol(""), xl = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), ff = 1, ms = 3, dr = 8;
function $l(e) {
  return e === this.v;
}
function kl(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Cl(e) {
  return !kl(e, this.v);
}
function pf(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function gf() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function hf(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function vf() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function mf() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function yf(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function wf() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function bf() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function xf() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let kr = !1, $f = !1;
function kf() {
  kr = !0;
}
const Cf = [];
function _l(e, t = !1) {
  return ko(e, /* @__PURE__ */ new Map(), "", Cf);
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
    if (Gr(e)) {
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
      for (var c in e)
        s[c] = ko(e[c], t, n, r);
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
let Be = null;
function ia(e) {
  Be = e;
}
function pn(e) {
  return (
    /** @type {T} */
    Sl().get(e)
  );
}
function fr(e, t) {
  return Sl().set(e, t), t;
}
function se(e, t = !1, n) {
  Be = {
    p: Be,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  }, kr && !t && (Be.l = {
    s: null,
    u: null,
    r1: [],
    r2: Fn(!1)
  });
}
function ae(e) {
  var t = (
    /** @type {ComponentContext} */
    Be
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      zl(r);
  }
  return e !== void 0 && (t.x = e), Be = t.p, e ?? /** @type {T} */
  {};
}
function ti() {
  return !kr || Be !== null && Be.l === null;
}
function Sl(e) {
  return Be === null && ys(), Be.c ??= new Map(_f(Be) || void 0);
}
function _f(e) {
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
  if (typeof e != "object" || e === null || jt in e)
    return e;
  const t = Qo(e);
  if (t !== yl && t !== lf)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Gr(e), o = /* @__PURE__ */ Ee(0), i = Yn, s = (a) => {
    if (Yn === i)
      return a();
    var l = Oe, c = Yn;
    Ln(null), ua(i);
    var d = a();
    return Ln(l), ua(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ Ee(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && wf();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var p = /* @__PURE__ */ Ee(c.value);
          return n.set(l, p), p;
        }) : Y(d, c.value, !0), !0;
      },
      deleteProperty(a, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in a) {
            const f = s(() => /* @__PURE__ */ Ee(rt));
            n.set(l, f), Co(o);
          }
        } else {
          if (r && typeof l == "string") {
            var d = (
              /** @type {Source<number>} */
              n.get("length")
            ), p = Number(l);
            Number.isInteger(p) && p < d.v && Y(d, p);
          }
          Y(c, rt), Co(o);
        }
        return !0;
      },
      get(a, l, c) {
        if (l === jt)
          return e;
        var d = n.get(l), p = l in a;
        if (d === void 0 && (!p || un(a, l)?.writable) && (d = s(() => {
          var g = Mt(p ? a[l] : rt), h = /* @__PURE__ */ Ee(g);
          return h;
        }), n.set(l, d)), d !== void 0) {
          var f = u(d);
          return f === rt ? void 0 : f;
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
          if (p !== void 0 && f !== rt)
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
        var c = n.get(l), d = c !== void 0 && c.v !== rt || Reflect.has(a, l);
        if (c !== void 0 || Me !== null && (!d || un(a, l)?.writable)) {
          c === void 0 && (c = s(() => {
            var f = d ? Mt(a[l]) : rt, g = /* @__PURE__ */ Ee(f);
            return g;
          }), n.set(l, c));
          var p = u(c);
          if (p === rt)
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
            h !== void 0 ? Y(h, rt) : g in a && (h = s(() => /* @__PURE__ */ Ee(rt)), n.set(g + "", h));
          }
        if (p === void 0)
          (!f || un(a, l)?.writable) && (p = s(() => /* @__PURE__ */ Ee(void 0)), Y(p, Mt(c)), n.set(l, p));
        else {
          f = p.v !== rt;
          var y = s(() => Mt(c));
          Y(p, y);
        }
        var C = Reflect.getOwnPropertyDescriptor(a, l);
        if (C?.set && C.set.call(d, c), !f) {
          if (r && typeof l == "string") {
            var w = (
              /** @type {Source<number>} */
              n.get("length")
            ), N = Number(l);
            Number.isInteger(N) && N >= w.v && Y(w, N + 1);
          }
          Co(o);
        }
        return !0;
      },
      ownKeys(a) {
        u(o);
        var l = Reflect.ownKeys(a).filter((p) => {
          var f = n.get(p);
          return f === void 0 || f.v !== rt;
        });
        for (var [c, d] of n)
          d.v !== rt && !(c in a) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        bf();
      }
    }
  );
}
function sa(e) {
  try {
    if (e !== null && typeof e == "object" && jt in e)
      return e[jt];
  } catch {
  }
  return e;
}
function Sf(e, t) {
  return Object.is(sa(e), sa(t));
}
// @__NO_SIDE_EFFECTS__
function Cr(e) {
  var t = kt | fn, n = Oe !== null && (Oe.f & kt) !== 0 ? (
    /** @type {Derived} */
    Oe
  ) : null;
  return Me === null || n !== null && (n.f & xt) !== 0 ? t |= xt : Me.f |= bl, {
    ctx: Be,
    deps: null,
    effects: null,
    equals: $l,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      rt
    ),
    wv: 0,
    parent: n ?? Me,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function _(e) {
  const t = /* @__PURE__ */ Cr(e);
  return Xl(t), t;
}
// @__NO_SIDE_EFFECTS__
function ws(e) {
  const t = /* @__PURE__ */ Cr(e);
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
function Ef(e) {
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
  var t, n = Me;
  Mn(Ef(e));
  try {
    El(e), t = Jl(e);
  } finally {
    Mn(n);
  }
  return t;
}
function Pl(e) {
  var t = bs(e);
  if (e.equals(t) || (e.v = t, e.wv = Ul()), !Nn) {
    var n = (Sn || (e.f & xt) !== 0) && e.deps !== null ? tr : Ct;
    Jt(e, n);
  }
}
const Zn = /* @__PURE__ */ new Map();
function Fn(e, t) {
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
function Ee(e, t) {
  const n = Fn(e);
  return Xl(n), n;
}
// @__NO_SIDE_EFFECTS__
function Nl(e, t = !1, n = !0) {
  const r = Fn(e);
  return t || (r.equals = Cl), kr && n && Be !== null && Be.l !== null && (Be.l.s ??= []).push(r), r;
}
function Y(e, t, n = !1) {
  Oe !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Tt || (Oe.f & oa) !== 0) && ti() && (Oe.f & (kt | ps | oa)) !== 0 && !dn?.includes(e) && xf();
  let r = n ? Mt(t) : t;
  return Hi(e, r);
}
function Hi(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Nn ? Zn.set(e, t) : Zn.set(e, n), e.v = t, (e.f & kt) !== 0 && ((e.f & fn) !== 0 && bs(
      /** @type {Derived} */
      e
    ), Jt(e, (e.f & xt) === 0 ? Ct : tr)), e.wv = Ul(), Ll(e, fn), ti() && Me !== null && (Me.f & Ct) !== 0 && (Me.f & (mn | er)) === 0 && (Nt === null ? Of([e]) : Nt.push(e));
  }
  return t;
}
function aa(e, t = 1) {
  var n = u(e), r = t === 1 ? n++ : n--;
  return Y(e, n), r;
}
function Co(e) {
  Y(e, e.v + 1);
}
function Ll(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = ti(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      (a & fn) === 0 && (!r && s === Me || (Jt(s, t), (a & (Ct | xt)) !== 0 && ((a & kt) !== 0 ? Ll(
        /** @type {Derived} */
        s,
        tr
      ) : ri(
        /** @type {Effect} */
        s
      ))));
    }
}
function eo(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Pf() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
let be = !1;
function bt(e) {
  be = e;
}
let Pe;
function it(e) {
  if (e === null)
    throw eo(), Rn;
  return Pe = e;
}
function gn() {
  return it(
    /** @type {TemplateNode} */
    /* @__PURE__ */ tn(Pe)
  );
}
function z(e) {
  if (be) {
    if (/* @__PURE__ */ tn(Pe) !== null)
      throw eo(), Rn;
    Pe = e;
  }
}
function ve(e = 1) {
  if (be) {
    for (var t = e, n = Pe; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ tn(n);
    Pe = n;
  }
}
function Oi() {
  for (var e = 0, t = Pe; ; ) {
    if (t.nodeType === dr) {
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
      /* @__PURE__ */ tn(t)
    );
    t.remove(), t = r;
  }
}
function Ml(e) {
  if (!e || e.nodeType !== dr)
    throw eo(), Rn;
  return (
    /** @type {Comment} */
    e.data
  );
}
var pt, Vl, Dl, Tl;
function Ai() {
  if (pt === void 0) {
    pt = window, Vl = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Dl = un(t, "firstChild").get, Tl = un(t, "nextSibling").get, ra(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), ra(n) && (n.__t = void 0);
  }
}
function hn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Ue(e) {
  return Dl.call(e);
}
// @__NO_SIDE_EFFECTS__
function tn(e) {
  return Tl.call(e);
}
function I(e, t) {
  if (!be)
    return /* @__PURE__ */ Ue(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ue(Pe)
  );
  if (n === null)
    n = Pe.appendChild(hn());
  else if (t && n.nodeType !== ms) {
    var r = hn();
    return n?.before(r), it(r), r;
  }
  return it(n), n;
}
function le(e, t) {
  if (!be) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ue(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ tn(n) : n;
  }
  return Pe;
}
function O(e, t = 1, n = !1) {
  let r = be ? Pe : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ tn(r);
  if (!be)
    return r;
  if (n && r?.nodeType !== ms) {
    var i = hn();
    return r === null ? o?.after(i) : r.before(i), it(i), i;
  }
  return it(r), /** @type {TemplateNode} */
  r;
}
function xs(e) {
  e.textContent = "";
}
function Hl(e) {
  Me === null && Oe === null && hf(), Oe !== null && (Oe.f & xt) !== 0 && Me === null && gf(), Nn && pf();
}
function Nf(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function yn(e, t, n, r = !0) {
  var o = Me, i = {
    ctx: Be,
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
  if (!s && r && (o !== null && Nf(i, o), Oe !== null && (Oe.f & kt) !== 0)) {
    var a = (
      /** @type {Derived} */
      Oe
    );
    (a.effects ??= []).push(i);
  }
  return i;
}
function Ol() {
  return Oe !== null && !Tt;
}
function Al(e) {
  const t = yn(Qr, null, !1);
  return Jt(t, Ct), t.teardown = e, t;
}
function Ze(e) {
  if (Hl(), !Oe && Me && (Me.f & mn) !== 0) {
    var t = (
      /** @type {ComponentContext} */
      Be
    );
    (t.e ??= []).push(e);
  } else
    return zl(e);
}
function zl(e) {
  return yn(fs | hs, e, !1);
}
function Il(e) {
  return Hl(), yn(Qr | hs, e, !0);
}
function $s(e) {
  const t = yn(er, e, !0);
  return () => {
    mt(t);
  };
}
function Lf(e) {
  const t = yn(er, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? pr(t, () => {
      mt(t), r(void 0);
    }) : (mt(t), r(void 0));
  });
}
function to(e) {
  return yn(fs, e, !1);
}
function no(e) {
  return yn(Qr, e, !0);
}
function ke(e, t = [], n = Cr) {
  const r = t.map(n);
  return Hn(() => e(...r.map(u)));
}
function Hn(e, t = 0) {
  var n = yn(Qr | ps | t, e, !0);
  return n;
}
function Gt(e, t = !0) {
  return yn(Qr | mn, e, !0, t);
}
function Bl(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Nn, r = Oe;
    la(!0), Ln(null);
    try {
      t.call(null);
    } finally {
      la(n), Ln(r);
    }
  }
}
function ql(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    n.ac?.abort(xl);
    var r = n.next;
    (n.f & er) !== 0 ? n.parent = null : mt(n, t), n = r;
  }
}
function Mf(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & mn) === 0 && mt(t), t = n;
  }
}
function mt(e, t = !0) {
  var n = !1;
  (t || (e.f & cf) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (Rl(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), ql(e, t && !n), Ao(e, 0), Jt(e, ei);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  Bl(e);
  var o = e.parent;
  o !== null && o.first !== null && Zl(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function Rl(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ tn(e)
    );
    e.remove(), e = n;
  }
}
function Zl(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function pr(e, t) {
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
      var o = r.next, i = (r.f & $r) !== 0 || (r.f & mn) !== 0;
      ks(r, t, i ? n : !1), r = o;
    }
  }
}
function Hr(e) {
  Yl(e, !0);
}
function Yl(e, t) {
  if ((e.f & cn) !== 0) {
    e.f ^= cn;
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & $r) !== 0 || (n.f & mn) !== 0;
      Yl(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
const Vf = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Or = [], Ar = [];
function jl() {
  var e = Or;
  Or = [], To(e);
}
function Fl() {
  var e = Ar;
  Ar = [], To(e);
}
function ro(e) {
  Or.length === 0 && queueMicrotask(jl), Or.push(e);
}
function Df(e) {
  Ar.length === 0 && Vf(Fl), Ar.push(e);
}
function Tf() {
  Or.length > 0 && jl(), Ar.length > 0 && Fl();
}
function Hf(e) {
  var t = (
    /** @type {Effect} */
    Me
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
let zr = !1, Ir = null, Kn = !1, Nn = !1;
function la(e) {
  Nn = e;
}
let Dr = [], Oe = null, Tt = !1;
function Ln(e) {
  Oe = e;
}
let Me = null;
function Mn(e) {
  Me = e;
}
let dn = null;
function Xl(e) {
  Oe !== null && Oe.f & Ti && (dn === null ? dn = [e] : dn.push(e));
}
let ut = null, wt = 0, Nt = null;
function Of(e) {
  Nt = e;
}
let Oo = 1, Br = 0, Yn = Br;
function ua(e) {
  Yn = e;
}
let Sn = !1;
function Ul() {
  return ++Oo;
}
function ni(e) {
  var t = e.f;
  if ((t & fn) !== 0)
    return !0;
  if ((t & tr) !== 0) {
    var n = e.deps, r = (t & xt) !== 0;
    if (n !== null) {
      var o, i, s = (t & Ho) !== 0, a = r && Me !== null && !Sn, l = n.length;
      if (s || a) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (o = 0; o < l; o++)
          i = n[o], (s || !i?.reactions?.includes(c)) && (i.reactions ??= []).push(c);
        s && (c.f ^= Ho), a && d !== null && (d.f & xt) === 0 && (c.f ^= xt);
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
    (!r || Me !== null && !Sn) && Jt(e, Ct);
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
      ) : t === i && (n ? Jt(i, fn) : (i.f & Ct) !== 0 && Jt(i, tr), ri(
        /** @type {Effect} */
        i
      ));
    }
}
function Jl(e) {
  var t = ut, n = wt, r = Nt, o = Oe, i = Sn, s = dn, a = Be, l = Tt, c = Yn, d = e.f;
  ut = /** @type {null | Value[]} */
  null, wt = 0, Nt = null, Sn = (d & xt) !== 0 && (Tt || !Kn || Oe === null), Oe = (d & (mn | er)) === 0 ? e : null, dn = null, ia(e.ctx), Tt = !1, Yn = ++Br, e.f |= Ti, e.ac !== null && (e.ac.abort(xl), e.ac = null);
  try {
    var p = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (ut !== null) {
      var g;
      if (Ao(e, wt), f !== null && wt > 0)
        for (f.length = wt + ut.length, g = 0; g < ut.length; g++)
          f[wt + g] = ut[g];
      else
        e.deps = f = ut;
      if (!Sn || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (d & kt) !== 0 && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (g = wt; g < f.length; g++)
          (f[g].reactions ??= []).push(e);
    } else f !== null && wt < f.length && (Ao(e, wt), f.length = wt);
    if (ti() && Nt !== null && !Tt && f !== null && (e.f & (kt | tr | fn)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      Nt.length; g++)
        Gl(
          Nt[g],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (Br++, Nt !== null && (r === null ? r = Nt : r.push(.../** @type {Source[]} */
    Nt))), p;
  } catch (h) {
    Hf(h);
  } finally {
    ut = t, wt = n, Nt = r, Oe = o, Sn = i, dn = s, ia(a), Tt = l, Yn = c, e.f ^= Ti;
  }
}
function Af(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = af.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & kt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ut === null || !ut.includes(t)) && (Jt(t, tr), (t.f & (xt | Ho)) === 0 && (t.f ^= Ho), El(
    /** @type {Derived} **/
    t
  ), Ao(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Ao(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Af(e, n[r]);
}
function Cs(e) {
  var t = e.f;
  if ((t & ei) === 0) {
    Jt(e, Ct);
    var n = Me, r = Kn;
    Me = e, Kn = !0;
    try {
      (t & ps) !== 0 ? Mf(e) : ql(e), Bl(e);
      var o = Jl(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = Oo;
      var i;
      sf && $f && (e.f & fn) !== 0 && e.deps;
    } finally {
      Kn = r, Me = n;
    }
  }
}
function zf() {
  try {
    vf();
  } catch (e) {
    if (Ir !== null)
      Wl(e, Ir);
    else
      throw e;
  }
}
function Ql() {
  var e = Kn;
  try {
    var t = 0;
    for (Kn = !0; Dr.length > 0; ) {
      t++ > 1e3 && zf();
      var n = Dr, r = n.length;
      Dr = [];
      for (var o = 0; o < r; o++) {
        var i = Bf(n[o]);
        If(i);
      }
      Zn.clear();
    }
  } finally {
    zr = !1, Kn = e, Ir = null;
  }
}
function If(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if ((r.f & (ei | cn)) === 0 && ni(r)) {
        var o = Oo;
        if (Cs(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? Zl(r) : r.fn = null), Oo > o && (r.f & hs) !== 0)
          break;
      }
    }
    for (; n < t; n += 1)
      ri(e[n]);
  }
}
function ri(e) {
  zr || (zr = !0, queueMicrotask(Ql));
  for (var t = Ir = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if ((n & (er | mn)) !== 0) {
      if ((n & Ct) === 0) return;
      t.f ^= Ct;
    }
  }
  Dr.push(t);
}
function Bf(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, o = (r & (mn | er)) !== 0, i = o && (r & Ct) !== 0;
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
    if (Tf(), Dr.length === 0)
      return zr = !1, Ir = null, /** @type {T} */
      t;
    zr = !0, Ql();
  }
}
async function qf() {
  await Promise.resolve(), v();
}
function u(e) {
  var t = e.f, n = (t & kt) !== 0;
  if (Oe !== null && !Tt) {
    if (!dn?.includes(e)) {
      var r = Oe.deps;
      e.rv < Br && (e.rv = Br, ut === null && r !== null && r[wt] === e ? wt++ : ut === null ? ut = [e] : (!Sn || !ut.includes(e)) && ut.push(e));
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
  if (n && !Nn && (o = /** @type {Derived} */
  e, ni(o) && Pl(o)), Nn) {
    if (Zn.has(e))
      return Zn.get(e);
    if (n) {
      o = /** @type {Derived} */
      e;
      var s = o.v;
      return ((o.f & Ct) !== 0 || eu(o)) && (s = bs(o)), Zn.set(o, s), s;
    }
  }
  return e.v;
}
function eu(e) {
  if (e.v === rt) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Zn.has(t) || (t.f & kt) !== 0 && eu(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function et(e) {
  var t = Tt;
  try {
    return Tt = !0, e();
  } finally {
    Tt = t;
  }
}
const Rf = -7169;
function Jt(e, t) {
  e.f = e.f & Rf | t;
}
function Zf(e, t) {
  var n = {};
  for (var r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}
function _s(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (jt in e)
      zi(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && jt in n && zi(n);
      }
  }
}
function zi(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        zi(e[r], t);
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
function Kf(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, ro(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function Yf(e) {
  be && /* @__PURE__ */ Ue(e) !== null && xs(e);
}
let ca = !1;
function jf() {
  ca || (ca = !0, document.addEventListener(
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
function Ff(e) {
  var t = Oe, n = Me;
  Ln(null), Mn(null);
  try {
    return e();
  } finally {
    Ln(t), Mn(n);
  }
}
const tu = /* @__PURE__ */ new Set(), Ii = /* @__PURE__ */ new Set();
function Ss(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || Nr.call(t, i), !i.cancelBubble)
      return Ff(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? ro(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function Bi(e, t, n, r = {}) {
  var o = Ss(t, e, n, r);
  return () => {
    e.removeEventListener(t, o, r);
  };
}
function da(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = Ss(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Al(() => {
    t.removeEventListener(e, s, i);
  });
}
function wn(e) {
  for (var t = 0; t < e.length; t++)
    tu.add(e[t]);
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
    var d = Oe, p = Me;
    Ln(null), Mn(null);
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
            if (Gr(y)) {
              var [C, ...w] = y;
              C.apply(i, [e, ...w]);
            } else
              y.call(i, e);
        } catch (N) {
          f ? g.push(N) : f = N;
        }
        if (e.cancelBubble || h === t || h === null)
          break;
        i = h;
      }
      if (f) {
        for (let N of g)
          queueMicrotask(() => {
            throw N;
          });
        throw f;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Ln(d), Mn(p);
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
    Me
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function G(e, t) {
  var n = (t & vl) !== 0, r = (t & tf) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (be)
      return vt(Pe, null), Pe;
    o === void 0 && (o = Es(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ Ue(o)));
    var s = (
      /** @type {TemplateNode} */
      r || Vl ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ue(s)
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
function Wf(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & vl) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (be)
      return vt(Pe, null), Pe;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Es(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ Ue(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ Ue(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ Ue(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ Ue(l);
    }
    var c = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ue(c)
      ), p = (
        /** @type {TemplateNode} */
        c.lastChild
      );
      vt(d, p);
    } else
      vt(c, c);
    return c;
  };
}
// @__NO_SIDE_EFFECTS__
function he(e, t) {
  return /* @__PURE__ */ Wf(e, t, "svg");
}
function Se(e = "") {
  if (!be) {
    var t = hn(e + "");
    return vt(t, t), t;
  }
  var n = Pe;
  return n.nodeType !== ms && (n.before(n = hn()), it(n)), vt(n, n), n;
}
function De() {
  if (be)
    return vt(Pe, null), Pe;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = hn();
  return e.append(t, n), vt(t, n), e;
}
function V(e, t) {
  if (be) {
    Me.nodes_end = Pe, gn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Xf(e) {
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
function Gf(e) {
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
const ep = ["touchstart", "touchmove"];
function tp(e) {
  return ep.includes(e);
}
const np = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function rp(e) {
  return np.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function ze(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function nu(e, t) {
  return ru(e, t);
}
function op(e, t) {
  Ai(), t.intro = t.intro ?? !1;
  const n = t.target, r = be, o = Pe;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ue(n)
    ); i && (i.nodeType !== dr || /** @type {Comment} */
    i.data !== ls); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ tn(i);
    if (!i)
      throw Rn;
    bt(!0), it(
      /** @type {Comment} */
      i
    ), gn();
    const s = ru(e, { ...t, anchor: i });
    if (Pe === null || Pe.nodeType !== dr || /** @type {Comment} */
    Pe.data !== cs)
      throw eo(), Rn;
    return bt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === Rn)
      return t.recover === !1 && mf(), Ai(), xs(n), bt(!1), nu(e, t);
    throw s;
  } finally {
    bt(r), it(o);
  }
}
const rr = /* @__PURE__ */ new Map();
function ru(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  Ai();
  var a = /* @__PURE__ */ new Set(), l = (p) => {
    for (var f = 0; f < p.length; f++) {
      var g = p[f];
      if (!a.has(g)) {
        a.add(g);
        var h = tp(g);
        t.addEventListener(g, Nr, { passive: h });
        var y = rr.get(g);
        y === void 0 ? (document.addEventListener(g, Nr, { passive: h }), rr.set(g, 1)) : rr.set(g, y + 1);
      }
    }
  };
  l(ds(tu)), Ii.add(l);
  var c = void 0, d = Lf(() => {
    var p = n ?? t.appendChild(hn());
    return Gt(() => {
      if (i) {
        se({});
        var f = (
          /** @type {ComponentContext} */
          Be
        );
        f.c = i;
      }
      o && (r.$$events = o), be && vt(
        /** @type {TemplateNode} */
        p,
        null
      ), c = e(p, r) || {}, be && (Me.nodes_end = Pe), i && ae();
    }), () => {
      for (var f of a) {
        t.removeEventListener(f, Nr);
        var g = (
          /** @type {number} */
          rr.get(f)
        );
        --g === 0 ? (document.removeEventListener(f, Nr), rr.delete(f)) : rr.set(f, g);
      }
      Ii.delete(l), p !== n && p.parentNode?.removeChild(p);
    };
  });
  return qi.set(c, d), c;
}
let qi = /* @__PURE__ */ new WeakMap();
function ip(e, t) {
  const n = qi.get(e);
  return n ? (qi.delete(e), n(t)) : Promise.resolve();
}
function Ye(e, t, ...n) {
  var r = e, o = tt, i;
  Hn(() => {
    o !== (o = t()) && (i && (mt(i), i = null), i = Gt(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, $r), be && (r = Pe);
}
function On(e) {
  Be === null && ys(), kr && Be.l !== null ? sp(Be).m.push(e) : Ze(() => {
    const t = et(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function oi(e) {
  Be === null && ys(), On(() => () => et(e));
}
function sp(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
function ie(e, t, [n, r] = [0, 0]) {
  be && n === 0 && gn();
  var o = e, i = null, s = null, a = rt, l = n > 0 ? $r : 0, c = !1;
  const d = (f, g = !0) => {
    c = !0, p(g, f);
  }, p = (f, g) => {
    if (a === (a = f)) return;
    let h = !1;
    if (be && r !== -1) {
      if (n === 0) {
        const C = Ml(o);
        C === ls ? r = 0 : C === us ? r = 1 / 0 : (r = parseInt(C.substring(1)), r !== r && (r = a ? 1 / 0 : -1));
      }
      const y = r > n;
      !!a === y && (o = Oi(), it(o), bt(!1), h = !0, r = -1);
    }
    a ? (i ? Hr(i) : g && (i = Gt(() => g(o))), s && pr(s, () => {
      s = null;
    })) : (s ? Hr(s) : g && (s = Gt(() => g(o, [n + 1, r]))), i && pr(i, () => {
      i = null;
    })), h && bt(!0);
  };
  Hn(() => {
    c = !1, t(d), c || p(null, null);
  }, l), be && (o = Pe);
}
function ap(e, t) {
  be && it(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ue(e)
  ), no(() => {
    var n = t();
    for (var r in n) {
      var o = n[r];
      o ? e.style.setProperty(r, o) : e.style.removeProperty(r);
    }
  });
}
function gr(e, t) {
  return t;
}
function lp(e, t, n, r) {
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
    ), r.clear(), Cn(e, t[0].prev, t[i - 1].next);
  }
  Kl(o, () => {
    for (var c = 0; c < i; c++) {
      var d = t[c];
      a || (r.delete(d.k), Cn(e, d.prev, d.next)), mt(d.e, !a);
    }
  });
}
function st(e, t, n, r, o, i = null) {
  var s = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & gl) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      e
    );
    s = be ? it(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Ue(c)
    ) : c.appendChild(hn());
  }
  be && gn();
  var d = null, p = !1, f = /* @__PURE__ */ ws(() => {
    var g = n();
    return Gr(g) ? g : g == null ? [] : ds(g);
  });
  Hn(() => {
    var g = u(f), h = g.length;
    if (p && h === 0)
      return;
    p = h === 0;
    let y = !1;
    if (be) {
      var C = Ml(s) === us;
      C !== (h === 0) && (s = Oi(), it(s), bt(!1), y = !0);
    }
    if (be) {
      for (var w = null, N, x = 0; x < h; x++) {
        if (Pe.nodeType === dr && /** @type {Comment} */
        Pe.data === cs) {
          s = /** @type {Comment} */
          Pe, y = !0, bt(!1);
          break;
        }
        var $ = g[x], k = r($, x);
        N = ou(
          Pe,
          a,
          w,
          null,
          $,
          k,
          x,
          o,
          t,
          n
        ), a.items.set(k, N), w = N;
      }
      h > 0 && it(Oi());
    }
    be || up(g, a, s, o, t, r, n), i !== null && (h === 0 ? d ? Hr(d) : d = Gt(() => i(s)) : d !== null && pr(d, () => {
      d = null;
    })), y && bt(!0), u(f);
  }), be && (s = Pe);
}
function up(e, t, n, r, o, i, s) {
  var a = (o & Xd) !== 0, l = (o & (ss | as)) !== 0, c = e.length, d = t.items, p = t.first, f = p, g, h = null, y, C = [], w = [], N, x, $, k;
  if (a)
    for (k = 0; k < c; k += 1)
      N = e[k], x = i(N, k), $ = d.get(x), $ !== void 0 && ($.a?.measure(), (y ??= /* @__PURE__ */ new Set()).add($));
  for (k = 0; k < c; k += 1) {
    if (N = e[k], x = i(N, k), $ = d.get(x), $ === void 0) {
      var M = f ? (
        /** @type {TemplateNode} */
        f.e.nodes_start
      ) : n;
      h = ou(
        M,
        t,
        h,
        h === null ? t.first : h.next,
        N,
        x,
        k,
        r,
        o,
        s
      ), d.set(x, h), C = [], w = [], f = h.next;
      continue;
    }
    if (l && cp($, N, k, o), ($.e.f & cn) !== 0 && (Hr($.e), a && ($.a?.unfix(), (y ??= /* @__PURE__ */ new Set()).delete($))), $ !== f) {
      if (g !== void 0 && g.has($)) {
        if (C.length < w.length) {
          var A = w[0], q;
          h = A.prev;
          var W = C[0], K = C[C.length - 1];
          for (q = 0; q < C.length; q += 1)
            fa(C[q], A, n);
          for (q = 0; q < w.length; q += 1)
            g.delete(w[q]);
          Cn(t, W.prev, K.next), Cn(t, h, W), Cn(t, K, A), f = A, h = K, k -= 1, C = [], w = [];
        } else
          g.delete($), fa($, f, n), Cn(t, $.prev, $.next), Cn(t, $, h === null ? t.first : h.next), Cn(t, h, $), h = $;
        continue;
      }
      for (C = [], w = []; f !== null && f.k !== x; )
        (f.e.f & cn) === 0 && (g ??= /* @__PURE__ */ new Set()).add(f), w.push(f), f = f.next;
      if (f === null)
        continue;
      $ = f;
    }
    C.push($), h = $, f = $.next;
  }
  if (f !== null || g !== void 0) {
    for (var L = g === void 0 ? [] : ds(g); f !== null; )
      (f.e.f & cn) === 0 && L.push(f), f = f.next;
    var S = L.length;
    if (S > 0) {
      var T = (o & gl) !== 0 && c === 0 ? n : null;
      if (a) {
        for (k = 0; k < S; k += 1)
          L[k].a?.measure();
        for (k = 0; k < S; k += 1)
          L[k].a?.fix();
      }
      lp(t, L, T, d);
    }
  }
  a && ro(() => {
    if (y !== void 0)
      for ($ of y)
        $.a?.apply();
  }), Me.first = t.first && t.first.e, Me.last = h && h.e;
}
function cp(e, t, n, r) {
  (r & ss) !== 0 && Hi(e.v, t), (r & as) !== 0 ? Hi(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function ou(e, t, n, r, o, i, s, a, l, c) {
  var d = (l & ss) !== 0, p = (l & Ud) === 0, f = d ? p ? /* @__PURE__ */ Nl(o, !1, !1) : Fn(o) : o, g = (l & as) === 0 ? s : Fn(s), h = {
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
    return h.e = Gt(() => a(e, f, g, c), be), h.e.prev = n && n.e, h.e.next = r && r.e, n === null ? t.first = h : (n.next = h, n.e.next = h.e), r !== null && (r.prev = h, r.e.prev = h.e), h;
  } finally {
  }
}
function fa(e, t, n) {
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
      /* @__PURE__ */ tn(i)
    );
    o.before(i), i = s;
  }
}
function Cn(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function Ps(e, t, n = !1, r = !1, o = !1) {
  var i = e, s = "";
  ke(() => {
    var a = (
      /** @type {Effect} */
      Me
    );
    if (s === (s = t() ?? "")) {
      be && gn();
      return;
    }
    if (a.nodes_start !== null && (Rl(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if (be) {
        Pe.data;
        for (var l = gn(), c = l; l !== null && (l.nodeType !== dr || /** @type {Comment} */
        l.data !== ""); )
          c = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ tn(l);
        if (l === null)
          throw eo(), Rn;
        vt(Pe, c), i = it(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var p = Es(d);
      if ((n || r) && (p = /** @type {Element} */
      /* @__PURE__ */ Ue(p)), vt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ue(p),
        /** @type {TemplateNode} */
        p.lastChild
      ), n || r)
        for (; /* @__PURE__ */ Ue(p); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ Ue(p)
          );
      else
        i.before(p);
    }
  });
}
function Ns(e, t, n) {
  be && gn();
  var r = e, o, i;
  Hn(() => {
    o !== (o = t()) && (i && (pr(i), i = null), o && (i = Gt(() => n(r, o))));
  }, $r), be && (r = Pe);
}
function dp(e, t, n, r, o, i) {
  let s = be;
  be && gn();
  var a, l, c = null;
  be && Pe.nodeType === ff && (c = /** @type {Element} */
  Pe, gn());
  var d = (
    /** @type {TemplateNode} */
    be ? Pe : e
  ), p;
  Hn(() => {
    const f = t() || null;
    var g = f === "svg" ? rf : null;
    f !== a && (p && (f === null ? pr(p, () => {
      p = null, l = null;
    }) : f === l ? Hr(p) : mt(p)), f && f !== l && (p = Gt(() => {
      if (c = be ? (
        /** @type {Element} */
        c
      ) : g ? document.createElementNS(g, f) : document.createElement(f), vt(c, c), r) {
        be && rp(f) && c.append(document.createComment(""));
        var h = (
          /** @type {TemplateNode} */
          be ? /* @__PURE__ */ Ue(c) : c.appendChild(hn())
        );
        be && (h === null ? bt(!1) : it(h)), r(c, h);
      }
      Me.nodes_end = c, d.before(c);
    })), a = f, a && (l = a));
  }, $r), s && (bt(!0), it(d));
}
function He(e, t) {
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
function ot(e, t, n) {
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
function fp(e, t) {
  var n = void 0, r;
  Hn(() => {
    n !== (n = t()) && (r && (mt(r), r = null), n && (r = Gt(() => {
      to(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function iu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = iu(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function pp() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = iu(e)) && (r && (r += " "), r += t);
  return r;
}
function bn(e) {
  return typeof e == "object" ? pp(e) : e ?? "";
}
const pa = [...` 	
\r\f \v\uFEFF`];
function gp(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || pa.includes(r[s - 1])) && (a === r.length || pa.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function ga(e, t = !1) {
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
function hp(e, t) {
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
    return r && (n += ga(r)), o && (n += ga(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function yt(e, t, n, r, o, i) {
  var s = e.__className;
  if (be || s !== n || s === void 0) {
    var a = gp(n, r, i);
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
function dt(e, t, n, r) {
  var o = e.__style;
  if (be || o !== t) {
    var i = hp(t, r);
    (!be || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (xi(e, n?.[0], r[0]), xi(e, n?.[1], r[1], "important")) : xi(e, n, r));
  return r;
}
function Ri(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!Gr(t))
      return Pf();
    for (var r of e.options)
      r.selected = t.includes(ha(r));
    return;
  }
  for (r of e.options) {
    var o = ha(r);
    if (Sf(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function vp(e) {
  var t = new MutationObserver(() => {
    Ri(e, e.__value);
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
  }), Al(() => {
    t.disconnect();
  });
}
function ha(e) {
  return "__value" in e ? e.__value : e.value;
}
const _n = Symbol("class"), Kt = Symbol("style"), su = Symbol("is custom element"), au = Symbol("is html");
function Ft(e) {
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
    e.__on_r = n, Df(n), jf();
  }
}
function _o(e, t) {
  var n = ii(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function Zi(e, t) {
  var n = ii(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function mp(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function we(e, t, n, r) {
  var o = ii(e);
  be && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[df] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && lu(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function yp(e, t, n, r, o = !1) {
  var i = ii(e), s = i[su], a = !i[au];
  let l = be && s;
  l && bt(!1);
  var c = t || {}, d = e.tagName === "OPTION";
  for (var p in t)
    p in n || (n[p] = null);
  n.class ? n.class = bn(n.class) : (r || n[_n]) && (n.class = null), n[Kt] && (n.style ??= null);
  var f = lu(e);
  for (const x in n) {
    let $ = n[x];
    if (d && x === "value" && $ == null) {
      e.value = e.__value = "", c[x] = $;
      continue;
    }
    if (x === "class") {
      var g = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      yt(e, g, $, r, t?.[_n], n[_n]), c[x] = $, c[_n] = n[_n];
      continue;
    }
    if (x === "style") {
      dt(e, $, t?.[Kt], n[Kt]), c[x] = $, c[Kt] = n[Kt];
      continue;
    }
    var h = c[x];
    if (!($ === h && !($ === void 0 && e.hasAttribute(x)))) {
      c[x] = $;
      var y = x[0] + x[1];
      if (y !== "$$")
        if (y === "on") {
          const k = {}, M = "$$" + x;
          let A = x.slice(2);
          var C = Gf(A);
          if (Xf(A) && (A = A.slice(0, -7), k.capture = !0), !C && h) {
            if ($ != null) continue;
            e.removeEventListener(A, c[M], k), c[M] = null;
          }
          if ($ != null)
            if (C)
              e[`__${A}`] = $, wn([A]);
            else {
              let q = function(W) {
                c[x].call(this, W);
              };
              c[M] = Ss(A, e, q, k);
            }
          else C && (e[`__${A}`] = void 0);
        } else if (x === "style")
          we(e, x, $);
        else if (x === "autofocus")
          Kf(
            /** @type {HTMLElement} */
            e,
            !!$
          );
        else if (!s && (x === "__value" || x === "value" && $ != null))
          e.value = e.__value = $;
        else if (x === "selected" && d)
          mp(
            /** @type {HTMLOptionElement} */
            e,
            $
          );
        else {
          var w = x;
          a || (w = Qf(w));
          var N = w === "defaultValue" || w === "defaultChecked";
          if ($ == null && !s && !N)
            if (i[x] = null, w === "value" || w === "checked") {
              let k = (
                /** @type {HTMLInputElement} */
                e
              );
              const M = t === void 0;
              if (w === "value") {
                let A = k.defaultValue;
                k.removeAttribute(w), k.defaultValue = A, k.value = k.__value = M ? A : null;
              } else {
                let A = k.defaultChecked;
                k.removeAttribute(w), k.defaultChecked = A, k.checked = M ? A : !1;
              }
            } else
              e.removeAttribute(x);
          else N || f.includes(w) && (s || typeof $ != "string") ? e[w] = $ : typeof $ != "function" && we(e, w, $);
        }
    }
  }
  return l && bt(!0), c;
}
function Ge(e, t, n = [], r, o = !1, i = Cr) {
  const s = n.map(i);
  var a = void 0, l = {}, c = e.nodeName === "SELECT", d = !1;
  if (Hn(() => {
    var f = t(...s.map(u)), g = yp(e, a, f, r, o);
    d && c && "value" in f && Ri(
      /** @type {HTMLSelectElement} */
      e,
      f.value
    );
    for (let y of Object.getOwnPropertySymbols(l))
      f[y] || mt(l[y]);
    for (let y of Object.getOwnPropertySymbols(f)) {
      var h = f[y];
      y.description === of && (!a || h !== a[y]) && (l[y] && mt(l[y]), l[y] = Gt(() => fp(e, () => h))), g[y] = h;
    }
    a = g;
  }), c) {
    var p = (
      /** @type {HTMLSelectElement} */
      e
    );
    to(() => {
      Ri(
        p,
        /** @type {Record<string | symbol, any>} */
        a.value,
        !0
      ), vp(p);
    });
  }
  d = !0;
}
function ii(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [su]: e.nodeName.includes("-"),
      [au]: e.namespaceURI === nf
    }
  );
}
var va = /* @__PURE__ */ new Map();
function lu(e) {
  var t = va.get(e.nodeName);
  if (t) return t;
  va.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = ml(r);
    for (var i in n)
      n[i].set && t.push(i);
    r = Qo(r);
  }
  return t;
}
class Ls {
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
          Ls.entries.set(n.target, n);
          for (var r of this.#t.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var wp = /* @__PURE__ */ new Ls({
  box: "border-box"
});
function ma(e, t, n) {
  var r = wp.observe(e, () => n(e[t]));
  to(() => (et(() => n(e[t])), r));
}
function ya(e, t) {
  return e === t || e?.[jt] === t;
}
function _t(e = {}, t, n, r) {
  return to(() => {
    var o, i;
    return no(() => {
      o = i, i = [], et(() => {
        e !== n(...i) && (t(e, ...i), o && ya(n(...o), e) && t(null, ...o));
      });
    }), () => {
      ro(() => {
        i && ya(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function uu(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Be
  ), n = t.l.u;
  if (!n) return;
  let r = () => _s(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ Cr(() => {
      let a = !1;
      const l = t.s;
      for (const c in l)
        l[c] !== i[c] && (i[c] = l[c], a = !0);
      return a && o++, o;
    });
    r = () => u(s);
  }
  n.b.length && Il(() => {
    wa(t, r), To(n.b);
  }), Ze(() => {
    const o = et(() => n.m.map(uf));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Ze(() => {
    wa(t, r), To(n.a);
  });
}
function wa(e, t) {
  if (e.l.s)
    for (const n of e.l.s) u(n);
  t();
}
let vo = !1;
function bp(e) {
  var t = vo;
  try {
    return vo = !1, [e(), vo];
  } finally {
    vo = t;
  }
}
const xp = {
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
function Ae(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    xp
  );
}
const $p = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return u(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    if (!(t in e.special)) {
      var r = Me;
      try {
        Mn(e.parent_effect), e.special[t] = m(
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
        Mn(r);
      }
    }
    return e.special[t](n), aa(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), aa(e.version)), !0;
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
      version: Fn(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        Me
      )
    },
    $p
  );
}
const kp = {
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
      if (Sr(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = un(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === jt || t === vs) return !1;
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
  return new Proxy({ props: e }, kp);
}
function m(e, t, n, r) {
  var o = !kr || (n & Jd) !== 0, i = (n & Qd) !== 0, s = (n & ef) !== 0, a = (
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
    var p = jt in e || vs in e;
    d = un(e, t)?.set ?? (p && t in e ? (x) => e[t] = x : void 0);
  }
  var f, g = !1;
  i ? [f, g] = bp(() => (
    /** @type {V} */
    e[t]
  )) : f = /** @type {V} */
  e[t], f === void 0 && r !== void 0 && (f = c(), d && (o && yf(), d(f)));
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
  }, o && (n & hl) === 0)
    return h;
  if (d) {
    var y = e.$$legacy;
    return function(x, $) {
      return arguments.length > 0 ? ((!o || !$ || y || g) && d($ ? h() : x), x) : h();
    };
  }
  var C = !1, w = ((n & Gd) !== 0 ? Cr : ws)(() => (C = !1, h()));
  i && u(w);
  var N = (
    /** @type {Effect} */
    Me
  );
  return function(x, $) {
    if (arguments.length > 0) {
      const k = $ ? u(w) : o && i ? Mt(x) : x;
      return Y(w, k), C = !0, a !== void 0 && (a = k), x;
    }
    return Nn && C || (N.f & ei) !== 0 ? w.v : u(w);
  };
}
function Cp(e) {
  return new _p(e);
}
class _p {
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
      var a = /* @__PURE__ */ Nl(s, !1, !1);
      return n.set(i, a), a;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, s) {
          return u(n.get(s) ?? r(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === vs ? !0 : (u(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, a) {
          return Y(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
        }
      }
    );
    this.#e = (t.hydrate ? op : nu)(t.component, {
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
      ip(this.#e);
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
let cu;
typeof HTMLElement == "function" && (cu = class extends HTMLElement {
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
          r !== "default" && (i.name = r), V(o, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, n = Sp(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = So(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = Cp({
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
          for (const r of Vo(this.$$c)) {
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
    return Vo(this.$$p_d).find(
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
function Sp(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function re(e, t, n, r, o, i) {
  let s = class extends cu {
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
        l = So(a, l, t), this.$$d[a] = l;
        var c = this.$$c;
        if (c) {
          var d = un(c, a)?.get;
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
var Ep = { value: () => {
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
function Pp(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Eo.prototype = si.prototype = {
  constructor: Eo,
  on: function(e, t) {
    var n = this._, r = Pp(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = Np(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = xa(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = xa(n[o], e.name, null);
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
function Np(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function xa(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Ep, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Ki = "http://www.w3.org/1999/xhtml";
const $a = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ki,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function ai(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), $a.hasOwnProperty(t) ? { space: $a[t], local: e } : e;
}
function Lp(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Ki && t.documentElement.namespaceURI === Ki ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function Mp(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function du(e) {
  var t = ai(e);
  return (t.local ? Mp : Lp)(t);
}
function Vp() {
}
function Ms(e) {
  return e == null ? Vp : function() {
    return this.querySelector(e);
  };
}
function Dp(e) {
  typeof e != "function" && (e = Ms(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, c, d = 0; d < s; ++d)
      (l = i[d]) && (c = e.call(l, l.__data__, d, i)) && ("__data__" in l && (c.__data__ = l.__data__), a[d] = c);
  return new St(r, this._parents);
}
function Tp(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Hp() {
  return [];
}
function fu(e) {
  return e == null ? Hp : function() {
    return this.querySelectorAll(e);
  };
}
function Op(e) {
  return function() {
    return Tp(e.apply(this, arguments));
  };
}
function Ap(e) {
  typeof e == "function" ? e = Op(e) : e = fu(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, c = 0; c < a; ++c)
      (l = s[c]) && (r.push(e.call(l, l.__data__, c, s)), o.push(l));
  return new St(r, o);
}
function pu(e) {
  return function() {
    return this.matches(e);
  };
}
function gu(e) {
  return function(t) {
    return t.matches(e);
  };
}
var zp = Array.prototype.find;
function Ip(e) {
  return function() {
    return zp.call(this.children, e);
  };
}
function Bp() {
  return this.firstElementChild;
}
function qp(e) {
  return this.select(e == null ? Bp : Ip(typeof e == "function" ? e : gu(e)));
}
var Rp = Array.prototype.filter;
function Zp() {
  return Array.from(this.children);
}
function Kp(e) {
  return function() {
    return Rp.call(this.children, e);
  };
}
function Yp(e) {
  return this.selectAll(e == null ? Zp : Kp(typeof e == "function" ? e : gu(e)));
}
function jp(e) {
  typeof e != "function" && (e = pu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, c = 0; c < s; ++c)
      (l = i[c]) && e.call(l, l.__data__, c, i) && a.push(l);
  return new St(r, this._parents);
}
function hu(e) {
  return new Array(e.length);
}
function Fp() {
  return new St(this._enter || this._groups.map(hu), this._parents);
}
function zo(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
zo.prototype = {
  constructor: zo,
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
function Wp(e) {
  return function() {
    return e;
  };
}
function Xp(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, c = i.length; s < c; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new zo(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function Up(e, t, n, r, o, i, s) {
  var a, l, c = /* @__PURE__ */ new Map(), d = t.length, p = i.length, f = new Array(d), g;
  for (a = 0; a < d; ++a)
    (l = t[a]) && (f[a] = g = s.call(l, l.__data__, a, t) + "", c.has(g) ? o[a] = l : c.set(g, l));
  for (a = 0; a < p; ++a)
    g = s.call(e, i[a], a, i) + "", (l = c.get(g)) ? (r[a] = l, l.__data__ = i[a], c.delete(g)) : n[a] = new zo(e, i[a]);
  for (a = 0; a < d; ++a)
    (l = t[a]) && c.get(f[a]) === l && (o[a] = l);
}
function Gp(e) {
  return e.__data__;
}
function Jp(e, t) {
  if (!arguments.length) return Array.from(this, Gp);
  var n = t ? Up : Xp, r = this._parents, o = this._groups;
  typeof e != "function" && (e = Wp(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), c = 0; c < i; ++c) {
    var d = r[c], p = o[c], f = p.length, g = Qp(e.call(d, d && d.__data__, c, r)), h = g.length, y = a[c] = new Array(h), C = s[c] = new Array(h), w = l[c] = new Array(f);
    n(d, p, y, C, w, g, t);
    for (var N = 0, x = 0, $, k; N < h; ++N)
      if ($ = y[N]) {
        for (N >= x && (x = N + 1); !(k = C[x]) && ++x < h; ) ;
        $._next = k || null;
      }
  }
  return s = new St(s, r), s._enter = a, s._exit = l, s;
}
function Qp(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function eg() {
  return new St(this._exit || this._groups.map(hu), this._parents);
}
function tg(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function ng(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var c = n[l], d = r[l], p = c.length, f = a[l] = new Array(p), g, h = 0; h < p; ++h)
      (g = c[h] || d[h]) && (f[h] = g);
  for (; l < o; ++l)
    a[l] = n[l];
  return new St(a, this._parents);
}
function rg() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function og(e) {
  e || (e = ig);
  function t(p, f) {
    return p && f ? e(p.__data__, f.__data__) : !p - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), c, d = 0; d < a; ++d)
      (c = s[d]) && (l[d] = c);
    l.sort(t);
  }
  return new St(o, this._parents).order();
}
function ig(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function sg() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function ag() {
  return Array.from(this);
}
function lg() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function ug() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function cg() {
  return !this.node();
}
function dg(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function fg(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function pg(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function gg(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function hg(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function vg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function mg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function yg(e, t) {
  var n = ai(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? pg : fg : typeof t == "function" ? n.local ? mg : vg : n.local ? hg : gg)(n, t));
}
function vu(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function wg(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function bg(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function xg(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function $g(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? wg : typeof t == "function" ? xg : bg)(e, t, n ?? "")) : hr(this.node(), e);
}
function hr(e, t) {
  return e.style.getPropertyValue(t) || vu(e).getComputedStyle(e, null).getPropertyValue(t);
}
function kg(e) {
  return function() {
    delete this[e];
  };
}
function Cg(e, t) {
  return function() {
    this[e] = t;
  };
}
function _g(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Sg(e, t) {
  return arguments.length > 1 ? this.each((t == null ? kg : typeof t == "function" ? _g : Cg)(e, t)) : this.node()[e];
}
function mu(e) {
  return e.trim().split(/^|\s+/);
}
function Vs(e) {
  return e.classList || new yu(e);
}
function yu(e) {
  this._node = e, this._names = mu(e.getAttribute("class") || "");
}
yu.prototype = {
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
function wu(e, t) {
  for (var n = Vs(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function bu(e, t) {
  for (var n = Vs(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Eg(e) {
  return function() {
    wu(this, e);
  };
}
function Pg(e) {
  return function() {
    bu(this, e);
  };
}
function Ng(e, t) {
  return function() {
    (t.apply(this, arguments) ? wu : bu)(this, e);
  };
}
function Lg(e, t) {
  var n = mu(e + "");
  if (arguments.length < 2) {
    for (var r = Vs(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Ng : t ? Eg : Pg)(n, t));
}
function Mg() {
  this.textContent = "";
}
function Vg(e) {
  return function() {
    this.textContent = e;
  };
}
function Dg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Tg(e) {
  return arguments.length ? this.each(e == null ? Mg : (typeof e == "function" ? Dg : Vg)(e)) : this.node().textContent;
}
function Hg() {
  this.innerHTML = "";
}
function Og(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Ag(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function zg(e) {
  return arguments.length ? this.each(e == null ? Hg : (typeof e == "function" ? Ag : Og)(e)) : this.node().innerHTML;
}
function Ig() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Bg() {
  return this.each(Ig);
}
function qg() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Rg() {
  return this.each(qg);
}
function Zg(e) {
  var t = typeof e == "function" ? e : du(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Kg() {
  return null;
}
function Yg(e, t) {
  var n = typeof e == "function" ? e : du(e), r = t == null ? Kg : typeof t == "function" ? t : Ms(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function jg() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Fg() {
  return this.each(jg);
}
function Wg() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Xg() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Ug(e) {
  return this.select(e ? Xg : Wg);
}
function Gg(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Jg(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Qg(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function e1(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function t1(e, t, n) {
  return function() {
    var r = this.__on, o, i = Jg(t);
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
function n1(e, t, n) {
  var r = Qg(e + ""), o, i = r.length, s;
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
  for (a = t ? t1 : e1, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function xu(e, t, n) {
  var r = vu(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function r1(e, t) {
  return function() {
    return xu(this, e, t);
  };
}
function o1(e, t) {
  return function() {
    return xu(this, e, t.apply(this, arguments));
  };
}
function i1(e, t) {
  return this.each((typeof t == "function" ? o1 : r1)(e, t));
}
function* s1() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var $u = [null];
function St(e, t) {
  this._groups = e, this._parents = t;
}
function oo() {
  return new St([[document.documentElement]], $u);
}
function a1() {
  return this;
}
St.prototype = oo.prototype = {
  constructor: St,
  select: Dp,
  selectAll: Ap,
  selectChild: qp,
  selectChildren: Yp,
  filter: jp,
  data: Jp,
  enter: Fp,
  exit: eg,
  join: tg,
  merge: ng,
  selection: a1,
  order: rg,
  sort: og,
  call: sg,
  nodes: ag,
  node: lg,
  size: ug,
  empty: cg,
  each: dg,
  attr: yg,
  style: $g,
  property: Sg,
  classed: Lg,
  text: Tg,
  html: zg,
  raise: Bg,
  lower: Rg,
  append: Zg,
  insert: Yg,
  remove: Fg,
  clone: Ug,
  datum: Gg,
  on: n1,
  dispatch: i1,
  [Symbol.iterator]: s1
};
function Lt(e) {
  return typeof e == "string" ? new St([[document.querySelector(e)]], [document.documentElement]) : new St([[e]], $u);
}
function l1(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function Dt(e, t) {
  if (e = l1(e), t === void 0 && (t = e.currentTarget), t) {
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
const u1 = { passive: !1 }, qr = { capture: !0, passive: !1 };
function $i(e) {
  e.stopImmediatePropagation();
}
function ar(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function ku(e) {
  var t = e.document.documentElement, n = Lt(e).on("dragstart.drag", ar, qr);
  "onselectstart" in t ? n.on("selectstart.drag", ar, qr) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Cu(e, t) {
  var n = e.document.documentElement, r = Lt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", ar, qr), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const mo = (e) => () => e;
function Yi(e, {
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
Yi.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function c1(e) {
  return !e.ctrlKey && !e.button;
}
function d1() {
  return this.parentNode;
}
function f1(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function p1() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function g1() {
  var e = c1, t = d1, n = f1, r = p1, o = {}, i = si("start", "drag", "end"), s = 0, a, l, c, d, p = 0;
  function f($) {
    $.on("mousedown.drag", g).filter(r).on("touchstart.drag", C).on("touchmove.drag", w, u1).on("touchend.drag touchcancel.drag", N).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g($, k) {
    if (!(d || !e.call(this, $, k))) {
      var M = x(this, t.call(this, $, k), $, k, "mouse");
      M && (Lt($.view).on("mousemove.drag", h, qr).on("mouseup.drag", y, qr), ku($.view), $i($), c = !1, a = $.clientX, l = $.clientY, M("start", $));
    }
  }
  function h($) {
    if (ar($), !c) {
      var k = $.clientX - a, M = $.clientY - l;
      c = k * k + M * M > p;
    }
    o.mouse("drag", $);
  }
  function y($) {
    Lt($.view).on("mousemove.drag mouseup.drag", null), Cu($.view, c), ar($), o.mouse("end", $);
  }
  function C($, k) {
    if (e.call(this, $, k)) {
      var M = $.changedTouches, A = t.call(this, $, k), q = M.length, W, K;
      for (W = 0; W < q; ++W)
        (K = x(this, A, $, k, M[W].identifier, M[W])) && ($i($), K("start", $, M[W]));
    }
  }
  function w($) {
    var k = $.changedTouches, M = k.length, A, q;
    for (A = 0; A < M; ++A)
      (q = o[k[A].identifier]) && (ar($), q("drag", $, k[A]));
  }
  function N($) {
    var k = $.changedTouches, M = k.length, A, q;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), A = 0; A < M; ++A)
      (q = o[k[A].identifier]) && ($i($), q("end", $, k[A]));
  }
  function x($, k, M, A, q, W) {
    var K = i.copy(), L = Dt(W || M, k), S, T, b;
    if ((b = n.call($, new Yi("beforestart", {
      sourceEvent: M,
      target: f,
      identifier: q,
      active: s,
      x: L[0],
      y: L[1],
      dx: 0,
      dy: 0,
      dispatch: K
    }), A)) != null)
      return S = b.x - L[0] || 0, T = b.y - L[1] || 0, function P(E, H, B) {
        var D = L, R;
        switch (E) {
          case "start":
            o[q] = P, R = s++;
            break;
          case "end":
            delete o[q], --s;
          // falls through
          case "drag":
            L = Dt(B || H, k), R = s;
            break;
        }
        K.call(
          E,
          $,
          new Yi(E, {
            sourceEvent: H,
            subject: b,
            target: f,
            identifier: q,
            active: R,
            x: L[0] + S,
            y: L[1] + T,
            dx: L[0] - D[0],
            dy: L[1] - D[1],
            dispatch: K
          }),
          A
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
function Ds(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function _u(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function io() {
}
var Rr = 0.7, Io = 1 / Rr, lr = "\\s*([+-]?\\d+)\\s*", Zr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Wt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", h1 = /^#([0-9a-f]{3,8})$/, v1 = new RegExp(`^rgb\\(${lr},${lr},${lr}\\)$`), m1 = new RegExp(`^rgb\\(${Wt},${Wt},${Wt}\\)$`), y1 = new RegExp(`^rgba\\(${lr},${lr},${lr},${Zr}\\)$`), w1 = new RegExp(`^rgba\\(${Wt},${Wt},${Wt},${Zr}\\)$`), b1 = new RegExp(`^hsl\\(${Zr},${Wt},${Wt}\\)$`), x1 = new RegExp(`^hsla\\(${Zr},${Wt},${Wt},${Zr}\\)$`), ka = {
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
Ds(io, Wn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ca,
  // Deprecated! Use color.formatHex.
  formatHex: Ca,
  formatHex8: $1,
  formatHsl: k1,
  formatRgb: _a,
  toString: _a
});
function Ca() {
  return this.rgb().formatHex();
}
function $1() {
  return this.rgb().formatHex8();
}
function k1() {
  return Su(this).formatHsl();
}
function _a() {
  return this.rgb().formatRgb();
}
function Wn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = h1.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Sa(t) : n === 3 ? new gt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? yo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? yo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = v1.exec(e)) ? new gt(t[1], t[2], t[3], 1) : (t = m1.exec(e)) ? new gt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = y1.exec(e)) ? yo(t[1], t[2], t[3], t[4]) : (t = w1.exec(e)) ? yo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = b1.exec(e)) ? Na(t[1], t[2] / 100, t[3] / 100, 1) : (t = x1.exec(e)) ? Na(t[1], t[2] / 100, t[3] / 100, t[4]) : ka.hasOwnProperty(e) ? Sa(ka[e]) : e === "transparent" ? new gt(NaN, NaN, NaN, 0) : null;
}
function Sa(e) {
  return new gt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function yo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new gt(e, t, n, r);
}
function C1(e) {
  return e instanceof io || (e = Wn(e)), e ? (e = e.rgb(), new gt(e.r, e.g, e.b, e.opacity)) : new gt();
}
function ji(e, t, n, r) {
  return arguments.length === 1 ? C1(e) : new gt(e, t, n, r ?? 1);
}
function gt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Ds(gt, ji, _u(io, {
  brighter(e) {
    return e = e == null ? Io : Math.pow(Io, e), new gt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Rr : Math.pow(Rr, e), new gt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new gt(jn(this.r), jn(this.g), jn(this.b), Bo(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ea,
  // Deprecated! Use color.formatHex.
  formatHex: Ea,
  formatHex8: _1,
  formatRgb: Pa,
  toString: Pa
}));
function Ea() {
  return `#${qn(this.r)}${qn(this.g)}${qn(this.b)}`;
}
function _1() {
  return `#${qn(this.r)}${qn(this.g)}${qn(this.b)}${qn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Pa() {
  const e = Bo(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${jn(this.r)}, ${jn(this.g)}, ${jn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Bo(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function jn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function qn(e) {
  return e = jn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Na(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Ht(e, t, n, r);
}
function Su(e) {
  if (e instanceof Ht) return new Ht(e.h, e.s, e.l, e.opacity);
  if (e instanceof io || (e = Wn(e)), !e) return new Ht();
  if (e instanceof Ht) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new Ht(s, a, l, e.opacity);
}
function S1(e, t, n, r) {
  return arguments.length === 1 ? Su(e) : new Ht(e, t, n, r ?? 1);
}
function Ht(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Ds(Ht, S1, _u(io, {
  brighter(e) {
    return e = e == null ? Io : Math.pow(Io, e), new Ht(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Rr : Math.pow(Rr, e), new Ht(this.h, this.s, this.l * e, this.opacity);
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
    return new Ht(La(this.h), wo(this.s), wo(this.l), Bo(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Bo(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${La(this.h)}, ${wo(this.s) * 100}%, ${wo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function La(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function wo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ki(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Ts = (e) => () => e;
function E1(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function P1(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function N1(e) {
  return (e = +e) == 1 ? Eu : function(t, n) {
    return n - t ? P1(t, n, e) : Ts(isNaN(t) ? n : t);
  };
}
function Eu(e, t) {
  var n = t - e;
  return n ? E1(e, n) : Ts(isNaN(e) ? t : e);
}
const qo = function e(t) {
  var n = N1(t);
  function r(o, i) {
    var s = n((o = ji(o)).r, (i = ji(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), c = Eu(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = l(d), o.opacity = c(d), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function L1(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function M1(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function V1(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = Tr(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function D1(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function Zt(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function T1(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Tr(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var Fi = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ci = new RegExp(Fi.source, "g");
function H1(e) {
  return function() {
    return e;
  };
}
function O1(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Pu(e, t) {
  var n = Fi.lastIndex = Ci.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = Fi.exec(e)) && (o = Ci.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: Zt(r, o) })), n = Ci.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? O1(l[0].x) : H1(t) : (t = l.length, function(c) {
    for (var d = 0, p; d < t; ++d) a[(p = l[d]).i] = p.x(c);
    return a.join("");
  });
}
function Tr(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? Ts(t) : (n === "number" ? Zt : n === "string" ? (r = Wn(t)) ? (t = r, qo) : Pu : t instanceof Wn ? qo : t instanceof Date ? D1 : M1(t) ? L1 : Array.isArray(t) ? V1 : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? T1 : Zt)(e, t);
}
var Ma = 180 / Math.PI, Nu = {
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
    rotate: Math.atan2(t, e) * Ma,
    skewX: Math.atan(l) * Ma,
    scaleX: s,
    scaleY: a
  };
}
var bo;
function A1(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Nu : Lu(t.a, t.b, t.c, t.d, t.e, t.f);
}
function z1(e) {
  return e == null || (bo || (bo = document.createElementNS("http://www.w3.org/2000/svg", "g")), bo.setAttribute("transform", e), !(e = bo.transform.baseVal.consolidate())) ? Nu : (e = e.matrix, Lu(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Mu(e, t, n, r) {
  function o(c) {
    return c.length ? c.pop() + " " : "";
  }
  function i(c, d, p, f, g, h) {
    if (c !== p || d !== f) {
      var y = g.push("translate(", null, t, null, n);
      h.push({ i: y - 4, x: Zt(c, p) }, { i: y - 2, x: Zt(d, f) });
    } else (p || f) && g.push("translate(" + p + t + f + n);
  }
  function s(c, d, p, f) {
    c !== d ? (c - d > 180 ? d += 360 : d - c > 180 && (c += 360), f.push({ i: p.push(o(p) + "rotate(", null, r) - 2, x: Zt(c, d) })) : d && p.push(o(p) + "rotate(" + d + r);
  }
  function a(c, d, p, f) {
    c !== d ? f.push({ i: p.push(o(p) + "skewX(", null, r) - 2, x: Zt(c, d) }) : d && p.push(o(p) + "skewX(" + d + r);
  }
  function l(c, d, p, f, g, h) {
    if (c !== p || d !== f) {
      var y = g.push(o(g) + "scale(", null, ",", null, ")");
      h.push({ i: y - 4, x: Zt(c, p) }, { i: y - 2, x: Zt(d, f) });
    } else (p !== 1 || f !== 1) && g.push(o(g) + "scale(" + p + "," + f + ")");
  }
  return function(c, d) {
    var p = [], f = [];
    return c = e(c), d = e(d), i(c.translateX, c.translateY, d.translateX, d.translateY, p, f), s(c.rotate, d.rotate, p, f), a(c.skewX, d.skewX, p, f), l(c.scaleX, c.scaleY, d.scaleX, d.scaleY, p, f), c = d = null, function(g) {
      for (var h = -1, y = f.length, C; ++h < y; ) p[(C = f[h]).i] = C.x(g);
      return p.join("");
    };
  };
}
var I1 = Mu(A1, "px, ", "px)", "deg)"), B1 = Mu(z1, ", ", ")", ")"), q1 = 1e-12;
function Va(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function R1(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Z1(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Po = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], c = i[2], d = s[0], p = s[1], f = s[2], g = d - a, h = p - l, y = g * g + h * h, C, w;
    if (y < q1)
      w = Math.log(f / c) / t, C = function(A) {
        return [
          a + A * g,
          l + A * h,
          c * Math.exp(t * A * w)
        ];
      };
    else {
      var N = Math.sqrt(y), x = (f * f - c * c + r * y) / (2 * c * n * N), $ = (f * f - c * c - r * y) / (2 * f * n * N), k = Math.log(Math.sqrt(x * x + 1) - x), M = Math.log(Math.sqrt($ * $ + 1) - $);
      w = (M - k) / t, C = function(A) {
        var q = A * w, W = Va(k), K = c / (n * N) * (W * Z1(t * q + k) - R1(k));
        return [
          a + K * g,
          l + K * h,
          c * W / Va(t * q + k)
        ];
      };
    }
    return C.duration = w * 1e3 * t / Math.SQRT2, C;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
}(Math.SQRT2, 2, 4);
var vr = 0, Lr = 0, Er = 0, Vu = 1e3, Ro, Mr, Zo = 0, Xn = 0, li = 0, Kr = typeof performance == "object" && performance.now ? performance : Date, Du = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Hs() {
  return Xn || (Du(K1), Xn = Kr.now() + li);
}
function K1() {
  Xn = 0;
}
function Ko() {
  this._call = this._time = this._next = null;
}
Ko.prototype = Tu.prototype = {
  constructor: Ko,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Hs() : +n) + (t == null ? 0 : +t), !this._next && Mr !== this && (Mr ? Mr._next = this : Ro = this, Mr = this), this._call = e, this._time = n, Wi();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Wi());
  }
};
function Tu(e, t, n) {
  var r = new Ko();
  return r.restart(e, t, n), r;
}
function Y1() {
  Hs(), ++vr;
  for (var e = Ro, t; e; )
    (t = Xn - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --vr;
}
function Da() {
  Xn = (Zo = Kr.now()) + li, vr = Lr = 0;
  try {
    Y1();
  } finally {
    vr = 0, F1(), Xn = 0;
  }
}
function j1() {
  var e = Kr.now(), t = e - Zo;
  t > Vu && (li -= t, Zo = e);
}
function F1() {
  for (var e, t = Ro, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Ro = n);
  Mr = e, Wi(r);
}
function Wi(e) {
  if (!vr) {
    Lr && (Lr = clearTimeout(Lr));
    var t = e - Xn;
    t > 24 ? (e < 1 / 0 && (Lr = setTimeout(Da, e - Kr.now() - li)), Er && (Er = clearInterval(Er))) : (Er || (Zo = Kr.now(), Er = setInterval(j1, Vu)), vr = 1, Du(Da));
  }
}
function Ta(e, t, n) {
  var r = new Ko();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var W1 = si("start", "end", "cancel", "interrupt"), X1 = [], Hu = 0, Ha = 1, Xi = 2, No = 3, Oa = 4, Ui = 5, Lo = 6;
function ui(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  U1(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: W1,
    tween: X1,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Hu
  });
}
function Os(e, t) {
  var n = zt(e, t);
  if (n.state > Hu) throw new Error("too late; already scheduled");
  return n;
}
function nn(e, t) {
  var n = zt(e, t);
  if (n.state > No) throw new Error("too late; already running");
  return n;
}
function zt(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function U1(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Tu(i, 0, n.time);
  function i(c) {
    n.state = Ha, n.timer.restart(s, n.delay, n.time), n.delay <= c && s(c - n.delay);
  }
  function s(c) {
    var d, p, f, g;
    if (n.state !== Ha) return l();
    for (d in r)
      if (g = r[d], g.name === n.name) {
        if (g.state === No) return Ta(s);
        g.state === Oa ? (g.state = Lo, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[d]) : +d < t && (g.state = Lo, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[d]);
      }
    if (Ta(function() {
      n.state === No && (n.state = Oa, n.timer.restart(a, n.delay, n.time), a(c));
    }), n.state = Xi, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Xi) {
      for (n.state = No, o = new Array(f = n.tween.length), d = 0, p = -1; d < f; ++d)
        (g = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++p] = g);
      o.length = p + 1;
    }
  }
  function a(c) {
    for (var d = c < n.duration ? n.ease.call(null, c / n.duration) : (n.timer.restart(l), n.state = Ui, 1), p = -1, f = o.length; ++p < f; )
      o[p].call(e, d);
    n.state === Ui && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = Lo, n.timer.stop(), delete r[t];
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
      o = r.state > Xi && r.state < Ui, r.state = Lo, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function G1(e) {
  return this.each(function() {
    Mo(this, e);
  });
}
function J1(e, t) {
  var n, r;
  return function() {
    var o = nn(this, e), i = o.tween;
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
function Q1(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = nn(this, e), s = i.tween;
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
function eh(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = zt(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? J1 : Q1)(n, e, t));
}
function As(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = nn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return zt(o, r).value[t];
  };
}
function Ou(e, t) {
  var n;
  return (typeof t == "number" ? Zt : t instanceof Wn ? qo : (n = Wn(t)) ? (t = n, qo) : Pu)(e, t);
}
function th(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function nh(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function rh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function oh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function ih(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function sh(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function ah(e, t) {
  var n = ai(e), r = n === "transform" ? B1 : Ou;
  return this.attrTween(e, typeof t == "function" ? (n.local ? sh : ih)(n, r, As(this, "attr." + e, t)) : t == null ? (n.local ? nh : th)(n) : (n.local ? oh : rh)(n, r, t));
}
function lh(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function uh(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function ch(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && uh(e, i)), n;
  }
  return o._value = t, o;
}
function dh(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && lh(e, i)), n;
  }
  return o._value = t, o;
}
function fh(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = ai(e);
  return this.tween(n, (r.local ? ch : dh)(r, t));
}
function ph(e, t) {
  return function() {
    Os(this, e).delay = +t.apply(this, arguments);
  };
}
function gh(e, t) {
  return t = +t, function() {
    Os(this, e).delay = t;
  };
}
function hh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? ph : gh)(t, e)) : zt(this.node(), t).delay;
}
function vh(e, t) {
  return function() {
    nn(this, e).duration = +t.apply(this, arguments);
  };
}
function mh(e, t) {
  return t = +t, function() {
    nn(this, e).duration = t;
  };
}
function yh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? vh : mh)(t, e)) : zt(this.node(), t).duration;
}
function wh(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    nn(this, e).ease = t;
  };
}
function bh(e) {
  var t = this._id;
  return arguments.length ? this.each(wh(t, e)) : zt(this.node(), t).ease;
}
function xh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    nn(this, e).ease = n;
  };
}
function $h(e) {
  if (typeof e != "function") throw new Error();
  return this.each(xh(this._id, e));
}
function kh(e) {
  typeof e != "function" && (e = pu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, c = 0; c < s; ++c)
      (l = i[c]) && e.call(l, l.__data__, c, i) && a.push(l);
  return new vn(r, this._parents, this._name, this._id);
}
function Ch(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], c = n[a], d = l.length, p = s[a] = new Array(d), f, g = 0; g < d; ++g)
      (f = l[g] || c[g]) && (p[g] = f);
  for (; a < r; ++a)
    s[a] = t[a];
  return new vn(s, this._parents, this._name, this._id);
}
function _h(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function Sh(e, t, n) {
  var r, o, i = _h(t) ? Os : nn;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function Eh(e, t) {
  var n = this._id;
  return arguments.length < 2 ? zt(this.node(), n).on.on(e) : this.each(Sh(n, e, t));
}
function Ph(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Nh() {
  return this.on("end.remove", Ph(this._id));
}
function Lh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Ms(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, c = i[s] = new Array(l), d, p, f = 0; f < l; ++f)
      (d = a[f]) && (p = e.call(d, d.__data__, f, a)) && ("__data__" in d && (p.__data__ = d.__data__), c[f] = p, ui(c[f], t, n, f, c, zt(d, n)));
  return new vn(i, this._parents, t, n);
}
function Mh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = fu(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], c = l.length, d, p = 0; p < c; ++p)
      if (d = l[p]) {
        for (var f = e.call(d, d.__data__, p, l), g, h = zt(d, n), y = 0, C = f.length; y < C; ++y)
          (g = f[y]) && ui(g, t, n, y, f, h);
        i.push(f), s.push(d);
      }
  return new vn(i, s, t, n);
}
var Vh = oo.prototype.constructor;
function Dh() {
  return new Vh(this._groups, this._parents);
}
function Th(e, t) {
  var n, r, o;
  return function() {
    var i = hr(this, e), s = (this.style.removeProperty(e), hr(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function Au(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Hh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = hr(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Oh(e, t, n) {
  var r, o, i;
  return function() {
    var s = hr(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), hr(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function Ah(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = nn(this, e), c = l.on, d = l.value[i] == null ? a || (a = Au(t)) : void 0;
    (c !== n || o !== d) && (r = (n = c).copy()).on(s, o = d), l.on = r;
  };
}
function zh(e, t, n) {
  var r = (e += "") == "transform" ? I1 : Ou;
  return t == null ? this.styleTween(e, Th(e, r)).on("end.style." + e, Au(e)) : typeof t == "function" ? this.styleTween(e, Oh(e, r, As(this, "style." + e, t))).each(Ah(this._id, e)) : this.styleTween(e, Hh(e, r, t), n).on("end.style." + e, null);
}
function Ih(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function Bh(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && Ih(e, s, n)), r;
  }
  return i._value = t, i;
}
function qh(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, Bh(e, t, n ?? ""));
}
function Rh(e) {
  return function() {
    this.textContent = e;
  };
}
function Zh(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function Kh(e) {
  return this.tween("text", typeof e == "function" ? Zh(As(this, "text", e)) : Rh(e == null ? "" : e + ""));
}
function Yh(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function jh(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && Yh(o)), t;
  }
  return r._value = e, r;
}
function Fh(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, jh(e));
}
function Wh() {
  for (var e = this._name, t = this._id, n = zu(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, c = 0; c < a; ++c)
      if (l = s[c]) {
        var d = zt(l, t);
        ui(l, e, n, c, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new vn(r, this._parents, e, n);
}
function Xh() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var c = nn(this, r), d = c.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), c.on = t;
    }), o === 0 && i();
  });
}
var Uh = 0;
function vn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function zu() {
  return ++Uh;
}
var rn = oo.prototype;
vn.prototype = {
  constructor: vn,
  select: Lh,
  selectAll: Mh,
  selectChild: rn.selectChild,
  selectChildren: rn.selectChildren,
  filter: kh,
  merge: Ch,
  selection: Dh,
  transition: Wh,
  call: rn.call,
  nodes: rn.nodes,
  node: rn.node,
  size: rn.size,
  empty: rn.empty,
  each: rn.each,
  on: Eh,
  attr: ah,
  attrTween: fh,
  style: zh,
  styleTween: qh,
  text: Kh,
  textTween: Fh,
  remove: Nh,
  tween: eh,
  delay: hh,
  duration: yh,
  ease: bh,
  easeVarying: $h,
  end: Xh,
  [Symbol.iterator]: rn[Symbol.iterator]
};
function Gh(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Jh = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Gh
};
function Qh(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function ev(e) {
  var t, n;
  e instanceof vn ? (t = e._id, e = e._name) : (t = zu(), (n = Jh).time = Hs(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, c = 0; c < a; ++c)
      (l = s[c]) && ui(l, e, t, c, s, n || Qh(l, t));
  return new vn(r, this._parents, e, t);
}
oo.prototype.interrupt = G1;
oo.prototype.transition = ev;
const xo = (e) => () => e;
function tv(e, {
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
Iu.prototype = sn.prototype;
function Iu(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return ci;
  return e.__zoom;
}
function _i(e) {
  e.stopImmediatePropagation();
}
function Pr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function nv(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function rv() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Aa() {
  return this.__zoom || ci;
}
function ov(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function iv() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function sv(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function Bu() {
  var e = nv, t = rv, n = sv, r = ov, o = iv, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = Po, c = si("start", "zoom", "end"), d, p, f, g = 500, h = 150, y = 0, C = 10;
  function w(b) {
    b.property("__zoom", Aa).on("wheel.zoom", q, { passive: !1 }).on("mousedown.zoom", W).on("dblclick.zoom", K).filter(o).on("touchstart.zoom", L).on("touchmove.zoom", S).on("touchend.zoom touchcancel.zoom", T).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  w.transform = function(b, P, E, H) {
    var B = b.selection ? b.selection() : b;
    B.property("__zoom", Aa), b !== B ? k(b, P, E, H) : B.interrupt().each(function() {
      M(this, arguments).event(H).start().zoom(null, typeof P == "function" ? P.apply(this, arguments) : P).end();
    });
  }, w.scaleBy = function(b, P, E, H) {
    w.scaleTo(b, function() {
      var B = this.__zoom.k, D = typeof P == "function" ? P.apply(this, arguments) : P;
      return B * D;
    }, E, H);
  }, w.scaleTo = function(b, P, E, H) {
    w.transform(b, function() {
      var B = t.apply(this, arguments), D = this.__zoom, R = E == null ? $(B) : typeof E == "function" ? E.apply(this, arguments) : E, F = D.invert(R), X = typeof P == "function" ? P.apply(this, arguments) : P;
      return n(x(N(D, X), R, F), B, s);
    }, E, H);
  }, w.translateBy = function(b, P, E, H) {
    w.transform(b, function() {
      return n(this.__zoom.translate(
        typeof P == "function" ? P.apply(this, arguments) : P,
        typeof E == "function" ? E.apply(this, arguments) : E
      ), t.apply(this, arguments), s);
    }, null, H);
  }, w.translateTo = function(b, P, E, H, B) {
    w.transform(b, function() {
      var D = t.apply(this, arguments), R = this.__zoom, F = H == null ? $(D) : typeof H == "function" ? H.apply(this, arguments) : H;
      return n(ci.translate(F[0], F[1]).scale(R.k).translate(
        typeof P == "function" ? -P.apply(this, arguments) : -P,
        typeof E == "function" ? -E.apply(this, arguments) : -E
      ), D, s);
    }, H, B);
  };
  function N(b, P) {
    return P = Math.max(i[0], Math.min(i[1], P)), P === b.k ? b : new sn(P, b.x, b.y);
  }
  function x(b, P, E) {
    var H = P[0] - E[0] * b.k, B = P[1] - E[1] * b.k;
    return H === b.x && B === b.y ? b : new sn(b.k, H, B);
  }
  function $(b) {
    return [(+b[0][0] + +b[1][0]) / 2, (+b[0][1] + +b[1][1]) / 2];
  }
  function k(b, P, E, H) {
    b.on("start.zoom", function() {
      M(this, arguments).event(H).start();
    }).on("interrupt.zoom end.zoom", function() {
      M(this, arguments).event(H).end();
    }).tween("zoom", function() {
      var B = this, D = arguments, R = M(B, D).event(H), F = t.apply(B, D), X = E == null ? $(F) : typeof E == "function" ? E.apply(B, D) : E, Q = Math.max(F[1][0] - F[0][0], F[1][1] - F[0][1]), j = B.__zoom, ce = typeof P == "function" ? P.apply(B, D) : P, te = l(j.invert(X).concat(Q / j.k), ce.invert(X).concat(Q / ce.k));
      return function(fe) {
        if (fe === 1) fe = ce;
        else {
          var U = te(fe), xe = Q / U[2];
          fe = new sn(xe, X[0] - U[0] * xe, X[1] - U[1] * xe);
        }
        R.zoom(null, fe);
      };
    });
  }
  function M(b, P, E) {
    return !E && b.__zooming || new A(b, P);
  }
  function A(b, P) {
    this.that = b, this.args = P, this.active = 0, this.sourceEvent = null, this.extent = t.apply(b, P), this.taps = 0;
  }
  A.prototype = {
    event: function(b) {
      return b && (this.sourceEvent = b), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(b, P) {
      return this.mouse && b !== "mouse" && (this.mouse[1] = P.invert(this.mouse[0])), this.touch0 && b !== "touch" && (this.touch0[1] = P.invert(this.touch0[0])), this.touch1 && b !== "touch" && (this.touch1[1] = P.invert(this.touch1[0])), this.that.__zoom = P, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(b) {
      var P = Lt(this.that).datum();
      c.call(
        b,
        this.that,
        new tv(b, {
          sourceEvent: this.sourceEvent,
          target: w,
          transform: this.that.__zoom,
          dispatch: c
        }),
        P
      );
    }
  };
  function q(b, ...P) {
    if (!e.apply(this, arguments)) return;
    var E = M(this, P).event(b), H = this.__zoom, B = Math.max(i[0], Math.min(i[1], H.k * Math.pow(2, r.apply(this, arguments)))), D = Dt(b);
    if (E.wheel)
      (E.mouse[0][0] !== D[0] || E.mouse[0][1] !== D[1]) && (E.mouse[1] = H.invert(E.mouse[0] = D)), clearTimeout(E.wheel);
    else {
      if (H.k === B) return;
      E.mouse = [D, H.invert(D)], Mo(this), E.start();
    }
    Pr(b), E.wheel = setTimeout(R, h), E.zoom("mouse", n(x(N(H, B), E.mouse[0], E.mouse[1]), E.extent, s));
    function R() {
      E.wheel = null, E.end();
    }
  }
  function W(b, ...P) {
    if (f || !e.apply(this, arguments)) return;
    var E = b.currentTarget, H = M(this, P, !0).event(b), B = Lt(b.view).on("mousemove.zoom", X, !0).on("mouseup.zoom", Q, !0), D = Dt(b, E), R = b.clientX, F = b.clientY;
    ku(b.view), _i(b), H.mouse = [D, this.__zoom.invert(D)], Mo(this), H.start();
    function X(j) {
      if (Pr(j), !H.moved) {
        var ce = j.clientX - R, te = j.clientY - F;
        H.moved = ce * ce + te * te > y;
      }
      H.event(j).zoom("mouse", n(x(H.that.__zoom, H.mouse[0] = Dt(j, E), H.mouse[1]), H.extent, s));
    }
    function Q(j) {
      B.on("mousemove.zoom mouseup.zoom", null), Cu(j.view, H.moved), Pr(j), H.event(j).end();
    }
  }
  function K(b, ...P) {
    if (e.apply(this, arguments)) {
      var E = this.__zoom, H = Dt(b.changedTouches ? b.changedTouches[0] : b, this), B = E.invert(H), D = E.k * (b.shiftKey ? 0.5 : 2), R = n(x(N(E, D), H, B), t.apply(this, P), s);
      Pr(b), a > 0 ? Lt(this).transition().duration(a).call(k, R, H, b) : Lt(this).call(w.transform, R, H, b);
    }
  }
  function L(b, ...P) {
    if (e.apply(this, arguments)) {
      var E = b.touches, H = E.length, B = M(this, P, b.changedTouches.length === H).event(b), D, R, F, X;
      for (_i(b), R = 0; R < H; ++R)
        F = E[R], X = Dt(F, this), X = [X, this.__zoom.invert(X), F.identifier], B.touch0 ? !B.touch1 && B.touch0[2] !== X[2] && (B.touch1 = X, B.taps = 0) : (B.touch0 = X, D = !0, B.taps = 1 + !!d);
      d && (d = clearTimeout(d)), D && (B.taps < 2 && (p = X[0], d = setTimeout(function() {
        d = null;
      }, g)), Mo(this), B.start());
    }
  }
  function S(b, ...P) {
    if (this.__zooming) {
      var E = M(this, P).event(b), H = b.changedTouches, B = H.length, D, R, F, X;
      for (Pr(b), D = 0; D < B; ++D)
        R = H[D], F = Dt(R, this), E.touch0 && E.touch0[2] === R.identifier ? E.touch0[0] = F : E.touch1 && E.touch1[2] === R.identifier && (E.touch1[0] = F);
      if (R = E.that.__zoom, E.touch1) {
        var Q = E.touch0[0], j = E.touch0[1], ce = E.touch1[0], te = E.touch1[1], fe = (fe = ce[0] - Q[0]) * fe + (fe = ce[1] - Q[1]) * fe, U = (U = te[0] - j[0]) * U + (U = te[1] - j[1]) * U;
        R = N(R, Math.sqrt(fe / U)), F = [(Q[0] + ce[0]) / 2, (Q[1] + ce[1]) / 2], X = [(j[0] + te[0]) / 2, (j[1] + te[1]) / 2];
      } else if (E.touch0) F = E.touch0[0], X = E.touch0[1];
      else return;
      E.zoom("touch", n(x(R, F, X), E.extent, s));
    }
  }
  function T(b, ...P) {
    if (this.__zooming) {
      var E = M(this, P).event(b), H = b.changedTouches, B = H.length, D, R;
      for (_i(b), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, g), D = 0; D < B; ++D)
        R = H[D], E.touch0 && E.touch0[2] === R.identifier ? delete E.touch0 : E.touch1 && E.touch1[2] === R.identifier && delete E.touch1;
      if (E.touch1 && !E.touch0 && (E.touch0 = E.touch1, delete E.touch1), E.touch0) E.touch0[1] = this.__zoom.invert(E.touch0[0]);
      else if (E.end(), E.taps === 2 && (R = Dt(R, this), Math.hypot(p[0] - R[0], p[1] - R[1]) < C)) {
        var F = Lt(this).on("dblclick.zoom");
        F && F.apply(this, arguments);
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
    var b = c.on.apply(c, arguments);
    return b === c ? w : b;
  }, w.clickDistance = function(b) {
    return arguments.length ? (y = (b = +b) * b, w) : Math.sqrt(y);
  }, w.tapDistance = function(b) {
    return arguments.length ? (C = +b, w) : C;
  }, w;
}
const Un = {
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
], qu = ["Enter", " ", "Escape"], av = {
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
var Xt;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(Xt || (Xt = {}));
var Yo;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(Yo || (Yo = {}));
const Ji = {
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
var Yr;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(Yr || (Yr = {}));
var me;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(me || (me = {}));
const za = {
  [me.Left]: me.Right,
  [me.Right]: me.Left,
  [me.Top]: me.Bottom,
  [me.Bottom]: me.Top
};
function lv(e, t) {
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
function Ia(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t?.has(i) || r.push(o);
  }), r.length && n(r);
}
function uv(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const Ru = (e) => "id" in e && "source" in e && "target" in e, cv = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), zs = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), so = (e, t = [0, 0]) => {
  const { width: n, height: r } = An(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, dv = (e, t = { nodeOrigin: [0, 0] }) => {
  if (process.env.NODE_ENV === "development" && !t.nodeLookup && console.warn("Please use `getNodesBounds` from `useReactFlow`/`useSvelteFlow` hook to ensure correct values for sub flows. If not possible, you have to provide a nodeLookup to support sub flows."), e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : zs(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? jo(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return di(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return fi(n);
}, ao = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = jo(r);
      n = di(n, o);
    }
  }), fi(n);
}, Is = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...lo(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const c of e.values()) {
    const { measured: d, selectable: p = !0, hidden: f = !1 } = c;
    if (s && !p || f)
      continue;
    const g = d.width ?? c.width ?? c.initialWidth ?? null, h = d.height ?? c.height ?? c.initialHeight ?? null, y = jr(a, wr(c)), C = (g ?? 0) * (h ?? 0), w = i && y > 0;
    (!c.internals.handleBounds || w || y >= C || c.dragging) && l.push(c);
  }
  return l;
}, fv = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function pv(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t?.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function gv({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const a = pv(e, s), l = ao(a), c = Bs(l, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(c, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function Zu({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: c } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let p = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", Un.error005());
    else {
      const g = a.measured.width, h = a.measured.height;
      g && h && (p = [
        [l, c],
        [l + g, c + h]
      ]);
    }
  else a && br(s.extent) && (p = [
    [s.extent[0][0] + l, s.extent[0][1] + c],
    [s.extent[1][0] + l, s.extent[1][1] + c]
  ]);
  const f = br(p) ? Gn(t, p, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", Un.error015()), {
    position: {
      x: f.x - l + (s.measured.width ?? 0) * d[0],
      y: f.y - c + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: f
  };
}
async function hv({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((p) => p.id)), s = [];
  for (const p of n) {
    if (p.deletable === !1)
      continue;
    const f = i.has(p.id), g = !f && p.parentId && s.find((h) => h.id === p.parentId);
    (f || g) && s.push(p);
  }
  const a = new Set(t.map((p) => p.id)), l = r.filter((p) => p.deletable !== !1), c = fv(s, l);
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
const yr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), Gn = (e = { x: 0, y: 0 }, t, n) => ({
  x: yr(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: yr(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function Ku(e, t, n) {
  const { width: r, height: o } = An(n), { x: i, y: s } = n.internals.positionAbsolute;
  return Gn(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const Ba = (e, t, n) => e < t ? yr(Math.abs(e - t), 1, t) / t : e > n ? -yr(Math.abs(e - n), 1, t) / t : 0, Yu = (e, t, n = 15, r = 40) => {
  const o = Ba(e.x, r, t.width - r) * n, i = Ba(e.y, r, t.height - r) * n;
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
}), wr = (e, t = [0, 0]) => {
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
}, ju = (e, t) => fi(di(Qi(e), Qi(t))), jr = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, qa = (e) => an(e.width) && an(e.height) && an(e.x) && an(e.y), an = (e) => !isNaN(e) && isFinite(e), Fu = (e, t) => {
  process.env.NODE_ENV === "development" && console.warn(`[React Flow]: ${t} Help: https://reactflow.dev/error#${e}`);
}, pi = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), lo = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? pi(a, s) : a;
}, Fo = ({ x: e, y: t }, [n, r, o]) => ({
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
function vv(e, t, n) {
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
function mv(e, t, n, r, o, i) {
  const { x: s, y: a } = Fo(e, [t, n, r]), { x: l, y: c } = Fo({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - l, p = i - c;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(p)
  };
}
const Bs = (e, t, n, r, o, i) => {
  const s = vv(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, c = Math.min(a, l), d = yr(c, r, o), p = e.x + e.width / 2, f = e.y + e.height / 2, g = t / 2 - p * d, h = n / 2 - f * d, y = mv(e, g, h, d, t, n), C = {
    left: Math.min(y.left - s.left, 0),
    top: Math.min(y.top - s.top, 0),
    right: Math.min(y.right - s.right, 0),
    bottom: Math.min(y.bottom - s.bottom, 0)
  };
  return {
    x: g - C.left + C.right,
    y: h - C.top + C.bottom,
    zoom: d
  };
}, ir = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function br(e) {
  return e !== void 0 && e !== "parent";
}
function An(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function Wu(e) {
  return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function yv(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function wv(e) {
  return { ...av, ...e || {} };
}
function Si(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = Yt(e), a = lo({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: c } = n ? pi(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: c,
    ...a
  };
}
const Xu = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), Uu = (e) => e?.getRootNode?.() || window?.document, bv = ["INPUT", "SELECT", "TEXTAREA"];
function Gu(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : bv.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const Ju = (e) => "clientX" in e, Yt = (e, t) => {
  const n = Ju(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
  return {
    x: r - (t?.left ?? 0),
    y: o - (t?.top ?? 0)
  };
}, Ra = (e, t, n, r, o) => {
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
function xv({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, c = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - e), p = Math.abs(c - t);
  return [l, c, d, p];
}
function $o(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Za({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case me.Left:
      return [t - $o(t - r, i), n];
    case me.Right:
      return [t + $o(r - t, i), n];
    case me.Top:
      return [t, n - $o(n - o, i)];
    case me.Bottom:
      return [t, n + $o(o - n, i)];
  }
}
function Qu({ sourceX: e, sourceY: t, sourcePosition: n = me.Bottom, targetX: r, targetY: o, targetPosition: i = me.Top, curvature: s = 0.25 }) {
  const [a, l] = Za({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [c, d] = Za({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [p, f, g, h] = xv({
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
function ec({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function $v({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r, elevateOnSelect: o = !1 }) {
  if (r !== void 0)
    return r;
  const i = o && n ? 1e3 : 0, s = Math.max(e.parentId ? e.internals.z : 0, t.parentId ? t.internals.z : 0);
  return i + s;
}
function kv({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = di(jo(e), jo(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return jr(s, fi(i)) > 0;
}
const Cv = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, _v = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), Sv = (e, t) => {
  if (!e.source || !e.target)
    return Fu("006", Un.error006()), t;
  let n;
  return Ru(e) ? n = { ...e } : n = {
    ...e,
    id: Cv(e)
  }, _v(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function tc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = ec({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const Ka = {
  [me.Left]: { x: -1, y: 0 },
  [me.Right]: { x: 1, y: 0 },
  [me.Top]: { x: 0, y: -1 },
  [me.Bottom]: { x: 0, y: 1 }
}, Ev = ({ source: e, sourcePosition: t = me.Bottom, target: n }) => t === me.Left || t === me.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Ya = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function Pv({ source: e, sourcePosition: t = me.Bottom, target: n, targetPosition: r = me.Top, center: o, offset: i, stepPosition: s }) {
  const a = Ka[t], l = Ka[r], c = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, p = Ev({
    source: c,
    sourcePosition: t,
    target: d
  }), f = p.x !== 0 ? "x" : "y", g = p[f];
  let h = [], y, C;
  const w = { x: 0, y: 0 }, N = { x: 0, y: 0 }, [, , x, $] = ec({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[f] * l[f] === -1) {
    f === "x" ? (y = o.x ?? c.x + (d.x - c.x) * s, C = o.y ?? (c.y + d.y) / 2) : (y = o.x ?? (c.x + d.x) / 2, C = o.y ?? c.y + (d.y - c.y) * s);
    const k = [
      { x: y, y: c.y },
      { x: y, y: d.y }
    ], M = [
      { x: c.x, y: C },
      { x: d.x, y: C }
    ];
    a[f] === g ? h = f === "x" ? k : M : h = f === "x" ? M : k;
  } else {
    const k = [{ x: c.x, y: d.y }], M = [{ x: d.x, y: c.y }];
    if (f === "x" ? h = a.x === g ? M : k : h = a.y === g ? k : M, t === r) {
      const L = Math.abs(e[f] - n[f]);
      if (L <= i) {
        const S = Math.min(i - 1, i - L);
        a[f] === g ? w[f] = (c[f] > e[f] ? -1 : 1) * S : N[f] = (d[f] > n[f] ? -1 : 1) * S;
      }
    }
    if (t !== r) {
      const L = f === "x" ? "y" : "x", S = a[f] === l[L], T = c[L] > d[L], b = c[L] < d[L];
      (a[f] === 1 && (!S && T || S && b) || a[f] !== 1 && (!S && b || S && T)) && (h = f === "x" ? k : M);
    }
    const A = { x: c.x + w.x, y: c.y + w.y }, q = { x: d.x + N.x, y: d.y + N.y }, W = Math.max(Math.abs(A.x - h[0].x), Math.abs(q.x - h[0].x)), K = Math.max(Math.abs(A.y - h[0].y), Math.abs(q.y - h[0].y));
    W >= K ? (y = (A.x + q.x) / 2, C = h[0].y) : (y = h[0].x, C = (A.y + q.y) / 2);
  }
  return [[
    e,
    { x: c.x + w.x, y: c.y + w.y },
    ...h,
    { x: d.x + N.x, y: d.y + N.y },
    n
  ], y, C, x, $];
}
function Nv(e, t, n, r) {
  const o = Math.min(Ya(e, t) / 2, Ya(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const c = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * c},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function qs({ sourceX: e, sourceY: t, sourcePosition: n = me.Bottom, targetX: r, targetY: o, targetPosition: i = me.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: c = 20, stepPosition: d = 0.5 }) {
  const [p, f, g, h, y] = Pv({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: c,
    stepPosition: d
  });
  return [p.reduce((C, w, N) => {
    let x = "";
    return N > 0 && N < p.length - 1 ? x = Nv(p[N - 1], w, p[N + 1], s) : x = `${N === 0 ? "M" : "L"}${w.x} ${w.y}`, C += x, C;
  }, ""), f, g, h, y];
}
function ja(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function Lv(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!ja(t) || !ja(n))
    return null;
  const r = t.internals.handleBounds || Fa(t.handles), o = n.internals.handleBounds || Fa(n.handles), i = Wa(r?.source ?? [], e.sourceHandle), s = Wa(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === mr.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return e.onError?.("008", Un.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = i?.position || me.Bottom, l = s?.position || me.Top, c = Fr(t, i, a), d = Fr(n, s, l);
  return {
    sourceX: c.x,
    sourceY: c.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function Fa(e) {
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
function Fr(e, t, n = me.Left, r = !1) {
  const o = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? An(e);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch (t?.position ?? n) {
    case me.Top:
      return { x: o + s / 2, y: i };
    case me.Right:
      return { x: o + s, y: i + a / 2 };
    case me.Bottom:
      return { x: o + s / 2, y: i + a };
    case me.Left:
      return { x: o, y: i + a / 2 };
  }
}
function Wa(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function es(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function Mv(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const c = es(l, t);
      i.has(c) || (s.push({ id: c, color: l.color || n, ...l }), i.add(c));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function Vv(e, t, n, r, o) {
  let i = 0.5;
  o === "start" ? i = 0 : o === "end" && (i = 1);
  let s = [
    (e.x + e.width * i) * t.zoom + t.x,
    e.y * t.zoom + t.y - r
  ], a = [-100 * i, -100];
  switch (n) {
    case me.Right:
      s = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [0, -100 * i];
      break;
    case me.Bottom:
      s[1] = (e.y + e.height) * t.zoom + t.y + r, a[1] = 0;
      break;
    case me.Left:
      s = [
        e.x * t.zoom + t.x - r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [-100, -100 * i];
      break;
  }
  return `translate(${s[0]}px, ${s[1]}px) translate(${a[0]}%, ${a[1]}%)`;
}
const Rs = {
  nodeOrigin: [0, 0],
  nodeExtent: Gi,
  elevateNodesOnSelect: !0,
  defaults: {}
}, Dv = {
  ...Rs,
  checkEquality: !0
};
function Zs(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function Tv(e, t, n) {
  const r = Zs(Rs, n);
  for (const o of e.values())
    if (o.parentId)
      Ks(o, e, t, r);
    else {
      const i = so(o, r.nodeOrigin), s = br(o.extent) ? o.extent : r.nodeExtent, a = Gn(i, s, An(o));
      o.internals.positionAbsolute = a;
    }
}
function Hv(e, t, n, r) {
  const o = Zs(Dv, r);
  let i = e.length > 0;
  const s = new Map(t), a = o?.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const l of e) {
    let c = s.get(l.id);
    if (o.checkEquality && l === c?.internals.userNode)
      t.set(l.id, c);
    else {
      const d = so(l, o.nodeOrigin), p = br(l.extent) ? l.extent : o.nodeExtent, f = Gn(d, p, An(l));
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
          z: nc(l, a),
          userNode: l
        }
      }, t.set(l.id, c);
    }
    (c.measured === void 0 || c.measured.width === void 0 || c.measured.height === void 0) && !c.hidden && (i = !1), l.parentId && Ks(c, t, n, r);
  }
  return i;
}
function Ov(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Ks(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: s } = Zs(Rs, r), a = e.parentId, l = t.get(a);
  if (!l) {
    console.warn(`Parent node ${a} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  Ov(e, n);
  const c = o ? 1e3 : 0, { x: d, y: p, z: f } = Av(e, l, i, s, c), { positionAbsolute: g } = e.internals, h = d !== g.x || p !== g.y;
  (h || f !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: h ? { x: d, y: p } : g,
      z: f
    }
  });
}
function nc(e, t) {
  return (an(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function Av(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = An(e), l = so(e, n), c = br(e.extent) ? Gn(l, e.extent, a) : l;
  let d = Gn({ x: i + c.x, y: s + c.y }, r, a);
  e.extent === "parent" && (d = Ku(d, a, t));
  const p = nc(e, o), f = t.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: f >= p ? f + 1 : p
  };
}
function zv(e, t, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const a = t.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? wr(a), c = ju(l, s.rect);
    i.set(s.parentId, { expandedRect: c, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const c = a.internals.positionAbsolute, d = An(a), p = a.origin ?? r, f = s.x < c.x ? Math.round(Math.abs(c.x - s.x)) : 0, g = s.y < c.y ? Math.round(Math.abs(c.y - s.y)) : 0, h = Math.max(d.width, Math.round(s.width)), y = Math.max(d.height, Math.round(s.height)), C = (h - d.width) * p[0], w = (y - d.height) * p[1];
    (f > 0 || g > 0 || C || w) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - f + C,
        y: a.position.y - g + w
      }
    }), n.get(l)?.forEach((N) => {
      e.some((x) => x.id === N.id) || o.push({
        id: N.id,
        type: "position",
        position: {
          x: N.position.x + f,
          y: N.position.y + g
        }
      });
    })), (d.width < s.width || d.height < s.height || f || g) && o.push({
      id: l,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: h + (f ? p[0] * f - C : 0),
        height: y + (g ? p[1] * g - w : 0)
      }
    });
  }), o;
}
function Iv(e, t, n, r, o, i) {
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
      const C = f.nodeElement.getBoundingClientRect(), w = br(g.extent) ? g.extent : i;
      let { positionAbsolute: N } = g.internals;
      g.parentId && g.extent === "parent" ? N = Ku(N, h, t.get(g.parentId)) : w && (N = Gn(N, w, h));
      const x = {
        ...g,
        measured: h,
        internals: {
          ...g.internals,
          positionAbsolute: N,
          handleBounds: {
            source: Ra("source", f.nodeElement, C, d, g.id),
            target: Ra("target", f.nodeElement, C, d, g.id)
          }
        }
      };
      t.set(g.id, x), g.parentId && Ks(x, t, n, { nodeOrigin: o }), a = !0, y && (l.push({
        id: g.id,
        type: "dimensions",
        dimensions: h
      }), g.expandParent && g.parentId && p.push({
        id: g.id,
        parentId: g.parentId,
        rect: wr(x, o)
      }));
    }
  }
  if (p.length > 0) {
    const f = zv(p, t, n, o);
    l.push(...f);
  }
  return { changes: l, updatedInternals: a };
}
async function Bv({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function qv(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, c = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    Xa("source", l, d, e, o, s), Xa("target", l, c, e, i, a), t.set(r.id, r);
  }
}
function Rv(e, t) {
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
function rc(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : rc(n, t) : !1;
}
function Ua(e, t, n) {
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
function Zv(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !rc(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, c = { x: 0, y: 0 }, d = null, p = !1, f = null, g = !1, h = !1;
  function y({ noDragClassName: w, handleSelector: N, domNode: x, isSelectable: $, nodeId: k, nodeClickDistance: M = 0 }) {
    f = Lt(x);
    function A({ x: L, y: S }, T) {
      const { nodeLookup: b, nodeExtent: P, snapGrid: E, snapToGrid: H, nodeOrigin: B, onNodeDrag: D, onSelectionDrag: R, onError: F, updateNodePositions: X } = t();
      i = { x: L, y: S };
      let Q = !1, j = { x: 0, y: 0, x2: 0, y2: 0 };
      if (a.size > 1 && P) {
        const ce = ao(a);
        j = Qi(ce);
      }
      for (const [ce, te] of a) {
        if (!b.has(ce))
          continue;
        let fe = { x: L - te.distance.x, y: S - te.distance.y };
        H && (fe = pi(fe, E));
        let U = [
          [P[0][0], P[0][1]],
          [P[1][0], P[1][1]]
        ];
        if (a.size > 1 && P && !te.extent) {
          const { positionAbsolute: oe } = te.internals, ee = oe.x - j.x + P[0][0], ge = oe.x + te.measured.width - j.x2 + P[1][0], J = oe.y - j.y + P[0][1], ye = oe.y + te.measured.height - j.y2 + P[1][1];
          U = [
            [ee, J],
            [ge, ye]
          ];
        }
        const { position: xe, positionAbsolute: de } = Zu({
          nodeId: ce,
          nextPosition: fe,
          nodeLookup: b,
          nodeExtent: U,
          nodeOrigin: B,
          onError: F
        });
        Q = Q || te.position.x !== xe.x || te.position.y !== xe.y, te.position = xe, te.internals.positionAbsolute = de;
      }
      if (h = h || Q, !!Q && (X(a, !0), T && (r || D || !k && R))) {
        const [ce, te] = Ei({
          nodeId: k,
          dragItems: a,
          nodeLookup: b
        });
        r?.(T, a, ce, te), D?.(T, ce, te), k || R?.(T, te);
      }
    }
    async function q() {
      if (!d)
        return;
      const { transform: L, panBy: S, autoPanSpeed: T, autoPanOnNodeDrag: b } = t();
      if (!b) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [P, E] = Yu(c, d, T);
      (P !== 0 || E !== 0) && (i.x = (i.x ?? 0) - P / L[2], i.y = (i.y ?? 0) - E / L[2], await S({ x: P, y: E }) && A(i, null)), s = requestAnimationFrame(q);
    }
    function W(L) {
      const { nodeLookup: S, multiSelectionActive: T, nodesDraggable: b, transform: P, snapGrid: E, snapToGrid: H, selectNodesOnDrag: B, onNodeDragStart: D, onSelectionDragStart: R, unselectNodesAndEdges: F } = t();
      p = !0, (!B || !$) && !T && k && (S.get(k)?.selected || F()), $ && B && k && e?.(k);
      const X = Si(L.sourceEvent, { transform: P, snapGrid: E, snapToGrid: H, containerBounds: d });
      if (i = X, a = Zv(S, b, X, k), a.size > 0 && (n || D || !k && R)) {
        const [Q, j] = Ei({
          nodeId: k,
          dragItems: a,
          nodeLookup: S
        });
        n?.(L.sourceEvent, a, Q, j), D?.(L.sourceEvent, Q, j), k || R?.(L.sourceEvent, j);
      }
    }
    const K = g1().clickDistance(M).on("start", (L) => {
      const { domNode: S, nodeDragThreshold: T, transform: b, snapGrid: P, snapToGrid: E } = t();
      d = S?.getBoundingClientRect() || null, g = !1, h = !1, T === 0 && W(L), i = Si(L.sourceEvent, { transform: b, snapGrid: P, snapToGrid: E, containerBounds: d }), c = Yt(L.sourceEvent, d);
    }).on("drag", (L) => {
      const { autoPanOnNodeDrag: S, transform: T, snapGrid: b, snapToGrid: P, nodeDragThreshold: E, nodeLookup: H } = t(), B = Si(L.sourceEvent, { transform: T, snapGrid: b, snapToGrid: P, containerBounds: d });
      if ((L.sourceEvent.type === "touchmove" && L.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      k && !H.has(k)) && (g = !0), !g) {
        if (!l && S && p && (l = !0, q()), !p) {
          const D = B.xSnapped - (i.x ?? 0), R = B.ySnapped - (i.y ?? 0);
          Math.sqrt(D * D + R * R) > E && W(L);
        }
        (i.x !== B.xSnapped || i.y !== B.ySnapped) && a && p && (c = Yt(L.sourceEvent, d), A(B, L.sourceEvent));
      }
    }).on("end", (L) => {
      if (!(!p || g) && (l = !1, p = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: S, updateNodePositions: T, onNodeDragStop: b, onSelectionDragStop: P } = t();
        if (h && (T(a, !1), h = !1), o || b || !k && P) {
          const [E, H] = Ei({
            nodeId: k,
            dragItems: a,
            nodeLookup: S,
            dragging: !1
          });
          o?.(L.sourceEvent, a, E, H), b?.(L.sourceEvent, E, H), k || P?.(L.sourceEvent, H);
        }
      }
    }).filter((L) => {
      const S = L.target;
      return !L.button && (!w || !Ua(S, `.${w}`, x)) && (!N || Ua(S, N, x));
    });
    f.call(K);
  }
  function C() {
    f?.on(".drag", null);
  }
  return {
    update: y,
    destroy: C
  };
}
function Yv(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    jr(o, wr(i)) > 0 && r.push(i);
  return r;
}
const jv = 250;
function Fv(e, t, n, r) {
  let o = [], i = 1 / 0;
  const s = Yv(e, n, t + jv);
  for (const a of s) {
    const l = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const c of l) {
      if (r.nodeId === c.nodeId && r.type === c.type && r.id === c.id)
        continue;
      const { x: d, y: p } = Fr(a, c, c.position, !0), f = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(p - e.y, 2));
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
function oc(e, t, n, r, o, i = !1) {
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((c) => c.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...Fr(s, l, l.position, !0) } : l;
}
function ic(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function Wv(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const sc = () => !0;
function Xv(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: c, autoPanOnConnect: d, flowId: p, panBy: f, cancelConnection: g, onConnectStart: h, onConnect: y, onConnectEnd: C, isValidConnection: w = sc, onReconnectEnd: N, updateConnection: x, getTransform: $, getFromHandle: k, autoPanSpeed: M, dragThreshold: A = 1 }) {
  const q = Uu(e.target);
  let W = 0, K;
  const { x: L, y: S } = Yt(e), T = q?.elementFromPoint(L, S), b = ic(i, T), P = a?.getBoundingClientRect();
  let E = !1;
  if (!P || !b)
    return;
  const H = oc(o, b, r, l, t);
  if (!H)
    return;
  let B = Yt(e, P), D = !1, R = null, F = !1, X = null;
  function Q() {
    if (!d || !P)
      return;
    const [de, oe] = Yu(B, P, M);
    f({ x: de, y: oe }), W = requestAnimationFrame(Q);
  }
  const j = {
    ...H,
    nodeId: o,
    type: b,
    position: H.position
  }, ce = l.get(o);
  let te = {
    inProgress: !0,
    isValid: null,
    from: Fr(ce, j, me.Left, !0),
    fromHandle: j,
    fromPosition: j.position,
    fromNode: ce,
    to: B,
    toHandle: null,
    toPosition: za[j.position],
    toNode: null
  };
  function fe() {
    E = !0, x(te), h?.(e, { nodeId: o, handleId: r, handleType: b });
  }
  A === 0 && fe();
  function U(de) {
    if (!E) {
      const { x: J, y: ye } = Yt(de), ne = J - L, Ce = ye - S;
      if (!(ne * ne + Ce * Ce > A * A))
        return;
      fe();
    }
    if (!k() || !j) {
      xe(de);
      return;
    }
    const oe = $();
    B = Yt(de, P), K = Fv(lo(B, oe, !1, [1, 1]), n, l, j), D || (Q(), D = !0);
    const ee = ac(de, {
      handle: K,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: w,
      doc: q,
      lib: c,
      flowId: p,
      nodeLookup: l
    });
    X = ee.handleDomNode, R = ee.connection, F = Wv(!!K, ee.isValid);
    const ge = {
      // from stays the same
      ...te,
      isValid: F,
      to: ee.toHandle && F ? Fo({ x: ee.toHandle.x, y: ee.toHandle.y }, oe) : B,
      toHandle: ee.toHandle,
      toPosition: F && ee.toHandle ? ee.toHandle.position : za[j.position],
      toNode: ee.toHandle ? l.get(ee.toHandle.nodeId) : null
    };
    F && K && te.toHandle && ge.toHandle && te.toHandle.type === ge.toHandle.type && te.toHandle.nodeId === ge.toHandle.nodeId && te.toHandle.id === ge.toHandle.id && te.to.x === ge.to.x && te.to.y === ge.to.y || (x(ge), te = ge);
  }
  function xe(de) {
    if (E) {
      (K || X) && R && F && y?.(R);
      const { inProgress: oe, ...ee } = te, ge = {
        ...ee,
        toPosition: te.toHandle ? te.toPosition : null
      };
      C?.(de, ge), i && N?.(de, ge);
    }
    g(), cancelAnimationFrame(W), D = !1, F = !1, R = null, X = null, q.removeEventListener("mousemove", U), q.removeEventListener("mouseup", xe), q.removeEventListener("touchmove", U), q.removeEventListener("touchend", xe);
  }
  q.addEventListener("mousemove", U), q.addEventListener("mouseup", xe), q.addEventListener("touchmove", U), q.addEventListener("touchend", xe);
}
function ac(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: c = sc, nodeLookup: d }) {
  const p = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: g, y: h } = Yt(e), y = s.elementFromPoint(g, h), C = y?.classList.contains(`${a}-flow__handle`) ? y : f, w = {
    handleDomNode: C,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (C) {
    const N = ic(void 0, C), x = C.getAttribute("data-nodeid"), $ = C.getAttribute("data-handleid"), k = C.classList.contains("connectable"), M = C.classList.contains("connectableend");
    if (!x || !N)
      return w;
    const A = {
      source: p ? x : r,
      sourceHandle: p ? $ : o,
      target: p ? r : x,
      targetHandle: p ? o : $
    };
    w.connection = A;
    const q = k && M && (n === mr.Strict ? p && N === "source" || !p && N === "target" : x !== r || $ !== o);
    w.isValid = q && c(A), w.toHandle = oc(x, N, $, d, n, !0);
  }
  return w;
}
const Ga = {
  onPointerDown: Xv,
  isValid: ac
};
function Uv({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Lt(e);
  function i({ translateExtent: a, width: l, height: c, zoomStep: d = 10, pannable: p = !0, zoomable: f = !0, inversePan: g = !1 }) {
    const h = (x) => {
      const $ = n();
      if (x.sourceEvent.type !== "wheel" || !t)
        return;
      const k = -x.sourceEvent.deltaY * (x.sourceEvent.deltaMode === 1 ? 0.05 : x.sourceEvent.deltaMode ? 1 : 2e-3) * d, M = $[2] * Math.pow(2, k);
      t.scaleTo(M);
    };
    let y = [0, 0];
    const C = (x) => {
      (x.sourceEvent.type === "mousedown" || x.sourceEvent.type === "touchstart") && (y = [
        x.sourceEvent.clientX ?? x.sourceEvent.touches[0].clientX,
        x.sourceEvent.clientY ?? x.sourceEvent.touches[0].clientY
      ]);
    }, w = (x) => {
      const $ = n();
      if (x.sourceEvent.type !== "mousemove" && x.sourceEvent.type !== "touchmove" || !t)
        return;
      const k = [
        x.sourceEvent.clientX ?? x.sourceEvent.touches[0].clientX,
        x.sourceEvent.clientY ?? x.sourceEvent.touches[0].clientY
      ], M = [k[0] - y[0], k[1] - y[1]];
      y = k;
      const A = r() * Math.max($[2], Math.log($[2])) * (g ? -1 : 1), q = {
        x: $[0] - M[0] * A,
        y: $[1] - M[1] * A
      }, W = [
        [0, 0],
        [l, c]
      ];
      t.setViewportConstrained({
        x: q.x,
        y: q.y,
        zoom: $[2]
      }, W, a);
    }, N = Bu().on("start", C).on("zoom", p ? w : null).on("zoom.wheel", f ? h : null);
    o.call(N, {});
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
}), Pi = ({ x: e, y: t, zoom: n }) => ci.translate(e, t).scale(n), sr = (e, t) => e.target.closest(`.${t}`), lc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), Jv = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, Ni = (e, t = 0, n = Jv, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, uc = (e) => {
  const t = e.ctrlKey && ir() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function Qv({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: c }) {
  return (d) => {
    if (sr(d, t))
      return !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const p = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const C = Dt(d), w = uc(d), N = p * Math.pow(2, w);
      r.scaleTo(n, N, C, d);
      return;
    }
    const f = d.deltaMode === 1 ? 20 : 1;
    let g = o === Xt.Vertical ? 0 : d.deltaX * f, h = o === Xt.Horizontal ? 0 : d.deltaY * f;
    !ir() && d.shiftKey && o !== Xt.Vertical && (g = d.deltaY * f, h = 0), r.translateBy(
      n,
      -(g / p) * i,
      -(h / p) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const y = gi(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, a?.(d, y)), e.isPanScrolling && (l?.(d, y), e.panScrollTimeout = setTimeout(() => {
      c?.(d, y), e.isPanScrolling = !1;
    }, 150));
  };
}
function e0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = sr(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function t0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = gi(r.transform);
    e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, o);
  };
}
function n0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && lc(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, gi(i.transform));
  };
}
function r0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && lc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && Gv(e.prevViewport, s.transform))) {
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
function o0({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: c }) {
  return (d) => {
    const p = e || t, f = n && d.ctrlKey;
    if (d.button === 1 && d.type === "mousedown" && (sr(d, `${c}-flow__node`) || sr(d, `${c}-flow__edge`)))
      return !0;
    if (!r && !p && !o && !i && !n || s || sr(d, a) && d.type === "wheel" || sr(d, l) && (d.type !== "wheel" || o && d.type === "wheel" && !e) || !n && d.ctrlKey && d.type === "wheel")
      return !1;
    if (!n && d.type === "touchstart" && d.touches?.length > 1)
      return d.preventDefault(), !1;
    if (!p && !o && !f && d.type === "wheel" || !r && (d.type === "mousedown" || d.type === "touchstart") || Array.isArray(r) && !r.includes(d.button) && d.type === "mousedown")
      return !1;
    const g = Array.isArray(r) && r.includes(d.button) || !d.button || d.button <= 1;
    return (!d.ctrlKey || d.type === "wheel") && g;
  };
}
function i0({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: s, onPanZoomStart: a, onPanZoomEnd: l, onDraggingChange: c }) {
  const d = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, p = e.getBoundingClientRect(), f = Bu().clickDistance(!an(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), g = Lt(e).call(f);
  x({
    x: i.x,
    y: i.y,
    zoom: yr(i.zoom, t, n)
  }, [
    [0, 0],
    [p.width, p.height]
  ], o);
  const h = g.on("wheel.zoom"), y = g.on("dblclick.zoom");
  f.wheelDelta(uc);
  function C(S, T) {
    return g ? new Promise((b) => {
      f?.interpolate(T?.interpolate === "linear" ? Tr : Po).transform(Ni(g, T?.duration, T?.ease, () => b(!0)), S);
    }) : Promise.resolve(!1);
  }
  function w({ noWheelClassName: S, noPanClassName: T, onPaneContextMenu: b, userSelectionActive: P, panOnScroll: E, panOnDrag: H, panOnScrollMode: B, panOnScrollSpeed: D, preventScrolling: R, zoomOnPinch: F, zoomOnScroll: X, zoomOnDoubleClick: Q, zoomActivationKeyPressed: j, lib: ce, onTransformChange: te }) {
    P && !d.isZoomingOrPanning && N();
    const fe = E && !j && !P ? Qv({
      zoomPanValues: d,
      noWheelClassName: S,
      d3Selection: g,
      d3Zoom: f,
      panOnScrollMode: B,
      panOnScrollSpeed: D,
      zoomOnPinch: F,
      onPanZoomStart: a,
      onPanZoom: s,
      onPanZoomEnd: l
    }) : e0({
      noWheelClassName: S,
      preventScrolling: R,
      d3ZoomHandler: h
    });
    if (g.on("wheel.zoom", fe, { passive: !1 }), !P) {
      const xe = t0({
        zoomPanValues: d,
        onDraggingChange: c,
        onPanZoomStart: a
      });
      f.on("start", xe);
      const de = n0({
        zoomPanValues: d,
        panOnDrag: H,
        onPaneContextMenu: !!b,
        onPanZoom: s,
        onTransformChange: te
      });
      f.on("zoom", de);
      const oe = r0({
        zoomPanValues: d,
        panOnDrag: H,
        panOnScroll: E,
        onPaneContextMenu: b,
        onPanZoomEnd: l,
        onDraggingChange: c
      });
      f.on("end", oe);
    }
    const U = o0({
      zoomActivationKeyPressed: j,
      panOnDrag: H,
      zoomOnScroll: X,
      panOnScroll: E,
      zoomOnDoubleClick: Q,
      zoomOnPinch: F,
      userSelectionActive: P,
      noPanClassName: T,
      noWheelClassName: S,
      lib: ce
    });
    f.filter(U), Q ? g.on("dblclick.zoom", y) : g.on("dblclick.zoom", null);
  }
  function N() {
    f.on("zoom", null);
  }
  async function x(S, T, b) {
    const P = Pi(S), E = f?.constrain()(P, T, b);
    return E && await C(E), new Promise((H) => H(E));
  }
  async function $(S, T) {
    const b = Pi(S);
    return await C(b, T), new Promise((P) => P(b));
  }
  function k(S) {
    if (g) {
      const T = Pi(S), b = g.property("__zoom");
      (b.k !== S.zoom || b.x !== S.x || b.y !== S.y) && f?.transform(g, T, null, { sync: !0 });
    }
  }
  function M() {
    const S = g ? Iu(g.node()) : { x: 0, y: 0, k: 1 };
    return { x: S.x, y: S.y, zoom: S.k };
  }
  function A(S, T) {
    return g ? new Promise((b) => {
      f?.interpolate(T?.interpolate === "linear" ? Tr : Po).scaleTo(Ni(g, T?.duration, T?.ease, () => b(!0)), S);
    }) : Promise.resolve(!1);
  }
  function q(S, T) {
    return g ? new Promise((b) => {
      f?.interpolate(T?.interpolate === "linear" ? Tr : Po).scaleBy(Ni(g, T?.duration, T?.ease, () => b(!0)), S);
    }) : Promise.resolve(!1);
  }
  function W(S) {
    f?.scaleExtent(S);
  }
  function K(S) {
    f?.translateExtent(S);
  }
  function L(S) {
    const T = !an(S) || S < 0 ? 0 : S;
    f?.clickDistance(T);
  }
  return {
    update: w,
    destroy: N,
    setViewport: $,
    setViewportConstrained: x,
    getViewport: M,
    scaleTo: A,
    scaleBy: q,
    setScaleExtent: W,
    setTranslateExtent: K,
    syncViewport: k,
    setClickDistance: L
  };
}
var Ja;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Ja || (Ja = {}));
var s0 = /* @__PURE__ */ G("<div><!></div>");
function Vn(e, t) {
  se(t, !0);
  let n = m(t, "id", 7, null), r = m(t, "type", 7, "source"), o = m(t, "position", 23, () => me.Top), i = m(t, "style", 7), s = m(t, "class", 7), a = m(t, "isConnectable", 7), l = m(t, "isConnectableStart", 7, !0), c = m(t, "isConnectableEnd", 7, !0), d = m(t, "isValidConnection", 7), p = m(t, "onconnect", 7), f = m(t, "ondisconnect", 7), g = m(t, "children", 7), h = /* @__PURE__ */ Ae(t, [
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
  const y = pn("svelteflow__node_id"), C = pn("svelteflow__node_connectable");
  let w = /* @__PURE__ */ _(() => r() === "target"), N = /* @__PURE__ */ _(() => a() !== void 0 ? a() : C.value), x = It(), $ = /* @__PURE__ */ _(() => x.ariaLabelConfig), k = null;
  Il(() => {
    if (p() || f()) {
      x.edges;
      let D = x.connectionLookup.get(`${y}-${r()}${n() ? `-${n()}` : ""}`);
      if (k && !lv(D, k)) {
        const R = D ?? /* @__PURE__ */ new Map();
        Ia(k, R, f()), Ia(R, k, p());
      }
      k = new Map(D);
    }
  });
  let M = /* @__PURE__ */ _(() => {
    if (!x.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: D, toHandle: R, isValid: F } = x.connection, X = D && D.nodeId === y && D.type === r() && D.id === n(), Q = R && R.nodeId === y && R.type === r() && R.id === n(), j = x.connectionMode === mr.Strict ? D?.type !== r() : y !== D?.nodeId || n() !== D?.id;
    return [
      !0,
      X,
      Q,
      j,
      Q && F
    ];
  }), A = /* @__PURE__ */ _(() => Jr(u(M), 5)), q = /* @__PURE__ */ _(() => u(A)[0]), W = /* @__PURE__ */ _(() => u(A)[1]), K = /* @__PURE__ */ _(() => u(A)[2]), L = /* @__PURE__ */ _(() => u(A)[3]), S = /* @__PURE__ */ _(() => u(A)[4]);
  function T(D) {
    const R = x.onbeforeconnect?.(D) ?? D;
    R && (x.addEdge(R), x.onconnect?.(D));
  }
  function b(D) {
    const R = Ju(D);
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
      onConnect: T,
      onConnectStart: (F, X) => {
        x.onconnectstart?.(F, {
          nodeId: X.nodeId,
          handleId: X.handleId,
          handleType: X.handleType
        });
      },
      onConnectEnd: (F, X) => {
        x.onconnectend?.(F, X);
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
    const R = Uu(D.target), F = d() ?? x.isValidConnection, { connectionMode: X, clickConnectStartHandle: Q, flowId: j, nodeLookup: ce } = x, { connection: te, isValid: fe } = Ga.isValid(D, {
      handle: { nodeId: y, id: n(), type: r() },
      connectionMode: X,
      fromNodeId: Q.nodeId,
      fromHandleId: Q.id ?? null,
      fromType: Q.type,
      isValidConnection: F,
      flowId: j,
      doc: R,
      lib: "svelte",
      nodeLookup: ce
    });
    fe && te && T(te);
    const U = structuredClone(_l(x.connection));
    delete U.inProgress, U.toPosition = U.toHandle ? U.toHandle.position : null, x.onclickconnectend?.(D, U), x.clickConnectStartHandle = null;
  }
  var E = s0(), H = () => {
  };
  Ge(
    E,
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
      onclick: x.clickConnect ? P : void 0,
      onkeypress: H,
      style: i(),
      role: "button",
      "aria-label": u($)["handle.ariaLabel"],
      tabindex: "-1",
      ...h,
      [_n]: D
    }),
    [
      () => ({
        valid: u(S),
        connectingto: u(K),
        connectingfrom: u(W),
        source: !u(w),
        target: u(w),
        connectablestart: l(),
        connectableend: c(),
        connectable: u(N),
        connectionindicator: u(N) && (!u(q) || u(L)) && (u(q) || x.clickConnectStartHandle ? c() : l())
      })
    ]
  );
  var B = I(E);
  return Ye(B, () => g() ?? tt), z(E), V(e, E), ae({
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
    set position(D = me.Top) {
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
var a0 = /* @__PURE__ */ G("<!> <!>", 1);
function Ys(e, t) {
  se(t, !0);
  let n = m(t, "data", 7), r = m(t, "targetPosition", 23, () => me.Top), o = m(t, "sourcePosition", 23, () => me.Bottom);
  var i = a0(), s = le(i);
  Vn(s, {
    type: "target",
    get position() {
      return r();
    }
  });
  var a = O(s), l = O(a);
  return Vn(l, {
    type: "source",
    get position() {
      return o();
    }
  }), ke(() => ze(a, ` ${n()?.label ?? ""} `)), V(e, i), ae({
    get data() {
      return n();
    },
    set data(c) {
      n(c), v();
    },
    get targetPosition() {
      return r();
    },
    set targetPosition(c = me.Top) {
      r(c), v();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(c = me.Bottom) {
      o(c), v();
    }
  });
}
re(Ys, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var l0 = /* @__PURE__ */ G(" <!>", 1);
function cc(e, t) {
  se(t, !0);
  let n = m(t, "data", 23, () => ({ label: "Node" })), r = m(t, "sourcePosition", 23, () => me.Bottom);
  ve();
  var o = l0(), i = le(o), s = O(i);
  return Vn(s, {
    type: "source",
    get position() {
      return r();
    }
  }), ke(() => ze(i, `${n()?.label ?? ""} `)), V(e, o), ae({
    get data() {
      return n();
    },
    set data(a = { label: "Node" }) {
      n(a), v();
    },
    get sourcePosition() {
      return r();
    },
    set sourcePosition(a = me.Bottom) {
      r(a), v();
    }
  });
}
re(cc, { data: {}, sourcePosition: {} }, [], [], !0);
var u0 = /* @__PURE__ */ G(" <!>", 1);
function dc(e, t) {
  se(t, !0);
  let n = m(t, "data", 23, () => ({ label: "Node" })), r = m(t, "targetPosition", 23, () => me.Top);
  ve();
  var o = u0(), i = le(o), s = O(i);
  return Vn(s, {
    type: "target",
    get position() {
      return r();
    }
  }), ke(() => ze(i, `${n()?.label ?? ""} `)), V(e, o), ae({
    get data() {
      return n();
    },
    set data(a = { label: "Node" }) {
      n(a), v();
    },
    get targetPosition() {
      return r();
    },
    set targetPosition(a = me.Top) {
      r(a), v();
    }
  });
}
re(dc, { data: {}, targetPosition: {} }, [], [], !0);
function fc(e, t) {
}
re(fc, {}, [], [], !0);
function Li(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function pc(e, t) {
  const n = /* @__PURE__ */ _(It), r = /* @__PURE__ */ _(() => u(n).domNode);
  let o;
  return u(r) ? Li(e, u(r), t) : o = $s(() => {
    Ze(() => {
      Li(e, u(r), t), o?.();
    });
  }), {
    async update(i) {
      Li(e, u(r), i);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e), o?.();
    }
  };
}
function gc() {
  let e = /* @__PURE__ */ Ee(typeof window > "u");
  if (u(e)) {
    const t = $s(() => {
      Ze(() => {
        Y(e, !1), t?.();
      });
    });
  }
  return {
    get value() {
      return u(e);
    }
  };
}
const Qa = (e) => cv(e), c0 = (e) => Ru(e);
function Qt(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const Wo = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var d0 = /* @__PURE__ */ G("<div><!></div>");
const f0 = {
  hash: "svelte-w2n27y",
  code: ".transparent.svelte-w2n27y {background:transparent;}"
};
function hc(e, t) {
  se(t, !0), He(e, f0);
  let n = m(t, "x", 7, 0), r = m(t, "y", 7, 0), o = m(t, "width", 7), i = m(t, "height", 7), s = m(t, "selectEdgeOnClick", 7, !1), a = m(t, "transparent", 7, !1), l = m(t, "class", 7), c = m(t, "children", 7), d = /* @__PURE__ */ Ae(t, [
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
  const p = It(), f = pn("svelteflow__edge_id");
  let g = /* @__PURE__ */ _(() => p.visible.edges.get(f)?.zIndex);
  var h = d0(), y = () => {
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
        display: gc().value ? "none" : void 0,
        cursor: s() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: Qt(o()),
        height: Qt(i()),
        "z-index": u(g)
      })
    ],
    "svelte-w2n27y"
  );
  var C = I(h);
  return Ye(C, () => c() ?? tt), z(h), ot(h, (w, N) => pc?.(w, N), () => "edge-labels"), V(e, h), ae({
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
  hc,
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
var p0 = /* @__PURE__ */ he("<path></path>"), g0 = /* @__PURE__ */ he('<path fill="none"></path><!><!>', 1);
function uo(e, t) {
  se(t, !0);
  let n = m(t, "id", 7), r = m(t, "path", 7), o = m(t, "label", 7), i = m(t, "labelX", 7), s = m(t, "labelY", 7), a = m(t, "labelStyle", 7), l = m(t, "markerStart", 7), c = m(t, "markerEnd", 7), d = m(t, "style", 7), p = m(t, "interactionWidth", 7, 20), f = m(t, "class", 7), g = /* @__PURE__ */ Ae(t, [
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
  var h = g0(), y = le(h), C = O(y);
  {
    var w = ($) => {
      var k = p0();
      Ge(k, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": p(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...g
      })), V($, k);
    };
    ie(C, ($) => {
      p() > 0 && $(w);
    });
  }
  var N = O(C);
  {
    var x = ($) => {
      hc($, {
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
        children: (k, M) => {
          ve();
          var A = Se();
          ke(() => ze(A, o())), V(k, A);
        },
        $$slots: { default: !0 }
      });
    };
    ie(N, ($) => {
      o() && $(x);
    });
  }
  return ke(() => {
    we(y, "id", n()), we(y, "d", r()), yt(y, 0, bn(["svelte-flow__edge-path", f()])), we(y, "marker-start", l()), we(y, "marker-end", c()), dt(y, d());
  }), V(e, h), ae({
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
      return c();
    },
    set markerEnd($) {
      c($), v();
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
function js(e, t) {
  se(t, !0);
  let n = m(t, "id", 7), r = m(t, "interactionWidth", 7), o = m(t, "label", 7), i = m(t, "labelStyle", 7), s = m(t, "markerEnd", 7), a = m(t, "markerStart", 7), l = m(t, "pathOptions", 7), c = m(t, "sourcePosition", 7), d = m(t, "sourceX", 7), p = m(t, "sourceY", 7), f = m(t, "style", 7), g = m(t, "targetPosition", 7), h = m(t, "targetX", 7), y = m(t, "targetY", 7), C = /* @__PURE__ */ _(() => Qu({
    sourceX: d(),
    sourceY: p(),
    targetX: h(),
    targetY: y(),
    sourcePosition: c(),
    targetPosition: g(),
    curvature: l()?.curvature
  })), w = /* @__PURE__ */ _(() => Jr(u(C), 3)), N = /* @__PURE__ */ _(() => u(w)[0]), x = /* @__PURE__ */ _(() => u(w)[1]), $ = /* @__PURE__ */ _(() => u(w)[2]);
  return uo(e, {
    get id() {
      return n();
    },
    get path() {
      return u(N);
    },
    get labelX() {
      return u(x);
    },
    get labelY() {
      return u($);
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
  }), ae({
    get id() {
      return n();
    },
    set id(k) {
      n(k), v();
    },
    get interactionWidth() {
      return r();
    },
    set interactionWidth(k) {
      r(k), v();
    },
    get label() {
      return o();
    },
    set label(k) {
      o(k), v();
    },
    get labelStyle() {
      return i();
    },
    set labelStyle(k) {
      i(k), v();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(k) {
      s(k), v();
    },
    get markerStart() {
      return a();
    },
    set markerStart(k) {
      a(k), v();
    },
    get pathOptions() {
      return l();
    },
    set pathOptions(k) {
      l(k), v();
    },
    get sourcePosition() {
      return c();
    },
    set sourcePosition(k) {
      c(k), v();
    },
    get sourceX() {
      return d();
    },
    set sourceX(k) {
      d(k), v();
    },
    get sourceY() {
      return p();
    },
    set sourceY(k) {
      p(k), v();
    },
    get style() {
      return f();
    },
    set style(k) {
      f(k), v();
    },
    get targetPosition() {
      return g();
    },
    set targetPosition(k) {
      g(k), v();
    },
    get targetX() {
      return h();
    },
    set targetX(k) {
      h(k), v();
    },
    get targetY() {
      return y();
    },
    set targetY(k) {
      y(k), v();
    }
  });
}
re(
  js,
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
function vc(e, t) {
  se(t, !0);
  let n = m(t, "interactionWidth", 7), r = m(t, "label", 7), o = m(t, "labelStyle", 7), i = m(t, "style", 7), s = m(t, "markerEnd", 7), a = m(t, "markerStart", 7), l = m(t, "sourcePosition", 7), c = m(t, "sourceX", 7), d = m(t, "sourceY", 7), p = m(t, "targetPosition", 7), f = m(t, "targetX", 7), g = m(t, "targetY", 7), h = /* @__PURE__ */ _(() => qs({
    sourceX: c(),
    sourceY: d(),
    targetX: f(),
    targetY: g(),
    sourcePosition: l(),
    targetPosition: p()
  })), y = /* @__PURE__ */ _(() => Jr(u(h), 3)), C = /* @__PURE__ */ _(() => u(y)[0]), w = /* @__PURE__ */ _(() => u(y)[1]), N = /* @__PURE__ */ _(() => u(y)[2]);
  return uo(e, {
    get path() {
      return u(C);
    },
    get labelX() {
      return u(w);
    },
    get labelY() {
      return u(N);
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
  }), ae({
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
  vc,
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
function mc(e, t) {
  se(t, !0);
  let n = m(t, "sourceX", 7), r = m(t, "sourceY", 7), o = m(t, "targetX", 7), i = m(t, "targetY", 7), s = m(t, "label", 7), a = m(t, "labelStyle", 7), l = m(t, "markerStart", 7), c = m(t, "markerEnd", 7), d = m(t, "interactionWidth", 7), p = m(t, "style", 7), f = /* @__PURE__ */ _(() => tc({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), g = /* @__PURE__ */ _(() => Jr(u(f), 3)), h = /* @__PURE__ */ _(() => u(g)[0]), y = /* @__PURE__ */ _(() => u(g)[1]), C = /* @__PURE__ */ _(() => u(g)[2]);
  return uo(e, {
    get path() {
      return u(h);
    },
    get labelX() {
      return u(y);
    },
    get labelY() {
      return u(C);
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
  }), ae({
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
  mc,
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
function yc(e, t) {
  se(t, !0);
  let n = m(t, "sourceX", 7), r = m(t, "sourceY", 7), o = m(t, "sourcePosition", 7), i = m(t, "targetX", 7), s = m(t, "targetY", 7), a = m(t, "targetPosition", 7), l = m(t, "label", 7), c = m(t, "labelStyle", 7), d = m(t, "markerStart", 7), p = m(t, "markerEnd", 7), f = m(t, "interactionWidth", 7), g = m(t, "style", 7), h = /* @__PURE__ */ _(() => qs({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), y = /* @__PURE__ */ _(() => Jr(u(h), 3)), C = /* @__PURE__ */ _(() => u(y)[0]), w = /* @__PURE__ */ _(() => u(y)[1]), N = /* @__PURE__ */ _(() => u(y)[2]);
  return uo(e, {
    get path() {
      return u(C);
    },
    get labelX() {
      return u(w);
    },
    get labelY() {
      return u(N);
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
  }), ae({
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
  yc,
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
function h0(e) {
  let t = 0, n = Fn(0), r;
  return () => {
    Ol() && (u(n), no(() => (t === 0 && (r = et(() => e(() => Co(n)))), t += 1, () => {
      qf().then(() => {
        t -= 1, t === 0 && (r?.(), r = void 0);
      });
    })));
  };
}
class v0 {
  #t;
  #e;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(t, n) {
    this.#t = t, this.#e = h0(n);
  }
  get current() {
    return this.#e(), this.#t();
  }
}
const m0 = /\(.+\)/, y0 = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class w0 extends v0 {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(t, n) {
    let r = m0.test(t) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    t.split(/[\s,]+/).some((i) => y0.has(i.trim())) ? t : `(${t})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => Bi(o, "change", i)
    );
  }
}
function b0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  return Is(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function el(e) {
  const { edges: t, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l } = e, c = /* @__PURE__ */ new Map();
  for (const d of t) {
    const p = r.get(d.source), f = r.get(d.target);
    if (!p || !f)
      continue;
    if (a) {
      const { visibleNodes: y, transform: C, width: w, height: N } = e;
      if (kv({
        sourceNode: p,
        targetNode: f,
        width: w,
        height: N,
        transform: C
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
    const h = Lv({
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
      zIndex: $v({
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
const wc = {
  input: cc,
  output: dc,
  default: Ys,
  group: fc
}, bc = {
  straight: mc,
  smoothstep: vc,
  default: js,
  step: yc
};
function x0(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = ao(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return Bs(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function $0(e) {
  class t {
    #t = /* @__PURE__ */ _(() => e.props.id ?? "1");
    get flowId() {
      return u(this.#t);
    }
    set flowId(r) {
      Y(this.#t, r);
    }
    #e = /* @__PURE__ */ Ee(null);
    get domNode() {
      return u(this.#e);
    }
    set domNode(r) {
      Y(this.#e, r);
    }
    #n = /* @__PURE__ */ Ee(null);
    get panZoom() {
      return u(this.#n);
    }
    set panZoom(r) {
      Y(this.#n, r);
    }
    #r = /* @__PURE__ */ Ee(e.width ?? 0);
    get width() {
      return u(this.#r);
    }
    set width(r) {
      Y(this.#r, r);
    }
    #o = /* @__PURE__ */ Ee(e.height ?? 0);
    get height() {
      return u(this.#o);
    }
    set height(r) {
      Y(this.#o, r);
    }
    #i = /* @__PURE__ */ _(() => {
      const r = Hv(e.nodes, this.nodeLookup, this.parentLookup, {
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
      Y(this.#i, r);
    }
    #s = /* @__PURE__ */ _(() => this.panZoom !== null);
    get viewportInitialized() {
      return u(this.#s);
    }
    set viewportInitialized(r) {
      Y(this.#s, r);
    }
    #a = /* @__PURE__ */ _(() => (qv(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
    get _edges() {
      return u(this.#a);
    }
    set _edges(r) {
      Y(this.#a, r);
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
    #l = /* @__PURE__ */ _(() => {
      const r = this._prevSelectedNodeIds.size, o = /* @__PURE__ */ new Set(), i = this.nodes.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedNodeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedNodeIds.size > 0) && (this._prevSelectedNodes = i), this._prevSelectedNodeIds = o, this._prevSelectedNodes;
    });
    get selectedNodes() {
      return u(this.#l);
    }
    set selectedNodes(r) {
      Y(this.#l, r);
    }
    _prevSelectedEdges = [];
    _prevSelectedEdgeIds = /* @__PURE__ */ new Set();
    #u = /* @__PURE__ */ _(() => {
      const r = this._prevSelectedEdgeIds.size, o = /* @__PURE__ */ new Set(), i = this.edges.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedEdgeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedEdgeIds.size > 0) && (this._prevSelectedEdges = i), this._prevSelectedEdgeIds = o, this._prevSelectedEdges;
    });
    get selectedEdges() {
      return u(this.#u);
    }
    set selectedEdges(r) {
      Y(this.#u, r);
    }
    selectionChangeHandlers = /* @__PURE__ */ new Map();
    nodeLookup = /* @__PURE__ */ new Map();
    parentLookup = /* @__PURE__ */ new Map();
    connectionLookup = /* @__PURE__ */ new Map();
    edgeLookup = /* @__PURE__ */ new Map();
    _prevVisibleEdges = /* @__PURE__ */ new Map();
    #c = /* @__PURE__ */ _(() => {
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
        const { viewport: h, width: y, height: C } = this, w = [h.x, h.y, h.zoom];
        p = b0(s, w, y, C), f = el({
          ...g,
          onlyRenderVisible: !0,
          visibleNodes: p,
          transform: w,
          width: y,
          height: C
        });
      } else
        p = this.nodeLookup, f = el(g);
      return { nodes: p, edges: f };
    });
    get visible() {
      return u(this.#c);
    }
    set visible(r) {
      Y(this.#c, r);
    }
    #d = /* @__PURE__ */ _(() => e.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return u(this.#d);
    }
    set nodesDraggable(r) {
      Y(this.#d, r);
    }
    #f = /* @__PURE__ */ _(() => e.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return u(this.#f);
    }
    set nodesConnectable(r) {
      Y(this.#f, r);
    }
    #p = /* @__PURE__ */ _(() => e.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return u(this.#p);
    }
    set elementsSelectable(r) {
      Y(this.#p, r);
    }
    #g = /* @__PURE__ */ _(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return u(this.#g);
    }
    set nodesFocusable(r) {
      Y(this.#g, r);
    }
    #h = /* @__PURE__ */ _(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return u(this.#h);
    }
    set edgesFocusable(r) {
      Y(this.#h, r);
    }
    #v = /* @__PURE__ */ _(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return u(this.#v);
    }
    set disableKeyboardA11y(r) {
      Y(this.#v, r);
    }
    #m = /* @__PURE__ */ _(() => e.props.minZoom ?? 0.5);
    get minZoom() {
      return u(this.#m);
    }
    set minZoom(r) {
      Y(this.#m, r);
    }
    #y = /* @__PURE__ */ _(() => e.props.maxZoom ?? 2);
    get maxZoom() {
      return u(this.#y);
    }
    set maxZoom(r) {
      Y(this.#y, r);
    }
    #w = /* @__PURE__ */ _(() => e.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return u(this.#w);
    }
    set nodeOrigin(r) {
      Y(this.#w, r);
    }
    #b = /* @__PURE__ */ _(() => e.props.nodeExtent ?? Gi);
    get nodeExtent() {
      return u(this.#b);
    }
    set nodeExtent(r) {
      Y(this.#b, r);
    }
    #x = /* @__PURE__ */ _(() => e.props.translateExtent ?? Gi);
    get translateExtent() {
      return u(this.#x);
    }
    set translateExtent(r) {
      Y(this.#x, r);
    }
    #$ = /* @__PURE__ */ _(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return u(this.#$);
    }
    set defaultEdgeOptions(r) {
      Y(this.#$, r);
    }
    #k = /* @__PURE__ */ _(() => e.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return u(this.#k);
    }
    set nodeDragThreshold(r) {
      Y(this.#k, r);
    }
    #C = /* @__PURE__ */ _(() => e.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return u(this.#C);
    }
    set autoPanOnNodeDrag(r) {
      Y(this.#C, r);
    }
    #_ = /* @__PURE__ */ _(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return u(this.#_);
    }
    set autoPanOnConnect(r) {
      Y(this.#_, r);
    }
    #S = /* @__PURE__ */ _(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return u(this.#S);
    }
    set autoPanOnNodeFocus(r) {
      Y(this.#S, r);
    }
    #E = /* @__PURE__ */ _(() => e.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return u(this.#E);
    }
    set connectionDragThreshold(r) {
      Y(this.#E, r);
    }
    fitViewQueued = e.props.fitView ?? !1;
    fitViewOptions = e.props.fitViewOptions;
    fitViewResolver = null;
    #P = /* @__PURE__ */ _(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return u(this.#P);
    }
    set snapGrid(r) {
      Y(this.#P, r);
    }
    #N = /* @__PURE__ */ Ee(!1);
    get dragging() {
      return u(this.#N);
    }
    set dragging(r) {
      Y(this.#N, r);
    }
    #L = /* @__PURE__ */ Ee(null);
    get selectionRect() {
      return u(this.#L);
    }
    set selectionRect(r) {
      Y(this.#L, r);
    }
    #M = /* @__PURE__ */ Ee(!1);
    get selectionKeyPressed() {
      return u(this.#M);
    }
    set selectionKeyPressed(r) {
      Y(this.#M, r);
    }
    #V = /* @__PURE__ */ Ee(!1);
    get multiselectionKeyPressed() {
      return u(this.#V);
    }
    set multiselectionKeyPressed(r) {
      Y(this.#V, r);
    }
    #D = /* @__PURE__ */ Ee(!1);
    get deleteKeyPressed() {
      return u(this.#D);
    }
    set deleteKeyPressed(r) {
      Y(this.#D, r);
    }
    #T = /* @__PURE__ */ Ee(!1);
    get panActivationKeyPressed() {
      return u(this.#T);
    }
    set panActivationKeyPressed(r) {
      Y(this.#T, r);
    }
    #H = /* @__PURE__ */ Ee(!1);
    get zoomActivationKeyPressed() {
      return u(this.#H);
    }
    set zoomActivationKeyPressed(r) {
      Y(this.#H, r);
    }
    #O = /* @__PURE__ */ Ee(null);
    get selectionRectMode() {
      return u(this.#O);
    }
    set selectionRectMode(r) {
      Y(this.#O, r);
    }
    #A = /* @__PURE__ */ Ee("");
    get ariaLiveMessage() {
      return u(this.#A);
    }
    set ariaLiveMessage(r) {
      Y(this.#A, r);
    }
    #z = /* @__PURE__ */ _(() => e.props.selectionMode ?? Yo.Partial);
    get selectionMode() {
      return u(this.#z);
    }
    set selectionMode(r) {
      Y(this.#z, r);
    }
    #I = /* @__PURE__ */ _(() => ({ ...wc, ...e.props.nodeTypes }));
    get nodeTypes() {
      return u(this.#I);
    }
    set nodeTypes(r) {
      Y(this.#I, r);
    }
    #B = /* @__PURE__ */ _(() => ({ ...bc, ...e.props.edgeTypes }));
    get edgeTypes() {
      return u(this.#B);
    }
    set edgeTypes(r) {
      Y(this.#B, r);
    }
    #q = /* @__PURE__ */ _(() => e.props.noPanClass ?? "nopan");
    get noPanClass() {
      return u(this.#q);
    }
    set noPanClass(r) {
      Y(this.#q, r);
    }
    #R = /* @__PURE__ */ _(() => e.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return u(this.#R);
    }
    set noDragClass(r) {
      Y(this.#R, r);
    }
    #Z = /* @__PURE__ */ _(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return u(this.#Z);
    }
    set noWheelClass(r) {
      Y(this.#Z, r);
    }
    #K = /* @__PURE__ */ _(() => wv(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return u(this.#K);
    }
    set ariaLabelConfig(r) {
      Y(this.#K, r);
    }
    #Y = /* @__PURE__ */ Ee(x0(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return u(this.#Y);
    }
    set _viewport(r) {
      Y(this.#Y, r);
    }
    get viewport() {
      return e.viewport ?? this._viewport;
    }
    set viewport(r) {
      e.viewport && (e.viewport = r), this._viewport = r;
    }
    #j = /* @__PURE__ */ Ee(
      // _connection is viewport independent and originating from XYHandle
      Ji
    );
    get _connection() {
      return u(this.#j);
    }
    set _connection(r) {
      Y(this.#j, r);
    }
    #F = /* @__PURE__ */ _(() => this._connection.inProgress ? {
      ...this._connection,
      to: lo(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return u(this.#F);
    }
    set connection(r) {
      Y(this.#F, r);
    }
    #W = /* @__PURE__ */ _(() => e.props.connectionMode ?? mr.Strict);
    get connectionMode() {
      return u(this.#W);
    }
    set connectionMode(r) {
      Y(this.#W, r);
    }
    #X = /* @__PURE__ */ _(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return u(this.#X);
    }
    set connectionRadius(r) {
      Y(this.#X, r);
    }
    #U = /* @__PURE__ */ _(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return u(this.#U);
    }
    set isValidConnection(r) {
      Y(this.#U, r);
    }
    #G = /* @__PURE__ */ _(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return u(this.#G);
    }
    set selectNodesOnDrag(r) {
      Y(this.#G, r);
    }
    #J = /* @__PURE__ */ _(() => e.props.defaultMarkerColor ?? "#b1b1b7");
    get defaultMarkerColor() {
      return u(this.#J);
    }
    set defaultMarkerColor(r) {
      Y(this.#J, r);
    }
    #Q = /* @__PURE__ */ _(() => Mv(e.edges, {
      defaultColor: this.defaultMarkerColor,
      id: this.flowId,
      defaultMarkerStart: this.defaultEdgeOptions.markerStart,
      defaultMarkerEnd: this.defaultEdgeOptions.markerEnd
    }));
    get markers() {
      return u(this.#Q);
    }
    set markers(r) {
      Y(this.#Q, r);
    }
    #ee = /* @__PURE__ */ _(() => e.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return u(this.#ee);
    }
    set onlyRenderVisibleElements(r) {
      Y(this.#ee, r);
    }
    #te = /* @__PURE__ */ _(() => e.props.onflowerror ?? Fu);
    get onerror() {
      return u(this.#te);
    }
    set onerror(r) {
      Y(this.#te, r);
    }
    #ne = /* @__PURE__ */ _(() => e.props.ondelete);
    get ondelete() {
      return u(this.#ne);
    }
    set ondelete(r) {
      Y(this.#ne, r);
    }
    #re = /* @__PURE__ */ _(() => e.props.onbeforedelete);
    get onbeforedelete() {
      return u(this.#re);
    }
    set onbeforedelete(r) {
      Y(this.#re, r);
    }
    #oe = /* @__PURE__ */ _(() => e.props.onbeforeconnect);
    get onbeforeconnect() {
      return u(this.#oe);
    }
    set onbeforeconnect(r) {
      Y(this.#oe, r);
    }
    #ie = /* @__PURE__ */ _(() => e.props.onconnect);
    get onconnect() {
      return u(this.#ie);
    }
    set onconnect(r) {
      Y(this.#ie, r);
    }
    #se = /* @__PURE__ */ _(() => e.props.onconnectstart);
    get onconnectstart() {
      return u(this.#se);
    }
    set onconnectstart(r) {
      Y(this.#se, r);
    }
    #ae = /* @__PURE__ */ _(() => e.props.onconnectend);
    get onconnectend() {
      return u(this.#ae);
    }
    set onconnectend(r) {
      Y(this.#ae, r);
    }
    #le = /* @__PURE__ */ _(() => e.props.onbeforereconnect);
    get onbeforereconnect() {
      return u(this.#le);
    }
    set onbeforereconnect(r) {
      Y(this.#le, r);
    }
    #ue = /* @__PURE__ */ _(() => e.props.onreconnect);
    get onreconnect() {
      return u(this.#ue);
    }
    set onreconnect(r) {
      Y(this.#ue, r);
    }
    #ce = /* @__PURE__ */ _(() => e.props.onreconnectstart);
    get onreconnectstart() {
      return u(this.#ce);
    }
    set onreconnectstart(r) {
      Y(this.#ce, r);
    }
    #de = /* @__PURE__ */ _(() => e.props.onreconnectend);
    get onreconnectend() {
      return u(this.#de);
    }
    set onreconnectend(r) {
      Y(this.#de, r);
    }
    #fe = /* @__PURE__ */ _(() => e.props.clickConnect ?? !0);
    get clickConnect() {
      return u(this.#fe);
    }
    set clickConnect(r) {
      Y(this.#fe, r);
    }
    #pe = /* @__PURE__ */ _(() => e.props.onclickconnectstart);
    get onclickconnectstart() {
      return u(this.#pe);
    }
    set onclickconnectstart(r) {
      Y(this.#pe, r);
    }
    #ge = /* @__PURE__ */ _(() => e.props.onclickconnectend);
    get onclickconnectend() {
      return u(this.#ge);
    }
    set onclickconnectend(r) {
      Y(this.#ge, r);
    }
    #he = /* @__PURE__ */ Ee(null);
    get clickConnectStartHandle() {
      return u(this.#he);
    }
    set clickConnectStartHandle(r) {
      Y(this.#he, r);
    }
    #ve = /* @__PURE__ */ _(() => e.props.onselectiondrag);
    get onselectiondrag() {
      return u(this.#ve);
    }
    set onselectiondrag(r) {
      Y(this.#ve, r);
    }
    #me = /* @__PURE__ */ _(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return u(this.#me);
    }
    set onselectiondragstart(r) {
      Y(this.#me, r);
    }
    #ye = /* @__PURE__ */ _(() => e.props.onselectiondragstop);
    get onselectiondragstop() {
      return u(this.#ye);
    }
    set onselectiondragstop(r) {
      Y(this.#ye, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await gv(
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
    _prefersDark = new w0("(prefers-color-scheme: dark)", e.props.colorModeSSR === "dark");
    #we = /* @__PURE__ */ _(() => e.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : e.props.colorMode ?? "light");
    get colorMode() {
      return u(this.#we);
    }
    set colorMode(r) {
      Y(this.#we, r);
    }
    constructor() {
      process.env.NODE_ENV === "development" && (tl(e.nodes, "nodes"), tl(e.edges, "edges"));
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = Ji, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new t();
}
function tl(e, t) {
  try {
    e && e.length > 0 && structuredClone(e[0]);
  } catch {
    console.warn(`Use $state.raw for ${t} to prevent performance issues.`);
  }
}
function k0(e) {
  const t = pn(Wr);
  if (!t)
    throw new Error(`In order to use ${e}() you need to wrap your component in a <SvelteFlowProvider />`);
  if (t.provider && typeof window == "object" && !Ol())
    throw new Error(`Use $derived(${e}()) to receive updates when values change.`);
}
function It() {
  const e = pn(Wr);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return process.env.NODE_ENV === "development" && k0("useStore"), e.getStore();
}
const Wr = Symbol();
function xc(e) {
  const t = $0(e);
  function n(L) {
    t.nodeTypes = {
      ...wc,
      ...L
    };
  }
  function r(L) {
    t.edgeTypes = {
      ...bc,
      ...L
    };
  }
  function o(L) {
    t.edges = Sv(L, t.edges);
  }
  const i = (L, S = !1) => {
    t.nodes = t.nodes.map((T) => {
      const b = L.get(T.id);
      return b ? { ...T, position: b.position, dragging: S } : T;
    });
  };
  function s(L) {
    const { changes: S, updatedInternals: T } = Iv(L, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin);
    if (!T)
      return;
    Tv(t.nodeLookup, t.parentLookup, {
      nodeOrigin: t.nodeOrigin,
      nodeExtent: t.nodeExtent
    }), t.fitViewQueued && t.resolveFitView();
    const b = /* @__PURE__ */ new Map();
    for (const P of S) {
      const E = t.nodeLookup.get(P.id)?.internals.userNode;
      if (!E)
        continue;
      const H = { ...E };
      switch (P.type) {
        case "dimensions": {
          const B = { ...H.measured, ...P.dimensions };
          P.setAttributes && (H.width = P.dimensions?.width ?? H.width, H.height = P.dimensions?.height ?? H.height), H.measured = B;
          break;
        }
        case "position":
          H.position = P.position ?? H.position;
          break;
      }
      b.set(P.id, H);
    }
    t.nodes = t.nodes.map((P) => b.get(P.id) ?? P);
  }
  function a(L) {
    const S = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = L, t.fitViewResolver = S, t.nodes = [...t.nodes], S.promise;
  }
  async function l(L, S, T) {
    const b = typeof T?.zoom < "u" ? T.zoom : t.maxZoom, P = t.panZoom;
    return P ? (await P.setViewport({
      x: t.width / 2 - L * b,
      y: t.height / 2 - S * b,
      zoom: b
    }, { duration: T?.duration, ease: T?.ease, interpolate: T?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function c(L, S) {
    const T = t.panZoom;
    return T ? T.scaleBy(L, S) : Promise.resolve(!1);
  }
  function d(L) {
    return c(1.2, L);
  }
  function p(L) {
    return c(1 / 1.2, L);
  }
  function f(L) {
    const S = t.panZoom;
    S && (S.setScaleExtent([L, t.maxZoom]), t.minZoom = L);
  }
  function g(L) {
    const S = t.panZoom;
    S && (S.setScaleExtent([t.minZoom, L]), t.maxZoom = L);
  }
  function h(L) {
    const S = t.panZoom;
    S && (S.setTranslateExtent(L), t.translateExtent = L);
  }
  function y(L) {
    t.panZoom?.setClickDistance(L);
  }
  function C(L, S = null) {
    let T = !1;
    const b = L.map((P) => (!S || S.has(P.id)) && P.selected ? (T = !0, { ...P, selected: !1 }) : P);
    return [T, b];
  }
  function w(L) {
    const S = L?.nodes ? new Set(L.nodes.map((B) => B.id)) : null, [T, b] = C(t.nodes, S);
    T && (t.nodes = b);
    const P = L?.edges ? new Set(L.edges.map((B) => B.id)) : null, [E, H] = C(t.edges, P);
    E && (t.edges = H);
  }
  function N(L) {
    const S = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((T) => {
      const b = L.includes(T.id), P = S && T.selected || b;
      if (T.selected !== P) {
        const E = t.nodeLookup.get(T.id);
        return E && (E.selected = P), T.selected = P, { ...T };
      }
      return T;
    }), S || w({ nodes: [] });
  }
  function x(L) {
    const S = t.multiselectionKeyPressed;
    t.edges = t.edges.map((T) => {
      const b = L.includes(T.id), P = S && T.selected || b;
      return T.selected !== P ? { ...T, selected: P } : T;
    }), S || w({ edges: [] });
  }
  function $(L, S, T) {
    const b = t.nodeLookup.get(L);
    if (!b) {
      console.warn("012", Un.error012(L));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, b.selected ? (S || b.selected && t.multiselectionKeyPressed) && (w({ nodes: [b], edges: [] }), requestAnimationFrame(() => T?.blur())) : N([L]);
  }
  function k(L) {
    const S = t.edgeLookup.get(L);
    if (!S) {
      console.warn("012", Un.error012(L));
      return;
    }
    (S.selectable || t.elementsSelectable && typeof S.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, S.selected ? S.selected && t.multiselectionKeyPressed && w({ nodes: [], edges: [S] }) : x([L]));
  }
  function M(L, S) {
    const { nodeExtent: T, snapGrid: b, nodeOrigin: P, nodeLookup: E, nodesDraggable: H, onerror: B } = t, D = /* @__PURE__ */ new Map(), R = b?.[0] ?? 5, F = b?.[1] ?? 5, X = L.x * R * S, Q = L.y * F * S;
    for (const j of E.values()) {
      if (!(j.selected && (j.draggable || H && typeof j.draggable > "u")))
        continue;
      let ce = {
        x: j.internals.positionAbsolute.x + X,
        y: j.internals.positionAbsolute.y + Q
      };
      b && (ce = pi(ce, b));
      const { position: te, positionAbsolute: fe } = Zu({
        nodeId: j.id,
        nextPosition: ce,
        nodeLookup: E,
        nodeExtent: T,
        nodeOrigin: P,
        onError: B
      });
      j.position = te, j.internals.positionAbsolute = fe, D.set(j.id, j);
    }
    i(D);
  }
  function A(L) {
    return Bv({
      delta: L,
      panZoom: t.panZoom,
      transform: [t.viewport.x, t.viewport.y, t.viewport.zoom],
      translateExtent: t.translateExtent,
      width: t.width,
      height: t.height
    });
  }
  const q = (L) => {
    t._connection = { ...L };
  };
  function W() {
    t._connection = Ji;
  }
  function K() {
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
    addSelectedNodes: N,
    addSelectedEdges: x,
    handleNodeSelection: $,
    handleEdgeSelection: k,
    moveSelectedNodes: M,
    panBy: A,
    updateConnection: q,
    cancelConnection: W,
    reset: K
  });
}
function C0(e, t) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: l, paneClickDistance: c, setPanZoomInstance: d, onDraggingChange: p, onTransformChange: f } = t, g = i0({
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
var _0 = /* @__PURE__ */ G('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function $c(e, t) {
  se(t, !0);
  let n = m(t, "store", 15), r = m(t, "panOnScrollMode", 23, () => Xt.Free), o = m(t, "preventScrolling", 7, !0), i = m(t, "zoomOnScroll", 7, !0), s = m(t, "zoomOnDoubleClick", 7, !0), a = m(t, "zoomOnPinch", 7, !0), l = m(t, "panOnDrag", 7, !0), c = m(t, "panOnScroll", 7, !1), d = m(t, "paneClickDistance", 7, 1), p = m(t, "onmovestart", 7), f = m(t, "onmove", 7), g = m(t, "onmoveend", 7), h = m(t, "oninit", 7), y = m(t, "children", 7), C = /* @__PURE__ */ _(() => n().panActivationKeyPressed || l()), w = /* @__PURE__ */ _(() => n().panActivationKeyPressed || c());
  const { viewport: N } = n();
  let x = !1;
  Ze(() => {
    !x && n().viewportInitialized && (h()?.(), x = !0);
  });
  var $ = _0(), k = I($);
  return Ye(k, y), z($), ot($, (M, A) => C0?.(M, A), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: N,
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
    panOnScroll: u(w),
    panOnDrag: u(C),
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
  })), V(e, $), ae({
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
      return c();
    },
    set panOnScroll(M = !1) {
      c(M), v();
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
re(
  $c,
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
var S0 = /* @__PURE__ */ G("<div><!></div>");
function kc(e, t) {
  se(t, !0);
  let n = m(t, "store", 15), r = m(t, "panOnDrag", 7, !0), o = m(t, "selectionOnDrag", 7), i = m(t, "onpaneclick", 7), s = m(t, "onpanecontextmenu", 7), a = m(t, "onselectionstart", 7), l = m(t, "onselectionend", 7), c = m(t, "children", 7), d, p = null, f = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ _(() => n().panActivationKeyPressed || r()), y = /* @__PURE__ */ _(() => n().selectionKeyPressed || n().selectionRect || o() && u(h) !== !0), C = /* @__PURE__ */ _(() => n().elementsSelectable && (u(y) || n().selectionRectMode === "user")), w = !1;
  function N(S) {
    if (w || n().connection.inProgress) {
      w = !1;
      return;
    }
    i()?.({ event: S }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0);
  }
  function x(S) {
    if (p = d?.getBoundingClientRect(), !n().elementsSelectable || !u(y) || S.button !== 0 || S.target !== d || !p)
      return;
    S.target?.setPointerCapture?.(S.pointerId);
    const { x: T, y: b } = Yt(S, p);
    n().unselectNodesAndEdges(), n(n().selectionRect = { width: 0, height: 0, startX: T, startY: b, x: T, y: b }, !0), a()?.(S);
  }
  function $(S) {
    if (!u(y) || !p || !n().selectionRect)
      return;
    w = !0;
    const T = Yt(S, p), { startX: b = 0, startY: P = 0 } = n().selectionRect, E = {
      ...n().selectionRect,
      x: T.x < b ? T.x : b,
      y: T.y < P ? T.y : P,
      width: Math.abs(T.x - b),
      height: Math.abs(T.y - P)
    }, H = f, B = g;
    f = new Set(Is(
      n().nodeLookup,
      E,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === Yo.Partial,
      !0
    ).map((R) => R.id));
    const D = n().defaultEdgeOptions.selectable ?? !0;
    g = /* @__PURE__ */ new Set();
    for (const R of f) {
      const F = n().connectionLookup.get(R);
      if (F)
        for (const { edgeId: X } of F.values()) {
          const Q = n().edgeLookup.get(X);
          Q && (Q.selectable ?? D) && g.add(X);
        }
    }
    ol(H, f) || n(n().nodes = n().nodes.map(rl(f)), !0), ol(B, g) || n(n().edges = n().edges.map(rl(g)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = E, !0);
  }
  function k(S) {
    S.button === 0 && (S.target?.releasePointerCapture?.(S.pointerId), !u(y) && n().selectionRectMode === "user" && S.target === d && N?.(S), n(n().selectionRect = null, !0), f.size > 0 && n(n().selectionRectMode = "nodes", !0), n().selectionKeyPressed && (w = !1), l()?.(S));
  }
  const M = (S) => {
    if (Array.isArray(u(h)) && u(h).includes(2)) {
      S.preventDefault();
      return;
    }
    s()?.({ event: S });
  };
  var A = S0();
  let q;
  var W = /* @__PURE__ */ _(() => u(C) ? void 0 : nl(N, d));
  A.__click = function(...S) {
    u(W)?.apply(this, S);
  }, A.__pointerdown = function(...S) {
    (u(C) ? x : void 0)?.apply(this, S);
  }, A.__pointermove = function(...S) {
    (u(C) ? $ : void 0)?.apply(this, S);
  }, A.__pointerup = function(...S) {
    (u(C) ? k : void 0)?.apply(this, S);
  };
  var K = /* @__PURE__ */ _(() => nl(M, d));
  A.__contextmenu = function(...S) {
    u(K)?.apply(this, S);
  };
  var L = I(A);
  return Ye(L, c), z(A), _t(A, (S) => d = S, () => d), ke((S) => q = yt(A, 1, "svelte-flow__pane svelte-flow__container", null, q, S), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: u(y)
    })
  ]), V(e, A), ae({
    get store() {
      return n();
    },
    set store(S) {
      n(S), v();
    },
    get panOnDrag() {
      return r();
    },
    set panOnDrag(S = !0) {
      r(S), v();
    },
    get selectionOnDrag() {
      return o();
    },
    set selectionOnDrag(S) {
      o(S), v();
    },
    get onpaneclick() {
      return i();
    },
    set onpaneclick(S) {
      i(S), v();
    },
    get onpanecontextmenu() {
      return s();
    },
    set onpanecontextmenu(S) {
      s(S), v();
    },
    get onselectionstart() {
      return a();
    },
    set onselectionstart(S) {
      a(S), v();
    },
    get onselectionend() {
      return l();
    },
    set onselectionend(S) {
      l(S), v();
    },
    get children() {
      return c();
    },
    set children(S) {
      c(S), v();
    }
  });
}
wn([
  "click",
  "pointerdown",
  "pointermove",
  "pointerup",
  "contextmenu"
]);
re(
  kc,
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
var E0 = /* @__PURE__ */ G('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function Cc(e, t) {
  se(t, !0);
  let n = m(t, "store", 15), r = m(t, "children", 7);
  var o = E0();
  let i;
  var s = I(o);
  return Ye(s, r), z(o), ke((a) => i = dt(o, "", i, a), [
    () => ({
      transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
    })
  ]), V(e, o), ae({
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
re(Cc, { store: {}, children: {} }, [], [], !0);
function _c(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = Kv({
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
var P0 = /* @__PURE__ */ G('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-62ze0y"> </div>'), N0 = /* @__PURE__ */ G('<div class="a11y-hidden svelte-62ze0y"> </div> <div class="a11y-hidden svelte-62ze0y"> </div> <!>', 1);
const L0 = {
  hash: "svelte-62ze0y",
  code: ".a11y-hidden.svelte-62ze0y {display:none;}.a11y-live-msg.svelte-62ze0y {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function Sc(e, t) {
  se(t, !0), He(e, L0);
  let n = m(t, "store", 7);
  var r = N0(), o = le(r), i = I(o, !0);
  z(o);
  var s = O(o, 2), a = I(s, !0);
  z(s);
  var l = O(s, 2);
  {
    var c = (d) => {
      var p = P0(), f = I(p, !0);
      z(p), ke(() => {
        we(p, "id", `${M0}-${n().flowId}`), ze(f, n().ariaLiveMessage);
      }), V(d, p);
    };
    ie(l, (d) => {
      n().disableKeyboardA11y || d(c);
    });
  }
  return ke(() => {
    we(o, "id", `${Ec}-${n().flowId}`), ze(i, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), we(s, "id", `${Pc}-${n().flowId}`), ze(a, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), V(e, r), ae({
    get store() {
      return n();
    },
    set store(d) {
      n(d), v();
    }
  });
}
re(Sc, { store: {} }, [], [], !0);
const Ec = "svelte-flow__node-desc", Pc = "svelte-flow__edge-desc", M0 = "svelte-flow__aria-live";
var V0 = /* @__PURE__ */ G("<div><!></div>");
function Nc(e, t) {
  se(t, !0);
  let n = m(t, "store", 15), r = m(t, "node", 7), o = m(t, "resizeObserver", 7), i = m(t, "nodeClickDistance", 7), s = m(t, "onnodeclick", 7), a = m(t, "onnodedrag", 7), l = m(t, "onnodedragstart", 7), c = m(t, "onnodedragstop", 7), d = m(t, "onnodepointerenter", 7), p = m(t, "onnodepointerleave", 7), f = m(t, "onnodepointermove", 7), g = m(t, "onnodecontextmenu", 7), h = /* @__PURE__ */ _(() => lt(r().data, () => ({}), !0)), y = /* @__PURE__ */ _(() => lt(r().selected, !1)), C = /* @__PURE__ */ _(() => r().draggable), w = /* @__PURE__ */ _(() => r().selectable), N = /* @__PURE__ */ _(() => lt(r().deletable, !0)), x = /* @__PURE__ */ _(() => r().connectable), $ = /* @__PURE__ */ _(() => r().focusable), k = /* @__PURE__ */ _(() => lt(r().hidden, !1)), M = /* @__PURE__ */ _(() => lt(r().dragging, !1)), A = /* @__PURE__ */ _(() => lt(r().style, "")), q = /* @__PURE__ */ _(() => r().class), W = /* @__PURE__ */ _(() => lt(r().type, "default")), K = /* @__PURE__ */ _(() => r().parentId), L = /* @__PURE__ */ _(() => r().sourcePosition), S = /* @__PURE__ */ _(() => r().targetPosition), T = /* @__PURE__ */ _(() => lt(r().measured, () => ({ width: 0, height: 0 }), !0).width), b = /* @__PURE__ */ _(() => lt(r().measured, () => ({ width: 0, height: 0 }), !0).height), P = /* @__PURE__ */ _(() => r().initialWidth), E = /* @__PURE__ */ _(() => r().initialHeight), H = /* @__PURE__ */ _(() => r().width), B = /* @__PURE__ */ _(() => r().height), D = /* @__PURE__ */ _(() => r().dragHandle), R = /* @__PURE__ */ _(() => lt(r().internals.z, 0)), F = /* @__PURE__ */ _(() => r().internals.positionAbsolute.x), X = /* @__PURE__ */ _(() => r().internals.positionAbsolute.y), Q = /* @__PURE__ */ _(() => r().internals.userNode), { id: j } = r(), ce = /* @__PURE__ */ _(() => u(C) ?? n().nodesDraggable), te = /* @__PURE__ */ _(() => u(w) ?? n().elementsSelectable), fe = /* @__PURE__ */ _(() => u(x) ?? n().nodesConnectable), U = /* @__PURE__ */ _(() => Wu(r())), xe = /* @__PURE__ */ _(() => !!r().internals.handleBounds), de = /* @__PURE__ */ _(() => u(U) && u(xe)), oe = /* @__PURE__ */ _(() => u($) ?? n().nodesFocusable);
  function ee(pe) {
    return n().parentLookup.has(pe);
  }
  let ge = /* @__PURE__ */ _(() => ee(j)), J = /* @__PURE__ */ Ee(null), ye = null, ne = u(W), Ce = u(L), Z = u(S), Je = /* @__PURE__ */ _(() => n().nodeTypes[u(W)] ?? Ys), ue = /* @__PURE__ */ _(() => n().ariaLabelConfig);
  fr("svelteflow__node_connectable", {
    get value() {
      return u(fe);
    }
  }), fr("svelteflow__node_id", j), process.env.NODE_ENV === "development" && Ze(() => {
    n().nodeTypes[u(W)] || console.warn("003", Un.error003(u(W)));
  });
  let $e = /* @__PURE__ */ _(() => {
    const pe = u(T) === void 0 ? u(H) ?? u(P) : u(H), Ke = u(b) === void 0 ? u(B) ?? u(E) : u(B);
    if (!(pe === void 0 && Ke === void 0 && u(A) === void 0))
      return `${u(A)};${pe ? `width:${Qt(pe)};` : ""}${Ke ? `height:${Qt(Ke)};` : ""}`;
  });
  Ze(() => {
    (u(W) !== ne || u(L) !== Ce || u(S) !== Z) && u(J) !== null && requestAnimationFrame(() => {
      u(J) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[j, { id: j, nodeElement: u(J), force: !0 }]]));
    }), ne = u(W), Ce = u(L), Z = u(S);
  }), Ze(() => {
    o() && (!u(de) || u(J) !== ye) && (ye && o().unobserve(ye), u(J) && o().observe(u(J)), ye = u(J));
  }), oi(() => {
    ye && o()?.unobserve(ye);
  });
  function _e(pe) {
    u(te) && (!n().selectNodesOnDrag || !u(ce) || n().nodeDragThreshold > 0) && n().handleNodeSelection(j), s()?.({ node: u(Q), event: pe });
  }
  function Te(pe) {
    if (!(Gu(pe) || n().disableKeyboardA11y))
      if (qu.includes(pe.key) && u(te)) {
        const Ke = pe.key === "Escape";
        n().handleNodeSelection(j, Ke, u(J));
      } else u(ce) && r().selected && Object.prototype.hasOwnProperty.call(Wo, pe.key) && (pe.preventDefault(), n(
        n().ariaLiveMessage = u(ue)["node.a11yDescription.ariaLiveMessage"]({
          direction: pe.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(Wo[pe.key], pe.shiftKey ? 4 : 1));
  }
  const ft = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !u(J)?.matches(":focus-visible"))
      return;
    const { width: pe, height: Ke, viewport: at } = n();
    Is(/* @__PURE__ */ new Map([[j, r()]]), { x: 0, y: 0, width: pe, height: Ke }, [at.x, at.y, at.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: at.zoom });
  };
  var Et = De(), Ve = le(Et);
  {
    var Xe = (pe) => {
      var Ke = V0();
      Ge(
        Ke,
        (Fe, Pt) => ({
          "data-id": j,
          class: [
            "svelte-flow__node",
            `svelte-flow__node-${u(W)}`,
            u(q)
          ],
          style: u($e),
          onclick: _e,
          onpointerenter: d() ? (Qe) => d()({ node: u(Q), event: Qe }) : void 0,
          onpointerleave: p() ? (Qe) => p()({ node: u(Q), event: Qe }) : void 0,
          onpointermove: f() ? (Qe) => f()({ node: u(Q), event: Qe }) : void 0,
          oncontextmenu: g() ? (Qe) => g()({ node: u(Q), event: Qe }) : void 0,
          onkeydown: u(oe) ? Te : void 0,
          onfocus: u(oe) ? ft : void 0,
          tabIndex: u(oe) ? 0 : void 0,
          role: r().ariaRole ?? (u(oe) ? "group" : void 0),
          "aria-roledescription": "node",
          "aria-describedby": n().disableKeyboardA11y ? void 0 : `${Ec}-${n().flowId}`,
          ...r().domAttributes,
          [_n]: Fe,
          [Kt]: Pt
        }),
        [
          () => ({
            dragging: u(M),
            selected: u(y),
            draggable: u(ce),
            connectable: u(fe),
            selectable: u(te),
            nopan: u(ce),
            parent: u(ge)
          }),
          () => ({
            "z-index": u(R),
            transform: `translate(${u(F) ?? ""}px, ${u(X) ?? ""}px)`,
            visibility: u(U) ? "visible" : "hidden"
          })
        ]
      );
      var at = I(Ke);
      Ns(at, () => u(Je), (Fe, Pt) => {
        Pt(Fe, {
          get data() {
            return u(h);
          },
          get id() {
            return j;
          },
          get selected() {
            return u(y);
          },
          get selectable() {
            return u(te);
          },
          get deletable() {
            return u(N);
          },
          get sourcePosition() {
            return u(L);
          },
          get targetPosition() {
            return u(S);
          },
          get zIndex() {
            return u(R);
          },
          get dragging() {
            return u(M);
          },
          get draggable() {
            return u(ce);
          },
          get dragHandle() {
            return u(D);
          },
          get parentId() {
            return u(K);
          },
          get type() {
            return u(W);
          },
          get isConnectable() {
            return u(fe);
          },
          get positionAbsoluteX() {
            return u(F);
          },
          get positionAbsoluteY() {
            return u(X);
          },
          get width() {
            return u(H);
          },
          get height() {
            return u(B);
          }
        });
      }), z(Ke), ot(Ke, (Fe, Pt) => _c?.(Fe, Pt), () => ({
        nodeId: j,
        isSelectable: u(te),
        disabled: !u(ce),
        handleSelector: u(D),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (Fe, Pt, Qe, qt) => {
          a()?.({ event: Fe, targetNode: Qe, nodes: qt });
        },
        onDragStart: (Fe, Pt, Qe, qt) => {
          l()?.({ event: Fe, targetNode: Qe, nodes: qt });
        },
        onDragStop: (Fe, Pt, Qe, qt) => {
          c()?.({ event: Fe, targetNode: Qe, nodes: qt });
        },
        store: n()
      })), _t(Ke, (Fe) => Y(J, Fe), () => u(J)), V(pe, Ke);
    };
    ie(Ve, (pe) => {
      u(k) || pe(Xe);
    });
  }
  return V(e, Et), ae({
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
      return c();
    },
    set onnodedragstop(pe) {
      c(pe), v();
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
re(
  Nc,
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
var D0 = /* @__PURE__ */ G('<div class="svelte-flow__nodes"></div>');
function Lc(e, t) {
  se(t, !0);
  let n = m(t, "store", 15), r = m(t, "nodeClickDistance", 7), o = m(t, "onnodeclick", 7), i = m(t, "onnodecontextmenu", 7), s = m(t, "onnodepointerenter", 7), a = m(t, "onnodepointermove", 7), l = m(t, "onnodepointerleave", 7), c = m(t, "onnodedrag", 7), d = m(t, "onnodedragstart", 7), p = m(t, "onnodedragstop", 7);
  const f = typeof ResizeObserver > "u" ? null : new ResizeObserver((h) => {
    const y = /* @__PURE__ */ new Map();
    h.forEach((C) => {
      const w = C.target.getAttribute("data-id");
      y.set(w, { id: w, nodeElement: C.target, force: !0 });
    }), n().updateNodeInternals(y);
  });
  oi(() => {
    f?.disconnect();
  });
  var g = D0();
  return st(g, 21, () => n().visible.nodes.values(), (h) => h.id, (h, y) => {
    Nc(h, {
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
      set store(C) {
        n(C);
      }
    });
  }), z(g), V(e, g), ae({
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
  Lc,
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
var T0 = /* @__PURE__ */ he('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function Mc(e, t) {
  se(t, !0);
  const n = m(t, "edge", 7), r = m(t, "store", 15), o = m(t, "onedgeclick", 7), i = m(t, "onedgecontextmenu", 7), s = m(t, "onedgepointerenter", 7), a = m(t, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ _(() => n().source), c = /* @__PURE__ */ _(() => n().target), d = /* @__PURE__ */ _(() => n().sourceX), p = /* @__PURE__ */ _(() => n().sourceY), f = /* @__PURE__ */ _(() => n().targetX), g = /* @__PURE__ */ _(() => n().targetY), h = /* @__PURE__ */ _(() => n().sourcePosition), y = /* @__PURE__ */ _(() => n().targetPosition), C = /* @__PURE__ */ _(() => lt(n().animated, !1)), w = /* @__PURE__ */ _(() => lt(n().selected, !1)), N = /* @__PURE__ */ _(() => n().label), x = /* @__PURE__ */ _(() => n().labelStyle), $ = /* @__PURE__ */ _(() => lt(n().data, () => ({}), !0)), k = /* @__PURE__ */ _(() => n().style), M = /* @__PURE__ */ _(() => n().interactionWidth), A = /* @__PURE__ */ _(() => lt(n().type, "default")), q = /* @__PURE__ */ _(() => n().sourceHandle), W = /* @__PURE__ */ _(() => n().targetHandle), K = /* @__PURE__ */ _(() => n().markerStart), L = /* @__PURE__ */ _(() => n().markerEnd), S = /* @__PURE__ */ _(() => n().selectable), T = /* @__PURE__ */ _(() => n().focusable), b = /* @__PURE__ */ _(() => lt(n().deletable, !0)), P = /* @__PURE__ */ _(() => n().hidden), E = /* @__PURE__ */ _(() => n().zIndex), H = /* @__PURE__ */ _(() => n().class), B = /* @__PURE__ */ _(() => n().ariaLabel), D = null;
  const { id: R } = n();
  fr("svelteflow__edge_id", R);
  let F = /* @__PURE__ */ _(() => u(S) ?? r().elementsSelectable), X = /* @__PURE__ */ _(() => u(T) ?? r().edgesFocusable), Q = /* @__PURE__ */ _(() => r().edgeTypes[u(A)] ?? js), j = /* @__PURE__ */ _(() => u(K) ? `url('#${es(u(K), r().flowId)}')` : void 0), ce = /* @__PURE__ */ _(() => u(L) ? `url('#${es(u(L), r().flowId)}')` : void 0);
  function te(ee) {
    const ge = r().edgeLookup.get(R);
    ge && (u(F) && r().handleEdgeSelection(R), o()?.({ event: ee, edge: ge }));
  }
  function fe(ee, ge) {
    const J = r().edgeLookup.get(R);
    J && ge({ event: ee, edge: J });
  }
  function U(ee) {
    if (!r().disableKeyboardA11y && qu.includes(ee.key) && u(F)) {
      const { unselectNodesAndEdges: ge, addSelectedEdges: J } = r();
      ee.key === "Escape" ? (D?.blur(), ge({ edges: [n()] })) : J([R]);
    }
  }
  var xe = De(), de = le(xe);
  {
    var oe = (ee) => {
      var ge = T0();
      let J;
      var ye = I(ge);
      Ge(
        ye,
        (Ce) => ({
          class: ["svelte-flow__edge", u(H)],
          "data-id": R,
          onclick: te,
          oncontextmenu: i() ? (Z) => {
            fe(Z, i());
          } : void 0,
          onpointerenter: s() ? (Z) => {
            fe(Z, s());
          } : void 0,
          onpointerleave: a() ? (Z) => {
            fe(Z, a());
          } : void 0,
          "aria-label": u(B) === null ? void 0 : u(B) ? u(B) : `Edge from ${u(l)} to ${u(c)}`,
          "aria-describedby": u(X) ? `${Pc}-${r().flowId}` : void 0,
          role: n().ariaRole ?? (u(X) ? "group" : "img"),
          "aria-roledescription": "edge",
          onkeydown: u(X) ? U : void 0,
          tabindex: u(X) ? 0 : void 0,
          ...n().domAttributes,
          [_n]: Ce
        }),
        [
          () => ({
            animated: u(C),
            selected: u(w),
            selectable: u(F)
          })
        ]
      );
      var ne = I(ye);
      Ns(ne, () => u(Q), (Ce, Z) => {
        Z(Ce, {
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
            return u(C);
          },
          get selected() {
            return u(w);
          },
          get label() {
            return u(N);
          },
          get labelStyle() {
            return u(x);
          },
          get data() {
            return u($);
          },
          get style() {
            return u(k);
          },
          get interactionWidth() {
            return u(M);
          },
          get selectable() {
            return u(F);
          },
          get deletable() {
            return u(b);
          },
          get type() {
            return u(A);
          },
          get sourceHandleId() {
            return u(q);
          },
          get targetHandleId() {
            return u(W);
          },
          get markerStart() {
            return u(j);
          },
          get markerEnd() {
            return u(ce);
          }
        });
      }), z(ye), _t(ye, (Ce) => D = Ce, () => D), z(ge), ke((Ce) => J = dt(ge, "", J, Ce), [() => ({ "z-index": u(E) })]), V(ee, ge);
    };
    ie(de, (ee) => {
      u(P) || ee(oe);
    });
  }
  return V(e, xe), ae({
    get edge() {
      return n();
    },
    set edge(ee) {
      n(ee), v();
    },
    get store() {
      return r();
    },
    set store(ee) {
      r(ee), v();
    },
    get onedgeclick() {
      return o();
    },
    set onedgeclick(ee) {
      o(ee), v();
    },
    get onedgecontextmenu() {
      return i();
    },
    set onedgecontextmenu(ee) {
      i(ee), v();
    },
    get onedgepointerenter() {
      return s();
    },
    set onedgepointerenter(ee) {
      s(ee), v();
    },
    get onedgepointerleave() {
      return a();
    },
    set onedgepointerleave(ee) {
      a(ee), v();
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
kf();
var H0 = /* @__PURE__ */ he("<defs></defs>");
function Vc(e, t) {
  se(t, !1);
  const n = It();
  uu();
  var r = H0();
  st(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    Dc(o, Ie(() => u(i)));
  }), z(r), V(e, r), ae();
}
re(Vc, {}, [], [], !0);
var O0 = /* @__PURE__ */ he('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), A0 = /* @__PURE__ */ he('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), z0 = /* @__PURE__ */ he('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Dc(e, t) {
  se(t, !0);
  let n = m(t, "id", 7), r = m(t, "type", 7), o = m(t, "width", 7, 12.5), i = m(t, "height", 7, 12.5), s = m(t, "markerUnits", 7, "strokeWidth"), a = m(t, "orient", 7, "auto-start-reverse"), l = m(t, "color", 7), c = m(t, "strokeWidth", 7);
  var d = z0(), p = I(d);
  {
    var f = (h) => {
      var y = O0();
      ke(() => {
        we(y, "stroke", l()), we(y, "stroke-width", c());
      }), V(h, y);
    }, g = (h, y) => {
      {
        var C = (w) => {
          var N = A0();
          ke(() => {
            we(N, "stroke", l()), we(N, "stroke-width", c()), we(N, "fill", l());
          }), V(w, N);
        };
        ie(
          h,
          (w) => {
            r() === Yr.ArrowClosed && w(C);
          },
          y
        );
      }
    };
    ie(p, (h) => {
      r() === Yr.Arrow ? h(f) : h(g, !1);
    });
  }
  return z(d), ke(() => {
    we(d, "id", n()), we(d, "markerWidth", `${o()}`), we(d, "markerHeight", `${i()}`), we(d, "markerUnits", s()), we(d, "orient", a());
  }), V(e, d), ae({
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
var I0 = /* @__PURE__ */ G('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function Tc(e, t) {
  se(t, !0);
  let n = m(t, "store", 15), r = m(t, "onedgeclick", 7), o = m(t, "onedgecontextmenu", 7), i = m(t, "onedgepointerenter", 7), s = m(t, "onedgepointerleave", 7);
  var a = I0(), l = I(a), c = I(l);
  Vc(c, {}), z(l);
  var d = O(l, 2);
  return st(d, 17, () => n().visible.edges.values(), (p) => p.id, (p, f) => {
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
  }), z(a), V(e, a), ae({
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
  Tc,
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
var B0 = /* @__PURE__ */ G('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const q0 = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function Fs(e, t) {
  se(t, !0), He(e, q0);
  let n = m(t, "x", 7, 0), r = m(t, "y", 7, 0), o = m(t, "width", 7, 0), i = m(t, "height", 7, 0), s = m(t, "isVisible", 7, !0);
  var a = De(), l = le(a);
  {
    var c = (d) => {
      var p = B0();
      let f;
      ke((g) => f = dt(p, "", f, g), [
        () => ({
          width: typeof o() == "string" ? o() : Qt(o()),
          height: typeof i() == "string" ? i() : Qt(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), V(d, p);
    };
    ie(l, (d) => {
      s() && d(c);
    });
  }
  return V(e, a), ae({
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
re(Fs, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
function R0(e, t, n) {
  const r = t().nodes.filter((o) => o.selected);
  n()?.({ nodes: r, event: e });
}
function Z0(e, t, n) {
  const r = t().nodes.filter((o) => o.selected);
  n()?.({ nodes: r, event: e });
}
var K0 = /* @__PURE__ */ G("<div><!></div>");
const Y0 = {
  hash: "svelte-16qgzgd",
  code: ".svelte-flow__selection-wrapper.svelte-16qgzgd {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}"
};
function Hc(e, t) {
  se(t, !0), He(e, Y0);
  let n = m(t, "store", 15), r = m(t, "onnodedrag", 7), o = m(t, "onnodedragstart", 7), i = m(t, "onnodedragstop", 7), s = m(t, "onselectionclick", 7), a = m(t, "onselectioncontextmenu", 7), l = /* @__PURE__ */ Ee(void 0);
  Ze(() => {
    n().disableKeyboardA11y || u(l)?.focus({ preventScroll: !0 });
  });
  let c = /* @__PURE__ */ _(() => n().selectionRectMode === "nodes" ? (n().nodes, ao(n().nodeLookup, { filter: (h) => !!h.selected })) : null);
  function d(h) {
    Object.prototype.hasOwnProperty.call(Wo, h.key) && (h.preventDefault(), n().moveSelectedNodes(Wo[h.key], h.shiftKey ? 4 : 1));
  }
  var p = De(), f = le(p);
  {
    var g = (h) => {
      var y = K0();
      y.__contextmenu = [R0, n, a], y.__click = [Z0, n, s], y.__keydown = function(...N) {
        (n().disableKeyboardA11y ? void 0 : d)?.apply(this, N);
      };
      let C;
      var w = I(y);
      Fs(w, { width: "100%", height: "100%", x: 0, y: 0 }), z(y), ot(y, (N, x) => _c?.(N, x), () => ({
        disabled: !1,
        store: n(),
        onDrag: (N, x, $, k) => {
          r()?.({ event: N, targetNode: null, nodes: k });
        },
        onDragStart: (N, x, $, k) => {
          o()?.({ event: N, targetNode: null, nodes: k });
        },
        onDragStop: (N, x, $, k) => {
          i()?.({ event: N, targetNode: null, nodes: k });
        }
      })), _t(y, (N) => Y(l, N), () => u(l)), ke(
        (N) => {
          yt(y, 1, bn(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-16qgzgd"), we(y, "role", n().disableKeyboardA11y ? void 0 : "button"), we(y, "tabindex", n().disableKeyboardA11y ? void 0 : -1), C = dt(y, "", C, N);
        },
        [
          () => ({
            width: Qt(u(c).width),
            height: Qt(u(c).height),
            transform: `translate(${u(c).x ?? ""}px, ${u(c).y ?? ""}px)`
          })
        ]
      ), V(h, y);
    };
    ie(f, (h) => {
      n().selectionRectMode === "nodes" && u(c) && an(u(c).x) && an(u(c).y) && h(g);
    });
  }
  return V(e, p), ae({
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
wn(["contextmenu", "click", "keydown"]);
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
function j0(e) {
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
function Rt(e, t) {
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
      }, { modifier: f, key: g, callback: h, preventDefault: y, enabled: C } = p;
      if (C) {
        if (a.key !== g) continue;
        if (f === null || f === !1) {
          if (c !== 0) continue;
        } else if (f !== void 0 && f?.[0]?.length > 0) {
          const N = Array.isArray(f) ? f : [f];
          let x = !1;
          for (const $ of N)
            if ((Array.isArray($) ? $ : [$]).reduce(
              (k, M) => k | j0(M),
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
  return n && (s = Bi(e, o, i)), {
    update: (a) => {
      const { enabled: l = !0, type: c = "keydown" } = a;
      n && (!l || o !== c) ? s?.() : !n && l && (s = Bi(e, c, i)), n = l, o = c, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function nt() {
  const e = /* @__PURE__ */ _(It), t = (i) => {
    const s = Qa(i) ? i : u(e).nodeLookup.get(i.id), a = s.parentId ? yv(s.position, s.measured, s.parentId, u(e).nodeLookup, u(e).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return wr(l);
  };
  function n(i, s, a = { replace: !1 }) {
    u(e).nodes = et(() => u(e).nodes).map((l) => {
      if (l.id === i) {
        const c = typeof s == "function" ? s(l) : s;
        return a?.replace && Qa(c) ? c : { ...l, ...c };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    u(e).edges = et(() => u(e).edges).map((l) => {
      if (l.id === i) {
        const c = typeof s == "function" ? s(l) : s;
        return a.replace && c0(c) ? c : { ...l, ...c };
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
    getNodes: (i) => i === void 0 ? u(e).nodes : il(u(e).nodeLookup, i),
    getEdge: (i) => u(e).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? u(e).edges : il(u(e).edgeLookup, i),
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
      const a = Bs(i, u(e).width, u(e).height, u(e).minZoom, u(e).maxZoom, s?.padding ?? 0.1);
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
        const f = wr(p), g = jr(f, c);
        return s && g > 0 || g >= f.width * f.height || g >= c.width * c.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const l = qa(i) ? i : t(i);
      if (!l)
        return !1;
      const c = jr(l, s);
      return a && c > 0 || c >= l.width * l.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: l } = await hv({
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
      const { x: s, y: a, zoom: l } = u(e).viewport, { x: c, y: d } = u(e).domNode.getBoundingClientRect(), p = Fo(i, [s, a, l]);
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
    getNodesBounds: (i) => dv(i, {
      nodeLookup: u(e).nodeLookup,
      nodeOrigin: u(e).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(u(e).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
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
function Oc(e, t) {
  se(t, !0);
  let n = m(t, "store", 15), r = m(t, "selectionKey", 7, "Shift"), o = m(t, "multiSelectionKey", 23, () => ir() ? "Meta" : "Control"), i = m(t, "deleteKey", 7, "Backspace"), s = m(t, "panActivationKey", 7, " "), a = m(t, "zoomActivationKey", 23, () => ir() ? "Meta" : "Control"), { deleteElements: l } = nt();
  function c(y) {
    return y !== null && typeof y == "object";
  }
  function d(y) {
    return c(y) ? y.modifier || [] : [];
  }
  function p(y) {
    return y == null ? "" : c(y) ? y.key : y;
  }
  function f(y, C) {
    return (Array.isArray(y) ? y : [y]).map((w) => {
      const N = p(w);
      return {
        key: N,
        modifier: d(w),
        enabled: N !== null,
        callback: C
      };
    });
  }
  function g() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  async function h() {
    const y = n().nodes.filter((x) => x.selected), C = n().edges.filter((x) => x.selected), { deletedNodes: w, deletedEdges: N } = await l({ nodes: y, edges: C });
    (w.length > 0 || N.length > 0) && n().ondelete?.({ nodes: w, edges: N });
  }
  return da("blur", pt, g), da("contextmenu", pt, g), ot(pt, (y, C) => Rt?.(y, C), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), ot(pt, (y, C) => Rt?.(y, C), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), ot(pt, (y, C) => Rt?.(y, C), () => ({
    trigger: f(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), ot(pt, (y, C) => Rt?.(y, C), () => ({
    trigger: f(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), ot(pt, (y, C) => Rt?.(y, C), () => ({
    trigger: f(i(), (y) => {
      !(y.originalEvent.ctrlKey || y.originalEvent.metaKey || y.originalEvent.shiftKey) && !Gu(y.originalEvent) && (n(n().deleteKeyPressed = !0, !0), h());
    }),
    type: "keydown"
  })), ot(pt, (y, C) => Rt?.(y, C), () => ({
    trigger: f(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), ot(pt, (y, C) => Rt?.(y, C), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), ot(pt, (y, C) => Rt?.(y, C), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), ot(pt, (y, C) => Rt?.(y, C), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), ot(pt, (y, C) => Rt?.(y, C), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), ae({
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
    set multiSelectionKey(y = ir() ? "Meta" : "Control") {
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
    set zoomActivationKey(y = ir() ? "Meta" : "Control") {
      a(y), v();
    }
  });
}
re(
  Oc,
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
var F0 = /* @__PURE__ */ he('<path fill="none" class="svelte-flow__connection-path"></path>'), W0 = /* @__PURE__ */ he('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function Ac(e, t) {
  se(t, !0);
  let n = m(t, "store", 15), r = m(t, "type", 7), o = m(t, "containerStyle", 7), i = m(t, "style", 7), s = m(t, "LineComponent", 7), a = /* @__PURE__ */ _(() => {
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
        const [f] = Qu(p);
        return f;
      }
      case on.Straight: {
        const [f] = tc(p);
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
  var l = De(), c = le(l);
  {
    var d = (p) => {
      var f = W0(), g = I(f), h = I(g);
      {
        var y = (w) => {
          var N = De(), x = le(N);
          Ns(x, s, ($, k) => {
            k($, {});
          }), V(w, N);
        }, C = (w) => {
          var N = F0();
          ke(() => {
            we(N, "d", u(a)), dt(N, i());
          }), V(w, N);
        };
        ie(h, (w) => {
          s() ? w(y) : w(C, !1);
        });
      }
      z(g), z(f), ke(
        (w) => {
          we(f, "width", n().width), we(f, "height", n().height), dt(f, o()), yt(g, 0, w);
        },
        [
          () => bn([
            "svelte-flow__connection",
            uv(n().connection.isValid)
          ])
        ]
      ), V(p, f);
    };
    ie(c, (p) => {
      n().connection.inProgress && p(d);
    });
  }
  return V(e, l), ae({
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
  Ac,
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
var X0 = /* @__PURE__ */ G("<div><!></div>");
function co(e, t) {
  se(t, !0);
  let n = m(t, "position", 7, "top-right"), r = m(t, "style", 7), o = m(t, "class", 7), i = m(t, "children", 7), s = /* @__PURE__ */ Ae(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "position",
    "style",
    "class",
    "children"
  ]), a = /* @__PURE__ */ _(() => `${n()}`.split("-"));
  var l = X0();
  Ge(l, (d) => ({ class: d, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...u(a)]
  ]);
  var c = I(l);
  return Ye(c, () => i() ?? tt), z(l), V(e, l), ae({
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
var U0 = /* @__PURE__ */ G('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function zc(e, t) {
  se(t, !0);
  let n = m(t, "proOptions", 7), r = m(t, "position", 7, "bottom-right");
  var o = De(), i = le(o);
  {
    var s = (a) => {
      co(a, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, c) => {
          var d = U0();
          V(l, d);
        },
        $$slots: { default: !0 }
      });
    };
    ie(i, (a) => {
      n()?.hideAttribution || a(s);
    });
  }
  return V(e, o), ae({
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
re(zc, { proOptions: {}, position: {} }, [], [], !0);
var G0 = /* @__PURE__ */ G("<div><!></div>");
const J0 = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function Ic(e, t) {
  se(t, !0), He(e, J0);
  let n = m(t, "width", 7), r = m(t, "height", 7), o = m(t, "colorMode", 7), i = m(t, "domNode", 15), s = m(t, "clientWidth", 15), a = m(t, "clientHeight", 15), l = m(t, "children", 7), c = m(t, "rest", 7), d = /* @__PURE__ */ _(() => c().class), p = /* @__PURE__ */ _(() => Zf(c(), [
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
  var g = G0();
  Ge(
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
      [Kt]: y
    }),
    [
      () => ({ width: Qt(n()), height: Qt(r()) })
    ],
    "svelte-12wlba6"
  );
  var h = I(g);
  return Ye(h, () => l() ?? tt), z(g), _t(g, (y) => i(y), () => i()), ma(g, "clientHeight", a), ma(g, "clientWidth", s), V(e, g), ae({
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
  Ic,
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
var Q0 = /* @__PURE__ */ G('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), em = /* @__PURE__ */ G("<!> <!>", 1), tm = /* @__PURE__ */ G("<!> <!> <!> <!> <!>", 1);
function Bc(e, t) {
  se(t, !0);
  let n = m(t, "width", 7), r = m(t, "height", 7), o = m(t, "proOptions", 7), i = m(t, "selectionKey", 7), s = m(t, "deleteKey", 7), a = m(t, "panActivationKey", 7), l = m(t, "multiSelectionKey", 7), c = m(t, "zoomActivationKey", 7), d = m(t, "paneClickDistance", 7, 1), p = m(t, "nodeClickDistance", 7, 1), f = m(t, "onmovestart", 7), g = m(t, "onmoveend", 7), h = m(t, "onmove", 7), y = m(t, "oninit", 7), C = m(t, "onnodeclick", 7), w = m(t, "onnodecontextmenu", 7), N = m(t, "onnodedrag", 7), x = m(t, "onnodedragstart", 7), $ = m(t, "onnodedragstop", 7), k = m(t, "onnodepointerenter", 7), M = m(t, "onnodepointermove", 7), A = m(t, "onnodepointerleave", 7), q = m(t, "onselectionclick", 7), W = m(t, "onselectioncontextmenu", 7), K = m(t, "onselectionstart", 7), L = m(t, "onselectionend", 7), S = m(t, "onedgeclick", 7), T = m(t, "onedgecontextmenu", 7), b = m(t, "onedgepointerenter", 7), P = m(t, "onedgepointerleave", 7), E = m(t, "onpaneclick", 7), H = m(t, "onpanecontextmenu", 7), B = m(t, "panOnScrollMode", 23, () => Xt.Free), D = m(t, "preventScrolling", 7, !0), R = m(t, "zoomOnScroll", 7, !0), F = m(t, "zoomOnDoubleClick", 7, !0), X = m(t, "zoomOnPinch", 7, !0), Q = m(t, "panOnScroll", 7, !1), j = m(t, "panOnDrag", 7, !0), ce = m(t, "selectionOnDrag", 7, !0), te = m(t, "connectionLineComponent", 7), fe = m(t, "connectionLineStyle", 7), U = m(t, "connectionLineContainerStyle", 7), xe = m(t, "connectionLineType", 23, () => on.Bezier), de = m(t, "attributionPosition", 7), oe = m(t, "children", 7), ee = m(t, "nodes", 31, () => Mt([])), ge = m(t, "edges", 31, () => Mt([])), J = m(t, "viewport", 31, () => {
  }), ye = /* @__PURE__ */ Ae(t, [
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
  ]), ne = xc({
    props: ye,
    width: n(),
    height: r(),
    get nodes() {
      return ee();
    },
    set nodes(Z) {
      ee(Z);
    },
    get edges() {
      return ge();
    },
    set edges(Z) {
      ge(Z);
    },
    get viewport() {
      return J();
    },
    set viewport(Z) {
      J(Z);
    }
  });
  const Ce = pn(Wr);
  return Ce && Ce.setStore && Ce.setStore(ne), fr(Wr, {
    provider: !1,
    getStore() {
      return ne;
    }
  }), Ze(() => {
    const Z = { nodes: ne.selectedNodes, edges: ne.selectedEdges };
    et(() => t.onselectionchange)?.(Z);
    for (const Je of ne.selectionChangeHandlers.values())
      Je(Z);
  }), oi(() => {
    ne.reset();
  }), Ic(e, {
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
    set domNode(Z) {
      ne.domNode = Z;
    },
    get clientWidth() {
      return ne.width;
    },
    set clientWidth(Z) {
      ne.width = Z;
    },
    get clientHeight() {
      return ne.height;
    },
    set clientHeight(Z) {
      ne.height = Z;
    },
    children: (Z, Je) => {
      var ue = tm(), $e = le(ue);
      Oc($e, {
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
      var _e = O($e, 2);
      $c(_e, {
        get panOnScrollMode() {
          return B();
        },
        get preventScrolling() {
          return D();
        },
        get zoomOnScroll() {
          return R();
        },
        get zoomOnDoubleClick() {
          return F();
        },
        get zoomOnPinch() {
          return X();
        },
        get panOnScroll() {
          return Q();
        },
        get panOnDrag() {
          return j();
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
        children: (Ve, Xe) => {
          kc(Ve, {
            get onpaneclick() {
              return E();
            },
            get onpanecontextmenu() {
              return H();
            },
            get onselectionstart() {
              return K();
            },
            get onselectionend() {
              return L();
            },
            get panOnDrag() {
              return j();
            },
            get selectionOnDrag() {
              return ce();
            },
            get store() {
              return ne;
            },
            set store(pe) {
              ne = pe;
            },
            children: (pe, Ke) => {
              var at = em(), Fe = le(at);
              Cc(Fe, {
                get store() {
                  return ne;
                },
                set store(wi) {
                  ne = wi;
                },
                children: (wi, l7) => {
                  var Qs = Q0(), ea = O(le(Qs), 2);
                  Tc(ea, {
                    get onedgeclick() {
                      return S();
                    },
                    get onedgecontextmenu() {
                      return T();
                    },
                    get onedgepointerenter() {
                      return b();
                    },
                    get onedgepointerleave() {
                      return P();
                    },
                    get store() {
                      return ne;
                    },
                    set store(Bn) {
                      ne = Bn;
                    }
                  });
                  var ta = O(ea, 4);
                  Ac(ta, {
                    get type() {
                      return xe();
                    },
                    get LineComponent() {
                      return te();
                    },
                    get containerStyle() {
                      return U();
                    },
                    get style() {
                      return fe();
                    },
                    get store() {
                      return ne;
                    },
                    set store(Bn) {
                      ne = Bn;
                    }
                  });
                  var na = O(ta, 2);
                  Lc(na, {
                    get nodeClickDistance() {
                      return p();
                    },
                    get onnodeclick() {
                      return C();
                    },
                    get onnodecontextmenu() {
                      return w();
                    },
                    get onnodepointerenter() {
                      return k();
                    },
                    get onnodepointermove() {
                      return M();
                    },
                    get onnodepointerleave() {
                      return A();
                    },
                    get onnodedrag() {
                      return N();
                    },
                    get onnodedragstart() {
                      return x();
                    },
                    get onnodedragstop() {
                      return $();
                    },
                    get store() {
                      return ne;
                    },
                    set store(Bn) {
                      ne = Bn;
                    }
                  });
                  var Id = O(na, 2);
                  Hc(Id, {
                    get onselectionclick() {
                      return q();
                    },
                    get onselectioncontextmenu() {
                      return W();
                    },
                    get onnodedrag() {
                      return N();
                    },
                    get onnodedragstart() {
                      return x();
                    },
                    get onnodedragstop() {
                      return $();
                    },
                    get store() {
                      return ne;
                    },
                    set store(Bn) {
                      ne = Bn;
                    }
                  }), ve(2), V(wi, Qs);
                },
                $$slots: { default: !0 }
              });
              var Pt = O(Fe, 2);
              const Qe = /* @__PURE__ */ _(() => !!(ne.selectionRect && ne.selectionRectMode === "user")), qt = /* @__PURE__ */ _(() => ne.selectionRect?.width), yi = /* @__PURE__ */ _(() => ne.selectionRect?.height), zn = /* @__PURE__ */ _(() => ne.selectionRect?.x), In = /* @__PURE__ */ _(() => ne.selectionRect?.y);
              Fs(Pt, {
                get isVisible() {
                  return u(Qe);
                },
                get width() {
                  return u(qt);
                },
                get height() {
                  return u(yi);
                },
                get x() {
                  return u(zn);
                },
                get y() {
                  return u(In);
                }
              }), V(pe, at);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var Te = O(_e, 2);
      zc(Te, {
        get proOptions() {
          return o();
        },
        get position() {
          return de();
        }
      });
      var ft = O(Te, 2);
      Sc(ft, {
        get store() {
          return ne;
        }
      });
      var Et = O(ft, 2);
      Ye(Et, () => oe() ?? tt), V(Z, ue);
    },
    $$slots: { default: !0 }
  }), ae({
    get width() {
      return n();
    },
    set width(Z) {
      n(Z), v();
    },
    get height() {
      return r();
    },
    set height(Z) {
      r(Z), v();
    },
    get proOptions() {
      return o();
    },
    set proOptions(Z) {
      o(Z), v();
    },
    get selectionKey() {
      return i();
    },
    set selectionKey(Z) {
      i(Z), v();
    },
    get deleteKey() {
      return s();
    },
    set deleteKey(Z) {
      s(Z), v();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(Z) {
      a(Z), v();
    },
    get multiSelectionKey() {
      return l();
    },
    set multiSelectionKey(Z) {
      l(Z), v();
    },
    get zoomActivationKey() {
      return c();
    },
    set zoomActivationKey(Z) {
      c(Z), v();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(Z = 1) {
      d(Z), v();
    },
    get nodeClickDistance() {
      return p();
    },
    set nodeClickDistance(Z = 1) {
      p(Z), v();
    },
    get onmovestart() {
      return f();
    },
    set onmovestart(Z) {
      f(Z), v();
    },
    get onmoveend() {
      return g();
    },
    set onmoveend(Z) {
      g(Z), v();
    },
    get onmove() {
      return h();
    },
    set onmove(Z) {
      h(Z), v();
    },
    get oninit() {
      return y();
    },
    set oninit(Z) {
      y(Z), v();
    },
    get onnodeclick() {
      return C();
    },
    set onnodeclick(Z) {
      C(Z), v();
    },
    get onnodecontextmenu() {
      return w();
    },
    set onnodecontextmenu(Z) {
      w(Z), v();
    },
    get onnodedrag() {
      return N();
    },
    set onnodedrag(Z) {
      N(Z), v();
    },
    get onnodedragstart() {
      return x();
    },
    set onnodedragstart(Z) {
      x(Z), v();
    },
    get onnodedragstop() {
      return $();
    },
    set onnodedragstop(Z) {
      $(Z), v();
    },
    get onnodepointerenter() {
      return k();
    },
    set onnodepointerenter(Z) {
      k(Z), v();
    },
    get onnodepointermove() {
      return M();
    },
    set onnodepointermove(Z) {
      M(Z), v();
    },
    get onnodepointerleave() {
      return A();
    },
    set onnodepointerleave(Z) {
      A(Z), v();
    },
    get onselectionclick() {
      return q();
    },
    set onselectionclick(Z) {
      q(Z), v();
    },
    get onselectioncontextmenu() {
      return W();
    },
    set onselectioncontextmenu(Z) {
      W(Z), v();
    },
    get onselectionstart() {
      return K();
    },
    set onselectionstart(Z) {
      K(Z), v();
    },
    get onselectionend() {
      return L();
    },
    set onselectionend(Z) {
      L(Z), v();
    },
    get onedgeclick() {
      return S();
    },
    set onedgeclick(Z) {
      S(Z), v();
    },
    get onedgecontextmenu() {
      return T();
    },
    set onedgecontextmenu(Z) {
      T(Z), v();
    },
    get onedgepointerenter() {
      return b();
    },
    set onedgepointerenter(Z) {
      b(Z), v();
    },
    get onedgepointerleave() {
      return P();
    },
    set onedgepointerleave(Z) {
      P(Z), v();
    },
    get onpaneclick() {
      return E();
    },
    set onpaneclick(Z) {
      E(Z), v();
    },
    get onpanecontextmenu() {
      return H();
    },
    set onpanecontextmenu(Z) {
      H(Z), v();
    },
    get panOnScrollMode() {
      return B();
    },
    set panOnScrollMode(Z = Xt.Free) {
      B(Z), v();
    },
    get preventScrolling() {
      return D();
    },
    set preventScrolling(Z = !0) {
      D(Z), v();
    },
    get zoomOnScroll() {
      return R();
    },
    set zoomOnScroll(Z = !0) {
      R(Z), v();
    },
    get zoomOnDoubleClick() {
      return F();
    },
    set zoomOnDoubleClick(Z = !0) {
      F(Z), v();
    },
    get zoomOnPinch() {
      return X();
    },
    set zoomOnPinch(Z = !0) {
      X(Z), v();
    },
    get panOnScroll() {
      return Q();
    },
    set panOnScroll(Z = !1) {
      Q(Z), v();
    },
    get panOnDrag() {
      return j();
    },
    set panOnDrag(Z = !0) {
      j(Z), v();
    },
    get selectionOnDrag() {
      return ce();
    },
    set selectionOnDrag(Z = !0) {
      ce(Z), v();
    },
    get connectionLineComponent() {
      return te();
    },
    set connectionLineComponent(Z) {
      te(Z), v();
    },
    get connectionLineStyle() {
      return fe();
    },
    set connectionLineStyle(Z) {
      fe(Z), v();
    },
    get connectionLineContainerStyle() {
      return U();
    },
    set connectionLineContainerStyle(Z) {
      U(Z), v();
    },
    get connectionLineType() {
      return xe();
    },
    set connectionLineType(Z = on.Bezier) {
      xe(Z), v();
    },
    get attributionPosition() {
      return de();
    },
    set attributionPosition(Z) {
      de(Z), v();
    },
    get children() {
      return oe();
    },
    set children(Z) {
      oe(Z), v();
    },
    get nodes() {
      return ee();
    },
    set nodes(Z = []) {
      ee(Z), v();
    },
    get edges() {
      return ge();
    },
    set edges(Z = []) {
      ge(Z), v();
    },
    get viewport() {
      return J();
    },
    set viewport(Z = void 0) {
      J(Z), v();
    }
  });
}
re(
  Bc,
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
  se(t, !0);
  let n = m(t, "children", 7), r = /* @__PURE__ */ Ee(xc({ props: {}, nodes: [], edges: [] }));
  fr(Wr, {
    provider: !0,
    getStore() {
      return u(r);
    },
    setStore: (s) => {
      Y(r, s);
    }
  }), oi(() => {
    u(r).reset();
  });
  var o = De(), i = le(o);
  return Ye(i, () => n() ?? tt), V(e, o), ae({
    get children() {
      return n();
    },
    set children(s) {
      n(s), v();
    }
  });
}
re(qc, { children: {} }, [], [], !0);
var nm = /* @__PURE__ */ G("<button><!></button>");
function Vr(e, t) {
  se(t, !0);
  let n = m(t, "class", 7), r = m(t, "bgColor", 7), o = m(t, "bgColorHover", 7), i = m(t, "color", 7), s = m(t, "colorHover", 7), a = m(t, "borderColor", 7), l = m(t, "onclick", 7), c = m(t, "children", 7), d = /* @__PURE__ */ Ae(t, [
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
  var p = nm();
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
  return Ye(f, () => c() ?? tt), z(p), V(e, p), ae({
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
  Vr,
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
var rm = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function Rc(e) {
  var t = rm();
  V(e, t);
}
re(Rc, {}, [], [], !0);
var om = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Zc(e) {
  var t = om();
  V(e, t);
}
re(Zc, {}, [], [], !0);
var im = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Kc(e) {
  var t = im();
  V(e, t);
}
re(Kc, {}, [], [], !0);
var sm = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Yc(e) {
  var t = sm();
  V(e, t);
}
re(Yc, {}, [], [], !0);
var am = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function jc(e) {
  var t = am();
  V(e, t);
}
re(jc, {}, [], [], !0);
var lm = /* @__PURE__ */ G("<!> <!>", 1), um = /* @__PURE__ */ G("<!> <!> <!> <!> <!> <!>", 1);
function Fc(e, t) {
  se(t, !0);
  let n = m(t, "position", 7, "bottom-left"), r = m(t, "orientation", 7, "vertical"), o = m(t, "showZoom", 7, !0), i = m(t, "showFitView", 7, !0), s = m(t, "showLock", 7, !0), a = m(t, "style", 7), l = m(t, "class", 7), c = m(t, "buttonBgColor", 7), d = m(t, "buttonBgColorHover", 7), p = m(t, "buttonColor", 7), f = m(t, "buttonColorHover", 7), g = m(t, "buttonBorderColor", 7), h = m(t, "fitViewOptions", 7), y = m(t, "children", 7), C = m(t, "before", 7), w = m(t, "after", 7), N = /* @__PURE__ */ Ae(t, [
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
  ]), x = /* @__PURE__ */ _(It);
  const $ = {
    bgColor: c(),
    bgColorHover: d(),
    color: p(),
    colorHover: f(),
    borderColor: g()
  };
  let k = /* @__PURE__ */ _(() => u(x).nodesDraggable || u(x).nodesConnectable || u(x).elementsSelectable), M = /* @__PURE__ */ _(() => u(x).viewport.zoom <= u(x).minZoom), A = /* @__PURE__ */ _(() => u(x).viewport.zoom >= u(x).maxZoom), q = /* @__PURE__ */ _(() => u(x).ariaLabelConfig), W = /* @__PURE__ */ _(() => r() === "horizontal" ? "horizontal" : "vertical");
  const K = () => {
    u(x).zoomIn();
  }, L = () => {
    u(x).zoomOut();
  }, S = () => {
    u(x).fitView(h());
  }, T = () => {
    let P = !u(k);
    u(x).nodesDraggable = P, u(x).nodesConnectable = P, u(x).elementsSelectable = P;
  }, b = /* @__PURE__ */ _(() => [
    "svelte-flow__controls",
    u(W),
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
        return u(q)["controls.ariaLabel"];
      },
      get style() {
        return a();
      }
    },
    () => N,
    {
      children: (P, E) => {
        var H = um(), B = le(H);
        {
          var D = (de) => {
            var oe = De(), ee = le(oe);
            Ye(ee, C), V(de, oe);
          };
          ie(B, (de) => {
            C() && de(D);
          });
        }
        var R = O(B, 2);
        {
          var F = (de) => {
            var oe = lm(), ee = le(oe);
            Vr(ee, Ie(
              {
                onclick: K,
                class: "svelte-flow__controls-zoomin",
                get title() {
                  return u(q)["controls.zoomIn.ariaLabel"];
                },
                get "aria-label"() {
                  return u(q)["controls.zoomIn.ariaLabel"];
                },
                get disabled() {
                  return u(A);
                }
              },
              () => $,
              {
                children: (J, ye) => {
                  Rc(J);
                },
                $$slots: { default: !0 }
              }
            ));
            var ge = O(ee, 2);
            Vr(ge, Ie(
              {
                onclick: L,
                class: "svelte-flow__controls-zoomout",
                get title() {
                  return u(q)["controls.zoomOut.ariaLabel"];
                },
                get "aria-label"() {
                  return u(q)["controls.zoomOut.ariaLabel"];
                },
                get disabled() {
                  return u(M);
                }
              },
              () => $,
              {
                children: (J, ye) => {
                  Zc(J);
                },
                $$slots: { default: !0 }
              }
            )), V(de, oe);
          };
          ie(R, (de) => {
            o() && de(F);
          });
        }
        var X = O(R, 2);
        {
          var Q = (de) => {
            Vr(de, Ie(
              {
                class: "svelte-flow__controls-fitview",
                onclick: S,
                get title() {
                  return u(q)["controls.fitView.ariaLabel"];
                },
                get "aria-label"() {
                  return u(q)["controls.fitView.ariaLabel"];
                }
              },
              () => $,
              {
                children: (oe, ee) => {
                  Kc(oe);
                },
                $$slots: { default: !0 }
              }
            ));
          };
          ie(X, (de) => {
            i() && de(Q);
          });
        }
        var j = O(X, 2);
        {
          var ce = (de) => {
            Vr(de, Ie(
              {
                class: "svelte-flow__controls-interactive",
                onclick: T,
                get title() {
                  return u(q)["controls.interactive.ariaLabel"];
                },
                get "aria-label"() {
                  return u(q)["controls.interactive.ariaLabel"];
                }
              },
              () => $,
              {
                children: (oe, ee) => {
                  var ge = De(), J = le(ge);
                  {
                    var ye = (Ce) => {
                      jc(Ce);
                    }, ne = (Ce) => {
                      Yc(Ce);
                    };
                    ie(J, (Ce) => {
                      u(k) ? Ce(ye) : Ce(ne, !1);
                    });
                  }
                  V(oe, ge);
                },
                $$slots: { default: !0 }
              }
            ));
          };
          ie(j, (de) => {
            s() && de(ce);
          });
        }
        var te = O(j, 2);
        {
          var fe = (de) => {
            var oe = De(), ee = le(oe);
            Ye(ee, y), V(de, oe);
          };
          ie(te, (de) => {
            y() && de(fe);
          });
        }
        var U = O(te, 2);
        {
          var xe = (de) => {
            var oe = De(), ee = le(oe);
            Ye(ee, w), V(de, oe);
          };
          ie(U, (de) => {
            w() && de(xe);
          });
        }
        V(P, H);
      },
      $$slots: { default: !0 }
    }
  )), ae({
    get position() {
      return n();
    },
    set position(P = "bottom-left") {
      n(P), v();
    },
    get orientation() {
      return r();
    },
    set orientation(P = "vertical") {
      r(P), v();
    },
    get showZoom() {
      return o();
    },
    set showZoom(P = !0) {
      o(P), v();
    },
    get showFitView() {
      return i();
    },
    set showFitView(P = !0) {
      i(P), v();
    },
    get showLock() {
      return s();
    },
    set showLock(P = !0) {
      s(P), v();
    },
    get style() {
      return a();
    },
    set style(P) {
      a(P), v();
    },
    get class() {
      return l();
    },
    set class(P) {
      l(P), v();
    },
    get buttonBgColor() {
      return c();
    },
    set buttonBgColor(P) {
      c(P), v();
    },
    get buttonBgColorHover() {
      return d();
    },
    set buttonBgColorHover(P) {
      d(P), v();
    },
    get buttonColor() {
      return p();
    },
    set buttonColor(P) {
      p(P), v();
    },
    get buttonColorHover() {
      return f();
    },
    set buttonColorHover(P) {
      f(P), v();
    },
    get buttonBorderColor() {
      return g();
    },
    set buttonBorderColor(P) {
      g(P), v();
    },
    get fitViewOptions() {
      return h();
    },
    set fitViewOptions(P) {
      h(P), v();
    },
    get children() {
      return y();
    },
    set children(P) {
      y(P), v();
    },
    get before() {
      return C();
    },
    set before(P) {
      C(P), v();
    },
    get after() {
      return w();
    },
    set after(P) {
      w(P), v();
    }
  });
}
re(
  Fc,
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
var cm = /* @__PURE__ */ he("<circle></circle>");
function Wc(e, t) {
  se(t, !0);
  let n = m(t, "radius", 7), r = m(t, "class", 7);
  var o = cm();
  return ke(() => {
    we(o, "cx", n()), we(o, "cy", n()), we(o, "r", n()), yt(o, 0, bn(["svelte-flow__background-pattern", "dots", r()]));
  }), V(e, o), ae({
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
var dm = /* @__PURE__ */ he("<path></path>");
function Xc(e, t) {
  se(t, !0);
  let n = m(t, "lineWidth", 7), r = m(t, "dimensions", 7), o = m(t, "variant", 7), i = m(t, "class", 7);
  var s = dm();
  return ke(() => {
    we(s, "stroke-width", n()), we(s, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), yt(s, 0, bn(["svelte-flow__background-pattern", o(), i()]));
  }), V(e, s), ae({
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
const fm = {
  [ln.Dots]: 1,
  [ln.Lines]: 1,
  [ln.Cross]: 6
};
var pm = /* @__PURE__ */ he('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function Uc(e, t) {
  se(t, !0);
  let n = m(t, "id", 7), r = m(t, "variant", 23, () => ln.Dots), o = m(t, "gap", 7, 20), i = m(t, "size", 7), s = m(t, "lineWidth", 7, 1), a = m(t, "bgColor", 7), l = m(t, "patternColor", 7), c = m(t, "patternClass", 7), d = m(t, "class", 7), p = /* @__PURE__ */ _(It), f = /* @__PURE__ */ _(() => r() === ln.Dots), g = /* @__PURE__ */ _(() => r() === ln.Cross), h = /* @__PURE__ */ _(() => Array.isArray(o()) ? o() : [o(), o()]), y = /* @__PURE__ */ _(() => `background-pattern-${u(p).flowId}-${n() ?? ""}`), C = /* @__PURE__ */ _(() => [
    u(h)[0] * u(p).viewport.zoom || 1,
    u(h)[1] * u(p).viewport.zoom || 1
  ]), w = /* @__PURE__ */ _(() => (i() ?? fm[r()]) * u(p).viewport.zoom), N = /* @__PURE__ */ _(() => u(g) ? [u(w), u(w)] : u(C)), x = /* @__PURE__ */ _(() => u(f) ? [u(w) / 2, u(w) / 2] : [
    u(N)[0] / 2,
    u(N)[1] / 2
  ]);
  var $ = pm();
  let k;
  var M = I($), A = I(M);
  {
    var q = (L) => {
      const S = /* @__PURE__ */ _(() => u(w) / 2);
      Wc(L, {
        get radius() {
          return u(S);
        },
        get class() {
          return c();
        }
      });
    }, W = (L) => {
      Xc(L, {
        get dimensions() {
          return u(N);
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
    ie(A, (L) => {
      u(f) ? L(q) : L(W, !1);
    });
  }
  z(M);
  var K = O(M);
  return z($), ke(
    (L) => {
      yt($, 0, bn([
        "svelte-flow__background",
        "svelte-flow__container",
        d()
      ])), k = dt($, "", k, L), we(M, "id", u(y)), we(M, "x", u(p).viewport.x % u(C)[0]), we(M, "y", u(p).viewport.y % u(C)[1]), we(M, "width", u(C)[0]), we(M, "height", u(C)[1]), we(M, "patternTransform", `translate(-${u(x)[0]},-${u(x)[1]})`), we(K, "fill", `url(#${u(y)})`);
    },
    [
      () => ({
        "--xy-background-color-props": a(),
        "--xy-background-pattern-color-props": l()
      })
    ]
  ), V(e, $), ae({
    get id() {
      return n();
    },
    set id(L) {
      n(L), v();
    },
    get variant() {
      return r();
    },
    set variant(L = ln.Dots) {
      r(L), v();
    },
    get gap() {
      return o();
    },
    set gap(L = 20) {
      o(L), v();
    },
    get size() {
      return i();
    },
    set size(L) {
      i(L), v();
    },
    get lineWidth() {
      return s();
    },
    set lineWidth(L = 1) {
      s(L), v();
    },
    get bgColor() {
      return a();
    },
    set bgColor(L) {
      a(L), v();
    },
    get patternColor() {
      return l();
    },
    set patternColor(L) {
      l(L), v();
    },
    get patternClass() {
      return c();
    },
    set patternClass(L) {
      c(L), v();
    },
    get class() {
      return d();
    },
    set class(L) {
      d(L), v();
    }
  });
}
re(
  Uc,
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
var gm = /* @__PURE__ */ he("<rect></rect>");
function Gc(e, t) {
  se(t, !0);
  let n = m(t, "x", 7), r = m(t, "y", 7), o = m(t, "width", 7), i = m(t, "height", 7), s = m(t, "borderRadius", 7, 5), a = m(t, "color", 7), l = m(t, "shapeRendering", 7), c = m(t, "strokeColor", 7), d = m(t, "strokeWidth", 7, 2), p = m(t, "selected", 7), f = m(t, "class", 7);
  var g = gm();
  let h, y;
  return ke(
    (C, w) => {
      h = yt(g, 0, bn(["svelte-flow__minimap-node", f()]), null, h, C), we(g, "x", n()), we(g, "y", r()), we(g, "rx", s()), we(g, "ry", s()), we(g, "width", o()), we(g, "height", i()), we(g, "shape-rendering", l()), y = dt(g, "", y, w);
    },
    [
      () => ({ selected: p() }),
      () => ({
        fill: a(),
        stroke: c(),
        "stroke-width": d()
      })
    ]
  ), V(e, g), ae({
    get x() {
      return n();
    },
    set x(C) {
      n(C), v();
    },
    get y() {
      return r();
    },
    set y(C) {
      r(C), v();
    },
    get width() {
      return o();
    },
    set width(C) {
      o(C), v();
    },
    get height() {
      return i();
    },
    set height(C) {
      i(C), v();
    },
    get borderRadius() {
      return s();
    },
    set borderRadius(C = 5) {
      s(C), v();
    },
    get color() {
      return a();
    },
    set color(C) {
      a(C), v();
    },
    get shapeRendering() {
      return l();
    },
    set shapeRendering(C) {
      l(C), v();
    },
    get strokeColor() {
      return c();
    },
    set strokeColor(C) {
      c(C), v();
    },
    get strokeWidth() {
      return d();
    },
    set strokeWidth(C = 2) {
      d(C), v();
    },
    get selected() {
      return p();
    },
    set selected(C) {
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
function hm(e, t) {
  const n = Uv({
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
const Mi = (e) => e instanceof Function ? e : () => e;
var vm = /* @__PURE__ */ he("<title> </title>"), mm = /* @__PURE__ */ he('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), ym = /* @__PURE__ */ G('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function Jc(e, t) {
  se(t, !0);
  let n = m(t, "position", 7, "bottom-right"), r = m(t, "ariaLabel", 7), o = m(t, "nodeStrokeColor", 7, "transparent"), i = m(t, "nodeColor", 7), s = m(t, "nodeClass", 7, ""), a = m(t, "nodeBorderRadius", 7, 5), l = m(t, "nodeStrokeWidth", 7, 2), c = m(t, "bgColor", 7), d = m(t, "maskColor", 7), p = m(t, "maskStrokeColor", 7), f = m(t, "maskStrokeWidth", 7), g = m(t, "width", 7, 200), h = m(t, "height", 7, 150), y = m(t, "pannable", 7, !0), C = m(t, "zoomable", 7, !0), w = m(t, "inversePan", 7), N = m(t, "zoomStep", 7), x = m(t, "class", 7), $ = /* @__PURE__ */ Ae(t, [
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
  ]), k = /* @__PURE__ */ _(It), M = /* @__PURE__ */ _(() => u(k).ariaLabelConfig);
  const A = i() === void 0 ? void 0 : Mi(i()), q = Mi(o()), W = Mi(s()), K = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let L = /* @__PURE__ */ _(() => `svelte-flow__minimap-desc-${u(k).flowId}`), S = /* @__PURE__ */ _(() => ({
    x: -u(k).viewport.x / u(k).viewport.zoom,
    y: -u(k).viewport.y / u(k).viewport.zoom,
    width: u(k).width / u(k).viewport.zoom,
    height: u(k).height / u(k).viewport.zoom
  })), T = /* @__PURE__ */ _(() => u(k).nodeLookup.size > 0 ? ju(ao(u(k).nodeLookup, { filter: (U) => !U.hidden }), u(S)) : u(S)), b = /* @__PURE__ */ _(() => u(T).width / g()), P = /* @__PURE__ */ _(() => u(T).height / h()), E = /* @__PURE__ */ _(() => Math.max(u(b), u(P))), H = /* @__PURE__ */ _(() => u(E) * g()), B = /* @__PURE__ */ _(() => u(E) * h()), D = /* @__PURE__ */ _(() => 5 * u(E)), R = /* @__PURE__ */ _(() => u(T).x - (u(H) - u(T).width) / 2 - u(D)), F = /* @__PURE__ */ _(() => u(T).y - (u(B) - u(T).height) / 2 - u(D)), X = /* @__PURE__ */ _(() => u(H) + u(D) * 2), Q = /* @__PURE__ */ _(() => u(B) + u(D) * 2);
  const j = () => u(E);
  var ce = ym(), te = le(ce);
  const fe = /* @__PURE__ */ _(() => ["svelte-flow__minimap", x()]);
  return ap(te, () => ({ "--xy-minimap-background-color-props": c() })), co(te.lastChild, Ie(
    {
      get position() {
        return n();
      },
      get class() {
        return u(fe);
      },
      "data-testid": "svelte-flow__minimap"
    },
    () => $,
    {
      children: (U, xe) => {
        var de = De(), oe = le(de);
        {
          var ee = (ge) => {
            var J = mm();
            let ye;
            var ne = I(J);
            {
              var Ce = (ue) => {
                var $e = vm(), _e = I($e, !0);
                z($e), ke(() => {
                  we($e, "id", u(L)), ze(_e, r() ?? u(M)["minimap.ariaLabel"]);
                }), V(ue, $e);
              };
              ie(ne, (ue) => {
                (r() ?? u(M)["minimap.ariaLabel"]) && ue(Ce);
              });
            }
            var Z = O(ne);
            st(Z, 17, () => u(k).nodes, (ue) => ue.id, (ue, $e) => {
              var _e = De();
              const Te = /* @__PURE__ */ _(() => u(k).nodeLookup.get(u($e).id));
              var ft = le(_e);
              {
                var Et = (Ve) => {
                  const Xe = /* @__PURE__ */ _(() => An(u(Te))), pe = /* @__PURE__ */ _(() => A?.(u(Te))), Ke = /* @__PURE__ */ _(() => q(u(Te))), at = /* @__PURE__ */ _(() => W(u(Te)));
                  Gc(Ve, Ie(
                    {
                      get x() {
                        return u(Te).internals.positionAbsolute.x;
                      },
                      get y() {
                        return u(Te).internals.positionAbsolute.y;
                      }
                    },
                    () => u(Xe),
                    {
                      get selected() {
                        return u(Te).selected;
                      },
                      get color() {
                        return u(pe);
                      },
                      get borderRadius() {
                        return a();
                      },
                      get strokeColor() {
                        return u(Ke);
                      },
                      get strokeWidth() {
                        return l();
                      },
                      get shapeRendering() {
                        return K;
                      },
                      get class() {
                        return u(at);
                      }
                    }
                  ));
                };
                ie(ft, (Ve) => {
                  u(Te) && Wu(u(Te)) && Ve(Et);
                });
              }
              V(ue, _e);
            });
            var Je = O(Z);
            z(J), ot(J, (ue, $e) => hm?.(ue, $e), () => ({
              store: u(k),
              panZoom: u(k).panZoom,
              getViewScale: j,
              translateExtent: u(k).translateExtent,
              width: u(k).width,
              height: u(k).height,
              inversePan: w(),
              zoomStep: N(),
              pannable: y(),
              zoomable: C()
            })), ke(
              (ue) => {
                we(J, "width", g()), we(J, "height", h()), we(J, "viewBox", `${u(R) ?? ""} ${u(F) ?? ""} ${u(X) ?? ""} ${u(Q) ?? ""}`), we(J, "aria-labelledby", u(L)), ye = dt(J, "", ye, ue), we(Je, "d", `M${u(R) - u(D)},${u(F) - u(D)}h${u(X) + u(D) * 2}v${u(Q) + u(D) * 2}h${-u(X) - u(D) * 2}z
      M${u(S).x ?? ""},${u(S).y ?? ""}h${u(S).width ?? ""}v${u(S).height ?? ""}h${-u(S).width}z`);
              },
              [
                () => ({
                  "--xy-minimap-mask-background-color-props": d(),
                  "--xy-minimap-mask-stroke-color-props": p(),
                  "--xy-minimap-mask-stroke-width-props": f() ? f() * u(E) : void 0
                })
              ]
            ), V(ge, J);
          };
          ie(oe, (ge) => {
            u(k).panZoom && ge(ee);
          });
        }
        V(U, de);
      },
      $$slots: { default: !0 }
    }
  )), z(te), V(e, ce), ae({
    get position() {
      return n();
    },
    set position(U = "bottom-right") {
      n(U), v();
    },
    get ariaLabel() {
      return r();
    },
    set ariaLabel(U) {
      r(U), v();
    },
    get nodeStrokeColor() {
      return o();
    },
    set nodeStrokeColor(U = "transparent") {
      o(U), v();
    },
    get nodeColor() {
      return i();
    },
    set nodeColor(U) {
      i(U), v();
    },
    get nodeClass() {
      return s();
    },
    set nodeClass(U = "") {
      s(U), v();
    },
    get nodeBorderRadius() {
      return a();
    },
    set nodeBorderRadius(U = 5) {
      a(U), v();
    },
    get nodeStrokeWidth() {
      return l();
    },
    set nodeStrokeWidth(U = 2) {
      l(U), v();
    },
    get bgColor() {
      return c();
    },
    set bgColor(U) {
      c(U), v();
    },
    get maskColor() {
      return d();
    },
    set maskColor(U) {
      d(U), v();
    },
    get maskStrokeColor() {
      return p();
    },
    set maskStrokeColor(U) {
      p(U), v();
    },
    get maskStrokeWidth() {
      return f();
    },
    set maskStrokeWidth(U) {
      f(U), v();
    },
    get width() {
      return g();
    },
    set width(U = 200) {
      g(U), v();
    },
    get height() {
      return h();
    },
    set height(U = 150) {
      h(U), v();
    },
    get pannable() {
      return y();
    },
    set pannable(U = !0) {
      y(U), v();
    },
    get zoomable() {
      return C();
    },
    set zoomable(U = !0) {
      C(U), v();
    },
    get inversePan() {
      return w();
    },
    set inversePan(U) {
      w(U), v();
    },
    get zoomStep() {
      return N();
    },
    set zoomStep(U) {
      N(U), v();
    },
    get class() {
      return x();
    },
    set class(U) {
      x(U), v();
    }
  });
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
    class: {}
  },
  [],
  [],
  !0
);
var wm = /* @__PURE__ */ G("<div><!></div>");
function Qc(e, t) {
  se(t, !0);
  let n = m(t, "nodeId", 7), r = m(t, "position", 23, () => me.Top), o = m(t, "align", 7, "center"), i = m(t, "offset", 7, 10), s = m(t, "isVisible", 7), a = m(t, "children", 7), l = /* @__PURE__ */ Ae(t, [
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
  const c = It(), { getNodesBounds: d } = nt(), p = pn("svelteflow__node_id");
  let f = /* @__PURE__ */ _(() => (c.nodes, (Array.isArray(n()) ? n() : [n() ?? p]).reduce(
    ($, k) => {
      const M = c.nodeLookup.get(k);
      return M && $.push(M), $;
    },
    []
  ))), g = /* @__PURE__ */ _(() => {
    const $ = d(u(f));
    return $ ? Vv($, c.viewport, r(), i(), o()) : "";
  }), h = /* @__PURE__ */ _(() => u(f).length === 0 ? 1 : Math.max(...u(f).map(($) => ($.internals.z || 5) + 1))), y = /* @__PURE__ */ _(() => c.nodes.filter(($) => $.selected).length), C = /* @__PURE__ */ _(() => typeof s() == "boolean" ? s() : u(f).length === 1 && u(f)[0].selected && u(y) === 1);
  var w = De(), N = le(w);
  {
    var x = ($) => {
      var k = wm();
      Ge(
        k,
        (A, q) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": A,
          ...l,
          [Kt]: q
        }),
        [
          () => u(f).reduce((A, q) => `${A}${q.id} `, "").trim(),
          () => ({
            display: gc().value ? "none" : void 0,
            position: "absolute",
            transform: u(g),
            "z-index": u(h)
          })
        ]
      );
      var M = I(k);
      Ye(M, () => a() ?? tt), z(k), ot(k, (A, q) => pc?.(A, q), () => "root"), V($, k);
    };
    ie(N, ($) => {
      c.domNode && u(C) && u(f) && $(x);
    });
  }
  return V(e, w), ae({
    get nodeId() {
      return n();
    },
    set nodeId($) {
      n($), v();
    },
    get position() {
      return r();
    },
    set position($ = me.Top) {
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
re(
  Qc,
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
function xn(e) {
  const t = /* @__PURE__ */ _(It), n = /* @__PURE__ */ _(() => u(t).nodes), r = /* @__PURE__ */ _(() => u(t).nodeLookup);
  let o = [], i = !0;
  const s = /* @__PURE__ */ _(() => {
    u(n);
    const a = [], l = Array.isArray(e), c = l ? e : [e];
    for (const d of c) {
      const p = u(r).get(d)?.internals.userNode;
      p && a.push({ id: p.id, type: p.type, data: p.data });
    }
    return (!Rv(a, o) || i) && (o = a, i = !1), l ? o : o[0] ?? null;
  });
  return {
    get current() {
      return u(s);
    }
  };
}
const sl = "tinyflow-component";
class bm {
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
const xm = () => {
  let e = /* @__PURE__ */ Ee([]), t = /* @__PURE__ */ Ee([]), n = /* @__PURE__ */ Ee({ x: 250, y: 100, zoom: 1 });
  return {
    // nodes: nodesInternal,
    // edges: edgesInternal,
    // viewport,
    init: (r, o) => {
      Y(e, r), Y(t, o);
    },
    getNodes: () => u(e),
    setNodes: (r) => {
      Y(e, r);
    },
    getEdges: () => u(t),
    setEdges: (r) => {
      Y(t, r);
    },
    getViewport: () => u(n),
    setViewport: (r) => {
      Y(n, r);
    },
    getNode: (r) => u(e).find((o) => o.id === r),
    addNode: (r) => {
      Y(e, [...u(e), r]);
    },
    removeNode: (r) => {
      Y(e, u(e).filter((o) => o.id !== r));
    },
    updateNode: (r, o) => {
      Y(e, u(e).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateNodes: (r) => {
      Y(e, r(u(e)));
    },
    updateNodeData: (r, o) => {
      Y(e, u(e).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    },
    selectNodeOnly: (r) => {
      Y(e, u(e).map((o) => o.id === r ? { ...o, selected: !0 } : { ...o, selected: !1 }));
    },
    getEdge: (r) => u(t).find((o) => o.id === r),
    addEdge: (r) => {
      Y(t, [...u(t), r]);
    },
    removeEdge: (r) => {
      Y(t, u(t).filter((o) => o.id !== r));
    },
    updateEdge: (r, o) => {
      Y(t, u(t).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateEdges: (r) => {
      Y(t, r(u(t)));
    },
    updateEdgeData: (r, o) => {
      Y(t, u(t).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    }
  };
}, qe = xm();
var $m = /* @__PURE__ */ G("<button><!></button>");
function Ne(e, t) {
  se(t, !0);
  const n = m(t, "children", 7), r = m(t, "primary", 7), o = /* @__PURE__ */ Ae(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children",
    "primary"
  ]);
  var i = $m();
  Ge(i, () => ({
    type: "button",
    ...o,
    class: `tf-btn ${r() ? "tf-btn-primary" : ""} nopan nodrag ${t.class ?? ""}`
  }));
  var s = I(i);
  return Ye(s, () => n() ?? tt), z(i), V(e, i), ae({
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
var km = /* @__PURE__ */ G("<input/>");
function ed(e, t) {
  se(t, !0);
  const n = /* @__PURE__ */ Ae(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = km();
  Ft(r), Ge(r, () => ({
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), V(e, r), ae();
}
re(ed, {}, [], [], !0);
var Cm = /* @__PURE__ */ G('<div><input type="hidden"/> <!> <!></div>');
const _m = {
  hash: "svelte-1swt2gg",
  code: ".tf-chosen.svelte-1swt2gg {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function td(e, t) {
  se(t, !0), He(e, _m);
  const n = m(t, "placeholder", 7), r = m(t, "label", 7), o = m(t, "value", 7), i = m(t, "buttonText", 7, "选择..."), s = m(t, "onChosen", 7), a = /* @__PURE__ */ Ae(t, [
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
  var l = Cm();
  Ge(
    l,
    () => ({
      ...a,
      class: `tf-chosen nopan nodrag ${t.class ?? ""}`
    }),
    void 0,
    "svelte-1swt2gg"
  );
  var c = I(l);
  Ft(c);
  var d = O(c, 2);
  We(d, {
    get value() {
      return r();
    },
    get placeholder() {
      return n();
    },
    style: "flex-grow: 1;",
    disabled: !0
  });
  var p = O(d, 2);
  return Ne(p, {
    onclick: (f) => {
      s()?.(o(), r(), f);
    },
    style: "padding: 3px",
    children: (f, g) => {
      ve();
      var h = Se();
      ke(() => ze(h, i())), V(f, h);
    },
    $$slots: { default: !0 }
  }), z(l), ke(() => _o(c, o())), V(e, l), ae({
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
  td,
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
var Sm = /* @__PURE__ */ G("<input/>");
function We(e, t) {
  se(t, !0);
  const n = /* @__PURE__ */ Ae(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Sm();
  Ft(r), Ge(r, () => ({
    type: "text",
    spellcheck: "false",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), V(e, r), ae();
}
re(We, {}, [], [], !0);
var Em = /* @__PURE__ */ G("<textarea></textarea>");
function Re(e, t) {
  se(t, !0);
  const n = m(t, "value", 7), r = /* @__PURE__ */ Ae(t, ["$$slots", "$$events", "$$legacy", "$$host", "value"]);
  var o = Em();
  return Yf(o), Ge(o, () => ({
    spellcheck: "false",
    ...r,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), V(e, o), ae({
    get value() {
      return n();
    },
    set value(i) {
      n(i), v();
    }
  });
}
re(Re, { value: {} }, [], [], !0);
var Pm = /* @__PURE__ */ G('<div role="button"><!></div>'), Nm = /* @__PURE__ */ G("<div></div>");
function nd(e, t) {
  const n = ba(t, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = ba(n, ["items", "onChange", "activeIndex"]);
  se(t, !1);
  let o = m(t, "items", 28, () => []), i = m(t, "onChange", 12, () => {
  }), s = m(t, "activeIndex", 12, 0);
  function a(c, d) {
    s(d), i()?.(c, d);
  }
  uu();
  var l = Nm();
  return Ge(l, () => ({
    ...r,
    class: `tf-tabs ${_s(r), et(() => r.class) ?? ""}`
  })), st(l, 5, o, gr, (c, d, p) => {
    var f = Pm();
    we(f, "tabindex", p), f.__click = () => a(u(d), p), f.__keydown = (C) => {
      (C.key === "Enter" || C.key === " ") && (C.preventDefault(), a(u(d), p));
    };
    var g = I(f);
    {
      var h = (C) => {
        var w = Se();
        ke(() => ze(w, (u(d), et(() => u(d).label)))), V(C, w);
      }, y = (C) => {
        var w = De(), N = le(w);
        Ye(N, () => (u(d), et(() => u(d).label) ?? tt)), V(C, w);
      };
      ie(g, (C) => {
        u(d), et(() => typeof u(d).label == "string") ? C(h) : C(y, !1);
      });
    }
    z(f), ke(() => yt(f, 1, `tf-tabs-item ${p === s() ? "active" : ""}`)), V(c, f);
  }), z(l), V(e, l), ae({
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
wn(["click", "keydown"]);
re(nd, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var Lm = (e, t, n) => t(u(n)), Mm = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(u(n)));
}, Vm = /* @__PURE__ */ G('<span class="tf-collapse-item-title-icon"><!></span>'), Dm = /* @__PURE__ */ G('<div class="tf-collapse-item-description"><!></div>'), Tm = /* @__PURE__ */ G('<div class="tf-collapse-item-content"><!></div>'), Hm = /* @__PURE__ */ G('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), Om = /* @__PURE__ */ G("<div></div>");
const Am = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function rd(e, t) {
  se(t, !0), He(e, Am);
  let n = m(t, "items", 7), r = m(t, "onChange", 7), o = m(t, "activeKeys", 31, () => Mt([]));
  function i(a) {
    o().includes(a.key) ? o(o().filter((l) => l !== a.key)) : (o().push(a.key), o(o())), r()?.(a, o());
  }
  var s = Om();
  return st(s, 21, n, gr, (a, l, c) => {
    var d = Hm(), p = I(d);
    we(p, "tabindex", c), p.__click = [Lm, i, l], p.__keydown = [Mm, i, l];
    var f = I(p);
    {
      var g = ($) => {
        var k = Vm(), M = I(k);
        En(M, {
          get target() {
            return u(l).icon;
          }
        }), z(k), V($, k);
      };
      ie(f, ($) => {
        u(l).icon && $(g);
      });
    }
    var h = O(f, 2);
    En(h, {
      get target() {
        return u(l).title;
      }
    });
    var y = O(h, 2);
    z(p);
    var C = O(p, 2);
    {
      var w = ($) => {
        var k = Dm(), M = I(k);
        En(M, {
          get target() {
            return u(l).description;
          }
        }), z(k), V($, k);
      };
      ie(C, ($) => {
        u(l).description && $(w);
      });
    }
    var N = O(C, 2);
    {
      var x = ($) => {
        var k = Tm(), M = I(k);
        En(M, {
          get target() {
            return u(l).content;
          }
        }), z(k), V($, k);
      };
      ie(N, ($) => {
        o().includes(u(l).key) && $(x);
      });
    }
    z(d), ke(($) => yt(y, 1, `tf-collapse-item-title-arrow ${$ ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(u(l).key) ? "rotate-90" : ""
    ]), V(a, d);
  }), z(s), ke(() => {
    dt(s, t.style), yt(s, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), V(e, s), ae({
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
wn(["click", "keydown"]);
re(rd, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function En(e, t) {
  se(t, !0);
  let n = m(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = De(), o = le(r);
  {
    var i = (a) => {
      var l = De(), c = le(l);
      Ye(c, () => n() ?? tt), V(a, l);
    }, s = (a) => {
      var l = De(), c = le(l);
      Ps(c, n), V(a, l);
    };
    ie(o, (a) => {
      typeof n() == "function" ? a(i) : a(s, !1);
    });
  }
  return V(e, r), ae({
    get target() {
      return n();
    },
    set target(a) {
      n(a), v();
    }
  });
}
re(En, { target: {} }, [], [], !0);
var zm = (e, t, n) => t(u(n)), Im = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), Bm = /* @__PURE__ */ G('<div class="tf-select-content-children"><!></div>'), qm = /* @__PURE__ */ G('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), Rm = /* @__PURE__ */ G('<div class="tf-select-content nopan nodrag"><!></div>'), Zm = /* @__PURE__ */ G("<!> <!>", 1), Km = /* @__PURE__ */ G('<div class="tf-select-input-placeholder"> </div>'), Ym = /* @__PURE__ */ G('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), jm = /* @__PURE__ */ G("<div><!></div>");
function ct(e, t) {
  se(t, !0);
  const n = (w, N = tt) => {
    var x = De(), $ = le(x);
    st($, 19, N, (k, M) => `${M}_${k.value}`, (k, M) => {
      var A = qm(), q = le(A);
      q.__click = [zm, h, M];
      var W = I(q), K = I(W);
      {
        var L = (P) => {
          var E = Im();
          V(P, E);
        };
        ie(K, (P) => {
          u(M).children && u(M).children.length > 0 && P(L);
        });
      }
      z(W);
      var S = O(W, 2);
      En(S, {
        get target() {
          return u(M).label;
        }
      }), z(q);
      var T = O(q, 2);
      {
        var b = (P) => {
          var E = Bm(), H = I(E);
          n(H, () => u(M).children), z(E), V(P, E);
        };
        ie(T, (P) => {
          u(M).children && u(M).children.length > 0 && (a() || c().includes(u(M).value)) && P(b);
        });
      }
      V(k, A);
    }), V(w, x);
  };
  let r = m(t, "items", 7), o = m(t, "onSelect", 7), i = m(t, "value", 23, () => []), s = m(t, "defaultValue", 23, () => []), a = m(t, "expandAll", 7, !0), l = m(t, "multiple", 7, !1), c = m(t, "expandValue", 23, () => []), d = m(t, "placeholder", 7), p = /* @__PURE__ */ Ae(t, [
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
  ]), f = /* @__PURE__ */ _(() => {
    const w = [], N = (x) => {
      for (let $ of x)
        i().length > 0 ? i().includes($.value) && w.push($) : s().includes($.value) && w.push($), $.children && $.children.length > 0 && N($.children);
    };
    return N(r()), w;
  }), g;
  function h(w) {
    g?.hide(), o()?.(w);
  }
  var y = jm();
  Ge(y, () => ({ ...p, class: `tf-select ${p.class ?? ""}` }));
  var C = I(y);
  return _t(
    nr(C, {
      floating: (w) => {
        var N = Rm(), x = I(N);
        n(x, r), z(N), V(w, N);
      },
      children: (w, N) => {
        var x = Ym();
        Ge(x, () => ({ class: "tf-select-input nopan nodrag", ...p }));
        var $ = I(x);
        st(
          $,
          23,
          () => u(f),
          (k, M) => `${M}_${k.value}`,
          (k, M, A) => {
            var q = De(), W = le(q);
            {
              var K = (S) => {
                var T = De(), b = le(T);
                {
                  var P = (E) => {
                    En(E, {
                      get target() {
                        return u(M).label;
                      }
                    });
                  };
                  ie(b, (E) => {
                    u(A) === 0 && E(P);
                  });
                }
                V(S, T);
              }, L = (S) => {
                var T = Zm(), b = le(T);
                En(b, {
                  get target() {
                    return u(M).label;
                  }
                });
                var P = O(b, 2);
                {
                  var E = (H) => {
                    var B = Se(",");
                    V(H, B);
                  };
                  ie(P, (H) => {
                    u(A) < u(f).length - 1 && H(E);
                  });
                }
                V(S, T);
              };
              ie(W, (S) => {
                l() ? S(L, !1) : S(K);
              });
            }
            V(k, q);
          },
          (k) => {
            var M = Km(), A = I(M, !0);
            z(M), ke(() => ze(A, d())), V(k, M);
          }
        ), z($), ve(2), z(x), V(w, x);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (w) => g = w,
    () => g
  ), z(y), V(e, y), ae({
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
wn(["click"]);
re(
  ct,
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
const Xr = Math.min, ur = Math.max, Xo = Math.round, Ut = (e) => ({
  x: e,
  y: e
}), Fm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Wm = {
  start: "end",
  end: "start"
};
function ts(e, t, n) {
  return ur(e, Xr(t, n));
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
function od(e) {
  return e === "x" ? "y" : "x";
}
function Ws(e) {
  return e === "y" ? "height" : "width";
}
const Xm = /* @__PURE__ */ new Set(["top", "bottom"]);
function Pn(e) {
  return Xm.has(Jn(e)) ? "y" : "x";
}
function Xs(e) {
  return od(Pn(e));
}
function Um(e, t, n) {
  n === void 0 && (n = !1);
  const r = po(e), o = Xs(e), i = Ws(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Uo(s)), [s, Uo(s)];
}
function Gm(e) {
  const t = Uo(e);
  return [ns(e), t, ns(t)];
}
function ns(e) {
  return e.replace(/start|end/g, (t) => Wm[t]);
}
const al = ["left", "right"], ll = ["right", "left"], Jm = ["top", "bottom"], Qm = ["bottom", "top"];
function e2(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? ll : al : t ? al : ll;
    case "left":
    case "right":
      return t ? Jm : Qm;
    default:
      return [];
  }
}
function t2(e, t, n, r) {
  const o = po(e);
  let i = e2(Jn(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(ns)))), i;
}
function Uo(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Fm[t]);
}
function n2(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function id(e) {
  return typeof e != "number" ? n2(e) : {
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
function ul(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Pn(t), s = Xs(t), a = Ws(s), l = Jn(t), c = i === "y", d = r.x + r.width / 2 - o.width / 2, p = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
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
const r2 = async (e, t, n) => {
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
  } = ul(c, r, l), f = r, g = {}, h = 0;
  for (let y = 0; y < a.length; y++) {
    const {
      name: C,
      fn: w
    } = a[y], {
      x: N,
      y: x,
      data: $,
      reset: k
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
    d = N ?? d, p = x ?? p, g = {
      ...g,
      [C]: {
        ...g[C],
        ...$
      }
    }, k && h <= 50 && (h++, typeof k == "object" && (k.placement && (f = k.placement), k.rects && (c = k.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : k.rects), {
      x: d,
      y: p
    } = ul(c, f, l)), y = -1);
  }
  return {
    x: d,
    y: p,
    placement: f,
    strategy: o,
    middlewareData: g
  };
};
async function sd(e, t) {
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
  } = fo(t, e), h = id(g), y = a[f ? p === "floating" ? "reference" : "floating" : p], C = Go(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(y))) == null || n ? y : y.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), w = p === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, N = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), x = await (i.isElement == null ? void 0 : i.isElement(N)) ? await (i.getScale == null ? void 0 : i.getScale(N)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, $ = Go(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: w,
    offsetParent: N,
    strategy: l
  }) : w);
  return {
    top: (C.top - $.top + h.top) / x.y,
    bottom: ($.bottom - C.bottom + h.bottom) / x.y,
    left: (C.left - $.left + h.left) / x.x,
    right: ($.right - C.right + h.right) / x.x
  };
}
const o2 = (e) => ({
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
    const p = id(d), f = {
      x: n,
      y: r
    }, g = Xs(o), h = Ws(g), y = await s.getDimensions(c), C = g === "y", w = C ? "top" : "left", N = C ? "bottom" : "right", x = C ? "clientHeight" : "clientWidth", $ = i.reference[h] + i.reference[g] - f[g] - i.floating[h], k = f[g] - i.reference[g], M = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let A = M ? M[x] : 0;
    (!A || !await (s.isElement == null ? void 0 : s.isElement(M))) && (A = a.floating[x] || i.floating[h]);
    const q = $ / 2 - k / 2, W = A / 2 - y[h] / 2 - 1, K = Xr(p[w], W), L = Xr(p[N], W), S = K, T = A - y[h] - L, b = A / 2 - y[h] / 2 + q, P = ts(S, b, T), E = !l.arrow && po(o) != null && b !== P && i.reference[h] / 2 - (b < S ? K : L) - y[h] / 2 < 0, H = E ? b < S ? b - S : b - T : 0;
    return {
      [g]: f[g] + H,
      data: {
        [g]: P,
        centerOffset: b - P - H,
        ...E && {
          alignmentOffset: H
        }
      },
      reset: E
    };
  }
}), i2 = function(e) {
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
        ...C
      } = fo(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const w = Jn(o), N = Pn(a), x = Jn(a) === a, $ = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), k = f || (x || !y ? [Uo(a)] : Gm(a)), M = h !== "none";
      !f && M && k.push(...t2(a, y, h, $));
      const A = [a, ...k], q = await sd(t, C), W = [];
      let K = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && W.push(q[w]), p) {
        const b = Um(o, s, $);
        W.push(q[b[0]], q[b[1]]);
      }
      if (K = [...K, {
        placement: o,
        overflows: W
      }], !W.every((b) => b <= 0)) {
        var L, S;
        const b = (((L = i.flip) == null ? void 0 : L.index) || 0) + 1, P = A[b];
        if (P && (!(p === "alignment" && N !== Pn(P)) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        K.every((H) => H.overflows[0] > 0 && Pn(H.placement) === N)))
          return {
            data: {
              index: b,
              overflows: K
            },
            reset: {
              placement: P
            }
          };
        let E = (S = K.filter((H) => H.overflows[0] <= 0).sort((H, B) => H.overflows[1] - B.overflows[1])[0]) == null ? void 0 : S.placement;
        if (!E)
          switch (g) {
            case "bestFit": {
              var T;
              const H = (T = K.filter((B) => {
                if (M) {
                  const D = Pn(B.placement);
                  return D === N || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  D === "y";
                }
                return !0;
              }).map((B) => [B.placement, B.overflows.filter((D) => D > 0).reduce((D, R) => D + R, 0)]).sort((B, D) => B[1] - D[1])[0]) == null ? void 0 : T[0];
              H && (E = H);
              break;
            }
            case "initialPlacement":
              E = a;
              break;
          }
        if (o !== E)
          return {
            reset: {
              placement: E
            }
          };
      }
      return {};
    }
  };
}, s2 = /* @__PURE__ */ new Set(["left", "top"]);
async function a2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Jn(n), a = po(n), l = Pn(n) === "y", c = s2.has(s) ? -1 : 1, d = i && l ? -1 : 1, p = fo(t, e);
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
const l2 = function(e) {
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
      } = t, l = await a2(t, e);
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
}, u2 = function(e) {
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
              x: w,
              y: N
            } = C;
            return {
              x: w,
              y: N
            };
          }
        },
        ...l
      } = fo(e, t), c = {
        x: n,
        y: r
      }, d = await sd(t, l), p = Pn(Jn(o)), f = od(p);
      let g = c[f], h = c[p];
      if (i) {
        const C = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", N = g + d[C], x = g - d[w];
        g = ts(N, g, x);
      }
      if (s) {
        const C = p === "y" ? "top" : "left", w = p === "y" ? "bottom" : "right", N = h + d[C], x = h - d[w];
        h = ts(N, h, x);
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
function _r(e) {
  return ad(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function $t(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function $n(e) {
  var t;
  return (t = (ad(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ad(e) {
  return hi() ? e instanceof Node || e instanceof $t(e).Node : !1;
}
function Ot(e) {
  return hi() ? e instanceof Element || e instanceof $t(e).Element : !1;
}
function en(e) {
  return hi() ? e instanceof HTMLElement || e instanceof $t(e).HTMLElement : !1;
}
function cl(e) {
  return !hi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof $t(e).ShadowRoot;
}
const c2 = /* @__PURE__ */ new Set(["inline", "contents"]);
function go(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = At(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !c2.has(o);
}
const d2 = /* @__PURE__ */ new Set(["table", "td", "th"]);
function f2(e) {
  return d2.has(_r(e));
}
const p2 = [":popover-open", ":modal"];
function vi(e) {
  return p2.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const g2 = ["transform", "translate", "scale", "rotate", "perspective"], h2 = ["transform", "translate", "scale", "rotate", "perspective", "filter"], v2 = ["paint", "layout", "strict", "content"];
function Us(e) {
  const t = Gs(), n = Ot(e) ? At(e) : e;
  return g2.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || h2.some((r) => (n.willChange || "").includes(r)) || v2.some((r) => (n.contain || "").includes(r));
}
function m2(e) {
  let t = Dn(e);
  for (; en(t) && !xr(t); ) {
    if (Us(t))
      return t;
    if (vi(t))
      return null;
    t = Dn(t);
  }
  return null;
}
function Gs() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const y2 = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function xr(e) {
  return y2.has(_r(e));
}
function At(e) {
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
function Dn(e) {
  if (_r(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    cl(e) && e.host || // Fallback.
    $n(e)
  );
  return cl(t) ? t.host : t;
}
function ld(e) {
  const t = Dn(e);
  return xr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : en(t) && go(t) ? t : ld(t);
}
function ud(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = ld(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = $t(o);
  return i ? (rs(s), t.concat(s, s.visualViewport || [], go(o) ? o : [], [])) : t.concat(o, ud(o, []));
}
function rs(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function cd(e) {
  const t = At(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = en(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = Xo(n) !== i || Xo(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function dd(e) {
  return Ot(e) ? e : e.contextElement;
}
function cr(e) {
  const t = dd(e);
  if (!en(t))
    return Ut(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = cd(t);
  let s = (i ? Xo(n.width) : n.width) / r, a = (i ? Xo(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const w2 = /* @__PURE__ */ Ut(0);
function fd(e) {
  const t = $t(e);
  return !Gs() || !t.visualViewport ? w2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function b2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== $t(e) ? !1 : t;
}
function Ur(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = dd(e);
  let s = Ut(1);
  t && (r ? Ot(r) && (s = cr(r)) : s = cr(e));
  const a = b2(i, n, r) ? fd(i) : Ut(0);
  let l = (o.left + a.x) / s.x, c = (o.top + a.y) / s.y, d = o.width / s.x, p = o.height / s.y;
  if (i) {
    const f = $t(i), g = r && Ot(r) ? $t(r) : r;
    let h = f, y = rs(h);
    for (; y && r && g !== h; ) {
      const C = cr(y), w = y.getBoundingClientRect(), N = At(y), x = w.left + (y.clientLeft + parseFloat(N.paddingLeft)) * C.x, $ = w.top + (y.clientTop + parseFloat(N.paddingTop)) * C.y;
      l *= C.x, c *= C.y, d *= C.x, p *= C.y, l += x, c += $, h = $t(y), y = rs(h);
    }
  }
  return Go({
    width: d,
    height: p,
    x: l,
    y: c
  });
}
function Js(e, t) {
  const n = mi(e).scrollLeft;
  return t ? t.left + n : Ur($n(e)).left + n;
}
function pd(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Js(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function x2(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = $n(r), a = t ? vi(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Ut(1);
  const d = Ut(0), p = en(r);
  if ((p || !p && !i) && ((_r(r) !== "body" || go(s)) && (l = mi(r)), en(r))) {
    const g = Ur(r);
    c = cr(r), d.x = g.x + r.clientLeft, d.y = g.y + r.clientTop;
  }
  const f = s && !p && !i ? pd(s, l, !0) : Ut(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + d.x + f.x,
    y: n.y * c.y - l.scrollTop * c.y + d.y + f.y
  };
}
function $2(e) {
  return Array.from(e.getClientRects());
}
function k2(e) {
  const t = $n(e), n = mi(e), r = e.ownerDocument.body, o = ur(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = ur(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Js(e);
  const a = -n.scrollTop;
  return At(r).direction === "rtl" && (s += ur(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function C2(e, t) {
  const n = $t(e), r = $n(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const c = Gs();
    (!c || c && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const _2 = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function S2(e, t) {
  const n = Ur(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = en(e) ? cr(e) : Ut(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, c = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: c
  };
}
function dl(e, t, n) {
  let r;
  if (t === "viewport")
    r = C2(e, n);
  else if (t === "document")
    r = k2($n(e));
  else if (Ot(t))
    r = S2(t, n);
  else {
    const o = fd(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Go(r);
}
function gd(e, t) {
  const n = Dn(e);
  return n === t || !Ot(n) || xr(n) ? !1 : At(n).position === "fixed" || gd(n, t);
}
function E2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = ud(e, []).filter((a) => Ot(a) && _r(a) !== "body"), o = null;
  const i = At(e).position === "fixed";
  let s = i ? Dn(e) : e;
  for (; Ot(s) && !xr(s); ) {
    const a = At(s), l = Us(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && o && _2.has(o.position) || go(s) && !l && gd(e, s)) ? r = r.filter((c) => c !== s) : o = a, s = Dn(s);
  }
  return t.set(e, r), r;
}
function P2(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? vi(t) ? [] : E2(t, this._c) : [].concat(n), r], s = i[0], a = i.reduce((l, c) => {
    const d = dl(t, c, o);
    return l.top = ur(d.top, l.top), l.right = Xr(d.right, l.right), l.bottom = Xr(d.bottom, l.bottom), l.left = ur(d.left, l.left), l;
  }, dl(t, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function N2(e) {
  const {
    width: t,
    height: n
  } = cd(e);
  return {
    width: t,
    height: n
  };
}
function L2(e, t, n) {
  const r = en(t), o = $n(t), i = n === "fixed", s = Ur(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Ut(0);
  function c() {
    l.x = Js(o);
  }
  if (r || !r && !i)
    if ((_r(t) !== "body" || go(o)) && (a = mi(t)), r) {
      const g = Ur(t, !0, i, t);
      l.x = g.x + t.clientLeft, l.y = g.y + t.clientTop;
    } else o && c();
  i && !r && o && c();
  const d = o && !r && !i ? pd(o, a) : Ut(0), p = s.left + a.scrollLeft - l.x - d.x, f = s.top + a.scrollTop - l.y - d.y;
  return {
    x: p,
    y: f,
    width: s.width,
    height: s.height
  };
}
function Vi(e) {
  return At(e).position === "static";
}
function fl(e, t) {
  if (!en(e) || At(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return $n(e) === n && (n = n.ownerDocument.body), n;
}
function hd(e, t) {
  const n = $t(e);
  if (vi(e))
    return n;
  if (!en(e)) {
    let o = Dn(e);
    for (; o && !xr(o); ) {
      if (Ot(o) && !Vi(o))
        return o;
      o = Dn(o);
    }
    return n;
  }
  let r = fl(e, t);
  for (; r && f2(r) && Vi(r); )
    r = fl(r, t);
  return r && xr(r) && Vi(r) && !Us(r) ? n : r || m2(e) || n;
}
const M2 = async function(e) {
  const t = this.getOffsetParent || hd, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: L2(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function V2(e) {
  return At(e).direction === "rtl";
}
const D2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: x2,
  getDocumentElement: $n,
  getClippingRect: P2,
  getOffsetParent: hd,
  getElementRects: M2,
  getClientRects: $2,
  getDimensions: N2,
  getScale: cr,
  isElement: Ot,
  isRTL: V2
}, T2 = l2, H2 = u2, O2 = i2, A2 = o2, z2 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: D2,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return r2(e, t, {
    ...o,
    platform: i
  });
}, I2 = ({
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
    z2(e, c, {
      placement: r,
      middleware: [
        T2(o),
        // 手动偏移配置
        O2(i),
        //自动翻转
        H2(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [A2({ element: d })] : []
      ]
    }).then(({ x: w, y: N, placement: x, middlewareData: $ }) => {
      if (Object.assign(c.style, {
        left: `${w}px`,
        top: `${N}px`
      }), l) {
        const { x: k, y: M } = $.arrow, A = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[x.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: k != null ? `${k}px` : "",
          top: M != null ? `${M}px` : "",
          right: "",
          bottom: "",
          [A]: "2px"
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
  function C(w) {
    c.contains(w.target) || h();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((w) => {
    e.addEventListener(w, y);
  }), document.addEventListener("click", C), {
    destroy() {
      t.forEach((w) => {
        e.removeEventListener(w, y);
      }), document.removeEventListener("click", C);
    },
    hide() {
      h();
    },
    isVisible() {
      return f;
    }
  };
};
var B2 = /* @__PURE__ */ G('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function nr(e, t) {
  se(t, !0);
  const n = m(t, "children", 7), r = m(t, "floating", 7), o = m(t, "placement", 7, "bottom");
  let i, s, a;
  On(() => (a = I2({
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
  var c = B2(), d = I(c), p = I(d);
  Ye(p, n), z(d), _t(d, (h) => i = h, () => i);
  var f = O(d, 2), g = I(f);
  return Ye(g, r), z(f), _t(f, (h) => s = h, () => s), z(c), V(e, c), ae({
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
re(nr, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Le(e, t) {
  se(t, !0);
  const n = m(t, "children", 7), r = m(t, "level", 7, 1), o = m(t, "mt", 7), i = m(t, "mb", 7);
  var s = De(), a = le(s);
  return dp(a, () => `h${r()}`, !1, (l, c) => {
    Ge(l, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var d = De(), p = le(d);
    Ye(p, () => n() ?? tt), V(c, d);
  }), V(e, s), ae({
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
re(Le, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var q2 = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const R2 = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function ho(e, t) {
  se(t, !0), He(e, R2);
  const n = /* @__PURE__ */ Ae(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Ne(e, Ie(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = q2();
      V(r, i);
    },
    $$slots: { default: !0 }
  })), ae();
}
re(ho, {}, [], [], !0);
const Z2 = () => ({ deleteNode: (e) => {
  qe.removeNode(e), qe.updateEdges((t) => t.filter((n) => n.source !== e && n.target !== e));
} }), Qn = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, K2 = () => ({ copyNode: (e) => {
  const t = qe.getNode(e);
  if (t) {
    const n = Qn(), r = {
      ...t,
      id: n,
      position: { x: t.position.x + 50, y: t.position.y + 50 }
    };
    qe.updateNodes((o) => [...o.map((i) => ({ ...i, selected: !1 })), r]);
  }
} }), je = () => pn("svelteflow__node_id"), Tn = () => pn("tinyflow_options");
var Y2 = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), j2 = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), F2 = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), W2 = /* @__PURE__ */ G('<div class="input-item svelte-1jesvb7">执行条件： <!></div>'), X2 = (e, t, n) => {
  const r = e.target.checked;
  t(n, { async: r });
}, U2 = (e, t, n) => {
  const r = e.target.checked;
  t(n, { loopEnable: r });
}, G2 = /* @__PURE__ */ G('<div class="input-item svelte-1jesvb7">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-1jesvb7">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-1jesvb7">退出条件： <!></div>', 1), J2 = /* @__PURE__ */ G('<div class="settings svelte-1jesvb7"><div class="input-item svelte-1jesvb7">节点名称： <!></div> <div class="input-item svelte-1jesvb7">参数描述： <!></div> <!> <label class="input-item-inline svelte-1jesvb7"><span>异步执行：</span> <input type="checkbox"/></label> <label class="input-item-inline svelte-1jesvb7"><span>循环执行：</span> <input type="checkbox"/></label> <!></div>'), Q2 = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), ey = /* @__PURE__ */ G('<div class="tf-node-toolbar svelte-1jesvb7"><!> <!> <!> <!></div>'), ty = /* @__PURE__ */ G('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const ny = {
  hash: "svelte-1jesvb7",
  code: ".tf-node-toolbar.svelte-1jesvb7 {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-1jesvb7 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-1jesvb7 .input-item:where(.svelte-1jesvb7) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-1jesvb7 .input-item-inline:where(.svelte-1jesvb7) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function Vt(e, t) {
  se(t, !0), He(e, ny);
  const n = m(t, "data", 7), r = m(t, "id", 7, ""), o = m(t, "icon", 7), i = m(t, "handle", 7), s = m(t, "children", 7), a = m(t, "allowExecute", 7, !0), l = m(t, "allowCopy", 7, !0), c = m(t, "allowDelete", 7, !0), d = m(t, "allowSetting", 7, !0), p = m(t, "allowSettingOfCondition", 7, !0), f = m(t, "showSourceHandle", 7, !0), g = m(t, "showTargetHandle", 7, !0), h = m(t, "onCollapse", 7);
  let y = n().expand ? ["key"] : [];
  const { updateNodeData: C, getNode: w } = nt(), N = /* @__PURE__ */ _(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: x } = Z2(), { copyNode: $ } = K2(), k = Tn(), M = () => {
    k.onNodeExecute?.(w(r()));
  };
  let A = je();
  var q = ty(), W = le(q);
  {
    var K = (D) => {
      Qc(D, {
        get position() {
          return me.Top;
        },
        align: "end",
        children: (R, F) => {
          var X = ey(), Q = I(X);
          {
            var j = (oe) => {
              Ne(oe, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  x(r());
                },
                children: (ee, ge) => {
                  var J = Y2();
                  V(ee, J);
                },
                $$slots: { default: !0 }
              });
            };
            ie(Q, (oe) => {
              c() && oe(j);
            });
          }
          var ce = O(Q, 2);
          {
            var te = (oe) => {
              Ne(oe, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  $(r());
                },
                children: (ee, ge) => {
                  var J = j2();
                  V(ee, J);
                },
                $$slots: { default: !0 }
              });
            };
            ie(ce, (oe) => {
              l() && oe(te);
            });
          }
          var fe = O(ce, 2);
          {
            var U = (oe) => {
              Ne(oe, {
                class: "tf-node-toolbar-item",
                onclick: M,
                children: (ee, ge) => {
                  var J = F2();
                  V(ee, J);
                },
                $$slots: { default: !0 }
              });
            };
            ie(fe, (oe) => {
              a() && oe(U);
            });
          }
          var xe = O(fe, 2);
          {
            var de = (oe) => {
              nr(oe, {
                placement: "bottom",
                floating: (ee) => {
                  var ge = J2(), J = I(ge), ye = O(I(J));
                  We(ye, {
                    style: "width: 100%;",
                    onchange: (Ve) => {
                      const Xe = Ve.target.value;
                      C(A, { title: Xe });
                    },
                    get value() {
                      return n().title;
                    }
                  }), z(J);
                  var ne = O(J, 2), Ce = O(I(ne));
                  Re(Ce, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (Ve) => {
                      const Xe = Ve.target.value;
                      C(A, { description: Xe });
                    },
                    get value() {
                      return n().description;
                    }
                  }), z(ne);
                  var Z = O(ne, 2);
                  {
                    var Je = (Ve) => {
                      var Xe = W2(), pe = O(I(Xe));
                      Re(pe, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Ke) => {
                          const at = Ke.target.value;
                          C(A, { condition: at });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), z(Xe), V(Ve, Xe);
                    };
                    ie(Z, (Ve) => {
                      p() && Ve(Je);
                    });
                  }
                  var ue = O(Z, 2), $e = O(I(ue), 2);
                  Ft($e), $e.__change = [X2, C, A], z(ue);
                  var _e = O(ue, 2), Te = O(I(_e), 2);
                  Ft(Te), Te.__change = [U2, C, A], z(_e);
                  var ft = O(_e, 2);
                  {
                    var Et = (Ve) => {
                      var Xe = G2(), pe = le(Xe), Ke = O(I(pe));
                      const at = /* @__PURE__ */ _(() => n().loopIntervalMs || "1000");
                      Re(Ke, {
                        rows: 1,
                        style: "width: 100%;",
                        onchange: (zn) => {
                          const In = zn.target.value;
                          C(A, { loopIntervalMs: In });
                        },
                        get value() {
                          return u(at);
                        }
                      }), z(pe);
                      var Fe = O(pe, 2), Pt = O(I(Fe));
                      const Qe = /* @__PURE__ */ _(() => n().maxLoopCount || "0");
                      Re(Pt, {
                        rows: 1,
                        style: "width: 100%;",
                        onchange: (zn) => {
                          const In = zn.target.value;
                          C(A, { maxLoopCount: In });
                        },
                        get value() {
                          return u(Qe);
                        }
                      }), z(Fe);
                      var qt = O(Fe, 2), yi = O(I(qt));
                      Re(yi, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (zn) => {
                          const In = zn.target.value;
                          C(A, { loopBreakCondition: In });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), z(qt), V(Ve, Xe);
                    };
                    ie(ft, (Ve) => {
                      n().loopEnable && Ve(Et);
                    });
                  }
                  z(ge), ke(() => {
                    Zi($e, !!n().async), Zi(Te, !!n().loopEnable);
                  }), V(ee, ge);
                },
                children: (ee, ge) => {
                  Ne(ee, {
                    class: "tf-node-toolbar-item",
                    children: (J, ye) => {
                      var ne = Q2();
                      V(J, ne);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            ie(xe, (oe) => {
              d() && oe(de);
            });
          }
          z(X), V(R, X);
        },
        $$slots: { default: !0 }
      });
    };
    ie(W, (D) => {
      (a() || l() || c()) && D(K);
    });
  }
  var L = O(W, 2), S = O(I(L), 2), T = I(S);
  rd(T, {
    get items() {
      return u(N);
    },
    get activeKeys() {
      return y;
    },
    onChange: (D, R) => {
      C(r(), { expand: R?.includes("key") }), h()?.(R?.includes("key") ? "key" : "");
    }
  }), z(S), z(L);
  var b = O(L, 2);
  {
    var P = (D) => {
      Vn(D, {
        type: "target",
        get position() {
          return me.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    ie(b, (D) => {
      g() && D(P);
    });
  }
  var E = O(b, 2);
  {
    var H = (D) => {
      Vn(D, {
        type: "source",
        get position() {
          return me.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    ie(E, (D) => {
      f() && D(H);
    });
  }
  var B = O(E, 2);
  return Ye(B, () => i() ?? tt), V(e, q), ae({
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
wn(["change"]);
re(
  Vt,
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
const vd = [
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
], ry = [
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
var oy = /* @__PURE__ */ G('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), iy = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), sy = /* @__PURE__ */ G('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const ay = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function md(e, t) {
  se(t, !0), He(e, ay);
  const n = m(t, "parameter", 7), r = m(t, "index", 7);
  let o = je(), i = /* @__PURE__ */ _(() => xn(o)), s = /* @__PURE__ */ _(() => ({
    ...n(),
    ...u(i)?.current?.data?.parameters[r()]
  }));
  const { updateNodeData: a } = nt(), l = (k, M) => {
    a(o, (A) => {
      let q = A.data.parameters;
      return q[r()][k] = M, { parameters: q };
    });
  }, c = (k) => {
    const M = k.target.value;
    l("name", M);
  }, d = (k) => {
    const M = k.target.checked;
    l("required", M);
  }, p = (k) => {
    const M = k.value;
    M && l("dataType", M);
  };
  let f;
  const g = () => {
    a(o, (k) => {
      let M = k.data.parameters;
      return M.splice(r(), 1), { parameters: [...M] };
    }), f?.hide();
  };
  var h = sy(), y = le(h), C = I(y);
  We(C, {
    style: "width: 100%;",
    get value() {
      return u(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: c
  }), z(y);
  var w = O(y, 2), N = I(w);
  ed(N, {
    get checked() {
      return u(s).required;
    },
    onchange: d
  }), z(w);
  var x = O(w, 2), $ = I(x);
  return _t(
    nr($, {
      placement: "bottom",
      floating: (k) => {
        var M = oy(), A = I(M), q = O(I(A));
        const W = /* @__PURE__ */ _(() => u(s).dataType ? [u(s).dataType] : ["String"]);
        ct(q, {
          get items() {
            return vd;
          },
          style: "width: 100%",
          onSelect: p,
          get value() {
            return u(W);
          }
        }), z(A);
        var K = O(A, 2), L = O(I(K));
        Re(L, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return u(s).defaultValue;
          },
          onchange: (E) => {
            const H = E.target.value;
            l("defaultValue", H);
          }
        }), z(K);
        var S = O(K, 2), T = O(I(S));
        Re(T, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return u(s).description;
          },
          onchange: (E) => {
            const H = E.target.value;
            l("description", H);
          }
        }), z(S);
        var b = O(S, 2), P = I(b);
        Ne(P, {
          onclick: g,
          children: (E, H) => {
            ve();
            var B = Se("删除");
            V(E, B);
          },
          $$slots: { default: !0 }
        }), z(b), z(M), V(k, M);
      },
      children: (k, M) => {
        Ne(k, {
          class: "input-btn-more",
          children: (A, q) => {
            var W = iy();
            V(A, W);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (k) => f = k,
    () => f
  ), z(x), V(e, h), ae({
    get parameter() {
      return n();
    },
    set parameter(k) {
      n(k), v();
    },
    get index() {
      return r();
    },
    set index(k) {
      r(k), v();
    }
  });
}
re(md, { parameter: {}, index: {} }, [], [], !0);
var ly = /* @__PURE__ */ G('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), uy = /* @__PURE__ */ G('<div class="none-params svelte-3n0wca">无输入参数</div>'), cy = /* @__PURE__ */ G('<div class="input-container svelte-3n0wca"><!> <!></div>');
const dy = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function yd(e, t) {
  se(t, !0), He(e, dy);
  let n = je(), r = /* @__PURE__ */ _(() => xn(n)), o = /* @__PURE__ */ _(() => [...u(r)?.current?.data?.parameters || []]);
  var i = cy(), s = I(i);
  {
    var a = (c) => {
      var d = ly();
      ve(4), V(c, d);
    };
    ie(s, (c) => {
      u(o).length !== 0 && c(a);
    });
  }
  var l = O(s, 2);
  st(
    l,
    19,
    () => u(o),
    (c) => c.id,
    (c, d, p) => {
      md(c, {
        get parameter() {
          return u(d);
        },
        get index() {
          return u(p);
        }
      });
    },
    (c) => {
      var d = uy();
      V(c, d);
    }
  ), z(i), V(e, i), ae();
}
re(yd, {}, [], [], !0);
const Jo = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = Qn()), Jo(t.children);
}), e), Bt = () => {
  const { updateNodeData: e } = nt();
  return {
    addParameter: (t, n = "parameters", r) => {
      Jo(r?.children);
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
var fy = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), py = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), gy = /* @__PURE__ */ G('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const hy = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function wd(e, t) {
  se(t, !0), He(e, hy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Ae(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = je(), { addParameter: i } = Bt();
  return Vt(e, Ie(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (s) => {
      var a = fy();
      V(s, a);
    },
    children: (s, a) => {
      var l = gy(), c = le(l), d = I(c);
      Le(d, {
        level: 3,
        children: (g, h) => {
          ve();
          var y = Se("输入参数");
          V(g, y);
        },
        $$slots: { default: !0 }
      });
      var p = O(d, 2);
      Ne(p, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input" });
        },
        children: (g, h) => {
          var y = py();
          V(g, y);
        },
        $$slots: { default: !0 }
      }), z(c);
      var f = O(c, 2);
      yd(f, {}), V(s, l);
    },
    $$slots: { icon: !0, default: !0 }
  })), ae({
    get data() {
      return n();
    },
    set data(s) {
      n(s), v();
    }
  });
}
re(wd, { data: {} }, [], [], !0);
const bd = (e, t, n) => {
  for (const r of n)
    r.target === t && r.source && (e.push(r.source), bd(e, r.source, n));
}, xd = (e, t, n) => !e || e.length === 0 ? [] : e.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: t + "." + r.name,
  children: xd(r.children, t + "." + r.name, n)
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
          children: xd(r, e.id, t)
        };
    }
  }
}, $d = (e = !1) => {
  const t = je(), n = xn(t), r = /* @__PURE__ */ _(It), o = /* @__PURE__ */ _(() => u(r).nodes), i = /* @__PURE__ */ _(() => u(r).edges), s = /* @__PURE__ */ _(() => u(r).nodeLookup);
  let a = /* @__PURE__ */ _(() => {
    const l = [];
    if (!n.current)
      return [];
    const c = u(s).get(t);
    if (e)
      for (const d of u(o)) {
        const p = d.parentId === n.current.id;
        if (p) {
          const f = pl(d, p, c);
          f && l.push(f);
        }
      }
    else {
      const d = [];
      bd(d, t, u(i));
      for (const p of u(o))
        if (d.includes(p.id)) {
          const f = p.parentId === n.current.id, g = pl(p, f, c);
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
var vy = /* @__PURE__ */ G('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), my = /* @__PURE__ */ G('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const yy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function kd(e, t) {
  se(t, !0), He(e, yy), On(() => {
    u(l).refType || g({ value: "ref" });
  });
  const n = m(t, "parameter", 7), r = m(t, "index", 7), o = m(t, "dataKeyName", 7), i = m(t, "useChildrenOnly", 7);
  let s = je(), a = /* @__PURE__ */ _(() => xn(s)), l = /* @__PURE__ */ _(() => ({
    ...n(),
    ...u(a)?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: c } = nt(), d = (L, S) => {
    c(s, (T) => {
      let b = T.data?.[o()];
      return b[r()] = { ...b[r()], [L]: S }, { [o()]: b };
    });
  }, p = (L, S) => {
    const T = S.target.value;
    d(L, T);
  }, f = (L) => {
    const S = L.value;
    d("ref", S);
  }, g = (L) => {
    const S = L.value;
    d("refType", S);
  };
  let h;
  const y = () => {
    c(s, (L) => {
      let S = L.data?.[o()];
      return S.splice(r(), 1), { [o()]: [...S] };
    }), h?.hide();
  };
  let C = $d(i());
  var w = my(), N = le(w), x = I(N);
  const $ = /* @__PURE__ */ _(() => u(l).nameDisabled === !0);
  We(x, {
    style: "width: 100%;",
    get value() {
      return u(l).name;
    },
    placeholder: "请输入参数名称",
    get disabled() {
      return u($);
    },
    oninput: (L) => p("name", L)
  }), z(N);
  var k = O(N, 2), M = I(k);
  {
    var A = (L) => {
      We(L, {
        get value() {
          return u(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (S) => p("value", S)
      });
    }, q = (L, S) => {
      {
        var T = (b) => {
          const P = /* @__PURE__ */ _(() => [u(l).ref]);
          ct(b, {
            get items() {
              return C.current;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return u(P);
            },
            expandAll: !0,
            onSelect: f
          });
        };
        ie(
          L,
          (b) => {
            u(l).refType !== "input" && b(T);
          },
          S
        );
      }
    };
    ie(M, (L) => {
      u(l).refType === "fixed" ? L(A) : L(q, !1);
    });
  }
  z(k);
  var W = O(k, 2), K = I(W);
  return _t(
    nr(K, {
      placement: "bottom",
      floating: (L) => {
        var S = vy(), T = I(S), b = O(I(T));
        const P = /* @__PURE__ */ _(() => u(l).refType ? [u(l).refType] : []);
        ct(b, {
          get items() {
            return ry;
          },
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return u(P);
          },
          onSelect: g
        }), z(T);
        var E = O(T, 2), H = O(I(E));
        Re(H, {
          rows: 1,
          style: "width: 100%;",
          onchange: (X) => {
            p("defaultValue", X);
          },
          get value() {
            return u(l).defaultValue;
          }
        }), z(E);
        var B = O(E, 2), D = O(I(B));
        Re(D, {
          rows: 3,
          style: "width: 100%;",
          onchange: (X) => {
            p("description", X);
          },
          get value() {
            return u(l).description;
          }
        }), z(B);
        var R = O(B, 2), F = I(R);
        Ne(F, {
          onclick: y,
          children: (X, Q) => {
            ve();
            var j = Se("删除");
            V(X, j);
          },
          $$slots: { default: !0 }
        }), z(R), z(S), V(L, S);
      },
      children: (L, S) => {
        ho(L, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (L) => h = L,
    () => h
  ), z(W), V(e, w), ae({
    get parameter() {
      return n();
    },
    set parameter(L) {
      n(L), v();
    },
    get index() {
      return r();
    },
    set index(L) {
      r(L), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(L) {
      o(L), v();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(L) {
      i(L), v();
    }
  });
}
re(
  kd,
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
var wy = /* @__PURE__ */ G('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), by = /* @__PURE__ */ G('<div class="none-params svelte-1sm1mgi"> </div>'), xy = /* @__PURE__ */ G('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const $y = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function ht(e, t) {
  se(t, !0), He(e, $y);
  const n = m(t, "noneParameterText", 7, "无输入参数"), r = m(t, "dataKeyName", 7, "parameters"), o = m(t, "useChildrenOnly", 7);
  let i = je(), s = /* @__PURE__ */ _(() => xn(i)), a = /* @__PURE__ */ _(() => [...u(s)?.current?.data?.[r()] || []]);
  var l = xy(), c = I(l);
  {
    var d = (f) => {
      var g = wy();
      ve(4), V(f, g);
    };
    ie(c, (f) => {
      u(a).length !== 0 && f(d);
    });
  }
  var p = O(c, 2);
  return st(
    p,
    19,
    () => u(a),
    (f) => f.id,
    (f, g, h) => {
      kd(f, {
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
      var g = by(), h = I(g, !0);
      z(g), ke(() => ze(h, n())), V(f, g);
    }
  ), z(l), V(e, l), ae({
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
re(ht, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
var ky = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), Cy = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), _y = /* @__PURE__ */ G('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const Sy = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function Cd(e, t) {
  se(t, !0), He(e, Sy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Ae(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = je(), { addParameter: i } = Bt();
  return Vt(e, Ie(
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
        var a = ky();
        V(s, a);
      },
      children: (s, a) => {
        var l = _y(), c = le(l), d = I(c);
        Le(d, {
          level: 3,
          children: (g, h) => {
            ve();
            var y = Se("输出参数");
            V(g, y);
          },
          $$slots: { default: !0 }
        });
        var p = O(d, 2);
        Ne(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (g, h) => {
            var y = Cy();
            V(g, y);
          },
          $$slots: { default: !0 }
        }), z(c);
        var f = O(c, 2);
        ht(f, { noneParameterText: "无输出参数", dataKeyName: "outputDefs" }), V(s, l);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ae({
    get data() {
      return n();
    },
    set data(s) {
      n(s), v();
    }
  });
}
re(Cd, { data: {} }, [], [], !0);
const Di = (e) => JSON.parse(JSON.stringify(e));
var Ey = /* @__PURE__ */ he('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Py = /* @__PURE__ */ G('<div class="input-more-item svelte-1cfeest"><!></div>'), Ny = /* @__PURE__ */ G('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), Ly = /* @__PURE__ */ G('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const My = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function _d(e, t) {
  se(t, !0), He(e, My);
  const n = m(t, "parameter", 7), r = m(t, "position", 7), o = m(t, "dataKeyName", 7);
  let i = je(), s = /* @__PURE__ */ _(() => xn(i)), a = /* @__PURE__ */ _(() => {
    let T = u(s)?.current?.data?.[o()], b;
    if (T && r().length > 0) {
      let P = T;
      for (let E = 0; E < r().length; E++) {
        const H = r()[E];
        E == r().length - 1 ? b = P[H] : P = P[H].children;
      }
    }
    return { ...n(), ...b };
  });
  const { updateNodeData: l } = nt(), c = (T, b) => {
    l(i, (P) => {
      const E = P.data?.[o()];
      if (E && r().length > 0) {
        let H = E;
        for (let B = 0; B < r().length; B++) {
          const D = r()[B];
          B == r().length - 1 ? H[D] = { ...H[D], [T]: b } : H = H[D].children;
        }
      }
      return { [o()]: [...Di(E)] };
    });
  }, d = (T, b) => {
    const P = b.target.value;
    c(T, P);
  }, p = (T) => {
    const b = T.value;
    c("dataType", b);
  };
  let f;
  const g = () => {
    l(i, (T) => {
      let b = T.data?.[o()];
      if (b && r().length > 0) {
        let P = b;
        for (let E = 0; E < r().length; E++) {
          const H = r()[E];
          E == r().length - 1 ? P.splice(H, 1) : P = P[H].children;
        }
      }
      return { [o()]: [...Di(b)] };
    }), f?.hide();
  }, h = () => {
    l(i, (T) => {
      let b = T.data?.[o()];
      if (b && r().length > 0) {
        let P = b;
        for (let E = 0; E < r().length; E++) {
          const H = r()[E];
          E == r().length - 1 ? P[H].children ? P[H].children.push({ id: Qn(), name: "newParam", dataType: "String" }) : P[H].children = [{ id: Qn(), name: "newParam", dataType: "String" }] : P = P[H].children;
        }
      }
      return { [o()]: [...Di(b)] };
    });
  };
  var y = Ly(), C = le(y), w = I(C);
  {
    var N = (T) => {
      var b = De(), P = le(b);
      st(P, 17, r, gr, (E, H) => {
        ve();
        var B = Se(" ");
        V(E, B);
      }), V(T, b);
    };
    ie(w, (T) => {
      r().length > 1 && T(N);
    });
  }
  var x = O(w, 2);
  const $ = /* @__PURE__ */ _(() => u(a).nameDisabled === !0);
  We(x, {
    style: "width: 100%;",
    get value() {
      return u(a).name;
    },
    placeholder: "请输入参数名称",
    oninput: (T) => {
      d("name", T);
    },
    get disabled() {
      return u($);
    }
  }), z(C);
  var k = O(C, 2), M = I(k);
  const A = /* @__PURE__ */ _(() => u(a).dataType ? [u(a).dataType] : []), q = /* @__PURE__ */ _(() => u(a).dataTypeDisabled === !0);
  ct(M, {
    get items() {
      return vd;
    },
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return u(A);
    },
    get disabled() {
      return u(q);
    },
    onSelect: p
  });
  var W = O(M, 2);
  {
    var K = (T) => {
      Ne(T, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: h,
        children: (b, P) => {
          var E = Ey();
          V(b, E);
        },
        $$slots: { default: !0 }
      });
    };
    ie(W, (T) => {
      (u(a).dataType === "Object" || u(a).dataType === "Array") && u(a).addChildDisabled !== !0 && T(K);
    });
  }
  z(k);
  var L = O(k, 2), S = I(L);
  return _t(
    nr(S, {
      placement: "bottom",
      floating: (T) => {
        var b = Ny(), P = I(b), E = O(I(P));
        const H = /* @__PURE__ */ _(() => u(a).defaultValue || "");
        Re(E, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return u(H);
          },
          onchange: (Q) => {
            d("defaultValue", Q);
          }
        }), z(P);
        var B = O(P, 2), D = O(I(B));
        const R = /* @__PURE__ */ _(() => u(a).description || "");
        Re(D, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return u(R);
          },
          onchange: (Q) => {
            d("description", Q);
          }
        }), z(B);
        var F = O(B, 2);
        {
          var X = (Q) => {
            var j = Py(), ce = I(j);
            Ne(ce, {
              onclick: g,
              children: (te, fe) => {
                ve();
                var U = Se("删除");
                V(te, U);
              },
              $$slots: { default: !0 }
            }), z(j), V(Q, j);
          };
          ie(F, (Q) => {
            u(a).deleteDisabled !== !0 && Q(X);
          });
        }
        z(b), V(T, b);
      },
      children: (T, b) => {
        ho(T, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => f = T,
    () => f
  ), z(L), V(e, y), ae({
    get parameter() {
      return n();
    },
    set parameter(T) {
      n(T), v();
    },
    get position() {
      return r();
    },
    set position(T) {
      r(T), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(T) {
      o(T), v();
    }
  });
}
re(_d, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var Vy = /* @__PURE__ */ G("<!> <!>", 1), Dy = /* @__PURE__ */ G('<div class="none-params svelte-1sm1mgi"> </div>'), Ty = /* @__PURE__ */ G('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Hy = /* @__PURE__ */ G('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Oy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function kn(e, t) {
  se(t, !0), He(e, Oy);
  const n = (f, g = tt, h = tt) => {
    var y = De(), C = le(y);
    st(
      C,
      19,
      g,
      (w) => `${w.id}_${w.children ? w.children.length : 0}`,
      (w, N, x) => {
        var $ = Vy(), k = le($);
        const M = /* @__PURE__ */ _(() => [...h(), u(x)]);
        _d(k, {
          get parameter() {
            return u(N);
          },
          get position() {
            return u(M);
          },
          get dataKeyName() {
            return o();
          }
        });
        var A = O(k, 2);
        {
          var q = (W) => {
            var K = /* @__PURE__ */ ws(() => [...h(), u(x)]);
            n(W, () => u(N).children, () => u(K));
          };
          ie(A, (W) => {
            u(N).children && W(q);
          });
        }
        V(w, $);
      },
      (w) => {
        var N = De(), x = le(N);
        {
          var $ = (k) => {
            var M = Dy(), A = I(M, !0);
            z(M), ke(() => ze(A, r())), V(k, M);
          };
          ie(x, (k) => {
            h().length === 0 && k($);
          });
        }
        V(w, N);
      }
    ), V(f, y);
  }, r = m(t, "noneParameterText", 7, "无输出参数"), o = m(t, "dataKeyName", 7, "outputDefs");
  let i = je(), s = /* @__PURE__ */ _(() => xn(i)), a = /* @__PURE__ */ _(() => [...u(s)?.current?.data?.[o()] || []]);
  var l = Hy(), c = I(l);
  {
    var d = (f) => {
      var g = Ty();
      ve(4), V(f, g);
    };
    ie(c, (f) => {
      u(a).length !== 0 && f(d);
    });
  }
  var p = O(c, 2);
  return n(p, () => u(a) || [], () => []), z(l), V(e, l), ae({
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
re(kn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Ay = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), zy = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Iy = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), By = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), qy = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), Ry = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Zy = /* @__PURE__ */ G('<div class="heading svelte-q0cqsa"><!> <!></div> <!> <!> <div class="setting-title svelte-q0cqsa">模型</div> <div class="setting-item svelte-q0cqsa"><!> <!></div> <div class="setting-title svelte-q0cqsa">采样参数</div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="100" step="1"/></div></div> <div class="setting-title svelte-q0cqsa">系统提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="setting-title svelte-q0cqsa">用户提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="heading svelte-q0cqsa"><!> <!> <!></div> <!>', 1);
const Ky = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Sd(e, t) {
  se(t, !0), He(e, Ky);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Ae(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = je(), { addParameter: i } = Bt(), s = Tn();
  let a = /* @__PURE__ */ Ee(Mt([]));
  On(async () => {
    const d = await s.provider?.llm?.();
    u(a).push(...d || []);
  });
  const { updateNodeData: l } = nt(), c = (d) => {
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
  return Ze(() => {
    n().outType || c("text");
  }), Vt(e, Ie(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var p = Ay();
        V(d, p);
      },
      children: (d, p) => {
        var f = Zy(), g = le(f), h = I(g);
        Le(h, {
          level: 3,
          children: (J, ye) => {
            ve();
            var ne = Se("输入参数");
            V(J, ne);
          },
          $$slots: { default: !0 }
        });
        var y = O(h, 2);
        Ne(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (J, ye) => {
            var ne = zy();
            V(J, ne);
          },
          $$slots: { default: !0 }
        }), z(g);
        var C = O(g, 2);
        ht(C, {});
        var w = O(C, 2);
        Le(w, {
          level: 3,
          mt: "10px",
          children: (J, ye) => {
            ve();
            var ne = Se("模型设置");
            V(J, ne);
          },
          $$slots: { default: !0 }
        });
        var N = O(w, 4), x = I(N);
        const $ = /* @__PURE__ */ _(() => n().llmId ? [n().llmId] : []);
        ct(x, {
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
            return u($);
          }
        });
        var k = O(x, 2);
        ho(k, {}), z(N);
        var M = O(N, 4), A = I(M), q = I(A), W = I(q);
        z(q);
        var K = O(q, 2);
        Ft(K), K.__input = [Iy, l, o], z(A), z(M);
        var L = O(M, 2), S = I(L), T = I(S), b = I(T);
        z(T);
        var P = O(T, 2);
        Ft(P), P.__input = [By, l, o], z(S), z(L);
        var E = O(L, 2), H = I(E), B = I(H), D = I(B);
        z(B);
        var R = O(B, 2);
        Ft(R), R.__input = [qy, l, o], z(H), z(E);
        var F = O(E, 4), X = I(F);
        const Q = /* @__PURE__ */ _(() => n().systemPrompt || "");
        Re(X, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return u(Q);
          },
          oninput: (J) => {
            l(o, { systemPrompt: J.target.value });
          }
        }), z(F);
        var j = O(F, 4), ce = I(j);
        const te = /* @__PURE__ */ _(() => n().userPrompt || "");
        Re(ce, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return u(te);
          },
          oninput: (J) => {
            l(o, { userPrompt: J.target.value });
          }
        }), z(j);
        var fe = O(j, 2), U = I(fe);
        Le(U, {
          level: 3,
          mt: "10px",
          children: (J, ye) => {
            ve();
            var ne = Se("输出参数");
            V(J, ne);
          },
          $$slots: { default: !0 }
        });
        var xe = O(U, 2);
        const de = /* @__PURE__ */ _(() => n().outType ? [n().outType] : []);
        ct(xe, {
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
            return u(de);
          }
        });
        var oe = O(xe, 2);
        {
          var ee = (J) => {
            Ne(J, {
              class: "input-btn-more",
              style: "margin-left: 10px",
              onclick: () => {
                i(o, "outputDefs");
              },
              children: (ye, ne) => {
                var Ce = Ry();
                V(ye, Ce);
              },
              $$slots: { default: !0 }
            });
          };
          ie(oe, (J) => {
            n().outType === "json" && J(ee);
          });
        }
        z(fe);
        var ge = O(fe, 2);
        kn(ge, {}), ke(() => {
          ze(W, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), _o(K, n().temperature ?? 0.5), ze(b, `Top P: ${n().topP ?? 0.9 ?? ""}`), _o(P, n().topP ?? 0.9), ze(D, `Top K: ${n().topK ?? 50 ?? ""}`), _o(R, n().topK ?? 50);
        }), V(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ae({
    get data() {
      return n();
    },
    set data(d) {
      n(d), v();
    }
  });
}
wn(["input"]);
re(Sd, { data: {} }, [], [], !0);
var Yy = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), jy = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Fy = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Wy = /* @__PURE__ */ G('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const Xy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Ed(e, t) {
  se(t, !0), He(e, Xy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Ae(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  On(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = je(), { addParameter: i } = Bt(), { updateNodeData: s } = nt(), a = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  return Vt(e, Ie(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var c = Yy();
        V(l, c);
      },
      children: (l, c) => {
        var d = Wy(), p = le(d), f = I(p);
        Le(f, {
          level: 3,
          children: (K, L) => {
            ve();
            var S = Se("输入参数");
            V(K, S);
          },
          $$slots: { default: !0 }
        });
        var g = O(f, 2);
        Ne(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (K, L) => {
            var S = jy();
            V(K, S);
          },
          $$slots: { default: !0 }
        }), z(p);
        var h = O(p, 2);
        ht(h, {});
        var y = O(h, 2);
        Le(y, {
          level: 3,
          mt: "10px",
          children: (K, L) => {
            ve();
            var S = Se("代码");
            V(K, S);
          },
          $$slots: { default: !0 }
        });
        var C = O(y, 4), w = I(C);
        const N = /* @__PURE__ */ _(() => n().engine ? [n().engine] : ["qlexpress"]);
        ct(w, {
          get items() {
            return a;
          },
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (K) => {
            const L = K.value;
            s(o, () => ({ engine: L }));
          },
          get value() {
            return u(N);
          }
        }), z(C);
        var x = O(C, 4), $ = I(x);
        const k = /* @__PURE__ */ _(() => n().code || "");
        Re($, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (K) => {
            s(o, () => ({ code: K.target.value }));
          },
          get value() {
            return u(k);
          }
        }), z(x);
        var M = O(x, 2), A = I(M);
        Le(A, {
          level: 3,
          mt: "10px",
          children: (K, L) => {
            ve();
            var S = Se("输出参数");
            V(K, S);
          },
          $$slots: { default: !0 }
        });
        var q = O(A, 2);
        Ne(q, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (K, L) => {
            var S = Fy();
            V(K, S);
          },
          $$slots: { default: !0 }
        }), z(M);
        var W = O(M, 2);
        kn(W, {}), V(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ae({
    get data() {
      return n();
    },
    set data(l) {
      n(l), v();
    }
  });
}
re(Ed, { data: {} }, [], [], !0);
var Uy = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), Gy = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Jy = /* @__PURE__ */ G('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Qy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Pd(e, t) {
  se(t, !0), He(e, Qy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Ae(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = je(), { addParameter: i } = Bt(), { updateNodeData: s } = nt();
  return Ze(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), Vt(e, Ie(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var l = Uy();
        V(a, l);
      },
      children: (a, l) => {
        var c = Jy(), d = le(c), p = I(d);
        Le(p, {
          level: 3,
          children: (k, M) => {
            ve();
            var A = Se("输入参数");
            V(k, A);
          },
          $$slots: { default: !0 }
        });
        var f = O(p, 2);
        Ne(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (k, M) => {
            var A = Gy();
            V(k, A);
          },
          $$slots: { default: !0 }
        }), z(d);
        var g = O(d, 2);
        ht(g, {});
        var h = O(g, 2);
        Le(h, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (k, M) => {
            ve();
            var A = Se("模板内容");
            V(k, A);
          },
          $$slots: { default: !0 }
        });
        var y = O(h, 2), C = I(y);
        const w = /* @__PURE__ */ _(() => n().template || "");
        Re(C, {
          rows: 10,
          placeholder: "请输入模板内容",
          style: "width: 100%",
          onchange: (k) => {
            s(o, () => ({ template: k.target.value }));
          },
          get value() {
            return u(w);
          }
        }), z(y);
        var N = O(y, 2), x = I(N);
        Le(x, {
          level: 3,
          mt: "10px",
          children: (k, M) => {
            ve();
            var A = Se("输出参数");
            V(k, A);
          },
          $$slots: { default: !0 }
        }), z(N);
        var $ = O(N, 2);
        kn($, {}), V(a, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ae({
    get data() {
      return n();
    },
    set data(a) {
      n(a), v();
    }
  });
}
re(Pd, { data: {} }, [], [], !0);
var ew = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), tw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), nw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), rw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ow = /* @__PURE__ */ G('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), iw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), sw = /* @__PURE__ */ G('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), aw = /* @__PURE__ */ G('<div style="width: 100%"><!></div>'), lw = /* @__PURE__ */ G('<div style="width: 100%"><!></div>'), uw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), cw = /* @__PURE__ */ G('<div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div class="radio-group svelte-1mo2w1q"><label class="svelte-1mo2w1q"><!>none</label> <label class="svelte-1mo2w1q"><!>form-data</label> <label class="svelte-1mo2w1q"><!>x-www-form-urlencoded</label> <label class="svelte-1mo2w1q"><!>json</label> <label class="svelte-1mo2w1q"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1mo2w1q"><!> <!></div> <!>', 1);
const dw = {
  hash: "svelte-1mo2w1q",
  code: ".heading.svelte-1mo2w1q {display:flex;margin-bottom:10px;}.radio-group.svelte-1mo2w1q {display:flex;margin:10px 0;}.radio-group.svelte-1mo2w1q label:where(.svelte-1mo2w1q) {display:flex;font-size:14px;}"
};
function Nd(e, t) {
  se(t, !0), He(e, dw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Ae(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  On(() => {
    n().method || a(i, () => ({ method: "get" }));
  });
  const o = [
    { value: "get", label: "GET" },
    { value: "post", label: "POST" },
    { value: "put", label: "PUT" },
    { value: "delete", label: "DELETE" },
    { value: "head", label: "HEAD" },
    { value: "patch", label: "PATCH" }
  ], i = je(), { addParameter: s } = Bt(), { updateNodeData: a } = nt();
  return Vt(e, Ie(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var c = ew();
        V(l, c);
      },
      children: (l, c) => {
        var d = cw(), p = le(d), f = I(p);
        Le(f, {
          level: 3,
          children: (ue, $e) => {
            ve();
            var _e = Se("输入参数");
            V(ue, _e);
          },
          $$slots: { default: !0 }
        });
        var g = O(f, 2);
        Ne(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (ue, $e) => {
            var _e = tw();
            V(ue, _e);
          },
          $$slots: { default: !0 }
        }), z(p);
        var h = O(p, 2);
        ht(h, {});
        var y = O(h, 2);
        Le(y, {
          level: 3,
          mt: "10px",
          children: (ue, $e) => {
            ve();
            var _e = Se("URL 地址");
            V(ue, _e);
          },
          $$slots: { default: !0 }
        });
        var C = O(y, 2), w = I(C), N = I(w);
        const x = /* @__PURE__ */ _(() => n().method ? [n().method] : ["get"]);
        ct(N, {
          get items() {
            return o;
          },
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (ue) => {
            const $e = ue.value;
            a(i, () => ({ method: $e }));
          },
          get value() {
            return u(x);
          }
        }), z(w);
        var $ = O(w, 2), k = I($);
        const M = /* @__PURE__ */ _(() => n().url || "");
        We(k, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (ue) => {
            a(i, () => ({ url: ue.target.value }));
          },
          get value() {
            return u(M);
          }
        }), z($), z(C);
        var A = O(C, 2), q = I(A);
        Le(q, {
          level: 3,
          children: (ue, $e) => {
            ve();
            var _e = Se("Http 头信息");
            V(ue, _e);
          },
          $$slots: { default: !0 }
        });
        var W = O(q, 2);
        Ne(W, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (ue, $e) => {
            var _e = nw();
            V(ue, _e);
          },
          $$slots: { default: !0 }
        }), z(A);
        var K = O(A, 2);
        ht(K, { dataKeyName: "headers" });
        var L = O(K, 2);
        Le(L, {
          level: 3,
          mt: "10px",
          children: (ue, $e) => {
            ve();
            var _e = Se("Body");
            V(ue, _e);
          },
          $$slots: { default: !0 }
        });
        var S = O(L, 2), T = I(S), b = I(T);
        const P = /* @__PURE__ */ _(() => !n().bodyType);
        We(b, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return u(P);
          },
          onchange: (ue) => {
            ue.target?.checked && a(i, { bodyType: "" });
          }
        }), ve(), z(T);
        var E = O(T, 2), H = I(E);
        const B = /* @__PURE__ */ _(() => n().bodyType === "form-data");
        We(H, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return u(B);
          },
          onchange: (ue) => {
            ue.target?.checked && a(i, { bodyType: "form-data" });
          }
        }), ve(), z(E);
        var D = O(E, 2), R = I(D);
        const F = /* @__PURE__ */ _(() => n().bodyType === "x-www-form-urlencoded");
        We(R, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return u(F);
          },
          onchange: (ue) => {
            ue.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
          }
        }), ve(), z(D);
        var X = O(D, 2), Q = I(X);
        const j = /* @__PURE__ */ _(() => n().bodyType === "json");
        We(Q, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return u(j);
          },
          onchange: (ue) => {
            ue.target?.checked && a(i, { bodyType: "json" });
          }
        }), ve(), z(X);
        var ce = O(X, 2), te = I(ce);
        const fe = /* @__PURE__ */ _(() => n().bodyType === "raw");
        We(te, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return u(fe);
          },
          onchange: (ue) => {
            ue.target?.checked && a(i, { bodyType: "raw" });
          }
        }), ve(), z(ce), z(S);
        var U = O(S, 2);
        {
          var xe = (ue) => {
            var $e = ow(), _e = le($e), Te = I(_e);
            Le(Te, {
              level: 3,
              children: (Ve, Xe) => {
                ve();
                var pe = Se("参数");
                V(Ve, pe);
              },
              $$slots: { default: !0 }
            });
            var ft = O(Te, 2);
            Ne(ft, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (Ve, Xe) => {
                var pe = rw();
                V(Ve, pe);
              },
              $$slots: { default: !0 }
            }), z(_e);
            var Et = O(_e, 2);
            ht(Et, { dataKeyName: "formData" }), V(ue, $e);
          };
          ie(U, (ue) => {
            n().bodyType === "form-data" && ue(xe);
          });
        }
        var de = O(U, 2);
        {
          var oe = (ue) => {
            var $e = sw(), _e = le($e), Te = I(_e);
            Le(Te, {
              level: 3,
              children: (Ve, Xe) => {
                ve();
                var pe = Se("Body 参数");
                V(Ve, pe);
              },
              $$slots: { default: !0 }
            });
            var ft = O(Te, 2);
            Ne(ft, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (Ve, Xe) => {
                var pe = iw();
                V(Ve, pe);
              },
              $$slots: { default: !0 }
            }), z(_e);
            var Et = O(_e, 2);
            ht(Et, { dataKeyName: "formUrlencoded" }), V(ue, $e);
          };
          ie(de, (ue) => {
            n().bodyType === "x-www-form-urlencoded" && ue(oe);
          });
        }
        var ee = O(de, 2);
        {
          var ge = (ue) => {
            var $e = aw(), _e = I($e);
            Re(_e, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Te) => {
                a(i, { bodyJson: Te.target.value });
              }
            }), z($e), V(ue, $e);
          };
          ie(ee, (ue) => {
            n().bodyType === "json" && ue(ge);
          });
        }
        var J = O(ee, 2);
        {
          var ye = (ue) => {
            var $e = lw(), _e = I($e);
            Re(_e, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Te) => {
                a(i, { bodyRaw: Te.target.value });
              }
            }), z($e), V(ue, $e);
          };
          ie(J, (ue) => {
            n().bodyType === "raw" && ue(ye);
          });
        }
        var ne = O(J, 2), Ce = I(ne);
        Le(Ce, {
          level: 3,
          mt: "10px",
          children: (ue, $e) => {
            ve();
            var _e = Se("输出参数");
            V(ue, _e);
          },
          $$slots: { default: !0 }
        });
        var Z = O(Ce, 2);
        Ne(Z, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (ue, $e) => {
            var _e = uw();
            V(ue, _e);
          },
          $$slots: { default: !0 }
        }), z(ne);
        var Je = O(ne, 2);
        kn(Je, {}), V(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ae({
    get data() {
      return n();
    },
    set data(l) {
      n(l), v();
    }
  });
}
re(Nd, { data: {} }, [], [], !0);
var fw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), pw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), gw = /* @__PURE__ */ G('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const hw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Ld(e, t) {
  se(t, !0), He(e, hw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Ae(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = je(), { addParameter: i } = Bt(), s = Tn();
  let a = /* @__PURE__ */ Ee(Mt([]));
  On(async () => {
    const c = await s.provider?.knowledge?.();
    u(a).push(...c || []);
  });
  const { updateNodeData: l } = nt();
  return Ze(() => {
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
  }), Vt(e, Ie(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = fw();
        V(c, d);
      },
      children: (c, d) => {
        var p = gw(), f = le(p), g = I(f);
        Le(g, {
          level: 3,
          children: (S, T) => {
            ve();
            var b = Se("输入参数");
            V(S, b);
          },
          $$slots: { default: !0 }
        });
        var h = O(g, 2);
        Ne(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (S, T) => {
            var b = pw();
            V(S, b);
          },
          $$slots: { default: !0 }
        }), z(f);
        var y = O(f, 2);
        ht(y, {});
        var C = O(y, 2);
        Le(C, {
          level: 3,
          mt: "10px",
          children: (S, T) => {
            ve();
            var b = Se("知识库设置");
            V(S, b);
          },
          $$slots: { default: !0 }
        });
        var w = O(C, 4), N = I(w);
        const x = /* @__PURE__ */ _(() => n().knowledgeId ? [n().knowledgeId] : []);
        ct(N, {
          get items() {
            return u(a);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (S) => {
            const T = S.value;
            l(o, () => ({ knowledgeId: T }));
          },
          get value() {
            return u(x);
          }
        }), z(w);
        var $ = O(w, 4), k = I($);
        We(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (S) => {
            const T = S.target.value;
            l(o, () => ({ keyword: T }));
          }
        }), z($);
        var M = O($, 4), A = I(M);
        const q = /* @__PURE__ */ _(() => n().limit || "");
        We(A, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          onchange: (S) => {
            const T = S.target.value;
            l(o, () => ({ limit: T }));
          },
          get value() {
            return u(q);
          }
        }), z(M);
        var W = O(M, 2), K = I(W);
        Le(K, {
          level: 3,
          mt: "10px",
          children: (S, T) => {
            ve();
            var b = Se("输出参数");
            V(S, b);
          },
          $$slots: { default: !0 }
        }), z(W);
        var L = O(W, 2);
        kn(L, {}), V(c, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ae({
    get data() {
      return n();
    },
    set data(c) {
      n(c), v();
    }
  });
}
re(Ld, { data: {} }, [], [], !0);
var vw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), mw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), yw = /* @__PURE__ */ G('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const ww = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Md(e, t) {
  se(t, !0), He(e, ww);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Ae(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = je(), { addParameter: i } = Bt(), s = Tn();
  let a = /* @__PURE__ */ Ee(Mt([]));
  On(async () => {
    const c = await s.provider?.searchEngine?.();
    u(a).push(...c || []);
  });
  const { updateNodeData: l } = nt();
  return Ze(() => {
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
  }), Vt(e, Ie(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = vw();
        V(c, d);
      },
      children: (c, d) => {
        var p = yw(), f = le(p), g = I(f);
        Le(g, {
          level: 3,
          children: (L, S) => {
            ve();
            var T = Se("输入参数");
            V(L, T);
          },
          $$slots: { default: !0 }
        });
        var h = O(g, 2);
        Ne(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (L, S) => {
            var T = mw();
            V(L, T);
          },
          $$slots: { default: !0 }
        }), z(f);
        var y = O(f, 2);
        ht(y, {});
        var C = O(y, 2);
        Le(C, {
          level: 3,
          mt: "10px",
          children: (L, S) => {
            ve();
            var T = Se("搜索引擎设置");
            V(L, T);
          },
          $$slots: { default: !0 }
        });
        var w = O(C, 4), N = I(w);
        const x = /* @__PURE__ */ _(() => n().engine ? [n().engine] : []);
        ct(N, {
          get items() {
            return u(a);
          },
          style: "width: 100%",
          placeholder: "请选择搜索引擎",
          onSelect: (L) => {
            const S = L.value;
            l(o, () => ({ engine: S }));
          },
          get value() {
            return u(x);
          }
        }), z(w);
        var $ = O(w, 4), k = I($);
        We(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (L) => {
            const S = L.target.value;
            l(o, () => ({ keyword: S }));
          }
        }), z($);
        var M = O($, 4), A = I(M);
        We(A, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (L) => {
            const S = L.target.value;
            l(o, () => ({ limit: S }));
          }
        }), z(M);
        var q = O(M, 2), W = I(q);
        Le(W, {
          level: 3,
          mt: "10px",
          children: (L, S) => {
            ve();
            var T = Se("输出参数");
            V(L, T);
          },
          $$slots: { default: !0 }
        }), z(q);
        var K = O(q, 2);
        kn(K, {}), V(c, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ae({
    get data() {
      return n();
    },
    set data(c) {
      n(c), v();
    }
  });
}
re(Md, { data: {} }, [], [], !0);
var bw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), xw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), $w = /* @__PURE__ */ G('<div class="heading svelte-1eqcy61"><!></div> <!> <div class="heading svelte-1eqcy61"><!> <!></div> <!>', 1);
const kw = {
  hash: "svelte-1eqcy61",
  code: ".heading.svelte-1eqcy61 {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function Vd(e, t) {
  se(t, !0), He(e, kw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Ae(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = je(), { addParameter: i } = Bt();
  return Ze(() => {
    (!n().loopVars || n().loopVars.length === 0) && i(o, "loopVars", { name: "loopVar", nameDisabled: !0, deleteDisabled: !0 });
  }), Vt(e, Ie(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (s) => {
        var a = bw();
        V(s, a);
      },
      handle: (s) => {
        Vn(s, {
          type: "source",
          get position() {
            return me.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (s, a) => {
        var l = $w(), c = le(l), d = I(c);
        Le(d, {
          level: 3,
          children: (C, w) => {
            ve();
            var N = Se("循环变量");
            V(C, N);
          },
          $$slots: { default: !0 }
        }), z(c);
        var p = O(c, 2);
        ht(p, { dataKeyName: "loopVars" });
        var f = O(p, 2), g = I(f);
        Le(g, {
          level: 3,
          children: (C, w) => {
            ve();
            var N = Se("输出参数");
            V(C, N);
          },
          $$slots: { default: !0 }
        });
        var h = O(g, 2);
        Ne(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (C, w) => {
            var N = xw();
            V(C, N);
          },
          $$slots: { default: !0 }
        }), z(f);
        var y = O(f, 2);
        ht(y, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), V(s, l);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), ae({
    get data() {
      return n();
    },
    set data(s) {
      n(s), v();
    }
  });
}
re(Vd, { data: {} }, [], [], !0);
const Cw = (e, t) => {
  const n = e.checked;
  t("required", n);
};
var _w = /* @__PURE__ */ G('<div class="input-more-setting svelte-2f9bnc"><div class="input-more-item svelte-2f9bnc">数据类型： <!></div> <div class="input-more-item svelte-2f9bnc">确认方式： <!></div> <label class="input-item-inline svelte-2f9bnc"><span>是否必填：</span> <input type="checkbox"/></label> <div class="input-more-item svelte-2f9bnc">默认值： <!></div> <div class="input-more-item svelte-2f9bnc">参数描述： <!></div> <div class="input-more-item svelte-2f9bnc"><!></div></div>'), Sw = /* @__PURE__ */ G('<div class="input-item svelte-2f9bnc"><!></div> <div class="input-item svelte-2f9bnc"><!></div> <div class="input-item svelte-2f9bnc"><!></div>', 1);
const Ew = {
  hash: "svelte-2f9bnc",
  code: ".input-item.svelte-2f9bnc {display:flex;align-items:center;}.input-item-inline.svelte-2f9bnc {display:flex;align-items:center;font-size:12px;color:#666;}.input-more-setting.svelte-2f9bnc {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-2f9bnc .input-more-item:where(.svelte-2f9bnc) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Dd(e, t) {
  se(t, !0), He(e, Ew);
  const n = m(t, "parameter", 7), r = m(t, "index", 7), o = m(t, "dataKeyName", 7), i = m(t, "useChildrenOnly", 7);
  let s = je(), a = xn(s), l = /* @__PURE__ */ _(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: c } = nt(), d = (b, P) => {
    c(s, (E) => {
      let H = E.data?.[o()];
      return H[r()] = { ...H[r()], [b]: P }, { [o()]: H };
    });
  }, p = (b, P) => {
    const E = P.target.value;
    d(b, E);
  }, f = (b) => {
    const P = b.value;
    d("ref", P);
  }, g = (b) => {
    const P = b.value;
    d("selectionMode", P);
  }, h = (b) => {
    const P = b.value;
    d("selectionDataType", P);
  };
  let y;
  const C = () => {
    c(s, (b) => {
      let P = b.data?.[o()];
      return P.splice(r(), 1), { [o()]: [...P] };
    }), y?.hide();
  };
  let w = $d(i());
  const N = [
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
  var $ = Sw(), k = le($), M = I(k);
  const A = /* @__PURE__ */ _(() => u(l).nameDisabled === !0);
  We(M, {
    style: "width: 100%;",
    get value() {
      return u(l).name;
    },
    placeholder: "请输入参数名称",
    get disabled() {
      return u(A);
    },
    oninput: (b) => p("name", b)
  }), z(k);
  var q = O(k, 2), W = I(q);
  {
    var K = (b) => {
      We(b, {
        get value() {
          return u(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (P) => p("value", P)
      });
    }, L = (b, P) => {
      {
        var E = (H) => {
          const B = /* @__PURE__ */ _(() => [u(l).ref]);
          ct(H, {
            get items() {
              return w.current;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return u(B);
            },
            expandAll: !0,
            onSelect: f
          });
        };
        ie(
          b,
          (H) => {
            u(l).refType !== "input" && H(E);
          },
          P
        );
      }
    };
    ie(W, (b) => {
      u(l).refType === "fixed" ? b(K) : b(L, !1);
    });
  }
  z(q);
  var S = O(q, 2), T = I(S);
  return _t(
    nr(T, {
      placement: "bottom",
      floating: (b) => {
        var P = _w(), E = I(P), H = O(I(E));
        const B = /* @__PURE__ */ _(() => u(l).selectionDataType ? [u(l).selectionDataType] : []);
        ct(H, {
          get items() {
            return N;
          },
          style: "width: 100%",
          defaultValue: ["text"],
          get value() {
            return u(B);
          },
          onSelect: h
        }), z(E);
        var D = O(E, 2), R = O(I(D));
        const F = /* @__PURE__ */ _(() => u(l).selectionMode ? [u(l).selectionMode] : []);
        ct(R, {
          get items() {
            return x;
          },
          style: "width: 100%",
          defaultValue: ["single"],
          get value() {
            return u(F);
          },
          onSelect: g
        }), z(D);
        var X = O(D, 2), Q = O(I(X), 2);
        Ft(Q), Zi(Q, !1), Q.__change = [Cw, d], z(X);
        var j = O(X, 2), ce = O(I(j));
        Re(ce, {
          rows: 1,
          style: "width: 100%;",
          onchange: (de) => {
            p("defaultValue", de);
          },
          get value() {
            return u(l).defaultValue;
          }
        }), z(j);
        var te = O(j, 2), fe = O(I(te));
        Re(fe, {
          rows: 3,
          style: "width: 100%;",
          onchange: (de) => {
            p("description", de);
          },
          get value() {
            return u(l).description;
          }
        }), z(te);
        var U = O(te, 2), xe = I(U);
        Ne(xe, {
          onclick: C,
          children: (de, oe) => {
            ve();
            var ee = Se("删除");
            V(de, ee);
          },
          $$slots: { default: !0 }
        }), z(U), z(P), V(b, P);
      },
      children: (b, P) => {
        ho(b, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (b) => y = b,
    () => y
  ), z(S), V(e, $), ae({
    get parameter() {
      return n();
    },
    set parameter(b) {
      n(b), v();
    },
    get index() {
      return r();
    },
    set index(b) {
      r(b), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(b) {
      o(b), v();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(b) {
      i(b), v();
    }
  });
}
wn(["change"]);
re(
  Dd,
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
var Pw = /* @__PURE__ */ G('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Nw = /* @__PURE__ */ G('<div class="none-params svelte-1sm1mgi"> </div>'), Lw = /* @__PURE__ */ G('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Mw = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Td(e, t) {
  se(t, !0), He(e, Mw);
  const n = m(t, "noneParameterText", 7, "无输入参数"), r = m(t, "dataKeyName", 7, "parameters"), o = m(t, "useChildrenOnly", 7);
  let i = je(), s = /* @__PURE__ */ _(() => xn(i)), a = /* @__PURE__ */ _(() => [...u(s)?.current?.data?.[r()] || []]);
  var l = Lw(), c = I(l);
  {
    var d = (f) => {
      var g = Pw();
      ve(4), V(f, g);
    };
    ie(c, (f) => {
      u(a).length !== 0 && f(d);
    });
  }
  var p = O(c, 2);
  return st(
    p,
    19,
    () => u(a),
    (f) => f.id,
    (f, g, h) => {
      Dd(f, {
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
      var g = Nw(), h = I(g, !0);
      z(g), ke(() => ze(h, n())), V(f, g);
    }
  ), z(l), V(e, l), ae({
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
re(Td, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
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
var Vw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Dw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Tw = /* @__PURE__ */ G('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">消息内容</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Hw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Hd(e, t) {
  se(t, !0), He(e, Hw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Ae(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = je(), { addParameter: i } = Bt(), { updateNodeData: s } = nt();
  return Ze(() => {
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
      os(a, n().outputDefs) || s(o, () => ({ outputDefs: a }));
    }
  }), Vt(e, Ie(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var l = Vw();
        V(a, l);
      },
      children: (a, l) => {
        var c = Tw(), d = le(c), p = I(d);
        Le(p, {
          level: 3,
          children: (k, M) => {
            ve();
            var A = Se("确认数据");
            V(k, A);
          },
          $$slots: { default: !0 }
        });
        var f = O(p, 2);
        Ne(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "confirms");
          },
          children: (k, M) => {
            var A = Dw();
            V(k, A);
          },
          $$slots: { default: !0 }
        }), z(d);
        var g = O(d, 2);
        Td(g, { dataKeyName: "confirms" });
        var h = O(g, 2);
        Le(h, {
          level: 3,
          mt: "10px",
          children: (k, M) => {
            ve();
            var A = Se("确认消息");
            V(k, A);
          },
          $$slots: { default: !0 }
        });
        var y = O(h, 4), C = I(y);
        const w = /* @__PURE__ */ _(() => n().message || "");
        Re(C, {
          rows: 5,
          placeholder: "请输入用户需要确认的消息内容",
          style: "width: 100%",
          onchange: (k) => {
            s(o, () => ({ message: k.target.value }));
          },
          get value() {
            return u(w);
          }
        }), z(y);
        var N = O(y, 2), x = I(N);
        Le(x, {
          level: 3,
          mt: "10px",
          children: (k, M) => {
            ve();
            var A = Se("输出参数");
            V(k, A);
          },
          $$slots: { default: !0 }
        }), z(N);
        var $ = O(N, 2);
        kn($, {}), V(a, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ae({
    get data() {
      return n();
    },
    set data(a) {
      n(a), v();
    }
  });
}
re(Hd, { data: {} }, [], [], !0);
const Ow = {
  startNode: wd,
  codeNode: Ed,
  confirmNode: Hd,
  llmNode: Sd,
  templateNode: Pd,
  httpNode: Nd,
  knowledgeNode: Ld,
  searchEngineNode: Md,
  loopNode: Vd,
  endNode: Cd
};
var Aw = /* @__PURE__ */ G("<!> ", 1);
function is(e, t) {
  se(t, !0);
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
      var c = Aw(), d = le(c);
      Ps(d, n);
      var p = O(d);
      ke(() => ze(p, ` ${r() ?? ""}`)), V(a, c);
    },
    $$slots: { default: !0 }
  }), ae({
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
re(is, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var zw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), Iw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), Bw = /* @__PURE__ */ G('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Od(e, t) {
  se(t, !0);
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
  ], s = [], a = Tn(), l = a.customNodes;
  if (l) {
    const w = Object.keys(l).sort((N, x) => (l[N].sortNo || 0) - (l[x].sortNo || 0));
    for (let N of w)
      l[N].group === "base" ? o.push({ type: N, ...l[N] }) : s.push({
        icon: l[N].icon,
        title: l[N].title,
        type: N
      });
    o.sort((N, x) => (N.sortNo || 0) - (x.sortNo || 0));
  }
  if (a.hiddenNodes) {
    const w = typeof a.hiddenNodes == "function" ? a.hiddenNodes() : a.hiddenNodes;
    if (Array.isArray(w)) {
      for (let N of w)
        for (let x = 0; x < o.length; x++)
          if (o[x].type === N) {
            o.splice(x, 1);
            break;
          }
    }
  }
  var c = Bw(), d = I(c), p = I(d), f = I(p);
  nd(f, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (w) => {
      Y(n, w.value.toString(), !0);
    }
  }), z(p);
  var g = O(p, 2), h = I(g);
  st(h, 21, () => o, gr, (w, N) => {
    is(w, Ie(() => u(N)));
  }), z(h);
  var y = O(h, 2);
  st(y, 21, () => s, gr, (w, N) => {
    is(w, Ie(() => u(N)));
  }), z(y), z(g), z(d);
  var C = O(d, 2);
  Ne(C, {
    onclick: () => {
      Y(r, u(r) ? "" : "show", !0);
    },
    children: (w, N) => {
      var x = De(), $ = le(x);
      {
        var k = (A) => {
          var q = zw();
          V(A, q);
        }, M = (A) => {
          var q = Iw();
          V(A, q);
        };
        ie($, (A) => {
          u(r) === "show" ? A(k) : A(M, !1);
        });
      }
      V(w, x);
    },
    $$slots: { default: !0 }
  }), z(c), ke(() => {
    yt(c, 1, `tf-toolbar ${u(r) ?? ""}`), dt(h, `display: ${u(n) === "base" ? "flex" : "none"}`), dt(y, `display: ${u(n) !== "base" ? "flex" : "none"}`);
  }), V(e, c), ae();
}
re(Od, {}, [], [], !0);
const qw = () => ({ getNode: (e) => qe.getNode(e) }), Rw = () => ({ ensureParentInNodesBefore: (e, t) => {
  qe.updateNodes((n) => {
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
} }), Zw = () => ({ getEdgesByTarget: (e) => qe.getEdges().filter((t) => t.target === e) });
var Kw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Yw = /* @__PURE__ */ G('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), jw = /* @__PURE__ */ G('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Fw = /* @__PURE__ */ G('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Ww = /* @__PURE__ */ G('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input/></div></div>', 1), Xw = /* @__PURE__ */ G('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Uw = /* @__PURE__ */ G('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Gw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Jw = /* @__PURE__ */ G('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Qw = /* @__PURE__ */ G("<!> <!> <div></div> <!>", 1);
const e7 = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Ad(e, t) {
  se(t, !0), He(e, e7);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Ae(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = je(), { addParameter: i } = Bt(), s = nt(), { updateNodeData: a } = s, l = (C) => {
    a(o, C);
  }, c = (C, w) => {
    l({ [C]: w.target?.value });
  }, d = { ...r, id: o, data: n() }, p = document.createElement("div"), f = Tn().customNodes[t.type];
  f.render?.(p, d, s);
  const g = f.forms;
  let h;
  Ze(() => {
    n().expand && h && h.append(p);
  }), Ze(() => {
    n() && f.onUpdate?.(p, { ...d, data: n() });
  }), Ze(() => {
    !n().parameters && f.parameters && l({
      parameters: Jo(JSON.parse(JSON.stringify(f.parameters)))
    });
  }), Ze(() => {
    !n().outputDefs && f.outputDefs && l({
      outputDefs: Jo(JSON.parse(JSON.stringify(f.outputDefs)))
    });
  });
  const y = /* @__PURE__ */ _(() => ({ ...n(), description: f.description }));
  return Vt(e, Ie(
    {
      get data() {
        return u(y);
      }
    },
    () => r,
    {
      icon: (C) => {
        var w = De(), N = le(w);
        Ps(N, () => f.icon), V(C, w);
      },
      children: (C, w) => {
        var N = Qw(), x = le(N);
        {
          var $ = (K) => {
            var L = Yw(), S = le(L), T = I(S);
            Le(T, {
              level: 3,
              children: (H, B) => {
                ve();
                var D = Se("输入参数");
                V(H, D);
              },
              $$slots: { default: !0 }
            });
            var b = O(T, 2);
            {
              var P = (H) => {
                Ne(H, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    i(o);
                  },
                  children: (B, D) => {
                    var R = Kw();
                    V(B, R);
                  },
                  $$slots: { default: !0 }
                });
              };
              ie(b, (H) => {
                f.parametersAddEnable !== !1 && H(P);
              });
            }
            z(S);
            var E = O(S, 2);
            ht(E, {}), V(K, L);
          };
          ie(x, (K) => {
            f.parametersEnable !== !1 && K($);
          });
        }
        var k = O(x, 2);
        {
          var M = (K) => {
            var L = De(), S = le(L);
            st(S, 17, () => g, gr, (T, b) => {
              var P = De(), E = le(P);
              {
                var H = (D) => {
                  var R = jw(), F = le(R), X = I(F, !0);
                  z(F);
                  var Q = O(F, 2), j = I(Q);
                  const ce = /* @__PURE__ */ _(() => n()[u(b).name] || u(b).defaultValue);
                  We(j, Ie(
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
                  )), z(Q), ke(() => ze(X, u(b).label)), V(D, R);
                }, B = (D, R) => {
                  {
                    var F = (Q) => {
                      var j = Fw(), ce = le(j), te = I(ce, !0);
                      z(ce);
                      var fe = O(ce, 2), U = I(fe);
                      const xe = /* @__PURE__ */ _(() => n()[u(b).name] || u(b).defaultValue);
                      Re(U, Ie(
                        {
                          rows: 3,
                          get placeholder() {
                            return u(b).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return u(xe);
                          }
                        },
                        () => u(b).attrs,
                        {
                          onchange: (de) => {
                            c(u(b).name, de);
                          }
                        }
                      )), z(fe), ke(() => ze(te, u(b).label)), V(Q, j);
                    }, X = (Q, j) => {
                      {
                        var ce = (fe) => {
                          var U = Ww(), xe = le(U), de = I(xe, !0);
                          z(xe);
                          var oe = O(xe, 2), ee = I(oe), ge = I(ee), J = I(ge);
                          z(ge);
                          var ye = O(ge, 2);
                          Ft(ye);
                          var ne = (Ce) => l({ [u(b).name]: parseFloat(Ce.target.value) });
                          Ge(
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
                          ), z(ee), z(oe), ke(() => {
                            ze(de, u(b).label), ze(J, `${u(b).description ?? ""}: ${n()[u(b).name] ?? u(b).defaultValue ?? ""}`);
                          }), V(fe, U);
                        }, te = (fe, U) => {
                          {
                            var xe = (oe) => {
                              var ee = Xw(), ge = le(ee), J = I(ge, !0);
                              z(ge);
                              var ye = O(ge, 2), ne = I(ye);
                              const Ce = /* @__PURE__ */ _(() => u(b).options || []), Z = /* @__PURE__ */ _(() => n()[u(b).name] ? [n()[u(b).name]] : [u(b).defaultValue]);
                              ct(ne, {
                                get items() {
                                  return u(Ce);
                                },
                                style: "width: 100%",
                                get placeholder() {
                                  return u(b).placeholder;
                                },
                                onSelect: (Je) => {
                                  const ue = Je.value;
                                  l({ [u(b).name]: ue });
                                },
                                get value() {
                                  return u(Z);
                                }
                              }), z(ye), ke(() => ze(J, u(b).label)), V(oe, ee);
                            }, de = (oe, ee) => {
                              {
                                var ge = (ye) => {
                                  var ne = Uw(), Ce = le(ne), Z = I(Ce, !0);
                                  z(Ce);
                                  var Je = O(Ce, 2), ue = I(Je);
                                  const $e = /* @__PURE__ */ _(() => u(b).chosen?.buttonText);
                                  td(ue, {
                                    style: "width: 100%",
                                    get placeholder() {
                                      return u(b).placeholder;
                                    },
                                    get buttonText() {
                                      return u($e);
                                    },
                                    onChosen: (_e, Te, ft) => {
                                      u(b).chosen?.onChosen?.(l, _e, Te, ft);
                                    },
                                    get value() {
                                      return n()[u(b).chosen?.valueDataKey || ""];
                                    },
                                    get label() {
                                      return n()[u(b).chosen?.labelDataKey || ""];
                                    }
                                  }), z(Je), ke(() => ze(Z, u(b).label)), V(ye, ne);
                                }, J = (ye, ne) => {
                                  {
                                    var Ce = (Z) => {
                                      Le(Z, Ie({ level: 3, mt: "10px" }, () => u(b).attrs, {
                                        children: (Je, ue) => {
                                          ve();
                                          var $e = Se();
                                          ke(() => ze($e, u(b).label)), V(Je, $e);
                                        },
                                        $$slots: { default: !0 }
                                      }));
                                    };
                                    ie(
                                      ye,
                                      (Z) => {
                                        u(b).type === "heading" && Z(Ce);
                                      },
                                      ne
                                    );
                                  }
                                };
                                ie(
                                  oe,
                                  (ye) => {
                                    u(b).type === "chosen" ? ye(ge) : ye(J, !1);
                                  },
                                  ee
                                );
                              }
                            };
                            ie(
                              fe,
                              (oe) => {
                                u(b).type === "select" ? oe(xe) : oe(de, !1);
                              },
                              U
                            );
                          }
                        };
                        ie(
                          Q,
                          (fe) => {
                            u(b).type === "slider" ? fe(ce) : fe(te, !1);
                          },
                          j
                        );
                      }
                    };
                    ie(
                      D,
                      (Q) => {
                        u(b).type === "textarea" ? Q(F) : Q(X, !1);
                      },
                      R
                    );
                  }
                };
                ie(E, (D) => {
                  u(b).type === "input" ? D(H) : D(B, !1);
                });
              }
              V(T, P);
            }), V(K, L);
          };
          ie(k, (K) => {
            g && K(M);
          });
        }
        var A = O(k, 2);
        _t(A, (K) => h = K, () => h);
        var q = O(A, 2);
        {
          var W = (K) => {
            var L = Jw(), S = le(L), T = I(S);
            Le(T, {
              level: 3,
              mt: "10px",
              children: (H, B) => {
                ve();
                var D = Se("输出参数");
                V(H, D);
              },
              $$slots: { default: !0 }
            });
            var b = O(T, 2);
            {
              var P = (H) => {
                Ne(H, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    i(o, "outputDefs");
                  },
                  children: (B, D) => {
                    var R = Gw();
                    V(B, R);
                  },
                  $$slots: { default: !0 }
                });
              };
              ie(b, (H) => {
                f.outputDefsAddEnable !== !1 && H(P);
              });
            }
            z(S);
            var E = O(S, 2);
            kn(E, {}), V(K, L);
          };
          ie(q, (K) => {
            f.outputDefsEnable !== !1 && K(W);
          });
        }
        ke(() => {
          dt(A, f.rootStyle || ""), yt(A, 1, bn(f.rootClass), "svelte-q0cqsa");
        }), V(C, N);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ae({
    get data() {
      return n();
    },
    set data(C) {
      n(C), v();
    }
  });
}
re(Ad, { data: {} }, [], [], !0);
const t7 = () => ({ updateEdgeData: (e, t, n) => {
  const r = qe.getEdge(e);
  if (!r)
    return;
  const o = typeof t == "function" ? t(r) : t;
  r.data = n?.replace ? o : { ...r.data, ...o }, qe.updateEdges((i) => i.map((s) => s.id === e ? r : s));
} }), n7 = () => ({ deleteEdge: (e) => {
  qe.removeEdge(e);
} });
var r7 = /* @__PURE__ */ G('<div class="panel-content svelte-80qc4q"><div>边属性设置</div> <div class="setting-title svelte-80qc4q">边条件设置</div> <div class="setting-item svelte-80qc4q"><!></div> <div class="setting-item svelte-80qc4q" style="padding: 8px 0"><!> <!></div></div>'), o7 = /* @__PURE__ */ G("<!> <!> <!> <!>", 1), i7 = /* @__PURE__ */ G('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const s7 = {
  hash: "svelte-80qc4q",
  code: ".panel-content.svelte-80qc4q {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-80qc4q {margin:10px 0;font-size:12px;color:#999;}.setting-item.svelte-80qc4q {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function zd(e, t) {
  se(t, !0), He(e, s7);
  const n = m(t, "onInit", 7), r = nt();
  n()(r);
  let o = /* @__PURE__ */ Ee(!1), i = /* @__PURE__ */ Ee(null);
  const { updateEdgeData: s } = t7(), a = (E) => {
    E.preventDefault(), E.dataTransfer && (E.dataTransfer.dropEffect = "move");
  }, l = (E) => {
    E.preventDefault();
    const H = r.screenToFlowPosition({ x: E.clientX - 250, y: E.clientY - 100 }), B = E.dataTransfer?.getData("application/tinyflow");
    if (!B)
      return;
    const D = JSON.parse(B), R = { id: `node_${Qn()}`, position: H, data: {}, ...D };
    qe.addNode(R), qe.selectNodeOnly(R.id);
  }, { getNode: c } = qw(), d = (E) => {
    const H = c(E.source), B = c(E.target);
    if (E.sourceHandle === "loop_handle" || H.parentId) {
      const D = r.getEdges();
      for (let R of D)
        if (R.target === E.target) {
          const F = c(R.source);
          if (E.sourceHandle === "loop_handle" && F.parentId !== H.id || H.parentId && F.parentId !== H.parentId)
            return !1;
        }
    }
    return !(!H.parentId && B.parentId && B.parentId !== H.id);
  }, { ensureParentInNodesBefore: p } = Rw(), f = (E, H) => {
    if (!H.isValid)
      return;
    const B = H.toNode;
    if (B.parentId)
      return;
    const D = H.fromNode, R = H.fromHandle, F = { position: { ...B.position } };
    if (R.id === "loop_handle" ? F.parentId = D.id : D.parentId && (F.parentId = D.parentId), F.parentId) {
      const X = c(F.parentId);
      F.position = {
        x: B.position.x - X.position.x,
        y: B.position.y - X.position.y
      }, p(F.parentId, B.id), r.updateNode(B.id, F);
    }
    setTimeout(() => {
      qe.getEdges().forEach((X) => {
        X.target === B.id && X.source == D.id && (Y(o, !0), Y(i, X, !0));
      });
    });
  }, { getEdgesByTarget: g } = Zw(), h = (E) => {
    E.edges.forEach((H) => {
      H.id === u(i)?.id && (Y(i, null), Y(o, !1));
      const B = c(H.target);
      if (B && B.parentId) {
        const D = g(H.target), R = c(B.parentId);
        if (D.length === 0)
          r.updateNode(B.id, {
            parentId: void 0,
            position: {
              x: B.position.x + R.position.x,
              y: B.position.y + R.position.y
            }
          });
        else {
          let F = !1;
          for (let X = 0; X < D.length; X++) {
            const Q = D[X], j = c(Q.source);
            if (j.parentId || j.type === "loopNode") {
              F = !0;
              break;
            }
          }
          F || r.updateNode(B.id, {
            parentId: void 0,
            position: {
              x: B.position.x + R.position.x,
              y: B.position.y + R.position.y
            }
          });
        }
      }
    });
  }, { deleteEdge: y } = n7(), C = (E, H) => {
  }, w = (E) => {
  }, N = {
    // ...nodeTypes
  }, x = Tn().customNodes;
  if (x)
    for (let E of Object.keys(x))
      N[E] = Ad;
  const $ = Tn().onDataChange;
  Ze(() => {
    $?.({
      nodes: qe.getNodes(),
      edges: qe.getEdges(),
      viewport: qe.getViewport()
    });
  });
  var k = i7(), M = I(k);
  const A = /* @__PURE__ */ _(() => ({ ...Ow, ...N }));
  var q = qe.getNodes, W = qe.setNodes, K = qe.getEdges, L = qe.setEdges, S = qe.getViewport, T = qe.setViewport;
  const b = /* @__PURE__ */ _(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: Yr.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  Bc(M, {
    get nodeTypes() {
      return u(A);
    },
    get nodes() {
      return q();
    },
    set nodes(E) {
      W(E);
    },
    get edges() {
      return K();
    },
    set edges(E) {
      L(E);
    },
    get viewport() {
      return S();
    },
    set viewport(E) {
      T(E);
    },
    class: "tinyflow-logo",
    ondrop: l,
    ondragover: a,
    isValidConnection: d,
    onconnectend: f,
    onconnectstart: C,
    onconnect: w,
    connectionRadius: 50,
    onedgeclick: (E) => {
      Y(o, !0), Y(i, E.edge, !0);
    },
    onbeforeconnect: (E) => ({ ...E, id: Qn() }),
    ondelete: h,
    onclick: (E) => {
      const H = E.target;
      H.classList.contains("svelte-flow__edge-interaction") || H.classList.contains("panel-content") || H.closest(".panel-content") || (Y(o, !1), Y(i, null));
    },
    get defaultEdgeOptions() {
      return u(b);
    },
    children: (E, H) => {
      var B = o7(), D = le(B);
      Uc(D, {});
      var R = O(D, 2);
      Fc(R, {});
      var F = O(R, 2);
      Jc(F, {});
      var X = O(F, 2);
      {
        var Q = (j) => {
          co(j, {
            children: (ce, te) => {
              var fe = r7(), U = O(I(fe), 4), xe = I(U);
              const de = /* @__PURE__ */ _(() => u(i)?.data?.condition);
              Re(xe, {
                rows: 3,
                placeholder: "请输入边条件",
                style: "width: 100%",
                get value() {
                  return u(de);
                },
                onchange: (J) => {
                  u(i) && s(u(i).id, { condition: J.target?.value });
                }
              }), z(U);
              var oe = O(U, 2), ee = I(oe);
              Ne(ee, {
                onclick: () => {
                  y(u(i)?.id), Y(o, !1);
                },
                children: (J, ye) => {
                  ve();
                  var ne = Se("删除");
                  V(J, ne);
                },
                $$slots: { default: !0 }
              });
              var ge = O(ee, 2);
              Ne(ge, {
                primary: !0,
                onclick: () => {
                  Y(o, !1);
                },
                children: (J, ye) => {
                  ve();
                  var ne = Se("保存");
                  V(J, ne);
                },
                $$slots: { default: !0 }
              }), z(oe), z(fe), V(ce, fe);
            },
            $$slots: { default: !0 }
          });
        };
        ie(X, (j) => {
          u(o) && j(Q);
        });
      }
      V(E, B);
    },
    $$slots: { default: !0 }
  });
  var P = O(M, 2);
  return Od(P, {}), z(k), V(e, k), ae({
    get onInit() {
      return n();
    },
    set onInit(E) {
      n(E), v();
    }
  });
}
re(zd, { onInit: {} }, [], [], !0);
function a7(e, t) {
  se(t, !0);
  const n = m(t, "options", 7), r = m(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  return qe.init(o?.nodes || [], o?.edges || []), fr("tinyflow_options", n()), qc(e, {
    children: (i, s) => {
      zd(i, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), ae({
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
customElements.define("tinyflow-component", re(a7, { options: {}, onInit: {} }, [], [], !1));
const c7 = /* @__PURE__ */ Bd({
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
    const n = e, r = qd(null);
    let o = null;
    return Rd(() => {
      r.value && (o = new bm({
        ...n,
        element: r.value
      }));
    }), Zd(() => {
      o && (o.destroy(), o = null);
    }), t({
      getData: () => o ? o.getData() : (console.warn("Tinyflow instance is not initialized"), null)
    }), (s, a) => (Yd(), Kd("div", {
      ref_key: "divRef",
      ref: r,
      class: Fd(["tinyflow", s.className]),
      style: jd(s.style)
    }, null, 6));
  }
});
export {
  c7 as Tinyflow
};
//# sourceMappingURL=index.js.map
