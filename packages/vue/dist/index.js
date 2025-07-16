import { defineComponent as Td, ref as Ad, onMounted as Id, onUnmounted as Zd, createElementBlock as Bd, openBlock as qd, normalizeStyle as Kd, normalizeClass as Rd } from "vue";
const jd = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(jd);
const ss = 1, as = 2, pl = 4, Wd = 8, Xd = 16, Yd = 1, Fd = 2, gl = 4, Jd = 8, Ud = 16, hl = 1, Gd = 2, ls = "[", us = "[!", cs = "]", qn = {}, rt = Symbol(), Qd = "http://www.w3.org/1999/xhtml", ef = "http://www.w3.org/2000/svg", tf = "@attach", nf = !1;
var Ur = Array.isArray, rf = Array.prototype.indexOf, ds = Array.from, Do = Object.keys, Mo = Object.defineProperty, un = Object.getOwnPropertyDescriptor, vl = Object.getOwnPropertyDescriptors, ml = Object.prototype, of = Array.prototype, Qo = Object.getPrototypeOf, ra = Object.isExtensible;
function _r(e) {
  return typeof e == "function";
}
const tt = () => {
};
function sf(e) {
  return e();
}
function zo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function ut(e, t, n = !1) {
  return e === void 0 ? n ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
function Gr(e, t) {
  if (Array.isArray(e))
    return e;
  if (t === void 0 || !(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const kt = 2, fs = 4, Qr = 8, ps = 16, vn = 32, Qn = 64, gs = 128, xt = 256, Oo = 512, Ct = 1024, fn = 2048, er = 4096, cn = 8192, ei = 16384, yl = 32768, xr = 65536, oa = 1 << 17, af = 1 << 18, wl = 1 << 19, zi = 1 << 20, hs = 1 << 21, jt = Symbol("$state"), vs = Symbol("legacy props"), lf = Symbol(""), bl = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), uf = 1, ms = 3, cr = 8;
function xl(e) {
  return e === this.v;
}
function $l(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function kl(e) {
  return !$l(e, this.v);
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
function Cl(e, t = !1) {
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
    if (Ur(e)) {
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
    if (Qo(e) === ml) {
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
let Ae = null;
function ia(e) {
  Ae = e;
}
function Nn(e) {
  return (
    /** @type {T} */
    _l().get(e)
  );
}
function dr(e, t) {
  return _l().set(e, t), t;
}
function ue(e, t = !1, n) {
  Ae = {
    p: Ae,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  }, $r && !t && (Ae.l = {
    s: null,
    u: null,
    r1: [],
    r2: Xn(!1)
  });
}
function ce(e) {
  var t = (
    /** @type {ComponentContext} */
    Ae
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Hl(r);
  }
  return e !== void 0 && (t.x = e), Ae = t.p, e ?? /** @type {T} */
  {};
}
function ti() {
  return !$r || Ae !== null && Ae.l === null;
}
function _l(e) {
  return Ae === null && ys(), Ae.c ??= new Map($f(Ae) || void 0);
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
function Pt(e) {
  if (typeof e != "object" || e === null || jt in e)
    return e;
  const t = Qo(e);
  if (t !== ml && t !== of)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Ur(e), o = /* @__PURE__ */ Ce(0), i = jn, s = (a) => {
    if (jn === i)
      return a();
    var l = De, u = jn;
    Pn(null), ua(i);
    var d = a();
    return Pn(l), ua(u), d;
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
        }) : j(d, u.value, !0), !0;
      },
      deleteProperty(a, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in a) {
            const f = s(() => /* @__PURE__ */ Ce(rt));
            n.set(l, f), Co(o);
          }
        } else {
          if (r && typeof l == "string") {
            var d = (
              /** @type {Source<number>} */
              n.get("length")
            ), p = Number(l);
            Number.isInteger(p) && p < d.v && j(d, p);
          }
          j(u, rt), Co(o);
        }
        return !0;
      },
      get(a, l, u) {
        if (l === jt)
          return e;
        var d = n.get(l), p = l in a;
        if (d === void 0 && (!p || un(a, l)?.writable) && (d = s(() => {
          var g = Pt(p ? a[l] : rt), h = /* @__PURE__ */ Ce(g);
          return h;
        }), n.set(l, d)), d !== void 0) {
          var f = c(d);
          return f === rt ? void 0 : f;
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
          if (p !== void 0 && f !== rt)
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
        var u = n.get(l), d = u !== void 0 && u.v !== rt || Reflect.has(a, l);
        if (u !== void 0 || Ne !== null && (!d || un(a, l)?.writable)) {
          u === void 0 && (u = s(() => {
            var f = d ? Pt(a[l]) : rt, g = /* @__PURE__ */ Ce(f);
            return g;
          }), n.set(l, u));
          var p = c(u);
          if (p === rt)
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
            h !== void 0 ? j(h, rt) : g in a && (h = s(() => /* @__PURE__ */ Ce(rt)), n.set(g + "", h));
          }
        if (p === void 0)
          (!f || un(a, l)?.writable) && (p = s(() => /* @__PURE__ */ Ce(void 0)), j(p, Pt(u)), n.set(l, p));
        else {
          f = p.v !== rt;
          var y = s(() => Pt(u));
          j(p, y);
        }
        var C = Reflect.getOwnPropertyDescriptor(a, l);
        if (C?.set && C.set.call(d, u), !f) {
          if (r && typeof l == "string") {
            var b = (
              /** @type {Source<number>} */
              n.get("length")
            ), L = Number(l);
            Number.isInteger(L) && L >= b.v && j(b, L + 1);
          }
          Co(o);
        }
        return !0;
      },
      ownKeys(a) {
        c(o);
        var l = Reflect.ownKeys(a).filter((p) => {
          var f = n.get(p);
          return f === void 0 || f.v !== rt;
        });
        for (var [u, d] of n)
          d.v !== rt && !(u in a) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        mf();
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
function kf(e, t) {
  return Object.is(sa(e), sa(t));
}
// @__NO_SIDE_EFFECTS__
function kr(e) {
  var t = kt | fn, n = De !== null && (De.f & kt) !== 0 ? (
    /** @type {Derived} */
    De
  ) : null;
  return Ne === null || n !== null && (n.f & xt) !== 0 ? t |= xt : Ne.f |= wl, {
    ctx: Ae,
    deps: null,
    effects: null,
    equals: xl,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      rt
    ),
    wv: 0,
    parent: n ?? Ne,
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
  return t.equals = kl, t;
}
function Sl(e) {
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
  var t, n = Ne;
  Vn(Cf(e));
  try {
    Sl(e), t = Jl(e);
  } finally {
    Vn(n);
  }
  return t;
}
function El(e) {
  var t = bs(e);
  if (e.equals(t) || (e.v = t, e.wv = Yl()), !Ln) {
    var n = (_n || (e.f & xt) !== 0) && e.deps !== null ? er : Ct;
    Ut(e, n);
  }
}
const Kn = /* @__PURE__ */ new Map();
function Xn(e, t) {
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
function Ce(e, t) {
  const n = Xn(e);
  return Xl(n), n;
}
// @__NO_SIDE_EFFECTS__
function Nl(e, t = !1, n = !0) {
  const r = Xn(e);
  return t || (r.equals = kl), $r && n && Ae !== null && Ae.l !== null && (Ae.l.s ??= []).push(r), r;
}
function j(e, t, n = !1) {
  De !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Mt || (De.f & oa) !== 0) && ti() && (De.f & (kt | ps | oa)) !== 0 && !dn?.includes(e) && yf();
  let r = n ? Pt(t) : t;
  return Oi(e, r);
}
function Oi(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Ln ? Kn.set(e, t) : Kn.set(e, n), e.v = t, (e.f & kt) !== 0 && ((e.f & fn) !== 0 && bs(
      /** @type {Derived} */
      e
    ), Ut(e, (e.f & xt) === 0 ? Ct : er)), e.wv = Yl(), Ll(e, fn), ti() && Ne !== null && (Ne.f & Ct) !== 0 && (Ne.f & (vn | Qn)) === 0 && (Nt === null ? zf([e]) : Nt.push(e));
  }
  return t;
}
function aa(e, t = 1) {
  var n = c(e), r = t === 1 ? n++ : n--;
  return j(e, n), r;
}
function Co(e) {
  j(e, e.v + 1);
}
function Ll(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = ti(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      (a & fn) === 0 && (!r && s === Ne || (Ut(s, t), (a & (Ct | xt)) !== 0 && ((a & kt) !== 0 ? Ll(
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
function it(e) {
  if (e === null)
    throw eo(), qn;
  return _e = e;
}
function pn() {
  return it(
    /** @type {TemplateNode} */
    /* @__PURE__ */ en(_e)
  );
}
function A(e) {
  if (be) {
    if (/* @__PURE__ */ en(_e) !== null)
      throw eo(), qn;
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
function Hi() {
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
function Pl(e) {
  if (!e || e.nodeType !== cr)
    throw eo(), qn;
  return (
    /** @type {Comment} */
    e.data
  );
}
var pt, Vl, Dl, Ml;
function Ti() {
  if (pt === void 0) {
    pt = window, Vl = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Dl = un(t, "firstChild").get, Ml = un(t, "nextSibling").get, ra(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), ra(n) && (n.__t = void 0);
  }
}
function gn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Fe(e) {
  return Dl.call(e);
}
// @__NO_SIDE_EFFECTS__
function en(e) {
  return Ml.call(e);
}
function Z(e, t) {
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
    return n?.before(r), it(r), r;
  }
  return it(n), n;
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
function O(e, t = 1, n = !1) {
  let r = be ? _e : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ en(r);
  if (!be)
    return r;
  if (n && r?.nodeType !== ms) {
    var i = gn();
    return r === null ? o?.after(i) : r.before(i), it(i), i;
  }
  return it(r), /** @type {TemplateNode} */
  r;
}
function xs(e) {
  e.textContent = "";
}
function zl(e) {
  Ne === null && De === null && ff(), De !== null && (De.f & xt) !== 0 && Ne === null && df(), Ln && cf();
}
function Sf(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function mn(e, t, n, r = !0) {
  var o = Ne, i = {
    ctx: Ae,
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
      throw mt(i), l;
    }
  else t !== null && ri(i);
  var s = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (wl | gs)) === 0;
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
  return De !== null && !Mt;
}
function Ol(e) {
  const t = mn(Qr, null, !1);
  return Ut(t, Ct), t.teardown = e, t;
}
function Re(e) {
  if (zl(), !De && Ne && (Ne.f & vn) !== 0) {
    var t = (
      /** @type {ComponentContext} */
      Ae
    );
    (t.e ??= []).push(e);
  } else
    return Hl(e);
}
function Hl(e) {
  return mn(fs | hs, e, !1);
}
function Tl(e) {
  return zl(), mn(Qr | hs, e, !0);
}
function $s(e) {
  const t = mn(Qn, e, !0);
  return () => {
    mt(t);
  };
}
function Nf(e) {
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
function Jt(e, t = !0) {
  return mn(Qr | vn, e, !0, t);
}
function Al(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Ln, r = De;
    la(!0), Pn(null);
    try {
      t.call(null);
    } finally {
      la(n), Pn(r);
    }
  }
}
function Il(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    n.ac?.abort(bl);
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
  (t || (e.f & af) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (Zl(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), Il(e, t && !n), To(e, 0), Ut(e, ei);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  Al(e);
  var o = e.parent;
  o !== null && o.first !== null && Bl(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function Zl(e, t) {
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
  ks(e, n, !0), ql(n, () => {
    mt(e), t && t();
  });
}
function ql(e, t) {
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
function zr(e) {
  Kl(e, !0);
}
function Kl(e, t) {
  if ((e.f & cn) !== 0) {
    e.f ^= cn;
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & xr) !== 0 || (n.f & vn) !== 0;
      Kl(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
const Pf = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Or = [], Hr = [];
function Rl() {
  var e = Or;
  Or = [], zo(e);
}
function jl() {
  var e = Hr;
  Hr = [], zo(e);
}
function ro(e) {
  Or.length === 0 && queueMicrotask(Rl), Or.push(e);
}
function Vf(e) {
  Hr.length === 0 && Pf(jl), Hr.push(e);
}
function Df() {
  Or.length > 0 && Rl(), Hr.length > 0 && jl();
}
function Mf(e) {
  var t = (
    /** @type {Effect} */
    Ne
  );
  if ((t.f & yl) === 0) {
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
let Tr = !1, Ar = null, Rn = !1, Ln = !1;
function la(e) {
  Ln = e;
}
let Dr = [], De = null, Mt = !1;
function Pn(e) {
  De = e;
}
let Ne = null;
function Vn(e) {
  Ne = e;
}
let dn = null;
function Xl(e) {
  De !== null && De.f & zi && (dn === null ? dn = [e] : dn.push(e));
}
let ct = null, wt = 0, Nt = null;
function zf(e) {
  Nt = e;
}
let Ho = 1, Ir = 0, jn = Ir;
function ua(e) {
  jn = e;
}
let _n = !1;
function Yl() {
  return ++Ho;
}
function ni(e) {
  var t = e.f;
  if ((t & fn) !== 0)
    return !0;
  if ((t & er) !== 0) {
    var n = e.deps, r = (t & xt) !== 0;
    if (n !== null) {
      var o, i, s = (t & Oo) !== 0, a = r && Ne !== null && !_n, l = n.length;
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
        ) && El(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!r || Ne !== null && !_n) && Ut(e, Ct);
  }
  return !1;
}
function Fl(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !dn?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & kt) !== 0 ? Fl(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? Ut(i, fn) : (i.f & Ct) !== 0 && Ut(i, er), ri(
        /** @type {Effect} */
        i
      ));
    }
}
function Jl(e) {
  var t = ct, n = wt, r = Nt, o = De, i = _n, s = dn, a = Ae, l = Mt, u = jn, d = e.f;
  ct = /** @type {null | Value[]} */
  null, wt = 0, Nt = null, _n = (d & xt) !== 0 && (Mt || !Rn || De === null), De = (d & (vn | Qn)) === 0 ? e : null, dn = null, ia(e.ctx), Mt = !1, jn = ++Ir, e.f |= zi, e.ac !== null && (e.ac.abort(bl), e.ac = null);
  try {
    var p = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (ct !== null) {
      var g;
      if (To(e, wt), f !== null && wt > 0)
        for (f.length = wt + ct.length, g = 0; g < ct.length; g++)
          f[wt + g] = ct[g];
      else
        e.deps = f = ct;
      if (!_n || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (d & kt) !== 0 && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (g = wt; g < f.length; g++)
          (f[g].reactions ??= []).push(e);
    } else f !== null && wt < f.length && (To(e, wt), f.length = wt);
    if (ti() && Nt !== null && !Mt && f !== null && (e.f & (kt | er | fn)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      Nt.length; g++)
        Fl(
          Nt[g],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (Ir++, Nt !== null && (r === null ? r = Nt : r.push(.../** @type {Source[]} */
    Nt))), p;
  } catch (h) {
    Mf(h);
  } finally {
    ct = t, wt = n, Nt = r, De = o, _n = i, dn = s, ia(a), Mt = l, jn = u, e.f ^= zi;
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
  (ct === null || !ct.includes(t)) && (Ut(t, er), (t.f & (xt | Oo)) === 0 && (t.f ^= Oo), Sl(
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
      Of(e, n[r]);
}
function Cs(e) {
  var t = e.f;
  if ((t & ei) === 0) {
    Ut(e, Ct);
    var n = Ne, r = Rn;
    Ne = e, Rn = !0;
    try {
      (t & ps) !== 0 ? Lf(e) : Il(e), Al(e);
      var o = Jl(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = Ho;
      var i;
      nf && wf && (e.f & fn) !== 0 && e.deps;
    } finally {
      Rn = r, Ne = n;
    }
  }
}
function Hf() {
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
      t++ > 1e3 && Hf();
      var n = Dr, r = n.length;
      Dr = [];
      for (var o = 0; o < r; o++) {
        var i = Af(n[o]);
        Tf(i);
      }
      Kn.clear();
    }
  } finally {
    Tr = !1, Rn = e, Ar = null;
  }
}
function Tf(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if ((r.f & (ei | cn)) === 0 && ni(r)) {
        var o = Ho;
        if (Cs(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? Bl(r) : r.fn = null), Ho > o && (r.f & hs) !== 0)
          break;
      }
    }
    for (; n < t; n += 1)
      ri(e[n]);
  }
}
function ri(e) {
  Tr || (Tr = !0, queueMicrotask(Ul));
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
      return Tr = !1, Ar = null, /** @type {T} */
      t;
    Tr = !0, Ul();
  }
}
async function If() {
  await Promise.resolve(), v();
}
function c(e) {
  var t = e.f, n = (t & kt) !== 0;
  if (De !== null && !Mt) {
    if (!dn?.includes(e)) {
      var r = De.deps;
      e.rv < Ir && (e.rv = Ir, ct === null && r !== null && r[wt] === e ? wt++ : ct === null ? ct = [e] : (!_n || !ct.includes(e)) && ct.push(e));
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
  e, ni(o) && El(o)), Ln) {
    if (Kn.has(e))
      return Kn.get(e);
    if (n) {
      o = /** @type {Derived} */
      e;
      var s = o.v;
      return ((o.f & Ct) !== 0 || Gl(o)) && (s = bs(o)), Kn.set(o, s), s;
    }
  }
  return e.v;
}
function Gl(e) {
  if (e.v === rt) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Kn.has(t) || (t.f & kt) !== 0 && Gl(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function et(e) {
  var t = Mt;
  try {
    return Mt = !0, e();
  } finally {
    Mt = t;
  }
}
const Zf = -7169;
function Ut(e, t) {
  e.f = e.f & Zf | t;
}
function Bf(e, t) {
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
function qf(e, t) {
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
let ca = !1;
function Rf() {
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
function jf(e) {
  var t = De, n = Ne;
  Pn(null), Vn(null);
  try {
    return e();
  } finally {
    Pn(t), Vn(n);
  }
}
const Ql = /* @__PURE__ */ new Set(), Ii = /* @__PURE__ */ new Set();
function Ss(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || Nr.call(t, i), !i.cancelBubble)
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
function da(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = Ss(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Ol(() => {
    t.removeEventListener(e, s, i);
  });
}
function yn(e) {
  for (var t = 0; t < e.length; t++)
    Ql.add(e[t]);
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
    var u = o.indexOf(t);
    if (u === -1)
      return;
    l <= u && (s = l);
  }
  if (i = /** @type {Element} */
  o[s] || e.target, i !== t) {
    Mo(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = De, p = Ne;
    Pn(null), Vn(null);
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
              var [C, ...b] = y;
              C.apply(i, [e, ...b]);
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
      e.__root = t, delete e.currentTarget, Pn(d), Vn(p);
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
    Ne
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Q(e, t) {
  var n = (t & hl) !== 0, r = (t & Gd) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (be)
      return vt(_e, null), _e;
    o === void 0 && (o = Es(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ Fe(o)));
    var s = (
      /** @type {TemplateNode} */
      r || Vl ? document.importNode(o, !0) : o.cloneNode(!0)
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
function Wf(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & hl) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
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
  return /* @__PURE__ */ Wf(e, t, "svg");
}
function $e(e = "") {
  if (!be) {
    var t = gn(e + "");
    return vt(t, t), t;
  }
  var n = _e;
  return n.nodeType !== ms && (n.before(n = gn()), it(n)), vt(n, n), n;
}
function Le() {
  if (be)
    return vt(_e, null), _e;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = gn();
  return e.append(t, n), vt(t, n), e;
}
function D(e, t) {
  if (be) {
    Ne.nodes_end = _e, pn();
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
function Ff(e) {
  return Yf.includes(e);
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
function Uf(e) {
  return e = e.toLowerCase(), Jf[e] ?? e;
}
const Gf = ["touchstart", "touchmove"];
function Qf(e) {
  return Gf.includes(e);
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
function He(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function eu(e, t) {
  return tu(e, t);
}
function np(e, t) {
  Ti(), t.intro = t.intro ?? !1;
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
      throw qn;
    bt(!0), it(
      /** @type {Comment} */
      i
    ), pn();
    const s = tu(e, { ...t, anchor: i });
    if (_e === null || _e.nodeType !== cr || /** @type {Comment} */
    _e.data !== cs)
      throw eo(), qn;
    return bt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === qn)
      return t.recover === !1 && gf(), Ti(), xs(n), bt(!1), eu(e, t);
    throw s;
  } finally {
    bt(r), it(o);
  }
}
const nr = /* @__PURE__ */ new Map();
function tu(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  Ti();
  var a = /* @__PURE__ */ new Set(), l = (p) => {
    for (var f = 0; f < p.length; f++) {
      var g = p[f];
      if (!a.has(g)) {
        a.add(g);
        var h = Qf(g);
        t.addEventListener(g, Nr, { passive: h });
        var y = nr.get(g);
        y === void 0 ? (document.addEventListener(g, Nr, { passive: h }), nr.set(g, 1)) : nr.set(g, y + 1);
      }
    }
  };
  l(ds(Ql)), Ii.add(l);
  var u = void 0, d = Nf(() => {
    var p = n ?? t.appendChild(gn());
    return Jt(() => {
      if (i) {
        ue({});
        var f = (
          /** @type {ComponentContext} */
          Ae
        );
        f.c = i;
      }
      o && (r.$$events = o), be && vt(
        /** @type {TemplateNode} */
        p,
        null
      ), u = e(p, r) || {}, be && (Ne.nodes_end = _e), i && ce();
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
  return Bi.set(u, d), u;
}
let Bi = /* @__PURE__ */ new WeakMap();
function rp(e, t) {
  const n = Bi.get(e);
  return n ? (Bi.delete(e), n(t)) : Promise.resolve();
}
function je(e, t, ...n) {
  var r = e, o = tt, i;
  On(() => {
    o !== (o = t()) && (i && (mt(i), i = null), i = Jt(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, xr), be && (r = _e);
}
function Hn(e) {
  Ae === null && ys(), $r && Ae.l !== null ? op(Ae).m.push(e) : Re(() => {
    const t = et(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function oi(e) {
  Ae === null && ys(), Hn(() => () => et(e));
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
  var o = e, i = null, s = null, a = rt, l = n > 0 ? xr : 0, u = !1;
  const d = (f, g = !0) => {
    u = !0, p(g, f);
  }, p = (f, g) => {
    if (a === (a = f)) return;
    let h = !1;
    if (be && r !== -1) {
      if (n === 0) {
        const C = Pl(o);
        C === ls ? r = 0 : C === us ? r = 1 / 0 : (r = parseInt(C.substring(1)), r !== r && (r = a ? 1 / 0 : -1));
      }
      const y = r > n;
      !!a === y && (o = Hi(), it(o), bt(!1), h = !0, r = -1);
    }
    a ? (i ? zr(i) : g && (i = Jt(() => g(o))), s && fr(s, () => {
      s = null;
    })) : (s ? zr(s) : g && (s = Jt(() => g(o, [n + 1, r]))), i && fr(i, () => {
      i = null;
    })), h && bt(!0);
  };
  On(() => {
    u = !1, t(d), u || p(null, null);
  }, l), be && (o = _e);
}
function ip(e, t) {
  be && it(
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
  ql(o, () => {
    for (var u = 0; u < i; u++) {
      var d = t[u];
      a || (r.delete(d.k), kn(e, d.prev, d.next)), mt(d.e, !a);
    }
  });
}
function st(e, t, n, r, o, i = null) {
  var s = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & pl) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    s = be ? it(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Fe(u)
    ) : u.appendChild(gn());
  }
  be && pn();
  var d = null, p = !1, f = /* @__PURE__ */ ws(() => {
    var g = n();
    return Ur(g) ? g : g == null ? [] : ds(g);
  });
  On(() => {
    var g = c(f), h = g.length;
    if (p && h === 0)
      return;
    p = h === 0;
    let y = !1;
    if (be) {
      var C = Pl(s) === us;
      C !== (h === 0) && (s = Hi(), it(s), bt(!1), y = !0);
    }
    if (be) {
      for (var b = null, L, x = 0; x < h; x++) {
        if (_e.nodeType === cr && /** @type {Comment} */
        _e.data === cs) {
          s = /** @type {Comment} */
          _e, y = !0, bt(!1);
          break;
        }
        var $ = g[x], k = r($, x);
        L = nu(
          _e,
          a,
          b,
          null,
          $,
          k,
          x,
          o,
          t,
          n
        ), a.items.set(k, L), b = L;
      }
      h > 0 && it(Hi());
    }
    be || ap(g, a, s, o, t, r, n), i !== null && (h === 0 ? d ? zr(d) : d = Jt(() => i(s)) : d !== null && fr(d, () => {
      d = null;
    })), y && bt(!0), c(f);
  }), be && (s = _e);
}
function ap(e, t, n, r, o, i, s) {
  var a = (o & Wd) !== 0, l = (o & (ss | as)) !== 0, u = e.length, d = t.items, p = t.first, f = p, g, h = null, y, C = [], b = [], L, x, $, k;
  if (a)
    for (k = 0; k < u; k += 1)
      L = e[k], x = i(L, k), $ = d.get(x), $ !== void 0 && ($.a?.measure(), (y ??= /* @__PURE__ */ new Set()).add($));
  for (k = 0; k < u; k += 1) {
    if (L = e[k], x = i(L, k), $ = d.get(x), $ === void 0) {
      var V = f ? (
        /** @type {TemplateNode} */
        f.e.nodes_start
      ) : n;
      h = nu(
        V,
        t,
        h,
        h === null ? t.first : h.next,
        L,
        x,
        k,
        r,
        o,
        s
      ), d.set(x, h), C = [], b = [], f = h.next;
      continue;
    }
    if (l && lp($, L, k, o), ($.e.f & cn) !== 0 && (zr($.e), a && ($.a?.unfix(), (y ??= /* @__PURE__ */ new Set()).delete($))), $ !== f) {
      if (g !== void 0 && g.has($)) {
        if (C.length < b.length) {
          var H = b[0], B;
          h = H.prev;
          var G = C[0], R = C[C.length - 1];
          for (B = 0; B < C.length; B += 1)
            fa(C[B], H, n);
          for (B = 0; B < b.length; B += 1)
            g.delete(b[B]);
          kn(t, G.prev, R.next), kn(t, h, G), kn(t, R, H), f = H, h = R, k -= 1, C = [], b = [];
        } else
          g.delete($), fa($, f, n), kn(t, $.prev, $.next), kn(t, $, h === null ? t.first : h.next), kn(t, h, $), h = $;
        continue;
      }
      for (C = [], b = []; f !== null && f.k !== x; )
        (f.e.f & cn) === 0 && (g ??= /* @__PURE__ */ new Set()).add(f), b.push(f), f = f.next;
      if (f === null)
        continue;
      $ = f;
    }
    C.push($), h = $, f = $.next;
  }
  if (f !== null || g !== void 0) {
    for (var P = g === void 0 ? [] : ds(g); f !== null; )
      (f.e.f & cn) === 0 && P.push(f), f = f.next;
    var _ = P.length;
    if (_ > 0) {
      var T = (o & pl) !== 0 && u === 0 ? n : null;
      if (a) {
        for (k = 0; k < _; k += 1)
          P[k].a?.measure();
        for (k = 0; k < _; k += 1)
          P[k].a?.fix();
      }
      sp(t, P, T, d);
    }
  }
  a && ro(() => {
    if (y !== void 0)
      for ($ of y)
        $.a?.apply();
  }), Ne.first = t.first && t.first.e, Ne.last = h && h.e;
}
function lp(e, t, n, r) {
  (r & ss) !== 0 && Oi(e.v, t), (r & as) !== 0 ? Oi(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function nu(e, t, n, r, o, i, s, a, l, u) {
  var d = (l & ss) !== 0, p = (l & Xd) === 0, f = d ? p ? /* @__PURE__ */ Nl(o, !1, !1) : Xn(o) : o, g = (l & as) === 0 ? s : Xn(s), h = {
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
    return h.e = Jt(() => a(e, f, g, u), be), h.e.prev = n && n.e, h.e.next = r && r.e, n === null ? t.first = h : (n.next = h, n.e.next = h.e), r !== null && (r.prev = h, r.e.prev = h.e), h;
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
      /* @__PURE__ */ en(i)
    );
    o.before(i), i = s;
  }
}
function kn(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function Ns(e, t, n = !1, r = !1, o = !1) {
  var i = e, s = "";
  xe(() => {
    var a = (
      /** @type {Effect} */
      Ne
    );
    if (s === (s = t() ?? "")) {
      be && pn();
      return;
    }
    if (a.nodes_start !== null && (Zl(
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
          throw eo(), qn;
        vt(_e, u), i = it(l);
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
    o !== (o = t()) && (i && (fr(i), i = null), o && (i = Jt(() => n(r, o))));
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
    }) : f === l ? zr(p) : mt(p)), f && f !== l && (p = Jt(() => {
      if (u = be ? (
        /** @type {Element} */
        u
      ) : g ? document.createElementNS(g, f) : document.createElement(f), vt(u, u), r) {
        be && tp(f) && u.append(document.createComment(""));
        var h = (
          /** @type {TemplateNode} */
          be ? /* @__PURE__ */ Fe(u) : u.appendChild(gn())
        );
        be && (h === null ? bt(!1) : it(h)), r(u, h);
      }
      Ne.nodes_end = u, d.before(u);
    })), a = f, a && (l = a));
  }, xr), s && (bt(!0), it(d));
}
function Pe(e, t) {
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
        _s(s), o && $l(i, s) && (i = s, r.update(s));
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
    n !== (n = t()) && (r && (mt(r), r = null), n && (r = Jt(() => {
      to(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function ru(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = ru(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function dp() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = ru(e)) && (r && (r += " "), r += t);
  return r;
}
function wn(e) {
  return typeof e == "object" ? dp(e) : e ?? "";
}
const pa = [...` 	
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
    return r && (n += ga(r)), o && (n += ga(o, !0)), n = n.trim(), n === "" ? null : n;
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
function qi(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!Ur(t))
      return _f();
    for (var r of e.options)
      r.selected = t.includes(ha(r));
    return;
  }
  for (r of e.options) {
    var o = ha(r);
    if (kf(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function gp(e) {
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
  }), Ol(() => {
    t.disconnect();
  });
}
function ha(e) {
  return "__value" in e ? e.__value : e.value;
}
const Cn = Symbol("class"), Kt = Symbol("style"), ou = Symbol("is custom element"), iu = Symbol("is html");
function Wt(e) {
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
    e.__on_r = n, Vf(n), Rf();
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
  be && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[lf] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && su(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function vp(e, t, n, r, o = !1) {
  var i = ii(e), s = i[ou], a = !i[iu];
  let l = be && s;
  l && bt(!1);
  var u = t || {}, d = e.tagName === "OPTION";
  for (var p in t)
    p in n || (n[p] = null);
  n.class ? n.class = wn(n.class) : (r || n[Cn]) && (n.class = null), n[Kt] && (n.style ??= null);
  var f = su(e);
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
          const k = {}, V = "$$" + x;
          let H = x.slice(2);
          var C = Ff(H);
          if (Xf(H) && (H = H.slice(0, -7), k.capture = !0), !C && h) {
            if ($ != null) continue;
            e.removeEventListener(H, u[V], k), u[V] = null;
          }
          if ($ != null)
            if (C)
              e[`__${H}`] = $, yn([H]);
            else {
              let B = function(G) {
                u[x].call(this, G);
              };
              u[V] = Ss(H, e, B, k);
            }
          else C && (e[`__${H}`] = void 0);
        } else if (x === "style")
          we(e, x, $);
        else if (x === "autofocus")
          qf(
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
          var b = x;
          a || (b = Uf(b));
          var L = b === "defaultValue" || b === "defaultChecked";
          if ($ == null && !s && !L)
            if (i[x] = null, b === "value" || b === "checked") {
              let k = (
                /** @type {HTMLInputElement} */
                e
              );
              const V = t === void 0;
              if (b === "value") {
                let H = k.defaultValue;
                k.removeAttribute(b), k.defaultValue = H, k.value = k.__value = V ? H : null;
              } else {
                let H = k.defaultChecked;
                k.removeAttribute(b), k.defaultChecked = H, k.checked = V ? H : !1;
              }
            } else
              e.removeAttribute(x);
          else L || f.includes(b) && (s || typeof $ != "string") ? e[b] = $ : typeof $ != "function" && we(e, b, $);
        }
    }
  }
  return l && bt(!0), u;
}
function Je(e, t, n = [], r, o = !1, i = kr) {
  const s = n.map(i);
  var a = void 0, l = {}, u = e.nodeName === "SELECT", d = !1;
  if (On(() => {
    var f = t(...s.map(c)), g = vp(e, a, f, r, o);
    d && u && "value" in f && qi(
      /** @type {HTMLSelectElement} */
      e,
      f.value
    );
    for (let y of Object.getOwnPropertySymbols(l))
      f[y] || mt(l[y]);
    for (let y of Object.getOwnPropertySymbols(f)) {
      var h = f[y];
      y.description === tf && (!a || h !== a[y]) && (l[y] && mt(l[y]), l[y] = Jt(() => cp(e, () => h))), g[y] = h;
    }
    a = g;
  }), u) {
    var p = (
      /** @type {HTMLSelectElement} */
      e
    );
    to(() => {
      qi(
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
      [ou]: e.nodeName.includes("-"),
      [iu]: e.namespaceURI === Qd
    }
  );
}
var va = /* @__PURE__ */ new Map();
function su(e) {
  var t = va.get(e.nodeName);
  if (t) return t;
  va.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = vl(r);
    for (var i in n)
      n[i].set && t.push(i);
    r = Qo(r);
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
var mp = /* @__PURE__ */ new Ps({
  box: "border-box"
});
function ma(e, t, n) {
  var r = mp.observe(e, () => n(e[t]));
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
function au(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Ae
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
  n.b.length && Tl(() => {
    wa(t, r), zo(n.b);
  }), Re(() => {
    const o = et(() => n.m.map(sf));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Re(() => {
    wa(t, r), zo(n.a);
  });
}
function wa(e, t) {
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
function Me(e, t, n) {
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
      var r = Ne;
      try {
        Vn(e.parent_effect), e.special[t] = m(
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
        Vn(r);
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
      version: Xn(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        Ne
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
function Te(...e) {
  return new Proxy({ props: e }, xp);
}
function m(e, t, n, r) {
  var o = !$r || (n & Fd) !== 0, i = (n & Jd) !== 0, s = (n & Ud) !== 0, a = (
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
  }, o && (n & gl) === 0)
    return h;
  if (d) {
    var y = e.$$legacy;
    return function(x, $) {
      return arguments.length > 0 ? ((!o || !$ || y || g) && d($ ? h() : x), x) : h();
    };
  }
  var C = !1, b = ((n & Yd) !== 0 ? kr : ws)(() => (C = !1, h()));
  i && c(b);
  var L = (
    /** @type {Effect} */
    Ne
  );
  return function(x, $) {
    if (arguments.length > 0) {
      const k = $ ? c(b) : o && i ? Pt(x) : x;
      return j(b, k), C = !0, a !== void 0 && (a = k), x;
    }
    return Ln && C || (L.f & ei) !== 0 ? b.v : c(b);
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
          return s === vs ? !0 : (c(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, a) {
          return j(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
        }
      }
    );
    this.#e = (t.hydrate ? np : eu)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && v(), this.#t = o.$$events;
    for (const i of Object.keys(this.#e))
      i === "$set" || i === "$destroy" || i === "$on" || Mo(this, i, {
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
let lu;
typeof HTMLElement == "function" && (lu = class extends HTMLElement {
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
          r !== "default" && (i.name = r), D(o, i);
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
  let s = class extends lu {
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
    Mo(s.prototype, a, {
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
    Mo(s.prototype, a, {
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
function Ep(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function xa(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = _p, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Ri = "http://www.w3.org/1999/xhtml";
const $a = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ri,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function ai(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), $a.hasOwnProperty(t) ? { space: $a[t], local: e } : e;
}
function Np(e) {
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
function uu(e) {
  var t = ai(e);
  return (t.local ? Lp : Np)(t);
}
function Pp() {
}
function Vs(e) {
  return e == null ? Pp : function() {
    return this.querySelector(e);
  };
}
function Vp(e) {
  typeof e != "function" && (e = Vs(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, u, d = 0; d < s; ++d)
      (l = i[d]) && (u = e.call(l, l.__data__, d, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[d] = u);
  return new St(r, this._parents);
}
function Dp(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Mp() {
  return [];
}
function cu(e) {
  return e == null ? Mp : function() {
    return this.querySelectorAll(e);
  };
}
function zp(e) {
  return function() {
    return Dp(e.apply(this, arguments));
  };
}
function Op(e) {
  typeof e == "function" ? e = zp(e) : e = cu(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(e.call(l, l.__data__, u, s)), o.push(l));
  return new St(r, o);
}
function du(e) {
  return function() {
    return this.matches(e);
  };
}
function fu(e) {
  return function(t) {
    return t.matches(e);
  };
}
var Hp = Array.prototype.find;
function Tp(e) {
  return function() {
    return Hp.call(this.children, e);
  };
}
function Ap() {
  return this.firstElementChild;
}
function Ip(e) {
  return this.select(e == null ? Ap : Tp(typeof e == "function" ? e : fu(e)));
}
var Zp = Array.prototype.filter;
function Bp() {
  return Array.from(this.children);
}
function qp(e) {
  return function() {
    return Zp.call(this.children, e);
  };
}
function Kp(e) {
  return this.selectAll(e == null ? Bp : qp(typeof e == "function" ? e : fu(e)));
}
function Rp(e) {
  typeof e != "function" && (e = du(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new St(r, this._parents);
}
function pu(e) {
  return new Array(e.length);
}
function jp() {
  return new St(this._enter || this._groups.map(pu), this._parents);
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
function Wp(e) {
  return function() {
    return e;
  };
}
function Xp(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, u = i.length; s < u; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new Ao(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function Yp(e, t, n, r, o, i, s) {
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
function Jp(e, t) {
  if (!arguments.length) return Array.from(this, Fp);
  var n = t ? Yp : Xp, r = this._parents, o = this._groups;
  typeof e != "function" && (e = Wp(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var d = r[u], p = o[u], f = p.length, g = Up(e.call(d, d && d.__data__, u, r)), h = g.length, y = a[u] = new Array(h), C = s[u] = new Array(h), b = l[u] = new Array(f);
    n(d, p, y, C, b, g, t);
    for (var L = 0, x = 0, $, k; L < h; ++L)
      if ($ = y[L]) {
        for (L >= x && (x = L + 1); !(k = C[x]) && ++x < h; ) ;
        $._next = k || null;
      }
  }
  return s = new St(s, r), s._enter = a, s._exit = l, s;
}
function Up(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Gp() {
  return new St(this._exit || this._groups.map(pu), this._parents);
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
function gu(e) {
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
  return e.style.getPropertyValue(t) || gu(e).getComputedStyle(e, null).getPropertyValue(t);
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
function hu(e) {
  return e.trim().split(/^|\s+/);
}
function Ds(e) {
  return e.classList || new vu(e);
}
function vu(e) {
  this._node = e, this._names = hu(e.getAttribute("class") || "");
}
vu.prototype = {
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
function mu(e, t) {
  for (var n = Ds(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function yu(e, t) {
  for (var n = Ds(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function _g(e) {
  return function() {
    mu(this, e);
  };
}
function Sg(e) {
  return function() {
    yu(this, e);
  };
}
function Eg(e, t) {
  return function() {
    (t.apply(this, arguments) ? mu : yu)(this, e);
  };
}
function Ng(e, t) {
  var n = hu(e + "");
  if (arguments.length < 2) {
    for (var r = Ds(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Eg : t ? _g : Sg)(n, t));
}
function Lg() {
  this.textContent = "";
}
function Pg(e) {
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
function Dg(e) {
  return arguments.length ? this.each(e == null ? Lg : (typeof e == "function" ? Vg : Pg)(e)) : this.node().textContent;
}
function Mg() {
  this.innerHTML = "";
}
function zg(e) {
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
function Hg(e) {
  return arguments.length ? this.each(e == null ? Mg : (typeof e == "function" ? Og : zg)(e)) : this.node().innerHTML;
}
function Tg() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Ag() {
  return this.each(Tg);
}
function Ig() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Zg() {
  return this.each(Ig);
}
function Bg(e) {
  var t = typeof e == "function" ? e : uu(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function qg() {
  return null;
}
function Kg(e, t) {
  var n = typeof e == "function" ? e : uu(e), r = t == null ? qg : typeof t == "function" ? t : Vs(t);
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
function Wg() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Xg() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Yg(e) {
  return this.select(e ? Xg : Wg);
}
function Fg(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Jg(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Ug(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function Gg(e) {
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
function e1(e, t, n) {
  var r = Ug(e + ""), o, i = r.length, s;
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
  for (a = t ? Qg : Gg, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function wu(e, t, n) {
  var r = gu(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function t1(e, t) {
  return function() {
    return wu(this, e, t);
  };
}
function n1(e, t) {
  return function() {
    return wu(this, e, t.apply(this, arguments));
  };
}
function r1(e, t) {
  return this.each((typeof t == "function" ? n1 : t1)(e, t));
}
function* o1() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var bu = [null];
function St(e, t) {
  this._groups = e, this._parents = t;
}
function oo() {
  return new St([[document.documentElement]], bu);
}
function i1() {
  return this;
}
St.prototype = oo.prototype = {
  constructor: St,
  select: Vp,
  selectAll: Op,
  selectChild: Ip,
  selectChildren: Kp,
  filter: Rp,
  data: Jp,
  enter: jp,
  exit: Gp,
  join: Qp,
  merge: eg,
  selection: i1,
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
  classed: Ng,
  text: Dg,
  html: Hg,
  raise: Ag,
  lower: Zg,
  append: Bg,
  insert: Kg,
  remove: jg,
  clone: Yg,
  datum: Fg,
  on: e1,
  dispatch: r1,
  [Symbol.iterator]: o1
};
function Lt(e) {
  return typeof e == "string" ? new St([[document.querySelector(e)]], [document.documentElement]) : new St([[e]], bu);
}
function s1(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function Dt(e, t) {
  if (e = s1(e), t === void 0 && (t = e.currentTarget), t) {
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
const a1 = { passive: !1 }, Zr = { capture: !0, passive: !1 };
function $i(e) {
  e.stopImmediatePropagation();
}
function sr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function xu(e) {
  var t = e.document.documentElement, n = Lt(e).on("dragstart.drag", sr, Zr);
  "onselectstart" in t ? n.on("selectstart.drag", sr, Zr) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function $u(e, t) {
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
function l1(e) {
  return !e.ctrlKey && !e.button;
}
function u1() {
  return this.parentNode;
}
function c1(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function d1() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function f1() {
  var e = l1, t = u1, n = c1, r = d1, o = {}, i = si("start", "drag", "end"), s = 0, a, l, u, d, p = 0;
  function f($) {
    $.on("mousedown.drag", g).filter(r).on("touchstart.drag", C).on("touchmove.drag", b, a1).on("touchend.drag touchcancel.drag", L).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g($, k) {
    if (!(d || !e.call(this, $, k))) {
      var V = x(this, t.call(this, $, k), $, k, "mouse");
      V && (Lt($.view).on("mousemove.drag", h, Zr).on("mouseup.drag", y, Zr), xu($.view), $i($), u = !1, a = $.clientX, l = $.clientY, V("start", $));
    }
  }
  function h($) {
    if (sr($), !u) {
      var k = $.clientX - a, V = $.clientY - l;
      u = k * k + V * V > p;
    }
    o.mouse("drag", $);
  }
  function y($) {
    Lt($.view).on("mousemove.drag mouseup.drag", null), $u($.view, u), sr($), o.mouse("end", $);
  }
  function C($, k) {
    if (e.call(this, $, k)) {
      var V = $.changedTouches, H = t.call(this, $, k), B = V.length, G, R;
      for (G = 0; G < B; ++G)
        (R = x(this, H, $, k, V[G].identifier, V[G])) && ($i($), R("start", $, V[G]));
    }
  }
  function b($) {
    var k = $.changedTouches, V = k.length, H, B;
    for (H = 0; H < V; ++H)
      (B = o[k[H].identifier]) && (sr($), B("drag", $, k[H]));
  }
  function L($) {
    var k = $.changedTouches, V = k.length, H, B;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), H = 0; H < V; ++H)
      (B = o[k[H].identifier]) && ($i($), B("end", $, k[H]));
  }
  function x($, k, V, H, B, G) {
    var R = i.copy(), P = Dt(G || V, k), _, T, w;
    if ((w = n.call($, new ji("beforestart", {
      sourceEvent: V,
      target: f,
      identifier: B,
      active: s,
      x: P[0],
      y: P[1],
      dx: 0,
      dy: 0,
      dispatch: R
    }), H)) != null)
      return _ = w.x - P[0] || 0, T = w.y - P[1] || 0, function E(N, z, I) {
        var M = P, q;
        switch (N) {
          case "start":
            o[B] = E, q = s++;
            break;
          case "end":
            delete o[B], --s;
          // falls through
          case "drag":
            P = Dt(I || z, k), q = s;
            break;
        }
        R.call(
          N,
          $,
          new ji(N, {
            sourceEvent: z,
            subject: w,
            target: f,
            identifier: B,
            active: q,
            x: P[0] + _,
            y: P[1] + T,
            dx: P[0] - M[0],
            dy: P[1] - M[1],
            dispatch: R
          }),
          H
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
function Ms(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function ku(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function io() {
}
var Br = 0.7, Io = 1 / Br, ar = "\\s*([+-]?\\d+)\\s*", qr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Xt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", p1 = /^#([0-9a-f]{3,8})$/, g1 = new RegExp(`^rgb\\(${ar},${ar},${ar}\\)$`), h1 = new RegExp(`^rgb\\(${Xt},${Xt},${Xt}\\)$`), v1 = new RegExp(`^rgba\\(${ar},${ar},${ar},${qr}\\)$`), m1 = new RegExp(`^rgba\\(${Xt},${Xt},${Xt},${qr}\\)$`), y1 = new RegExp(`^hsl\\(${qr},${Xt},${Xt}\\)$`), w1 = new RegExp(`^hsla\\(${qr},${Xt},${Xt},${qr}\\)$`), ka = {
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
Ms(io, Yn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ca,
  // Deprecated! Use color.formatHex.
  formatHex: Ca,
  formatHex8: b1,
  formatHsl: x1,
  formatRgb: _a,
  toString: _a
});
function Ca() {
  return this.rgb().formatHex();
}
function b1() {
  return this.rgb().formatHex8();
}
function x1() {
  return Cu(this).formatHsl();
}
function _a() {
  return this.rgb().formatRgb();
}
function Yn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = p1.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Sa(t) : n === 3 ? new gt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? yo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? yo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = g1.exec(e)) ? new gt(t[1], t[2], t[3], 1) : (t = h1.exec(e)) ? new gt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = v1.exec(e)) ? yo(t[1], t[2], t[3], t[4]) : (t = m1.exec(e)) ? yo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = y1.exec(e)) ? La(t[1], t[2] / 100, t[3] / 100, 1) : (t = w1.exec(e)) ? La(t[1], t[2] / 100, t[3] / 100, t[4]) : ka.hasOwnProperty(e) ? Sa(ka[e]) : e === "transparent" ? new gt(NaN, NaN, NaN, 0) : null;
}
function Sa(e) {
  return new gt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function yo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new gt(e, t, n, r);
}
function $1(e) {
  return e instanceof io || (e = Yn(e)), e ? (e = e.rgb(), new gt(e.r, e.g, e.b, e.opacity)) : new gt();
}
function Wi(e, t, n, r) {
  return arguments.length === 1 ? $1(e) : new gt(e, t, n, r ?? 1);
}
function gt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Ms(gt, Wi, ku(io, {
  brighter(e) {
    return e = e == null ? Io : Math.pow(Io, e), new gt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Br : Math.pow(Br, e), new gt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new gt(Wn(this.r), Wn(this.g), Wn(this.b), Zo(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ea,
  // Deprecated! Use color.formatHex.
  formatHex: Ea,
  formatHex8: k1,
  formatRgb: Na,
  toString: Na
}));
function Ea() {
  return `#${Bn(this.r)}${Bn(this.g)}${Bn(this.b)}`;
}
function k1() {
  return `#${Bn(this.r)}${Bn(this.g)}${Bn(this.b)}${Bn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Na() {
  const e = Zo(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Wn(this.r)}, ${Wn(this.g)}, ${Wn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Zo(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Wn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Bn(e) {
  return e = Wn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function La(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new zt(e, t, n, r);
}
function Cu(e) {
  if (e instanceof zt) return new zt(e.h, e.s, e.l, e.opacity);
  if (e instanceof io || (e = Yn(e)), !e) return new zt();
  if (e instanceof zt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new zt(s, a, l, e.opacity);
}
function C1(e, t, n, r) {
  return arguments.length === 1 ? Cu(e) : new zt(e, t, n, r ?? 1);
}
function zt(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Ms(zt, C1, ku(io, {
  brighter(e) {
    return e = e == null ? Io : Math.pow(Io, e), new zt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Br : Math.pow(Br, e), new zt(this.h, this.s, this.l * e, this.opacity);
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
    return new zt(Pa(this.h), wo(this.s), wo(this.l), Zo(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Zo(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Pa(this.h)}, ${wo(this.s) * 100}%, ${wo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Pa(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function wo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ki(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const zs = (e) => () => e;
function _1(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function S1(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function E1(e) {
  return (e = +e) == 1 ? _u : function(t, n) {
    return n - t ? S1(t, n, e) : zs(isNaN(t) ? n : t);
  };
}
function _u(e, t) {
  var n = t - e;
  return n ? _1(e, n) : zs(isNaN(e) ? t : e);
}
const Bo = function e(t) {
  var n = E1(t);
  function r(o, i) {
    var s = n((o = Wi(o)).r, (i = Wi(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = _u(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = l(d), o.opacity = u(d), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function N1(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function L1(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function P1(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = Mr(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function V1(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function qt(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function D1(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Mr(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var Xi = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ci = new RegExp(Xi.source, "g");
function M1(e) {
  return function() {
    return e;
  };
}
function z1(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Su(e, t) {
  var n = Xi.lastIndex = Ci.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = Xi.exec(e)) && (o = Ci.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: qt(r, o) })), n = Ci.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? z1(l[0].x) : M1(t) : (t = l.length, function(u) {
    for (var d = 0, p; d < t; ++d) a[(p = l[d]).i] = p.x(u);
    return a.join("");
  });
}
function Mr(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? zs(t) : (n === "number" ? qt : n === "string" ? (r = Yn(t)) ? (t = r, Bo) : Su : t instanceof Yn ? Bo : t instanceof Date ? V1 : L1(t) ? N1 : Array.isArray(t) ? P1 : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? D1 : qt)(e, t);
}
var Va = 180 / Math.PI, Eu = {
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
    rotate: Math.atan2(t, e) * Va,
    skewX: Math.atan(l) * Va,
    scaleX: s,
    scaleY: a
  };
}
var bo;
function O1(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Eu : Nu(t.a, t.b, t.c, t.d, t.e, t.f);
}
function H1(e) {
  return e == null || (bo || (bo = document.createElementNS("http://www.w3.org/2000/svg", "g")), bo.setAttribute("transform", e), !(e = bo.transform.baseVal.consolidate())) ? Eu : (e = e.matrix, Nu(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Lu(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, d, p, f, g, h) {
    if (u !== p || d !== f) {
      var y = g.push("translate(", null, t, null, n);
      h.push({ i: y - 4, x: qt(u, p) }, { i: y - 2, x: qt(d, f) });
    } else (p || f) && g.push("translate(" + p + t + f + n);
  }
  function s(u, d, p, f) {
    u !== d ? (u - d > 180 ? d += 360 : d - u > 180 && (u += 360), f.push({ i: p.push(o(p) + "rotate(", null, r) - 2, x: qt(u, d) })) : d && p.push(o(p) + "rotate(" + d + r);
  }
  function a(u, d, p, f) {
    u !== d ? f.push({ i: p.push(o(p) + "skewX(", null, r) - 2, x: qt(u, d) }) : d && p.push(o(p) + "skewX(" + d + r);
  }
  function l(u, d, p, f, g, h) {
    if (u !== p || d !== f) {
      var y = g.push(o(g) + "scale(", null, ",", null, ")");
      h.push({ i: y - 4, x: qt(u, p) }, { i: y - 2, x: qt(d, f) });
    } else (p !== 1 || f !== 1) && g.push(o(g) + "scale(" + p + "," + f + ")");
  }
  return function(u, d) {
    var p = [], f = [];
    return u = e(u), d = e(d), i(u.translateX, u.translateY, d.translateX, d.translateY, p, f), s(u.rotate, d.rotate, p, f), a(u.skewX, d.skewX, p, f), l(u.scaleX, u.scaleY, d.scaleX, d.scaleY, p, f), u = d = null, function(g) {
      for (var h = -1, y = f.length, C; ++h < y; ) p[(C = f[h]).i] = C.x(g);
      return p.join("");
    };
  };
}
var T1 = Lu(O1, "px, ", "px)", "deg)"), A1 = Lu(H1, ", ", ")", ")"), I1 = 1e-12;
function Da(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Z1(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function B1(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const No = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], d = s[0], p = s[1], f = s[2], g = d - a, h = p - l, y = g * g + h * h, C, b;
    if (y < I1)
      b = Math.log(f / u) / t, C = function(H) {
        return [
          a + H * g,
          l + H * h,
          u * Math.exp(t * H * b)
        ];
      };
    else {
      var L = Math.sqrt(y), x = (f * f - u * u + r * y) / (2 * u * n * L), $ = (f * f - u * u - r * y) / (2 * f * n * L), k = Math.log(Math.sqrt(x * x + 1) - x), V = Math.log(Math.sqrt($ * $ + 1) - $);
      b = (V - k) / t, C = function(H) {
        var B = H * b, G = Da(k), R = u / (n * L) * (G * B1(t * B + k) - Z1(k));
        return [
          a + R * g,
          l + R * h,
          u * G / Da(t * B + k)
        ];
      };
    }
    return C.duration = b * 1e3 * t / Math.SQRT2, C;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
}(Math.SQRT2, 2, 4);
var hr = 0, Lr = 0, Sr = 0, Pu = 1e3, qo, Pr, Ko = 0, Fn = 0, li = 0, Kr = typeof performance == "object" && performance.now ? performance : Date, Vu = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Os() {
  return Fn || (Vu(q1), Fn = Kr.now() + li);
}
function q1() {
  Fn = 0;
}
function Ro() {
  this._call = this._time = this._next = null;
}
Ro.prototype = Du.prototype = {
  constructor: Ro,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Os() : +n) + (t == null ? 0 : +t), !this._next && Pr !== this && (Pr ? Pr._next = this : qo = this, Pr = this), this._call = e, this._time = n, Yi();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Yi());
  }
};
function Du(e, t, n) {
  var r = new Ro();
  return r.restart(e, t, n), r;
}
function K1() {
  Os(), ++hr;
  for (var e = qo, t; e; )
    (t = Fn - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --hr;
}
function Ma() {
  Fn = (Ko = Kr.now()) + li, hr = Lr = 0;
  try {
    K1();
  } finally {
    hr = 0, j1(), Fn = 0;
  }
}
function R1() {
  var e = Kr.now(), t = e - Ko;
  t > Pu && (li -= t, Ko = e);
}
function j1() {
  for (var e, t = qo, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : qo = n);
  Pr = e, Yi(r);
}
function Yi(e) {
  if (!hr) {
    Lr && (Lr = clearTimeout(Lr));
    var t = e - Fn;
    t > 24 ? (e < 1 / 0 && (Lr = setTimeout(Ma, e - Kr.now() - li)), Sr && (Sr = clearInterval(Sr))) : (Sr || (Ko = Kr.now(), Sr = setInterval(R1, Pu)), hr = 1, Vu(Ma));
  }
}
function za(e, t, n) {
  var r = new Ro();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var W1 = si("start", "end", "cancel", "interrupt"), X1 = [], Mu = 0, Oa = 1, Fi = 2, Lo = 3, Ha = 4, Ji = 5, Po = 6;
function ui(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  Y1(e, n, {
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
    state: Mu
  });
}
function Hs(e, t) {
  var n = Tt(e, t);
  if (n.state > Mu) throw new Error("too late; already scheduled");
  return n;
}
function tn(e, t) {
  var n = Tt(e, t);
  if (n.state > Lo) throw new Error("too late; already running");
  return n;
}
function Tt(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function Y1(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Du(i, 0, n.time);
  function i(u) {
    n.state = Oa, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var d, p, f, g;
    if (n.state !== Oa) return l();
    for (d in r)
      if (g = r[d], g.name === n.name) {
        if (g.state === Lo) return za(s);
        g.state === Ha ? (g.state = Po, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[d]) : +d < t && (g.state = Po, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[d]);
      }
    if (za(function() {
      n.state === Lo && (n.state = Ha, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = Fi, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Fi) {
      for (n.state = Lo, o = new Array(f = n.tween.length), d = 0, p = -1; d < f; ++d)
        (g = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++p] = g);
      o.length = p + 1;
    }
  }
  function a(u) {
    for (var d = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Ji, 1), p = -1, f = o.length; ++p < f; )
      o[p].call(e, d);
    n.state === Ji && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = Po, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function Vo(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > Fi && r.state < Ji, r.state = Po, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function F1(e) {
  return this.each(function() {
    Vo(this, e);
  });
}
function J1(e, t) {
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
function U1(e, t, n) {
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
function G1(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = Tt(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? J1 : U1)(n, e, t));
}
function Ts(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = tn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return Tt(o, r).value[t];
  };
}
function zu(e, t) {
  var n;
  return (typeof t == "number" ? qt : t instanceof Yn ? Bo : (n = Yn(t)) ? (t = n, Bo) : Su)(e, t);
}
function Q1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function eh(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function th(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function nh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function rh(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function oh(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function ih(e, t) {
  var n = ai(e), r = n === "transform" ? A1 : zu;
  return this.attrTween(e, typeof t == "function" ? (n.local ? oh : rh)(n, r, Ts(this, "attr." + e, t)) : t == null ? (n.local ? eh : Q1)(n) : (n.local ? nh : th)(n, r, t));
}
function sh(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function ah(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function lh(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && ah(e, i)), n;
  }
  return o._value = t, o;
}
function uh(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && sh(e, i)), n;
  }
  return o._value = t, o;
}
function ch(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = ai(e);
  return this.tween(n, (r.local ? lh : uh)(r, t));
}
function dh(e, t) {
  return function() {
    Hs(this, e).delay = +t.apply(this, arguments);
  };
}
function fh(e, t) {
  return t = +t, function() {
    Hs(this, e).delay = t;
  };
}
function ph(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? dh : fh)(t, e)) : Tt(this.node(), t).delay;
}
function gh(e, t) {
  return function() {
    tn(this, e).duration = +t.apply(this, arguments);
  };
}
function hh(e, t) {
  return t = +t, function() {
    tn(this, e).duration = t;
  };
}
function vh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? gh : hh)(t, e)) : Tt(this.node(), t).duration;
}
function mh(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    tn(this, e).ease = t;
  };
}
function yh(e) {
  var t = this._id;
  return arguments.length ? this.each(mh(t, e)) : Tt(this.node(), t).ease;
}
function wh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    tn(this, e).ease = n;
  };
}
function bh(e) {
  if (typeof e != "function") throw new Error();
  return this.each(wh(this._id, e));
}
function xh(e) {
  typeof e != "function" && (e = du(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new hn(r, this._parents, this._name, this._id);
}
function $h(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], u = n[a], d = l.length, p = s[a] = new Array(d), f, g = 0; g < d; ++g)
      (f = l[g] || u[g]) && (p[g] = f);
  for (; a < r; ++a)
    s[a] = t[a];
  return new hn(s, this._parents, this._name, this._id);
}
function kh(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function Ch(e, t, n) {
  var r, o, i = kh(t) ? Hs : tn;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function _h(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Tt(this.node(), n).on.on(e) : this.each(Ch(n, e, t));
}
function Sh(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Eh() {
  return this.on("end.remove", Sh(this._id));
}
function Nh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Vs(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), d, p, f = 0; f < l; ++f)
      (d = a[f]) && (p = e.call(d, d.__data__, f, a)) && ("__data__" in d && (p.__data__ = d.__data__), u[f] = p, ui(u[f], t, n, f, u, Tt(d, n)));
  return new hn(i, this._parents, t, n);
}
function Lh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = cu(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, d, p = 0; p < u; ++p)
      if (d = l[p]) {
        for (var f = e.call(d, d.__data__, p, l), g, h = Tt(d, n), y = 0, C = f.length; y < C; ++y)
          (g = f[y]) && ui(g, t, n, y, f, h);
        i.push(f), s.push(d);
      }
  return new hn(i, s, t, n);
}
var Ph = oo.prototype.constructor;
function Vh() {
  return new Ph(this._groups, this._parents);
}
function Dh(e, t) {
  var n, r, o;
  return function() {
    var i = gr(this, e), s = (this.style.removeProperty(e), gr(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function Ou(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Mh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = gr(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function zh(e, t, n) {
  var r, o, i;
  return function() {
    var s = gr(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), gr(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function Oh(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = tn(this, e), u = l.on, d = l.value[i] == null ? a || (a = Ou(t)) : void 0;
    (u !== n || o !== d) && (r = (n = u).copy()).on(s, o = d), l.on = r;
  };
}
function Hh(e, t, n) {
  var r = (e += "") == "transform" ? T1 : zu;
  return t == null ? this.styleTween(e, Dh(e, r)).on("end.style." + e, Ou(e)) : typeof t == "function" ? this.styleTween(e, zh(e, r, Ts(this, "style." + e, t))).each(Oh(this._id, e)) : this.styleTween(e, Mh(e, r, t), n).on("end.style." + e, null);
}
function Th(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function Ah(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && Th(e, s, n)), r;
  }
  return i._value = t, i;
}
function Ih(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, Ah(e, t, n ?? ""));
}
function Zh(e) {
  return function() {
    this.textContent = e;
  };
}
function Bh(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function qh(e) {
  return this.tween("text", typeof e == "function" ? Bh(Ts(this, "text", e)) : Zh(e == null ? "" : e + ""));
}
function Kh(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function Rh(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && Kh(o)), t;
  }
  return r._value = e, r;
}
function jh(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, Rh(e));
}
function Wh() {
  for (var e = this._name, t = this._id, n = Hu(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var d = Tt(l, t);
        ui(l, e, n, u, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new hn(r, this._parents, e, n);
}
function Xh() {
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
var Yh = 0;
function hn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Hu() {
  return ++Yh;
}
var rn = oo.prototype;
hn.prototype = {
  constructor: hn,
  select: Nh,
  selectAll: Lh,
  selectChild: rn.selectChild,
  selectChildren: rn.selectChildren,
  filter: xh,
  merge: $h,
  selection: Vh,
  transition: Wh,
  call: rn.call,
  nodes: rn.nodes,
  node: rn.node,
  size: rn.size,
  empty: rn.empty,
  each: rn.each,
  on: _h,
  attr: ih,
  attrTween: ch,
  style: Hh,
  styleTween: Ih,
  text: qh,
  textTween: jh,
  remove: Eh,
  tween: G1,
  delay: ph,
  duration: vh,
  ease: yh,
  easeVarying: bh,
  end: Xh,
  [Symbol.iterator]: rn[Symbol.iterator]
};
function Fh(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Jh = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Fh
};
function Uh(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Gh(e) {
  var t, n;
  e instanceof hn ? (t = e._id, e = e._name) : (t = Hu(), (n = Jh).time = Os(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && ui(l, e, t, u, s, n || Uh(l, t));
  return new hn(r, this._parents, e, t);
}
oo.prototype.interrupt = F1;
oo.prototype.transition = Gh;
const xo = (e) => () => e;
function Qh(e, {
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
Tu.prototype = sn.prototype;
function Tu(e) {
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
function Ta() {
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
function Au() {
  var e = ev, t = tv, n = ov, r = nv, o = rv, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = No, u = si("start", "zoom", "end"), d, p, f, g = 500, h = 150, y = 0, C = 10;
  function b(w) {
    w.property("__zoom", Ta).on("wheel.zoom", B, { passive: !1 }).on("mousedown.zoom", G).on("dblclick.zoom", R).filter(o).on("touchstart.zoom", P).on("touchmove.zoom", _).on("touchend.zoom touchcancel.zoom", T).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function(w, E, N, z) {
    var I = w.selection ? w.selection() : w;
    I.property("__zoom", Ta), w !== I ? k(w, E, N, z) : I.interrupt().each(function() {
      V(this, arguments).event(z).start().zoom(null, typeof E == "function" ? E.apply(this, arguments) : E).end();
    });
  }, b.scaleBy = function(w, E, N, z) {
    b.scaleTo(w, function() {
      var I = this.__zoom.k, M = typeof E == "function" ? E.apply(this, arguments) : E;
      return I * M;
    }, N, z);
  }, b.scaleTo = function(w, E, N, z) {
    b.transform(w, function() {
      var I = t.apply(this, arguments), M = this.__zoom, q = N == null ? $(I) : typeof N == "function" ? N.apply(this, arguments) : N, X = M.invert(q), U = typeof E == "function" ? E.apply(this, arguments) : E;
      return n(x(L(M, U), q, X), I, s);
    }, N, z);
  }, b.translateBy = function(w, E, N, z) {
    b.transform(w, function() {
      return n(this.__zoom.translate(
        typeof E == "function" ? E.apply(this, arguments) : E,
        typeof N == "function" ? N.apply(this, arguments) : N
      ), t.apply(this, arguments), s);
    }, null, z);
  }, b.translateTo = function(w, E, N, z, I) {
    b.transform(w, function() {
      var M = t.apply(this, arguments), q = this.__zoom, X = z == null ? $(M) : typeof z == "function" ? z.apply(this, arguments) : z;
      return n(ci.translate(X[0], X[1]).scale(q.k).translate(
        typeof E == "function" ? -E.apply(this, arguments) : -E,
        typeof N == "function" ? -N.apply(this, arguments) : -N
      ), M, s);
    }, z, I);
  };
  function L(w, E) {
    return E = Math.max(i[0], Math.min(i[1], E)), E === w.k ? w : new sn(E, w.x, w.y);
  }
  function x(w, E, N) {
    var z = E[0] - N[0] * w.k, I = E[1] - N[1] * w.k;
    return z === w.x && I === w.y ? w : new sn(w.k, z, I);
  }
  function $(w) {
    return [(+w[0][0] + +w[1][0]) / 2, (+w[0][1] + +w[1][1]) / 2];
  }
  function k(w, E, N, z) {
    w.on("start.zoom", function() {
      V(this, arguments).event(z).start();
    }).on("interrupt.zoom end.zoom", function() {
      V(this, arguments).event(z).end();
    }).tween("zoom", function() {
      var I = this, M = arguments, q = V(I, M).event(z), X = t.apply(I, M), U = N == null ? $(X) : typeof N == "function" ? N.apply(I, M) : N, oe = Math.max(X[1][0] - X[0][0], X[1][1] - X[0][1]), W = I.__zoom, F = typeof E == "function" ? E.apply(I, M) : E, J = l(W.invert(U).concat(oe / W.k), F.invert(U).concat(oe / F.k));
      return function(ee) {
        if (ee === 1) ee = F;
        else {
          var Y = J(ee), ve = oe / Y[2];
          ee = new sn(ve, U[0] - Y[0] * ve, U[1] - Y[1] * ve);
        }
        q.zoom(null, ee);
      };
    });
  }
  function V(w, E, N) {
    return !N && w.__zooming || new H(w, E);
  }
  function H(w, E) {
    this.that = w, this.args = E, this.active = 0, this.sourceEvent = null, this.extent = t.apply(w, E), this.taps = 0;
  }
  H.prototype = {
    event: function(w) {
      return w && (this.sourceEvent = w), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(w, E) {
      return this.mouse && w !== "mouse" && (this.mouse[1] = E.invert(this.mouse[0])), this.touch0 && w !== "touch" && (this.touch0[1] = E.invert(this.touch0[0])), this.touch1 && w !== "touch" && (this.touch1[1] = E.invert(this.touch1[0])), this.that.__zoom = E, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(w) {
      var E = Lt(this.that).datum();
      u.call(
        w,
        this.that,
        new Qh(w, {
          sourceEvent: this.sourceEvent,
          target: b,
          transform: this.that.__zoom,
          dispatch: u
        }),
        E
      );
    }
  };
  function B(w, ...E) {
    if (!e.apply(this, arguments)) return;
    var N = V(this, E).event(w), z = this.__zoom, I = Math.max(i[0], Math.min(i[1], z.k * Math.pow(2, r.apply(this, arguments)))), M = Dt(w);
    if (N.wheel)
      (N.mouse[0][0] !== M[0] || N.mouse[0][1] !== M[1]) && (N.mouse[1] = z.invert(N.mouse[0] = M)), clearTimeout(N.wheel);
    else {
      if (z.k === I) return;
      N.mouse = [M, z.invert(M)], Vo(this), N.start();
    }
    Er(w), N.wheel = setTimeout(q, h), N.zoom("mouse", n(x(L(z, I), N.mouse[0], N.mouse[1]), N.extent, s));
    function q() {
      N.wheel = null, N.end();
    }
  }
  function G(w, ...E) {
    if (f || !e.apply(this, arguments)) return;
    var N = w.currentTarget, z = V(this, E, !0).event(w), I = Lt(w.view).on("mousemove.zoom", U, !0).on("mouseup.zoom", oe, !0), M = Dt(w, N), q = w.clientX, X = w.clientY;
    xu(w.view), _i(w), z.mouse = [M, this.__zoom.invert(M)], Vo(this), z.start();
    function U(W) {
      if (Er(W), !z.moved) {
        var F = W.clientX - q, J = W.clientY - X;
        z.moved = F * F + J * J > y;
      }
      z.event(W).zoom("mouse", n(x(z.that.__zoom, z.mouse[0] = Dt(W, N), z.mouse[1]), z.extent, s));
    }
    function oe(W) {
      I.on("mousemove.zoom mouseup.zoom", null), $u(W.view, z.moved), Er(W), z.event(W).end();
    }
  }
  function R(w, ...E) {
    if (e.apply(this, arguments)) {
      var N = this.__zoom, z = Dt(w.changedTouches ? w.changedTouches[0] : w, this), I = N.invert(z), M = N.k * (w.shiftKey ? 0.5 : 2), q = n(x(L(N, M), z, I), t.apply(this, E), s);
      Er(w), a > 0 ? Lt(this).transition().duration(a).call(k, q, z, w) : Lt(this).call(b.transform, q, z, w);
    }
  }
  function P(w, ...E) {
    if (e.apply(this, arguments)) {
      var N = w.touches, z = N.length, I = V(this, E, w.changedTouches.length === z).event(w), M, q, X, U;
      for (_i(w), q = 0; q < z; ++q)
        X = N[q], U = Dt(X, this), U = [U, this.__zoom.invert(U), X.identifier], I.touch0 ? !I.touch1 && I.touch0[2] !== U[2] && (I.touch1 = U, I.taps = 0) : (I.touch0 = U, M = !0, I.taps = 1 + !!d);
      d && (d = clearTimeout(d)), M && (I.taps < 2 && (p = U[0], d = setTimeout(function() {
        d = null;
      }, g)), Vo(this), I.start());
    }
  }
  function _(w, ...E) {
    if (this.__zooming) {
      var N = V(this, E).event(w), z = w.changedTouches, I = z.length, M, q, X, U;
      for (Er(w), M = 0; M < I; ++M)
        q = z[M], X = Dt(q, this), N.touch0 && N.touch0[2] === q.identifier ? N.touch0[0] = X : N.touch1 && N.touch1[2] === q.identifier && (N.touch1[0] = X);
      if (q = N.that.__zoom, N.touch1) {
        var oe = N.touch0[0], W = N.touch0[1], F = N.touch1[0], J = N.touch1[1], ee = (ee = F[0] - oe[0]) * ee + (ee = F[1] - oe[1]) * ee, Y = (Y = J[0] - W[0]) * Y + (Y = J[1] - W[1]) * Y;
        q = L(q, Math.sqrt(ee / Y)), X = [(oe[0] + F[0]) / 2, (oe[1] + F[1]) / 2], U = [(W[0] + J[0]) / 2, (W[1] + J[1]) / 2];
      } else if (N.touch0) X = N.touch0[0], U = N.touch0[1];
      else return;
      N.zoom("touch", n(x(q, X, U), N.extent, s));
    }
  }
  function T(w, ...E) {
    if (this.__zooming) {
      var N = V(this, E).event(w), z = w.changedTouches, I = z.length, M, q;
      for (_i(w), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, g), M = 0; M < I; ++M)
        q = z[M], N.touch0 && N.touch0[2] === q.identifier ? delete N.touch0 : N.touch1 && N.touch1[2] === q.identifier && delete N.touch1;
      if (N.touch1 && !N.touch0 && (N.touch0 = N.touch1, delete N.touch1), N.touch0) N.touch0[1] = this.__zoom.invert(N.touch0[0]);
      else if (N.end(), N.taps === 2 && (q = Dt(q, this), Math.hypot(p[0] - q[0], p[1] - q[1]) < C)) {
        var X = Lt(this).on("dblclick.zoom");
        X && X.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function(w) {
    return arguments.length ? (r = typeof w == "function" ? w : xo(+w), b) : r;
  }, b.filter = function(w) {
    return arguments.length ? (e = typeof w == "function" ? w : xo(!!w), b) : e;
  }, b.touchable = function(w) {
    return arguments.length ? (o = typeof w == "function" ? w : xo(!!w), b) : o;
  }, b.extent = function(w) {
    return arguments.length ? (t = typeof w == "function" ? w : xo([[+w[0][0], +w[0][1]], [+w[1][0], +w[1][1]]]), b) : t;
  }, b.scaleExtent = function(w) {
    return arguments.length ? (i[0] = +w[0], i[1] = +w[1], b) : [i[0], i[1]];
  }, b.translateExtent = function(w) {
    return arguments.length ? (s[0][0] = +w[0][0], s[1][0] = +w[1][0], s[0][1] = +w[0][1], s[1][1] = +w[1][1], b) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, b.constrain = function(w) {
    return arguments.length ? (n = w, b) : n;
  }, b.duration = function(w) {
    return arguments.length ? (a = +w, b) : a;
  }, b.interpolate = function(w) {
    return arguments.length ? (l = w, b) : l;
  }, b.on = function() {
    var w = u.on.apply(u, arguments);
    return w === u ? b : w;
  }, b.clickDistance = function(w) {
    return arguments.length ? (y = (w = +w) * w, b) : Math.sqrt(y);
  }, b.tapDistance = function(w) {
    return arguments.length ? (C = +w, b) : C;
  }, b;
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
}, Ui = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], Iu = ["Enter", " ", "Escape"], iv = {
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
var Yt;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(Yt || (Yt = {}));
var jo;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(jo || (jo = {}));
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
const Aa = {
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
function Ia(e, t, n) {
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
const Zu = (e) => "id" in e && "source" in e && "target" in e, lv = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), As = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), so = (e, t = [0, 0]) => {
  const { width: n, height: r } = Tn(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
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
    const a = s ? Wo(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return di(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return fi(n);
}, ao = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = Wo(r);
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
    const g = d.width ?? u.width ?? u.initialWidth ?? null, h = d.height ?? u.height ?? u.initialHeight ?? null, y = Wr(a, yr(u)), C = (g ?? 0) * (h ?? 0), b = i && y > 0;
    (!u.internals.handleBounds || b || y >= C || u.dragging) && l.push(u);
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
  const f = wr(p) ? Jn(t, p, s.measured) : t;
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
const mr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), Jn = (e = { x: 0, y: 0 }, t, n) => ({
  x: mr(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: mr(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function qu(e, t, n) {
  const { width: r, height: o } = Tn(n), { x: i, y: s } = n.internals.positionAbsolute;
  return Jn(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const Za = (e, t, n) => e < t ? mr(Math.abs(e - t), 1, t) / t : e > n ? -mr(Math.abs(e - n), 1, t) / t : 0, Ku = (e, t, n = 15, r = 40) => {
  const o = Za(e.x, r, t.width - r) * n, i = Za(e.y, r, t.height - r) * n;
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
}, Wo = (e, t = [0, 0]) => {
  const { x: n, y: r } = As(e) ? e.internals.positionAbsolute : so(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, Ru = (e, t) => fi(di(Qi(e), Qi(t))), Wr = (e, t) => {
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
}, Xo = ({ x: e, y: t }, [n, r, o]) => ({
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
  const { x: s, y: a } = Xo(e, [t, n, r]), { x: l, y: u } = Xo({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - l, p = i - u;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(p)
  };
}
const Zs = (e, t, n, r, o, i) => {
  const s = hv(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, u = Math.min(a, l), d = mr(u, r, o), p = e.x + e.width / 2, f = e.y + e.height / 2, g = t / 2 - p * d, h = n / 2 - f * d, y = vv(e, g, h, d, t, n), C = {
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
}, or = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function wr(e) {
  return e !== void 0 && e !== "parent";
}
function Tn(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function ju(e) {
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
function Yu(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : wv.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const Fu = (e) => "clientX" in e, Rt = (e, t) => {
  const n = Fu(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
  return {
    x: r - (t?.left ?? 0),
    y: o - (t?.top ?? 0)
  };
}, qa = (e, t, n, r, o) => {
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
function Ka({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
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
  const [a, l] = Ka({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [u, d] = Ka({
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
  const i = di(Wo(e), Wo(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Wr(s, fi(i)) > 0;
}
const kv = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, Cv = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), _v = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return Zu(e) ? n = { ...e } : n = {
    ...e,
    id: kv(e)
  }, Cv(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Gu({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = Uu({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const Ra = {
  [ye.Left]: { x: -1, y: 0 },
  [ye.Right]: { x: 1, y: 0 },
  [ye.Top]: { x: 0, y: -1 },
  [ye.Bottom]: { x: 0, y: 1 }
}, Sv = ({ source: e, sourcePosition: t = ye.Bottom, target: n }) => t === ye.Left || t === ye.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, ja = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function Ev({ source: e, sourcePosition: t = ye.Bottom, target: n, targetPosition: r = ye.Top, center: o, offset: i, stepPosition: s }) {
  const a = Ra[t], l = Ra[r], u = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, p = Sv({
    source: u,
    sourcePosition: t,
    target: d
  }), f = p.x !== 0 ? "x" : "y", g = p[f];
  let h = [], y, C;
  const b = { x: 0, y: 0 }, L = { x: 0, y: 0 }, [, , x, $] = Uu({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[f] * l[f] === -1) {
    f === "x" ? (y = o.x ?? u.x + (d.x - u.x) * s, C = o.y ?? (u.y + d.y) / 2) : (y = o.x ?? (u.x + d.x) / 2, C = o.y ?? u.y + (d.y - u.y) * s);
    const k = [
      { x: y, y: u.y },
      { x: y, y: d.y }
    ], V = [
      { x: u.x, y: C },
      { x: d.x, y: C }
    ];
    a[f] === g ? h = f === "x" ? k : V : h = f === "x" ? V : k;
  } else {
    const k = [{ x: u.x, y: d.y }], V = [{ x: d.x, y: u.y }];
    if (f === "x" ? h = a.x === g ? V : k : h = a.y === g ? k : V, t === r) {
      const P = Math.abs(e[f] - n[f]);
      if (P <= i) {
        const _ = Math.min(i - 1, i - P);
        a[f] === g ? b[f] = (u[f] > e[f] ? -1 : 1) * _ : L[f] = (d[f] > n[f] ? -1 : 1) * _;
      }
    }
    if (t !== r) {
      const P = f === "x" ? "y" : "x", _ = a[f] === l[P], T = u[P] > d[P], w = u[P] < d[P];
      (a[f] === 1 && (!_ && T || _ && w) || a[f] !== 1 && (!_ && w || _ && T)) && (h = f === "x" ? k : V);
    }
    const H = { x: u.x + b.x, y: u.y + b.y }, B = { x: d.x + L.x, y: d.y + L.y }, G = Math.max(Math.abs(H.x - h[0].x), Math.abs(B.x - h[0].x)), R = Math.max(Math.abs(H.y - h[0].y), Math.abs(B.y - h[0].y));
    G >= R ? (y = (H.x + B.x) / 2, C = h[0].y) : (y = h[0].x, C = (H.y + B.y) / 2);
  }
  return [[
    e,
    { x: u.x + b.x, y: u.y + b.y },
    ...h,
    { x: d.x + L.x, y: d.y + L.y },
    n
  ], y, C, x, $];
}
function Nv(e, t, n, r) {
  const o = Math.min(ja(e, t) / 2, ja(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function Bs({ sourceX: e, sourceY: t, sourcePosition: n = ye.Bottom, targetX: r, targetY: o, targetPosition: i = ye.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20, stepPosition: d = 0.5 }) {
  const [p, f, g, h, y] = Ev({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u,
    stepPosition: d
  });
  return [p.reduce((C, b, L) => {
    let x = "";
    return L > 0 && L < p.length - 1 ? x = Nv(p[L - 1], b, p[L + 1], s) : x = `${L === 0 ? "M" : "L"}${b.x} ${b.y}`, C += x, C;
  }, ""), f, g, h, y];
}
function Wa(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function Lv(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!Wa(t) || !Wa(n))
    return null;
  const r = t.internals.handleBounds || Xa(t.handles), o = n.internals.handleBounds || Xa(n.handles), i = Ya(r?.source ?? [], e.sourceHandle), s = Ya(
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
  const a = i?.position || ye.Bottom, l = s?.position || ye.Top, u = Xr(t, i, a), d = Xr(n, s, l);
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
function Xr(e, t, n = ye.Left, r = !1) {
  const o = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? Tn(e);
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
function Ya(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function es(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function Pv(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = es(l, t);
      i.has(u) || (s.push({ id: u, color: l.color || n, ...l }), i.add(u));
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
const qs = {
  nodeOrigin: [0, 0],
  nodeExtent: Ui,
  elevateNodesOnSelect: !0,
  defaults: {}
}, Dv = {
  ...qs,
  checkEquality: !0
};
function Ks(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function Mv(e, t, n) {
  const r = Ks(qs, n);
  for (const o of e.values())
    if (o.parentId)
      Rs(o, e, t, r);
    else {
      const i = so(o, r.nodeOrigin), s = wr(o.extent) ? o.extent : r.nodeExtent, a = Jn(i, s, Tn(o));
      o.internals.positionAbsolute = a;
    }
}
function zv(e, t, n, r) {
  const o = Ks(Dv, r);
  let i = e.length > 0;
  const s = new Map(t), a = o?.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const l of e) {
    let u = s.get(l.id);
    if (o.checkEquality && l === u?.internals.userNode)
      t.set(l.id, u);
    else {
      const d = so(l, o.nodeOrigin), p = wr(l.extent) ? l.extent : o.nodeExtent, f = Jn(d, p, Tn(l));
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
          z: Qu(l, a),
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
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: s } = Ks(qs, r), a = e.parentId, l = t.get(a);
  if (!l) {
    console.warn(`Parent node ${a} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  Ov(e, n);
  const u = o ? 1e3 : 0, { x: d, y: p, z: f } = Hv(e, l, i, s, u), { positionAbsolute: g } = e.internals, h = d !== g.x || p !== g.y;
  (h || f !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: h ? { x: d, y: p } : g,
      z: f
    }
  });
}
function Qu(e, t) {
  return (an(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function Hv(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = Tn(e), l = so(e, n), u = wr(e.extent) ? Jn(l, e.extent, a) : l;
  let d = Jn({ x: i + u.x, y: s + u.y }, r, a);
  e.extent === "parent" && (d = qu(d, a, t));
  const p = Qu(e, o), f = t.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: f >= p ? f + 1 : p
  };
}
function Tv(e, t, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const a = t.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? yr(a), u = Ru(l, s.rect);
    i.set(s.parentId, { expandedRect: u, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const u = a.internals.positionAbsolute, d = Tn(a), p = a.origin ?? r, f = s.x < u.x ? Math.round(Math.abs(u.x - s.x)) : 0, g = s.y < u.y ? Math.round(Math.abs(u.y - s.y)) : 0, h = Math.max(d.width, Math.round(s.width)), y = Math.max(d.height, Math.round(s.height)), C = (h - d.width) * p[0], b = (y - d.height) * p[1];
    (f > 0 || g > 0 || C || b) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - f + C,
        y: a.position.y - g + b
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
        width: h + (f ? p[0] * f - C : 0),
        height: y + (g ? p[1] * g - b : 0)
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
      const C = f.nodeElement.getBoundingClientRect(), b = wr(g.extent) ? g.extent : i;
      let { positionAbsolute: L } = g.internals;
      g.parentId && g.extent === "parent" ? L = qu(L, h, t.get(g.parentId)) : b && (L = Jn(L, b, h));
      const x = {
        ...g,
        measured: h,
        internals: {
          ...g.internals,
          positionAbsolute: L,
          handleBounds: {
            source: qa("source", f.nodeElement, C, d, g.id),
            target: qa("target", f.nodeElement, C, d, g.id)
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
    const f = Tv(p, t, n, o);
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
function Fa(e, t, n, r, o, i) {
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
    Fa("source", l, d, e, o, s), Fa("target", l, u, e, i, a), t.set(r.id, r);
  }
}
function Bv(e, t) {
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
function ec(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : ec(n, t) : !1;
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
function qv(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !ec(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
  function y({ noDragClassName: b, handleSelector: L, domNode: x, isSelectable: $, nodeId: k, nodeClickDistance: V = 0 }) {
    f = Lt(x);
    function H({ x: P, y: _ }, T) {
      const { nodeLookup: w, nodeExtent: E, snapGrid: N, snapToGrid: z, nodeOrigin: I, onNodeDrag: M, onSelectionDrag: q, onError: X, updateNodePositions: U } = t();
      i = { x: P, y: _ };
      let oe = !1, W = { x: 0, y: 0, x2: 0, y2: 0 };
      if (a.size > 1 && E) {
        const F = ao(a);
        W = Qi(F);
      }
      for (const [F, J] of a) {
        if (!w.has(F))
          continue;
        let ee = { x: P - J.distance.x, y: _ - J.distance.y };
        z && (ee = pi(ee, N));
        let Y = [
          [E[0][0], E[0][1]],
          [E[1][0], E[1][1]]
        ];
        if (a.size > 1 && E && !J.extent) {
          const { positionAbsolute: re } = J.internals, te = re.x - W.x + E[0][0], de = re.x + J.measured.width - W.x2 + E[1][0], ne = re.y - W.y + E[0][1], he = re.y + J.measured.height - W.y2 + E[1][1];
          Y = [
            [te, ne],
            [de, he]
          ];
        }
        const { position: ve, positionAbsolute: fe } = Bu({
          nodeId: F,
          nextPosition: ee,
          nodeLookup: w,
          nodeExtent: Y,
          nodeOrigin: I,
          onError: X
        });
        oe = oe || J.position.x !== ve.x || J.position.y !== ve.y, J.position = ve, J.internals.positionAbsolute = fe;
      }
      if (h = h || oe, !!oe && (U(a, !0), T && (r || M || !k && q))) {
        const [F, J] = Ei({
          nodeId: k,
          dragItems: a,
          nodeLookup: w
        });
        r?.(T, a, F, J), M?.(T, F, J), k || q?.(T, J);
      }
    }
    async function B() {
      if (!d)
        return;
      const { transform: P, panBy: _, autoPanSpeed: T, autoPanOnNodeDrag: w } = t();
      if (!w) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [E, N] = Ku(u, d, T);
      (E !== 0 || N !== 0) && (i.x = (i.x ?? 0) - E / P[2], i.y = (i.y ?? 0) - N / P[2], await _({ x: E, y: N }) && H(i, null)), s = requestAnimationFrame(B);
    }
    function G(P) {
      const { nodeLookup: _, multiSelectionActive: T, nodesDraggable: w, transform: E, snapGrid: N, snapToGrid: z, selectNodesOnDrag: I, onNodeDragStart: M, onSelectionDragStart: q, unselectNodesAndEdges: X } = t();
      p = !0, (!I || !$) && !T && k && (_.get(k)?.selected || X()), $ && I && k && e?.(k);
      const U = Si(P.sourceEvent, { transform: E, snapGrid: N, snapToGrid: z, containerBounds: d });
      if (i = U, a = qv(_, w, U, k), a.size > 0 && (n || M || !k && q)) {
        const [oe, W] = Ei({
          nodeId: k,
          dragItems: a,
          nodeLookup: _
        });
        n?.(P.sourceEvent, a, oe, W), M?.(P.sourceEvent, oe, W), k || q?.(P.sourceEvent, W);
      }
    }
    const R = f1().clickDistance(V).on("start", (P) => {
      const { domNode: _, nodeDragThreshold: T, transform: w, snapGrid: E, snapToGrid: N } = t();
      d = _?.getBoundingClientRect() || null, g = !1, h = !1, T === 0 && G(P), i = Si(P.sourceEvent, { transform: w, snapGrid: E, snapToGrid: N, containerBounds: d }), u = Rt(P.sourceEvent, d);
    }).on("drag", (P) => {
      const { autoPanOnNodeDrag: _, transform: T, snapGrid: w, snapToGrid: E, nodeDragThreshold: N, nodeLookup: z } = t(), I = Si(P.sourceEvent, { transform: T, snapGrid: w, snapToGrid: E, containerBounds: d });
      if ((P.sourceEvent.type === "touchmove" && P.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      k && !z.has(k)) && (g = !0), !g) {
        if (!l && _ && p && (l = !0, B()), !p) {
          const M = I.xSnapped - (i.x ?? 0), q = I.ySnapped - (i.y ?? 0);
          Math.sqrt(M * M + q * q) > N && G(P);
        }
        (i.x !== I.xSnapped || i.y !== I.ySnapped) && a && p && (u = Rt(P.sourceEvent, d), H(I, P.sourceEvent));
      }
    }).on("end", (P) => {
      if (!(!p || g) && (l = !1, p = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: _, updateNodePositions: T, onNodeDragStop: w, onSelectionDragStop: E } = t();
        if (h && (T(a, !1), h = !1), o || w || !k && E) {
          const [N, z] = Ei({
            nodeId: k,
            dragItems: a,
            nodeLookup: _,
            dragging: !1
          });
          o?.(P.sourceEvent, a, N, z), w?.(P.sourceEvent, N, z), k || E?.(P.sourceEvent, z);
        }
      }
    }).filter((P) => {
      const _ = P.target;
      return !P.button && (!b || !Ja(_, `.${b}`, x)) && (!L || Ja(_, L, x));
    });
    f.call(R);
  }
  function C() {
    f?.on(".drag", null);
  }
  return {
    update: y,
    destroy: C
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
    Wr(o, yr(i)) > 0 && r.push(i);
  return r;
}
const jv = 250;
function Wv(e, t, n, r) {
  let o = [], i = 1 / 0;
  const s = Rv(e, n, t + jv);
  for (const a of s) {
    const l = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const u of l) {
      if (r.nodeId === u.nodeId && r.type === u.type && r.id === u.id)
        continue;
      const { x: d, y: p } = Xr(a, u, u.position, !0), f = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(p - e.y, 2));
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
function tc(e, t, n, r, o, i = !1) {
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((u) => u.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...Xr(s, l, l.position, !0) } : l;
}
function nc(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function Xv(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const rc = () => !0;
function Yv(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: d, flowId: p, panBy: f, cancelConnection: g, onConnectStart: h, onConnect: y, onConnectEnd: C, isValidConnection: b = rc, onReconnectEnd: L, updateConnection: x, getTransform: $, getFromHandle: k, autoPanSpeed: V, dragThreshold: H = 1 }) {
  const B = Xu(e.target);
  let G = 0, R;
  const { x: P, y: _ } = Rt(e), T = B?.elementFromPoint(P, _), w = nc(i, T), E = a?.getBoundingClientRect();
  let N = !1;
  if (!E || !w)
    return;
  const z = tc(o, w, r, l, t);
  if (!z)
    return;
  let I = Rt(e, E), M = !1, q = null, X = !1, U = null;
  function oe() {
    if (!d || !E)
      return;
    const [fe, re] = Ku(I, E, V);
    f({ x: fe, y: re }), G = requestAnimationFrame(oe);
  }
  const W = {
    ...z,
    nodeId: o,
    type: w,
    position: z.position
  }, F = l.get(o);
  let J = {
    inProgress: !0,
    isValid: null,
    from: Xr(F, W, ye.Left, !0),
    fromHandle: W,
    fromPosition: W.position,
    fromNode: F,
    to: I,
    toHandle: null,
    toPosition: Aa[W.position],
    toNode: null
  };
  function ee() {
    N = !0, x(J), h?.(e, { nodeId: o, handleId: r, handleType: w });
  }
  H === 0 && ee();
  function Y(fe) {
    if (!N) {
      const { x: ne, y: he } = Rt(fe), ie = ne - P, ke = he - _;
      if (!(ie * ie + ke * ke > H * H))
        return;
      ee();
    }
    if (!k() || !W) {
      ve(fe);
      return;
    }
    const re = $();
    I = Rt(fe, E), R = Wv(lo(I, re, !1, [1, 1]), n, l, W), M || (oe(), M = !0);
    const te = oc(fe, {
      handle: R,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: b,
      doc: B,
      lib: u,
      flowId: p,
      nodeLookup: l
    });
    U = te.handleDomNode, q = te.connection, X = Xv(!!R, te.isValid);
    const de = {
      // from stays the same
      ...J,
      isValid: X,
      to: te.toHandle && X ? Xo({ x: te.toHandle.x, y: te.toHandle.y }, re) : I,
      toHandle: te.toHandle,
      toPosition: X && te.toHandle ? te.toHandle.position : Aa[W.position],
      toNode: te.toHandle ? l.get(te.toHandle.nodeId) : null
    };
    X && R && J.toHandle && de.toHandle && J.toHandle.type === de.toHandle.type && J.toHandle.nodeId === de.toHandle.nodeId && J.toHandle.id === de.toHandle.id && J.to.x === de.to.x && J.to.y === de.to.y || (x(de), J = de);
  }
  function ve(fe) {
    if (N) {
      (R || U) && q && X && y?.(q);
      const { inProgress: re, ...te } = J, de = {
        ...te,
        toPosition: J.toHandle ? J.toPosition : null
      };
      C?.(fe, de), i && L?.(fe, de);
    }
    g(), cancelAnimationFrame(G), M = !1, X = !1, q = null, U = null, B.removeEventListener("mousemove", Y), B.removeEventListener("mouseup", ve), B.removeEventListener("touchmove", Y), B.removeEventListener("touchend", ve);
  }
  B.addEventListener("mousemove", Y), B.addEventListener("mouseup", ve), B.addEventListener("touchmove", Y), B.addEventListener("touchend", ve);
}
function oc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = rc, nodeLookup: d }) {
  const p = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: g, y: h } = Rt(e), y = s.elementFromPoint(g, h), C = y?.classList.contains(`${a}-flow__handle`) ? y : f, b = {
    handleDomNode: C,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (C) {
    const L = nc(void 0, C), x = C.getAttribute("data-nodeid"), $ = C.getAttribute("data-handleid"), k = C.classList.contains("connectable"), V = C.classList.contains("connectableend");
    if (!x || !L)
      return b;
    const H = {
      source: p ? x : r,
      sourceHandle: p ? $ : o,
      target: p ? r : x,
      targetHandle: p ? o : $
    };
    b.connection = H;
    const B = k && V && (n === vr.Strict ? p && L === "source" || !p && L === "target" : x !== r || $ !== o);
    b.isValid = B && u(H), b.toHandle = tc(x, L, $, d, n, !0);
  }
  return b;
}
const Ua = {
  onPointerDown: Yv,
  isValid: oc
};
function Fv({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Lt(e);
  function i({ translateExtent: a, width: l, height: u, zoomStep: d = 10, pannable: p = !0, zoomable: f = !0, inversePan: g = !1 }) {
    const h = (x) => {
      const $ = n();
      if (x.sourceEvent.type !== "wheel" || !t)
        return;
      const k = -x.sourceEvent.deltaY * (x.sourceEvent.deltaMode === 1 ? 0.05 : x.sourceEvent.deltaMode ? 1 : 2e-3) * d, V = $[2] * Math.pow(2, k);
      t.scaleTo(V);
    };
    let y = [0, 0];
    const C = (x) => {
      (x.sourceEvent.type === "mousedown" || x.sourceEvent.type === "touchstart") && (y = [
        x.sourceEvent.clientX ?? x.sourceEvent.touches[0].clientX,
        x.sourceEvent.clientY ?? x.sourceEvent.touches[0].clientY
      ]);
    }, b = (x) => {
      const $ = n();
      if (x.sourceEvent.type !== "mousemove" && x.sourceEvent.type !== "touchmove" || !t)
        return;
      const k = [
        x.sourceEvent.clientX ?? x.sourceEvent.touches[0].clientX,
        x.sourceEvent.clientY ?? x.sourceEvent.touches[0].clientY
      ], V = [k[0] - y[0], k[1] - y[1]];
      y = k;
      const H = r() * Math.max($[2], Math.log($[2])) * (g ? -1 : 1), B = {
        x: $[0] - V[0] * H,
        y: $[1] - V[1] * H
      }, G = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: B.x,
        y: B.y,
        zoom: $[2]
      }, G, a);
    }, L = Au().on("start", C).on("zoom", p ? b : null).on("zoom.wheel", f ? h : null);
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
const Jv = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, gi = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Ni = ({ x: e, y: t, zoom: n }) => ci.translate(e, t).scale(n), ir = (e, t) => e.target.closest(`.${t}`), ic = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), Uv = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, Li = (e, t = 0, n = Uv, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, sc = (e) => {
  const t = e.ctrlKey && or() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function Gv({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (d) => {
    if (ir(d, t))
      return !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const p = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const C = Dt(d), b = sc(d), L = p * Math.pow(2, b);
      r.scaleTo(n, L, C, d);
      return;
    }
    const f = d.deltaMode === 1 ? 20 : 1;
    let g = o === Yt.Vertical ? 0 : d.deltaX * f, h = o === Yt.Horizontal ? 0 : d.deltaY * f;
    !or() && d.shiftKey && o !== Yt.Vertical && (g = d.deltaY * f, h = 0), r.translateBy(
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
    e.usedRightMouseButton = !!(n && ic(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, gi(i.transform));
  };
}
function n0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && ic(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && Jv(e.prevViewport, s.transform))) {
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
  }, p = e.getBoundingClientRect(), f = Au().clickDistance(!an(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), g = Lt(e).call(f);
  x({
    x: i.x,
    y: i.y,
    zoom: mr(i.zoom, t, n)
  }, [
    [0, 0],
    [p.width, p.height]
  ], o);
  const h = g.on("wheel.zoom"), y = g.on("dblclick.zoom");
  f.wheelDelta(sc);
  function C(_, T) {
    return g ? new Promise((w) => {
      f?.interpolate(T?.interpolate === "linear" ? Mr : No).transform(Li(g, T?.duration, T?.ease, () => w(!0)), _);
    }) : Promise.resolve(!1);
  }
  function b({ noWheelClassName: _, noPanClassName: T, onPaneContextMenu: w, userSelectionActive: E, panOnScroll: N, panOnDrag: z, panOnScrollMode: I, panOnScrollSpeed: M, preventScrolling: q, zoomOnPinch: X, zoomOnScroll: U, zoomOnDoubleClick: oe, zoomActivationKeyPressed: W, lib: F, onTransformChange: J }) {
    E && !d.isZoomingOrPanning && L();
    const ee = N && !W && !E ? Gv({
      zoomPanValues: d,
      noWheelClassName: _,
      d3Selection: g,
      d3Zoom: f,
      panOnScrollMode: I,
      panOnScrollSpeed: M,
      zoomOnPinch: X,
      onPanZoomStart: a,
      onPanZoom: s,
      onPanZoomEnd: l
    }) : Qv({
      noWheelClassName: _,
      preventScrolling: q,
      d3ZoomHandler: h
    });
    if (g.on("wheel.zoom", ee, { passive: !1 }), !E) {
      const ve = e0({
        zoomPanValues: d,
        onDraggingChange: u,
        onPanZoomStart: a
      });
      f.on("start", ve);
      const fe = t0({
        zoomPanValues: d,
        panOnDrag: z,
        onPaneContextMenu: !!w,
        onPanZoom: s,
        onTransformChange: J
      });
      f.on("zoom", fe);
      const re = n0({
        zoomPanValues: d,
        panOnDrag: z,
        panOnScroll: N,
        onPaneContextMenu: w,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      f.on("end", re);
    }
    const Y = r0({
      zoomActivationKeyPressed: W,
      panOnDrag: z,
      zoomOnScroll: U,
      panOnScroll: N,
      zoomOnDoubleClick: oe,
      zoomOnPinch: X,
      userSelectionActive: E,
      noPanClassName: T,
      noWheelClassName: _,
      lib: F
    });
    f.filter(Y), oe ? g.on("dblclick.zoom", y) : g.on("dblclick.zoom", null);
  }
  function L() {
    f.on("zoom", null);
  }
  async function x(_, T, w) {
    const E = Ni(_), N = f?.constrain()(E, T, w);
    return N && await C(N), new Promise((z) => z(N));
  }
  async function $(_, T) {
    const w = Ni(_);
    return await C(w, T), new Promise((E) => E(w));
  }
  function k(_) {
    if (g) {
      const T = Ni(_), w = g.property("__zoom");
      (w.k !== _.zoom || w.x !== _.x || w.y !== _.y) && f?.transform(g, T, null, { sync: !0 });
    }
  }
  function V() {
    const _ = g ? Tu(g.node()) : { x: 0, y: 0, k: 1 };
    return { x: _.x, y: _.y, zoom: _.k };
  }
  function H(_, T) {
    return g ? new Promise((w) => {
      f?.interpolate(T?.interpolate === "linear" ? Mr : No).scaleTo(Li(g, T?.duration, T?.ease, () => w(!0)), _);
    }) : Promise.resolve(!1);
  }
  function B(_, T) {
    return g ? new Promise((w) => {
      f?.interpolate(T?.interpolate === "linear" ? Mr : No).scaleBy(Li(g, T?.duration, T?.ease, () => w(!0)), _);
    }) : Promise.resolve(!1);
  }
  function G(_) {
    f?.scaleExtent(_);
  }
  function R(_) {
    f?.translateExtent(_);
  }
  function P(_) {
    const T = !an(_) || _ < 0 ? 0 : _;
    f?.clickDistance(T);
  }
  return {
    update: b,
    destroy: L,
    setViewport: $,
    setViewportConstrained: x,
    getViewport: V,
    scaleTo: H,
    scaleBy: B,
    setScaleExtent: G,
    setTranslateExtent: R,
    syncViewport: k,
    setClickDistance: P
  };
}
var Ga;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Ga || (Ga = {}));
var i0 = /* @__PURE__ */ Q("<div><!></div>");
function Dn(e, t) {
  ue(t, !0);
  let n = m(t, "id", 7, null), r = m(t, "type", 7, "source"), o = m(t, "position", 23, () => ye.Top), i = m(t, "style", 7), s = m(t, "class", 7), a = m(t, "isConnectable", 7), l = m(t, "isConnectableStart", 7, !0), u = m(t, "isConnectableEnd", 7, !0), d = m(t, "isValidConnection", 7), p = m(t, "onconnect", 7), f = m(t, "ondisconnect", 7), g = m(t, "children", 7), h = /* @__PURE__ */ Me(t, [
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
  const y = Nn("svelteflow__node_id"), C = Nn("svelteflow__node_connectable");
  let b = /* @__PURE__ */ S(() => r() === "target"), L = /* @__PURE__ */ S(() => a() !== void 0 ? a() : C.value), x = At(), $ = /* @__PURE__ */ S(() => x.ariaLabelConfig), k = null;
  Tl(() => {
    if (p() || f()) {
      x.edges;
      let M = x.connectionLookup.get(`${y}-${r()}${n() ? `-${n()}` : ""}`);
      if (k && !sv(M, k)) {
        const q = M ?? /* @__PURE__ */ new Map();
        Ia(k, q, f()), Ia(q, k, p());
      }
      k = new Map(M);
    }
  });
  let V = /* @__PURE__ */ S(() => {
    if (!x.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: M, toHandle: q, isValid: X } = x.connection, U = M && M.nodeId === y && M.type === r() && M.id === n(), oe = q && q.nodeId === y && q.type === r() && q.id === n(), W = x.connectionMode === vr.Strict ? M?.type !== r() : y !== M?.nodeId || n() !== M?.id;
    return [
      !0,
      U,
      oe,
      W,
      oe && X
    ];
  }), H = /* @__PURE__ */ S(() => Gr(c(V), 5)), B = /* @__PURE__ */ S(() => c(H)[0]), G = /* @__PURE__ */ S(() => c(H)[1]), R = /* @__PURE__ */ S(() => c(H)[2]), P = /* @__PURE__ */ S(() => c(H)[3]), _ = /* @__PURE__ */ S(() => c(H)[4]);
  function T(M) {
    const q = x.onbeforeconnect?.(M) ?? M;
    q && (x.addEdge(q), x.onconnect?.(M));
  }
  function w(M) {
    const q = Fu(M);
    (q && M.button === 0 || !q) && Ua.onPointerDown(M, {
      handleId: n(),
      nodeId: y,
      isTarget: c(b),
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
      onConnectStart: (X, U) => {
        x.onconnectstart?.(X, {
          nodeId: U.nodeId,
          handleId: U.handleId,
          handleType: U.handleType
        });
      },
      onConnectEnd: (X, U) => {
        x.onconnectend?.(X, U);
      },
      getTransform: () => [x.viewport.x, x.viewport.y, x.viewport.zoom],
      getFromHandle: () => x.connection.fromHandle,
      dragThreshold: x.connectionDragThreshold
    });
  }
  function E(M) {
    if (!y || !x.clickConnectStartHandle && !l())
      return;
    if (!x.clickConnectStartHandle) {
      x.onclickconnectstart?.(M, { nodeId: y, handleId: n(), handleType: r() }), x.clickConnectStartHandle = { nodeId: y, type: r(), id: n() };
      return;
    }
    const q = Xu(M.target), X = d() ?? x.isValidConnection, { connectionMode: U, clickConnectStartHandle: oe, flowId: W, nodeLookup: F } = x, { connection: J, isValid: ee } = Ua.isValid(M, {
      handle: { nodeId: y, id: n(), type: r() },
      connectionMode: U,
      fromNodeId: oe.nodeId,
      fromHandleId: oe.id ?? null,
      fromType: oe.type,
      isValidConnection: X,
      flowId: W,
      doc: q,
      lib: "svelte",
      nodeLookup: F
    });
    ee && J && T(J);
    const Y = structuredClone(Cl(x.connection));
    delete Y.inProgress, Y.toPosition = Y.toHandle ? Y.toHandle.position : null, x.onclickconnectend?.(M, Y), x.clickConnectStartHandle = null;
  }
  var N = i0(), z = () => {
  };
  Je(
    N,
    (M) => ({
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
      onmousedown: w,
      ontouchstart: w,
      onclick: x.clickConnect ? E : void 0,
      onkeypress: z,
      style: i(),
      role: "button",
      "aria-label": c($)["handle.ariaLabel"],
      tabindex: "-1",
      ...h,
      [Cn]: M
    }),
    [
      () => ({
        valid: c(_),
        connectingto: c(R),
        connectingfrom: c(G),
        source: !c(b),
        target: c(b),
        connectablestart: l(),
        connectableend: u(),
        connectable: c(L),
        connectionindicator: c(L) && (!c(B) || c(P)) && (c(B) || x.clickConnectStartHandle ? u() : l())
      })
    ]
  );
  var I = Z(N);
  return je(I, () => g() ?? tt), A(N), D(e, N), ce({
    get id() {
      return n();
    },
    set id(M = null) {
      n(M), v();
    },
    get type() {
      return r();
    },
    set type(M = "source") {
      r(M), v();
    },
    get position() {
      return o();
    },
    set position(M = ye.Top) {
      o(M), v();
    },
    get style() {
      return i();
    },
    set style(M) {
      i(M), v();
    },
    get class() {
      return s();
    },
    set class(M) {
      s(M), v();
    },
    get isConnectable() {
      return a();
    },
    set isConnectable(M) {
      a(M), v();
    },
    get isConnectableStart() {
      return l();
    },
    set isConnectableStart(M = !0) {
      l(M), v();
    },
    get isConnectableEnd() {
      return u();
    },
    set isConnectableEnd(M = !0) {
      u(M), v();
    },
    get isValidConnection() {
      return d();
    },
    set isValidConnection(M) {
      d(M), v();
    },
    get onconnect() {
      return p();
    },
    set onconnect(M) {
      p(M), v();
    },
    get ondisconnect() {
      return f();
    },
    set ondisconnect(M) {
      f(M), v();
    },
    get children() {
      return g();
    },
    set children(M) {
      g(M), v();
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
var s0 = /* @__PURE__ */ Q("<!> <!>", 1);
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
  var a = O(s), l = O(a);
  return Dn(l, {
    type: "source",
    get position() {
      return o();
    }
  }), xe(() => He(a, ` ${n()?.label ?? ""} `)), D(e, i), ce({
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
var a0 = /* @__PURE__ */ Q(" <!>", 1);
function ac(e, t) {
  ue(t, !0);
  let n = m(t, "data", 23, () => ({ label: "Node" })), r = m(t, "sourcePosition", 23, () => ye.Bottom);
  me();
  var o = a0(), i = le(o), s = O(i);
  return Dn(s, {
    type: "source",
    get position() {
      return r();
    }
  }), xe(() => He(i, `${n()?.label ?? ""} `)), D(e, o), ce({
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
se(ac, { data: {}, sourcePosition: {} }, [], [], !0);
var l0 = /* @__PURE__ */ Q(" <!>", 1);
function lc(e, t) {
  ue(t, !0);
  let n = m(t, "data", 23, () => ({ label: "Node" })), r = m(t, "targetPosition", 23, () => ye.Top);
  me();
  var o = l0(), i = le(o), s = O(i);
  return Dn(s, {
    type: "target",
    get position() {
      return r();
    }
  }), xe(() => He(i, `${n()?.label ?? ""} `)), D(e, o), ce({
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
se(lc, { data: {}, targetPosition: {} }, [], [], !0);
function uc(e, t) {
}
se(uc, {}, [], [], !0);
function Pi(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function cc(e, t) {
  const n = /* @__PURE__ */ S(At), r = /* @__PURE__ */ S(() => c(n).domNode);
  let o;
  return c(r) ? Pi(e, c(r), t) : o = $s(() => {
    Re(() => {
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
function dc() {
  let e = /* @__PURE__ */ Ce(typeof window > "u");
  if (c(e)) {
    const t = $s(() => {
      Re(() => {
        j(e, !1), t?.();
      });
    });
  }
  return {
    get value() {
      return c(e);
    }
  };
}
const Qa = (e) => lv(e), u0 = (e) => Zu(e);
function Gt(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const Yo = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var c0 = /* @__PURE__ */ Q("<div><!></div>");
const d0 = {
  hash: "svelte-w2n27y",
  code: ".transparent.svelte-w2n27y {background:transparent;}"
};
function fc(e, t) {
  ue(t, !0), Pe(e, d0);
  let n = m(t, "x", 7, 0), r = m(t, "y", 7, 0), o = m(t, "width", 7), i = m(t, "height", 7), s = m(t, "selectEdgeOnClick", 7, !1), a = m(t, "transparent", 7, !1), l = m(t, "class", 7), u = m(t, "children", 7), d = /* @__PURE__ */ Me(t, [
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
  const p = At(), f = Nn("svelteflow__edge_id");
  let g = /* @__PURE__ */ S(() => p.visible.edges.get(f)?.zIndex);
  var h = c0(), y = () => {
    s() && f && p.handleEdgeSelection(f);
  };
  Je(
    h,
    (b) => ({
      class: [
        "svelte-flow__edge-label",
        { transparent: a() },
        l()
      ],
      tabindex: "-1",
      onclick: y,
      ...d,
      [Kt]: b
    }),
    [
      () => ({
        display: dc().value ? "none" : void 0,
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
  var C = Z(h);
  return je(C, () => u() ?? tt), A(h), ot(h, (b, L) => cc?.(b, L), () => "edge-labels"), D(e, h), ce({
    get x() {
      return n();
    },
    set x(b = 0) {
      n(b), v();
    },
    get y() {
      return r();
    },
    set y(b = 0) {
      r(b), v();
    },
    get width() {
      return o();
    },
    set width(b) {
      o(b), v();
    },
    get height() {
      return i();
    },
    set height(b) {
      i(b), v();
    },
    get selectEdgeOnClick() {
      return s();
    },
    set selectEdgeOnClick(b = !1) {
      s(b), v();
    },
    get transparent() {
      return a();
    },
    set transparent(b = !1) {
      a(b), v();
    },
    get class() {
      return l();
    },
    set class(b) {
      l(b), v();
    },
    get children() {
      return u();
    },
    set children(b) {
      u(b), v();
    }
  });
}
se(
  fc,
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
  let n = m(t, "id", 7), r = m(t, "path", 7), o = m(t, "label", 7), i = m(t, "labelX", 7), s = m(t, "labelY", 7), a = m(t, "labelStyle", 7), l = m(t, "markerStart", 7), u = m(t, "markerEnd", 7), d = m(t, "style", 7), p = m(t, "interactionWidth", 7, 20), f = m(t, "class", 7), g = /* @__PURE__ */ Me(t, [
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
  var h = p0(), y = le(h), C = O(y);
  {
    var b = ($) => {
      var k = f0();
      Je(k, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": p(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...g
      })), D($, k);
    };
    ae(C, ($) => {
      p() > 0 && $(b);
    });
  }
  var L = O(C);
  {
    var x = ($) => {
      fc($, {
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
        children: (k, V) => {
          me();
          var H = $e();
          xe(() => He(H, o())), D(k, H);
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
  }), D(e, h), ce({
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
function Ws(e, t) {
  ue(t, !0);
  let n = m(t, "id", 7), r = m(t, "interactionWidth", 7), o = m(t, "label", 7), i = m(t, "labelStyle", 7), s = m(t, "markerEnd", 7), a = m(t, "markerStart", 7), l = m(t, "pathOptions", 7), u = m(t, "sourcePosition", 7), d = m(t, "sourceX", 7), p = m(t, "sourceY", 7), f = m(t, "style", 7), g = m(t, "targetPosition", 7), h = m(t, "targetX", 7), y = m(t, "targetY", 7), C = /* @__PURE__ */ S(() => Ju({
    sourceX: d(),
    sourceY: p(),
    targetX: h(),
    targetY: y(),
    sourcePosition: u(),
    targetPosition: g(),
    curvature: l()?.curvature
  })), b = /* @__PURE__ */ S(() => Gr(c(C), 3)), L = /* @__PURE__ */ S(() => c(b)[0]), x = /* @__PURE__ */ S(() => c(b)[1]), $ = /* @__PURE__ */ S(() => c(b)[2]);
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
      return u();
    },
    set sourcePosition(k) {
      u(k), v();
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
se(
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
function pc(e, t) {
  ue(t, !0);
  let n = m(t, "interactionWidth", 7), r = m(t, "label", 7), o = m(t, "labelStyle", 7), i = m(t, "style", 7), s = m(t, "markerEnd", 7), a = m(t, "markerStart", 7), l = m(t, "sourcePosition", 7), u = m(t, "sourceX", 7), d = m(t, "sourceY", 7), p = m(t, "targetPosition", 7), f = m(t, "targetX", 7), g = m(t, "targetY", 7), h = /* @__PURE__ */ S(() => Bs({
    sourceX: u(),
    sourceY: d(),
    targetX: f(),
    targetY: g(),
    sourcePosition: l(),
    targetPosition: p()
  })), y = /* @__PURE__ */ S(() => Gr(c(h), 3)), C = /* @__PURE__ */ S(() => c(y)[0]), b = /* @__PURE__ */ S(() => c(y)[1]), L = /* @__PURE__ */ S(() => c(y)[2]);
  return uo(e, {
    get path() {
      return c(C);
    },
    get labelX() {
      return c(b);
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
  pc,
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
function gc(e, t) {
  ue(t, !0);
  let n = m(t, "sourceX", 7), r = m(t, "sourceY", 7), o = m(t, "targetX", 7), i = m(t, "targetY", 7), s = m(t, "label", 7), a = m(t, "labelStyle", 7), l = m(t, "markerStart", 7), u = m(t, "markerEnd", 7), d = m(t, "interactionWidth", 7), p = m(t, "style", 7), f = /* @__PURE__ */ S(() => Gu({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), g = /* @__PURE__ */ S(() => Gr(c(f), 3)), h = /* @__PURE__ */ S(() => c(g)[0]), y = /* @__PURE__ */ S(() => c(g)[1]), C = /* @__PURE__ */ S(() => c(g)[2]);
  return uo(e, {
    get path() {
      return c(h);
    },
    get labelX() {
      return c(y);
    },
    get labelY() {
      return c(C);
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
    set sourceX(b) {
      n(b), v();
    },
    get sourceY() {
      return r();
    },
    set sourceY(b) {
      r(b), v();
    },
    get targetX() {
      return o();
    },
    set targetX(b) {
      o(b), v();
    },
    get targetY() {
      return i();
    },
    set targetY(b) {
      i(b), v();
    },
    get label() {
      return s();
    },
    set label(b) {
      s(b), v();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(b) {
      a(b), v();
    },
    get markerStart() {
      return l();
    },
    set markerStart(b) {
      l(b), v();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(b) {
      u(b), v();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(b) {
      d(b), v();
    },
    get style() {
      return p();
    },
    set style(b) {
      p(b), v();
    }
  });
}
se(
  gc,
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
function hc(e, t) {
  ue(t, !0);
  let n = m(t, "sourceX", 7), r = m(t, "sourceY", 7), o = m(t, "sourcePosition", 7), i = m(t, "targetX", 7), s = m(t, "targetY", 7), a = m(t, "targetPosition", 7), l = m(t, "label", 7), u = m(t, "labelStyle", 7), d = m(t, "markerStart", 7), p = m(t, "markerEnd", 7), f = m(t, "interactionWidth", 7), g = m(t, "style", 7), h = /* @__PURE__ */ S(() => Bs({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), y = /* @__PURE__ */ S(() => Gr(c(h), 3)), C = /* @__PURE__ */ S(() => c(y)[0]), b = /* @__PURE__ */ S(() => c(y)[1]), L = /* @__PURE__ */ S(() => c(y)[2]);
  return uo(e, {
    get path() {
      return c(C);
    },
    get labelX() {
      return c(b);
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
  hc,
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
  let t = 0, n = Xn(0), r;
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
function el(e) {
  const { edges: t, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l } = e, u = /* @__PURE__ */ new Map();
  for (const d of t) {
    const p = r.get(d.source), f = r.get(d.target);
    if (!p || !f)
      continue;
    if (a) {
      const { visibleNodes: y, transform: C, width: b, height: L } = e;
      if ($v({
        sourceNode: p,
        targetNode: f,
        width: b,
        height: L,
        transform: C
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
const vc = {
  input: ac,
  output: lc,
  default: js,
  group: uc
}, mc = {
  straight: gc,
  smoothstep: pc,
  default: Ws,
  step: hc
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
      j(this.#t, r);
    }
    #e = /* @__PURE__ */ Ce(null);
    get domNode() {
      return c(this.#e);
    }
    set domNode(r) {
      j(this.#e, r);
    }
    #n = /* @__PURE__ */ Ce(null);
    get panZoom() {
      return c(this.#n);
    }
    set panZoom(r) {
      j(this.#n, r);
    }
    #r = /* @__PURE__ */ Ce(e.width ?? 0);
    get width() {
      return c(this.#r);
    }
    set width(r) {
      j(this.#r, r);
    }
    #o = /* @__PURE__ */ Ce(e.height ?? 0);
    get height() {
      return c(this.#o);
    }
    set height(r) {
      j(this.#o, r);
    }
    #i = /* @__PURE__ */ S(() => {
      const r = zv(e.nodes, this.nodeLookup, this.parentLookup, {
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
      j(this.#i, r);
    }
    #s = /* @__PURE__ */ S(() => this.panZoom !== null);
    get viewportInitialized() {
      return c(this.#s);
    }
    set viewportInitialized(r) {
      j(this.#s, r);
    }
    #a = /* @__PURE__ */ S(() => (Zv(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
    get _edges() {
      return c(this.#a);
    }
    set _edges(r) {
      j(this.#a, r);
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
      j(this.#l, r);
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
      j(this.#u, r);
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
        const { viewport: h, width: y, height: C } = this, b = [h.x, h.y, h.zoom];
        p = w0(s, b, y, C), f = el({
          ...g,
          onlyRenderVisible: !0,
          visibleNodes: p,
          transform: b,
          width: y,
          height: C
        });
      } else
        p = this.nodeLookup, f = el(g);
      return { nodes: p, edges: f };
    });
    get visible() {
      return c(this.#c);
    }
    set visible(r) {
      j(this.#c, r);
    }
    #d = /* @__PURE__ */ S(() => e.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return c(this.#d);
    }
    set nodesDraggable(r) {
      j(this.#d, r);
    }
    #f = /* @__PURE__ */ S(() => e.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return c(this.#f);
    }
    set nodesConnectable(r) {
      j(this.#f, r);
    }
    #p = /* @__PURE__ */ S(() => e.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return c(this.#p);
    }
    set elementsSelectable(r) {
      j(this.#p, r);
    }
    #g = /* @__PURE__ */ S(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return c(this.#g);
    }
    set nodesFocusable(r) {
      j(this.#g, r);
    }
    #h = /* @__PURE__ */ S(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return c(this.#h);
    }
    set edgesFocusable(r) {
      j(this.#h, r);
    }
    #v = /* @__PURE__ */ S(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return c(this.#v);
    }
    set disableKeyboardA11y(r) {
      j(this.#v, r);
    }
    #m = /* @__PURE__ */ S(() => e.props.minZoom ?? 0.5);
    get minZoom() {
      return c(this.#m);
    }
    set minZoom(r) {
      j(this.#m, r);
    }
    #y = /* @__PURE__ */ S(() => e.props.maxZoom ?? 2);
    get maxZoom() {
      return c(this.#y);
    }
    set maxZoom(r) {
      j(this.#y, r);
    }
    #w = /* @__PURE__ */ S(() => e.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return c(this.#w);
    }
    set nodeOrigin(r) {
      j(this.#w, r);
    }
    #b = /* @__PURE__ */ S(() => e.props.nodeExtent ?? Ui);
    get nodeExtent() {
      return c(this.#b);
    }
    set nodeExtent(r) {
      j(this.#b, r);
    }
    #x = /* @__PURE__ */ S(() => e.props.translateExtent ?? Ui);
    get translateExtent() {
      return c(this.#x);
    }
    set translateExtent(r) {
      j(this.#x, r);
    }
    #$ = /* @__PURE__ */ S(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return c(this.#$);
    }
    set defaultEdgeOptions(r) {
      j(this.#$, r);
    }
    #k = /* @__PURE__ */ S(() => e.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return c(this.#k);
    }
    set nodeDragThreshold(r) {
      j(this.#k, r);
    }
    #C = /* @__PURE__ */ S(() => e.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return c(this.#C);
    }
    set autoPanOnNodeDrag(r) {
      j(this.#C, r);
    }
    #_ = /* @__PURE__ */ S(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return c(this.#_);
    }
    set autoPanOnConnect(r) {
      j(this.#_, r);
    }
    #S = /* @__PURE__ */ S(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return c(this.#S);
    }
    set autoPanOnNodeFocus(r) {
      j(this.#S, r);
    }
    #E = /* @__PURE__ */ S(() => e.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return c(this.#E);
    }
    set connectionDragThreshold(r) {
      j(this.#E, r);
    }
    fitViewQueued = e.props.fitView ?? !1;
    fitViewOptions = e.props.fitViewOptions;
    fitViewResolver = null;
    #N = /* @__PURE__ */ S(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return c(this.#N);
    }
    set snapGrid(r) {
      j(this.#N, r);
    }
    #L = /* @__PURE__ */ Ce(!1);
    get dragging() {
      return c(this.#L);
    }
    set dragging(r) {
      j(this.#L, r);
    }
    #P = /* @__PURE__ */ Ce(null);
    get selectionRect() {
      return c(this.#P);
    }
    set selectionRect(r) {
      j(this.#P, r);
    }
    #V = /* @__PURE__ */ Ce(!1);
    get selectionKeyPressed() {
      return c(this.#V);
    }
    set selectionKeyPressed(r) {
      j(this.#V, r);
    }
    #D = /* @__PURE__ */ Ce(!1);
    get multiselectionKeyPressed() {
      return c(this.#D);
    }
    set multiselectionKeyPressed(r) {
      j(this.#D, r);
    }
    #M = /* @__PURE__ */ Ce(!1);
    get deleteKeyPressed() {
      return c(this.#M);
    }
    set deleteKeyPressed(r) {
      j(this.#M, r);
    }
    #z = /* @__PURE__ */ Ce(!1);
    get panActivationKeyPressed() {
      return c(this.#z);
    }
    set panActivationKeyPressed(r) {
      j(this.#z, r);
    }
    #O = /* @__PURE__ */ Ce(!1);
    get zoomActivationKeyPressed() {
      return c(this.#O);
    }
    set zoomActivationKeyPressed(r) {
      j(this.#O, r);
    }
    #H = /* @__PURE__ */ Ce(null);
    get selectionRectMode() {
      return c(this.#H);
    }
    set selectionRectMode(r) {
      j(this.#H, r);
    }
    #T = /* @__PURE__ */ Ce("");
    get ariaLiveMessage() {
      return c(this.#T);
    }
    set ariaLiveMessage(r) {
      j(this.#T, r);
    }
    #A = /* @__PURE__ */ S(() => e.props.selectionMode ?? jo.Partial);
    get selectionMode() {
      return c(this.#A);
    }
    set selectionMode(r) {
      j(this.#A, r);
    }
    #I = /* @__PURE__ */ S(() => ({ ...vc, ...e.props.nodeTypes }));
    get nodeTypes() {
      return c(this.#I);
    }
    set nodeTypes(r) {
      j(this.#I, r);
    }
    #Z = /* @__PURE__ */ S(() => ({ ...mc, ...e.props.edgeTypes }));
    get edgeTypes() {
      return c(this.#Z);
    }
    set edgeTypes(r) {
      j(this.#Z, r);
    }
    #B = /* @__PURE__ */ S(() => e.props.noPanClass ?? "nopan");
    get noPanClass() {
      return c(this.#B);
    }
    set noPanClass(r) {
      j(this.#B, r);
    }
    #q = /* @__PURE__ */ S(() => e.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return c(this.#q);
    }
    set noDragClass(r) {
      j(this.#q, r);
    }
    #K = /* @__PURE__ */ S(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return c(this.#K);
    }
    set noWheelClass(r) {
      j(this.#K, r);
    }
    #R = /* @__PURE__ */ S(() => yv(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return c(this.#R);
    }
    set ariaLabelConfig(r) {
      j(this.#R, r);
    }
    #j = /* @__PURE__ */ Ce(b0(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return c(this.#j);
    }
    set _viewport(r) {
      j(this.#j, r);
    }
    get viewport() {
      return e.viewport ?? this._viewport;
    }
    set viewport(r) {
      e.viewport && (e.viewport = r), this._viewport = r;
    }
    #W = /* @__PURE__ */ Ce(
      // _connection is viewport independent and originating from XYHandle
      Gi
    );
    get _connection() {
      return c(this.#W);
    }
    set _connection(r) {
      j(this.#W, r);
    }
    #X = /* @__PURE__ */ S(() => this._connection.inProgress ? {
      ...this._connection,
      to: lo(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return c(this.#X);
    }
    set connection(r) {
      j(this.#X, r);
    }
    #Y = /* @__PURE__ */ S(() => e.props.connectionMode ?? vr.Strict);
    get connectionMode() {
      return c(this.#Y);
    }
    set connectionMode(r) {
      j(this.#Y, r);
    }
    #F = /* @__PURE__ */ S(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return c(this.#F);
    }
    set connectionRadius(r) {
      j(this.#F, r);
    }
    #J = /* @__PURE__ */ S(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return c(this.#J);
    }
    set isValidConnection(r) {
      j(this.#J, r);
    }
    #U = /* @__PURE__ */ S(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return c(this.#U);
    }
    set selectNodesOnDrag(r) {
      j(this.#U, r);
    }
    #G = /* @__PURE__ */ S(() => e.props.defaultMarkerColor ?? "#b1b1b7");
    get defaultMarkerColor() {
      return c(this.#G);
    }
    set defaultMarkerColor(r) {
      j(this.#G, r);
    }
    #Q = /* @__PURE__ */ S(() => Pv(e.edges, {
      defaultColor: this.defaultMarkerColor,
      id: this.flowId,
      defaultMarkerStart: this.defaultEdgeOptions.markerStart,
      defaultMarkerEnd: this.defaultEdgeOptions.markerEnd
    }));
    get markers() {
      return c(this.#Q);
    }
    set markers(r) {
      j(this.#Q, r);
    }
    #ee = /* @__PURE__ */ S(() => e.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return c(this.#ee);
    }
    set onlyRenderVisibleElements(r) {
      j(this.#ee, r);
    }
    #te = /* @__PURE__ */ S(() => e.props.onflowerror ?? gv);
    get onerror() {
      return c(this.#te);
    }
    set onerror(r) {
      j(this.#te, r);
    }
    #ne = /* @__PURE__ */ S(() => e.props.ondelete);
    get ondelete() {
      return c(this.#ne);
    }
    set ondelete(r) {
      j(this.#ne, r);
    }
    #re = /* @__PURE__ */ S(() => e.props.onbeforedelete);
    get onbeforedelete() {
      return c(this.#re);
    }
    set onbeforedelete(r) {
      j(this.#re, r);
    }
    #oe = /* @__PURE__ */ S(() => e.props.onbeforeconnect);
    get onbeforeconnect() {
      return c(this.#oe);
    }
    set onbeforeconnect(r) {
      j(this.#oe, r);
    }
    #ie = /* @__PURE__ */ S(() => e.props.onconnect);
    get onconnect() {
      return c(this.#ie);
    }
    set onconnect(r) {
      j(this.#ie, r);
    }
    #se = /* @__PURE__ */ S(() => e.props.onconnectstart);
    get onconnectstart() {
      return c(this.#se);
    }
    set onconnectstart(r) {
      j(this.#se, r);
    }
    #ae = /* @__PURE__ */ S(() => e.props.onconnectend);
    get onconnectend() {
      return c(this.#ae);
    }
    set onconnectend(r) {
      j(this.#ae, r);
    }
    #le = /* @__PURE__ */ S(() => e.props.onbeforereconnect);
    get onbeforereconnect() {
      return c(this.#le);
    }
    set onbeforereconnect(r) {
      j(this.#le, r);
    }
    #ue = /* @__PURE__ */ S(() => e.props.onreconnect);
    get onreconnect() {
      return c(this.#ue);
    }
    set onreconnect(r) {
      j(this.#ue, r);
    }
    #ce = /* @__PURE__ */ S(() => e.props.onreconnectstart);
    get onreconnectstart() {
      return c(this.#ce);
    }
    set onreconnectstart(r) {
      j(this.#ce, r);
    }
    #de = /* @__PURE__ */ S(() => e.props.onreconnectend);
    get onreconnectend() {
      return c(this.#de);
    }
    set onreconnectend(r) {
      j(this.#de, r);
    }
    #fe = /* @__PURE__ */ S(() => e.props.clickConnect ?? !0);
    get clickConnect() {
      return c(this.#fe);
    }
    set clickConnect(r) {
      j(this.#fe, r);
    }
    #pe = /* @__PURE__ */ S(() => e.props.onclickconnectstart);
    get onclickconnectstart() {
      return c(this.#pe);
    }
    set onclickconnectstart(r) {
      j(this.#pe, r);
    }
    #ge = /* @__PURE__ */ S(() => e.props.onclickconnectend);
    get onclickconnectend() {
      return c(this.#ge);
    }
    set onclickconnectend(r) {
      j(this.#ge, r);
    }
    #he = /* @__PURE__ */ Ce(null);
    get clickConnectStartHandle() {
      return c(this.#he);
    }
    set clickConnectStartHandle(r) {
      j(this.#he, r);
    }
    #ve = /* @__PURE__ */ S(() => e.props.onselectiondrag);
    get onselectiondrag() {
      return c(this.#ve);
    }
    set onselectiondrag(r) {
      j(this.#ve, r);
    }
    #me = /* @__PURE__ */ S(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return c(this.#me);
    }
    set onselectiondragstart(r) {
      j(this.#me, r);
    }
    #ye = /* @__PURE__ */ S(() => e.props.onselectiondragstop);
    get onselectiondragstop() {
      return c(this.#ye);
    }
    set onselectiondragstop(r) {
      j(this.#ye, r);
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
      j(this.#we, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = Gi, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new t();
}
function At() {
  const e = Nn(Fo);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
const Fo = Symbol();
function yc(e) {
  const t = x0(e);
  function n(P) {
    t.nodeTypes = {
      ...vc,
      ...P
    };
  }
  function r(P) {
    t.edgeTypes = {
      ...mc,
      ...P
    };
  }
  function o(P) {
    t.edges = _v(P, t.edges);
  }
  const i = (P, _ = !1) => {
    t.nodes = t.nodes.map((T) => {
      const w = P.get(T.id);
      return w ? { ...T, position: w.position, dragging: _ } : T;
    });
  };
  function s(P) {
    const { changes: _, updatedInternals: T } = Av(P, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin);
    if (!T)
      return;
    Mv(t.nodeLookup, t.parentLookup, {
      nodeOrigin: t.nodeOrigin,
      nodeExtent: t.nodeExtent
    }), t.fitViewQueued && t.resolveFitView();
    const w = /* @__PURE__ */ new Map();
    for (const E of _) {
      const N = t.nodeLookup.get(E.id)?.internals.userNode;
      if (!N)
        continue;
      const z = { ...N };
      switch (E.type) {
        case "dimensions": {
          const I = { ...z.measured, ...E.dimensions };
          E.setAttributes && (z.width = E.dimensions?.width ?? z.width, z.height = E.dimensions?.height ?? z.height), z.measured = I;
          break;
        }
        case "position":
          z.position = E.position ?? z.position;
          break;
      }
      w.set(E.id, z);
    }
    t.nodes = t.nodes.map((E) => w.get(E.id) ?? E);
  }
  function a(P) {
    const _ = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = P, t.fitViewResolver = _, t.nodes = [...t.nodes], _.promise;
  }
  async function l(P, _, T) {
    const w = typeof T?.zoom < "u" ? T.zoom : t.maxZoom, E = t.panZoom;
    return E ? (await E.setViewport({
      x: t.width / 2 - P * w,
      y: t.height / 2 - _ * w,
      zoom: w
    }, { duration: T?.duration, ease: T?.ease, interpolate: T?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function u(P, _) {
    const T = t.panZoom;
    return T ? T.scaleBy(P, _) : Promise.resolve(!1);
  }
  function d(P) {
    return u(1.2, P);
  }
  function p(P) {
    return u(1 / 1.2, P);
  }
  function f(P) {
    const _ = t.panZoom;
    _ && (_.setScaleExtent([P, t.maxZoom]), t.minZoom = P);
  }
  function g(P) {
    const _ = t.panZoom;
    _ && (_.setScaleExtent([t.minZoom, P]), t.maxZoom = P);
  }
  function h(P) {
    const _ = t.panZoom;
    _ && (_.setTranslateExtent(P), t.translateExtent = P);
  }
  function y(P) {
    t.panZoom?.setClickDistance(P);
  }
  function C(P, _ = null) {
    let T = !1;
    const w = P.map((E) => (!_ || _.has(E.id)) && E.selected ? (T = !0, { ...E, selected: !1 }) : E);
    return [T, w];
  }
  function b(P) {
    const _ = P?.nodes ? new Set(P.nodes.map((I) => I.id)) : null, [T, w] = C(t.nodes, _);
    T && (t.nodes = w);
    const E = P?.edges ? new Set(P.edges.map((I) => I.id)) : null, [N, z] = C(t.edges, E);
    N && (t.edges = z);
  }
  function L(P) {
    const _ = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((T) => {
      const w = P.includes(T.id), E = _ && T.selected || w;
      if (T.selected !== E) {
        const N = t.nodeLookup.get(T.id);
        return N && (N.selected = E), T.selected = E, { ...T };
      }
      return T;
    }), _ || b({ nodes: [] });
  }
  function x(P) {
    const _ = t.multiselectionKeyPressed;
    t.edges = t.edges.map((T) => {
      const w = P.includes(T.id), E = _ && T.selected || w;
      return T.selected !== E ? { ...T, selected: E } : T;
    }), _ || b({ edges: [] });
  }
  function $(P, _, T) {
    const w = t.nodeLookup.get(P);
    if (!w) {
      console.warn("012", Rr.error012(P));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, w.selected ? (_ || w.selected && t.multiselectionKeyPressed) && (b({ nodes: [w], edges: [] }), requestAnimationFrame(() => T?.blur())) : L([P]);
  }
  function k(P) {
    const _ = t.edgeLookup.get(P);
    if (!_) {
      console.warn("012", Rr.error012(P));
      return;
    }
    (_.selectable || t.elementsSelectable && typeof _.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, _.selected ? _.selected && t.multiselectionKeyPressed && b({ nodes: [], edges: [_] }) : x([P]));
  }
  function V(P, _) {
    const { nodeExtent: T, snapGrid: w, nodeOrigin: E, nodeLookup: N, nodesDraggable: z, onerror: I } = t, M = /* @__PURE__ */ new Map(), q = w?.[0] ?? 5, X = w?.[1] ?? 5, U = P.x * q * _, oe = P.y * X * _;
    for (const W of N.values()) {
      if (!(W.selected && (W.draggable || z && typeof W.draggable > "u")))
        continue;
      let F = {
        x: W.internals.positionAbsolute.x + U,
        y: W.internals.positionAbsolute.y + oe
      };
      w && (F = pi(F, w));
      const { position: J, positionAbsolute: ee } = Bu({
        nodeId: W.id,
        nextPosition: F,
        nodeLookup: N,
        nodeExtent: T,
        nodeOrigin: E,
        onError: I
      });
      W.position = J, W.internals.positionAbsolute = ee, M.set(W.id, W);
    }
    i(M);
  }
  function H(P) {
    return Iv({
      delta: P,
      panZoom: t.panZoom,
      transform: [t.viewport.x, t.viewport.y, t.viewport.zoom],
      translateExtent: t.translateExtent,
      width: t.width,
      height: t.height
    });
  }
  const B = (P) => {
    t._connection = { ...P };
  };
  function G() {
    t._connection = Gi;
  }
  function R() {
    t.resetStoreValues(), b();
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
    unselectNodesAndEdges: b,
    addSelectedNodes: L,
    addSelectedEdges: x,
    handleNodeSelection: $,
    handleEdgeSelection: k,
    moveSelectedNodes: V,
    panBy: H,
    updateConnection: B,
    cancelConnection: G,
    reset: R
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
var k0 = /* @__PURE__ */ Q('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function wc(e, t) {
  ue(t, !0);
  let n = m(t, "store", 15), r = m(t, "panOnScrollMode", 23, () => Yt.Free), o = m(t, "preventScrolling", 7, !0), i = m(t, "zoomOnScroll", 7, !0), s = m(t, "zoomOnDoubleClick", 7, !0), a = m(t, "zoomOnPinch", 7, !0), l = m(t, "panOnDrag", 7, !0), u = m(t, "panOnScroll", 7, !1), d = m(t, "paneClickDistance", 7, 1), p = m(t, "onmovestart", 7), f = m(t, "onmove", 7), g = m(t, "onmoveend", 7), h = m(t, "oninit", 7), y = m(t, "children", 7), C = /* @__PURE__ */ S(() => n().panActivationKeyPressed || l()), b = /* @__PURE__ */ S(() => n().panActivationKeyPressed || u());
  const { viewport: L } = n();
  let x = !1;
  Re(() => {
    !x && n().viewportInitialized && (h()?.(), x = !0);
  });
  var $ = k0(), k = Z($);
  return je(k, y), A($), ot($, (V, H) => $0?.(V, H), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: L,
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
    panOnScroll: c(b),
    panOnDrag: c(C),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: r() || Yt.Free,
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
  })), D(e, $), ce({
    get store() {
      return n();
    },
    set store(V) {
      n(V), v();
    },
    get panOnScrollMode() {
      return r();
    },
    set panOnScrollMode(V = Yt.Free) {
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
      return u();
    },
    set panOnScroll(V = !1) {
      u(V), v();
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
se(
  wc,
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
var C0 = /* @__PURE__ */ Q("<div><!></div>");
function bc(e, t) {
  ue(t, !0);
  let n = m(t, "store", 15), r = m(t, "panOnDrag", 7, !0), o = m(t, "selectionOnDrag", 7), i = m(t, "onpaneclick", 7), s = m(t, "onpanecontextmenu", 7), a = m(t, "onselectionstart", 7), l = m(t, "onselectionend", 7), u = m(t, "children", 7), d, p = null, f = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ S(() => n().panActivationKeyPressed || r()), y = /* @__PURE__ */ S(() => n().selectionKeyPressed || n().selectionRect || o() && c(h) !== !0), C = /* @__PURE__ */ S(() => n().elementsSelectable && (c(y) || n().selectionRectMode === "user")), b = !1;
  function L(_) {
    if (b || n().connection.inProgress) {
      b = !1;
      return;
    }
    i()?.({ event: _ }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0);
  }
  function x(_) {
    if (p = d?.getBoundingClientRect(), !n().elementsSelectable || !c(y) || _.button !== 0 || _.target !== d || !p)
      return;
    _.target?.setPointerCapture?.(_.pointerId);
    const { x: T, y: w } = Rt(_, p);
    n().unselectNodesAndEdges(), n(n().selectionRect = { width: 0, height: 0, startX: T, startY: w, x: T, y: w }, !0), a()?.(_);
  }
  function $(_) {
    if (!c(y) || !p || !n().selectionRect)
      return;
    b = !0;
    const T = Rt(_, p), { startX: w = 0, startY: E = 0 } = n().selectionRect, N = {
      ...n().selectionRect,
      x: T.x < w ? T.x : w,
      y: T.y < E ? T.y : E,
      width: Math.abs(T.x - w),
      height: Math.abs(T.y - E)
    }, z = f, I = g;
    f = new Set(Is(
      n().nodeLookup,
      N,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === jo.Partial,
      !0
    ).map((q) => q.id));
    const M = n().defaultEdgeOptions.selectable ?? !0;
    g = /* @__PURE__ */ new Set();
    for (const q of f) {
      const X = n().connectionLookup.get(q);
      if (X)
        for (const { edgeId: U } of X.values()) {
          const oe = n().edgeLookup.get(U);
          oe && (oe.selectable ?? M) && g.add(U);
        }
    }
    rl(z, f) || n(n().nodes = n().nodes.map(nl(f)), !0), rl(I, g) || n(n().edges = n().edges.map(nl(g)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = N, !0);
  }
  function k(_) {
    _.button === 0 && (_.target?.releasePointerCapture?.(_.pointerId), !c(y) && n().selectionRectMode === "user" && _.target === d && L?.(_), n(n().selectionRect = null, !0), f.size > 0 && n(n().selectionRectMode = "nodes", !0), n().selectionKeyPressed && (b = !1), l()?.(_));
  }
  const V = (_) => {
    if (Array.isArray(c(h)) && c(h).includes(2)) {
      _.preventDefault();
      return;
    }
    s()?.({ event: _ });
  };
  var H = C0();
  let B;
  var G = /* @__PURE__ */ S(() => c(C) ? void 0 : tl(L, d));
  H.__click = function(..._) {
    c(G)?.apply(this, _);
  }, H.__pointerdown = function(..._) {
    (c(C) ? x : void 0)?.apply(this, _);
  }, H.__pointermove = function(..._) {
    (c(C) ? $ : void 0)?.apply(this, _);
  }, H.__pointerup = function(..._) {
    (c(C) ? k : void 0)?.apply(this, _);
  };
  var R = /* @__PURE__ */ S(() => tl(V, d));
  H.__contextmenu = function(..._) {
    c(R)?.apply(this, _);
  };
  var P = Z(H);
  return je(P, u), A(H), _t(H, (_) => d = _, () => d), xe((_) => B = yt(H, 1, "svelte-flow__pane svelte-flow__container", null, B, _), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: c(y)
    })
  ]), D(e, H), ce({
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
  bc,
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
var _0 = /* @__PURE__ */ Q('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function xc(e, t) {
  ue(t, !0);
  let n = m(t, "store", 15), r = m(t, "children", 7);
  var o = _0();
  let i;
  var s = Z(o);
  return je(s, r), A(o), xe((a) => i = ft(o, "", i, a), [
    () => ({
      transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
    })
  ]), D(e, o), ce({
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
se(xc, { store: {}, children: {} }, [], [], !0);
function $c(e, t) {
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
var S0 = /* @__PURE__ */ Q('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-62ze0y"> </div>'), E0 = /* @__PURE__ */ Q('<div class="a11y-hidden svelte-62ze0y"> </div> <div class="a11y-hidden svelte-62ze0y"> </div> <!>', 1);
const N0 = {
  hash: "svelte-62ze0y",
  code: ".a11y-hidden.svelte-62ze0y {display:none;}.a11y-live-msg.svelte-62ze0y {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function kc(e, t) {
  ue(t, !0), Pe(e, N0);
  let n = m(t, "store", 7);
  var r = E0(), o = le(r), i = Z(o, !0);
  A(o);
  var s = O(o, 2), a = Z(s, !0);
  A(s);
  var l = O(s, 2);
  {
    var u = (d) => {
      var p = S0(), f = Z(p, !0);
      A(p), xe(() => {
        we(p, "id", `${L0}-${n().flowId}`), He(f, n().ariaLiveMessage);
      }), D(d, p);
    };
    ae(l, (d) => {
      n().disableKeyboardA11y || d(u);
    });
  }
  return xe(() => {
    we(o, "id", `${Cc}-${n().flowId}`), He(i, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), we(s, "id", `${_c}-${n().flowId}`), He(a, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), D(e, r), ce({
    get store() {
      return n();
    },
    set store(d) {
      n(d), v();
    }
  });
}
se(kc, { store: {} }, [], [], !0);
const Cc = "svelte-flow__node-desc", _c = "svelte-flow__edge-desc", L0 = "svelte-flow__aria-live";
var P0 = /* @__PURE__ */ Q("<div><!></div>");
function Sc(e, t) {
  ue(t, !0);
  let n = m(t, "store", 15), r = m(t, "node", 7), o = m(t, "resizeObserver", 7), i = m(t, "nodeClickDistance", 7), s = m(t, "onnodeclick", 7), a = m(t, "onnodedrag", 7), l = m(t, "onnodedragstart", 7), u = m(t, "onnodedragstop", 7), d = m(t, "onnodepointerenter", 7), p = m(t, "onnodepointerleave", 7), f = m(t, "onnodepointermove", 7), g = m(t, "onnodecontextmenu", 7), h = /* @__PURE__ */ S(() => ut(r().data, () => ({}), !0)), y = /* @__PURE__ */ S(() => ut(r().selected, !1)), C = /* @__PURE__ */ S(() => r().draggable), b = /* @__PURE__ */ S(() => r().selectable), L = /* @__PURE__ */ S(() => ut(r().deletable, !0)), x = /* @__PURE__ */ S(() => r().connectable), $ = /* @__PURE__ */ S(() => r().focusable), k = /* @__PURE__ */ S(() => ut(r().hidden, !1)), V = /* @__PURE__ */ S(() => ut(r().dragging, !1)), H = /* @__PURE__ */ S(() => ut(r().style, "")), B = /* @__PURE__ */ S(() => r().class), G = /* @__PURE__ */ S(() => ut(r().type, "default")), R = /* @__PURE__ */ S(() => r().parentId), P = /* @__PURE__ */ S(() => r().sourcePosition), _ = /* @__PURE__ */ S(() => r().targetPosition), T = /* @__PURE__ */ S(() => ut(r().measured, () => ({ width: 0, height: 0 }), !0).width), w = /* @__PURE__ */ S(() => ut(r().measured, () => ({ width: 0, height: 0 }), !0).height), E = /* @__PURE__ */ S(() => r().initialWidth), N = /* @__PURE__ */ S(() => r().initialHeight), z = /* @__PURE__ */ S(() => r().width), I = /* @__PURE__ */ S(() => r().height), M = /* @__PURE__ */ S(() => r().dragHandle), q = /* @__PURE__ */ S(() => ut(r().internals.z, 0)), X = /* @__PURE__ */ S(() => r().internals.positionAbsolute.x), U = /* @__PURE__ */ S(() => r().internals.positionAbsolute.y), oe = /* @__PURE__ */ S(() => r().internals.userNode), { id: W } = r(), F = /* @__PURE__ */ S(() => c(C) ?? n().nodesDraggable), J = /* @__PURE__ */ S(() => c(b) ?? n().elementsSelectable), ee = /* @__PURE__ */ S(() => c(x) ?? n().nodesConnectable), Y = /* @__PURE__ */ S(() => ju(r())), ve = /* @__PURE__ */ S(() => !!r().internals.handleBounds), fe = /* @__PURE__ */ S(() => c(Y) && c(ve)), re = /* @__PURE__ */ S(() => c($) ?? n().nodesFocusable);
  function te(pe) {
    return n().parentLookup.has(pe);
  }
  let de = /* @__PURE__ */ S(() => te(W)), ne = /* @__PURE__ */ Ce(null), he = null, ie = c(G), ke = c(P), K = c(_), Ue = /* @__PURE__ */ S(() => n().nodeTypes[c(G)] ?? js), Ve = /* @__PURE__ */ S(() => n().ariaLabelConfig);
  dr("svelteflow__node_connectable", {
    get value() {
      return c(ee);
    }
  }), dr("svelteflow__node_id", W);
  let ze = /* @__PURE__ */ S(() => {
    const pe = c(T) === void 0 ? c(z) ?? c(E) : c(z), Ke = c(w) === void 0 ? c(I) ?? c(N) : c(I);
    if (!(pe === void 0 && Ke === void 0 && c(H) === void 0))
      return `${c(H)};${pe ? `width:${Gt(pe)};` : ""}${Ke ? `height:${Gt(Ke)};` : ""}`;
  });
  Re(() => {
    (c(G) !== ie || c(P) !== ke || c(_) !== K) && c(ne) !== null && requestAnimationFrame(() => {
      c(ne) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[W, { id: W, nodeElement: c(ne), force: !0 }]]));
    }), ie = c(G), ke = c(P), K = c(_);
  }), Re(() => {
    o() && (!c(fe) || c(ne) !== he) && (he && o().unobserve(he), c(ne) && o().observe(c(ne)), he = c(ne));
  }), oi(() => {
    he && o()?.unobserve(he);
  });
  function Ge(pe) {
    c(J) && (!n().selectNodesOnDrag || !c(F) || n().nodeDragThreshold > 0) && n().handleNodeSelection(W), s()?.({ node: c(oe), event: pe });
  }
  function Be(pe) {
    if (!(Yu(pe) || n().disableKeyboardA11y))
      if (Iu.includes(pe.key) && c(J)) {
        const Ke = pe.key === "Escape";
        n().handleNodeSelection(W, Ke, c(ne));
      } else c(F) && r().selected && Object.prototype.hasOwnProperty.call(Yo, pe.key) && (pe.preventDefault(), n(
        n().ariaLiveMessage = c(Ve)["node.a11yDescription.ariaLiveMessage"]({
          direction: pe.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(Yo[pe.key], pe.shiftKey ? 4 : 1));
  }
  const qe = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !c(ne)?.matches(":focus-visible"))
      return;
    const { width: pe, height: Ke, viewport: lt } = n();
    Is(/* @__PURE__ */ new Map([[W, r()]]), { x: 0, y: 0, width: pe, height: Ke }, [lt.x, lt.y, lt.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: lt.zoom });
  };
  var nn = Le(), Oe = le(nn);
  {
    var at = (pe) => {
      var Ke = P0();
      Je(
        Ke,
        (Xe, Et) => ({
          "data-id": W,
          class: [
            "svelte-flow__node",
            `svelte-flow__node-${c(G)}`,
            c(B)
          ],
          style: c(ze),
          onclick: Ge,
          onpointerenter: d() ? (Qe) => d()({ node: c(oe), event: Qe }) : void 0,
          onpointerleave: p() ? (Qe) => p()({ node: c(oe), event: Qe }) : void 0,
          onpointermove: f() ? (Qe) => f()({ node: c(oe), event: Qe }) : void 0,
          oncontextmenu: g() ? (Qe) => g()({ node: c(oe), event: Qe }) : void 0,
          onkeydown: c(re) ? Be : void 0,
          onfocus: c(re) ? qe : void 0,
          tabIndex: c(re) ? 0 : void 0,
          role: r().ariaRole ?? (c(re) ? "group" : void 0),
          "aria-roledescription": "node",
          "aria-describedby": n().disableKeyboardA11y ? void 0 : `${Cc}-${n().flowId}`,
          ...r().domAttributes,
          [Cn]: Xe,
          [Kt]: Et
        }),
        [
          () => ({
            dragging: c(V),
            selected: c(y),
            draggable: c(F),
            connectable: c(ee),
            selectable: c(J),
            nopan: c(F),
            parent: c(de)
          }),
          () => ({
            "z-index": c(q),
            transform: `translate(${c(X) ?? ""}px, ${c(U) ?? ""}px)`,
            visibility: c(Y) ? "visible" : "hidden"
          })
        ]
      );
      var lt = Z(Ke);
      Ls(lt, () => c(Ue), (Xe, Et) => {
        Et(Xe, {
          get data() {
            return c(h);
          },
          get id() {
            return W;
          },
          get selected() {
            return c(y);
          },
          get selectable() {
            return c(J);
          },
          get deletable() {
            return c(L);
          },
          get sourcePosition() {
            return c(P);
          },
          get targetPosition() {
            return c(_);
          },
          get zIndex() {
            return c(q);
          },
          get dragging() {
            return c(V);
          },
          get draggable() {
            return c(F);
          },
          get dragHandle() {
            return c(M);
          },
          get parentId() {
            return c(R);
          },
          get type() {
            return c(G);
          },
          get isConnectable() {
            return c(ee);
          },
          get positionAbsoluteX() {
            return c(X);
          },
          get positionAbsoluteY() {
            return c(U);
          },
          get width() {
            return c(z);
          },
          get height() {
            return c(I);
          }
        });
      }), A(Ke), ot(Ke, (Xe, Et) => $c?.(Xe, Et), () => ({
        nodeId: W,
        isSelectable: c(J),
        disabled: !c(F),
        handleSelector: c(M),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (Xe, Et, Qe, Zt) => {
          a()?.({ event: Xe, targetNode: Qe, nodes: Zt });
        },
        onDragStart: (Xe, Et, Qe, Zt) => {
          l()?.({ event: Xe, targetNode: Qe, nodes: Zt });
        },
        onDragStop: (Xe, Et, Qe, Zt) => {
          u()?.({ event: Xe, targetNode: Qe, nodes: Zt });
        },
        store: n()
      })), _t(Ke, (Xe) => j(ne, Xe), () => c(ne)), D(pe, Ke);
    };
    ae(Oe, (pe) => {
      c(k) || pe(at);
    });
  }
  return D(e, nn), ce({
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
  Sc,
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
var V0 = /* @__PURE__ */ Q('<div class="svelte-flow__nodes"></div>');
function Ec(e, t) {
  ue(t, !0);
  let n = m(t, "store", 15), r = m(t, "nodeClickDistance", 7), o = m(t, "onnodeclick", 7), i = m(t, "onnodecontextmenu", 7), s = m(t, "onnodepointerenter", 7), a = m(t, "onnodepointermove", 7), l = m(t, "onnodepointerleave", 7), u = m(t, "onnodedrag", 7), d = m(t, "onnodedragstart", 7), p = m(t, "onnodedragstop", 7);
  const f = typeof ResizeObserver > "u" ? null : new ResizeObserver((h) => {
    const y = /* @__PURE__ */ new Map();
    h.forEach((C) => {
      const b = C.target.getAttribute("data-id");
      y.set(b, { id: b, nodeElement: C.target, force: !0 });
    }), n().updateNodeInternals(y);
  });
  oi(() => {
    f?.disconnect();
  });
  var g = V0();
  return st(g, 21, () => n().visible.nodes.values(), (h) => h.id, (h, y) => {
    Sc(h, {
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
      set store(C) {
        n(C);
      }
    });
  }), A(g), D(e, g), ce({
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
  Ec,
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
function Nc(e, t) {
  ue(t, !0);
  const n = m(t, "edge", 7), r = m(t, "store", 15), o = m(t, "onedgeclick", 7), i = m(t, "onedgecontextmenu", 7), s = m(t, "onedgepointerenter", 7), a = m(t, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ S(() => n().source), u = /* @__PURE__ */ S(() => n().target), d = /* @__PURE__ */ S(() => n().sourceX), p = /* @__PURE__ */ S(() => n().sourceY), f = /* @__PURE__ */ S(() => n().targetX), g = /* @__PURE__ */ S(() => n().targetY), h = /* @__PURE__ */ S(() => n().sourcePosition), y = /* @__PURE__ */ S(() => n().targetPosition), C = /* @__PURE__ */ S(() => ut(n().animated, !1)), b = /* @__PURE__ */ S(() => ut(n().selected, !1)), L = /* @__PURE__ */ S(() => n().label), x = /* @__PURE__ */ S(() => n().labelStyle), $ = /* @__PURE__ */ S(() => ut(n().data, () => ({}), !0)), k = /* @__PURE__ */ S(() => n().style), V = /* @__PURE__ */ S(() => n().interactionWidth), H = /* @__PURE__ */ S(() => ut(n().type, "default")), B = /* @__PURE__ */ S(() => n().sourceHandle), G = /* @__PURE__ */ S(() => n().targetHandle), R = /* @__PURE__ */ S(() => n().markerStart), P = /* @__PURE__ */ S(() => n().markerEnd), _ = /* @__PURE__ */ S(() => n().selectable), T = /* @__PURE__ */ S(() => n().focusable), w = /* @__PURE__ */ S(() => ut(n().deletable, !0)), E = /* @__PURE__ */ S(() => n().hidden), N = /* @__PURE__ */ S(() => n().zIndex), z = /* @__PURE__ */ S(() => n().class), I = /* @__PURE__ */ S(() => n().ariaLabel), M = null;
  const { id: q } = n();
  dr("svelteflow__edge_id", q);
  let X = /* @__PURE__ */ S(() => c(_) ?? r().elementsSelectable), U = /* @__PURE__ */ S(() => c(T) ?? r().edgesFocusable), oe = /* @__PURE__ */ S(() => r().edgeTypes[c(H)] ?? Ws), W = /* @__PURE__ */ S(() => c(R) ? `url('#${es(c(R), r().flowId)}')` : void 0), F = /* @__PURE__ */ S(() => c(P) ? `url('#${es(c(P), r().flowId)}')` : void 0);
  function J(te) {
    const de = r().edgeLookup.get(q);
    de && (c(X) && r().handleEdgeSelection(q), o()?.({ event: te, edge: de }));
  }
  function ee(te, de) {
    const ne = r().edgeLookup.get(q);
    ne && de({ event: te, edge: ne });
  }
  function Y(te) {
    if (!r().disableKeyboardA11y && Iu.includes(te.key) && c(X)) {
      const { unselectNodesAndEdges: de, addSelectedEdges: ne } = r();
      te.key === "Escape" ? (M?.blur(), de({ edges: [n()] })) : ne([q]);
    }
  }
  var ve = Le(), fe = le(ve);
  {
    var re = (te) => {
      var de = D0();
      let ne;
      var he = Z(de);
      Je(
        he,
        (ke) => ({
          class: ["svelte-flow__edge", c(z)],
          "data-id": q,
          onclick: J,
          oncontextmenu: i() ? (K) => {
            ee(K, i());
          } : void 0,
          onpointerenter: s() ? (K) => {
            ee(K, s());
          } : void 0,
          onpointerleave: a() ? (K) => {
            ee(K, a());
          } : void 0,
          "aria-label": c(I) === null ? void 0 : c(I) ? c(I) : `Edge from ${c(l)} to ${c(u)}`,
          "aria-describedby": c(U) ? `${_c}-${r().flowId}` : void 0,
          role: n().ariaRole ?? (c(U) ? "group" : "img"),
          "aria-roledescription": "edge",
          onkeydown: c(U) ? Y : void 0,
          tabindex: c(U) ? 0 : void 0,
          ...n().domAttributes,
          [Cn]: ke
        }),
        [
          () => ({
            animated: c(C),
            selected: c(b),
            selectable: c(X)
          })
        ]
      );
      var ie = Z(he);
      Ls(ie, () => c(oe), (ke, K) => {
        K(ke, {
          get id() {
            return q;
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
            return c(C);
          },
          get selected() {
            return c(b);
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
            return c(k);
          },
          get interactionWidth() {
            return c(V);
          },
          get selectable() {
            return c(X);
          },
          get deletable() {
            return c(w);
          },
          get type() {
            return c(H);
          },
          get sourceHandleId() {
            return c(B);
          },
          get targetHandleId() {
            return c(G);
          },
          get markerStart() {
            return c(W);
          },
          get markerEnd() {
            return c(F);
          }
        });
      }), A(he), _t(he, (ke) => M = ke, () => M), A(de), xe((ke) => ne = ft(de, "", ne, ke), [() => ({ "z-index": c(N) })]), D(te, de);
    };
    ae(fe, (te) => {
      c(E) || te(re);
    });
  }
  return D(e, ve), ce({
    get edge() {
      return n();
    },
    set edge(te) {
      n(te), v();
    },
    get store() {
      return r();
    },
    set store(te) {
      r(te), v();
    },
    get onedgeclick() {
      return o();
    },
    set onedgeclick(te) {
      o(te), v();
    },
    get onedgecontextmenu() {
      return i();
    },
    set onedgecontextmenu(te) {
      i(te), v();
    },
    get onedgepointerenter() {
      return s();
    },
    set onedgepointerenter(te) {
      s(te), v();
    },
    get onedgepointerleave() {
      return a();
    },
    set onedgepointerleave(te) {
      a(te), v();
    }
  });
}
se(
  Nc,
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
var M0 = /* @__PURE__ */ ge("<defs></defs>");
function Lc(e, t) {
  ue(t, !1);
  const n = At();
  au();
  var r = M0();
  st(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    Pc(o, Te(() => c(i)));
  }), A(r), D(e, r), ce();
}
se(Lc, {}, [], [], !0);
var z0 = /* @__PURE__ */ ge('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), O0 = /* @__PURE__ */ ge('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), H0 = /* @__PURE__ */ ge('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Pc(e, t) {
  ue(t, !0);
  let n = m(t, "id", 7), r = m(t, "type", 7), o = m(t, "width", 7, 12.5), i = m(t, "height", 7, 12.5), s = m(t, "markerUnits", 7, "strokeWidth"), a = m(t, "orient", 7, "auto-start-reverse"), l = m(t, "color", 7), u = m(t, "strokeWidth", 7);
  var d = H0(), p = Z(d);
  {
    var f = (h) => {
      var y = z0();
      xe(() => {
        we(y, "stroke", l()), we(y, "stroke-width", u());
      }), D(h, y);
    }, g = (h, y) => {
      {
        var C = (b) => {
          var L = O0();
          xe(() => {
            we(L, "stroke", l()), we(L, "stroke-width", u()), we(L, "fill", l());
          }), D(b, L);
        };
        ae(
          h,
          (b) => {
            r() === jr.ArrowClosed && b(C);
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
  }), D(e, d), ce({
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
  Pc,
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
var T0 = /* @__PURE__ */ Q('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function Vc(e, t) {
  ue(t, !0);
  let n = m(t, "store", 15), r = m(t, "onedgeclick", 7), o = m(t, "onedgecontextmenu", 7), i = m(t, "onedgepointerenter", 7), s = m(t, "onedgepointerleave", 7);
  var a = T0(), l = Z(a), u = Z(l);
  Lc(u, {}), A(l);
  var d = O(l, 2);
  return st(d, 17, () => n().visible.edges.values(), (p) => p.id, (p, f) => {
    Nc(p, {
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
  }), A(a), D(e, a), ce({
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
  Vc,
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
var A0 = /* @__PURE__ */ Q('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const I0 = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function Xs(e, t) {
  ue(t, !0), Pe(e, I0);
  let n = m(t, "x", 7, 0), r = m(t, "y", 7, 0), o = m(t, "width", 7, 0), i = m(t, "height", 7, 0), s = m(t, "isVisible", 7, !0);
  var a = Le(), l = le(a);
  {
    var u = (d) => {
      var p = A0();
      let f;
      xe((g) => f = ft(p, "", f, g), [
        () => ({
          width: typeof o() == "string" ? o() : Gt(o()),
          height: typeof i() == "string" ? i() : Gt(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), D(d, p);
    };
    ae(l, (d) => {
      s() && d(u);
    });
  }
  return D(e, a), ce({
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
se(Xs, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
function Z0(e, t, n) {
  const r = t().nodes.filter((o) => o.selected);
  n()?.({ nodes: r, event: e });
}
function B0(e, t, n) {
  const r = t().nodes.filter((o) => o.selected);
  n()?.({ nodes: r, event: e });
}
var q0 = /* @__PURE__ */ Q("<div><!></div>");
const K0 = {
  hash: "svelte-16qgzgd",
  code: ".svelte-flow__selection-wrapper.svelte-16qgzgd {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}"
};
function Dc(e, t) {
  ue(t, !0), Pe(e, K0);
  let n = m(t, "store", 15), r = m(t, "onnodedrag", 7), o = m(t, "onnodedragstart", 7), i = m(t, "onnodedragstop", 7), s = m(t, "onselectionclick", 7), a = m(t, "onselectioncontextmenu", 7), l = /* @__PURE__ */ Ce(void 0);
  Re(() => {
    n().disableKeyboardA11y || c(l)?.focus({ preventScroll: !0 });
  });
  let u = /* @__PURE__ */ S(() => n().selectionRectMode === "nodes" ? (n().nodes, ao(n().nodeLookup, { filter: (h) => !!h.selected })) : null);
  function d(h) {
    Object.prototype.hasOwnProperty.call(Yo, h.key) && (h.preventDefault(), n().moveSelectedNodes(Yo[h.key], h.shiftKey ? 4 : 1));
  }
  var p = Le(), f = le(p);
  {
    var g = (h) => {
      var y = q0();
      y.__contextmenu = [Z0, n, a], y.__click = [B0, n, s], y.__keydown = function(...L) {
        (n().disableKeyboardA11y ? void 0 : d)?.apply(this, L);
      };
      let C;
      var b = Z(y);
      Xs(b, { width: "100%", height: "100%", x: 0, y: 0 }), A(y), ot(y, (L, x) => $c?.(L, x), () => ({
        disabled: !1,
        store: n(),
        onDrag: (L, x, $, k) => {
          r()?.({ event: L, targetNode: null, nodes: k });
        },
        onDragStart: (L, x, $, k) => {
          o()?.({ event: L, targetNode: null, nodes: k });
        },
        onDragStop: (L, x, $, k) => {
          i()?.({ event: L, targetNode: null, nodes: k });
        }
      })), _t(y, (L) => j(l, L), () => c(l)), xe(
        (L) => {
          yt(y, 1, wn(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-16qgzgd"), we(y, "role", n().disableKeyboardA11y ? void 0 : "button"), we(y, "tabindex", n().disableKeyboardA11y ? void 0 : -1), C = ft(y, "", C, L);
        },
        [
          () => ({
            width: Gt(c(u).width),
            height: Gt(c(u).height),
            transform: `translate(${c(u).x ?? ""}px, ${c(u).y ?? ""}px)`
          })
        ]
      ), D(h, y);
    };
    ae(f, (h) => {
      n().selectionRectMode === "nodes" && c(u) && an(c(u).x) && an(c(u).y) && h(g);
    });
  }
  return D(e, p), ce({
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
  Dc,
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
function Bt(e, t) {
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
      }, { modifier: f, key: g, callback: h, preventDefault: y, enabled: C } = p;
      if (C) {
        if (a.key !== g) continue;
        if (f === null || f === !1) {
          if (u !== 0) continue;
        } else if (f !== void 0 && f?.[0]?.length > 0) {
          const L = Array.isArray(f) ? f : [f];
          let x = !1;
          for (const $ of L)
            if ((Array.isArray($) ? $ : [$]).reduce(
              (k, V) => k | R0(V),
              0
            ) === u) {
              x = !0;
              break;
            }
          if (!x) continue;
        }
        y && a.preventDefault();
        const b = {
          node: e,
          trigger: p,
          originalEvent: a
        };
        e.dispatchEvent(new CustomEvent("shortcut", { detail: b })), h?.(b);
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
function nt() {
  const e = /* @__PURE__ */ S(At), t = (i) => {
    const s = Qa(i) ? i : c(e).nodeLookup.get(i.id), a = s.parentId ? mv(s.position, s.measured, s.parentId, c(e).nodeLookup, c(e).nodeOrigin) : s.position, l = {
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
        return a?.replace && Qa(u) ? u : { ...l, ...u };
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
    getViewport: () => Cl(c(e).viewport),
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
        const f = yr(p), g = Wr(f, u);
        return s && g > 0 || g >= f.width * f.height || g >= u.width * u.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const l = Ba(i) ? i : t(i);
      if (!l)
        return !1;
      const u = Wr(l, s);
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
      const { x: s, y: a, zoom: l } = c(e).viewport, { x: u, y: d } = c(e).domNode.getBoundingClientRect(), p = Xo(i, [s, a, l]);
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
function Mc(e, t) {
  ue(t, !0);
  let n = m(t, "store", 15), r = m(t, "selectionKey", 7, "Shift"), o = m(t, "multiSelectionKey", 23, () => or() ? "Meta" : "Control"), i = m(t, "deleteKey", 7, "Backspace"), s = m(t, "panActivationKey", 7, " "), a = m(t, "zoomActivationKey", 23, () => or() ? "Meta" : "Control"), { deleteElements: l } = nt();
  function u(y) {
    return y !== null && typeof y == "object";
  }
  function d(y) {
    return u(y) ? y.modifier || [] : [];
  }
  function p(y) {
    return y == null ? "" : u(y) ? y.key : y;
  }
  function f(y, C) {
    return (Array.isArray(y) ? y : [y]).map((b) => {
      const L = p(b);
      return {
        key: L,
        modifier: d(b),
        enabled: L !== null,
        callback: C
      };
    });
  }
  function g() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  async function h() {
    const y = n().nodes.filter((x) => x.selected), C = n().edges.filter((x) => x.selected), { deletedNodes: b, deletedEdges: L } = await l({ nodes: y, edges: C });
    (b.length > 0 || L.length > 0) && n().ondelete?.({ nodes: b, edges: L });
  }
  return da("blur", pt, g), da("contextmenu", pt, g), ot(pt, (y, C) => Bt?.(y, C), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), ot(pt, (y, C) => Bt?.(y, C), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), ot(pt, (y, C) => Bt?.(y, C), () => ({
    trigger: f(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), ot(pt, (y, C) => Bt?.(y, C), () => ({
    trigger: f(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), ot(pt, (y, C) => Bt?.(y, C), () => ({
    trigger: f(i(), (y) => {
      !(y.originalEvent.ctrlKey || y.originalEvent.metaKey || y.originalEvent.shiftKey) && !Yu(y.originalEvent) && (n(n().deleteKeyPressed = !0, !0), h());
    }),
    type: "keydown"
  })), ot(pt, (y, C) => Bt?.(y, C), () => ({
    trigger: f(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), ot(pt, (y, C) => Bt?.(y, C), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), ot(pt, (y, C) => Bt?.(y, C), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), ot(pt, (y, C) => Bt?.(y, C), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), ot(pt, (y, C) => Bt?.(y, C), () => ({
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
var j0 = /* @__PURE__ */ ge('<path fill="none" class="svelte-flow__connection-path"></path>'), W0 = /* @__PURE__ */ ge('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function zc(e, t) {
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
        const [f] = Gu(p);
        return f;
      }
      case on.Step:
      case on.SmoothStep: {
        const [f] = Bs({
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
      var f = W0(), g = Z(f), h = Z(g);
      {
        var y = (b) => {
          var L = Le(), x = le(L);
          Ls(x, s, ($, k) => {
            k($, {});
          }), D(b, L);
        }, C = (b) => {
          var L = j0();
          xe(() => {
            we(L, "d", c(a)), ft(L, i());
          }), D(b, L);
        };
        ae(h, (b) => {
          s() ? b(y) : b(C, !1);
        });
      }
      A(g), A(f), xe(
        (b) => {
          we(f, "width", n().width), we(f, "height", n().height), ft(f, o()), yt(g, 0, b);
        },
        [
          () => wn([
            "svelte-flow__connection",
            av(n().connection.isValid)
          ])
        ]
      ), D(p, f);
    };
    ae(u, (p) => {
      n().connection.inProgress && p(d);
    });
  }
  return D(e, l), ce({
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
var X0 = /* @__PURE__ */ Q("<div><!></div>");
function co(e, t) {
  ue(t, !0);
  let n = m(t, "position", 7, "top-right"), r = m(t, "style", 7), o = m(t, "class", 7), i = m(t, "children", 7), s = /* @__PURE__ */ Me(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "position",
    "style",
    "class",
    "children"
  ]), a = /* @__PURE__ */ S(() => `${n()}`.split("-"));
  var l = X0();
  Je(l, (d) => ({ class: d, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...c(a)]
  ]);
  var u = Z(l);
  return je(u, () => i() ?? tt), A(l), D(e, l), ce({
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
var Y0 = /* @__PURE__ */ Q('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function Oc(e, t) {
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
          var d = Y0();
          D(l, d);
        },
        $$slots: { default: !0 }
      });
    };
    ae(i, (a) => {
      n()?.hideAttribution || a(s);
    });
  }
  return D(e, o), ce({
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
se(Oc, { proOptions: {}, position: {} }, [], [], !0);
var F0 = /* @__PURE__ */ Q("<div><!></div>");
const J0 = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function Hc(e, t) {
  ue(t, !0), Pe(e, J0);
  let n = m(t, "width", 7), r = m(t, "height", 7), o = m(t, "colorMode", 7), i = m(t, "domNode", 15), s = m(t, "clientWidth", 15), a = m(t, "clientHeight", 15), l = m(t, "children", 7), u = m(t, "rest", 7), d = /* @__PURE__ */ S(() => u().class), p = /* @__PURE__ */ S(() => Bf(u(), [
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
  Je(
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
      () => ({ width: Gt(n()), height: Gt(r()) })
    ],
    "svelte-12wlba6"
  );
  var h = Z(g);
  return je(h, () => l() ?? tt), A(g), _t(g, (y) => i(y), () => i()), ma(g, "clientHeight", a), ma(g, "clientWidth", s), D(e, g), ce({
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
var U0 = /* @__PURE__ */ Q('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), G0 = /* @__PURE__ */ Q("<!> <!>", 1), Q0 = /* @__PURE__ */ Q("<!> <!> <!> <!> <!>", 1);
function Tc(e, t) {
  ue(t, !0);
  let n = m(t, "width", 7), r = m(t, "height", 7), o = m(t, "proOptions", 7), i = m(t, "selectionKey", 7), s = m(t, "deleteKey", 7), a = m(t, "panActivationKey", 7), l = m(t, "multiSelectionKey", 7), u = m(t, "zoomActivationKey", 7), d = m(t, "paneClickDistance", 7, 1), p = m(t, "nodeClickDistance", 7, 1), f = m(t, "onmovestart", 7), g = m(t, "onmoveend", 7), h = m(t, "onmove", 7), y = m(t, "oninit", 7), C = m(t, "onnodeclick", 7), b = m(t, "onnodecontextmenu", 7), L = m(t, "onnodedrag", 7), x = m(t, "onnodedragstart", 7), $ = m(t, "onnodedragstop", 7), k = m(t, "onnodepointerenter", 7), V = m(t, "onnodepointermove", 7), H = m(t, "onnodepointerleave", 7), B = m(t, "onselectionclick", 7), G = m(t, "onselectioncontextmenu", 7), R = m(t, "onselectionstart", 7), P = m(t, "onselectionend", 7), _ = m(t, "onedgeclick", 7), T = m(t, "onedgecontextmenu", 7), w = m(t, "onedgepointerenter", 7), E = m(t, "onedgepointerleave", 7), N = m(t, "onpaneclick", 7), z = m(t, "onpanecontextmenu", 7), I = m(t, "panOnScrollMode", 23, () => Yt.Free), M = m(t, "preventScrolling", 7, !0), q = m(t, "zoomOnScroll", 7, !0), X = m(t, "zoomOnDoubleClick", 7, !0), U = m(t, "zoomOnPinch", 7, !0), oe = m(t, "panOnScroll", 7, !1), W = m(t, "panOnDrag", 7, !0), F = m(t, "selectionOnDrag", 7, !0), J = m(t, "connectionLineComponent", 7), ee = m(t, "connectionLineStyle", 7), Y = m(t, "connectionLineContainerStyle", 7), ve = m(t, "connectionLineType", 23, () => on.Bezier), fe = m(t, "attributionPosition", 7), re = m(t, "children", 7), te = m(t, "nodes", 31, () => Pt([])), de = m(t, "edges", 31, () => Pt([])), ne = m(t, "viewport", 31, () => {
  }), he = /* @__PURE__ */ Me(t, [
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
  ]), ie = yc({
    props: he,
    width: n(),
    height: r(),
    get nodes() {
      return te();
    },
    set nodes(K) {
      te(K);
    },
    get edges() {
      return de();
    },
    set edges(K) {
      de(K);
    },
    get viewport() {
      return ne();
    },
    set viewport(K) {
      ne(K);
    }
  });
  const ke = Nn(Fo);
  return ke && ke.setStore && ke.setStore(ie), dr(Fo, {
    provider: !1,
    getStore() {
      return ie;
    }
  }), Re(() => {
    const K = { nodes: ie.selectedNodes, edges: ie.selectedEdges };
    et(() => t.onselectionchange)?.(K);
    for (const Ue of ie.selectionChangeHandlers.values())
      Ue(K);
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
      return he;
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
    children: (K, Ue) => {
      var Ve = Q0(), ze = le(Ve);
      Mc(ze, {
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
      var Ge = O(ze, 2);
      wc(Ge, {
        get panOnScrollMode() {
          return I();
        },
        get preventScrolling() {
          return M();
        },
        get zoomOnScroll() {
          return q();
        },
        get zoomOnDoubleClick() {
          return X();
        },
        get zoomOnPinch() {
          return U();
        },
        get panOnScroll() {
          return oe();
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
          return ie;
        },
        set store(Oe) {
          ie = Oe;
        },
        children: (Oe, at) => {
          bc(Oe, {
            get onpaneclick() {
              return N();
            },
            get onpanecontextmenu() {
              return z();
            },
            get onselectionstart() {
              return R();
            },
            get onselectionend() {
              return P();
            },
            get panOnDrag() {
              return W();
            },
            get selectionOnDrag() {
              return F();
            },
            get store() {
              return ie;
            },
            set store(pe) {
              ie = pe;
            },
            children: (pe, Ke) => {
              var lt = G0(), Xe = le(lt);
              xc(Xe, {
                get store() {
                  return ie;
                },
                set store(wi) {
                  ie = wi;
                },
                children: (wi, a7) => {
                  var Qs = U0(), ea = O(le(Qs), 2);
                  Vc(ea, {
                    get onedgeclick() {
                      return _();
                    },
                    get onedgecontextmenu() {
                      return T();
                    },
                    get onedgepointerenter() {
                      return w();
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
                  var ta = O(ea, 4);
                  zc(ta, {
                    get type() {
                      return ve();
                    },
                    get LineComponent() {
                      return J();
                    },
                    get containerStyle() {
                      return Y();
                    },
                    get style() {
                      return ee();
                    },
                    get store() {
                      return ie;
                    },
                    set store(Zn) {
                      ie = Zn;
                    }
                  });
                  var na = O(ta, 2);
                  Ec(na, {
                    get nodeClickDistance() {
                      return p();
                    },
                    get onnodeclick() {
                      return C();
                    },
                    get onnodecontextmenu() {
                      return b();
                    },
                    get onnodepointerenter() {
                      return k();
                    },
                    get onnodepointermove() {
                      return V();
                    },
                    get onnodepointerleave() {
                      return H();
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
                  var Hd = O(na, 2);
                  Dc(Hd, {
                    get onselectionclick() {
                      return B();
                    },
                    get onselectioncontextmenu() {
                      return G();
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
                  }), me(2), D(wi, Qs);
                },
                $$slots: { default: !0 }
              });
              var Et = O(Xe, 2);
              const Qe = /* @__PURE__ */ S(() => !!(ie.selectionRect && ie.selectionRectMode === "user")), Zt = /* @__PURE__ */ S(() => ie.selectionRect?.width), yi = /* @__PURE__ */ S(() => ie.selectionRect?.height), An = /* @__PURE__ */ S(() => ie.selectionRect?.x), In = /* @__PURE__ */ S(() => ie.selectionRect?.y);
              Xs(Et, {
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
              }), D(pe, lt);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var Be = O(Ge, 2);
      Oc(Be, {
        get proOptions() {
          return o();
        },
        get position() {
          return fe();
        }
      });
      var qe = O(Be, 2);
      kc(qe, {
        get store() {
          return ie;
        }
      });
      var nn = O(qe, 2);
      je(nn, () => re() ?? tt), D(K, Ve);
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
      return C();
    },
    set onnodeclick(K) {
      C(K), v();
    },
    get onnodecontextmenu() {
      return b();
    },
    set onnodecontextmenu(K) {
      b(K), v();
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
      return k();
    },
    set onnodepointerenter(K) {
      k(K), v();
    },
    get onnodepointermove() {
      return V();
    },
    set onnodepointermove(K) {
      V(K), v();
    },
    get onnodepointerleave() {
      return H();
    },
    set onnodepointerleave(K) {
      H(K), v();
    },
    get onselectionclick() {
      return B();
    },
    set onselectionclick(K) {
      B(K), v();
    },
    get onselectioncontextmenu() {
      return G();
    },
    set onselectioncontextmenu(K) {
      G(K), v();
    },
    get onselectionstart() {
      return R();
    },
    set onselectionstart(K) {
      R(K), v();
    },
    get onselectionend() {
      return P();
    },
    set onselectionend(K) {
      P(K), v();
    },
    get onedgeclick() {
      return _();
    },
    set onedgeclick(K) {
      _(K), v();
    },
    get onedgecontextmenu() {
      return T();
    },
    set onedgecontextmenu(K) {
      T(K), v();
    },
    get onedgepointerenter() {
      return w();
    },
    set onedgepointerenter(K) {
      w(K), v();
    },
    get onedgepointerleave() {
      return E();
    },
    set onedgepointerleave(K) {
      E(K), v();
    },
    get onpaneclick() {
      return N();
    },
    set onpaneclick(K) {
      N(K), v();
    },
    get onpanecontextmenu() {
      return z();
    },
    set onpanecontextmenu(K) {
      z(K), v();
    },
    get panOnScrollMode() {
      return I();
    },
    set panOnScrollMode(K = Yt.Free) {
      I(K), v();
    },
    get preventScrolling() {
      return M();
    },
    set preventScrolling(K = !0) {
      M(K), v();
    },
    get zoomOnScroll() {
      return q();
    },
    set zoomOnScroll(K = !0) {
      q(K), v();
    },
    get zoomOnDoubleClick() {
      return X();
    },
    set zoomOnDoubleClick(K = !0) {
      X(K), v();
    },
    get zoomOnPinch() {
      return U();
    },
    set zoomOnPinch(K = !0) {
      U(K), v();
    },
    get panOnScroll() {
      return oe();
    },
    set panOnScroll(K = !1) {
      oe(K), v();
    },
    get panOnDrag() {
      return W();
    },
    set panOnDrag(K = !0) {
      W(K), v();
    },
    get selectionOnDrag() {
      return F();
    },
    set selectionOnDrag(K = !0) {
      F(K), v();
    },
    get connectionLineComponent() {
      return J();
    },
    set connectionLineComponent(K) {
      J(K), v();
    },
    get connectionLineStyle() {
      return ee();
    },
    set connectionLineStyle(K) {
      ee(K), v();
    },
    get connectionLineContainerStyle() {
      return Y();
    },
    set connectionLineContainerStyle(K) {
      Y(K), v();
    },
    get connectionLineType() {
      return ve();
    },
    set connectionLineType(K = on.Bezier) {
      ve(K), v();
    },
    get attributionPosition() {
      return fe();
    },
    set attributionPosition(K) {
      fe(K), v();
    },
    get children() {
      return re();
    },
    set children(K) {
      re(K), v();
    },
    get nodes() {
      return te();
    },
    set nodes(K = []) {
      te(K), v();
    },
    get edges() {
      return de();
    },
    set edges(K = []) {
      de(K), v();
    },
    get viewport() {
      return ne();
    },
    set viewport(K = void 0) {
      ne(K), v();
    }
  });
}
se(
  Tc,
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
function Ac(e, t) {
  ue(t, !0);
  let n = m(t, "children", 7), r = /* @__PURE__ */ Ce(yc({ props: {}, nodes: [], edges: [] }));
  dr(Fo, {
    provider: !0,
    getStore() {
      return c(r);
    },
    setStore: (s) => {
      j(r, s);
    }
  }), oi(() => {
    c(r).reset();
  });
  var o = Le(), i = le(o);
  return je(i, () => n() ?? tt), D(e, o), ce({
    get children() {
      return n();
    },
    set children(s) {
      n(s), v();
    }
  });
}
se(Ac, { children: {} }, [], [], !0);
var em = /* @__PURE__ */ Q("<button><!></button>");
function Vr(e, t) {
  ue(t, !0);
  let n = m(t, "class", 7), r = m(t, "bgColor", 7), o = m(t, "bgColorHover", 7), i = m(t, "color", 7), s = m(t, "colorHover", 7), a = m(t, "borderColor", 7), l = m(t, "onclick", 7), u = m(t, "children", 7), d = /* @__PURE__ */ Me(t, [
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
  Je(
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
  var f = Z(p);
  return je(f, () => u() ?? tt), A(p), D(e, p), ce({
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
var tm = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function Ic(e) {
  var t = tm();
  D(e, t);
}
se(Ic, {}, [], [], !0);
var nm = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Zc(e) {
  var t = nm();
  D(e, t);
}
se(Zc, {}, [], [], !0);
var rm = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Bc(e) {
  var t = rm();
  D(e, t);
}
se(Bc, {}, [], [], !0);
var om = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function qc(e) {
  var t = om();
  D(e, t);
}
se(qc, {}, [], [], !0);
var im = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function Kc(e) {
  var t = im();
  D(e, t);
}
se(Kc, {}, [], [], !0);
var sm = /* @__PURE__ */ Q("<!> <!>", 1), am = /* @__PURE__ */ Q("<!> <!> <!> <!> <!> <!>", 1);
function Rc(e, t) {
  ue(t, !0);
  let n = m(t, "position", 7, "bottom-left"), r = m(t, "orientation", 7, "vertical"), o = m(t, "showZoom", 7, !0), i = m(t, "showFitView", 7, !0), s = m(t, "showLock", 7, !0), a = m(t, "style", 7), l = m(t, "class", 7), u = m(t, "buttonBgColor", 7), d = m(t, "buttonBgColorHover", 7), p = m(t, "buttonColor", 7), f = m(t, "buttonColorHover", 7), g = m(t, "buttonBorderColor", 7), h = m(t, "fitViewOptions", 7), y = m(t, "children", 7), C = m(t, "before", 7), b = m(t, "after", 7), L = /* @__PURE__ */ Me(t, [
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
  let k = /* @__PURE__ */ S(() => c(x).nodesDraggable || c(x).nodesConnectable || c(x).elementsSelectable), V = /* @__PURE__ */ S(() => c(x).viewport.zoom <= c(x).minZoom), H = /* @__PURE__ */ S(() => c(x).viewport.zoom >= c(x).maxZoom), B = /* @__PURE__ */ S(() => c(x).ariaLabelConfig), G = /* @__PURE__ */ S(() => r() === "horizontal" ? "horizontal" : "vertical");
  const R = () => {
    c(x).zoomIn();
  }, P = () => {
    c(x).zoomOut();
  }, _ = () => {
    c(x).fitView(h());
  }, T = () => {
    let E = !c(k);
    c(x).nodesDraggable = E, c(x).nodesConnectable = E, c(x).elementsSelectable = E;
  }, w = /* @__PURE__ */ S(() => [
    "svelte-flow__controls",
    c(G),
    l()
  ]);
  return co(e, Te(
    {
      get class() {
        return c(w);
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
    () => L,
    {
      children: (E, N) => {
        var z = am(), I = le(z);
        {
          var M = (fe) => {
            var re = Le(), te = le(re);
            je(te, C), D(fe, re);
          };
          ae(I, (fe) => {
            C() && fe(M);
          });
        }
        var q = O(I, 2);
        {
          var X = (fe) => {
            var re = sm(), te = le(re);
            Vr(te, Te(
              {
                onclick: R,
                class: "svelte-flow__controls-zoomin",
                get title() {
                  return c(B)["controls.zoomIn.ariaLabel"];
                },
                get "aria-label"() {
                  return c(B)["controls.zoomIn.ariaLabel"];
                },
                get disabled() {
                  return c(H);
                }
              },
              () => $,
              {
                children: (ne, he) => {
                  Ic(ne);
                },
                $$slots: { default: !0 }
              }
            ));
            var de = O(te, 2);
            Vr(de, Te(
              {
                onclick: P,
                class: "svelte-flow__controls-zoomout",
                get title() {
                  return c(B)["controls.zoomOut.ariaLabel"];
                },
                get "aria-label"() {
                  return c(B)["controls.zoomOut.ariaLabel"];
                },
                get disabled() {
                  return c(V);
                }
              },
              () => $,
              {
                children: (ne, he) => {
                  Zc(ne);
                },
                $$slots: { default: !0 }
              }
            )), D(fe, re);
          };
          ae(q, (fe) => {
            o() && fe(X);
          });
        }
        var U = O(q, 2);
        {
          var oe = (fe) => {
            Vr(fe, Te(
              {
                class: "svelte-flow__controls-fitview",
                onclick: _,
                get title() {
                  return c(B)["controls.fitView.ariaLabel"];
                },
                get "aria-label"() {
                  return c(B)["controls.fitView.ariaLabel"];
                }
              },
              () => $,
              {
                children: (re, te) => {
                  Bc(re);
                },
                $$slots: { default: !0 }
              }
            ));
          };
          ae(U, (fe) => {
            i() && fe(oe);
          });
        }
        var W = O(U, 2);
        {
          var F = (fe) => {
            Vr(fe, Te(
              {
                class: "svelte-flow__controls-interactive",
                onclick: T,
                get title() {
                  return c(B)["controls.interactive.ariaLabel"];
                },
                get "aria-label"() {
                  return c(B)["controls.interactive.ariaLabel"];
                }
              },
              () => $,
              {
                children: (re, te) => {
                  var de = Le(), ne = le(de);
                  {
                    var he = (ke) => {
                      Kc(ke);
                    }, ie = (ke) => {
                      qc(ke);
                    };
                    ae(ne, (ke) => {
                      c(k) ? ke(he) : ke(ie, !1);
                    });
                  }
                  D(re, de);
                },
                $$slots: { default: !0 }
              }
            ));
          };
          ae(W, (fe) => {
            s() && fe(F);
          });
        }
        var J = O(W, 2);
        {
          var ee = (fe) => {
            var re = Le(), te = le(re);
            je(te, y), D(fe, re);
          };
          ae(J, (fe) => {
            y() && fe(ee);
          });
        }
        var Y = O(J, 2);
        {
          var ve = (fe) => {
            var re = Le(), te = le(re);
            je(te, b), D(fe, re);
          };
          ae(Y, (fe) => {
            b() && fe(ve);
          });
        }
        D(E, z);
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
      return C();
    },
    set before(E) {
      C(E), v();
    },
    get after() {
      return b();
    },
    set after(E) {
      b(E), v();
    }
  });
}
se(
  Rc,
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
function jc(e, t) {
  ue(t, !0);
  let n = m(t, "radius", 7), r = m(t, "class", 7);
  var o = lm();
  return xe(() => {
    we(o, "cx", n()), we(o, "cy", n()), we(o, "r", n()), yt(o, 0, wn(["svelte-flow__background-pattern", "dots", r()]));
  }), D(e, o), ce({
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
se(jc, { radius: {}, class: {} }, [], [], !0);
var um = /* @__PURE__ */ ge("<path></path>");
function Wc(e, t) {
  ue(t, !0);
  let n = m(t, "lineWidth", 7), r = m(t, "dimensions", 7), o = m(t, "variant", 7), i = m(t, "class", 7);
  var s = um();
  return xe(() => {
    we(s, "stroke-width", n()), we(s, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), yt(s, 0, wn(["svelte-flow__background-pattern", o(), i()]));
  }), D(e, s), ce({
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
  let n = m(t, "id", 7), r = m(t, "variant", 23, () => ln.Dots), o = m(t, "gap", 7, 20), i = m(t, "size", 7), s = m(t, "lineWidth", 7, 1), a = m(t, "bgColor", 7), l = m(t, "patternColor", 7), u = m(t, "patternClass", 7), d = m(t, "class", 7), p = /* @__PURE__ */ S(At), f = /* @__PURE__ */ S(() => r() === ln.Dots), g = /* @__PURE__ */ S(() => r() === ln.Cross), h = /* @__PURE__ */ S(() => Array.isArray(o()) ? o() : [o(), o()]), y = /* @__PURE__ */ S(() => `background-pattern-${c(p).flowId}-${n() ?? ""}`), C = /* @__PURE__ */ S(() => [
    c(h)[0] * c(p).viewport.zoom || 1,
    c(h)[1] * c(p).viewport.zoom || 1
  ]), b = /* @__PURE__ */ S(() => (i() ?? cm[r()]) * c(p).viewport.zoom), L = /* @__PURE__ */ S(() => c(g) ? [c(b), c(b)] : c(C)), x = /* @__PURE__ */ S(() => c(f) ? [c(b) / 2, c(b) / 2] : [
    c(L)[0] / 2,
    c(L)[1] / 2
  ]);
  var $ = dm();
  let k;
  var V = Z($), H = Z(V);
  {
    var B = (P) => {
      const _ = /* @__PURE__ */ S(() => c(b) / 2);
      jc(P, {
        get radius() {
          return c(_);
        },
        get class() {
          return u();
        }
      });
    }, G = (P) => {
      Wc(P, {
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
    ae(H, (P) => {
      c(f) ? P(B) : P(G, !1);
    });
  }
  A(V);
  var R = O(V);
  return A($), xe(
    (P) => {
      yt($, 0, wn([
        "svelte-flow__background",
        "svelte-flow__container",
        d()
      ])), k = ft($, "", k, P), we(V, "id", c(y)), we(V, "x", c(p).viewport.x % c(C)[0]), we(V, "y", c(p).viewport.y % c(C)[1]), we(V, "width", c(C)[0]), we(V, "height", c(C)[1]), we(V, "patternTransform", `translate(-${c(x)[0]},-${c(x)[1]})`), we(R, "fill", `url(#${c(y)})`);
    },
    [
      () => ({
        "--xy-background-color-props": a(),
        "--xy-background-pattern-color-props": l()
      })
    ]
  ), D(e, $), ce({
    get id() {
      return n();
    },
    set id(P) {
      n(P), v();
    },
    get variant() {
      return r();
    },
    set variant(P = ln.Dots) {
      r(P), v();
    },
    get gap() {
      return o();
    },
    set gap(P = 20) {
      o(P), v();
    },
    get size() {
      return i();
    },
    set size(P) {
      i(P), v();
    },
    get lineWidth() {
      return s();
    },
    set lineWidth(P = 1) {
      s(P), v();
    },
    get bgColor() {
      return a();
    },
    set bgColor(P) {
      a(P), v();
    },
    get patternColor() {
      return l();
    },
    set patternColor(P) {
      l(P), v();
    },
    get patternClass() {
      return u();
    },
    set patternClass(P) {
      u(P), v();
    },
    get class() {
      return d();
    },
    set class(P) {
      d(P), v();
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
function Yc(e, t) {
  ue(t, !0);
  let n = m(t, "x", 7), r = m(t, "y", 7), o = m(t, "width", 7), i = m(t, "height", 7), s = m(t, "borderRadius", 7, 5), a = m(t, "color", 7), l = m(t, "shapeRendering", 7), u = m(t, "strokeColor", 7), d = m(t, "strokeWidth", 7, 2), p = m(t, "selected", 7), f = m(t, "class", 7);
  var g = fm();
  let h, y;
  return xe(
    (C, b) => {
      h = yt(g, 0, wn(["svelte-flow__minimap-node", f()]), null, h, C), we(g, "x", n()), we(g, "y", r()), we(g, "rx", s()), we(g, "ry", s()), we(g, "width", o()), we(g, "height", i()), we(g, "shape-rendering", l()), y = ft(g, "", y, b);
    },
    [
      () => ({ selected: p() }),
      () => ({
        fill: a(),
        stroke: u(),
        "stroke-width": d()
      })
    ]
  ), D(e, g), ce({
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
      return u();
    },
    set strokeColor(C) {
      u(C), v();
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
se(
  Yc,
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
const Vi = (e) => e instanceof Function ? e : () => e;
var gm = /* @__PURE__ */ ge("<title> </title>"), hm = /* @__PURE__ */ ge('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), vm = /* @__PURE__ */ Q('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function Fc(e, t) {
  ue(t, !0);
  let n = m(t, "position", 7, "bottom-right"), r = m(t, "ariaLabel", 7), o = m(t, "nodeStrokeColor", 7, "transparent"), i = m(t, "nodeColor", 7), s = m(t, "nodeClass", 7, ""), a = m(t, "nodeBorderRadius", 7, 5), l = m(t, "nodeStrokeWidth", 7, 2), u = m(t, "bgColor", 7), d = m(t, "maskColor", 7), p = m(t, "maskStrokeColor", 7), f = m(t, "maskStrokeWidth", 7), g = m(t, "width", 7, 200), h = m(t, "height", 7, 150), y = m(t, "pannable", 7, !0), C = m(t, "zoomable", 7, !0), b = m(t, "inversePan", 7), L = m(t, "zoomStep", 7), x = m(t, "class", 7), $ = /* @__PURE__ */ Me(t, [
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
  ]), k = /* @__PURE__ */ S(At), V = /* @__PURE__ */ S(() => c(k).ariaLabelConfig);
  const H = i() === void 0 ? void 0 : Vi(i()), B = Vi(o()), G = Vi(s()), R = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let P = /* @__PURE__ */ S(() => `svelte-flow__minimap-desc-${c(k).flowId}`), _ = /* @__PURE__ */ S(() => ({
    x: -c(k).viewport.x / c(k).viewport.zoom,
    y: -c(k).viewport.y / c(k).viewport.zoom,
    width: c(k).width / c(k).viewport.zoom,
    height: c(k).height / c(k).viewport.zoom
  })), T = /* @__PURE__ */ S(() => c(k).nodeLookup.size > 0 ? Ru(ao(c(k).nodeLookup, { filter: (Y) => !Y.hidden }), c(_)) : c(_)), w = /* @__PURE__ */ S(() => c(T).width / g()), E = /* @__PURE__ */ S(() => c(T).height / h()), N = /* @__PURE__ */ S(() => Math.max(c(w), c(E))), z = /* @__PURE__ */ S(() => c(N) * g()), I = /* @__PURE__ */ S(() => c(N) * h()), M = /* @__PURE__ */ S(() => 5 * c(N)), q = /* @__PURE__ */ S(() => c(T).x - (c(z) - c(T).width) / 2 - c(M)), X = /* @__PURE__ */ S(() => c(T).y - (c(I) - c(T).height) / 2 - c(M)), U = /* @__PURE__ */ S(() => c(z) + c(M) * 2), oe = /* @__PURE__ */ S(() => c(I) + c(M) * 2);
  const W = () => c(N);
  var F = vm(), J = le(F);
  const ee = /* @__PURE__ */ S(() => ["svelte-flow__minimap", x()]);
  return ip(J, () => ({ "--xy-minimap-background-color-props": u() })), co(J.lastChild, Te(
    {
      get position() {
        return n();
      },
      get class() {
        return c(ee);
      },
      "data-testid": "svelte-flow__minimap"
    },
    () => $,
    {
      children: (Y, ve) => {
        var fe = Le(), re = le(fe);
        {
          var te = (de) => {
            var ne = hm();
            let he;
            var ie = Z(ne);
            {
              var ke = (Ve) => {
                var ze = gm(), Ge = Z(ze, !0);
                A(ze), xe(() => {
                  we(ze, "id", c(P)), He(Ge, r() ?? c(V)["minimap.ariaLabel"]);
                }), D(Ve, ze);
              };
              ae(ie, (Ve) => {
                (r() ?? c(V)["minimap.ariaLabel"]) && Ve(ke);
              });
            }
            var K = O(ie);
            st(K, 17, () => c(k).nodes, (Ve) => Ve.id, (Ve, ze) => {
              var Ge = Le();
              const Be = /* @__PURE__ */ S(() => c(k).nodeLookup.get(c(ze).id));
              var qe = le(Ge);
              {
                var nn = (Oe) => {
                  const at = /* @__PURE__ */ S(() => Tn(c(Be))), pe = /* @__PURE__ */ S(() => H?.(c(Be))), Ke = /* @__PURE__ */ S(() => B(c(Be))), lt = /* @__PURE__ */ S(() => G(c(Be)));
                  Yc(Oe, Te(
                    {
                      get x() {
                        return c(Be).internals.positionAbsolute.x;
                      },
                      get y() {
                        return c(Be).internals.positionAbsolute.y;
                      }
                    },
                    () => c(at),
                    {
                      get selected() {
                        return c(Be).selected;
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
                        return R;
                      },
                      get class() {
                        return c(lt);
                      }
                    }
                  ));
                };
                ae(qe, (Oe) => {
                  c(Be) && ju(c(Be)) && Oe(nn);
                });
              }
              D(Ve, Ge);
            });
            var Ue = O(K);
            A(ne), ot(ne, (Ve, ze) => pm?.(Ve, ze), () => ({
              store: c(k),
              panZoom: c(k).panZoom,
              getViewScale: W,
              translateExtent: c(k).translateExtent,
              width: c(k).width,
              height: c(k).height,
              inversePan: b(),
              zoomStep: L(),
              pannable: y(),
              zoomable: C()
            })), xe(
              (Ve) => {
                we(ne, "width", g()), we(ne, "height", h()), we(ne, "viewBox", `${c(q) ?? ""} ${c(X) ?? ""} ${c(U) ?? ""} ${c(oe) ?? ""}`), we(ne, "aria-labelledby", c(P)), he = ft(ne, "", he, Ve), we(Ue, "d", `M${c(q) - c(M)},${c(X) - c(M)}h${c(U) + c(M) * 2}v${c(oe) + c(M) * 2}h${-c(U) - c(M) * 2}z
      M${c(_).x ?? ""},${c(_).y ?? ""}h${c(_).width ?? ""}v${c(_).height ?? ""}h${-c(_).width}z`);
              },
              [
                () => ({
                  "--xy-minimap-mask-background-color-props": d(),
                  "--xy-minimap-mask-stroke-color-props": p(),
                  "--xy-minimap-mask-stroke-width-props": f() ? f() * c(N) : void 0
                })
              ]
            ), D(de, ne);
          };
          ae(re, (de) => {
            c(k).panZoom && de(te);
          });
        }
        D(Y, fe);
      },
      $$slots: { default: !0 }
    }
  )), A(J), D(e, F), ce({
    get position() {
      return n();
    },
    set position(Y = "bottom-right") {
      n(Y), v();
    },
    get ariaLabel() {
      return r();
    },
    set ariaLabel(Y) {
      r(Y), v();
    },
    get nodeStrokeColor() {
      return o();
    },
    set nodeStrokeColor(Y = "transparent") {
      o(Y), v();
    },
    get nodeColor() {
      return i();
    },
    set nodeColor(Y) {
      i(Y), v();
    },
    get nodeClass() {
      return s();
    },
    set nodeClass(Y = "") {
      s(Y), v();
    },
    get nodeBorderRadius() {
      return a();
    },
    set nodeBorderRadius(Y = 5) {
      a(Y), v();
    },
    get nodeStrokeWidth() {
      return l();
    },
    set nodeStrokeWidth(Y = 2) {
      l(Y), v();
    },
    get bgColor() {
      return u();
    },
    set bgColor(Y) {
      u(Y), v();
    },
    get maskColor() {
      return d();
    },
    set maskColor(Y) {
      d(Y), v();
    },
    get maskStrokeColor() {
      return p();
    },
    set maskStrokeColor(Y) {
      p(Y), v();
    },
    get maskStrokeWidth() {
      return f();
    },
    set maskStrokeWidth(Y) {
      f(Y), v();
    },
    get width() {
      return g();
    },
    set width(Y = 200) {
      g(Y), v();
    },
    get height() {
      return h();
    },
    set height(Y = 150) {
      h(Y), v();
    },
    get pannable() {
      return y();
    },
    set pannable(Y = !0) {
      y(Y), v();
    },
    get zoomable() {
      return C();
    },
    set zoomable(Y = !0) {
      C(Y), v();
    },
    get inversePan() {
      return b();
    },
    set inversePan(Y) {
      b(Y), v();
    },
    get zoomStep() {
      return L();
    },
    set zoomStep(Y) {
      L(Y), v();
    },
    get class() {
      return x();
    },
    set class(Y) {
      x(Y), v();
    }
  });
}
se(
  Fc,
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
var mm = /* @__PURE__ */ Q("<div><!></div>");
function Jc(e, t) {
  ue(t, !0);
  let n = m(t, "nodeId", 7), r = m(t, "position", 23, () => ye.Top), o = m(t, "align", 7, "center"), i = m(t, "offset", 7, 10), s = m(t, "isVisible", 7), a = m(t, "children", 7), l = /* @__PURE__ */ Me(t, [
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
  const u = At(), { getNodesBounds: d } = nt(), p = Nn("svelteflow__node_id");
  let f = /* @__PURE__ */ S(() => (u.nodes, (Array.isArray(n()) ? n() : [n() ?? p]).reduce(
    ($, k) => {
      const V = u.nodeLookup.get(k);
      return V && $.push(V), $;
    },
    []
  ))), g = /* @__PURE__ */ S(() => {
    const $ = d(c(f));
    return $ ? Vv($, u.viewport, r(), i(), o()) : "";
  }), h = /* @__PURE__ */ S(() => c(f).length === 0 ? 1 : Math.max(...c(f).map(($) => ($.internals.z || 5) + 1))), y = /* @__PURE__ */ S(() => u.nodes.filter(($) => $.selected).length), C = /* @__PURE__ */ S(() => typeof s() == "boolean" ? s() : c(f).length === 1 && c(f)[0].selected && c(y) === 1);
  var b = Le(), L = le(b);
  {
    var x = ($) => {
      var k = mm();
      Je(
        k,
        (H, B) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": H,
          ...l,
          [Kt]: B
        }),
        [
          () => c(f).reduce((H, B) => `${H}${B.id} `, "").trim(),
          () => ({
            display: dc().value ? "none" : void 0,
            position: "absolute",
            transform: c(g),
            "z-index": c(h)
          })
        ]
      );
      var V = Z(k);
      je(V, () => a() ?? tt), A(k), ot(k, (H, B) => cc?.(H, B), () => "root"), D($, k);
    };
    ae(L, ($) => {
      u.domNode && c(C) && c(f) && $(x);
    });
  }
  return D(e, b), ce({
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
    return (!Bv(a, o) || i) && (o = a, i = !1), l ? o : o[0] ?? null;
  });
  return {
    get current() {
      return c(s);
    }
  };
}
const il = "tinyflow-component";
class ym {
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
const wm = () => {
  let e = /* @__PURE__ */ Ce([]), t = /* @__PURE__ */ Ce([]), n = /* @__PURE__ */ Ce({ x: 250, y: 100, zoom: 1 });
  return {
    // nodes: nodesInternal,
    // edges: edgesInternal,
    // viewport,
    init: (r, o) => {
      j(e, r), j(t, o);
    },
    getNodes: () => c(e),
    setNodes: (r) => {
      j(e, r);
    },
    getEdges: () => c(t),
    setEdges: (r) => {
      j(t, r);
    },
    getViewport: () => c(n),
    setViewport: (r) => {
      j(n, r);
    },
    getNode: (r) => c(e).find((o) => o.id === r),
    addNode: (r) => {
      j(e, [...c(e), r]);
    },
    removeNode: (r) => {
      j(e, c(e).filter((o) => o.id !== r));
    },
    updateNode: (r, o) => {
      j(e, c(e).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateNodes: (r) => {
      j(e, r(c(e)));
    },
    updateNodeData: (r, o) => {
      j(e, c(e).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    },
    selectNodeOnly: (r) => {
      j(e, c(e).map((o) => o.id === r ? { ...o, selected: !0 } : { ...o, selected: !1 }));
    },
    getEdge: (r) => c(t).find((o) => o.id === r),
    addEdge: (r) => {
      j(t, [...c(t), r]);
    },
    removeEdge: (r) => {
      j(t, c(t).filter((o) => o.id !== r));
    },
    updateEdge: (r, o) => {
      j(t, c(t).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateEdges: (r) => {
      j(t, r(c(t)));
    },
    updateEdgeData: (r, o) => {
      j(t, c(t).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    }
  };
}, Ie = wm();
var bm = /* @__PURE__ */ Q("<button><!></button>");
function Se(e, t) {
  ue(t, !0);
  const n = m(t, "children", 7), r = m(t, "primary", 7), o = /* @__PURE__ */ Me(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children",
    "primary"
  ]);
  var i = bm();
  Je(i, () => ({
    type: "button",
    ...o,
    class: `tf-btn ${r() ? "tf-btn-primary" : ""} nopan nodrag ${t.class ?? ""}`
  }));
  var s = Z(i);
  return je(s, () => n() ?? tt), A(i), D(e, i), ce({
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
var xm = /* @__PURE__ */ Q("<input/>");
function Uc(e, t) {
  ue(t, !0);
  const n = /* @__PURE__ */ Me(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = xm();
  Wt(r), Je(r, () => ({
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), D(e, r), ce();
}
se(Uc, {}, [], [], !0);
var $m = /* @__PURE__ */ Q('<div><input type="hidden"/> <!> <!></div>');
const km = {
  hash: "svelte-1swt2gg",
  code: ".tf-chosen.svelte-1swt2gg {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function Gc(e, t) {
  ue(t, !0), Pe(e, km);
  const n = m(t, "placeholder", 7), r = m(t, "label", 7), o = m(t, "value", 7), i = m(t, "buttonText", 7, "选择..."), s = m(t, "onChosen", 7), a = /* @__PURE__ */ Me(t, [
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
  var l = $m();
  Je(
    l,
    () => ({
      ...a,
      class: `tf-chosen nopan nodrag ${t.class ?? ""}`
    }),
    void 0,
    "svelte-1swt2gg"
  );
  var u = Z(l);
  Wt(u);
  var d = O(u, 2);
  Ye(d, {
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
  return Se(p, {
    onclick: (f) => {
      s()?.(o(), r(), f);
    },
    style: "padding: 3px",
    children: (f, g) => {
      me();
      var h = $e();
      xe(() => He(h, i())), D(f, h);
    },
    $$slots: { default: !0 }
  }), A(l), xe(() => _o(u, o())), D(e, l), ce({
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
  Gc,
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
var Cm = /* @__PURE__ */ Q("<input/>");
function Ye(e, t) {
  ue(t, !0);
  const n = /* @__PURE__ */ Me(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Cm();
  Wt(r), Je(r, () => ({
    type: "text",
    spellcheck: "false",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), D(e, r), ce();
}
se(Ye, {}, [], [], !0);
var _m = /* @__PURE__ */ Q("<textarea></textarea>");
function Ze(e, t) {
  ue(t, !0);
  const n = m(t, "value", 7), r = /* @__PURE__ */ Me(t, ["$$slots", "$$events", "$$legacy", "$$host", "value"]);
  var o = _m();
  return Kf(o), Je(o, () => ({
    spellcheck: "false",
    ...r,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), D(e, o), ce({
    get value() {
      return n();
    },
    set value(i) {
      n(i), v();
    }
  });
}
se(Ze, { value: {} }, [], [], !0);
var Sm = /* @__PURE__ */ Q('<div role="button"><!></div>'), Em = /* @__PURE__ */ Q("<div></div>");
function Qc(e, t) {
  const n = ba(t, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = ba(n, ["items", "onChange", "activeIndex"]);
  ue(t, !1);
  let o = m(t, "items", 28, () => []), i = m(t, "onChange", 12, () => {
  }), s = m(t, "activeIndex", 12, 0);
  function a(u, d) {
    s(d), i()?.(u, d);
  }
  au();
  var l = Em();
  return Je(l, () => ({
    ...r,
    class: `tf-tabs ${_s(r), et(() => r.class) ?? ""}`
  })), st(l, 5, o, pr, (u, d, p) => {
    var f = Sm();
    we(f, "tabindex", p), f.__click = () => a(c(d), p), f.__keydown = (C) => {
      (C.key === "Enter" || C.key === " ") && (C.preventDefault(), a(c(d), p));
    };
    var g = Z(f);
    {
      var h = (C) => {
        var b = $e();
        xe(() => He(b, (c(d), et(() => c(d).label)))), D(C, b);
      }, y = (C) => {
        var b = Le(), L = le(b);
        je(L, () => (c(d), et(() => c(d).label) ?? tt)), D(C, b);
      };
      ae(g, (C) => {
        c(d), et(() => typeof c(d).label == "string") ? C(h) : C(y, !1);
      });
    }
    A(f), xe(() => yt(f, 1, `tf-tabs-item ${p === s() ? "active" : ""}`)), D(u, f);
  }), A(l), D(e, l), ce({
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
se(Qc, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var Nm = (e, t, n) => t(c(n)), Lm = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(c(n)));
}, Pm = /* @__PURE__ */ Q('<span class="tf-collapse-item-title-icon"><!></span>'), Vm = /* @__PURE__ */ Q('<div class="tf-collapse-item-description"><!></div>'), Dm = /* @__PURE__ */ Q('<div class="tf-collapse-item-content"><!></div>'), Mm = /* @__PURE__ */ Q('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), zm = /* @__PURE__ */ Q("<div></div>");
const Om = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function ed(e, t) {
  ue(t, !0), Pe(e, Om);
  let n = m(t, "items", 7), r = m(t, "onChange", 7), o = m(t, "activeKeys", 31, () => Pt([]));
  function i(a) {
    o().includes(a.key) ? o(o().filter((l) => l !== a.key)) : (o().push(a.key), o(o())), r()?.(a, o());
  }
  var s = zm();
  return st(s, 21, n, pr, (a, l, u) => {
    var d = Mm(), p = Z(d);
    we(p, "tabindex", u), p.__click = [Nm, i, l], p.__keydown = [Lm, i, l];
    var f = Z(p);
    {
      var g = ($) => {
        var k = Pm(), V = Z(k);
        Sn(V, {
          get target() {
            return c(l).icon;
          }
        }), A(k), D($, k);
      };
      ae(f, ($) => {
        c(l).icon && $(g);
      });
    }
    var h = O(f, 2);
    Sn(h, {
      get target() {
        return c(l).title;
      }
    });
    var y = O(h, 2);
    A(p);
    var C = O(p, 2);
    {
      var b = ($) => {
        var k = Vm(), V = Z(k);
        Sn(V, {
          get target() {
            return c(l).description;
          }
        }), A(k), D($, k);
      };
      ae(C, ($) => {
        c(l).description && $(b);
      });
    }
    var L = O(C, 2);
    {
      var x = ($) => {
        var k = Dm(), V = Z(k);
        Sn(V, {
          get target() {
            return c(l).content;
          }
        }), A(k), D($, k);
      };
      ae(L, ($) => {
        o().includes(c(l).key) && $(x);
      });
    }
    A(d), xe(($) => yt(y, 1, `tf-collapse-item-title-arrow ${$ ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(c(l).key) ? "rotate-90" : ""
    ]), D(a, d);
  }), A(s), xe(() => {
    ft(s, t.style), yt(s, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), D(e, s), ce({
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
se(ed, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Sn(e, t) {
  ue(t, !0);
  let n = m(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = Le(), o = le(r);
  {
    var i = (a) => {
      var l = Le(), u = le(l);
      je(u, () => n() ?? tt), D(a, l);
    }, s = (a) => {
      var l = Le(), u = le(l);
      Ns(u, n), D(a, l);
    };
    ae(o, (a) => {
      typeof n() == "function" ? a(i) : a(s, !1);
    });
  }
  return D(e, r), ce({
    get target() {
      return n();
    },
    set target(a) {
      n(a), v();
    }
  });
}
se(Sn, { target: {} }, [], [], !0);
var Hm = (e, t, n) => t(c(n)), Tm = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), Am = /* @__PURE__ */ Q('<div class="tf-select-content-children"><!></div>'), Im = /* @__PURE__ */ Q('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), Zm = /* @__PURE__ */ Q('<div class="tf-select-content nopan nodrag"><!></div>'), Bm = /* @__PURE__ */ Q("<!> <!>", 1), qm = /* @__PURE__ */ Q('<div class="tf-select-input-placeholder"> </div>'), Km = /* @__PURE__ */ Q('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), Rm = /* @__PURE__ */ Q("<div><!></div>");
function dt(e, t) {
  ue(t, !0);
  const n = (b, L = tt) => {
    var x = Le(), $ = le(x);
    st($, 19, L, (k, V) => `${V}_${k.value}`, (k, V) => {
      var H = Im(), B = le(H);
      B.__click = [Hm, h, V];
      var G = Z(B), R = Z(G);
      {
        var P = (E) => {
          var N = Tm();
          D(E, N);
        };
        ae(R, (E) => {
          c(V).children && c(V).children.length > 0 && E(P);
        });
      }
      A(G);
      var _ = O(G, 2);
      Sn(_, {
        get target() {
          return c(V).label;
        }
      }), A(B);
      var T = O(B, 2);
      {
        var w = (E) => {
          var N = Am(), z = Z(N);
          n(z, () => c(V).children), A(N), D(E, N);
        };
        ae(T, (E) => {
          c(V).children && c(V).children.length > 0 && (a() || u().includes(c(V).value)) && E(w);
        });
      }
      D(k, H);
    }), D(b, x);
  };
  let r = m(t, "items", 7), o = m(t, "onSelect", 7), i = m(t, "value", 23, () => []), s = m(t, "defaultValue", 23, () => []), a = m(t, "expandAll", 7, !0), l = m(t, "multiple", 7, !1), u = m(t, "expandValue", 23, () => []), d = m(t, "placeholder", 7), p = /* @__PURE__ */ Me(t, [
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
    const b = [], L = (x) => {
      for (let $ of x)
        i().length > 0 ? i().includes($.value) && b.push($) : s().includes($.value) && b.push($), $.children && $.children.length > 0 && L($.children);
    };
    return L(r()), b;
  }), g;
  function h(b) {
    g?.hide(), o()?.(b);
  }
  var y = Rm();
  Je(y, () => ({ ...p, class: `tf-select ${p.class ?? ""}` }));
  var C = Z(y);
  return _t(
    tr(C, {
      floating: (b) => {
        var L = Zm(), x = Z(L);
        n(x, r), A(L), D(b, L);
      },
      children: (b, L) => {
        var x = Km();
        Je(x, () => ({ class: "tf-select-input nopan nodrag", ...p }));
        var $ = Z(x);
        st(
          $,
          23,
          () => c(f),
          (k, V) => `${V}_${k.value}`,
          (k, V, H) => {
            var B = Le(), G = le(B);
            {
              var R = (_) => {
                var T = Le(), w = le(T);
                {
                  var E = (N) => {
                    Sn(N, {
                      get target() {
                        return c(V).label;
                      }
                    });
                  };
                  ae(w, (N) => {
                    c(H) === 0 && N(E);
                  });
                }
                D(_, T);
              }, P = (_) => {
                var T = Bm(), w = le(T);
                Sn(w, {
                  get target() {
                    return c(V).label;
                  }
                });
                var E = O(w, 2);
                {
                  var N = (z) => {
                    var I = $e(",");
                    D(z, I);
                  };
                  ae(E, (z) => {
                    c(H) < c(f).length - 1 && z(N);
                  });
                }
                D(_, T);
              };
              ae(G, (_) => {
                l() ? _(P, !1) : _(R);
              });
            }
            D(k, B);
          },
          (k) => {
            var V = qm(), H = Z(V, !0);
            A(V), xe(() => He(H, d())), D(k, V);
          }
        ), A($), me(2), A(x), D(b, x);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (b) => g = b,
    () => g
  ), A(y), D(e, y), ce({
    get items() {
      return r();
    },
    set items(b) {
      r(b), v();
    },
    get onSelect() {
      return o();
    },
    set onSelect(b) {
      o(b), v();
    },
    get value() {
      return i();
    },
    set value(b = []) {
      i(b), v();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue(b = []) {
      s(b), v();
    },
    get expandAll() {
      return a();
    },
    set expandAll(b = !0) {
      a(b), v();
    },
    get multiple() {
      return l();
    },
    set multiple(b = !1) {
      l(b), v();
    },
    get expandValue() {
      return u();
    },
    set expandValue(b = []) {
      u(b), v();
    },
    get placeholder() {
      return d();
    },
    set placeholder(b) {
      d(b), v();
    }
  });
}
yn(["click"]);
se(
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
const Yr = Math.min, lr = Math.max, Jo = Math.round, Ft = (e) => ({
  x: e,
  y: e
}), jm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Wm = {
  start: "end",
  end: "start"
};
function ts(e, t, n) {
  return lr(e, Yr(t, n));
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
function td(e) {
  return e === "x" ? "y" : "x";
}
function Ys(e) {
  return e === "y" ? "height" : "width";
}
const Xm = /* @__PURE__ */ new Set(["top", "bottom"]);
function En(e) {
  return Xm.has(Un(e)) ? "y" : "x";
}
function Fs(e) {
  return td(En(e));
}
function Ym(e, t, n) {
  n === void 0 && (n = !1);
  const r = po(e), o = Fs(e), i = Ys(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Uo(s)), [s, Uo(s)];
}
function Fm(e) {
  const t = Uo(e);
  return [ns(e), t, ns(t)];
}
function ns(e) {
  return e.replace(/start|end/g, (t) => Wm[t]);
}
const sl = ["left", "right"], al = ["right", "left"], Jm = ["top", "bottom"], Um = ["bottom", "top"];
function Gm(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? al : sl : t ? sl : al;
    case "left":
    case "right":
      return t ? Jm : Um;
    default:
      return [];
  }
}
function Qm(e, t, n, r) {
  const o = po(e);
  let i = Gm(Un(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(ns)))), i;
}
function Uo(e) {
  return e.replace(/left|right|bottom|top/g, (t) => jm[t]);
}
function e2(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function nd(e) {
  return typeof e != "number" ? e2(e) : {
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
  const i = En(t), s = Fs(t), a = Ys(s), l = Un(t), u = i === "y", d = r.x + r.width / 2 - o.width / 2, p = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
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
const t2 = async (e, t, n) => {
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
      name: C,
      fn: b
    } = a[y], {
      x: L,
      y: x,
      data: $,
      reset: k
    } = await b({
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
      [C]: {
        ...g[C],
        ...$
      }
    }, k && h <= 50 && (h++, typeof k == "object" && (k.placement && (f = k.placement), k.rects && (u = k.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : k.rects), {
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
async function rd(e, t) {
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
  } = fo(t, e), h = nd(g), y = a[f ? p === "floating" ? "reference" : "floating" : p], C = Go(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(y))) == null || n ? y : y.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: l
  })), b = p === "floating" ? {
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
  }, $ = Go(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: b,
    offsetParent: L,
    strategy: l
  }) : b);
  return {
    top: (C.top - $.top + h.top) / x.y,
    bottom: ($.bottom - C.bottom + h.bottom) / x.y,
    left: (C.left - $.left + h.left) / x.x,
    right: ($.right - C.right + h.right) / x.x
  };
}
const n2 = (e) => ({
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
    const p = nd(d), f = {
      x: n,
      y: r
    }, g = Fs(o), h = Ys(g), y = await s.getDimensions(u), C = g === "y", b = C ? "top" : "left", L = C ? "bottom" : "right", x = C ? "clientHeight" : "clientWidth", $ = i.reference[h] + i.reference[g] - f[g] - i.floating[h], k = f[g] - i.reference[g], V = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let H = V ? V[x] : 0;
    (!H || !await (s.isElement == null ? void 0 : s.isElement(V))) && (H = a.floating[x] || i.floating[h]);
    const B = $ / 2 - k / 2, G = H / 2 - y[h] / 2 - 1, R = Yr(p[b], G), P = Yr(p[L], G), _ = R, T = H - y[h] - P, w = H / 2 - y[h] / 2 + B, E = ts(_, w, T), N = !l.arrow && po(o) != null && w !== E && i.reference[h] / 2 - (w < _ ? R : P) - y[h] / 2 < 0, z = N ? w < _ ? w - _ : w - T : 0;
    return {
      [g]: f[g] + z,
      data: {
        [g]: E,
        centerOffset: w - E - z,
        ...N && {
          alignmentOffset: z
        }
      },
      reset: N
    };
  }
}), r2 = function(e) {
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
        ...C
      } = fo(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const b = Un(o), L = En(a), x = Un(a) === a, $ = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), k = f || (x || !y ? [Uo(a)] : Fm(a)), V = h !== "none";
      !f && V && k.push(...Qm(a, y, h, $));
      const H = [a, ...k], B = await rd(t, C), G = [];
      let R = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && G.push(B[b]), p) {
        const w = Ym(o, s, $);
        G.push(B[w[0]], B[w[1]]);
      }
      if (R = [...R, {
        placement: o,
        overflows: G
      }], !G.every((w) => w <= 0)) {
        var P, _;
        const w = (((P = i.flip) == null ? void 0 : P.index) || 0) + 1, E = H[w];
        if (E && (!(p === "alignment" && L !== En(E)) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        R.every((z) => z.overflows[0] > 0 && En(z.placement) === L)))
          return {
            data: {
              index: w,
              overflows: R
            },
            reset: {
              placement: E
            }
          };
        let N = (_ = R.filter((z) => z.overflows[0] <= 0).sort((z, I) => z.overflows[1] - I.overflows[1])[0]) == null ? void 0 : _.placement;
        if (!N)
          switch (g) {
            case "bestFit": {
              var T;
              const z = (T = R.filter((I) => {
                if (V) {
                  const M = En(I.placement);
                  return M === L || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  M === "y";
                }
                return !0;
              }).map((I) => [I.placement, I.overflows.filter((M) => M > 0).reduce((M, q) => M + q, 0)]).sort((I, M) => I[1] - M[1])[0]) == null ? void 0 : T[0];
              z && (N = z);
              break;
            }
            case "initialPlacement":
              N = a;
              break;
          }
        if (o !== N)
          return {
            reset: {
              placement: N
            }
          };
      }
      return {};
    }
  };
}, o2 = /* @__PURE__ */ new Set(["left", "top"]);
async function i2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Un(n), a = po(n), l = En(n) === "y", u = o2.has(s) ? -1 : 1, d = i && l ? -1 : 1, p = fo(t, e);
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
const s2 = function(e) {
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
      } = t, l = await i2(t, e);
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
}, a2 = function(e) {
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
              x: b,
              y: L
            } = C;
            return {
              x: b,
              y: L
            };
          }
        },
        ...l
      } = fo(e, t), u = {
        x: n,
        y: r
      }, d = await rd(t, l), p = En(Un(o)), f = td(p);
      let g = u[f], h = u[p];
      if (i) {
        const C = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", L = g + d[C], x = g - d[b];
        g = ts(L, g, x);
      }
      if (s) {
        const C = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", L = h + d[C], x = h - d[b];
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
  return od(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function $t(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function xn(e) {
  var t;
  return (t = (od(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function od(e) {
  return hi() ? e instanceof Node || e instanceof $t(e).Node : !1;
}
function Ot(e) {
  return hi() ? e instanceof Element || e instanceof $t(e).Element : !1;
}
function Qt(e) {
  return hi() ? e instanceof HTMLElement || e instanceof $t(e).HTMLElement : !1;
}
function ul(e) {
  return !hi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof $t(e).ShadowRoot;
}
const l2 = /* @__PURE__ */ new Set(["inline", "contents"]);
function go(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Ht(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !l2.has(o);
}
const u2 = /* @__PURE__ */ new Set(["table", "td", "th"]);
function c2(e) {
  return u2.has(Cr(e));
}
const d2 = [":popover-open", ":modal"];
function vi(e) {
  return d2.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const f2 = ["transform", "translate", "scale", "rotate", "perspective"], p2 = ["transform", "translate", "scale", "rotate", "perspective", "filter"], g2 = ["paint", "layout", "strict", "content"];
function Js(e) {
  const t = Us(), n = Ot(e) ? Ht(e) : e;
  return f2.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || p2.some((r) => (n.willChange || "").includes(r)) || g2.some((r) => (n.contain || "").includes(r));
}
function h2(e) {
  let t = Mn(e);
  for (; Qt(t) && !br(t); ) {
    if (Js(t))
      return t;
    if (vi(t))
      return null;
    t = Mn(t);
  }
  return null;
}
function Us() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const v2 = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function br(e) {
  return v2.has(Cr(e));
}
function Ht(e) {
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
function Mn(e) {
  if (Cr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    ul(e) && e.host || // Fallback.
    xn(e)
  );
  return ul(t) ? t.host : t;
}
function id(e) {
  const t = Mn(e);
  return br(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Qt(t) && go(t) ? t : id(t);
}
function sd(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = id(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = $t(o);
  return i ? (rs(s), t.concat(s, s.visualViewport || [], go(o) ? o : [], [])) : t.concat(o, sd(o, []));
}
function rs(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ad(e) {
  const t = Ht(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Qt(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = Jo(n) !== i || Jo(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function ld(e) {
  return Ot(e) ? e : e.contextElement;
}
function ur(e) {
  const t = ld(e);
  if (!Qt(t))
    return Ft(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = ad(t);
  let s = (i ? Jo(n.width) : n.width) / r, a = (i ? Jo(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const m2 = /* @__PURE__ */ Ft(0);
function ud(e) {
  const t = $t(e);
  return !Us() || !t.visualViewport ? m2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function y2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== $t(e) ? !1 : t;
}
function Fr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = ld(e);
  let s = Ft(1);
  t && (r ? Ot(r) && (s = ur(r)) : s = ur(e));
  const a = y2(i, n, r) ? ud(i) : Ft(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, d = o.width / s.x, p = o.height / s.y;
  if (i) {
    const f = $t(i), g = r && Ot(r) ? $t(r) : r;
    let h = f, y = rs(h);
    for (; y && r && g !== h; ) {
      const C = ur(y), b = y.getBoundingClientRect(), L = Ht(y), x = b.left + (y.clientLeft + parseFloat(L.paddingLeft)) * C.x, $ = b.top + (y.clientTop + parseFloat(L.paddingTop)) * C.y;
      l *= C.x, u *= C.y, d *= C.x, p *= C.y, l += x, u += $, h = $t(y), y = rs(h);
    }
  }
  return Go({
    width: d,
    height: p,
    x: l,
    y: u
  });
}
function Gs(e, t) {
  const n = mi(e).scrollLeft;
  return t ? t.left + n : Fr(xn(e)).left + n;
}
function cd(e, t, n) {
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
function w2(e) {
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
  const f = s && !p && !i ? cd(s, l, !0) : Ft(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y + f.y
  };
}
function b2(e) {
  return Array.from(e.getClientRects());
}
function x2(e) {
  const t = xn(e), n = mi(e), r = e.ownerDocument.body, o = lr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = lr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Gs(e);
  const a = -n.scrollTop;
  return Ht(r).direction === "rtl" && (s += lr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function $2(e, t) {
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
const k2 = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function C2(e, t) {
  const n = Fr(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Qt(e) ? ur(e) : Ft(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
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
    r = $2(e, n);
  else if (t === "document")
    r = x2(xn(e));
  else if (Ot(t))
    r = C2(t, n);
  else {
    const o = ud(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Go(r);
}
function dd(e, t) {
  const n = Mn(e);
  return n === t || !Ot(n) || br(n) ? !1 : Ht(n).position === "fixed" || dd(n, t);
}
function _2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = sd(e, []).filter((a) => Ot(a) && Cr(a) !== "body"), o = null;
  const i = Ht(e).position === "fixed";
  let s = i ? Mn(e) : e;
  for (; Ot(s) && !br(s); ) {
    const a = Ht(s), l = Js(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && o && k2.has(o.position) || go(s) && !l && dd(e, s)) ? r = r.filter((u) => u !== s) : o = a, s = Mn(s);
  }
  return t.set(e, r), r;
}
function S2(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? vi(t) ? [] : _2(t, this._c) : [].concat(n), r], s = i[0], a = i.reduce((l, u) => {
    const d = cl(t, u, o);
    return l.top = lr(d.top, l.top), l.right = Yr(d.right, l.right), l.bottom = Yr(d.bottom, l.bottom), l.left = lr(d.left, l.left), l;
  }, cl(t, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function E2(e) {
  const {
    width: t,
    height: n
  } = ad(e);
  return {
    width: t,
    height: n
  };
}
function N2(e, t, n) {
  const r = Qt(t), o = xn(t), i = n === "fixed", s = Fr(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Ft(0);
  function u() {
    l.x = Gs(o);
  }
  if (r || !r && !i)
    if ((Cr(t) !== "body" || go(o)) && (a = mi(t)), r) {
      const g = Fr(t, !0, i, t);
      l.x = g.x + t.clientLeft, l.y = g.y + t.clientTop;
    } else o && u();
  i && !r && o && u();
  const d = o && !r && !i ? cd(o, a) : Ft(0), p = s.left + a.scrollLeft - l.x - d.x, f = s.top + a.scrollTop - l.y - d.y;
  return {
    x: p,
    y: f,
    width: s.width,
    height: s.height
  };
}
function Di(e) {
  return Ht(e).position === "static";
}
function dl(e, t) {
  if (!Qt(e) || Ht(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return xn(e) === n && (n = n.ownerDocument.body), n;
}
function fd(e, t) {
  const n = $t(e);
  if (vi(e))
    return n;
  if (!Qt(e)) {
    let o = Mn(e);
    for (; o && !br(o); ) {
      if (Ot(o) && !Di(o))
        return o;
      o = Mn(o);
    }
    return n;
  }
  let r = dl(e, t);
  for (; r && c2(r) && Di(r); )
    r = dl(r, t);
  return r && br(r) && Di(r) && !Js(r) ? n : r || h2(e) || n;
}
const L2 = async function(e) {
  const t = this.getOffsetParent || fd, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: N2(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function P2(e) {
  return Ht(e).direction === "rtl";
}
const V2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: w2,
  getDocumentElement: xn,
  getClippingRect: S2,
  getOffsetParent: fd,
  getElementRects: L2,
  getClientRects: b2,
  getDimensions: E2,
  getScale: ur,
  isElement: Ot,
  isRTL: P2
}, D2 = s2, M2 = a2, z2 = r2, O2 = n2, H2 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: V2,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return t2(e, t, {
    ...o,
    platform: i
  });
}, T2 = ({
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
    const b = document.querySelector(e);
    if (b)
      e = b;
    else
      throw new Error("element not found by document.querySelector('" + e + "')");
  }
  let u;
  if (typeof n == "string") {
    const b = document.querySelector(n);
    if (b)
      u = b;
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
        D2(o),
        // 手动偏移配置
        z2(i),
        //自动翻转
        M2(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [O2({ element: d })] : []
      ]
    }).then(({ x: b, y: L, placement: x, middlewareData: $ }) => {
      if (Object.assign(u.style, {
        left: `${b}px`,
        top: `${L}px`
      }), l) {
        const { x: k, y: V } = $.arrow, H = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[x.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: k != null ? `${k}px` : "",
          top: V != null ? `${V}px` : "",
          right: "",
          bottom: "",
          [H]: "2px"
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
  function y(b) {
    b.stopPropagation(), f ? h() : g();
  }
  function C(b) {
    u.contains(b.target) || h();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((b) => {
    e.addEventListener(b, y);
  }), document.addEventListener("click", C), {
    destroy() {
      t.forEach((b) => {
        e.removeEventListener(b, y);
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
var A2 = /* @__PURE__ */ Q('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function tr(e, t) {
  ue(t, !0);
  const n = m(t, "children", 7), r = m(t, "floating", 7), o = m(t, "placement", 7, "bottom");
  let i, s, a;
  Hn(() => (a = T2({
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
  var u = A2(), d = Z(u), p = Z(d);
  je(p, n), A(d), _t(d, (h) => i = h, () => i);
  var f = O(d, 2), g = Z(f);
  return je(g, r), A(f), _t(f, (h) => s = h, () => s), A(u), D(e, u), ce({
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
    Je(l, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var d = Le(), p = le(d);
    je(p, () => n() ?? tt), D(u, d);
  }), D(e, s), ce({
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
var I2 = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const Z2 = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function ho(e, t) {
  ue(t, !0), Pe(e, Z2);
  const n = /* @__PURE__ */ Me(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Se(e, Te(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = I2();
      D(r, i);
    },
    $$slots: { default: !0 }
  })), ce();
}
se(ho, {}, [], [], !0);
const B2 = () => ({ deleteNode: (e) => {
  Ie.removeNode(e), Ie.updateEdges((t) => t.filter((n) => n.source !== e && n.target !== e));
} }), Gn = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, q2 = () => ({ copyNode: (e) => {
  const t = Ie.getNode(e);
  if (t) {
    const n = Gn(), r = {
      ...t,
      id: n,
      position: { x: t.position.x + 50, y: t.position.y + 50 }
    };
    Ie.updateNodes((o) => [...o.map((i) => ({ ...i, selected: !1 })), r]);
  }
} }), We = () => Nn("svelteflow__node_id"), zn = () => Nn("tinyflow_options");
var K2 = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), R2 = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), j2 = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), W2 = /* @__PURE__ */ Q('<div class="input-item svelte-1jesvb7">执行条件： <!></div>'), X2 = (e, t, n) => {
  const r = e.target.checked;
  t(n, { async: r });
}, Y2 = (e, t, n) => {
  const r = e.target.checked;
  t(n, { loopEnable: r });
}, F2 = /* @__PURE__ */ Q('<div class="input-item svelte-1jesvb7">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-1jesvb7">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-1jesvb7">退出条件： <!></div>', 1), J2 = /* @__PURE__ */ Q('<div class="settings svelte-1jesvb7"><div class="input-item svelte-1jesvb7">节点名称： <!></div> <div class="input-item svelte-1jesvb7">参数描述： <!></div> <!> <label class="input-item-inline svelte-1jesvb7"><span>异步执行：</span> <input type="checkbox"/></label> <label class="input-item-inline svelte-1jesvb7"><span>循环执行：</span> <input type="checkbox"/></label> <!></div>'), U2 = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), G2 = /* @__PURE__ */ Q('<div class="tf-node-toolbar svelte-1jesvb7"><!> <!> <!> <!></div>'), Q2 = /* @__PURE__ */ Q('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const ey = {
  hash: "svelte-1jesvb7",
  code: ".tf-node-toolbar.svelte-1jesvb7 {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-1jesvb7 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-1jesvb7 .input-item:where(.svelte-1jesvb7) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-1jesvb7 .input-item-inline:where(.svelte-1jesvb7) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function Vt(e, t) {
  ue(t, !0), Pe(e, ey);
  const n = m(t, "data", 7), r = m(t, "id", 7, ""), o = m(t, "icon", 7), i = m(t, "handle", 7), s = m(t, "children", 7), a = m(t, "allowExecute", 7, !0), l = m(t, "allowCopy", 7, !0), u = m(t, "allowDelete", 7, !0), d = m(t, "allowSetting", 7, !0), p = m(t, "allowSettingOfCondition", 7, !0), f = m(t, "showSourceHandle", 7, !0), g = m(t, "showTargetHandle", 7, !0), h = m(t, "onCollapse", 7);
  let y = n().expand ? ["key"] : [];
  const { updateNodeData: C, getNode: b } = nt(), L = /* @__PURE__ */ S(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: x } = B2(), { copyNode: $ } = q2(), k = zn(), V = () => {
    k.onNodeExecute?.(b(r()));
  };
  let H = We();
  var B = Q2(), G = le(B);
  {
    var R = (M) => {
      Jc(M, {
        get position() {
          return ye.Top;
        },
        align: "end",
        children: (q, X) => {
          var U = G2(), oe = Z(U);
          {
            var W = (re) => {
              Se(re, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  x(r());
                },
                children: (te, de) => {
                  var ne = K2();
                  D(te, ne);
                },
                $$slots: { default: !0 }
              });
            };
            ae(oe, (re) => {
              u() && re(W);
            });
          }
          var F = O(oe, 2);
          {
            var J = (re) => {
              Se(re, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  $(r());
                },
                children: (te, de) => {
                  var ne = R2();
                  D(te, ne);
                },
                $$slots: { default: !0 }
              });
            };
            ae(F, (re) => {
              l() && re(J);
            });
          }
          var ee = O(F, 2);
          {
            var Y = (re) => {
              Se(re, {
                class: "tf-node-toolbar-item",
                onclick: V,
                children: (te, de) => {
                  var ne = j2();
                  D(te, ne);
                },
                $$slots: { default: !0 }
              });
            };
            ae(ee, (re) => {
              a() && re(Y);
            });
          }
          var ve = O(ee, 2);
          {
            var fe = (re) => {
              tr(re, {
                placement: "bottom",
                floating: (te) => {
                  var de = J2(), ne = Z(de), he = O(Z(ne));
                  Ye(he, {
                    style: "width: 100%;",
                    onchange: (Oe) => {
                      const at = Oe.target.value;
                      C(H, { title: at });
                    },
                    get value() {
                      return n().title;
                    }
                  }), A(ne);
                  var ie = O(ne, 2), ke = O(Z(ie));
                  Ze(ke, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (Oe) => {
                      const at = Oe.target.value;
                      C(H, { description: at });
                    },
                    get value() {
                      return n().description;
                    }
                  }), A(ie);
                  var K = O(ie, 2);
                  {
                    var Ue = (Oe) => {
                      var at = W2(), pe = O(Z(at));
                      Ze(pe, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Ke) => {
                          const lt = Ke.target.value;
                          C(H, { condition: lt });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), A(at), D(Oe, at);
                    };
                    ae(K, (Oe) => {
                      p() && Oe(Ue);
                    });
                  }
                  var Ve = O(K, 2), ze = O(Z(Ve), 2);
                  Wt(ze), ze.__change = [X2, C, H], A(Ve);
                  var Ge = O(Ve, 2), Be = O(Z(Ge), 2);
                  Wt(Be), Be.__change = [Y2, C, H], A(Ge);
                  var qe = O(Ge, 2);
                  {
                    var nn = (Oe) => {
                      var at = F2(), pe = le(at), Ke = O(Z(pe));
                      const lt = /* @__PURE__ */ S(() => n().loopIntervalMs || "1000");
                      Ze(Ke, {
                        rows: 1,
                        style: "width: 100%;",
                        onchange: (An) => {
                          const In = An.target.value;
                          C(H, { loopIntervalMs: In });
                        },
                        get value() {
                          return c(lt);
                        }
                      }), A(pe);
                      var Xe = O(pe, 2), Et = O(Z(Xe));
                      const Qe = /* @__PURE__ */ S(() => n().maxLoopCount || "0");
                      Ze(Et, {
                        rows: 1,
                        style: "width: 100%;",
                        onchange: (An) => {
                          const In = An.target.value;
                          C(H, { maxLoopCount: In });
                        },
                        get value() {
                          return c(Qe);
                        }
                      }), A(Xe);
                      var Zt = O(Xe, 2), yi = O(Z(Zt));
                      Ze(yi, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (An) => {
                          const In = An.target.value;
                          C(H, { loopBreakCondition: In });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), A(Zt), D(Oe, at);
                    };
                    ae(qe, (Oe) => {
                      n().loopEnable && Oe(nn);
                    });
                  }
                  A(de), xe(() => {
                    Ki(ze, !!n().async), Ki(Be, !!n().loopEnable);
                  }), D(te, de);
                },
                children: (te, de) => {
                  Se(te, {
                    class: "tf-node-toolbar-item",
                    children: (ne, he) => {
                      var ie = U2();
                      D(ne, ie);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            ae(ve, (re) => {
              d() && re(fe);
            });
          }
          A(U), D(q, U);
        },
        $$slots: { default: !0 }
      });
    };
    ae(G, (M) => {
      (a() || l() || u()) && M(R);
    });
  }
  var P = O(G, 2), _ = O(Z(P), 2), T = Z(_);
  ed(T, {
    get items() {
      return c(L);
    },
    get activeKeys() {
      return y;
    },
    onChange: (M, q) => {
      C(r(), { expand: q?.includes("key") }), h()?.(q?.includes("key") ? "key" : "");
    }
  }), A(_), A(P);
  var w = O(P, 2);
  {
    var E = (M) => {
      Dn(M, {
        type: "target",
        get position() {
          return ye.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    ae(w, (M) => {
      g() && M(E);
    });
  }
  var N = O(w, 2);
  {
    var z = (M) => {
      Dn(M, {
        type: "source",
        get position() {
          return ye.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    ae(N, (M) => {
      f() && M(z);
    });
  }
  var I = O(N, 2);
  return je(I, () => i() ?? tt), D(e, B), ce({
    get data() {
      return n();
    },
    set data(M) {
      n(M), v();
    },
    get id() {
      return r();
    },
    set id(M = "") {
      r(M), v();
    },
    get icon() {
      return o();
    },
    set icon(M) {
      o(M), v();
    },
    get handle() {
      return i();
    },
    set handle(M) {
      i(M), v();
    },
    get children() {
      return s();
    },
    set children(M) {
      s(M), v();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(M = !0) {
      a(M), v();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(M = !0) {
      l(M), v();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(M = !0) {
      u(M), v();
    },
    get allowSetting() {
      return d();
    },
    set allowSetting(M = !0) {
      d(M), v();
    },
    get allowSettingOfCondition() {
      return p();
    },
    set allowSettingOfCondition(M = !0) {
      p(M), v();
    },
    get showSourceHandle() {
      return f();
    },
    set showSourceHandle(M = !0) {
      f(M), v();
    },
    get showTargetHandle() {
      return g();
    },
    set showTargetHandle(M = !0) {
      g(M), v();
    },
    get onCollapse() {
      return h();
    },
    set onCollapse(M) {
      h(M), v();
    }
  });
}
yn(["change"]);
se(
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
const pd = [
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
], ty = [
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
var ny = /* @__PURE__ */ Q('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), ry = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), oy = /* @__PURE__ */ Q('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const iy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function gd(e, t) {
  ue(t, !0), Pe(e, iy);
  const n = m(t, "parameter", 7), r = m(t, "index", 7);
  let o = We(), i = bn(o), s = /* @__PURE__ */ S(() => ({ ...n(), ...i?.current?.data?.parameters[r()] }));
  const { updateNodeData: a } = nt(), l = (k, V) => {
    a(o, (H) => {
      let B = H.data.parameters;
      return B[r()][k] = V, { parameters: B };
    });
  }, u = (k) => {
    const V = k.target.value;
    l("name", V);
  }, d = (k) => {
    const V = k.target.checked;
    l("required", V);
  }, p = (k) => {
    const V = k.value;
    V && l("dataType", V);
  };
  let f;
  const g = () => {
    a(o, (k) => {
      let V = k.data.parameters;
      return V.splice(r(), 1), { parameters: [...V] };
    }), f?.hide();
  };
  var h = oy(), y = le(h), C = Z(y);
  Ye(C, {
    style: "width: 100%;",
    get value() {
      return c(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: u
  }), A(y);
  var b = O(y, 2), L = Z(b);
  Uc(L, {
    get checked() {
      return c(s).required;
    },
    onchange: d
  }), A(b);
  var x = O(b, 2), $ = Z(x);
  return _t(
    tr($, {
      placement: "bottom",
      floating: (k) => {
        var V = ny(), H = Z(V), B = O(Z(H));
        const G = /* @__PURE__ */ S(() => c(s).dataType ? [c(s).dataType] : ["String"]);
        dt(B, {
          get items() {
            return pd;
          },
          style: "width: 100%",
          onSelect: p,
          get value() {
            return c(G);
          }
        }), A(H);
        var R = O(H, 2), P = O(Z(R));
        Ze(P, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return c(s).defaultValue;
          },
          onchange: (N) => {
            const z = N.target.value;
            l("defaultValue", z);
          }
        }), A(R);
        var _ = O(R, 2), T = O(Z(_));
        Ze(T, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return c(s).description;
          },
          onchange: (N) => {
            const z = N.target.value;
            l("description", z);
          }
        }), A(_);
        var w = O(_, 2), E = Z(w);
        Se(E, {
          onclick: g,
          children: (N, z) => {
            me();
            var I = $e("删除");
            D(N, I);
          },
          $$slots: { default: !0 }
        }), A(w), A(V), D(k, V);
      },
      children: (k, V) => {
        Se(k, {
          class: "input-btn-more",
          children: (H, B) => {
            var G = ry();
            D(H, G);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (k) => f = k,
    () => f
  ), A(x), D(e, h), ce({
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
se(gd, { parameter: {}, index: {} }, [], [], !0);
var sy = /* @__PURE__ */ Q('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), ay = /* @__PURE__ */ Q('<div class="none-params svelte-3n0wca">无输入参数</div>'), ly = /* @__PURE__ */ Q('<div class="input-container svelte-3n0wca"><!> <!></div>');
const uy = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function hd(e, t) {
  ue(t, !0), Pe(e, uy);
  let n = We(), r = bn(n), o = /* @__PURE__ */ S(() => [...r?.current?.data?.parameters || []]);
  var i = ly(), s = Z(i);
  {
    var a = (u) => {
      var d = sy();
      me(4), D(u, d);
    };
    ae(s, (u) => {
      c(o).length !== 0 && u(a);
    });
  }
  var l = O(s, 2);
  st(
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
      var d = ay();
      D(u, d);
    }
  ), A(i), D(e, i), ce();
}
se(hd, {}, [], [], !0);
const Jr = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = Gn()), Jr(t.children);
}), e), It = () => {
  const { updateNodeData: e } = nt();
  return {
    addParameter: (t, n = "parameters", r) => {
      Array.isArray(r) ? r.forEach((s) => Jr(s?.children)) : Jr(r?.children);
      function o(s) {
        return {
          name: "",
          dataType: "String",
          refType: "ref",
          ...s,
          id: Gn()
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
var cy = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), dy = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), fy = /* @__PURE__ */ Q('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const py = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function vd(e, t) {
  ue(t, !0), Pe(e, py);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Me(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = We(), { addParameter: i } = It();
  return Vt(e, Te(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (s) => {
      var a = cy();
      D(s, a);
    },
    children: (s, a) => {
      var l = fy(), u = le(l), d = Z(u);
      Ee(d, {
        level: 3,
        children: (g, h) => {
          me();
          var y = $e("输入参数");
          D(g, y);
        },
        $$slots: { default: !0 }
      });
      var p = O(d, 2);
      Se(p, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input" });
        },
        children: (g, h) => {
          var y = dy();
          D(g, y);
        },
        $$slots: { default: !0 }
      }), A(u);
      var f = O(u, 2);
      hd(f, {}), D(s, l);
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
          children: yd(r, e.id, t)
        };
    }
  }
}, wd = (e = !1) => {
  const t = We(), n = bn(t), r = /* @__PURE__ */ S(At), o = /* @__PURE__ */ S(() => c(r).nodes), i = /* @__PURE__ */ S(() => c(r).edges), s = /* @__PURE__ */ S(() => c(r).nodeLookup);
  let a = /* @__PURE__ */ S(() => {
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
      md(d, t, c(i));
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
var gy = /* @__PURE__ */ Q('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), hy = /* @__PURE__ */ Q('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const vy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function bd(e, t) {
  ue(t, !0), Pe(e, vy), Hn(() => {
    c(l).refType || g({ value: "ref" });
  });
  const n = m(t, "parameter", 7), r = m(t, "index", 7), o = m(t, "dataKeyName", 7), i = m(t, "useChildrenOnly", 7);
  let s = We(), a = bn(s), l = /* @__PURE__ */ S(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: u } = nt(), d = (P, _) => {
    u(s, (T) => {
      let w = T.data?.[o()];
      return w[r()] = { ...w[r()], [P]: _ }, { [o()]: w };
    });
  }, p = (P, _) => {
    const T = _.target.value;
    d(P, T);
  }, f = (P) => {
    const _ = P.value;
    d("ref", _);
  }, g = (P) => {
    const _ = P.value;
    d("refType", _);
  };
  let h;
  const y = () => {
    u(s, (P) => {
      let _ = P.data?.[o()];
      return _.splice(r(), 1), { [o()]: [..._] };
    }), h?.hide();
  };
  let C = wd(i());
  var b = hy(), L = le(b), x = Z(L);
  const $ = /* @__PURE__ */ S(() => c(l).nameDisabled === !0);
  Ye(x, {
    style: "width: 100%;",
    get value() {
      return c(l).name;
    },
    placeholder: "请输入参数名称",
    get disabled() {
      return c($);
    },
    oninput: (P) => p("name", P)
  }), A(L);
  var k = O(L, 2), V = Z(k);
  {
    var H = (P) => {
      Ye(P, {
        get value() {
          return c(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (_) => p("value", _)
      });
    }, B = (P, _) => {
      {
        var T = (w) => {
          const E = /* @__PURE__ */ S(() => [c(l).ref]);
          dt(w, {
            get items() {
              return C.current;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return c(E);
            },
            expandAll: !0,
            onSelect: f
          });
        };
        ae(
          P,
          (w) => {
            c(l).refType !== "input" && w(T);
          },
          _
        );
      }
    };
    ae(V, (P) => {
      c(l).refType === "fixed" ? P(H) : P(B, !1);
    });
  }
  A(k);
  var G = O(k, 2), R = Z(G);
  return _t(
    tr(R, {
      placement: "bottom",
      floating: (P) => {
        var _ = gy(), T = Z(_), w = O(Z(T));
        const E = /* @__PURE__ */ S(() => c(l).refType ? [c(l).refType] : []);
        dt(w, {
          get items() {
            return ty;
          },
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return c(E);
          },
          onSelect: g
        }), A(T);
        var N = O(T, 2), z = O(Z(N));
        Ze(z, {
          rows: 1,
          style: "width: 100%;",
          onchange: (U) => {
            p("defaultValue", U);
          },
          get value() {
            return c(l).defaultValue;
          }
        }), A(N);
        var I = O(N, 2), M = O(Z(I));
        Ze(M, {
          rows: 3,
          style: "width: 100%;",
          onchange: (U) => {
            p("description", U);
          },
          get value() {
            return c(l).description;
          }
        }), A(I);
        var q = O(I, 2), X = Z(q);
        Se(X, {
          onclick: y,
          children: (U, oe) => {
            me();
            var W = $e("删除");
            D(U, W);
          },
          $$slots: { default: !0 }
        }), A(q), A(_), D(P, _);
      },
      children: (P, _) => {
        ho(P, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (P) => h = P,
    () => h
  ), A(G), D(e, b), ce({
    get parameter() {
      return n();
    },
    set parameter(P) {
      n(P), v();
    },
    get index() {
      return r();
    },
    set index(P) {
      r(P), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(P) {
      o(P), v();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(P) {
      i(P), v();
    }
  });
}
se(
  bd,
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
var my = /* @__PURE__ */ Q('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), yy = /* @__PURE__ */ Q('<div class="none-params svelte-1sm1mgi"> </div>'), wy = /* @__PURE__ */ Q('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const by = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function ht(e, t) {
  ue(t, !0), Pe(e, by);
  const n = m(t, "noneParameterText", 7, "无输入参数"), r = m(t, "dataKeyName", 7, "parameters"), o = m(t, "useChildrenOnly", 7);
  let i = We(), s = bn(i), a = /* @__PURE__ */ S(() => [...s?.current?.data?.[r()] || []]);
  var l = wy(), u = Z(l);
  {
    var d = (f) => {
      var g = my();
      me(4), D(f, g);
    };
    ae(u, (f) => {
      c(a).length !== 0 && f(d);
    });
  }
  var p = O(u, 2);
  return st(
    p,
    19,
    () => c(a),
    (f) => f.id,
    (f, g, h) => {
      bd(f, {
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
      var g = yy(), h = Z(g, !0);
      A(g), xe(() => He(h, n())), D(f, g);
    }
  ), A(l), D(e, l), ce({
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
se(ht, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
var xy = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), $y = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ky = /* @__PURE__ */ Q('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const Cy = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function xd(e, t) {
  ue(t, !0), Pe(e, Cy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Me(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = We(), { addParameter: i } = It();
  return Vt(e, Te(
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
        var a = xy();
        D(s, a);
      },
      children: (s, a) => {
        var l = ky(), u = le(l), d = Z(u);
        Ee(d, {
          level: 3,
          children: (g, h) => {
            me();
            var y = $e("输出参数");
            D(g, y);
          },
          $$slots: { default: !0 }
        });
        var p = O(d, 2);
        Se(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (g, h) => {
            var y = $y();
            D(g, y);
          },
          $$slots: { default: !0 }
        }), A(u);
        var f = O(u, 2);
        ht(f, { noneParameterText: "无输出参数", dataKeyName: "outputDefs" }), D(s, l);
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
const Mi = (e) => JSON.parse(JSON.stringify(e));
var _y = /* @__PURE__ */ ge('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Sy = /* @__PURE__ */ Q('<div class="input-more-item svelte-1cfeest"><!></div>'), Ey = /* @__PURE__ */ Q('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), Ny = /* @__PURE__ */ Q('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const Ly = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function $d(e, t) {
  ue(t, !0), Pe(e, Ly);
  const n = m(t, "parameter", 7), r = m(t, "position", 7), o = m(t, "dataKeyName", 7), i = m(t, "placeholder", 7, "请输入参数值");
  let s = We(), a = bn(s), l = /* @__PURE__ */ S(() => {
    let w = a?.current?.data?.[o()], E;
    if (w && r().length > 0) {
      let N = w;
      for (let z = 0; z < r().length; z++) {
        const I = r()[z];
        z == r().length - 1 ? E = N[I] : N = N[I].children;
      }
    }
    return { ...n(), ...E };
  });
  const { updateNodeData: u } = nt(), d = (w, E) => {
    u(s, (N) => {
      const z = N.data?.[o()];
      if (z && r().length > 0) {
        let I = z;
        for (let M = 0; M < r().length; M++) {
          const q = r()[M];
          M == r().length - 1 ? I[q] = { ...I[q], [w]: E } : I = I[q].children;
        }
      }
      return { [o()]: [...Mi(z)] };
    });
  }, p = (w, E) => {
    const N = E.target.value;
    d(w, N);
  }, f = (w) => {
    const E = w.value;
    d("dataType", E);
  };
  let g;
  const h = () => {
    u(s, (w) => {
      let E = w.data?.[o()];
      if (E && r().length > 0) {
        let N = E;
        for (let z = 0; z < r().length; z++) {
          const I = r()[z];
          z == r().length - 1 ? N.splice(I, 1) : N = N[I].children;
        }
      }
      return { [o()]: [...Mi(E)] };
    }), g?.hide();
  }, y = () => {
    u(s, (w) => {
      let E = w.data?.[o()];
      if (E && r().length > 0) {
        let N = E;
        for (let z = 0; z < r().length; z++) {
          const I = r()[z];
          z == r().length - 1 ? N[I].children ? N[I].children.push({ id: Gn(), name: "newParam", dataType: "String" }) : N[I].children = [{ id: Gn(), name: "newParam", dataType: "String" }] : N = N[I].children;
        }
      }
      return { [o()]: [...Mi(E)] };
    });
  };
  var C = Ny(), b = le(C), L = Z(b);
  {
    var x = (w) => {
      var E = Le(), N = le(E);
      st(N, 17, r, pr, (z, I) => {
        me();
        var M = $e(" ");
        D(z, M);
      }), D(w, E);
    };
    ae(L, (w) => {
      r().length > 1 && w(x);
    });
  }
  var $ = O(L, 2);
  const k = /* @__PURE__ */ S(() => c(l).nameDisabled === !0);
  Ye($, {
    style: "width: 100%;",
    get value() {
      return c(l).name;
    },
    get placeholder() {
      return i();
    },
    oninput: (w) => {
      p("name", w);
    },
    get disabled() {
      return c(k);
    }
  }), A(b);
  var V = O(b, 2), H = Z(V);
  const B = /* @__PURE__ */ S(() => c(l).dataType ? [c(l).dataType] : []), G = /* @__PURE__ */ S(() => c(l).dataTypeDisabled === !0);
  dt(H, {
    get items() {
      return pd;
    },
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return c(B);
    },
    get disabled() {
      return c(G);
    },
    onSelect: f
  });
  var R = O(H, 2);
  {
    var P = (w) => {
      Se(w, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: y,
        children: (E, N) => {
          var z = _y();
          D(E, z);
        },
        $$slots: { default: !0 }
      });
    };
    ae(R, (w) => {
      (c(l).dataType === "Object" || c(l).dataType === "Array") && c(l).addChildDisabled !== !0 && w(P);
    });
  }
  A(V);
  var _ = O(V, 2), T = Z(_);
  return _t(
    tr(T, {
      placement: "bottom",
      floating: (w) => {
        var E = Ey(), N = Z(E), z = O(Z(N));
        const I = /* @__PURE__ */ S(() => c(l).defaultValue || "");
        Ze(z, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return c(I);
          },
          onchange: (W) => {
            p("defaultValue", W);
          }
        }), A(N);
        var M = O(N, 2), q = O(Z(M));
        const X = /* @__PURE__ */ S(() => c(l).description || "");
        Ze(q, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return c(X);
          },
          onchange: (W) => {
            p("description", W);
          }
        }), A(M);
        var U = O(M, 2);
        {
          var oe = (W) => {
            var F = Sy(), J = Z(F);
            Se(J, {
              onclick: h,
              children: (ee, Y) => {
                me();
                var ve = $e("删除");
                D(ee, ve);
              },
              $$slots: { default: !0 }
            }), A(F), D(W, F);
          };
          ae(U, (W) => {
            c(l).deleteDisabled !== !0 && W(oe);
          });
        }
        A(E), D(w, E);
      },
      children: (w, E) => {
        ho(w, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (w) => g = w,
    () => g
  ), A(_), D(e, C), ce({
    get parameter() {
      return n();
    },
    set parameter(w) {
      n(w), v();
    },
    get position() {
      return r();
    },
    set position(w) {
      r(w), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(w) {
      o(w), v();
    },
    get placeholder() {
      return i();
    },
    set placeholder(w = "请输入参数值") {
      i(w), v();
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
var Py = /* @__PURE__ */ Q("<!> <!>", 1), Vy = /* @__PURE__ */ Q('<div class="none-params svelte-1sm1mgi"> </div>'), Dy = /* @__PURE__ */ Q('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), My = /* @__PURE__ */ Q('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const zy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function $n(e, t) {
  ue(t, !0), Pe(e, zy);
  const n = (g, h = tt, y = tt) => {
    var C = Le(), b = le(C);
    st(
      b,
      19,
      h,
      (L) => `${L.id}_${L.children ? L.children.length : 0}`,
      (L, x, $) => {
        var k = Py(), V = le(k);
        const H = /* @__PURE__ */ S(() => [...y(), c($)]);
        $d(V, {
          get parameter() {
            return c(x);
          },
          get position() {
            return c(H);
          },
          get dataKeyName() {
            return o();
          },
          get placeholder() {
            return i();
          }
        });
        var B = O(V, 2);
        {
          var G = (R) => {
            var P = /* @__PURE__ */ ws(() => [...y(), c($)]);
            n(R, () => c(x).children, () => c(P));
          };
          ae(B, (R) => {
            c(x).children && R(G);
          });
        }
        D(L, k);
      },
      (L) => {
        var x = Le(), $ = le(x);
        {
          var k = (V) => {
            var H = Vy(), B = Z(H, !0);
            A(H), xe(() => He(B, r())), D(V, H);
          };
          ae($, (V) => {
            y().length === 0 && V(k);
          });
        }
        D(L, x);
      }
    ), D(g, C);
  }, r = m(t, "noneParameterText", 7, "无输出参数"), o = m(t, "dataKeyName", 7, "outputDefs"), i = m(t, "placeholder", 7, "请输入参数名称");
  let s = We(), a = bn(s), l = /* @__PURE__ */ S(() => [...a?.current?.data?.[o()] || []]);
  var u = My(), d = Z(u);
  {
    var p = (g) => {
      var h = Dy();
      me(4), D(g, h);
    };
    ae(d, (g) => {
      c(l).length !== 0 && g(p);
    });
  }
  var f = O(d, 2);
  return n(f, () => c(l) || [], () => []), A(u), D(e, u), ce({
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
var Oy = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), Hy = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ty = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), Ay = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), Iy = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), Zy = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), By = /* @__PURE__ */ Q('<div class="heading svelte-q0cqsa"><!> <!></div> <!> <!> <div class="setting-title svelte-q0cqsa">模型</div> <div class="setting-item svelte-q0cqsa"><!> <!></div> <div class="setting-title svelte-q0cqsa">采样参数</div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="100" step="1"/></div></div> <div class="setting-title svelte-q0cqsa">系统提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="setting-title svelte-q0cqsa">用户提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="heading svelte-q0cqsa"><!> <!> <!></div> <!>', 1);
const qy = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function kd(e, t) {
  ue(t, !0), Pe(e, qy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Me(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = We(), { addParameter: i } = It(), s = zn();
  let a = /* @__PURE__ */ Ce(Pt([]));
  Hn(async () => {
    const d = await s.provider?.llm?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = nt(), u = (d) => {
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
  }), Vt(e, Te(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var p = Oy();
        D(d, p);
      },
      children: (d, p) => {
        var f = By(), g = le(f), h = Z(g);
        Ee(h, {
          level: 3,
          children: (ne, he) => {
            me();
            var ie = $e("输入参数");
            D(ne, ie);
          },
          $$slots: { default: !0 }
        });
        var y = O(h, 2);
        Se(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (ne, he) => {
            var ie = Hy();
            D(ne, ie);
          },
          $$slots: { default: !0 }
        }), A(g);
        var C = O(g, 2);
        ht(C, {});
        var b = O(C, 2);
        Ee(b, {
          level: 3,
          mt: "10px",
          children: (ne, he) => {
            me();
            var ie = $e("模型设置");
            D(ne, ie);
          },
          $$slots: { default: !0 }
        });
        var L = O(b, 4), x = Z(L);
        const $ = /* @__PURE__ */ S(() => n().llmId ? [n().llmId] : []);
        dt(x, {
          get items() {
            return c(a);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (ne) => {
            const he = ne.value;
            l(o, () => ({ llmId: he }));
          },
          get value() {
            return c($);
          }
        });
        var k = O(x, 2);
        ho(k, {}), A(L);
        var V = O(L, 4), H = Z(V), B = Z(H), G = Z(B);
        A(B);
        var R = O(B, 2);
        Wt(R), R.__input = [Ty, l, o], A(H), A(V);
        var P = O(V, 2), _ = Z(P), T = Z(_), w = Z(T);
        A(T);
        var E = O(T, 2);
        Wt(E), E.__input = [Ay, l, o], A(_), A(P);
        var N = O(P, 2), z = Z(N), I = Z(z), M = Z(I);
        A(I);
        var q = O(I, 2);
        Wt(q), q.__input = [Iy, l, o], A(z), A(N);
        var X = O(N, 4), U = Z(X);
        const oe = /* @__PURE__ */ S(() => n().systemPrompt || "");
        Ze(U, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return c(oe);
          },
          oninput: (ne) => {
            l(o, { systemPrompt: ne.target.value });
          }
        }), A(X);
        var W = O(X, 4), F = Z(W);
        const J = /* @__PURE__ */ S(() => n().userPrompt || "");
        Ze(F, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return c(J);
          },
          oninput: (ne) => {
            l(o, { userPrompt: ne.target.value });
          }
        }), A(W);
        var ee = O(W, 2), Y = Z(ee);
        Ee(Y, {
          level: 3,
          mt: "10px",
          children: (ne, he) => {
            me();
            var ie = $e("输出参数");
            D(ne, ie);
          },
          $$slots: { default: !0 }
        });
        var ve = O(Y, 2);
        const fe = /* @__PURE__ */ S(() => n().outType ? [n().outType] : []);
        dt(ve, {
          items: [
            { label: "文本", value: "text" },
            { label: "JSON", value: "json" }
          ],
          style: "width: 100px;margin-left: auto",
          defaultValue: "text",
          onSelect: (ne) => {
            u(ne.value);
          },
          get value() {
            return c(fe);
          }
        });
        var re = O(ve, 2);
        {
          var te = (ne) => {
            Se(ne, {
              class: "input-btn-more",
              style: "margin-left: 10px",
              onclick: () => {
                i(o, "outputDefs");
              },
              children: (he, ie) => {
                var ke = Zy();
                D(he, ke);
              },
              $$slots: { default: !0 }
            });
          };
          ae(re, (ne) => {
            n().outType === "json" && ne(te);
          });
        }
        A(ee);
        var de = O(ee, 2);
        $n(de, {}), xe(() => {
          He(G, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), _o(R, n().temperature ?? 0.5), He(w, `Top P: ${n().topP ?? 0.9 ?? ""}`), _o(E, n().topP ?? 0.9), He(M, `Top K: ${n().topK ?? 50 ?? ""}`), _o(q, n().topK ?? 50);
        }), D(d, f);
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
var Ky = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Ry = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), jy = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Wy = /* @__PURE__ */ Q('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const Xy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Cd(e, t) {
  ue(t, !0), Pe(e, Xy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Me(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Hn(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = We(), { addParameter: i } = It(), { updateNodeData: s } = nt(), a = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  return Vt(e, Te(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Ky();
        D(l, u);
      },
      children: (l, u) => {
        var d = Wy(), p = le(d), f = Z(p);
        Ee(f, {
          level: 3,
          children: (R, P) => {
            me();
            var _ = $e("输入参数");
            D(R, _);
          },
          $$slots: { default: !0 }
        });
        var g = O(f, 2);
        Se(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (R, P) => {
            var _ = Ry();
            D(R, _);
          },
          $$slots: { default: !0 }
        }), A(p);
        var h = O(p, 2);
        ht(h, {});
        var y = O(h, 2);
        Ee(y, {
          level: 3,
          mt: "10px",
          children: (R, P) => {
            me();
            var _ = $e("代码");
            D(R, _);
          },
          $$slots: { default: !0 }
        });
        var C = O(y, 4), b = Z(C);
        const L = /* @__PURE__ */ S(() => n().engine ? [n().engine] : ["qlexpress"]);
        dt(b, {
          get items() {
            return a;
          },
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (R) => {
            const P = R.value;
            s(o, () => ({ engine: P }));
          },
          get value() {
            return c(L);
          }
        }), A(C);
        var x = O(C, 4), $ = Z(x);
        const k = /* @__PURE__ */ S(() => n().code || "");
        Ze($, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (R) => {
            s(o, () => ({ code: R.target.value }));
          },
          get value() {
            return c(k);
          }
        }), A(x);
        var V = O(x, 2), H = Z(V);
        Ee(H, {
          level: 3,
          mt: "10px",
          children: (R, P) => {
            me();
            var _ = $e("输出参数");
            D(R, _);
          },
          $$slots: { default: !0 }
        });
        var B = O(H, 2);
        Se(B, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (R, P) => {
            var _ = jy();
            D(R, _);
          },
          $$slots: { default: !0 }
        }), A(V);
        var G = O(V, 2);
        $n(G, {}), D(l, d);
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
var Yy = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), Fy = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Jy = /* @__PURE__ */ Q('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Uy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function _d(e, t) {
  ue(t, !0), Pe(e, Uy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Me(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = We(), { addParameter: i } = It(), { updateNodeData: s } = nt();
  return Re(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), Vt(e, Te(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var l = Yy();
        D(a, l);
      },
      children: (a, l) => {
        var u = Jy(), d = le(u), p = Z(d);
        Ee(p, {
          level: 3,
          children: (k, V) => {
            me();
            var H = $e("输入参数");
            D(k, H);
          },
          $$slots: { default: !0 }
        });
        var f = O(p, 2);
        Se(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (k, V) => {
            var H = Fy();
            D(k, H);
          },
          $$slots: { default: !0 }
        }), A(d);
        var g = O(d, 2);
        ht(g, {});
        var h = O(g, 2);
        Ee(h, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (k, V) => {
            me();
            var H = $e("模板内容");
            D(k, H);
          },
          $$slots: { default: !0 }
        });
        var y = O(h, 2), C = Z(y);
        const b = /* @__PURE__ */ S(() => n().template || "");
        Ze(C, {
          rows: 10,
          placeholder: "请输入模板内容",
          style: "width: 100%",
          onchange: (k) => {
            s(o, () => ({ template: k.target.value }));
          },
          get value() {
            return c(b);
          }
        }), A(y);
        var L = O(y, 2), x = Z(L);
        Ee(x, {
          level: 3,
          mt: "10px",
          children: (k, V) => {
            me();
            var H = $e("输出参数");
            D(k, H);
          },
          $$slots: { default: !0 }
        }), A(L);
        var $ = O(L, 2);
        $n($, {}), D(a, u);
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
var Gy = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), Qy = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ew = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), tw = /* @__PURE__ */ Q('<!> <div class="radio-group svelte-1dxz5e"><label class="svelte-1dxz5e"><!>none</label> <label class="svelte-1dxz5e"><!>form-data</label> <label class="svelte-1dxz5e"><!>x-www-form-urlencoded</label> <label class="svelte-1dxz5e"><!>json</label> <label class="svelte-1dxz5e"><!>raw</label></div>', 1), nw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), rw = /* @__PURE__ */ Q('<div class="heading svelte-1dxz5e" style="padding-top: 10px"><!> <!></div> <!>', 1), ow = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), iw = /* @__PURE__ */ Q('<div class="heading svelte-1dxz5e" style="padding-top: 10px"><!> <!></div> <!>', 1), sw = /* @__PURE__ */ Q('<div style="width: 100%"><!></div>'), aw = /* @__PURE__ */ Q('<div style="width: 100%"><!></div>'), lw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), uw = /* @__PURE__ */ Q('<div class="heading svelte-1dxz5e"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1dxz5e"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class="heading svelte-1dxz5e"><!> <!></div> <!>', 1);
const cw = {
  hash: "svelte-1dxz5e",
  code: ".heading.svelte-1dxz5e {display:flex;margin-bottom:10px;}.radio-group.svelte-1dxz5e {display:flex;margin:10px 0;flex-wrap:wrap;}.radio-group.svelte-1dxz5e label:where(.svelte-1dxz5e) {display:flex;font-size:14px;box-sizing:border-box;}"
};
function Sd(e, t) {
  ue(t, !0), Pe(e, cw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Me(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Hn(() => {
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
  ], i = We(), { addParameter: s } = It(), { updateNodeData: a } = nt();
  return Vt(e, Te(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Gy();
        D(l, u);
      },
      children: (l, u) => {
        var d = uw(), p = le(d), f = Z(p);
        Ee(f, {
          level: 3,
          children: (F, J) => {
            me();
            var ee = $e("输入参数");
            D(F, ee);
          },
          $$slots: { default: !0 }
        });
        var g = O(f, 2);
        Se(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (F, J) => {
            var ee = Qy();
            D(F, ee);
          },
          $$slots: { default: !0 }
        }), A(p);
        var h = O(p, 2);
        ht(h, {});
        var y = O(h, 2);
        Ee(y, {
          level: 3,
          mt: "10px",
          children: (F, J) => {
            me();
            var ee = $e("URL 地址");
            D(F, ee);
          },
          $$slots: { default: !0 }
        });
        var C = O(y, 2), b = Z(C), L = Z(b);
        const x = /* @__PURE__ */ S(() => n().method ? [n().method] : ["get"]);
        dt(L, {
          get items() {
            return o;
          },
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (F) => {
            const J = F.value;
            a(i, () => ({ method: J }));
          },
          get value() {
            return c(x);
          }
        }), A(b);
        var $ = O(b, 2), k = Z($);
        const V = /* @__PURE__ */ S(() => n().url || "");
        Ye(k, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (F) => {
            a(i, () => ({ url: F.target.value }));
          },
          get value() {
            return c(V);
          }
        }), A($), A(C);
        var H = O(C, 2), B = Z(H);
        Ee(B, {
          level: 3,
          children: (F, J) => {
            me();
            var ee = $e("Http 头信息");
            D(F, ee);
          },
          $$slots: { default: !0 }
        });
        var G = O(B, 2);
        Se(G, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (F, J) => {
            var ee = ew();
            D(F, ee);
          },
          $$slots: { default: !0 }
        }), A(H);
        var R = O(H, 2);
        ht(R, { dataKeyName: "headers" });
        var P = O(R, 2);
        {
          var _ = (F) => {
            var J = tw(), ee = le(J);
            Ee(ee, {
              level: 3,
              mt: "10px",
              children: (qe, nn) => {
                me();
                var Oe = $e("Body");
                D(qe, Oe);
              },
              $$slots: { default: !0 }
            });
            var Y = O(ee, 2), ve = Z(Y), fe = Z(ve);
            const re = /* @__PURE__ */ S(() => !n().bodyType || n().bodyType === "");
            Ye(fe, {
              type: "radio",
              name: "bodyType",
              value: "",
              get checked() {
                return c(re);
              },
              onchange: (qe) => {
                qe.target?.checked && a(i, { bodyType: "" });
              }
            }), me(), A(ve);
            var te = O(ve, 2), de = Z(te);
            const ne = /* @__PURE__ */ S(() => n().bodyType === "form-data");
            Ye(de, {
              type: "radio",
              name: "bodyType",
              value: "form-data",
              get checked() {
                return c(ne);
              },
              onchange: (qe) => {
                qe.target?.checked && a(i, { bodyType: "form-data" });
              }
            }), me(), A(te);
            var he = O(te, 2), ie = Z(he);
            const ke = /* @__PURE__ */ S(() => n().bodyType === "x-www-form-urlencoded");
            Ye(ie, {
              type: "radio",
              name: "bodyType",
              value: "x-www-form-urlencoded",
              get checked() {
                return c(ke);
              },
              onchange: (qe) => {
                qe.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
              }
            }), me(), A(he);
            var K = O(he, 2), Ue = Z(K);
            const Ve = /* @__PURE__ */ S(() => n().bodyType === "json");
            Ye(Ue, {
              type: "radio",
              name: "bodyType",
              value: "json",
              get checked() {
                return c(Ve);
              },
              onchange: (qe) => {
                qe.target?.checked && a(i, { bodyType: "json" });
              }
            }), me(), A(K);
            var ze = O(K, 2), Ge = Z(ze);
            const Be = /* @__PURE__ */ S(() => n().bodyType === "raw");
            Ye(Ge, {
              type: "radio",
              name: "bodyType",
              value: "raw",
              get checked() {
                return c(Be);
              },
              onchange: (qe) => {
                qe.target?.checked && a(i, { bodyType: "raw" });
              }
            }), me(), A(ze), A(Y), D(F, J);
          };
          ae(P, (F) => {
            (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && F(_);
          });
        }
        var T = O(P, 2);
        {
          var w = (F) => {
            var J = rw(), ee = le(J), Y = Z(ee);
            Ee(Y, {
              level: 3,
              children: (re, te) => {
                me();
                var de = $e("参数");
                D(re, de);
              },
              $$slots: { default: !0 }
            });
            var ve = O(Y, 2);
            Se(ve, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (re, te) => {
                var de = nw();
                D(re, de);
              },
              $$slots: { default: !0 }
            }), A(ee);
            var fe = O(ee, 2);
            ht(fe, { dataKeyName: "formData" }), D(F, J);
          };
          ae(T, (F) => {
            n().bodyType === "form-data" && F(w);
          });
        }
        var E = O(T, 2);
        {
          var N = (F) => {
            var J = iw(), ee = le(J), Y = Z(ee);
            Ee(Y, {
              level: 3,
              children: (re, te) => {
                me();
                var de = $e("Body 参数");
                D(re, de);
              },
              $$slots: { default: !0 }
            });
            var ve = O(Y, 2);
            Se(ve, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (re, te) => {
                var de = ow();
                D(re, de);
              },
              $$slots: { default: !0 }
            }), A(ee);
            var fe = O(ee, 2);
            ht(fe, { dataKeyName: "formUrlencoded" }), D(F, J);
          };
          ae(E, (F) => {
            n().bodyType === "x-www-form-urlencoded" && F(N);
          });
        }
        var z = O(E, 2);
        {
          var I = (F) => {
            var J = sw(), ee = Z(J);
            Ze(ee, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Y) => {
                a(i, { bodyJson: Y.target.value });
              }
            }), A(J), D(F, J);
          };
          ae(z, (F) => {
            n().bodyType === "json" && F(I);
          });
        }
        var M = O(z, 2);
        {
          var q = (F) => {
            var J = aw(), ee = Z(J);
            Ze(ee, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Y) => {
                a(i, { bodyRaw: Y.target.value });
              }
            }), A(J), D(F, J);
          };
          ae(M, (F) => {
            n().bodyType === "raw" && F(q);
          });
        }
        var X = O(M, 2), U = Z(X);
        Ee(U, {
          level: 3,
          mt: "10px",
          children: (F, J) => {
            me();
            var ee = $e("输出参数");
            D(F, ee);
          },
          $$slots: { default: !0 }
        });
        var oe = O(U, 2);
        Se(oe, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (F, J) => {
            var ee = lw();
            D(F, ee);
          },
          $$slots: { default: !0 }
        }), A(X);
        var W = O(X, 2);
        $n(W, {}), D(l, d);
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
var dw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), fw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), pw = /* @__PURE__ */ Q('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const gw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Ed(e, t) {
  ue(t, !0), Pe(e, gw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Me(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = We(), { addParameter: i } = It(), s = zn();
  let a = /* @__PURE__ */ Ce(Pt([]));
  Hn(async () => {
    const u = await s.provider?.knowledge?.();
    c(a).push(...u || []);
  });
  const { updateNodeData: l } = nt();
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
  }), Vt(e, Te(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = dw();
        D(u, d);
      },
      children: (u, d) => {
        var p = pw(), f = le(p), g = Z(f);
        Ee(g, {
          level: 3,
          children: (_, T) => {
            me();
            var w = $e("输入参数");
            D(_, w);
          },
          $$slots: { default: !0 }
        });
        var h = O(g, 2);
        Se(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (_, T) => {
            var w = fw();
            D(_, w);
          },
          $$slots: { default: !0 }
        }), A(f);
        var y = O(f, 2);
        ht(y, {});
        var C = O(y, 2);
        Ee(C, {
          level: 3,
          mt: "10px",
          children: (_, T) => {
            me();
            var w = $e("知识库设置");
            D(_, w);
          },
          $$slots: { default: !0 }
        });
        var b = O(C, 4), L = Z(b);
        const x = /* @__PURE__ */ S(() => n().knowledgeId ? [n().knowledgeId] : []);
        dt(L, {
          get items() {
            return c(a);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (_) => {
            const T = _.value;
            l(o, () => ({ knowledgeId: T }));
          },
          get value() {
            return c(x);
          }
        }), A(b);
        var $ = O(b, 4), k = Z($);
        Ye(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (_) => {
            const T = _.target.value;
            l(o, () => ({ keyword: T }));
          }
        }), A($);
        var V = O($, 4), H = Z(V);
        const B = /* @__PURE__ */ S(() => n().limit || "");
        Ye(H, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          onchange: (_) => {
            const T = _.target.value;
            l(o, () => ({ limit: T }));
          },
          get value() {
            return c(B);
          }
        }), A(V);
        var G = O(V, 2), R = Z(G);
        Ee(R, {
          level: 3,
          mt: "10px",
          children: (_, T) => {
            me();
            var w = $e("输出参数");
            D(_, w);
          },
          $$slots: { default: !0 }
        }), A(G);
        var P = O(G, 2);
        $n(P, {}), D(u, p);
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
var hw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), vw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), mw = /* @__PURE__ */ Q('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const yw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Nd(e, t) {
  ue(t, !0), Pe(e, yw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Me(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = We(), { addParameter: i } = It(), s = zn();
  let a = /* @__PURE__ */ Ce(Pt([]));
  Hn(async () => {
    const u = await s.provider?.searchEngine?.();
    c(a).push(...u || []);
  });
  const { updateNodeData: l } = nt();
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
  }), Vt(e, Te(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = hw();
        D(u, d);
      },
      children: (u, d) => {
        var p = mw(), f = le(p), g = Z(f);
        Ee(g, {
          level: 3,
          children: (P, _) => {
            me();
            var T = $e("输入参数");
            D(P, T);
          },
          $$slots: { default: !0 }
        });
        var h = O(g, 2);
        Se(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (P, _) => {
            var T = vw();
            D(P, T);
          },
          $$slots: { default: !0 }
        }), A(f);
        var y = O(f, 2);
        ht(y, {});
        var C = O(y, 2);
        Ee(C, {
          level: 3,
          mt: "10px",
          children: (P, _) => {
            me();
            var T = $e("搜索引擎设置");
            D(P, T);
          },
          $$slots: { default: !0 }
        });
        var b = O(C, 4), L = Z(b);
        const x = /* @__PURE__ */ S(() => n().engine ? [n().engine] : []);
        dt(L, {
          get items() {
            return c(a);
          },
          style: "width: 100%",
          placeholder: "请选择搜索引擎",
          onSelect: (P) => {
            const _ = P.value;
            l(o, () => ({ engine: _ }));
          },
          get value() {
            return c(x);
          }
        }), A(b);
        var $ = O(b, 4), k = Z($);
        Ye(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (P) => {
            const _ = P.target.value;
            l(o, () => ({ keyword: _ }));
          }
        }), A($);
        var V = O($, 4), H = Z(V);
        Ye(H, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (P) => {
            const _ = P.target.value;
            l(o, () => ({ limit: _ }));
          }
        }), A(V);
        var B = O(V, 2), G = Z(B);
        Ee(G, {
          level: 3,
          mt: "10px",
          children: (P, _) => {
            me();
            var T = $e("输出参数");
            D(P, T);
          },
          $$slots: { default: !0 }
        }), A(B);
        var R = O(B, 2);
        $n(R, {}), D(u, p);
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
se(Nd, { data: {} }, [], [], !0);
var ww = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), bw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), xw = /* @__PURE__ */ Q('<div class="heading svelte-1eqcy61"><!></div> <!> <div class="heading svelte-1eqcy61"><!> <!></div> <!>', 1);
const $w = {
  hash: "svelte-1eqcy61",
  code: ".heading.svelte-1eqcy61 {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function Ld(e, t) {
  ue(t, !0), Pe(e, $w);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Me(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = We(), { addParameter: i } = It();
  return Re(() => {
    (!n().loopVars || n().loopVars.length === 0) && i(o, "loopVars", { name: "loopVar", nameDisabled: !0, deleteDisabled: !0 });
  }), Vt(e, Te(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (s) => {
        var a = ww();
        D(s, a);
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
        var l = xw(), u = le(l), d = Z(u);
        Ee(d, {
          level: 3,
          children: (C, b) => {
            me();
            var L = $e("循环变量");
            D(C, L);
          },
          $$slots: { default: !0 }
        }), A(u);
        var p = O(u, 2);
        ht(p, { dataKeyName: "loopVars" });
        var f = O(p, 2), g = Z(f);
        Ee(g, {
          level: 3,
          children: (C, b) => {
            me();
            var L = $e("输出参数");
            D(C, L);
          },
          $$slots: { default: !0 }
        });
        var h = O(g, 2);
        Se(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (C, b) => {
            var L = bw();
            D(C, L);
          },
          $$slots: { default: !0 }
        }), A(f);
        var y = O(f, 2);
        ht(y, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), D(s, l);
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
const kw = (e, t) => {
  const n = e.target.checked;
  t("required", n);
};
var Cw = /* @__PURE__ */ Q('<div class="input-more-setting svelte-2f9bnc"><div class="input-more-item svelte-2f9bnc">数据类型： <!></div> <div class="input-more-item svelte-2f9bnc">确认方式： <!></div> <div class="input-more-item svelte-2f9bnc">数据标题： <!></div> <div class="input-more-item svelte-2f9bnc">数据描述： <!></div> <label class="input-item-inline svelte-2f9bnc"><span>是否必填：</span> <input type="checkbox"/></label> <div class="input-more-item svelte-2f9bnc"><!></div></div>'), _w = /* @__PURE__ */ Q('<div class="input-item svelte-2f9bnc"><!></div> <div class="input-item svelte-2f9bnc"><!></div> <div class="input-item svelte-2f9bnc"><!></div>', 1);
const Sw = {
  hash: "svelte-2f9bnc",
  code: ".input-item.svelte-2f9bnc {display:flex;align-items:center;}.input-item-inline.svelte-2f9bnc {display:flex;align-items:center;font-size:12px;color:#666;}.input-more-setting.svelte-2f9bnc {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-2f9bnc .input-more-item:where(.svelte-2f9bnc) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Pd(e, t) {
  ue(t, !0), Pe(e, Sw);
  const n = m(t, "parameter", 7), r = m(t, "index", 7), o = m(t, "dataKeyName", 7), i = m(t, "useChildrenOnly", 7);
  let s = We(), a = bn(s), l = /* @__PURE__ */ S(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: u } = nt(), d = (w, E) => {
    u(s, (N) => {
      let z = N.data?.[o()];
      return z[r()] = { ...z[r()], [w]: E }, { [o()]: z };
    });
  }, p = (w, E) => {
    const N = E.target.value;
    d(w, N);
  }, f = (w) => {
    const E = w.value;
    d("ref", E);
  }, g = (w) => {
    const E = w.value;
    d("selectionMode", E);
  }, h = (w) => {
    const E = w.value;
    d("selectionDataType", E);
  };
  let y;
  const C = () => {
    u(s, (w) => {
      let E = w.data?.[o()];
      return E.splice(r(), 1), { [o()]: [...E] };
    }), y?.hide();
  };
  let b = wd(i());
  const L = [
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
  var $ = _w(), k = le($), V = Z(k);
  const H = /* @__PURE__ */ S(() => c(l).nameDisabled === !0);
  Ye(V, {
    style: "width: 100%;",
    get value() {
      return c(l).name;
    },
    placeholder: "请输入参数名称",
    get disabled() {
      return c(H);
    },
    oninput: (w) => p("name", w)
  }), A(k);
  var B = O(k, 2), G = Z(B);
  {
    var R = (w) => {
      Ye(w, {
        get value() {
          return c(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (E) => p("value", E)
      });
    }, P = (w, E) => {
      {
        var N = (z) => {
          const I = /* @__PURE__ */ S(() => [c(l).ref]);
          dt(z, {
            get items() {
              return b.current;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return c(I);
            },
            expandAll: !0,
            onSelect: f
          });
        };
        ae(
          w,
          (z) => {
            c(l).refType !== "input" && z(N);
          },
          E
        );
      }
    };
    ae(G, (w) => {
      c(l).refType === "fixed" ? w(R) : w(P, !1);
    });
  }
  A(B);
  var _ = O(B, 2), T = Z(_);
  return _t(
    tr(T, {
      placement: "bottom",
      floating: (w) => {
        var E = Cw(), N = Z(E), z = O(Z(N));
        const I = /* @__PURE__ */ S(() => c(l).selectionDataType ? [c(l).selectionDataType] : []);
        dt(z, {
          get items() {
            return L;
          },
          style: "width: 100%",
          defaultValue: ["text"],
          get value() {
            return c(I);
          },
          onSelect: h
        }), A(N);
        var M = O(N, 2), q = O(Z(M));
        const X = /* @__PURE__ */ S(() => c(l).selectionMode ? [c(l).selectionMode] : []);
        dt(q, {
          get items() {
            return x;
          },
          style: "width: 100%",
          defaultValue: ["single"],
          get value() {
            return c(X);
          },
          onSelect: g
        }), A(M);
        var U = O(M, 2), oe = O(Z(U));
        Ze(oe, {
          rows: 1,
          style: "width: 100%;",
          onchange: (fe) => {
            p("formLabel", fe);
          },
          get value() {
            return c(l).formLabel;
          }
        }), A(U);
        var W = O(U, 2), F = O(Z(W));
        Ze(F, {
          rows: 2,
          style: "width: 100%;",
          onchange: (fe) => {
            p("formDescription", fe);
          },
          get value() {
            return c(l).formDescription;
          }
        }), A(W);
        var J = O(W, 2), ee = O(Z(J), 2);
        Wt(ee), Ki(ee, !1), ee.__change = [kw, d], A(J);
        var Y = O(J, 2), ve = Z(Y);
        Se(ve, {
          onclick: C,
          children: (fe, re) => {
            me();
            var te = $e("删除");
            D(fe, te);
          },
          $$slots: { default: !0 }
        }), A(Y), A(E), D(w, E);
      },
      children: (w, E) => {
        ho(w, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (w) => y = w,
    () => y
  ), A(_), D(e, $), ce({
    get parameter() {
      return n();
    },
    set parameter(w) {
      n(w), v();
    },
    get index() {
      return r();
    },
    set index(w) {
      r(w), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(w) {
      o(w), v();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(w) {
      i(w), v();
    }
  });
}
yn(["change"]);
se(
  Pd,
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
var Ew = /* @__PURE__ */ Q('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Nw = /* @__PURE__ */ Q('<div class="none-params svelte-1sm1mgi"> </div>'), Lw = /* @__PURE__ */ Q('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Pw = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Vd(e, t) {
  ue(t, !0), Pe(e, Pw);
  const n = m(t, "noneParameterText", 7, "无确认数据"), r = m(t, "dataKeyName", 7, "parameters"), o = m(t, "useChildrenOnly", 7);
  let i = We(), s = bn(i), a = /* @__PURE__ */ S(() => [...s?.current?.data?.[r()] || []]);
  var l = Lw(), u = Z(l);
  {
    var d = (f) => {
      var g = Ew();
      me(4), D(f, g);
    };
    ae(u, (f) => {
      c(a).length !== 0 && f(d);
    });
  }
  var p = O(u, 2);
  return st(
    p,
    19,
    () => c(a),
    (f) => f.id,
    (f, g, h) => {
      Pd(f, {
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
      var g = Nw(), h = Z(g, !0);
      A(g), xe(() => He(h, n())), D(f, g);
    }
  ), A(l), D(e, l), ce({
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
se(Vd, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
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
var Vw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Dw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Mw = /* @__PURE__ */ Q('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">消息内容</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const zw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Dd(e, t) {
  ue(t, !0), Pe(e, zw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Me(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = We(), { addParameter: i } = It(), { updateNodeData: s } = nt();
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
        dataType: l.selectionMode === "multiple" ? "Array" : "String",
        addChildDisabled: !0
      }));
      os(a, n().outputDefs) || s(o, () => ({ outputDefs: a }));
    }
  }), Vt(e, Te(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var l = Vw();
        D(a, l);
      },
      children: (a, l) => {
        var u = Mw(), d = le(u), p = Z(d);
        Ee(p, {
          level: 3,
          children: (k, V) => {
            me();
            var H = $e("确认数据");
            D(k, H);
          },
          $$slots: { default: !0 }
        });
        var f = O(p, 2);
        Se(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "confirms");
          },
          children: (k, V) => {
            var H = Dw();
            D(k, H);
          },
          $$slots: { default: !0 }
        }), A(d);
        var g = O(d, 2);
        Vd(g, { dataKeyName: "confirms", noneParameterText: "无确认数据" });
        var h = O(g, 2);
        Ee(h, {
          level: 3,
          mt: "10px",
          children: (k, V) => {
            me();
            var H = $e("确认消息");
            D(k, H);
          },
          $$slots: { default: !0 }
        });
        var y = O(h, 4), C = Z(y);
        const b = /* @__PURE__ */ S(() => n().message || "");
        Ze(C, {
          rows: 5,
          placeholder: "请输入用户需要确认的消息内容",
          style: "width: 100%",
          onchange: (k) => {
            s(o, () => ({ message: k.target.value }));
          },
          get value() {
            return c(b);
          }
        }), A(y);
        var L = O(y, 2), x = Z(L);
        Ee(x, {
          level: 3,
          mt: "10px",
          children: (k, V) => {
            me();
            var H = $e("输出参数");
            D(k, H);
          },
          $$slots: { default: !0 }
        }), A(L);
        var $ = O(L, 2);
        $n($, { placeholder: "" }), D(a, u);
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
const Ow = {
  startNode: vd,
  codeNode: Cd,
  confirmNode: Dd,
  llmNode: kd,
  templateNode: _d,
  httpNode: Sd,
  knowledgeNode: Ed,
  searchEngineNode: Nd,
  loopNode: Ld,
  endNode: xd
};
var Hw = /* @__PURE__ */ Q("<!> ", 1);
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
      var u = Hw(), d = le(u);
      Ns(d, n);
      var p = O(d);
      xe(() => He(p, ` ${r() ?? ""}`)), D(a, u);
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
var Tw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), Aw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), Iw = /* @__PURE__ */ Q('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Md(e, t) {
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
  ], s = [], a = zn(), l = a.customNodes;
  if (l) {
    const b = Object.keys(l).sort((L, x) => (l[L].sortNo || 0) - (l[x].sortNo || 0));
    for (let L of b)
      l[L].group === "base" ? o.push({ type: L, ...l[L] }) : s.push({
        icon: l[L].icon,
        title: l[L].title,
        type: L
      });
    o.sort((L, x) => (L.sortNo || 0) - (x.sortNo || 0));
  }
  if (a.hiddenNodes) {
    const b = typeof a.hiddenNodes == "function" ? a.hiddenNodes() : a.hiddenNodes;
    if (Array.isArray(b)) {
      for (let L of b)
        for (let x = 0; x < o.length; x++)
          if (o[x].type === L) {
            o.splice(x, 1);
            break;
          }
    }
  }
  var u = Iw(), d = Z(u), p = Z(d), f = Z(p);
  Qc(f, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (b) => {
      j(n, b.value.toString(), !0);
    }
  }), A(p);
  var g = O(p, 2), h = Z(g);
  st(h, 21, () => o, pr, (b, L) => {
    is(b, Te(() => c(L)));
  }), A(h);
  var y = O(h, 2);
  st(y, 21, () => s, pr, (b, L) => {
    is(b, Te(() => c(L)));
  }), A(y), A(g), A(d);
  var C = O(d, 2);
  Se(C, {
    onclick: () => {
      j(r, c(r) ? "" : "show", !0);
    },
    children: (b, L) => {
      var x = Le(), $ = le(x);
      {
        var k = (H) => {
          var B = Tw();
          D(H, B);
        }, V = (H) => {
          var B = Aw();
          D(H, B);
        };
        ae($, (H) => {
          c(r) === "show" ? H(k) : H(V, !1);
        });
      }
      D(b, x);
    },
    $$slots: { default: !0 }
  }), A(u), xe(() => {
    yt(u, 1, `tf-toolbar ${c(r) ?? ""}`), ft(h, `display: ${c(n) === "base" ? "flex" : "none"}`), ft(y, `display: ${c(n) !== "base" ? "flex" : "none"}`);
  }), D(e, u), ce();
}
se(Md, {}, [], [], !0);
const Zw = () => ({ getNode: (e) => Ie.getNode(e) }), Bw = () => ({ ensureParentInNodesBefore: (e, t) => {
  Ie.updateNodes((n) => {
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
} }), qw = () => ({ getEdgesByTarget: (e) => Ie.getEdges().filter((t) => t.target === e) });
var Kw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Rw = /* @__PURE__ */ Q('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), jw = /* @__PURE__ */ Q('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Ww = /* @__PURE__ */ Q('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Xw = /* @__PURE__ */ Q('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input/></div></div>', 1), Yw = /* @__PURE__ */ Q('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Fw = /* @__PURE__ */ Q('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Jw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Uw = /* @__PURE__ */ Q('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Gw = /* @__PURE__ */ Q("<!> <!> <div></div> <!>", 1);
const Qw = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function zd(e, t) {
  ue(t, !0), Pe(e, Qw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Me(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = We(), { addParameter: i } = It(), s = nt(), { updateNodeData: a } = s, l = (C) => {
    a(o, C);
  }, u = (C, b) => {
    l({ [C]: b.target?.value });
  }, d = { ...r, id: o, data: n() }, p = document.createElement("div"), f = zn().customNodes[t.type];
  f.render?.(p, d, s);
  const g = f.forms;
  let h;
  Re(() => {
    n().expand && h && h.append(p);
  }), Re(() => {
    n() && f.onUpdate?.(p, { ...d, data: n() });
  }), Re(() => {
    !n().parameters && f.parameters && l({
      parameters: Jr(JSON.parse(JSON.stringify(f.parameters)))
    });
  }), Re(() => {
    !n().outputDefs && f.outputDefs && l({
      outputDefs: Jr(JSON.parse(JSON.stringify(f.outputDefs)))
    });
  });
  const y = /* @__PURE__ */ S(() => ({ ...n(), description: f.description }));
  return Vt(e, Te(
    {
      get data() {
        return c(y);
      }
    },
    () => r,
    {
      icon: (C) => {
        var b = Le(), L = le(b);
        Ns(L, () => f.icon), D(C, b);
      },
      children: (C, b) => {
        var L = Gw(), x = le(L);
        {
          var $ = (R) => {
            var P = Rw(), _ = le(P), T = Z(_);
            Ee(T, {
              level: 3,
              children: (z, I) => {
                me();
                var M = $e("输入参数");
                D(z, M);
              },
              $$slots: { default: !0 }
            });
            var w = O(T, 2);
            {
              var E = (z) => {
                Se(z, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    i(o);
                  },
                  children: (I, M) => {
                    var q = Kw();
                    D(I, q);
                  },
                  $$slots: { default: !0 }
                });
              };
              ae(w, (z) => {
                f.parametersAddEnable !== !1 && z(E);
              });
            }
            A(_);
            var N = O(_, 2);
            ht(N, {}), D(R, P);
          };
          ae(x, (R) => {
            f.parametersEnable !== !1 && R($);
          });
        }
        var k = O(x, 2);
        {
          var V = (R) => {
            var P = Le(), _ = le(P);
            st(_, 17, () => g, pr, (T, w) => {
              var E = Le(), N = le(E);
              {
                var z = (M) => {
                  var q = jw(), X = le(q), U = Z(X, !0);
                  A(X);
                  var oe = O(X, 2), W = Z(oe);
                  const F = /* @__PURE__ */ S(() => n()[c(w).name] || c(w).defaultValue);
                  Ye(W, Te(
                    {
                      get placeholder() {
                        return c(w).placeholder;
                      },
                      style: "width: 100%",
                      get value() {
                        return c(F);
                      }
                    },
                    () => c(w).attrs,
                    {
                      onchange: (J) => {
                        u(c(w).name, J);
                      }
                    }
                  )), A(oe), xe(() => He(U, c(w).label)), D(M, q);
                }, I = (M, q) => {
                  {
                    var X = (oe) => {
                      var W = Ww(), F = le(W), J = Z(F, !0);
                      A(F);
                      var ee = O(F, 2), Y = Z(ee);
                      const ve = /* @__PURE__ */ S(() => n()[c(w).name] || c(w).defaultValue);
                      Ze(Y, Te(
                        {
                          rows: 3,
                          get placeholder() {
                            return c(w).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return c(ve);
                          }
                        },
                        () => c(w).attrs,
                        {
                          onchange: (fe) => {
                            u(c(w).name, fe);
                          }
                        }
                      )), A(ee), xe(() => He(J, c(w).label)), D(oe, W);
                    }, U = (oe, W) => {
                      {
                        var F = (ee) => {
                          var Y = Xw(), ve = le(Y), fe = Z(ve, !0);
                          A(ve);
                          var re = O(ve, 2), te = Z(re), de = Z(te), ne = Z(de);
                          A(de);
                          var he = O(de, 2);
                          Wt(he);
                          var ie = (ke) => l({ [c(w).name]: parseFloat(ke.target.value) });
                          Je(
                            he,
                            () => ({
                              class: "nodrag",
                              type: "range",
                              ...c(w).attrs,
                              value: n()[c(w).name] ?? c(w).defaultValue,
                              oninput: ie
                            }),
                            void 0,
                            "svelte-q0cqsa"
                          ), A(te), A(re), xe(() => {
                            He(fe, c(w).label), He(ne, `${c(w).description ?? ""}: ${n()[c(w).name] ?? c(w).defaultValue ?? ""}`);
                          }), D(ee, Y);
                        }, J = (ee, Y) => {
                          {
                            var ve = (re) => {
                              var te = Yw(), de = le(te), ne = Z(de, !0);
                              A(de);
                              var he = O(de, 2), ie = Z(he);
                              const ke = /* @__PURE__ */ S(() => c(w).options || []), K = /* @__PURE__ */ S(() => n()[c(w).name] ? [n()[c(w).name]] : [c(w).defaultValue]);
                              dt(ie, {
                                get items() {
                                  return c(ke);
                                },
                                style: "width: 100%",
                                get placeholder() {
                                  return c(w).placeholder;
                                },
                                onSelect: (Ue) => {
                                  const Ve = Ue.value;
                                  l({ [c(w).name]: Ve });
                                },
                                get value() {
                                  return c(K);
                                }
                              }), A(he), xe(() => He(ne, c(w).label)), D(re, te);
                            }, fe = (re, te) => {
                              {
                                var de = (he) => {
                                  var ie = Fw(), ke = le(ie), K = Z(ke, !0);
                                  A(ke);
                                  var Ue = O(ke, 2), Ve = Z(Ue);
                                  const ze = /* @__PURE__ */ S(() => c(w).chosen?.buttonText);
                                  Gc(Ve, {
                                    style: "width: 100%",
                                    get placeholder() {
                                      return c(w).placeholder;
                                    },
                                    get buttonText() {
                                      return c(ze);
                                    },
                                    onChosen: (Ge, Be, qe) => {
                                      c(w).chosen?.onChosen?.(l, Ge, Be, qe);
                                    },
                                    get value() {
                                      return n()[c(w).chosen?.valueDataKey || ""];
                                    },
                                    get label() {
                                      return n()[c(w).chosen?.labelDataKey || ""];
                                    }
                                  }), A(Ue), xe(() => He(K, c(w).label)), D(he, ie);
                                }, ne = (he, ie) => {
                                  {
                                    var ke = (K) => {
                                      Ee(K, Te({ level: 3, mt: "10px" }, () => c(w).attrs, {
                                        children: (Ue, Ve) => {
                                          me();
                                          var ze = $e();
                                          xe(() => He(ze, c(w).label)), D(Ue, ze);
                                        },
                                        $$slots: { default: !0 }
                                      }));
                                    };
                                    ae(
                                      he,
                                      (K) => {
                                        c(w).type === "heading" && K(ke);
                                      },
                                      ie
                                    );
                                  }
                                };
                                ae(
                                  re,
                                  (he) => {
                                    c(w).type === "chosen" ? he(de) : he(ne, !1);
                                  },
                                  te
                                );
                              }
                            };
                            ae(
                              ee,
                              (re) => {
                                c(w).type === "select" ? re(ve) : re(fe, !1);
                              },
                              Y
                            );
                          }
                        };
                        ae(
                          oe,
                          (ee) => {
                            c(w).type === "slider" ? ee(F) : ee(J, !1);
                          },
                          W
                        );
                      }
                    };
                    ae(
                      M,
                      (oe) => {
                        c(w).type === "textarea" ? oe(X) : oe(U, !1);
                      },
                      q
                    );
                  }
                };
                ae(N, (M) => {
                  c(w).type === "input" ? M(z) : M(I, !1);
                });
              }
              D(T, E);
            }), D(R, P);
          };
          ae(k, (R) => {
            g && R(V);
          });
        }
        var H = O(k, 2);
        _t(H, (R) => h = R, () => h);
        var B = O(H, 2);
        {
          var G = (R) => {
            var P = Uw(), _ = le(P), T = Z(_);
            Ee(T, {
              level: 3,
              mt: "10px",
              children: (z, I) => {
                me();
                var M = $e("输出参数");
                D(z, M);
              },
              $$slots: { default: !0 }
            });
            var w = O(T, 2);
            {
              var E = (z) => {
                Se(z, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    i(o, "outputDefs");
                  },
                  children: (I, M) => {
                    var q = Jw();
                    D(I, q);
                  },
                  $$slots: { default: !0 }
                });
              };
              ae(w, (z) => {
                f.outputDefsAddEnable !== !1 && z(E);
              });
            }
            A(_);
            var N = O(_, 2);
            $n(N, {}), D(R, P);
          };
          ae(B, (R) => {
            f.outputDefsEnable !== !1 && R(G);
          });
        }
        xe(() => {
          ft(H, f.rootStyle || ""), yt(H, 1, wn(f.rootClass), "svelte-q0cqsa");
        }), D(C, L);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(C) {
      n(C), v();
    }
  });
}
se(zd, { data: {} }, [], [], !0);
const e7 = () => ({ updateEdgeData: (e, t, n) => {
  const r = Ie.getEdge(e);
  if (!r)
    return;
  const o = typeof t == "function" ? t(r) : t;
  r.data = n?.replace ? o : { ...r.data, ...o }, Ie.updateEdges((i) => i.map((s) => s.id === e ? r : s));
} }), t7 = () => ({ deleteEdge: (e) => {
  Ie.removeEdge(e);
} });
var n7 = /* @__PURE__ */ Q('<div class="panel-content svelte-80qc4q"><div>边属性设置</div> <div class="setting-title svelte-80qc4q">边条件设置</div> <div class="setting-item svelte-80qc4q"><!></div> <div class="setting-item svelte-80qc4q" style="padding: 8px 0"><!> <!></div></div>'), r7 = /* @__PURE__ */ Q("<!> <!> <!> <!>", 1), o7 = /* @__PURE__ */ Q('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const i7 = {
  hash: "svelte-80qc4q",
  code: ".panel-content.svelte-80qc4q {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-80qc4q {margin:10px 0;font-size:12px;color:#999;}.setting-item.svelte-80qc4q {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function Od(e, t) {
  ue(t, !0), Pe(e, i7);
  const n = m(t, "onInit", 7), r = nt();
  n()(r);
  let o = /* @__PURE__ */ Ce(!1), i = /* @__PURE__ */ Ce(null);
  const { updateEdgeData: s } = e7(), a = (N) => {
    N.preventDefault(), N.dataTransfer && (N.dataTransfer.dropEffect = "move");
  }, l = (N) => {
    N.preventDefault();
    const z = r.screenToFlowPosition({ x: N.clientX - 250, y: N.clientY - 100 }), I = N.dataTransfer?.getData("application/tinyflow");
    if (!I)
      return;
    const M = JSON.parse(I), q = { id: `node_${Gn()}`, position: z, data: {}, ...M };
    Ie.addNode(q), Ie.selectNodeOnly(q.id);
  }, { getNode: u } = Zw(), d = (N) => {
    const z = u(N.source), I = u(N.target);
    if (N.sourceHandle === "loop_handle" || z.parentId) {
      const M = r.getEdges();
      for (let q of M)
        if (q.target === N.target) {
          const X = u(q.source);
          if (N.sourceHandle === "loop_handle" && X.parentId !== z.id || z.parentId && X.parentId !== z.parentId)
            return !1;
        }
    }
    return !(!z.parentId && I.parentId && I.parentId !== z.id);
  }, { ensureParentInNodesBefore: p } = Bw(), f = (N, z) => {
    if (!z.isValid)
      return;
    const I = z.toNode;
    if (I.parentId)
      return;
    const M = z.fromNode, q = z.fromHandle, X = { position: { ...I.position } };
    if (q.id === "loop_handle" ? X.parentId = M.id : M.parentId && (X.parentId = M.parentId), X.parentId) {
      const U = u(X.parentId);
      X.position = {
        x: I.position.x - U.position.x,
        y: I.position.y - U.position.y
      }, p(X.parentId, I.id), r.updateNode(I.id, X);
    }
    setTimeout(() => {
      Ie.getEdges().forEach((U) => {
        U.target === I.id && U.source == M.id && (j(o, !0), j(i, U, !0));
      });
    });
  }, { getEdgesByTarget: g } = qw(), h = (N) => {
    N.edges.forEach((z) => {
      z.id === c(i)?.id && (j(i, null), j(o, !1));
      const I = u(z.target);
      if (I && I.parentId) {
        const M = g(z.target), q = u(I.parentId);
        if (M.length === 0)
          r.updateNode(I.id, {
            parentId: void 0,
            position: {
              x: I.position.x + q.position.x,
              y: I.position.y + q.position.y
            }
          });
        else {
          let X = !1;
          for (let U = 0; U < M.length; U++) {
            const oe = M[U], W = u(oe.source);
            if (W.parentId || W.type === "loopNode") {
              X = !0;
              break;
            }
          }
          X || r.updateNode(I.id, {
            parentId: void 0,
            position: {
              x: I.position.x + q.position.x,
              y: I.position.y + q.position.y
            }
          });
        }
      }
    });
  }, { deleteEdge: y } = t7(), C = (N, z) => {
  }, b = (N) => {
  }, L = {
    // ...nodeTypes
  }, x = zn().customNodes;
  if (x)
    for (let N of Object.keys(x))
      L[N] = zd;
  const $ = zn().onDataChange;
  Re(() => {
    $?.({
      nodes: Ie.getNodes(),
      edges: Ie.getEdges(),
      viewport: Ie.getViewport()
    });
  });
  var k = o7(), V = Z(k);
  const H = /* @__PURE__ */ S(() => ({ ...Ow, ...L }));
  var B = Ie.getNodes, G = Ie.setNodes, R = Ie.getEdges, P = Ie.setEdges, _ = Ie.getViewport, T = Ie.setViewport;
  const w = /* @__PURE__ */ S(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: jr.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  Tc(V, {
    get nodeTypes() {
      return c(H);
    },
    get nodes() {
      return B();
    },
    set nodes(N) {
      G(N);
    },
    get edges() {
      return R();
    },
    set edges(N) {
      P(N);
    },
    get viewport() {
      return _();
    },
    set viewport(N) {
      T(N);
    },
    class: "tinyflow-logo",
    ondrop: l,
    ondragover: a,
    isValidConnection: d,
    onconnectend: f,
    onconnectstart: C,
    onconnect: b,
    connectionRadius: 50,
    onedgeclick: (N) => {
      j(o, !0), j(i, N.edge, !0);
    },
    onbeforeconnect: (N) => ({ ...N, id: Gn() }),
    ondelete: h,
    onclick: (N) => {
      const z = N.target;
      z.classList.contains("svelte-flow__edge-interaction") || z.classList.contains("panel-content") || z.closest(".panel-content") || (j(o, !1), j(i, null));
    },
    get defaultEdgeOptions() {
      return c(w);
    },
    children: (N, z) => {
      var I = r7(), M = le(I);
      Xc(M, {});
      var q = O(M, 2);
      Rc(q, {});
      var X = O(q, 2);
      Fc(X, {});
      var U = O(X, 2);
      {
        var oe = (W) => {
          co(W, {
            children: (F, J) => {
              var ee = n7(), Y = O(Z(ee), 4), ve = Z(Y);
              const fe = /* @__PURE__ */ S(() => c(i)?.data?.condition);
              Ze(ve, {
                rows: 3,
                placeholder: "请输入边条件",
                style: "width: 100%",
                get value() {
                  return c(fe);
                },
                onchange: (ne) => {
                  c(i) && s(c(i).id, { condition: ne.target?.value });
                }
              }), A(Y);
              var re = O(Y, 2), te = Z(re);
              Se(te, {
                onclick: () => {
                  y(c(i)?.id), j(o, !1);
                },
                children: (ne, he) => {
                  me();
                  var ie = $e("删除");
                  D(ne, ie);
                },
                $$slots: { default: !0 }
              });
              var de = O(te, 2);
              Se(de, {
                primary: !0,
                onclick: () => {
                  j(o, !1);
                },
                children: (ne, he) => {
                  me();
                  var ie = $e("保存");
                  D(ne, ie);
                },
                $$slots: { default: !0 }
              }), A(re), A(ee), D(F, ee);
            },
            $$slots: { default: !0 }
          });
        };
        ae(U, (W) => {
          c(o) && W(oe);
        });
      }
      D(N, I);
    },
    $$slots: { default: !0 }
  });
  var E = O(V, 2);
  return Md(E, {}), A(k), D(e, k), ce({
    get onInit() {
      return n();
    },
    set onInit(N) {
      n(N), v();
    }
  });
}
se(Od, { onInit: {} }, [], [], !0);
function s7(e, t) {
  ue(t, !0);
  const n = m(t, "options", 7), r = m(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  return Ie.init(o?.nodes || [], o?.edges || []), dr("tinyflow_options", n()), Ac(e, {
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
customElements.define("tinyflow-component", se(s7, { options: {}, onInit: {} }, [], [], !1));
const u7 = /* @__PURE__ */ Td({
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
      r.value && (o = new ym({
        ...n,
        element: r.value
      }));
    }), Zd(() => {
      o && (o.destroy(), o = null);
    }), t({
      getData: () => o ? o.getData() : (console.warn("Tinyflow instance is not initialized"), null)
    }), (s, a) => (qd(), Bd("div", {
      ref_key: "divRef",
      ref: r,
      class: Rd(["tinyflow", s.className]),
      style: Kd(s.style)
    }, null, 6));
  }
});
export {
  u7 as Tinyflow
};
//# sourceMappingURL=index.js.map
