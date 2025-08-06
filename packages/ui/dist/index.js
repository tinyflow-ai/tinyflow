const Id = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Id);
const as = 1, ls = 2, pl = 4, zd = 8, Rd = 16, Bd = 1, Fd = 2, ml = 4, Kd = 8, qd = 16, yl = 1, Zd = 2, cs = "[", us = "[!", ds = "]", Kn = {}, st = Symbol(), Yd = "http://www.w3.org/1999/xhtml", Wd = "http://www.w3.org/2000/svg", Xd = "@attach", ia = !1;
var Jr = Array.isArray, jd = Array.prototype.indexOf, fs = Array.from, Oo = Object.keys, Lo = Object.defineProperty, dn = Object.getOwnPropertyDescriptor, wl = Object.getOwnPropertyDescriptors, _l = Object.prototype, Gd = Array.prototype, ei = Object.getPrototypeOf, sa = Object.isExtensible;
function Sr(e) {
  return typeof e == "function";
}
const ot = () => {
};
function Ud(e) {
  return e();
}
function Vo(e) {
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
function Qr(e, t) {
  if (Array.isArray(e))
    return e;
  if (t === void 0 || !(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const Et = 2, gs = 4, eo = 8, hs = 16, yn = 32, er = 64, vs = 128, Ct = 256, Ho = 512, St = 1024, hn = 2048, tr = 4096, fn = 8192, ti = 16384, xl = 32768, br = 65536, aa = 1 << 17, Jd = 1 << 18, bl = 1 << 19, Li = 1 << 20, ps = 1 << 21, Wt = Symbol("$state"), ms = Symbol("legacy props"), Qd = Symbol(""), Cl = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), ef = 1, ys = 3, dr = 8;
function kl(e) {
  return e === this.v;
}
function El(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Sl(e) {
  return !El(e, this.v);
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
function Nl(e, t = !1) {
  return ko(e, /* @__PURE__ */ new Map(), "", gf);
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
    if (ei(e) === _l) {
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
function ws(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let Re = null;
function la(e) {
  Re = e;
}
function Dn(e) {
  return (
    /** @type {T} */
    Pl().get(e)
  );
}
function fr(e, t) {
  return Pl().set(e, t), t;
}
function le(e, t = !1, n) {
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
function ce(e) {
  var t = (
    /** @type {ComponentContext} */
    Re
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      zl(r);
  }
  return e !== void 0 && (t.x = e), Re = t.p, e ?? /** @type {T} */
  {};
}
function ni() {
  return !Cr || Re !== null && Re.l === null;
}
function Pl(e) {
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
  if (t !== _l && t !== Gd)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Jr(e), o = /* @__PURE__ */ ke(0), i = Yn, s = (a) => {
    if (Yn === i)
      return a();
    var l = Me, c = Yn;
    Mn(null), fa(i);
    var d = a();
    return Mn(l), fa(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ ke(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && lf();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var g = /* @__PURE__ */ ke(c.value);
          return n.set(l, g), g;
        }) : W(d, c.value, !0), !0;
      },
      deleteProperty(a, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in a) {
            const f = s(() => /* @__PURE__ */ ke(st));
            n.set(l, f), Eo(o);
          }
        } else {
          if (r && typeof l == "string") {
            var d = (
              /** @type {Source<number>} */
              n.get("length")
            ), g = Number(l);
            Number.isInteger(g) && g < d.v && W(d, g);
          }
          W(c, st), Eo(o);
        }
        return !0;
      },
      get(a, l, c) {
        if (l === Wt)
          return e;
        var d = n.get(l), g = l in a;
        if (d === void 0 && (!g || dn(a, l)?.writable) && (d = s(() => {
          var h = Mt(g ? a[l] : st), v = /* @__PURE__ */ ke(h);
          return v;
        }), n.set(l, d)), d !== void 0) {
          var f = u(d);
          return f === st ? void 0 : f;
        }
        return Reflect.get(a, l, c);
      },
      getOwnPropertyDescriptor(a, l) {
        var c = Reflect.getOwnPropertyDescriptor(a, l);
        if (c && "value" in c) {
          var d = n.get(l);
          d && (c.value = u(d));
        } else if (c === void 0) {
          var g = n.get(l), f = g?.v;
          if (g !== void 0 && f !== st)
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
        if (l === Wt)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== st || Reflect.has(a, l);
        if (c !== void 0 || Pe !== null && (!d || dn(a, l)?.writable)) {
          c === void 0 && (c = s(() => {
            var f = d ? Mt(a[l]) : st, h = /* @__PURE__ */ ke(f);
            return h;
          }), n.set(l, c));
          var g = u(c);
          if (g === st)
            return !1;
        }
        return d;
      },
      set(a, l, c, d) {
        var g = n.get(l), f = l in a;
        if (r && l === "length")
          for (var h = c; h < /** @type {Source<number>} */
          g.v; h += 1) {
            var v = n.get(h + "");
            v !== void 0 ? W(v, st) : h in a && (v = s(() => /* @__PURE__ */ ke(st)), n.set(h + "", v));
          }
        if (g === void 0)
          (!f || dn(a, l)?.writable) && (g = s(() => /* @__PURE__ */ ke(void 0)), W(g, Mt(c)), n.set(l, g));
        else {
          f = g.v !== st;
          var y = s(() => Mt(c));
          W(g, y);
        }
        var k = Reflect.getOwnPropertyDescriptor(a, l);
        if (k?.set && k.set.call(d, c), !f) {
          if (r && typeof l == "string") {
            var w = (
              /** @type {Source<number>} */
              n.get("length")
            ), T = Number(l);
            Number.isInteger(T) && T >= w.v && W(w, T + 1);
          }
          Eo(o);
        }
        return !0;
      },
      ownKeys(a) {
        u(o);
        var l = Reflect.ownKeys(a).filter((g) => {
          var f = n.get(g);
          return f === void 0 || f.v !== st;
        });
        for (var [c, d] of n)
          d.v !== st && !(c in a) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        cf();
      }
    }
  );
}
function ca(e) {
  try {
    if (e !== null && typeof e == "object" && Wt in e)
      return e[Wt];
  } catch {
  }
  return e;
}
function vf(e, t) {
  return Object.is(ca(e), ca(t));
}
// @__NO_SIDE_EFFECTS__
function kr(e) {
  var t = Et | hn, n = Me !== null && (Me.f & Et) !== 0 ? (
    /** @type {Derived} */
    Me
  ) : null;
  return Pe === null || n !== null && (n.f & Ct) !== 0 ? t |= Ct : Pe.f |= bl, {
    ctx: Re,
    deps: null,
    effects: null,
    equals: kl,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      st
    ),
    wv: 0,
    parent: n ?? Pe,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function N(e) {
  const t = /* @__PURE__ */ kr(e);
  return Gl(t), t;
}
// @__NO_SIDE_EFFECTS__
function _s(e) {
  const t = /* @__PURE__ */ kr(e);
  return t.equals = Sl, t;
}
function Tl(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      yt(
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
  var t, n = Pe;
  On(pf(e));
  try {
    Tl(e), t = Ql(e);
  } finally {
    On(n);
  }
  return t;
}
function Dl(e) {
  var t = xs(e);
  if (e.equals(t) || (e.v = t, e.wv = Ul()), !An) {
    var n = (Nn || (e.f & Ct) !== 0) && e.deps !== null ? tr : St;
    Qt(e, n);
  }
}
const qn = /* @__PURE__ */ new Map();
function Xn(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: kl,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function ke(e, t) {
  const n = Xn(e);
  return Gl(n), n;
}
// @__NO_SIDE_EFFECTS__
function Al(e, t = !1, n = !0) {
  const r = Xn(e);
  return t || (r.equals = Sl), Cr && n && Re !== null && Re.l !== null && (Re.l.s ??= []).push(r), r;
}
function W(e, t, n = !1) {
  Me !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Vt || (Me.f & aa) !== 0) && ni() && (Me.f & (Et | hs | aa)) !== 0 && !gn?.includes(e) && uf();
  let r = n ? Mt(t) : t;
  return Vi(e, r);
}
function Vi(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    An ? qn.set(e, t) : qn.set(e, n), e.v = t, (e.f & Et) !== 0 && ((e.f & hn) !== 0 && xs(
      /** @type {Derived} */
      e
    ), Qt(e, (e.f & Ct) === 0 ? St : tr)), e.wv = Ul(), Ml(e, hn), ni() && Pe !== null && (Pe.f & St) !== 0 && (Pe.f & (yn | er)) === 0 && (Dt === null ? Sf([e]) : Dt.push(e));
  }
  return t;
}
function ua(e, t = 1) {
  var n = u(e), r = t === 1 ? n++ : n--;
  return W(e, n), r;
}
function Eo(e) {
  W(e, e.v + 1);
}
function Ml(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = ni(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      (a & hn) === 0 && (!r && s === Pe || (Qt(s, t), (a & (St | Ct)) !== 0 && ((a & Et) !== 0 ? Ml(
        /** @type {Derived} */
        s,
        tr
      ) : oi(
        /** @type {Effect} */
        s
      ))));
    }
}
function to(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function mf() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
let xe = !1;
function bt(e) {
  xe = e;
}
let Ee;
function lt(e) {
  if (e === null)
    throw to(), Kn;
  return Ee = e;
}
function vn() {
  return lt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ nn(Ee)
  );
}
function $(e) {
  if (xe) {
    if (/* @__PURE__ */ nn(Ee) !== null)
      throw to(), Kn;
    Ee = e;
  }
}
function ye(e = 1) {
  if (xe) {
    for (var t = e, n = Ee; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ nn(n);
    Ee = n;
  }
}
function Hi() {
  for (var e = 0, t = Ee; ; ) {
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
function Ol(e) {
  if (!e || e.nodeType !== dr)
    throw to(), Kn;
  return (
    /** @type {Comment} */
    e.data
  );
}
var ht, Ll, Vl, Hl;
function $i() {
  if (ht === void 0) {
    ht = window, Ll = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Vl = dn(t, "firstChild").get, Hl = dn(t, "nextSibling").get, sa(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), sa(n) && (n.__t = void 0);
  }
}
function pn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Ge(e) {
  return Vl.call(e);
}
// @__NO_SIDE_EFFECTS__
function nn(e) {
  return Hl.call(e);
}
function R(e, t) {
  if (!xe)
    return /* @__PURE__ */ Ge(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ge(Ee)
  );
  if (n === null)
    n = Ee.appendChild(pn());
  else if (t && n.nodeType !== ys) {
    var r = pn();
    return n?.before(r), lt(r), r;
  }
  return lt(n), n;
}
function ae(e, t) {
  if (!xe) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ge(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ nn(n) : n;
  }
  return Ee;
}
function V(e, t = 1, n = !1) {
  let r = xe ? Ee : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ nn(r);
  if (!xe)
    return r;
  if (n && r?.nodeType !== ys) {
    var i = pn();
    return r === null ? o?.after(i) : r.before(i), lt(i), i;
  }
  return lt(r), /** @type {TemplateNode} */
  r;
}
function bs(e) {
  e.textContent = "";
}
function $l(e) {
  Pe === null && Me === null && rf(), Me !== null && (Me.f & Ct) !== 0 && Pe === null && nf(), An && tf();
}
function yf(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function wn(e, t, n, r = !0) {
  var o = Pe, i = {
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
      Es(i), i.f |= xl;
    } catch (l) {
      throw yt(i), l;
    }
  else t !== null && oi(i);
  var s = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (bl | vs)) === 0;
  if (!s && r && (o !== null && yf(i, o), Me !== null && (Me.f & Et) !== 0)) {
    var a = (
      /** @type {Derived} */
      Me
    );
    (a.effects ??= []).push(i);
  }
  return i;
}
function wf() {
  return Me !== null && !Vt;
}
function Il(e) {
  const t = wn(eo, null, !1);
  return Qt(t, St), t.teardown = e, t;
}
function Ze(e) {
  if ($l(), !Me && Pe && (Pe.f & yn) !== 0) {
    var t = (
      /** @type {ComponentContext} */
      Re
    );
    (t.e ??= []).push(e);
  } else
    return zl(e);
}
function zl(e) {
  return wn(gs | ps, e, !1);
}
function Rl(e) {
  return $l(), wn(eo | ps, e, !0);
}
function Cs(e) {
  const t = wn(er, e, !0);
  return () => {
    yt(t);
  };
}
function _f(e) {
  const t = wn(er, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? gr(t, () => {
      yt(t), r(void 0);
    }) : (yt(t), r(void 0));
  });
}
function no(e) {
  return wn(gs, e, !1);
}
function ro(e) {
  return wn(eo, e, !0);
}
function be(e, t = [], n = kr) {
  const r = t.map(n);
  return $n(() => e(...r.map(u)));
}
function $n(e, t = 0) {
  var n = wn(eo | hs | t, e, !0);
  return n;
}
function Jt(e, t = !0) {
  return wn(eo | yn, e, !0, t);
}
function Bl(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = An, r = Me;
    da(!0), Mn(null);
    try {
      t.call(null);
    } finally {
      da(n), Mn(r);
    }
  }
}
function Fl(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    n.ac?.abort(Cl);
    var r = n.next;
    (n.f & er) !== 0 ? n.parent = null : yt(n, t), n = r;
  }
}
function xf(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & yn) === 0 && yt(t), t = n;
  }
}
function yt(e, t = !0) {
  var n = !1;
  (t || (e.f & Jd) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (Kl(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), Fl(e, t && !n), Io(e, 0), Qt(e, ti);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  Bl(e);
  var o = e.parent;
  o !== null && o.first !== null && ql(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function Kl(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ nn(e)
    );
    e.remove(), e = n;
  }
}
function ql(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function gr(e, t) {
  var n = [];
  ks(e, n, !0), Zl(n, () => {
    yt(e), t && t();
  });
}
function Zl(e, t) {
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
function Vr(e) {
  Yl(e, !0);
}
function Yl(e, t) {
  if ((e.f & fn) !== 0) {
    e.f ^= fn;
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & br) !== 0 || (n.f & yn) !== 0;
      Yl(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
const bf = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Hr = [], $r = [];
function Wl() {
  var e = Hr;
  Hr = [], Vo(e);
}
function Xl() {
  var e = $r;
  $r = [], Vo(e);
}
function oo(e) {
  Hr.length === 0 && queueMicrotask(Wl), Hr.push(e);
}
function Cf(e) {
  $r.length === 0 && bf(Xl), $r.push(e);
}
function kf() {
  Hr.length > 0 && Wl(), $r.length > 0 && Xl();
}
function Ef(e) {
  var t = (
    /** @type {Effect} */
    Pe
  );
  if ((t.f & xl) === 0) {
    if ((t.f & vs) === 0)
      throw e;
    t.fn(e);
  } else
    jl(e, t);
}
function jl(e, t) {
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
function da(e) {
  An = e;
}
let Or = [];
let Me = null, Vt = !1;
function Mn(e) {
  Me = e;
}
let Pe = null;
function On(e) {
  Pe = e;
}
let gn = null;
function Gl(e) {
  Me !== null && Me.f & Li && (gn === null ? gn = [e] : gn.push(e));
}
let dt = null, xt = 0, Dt = null;
function Sf(e) {
  Dt = e;
}
let $o = 1, Rr = 0, Yn = Rr;
function fa(e) {
  Yn = e;
}
let Nn = !1;
function Ul() {
  return ++$o;
}
function ri(e) {
  var t = e.f;
  if ((t & hn) !== 0)
    return !0;
  if ((t & tr) !== 0) {
    var n = e.deps, r = (t & Ct) !== 0;
    if (n !== null) {
      var o, i, s = (t & Ho) !== 0, a = r && Pe !== null && !Nn, l = n.length;
      if (s || a) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (o = 0; o < l; o++)
          i = n[o], (s || !i?.reactions?.includes(c)) && (i.reactions ??= []).push(c);
        s && (c.f ^= Ho), a && d !== null && (d.f & Ct) === 0 && (c.f ^= Ct);
      }
      for (o = 0; o < l; o++)
        if (i = n[o], ri(
          /** @type {Derived} */
          i
        ) && Dl(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!r || Pe !== null && !Nn) && Qt(e, St);
  }
  return !1;
}
function Jl(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !gn?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & Et) !== 0 ? Jl(
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
function Ql(e) {
  var t = dt, n = xt, r = Dt, o = Me, i = Nn, s = gn, a = Re, l = Vt, c = Yn, d = e.f;
  dt = /** @type {null | Value[]} */
  null, xt = 0, Dt = null, Nn = (d & Ct) !== 0 && (Vt || !Zn || Me === null), Me = (d & (yn | er)) === 0 ? e : null, gn = null, la(e.ctx), Vt = !1, Yn = ++Rr, e.f |= Li, e.ac !== null && (e.ac.abort(Cl), e.ac = null);
  try {
    var g = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (dt !== null) {
      var h;
      if (Io(e, xt), f !== null && xt > 0)
        for (f.length = xt + dt.length, h = 0; h < dt.length; h++)
          f[xt + h] = dt[h];
      else
        e.deps = f = dt;
      if (!Nn || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (d & Et) !== 0 && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (h = xt; h < f.length; h++)
          (f[h].reactions ??= []).push(e);
    } else f !== null && xt < f.length && (Io(e, xt), f.length = xt);
    if (ni() && Dt !== null && !Vt && f !== null && (e.f & (Et | tr | hn)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      Dt.length; h++)
        Jl(
          Dt[h],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (Rr++, Dt !== null && (r === null ? r = Dt : r.push(.../** @type {Source[]} */
    Dt))), g;
  } catch (v) {
    Ef(v);
  } finally {
    dt = t, xt = n, Dt = r, Me = o, Nn = i, gn = s, la(a), Vt = l, Yn = c, e.f ^= Li;
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
  (dt === null || !dt.includes(t)) && (Qt(t, tr), (t.f & (Ct | Ho)) === 0 && (t.f ^= Ho), Tl(
    /** @type {Derived} **/
    t
  ), Io(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Io(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Nf(e, n[r]);
}
function Es(e) {
  var t = e.f;
  if ((t & ti) === 0) {
    Qt(e, St);
    var n = Pe, r = Zn;
    Pe = e, Zn = !0;
    try {
      (t & hs) !== 0 ? xf(e) : Fl(e), Bl(e);
      var o = Ql(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = $o;
      var i;
      ia && df && (e.f & hn) !== 0 && e.deps;
    } finally {
      Zn = r, Pe = n;
    }
  }
}
function Pf() {
  try {
    of();
  } catch (e) {
    if (zr !== null)
      jl(e, zr);
    else
      throw e;
  }
}
function ec() {
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
      qn.clear();
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
        var o = $o;
        if (Es(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? ql(r) : r.fn = null), $o > o && (r.f & ps) !== 0)
          break;
      }
    }
    for (; n < t; n += 1)
      oi(e[n]);
  }
}
function oi(e) {
  Ir || (Ir = !0, queueMicrotask(ec));
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
    Ir = !0, ec();
  }
}
async function Af() {
  await Promise.resolve(), p();
}
function u(e) {
  var t = e.f, n = (t & Et) !== 0;
  if (Me !== null && !Vt) {
    if (!gn?.includes(e)) {
      var r = Me.deps;
      e.rv < Rr && (e.rv = Rr, dt === null && r !== null && r[xt] === e ? xt++ : dt === null ? dt = [e] : (!Nn || !dt.includes(e)) && dt.push(e));
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
  e, ri(o) && Dl(o)), An) {
    if (qn.has(e))
      return qn.get(e);
    if (n) {
      o = /** @type {Derived} */
      e;
      var s = o.v;
      return ((o.f & St) !== 0 || tc(o)) && (s = xs(o)), qn.set(o, s), s;
    }
  }
  return e.v;
}
function tc(e) {
  if (e.v === st) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (qn.has(t) || (t.f & Et) !== 0 && tc(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function nt(e) {
  var t = Vt;
  try {
    return Vt = !0, e();
  } finally {
    Vt = t;
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
      const r = wl(n);
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
function Lf(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, oo(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function Vf(e) {
  xe && /* @__PURE__ */ Ge(e) !== null && bs(e);
}
let ga = !1;
function Hf() {
  ga || (ga = !0, document.addEventListener(
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
  var t = Me, n = Pe;
  Mn(null), On(null);
  try {
    return e();
  } finally {
    Mn(t), On(n);
  }
}
const nc = /* @__PURE__ */ new Set(), zi = /* @__PURE__ */ new Set();
function Ns(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || Tr.call(t, i), !i.cancelBubble)
      return $f(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? oo(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function Ri(e, t, n, r = {}) {
  var o = Ns(t, e, n, r);
  return () => {
    e.removeEventListener(t, o, r);
  };
}
function ha(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = Ns(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Il(() => {
    t.removeEventListener(e, s, i);
  });
}
function _n(e) {
  for (var t = 0; t < e.length; t++)
    nc.add(e[t]);
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
    var c = o.indexOf(t);
    if (c === -1)
      return;
    l <= c && (s = l);
  }
  if (i = /** @type {Element} */
  o[s] || e.target, i !== t) {
    Lo(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = Me, g = Pe;
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
            if (Jr(y)) {
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
function mt(e, t) {
  var n = (
    /** @type {Effect} */
    Pe
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function U(e, t) {
  var n = (t & yl) !== 0, r = (t & Zd) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (xe)
      return mt(Ee, null), Ee;
    o === void 0 && (o = Ps(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ Ge(o)));
    var s = (
      /** @type {TemplateNode} */
      r || Ll ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ge(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      mt(a, l);
    } else
      mt(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function If(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & yl) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (xe)
      return mt(Ee, null), Ee;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Ps(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ Ge(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ Ge(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ Ge(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ Ge(l);
    }
    var c = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ge(c)
      ), g = (
        /** @type {TemplateNode} */
        c.lastChild
      );
      mt(d, g);
    } else
      mt(c, c);
    return c;
  };
}
// @__NO_SIDE_EFFECTS__
function ve(e, t) {
  return /* @__PURE__ */ If(e, t, "svg");
}
function Ce(e = "") {
  if (!xe) {
    var t = pn(e + "");
    return mt(t, t), t;
  }
  var n = Ee;
  return n.nodeType !== ys && (n.before(n = pn()), lt(n)), mt(n, n), n;
}
function Te() {
  if (xe)
    return mt(Ee, null), Ee;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = pn();
  return e.append(t, n), mt(t, n), e;
}
function M(e, t) {
  if (xe) {
    Pe.nodes_end = Ee, vn();
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
const Ff = {
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
  return e = e.toLowerCase(), Ff[e] ?? e;
}
const qf = ["touchstart", "touchmove"];
function Zf(e) {
  return qf.includes(e);
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
function He(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function rc(e, t) {
  return oc(e, t);
}
function Xf(e, t) {
  $i(), t.intro = t.intro ?? !1;
  const n = t.target, r = xe, o = Ee;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ge(n)
    ); i && (i.nodeType !== dr || /** @type {Comment} */
    i.data !== cs); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ nn(i);
    if (!i)
      throw Kn;
    bt(!0), lt(
      /** @type {Comment} */
      i
    ), vn();
    const s = oc(e, { ...t, anchor: i });
    if (Ee === null || Ee.nodeType !== dr || /** @type {Comment} */
    Ee.data !== ds)
      throw to(), Kn;
    return bt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === Kn)
      return t.recover === !1 && sf(), $i(), bs(n), bt(!1), rc(e, t);
    throw s;
  } finally {
    bt(r), lt(o);
  }
}
const rr = /* @__PURE__ */ new Map();
function oc(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
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
  l(fs(nc)), zi.add(l);
  var c = void 0, d = _f(() => {
    var g = n ?? t.appendChild(pn());
    return Jt(() => {
      if (i) {
        le({});
        var f = (
          /** @type {ComponentContext} */
          Re
        );
        f.c = i;
      }
      o && (r.$$events = o), xe && mt(
        /** @type {TemplateNode} */
        g,
        null
      ), c = e(g, r) || {}, xe && (Pe.nodes_end = Ee), i && ce();
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
  return Bi.set(c, d), c;
}
let Bi = /* @__PURE__ */ new WeakMap();
function jf(e, t) {
  const n = Bi.get(e);
  return n ? (Bi.delete(e), n(t)) : Promise.resolve();
}
function Ye(e, t, ...n) {
  var r = e, o = ot, i;
  $n(() => {
    o !== (o = t()) && (i && (yt(i), i = null), i = Jt(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, br), xe && (r = Ee);
}
function In(e) {
  Re === null && ws(), Cr && Re.l !== null ? Gf(Re).m.push(e) : Ze(() => {
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
function se(e, t, [n, r] = [0, 0]) {
  xe && n === 0 && vn();
  var o = e, i = null, s = null, a = st, l = n > 0 ? br : 0, c = !1;
  const d = (f, h = !0) => {
    c = !0, g(h, f);
  }, g = (f, h) => {
    if (a === (a = f)) return;
    let v = !1;
    if (xe && r !== -1) {
      if (n === 0) {
        const k = Ol(o);
        k === cs ? r = 0 : k === us ? r = 1 / 0 : (r = parseInt(k.substring(1)), r !== r && (r = a ? 1 / 0 : -1));
      }
      const y = r > n;
      !!a === y && (o = Hi(), lt(o), bt(!1), v = !0, r = -1);
    }
    a ? (i ? Vr(i) : h && (i = Jt(() => h(o))), s && gr(s, () => {
      s = null;
    })) : (s ? Vr(s) : h && (s = Jt(() => h(o, [n + 1, r]))), i && gr(i, () => {
      i = null;
    })), v && bt(!0);
  };
  $n(() => {
    c = !1, t(d), c || g(null, null);
  }, l), xe && (o = Ee);
}
function Uf(e, t) {
  xe && lt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ge(e)
  ), ro(() => {
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
  Zl(o, () => {
    for (var c = 0; c < i; c++) {
      var d = t[c];
      a || (r.delete(d.k), En(e, d.prev, d.next)), yt(d.e, !a);
    }
  });
}
function ct(e, t, n, r, o, i = null) {
  var s = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & pl) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      e
    );
    s = xe ? lt(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Ge(c)
    ) : c.appendChild(pn());
  }
  xe && vn();
  var d = null, g = !1, f = /* @__PURE__ */ _s(() => {
    var h = n();
    return Jr(h) ? h : h == null ? [] : fs(h);
  });
  $n(() => {
    var h = u(f), v = h.length;
    if (g && v === 0)
      return;
    g = v === 0;
    let y = !1;
    if (xe) {
      var k = Ol(s) === us;
      k !== (v === 0) && (s = Hi(), lt(s), bt(!1), y = !0);
    }
    if (xe) {
      for (var w = null, T, _ = 0; _ < v; _++) {
        if (Ee.nodeType === dr && /** @type {Comment} */
        Ee.data === ds) {
          s = /** @type {Comment} */
          Ee, y = !0, bt(!1);
          break;
        }
        var b = h[_], S = r(b, _);
        T = ic(
          Ee,
          a,
          w,
          null,
          b,
          S,
          _,
          o,
          t,
          n
        ), a.items.set(S, T), w = T;
      }
      v > 0 && lt(Hi());
    }
    xe || Qf(h, a, s, o, t, r, n), i !== null && (v === 0 ? d ? Vr(d) : d = Jt(() => i(s)) : d !== null && gr(d, () => {
      d = null;
    })), y && bt(!0), u(f);
  }), xe && (s = Ee);
}
function Qf(e, t, n, r, o, i, s) {
  var a = (o & zd) !== 0, l = (o & (as | ls)) !== 0, c = e.length, d = t.items, g = t.first, f = g, h, v = null, y, k = [], w = [], T, _, b, S;
  if (a)
    for (S = 0; S < c; S += 1)
      T = e[S], _ = i(T, S), b = d.get(_), b !== void 0 && (b.a?.measure(), (y ??= /* @__PURE__ */ new Set()).add(b));
  for (S = 0; S < c; S += 1) {
    if (T = e[S], _ = i(T, S), b = d.get(_), b === void 0) {
      var O = f ? (
        /** @type {TemplateNode} */
        f.e.nodes_start
      ) : n;
      v = ic(
        O,
        t,
        v,
        v === null ? t.first : v.next,
        T,
        _,
        S,
        r,
        o,
        s
      ), d.set(_, v), k = [], w = [], f = v.next;
      continue;
    }
    if (l && eg(b, T, S, o), (b.e.f & fn) !== 0 && (Vr(b.e), a && (b.a?.unfix(), (y ??= /* @__PURE__ */ new Set()).delete(b))), b !== f) {
      if (h !== void 0 && h.has(b)) {
        if (k.length < w.length) {
          var L = w[0], I;
          v = L.prev;
          var Y = k[0], J = k[k.length - 1];
          for (I = 0; I < k.length; I += 1)
            va(k[I], L, n);
          for (I = 0; I < w.length; I += 1)
            h.delete(w[I]);
          En(t, Y.prev, J.next), En(t, v, Y), En(t, J, L), f = L, v = J, S -= 1, k = [], w = [];
        } else
          h.delete(b), va(b, f, n), En(t, b.prev, b.next), En(t, b, v === null ? t.first : v.next), En(t, v, b), v = b;
        continue;
      }
      for (k = [], w = []; f !== null && f.k !== _; )
        (f.e.f & fn) === 0 && (h ??= /* @__PURE__ */ new Set()).add(f), w.push(f), f = f.next;
      if (f === null)
        continue;
      b = f;
    }
    k.push(b), v = b, f = b.next;
  }
  if (f !== null || h !== void 0) {
    for (var B = h === void 0 ? [] : fs(h); f !== null; )
      (f.e.f & fn) === 0 && B.push(f), f = f.next;
    var E = B.length;
    if (E > 0) {
      var D = (o & pl) !== 0 && c === 0 ? n : null;
      if (a) {
        for (S = 0; S < E; S += 1)
          B[S].a?.measure();
        for (S = 0; S < E; S += 1)
          B[S].a?.fix();
      }
      Jf(t, B, D, d);
    }
  }
  a && oo(() => {
    if (y !== void 0)
      for (b of y)
        b.a?.apply();
  }), Pe.first = t.first && t.first.e, Pe.last = v && v.e;
}
function eg(e, t, n, r) {
  (r & as) !== 0 && Vi(e.v, t), (r & ls) !== 0 ? Vi(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function ic(e, t, n, r, o, i, s, a, l, c) {
  var d = (l & as) !== 0, g = (l & Rd) === 0, f = d ? g ? /* @__PURE__ */ Al(o, !1, !1) : Xn(o) : o, h = (l & ls) === 0 ? s : Xn(s), v = {
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
    return v.e = Jt(() => a(e, f, h, c), xe), v.e.prev = n && n.e, v.e.next = r && r.e, n === null ? t.first = v : (n.next = v, n.e.next = v.e), r !== null && (r.prev = v, r.e.prev = v.e), v;
  } finally {
  }
}
function va(e, t, n) {
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
  be(() => {
    var a = (
      /** @type {Effect} */
      Pe
    );
    if (s === (s = t() ?? "")) {
      xe && vn();
      return;
    }
    if (a.nodes_start !== null && (Kl(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if (xe) {
        Ee.data;
        for (var l = vn(), c = l; l !== null && (l.nodeType !== dr || /** @type {Comment} */
        l.data !== ""); )
          c = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ nn(l);
        if (l === null)
          throw to(), Kn;
        mt(Ee, c), i = lt(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var g = Ps(d);
      if ((n || r) && (g = /** @type {Element} */
      /* @__PURE__ */ Ge(g)), mt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ge(g),
        /** @type {TemplateNode} */
        g.lastChild
      ), n || r)
        for (; /* @__PURE__ */ Ge(g); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ Ge(g)
          );
      else
        i.before(g);
    }
  });
}
function Ds(e, t, n) {
  xe && vn();
  var r = e, o, i;
  $n(() => {
    o !== (o = t()) && (i && (gr(i), i = null), o && (i = Jt(() => n(r, o))));
  }, br), xe && (r = Ee);
}
function tg(e, t, n, r, o, i) {
  let s = xe;
  xe && vn();
  var a, l, c = null;
  xe && Ee.nodeType === ef && (c = /** @type {Element} */
  Ee, vn());
  var d = (
    /** @type {TemplateNode} */
    xe ? Ee : e
  ), g;
  $n(() => {
    const f = t() || null;
    var h = f === "svg" ? Wd : null;
    f !== a && (g && (f === null ? gr(g, () => {
      g = null, l = null;
    }) : f === l ? Vr(g) : yt(g)), f && f !== l && (g = Jt(() => {
      if (c = xe ? (
        /** @type {Element} */
        c
      ) : h ? document.createElementNS(h, f) : document.createElement(f), mt(c, c), r) {
        xe && Wf(f) && c.append(document.createComment(""));
        var v = (
          /** @type {TemplateNode} */
          xe ? /* @__PURE__ */ Ge(c) : c.appendChild(pn())
        );
        xe && (v === null ? bt(!1) : lt(v)), r(c, v);
      }
      Pe.nodes_end = c, d.before(c);
    })), a = f, a && (l = a));
  }, br), s && (bt(!0), lt(d));
}
function De(e, t) {
  oo(() => {
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
function at(e, t, n) {
  no(() => {
    var r = nt(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      ro(() => {
        var s = n();
        Ss(s), o && El(i, s) && (i = s, r.update(s));
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
    n !== (n = t()) && (r && (yt(r), r = null), n && (r = Jt(() => {
      no(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function sc(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = sc(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function rg() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = sc(e)) && (r && (r += " "), r += t);
  return r;
}
function xn(e) {
  return typeof e == "object" ? rg(e) : e ?? "";
}
const pa = [...` 	
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
          (s === 0 || pa.includes(r[s - 1])) && (a === r.length || pa.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function ma(e, t = !1) {
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
      var c = 0, d = -1;
      const y = e.length;
      for (var g = 0; g < y; g++) {
        var f = e[g];
        if (a ? f === "/" && e[g - 1] === "*" && (a = !1) : i ? i === f && (i = !1) : f === "/" && e[g + 1] === "*" ? a = !0 : f === '"' || f === "'" ? i = f : f === "(" ? s++ : f === ")" && s--, !a && i === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = g;
          else if (f === ";" || g === y - 1) {
            if (d !== -1) {
              var h = _i(e.substring(c, d).trim());
              if (!l.includes(h)) {
                f !== ";" && g++;
                var v = e.substring(c, g).trim();
                n += " " + v + ";";
              }
            }
            c = g + 1, d = -1;
          }
        }
      }
    }
    return r && (n += ma(r)), o && (n += ma(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function wt(e, t, n, r, o, i) {
  var s = e.__className;
  if (xe || s !== n || s === void 0) {
    var a = og(n, r, i);
    (!xe || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
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
function ft(e, t, n, r) {
  var o = e.__style;
  if (xe || o !== t) {
    var i = ig(t, r);
    (!xe || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (xi(e, n?.[0], r[0]), xi(e, n?.[1], r[1], "important")) : xi(e, n, r));
  return r;
}
function Fi(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!Jr(t))
      return mf();
    for (var r of e.options)
      r.selected = t.includes(ya(r));
    return;
  }
  for (r of e.options) {
    var o = ya(r);
    if (vf(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function sg(e) {
  var t = new MutationObserver(() => {
    Fi(e, e.__value);
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
  }), Il(() => {
    t.disconnect();
  });
}
function ya(e) {
  return "__value" in e ? e.__value : e.value;
}
const Sn = Symbol("class"), Zt = Symbol("style"), ac = Symbol("is custom element"), lc = Symbol("is html");
function Xt(e) {
  if (xe) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          _e(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          _e(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, Cf(n), Hf();
  }
}
function So(e, t) {
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
function _e(e, t, n, r) {
  var o = si(e);
  xe && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[Qd] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && cc(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function lg(e, t, n, r, o = !1) {
  var i = si(e), s = i[ac], a = !i[lc];
  let l = xe && s;
  l && bt(!1);
  var c = t || {}, d = e.tagName === "OPTION";
  for (var g in t)
    g in n || (n[g] = null);
  n.class ? n.class = xn(n.class) : (r || n[Sn]) && (n.class = null), n[Zt] && (n.style ??= null);
  var f = cc(e);
  for (const _ in n) {
    let b = n[_];
    if (d && _ === "value" && b == null) {
      e.value = e.__value = "", c[_] = b;
      continue;
    }
    if (_ === "class") {
      var h = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      wt(e, h, b, r, t?.[Sn], n[Sn]), c[_] = b, c[Sn] = n[Sn];
      continue;
    }
    if (_ === "style") {
      ft(e, b, t?.[Zt], n[Zt]), c[_] = b, c[Zt] = n[Zt];
      continue;
    }
    var v = c[_];
    if (!(b === v && !(b === void 0 && e.hasAttribute(_)))) {
      c[_] = b;
      var y = _[0] + _[1];
      if (y !== "$$")
        if (y === "on") {
          const S = {}, O = "$$" + _;
          let L = _.slice(2);
          var k = Bf(L);
          if (zf(L) && (L = L.slice(0, -7), S.capture = !0), !k && v) {
            if (b != null) continue;
            e.removeEventListener(L, c[O], S), c[O] = null;
          }
          if (b != null)
            if (k)
              e[`__${L}`] = b, _n([L]);
            else {
              let I = function(Y) {
                c[_].call(this, Y);
              };
              c[O] = Ns(L, e, I, S);
            }
          else k && (e[`__${L}`] = void 0);
        } else if (_ === "style")
          _e(e, _, b);
        else if (_ === "autofocus")
          Lf(
            /** @type {HTMLElement} */
            e,
            !!b
          );
        else if (!s && (_ === "__value" || _ === "value" && b != null))
          e.value = e.__value = b;
        else if (_ === "selected" && d)
          ag(
            /** @type {HTMLOptionElement} */
            e,
            b
          );
        else {
          var w = _;
          a || (w = Kf(w));
          var T = w === "defaultValue" || w === "defaultChecked";
          if (b == null && !s && !T)
            if (i[_] = null, w === "value" || w === "checked") {
              let S = (
                /** @type {HTMLInputElement} */
                e
              );
              const O = t === void 0;
              if (w === "value") {
                let L = S.defaultValue;
                S.removeAttribute(w), S.defaultValue = L, S.value = S.__value = O ? L : null;
              } else {
                let L = S.defaultChecked;
                S.removeAttribute(w), S.defaultChecked = L, S.checked = O ? L : !1;
              }
            } else
              e.removeAttribute(_);
          else T || f.includes(w) && (s || typeof b != "string") ? e[w] = b : typeof b != "function" && _e(e, w, b);
        }
    }
  }
  return l && bt(!0), c;
}
function Ue(e, t, n = [], r, o = !1, i = kr) {
  const s = n.map(i);
  var a = void 0, l = {}, c = e.nodeName === "SELECT", d = !1;
  if ($n(() => {
    var f = t(...s.map(u)), h = lg(e, a, f, r, o);
    d && c && "value" in f && Fi(
      /** @type {HTMLSelectElement} */
      e,
      f.value
    );
    for (let y of Object.getOwnPropertySymbols(l))
      f[y] || yt(l[y]);
    for (let y of Object.getOwnPropertySymbols(f)) {
      var v = f[y];
      y.description === Xd && (!a || v !== a[y]) && (l[y] && yt(l[y]), l[y] = Jt(() => ng(e, () => v))), h[y] = v;
    }
    a = h;
  }), c) {
    var g = (
      /** @type {HTMLSelectElement} */
      e
    );
    no(() => {
      Fi(
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
      [ac]: e.nodeName.includes("-"),
      [lc]: e.namespaceURI === Yd
    }
  );
}
var wa = /* @__PURE__ */ new Map();
function cc(e) {
  var t = wa.get(e.nodeName);
  if (t) return t;
  wa.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = wl(r);
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
function _a(e, t, n) {
  var r = cg.observe(e, () => n(e[t]));
  no(() => (nt(() => n(e[t])), r));
}
function xa(e, t) {
  return e === t || e?.[Wt] === t;
}
function Nt(e = {}, t, n, r) {
  return no(() => {
    var o, i;
    return ro(() => {
      o = i, i = [], nt(() => {
        e !== n(...i) && (t(e, ...i), o && xa(n(...o), e) && t(null, ...o));
      });
    }), () => {
      oo(() => {
        i && xa(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function uc(e = !1) {
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
      for (const c in l)
        l[c] !== i[c] && (i[c] = l[c], a = !0);
      return a && o++, o;
    });
    r = () => u(s);
  }
  n.b.length && Rl(() => {
    ba(t, r), Vo(n.b);
  }), Ze(() => {
    const o = nt(() => n.m.map(Ud));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Ze(() => {
    ba(t, r), Vo(n.a);
  });
}
function ba(e, t) {
  if (e.l.s)
    for (const n of e.l.s) u(n);
  t();
}
let mo = !1;
function ug(e) {
  var t = mo;
  try {
    return mo = !1, [e(), mo];
  } finally {
    mo = t;
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
function Oe(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    dg
  );
}
const fg = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return u(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    if (!(t in e.special)) {
      var r = Pe;
      try {
        On(e.parent_effect), e.special[t] = m(
          {
            get [t]() {
              return e.props[t];
            }
          },
          /** @type {string} */
          t,
          ml
        );
      } finally {
        On(r);
      }
    }
    return e.special[t](n), ua(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), ua(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function Ca(e, t) {
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
        Pe
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
function $e(...e) {
  return new Proxy({ props: e }, gg);
}
function m(e, t, n, r) {
  var o = !Cr || (n & Fd) !== 0, i = (n & Kd) !== 0, s = (n & qd) !== 0, a = (
    /** @type {V} */
    r
  ), l = !0, c = () => (l && (l = !1, a = s ? nt(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (i) {
    var g = Wt in e || ms in e;
    d = dn(e, t)?.set ?? (g && t in e ? (_) => e[t] = _ : void 0);
  }
  var f, h = !1;
  i ? [f, h] = ug(() => (
    /** @type {V} */
    e[t]
  )) : f = /** @type {V} */
  e[t], f === void 0 && r !== void 0 && (f = c(), d && (o && af(), d(f)));
  var v;
  if (o ? v = () => {
    var _ = (
      /** @type {V} */
      e[t]
    );
    return _ === void 0 ? c() : (l = !0, _);
  } : v = () => {
    var _ = (
      /** @type {V} */
      e[t]
    );
    return _ !== void 0 && (a = /** @type {V} */
    void 0), _ === void 0 ? a : _;
  }, o && (n & ml) === 0)
    return v;
  if (d) {
    var y = e.$$legacy;
    return function(_, b) {
      return arguments.length > 0 ? ((!o || !b || y || h) && d(b ? v() : _), _) : v();
    };
  }
  var k = !1, w = ((n & Bd) !== 0 ? kr : _s)(() => (k = !1, v()));
  i && u(w);
  var T = (
    /** @type {Effect} */
    Pe
  );
  return function(_, b) {
    if (arguments.length > 0) {
      const S = b ? u(w) : o && i ? Mt(_) : _;
      return W(w, S), k = !0, a !== void 0 && (a = S), _;
    }
    return An && k || (T.f & ti) !== 0 ? w.v : u(w);
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
      var a = /* @__PURE__ */ Al(s, !1, !1);
      return n.set(i, a), a;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, s) {
          return u(n.get(s) ?? r(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === ms ? !0 : (u(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, a) {
          return W(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
        }
      }
    );
    this.#e = (t.hydrate ? Xf : rc)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && p(), this.#t = o.$$events;
    for (const i of Object.keys(this.#e))
      i === "$set" || i === "$destroy" || i === "$on" || Lo(this, i, {
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
let dc;
typeof HTMLElement == "function" && (dc = class extends HTMLElement {
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
          r !== "default" && (i.name = r), M(o, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, n = pg(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = No(o, r.value, this.$$p_d, "toProp"));
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
        ro(() => {
          this.$$r = !0;
          for (const r of Oo(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const o = No(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = No(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
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
    return Oo(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function No(e, t, n, r) {
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
function ie(e, t, n, r, o, i) {
  let s = class extends dc {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Oo(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return Oo(t).forEach((a) => {
    Lo(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = No(a, l, t), this.$$d[a] = l;
        var c = this.$$c;
        if (c) {
          var d = dn(c, a)?.get;
          d ? c[a] = l : c.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    Lo(s.prototype, a, {
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
  return new Po(n);
}
function Po(e) {
  this._ = e;
}
function yg(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Po.prototype = ai.prototype = {
  constructor: Po,
  on: function(e, t) {
    var n = this._, r = yg(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = wg(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = ka(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = ka(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Po(e);
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
function ka(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = mg, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var qi = "http://www.w3.org/1999/xhtml";
const Ea = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: qi,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function li(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Ea.hasOwnProperty(t) ? { space: Ea[t], local: e } : e;
}
function _g(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === qi && t.documentElement.namespaceURI === qi ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function xg(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function fc(e) {
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
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, c, d = 0; d < s; ++d)
      (l = i[d]) && (c = e.call(l, l.__data__, d, i)) && ("__data__" in l && (c.__data__ = l.__data__), a[d] = c);
  return new Pt(r, this._parents);
}
function kg(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Eg() {
  return [];
}
function gc(e) {
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
  typeof e == "function" ? e = Sg(e) : e = gc(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, c = 0; c < a; ++c)
      (l = s[c]) && (r.push(e.call(l, l.__data__, c, s)), o.push(l));
  return new Pt(r, o);
}
function hc(e) {
  return function() {
    return this.matches(e);
  };
}
function vc(e) {
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
  return this.select(e == null ? Dg : Tg(typeof e == "function" ? e : vc(e)));
}
var Mg = Array.prototype.filter;
function Og() {
  return Array.from(this.children);
}
function Lg(e) {
  return function() {
    return Mg.call(this.children, e);
  };
}
function Vg(e) {
  return this.selectAll(e == null ? Og : Lg(typeof e == "function" ? e : vc(e)));
}
function Hg(e) {
  typeof e != "function" && (e = hc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, c = 0; c < s; ++c)
      (l = i[c]) && e.call(l, l.__data__, c, i) && a.push(l);
  return new Pt(r, this._parents);
}
function pc(e) {
  return new Array(e.length);
}
function $g() {
  return new Pt(this._enter || this._groups.map(pc), this._parents);
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
function Ig(e) {
  return function() {
    return e;
  };
}
function zg(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, c = i.length; s < c; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new zo(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function Rg(e, t, n, r, o, i, s) {
  var a, l, c = /* @__PURE__ */ new Map(), d = t.length, g = i.length, f = new Array(d), h;
  for (a = 0; a < d; ++a)
    (l = t[a]) && (f[a] = h = s.call(l, l.__data__, a, t) + "", c.has(h) ? o[a] = l : c.set(h, l));
  for (a = 0; a < g; ++a)
    h = s.call(e, i[a], a, i) + "", (l = c.get(h)) ? (r[a] = l, l.__data__ = i[a], c.delete(h)) : n[a] = new zo(e, i[a]);
  for (a = 0; a < d; ++a)
    (l = t[a]) && c.get(f[a]) === l && (o[a] = l);
}
function Bg(e) {
  return e.__data__;
}
function Fg(e, t) {
  if (!arguments.length) return Array.from(this, Bg);
  var n = t ? Rg : zg, r = this._parents, o = this._groups;
  typeof e != "function" && (e = Ig(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), c = 0; c < i; ++c) {
    var d = r[c], g = o[c], f = g.length, h = Kg(e.call(d, d && d.__data__, c, r)), v = h.length, y = a[c] = new Array(v), k = s[c] = new Array(v), w = l[c] = new Array(f);
    n(d, g, y, k, w, h, t);
    for (var T = 0, _ = 0, b, S; T < v; ++T)
      if (b = y[T]) {
        for (T >= _ && (_ = T + 1); !(S = k[_]) && ++_ < v; ) ;
        b._next = S || null;
      }
  }
  return s = new Pt(s, r), s._enter = a, s._exit = l, s;
}
function Kg(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function qg() {
  return new Pt(this._exit || this._groups.map(pc), this._parents);
}
function Zg(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function Yg(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var c = n[l], d = r[l], g = c.length, f = a[l] = new Array(g), h, v = 0; v < g; ++v)
      (h = c[v] || d[v]) && (f[v] = h);
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
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), c, d = 0; d < a; ++d)
      (c = s[d]) && (l[d] = c);
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
function eh() {
  return !this.node();
}
function th(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function nh(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function rh(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function oh(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function ih(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function sh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function ah(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function lh(e, t) {
  var n = li(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? rh : nh : typeof t == "function" ? n.local ? ah : sh : n.local ? ih : oh)(n, t));
}
function mc(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function ch(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function uh(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function dh(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function fh(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? ch : typeof t == "function" ? dh : uh)(e, t, n ?? "")) : vr(this.node(), e);
}
function vr(e, t) {
  return e.style.getPropertyValue(t) || mc(e).getComputedStyle(e, null).getPropertyValue(t);
}
function gh(e) {
  return function() {
    delete this[e];
  };
}
function hh(e, t) {
  return function() {
    this[e] = t;
  };
}
function vh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function ph(e, t) {
  return arguments.length > 1 ? this.each((t == null ? gh : typeof t == "function" ? vh : hh)(e, t)) : this.node()[e];
}
function yc(e) {
  return e.trim().split(/^|\s+/);
}
function Os(e) {
  return e.classList || new wc(e);
}
function wc(e) {
  this._node = e, this._names = yc(e.getAttribute("class") || "");
}
wc.prototype = {
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
function _c(e, t) {
  for (var n = Os(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function xc(e, t) {
  for (var n = Os(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function mh(e) {
  return function() {
    _c(this, e);
  };
}
function yh(e) {
  return function() {
    xc(this, e);
  };
}
function wh(e, t) {
  return function() {
    (t.apply(this, arguments) ? _c : xc)(this, e);
  };
}
function _h(e, t) {
  var n = yc(e + "");
  if (arguments.length < 2) {
    for (var r = Os(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? wh : t ? mh : yh)(n, t));
}
function xh() {
  this.textContent = "";
}
function bh(e) {
  return function() {
    this.textContent = e;
  };
}
function Ch(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function kh(e) {
  return arguments.length ? this.each(e == null ? xh : (typeof e == "function" ? Ch : bh)(e)) : this.node().textContent;
}
function Eh() {
  this.innerHTML = "";
}
function Sh(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Nh(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Ph(e) {
  return arguments.length ? this.each(e == null ? Eh : (typeof e == "function" ? Nh : Sh)(e)) : this.node().innerHTML;
}
function Th() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Dh() {
  return this.each(Th);
}
function Ah() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Mh() {
  return this.each(Ah);
}
function Oh(e) {
  var t = typeof e == "function" ? e : fc(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Lh() {
  return null;
}
function Vh(e, t) {
  var n = typeof e == "function" ? e : fc(e), r = t == null ? Lh : typeof t == "function" ? t : Ms(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Hh() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function $h() {
  return this.each(Hh);
}
function Ih() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function zh() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Rh(e) {
  return this.select(e ? zh : Ih);
}
function Bh(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Fh(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Kh(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function qh(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Zh(e, t, n) {
  return function() {
    var r = this.__on, o, i = Fh(t);
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
function Yh(e, t, n) {
  var r = Kh(e + ""), o, i = r.length, s;
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
  for (a = t ? Zh : qh, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function bc(e, t, n) {
  var r = mc(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Wh(e, t) {
  return function() {
    return bc(this, e, t);
  };
}
function Xh(e, t) {
  return function() {
    return bc(this, e, t.apply(this, arguments));
  };
}
function jh(e, t) {
  return this.each((typeof t == "function" ? Xh : Wh)(e, t));
}
function* Gh() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Cc = [null];
function Pt(e, t) {
  this._groups = e, this._parents = t;
}
function io() {
  return new Pt([[document.documentElement]], Cc);
}
function Uh() {
  return this;
}
Pt.prototype = io.prototype = {
  constructor: Pt,
  select: Cg,
  selectAll: Ng,
  selectChild: Ag,
  selectChildren: Vg,
  filter: Hg,
  data: Fg,
  enter: $g,
  exit: qg,
  join: Zg,
  merge: Yg,
  selection: Uh,
  order: Wg,
  sort: Xg,
  call: Gg,
  nodes: Ug,
  node: Jg,
  size: Qg,
  empty: eh,
  each: th,
  attr: lh,
  style: fh,
  property: ph,
  classed: _h,
  text: kh,
  html: Ph,
  raise: Dh,
  lower: Mh,
  append: Oh,
  insert: Vh,
  remove: $h,
  clone: Rh,
  datum: Bh,
  on: Yh,
  dispatch: jh,
  [Symbol.iterator]: Gh
};
function At(e) {
  return typeof e == "string" ? new Pt([[document.querySelector(e)]], [document.documentElement]) : new Pt([[e]], Cc);
}
function Jh(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function Lt(e, t) {
  if (e = Jh(e), t === void 0 && (t = e.currentTarget), t) {
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
const Qh = { passive: !1 }, Br = { capture: !0, passive: !1 };
function bi(e) {
  e.stopImmediatePropagation();
}
function ar(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function kc(e) {
  var t = e.document.documentElement, n = At(e).on("dragstart.drag", ar, Br);
  "onselectstart" in t ? n.on("selectstart.drag", ar, Br) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Ec(e, t) {
  var n = e.document.documentElement, r = At(e).on("dragstart.drag", null);
  t && (r.on("click.drag", ar, Br), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const yo = (e) => () => e;
function Zi(e, {
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
Zi.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function e1(e) {
  return !e.ctrlKey && !e.button;
}
function t1() {
  return this.parentNode;
}
function n1(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function r1() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function o1() {
  var e = e1, t = t1, n = n1, r = r1, o = {}, i = ai("start", "drag", "end"), s = 0, a, l, c, d, g = 0;
  function f(b) {
    b.on("mousedown.drag", h).filter(r).on("touchstart.drag", k).on("touchmove.drag", w, Qh).on("touchend.drag touchcancel.drag", T).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function h(b, S) {
    if (!(d || !e.call(this, b, S))) {
      var O = _(this, t.call(this, b, S), b, S, "mouse");
      O && (At(b.view).on("mousemove.drag", v, Br).on("mouseup.drag", y, Br), kc(b.view), bi(b), c = !1, a = b.clientX, l = b.clientY, O("start", b));
    }
  }
  function v(b) {
    if (ar(b), !c) {
      var S = b.clientX - a, O = b.clientY - l;
      c = S * S + O * O > g;
    }
    o.mouse("drag", b);
  }
  function y(b) {
    At(b.view).on("mousemove.drag mouseup.drag", null), Ec(b.view, c), ar(b), o.mouse("end", b);
  }
  function k(b, S) {
    if (e.call(this, b, S)) {
      var O = b.changedTouches, L = t.call(this, b, S), I = O.length, Y, J;
      for (Y = 0; Y < I; ++Y)
        (J = _(this, L, b, S, O[Y].identifier, O[Y])) && (bi(b), J("start", b, O[Y]));
    }
  }
  function w(b) {
    var S = b.changedTouches, O = S.length, L, I;
    for (L = 0; L < O; ++L)
      (I = o[S[L].identifier]) && (ar(b), I("drag", b, S[L]));
  }
  function T(b) {
    var S = b.changedTouches, O = S.length, L, I;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), L = 0; L < O; ++L)
      (I = o[S[L].identifier]) && (bi(b), I("end", b, S[L]));
  }
  function _(b, S, O, L, I, Y) {
    var J = i.copy(), B = Lt(Y || O, S), E, D, x;
    if ((x = n.call(b, new Zi("beforestart", {
      sourceEvent: O,
      target: f,
      identifier: I,
      active: s,
      x: B[0],
      y: B[1],
      dx: 0,
      dy: 0,
      dispatch: J
    }), L)) != null)
      return E = x.x - B[0] || 0, D = x.y - B[1] || 0, function P(C, H, z) {
        var A = B, F;
        switch (C) {
          case "start":
            o[I] = P, F = s++;
            break;
          case "end":
            delete o[I], --s;
          // falls through
          case "drag":
            B = Lt(z || H, S), F = s;
            break;
        }
        J.call(
          C,
          b,
          new Zi(C, {
            sourceEvent: H,
            subject: x,
            target: f,
            identifier: I,
            active: F,
            x: B[0] + E,
            y: B[1] + D,
            dx: B[0] - A[0],
            dy: B[1] - A[1],
            dispatch: J
          }),
          L
        );
      };
  }
  return f.filter = function(b) {
    return arguments.length ? (e = typeof b == "function" ? b : yo(!!b), f) : e;
  }, f.container = function(b) {
    return arguments.length ? (t = typeof b == "function" ? b : yo(b), f) : t;
  }, f.subject = function(b) {
    return arguments.length ? (n = typeof b == "function" ? b : yo(b), f) : n;
  }, f.touchable = function(b) {
    return arguments.length ? (r = typeof b == "function" ? b : yo(!!b), f) : r;
  }, f.on = function() {
    var b = i.on.apply(i, arguments);
    return b === i ? f : b;
  }, f.clickDistance = function(b) {
    return arguments.length ? (g = (b = +b) * b, f) : Math.sqrt(g);
  }, f;
}
function Ls(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Sc(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function so() {
}
var Fr = 0.7, Ro = 1 / Fr, lr = "\\s*([+-]?\\d+)\\s*", Kr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", jt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", i1 = /^#([0-9a-f]{3,8})$/, s1 = new RegExp(`^rgb\\(${lr},${lr},${lr}\\)$`), a1 = new RegExp(`^rgb\\(${jt},${jt},${jt}\\)$`), l1 = new RegExp(`^rgba\\(${lr},${lr},${lr},${Kr}\\)$`), c1 = new RegExp(`^rgba\\(${jt},${jt},${jt},${Kr}\\)$`), u1 = new RegExp(`^hsl\\(${Kr},${jt},${jt}\\)$`), d1 = new RegExp(`^hsla\\(${Kr},${jt},${jt},${Kr}\\)$`), Sa = {
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
Ls(so, jn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Na,
  // Deprecated! Use color.formatHex.
  formatHex: Na,
  formatHex8: f1,
  formatHsl: g1,
  formatRgb: Pa,
  toString: Pa
});
function Na() {
  return this.rgb().formatHex();
}
function f1() {
  return this.rgb().formatHex8();
}
function g1() {
  return Nc(this).formatHsl();
}
function Pa() {
  return this.rgb().formatRgb();
}
function jn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = i1.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Ta(t) : n === 3 ? new vt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? wo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? wo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = s1.exec(e)) ? new vt(t[1], t[2], t[3], 1) : (t = a1.exec(e)) ? new vt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = l1.exec(e)) ? wo(t[1], t[2], t[3], t[4]) : (t = c1.exec(e)) ? wo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = u1.exec(e)) ? Ma(t[1], t[2] / 100, t[3] / 100, 1) : (t = d1.exec(e)) ? Ma(t[1], t[2] / 100, t[3] / 100, t[4]) : Sa.hasOwnProperty(e) ? Ta(Sa[e]) : e === "transparent" ? new vt(NaN, NaN, NaN, 0) : null;
}
function Ta(e) {
  return new vt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function wo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new vt(e, t, n, r);
}
function h1(e) {
  return e instanceof so || (e = jn(e)), e ? (e = e.rgb(), new vt(e.r, e.g, e.b, e.opacity)) : new vt();
}
function Yi(e, t, n, r) {
  return arguments.length === 1 ? h1(e) : new vt(e, t, n, r ?? 1);
}
function vt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Ls(vt, Yi, Sc(so, {
  brighter(e) {
    return e = e == null ? Ro : Math.pow(Ro, e), new vt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Fr : Math.pow(Fr, e), new vt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new vt(Wn(this.r), Wn(this.g), Wn(this.b), Bo(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Da,
  // Deprecated! Use color.formatHex.
  formatHex: Da,
  formatHex8: v1,
  formatRgb: Aa,
  toString: Aa
}));
function Da() {
  return `#${Fn(this.r)}${Fn(this.g)}${Fn(this.b)}`;
}
function v1() {
  return `#${Fn(this.r)}${Fn(this.g)}${Fn(this.b)}${Fn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Aa() {
  const e = Bo(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Wn(this.r)}, ${Wn(this.g)}, ${Wn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Bo(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Wn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Fn(e) {
  return e = Wn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Ma(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Ht(e, t, n, r);
}
function Nc(e) {
  if (e instanceof Ht) return new Ht(e.h, e.s, e.l, e.opacity);
  if (e instanceof so || (e = jn(e)), !e) return new Ht();
  if (e instanceof Ht) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new Ht(s, a, l, e.opacity);
}
function p1(e, t, n, r) {
  return arguments.length === 1 ? Nc(e) : new Ht(e, t, n, r ?? 1);
}
function Ht(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Ls(Ht, p1, Sc(so, {
  brighter(e) {
    return e = e == null ? Ro : Math.pow(Ro, e), new Ht(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Fr : Math.pow(Fr, e), new Ht(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new vt(
      Ci(e >= 240 ? e - 240 : e + 120, o, r),
      Ci(e, o, r),
      Ci(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Ht(Oa(this.h), _o(this.s), _o(this.l), Bo(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Bo(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Oa(this.h)}, ${_o(this.s) * 100}%, ${_o(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Oa(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function _o(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Ci(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Vs = (e) => () => e;
function m1(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function y1(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function w1(e) {
  return (e = +e) == 1 ? Pc : function(t, n) {
    return n - t ? y1(t, n, e) : Vs(isNaN(t) ? n : t);
  };
}
function Pc(e, t) {
  var n = t - e;
  return n ? m1(e, n) : Vs(isNaN(e) ? t : e);
}
const Fo = function e(t) {
  var n = w1(t);
  function r(o, i) {
    var s = n((o = Yi(o)).r, (i = Yi(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), c = Pc(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = l(d), o.opacity = c(d), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function _1(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function x1(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function b1(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = Lr(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function C1(e, t) {
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
function k1(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Lr(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var Wi = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ki = new RegExp(Wi.source, "g");
function E1(e) {
  return function() {
    return e;
  };
}
function S1(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Tc(e, t) {
  var n = Wi.lastIndex = ki.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = Wi.exec(e)) && (o = ki.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: qt(r, o) })), n = ki.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? S1(l[0].x) : E1(t) : (t = l.length, function(c) {
    for (var d = 0, g; d < t; ++d) a[(g = l[d]).i] = g.x(c);
    return a.join("");
  });
}
function Lr(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? Vs(t) : (n === "number" ? qt : n === "string" ? (r = jn(t)) ? (t = r, Fo) : Tc : t instanceof jn ? Fo : t instanceof Date ? C1 : x1(t) ? _1 : Array.isArray(t) ? b1 : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? k1 : qt)(e, t);
}
var La = 180 / Math.PI, Xi = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Dc(e, t, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * r) && (n -= e * l, r -= t * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), e * r < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * La,
    skewX: Math.atan(l) * La,
    scaleX: s,
    scaleY: a
  };
}
var xo;
function N1(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Xi : Dc(t.a, t.b, t.c, t.d, t.e, t.f);
}
function P1(e) {
  return e == null || (xo || (xo = document.createElementNS("http://www.w3.org/2000/svg", "g")), xo.setAttribute("transform", e), !(e = xo.transform.baseVal.consolidate())) ? Xi : (e = e.matrix, Dc(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Ac(e, t, n, r) {
  function o(c) {
    return c.length ? c.pop() + " " : "";
  }
  function i(c, d, g, f, h, v) {
    if (c !== g || d !== f) {
      var y = h.push("translate(", null, t, null, n);
      v.push({ i: y - 4, x: qt(c, g) }, { i: y - 2, x: qt(d, f) });
    } else (g || f) && h.push("translate(" + g + t + f + n);
  }
  function s(c, d, g, f) {
    c !== d ? (c - d > 180 ? d += 360 : d - c > 180 && (c += 360), f.push({ i: g.push(o(g) + "rotate(", null, r) - 2, x: qt(c, d) })) : d && g.push(o(g) + "rotate(" + d + r);
  }
  function a(c, d, g, f) {
    c !== d ? f.push({ i: g.push(o(g) + "skewX(", null, r) - 2, x: qt(c, d) }) : d && g.push(o(g) + "skewX(" + d + r);
  }
  function l(c, d, g, f, h, v) {
    if (c !== g || d !== f) {
      var y = h.push(o(h) + "scale(", null, ",", null, ")");
      v.push({ i: y - 4, x: qt(c, g) }, { i: y - 2, x: qt(d, f) });
    } else (g !== 1 || f !== 1) && h.push(o(h) + "scale(" + g + "," + f + ")");
  }
  return function(c, d) {
    var g = [], f = [];
    return c = e(c), d = e(d), i(c.translateX, c.translateY, d.translateX, d.translateY, g, f), s(c.rotate, d.rotate, g, f), a(c.skewX, d.skewX, g, f), l(c.scaleX, c.scaleY, d.scaleX, d.scaleY, g, f), c = d = null, function(h) {
      for (var v = -1, y = f.length, k; ++v < y; ) g[(k = f[v]).i] = k.x(h);
      return g.join("");
    };
  };
}
var T1 = Ac(N1, "px, ", "px)", "deg)"), D1 = Ac(P1, ", ", ")", ")"), A1 = 1e-12;
function Va(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function M1(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function O1(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const To = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], c = i[2], d = s[0], g = s[1], f = s[2], h = d - a, v = g - l, y = h * h + v * v, k, w;
    if (y < A1)
      w = Math.log(f / c) / t, k = function(L) {
        return [
          a + L * h,
          l + L * v,
          c * Math.exp(t * L * w)
        ];
      };
    else {
      var T = Math.sqrt(y), _ = (f * f - c * c + r * y) / (2 * c * n * T), b = (f * f - c * c - r * y) / (2 * f * n * T), S = Math.log(Math.sqrt(_ * _ + 1) - _), O = Math.log(Math.sqrt(b * b + 1) - b);
      w = (O - S) / t, k = function(L) {
        var I = L * w, Y = Va(S), J = c / (n * T) * (Y * O1(t * I + S) - M1(S));
        return [
          a + J * h,
          l + J * v,
          c * Y / Va(t * I + S)
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
var pr = 0, Dr = 0, Nr = 0, Mc = 1e3, Ko, Ar, qo = 0, Gn = 0, ci = 0, qr = typeof performance == "object" && performance.now ? performance : Date, Oc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Hs() {
  return Gn || (Oc(L1), Gn = qr.now() + ci);
}
function L1() {
  Gn = 0;
}
function Zo() {
  this._call = this._time = this._next = null;
}
Zo.prototype = Lc.prototype = {
  constructor: Zo,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Hs() : +n) + (t == null ? 0 : +t), !this._next && Ar !== this && (Ar ? Ar._next = this : Ko = this, Ar = this), this._call = e, this._time = n, ji();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ji());
  }
};
function Lc(e, t, n) {
  var r = new Zo();
  return r.restart(e, t, n), r;
}
function V1() {
  Hs(), ++pr;
  for (var e = Ko, t; e; )
    (t = Gn - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --pr;
}
function Ha() {
  Gn = (qo = qr.now()) + ci, pr = Dr = 0;
  try {
    V1();
  } finally {
    pr = 0, $1(), Gn = 0;
  }
}
function H1() {
  var e = qr.now(), t = e - qo;
  t > Mc && (ci -= t, qo = e);
}
function $1() {
  for (var e, t = Ko, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Ko = n);
  Ar = e, ji(r);
}
function ji(e) {
  if (!pr) {
    Dr && (Dr = clearTimeout(Dr));
    var t = e - Gn;
    t > 24 ? (e < 1 / 0 && (Dr = setTimeout(Ha, e - qr.now() - ci)), Nr && (Nr = clearInterval(Nr))) : (Nr || (qo = qr.now(), Nr = setInterval(H1, Mc)), pr = 1, Oc(Ha));
  }
}
function $a(e, t, n) {
  var r = new Zo();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var I1 = ai("start", "end", "cancel", "interrupt"), z1 = [], Vc = 0, Ia = 1, Gi = 2, Do = 3, za = 4, Ui = 5, Ao = 6;
function ui(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  R1(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: I1,
    tween: z1,
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
  if (n.state > Do) throw new Error("too late; already running");
  return n;
}
function zt(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function R1(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Lc(i, 0, n.time);
  function i(c) {
    n.state = Ia, n.timer.restart(s, n.delay, n.time), n.delay <= c && s(c - n.delay);
  }
  function s(c) {
    var d, g, f, h;
    if (n.state !== Ia) return l();
    for (d in r)
      if (h = r[d], h.name === n.name) {
        if (h.state === Do) return $a(s);
        h.state === za ? (h.state = Ao, h.timer.stop(), h.on.call("interrupt", e, e.__data__, h.index, h.group), delete r[d]) : +d < t && (h.state = Ao, h.timer.stop(), h.on.call("cancel", e, e.__data__, h.index, h.group), delete r[d]);
      }
    if ($a(function() {
      n.state === Do && (n.state = za, n.timer.restart(a, n.delay, n.time), a(c));
    }), n.state = Gi, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Gi) {
      for (n.state = Do, o = new Array(f = n.tween.length), d = 0, g = -1; d < f; ++d)
        (h = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++g] = h);
      o.length = g + 1;
    }
  }
  function a(c) {
    for (var d = c < n.duration ? n.ease.call(null, c / n.duration) : (n.timer.restart(l), n.state = Ui, 1), g = -1, f = o.length; ++g < f; )
      o[g].call(e, d);
    n.state === Ui && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = Ao, n.timer.stop(), delete r[t];
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
      o = r.state > Gi && r.state < Ui, r.state = Ao, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function B1(e) {
  return this.each(function() {
    Mo(this, e);
  });
}
function F1(e, t) {
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
function K1(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = rn(this, e), s = i.tween;
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
function q1(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = zt(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? F1 : K1)(n, e, t));
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
  return (typeof t == "number" ? qt : t instanceof jn ? Fo : (n = jn(t)) ? (t = n, Fo) : Tc)(e, t);
}
function Z1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Y1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function W1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function X1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function j1(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function G1(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function U1(e, t) {
  var n = li(e), r = n === "transform" ? D1 : Hc;
  return this.attrTween(e, typeof t == "function" ? (n.local ? G1 : j1)(n, r, Is(this, "attr." + e, t)) : t == null ? (n.local ? Y1 : Z1)(n) : (n.local ? X1 : W1)(n, r, t));
}
function J1(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Q1(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function ev(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Q1(e, i)), n;
  }
  return o._value = t, o;
}
function tv(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && J1(e, i)), n;
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
  typeof e != "function" && (e = hc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, c = 0; c < s; ++c)
      (l = i[c]) && e.call(l, l.__data__, c, i) && a.push(l);
  return new mn(r, this._parents, this._name, this._id);
}
function hv(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], c = n[a], d = l.length, g = s[a] = new Array(d), f, h = 0; h < d; ++h)
      (f = l[h] || c[h]) && (g[h] = f);
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
    for (var a = r[s], l = a.length, c = i[s] = new Array(l), d, g, f = 0; f < l; ++f)
      (d = a[f]) && (g = e.call(d, d.__data__, f, a)) && ("__data__" in d && (g.__data__ = d.__data__), c[f] = g, ui(c[f], t, n, f, c, zt(d, n)));
  return new mn(i, this._parents, t, n);
}
function xv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = gc(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], c = l.length, d, g = 0; g < c; ++g)
      if (d = l[g]) {
        for (var f = e.call(d, d.__data__, g, l), h, v = zt(d, n), y = 0, k = f.length; y < k; ++y)
          (h = f[y]) && ui(h, t, n, y, f, v);
        i.push(f), s.push(d);
      }
  return new mn(i, s, t, n);
}
var bv = io.prototype.constructor;
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
function $c(e) {
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
    var l = rn(this, e), c = l.on, d = l.value[i] == null ? a || (a = $c(t)) : void 0;
    (c !== n || o !== d) && (r = (n = c).copy()).on(s, o = d), l.on = r;
  };
}
function Pv(e, t, n) {
  var r = (e += "") == "transform" ? T1 : Hc;
  return t == null ? this.styleTween(e, kv(e, r)).on("end.style." + e, $c(e)) : typeof t == "function" ? this.styleTween(e, Sv(e, r, Is(this, "style." + e, t))).each(Nv(this._id, e)) : this.styleTween(e, Ev(e, r, t), n).on("end.style." + e, null);
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
function Lv(e) {
  return this.tween("text", typeof e == "function" ? Ov(Is(this, "text", e)) : Mv(e == null ? "" : e + ""));
}
function Vv(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function Hv(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && Vv(o)), t;
  }
  return r._value = e, r;
}
function $v(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, Hv(e));
}
function Iv() {
  for (var e = this._name, t = this._id, n = Ic(), r = this._groups, o = r.length, i = 0; i < o; ++i)
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
  return new mn(r, this._parents, e, n);
}
function zv() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var c = rn(this, r), d = c.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), c.on = t;
    }), o === 0 && i();
  });
}
var Rv = 0;
function mn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Ic() {
  return ++Rv;
}
var sn = io.prototype;
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
  attr: U1,
  attrTween: nv,
  style: Pv,
  styleTween: Av,
  text: Lv,
  textTween: $v,
  remove: wv,
  tween: q1,
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
var Fv = {
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
function qv(e) {
  var t, n;
  e instanceof mn ? (t = e._id, e = e._name) : (t = Ic(), (n = Fv).time = Hs(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, c = 0; c < a; ++c)
      (l = s[c]) && ui(l, e, t, c, s, n || Kv(l, t));
  return new mn(r, this._parents, e, t);
}
io.prototype.interrupt = B1;
io.prototype.transition = qv;
const bo = (e) => () => e;
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
zc.prototype = ln.prototype;
function zc(e) {
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
function Ra() {
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
function Rc() {
  var e = Yv, t = Wv, n = Gv, r = Xv, o = jv, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = To, c = ai("start", "zoom", "end"), d, g, f, h = 500, v = 150, y = 0, k = 10;
  function w(x) {
    x.property("__zoom", Ra).on("wheel.zoom", I, { passive: !1 }).on("mousedown.zoom", Y).on("dblclick.zoom", J).filter(o).on("touchstart.zoom", B).on("touchmove.zoom", E).on("touchend.zoom touchcancel.zoom", D).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  w.transform = function(x, P, C, H) {
    var z = x.selection ? x.selection() : x;
    z.property("__zoom", Ra), x !== z ? S(x, P, C, H) : z.interrupt().each(function() {
      O(this, arguments).event(H).start().zoom(null, typeof P == "function" ? P.apply(this, arguments) : P).end();
    });
  }, w.scaleBy = function(x, P, C, H) {
    w.scaleTo(x, function() {
      var z = this.__zoom.k, A = typeof P == "function" ? P.apply(this, arguments) : P;
      return z * A;
    }, C, H);
  }, w.scaleTo = function(x, P, C, H) {
    w.transform(x, function() {
      var z = t.apply(this, arguments), A = this.__zoom, F = C == null ? b(z) : typeof C == "function" ? C.apply(this, arguments) : C, Z = A.invert(F), G = typeof P == "function" ? P.apply(this, arguments) : P;
      return n(_(T(A, G), F, Z), z, s);
    }, C, H);
  }, w.translateBy = function(x, P, C, H) {
    w.transform(x, function() {
      return n(this.__zoom.translate(
        typeof P == "function" ? P.apply(this, arguments) : P,
        typeof C == "function" ? C.apply(this, arguments) : C
      ), t.apply(this, arguments), s);
    }, null, H);
  }, w.translateTo = function(x, P, C, H, z) {
    w.transform(x, function() {
      var A = t.apply(this, arguments), F = this.__zoom, Z = H == null ? b(A) : typeof H == "function" ? H.apply(this, arguments) : H;
      return n(di.translate(Z[0], Z[1]).scale(F.k).translate(
        typeof P == "function" ? -P.apply(this, arguments) : -P,
        typeof C == "function" ? -C.apply(this, arguments) : -C
      ), A, s);
    }, H, z);
  };
  function T(x, P) {
    return P = Math.max(i[0], Math.min(i[1], P)), P === x.k ? x : new ln(P, x.x, x.y);
  }
  function _(x, P, C) {
    var H = P[0] - C[0] * x.k, z = P[1] - C[1] * x.k;
    return H === x.x && z === x.y ? x : new ln(x.k, H, z);
  }
  function b(x) {
    return [(+x[0][0] + +x[1][0]) / 2, (+x[0][1] + +x[1][1]) / 2];
  }
  function S(x, P, C, H) {
    x.on("start.zoom", function() {
      O(this, arguments).event(H).start();
    }).on("interrupt.zoom end.zoom", function() {
      O(this, arguments).event(H).end();
    }).tween("zoom", function() {
      var z = this, A = arguments, F = O(z, A).event(H), Z = t.apply(z, A), G = C == null ? b(Z) : typeof C == "function" ? C.apply(z, A) : C, ne = Math.max(Z[1][0] - Z[0][0], Z[1][1] - Z[0][1]), ee = z.__zoom, Q = typeof P == "function" ? P.apply(z, A) : P, X = l(ee.invert(G).concat(ne / ee.k), Q.invert(G).concat(ne / Q.k));
      return function(j) {
        if (j === 1) j = Q;
        else {
          var q = X(j), ge = ne / q[2];
          j = new ln(ge, G[0] - q[0] * ge, G[1] - q[1] * ge);
        }
        F.zoom(null, j);
      };
    });
  }
  function O(x, P, C) {
    return !C && x.__zooming || new L(x, P);
  }
  function L(x, P) {
    this.that = x, this.args = P, this.active = 0, this.sourceEvent = null, this.extent = t.apply(x, P), this.taps = 0;
  }
  L.prototype = {
    event: function(x) {
      return x && (this.sourceEvent = x), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(x, P) {
      return this.mouse && x !== "mouse" && (this.mouse[1] = P.invert(this.mouse[0])), this.touch0 && x !== "touch" && (this.touch0[1] = P.invert(this.touch0[0])), this.touch1 && x !== "touch" && (this.touch1[1] = P.invert(this.touch1[0])), this.that.__zoom = P, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(x) {
      var P = At(this.that).datum();
      c.call(
        x,
        this.that,
        new Zv(x, {
          sourceEvent: this.sourceEvent,
          target: w,
          transform: this.that.__zoom,
          dispatch: c
        }),
        P
      );
    }
  };
  function I(x, ...P) {
    if (!e.apply(this, arguments)) return;
    var C = O(this, P).event(x), H = this.__zoom, z = Math.max(i[0], Math.min(i[1], H.k * Math.pow(2, r.apply(this, arguments)))), A = Lt(x);
    if (C.wheel)
      (C.mouse[0][0] !== A[0] || C.mouse[0][1] !== A[1]) && (C.mouse[1] = H.invert(C.mouse[0] = A)), clearTimeout(C.wheel);
    else {
      if (H.k === z) return;
      C.mouse = [A, H.invert(A)], Mo(this), C.start();
    }
    Pr(x), C.wheel = setTimeout(F, v), C.zoom("mouse", n(_(T(H, z), C.mouse[0], C.mouse[1]), C.extent, s));
    function F() {
      C.wheel = null, C.end();
    }
  }
  function Y(x, ...P) {
    if (f || !e.apply(this, arguments)) return;
    var C = x.currentTarget, H = O(this, P, !0).event(x), z = At(x.view).on("mousemove.zoom", G, !0).on("mouseup.zoom", ne, !0), A = Lt(x, C), F = x.clientX, Z = x.clientY;
    kc(x.view), Ei(x), H.mouse = [A, this.__zoom.invert(A)], Mo(this), H.start();
    function G(ee) {
      if (Pr(ee), !H.moved) {
        var Q = ee.clientX - F, X = ee.clientY - Z;
        H.moved = Q * Q + X * X > y;
      }
      H.event(ee).zoom("mouse", n(_(H.that.__zoom, H.mouse[0] = Lt(ee, C), H.mouse[1]), H.extent, s));
    }
    function ne(ee) {
      z.on("mousemove.zoom mouseup.zoom", null), Ec(ee.view, H.moved), Pr(ee), H.event(ee).end();
    }
  }
  function J(x, ...P) {
    if (e.apply(this, arguments)) {
      var C = this.__zoom, H = Lt(x.changedTouches ? x.changedTouches[0] : x, this), z = C.invert(H), A = C.k * (x.shiftKey ? 0.5 : 2), F = n(_(T(C, A), H, z), t.apply(this, P), s);
      Pr(x), a > 0 ? At(this).transition().duration(a).call(S, F, H, x) : At(this).call(w.transform, F, H, x);
    }
  }
  function B(x, ...P) {
    if (e.apply(this, arguments)) {
      var C = x.touches, H = C.length, z = O(this, P, x.changedTouches.length === H).event(x), A, F, Z, G;
      for (Ei(x), F = 0; F < H; ++F)
        Z = C[F], G = Lt(Z, this), G = [G, this.__zoom.invert(G), Z.identifier], z.touch0 ? !z.touch1 && z.touch0[2] !== G[2] && (z.touch1 = G, z.taps = 0) : (z.touch0 = G, A = !0, z.taps = 1 + !!d);
      d && (d = clearTimeout(d)), A && (z.taps < 2 && (g = G[0], d = setTimeout(function() {
        d = null;
      }, h)), Mo(this), z.start());
    }
  }
  function E(x, ...P) {
    if (this.__zooming) {
      var C = O(this, P).event(x), H = x.changedTouches, z = H.length, A, F, Z, G;
      for (Pr(x), A = 0; A < z; ++A)
        F = H[A], Z = Lt(F, this), C.touch0 && C.touch0[2] === F.identifier ? C.touch0[0] = Z : C.touch1 && C.touch1[2] === F.identifier && (C.touch1[0] = Z);
      if (F = C.that.__zoom, C.touch1) {
        var ne = C.touch0[0], ee = C.touch0[1], Q = C.touch1[0], X = C.touch1[1], j = (j = Q[0] - ne[0]) * j + (j = Q[1] - ne[1]) * j, q = (q = X[0] - ee[0]) * q + (q = X[1] - ee[1]) * q;
        F = T(F, Math.sqrt(j / q)), Z = [(ne[0] + Q[0]) / 2, (ne[1] + Q[1]) / 2], G = [(ee[0] + X[0]) / 2, (ee[1] + X[1]) / 2];
      } else if (C.touch0) Z = C.touch0[0], G = C.touch0[1];
      else return;
      C.zoom("touch", n(_(F, Z, G), C.extent, s));
    }
  }
  function D(x, ...P) {
    if (this.__zooming) {
      var C = O(this, P).event(x), H = x.changedTouches, z = H.length, A, F;
      for (Ei(x), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, h), A = 0; A < z; ++A)
        F = H[A], C.touch0 && C.touch0[2] === F.identifier ? delete C.touch0 : C.touch1 && C.touch1[2] === F.identifier && delete C.touch1;
      if (C.touch1 && !C.touch0 && (C.touch0 = C.touch1, delete C.touch1), C.touch0) C.touch0[1] = this.__zoom.invert(C.touch0[0]);
      else if (C.end(), C.taps === 2 && (F = Lt(F, this), Math.hypot(g[0] - F[0], g[1] - F[1]) < k)) {
        var Z = At(this).on("dblclick.zoom");
        Z && Z.apply(this, arguments);
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
    var x = c.on.apply(c, arguments);
    return x === c ? w : x;
  }, w.clickDistance = function(x) {
    return arguments.length ? (y = (x = +x) * x, w) : Math.sqrt(y);
  }, w.tapDistance = function(x) {
    return arguments.length ? (k = +x, w) : k;
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
], Bc = ["Enter", " ", "Escape"], Uv = {
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
var Yo;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(Yo || (Yo = {}));
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
const Ba = {
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
function Fa(e, t, n) {
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
const Fc = (e) => "id" in e && "source" in e && "target" in e, ep = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), zs = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), ao = (e, t = [0, 0]) => {
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
    const a = s ? Wo(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return fi(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return gi(n);
}, lo = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = Wo(r);
      n = fi(n, o);
    }
  }), gi(n);
}, Rs = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...co(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const c of e.values()) {
    const { measured: d, selectable: g = !0, hidden: f = !1 } = c;
    if (s && !g || f)
      continue;
    const h = d.width ?? c.width ?? c.initialWidth ?? null, v = d.height ?? c.height ?? c.initialHeight ?? null, y = Wr(a, wr(c)), k = (h ?? 0) * (v ?? 0), w = i && y > 0;
    (!c.internals.handleBounds || w || y >= k || c.dragging) && l.push(c);
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
  const a = rp(e, s), l = lo(a), c = Bs(l, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(c, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function Kc({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: c } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let g = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", Zr.error005());
    else {
      const h = a.measured.width, v = a.measured.height;
      h && v && (g = [
        [l, c],
        [l + h, c + v]
      ]);
    }
  else a && _r(s.extent) && (g = [
    [s.extent[0][0] + l, s.extent[0][1] + c],
    [s.extent[1][0] + l, s.extent[1][1] + c]
  ]);
  const f = _r(g) ? Un(t, g, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", Zr.error015()), {
    position: {
      x: f.x - l + (s.measured.width ?? 0) * d[0],
      y: f.y - c + (s.measured.height ?? 0) * d[1]
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
function qc(e, t, n) {
  const { width: r, height: o } = zn(n), { x: i, y: s } = n.internals.positionAbsolute;
  return Un(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const Ka = (e, t, n) => e < t ? yr(Math.abs(e - t), 1, t) / t : e > n ? -yr(Math.abs(e - n), 1, t) / t : 0, Zc = (e, t, n = 15, r = 40) => {
  const o = Ka(e.x, r, t.width - r) * n, i = Ka(e.y, r, t.height - r) * n;
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
  const { x: n, y: r } = zs(e) ? e.internals.positionAbsolute : ao(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, Wo = (e, t = [0, 0]) => {
  const { x: n, y: r } = zs(e) ? e.internals.positionAbsolute : ao(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, Yc = (e, t) => gi(fi(es(e), es(t))), Wr = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, qa = (e) => cn(e.width) && cn(e.height) && cn(e.x) && cn(e.y), cn = (e) => !isNaN(e) && isFinite(e), sp = (e, t) => {
}, hi = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), co = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? hi(a, s) : a;
}, Xo = ({ x: e, y: t }, [n, r, o]) => ({
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
  const { x: s, y: a } = Xo(e, [t, n, r]), { x: l, y: c } = Xo({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - l, g = i - c;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(g)
  };
}
const Bs = (e, t, n, r, o, i) => {
  const s = ap(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, c = Math.min(a, l), d = yr(c, r, o), g = e.x + e.width / 2, f = e.y + e.height / 2, h = t / 2 - g * d, v = n / 2 - f * d, y = lp(e, h, v, d, t, n), k = {
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
function Wc(e) {
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
  const { x: i, y: s } = Yt(e), a = co({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: c } = n ? hi(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: c,
    ...a
  };
}
const Xc = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), jc = (e) => e?.getRootNode?.() || window?.document, dp = ["INPUT", "SELECT", "TEXTAREA"];
function Gc(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : dp.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const Uc = (e) => "clientX" in e, Yt = (e, t) => {
  const n = Uc(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
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
      ...Xc(s)
    };
  });
};
function fp({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, c = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - e), g = Math.abs(c - t);
  return [l, c, d, g];
}
function Co(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Ya({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case we.Left:
      return [t - Co(t - r, i), n];
    case we.Right:
      return [t + Co(r - t, i), n];
    case we.Top:
      return [t, n - Co(n - o, i)];
    case we.Bottom:
      return [t, n + Co(o - n, i)];
  }
}
function Jc({ sourceX: e, sourceY: t, sourcePosition: n = we.Bottom, targetX: r, targetY: o, targetPosition: i = we.Top, curvature: s = 0.25 }) {
  const [a, l] = Ya({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [c, d] = Ya({
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
    targetControlX: c,
    targetControlY: d
  });
  return [
    `M${e},${t} C${a},${l} ${c},${d} ${r},${o}`,
    g,
    f,
    h,
    v
  ];
}
function Qc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
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
  const i = fi(Wo(e), Wo(t));
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
  return Fc(e) ? n = { ...e } : n = {
    ...e,
    id: vp(e)
  }, pp(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function eu({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = Qc({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const Wa = {
  [we.Left]: { x: -1, y: 0 },
  [we.Right]: { x: 1, y: 0 },
  [we.Top]: { x: 0, y: -1 },
  [we.Bottom]: { x: 0, y: 1 }
}, yp = ({ source: e, sourcePosition: t = we.Bottom, target: n }) => t === we.Left || t === we.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Xa = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function wp({ source: e, sourcePosition: t = we.Bottom, target: n, targetPosition: r = we.Top, center: o, offset: i, stepPosition: s }) {
  const a = Wa[t], l = Wa[r], c = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, g = yp({
    source: c,
    sourcePosition: t,
    target: d
  }), f = g.x !== 0 ? "x" : "y", h = g[f];
  let v = [], y, k;
  const w = { x: 0, y: 0 }, T = { x: 0, y: 0 }, [, , _, b] = Qc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[f] * l[f] === -1) {
    f === "x" ? (y = o.x ?? c.x + (d.x - c.x) * s, k = o.y ?? (c.y + d.y) / 2) : (y = o.x ?? (c.x + d.x) / 2, k = o.y ?? c.y + (d.y - c.y) * s);
    const O = [
      { x: y, y: c.y },
      { x: y, y: d.y }
    ], L = [
      { x: c.x, y: k },
      { x: d.x, y: k }
    ];
    a[f] === h ? v = f === "x" ? O : L : v = f === "x" ? L : O;
  } else {
    const O = [{ x: c.x, y: d.y }], L = [{ x: d.x, y: c.y }];
    if (f === "x" ? v = a.x === h ? L : O : v = a.y === h ? O : L, t === r) {
      const E = Math.abs(e[f] - n[f]);
      if (E <= i) {
        const D = Math.min(i - 1, i - E);
        a[f] === h ? w[f] = (c[f] > e[f] ? -1 : 1) * D : T[f] = (d[f] > n[f] ? -1 : 1) * D;
      }
    }
    if (t !== r) {
      const E = f === "x" ? "y" : "x", D = a[f] === l[E], x = c[E] > d[E], P = c[E] < d[E];
      (a[f] === 1 && (!D && x || D && P) || a[f] !== 1 && (!D && P || D && x)) && (v = f === "x" ? O : L);
    }
    const I = { x: c.x + w.x, y: c.y + w.y }, Y = { x: d.x + T.x, y: d.y + T.y }, J = Math.max(Math.abs(I.x - v[0].x), Math.abs(Y.x - v[0].x)), B = Math.max(Math.abs(I.y - v[0].y), Math.abs(Y.y - v[0].y));
    J >= B ? (y = (I.x + Y.x) / 2, k = v[0].y) : (y = v[0].x, k = (I.y + Y.y) / 2);
  }
  return [[
    e,
    { x: c.x + w.x, y: c.y + w.y },
    ...v,
    { x: d.x + T.x, y: d.y + T.y },
    n
  ], y, k, _, b];
}
function _p(e, t, n, r) {
  const o = Math.min(Xa(e, t) / 2, Xa(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const c = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * c},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function Fs({ sourceX: e, sourceY: t, sourcePosition: n = we.Bottom, targetX: r, targetY: o, targetPosition: i = we.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: c = 20, stepPosition: d = 0.5 }) {
  const [g, f, h, v, y] = wp({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: c,
    stepPosition: d
  });
  return [g.reduce((w, T, _) => {
    let b = "";
    return _ > 0 && _ < g.length - 1 ? b = _p(g[_ - 1], T, g[_ + 1], s) : b = `${_ === 0 ? "M" : "L"}${T.x} ${T.y}`, w += b, w;
  }, ""), f, h, v, y];
}
function ja(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function xp(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!ja(t) || !ja(n))
    return null;
  const r = t.internals.handleBounds || Ga(t.handles), o = n.internals.handleBounds || Ga(n.handles), i = Ua(r?.source ?? [], e.sourceHandle), s = Ua(
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
  const a = i?.position || we.Bottom, l = s?.position || we.Top, c = Xr(t, i, a), d = Xr(n, s, l);
  return {
    sourceX: c.x,
    sourceY: c.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function Ga(e) {
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
function Ua(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function ts(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function bp(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const c = ts(l, t);
      i.has(c) || (s.push({ id: c, color: l.color || n, ...l }), i.add(c));
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
function qs(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function Ep(e, t, n) {
  const r = qs(Ks, n);
  for (const o of e.values())
    if (o.parentId)
      Zs(o, e, t, r);
    else {
      const i = ao(o, r.nodeOrigin), s = _r(o.extent) ? o.extent : r.nodeExtent, a = Un(i, s, zn(o));
      o.internals.positionAbsolute = a;
    }
}
function Sp(e, t, n, r) {
  const o = qs(kp, r);
  let i = e.length > 0;
  const s = new Map(t), a = o?.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const l of e) {
    let c = s.get(l.id);
    if (o.checkEquality && l === c?.internals.userNode)
      t.set(l.id, c);
    else {
      const d = ao(l, o.nodeOrigin), g = _r(l.extent) ? l.extent : o.nodeExtent, f = Un(d, g, zn(l));
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
          z: tu(l, a),
          userNode: l
        }
      }, t.set(l.id, c);
    }
    (c.measured === void 0 || c.measured.width === void 0 || c.measured.height === void 0) && !c.hidden && (i = !1), l.parentId && Zs(c, t, n, r);
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
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: s } = qs(Ks, r), a = e.parentId, l = t.get(a);
  if (!l) {
    console.warn(`Parent node ${a} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  Np(e, n);
  const c = o ? 1e3 : 0, { x: d, y: g, z: f } = Pp(e, l, i, s, c), { positionAbsolute: h } = e.internals, v = d !== h.x || g !== h.y;
  (v || f !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: v ? { x: d, y: g } : h,
      z: f
    }
  });
}
function tu(e, t) {
  return (cn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function Pp(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = zn(e), l = ao(e, n), c = _r(e.extent) ? Un(l, e.extent, a) : l;
  let d = Un({ x: i + c.x, y: s + c.y }, r, a);
  e.extent === "parent" && (d = qc(d, a, t));
  const g = tu(e, o), f = t.internals.z ?? 0;
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
    const l = i.get(s.parentId)?.expandedRect ?? wr(a), c = Yc(l, s.rect);
    i.set(s.parentId, { expandedRect: c, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const c = a.internals.positionAbsolute, d = zn(a), g = a.origin ?? r, f = s.x < c.x ? Math.round(Math.abs(c.x - s.x)) : 0, h = s.y < c.y ? Math.round(Math.abs(c.y - s.y)) : 0, v = Math.max(d.width, Math.round(s.width)), y = Math.max(d.height, Math.round(s.height)), k = (v - d.width) * g[0], w = (y - d.height) * g[1];
    (f > 0 || h > 0 || k || w) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - f + k,
        y: a.position.y - h + w
      }
    }), n.get(l)?.forEach((T) => {
      e.some((_) => _.id === T.id) || o.push({
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
  const l = [], c = window.getComputedStyle(s), { m22: d } = new window.DOMMatrixReadOnly(c.transform), g = [];
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
    const v = Xc(f.nodeElement), y = h.measured.width !== v.width || h.measured.height !== v.height;
    if (!!(v.width && v.height && (y || !h.internals.handleBounds || f.force))) {
      const w = f.nodeElement.getBoundingClientRect(), T = _r(h.extent) ? h.extent : i;
      let { positionAbsolute: _ } = h.internals;
      h.parentId && h.extent === "parent" ? _ = qc(_, v, t.get(h.parentId)) : T && (_ = Un(_, T, v));
      const b = {
        ...h,
        measured: v,
        internals: {
          ...h.internals,
          positionAbsolute: _,
          handleBounds: {
            source: Za("source", f.nodeElement, w, d, h.id),
            target: Za("target", f.nodeElement, w, d, h.id)
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
function Ja(e, t, n, r, o, i) {
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
function Mp(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, c = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    Ja("source", l, d, e, o, s), Ja("target", l, c, e, i, a), t.set(r.id, r);
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
function nu(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : nu(n, t) : !1;
}
function Qa(e, t, n) {
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
function Lp(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !nu(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function Vp({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, c = { x: 0, y: 0 }, d = null, g = !1, f = null, h = !1, v = !1;
  function y({ noDragClassName: w, handleSelector: T, domNode: _, isSelectable: b, nodeId: S, nodeClickDistance: O = 0 }) {
    f = At(_);
    function L({ x: B, y: E }, D) {
      const { nodeLookup: x, nodeExtent: P, snapGrid: C, snapToGrid: H, nodeOrigin: z, onNodeDrag: A, onSelectionDrag: F, onError: Z, updateNodePositions: G } = t();
      i = { x: B, y: E };
      let ne = !1, ee = { x: 0, y: 0, x2: 0, y2: 0 };
      if (a.size > 1 && P) {
        const Q = lo(a);
        ee = es(Q);
      }
      for (const [Q, X] of a) {
        if (!x.has(Q))
          continue;
        let j = { x: B - X.distance.x, y: E - X.distance.y };
        H && (j = hi(j, C));
        let q = [
          [P[0][0], P[0][1]],
          [P[1][0], P[1][1]]
        ];
        if (a.size > 1 && P && !X.extent) {
          const { positionAbsolute: re } = X.internals, oe = re.x - ee.x + P[0][0], de = re.x + X.measured.width - ee.x2 + P[1][0], te = re.y - ee.y + P[0][1], he = re.y + X.measured.height - ee.y2 + P[1][1];
          q = [
            [oe, te],
            [de, he]
          ];
        }
        const { position: ge, positionAbsolute: fe } = Kc({
          nodeId: Q,
          nextPosition: j,
          nodeLookup: x,
          nodeExtent: q,
          nodeOrigin: z,
          onError: Z
        });
        ne = ne || X.position.x !== ge.x || X.position.y !== ge.y, X.position = ge, X.internals.positionAbsolute = fe;
      }
      if (v = v || ne, !!ne && (G(a, !0), D && (r || A || !S && F))) {
        const [Q, X] = Ni({
          nodeId: S,
          dragItems: a,
          nodeLookup: x
        });
        r?.(D, a, Q, X), A?.(D, Q, X), S || F?.(D, X);
      }
    }
    async function I() {
      if (!d)
        return;
      const { transform: B, panBy: E, autoPanSpeed: D, autoPanOnNodeDrag: x } = t();
      if (!x) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [P, C] = Zc(c, d, D);
      (P !== 0 || C !== 0) && (i.x = (i.x ?? 0) - P / B[2], i.y = (i.y ?? 0) - C / B[2], await E({ x: P, y: C }) && L(i, null)), s = requestAnimationFrame(I);
    }
    function Y(B) {
      const { nodeLookup: E, multiSelectionActive: D, nodesDraggable: x, transform: P, snapGrid: C, snapToGrid: H, selectNodesOnDrag: z, onNodeDragStart: A, onSelectionDragStart: F, unselectNodesAndEdges: Z } = t();
      g = !0, (!z || !b) && !D && S && (E.get(S)?.selected || Z()), b && z && S && e?.(S);
      const G = Si(B.sourceEvent, { transform: P, snapGrid: C, snapToGrid: H, containerBounds: d });
      if (i = G, a = Lp(E, x, G, S), a.size > 0 && (n || A || !S && F)) {
        const [ne, ee] = Ni({
          nodeId: S,
          dragItems: a,
          nodeLookup: E
        });
        n?.(B.sourceEvent, a, ne, ee), A?.(B.sourceEvent, ne, ee), S || F?.(B.sourceEvent, ee);
      }
    }
    const J = o1().clickDistance(O).on("start", (B) => {
      const { domNode: E, nodeDragThreshold: D, transform: x, snapGrid: P, snapToGrid: C } = t();
      d = E?.getBoundingClientRect() || null, h = !1, v = !1, D === 0 && Y(B), i = Si(B.sourceEvent, { transform: x, snapGrid: P, snapToGrid: C, containerBounds: d }), c = Yt(B.sourceEvent, d);
    }).on("drag", (B) => {
      const { autoPanOnNodeDrag: E, transform: D, snapGrid: x, snapToGrid: P, nodeDragThreshold: C, nodeLookup: H } = t(), z = Si(B.sourceEvent, { transform: D, snapGrid: x, snapToGrid: P, containerBounds: d });
      if ((B.sourceEvent.type === "touchmove" && B.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      S && !H.has(S)) && (h = !0), !h) {
        if (!l && E && g && (l = !0, I()), !g) {
          const A = z.xSnapped - (i.x ?? 0), F = z.ySnapped - (i.y ?? 0);
          Math.sqrt(A * A + F * F) > C && Y(B);
        }
        (i.x !== z.xSnapped || i.y !== z.ySnapped) && a && g && (c = Yt(B.sourceEvent, d), L(z, B.sourceEvent));
      }
    }).on("end", (B) => {
      if (!(!g || h) && (l = !1, g = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: E, updateNodePositions: D, onNodeDragStop: x, onSelectionDragStop: P } = t();
        if (v && (D(a, !1), v = !1), o || x || !S && P) {
          const [C, H] = Ni({
            nodeId: S,
            dragItems: a,
            nodeLookup: E,
            dragging: !1
          });
          o?.(B.sourceEvent, a, C, H), x?.(B.sourceEvent, C, H), S || P?.(B.sourceEvent, H);
        }
      }
    }).filter((B) => {
      const E = B.target;
      return !B.button && (!w || !Qa(E, `.${w}`, _)) && (!T || Qa(E, T, _));
    });
    f.call(J);
  }
  function k() {
    f?.on(".drag", null);
  }
  return {
    update: y,
    destroy: k
  };
}
function Hp(e, t, n) {
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
  const s = Hp(e, n, t + $p);
  for (const a of s) {
    const l = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const c of l) {
      if (r.nodeId === c.nodeId && r.type === c.type && r.id === c.id)
        continue;
      const { x: d, y: g } = Xr(a, c, c.position, !0), f = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(g - e.y, 2));
      f > t || (f < i ? (o = [{ ...c, x: d, y: g }], i = f) : f === i && o.push({ ...c, x: d, y: g }));
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
function ru(e, t, n, r, o, i = !1) {
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((c) => c.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...Xr(s, l, l.position, !0) } : l;
}
function ou(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function zp(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const iu = () => !0;
function Rp(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: c, autoPanOnConnect: d, flowId: g, panBy: f, cancelConnection: h, onConnectStart: v, onConnect: y, onConnectEnd: k, isValidConnection: w = iu, onReconnectEnd: T, updateConnection: _, getTransform: b, getFromHandle: S, autoPanSpeed: O, dragThreshold: L = 1 }) {
  const I = jc(e.target);
  let Y = 0, J;
  const { x: B, y: E } = Yt(e), D = I?.elementFromPoint(B, E), x = ou(i, D), P = a?.getBoundingClientRect();
  let C = !1;
  if (!P || !x)
    return;
  const H = ru(o, x, r, l, t);
  if (!H)
    return;
  let z = Yt(e, P), A = !1, F = null, Z = !1, G = null;
  function ne() {
    if (!d || !P)
      return;
    const [re, oe] = Zc(z, P, O);
    f({ x: re, y: oe }), Y = requestAnimationFrame(ne);
  }
  const ee = {
    ...H,
    nodeId: o,
    type: x,
    position: H.position
  }, Q = l.get(o);
  let j = {
    inProgress: !0,
    isValid: null,
    from: Xr(Q, ee, we.Left, !0),
    fromHandle: ee,
    fromPosition: ee.position,
    fromNode: Q,
    to: z,
    toHandle: null,
    toPosition: Ba[ee.position],
    toNode: null
  };
  function q() {
    C = !0, _(j), v?.(e, { nodeId: o, handleId: r, handleType: x });
  }
  L === 0 && q();
  function ge(re) {
    if (!C) {
      const { x: he, y: ue } = Yt(re), pe = he - B, K = ue - E;
      if (!(pe * pe + K * K > L * L))
        return;
      q();
    }
    if (!S() || !ee) {
      fe(re);
      return;
    }
    const oe = b();
    z = Yt(re, P), J = Ip(co(z, oe, !1, [1, 1]), n, l, ee), A || (ne(), A = !0);
    const de = su(re, {
      handle: J,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: w,
      doc: I,
      lib: c,
      flowId: g,
      nodeLookup: l
    });
    G = de.handleDomNode, F = de.connection, Z = zp(!!J, de.isValid);
    const te = {
      // from stays the same
      ...j,
      isValid: Z,
      to: de.toHandle && Z ? Xo({ x: de.toHandle.x, y: de.toHandle.y }, oe) : z,
      toHandle: de.toHandle,
      toPosition: Z && de.toHandle ? de.toHandle.position : Ba[ee.position],
      toNode: de.toHandle ? l.get(de.toHandle.nodeId) : null
    };
    Z && J && j.toHandle && te.toHandle && j.toHandle.type === te.toHandle.type && j.toHandle.nodeId === te.toHandle.nodeId && j.toHandle.id === te.toHandle.id && j.to.x === te.to.x && j.to.y === te.to.y || (_(te), j = te);
  }
  function fe(re) {
    if (C) {
      (J || G) && F && Z && y?.(F);
      const { inProgress: oe, ...de } = j, te = {
        ...de,
        toPosition: j.toHandle ? j.toPosition : null
      };
      k?.(re, te), i && T?.(re, te);
    }
    h(), cancelAnimationFrame(Y), A = !1, Z = !1, F = null, G = null, I.removeEventListener("mousemove", ge), I.removeEventListener("mouseup", fe), I.removeEventListener("touchmove", ge), I.removeEventListener("touchend", fe);
  }
  I.addEventListener("mousemove", ge), I.addEventListener("mouseup", fe), I.addEventListener("touchmove", ge), I.addEventListener("touchend", fe);
}
function su(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: c = iu, nodeLookup: d }) {
  const g = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: h, y: v } = Yt(e), y = s.elementFromPoint(h, v), k = y?.classList.contains(`${a}-flow__handle`) ? y : f, w = {
    handleDomNode: k,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (k) {
    const T = ou(void 0, k), _ = k.getAttribute("data-nodeid"), b = k.getAttribute("data-handleid"), S = k.classList.contains("connectable"), O = k.classList.contains("connectableend");
    if (!_ || !T)
      return w;
    const L = {
      source: g ? _ : r,
      sourceHandle: g ? b : o,
      target: g ? r : _,
      targetHandle: g ? o : b
    };
    w.connection = L;
    const Y = S && O && (n === mr.Strict ? g && T === "source" || !g && T === "target" : _ !== r || b !== o);
    w.isValid = Y && c(L), w.toHandle = ru(_, T, b, d, n, !0);
  }
  return w;
}
const el = {
  onPointerDown: Rp,
  isValid: su
};
function Bp({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = At(e);
  function i({ translateExtent: a, width: l, height: c, zoomStep: d = 10, pannable: g = !0, zoomable: f = !0, inversePan: h = !1 }) {
    const v = (_) => {
      const b = n();
      if (_.sourceEvent.type !== "wheel" || !t)
        return;
      const S = -_.sourceEvent.deltaY * (_.sourceEvent.deltaMode === 1 ? 0.05 : _.sourceEvent.deltaMode ? 1 : 2e-3) * d, O = b[2] * Math.pow(2, S);
      t.scaleTo(O);
    };
    let y = [0, 0];
    const k = (_) => {
      (_.sourceEvent.type === "mousedown" || _.sourceEvent.type === "touchstart") && (y = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ]);
    }, w = (_) => {
      const b = n();
      if (_.sourceEvent.type !== "mousemove" && _.sourceEvent.type !== "touchmove" || !t)
        return;
      const S = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ], O = [S[0] - y[0], S[1] - y[1]];
      y = S;
      const L = r() * Math.max(b[2], Math.log(b[2])) * (h ? -1 : 1), I = {
        x: b[0] - O[0] * L,
        y: b[1] - O[1] * L
      }, Y = [
        [0, 0],
        [l, c]
      ];
      t.setViewportConstrained({
        x: I.x,
        y: I.y,
        zoom: b[2]
      }, Y, a);
    }, T = Rc().on("start", k).on("zoom", g ? w : null).on("zoom.wheel", f ? v : null);
    o.call(T, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: Lt
  };
}
const Fp = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, vi = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Pi = ({ x: e, y: t, zoom: n }) => di.translate(e, t).scale(n), sr = (e, t) => e.target.closest(`.${t}`), au = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), Kp = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, Ti = (e, t = 0, n = Kp, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, lu = (e) => {
  const t = e.ctrlKey && ir() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function qp({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: c }) {
  return (d) => {
    if (sr(d, t))
      return !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const g = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const k = Lt(d), w = lu(d), T = g * Math.pow(2, w);
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
      c?.(d, y), e.isPanScrolling = !1;
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
    e.usedRightMouseButton = !!(n && au(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, vi(i.transform));
  };
}
function Xp({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && au(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && Fp(e.prevViewport, s.transform))) {
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
function jp({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: c }) {
  return (d) => {
    const g = e || t, f = n && d.ctrlKey;
    if (d.button === 1 && d.type === "mousedown" && (sr(d, `${c}-flow__node`) || sr(d, `${c}-flow__edge`)))
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
function Gp({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: s, onPanZoomStart: a, onPanZoomEnd: l, onDraggingChange: c }) {
  const d = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, g = e.getBoundingClientRect(), f = Rc().clickDistance(!cn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), h = At(e).call(f);
  _({
    x: i.x,
    y: i.y,
    zoom: yr(i.zoom, t, n)
  }, [
    [0, 0],
    [g.width, g.height]
  ], o);
  const v = h.on("wheel.zoom"), y = h.on("dblclick.zoom");
  f.wheelDelta(lu);
  function k(E, D) {
    return h ? new Promise((x) => {
      f?.interpolate(D?.interpolate === "linear" ? Lr : To).transform(Ti(h, D?.duration, D?.ease, () => x(!0)), E);
    }) : Promise.resolve(!1);
  }
  function w({ noWheelClassName: E, noPanClassName: D, onPaneContextMenu: x, userSelectionActive: P, panOnScroll: C, panOnDrag: H, panOnScrollMode: z, panOnScrollSpeed: A, preventScrolling: F, zoomOnPinch: Z, zoomOnScroll: G, zoomOnDoubleClick: ne, zoomActivationKeyPressed: ee, lib: Q, onTransformChange: X }) {
    P && !d.isZoomingOrPanning && T();
    const q = C && !ee && !P ? qp({
      zoomPanValues: d,
      noWheelClassName: E,
      d3Selection: h,
      d3Zoom: f,
      panOnScrollMode: z,
      panOnScrollSpeed: A,
      zoomOnPinch: Z,
      onPanZoomStart: a,
      onPanZoom: s,
      onPanZoomEnd: l
    }) : Zp({
      noWheelClassName: E,
      preventScrolling: F,
      d3ZoomHandler: v
    });
    if (h.on("wheel.zoom", q, { passive: !1 }), !P) {
      const fe = Yp({
        zoomPanValues: d,
        onDraggingChange: c,
        onPanZoomStart: a
      });
      f.on("start", fe);
      const re = Wp({
        zoomPanValues: d,
        panOnDrag: H,
        onPaneContextMenu: !!x,
        onPanZoom: s,
        onTransformChange: X
      });
      f.on("zoom", re);
      const oe = Xp({
        zoomPanValues: d,
        panOnDrag: H,
        panOnScroll: C,
        onPaneContextMenu: x,
        onPanZoomEnd: l,
        onDraggingChange: c
      });
      f.on("end", oe);
    }
    const ge = jp({
      zoomActivationKeyPressed: ee,
      panOnDrag: H,
      zoomOnScroll: G,
      panOnScroll: C,
      zoomOnDoubleClick: ne,
      zoomOnPinch: Z,
      userSelectionActive: P,
      noPanClassName: D,
      noWheelClassName: E,
      lib: Q
    });
    f.filter(ge), ne ? h.on("dblclick.zoom", y) : h.on("dblclick.zoom", null);
  }
  function T() {
    f.on("zoom", null);
  }
  async function _(E, D, x) {
    const P = Pi(E), C = f?.constrain()(P, D, x);
    return C && await k(C), new Promise((H) => H(C));
  }
  async function b(E, D) {
    const x = Pi(E);
    return await k(x, D), new Promise((P) => P(x));
  }
  function S(E) {
    if (h) {
      const D = Pi(E), x = h.property("__zoom");
      (x.k !== E.zoom || x.x !== E.x || x.y !== E.y) && f?.transform(h, D, null, { sync: !0 });
    }
  }
  function O() {
    const E = h ? zc(h.node()) : { x: 0, y: 0, k: 1 };
    return { x: E.x, y: E.y, zoom: E.k };
  }
  function L(E, D) {
    return h ? new Promise((x) => {
      f?.interpolate(D?.interpolate === "linear" ? Lr : To).scaleTo(Ti(h, D?.duration, D?.ease, () => x(!0)), E);
    }) : Promise.resolve(!1);
  }
  function I(E, D) {
    return h ? new Promise((x) => {
      f?.interpolate(D?.interpolate === "linear" ? Lr : To).scaleBy(Ti(h, D?.duration, D?.ease, () => x(!0)), E);
    }) : Promise.resolve(!1);
  }
  function Y(E) {
    f?.scaleExtent(E);
  }
  function J(E) {
    f?.translateExtent(E);
  }
  function B(E) {
    const D = !cn(E) || E < 0 ? 0 : E;
    f?.clickDistance(D);
  }
  return {
    update: w,
    destroy: T,
    setViewport: b,
    setViewportConstrained: _,
    getViewport: O,
    scaleTo: L,
    scaleBy: I,
    setScaleExtent: Y,
    setTranslateExtent: J,
    syncViewport: S,
    setClickDistance: B
  };
}
var tl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(tl || (tl = {}));
var Up = /* @__PURE__ */ U("<div><!></div>");
function Ln(e, t) {
  le(t, !0);
  let n = m(t, "id", 7, null), r = m(t, "type", 7, "source"), o = m(t, "position", 23, () => we.Top), i = m(t, "style", 7), s = m(t, "class", 7), a = m(t, "isConnectable", 7), l = m(t, "isConnectableStart", 7, !0), c = m(t, "isConnectableEnd", 7, !0), d = m(t, "isValidConnection", 7), g = m(t, "onconnect", 7), f = m(t, "ondisconnect", 7), h = m(t, "children", 7), v = /* @__PURE__ */ Oe(t, [
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
  let w = /* @__PURE__ */ N(() => r() === "target"), T = /* @__PURE__ */ N(() => a() !== void 0 ? a() : k.value), _ = Rt(), b = /* @__PURE__ */ N(() => _.ariaLabelConfig), S = null;
  Rl(() => {
    if (g() || f()) {
      _.edges;
      let A = _.connectionLookup.get(`${y}-${r()}${n() ? `-${n()}` : ""}`);
      if (S && !Jv(A, S)) {
        const F = A ?? /* @__PURE__ */ new Map();
        Fa(S, F, f()), Fa(F, S, g());
      }
      S = new Map(A);
    }
  });
  let O = /* @__PURE__ */ N(() => {
    if (!_.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: A, toHandle: F, isValid: Z } = _.connection, G = A && A.nodeId === y && A.type === r() && A.id === n(), ne = F && F.nodeId === y && F.type === r() && F.id === n(), ee = _.connectionMode === mr.Strict ? A?.type !== r() : y !== A?.nodeId || n() !== A?.id;
    return [
      !0,
      G,
      ne,
      ee,
      ne && Z
    ];
  }), L = /* @__PURE__ */ N(() => Qr(u(O), 5)), I = /* @__PURE__ */ N(() => u(L)[0]), Y = /* @__PURE__ */ N(() => u(L)[1]), J = /* @__PURE__ */ N(() => u(L)[2]), B = /* @__PURE__ */ N(() => u(L)[3]), E = /* @__PURE__ */ N(() => u(L)[4]);
  function D(A) {
    const F = _.onbeforeconnect?.(A) ?? A;
    F && (_.addEdge(F), _.onconnect?.(A));
  }
  function x(A) {
    const F = Uc(A);
    (F && A.button === 0 || !F) && el.onPointerDown(A, {
      handleId: n(),
      nodeId: y,
      isTarget: u(w),
      connectionRadius: _.connectionRadius,
      domNode: _.domNode,
      nodeLookup: _.nodeLookup,
      connectionMode: _.connectionMode,
      lib: "svelte",
      autoPanOnConnect: _.autoPanOnConnect,
      flowId: _.flowId,
      isValidConnection: d() ?? _.isValidConnection,
      updateConnection: _.updateConnection,
      cancelConnection: _.cancelConnection,
      panBy: _.panBy,
      onConnect: D,
      onConnectStart: (Z, G) => {
        _.onconnectstart?.(Z, {
          nodeId: G.nodeId,
          handleId: G.handleId,
          handleType: G.handleType
        });
      },
      onConnectEnd: (Z, G) => {
        _.onconnectend?.(Z, G);
      },
      getTransform: () => [_.viewport.x, _.viewport.y, _.viewport.zoom],
      getFromHandle: () => _.connection.fromHandle,
      dragThreshold: _.connectionDragThreshold
    });
  }
  function P(A) {
    if (!y || !_.clickConnectStartHandle && !l())
      return;
    if (!_.clickConnectStartHandle) {
      _.onclickconnectstart?.(A, { nodeId: y, handleId: n(), handleType: r() }), _.clickConnectStartHandle = { nodeId: y, type: r(), id: n() };
      return;
    }
    const F = jc(A.target), Z = d() ?? _.isValidConnection, { connectionMode: G, clickConnectStartHandle: ne, flowId: ee, nodeLookup: Q } = _, { connection: X, isValid: j } = el.isValid(A, {
      handle: { nodeId: y, id: n(), type: r() },
      connectionMode: G,
      fromNodeId: ne.nodeId,
      fromHandleId: ne.id ?? null,
      fromType: ne.type,
      isValidConnection: Z,
      flowId: ee,
      doc: F,
      lib: "svelte",
      nodeLookup: Q
    });
    j && X && D(X);
    const q = structuredClone(Nl(_.connection));
    delete q.inProgress, q.toPosition = q.toHandle ? q.toHandle.position : null, _.onclickconnectend?.(A, q), _.clickConnectStartHandle = null;
  }
  var C = Up(), H = () => {
  };
  Ue(
    C,
    (A) => ({
      "data-handleid": n(),
      "data-nodeid": y,
      "data-handlepos": o(),
      "data-id": `${_.flowId ?? ""}-${y ?? ""}-${n() ?? "null" ?? ""}-${r() ?? ""}`,
      class: [
        "svelte-flow__handle",
        `svelte-flow__handle-${o()}`,
        _.noDragClass,
        _.noPanClass,
        o(),
        s()
      ],
      onmousedown: x,
      ontouchstart: x,
      onclick: _.clickConnect ? P : void 0,
      onkeypress: H,
      style: i(),
      role: "button",
      "aria-label": u(b)["handle.ariaLabel"],
      tabindex: "-1",
      ...v,
      [Sn]: A
    }),
    [
      () => ({
        valid: u(E),
        connectingto: u(J),
        connectingfrom: u(Y),
        source: !u(w),
        target: u(w),
        connectablestart: l(),
        connectableend: c(),
        connectable: u(T),
        connectionindicator: u(T) && (!u(I) || u(B)) && (u(I) || _.clickConnectStartHandle ? c() : l())
      })
    ]
  );
  var z = R(C);
  return Ye(z, () => h() ?? ot), $(C), M(e, C), ce({
    get id() {
      return n();
    },
    set id(A = null) {
      n(A), p();
    },
    get type() {
      return r();
    },
    set type(A = "source") {
      r(A), p();
    },
    get position() {
      return o();
    },
    set position(A = we.Top) {
      o(A), p();
    },
    get style() {
      return i();
    },
    set style(A) {
      i(A), p();
    },
    get class() {
      return s();
    },
    set class(A) {
      s(A), p();
    },
    get isConnectable() {
      return a();
    },
    set isConnectable(A) {
      a(A), p();
    },
    get isConnectableStart() {
      return l();
    },
    set isConnectableStart(A = !0) {
      l(A), p();
    },
    get isConnectableEnd() {
      return c();
    },
    set isConnectableEnd(A = !0) {
      c(A), p();
    },
    get isValidConnection() {
      return d();
    },
    set isValidConnection(A) {
      d(A), p();
    },
    get onconnect() {
      return g();
    },
    set onconnect(A) {
      g(A), p();
    },
    get ondisconnect() {
      return f();
    },
    set ondisconnect(A) {
      f(A), p();
    },
    get children() {
      return h();
    },
    set children(A) {
      h(A), p();
    }
  });
}
ie(
  Ln,
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
var Jp = /* @__PURE__ */ U("<!> <!>", 1);
function Ys(e, t) {
  le(t, !0);
  let n = m(t, "data", 7), r = m(t, "targetPosition", 23, () => we.Top), o = m(t, "sourcePosition", 23, () => we.Bottom);
  var i = Jp(), s = ae(i);
  Ln(s, {
    type: "target",
    get position() {
      return r();
    }
  });
  var a = V(s), l = V(a);
  return Ln(l, {
    type: "source",
    get position() {
      return o();
    }
  }), be(() => He(a, ` ${n()?.label ?? ""} `)), M(e, i), ce({
    get data() {
      return n();
    },
    set data(c) {
      n(c), p();
    },
    get targetPosition() {
      return r();
    },
    set targetPosition(c = we.Top) {
      r(c), p();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(c = we.Bottom) {
      o(c), p();
    }
  });
}
ie(Ys, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var Qp = /* @__PURE__ */ U(" <!>", 1);
function cu(e, t) {
  le(t, !0);
  let n = m(t, "data", 23, () => ({ label: "Node" })), r = m(t, "sourcePosition", 23, () => we.Bottom);
  ye();
  var o = Qp(), i = ae(o), s = V(i);
  return Ln(s, {
    type: "source",
    get position() {
      return r();
    }
  }), be(() => He(i, `${n()?.label ?? ""} `)), M(e, o), ce({
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
ie(cu, { data: {}, sourcePosition: {} }, [], [], !0);
var e0 = /* @__PURE__ */ U(" <!>", 1);
function uu(e, t) {
  le(t, !0);
  let n = m(t, "data", 23, () => ({ label: "Node" })), r = m(t, "targetPosition", 23, () => we.Top);
  ye();
  var o = e0(), i = ae(o), s = V(i);
  return Ln(s, {
    type: "target",
    get position() {
      return r();
    }
  }), be(() => He(i, `${n()?.label ?? ""} `)), M(e, o), ce({
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
ie(uu, { data: {}, targetPosition: {} }, [], [], !0);
function du(e, t) {
}
ie(du, {}, [], [], !0);
function Di(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function fu(e, t) {
  const n = /* @__PURE__ */ N(Rt), r = /* @__PURE__ */ N(() => u(n).domNode);
  let o;
  return u(r) ? Di(e, u(r), t) : o = Cs(() => {
    Ze(() => {
      Di(e, u(r), t), o?.();
    });
  }), {
    async update(i) {
      Di(e, u(r), i);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e), o?.();
    }
  };
}
function gu() {
  let e = /* @__PURE__ */ ke(typeof window > "u");
  if (u(e)) {
    const t = Cs(() => {
      Ze(() => {
        W(e, !1), t?.();
      });
    });
  }
  return {
    get value() {
      return u(e);
    }
  };
}
const nl = (e) => ep(e), t0 = (e) => Fc(e);
function en(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const jo = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var n0 = /* @__PURE__ */ U("<div><!></div>");
const r0 = {
  hash: "svelte-w2n27y",
  code: ".transparent.svelte-w2n27y {background:transparent;}"
};
function hu(e, t) {
  le(t, !0), De(e, r0);
  let n = m(t, "x", 7, 0), r = m(t, "y", 7, 0), o = m(t, "width", 7), i = m(t, "height", 7), s = m(t, "selectEdgeOnClick", 7, !1), a = m(t, "transparent", 7, !1), l = m(t, "class", 7), c = m(t, "children", 7), d = /* @__PURE__ */ Oe(t, [
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
  Ue(
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
        display: gu().value ? "none" : void 0,
        cursor: s() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: en(o()),
        height: en(i()),
        "z-index": u(h)
      })
    ],
    "svelte-w2n27y"
  );
  var k = R(v);
  return Ye(k, () => c() ?? ot), $(v), at(v, (w, T) => fu?.(w, T), () => "edge-labels"), M(e, v), ce({
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
      return c();
    },
    set children(w) {
      c(w), p();
    }
  });
}
ie(
  hu,
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
var o0 = /* @__PURE__ */ ve("<path></path>"), i0 = /* @__PURE__ */ ve('<path fill="none"></path><!><!>', 1);
function uo(e, t) {
  le(t, !0);
  let n = m(t, "id", 7), r = m(t, "path", 7), o = m(t, "label", 7), i = m(t, "labelX", 7), s = m(t, "labelY", 7), a = m(t, "labelStyle", 7), l = m(t, "markerStart", 7), c = m(t, "markerEnd", 7), d = m(t, "style", 7), g = m(t, "interactionWidth", 7, 20), f = m(t, "class", 7), h = /* @__PURE__ */ Oe(t, [
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
  var v = i0(), y = ae(v), k = V(y);
  {
    var w = (b) => {
      var S = o0();
      Ue(S, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": g(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...h
      })), M(b, S);
    };
    se(k, (b) => {
      g() > 0 && b(w);
    });
  }
  var T = V(k);
  {
    var _ = (b) => {
      hu(b, {
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
        children: (S, O) => {
          ye();
          var L = Ce();
          be(() => He(L, o())), M(S, L);
        },
        $$slots: { default: !0 }
      });
    };
    se(T, (b) => {
      o() && b(_);
    });
  }
  return be(() => {
    _e(y, "id", n()), _e(y, "d", r()), wt(y, 0, xn(["svelte-flow__edge-path", f()])), _e(y, "marker-start", l()), _e(y, "marker-end", c()), ft(y, d());
  }), M(e, v), ce({
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
      return c();
    },
    set markerEnd(b) {
      c(b), p();
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
ie(
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
  le(t, !0);
  let n = m(t, "id", 7), r = m(t, "interactionWidth", 7), o = m(t, "label", 7), i = m(t, "labelStyle", 7), s = m(t, "markerEnd", 7), a = m(t, "markerStart", 7), l = m(t, "pathOptions", 7), c = m(t, "sourcePosition", 7), d = m(t, "sourceX", 7), g = m(t, "sourceY", 7), f = m(t, "style", 7), h = m(t, "targetPosition", 7), v = m(t, "targetX", 7), y = m(t, "targetY", 7), k = /* @__PURE__ */ N(() => Jc({
    sourceX: d(),
    sourceY: g(),
    targetX: v(),
    targetY: y(),
    sourcePosition: c(),
    targetPosition: h(),
    curvature: l()?.curvature
  })), w = /* @__PURE__ */ N(() => Qr(u(k), 3)), T = /* @__PURE__ */ N(() => u(w)[0]), _ = /* @__PURE__ */ N(() => u(w)[1]), b = /* @__PURE__ */ N(() => u(w)[2]);
  return uo(e, {
    get id() {
      return n();
    },
    get path() {
      return u(T);
    },
    get labelX() {
      return u(_);
    },
    get labelY() {
      return u(b);
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
    set id(S) {
      n(S), p();
    },
    get interactionWidth() {
      return r();
    },
    set interactionWidth(S) {
      r(S), p();
    },
    get label() {
      return o();
    },
    set label(S) {
      o(S), p();
    },
    get labelStyle() {
      return i();
    },
    set labelStyle(S) {
      i(S), p();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(S) {
      s(S), p();
    },
    get markerStart() {
      return a();
    },
    set markerStart(S) {
      a(S), p();
    },
    get pathOptions() {
      return l();
    },
    set pathOptions(S) {
      l(S), p();
    },
    get sourcePosition() {
      return c();
    },
    set sourcePosition(S) {
      c(S), p();
    },
    get sourceX() {
      return d();
    },
    set sourceX(S) {
      d(S), p();
    },
    get sourceY() {
      return g();
    },
    set sourceY(S) {
      g(S), p();
    },
    get style() {
      return f();
    },
    set style(S) {
      f(S), p();
    },
    get targetPosition() {
      return h();
    },
    set targetPosition(S) {
      h(S), p();
    },
    get targetX() {
      return v();
    },
    set targetX(S) {
      v(S), p();
    },
    get targetY() {
      return y();
    },
    set targetY(S) {
      y(S), p();
    }
  });
}
ie(
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
function vu(e, t) {
  le(t, !0);
  let n = m(t, "interactionWidth", 7), r = m(t, "label", 7), o = m(t, "labelStyle", 7), i = m(t, "style", 7), s = m(t, "markerEnd", 7), a = m(t, "markerStart", 7), l = m(t, "sourcePosition", 7), c = m(t, "sourceX", 7), d = m(t, "sourceY", 7), g = m(t, "targetPosition", 7), f = m(t, "targetX", 7), h = m(t, "targetY", 7), v = /* @__PURE__ */ N(() => Fs({
    sourceX: c(),
    sourceY: d(),
    targetX: f(),
    targetY: h(),
    sourcePosition: l(),
    targetPosition: g()
  })), y = /* @__PURE__ */ N(() => Qr(u(v), 3)), k = /* @__PURE__ */ N(() => u(y)[0]), w = /* @__PURE__ */ N(() => u(y)[1]), T = /* @__PURE__ */ N(() => u(y)[2]);
  return uo(e, {
    get path() {
      return u(k);
    },
    get labelX() {
      return u(w);
    },
    get labelY() {
      return u(T);
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
    set interactionWidth(_) {
      n(_), p();
    },
    get label() {
      return r();
    },
    set label(_) {
      r(_), p();
    },
    get labelStyle() {
      return o();
    },
    set labelStyle(_) {
      o(_), p();
    },
    get style() {
      return i();
    },
    set style(_) {
      i(_), p();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(_) {
      s(_), p();
    },
    get markerStart() {
      return a();
    },
    set markerStart(_) {
      a(_), p();
    },
    get sourcePosition() {
      return l();
    },
    set sourcePosition(_) {
      l(_), p();
    },
    get sourceX() {
      return c();
    },
    set sourceX(_) {
      c(_), p();
    },
    get sourceY() {
      return d();
    },
    set sourceY(_) {
      d(_), p();
    },
    get targetPosition() {
      return g();
    },
    set targetPosition(_) {
      g(_), p();
    },
    get targetX() {
      return f();
    },
    set targetX(_) {
      f(_), p();
    },
    get targetY() {
      return h();
    },
    set targetY(_) {
      h(_), p();
    }
  });
}
ie(
  vu,
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
function pu(e, t) {
  le(t, !0);
  let n = m(t, "sourceX", 7), r = m(t, "sourceY", 7), o = m(t, "targetX", 7), i = m(t, "targetY", 7), s = m(t, "label", 7), a = m(t, "labelStyle", 7), l = m(t, "markerStart", 7), c = m(t, "markerEnd", 7), d = m(t, "interactionWidth", 7), g = m(t, "style", 7), f = /* @__PURE__ */ N(() => eu({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), h = /* @__PURE__ */ N(() => Qr(u(f), 3)), v = /* @__PURE__ */ N(() => u(h)[0]), y = /* @__PURE__ */ N(() => u(h)[1]), k = /* @__PURE__ */ N(() => u(h)[2]);
  return uo(e, {
    get path() {
      return u(v);
    },
    get labelX() {
      return u(y);
    },
    get labelY() {
      return u(k);
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
      return g();
    }
  }), ce({
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
      return c();
    },
    set markerEnd(w) {
      c(w), p();
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
ie(
  pu,
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
function mu(e, t) {
  le(t, !0);
  let n = m(t, "sourceX", 7), r = m(t, "sourceY", 7), o = m(t, "sourcePosition", 7), i = m(t, "targetX", 7), s = m(t, "targetY", 7), a = m(t, "targetPosition", 7), l = m(t, "label", 7), c = m(t, "labelStyle", 7), d = m(t, "markerStart", 7), g = m(t, "markerEnd", 7), f = m(t, "interactionWidth", 7), h = m(t, "style", 7), v = /* @__PURE__ */ N(() => Fs({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), y = /* @__PURE__ */ N(() => Qr(u(v), 3)), k = /* @__PURE__ */ N(() => u(y)[0]), w = /* @__PURE__ */ N(() => u(y)[1]), T = /* @__PURE__ */ N(() => u(y)[2]);
  return uo(e, {
    get path() {
      return u(k);
    },
    get labelX() {
      return u(w);
    },
    get labelY() {
      return u(T);
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
      return g();
    },
    get interactionWidth() {
      return f();
    },
    get style() {
      return h();
    }
  }), ce({
    get sourceX() {
      return n();
    },
    set sourceX(_) {
      n(_), p();
    },
    get sourceY() {
      return r();
    },
    set sourceY(_) {
      r(_), p();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(_) {
      o(_), p();
    },
    get targetX() {
      return i();
    },
    set targetX(_) {
      i(_), p();
    },
    get targetY() {
      return s();
    },
    set targetY(_) {
      s(_), p();
    },
    get targetPosition() {
      return a();
    },
    set targetPosition(_) {
      a(_), p();
    },
    get label() {
      return l();
    },
    set label(_) {
      l(_), p();
    },
    get labelStyle() {
      return c();
    },
    set labelStyle(_) {
      c(_), p();
    },
    get markerStart() {
      return d();
    },
    set markerStart(_) {
      d(_), p();
    },
    get markerEnd() {
      return g();
    },
    set markerEnd(_) {
      g(_), p();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(_) {
      f(_), p();
    },
    get style() {
      return h();
    },
    set style(_) {
      h(_), p();
    }
  });
}
ie(
  mu,
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
    wf() && (u(n), ro(() => (t === 0 && (r = nt(() => e(() => Eo(n)))), t += 1, () => {
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
function rl(e) {
  const { edges: t, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l } = e, c = /* @__PURE__ */ new Map();
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
      c.set(d.id, h);
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
    v && c.set(d.id, {
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
  return c;
}
const yu = {
  input: cu,
  output: uu,
  default: Ys,
  group: du
}, wu = {
  straight: pu,
  smoothstep: vu,
  default: Ws,
  step: mu
};
function f0(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = lo(i, {
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
      return u(this.#t);
    }
    set flowId(r) {
      W(this.#t, r);
    }
    #e = /* @__PURE__ */ ke(null);
    get domNode() {
      return u(this.#e);
    }
    set domNode(r) {
      W(this.#e, r);
    }
    #n = /* @__PURE__ */ ke(null);
    get panZoom() {
      return u(this.#n);
    }
    set panZoom(r) {
      W(this.#n, r);
    }
    #r = /* @__PURE__ */ ke(e.width ?? 0);
    get width() {
      return u(this.#r);
    }
    set width(r) {
      W(this.#r, r);
    }
    #o = /* @__PURE__ */ ke(e.height ?? 0);
    get height() {
      return u(this.#o);
    }
    set height(r) {
      W(this.#o, r);
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
      return u(this.#i);
    }
    set nodesInitialized(r) {
      W(this.#i, r);
    }
    #s = /* @__PURE__ */ N(() => this.panZoom !== null);
    get viewportInitialized() {
      return u(this.#s);
    }
    set viewportInitialized(r) {
      W(this.#s, r);
    }
    #a = /* @__PURE__ */ N(() => (Mp(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
    get _edges() {
      return u(this.#a);
    }
    set _edges(r) {
      W(this.#a, r);
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
      return u(this.#l);
    }
    set selectedNodes(r) {
      W(this.#l, r);
    }
    _prevSelectedEdges = [];
    _prevSelectedEdgeIds = /* @__PURE__ */ new Set();
    #c = /* @__PURE__ */ N(() => {
      const r = this._prevSelectedEdgeIds.size, o = /* @__PURE__ */ new Set(), i = this.edges.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedEdgeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedEdgeIds.size > 0) && (this._prevSelectedEdges = i), this._prevSelectedEdgeIds = o, this._prevSelectedEdges;
    });
    get selectedEdges() {
      return u(this.#c);
    }
    set selectedEdges(r) {
      W(this.#c, r);
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
        onlyRenderVisibleElements: c,
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
      if (c) {
        const { viewport: v, width: y, height: k } = this, w = [v.x, v.y, v.zoom];
        g = d0(s, w, y, k), f = rl({
          ...h,
          onlyRenderVisible: !0,
          visibleNodes: g,
          transform: w,
          width: y,
          height: k
        });
      } else
        g = this.nodeLookup, f = rl(h);
      return { nodes: g, edges: f };
    });
    get visible() {
      return u(this.#u);
    }
    set visible(r) {
      W(this.#u, r);
    }
    #d = /* @__PURE__ */ N(() => e.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return u(this.#d);
    }
    set nodesDraggable(r) {
      W(this.#d, r);
    }
    #f = /* @__PURE__ */ N(() => e.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return u(this.#f);
    }
    set nodesConnectable(r) {
      W(this.#f, r);
    }
    #g = /* @__PURE__ */ N(() => e.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return u(this.#g);
    }
    set elementsSelectable(r) {
      W(this.#g, r);
    }
    #h = /* @__PURE__ */ N(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return u(this.#h);
    }
    set nodesFocusable(r) {
      W(this.#h, r);
    }
    #v = /* @__PURE__ */ N(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return u(this.#v);
    }
    set edgesFocusable(r) {
      W(this.#v, r);
    }
    #p = /* @__PURE__ */ N(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return u(this.#p);
    }
    set disableKeyboardA11y(r) {
      W(this.#p, r);
    }
    #m = /* @__PURE__ */ N(() => e.props.minZoom ?? 0.5);
    get minZoom() {
      return u(this.#m);
    }
    set minZoom(r) {
      W(this.#m, r);
    }
    #y = /* @__PURE__ */ N(() => e.props.maxZoom ?? 2);
    get maxZoom() {
      return u(this.#y);
    }
    set maxZoom(r) {
      W(this.#y, r);
    }
    #w = /* @__PURE__ */ N(() => e.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return u(this.#w);
    }
    set nodeOrigin(r) {
      W(this.#w, r);
    }
    #_ = /* @__PURE__ */ N(() => e.props.nodeExtent ?? Ji);
    get nodeExtent() {
      return u(this.#_);
    }
    set nodeExtent(r) {
      W(this.#_, r);
    }
    #x = /* @__PURE__ */ N(() => e.props.translateExtent ?? Ji);
    get translateExtent() {
      return u(this.#x);
    }
    set translateExtent(r) {
      W(this.#x, r);
    }
    #b = /* @__PURE__ */ N(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return u(this.#b);
    }
    set defaultEdgeOptions(r) {
      W(this.#b, r);
    }
    #C = /* @__PURE__ */ N(() => e.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return u(this.#C);
    }
    set nodeDragThreshold(r) {
      W(this.#C, r);
    }
    #k = /* @__PURE__ */ N(() => e.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return u(this.#k);
    }
    set autoPanOnNodeDrag(r) {
      W(this.#k, r);
    }
    #E = /* @__PURE__ */ N(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return u(this.#E);
    }
    set autoPanOnConnect(r) {
      W(this.#E, r);
    }
    #S = /* @__PURE__ */ N(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return u(this.#S);
    }
    set autoPanOnNodeFocus(r) {
      W(this.#S, r);
    }
    #N = /* @__PURE__ */ N(() => e.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return u(this.#N);
    }
    set connectionDragThreshold(r) {
      W(this.#N, r);
    }
    fitViewQueued = e.props.fitView ?? !1;
    fitViewOptions = e.props.fitViewOptions;
    fitViewResolver = null;
    #P = /* @__PURE__ */ N(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return u(this.#P);
    }
    set snapGrid(r) {
      W(this.#P, r);
    }
    #T = /* @__PURE__ */ ke(!1);
    get dragging() {
      return u(this.#T);
    }
    set dragging(r) {
      W(this.#T, r);
    }
    #D = /* @__PURE__ */ ke(null);
    get selectionRect() {
      return u(this.#D);
    }
    set selectionRect(r) {
      W(this.#D, r);
    }
    #A = /* @__PURE__ */ ke(!1);
    get selectionKeyPressed() {
      return u(this.#A);
    }
    set selectionKeyPressed(r) {
      W(this.#A, r);
    }
    #M = /* @__PURE__ */ ke(!1);
    get multiselectionKeyPressed() {
      return u(this.#M);
    }
    set multiselectionKeyPressed(r) {
      W(this.#M, r);
    }
    #O = /* @__PURE__ */ ke(!1);
    get deleteKeyPressed() {
      return u(this.#O);
    }
    set deleteKeyPressed(r) {
      W(this.#O, r);
    }
    #L = /* @__PURE__ */ ke(!1);
    get panActivationKeyPressed() {
      return u(this.#L);
    }
    set panActivationKeyPressed(r) {
      W(this.#L, r);
    }
    #V = /* @__PURE__ */ ke(!1);
    get zoomActivationKeyPressed() {
      return u(this.#V);
    }
    set zoomActivationKeyPressed(r) {
      W(this.#V, r);
    }
    #H = /* @__PURE__ */ ke(null);
    get selectionRectMode() {
      return u(this.#H);
    }
    set selectionRectMode(r) {
      W(this.#H, r);
    }
    #$ = /* @__PURE__ */ ke("");
    get ariaLiveMessage() {
      return u(this.#$);
    }
    set ariaLiveMessage(r) {
      W(this.#$, r);
    }
    #I = /* @__PURE__ */ N(() => e.props.selectionMode ?? Yo.Partial);
    get selectionMode() {
      return u(this.#I);
    }
    set selectionMode(r) {
      W(this.#I, r);
    }
    #z = /* @__PURE__ */ N(() => ({ ...yu, ...e.props.nodeTypes }));
    get nodeTypes() {
      return u(this.#z);
    }
    set nodeTypes(r) {
      W(this.#z, r);
    }
    #R = /* @__PURE__ */ N(() => ({ ...wu, ...e.props.edgeTypes }));
    get edgeTypes() {
      return u(this.#R);
    }
    set edgeTypes(r) {
      W(this.#R, r);
    }
    #B = /* @__PURE__ */ N(() => e.props.noPanClass ?? "nopan");
    get noPanClass() {
      return u(this.#B);
    }
    set noPanClass(r) {
      W(this.#B, r);
    }
    #F = /* @__PURE__ */ N(() => e.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return u(this.#F);
    }
    set noDragClass(r) {
      W(this.#F, r);
    }
    #K = /* @__PURE__ */ N(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return u(this.#K);
    }
    set noWheelClass(r) {
      W(this.#K, r);
    }
    #q = /* @__PURE__ */ N(() => up(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return u(this.#q);
    }
    set ariaLabelConfig(r) {
      W(this.#q, r);
    }
    #Z = /* @__PURE__ */ ke(f0(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return u(this.#Z);
    }
    set _viewport(r) {
      W(this.#Z, r);
    }
    get viewport() {
      return e.viewport ?? this._viewport;
    }
    set viewport(r) {
      e.viewport && (e.viewport = r), this._viewport = r;
    }
    #Y = /* @__PURE__ */ ke(
      // _connection is viewport independent and originating from XYHandle
      Qi
    );
    get _connection() {
      return u(this.#Y);
    }
    set _connection(r) {
      W(this.#Y, r);
    }
    #W = /* @__PURE__ */ N(() => this._connection.inProgress ? {
      ...this._connection,
      to: co(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return u(this.#W);
    }
    set connection(r) {
      W(this.#W, r);
    }
    #X = /* @__PURE__ */ N(() => e.props.connectionMode ?? mr.Strict);
    get connectionMode() {
      return u(this.#X);
    }
    set connectionMode(r) {
      W(this.#X, r);
    }
    #j = /* @__PURE__ */ N(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return u(this.#j);
    }
    set connectionRadius(r) {
      W(this.#j, r);
    }
    #G = /* @__PURE__ */ N(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return u(this.#G);
    }
    set isValidConnection(r) {
      W(this.#G, r);
    }
    #U = /* @__PURE__ */ N(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return u(this.#U);
    }
    set selectNodesOnDrag(r) {
      W(this.#U, r);
    }
    #J = /* @__PURE__ */ N(() => e.props.defaultMarkerColor ?? "#b1b1b7");
    get defaultMarkerColor() {
      return u(this.#J);
    }
    set defaultMarkerColor(r) {
      W(this.#J, r);
    }
    #Q = /* @__PURE__ */ N(() => bp(e.edges, {
      defaultColor: this.defaultMarkerColor,
      id: this.flowId,
      defaultMarkerStart: this.defaultEdgeOptions.markerStart,
      defaultMarkerEnd: this.defaultEdgeOptions.markerEnd
    }));
    get markers() {
      return u(this.#Q);
    }
    set markers(r) {
      W(this.#Q, r);
    }
    #ee = /* @__PURE__ */ N(() => e.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return u(this.#ee);
    }
    set onlyRenderVisibleElements(r) {
      W(this.#ee, r);
    }
    #te = /* @__PURE__ */ N(() => e.props.onflowerror ?? sp);
    get onerror() {
      return u(this.#te);
    }
    set onerror(r) {
      W(this.#te, r);
    }
    #ne = /* @__PURE__ */ N(() => e.props.ondelete);
    get ondelete() {
      return u(this.#ne);
    }
    set ondelete(r) {
      W(this.#ne, r);
    }
    #re = /* @__PURE__ */ N(() => e.props.onbeforedelete);
    get onbeforedelete() {
      return u(this.#re);
    }
    set onbeforedelete(r) {
      W(this.#re, r);
    }
    #oe = /* @__PURE__ */ N(() => e.props.onbeforeconnect);
    get onbeforeconnect() {
      return u(this.#oe);
    }
    set onbeforeconnect(r) {
      W(this.#oe, r);
    }
    #ie = /* @__PURE__ */ N(() => e.props.onconnect);
    get onconnect() {
      return u(this.#ie);
    }
    set onconnect(r) {
      W(this.#ie, r);
    }
    #se = /* @__PURE__ */ N(() => e.props.onconnectstart);
    get onconnectstart() {
      return u(this.#se);
    }
    set onconnectstart(r) {
      W(this.#se, r);
    }
    #ae = /* @__PURE__ */ N(() => e.props.onconnectend);
    get onconnectend() {
      return u(this.#ae);
    }
    set onconnectend(r) {
      W(this.#ae, r);
    }
    #le = /* @__PURE__ */ N(() => e.props.onbeforereconnect);
    get onbeforereconnect() {
      return u(this.#le);
    }
    set onbeforereconnect(r) {
      W(this.#le, r);
    }
    #ce = /* @__PURE__ */ N(() => e.props.onreconnect);
    get onreconnect() {
      return u(this.#ce);
    }
    set onreconnect(r) {
      W(this.#ce, r);
    }
    #ue = /* @__PURE__ */ N(() => e.props.onreconnectstart);
    get onreconnectstart() {
      return u(this.#ue);
    }
    set onreconnectstart(r) {
      W(this.#ue, r);
    }
    #de = /* @__PURE__ */ N(() => e.props.onreconnectend);
    get onreconnectend() {
      return u(this.#de);
    }
    set onreconnectend(r) {
      W(this.#de, r);
    }
    #fe = /* @__PURE__ */ N(() => e.props.clickConnect ?? !0);
    get clickConnect() {
      return u(this.#fe);
    }
    set clickConnect(r) {
      W(this.#fe, r);
    }
    #ge = /* @__PURE__ */ N(() => e.props.onclickconnectstart);
    get onclickconnectstart() {
      return u(this.#ge);
    }
    set onclickconnectstart(r) {
      W(this.#ge, r);
    }
    #he = /* @__PURE__ */ N(() => e.props.onclickconnectend);
    get onclickconnectend() {
      return u(this.#he);
    }
    set onclickconnectend(r) {
      W(this.#he, r);
    }
    #ve = /* @__PURE__ */ ke(null);
    get clickConnectStartHandle() {
      return u(this.#ve);
    }
    set clickConnectStartHandle(r) {
      W(this.#ve, r);
    }
    #pe = /* @__PURE__ */ N(() => e.props.onselectiondrag);
    get onselectiondrag() {
      return u(this.#pe);
    }
    set onselectiondrag(r) {
      W(this.#pe, r);
    }
    #me = /* @__PURE__ */ N(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return u(this.#me);
    }
    set onselectiondragstart(r) {
      W(this.#me, r);
    }
    #ye = /* @__PURE__ */ N(() => e.props.onselectiondragstop);
    get onselectiondragstop() {
      return u(this.#ye);
    }
    set onselectiondragstop(r) {
      W(this.#ye, r);
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
      return u(this.#we);
    }
    set colorMode(r) {
      W(this.#we, r);
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
  const e = Dn(Go);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
const Go = Symbol();
function _u(e) {
  const t = g0(e);
  function n(E) {
    t.nodeTypes = {
      ...yu,
      ...E
    };
  }
  function r(E) {
    t.edgeTypes = {
      ...wu,
      ...E
    };
  }
  function o(E) {
    t.edges = mp(E, t.edges);
  }
  const i = (E, D = !1) => {
    t.nodes = t.nodes.map((x) => {
      const P = E.get(x.id);
      return P ? { ...x, position: P.position, dragging: D } : x;
    });
  };
  function s(E) {
    const { changes: D, updatedInternals: x } = Dp(E, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin);
    if (!x)
      return;
    Ep(t.nodeLookup, t.parentLookup, {
      nodeOrigin: t.nodeOrigin,
      nodeExtent: t.nodeExtent
    }), t.fitViewQueued && t.resolveFitView();
    const P = /* @__PURE__ */ new Map();
    for (const C of D) {
      const H = t.nodeLookup.get(C.id)?.internals.userNode;
      if (!H)
        continue;
      const z = { ...H };
      switch (C.type) {
        case "dimensions": {
          const A = { ...z.measured, ...C.dimensions };
          C.setAttributes && (z.width = C.dimensions?.width ?? z.width, z.height = C.dimensions?.height ?? z.height), z.measured = A;
          break;
        }
        case "position":
          z.position = C.position ?? z.position;
          break;
      }
      P.set(C.id, z);
    }
    t.nodes = t.nodes.map((C) => P.get(C.id) ?? C);
  }
  function a(E) {
    const D = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = E, t.fitViewResolver = D, t.nodes = [...t.nodes], D.promise;
  }
  async function l(E, D, x) {
    const P = typeof x?.zoom < "u" ? x.zoom : t.maxZoom, C = t.panZoom;
    return C ? (await C.setViewport({
      x: t.width / 2 - E * P,
      y: t.height / 2 - D * P,
      zoom: P
    }, { duration: x?.duration, ease: x?.ease, interpolate: x?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function c(E, D) {
    const x = t.panZoom;
    return x ? x.scaleBy(E, D) : Promise.resolve(!1);
  }
  function d(E) {
    return c(1.2, E);
  }
  function g(E) {
    return c(1 / 1.2, E);
  }
  function f(E) {
    const D = t.panZoom;
    D && (D.setScaleExtent([E, t.maxZoom]), t.minZoom = E);
  }
  function h(E) {
    const D = t.panZoom;
    D && (D.setScaleExtent([t.minZoom, E]), t.maxZoom = E);
  }
  function v(E) {
    const D = t.panZoom;
    D && (D.setTranslateExtent(E), t.translateExtent = E);
  }
  function y(E) {
    t.panZoom?.setClickDistance(E);
  }
  function k(E, D = null) {
    let x = !1;
    const P = E.map((C) => (D ? D.has(C.id) : !0) && C.selected ? (x = !0, { ...C, selected: !1 }) : C);
    return [x, P];
  }
  function w(E) {
    const D = E?.nodes ? new Set(E.nodes.map((A) => A.id)) : null, [x, P] = k(t.nodes, D);
    x && (t.nodes = P);
    const C = E?.edges ? new Set(E.edges.map((A) => A.id)) : null, [H, z] = k(t.edges, C);
    H && (t.edges = z);
  }
  function T(E) {
    const D = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((x) => {
      const P = E.includes(x.id), C = D && x.selected || P;
      if (x.selected !== C) {
        const H = t.nodeLookup.get(x.id);
        return H && (H.selected = C), x.selected = C, { ...x };
      }
      return x;
    }), D || w({ nodes: [] });
  }
  function _(E) {
    const D = t.multiselectionKeyPressed;
    t.edges = t.edges.map((x) => {
      const P = E.includes(x.id), C = D && x.selected || P;
      return x.selected !== C ? { ...x, selected: C } : x;
    }), D || w({ edges: [] });
  }
  function b(E, D, x) {
    const P = t.nodeLookup.get(E);
    if (!P) {
      console.warn("012", Zr.error012(E));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, P.selected ? (D || P.selected && t.multiselectionKeyPressed) && (w({ nodes: [P], edges: [] }), requestAnimationFrame(() => x?.blur())) : T([E]);
  }
  function S(E) {
    const D = t.edgeLookup.get(E);
    if (!D) {
      console.warn("012", Zr.error012(E));
      return;
    }
    (D.selectable || t.elementsSelectable && typeof D.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, D.selected ? D.selected && t.multiselectionKeyPressed && w({ nodes: [], edges: [D] }) : _([E]));
  }
  function O(E, D) {
    const { nodeExtent: x, snapGrid: P, nodeOrigin: C, nodeLookup: H, nodesDraggable: z, onerror: A } = t, F = /* @__PURE__ */ new Map(), Z = P?.[0] ?? 5, G = P?.[1] ?? 5, ne = E.x * Z * D, ee = E.y * G * D;
    for (const Q of H.values()) {
      if (!(Q.selected && (Q.draggable || z && typeof Q.draggable > "u")))
        continue;
      let j = {
        x: Q.internals.positionAbsolute.x + ne,
        y: Q.internals.positionAbsolute.y + ee
      };
      P && (j = hi(j, P));
      const { position: q, positionAbsolute: ge } = Kc({
        nodeId: Q.id,
        nextPosition: j,
        nodeLookup: H,
        nodeExtent: x,
        nodeOrigin: C,
        onError: A
      });
      Q.position = q, Q.internals.positionAbsolute = ge, F.set(Q.id, Q);
    }
    i(F);
  }
  function L(E) {
    return Ap({
      delta: E,
      panZoom: t.panZoom,
      transform: [t.viewport.x, t.viewport.y, t.viewport.zoom],
      translateExtent: t.translateExtent,
      width: t.width,
      height: t.height
    });
  }
  const I = (E) => {
    t._connection = { ...E };
  };
  function Y() {
    t._connection = Qi;
  }
  function J() {
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
    addSelectedEdges: _,
    handleNodeSelection: b,
    handleEdgeSelection: S,
    moveSelectedNodes: O,
    panBy: L,
    updateConnection: I,
    cancelConnection: Y,
    reset: J
  });
}
function h0(e, t) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: l, paneClickDistance: c, setPanZoomInstance: d, onDraggingChange: g, onTransformChange: f } = t, h = Gp({
    domNode: e,
    minZoom: n,
    maxZoom: r,
    translateExtent: l,
    viewport: o,
    paneClickDistance: c,
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
var v0 = /* @__PURE__ */ U('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function xu(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "panOnScrollMode", 23, () => Gt.Free), o = m(t, "preventScrolling", 7, !0), i = m(t, "zoomOnScroll", 7, !0), s = m(t, "zoomOnDoubleClick", 7, !0), a = m(t, "zoomOnPinch", 7, !0), l = m(t, "panOnDrag", 7, !0), c = m(t, "panOnScroll", 7, !1), d = m(t, "paneClickDistance", 7, 1), g = m(t, "onmovestart", 7), f = m(t, "onmove", 7), h = m(t, "onmoveend", 7), v = m(t, "oninit", 7), y = m(t, "children", 7), k = /* @__PURE__ */ N(() => n().panActivationKeyPressed || l()), w = /* @__PURE__ */ N(() => n().panActivationKeyPressed || c());
  const { viewport: T } = n();
  let _ = !1;
  Ze(() => {
    !_ && n().viewportInitialized && (v()?.(), _ = !0);
  });
  var b = v0(), S = R(b);
  return Ye(S, y), $(b), at(b, (O, L) => h0?.(O, L), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: T,
    onDraggingChange: (O) => {
      n(n().dragging = O, !0);
    },
    setPanZoomInstance: (O) => {
      n(n().panZoom = O, !0);
    },
    onPanZoomStart: g(),
    onPanZoom: f(),
    onPanZoomEnd: h(),
    zoomOnScroll: i(),
    zoomOnDoubleClick: s(),
    zoomOnPinch: a(),
    panOnScroll: u(w),
    panOnDrag: u(k),
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
    onTransformChange: (O) => {
      n(n().viewport = { x: O[0], y: O[1], zoom: O[2] }, !0);
    }
  })), M(e, b), ce({
    get store() {
      return n();
    },
    set store(O) {
      n(O), p();
    },
    get panOnScrollMode() {
      return r();
    },
    set panOnScrollMode(O = Gt.Free) {
      r(O), p();
    },
    get preventScrolling() {
      return o();
    },
    set preventScrolling(O = !0) {
      o(O), p();
    },
    get zoomOnScroll() {
      return i();
    },
    set zoomOnScroll(O = !0) {
      i(O), p();
    },
    get zoomOnDoubleClick() {
      return s();
    },
    set zoomOnDoubleClick(O = !0) {
      s(O), p();
    },
    get zoomOnPinch() {
      return a();
    },
    set zoomOnPinch(O = !0) {
      a(O), p();
    },
    get panOnDrag() {
      return l();
    },
    set panOnDrag(O = !0) {
      l(O), p();
    },
    get panOnScroll() {
      return c();
    },
    set panOnScroll(O = !1) {
      c(O), p();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(O = 1) {
      d(O), p();
    },
    get onmovestart() {
      return g();
    },
    set onmovestart(O) {
      g(O), p();
    },
    get onmove() {
      return f();
    },
    set onmove(O) {
      f(O), p();
    },
    get onmoveend() {
      return h();
    },
    set onmoveend(O) {
      h(O), p();
    },
    get oninit() {
      return v();
    },
    set oninit(O) {
      v(O), p();
    },
    get children() {
      return y();
    },
    set children(O) {
      y(O), p();
    }
  });
}
ie(
  xu,
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
function ol(e, t) {
  return (n) => {
    n.target === t && e?.(n);
  };
}
function il(e) {
  return (t) => {
    const n = e.has(t.id);
    return !!t.selected !== n ? { ...t, selected: n } : t;
  };
}
function sl(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
var p0 = /* @__PURE__ */ U("<div><!></div>");
function bu(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "panOnDrag", 7, !0), o = m(t, "selectionOnDrag", 7), i = m(t, "onpaneclick", 7), s = m(t, "onpanecontextmenu", 7), a = m(t, "onselectionstart", 7), l = m(t, "onselectionend", 7), c = m(t, "children", 7), d, g = null, f = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ N(() => n().panActivationKeyPressed || r()), y = /* @__PURE__ */ N(() => n().selectionKeyPressed || n().selectionRect || o() && u(v) !== !0), k = /* @__PURE__ */ N(() => n().elementsSelectable && (u(y) || n().selectionRectMode === "user")), w = !1;
  function T(E) {
    if (w || n().connection.inProgress) {
      w = !1;
      return;
    }
    i()?.({ event: E }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0);
  }
  function _(E) {
    if (g = d?.getBoundingClientRect(), !n().elementsSelectable || !u(y) || E.button !== 0 || E.target !== d || !g)
      return;
    E.target?.setPointerCapture?.(E.pointerId);
    const { x: D, y: x } = Yt(E, g);
    n().unselectNodesAndEdges(), n(n().selectionRect = { width: 0, height: 0, startX: D, startY: x, x: D, y: x }, !0), a()?.(E);
  }
  function b(E) {
    if (!u(y) || !g || !n().selectionRect)
      return;
    w = !0;
    const D = Yt(E, g), { startX: x = 0, startY: P = 0 } = n().selectionRect, C = {
      ...n().selectionRect,
      x: D.x < x ? D.x : x,
      y: D.y < P ? D.y : P,
      width: Math.abs(D.x - x),
      height: Math.abs(D.y - P)
    }, H = f, z = h;
    f = new Set(Rs(
      n().nodeLookup,
      C,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === Yo.Partial,
      !0
    ).map((F) => F.id));
    const A = n().defaultEdgeOptions.selectable ?? !0;
    h = /* @__PURE__ */ new Set();
    for (const F of f) {
      const Z = n().connectionLookup.get(F);
      if (Z)
        for (const { edgeId: G } of Z.values()) {
          const ne = n().edgeLookup.get(G);
          ne && (ne.selectable ?? A) && h.add(G);
        }
    }
    sl(H, f) || n(n().nodes = n().nodes.map(il(f)), !0), sl(z, h) || n(n().edges = n().edges.map(il(h)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = C, !0);
  }
  function S(E) {
    E.button === 0 && (E.target?.releasePointerCapture?.(E.pointerId), !u(y) && n().selectionRectMode === "user" && E.target === d && T?.(E), n(n().selectionRect = null, !0), f.size > 0 && n(n().selectionRectMode = "nodes", !0), n().selectionKeyPressed && (w = !1), l()?.(E));
  }
  const O = (E) => {
    if (Array.isArray(u(v)) && u(v).includes(2)) {
      E.preventDefault();
      return;
    }
    s()?.({ event: E });
  };
  var L = p0();
  let I;
  var Y = /* @__PURE__ */ N(() => u(k) ? void 0 : ol(T, d));
  L.__click = function(...E) {
    u(Y)?.apply(this, E);
  }, L.__pointerdown = function(...E) {
    (u(k) ? _ : void 0)?.apply(this, E);
  }, L.__pointermove = function(...E) {
    (u(k) ? b : void 0)?.apply(this, E);
  }, L.__pointerup = function(...E) {
    (u(k) ? S : void 0)?.apply(this, E);
  };
  var J = /* @__PURE__ */ N(() => ol(O, d));
  L.__contextmenu = function(...E) {
    u(J)?.apply(this, E);
  };
  var B = R(L);
  return Ye(B, c), $(L), Nt(L, (E) => d = E, () => d), be((E) => I = wt(L, 1, "svelte-flow__pane svelte-flow__container", null, I, E), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: u(y)
    })
  ]), M(e, L), ce({
    get store() {
      return n();
    },
    set store(E) {
      n(E), p();
    },
    get panOnDrag() {
      return r();
    },
    set panOnDrag(E = !0) {
      r(E), p();
    },
    get selectionOnDrag() {
      return o();
    },
    set selectionOnDrag(E) {
      o(E), p();
    },
    get onpaneclick() {
      return i();
    },
    set onpaneclick(E) {
      i(E), p();
    },
    get onpanecontextmenu() {
      return s();
    },
    set onpanecontextmenu(E) {
      s(E), p();
    },
    get onselectionstart() {
      return a();
    },
    set onselectionstart(E) {
      a(E), p();
    },
    get onselectionend() {
      return l();
    },
    set onselectionend(E) {
      l(E), p();
    },
    get children() {
      return c();
    },
    set children(E) {
      c(E), p();
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
ie(
  bu,
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
var m0 = /* @__PURE__ */ U('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function Cu(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "children", 7);
  var o = m0();
  let i;
  var s = R(o);
  return Ye(s, r), $(o), be((a) => i = ft(o, "", i, a), [
    () => ({
      transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
    })
  ]), M(e, o), ce({
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
ie(Cu, { store: {}, children: {} }, [], [], !0);
function ku(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = Vp({
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
var y0 = /* @__PURE__ */ U('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-62ze0y"> </div>'), w0 = /* @__PURE__ */ U('<div class="a11y-hidden svelte-62ze0y"> </div> <div class="a11y-hidden svelte-62ze0y"> </div> <!>', 1);
const _0 = {
  hash: "svelte-62ze0y",
  code: ".a11y-hidden.svelte-62ze0y {display:none;}.a11y-live-msg.svelte-62ze0y {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function Eu(e, t) {
  le(t, !0), De(e, _0);
  let n = m(t, "store", 7);
  var r = w0(), o = ae(r), i = R(o, !0);
  $(o);
  var s = V(o, 2), a = R(s, !0);
  $(s);
  var l = V(s, 2);
  {
    var c = (d) => {
      var g = y0(), f = R(g, !0);
      $(g), be(() => {
        _e(g, "id", `${x0}-${n().flowId}`), He(f, n().ariaLiveMessage);
      }), M(d, g);
    };
    se(l, (d) => {
      n().disableKeyboardA11y || d(c);
    });
  }
  return be(() => {
    _e(o, "id", `${Su}-${n().flowId}`), He(i, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), _e(s, "id", `${Nu}-${n().flowId}`), He(a, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), M(e, r), ce({
    get store() {
      return n();
    },
    set store(d) {
      n(d), p();
    }
  });
}
ie(Eu, { store: {} }, [], [], !0);
const Su = "svelte-flow__node-desc", Nu = "svelte-flow__edge-desc", x0 = "svelte-flow__aria-live";
var b0 = /* @__PURE__ */ U("<div><!></div>");
function Pu(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "node", 7), o = m(t, "resizeObserver", 7), i = m(t, "nodeClickDistance", 7), s = m(t, "onnodeclick", 7), a = m(t, "onnodedrag", 7), l = m(t, "onnodedragstart", 7), c = m(t, "onnodedragstop", 7), d = m(t, "onnodepointerenter", 7), g = m(t, "onnodepointerleave", 7), f = m(t, "onnodepointermove", 7), h = m(t, "onnodecontextmenu", 7), v = /* @__PURE__ */ N(() => ut(r().data, () => ({}), !0)), y = /* @__PURE__ */ N(() => ut(r().selected, !1)), k = /* @__PURE__ */ N(() => r().draggable), w = /* @__PURE__ */ N(() => r().selectable), T = /* @__PURE__ */ N(() => ut(r().deletable, !0)), _ = /* @__PURE__ */ N(() => r().connectable), b = /* @__PURE__ */ N(() => r().focusable), S = /* @__PURE__ */ N(() => ut(r().hidden, !1)), O = /* @__PURE__ */ N(() => ut(r().dragging, !1)), L = /* @__PURE__ */ N(() => ut(r().style, "")), I = /* @__PURE__ */ N(() => r().class), Y = /* @__PURE__ */ N(() => ut(r().type, "default")), J = /* @__PURE__ */ N(() => r().parentId), B = /* @__PURE__ */ N(() => r().sourcePosition), E = /* @__PURE__ */ N(() => r().targetPosition), D = /* @__PURE__ */ N(() => ut(r().measured, () => ({ width: 0, height: 0 }), !0).width), x = /* @__PURE__ */ N(() => ut(r().measured, () => ({ width: 0, height: 0 }), !0).height), P = /* @__PURE__ */ N(() => r().initialWidth), C = /* @__PURE__ */ N(() => r().initialHeight), H = /* @__PURE__ */ N(() => r().width), z = /* @__PURE__ */ N(() => r().height), A = /* @__PURE__ */ N(() => r().dragHandle), F = /* @__PURE__ */ N(() => ut(r().internals.z, 0)), Z = /* @__PURE__ */ N(() => r().internals.positionAbsolute.x), G = /* @__PURE__ */ N(() => r().internals.positionAbsolute.y), ne = /* @__PURE__ */ N(() => r().internals.userNode), { id: ee } = r(), Q = /* @__PURE__ */ N(() => u(k) ?? n().nodesDraggable), X = /* @__PURE__ */ N(() => u(w) ?? n().elementsSelectable), j = /* @__PURE__ */ N(() => u(_) ?? n().nodesConnectable), q = /* @__PURE__ */ N(() => Wc(r())), ge = /* @__PURE__ */ N(() => !!r().internals.handleBounds), fe = /* @__PURE__ */ N(() => u(q) && u(ge)), re = /* @__PURE__ */ N(() => u(b) ?? n().nodesFocusable);
  function oe(me) {
    return n().parentLookup.has(me);
  }
  let de = /* @__PURE__ */ N(() => oe(ee)), te = /* @__PURE__ */ ke(null), he = null, ue = u(Y), pe = u(B), K = u(E), Ie = /* @__PURE__ */ N(() => n().nodeTypes[u(Y)] ?? Ys), Ae = /* @__PURE__ */ N(() => n().ariaLabelConfig);
  fr("svelteflow__node_connectable", {
    get value() {
      return u(j);
    }
  }), fr("svelteflow__node_id", ee);
  let Ke = /* @__PURE__ */ N(() => {
    const me = u(D) === void 0 ? u(H) ?? u(P) : u(H), Be = u(x) === void 0 ? u(z) ?? u(C) : u(z);
    if (!(me === void 0 && Be === void 0 && u(L) === void 0))
      return `${u(L)};${me ? `width:${en(me)};` : ""}${Be ? `height:${en(Be)};` : ""}`;
  });
  Ze(() => {
    (u(Y) !== ue || u(B) !== pe || u(E) !== K) && u(te) !== null && requestAnimationFrame(() => {
      u(te) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[ee, { id: ee, nodeElement: u(te), force: !0 }]]));
    }), ue = u(Y), pe = u(B), K = u(E);
  }), Ze(() => {
    o() && (!u(fe) || u(te) !== he) && (he && o().unobserve(he), u(te) && o().observe(u(te)), he = u(te));
  }), ii(() => {
    he && o()?.unobserve(he);
  });
  function Ve(me) {
    u(X) && (!n().selectNodesOnDrag || !u(Q) || n().nodeDragThreshold > 0) && n().handleNodeSelection(ee), s()?.({ node: u(ne), event: me });
  }
  function gt(me) {
    if (!(Gc(me) || n().disableKeyboardA11y))
      if (Bc.includes(me.key) && u(X)) {
        const Be = me.key === "Escape";
        n().handleNodeSelection(ee, Be, u(te));
      } else u(Q) && r().selected && Object.prototype.hasOwnProperty.call(jo, me.key) && (me.preventDefault(), n(
        n().ariaLiveMessage = u(Ae)["node.a11yDescription.ariaLiveMessage"]({
          direction: me.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(jo[me.key], me.shiftKey ? 4 : 1));
  }
  const qe = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !u(te)?.matches(":focus-visible"))
      return;
    const { width: me, height: Be, viewport: _t } = n();
    Rs(/* @__PURE__ */ new Map([[ee, r()]]), { x: 0, y: 0, width: me, height: Be }, [_t.x, _t.y, _t.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: _t.zoom });
  };
  var et = Te(), Je = ae(et);
  {
    var Qe = (me) => {
      var Be = b0();
      Ue(
        Be,
        (Xe, Tt) => ({
          "data-id": ee,
          class: [
            "svelte-flow__node",
            `svelte-flow__node-${u(Y)}`,
            u(I)
          ],
          style: u(Ke),
          onclick: Ve,
          onpointerenter: d() ? (tt) => d()({ node: u(ne), event: tt }) : void 0,
          onpointerleave: g() ? (tt) => g()({ node: u(ne), event: tt }) : void 0,
          onpointermove: f() ? (tt) => f()({ node: u(ne), event: tt }) : void 0,
          oncontextmenu: h() ? (tt) => h()({ node: u(ne), event: tt }) : void 0,
          onkeydown: u(re) ? gt : void 0,
          onfocus: u(re) ? qe : void 0,
          tabIndex: u(re) ? 0 : void 0,
          role: r().ariaRole ?? (u(re) ? "group" : void 0),
          "aria-roledescription": "node",
          "aria-describedby": n().disableKeyboardA11y ? void 0 : `${Su}-${n().flowId}`,
          ...r().domAttributes,
          [Sn]: Xe,
          [Zt]: Tt
        }),
        [
          () => ({
            dragging: u(O),
            selected: u(y),
            draggable: u(Q),
            connectable: u(j),
            selectable: u(X),
            nopan: u(Q),
            parent: u(de)
          }),
          () => ({
            "z-index": u(F),
            transform: `translate(${u(Z) ?? ""}px, ${u(G) ?? ""}px)`,
            visibility: u(q) ? "visible" : "hidden"
          })
        ]
      );
      var _t = R(Be);
      Ds(_t, () => u(Ie), (Xe, Tt) => {
        Tt(Xe, {
          get data() {
            return u(v);
          },
          get id() {
            return ee;
          },
          get selected() {
            return u(y);
          },
          get selectable() {
            return u(X);
          },
          get deletable() {
            return u(T);
          },
          get sourcePosition() {
            return u(B);
          },
          get targetPosition() {
            return u(E);
          },
          get zIndex() {
            return u(F);
          },
          get dragging() {
            return u(O);
          },
          get draggable() {
            return u(Q);
          },
          get dragHandle() {
            return u(A);
          },
          get parentId() {
            return u(J);
          },
          get type() {
            return u(Y);
          },
          get isConnectable() {
            return u(j);
          },
          get positionAbsoluteX() {
            return u(Z);
          },
          get positionAbsoluteY() {
            return u(G);
          },
          get width() {
            return u(H);
          },
          get height() {
            return u(z);
          }
        });
      }), $(Be), at(Be, (Xe, Tt) => ku?.(Xe, Tt), () => ({
        nodeId: ee,
        isSelectable: u(X),
        disabled: !u(Q),
        handleSelector: u(A),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (Xe, Tt, tt, Ft) => {
          a()?.({ event: Xe, targetNode: tt, nodes: Ft });
        },
        onDragStart: (Xe, Tt, tt, Ft) => {
          l()?.({ event: Xe, targetNode: tt, nodes: Ft });
        },
        onDragStop: (Xe, Tt, tt, Ft) => {
          c()?.({ event: Xe, targetNode: tt, nodes: Ft });
        },
        store: n()
      })), Nt(Be, (Xe) => W(te, Xe), () => u(te)), M(me, Be);
    };
    se(Je, (me) => {
      u(S) || me(Qe);
    });
  }
  return M(e, et), ce({
    get store() {
      return n();
    },
    set store(me) {
      n(me), p();
    },
    get node() {
      return r();
    },
    set node(me) {
      r(me), p();
    },
    get resizeObserver() {
      return o();
    },
    set resizeObserver(me) {
      o(me), p();
    },
    get nodeClickDistance() {
      return i();
    },
    set nodeClickDistance(me) {
      i(me), p();
    },
    get onnodeclick() {
      return s();
    },
    set onnodeclick(me) {
      s(me), p();
    },
    get onnodedrag() {
      return a();
    },
    set onnodedrag(me) {
      a(me), p();
    },
    get onnodedragstart() {
      return l();
    },
    set onnodedragstart(me) {
      l(me), p();
    },
    get onnodedragstop() {
      return c();
    },
    set onnodedragstop(me) {
      c(me), p();
    },
    get onnodepointerenter() {
      return d();
    },
    set onnodepointerenter(me) {
      d(me), p();
    },
    get onnodepointerleave() {
      return g();
    },
    set onnodepointerleave(me) {
      g(me), p();
    },
    get onnodepointermove() {
      return f();
    },
    set onnodepointermove(me) {
      f(me), p();
    },
    get onnodecontextmenu() {
      return h();
    },
    set onnodecontextmenu(me) {
      h(me), p();
    }
  });
}
ie(
  Pu,
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
var C0 = /* @__PURE__ */ U('<div class="svelte-flow__nodes"></div>');
function Tu(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "nodeClickDistance", 7), o = m(t, "onnodeclick", 7), i = m(t, "onnodecontextmenu", 7), s = m(t, "onnodepointerenter", 7), a = m(t, "onnodepointermove", 7), l = m(t, "onnodepointerleave", 7), c = m(t, "onnodedrag", 7), d = m(t, "onnodedragstart", 7), g = m(t, "onnodedragstop", 7);
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
  return ct(h, 21, () => n().visible.nodes.values(), (v) => v.id, (v, y) => {
    Pu(v, {
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
  }), $(h), M(e, h), ce({
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
      return c();
    },
    set onnodedrag(v) {
      c(v), p();
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
ie(
  Tu,
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
var k0 = /* @__PURE__ */ ve('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function Du(e, t) {
  le(t, !0);
  const n = m(t, "edge", 7), r = m(t, "store", 15), o = m(t, "onedgeclick", 7), i = m(t, "onedgecontextmenu", 7), s = m(t, "onedgepointerenter", 7), a = m(t, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ N(() => n().source), c = /* @__PURE__ */ N(() => n().target), d = /* @__PURE__ */ N(() => n().sourceX), g = /* @__PURE__ */ N(() => n().sourceY), f = /* @__PURE__ */ N(() => n().targetX), h = /* @__PURE__ */ N(() => n().targetY), v = /* @__PURE__ */ N(() => n().sourcePosition), y = /* @__PURE__ */ N(() => n().targetPosition), k = /* @__PURE__ */ N(() => ut(n().animated, !1)), w = /* @__PURE__ */ N(() => ut(n().selected, !1)), T = /* @__PURE__ */ N(() => n().label), _ = /* @__PURE__ */ N(() => n().labelStyle), b = /* @__PURE__ */ N(() => ut(n().data, () => ({}), !0)), S = /* @__PURE__ */ N(() => n().style), O = /* @__PURE__ */ N(() => n().interactionWidth), L = /* @__PURE__ */ N(() => ut(n().type, "default")), I = /* @__PURE__ */ N(() => n().sourceHandle), Y = /* @__PURE__ */ N(() => n().targetHandle), J = /* @__PURE__ */ N(() => n().markerStart), B = /* @__PURE__ */ N(() => n().markerEnd), E = /* @__PURE__ */ N(() => n().selectable), D = /* @__PURE__ */ N(() => n().focusable), x = /* @__PURE__ */ N(() => ut(n().deletable, !0)), P = /* @__PURE__ */ N(() => n().hidden), C = /* @__PURE__ */ N(() => n().zIndex), H = /* @__PURE__ */ N(() => n().class), z = /* @__PURE__ */ N(() => n().ariaLabel), A = null;
  const { id: F } = n();
  fr("svelteflow__edge_id", F);
  let Z = /* @__PURE__ */ N(() => u(E) ?? r().elementsSelectable), G = /* @__PURE__ */ N(() => u(D) ?? r().edgesFocusable), ne = /* @__PURE__ */ N(() => r().edgeTypes[u(L)] ?? Ws), ee = /* @__PURE__ */ N(() => u(J) ? `url('#${ts(u(J), r().flowId)}')` : void 0), Q = /* @__PURE__ */ N(() => u(B) ? `url('#${ts(u(B), r().flowId)}')` : void 0);
  function X(oe) {
    const de = r().edgeLookup.get(F);
    de && (u(Z) && r().handleEdgeSelection(F), o()?.({ event: oe, edge: de }));
  }
  function j(oe, de) {
    const te = r().edgeLookup.get(F);
    te && de({ event: oe, edge: te });
  }
  function q(oe) {
    if (!r().disableKeyboardA11y && Bc.includes(oe.key) && u(Z)) {
      const { unselectNodesAndEdges: de, addSelectedEdges: te } = r();
      oe.key === "Escape" ? (A?.blur(), de({ edges: [n()] })) : te([F]);
    }
  }
  var ge = Te(), fe = ae(ge);
  {
    var re = (oe) => {
      var de = k0();
      let te;
      var he = R(de);
      Ue(
        he,
        (pe) => ({
          class: ["svelte-flow__edge", u(H)],
          "data-id": F,
          onclick: X,
          oncontextmenu: i() ? (K) => {
            j(K, i());
          } : void 0,
          onpointerenter: s() ? (K) => {
            j(K, s());
          } : void 0,
          onpointerleave: a() ? (K) => {
            j(K, a());
          } : void 0,
          "aria-label": u(z) === null ? void 0 : u(z) ? u(z) : `Edge from ${u(l)} to ${u(c)}`,
          "aria-describedby": u(G) ? `${Nu}-${r().flowId}` : void 0,
          role: n().ariaRole ?? (u(G) ? "group" : "img"),
          "aria-roledescription": "edge",
          onkeydown: u(G) ? q : void 0,
          tabindex: u(G) ? 0 : void 0,
          ...n().domAttributes,
          [Sn]: pe
        }),
        [
          () => ({
            animated: u(k),
            selected: u(w),
            selectable: u(Z)
          })
        ]
      );
      var ue = R(he);
      Ds(ue, () => u(ne), (pe, K) => {
        K(pe, {
          get id() {
            return F;
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
            return u(g);
          },
          get targetX() {
            return u(f);
          },
          get targetY() {
            return u(h);
          },
          get sourcePosition() {
            return u(v);
          },
          get targetPosition() {
            return u(y);
          },
          get animated() {
            return u(k);
          },
          get selected() {
            return u(w);
          },
          get label() {
            return u(T);
          },
          get labelStyle() {
            return u(_);
          },
          get data() {
            return u(b);
          },
          get style() {
            return u(S);
          },
          get interactionWidth() {
            return u(O);
          },
          get selectable() {
            return u(Z);
          },
          get deletable() {
            return u(x);
          },
          get type() {
            return u(L);
          },
          get sourceHandleId() {
            return u(I);
          },
          get targetHandleId() {
            return u(Y);
          },
          get markerStart() {
            return u(ee);
          },
          get markerEnd() {
            return u(Q);
          }
        });
      }), $(he), Nt(he, (pe) => A = pe, () => A), $(de), be((pe) => te = ft(de, "", te, pe), [() => ({ "z-index": u(C) })]), M(oe, de);
    };
    se(fe, (oe) => {
      u(P) || oe(re);
    });
  }
  return M(e, ge), ce({
    get edge() {
      return n();
    },
    set edge(oe) {
      n(oe), p();
    },
    get store() {
      return r();
    },
    set store(oe) {
      r(oe), p();
    },
    get onedgeclick() {
      return o();
    },
    set onedgeclick(oe) {
      o(oe), p();
    },
    get onedgecontextmenu() {
      return i();
    },
    set onedgecontextmenu(oe) {
      i(oe), p();
    },
    get onedgepointerenter() {
      return s();
    },
    set onedgepointerenter(oe) {
      s(oe), p();
    },
    get onedgepointerleave() {
      return a();
    },
    set onedgepointerleave(oe) {
      a(oe), p();
    }
  });
}
ie(
  Du,
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
var E0 = /* @__PURE__ */ ve("<defs></defs>");
function Au(e, t) {
  le(t, !1);
  const n = Rt();
  uc();
  var r = E0();
  ct(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    Mu(o, $e(() => u(i)));
  }), $(r), M(e, r), ce();
}
ie(Au, {}, [], [], !0);
var S0 = /* @__PURE__ */ ve('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), N0 = /* @__PURE__ */ ve('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), P0 = /* @__PURE__ */ ve('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Mu(e, t) {
  le(t, !0);
  let n = m(t, "id", 7), r = m(t, "type", 7), o = m(t, "width", 7, 12.5), i = m(t, "height", 7, 12.5), s = m(t, "markerUnits", 7, "strokeWidth"), a = m(t, "orient", 7, "auto-start-reverse"), l = m(t, "color", 7), c = m(t, "strokeWidth", 7);
  var d = P0(), g = R(d);
  {
    var f = (v) => {
      var y = S0();
      be(() => {
        _e(y, "stroke", l()), _e(y, "stroke-width", c());
      }), M(v, y);
    }, h = (v, y) => {
      {
        var k = (w) => {
          var T = N0();
          be(() => {
            _e(T, "stroke", l()), _e(T, "stroke-width", c()), _e(T, "fill", l());
          }), M(w, T);
        };
        se(
          v,
          (w) => {
            r() === Yr.ArrowClosed && w(k);
          },
          y
        );
      }
    };
    se(g, (v) => {
      r() === Yr.Arrow ? v(f) : v(h, !1);
    });
  }
  return $(d), be(() => {
    _e(d, "id", n()), _e(d, "markerWidth", `${o()}`), _e(d, "markerHeight", `${i()}`), _e(d, "markerUnits", s()), _e(d, "orient", a());
  }), M(e, d), ce({
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
      return c();
    },
    set strokeWidth(v) {
      c(v), p();
    }
  });
}
ie(
  Mu,
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
var T0 = /* @__PURE__ */ U('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function Ou(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "onedgeclick", 7), o = m(t, "onedgecontextmenu", 7), i = m(t, "onedgepointerenter", 7), s = m(t, "onedgepointerleave", 7);
  var a = T0(), l = R(a), c = R(l);
  Au(c, {}), $(l);
  var d = V(l, 2);
  return ct(d, 17, () => n().visible.edges.values(), (g) => g.id, (g, f) => {
    Du(g, {
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
      set store(h) {
        n(h);
      }
    });
  }), $(a), M(e, a), ce({
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
ie(
  Ou,
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
var D0 = /* @__PURE__ */ U('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const A0 = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function Xs(e, t) {
  le(t, !0), De(e, A0);
  let n = m(t, "x", 7, 0), r = m(t, "y", 7, 0), o = m(t, "width", 7, 0), i = m(t, "height", 7, 0), s = m(t, "isVisible", 7, !0);
  var a = Te(), l = ae(a);
  {
    var c = (d) => {
      var g = D0();
      let f;
      be((h) => f = ft(g, "", f, h), [
        () => ({
          width: typeof o() == "string" ? o() : en(o()),
          height: typeof i() == "string" ? i() : en(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), M(d, g);
    };
    se(l, (d) => {
      s() && d(c);
    });
  }
  return M(e, a), ce({
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
ie(Xs, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
function M0(e, t, n) {
  const r = t().nodes.filter((o) => o.selected);
  n()?.({ nodes: r, event: e });
}
function O0(e, t, n) {
  const r = t().nodes.filter((o) => o.selected);
  n()?.({ nodes: r, event: e });
}
var L0 = /* @__PURE__ */ U("<div><!></div>");
const V0 = {
  hash: "svelte-16qgzgd",
  code: ".svelte-flow__selection-wrapper.svelte-16qgzgd {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}"
};
function Lu(e, t) {
  le(t, !0), De(e, V0);
  let n = m(t, "store", 15), r = m(t, "onnodedrag", 7), o = m(t, "onnodedragstart", 7), i = m(t, "onnodedragstop", 7), s = m(t, "onselectionclick", 7), a = m(t, "onselectioncontextmenu", 7), l = /* @__PURE__ */ ke(void 0);
  Ze(() => {
    n().disableKeyboardA11y || u(l)?.focus({ preventScroll: !0 });
  });
  let c = /* @__PURE__ */ N(() => n().selectionRectMode === "nodes" ? (n().nodes, lo(n().nodeLookup, { filter: (v) => !!v.selected })) : null);
  function d(v) {
    Object.prototype.hasOwnProperty.call(jo, v.key) && (v.preventDefault(), n().moveSelectedNodes(jo[v.key], v.shiftKey ? 4 : 1));
  }
  var g = Te(), f = ae(g);
  {
    var h = (v) => {
      var y = L0();
      y.__contextmenu = [M0, n, a], y.__click = [O0, n, s], y.__keydown = function(...T) {
        (n().disableKeyboardA11y ? void 0 : d)?.apply(this, T);
      };
      let k;
      var w = R(y);
      Xs(w, { width: "100%", height: "100%", x: 0, y: 0 }), $(y), at(y, (T, _) => ku?.(T, _), () => ({
        disabled: !1,
        store: n(),
        onDrag: (T, _, b, S) => {
          r()?.({ event: T, targetNode: null, nodes: S });
        },
        onDragStart: (T, _, b, S) => {
          o()?.({ event: T, targetNode: null, nodes: S });
        },
        onDragStop: (T, _, b, S) => {
          i()?.({ event: T, targetNode: null, nodes: S });
        }
      })), Nt(y, (T) => W(l, T), () => u(l)), be(
        (T) => {
          wt(y, 1, xn(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-16qgzgd"), _e(y, "role", n().disableKeyboardA11y ? void 0 : "button"), _e(y, "tabindex", n().disableKeyboardA11y ? void 0 : -1), k = ft(y, "", k, T);
        },
        [
          () => ({
            width: en(u(c).width),
            height: en(u(c).height),
            transform: `translate(${u(c).x ?? ""}px, ${u(c).y ?? ""}px)`
          })
        ]
      ), M(v, y);
    };
    se(f, (v) => {
      n().selectionRectMode === "nodes" && u(c) && cn(u(c).x) && cn(u(c).y) && v(h);
    });
  }
  return M(e, g), ce({
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
ie(
  Lu,
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
function H0(e) {
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
    const l = Array.isArray(r) ? r : [r], c = [a.metaKey, a.altKey, a.shiftKey, a.ctrlKey].reduce(
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
          if (c !== 0) continue;
        } else if (f !== void 0 && f?.[0]?.length > 0) {
          const T = Array.isArray(f) ? f : [f];
          let _ = !1;
          for (const b of T)
            if ((Array.isArray(b) ? b : [b]).reduce(
              (O, L) => O | H0(L),
              0
            ) === c) {
              _ = !0;
              break;
            }
          if (!_) continue;
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
      const { enabled: l = !0, type: c = "keydown" } = a;
      n && (!l || o !== c) ? s?.() : !n && l && (s = Ri(e, c, i)), n = l, o = c, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function it() {
  const e = /* @__PURE__ */ N(Rt), t = (i) => {
    const s = nl(i) ? i : u(e).nodeLookup.get(i.id), a = s.parentId ? cp(s.position, s.measured, s.parentId, u(e).nodeLookup, u(e).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return wr(l);
  };
  function n(i, s, a = { replace: !1 }) {
    u(e).nodes = nt(() => u(e).nodes).map((l) => {
      if (l.id === i) {
        const c = typeof s == "function" ? s(l) : s;
        return a?.replace && nl(c) ? c : { ...l, ...c };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    u(e).edges = nt(() => u(e).edges).map((l) => {
      if (l.id === i) {
        const c = typeof s == "function" ? s(l) : s;
        return a.replace && t0(c) ? c : { ...l, ...c };
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
    getNodes: (i) => i === void 0 ? u(e).nodes : al(u(e).nodeLookup, i),
    getEdge: (i) => u(e).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? u(e).edges : al(u(e).edgeLookup, i),
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
    getViewport: () => Nl(u(e).viewport),
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
        const g = u(e).nodeLookup.get(d.id);
        if (!g || !l && d.id === i.id)
          return !1;
        const f = wr(g), h = Wr(f, c);
        return s && h > 0 || h >= f.width * f.height || h >= c.width * c.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const c = qa(i) ? i : t(i);
      if (!c)
        return !1;
      const d = Wr(c, s);
      return a && d > 0 || d >= c.width * c.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: l } = await ip({
        nodesToRemove: i,
        edgesToRemove: s,
        nodes: u(e).nodes,
        edges: u(e).edges,
        onBeforeDelete: u(e).onbeforedelete
      });
      return a && (u(e).nodes = nt(() => u(e).nodes).filter((c) => !a.some(({ id: d }) => d === c.id))), l && (u(e).edges = nt(() => u(e).edges).filter((c) => !l.some(({ id: d }) => d === c.id))), { deletedNodes: a, deletedEdges: l };
    },
    screenToFlowPosition: (i, s = { snapToGrid: !0 }) => {
      if (!u(e).domNode)
        return i;
      const a = s.snapToGrid ? u(e).snapGrid : !1, { x: l, y: c, zoom: d } = u(e).viewport, { x: g, y: f } = u(e).domNode.getBoundingClientRect(), h = { x: i.x - g, y: i.y - f };
      return co(h, [l, c, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!u(e).domNode)
        return i;
      const { x: s, y: a, zoom: l } = u(e).viewport, { x: c, y: d } = u(e).domNode.getBoundingClientRect(), g = Xo(i, [s, a, l]);
      return { x: g.x + c, y: g.y + d };
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
    getNodesBounds: (i) => tp(i, {
      nodeLookup: u(e).nodeLookup,
      nodeOrigin: u(e).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(u(e).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
  };
}
function al(e, t) {
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
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "selectionKey", 7, "Shift"), o = m(t, "multiSelectionKey", 23, () => ir() ? "Meta" : "Control"), i = m(t, "deleteKey", 7, "Backspace"), s = m(t, "panActivationKey", 7, " "), a = m(t, "zoomActivationKey", 23, () => ir() ? "Meta" : "Control"), { deleteElements: l } = it();
  function c(y) {
    return y !== null && typeof y == "object";
  }
  function d(y) {
    return c(y) ? y.modifier || [] : [];
  }
  function g(y) {
    return y == null ? "" : c(y) ? y.key : y;
  }
  function f(y, k) {
    return (Array.isArray(y) ? y : [y]).map((T) => {
      const _ = g(T);
      return {
        key: _,
        modifier: d(T),
        enabled: _ !== null,
        callback: k
      };
    });
  }
  function h() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  async function v() {
    const y = n().nodes.filter((_) => _.selected), k = n().edges.filter((_) => _.selected), { deletedNodes: w, deletedEdges: T } = await l({ nodes: y, edges: k });
    (w.length > 0 || T.length > 0) && n().ondelete?.({ nodes: w, edges: T });
  }
  return ha("blur", ht, h), ha("contextmenu", ht, h), at(ht, (y, k) => Kt?.(y, k), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), at(ht, (y, k) => Kt?.(y, k), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), at(ht, (y, k) => Kt?.(y, k), () => ({
    trigger: f(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), at(ht, (y, k) => Kt?.(y, k), () => ({
    trigger: f(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), at(ht, (y, k) => Kt?.(y, k), () => ({
    trigger: f(i(), (y) => {
      !(y.originalEvent.ctrlKey || y.originalEvent.metaKey || y.originalEvent.shiftKey) && !Gc(y.originalEvent) && (n(n().deleteKeyPressed = !0, !0), v());
    }),
    type: "keydown"
  })), at(ht, (y, k) => Kt?.(y, k), () => ({
    trigger: f(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), at(ht, (y, k) => Kt?.(y, k), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), at(ht, (y, k) => Kt?.(y, k), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), at(ht, (y, k) => Kt?.(y, k), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), at(ht, (y, k) => Kt?.(y, k), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), ce({
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
ie(
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
var $0 = /* @__PURE__ */ ve('<path fill="none" class="svelte-flow__connection-path"></path>'), I0 = /* @__PURE__ */ ve('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function Hu(e, t) {
  le(t, !0);
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
        const [f] = Jc(g);
        return f;
      }
      case an.Straight: {
        const [f] = eu(g);
        return f;
      }
      case an.Step:
      case an.SmoothStep: {
        const [f] = Fs({
          ...g,
          borderRadius: r() === an.Step ? 0 : void 0
        });
        return f;
      }
    }
  });
  var l = Te(), c = ae(l);
  {
    var d = (g) => {
      var f = I0(), h = R(f), v = R(h);
      {
        var y = (w) => {
          var T = Te(), _ = ae(T);
          Ds(_, s, (b, S) => {
            S(b, {});
          }), M(w, T);
        }, k = (w) => {
          var T = $0();
          be(() => {
            _e(T, "d", u(a)), ft(T, i());
          }), M(w, T);
        };
        se(v, (w) => {
          s() ? w(y) : w(k, !1);
        });
      }
      $(h), $(f), be(
        (w) => {
          _e(f, "width", n().width), _e(f, "height", n().height), ft(f, o()), wt(h, 0, w);
        },
        [
          () => xn([
            "svelte-flow__connection",
            Qv(n().connection.isValid)
          ])
        ]
      ), M(g, f);
    };
    se(c, (g) => {
      n().connection.inProgress && g(d);
    });
  }
  return M(e, l), ce({
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
ie(
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
var z0 = /* @__PURE__ */ U("<div><!></div>");
function fo(e, t) {
  le(t, !0);
  let n = m(t, "position", 7, "top-right"), r = m(t, "style", 7), o = m(t, "class", 7), i = m(t, "children", 7), s = /* @__PURE__ */ Oe(t, [
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
  Ue(l, (d) => ({ class: d, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...u(a)]
  ]);
  var c = R(l);
  return Ye(c, () => i() ?? ot), $(l), M(e, l), ce({
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
ie(fo, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var R0 = /* @__PURE__ */ U('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function $u(e, t) {
  le(t, !0);
  let n = m(t, "proOptions", 7), r = m(t, "position", 7, "bottom-right");
  var o = Te(), i = ae(o);
  {
    var s = (a) => {
      fo(a, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, c) => {
          var d = R0();
          M(l, d);
        },
        $$slots: { default: !0 }
      });
    };
    se(i, (a) => {
      n()?.hideAttribution || a(s);
    });
  }
  return M(e, o), ce({
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
ie($u, { proOptions: {}, position: {} }, [], [], !0);
var B0 = /* @__PURE__ */ U("<div><!></div>");
const F0 = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function Iu(e, t) {
  le(t, !0), De(e, F0);
  let n = m(t, "width", 7), r = m(t, "height", 7), o = m(t, "colorMode", 7), i = m(t, "domNode", 15), s = m(t, "clientWidth", 15), a = m(t, "clientHeight", 15), l = m(t, "children", 7), c = m(t, "rest", 7), d = /* @__PURE__ */ N(() => c().class), g = /* @__PURE__ */ N(() => Of(c(), [
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
  var h = B0();
  Ue(
    h,
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
      ...u(g),
      [Zt]: y
    }),
    [
      () => ({ width: en(n()), height: en(r()) })
    ],
    "svelte-12wlba6"
  );
  var v = R(h);
  return Ye(v, () => l() ?? ot), $(h), Nt(h, (y) => i(y), () => i()), _a(h, "clientHeight", a), _a(h, "clientWidth", s), M(e, h), ce({
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
      return c();
    },
    set rest(y) {
      c(y), p();
    }
  });
}
ie(
  Iu,
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
var K0 = /* @__PURE__ */ U('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), q0 = /* @__PURE__ */ U("<!> <!>", 1), Z0 = /* @__PURE__ */ U("<!> <!> <!> <!> <!>", 1);
function zu(e, t) {
  le(t, !0);
  let n = m(t, "width", 7), r = m(t, "height", 7), o = m(t, "proOptions", 7), i = m(t, "selectionKey", 7), s = m(t, "deleteKey", 7), a = m(t, "panActivationKey", 7), l = m(t, "multiSelectionKey", 7), c = m(t, "zoomActivationKey", 7), d = m(t, "paneClickDistance", 7, 1), g = m(t, "nodeClickDistance", 7, 1), f = m(t, "onmovestart", 7), h = m(t, "onmoveend", 7), v = m(t, "onmove", 7), y = m(t, "oninit", 7), k = m(t, "onnodeclick", 7), w = m(t, "onnodecontextmenu", 7), T = m(t, "onnodedrag", 7), _ = m(t, "onnodedragstart", 7), b = m(t, "onnodedragstop", 7), S = m(t, "onnodepointerenter", 7), O = m(t, "onnodepointermove", 7), L = m(t, "onnodepointerleave", 7), I = m(t, "onselectionclick", 7), Y = m(t, "onselectioncontextmenu", 7), J = m(t, "onselectionstart", 7), B = m(t, "onselectionend", 7), E = m(t, "onedgeclick", 7), D = m(t, "onedgecontextmenu", 7), x = m(t, "onedgepointerenter", 7), P = m(t, "onedgepointerleave", 7), C = m(t, "onpaneclick", 7), H = m(t, "onpanecontextmenu", 7), z = m(t, "panOnScrollMode", 23, () => Gt.Free), A = m(t, "preventScrolling", 7, !0), F = m(t, "zoomOnScroll", 7, !0), Z = m(t, "zoomOnDoubleClick", 7, !0), G = m(t, "zoomOnPinch", 7, !0), ne = m(t, "panOnScroll", 7, !1), ee = m(t, "panOnDrag", 7, !0), Q = m(t, "selectionOnDrag", 7, !0), X = m(t, "connectionLineComponent", 7), j = m(t, "connectionLineStyle", 7), q = m(t, "connectionLineContainerStyle", 7), ge = m(t, "connectionLineType", 23, () => an.Bezier), fe = m(t, "attributionPosition", 7), re = m(t, "children", 7), oe = m(t, "nodes", 31, () => Mt([])), de = m(t, "edges", 31, () => Mt([])), te = m(t, "viewport", 31, () => {
  }), he = /* @__PURE__ */ Oe(t, [
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
  ]), ue = _u({
    props: he,
    width: n(),
    height: r(),
    get nodes() {
      return oe();
    },
    set nodes(K) {
      oe(K);
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
  const pe = Dn(Go);
  return pe && pe.setStore && pe.setStore(ue), fr(Go, {
    provider: !1,
    getStore() {
      return ue;
    }
  }), Ze(() => {
    const K = { nodes: ue.selectedNodes, edges: ue.selectedEdges };
    nt(() => t.onselectionchange)?.(K);
    for (const Ie of ue.selectionChangeHandlers.values())
      Ie(K);
  }), ii(() => {
    ue.reset();
  }), Iu(e, {
    get colorMode() {
      return ue.colorMode;
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
      return ue.domNode;
    },
    set domNode(K) {
      ue.domNode = K;
    },
    get clientWidth() {
      return ue.width;
    },
    set clientWidth(K) {
      ue.width = K;
    },
    get clientHeight() {
      return ue.height;
    },
    set clientHeight(K) {
      ue.height = K;
    },
    children: (K, Ie) => {
      var Ae = Z0(), Le = ae(Ae);
      Vu(Le, {
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
          return ue;
        },
        set store(et) {
          ue = et;
        }
      });
      var Ke = V(Le, 2);
      xu(Ke, {
        get panOnScrollMode() {
          return z();
        },
        get preventScrolling() {
          return A();
        },
        get zoomOnScroll() {
          return F();
        },
        get zoomOnDoubleClick() {
          return Z();
        },
        get zoomOnPinch() {
          return G();
        },
        get panOnScroll() {
          return ne();
        },
        get panOnDrag() {
          return ee();
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
          return ue;
        },
        set store(et) {
          ue = et;
        },
        children: (et, Je) => {
          bu(et, {
            get onpaneclick() {
              return C();
            },
            get onpanecontextmenu() {
              return H();
            },
            get onselectionstart() {
              return J();
            },
            get onselectionend() {
              return B();
            },
            get panOnDrag() {
              return ee();
            },
            get selectionOnDrag() {
              return Q();
            },
            get store() {
              return ue;
            },
            set store(Qe) {
              ue = Qe;
            },
            children: (Qe, me) => {
              var Be = q0(), _t = ae(Be);
              Cu(_t, {
                get store() {
                  return ue;
                },
                set store(on) {
                  ue = on;
                },
                children: (on, r_) => {
                  var ta = K0(), na = V(ae(ta), 2);
                  Ou(na, {
                    get onedgeclick() {
                      return E();
                    },
                    get onedgecontextmenu() {
                      return D();
                    },
                    get onedgepointerenter() {
                      return x();
                    },
                    get onedgepointerleave() {
                      return P();
                    },
                    get store() {
                      return ue;
                    },
                    set store(Bn) {
                      ue = Bn;
                    }
                  });
                  var ra = V(na, 4);
                  Hu(ra, {
                    get type() {
                      return ge();
                    },
                    get LineComponent() {
                      return X();
                    },
                    get containerStyle() {
                      return q();
                    },
                    get style() {
                      return j();
                    },
                    get store() {
                      return ue;
                    },
                    set store(Bn) {
                      ue = Bn;
                    }
                  });
                  var oa = V(ra, 2);
                  Tu(oa, {
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
                      return S();
                    },
                    get onnodepointermove() {
                      return O();
                    },
                    get onnodepointerleave() {
                      return L();
                    },
                    get onnodedrag() {
                      return T();
                    },
                    get onnodedragstart() {
                      return _();
                    },
                    get onnodedragstop() {
                      return b();
                    },
                    get store() {
                      return ue;
                    },
                    set store(Bn) {
                      ue = Bn;
                    }
                  });
                  var $d = V(oa, 2);
                  Lu($d, {
                    get onselectionclick() {
                      return I();
                    },
                    get onselectioncontextmenu() {
                      return Y();
                    },
                    get onnodedrag() {
                      return T();
                    },
                    get onnodedragstart() {
                      return _();
                    },
                    get onnodedragstop() {
                      return b();
                    },
                    get store() {
                      return ue;
                    },
                    set store(Bn) {
                      ue = Bn;
                    }
                  }), ye(2), M(on, ta);
                },
                $$slots: { default: !0 }
              });
              var Xe = V(_t, 2);
              const Tt = /* @__PURE__ */ N(() => !!(ue.selectionRect && ue.selectionRectMode === "user")), tt = /* @__PURE__ */ N(() => ue.selectionRect?.width), Ft = /* @__PURE__ */ N(() => ue.selectionRect?.height), wi = /* @__PURE__ */ N(() => ue.selectionRect?.x), Rn = /* @__PURE__ */ N(() => ue.selectionRect?.y);
              Xs(Xe, {
                get isVisible() {
                  return u(Tt);
                },
                get width() {
                  return u(tt);
                },
                get height() {
                  return u(Ft);
                },
                get x() {
                  return u(wi);
                },
                get y() {
                  return u(Rn);
                }
              }), M(Qe, Be);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var Ve = V(Ke, 2);
      $u(Ve, {
        get proOptions() {
          return o();
        },
        get position() {
          return fe();
        }
      });
      var gt = V(Ve, 2);
      Eu(gt, {
        get store() {
          return ue;
        }
      });
      var qe = V(gt, 2);
      Ye(qe, () => re() ?? ot), M(K, Ae);
    },
    $$slots: { default: !0 }
  }), ce({
    get width() {
      return n();
    },
    set width(K) {
      n(K), p();
    },
    get height() {
      return r();
    },
    set height(K) {
      r(K), p();
    },
    get proOptions() {
      return o();
    },
    set proOptions(K) {
      o(K), p();
    },
    get selectionKey() {
      return i();
    },
    set selectionKey(K) {
      i(K), p();
    },
    get deleteKey() {
      return s();
    },
    set deleteKey(K) {
      s(K), p();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(K) {
      a(K), p();
    },
    get multiSelectionKey() {
      return l();
    },
    set multiSelectionKey(K) {
      l(K), p();
    },
    get zoomActivationKey() {
      return c();
    },
    set zoomActivationKey(K) {
      c(K), p();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(K = 1) {
      d(K), p();
    },
    get nodeClickDistance() {
      return g();
    },
    set nodeClickDistance(K = 1) {
      g(K), p();
    },
    get onmovestart() {
      return f();
    },
    set onmovestart(K) {
      f(K), p();
    },
    get onmoveend() {
      return h();
    },
    set onmoveend(K) {
      h(K), p();
    },
    get onmove() {
      return v();
    },
    set onmove(K) {
      v(K), p();
    },
    get oninit() {
      return y();
    },
    set oninit(K) {
      y(K), p();
    },
    get onnodeclick() {
      return k();
    },
    set onnodeclick(K) {
      k(K), p();
    },
    get onnodecontextmenu() {
      return w();
    },
    set onnodecontextmenu(K) {
      w(K), p();
    },
    get onnodedrag() {
      return T();
    },
    set onnodedrag(K) {
      T(K), p();
    },
    get onnodedragstart() {
      return _();
    },
    set onnodedragstart(K) {
      _(K), p();
    },
    get onnodedragstop() {
      return b();
    },
    set onnodedragstop(K) {
      b(K), p();
    },
    get onnodepointerenter() {
      return S();
    },
    set onnodepointerenter(K) {
      S(K), p();
    },
    get onnodepointermove() {
      return O();
    },
    set onnodepointermove(K) {
      O(K), p();
    },
    get onnodepointerleave() {
      return L();
    },
    set onnodepointerleave(K) {
      L(K), p();
    },
    get onselectionclick() {
      return I();
    },
    set onselectionclick(K) {
      I(K), p();
    },
    get onselectioncontextmenu() {
      return Y();
    },
    set onselectioncontextmenu(K) {
      Y(K), p();
    },
    get onselectionstart() {
      return J();
    },
    set onselectionstart(K) {
      J(K), p();
    },
    get onselectionend() {
      return B();
    },
    set onselectionend(K) {
      B(K), p();
    },
    get onedgeclick() {
      return E();
    },
    set onedgeclick(K) {
      E(K), p();
    },
    get onedgecontextmenu() {
      return D();
    },
    set onedgecontextmenu(K) {
      D(K), p();
    },
    get onedgepointerenter() {
      return x();
    },
    set onedgepointerenter(K) {
      x(K), p();
    },
    get onedgepointerleave() {
      return P();
    },
    set onedgepointerleave(K) {
      P(K), p();
    },
    get onpaneclick() {
      return C();
    },
    set onpaneclick(K) {
      C(K), p();
    },
    get onpanecontextmenu() {
      return H();
    },
    set onpanecontextmenu(K) {
      H(K), p();
    },
    get panOnScrollMode() {
      return z();
    },
    set panOnScrollMode(K = Gt.Free) {
      z(K), p();
    },
    get preventScrolling() {
      return A();
    },
    set preventScrolling(K = !0) {
      A(K), p();
    },
    get zoomOnScroll() {
      return F();
    },
    set zoomOnScroll(K = !0) {
      F(K), p();
    },
    get zoomOnDoubleClick() {
      return Z();
    },
    set zoomOnDoubleClick(K = !0) {
      Z(K), p();
    },
    get zoomOnPinch() {
      return G();
    },
    set zoomOnPinch(K = !0) {
      G(K), p();
    },
    get panOnScroll() {
      return ne();
    },
    set panOnScroll(K = !1) {
      ne(K), p();
    },
    get panOnDrag() {
      return ee();
    },
    set panOnDrag(K = !0) {
      ee(K), p();
    },
    get selectionOnDrag() {
      return Q();
    },
    set selectionOnDrag(K = !0) {
      Q(K), p();
    },
    get connectionLineComponent() {
      return X();
    },
    set connectionLineComponent(K) {
      X(K), p();
    },
    get connectionLineStyle() {
      return j();
    },
    set connectionLineStyle(K) {
      j(K), p();
    },
    get connectionLineContainerStyle() {
      return q();
    },
    set connectionLineContainerStyle(K) {
      q(K), p();
    },
    get connectionLineType() {
      return ge();
    },
    set connectionLineType(K = an.Bezier) {
      ge(K), p();
    },
    get attributionPosition() {
      return fe();
    },
    set attributionPosition(K) {
      fe(K), p();
    },
    get children() {
      return re();
    },
    set children(K) {
      re(K), p();
    },
    get nodes() {
      return oe();
    },
    set nodes(K = []) {
      oe(K), p();
    },
    get edges() {
      return de();
    },
    set edges(K = []) {
      de(K), p();
    },
    get viewport() {
      return te();
    },
    set viewport(K = void 0) {
      te(K), p();
    }
  });
}
ie(
  zu,
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
function Ru(e, t) {
  le(t, !0);
  let n = m(t, "children", 7), r = /* @__PURE__ */ ke(_u({ props: {}, nodes: [], edges: [] }));
  fr(Go, {
    provider: !0,
    getStore() {
      return u(r);
    },
    setStore: (s) => {
      W(r, s);
    }
  }), ii(() => {
    u(r).reset();
  });
  var o = Te(), i = ae(o);
  return Ye(i, () => n() ?? ot), M(e, o), ce({
    get children() {
      return n();
    },
    set children(s) {
      n(s), p();
    }
  });
}
ie(Ru, { children: {} }, [], [], !0);
var Y0 = /* @__PURE__ */ U("<button><!></button>");
function Mr(e, t) {
  le(t, !0);
  let n = m(t, "class", 7), r = m(t, "bgColor", 7), o = m(t, "bgColorHover", 7), i = m(t, "color", 7), s = m(t, "colorHover", 7), a = m(t, "borderColor", 7), l = m(t, "onclick", 7), c = m(t, "children", 7), d = /* @__PURE__ */ Oe(t, [
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
  Ue(
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
  var f = R(g);
  return Ye(f, () => c() ?? ot), $(g), M(e, g), ce({
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
      return c();
    },
    set children(h) {
      c(h), p();
    }
  });
}
ie(
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
var W0 = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function Bu(e) {
  var t = W0();
  M(e, t);
}
ie(Bu, {}, [], [], !0);
var X0 = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Fu(e) {
  var t = X0();
  M(e, t);
}
ie(Fu, {}, [], [], !0);
var j0 = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Ku(e) {
  var t = j0();
  M(e, t);
}
ie(Ku, {}, [], [], !0);
var G0 = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function qu(e) {
  var t = G0();
  M(e, t);
}
ie(qu, {}, [], [], !0);
var U0 = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function Zu(e) {
  var t = U0();
  M(e, t);
}
ie(Zu, {}, [], [], !0);
var J0 = /* @__PURE__ */ U("<!> <!>", 1), Q0 = /* @__PURE__ */ U("<!> <!> <!> <!> <!> <!>", 1);
function Yu(e, t) {
  le(t, !0);
  let n = m(t, "position", 7, "bottom-left"), r = m(t, "orientation", 7, "vertical"), o = m(t, "showZoom", 7, !0), i = m(t, "showFitView", 7, !0), s = m(t, "showLock", 7, !0), a = m(t, "style", 7), l = m(t, "class", 7), c = m(t, "buttonBgColor", 7), d = m(t, "buttonBgColorHover", 7), g = m(t, "buttonColor", 7), f = m(t, "buttonColorHover", 7), h = m(t, "buttonBorderColor", 7), v = m(t, "fitViewOptions", 7), y = m(t, "children", 7), k = m(t, "before", 7), w = m(t, "after", 7), T = /* @__PURE__ */ Oe(t, [
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
  ]), _ = /* @__PURE__ */ N(Rt);
  const b = {
    bgColor: c(),
    bgColorHover: d(),
    color: g(),
    colorHover: f(),
    borderColor: h()
  };
  let S = /* @__PURE__ */ N(() => u(_).nodesDraggable || u(_).nodesConnectable || u(_).elementsSelectable), O = /* @__PURE__ */ N(() => u(_).viewport.zoom <= u(_).minZoom), L = /* @__PURE__ */ N(() => u(_).viewport.zoom >= u(_).maxZoom), I = /* @__PURE__ */ N(() => u(_).ariaLabelConfig), Y = /* @__PURE__ */ N(() => r() === "horizontal" ? "horizontal" : "vertical");
  const J = () => {
    u(_).zoomIn();
  }, B = () => {
    u(_).zoomOut();
  }, E = () => {
    u(_).fitView(v());
  }, D = () => {
    let P = !u(S);
    u(_).nodesDraggable = P, u(_).nodesConnectable = P, u(_).elementsSelectable = P;
  }, x = /* @__PURE__ */ N(() => [
    "svelte-flow__controls",
    u(Y),
    l()
  ]);
  return fo(e, $e(
    {
      get class() {
        return u(x);
      },
      get position() {
        return n();
      },
      "data-testid": "svelte-flow__controls",
      get "aria-label"() {
        return u(I)["controls.ariaLabel"];
      },
      get style() {
        return a();
      }
    },
    () => T,
    {
      children: (P, C) => {
        var H = Q0(), z = ae(H);
        {
          var A = (fe) => {
            var re = Te(), oe = ae(re);
            Ye(oe, k), M(fe, re);
          };
          se(z, (fe) => {
            k() && fe(A);
          });
        }
        var F = V(z, 2);
        {
          var Z = (fe) => {
            var re = J0(), oe = ae(re);
            Mr(oe, $e(
              {
                onclick: J,
                class: "svelte-flow__controls-zoomin",
                get title() {
                  return u(I)["controls.zoomIn.ariaLabel"];
                },
                get "aria-label"() {
                  return u(I)["controls.zoomIn.ariaLabel"];
                },
                get disabled() {
                  return u(L);
                }
              },
              () => b,
              {
                children: (te, he) => {
                  Bu(te);
                },
                $$slots: { default: !0 }
              }
            ));
            var de = V(oe, 2);
            Mr(de, $e(
              {
                onclick: B,
                class: "svelte-flow__controls-zoomout",
                get title() {
                  return u(I)["controls.zoomOut.ariaLabel"];
                },
                get "aria-label"() {
                  return u(I)["controls.zoomOut.ariaLabel"];
                },
                get disabled() {
                  return u(O);
                }
              },
              () => b,
              {
                children: (te, he) => {
                  Fu(te);
                },
                $$slots: { default: !0 }
              }
            )), M(fe, re);
          };
          se(F, (fe) => {
            o() && fe(Z);
          });
        }
        var G = V(F, 2);
        {
          var ne = (fe) => {
            Mr(fe, $e(
              {
                class: "svelte-flow__controls-fitview",
                onclick: E,
                get title() {
                  return u(I)["controls.fitView.ariaLabel"];
                },
                get "aria-label"() {
                  return u(I)["controls.fitView.ariaLabel"];
                }
              },
              () => b,
              {
                children: (re, oe) => {
                  Ku(re);
                },
                $$slots: { default: !0 }
              }
            ));
          };
          se(G, (fe) => {
            i() && fe(ne);
          });
        }
        var ee = V(G, 2);
        {
          var Q = (fe) => {
            Mr(fe, $e(
              {
                class: "svelte-flow__controls-interactive",
                onclick: D,
                get title() {
                  return u(I)["controls.interactive.ariaLabel"];
                },
                get "aria-label"() {
                  return u(I)["controls.interactive.ariaLabel"];
                }
              },
              () => b,
              {
                children: (re, oe) => {
                  var de = Te(), te = ae(de);
                  {
                    var he = (pe) => {
                      Zu(pe);
                    }, ue = (pe) => {
                      qu(pe);
                    };
                    se(te, (pe) => {
                      u(S) ? pe(he) : pe(ue, !1);
                    });
                  }
                  M(re, de);
                },
                $$slots: { default: !0 }
              }
            ));
          };
          se(ee, (fe) => {
            s() && fe(Q);
          });
        }
        var X = V(ee, 2);
        {
          var j = (fe) => {
            var re = Te(), oe = ae(re);
            Ye(oe, y), M(fe, re);
          };
          se(X, (fe) => {
            y() && fe(j);
          });
        }
        var q = V(X, 2);
        {
          var ge = (fe) => {
            var re = Te(), oe = ae(re);
            Ye(oe, w), M(fe, re);
          };
          se(q, (fe) => {
            w() && fe(ge);
          });
        }
        M(P, H);
      },
      $$slots: { default: !0 }
    }
  )), ce({
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
      return c();
    },
    set buttonBgColor(P) {
      c(P), p();
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
ie(
  Yu,
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
var em = /* @__PURE__ */ ve("<circle></circle>");
function Wu(e, t) {
  le(t, !0);
  let n = m(t, "radius", 7), r = m(t, "class", 7);
  var o = em();
  return be(() => {
    _e(o, "cx", n()), _e(o, "cy", n()), _e(o, "r", n()), wt(o, 0, xn(["svelte-flow__background-pattern", "dots", r()]));
  }), M(e, o), ce({
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
ie(Wu, { radius: {}, class: {} }, [], [], !0);
var tm = /* @__PURE__ */ ve("<path></path>");
function Xu(e, t) {
  le(t, !0);
  let n = m(t, "lineWidth", 7), r = m(t, "dimensions", 7), o = m(t, "variant", 7), i = m(t, "class", 7);
  var s = tm();
  return be(() => {
    _e(s, "stroke-width", n()), _e(s, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), wt(s, 0, xn(["svelte-flow__background-pattern", o(), i()]));
  }), M(e, s), ce({
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
ie(Xu, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const nm = {
  [un.Dots]: 1,
  [un.Lines]: 1,
  [un.Cross]: 6
};
var rm = /* @__PURE__ */ ve('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function ju(e, t) {
  le(t, !0);
  let n = m(t, "id", 7), r = m(t, "variant", 23, () => un.Dots), o = m(t, "gap", 7, 20), i = m(t, "size", 7), s = m(t, "lineWidth", 7, 1), a = m(t, "bgColor", 7), l = m(t, "patternColor", 7), c = m(t, "patternClass", 7), d = m(t, "class", 7), g = /* @__PURE__ */ N(Rt), f = /* @__PURE__ */ N(() => r() === un.Dots), h = /* @__PURE__ */ N(() => r() === un.Cross), v = /* @__PURE__ */ N(() => Array.isArray(o()) ? o() : [o(), o()]), y = /* @__PURE__ */ N(() => `background-pattern-${u(g).flowId}-${n() ?? ""}`), k = /* @__PURE__ */ N(() => [
    u(v)[0] * u(g).viewport.zoom || 1,
    u(v)[1] * u(g).viewport.zoom || 1
  ]), w = /* @__PURE__ */ N(() => (i() ?? nm[r()]) * u(g).viewport.zoom), T = /* @__PURE__ */ N(() => u(h) ? [u(w), u(w)] : u(k)), _ = /* @__PURE__ */ N(() => u(f) ? [u(w) / 2, u(w) / 2] : [
    u(T)[0] / 2,
    u(T)[1] / 2
  ]);
  var b = rm();
  let S;
  var O = R(b), L = R(O);
  {
    var I = (B) => {
      const E = /* @__PURE__ */ N(() => u(w) / 2);
      Wu(B, {
        get radius() {
          return u(E);
        },
        get class() {
          return c();
        }
      });
    }, Y = (B) => {
      Xu(B, {
        get dimensions() {
          return u(T);
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
    se(L, (B) => {
      u(f) ? B(I) : B(Y, !1);
    });
  }
  $(O);
  var J = V(O);
  return $(b), be(
    (B) => {
      wt(b, 0, xn([
        "svelte-flow__background",
        "svelte-flow__container",
        d()
      ])), S = ft(b, "", S, B), _e(O, "id", u(y)), _e(O, "x", u(g).viewport.x % u(k)[0]), _e(O, "y", u(g).viewport.y % u(k)[1]), _e(O, "width", u(k)[0]), _e(O, "height", u(k)[1]), _e(O, "patternTransform", `translate(-${u(_)[0]},-${u(_)[1]})`), _e(J, "fill", `url(#${u(y)})`);
    },
    [
      () => ({
        "--xy-background-color-props": a(),
        "--xy-background-pattern-color-props": l()
      })
    ]
  ), M(e, b), ce({
    get id() {
      return n();
    },
    set id(B) {
      n(B), p();
    },
    get variant() {
      return r();
    },
    set variant(B = un.Dots) {
      r(B), p();
    },
    get gap() {
      return o();
    },
    set gap(B = 20) {
      o(B), p();
    },
    get size() {
      return i();
    },
    set size(B) {
      i(B), p();
    },
    get lineWidth() {
      return s();
    },
    set lineWidth(B = 1) {
      s(B), p();
    },
    get bgColor() {
      return a();
    },
    set bgColor(B) {
      a(B), p();
    },
    get patternColor() {
      return l();
    },
    set patternColor(B) {
      l(B), p();
    },
    get patternClass() {
      return c();
    },
    set patternClass(B) {
      c(B), p();
    },
    get class() {
      return d();
    },
    set class(B) {
      d(B), p();
    }
  });
}
ie(
  ju,
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
var om = /* @__PURE__ */ ve("<rect></rect>");
function Gu(e, t) {
  le(t, !0);
  let n = m(t, "x", 7), r = m(t, "y", 7), o = m(t, "width", 7), i = m(t, "height", 7), s = m(t, "borderRadius", 7, 5), a = m(t, "color", 7), l = m(t, "shapeRendering", 7), c = m(t, "strokeColor", 7), d = m(t, "strokeWidth", 7, 2), g = m(t, "selected", 7), f = m(t, "class", 7);
  var h = om();
  let v, y;
  return be(
    (k, w) => {
      v = wt(h, 0, xn(["svelte-flow__minimap-node", f()]), null, v, k), _e(h, "x", n()), _e(h, "y", r()), _e(h, "rx", s()), _e(h, "ry", s()), _e(h, "width", o()), _e(h, "height", i()), _e(h, "shape-rendering", l()), y = ft(h, "", y, w);
    },
    [
      () => ({ selected: g() }),
      () => ({
        fill: a(),
        stroke: c(),
        "stroke-width": d()
      })
    ]
  ), M(e, h), ce({
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
      return c();
    },
    set strokeColor(k) {
      c(k), p();
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
ie(
  Gu,
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
var sm = /* @__PURE__ */ ve("<title> </title>"), am = /* @__PURE__ */ ve('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), lm = /* @__PURE__ */ U('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function Uu(e, t) {
  le(t, !0);
  let n = m(t, "position", 7, "bottom-right"), r = m(t, "ariaLabel", 7), o = m(t, "nodeStrokeColor", 7, "transparent"), i = m(t, "nodeColor", 7), s = m(t, "nodeClass", 7, ""), a = m(t, "nodeBorderRadius", 7, 5), l = m(t, "nodeStrokeWidth", 7, 2), c = m(t, "bgColor", 7), d = m(t, "maskColor", 7), g = m(t, "maskStrokeColor", 7), f = m(t, "maskStrokeWidth", 7), h = m(t, "width", 7, 200), v = m(t, "height", 7, 150), y = m(t, "pannable", 7, !0), k = m(t, "zoomable", 7, !0), w = m(t, "inversePan", 7), T = m(t, "zoomStep", 7), _ = m(t, "class", 7), b = /* @__PURE__ */ Oe(t, [
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
  ]), S = /* @__PURE__ */ N(Rt), O = /* @__PURE__ */ N(() => u(S).ariaLabelConfig);
  const L = i() === void 0 ? void 0 : Ai(i()), I = Ai(o()), Y = Ai(s()), J = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let B = /* @__PURE__ */ N(() => `svelte-flow__minimap-desc-${u(S).flowId}`), E = /* @__PURE__ */ N(() => ({
    x: -u(S).viewport.x / u(S).viewport.zoom,
    y: -u(S).viewport.y / u(S).viewport.zoom,
    width: u(S).width / u(S).viewport.zoom,
    height: u(S).height / u(S).viewport.zoom
  })), D = /* @__PURE__ */ N(() => u(S).nodeLookup.size > 0 ? Yc(lo(u(S).nodeLookup, { filter: (q) => !q.hidden }), u(E)) : u(E)), x = /* @__PURE__ */ N(() => u(D).width / h()), P = /* @__PURE__ */ N(() => u(D).height / v()), C = /* @__PURE__ */ N(() => Math.max(u(x), u(P))), H = /* @__PURE__ */ N(() => u(C) * h()), z = /* @__PURE__ */ N(() => u(C) * v()), A = /* @__PURE__ */ N(() => 5 * u(C)), F = /* @__PURE__ */ N(() => u(D).x - (u(H) - u(D).width) / 2 - u(A)), Z = /* @__PURE__ */ N(() => u(D).y - (u(z) - u(D).height) / 2 - u(A)), G = /* @__PURE__ */ N(() => u(H) + u(A) * 2), ne = /* @__PURE__ */ N(() => u(z) + u(A) * 2);
  const ee = () => u(C);
  var Q = lm(), X = ae(Q);
  const j = /* @__PURE__ */ N(() => ["svelte-flow__minimap", _()]);
  return Uf(X, () => ({ "--xy-minimap-background-color-props": c() })), fo(X.lastChild, $e(
    {
      get position() {
        return n();
      },
      get class() {
        return u(j);
      },
      "data-testid": "svelte-flow__minimap"
    },
    () => b,
    {
      children: (q, ge) => {
        var fe = Te(), re = ae(fe);
        {
          var oe = (de) => {
            var te = am();
            let he;
            var ue = R(te);
            {
              var pe = (Ae) => {
                var Le = sm(), Ke = R(Le, !0);
                $(Le), be(() => {
                  _e(Le, "id", u(B)), He(Ke, r() ?? u(O)["minimap.ariaLabel"]);
                }), M(Ae, Le);
              };
              se(ue, (Ae) => {
                (r() ?? u(O)["minimap.ariaLabel"]) && Ae(pe);
              });
            }
            var K = V(ue);
            ct(K, 17, () => u(S).nodes, (Ae) => Ae.id, (Ae, Le) => {
              var Ke = Te();
              const Ve = /* @__PURE__ */ N(() => u(S).nodeLookup.get(u(Le).id));
              var gt = ae(Ke);
              {
                var qe = (et) => {
                  const Je = /* @__PURE__ */ N(() => zn(u(Ve))), Qe = /* @__PURE__ */ N(() => L?.(u(Ve))), me = /* @__PURE__ */ N(() => I(u(Ve))), Be = /* @__PURE__ */ N(() => Y(u(Ve)));
                  Gu(et, $e(
                    {
                      get x() {
                        return u(Ve).internals.positionAbsolute.x;
                      },
                      get y() {
                        return u(Ve).internals.positionAbsolute.y;
                      }
                    },
                    () => u(Je),
                    {
                      get selected() {
                        return u(Ve).selected;
                      },
                      get color() {
                        return u(Qe);
                      },
                      get borderRadius() {
                        return a();
                      },
                      get strokeColor() {
                        return u(me);
                      },
                      get strokeWidth() {
                        return l();
                      },
                      get shapeRendering() {
                        return J;
                      },
                      get class() {
                        return u(Be);
                      }
                    }
                  ));
                };
                se(gt, (et) => {
                  u(Ve) && Wc(u(Ve)) && et(qe);
                });
              }
              M(Ae, Ke);
            });
            var Ie = V(K);
            $(te), at(te, (Ae, Le) => im?.(Ae, Le), () => ({
              store: u(S),
              panZoom: u(S).panZoom,
              getViewScale: ee,
              translateExtent: u(S).translateExtent,
              width: u(S).width,
              height: u(S).height,
              inversePan: w(),
              zoomStep: T(),
              pannable: y(),
              zoomable: k()
            })), be(
              (Ae) => {
                _e(te, "width", h()), _e(te, "height", v()), _e(te, "viewBox", `${u(F) ?? ""} ${u(Z) ?? ""} ${u(G) ?? ""} ${u(ne) ?? ""}`), _e(te, "aria-labelledby", u(B)), he = ft(te, "", he, Ae), _e(Ie, "d", `M${u(F) - u(A)},${u(Z) - u(A)}h${u(G) + u(A) * 2}v${u(ne) + u(A) * 2}h${-u(G) - u(A) * 2}z
      M${u(E).x ?? ""},${u(E).y ?? ""}h${u(E).width ?? ""}v${u(E).height ?? ""}h${-u(E).width}z`);
              },
              [
                () => ({
                  "--xy-minimap-mask-background-color-props": d(),
                  "--xy-minimap-mask-stroke-color-props": g(),
                  "--xy-minimap-mask-stroke-width-props": f() ? f() * u(C) : void 0
                })
              ]
            ), M(de, te);
          };
          se(re, (de) => {
            u(S).panZoom && de(oe);
          });
        }
        M(q, fe);
      },
      $$slots: { default: !0 }
    }
  )), $(X), M(e, Q), ce({
    get position() {
      return n();
    },
    set position(q = "bottom-right") {
      n(q), p();
    },
    get ariaLabel() {
      return r();
    },
    set ariaLabel(q) {
      r(q), p();
    },
    get nodeStrokeColor() {
      return o();
    },
    set nodeStrokeColor(q = "transparent") {
      o(q), p();
    },
    get nodeColor() {
      return i();
    },
    set nodeColor(q) {
      i(q), p();
    },
    get nodeClass() {
      return s();
    },
    set nodeClass(q = "") {
      s(q), p();
    },
    get nodeBorderRadius() {
      return a();
    },
    set nodeBorderRadius(q = 5) {
      a(q), p();
    },
    get nodeStrokeWidth() {
      return l();
    },
    set nodeStrokeWidth(q = 2) {
      l(q), p();
    },
    get bgColor() {
      return c();
    },
    set bgColor(q) {
      c(q), p();
    },
    get maskColor() {
      return d();
    },
    set maskColor(q) {
      d(q), p();
    },
    get maskStrokeColor() {
      return g();
    },
    set maskStrokeColor(q) {
      g(q), p();
    },
    get maskStrokeWidth() {
      return f();
    },
    set maskStrokeWidth(q) {
      f(q), p();
    },
    get width() {
      return h();
    },
    set width(q = 200) {
      h(q), p();
    },
    get height() {
      return v();
    },
    set height(q = 150) {
      v(q), p();
    },
    get pannable() {
      return y();
    },
    set pannable(q = !0) {
      y(q), p();
    },
    get zoomable() {
      return k();
    },
    set zoomable(q = !0) {
      k(q), p();
    },
    get inversePan() {
      return w();
    },
    set inversePan(q) {
      w(q), p();
    },
    get zoomStep() {
      return T();
    },
    set zoomStep(q) {
      T(q), p();
    },
    get class() {
      return _();
    },
    set class(q) {
      _(q), p();
    }
  });
}
ie(
  Uu,
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
var cm = /* @__PURE__ */ U("<div><!></div>");
function Ju(e, t) {
  le(t, !0);
  let n = m(t, "nodeId", 7), r = m(t, "position", 23, () => we.Top), o = m(t, "align", 7, "center"), i = m(t, "offset", 7, 10), s = m(t, "isVisible", 7), a = m(t, "children", 7), l = /* @__PURE__ */ Oe(t, [
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
  const c = Rt(), { getNodesBounds: d } = it(), g = Dn("svelteflow__node_id");
  let f = /* @__PURE__ */ N(() => (c.nodes, (Array.isArray(n()) ? n() : [n() ?? g]).reduce(
    (S, O) => {
      const L = c.nodeLookup.get(O);
      return L && S.push(L), S;
    },
    []
  ))), h = /* @__PURE__ */ N(() => {
    const b = d(u(f));
    return b ? Cp(b, c.viewport, r(), i(), o()) : "";
  }), v = /* @__PURE__ */ N(() => u(f).length === 0 ? 1 : Math.max(...u(f).map((b) => (b.internals.z || 5) + 1))), y = /* @__PURE__ */ N(() => c.nodes.filter((b) => b.selected).length), k = /* @__PURE__ */ N(() => typeof s() == "boolean" ? s() : u(f).length === 1 && u(f)[0].selected && u(y) === 1);
  var w = Te(), T = ae(w);
  {
    var _ = (b) => {
      var S = cm();
      Ue(
        S,
        (L, I) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": L,
          ...l,
          [Zt]: I
        }),
        [
          () => u(f).reduce((L, I) => `${L}${I.id} `, "").trim(),
          () => ({
            display: gu().value ? "none" : void 0,
            position: "absolute",
            transform: u(h),
            "z-index": u(v)
          })
        ]
      );
      var O = R(S);
      Ye(O, () => a() ?? ot), $(S), at(S, (L, I) => fu?.(L, I), () => "root"), M(b, S);
    };
    se(T, (b) => {
      c.domNode && u(k) && u(f) && b(_);
    });
  }
  return M(e, w), ce({
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
ie(
  Ju,
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
  const t = /* @__PURE__ */ N(Rt), n = /* @__PURE__ */ N(() => u(t).nodes), r = /* @__PURE__ */ N(() => u(t).nodeLookup);
  let o = [], i = !0;
  const s = /* @__PURE__ */ N(() => {
    u(n);
    const a = [], l = Array.isArray(e), c = l ? e : [e];
    for (const d of c) {
      const g = u(r).get(d)?.internals.userNode;
      g && a.push({ id: g.id, type: g.type, data: g.data });
    }
    return (!Op(a, o) || i) && (o = a, i = !1), l ? o : o[0] ?? null;
  });
  return {
    get current() {
      return u(s);
    }
  };
}
const ll = "tinyflow-component", um = [
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
], dm = [
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
], js = [
  { label: "文字", value: "text" },
  { label: "图片", value: "image" },
  { label: "视频", value: "video" },
  { label: "音频", value: "audio" },
  { label: "文件", value: "file" },
  { label: "其他", value: "other" }
], fm = [
  { label: "当行输入框", value: "input" },
  { label: "多行输入框", value: "textarea" },
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
], gm = [
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
];
class i_ {
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
    const t = document.createElement(ll);
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
    const n = document.createElement(ll);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const hm = () => {
  let e = /* @__PURE__ */ ke([]), t = /* @__PURE__ */ ke([]), n = /* @__PURE__ */ ke({ x: 250, y: 100, zoom: 1 });
  return {
    // nodes: nodesInternal,
    // edges: edgesInternal,
    // viewport,
    init: (r, o) => {
      W(e, r), W(t, o);
    },
    getNodes: () => u(e),
    setNodes: (r) => {
      W(e, r);
    },
    getEdges: () => u(t),
    setEdges: (r) => {
      W(t, r);
    },
    getViewport: () => u(n),
    setViewport: (r) => {
      W(n, r);
    },
    getNode: (r) => u(e).find((o) => o.id === r),
    addNode: (r) => {
      W(e, [...u(e), r]);
    },
    removeNode: (r) => {
      W(e, u(e).filter((o) => o.id !== r));
    },
    updateNode: (r, o) => {
      W(e, u(e).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateNodes: (r) => {
      W(e, r(u(e)));
    },
    updateNodeData: (r, o) => {
      W(e, u(e).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    },
    selectNodeOnly: (r) => {
      W(e, u(e).map((o) => o.id === r ? { ...o, selected: !0 } : { ...o, selected: !1 }));
    },
    getEdge: (r) => u(t).find((o) => o.id === r),
    addEdge: (r) => {
      W(t, [...u(t), r]);
    },
    removeEdge: (r) => {
      W(t, u(t).filter((o) => o.id !== r));
    },
    updateEdge: (r, o) => {
      W(t, u(t).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateEdges: (r) => {
      W(t, r(u(t)));
    },
    updateEdgeData: (r, o) => {
      W(t, u(t).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    }
  };
}, Fe = hm();
var vm = /* @__PURE__ */ U("<button><!></button>");
function Se(e, t) {
  le(t, !0);
  const n = m(t, "children", 7), r = m(t, "primary", 7), o = /* @__PURE__ */ Oe(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children",
    "primary"
  ]);
  var i = vm();
  Ue(i, () => ({
    type: "button",
    ...o,
    class: `tf-btn ${r() ? "tf-btn-primary" : ""} nopan nodrag ${t.class ?? ""}`
  }));
  var s = R(i);
  return Ye(s, () => n() ?? ot), $(i), M(e, i), ce({
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
ie(Se, { children: {}, primary: {} }, [], [], !0);
var pm = /* @__PURE__ */ U("<input/>");
function Qu(e, t) {
  le(t, !0);
  const n = /* @__PURE__ */ Oe(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = pm();
  Xt(r), Ue(r, () => ({
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), M(e, r), ce();
}
ie(Qu, {}, [], [], !0);
var mm = /* @__PURE__ */ U('<div><input type="hidden"/> <!> <!></div>');
const ym = {
  hash: "svelte-1swt2gg",
  code: ".tf-chosen.svelte-1swt2gg {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function ed(e, t) {
  le(t, !0), De(e, ym);
  const n = m(t, "placeholder", 7), r = m(t, "label", 7), o = m(t, "value", 7), i = m(t, "buttonText", 7, "选择..."), s = m(t, "onChosen", 7), a = /* @__PURE__ */ Oe(t, [
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
  var l = mm();
  Ue(
    l,
    () => ({
      ...a,
      class: `tf-chosen nopan nodrag ${t.class ?? ""}`
    }),
    void 0,
    "svelte-1swt2gg"
  );
  var c = R(l);
  Xt(c);
  var d = V(c, 2);
  je(d, {
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
  return Se(g, {
    onclick: (f) => {
      s()?.(o(), r(), f);
    },
    style: "padding: 3px",
    children: (f, h) => {
      ye();
      var v = Ce();
      be(() => He(v, i())), M(f, v);
    },
    $$slots: { default: !0 }
  }), $(l), be(() => So(c, o())), M(e, l), ce({
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
ie(
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
var wm = /* @__PURE__ */ U("<input/>");
function je(e, t) {
  le(t, !0);
  const n = /* @__PURE__ */ Oe(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = wm();
  Xt(r), Ue(r, () => ({
    type: "text",
    spellcheck: "false",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), M(e, r), ce();
}
ie(je, {}, [], [], !0);
var _m = /* @__PURE__ */ U("<textarea></textarea>");
function ze(e, t) {
  le(t, !0);
  const n = m(t, "value", 7), r = /* @__PURE__ */ Oe(t, ["$$slots", "$$events", "$$legacy", "$$host", "value"]);
  var o = _m();
  return Vf(o), Ue(o, () => ({
    spellcheck: "false",
    ...r,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), M(e, o), ce({
    get value() {
      return n();
    },
    set value(i) {
      n(i), p();
    }
  });
}
ie(ze, { value: {} }, [], [], !0);
var xm = /* @__PURE__ */ U('<div role="button"><!></div>'), bm = /* @__PURE__ */ U("<div></div>");
function td(e, t) {
  const n = Ca(t, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = Ca(n, ["items", "onChange", "activeIndex"]);
  le(t, !1);
  let o = m(t, "items", 28, () => []), i = m(t, "onChange", 12, () => {
  }), s = m(t, "activeIndex", 12, 0);
  function a(c, d) {
    s(d), i()?.(c, d);
  }
  uc();
  var l = bm();
  return Ue(l, () => ({
    ...r,
    class: `tf-tabs ${Ss(r), nt(() => r.class) ?? ""}`
  })), ct(l, 5, o, hr, (c, d, g) => {
    var f = xm();
    _e(f, "tabindex", g), f.__click = () => a(u(d), g), f.__keydown = (k) => {
      (k.key === "Enter" || k.key === " ") && (k.preventDefault(), a(u(d), g));
    };
    var h = R(f);
    {
      var v = (k) => {
        var w = Ce();
        be(() => He(w, (u(d), nt(() => u(d).label)))), M(k, w);
      }, y = (k) => {
        var w = Te(), T = ae(w);
        Ye(T, () => (u(d), nt(() => u(d).label) ?? ot)), M(k, w);
      };
      se(h, (k) => {
        u(d), nt(() => typeof u(d).label == "string") ? k(v) : k(y, !1);
      });
    }
    $(f), be(() => wt(f, 1, `tf-tabs-item ${g === s() ? "active" : ""}`)), M(c, f);
  }), $(l), M(e, l), ce({
    get items() {
      return o();
    },
    set items(c) {
      o(c), p();
    },
    get onChange() {
      return i();
    },
    set onChange(c) {
      i(c), p();
    },
    get activeIndex() {
      return s();
    },
    set activeIndex(c) {
      s(c), p();
    }
  });
}
_n(["click", "keydown"]);
ie(td, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var Cm = (e, t, n) => t(u(n)), km = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(u(n)));
}, Em = /* @__PURE__ */ U('<span class="tf-collapse-item-title-icon"><!></span>'), Sm = /* @__PURE__ */ U('<div class="tf-collapse-item-description"><!></div>'), Nm = /* @__PURE__ */ U('<div class="tf-collapse-item-content"><!></div>'), Pm = /* @__PURE__ */ U('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), Tm = /* @__PURE__ */ U("<div></div>");
const Dm = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function nd(e, t) {
  le(t, !0), De(e, Dm);
  let n = m(t, "items", 7), r = m(t, "onChange", 7), o = m(t, "activeKeys", 31, () => Mt([]));
  function i(a) {
    o().includes(a.key) ? o(o().filter((l) => l !== a.key)) : (o().push(a.key), o(o())), r()?.(a, o());
  }
  var s = Tm();
  return ct(s, 21, n, hr, (a, l, c) => {
    var d = Pm(), g = R(d);
    _e(g, "tabindex", c), g.__click = [Cm, i, l], g.__keydown = [km, i, l];
    var f = R(g);
    {
      var h = (b) => {
        var S = Em(), O = R(S);
        Pn(O, {
          get target() {
            return u(l).icon;
          }
        }), $(S), M(b, S);
      };
      se(f, (b) => {
        u(l).icon && b(h);
      });
    }
    var v = V(f, 2);
    Pn(v, {
      get target() {
        return u(l).title;
      }
    });
    var y = V(v, 2);
    $(g);
    var k = V(g, 2);
    {
      var w = (b) => {
        var S = Sm(), O = R(S);
        Pn(O, {
          get target() {
            return u(l).description;
          }
        }), $(S), M(b, S);
      };
      se(k, (b) => {
        u(l).description && b(w);
      });
    }
    var T = V(k, 2);
    {
      var _ = (b) => {
        var S = Nm(), O = R(S);
        Pn(O, {
          get target() {
            return u(l).content;
          }
        }), $(S), M(b, S);
      };
      se(T, (b) => {
        o().includes(u(l).key) && b(_);
      });
    }
    $(d), be((b) => wt(y, 1, `tf-collapse-item-title-arrow ${b ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(u(l).key) ? "rotate-90" : ""
    ]), M(a, d);
  }), $(s), be(() => {
    ft(s, t.style), wt(s, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), M(e, s), ce({
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
ie(nd, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Pn(e, t) {
  le(t, !0);
  let n = m(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = Te(), o = ae(r);
  {
    var i = (a) => {
      var l = Te(), c = ae(l);
      Ye(c, () => n() ?? ot), M(a, l);
    }, s = (a) => {
      var l = Te(), c = ae(l);
      Ts(c, n), M(a, l);
    };
    se(o, (a) => {
      typeof n() == "function" ? a(i) : a(s, !1);
    });
  }
  return M(e, r), ce({
    get target() {
      return n();
    },
    set target(a) {
      n(a), p();
    }
  });
}
ie(Pn, { target: {} }, [], [], !0);
var Am = (e, t, n) => t(u(n)), Mm = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), Om = /* @__PURE__ */ U('<div class="tf-select-content-children"><!></div>'), Lm = /* @__PURE__ */ U('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), Vm = /* @__PURE__ */ U('<div class="tf-select-content nopan nodrag"><!></div>'), Hm = /* @__PURE__ */ U("<!> <!>", 1), $m = /* @__PURE__ */ U('<div class="tf-select-input-placeholder"> </div>'), Im = /* @__PURE__ */ U('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), zm = /* @__PURE__ */ U("<div><!></div>");
function rt(e, t) {
  le(t, !0);
  const n = (w, T = ot) => {
    var _ = Te(), b = ae(_);
    ct(b, 19, T, (S, O) => `${O}_${S.value}`, (S, O) => {
      var L = Lm(), I = ae(L);
      I.__click = [Am, v, O];
      var Y = R(I), J = R(Y);
      {
        var B = (P) => {
          var C = Mm();
          M(P, C);
        };
        se(J, (P) => {
          u(O).children && u(O).children.length > 0 && P(B);
        });
      }
      $(Y);
      var E = V(Y, 2);
      Pn(E, {
        get target() {
          return u(O).label;
        }
      }), $(I);
      var D = V(I, 2);
      {
        var x = (P) => {
          var C = Om(), H = R(C);
          n(H, () => u(O).children), $(C), M(P, C);
        };
        se(D, (P) => {
          u(O).children && u(O).children.length > 0 && (a() || c().includes(u(O).value)) && P(x);
        });
      }
      M(S, L);
    }), M(w, _);
  };
  let r = m(t, "items", 7), o = m(t, "onSelect", 7), i = m(t, "value", 23, () => []), s = m(t, "defaultValue", 23, () => []), a = m(t, "expandAll", 7, !0), l = m(t, "multiple", 7, !1), c = m(t, "expandValue", 23, () => []), d = m(t, "placeholder", 7), g = /* @__PURE__ */ Oe(t, [
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
    const w = [], T = (_) => {
      for (let b of _)
        i().length > 0 ? i().includes(b.value) && w.push(b) : s().includes(b.value) && w.push(b), b.children && b.children.length > 0 && T(b.children);
    };
    return T(r()), w;
  }), h;
  function v(w) {
    h?.hide(), o()?.(w);
  }
  var y = zm();
  Ue(y, () => ({ ...g, class: `tf-select ${g.class ?? ""}` }));
  var k = R(y);
  return Nt(
    nr(k, {
      floating: (T) => {
        var _ = Vm(), b = R(_);
        n(b, r), $(_), M(T, _);
      },
      children: (T, _) => {
        var b = Im();
        Ue(b, () => ({ class: "tf-select-input nopan nodrag", ...g }));
        var S = R(b);
        ct(
          S,
          23,
          () => u(f),
          (O, L) => `${L}_${O.value}`,
          (O, L, I) => {
            var Y = Te(), J = ae(Y);
            {
              var B = (D) => {
                var x = Te(), P = ae(x);
                {
                  var C = (H) => {
                    Pn(H, {
                      get target() {
                        return u(L).label;
                      }
                    });
                  };
                  se(P, (H) => {
                    u(I) === 0 && H(C);
                  });
                }
                M(D, x);
              }, E = (D) => {
                var x = Hm(), P = ae(x);
                Pn(P, {
                  get target() {
                    return u(L).label;
                  }
                });
                var C = V(P, 2);
                {
                  var H = (z) => {
                    var A = Ce(",");
                    M(z, A);
                  };
                  se(C, (z) => {
                    u(I) < u(f).length - 1 && z(H);
                  });
                }
                M(D, x);
              };
              se(J, (D) => {
                l() ? D(E, !1) : D(B);
              });
            }
            M(O, Y);
          },
          (O) => {
            var L = $m(), I = R(L, !0);
            $(L), be(() => He(I, d())), M(O, L);
          }
        ), $(S), ye(2), $(b), M(T, b);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => h = T,
    () => h
  ), $(y), M(e, y), ce({
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
      return c();
    },
    set expandValue(w = []) {
      c(w), p();
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
ie(
  rt,
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
const jr = Math.min, cr = Math.max, Uo = Math.round, Ut = (e) => ({
  x: e,
  y: e
}), Rm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Bm = {
  start: "end",
  end: "start"
};
function ns(e, t, n) {
  return cr(e, jr(t, n));
}
function go(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Jn(e) {
  return e.split("-")[0];
}
function ho(e) {
  return e.split("-")[1];
}
function rd(e) {
  return e === "x" ? "y" : "x";
}
function Gs(e) {
  return e === "y" ? "height" : "width";
}
const Fm = /* @__PURE__ */ new Set(["top", "bottom"]);
function Tn(e) {
  return Fm.has(Jn(e)) ? "y" : "x";
}
function Us(e) {
  return rd(Tn(e));
}
function Km(e, t, n) {
  n === void 0 && (n = !1);
  const r = ho(e), o = Us(e), i = Gs(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Jo(s)), [s, Jo(s)];
}
function qm(e) {
  const t = Jo(e);
  return [rs(e), t, rs(t)];
}
function rs(e) {
  return e.replace(/start|end/g, (t) => Bm[t]);
}
const cl = ["left", "right"], ul = ["right", "left"], Zm = ["top", "bottom"], Ym = ["bottom", "top"];
function Wm(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? ul : cl : t ? cl : ul;
    case "left":
    case "right":
      return t ? Zm : Ym;
    default:
      return [];
  }
}
function Xm(e, t, n, r) {
  const o = ho(e);
  let i = Wm(Jn(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(rs)))), i;
}
function Jo(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Rm[t]);
}
function jm(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function od(e) {
  return typeof e != "number" ? jm(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Qo(e) {
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
function dl(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Tn(t), s = Us(t), a = Gs(s), l = Jn(t), c = i === "y", d = r.x + r.width / 2 - o.width / 2, g = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
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
  switch (ho(t)) {
    case "start":
      h[s] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      h[s] += f * (n && c ? -1 : 1);
      break;
  }
  return h;
}
const Gm = async (e, t, n) => {
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
    y: g
  } = dl(c, r, l), f = r, h = {}, v = 0;
  for (let y = 0; y < a.length; y++) {
    const {
      name: k,
      fn: w
    } = a[y], {
      x: T,
      y: _,
      data: b,
      reset: S
    } = await w({
      x: d,
      y: g,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: h,
      rects: c,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = T ?? d, g = _ ?? g, h = {
      ...h,
      [k]: {
        ...h[k],
        ...b
      }
    }, S && v <= 50 && (v++, typeof S == "object" && (S.placement && (f = S.placement), S.rects && (c = S.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : S.rects), {
      x: d,
      y: g
    } = dl(c, f, l)), y = -1);
  }
  return {
    x: d,
    y: g,
    placement: f,
    strategy: o,
    middlewareData: h
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
    elementContext: g = "floating",
    altBoundary: f = !1,
    padding: h = 0
  } = go(t, e), v = od(h), k = a[f ? g === "floating" ? "reference" : "floating" : g], w = Qo(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(k))) == null || n ? k : k.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), T = g === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), b = await (i.isElement == null ? void 0 : i.isElement(_)) ? await (i.getScale == null ? void 0 : i.getScale(_)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = Qo(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: T,
    offsetParent: _,
    strategy: l
  }) : T);
  return {
    top: (w.top - S.top + v.top) / b.y,
    bottom: (S.bottom - w.bottom + v.bottom) / b.y,
    left: (w.left - S.left + v.left) / b.x,
    right: (S.right - w.right + v.right) / b.x
  };
}
const Um = (e) => ({
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
    } = go(e, t) || {};
    if (c == null)
      return {};
    const g = od(d), f = {
      x: n,
      y: r
    }, h = Us(o), v = Gs(h), y = await s.getDimensions(c), k = h === "y", w = k ? "top" : "left", T = k ? "bottom" : "right", _ = k ? "clientHeight" : "clientWidth", b = i.reference[v] + i.reference[h] - f[h] - i.floating[v], S = f[h] - i.reference[h], O = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let L = O ? O[_] : 0;
    (!L || !await (s.isElement == null ? void 0 : s.isElement(O))) && (L = a.floating[_] || i.floating[v]);
    const I = b / 2 - S / 2, Y = L / 2 - y[v] / 2 - 1, J = jr(g[w], Y), B = jr(g[T], Y), E = J, D = L - y[v] - B, x = L / 2 - y[v] / 2 + I, P = ns(E, x, D), C = !l.arrow && ho(o) != null && x !== P && i.reference[v] / 2 - (x < E ? J : B) - y[v] / 2 < 0, H = C ? x < E ? x - E : x - D : 0;
    return {
      [h]: f[h] + H,
      data: {
        [h]: P,
        centerOffset: x - P - H,
        ...C && {
          alignmentOffset: H
        }
      },
      reset: C
    };
  }
}), Jm = function(e) {
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
        crossAxis: g = !0,
        fallbackPlacements: f,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: y = !0,
        ...k
      } = go(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const w = Jn(o), T = Tn(a), _ = Jn(a) === a, b = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), S = f || (_ || !y ? [Jo(a)] : qm(a)), O = v !== "none";
      !f && O && S.push(...Xm(a, y, v, b));
      const L = [a, ...S], I = await id(t, k), Y = [];
      let J = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && Y.push(I[w]), g) {
        const x = Km(o, s, b);
        Y.push(I[x[0]], I[x[1]]);
      }
      if (J = [...J, {
        placement: o,
        overflows: Y
      }], !Y.every((x) => x <= 0)) {
        var B, E;
        const x = (((B = i.flip) == null ? void 0 : B.index) || 0) + 1, P = L[x];
        if (P && (!(g === "alignment" ? T !== Tn(P) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        J.every((z) => z.overflows[0] > 0 && Tn(z.placement) === T)))
          return {
            data: {
              index: x,
              overflows: J
            },
            reset: {
              placement: P
            }
          };
        let C = (E = J.filter((H) => H.overflows[0] <= 0).sort((H, z) => H.overflows[1] - z.overflows[1])[0]) == null ? void 0 : E.placement;
        if (!C)
          switch (h) {
            case "bestFit": {
              var D;
              const H = (D = J.filter((z) => {
                if (O) {
                  const A = Tn(z.placement);
                  return A === T || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  A === "y";
                }
                return !0;
              }).map((z) => [z.placement, z.overflows.filter((A) => A > 0).reduce((A, F) => A + F, 0)]).sort((z, A) => z[1] - A[1])[0]) == null ? void 0 : D[0];
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
}, Qm = /* @__PURE__ */ new Set(["left", "top"]);
async function e2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Jn(n), a = ho(n), l = Tn(n) === "y", c = Qm.has(s) ? -1 : 1, d = i && l ? -1 : 1, g = go(t, e);
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
    y: f * c
  } : {
    x: f * c,
    y: h * d
  };
}
const t2 = function(e) {
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
      } = t, l = await e2(t, e);
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
}, n2 = function(e) {
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
      } = go(e, t), c = {
        x: n,
        y: r
      }, d = await id(t, l), g = Tn(Jn(o)), f = rd(g);
      let h = c[f], v = c[g];
      if (i) {
        const k = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", T = h + d[k], _ = h - d[w];
        h = ns(T, h, _);
      }
      if (s) {
        const k = g === "y" ? "top" : "left", w = g === "y" ? "bottom" : "right", T = v + d[k], _ = v - d[w];
        v = ns(T, v, _);
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
  return sd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function kt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Cn(e) {
  var t;
  return (t = (sd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function sd(e) {
  return pi() ? e instanceof Node || e instanceof kt(e).Node : !1;
}
function $t(e) {
  return pi() ? e instanceof Element || e instanceof kt(e).Element : !1;
}
function tn(e) {
  return pi() ? e instanceof HTMLElement || e instanceof kt(e).HTMLElement : !1;
}
function fl(e) {
  return !pi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof kt(e).ShadowRoot;
}
const r2 = /* @__PURE__ */ new Set(["inline", "contents"]);
function vo(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = It(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !r2.has(o);
}
const o2 = /* @__PURE__ */ new Set(["table", "td", "th"]);
function i2(e) {
  return o2.has(Er(e));
}
const s2 = [":popover-open", ":modal"];
function mi(e) {
  return s2.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const a2 = ["transform", "translate", "scale", "rotate", "perspective"], l2 = ["transform", "translate", "scale", "rotate", "perspective", "filter"], c2 = ["paint", "layout", "strict", "content"];
function Js(e) {
  const t = Qs(), n = $t(e) ? It(e) : e;
  return a2.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || l2.some((r) => (n.willChange || "").includes(r)) || c2.some((r) => (n.contain || "").includes(r));
}
function u2(e) {
  let t = Vn(e);
  for (; tn(t) && !xr(t); ) {
    if (Js(t))
      return t;
    if (mi(t))
      return null;
    t = Vn(t);
  }
  return null;
}
function Qs() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const d2 = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function xr(e) {
  return d2.has(Er(e));
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
function Vn(e) {
  if (Er(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    fl(e) && e.host || // Fallback.
    Cn(e)
  );
  return fl(t) ? t.host : t;
}
function ad(e) {
  const t = Vn(e);
  return xr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : tn(t) && vo(t) ? t : ad(t);
}
function ld(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = ad(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = kt(o);
  return i ? (os(s), t.concat(s, s.visualViewport || [], vo(o) ? o : [], [])) : t.concat(o, ld(o, []));
}
function os(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function cd(e) {
  const t = It(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = tn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = Uo(n) !== i || Uo(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function ud(e) {
  return $t(e) ? e : e.contextElement;
}
function ur(e) {
  const t = ud(e);
  if (!tn(t))
    return Ut(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = cd(t);
  let s = (i ? Uo(n.width) : n.width) / r, a = (i ? Uo(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const f2 = /* @__PURE__ */ Ut(0);
function dd(e) {
  const t = kt(e);
  return !Qs() || !t.visualViewport ? f2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function g2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== kt(e) ? !1 : t;
}
function Gr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = ud(e);
  let s = Ut(1);
  t && (r ? $t(r) && (s = ur(r)) : s = ur(e));
  const a = g2(i, n, r) ? dd(i) : Ut(0);
  let l = (o.left + a.x) / s.x, c = (o.top + a.y) / s.y, d = o.width / s.x, g = o.height / s.y;
  if (i) {
    const f = kt(i), h = r && $t(r) ? kt(r) : r;
    let v = f, y = os(v);
    for (; y && r && h !== v; ) {
      const k = ur(y), w = y.getBoundingClientRect(), T = It(y), _ = w.left + (y.clientLeft + parseFloat(T.paddingLeft)) * k.x, b = w.top + (y.clientTop + parseFloat(T.paddingTop)) * k.y;
      l *= k.x, c *= k.y, d *= k.x, g *= k.y, l += _, c += b, v = kt(y), y = os(v);
    }
  }
  return Qo({
    width: d,
    height: g,
    x: l,
    y: c
  });
}
function ea(e, t) {
  const n = yi(e).scrollLeft;
  return t ? t.left + n : Gr(Cn(e)).left + n;
}
function fd(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    ea(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function h2(e) {
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
  }, c = Ut(1);
  const d = Ut(0), g = tn(r);
  if ((g || !g && !i) && ((Er(r) !== "body" || vo(s)) && (l = yi(r)), tn(r))) {
    const h = Gr(r);
    c = ur(r), d.x = h.x + r.clientLeft, d.y = h.y + r.clientTop;
  }
  const f = s && !g && !i ? fd(s, l, !0) : Ut(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + d.x + f.x,
    y: n.y * c.y - l.scrollTop * c.y + d.y + f.y
  };
}
function v2(e) {
  return Array.from(e.getClientRects());
}
function p2(e) {
  const t = Cn(e), n = yi(e), r = e.ownerDocument.body, o = cr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = cr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + ea(e);
  const a = -n.scrollTop;
  return It(r).direction === "rtl" && (s += cr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function m2(e, t) {
  const n = kt(e), r = Cn(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const c = Qs();
    (!c || c && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const y2 = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function w2(e, t) {
  const n = Gr(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = tn(e) ? ur(e) : Ut(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, c = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: c
  };
}
function gl(e, t, n) {
  let r;
  if (t === "viewport")
    r = m2(e, n);
  else if (t === "document")
    r = p2(Cn(e));
  else if ($t(t))
    r = w2(t, n);
  else {
    const o = dd(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Qo(r);
}
function gd(e, t) {
  const n = Vn(e);
  return n === t || !$t(n) || xr(n) ? !1 : It(n).position === "fixed" || gd(n, t);
}
function _2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = ld(e, []).filter((a) => $t(a) && Er(a) !== "body"), o = null;
  const i = It(e).position === "fixed";
  let s = i ? Vn(e) : e;
  for (; $t(s) && !xr(s); ) {
    const a = It(s), l = Js(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && y2.has(o.position) || vo(s) && !l && gd(e, s)) ? r = r.filter((d) => d !== s) : o = a, s = Vn(s);
  }
  return t.set(e, r), r;
}
function x2(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? mi(t) ? [] : _2(t, this._c) : [].concat(n), r], a = s[0], l = s.reduce((c, d) => {
    const g = gl(t, d, o);
    return c.top = cr(g.top, c.top), c.right = jr(g.right, c.right), c.bottom = jr(g.bottom, c.bottom), c.left = cr(g.left, c.left), c;
  }, gl(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function b2(e) {
  const {
    width: t,
    height: n
  } = cd(e);
  return {
    width: t,
    height: n
  };
}
function C2(e, t, n) {
  const r = tn(t), o = Cn(t), i = n === "fixed", s = Gr(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Ut(0);
  function c() {
    l.x = ea(o);
  }
  if (r || !r && !i)
    if ((Er(t) !== "body" || vo(o)) && (a = yi(t)), r) {
      const h = Gr(t, !0, i, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && c();
  i && !r && o && c();
  const d = o && !r && !i ? fd(o, a) : Ut(0), g = s.left + a.scrollLeft - l.x - d.x, f = s.top + a.scrollTop - l.y - d.y;
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
function hl(e, t) {
  if (!tn(e) || It(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Cn(e) === n && (n = n.ownerDocument.body), n;
}
function hd(e, t) {
  const n = kt(e);
  if (mi(e))
    return n;
  if (!tn(e)) {
    let o = Vn(e);
    for (; o && !xr(o); ) {
      if ($t(o) && !Mi(o))
        return o;
      o = Vn(o);
    }
    return n;
  }
  let r = hl(e, t);
  for (; r && i2(r) && Mi(r); )
    r = hl(r, t);
  return r && xr(r) && Mi(r) && !Js(r) ? n : r || u2(e) || n;
}
const k2 = async function(e) {
  const t = this.getOffsetParent || hd, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: C2(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function E2(e) {
  return It(e).direction === "rtl";
}
const S2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: h2,
  getDocumentElement: Cn,
  getClippingRect: x2,
  getOffsetParent: hd,
  getElementRects: k2,
  getClientRects: v2,
  getDimensions: b2,
  getScale: ur,
  isElement: $t,
  isRTL: E2
}, N2 = t2, P2 = n2, T2 = Jm, D2 = Um, A2 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: S2,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return Gm(e, t, {
    ...o,
    platform: i
  });
}, M2 = ({
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
  function g() {
    A2(e, c, {
      placement: r,
      middleware: [
        N2(o),
        // 手动偏移配置
        T2(i),
        //自动翻转
        P2(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [D2({ element: d })] : []
      ]
    }).then(({ x: w, y: T, placement: _, middlewareData: b }) => {
      if (Object.assign(c.style, {
        left: `${w}px`,
        top: `${T}px`
      }), l) {
        const { x: S, y: O } = b.arrow, L = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[_.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: S != null ? `${S}px` : "",
          top: O != null ? `${O}px` : "",
          right: "",
          bottom: "",
          [L]: "2px"
        });
      }
    });
  }
  let f = !1;
  function h() {
    c.style.display = "block", c.style.visibility = "block", c.style.position = "absolute", l && (d.style.display = "block"), f = !0, g();
  }
  function v() {
    c.style.display = "none", l && (d.style.display = "none"), f = !1;
  }
  function y(w) {
    w.stopPropagation(), f ? v() : h();
  }
  function k(w) {
    c.contains(w.target) || v();
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
var O2 = /* @__PURE__ */ U('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function nr(e, t) {
  le(t, !0);
  const n = m(t, "children", 7), r = m(t, "floating", 7), o = m(t, "placement", 7, "bottom");
  let i, s, a;
  In(() => (a = M2({
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
  var c = O2(), d = R(c), g = R(d);
  Ye(g, n), $(d), Nt(d, (v) => i = v, () => i);
  var f = V(d, 2), h = R(f);
  return Ye(h, r), $(f), Nt(f, (v) => s = v, () => s), $(c), M(e, c), ce({
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
ie(nr, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Ne(e, t) {
  le(t, !0);
  const n = m(t, "children", 7), r = m(t, "level", 7, 1), o = m(t, "mt", 7), i = m(t, "mb", 7);
  var s = Te(), a = ae(s);
  return tg(a, () => `h${r()}`, !1, (l, c) => {
    Ue(l, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var d = Te(), g = ae(d);
    Ye(g, () => n() ?? ot), M(c, d);
  }), M(e, s), ce({
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
ie(Ne, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var L2 = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const V2 = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function po(e, t) {
  le(t, !0), De(e, V2);
  const n = /* @__PURE__ */ Oe(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Se(e, $e(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = L2();
      M(r, i);
    },
    $$slots: { default: !0 }
  })), ce();
}
ie(po, {}, [], [], !0);
const H2 = () => ({ deleteNode: (t) => {
  Fe.removeNode(t), Fe.updateEdges((n) => n.filter((r) => r.source !== t && r.target !== t));
} }), Qn = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, $2 = () => ({ copyNode: (t) => {
  const n = Fe.getNode(t);
  if (n) {
    const r = Qn(), o = {
      ...n,
      id: r,
      position: { x: n.position.x + 50, y: n.position.y + 50 }
    };
    Fe.updateNodes((i) => [...i.map((a) => ({ ...a, selected: !1 })), o]);
  }
} }), We = () => Dn("svelteflow__node_id"), Hn = () => Dn("tinyflow_options");
var I2 = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), z2 = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), R2 = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), B2 = /* @__PURE__ */ U('<div class="input-item svelte-1jesvb7">执行条件： <!></div>'), F2 = (e, t, n) => {
  const r = e.target.checked;
  t(n, { async: r });
}, K2 = (e, t, n) => {
  const r = e.target.checked;
  t(n, { loopEnable: r });
}, q2 = /* @__PURE__ */ U('<div class="input-item svelte-1jesvb7">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-1jesvb7">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-1jesvb7">退出条件： <!></div>', 1), Z2 = /* @__PURE__ */ U('<div class="settings svelte-1jesvb7"><div class="input-item svelte-1jesvb7">节点名称： <!></div> <div class="input-item svelte-1jesvb7">参数描述： <!></div> <!> <label class="input-item-inline svelte-1jesvb7"><span>异步执行：</span> <input type="checkbox"/></label> <label class="input-item-inline svelte-1jesvb7"><span>循环执行：</span> <input type="checkbox"/></label> <!></div>'), Y2 = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), W2 = /* @__PURE__ */ U('<div class="tf-node-toolbar svelte-1jesvb7"><!> <!> <!> <!></div>'), X2 = /* @__PURE__ */ U('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const j2 = {
  hash: "svelte-1jesvb7",
  code: ".tf-node-toolbar.svelte-1jesvb7 {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-1jesvb7 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-1jesvb7 .input-item:where(.svelte-1jesvb7) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-1jesvb7 .input-item-inline:where(.svelte-1jesvb7) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function Ot(e, t) {
  le(t, !0), De(e, j2);
  const n = m(t, "data", 7), r = m(t, "id", 7, ""), o = m(t, "icon", 7), i = m(t, "handle", 7), s = m(t, "children", 7), a = m(t, "allowExecute", 7, !0), l = m(t, "allowCopy", 7, !0), c = m(t, "allowDelete", 7, !0), d = m(t, "allowSetting", 7, !0), g = m(t, "allowSettingOfCondition", 7, !0), f = m(t, "showSourceHandle", 7, !0), h = m(t, "showTargetHandle", 7, !0), v = m(t, "onCollapse", 7);
  let y = n().expand ? ["key"] : [];
  const { updateNodeData: k, getNode: w } = it(), T = /* @__PURE__ */ N(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: _ } = H2(), { copyNode: b } = $2(), S = Hn(), O = () => {
    S.onNodeExecute?.(w(r()));
  };
  let L = We();
  var I = X2(), Y = ae(I);
  {
    var J = (A) => {
      Ju(A, {
        get position() {
          return we.Top;
        },
        align: "start",
        children: (F, Z) => {
          var G = W2(), ne = R(G);
          {
            var ee = (re) => {
              Se(re, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  _(r());
                },
                children: (oe, de) => {
                  var te = I2();
                  M(oe, te);
                },
                $$slots: { default: !0 }
              });
            };
            se(ne, (re) => {
              c() && re(ee);
            });
          }
          var Q = V(ne, 2);
          {
            var X = (re) => {
              Se(re, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  b(r());
                },
                children: (oe, de) => {
                  var te = z2();
                  M(oe, te);
                },
                $$slots: { default: !0 }
              });
            };
            se(Q, (re) => {
              l() && re(X);
            });
          }
          var j = V(Q, 2);
          {
            var q = (re) => {
              Se(re, {
                class: "tf-node-toolbar-item",
                onclick: O,
                children: (oe, de) => {
                  var te = R2();
                  M(oe, te);
                },
                $$slots: { default: !0 }
              });
            };
            se(j, (re) => {
              a() && re(q);
            });
          }
          var ge = V(j, 2);
          {
            var fe = (re) => {
              nr(re, {
                placement: "bottom",
                floating: (de) => {
                  var te = Z2(), he = R(te), ue = V(R(he));
                  je(ue, {
                    style: "width: 100%;",
                    onchange: (Je) => {
                      const Qe = Je.target.value;
                      k(L, { title: Qe });
                    },
                    get value() {
                      return n().title;
                    }
                  }), $(he);
                  var pe = V(he, 2), K = V(R(pe));
                  ze(K, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (Je) => {
                      const Qe = Je.target.value;
                      k(L, { description: Qe });
                    },
                    get value() {
                      return n().description;
                    }
                  }), $(pe);
                  var Ie = V(pe, 2);
                  {
                    var Ae = (Je) => {
                      var Qe = B2(), me = V(R(Qe));
                      ze(me, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Be) => {
                          const _t = Be.target.value;
                          k(L, { condition: _t });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), $(Qe), M(Je, Qe);
                    };
                    se(Ie, (Je) => {
                      g() && Je(Ae);
                    });
                  }
                  var Le = V(Ie, 2), Ke = V(R(Le), 2);
                  Xt(Ke), Ke.__change = [F2, k, L], $(Le);
                  var Ve = V(Le, 2), gt = V(R(Ve), 2);
                  Xt(gt), gt.__change = [K2, k, L], $(Ve);
                  var qe = V(Ve, 2);
                  {
                    var et = (Je) => {
                      var Qe = q2(), me = ae(Qe), Be = V(R(me));
                      const _t = /* @__PURE__ */ N(() => n().loopIntervalMs || "1000");
                      ze(Be, {
                        rows: 1,
                        style: "width: 100%;",
                        onchange: (Rn) => {
                          const on = Rn.target.value;
                          k(L, { loopIntervalMs: on });
                        },
                        get value() {
                          return u(_t);
                        }
                      }), $(me);
                      var Xe = V(me, 2), Tt = V(R(Xe));
                      const tt = /* @__PURE__ */ N(() => n().maxLoopCount || "0");
                      ze(Tt, {
                        rows: 1,
                        style: "width: 100%;",
                        onchange: (Rn) => {
                          const on = Rn.target.value;
                          k(L, { maxLoopCount: on });
                        },
                        get value() {
                          return u(tt);
                        }
                      }), $(Xe);
                      var Ft = V(Xe, 2), wi = V(R(Ft));
                      ze(wi, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Rn) => {
                          const on = Rn.target.value;
                          k(L, { loopBreakCondition: on });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), $(Ft), M(Je, Qe);
                    };
                    se(qe, (Je) => {
                      n().loopEnable && Je(et);
                    });
                  }
                  $(te), be(() => {
                    Ki(Ke, !!n().async), Ki(gt, !!n().loopEnable);
                  }), M(de, te);
                },
                children: (de, te) => {
                  Se(de, {
                    class: "tf-node-toolbar-item",
                    children: (he, ue) => {
                      var pe = Y2();
                      M(he, pe);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            se(ge, (re) => {
              d() && re(fe);
            });
          }
          $(G), M(F, G);
        },
        $$slots: { default: !0 }
      });
    };
    se(Y, (A) => {
      (a() || l() || c()) && A(J);
    });
  }
  var B = V(Y, 2), E = V(R(B), 2), D = R(E);
  nd(D, {
    get items() {
      return u(T);
    },
    get activeKeys() {
      return y;
    },
    onChange: (A, F) => {
      k(r(), { expand: F?.includes("key") }), v()?.(F?.includes("key") ? "key" : "");
    }
  }), $(E), $(B);
  var x = V(B, 2);
  {
    var P = (A) => {
      Ln(A, {
        type: "target",
        get position() {
          return we.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    se(x, (A) => {
      h() && A(P);
    });
  }
  var C = V(x, 2);
  {
    var H = (A) => {
      Ln(A, {
        type: "source",
        get position() {
          return we.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    se(C, (A) => {
      f() && A(H);
    });
  }
  var z = V(C, 2);
  return Ye(z, () => i() ?? ot), M(e, I), ce({
    get data() {
      return n();
    },
    set data(A) {
      n(A), p();
    },
    get id() {
      return r();
    },
    set id(A = "") {
      r(A), p();
    },
    get icon() {
      return o();
    },
    set icon(A) {
      o(A), p();
    },
    get handle() {
      return i();
    },
    set handle(A) {
      i(A), p();
    },
    get children() {
      return s();
    },
    set children(A) {
      s(A), p();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(A = !0) {
      a(A), p();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(A = !0) {
      l(A), p();
    },
    get allowDelete() {
      return c();
    },
    set allowDelete(A = !0) {
      c(A), p();
    },
    get allowSetting() {
      return d();
    },
    set allowSetting(A = !0) {
      d(A), p();
    },
    get allowSettingOfCondition() {
      return g();
    },
    set allowSettingOfCondition(A = !0) {
      g(A), p();
    },
    get showSourceHandle() {
      return f();
    },
    set showSourceHandle(A = !0) {
      f(A), p();
    },
    get showTargetHandle() {
      return h();
    },
    set showTargetHandle(A = !0) {
      h(A), p();
    },
    get onCollapse() {
      return v();
    },
    set onCollapse(A) {
      v(A), p();
    }
  });
}
_n(["change"]);
ie(
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
var G2 = /* @__PURE__ */ U('<div class="input-more-item svelte-2f9bnc">数据选项： <!></div>'), U2 = /* @__PURE__ */ U('<div class="input-more-setting svelte-2f9bnc"><div class="input-more-item svelte-2f9bnc">数据内容： <!></div> <div class="input-more-item svelte-2f9bnc">输入方式： <!></div> <!> <div class="input-more-item svelte-2f9bnc">数据标题： <!></div> <div class="input-more-item svelte-2f9bnc">数据描述： <!></div> <div class="input-more-item svelte-2f9bnc"><!></div></div>'), J2 = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), Q2 = /* @__PURE__ */ U('<div class="input-item svelte-2f9bnc"><!></div> <div class="input-item svelte-2f9bnc"><!></div> <div class="input-item svelte-2f9bnc"><!></div>', 1);
const ey = {
  hash: "svelte-2f9bnc",
  code: ".input-item.svelte-2f9bnc {display:flex;align-items:center;}.input-more-setting.svelte-2f9bnc {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-2f9bnc .input-more-item:where(.svelte-2f9bnc) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function vd(e, t) {
  le(t, !0), De(e, ey);
  const n = m(t, "parameter", 7), r = m(t, "index", 7);
  let o = We(), i = bn(o), s = /* @__PURE__ */ N(() => ({ ...n(), ...i?.current?.data?.parameters[r()] }));
  const { updateNodeData: a } = it(), l = (L, I) => {
    a(o, (Y) => {
      let J = Y.data.parameters;
      return J[r()][L] = I, { parameters: J };
    });
  }, c = (L, I) => {
    const Y = I.target.value;
    l(L, Y);
  }, d = (L) => {
    const I = L.target.value;
    l("name", I);
  }, g = (L) => {
    const I = L.target.checked;
    l("required", I);
  }, f = (L) => {
    const I = L.value;
    l("formType", I);
  }, h = (L) => {
    const I = L.value;
    l("contentType", I);
  };
  let v;
  const y = () => {
    a(o, (L) => {
      let I = L.data.parameters;
      return I.splice(r(), 1), { parameters: [...I] };
    }), v?.hide();
  };
  var k = Q2(), w = ae(k), T = R(w);
  je(T, {
    style: "width: 100%;",
    get value() {
      return u(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), $(w);
  var _ = V(w, 2), b = R(_);
  Qu(b, {
    get checked() {
      return u(s).required;
    },
    onchange: g
  }), $(_);
  var S = V(_, 2), O = R(S);
  return Nt(
    nr(O, {
      placement: "bottom",
      floating: (I) => {
        var Y = U2(), J = R(Y), B = V(R(J));
        const E = /* @__PURE__ */ N(() => u(s).contentType ? [u(s).contentType] : []);
        rt(B, {
          get items() {
            return js;
          },
          style: "width: 100%",
          defaultValue: ["text"],
          get value() {
            return u(E);
          },
          onSelect: h
        }), $(J);
        var D = V(J, 2), x = V(R(D));
        const P = /* @__PURE__ */ N(() => u(s).formType ? [u(s).formType] : []);
        rt(x, {
          get items() {
            return fm;
          },
          style: "width: 100%",
          defaultValue: ["input"],
          get value() {
            return u(P);
          },
          onSelect: f
        }), $(D);
        var C = V(D, 2);
        {
          var H = (ee) => {
            var Q = G2(), X = V(R(Q));
            const j = /* @__PURE__ */ N(() => u(s).enums?.join(`
`));
            ze(X, {
              rows: 3,
              style: "width: 100%;",
              onchange: (q) => {
                l("enums", q.target?.value.trim().split(`
`));
              },
              get value() {
                return u(j);
              },
              placeholder: "一行一个选项"
            }), $(Q), M(ee, Q);
          };
          se(C, (ee) => {
            (u(s).formType === "radio" || u(s).formType === "checkbox" || u(s).formType === "select") && ee(H);
          });
        }
        var z = V(C, 2), A = V(R(z));
        ze(A, {
          rows: 1,
          style: "width: 100%;",
          onchange: (ee) => {
            c("formLabel", ee);
          },
          get value() {
            return u(s).formLabel;
          }
        }), $(z);
        var F = V(z, 2), Z = V(R(F));
        ze(Z, {
          rows: 2,
          style: "width: 100%;",
          onchange: (ee) => {
            c("formDescription", ee);
          },
          get value() {
            return u(s).formDescription;
          }
        }), $(F);
        var G = V(F, 2), ne = R(G);
        Se(ne, {
          onclick: y,
          children: (ee, Q) => {
            ye();
            var X = Ce("删除");
            M(ee, X);
          },
          $$slots: { default: !0 }
        }), $(G), $(Y), M(I, Y);
      },
      children: (I, Y) => {
        Se(I, {
          class: "input-btn-more",
          children: (J, B) => {
            var E = J2();
            M(J, E);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (I) => v = I,
    () => v
  ), $(S), M(e, k), ce({
    get parameter() {
      return n();
    },
    set parameter(L) {
      n(L), p();
    },
    get index() {
      return r();
    },
    set index(L) {
      r(L), p();
    }
  });
}
ie(vd, { parameter: {}, index: {} }, [], [], !0);
var ty = /* @__PURE__ */ U('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), ny = /* @__PURE__ */ U('<div class="none-params svelte-3n0wca">无输入参数</div>'), ry = /* @__PURE__ */ U('<div class="input-container svelte-3n0wca"><!> <!></div>');
const oy = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function pd(e, t) {
  le(t, !0), De(e, oy);
  let n = We(), r = bn(n), o = /* @__PURE__ */ N(() => [...r?.current?.data?.parameters || []]);
  var i = ry(), s = R(i);
  {
    var a = (c) => {
      var d = ty();
      ye(4), M(c, d);
    };
    se(s, (c) => {
      u(o).length !== 0 && c(a);
    });
  }
  var l = V(s, 2);
  ct(
    l,
    19,
    () => u(o),
    (c) => c.id,
    (c, d, g) => {
      vd(c, {
        get parameter() {
          return u(d);
        },
        get index() {
          return u(g);
        }
      });
    },
    (c) => {
      var d = ny();
      M(c, d);
    }
  ), $(i), M(e, i), ce();
}
ie(pd, {}, [], [], !0);
const Ur = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = Qn()), Ur(t.children);
}), e), Bt = () => {
  const { updateNodeData: e } = it();
  return {
    addParameter: (t, n = "parameters", r) => {
      Array.isArray(r) ? r.forEach((s) => Ur(s?.children)) : Ur(r?.children);
      function o(s) {
        return {
          name: "",
          dataType: "String",
          refType: "ref",
          ...s,
          id: Qn()
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
var iy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), sy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ay = /* @__PURE__ */ U('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const ly = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function md(e, t) {
  le(t, !0), De(e, ly);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Oe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = We(), { addParameter: i } = Bt();
  return Ot(e, $e(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (a) => {
      var l = iy();
      M(a, l);
    },
    children: (a, l) => {
      var c = ay(), d = ae(c), g = R(d);
      Ne(g, {
        level: 3,
        children: (v, y) => {
          ye();
          var k = Ce("输入参数");
          M(v, k);
        },
        $$slots: { default: !0 }
      });
      var f = V(g, 2);
      Se(f, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input" });
        },
        children: (v, y) => {
          var k = sy();
          M(v, k);
        },
        $$slots: { default: !0 }
      }), $(d);
      var h = V(d, 2);
      pd(h, {}), M(a, c);
    },
    $$slots: { icon: !0, default: !0 }
  })), ce({
    get data() {
      return n();
    },
    set data(s) {
      n(s), p();
    }
  });
}
ie(md, { data: {} }, [], [], !0);
const yd = (e, t, n) => {
  for (const r of n)
    r.target === t && r.source && (e.push(r.source), yd(e, r.source, n));
}, wd = (e, t, n) => !e || e.length === 0 ? [] : e.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: t + "." + r.name,
  children: wd(r.children, t + "." + r.name, n)
})), vl = (e, t, n) => {
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
  const t = We(), n = bn(t), r = /* @__PURE__ */ N(Rt), o = /* @__PURE__ */ N(() => u(r).nodes), i = /* @__PURE__ */ N(() => u(r).edges), s = /* @__PURE__ */ N(() => u(r).nodeLookup);
  let a = /* @__PURE__ */ N(() => {
    const l = [];
    if (!n.current)
      return [];
    const c = u(s).get(t);
    if (e)
      for (const d of u(o)) {
        const g = d.parentId === n.current.id;
        if (g) {
          const f = vl(d, g, c);
          f && l.push(f);
        }
      }
    else {
      const d = [];
      yd(d, t, u(i));
      for (const g of u(o))
        if (d.includes(g.id)) {
          const f = g.parentId === n.current.id, h = vl(g, f, c);
          h && l.push(h);
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
var cy = /* @__PURE__ */ U('<div class="input-more-item svelte-laou7w">数据内容： <!></div>'), uy = /* @__PURE__ */ U('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <!> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), dy = /* @__PURE__ */ U('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const fy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function xd(e, t) {
  le(t, !0), De(e, fy), In(() => {
    u(c).refType || v({ value: "ref" });
  });
  const n = m(t, "parameter", 7), r = m(t, "index", 7), o = m(t, "dataKeyName", 7), i = m(t, "useChildrenOnly", 7), s = m(t, "showContentType", 7, !1);
  let a = We(), l = bn(a), c = /* @__PURE__ */ N(() => ({
    ...n(),
    ...l?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: d } = it(), g = (D, x) => {
    d(a, (P) => {
      let C = P.data?.[o()];
      return C[r()] = { ...C[r()], [D]: x }, { [o()]: C };
    });
  }, f = (D, x) => {
    const P = x.target.value;
    g(D, P);
  }, h = (D) => {
    const x = D.value;
    g("ref", x);
  }, v = (D) => {
    const x = D.value;
    g("refType", x);
  }, y = (D) => {
    const x = D.value;
    g("contentType", x);
  };
  let k;
  const w = () => {
    d(a, (D) => {
      let x = D.data?.[o()];
      return x.splice(r(), 1), { [o()]: [...x] };
    }), k?.hide();
  };
  let T = _d(i());
  var _ = dy(), b = ae(_), S = R(b);
  const O = /* @__PURE__ */ N(() => u(c).nameDisabled === !0);
  je(S, {
    style: "width: 100%;",
    get value() {
      return u(c).name;
    },
    placeholder: "请输入参数名称",
    get disabled() {
      return u(O);
    },
    oninput: (D) => f("name", D)
  }), $(b);
  var L = V(b, 2), I = R(L);
  {
    var Y = (D) => {
      je(D, {
        get value() {
          return u(c).value;
        },
        placeholder: "请输入参数值",
        oninput: (x) => f("value", x)
      });
    }, J = (D, x) => {
      {
        var P = (C) => {
          const H = /* @__PURE__ */ N(() => [u(c).ref]);
          rt(C, {
            get items() {
              return T.current;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return u(H);
            },
            expandAll: !0,
            onSelect: h
          });
        };
        se(
          D,
          (C) => {
            u(c).refType !== "input" && C(P);
          },
          x
        );
      }
    };
    se(I, (D) => {
      u(c).refType === "fixed" ? D(Y) : D(J, !1);
    });
  }
  $(L);
  var B = V(L, 2), E = R(B);
  return Nt(
    nr(E, {
      placement: "bottom",
      floating: (x) => {
        var P = uy(), C = R(P), H = V(R(C));
        const z = /* @__PURE__ */ N(() => u(c).refType ? [u(c).refType] : []);
        rt(H, {
          get items() {
            return dm;
          },
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return u(z);
          },
          onSelect: v
        }), $(C);
        var A = V(C, 2);
        {
          var F = (j) => {
            var q = cy(), ge = V(R(q));
            const fe = /* @__PURE__ */ N(() => u(c).contentType ? [u(c).contentType] : []);
            rt(ge, {
              get items() {
                return js;
              },
              style: "width: 100%",
              defaultValue: ["text"],
              get value() {
                return u(fe);
              },
              onSelect: y
            }), $(q), M(j, q);
          };
          se(A, (j) => {
            s() && j(F);
          });
        }
        var Z = V(A, 2), G = V(R(Z));
        ze(G, {
          rows: 1,
          style: "width: 100%;",
          onchange: (j) => {
            f("defaultValue", j);
          },
          get value() {
            return u(c).defaultValue;
          }
        }), $(Z);
        var ne = V(Z, 2), ee = V(R(ne));
        ze(ee, {
          rows: 3,
          style: "width: 100%;",
          onchange: (j) => {
            f("description", j);
          },
          get value() {
            return u(c).description;
          }
        }), $(ne);
        var Q = V(ne, 2), X = R(Q);
        Se(X, {
          onclick: w,
          children: (j, q) => {
            ye();
            var ge = Ce("删除");
            M(j, ge);
          },
          $$slots: { default: !0 }
        }), $(Q), $(P), M(x, P);
      },
      children: (x, P) => {
        po(x, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (x) => k = x,
    () => k
  ), $(B), M(e, _), ce({
    get parameter() {
      return n();
    },
    set parameter(D) {
      n(D), p();
    },
    get index() {
      return r();
    },
    set index(D) {
      r(D), p();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(D) {
      o(D), p();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(D) {
      i(D), p();
    },
    get showContentType() {
      return s();
    },
    set showContentType(D = !1) {
      s(D), p();
    }
  });
}
ie(
  xd,
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
var gy = /* @__PURE__ */ U('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), hy = /* @__PURE__ */ U('<div class="none-params svelte-1sm1mgi"> </div>'), vy = /* @__PURE__ */ U('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const py = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function pt(e, t) {
  le(t, !0), De(e, py);
  const n = m(t, "noneParameterText", 7, "无输入参数"), r = m(t, "dataKeyName", 7, "parameters"), o = m(t, "useChildrenOnly", 7), i = m(t, "showContentType", 7, !1);
  let s = We(), a = bn(s), l = /* @__PURE__ */ N(() => [...a?.current?.data?.[r()] || []]);
  var c = vy(), d = R(c);
  {
    var g = (h) => {
      var v = gy();
      ye(4), M(h, v);
    };
    se(d, (h) => {
      u(l).length !== 0 && h(g);
    });
  }
  var f = V(d, 2);
  return ct(
    f,
    19,
    () => u(l),
    (h) => h.id,
    (h, v, y) => {
      xd(h, {
        get parameter() {
          return u(v);
        },
        get index() {
          return u(y);
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
    (h) => {
      var v = hy(), y = R(v, !0);
      $(v), be(() => He(y, n())), M(h, v);
    }
  ), $(c), M(e, c), ce({
    get noneParameterText() {
      return n();
    },
    set noneParameterText(h = "无输入参数") {
      n(h), p();
    },
    get dataKeyName() {
      return r();
    },
    set dataKeyName(h = "parameters") {
      r(h), p();
    },
    get useChildrenOnly() {
      return o();
    },
    set useChildrenOnly(h) {
      o(h), p();
    },
    get showContentType() {
      return i();
    },
    set showContentType(h = !1) {
      i(h), p();
    }
  });
}
ie(
  pt,
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
var my = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), yy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), wy = /* @__PURE__ */ U('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const _y = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function bd(e, t) {
  le(t, !0), De(e, _y);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Oe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = We(), { addParameter: i } = Bt();
  return Ot(e, $e(
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
        var l = my();
        M(a, l);
      },
      children: (a, l) => {
        var c = wy(), d = ae(c), g = R(d);
        Ne(g, {
          level: 3,
          children: (v, y) => {
            ye();
            var k = Ce("输出参数");
            M(v, k);
          },
          $$slots: { default: !0 }
        });
        var f = V(g, 2);
        Se(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (v, y) => {
            var k = yy();
            M(v, k);
          },
          $$slots: { default: !0 }
        }), $(d);
        var h = V(d, 2);
        pt(h, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          showContentType: !0
        }), M(a, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(s) {
      n(s), p();
    }
  });
}
ie(bd, { data: {} }, [], [], !0);
const Oi = (e) => JSON.parse(JSON.stringify(e));
var xy = /* @__PURE__ */ ve('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), by = /* @__PURE__ */ U('<div class="input-more-item svelte-1cfeest"><!></div>'), Cy = /* @__PURE__ */ U('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), ky = /* @__PURE__ */ U('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const Ey = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Cd(e, t) {
  le(t, !0), De(e, Ey);
  const n = m(t, "parameter", 7), r = m(t, "position", 7), o = m(t, "dataKeyName", 7), i = m(t, "placeholder", 7, "请输入参数值");
  let s = We(), a = bn(s), l = /* @__PURE__ */ N(() => {
    let x = a?.current?.data?.[o()], P;
    if (x && r().length > 0) {
      let C = x;
      for (let H = 0; H < r().length; H++) {
        const z = r()[H];
        H == r().length - 1 ? P = C[z] : C = C[z].children;
      }
    }
    return { ...n(), ...P };
  });
  const { updateNodeData: c } = it(), d = (x, P) => {
    c(s, (C) => {
      const H = C.data?.[o()];
      if (H && r().length > 0) {
        let z = H;
        for (let A = 0; A < r().length; A++) {
          const F = r()[A];
          A == r().length - 1 ? z[F] = { ...z[F], [x]: P } : z = z[F].children;
        }
      }
      return { [o()]: [...Oi(H)] };
    });
  }, g = (x, P) => {
    const C = P.target.value;
    d(x, C);
  }, f = (x) => {
    const P = x.value;
    d("dataType", P);
  };
  let h;
  const v = () => {
    c(s, (x) => {
      let P = x.data?.[o()];
      if (P && r().length > 0) {
        let C = P;
        for (let H = 0; H < r().length; H++) {
          const z = r()[H];
          H == r().length - 1 ? C.splice(z, 1) : C = C[z].children;
        }
      }
      return { [o()]: [...Oi(P)] };
    }), h?.hide();
  }, y = () => {
    c(s, (x) => {
      let P = x.data?.[o()];
      if (P && r().length > 0) {
        let C = P;
        for (let H = 0; H < r().length; H++) {
          const z = r()[H];
          H == r().length - 1 ? C[z].children ? C[z].children.push({ id: Qn(), name: "newParam", dataType: "String" }) : C[z].children = [{ id: Qn(), name: "newParam", dataType: "String" }] : C = C[z].children;
        }
      }
      return { [o()]: [...Oi(P)] };
    });
  };
  var k = ky(), w = ae(k), T = R(w);
  {
    var _ = (x) => {
      var P = Te(), C = ae(P);
      ct(C, 17, r, hr, (H, z) => {
        ye();
        var A = Ce(" ");
        M(H, A);
      }), M(x, P);
    };
    se(T, (x) => {
      r().length > 1 && x(_);
    });
  }
  var b = V(T, 2);
  const S = /* @__PURE__ */ N(() => u(l).nameDisabled === !0);
  je(b, {
    style: "width: 100%;",
    get value() {
      return u(l).name;
    },
    get placeholder() {
      return i();
    },
    oninput: (x) => {
      g("name", x);
    },
    get disabled() {
      return u(S);
    }
  }), $(w);
  var O = V(w, 2), L = R(O);
  const I = /* @__PURE__ */ N(() => u(l).dataType ? [u(l).dataType] : []), Y = /* @__PURE__ */ N(() => u(l).dataTypeDisabled === !0);
  rt(L, {
    get items() {
      return um;
    },
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return u(I);
    },
    get disabled() {
      return u(Y);
    },
    onSelect: f
  });
  var J = V(L, 2);
  {
    var B = (x) => {
      Se(x, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: y,
        children: (P, C) => {
          var H = xy();
          M(P, H);
        },
        $$slots: { default: !0 }
      });
    };
    se(J, (x) => {
      (u(l).dataType === "Object" || u(l).dataType === "Array") && u(l).addChildDisabled !== !0 && x(B);
    });
  }
  $(O);
  var E = V(O, 2), D = R(E);
  return Nt(
    nr(D, {
      placement: "bottom",
      floating: (P) => {
        var C = Cy(), H = R(C), z = V(R(H));
        const A = /* @__PURE__ */ N(() => u(l).defaultValue || "");
        ze(z, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return u(A);
          },
          onchange: (Q) => {
            g("defaultValue", Q);
          }
        }), $(H);
        var F = V(H, 2), Z = V(R(F));
        const G = /* @__PURE__ */ N(() => u(l).description || "");
        ze(Z, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return u(G);
          },
          onchange: (Q) => {
            g("description", Q);
          }
        }), $(F);
        var ne = V(F, 2);
        {
          var ee = (Q) => {
            var X = by(), j = R(X);
            Se(j, {
              onclick: v,
              children: (q, ge) => {
                ye();
                var fe = Ce("删除");
                M(q, fe);
              },
              $$slots: { default: !0 }
            }), $(X), M(Q, X);
          };
          se(ne, (Q) => {
            u(l).deleteDisabled !== !0 && Q(ee);
          });
        }
        $(C), M(P, C);
      },
      children: (P, C) => {
        po(P, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (P) => h = P,
    () => h
  ), $(E), M(e, k), ce({
    get parameter() {
      return n();
    },
    set parameter(x) {
      n(x), p();
    },
    get position() {
      return r();
    },
    set position(x) {
      r(x), p();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(x) {
      o(x), p();
    },
    get placeholder() {
      return i();
    },
    set placeholder(x = "请输入参数值") {
      i(x), p();
    }
  });
}
ie(
  Cd,
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
var Sy = /* @__PURE__ */ U("<!> <!>", 1), Ny = /* @__PURE__ */ U('<div class="none-params svelte-1sm1mgi"> </div>'), Py = /* @__PURE__ */ U('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Ty = /* @__PURE__ */ U('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Dy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function kn(e, t) {
  le(t, !0), De(e, Dy);
  const n = (h, v = ot, y = ot) => {
    var k = Te(), w = ae(k);
    ct(
      w,
      19,
      v,
      (T) => `${T.id}_${T.children ? T.children.length : 0}`,
      (T, _, b) => {
        var S = Sy(), O = ae(S);
        const L = /* @__PURE__ */ N(() => [...y(), u(b)]);
        Cd(O, {
          get parameter() {
            return u(_);
          },
          get position() {
            return u(L);
          },
          get dataKeyName() {
            return o();
          },
          get placeholder() {
            return i();
          }
        });
        var I = V(O, 2);
        {
          var Y = (J) => {
            var B = /* @__PURE__ */ _s(() => [...y(), u(b)]);
            n(J, () => u(_).children, () => u(B));
          };
          se(I, (J) => {
            u(_).children && J(Y);
          });
        }
        M(T, S);
      },
      (T) => {
        var _ = Te(), b = ae(_);
        {
          var S = (O) => {
            var L = Ny(), I = R(L, !0);
            $(L), be(() => He(I, r())), M(O, L);
          };
          se(b, (O) => {
            y().length === 0 && O(S);
          });
        }
        M(T, _);
      }
    ), M(h, k);
  }, r = m(t, "noneParameterText", 7, "无输出参数"), o = m(t, "dataKeyName", 7, "outputDefs"), i = m(t, "placeholder", 7, "请输入参数名称");
  let s = We(), a = bn(s), l = /* @__PURE__ */ N(() => [...a?.current?.data?.[o()] || []]);
  var c = Ty(), d = R(c);
  {
    var g = (h) => {
      var v = Py();
      ye(4), M(h, v);
    };
    se(d, (h) => {
      u(l).length !== 0 && h(g);
    });
  }
  var f = V(d, 2);
  return n(f, () => u(l) || [], () => []), $(c), M(e, c), ce({
    get noneParameterText() {
      return r();
    },
    set noneParameterText(h = "无输出参数") {
      r(h), p();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(h = "outputDefs") {
      o(h), p();
    },
    get placeholder() {
      return i();
    },
    set placeholder(h = "请输入参数名称") {
      i(h), p();
    }
  });
}
ie(kn, { noneParameterText: {}, dataKeyName: {}, placeholder: {} }, [], [], !0);
var Ay = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), My = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Oy = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), Ly = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), Vy = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), Hy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), $y = /* @__PURE__ */ U('<div class="heading svelte-q0cqsa"><!> <!></div> <!> <!> <div class="setting-title svelte-q0cqsa">模型</div> <div class="setting-item svelte-q0cqsa"><!> <!></div> <div class="setting-title svelte-q0cqsa">采样参数</div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="100" step="1"/></div></div> <div class="setting-title svelte-q0cqsa">系统提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="setting-title svelte-q0cqsa">用户提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="heading svelte-q0cqsa"><!> <!> <!></div> <!>', 1);
const Iy = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function kd(e, t) {
  le(t, !0), De(e, Iy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Oe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = We(), { addParameter: i } = Bt(), s = Hn();
  let a = /* @__PURE__ */ ke(Mt([]));
  In(async () => {
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
  return Ze(() => {
    n().outType || c("text");
  }), Ot(e, $e(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (g) => {
        var f = Ay();
        M(g, f);
      },
      children: (g, f) => {
        var h = $y(), v = ae(h), y = R(v);
        Ne(y, {
          level: 3,
          children: (he, ue) => {
            ye();
            var pe = Ce("输入参数");
            M(he, pe);
          },
          $$slots: { default: !0 }
        });
        var k = V(y, 2);
        Se(k, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (he, ue) => {
            var pe = My();
            M(he, pe);
          },
          $$slots: { default: !0 }
        }), $(v);
        var w = V(v, 2);
        pt(w, {});
        var T = V(w, 2);
        Ne(T, {
          level: 3,
          mt: "10px",
          children: (he, ue) => {
            ye();
            var pe = Ce("模型设置");
            M(he, pe);
          },
          $$slots: { default: !0 }
        });
        var _ = V(T, 4), b = R(_);
        const S = /* @__PURE__ */ N(() => n().llmId ? [n().llmId] : []);
        rt(b, {
          get items() {
            return u(a);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (he) => {
            const ue = he.value;
            l(o, () => ({ llmId: ue }));
          },
          get value() {
            return u(S);
          }
        });
        var O = V(b, 2);
        po(O, {}), $(_);
        var L = V(_, 4), I = R(L), Y = R(I), J = R(Y);
        $(Y);
        var B = V(Y, 2);
        Xt(B), B.__input = [Oy, l, o], $(I), $(L);
        var E = V(L, 2), D = R(E), x = R(D), P = R(x);
        $(x);
        var C = V(x, 2);
        Xt(C), C.__input = [Ly, l, o], $(D), $(E);
        var H = V(E, 2), z = R(H), A = R(z), F = R(A);
        $(A);
        var Z = V(A, 2);
        Xt(Z), Z.__input = [Vy, l, o], $(z), $(H);
        var G = V(H, 4), ne = R(G);
        const ee = /* @__PURE__ */ N(() => n().systemPrompt || "");
        ze(ne, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return u(ee);
          },
          oninput: (he) => {
            l(o, { systemPrompt: he.target.value });
          }
        }), $(G);
        var Q = V(G, 4), X = R(Q);
        const j = /* @__PURE__ */ N(() => n().userPrompt || "");
        ze(X, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return u(j);
          },
          oninput: (he) => {
            l(o, { userPrompt: he.target.value });
          }
        }), $(Q);
        var q = V(Q, 2), ge = R(q);
        Ne(ge, {
          level: 3,
          children: (he, ue) => {
            ye();
            var pe = Ce("输出参数");
            M(he, pe);
          },
          $$slots: { default: !0 }
        });
        var fe = V(ge, 2);
        const re = /* @__PURE__ */ N(() => n().outType ? [n().outType] : []);
        rt(fe, {
          items: [
            { label: "文本", value: "text" },
            { label: "JSON", value: "json" }
          ],
          style: "width: 100px;margin-left: auto",
          defaultValue: "text",
          onSelect: (he) => {
            c(he.value);
          },
          get value() {
            return u(re);
          }
        });
        var oe = V(fe, 2);
        {
          var de = (he) => {
            Se(he, {
              class: "input-btn-more",
              style: "margin-left: 10px",
              onclick: () => {
                i(o, "outputDefs");
              },
              children: (ue, pe) => {
                var K = Hy();
                M(ue, K);
              },
              $$slots: { default: !0 }
            });
          };
          se(oe, (he) => {
            n().outType === "json" && he(de);
          });
        }
        $(q);
        var te = V(q, 2);
        kn(te, {}), be(() => {
          He(J, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), So(B, n().temperature ?? 0.5), He(P, `Top P: ${n().topP ?? 0.9 ?? ""}`), So(C, n().topP ?? 0.9), He(F, `Top K: ${n().topK ?? 50 ?? ""}`), So(Z, n().topK ?? 50);
        }), M(g, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(d) {
      n(d), p();
    }
  });
}
_n(["input"]);
ie(kd, { data: {} }, [], [], !0);
var zy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Ry = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), By = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Fy = /* @__PURE__ */ U('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const Ky = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Ed(e, t) {
  le(t, !0), De(e, Ky);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Oe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  In(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = We(), { addParameter: i } = Bt(), { updateNodeData: s } = it(), a = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  return Ot(e, $e(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = zy();
        M(c, d);
      },
      children: (c, d) => {
        var g = Fy(), f = ae(g), h = R(f);
        Ne(h, {
          level: 3,
          children: (B, E) => {
            ye();
            var D = Ce("输入参数");
            M(B, D);
          },
          $$slots: { default: !0 }
        });
        var v = V(h, 2);
        Se(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (B, E) => {
            var D = Ry();
            M(B, D);
          },
          $$slots: { default: !0 }
        }), $(f);
        var y = V(f, 2);
        pt(y, {});
        var k = V(y, 2);
        Ne(k, {
          level: 3,
          mt: "10px",
          children: (B, E) => {
            ye();
            var D = Ce("代码");
            M(B, D);
          },
          $$slots: { default: !0 }
        });
        var w = V(k, 4), T = R(w);
        const _ = /* @__PURE__ */ N(() => n().engine ? [n().engine] : ["qlexpress"]);
        rt(T, {
          get items() {
            return a;
          },
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (B) => {
            const E = B.value;
            s(o, () => ({ engine: E }));
          },
          get value() {
            return u(_);
          }
        }), $(w);
        var b = V(w, 4), S = R(b);
        const O = /* @__PURE__ */ N(() => n().code || "");
        ze(S, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (B) => {
            s(o, () => ({ code: B.target.value }));
          },
          get value() {
            return u(O);
          }
        }), $(b);
        var L = V(b, 2), I = R(L);
        Ne(I, {
          level: 3,
          mt: "10px",
          children: (B, E) => {
            ye();
            var D = Ce("输出参数");
            M(B, D);
          },
          $$slots: { default: !0 }
        });
        var Y = V(I, 2);
        Se(Y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (B, E) => {
            var D = By();
            M(B, D);
          },
          $$slots: { default: !0 }
        }), $(L);
        var J = V(L, 2);
        kn(J, {}), M(c, g);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(l) {
      n(l), p();
    }
  });
}
ie(Ed, { data: {} }, [], [], !0);
var qy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), Zy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Yy = /* @__PURE__ */ U('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Wy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Sd(e, t) {
  le(t, !0), De(e, Wy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Oe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = We(), { addParameter: i } = Bt(), { updateNodeData: s } = it();
  return Ze(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), Ot(e, $e(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var c = qy();
        M(l, c);
      },
      children: (l, c) => {
        var d = Yy(), g = ae(d), f = R(g);
        Ne(f, {
          level: 3,
          children: (O, L) => {
            ye();
            var I = Ce("输入参数");
            M(O, I);
          },
          $$slots: { default: !0 }
        });
        var h = V(f, 2);
        Se(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (O, L) => {
            var I = Zy();
            M(O, I);
          },
          $$slots: { default: !0 }
        }), $(g);
        var v = V(g, 2);
        pt(v, {});
        var y = V(v, 2);
        Ne(y, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (O, L) => {
            ye();
            var I = Ce("模板内容");
            M(O, I);
          },
          $$slots: { default: !0 }
        });
        var k = V(y, 2), w = R(k);
        const T = /* @__PURE__ */ N(() => n().template || "");
        ze(w, {
          rows: 10,
          placeholder: "请输入模板内容",
          style: "width: 100%",
          onchange: (O) => {
            s(o, () => ({ template: O.target.value }));
          },
          get value() {
            return u(T);
          }
        }), $(k);
        var _ = V(k, 2), b = R(_);
        Ne(b, {
          level: 3,
          mt: "10px",
          children: (O, L) => {
            ye();
            var I = Ce("输出参数");
            M(O, I);
          },
          $$slots: { default: !0 }
        }), $(_);
        var S = V(_, 2);
        kn(S, {}), M(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(a) {
      n(a), p();
    }
  });
}
ie(Sd, { data: {} }, [], [], !0);
var Xy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), jy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Gy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Uy = /* @__PURE__ */ U('<!> <div class="radio-group svelte-1dxz5e"><label class="svelte-1dxz5e"><!>none</label> <label class="svelte-1dxz5e"><!>form-data</label> <label class="svelte-1dxz5e"><!>x-www-form-urlencoded</label> <label class="svelte-1dxz5e"><!>json</label> <label class="svelte-1dxz5e"><!>raw</label></div>', 1), Jy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Qy = /* @__PURE__ */ U('<div class="heading svelte-1dxz5e" style="padding-top: 10px"><!> <!></div> <!>', 1), ew = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), tw = /* @__PURE__ */ U('<div class="heading svelte-1dxz5e" style="padding-top: 10px"><!> <!></div> <!>', 1), nw = /* @__PURE__ */ U('<div style="width: 100%"><!></div>'), rw = /* @__PURE__ */ U('<div style="width: 100%"><!></div>'), ow = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), iw = /* @__PURE__ */ U('<div class="heading svelte-1dxz5e"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1dxz5e"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class="heading svelte-1dxz5e"><!> <!></div> <!>', 1);
const sw = {
  hash: "svelte-1dxz5e",
  code: ".heading.svelte-1dxz5e {display:flex;margin-bottom:10px;}.radio-group.svelte-1dxz5e {display:flex;margin:10px 0;flex-wrap:wrap;}.radio-group.svelte-1dxz5e label:where(.svelte-1dxz5e) {display:flex;font-size:14px;box-sizing:border-box;}"
};
function Nd(e, t) {
  le(t, !0), De(e, sw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Oe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  In(() => {
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
  ], i = We(), { addParameter: s } = Bt(), { updateNodeData: a } = it();
  return Ot(e, $e(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = Xy();
        M(c, d);
      },
      children: (c, d) => {
        var g = iw(), f = ae(g), h = R(f);
        Ne(h, {
          level: 3,
          children: (X, j) => {
            ye();
            var q = Ce("输入参数");
            M(X, q);
          },
          $$slots: { default: !0 }
        });
        var v = V(h, 2);
        Se(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (X, j) => {
            var q = jy();
            M(X, q);
          },
          $$slots: { default: !0 }
        }), $(f);
        var y = V(f, 2);
        pt(y, {});
        var k = V(y, 2);
        Ne(k, {
          level: 3,
          mt: "10px",
          children: (X, j) => {
            ye();
            var q = Ce("URL 地址");
            M(X, q);
          },
          $$slots: { default: !0 }
        });
        var w = V(k, 2), T = R(w), _ = R(T);
        const b = /* @__PURE__ */ N(() => n().method ? [n().method] : ["get"]);
        rt(_, {
          get items() {
            return o;
          },
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (X) => {
            const j = X.value;
            a(i, () => ({ method: j }));
          },
          get value() {
            return u(b);
          }
        }), $(T);
        var S = V(T, 2), O = R(S);
        const L = /* @__PURE__ */ N(() => n().url || "");
        je(O, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (X) => {
            a(i, () => ({ url: X.target.value }));
          },
          get value() {
            return u(L);
          }
        }), $(S), $(w);
        var I = V(w, 2), Y = R(I);
        Ne(Y, {
          level: 3,
          children: (X, j) => {
            ye();
            var q = Ce("Http 头信息");
            M(X, q);
          },
          $$slots: { default: !0 }
        });
        var J = V(Y, 2);
        Se(J, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (X, j) => {
            var q = Gy();
            M(X, q);
          },
          $$slots: { default: !0 }
        }), $(I);
        var B = V(I, 2);
        pt(B, { dataKeyName: "headers" });
        var E = V(B, 2);
        {
          var D = (X) => {
            var j = Uy(), q = ae(j);
            Ne(q, {
              level: 3,
              mt: "10px",
              children: (qe, et) => {
                ye();
                var Je = Ce("Body");
                M(qe, Je);
              },
              $$slots: { default: !0 }
            });
            var ge = V(q, 2), fe = R(ge), re = R(fe);
            const oe = /* @__PURE__ */ N(() => !n().bodyType || n().bodyType === "");
            je(re, {
              type: "radio",
              name: "bodyType",
              value: "",
              get checked() {
                return u(oe);
              },
              onchange: (qe) => {
                qe.target?.checked && a(i, { bodyType: "" });
              }
            }), ye(), $(fe);
            var de = V(fe, 2), te = R(de);
            const he = /* @__PURE__ */ N(() => n().bodyType === "form-data");
            je(te, {
              type: "radio",
              name: "bodyType",
              value: "form-data",
              get checked() {
                return u(he);
              },
              onchange: (qe) => {
                qe.target?.checked && a(i, { bodyType: "form-data" });
              }
            }), ye(), $(de);
            var ue = V(de, 2), pe = R(ue);
            const K = /* @__PURE__ */ N(() => n().bodyType === "x-www-form-urlencoded");
            je(pe, {
              type: "radio",
              name: "bodyType",
              value: "x-www-form-urlencoded",
              get checked() {
                return u(K);
              },
              onchange: (qe) => {
                qe.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
              }
            }), ye(), $(ue);
            var Ie = V(ue, 2), Ae = R(Ie);
            const Le = /* @__PURE__ */ N(() => n().bodyType === "json");
            je(Ae, {
              type: "radio",
              name: "bodyType",
              value: "json",
              get checked() {
                return u(Le);
              },
              onchange: (qe) => {
                qe.target?.checked && a(i, { bodyType: "json" });
              }
            }), ye(), $(Ie);
            var Ke = V(Ie, 2), Ve = R(Ke);
            const gt = /* @__PURE__ */ N(() => n().bodyType === "raw");
            je(Ve, {
              type: "radio",
              name: "bodyType",
              value: "raw",
              get checked() {
                return u(gt);
              },
              onchange: (qe) => {
                qe.target?.checked && a(i, { bodyType: "raw" });
              }
            }), ye(), $(Ke), $(ge), M(X, j);
          };
          se(E, (X) => {
            (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && X(D);
          });
        }
        var x = V(E, 2);
        {
          var P = (X) => {
            var j = Qy(), q = ae(j), ge = R(q);
            Ne(ge, {
              level: 3,
              children: (oe, de) => {
                ye();
                var te = Ce("参数");
                M(oe, te);
              },
              $$slots: { default: !0 }
            });
            var fe = V(ge, 2);
            Se(fe, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (oe, de) => {
                var te = Jy();
                M(oe, te);
              },
              $$slots: { default: !0 }
            }), $(q);
            var re = V(q, 2);
            pt(re, { dataKeyName: "formData" }), M(X, j);
          };
          se(x, (X) => {
            n().bodyType === "form-data" && X(P);
          });
        }
        var C = V(x, 2);
        {
          var H = (X) => {
            var j = tw(), q = ae(j), ge = R(q);
            Ne(ge, {
              level: 3,
              children: (oe, de) => {
                ye();
                var te = Ce("Body 参数");
                M(oe, te);
              },
              $$slots: { default: !0 }
            });
            var fe = V(ge, 2);
            Se(fe, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (oe, de) => {
                var te = ew();
                M(oe, te);
              },
              $$slots: { default: !0 }
            }), $(q);
            var re = V(q, 2);
            pt(re, { dataKeyName: "formUrlencoded" }), M(X, j);
          };
          se(C, (X) => {
            n().bodyType === "x-www-form-urlencoded" && X(H);
          });
        }
        var z = V(C, 2);
        {
          var A = (X) => {
            var j = nw(), q = R(j);
            ze(q, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (ge) => {
                a(i, { bodyJson: ge.target.value });
              }
            }), $(j), M(X, j);
          };
          se(z, (X) => {
            n().bodyType === "json" && X(A);
          });
        }
        var F = V(z, 2);
        {
          var Z = (X) => {
            var j = rw(), q = R(j);
            ze(q, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (ge) => {
                a(i, { bodyRaw: ge.target.value });
              }
            }), $(j), M(X, j);
          };
          se(F, (X) => {
            n().bodyType === "raw" && X(Z);
          });
        }
        var G = V(F, 2), ne = R(G);
        Ne(ne, {
          level: 3,
          mt: "10px",
          children: (X, j) => {
            ye();
            var q = Ce("输出参数");
            M(X, q);
          },
          $$slots: { default: !0 }
        });
        var ee = V(ne, 2);
        Se(ee, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (X, j) => {
            var q = ow();
            M(X, q);
          },
          $$slots: { default: !0 }
        }), $(G);
        var Q = V(G, 2);
        kn(Q, {}), M(c, g);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(l) {
      n(l), p();
    }
  });
}
ie(Nd, { data: {} }, [], [], !0);
var aw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), lw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), cw = /* @__PURE__ */ U('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const uw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Pd(e, t) {
  le(t, !0), De(e, uw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Oe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = We(), { addParameter: i } = Bt(), s = Hn();
  let a = /* @__PURE__ */ ke(Mt([]));
  In(async () => {
    const c = await s.provider?.knowledge?.();
    u(a).push(...c || []);
  });
  const { updateNodeData: l } = it();
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
  }), Ot(e, $e(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var g = aw();
        M(d, g);
      },
      children: (d, g) => {
        var f = cw(), h = ae(f), v = R(h);
        Ne(v, {
          level: 3,
          children: (D, x) => {
            ye();
            var P = Ce("输入参数");
            M(D, P);
          },
          $$slots: { default: !0 }
        });
        var y = V(v, 2);
        Se(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (D, x) => {
            var P = lw();
            M(D, P);
          },
          $$slots: { default: !0 }
        }), $(h);
        var k = V(h, 2);
        pt(k, {});
        var w = V(k, 2);
        Ne(w, {
          level: 3,
          mt: "10px",
          children: (D, x) => {
            ye();
            var P = Ce("知识库设置");
            M(D, P);
          },
          $$slots: { default: !0 }
        });
        var T = V(w, 4), _ = R(T);
        const b = /* @__PURE__ */ N(() => n().knowledgeId ? [n().knowledgeId] : []);
        rt(_, {
          get items() {
            return u(a);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (D) => {
            const x = D.value;
            l(o, () => ({ knowledgeId: x }));
          },
          get value() {
            return u(b);
          }
        }), $(T);
        var S = V(T, 4), O = R(S);
        je(O, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (D) => {
            const x = D.target.value;
            l(o, () => ({ keyword: x }));
          }
        }), $(S);
        var L = V(S, 4), I = R(L);
        const Y = /* @__PURE__ */ N(() => n().limit || "");
        je(I, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          onchange: (D) => {
            const x = D.target.value;
            l(o, () => ({ limit: x }));
          },
          get value() {
            return u(Y);
          }
        }), $(L);
        var J = V(L, 2), B = R(J);
        Ne(B, {
          level: 3,
          mt: "10px",
          children: (D, x) => {
            ye();
            var P = Ce("输出参数");
            M(D, P);
          },
          $$slots: { default: !0 }
        }), $(J);
        var E = V(J, 2);
        kn(E, {}), M(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(c) {
      n(c), p();
    }
  });
}
ie(Pd, { data: {} }, [], [], !0);
var dw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), fw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), gw = /* @__PURE__ */ U('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const hw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Td(e, t) {
  le(t, !0), De(e, hw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Oe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = We(), { addParameter: i } = Bt(), s = Hn();
  let a = /* @__PURE__ */ ke(Mt([]));
  In(async () => {
    const c = await s.provider?.searchEngine?.();
    u(a).push(...c || []);
  });
  const { updateNodeData: l } = it();
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
  }), Ot(e, $e(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var g = dw();
        M(d, g);
      },
      children: (d, g) => {
        var f = gw(), h = ae(f), v = R(h);
        Ne(v, {
          level: 3,
          children: (E, D) => {
            ye();
            var x = Ce("输入参数");
            M(E, x);
          },
          $$slots: { default: !0 }
        });
        var y = V(v, 2);
        Se(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (E, D) => {
            var x = fw();
            M(E, x);
          },
          $$slots: { default: !0 }
        }), $(h);
        var k = V(h, 2);
        pt(k, {});
        var w = V(k, 2);
        Ne(w, {
          level: 3,
          mt: "10px",
          children: (E, D) => {
            ye();
            var x = Ce("搜索引擎设置");
            M(E, x);
          },
          $$slots: { default: !0 }
        });
        var T = V(w, 4), _ = R(T);
        const b = /* @__PURE__ */ N(() => n().engine ? [n().engine] : []);
        rt(_, {
          get items() {
            return u(a);
          },
          style: "width: 100%",
          placeholder: "请选择搜索引擎",
          onSelect: (E) => {
            const D = E.value;
            l(o, () => ({ engine: D }));
          },
          get value() {
            return u(b);
          }
        }), $(T);
        var S = V(T, 4), O = R(S);
        je(O, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (E) => {
            const D = E.target.value;
            l(o, () => ({ keyword: D }));
          }
        }), $(S);
        var L = V(S, 4), I = R(L);
        je(I, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (E) => {
            const D = E.target.value;
            l(o, () => ({ limit: D }));
          }
        }), $(L);
        var Y = V(L, 2), J = R(Y);
        Ne(J, {
          level: 3,
          mt: "10px",
          children: (E, D) => {
            ye();
            var x = Ce("输出参数");
            M(E, x);
          },
          $$slots: { default: !0 }
        }), $(Y);
        var B = V(Y, 2);
        kn(B, {}), M(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(c) {
      n(c), p();
    }
  });
}
ie(Td, { data: {} }, [], [], !0);
var vw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), pw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), mw = /* @__PURE__ */ U('<div class="heading svelte-1eqcy61"><!></div> <!> <div class="heading svelte-1eqcy61"><!> <!></div> <!>', 1);
const yw = {
  hash: "svelte-1eqcy61",
  code: ".heading.svelte-1eqcy61 {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function Dd(e, t) {
  le(t, !0), De(e, yw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Oe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = We(), { addParameter: i } = Bt();
  return Ze(() => {
    (!n().loopVars || n().loopVars.length === 0) && i(o, "loopVars", { name: "loopVar", nameDisabled: !0, deleteDisabled: !0 });
  }), Ot(e, $e(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var c = vw();
        M(l, c);
      },
      handle: (l) => {
        Ln(l, {
          type: "source",
          get position() {
            return we.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (l, c) => {
        var d = mw(), g = ae(d), f = R(g);
        Ne(f, {
          level: 3,
          children: (T, _) => {
            ye();
            var b = Ce("循环变量");
            M(T, b);
          },
          $$slots: { default: !0 }
        }), $(g);
        var h = V(g, 2);
        pt(h, { dataKeyName: "loopVars" });
        var v = V(h, 2), y = R(v);
        Ne(y, {
          level: 3,
          children: (T, _) => {
            ye();
            var b = Ce("输出参数");
            M(T, b);
          },
          $$slots: { default: !0 }
        });
        var k = V(y, 2);
        Se(k, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (T, _) => {
            var b = pw();
            M(T, b);
          },
          $$slots: { default: !0 }
        }), $(v);
        var w = V(v, 2);
        pt(w, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), M(l, d);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(s) {
      n(s), p();
    }
  });
}
ie(Dd, { data: {} }, [], [], !0);
const ww = (e, t) => {
  const n = e.target.checked;
  t("required", n);
};
var _w = /* @__PURE__ */ U('<div class="input-more-setting svelte-2f9bnc"><div class="input-more-item svelte-2f9bnc">数据内容： <!></div> <div class="input-more-item svelte-2f9bnc">确认方式： <!></div> <div class="input-more-item svelte-2f9bnc">数据标题： <!></div> <div class="input-more-item svelte-2f9bnc">数据描述： <!></div> <label class="input-item-inline svelte-2f9bnc"><span>是否必填：</span> <input type="checkbox"/></label> <div class="input-more-item svelte-2f9bnc"><!></div></div>'), xw = /* @__PURE__ */ U('<div class="input-item svelte-2f9bnc"><!></div> <div class="input-item svelte-2f9bnc"><!></div> <div class="input-item svelte-2f9bnc"><!></div>', 1);
const bw = {
  hash: "svelte-2f9bnc",
  code: ".input-item.svelte-2f9bnc {display:flex;align-items:center;}.input-item-inline.svelte-2f9bnc {display:flex;align-items:center;font-size:12px;color:#666;}.input-more-setting.svelte-2f9bnc {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-2f9bnc .input-more-item:where(.svelte-2f9bnc) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Ad(e, t) {
  le(t, !0), De(e, bw);
  const n = m(t, "parameter", 7), r = m(t, "index", 7), o = m(t, "dataKeyName", 7), i = m(t, "useChildrenOnly", 7);
  let s = We(), a = bn(s), l = /* @__PURE__ */ N(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: c } = it(), d = (E, D) => {
    c(s, (x) => {
      let P = x.data?.[o()];
      return P[r()] = { ...P[r()], [E]: D }, { [o()]: P };
    });
  }, g = (E, D) => {
    const x = D.target.value;
    d(E, x);
  }, f = (E) => {
    const D = E.value;
    d("ref", D);
  }, h = (E) => {
    const D = E.value;
    d("formType", D);
  }, v = (E) => {
    const D = E.value;
    d("contentType", D);
  };
  let y;
  const k = () => {
    c(s, (E) => {
      let D = E.data?.[o()];
      return D.splice(r(), 1), { [o()]: [...D] };
    }), y?.hide();
  };
  let w = _d(i());
  var T = xw(), _ = ae(T), b = R(_);
  const S = /* @__PURE__ */ N(() => u(l).nameDisabled === !0);
  je(b, {
    style: "width: 100%;",
    get value() {
      return u(l).name;
    },
    placeholder: "请输入参数名称",
    get disabled() {
      return u(S);
    },
    oninput: (E) => g("name", E)
  }), $(_);
  var O = V(_, 2), L = R(O);
  {
    var I = (E) => {
      je(E, {
        get value() {
          return u(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (D) => g("value", D)
      });
    }, Y = (E, D) => {
      {
        var x = (P) => {
          const C = /* @__PURE__ */ N(() => [u(l).ref]);
          rt(P, {
            get items() {
              return w.current;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return u(C);
            },
            expandAll: !0,
            onSelect: f
          });
        };
        se(
          E,
          (P) => {
            u(l).refType !== "input" && P(x);
          },
          D
        );
      }
    };
    se(L, (E) => {
      u(l).refType === "fixed" ? E(I) : E(Y, !1);
    });
  }
  $(O);
  var J = V(O, 2), B = R(J);
  return Nt(
    nr(B, {
      placement: "bottom",
      floating: (D) => {
        var x = _w(), P = R(x), C = V(R(P));
        const H = /* @__PURE__ */ N(() => u(l).contentType ? [u(l).contentType] : []);
        rt(C, {
          get items() {
            return js;
          },
          style: "width: 100%",
          defaultValue: ["text"],
          get value() {
            return u(H);
          },
          onSelect: v
        }), $(P);
        var z = V(P, 2), A = V(R(z));
        const F = /* @__PURE__ */ N(() => u(l).formType ? [u(l).formType] : []);
        rt(A, {
          get items() {
            return gm;
          },
          style: "width: 100%",
          defaultValue: ["single"],
          get value() {
            return u(F);
          },
          onSelect: h
        }), $(z);
        var Z = V(z, 2), G = V(R(Z));
        ze(G, {
          rows: 1,
          style: "width: 100%;",
          onchange: (ge) => {
            g("formLabel", ge);
          },
          get value() {
            return u(l).formLabel;
          }
        }), $(Z);
        var ne = V(Z, 2), ee = V(R(ne));
        ze(ee, {
          rows: 2,
          style: "width: 100%;",
          onchange: (ge) => {
            g("formDescription", ge);
          },
          get value() {
            return u(l).formDescription;
          }
        }), $(ne);
        var Q = V(ne, 2), X = V(R(Q), 2);
        Xt(X), Ki(X, !1), X.__change = [ww, d], $(Q);
        var j = V(Q, 2), q = R(j);
        Se(q, {
          onclick: k,
          children: (ge, fe) => {
            ye();
            var re = Ce("删除");
            M(ge, re);
          },
          $$slots: { default: !0 }
        }), $(j), $(x), M(D, x);
      },
      children: (D, x) => {
        po(D, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (D) => y = D,
    () => y
  ), $(J), M(e, T), ce({
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
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(E) {
      o(E), p();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(E) {
      i(E), p();
    }
  });
}
_n(["change"]);
ie(
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
var Cw = /* @__PURE__ */ U('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), kw = /* @__PURE__ */ U('<div class="none-params svelte-1sm1mgi"> </div>'), Ew = /* @__PURE__ */ U('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Sw = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Md(e, t) {
  le(t, !0), De(e, Sw);
  const n = m(t, "noneParameterText", 7, "无确认数据"), r = m(t, "dataKeyName", 7, "parameters"), o = m(t, "useChildrenOnly", 7);
  let i = We(), s = bn(i), a = /* @__PURE__ */ N(() => [...s?.current?.data?.[r()] || []]);
  var l = Ew(), c = R(l);
  {
    var d = (f) => {
      var h = Cw();
      ye(4), M(f, h);
    };
    se(c, (f) => {
      u(a).length !== 0 && f(d);
    });
  }
  var g = V(c, 2);
  return ct(
    g,
    19,
    () => u(a),
    (f) => f.id,
    (f, h, v) => {
      Ad(f, {
        get parameter() {
          return u(h);
        },
        get index() {
          return u(v);
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
      var h = kw(), v = R(h, !0);
      $(h), be(() => He(v, n())), M(f, h);
    }
  ), $(l), M(e, l), ce({
    get noneParameterText() {
      return n();
    },
    set noneParameterText(f = "无确认数据") {
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
ie(Md, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
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
var Nw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Pw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Tw = /* @__PURE__ */ U('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">消息内容</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Dw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Od(e, t) {
  le(t, !0), De(e, Dw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Oe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = We(), { addParameter: i } = Bt(), { updateNodeData: s } = it();
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
        dataType: l.formType === "checkbox" || l.formType === "select" ? "Array" : "String",
        addChildDisabled: !0
      }));
      is(a, n().outputDefs) || s(o, () => ({ outputDefs: a }));
    }
  }), Ot(e, $e(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var c = Nw();
        M(l, c);
      },
      children: (l, c) => {
        var d = Tw(), g = ae(d), f = R(g);
        Ne(f, {
          level: 3,
          children: (O, L) => {
            ye();
            var I = Ce("确认数据");
            M(O, I);
          },
          $$slots: { default: !0 }
        });
        var h = V(f, 2);
        Se(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "confirms");
          },
          children: (O, L) => {
            var I = Pw();
            M(O, I);
          },
          $$slots: { default: !0 }
        }), $(g);
        var v = V(g, 2);
        Md(v, { dataKeyName: "confirms", noneParameterText: "无确认数据" });
        var y = V(v, 2);
        Ne(y, {
          level: 3,
          mt: "10px",
          children: (O, L) => {
            ye();
            var I = Ce("确认消息");
            M(O, I);
          },
          $$slots: { default: !0 }
        });
        var k = V(y, 4), w = R(k);
        const T = /* @__PURE__ */ N(() => n().message || "");
        ze(w, {
          rows: 5,
          placeholder: "请输入用户需要确认的消息内容",
          style: "width: 100%",
          onchange: (O) => {
            s(o, () => ({ message: O.target.value }));
          },
          get value() {
            return u(T);
          }
        }), $(k);
        var _ = V(k, 2), b = R(_);
        Ne(b, {
          level: 3,
          mt: "10px",
          children: (O, L) => {
            ye();
            var I = Ce("输出参数");
            M(O, I);
          },
          $$slots: { default: !0 }
        }), $(_);
        var S = V(_, 2);
        kn(S, { placeholder: "" }), M(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(a) {
      n(a), p();
    }
  });
}
ie(Od, { data: {} }, [], [], !0);
const Aw = {
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
var Mw = /* @__PURE__ */ U("<!> ", 1);
function ss(e, t) {
  le(t, !0);
  const n = m(t, "icon", 7), r = m(t, "title", 7), o = m(t, "type", 7), i = m(t, "description", 7), s = m(t, "extra", 7);
  return Se(e, {
    draggable: !0,
    ondragstart: (l) => {
      if (!l.dataTransfer)
        return null;
      const c = {
        type: o(),
        data: { title: r(), description: i(), ...s() }
      };
      l.dataTransfer.setData("application/tinyflow", JSON.stringify(c)), l.dataTransfer.effectAllowed = "move";
    },
    get "data-node-type"() {
      return o();
    },
    children: (l, c) => {
      var d = Mw(), g = ae(d);
      Ts(g, n);
      var f = V(g);
      be(() => He(f, ` ${r() ?? ""}`)), M(l, d);
    },
    $$slots: { default: !0 }
  }), ce({
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
ie(ss, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var Ow = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), Lw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), Vw = /* @__PURE__ */ U('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Ld(e, t) {
  le(t, !0);
  let n = /* @__PURE__ */ ke("base"), r = /* @__PURE__ */ ke("show");
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
  ], s = [], a = Hn(), l = a.customNodes;
  if (l) {
    const w = Object.keys(l).sort((T, _) => (l[T].sortNo || 0) - (l[_].sortNo || 0));
    for (let T of w)
      l[T].group === "base" ? o.push({ type: T, ...l[T] }) : s.push({
        icon: l[T].icon,
        title: l[T].title,
        type: T
      });
    o.sort((T, _) => (T.sortNo || 0) - (_.sortNo || 0));
  }
  if (a.hiddenNodes) {
    const w = typeof a.hiddenNodes == "function" ? a.hiddenNodes() : a.hiddenNodes;
    if (Array.isArray(w)) {
      for (let T of w)
        for (let _ = 0; _ < o.length; _++)
          if (o[_].type === T) {
            o.splice(_, 1);
            break;
          }
    }
  }
  var c = Vw(), d = R(c), g = R(d), f = R(g);
  td(f, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (w) => {
      W(n, w.value.toString(), !0);
    }
  }), $(g);
  var h = V(g, 2), v = R(h);
  ct(v, 21, () => o, hr, (w, T) => {
    ss(w, $e(() => u(T)));
  }), $(v);
  var y = V(v, 2);
  ct(y, 21, () => s, hr, (w, T) => {
    ss(w, $e(() => u(T)));
  }), $(y), $(h), $(d);
  var k = V(d, 2);
  Se(k, {
    onclick: () => {
      W(r, u(r) ? "" : "show", !0);
    },
    children: (w, T) => {
      var _ = Te(), b = ae(_);
      {
        var S = (L) => {
          var I = Ow();
          M(L, I);
        }, O = (L) => {
          var I = Lw();
          M(L, I);
        };
        se(b, (L) => {
          u(r) === "show" ? L(S) : L(O, !1);
        });
      }
      M(w, _);
    },
    $$slots: { default: !0 }
  }), $(c), be(() => {
    wt(c, 1, `tf-toolbar ${u(r) ?? ""}`), ft(v, `display: ${u(n) === "base" ? "flex" : "none"}`), ft(y, `display: ${u(n) !== "base" ? "flex" : "none"}`);
  }), M(e, c), ce();
}
ie(Ld, {}, [], [], !0);
const Hw = () => ({ getNode: (t) => Fe.getNode(t) }), $w = () => ({ ensureParentInNodesBefore: (t, n) => {
  Fe.updateNodes((r) => {
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
} }), Iw = () => ({ getEdgesByTarget: (t) => Fe.getEdges().filter((r) => r.target === t) });
var zw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Rw = /* @__PURE__ */ U('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Bw = /* @__PURE__ */ U('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Fw = /* @__PURE__ */ U('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Kw = /* @__PURE__ */ U('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input/></div></div>', 1), qw = /* @__PURE__ */ U('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Zw = /* @__PURE__ */ U('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Yw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ww = /* @__PURE__ */ U('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Xw = /* @__PURE__ */ U("<!> <!> <div></div> <!>", 1);
const jw = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Vd(e, t) {
  le(t, !0), De(e, jw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Oe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = We(), { addParameter: i } = Bt(), s = it(), { updateNodeData: a } = s, l = (w) => {
    a(o, w);
  }, c = (w, T) => {
    l({ [w]: T.target?.value });
  }, d = { ...r, id: o, data: n() }, g = document.createElement("div"), h = Hn().customNodes[t.type];
  h.render?.(g, d, s);
  const v = h.forms;
  let y;
  Ze(() => {
    n().expand && y && y.append(g);
  }), Ze(() => {
    n() && h.onUpdate?.(g, { ...d, data: n() });
  }), Ze(() => {
    !n().parameters && h.parameters && l({
      parameters: Ur(JSON.parse(JSON.stringify(h.parameters)))
    });
  }), Ze(() => {
    !n().outputDefs && h.outputDefs && l({
      outputDefs: Ur(JSON.parse(JSON.stringify(h.outputDefs)))
    });
  });
  const k = /* @__PURE__ */ N(() => ({ ...n(), description: h.description }));
  return Ot(e, $e(
    {
      get data() {
        return u(k);
      }
    },
    () => r,
    {
      icon: (T) => {
        var _ = Te(), b = ae(_);
        Ts(b, () => h.icon), M(T, _);
      },
      children: (T, _) => {
        var b = Xw(), S = ae(b);
        {
          var O = (E) => {
            var D = Rw(), x = ae(D), P = R(x);
            Ne(P, {
              level: 3,
              children: (A, F) => {
                ye();
                var Z = Ce("输入参数");
                M(A, Z);
              },
              $$slots: { default: !0 }
            });
            var C = V(P, 2);
            {
              var H = (A) => {
                Se(A, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    i(o);
                  },
                  children: (F, Z) => {
                    var G = zw();
                    M(F, G);
                  },
                  $$slots: { default: !0 }
                });
              };
              se(C, (A) => {
                h.parametersAddEnable !== !1 && A(H);
              });
            }
            $(x);
            var z = V(x, 2);
            pt(z, {}), M(E, D);
          };
          se(S, (E) => {
            h.parametersEnable !== !1 && E(O);
          });
        }
        var L = V(S, 2);
        {
          var I = (E) => {
            var D = Te(), x = ae(D);
            ct(x, 17, () => v, hr, (P, C) => {
              var H = Te(), z = ae(H);
              {
                var A = (Z) => {
                  var G = Bw(), ne = ae(G), ee = R(ne, !0);
                  $(ne);
                  var Q = V(ne, 2), X = R(Q);
                  const j = /* @__PURE__ */ N(() => n()[u(C).name] || u(C).defaultValue);
                  je(X, $e(
                    {
                      get placeholder() {
                        return u(C).placeholder;
                      },
                      style: "width: 100%",
                      get value() {
                        return u(j);
                      }
                    },
                    () => u(C).attrs,
                    {
                      onchange: (q) => {
                        c(u(C).name, q);
                      }
                    }
                  )), $(Q), be(() => He(ee, u(C).label)), M(Z, G);
                }, F = (Z, G) => {
                  {
                    var ne = (Q) => {
                      var X = Fw(), j = ae(X), q = R(j, !0);
                      $(j);
                      var ge = V(j, 2), fe = R(ge);
                      const re = /* @__PURE__ */ N(() => n()[u(C).name] || u(C).defaultValue);
                      ze(fe, $e(
                        {
                          rows: 3,
                          get placeholder() {
                            return u(C).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return u(re);
                          }
                        },
                        () => u(C).attrs,
                        {
                          onchange: (oe) => {
                            c(u(C).name, oe);
                          }
                        }
                      )), $(ge), be(() => He(q, u(C).label)), M(Q, X);
                    }, ee = (Q, X) => {
                      {
                        var j = (ge) => {
                          var fe = Kw(), re = ae(fe), oe = R(re, !0);
                          $(re);
                          var de = V(re, 2), te = R(de), he = R(te), ue = R(he);
                          $(he);
                          var pe = V(he, 2);
                          Xt(pe);
                          var K = (Ie) => l({ [u(C).name]: parseFloat(Ie.target.value) });
                          Ue(
                            pe,
                            () => ({
                              class: "nodrag",
                              type: "range",
                              ...u(C).attrs,
                              value: n()[u(C).name] ?? u(C).defaultValue,
                              oninput: K
                            }),
                            void 0,
                            "svelte-q0cqsa"
                          ), $(te), $(de), be(() => {
                            He(oe, u(C).label), He(ue, `${u(C).description ?? ""}: ${n()[u(C).name] ?? u(C).defaultValue ?? ""}`);
                          }), M(ge, fe);
                        }, q = (ge, fe) => {
                          {
                            var re = (de) => {
                              var te = qw(), he = ae(te), ue = R(he, !0);
                              $(he);
                              var pe = V(he, 2), K = R(pe);
                              const Ie = /* @__PURE__ */ N(() => u(C).options || []), Ae = /* @__PURE__ */ N(() => n()[u(C).name] ? [n()[u(C).name]] : [u(C).defaultValue]);
                              rt(K, {
                                get items() {
                                  return u(Ie);
                                },
                                style: "width: 100%",
                                get placeholder() {
                                  return u(C).placeholder;
                                },
                                onSelect: (Le) => {
                                  const Ke = Le.value;
                                  l({ [u(C).name]: Ke });
                                },
                                get value() {
                                  return u(Ae);
                                }
                              }), $(pe), be(() => He(ue, u(C).label)), M(de, te);
                            }, oe = (de, te) => {
                              {
                                var he = (pe) => {
                                  var K = Zw(), Ie = ae(K), Ae = R(Ie, !0);
                                  $(Ie);
                                  var Le = V(Ie, 2), Ke = R(Le);
                                  const Ve = /* @__PURE__ */ N(() => u(C).chosen?.buttonText);
                                  ed(Ke, {
                                    style: "width: 100%",
                                    get placeholder() {
                                      return u(C).placeholder;
                                    },
                                    get buttonText() {
                                      return u(Ve);
                                    },
                                    onChosen: (gt, qe, et) => {
                                      u(C).chosen?.onChosen?.(l, gt, qe, et);
                                    },
                                    get value() {
                                      return n()[u(C).chosen?.valueDataKey || ""];
                                    },
                                    get label() {
                                      return n()[u(C).chosen?.labelDataKey || ""];
                                    }
                                  }), $(Le), be(() => He(Ae, u(C).label)), M(pe, K);
                                }, ue = (pe, K) => {
                                  {
                                    var Ie = (Ae) => {
                                      Ne(Ae, $e({ level: 3, mt: "10px" }, () => u(C).attrs, {
                                        children: (Le, Ke) => {
                                          ye();
                                          var Ve = Ce();
                                          be(() => He(Ve, u(C).label)), M(Le, Ve);
                                        },
                                        $$slots: { default: !0 }
                                      }));
                                    };
                                    se(
                                      pe,
                                      (Ae) => {
                                        u(C).type === "heading" && Ae(Ie);
                                      },
                                      K
                                    );
                                  }
                                };
                                se(
                                  de,
                                  (pe) => {
                                    u(C).type === "chosen" ? pe(he) : pe(ue, !1);
                                  },
                                  te
                                );
                              }
                            };
                            se(
                              ge,
                              (de) => {
                                u(C).type === "select" ? de(re) : de(oe, !1);
                              },
                              fe
                            );
                          }
                        };
                        se(
                          Q,
                          (ge) => {
                            u(C).type === "slider" ? ge(j) : ge(q, !1);
                          },
                          X
                        );
                      }
                    };
                    se(
                      Z,
                      (Q) => {
                        u(C).type === "textarea" ? Q(ne) : Q(ee, !1);
                      },
                      G
                    );
                  }
                };
                se(z, (Z) => {
                  u(C).type === "input" ? Z(A) : Z(F, !1);
                });
              }
              M(P, H);
            }), M(E, D);
          };
          se(L, (E) => {
            v && E(I);
          });
        }
        var Y = V(L, 2);
        Nt(Y, (E) => y = E, () => y);
        var J = V(Y, 2);
        {
          var B = (E) => {
            var D = Ww(), x = ae(D), P = R(x);
            Ne(P, {
              level: 3,
              mt: "10px",
              children: (A, F) => {
                ye();
                var Z = Ce("输出参数");
                M(A, Z);
              },
              $$slots: { default: !0 }
            });
            var C = V(P, 2);
            {
              var H = (A) => {
                Se(A, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    i(o, "outputDefs");
                  },
                  children: (F, Z) => {
                    var G = Yw();
                    M(F, G);
                  },
                  $$slots: { default: !0 }
                });
              };
              se(C, (A) => {
                h.outputDefsAddEnable !== !1 && A(H);
              });
            }
            $(x);
            var z = V(x, 2);
            kn(z, {}), M(E, D);
          };
          se(J, (E) => {
            h.outputDefsEnable !== !1 && E(B);
          });
        }
        be(() => {
          ft(Y, h.rootStyle || ""), wt(Y, 1, xn(h.rootClass), "svelte-q0cqsa");
        }), M(T, b);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(w) {
      n(w), p();
    }
  });
}
ie(Vd, { data: {} }, [], [], !0);
const Gw = () => ({ updateEdgeData: (t, n, r) => {
  const o = Fe.getEdge(t);
  if (!o)
    return;
  const i = typeof n == "function" ? n(o) : n;
  o.data = r?.replace ? i : { ...o.data, ...i }, Fe.updateEdges((s) => s.map((a) => a.id === t ? o : a));
} }), Uw = () => ({ deleteEdge: (t) => {
  Fe.removeEdge(t);
} });
var Jw = /* @__PURE__ */ U('<div class="panel-content svelte-80qc4q"><div>边属性设置</div> <div class="setting-title svelte-80qc4q">边条件设置</div> <div class="setting-item svelte-80qc4q"><!></div> <div class="setting-item svelte-80qc4q" style="padding: 8px 0"><!> <!></div></div>'), Qw = /* @__PURE__ */ U("<!> <!> <!> <!>", 1), e_ = /* @__PURE__ */ U('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const t_ = {
  hash: "svelte-80qc4q",
  code: ".panel-content.svelte-80qc4q {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-80qc4q {margin:10px 0;font-size:12px;color:#999;}.setting-item.svelte-80qc4q {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function Hd(e, t) {
  le(t, !0), De(e, t_);
  const n = m(t, "onInit", 7), r = it();
  n()(r);
  let o = /* @__PURE__ */ ke(!1), i = /* @__PURE__ */ ke(null);
  const { updateEdgeData: s } = Gw(), a = (C) => {
    C.preventDefault(), C.dataTransfer && (C.dataTransfer.dropEffect = "move");
  }, l = (C) => {
    C.preventDefault();
    const H = r.screenToFlowPosition({ x: C.clientX - 250, y: C.clientY - 100 }), z = C.dataTransfer?.getData("application/tinyflow");
    if (!z)
      return;
    const A = JSON.parse(z), F = { id: `node_${Qn()}`, position: H, data: {}, ...A };
    Fe.addNode(F), Fe.selectNodeOnly(F.id);
  }, { getNode: c } = Hw(), d = (C) => {
    const H = c(C.source), z = c(C.target);
    if (C.sourceHandle === "loop_handle" || H.parentId) {
      const A = r.getEdges();
      for (let F of A)
        if (F.target === C.target) {
          const Z = c(F.source);
          if (C.sourceHandle === "loop_handle" && Z.parentId !== H.id || H.parentId && Z.parentId !== H.parentId)
            return !1;
        }
    }
    return !(!H.parentId && z.parentId && z.parentId !== H.id);
  }, { ensureParentInNodesBefore: g } = $w(), f = (C, H) => {
    if (!H.isValid)
      return;
    const z = H.toNode;
    if (z.parentId)
      return;
    const A = H.fromNode, F = H.fromHandle, Z = { position: { ...z.position } };
    if (F.id === "loop_handle" ? Z.parentId = A.id : A.parentId && (Z.parentId = A.parentId), Z.parentId) {
      const G = c(Z.parentId);
      Z.position = {
        x: z.position.x - G.position.x,
        y: z.position.y - G.position.y
      }, g(Z.parentId, z.id), r.updateNode(z.id, Z);
    }
    setTimeout(() => {
      Fe.getEdges().forEach((G) => {
        G.target === z.id && G.source == A.id && (W(o, !0), W(i, G, !0));
      });
    });
  }, { getEdgesByTarget: h } = Iw(), v = (C) => {
    C.edges.forEach((z) => {
      z.id === u(i)?.id && (W(i, null), W(o, !1));
      const A = c(z.target);
      if (A && A.parentId) {
        const F = h(z.target), Z = c(A.parentId);
        if (F.length === 0)
          r.updateNode(A.id, {
            parentId: void 0,
            position: {
              x: A.position.x + Z.position.x,
              y: A.position.y + Z.position.y
            }
          });
        else {
          let G = !1;
          for (let ne = 0; ne < F.length; ne++) {
            const ee = F[ne], Q = c(ee.source);
            if (Q.parentId || Q.type === "loopNode") {
              G = !0;
              break;
            }
          }
          G || r.updateNode(A.id, {
            parentId: void 0,
            position: {
              x: A.position.x + Z.position.x,
              y: A.position.y + Z.position.y
            }
          });
        }
      }
    });
  }, { deleteEdge: y } = Uw(), k = (C, H) => {
  }, w = (C) => {
  }, T = {
    // ...nodeTypes
  }, _ = Hn().customNodes;
  if (_)
    for (let C of Object.keys(_))
      T[C] = Vd;
  const b = Hn().onDataChange;
  Ze(() => {
    b?.({
      nodes: Fe.getNodes(),
      edges: Fe.getEdges(),
      viewport: Fe.getViewport()
    });
  });
  var S = e_(), O = R(S);
  const L = /* @__PURE__ */ N(() => ({ ...Aw, ...T }));
  var I = Fe.getNodes, Y = Fe.setNodes, J = Fe.getEdges, B = Fe.setEdges, E = Fe.getViewport, D = Fe.setViewport;
  const x = /* @__PURE__ */ N(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: Yr.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  zu(O, {
    get nodeTypes() {
      return u(L);
    },
    get nodes() {
      return I();
    },
    set nodes(C) {
      Y(C);
    },
    get edges() {
      return J();
    },
    set edges(C) {
      B(C);
    },
    get viewport() {
      return E();
    },
    set viewport(C) {
      D(C);
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
      W(o, !0), W(i, C.edge, !0);
    },
    onbeforeconnect: (C) => ({ ...C, id: Qn() }),
    ondelete: v,
    onclick: (C) => {
      const H = C.target;
      H.classList.contains("svelte-flow__edge-interaction") || H.classList.contains("panel-content") || H.closest(".panel-content") || (W(o, !1), W(i, null));
    },
    get defaultEdgeOptions() {
      return u(x);
    },
    children: (C, H) => {
      var z = Qw(), A = ae(z);
      ju(A, {});
      var F = V(A, 2);
      Yu(F, {});
      var Z = V(F, 2);
      Uu(Z, {});
      var G = V(Z, 2);
      {
        var ne = (ee) => {
          fo(ee, {
            children: (Q, X) => {
              var j = Jw(), q = V(R(j), 4), ge = R(q);
              const fe = /* @__PURE__ */ N(() => u(i)?.data?.condition);
              ze(ge, {
                rows: 3,
                placeholder: "请输入边条件",
                style: "width: 100%",
                get value() {
                  return u(fe);
                },
                onchange: (te) => {
                  u(i) && s(u(i).id, { condition: te.target?.value });
                }
              }), $(q);
              var re = V(q, 2), oe = R(re);
              Se(oe, {
                onclick: () => {
                  y(u(i)?.id), W(o, !1);
                },
                children: (te, he) => {
                  ye();
                  var ue = Ce("删除");
                  M(te, ue);
                },
                $$slots: { default: !0 }
              });
              var de = V(oe, 2);
              Se(de, {
                primary: !0,
                onclick: () => {
                  W(o, !1);
                },
                children: (te, he) => {
                  ye();
                  var ue = Ce("保存");
                  M(te, ue);
                },
                $$slots: { default: !0 }
              }), $(re), $(j), M(Q, j);
            },
            $$slots: { default: !0 }
          });
        };
        se(G, (ee) => {
          u(o) && ee(ne);
        });
      }
      M(C, z);
    },
    $$slots: { default: !0 }
  });
  var P = V(O, 2);
  return Ld(P, {}), $(S), M(e, S), ce({
    get onInit() {
      return n();
    },
    set onInit(C) {
      n(C), p();
    }
  });
}
ie(Hd, { onInit: {} }, [], [], !0);
function n_(e, t) {
  le(t, !0);
  const n = m(t, "options", 7), r = m(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  return Fe.init(o?.nodes || [], o?.edges || []), fr("tinyflow_options", n()), Ru(e, {
    children: (i, s) => {
      Hd(i, {
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
customElements.define("tinyflow-component", ie(n_, { options: {}, onInit: {} }, [], [], !1));
export {
  i_ as Tinyflow
};
//# sourceMappingURL=index.js.map
