import { defineComponent as Od, ref as Td, onMounted as zd, onUnmounted as Ad, createElementBlock as Id, openBlock as qd, normalizeStyle as Zd, normalizeClass as Bd } from "vue";
const Rd = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Rd);
const os = 1, is = 2, pl = 4, Kd = 8, Yd = 16, jd = 1, Wd = 2, gl = 4, Xd = 8, Fd = 16, hl = 1, Ud = 2, ss = "[", as = "[!", ls = "]", Zn = {}, nt = Symbol(), Gd = "http://www.w3.org/1999/xhtml", Jd = "http://www.w3.org/2000/svg", Qd = "@attach", ef = !1;
var Gr = Array.isArray, tf = Array.prototype.indexOf, us = Array.from, Do = Object.keys, Vo = Object.defineProperty, ln = Object.getOwnPropertyDescriptor, vl = Object.getOwnPropertyDescriptors, ml = Object.prototype, nf = Array.prototype, Jo = Object.getPrototypeOf, ta = Object.isExtensible;
function Sr(e) {
  return typeof e == "function";
}
const tt = () => {
};
function rf(e) {
  return e();
}
function Ho(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function st(e, t, n = !1) {
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
const Ct = 2, cs = 4, Qr = 8, ds = 16, mn = 32, Qn = 64, fs = 128, bt = 256, Lo = 512, $t = 1024, fn = 2048, er = 4096, un = 8192, Qo = 16384, yl = 32768, xr = 65536, na = 1 << 17, of = 1 << 18, wl = 1 << 19, Li = 1 << 20, ps = 1 << 21, Yt = Symbol("$state"), gs = Symbol("legacy props"), sf = Symbol(""), bl = new class extends Error {
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
    if (Gr(e)) {
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
    r2: jn(!1)
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
      zl(r);
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
function Mt(e) {
  if (typeof e != "object" || e === null || Yt in e)
    return e;
  const t = Jo(e);
  if (t !== ml && t !== nf)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Gr(e), o = /* @__PURE__ */ Ee(0), i = Kn, s = (a) => {
    if (Kn === i)
      return a();
    var l = Oe, u = Kn;
    En(null), aa(i);
    var d = a();
    return En(l), aa(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ Ee(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && gf();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var p = /* @__PURE__ */ Ee(u.value);
          return n.set(l, p), p;
        }) : K(d, u.value, !0), !0;
      },
      deleteProperty(a, l) {
        var u = n.get(l);
        if (u === void 0) {
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
          K(u, nt), $o(o);
        }
        return !0;
      },
      get(a, l, u) {
        if (l === Yt)
          return e;
        var d = n.get(l), p = l in a;
        if (d === void 0 && (!p || ln(a, l)?.writable) && (d = s(() => {
          var g = Mt(p ? a[l] : nt), h = /* @__PURE__ */ Ee(g);
          return h;
        }), n.set(l, d)), d !== void 0) {
          var f = c(d);
          return f === nt ? void 0 : f;
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
          if (p !== void 0 && f !== nt)
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
        if (l === Yt)
          return !0;
        var u = n.get(l), d = u !== void 0 && u.v !== nt || Reflect.has(a, l);
        if (u !== void 0 || Pe !== null && (!d || ln(a, l)?.writable)) {
          u === void 0 && (u = s(() => {
            var f = d ? Mt(a[l]) : nt, g = /* @__PURE__ */ Ee(f);
            return g;
          }), n.set(l, u));
          var p = c(u);
          if (p === nt)
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
            h !== void 0 ? K(h, nt) : g in a && (h = s(() => /* @__PURE__ */ Ee(nt)), n.set(g + "", h));
          }
        if (p === void 0)
          (!f || ln(a, l)?.writable) && (p = s(() => /* @__PURE__ */ Ee(void 0)), K(p, Mt(u)), n.set(l, p));
        else {
          f = p.v !== nt;
          var y = s(() => Mt(u));
          K(p, y);
        }
        var $ = Reflect.getOwnPropertyDescriptor(a, l);
        if ($?.set && $.set.call(d, u), !f) {
          if (r && typeof l == "string") {
            var w = (
              /** @type {Source<number>} */
              n.get("length")
            ), N = Number(l);
            Number.isInteger(N) && N >= w.v && K(w, N + 1);
          }
          $o(o);
        }
        return !0;
      },
      ownKeys(a) {
        c(o);
        var l = Reflect.ownKeys(a).filter((p) => {
          var f = n.get(p);
          return f === void 0 || f.v !== nt;
        });
        for (var [u, d] of n)
          d.v !== nt && !(u in a) && l.push(u);
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
    if (e !== null && typeof e == "object" && Yt in e)
      return e[Yt];
  } catch {
  }
  return e;
}
function xf(e, t) {
  return Object.is(oa(e), oa(t));
}
// @__NO_SIDE_EFFECTS__
function $r(e) {
  var t = Ct | fn, n = Oe !== null && (Oe.f & Ct) !== 0 ? (
    /** @type {Derived} */
    Oe
  ) : null;
  return Pe === null || n !== null && (n.f & bt) !== 0 ? t |= bt : Pe.f |= wl, {
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
    parent: n ?? Pe,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function E(e) {
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
  var t, n = Pe;
  Nn(Cf(e));
  try {
    Sl(e), t = Gl(e);
  } finally {
    Nn(n);
  }
  return t;
}
function El(e) {
  var t = ys(e);
  if (e.equals(t) || (e.v = t, e.wv = Fl()), !Sn) {
    var n = ($n || (e.f & bt) !== 0) && e.deps !== null ? er : $t;
    Ut(e, n);
  }
}
const Bn = /* @__PURE__ */ new Map();
function jn(e, t) {
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
  const n = jn(e);
  return Xl(n), n;
}
// @__NO_SIDE_EFFECTS__
function Nl(e, t = !1, n = !0) {
  const r = jn(e);
  return t || (r.equals = $l), Cr && n && qe !== null && qe.l !== null && (qe.l.s ??= []).push(r), r;
}
function K(e, t, n = !1) {
  Oe !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ht || (Oe.f & na) !== 0) && ei() && (Oe.f & (Ct | ds | na)) !== 0 && !cn?.includes(e) && vf();
  let r = n ? Mt(t) : t;
  return Oi(e, r);
}
function Oi(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Sn ? Bn.set(e, t) : Bn.set(e, n), e.v = t, (e.f & Ct) !== 0 && ((e.f & fn) !== 0 && ys(
      /** @type {Derived} */
      e
    ), Ut(e, (e.f & bt) === 0 ? $t : er)), e.wv = Fl(), Ml(e, fn), ei() && Pe !== null && (Pe.f & $t) !== 0 && (Pe.f & (mn | Qn)) === 0 && (Et === null ? Df([e]) : Et.push(e));
  }
  return t;
}
function ia(e, t = 1) {
  var n = c(e), r = t === 1 ? n++ : n--;
  return K(e, n), r;
}
function $o(e) {
  K(e, e.v + 1);
}
function Ml(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = ei(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      (a & fn) === 0 && (!r && s === Pe || (Ut(s, t), (a & ($t | bt)) !== 0 && ((a & Ct) !== 0 ? Ml(
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
let Ne;
function ot(e) {
  if (e === null)
    throw eo(), Zn;
  return Ne = e;
}
function gn() {
  return ot(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Qt(Ne)
  );
}
function A(e) {
  if (be) {
    if (/* @__PURE__ */ Qt(Ne) !== null)
      throw eo(), Zn;
    Ne = e;
  }
}
function we(e = 1) {
  if (be) {
    for (var t = e, n = Ne; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Qt(n);
    Ne = n;
  }
}
function Ti() {
  for (var e = 0, t = Ne; ; ) {
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
function Pl(e) {
  if (!e || e.nodeType !== cr)
    throw eo(), Zn;
  return (
    /** @type {Comment} */
    e.data
  );
}
var ft, Dl, Vl, Hl;
function zi() {
  if (ft === void 0) {
    ft = window, Dl = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Vl = ln(t, "firstChild").get, Hl = ln(t, "nextSibling").get, ta(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), ta(n) && (n.__t = void 0);
  }
}
function hn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Xe(e) {
  return Vl.call(e);
}
// @__NO_SIDE_EFFECTS__
function Qt(e) {
  return Hl.call(e);
}
function I(e, t) {
  if (!be)
    return /* @__PURE__ */ Xe(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Xe(Ne)
  );
  if (n === null)
    n = Ne.appendChild(hn());
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
      /* @__PURE__ */ Xe(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Qt(n) : n;
  }
  return Ne;
}
function T(e, t = 1, n = !1) {
  let r = be ? Ne : e;
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
function Ll(e) {
  Pe === null && Oe === null && cf(), Oe !== null && (Oe.f & bt) !== 0 && Pe === null && uf(), Sn && lf();
}
function _f(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function yn(e, t, n, r = !0) {
  var o = Pe, i = {
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
  if (!s && r && (o !== null && _f(i, o), Oe !== null && (Oe.f & Ct) !== 0)) {
    var a = (
      /** @type {Derived} */
      Oe
    );
    (a.effects ??= []).push(i);
  }
  return i;
}
function Ol() {
  return Oe !== null && !Ht;
}
function Tl(e) {
  const t = yn(Qr, null, !1);
  return Ut(t, $t), t.teardown = e, t;
}
function je(e) {
  if (Ll(), !Oe && Pe && (Pe.f & mn) !== 0) {
    var t = (
      /** @type {ComponentContext} */
      qe
    );
    (t.e ??= []).push(e);
  } else
    return zl(e);
}
function zl(e) {
  return yn(cs | ps, e, !1);
}
function Al(e) {
  return Ll(), yn(Qr | ps, e, !0);
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
  return Vn(() => e(...r.map(c)));
}
function Vn(e, t = 0) {
  var n = yn(Qr | ds | t, e, !0);
  return n;
}
function Ft(e, t = !0) {
  return yn(Qr | mn, e, !0, t);
}
function Il(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Sn, r = Oe;
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
  ), n = !0), ql(e, t && !n), To(e, 0), Ut(e, Qo);
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
function Or(e) {
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
let Tr = [], zr = [];
function Yl() {
  var e = Tr;
  Tr = [], Ho(e);
}
function jl() {
  var e = zr;
  zr = [], Ho(e);
}
function ro(e) {
  Tr.length === 0 && queueMicrotask(Yl), Tr.push(e);
}
function Nf(e) {
  zr.length === 0 && Ef(jl), zr.push(e);
}
function Mf() {
  Tr.length > 0 && Yl(), zr.length > 0 && jl();
}
function Pf(e) {
  var t = (
    /** @type {Effect} */
    Pe
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
let Hr = [], Oe = null, Ht = !1;
function En(e) {
  Oe = e;
}
let Pe = null;
function Nn(e) {
  Pe = e;
}
let cn = null;
function Xl(e) {
  Oe !== null && Oe.f & Li && (cn === null ? cn = [e] : cn.push(e));
}
let at = null, yt = 0, Et = null;
function Df(e) {
  Et = e;
}
let Oo = 1, qr = 0, Kn = qr;
function aa(e) {
  Kn = e;
}
let $n = !1;
function Fl() {
  return ++Oo;
}
function ti(e) {
  var t = e.f;
  if ((t & fn) !== 0)
    return !0;
  if ((t & er) !== 0) {
    var n = e.deps, r = (t & bt) !== 0;
    if (n !== null) {
      var o, i, s = (t & Lo) !== 0, a = r && Pe !== null && !$n, l = n.length;
      if (s || a) {
        var u = (
          /** @type {Derived} */
          e
        ), d = u.parent;
        for (o = 0; o < l; o++)
          i = n[o], (s || !i?.reactions?.includes(u)) && (i.reactions ??= []).push(u);
        s && (u.f ^= Lo), a && d !== null && (d.f & bt) === 0 && (u.f ^= bt);
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
    (!r || Pe !== null && !$n) && Ut(e, $t);
  }
  return !1;
}
function Ul(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !cn?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & Ct) !== 0 ? Ul(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? Ut(i, fn) : (i.f & $t) !== 0 && Ut(i, er), ni(
        /** @type {Effect} */
        i
      ));
    }
}
function Gl(e) {
  var t = at, n = yt, r = Et, o = Oe, i = $n, s = cn, a = qe, l = Ht, u = Kn, d = e.f;
  at = /** @type {null | Value[]} */
  null, yt = 0, Et = null, $n = (d & bt) !== 0 && (Ht || !Rn || Oe === null), Oe = (d & (mn | Qn)) === 0 ? e : null, cn = null, ra(e.ctx), Ht = !1, Kn = ++qr, e.f |= Li, e.ac !== null && (e.ac.abort(bl), e.ac = null);
  try {
    var p = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (at !== null) {
      var g;
      if (To(e, yt), f !== null && yt > 0)
        for (f.length = yt + at.length, g = 0; g < at.length; g++)
          f[yt + g] = at[g];
      else
        e.deps = f = at;
      if (!$n || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (d & Ct) !== 0 && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (g = yt; g < f.length; g++)
          (f[g].reactions ??= []).push(e);
    } else f !== null && yt < f.length && (To(e, yt), f.length = yt);
    if (ei() && Et !== null && !Ht && f !== null && (e.f & (Ct | er | fn)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      Et.length; g++)
        Ul(
          Et[g],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (qr++, Et !== null && (r === null ? r = Et : r.push(.../** @type {Source[]} */
    Et))), p;
  } catch (h) {
    Pf(h);
  } finally {
    at = t, yt = n, Et = r, Oe = o, $n = i, cn = s, ra(a), Ht = l, Kn = u, e.f ^= Li;
  }
}
function Vf(e, t) {
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
  (at === null || !at.includes(t)) && (Ut(t, er), (t.f & (bt | Lo)) === 0 && (t.f ^= Lo), Sl(
    /** @type {Derived} **/
    t
  ), To(
    /** @type {Derived} **/
    t,
    0
  ));
}
function To(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Vf(e, n[r]);
}
function Cs(e) {
  var t = e.f;
  if ((t & Qo) === 0) {
    Ut(e, $t);
    var n = Pe, r = Rn;
    Pe = e, Rn = !0;
    try {
      (t & ds) !== 0 ? Sf(e) : ql(e), Il(e);
      var o = Gl(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = Oo;
      var i;
      ef && mf && (e.f & fn) !== 0 && e.deps;
    } finally {
      Rn = r, Pe = n;
    }
  }
}
function Hf() {
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
    for (Rn = !0; Hr.length > 0; ) {
      t++ > 1e3 && Hf();
      var n = Hr, r = n.length;
      Hr = [];
      for (var o = 0; o < r; o++) {
        var i = Of(n[o]);
        Lf(i);
      }
      Bn.clear();
    }
  } finally {
    Ar = !1, Rn = e, Ir = null;
  }
}
function Lf(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if ((r.f & (Qo | un)) === 0 && ti(r)) {
        var o = Oo;
        if (Cs(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? Bl(r) : r.fn = null), Oo > o && (r.f & ps) !== 0)
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
  Hr.push(t);
}
function Of(e) {
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
    if (Mf(), Hr.length === 0)
      return Ar = !1, Ir = null, /** @type {T} */
      t;
    Ar = !0, Jl();
  }
}
async function Tf() {
  await Promise.resolve(), v();
}
function c(e) {
  var t = e.f, n = (t & Ct) !== 0;
  if (Oe !== null && !Ht) {
    if (!cn?.includes(e)) {
      var r = Oe.deps;
      e.rv < qr && (e.rv = qr, at === null && r !== null && r[yt] === e ? yt++ : at === null ? at = [e] : (!$n || !at.includes(e)) && at.push(e));
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
const zf = -7169;
function Ut(e, t) {
  e.f = e.f & zf | t;
}
function Af(e, t) {
  var n = {};
  for (var r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}
function $s(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Yt in e)
      Ai(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Yt in n && Ai(n);
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
  be && /* @__PURE__ */ Xe(e) !== null && ws(e);
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
  var t = Oe, n = Pe;
  En(null), Nn(null);
  try {
    return e();
  } finally {
    En(t), Nn(n);
  }
}
const eu = /* @__PURE__ */ new Set(), Ii = /* @__PURE__ */ new Set();
function _s(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || Mr.call(t, i), !i.cancelBubble)
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
  t instanceof HTMLMediaElement) && Tl(() => {
    t.removeEventListener(e, s, i);
  });
}
function Hn(e) {
  for (var t = 0; t < e.length; t++)
    eu.add(e[t]);
  for (var n of Ii)
    n(e);
}
function Mr(e) {
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
    Vo(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = Oe, p = Pe;
    En(null), Nn(null);
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
              var [$, ...w] = y;
              $.apply(i, [e, ...w]);
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
      e.__root = t, delete e.currentTarget, En(d), Nn(p);
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
    Pe
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function U(e, t) {
  var n = (t & hl) !== 0, r = (t & Ud) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (be)
      return ht(Ne, null), Ne;
    o === void 0 && (o = ks(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ Xe(o)));
    var s = (
      /** @type {TemplateNode} */
      r || Dl ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Xe(s)
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
      return ht(Ne, null), Ne;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        ks(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ Xe(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ Xe(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ Xe(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ Xe(l);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Xe(u)
      ), p = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      ht(d, p);
    } else
      ht(u, u);
    return u;
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
  var n = Ne;
  return n.nodeType !== hs && (n.before(n = hn()), ot(n)), ht(n, n), n;
}
function Ve() {
  if (be)
    return ht(Ne, null), Ne;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = hn();
  return e.append(t, n), ht(t, n), e;
}
function H(e, t) {
  if (be) {
    Pe.nodes_end = Ne, gn();
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
const Yf = [
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
  return Yf.includes(e);
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
function Uf(e) {
  return Ff.includes(e);
}
const Gf = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function Jf(e) {
  return Gf.includes(
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
  zi(), t.intro = t.intro ?? !1;
  const n = t.target, r = be, o = Ne;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Xe(n)
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
    if (Ne === null || Ne.nodeType !== cr || /** @type {Comment} */
    Ne.data !== ls)
      throw eo(), Zn;
    return wt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === Zn)
      return t.recover === !1 && ff(), zi(), ws(n), wt(!1), tu(e, t);
    throw s;
  } finally {
    wt(r), ot(o);
  }
}
const nr = /* @__PURE__ */ new Map();
function nu(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  zi();
  var a = /* @__PURE__ */ new Set(), l = (p) => {
    for (var f = 0; f < p.length; f++) {
      var g = p[f];
      if (!a.has(g)) {
        a.add(g);
        var h = Uf(g);
        t.addEventListener(g, Mr, { passive: h });
        var y = nr.get(g);
        y === void 0 ? (document.addEventListener(g, Mr, { passive: h }), nr.set(g, 1)) : nr.set(g, y + 1);
      }
    }
  };
  l(us(eu)), Ii.add(l);
  var u = void 0, d = kf(() => {
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
      ), u = e(p, r) || {}, be && (Pe.nodes_end = Ne), i && ue();
    }), () => {
      for (var f of a) {
        t.removeEventListener(f, Mr);
        var g = (
          /** @type {number} */
          nr.get(f)
        );
        --g === 0 ? (document.removeEventListener(f, Mr), nr.delete(f)) : nr.set(f, g);
      }
      Ii.delete(l), p !== n && p.parentNode?.removeChild(p);
    };
  });
  return Zi.set(u, d), u;
}
let Zi = /* @__PURE__ */ new WeakMap();
function ep(e, t) {
  const n = Zi.get(e);
  return n ? (Zi.delete(e), n(t)) : Promise.resolve();
}
function Be(e, t, ...n) {
  var r = e, o = tt, i;
  Vn(() => {
    o !== (o = t()) && (i && (vt(i), i = null), i = Ft(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, xr), be && (r = Ne);
}
function Ln(e) {
  qe === null && vs(), Cr && qe.l !== null ? tp(qe).m.push(e) : je(() => {
    const t = et(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function ri(e) {
  qe === null && vs(), Ln(() => () => et(e));
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
  var o = e, i = null, s = null, a = nt, l = n > 0 ? xr : 0, u = !1;
  const d = (f, g = !0) => {
    u = !0, p(g, f);
  }, p = (f, g) => {
    if (a === (a = f)) return;
    let h = !1;
    if (be && r !== -1) {
      if (n === 0) {
        const $ = Pl(o);
        $ === ss ? r = 0 : $ === as ? r = 1 / 0 : (r = parseInt($.substring(1)), r !== r && (r = a ? 1 / 0 : -1));
      }
      const y = r > n;
      !!a === y && (o = Ti(), ot(o), wt(!1), h = !0, r = -1);
    }
    a ? (i ? Or(i) : g && (i = Ft(() => g(o))), s && fr(s, () => {
      s = null;
    })) : (s ? Or(s) : g && (s = Ft(() => g(o, [n + 1, r]))), i && fr(i, () => {
      i = null;
    })), h && wt(!0);
  };
  Vn(() => {
    u = !1, t(d), u || p(null, null);
  }, l), be && (o = Ne);
}
function np(e, t) {
  be && ot(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Xe(e)
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
    for (var u = 0; u < i; u++) {
      var d = t[u];
      a || (r.delete(d.k), xn(e, d.prev, d.next)), vt(d.e, !a);
    }
  });
}
function lt(e, t, n, r, o, i = null) {
  var s = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & pl) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    s = be ? ot(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Xe(u)
    ) : u.appendChild(hn());
  }
  be && gn();
  var d = null, p = !1, f = /* @__PURE__ */ ms(() => {
    var g = n();
    return Gr(g) ? g : g == null ? [] : us(g);
  });
  Vn(() => {
    var g = c(f), h = g.length;
    if (p && h === 0)
      return;
    p = h === 0;
    let y = !1;
    if (be) {
      var $ = Pl(s) === as;
      $ !== (h === 0) && (s = Ti(), ot(s), wt(!1), y = !0);
    }
    if (be) {
      for (var w = null, N, b = 0; b < h; b++) {
        if (Ne.nodeType === cr && /** @type {Comment} */
        Ne.data === ls) {
          s = /** @type {Comment} */
          Ne, y = !0, wt(!1);
          break;
        }
        var C = g[b], _ = r(C, b);
        N = ru(
          Ne,
          a,
          w,
          null,
          C,
          _,
          b,
          o,
          t,
          n
        ), a.items.set(_, N), w = N;
      }
      h > 0 && ot(Ti());
    }
    be || op(g, a, s, o, t, r, n), i !== null && (h === 0 ? d ? Or(d) : d = Ft(() => i(s)) : d !== null && fr(d, () => {
      d = null;
    })), y && wt(!0), c(f);
  }), be && (s = Ne);
}
function op(e, t, n, r, o, i, s) {
  var a = (o & Kd) !== 0, l = (o & (os | is)) !== 0, u = e.length, d = t.items, p = t.first, f = p, g, h = null, y, $ = [], w = [], N, b, C, _;
  if (a)
    for (_ = 0; _ < u; _ += 1)
      N = e[_], b = i(N, _), C = d.get(b), C !== void 0 && (C.a?.measure(), (y ??= /* @__PURE__ */ new Set()).add(C));
  for (_ = 0; _ < u; _ += 1) {
    if (N = e[_], b = i(N, _), C = d.get(b), C === void 0) {
      var D = f ? (
        /** @type {TemplateNode} */
        f.e.nodes_start
      ) : n;
      h = ru(
        D,
        t,
        h,
        h === null ? t.first : h.next,
        N,
        b,
        _,
        r,
        o,
        s
      ), d.set(b, h), $ = [], w = [], f = h.next;
      continue;
    }
    if (l && ip(C, N, _, o), (C.e.f & un) !== 0 && (Or(C.e), a && (C.a?.unfix(), (y ??= /* @__PURE__ */ new Set()).delete(C))), C !== f) {
      if (g !== void 0 && g.has(C)) {
        if ($.length < w.length) {
          var z = w[0], Z;
          h = z.prev;
          var j = $[0], Y = $[$.length - 1];
          for (Z = 0; Z < $.length; Z += 1)
            ca($[Z], z, n);
          for (Z = 0; Z < w.length; Z += 1)
            g.delete(w[Z]);
          xn(t, j.prev, Y.next), xn(t, h, j), xn(t, Y, z), f = z, h = Y, _ -= 1, $ = [], w = [];
        } else
          g.delete(C), ca(C, f, n), xn(t, C.prev, C.next), xn(t, C, h === null ? t.first : h.next), xn(t, h, C), h = C;
        continue;
      }
      for ($ = [], w = []; f !== null && f.k !== b; )
        (f.e.f & un) === 0 && (g ??= /* @__PURE__ */ new Set()).add(f), w.push(f), f = f.next;
      if (f === null)
        continue;
      C = f;
    }
    $.push(C), h = C, f = C.next;
  }
  if (f !== null || g !== void 0) {
    for (var M = g === void 0 ? [] : us(g); f !== null; )
      (f.e.f & un) === 0 && M.push(f), f = f.next;
    var k = M.length;
    if (k > 0) {
      var L = (o & pl) !== 0 && u === 0 ? n : null;
      if (a) {
        for (_ = 0; _ < k; _ += 1)
          M[_].a?.measure();
        for (_ = 0; _ < k; _ += 1)
          M[_].a?.fix();
      }
      rp(t, M, L, d);
    }
  }
  a && ro(() => {
    if (y !== void 0)
      for (C of y)
        C.a?.apply();
  }), Pe.first = t.first && t.first.e, Pe.last = h && h.e;
}
function ip(e, t, n, r) {
  (r & os) !== 0 && Oi(e.v, t), (r & is) !== 0 ? Oi(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function ru(e, t, n, r, o, i, s, a, l, u) {
  var d = (l & os) !== 0, p = (l & Yd) === 0, f = d ? p ? /* @__PURE__ */ Nl(o, !1, !1) : jn(o) : o, g = (l & is) === 0 ? s : jn(s), h = {
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
    return h.e = Ft(() => a(e, f, g, u), be), h.e.prev = n && n.e, h.e.next = r && r.e, n === null ? t.first = h : (n.next = h, n.e.next = h.e), r !== null && (r.prev = h, r.e.prev = h.e), h;
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
      Pe
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
        Ne.data;
        for (var l = gn(), u = l; l !== null && (l.nodeType !== cr || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ Qt(l);
        if (l === null)
          throw eo(), Zn;
        ht(Ne, u), i = ot(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var p = ks(d);
      if ((n || r) && (p = /** @type {Element} */
      /* @__PURE__ */ Xe(p)), ht(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Xe(p),
        /** @type {TemplateNode} */
        p.lastChild
      ), n || r)
        for (; /* @__PURE__ */ Xe(p); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ Xe(p)
          );
      else
        i.before(p);
    }
  });
}
function Es(e, t, n) {
  be && gn();
  var r = e, o, i;
  Vn(() => {
    o !== (o = t()) && (i && (fr(i), i = null), o && (i = Ft(() => n(r, o))));
  }, xr), be && (r = Ne);
}
function sp(e, t, n, r, o, i) {
  let s = be;
  be && gn();
  var a, l, u = null;
  be && Ne.nodeType === af && (u = /** @type {Element} */
  Ne, gn());
  var d = (
    /** @type {TemplateNode} */
    be ? Ne : e
  ), p;
  Vn(() => {
    const f = t() || null;
    var g = f === "svg" ? Jd : null;
    f !== a && (p && (f === null ? fr(p, () => {
      p = null, l = null;
    }) : f === l ? Or(p) : vt(p)), f && f !== l && (p = Ft(() => {
      if (u = be ? (
        /** @type {Element} */
        u
      ) : g ? document.createElementNS(g, f) : document.createElement(f), ht(u, u), r) {
        be && Jf(f) && u.append(document.createComment(""));
        var h = (
          /** @type {TemplateNode} */
          be ? /* @__PURE__ */ Xe(u) : u.appendChild(hn())
        );
        be && (h === null ? wt(!1) : ot(h)), r(u, h);
      }
      Pe.nodes_end = u, d.before(u);
    })), a = f, a && (l = a));
  }, xr), s && (wt(!0), ot(d));
}
function Te(e, t) {
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
  Vn(() => {
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
function ut(e, t, n, r) {
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
    if (!Gr(t))
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
  }), Tl(() => {
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
          ye(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          ye(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, Nf(n), Zf();
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
function ye(e, t, n, r) {
  var o = oi(e);
  be && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[sf] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && au(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function pp(e, t, n, r, o = !1) {
  var i = oi(e), s = i[iu], a = !i[su];
  let l = be && s;
  l && wt(!1);
  var u = t || {}, d = e.tagName === "OPTION";
  for (var p in t)
    p in n || (n[p] = null);
  n.class ? n.class = wn(n.class) : (r || n[Cn]) && (n.class = null), n[Rt] && (n.style ??= null);
  var f = au(e);
  for (const b in n) {
    let C = n[b];
    if (d && b === "value" && C == null) {
      e.value = e.__value = "", u[b] = C;
      continue;
    }
    if (b === "class") {
      var g = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      mt(e, g, C, r, t?.[Cn], n[Cn]), u[b] = C, u[Cn] = n[Cn];
      continue;
    }
    if (b === "style") {
      ut(e, C, t?.[Rt], n[Rt]), u[b] = C, u[Rt] = n[Rt];
      continue;
    }
    var h = u[b];
    if (!(C === h && !(C === void 0 && e.hasAttribute(b)))) {
      u[b] = C;
      var y = b[0] + b[1];
      if (y !== "$$")
        if (y === "on") {
          const _ = {}, D = "$$" + b;
          let z = b.slice(2);
          var $ = jf(z);
          if (Kf(z) && (z = z.slice(0, -7), _.capture = !0), !$ && h) {
            if (C != null) continue;
            e.removeEventListener(z, u[D], _), u[D] = null;
          }
          if (C != null)
            if ($)
              e[`__${z}`] = C, Hn([z]);
            else {
              let Z = function(j) {
                u[b].call(this, j);
              };
              u[D] = _s(z, e, Z, _);
            }
          else $ && (e[`__${z}`] = void 0);
        } else if (b === "style")
          ye(e, b, C);
        else if (b === "autofocus")
          If(
            /** @type {HTMLElement} */
            e,
            !!C
          );
        else if (!s && (b === "__value" || b === "value" && C != null))
          e.value = e.__value = C;
        else if (b === "selected" && d)
          fp(
            /** @type {HTMLOptionElement} */
            e,
            C
          );
        else {
          var w = b;
          a || (w = Xf(w));
          var N = w === "defaultValue" || w === "defaultChecked";
          if (C == null && !s && !N)
            if (i[b] = null, w === "value" || w === "checked") {
              let _ = (
                /** @type {HTMLInputElement} */
                e
              );
              const D = t === void 0;
              if (w === "value") {
                let z = _.defaultValue;
                _.removeAttribute(w), _.defaultValue = z, _.value = _.__value = D ? z : null;
              } else {
                let z = _.defaultChecked;
                _.removeAttribute(w), _.defaultChecked = z, _.checked = D ? z : !1;
              }
            } else
              e.removeAttribute(b);
          else N || f.includes(w) && (s || typeof C != "string") ? e[w] = C : typeof C != "function" && ye(e, w, C);
        }
    }
  }
  return l && wt(!0), u;
}
function Fe(e, t, n = [], r, o = !1, i = $r) {
  const s = n.map(i);
  var a = void 0, l = {}, u = e.nodeName === "SELECT", d = !1;
  if (Vn(() => {
    var f = t(...s.map(c)), g = pp(e, a, f, r, o);
    d && u && "value" in f && Bi(
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
      [su]: e.namespaceURI === Gd
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
var gp = /* @__PURE__ */ new Ns({
  box: "border-box"
});
function va(e, t, n) {
  var r = gp.observe(e, () => n(e[t]));
  to(() => (et(() => n(e[t])), r));
}
function ma(e, t) {
  return e === t || e?.[Yt] === t;
}
function Pt(e = {}, t, n, r) {
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
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], a = !0);
      return a && o++, o;
    });
    r = () => c(s);
  }
  n.b.length && Al(() => {
    ya(t, r), Ho(n.b);
  }), je(() => {
    const o = et(() => n.m.map(rf));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && je(() => {
    ya(t, r), Ho(n.a);
  });
}
function ya(e, t) {
  if (e.l.s)
    for (const n of e.l.s) c(n);
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
function ze(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    vp
  );
}
const mp = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return c(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    if (!(t in e.special)) {
      var r = Pe;
      try {
        Nn(e.parent_effect), e.special[t] = m(
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
        Nn(r);
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
      version: jn(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        Pe
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
    if (t === Yt || t === gs) return !1;
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
  ), l = !0, u = () => (l && (l = !1, a = s ? et(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (i) {
    var p = Yt in e || gs in e;
    d = ln(e, t)?.set ?? (p && t in e ? (b) => e[t] = b : void 0);
  }
  var f, g = !1;
  i ? [f, g] = hp(() => (
    /** @type {V} */
    e[t]
  )) : f = /** @type {V} */
  e[t], f === void 0 && r !== void 0 && (f = u(), d && (o && pf(), d(f)));
  var h;
  if (o ? h = () => {
    var b = (
      /** @type {V} */
      e[t]
    );
    return b === void 0 ? u() : (l = !0, b);
  } : h = () => {
    var b = (
      /** @type {V} */
      e[t]
    );
    return b !== void 0 && (a = /** @type {V} */
    void 0), b === void 0 ? a : b;
  }, o && (n & gl) === 0)
    return h;
  if (d) {
    var y = e.$$legacy;
    return function(b, C) {
      return arguments.length > 0 ? ((!o || !C || y || g) && d(C ? h() : b), b) : h();
    };
  }
  var $ = !1, w = ((n & jd) !== 0 ? $r : ms)(() => ($ = !1, h()));
  i && c(w);
  var N = (
    /** @type {Effect} */
    Pe
  );
  return function(b, C) {
    if (arguments.length > 0) {
      const _ = C ? c(w) : o && i ? Mt(b) : b;
      return K(w, _), $ = !0, a !== void 0 && (a = _), b;
    }
    return Sn && $ || (N.f & Qo) !== 0 ? w.v : c(w);
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
      var a = /* @__PURE__ */ Nl(s, !1, !1);
      return n.set(i, a), a;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, s) {
          return c(n.get(s) ?? r(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === gs ? !0 : (c(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
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
      i === "$set" || i === "$destroy" || i === "$on" || Vo(this, i, {
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
          r !== "default" && (i.name = r), H(o, i);
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
          for (const r of Do(this.$$c)) {
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
    return Do(this.$$p_d).find(
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
      return Do(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return Do(t).forEach((a) => {
    Vo(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = ko(a, l, t), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var d = ln(u, a)?.get;
          d ? u[a] = l : u.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    Vo(s.prototype, a, {
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
function Ms(e) {
  return e == null ? Ep : function() {
    return this.querySelector(e);
  };
}
function Np(e) {
  typeof e != "function" && (e = Ms(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, u, d = 0; d < s; ++d)
      (l = i[d]) && (u = e.call(l, l.__data__, d, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[d] = u);
  return new _t(r, this._parents);
}
function Mp(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Pp() {
  return [];
}
function du(e) {
  return e == null ? Pp : function() {
    return this.querySelectorAll(e);
  };
}
function Dp(e) {
  return function() {
    return Mp(e.apply(this, arguments));
  };
}
function Vp(e) {
  typeof e == "function" ? e = Dp(e) : e = du(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(e.call(l, l.__data__, u, s)), o.push(l));
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
var Hp = Array.prototype.find;
function Lp(e) {
  return function() {
    return Hp.call(this.children, e);
  };
}
function Op() {
  return this.firstElementChild;
}
function Tp(e) {
  return this.select(e == null ? Op : Lp(typeof e == "function" ? e : pu(e)));
}
var zp = Array.prototype.filter;
function Ap() {
  return Array.from(this.children);
}
function Ip(e) {
  return function() {
    return zp.call(this.children, e);
  };
}
function qp(e) {
  return this.selectAll(e == null ? Ap : Ip(typeof e == "function" ? e : pu(e)));
}
function Zp(e) {
  typeof e != "function" && (e = fu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new _t(r, this._parents);
}
function gu(e) {
  return new Array(e.length);
}
function Bp() {
  return new _t(this._enter || this._groups.map(gu), this._parents);
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
function Rp(e) {
  return function() {
    return e;
  };
}
function Kp(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, u = i.length; s < u; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new zo(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function Yp(e, t, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), d = t.length, p = i.length, f = new Array(d), g;
  for (a = 0; a < d; ++a)
    (l = t[a]) && (f[a] = g = s.call(l, l.__data__, a, t) + "", u.has(g) ? o[a] = l : u.set(g, l));
  for (a = 0; a < p; ++a)
    g = s.call(e, i[a], a, i) + "", (l = u.get(g)) ? (r[a] = l, l.__data__ = i[a], u.delete(g)) : n[a] = new zo(e, i[a]);
  for (a = 0; a < d; ++a)
    (l = t[a]) && u.get(f[a]) === l && (o[a] = l);
}
function jp(e) {
  return e.__data__;
}
function Wp(e, t) {
  if (!arguments.length) return Array.from(this, jp);
  var n = t ? Yp : Kp, r = this._parents, o = this._groups;
  typeof e != "function" && (e = Rp(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var d = r[u], p = o[u], f = p.length, g = Xp(e.call(d, d && d.__data__, u, r)), h = g.length, y = a[u] = new Array(h), $ = s[u] = new Array(h), w = l[u] = new Array(f);
    n(d, p, y, $, w, g, t);
    for (var N = 0, b = 0, C, _; N < h; ++N)
      if (C = y[N]) {
        for (N >= b && (b = N + 1); !(_ = $[b]) && ++b < h; ) ;
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
function Up(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function Gp(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], d = r[l], p = u.length, f = a[l] = new Array(p), g, h = 0; h < p; ++h)
      (g = u[h] || d[h]) && (f[h] = g);
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
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), u, d = 0; d < a; ++d)
      (u = s[d]) && (l[d] = u);
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
function Ps(e) {
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
  for (var n = Ps(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function wu(e, t) {
  for (var n = Ps(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
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
    for (var r = Ps(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
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
function Ng(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Mg(e) {
  return arguments.length ? this.each(e == null ? Sg : (typeof e == "function" ? Ng : Eg)(e)) : this.node().textContent;
}
function Pg() {
  this.innerHTML = "";
}
function Dg(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Vg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Hg(e) {
  return arguments.length ? this.each(e == null ? Pg : (typeof e == "function" ? Vg : Dg)(e)) : this.node().innerHTML;
}
function Lg() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Og() {
  return this.each(Lg);
}
function Tg() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function zg() {
  return this.each(Tg);
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
  var n = typeof e == "function" ? e : cu(e), r = t == null ? Ig : typeof t == "function" ? t : Ms(t);
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
function Yg(e) {
  return this.select(e ? Kg : Rg);
}
function jg(e) {
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
function Ug(e, t, n) {
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
function Gg(e, t, n) {
  var r = Xg(e + ""), o, i = r.length, s;
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
  for (a = t ? Ug : Fg, o = 0; o < i; ++o) this.each(a(r[o], t, n));
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
  select: Np,
  selectAll: Vp,
  selectChild: Tp,
  selectChildren: qp,
  filter: Zp,
  data: Wp,
  enter: Bp,
  exit: Fp,
  join: Up,
  merge: Gp,
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
  text: Mg,
  html: Hg,
  raise: Og,
  lower: zg,
  append: Ag,
  insert: qg,
  remove: Bg,
  clone: Yg,
  datum: jg,
  on: Gg,
  dispatch: eh,
  [Symbol.iterator]: th
};
function Nt(e) {
  return typeof e == "string" ? new _t([[document.querySelector(e)]], [document.documentElement]) : new _t([[e]], xu);
}
function rh(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function Vt(e, t) {
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
  var t = e.document.documentElement, n = Nt(e).on("dragstart.drag", sr, Zr);
  "onselectstart" in t ? n.on("selectstart.drag", sr, Zr) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function $u(e, t) {
  var n = e.document.documentElement, r = Nt(e).on("dragstart.drag", null);
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
  var e = ih, t = sh, n = ah, r = lh, o = {}, i = ii("start", "drag", "end"), s = 0, a, l, u, d, p = 0;
  function f(C) {
    C.on("mousedown.drag", g).filter(r).on("touchstart.drag", $).on("touchmove.drag", w, oh).on("touchend.drag touchcancel.drag", N).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(C, _) {
    if (!(d || !e.call(this, C, _))) {
      var D = b(this, t.call(this, C, _), C, _, "mouse");
      D && (Nt(C.view).on("mousemove.drag", h, Zr).on("mouseup.drag", y, Zr), Cu(C.view), Ci(C), u = !1, a = C.clientX, l = C.clientY, D("start", C));
    }
  }
  function h(C) {
    if (sr(C), !u) {
      var _ = C.clientX - a, D = C.clientY - l;
      u = _ * _ + D * D > p;
    }
    o.mouse("drag", C);
  }
  function y(C) {
    Nt(C.view).on("mousemove.drag mouseup.drag", null), $u(C.view, u), sr(C), o.mouse("end", C);
  }
  function $(C, _) {
    if (e.call(this, C, _)) {
      var D = C.changedTouches, z = t.call(this, C, _), Z = D.length, j, Y;
      for (j = 0; j < Z; ++j)
        (Y = b(this, z, C, _, D[j].identifier, D[j])) && (Ci(C), Y("start", C, D[j]));
    }
  }
  function w(C) {
    var _ = C.changedTouches, D = _.length, z, Z;
    for (z = 0; z < D; ++z)
      (Z = o[_[z].identifier]) && (sr(C), Z("drag", C, _[z]));
  }
  function N(C) {
    var _ = C.changedTouches, D = _.length, z, Z;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), z = 0; z < D; ++z)
      (Z = o[_[z].identifier]) && (Ci(C), Z("end", C, _[z]));
  }
  function b(C, _, D, z, Z, j) {
    var Y = i.copy(), M = Vt(j || D, _), k, L, x;
    if ((x = n.call(C, new Ki("beforestart", {
      sourceEvent: D,
      target: f,
      identifier: Z,
      active: s,
      x: M[0],
      y: M[1],
      dx: 0,
      dy: 0,
      dispatch: Y
    }), z)) != null)
      return k = x.x - M[0] || 0, L = x.y - M[1] || 0, function S(P, O, q) {
        var V = M, B;
        switch (P) {
          case "start":
            o[Z] = S, B = s++;
            break;
          case "end":
            delete o[Z], --s;
          // falls through
          case "drag":
            M = Vt(q || O, _), B = s;
            break;
        }
        Y.call(
          P,
          C,
          new Ki(P, {
            sourceEvent: O,
            subject: x,
            target: f,
            identifier: Z,
            active: B,
            x: M[0] + k,
            y: M[1] + L,
            dx: M[0] - V[0],
            dy: M[1] - V[1],
            dispatch: Y
          }),
          z
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
var Br = 0.7, Ao = 1 / Br, ar = "\\s*([+-]?\\d+)\\s*", Rr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", jt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ch = /^#([0-9a-f]{3,8})$/, dh = new RegExp(`^rgb\\(${ar},${ar},${ar}\\)$`), fh = new RegExp(`^rgb\\(${jt},${jt},${jt}\\)$`), ph = new RegExp(`^rgba\\(${ar},${ar},${ar},${Rr}\\)$`), gh = new RegExp(`^rgba\\(${jt},${jt},${jt},${Rr}\\)$`), hh = new RegExp(`^hsl\\(${Rr},${jt},${jt}\\)$`), vh = new RegExp(`^hsla\\(${Rr},${jt},${jt},${Rr}\\)$`), Ca = {
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
  return e = (e + "").trim().toLowerCase(), (t = ch.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? ka(t) : n === 3 ? new pt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? mo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? mo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = dh.exec(e)) ? new pt(t[1], t[2], t[3], 1) : (t = fh.exec(e)) ? new pt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = ph.exec(e)) ? mo(t[1], t[2], t[3], t[4]) : (t = gh.exec(e)) ? mo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = hh.exec(e)) ? Na(t[1], t[2] / 100, t[3] / 100, 1) : (t = vh.exec(e)) ? Na(t[1], t[2] / 100, t[3] / 100, t[4]) : Ca.hasOwnProperty(e) ? ka(Ca[e]) : e === "transparent" ? new pt(NaN, NaN, NaN, 0) : null;
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
function Yi(e, t, n, r) {
  return arguments.length === 1 ? wh(e) : new pt(e, t, n, r ?? 1);
}
function pt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Ds(pt, Yi, _u(io, {
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
    return new pt(Yn(this.r), Yn(this.g), Yn(this.b), Io(this.opacity));
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
  return `${e === 1 ? "rgb(" : "rgba("}${Yn(this.r)}, ${Yn(this.g)}, ${Yn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Io(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Yn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function qn(e) {
  return e = Yn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Na(e, t, n, r) {
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
Ds(Lt, xh, _u(io, {
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
    return new Lt(Ma(this.h), yo(this.s), yo(this.l), Io(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Io(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Ma(this.h)}, ${yo(this.s) * 100}%, ${yo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Ma(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function yo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function $i(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Vs = (e) => () => e;
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
    return n - t ? $h(t, n, e) : Vs(isNaN(t) ? n : t);
  };
}
function Su(e, t) {
  var n = t - e;
  return n ? Ch(e, n) : Vs(isNaN(e) ? t : e);
}
const qo = function e(t) {
  var n = _h(t);
  function r(o, i) {
    var s = n((o = Yi(o)).r, (i = Yi(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = Su(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = l(d), o.opacity = u(d), o + "";
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
  for (s = 0; s < r; ++s) o[s] = Lr(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function Nh(e, t) {
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
function Mh(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Lr(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var ji = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, _i = new RegExp(ji.source, "g");
function Ph(e) {
  return function() {
    return e;
  };
}
function Dh(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Eu(e, t) {
  var n = ji.lastIndex = _i.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = ji.exec(e)) && (o = _i.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: Bt(r, o) })), n = _i.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? Dh(l[0].x) : Ph(t) : (t = l.length, function(u) {
    for (var d = 0, p; d < t; ++d) a[(p = l[d]).i] = p.x(u);
    return a.join("");
  });
}
function Lr(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? Vs(t) : (n === "number" ? Bt : n === "string" ? (r = Wn(t)) ? (t = r, qo) : Eu : t instanceof Wn ? qo : t instanceof Date ? Nh : Sh(t) ? kh : Array.isArray(t) ? Eh : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Mh : Bt)(e, t);
}
var Pa = 180 / Math.PI, Nu = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Mu(e, t, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * r) && (n -= e * l, r -= t * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), e * r < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * Pa,
    skewX: Math.atan(l) * Pa,
    scaleX: s,
    scaleY: a
  };
}
var wo;
function Vh(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Nu : Mu(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Hh(e) {
  return e == null || (wo || (wo = document.createElementNS("http://www.w3.org/2000/svg", "g")), wo.setAttribute("transform", e), !(e = wo.transform.baseVal.consolidate())) ? Nu : (e = e.matrix, Mu(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Pu(e, t, n, r) {
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
      for (var h = -1, y = f.length, $; ++h < y; ) p[($ = f[h]).i] = $.x(g);
      return p.join("");
    };
  };
}
var Lh = Pu(Vh, "px, ", "px)", "deg)"), Oh = Pu(Hh, ", ", ")", ")"), Th = 1e-12;
function Da(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function zh(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Ah(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Eo = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], d = s[0], p = s[1], f = s[2], g = d - a, h = p - l, y = g * g + h * h, $, w;
    if (y < Th)
      w = Math.log(f / u) / t, $ = function(z) {
        return [
          a + z * g,
          l + z * h,
          u * Math.exp(t * z * w)
        ];
      };
    else {
      var N = Math.sqrt(y), b = (f * f - u * u + r * y) / (2 * u * n * N), C = (f * f - u * u - r * y) / (2 * f * n * N), _ = Math.log(Math.sqrt(b * b + 1) - b), D = Math.log(Math.sqrt(C * C + 1) - C);
      w = (D - _) / t, $ = function(z) {
        var Z = z * w, j = Da(_), Y = u / (n * N) * (j * Ah(t * Z + _) - zh(_));
        return [
          a + Y * g,
          l + Y * h,
          u * j / Da(t * Z + _)
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
var hr = 0, Pr = 0, Er = 0, Du = 1e3, Zo, Dr, Bo = 0, Xn = 0, ai = 0, Kr = typeof performance == "object" && performance.now ? performance : Date, Vu = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Hs() {
  return Xn || (Vu(Ih), Xn = Kr.now() + ai);
}
function Ih() {
  Xn = 0;
}
function Ro() {
  this._call = this._time = this._next = null;
}
Ro.prototype = Hu.prototype = {
  constructor: Ro,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Hs() : +n) + (t == null ? 0 : +t), !this._next && Dr !== this && (Dr ? Dr._next = this : Zo = this, Dr = this), this._call = e, this._time = n, Wi();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Wi());
  }
};
function Hu(e, t, n) {
  var r = new Ro();
  return r.restart(e, t, n), r;
}
function qh() {
  Hs(), ++hr;
  for (var e = Zo, t; e; )
    (t = Xn - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --hr;
}
function Va() {
  Xn = (Bo = Kr.now()) + ai, hr = Pr = 0;
  try {
    qh();
  } finally {
    hr = 0, Bh(), Xn = 0;
  }
}
function Zh() {
  var e = Kr.now(), t = e - Bo;
  t > Du && (ai -= t, Bo = e);
}
function Bh() {
  for (var e, t = Zo, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Zo = n);
  Dr = e, Wi(r);
}
function Wi(e) {
  if (!hr) {
    Pr && (Pr = clearTimeout(Pr));
    var t = e - Xn;
    t > 24 ? (e < 1 / 0 && (Pr = setTimeout(Va, e - Kr.now() - ai)), Er && (Er = clearInterval(Er))) : (Er || (Bo = Kr.now(), Er = setInterval(Zh, Du)), hr = 1, Vu(Va));
  }
}
function Ha(e, t, n) {
  var r = new Ro();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var Rh = ii("start", "end", "cancel", "interrupt"), Kh = [], Lu = 0, La = 1, Xi = 2, No = 3, Oa = 4, Fi = 5, Mo = 6;
function li(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  Yh(e, n, {
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
    state: Lu
  });
}
function Ls(e, t) {
  var n = zt(e, t);
  if (n.state > Lu) throw new Error("too late; already scheduled");
  return n;
}
function en(e, t) {
  var n = zt(e, t);
  if (n.state > No) throw new Error("too late; already running");
  return n;
}
function zt(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function Yh(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Hu(i, 0, n.time);
  function i(u) {
    n.state = La, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var d, p, f, g;
    if (n.state !== La) return l();
    for (d in r)
      if (g = r[d], g.name === n.name) {
        if (g.state === No) return Ha(s);
        g.state === Oa ? (g.state = Mo, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[d]) : +d < t && (g.state = Mo, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[d]);
      }
    if (Ha(function() {
      n.state === No && (n.state = Oa, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = Xi, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Xi) {
      for (n.state = No, o = new Array(f = n.tween.length), d = 0, p = -1; d < f; ++d)
        (g = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++p] = g);
      o.length = p + 1;
    }
  }
  function a(u) {
    for (var d = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Fi, 1), p = -1, f = o.length; ++p < f; )
      o[p].call(e, d);
    n.state === Fi && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = Mo, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function Po(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > Xi && r.state < Fi, r.state = Mo, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function jh(e) {
  return this.each(function() {
    Po(this, e);
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
  return this.each((t == null ? Wh : Xh)(n, e, t));
}
function Os(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = en(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return zt(o, r).value[t];
  };
}
function Ou(e, t) {
  var n;
  return (typeof t == "number" ? Bt : t instanceof Wn ? qo : (n = Wn(t)) ? (t = n, qo) : Eu)(e, t);
}
function Uh(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Gh(e) {
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
  var n = si(e), r = n === "transform" ? Oh : Ou;
  return this.attrTween(e, typeof t == "function" ? (n.local ? t1 : e1)(n, r, Os(this, "attr." + e, t)) : t == null ? (n.local ? Gh : Uh)(n) : (n.local ? Qh : Jh)(n, r, t));
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
    Ls(this, e).delay = +t.apply(this, arguments);
  };
}
function u1(e, t) {
  return t = +t, function() {
    Ls(this, e).delay = t;
  };
}
function c1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? l1 : u1)(t, e)) : zt(this.node(), t).delay;
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
  return arguments.length ? this.each((typeof e == "function" ? d1 : f1)(t, e)) : zt(this.node(), t).duration;
}
function g1(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    en(this, e).ease = t;
  };
}
function h1(e) {
  var t = this._id;
  return arguments.length ? this.each(g1(t, e)) : zt(this.node(), t).ease;
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
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new vn(r, this._parents, this._name, this._id);
}
function w1(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], u = n[a], d = l.length, p = s[a] = new Array(d), f, g = 0; g < d; ++g)
      (f = l[g] || u[g]) && (p[g] = f);
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
  var r, o, i = b1(t) ? Ls : en;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function C1(e, t) {
  var n = this._id;
  return arguments.length < 2 ? zt(this.node(), n).on.on(e) : this.each(x1(n, e, t));
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
  typeof e != "function" && (e = Ms(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), d, p, f = 0; f < l; ++f)
      (d = a[f]) && (p = e.call(d, d.__data__, f, a)) && ("__data__" in d && (p.__data__ = d.__data__), u[f] = p, li(u[f], t, n, f, u, zt(d, n)));
  return new vn(i, this._parents, t, n);
}
function S1(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = du(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, d, p = 0; p < u; ++p)
      if (d = l[p]) {
        for (var f = e.call(d, d.__data__, p, l), g, h = zt(d, n), y = 0, $ = f.length; y < $; ++y)
          (g = f[y]) && li(g, t, n, y, f, h);
        i.push(f), s.push(d);
      }
  return new vn(i, s, t, n);
}
var E1 = oo.prototype.constructor;
function N1() {
  return new E1(this._groups, this._parents);
}
function M1(e, t) {
  var n, r, o;
  return function() {
    var i = gr(this, e), s = (this.style.removeProperty(e), gr(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function Tu(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function P1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = gr(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function D1(e, t, n) {
  var r, o, i;
  return function() {
    var s = gr(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), gr(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function V1(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = en(this, e), u = l.on, d = l.value[i] == null ? a || (a = Tu(t)) : void 0;
    (u !== n || o !== d) && (r = (n = u).copy()).on(s, o = d), l.on = r;
  };
}
function H1(e, t, n) {
  var r = (e += "") == "transform" ? Lh : Ou;
  return t == null ? this.styleTween(e, M1(e, r)).on("end.style." + e, Tu(e)) : typeof t == "function" ? this.styleTween(e, D1(e, r, Os(this, "style." + e, t))).each(V1(this._id, e)) : this.styleTween(e, P1(e, r, t), n).on("end.style." + e, null);
}
function L1(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function O1(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && L1(e, s, n)), r;
  }
  return i._value = t, i;
}
function T1(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, O1(e, t, n ?? ""));
}
function z1(e) {
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
  return this.tween("text", typeof e == "function" ? A1(Os(this, "text", e)) : z1(e == null ? "" : e + ""));
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
  for (var e = this._name, t = this._id, n = zu(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var d = zt(l, t);
        li(l, e, n, u, s, {
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
      var u = en(this, r), d = u.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var Y1 = 0;
function vn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function zu() {
  return ++Y1;
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
  selection: N1,
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
  style: H1,
  styleTween: T1,
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
function j1(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var W1 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: j1
};
function X1(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function F1(e) {
  var t, n;
  e instanceof vn ? (t = e._id, e = e._name) : (t = zu(), (n = W1).time = Hs(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && li(l, e, t, u, s, n || X1(l, t));
  return new vn(r, this._parents, e, t);
}
oo.prototype.interrupt = jh;
oo.prototype.transition = F1;
const bo = (e) => () => e;
function U1(e, {
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
function Nr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function G1(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function J1() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Ta() {
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
  var e = G1, t = J1, n = tv, r = Q1, o = ev, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = Eo, u = ii("start", "zoom", "end"), d, p, f, g = 500, h = 150, y = 0, $ = 10;
  function w(x) {
    x.property("__zoom", Ta).on("wheel.zoom", Z, { passive: !1 }).on("mousedown.zoom", j).on("dblclick.zoom", Y).filter(o).on("touchstart.zoom", M).on("touchmove.zoom", k).on("touchend.zoom touchcancel.zoom", L).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  w.transform = function(x, S, P, O) {
    var q = x.selection ? x.selection() : x;
    q.property("__zoom", Ta), x !== q ? _(x, S, P, O) : q.interrupt().each(function() {
      D(this, arguments).event(O).start().zoom(null, typeof S == "function" ? S.apply(this, arguments) : S).end();
    });
  }, w.scaleBy = function(x, S, P, O) {
    w.scaleTo(x, function() {
      var q = this.__zoom.k, V = typeof S == "function" ? S.apply(this, arguments) : S;
      return q * V;
    }, P, O);
  }, w.scaleTo = function(x, S, P, O) {
    w.transform(x, function() {
      var q = t.apply(this, arguments), V = this.__zoom, B = P == null ? C(q) : typeof P == "function" ? P.apply(this, arguments) : P, W = V.invert(B), G = typeof S == "function" ? S.apply(this, arguments) : S;
      return n(b(N(V, G), B, W), q, s);
    }, P, O);
  }, w.translateBy = function(x, S, P, O) {
    w.transform(x, function() {
      return n(this.__zoom.translate(
        typeof S == "function" ? S.apply(this, arguments) : S,
        typeof P == "function" ? P.apply(this, arguments) : P
      ), t.apply(this, arguments), s);
    }, null, O);
  }, w.translateTo = function(x, S, P, O, q) {
    w.transform(x, function() {
      var V = t.apply(this, arguments), B = this.__zoom, W = O == null ? C(V) : typeof O == "function" ? O.apply(this, arguments) : O;
      return n(ui.translate(W[0], W[1]).scale(B.k).translate(
        typeof S == "function" ? -S.apply(this, arguments) : -S,
        typeof P == "function" ? -P.apply(this, arguments) : -P
      ), V, s);
    }, O, q);
  };
  function N(x, S) {
    return S = Math.max(i[0], Math.min(i[1], S)), S === x.k ? x : new on(S, x.x, x.y);
  }
  function b(x, S, P) {
    var O = S[0] - P[0] * x.k, q = S[1] - P[1] * x.k;
    return O === x.x && q === x.y ? x : new on(x.k, O, q);
  }
  function C(x) {
    return [(+x[0][0] + +x[1][0]) / 2, (+x[0][1] + +x[1][1]) / 2];
  }
  function _(x, S, P, O) {
    x.on("start.zoom", function() {
      D(this, arguments).event(O).start();
    }).on("interrupt.zoom end.zoom", function() {
      D(this, arguments).event(O).end();
    }).tween("zoom", function() {
      var q = this, V = arguments, B = D(q, V).event(O), W = t.apply(q, V), G = P == null ? C(W) : typeof P == "function" ? P.apply(q, V) : P, Q = Math.max(W[1][0] - W[0][0], W[1][1] - W[0][1]), X = q.__zoom, de = typeof S == "function" ? S.apply(q, V) : S, te = l(X.invert(G).concat(Q / X.k), de.invert(G).concat(Q / de.k));
      return function(pe) {
        if (pe === 1) pe = de;
        else {
          var F = te(pe), Ce = Q / F[2];
          pe = new on(Ce, G[0] - F[0] * Ce, G[1] - F[1] * Ce);
        }
        B.zoom(null, pe);
      };
    });
  }
  function D(x, S, P) {
    return !P && x.__zooming || new z(x, S);
  }
  function z(x, S) {
    this.that = x, this.args = S, this.active = 0, this.sourceEvent = null, this.extent = t.apply(x, S), this.taps = 0;
  }
  z.prototype = {
    event: function(x) {
      return x && (this.sourceEvent = x), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(x, S) {
      return this.mouse && x !== "mouse" && (this.mouse[1] = S.invert(this.mouse[0])), this.touch0 && x !== "touch" && (this.touch0[1] = S.invert(this.touch0[0])), this.touch1 && x !== "touch" && (this.touch1[1] = S.invert(this.touch1[0])), this.that.__zoom = S, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(x) {
      var S = Nt(this.that).datum();
      u.call(
        x,
        this.that,
        new U1(x, {
          sourceEvent: this.sourceEvent,
          target: w,
          transform: this.that.__zoom,
          dispatch: u
        }),
        S
      );
    }
  };
  function Z(x, ...S) {
    if (!e.apply(this, arguments)) return;
    var P = D(this, S).event(x), O = this.__zoom, q = Math.max(i[0], Math.min(i[1], O.k * Math.pow(2, r.apply(this, arguments)))), V = Vt(x);
    if (P.wheel)
      (P.mouse[0][0] !== V[0] || P.mouse[0][1] !== V[1]) && (P.mouse[1] = O.invert(P.mouse[0] = V)), clearTimeout(P.wheel);
    else {
      if (O.k === q) return;
      P.mouse = [V, O.invert(V)], Po(this), P.start();
    }
    Nr(x), P.wheel = setTimeout(B, h), P.zoom("mouse", n(b(N(O, q), P.mouse[0], P.mouse[1]), P.extent, s));
    function B() {
      P.wheel = null, P.end();
    }
  }
  function j(x, ...S) {
    if (f || !e.apply(this, arguments)) return;
    var P = x.currentTarget, O = D(this, S, !0).event(x), q = Nt(x.view).on("mousemove.zoom", G, !0).on("mouseup.zoom", Q, !0), V = Vt(x, P), B = x.clientX, W = x.clientY;
    Cu(x.view), ki(x), O.mouse = [V, this.__zoom.invert(V)], Po(this), O.start();
    function G(X) {
      if (Nr(X), !O.moved) {
        var de = X.clientX - B, te = X.clientY - W;
        O.moved = de * de + te * te > y;
      }
      O.event(X).zoom("mouse", n(b(O.that.__zoom, O.mouse[0] = Vt(X, P), O.mouse[1]), O.extent, s));
    }
    function Q(X) {
      q.on("mousemove.zoom mouseup.zoom", null), $u(X.view, O.moved), Nr(X), O.event(X).end();
    }
  }
  function Y(x, ...S) {
    if (e.apply(this, arguments)) {
      var P = this.__zoom, O = Vt(x.changedTouches ? x.changedTouches[0] : x, this), q = P.invert(O), V = P.k * (x.shiftKey ? 0.5 : 2), B = n(b(N(P, V), O, q), t.apply(this, S), s);
      Nr(x), a > 0 ? Nt(this).transition().duration(a).call(_, B, O, x) : Nt(this).call(w.transform, B, O, x);
    }
  }
  function M(x, ...S) {
    if (e.apply(this, arguments)) {
      var P = x.touches, O = P.length, q = D(this, S, x.changedTouches.length === O).event(x), V, B, W, G;
      for (ki(x), B = 0; B < O; ++B)
        W = P[B], G = Vt(W, this), G = [G, this.__zoom.invert(G), W.identifier], q.touch0 ? !q.touch1 && q.touch0[2] !== G[2] && (q.touch1 = G, q.taps = 0) : (q.touch0 = G, V = !0, q.taps = 1 + !!d);
      d && (d = clearTimeout(d)), V && (q.taps < 2 && (p = G[0], d = setTimeout(function() {
        d = null;
      }, g)), Po(this), q.start());
    }
  }
  function k(x, ...S) {
    if (this.__zooming) {
      var P = D(this, S).event(x), O = x.changedTouches, q = O.length, V, B, W, G;
      for (Nr(x), V = 0; V < q; ++V)
        B = O[V], W = Vt(B, this), P.touch0 && P.touch0[2] === B.identifier ? P.touch0[0] = W : P.touch1 && P.touch1[2] === B.identifier && (P.touch1[0] = W);
      if (B = P.that.__zoom, P.touch1) {
        var Q = P.touch0[0], X = P.touch0[1], de = P.touch1[0], te = P.touch1[1], pe = (pe = de[0] - Q[0]) * pe + (pe = de[1] - Q[1]) * pe, F = (F = te[0] - X[0]) * F + (F = te[1] - X[1]) * F;
        B = N(B, Math.sqrt(pe / F)), W = [(Q[0] + de[0]) / 2, (Q[1] + de[1]) / 2], G = [(X[0] + te[0]) / 2, (X[1] + te[1]) / 2];
      } else if (P.touch0) W = P.touch0[0], G = P.touch0[1];
      else return;
      P.zoom("touch", n(b(B, W, G), P.extent, s));
    }
  }
  function L(x, ...S) {
    if (this.__zooming) {
      var P = D(this, S).event(x), O = x.changedTouches, q = O.length, V, B;
      for (ki(x), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, g), V = 0; V < q; ++V)
        B = O[V], P.touch0 && P.touch0[2] === B.identifier ? delete P.touch0 : P.touch1 && P.touch1[2] === B.identifier && delete P.touch1;
      if (P.touch1 && !P.touch0 && (P.touch0 = P.touch1, delete P.touch1), P.touch0) P.touch0[1] = this.__zoom.invert(P.touch0[0]);
      else if (P.end(), P.taps === 2 && (B = Vt(B, this), Math.hypot(p[0] - B[0], p[1] - B[1]) < $)) {
        var W = Nt(this).on("dblclick.zoom");
        W && W.apply(this, arguments);
      }
    }
  }
  return w.wheelDelta = function(x) {
    return arguments.length ? (r = typeof x == "function" ? x : bo(+x), w) : r;
  }, w.filter = function(x) {
    return arguments.length ? (e = typeof x == "function" ? x : bo(!!x), w) : e;
  }, w.touchable = function(x) {
    return arguments.length ? (o = typeof x == "function" ? x : bo(!!x), w) : o;
  }, w.extent = function(x) {
    return arguments.length ? (t = typeof x == "function" ? x : bo([[+x[0][0], +x[0][1]], [+x[1][0], +x[1][1]]]), w) : t;
  }, w.scaleExtent = function(x) {
    return arguments.length ? (i[0] = +x[0], i[1] = +x[1], w) : [i[0], i[1]];
  }, w.translateExtent = function(x) {
    return arguments.length ? (s[0][0] = +x[0][0], s[1][0] = +x[1][0], s[0][1] = +x[0][1], s[1][1] = +x[1][1], w) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, w.constrain = function(x) {
    return arguments.length ? (n = x, w) : n;
  }, w.duration = function(x) {
    return arguments.length ? (a = +x, w) : a;
  }, w.interpolate = function(x) {
    return arguments.length ? (l = x, w) : l;
  }, w.on = function() {
    var x = u.on.apply(u, arguments);
    return x === u ? w : x;
  }, w.clickDistance = function(x) {
    return arguments.length ? (y = (x = +x) * x, w) : Math.sqrt(y);
  }, w.tapDistance = function(x) {
    return arguments.length ? ($ = +x, w) : $;
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
}, Ui = [
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
const Gi = {
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
const Zu = (e) => "id" in e && "source" in e && "target" in e, iv = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), Ts = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), so = (e, t = [0, 0]) => {
  const { width: n, height: r } = On(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
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
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : Ts(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? Yo(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return ci(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return di(n);
}, ao = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = Yo(r);
      n = ci(n, o);
    }
  }), di(n);
}, zs = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...lo(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: d, selectable: p = !0, hidden: f = !1 } = u;
    if (s && !p || f)
      continue;
    const g = d.width ?? u.width ?? u.initialWidth ?? null, h = d.height ?? u.height ?? u.initialHeight ?? null, y = jr(a, yr(u)), $ = (g ?? 0) * (h ?? 0), w = i && y > 0;
    (!u.internals.handleBounds || w || y >= $ || u.dragging) && l.push(u);
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
  const a = lv(e, s), l = ao(a), u = As(l, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
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
      i?.("005", Fn.error005());
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
  const f = wr(p) ? Un(t, p, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", Fn.error015()), {
    position: {
      x: f.x - l + (s.measured.width ?? 0) * d[0],
      y: f.y - u + (s.measured.height ?? 0) * d[1]
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
  const a = new Set(t.map((p) => p.id)), l = r.filter((p) => p.deletable !== !1), u = av(s, l);
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
const mr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), Un = (e = { x: 0, y: 0 }, t, n) => ({
  x: mr(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: mr(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function Ru(e, t, n) {
  const { width: r, height: o } = On(n), { x: i, y: s } = n.internals.positionAbsolute;
  return Un(e, [
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
  const { x: n, y: r } = Ts(e) ? e.internals.positionAbsolute : so(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, Yo = (e, t = [0, 0]) => {
  const { x: n, y: r } = Ts(e) ? e.internals.positionAbsolute : so(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, Yu = (e, t) => di(ci(Ji(e), Ji(t))), jr = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, qa = (e) => sn(e.width) && sn(e.height) && sn(e.x) && sn(e.y), sn = (e) => !isNaN(e) && isFinite(e), ju = (e, t) => {
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
}, jo = ({ x: e, y: t }, [n, r, o]) => ({
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
  const { x: s, y: a } = jo(e, [t, n, r]), { x: l, y: u } = jo({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - l, p = i - u;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(p)
  };
}
const As = (e, t, n, r, o, i) => {
  const s = dv(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, u = Math.min(a, l), d = mr(u, r, o), p = e.x + e.width / 2, f = e.y + e.height / 2, g = t / 2 - p * d, h = n / 2 - f * d, y = fv(e, g, h, d, t, n), $ = {
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
function On(e) {
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
  const { x: i, y: s } = Kt(e), a = lo({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: u } = n ? fi(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const Xu = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), Fu = (e) => e?.getRootNode?.() || window?.document, hv = ["INPUT", "SELECT", "TEXTAREA"];
function Uu(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : hv.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const Gu = (e) => "clientX" in e, Kt = (e, t) => {
  const n = Gu(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
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
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - e), p = Math.abs(u - t);
  return [l, u, d, p];
}
function xo(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Ba({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case me.Left:
      return [t - xo(t - r, i), n];
    case me.Right:
      return [t + xo(r - t, i), n];
    case me.Top:
      return [t, n - xo(n - o, i)];
    case me.Bottom:
      return [t, n + xo(o - n, i)];
  }
}
function Ju({ sourceX: e, sourceY: t, sourcePosition: n = me.Bottom, targetX: r, targetY: o, targetPosition: i = me.Top, curvature: s = 0.25 }) {
  const [a, l] = Ba({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [u, d] = Ba({
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
  const i = ci(Yo(e), Yo(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return jr(s, di(i)) > 0;
}
const wv = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, bv = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), xv = (e, t) => {
  if (!e.source || !e.target)
    return ju("006", Fn.error006()), t;
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
  [me.Left]: { x: -1, y: 0 },
  [me.Right]: { x: 1, y: 0 },
  [me.Top]: { x: 0, y: -1 },
  [me.Bottom]: { x: 0, y: 1 }
}, Cv = ({ source: e, sourcePosition: t = me.Bottom, target: n }) => t === me.Left || t === me.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Ka = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function $v({ source: e, sourcePosition: t = me.Bottom, target: n, targetPosition: r = me.Top, center: o, offset: i, stepPosition: s }) {
  const a = Ra[t], l = Ra[r], u = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, p = Cv({
    source: u,
    sourcePosition: t,
    target: d
  }), f = p.x !== 0 ? "x" : "y", g = p[f];
  let h = [], y, $;
  const w = { x: 0, y: 0 }, N = { x: 0, y: 0 }, [, , b, C] = Qu({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[f] * l[f] === -1) {
    f === "x" ? (y = o.x ?? u.x + (d.x - u.x) * s, $ = o.y ?? (u.y + d.y) / 2) : (y = o.x ?? (u.x + d.x) / 2, $ = o.y ?? u.y + (d.y - u.y) * s);
    const _ = [
      { x: y, y: u.y },
      { x: y, y: d.y }
    ], D = [
      { x: u.x, y: $ },
      { x: d.x, y: $ }
    ];
    a[f] === g ? h = f === "x" ? _ : D : h = f === "x" ? D : _;
  } else {
    const _ = [{ x: u.x, y: d.y }], D = [{ x: d.x, y: u.y }];
    if (f === "x" ? h = a.x === g ? D : _ : h = a.y === g ? _ : D, t === r) {
      const M = Math.abs(e[f] - n[f]);
      if (M <= i) {
        const k = Math.min(i - 1, i - M);
        a[f] === g ? w[f] = (u[f] > e[f] ? -1 : 1) * k : N[f] = (d[f] > n[f] ? -1 : 1) * k;
      }
    }
    if (t !== r) {
      const M = f === "x" ? "y" : "x", k = a[f] === l[M], L = u[M] > d[M], x = u[M] < d[M];
      (a[f] === 1 && (!k && L || k && x) || a[f] !== 1 && (!k && x || k && L)) && (h = f === "x" ? _ : D);
    }
    const z = { x: u.x + w.x, y: u.y + w.y }, Z = { x: d.x + N.x, y: d.y + N.y }, j = Math.max(Math.abs(z.x - h[0].x), Math.abs(Z.x - h[0].x)), Y = Math.max(Math.abs(z.y - h[0].y), Math.abs(Z.y - h[0].y));
    j >= Y ? (y = (z.x + Z.x) / 2, $ = h[0].y) : (y = h[0].x, $ = (z.y + Z.y) / 2);
  }
  return [[
    e,
    { x: u.x + w.x, y: u.y + w.y },
    ...h,
    { x: d.x + N.x, y: d.y + N.y },
    n
  ], y, $, b, C];
}
function _v(e, t, n, r) {
  const o = Math.min(Ka(e, t) / 2, Ka(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function Is({ sourceX: e, sourceY: t, sourcePosition: n = me.Bottom, targetX: r, targetY: o, targetPosition: i = me.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20, stepPosition: d = 0.5 }) {
  const [p, f, g, h, y] = $v({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u,
    stepPosition: d
  });
  return [p.reduce(($, w, N) => {
    let b = "";
    return N > 0 && N < p.length - 1 ? b = _v(p[N - 1], w, p[N + 1], s) : b = `${N === 0 ? "M" : "L"}${w.x} ${w.y}`, $ += b, $;
  }, ""), f, g, h, y];
}
function Ya(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function kv(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!Ya(t) || !Ya(n))
    return null;
  const r = t.internals.handleBounds || ja(t.handles), o = n.internals.handleBounds || ja(n.handles), i = Wa(r?.source ?? [], e.sourceHandle), s = Wa(
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
  const a = i?.position || me.Bottom, l = s?.position || me.Top, u = Wr(t, i, a), d = Wr(n, s, l);
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
function Wr(e, t, n = me.Left, r = !1) {
  const o = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? On(e);
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
function Qi(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function Sv(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = Qi(l, t);
      i.has(u) || (s.push({ id: u, color: l.color || n, ...l }), i.add(u));
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
const qs = {
  nodeOrigin: [0, 0],
  nodeExtent: Ui,
  elevateNodesOnSelect: !0,
  defaults: {}
}, Nv = {
  ...qs,
  checkEquality: !0
};
function Zs(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function Mv(e, t, n) {
  const r = Zs(qs, n);
  for (const o of e.values())
    if (o.parentId)
      Bs(o, e, t, r);
    else {
      const i = so(o, r.nodeOrigin), s = wr(o.extent) ? o.extent : r.nodeExtent, a = Un(i, s, On(o));
      o.internals.positionAbsolute = a;
    }
}
function Pv(e, t, n, r) {
  const o = Zs(Nv, r);
  let i = e.length > 0;
  const s = new Map(t), a = o?.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const l of e) {
    let u = s.get(l.id);
    if (o.checkEquality && l === u?.internals.userNode)
      t.set(l.id, u);
    else {
      const d = so(l, o.nodeOrigin), p = wr(l.extent) ? l.extent : o.nodeExtent, f = Un(d, p, On(l));
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
          z: tc(l, a),
          userNode: l
        }
      }, t.set(l.id, u);
    }
    (u.measured === void 0 || u.measured.width === void 0 || u.measured.height === void 0) && !u.hidden && (i = !1), l.parentId && Bs(u, t, n, r);
  }
  return i;
}
function Dv(e, t) {
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
  Dv(e, n);
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
function tc(e, t) {
  return (sn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function Vv(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = On(e), l = so(e, n), u = wr(e.extent) ? Un(l, e.extent, a) : l;
  let d = Un({ x: i + u.x, y: s + u.y }, r, a);
  e.extent === "parent" && (d = Ru(d, a, t));
  const p = tc(e, o), f = t.internals.z ?? 0;
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
    const l = i.get(s.parentId)?.expandedRect ?? yr(a), u = Yu(l, s.rect);
    i.set(s.parentId, { expandedRect: u, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const u = a.internals.positionAbsolute, d = On(a), p = a.origin ?? r, f = s.x < u.x ? Math.round(Math.abs(u.x - s.x)) : 0, g = s.y < u.y ? Math.round(Math.abs(u.y - s.y)) : 0, h = Math.max(d.width, Math.round(s.width)), y = Math.max(d.height, Math.round(s.height)), $ = (h - d.width) * p[0], w = (y - d.height) * p[1];
    (f > 0 || g > 0 || $ || w) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - f + $,
        y: a.position.y - g + w
      }
    }), n.get(l)?.forEach((N) => {
      e.some((b) => b.id === N.id) || o.push({
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
        width: h + (f ? p[0] * f - $ : 0),
        height: y + (g ? p[1] * g - w : 0)
      }
    });
  }), o;
}
function Lv(e, t, n, r, o, i) {
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
    const h = Xu(f.nodeElement), y = g.measured.width !== h.width || g.measured.height !== h.height;
    if (h.width && h.height && (y || !g.internals.handleBounds || f.force)) {
      const $ = f.nodeElement.getBoundingClientRect(), w = wr(g.extent) ? g.extent : i;
      let { positionAbsolute: N } = g.internals;
      g.parentId && g.extent === "parent" ? N = Ru(N, h, t.get(g.parentId)) : w && (N = Un(N, w, h));
      const b = {
        ...g,
        measured: h,
        internals: {
          ...g.internals,
          positionAbsolute: N,
          handleBounds: {
            source: Za("source", f.nodeElement, $, d, g.id),
            target: Za("target", f.nodeElement, $, d, g.id)
          }
        }
      };
      t.set(g.id, b), g.parentId && Bs(b, t, n, { nodeOrigin: o }), a = !0, y && (l.push({
        id: g.id,
        type: "dimensions",
        dimensions: h
      }), g.expandParent && g.parentId && p.push({
        id: g.id,
        parentId: g.parentId,
        rect: yr(b, o)
      }));
    }
  }
  if (p.length > 0) {
    const f = Hv(p, t, n, o);
    l.push(...f);
  }
  return { changes: l, updatedInternals: a };
}
async function Ov({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
    const u = r.get(s) || /* @__PURE__ */ new Map();
    r.set(s, u.set(n, t));
  }
}
function Tv(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    Xa("source", l, d, e, o, s), Xa("target", l, u, e, i, a), t.set(r.id, r);
  }
}
function zv(e, t) {
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
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, d = null, p = !1, f = null, g = !1, h = !1;
  function y({ noDragClassName: w, handleSelector: N, domNode: b, isSelectable: C, nodeId: _, nodeClickDistance: D = 0 }) {
    f = Nt(b);
    function z({ x: M, y: k }, L) {
      const { nodeLookup: x, nodeExtent: S, snapGrid: P, snapToGrid: O, nodeOrigin: q, onNodeDrag: V, onSelectionDrag: B, onError: W, updateNodePositions: G } = t();
      i = { x: M, y: k };
      let Q = !1, X = { x: 0, y: 0, x2: 0, y2: 0 };
      if (a.size > 1 && S) {
        const de = ao(a);
        X = Ji(de);
      }
      for (const [de, te] of a) {
        if (!x.has(de))
          continue;
        let pe = { x: M - te.distance.x, y: k - te.distance.y };
        O && (pe = fi(pe, P));
        let F = [
          [S[0][0], S[0][1]],
          [S[1][0], S[1][1]]
        ];
        if (a.size > 1 && S && !te.extent) {
          const { positionAbsolute: oe } = te.internals, ee = oe.x - X.x + S[0][0], ce = oe.x + te.measured.width - X.x2 + S[1][0], J = oe.y - X.y + S[0][1], ve = oe.y + te.measured.height - X.y2 + S[1][1];
          F = [
            [ee, J],
            [ce, ve]
          ];
        }
        const { position: Ce, positionAbsolute: ge } = Bu({
          nodeId: de,
          nextPosition: pe,
          nodeLookup: x,
          nodeExtent: F,
          nodeOrigin: q,
          onError: W
        });
        Q = Q || te.position.x !== Ce.x || te.position.y !== Ce.y, te.position = Ce, te.internals.positionAbsolute = ge;
      }
      if (h = h || Q, !!Q && (G(a, !0), L && (r || V || !_ && B))) {
        const [de, te] = Ei({
          nodeId: _,
          dragItems: a,
          nodeLookup: x
        });
        r?.(L, a, de, te), V?.(L, de, te), _ || B?.(L, te);
      }
    }
    async function Z() {
      if (!d)
        return;
      const { transform: M, panBy: k, autoPanSpeed: L, autoPanOnNodeDrag: x } = t();
      if (!x) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [S, P] = Ku(u, d, L);
      (S !== 0 || P !== 0) && (i.x = (i.x ?? 0) - S / M[2], i.y = (i.y ?? 0) - P / M[2], await k({ x: S, y: P }) && z(i, null)), s = requestAnimationFrame(Z);
    }
    function j(M) {
      const { nodeLookup: k, multiSelectionActive: L, nodesDraggable: x, transform: S, snapGrid: P, snapToGrid: O, selectNodesOnDrag: q, onNodeDragStart: V, onSelectionDragStart: B, unselectNodesAndEdges: W } = t();
      p = !0, (!q || !C) && !L && _ && (k.get(_)?.selected || W()), C && q && _ && e?.(_);
      const G = Si(M.sourceEvent, { transform: S, snapGrid: P, snapToGrid: O, containerBounds: d });
      if (i = G, a = Av(k, x, G, _), a.size > 0 && (n || V || !_ && B)) {
        const [Q, X] = Ei({
          nodeId: _,
          dragItems: a,
          nodeLookup: k
        });
        n?.(M.sourceEvent, a, Q, X), V?.(M.sourceEvent, Q, X), _ || B?.(M.sourceEvent, X);
      }
    }
    const Y = uh().clickDistance(D).on("start", (M) => {
      const { domNode: k, nodeDragThreshold: L, transform: x, snapGrid: S, snapToGrid: P } = t();
      d = k?.getBoundingClientRect() || null, g = !1, h = !1, L === 0 && j(M), i = Si(M.sourceEvent, { transform: x, snapGrid: S, snapToGrid: P, containerBounds: d }), u = Kt(M.sourceEvent, d);
    }).on("drag", (M) => {
      const { autoPanOnNodeDrag: k, transform: L, snapGrid: x, snapToGrid: S, nodeDragThreshold: P, nodeLookup: O } = t(), q = Si(M.sourceEvent, { transform: L, snapGrid: x, snapToGrid: S, containerBounds: d });
      if ((M.sourceEvent.type === "touchmove" && M.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      _ && !O.has(_)) && (g = !0), !g) {
        if (!l && k && p && (l = !0, Z()), !p) {
          const V = q.xSnapped - (i.x ?? 0), B = q.ySnapped - (i.y ?? 0);
          Math.sqrt(V * V + B * B) > P && j(M);
        }
        (i.x !== q.xSnapped || i.y !== q.ySnapped) && a && p && (u = Kt(M.sourceEvent, d), z(q, M.sourceEvent));
      }
    }).on("end", (M) => {
      if (!(!p || g) && (l = !1, p = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: k, updateNodePositions: L, onNodeDragStop: x, onSelectionDragStop: S } = t();
        if (h && (L(a, !1), h = !1), o || x || !_ && S) {
          const [P, O] = Ei({
            nodeId: _,
            dragItems: a,
            nodeLookup: k,
            dragging: !1
          });
          o?.(M.sourceEvent, a, P, O), x?.(M.sourceEvent, P, O), _ || S?.(M.sourceEvent, O);
        }
      }
    }).filter((M) => {
      const k = M.target;
      return !M.button && (!w || !Fa(k, `.${w}`, b)) && (!N || Fa(k, N, b));
    });
    f.call(Y);
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
    jr(o, yr(i)) > 0 && r.push(i);
  return r;
}
const Zv = 250;
function Bv(e, t, n, r) {
  let o = [], i = 1 / 0;
  const s = qv(e, n, t + Zv);
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
function rc(e, t, n, r, o, i = !1) {
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((u) => u.id === n) : a?.[0]) ?? null;
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
function Kv(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: d, flowId: p, panBy: f, cancelConnection: g, onConnectStart: h, onConnect: y, onConnectEnd: $, isValidConnection: w = ic, onReconnectEnd: N, updateConnection: b, getTransform: C, getFromHandle: _, autoPanSpeed: D, dragThreshold: z = 1 }) {
  const Z = Fu(e.target);
  let j = 0, Y;
  const { x: M, y: k } = Kt(e), L = Z?.elementFromPoint(M, k), x = oc(i, L), S = a?.getBoundingClientRect();
  let P = !1;
  if (!S || !x)
    return;
  const O = rc(o, x, r, l, t);
  if (!O)
    return;
  let q = Kt(e, S), V = !1, B = null, W = !1, G = null;
  function Q() {
    if (!d || !S)
      return;
    const [ge, oe] = Ku(q, S, D);
    f({ x: ge, y: oe }), j = requestAnimationFrame(Q);
  }
  const X = {
    ...O,
    nodeId: o,
    type: x,
    position: O.position
  }, de = l.get(o);
  let te = {
    inProgress: !0,
    isValid: null,
    from: Wr(de, X, me.Left, !0),
    fromHandle: X,
    fromPosition: X.position,
    fromNode: de,
    to: q,
    toHandle: null,
    toPosition: za[X.position],
    toNode: null
  };
  function pe() {
    P = !0, b(te), h?.(e, { nodeId: o, handleId: r, handleType: x });
  }
  z === 0 && pe();
  function F(ge) {
    if (!P) {
      const { x: J, y: ve } = Kt(ge), ne = J - M, _e = ve - k;
      if (!(ne * ne + _e * _e > z * z))
        return;
      pe();
    }
    if (!_() || !X) {
      Ce(ge);
      return;
    }
    const oe = C();
    q = Kt(ge, S), Y = Bv(lo(q, oe, !1, [1, 1]), n, l, X), V || (Q(), V = !0);
    const ee = sc(ge, {
      handle: Y,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: w,
      doc: Z,
      lib: u,
      flowId: p,
      nodeLookup: l
    });
    G = ee.handleDomNode, B = ee.connection, W = Rv(!!Y, ee.isValid);
    const ce = {
      // from stays the same
      ...te,
      isValid: W,
      to: ee.toHandle && W ? jo({ x: ee.toHandle.x, y: ee.toHandle.y }, oe) : q,
      toHandle: ee.toHandle,
      toPosition: W && ee.toHandle ? ee.toHandle.position : za[X.position],
      toNode: ee.toHandle ? l.get(ee.toHandle.nodeId) : null
    };
    W && Y && te.toHandle && ce.toHandle && te.toHandle.type === ce.toHandle.type && te.toHandle.nodeId === ce.toHandle.nodeId && te.toHandle.id === ce.toHandle.id && te.to.x === ce.to.x && te.to.y === ce.to.y || (b(ce), te = ce);
  }
  function Ce(ge) {
    if (P) {
      (Y || G) && B && W && y?.(B);
      const { inProgress: oe, ...ee } = te, ce = {
        ...ee,
        toPosition: te.toHandle ? te.toPosition : null
      };
      $?.(ge, ce), i && N?.(ge, ce);
    }
    g(), cancelAnimationFrame(j), V = !1, W = !1, B = null, G = null, Z.removeEventListener("mousemove", F), Z.removeEventListener("mouseup", Ce), Z.removeEventListener("touchmove", F), Z.removeEventListener("touchend", Ce);
  }
  Z.addEventListener("mousemove", F), Z.addEventListener("mouseup", Ce), Z.addEventListener("touchmove", F), Z.addEventListener("touchend", Ce);
}
function sc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = ic, nodeLookup: d }) {
  const p = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: g, y: h } = Kt(e), y = s.elementFromPoint(g, h), $ = y?.classList.contains(`${a}-flow__handle`) ? y : f, w = {
    handleDomNode: $,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if ($) {
    const N = oc(void 0, $), b = $.getAttribute("data-nodeid"), C = $.getAttribute("data-handleid"), _ = $.classList.contains("connectable"), D = $.classList.contains("connectableend");
    if (!b || !N)
      return w;
    const z = {
      source: p ? b : r,
      sourceHandle: p ? C : o,
      target: p ? r : b,
      targetHandle: p ? o : C
    };
    w.connection = z;
    const Z = _ && D && (n === vr.Strict ? p && N === "source" || !p && N === "target" : b !== r || C !== o);
    w.isValid = Z && u(z), w.toHandle = rc(b, N, C, d, n, !0);
  }
  return w;
}
const Ua = {
  onPointerDown: Kv,
  isValid: sc
};
function Yv({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Nt(e);
  function i({ translateExtent: a, width: l, height: u, zoomStep: d = 10, pannable: p = !0, zoomable: f = !0, inversePan: g = !1 }) {
    const h = (b) => {
      const C = n();
      if (b.sourceEvent.type !== "wheel" || !t)
        return;
      const _ = -b.sourceEvent.deltaY * (b.sourceEvent.deltaMode === 1 ? 0.05 : b.sourceEvent.deltaMode ? 1 : 2e-3) * d, D = C[2] * Math.pow(2, _);
      t.scaleTo(D);
    };
    let y = [0, 0];
    const $ = (b) => {
      (b.sourceEvent.type === "mousedown" || b.sourceEvent.type === "touchstart") && (y = [
        b.sourceEvent.clientX ?? b.sourceEvent.touches[0].clientX,
        b.sourceEvent.clientY ?? b.sourceEvent.touches[0].clientY
      ]);
    }, w = (b) => {
      const C = n();
      if (b.sourceEvent.type !== "mousemove" && b.sourceEvent.type !== "touchmove" || !t)
        return;
      const _ = [
        b.sourceEvent.clientX ?? b.sourceEvent.touches[0].clientX,
        b.sourceEvent.clientY ?? b.sourceEvent.touches[0].clientY
      ], D = [_[0] - y[0], _[1] - y[1]];
      y = _;
      const z = r() * Math.max(C[2], Math.log(C[2])) * (g ? -1 : 1), Z = {
        x: C[0] - D[0] * z,
        y: C[1] - D[1] * z
      }, j = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: Z.x,
        y: Z.y,
        zoom: C[2]
      }, j, a);
    }, N = Iu().on("start", $).on("zoom", p ? w : null).on("zoom.wheel", f ? h : null);
    o.call(N, {});
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
const jv = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, pi = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Ni = ({ x: e, y: t, zoom: n }) => ui.translate(e, t).scale(n), ir = (e, t) => e.target.closest(`.${t}`), ac = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), Wv = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, Mi = (e, t = 0, n = Wv, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, lc = (e) => {
  const t = e.ctrlKey && or() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function Xv({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (d) => {
    if (ir(d, t))
      return !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const p = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const $ = Vt(d), w = lc(d), N = p * Math.pow(2, w);
      r.scaleTo(n, N, $, d);
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
      u?.(d, y), e.isPanScrolling = !1;
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
function Uv({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = pi(r.transform);
    e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, o);
  };
}
function Gv({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && ac(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, pi(i.transform));
  };
}
function Jv({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && ac(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && jv(e.prevViewport, s.transform))) {
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
function Qv({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: u }) {
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
function e0({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: s, onPanZoomStart: a, onPanZoomEnd: l, onDraggingChange: u }) {
  const d = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, p = e.getBoundingClientRect(), f = Iu().clickDistance(!sn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), g = Nt(e).call(f);
  b({
    x: i.x,
    y: i.y,
    zoom: mr(i.zoom, t, n)
  }, [
    [0, 0],
    [p.width, p.height]
  ], o);
  const h = g.on("wheel.zoom"), y = g.on("dblclick.zoom");
  f.wheelDelta(lc);
  function $(k, L) {
    return g ? new Promise((x) => {
      f?.interpolate(L?.interpolate === "linear" ? Lr : Eo).transform(Mi(g, L?.duration, L?.ease, () => x(!0)), k);
    }) : Promise.resolve(!1);
  }
  function w({ noWheelClassName: k, noPanClassName: L, onPaneContextMenu: x, userSelectionActive: S, panOnScroll: P, panOnDrag: O, panOnScrollMode: q, panOnScrollSpeed: V, preventScrolling: B, zoomOnPinch: W, zoomOnScroll: G, zoomOnDoubleClick: Q, zoomActivationKeyPressed: X, lib: de, onTransformChange: te }) {
    S && !d.isZoomingOrPanning && N();
    const pe = P && !X && !S ? Xv({
      zoomPanValues: d,
      noWheelClassName: k,
      d3Selection: g,
      d3Zoom: f,
      panOnScrollMode: q,
      panOnScrollSpeed: V,
      zoomOnPinch: W,
      onPanZoomStart: a,
      onPanZoom: s,
      onPanZoomEnd: l
    }) : Fv({
      noWheelClassName: k,
      preventScrolling: B,
      d3ZoomHandler: h
    });
    if (g.on("wheel.zoom", pe, { passive: !1 }), !S) {
      const Ce = Uv({
        zoomPanValues: d,
        onDraggingChange: u,
        onPanZoomStart: a
      });
      f.on("start", Ce);
      const ge = Gv({
        zoomPanValues: d,
        panOnDrag: O,
        onPaneContextMenu: !!x,
        onPanZoom: s,
        onTransformChange: te
      });
      f.on("zoom", ge);
      const oe = Jv({
        zoomPanValues: d,
        panOnDrag: O,
        panOnScroll: P,
        onPaneContextMenu: x,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      f.on("end", oe);
    }
    const F = Qv({
      zoomActivationKeyPressed: X,
      panOnDrag: O,
      zoomOnScroll: G,
      panOnScroll: P,
      zoomOnDoubleClick: Q,
      zoomOnPinch: W,
      userSelectionActive: S,
      noPanClassName: L,
      noWheelClassName: k,
      lib: de
    });
    f.filter(F), Q ? g.on("dblclick.zoom", y) : g.on("dblclick.zoom", null);
  }
  function N() {
    f.on("zoom", null);
  }
  async function b(k, L, x) {
    const S = Ni(k), P = f?.constrain()(S, L, x);
    return P && await $(P), new Promise((O) => O(P));
  }
  async function C(k, L) {
    const x = Ni(k);
    return await $(x, L), new Promise((S) => S(x));
  }
  function _(k) {
    if (g) {
      const L = Ni(k), x = g.property("__zoom");
      (x.k !== k.zoom || x.x !== k.x || x.y !== k.y) && f?.transform(g, L, null, { sync: !0 });
    }
  }
  function D() {
    const k = g ? Au(g.node()) : { x: 0, y: 0, k: 1 };
    return { x: k.x, y: k.y, zoom: k.k };
  }
  function z(k, L) {
    return g ? new Promise((x) => {
      f?.interpolate(L?.interpolate === "linear" ? Lr : Eo).scaleTo(Mi(g, L?.duration, L?.ease, () => x(!0)), k);
    }) : Promise.resolve(!1);
  }
  function Z(k, L) {
    return g ? new Promise((x) => {
      f?.interpolate(L?.interpolate === "linear" ? Lr : Eo).scaleBy(Mi(g, L?.duration, L?.ease, () => x(!0)), k);
    }) : Promise.resolve(!1);
  }
  function j(k) {
    f?.scaleExtent(k);
  }
  function Y(k) {
    f?.translateExtent(k);
  }
  function M(k) {
    const L = !sn(k) || k < 0 ? 0 : k;
    f?.clickDistance(L);
  }
  return {
    update: w,
    destroy: N,
    setViewport: C,
    setViewportConstrained: b,
    getViewport: D,
    scaleTo: z,
    scaleBy: Z,
    setScaleExtent: j,
    setTranslateExtent: Y,
    syncViewport: _,
    setClickDistance: M
  };
}
var Ga;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Ga || (Ga = {}));
var t0 = /* @__PURE__ */ U("<div><!></div>");
function Mn(e, t) {
  le(t, !0);
  let n = m(t, "id", 7, null), r = m(t, "type", 7, "source"), o = m(t, "position", 23, () => me.Top), i = m(t, "style", 7), s = m(t, "class", 7), a = m(t, "isConnectable", 7), l = m(t, "isConnectableStart", 7, !0), u = m(t, "isConnectableEnd", 7, !0), d = m(t, "isValidConnection", 7), p = m(t, "onconnect", 7), f = m(t, "ondisconnect", 7), g = m(t, "children", 7), h = /* @__PURE__ */ ze(t, [
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
  let w = /* @__PURE__ */ E(() => r() === "target"), N = /* @__PURE__ */ E(() => a() !== void 0 ? a() : $.value), b = At(), C = /* @__PURE__ */ E(() => b.ariaLabelConfig), _ = null;
  Al(() => {
    if (p() || f()) {
      b.edges;
      let V = b.connectionLookup.get(`${y}-${r()}${n() ? `-${n()}` : ""}`);
      if (_ && !rv(V, _)) {
        const B = V ?? /* @__PURE__ */ new Map();
        Aa(_, B, f()), Aa(B, _, p());
      }
      _ = new Map(V);
    }
  });
  let D = /* @__PURE__ */ E(() => {
    if (!b.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: V, toHandle: B, isValid: W } = b.connection, G = V && V.nodeId === y && V.type === r() && V.id === n(), Q = B && B.nodeId === y && B.type === r() && B.id === n(), X = b.connectionMode === vr.Strict ? V?.type !== r() : y !== V?.nodeId || n() !== V?.id;
    return [
      !0,
      G,
      Q,
      X,
      Q && W
    ];
  }), z = /* @__PURE__ */ E(() => Jr(c(D), 5)), Z = /* @__PURE__ */ E(() => c(z)[0]), j = /* @__PURE__ */ E(() => c(z)[1]), Y = /* @__PURE__ */ E(() => c(z)[2]), M = /* @__PURE__ */ E(() => c(z)[3]), k = /* @__PURE__ */ E(() => c(z)[4]);
  function L(V) {
    const B = b.onbeforeconnect?.(V) ?? V;
    B && (b.addEdge(B), b.onconnect?.(V));
  }
  function x(V) {
    const B = Gu(V);
    (B && V.button === 0 || !B) && Ua.onPointerDown(V, {
      handleId: n(),
      nodeId: y,
      isTarget: c(w),
      connectionRadius: b.connectionRadius,
      domNode: b.domNode,
      nodeLookup: b.nodeLookup,
      connectionMode: b.connectionMode,
      lib: "svelte",
      autoPanOnConnect: b.autoPanOnConnect,
      flowId: b.flowId,
      isValidConnection: d() ?? b.isValidConnection,
      updateConnection: b.updateConnection,
      cancelConnection: b.cancelConnection,
      panBy: b.panBy,
      onConnect: L,
      onConnectStart: (W, G) => {
        b.onconnectstart?.(W, {
          nodeId: G.nodeId,
          handleId: G.handleId,
          handleType: G.handleType
        });
      },
      onConnectEnd: (W, G) => {
        b.onconnectend?.(W, G);
      },
      getTransform: () => [b.viewport.x, b.viewport.y, b.viewport.zoom],
      getFromHandle: () => b.connection.fromHandle,
      dragThreshold: b.connectionDragThreshold
    });
  }
  function S(V) {
    if (!y || !b.clickConnectStartHandle && !l())
      return;
    if (!b.clickConnectStartHandle) {
      b.onclickconnectstart?.(V, { nodeId: y, handleId: n(), handleType: r() }), b.clickConnectStartHandle = { nodeId: y, type: r(), id: n() };
      return;
    }
    const B = Fu(V.target), W = d() ?? b.isValidConnection, { connectionMode: G, clickConnectStartHandle: Q, flowId: X, nodeLookup: de } = b, { connection: te, isValid: pe } = Ua.isValid(V, {
      handle: { nodeId: y, id: n(), type: r() },
      connectionMode: G,
      fromNodeId: Q.nodeId,
      fromHandleId: Q.id ?? null,
      fromType: Q.type,
      isValidConnection: W,
      flowId: X,
      doc: B,
      lib: "svelte",
      nodeLookup: de
    });
    pe && te && L(te);
    const F = structuredClone(_l(b.connection));
    delete F.inProgress, F.toPosition = F.toHandle ? F.toHandle.position : null, b.onclickconnectend?.(V, F), b.clickConnectStartHandle = null;
  }
  var P = t0(), O = () => {
  };
  Fe(
    P,
    (V) => ({
      "data-handleid": n(),
      "data-nodeid": y,
      "data-handlepos": o(),
      "data-id": `${b.flowId ?? ""}-${y ?? ""}-${n() ?? "null" ?? ""}-${r() ?? ""}`,
      class: [
        "svelte-flow__handle",
        `svelte-flow__handle-${o()}`,
        b.noDragClass,
        b.noPanClass,
        o(),
        s()
      ],
      onmousedown: x,
      ontouchstart: x,
      onclick: b.clickConnect ? S : void 0,
      onkeypress: O,
      style: i(),
      role: "button",
      "aria-label": c(C)["handle.ariaLabel"],
      tabindex: "-1",
      ...h,
      [Cn]: V
    }),
    [
      () => ({
        valid: c(k),
        connectingto: c(Y),
        connectingfrom: c(j),
        source: !c(w),
        target: c(w),
        connectablestart: l(),
        connectableend: u(),
        connectable: c(N),
        connectionindicator: c(N) && (!c(Z) || c(M)) && (c(Z) || b.clickConnectStartHandle ? u() : l())
      })
    ]
  );
  var q = I(P);
  return Be(q, () => g() ?? tt), A(P), H(e, P), ue({
    get id() {
      return n();
    },
    set id(V = null) {
      n(V), v();
    },
    get type() {
      return r();
    },
    set type(V = "source") {
      r(V), v();
    },
    get position() {
      return o();
    },
    set position(V = me.Top) {
      o(V), v();
    },
    get style() {
      return i();
    },
    set style(V) {
      i(V), v();
    },
    get class() {
      return s();
    },
    set class(V) {
      s(V), v();
    },
    get isConnectable() {
      return a();
    },
    set isConnectable(V) {
      a(V), v();
    },
    get isConnectableStart() {
      return l();
    },
    set isConnectableStart(V = !0) {
      l(V), v();
    },
    get isConnectableEnd() {
      return u();
    },
    set isConnectableEnd(V = !0) {
      u(V), v();
    },
    get isValidConnection() {
      return d();
    },
    set isValidConnection(V) {
      d(V), v();
    },
    get onconnect() {
      return p();
    },
    set onconnect(V) {
      p(V), v();
    },
    get ondisconnect() {
      return f();
    },
    set ondisconnect(V) {
      f(V), v();
    },
    get children() {
      return g();
    },
    set children(V) {
      g(V), v();
    }
  });
}
re(
  Mn,
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
var n0 = /* @__PURE__ */ U("<!> <!>", 1);
function Rs(e, t) {
  le(t, !0);
  let n = m(t, "data", 7), r = m(t, "targetPosition", 23, () => me.Top), o = m(t, "sourcePosition", 23, () => me.Bottom);
  var i = n0(), s = se(i);
  Mn(s, {
    type: "target",
    get position() {
      return r();
    }
  });
  var a = T(s), l = T(a);
  return Mn(l, {
    type: "source",
    get position() {
      return o();
    }
  }), $e(() => Ae(a, ` ${n()?.label ?? ""} `)), H(e, i), ue({
    get data() {
      return n();
    },
    set data(u) {
      n(u), v();
    },
    get targetPosition() {
      return r();
    },
    set targetPosition(u = me.Top) {
      r(u), v();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(u = me.Bottom) {
      o(u), v();
    }
  });
}
re(Rs, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var r0 = /* @__PURE__ */ U(" <!>", 1);
function uc(e, t) {
  le(t, !0);
  let n = m(t, "data", 23, () => ({ label: "Node" })), r = m(t, "sourcePosition", 23, () => me.Bottom);
  we();
  var o = r0(), i = se(o), s = T(i);
  return Mn(s, {
    type: "source",
    get position() {
      return r();
    }
  }), $e(() => Ae(i, `${n()?.label ?? ""} `)), H(e, o), ue({
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
re(uc, { data: {}, sourcePosition: {} }, [], [], !0);
var o0 = /* @__PURE__ */ U(" <!>", 1);
function cc(e, t) {
  le(t, !0);
  let n = m(t, "data", 23, () => ({ label: "Node" })), r = m(t, "targetPosition", 23, () => me.Top);
  we();
  var o = o0(), i = se(o), s = T(i);
  return Mn(s, {
    type: "target",
    get position() {
      return r();
    }
  }), $e(() => Ae(i, `${n()?.label ?? ""} `)), H(e, o), ue({
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
re(cc, { data: {}, targetPosition: {} }, [], [], !0);
function dc(e, t) {
}
re(dc, {}, [], [], !0);
function Pi(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function fc(e, t) {
  const n = /* @__PURE__ */ E(At), r = /* @__PURE__ */ E(() => c(n).domNode);
  let o;
  return c(r) ? Pi(e, c(r), t) : o = bs(() => {
    je(() => {
      Pi(e, c(r), t), o?.();
    });
  }), {
    async update(i) {
      Pi(e, c(r), i);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e), o?.();
    }
  };
}
function pc() {
  let e = /* @__PURE__ */ Ee(typeof window > "u");
  if (c(e)) {
    const t = bs(() => {
      je(() => {
        K(e, !1), t?.();
      });
    });
  }
  return {
    get value() {
      return c(e);
    }
  };
}
const Ja = (e) => iv(e), i0 = (e) => Zu(e);
function Gt(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const Wo = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var s0 = /* @__PURE__ */ U("<div><!></div>");
const a0 = {
  hash: "svelte-w2n27y",
  code: ".transparent.svelte-w2n27y {background:transparent;}"
};
function gc(e, t) {
  le(t, !0), Te(e, a0);
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
  const p = At(), f = pn("svelteflow__edge_id");
  let g = /* @__PURE__ */ E(() => p.visible.edges.get(f)?.zIndex);
  var h = s0(), y = () => {
    s() && f && p.handleEdgeSelection(f);
  };
  Fe(
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
        width: Gt(o()),
        height: Gt(i()),
        "z-index": c(g)
      })
    ],
    "svelte-w2n27y"
  );
  var $ = I(h);
  return Be($, () => u() ?? tt), A(h), rt(h, (w, N) => fc?.(w, N), () => "edge-labels"), H(e, h), ue({
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
  var h = u0(), y = se(h), $ = T(y);
  {
    var w = (C) => {
      var _ = l0();
      Fe(_, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": p(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...g
      })), H(C, _);
    };
    ae($, (C) => {
      p() > 0 && C(w);
    });
  }
  var N = T($);
  {
    var b = (C) => {
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
        children: (_, D) => {
          we();
          var z = Se();
          $e(() => Ae(z, o())), H(_, z);
        },
        $$slots: { default: !0 }
      });
    };
    ae(N, (C) => {
      o() && C(b);
    });
  }
  return $e(() => {
    ye(y, "id", n()), ye(y, "d", r()), mt(y, 0, wn(["svelte-flow__edge-path", f()])), ye(y, "marker-start", l()), ye(y, "marker-end", u()), ut(y, d());
  }), H(e, h), ue({
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
      return u();
    },
    set markerEnd(C) {
      u(C), v();
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
  let n = m(t, "id", 7), r = m(t, "interactionWidth", 7), o = m(t, "label", 7), i = m(t, "labelStyle", 7), s = m(t, "markerEnd", 7), a = m(t, "markerStart", 7), l = m(t, "pathOptions", 7), u = m(t, "sourcePosition", 7), d = m(t, "sourceX", 7), p = m(t, "sourceY", 7), f = m(t, "style", 7), g = m(t, "targetPosition", 7), h = m(t, "targetX", 7), y = m(t, "targetY", 7), $ = /* @__PURE__ */ E(() => Ju({
    sourceX: d(),
    sourceY: p(),
    targetX: h(),
    targetY: y(),
    sourcePosition: u(),
    targetPosition: g(),
    curvature: l()?.curvature
  })), w = /* @__PURE__ */ E(() => Jr(c($), 3)), N = /* @__PURE__ */ E(() => c(w)[0]), b = /* @__PURE__ */ E(() => c(w)[1]), C = /* @__PURE__ */ E(() => c(w)[2]);
  return uo(e, {
    get id() {
      return n();
    },
    get path() {
      return c(N);
    },
    get labelX() {
      return c(b);
    },
    get labelY() {
      return c(C);
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
      return u();
    },
    set sourcePosition(_) {
      u(_), v();
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
  let n = m(t, "interactionWidth", 7), r = m(t, "label", 7), o = m(t, "labelStyle", 7), i = m(t, "style", 7), s = m(t, "markerEnd", 7), a = m(t, "markerStart", 7), l = m(t, "sourcePosition", 7), u = m(t, "sourceX", 7), d = m(t, "sourceY", 7), p = m(t, "targetPosition", 7), f = m(t, "targetX", 7), g = m(t, "targetY", 7), h = /* @__PURE__ */ E(() => Is({
    sourceX: u(),
    sourceY: d(),
    targetX: f(),
    targetY: g(),
    sourcePosition: l(),
    targetPosition: p()
  })), y = /* @__PURE__ */ E(() => Jr(c(h), 3)), $ = /* @__PURE__ */ E(() => c(y)[0]), w = /* @__PURE__ */ E(() => c(y)[1]), N = /* @__PURE__ */ E(() => c(y)[2]);
  return uo(e, {
    get path() {
      return c($);
    },
    get labelX() {
      return c(w);
    },
    get labelY() {
      return c(N);
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
    set interactionWidth(b) {
      n(b), v();
    },
    get label() {
      return r();
    },
    set label(b) {
      r(b), v();
    },
    get labelStyle() {
      return o();
    },
    set labelStyle(b) {
      o(b), v();
    },
    get style() {
      return i();
    },
    set style(b) {
      i(b), v();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(b) {
      s(b), v();
    },
    get markerStart() {
      return a();
    },
    set markerStart(b) {
      a(b), v();
    },
    get sourcePosition() {
      return l();
    },
    set sourcePosition(b) {
      l(b), v();
    },
    get sourceX() {
      return u();
    },
    set sourceX(b) {
      u(b), v();
    },
    get sourceY() {
      return d();
    },
    set sourceY(b) {
      d(b), v();
    },
    get targetPosition() {
      return p();
    },
    set targetPosition(b) {
      p(b), v();
    },
    get targetX() {
      return f();
    },
    set targetX(b) {
      f(b), v();
    },
    get targetY() {
      return g();
    },
    set targetY(b) {
      g(b), v();
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
  let n = m(t, "sourceX", 7), r = m(t, "sourceY", 7), o = m(t, "targetX", 7), i = m(t, "targetY", 7), s = m(t, "label", 7), a = m(t, "labelStyle", 7), l = m(t, "markerStart", 7), u = m(t, "markerEnd", 7), d = m(t, "interactionWidth", 7), p = m(t, "style", 7), f = /* @__PURE__ */ E(() => ec({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), g = /* @__PURE__ */ E(() => Jr(c(f), 3)), h = /* @__PURE__ */ E(() => c(g)[0]), y = /* @__PURE__ */ E(() => c(g)[1]), $ = /* @__PURE__ */ E(() => c(g)[2]);
  return uo(e, {
    get path() {
      return c(h);
    },
    get labelX() {
      return c(y);
    },
    get labelY() {
      return c($);
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
  let n = m(t, "sourceX", 7), r = m(t, "sourceY", 7), o = m(t, "sourcePosition", 7), i = m(t, "targetX", 7), s = m(t, "targetY", 7), a = m(t, "targetPosition", 7), l = m(t, "label", 7), u = m(t, "labelStyle", 7), d = m(t, "markerStart", 7), p = m(t, "markerEnd", 7), f = m(t, "interactionWidth", 7), g = m(t, "style", 7), h = /* @__PURE__ */ E(() => Is({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), y = /* @__PURE__ */ E(() => Jr(c(h), 3)), $ = /* @__PURE__ */ E(() => c(y)[0]), w = /* @__PURE__ */ E(() => c(y)[1]), N = /* @__PURE__ */ E(() => c(y)[2]);
  return uo(e, {
    get path() {
      return c($);
    },
    get labelX() {
      return c(w);
    },
    get labelY() {
      return c(N);
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
  }), ue({
    get sourceX() {
      return n();
    },
    set sourceX(b) {
      n(b), v();
    },
    get sourceY() {
      return r();
    },
    set sourceY(b) {
      r(b), v();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(b) {
      o(b), v();
    },
    get targetX() {
      return i();
    },
    set targetX(b) {
      i(b), v();
    },
    get targetY() {
      return s();
    },
    set targetY(b) {
      s(b), v();
    },
    get targetPosition() {
      return a();
    },
    set targetPosition(b) {
      a(b), v();
    },
    get label() {
      return l();
    },
    set label(b) {
      l(b), v();
    },
    get labelStyle() {
      return u();
    },
    set labelStyle(b) {
      u(b), v();
    },
    get markerStart() {
      return d();
    },
    set markerStart(b) {
      d(b), v();
    },
    get markerEnd() {
      return p();
    },
    set markerEnd(b) {
      p(b), v();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(b) {
      f(b), v();
    },
    get style() {
      return g();
    },
    set style(b) {
      g(b), v();
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
  let t = 0, n = jn(0), r;
  return () => {
    Ol() && (c(n), no(() => (t === 0 && (r = et(() => e(() => $o(n)))), t += 1, () => {
      Tf().then(() => {
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
  return zs(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function Qa(e) {
  const { edges: t, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l } = e, u = /* @__PURE__ */ new Map();
  for (const d of t) {
    const p = r.get(d.source), f = r.get(d.target);
    if (!p || !f)
      continue;
    if (a) {
      const { visibleNodes: y, transform: $, width: w, height: N } = e;
      if (yv({
        sourceNode: p,
        targetNode: f,
        width: w,
        height: N,
        transform: $
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
    const h = kv({
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
  return u;
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
    #t = /* @__PURE__ */ E(() => e.props.id ?? "1");
    get flowId() {
      return c(this.#t);
    }
    set flowId(r) {
      K(this.#t, r);
    }
    #e = /* @__PURE__ */ Ee(null);
    get domNode() {
      return c(this.#e);
    }
    set domNode(r) {
      K(this.#e, r);
    }
    #n = /* @__PURE__ */ Ee(null);
    get panZoom() {
      return c(this.#n);
    }
    set panZoom(r) {
      K(this.#n, r);
    }
    #r = /* @__PURE__ */ Ee(e.width ?? 0);
    get width() {
      return c(this.#r);
    }
    set width(r) {
      K(this.#r, r);
    }
    #o = /* @__PURE__ */ Ee(e.height ?? 0);
    get height() {
      return c(this.#o);
    }
    set height(r) {
      K(this.#o, r);
    }
    #i = /* @__PURE__ */ E(() => {
      const r = Pv(e.nodes, this.nodeLookup, this.parentLookup, {
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
      K(this.#i, r);
    }
    #s = /* @__PURE__ */ E(() => this.panZoom !== null);
    get viewportInitialized() {
      return c(this.#s);
    }
    set viewportInitialized(r) {
      K(this.#s, r);
    }
    #a = /* @__PURE__ */ E(() => (Tv(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
    get _edges() {
      return c(this.#a);
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
    #l = /* @__PURE__ */ E(() => {
      const r = this._prevSelectedNodeIds.size, o = /* @__PURE__ */ new Set(), i = this.nodes.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedNodeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedNodeIds.size > 0) && (this._prevSelectedNodes = i), this._prevSelectedNodeIds = o, this._prevSelectedNodes;
    });
    get selectedNodes() {
      return c(this.#l);
    }
    set selectedNodes(r) {
      K(this.#l, r);
    }
    _prevSelectedEdges = [];
    _prevSelectedEdgeIds = /* @__PURE__ */ new Set();
    #u = /* @__PURE__ */ E(() => {
      const r = this._prevSelectedEdgeIds.size, o = /* @__PURE__ */ new Set(), i = this.edges.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedEdgeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedEdgeIds.size > 0) && (this._prevSelectedEdges = i), this._prevSelectedEdgeIds = o, this._prevSelectedEdges;
    });
    get selectedEdges() {
      return c(this.#u);
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
    #c = /* @__PURE__ */ E(() => {
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
      return c(this.#c);
    }
    set visible(r) {
      K(this.#c, r);
    }
    #d = /* @__PURE__ */ E(() => e.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return c(this.#d);
    }
    set nodesDraggable(r) {
      K(this.#d, r);
    }
    #f = /* @__PURE__ */ E(() => e.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return c(this.#f);
    }
    set nodesConnectable(r) {
      K(this.#f, r);
    }
    #p = /* @__PURE__ */ E(() => e.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return c(this.#p);
    }
    set elementsSelectable(r) {
      K(this.#p, r);
    }
    #g = /* @__PURE__ */ E(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return c(this.#g);
    }
    set nodesFocusable(r) {
      K(this.#g, r);
    }
    #h = /* @__PURE__ */ E(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return c(this.#h);
    }
    set edgesFocusable(r) {
      K(this.#h, r);
    }
    #v = /* @__PURE__ */ E(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return c(this.#v);
    }
    set disableKeyboardA11y(r) {
      K(this.#v, r);
    }
    #m = /* @__PURE__ */ E(() => e.props.minZoom ?? 0.5);
    get minZoom() {
      return c(this.#m);
    }
    set minZoom(r) {
      K(this.#m, r);
    }
    #y = /* @__PURE__ */ E(() => e.props.maxZoom ?? 2);
    get maxZoom() {
      return c(this.#y);
    }
    set maxZoom(r) {
      K(this.#y, r);
    }
    #w = /* @__PURE__ */ E(() => e.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return c(this.#w);
    }
    set nodeOrigin(r) {
      K(this.#w, r);
    }
    #b = /* @__PURE__ */ E(() => e.props.nodeExtent ?? Ui);
    get nodeExtent() {
      return c(this.#b);
    }
    set nodeExtent(r) {
      K(this.#b, r);
    }
    #x = /* @__PURE__ */ E(() => e.props.translateExtent ?? Ui);
    get translateExtent() {
      return c(this.#x);
    }
    set translateExtent(r) {
      K(this.#x, r);
    }
    #C = /* @__PURE__ */ E(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return c(this.#C);
    }
    set defaultEdgeOptions(r) {
      K(this.#C, r);
    }
    #$ = /* @__PURE__ */ E(() => e.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return c(this.#$);
    }
    set nodeDragThreshold(r) {
      K(this.#$, r);
    }
    #_ = /* @__PURE__ */ E(() => e.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return c(this.#_);
    }
    set autoPanOnNodeDrag(r) {
      K(this.#_, r);
    }
    #k = /* @__PURE__ */ E(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return c(this.#k);
    }
    set autoPanOnConnect(r) {
      K(this.#k, r);
    }
    #S = /* @__PURE__ */ E(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return c(this.#S);
    }
    set autoPanOnNodeFocus(r) {
      K(this.#S, r);
    }
    #E = /* @__PURE__ */ E(() => e.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return c(this.#E);
    }
    set connectionDragThreshold(r) {
      K(this.#E, r);
    }
    fitViewQueued = e.props.fitView ?? !1;
    fitViewOptions = e.props.fitViewOptions;
    fitViewResolver = null;
    #N = /* @__PURE__ */ E(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return c(this.#N);
    }
    set snapGrid(r) {
      K(this.#N, r);
    }
    #M = /* @__PURE__ */ Ee(!1);
    get dragging() {
      return c(this.#M);
    }
    set dragging(r) {
      K(this.#M, r);
    }
    #P = /* @__PURE__ */ Ee(null);
    get selectionRect() {
      return c(this.#P);
    }
    set selectionRect(r) {
      K(this.#P, r);
    }
    #D = /* @__PURE__ */ Ee(!1);
    get selectionKeyPressed() {
      return c(this.#D);
    }
    set selectionKeyPressed(r) {
      K(this.#D, r);
    }
    #V = /* @__PURE__ */ Ee(!1);
    get multiselectionKeyPressed() {
      return c(this.#V);
    }
    set multiselectionKeyPressed(r) {
      K(this.#V, r);
    }
    #H = /* @__PURE__ */ Ee(!1);
    get deleteKeyPressed() {
      return c(this.#H);
    }
    set deleteKeyPressed(r) {
      K(this.#H, r);
    }
    #L = /* @__PURE__ */ Ee(!1);
    get panActivationKeyPressed() {
      return c(this.#L);
    }
    set panActivationKeyPressed(r) {
      K(this.#L, r);
    }
    #O = /* @__PURE__ */ Ee(!1);
    get zoomActivationKeyPressed() {
      return c(this.#O);
    }
    set zoomActivationKeyPressed(r) {
      K(this.#O, r);
    }
    #T = /* @__PURE__ */ Ee(null);
    get selectionRectMode() {
      return c(this.#T);
    }
    set selectionRectMode(r) {
      K(this.#T, r);
    }
    #z = /* @__PURE__ */ Ee("");
    get ariaLiveMessage() {
      return c(this.#z);
    }
    set ariaLiveMessage(r) {
      K(this.#z, r);
    }
    #A = /* @__PURE__ */ E(() => e.props.selectionMode ?? Ko.Partial);
    get selectionMode() {
      return c(this.#A);
    }
    set selectionMode(r) {
      K(this.#A, r);
    }
    #I = /* @__PURE__ */ E(() => ({ ...yc, ...e.props.nodeTypes }));
    get nodeTypes() {
      return c(this.#I);
    }
    set nodeTypes(r) {
      K(this.#I, r);
    }
    #q = /* @__PURE__ */ E(() => ({ ...wc, ...e.props.edgeTypes }));
    get edgeTypes() {
      return c(this.#q);
    }
    set edgeTypes(r) {
      K(this.#q, r);
    }
    #Z = /* @__PURE__ */ E(() => e.props.noPanClass ?? "nopan");
    get noPanClass() {
      return c(this.#Z);
    }
    set noPanClass(r) {
      K(this.#Z, r);
    }
    #B = /* @__PURE__ */ E(() => e.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return c(this.#B);
    }
    set noDragClass(r) {
      K(this.#B, r);
    }
    #R = /* @__PURE__ */ E(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return c(this.#R);
    }
    set noWheelClass(r) {
      K(this.#R, r);
    }
    #K = /* @__PURE__ */ E(() => gv(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return c(this.#K);
    }
    set ariaLabelConfig(r) {
      K(this.#K, r);
    }
    #Y = /* @__PURE__ */ Ee(v0(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return c(this.#Y);
    }
    set _viewport(r) {
      K(this.#Y, r);
    }
    get viewport() {
      return e.viewport ?? this._viewport;
    }
    set viewport(r) {
      e.viewport && (e.viewport = r), this._viewport = r;
    }
    #j = /* @__PURE__ */ Ee(
      // _connection is viewport independent and originating from XYHandle
      Gi
    );
    get _connection() {
      return c(this.#j);
    }
    set _connection(r) {
      K(this.#j, r);
    }
    #W = /* @__PURE__ */ E(() => this._connection.inProgress ? {
      ...this._connection,
      to: lo(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return c(this.#W);
    }
    set connection(r) {
      K(this.#W, r);
    }
    #X = /* @__PURE__ */ E(() => e.props.connectionMode ?? vr.Strict);
    get connectionMode() {
      return c(this.#X);
    }
    set connectionMode(r) {
      K(this.#X, r);
    }
    #F = /* @__PURE__ */ E(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return c(this.#F);
    }
    set connectionRadius(r) {
      K(this.#F, r);
    }
    #U = /* @__PURE__ */ E(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return c(this.#U);
    }
    set isValidConnection(r) {
      K(this.#U, r);
    }
    #G = /* @__PURE__ */ E(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return c(this.#G);
    }
    set selectNodesOnDrag(r) {
      K(this.#G, r);
    }
    #J = /* @__PURE__ */ E(() => e.props.defaultMarkerColor ?? "#b1b1b7");
    get defaultMarkerColor() {
      return c(this.#J);
    }
    set defaultMarkerColor(r) {
      K(this.#J, r);
    }
    #Q = /* @__PURE__ */ E(() => Sv(e.edges, {
      defaultColor: this.defaultMarkerColor,
      id: this.flowId,
      defaultMarkerStart: this.defaultEdgeOptions.markerStart,
      defaultMarkerEnd: this.defaultEdgeOptions.markerEnd
    }));
    get markers() {
      return c(this.#Q);
    }
    set markers(r) {
      K(this.#Q, r);
    }
    #ee = /* @__PURE__ */ E(() => e.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return c(this.#ee);
    }
    set onlyRenderVisibleElements(r) {
      K(this.#ee, r);
    }
    #te = /* @__PURE__ */ E(() => e.props.onflowerror ?? ju);
    get onerror() {
      return c(this.#te);
    }
    set onerror(r) {
      K(this.#te, r);
    }
    #ne = /* @__PURE__ */ E(() => e.props.ondelete);
    get ondelete() {
      return c(this.#ne);
    }
    set ondelete(r) {
      K(this.#ne, r);
    }
    #re = /* @__PURE__ */ E(() => e.props.onbeforedelete);
    get onbeforedelete() {
      return c(this.#re);
    }
    set onbeforedelete(r) {
      K(this.#re, r);
    }
    #oe = /* @__PURE__ */ E(() => e.props.onbeforeconnect);
    get onbeforeconnect() {
      return c(this.#oe);
    }
    set onbeforeconnect(r) {
      K(this.#oe, r);
    }
    #ie = /* @__PURE__ */ E(() => e.props.onconnect);
    get onconnect() {
      return c(this.#ie);
    }
    set onconnect(r) {
      K(this.#ie, r);
    }
    #se = /* @__PURE__ */ E(() => e.props.onconnectstart);
    get onconnectstart() {
      return c(this.#se);
    }
    set onconnectstart(r) {
      K(this.#se, r);
    }
    #ae = /* @__PURE__ */ E(() => e.props.onconnectend);
    get onconnectend() {
      return c(this.#ae);
    }
    set onconnectend(r) {
      K(this.#ae, r);
    }
    #le = /* @__PURE__ */ E(() => e.props.onbeforereconnect);
    get onbeforereconnect() {
      return c(this.#le);
    }
    set onbeforereconnect(r) {
      K(this.#le, r);
    }
    #ue = /* @__PURE__ */ E(() => e.props.onreconnect);
    get onreconnect() {
      return c(this.#ue);
    }
    set onreconnect(r) {
      K(this.#ue, r);
    }
    #ce = /* @__PURE__ */ E(() => e.props.onreconnectstart);
    get onreconnectstart() {
      return c(this.#ce);
    }
    set onreconnectstart(r) {
      K(this.#ce, r);
    }
    #de = /* @__PURE__ */ E(() => e.props.onreconnectend);
    get onreconnectend() {
      return c(this.#de);
    }
    set onreconnectend(r) {
      K(this.#de, r);
    }
    #fe = /* @__PURE__ */ E(() => e.props.clickConnect ?? !0);
    get clickConnect() {
      return c(this.#fe);
    }
    set clickConnect(r) {
      K(this.#fe, r);
    }
    #pe = /* @__PURE__ */ E(() => e.props.onclickconnectstart);
    get onclickconnectstart() {
      return c(this.#pe);
    }
    set onclickconnectstart(r) {
      K(this.#pe, r);
    }
    #ge = /* @__PURE__ */ E(() => e.props.onclickconnectend);
    get onclickconnectend() {
      return c(this.#ge);
    }
    set onclickconnectend(r) {
      K(this.#ge, r);
    }
    #he = /* @__PURE__ */ Ee(null);
    get clickConnectStartHandle() {
      return c(this.#he);
    }
    set clickConnectStartHandle(r) {
      K(this.#he, r);
    }
    #ve = /* @__PURE__ */ E(() => e.props.onselectiondrag);
    get onselectiondrag() {
      return c(this.#ve);
    }
    set onselectiondrag(r) {
      K(this.#ve, r);
    }
    #me = /* @__PURE__ */ E(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return c(this.#me);
    }
    set onselectiondragstart(r) {
      K(this.#me, r);
    }
    #ye = /* @__PURE__ */ E(() => e.props.onselectiondragstop);
    get onselectiondragstop() {
      return c(this.#ye);
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
    #we = /* @__PURE__ */ E(() => e.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : e.props.colorMode ?? "light");
    get colorMode() {
      return c(this.#we);
    }
    set colorMode(r) {
      K(this.#we, r);
    }
    constructor() {
      process.env.NODE_ENV === "development" && (el(e.nodes, "nodes"), el(e.edges, "edges"));
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = Gi, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
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
  if (t.provider && typeof window == "object" && !Ol())
    throw new Error(`Use $derived(${e}()) to receive updates when values change.`);
}
function At() {
  const e = pn(Xr);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return process.env.NODE_ENV === "development" && y0("useStore"), e.getStore();
}
const Xr = Symbol();
function bc(e) {
  const t = m0(e);
  function n(M) {
    t.nodeTypes = {
      ...yc,
      ...M
    };
  }
  function r(M) {
    t.edgeTypes = {
      ...wc,
      ...M
    };
  }
  function o(M) {
    t.edges = xv(M, t.edges);
  }
  const i = (M, k = !1) => {
    t.nodes = t.nodes.map((L) => {
      const x = M.get(L.id);
      return x ? { ...L, position: x.position, dragging: k } : L;
    });
  };
  function s(M) {
    const { changes: k, updatedInternals: L } = Lv(M, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin);
    if (!L)
      return;
    Mv(t.nodeLookup, t.parentLookup, {
      nodeOrigin: t.nodeOrigin,
      nodeExtent: t.nodeExtent
    }), t.fitViewQueued && t.resolveFitView();
    const x = /* @__PURE__ */ new Map();
    for (const S of k) {
      const P = t.nodeLookup.get(S.id)?.internals.userNode;
      if (!P)
        continue;
      const O = { ...P };
      switch (S.type) {
        case "dimensions": {
          const q = { ...O.measured, ...S.dimensions };
          S.setAttributes && (O.width = S.dimensions?.width ?? O.width, O.height = S.dimensions?.height ?? O.height), O.measured = q;
          break;
        }
        case "position":
          O.position = S.position ?? O.position;
          break;
      }
      x.set(S.id, O);
    }
    t.nodes = t.nodes.map((S) => x.get(S.id) ?? S);
  }
  function a(M) {
    const k = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = M, t.fitViewResolver = k, t.nodes = [...t.nodes], k.promise;
  }
  async function l(M, k, L) {
    const x = typeof L?.zoom < "u" ? L.zoom : t.maxZoom, S = t.panZoom;
    return S ? (await S.setViewport({
      x: t.width / 2 - M * x,
      y: t.height / 2 - k * x,
      zoom: x
    }, { duration: L?.duration, ease: L?.ease, interpolate: L?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function u(M, k) {
    const L = t.panZoom;
    return L ? L.scaleBy(M, k) : Promise.resolve(!1);
  }
  function d(M) {
    return u(1.2, M);
  }
  function p(M) {
    return u(1 / 1.2, M);
  }
  function f(M) {
    const k = t.panZoom;
    k && (k.setScaleExtent([M, t.maxZoom]), t.minZoom = M);
  }
  function g(M) {
    const k = t.panZoom;
    k && (k.setScaleExtent([t.minZoom, M]), t.maxZoom = M);
  }
  function h(M) {
    const k = t.panZoom;
    k && (k.setTranslateExtent(M), t.translateExtent = M);
  }
  function y(M) {
    t.panZoom?.setClickDistance(M);
  }
  function $(M, k = null) {
    let L = !1;
    const x = M.map((S) => (!k || k.has(S.id)) && S.selected ? (L = !0, { ...S, selected: !1 }) : S);
    return [L, x];
  }
  function w(M) {
    const k = M?.nodes ? new Set(M.nodes.map((q) => q.id)) : null, [L, x] = $(t.nodes, k);
    L && (t.nodes = x);
    const S = M?.edges ? new Set(M.edges.map((q) => q.id)) : null, [P, O] = $(t.edges, S);
    P && (t.edges = O);
  }
  function N(M) {
    const k = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((L) => {
      const x = M.includes(L.id), S = k && L.selected || x;
      if (L.selected !== S) {
        const P = t.nodeLookup.get(L.id);
        return P && (P.selected = S), L.selected = S, { ...L };
      }
      return L;
    }), k || w({ nodes: [] });
  }
  function b(M) {
    const k = t.multiselectionKeyPressed;
    t.edges = t.edges.map((L) => {
      const x = M.includes(L.id), S = k && L.selected || x;
      return L.selected !== S ? { ...L, selected: S } : L;
    }), k || w({ edges: [] });
  }
  function C(M, k, L) {
    const x = t.nodeLookup.get(M);
    if (!x) {
      console.warn("012", Fn.error012(M));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, x.selected ? (k || x.selected && t.multiselectionKeyPressed) && (w({ nodes: [x], edges: [] }), requestAnimationFrame(() => L?.blur())) : N([M]);
  }
  function _(M) {
    const k = t.edgeLookup.get(M);
    if (!k) {
      console.warn("012", Fn.error012(M));
      return;
    }
    (k.selectable || t.elementsSelectable && typeof k.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, k.selected ? k.selected && t.multiselectionKeyPressed && w({ nodes: [], edges: [k] }) : b([M]));
  }
  function D(M, k) {
    const { nodeExtent: L, snapGrid: x, nodeOrigin: S, nodeLookup: P, nodesDraggable: O, onerror: q } = t, V = /* @__PURE__ */ new Map(), B = x?.[0] ?? 5, W = x?.[1] ?? 5, G = M.x * B * k, Q = M.y * W * k;
    for (const X of P.values()) {
      if (!(X.selected && (X.draggable || O && typeof X.draggable > "u")))
        continue;
      let de = {
        x: X.internals.positionAbsolute.x + G,
        y: X.internals.positionAbsolute.y + Q
      };
      x && (de = fi(de, x));
      const { position: te, positionAbsolute: pe } = Bu({
        nodeId: X.id,
        nextPosition: de,
        nodeLookup: P,
        nodeExtent: L,
        nodeOrigin: S,
        onError: q
      });
      X.position = te, X.internals.positionAbsolute = pe, V.set(X.id, X);
    }
    i(V);
  }
  function z(M) {
    return Ov({
      delta: M,
      panZoom: t.panZoom,
      transform: [t.viewport.x, t.viewport.y, t.viewport.zoom],
      translateExtent: t.translateExtent,
      width: t.width,
      height: t.height
    });
  }
  const Z = (M) => {
    t._connection = { ...M };
  };
  function j() {
    t._connection = Gi;
  }
  function Y() {
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
    addSelectedEdges: b,
    handleNodeSelection: C,
    handleEdgeSelection: _,
    moveSelectedNodes: D,
    panBy: z,
    updateConnection: Z,
    cancelConnection: j,
    reset: Y
  });
}
function w0(e, t) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: l, paneClickDistance: u, setPanZoomInstance: d, onDraggingChange: p, onTransformChange: f } = t, g = e0({
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
var b0 = /* @__PURE__ */ U('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function xc(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "panOnScrollMode", 23, () => Wt.Free), o = m(t, "preventScrolling", 7, !0), i = m(t, "zoomOnScroll", 7, !0), s = m(t, "zoomOnDoubleClick", 7, !0), a = m(t, "zoomOnPinch", 7, !0), l = m(t, "panOnDrag", 7, !0), u = m(t, "panOnScroll", 7, !1), d = m(t, "paneClickDistance", 7, 1), p = m(t, "onmovestart", 7), f = m(t, "onmove", 7), g = m(t, "onmoveend", 7), h = m(t, "oninit", 7), y = m(t, "children", 7), $ = /* @__PURE__ */ E(() => n().panActivationKeyPressed || l()), w = /* @__PURE__ */ E(() => n().panActivationKeyPressed || u());
  const { viewport: N } = n();
  let b = !1;
  je(() => {
    !b && n().viewportInitialized && (h()?.(), b = !0);
  });
  var C = b0(), _ = I(C);
  return Be(_, y), A(C), rt(C, (D, z) => w0?.(D, z), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: N,
    onDraggingChange: (D) => {
      n(n().dragging = D, !0);
    },
    setPanZoomInstance: (D) => {
      n(n().panZoom = D, !0);
    },
    onPanZoomStart: p(),
    onPanZoom: f(),
    onPanZoomEnd: g(),
    zoomOnScroll: i(),
    zoomOnDoubleClick: s(),
    zoomOnPinch: a(),
    panOnScroll: c(w),
    panOnDrag: c($),
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
    onTransformChange: (D) => {
      n(n().viewport = { x: D[0], y: D[1], zoom: D[2] }, !0);
    }
  })), H(e, C), ue({
    get store() {
      return n();
    },
    set store(D) {
      n(D), v();
    },
    get panOnScrollMode() {
      return r();
    },
    set panOnScrollMode(D = Wt.Free) {
      r(D), v();
    },
    get preventScrolling() {
      return o();
    },
    set preventScrolling(D = !0) {
      o(D), v();
    },
    get zoomOnScroll() {
      return i();
    },
    set zoomOnScroll(D = !0) {
      i(D), v();
    },
    get zoomOnDoubleClick() {
      return s();
    },
    set zoomOnDoubleClick(D = !0) {
      s(D), v();
    },
    get zoomOnPinch() {
      return a();
    },
    set zoomOnPinch(D = !0) {
      a(D), v();
    },
    get panOnDrag() {
      return l();
    },
    set panOnDrag(D = !0) {
      l(D), v();
    },
    get panOnScroll() {
      return u();
    },
    set panOnScroll(D = !1) {
      u(D), v();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(D = 1) {
      d(D), v();
    },
    get onmovestart() {
      return p();
    },
    set onmovestart(D) {
      p(D), v();
    },
    get onmove() {
      return f();
    },
    set onmove(D) {
      f(D), v();
    },
    get onmoveend() {
      return g();
    },
    set onmoveend(D) {
      g(D), v();
    },
    get oninit() {
      return h();
    },
    set oninit(D) {
      h(D), v();
    },
    get children() {
      return y();
    },
    set children(D) {
      y(D), v();
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
var x0 = /* @__PURE__ */ U("<div><!></div>");
function Cc(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "panOnDrag", 7, !0), o = m(t, "selectionOnDrag", 7), i = m(t, "onpaneclick", 7), s = m(t, "onpanecontextmenu", 7), a = m(t, "onselectionstart", 7), l = m(t, "onselectionend", 7), u = m(t, "children", 7), d, p = null, f = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ E(() => n().panActivationKeyPressed || r()), y = /* @__PURE__ */ E(() => n().selectionKeyPressed || n().selectionRect || o() && c(h) !== !0), $ = /* @__PURE__ */ E(() => n().elementsSelectable && (c(y) || n().selectionRectMode === "user")), w = !1;
  function N(k) {
    if (w || n().connection.inProgress) {
      w = !1;
      return;
    }
    i()?.({ event: k }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0);
  }
  function b(k) {
    if (p = d?.getBoundingClientRect(), !n().elementsSelectable || !c(y) || k.button !== 0 || k.target !== d || !p)
      return;
    k.target?.setPointerCapture?.(k.pointerId);
    const { x: L, y: x } = Kt(k, p);
    n().unselectNodesAndEdges(), n(n().selectionRect = { width: 0, height: 0, startX: L, startY: x, x: L, y: x }, !0), a()?.(k);
  }
  function C(k) {
    if (!c(y) || !p || !n().selectionRect)
      return;
    w = !0;
    const L = Kt(k, p), { startX: x = 0, startY: S = 0 } = n().selectionRect, P = {
      ...n().selectionRect,
      x: L.x < x ? L.x : x,
      y: L.y < S ? L.y : S,
      width: Math.abs(L.x - x),
      height: Math.abs(L.y - S)
    }, O = f, q = g;
    f = new Set(zs(
      n().nodeLookup,
      P,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === Ko.Partial,
      !0
    ).map((B) => B.id));
    const V = n().defaultEdgeOptions.selectable ?? !0;
    g = /* @__PURE__ */ new Set();
    for (const B of f) {
      const W = n().connectionLookup.get(B);
      if (W)
        for (const { edgeId: G } of W.values()) {
          const Q = n().edgeLookup.get(G);
          Q && (Q.selectable ?? V) && g.add(G);
        }
    }
    rl(O, f) || n(n().nodes = n().nodes.map(nl(f)), !0), rl(q, g) || n(n().edges = n().edges.map(nl(g)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = P, !0);
  }
  function _(k) {
    k.button === 0 && (k.target?.releasePointerCapture?.(k.pointerId), !c(y) && n().selectionRectMode === "user" && k.target === d && N?.(k), n(n().selectionRect = null, !0), f.size > 0 && n(n().selectionRectMode = "nodes", !0), n().selectionKeyPressed && (w = !1), l()?.(k));
  }
  const D = (k) => {
    if (Array.isArray(c(h)) && c(h).includes(2)) {
      k.preventDefault();
      return;
    }
    s()?.({ event: k });
  };
  var z = x0();
  let Z;
  var j = /* @__PURE__ */ E(() => c($) ? void 0 : tl(N, d));
  z.__click = function(...k) {
    c(j)?.apply(this, k);
  }, z.__pointerdown = function(...k) {
    (c($) ? b : void 0)?.apply(this, k);
  }, z.__pointermove = function(...k) {
    (c($) ? C : void 0)?.apply(this, k);
  }, z.__pointerup = function(...k) {
    (c($) ? _ : void 0)?.apply(this, k);
  };
  var Y = /* @__PURE__ */ E(() => tl(D, d));
  z.__contextmenu = function(...k) {
    c(Y)?.apply(this, k);
  };
  var M = I(z);
  return Be(M, u), A(z), Pt(z, (k) => d = k, () => d), $e((k) => Z = mt(z, 1, "svelte-flow__pane svelte-flow__container", null, Z, k), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: c(y)
    })
  ]), H(e, z), ue({
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
      return u();
    },
    set children(k) {
      u(k), v();
    }
  });
}
Hn([
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
var C0 = /* @__PURE__ */ U('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function $c(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "children", 7);
  var o = C0();
  let i;
  var s = I(o);
  return Be(s, r), A(o), $e((a) => i = ut(o, "", i, a), [
    () => ({
      transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
    })
  ]), H(e, o), ue({
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
var $0 = /* @__PURE__ */ U('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-62ze0y"> </div>'), _0 = /* @__PURE__ */ U('<div class="a11y-hidden svelte-62ze0y"> </div> <div class="a11y-hidden svelte-62ze0y"> </div> <!>', 1);
const k0 = {
  hash: "svelte-62ze0y",
  code: ".a11y-hidden.svelte-62ze0y {display:none;}.a11y-live-msg.svelte-62ze0y {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function kc(e, t) {
  le(t, !0), Te(e, k0);
  let n = m(t, "store", 7);
  var r = _0(), o = se(r), i = I(o, !0);
  A(o);
  var s = T(o, 2), a = I(s, !0);
  A(s);
  var l = T(s, 2);
  {
    var u = (d) => {
      var p = $0(), f = I(p, !0);
      A(p), $e(() => {
        ye(p, "id", `${S0}-${n().flowId}`), Ae(f, n().ariaLiveMessage);
      }), H(d, p);
    };
    ae(l, (d) => {
      n().disableKeyboardA11y || d(u);
    });
  }
  return $e(() => {
    ye(o, "id", `${Sc}-${n().flowId}`), Ae(i, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), ye(s, "id", `${Ec}-${n().flowId}`), Ae(a, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), H(e, r), ue({
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
var E0 = /* @__PURE__ */ U("<div><!></div>");
function Nc(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "node", 7), o = m(t, "resizeObserver", 7), i = m(t, "nodeClickDistance", 7), s = m(t, "onnodeclick", 7), a = m(t, "onnodedrag", 7), l = m(t, "onnodedragstart", 7), u = m(t, "onnodedragstop", 7), d = m(t, "onnodepointerenter", 7), p = m(t, "onnodepointerleave", 7), f = m(t, "onnodepointermove", 7), g = m(t, "onnodecontextmenu", 7), h = /* @__PURE__ */ E(() => st(r().data, () => ({}), !0)), y = /* @__PURE__ */ E(() => st(r().selected, !1)), $ = /* @__PURE__ */ E(() => r().draggable), w = /* @__PURE__ */ E(() => r().selectable), N = /* @__PURE__ */ E(() => st(r().deletable, !0)), b = /* @__PURE__ */ E(() => r().connectable), C = /* @__PURE__ */ E(() => r().focusable), _ = /* @__PURE__ */ E(() => st(r().hidden, !1)), D = /* @__PURE__ */ E(() => st(r().dragging, !1)), z = /* @__PURE__ */ E(() => st(r().style, "")), Z = /* @__PURE__ */ E(() => r().class), j = /* @__PURE__ */ E(() => st(r().type, "default")), Y = /* @__PURE__ */ E(() => r().parentId), M = /* @__PURE__ */ E(() => r().sourcePosition), k = /* @__PURE__ */ E(() => r().targetPosition), L = /* @__PURE__ */ E(() => st(r().measured, () => ({ width: 0, height: 0 }), !0).width), x = /* @__PURE__ */ E(() => st(r().measured, () => ({ width: 0, height: 0 }), !0).height), S = /* @__PURE__ */ E(() => r().initialWidth), P = /* @__PURE__ */ E(() => r().initialHeight), O = /* @__PURE__ */ E(() => r().width), q = /* @__PURE__ */ E(() => r().height), V = /* @__PURE__ */ E(() => r().dragHandle), B = /* @__PURE__ */ E(() => st(r().internals.z, 0)), W = /* @__PURE__ */ E(() => r().internals.positionAbsolute.x), G = /* @__PURE__ */ E(() => r().internals.positionAbsolute.y), Q = /* @__PURE__ */ E(() => r().internals.userNode), { id: X } = r(), de = /* @__PURE__ */ E(() => c($) ?? n().nodesDraggable), te = /* @__PURE__ */ E(() => c(w) ?? n().elementsSelectable), pe = /* @__PURE__ */ E(() => c(b) ?? n().nodesConnectable), F = /* @__PURE__ */ E(() => Wu(r())), Ce = /* @__PURE__ */ E(() => !!r().internals.handleBounds), ge = /* @__PURE__ */ E(() => c(F) && c(Ce)), oe = /* @__PURE__ */ E(() => c(C) ?? n().nodesFocusable);
  function ee(fe) {
    return n().parentLookup.has(fe);
  }
  let ce = /* @__PURE__ */ E(() => ee(X)), J = /* @__PURE__ */ Ee(null), ve = null, ne = c(j), _e = c(M), R = c(k), Je = /* @__PURE__ */ E(() => n().nodeTypes[c(j)] ?? Rs), ie = /* @__PURE__ */ E(() => n().ariaLabelConfig);
  dr("svelteflow__node_connectable", {
    get value() {
      return c(pe);
    }
  }), dr("svelteflow__node_id", X), process.env.NODE_ENV === "development" && je(() => {
    n().nodeTypes[c(j)] || console.warn("003", Fn.error003(c(j)));
  });
  let xe = /* @__PURE__ */ E(() => {
    const fe = c(L) === void 0 ? c(O) ?? c(S) : c(O), Ze = c(x) === void 0 ? c(q) ?? c(P) : c(q);
    if (!(fe === void 0 && Ze === void 0 && c(z) === void 0))
      return `${c(z)};${fe ? `width:${Gt(fe)};` : ""}${Ze ? `height:${Gt(Ze)};` : ""}`;
  });
  je(() => {
    (c(j) !== ne || c(M) !== _e || c(k) !== R) && c(J) !== null && requestAnimationFrame(() => {
      c(J) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[X, { id: X, nodeElement: c(J), force: !0 }]]));
    }), ne = c(j), _e = c(M), R = c(k);
  }), je(() => {
    o() && (!c(ge) || c(J) !== ve) && (ve && o().unobserve(ve), c(J) && o().observe(c(J)), ve = c(J));
  }), ri(() => {
    ve && o()?.unobserve(ve);
  });
  function ke(fe) {
    c(te) && (!n().selectNodesOnDrag || !c(de) || n().nodeDragThreshold > 0) && n().handleNodeSelection(X), s()?.({ node: c(Q), event: fe });
  }
  function He(fe) {
    if (!(Uu(fe) || n().disableKeyboardA11y))
      if (qu.includes(fe.key) && c(te)) {
        const Ze = fe.key === "Escape";
        n().handleNodeSelection(X, Ze, c(J));
      } else c(de) && r().selected && Object.prototype.hasOwnProperty.call(Wo, fe.key) && (fe.preventDefault(), n(
        n().ariaLiveMessage = c(ie)["node.a11yDescription.ariaLiveMessage"]({
          direction: fe.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(Wo[fe.key], fe.shiftKey ? 4 : 1));
  }
  const dt = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !c(J)?.matches(":focus-visible"))
      return;
    const { width: fe, height: Ze, viewport: it } = n();
    zs(/* @__PURE__ */ new Map([[X, r()]]), { x: 0, y: 0, width: fe, height: Ze }, [it.x, it.y, it.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: it.zoom });
  };
  var kt = Ve(), De = se(kt);
  {
    var We = (fe) => {
      var Ze = E0();
      Fe(
        Ze,
        (Re, St) => ({
          "data-id": X,
          class: [
            "svelte-flow__node",
            `svelte-flow__node-${c(j)}`,
            c(Z)
          ],
          style: c(xe),
          onclick: ke,
          onpointerenter: d() ? (Qe) => d()({ node: c(Q), event: Qe }) : void 0,
          onpointerleave: p() ? (Qe) => p()({ node: c(Q), event: Qe }) : void 0,
          onpointermove: f() ? (Qe) => f()({ node: c(Q), event: Qe }) : void 0,
          oncontextmenu: g() ? (Qe) => g()({ node: c(Q), event: Qe }) : void 0,
          onkeydown: c(oe) ? He : void 0,
          onfocus: c(oe) ? dt : void 0,
          tabIndex: c(oe) ? 0 : void 0,
          role: r().ariaRole ?? (c(oe) ? "group" : void 0),
          "aria-roledescription": "node",
          "aria-describedby": n().disableKeyboardA11y ? void 0 : `${Sc}-${n().flowId}`,
          ...r().domAttributes,
          [Cn]: Re,
          [Rt]: St
        }),
        [
          () => ({
            dragging: c(D),
            selected: c(y),
            draggable: c(de),
            connectable: c(pe),
            selectable: c(te),
            nopan: c(de),
            parent: c(ce)
          }),
          () => ({
            "z-index": c(B),
            transform: `translate(${c(W) ?? ""}px, ${c(G) ?? ""}px)`,
            visibility: c(F) ? "visible" : "hidden"
          })
        ]
      );
      var it = I(Ze);
      Es(it, () => c(Je), (Re, St) => {
        St(Re, {
          get data() {
            return c(h);
          },
          get id() {
            return X;
          },
          get selected() {
            return c(y);
          },
          get selectable() {
            return c(te);
          },
          get deletable() {
            return c(N);
          },
          get sourcePosition() {
            return c(M);
          },
          get targetPosition() {
            return c(k);
          },
          get zIndex() {
            return c(B);
          },
          get dragging() {
            return c(D);
          },
          get draggable() {
            return c(de);
          },
          get dragHandle() {
            return c(V);
          },
          get parentId() {
            return c(Y);
          },
          get type() {
            return c(j);
          },
          get isConnectable() {
            return c(pe);
          },
          get positionAbsoluteX() {
            return c(W);
          },
          get positionAbsoluteY() {
            return c(G);
          },
          get width() {
            return c(O);
          },
          get height() {
            return c(q);
          }
        });
      }), A(Ze), rt(Ze, (Re, St) => _c?.(Re, St), () => ({
        nodeId: X,
        isSelectable: c(te),
        disabled: !c(de),
        handleSelector: c(V),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (Re, St, Qe, qt) => {
          a()?.({ event: Re, targetNode: Qe, nodes: qt });
        },
        onDragStart: (Re, St, Qe, qt) => {
          l()?.({ event: Re, targetNode: Qe, nodes: qt });
        },
        onDragStop: (Re, St, Qe, qt) => {
          u()?.({ event: Re, targetNode: Qe, nodes: qt });
        },
        store: n()
      })), Pt(Ze, (Re) => K(J, Re), () => c(J)), H(fe, Ze);
    };
    ae(De, (fe) => {
      c(_) || fe(We);
    });
  }
  return H(e, kt), ue({
    get store() {
      return n();
    },
    set store(fe) {
      n(fe), v();
    },
    get node() {
      return r();
    },
    set node(fe) {
      r(fe), v();
    },
    get resizeObserver() {
      return o();
    },
    set resizeObserver(fe) {
      o(fe), v();
    },
    get nodeClickDistance() {
      return i();
    },
    set nodeClickDistance(fe) {
      i(fe), v();
    },
    get onnodeclick() {
      return s();
    },
    set onnodeclick(fe) {
      s(fe), v();
    },
    get onnodedrag() {
      return a();
    },
    set onnodedrag(fe) {
      a(fe), v();
    },
    get onnodedragstart() {
      return l();
    },
    set onnodedragstart(fe) {
      l(fe), v();
    },
    get onnodedragstop() {
      return u();
    },
    set onnodedragstop(fe) {
      u(fe), v();
    },
    get onnodepointerenter() {
      return d();
    },
    set onnodepointerenter(fe) {
      d(fe), v();
    },
    get onnodepointerleave() {
      return p();
    },
    set onnodepointerleave(fe) {
      p(fe), v();
    },
    get onnodepointermove() {
      return f();
    },
    set onnodepointermove(fe) {
      f(fe), v();
    },
    get onnodecontextmenu() {
      return g();
    },
    set onnodecontextmenu(fe) {
      g(fe), v();
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
var N0 = /* @__PURE__ */ U('<div class="svelte-flow__nodes"></div>');
function Mc(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "nodeClickDistance", 7), o = m(t, "onnodeclick", 7), i = m(t, "onnodecontextmenu", 7), s = m(t, "onnodepointerenter", 7), a = m(t, "onnodepointermove", 7), l = m(t, "onnodepointerleave", 7), u = m(t, "onnodedrag", 7), d = m(t, "onnodedragstart", 7), p = m(t, "onnodedragstop", 7);
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
  var g = N0();
  return lt(g, 21, () => n().visible.nodes.values(), (h) => h.id, (h, y) => {
    Nc(h, {
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
      set store($) {
        n($);
      }
    });
  }), A(g), H(e, g), ue({
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
re(
  Mc,
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
var M0 = /* @__PURE__ */ he('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function Pc(e, t) {
  le(t, !0);
  const n = m(t, "edge", 7), r = m(t, "store", 15), o = m(t, "onedgeclick", 7), i = m(t, "onedgecontextmenu", 7), s = m(t, "onedgepointerenter", 7), a = m(t, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ E(() => n().source), u = /* @__PURE__ */ E(() => n().target), d = /* @__PURE__ */ E(() => n().sourceX), p = /* @__PURE__ */ E(() => n().sourceY), f = /* @__PURE__ */ E(() => n().targetX), g = /* @__PURE__ */ E(() => n().targetY), h = /* @__PURE__ */ E(() => n().sourcePosition), y = /* @__PURE__ */ E(() => n().targetPosition), $ = /* @__PURE__ */ E(() => st(n().animated, !1)), w = /* @__PURE__ */ E(() => st(n().selected, !1)), N = /* @__PURE__ */ E(() => n().label), b = /* @__PURE__ */ E(() => n().labelStyle), C = /* @__PURE__ */ E(() => st(n().data, () => ({}), !0)), _ = /* @__PURE__ */ E(() => n().style), D = /* @__PURE__ */ E(() => n().interactionWidth), z = /* @__PURE__ */ E(() => st(n().type, "default")), Z = /* @__PURE__ */ E(() => n().sourceHandle), j = /* @__PURE__ */ E(() => n().targetHandle), Y = /* @__PURE__ */ E(() => n().markerStart), M = /* @__PURE__ */ E(() => n().markerEnd), k = /* @__PURE__ */ E(() => n().selectable), L = /* @__PURE__ */ E(() => n().focusable), x = /* @__PURE__ */ E(() => st(n().deletable, !0)), S = /* @__PURE__ */ E(() => n().hidden), P = /* @__PURE__ */ E(() => n().zIndex), O = /* @__PURE__ */ E(() => n().class), q = /* @__PURE__ */ E(() => n().ariaLabel), V = null;
  const { id: B } = n();
  dr("svelteflow__edge_id", B);
  let W = /* @__PURE__ */ E(() => c(k) ?? r().elementsSelectable), G = /* @__PURE__ */ E(() => c(L) ?? r().edgesFocusable), Q = /* @__PURE__ */ E(() => r().edgeTypes[c(z)] ?? Ks), X = /* @__PURE__ */ E(() => c(Y) ? `url('#${Qi(c(Y), r().flowId)}')` : void 0), de = /* @__PURE__ */ E(() => c(M) ? `url('#${Qi(c(M), r().flowId)}')` : void 0);
  function te(ee) {
    const ce = r().edgeLookup.get(B);
    ce && (c(W) && r().handleEdgeSelection(B), o()?.({ event: ee, edge: ce }));
  }
  function pe(ee, ce) {
    const J = r().edgeLookup.get(B);
    J && ce({ event: ee, edge: J });
  }
  function F(ee) {
    if (!r().disableKeyboardA11y && qu.includes(ee.key) && c(W)) {
      const { unselectNodesAndEdges: ce, addSelectedEdges: J } = r();
      ee.key === "Escape" ? (V?.blur(), ce({ edges: [n()] })) : J([B]);
    }
  }
  var Ce = Ve(), ge = se(Ce);
  {
    var oe = (ee) => {
      var ce = M0();
      let J;
      var ve = I(ce);
      Fe(
        ve,
        (_e) => ({
          class: ["svelte-flow__edge", c(O)],
          "data-id": B,
          onclick: te,
          oncontextmenu: i() ? (R) => {
            pe(R, i());
          } : void 0,
          onpointerenter: s() ? (R) => {
            pe(R, s());
          } : void 0,
          onpointerleave: a() ? (R) => {
            pe(R, a());
          } : void 0,
          "aria-label": c(q) === null ? void 0 : c(q) ? c(q) : `Edge from ${c(l)} to ${c(u)}`,
          "aria-describedby": c(G) ? `${Ec}-${r().flowId}` : void 0,
          role: n().ariaRole ?? (c(G) ? "group" : "img"),
          "aria-roledescription": "edge",
          onkeydown: c(G) ? F : void 0,
          tabindex: c(G) ? 0 : void 0,
          ...n().domAttributes,
          [Cn]: _e
        }),
        [
          () => ({
            animated: c($),
            selected: c(w),
            selectable: c(W)
          })
        ]
      );
      var ne = I(ve);
      Es(ne, () => c(Q), (_e, R) => {
        R(_e, {
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
            return c($);
          },
          get selected() {
            return c(w);
          },
          get label() {
            return c(N);
          },
          get labelStyle() {
            return c(b);
          },
          get data() {
            return c(C);
          },
          get style() {
            return c(_);
          },
          get interactionWidth() {
            return c(D);
          },
          get selectable() {
            return c(W);
          },
          get deletable() {
            return c(x);
          },
          get type() {
            return c(z);
          },
          get sourceHandleId() {
            return c(Z);
          },
          get targetHandleId() {
            return c(j);
          },
          get markerStart() {
            return c(X);
          },
          get markerEnd() {
            return c(de);
          }
        });
      }), A(ve), Pt(ve, (_e) => V = _e, () => V), A(ce), $e((_e) => J = ut(ce, "", J, _e), [() => ({ "z-index": c(P) })]), H(ee, ce);
    };
    ae(ge, (ee) => {
      c(S) || ee(oe);
    });
  }
  return H(e, Ce), ue({
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
  Pc,
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
var P0 = /* @__PURE__ */ he("<defs></defs>");
function Dc(e, t) {
  le(t, !1);
  const n = At();
  lu();
  var r = P0();
  lt(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    Vc(o, Ie(() => c(i)));
  }), A(r), H(e, r), ue();
}
re(Dc, {}, [], [], !0);
var D0 = /* @__PURE__ */ he('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), V0 = /* @__PURE__ */ he('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), H0 = /* @__PURE__ */ he('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Vc(e, t) {
  le(t, !0);
  let n = m(t, "id", 7), r = m(t, "type", 7), o = m(t, "width", 7, 12.5), i = m(t, "height", 7, 12.5), s = m(t, "markerUnits", 7, "strokeWidth"), a = m(t, "orient", 7, "auto-start-reverse"), l = m(t, "color", 7), u = m(t, "strokeWidth", 7);
  var d = H0(), p = I(d);
  {
    var f = (h) => {
      var y = D0();
      $e(() => {
        ye(y, "stroke", l()), ye(y, "stroke-width", u());
      }), H(h, y);
    }, g = (h, y) => {
      {
        var $ = (w) => {
          var N = V0();
          $e(() => {
            ye(N, "stroke", l()), ye(N, "stroke-width", u()), ye(N, "fill", l());
          }), H(w, N);
        };
        ae(
          h,
          (w) => {
            r() === Yr.ArrowClosed && w($);
          },
          y
        );
      }
    };
    ae(p, (h) => {
      r() === Yr.Arrow ? h(f) : h(g, !1);
    });
  }
  return A(d), $e(() => {
    ye(d, "id", n()), ye(d, "markerWidth", `${o()}`), ye(d, "markerHeight", `${i()}`), ye(d, "markerUnits", s()), ye(d, "orient", a());
  }), H(e, d), ue({
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
re(
  Vc,
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
var L0 = /* @__PURE__ */ U('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function Hc(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "onedgeclick", 7), o = m(t, "onedgecontextmenu", 7), i = m(t, "onedgepointerenter", 7), s = m(t, "onedgepointerleave", 7);
  var a = L0(), l = I(a), u = I(l);
  Dc(u, {}), A(l);
  var d = T(l, 2);
  return lt(d, 17, () => n().visible.edges.values(), (p) => p.id, (p, f) => {
    Pc(p, {
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
  }), A(a), H(e, a), ue({
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
  Hc,
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
var O0 = /* @__PURE__ */ U('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const T0 = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function Ys(e, t) {
  le(t, !0), Te(e, T0);
  let n = m(t, "x", 7, 0), r = m(t, "y", 7, 0), o = m(t, "width", 7, 0), i = m(t, "height", 7, 0), s = m(t, "isVisible", 7, !0);
  var a = Ve(), l = se(a);
  {
    var u = (d) => {
      var p = O0();
      let f;
      $e((g) => f = ut(p, "", f, g), [
        () => ({
          width: typeof o() == "string" ? o() : Gt(o()),
          height: typeof i() == "string" ? i() : Gt(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), H(d, p);
    };
    ae(l, (d) => {
      s() && d(u);
    });
  }
  return H(e, a), ue({
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
re(Ys, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
function z0(e, t, n) {
  const r = t().nodes.filter((o) => o.selected);
  n()?.({ nodes: r, event: e });
}
function A0(e, t, n) {
  const r = t().nodes.filter((o) => o.selected);
  n()?.({ nodes: r, event: e });
}
var I0 = /* @__PURE__ */ U("<div><!></div>");
const q0 = {
  hash: "svelte-16qgzgd",
  code: ".svelte-flow__selection-wrapper.svelte-16qgzgd {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}"
};
function Lc(e, t) {
  le(t, !0), Te(e, q0);
  let n = m(t, "store", 15), r = m(t, "onnodedrag", 7), o = m(t, "onnodedragstart", 7), i = m(t, "onnodedragstop", 7), s = m(t, "onselectionclick", 7), a = m(t, "onselectioncontextmenu", 7), l = /* @__PURE__ */ Ee(void 0);
  je(() => {
    n().disableKeyboardA11y || c(l)?.focus({ preventScroll: !0 });
  });
  let u = /* @__PURE__ */ E(() => n().selectionRectMode === "nodes" ? (n().nodes, ao(n().nodeLookup, { filter: (h) => !!h.selected })) : null);
  function d(h) {
    Object.prototype.hasOwnProperty.call(Wo, h.key) && (h.preventDefault(), n().moveSelectedNodes(Wo[h.key], h.shiftKey ? 4 : 1));
  }
  var p = Ve(), f = se(p);
  {
    var g = (h) => {
      var y = I0();
      y.__contextmenu = [z0, n, a], y.__click = [A0, n, s], y.__keydown = function(...N) {
        (n().disableKeyboardA11y ? void 0 : d)?.apply(this, N);
      };
      let $;
      var w = I(y);
      Ys(w, { width: "100%", height: "100%", x: 0, y: 0 }), A(y), rt(y, (N, b) => _c?.(N, b), () => ({
        disabled: !1,
        store: n(),
        onDrag: (N, b, C, _) => {
          r()?.({ event: N, targetNode: null, nodes: _ });
        },
        onDragStart: (N, b, C, _) => {
          o()?.({ event: N, targetNode: null, nodes: _ });
        },
        onDragStop: (N, b, C, _) => {
          i()?.({ event: N, targetNode: null, nodes: _ });
        }
      })), Pt(y, (N) => K(l, N), () => c(l)), $e(
        (N) => {
          mt(y, 1, wn(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-16qgzgd"), ye(y, "role", n().disableKeyboardA11y ? void 0 : "button"), ye(y, "tabindex", n().disableKeyboardA11y ? void 0 : -1), $ = ut(y, "", $, N);
        },
        [
          () => ({
            width: Gt(c(u).width),
            height: Gt(c(u).height),
            transform: `translate(${c(u).x ?? ""}px, ${c(u).y ?? ""}px)`
          })
        ]
      ), H(h, y);
    };
    ae(f, (h) => {
      n().selectionRectMode === "nodes" && c(u) && sn(c(u).x) && sn(c(u).y) && h(g);
    });
  }
  return H(e, p), ue({
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
Hn(["contextmenu", "click", "keydown"]);
re(
  Lc,
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
    const l = Array.isArray(r) ? r : [r], u = [a.metaKey, a.altKey, a.shiftKey, a.ctrlKey].reduce(
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
          if (u !== 0) continue;
        } else if (f !== void 0 && f?.[0]?.length > 0) {
          const N = Array.isArray(f) ? f : [f];
          let b = !1;
          for (const C of N)
            if ((Array.isArray(C) ? C : [C]).reduce(
              (_, D) => _ | Z0(D),
              0
            ) === u) {
              b = !0;
              break;
            }
          if (!b) continue;
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
      const { enabled: l = !0, type: u = "keydown" } = a;
      n && (!l || o !== u) ? s?.() : !n && l && (s = qi(e, u, i)), n = l, o = u, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function ct() {
  const e = /* @__PURE__ */ E(At), t = (i) => {
    const s = Ja(i) ? i : c(e).nodeLookup.get(i.id), a = s.parentId ? pv(s.position, s.measured, s.parentId, c(e).nodeLookup, c(e).nodeOrigin) : s.position, l = {
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
        return a?.replace && Ja(u) ? u : { ...l, ...u };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    c(e).edges = et(() => c(e).edges).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a.replace && i0(u) ? u : { ...l, ...u };
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
    getNodes: (i) => i === void 0 ? c(e).nodes : ol(c(e).nodeLookup, i),
    getEdge: (i) => c(e).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? c(e).edges : ol(c(e).edgeLookup, i),
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
      const a = As(i, c(e).width, c(e).height, c(e).minZoom, c(e).maxZoom, s?.padding ?? 0.1);
      return await c(e).panZoom.setViewport(a, {
        duration: s?.duration,
        ease: s?.ease,
        interpolate: s?.interpolate
      }), Promise.resolve(!0);
    },
    getIntersectingNodes: (i, s = !0, a) => {
      const l = qa(i), u = l ? i : t(i);
      return u ? (a || c(e).nodes).filter((d) => {
        const p = c(e).nodeLookup.get(d.id);
        if (!p || !l && d.id === i.id)
          return !1;
        const f = yr(p), g = jr(f, u);
        return s && g > 0 || g >= f.width * f.height || g >= u.width * u.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const l = qa(i) ? i : t(i);
      if (!l)
        return !1;
      const u = jr(l, s);
      return a && u > 0 || u >= l.width * l.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: l } = await cv({
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
      const { x: s, y: a, zoom: l } = c(e).viewport, { x: u, y: d } = c(e).domNode.getBoundingClientRect(), p = jo(i, [s, a, l]);
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
    getNodesBounds: (i) => sv(i, {
      nodeLookup: c(e).nodeLookup,
      nodeOrigin: c(e).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(c(e).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
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
function Oc(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "selectionKey", 7, "Shift"), o = m(t, "multiSelectionKey", 23, () => or() ? "Meta" : "Control"), i = m(t, "deleteKey", 7, "Backspace"), s = m(t, "panActivationKey", 7, " "), a = m(t, "zoomActivationKey", 23, () => or() ? "Meta" : "Control"), { deleteElements: l } = ct();
  function u(y) {
    return y !== null && typeof y == "object";
  }
  function d(y) {
    return u(y) ? y.modifier || [] : [];
  }
  function p(y) {
    return y == null ? "" : u(y) ? y.key : y;
  }
  function f(y, $) {
    return (Array.isArray(y) ? y : [y]).map((w) => {
      const N = p(w);
      return {
        key: N,
        modifier: d(w),
        enabled: N !== null,
        callback: $
      };
    });
  }
  function g() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  async function h() {
    const y = n().nodes.filter((b) => b.selected), $ = n().edges.filter((b) => b.selected), { deletedNodes: w, deletedEdges: N } = await l({ nodes: y, edges: $ });
    (w.length > 0 || N.length > 0) && n().ondelete?.({ nodes: w, edges: N });
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
      !(y.originalEvent.ctrlKey || y.originalEvent.metaKey || y.originalEvent.shiftKey) && !Uu(y.originalEvent) && (n(n().deleteKeyPressed = !0, !0), h());
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
var B0 = /* @__PURE__ */ he('<path fill="none" class="svelte-flow__connection-path"></path>'), R0 = /* @__PURE__ */ he('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function Tc(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "type", 7), o = m(t, "containerStyle", 7), i = m(t, "style", 7), s = m(t, "LineComponent", 7), a = /* @__PURE__ */ E(() => {
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
  var l = Ve(), u = se(l);
  {
    var d = (p) => {
      var f = R0(), g = I(f), h = I(g);
      {
        var y = (w) => {
          var N = Ve(), b = se(N);
          Es(b, s, (C, _) => {
            _(C, {});
          }), H(w, N);
        }, $ = (w) => {
          var N = B0();
          $e(() => {
            ye(N, "d", c(a)), ut(N, i());
          }), H(w, N);
        };
        ae(h, (w) => {
          s() ? w(y) : w($, !1);
        });
      }
      A(g), A(f), $e(
        (w) => {
          ye(f, "width", n().width), ye(f, "height", n().height), ut(f, o()), mt(g, 0, w);
        },
        [
          () => wn([
            "svelte-flow__connection",
            ov(n().connection.isValid)
          ])
        ]
      ), H(p, f);
    };
    ae(u, (p) => {
      n().connection.inProgress && p(d);
    });
  }
  return H(e, l), ue({
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
  Tc,
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
var K0 = /* @__PURE__ */ U("<div><!></div>");
function co(e, t) {
  le(t, !0);
  let n = m(t, "position", 7, "top-right"), r = m(t, "style", 7), o = m(t, "class", 7), i = m(t, "children", 7), s = /* @__PURE__ */ ze(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "position",
    "style",
    "class",
    "children"
  ]), a = /* @__PURE__ */ E(() => `${n()}`.split("-"));
  var l = K0();
  Fe(l, (d) => ({ class: d, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...c(a)]
  ]);
  var u = I(l);
  return Be(u, () => i() ?? tt), A(l), H(e, l), ue({
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
var Y0 = /* @__PURE__ */ U('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function zc(e, t) {
  le(t, !0);
  let n = m(t, "proOptions", 7), r = m(t, "position", 7, "bottom-right");
  var o = Ve(), i = se(o);
  {
    var s = (a) => {
      co(a, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var d = Y0();
          H(l, d);
        },
        $$slots: { default: !0 }
      });
    };
    ae(i, (a) => {
      n()?.hideAttribution || a(s);
    });
  }
  return H(e, o), ue({
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
var j0 = /* @__PURE__ */ U("<div><!></div>");
const W0 = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function Ac(e, t) {
  le(t, !0), Te(e, W0);
  let n = m(t, "width", 7), r = m(t, "height", 7), o = m(t, "colorMode", 7), i = m(t, "domNode", 15), s = m(t, "clientWidth", 15), a = m(t, "clientHeight", 15), l = m(t, "children", 7), u = m(t, "rest", 7), d = /* @__PURE__ */ E(() => u().class), p = /* @__PURE__ */ E(() => Af(u(), [
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
  var g = j0();
  Fe(
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
      [Rt]: y
    }),
    [
      () => ({ width: Gt(n()), height: Gt(r()) })
    ],
    "svelte-12wlba6"
  );
  var h = I(g);
  return Be(h, () => l() ?? tt), A(g), Pt(g, (y) => i(y), () => i()), va(g, "clientHeight", a), va(g, "clientWidth", s), H(e, g), ue({
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
var X0 = /* @__PURE__ */ U('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), F0 = /* @__PURE__ */ U("<!> <!>", 1), U0 = /* @__PURE__ */ U("<!> <!> <!> <!> <!>", 1);
function Ic(e, t) {
  le(t, !0);
  let n = m(t, "width", 7), r = m(t, "height", 7), o = m(t, "proOptions", 7), i = m(t, "selectionKey", 7), s = m(t, "deleteKey", 7), a = m(t, "panActivationKey", 7), l = m(t, "multiSelectionKey", 7), u = m(t, "zoomActivationKey", 7), d = m(t, "paneClickDistance", 7, 1), p = m(t, "nodeClickDistance", 7, 1), f = m(t, "onmovestart", 7), g = m(t, "onmoveend", 7), h = m(t, "onmove", 7), y = m(t, "oninit", 7), $ = m(t, "onnodeclick", 7), w = m(t, "onnodecontextmenu", 7), N = m(t, "onnodedrag", 7), b = m(t, "onnodedragstart", 7), C = m(t, "onnodedragstop", 7), _ = m(t, "onnodepointerenter", 7), D = m(t, "onnodepointermove", 7), z = m(t, "onnodepointerleave", 7), Z = m(t, "onselectionclick", 7), j = m(t, "onselectioncontextmenu", 7), Y = m(t, "onselectionstart", 7), M = m(t, "onselectionend", 7), k = m(t, "onedgeclick", 7), L = m(t, "onedgecontextmenu", 7), x = m(t, "onedgepointerenter", 7), S = m(t, "onedgepointerleave", 7), P = m(t, "onpaneclick", 7), O = m(t, "onpanecontextmenu", 7), q = m(t, "panOnScrollMode", 23, () => Wt.Free), V = m(t, "preventScrolling", 7, !0), B = m(t, "zoomOnScroll", 7, !0), W = m(t, "zoomOnDoubleClick", 7, !0), G = m(t, "zoomOnPinch", 7, !0), Q = m(t, "panOnScroll", 7, !1), X = m(t, "panOnDrag", 7, !0), de = m(t, "selectionOnDrag", 7, !0), te = m(t, "connectionLineComponent", 7), pe = m(t, "connectionLineStyle", 7), F = m(t, "connectionLineContainerStyle", 7), Ce = m(t, "connectionLineType", 23, () => rn.Bezier), ge = m(t, "attributionPosition", 7), oe = m(t, "children", 7), ee = m(t, "nodes", 31, () => Mt([])), ce = m(t, "edges", 31, () => Mt([])), J = m(t, "viewport", 31, () => {
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
  ]), ne = bc({
    props: ve,
    width: n(),
    height: r(),
    get nodes() {
      return ee();
    },
    set nodes(R) {
      ee(R);
    },
    get edges() {
      return ce();
    },
    set edges(R) {
      ce(R);
    },
    get viewport() {
      return J();
    },
    set viewport(R) {
      J(R);
    }
  });
  const _e = pn(Xr);
  return _e && _e.setStore && _e.setStore(ne), dr(Xr, {
    provider: !1,
    getStore() {
      return ne;
    }
  }), je(() => {
    const R = { nodes: ne.selectedNodes, edges: ne.selectedEdges };
    et(() => t.onselectionchange)?.(R);
    for (const Je of ne.selectionChangeHandlers.values())
      Je(R);
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
      return ve;
    },
    get domNode() {
      return ne.domNode;
    },
    set domNode(R) {
      ne.domNode = R;
    },
    get clientWidth() {
      return ne.width;
    },
    set clientWidth(R) {
      ne.width = R;
    },
    get clientHeight() {
      return ne.height;
    },
    set clientHeight(R) {
      ne.height = R;
    },
    children: (R, Je) => {
      var ie = U0(), xe = se(ie);
      Oc(xe, {
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
          return ne;
        },
        set store(De) {
          ne = De;
        }
      });
      var ke = T(xe, 2);
      xc(ke, {
        get panOnScrollMode() {
          return q();
        },
        get preventScrolling() {
          return V();
        },
        get zoomOnScroll() {
          return B();
        },
        get zoomOnDoubleClick() {
          return W();
        },
        get zoomOnPinch() {
          return G();
        },
        get panOnScroll() {
          return Q();
        },
        get panOnDrag() {
          return X();
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
        set store(De) {
          ne = De;
        },
        children: (De, We) => {
          Cc(De, {
            get onpaneclick() {
              return P();
            },
            get onpanecontextmenu() {
              return O();
            },
            get onselectionstart() {
              return Y();
            },
            get onselectionend() {
              return M();
            },
            get panOnDrag() {
              return X();
            },
            get selectionOnDrag() {
              return de();
            },
            get store() {
              return ne;
            },
            set store(fe) {
              ne = fe;
            },
            children: (fe, Ze) => {
              var it = F0(), Re = se(it);
              $c(Re, {
                get store() {
                  return ne;
                },
                set store(wi) {
                  ne = wi;
                },
                children: (wi, jw) => {
                  var Gs = X0(), Js = T(se(Gs), 2);
                  Hc(Js, {
                    get onedgeclick() {
                      return k();
                    },
                    get onedgecontextmenu() {
                      return L();
                    },
                    get onedgepointerenter() {
                      return x();
                    },
                    get onedgepointerleave() {
                      return S();
                    },
                    get store() {
                      return ne;
                    },
                    set store(In) {
                      ne = In;
                    }
                  });
                  var Qs = T(Js, 4);
                  Tc(Qs, {
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
                      return pe();
                    },
                    get store() {
                      return ne;
                    },
                    set store(In) {
                      ne = In;
                    }
                  });
                  var ea = T(Qs, 2);
                  Mc(ea, {
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
                      return D();
                    },
                    get onnodepointerleave() {
                      return z();
                    },
                    get onnodedrag() {
                      return N();
                    },
                    get onnodedragstart() {
                      return b();
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
                  var Ld = T(ea, 2);
                  Lc(Ld, {
                    get onselectionclick() {
                      return Z();
                    },
                    get onselectioncontextmenu() {
                      return j();
                    },
                    get onnodedrag() {
                      return N();
                    },
                    get onnodedragstart() {
                      return b();
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
                  }), we(2), H(wi, Gs);
                },
                $$slots: { default: !0 }
              });
              var St = T(Re, 2);
              const Qe = /* @__PURE__ */ E(() => !!(ne.selectionRect && ne.selectionRectMode === "user")), qt = /* @__PURE__ */ E(() => ne.selectionRect?.width), yi = /* @__PURE__ */ E(() => ne.selectionRect?.height), zn = /* @__PURE__ */ E(() => ne.selectionRect?.x), An = /* @__PURE__ */ E(() => ne.selectionRect?.y);
              Ys(St, {
                get isVisible() {
                  return c(Qe);
                },
                get width() {
                  return c(qt);
                },
                get height() {
                  return c(yi);
                },
                get x() {
                  return c(zn);
                },
                get y() {
                  return c(An);
                }
              }), H(fe, it);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var He = T(ke, 2);
      zc(He, {
        get proOptions() {
          return o();
        },
        get position() {
          return ge();
        }
      });
      var dt = T(He, 2);
      kc(dt, {
        get store() {
          return ne;
        }
      });
      var kt = T(dt, 2);
      Be(kt, () => oe() ?? tt), H(R, ie);
    },
    $$slots: { default: !0 }
  }), ue({
    get width() {
      return n();
    },
    set width(R) {
      n(R), v();
    },
    get height() {
      return r();
    },
    set height(R) {
      r(R), v();
    },
    get proOptions() {
      return o();
    },
    set proOptions(R) {
      o(R), v();
    },
    get selectionKey() {
      return i();
    },
    set selectionKey(R) {
      i(R), v();
    },
    get deleteKey() {
      return s();
    },
    set deleteKey(R) {
      s(R), v();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(R) {
      a(R), v();
    },
    get multiSelectionKey() {
      return l();
    },
    set multiSelectionKey(R) {
      l(R), v();
    },
    get zoomActivationKey() {
      return u();
    },
    set zoomActivationKey(R) {
      u(R), v();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(R = 1) {
      d(R), v();
    },
    get nodeClickDistance() {
      return p();
    },
    set nodeClickDistance(R = 1) {
      p(R), v();
    },
    get onmovestart() {
      return f();
    },
    set onmovestart(R) {
      f(R), v();
    },
    get onmoveend() {
      return g();
    },
    set onmoveend(R) {
      g(R), v();
    },
    get onmove() {
      return h();
    },
    set onmove(R) {
      h(R), v();
    },
    get oninit() {
      return y();
    },
    set oninit(R) {
      y(R), v();
    },
    get onnodeclick() {
      return $();
    },
    set onnodeclick(R) {
      $(R), v();
    },
    get onnodecontextmenu() {
      return w();
    },
    set onnodecontextmenu(R) {
      w(R), v();
    },
    get onnodedrag() {
      return N();
    },
    set onnodedrag(R) {
      N(R), v();
    },
    get onnodedragstart() {
      return b();
    },
    set onnodedragstart(R) {
      b(R), v();
    },
    get onnodedragstop() {
      return C();
    },
    set onnodedragstop(R) {
      C(R), v();
    },
    get onnodepointerenter() {
      return _();
    },
    set onnodepointerenter(R) {
      _(R), v();
    },
    get onnodepointermove() {
      return D();
    },
    set onnodepointermove(R) {
      D(R), v();
    },
    get onnodepointerleave() {
      return z();
    },
    set onnodepointerleave(R) {
      z(R), v();
    },
    get onselectionclick() {
      return Z();
    },
    set onselectionclick(R) {
      Z(R), v();
    },
    get onselectioncontextmenu() {
      return j();
    },
    set onselectioncontextmenu(R) {
      j(R), v();
    },
    get onselectionstart() {
      return Y();
    },
    set onselectionstart(R) {
      Y(R), v();
    },
    get onselectionend() {
      return M();
    },
    set onselectionend(R) {
      M(R), v();
    },
    get onedgeclick() {
      return k();
    },
    set onedgeclick(R) {
      k(R), v();
    },
    get onedgecontextmenu() {
      return L();
    },
    set onedgecontextmenu(R) {
      L(R), v();
    },
    get onedgepointerenter() {
      return x();
    },
    set onedgepointerenter(R) {
      x(R), v();
    },
    get onedgepointerleave() {
      return S();
    },
    set onedgepointerleave(R) {
      S(R), v();
    },
    get onpaneclick() {
      return P();
    },
    set onpaneclick(R) {
      P(R), v();
    },
    get onpanecontextmenu() {
      return O();
    },
    set onpanecontextmenu(R) {
      O(R), v();
    },
    get panOnScrollMode() {
      return q();
    },
    set panOnScrollMode(R = Wt.Free) {
      q(R), v();
    },
    get preventScrolling() {
      return V();
    },
    set preventScrolling(R = !0) {
      V(R), v();
    },
    get zoomOnScroll() {
      return B();
    },
    set zoomOnScroll(R = !0) {
      B(R), v();
    },
    get zoomOnDoubleClick() {
      return W();
    },
    set zoomOnDoubleClick(R = !0) {
      W(R), v();
    },
    get zoomOnPinch() {
      return G();
    },
    set zoomOnPinch(R = !0) {
      G(R), v();
    },
    get panOnScroll() {
      return Q();
    },
    set panOnScroll(R = !1) {
      Q(R), v();
    },
    get panOnDrag() {
      return X();
    },
    set panOnDrag(R = !0) {
      X(R), v();
    },
    get selectionOnDrag() {
      return de();
    },
    set selectionOnDrag(R = !0) {
      de(R), v();
    },
    get connectionLineComponent() {
      return te();
    },
    set connectionLineComponent(R) {
      te(R), v();
    },
    get connectionLineStyle() {
      return pe();
    },
    set connectionLineStyle(R) {
      pe(R), v();
    },
    get connectionLineContainerStyle() {
      return F();
    },
    set connectionLineContainerStyle(R) {
      F(R), v();
    },
    get connectionLineType() {
      return Ce();
    },
    set connectionLineType(R = rn.Bezier) {
      Ce(R), v();
    },
    get attributionPosition() {
      return ge();
    },
    set attributionPosition(R) {
      ge(R), v();
    },
    get children() {
      return oe();
    },
    set children(R) {
      oe(R), v();
    },
    get nodes() {
      return ee();
    },
    set nodes(R = []) {
      ee(R), v();
    },
    get edges() {
      return ce();
    },
    set edges(R = []) {
      ce(R), v();
    },
    get viewport() {
      return J();
    },
    set viewport(R = void 0) {
      J(R), v();
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
      return c(r);
    },
    setStore: (s) => {
      K(r, s);
    }
  }), ri(() => {
    c(r).reset();
  });
  var o = Ve(), i = se(o);
  return Be(i, () => n() ?? tt), H(e, o), ue({
    get children() {
      return n();
    },
    set children(s) {
      n(s), v();
    }
  });
}
re(qc, { children: {} }, [], [], !0);
var G0 = /* @__PURE__ */ U("<button><!></button>");
function Vr(e, t) {
  le(t, !0);
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
  var p = G0();
  Fe(
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
  return Be(f, () => u() ?? tt), A(p), H(e, p), ue({
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
var J0 = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function Zc(e) {
  var t = J0();
  H(e, t);
}
re(Zc, {}, [], [], !0);
var Q0 = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Bc(e) {
  var t = Q0();
  H(e, t);
}
re(Bc, {}, [], [], !0);
var em = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Rc(e) {
  var t = em();
  H(e, t);
}
re(Rc, {}, [], [], !0);
var tm = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Kc(e) {
  var t = tm();
  H(e, t);
}
re(Kc, {}, [], [], !0);
var nm = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function Yc(e) {
  var t = nm();
  H(e, t);
}
re(Yc, {}, [], [], !0);
var rm = /* @__PURE__ */ U("<!> <!>", 1), om = /* @__PURE__ */ U("<!> <!> <!> <!> <!> <!>", 1);
function jc(e, t) {
  le(t, !0);
  let n = m(t, "position", 7, "bottom-left"), r = m(t, "orientation", 7, "vertical"), o = m(t, "showZoom", 7, !0), i = m(t, "showFitView", 7, !0), s = m(t, "showLock", 7, !0), a = m(t, "style", 7), l = m(t, "class", 7), u = m(t, "buttonBgColor", 7), d = m(t, "buttonBgColorHover", 7), p = m(t, "buttonColor", 7), f = m(t, "buttonColorHover", 7), g = m(t, "buttonBorderColor", 7), h = m(t, "fitViewOptions", 7), y = m(t, "children", 7), $ = m(t, "before", 7), w = m(t, "after", 7), N = /* @__PURE__ */ ze(t, [
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
  ]), b = /* @__PURE__ */ E(At);
  const C = {
    bgColor: u(),
    bgColorHover: d(),
    color: p(),
    colorHover: f(),
    borderColor: g()
  };
  let _ = /* @__PURE__ */ E(() => c(b).nodesDraggable || c(b).nodesConnectable || c(b).elementsSelectable), D = /* @__PURE__ */ E(() => c(b).viewport.zoom <= c(b).minZoom), z = /* @__PURE__ */ E(() => c(b).viewport.zoom >= c(b).maxZoom), Z = /* @__PURE__ */ E(() => c(b).ariaLabelConfig), j = /* @__PURE__ */ E(() => r() === "horizontal" ? "horizontal" : "vertical");
  const Y = () => {
    c(b).zoomIn();
  }, M = () => {
    c(b).zoomOut();
  }, k = () => {
    c(b).fitView(h());
  }, L = () => {
    let S = !c(_);
    c(b).nodesDraggable = S, c(b).nodesConnectable = S, c(b).elementsSelectable = S;
  }, x = /* @__PURE__ */ E(() => [
    "svelte-flow__controls",
    c(j),
    l()
  ]);
  return co(e, Ie(
    {
      get class() {
        return c(x);
      },
      get position() {
        return n();
      },
      "data-testid": "svelte-flow__controls",
      get "aria-label"() {
        return c(Z)["controls.ariaLabel"];
      },
      get style() {
        return a();
      }
    },
    () => N,
    {
      children: (S, P) => {
        var O = om(), q = se(O);
        {
          var V = (ge) => {
            var oe = Ve(), ee = se(oe);
            Be(ee, $), H(ge, oe);
          };
          ae(q, (ge) => {
            $() && ge(V);
          });
        }
        var B = T(q, 2);
        {
          var W = (ge) => {
            var oe = rm(), ee = se(oe);
            Vr(ee, Ie(
              {
                onclick: Y,
                class: "svelte-flow__controls-zoomin",
                get title() {
                  return c(Z)["controls.zoomIn.ariaLabel"];
                },
                get "aria-label"() {
                  return c(Z)["controls.zoomIn.ariaLabel"];
                },
                get disabled() {
                  return c(z);
                }
              },
              () => C,
              {
                children: (J, ve) => {
                  Zc(J);
                },
                $$slots: { default: !0 }
              }
            ));
            var ce = T(ee, 2);
            Vr(ce, Ie(
              {
                onclick: M,
                class: "svelte-flow__controls-zoomout",
                get title() {
                  return c(Z)["controls.zoomOut.ariaLabel"];
                },
                get "aria-label"() {
                  return c(Z)["controls.zoomOut.ariaLabel"];
                },
                get disabled() {
                  return c(D);
                }
              },
              () => C,
              {
                children: (J, ve) => {
                  Bc(J);
                },
                $$slots: { default: !0 }
              }
            )), H(ge, oe);
          };
          ae(B, (ge) => {
            o() && ge(W);
          });
        }
        var G = T(B, 2);
        {
          var Q = (ge) => {
            Vr(ge, Ie(
              {
                class: "svelte-flow__controls-fitview",
                onclick: k,
                get title() {
                  return c(Z)["controls.fitView.ariaLabel"];
                },
                get "aria-label"() {
                  return c(Z)["controls.fitView.ariaLabel"];
                }
              },
              () => C,
              {
                children: (oe, ee) => {
                  Rc(oe);
                },
                $$slots: { default: !0 }
              }
            ));
          };
          ae(G, (ge) => {
            i() && ge(Q);
          });
        }
        var X = T(G, 2);
        {
          var de = (ge) => {
            Vr(ge, Ie(
              {
                class: "svelte-flow__controls-interactive",
                onclick: L,
                get title() {
                  return c(Z)["controls.interactive.ariaLabel"];
                },
                get "aria-label"() {
                  return c(Z)["controls.interactive.ariaLabel"];
                }
              },
              () => C,
              {
                children: (oe, ee) => {
                  var ce = Ve(), J = se(ce);
                  {
                    var ve = (_e) => {
                      Yc(_e);
                    }, ne = (_e) => {
                      Kc(_e);
                    };
                    ae(J, (_e) => {
                      c(_) ? _e(ve) : _e(ne, !1);
                    });
                  }
                  H(oe, ce);
                },
                $$slots: { default: !0 }
              }
            ));
          };
          ae(X, (ge) => {
            s() && ge(de);
          });
        }
        var te = T(X, 2);
        {
          var pe = (ge) => {
            var oe = Ve(), ee = se(oe);
            Be(ee, y), H(ge, oe);
          };
          ae(te, (ge) => {
            y() && ge(pe);
          });
        }
        var F = T(te, 2);
        {
          var Ce = (ge) => {
            var oe = Ve(), ee = se(oe);
            Be(ee, w), H(ge, oe);
          };
          ae(F, (ge) => {
            w() && ge(Ce);
          });
        }
        H(S, O);
      },
      $$slots: { default: !0 }
    }
  )), ue({
    get position() {
      return n();
    },
    set position(S = "bottom-left") {
      n(S), v();
    },
    get orientation() {
      return r();
    },
    set orientation(S = "vertical") {
      r(S), v();
    },
    get showZoom() {
      return o();
    },
    set showZoom(S = !0) {
      o(S), v();
    },
    get showFitView() {
      return i();
    },
    set showFitView(S = !0) {
      i(S), v();
    },
    get showLock() {
      return s();
    },
    set showLock(S = !0) {
      s(S), v();
    },
    get style() {
      return a();
    },
    set style(S) {
      a(S), v();
    },
    get class() {
      return l();
    },
    set class(S) {
      l(S), v();
    },
    get buttonBgColor() {
      return u();
    },
    set buttonBgColor(S) {
      u(S), v();
    },
    get buttonBgColorHover() {
      return d();
    },
    set buttonBgColorHover(S) {
      d(S), v();
    },
    get buttonColor() {
      return p();
    },
    set buttonColor(S) {
      p(S), v();
    },
    get buttonColorHover() {
      return f();
    },
    set buttonColorHover(S) {
      f(S), v();
    },
    get buttonBorderColor() {
      return g();
    },
    set buttonBorderColor(S) {
      g(S), v();
    },
    get fitViewOptions() {
      return h();
    },
    set fitViewOptions(S) {
      h(S), v();
    },
    get children() {
      return y();
    },
    set children(S) {
      y(S), v();
    },
    get before() {
      return $();
    },
    set before(S) {
      $(S), v();
    },
    get after() {
      return w();
    },
    set after(S) {
      w(S), v();
    }
  });
}
re(
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
    ye(o, "cx", n()), ye(o, "cy", n()), ye(o, "r", n()), mt(o, 0, wn(["svelte-flow__background-pattern", "dots", r()]));
  }), H(e, o), ue({
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
    ye(s, "stroke-width", n()), ye(s, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), mt(s, 0, wn(["svelte-flow__background-pattern", o(), i()]));
  }), H(e, s), ue({
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
  let n = m(t, "id", 7), r = m(t, "variant", 23, () => an.Dots), o = m(t, "gap", 7, 20), i = m(t, "size", 7), s = m(t, "lineWidth", 7, 1), a = m(t, "bgColor", 7), l = m(t, "patternColor", 7), u = m(t, "patternClass", 7), d = m(t, "class", 7), p = /* @__PURE__ */ E(At), f = /* @__PURE__ */ E(() => r() === an.Dots), g = /* @__PURE__ */ E(() => r() === an.Cross), h = /* @__PURE__ */ E(() => Array.isArray(o()) ? o() : [o(), o()]), y = /* @__PURE__ */ E(() => `background-pattern-${c(p).flowId}-${n() ?? ""}`), $ = /* @__PURE__ */ E(() => [
    c(h)[0] * c(p).viewport.zoom || 1,
    c(h)[1] * c(p).viewport.zoom || 1
  ]), w = /* @__PURE__ */ E(() => (i() ?? am[r()]) * c(p).viewport.zoom), N = /* @__PURE__ */ E(() => c(g) ? [c(w), c(w)] : c($)), b = /* @__PURE__ */ E(() => c(f) ? [c(w) / 2, c(w) / 2] : [
    c(N)[0] / 2,
    c(N)[1] / 2
  ]);
  var C = lm();
  let _;
  var D = I(C), z = I(D);
  {
    var Z = (M) => {
      const k = /* @__PURE__ */ E(() => c(w) / 2);
      Wc(M, {
        get radius() {
          return c(k);
        },
        get class() {
          return u();
        }
      });
    }, j = (M) => {
      Xc(M, {
        get dimensions() {
          return c(N);
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
    ae(z, (M) => {
      c(f) ? M(Z) : M(j, !1);
    });
  }
  A(D);
  var Y = T(D);
  return A(C), $e(
    (M) => {
      mt(C, 0, wn([
        "svelte-flow__background",
        "svelte-flow__container",
        d()
      ])), _ = ut(C, "", _, M), ye(D, "id", c(y)), ye(D, "x", c(p).viewport.x % c($)[0]), ye(D, "y", c(p).viewport.y % c($)[1]), ye(D, "width", c($)[0]), ye(D, "height", c($)[1]), ye(D, "patternTransform", `translate(-${c(b)[0]},-${c(b)[1]})`), ye(Y, "fill", `url(#${c(y)})`);
    },
    [
      () => ({
        "--xy-background-color-props": a(),
        "--xy-background-pattern-color-props": l()
      })
    ]
  ), H(e, C), ue({
    get id() {
      return n();
    },
    set id(M) {
      n(M), v();
    },
    get variant() {
      return r();
    },
    set variant(M = an.Dots) {
      r(M), v();
    },
    get gap() {
      return o();
    },
    set gap(M = 20) {
      o(M), v();
    },
    get size() {
      return i();
    },
    set size(M) {
      i(M), v();
    },
    get lineWidth() {
      return s();
    },
    set lineWidth(M = 1) {
      s(M), v();
    },
    get bgColor() {
      return a();
    },
    set bgColor(M) {
      a(M), v();
    },
    get patternColor() {
      return l();
    },
    set patternColor(M) {
      l(M), v();
    },
    get patternClass() {
      return u();
    },
    set patternClass(M) {
      u(M), v();
    },
    get class() {
      return d();
    },
    set class(M) {
      d(M), v();
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
function Uc(e, t) {
  le(t, !0);
  let n = m(t, "x", 7), r = m(t, "y", 7), o = m(t, "width", 7), i = m(t, "height", 7), s = m(t, "borderRadius", 7, 5), a = m(t, "color", 7), l = m(t, "shapeRendering", 7), u = m(t, "strokeColor", 7), d = m(t, "strokeWidth", 7, 2), p = m(t, "selected", 7), f = m(t, "class", 7);
  var g = um();
  let h, y;
  return $e(
    ($, w) => {
      h = mt(g, 0, wn(["svelte-flow__minimap-node", f()]), null, h, $), ye(g, "x", n()), ye(g, "y", r()), ye(g, "rx", s()), ye(g, "ry", s()), ye(g, "width", o()), ye(g, "height", i()), ye(g, "shape-rendering", l()), y = ut(g, "", y, w);
    },
    [
      () => ({ selected: p() }),
      () => ({
        fill: a(),
        stroke: u(),
        "stroke-width": d()
      })
    ]
  ), H(e, g), ue({
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
      return u();
    },
    set strokeColor($) {
      u($), v();
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
  Uc,
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
  const n = Yv({
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
const Di = (e) => e instanceof Function ? e : () => e;
var dm = /* @__PURE__ */ he("<title> </title>"), fm = /* @__PURE__ */ he('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), pm = /* @__PURE__ */ U('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function Gc(e, t) {
  le(t, !0);
  let n = m(t, "position", 7, "bottom-right"), r = m(t, "ariaLabel", 7), o = m(t, "nodeStrokeColor", 7, "transparent"), i = m(t, "nodeColor", 7), s = m(t, "nodeClass", 7, ""), a = m(t, "nodeBorderRadius", 7, 5), l = m(t, "nodeStrokeWidth", 7, 2), u = m(t, "bgColor", 7), d = m(t, "maskColor", 7), p = m(t, "maskStrokeColor", 7), f = m(t, "maskStrokeWidth", 7), g = m(t, "width", 7, 200), h = m(t, "height", 7, 150), y = m(t, "pannable", 7, !0), $ = m(t, "zoomable", 7, !0), w = m(t, "inversePan", 7), N = m(t, "zoomStep", 7), b = m(t, "class", 7), C = /* @__PURE__ */ ze(t, [
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
  ]), _ = /* @__PURE__ */ E(At), D = /* @__PURE__ */ E(() => c(_).ariaLabelConfig);
  const z = i() === void 0 ? void 0 : Di(i()), Z = Di(o()), j = Di(s()), Y = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let M = /* @__PURE__ */ E(() => `svelte-flow__minimap-desc-${c(_).flowId}`), k = /* @__PURE__ */ E(() => ({
    x: -c(_).viewport.x / c(_).viewport.zoom,
    y: -c(_).viewport.y / c(_).viewport.zoom,
    width: c(_).width / c(_).viewport.zoom,
    height: c(_).height / c(_).viewport.zoom
  })), L = /* @__PURE__ */ E(() => c(_).nodeLookup.size > 0 ? Yu(ao(c(_).nodeLookup, { filter: (F) => !F.hidden }), c(k)) : c(k)), x = /* @__PURE__ */ E(() => c(L).width / g()), S = /* @__PURE__ */ E(() => c(L).height / h()), P = /* @__PURE__ */ E(() => Math.max(c(x), c(S))), O = /* @__PURE__ */ E(() => c(P) * g()), q = /* @__PURE__ */ E(() => c(P) * h()), V = /* @__PURE__ */ E(() => 5 * c(P)), B = /* @__PURE__ */ E(() => c(L).x - (c(O) - c(L).width) / 2 - c(V)), W = /* @__PURE__ */ E(() => c(L).y - (c(q) - c(L).height) / 2 - c(V)), G = /* @__PURE__ */ E(() => c(O) + c(V) * 2), Q = /* @__PURE__ */ E(() => c(q) + c(V) * 2);
  const X = () => c(P);
  var de = pm(), te = se(de);
  const pe = /* @__PURE__ */ E(() => ["svelte-flow__minimap", b()]);
  return np(te, () => ({ "--xy-minimap-background-color-props": u() })), co(te.lastChild, Ie(
    {
      get position() {
        return n();
      },
      get class() {
        return c(pe);
      },
      "data-testid": "svelte-flow__minimap"
    },
    () => C,
    {
      children: (F, Ce) => {
        var ge = Ve(), oe = se(ge);
        {
          var ee = (ce) => {
            var J = fm();
            let ve;
            var ne = I(J);
            {
              var _e = (ie) => {
                var xe = dm(), ke = I(xe, !0);
                A(xe), $e(() => {
                  ye(xe, "id", c(M)), Ae(ke, r() ?? c(D)["minimap.ariaLabel"]);
                }), H(ie, xe);
              };
              ae(ne, (ie) => {
                (r() ?? c(D)["minimap.ariaLabel"]) && ie(_e);
              });
            }
            var R = T(ne);
            lt(R, 17, () => c(_).nodes, (ie) => ie.id, (ie, xe) => {
              var ke = Ve();
              const He = /* @__PURE__ */ E(() => c(_).nodeLookup.get(c(xe).id));
              var dt = se(ke);
              {
                var kt = (De) => {
                  const We = /* @__PURE__ */ E(() => On(c(He))), fe = /* @__PURE__ */ E(() => z?.(c(He))), Ze = /* @__PURE__ */ E(() => Z(c(He))), it = /* @__PURE__ */ E(() => j(c(He)));
                  Uc(De, Ie(
                    {
                      get x() {
                        return c(He).internals.positionAbsolute.x;
                      },
                      get y() {
                        return c(He).internals.positionAbsolute.y;
                      }
                    },
                    () => c(We),
                    {
                      get selected() {
                        return c(He).selected;
                      },
                      get color() {
                        return c(fe);
                      },
                      get borderRadius() {
                        return a();
                      },
                      get strokeColor() {
                        return c(Ze);
                      },
                      get strokeWidth() {
                        return l();
                      },
                      get shapeRendering() {
                        return Y;
                      },
                      get class() {
                        return c(it);
                      }
                    }
                  ));
                };
                ae(dt, (De) => {
                  c(He) && Wu(c(He)) && De(kt);
                });
              }
              H(ie, ke);
            });
            var Je = T(R);
            A(J), rt(J, (ie, xe) => cm?.(ie, xe), () => ({
              store: c(_),
              panZoom: c(_).panZoom,
              getViewScale: X,
              translateExtent: c(_).translateExtent,
              width: c(_).width,
              height: c(_).height,
              inversePan: w(),
              zoomStep: N(),
              pannable: y(),
              zoomable: $()
            })), $e(
              (ie) => {
                ye(J, "width", g()), ye(J, "height", h()), ye(J, "viewBox", `${c(B) ?? ""} ${c(W) ?? ""} ${c(G) ?? ""} ${c(Q) ?? ""}`), ye(J, "aria-labelledby", c(M)), ve = ut(J, "", ve, ie), ye(Je, "d", `M${c(B) - c(V)},${c(W) - c(V)}h${c(G) + c(V) * 2}v${c(Q) + c(V) * 2}h${-c(G) - c(V) * 2}z
      M${c(k).x ?? ""},${c(k).y ?? ""}h${c(k).width ?? ""}v${c(k).height ?? ""}h${-c(k).width}z`);
              },
              [
                () => ({
                  "--xy-minimap-mask-background-color-props": d(),
                  "--xy-minimap-mask-stroke-color-props": p(),
                  "--xy-minimap-mask-stroke-width-props": f() ? f() * c(P) : void 0
                })
              ]
            ), H(ce, J);
          };
          ae(oe, (ce) => {
            c(_).panZoom && ce(ee);
          });
        }
        H(F, ge);
      },
      $$slots: { default: !0 }
    }
  )), A(te), H(e, de), ue({
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
      return u();
    },
    set bgColor(F) {
      u(F), v();
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
      return N();
    },
    set zoomStep(F) {
      N(F), v();
    },
    get class() {
      return b();
    },
    set class(F) {
      b(F), v();
    }
  });
}
re(
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
var gm = /* @__PURE__ */ U("<div><!></div>");
function Jc(e, t) {
  le(t, !0);
  let n = m(t, "nodeId", 7), r = m(t, "position", 23, () => me.Top), o = m(t, "align", 7, "center"), i = m(t, "offset", 7, 10), s = m(t, "isVisible", 7), a = m(t, "children", 7), l = /* @__PURE__ */ ze(t, [
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
  const u = At(), { getNodesBounds: d } = ct(), p = pn("svelteflow__node_id");
  let f = /* @__PURE__ */ E(() => (u.nodes, (Array.isArray(n()) ? n() : [n() ?? p]).reduce(
    (C, _) => {
      const D = u.nodeLookup.get(_);
      return D && C.push(D), C;
    },
    []
  ))), g = /* @__PURE__ */ E(() => {
    const C = d(c(f));
    return C ? Ev(C, u.viewport, r(), i(), o()) : "";
  }), h = /* @__PURE__ */ E(() => c(f).length === 0 ? 1 : Math.max(...c(f).map((C) => (C.internals.z || 5) + 1))), y = /* @__PURE__ */ E(() => u.nodes.filter((C) => C.selected).length), $ = /* @__PURE__ */ E(() => typeof s() == "boolean" ? s() : c(f).length === 1 && c(f)[0].selected && c(y) === 1);
  var w = Ve(), N = se(w);
  {
    var b = (C) => {
      var _ = gm();
      Fe(
        _,
        (z, Z) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": z,
          ...l,
          [Rt]: Z
        }),
        [
          () => c(f).reduce((z, Z) => `${z}${Z.id} `, "").trim(),
          () => ({
            display: pc().value ? "none" : void 0,
            position: "absolute",
            transform: c(g),
            "z-index": c(h)
          })
        ]
      );
      var D = I(_);
      Be(D, () => a() ?? tt), A(_), rt(_, (z, Z) => fc?.(z, Z), () => "root"), H(C, _);
    };
    ae(N, (C) => {
      u.domNode && c($) && c(f) && C(b);
    });
  }
  return H(e, w), ue({
    get nodeId() {
      return n();
    },
    set nodeId(C) {
      n(C), v();
    },
    get position() {
      return r();
    },
    set position(C = me.Top) {
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
  const t = /* @__PURE__ */ E(At), n = /* @__PURE__ */ E(() => c(t).nodes), r = /* @__PURE__ */ E(() => c(t).nodeLookup);
  let o = [], i = !0;
  const s = /* @__PURE__ */ E(() => {
    c(n);
    const a = [], l = Array.isArray(e), u = l ? e : [e];
    for (const d of u) {
      const p = c(r).get(d)?.internals.userNode;
      p && a.push({ id: p.id, type: p.type, data: p.data });
    }
    return (!zv(a, o) || i) && (o = a, i = !1), l ? o : o[0] ?? null;
  });
  return {
    get current() {
      return c(s);
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
    getNodes: () => c(e),
    setNodes: (r) => {
      K(e, r);
    },
    getEdges: () => c(t),
    setEdges: (r) => {
      K(t, r);
    },
    getViewport: () => c(n),
    setViewport: (r) => {
      K(n, r);
    },
    getNode: (r) => c(e).find((o) => o.id === r),
    addNode: (r) => {
      K(e, [...c(e), r]);
    },
    removeNode: (r) => {
      K(e, c(e).filter((o) => o.id !== r));
    },
    updateNode: (r, o) => {
      K(e, c(e).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateNodes: (r) => {
      K(e, r(c(e)));
    },
    updateNodeData: (r, o) => {
      K(e, c(e).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    },
    selectNodeOnly: (r) => {
      K(e, c(e).map((o) => o.id === r ? { ...o, selected: !0 } : { ...o, selected: !1 }));
    },
    getEdge: (r) => c(t).find((o) => o.id === r),
    addEdge: (r) => {
      K(t, [...c(t), r]);
    },
    removeEdge: (r) => {
      K(t, c(t).filter((o) => o.id !== r));
    },
    updateEdge: (r, o) => {
      K(t, c(t).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateEdges: (r) => {
      K(t, r(c(t)));
    },
    updateEdgeData: (r, o) => {
      K(t, c(t).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    }
  };
}, Ke = vm();
var mm = /* @__PURE__ */ U("<button><!></button>");
function Me(e, t) {
  le(t, !0);
  const n = m(t, "children", 7), r = m(t, "primary", 7), o = /* @__PURE__ */ ze(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children",
    "primary"
  ]);
  var i = mm();
  Fe(i, () => ({
    type: "button",
    ...o,
    class: `tf-btn ${r() ? "tf-btn-primary" : ""} nopan nodrag ${t.class ?? ""}`
  }));
  var s = I(i);
  return Be(s, () => n() ?? tt), A(i), H(e, i), ue({
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
re(Me, { children: {}, primary: {} }, [], [], !0);
var ym = /* @__PURE__ */ U("<input/>");
function Qc(e, t) {
  le(t, !0);
  const n = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = ym();
  dn(r), Fe(r, () => ({
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), H(e, r), ue();
}
re(Qc, {}, [], [], !0);
var wm = /* @__PURE__ */ U('<div><input type="hidden"/> <!> <!></div>');
const bm = {
  hash: "svelte-1swt2gg",
  code: ".tf-chosen.svelte-1swt2gg {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function ed(e, t) {
  le(t, !0), Te(e, bm);
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
  var l = wm();
  Fe(
    l,
    () => ({
      ...a,
      class: `tf-chosen nopan nodrag ${t.class ?? ""}`
    }),
    void 0,
    "svelte-1swt2gg"
  );
  var u = I(l);
  dn(u);
  var d = T(u, 2);
  Ue(d, {
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
  return Me(p, {
    onclick: (f) => {
      s()?.(o(), r(), f);
    },
    style: "padding: 3px",
    children: (f, g) => {
      we();
      var h = Se();
      $e(() => Ae(h, i())), H(f, h);
    },
    $$slots: { default: !0 }
  }), A(l), $e(() => _o(u, o())), H(e, l), ue({
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
var xm = /* @__PURE__ */ U("<input/>");
function Ue(e, t) {
  le(t, !0);
  const n = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = xm();
  dn(r), Fe(r, () => ({
    type: "text",
    spellcheck: "false",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), H(e, r), ue();
}
re(Ue, {}, [], [], !0);
var Cm = /* @__PURE__ */ U("<textarea></textarea>");
function Ye(e, t) {
  le(t, !0);
  const n = m(t, "value", 7), r = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "value"]);
  var o = Cm();
  return qf(o), Fe(o, () => ({
    spellcheck: "false",
    ...r,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), H(e, o), ue({
    get value() {
      return n();
    },
    set value(i) {
      n(i), v();
    }
  });
}
re(Ye, { value: {} }, [], [], !0);
var $m = /* @__PURE__ */ U('<div role="button"><!></div>'), _m = /* @__PURE__ */ U("<div></div>");
function td(e, t) {
  const n = wa(t, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = wa(n, ["items", "onChange", "activeIndex"]);
  le(t, !1);
  let o = m(t, "items", 28, () => []), i = m(t, "onChange", 12, () => {
  }), s = m(t, "activeIndex", 12, 0);
  function a(u, d) {
    s(d), i()?.(u, d);
  }
  lu();
  var l = _m();
  return Fe(l, () => ({
    ...r,
    class: `tf-tabs ${$s(r), et(() => r.class) ?? ""}`
  })), lt(l, 5, o, pr, (u, d, p) => {
    var f = $m();
    ye(f, "tabindex", p), f.__click = () => a(c(d), p), f.__keydown = ($) => {
      ($.key === "Enter" || $.key === " ") && ($.preventDefault(), a(c(d), p));
    };
    var g = I(f);
    {
      var h = ($) => {
        var w = Se();
        $e(() => Ae(w, (c(d), et(() => c(d).label)))), H($, w);
      }, y = ($) => {
        var w = Ve(), N = se(w);
        Be(N, () => (c(d), et(() => c(d).label) ?? tt)), H($, w);
      };
      ae(g, ($) => {
        c(d), et(() => typeof c(d).label == "string") ? $(h) : $(y, !1);
      });
    }
    A(f), $e(() => mt(f, 1, `tf-tabs-item ${p === s() ? "active" : ""}`)), H(u, f);
  }), A(l), H(e, l), ue({
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
Hn(["click", "keydown"]);
re(td, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var km = (e, t, n) => t(c(n)), Sm = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(c(n)));
}, Em = /* @__PURE__ */ U('<span class="tf-collapse-item-title-icon"><!></span>'), Nm = /* @__PURE__ */ U('<div class="tf-collapse-item-description"><!></div>'), Mm = /* @__PURE__ */ U('<div class="tf-collapse-item-content"><!></div>'), Pm = /* @__PURE__ */ U('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), Dm = /* @__PURE__ */ U("<div></div>");
const Vm = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function nd(e, t) {
  le(t, !0), Te(e, Vm);
  let n = m(t, "items", 7), r = m(t, "onChange", 7), o = m(t, "activeKeys", 31, () => Mt([]));
  function i(a) {
    o().includes(a.key) ? o(o().filter((l) => l !== a.key)) : (o().push(a.key), o(o())), r()?.(a, o());
  }
  var s = Dm();
  return lt(s, 21, n, pr, (a, l, u) => {
    var d = Pm(), p = I(d);
    ye(p, "tabindex", u), p.__click = [km, i, l], p.__keydown = [Sm, i, l];
    var f = I(p);
    {
      var g = (C) => {
        var _ = Em(), D = I(_);
        _n(D, {
          get target() {
            return c(l).icon;
          }
        }), A(_), H(C, _);
      };
      ae(f, (C) => {
        c(l).icon && C(g);
      });
    }
    var h = T(f, 2);
    _n(h, {
      get target() {
        return c(l).title;
      }
    });
    var y = T(h, 2);
    A(p);
    var $ = T(p, 2);
    {
      var w = (C) => {
        var _ = Nm(), D = I(_);
        _n(D, {
          get target() {
            return c(l).description;
          }
        }), A(_), H(C, _);
      };
      ae($, (C) => {
        c(l).description && C(w);
      });
    }
    var N = T($, 2);
    {
      var b = (C) => {
        var _ = Mm(), D = I(_);
        _n(D, {
          get target() {
            return c(l).content;
          }
        }), A(_), H(C, _);
      };
      ae(N, (C) => {
        o().includes(c(l).key) && C(b);
      });
    }
    A(d), $e((C) => mt(y, 1, `tf-collapse-item-title-arrow ${C ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(c(l).key) ? "rotate-90" : ""
    ]), H(a, d);
  }), A(s), $e(() => {
    ut(s, t.style), mt(s, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), H(e, s), ue({
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
Hn(["click", "keydown"]);
re(nd, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function _n(e, t) {
  le(t, !0);
  let n = m(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = Ve(), o = se(r);
  {
    var i = (a) => {
      var l = Ve(), u = se(l);
      Be(u, () => n() ?? tt), H(a, l);
    }, s = (a) => {
      var l = Ve(), u = se(l);
      Ss(u, n), H(a, l);
    };
    ae(o, (a) => {
      typeof n() == "function" ? a(i) : a(s, !1);
    });
  }
  return H(e, r), ue({
    get target() {
      return n();
    },
    set target(a) {
      n(a), v();
    }
  });
}
re(_n, { target: {} }, [], [], !0);
var Hm = (e, t, n) => t(c(n)), Lm = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), Om = /* @__PURE__ */ U('<div class="tf-select-content-children"><!></div>'), Tm = /* @__PURE__ */ U('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), zm = /* @__PURE__ */ U('<div class="tf-select-content nopan nodrag"><!></div>'), Am = /* @__PURE__ */ U("<!> <!>", 1), Im = /* @__PURE__ */ U('<div class="tf-select-input-placeholder"> </div>'), qm = /* @__PURE__ */ U('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), Zm = /* @__PURE__ */ U("<div><!></div>");
function Dt(e, t) {
  le(t, !0);
  const n = (w, N = tt) => {
    var b = Ve(), C = se(b);
    lt(C, 19, N, (_, D) => `${D}_${_.value}`, (_, D) => {
      var z = Tm(), Z = se(z);
      Z.__click = [Hm, h, D];
      var j = I(Z), Y = I(j);
      {
        var M = (S) => {
          var P = Lm();
          H(S, P);
        };
        ae(Y, (S) => {
          c(D).children && c(D).children.length > 0 && S(M);
        });
      }
      A(j);
      var k = T(j, 2);
      _n(k, {
        get target() {
          return c(D).label;
        }
      }), A(Z);
      var L = T(Z, 2);
      {
        var x = (S) => {
          var P = Om(), O = I(P);
          n(O, () => c(D).children), A(P), H(S, P);
        };
        ae(L, (S) => {
          c(D).children && c(D).children.length > 0 && (a() || u().includes(c(D).value)) && S(x);
        });
      }
      H(_, z);
    }), H(w, b);
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
  ]), f = /* @__PURE__ */ E(() => {
    const w = [], N = (b) => {
      for (let C of b)
        i().length > 0 ? i().includes(C.value) && w.push(C) : s().includes(C.value) && w.push(C), C.children && C.children.length > 0 && N(C.children);
    };
    return N(r()), w;
  }), g;
  function h(w) {
    g?.hide(), o()?.(w);
  }
  var y = Zm();
  Fe(y, () => ({ ...p, class: `tf-select ${p.class ?? ""}` }));
  var $ = I(y);
  return Pt(
    kr($, {
      floating: (w) => {
        var N = zm(), b = I(N);
        n(b, r), A(N), H(w, N);
      },
      children: (w, N) => {
        var b = qm();
        Fe(b, () => ({ class: "tf-select-input nopan nodrag", ...p }));
        var C = I(b);
        lt(
          C,
          23,
          () => c(f),
          (_, D) => `${D}_${_.value}`,
          (_, D, z) => {
            var Z = Ve(), j = se(Z);
            {
              var Y = (k) => {
                var L = Ve(), x = se(L);
                {
                  var S = (P) => {
                    _n(P, {
                      get target() {
                        return c(D).label;
                      }
                    });
                  };
                  ae(x, (P) => {
                    c(z) === 0 && P(S);
                  });
                }
                H(k, L);
              }, M = (k) => {
                var L = Am(), x = se(L);
                _n(x, {
                  get target() {
                    return c(D).label;
                  }
                });
                var S = T(x, 2);
                {
                  var P = (O) => {
                    var q = Se(",");
                    H(O, q);
                  };
                  ae(S, (O) => {
                    c(z) < c(f).length - 1 && O(P);
                  });
                }
                H(k, L);
              };
              ae(j, (k) => {
                l() ? k(M, !1) : k(Y);
              });
            }
            H(_, Z);
          },
          (_) => {
            var D = Im(), z = I(D, !0);
            A(D), $e(() => Ae(z, d())), H(_, D);
          }
        ), A(C), we(2), A(b), H(w, b);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (w) => g = w,
    () => g
  ), A(y), H(e, y), ue({
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
Hn(["click"]);
re(
  Dt,
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
function Gn(e) {
  return e.split("-")[0];
}
function po(e) {
  return e.split("-")[1];
}
function rd(e) {
  return e === "x" ? "y" : "x";
}
function js(e) {
  return e === "y" ? "height" : "width";
}
const Km = /* @__PURE__ */ new Set(["top", "bottom"]);
function kn(e) {
  return Km.has(Gn(e)) ? "y" : "x";
}
function Ws(e) {
  return rd(kn(e));
}
function Ym(e, t, n) {
  n === void 0 && (n = !1);
  const r = po(e), o = Ws(e), i = js(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Fo(s)), [s, Fo(s)];
}
function jm(e) {
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
function Um(e, t, n, r) {
  const o = po(e);
  let i = Fm(Gn(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(ts)))), i;
}
function Fo(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Bm[t]);
}
function Gm(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function od(e) {
  return typeof e != "number" ? Gm(e) : {
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
function ll(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = kn(t), s = Ws(t), a = js(s), l = Gn(t), u = i === "y", d = r.x + r.width / 2 - o.width / 2, p = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
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
const Jm = async (e, t, n) => {
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
  } = ll(u, r, l), f = r, g = {}, h = 0;
  for (let y = 0; y < a.length; y++) {
    const {
      name: $,
      fn: w
    } = a[y], {
      x: N,
      y: b,
      data: C,
      reset: _
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
    d = N ?? d, p = b ?? p, g = {
      ...g,
      [$]: {
        ...g[$],
        ...C
      }
    }, _ && h <= 50 && (h++, typeof _ == "object" && (_.placement && (f = _.placement), _.rects && (u = _.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : _.rects), {
      x: d,
      y: p
    } = ll(u, f, l)), y = -1);
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
    boundary: u = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: p = "floating",
    altBoundary: f = !1,
    padding: g = 0
  } = fo(t, e), h = od(g), y = a[f ? p === "floating" ? "reference" : "floating" : p], $ = Uo(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(y))) == null || n ? y : y.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: l
  })), w = p === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, N = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), b = await (i.isElement == null ? void 0 : i.isElement(N)) ? await (i.getScale == null ? void 0 : i.getScale(N)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Uo(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: w,
    offsetParent: N,
    strategy: l
  }) : w);
  return {
    top: ($.top - C.top + h.top) / b.y,
    bottom: (C.bottom - $.bottom + h.bottom) / b.y,
    left: ($.left - C.left + h.left) / b.x,
    right: (C.right - $.right + h.right) / b.x
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
      element: u,
      padding: d = 0
    } = fo(e, t) || {};
    if (u == null)
      return {};
    const p = od(d), f = {
      x: n,
      y: r
    }, g = Ws(o), h = js(g), y = await s.getDimensions(u), $ = g === "y", w = $ ? "top" : "left", N = $ ? "bottom" : "right", b = $ ? "clientHeight" : "clientWidth", C = i.reference[h] + i.reference[g] - f[g] - i.floating[h], _ = f[g] - i.reference[g], D = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let z = D ? D[b] : 0;
    (!z || !await (s.isElement == null ? void 0 : s.isElement(D))) && (z = a.floating[b] || i.floating[h]);
    const Z = C / 2 - _ / 2, j = z / 2 - y[h] / 2 - 1, Y = Fr(p[w], j), M = Fr(p[N], j), k = Y, L = z - y[h] - M, x = z / 2 - y[h] / 2 + Z, S = es(k, x, L), P = !l.arrow && po(o) != null && x !== S && i.reference[h] / 2 - (x < k ? Y : M) - y[h] / 2 < 0, O = P ? x < k ? x - k : x - L : 0;
    return {
      [g]: f[g] + O,
      data: {
        [g]: S,
        centerOffset: x - S - O,
        ...P && {
          alignmentOffset: O
        }
      },
      reset: P
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
        elements: u
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
      const w = Gn(o), N = kn(a), b = Gn(a) === a, C = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), _ = f || (b || !y ? [Fo(a)] : jm(a)), D = h !== "none";
      !f && D && _.push(...Um(a, y, h, C));
      const z = [a, ..._], Z = await id(t, $), j = [];
      let Y = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && j.push(Z[w]), p) {
        const x = Ym(o, s, C);
        j.push(Z[x[0]], Z[x[1]]);
      }
      if (Y = [...Y, {
        placement: o,
        overflows: j
      }], !j.every((x) => x <= 0)) {
        var M, k;
        const x = (((M = i.flip) == null ? void 0 : M.index) || 0) + 1, S = z[x];
        if (S && (!(p === "alignment" && N !== kn(S)) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        Y.every((O) => O.overflows[0] > 0 && kn(O.placement) === N)))
          return {
            data: {
              index: x,
              overflows: Y
            },
            reset: {
              placement: S
            }
          };
        let P = (k = Y.filter((O) => O.overflows[0] <= 0).sort((O, q) => O.overflows[1] - q.overflows[1])[0]) == null ? void 0 : k.placement;
        if (!P)
          switch (g) {
            case "bestFit": {
              var L;
              const O = (L = Y.filter((q) => {
                if (D) {
                  const V = kn(q.placement);
                  return V === N || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  V === "y";
                }
                return !0;
              }).map((q) => [q.placement, q.overflows.filter((V) => V > 0).reduce((V, B) => V + B, 0)]).sort((q, V) => q[1] - V[1])[0]) == null ? void 0 : L[0];
              O && (P = O);
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
}, t2 = /* @__PURE__ */ new Set(["left", "top"]);
async function n2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Gn(n), a = po(n), l = kn(n) === "y", u = t2.has(s) ? -1 : 1, d = i && l ? -1 : 1, p = fo(t, e);
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
              y: N
            } = $;
            return {
              x: w,
              y: N
            };
          }
        },
        ...l
      } = fo(e, t), u = {
        x: n,
        y: r
      }, d = await id(t, l), p = kn(Gn(o)), f = rd(p);
      let g = u[f], h = u[p];
      if (i) {
        const $ = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", N = g + d[$], b = g - d[w];
        g = es(N, g, b);
      }
      if (s) {
        const $ = p === "y" ? "top" : "left", w = p === "y" ? "bottom" : "right", N = h + d[$], b = h - d[w];
        h = es(N, h, b);
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
function Ot(e) {
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
  const t = Fs(), n = Ot(e) ? Tt(e) : e;
  return u2.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || c2.some((r) => (n.willChange || "").includes(r)) || d2.some((r) => (n.contain || "").includes(r));
}
function f2(e) {
  let t = Pn(e);
  for (; Jt(t) && !br(t); ) {
    if (Xs(t))
      return t;
    if (hi(t))
      return null;
    t = Pn(t);
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
  return Ot(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Pn(e) {
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
  const t = Pn(e);
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
  return Ot(e) ? e : e.contextElement;
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
function Ur(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = cd(e);
  let s = Xt(1);
  t && (r ? Ot(r) && (s = ur(r)) : s = ur(e));
  const a = h2(i, n, r) ? dd(i) : Xt(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, d = o.width / s.x, p = o.height / s.y;
  if (i) {
    const f = xt(i), g = r && Ot(r) ? xt(r) : r;
    let h = f, y = ns(h);
    for (; y && r && g !== h; ) {
      const $ = ur(y), w = y.getBoundingClientRect(), N = Tt(y), b = w.left + (y.clientLeft + parseFloat(N.paddingLeft)) * $.x, C = w.top + (y.clientTop + parseFloat(N.paddingTop)) * $.y;
      l *= $.x, u *= $.y, d *= $.x, p *= $.y, l += b, u += C, h = xt(y), y = ns(h);
    }
  }
  return Uo({
    width: d,
    height: p,
    x: l,
    y: u
  });
}
function Us(e, t) {
  const n = vi(e).scrollLeft;
  return t ? t.left + n : Ur(bn(e)).left + n;
}
function fd(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Us(e, r)
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
  }, u = Xt(1);
  const d = Xt(0), p = Jt(r);
  if ((p || !p && !i) && ((_r(r) !== "body" || go(s)) && (l = vi(r)), Jt(r))) {
    const g = Ur(r);
    u = ur(r), d.x = g.x + r.clientLeft, d.y = g.y + r.clientTop;
  }
  const f = s && !p && !i ? fd(s, l, !0) : Xt(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y + f.y
  };
}
function m2(e) {
  return Array.from(e.getClientRects());
}
function y2(e) {
  const t = bn(e), n = vi(e), r = e.ownerDocument.body, o = lr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = lr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Us(e);
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
    const u = Fs();
    (!u || u && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
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
  const n = Ur(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Jt(e) ? ur(e) : Xt(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function cl(e, t, n) {
  let r;
  if (t === "viewport")
    r = w2(e, n);
  else if (t === "document")
    r = y2(bn(e));
  else if (Ot(t))
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
  return Uo(r);
}
function pd(e, t) {
  const n = Pn(e);
  return n === t || !Ot(n) || br(n) ? !1 : Tt(n).position === "fixed" || pd(n, t);
}
function C2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = ld(e, []).filter((a) => Ot(a) && _r(a) !== "body"), o = null;
  const i = Tt(e).position === "fixed";
  let s = i ? Pn(e) : e;
  for (; Ot(s) && !br(s); ) {
    const a = Tt(s), l = Xs(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && o && b2.has(o.position) || go(s) && !l && pd(e, s)) ? r = r.filter((u) => u !== s) : o = a, s = Pn(s);
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
  const i = [...n === "clippingAncestors" ? hi(t) ? [] : C2(t, this._c) : [].concat(n), r], s = i[0], a = i.reduce((l, u) => {
    const d = cl(t, u, o);
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
  const r = Jt(t), o = bn(t), i = n === "fixed", s = Ur(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Xt(0);
  function u() {
    l.x = Us(o);
  }
  if (r || !r && !i)
    if ((_r(t) !== "body" || go(o)) && (a = vi(t)), r) {
      const g = Ur(t, !0, i, t);
      l.x = g.x + t.clientLeft, l.y = g.y + t.clientTop;
    } else o && u();
  i && !r && o && u();
  const d = o && !r && !i ? fd(o, a) : Xt(0), p = s.left + a.scrollLeft - l.x - d.x, f = s.top + a.scrollTop - l.y - d.y;
  return {
    x: p,
    y: f,
    width: s.width,
    height: s.height
  };
}
function Vi(e) {
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
    let o = Pn(e);
    for (; o && !br(o); ) {
      if (Ot(o) && !Vi(o))
        return o;
      o = Pn(o);
    }
    return n;
  }
  let r = dl(e, t);
  for (; r && a2(r) && Vi(r); )
    r = dl(r, t);
  return r && br(r) && Vi(r) && !Xs(r) ? n : r || f2(e) || n;
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
const N2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: v2,
  getDocumentElement: bn,
  getClippingRect: $2,
  getOffsetParent: gd,
  getElementRects: S2,
  getClientRects: m2,
  getDimensions: _2,
  getScale: ur,
  isElement: Ot,
  isRTL: E2
}, M2 = r2, P2 = o2, D2 = e2, V2 = Qm, H2 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: N2,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return Jm(e, t, {
    ...o,
    platform: i
  });
}, L2 = ({
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
    H2(e, u, {
      placement: r,
      middleware: [
        M2(o),
        // 手动偏移配置
        D2(i),
        //自动翻转
        P2(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [V2({ element: d })] : []
      ]
    }).then(({ x: w, y: N, placement: b, middlewareData: C }) => {
      if (Object.assign(u.style, {
        left: `${w}px`,
        top: `${N}px`
      }), l) {
        const { x: _, y: D } = C.arrow, z = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[b.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: _ != null ? `${_}px` : "",
          top: D != null ? `${D}px` : "",
          right: "",
          bottom: "",
          [z]: "2px"
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
  function $(w) {
    u.contains(w.target) || h();
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
var O2 = /* @__PURE__ */ U('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function kr(e, t) {
  le(t, !0);
  const n = m(t, "children", 7), r = m(t, "floating", 7), o = m(t, "placement", 7, "bottom");
  let i, s, a;
  Ln(() => (a = L2({
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
  var u = O2(), d = I(u), p = I(d);
  Be(p, n), A(d), Pt(d, (h) => i = h, () => i);
  var f = T(d, 2), g = I(f);
  return Be(g, r), A(f), Pt(f, (h) => s = h, () => s), A(u), H(e, u), ue({
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
function Le(e, t) {
  le(t, !0);
  const n = m(t, "children", 7), r = m(t, "level", 7, 1), o = m(t, "mt", 7), i = m(t, "mb", 7);
  var s = Ve(), a = se(s);
  return sp(a, () => `h${r()}`, !1, (l, u) => {
    Fe(l, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var d = Ve(), p = se(d);
    Be(p, () => n() ?? tt), H(u, d);
  }), H(e, s), ue({
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
var T2 = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const z2 = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function mi(e, t) {
  le(t, !0), Te(e, z2);
  const n = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Me(e, Ie(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = T2();
      H(r, i);
    },
    $$slots: { default: !0 }
  })), ue();
}
re(mi, {}, [], [], !0);
const A2 = () => ({ deleteNode: (e) => {
  Ke.removeNode(e), Ke.updateEdges((t) => t.filter((n) => n.source !== e && n.target !== e));
} }), Jn = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, I2 = () => ({ copyNode: (e) => {
  const t = Ke.getNode(e);
  if (t) {
    const n = Jn(), r = {
      ...t,
      id: n,
      position: { x: t.position.x + 50, y: t.position.y + 50 }
    };
    Ke.updateNodes((o) => [...o.map((i) => ({ ...i, selected: !1 })), r]);
  }
} }), Ge = () => pn("svelteflow__node_id"), Dn = () => pn("tinyflow_options");
var q2 = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), Z2 = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), B2 = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), R2 = /* @__PURE__ */ U('<div class="input-item svelte-1jesvb7">执行条件： <!></div>'), K2 = (e, t, n) => {
  const r = e.target.checked;
  t(n, { async: r });
}, Y2 = (e, t, n) => {
  const r = e.target.checked;
  t(n, { loopEnable: r });
}, j2 = /* @__PURE__ */ U('<div class="input-item svelte-1jesvb7">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-1jesvb7">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-1jesvb7">退出条件： <!></div>', 1), W2 = /* @__PURE__ */ U('<div class="settings svelte-1jesvb7"><div class="input-item svelte-1jesvb7">节点名称： <!></div> <div class="input-item svelte-1jesvb7">参数描述： <!></div> <!> <label class="input-item-inline svelte-1jesvb7"><span>异步执行：</span> <input type="checkbox"/></label> <label class="input-item-inline svelte-1jesvb7"><span>循环执行：</span> <input type="checkbox"/></label> <!></div>'), X2 = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), F2 = /* @__PURE__ */ U('<div class="tf-node-toolbar svelte-1jesvb7"><!> <!> <!> <!></div>'), U2 = /* @__PURE__ */ U('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const G2 = {
  hash: "svelte-1jesvb7",
  code: ".tf-node-toolbar.svelte-1jesvb7 {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-1jesvb7 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-1jesvb7 .input-item:where(.svelte-1jesvb7) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-1jesvb7 .input-item-inline:where(.svelte-1jesvb7) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function It(e, t) {
  le(t, !0), Te(e, G2);
  const n = m(t, "data", 7), r = m(t, "id", 7, ""), o = m(t, "icon", 7), i = m(t, "handle", 7), s = m(t, "children", 7), a = m(t, "allowExecute", 7, !0), l = m(t, "allowCopy", 7, !0), u = m(t, "allowDelete", 7, !0), d = m(t, "allowSetting", 7, !0), p = m(t, "allowSettingOfCondition", 7, !0), f = m(t, "showSourceHandle", 7, !0), g = m(t, "showTargetHandle", 7, !0), h = m(t, "onCollapse", 7);
  let y = n().expand ? ["key"] : [];
  const { updateNodeData: $, getNode: w } = ct(), N = /* @__PURE__ */ E(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: b } = A2(), { copyNode: C } = I2(), _ = Dn(), D = () => {
    _.onNodeExecute?.(w(r()));
  };
  let z = Ge();
  var Z = U2(), j = se(Z);
  {
    var Y = (V) => {
      Jc(V, {
        get position() {
          return me.Top;
        },
        align: "end",
        children: (B, W) => {
          var G = F2(), Q = I(G);
          {
            var X = (oe) => {
              Me(oe, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  b(r());
                },
                children: (ee, ce) => {
                  var J = q2();
                  H(ee, J);
                },
                $$slots: { default: !0 }
              });
            };
            ae(Q, (oe) => {
              u() && oe(X);
            });
          }
          var de = T(Q, 2);
          {
            var te = (oe) => {
              Me(oe, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  C(r());
                },
                children: (ee, ce) => {
                  var J = Z2();
                  H(ee, J);
                },
                $$slots: { default: !0 }
              });
            };
            ae(de, (oe) => {
              l() && oe(te);
            });
          }
          var pe = T(de, 2);
          {
            var F = (oe) => {
              Me(oe, {
                class: "tf-node-toolbar-item",
                onclick: D,
                children: (ee, ce) => {
                  var J = B2();
                  H(ee, J);
                },
                $$slots: { default: !0 }
              });
            };
            ae(pe, (oe) => {
              a() && oe(F);
            });
          }
          var Ce = T(pe, 2);
          {
            var ge = (oe) => {
              kr(oe, {
                placement: "bottom",
                floating: (ee) => {
                  var ce = W2(), J = I(ce), ve = T(I(J));
                  Ue(ve, {
                    style: "width: 100%;",
                    onchange: (De) => {
                      const We = De.target.value;
                      $(z, { title: We });
                    },
                    get value() {
                      return n().title;
                    }
                  }), A(J);
                  var ne = T(J, 2), _e = T(I(ne));
                  Ye(_e, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (De) => {
                      const We = De.target.value;
                      $(z, { description: We });
                    },
                    get value() {
                      return n().description;
                    }
                  }), A(ne);
                  var R = T(ne, 2);
                  {
                    var Je = (De) => {
                      var We = R2(), fe = T(I(We));
                      Ye(fe, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Ze) => {
                          const it = Ze.target.value;
                          $(z, { condition: it });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), A(We), H(De, We);
                    };
                    ae(R, (De) => {
                      p() && De(Je);
                    });
                  }
                  var ie = T(R, 2), xe = T(I(ie), 2);
                  dn(xe), xe.__change = [K2, $, z], A(ie);
                  var ke = T(ie, 2), He = T(I(ke), 2);
                  dn(He), He.__change = [Y2, $, z], A(ke);
                  var dt = T(ke, 2);
                  {
                    var kt = (De) => {
                      var We = j2(), fe = se(We), Ze = T(I(fe));
                      const it = /* @__PURE__ */ E(() => n().loopIntervalMs || "1000");
                      Ye(Ze, {
                        rows: 1,
                        style: "width: 100%;",
                        onchange: (zn) => {
                          const An = zn.target.value;
                          $(z, { loopIntervalMs: An });
                        },
                        get value() {
                          return c(it);
                        }
                      }), A(fe);
                      var Re = T(fe, 2), St = T(I(Re));
                      const Qe = /* @__PURE__ */ E(() => n().maxLoopCount || "0");
                      Ye(St, {
                        rows: 1,
                        style: "width: 100%;",
                        onchange: (zn) => {
                          const An = zn.target.value;
                          $(z, { maxLoopCount: An });
                        },
                        get value() {
                          return c(Qe);
                        }
                      }), A(Re);
                      var qt = T(Re, 2), yi = T(I(qt));
                      Ye(yi, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (zn) => {
                          const An = zn.target.value;
                          $(z, { loopBreakCondition: An });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), A(qt), H(De, We);
                    };
                    ae(dt, (De) => {
                      n().loopEnable && De(kt);
                    });
                  }
                  A(ce), $e(() => {
                    ga(xe, !!n().async), ga(He, !!n().loopEnable);
                  }), H(ee, ce);
                },
                children: (ee, ce) => {
                  Me(ee, {
                    class: "tf-node-toolbar-item",
                    children: (J, ve) => {
                      var ne = X2();
                      H(J, ne);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            ae(Ce, (oe) => {
              d() && oe(ge);
            });
          }
          A(G), H(B, G);
        },
        $$slots: { default: !0 }
      });
    };
    ae(j, (V) => {
      (a() || l() || u()) && V(Y);
    });
  }
  var M = T(j, 2), k = T(I(M), 2), L = I(k);
  nd(L, {
    get items() {
      return c(N);
    },
    get activeKeys() {
      return y;
    },
    onChange: (V, B) => {
      $(r(), { expand: B?.includes("key") }), h()?.(B?.includes("key") ? "key" : "");
    }
  }), A(k), A(M);
  var x = T(M, 2);
  {
    var S = (V) => {
      Mn(V, {
        type: "target",
        get position() {
          return me.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    ae(x, (V) => {
      g() && V(S);
    });
  }
  var P = T(x, 2);
  {
    var O = (V) => {
      Mn(V, {
        type: "source",
        get position() {
          return me.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    ae(P, (V) => {
      f() && V(O);
    });
  }
  var q = T(P, 2);
  return Be(q, () => i() ?? tt), H(e, Z), ue({
    get data() {
      return n();
    },
    set data(V) {
      n(V), v();
    },
    get id() {
      return r();
    },
    set id(V = "") {
      r(V), v();
    },
    get icon() {
      return o();
    },
    set icon(V) {
      o(V), v();
    },
    get handle() {
      return i();
    },
    set handle(V) {
      i(V), v();
    },
    get children() {
      return s();
    },
    set children(V) {
      s(V), v();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(V = !0) {
      a(V), v();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(V = !0) {
      l(V), v();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(V = !0) {
      u(V), v();
    },
    get allowSetting() {
      return d();
    },
    set allowSetting(V = !0) {
      d(V), v();
    },
    get allowSettingOfCondition() {
      return p();
    },
    set allowSettingOfCondition(V = !0) {
      p(V), v();
    },
    get showSourceHandle() {
      return f();
    },
    set showSourceHandle(V = !0) {
      f(V), v();
    },
    get showTargetHandle() {
      return g();
    },
    set showTargetHandle(V = !0) {
      g(V), v();
    },
    get onCollapse() {
      return h();
    },
    set onCollapse(V) {
      h(V), v();
    }
  });
}
Hn(["change"]);
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
var Q2 = /* @__PURE__ */ U('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), ey = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), ty = /* @__PURE__ */ U('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const ny = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function vd(e, t) {
  le(t, !0), Te(e, ny);
  const n = m(t, "parameter", 7), r = m(t, "index", 7);
  let o = Ge(), i = /* @__PURE__ */ E(() => tr(o)), s = /* @__PURE__ */ E(() => ({
    ...n(),
    ...c(i)?.current?.data?.parameters[r()]
  }));
  const { updateNodeData: a } = ct(), l = (_, D) => {
    a(o, (z) => {
      let Z = z.data.parameters;
      return Z[r()][_] = D, { parameters: Z };
    });
  }, u = (_) => {
    const D = _.target.value;
    l("name", D);
  }, d = (_) => {
    const D = _.target.checked;
    l("required", D);
  }, p = (_) => {
    const D = _.value;
    D && l("dataType", D);
  };
  let f;
  const g = () => {
    a(o, (_) => {
      let D = _.data.parameters;
      return D.splice(r(), 1), { parameters: [...D] };
    }), f?.hide();
  };
  var h = ty(), y = se(h), $ = I(y);
  Ue($, {
    style: "width: 100%;",
    get value() {
      return c(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: u
  }), A(y);
  var w = T(y, 2), N = I(w);
  Qc(N, {
    get checked() {
      return c(s).required;
    },
    onchange: d
  }), A(w);
  var b = T(w, 2), C = I(b);
  return Pt(
    kr(C, {
      placement: "bottom",
      floating: (_) => {
        var D = Q2(), z = I(D), Z = T(I(z));
        const j = /* @__PURE__ */ E(() => c(s).dataType ? [c(s).dataType] : ["String"]);
        Dt(Z, {
          get items() {
            return hd;
          },
          style: "width: 100%",
          onSelect: p,
          get value() {
            return c(j);
          }
        }), A(z);
        var Y = T(z, 2), M = T(I(Y));
        Ye(M, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return c(s).defaultValue;
          },
          onchange: (P) => {
            const O = P.target.value;
            l("defaultValue", O);
          }
        }), A(Y);
        var k = T(Y, 2), L = T(I(k));
        Ye(L, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return c(s).description;
          },
          onchange: (P) => {
            const O = P.target.value;
            l("description", O);
          }
        }), A(k);
        var x = T(k, 2), S = I(x);
        Me(S, {
          onclick: g,
          children: (P, O) => {
            we();
            var q = Se("删除");
            H(P, q);
          },
          $$slots: { default: !0 }
        }), A(x), A(D), H(_, D);
      },
      children: (_, D) => {
        Me(_, {
          class: "input-btn-more",
          children: (z, Z) => {
            var j = ey();
            H(z, j);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (_) => f = _,
    () => f
  ), A(b), H(e, h), ue({
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
var ry = /* @__PURE__ */ U('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), oy = /* @__PURE__ */ U('<div class="none-params svelte-3n0wca">无输入参数</div>'), iy = /* @__PURE__ */ U('<div class="input-container svelte-3n0wca"><!> <!></div>');
const sy = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function md(e, t) {
  le(t, !0), Te(e, sy);
  let n = Ge(), r = /* @__PURE__ */ E(() => tr(n)), o = /* @__PURE__ */ E(() => [...c(r)?.current?.data?.parameters || []]);
  var i = iy(), s = I(i);
  {
    var a = (u) => {
      var d = ry();
      we(4), H(u, d);
    };
    ae(s, (u) => {
      c(o).length !== 0 && u(a);
    });
  }
  var l = T(s, 2);
  lt(
    l,
    19,
    () => c(o),
    (u) => u.id,
    (u, d, p) => {
      vd(u, {
        get parameter() {
          return c(d);
        },
        get index() {
          return c(p);
        }
      });
    },
    (u) => {
      var d = oy();
      H(u, d);
    }
  ), A(i), H(e, i), ue();
}
re(md, {}, [], [], !0);
const Go = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = Jn()), Go(t.children);
}), e), tn = () => {
  const { updateNodeData: e } = ct();
  return {
    addParameter: (t, n = "parameters", r) => {
      Go(r?.children);
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
var ay = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), ly = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), uy = /* @__PURE__ */ U('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const cy = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function yd(e, t) {
  le(t, !0), Te(e, cy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ge(), { addParameter: i } = tn();
  return It(e, Ie(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (s) => {
      var a = ay();
      H(s, a);
    },
    children: (s, a) => {
      var l = uy(), u = se(l), d = I(u);
      Le(d, {
        level: 3,
        children: (g, h) => {
          we();
          var y = Se("输入参数");
          H(g, y);
        },
        $$slots: { default: !0 }
      });
      var p = T(d, 2);
      Me(p, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input" });
        },
        children: (g, h) => {
          var y = ly();
          H(g, y);
        },
        $$slots: { default: !0 }
      }), A(u);
      var f = T(u, 2);
      md(f, {}), H(s, l);
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
  const t = Ge(), n = tr(t), r = /* @__PURE__ */ E(At), o = /* @__PURE__ */ E(() => c(r).nodes), i = /* @__PURE__ */ E(() => c(r).edges), s = /* @__PURE__ */ E(() => c(r).nodeLookup);
  let a = /* @__PURE__ */ E(() => {
    const l = [];
    if (!n.current)
      return [];
    const u = c(s).get(t);
    if (e)
      for (const d of c(o)) {
        const p = d.parentId === n.current.id;
        if (p) {
          const f = fl(d, p, u);
          f && l.push(f);
        }
      }
    else {
      const d = [];
      wd(d, t, c(i));
      for (const p of c(o))
        if (d.includes(p.id)) {
          const f = p.parentId === n.current.id, g = fl(p, f, u);
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
var fy = /* @__PURE__ */ U('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), py = /* @__PURE__ */ U('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const gy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function xd(e, t) {
  le(t, !0), Te(e, gy), Ln(() => {
    c(l).refType || g({ value: "ref" });
  });
  const n = m(t, "parameter", 7), r = m(t, "index", 7), o = m(t, "dataKeyName", 7), i = m(t, "useChildrenOnly", 7);
  let s = Ge(), a = /* @__PURE__ */ E(() => tr(s)), l = /* @__PURE__ */ E(() => ({
    ...n(),
    ...c(a)?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: u } = ct(), d = (M, k) => {
    u(s, (L) => {
      let x = L.data?.[o()];
      return x[r()] = { ...x[r()], [M]: k }, { [o()]: x };
    });
  }, p = (M, k) => {
    const L = k.target.value;
    d(M, L);
  }, f = (M) => {
    const k = M.value;
    d("ref", k);
  }, g = (M) => {
    const k = M.value;
    d("refType", k);
  };
  let h;
  const y = () => {
    u(s, (M) => {
      let k = M.data?.[o()];
      return k.splice(r(), 1), { [o()]: [...k] };
    }), h?.hide();
  };
  let $ = dy(i());
  var w = py(), N = se(w), b = I(N);
  const C = /* @__PURE__ */ E(() => c(l).nameDisabled === !0);
  Ue(b, {
    style: "width: 100%;",
    get value() {
      return c(l).name;
    },
    placeholder: "请输入参数名称",
    get disabled() {
      return c(C);
    },
    oninput: (M) => p("name", M)
  }), A(N);
  var _ = T(N, 2), D = I(_);
  {
    var z = (M) => {
      Ue(M, {
        get value() {
          return c(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (k) => p("value", k)
      });
    }, Z = (M, k) => {
      {
        var L = (x) => {
          const S = /* @__PURE__ */ E(() => [c(l).ref]);
          Dt(x, {
            get items() {
              return $.current;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return c(S);
            },
            expandAll: !0,
            onSelect: f
          });
        };
        ae(
          M,
          (x) => {
            c(l).refType !== "input" && x(L);
          },
          k
        );
      }
    };
    ae(D, (M) => {
      c(l).refType === "fixed" ? M(z) : M(Z, !1);
    });
  }
  A(_);
  var j = T(_, 2), Y = I(j);
  return Pt(
    kr(Y, {
      placement: "bottom",
      floating: (M) => {
        var k = fy(), L = I(k), x = T(I(L));
        const S = /* @__PURE__ */ E(() => c(l).refType ? [c(l).refType] : []);
        Dt(x, {
          get items() {
            return J2;
          },
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return c(S);
          },
          onSelect: g
        }), A(L);
        var P = T(L, 2), O = T(I(P));
        Ye(O, {
          rows: 1,
          style: "width: 100%;",
          onchange: (G) => {
            p("defaultValue", G);
          },
          get value() {
            return c(l).defaultValue;
          }
        }), A(P);
        var q = T(P, 2), V = T(I(q));
        Ye(V, {
          rows: 3,
          style: "width: 100%;",
          onchange: (G) => {
            p("description", G);
          },
          get value() {
            return c(l).description;
          }
        }), A(q);
        var B = T(q, 2), W = I(B);
        Me(W, {
          onclick: y,
          children: (G, Q) => {
            we();
            var X = Se("删除");
            H(G, X);
          },
          $$slots: { default: !0 }
        }), A(B), A(k), H(M, k);
      },
      children: (M, k) => {
        mi(M, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (M) => h = M,
    () => h
  ), A(j), H(e, w), ue({
    get parameter() {
      return n();
    },
    set parameter(M) {
      n(M), v();
    },
    get index() {
      return r();
    },
    set index(M) {
      r(M), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(M) {
      o(M), v();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(M) {
      i(M), v();
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
var hy = /* @__PURE__ */ U('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), vy = /* @__PURE__ */ U('<div class="none-params svelte-1sm1mgi"> </div>'), my = /* @__PURE__ */ U('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const yy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function gt(e, t) {
  le(t, !0), Te(e, yy);
  const n = m(t, "noneParameterText", 7, "无输入参数"), r = m(t, "dataKeyName", 7, "parameters"), o = m(t, "useChildrenOnly", 7);
  let i = Ge(), s = /* @__PURE__ */ E(() => tr(i)), a = /* @__PURE__ */ E(() => [...c(s)?.current?.data?.[r()] || []]);
  var l = my(), u = I(l);
  {
    var d = (f) => {
      var g = hy();
      we(4), H(f, g);
    };
    ae(u, (f) => {
      c(a).length !== 0 && f(d);
    });
  }
  var p = T(u, 2);
  return lt(
    p,
    19,
    () => c(a),
    (f) => f.id,
    (f, g, h) => {
      xd(f, {
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
      var g = vy(), h = I(g, !0);
      A(g), $e(() => Ae(h, n())), H(f, g);
    }
  ), A(l), H(e, l), ue({
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
var wy = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), by = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), xy = /* @__PURE__ */ U('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const Cy = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function Cd(e, t) {
  le(t, !0), Te(e, Cy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ge(), { addParameter: i } = tn();
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
        H(s, a);
      },
      children: (s, a) => {
        var l = xy(), u = se(l), d = I(u);
        Le(d, {
          level: 3,
          children: (g, h) => {
            we();
            var y = Se("输出参数");
            H(g, y);
          },
          $$slots: { default: !0 }
        });
        var p = T(d, 2);
        Me(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (g, h) => {
            var y = by();
            H(g, y);
          },
          $$slots: { default: !0 }
        }), A(u);
        var f = T(u, 2);
        gt(f, { noneParameterText: "无输出参数", dataKeyName: "outputDefs" }), H(s, l);
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
const Hi = (e) => JSON.parse(JSON.stringify(e));
var $y = /* @__PURE__ */ he('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), _y = /* @__PURE__ */ U('<div class="input-more-item svelte-1cfeest"><!></div>'), ky = /* @__PURE__ */ U('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), Sy = /* @__PURE__ */ U('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const Ey = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function $d(e, t) {
  le(t, !0), Te(e, Ey);
  const n = m(t, "parameter", 7), r = m(t, "position", 7), o = m(t, "dataKeyName", 7);
  let i = Ge(), s = /* @__PURE__ */ E(() => tr(i)), a = /* @__PURE__ */ E(() => {
    let L = c(s)?.current?.data?.[o()], x;
    if (L && r().length > 0) {
      let S = L;
      for (let P = 0; P < r().length; P++) {
        const O = r()[P];
        P == r().length - 1 ? x = S[O] : S = S[O].children;
      }
    }
    return { ...n(), ...x };
  });
  const { updateNodeData: l } = ct(), u = (L, x) => {
    l(i, (S) => {
      const P = S.data?.[o()];
      if (P && r().length > 0) {
        let O = P;
        for (let q = 0; q < r().length; q++) {
          const V = r()[q];
          q == r().length - 1 ? O[V] = { ...O[V], [L]: x } : O = O[V].children;
        }
      }
      return { [o()]: [...Hi(P)] };
    });
  }, d = (L, x) => {
    const S = x.target.value;
    u(L, S);
  }, p = (L) => {
    const x = L.value;
    u("dataType", x);
  };
  let f;
  const g = () => {
    l(i, (L) => {
      let x = L.data?.[o()];
      if (x && r().length > 0) {
        let S = x;
        for (let P = 0; P < r().length; P++) {
          const O = r()[P];
          P == r().length - 1 ? S.splice(O, 1) : S = S[O].children;
        }
      }
      return { [o()]: [...Hi(x)] };
    }), f?.hide();
  }, h = () => {
    l(i, (L) => {
      let x = L.data?.[o()];
      if (x && r().length > 0) {
        let S = x;
        for (let P = 0; P < r().length; P++) {
          const O = r()[P];
          P == r().length - 1 ? S[O].children ? S[O].children.push({ id: Jn(), name: "newParam", dataType: "String" }) : S[O].children = [{ id: Jn(), name: "newParam", dataType: "String" }] : S = S[O].children;
        }
      }
      return { [o()]: [...Hi(x)] };
    });
  };
  var y = Sy(), $ = se(y), w = I($);
  {
    var N = (L) => {
      var x = Ve(), S = se(x);
      lt(S, 17, r, pr, (P, O) => {
        we();
        var q = Se(" ");
        H(P, q);
      }), H(L, x);
    };
    ae(w, (L) => {
      r().length > 1 && L(N);
    });
  }
  var b = T(w, 2);
  const C = /* @__PURE__ */ E(() => c(a).nameDisabled === !0);
  Ue(b, {
    style: "width: 100%;",
    get value() {
      return c(a).name;
    },
    placeholder: "请输入参数名称",
    oninput: (L) => {
      d("name", L);
    },
    get disabled() {
      return c(C);
    }
  }), A($);
  var _ = T($, 2), D = I(_);
  const z = /* @__PURE__ */ E(() => c(a).dataType ? [c(a).dataType] : []), Z = /* @__PURE__ */ E(() => c(a).dataTypeDisabled === !0);
  Dt(D, {
    get items() {
      return hd;
    },
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return c(z);
    },
    get disabled() {
      return c(Z);
    },
    onSelect: p
  });
  var j = T(D, 2);
  {
    var Y = (L) => {
      Me(L, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: h,
        children: (x, S) => {
          var P = $y();
          H(x, P);
        },
        $$slots: { default: !0 }
      });
    };
    ae(j, (L) => {
      (c(a).dataType === "Object" || c(a).dataType === "Array") && c(a).addChildDisabled !== !0 && L(Y);
    });
  }
  A(_);
  var M = T(_, 2), k = I(M);
  return Pt(
    kr(k, {
      placement: "bottom",
      floating: (L) => {
        var x = ky(), S = I(x), P = T(I(S));
        const O = /* @__PURE__ */ E(() => c(a).defaultValue || "");
        Ye(P, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return c(O);
          },
          onchange: (Q) => {
            d("defaultValue", Q);
          }
        }), A(S);
        var q = T(S, 2), V = T(I(q));
        const B = /* @__PURE__ */ E(() => c(a).description || "");
        Ye(V, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return c(B);
          },
          onchange: (Q) => {
            d("description", Q);
          }
        }), A(q);
        var W = T(q, 2);
        {
          var G = (Q) => {
            var X = _y(), de = I(X);
            Me(de, {
              onclick: g,
              children: (te, pe) => {
                we();
                var F = Se("删除");
                H(te, F);
              },
              $$slots: { default: !0 }
            }), A(X), H(Q, X);
          };
          ae(W, (Q) => {
            c(a).deleteDisabled !== !0 && Q(G);
          });
        }
        A(x), H(L, x);
      },
      children: (L, x) => {
        mi(L, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (L) => f = L,
    () => f
  ), A(M), H(e, y), ue({
    get parameter() {
      return n();
    },
    set parameter(L) {
      n(L), v();
    },
    get position() {
      return r();
    },
    set position(L) {
      r(L), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(L) {
      o(L), v();
    }
  });
}
re($d, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var Ny = /* @__PURE__ */ U("<!> <!>", 1), My = /* @__PURE__ */ U('<div class="none-params svelte-1sm1mgi"> </div>'), Py = /* @__PURE__ */ U('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Dy = /* @__PURE__ */ U('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Vy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Tn(e, t) {
  le(t, !0), Te(e, Vy);
  const n = (f, g = tt, h = tt) => {
    var y = Ve(), $ = se(y);
    lt(
      $,
      19,
      g,
      (w) => `${w.id}_${w.children ? w.children.length : 0}`,
      (w, N, b) => {
        var C = Ny(), _ = se(C);
        const D = /* @__PURE__ */ E(() => [...h(), c(b)]);
        $d(_, {
          get parameter() {
            return c(N);
          },
          get position() {
            return c(D);
          },
          get dataKeyName() {
            return o();
          }
        });
        var z = T(_, 2);
        {
          var Z = (j) => {
            var Y = /* @__PURE__ */ ms(() => [...h(), c(b)]);
            n(j, () => c(N).children, () => c(Y));
          };
          ae(z, (j) => {
            c(N).children && j(Z);
          });
        }
        H(w, C);
      },
      (w) => {
        var N = Ve(), b = se(N);
        {
          var C = (_) => {
            var D = My(), z = I(D, !0);
            A(D), $e(() => Ae(z, r())), H(_, D);
          };
          ae(b, (_) => {
            h().length === 0 && _(C);
          });
        }
        H(w, N);
      }
    ), H(f, y);
  }, r = m(t, "noneParameterText", 7, "无输出参数"), o = m(t, "dataKeyName", 7, "outputDefs");
  let i = Ge(), s = /* @__PURE__ */ E(() => tr(i)), a = /* @__PURE__ */ E(() => [...c(s)?.current?.data?.[o()] || []]);
  var l = Dy(), u = I(l);
  {
    var d = (f) => {
      var g = Py();
      we(4), H(f, g);
    };
    ae(u, (f) => {
      c(a).length !== 0 && f(d);
    });
  }
  var p = T(u, 2);
  return n(p, () => c(a) || [], () => []), A(l), H(e, l), ue({
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
re(Tn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Hy = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), Ly = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Oy = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), Ty = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), zy = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), Ay = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Iy = /* @__PURE__ */ U('<div class="heading svelte-q0cqsa"><!> <!></div> <!> <!> <div class="setting-title svelte-q0cqsa">模型</div> <div class="setting-item svelte-q0cqsa"><!> <!></div> <div class="setting-title svelte-q0cqsa">采样参数</div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="100" step="1"/></div></div> <div class="setting-title svelte-q0cqsa">系统提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="setting-title svelte-q0cqsa">用户提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="heading svelte-q0cqsa"><!> <!> <!></div> <!>', 1);
const qy = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function _d(e, t) {
  le(t, !0), Te(e, qy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ge(), { addParameter: i } = tn(), s = Dn();
  let a = /* @__PURE__ */ Ee(Mt([]));
  Ln(async () => {
    const d = await s.provider?.llm?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = ct(), u = (d) => {
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
    n().outType || u("text");
  }), It(e, Ie(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var p = Hy();
        H(d, p);
      },
      children: (d, p) => {
        var f = Iy(), g = se(f), h = I(g);
        Le(h, {
          level: 3,
          children: (J, ve) => {
            we();
            var ne = Se("输入参数");
            H(J, ne);
          },
          $$slots: { default: !0 }
        });
        var y = T(h, 2);
        Me(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (J, ve) => {
            var ne = Ly();
            H(J, ne);
          },
          $$slots: { default: !0 }
        }), A(g);
        var $ = T(g, 2);
        gt($, {});
        var w = T($, 2);
        Le(w, {
          level: 3,
          mt: "10px",
          children: (J, ve) => {
            we();
            var ne = Se("模型设置");
            H(J, ne);
          },
          $$slots: { default: !0 }
        });
        var N = T(w, 4), b = I(N);
        const C = /* @__PURE__ */ E(() => n().llmId ? [n().llmId] : []);
        Dt(b, {
          get items() {
            return c(a);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (J) => {
            const ve = J.value;
            l(o, () => ({ llmId: ve }));
          },
          get value() {
            return c(C);
          }
        });
        var _ = T(b, 2);
        mi(_, {}), A(N);
        var D = T(N, 4), z = I(D), Z = I(z), j = I(Z);
        A(Z);
        var Y = T(Z, 2);
        dn(Y), Y.__input = [Oy, l, o], A(z), A(D);
        var M = T(D, 2), k = I(M), L = I(k), x = I(L);
        A(L);
        var S = T(L, 2);
        dn(S), S.__input = [Ty, l, o], A(k), A(M);
        var P = T(M, 2), O = I(P), q = I(O), V = I(q);
        A(q);
        var B = T(q, 2);
        dn(B), B.__input = [zy, l, o], A(O), A(P);
        var W = T(P, 4), G = I(W);
        const Q = /* @__PURE__ */ E(() => n().systemPrompt || "");
        Ye(G, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return c(Q);
          },
          oninput: (J) => {
            l(o, { systemPrompt: J.target.value });
          }
        }), A(W);
        var X = T(W, 4), de = I(X);
        const te = /* @__PURE__ */ E(() => n().userPrompt || "");
        Ye(de, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return c(te);
          },
          oninput: (J) => {
            l(o, { userPrompt: J.target.value });
          }
        }), A(X);
        var pe = T(X, 2), F = I(pe);
        Le(F, {
          level: 3,
          mt: "10px",
          children: (J, ve) => {
            we();
            var ne = Se("输出参数");
            H(J, ne);
          },
          $$slots: { default: !0 }
        });
        var Ce = T(F, 2);
        const ge = /* @__PURE__ */ E(() => n().outType ? [n().outType] : []);
        Dt(Ce, {
          items: [
            { label: "文本", value: "text" },
            { label: "JSON", value: "json" }
          ],
          style: "width: 100px;margin-left: auto",
          defaultValue: "text",
          onSelect: (J) => {
            u(J.value);
          },
          get value() {
            return c(ge);
          }
        });
        var oe = T(Ce, 2);
        {
          var ee = (J) => {
            Me(J, {
              class: "input-btn-more",
              style: "margin-left: 10px",
              onclick: () => {
                i(o, "outputDefs");
              },
              children: (ve, ne) => {
                var _e = Ay();
                H(ve, _e);
              },
              $$slots: { default: !0 }
            });
          };
          ae(oe, (J) => {
            n().outType === "json" && J(ee);
          });
        }
        A(pe);
        var ce = T(pe, 2);
        Tn(ce, {}), $e(() => {
          Ae(j, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), _o(Y, n().temperature ?? 0.5), Ae(x, `Top P: ${n().topP ?? 0.9 ?? ""}`), _o(S, n().topP ?? 0.9), Ae(V, `Top K: ${n().topK ?? 50 ?? ""}`), _o(B, n().topK ?? 50);
        }), H(d, f);
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
Hn(["input"]);
re(_d, { data: {} }, [], [], !0);
var Zy = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), By = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ry = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ky = /* @__PURE__ */ U('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const Yy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function kd(e, t) {
  le(t, !0), Te(e, Yy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Ln(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = Ge(), { addParameter: i } = tn(), { updateNodeData: s } = ct(), a = [
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
        var u = Zy();
        H(l, u);
      },
      children: (l, u) => {
        var d = Ky(), p = se(d), f = I(p);
        Le(f, {
          level: 3,
          children: (Y, M) => {
            we();
            var k = Se("输入参数");
            H(Y, k);
          },
          $$slots: { default: !0 }
        });
        var g = T(f, 2);
        Me(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (Y, M) => {
            var k = By();
            H(Y, k);
          },
          $$slots: { default: !0 }
        }), A(p);
        var h = T(p, 2);
        gt(h, {});
        var y = T(h, 2);
        Le(y, {
          level: 3,
          mt: "10px",
          children: (Y, M) => {
            we();
            var k = Se("代码");
            H(Y, k);
          },
          $$slots: { default: !0 }
        });
        var $ = T(y, 4), w = I($);
        const N = /* @__PURE__ */ E(() => n().engine ? [n().engine] : ["qlexpress"]);
        Dt(w, {
          get items() {
            return a;
          },
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (Y) => {
            const M = Y.value;
            s(o, () => ({ engine: M }));
          },
          get value() {
            return c(N);
          }
        }), A($);
        var b = T($, 4), C = I(b);
        const _ = /* @__PURE__ */ E(() => n().code || "");
        Ye(C, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (Y) => {
            s(o, () => ({ code: Y.target.value }));
          },
          get value() {
            return c(_);
          }
        }), A(b);
        var D = T(b, 2), z = I(D);
        Le(z, {
          level: 3,
          mt: "10px",
          children: (Y, M) => {
            we();
            var k = Se("输出参数");
            H(Y, k);
          },
          $$slots: { default: !0 }
        });
        var Z = T(z, 2);
        Me(Z, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (Y, M) => {
            var k = Ry();
            H(Y, k);
          },
          $$slots: { default: !0 }
        }), A(D);
        var j = T(D, 2);
        Tn(j, {}), H(l, d);
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
var jy = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), Wy = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Xy = /* @__PURE__ */ U('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Fy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Sd(e, t) {
  le(t, !0), Te(e, Fy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ge(), { addParameter: i } = tn(), { updateNodeData: s } = ct();
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
        var l = jy();
        H(a, l);
      },
      children: (a, l) => {
        var u = Xy(), d = se(u), p = I(d);
        Le(p, {
          level: 3,
          children: (_, D) => {
            we();
            var z = Se("输入参数");
            H(_, z);
          },
          $$slots: { default: !0 }
        });
        var f = T(p, 2);
        Me(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (_, D) => {
            var z = Wy();
            H(_, z);
          },
          $$slots: { default: !0 }
        }), A(d);
        var g = T(d, 2);
        gt(g, {});
        var h = T(g, 2);
        Le(h, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (_, D) => {
            we();
            var z = Se("模板内容");
            H(_, z);
          },
          $$slots: { default: !0 }
        });
        var y = T(h, 2), $ = I(y);
        const w = /* @__PURE__ */ E(() => n().template || "");
        Ye($, {
          rows: 10,
          placeholder: "请输入模板内容",
          style: "width: 100%",
          onchange: (_) => {
            s(o, () => ({ template: _.target.value }));
          },
          get value() {
            return c(w);
          }
        }), A(y);
        var N = T(y, 2), b = I(N);
        Le(b, {
          level: 3,
          mt: "10px",
          children: (_, D) => {
            we();
            var z = Se("输出参数");
            H(_, z);
          },
          $$slots: { default: !0 }
        }), A(N);
        var C = T(N, 2);
        Tn(C, {}), H(a, u);
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
var Uy = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), Gy = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Jy = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Qy = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ew = /* @__PURE__ */ U('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), tw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), nw = /* @__PURE__ */ U('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), rw = /* @__PURE__ */ U('<div style="width: 100%"><!></div>'), ow = /* @__PURE__ */ U('<div style="width: 100%"><!></div>'), iw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), sw = /* @__PURE__ */ U('<div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div class="radio-group svelte-1mo2w1q"><label class="svelte-1mo2w1q"><!>none</label> <label class="svelte-1mo2w1q"><!>form-data</label> <label class="svelte-1mo2w1q"><!>x-www-form-urlencoded</label> <label class="svelte-1mo2w1q"><!>json</label> <label class="svelte-1mo2w1q"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1mo2w1q"><!> <!></div> <!>', 1);
const aw = {
  hash: "svelte-1mo2w1q",
  code: ".heading.svelte-1mo2w1q {display:flex;margin-bottom:10px;}.radio-group.svelte-1mo2w1q {display:flex;margin:10px 0;}.radio-group.svelte-1mo2w1q label:where(.svelte-1mo2w1q) {display:flex;font-size:14px;}"
};
function Ed(e, t) {
  le(t, !0), Te(e, aw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Ln(() => {
    n().method || a(i, () => ({ method: "get" }));
  });
  const o = [
    { value: "get", label: "GET" },
    { value: "post", label: "POST" },
    { value: "put", label: "PUT" },
    { value: "delete", label: "DELETE" },
    { value: "head", label: "HEAD" },
    { value: "patch", label: "PATCH" }
  ], i = Ge(), { addParameter: s } = tn(), { updateNodeData: a } = ct();
  return It(e, Ie(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Uy();
        H(l, u);
      },
      children: (l, u) => {
        var d = sw(), p = se(d), f = I(p);
        Le(f, {
          level: 3,
          children: (ie, xe) => {
            we();
            var ke = Se("输入参数");
            H(ie, ke);
          },
          $$slots: { default: !0 }
        });
        var g = T(f, 2);
        Me(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (ie, xe) => {
            var ke = Gy();
            H(ie, ke);
          },
          $$slots: { default: !0 }
        }), A(p);
        var h = T(p, 2);
        gt(h, {});
        var y = T(h, 2);
        Le(y, {
          level: 3,
          mt: "10px",
          children: (ie, xe) => {
            we();
            var ke = Se("URL 地址");
            H(ie, ke);
          },
          $$slots: { default: !0 }
        });
        var $ = T(y, 2), w = I($), N = I(w);
        const b = /* @__PURE__ */ E(() => n().method ? [n().method] : ["get"]);
        Dt(N, {
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
            return c(b);
          }
        }), A(w);
        var C = T(w, 2), _ = I(C);
        const D = /* @__PURE__ */ E(() => n().url || "");
        Ue(_, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (ie) => {
            a(i, () => ({ url: ie.target.value }));
          },
          get value() {
            return c(D);
          }
        }), A(C), A($);
        var z = T($, 2), Z = I(z);
        Le(Z, {
          level: 3,
          children: (ie, xe) => {
            we();
            var ke = Se("Http 头信息");
            H(ie, ke);
          },
          $$slots: { default: !0 }
        });
        var j = T(Z, 2);
        Me(j, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (ie, xe) => {
            var ke = Jy();
            H(ie, ke);
          },
          $$slots: { default: !0 }
        }), A(z);
        var Y = T(z, 2);
        gt(Y, { dataKeyName: "headers" });
        var M = T(Y, 2);
        Le(M, {
          level: 3,
          mt: "10px",
          children: (ie, xe) => {
            we();
            var ke = Se("Body");
            H(ie, ke);
          },
          $$slots: { default: !0 }
        });
        var k = T(M, 2), L = I(k), x = I(L);
        const S = /* @__PURE__ */ E(() => !n().bodyType);
        Ue(x, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return c(S);
          },
          onchange: (ie) => {
            ie.target?.checked && a(i, { bodyType: "" });
          }
        }), we(), A(L);
        var P = T(L, 2), O = I(P);
        const q = /* @__PURE__ */ E(() => n().bodyType === "form-data");
        Ue(O, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return c(q);
          },
          onchange: (ie) => {
            ie.target?.checked && a(i, { bodyType: "form-data" });
          }
        }), we(), A(P);
        var V = T(P, 2), B = I(V);
        const W = /* @__PURE__ */ E(() => n().bodyType === "x-www-form-urlencoded");
        Ue(B, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return c(W);
          },
          onchange: (ie) => {
            ie.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
          }
        }), we(), A(V);
        var G = T(V, 2), Q = I(G);
        const X = /* @__PURE__ */ E(() => n().bodyType === "json");
        Ue(Q, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return c(X);
          },
          onchange: (ie) => {
            ie.target?.checked && a(i, { bodyType: "json" });
          }
        }), we(), A(G);
        var de = T(G, 2), te = I(de);
        const pe = /* @__PURE__ */ E(() => n().bodyType === "raw");
        Ue(te, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return c(pe);
          },
          onchange: (ie) => {
            ie.target?.checked && a(i, { bodyType: "raw" });
          }
        }), we(), A(de), A(k);
        var F = T(k, 2);
        {
          var Ce = (ie) => {
            var xe = ew(), ke = se(xe), He = I(ke);
            Le(He, {
              level: 3,
              children: (De, We) => {
                we();
                var fe = Se("参数");
                H(De, fe);
              },
              $$slots: { default: !0 }
            });
            var dt = T(He, 2);
            Me(dt, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (De, We) => {
                var fe = Qy();
                H(De, fe);
              },
              $$slots: { default: !0 }
            }), A(ke);
            var kt = T(ke, 2);
            gt(kt, { dataKeyName: "formData" }), H(ie, xe);
          };
          ae(F, (ie) => {
            n().bodyType === "form-data" && ie(Ce);
          });
        }
        var ge = T(F, 2);
        {
          var oe = (ie) => {
            var xe = nw(), ke = se(xe), He = I(ke);
            Le(He, {
              level: 3,
              children: (De, We) => {
                we();
                var fe = Se("Body 参数");
                H(De, fe);
              },
              $$slots: { default: !0 }
            });
            var dt = T(He, 2);
            Me(dt, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (De, We) => {
                var fe = tw();
                H(De, fe);
              },
              $$slots: { default: !0 }
            }), A(ke);
            var kt = T(ke, 2);
            gt(kt, { dataKeyName: "formUrlencoded" }), H(ie, xe);
          };
          ae(ge, (ie) => {
            n().bodyType === "x-www-form-urlencoded" && ie(oe);
          });
        }
        var ee = T(ge, 2);
        {
          var ce = (ie) => {
            var xe = rw(), ke = I(xe);
            Ye(ke, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (He) => {
                a(i, { bodyJson: He.target.value });
              }
            }), A(xe), H(ie, xe);
          };
          ae(ee, (ie) => {
            n().bodyType === "json" && ie(ce);
          });
        }
        var J = T(ee, 2);
        {
          var ve = (ie) => {
            var xe = ow(), ke = I(xe);
            Ye(ke, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (He) => {
                a(i, { bodyRaw: He.target.value });
              }
            }), A(xe), H(ie, xe);
          };
          ae(J, (ie) => {
            n().bodyType === "raw" && ie(ve);
          });
        }
        var ne = T(J, 2), _e = I(ne);
        Le(_e, {
          level: 3,
          mt: "10px",
          children: (ie, xe) => {
            we();
            var ke = Se("输出参数");
            H(ie, ke);
          },
          $$slots: { default: !0 }
        });
        var R = T(_e, 2);
        Me(R, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (ie, xe) => {
            var ke = iw();
            H(ie, ke);
          },
          $$slots: { default: !0 }
        }), A(ne);
        var Je = T(ne, 2);
        Tn(Je, {}), H(l, d);
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
var lw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), uw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), cw = /* @__PURE__ */ U('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const dw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Nd(e, t) {
  le(t, !0), Te(e, dw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ge(), { addParameter: i } = tn(), s = Dn();
  let a = /* @__PURE__ */ Ee(Mt([]));
  Ln(async () => {
    const u = await s.provider?.knowledge?.();
    c(a).push(...u || []);
  });
  const { updateNodeData: l } = ct();
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
      icon: (u) => {
        var d = lw();
        H(u, d);
      },
      children: (u, d) => {
        var p = cw(), f = se(p), g = I(f);
        Le(g, {
          level: 3,
          children: (k, L) => {
            we();
            var x = Se("输入参数");
            H(k, x);
          },
          $$slots: { default: !0 }
        });
        var h = T(g, 2);
        Me(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (k, L) => {
            var x = uw();
            H(k, x);
          },
          $$slots: { default: !0 }
        }), A(f);
        var y = T(f, 2);
        gt(y, {});
        var $ = T(y, 2);
        Le($, {
          level: 3,
          mt: "10px",
          children: (k, L) => {
            we();
            var x = Se("知识库设置");
            H(k, x);
          },
          $$slots: { default: !0 }
        });
        var w = T($, 4), N = I(w);
        const b = /* @__PURE__ */ E(() => n().knowledgeId ? [n().knowledgeId] : []);
        Dt(N, {
          get items() {
            return c(a);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (k) => {
            const L = k.value;
            l(o, () => ({ knowledgeId: L }));
          },
          get value() {
            return c(b);
          }
        }), A(w);
        var C = T(w, 4), _ = I(C);
        Ue(_, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (k) => {
            const L = k.target.value;
            l(o, () => ({ keyword: L }));
          }
        }), A(C);
        var D = T(C, 4), z = I(D);
        const Z = /* @__PURE__ */ E(() => n().limit || "");
        Ue(z, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          onchange: (k) => {
            const L = k.target.value;
            l(o, () => ({ limit: L }));
          },
          get value() {
            return c(Z);
          }
        }), A(D);
        var j = T(D, 2), Y = I(j);
        Le(Y, {
          level: 3,
          mt: "10px",
          children: (k, L) => {
            we();
            var x = Se("输出参数");
            H(k, x);
          },
          $$slots: { default: !0 }
        }), A(j);
        var M = T(j, 2);
        Tn(M, {}), H(u, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue({
    get data() {
      return n();
    },
    set data(u) {
      n(u), v();
    }
  });
}
re(Nd, { data: {} }, [], [], !0);
var fw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), pw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), gw = /* @__PURE__ */ U('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const hw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Md(e, t) {
  le(t, !0), Te(e, hw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ge(), { addParameter: i } = tn(), s = Dn();
  let a = /* @__PURE__ */ Ee(Mt([]));
  Ln(async () => {
    const u = await s.provider?.searchEngine?.();
    c(a).push(...u || []);
  });
  const { updateNodeData: l } = ct();
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
      icon: (u) => {
        var d = fw();
        H(u, d);
      },
      children: (u, d) => {
        var p = gw(), f = se(p), g = I(f);
        Le(g, {
          level: 3,
          children: (M, k) => {
            we();
            var L = Se("输入参数");
            H(M, L);
          },
          $$slots: { default: !0 }
        });
        var h = T(g, 2);
        Me(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (M, k) => {
            var L = pw();
            H(M, L);
          },
          $$slots: { default: !0 }
        }), A(f);
        var y = T(f, 2);
        gt(y, {});
        var $ = T(y, 2);
        Le($, {
          level: 3,
          mt: "10px",
          children: (M, k) => {
            we();
            var L = Se("搜索引擎设置");
            H(M, L);
          },
          $$slots: { default: !0 }
        });
        var w = T($, 4), N = I(w);
        const b = /* @__PURE__ */ E(() => n().engine ? [n().engine] : []);
        Dt(N, {
          get items() {
            return c(a);
          },
          style: "width: 100%",
          placeholder: "请选择搜索引擎",
          onSelect: (M) => {
            const k = M.value;
            l(o, () => ({ engine: k }));
          },
          get value() {
            return c(b);
          }
        }), A(w);
        var C = T(w, 4), _ = I(C);
        Ue(_, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (M) => {
            const k = M.target.value;
            l(o, () => ({ keyword: k }));
          }
        }), A(C);
        var D = T(C, 4), z = I(D);
        Ue(z, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (M) => {
            const k = M.target.value;
            l(o, () => ({ limit: k }));
          }
        }), A(D);
        var Z = T(D, 2), j = I(Z);
        Le(j, {
          level: 3,
          mt: "10px",
          children: (M, k) => {
            we();
            var L = Se("输出参数");
            H(M, L);
          },
          $$slots: { default: !0 }
        }), A(Z);
        var Y = T(Z, 2);
        Tn(Y, {}), H(u, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue({
    get data() {
      return n();
    },
    set data(u) {
      n(u), v();
    }
  });
}
re(Md, { data: {} }, [], [], !0);
var vw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), mw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), yw = /* @__PURE__ */ U('<div class="heading svelte-1eqcy61"><!></div> <!> <div class="heading svelte-1eqcy61"><!> <!></div> <!>', 1);
const ww = {
  hash: "svelte-1eqcy61",
  code: ".heading.svelte-1eqcy61 {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function Pd(e, t) {
  le(t, !0), Te(e, ww);
  const n = m(t, "data", 7), r = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ge(), { addParameter: i } = tn();
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
        H(s, a);
      },
      handle: (s) => {
        Mn(s, {
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
        var l = yw(), u = se(l), d = I(u);
        Le(d, {
          level: 3,
          children: ($, w) => {
            we();
            var N = Se("循环变量");
            H($, N);
          },
          $$slots: { default: !0 }
        }), A(u);
        var p = T(u, 2);
        gt(p, { dataKeyName: "loopVars" });
        var f = T(p, 2), g = I(f);
        Le(g, {
          level: 3,
          children: ($, w) => {
            we();
            var N = Se("输出参数");
            H($, N);
          },
          $$slots: { default: !0 }
        });
        var h = T(g, 2);
        Me(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: ($, w) => {
            var N = mw();
            H($, N);
          },
          $$slots: { default: !0 }
        }), A(f);
        var y = T(f, 2);
        gt(y, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), H(s, l);
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
re(Pd, { data: {} }, [], [], !0);
const bw = {
  startNode: yd,
  codeNode: kd,
  llmNode: _d,
  templateNode: Sd,
  httpNode: Ed,
  knowledgeNode: Nd,
  searchEngineNode: Md,
  loopNode: Pd,
  endNode: Cd
};
var xw = /* @__PURE__ */ U("<!> ", 1);
function rs(e, t) {
  le(t, !0);
  const n = m(t, "icon", 7), r = m(t, "title", 7), o = m(t, "type", 7), i = m(t, "description", 7), s = m(t, "extra", 7);
  return Me(e, {
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
      var u = xw(), d = se(u);
      Ss(d, n);
      var p = T(d);
      $e(() => Ae(p, ` ${r() ?? ""}`)), H(a, u);
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
var Cw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), $w = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), _w = /* @__PURE__ */ U('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Dd(e, t) {
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
  ], s = [], a = Dn(), l = a.customNodes;
  if (l) {
    const w = Object.keys(l).sort((N, b) => (l[N].sortNo || 0) - (l[b].sortNo || 0));
    for (let N of w)
      l[N].group === "base" ? o.push({ type: N, ...l[N] }) : s.push({
        icon: l[N].icon,
        title: l[N].title,
        type: N
      });
    o.sort((N, b) => (N.sortNo || 0) - (b.sortNo || 0));
  }
  if (a.hiddenNodes) {
    const w = typeof a.hiddenNodes == "function" ? a.hiddenNodes() : a.hiddenNodes;
    if (Array.isArray(w)) {
      for (let N of w)
        for (let b = 0; b < o.length; b++)
          if (o[b].type === N) {
            o.splice(b, 1);
            break;
          }
    }
  }
  var u = _w(), d = I(u), p = I(d), f = I(p);
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
  lt(h, 21, () => o, pr, (w, N) => {
    rs(w, Ie(() => c(N)));
  }), A(h);
  var y = T(h, 2);
  lt(y, 21, () => s, pr, (w, N) => {
    rs(w, Ie(() => c(N)));
  }), A(y), A(g), A(d);
  var $ = T(d, 2);
  Me($, {
    onclick: () => {
      K(r, c(r) ? "" : "show", !0);
    },
    children: (w, N) => {
      var b = Ve(), C = se(b);
      {
        var _ = (z) => {
          var Z = Cw();
          H(z, Z);
        }, D = (z) => {
          var Z = $w();
          H(z, Z);
        };
        ae(C, (z) => {
          c(r) === "show" ? z(_) : z(D, !1);
        });
      }
      H(w, b);
    },
    $$slots: { default: !0 }
  }), A(u), $e(() => {
    mt(u, 1, `tf-toolbar ${c(r) ?? ""}`), ut(h, `display: ${c(n) === "base" ? "flex" : "none"}`), ut(y, `display: ${c(n) !== "base" ? "flex" : "none"}`);
  }), H(e, u), ue();
}
re(Dd, {}, [], [], !0);
const kw = () => ({ getNode: (e) => Ke.getNode(e) }), Sw = () => ({ ensureParentInNodesBefore: (e, t) => {
  Ke.updateNodes((n) => {
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
} }), Ew = () => ({ getEdgesByTarget: (e) => Ke.getEdges().filter((t) => t.target === e) });
var Nw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Mw = /* @__PURE__ */ U('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Pw = /* @__PURE__ */ U('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Dw = /* @__PURE__ */ U('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Vw = /* @__PURE__ */ U('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input/></div></div>', 1), Hw = /* @__PURE__ */ U('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Lw = /* @__PURE__ */ U('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Ow = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Tw = /* @__PURE__ */ U('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), zw = /* @__PURE__ */ U("<!> <!> <div></div> <!>", 1);
const Aw = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Vd(e, t) {
  le(t, !0), Te(e, Aw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ge(), { addParameter: i } = tn(), s = ct(), { updateNodeData: a } = s, l = ($) => {
    a(o, $);
  }, u = ($, w) => {
    l({ [$]: w.target?.value });
  }, d = { ...r, id: o, data: n() }, p = document.createElement("div"), f = Dn().customNodes[t.type];
  f.render?.(p, d, s);
  const g = f.forms;
  let h;
  je(() => {
    n().expand && h && h.append(p);
  }), je(() => {
    n() && f.onUpdate?.(p, { ...d, data: n() });
  }), je(() => {
    !n().parameters && f.parameters && l({
      parameters: Go(JSON.parse(JSON.stringify(f.parameters)))
    });
  }), je(() => {
    !n().outputDefs && f.outputDefs && l({
      outputDefs: Go(JSON.parse(JSON.stringify(f.outputDefs)))
    });
  });
  const y = /* @__PURE__ */ E(() => ({ ...n(), description: f.description }));
  return It(e, Ie(
    {
      get data() {
        return c(y);
      }
    },
    () => r,
    {
      icon: ($) => {
        var w = Ve(), N = se(w);
        Ss(N, () => f.icon), H($, w);
      },
      children: ($, w) => {
        var N = zw(), b = se(N);
        {
          var C = (Y) => {
            var M = Mw(), k = se(M), L = I(k);
            Le(L, {
              level: 3,
              children: (O, q) => {
                we();
                var V = Se("输入参数");
                H(O, V);
              },
              $$slots: { default: !0 }
            });
            var x = T(L, 2);
            {
              var S = (O) => {
                Me(O, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    i(o);
                  },
                  children: (q, V) => {
                    var B = Nw();
                    H(q, B);
                  },
                  $$slots: { default: !0 }
                });
              };
              ae(x, (O) => {
                f.parametersAddEnable !== !1 && O(S);
              });
            }
            A(k);
            var P = T(k, 2);
            gt(P, {}), H(Y, M);
          };
          ae(b, (Y) => {
            f.parametersEnable !== !1 && Y(C);
          });
        }
        var _ = T(b, 2);
        {
          var D = (Y) => {
            var M = Ve(), k = se(M);
            lt(k, 17, () => g, pr, (L, x) => {
              var S = Ve(), P = se(S);
              {
                var O = (V) => {
                  var B = Pw(), W = se(B), G = I(W, !0);
                  A(W);
                  var Q = T(W, 2), X = I(Q);
                  const de = /* @__PURE__ */ E(() => n()[c(x).name] || c(x).defaultValue);
                  Ue(X, Ie(
                    {
                      get placeholder() {
                        return c(x).placeholder;
                      },
                      style: "width: 100%",
                      get value() {
                        return c(de);
                      }
                    },
                    () => c(x).attrs,
                    {
                      onchange: (te) => {
                        u(c(x).name, te);
                      }
                    }
                  )), A(Q), $e(() => Ae(G, c(x).label)), H(V, B);
                }, q = (V, B) => {
                  {
                    var W = (Q) => {
                      var X = Dw(), de = se(X), te = I(de, !0);
                      A(de);
                      var pe = T(de, 2), F = I(pe);
                      const Ce = /* @__PURE__ */ E(() => n()[c(x).name] || c(x).defaultValue);
                      Ye(F, Ie(
                        {
                          rows: 3,
                          get placeholder() {
                            return c(x).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return c(Ce);
                          }
                        },
                        () => c(x).attrs,
                        {
                          onchange: (ge) => {
                            u(c(x).name, ge);
                          }
                        }
                      )), A(pe), $e(() => Ae(te, c(x).label)), H(Q, X);
                    }, G = (Q, X) => {
                      {
                        var de = (pe) => {
                          var F = Vw(), Ce = se(F), ge = I(Ce, !0);
                          A(Ce);
                          var oe = T(Ce, 2), ee = I(oe), ce = I(ee), J = I(ce);
                          A(ce);
                          var ve = T(ce, 2);
                          dn(ve);
                          var ne = (_e) => l({ [c(x).name]: parseFloat(_e.target.value) });
                          Fe(
                            ve,
                            () => ({
                              class: "nodrag",
                              type: "range",
                              ...c(x).attrs,
                              value: n()[c(x).name] ?? c(x).defaultValue,
                              oninput: ne
                            }),
                            void 0,
                            "svelte-q0cqsa"
                          ), A(ee), A(oe), $e(() => {
                            Ae(ge, c(x).label), Ae(J, `${c(x).description ?? ""}: ${n()[c(x).name] ?? c(x).defaultValue ?? ""}`);
                          }), H(pe, F);
                        }, te = (pe, F) => {
                          {
                            var Ce = (oe) => {
                              var ee = Hw(), ce = se(ee), J = I(ce, !0);
                              A(ce);
                              var ve = T(ce, 2), ne = I(ve);
                              const _e = /* @__PURE__ */ E(() => c(x).options || []), R = /* @__PURE__ */ E(() => n()[c(x).name] ? [n()[c(x).name]] : [c(x).defaultValue]);
                              Dt(ne, {
                                get items() {
                                  return c(_e);
                                },
                                style: "width: 100%",
                                get placeholder() {
                                  return c(x).placeholder;
                                },
                                onSelect: (Je) => {
                                  const ie = Je.value;
                                  l({ [c(x).name]: ie });
                                },
                                get value() {
                                  return c(R);
                                }
                              }), A(ve), $e(() => Ae(J, c(x).label)), H(oe, ee);
                            }, ge = (oe, ee) => {
                              {
                                var ce = (ve) => {
                                  var ne = Lw(), _e = se(ne), R = I(_e, !0);
                                  A(_e);
                                  var Je = T(_e, 2), ie = I(Je);
                                  const xe = /* @__PURE__ */ E(() => c(x).chosen?.buttonText);
                                  ed(ie, {
                                    style: "width: 100%",
                                    get placeholder() {
                                      return c(x).placeholder;
                                    },
                                    get buttonText() {
                                      return c(xe);
                                    },
                                    onChosen: (ke, He, dt) => {
                                      c(x).chosen?.onChosen?.(l, ke, He, dt);
                                    },
                                    get value() {
                                      return n()[c(x).chosen?.valueDataKey || ""];
                                    },
                                    get label() {
                                      return n()[c(x).chosen?.labelDataKey || ""];
                                    }
                                  }), A(Je), $e(() => Ae(R, c(x).label)), H(ve, ne);
                                }, J = (ve, ne) => {
                                  {
                                    var _e = (R) => {
                                      Le(R, Ie({ level: 3, mt: "10px" }, () => c(x).attrs, {
                                        children: (Je, ie) => {
                                          we();
                                          var xe = Se();
                                          $e(() => Ae(xe, c(x).label)), H(Je, xe);
                                        },
                                        $$slots: { default: !0 }
                                      }));
                                    };
                                    ae(
                                      ve,
                                      (R) => {
                                        c(x).type === "heading" && R(_e);
                                      },
                                      ne
                                    );
                                  }
                                };
                                ae(
                                  oe,
                                  (ve) => {
                                    c(x).type === "chosen" ? ve(ce) : ve(J, !1);
                                  },
                                  ee
                                );
                              }
                            };
                            ae(
                              pe,
                              (oe) => {
                                c(x).type === "select" ? oe(Ce) : oe(ge, !1);
                              },
                              F
                            );
                          }
                        };
                        ae(
                          Q,
                          (pe) => {
                            c(x).type === "slider" ? pe(de) : pe(te, !1);
                          },
                          X
                        );
                      }
                    };
                    ae(
                      V,
                      (Q) => {
                        c(x).type === "textarea" ? Q(W) : Q(G, !1);
                      },
                      B
                    );
                  }
                };
                ae(P, (V) => {
                  c(x).type === "input" ? V(O) : V(q, !1);
                });
              }
              H(L, S);
            }), H(Y, M);
          };
          ae(_, (Y) => {
            g && Y(D);
          });
        }
        var z = T(_, 2);
        Pt(z, (Y) => h = Y, () => h);
        var Z = T(z, 2);
        {
          var j = (Y) => {
            var M = Tw(), k = se(M), L = I(k);
            Le(L, {
              level: 3,
              mt: "10px",
              children: (O, q) => {
                we();
                var V = Se("输出参数");
                H(O, V);
              },
              $$slots: { default: !0 }
            });
            var x = T(L, 2);
            {
              var S = (O) => {
                Me(O, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    i(o, "outputDefs");
                  },
                  children: (q, V) => {
                    var B = Ow();
                    H(q, B);
                  },
                  $$slots: { default: !0 }
                });
              };
              ae(x, (O) => {
                f.outputDefsAddEnable !== !1 && O(S);
              });
            }
            A(k);
            var P = T(k, 2);
            Tn(P, {}), H(Y, M);
          };
          ae(Z, (Y) => {
            f.outputDefsEnable !== !1 && Y(j);
          });
        }
        $e(() => {
          ut(z, f.rootStyle || ""), mt(z, 1, wn(f.rootClass), "svelte-q0cqsa");
        }), H($, N);
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
re(Vd, { data: {} }, [], [], !0);
const Iw = () => ({ updateEdgeData: (e, t, n) => {
  const r = Ke.getEdge(e);
  if (!r)
    return;
  const o = typeof t == "function" ? t(r) : t;
  r.data = n?.replace ? o : { ...r.data, ...o }, Ke.updateEdges((i) => i.map((s) => s.id === e ? r : s));
} }), qw = () => ({ deleteEdge: (e) => {
  Ke.removeEdge(e);
} });
var Zw = /* @__PURE__ */ U('<div class="panel-content svelte-80qc4q"><div>边属性设置</div> <div class="setting-title svelte-80qc4q">边条件设置</div> <div class="setting-item svelte-80qc4q"><!></div> <div class="setting-item svelte-80qc4q" style="padding: 8px 0"><!> <!></div></div>'), Bw = /* @__PURE__ */ U("<!> <!> <!> <!>", 1), Rw = /* @__PURE__ */ U('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const Kw = {
  hash: "svelte-80qc4q",
  code: ".panel-content.svelte-80qc4q {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-80qc4q {margin:10px 0;font-size:12px;color:#999;}.setting-item.svelte-80qc4q {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function Hd(e, t) {
  le(t, !0), Te(e, Kw);
  const n = m(t, "onInit", 7), r = ct();
  n()(r);
  let o = /* @__PURE__ */ Ee(!1), i = /* @__PURE__ */ Ee(null);
  const { updateEdgeData: s } = Iw(), a = (S) => {
    S.preventDefault(), S.dataTransfer && (S.dataTransfer.dropEffect = "move");
  }, l = (S) => {
    S.preventDefault();
    const P = r.screenToFlowPosition({ x: S.clientX - 250, y: S.clientY - 100 }), O = S.dataTransfer?.getData("application/tinyflow");
    if (!O)
      return;
    const q = JSON.parse(O), V = { id: `node_${Jn()}`, position: P, data: {}, ...q };
    Ke.addNode(V), Ke.selectNodeOnly(V.id);
  }, { getNode: u } = kw(), d = (S) => {
    const P = u(S.source), O = u(S.target);
    if (S.sourceHandle === "loop_handle" || P.parentId) {
      const q = r.getEdges();
      for (let V of q)
        if (V.target === S.target) {
          const B = u(V.source);
          if (S.sourceHandle === "loop_handle" && B.parentId !== P.id || P.parentId && B.parentId !== P.parentId)
            return !1;
        }
    }
    return !(!P.parentId && O.parentId && O.parentId !== P.id);
  }, { ensureParentInNodesBefore: p } = Sw(), f = (S, P) => {
    if (!P.isValid)
      return;
    const O = P.toNode;
    if (O.parentId)
      return;
    const q = P.fromNode, V = P.fromHandle, B = { position: { ...O.position } };
    if (V.id === "loop_handle" ? B.parentId = q.id : q.parentId && (B.parentId = q.parentId), B.parentId) {
      const W = u(B.parentId);
      B.position = {
        x: O.position.x - W.position.x,
        y: O.position.y - W.position.y
      }, p(B.parentId, O.id), r.updateNode(O.id, B);
    }
    setTimeout(() => {
      Ke.getEdges().forEach((W) => {
        W.target === O.id && W.source == q.id && (K(o, !0), K(i, W, !0));
      });
    });
  }, { getEdgesByTarget: g } = Ew(), h = (S) => {
    S.edges.forEach((P) => {
      P.id === c(i)?.id && (K(i, null), K(o, !1));
      const O = u(P.target);
      if (O && O.parentId) {
        const q = g(P.target), V = u(O.parentId);
        if (q.length === 0)
          r.updateNode(O.id, {
            parentId: void 0,
            position: {
              x: O.position.x + V.position.x,
              y: O.position.y + V.position.y
            }
          });
        else {
          let B = !1;
          for (let W = 0; W < q.length; W++) {
            const G = q[W], Q = u(G.source);
            if (Q.parentId || Q.type === "loopNode") {
              B = !0;
              break;
            }
          }
          B || r.updateNode(O.id, {
            parentId: void 0,
            position: {
              x: O.position.x + V.position.x,
              y: O.position.y + V.position.y
            }
          });
        }
      }
    });
  }, { deleteEdge: y } = qw(), $ = (S, P) => {
  }, w = (S) => {
  }, N = {
    // ...nodeTypes
  }, b = Dn().customNodes;
  if (b)
    for (let S of Object.keys(b))
      N[S] = Vd;
  Dn().onDataChange;
  var C = Rw(), _ = I(C);
  const D = /* @__PURE__ */ E(() => ({ ...bw, ...N }));
  var z = Ke.getNodes, Z = Ke.setNodes, j = Ke.getEdges, Y = Ke.setEdges, M = Ke.getViewport, k = Ke.setViewport;
  const L = /* @__PURE__ */ E(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: Yr.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  Ic(_, {
    get nodeTypes() {
      return c(D);
    },
    get nodes() {
      return z();
    },
    set nodes(S) {
      Z(S);
    },
    get edges() {
      return j();
    },
    set edges(S) {
      Y(S);
    },
    get viewport() {
      return M();
    },
    set viewport(S) {
      k(S);
    },
    class: "tinyflow-logo",
    ondrop: l,
    ondragover: a,
    isValidConnection: d,
    onconnectend: f,
    onconnectstart: $,
    onconnect: w,
    connectionRadius: 50,
    onedgeclick: (S) => {
      K(o, !0), K(i, S.edge, !0);
    },
    onbeforeconnect: (S) => ({ ...S, id: Jn() }),
    ondelete: h,
    onclick: (S) => {
      const P = S.target;
      P.classList.contains("svelte-flow__edge-interaction") || P.classList.contains("panel-content") || P.closest(".panel-content") || (K(o, !1), K(i, null));
    },
    get defaultEdgeOptions() {
      return c(L);
    },
    children: (S, P) => {
      var O = Bw(), q = se(O);
      Fc(q, {});
      var V = T(q, 2);
      jc(V, {});
      var B = T(V, 2);
      Gc(B, {});
      var W = T(B, 2);
      {
        var G = (Q) => {
          co(Q, {
            children: (X, de) => {
              var te = Zw(), pe = T(I(te), 4), F = I(pe);
              const Ce = /* @__PURE__ */ E(() => c(i)?.data?.condition);
              Ye(F, {
                rows: 3,
                placeholder: "请输入边条件",
                style: "width: 100%",
                get value() {
                  return c(Ce);
                },
                onchange: (ce) => {
                  c(i) && s(c(i).id, { condition: ce.target?.value });
                }
              }), A(pe);
              var ge = T(pe, 2), oe = I(ge);
              Me(oe, {
                onclick: () => {
                  y(c(i)?.id), K(o, !1);
                },
                children: (ce, J) => {
                  we();
                  var ve = Se("删除");
                  H(ce, ve);
                },
                $$slots: { default: !0 }
              });
              var ee = T(oe, 2);
              Me(ee, {
                primary: !0,
                onclick: () => {
                  K(o, !1);
                },
                children: (ce, J) => {
                  we();
                  var ve = Se("保存");
                  H(ce, ve);
                },
                $$slots: { default: !0 }
              }), A(ge), A(te), H(X, te);
            },
            $$slots: { default: !0 }
          });
        };
        ae(W, (Q) => {
          c(o) && Q(G);
        });
      }
      H(S, O);
    },
    $$slots: { default: !0 }
  });
  var x = T(_, 2);
  return Dd(x, {}), A(C), H(e, C), ue({
    get onInit() {
      return n();
    },
    set onInit(S) {
      n(S), v();
    }
  });
}
re(Hd, { onInit: {} }, [], [], !0);
function Yw(e, t) {
  le(t, !0);
  const n = m(t, "options", 7), r = m(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  return Ke.init(o?.nodes || [], o?.edges || []), dr("tinyflow_options", n()), qc(e, {
    children: (i, s) => {
      Hd(i, {
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
customElements.define("tinyflow-component", re(Yw, { options: {}, onInit: {} }, [], [], !1));
const Xw = /* @__PURE__ */ Od({
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
    const n = e, r = Td(null);
    let o = null;
    return zd(() => {
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
  Xw as Tinyflow
};
//# sourceMappingURL=index.js.map
