const Id = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Id);
const as = 1, ls = 2, vl = 4, zd = 8, Rd = 16, Bd = 1, Fd = 2, pl = 4, Kd = 8, qd = 16, ml = 1, Zd = 2, cs = "[", us = "[!", ds = "]", Kn = {}, it = Symbol(), Yd = "http://www.w3.org/1999/xhtml", Wd = "http://www.w3.org/2000/svg", Xd = "@attach", oa = !1;
var Jr = Array.isArray, jd = Array.prototype.indexOf, fs = Array.from, Oo = Object.keys, Lo = Object.defineProperty, dn = Object.getOwnPropertyDescriptor, yl = Object.getOwnPropertyDescriptors, wl = Object.prototype, Gd = Array.prototype, ei = Object.getPrototypeOf, ia = Object.isExtensible;
function Sr(e) {
  return typeof e == "function";
}
const rt = () => {
};
function Ud(e) {
  return e();
}
function Ho(e) {
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
const Et = 2, gs = 4, eo = 8, hs = 16, yn = 32, er = 64, vs = 128, Ct = 256, Vo = 512, St = 1024, hn = 2048, tr = 4096, fn = 8192, ti = 16384, _l = 32768, br = 65536, sa = 1 << 17, Jd = 1 << 18, xl = 1 << 19, Li = 1 << 20, ps = 1 << 21, Wt = Symbol("$state"), ms = Symbol("legacy props"), Qd = Symbol(""), bl = new class extends Error {
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
    if (ei(e) === wl) {
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
function ws(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let ze = null;
function aa(e) {
  ze = e;
}
function Tn(e) {
  return (
    /** @type {T} */
    Nl().get(e)
  );
}
function fr(e, t) {
  return Nl().set(e, t), t;
}
function ce(e, t = !1, n) {
  ze = {
    p: ze,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  }, Cr && !t && (ze.l = {
    s: null,
    u: null,
    r1: [],
    r2: Xn(!1)
  });
}
function ue(e) {
  var t = (
    /** @type {ComponentContext} */
    ze
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Il(r);
  }
  return e !== void 0 && (t.x = e), ze = t.p, e ?? /** @type {T} */
  {};
}
function ni() {
  return !Cr || ze !== null && ze.l === null;
}
function Nl(e) {
  return ze === null && ws(), ze.c ??= new Map(hf(ze) || void 0);
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
  var n = /* @__PURE__ */ new Map(), r = Jr(e), o = /* @__PURE__ */ ke(0), i = Yn, s = (a) => {
    if (Yn === i)
      return a();
    var l = Me, u = Yn;
    Mn(null), da(i);
    var d = a();
    return Mn(l), da(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ ke(
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
          var g = /* @__PURE__ */ ke(u.value);
          return n.set(l, g), g;
        }) : Y(d, u.value, !0), !0;
      },
      deleteProperty(a, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in a) {
            const f = s(() => /* @__PURE__ */ ke(it));
            n.set(l, f), Eo(o);
          }
        } else {
          if (r && typeof l == "string") {
            var d = (
              /** @type {Source<number>} */
              n.get("length")
            ), g = Number(l);
            Number.isInteger(g) && g < d.v && Y(d, g);
          }
          Y(u, it), Eo(o);
        }
        return !0;
      },
      get(a, l, u) {
        if (l === Wt)
          return e;
        var d = n.get(l), g = l in a;
        if (d === void 0 && (!g || dn(a, l)?.writable) && (d = s(() => {
          var h = Mt(g ? a[l] : it), v = /* @__PURE__ */ ke(h);
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
        if (u !== void 0 || Pe !== null && (!d || dn(a, l)?.writable)) {
          u === void 0 && (u = s(() => {
            var f = d ? Mt(a[l]) : it, h = /* @__PURE__ */ ke(f);
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
            v !== void 0 ? Y(v, it) : h in a && (v = s(() => /* @__PURE__ */ ke(it)), n.set(h + "", v));
          }
        if (g === void 0)
          (!f || dn(a, l)?.writable) && (g = s(() => /* @__PURE__ */ ke(void 0)), Y(g, Mt(u)), n.set(l, g));
        else {
          f = g.v !== it;
          var y = s(() => Mt(u));
          Y(g, y);
        }
        var k = Reflect.getOwnPropertyDescriptor(a, l);
        if (k?.set && k.set.call(d, u), !f) {
          if (r && typeof l == "string") {
            var w = (
              /** @type {Source<number>} */
              n.get("length")
            ), D = Number(l);
            Number.isInteger(D) && D >= w.v && Y(w, D + 1);
          }
          Eo(o);
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
  var t = Et | hn, n = Me !== null && (Me.f & Et) !== 0 ? (
    /** @type {Derived} */
    Me
  ) : null;
  return Pe === null || n !== null && (n.f & Ct) !== 0 ? t |= Ct : Pe.f |= xl, {
    ctx: ze,
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
    parent: n ?? Pe,
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
    Pl(e), t = Jl(e);
  } finally {
    On(n);
  }
  return t;
}
function Dl(e) {
  var t = xs(e);
  if (e.equals(t) || (e.v = t, e.wv = Gl()), !An) {
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
    equals: Cl,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function ke(e, t) {
  const n = Xn(e);
  return jl(n), n;
}
// @__NO_SIDE_EFFECTS__
function Tl(e, t = !1, n = !0) {
  const r = Xn(e);
  return t || (r.equals = El), Cr && n && ze !== null && ze.l !== null && (ze.l.s ??= []).push(r), r;
}
function Y(e, t, n = !1) {
  Me !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ht || (Me.f & sa) !== 0) && ni() && (Me.f & (Et | hs | sa)) !== 0 && !gn?.includes(e) && uf();
  let r = n ? Mt(t) : t;
  return Hi(e, r);
}
function Hi(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    An ? qn.set(e, t) : qn.set(e, n), e.v = t, (e.f & Et) !== 0 && ((e.f & hn) !== 0 && xs(
      /** @type {Derived} */
      e
    ), Qt(e, (e.f & Ct) === 0 ? St : tr)), e.wv = Gl(), Al(e, hn), ni() && Pe !== null && (Pe.f & St) !== 0 && (Pe.f & (yn | er)) === 0 && (Tt === null ? Sf([e]) : Tt.push(e));
  }
  return t;
}
function ca(e, t = 1) {
  var n = c(e), r = t === 1 ? n++ : n--;
  return Y(e, n), r;
}
function Eo(e) {
  Y(e, e.v + 1);
}
function Al(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = ni(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      (a & hn) === 0 && (!r && s === Pe || (Qt(s, t), (a & (St | Ct)) !== 0 && ((a & Et) !== 0 ? Al(
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
function at(e) {
  if (e === null)
    throw to(), Kn;
  return Ee = e;
}
function vn() {
  return at(
    /** @type {TemplateNode} */
    /* @__PURE__ */ nn(Ee)
  );
}
function I(e) {
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
function Vi() {
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
function Ml(e) {
  if (!e || e.nodeType !== dr)
    throw to(), Kn;
  return (
    /** @type {Comment} */
    e.data
  );
}
var ht, Ol, Ll, Hl;
function $i() {
  if (ht === void 0) {
    ht = window, Ol = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Ll = dn(t, "firstChild").get, Hl = dn(t, "nextSibling").get, ia(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), ia(n) && (n.__t = void 0);
  }
}
function pn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Ge(e) {
  return Ll.call(e);
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
    return n?.before(r), at(r), r;
  }
  return at(n), n;
}
function le(e, t) {
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
function H(e, t = 1, n = !1) {
  let r = xe ? Ee : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ nn(r);
  if (!xe)
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
function Vl(e) {
  Pe === null && Me === null && rf(), Me !== null && (Me.f & Ct) !== 0 && Pe === null && nf(), An && tf();
}
function yf(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function wn(e, t, n, r = !0) {
  var o = Pe, i = {
    ctx: ze,
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
      throw yt(i), l;
    }
  else t !== null && oi(i);
  var s = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (xl | vs)) === 0;
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
  return Me !== null && !Ht;
}
function $l(e) {
  const t = wn(eo, null, !1);
  return Qt(t, St), t.teardown = e, t;
}
function Ze(e) {
  if (Vl(), !Me && Pe && (Pe.f & yn) !== 0) {
    var t = (
      /** @type {ComponentContext} */
      ze
    );
    (t.e ??= []).push(e);
  } else
    return Il(e);
}
function Il(e) {
  return wn(gs | ps, e, !1);
}
function zl(e) {
  return Vl(), wn(eo | ps, e, !0);
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
  return $n(() => e(...r.map(c)));
}
function $n(e, t = 0) {
  var n = wn(eo | hs | t, e, !0);
  return n;
}
function Jt(e, t = !0) {
  return wn(eo | yn, e, !0, t);
}
function Rl(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = An, r = Me;
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
  (t || (e.f & Jd) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (Fl(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), Bl(e, t && !n), Io(e, 0), Qt(e, ti);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  Rl(e);
  var o = e.parent;
  o !== null && o.first !== null && Kl(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function Fl(e, t) {
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
  ks(e, n, !0), ql(n, () => {
    yt(e), t && t();
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
let Vr = [], $r = [];
function Yl() {
  var e = Vr;
  Vr = [], Ho(e);
}
function Wl() {
  var e = $r;
  $r = [], Ho(e);
}
function oo(e) {
  Vr.length === 0 && queueMicrotask(Yl), Vr.push(e);
}
function Cf(e) {
  $r.length === 0 && bf(Wl), $r.push(e);
}
function kf() {
  Vr.length > 0 && Yl(), $r.length > 0 && Wl();
}
function Ef(e) {
  var t = (
    /** @type {Effect} */
    Pe
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
let Me = null, Ht = !1;
function Mn(e) {
  Me = e;
}
let Pe = null;
function On(e) {
  Pe = e;
}
let gn = null;
function jl(e) {
  Me !== null && Me.f & Li && (gn === null ? gn = [e] : gn.push(e));
}
let ut = null, xt = 0, Tt = null;
function Sf(e) {
  Tt = e;
}
let $o = 1, Rr = 0, Yn = Rr;
function da(e) {
  Yn = e;
}
let Nn = !1;
function Gl() {
  return ++$o;
}
function ri(e) {
  var t = e.f;
  if ((t & hn) !== 0)
    return !0;
  if ((t & tr) !== 0) {
    var n = e.deps, r = (t & Ct) !== 0;
    if (n !== null) {
      var o, i, s = (t & Vo) !== 0, a = r && Pe !== null && !Nn, l = n.length;
      if (s || a) {
        var u = (
          /** @type {Derived} */
          e
        ), d = u.parent;
        for (o = 0; o < l; o++)
          i = n[o], (s || !i?.reactions?.includes(u)) && (i.reactions ??= []).push(u);
        s && (u.f ^= Vo), a && d !== null && (d.f & Ct) === 0 && (u.f ^= Ct);
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
  var t = ut, n = xt, r = Tt, o = Me, i = Nn, s = gn, a = ze, l = Ht, u = Yn, d = e.f;
  ut = /** @type {null | Value[]} */
  null, xt = 0, Tt = null, Nn = (d & Ct) !== 0 && (Ht || !Zn || Me === null), Me = (d & (yn | er)) === 0 ? e : null, gn = null, aa(e.ctx), Ht = !1, Yn = ++Rr, e.f |= Li, e.ac !== null && (e.ac.abort(bl), e.ac = null);
  try {
    var g = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (ut !== null) {
      var h;
      if (Io(e, xt), f !== null && xt > 0)
        for (f.length = xt + ut.length, h = 0; h < ut.length; h++)
          f[xt + h] = ut[h];
      else
        e.deps = f = ut;
      if (!Nn || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (d & Et) !== 0 && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (h = xt; h < f.length; h++)
          (f[h].reactions ??= []).push(e);
    } else f !== null && xt < f.length && (Io(e, xt), f.length = xt);
    if (ni() && Tt !== null && !Ht && f !== null && (e.f & (Et | tr | hn)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      Tt.length; h++)
        Ul(
          Tt[h],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (Rr++, Tt !== null && (r === null ? r = Tt : r.push(.../** @type {Source[]} */
    Tt))), g;
  } catch (v) {
    Ef(v);
  } finally {
    ut = t, xt = n, Tt = r, Me = o, Nn = i, gn = s, aa(a), Ht = l, Yn = u, e.f ^= Li;
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
  (ut === null || !ut.includes(t)) && (Qt(t, tr), (t.f & (Ct | Vo)) === 0 && (t.f ^= Vo), Pl(
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
      (t & hs) !== 0 ? xf(e) : Bl(e), Rl(e);
      var o = Jl(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = $o;
      var i;
      oa && df && (e.f & hn) !== 0 && e.deps;
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
        var i = Tf(n[o]);
        Df(i);
      }
      qn.clear();
    }
  } finally {
    Ir = !1, Zn = e, zr = null;
  }
}
function Df(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if ((r.f & (ti | fn)) === 0 && ri(r)) {
        var o = $o;
        if (Es(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? Kl(r) : r.fn = null), $o > o && (r.f & ps) !== 0)
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
function Tf(e) {
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
  if (Me !== null && !Ht) {
    if (!gn?.includes(e)) {
      var r = Me.deps;
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
  e, ri(o) && Dl(o)), An) {
    if (qn.has(e))
      return qn.get(e);
    if (n) {
      o = /** @type {Derived} */
      e;
      var s = o.v;
      return ((o.f & St) !== 0 || ec(o)) && (s = xs(o)), qn.set(o, s), s;
    }
  }
  return e.v;
}
function ec(e) {
  if (e.v === it) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (qn.has(t) || (t.f & Et) !== 0 && ec(
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
function Lf(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, oo(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function Hf(e) {
  xe && /* @__PURE__ */ Ge(e) !== null && bs(e);
}
let fa = !1;
function Vf() {
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
  var t = Me, n = Pe;
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
    if (r.capture || Dr.call(t, i), !i.cancelBubble)
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
function Dr(e) {
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
        } catch (D) {
          f ? h.push(D) : f = D;
        }
        if (e.cancelBubble || v === t || v === null)
          break;
        i = v;
      }
      if (f) {
        for (let D of h)
          queueMicrotask(() => {
            throw D;
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
function G(e, t) {
  var n = (t & ml) !== 0, r = (t & Zd) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (xe)
      return mt(Ee, null), Ee;
    o === void 0 && (o = Ps(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ Ge(o)));
    var s = (
      /** @type {TemplateNode} */
      r || Ol ? document.importNode(o, !0) : o.cloneNode(!0)
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
  var r = !e.startsWith("<!>"), o = (t & ml) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
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
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ge(u)
      ), g = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      mt(d, g);
    } else
      mt(u, u);
    return u;
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
  return n.nodeType !== ys && (n.before(n = pn()), at(n)), mt(n, n), n;
}
function De() {
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
function Ve(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function nc(e, t) {
  return rc(e, t);
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
    bt(!0), at(
      /** @type {Comment} */
      i
    ), vn();
    const s = rc(e, { ...t, anchor: i });
    if (Ee === null || Ee.nodeType !== dr || /** @type {Comment} */
    Ee.data !== ds)
      throw to(), Kn;
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
        t.addEventListener(h, Dr, { passive: v });
        var y = rr.get(h);
        y === void 0 ? (document.addEventListener(h, Dr, { passive: v }), rr.set(h, 1)) : rr.set(h, y + 1);
      }
    }
  };
  l(fs(tc)), zi.add(l);
  var u = void 0, d = _f(() => {
    var g = n ?? t.appendChild(pn());
    return Jt(() => {
      if (i) {
        ce({});
        var f = (
          /** @type {ComponentContext} */
          ze
        );
        f.c = i;
      }
      o && (r.$$events = o), xe && mt(
        /** @type {TemplateNode} */
        g,
        null
      ), u = e(g, r) || {}, xe && (Pe.nodes_end = Ee), i && ue();
    }), () => {
      for (var f of a) {
        t.removeEventListener(f, Dr);
        var h = (
          /** @type {number} */
          rr.get(f)
        );
        --h === 0 ? (document.removeEventListener(f, Dr), rr.delete(f)) : rr.set(f, h);
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
function Ye(e, t, ...n) {
  var r = e, o = rt, i;
  $n(() => {
    o !== (o = t()) && (i && (yt(i), i = null), i = Jt(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, br), xe && (r = Ee);
}
function In(e) {
  ze === null && ws(), Cr && ze.l !== null ? Gf(ze).m.push(e) : Ze(() => {
    const t = nt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function ii(e) {
  ze === null && ws(), In(() => () => nt(e));
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
  var o = e, i = null, s = null, a = it, l = n > 0 ? br : 0, u = !1;
  const d = (f, h = !0) => {
    u = !0, g(h, f);
  }, g = (f, h) => {
    if (a === (a = f)) return;
    let v = !1;
    if (xe && r !== -1) {
      if (n === 0) {
        const k = Ml(o);
        k === cs ? r = 0 : k === us ? r = 1 / 0 : (r = parseInt(k.substring(1)), r !== r && (r = a ? 1 / 0 : -1));
      }
      const y = r > n;
      !!a === y && (o = Vi(), at(o), bt(!1), v = !0, r = -1);
    }
    a ? (i ? Hr(i) : h && (i = Jt(() => h(o))), s && gr(s, () => {
      s = null;
    })) : (s ? Hr(s) : h && (s = Jt(() => h(o, [n + 1, r]))), i && gr(i, () => {
      i = null;
    })), v && bt(!0);
  };
  $n(() => {
    u = !1, t(d), u || g(null, null);
  }, l), xe && (o = Ee);
}
function Uf(e, t) {
  xe && at(
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
  ql(o, () => {
    for (var u = 0; u < i; u++) {
      var d = t[u];
      a || (r.delete(d.k), En(e, d.prev, d.next)), yt(d.e, !a);
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
    s = xe ? at(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Ge(u)
    ) : u.appendChild(pn());
  }
  xe && vn();
  var d = null, g = !1, f = /* @__PURE__ */ _s(() => {
    var h = n();
    return Jr(h) ? h : h == null ? [] : fs(h);
  });
  $n(() => {
    var h = c(f), v = h.length;
    if (g && v === 0)
      return;
    g = v === 0;
    let y = !1;
    if (xe) {
      var k = Ml(s) === us;
      k !== (v === 0) && (s = Vi(), at(s), bt(!1), y = !0);
    }
    if (xe) {
      for (var w = null, D, x = 0; x < v; x++) {
        if (Ee.nodeType === dr && /** @type {Comment} */
        Ee.data === ds) {
          s = /** @type {Comment} */
          Ee, y = !0, bt(!1);
          break;
        }
        var b = h[x], E = r(b, x);
        D = oc(
          Ee,
          a,
          w,
          null,
          b,
          E,
          x,
          o,
          t,
          n
        ), a.items.set(E, D), w = D;
      }
      v > 0 && at(Vi());
    }
    xe || Qf(h, a, s, o, t, r, n), i !== null && (v === 0 ? d ? Hr(d) : d = Jt(() => i(s)) : d !== null && gr(d, () => {
      d = null;
    })), y && bt(!0), c(f);
  }), xe && (s = Ee);
}
function Qf(e, t, n, r, o, i, s) {
  var a = (o & zd) !== 0, l = (o & (as | ls)) !== 0, u = e.length, d = t.items, g = t.first, f = g, h, v = null, y, k = [], w = [], D, x, b, E;
  if (a)
    for (E = 0; E < u; E += 1)
      D = e[E], x = i(D, E), b = d.get(x), b !== void 0 && (b.a?.measure(), (y ??= /* @__PURE__ */ new Set()).add(b));
  for (E = 0; E < u; E += 1) {
    if (D = e[E], x = i(D, E), b = d.get(x), b === void 0) {
      var A = f ? (
        /** @type {TemplateNode} */
        f.e.nodes_start
      ) : n;
      v = oc(
        A,
        t,
        v,
        v === null ? t.first : v.next,
        D,
        x,
        E,
        r,
        o,
        s
      ), d.set(x, v), k = [], w = [], f = v.next;
      continue;
    }
    if (l && eg(b, D, E, o), (b.e.f & fn) !== 0 && (Hr(b.e), a && (b.a?.unfix(), (y ??= /* @__PURE__ */ new Set()).delete(b))), b !== f) {
      if (h !== void 0 && h.has(b)) {
        if (k.length < w.length) {
          var V = w[0], B;
          v = V.prev;
          var W = k[0], J = k[k.length - 1];
          for (B = 0; B < k.length; B += 1)
            ha(k[B], V, n);
          for (B = 0; B < w.length; B += 1)
            h.delete(w[B]);
          En(t, W.prev, J.next), En(t, v, W), En(t, J, V), f = V, v = J, E -= 1, k = [], w = [];
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
      var L = (o & vl) !== 0 && u === 0 ? n : null;
      if (a) {
        for (E = 0; E < S; E += 1)
          $[E].a?.measure();
        for (E = 0; E < S; E += 1)
          $[E].a?.fix();
      }
      Jf(t, $, L, d);
    }
  }
  a && oo(() => {
    if (y !== void 0)
      for (b of y)
        b.a?.apply();
  }), Pe.first = t.first && t.first.e, Pe.last = v && v.e;
}
function eg(e, t, n, r) {
  (r & as) !== 0 && Hi(e.v, t), (r & ls) !== 0 ? Hi(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function oc(e, t, n, r, o, i, s, a, l, u) {
  var d = (l & as) !== 0, g = (l & Rd) === 0, f = d ? g ? /* @__PURE__ */ Tl(o, !1, !1) : Xn(o) : o, h = (l & ls) === 0 ? s : Xn(s), v = {
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
    return v.e = Jt(() => a(e, f, h, u), xe), v.e.prev = n && n.e, v.e.next = r && r.e, n === null ? t.first = v : (n.next = v, n.e.next = v.e), r !== null && (r.prev = v, r.e.prev = v.e), v;
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
function Ds(e, t, n = !1, r = !1, o = !1) {
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
    if (a.nodes_start !== null && (Fl(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if (xe) {
        Ee.data;
        for (var l = vn(), u = l; l !== null && (l.nodeType !== dr || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ nn(l);
        if (l === null)
          throw to(), Kn;
        mt(Ee, u), i = at(l);
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
function Ts(e, t, n) {
  xe && vn();
  var r = e, o, i;
  $n(() => {
    o !== (o = t()) && (i && (gr(i), i = null), o && (i = Jt(() => n(r, o))));
  }, br), xe && (r = Ee);
}
function tg(e, t, n, r, o, i) {
  let s = xe;
  xe && vn();
  var a, l, u = null;
  xe && Ee.nodeType === ef && (u = /** @type {Element} */
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
    }) : f === l ? Hr(g) : yt(g)), f && f !== l && (g = Jt(() => {
      if (u = xe ? (
        /** @type {Element} */
        u
      ) : h ? document.createElementNS(h, f) : document.createElement(f), mt(u, u), r) {
        xe && Wf(f) && u.append(document.createComment(""));
        var v = (
          /** @type {TemplateNode} */
          xe ? /* @__PURE__ */ Ge(u) : u.appendChild(pn())
        );
        xe && (v === null ? bt(!1) : at(v)), r(u, v);
      }
      Pe.nodes_end = u, d.before(u);
    })), a = f, a && (l = a));
  }, br), s && (bt(!0), at(d));
}
function Te(e, t) {
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
function st(e, t, n) {
  no(() => {
    var r = nt(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      ro(() => {
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
    n !== (n = t()) && (r && (yt(r), r = null), n && (r = Jt(() => {
      no(() => (
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
function wt(e, t, n, r, o, i) {
  var s = e.__className;
  if (xe || s !== n || s === void 0) {
    var a = og(n, r, i);
    (!xe || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
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
  }), $l(() => {
    t.disconnect();
  });
}
function ma(e) {
  return "__value" in e ? e.__value : e.value;
}
const Sn = Symbol("class"), Zt = Symbol("style"), sc = Symbol("is custom element"), ac = Symbol("is html");
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
    e.__on_r = n, Cf(n), Vf();
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
  xe && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[Qd] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && lc(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function lg(e, t, n, r, o = !1) {
  var i = si(e), s = i[sc], a = !i[ac];
  let l = xe && s;
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
      wt(e, h, b, r, t?.[Sn], n[Sn]), u[x] = b, u[Sn] = n[Sn];
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
          const E = {}, A = "$$" + x;
          let V = x.slice(2);
          var k = Bf(V);
          if (zf(V) && (V = V.slice(0, -7), E.capture = !0), !k && v) {
            if (b != null) continue;
            e.removeEventListener(V, u[A], E), u[A] = null;
          }
          if (b != null)
            if (k)
              e[`__${V}`] = b, _n([V]);
            else {
              let B = function(W) {
                u[x].call(this, W);
              };
              u[A] = Ns(V, e, B, E);
            }
          else k && (e[`__${V}`] = void 0);
        } else if (x === "style")
          _e(e, x, b);
        else if (x === "autofocus")
          Lf(
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
          var D = w === "defaultValue" || w === "defaultChecked";
          if (b == null && !s && !D)
            if (i[x] = null, w === "value" || w === "checked") {
              let E = (
                /** @type {HTMLInputElement} */
                e
              );
              const A = t === void 0;
              if (w === "value") {
                let V = E.defaultValue;
                E.removeAttribute(w), E.defaultValue = V, E.value = E.__value = A ? V : null;
              } else {
                let V = E.defaultChecked;
                E.removeAttribute(w), E.defaultChecked = V, E.checked = A ? V : !1;
              }
            } else
              e.removeAttribute(x);
          else D || f.includes(w) && (s || typeof b != "string") ? e[w] = b : typeof b != "function" && _e(e, w, b);
        }
    }
  }
  return l && bt(!0), u;
}
function Ue(e, t, n = [], r, o = !1, i = kr) {
  const s = n.map(i);
  var a = void 0, l = {}, u = e.nodeName === "SELECT", d = !1;
  if ($n(() => {
    var f = t(...s.map(c)), h = lg(e, a, f, r, o);
    d && u && "value" in f && Fi(
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
  }), u) {
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
  no(() => (nt(() => n(e[t])), r));
}
function _a(e, t) {
  return e === t || e?.[Wt] === t;
}
function Nt(e = {}, t, n, r) {
  return no(() => {
    var o, i;
    return ro(() => {
      o = i, i = [], nt(() => {
        e !== n(...i) && (t(e, ...i), o && _a(n(...o), e) && t(null, ...o));
      });
    }), () => {
      oo(() => {
        i && _a(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function cc(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    ze
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
    xa(t, r), Ho(n.b);
  }), Ze(() => {
    const o = nt(() => n.m.map(Ud));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Ze(() => {
    xa(t, r), Ho(n.a);
  });
}
function xa(e, t) {
  if (e.l.s)
    for (const n of e.l.s) c(n);
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
      return c(e.version), t in e.special ? e.special[t]() : e.props[t];
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
  var D = (
    /** @type {Effect} */
    Pe
  );
  return function(x, b) {
    if (arguments.length > 0) {
      const E = b ? c(w) : o && i ? Mt(x) : x;
      return Y(w, E), k = !0, a !== void 0 && (a = E), x;
    }
    return An && k || (D.f & ti) !== 0 ? w.v : c(w);
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
      var a = /* @__PURE__ */ Tl(s, !1, !1);
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
          return Y(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
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
  let s = class extends uc {
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
        var u = this.$$c;
        if (u) {
          var d = dn(u, a)?.get;
          d ? u[a] = l : u.$set({ [a]: l });
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
      if (o = (e = r[i]).type) n[o] = Ca(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = Ca(n[o], e.name, null);
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
function Ca(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = mg, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var qi = "http://www.w3.org/1999/xhtml";
const ka = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: qi,
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
    return n === qi && t.documentElement.namespaceURI === qi ? t.createElement(e) : t.createElementNS(n, e);
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
function Dg(e) {
  return function() {
    return Pg.call(this.children, e);
  };
}
function Tg() {
  return this.firstElementChild;
}
function Ag(e) {
  return this.select(e == null ? Tg : Dg(typeof e == "function" ? e : hc(e)));
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
function Hg(e) {
  return this.selectAll(e == null ? Og : Lg(typeof e == "function" ? e : hc(e)));
}
function Vg(e) {
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
  for (var s = 0, a, l = t.length, u = i.length; s < u; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new zo(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function Rg(e, t, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), d = t.length, g = i.length, f = new Array(d), h;
  for (a = 0; a < d; ++a)
    (l = t[a]) && (f[a] = h = s.call(l, l.__data__, a, t) + "", u.has(h) ? o[a] = l : u.set(h, l));
  for (a = 0; a < g; ++a)
    h = s.call(e, i[a], a, i) + "", (l = u.get(h)) ? (r[a] = l, l.__data__ = i[a], u.delete(h)) : n[a] = new zo(e, i[a]);
  for (a = 0; a < d; ++a)
    (l = t[a]) && u.get(f[a]) === l && (o[a] = l);
}
function Bg(e) {
  return e.__data__;
}
function Fg(e, t) {
  if (!arguments.length) return Array.from(this, Bg);
  var n = t ? Rg : zg, r = this._parents, o = this._groups;
  typeof e != "function" && (e = Ig(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var d = r[u], g = o[u], f = g.length, h = Kg(e.call(d, d && d.__data__, u, r)), v = h.length, y = a[u] = new Array(v), k = s[u] = new Array(v), w = l[u] = new Array(f);
    n(d, g, y, k, w, h, t);
    for (var D = 0, x = 0, b, E; D < v; ++D)
      if (b = y[D]) {
        for (D >= x && (x = D + 1); !(E = k[x]) && ++x < v; ) ;
        b._next = E || null;
      }
  }
  return s = new Pt(s, r), s._enter = a, s._exit = l, s;
}
function Kg(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function qg() {
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
function D1() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function T1() {
  return this.each(D1);
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
function L1() {
  return null;
}
function H1(e, t) {
  var n = typeof e == "function" ? e : dc(e), r = t == null ? L1 : typeof t == "function" ? t : Ms(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function V1() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function $1() {
  return this.each(V1);
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
function F1(e) {
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
function q1(e) {
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
    var r = this.__on, o, i = F1(t);
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
  for (a = t ? Z1 : q1, o = 0; o < i; ++o) this.each(a(r[o], t, n));
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
function io() {
  return new Pt([[document.documentElement]], bc);
}
function U1() {
  return this;
}
Pt.prototype = io.prototype = {
  constructor: Pt,
  select: Cg,
  selectAll: Ng,
  selectChild: Ag,
  selectChildren: Hg,
  filter: Vg,
  data: Fg,
  enter: $g,
  exit: qg,
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
  raise: T1,
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
function Lt(e, t) {
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
    b.on("mousedown.drag", h).filter(r).on("touchstart.drag", k).on("touchmove.drag", w, Q1).on("touchend.drag touchcancel.drag", D).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function h(b, E) {
    if (!(d || !e.call(this, b, E))) {
      var A = x(this, t.call(this, b, E), b, E, "mouse");
      A && (At(b.view).on("mousemove.drag", v, Br).on("mouseup.drag", y, Br), Cc(b.view), bi(b), u = !1, a = b.clientX, l = b.clientY, A("start", b));
    }
  }
  function v(b) {
    if (ar(b), !u) {
      var E = b.clientX - a, A = b.clientY - l;
      u = E * E + A * A > g;
    }
    o.mouse("drag", b);
  }
  function y(b) {
    At(b.view).on("mousemove.drag mouseup.drag", null), kc(b.view, u), ar(b), o.mouse("end", b);
  }
  function k(b, E) {
    if (e.call(this, b, E)) {
      var A = b.changedTouches, V = t.call(this, b, E), B = A.length, W, J;
      for (W = 0; W < B; ++W)
        (J = x(this, V, b, E, A[W].identifier, A[W])) && (bi(b), J("start", b, A[W]));
    }
  }
  function w(b) {
    var E = b.changedTouches, A = E.length, V, B;
    for (V = 0; V < A; ++V)
      (B = o[E[V].identifier]) && (ar(b), B("drag", b, E[V]));
  }
  function D(b) {
    var E = b.changedTouches, A = E.length, V, B;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), V = 0; V < A; ++V)
      (B = o[E[V].identifier]) && (bi(b), B("end", b, E[V]));
  }
  function x(b, E, A, V, B, W) {
    var J = i.copy(), $ = Lt(W || A, E), S, L, _;
    if ((_ = n.call(b, new Zi("beforestart", {
      sourceEvent: A,
      target: f,
      identifier: B,
      active: s,
      x: $[0],
      y: $[1],
      dx: 0,
      dy: 0,
      dispatch: J
    }), V)) != null)
      return S = _.x - $[0] || 0, L = _.y - $[1] || 0, function P(C, O, z) {
        var T = $, F;
        switch (C) {
          case "start":
            o[B] = P, F = s++;
            break;
          case "end":
            delete o[B], --s;
          // falls through
          case "drag":
            $ = Lt(z || O, E), F = s;
            break;
        }
        J.call(
          C,
          b,
          new Zi(C, {
            sourceEvent: O,
            subject: _,
            target: f,
            identifier: B,
            active: F,
            x: $[0] + S,
            y: $[1] + L,
            dx: $[0] - T[0],
            dy: $[1] - T[1],
            dispatch: J
          }),
          V
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
function Ec(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function so() {
}
var Fr = 0.7, Ro = 1 / Fr, lr = "\\s*([+-]?\\d+)\\s*", Kr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", jt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ih = /^#([0-9a-f]{3,8})$/, sh = new RegExp(`^rgb\\(${lr},${lr},${lr}\\)$`), ah = new RegExp(`^rgb\\(${jt},${jt},${jt}\\)$`), lh = new RegExp(`^rgba\\(${lr},${lr},${lr},${Kr}\\)$`), ch = new RegExp(`^rgba\\(${jt},${jt},${jt},${Kr}\\)$`), uh = new RegExp(`^hsl\\(${Kr},${jt},${jt}\\)$`), dh = new RegExp(`^hsla\\(${Kr},${jt},${jt},${Kr}\\)$`), Ea = {
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
  return e = (e + "").trim().toLowerCase(), (t = ih.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Pa(t) : n === 3 ? new vt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? wo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? wo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = sh.exec(e)) ? new vt(t[1], t[2], t[3], 1) : (t = ah.exec(e)) ? new vt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = lh.exec(e)) ? wo(t[1], t[2], t[3], t[4]) : (t = ch.exec(e)) ? wo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = uh.exec(e)) ? Aa(t[1], t[2] / 100, t[3] / 100, 1) : (t = dh.exec(e)) ? Aa(t[1], t[2] / 100, t[3] / 100, t[4]) : Ea.hasOwnProperty(e) ? Pa(Ea[e]) : e === "transparent" ? new vt(NaN, NaN, NaN, 0) : null;
}
function Pa(e) {
  return new vt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function wo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new vt(e, t, n, r);
}
function hh(e) {
  return e instanceof so || (e = jn(e)), e ? (e = e.rgb(), new vt(e.r, e.g, e.b, e.opacity)) : new vt();
}
function Yi(e, t, n, r) {
  return arguments.length === 1 ? hh(e) : new vt(e, t, n, r ?? 1);
}
function vt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Ls(vt, Yi, Ec(so, {
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
  formatHex8: vh,
  formatRgb: Ta,
  toString: Ta
}));
function Da() {
  return `#${Fn(this.r)}${Fn(this.g)}${Fn(this.b)}`;
}
function vh() {
  return `#${Fn(this.r)}${Fn(this.g)}${Fn(this.b)}${Fn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ta() {
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
function Aa(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Vt(e, t, n, r);
}
function Sc(e) {
  if (e instanceof Vt) return new Vt(e.h, e.s, e.l, e.opacity);
  if (e instanceof so || (e = jn(e)), !e) return new Vt();
  if (e instanceof Vt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new Vt(s, a, l, e.opacity);
}
function ph(e, t, n, r) {
  return arguments.length === 1 ? Sc(e) : new Vt(e, t, n, r ?? 1);
}
function Vt(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Ls(Vt, ph, Ec(so, {
  brighter(e) {
    return e = e == null ? Ro : Math.pow(Ro, e), new Vt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Fr : Math.pow(Fr, e), new Vt(this.h, this.s, this.l * e, this.opacity);
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
    return new Vt(Ma(this.h), _o(this.s), _o(this.l), Bo(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Bo(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Ma(this.h)}, ${_o(this.s) * 100}%, ${_o(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Ma(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function _o(e) {
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
const Fo = function e(t) {
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
  for (s = 0; s < r; ++s) o[s] = Lr(e[s], t[s]);
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
function qt(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function kh(e, t) {
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
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: qt(r, o) })), n = ki.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? Sh(l[0].x) : Eh(t) : (t = l.length, function(u) {
    for (var d = 0, g; d < t; ++d) a[(g = l[d]).i] = g.x(u);
    return a.join("");
  });
}
function Lr(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? Hs(t) : (n === "number" ? qt : n === "string" ? (r = jn(t)) ? (t = r, Fo) : Pc : t instanceof jn ? Fo : t instanceof Date ? Ch : xh(t) ? _h : Array.isArray(t) ? bh : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? kh : qt)(e, t);
}
var Oa = 180 / Math.PI, Xi = {
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
    rotate: Math.atan2(t, e) * Oa,
    skewX: Math.atan(l) * Oa,
    scaleX: s,
    scaleY: a
  };
}
var xo;
function Nh(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Xi : Dc(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Ph(e) {
  return e == null || (xo || (xo = document.createElementNS("http://www.w3.org/2000/svg", "g")), xo.setAttribute("transform", e), !(e = xo.transform.baseVal.consolidate())) ? Xi : (e = e.matrix, Dc(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Tc(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, d, g, f, h, v) {
    if (u !== g || d !== f) {
      var y = h.push("translate(", null, t, null, n);
      v.push({ i: y - 4, x: qt(u, g) }, { i: y - 2, x: qt(d, f) });
    } else (g || f) && h.push("translate(" + g + t + f + n);
  }
  function s(u, d, g, f) {
    u !== d ? (u - d > 180 ? d += 360 : d - u > 180 && (u += 360), f.push({ i: g.push(o(g) + "rotate(", null, r) - 2, x: qt(u, d) })) : d && g.push(o(g) + "rotate(" + d + r);
  }
  function a(u, d, g, f) {
    u !== d ? f.push({ i: g.push(o(g) + "skewX(", null, r) - 2, x: qt(u, d) }) : d && g.push(o(g) + "skewX(" + d + r);
  }
  function l(u, d, g, f, h, v) {
    if (u !== g || d !== f) {
      var y = h.push(o(h) + "scale(", null, ",", null, ")");
      v.push({ i: y - 4, x: qt(u, g) }, { i: y - 2, x: qt(d, f) });
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
var Dh = Tc(Nh, "px, ", "px)", "deg)"), Th = Tc(Ph, ", ", ")", ")"), Ah = 1e-12;
function La(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Mh(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Oh(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Do = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], d = s[0], g = s[1], f = s[2], h = d - a, v = g - l, y = h * h + v * v, k, w;
    if (y < Ah)
      w = Math.log(f / u) / t, k = function(V) {
        return [
          a + V * h,
          l + V * v,
          u * Math.exp(t * V * w)
        ];
      };
    else {
      var D = Math.sqrt(y), x = (f * f - u * u + r * y) / (2 * u * n * D), b = (f * f - u * u - r * y) / (2 * f * n * D), E = Math.log(Math.sqrt(x * x + 1) - x), A = Math.log(Math.sqrt(b * b + 1) - b);
      w = (A - E) / t, k = function(V) {
        var B = V * w, W = La(E), J = u / (n * D) * (W * Oh(t * B + E) - Mh(E));
        return [
          a + J * h,
          l + J * v,
          u * W / La(t * B + E)
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
var pr = 0, Tr = 0, Nr = 0, Ac = 1e3, Ko, Ar, qo = 0, Gn = 0, ci = 0, qr = typeof performance == "object" && performance.now ? performance : Date, Mc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Vs() {
  return Gn || (Mc(Lh), Gn = qr.now() + ci);
}
function Lh() {
  Gn = 0;
}
function Zo() {
  this._call = this._time = this._next = null;
}
Zo.prototype = Oc.prototype = {
  constructor: Zo,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Vs() : +n) + (t == null ? 0 : +t), !this._next && Ar !== this && (Ar ? Ar._next = this : Ko = this, Ar = this), this._call = e, this._time = n, ji();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ji());
  }
};
function Oc(e, t, n) {
  var r = new Zo();
  return r.restart(e, t, n), r;
}
function Hh() {
  Vs(), ++pr;
  for (var e = Ko, t; e; )
    (t = Gn - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --pr;
}
function Ha() {
  Gn = (qo = qr.now()) + ci, pr = Tr = 0;
  try {
    Hh();
  } finally {
    pr = 0, $h(), Gn = 0;
  }
}
function Vh() {
  var e = qr.now(), t = e - qo;
  t > Ac && (ci -= t, qo = e);
}
function $h() {
  for (var e, t = Ko, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Ko = n);
  Ar = e, ji(r);
}
function ji(e) {
  if (!pr) {
    Tr && (Tr = clearTimeout(Tr));
    var t = e - Gn;
    t > 24 ? (e < 1 / 0 && (Tr = setTimeout(Ha, e - qr.now() - ci)), Nr && (Nr = clearInterval(Nr))) : (Nr || (qo = qr.now(), Nr = setInterval(Vh, Ac)), pr = 1, Mc(Ha));
  }
}
function Va(e, t, n) {
  var r = new Zo();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var Ih = ai("start", "end", "cancel", "interrupt"), zh = [], Lc = 0, $a = 1, Gi = 2, To = 3, Ia = 4, Ui = 5, Ao = 6;
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
    state: Lc
  });
}
function $s(e, t) {
  var n = zt(e, t);
  if (n.state > Lc) throw new Error("too late; already scheduled");
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
        if (h.state === To) return Va(s);
        h.state === Ia ? (h.state = Ao, h.timer.stop(), h.on.call("interrupt", e, e.__data__, h.index, h.group), delete r[d]) : +d < t && (h.state = Ao, h.timer.stop(), h.on.call("cancel", e, e.__data__, h.index, h.group), delete r[d]);
      }
    if (Va(function() {
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
    n.state = Ao, n.timer.stop(), delete r[t];
    for (var u in r) return;
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
function Bh(e) {
  return this.each(function() {
    Mo(this, e);
  });
}
function Fh(e, t) {
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
function qh(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = zt(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? Fh : Kh)(n, e, t));
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
  return (typeof t == "number" ? qt : t instanceof jn ? Fo : (n = jn(t)) ? (t = n, Fo) : Pc)(e, t);
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
  var n = li(e), r = n === "transform" ? Th : Hc;
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
function Vc(e) {
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
    var l = rn(this, e), u = l.on, d = l.value[i] == null ? a || (a = Vc(t)) : void 0;
    (u !== n || o !== d) && (r = (n = u).copy()).on(s, o = d), l.on = r;
  };
}
function Pv(e, t, n) {
  var r = (e += "") == "transform" ? Dh : Hc;
  return t == null ? this.styleTween(e, kv(e, r)).on("end.style." + e, Vc(e)) : typeof t == "function" ? this.styleTween(e, Sv(e, r, Is(this, "style." + e, t))).each(Nv(this._id, e)) : this.styleTween(e, Ev(e, r, t), n).on("end.style." + e, null);
}
function Dv(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function Tv(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && Dv(e, s, n)), r;
  }
  return i._value = t, i;
}
function Av(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, Tv(e, t, n ?? ""));
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
function Hv(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function Vv(e) {
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
  return this.tween(t, Vv(e));
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
  attr: Uh,
  attrTween: nv,
  style: Pv,
  styleTween: Av,
  text: Lv,
  textTween: $v,
  remove: wv,
  tween: qh,
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
  e instanceof mn ? (t = e._id, e = e._name) : (t = $c(), (n = Fv).time = Vs(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && ui(l, e, t, u, s, n || Kv(l, t));
  return new mn(r, this._parents, e, t);
}
io.prototype.interrupt = Bh;
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
  var e = Yv, t = Wv, n = Gv, r = Xv, o = jv, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = Do, u = ai("start", "zoom", "end"), d, g, f, h = 500, v = 150, y = 0, k = 10;
  function w(_) {
    _.property("__zoom", za).on("wheel.zoom", B, { passive: !1 }).on("mousedown.zoom", W).on("dblclick.zoom", J).filter(o).on("touchstart.zoom", $).on("touchmove.zoom", S).on("touchend.zoom touchcancel.zoom", L).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  w.transform = function(_, P, C, O) {
    var z = _.selection ? _.selection() : _;
    z.property("__zoom", za), _ !== z ? E(_, P, C, O) : z.interrupt().each(function() {
      A(this, arguments).event(O).start().zoom(null, typeof P == "function" ? P.apply(this, arguments) : P).end();
    });
  }, w.scaleBy = function(_, P, C, O) {
    w.scaleTo(_, function() {
      var z = this.__zoom.k, T = typeof P == "function" ? P.apply(this, arguments) : P;
      return z * T;
    }, C, O);
  }, w.scaleTo = function(_, P, C, O) {
    w.transform(_, function() {
      var z = t.apply(this, arguments), T = this.__zoom, F = C == null ? b(z) : typeof C == "function" ? C.apply(this, arguments) : C, Z = T.invert(F), j = typeof P == "function" ? P.apply(this, arguments) : P;
      return n(x(D(T, j), F, Z), z, s);
    }, C, O);
  }, w.translateBy = function(_, P, C, O) {
    w.transform(_, function() {
      return n(this.__zoom.translate(
        typeof P == "function" ? P.apply(this, arguments) : P,
        typeof C == "function" ? C.apply(this, arguments) : C
      ), t.apply(this, arguments), s);
    }, null, O);
  }, w.translateTo = function(_, P, C, O, z) {
    w.transform(_, function() {
      var T = t.apply(this, arguments), F = this.__zoom, Z = O == null ? b(T) : typeof O == "function" ? O.apply(this, arguments) : O;
      return n(di.translate(Z[0], Z[1]).scale(F.k).translate(
        typeof P == "function" ? -P.apply(this, arguments) : -P,
        typeof C == "function" ? -C.apply(this, arguments) : -C
      ), T, s);
    }, O, z);
  };
  function D(_, P) {
    return P = Math.max(i[0], Math.min(i[1], P)), P === _.k ? _ : new ln(P, _.x, _.y);
  }
  function x(_, P, C) {
    var O = P[0] - C[0] * _.k, z = P[1] - C[1] * _.k;
    return O === _.x && z === _.y ? _ : new ln(_.k, O, z);
  }
  function b(_) {
    return [(+_[0][0] + +_[1][0]) / 2, (+_[0][1] + +_[1][1]) / 2];
  }
  function E(_, P, C, O) {
    _.on("start.zoom", function() {
      A(this, arguments).event(O).start();
    }).on("interrupt.zoom end.zoom", function() {
      A(this, arguments).event(O).end();
    }).tween("zoom", function() {
      var z = this, T = arguments, F = A(z, T).event(O), Z = t.apply(z, T), j = C == null ? b(Z) : typeof C == "function" ? C.apply(z, T) : C, re = Math.max(Z[1][0] - Z[0][0], Z[1][1] - Z[0][1]), te = z.__zoom, Q = typeof P == "function" ? P.apply(z, T) : P, X = l(te.invert(j).concat(re / te.k), Q.invert(j).concat(re / Q.k));
      return function(U) {
        if (U === 1) U = Q;
        else {
          var q = X(U), he = re / q[2];
          U = new ln(he, j[0] - q[0] * he, j[1] - q[1] * he);
        }
        F.zoom(null, U);
      };
    });
  }
  function A(_, P, C) {
    return !C && _.__zooming || new V(_, P);
  }
  function V(_, P) {
    this.that = _, this.args = P, this.active = 0, this.sourceEvent = null, this.extent = t.apply(_, P), this.taps = 0;
  }
  V.prototype = {
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
    var C = A(this, P).event(_), O = this.__zoom, z = Math.max(i[0], Math.min(i[1], O.k * Math.pow(2, r.apply(this, arguments)))), T = Lt(_);
    if (C.wheel)
      (C.mouse[0][0] !== T[0] || C.mouse[0][1] !== T[1]) && (C.mouse[1] = O.invert(C.mouse[0] = T)), clearTimeout(C.wheel);
    else {
      if (O.k === z) return;
      C.mouse = [T, O.invert(T)], Mo(this), C.start();
    }
    Pr(_), C.wheel = setTimeout(F, v), C.zoom("mouse", n(x(D(O, z), C.mouse[0], C.mouse[1]), C.extent, s));
    function F() {
      C.wheel = null, C.end();
    }
  }
  function W(_, ...P) {
    if (f || !e.apply(this, arguments)) return;
    var C = _.currentTarget, O = A(this, P, !0).event(_), z = At(_.view).on("mousemove.zoom", j, !0).on("mouseup.zoom", re, !0), T = Lt(_, C), F = _.clientX, Z = _.clientY;
    Cc(_.view), Ei(_), O.mouse = [T, this.__zoom.invert(T)], Mo(this), O.start();
    function j(te) {
      if (Pr(te), !O.moved) {
        var Q = te.clientX - F, X = te.clientY - Z;
        O.moved = Q * Q + X * X > y;
      }
      O.event(te).zoom("mouse", n(x(O.that.__zoom, O.mouse[0] = Lt(te, C), O.mouse[1]), O.extent, s));
    }
    function re(te) {
      z.on("mousemove.zoom mouseup.zoom", null), kc(te.view, O.moved), Pr(te), O.event(te).end();
    }
  }
  function J(_, ...P) {
    if (e.apply(this, arguments)) {
      var C = this.__zoom, O = Lt(_.changedTouches ? _.changedTouches[0] : _, this), z = C.invert(O), T = C.k * (_.shiftKey ? 0.5 : 2), F = n(x(D(C, T), O, z), t.apply(this, P), s);
      Pr(_), a > 0 ? At(this).transition().duration(a).call(E, F, O, _) : At(this).call(w.transform, F, O, _);
    }
  }
  function $(_, ...P) {
    if (e.apply(this, arguments)) {
      var C = _.touches, O = C.length, z = A(this, P, _.changedTouches.length === O).event(_), T, F, Z, j;
      for (Ei(_), F = 0; F < O; ++F)
        Z = C[F], j = Lt(Z, this), j = [j, this.__zoom.invert(j), Z.identifier], z.touch0 ? !z.touch1 && z.touch0[2] !== j[2] && (z.touch1 = j, z.taps = 0) : (z.touch0 = j, T = !0, z.taps = 1 + !!d);
      d && (d = clearTimeout(d)), T && (z.taps < 2 && (g = j[0], d = setTimeout(function() {
        d = null;
      }, h)), Mo(this), z.start());
    }
  }
  function S(_, ...P) {
    if (this.__zooming) {
      var C = A(this, P).event(_), O = _.changedTouches, z = O.length, T, F, Z, j;
      for (Pr(_), T = 0; T < z; ++T)
        F = O[T], Z = Lt(F, this), C.touch0 && C.touch0[2] === F.identifier ? C.touch0[0] = Z : C.touch1 && C.touch1[2] === F.identifier && (C.touch1[0] = Z);
      if (F = C.that.__zoom, C.touch1) {
        var re = C.touch0[0], te = C.touch0[1], Q = C.touch1[0], X = C.touch1[1], U = (U = Q[0] - re[0]) * U + (U = Q[1] - re[1]) * U, q = (q = X[0] - te[0]) * q + (q = X[1] - te[1]) * q;
        F = D(F, Math.sqrt(U / q)), Z = [(re[0] + Q[0]) / 2, (re[1] + Q[1]) / 2], j = [(te[0] + X[0]) / 2, (te[1] + X[1]) / 2];
      } else if (C.touch0) Z = C.touch0[0], j = C.touch0[1];
      else return;
      C.zoom("touch", n(x(F, Z, j), C.extent, s));
    }
  }
  function L(_, ...P) {
    if (this.__zooming) {
      var C = A(this, P).event(_), O = _.changedTouches, z = O.length, T, F;
      for (Ei(_), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, h), T = 0; T < z; ++T)
        F = O[T], C.touch0 && C.touch0[2] === F.identifier ? delete C.touch0 : C.touch1 && C.touch1[2] === F.identifier && delete C.touch1;
      if (C.touch1 && !C.touch0 && (C.touch0 = C.touch1, delete C.touch1), C.touch0) C.touch0[1] = this.__zoom.invert(C.touch0[0]);
      else if (C.end(), C.taps === 2 && (F = Lt(F, this), Math.hypot(g[0] - F[0], g[1] - F[1]) < k)) {
        var Z = At(this).on("dblclick.zoom");
        Z && Z.apply(this, arguments);
      }
    }
  }
  return w.wheelDelta = function(_) {
    return arguments.length ? (r = typeof _ == "function" ? _ : bo(+_), w) : r;
  }, w.filter = function(_) {
    return arguments.length ? (e = typeof _ == "function" ? _ : bo(!!_), w) : e;
  }, w.touchable = function(_) {
    return arguments.length ? (o = typeof _ == "function" ? _ : bo(!!_), w) : o;
  }, w.extent = function(_) {
    return arguments.length ? (t = typeof _ == "function" ? _ : bo([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), w) : t;
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
const Bc = (e) => "id" in e && "source" in e && "target" in e, ep = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), zs = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), ao = (e, t = [0, 0]) => {
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
  const a = rp(e, s), l = lo(a), u = Bs(l, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(u, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function Fc({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
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
const Fa = (e, t, n) => e < t ? yr(Math.abs(e - t), 1, t) / t : e > n ? -yr(Math.abs(e - n), 1, t) / t : 0, qc = (e, t, n = 15, r = 40) => {
  const o = Fa(e.x, r, t.width - r) * n, i = Fa(e.y, r, t.height - r) * n;
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
}, Zc = (e, t) => gi(fi(es(e), es(t))), Wr = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, Ka = (e) => cn(e.width) && cn(e.height) && cn(e.x) && cn(e.y), cn = (e) => !isNaN(e) && isFinite(e), sp = (e, t) => {
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
  const { x: s, y: a } = Xo(e, [t, n, r]), { x: l, y: u } = Xo({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - l, g = i - u;
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
  const { x: i, y: s } = Yt(e), a = co({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: u } = n ? hi(a, t) : a;
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
      ...Wc(s)
    };
  });
};
function fp({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - e), g = Math.abs(u - t);
  return [l, u, d, g];
}
function Co(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Za({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
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
  const w = { x: 0, y: 0 }, D = { x: 0, y: 0 }, [, , x, b] = Jc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[f] * l[f] === -1) {
    f === "x" ? (y = o.x ?? u.x + (d.x - u.x) * s, k = o.y ?? (u.y + d.y) / 2) : (y = o.x ?? (u.x + d.x) / 2, k = o.y ?? u.y + (d.y - u.y) * s);
    const A = [
      { x: y, y: u.y },
      { x: y, y: d.y }
    ], V = [
      { x: u.x, y: k },
      { x: d.x, y: k }
    ];
    a[f] === h ? v = f === "x" ? A : V : v = f === "x" ? V : A;
  } else {
    const A = [{ x: u.x, y: d.y }], V = [{ x: d.x, y: u.y }];
    if (f === "x" ? v = a.x === h ? V : A : v = a.y === h ? A : V, t === r) {
      const S = Math.abs(e[f] - n[f]);
      if (S <= i) {
        const L = Math.min(i - 1, i - S);
        a[f] === h ? w[f] = (u[f] > e[f] ? -1 : 1) * L : D[f] = (d[f] > n[f] ? -1 : 1) * L;
      }
    }
    if (t !== r) {
      const S = f === "x" ? "y" : "x", L = a[f] === l[S], _ = u[S] > d[S], P = u[S] < d[S];
      (a[f] === 1 && (!L && _ || L && P) || a[f] !== 1 && (!L && P || L && _)) && (v = f === "x" ? A : V);
    }
    const B = { x: u.x + w.x, y: u.y + w.y }, W = { x: d.x + D.x, y: d.y + D.y }, J = Math.max(Math.abs(B.x - v[0].x), Math.abs(W.x - v[0].x)), $ = Math.max(Math.abs(B.y - v[0].y), Math.abs(W.y - v[0].y));
    J >= $ ? (y = (B.x + W.x) / 2, k = v[0].y) : (y = v[0].x, k = (B.y + W.y) / 2);
  }
  return [[
    e,
    { x: u.x + w.x, y: u.y + w.y },
    ...v,
    { x: d.x + D.x, y: d.y + D.y },
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
function Fs({ sourceX: e, sourceY: t, sourcePosition: n = we.Bottom, targetX: r, targetY: o, targetPosition: i = we.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20, stepPosition: d = 0.5 }) {
  const [g, f, h, v, y] = wp({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u,
    stepPosition: d
  });
  return [g.reduce((w, D, x) => {
    let b = "";
    return x > 0 && x < g.length - 1 ? b = _p(g[x - 1], D, g[x + 1], s) : b = `${x === 0 ? "M" : "L"}${D.x} ${D.y}`, w += b, w;
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
    let u = s.get(l.id);
    if (o.checkEquality && l === u?.internals.userNode)
      t.set(l.id, u);
    else {
      const d = ao(l, o.nodeOrigin), g = _r(l.extent) ? l.extent : o.nodeExtent, f = Un(d, g, zn(l));
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
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: s } = qs(Ks, r), a = e.parentId, l = t.get(a);
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
  const { x: i, y: s } = t.internals.positionAbsolute, a = zn(e), l = ao(e, n), u = _r(e.extent) ? Un(l, e.extent, a) : l;
  let d = Un({ x: i + u.x, y: s + u.y }, r, a);
  e.extent === "parent" && (d = Kc(d, a, t));
  const g = eu(e, o), f = t.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: f >= g ? f + 1 : g
  };
}
function Dp(e, t, n, r = [0, 0]) {
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
    }), n.get(l)?.forEach((D) => {
      e.some((x) => x.id === D.id) || o.push({
        id: D.id,
        type: "position",
        position: {
          x: D.position.x + f,
          y: D.position.y + h
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
function Tp(e, t, n, r, o, i) {
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
      const w = f.nodeElement.getBoundingClientRect(), D = _r(h.extent) ? h.extent : i;
      let { positionAbsolute: x } = h.internals;
      h.parentId && h.extent === "parent" ? x = Kc(x, v, t.get(h.parentId)) : D && (x = Un(x, D, v));
      const b = {
        ...h,
        measured: v,
        internals: {
          ...h.internals,
          positionAbsolute: x,
          handleBounds: {
            source: qa("source", f.nodeElement, w, d, h.id),
            target: qa("target", f.nodeElement, w, d, h.id)
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
    const f = Dp(g, t, n, o);
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
function Lp(e, t, n, r) {
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
  function y({ noDragClassName: w, handleSelector: D, domNode: x, isSelectable: b, nodeId: E, nodeClickDistance: A = 0 }) {
    f = At(x);
    function V({ x: $, y: S }, L) {
      const { nodeLookup: _, nodeExtent: P, snapGrid: C, snapToGrid: O, nodeOrigin: z, onNodeDrag: T, onSelectionDrag: F, onError: Z, updateNodePositions: j } = t();
      i = { x: $, y: S };
      let re = !1, te = { x: 0, y: 0, x2: 0, y2: 0 };
      if (a.size > 1 && P) {
        const Q = lo(a);
        te = es(Q);
      }
      for (const [Q, X] of a) {
        if (!_.has(Q))
          continue;
        let U = { x: $ - X.distance.x, y: S - X.distance.y };
        O && (U = hi(U, C));
        let q = [
          [P[0][0], P[0][1]],
          [P[1][0], P[1][1]]
        ];
        if (a.size > 1 && P && !X.extent) {
          const { positionAbsolute: ne } = X.internals, oe = ne.x - te.x + P[0][0], ae = ne.x + X.measured.width - te.x2 + P[1][0], ee = ne.y - te.y + P[0][1], ge = ne.y + X.measured.height - te.y2 + P[1][1];
          q = [
            [oe, ee],
            [ae, ge]
          ];
        }
        const { position: he, positionAbsolute: fe } = Fc({
          nodeId: Q,
          nextPosition: U,
          nodeLookup: _,
          nodeExtent: q,
          nodeOrigin: z,
          onError: Z
        });
        re = re || X.position.x !== he.x || X.position.y !== he.y, X.position = he, X.internals.positionAbsolute = fe;
      }
      if (v = v || re, !!re && (j(a, !0), L && (r || T || !E && F))) {
        const [Q, X] = Ni({
          nodeId: E,
          dragItems: a,
          nodeLookup: _
        });
        r?.(L, a, Q, X), T?.(L, Q, X), E || F?.(L, X);
      }
    }
    async function B() {
      if (!d)
        return;
      const { transform: $, panBy: S, autoPanSpeed: L, autoPanOnNodeDrag: _ } = t();
      if (!_) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [P, C] = qc(u, d, L);
      (P !== 0 || C !== 0) && (i.x = (i.x ?? 0) - P / $[2], i.y = (i.y ?? 0) - C / $[2], await S({ x: P, y: C }) && V(i, null)), s = requestAnimationFrame(B);
    }
    function W($) {
      const { nodeLookup: S, multiSelectionActive: L, nodesDraggable: _, transform: P, snapGrid: C, snapToGrid: O, selectNodesOnDrag: z, onNodeDragStart: T, onSelectionDragStart: F, unselectNodesAndEdges: Z } = t();
      g = !0, (!z || !b) && !L && E && (S.get(E)?.selected || Z()), b && z && E && e?.(E);
      const j = Si($.sourceEvent, { transform: P, snapGrid: C, snapToGrid: O, containerBounds: d });
      if (i = j, a = Lp(S, _, j, E), a.size > 0 && (n || T || !E && F)) {
        const [re, te] = Ni({
          nodeId: E,
          dragItems: a,
          nodeLookup: S
        });
        n?.($.sourceEvent, a, re, te), T?.($.sourceEvent, re, te), E || F?.($.sourceEvent, te);
      }
    }
    const J = oh().clickDistance(A).on("start", ($) => {
      const { domNode: S, nodeDragThreshold: L, transform: _, snapGrid: P, snapToGrid: C } = t();
      d = S?.getBoundingClientRect() || null, h = !1, v = !1, L === 0 && W($), i = Si($.sourceEvent, { transform: _, snapGrid: P, snapToGrid: C, containerBounds: d }), u = Yt($.sourceEvent, d);
    }).on("drag", ($) => {
      const { autoPanOnNodeDrag: S, transform: L, snapGrid: _, snapToGrid: P, nodeDragThreshold: C, nodeLookup: O } = t(), z = Si($.sourceEvent, { transform: L, snapGrid: _, snapToGrid: P, containerBounds: d });
      if (($.sourceEvent.type === "touchmove" && $.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      E && !O.has(E)) && (h = !0), !h) {
        if (!l && S && g && (l = !0, B()), !g) {
          const T = z.xSnapped - (i.x ?? 0), F = z.ySnapped - (i.y ?? 0);
          Math.sqrt(T * T + F * F) > C && W($);
        }
        (i.x !== z.xSnapped || i.y !== z.ySnapped) && a && g && (u = Yt($.sourceEvent, d), V(z, $.sourceEvent));
      }
    }).on("end", ($) => {
      if (!(!g || h) && (l = !1, g = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: S, updateNodePositions: L, onNodeDragStop: _, onSelectionDragStop: P } = t();
        if (v && (L(a, !1), v = !1), o || _ || !E && P) {
          const [C, O] = Ni({
            nodeId: E,
            dragItems: a,
            nodeLookup: S,
            dragging: !1
          });
          o?.($.sourceEvent, a, C, O), _?.($.sourceEvent, C, O), E || P?.($.sourceEvent, O);
        }
      }
    }).filter(($) => {
      const S = $.target;
      return !$.button && (!w || !Ja(S, `.${w}`, x)) && (!D || Ja(S, D, x));
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
function Vp(e, t, n) {
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
  const s = Vp(e, n, t + $p);
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
function Rp(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: d, flowId: g, panBy: f, cancelConnection: h, onConnectStart: v, onConnect: y, onConnectEnd: k, isValidConnection: w = ou, onReconnectEnd: D, updateConnection: x, getTransform: b, getFromHandle: E, autoPanSpeed: A, dragThreshold: V = 1 }) {
  const B = Xc(e.target);
  let W = 0, J;
  const { x: $, y: S } = Yt(e), L = B?.elementFromPoint($, S), _ = ru(i, L), P = a?.getBoundingClientRect();
  let C = !1;
  if (!P || !_)
    return;
  const O = nu(o, _, r, l, t);
  if (!O)
    return;
  let z = Yt(e, P), T = !1, F = null, Z = !1, j = null;
  function re() {
    if (!d || !P)
      return;
    const [ne, oe] = qc(z, P, A);
    f({ x: ne, y: oe }), W = requestAnimationFrame(re);
  }
  const te = {
    ...O,
    nodeId: o,
    type: _,
    position: O.position
  }, Q = l.get(o);
  let U = {
    inProgress: !0,
    isValid: null,
    from: Xr(Q, te, we.Left, !0),
    fromHandle: te,
    fromPosition: te.position,
    fromNode: Q,
    to: z,
    toHandle: null,
    toPosition: Ra[te.position],
    toNode: null
  };
  function q() {
    C = !0, x(U), v?.(e, { nodeId: o, handleId: r, handleType: _ });
  }
  V === 0 && q();
  function he(ne) {
    if (!C) {
      const { x: ge, y: de } = Yt(ne), pe = ge - $, K = de - S;
      if (!(pe * pe + K * K > V * V))
        return;
      q();
    }
    if (!E() || !te) {
      fe(ne);
      return;
    }
    const oe = b();
    z = Yt(ne, P), J = Ip(co(z, oe, !1, [1, 1]), n, l, te), T || (re(), T = !0);
    const ae = iu(ne, {
      handle: J,
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
    j = ae.handleDomNode, F = ae.connection, Z = zp(!!J, ae.isValid);
    const ee = {
      // from stays the same
      ...U,
      isValid: Z,
      to: ae.toHandle && Z ? Xo({ x: ae.toHandle.x, y: ae.toHandle.y }, oe) : z,
      toHandle: ae.toHandle,
      toPosition: Z && ae.toHandle ? ae.toHandle.position : Ra[te.position],
      toNode: ae.toHandle ? l.get(ae.toHandle.nodeId) : null
    };
    Z && J && U.toHandle && ee.toHandle && U.toHandle.type === ee.toHandle.type && U.toHandle.nodeId === ee.toHandle.nodeId && U.toHandle.id === ee.toHandle.id && U.to.x === ee.to.x && U.to.y === ee.to.y || (x(ee), U = ee);
  }
  function fe(ne) {
    if (C) {
      (J || j) && F && Z && y?.(F);
      const { inProgress: oe, ...ae } = U, ee = {
        ...ae,
        toPosition: U.toHandle ? U.toPosition : null
      };
      k?.(ne, ee), i && D?.(ne, ee);
    }
    h(), cancelAnimationFrame(W), T = !1, Z = !1, F = null, j = null, B.removeEventListener("mousemove", he), B.removeEventListener("mouseup", fe), B.removeEventListener("touchmove", he), B.removeEventListener("touchend", fe);
  }
  B.addEventListener("mousemove", he), B.addEventListener("mouseup", fe), B.addEventListener("touchmove", he), B.addEventListener("touchend", fe);
}
function iu(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = ou, nodeLookup: d }) {
  const g = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: h, y: v } = Yt(e), y = s.elementFromPoint(h, v), k = y?.classList.contains(`${a}-flow__handle`) ? y : f, w = {
    handleDomNode: k,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (k) {
    const D = ru(void 0, k), x = k.getAttribute("data-nodeid"), b = k.getAttribute("data-handleid"), E = k.classList.contains("connectable"), A = k.classList.contains("connectableend");
    if (!x || !D)
      return w;
    const V = {
      source: g ? x : r,
      sourceHandle: g ? b : o,
      target: g ? r : x,
      targetHandle: g ? o : b
    };
    w.connection = V;
    const W = E && A && (n === mr.Strict ? g && D === "source" || !g && D === "target" : x !== r || b !== o);
    w.isValid = W && u(V), w.toHandle = nu(x, D, b, d, n, !0);
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
      const E = -x.sourceEvent.deltaY * (x.sourceEvent.deltaMode === 1 ? 0.05 : x.sourceEvent.deltaMode ? 1 : 2e-3) * d, A = b[2] * Math.pow(2, E);
      t.scaleTo(A);
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
      ], A = [E[0] - y[0], E[1] - y[1]];
      y = E;
      const V = r() * Math.max(b[2], Math.log(b[2])) * (h ? -1 : 1), B = {
        x: b[0] - A[0] * V,
        y: b[1] - A[1] * V
      }, W = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: B.x,
        y: B.y,
        zoom: b[2]
      }, W, a);
    }, D = zc().on("start", k).on("zoom", g ? w : null).on("zoom.wheel", f ? v : null);
    o.call(D, {});
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
}), Pi = ({ x: e, y: t, zoom: n }) => di.translate(e, t).scale(n), sr = (e, t) => e.target.closest(`.${t}`), su = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), Kp = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, Di = (e, t = 0, n = Kp, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, au = (e) => {
  const t = e.ctrlKey && ir() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function qp({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (d) => {
    if (sr(d, t))
      return !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const g = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const k = Lt(d), w = au(d), D = g * Math.pow(2, w);
      r.scaleTo(n, D, k, d);
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
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && su(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && Fp(e.prevViewport, s.transform))) {
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
  function k(S, L) {
    return h ? new Promise((_) => {
      f?.interpolate(L?.interpolate === "linear" ? Lr : Do).transform(Di(h, L?.duration, L?.ease, () => _(!0)), S);
    }) : Promise.resolve(!1);
  }
  function w({ noWheelClassName: S, noPanClassName: L, onPaneContextMenu: _, userSelectionActive: P, panOnScroll: C, panOnDrag: O, panOnScrollMode: z, panOnScrollSpeed: T, preventScrolling: F, zoomOnPinch: Z, zoomOnScroll: j, zoomOnDoubleClick: re, zoomActivationKeyPressed: te, lib: Q, onTransformChange: X }) {
    P && !d.isZoomingOrPanning && D();
    const q = C && !te && !P ? qp({
      zoomPanValues: d,
      noWheelClassName: S,
      d3Selection: h,
      d3Zoom: f,
      panOnScrollMode: z,
      panOnScrollSpeed: T,
      zoomOnPinch: Z,
      onPanZoomStart: a,
      onPanZoom: s,
      onPanZoomEnd: l
    }) : Zp({
      noWheelClassName: S,
      preventScrolling: F,
      d3ZoomHandler: v
    });
    if (h.on("wheel.zoom", q, { passive: !1 }), !P) {
      const fe = Yp({
        zoomPanValues: d,
        onDraggingChange: u,
        onPanZoomStart: a
      });
      f.on("start", fe);
      const ne = Wp({
        zoomPanValues: d,
        panOnDrag: O,
        onPaneContextMenu: !!_,
        onPanZoom: s,
        onTransformChange: X
      });
      f.on("zoom", ne);
      const oe = Xp({
        zoomPanValues: d,
        panOnDrag: O,
        panOnScroll: C,
        onPaneContextMenu: _,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      f.on("end", oe);
    }
    const he = jp({
      zoomActivationKeyPressed: te,
      panOnDrag: O,
      zoomOnScroll: j,
      panOnScroll: C,
      zoomOnDoubleClick: re,
      zoomOnPinch: Z,
      userSelectionActive: P,
      noPanClassName: L,
      noWheelClassName: S,
      lib: Q
    });
    f.filter(he), re ? h.on("dblclick.zoom", y) : h.on("dblclick.zoom", null);
  }
  function D() {
    f.on("zoom", null);
  }
  async function x(S, L, _) {
    const P = Pi(S), C = f?.constrain()(P, L, _);
    return C && await k(C), new Promise((O) => O(C));
  }
  async function b(S, L) {
    const _ = Pi(S);
    return await k(_, L), new Promise((P) => P(_));
  }
  function E(S) {
    if (h) {
      const L = Pi(S), _ = h.property("__zoom");
      (_.k !== S.zoom || _.x !== S.x || _.y !== S.y) && f?.transform(h, L, null, { sync: !0 });
    }
  }
  function A() {
    const S = h ? Ic(h.node()) : { x: 0, y: 0, k: 1 };
    return { x: S.x, y: S.y, zoom: S.k };
  }
  function V(S, L) {
    return h ? new Promise((_) => {
      f?.interpolate(L?.interpolate === "linear" ? Lr : Do).scaleTo(Di(h, L?.duration, L?.ease, () => _(!0)), S);
    }) : Promise.resolve(!1);
  }
  function B(S, L) {
    return h ? new Promise((_) => {
      f?.interpolate(L?.interpolate === "linear" ? Lr : Do).scaleBy(Di(h, L?.duration, L?.ease, () => _(!0)), S);
    }) : Promise.resolve(!1);
  }
  function W(S) {
    f?.scaleExtent(S);
  }
  function J(S) {
    f?.translateExtent(S);
  }
  function $(S) {
    const L = !cn(S) || S < 0 ? 0 : S;
    f?.clickDistance(L);
  }
  return {
    update: w,
    destroy: D,
    setViewport: b,
    setViewportConstrained: x,
    getViewport: A,
    scaleTo: V,
    scaleBy: B,
    setScaleExtent: W,
    setTranslateExtent: J,
    syncViewport: E,
    setClickDistance: $
  };
}
var el;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(el || (el = {}));
var Up = /* @__PURE__ */ G("<div><!></div>");
function Ln(e, t) {
  ce(t, !0);
  let n = m(t, "id", 7, null), r = m(t, "type", 7, "source"), o = m(t, "position", 23, () => we.Top), i = m(t, "style", 7), s = m(t, "class", 7), a = m(t, "isConnectable", 7), l = m(t, "isConnectableStart", 7, !0), u = m(t, "isConnectableEnd", 7, !0), d = m(t, "isValidConnection", 7), g = m(t, "onconnect", 7), f = m(t, "ondisconnect", 7), h = m(t, "children", 7), v = /* @__PURE__ */ Oe(t, [
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
  const y = Tn("svelteflow__node_id"), k = Tn("svelteflow__node_connectable");
  let w = /* @__PURE__ */ N(() => r() === "target"), D = /* @__PURE__ */ N(() => a() !== void 0 ? a() : k.value), x = Rt(), b = /* @__PURE__ */ N(() => x.ariaLabelConfig), E = null;
  zl(() => {
    if (g() || f()) {
      x.edges;
      let T = x.connectionLookup.get(`${y}-${r()}${n() ? `-${n()}` : ""}`);
      if (E && !Jv(T, E)) {
        const F = T ?? /* @__PURE__ */ new Map();
        Ba(E, F, f()), Ba(F, E, g());
      }
      E = new Map(T);
    }
  });
  let A = /* @__PURE__ */ N(() => {
    if (!x.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: T, toHandle: F, isValid: Z } = x.connection, j = T && T.nodeId === y && T.type === r() && T.id === n(), re = F && F.nodeId === y && F.type === r() && F.id === n(), te = x.connectionMode === mr.Strict ? T?.type !== r() : y !== T?.nodeId || n() !== T?.id;
    return [
      !0,
      j,
      re,
      te,
      re && Z
    ];
  }), V = /* @__PURE__ */ N(() => Qr(c(A), 5)), B = /* @__PURE__ */ N(() => c(V)[0]), W = /* @__PURE__ */ N(() => c(V)[1]), J = /* @__PURE__ */ N(() => c(V)[2]), $ = /* @__PURE__ */ N(() => c(V)[3]), S = /* @__PURE__ */ N(() => c(V)[4]);
  function L(T) {
    const F = x.onbeforeconnect?.(T) ?? T;
    F && (x.addEdge(F), x.onconnect?.(T));
  }
  function _(T) {
    const F = Gc(T);
    (F && T.button === 0 || !F) && Qa.onPointerDown(T, {
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
      onConnect: L,
      onConnectStart: (Z, j) => {
        x.onconnectstart?.(Z, {
          nodeId: j.nodeId,
          handleId: j.handleId,
          handleType: j.handleType
        });
      },
      onConnectEnd: (Z, j) => {
        x.onconnectend?.(Z, j);
      },
      getTransform: () => [x.viewport.x, x.viewport.y, x.viewport.zoom],
      getFromHandle: () => x.connection.fromHandle,
      dragThreshold: x.connectionDragThreshold
    });
  }
  function P(T) {
    if (!y || !x.clickConnectStartHandle && !l())
      return;
    if (!x.clickConnectStartHandle) {
      x.onclickconnectstart?.(T, { nodeId: y, handleId: n(), handleType: r() }), x.clickConnectStartHandle = { nodeId: y, type: r(), id: n() };
      return;
    }
    const F = Xc(T.target), Z = d() ?? x.isValidConnection, { connectionMode: j, clickConnectStartHandle: re, flowId: te, nodeLookup: Q } = x, { connection: X, isValid: U } = Qa.isValid(T, {
      handle: { nodeId: y, id: n(), type: r() },
      connectionMode: j,
      fromNodeId: re.nodeId,
      fromHandleId: re.id ?? null,
      fromType: re.type,
      isValidConnection: Z,
      flowId: te,
      doc: F,
      lib: "svelte",
      nodeLookup: Q
    });
    U && X && L(X);
    const q = structuredClone(Sl(x.connection));
    delete q.inProgress, q.toPosition = q.toHandle ? q.toHandle.position : null, x.onclickconnectend?.(T, q), x.clickConnectStartHandle = null;
  }
  var C = Up(), O = () => {
  };
  Ue(
    C,
    (T) => ({
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
      onkeypress: O,
      style: i(),
      role: "button",
      "aria-label": c(b)["handle.ariaLabel"],
      tabindex: "-1",
      ...v,
      [Sn]: T
    }),
    [
      () => ({
        valid: c(S),
        connectingto: c(J),
        connectingfrom: c(W),
        source: !c(w),
        target: c(w),
        connectablestart: l(),
        connectableend: u(),
        connectable: c(D),
        connectionindicator: c(D) && (!c(B) || c($)) && (c(B) || x.clickConnectStartHandle ? u() : l())
      })
    ]
  );
  var z = R(C);
  return Ye(z, () => h() ?? rt), I(C), M(e, C), ue({
    get id() {
      return n();
    },
    set id(T = null) {
      n(T), p();
    },
    get type() {
      return r();
    },
    set type(T = "source") {
      r(T), p();
    },
    get position() {
      return o();
    },
    set position(T = we.Top) {
      o(T), p();
    },
    get style() {
      return i();
    },
    set style(T) {
      i(T), p();
    },
    get class() {
      return s();
    },
    set class(T) {
      s(T), p();
    },
    get isConnectable() {
      return a();
    },
    set isConnectable(T) {
      a(T), p();
    },
    get isConnectableStart() {
      return l();
    },
    set isConnectableStart(T = !0) {
      l(T), p();
    },
    get isConnectableEnd() {
      return u();
    },
    set isConnectableEnd(T = !0) {
      u(T), p();
    },
    get isValidConnection() {
      return d();
    },
    set isValidConnection(T) {
      d(T), p();
    },
    get onconnect() {
      return g();
    },
    set onconnect(T) {
      g(T), p();
    },
    get ondisconnect() {
      return f();
    },
    set ondisconnect(T) {
      f(T), p();
    },
    get children() {
      return h();
    },
    set children(T) {
      h(T), p();
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
var Jp = /* @__PURE__ */ G("<!> <!>", 1);
function Ys(e, t) {
  ce(t, !0);
  let n = m(t, "data", 7), r = m(t, "targetPosition", 23, () => we.Top), o = m(t, "sourcePosition", 23, () => we.Bottom);
  var i = Jp(), s = le(i);
  Ln(s, {
    type: "target",
    get position() {
      return r();
    }
  });
  var a = H(s), l = H(a);
  return Ln(l, {
    type: "source",
    get position() {
      return o();
    }
  }), be(() => Ve(a, ` ${n()?.label ?? ""} `)), M(e, i), ue({
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
ie(Ys, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var Qp = /* @__PURE__ */ G(" <!>", 1);
function lu(e, t) {
  ce(t, !0);
  let n = m(t, "data", 23, () => ({ label: "Node" })), r = m(t, "sourcePosition", 23, () => we.Bottom);
  ye();
  var o = Qp(), i = le(o), s = H(i);
  return Ln(s, {
    type: "source",
    get position() {
      return r();
    }
  }), be(() => Ve(i, `${n()?.label ?? ""} `)), M(e, o), ue({
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
ie(lu, { data: {}, sourcePosition: {} }, [], [], !0);
var e0 = /* @__PURE__ */ G(" <!>", 1);
function cu(e, t) {
  ce(t, !0);
  let n = m(t, "data", 23, () => ({ label: "Node" })), r = m(t, "targetPosition", 23, () => we.Top);
  ye();
  var o = e0(), i = le(o), s = H(i);
  return Ln(s, {
    type: "target",
    get position() {
      return r();
    }
  }), be(() => Ve(i, `${n()?.label ?? ""} `)), M(e, o), ue({
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
ie(cu, { data: {}, targetPosition: {} }, [], [], !0);
function uu(e, t) {
}
ie(uu, {}, [], [], !0);
function Ti(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function du(e, t) {
  const n = /* @__PURE__ */ N(Rt), r = /* @__PURE__ */ N(() => c(n).domNode);
  let o;
  return c(r) ? Ti(e, c(r), t) : o = Cs(() => {
    Ze(() => {
      Ti(e, c(r), t), o?.();
    });
  }), {
    async update(i) {
      Ti(e, c(r), i);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e), o?.();
    }
  };
}
function fu() {
  let e = /* @__PURE__ */ ke(typeof window > "u");
  if (c(e)) {
    const t = Cs(() => {
      Ze(() => {
        Y(e, !1), t?.();
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
const jo = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var n0 = /* @__PURE__ */ G("<div><!></div>");
const r0 = {
  hash: "svelte-w2n27y",
  code: ".transparent.svelte-w2n27y {background:transparent;}"
};
function gu(e, t) {
  ce(t, !0), Te(e, r0);
  let n = m(t, "x", 7, 0), r = m(t, "y", 7, 0), o = m(t, "width", 7), i = m(t, "height", 7), s = m(t, "selectEdgeOnClick", 7, !1), a = m(t, "transparent", 7, !1), l = m(t, "class", 7), u = m(t, "children", 7), d = /* @__PURE__ */ Oe(t, [
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
  const g = Rt(), f = Tn("svelteflow__edge_id");
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
  var k = R(v);
  return Ye(k, () => u() ?? rt), I(v), st(v, (w, D) => du?.(w, D), () => "edge-labels"), M(e, v), ue({
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
ie(
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
var o0 = /* @__PURE__ */ ve("<path></path>"), i0 = /* @__PURE__ */ ve('<path fill="none"></path><!><!>', 1);
function uo(e, t) {
  ce(t, !0);
  let n = m(t, "id", 7), r = m(t, "path", 7), o = m(t, "label", 7), i = m(t, "labelX", 7), s = m(t, "labelY", 7), a = m(t, "labelStyle", 7), l = m(t, "markerStart", 7), u = m(t, "markerEnd", 7), d = m(t, "style", 7), g = m(t, "interactionWidth", 7, 20), f = m(t, "class", 7), h = /* @__PURE__ */ Oe(t, [
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
  var v = i0(), y = le(v), k = H(y);
  {
    var w = (b) => {
      var E = o0();
      Ue(E, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": g(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...h
      })), M(b, E);
    };
    se(k, (b) => {
      g() > 0 && b(w);
    });
  }
  var D = H(k);
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
        children: (E, A) => {
          ye();
          var V = Ce();
          be(() => Ve(V, o())), M(E, V);
        },
        $$slots: { default: !0 }
      });
    };
    se(D, (b) => {
      o() && b(x);
    });
  }
  return be(() => {
    _e(y, "id", n()), _e(y, "d", r()), wt(y, 0, xn(["svelte-flow__edge-path", f()])), _e(y, "marker-start", l()), _e(y, "marker-end", u()), ft(y, d());
  }), M(e, v), ue({
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
  ce(t, !0);
  let n = m(t, "id", 7), r = m(t, "interactionWidth", 7), o = m(t, "label", 7), i = m(t, "labelStyle", 7), s = m(t, "markerEnd", 7), a = m(t, "markerStart", 7), l = m(t, "pathOptions", 7), u = m(t, "sourcePosition", 7), d = m(t, "sourceX", 7), g = m(t, "sourceY", 7), f = m(t, "style", 7), h = m(t, "targetPosition", 7), v = m(t, "targetX", 7), y = m(t, "targetY", 7), k = /* @__PURE__ */ N(() => Uc({
    sourceX: d(),
    sourceY: g(),
    targetX: v(),
    targetY: y(),
    sourcePosition: u(),
    targetPosition: h(),
    curvature: l()?.curvature
  })), w = /* @__PURE__ */ N(() => Qr(c(k), 3)), D = /* @__PURE__ */ N(() => c(w)[0]), x = /* @__PURE__ */ N(() => c(w)[1]), b = /* @__PURE__ */ N(() => c(w)[2]);
  return uo(e, {
    get id() {
      return n();
    },
    get path() {
      return c(D);
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
  }), ue({
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
function hu(e, t) {
  ce(t, !0);
  let n = m(t, "interactionWidth", 7), r = m(t, "label", 7), o = m(t, "labelStyle", 7), i = m(t, "style", 7), s = m(t, "markerEnd", 7), a = m(t, "markerStart", 7), l = m(t, "sourcePosition", 7), u = m(t, "sourceX", 7), d = m(t, "sourceY", 7), g = m(t, "targetPosition", 7), f = m(t, "targetX", 7), h = m(t, "targetY", 7), v = /* @__PURE__ */ N(() => Fs({
    sourceX: u(),
    sourceY: d(),
    targetX: f(),
    targetY: h(),
    sourcePosition: l(),
    targetPosition: g()
  })), y = /* @__PURE__ */ N(() => Qr(c(v), 3)), k = /* @__PURE__ */ N(() => c(y)[0]), w = /* @__PURE__ */ N(() => c(y)[1]), D = /* @__PURE__ */ N(() => c(y)[2]);
  return uo(e, {
    get path() {
      return c(k);
    },
    get labelX() {
      return c(w);
    },
    get labelY() {
      return c(D);
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
ie(
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
  ce(t, !0);
  let n = m(t, "sourceX", 7), r = m(t, "sourceY", 7), o = m(t, "targetX", 7), i = m(t, "targetY", 7), s = m(t, "label", 7), a = m(t, "labelStyle", 7), l = m(t, "markerStart", 7), u = m(t, "markerEnd", 7), d = m(t, "interactionWidth", 7), g = m(t, "style", 7), f = /* @__PURE__ */ N(() => Qc({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), h = /* @__PURE__ */ N(() => Qr(c(f), 3)), v = /* @__PURE__ */ N(() => c(h)[0]), y = /* @__PURE__ */ N(() => c(h)[1]), k = /* @__PURE__ */ N(() => c(h)[2]);
  return uo(e, {
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
  }), ue({
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
ie(
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
  ce(t, !0);
  let n = m(t, "sourceX", 7), r = m(t, "sourceY", 7), o = m(t, "sourcePosition", 7), i = m(t, "targetX", 7), s = m(t, "targetY", 7), a = m(t, "targetPosition", 7), l = m(t, "label", 7), u = m(t, "labelStyle", 7), d = m(t, "markerStart", 7), g = m(t, "markerEnd", 7), f = m(t, "interactionWidth", 7), h = m(t, "style", 7), v = /* @__PURE__ */ N(() => Fs({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), y = /* @__PURE__ */ N(() => Qr(c(v), 3)), k = /* @__PURE__ */ N(() => c(y)[0]), w = /* @__PURE__ */ N(() => c(y)[1]), D = /* @__PURE__ */ N(() => c(y)[2]);
  return uo(e, {
    get path() {
      return c(k);
    },
    get labelX() {
      return c(w);
    },
    get labelY() {
      return c(D);
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
  }), ue({
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
ie(
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
    wf() && (c(n), ro(() => (t === 0 && (r = nt(() => e(() => Eo(n)))), t += 1, () => {
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
      const { visibleNodes: y, transform: k, width: w, height: D } = e;
      if (hp({
        sourceNode: g,
        targetNode: f,
        width: w,
        height: D,
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
      return c(this.#t);
    }
    set flowId(r) {
      Y(this.#t, r);
    }
    #e = /* @__PURE__ */ ke(null);
    get domNode() {
      return c(this.#e);
    }
    set domNode(r) {
      Y(this.#e, r);
    }
    #n = /* @__PURE__ */ ke(null);
    get panZoom() {
      return c(this.#n);
    }
    set panZoom(r) {
      Y(this.#n, r);
    }
    #r = /* @__PURE__ */ ke(e.width ?? 0);
    get width() {
      return c(this.#r);
    }
    set width(r) {
      Y(this.#r, r);
    }
    #o = /* @__PURE__ */ ke(e.height ?? 0);
    get height() {
      return c(this.#o);
    }
    set height(r) {
      Y(this.#o, r);
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
      Y(this.#i, r);
    }
    #s = /* @__PURE__ */ N(() => this.panZoom !== null);
    get viewportInitialized() {
      return c(this.#s);
    }
    set viewportInitialized(r) {
      Y(this.#s, r);
    }
    #a = /* @__PURE__ */ N(() => (Mp(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
    get _edges() {
      return c(this.#a);
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
    #l = /* @__PURE__ */ N(() => {
      const r = this._prevSelectedNodeIds.size, o = /* @__PURE__ */ new Set(), i = this.nodes.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedNodeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedNodeIds.size > 0) && (this._prevSelectedNodes = i), this._prevSelectedNodeIds = o, this._prevSelectedNodes;
    });
    get selectedNodes() {
      return c(this.#l);
    }
    set selectedNodes(r) {
      Y(this.#l, r);
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
      Y(this.#c, r);
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
      Y(this.#u, r);
    }
    #d = /* @__PURE__ */ N(() => e.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return c(this.#d);
    }
    set nodesDraggable(r) {
      Y(this.#d, r);
    }
    #f = /* @__PURE__ */ N(() => e.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return c(this.#f);
    }
    set nodesConnectable(r) {
      Y(this.#f, r);
    }
    #g = /* @__PURE__ */ N(() => e.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return c(this.#g);
    }
    set elementsSelectable(r) {
      Y(this.#g, r);
    }
    #h = /* @__PURE__ */ N(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return c(this.#h);
    }
    set nodesFocusable(r) {
      Y(this.#h, r);
    }
    #v = /* @__PURE__ */ N(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return c(this.#v);
    }
    set edgesFocusable(r) {
      Y(this.#v, r);
    }
    #p = /* @__PURE__ */ N(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return c(this.#p);
    }
    set disableKeyboardA11y(r) {
      Y(this.#p, r);
    }
    #m = /* @__PURE__ */ N(() => e.props.minZoom ?? 0.5);
    get minZoom() {
      return c(this.#m);
    }
    set minZoom(r) {
      Y(this.#m, r);
    }
    #y = /* @__PURE__ */ N(() => e.props.maxZoom ?? 2);
    get maxZoom() {
      return c(this.#y);
    }
    set maxZoom(r) {
      Y(this.#y, r);
    }
    #w = /* @__PURE__ */ N(() => e.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return c(this.#w);
    }
    set nodeOrigin(r) {
      Y(this.#w, r);
    }
    #_ = /* @__PURE__ */ N(() => e.props.nodeExtent ?? Ji);
    get nodeExtent() {
      return c(this.#_);
    }
    set nodeExtent(r) {
      Y(this.#_, r);
    }
    #x = /* @__PURE__ */ N(() => e.props.translateExtent ?? Ji);
    get translateExtent() {
      return c(this.#x);
    }
    set translateExtent(r) {
      Y(this.#x, r);
    }
    #b = /* @__PURE__ */ N(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return c(this.#b);
    }
    set defaultEdgeOptions(r) {
      Y(this.#b, r);
    }
    #C = /* @__PURE__ */ N(() => e.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return c(this.#C);
    }
    set nodeDragThreshold(r) {
      Y(this.#C, r);
    }
    #k = /* @__PURE__ */ N(() => e.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return c(this.#k);
    }
    set autoPanOnNodeDrag(r) {
      Y(this.#k, r);
    }
    #E = /* @__PURE__ */ N(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return c(this.#E);
    }
    set autoPanOnConnect(r) {
      Y(this.#E, r);
    }
    #S = /* @__PURE__ */ N(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return c(this.#S);
    }
    set autoPanOnNodeFocus(r) {
      Y(this.#S, r);
    }
    #N = /* @__PURE__ */ N(() => e.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return c(this.#N);
    }
    set connectionDragThreshold(r) {
      Y(this.#N, r);
    }
    fitViewQueued = e.props.fitView ?? !1;
    fitViewOptions = e.props.fitViewOptions;
    fitViewResolver = null;
    #P = /* @__PURE__ */ N(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return c(this.#P);
    }
    set snapGrid(r) {
      Y(this.#P, r);
    }
    #D = /* @__PURE__ */ ke(!1);
    get dragging() {
      return c(this.#D);
    }
    set dragging(r) {
      Y(this.#D, r);
    }
    #T = /* @__PURE__ */ ke(null);
    get selectionRect() {
      return c(this.#T);
    }
    set selectionRect(r) {
      Y(this.#T, r);
    }
    #A = /* @__PURE__ */ ke(!1);
    get selectionKeyPressed() {
      return c(this.#A);
    }
    set selectionKeyPressed(r) {
      Y(this.#A, r);
    }
    #M = /* @__PURE__ */ ke(!1);
    get multiselectionKeyPressed() {
      return c(this.#M);
    }
    set multiselectionKeyPressed(r) {
      Y(this.#M, r);
    }
    #O = /* @__PURE__ */ ke(!1);
    get deleteKeyPressed() {
      return c(this.#O);
    }
    set deleteKeyPressed(r) {
      Y(this.#O, r);
    }
    #L = /* @__PURE__ */ ke(!1);
    get panActivationKeyPressed() {
      return c(this.#L);
    }
    set panActivationKeyPressed(r) {
      Y(this.#L, r);
    }
    #H = /* @__PURE__ */ ke(!1);
    get zoomActivationKeyPressed() {
      return c(this.#H);
    }
    set zoomActivationKeyPressed(r) {
      Y(this.#H, r);
    }
    #V = /* @__PURE__ */ ke(null);
    get selectionRectMode() {
      return c(this.#V);
    }
    set selectionRectMode(r) {
      Y(this.#V, r);
    }
    #$ = /* @__PURE__ */ ke("");
    get ariaLiveMessage() {
      return c(this.#$);
    }
    set ariaLiveMessage(r) {
      Y(this.#$, r);
    }
    #I = /* @__PURE__ */ N(() => e.props.selectionMode ?? Yo.Partial);
    get selectionMode() {
      return c(this.#I);
    }
    set selectionMode(r) {
      Y(this.#I, r);
    }
    #z = /* @__PURE__ */ N(() => ({ ...mu, ...e.props.nodeTypes }));
    get nodeTypes() {
      return c(this.#z);
    }
    set nodeTypes(r) {
      Y(this.#z, r);
    }
    #R = /* @__PURE__ */ N(() => ({ ...yu, ...e.props.edgeTypes }));
    get edgeTypes() {
      return c(this.#R);
    }
    set edgeTypes(r) {
      Y(this.#R, r);
    }
    #B = /* @__PURE__ */ N(() => e.props.noPanClass ?? "nopan");
    get noPanClass() {
      return c(this.#B);
    }
    set noPanClass(r) {
      Y(this.#B, r);
    }
    #F = /* @__PURE__ */ N(() => e.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return c(this.#F);
    }
    set noDragClass(r) {
      Y(this.#F, r);
    }
    #K = /* @__PURE__ */ N(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return c(this.#K);
    }
    set noWheelClass(r) {
      Y(this.#K, r);
    }
    #q = /* @__PURE__ */ N(() => up(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return c(this.#q);
    }
    set ariaLabelConfig(r) {
      Y(this.#q, r);
    }
    #Z = /* @__PURE__ */ ke(f0(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return c(this.#Z);
    }
    set _viewport(r) {
      Y(this.#Z, r);
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
      return c(this.#Y);
    }
    set _connection(r) {
      Y(this.#Y, r);
    }
    #W = /* @__PURE__ */ N(() => this._connection.inProgress ? {
      ...this._connection,
      to: co(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return c(this.#W);
    }
    set connection(r) {
      Y(this.#W, r);
    }
    #X = /* @__PURE__ */ N(() => e.props.connectionMode ?? mr.Strict);
    get connectionMode() {
      return c(this.#X);
    }
    set connectionMode(r) {
      Y(this.#X, r);
    }
    #j = /* @__PURE__ */ N(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return c(this.#j);
    }
    set connectionRadius(r) {
      Y(this.#j, r);
    }
    #G = /* @__PURE__ */ N(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return c(this.#G);
    }
    set isValidConnection(r) {
      Y(this.#G, r);
    }
    #U = /* @__PURE__ */ N(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return c(this.#U);
    }
    set selectNodesOnDrag(r) {
      Y(this.#U, r);
    }
    #J = /* @__PURE__ */ N(() => e.props.defaultMarkerColor ?? "#b1b1b7");
    get defaultMarkerColor() {
      return c(this.#J);
    }
    set defaultMarkerColor(r) {
      Y(this.#J, r);
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
      Y(this.#Q, r);
    }
    #ee = /* @__PURE__ */ N(() => e.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return c(this.#ee);
    }
    set onlyRenderVisibleElements(r) {
      Y(this.#ee, r);
    }
    #te = /* @__PURE__ */ N(() => e.props.onflowerror ?? sp);
    get onerror() {
      return c(this.#te);
    }
    set onerror(r) {
      Y(this.#te, r);
    }
    #ne = /* @__PURE__ */ N(() => e.props.ondelete);
    get ondelete() {
      return c(this.#ne);
    }
    set ondelete(r) {
      Y(this.#ne, r);
    }
    #re = /* @__PURE__ */ N(() => e.props.onbeforedelete);
    get onbeforedelete() {
      return c(this.#re);
    }
    set onbeforedelete(r) {
      Y(this.#re, r);
    }
    #oe = /* @__PURE__ */ N(() => e.props.onbeforeconnect);
    get onbeforeconnect() {
      return c(this.#oe);
    }
    set onbeforeconnect(r) {
      Y(this.#oe, r);
    }
    #ie = /* @__PURE__ */ N(() => e.props.onconnect);
    get onconnect() {
      return c(this.#ie);
    }
    set onconnect(r) {
      Y(this.#ie, r);
    }
    #se = /* @__PURE__ */ N(() => e.props.onconnectstart);
    get onconnectstart() {
      return c(this.#se);
    }
    set onconnectstart(r) {
      Y(this.#se, r);
    }
    #ae = /* @__PURE__ */ N(() => e.props.onconnectend);
    get onconnectend() {
      return c(this.#ae);
    }
    set onconnectend(r) {
      Y(this.#ae, r);
    }
    #le = /* @__PURE__ */ N(() => e.props.onbeforereconnect);
    get onbeforereconnect() {
      return c(this.#le);
    }
    set onbeforereconnect(r) {
      Y(this.#le, r);
    }
    #ce = /* @__PURE__ */ N(() => e.props.onreconnect);
    get onreconnect() {
      return c(this.#ce);
    }
    set onreconnect(r) {
      Y(this.#ce, r);
    }
    #ue = /* @__PURE__ */ N(() => e.props.onreconnectstart);
    get onreconnectstart() {
      return c(this.#ue);
    }
    set onreconnectstart(r) {
      Y(this.#ue, r);
    }
    #de = /* @__PURE__ */ N(() => e.props.onreconnectend);
    get onreconnectend() {
      return c(this.#de);
    }
    set onreconnectend(r) {
      Y(this.#de, r);
    }
    #fe = /* @__PURE__ */ N(() => e.props.clickConnect ?? !0);
    get clickConnect() {
      return c(this.#fe);
    }
    set clickConnect(r) {
      Y(this.#fe, r);
    }
    #ge = /* @__PURE__ */ N(() => e.props.onclickconnectstart);
    get onclickconnectstart() {
      return c(this.#ge);
    }
    set onclickconnectstart(r) {
      Y(this.#ge, r);
    }
    #he = /* @__PURE__ */ N(() => e.props.onclickconnectend);
    get onclickconnectend() {
      return c(this.#he);
    }
    set onclickconnectend(r) {
      Y(this.#he, r);
    }
    #ve = /* @__PURE__ */ ke(null);
    get clickConnectStartHandle() {
      return c(this.#ve);
    }
    set clickConnectStartHandle(r) {
      Y(this.#ve, r);
    }
    #pe = /* @__PURE__ */ N(() => e.props.onselectiondrag);
    get onselectiondrag() {
      return c(this.#pe);
    }
    set onselectiondrag(r) {
      Y(this.#pe, r);
    }
    #me = /* @__PURE__ */ N(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return c(this.#me);
    }
    set onselectiondragstart(r) {
      Y(this.#me, r);
    }
    #ye = /* @__PURE__ */ N(() => e.props.onselectiondragstop);
    get onselectiondragstop() {
      return c(this.#ye);
    }
    set onselectiondragstop(r) {
      Y(this.#ye, r);
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
      Y(this.#we, r);
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
  const e = Tn(Go);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
const Go = Symbol();
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
  const i = (S, L = !1) => {
    t.nodes = t.nodes.map((_) => {
      const P = S.get(_.id);
      return P ? { ..._, position: P.position, dragging: L } : _;
    });
  };
  function s(S) {
    const { changes: L, updatedInternals: _ } = Tp(S, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin);
    if (!_)
      return;
    Ep(t.nodeLookup, t.parentLookup, {
      nodeOrigin: t.nodeOrigin,
      nodeExtent: t.nodeExtent
    }), t.fitViewQueued && t.resolveFitView();
    const P = /* @__PURE__ */ new Map();
    for (const C of L) {
      const O = t.nodeLookup.get(C.id)?.internals.userNode;
      if (!O)
        continue;
      const z = { ...O };
      switch (C.type) {
        case "dimensions": {
          const T = { ...z.measured, ...C.dimensions };
          C.setAttributes && (z.width = C.dimensions?.width ?? z.width, z.height = C.dimensions?.height ?? z.height), z.measured = T;
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
  function a(S) {
    const L = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = S, t.fitViewResolver = L, t.nodes = [...t.nodes], L.promise;
  }
  async function l(S, L, _) {
    const P = typeof _?.zoom < "u" ? _.zoom : t.maxZoom, C = t.panZoom;
    return C ? (await C.setViewport({
      x: t.width / 2 - S * P,
      y: t.height / 2 - L * P,
      zoom: P
    }, { duration: _?.duration, ease: _?.ease, interpolate: _?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function u(S, L) {
    const _ = t.panZoom;
    return _ ? _.scaleBy(S, L) : Promise.resolve(!1);
  }
  function d(S) {
    return u(1.2, S);
  }
  function g(S) {
    return u(1 / 1.2, S);
  }
  function f(S) {
    const L = t.panZoom;
    L && (L.setScaleExtent([S, t.maxZoom]), t.minZoom = S);
  }
  function h(S) {
    const L = t.panZoom;
    L && (L.setScaleExtent([t.minZoom, S]), t.maxZoom = S);
  }
  function v(S) {
    const L = t.panZoom;
    L && (L.setTranslateExtent(S), t.translateExtent = S);
  }
  function y(S) {
    t.panZoom?.setClickDistance(S);
  }
  function k(S, L = null) {
    let _ = !1;
    const P = S.map((C) => (L ? L.has(C.id) : !0) && C.selected ? (_ = !0, { ...C, selected: !1 }) : C);
    return [_, P];
  }
  function w(S) {
    const L = S?.nodes ? new Set(S.nodes.map((T) => T.id)) : null, [_, P] = k(t.nodes, L);
    _ && (t.nodes = P);
    const C = S?.edges ? new Set(S.edges.map((T) => T.id)) : null, [O, z] = k(t.edges, C);
    O && (t.edges = z);
  }
  function D(S) {
    const L = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((_) => {
      const P = S.includes(_.id), C = L && _.selected || P;
      if (_.selected !== C) {
        const O = t.nodeLookup.get(_.id);
        return O && (O.selected = C), _.selected = C, { ..._ };
      }
      return _;
    }), L || w({ nodes: [] });
  }
  function x(S) {
    const L = t.multiselectionKeyPressed;
    t.edges = t.edges.map((_) => {
      const P = S.includes(_.id), C = L && _.selected || P;
      return _.selected !== C ? { ..._, selected: C } : _;
    }), L || w({ edges: [] });
  }
  function b(S, L, _) {
    const P = t.nodeLookup.get(S);
    if (!P) {
      console.warn("012", Zr.error012(S));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, P.selected ? (L || P.selected && t.multiselectionKeyPressed) && (w({ nodes: [P], edges: [] }), requestAnimationFrame(() => _?.blur())) : D([S]);
  }
  function E(S) {
    const L = t.edgeLookup.get(S);
    if (!L) {
      console.warn("012", Zr.error012(S));
      return;
    }
    (L.selectable || t.elementsSelectable && typeof L.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, L.selected ? L.selected && t.multiselectionKeyPressed && w({ nodes: [], edges: [L] }) : x([S]));
  }
  function A(S, L) {
    const { nodeExtent: _, snapGrid: P, nodeOrigin: C, nodeLookup: O, nodesDraggable: z, onerror: T } = t, F = /* @__PURE__ */ new Map(), Z = P?.[0] ?? 5, j = P?.[1] ?? 5, re = S.x * Z * L, te = S.y * j * L;
    for (const Q of O.values()) {
      if (!(Q.selected && (Q.draggable || z && typeof Q.draggable > "u")))
        continue;
      let U = {
        x: Q.internals.positionAbsolute.x + re,
        y: Q.internals.positionAbsolute.y + te
      };
      P && (U = hi(U, P));
      const { position: q, positionAbsolute: he } = Fc({
        nodeId: Q.id,
        nextPosition: U,
        nodeLookup: O,
        nodeExtent: _,
        nodeOrigin: C,
        onError: T
      });
      Q.position = q, Q.internals.positionAbsolute = he, F.set(Q.id, Q);
    }
    i(F);
  }
  function V(S) {
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
  function W() {
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
    addSelectedNodes: D,
    addSelectedEdges: x,
    handleNodeSelection: b,
    handleEdgeSelection: E,
    moveSelectedNodes: A,
    panBy: V,
    updateConnection: B,
    cancelConnection: W,
    reset: J
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
var v0 = /* @__PURE__ */ G('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function _u(e, t) {
  ce(t, !0);
  let n = m(t, "store", 15), r = m(t, "panOnScrollMode", 23, () => Gt.Free), o = m(t, "preventScrolling", 7, !0), i = m(t, "zoomOnScroll", 7, !0), s = m(t, "zoomOnDoubleClick", 7, !0), a = m(t, "zoomOnPinch", 7, !0), l = m(t, "panOnDrag", 7, !0), u = m(t, "panOnScroll", 7, !1), d = m(t, "paneClickDistance", 7, 1), g = m(t, "onmovestart", 7), f = m(t, "onmove", 7), h = m(t, "onmoveend", 7), v = m(t, "oninit", 7), y = m(t, "children", 7), k = /* @__PURE__ */ N(() => n().panActivationKeyPressed || l()), w = /* @__PURE__ */ N(() => n().panActivationKeyPressed || u());
  const { viewport: D } = n();
  let x = !1;
  Ze(() => {
    !x && n().viewportInitialized && (v()?.(), x = !0);
  });
  var b = v0(), E = R(b);
  return Ye(E, y), I(b), st(b, (A, V) => h0?.(A, V), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: D,
    onDraggingChange: (A) => {
      n(n().dragging = A, !0);
    },
    setPanZoomInstance: (A) => {
      n(n().panZoom = A, !0);
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
    onTransformChange: (A) => {
      n(n().viewport = { x: A[0], y: A[1], zoom: A[2] }, !0);
    }
  })), M(e, b), ue({
    get store() {
      return n();
    },
    set store(A) {
      n(A), p();
    },
    get panOnScrollMode() {
      return r();
    },
    set panOnScrollMode(A = Gt.Free) {
      r(A), p();
    },
    get preventScrolling() {
      return o();
    },
    set preventScrolling(A = !0) {
      o(A), p();
    },
    get zoomOnScroll() {
      return i();
    },
    set zoomOnScroll(A = !0) {
      i(A), p();
    },
    get zoomOnDoubleClick() {
      return s();
    },
    set zoomOnDoubleClick(A = !0) {
      s(A), p();
    },
    get zoomOnPinch() {
      return a();
    },
    set zoomOnPinch(A = !0) {
      a(A), p();
    },
    get panOnDrag() {
      return l();
    },
    set panOnDrag(A = !0) {
      l(A), p();
    },
    get panOnScroll() {
      return u();
    },
    set panOnScroll(A = !1) {
      u(A), p();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(A = 1) {
      d(A), p();
    },
    get onmovestart() {
      return g();
    },
    set onmovestart(A) {
      g(A), p();
    },
    get onmove() {
      return f();
    },
    set onmove(A) {
      f(A), p();
    },
    get onmoveend() {
      return h();
    },
    set onmoveend(A) {
      h(A), p();
    },
    get oninit() {
      return v();
    },
    set oninit(A) {
      v(A), p();
    },
    get children() {
      return y();
    },
    set children(A) {
      y(A), p();
    }
  });
}
ie(
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
var p0 = /* @__PURE__ */ G("<div><!></div>");
function xu(e, t) {
  ce(t, !0);
  let n = m(t, "store", 15), r = m(t, "panOnDrag", 7, !0), o = m(t, "selectionOnDrag", 7), i = m(t, "onpaneclick", 7), s = m(t, "onpanecontextmenu", 7), a = m(t, "onselectionstart", 7), l = m(t, "onselectionend", 7), u = m(t, "children", 7), d, g = null, f = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ N(() => n().panActivationKeyPressed || r()), y = /* @__PURE__ */ N(() => n().selectionKeyPressed || n().selectionRect || o() && c(v) !== !0), k = /* @__PURE__ */ N(() => n().elementsSelectable && (c(y) || n().selectionRectMode === "user")), w = !1;
  function D(S) {
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
    const { x: L, y: _ } = Yt(S, g);
    n().unselectNodesAndEdges(), n(n().selectionRect = { width: 0, height: 0, startX: L, startY: _, x: L, y: _ }, !0), a()?.(S);
  }
  function b(S) {
    if (!c(y) || !g || !n().selectionRect)
      return;
    w = !0;
    const L = Yt(S, g), { startX: _ = 0, startY: P = 0 } = n().selectionRect, C = {
      ...n().selectionRect,
      x: L.x < _ ? L.x : _,
      y: L.y < P ? L.y : P,
      width: Math.abs(L.x - _),
      height: Math.abs(L.y - P)
    }, O = f, z = h;
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
    const T = n().defaultEdgeOptions.selectable ?? !0;
    h = /* @__PURE__ */ new Set();
    for (const F of f) {
      const Z = n().connectionLookup.get(F);
      if (Z)
        for (const { edgeId: j } of Z.values()) {
          const re = n().edgeLookup.get(j);
          re && (re.selectable ?? T) && h.add(j);
        }
    }
    il(O, f) || n(n().nodes = n().nodes.map(ol(f)), !0), il(z, h) || n(n().edges = n().edges.map(ol(h)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = C, !0);
  }
  function E(S) {
    S.button === 0 && (S.target?.releasePointerCapture?.(S.pointerId), !c(y) && n().selectionRectMode === "user" && S.target === d && D?.(S), n(n().selectionRect = null, !0), f.size > 0 && n(n().selectionRectMode = "nodes", !0), n().selectionKeyPressed && (w = !1), l()?.(S));
  }
  const A = (S) => {
    if (Array.isArray(c(v)) && c(v).includes(2)) {
      S.preventDefault();
      return;
    }
    s()?.({ event: S });
  };
  var V = p0();
  let B;
  var W = /* @__PURE__ */ N(() => c(k) ? void 0 : rl(D, d));
  V.__click = function(...S) {
    c(W)?.apply(this, S);
  }, V.__pointerdown = function(...S) {
    (c(k) ? x : void 0)?.apply(this, S);
  }, V.__pointermove = function(...S) {
    (c(k) ? b : void 0)?.apply(this, S);
  }, V.__pointerup = function(...S) {
    (c(k) ? E : void 0)?.apply(this, S);
  };
  var J = /* @__PURE__ */ N(() => rl(A, d));
  V.__contextmenu = function(...S) {
    c(J)?.apply(this, S);
  };
  var $ = R(V);
  return Ye($, u), I(V), Nt(V, (S) => d = S, () => d), be((S) => B = wt(V, 1, "svelte-flow__pane svelte-flow__container", null, B, S), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: c(y)
    })
  ]), M(e, V), ue({
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
ie(
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
var m0 = /* @__PURE__ */ G('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function bu(e, t) {
  ce(t, !0);
  let n = m(t, "store", 15), r = m(t, "children", 7);
  var o = m0();
  let i;
  var s = R(o);
  return Ye(s, r), I(o), be((a) => i = ft(o, "", i, a), [
    () => ({
      transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
    })
  ]), M(e, o), ue({
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
ie(bu, { store: {}, children: {} }, [], [], !0);
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
var y0 = /* @__PURE__ */ G('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-62ze0y"> </div>'), w0 = /* @__PURE__ */ G('<div class="a11y-hidden svelte-62ze0y"> </div> <div class="a11y-hidden svelte-62ze0y"> </div> <!>', 1);
const _0 = {
  hash: "svelte-62ze0y",
  code: ".a11y-hidden.svelte-62ze0y {display:none;}.a11y-live-msg.svelte-62ze0y {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function ku(e, t) {
  ce(t, !0), Te(e, _0);
  let n = m(t, "store", 7);
  var r = w0(), o = le(r), i = R(o, !0);
  I(o);
  var s = H(o, 2), a = R(s, !0);
  I(s);
  var l = H(s, 2);
  {
    var u = (d) => {
      var g = y0(), f = R(g, !0);
      I(g), be(() => {
        _e(g, "id", `${x0}-${n().flowId}`), Ve(f, n().ariaLiveMessage);
      }), M(d, g);
    };
    se(l, (d) => {
      n().disableKeyboardA11y || d(u);
    });
  }
  return be(() => {
    _e(o, "id", `${Eu}-${n().flowId}`), Ve(i, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), _e(s, "id", `${Su}-${n().flowId}`), Ve(a, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), M(e, r), ue({
    get store() {
      return n();
    },
    set store(d) {
      n(d), p();
    }
  });
}
ie(ku, { store: {} }, [], [], !0);
const Eu = "svelte-flow__node-desc", Su = "svelte-flow__edge-desc", x0 = "svelte-flow__aria-live";
var b0 = /* @__PURE__ */ G("<div><!></div>");
function Nu(e, t) {
  ce(t, !0);
  let n = m(t, "store", 15), r = m(t, "node", 7), o = m(t, "resizeObserver", 7), i = m(t, "nodeClickDistance", 7), s = m(t, "onnodeclick", 7), a = m(t, "onnodedrag", 7), l = m(t, "onnodedragstart", 7), u = m(t, "onnodedragstop", 7), d = m(t, "onnodepointerenter", 7), g = m(t, "onnodepointerleave", 7), f = m(t, "onnodepointermove", 7), h = m(t, "onnodecontextmenu", 7), v = /* @__PURE__ */ N(() => ct(r().data, () => ({}), !0)), y = /* @__PURE__ */ N(() => ct(r().selected, !1)), k = /* @__PURE__ */ N(() => r().draggable), w = /* @__PURE__ */ N(() => r().selectable), D = /* @__PURE__ */ N(() => ct(r().deletable, !0)), x = /* @__PURE__ */ N(() => r().connectable), b = /* @__PURE__ */ N(() => r().focusable), E = /* @__PURE__ */ N(() => ct(r().hidden, !1)), A = /* @__PURE__ */ N(() => ct(r().dragging, !1)), V = /* @__PURE__ */ N(() => ct(r().style, "")), B = /* @__PURE__ */ N(() => r().class), W = /* @__PURE__ */ N(() => ct(r().type, "default")), J = /* @__PURE__ */ N(() => r().parentId), $ = /* @__PURE__ */ N(() => r().sourcePosition), S = /* @__PURE__ */ N(() => r().targetPosition), L = /* @__PURE__ */ N(() => ct(r().measured, () => ({ width: 0, height: 0 }), !0).width), _ = /* @__PURE__ */ N(() => ct(r().measured, () => ({ width: 0, height: 0 }), !0).height), P = /* @__PURE__ */ N(() => r().initialWidth), C = /* @__PURE__ */ N(() => r().initialHeight), O = /* @__PURE__ */ N(() => r().width), z = /* @__PURE__ */ N(() => r().height), T = /* @__PURE__ */ N(() => r().dragHandle), F = /* @__PURE__ */ N(() => ct(r().internals.z, 0)), Z = /* @__PURE__ */ N(() => r().internals.positionAbsolute.x), j = /* @__PURE__ */ N(() => r().internals.positionAbsolute.y), re = /* @__PURE__ */ N(() => r().internals.userNode), { id: te } = r(), Q = /* @__PURE__ */ N(() => c(k) ?? n().nodesDraggable), X = /* @__PURE__ */ N(() => c(w) ?? n().elementsSelectable), U = /* @__PURE__ */ N(() => c(x) ?? n().nodesConnectable), q = /* @__PURE__ */ N(() => Yc(r())), he = /* @__PURE__ */ N(() => !!r().internals.handleBounds), fe = /* @__PURE__ */ N(() => c(q) && c(he)), ne = /* @__PURE__ */ N(() => c(b) ?? n().nodesFocusable);
  function oe(me) {
    return n().parentLookup.has(me);
  }
  let ae = /* @__PURE__ */ N(() => oe(te)), ee = /* @__PURE__ */ ke(null), ge = null, de = c(W), pe = c($), K = c(S), Ie = /* @__PURE__ */ N(() => n().nodeTypes[c(W)] ?? Ys), Ae = /* @__PURE__ */ N(() => n().ariaLabelConfig);
  fr("svelteflow__node_connectable", {
    get value() {
      return c(U);
    }
  }), fr("svelteflow__node_id", te);
  let Ke = /* @__PURE__ */ N(() => {
    const me = c(L) === void 0 ? c(O) ?? c(P) : c(O), Re = c(_) === void 0 ? c(z) ?? c(C) : c(z);
    if (!(me === void 0 && Re === void 0 && c(V) === void 0))
      return `${c(V)};${me ? `width:${en(me)};` : ""}${Re ? `height:${en(Re)};` : ""}`;
  });
  Ze(() => {
    (c(W) !== de || c($) !== pe || c(S) !== K) && c(ee) !== null && requestAnimationFrame(() => {
      c(ee) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[te, { id: te, nodeElement: c(ee), force: !0 }]]));
    }), de = c(W), pe = c($), K = c(S);
  }), Ze(() => {
    o() && (!c(fe) || c(ee) !== ge) && (ge && o().unobserve(ge), c(ee) && o().observe(c(ee)), ge = c(ee));
  }), ii(() => {
    ge && o()?.unobserve(ge);
  });
  function He(me) {
    c(X) && (!n().selectNodesOnDrag || !c(Q) || n().nodeDragThreshold > 0) && n().handleNodeSelection(te), s()?.({ node: c(re), event: me });
  }
  function gt(me) {
    if (!(jc(me) || n().disableKeyboardA11y))
      if (Rc.includes(me.key) && c(X)) {
        const Re = me.key === "Escape";
        n().handleNodeSelection(te, Re, c(ee));
      } else c(Q) && r().selected && Object.prototype.hasOwnProperty.call(jo, me.key) && (me.preventDefault(), n(
        n().ariaLiveMessage = c(Ae)["node.a11yDescription.ariaLiveMessage"]({
          direction: me.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(jo[me.key], me.shiftKey ? 4 : 1));
  }
  const qe = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !c(ee)?.matches(":focus-visible"))
      return;
    const { width: me, height: Re, viewport: _t } = n();
    Rs(/* @__PURE__ */ new Map([[te, r()]]), { x: 0, y: 0, width: me, height: Re }, [_t.x, _t.y, _t.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: _t.zoom });
  };
  var et = De(), Je = le(et);
  {
    var Qe = (me) => {
      var Re = b0();
      Ue(
        Re,
        (Xe, Dt) => ({
          "data-id": te,
          class: [
            "svelte-flow__node",
            `svelte-flow__node-${c(W)}`,
            c(B)
          ],
          style: c(Ke),
          onclick: He,
          onpointerenter: d() ? (tt) => d()({ node: c(re), event: tt }) : void 0,
          onpointerleave: g() ? (tt) => g()({ node: c(re), event: tt }) : void 0,
          onpointermove: f() ? (tt) => f()({ node: c(re), event: tt }) : void 0,
          oncontextmenu: h() ? (tt) => h()({ node: c(re), event: tt }) : void 0,
          onkeydown: c(ne) ? gt : void 0,
          onfocus: c(ne) ? qe : void 0,
          tabIndex: c(ne) ? 0 : void 0,
          role: r().ariaRole ?? (c(ne) ? "group" : void 0),
          "aria-roledescription": "node",
          "aria-describedby": n().disableKeyboardA11y ? void 0 : `${Eu}-${n().flowId}`,
          ...r().domAttributes,
          [Sn]: Xe,
          [Zt]: Dt
        }),
        [
          () => ({
            dragging: c(A),
            selected: c(y),
            draggable: c(Q),
            connectable: c(U),
            selectable: c(X),
            nopan: c(Q),
            parent: c(ae)
          }),
          () => ({
            "z-index": c(F),
            transform: `translate(${c(Z) ?? ""}px, ${c(j) ?? ""}px)`,
            visibility: c(q) ? "visible" : "hidden"
          })
        ]
      );
      var _t = R(Re);
      Ts(_t, () => c(Ie), (Xe, Dt) => {
        Dt(Xe, {
          get data() {
            return c(v);
          },
          get id() {
            return te;
          },
          get selected() {
            return c(y);
          },
          get selectable() {
            return c(X);
          },
          get deletable() {
            return c(D);
          },
          get sourcePosition() {
            return c($);
          },
          get targetPosition() {
            return c(S);
          },
          get zIndex() {
            return c(F);
          },
          get dragging() {
            return c(A);
          },
          get draggable() {
            return c(Q);
          },
          get dragHandle() {
            return c(T);
          },
          get parentId() {
            return c(J);
          },
          get type() {
            return c(W);
          },
          get isConnectable() {
            return c(U);
          },
          get positionAbsoluteX() {
            return c(Z);
          },
          get positionAbsoluteY() {
            return c(j);
          },
          get width() {
            return c(O);
          },
          get height() {
            return c(z);
          }
        });
      }), I(Re), st(Re, (Xe, Dt) => Cu?.(Xe, Dt), () => ({
        nodeId: te,
        isSelectable: c(X),
        disabled: !c(Q),
        handleSelector: c(T),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (Xe, Dt, tt, Ft) => {
          a()?.({ event: Xe, targetNode: tt, nodes: Ft });
        },
        onDragStart: (Xe, Dt, tt, Ft) => {
          l()?.({ event: Xe, targetNode: tt, nodes: Ft });
        },
        onDragStop: (Xe, Dt, tt, Ft) => {
          u()?.({ event: Xe, targetNode: tt, nodes: Ft });
        },
        store: n()
      })), Nt(Re, (Xe) => Y(ee, Xe), () => c(ee)), M(me, Re);
    };
    se(Je, (me) => {
      c(E) || me(Qe);
    });
  }
  return M(e, et), ue({
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
      return u();
    },
    set onnodedragstop(me) {
      u(me), p();
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
var C0 = /* @__PURE__ */ G('<div class="svelte-flow__nodes"></div>');
function Pu(e, t) {
  ce(t, !0);
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
  }), I(h), M(e, h), ue({
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
ie(
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
var k0 = /* @__PURE__ */ ve('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function Du(e, t) {
  ce(t, !0);
  const n = m(t, "edge", 7), r = m(t, "store", 15), o = m(t, "onedgeclick", 7), i = m(t, "onedgecontextmenu", 7), s = m(t, "onedgepointerenter", 7), a = m(t, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ N(() => n().source), u = /* @__PURE__ */ N(() => n().target), d = /* @__PURE__ */ N(() => n().sourceX), g = /* @__PURE__ */ N(() => n().sourceY), f = /* @__PURE__ */ N(() => n().targetX), h = /* @__PURE__ */ N(() => n().targetY), v = /* @__PURE__ */ N(() => n().sourcePosition), y = /* @__PURE__ */ N(() => n().targetPosition), k = /* @__PURE__ */ N(() => ct(n().animated, !1)), w = /* @__PURE__ */ N(() => ct(n().selected, !1)), D = /* @__PURE__ */ N(() => n().label), x = /* @__PURE__ */ N(() => n().labelStyle), b = /* @__PURE__ */ N(() => ct(n().data, () => ({}), !0)), E = /* @__PURE__ */ N(() => n().style), A = /* @__PURE__ */ N(() => n().interactionWidth), V = /* @__PURE__ */ N(() => ct(n().type, "default")), B = /* @__PURE__ */ N(() => n().sourceHandle), W = /* @__PURE__ */ N(() => n().targetHandle), J = /* @__PURE__ */ N(() => n().markerStart), $ = /* @__PURE__ */ N(() => n().markerEnd), S = /* @__PURE__ */ N(() => n().selectable), L = /* @__PURE__ */ N(() => n().focusable), _ = /* @__PURE__ */ N(() => ct(n().deletable, !0)), P = /* @__PURE__ */ N(() => n().hidden), C = /* @__PURE__ */ N(() => n().zIndex), O = /* @__PURE__ */ N(() => n().class), z = /* @__PURE__ */ N(() => n().ariaLabel), T = null;
  const { id: F } = n();
  fr("svelteflow__edge_id", F);
  let Z = /* @__PURE__ */ N(() => c(S) ?? r().elementsSelectable), j = /* @__PURE__ */ N(() => c(L) ?? r().edgesFocusable), re = /* @__PURE__ */ N(() => r().edgeTypes[c(V)] ?? Ws), te = /* @__PURE__ */ N(() => c(J) ? `url('#${ts(c(J), r().flowId)}')` : void 0), Q = /* @__PURE__ */ N(() => c($) ? `url('#${ts(c($), r().flowId)}')` : void 0);
  function X(oe) {
    const ae = r().edgeLookup.get(F);
    ae && (c(Z) && r().handleEdgeSelection(F), o()?.({ event: oe, edge: ae }));
  }
  function U(oe, ae) {
    const ee = r().edgeLookup.get(F);
    ee && ae({ event: oe, edge: ee });
  }
  function q(oe) {
    if (!r().disableKeyboardA11y && Rc.includes(oe.key) && c(Z)) {
      const { unselectNodesAndEdges: ae, addSelectedEdges: ee } = r();
      oe.key === "Escape" ? (T?.blur(), ae({ edges: [n()] })) : ee([F]);
    }
  }
  var he = De(), fe = le(he);
  {
    var ne = (oe) => {
      var ae = k0();
      let ee;
      var ge = R(ae);
      Ue(
        ge,
        (pe) => ({
          class: ["svelte-flow__edge", c(O)],
          "data-id": F,
          onclick: X,
          oncontextmenu: i() ? (K) => {
            U(K, i());
          } : void 0,
          onpointerenter: s() ? (K) => {
            U(K, s());
          } : void 0,
          onpointerleave: a() ? (K) => {
            U(K, a());
          } : void 0,
          "aria-label": c(z) === null ? void 0 : c(z) ? c(z) : `Edge from ${c(l)} to ${c(u)}`,
          "aria-describedby": c(j) ? `${Su}-${r().flowId}` : void 0,
          role: n().ariaRole ?? (c(j) ? "group" : "img"),
          "aria-roledescription": "edge",
          onkeydown: c(j) ? q : void 0,
          tabindex: c(j) ? 0 : void 0,
          ...n().domAttributes,
          [Sn]: pe
        }),
        [
          () => ({
            animated: c(k),
            selected: c(w),
            selectable: c(Z)
          })
        ]
      );
      var de = R(ge);
      Ts(de, () => c(re), (pe, K) => {
        K(pe, {
          get id() {
            return F;
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
            return c(D);
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
            return c(A);
          },
          get selectable() {
            return c(Z);
          },
          get deletable() {
            return c(_);
          },
          get type() {
            return c(V);
          },
          get sourceHandleId() {
            return c(B);
          },
          get targetHandleId() {
            return c(W);
          },
          get markerStart() {
            return c(te);
          },
          get markerEnd() {
            return c(Q);
          }
        });
      }), I(ge), Nt(ge, (pe) => T = pe, () => T), I(ae), be((pe) => ee = ft(ae, "", ee, pe), [() => ({ "z-index": c(C) })]), M(oe, ae);
    };
    se(fe, (oe) => {
      c(P) || oe(ne);
    });
  }
  return M(e, he), ue({
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
function Tu(e, t) {
  ce(t, !1);
  const n = Rt();
  cc();
  var r = E0();
  lt(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    Au(o, $e(() => c(i)));
  }), I(r), M(e, r), ue();
}
ie(Tu, {}, [], [], !0);
var S0 = /* @__PURE__ */ ve('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), N0 = /* @__PURE__ */ ve('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), P0 = /* @__PURE__ */ ve('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Au(e, t) {
  ce(t, !0);
  let n = m(t, "id", 7), r = m(t, "type", 7), o = m(t, "width", 7, 12.5), i = m(t, "height", 7, 12.5), s = m(t, "markerUnits", 7, "strokeWidth"), a = m(t, "orient", 7, "auto-start-reverse"), l = m(t, "color", 7), u = m(t, "strokeWidth", 7);
  var d = P0(), g = R(d);
  {
    var f = (v) => {
      var y = S0();
      be(() => {
        _e(y, "stroke", l()), _e(y, "stroke-width", u());
      }), M(v, y);
    }, h = (v, y) => {
      {
        var k = (w) => {
          var D = N0();
          be(() => {
            _e(D, "stroke", l()), _e(D, "stroke-width", u()), _e(D, "fill", l());
          }), M(w, D);
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
  return I(d), be(() => {
    _e(d, "id", n()), _e(d, "markerWidth", `${o()}`), _e(d, "markerHeight", `${i()}`), _e(d, "markerUnits", s()), _e(d, "orient", a());
  }), M(e, d), ue({
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
ie(
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
var D0 = /* @__PURE__ */ G('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function Mu(e, t) {
  ce(t, !0);
  let n = m(t, "store", 15), r = m(t, "onedgeclick", 7), o = m(t, "onedgecontextmenu", 7), i = m(t, "onedgepointerenter", 7), s = m(t, "onedgepointerleave", 7);
  var a = D0(), l = R(a), u = R(l);
  Tu(u, {}), I(l);
  var d = H(l, 2);
  return lt(d, 17, () => n().visible.edges.values(), (g) => g.id, (g, f) => {
    Du(g, {
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
  }), I(a), M(e, a), ue({
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
var T0 = /* @__PURE__ */ G('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const A0 = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function Xs(e, t) {
  ce(t, !0), Te(e, A0);
  let n = m(t, "x", 7, 0), r = m(t, "y", 7, 0), o = m(t, "width", 7, 0), i = m(t, "height", 7, 0), s = m(t, "isVisible", 7, !0);
  var a = De(), l = le(a);
  {
    var u = (d) => {
      var g = T0();
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
      s() && d(u);
    });
  }
  return M(e, a), ue({
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
var L0 = /* @__PURE__ */ G("<div><!></div>");
const H0 = {
  hash: "svelte-16qgzgd",
  code: ".svelte-flow__selection-wrapper.svelte-16qgzgd {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}"
};
function Ou(e, t) {
  ce(t, !0), Te(e, H0);
  let n = m(t, "store", 15), r = m(t, "onnodedrag", 7), o = m(t, "onnodedragstart", 7), i = m(t, "onnodedragstop", 7), s = m(t, "onselectionclick", 7), a = m(t, "onselectioncontextmenu", 7), l = /* @__PURE__ */ ke(void 0);
  Ze(() => {
    n().disableKeyboardA11y || c(l)?.focus({ preventScroll: !0 });
  });
  let u = /* @__PURE__ */ N(() => n().selectionRectMode === "nodes" ? (n().nodes, lo(n().nodeLookup, { filter: (v) => !!v.selected })) : null);
  function d(v) {
    Object.prototype.hasOwnProperty.call(jo, v.key) && (v.preventDefault(), n().moveSelectedNodes(jo[v.key], v.shiftKey ? 4 : 1));
  }
  var g = De(), f = le(g);
  {
    var h = (v) => {
      var y = L0();
      y.__contextmenu = [M0, n, a], y.__click = [O0, n, s], y.__keydown = function(...D) {
        (n().disableKeyboardA11y ? void 0 : d)?.apply(this, D);
      };
      let k;
      var w = R(y);
      Xs(w, { width: "100%", height: "100%", x: 0, y: 0 }), I(y), st(y, (D, x) => Cu?.(D, x), () => ({
        disabled: !1,
        store: n(),
        onDrag: (D, x, b, E) => {
          r()?.({ event: D, targetNode: null, nodes: E });
        },
        onDragStart: (D, x, b, E) => {
          o()?.({ event: D, targetNode: null, nodes: E });
        },
        onDragStop: (D, x, b, E) => {
          i()?.({ event: D, targetNode: null, nodes: E });
        }
      })), Nt(y, (D) => Y(l, D), () => c(l)), be(
        (D) => {
          wt(y, 1, xn(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-16qgzgd"), _e(y, "role", n().disableKeyboardA11y ? void 0 : "button"), _e(y, "tabindex", n().disableKeyboardA11y ? void 0 : -1), k = ft(y, "", k, D);
        },
        [
          () => ({
            width: en(c(u).width),
            height: en(c(u).height),
            transform: `translate(${c(u).x ?? ""}px, ${c(u).y ?? ""}px)`
          })
        ]
      ), M(v, y);
    };
    se(f, (v) => {
      n().selectionRectMode === "nodes" && c(u) && cn(c(u).x) && cn(c(u).y) && v(h);
    });
  }
  return M(e, g), ue({
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
function V0(e) {
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
          const D = Array.isArray(f) ? f : [f];
          let x = !1;
          for (const b of D)
            if ((Array.isArray(b) ? b : [b]).reduce(
              (A, V) => A | V0(V),
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
      return co(h, [l, u, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!c(e).domNode)
        return i;
      const { x: s, y: a, zoom: l } = c(e).viewport, { x: u, y: d } = c(e).domNode.getBoundingClientRect(), g = Xo(i, [s, a, l]);
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
function Lu(e, t) {
  ce(t, !0);
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
    return (Array.isArray(y) ? y : [y]).map((D) => {
      const x = g(D);
      return {
        key: x,
        modifier: d(D),
        enabled: x !== null,
        callback: k
      };
    });
  }
  function h() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  async function v() {
    const y = n().nodes.filter((x) => x.selected), k = n().edges.filter((x) => x.selected), { deletedNodes: w, deletedEdges: D } = await l({ nodes: y, edges: k });
    (w.length > 0 || D.length > 0) && n().ondelete?.({ nodes: w, edges: D });
  }
  return ga("blur", ht, h), ga("contextmenu", ht, h), st(ht, (y, k) => Kt?.(y, k), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), st(ht, (y, k) => Kt?.(y, k), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), st(ht, (y, k) => Kt?.(y, k), () => ({
    trigger: f(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), st(ht, (y, k) => Kt?.(y, k), () => ({
    trigger: f(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), st(ht, (y, k) => Kt?.(y, k), () => ({
    trigger: f(i(), (y) => {
      !(y.originalEvent.ctrlKey || y.originalEvent.metaKey || y.originalEvent.shiftKey) && !jc(y.originalEvent) && (n(n().deleteKeyPressed = !0, !0), v());
    }),
    type: "keydown"
  })), st(ht, (y, k) => Kt?.(y, k), () => ({
    trigger: f(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), st(ht, (y, k) => Kt?.(y, k), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), st(ht, (y, k) => Kt?.(y, k), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), st(ht, (y, k) => Kt?.(y, k), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), st(ht, (y, k) => Kt?.(y, k), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), ue({
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
  Lu,
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
  ce(t, !0);
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
        const [f] = Fs({
          ...g,
          borderRadius: r() === an.Step ? 0 : void 0
        });
        return f;
      }
    }
  });
  var l = De(), u = le(l);
  {
    var d = (g) => {
      var f = I0(), h = R(f), v = R(h);
      {
        var y = (w) => {
          var D = De(), x = le(D);
          Ts(x, s, (b, E) => {
            E(b, {});
          }), M(w, D);
        }, k = (w) => {
          var D = $0();
          be(() => {
            _e(D, "d", c(a)), ft(D, i());
          }), M(w, D);
        };
        se(v, (w) => {
          s() ? w(y) : w(k, !1);
        });
      }
      I(h), I(f), be(
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
    se(u, (g) => {
      n().connection.inProgress && g(d);
    });
  }
  return M(e, l), ue({
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
var z0 = /* @__PURE__ */ G("<div><!></div>");
function fo(e, t) {
  ce(t, !0);
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
    () => ["svelte-flow__panel", o(), ...c(a)]
  ]);
  var u = R(l);
  return Ye(u, () => i() ?? rt), I(l), M(e, l), ue({
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
var R0 = /* @__PURE__ */ G('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function Vu(e, t) {
  ce(t, !0);
  let n = m(t, "proOptions", 7), r = m(t, "position", 7, "bottom-right");
  var o = De(), i = le(o);
  {
    var s = (a) => {
      fo(a, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
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
  return M(e, o), ue({
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
ie(Vu, { proOptions: {}, position: {} }, [], [], !0);
var B0 = /* @__PURE__ */ G("<div><!></div>");
const F0 = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function $u(e, t) {
  ce(t, !0), Te(e, F0);
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
  Ue(
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
  var v = R(h);
  return Ye(v, () => l() ?? rt), I(h), Nt(h, (y) => i(y), () => i()), wa(h, "clientHeight", a), wa(h, "clientWidth", s), M(e, h), ue({
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
ie(
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
var K0 = /* @__PURE__ */ G('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), q0 = /* @__PURE__ */ G("<!> <!>", 1), Z0 = /* @__PURE__ */ G("<!> <!> <!> <!> <!>", 1);
function Iu(e, t) {
  ce(t, !0);
  let n = m(t, "width", 7), r = m(t, "height", 7), o = m(t, "proOptions", 7), i = m(t, "selectionKey", 7), s = m(t, "deleteKey", 7), a = m(t, "panActivationKey", 7), l = m(t, "multiSelectionKey", 7), u = m(t, "zoomActivationKey", 7), d = m(t, "paneClickDistance", 7, 1), g = m(t, "nodeClickDistance", 7, 1), f = m(t, "onmovestart", 7), h = m(t, "onmoveend", 7), v = m(t, "onmove", 7), y = m(t, "oninit", 7), k = m(t, "onnodeclick", 7), w = m(t, "onnodecontextmenu", 7), D = m(t, "onnodedrag", 7), x = m(t, "onnodedragstart", 7), b = m(t, "onnodedragstop", 7), E = m(t, "onnodepointerenter", 7), A = m(t, "onnodepointermove", 7), V = m(t, "onnodepointerleave", 7), B = m(t, "onselectionclick", 7), W = m(t, "onselectioncontextmenu", 7), J = m(t, "onselectionstart", 7), $ = m(t, "onselectionend", 7), S = m(t, "onedgeclick", 7), L = m(t, "onedgecontextmenu", 7), _ = m(t, "onedgepointerenter", 7), P = m(t, "onedgepointerleave", 7), C = m(t, "onpaneclick", 7), O = m(t, "onpanecontextmenu", 7), z = m(t, "panOnScrollMode", 23, () => Gt.Free), T = m(t, "preventScrolling", 7, !0), F = m(t, "zoomOnScroll", 7, !0), Z = m(t, "zoomOnDoubleClick", 7, !0), j = m(t, "zoomOnPinch", 7, !0), re = m(t, "panOnScroll", 7, !1), te = m(t, "panOnDrag", 7, !0), Q = m(t, "selectionOnDrag", 7, !0), X = m(t, "connectionLineComponent", 7), U = m(t, "connectionLineStyle", 7), q = m(t, "connectionLineContainerStyle", 7), he = m(t, "connectionLineType", 23, () => an.Bezier), fe = m(t, "attributionPosition", 7), ne = m(t, "children", 7), oe = m(t, "nodes", 31, () => Mt([])), ae = m(t, "edges", 31, () => Mt([])), ee = m(t, "viewport", 31, () => {
  }), ge = /* @__PURE__ */ Oe(t, [
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
  ]), de = wu({
    props: ge,
    width: n(),
    height: r(),
    get nodes() {
      return oe();
    },
    set nodes(K) {
      oe(K);
    },
    get edges() {
      return ae();
    },
    set edges(K) {
      ae(K);
    },
    get viewport() {
      return ee();
    },
    set viewport(K) {
      ee(K);
    }
  });
  const pe = Tn(Go);
  return pe && pe.setStore && pe.setStore(de), fr(Go, {
    provider: !1,
    getStore() {
      return de;
    }
  }), Ze(() => {
    const K = { nodes: de.selectedNodes, edges: de.selectedEdges };
    nt(() => t.onselectionchange)?.(K);
    for (const Ie of de.selectionChangeHandlers.values())
      Ie(K);
  }), ii(() => {
    de.reset();
  }), $u(e, {
    get colorMode() {
      return de.colorMode;
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
      return de.domNode;
    },
    set domNode(K) {
      de.domNode = K;
    },
    get clientWidth() {
      return de.width;
    },
    set clientWidth(K) {
      de.width = K;
    },
    get clientHeight() {
      return de.height;
    },
    set clientHeight(K) {
      de.height = K;
    },
    children: (K, Ie) => {
      var Ae = Z0(), Le = le(Ae);
      Lu(Le, {
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
          return de;
        },
        set store(et) {
          de = et;
        }
      });
      var Ke = H(Le, 2);
      _u(Ke, {
        get panOnScrollMode() {
          return z();
        },
        get preventScrolling() {
          return T();
        },
        get zoomOnScroll() {
          return F();
        },
        get zoomOnDoubleClick() {
          return Z();
        },
        get zoomOnPinch() {
          return j();
        },
        get panOnScroll() {
          return re();
        },
        get panOnDrag() {
          return te();
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
          return de;
        },
        set store(et) {
          de = et;
        },
        children: (et, Je) => {
          xu(et, {
            get onpaneclick() {
              return C();
            },
            get onpanecontextmenu() {
              return O();
            },
            get onselectionstart() {
              return J();
            },
            get onselectionend() {
              return $();
            },
            get panOnDrag() {
              return te();
            },
            get selectionOnDrag() {
              return Q();
            },
            get store() {
              return de;
            },
            set store(Qe) {
              de = Qe;
            },
            children: (Qe, me) => {
              var Re = q0(), _t = le(Re);
              bu(_t, {
                get store() {
                  return de;
                },
                set store(on) {
                  de = on;
                },
                children: (on, Jw) => {
                  var ea = K0(), ta = H(le(ea), 2);
                  Mu(ta, {
                    get onedgeclick() {
                      return S();
                    },
                    get onedgecontextmenu() {
                      return L();
                    },
                    get onedgepointerenter() {
                      return _();
                    },
                    get onedgepointerleave() {
                      return P();
                    },
                    get store() {
                      return de;
                    },
                    set store(Bn) {
                      de = Bn;
                    }
                  });
                  var na = H(ta, 4);
                  Hu(na, {
                    get type() {
                      return he();
                    },
                    get LineComponent() {
                      return X();
                    },
                    get containerStyle() {
                      return q();
                    },
                    get style() {
                      return U();
                    },
                    get store() {
                      return de;
                    },
                    set store(Bn) {
                      de = Bn;
                    }
                  });
                  var ra = H(na, 2);
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
                      return A();
                    },
                    get onnodepointerleave() {
                      return V();
                    },
                    get onnodedrag() {
                      return D();
                    },
                    get onnodedragstart() {
                      return x();
                    },
                    get onnodedragstop() {
                      return b();
                    },
                    get store() {
                      return de;
                    },
                    set store(Bn) {
                      de = Bn;
                    }
                  });
                  var $d = H(ra, 2);
                  Ou($d, {
                    get onselectionclick() {
                      return B();
                    },
                    get onselectioncontextmenu() {
                      return W();
                    },
                    get onnodedrag() {
                      return D();
                    },
                    get onnodedragstart() {
                      return x();
                    },
                    get onnodedragstop() {
                      return b();
                    },
                    get store() {
                      return de;
                    },
                    set store(Bn) {
                      de = Bn;
                    }
                  }), ye(2), M(on, ea);
                },
                $$slots: { default: !0 }
              });
              var Xe = H(_t, 2);
              const Dt = /* @__PURE__ */ N(() => !!(de.selectionRect && de.selectionRectMode === "user")), tt = /* @__PURE__ */ N(() => de.selectionRect?.width), Ft = /* @__PURE__ */ N(() => de.selectionRect?.height), wi = /* @__PURE__ */ N(() => de.selectionRect?.x), Rn = /* @__PURE__ */ N(() => de.selectionRect?.y);
              Xs(Xe, {
                get isVisible() {
                  return c(Dt);
                },
                get width() {
                  return c(tt);
                },
                get height() {
                  return c(Ft);
                },
                get x() {
                  return c(wi);
                },
                get y() {
                  return c(Rn);
                }
              }), M(Qe, Re);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var He = H(Ke, 2);
      Vu(He, {
        get proOptions() {
          return o();
        },
        get position() {
          return fe();
        }
      });
      var gt = H(He, 2);
      ku(gt, {
        get store() {
          return de;
        }
      });
      var qe = H(gt, 2);
      Ye(qe, () => ne() ?? rt), M(K, Ae);
    },
    $$slots: { default: !0 }
  }), ue({
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
      return u();
    },
    set zoomActivationKey(K) {
      u(K), p();
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
      return D();
    },
    set onnodedrag(K) {
      D(K), p();
    },
    get onnodedragstart() {
      return x();
    },
    set onnodedragstart(K) {
      x(K), p();
    },
    get onnodedragstop() {
      return b();
    },
    set onnodedragstop(K) {
      b(K), p();
    },
    get onnodepointerenter() {
      return E();
    },
    set onnodepointerenter(K) {
      E(K), p();
    },
    get onnodepointermove() {
      return A();
    },
    set onnodepointermove(K) {
      A(K), p();
    },
    get onnodepointerleave() {
      return V();
    },
    set onnodepointerleave(K) {
      V(K), p();
    },
    get onselectionclick() {
      return B();
    },
    set onselectionclick(K) {
      B(K), p();
    },
    get onselectioncontextmenu() {
      return W();
    },
    set onselectioncontextmenu(K) {
      W(K), p();
    },
    get onselectionstart() {
      return J();
    },
    set onselectionstart(K) {
      J(K), p();
    },
    get onselectionend() {
      return $();
    },
    set onselectionend(K) {
      $(K), p();
    },
    get onedgeclick() {
      return S();
    },
    set onedgeclick(K) {
      S(K), p();
    },
    get onedgecontextmenu() {
      return L();
    },
    set onedgecontextmenu(K) {
      L(K), p();
    },
    get onedgepointerenter() {
      return _();
    },
    set onedgepointerenter(K) {
      _(K), p();
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
      return O();
    },
    set onpanecontextmenu(K) {
      O(K), p();
    },
    get panOnScrollMode() {
      return z();
    },
    set panOnScrollMode(K = Gt.Free) {
      z(K), p();
    },
    get preventScrolling() {
      return T();
    },
    set preventScrolling(K = !0) {
      T(K), p();
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
      return j();
    },
    set zoomOnPinch(K = !0) {
      j(K), p();
    },
    get panOnScroll() {
      return re();
    },
    set panOnScroll(K = !1) {
      re(K), p();
    },
    get panOnDrag() {
      return te();
    },
    set panOnDrag(K = !0) {
      te(K), p();
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
      return U();
    },
    set connectionLineStyle(K) {
      U(K), p();
    },
    get connectionLineContainerStyle() {
      return q();
    },
    set connectionLineContainerStyle(K) {
      q(K), p();
    },
    get connectionLineType() {
      return he();
    },
    set connectionLineType(K = an.Bezier) {
      he(K), p();
    },
    get attributionPosition() {
      return fe();
    },
    set attributionPosition(K) {
      fe(K), p();
    },
    get children() {
      return ne();
    },
    set children(K) {
      ne(K), p();
    },
    get nodes() {
      return oe();
    },
    set nodes(K = []) {
      oe(K), p();
    },
    get edges() {
      return ae();
    },
    set edges(K = []) {
      ae(K), p();
    },
    get viewport() {
      return ee();
    },
    set viewport(K = void 0) {
      ee(K), p();
    }
  });
}
ie(
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
  ce(t, !0);
  let n = m(t, "children", 7), r = /* @__PURE__ */ ke(wu({ props: {}, nodes: [], edges: [] }));
  fr(Go, {
    provider: !0,
    getStore() {
      return c(r);
    },
    setStore: (s) => {
      Y(r, s);
    }
  }), ii(() => {
    c(r).reset();
  });
  var o = De(), i = le(o);
  return Ye(i, () => n() ?? rt), M(e, o), ue({
    get children() {
      return n();
    },
    set children(s) {
      n(s), p();
    }
  });
}
ie(zu, { children: {} }, [], [], !0);
var Y0 = /* @__PURE__ */ G("<button><!></button>");
function Mr(e, t) {
  ce(t, !0);
  let n = m(t, "class", 7), r = m(t, "bgColor", 7), o = m(t, "bgColorHover", 7), i = m(t, "color", 7), s = m(t, "colorHover", 7), a = m(t, "borderColor", 7), l = m(t, "onclick", 7), u = m(t, "children", 7), d = /* @__PURE__ */ Oe(t, [
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
  return Ye(f, () => u() ?? rt), I(g), M(e, g), ue({
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
function Ru(e) {
  var t = W0();
  M(e, t);
}
ie(Ru, {}, [], [], !0);
var X0 = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Bu(e) {
  var t = X0();
  M(e, t);
}
ie(Bu, {}, [], [], !0);
var j0 = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Fu(e) {
  var t = j0();
  M(e, t);
}
ie(Fu, {}, [], [], !0);
var G0 = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Ku(e) {
  var t = G0();
  M(e, t);
}
ie(Ku, {}, [], [], !0);
var U0 = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function qu(e) {
  var t = U0();
  M(e, t);
}
ie(qu, {}, [], [], !0);
var J0 = /* @__PURE__ */ G("<!> <!>", 1), Q0 = /* @__PURE__ */ G("<!> <!> <!> <!> <!> <!>", 1);
function Zu(e, t) {
  ce(t, !0);
  let n = m(t, "position", 7, "bottom-left"), r = m(t, "orientation", 7, "vertical"), o = m(t, "showZoom", 7, !0), i = m(t, "showFitView", 7, !0), s = m(t, "showLock", 7, !0), a = m(t, "style", 7), l = m(t, "class", 7), u = m(t, "buttonBgColor", 7), d = m(t, "buttonBgColorHover", 7), g = m(t, "buttonColor", 7), f = m(t, "buttonColorHover", 7), h = m(t, "buttonBorderColor", 7), v = m(t, "fitViewOptions", 7), y = m(t, "children", 7), k = m(t, "before", 7), w = m(t, "after", 7), D = /* @__PURE__ */ Oe(t, [
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
  let E = /* @__PURE__ */ N(() => c(x).nodesDraggable || c(x).nodesConnectable || c(x).elementsSelectable), A = /* @__PURE__ */ N(() => c(x).viewport.zoom <= c(x).minZoom), V = /* @__PURE__ */ N(() => c(x).viewport.zoom >= c(x).maxZoom), B = /* @__PURE__ */ N(() => c(x).ariaLabelConfig), W = /* @__PURE__ */ N(() => r() === "horizontal" ? "horizontal" : "vertical");
  const J = () => {
    c(x).zoomIn();
  }, $ = () => {
    c(x).zoomOut();
  }, S = () => {
    c(x).fitView(v());
  }, L = () => {
    let P = !c(E);
    c(x).nodesDraggable = P, c(x).nodesConnectable = P, c(x).elementsSelectable = P;
  }, _ = /* @__PURE__ */ N(() => [
    "svelte-flow__controls",
    c(W),
    l()
  ]);
  return fo(e, $e(
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
    () => D,
    {
      children: (P, C) => {
        var O = Q0(), z = le(O);
        {
          var T = (fe) => {
            var ne = De(), oe = le(ne);
            Ye(oe, k), M(fe, ne);
          };
          se(z, (fe) => {
            k() && fe(T);
          });
        }
        var F = H(z, 2);
        {
          var Z = (fe) => {
            var ne = J0(), oe = le(ne);
            Mr(oe, $e(
              {
                onclick: J,
                class: "svelte-flow__controls-zoomin",
                get title() {
                  return c(B)["controls.zoomIn.ariaLabel"];
                },
                get "aria-label"() {
                  return c(B)["controls.zoomIn.ariaLabel"];
                },
                get disabled() {
                  return c(V);
                }
              },
              () => b,
              {
                children: (ee, ge) => {
                  Ru(ee);
                },
                $$slots: { default: !0 }
              }
            ));
            var ae = H(oe, 2);
            Mr(ae, $e(
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
                  return c(A);
                }
              },
              () => b,
              {
                children: (ee, ge) => {
                  Bu(ee);
                },
                $$slots: { default: !0 }
              }
            )), M(fe, ne);
          };
          se(F, (fe) => {
            o() && fe(Z);
          });
        }
        var j = H(F, 2);
        {
          var re = (fe) => {
            Mr(fe, $e(
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
                children: (ne, oe) => {
                  Fu(ne);
                },
                $$slots: { default: !0 }
              }
            ));
          };
          se(j, (fe) => {
            i() && fe(re);
          });
        }
        var te = H(j, 2);
        {
          var Q = (fe) => {
            Mr(fe, $e(
              {
                class: "svelte-flow__controls-interactive",
                onclick: L,
                get title() {
                  return c(B)["controls.interactive.ariaLabel"];
                },
                get "aria-label"() {
                  return c(B)["controls.interactive.ariaLabel"];
                }
              },
              () => b,
              {
                children: (ne, oe) => {
                  var ae = De(), ee = le(ae);
                  {
                    var ge = (pe) => {
                      qu(pe);
                    }, de = (pe) => {
                      Ku(pe);
                    };
                    se(ee, (pe) => {
                      c(E) ? pe(ge) : pe(de, !1);
                    });
                  }
                  M(ne, ae);
                },
                $$slots: { default: !0 }
              }
            ));
          };
          se(te, (fe) => {
            s() && fe(Q);
          });
        }
        var X = H(te, 2);
        {
          var U = (fe) => {
            var ne = De(), oe = le(ne);
            Ye(oe, y), M(fe, ne);
          };
          se(X, (fe) => {
            y() && fe(U);
          });
        }
        var q = H(X, 2);
        {
          var he = (fe) => {
            var ne = De(), oe = le(ne);
            Ye(oe, w), M(fe, ne);
          };
          se(q, (fe) => {
            w() && fe(he);
          });
        }
        M(P, O);
      },
      $$slots: { default: !0 }
    }
  )), ue({
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
ie(
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
var em = /* @__PURE__ */ ve("<circle></circle>");
function Yu(e, t) {
  ce(t, !0);
  let n = m(t, "radius", 7), r = m(t, "class", 7);
  var o = em();
  return be(() => {
    _e(o, "cx", n()), _e(o, "cy", n()), _e(o, "r", n()), wt(o, 0, xn(["svelte-flow__background-pattern", "dots", r()]));
  }), M(e, o), ue({
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
ie(Yu, { radius: {}, class: {} }, [], [], !0);
var tm = /* @__PURE__ */ ve("<path></path>");
function Wu(e, t) {
  ce(t, !0);
  let n = m(t, "lineWidth", 7), r = m(t, "dimensions", 7), o = m(t, "variant", 7), i = m(t, "class", 7);
  var s = tm();
  return be(() => {
    _e(s, "stroke-width", n()), _e(s, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), wt(s, 0, xn(["svelte-flow__background-pattern", o(), i()]));
  }), M(e, s), ue({
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
ie(Wu, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const nm = {
  [un.Dots]: 1,
  [un.Lines]: 1,
  [un.Cross]: 6
};
var rm = /* @__PURE__ */ ve('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function Xu(e, t) {
  ce(t, !0);
  let n = m(t, "id", 7), r = m(t, "variant", 23, () => un.Dots), o = m(t, "gap", 7, 20), i = m(t, "size", 7), s = m(t, "lineWidth", 7, 1), a = m(t, "bgColor", 7), l = m(t, "patternColor", 7), u = m(t, "patternClass", 7), d = m(t, "class", 7), g = /* @__PURE__ */ N(Rt), f = /* @__PURE__ */ N(() => r() === un.Dots), h = /* @__PURE__ */ N(() => r() === un.Cross), v = /* @__PURE__ */ N(() => Array.isArray(o()) ? o() : [o(), o()]), y = /* @__PURE__ */ N(() => `background-pattern-${c(g).flowId}-${n() ?? ""}`), k = /* @__PURE__ */ N(() => [
    c(v)[0] * c(g).viewport.zoom || 1,
    c(v)[1] * c(g).viewport.zoom || 1
  ]), w = /* @__PURE__ */ N(() => (i() ?? nm[r()]) * c(g).viewport.zoom), D = /* @__PURE__ */ N(() => c(h) ? [c(w), c(w)] : c(k)), x = /* @__PURE__ */ N(() => c(f) ? [c(w) / 2, c(w) / 2] : [
    c(D)[0] / 2,
    c(D)[1] / 2
  ]);
  var b = rm();
  let E;
  var A = R(b), V = R(A);
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
    }, W = ($) => {
      Wu($, {
        get dimensions() {
          return c(D);
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
    se(V, ($) => {
      c(f) ? $(B) : $(W, !1);
    });
  }
  I(A);
  var J = H(A);
  return I(b), be(
    ($) => {
      wt(b, 0, xn([
        "svelte-flow__background",
        "svelte-flow__container",
        d()
      ])), E = ft(b, "", E, $), _e(A, "id", c(y)), _e(A, "x", c(g).viewport.x % c(k)[0]), _e(A, "y", c(g).viewport.y % c(k)[1]), _e(A, "width", c(k)[0]), _e(A, "height", c(k)[1]), _e(A, "patternTransform", `translate(-${c(x)[0]},-${c(x)[1]})`), _e(J, "fill", `url(#${c(y)})`);
    },
    [
      () => ({
        "--xy-background-color-props": a(),
        "--xy-background-pattern-color-props": l()
      })
    ]
  ), M(e, b), ue({
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
ie(
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
var om = /* @__PURE__ */ ve("<rect></rect>");
function ju(e, t) {
  ce(t, !0);
  let n = m(t, "x", 7), r = m(t, "y", 7), o = m(t, "width", 7), i = m(t, "height", 7), s = m(t, "borderRadius", 7, 5), a = m(t, "color", 7), l = m(t, "shapeRendering", 7), u = m(t, "strokeColor", 7), d = m(t, "strokeWidth", 7, 2), g = m(t, "selected", 7), f = m(t, "class", 7);
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
        stroke: u(),
        "stroke-width": d()
      })
    ]
  ), M(e, h), ue({
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
ie(
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
var sm = /* @__PURE__ */ ve("<title> </title>"), am = /* @__PURE__ */ ve('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), lm = /* @__PURE__ */ G('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function Gu(e, t) {
  ce(t, !0);
  let n = m(t, "position", 7, "bottom-right"), r = m(t, "ariaLabel", 7), o = m(t, "nodeStrokeColor", 7, "transparent"), i = m(t, "nodeColor", 7), s = m(t, "nodeClass", 7, ""), a = m(t, "nodeBorderRadius", 7, 5), l = m(t, "nodeStrokeWidth", 7, 2), u = m(t, "bgColor", 7), d = m(t, "maskColor", 7), g = m(t, "maskStrokeColor", 7), f = m(t, "maskStrokeWidth", 7), h = m(t, "width", 7, 200), v = m(t, "height", 7, 150), y = m(t, "pannable", 7, !0), k = m(t, "zoomable", 7, !0), w = m(t, "inversePan", 7), D = m(t, "zoomStep", 7), x = m(t, "class", 7), b = /* @__PURE__ */ Oe(t, [
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
  ]), E = /* @__PURE__ */ N(Rt), A = /* @__PURE__ */ N(() => c(E).ariaLabelConfig);
  const V = i() === void 0 ? void 0 : Ai(i()), B = Ai(o()), W = Ai(s()), J = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let $ = /* @__PURE__ */ N(() => `svelte-flow__minimap-desc-${c(E).flowId}`), S = /* @__PURE__ */ N(() => ({
    x: -c(E).viewport.x / c(E).viewport.zoom,
    y: -c(E).viewport.y / c(E).viewport.zoom,
    width: c(E).width / c(E).viewport.zoom,
    height: c(E).height / c(E).viewport.zoom
  })), L = /* @__PURE__ */ N(() => c(E).nodeLookup.size > 0 ? Zc(lo(c(E).nodeLookup, { filter: (q) => !q.hidden }), c(S)) : c(S)), _ = /* @__PURE__ */ N(() => c(L).width / h()), P = /* @__PURE__ */ N(() => c(L).height / v()), C = /* @__PURE__ */ N(() => Math.max(c(_), c(P))), O = /* @__PURE__ */ N(() => c(C) * h()), z = /* @__PURE__ */ N(() => c(C) * v()), T = /* @__PURE__ */ N(() => 5 * c(C)), F = /* @__PURE__ */ N(() => c(L).x - (c(O) - c(L).width) / 2 - c(T)), Z = /* @__PURE__ */ N(() => c(L).y - (c(z) - c(L).height) / 2 - c(T)), j = /* @__PURE__ */ N(() => c(O) + c(T) * 2), re = /* @__PURE__ */ N(() => c(z) + c(T) * 2);
  const te = () => c(C);
  var Q = lm(), X = le(Q);
  const U = /* @__PURE__ */ N(() => ["svelte-flow__minimap", x()]);
  return Uf(X, () => ({ "--xy-minimap-background-color-props": u() })), fo(X.lastChild, $e(
    {
      get position() {
        return n();
      },
      get class() {
        return c(U);
      },
      "data-testid": "svelte-flow__minimap"
    },
    () => b,
    {
      children: (q, he) => {
        var fe = De(), ne = le(fe);
        {
          var oe = (ae) => {
            var ee = am();
            let ge;
            var de = R(ee);
            {
              var pe = (Ae) => {
                var Le = sm(), Ke = R(Le, !0);
                I(Le), be(() => {
                  _e(Le, "id", c($)), Ve(Ke, r() ?? c(A)["minimap.ariaLabel"]);
                }), M(Ae, Le);
              };
              se(de, (Ae) => {
                (r() ?? c(A)["minimap.ariaLabel"]) && Ae(pe);
              });
            }
            var K = H(de);
            lt(K, 17, () => c(E).nodes, (Ae) => Ae.id, (Ae, Le) => {
              var Ke = De();
              const He = /* @__PURE__ */ N(() => c(E).nodeLookup.get(c(Le).id));
              var gt = le(Ke);
              {
                var qe = (et) => {
                  const Je = /* @__PURE__ */ N(() => zn(c(He))), Qe = /* @__PURE__ */ N(() => V?.(c(He))), me = /* @__PURE__ */ N(() => B(c(He))), Re = /* @__PURE__ */ N(() => W(c(He)));
                  ju(et, $e(
                    {
                      get x() {
                        return c(He).internals.positionAbsolute.x;
                      },
                      get y() {
                        return c(He).internals.positionAbsolute.y;
                      }
                    },
                    () => c(Je),
                    {
                      get selected() {
                        return c(He).selected;
                      },
                      get color() {
                        return c(Qe);
                      },
                      get borderRadius() {
                        return a();
                      },
                      get strokeColor() {
                        return c(me);
                      },
                      get strokeWidth() {
                        return l();
                      },
                      get shapeRendering() {
                        return J;
                      },
                      get class() {
                        return c(Re);
                      }
                    }
                  ));
                };
                se(gt, (et) => {
                  c(He) && Yc(c(He)) && et(qe);
                });
              }
              M(Ae, Ke);
            });
            var Ie = H(K);
            I(ee), st(ee, (Ae, Le) => im?.(Ae, Le), () => ({
              store: c(E),
              panZoom: c(E).panZoom,
              getViewScale: te,
              translateExtent: c(E).translateExtent,
              width: c(E).width,
              height: c(E).height,
              inversePan: w(),
              zoomStep: D(),
              pannable: y(),
              zoomable: k()
            })), be(
              (Ae) => {
                _e(ee, "width", h()), _e(ee, "height", v()), _e(ee, "viewBox", `${c(F) ?? ""} ${c(Z) ?? ""} ${c(j) ?? ""} ${c(re) ?? ""}`), _e(ee, "aria-labelledby", c($)), ge = ft(ee, "", ge, Ae), _e(Ie, "d", `M${c(F) - c(T)},${c(Z) - c(T)}h${c(j) + c(T) * 2}v${c(re) + c(T) * 2}h${-c(j) - c(T) * 2}z
      M${c(S).x ?? ""},${c(S).y ?? ""}h${c(S).width ?? ""}v${c(S).height ?? ""}h${-c(S).width}z`);
              },
              [
                () => ({
                  "--xy-minimap-mask-background-color-props": d(),
                  "--xy-minimap-mask-stroke-color-props": g(),
                  "--xy-minimap-mask-stroke-width-props": f() ? f() * c(C) : void 0
                })
              ]
            ), M(ae, ee);
          };
          se(ne, (ae) => {
            c(E).panZoom && ae(oe);
          });
        }
        M(q, fe);
      },
      $$slots: { default: !0 }
    }
  )), I(X), M(e, Q), ue({
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
      return u();
    },
    set bgColor(q) {
      u(q), p();
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
      return D();
    },
    set zoomStep(q) {
      D(q), p();
    },
    get class() {
      return x();
    },
    set class(q) {
      x(q), p();
    }
  });
}
ie(
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
var cm = /* @__PURE__ */ G("<div><!></div>");
function Uu(e, t) {
  ce(t, !0);
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
  const u = Rt(), { getNodesBounds: d } = ot(), g = Tn("svelteflow__node_id");
  let f = /* @__PURE__ */ N(() => (u.nodes, (Array.isArray(n()) ? n() : [n() ?? g]).reduce(
    (E, A) => {
      const V = u.nodeLookup.get(A);
      return V && E.push(V), E;
    },
    []
  ))), h = /* @__PURE__ */ N(() => {
    const b = d(c(f));
    return b ? Cp(b, u.viewport, r(), i(), o()) : "";
  }), v = /* @__PURE__ */ N(() => c(f).length === 0 ? 1 : Math.max(...c(f).map((b) => (b.internals.z || 5) + 1))), y = /* @__PURE__ */ N(() => u.nodes.filter((b) => b.selected).length), k = /* @__PURE__ */ N(() => typeof s() == "boolean" ? s() : c(f).length === 1 && c(f)[0].selected && c(y) === 1);
  var w = De(), D = le(w);
  {
    var x = (b) => {
      var E = cm();
      Ue(
        E,
        (V, B) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": V,
          ...l,
          [Zt]: B
        }),
        [
          () => c(f).reduce((V, B) => `${V}${B.id} `, "").trim(),
          () => ({
            display: fu().value ? "none" : void 0,
            position: "absolute",
            transform: c(h),
            "z-index": c(v)
          })
        ]
      );
      var A = R(E);
      Ye(A, () => a() ?? rt), I(E), st(E, (V, B) => du?.(V, B), () => "root"), M(b, E);
    };
    se(D, (b) => {
      u.domNode && c(k) && c(f) && b(x);
    });
  }
  return M(e, w), ue({
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
class e_ {
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
  let e = /* @__PURE__ */ ke([]), t = /* @__PURE__ */ ke([]), n = /* @__PURE__ */ ke({ x: 250, y: 100, zoom: 1 });
  return {
    // nodes: nodesInternal,
    // edges: edgesInternal,
    // viewport,
    init: (r, o) => {
      Y(e, r), Y(t, o);
    },
    getNodes: () => c(e),
    setNodes: (r) => {
      Y(e, r);
    },
    getEdges: () => c(t),
    setEdges: (r) => {
      Y(t, r);
    },
    getViewport: () => c(n),
    setViewport: (r) => {
      Y(n, r);
    },
    getNode: (r) => c(e).find((o) => o.id === r),
    addNode: (r) => {
      Y(e, [...c(e), r]);
    },
    removeNode: (r) => {
      Y(e, c(e).filter((o) => o.id !== r));
    },
    updateNode: (r, o) => {
      Y(e, c(e).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateNodes: (r) => {
      Y(e, r(c(e)));
    },
    updateNodeData: (r, o) => {
      Y(e, c(e).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    },
    selectNodeOnly: (r) => {
      Y(e, c(e).map((o) => o.id === r ? { ...o, selected: !0 } : { ...o, selected: !1 }));
    },
    getEdge: (r) => c(t).find((o) => o.id === r),
    addEdge: (r) => {
      Y(t, [...c(t), r]);
    },
    removeEdge: (r) => {
      Y(t, c(t).filter((o) => o.id !== r));
    },
    updateEdge: (r, o) => {
      Y(t, c(t).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateEdges: (r) => {
      Y(t, r(c(t)));
    },
    updateEdgeData: (r, o) => {
      Y(t, c(t).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    }
  };
}, Be = um();
var dm = /* @__PURE__ */ G("<button><!></button>");
function Se(e, t) {
  ce(t, !0);
  const n = m(t, "children", 7), r = m(t, "primary", 7), o = /* @__PURE__ */ Oe(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children",
    "primary"
  ]);
  var i = dm();
  Ue(i, () => ({
    type: "button",
    ...o,
    class: `tf-btn ${r() ? "tf-btn-primary" : ""} nopan nodrag ${t.class ?? ""}`
  }));
  var s = R(i);
  return Ye(s, () => n() ?? rt), I(i), M(e, i), ue({
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
var fm = /* @__PURE__ */ G("<input/>");
function Ju(e, t) {
  ce(t, !0);
  const n = /* @__PURE__ */ Oe(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = fm();
  Xt(r), Ue(r, () => ({
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), M(e, r), ue();
}
ie(Ju, {}, [], [], !0);
var gm = /* @__PURE__ */ G('<div><input type="hidden"/> <!> <!></div>');
const hm = {
  hash: "svelte-1swt2gg",
  code: ".tf-chosen.svelte-1swt2gg {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function Qu(e, t) {
  ce(t, !0), Te(e, hm);
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
  var l = gm();
  Ue(
    l,
    () => ({
      ...a,
      class: `tf-chosen nopan nodrag ${t.class ?? ""}`
    }),
    void 0,
    "svelte-1swt2gg"
  );
  var u = R(l);
  Xt(u);
  var d = H(u, 2);
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
  var g = H(d, 2);
  return Se(g, {
    onclick: (f) => {
      s()?.(o(), r(), f);
    },
    style: "padding: 3px",
    children: (f, h) => {
      ye();
      var v = Ce();
      be(() => Ve(v, i())), M(f, v);
    },
    $$slots: { default: !0 }
  }), I(l), be(() => So(u, o())), M(e, l), ue({
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
var vm = /* @__PURE__ */ G("<input/>");
function je(e, t) {
  ce(t, !0);
  const n = /* @__PURE__ */ Oe(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = vm();
  Xt(r), Ue(r, () => ({
    type: "text",
    spellcheck: "false",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), M(e, r), ue();
}
ie(je, {}, [], [], !0);
var pm = /* @__PURE__ */ G("<textarea></textarea>");
function Fe(e, t) {
  ce(t, !0);
  const n = m(t, "value", 7), r = /* @__PURE__ */ Oe(t, ["$$slots", "$$events", "$$legacy", "$$host", "value"]);
  var o = pm();
  return Hf(o), Ue(o, () => ({
    spellcheck: "false",
    ...r,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), M(e, o), ue({
    get value() {
      return n();
    },
    set value(i) {
      n(i), p();
    }
  });
}
ie(Fe, { value: {} }, [], [], !0);
var mm = /* @__PURE__ */ G('<div role="button"><!></div>'), ym = /* @__PURE__ */ G("<div></div>");
function ed(e, t) {
  const n = ba(t, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = ba(n, ["items", "onChange", "activeIndex"]);
  ce(t, !1);
  let o = m(t, "items", 28, () => []), i = m(t, "onChange", 12, () => {
  }), s = m(t, "activeIndex", 12, 0);
  function a(u, d) {
    s(d), i()?.(u, d);
  }
  cc();
  var l = ym();
  return Ue(l, () => ({
    ...r,
    class: `tf-tabs ${Ss(r), nt(() => r.class) ?? ""}`
  })), lt(l, 5, o, hr, (u, d, g) => {
    var f = mm();
    _e(f, "tabindex", g), f.__click = () => a(c(d), g), f.__keydown = (k) => {
      (k.key === "Enter" || k.key === " ") && (k.preventDefault(), a(c(d), g));
    };
    var h = R(f);
    {
      var v = (k) => {
        var w = Ce();
        be(() => Ve(w, (c(d), nt(() => c(d).label)))), M(k, w);
      }, y = (k) => {
        var w = De(), D = le(w);
        Ye(D, () => (c(d), nt(() => c(d).label) ?? rt)), M(k, w);
      };
      se(h, (k) => {
        c(d), nt(() => typeof c(d).label == "string") ? k(v) : k(y, !1);
      });
    }
    I(f), be(() => wt(f, 1, `tf-tabs-item ${g === s() ? "active" : ""}`)), M(u, f);
  }), I(l), M(e, l), ue({
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
ie(ed, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var wm = (e, t, n) => t(c(n)), _m = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(c(n)));
}, xm = /* @__PURE__ */ G('<span class="tf-collapse-item-title-icon"><!></span>'), bm = /* @__PURE__ */ G('<div class="tf-collapse-item-description"><!></div>'), Cm = /* @__PURE__ */ G('<div class="tf-collapse-item-content"><!></div>'), km = /* @__PURE__ */ G('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), Em = /* @__PURE__ */ G("<div></div>");
const Sm = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function td(e, t) {
  ce(t, !0), Te(e, Sm);
  let n = m(t, "items", 7), r = m(t, "onChange", 7), o = m(t, "activeKeys", 31, () => Mt([]));
  function i(a) {
    o().includes(a.key) ? o(o().filter((l) => l !== a.key)) : (o().push(a.key), o(o())), r()?.(a, o());
  }
  var s = Em();
  return lt(s, 21, n, hr, (a, l, u) => {
    var d = km(), g = R(d);
    _e(g, "tabindex", u), g.__click = [wm, i, l], g.__keydown = [_m, i, l];
    var f = R(g);
    {
      var h = (b) => {
        var E = xm(), A = R(E);
        Pn(A, {
          get target() {
            return c(l).icon;
          }
        }), I(E), M(b, E);
      };
      se(f, (b) => {
        c(l).icon && b(h);
      });
    }
    var v = H(f, 2);
    Pn(v, {
      get target() {
        return c(l).title;
      }
    });
    var y = H(v, 2);
    I(g);
    var k = H(g, 2);
    {
      var w = (b) => {
        var E = bm(), A = R(E);
        Pn(A, {
          get target() {
            return c(l).description;
          }
        }), I(E), M(b, E);
      };
      se(k, (b) => {
        c(l).description && b(w);
      });
    }
    var D = H(k, 2);
    {
      var x = (b) => {
        var E = Cm(), A = R(E);
        Pn(A, {
          get target() {
            return c(l).content;
          }
        }), I(E), M(b, E);
      };
      se(D, (b) => {
        o().includes(c(l).key) && b(x);
      });
    }
    I(d), be((b) => wt(y, 1, `tf-collapse-item-title-arrow ${b ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(c(l).key) ? "rotate-90" : ""
    ]), M(a, d);
  }), I(s), be(() => {
    ft(s, t.style), wt(s, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), M(e, s), ue({
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
ie(td, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Pn(e, t) {
  ce(t, !0);
  let n = m(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = De(), o = le(r);
  {
    var i = (a) => {
      var l = De(), u = le(l);
      Ye(u, () => n() ?? rt), M(a, l);
    }, s = (a) => {
      var l = De(), u = le(l);
      Ds(u, n), M(a, l);
    };
    se(o, (a) => {
      typeof n() == "function" ? a(i) : a(s, !1);
    });
  }
  return M(e, r), ue({
    get target() {
      return n();
    },
    set target(a) {
      n(a), p();
    }
  });
}
ie(Pn, { target: {} }, [], [], !0);
var Nm = (e, t, n) => t(c(n)), Pm = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), Dm = /* @__PURE__ */ G('<div class="tf-select-content-children"><!></div>'), Tm = /* @__PURE__ */ G('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), Am = /* @__PURE__ */ G('<div class="tf-select-content nopan nodrag"><!></div>'), Mm = /* @__PURE__ */ G("<!> <!>", 1), Om = /* @__PURE__ */ G('<div class="tf-select-input-placeholder"> </div>'), Lm = /* @__PURE__ */ G('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), Hm = /* @__PURE__ */ G("<div><!></div>");
function dt(e, t) {
  ce(t, !0);
  const n = (w, D = rt) => {
    var x = De(), b = le(x);
    lt(b, 19, D, (E, A) => `${A}_${E.value}`, (E, A) => {
      var V = Tm(), B = le(V);
      B.__click = [Nm, v, A];
      var W = R(B), J = R(W);
      {
        var $ = (P) => {
          var C = Pm();
          M(P, C);
        };
        se(J, (P) => {
          c(A).children && c(A).children.length > 0 && P($);
        });
      }
      I(W);
      var S = H(W, 2);
      Pn(S, {
        get target() {
          return c(A).label;
        }
      }), I(B);
      var L = H(B, 2);
      {
        var _ = (P) => {
          var C = Dm(), O = R(C);
          n(O, () => c(A).children), I(C), M(P, C);
        };
        se(L, (P) => {
          c(A).children && c(A).children.length > 0 && (a() || u().includes(c(A).value)) && P(_);
        });
      }
      M(E, V);
    }), M(w, x);
  };
  let r = m(t, "items", 7), o = m(t, "onSelect", 7), i = m(t, "value", 23, () => []), s = m(t, "defaultValue", 23, () => []), a = m(t, "expandAll", 7, !0), l = m(t, "multiple", 7, !1), u = m(t, "expandValue", 23, () => []), d = m(t, "placeholder", 7), g = /* @__PURE__ */ Oe(t, [
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
    const w = [], D = (x) => {
      for (let b of x)
        i().length > 0 ? i().includes(b.value) && w.push(b) : s().includes(b.value) && w.push(b), b.children && b.children.length > 0 && D(b.children);
    };
    return D(r()), w;
  }), h;
  function v(w) {
    h?.hide(), o()?.(w);
  }
  var y = Hm();
  Ue(y, () => ({ ...g, class: `tf-select ${g.class ?? ""}` }));
  var k = R(y);
  return Nt(
    nr(k, {
      floating: (D) => {
        var x = Am(), b = R(x);
        n(b, r), I(x), M(D, x);
      },
      children: (D, x) => {
        var b = Lm();
        Ue(b, () => ({ class: "tf-select-input nopan nodrag", ...g }));
        var E = R(b);
        lt(
          E,
          23,
          () => c(f),
          (A, V) => `${V}_${A.value}`,
          (A, V, B) => {
            var W = De(), J = le(W);
            {
              var $ = (L) => {
                var _ = De(), P = le(_);
                {
                  var C = (O) => {
                    Pn(O, {
                      get target() {
                        return c(V).label;
                      }
                    });
                  };
                  se(P, (O) => {
                    c(B) === 0 && O(C);
                  });
                }
                M(L, _);
              }, S = (L) => {
                var _ = Mm(), P = le(_);
                Pn(P, {
                  get target() {
                    return c(V).label;
                  }
                });
                var C = H(P, 2);
                {
                  var O = (z) => {
                    var T = Ce(",");
                    M(z, T);
                  };
                  se(C, (z) => {
                    c(B) < c(f).length - 1 && z(O);
                  });
                }
                M(L, _);
              };
              se(J, (L) => {
                l() ? L(S, !1) : L($);
              });
            }
            M(A, W);
          },
          (A) => {
            var V = Om(), B = R(V, !0);
            I(V), be(() => Ve(B, d())), M(A, V);
          }
        ), I(E), ye(2), I(b), M(D, b);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (D) => h = D,
    () => h
  ), I(y), M(e, y), ue({
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
ie(
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
const jr = Math.min, cr = Math.max, Uo = Math.round, Ut = (e) => ({
  x: e,
  y: e
}), Vm = {
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
function go(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Jn(e) {
  return e.split("-")[0];
}
function ho(e) {
  return e.split("-")[1];
}
function nd(e) {
  return e === "x" ? "y" : "x";
}
function js(e) {
  return e === "y" ? "height" : "width";
}
const Im = /* @__PURE__ */ new Set(["top", "bottom"]);
function Dn(e) {
  return Im.has(Jn(e)) ? "y" : "x";
}
function Gs(e) {
  return nd(Dn(e));
}
function zm(e, t, n) {
  n === void 0 && (n = !1);
  const r = ho(e), o = Gs(e), i = js(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Jo(s)), [s, Jo(s)];
}
function Rm(e) {
  const t = Jo(e);
  return [rs(e), t, rs(t)];
}
function rs(e) {
  return e.replace(/start|end/g, (t) => $m[t]);
}
const ll = ["left", "right"], cl = ["right", "left"], Bm = ["top", "bottom"], Fm = ["bottom", "top"];
function Km(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? cl : ll : t ? ll : cl;
    case "left":
    case "right":
      return t ? Bm : Fm;
    default:
      return [];
  }
}
function qm(e, t, n, r) {
  const o = ho(e);
  let i = Km(Jn(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(rs)))), i;
}
function Jo(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Vm[t]);
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
function ul(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Dn(t), s = Gs(t), a = js(s), l = Jn(t), u = i === "y", d = r.x + r.width / 2 - o.width / 2, g = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
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
      x: D,
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
    d = D ?? d, g = x ?? g, h = {
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
  } = go(t, e), v = rd(h), k = a[f ? g === "floating" ? "reference" : "floating" : g], w = Qo(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(k))) == null || n ? k : k.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: l
  })), D = g === "floating" ? {
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
  }, E = Qo(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: D,
    offsetParent: x,
    strategy: l
  }) : D);
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
    } = go(e, t) || {};
    if (u == null)
      return {};
    const g = rd(d), f = {
      x: n,
      y: r
    }, h = Gs(o), v = js(h), y = await s.getDimensions(u), k = h === "y", w = k ? "top" : "left", D = k ? "bottom" : "right", x = k ? "clientHeight" : "clientWidth", b = i.reference[v] + i.reference[h] - f[h] - i.floating[v], E = f[h] - i.reference[h], A = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let V = A ? A[x] : 0;
    (!V || !await (s.isElement == null ? void 0 : s.isElement(A))) && (V = a.floating[x] || i.floating[v]);
    const B = b / 2 - E / 2, W = V / 2 - y[v] / 2 - 1, J = jr(g[w], W), $ = jr(g[D], W), S = J, L = V - y[v] - $, _ = V / 2 - y[v] / 2 + B, P = ns(S, _, L), C = !l.arrow && ho(o) != null && _ !== P && i.reference[v] / 2 - (_ < S ? J : $) - y[v] / 2 < 0, O = C ? _ < S ? _ - S : _ - L : 0;
    return {
      [h]: f[h] + O,
      data: {
        [h]: P,
        centerOffset: _ - P - O,
        ...C && {
          alignmentOffset: O
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
      } = go(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const w = Jn(o), D = Dn(a), x = Jn(a) === a, b = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), E = f || (x || !y ? [Jo(a)] : Rm(a)), A = v !== "none";
      !f && A && E.push(...qm(a, y, v, b));
      const V = [a, ...E], B = await od(t, k), W = [];
      let J = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && W.push(B[w]), g) {
        const _ = zm(o, s, b);
        W.push(B[_[0]], B[_[1]]);
      }
      if (J = [...J, {
        placement: o,
        overflows: W
      }], !W.every((_) => _ <= 0)) {
        var $, S;
        const _ = ((($ = i.flip) == null ? void 0 : $.index) || 0) + 1, P = V[_];
        if (P && (!(g === "alignment" ? D !== Dn(P) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        J.every((z) => z.overflows[0] > 0 && Dn(z.placement) === D)))
          return {
            data: {
              index: _,
              overflows: J
            },
            reset: {
              placement: P
            }
          };
        let C = (S = J.filter((O) => O.overflows[0] <= 0).sort((O, z) => O.overflows[1] - z.overflows[1])[0]) == null ? void 0 : S.placement;
        if (!C)
          switch (h) {
            case "bestFit": {
              var L;
              const O = (L = J.filter((z) => {
                if (A) {
                  const T = Dn(z.placement);
                  return T === D || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  T === "y";
                }
                return !0;
              }).map((z) => [z.placement, z.overflows.filter((T) => T > 0).reduce((T, F) => T + F, 0)]).sort((z, T) => z[1] - T[1])[0]) == null ? void 0 : L[0];
              O && (C = O);
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
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Jn(n), a = ho(n), l = Dn(n) === "y", u = jm.has(s) ? -1 : 1, d = i && l ? -1 : 1, g = go(t, e);
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
              y: D
            } = k;
            return {
              x: w,
              y: D
            };
          }
        },
        ...l
      } = go(e, t), u = {
        x: n,
        y: r
      }, d = await od(t, l), g = Dn(Jn(o)), f = nd(g);
      let h = u[f], v = u[g];
      if (i) {
        const k = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", D = h + d[k], x = h - d[w];
        h = ns(D, h, x);
      }
      if (s) {
        const k = g === "y" ? "top" : "left", w = g === "y" ? "bottom" : "right", D = v + d[k], x = v - d[w];
        v = ns(D, v, x);
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
function vo(e) {
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
  return xr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : tn(t) && vo(t) ? t : sd(t);
}
function ad(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = sd(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = kt(o);
  return i ? (os(s), t.concat(s, s.visualViewport || [], vo(o) ? o : [], [])) : t.concat(o, ad(o, []));
}
function os(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ld(e) {
  const t = It(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = tn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = Uo(n) !== i || Uo(r) !== s;
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
  let s = (i ? Uo(n.width) : n.width) / r, a = (i ? Uo(n.height) : n.height) / o;
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
      const k = ur(y), w = y.getBoundingClientRect(), D = It(y), x = w.left + (y.clientLeft + parseFloat(D.paddingLeft)) * k.x, b = w.top + (y.clientTop + parseFloat(D.paddingTop)) * k.y;
      l *= k.x, u *= k.y, d *= k.x, g *= k.y, l += x, u += b, v = kt(y), y = os(v);
    }
  }
  return Qo({
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
  if ((g || !g && !i) && ((Er(r) !== "body" || vo(s)) && (l = yi(r)), tn(r))) {
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
  return Qo(r);
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
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && h2.has(o.position) || vo(s) && !l && fd(e, s)) ? r = r.filter((d) => d !== s) : o = a, s = Hn(s);
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
    if ((Er(t) !== "body" || vo(o)) && (a = yi(t)), r) {
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
    }).then(({ x: w, y: D, placement: x, middlewareData: b }) => {
      if (Object.assign(u.style, {
        left: `${w}px`,
        top: `${D}px`
      }), l) {
        const { x: E, y: A } = b.arrow, V = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[x.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: E != null ? `${E}px` : "",
          top: A != null ? `${A}px` : "",
          right: "",
          bottom: "",
          [V]: "2px"
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
var D2 = /* @__PURE__ */ G('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function nr(e, t) {
  ce(t, !0);
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
  var u = D2(), d = R(u), g = R(d);
  Ye(g, n), I(d), Nt(d, (v) => i = v, () => i);
  var f = H(d, 2), h = R(f);
  return Ye(h, r), I(f), Nt(f, (v) => s = v, () => s), I(u), M(e, u), ue({
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
  ce(t, !0);
  const n = m(t, "children", 7), r = m(t, "level", 7, 1), o = m(t, "mt", 7), i = m(t, "mb", 7);
  var s = De(), a = le(s);
  return tg(a, () => `h${r()}`, !1, (l, u) => {
    Ue(l, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var d = De(), g = le(d);
    Ye(g, () => n() ?? rt), M(u, d);
  }), M(e, s), ue({
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
var T2 = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const A2 = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function po(e, t) {
  ce(t, !0), Te(e, A2);
  const n = /* @__PURE__ */ Oe(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Se(e, $e(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = T2();
      M(r, i);
    },
    $$slots: { default: !0 }
  })), ue();
}
ie(po, {}, [], [], !0);
const M2 = () => ({ deleteNode: (t) => {
  Be.removeNode(t), Be.updateEdges((n) => n.filter((r) => r.source !== t && r.target !== t));
} }), Qn = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, O2 = () => ({ copyNode: (t) => {
  const n = Be.getNode(t);
  if (n) {
    const r = Qn(), o = {
      ...n,
      id: r,
      position: { x: n.position.x + 50, y: n.position.y + 50 }
    };
    Be.updateNodes((i) => [...i.map((a) => ({ ...a, selected: !1 })), o]);
  }
} }), We = () => Tn("svelteflow__node_id"), Vn = () => Tn("tinyflow_options");
var L2 = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), H2 = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), V2 = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), $2 = /* @__PURE__ */ G('<div class="input-item svelte-1jesvb7">执行条件： <!></div>'), I2 = (e, t, n) => {
  const r = e.target.checked;
  t(n, { async: r });
}, z2 = (e, t, n) => {
  const r = e.target.checked;
  t(n, { loopEnable: r });
}, R2 = /* @__PURE__ */ G('<div class="input-item svelte-1jesvb7">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-1jesvb7">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-1jesvb7">退出条件： <!></div>', 1), B2 = /* @__PURE__ */ G('<div class="settings svelte-1jesvb7"><div class="input-item svelte-1jesvb7">节点名称： <!></div> <div class="input-item svelte-1jesvb7">参数描述： <!></div> <!> <label class="input-item-inline svelte-1jesvb7"><span>异步执行：</span> <input type="checkbox"/></label> <label class="input-item-inline svelte-1jesvb7"><span>循环执行：</span> <input type="checkbox"/></label> <!></div>'), F2 = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), K2 = /* @__PURE__ */ G('<div class="tf-node-toolbar svelte-1jesvb7"><!> <!> <!> <!></div>'), q2 = /* @__PURE__ */ G('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const Z2 = {
  hash: "svelte-1jesvb7",
  code: ".tf-node-toolbar.svelte-1jesvb7 {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-1jesvb7 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-1jesvb7 .input-item:where(.svelte-1jesvb7) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-1jesvb7 .input-item-inline:where(.svelte-1jesvb7) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function Ot(e, t) {
  ce(t, !0), Te(e, Z2);
  const n = m(t, "data", 7), r = m(t, "id", 7, ""), o = m(t, "icon", 7), i = m(t, "handle", 7), s = m(t, "children", 7), a = m(t, "allowExecute", 7, !0), l = m(t, "allowCopy", 7, !0), u = m(t, "allowDelete", 7, !0), d = m(t, "allowSetting", 7, !0), g = m(t, "allowSettingOfCondition", 7, !0), f = m(t, "showSourceHandle", 7, !0), h = m(t, "showTargetHandle", 7, !0), v = m(t, "onCollapse", 7);
  let y = n().expand ? ["key"] : [];
  const { updateNodeData: k, getNode: w } = ot(), D = /* @__PURE__ */ N(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: x } = M2(), { copyNode: b } = O2(), E = Vn(), A = () => {
    E.onNodeExecute?.(w(r()));
  };
  let V = We();
  var B = q2(), W = le(B);
  {
    var J = (T) => {
      Uu(T, {
        get position() {
          return we.Top;
        },
        align: "end",
        children: (F, Z) => {
          var j = K2(), re = R(j);
          {
            var te = (ne) => {
              Se(ne, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  x(r());
                },
                children: (oe, ae) => {
                  var ee = L2();
                  M(oe, ee);
                },
                $$slots: { default: !0 }
              });
            };
            se(re, (ne) => {
              u() && ne(te);
            });
          }
          var Q = H(re, 2);
          {
            var X = (ne) => {
              Se(ne, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  b(r());
                },
                children: (oe, ae) => {
                  var ee = H2();
                  M(oe, ee);
                },
                $$slots: { default: !0 }
              });
            };
            se(Q, (ne) => {
              l() && ne(X);
            });
          }
          var U = H(Q, 2);
          {
            var q = (ne) => {
              Se(ne, {
                class: "tf-node-toolbar-item",
                onclick: A,
                children: (oe, ae) => {
                  var ee = V2();
                  M(oe, ee);
                },
                $$slots: { default: !0 }
              });
            };
            se(U, (ne) => {
              a() && ne(q);
            });
          }
          var he = H(U, 2);
          {
            var fe = (ne) => {
              nr(ne, {
                placement: "bottom",
                floating: (ae) => {
                  var ee = B2(), ge = R(ee), de = H(R(ge));
                  je(de, {
                    style: "width: 100%;",
                    onchange: (Je) => {
                      const Qe = Je.target.value;
                      k(V, { title: Qe });
                    },
                    get value() {
                      return n().title;
                    }
                  }), I(ge);
                  var pe = H(ge, 2), K = H(R(pe));
                  Fe(K, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (Je) => {
                      const Qe = Je.target.value;
                      k(V, { description: Qe });
                    },
                    get value() {
                      return n().description;
                    }
                  }), I(pe);
                  var Ie = H(pe, 2);
                  {
                    var Ae = (Je) => {
                      var Qe = $2(), me = H(R(Qe));
                      Fe(me, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Re) => {
                          const _t = Re.target.value;
                          k(V, { condition: _t });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), I(Qe), M(Je, Qe);
                    };
                    se(Ie, (Je) => {
                      g() && Je(Ae);
                    });
                  }
                  var Le = H(Ie, 2), Ke = H(R(Le), 2);
                  Xt(Ke), Ke.__change = [I2, k, V], I(Le);
                  var He = H(Le, 2), gt = H(R(He), 2);
                  Xt(gt), gt.__change = [z2, k, V], I(He);
                  var qe = H(He, 2);
                  {
                    var et = (Je) => {
                      var Qe = R2(), me = le(Qe), Re = H(R(me));
                      const _t = /* @__PURE__ */ N(() => n().loopIntervalMs || "1000");
                      Fe(Re, {
                        rows: 1,
                        style: "width: 100%;",
                        onchange: (Rn) => {
                          const on = Rn.target.value;
                          k(V, { loopIntervalMs: on });
                        },
                        get value() {
                          return c(_t);
                        }
                      }), I(me);
                      var Xe = H(me, 2), Dt = H(R(Xe));
                      const tt = /* @__PURE__ */ N(() => n().maxLoopCount || "0");
                      Fe(Dt, {
                        rows: 1,
                        style: "width: 100%;",
                        onchange: (Rn) => {
                          const on = Rn.target.value;
                          k(V, { maxLoopCount: on });
                        },
                        get value() {
                          return c(tt);
                        }
                      }), I(Xe);
                      var Ft = H(Xe, 2), wi = H(R(Ft));
                      Fe(wi, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Rn) => {
                          const on = Rn.target.value;
                          k(V, { loopBreakCondition: on });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), I(Ft), M(Je, Qe);
                    };
                    se(qe, (Je) => {
                      n().loopEnable && Je(et);
                    });
                  }
                  I(ee), be(() => {
                    Ki(Ke, !!n().async), Ki(gt, !!n().loopEnable);
                  }), M(ae, ee);
                },
                children: (ae, ee) => {
                  Se(ae, {
                    class: "tf-node-toolbar-item",
                    children: (ge, de) => {
                      var pe = F2();
                      M(ge, pe);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            se(he, (ne) => {
              d() && ne(fe);
            });
          }
          I(j), M(F, j);
        },
        $$slots: { default: !0 }
      });
    };
    se(W, (T) => {
      (a() || l() || u()) && T(J);
    });
  }
  var $ = H(W, 2), S = H(R($), 2), L = R(S);
  td(L, {
    get items() {
      return c(D);
    },
    get activeKeys() {
      return y;
    },
    onChange: (T, F) => {
      k(r(), { expand: F?.includes("key") }), v()?.(F?.includes("key") ? "key" : "");
    }
  }), I(S), I($);
  var _ = H($, 2);
  {
    var P = (T) => {
      Ln(T, {
        type: "target",
        get position() {
          return we.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    se(_, (T) => {
      h() && T(P);
    });
  }
  var C = H(_, 2);
  {
    var O = (T) => {
      Ln(T, {
        type: "source",
        get position() {
          return we.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    se(C, (T) => {
      f() && T(O);
    });
  }
  var z = H(C, 2);
  return Ye(z, () => i() ?? rt), M(e, B), ue({
    get data() {
      return n();
    },
    set data(T) {
      n(T), p();
    },
    get id() {
      return r();
    },
    set id(T = "") {
      r(T), p();
    },
    get icon() {
      return o();
    },
    set icon(T) {
      o(T), p();
    },
    get handle() {
      return i();
    },
    set handle(T) {
      i(T), p();
    },
    get children() {
      return s();
    },
    set children(T) {
      s(T), p();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(T = !0) {
      a(T), p();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(T = !0) {
      l(T), p();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(T = !0) {
      u(T), p();
    },
    get allowSetting() {
      return d();
    },
    set allowSetting(T = !0) {
      d(T), p();
    },
    get allowSettingOfCondition() {
      return g();
    },
    set allowSettingOfCondition(T = !0) {
      g(T), p();
    },
    get showSourceHandle() {
      return f();
    },
    set showSourceHandle(T = !0) {
      f(T), p();
    },
    get showTargetHandle() {
      return h();
    },
    set showTargetHandle(T = !0) {
      h(T), p();
    },
    get onCollapse() {
      return v();
    },
    set onCollapse(T) {
      v(T), p();
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
var W2 = /* @__PURE__ */ G('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), X2 = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), j2 = /* @__PURE__ */ G('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const G2 = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function vd(e, t) {
  ce(t, !0), Te(e, G2);
  const n = m(t, "parameter", 7), r = m(t, "index", 7);
  let o = We(), i = /* @__PURE__ */ N(() => bn(o)), s = /* @__PURE__ */ N(() => ({
    ...n(),
    ...c(i)?.current?.data?.parameters[r()]
  }));
  const { updateNodeData: a } = ot(), l = (E, A) => {
    a(o, (V) => {
      let B = V.data.parameters;
      return B[r()][E] = A, { parameters: B };
    });
  }, u = (E) => {
    const A = E.target.value;
    l("name", A);
  }, d = (E) => {
    const A = E.target.checked;
    l("required", A);
  }, g = (E) => {
    const A = E.value;
    A && l("dataType", A);
  };
  let f;
  const h = () => {
    a(o, (E) => {
      let A = E.data.parameters;
      return A.splice(r(), 1), { parameters: [...A] };
    }), f?.hide();
  };
  var v = j2(), y = le(v), k = R(y);
  je(k, {
    style: "width: 100%;",
    get value() {
      return c(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: u
  }), I(y);
  var w = H(y, 2), D = R(w);
  Ju(D, {
    get checked() {
      return c(s).required;
    },
    onchange: d
  }), I(w);
  var x = H(w, 2), b = R(x);
  return Nt(
    nr(b, {
      placement: "bottom",
      floating: (A) => {
        var V = W2(), B = R(V), W = H(R(B));
        const J = /* @__PURE__ */ N(() => c(s).dataType ? [c(s).dataType] : ["String"]);
        dt(W, {
          get items() {
            return hd;
          },
          style: "width: 100%",
          onSelect: g,
          get value() {
            return c(J);
          }
        }), I(B);
        var $ = H(B, 2), S = H(R($));
        Fe(S, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return c(s).defaultValue;
          },
          onchange: (O) => {
            const z = O.target.value;
            l("defaultValue", z);
          }
        }), I($);
        var L = H($, 2), _ = H(R(L));
        Fe(_, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return c(s).description;
          },
          onchange: (O) => {
            const z = O.target.value;
            l("description", z);
          }
        }), I(L);
        var P = H(L, 2), C = R(P);
        Se(C, {
          onclick: h,
          children: (O, z) => {
            ye();
            var T = Ce("删除");
            M(O, T);
          },
          $$slots: { default: !0 }
        }), I(P), I(V), M(A, V);
      },
      children: (A, V) => {
        Se(A, {
          class: "input-btn-more",
          children: (B, W) => {
            var J = X2();
            M(B, J);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (A) => f = A,
    () => f
  ), I(x), M(e, v), ue({
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
ie(vd, { parameter: {}, index: {} }, [], [], !0);
var U2 = /* @__PURE__ */ G('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), J2 = /* @__PURE__ */ G('<div class="none-params svelte-3n0wca">无输入参数</div>'), Q2 = /* @__PURE__ */ G('<div class="input-container svelte-3n0wca"><!> <!></div>');
const ey = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function pd(e, t) {
  ce(t, !0), Te(e, ey);
  let n = We(), r = /* @__PURE__ */ N(() => bn(n)), o = /* @__PURE__ */ N(() => [...c(r)?.current?.data?.parameters || []]);
  var i = Q2(), s = R(i);
  {
    var a = (u) => {
      var d = U2();
      ye(4), M(u, d);
    };
    se(s, (u) => {
      c(o).length !== 0 && u(a);
    });
  }
  var l = H(s, 2);
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
      M(u, d);
    }
  ), I(i), M(e, i), ue();
}
ie(pd, {}, [], [], !0);
const Ur = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = Qn()), Ur(t.children);
}), e), Bt = () => {
  const { updateNodeData: e } = ot();
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
        return a ? a.push(i) : a = [...i], { [n]: [...a] };
      });
    }
  };
};
var ty = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), ny = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ry = /* @__PURE__ */ G('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const oy = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function md(e, t) {
  ce(t, !0), Te(e, oy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Oe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = We(), { addParameter: i } = Bt();
  return Ot(e, $e(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (a) => {
      var l = ty();
      M(a, l);
    },
    children: (a, l) => {
      var u = ry(), d = le(u), g = R(d);
      Ne(g, {
        level: 3,
        children: (v, y) => {
          ye();
          var k = Ce("输入参数");
          M(v, k);
        },
        $$slots: { default: !0 }
      });
      var f = H(g, 2);
      Se(f, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input" });
        },
        children: (v, y) => {
          var k = ny();
          M(v, k);
        },
        $$slots: { default: !0 }
      }), I(d);
      var h = H(d, 2);
      pd(h, {}), M(a, u);
    },
    $$slots: { icon: !0, default: !0 }
  })), ue({
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
  const t = We(), n = bn(t), r = /* @__PURE__ */ N(Rt), o = /* @__PURE__ */ N(() => c(r).nodes), i = /* @__PURE__ */ N(() => c(r).edges), s = /* @__PURE__ */ N(() => c(r).nodeLookup);
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
var iy = /* @__PURE__ */ G('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), sy = /* @__PURE__ */ G('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const ay = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function xd(e, t) {
  ce(t, !0), Te(e, ay), In(() => {
    c(l).refType || h({ value: "ref" });
  });
  const n = m(t, "parameter", 7), r = m(t, "index", 7), o = m(t, "dataKeyName", 7), i = m(t, "useChildrenOnly", 7);
  let s = We(), a = /* @__PURE__ */ N(() => bn(s)), l = /* @__PURE__ */ N(() => ({
    ...n(),
    ...c(a)?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: u } = ot(), d = ($, S) => {
    u(s, (L) => {
      let _ = L.data?.[o()];
      return _[r()] = { ..._[r()], [$]: S }, { [o()]: _ };
    });
  }, g = ($, S) => {
    const L = S.target.value;
    d($, L);
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
  var w = sy(), D = le(w), x = R(D);
  const b = /* @__PURE__ */ N(() => c(l).nameDisabled === !0);
  je(x, {
    style: "width: 100%;",
    get value() {
      return c(l).name;
    },
    placeholder: "请输入参数名称",
    get disabled() {
      return c(b);
    },
    oninput: ($) => g("name", $)
  }), I(D);
  var E = H(D, 2), A = R(E);
  {
    var V = ($) => {
      je($, {
        get value() {
          return c(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (S) => g("value", S)
      });
    }, B = ($, S) => {
      {
        var L = (_) => {
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
        se(
          $,
          (_) => {
            c(l).refType !== "input" && _(L);
          },
          S
        );
      }
    };
    se(A, ($) => {
      c(l).refType === "fixed" ? $(V) : $(B, !1);
    });
  }
  I(E);
  var W = H(E, 2), J = R(W);
  return Nt(
    nr(J, {
      placement: "bottom",
      floating: (S) => {
        var L = iy(), _ = R(L), P = H(R(_));
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
        var O = H(_, 2), z = H(R(O));
        Fe(z, {
          rows: 1,
          style: "width: 100%;",
          onchange: (re) => {
            g("defaultValue", re);
          },
          get value() {
            return c(l).defaultValue;
          }
        }), I(O);
        var T = H(O, 2), F = H(R(T));
        Fe(F, {
          rows: 3,
          style: "width: 100%;",
          onchange: (re) => {
            g("description", re);
          },
          get value() {
            return c(l).description;
          }
        }), I(T);
        var Z = H(T, 2), j = R(Z);
        Se(j, {
          onclick: y,
          children: (re, te) => {
            ye();
            var Q = Ce("删除");
            M(re, Q);
          },
          $$slots: { default: !0 }
        }), I(Z), I(L), M(S, L);
      },
      children: (S, L) => {
        po(S, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (S) => v = S,
    () => v
  ), I(W), M(e, w), ue({
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
ie(
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
var ly = /* @__PURE__ */ G('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), cy = /* @__PURE__ */ G('<div class="none-params svelte-1sm1mgi"> </div>'), uy = /* @__PURE__ */ G('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const dy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function pt(e, t) {
  ce(t, !0), Te(e, dy);
  const n = m(t, "noneParameterText", 7, "无输入参数"), r = m(t, "dataKeyName", 7, "parameters"), o = m(t, "useChildrenOnly", 7);
  let i = We(), s = /* @__PURE__ */ N(() => bn(i)), a = /* @__PURE__ */ N(() => [...c(s)?.current?.data?.[r()] || []]);
  var l = uy(), u = R(l);
  {
    var d = (f) => {
      var h = ly();
      ye(4), M(f, h);
    };
    se(u, (f) => {
      c(a).length !== 0 && f(d);
    });
  }
  var g = H(u, 2);
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
      var h = cy(), v = R(h, !0);
      I(h), be(() => Ve(v, n())), M(f, h);
    }
  ), I(l), M(e, l), ue({
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
ie(pt, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
var fy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), gy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), hy = /* @__PURE__ */ G('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const vy = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function bd(e, t) {
  ce(t, !0), Te(e, vy);
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
        var l = fy();
        M(a, l);
      },
      children: (a, l) => {
        var u = hy(), d = le(u), g = R(d);
        Ne(g, {
          level: 3,
          children: (v, y) => {
            ye();
            var k = Ce("输出参数");
            M(v, k);
          },
          $$slots: { default: !0 }
        });
        var f = H(g, 2);
        Se(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (v, y) => {
            var k = gy();
            M(v, k);
          },
          $$slots: { default: !0 }
        }), I(d);
        var h = H(d, 2);
        pt(h, { noneParameterText: "无输出参数", dataKeyName: "outputDefs" }), M(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue({
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
var py = /* @__PURE__ */ ve('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), my = /* @__PURE__ */ G('<div class="input-more-item svelte-1cfeest"><!></div>'), yy = /* @__PURE__ */ G('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), wy = /* @__PURE__ */ G('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const _y = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Cd(e, t) {
  ce(t, !0), Te(e, _y);
  const n = m(t, "parameter", 7), r = m(t, "position", 7), o = m(t, "dataKeyName", 7), i = m(t, "placeholder", 7, "请输入参数值");
  let s = We(), a = /* @__PURE__ */ N(() => bn(s)), l = /* @__PURE__ */ N(() => {
    let _ = c(a)?.current?.data?.[o()], P;
    if (_ && r().length > 0) {
      let C = _;
      for (let O = 0; O < r().length; O++) {
        const z = r()[O];
        O == r().length - 1 ? P = C[z] : C = C[z].children;
      }
    }
    return { ...n(), ...P };
  });
  const { updateNodeData: u } = ot(), d = (_, P) => {
    u(s, (C) => {
      const O = C.data?.[o()];
      if (O && r().length > 0) {
        let z = O;
        for (let T = 0; T < r().length; T++) {
          const F = r()[T];
          T == r().length - 1 ? z[F] = { ...z[F], [_]: P } : z = z[F].children;
        }
      }
      return { [o()]: [...Oi(O)] };
    });
  }, g = (_, P) => {
    const C = P.target.value;
    d(_, C);
  }, f = (_) => {
    const P = _.value;
    d("dataType", P);
  };
  let h;
  const v = () => {
    u(s, (_) => {
      let P = _.data?.[o()];
      if (P && r().length > 0) {
        let C = P;
        for (let O = 0; O < r().length; O++) {
          const z = r()[O];
          O == r().length - 1 ? C.splice(z, 1) : C = C[z].children;
        }
      }
      return { [o()]: [...Oi(P)] };
    }), h?.hide();
  }, y = () => {
    u(s, (_) => {
      let P = _.data?.[o()];
      if (P && r().length > 0) {
        let C = P;
        for (let O = 0; O < r().length; O++) {
          const z = r()[O];
          O == r().length - 1 ? C[z].children ? C[z].children.push({ id: Qn(), name: "newParam", dataType: "String" }) : C[z].children = [{ id: Qn(), name: "newParam", dataType: "String" }] : C = C[z].children;
        }
      }
      return { [o()]: [...Oi(P)] };
    });
  };
  var k = wy(), w = le(k), D = R(w);
  {
    var x = (_) => {
      var P = De(), C = le(P);
      lt(C, 17, r, hr, (O, z) => {
        ye();
        var T = Ce(" ");
        M(O, T);
      }), M(_, P);
    };
    se(D, (_) => {
      r().length > 1 && _(x);
    });
  }
  var b = H(D, 2);
  const E = /* @__PURE__ */ N(() => c(l).nameDisabled === !0);
  je(b, {
    style: "width: 100%;",
    get value() {
      return c(l).name;
    },
    get placeholder() {
      return i();
    },
    oninput: (_) => {
      g("name", _);
    },
    get disabled() {
      return c(E);
    }
  }), I(w);
  var A = H(w, 2), V = R(A);
  const B = /* @__PURE__ */ N(() => c(l).dataType ? [c(l).dataType] : []), W = /* @__PURE__ */ N(() => c(l).dataTypeDisabled === !0);
  dt(V, {
    get items() {
      return hd;
    },
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return c(B);
    },
    get disabled() {
      return c(W);
    },
    onSelect: f
  });
  var J = H(V, 2);
  {
    var $ = (_) => {
      Se(_, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: y,
        children: (P, C) => {
          var O = py();
          M(P, O);
        },
        $$slots: { default: !0 }
      });
    };
    se(J, (_) => {
      (c(l).dataType === "Object" || c(l).dataType === "Array") && c(l).addChildDisabled !== !0 && _($);
    });
  }
  I(A);
  var S = H(A, 2), L = R(S);
  return Nt(
    nr(L, {
      placement: "bottom",
      floating: (P) => {
        var C = yy(), O = R(C), z = H(R(O));
        const T = /* @__PURE__ */ N(() => c(l).defaultValue || "");
        Fe(z, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return c(T);
          },
          onchange: (Q) => {
            g("defaultValue", Q);
          }
        }), I(O);
        var F = H(O, 2), Z = H(R(F));
        const j = /* @__PURE__ */ N(() => c(l).description || "");
        Fe(Z, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return c(j);
          },
          onchange: (Q) => {
            g("description", Q);
          }
        }), I(F);
        var re = H(F, 2);
        {
          var te = (Q) => {
            var X = my(), U = R(X);
            Se(U, {
              onclick: v,
              children: (q, he) => {
                ye();
                var fe = Ce("删除");
                M(q, fe);
              },
              $$slots: { default: !0 }
            }), I(X), M(Q, X);
          };
          se(re, (Q) => {
            c(l).deleteDisabled !== !0 && Q(te);
          });
        }
        I(C), M(P, C);
      },
      children: (P, C) => {
        po(P, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (P) => h = P,
    () => h
  ), I(S), M(e, k), ue({
    get parameter() {
      return n();
    },
    set parameter(_) {
      n(_), p();
    },
    get position() {
      return r();
    },
    set position(_) {
      r(_), p();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(_) {
      o(_), p();
    },
    get placeholder() {
      return i();
    },
    set placeholder(_ = "请输入参数值") {
      i(_), p();
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
var xy = /* @__PURE__ */ G("<!> <!>", 1), by = /* @__PURE__ */ G('<div class="none-params svelte-1sm1mgi"> </div>'), Cy = /* @__PURE__ */ G('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), ky = /* @__PURE__ */ G('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Ey = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function kn(e, t) {
  ce(t, !0), Te(e, Ey);
  const n = (h, v = rt, y = rt) => {
    var k = De(), w = le(k);
    lt(
      w,
      19,
      v,
      (D) => `${D.id}_${D.children ? D.children.length : 0}`,
      (D, x, b) => {
        var E = xy(), A = le(E);
        const V = /* @__PURE__ */ N(() => [...y(), c(b)]);
        Cd(A, {
          get parameter() {
            return c(x);
          },
          get position() {
            return c(V);
          },
          get dataKeyName() {
            return o();
          },
          get placeholder() {
            return i();
          }
        });
        var B = H(A, 2);
        {
          var W = (J) => {
            var $ = /* @__PURE__ */ _s(() => [...y(), c(b)]);
            n(J, () => c(x).children, () => c($));
          };
          se(B, (J) => {
            c(x).children && J(W);
          });
        }
        M(D, E);
      },
      (D) => {
        var x = De(), b = le(x);
        {
          var E = (A) => {
            var V = by(), B = R(V, !0);
            I(V), be(() => Ve(B, r())), M(A, V);
          };
          se(b, (A) => {
            y().length === 0 && A(E);
          });
        }
        M(D, x);
      }
    ), M(h, k);
  }, r = m(t, "noneParameterText", 7, "无输出参数"), o = m(t, "dataKeyName", 7, "outputDefs"), i = m(t, "placeholder", 7, "请输入参数名称");
  let s = We(), a = /* @__PURE__ */ N(() => bn(s)), l = /* @__PURE__ */ N(() => [...c(a)?.current?.data?.[o()] || []]);
  var u = ky(), d = R(u);
  {
    var g = (h) => {
      var v = Cy();
      ye(4), M(h, v);
    };
    se(d, (h) => {
      c(l).length !== 0 && h(g);
    });
  }
  var f = H(d, 2);
  return n(f, () => c(l) || [], () => []), I(u), M(e, u), ue({
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
var Sy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), Ny = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Py = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), Dy = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), Ty = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), Ay = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), My = /* @__PURE__ */ G('<div class="heading svelte-q0cqsa"><!> <!></div> <!> <!> <div class="setting-title svelte-q0cqsa">模型</div> <div class="setting-item svelte-q0cqsa"><!> <!></div> <div class="setting-title svelte-q0cqsa">采样参数</div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="100" step="1"/></div></div> <div class="setting-title svelte-q0cqsa">系统提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="setting-title svelte-q0cqsa">用户提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="heading svelte-q0cqsa"><!> <!> <!></div> <!>', 1);
const Oy = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function kd(e, t) {
  ce(t, !0), Te(e, Oy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Oe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = We(), { addParameter: i } = Bt(), s = Vn();
  let a = /* @__PURE__ */ ke(Mt([]));
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
  return Ze(() => {
    n().outType || u("text");
  }), Ot(e, $e(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (g) => {
        var f = Sy();
        M(g, f);
      },
      children: (g, f) => {
        var h = My(), v = le(h), y = R(v);
        Ne(y, {
          level: 3,
          children: (ge, de) => {
            ye();
            var pe = Ce("输入参数");
            M(ge, pe);
          },
          $$slots: { default: !0 }
        });
        var k = H(y, 2);
        Se(k, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (ge, de) => {
            var pe = Ny();
            M(ge, pe);
          },
          $$slots: { default: !0 }
        }), I(v);
        var w = H(v, 2);
        pt(w, {});
        var D = H(w, 2);
        Ne(D, {
          level: 3,
          mt: "10px",
          children: (ge, de) => {
            ye();
            var pe = Ce("模型设置");
            M(ge, pe);
          },
          $$slots: { default: !0 }
        });
        var x = H(D, 4), b = R(x);
        const E = /* @__PURE__ */ N(() => n().llmId ? [n().llmId] : []);
        dt(b, {
          get items() {
            return c(a);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (ge) => {
            const de = ge.value;
            l(o, () => ({ llmId: de }));
          },
          get value() {
            return c(E);
          }
        });
        var A = H(b, 2);
        po(A, {}), I(x);
        var V = H(x, 4), B = R(V), W = R(B), J = R(W);
        I(W);
        var $ = H(W, 2);
        Xt($), $.__input = [Py, l, o], I(B), I(V);
        var S = H(V, 2), L = R(S), _ = R(L), P = R(_);
        I(_);
        var C = H(_, 2);
        Xt(C), C.__input = [Dy, l, o], I(L), I(S);
        var O = H(S, 2), z = R(O), T = R(z), F = R(T);
        I(T);
        var Z = H(T, 2);
        Xt(Z), Z.__input = [Ty, l, o], I(z), I(O);
        var j = H(O, 4), re = R(j);
        const te = /* @__PURE__ */ N(() => n().systemPrompt || "");
        Fe(re, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return c(te);
          },
          oninput: (ge) => {
            l(o, { systemPrompt: ge.target.value });
          }
        }), I(j);
        var Q = H(j, 4), X = R(Q);
        const U = /* @__PURE__ */ N(() => n().userPrompt || "");
        Fe(X, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return c(U);
          },
          oninput: (ge) => {
            l(o, { userPrompt: ge.target.value });
          }
        }), I(Q);
        var q = H(Q, 2), he = R(q);
        Ne(he, {
          level: 3,
          mt: "10px",
          children: (ge, de) => {
            ye();
            var pe = Ce("输出参数");
            M(ge, pe);
          },
          $$slots: { default: !0 }
        });
        var fe = H(he, 2);
        const ne = /* @__PURE__ */ N(() => n().outType ? [n().outType] : []);
        dt(fe, {
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
            return c(ne);
          }
        });
        var oe = H(fe, 2);
        {
          var ae = (ge) => {
            Se(ge, {
              class: "input-btn-more",
              style: "margin-left: 10px",
              onclick: () => {
                i(o, "outputDefs");
              },
              children: (de, pe) => {
                var K = Ay();
                M(de, K);
              },
              $$slots: { default: !0 }
            });
          };
          se(oe, (ge) => {
            n().outType === "json" && ge(ae);
          });
        }
        I(q);
        var ee = H(q, 2);
        kn(ee, {}), be(() => {
          Ve(J, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), So($, n().temperature ?? 0.5), Ve(P, `Top P: ${n().topP ?? 0.9 ?? ""}`), So(C, n().topP ?? 0.9), Ve(F, `Top K: ${n().topK ?? 50 ?? ""}`), So(Z, n().topK ?? 50);
        }), M(g, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue({
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
var Ly = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Hy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Vy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), $y = /* @__PURE__ */ G('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const Iy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Ed(e, t) {
  ce(t, !0), Te(e, Iy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Oe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  In(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = We(), { addParameter: i } = Bt(), { updateNodeData: s } = ot(), a = [
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
      icon: (u) => {
        var d = Ly();
        M(u, d);
      },
      children: (u, d) => {
        var g = $y(), f = le(g), h = R(f);
        Ne(h, {
          level: 3,
          children: ($, S) => {
            ye();
            var L = Ce("输入参数");
            M($, L);
          },
          $$slots: { default: !0 }
        });
        var v = H(h, 2);
        Se(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: ($, S) => {
            var L = Hy();
            M($, L);
          },
          $$slots: { default: !0 }
        }), I(f);
        var y = H(f, 2);
        pt(y, {});
        var k = H(y, 2);
        Ne(k, {
          level: 3,
          mt: "10px",
          children: ($, S) => {
            ye();
            var L = Ce("代码");
            M($, L);
          },
          $$slots: { default: !0 }
        });
        var w = H(k, 4), D = R(w);
        const x = /* @__PURE__ */ N(() => n().engine ? [n().engine] : ["qlexpress"]);
        dt(D, {
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
        var b = H(w, 4), E = R(b);
        const A = /* @__PURE__ */ N(() => n().code || "");
        Fe(E, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: ($) => {
            s(o, () => ({ code: $.target.value }));
          },
          get value() {
            return c(A);
          }
        }), I(b);
        var V = H(b, 2), B = R(V);
        Ne(B, {
          level: 3,
          mt: "10px",
          children: ($, S) => {
            ye();
            var L = Ce("输出参数");
            M($, L);
          },
          $$slots: { default: !0 }
        });
        var W = H(B, 2);
        Se(W, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: ($, S) => {
            var L = Vy();
            M($, L);
          },
          $$slots: { default: !0 }
        }), I(V);
        var J = H(V, 2);
        kn(J, {}), M(u, g);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue({
    get data() {
      return n();
    },
    set data(l) {
      n(l), p();
    }
  });
}
ie(Ed, { data: {} }, [], [], !0);
var zy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), Ry = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), By = /* @__PURE__ */ G('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Fy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Sd(e, t) {
  ce(t, !0), Te(e, Fy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Oe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = We(), { addParameter: i } = Bt(), { updateNodeData: s } = ot();
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
        var u = zy();
        M(l, u);
      },
      children: (l, u) => {
        var d = By(), g = le(d), f = R(g);
        Ne(f, {
          level: 3,
          children: (A, V) => {
            ye();
            var B = Ce("输入参数");
            M(A, B);
          },
          $$slots: { default: !0 }
        });
        var h = H(f, 2);
        Se(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (A, V) => {
            var B = Ry();
            M(A, B);
          },
          $$slots: { default: !0 }
        }), I(g);
        var v = H(g, 2);
        pt(v, {});
        var y = H(v, 2);
        Ne(y, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (A, V) => {
            ye();
            var B = Ce("模板内容");
            M(A, B);
          },
          $$slots: { default: !0 }
        });
        var k = H(y, 2), w = R(k);
        const D = /* @__PURE__ */ N(() => n().template || "");
        Fe(w, {
          rows: 10,
          placeholder: "请输入模板内容",
          style: "width: 100%",
          onchange: (A) => {
            s(o, () => ({ template: A.target.value }));
          },
          get value() {
            return c(D);
          }
        }), I(k);
        var x = H(k, 2), b = R(x);
        Ne(b, {
          level: 3,
          mt: "10px",
          children: (A, V) => {
            ye();
            var B = Ce("输出参数");
            M(A, B);
          },
          $$slots: { default: !0 }
        }), I(x);
        var E = H(x, 2);
        kn(E, {}), M(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue({
    get data() {
      return n();
    },
    set data(a) {
      n(a), p();
    }
  });
}
ie(Sd, { data: {} }, [], [], !0);
var Ky = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), qy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Zy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Yy = /* @__PURE__ */ G('<!> <div class="radio-group svelte-1dxz5e"><label class="svelte-1dxz5e"><!>none</label> <label class="svelte-1dxz5e"><!>form-data</label> <label class="svelte-1dxz5e"><!>x-www-form-urlencoded</label> <label class="svelte-1dxz5e"><!>json</label> <label class="svelte-1dxz5e"><!>raw</label></div>', 1), Wy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Xy = /* @__PURE__ */ G('<div class="heading svelte-1dxz5e" style="padding-top: 10px"><!> <!></div> <!>', 1), jy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Gy = /* @__PURE__ */ G('<div class="heading svelte-1dxz5e" style="padding-top: 10px"><!> <!></div> <!>', 1), Uy = /* @__PURE__ */ G('<div style="width: 100%"><!></div>'), Jy = /* @__PURE__ */ G('<div style="width: 100%"><!></div>'), Qy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ew = /* @__PURE__ */ G('<div class="heading svelte-1dxz5e"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1dxz5e"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class="heading svelte-1dxz5e"><!> <!></div> <!>', 1);
const tw = {
  hash: "svelte-1dxz5e",
  code: ".heading.svelte-1dxz5e {display:flex;margin-bottom:10px;}.radio-group.svelte-1dxz5e {display:flex;margin:10px 0;flex-wrap:wrap;}.radio-group.svelte-1dxz5e label:where(.svelte-1dxz5e) {display:flex;font-size:14px;box-sizing:border-box;}"
};
function Nd(e, t) {
  ce(t, !0), Te(e, tw);
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
  ], i = We(), { addParameter: s } = Bt(), { updateNodeData: a } = ot();
  return Ot(e, $e(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = Ky();
        M(u, d);
      },
      children: (u, d) => {
        var g = ew(), f = le(g), h = R(f);
        Ne(h, {
          level: 3,
          children: (X, U) => {
            ye();
            var q = Ce("输入参数");
            M(X, q);
          },
          $$slots: { default: !0 }
        });
        var v = H(h, 2);
        Se(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (X, U) => {
            var q = qy();
            M(X, q);
          },
          $$slots: { default: !0 }
        }), I(f);
        var y = H(f, 2);
        pt(y, {});
        var k = H(y, 2);
        Ne(k, {
          level: 3,
          mt: "10px",
          children: (X, U) => {
            ye();
            var q = Ce("URL 地址");
            M(X, q);
          },
          $$slots: { default: !0 }
        });
        var w = H(k, 2), D = R(w), x = R(D);
        const b = /* @__PURE__ */ N(() => n().method ? [n().method] : ["get"]);
        dt(x, {
          get items() {
            return o;
          },
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (X) => {
            const U = X.value;
            a(i, () => ({ method: U }));
          },
          get value() {
            return c(b);
          }
        }), I(D);
        var E = H(D, 2), A = R(E);
        const V = /* @__PURE__ */ N(() => n().url || "");
        je(A, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (X) => {
            a(i, () => ({ url: X.target.value }));
          },
          get value() {
            return c(V);
          }
        }), I(E), I(w);
        var B = H(w, 2), W = R(B);
        Ne(W, {
          level: 3,
          children: (X, U) => {
            ye();
            var q = Ce("Http 头信息");
            M(X, q);
          },
          $$slots: { default: !0 }
        });
        var J = H(W, 2);
        Se(J, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (X, U) => {
            var q = Zy();
            M(X, q);
          },
          $$slots: { default: !0 }
        }), I(B);
        var $ = H(B, 2);
        pt($, { dataKeyName: "headers" });
        var S = H($, 2);
        {
          var L = (X) => {
            var U = Yy(), q = le(U);
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
            var he = H(q, 2), fe = R(he), ne = R(fe);
            const oe = /* @__PURE__ */ N(() => !n().bodyType || n().bodyType === "");
            je(ne, {
              type: "radio",
              name: "bodyType",
              value: "",
              get checked() {
                return c(oe);
              },
              onchange: (qe) => {
                qe.target?.checked && a(i, { bodyType: "" });
              }
            }), ye(), I(fe);
            var ae = H(fe, 2), ee = R(ae);
            const ge = /* @__PURE__ */ N(() => n().bodyType === "form-data");
            je(ee, {
              type: "radio",
              name: "bodyType",
              value: "form-data",
              get checked() {
                return c(ge);
              },
              onchange: (qe) => {
                qe.target?.checked && a(i, { bodyType: "form-data" });
              }
            }), ye(), I(ae);
            var de = H(ae, 2), pe = R(de);
            const K = /* @__PURE__ */ N(() => n().bodyType === "x-www-form-urlencoded");
            je(pe, {
              type: "radio",
              name: "bodyType",
              value: "x-www-form-urlencoded",
              get checked() {
                return c(K);
              },
              onchange: (qe) => {
                qe.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
              }
            }), ye(), I(de);
            var Ie = H(de, 2), Ae = R(Ie);
            const Le = /* @__PURE__ */ N(() => n().bodyType === "json");
            je(Ae, {
              type: "radio",
              name: "bodyType",
              value: "json",
              get checked() {
                return c(Le);
              },
              onchange: (qe) => {
                qe.target?.checked && a(i, { bodyType: "json" });
              }
            }), ye(), I(Ie);
            var Ke = H(Ie, 2), He = R(Ke);
            const gt = /* @__PURE__ */ N(() => n().bodyType === "raw");
            je(He, {
              type: "radio",
              name: "bodyType",
              value: "raw",
              get checked() {
                return c(gt);
              },
              onchange: (qe) => {
                qe.target?.checked && a(i, { bodyType: "raw" });
              }
            }), ye(), I(Ke), I(he), M(X, U);
          };
          se(S, (X) => {
            (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && X(L);
          });
        }
        var _ = H(S, 2);
        {
          var P = (X) => {
            var U = Xy(), q = le(U), he = R(q);
            Ne(he, {
              level: 3,
              children: (oe, ae) => {
                ye();
                var ee = Ce("参数");
                M(oe, ee);
              },
              $$slots: { default: !0 }
            });
            var fe = H(he, 2);
            Se(fe, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (oe, ae) => {
                var ee = Wy();
                M(oe, ee);
              },
              $$slots: { default: !0 }
            }), I(q);
            var ne = H(q, 2);
            pt(ne, { dataKeyName: "formData" }), M(X, U);
          };
          se(_, (X) => {
            n().bodyType === "form-data" && X(P);
          });
        }
        var C = H(_, 2);
        {
          var O = (X) => {
            var U = Gy(), q = le(U), he = R(q);
            Ne(he, {
              level: 3,
              children: (oe, ae) => {
                ye();
                var ee = Ce("Body 参数");
                M(oe, ee);
              },
              $$slots: { default: !0 }
            });
            var fe = H(he, 2);
            Se(fe, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (oe, ae) => {
                var ee = jy();
                M(oe, ee);
              },
              $$slots: { default: !0 }
            }), I(q);
            var ne = H(q, 2);
            pt(ne, { dataKeyName: "formUrlencoded" }), M(X, U);
          };
          se(C, (X) => {
            n().bodyType === "x-www-form-urlencoded" && X(O);
          });
        }
        var z = H(C, 2);
        {
          var T = (X) => {
            var U = Uy(), q = R(U);
            Fe(q, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (he) => {
                a(i, { bodyJson: he.target.value });
              }
            }), I(U), M(X, U);
          };
          se(z, (X) => {
            n().bodyType === "json" && X(T);
          });
        }
        var F = H(z, 2);
        {
          var Z = (X) => {
            var U = Jy(), q = R(U);
            Fe(q, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (he) => {
                a(i, { bodyRaw: he.target.value });
              }
            }), I(U), M(X, U);
          };
          se(F, (X) => {
            n().bodyType === "raw" && X(Z);
          });
        }
        var j = H(F, 2), re = R(j);
        Ne(re, {
          level: 3,
          mt: "10px",
          children: (X, U) => {
            ye();
            var q = Ce("输出参数");
            M(X, q);
          },
          $$slots: { default: !0 }
        });
        var te = H(re, 2);
        Se(te, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (X, U) => {
            var q = Qy();
            M(X, q);
          },
          $$slots: { default: !0 }
        }), I(j);
        var Q = H(j, 2);
        kn(Q, {}), M(u, g);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue({
    get data() {
      return n();
    },
    set data(l) {
      n(l), p();
    }
  });
}
ie(Nd, { data: {} }, [], [], !0);
var nw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), rw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ow = /* @__PURE__ */ G('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const iw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Pd(e, t) {
  ce(t, !0), Te(e, iw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Oe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = We(), { addParameter: i } = Bt(), s = Vn();
  let a = /* @__PURE__ */ ke(Mt([]));
  In(async () => {
    const u = await s.provider?.knowledge?.();
    c(a).push(...u || []);
  });
  const { updateNodeData: l } = ot();
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
        var g = nw();
        M(d, g);
      },
      children: (d, g) => {
        var f = ow(), h = le(f), v = R(h);
        Ne(v, {
          level: 3,
          children: (L, _) => {
            ye();
            var P = Ce("输入参数");
            M(L, P);
          },
          $$slots: { default: !0 }
        });
        var y = H(v, 2);
        Se(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (L, _) => {
            var P = rw();
            M(L, P);
          },
          $$slots: { default: !0 }
        }), I(h);
        var k = H(h, 2);
        pt(k, {});
        var w = H(k, 2);
        Ne(w, {
          level: 3,
          mt: "10px",
          children: (L, _) => {
            ye();
            var P = Ce("知识库设置");
            M(L, P);
          },
          $$slots: { default: !0 }
        });
        var D = H(w, 4), x = R(D);
        const b = /* @__PURE__ */ N(() => n().knowledgeId ? [n().knowledgeId] : []);
        dt(x, {
          get items() {
            return c(a);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (L) => {
            const _ = L.value;
            l(o, () => ({ knowledgeId: _ }));
          },
          get value() {
            return c(b);
          }
        }), I(D);
        var E = H(D, 4), A = R(E);
        je(A, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (L) => {
            const _ = L.target.value;
            l(o, () => ({ keyword: _ }));
          }
        }), I(E);
        var V = H(E, 4), B = R(V);
        const W = /* @__PURE__ */ N(() => n().limit || "");
        je(B, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          onchange: (L) => {
            const _ = L.target.value;
            l(o, () => ({ limit: _ }));
          },
          get value() {
            return c(W);
          }
        }), I(V);
        var J = H(V, 2), $ = R(J);
        Ne($, {
          level: 3,
          mt: "10px",
          children: (L, _) => {
            ye();
            var P = Ce("输出参数");
            M(L, P);
          },
          $$slots: { default: !0 }
        }), I(J);
        var S = H(J, 2);
        kn(S, {}), M(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue({
    get data() {
      return n();
    },
    set data(u) {
      n(u), p();
    }
  });
}
ie(Pd, { data: {} }, [], [], !0);
var sw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), aw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), lw = /* @__PURE__ */ G('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const cw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Dd(e, t) {
  ce(t, !0), Te(e, cw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Oe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = We(), { addParameter: i } = Bt(), s = Vn();
  let a = /* @__PURE__ */ ke(Mt([]));
  In(async () => {
    const u = await s.provider?.searchEngine?.();
    c(a).push(...u || []);
  });
  const { updateNodeData: l } = ot();
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
        var g = sw();
        M(d, g);
      },
      children: (d, g) => {
        var f = lw(), h = le(f), v = R(h);
        Ne(v, {
          level: 3,
          children: (S, L) => {
            ye();
            var _ = Ce("输入参数");
            M(S, _);
          },
          $$slots: { default: !0 }
        });
        var y = H(v, 2);
        Se(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (S, L) => {
            var _ = aw();
            M(S, _);
          },
          $$slots: { default: !0 }
        }), I(h);
        var k = H(h, 2);
        pt(k, {});
        var w = H(k, 2);
        Ne(w, {
          level: 3,
          mt: "10px",
          children: (S, L) => {
            ye();
            var _ = Ce("搜索引擎设置");
            M(S, _);
          },
          $$slots: { default: !0 }
        });
        var D = H(w, 4), x = R(D);
        const b = /* @__PURE__ */ N(() => n().engine ? [n().engine] : []);
        dt(x, {
          get items() {
            return c(a);
          },
          style: "width: 100%",
          placeholder: "请选择搜索引擎",
          onSelect: (S) => {
            const L = S.value;
            l(o, () => ({ engine: L }));
          },
          get value() {
            return c(b);
          }
        }), I(D);
        var E = H(D, 4), A = R(E);
        je(A, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (S) => {
            const L = S.target.value;
            l(o, () => ({ keyword: L }));
          }
        }), I(E);
        var V = H(E, 4), B = R(V);
        je(B, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (S) => {
            const L = S.target.value;
            l(o, () => ({ limit: L }));
          }
        }), I(V);
        var W = H(V, 2), J = R(W);
        Ne(J, {
          level: 3,
          mt: "10px",
          children: (S, L) => {
            ye();
            var _ = Ce("输出参数");
            M(S, _);
          },
          $$slots: { default: !0 }
        }), I(W);
        var $ = H(W, 2);
        kn($, {}), M(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue({
    get data() {
      return n();
    },
    set data(u) {
      n(u), p();
    }
  });
}
ie(Dd, { data: {} }, [], [], !0);
var uw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), dw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), fw = /* @__PURE__ */ G('<div class="heading svelte-1eqcy61"><!></div> <!> <div class="heading svelte-1eqcy61"><!> <!></div> <!>', 1);
const gw = {
  hash: "svelte-1eqcy61",
  code: ".heading.svelte-1eqcy61 {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function Td(e, t) {
  ce(t, !0), Te(e, gw);
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
        var u = uw();
        M(l, u);
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
      children: (l, u) => {
        var d = fw(), g = le(d), f = R(g);
        Ne(f, {
          level: 3,
          children: (D, x) => {
            ye();
            var b = Ce("循环变量");
            M(D, b);
          },
          $$slots: { default: !0 }
        }), I(g);
        var h = H(g, 2);
        pt(h, { dataKeyName: "loopVars" });
        var v = H(h, 2), y = R(v);
        Ne(y, {
          level: 3,
          children: (D, x) => {
            ye();
            var b = Ce("输出参数");
            M(D, b);
          },
          $$slots: { default: !0 }
        });
        var k = H(y, 2);
        Se(k, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (D, x) => {
            var b = dw();
            M(D, b);
          },
          $$slots: { default: !0 }
        }), I(v);
        var w = H(v, 2);
        pt(w, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), M(l, d);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), ue({
    get data() {
      return n();
    },
    set data(s) {
      n(s), p();
    }
  });
}
ie(Td, { data: {} }, [], [], !0);
const hw = (e, t) => {
  const n = e.target.checked;
  t("required", n);
};
var vw = /* @__PURE__ */ G('<div class="input-more-setting svelte-2f9bnc"><div class="input-more-item svelte-2f9bnc">数据类型： <!></div> <div class="input-more-item svelte-2f9bnc">确认方式： <!></div> <div class="input-more-item svelte-2f9bnc">数据标题： <!></div> <div class="input-more-item svelte-2f9bnc">数据描述： <!></div> <label class="input-item-inline svelte-2f9bnc"><span>是否必填：</span> <input type="checkbox"/></label> <div class="input-more-item svelte-2f9bnc"><!></div></div>'), pw = /* @__PURE__ */ G('<div class="input-item svelte-2f9bnc"><!></div> <div class="input-item svelte-2f9bnc"><!></div> <div class="input-item svelte-2f9bnc"><!></div>', 1);
const mw = {
  hash: "svelte-2f9bnc",
  code: ".input-item.svelte-2f9bnc {display:flex;align-items:center;}.input-item-inline.svelte-2f9bnc {display:flex;align-items:center;font-size:12px;color:#666;}.input-more-setting.svelte-2f9bnc {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-2f9bnc .input-more-item:where(.svelte-2f9bnc) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Ad(e, t) {
  ce(t, !0), Te(e, mw);
  const n = m(t, "parameter", 7), r = m(t, "index", 7), o = m(t, "dataKeyName", 7), i = m(t, "useChildrenOnly", 7);
  let s = We(), a = bn(s), l = /* @__PURE__ */ N(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: u } = ot(), d = (_, P) => {
    u(s, (C) => {
      let O = C.data?.[o()];
      return O[r()] = { ...O[r()], [_]: P }, { [o()]: O };
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
  const D = [
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
  var b = pw(), E = le(b), A = R(E);
  const V = /* @__PURE__ */ N(() => c(l).nameDisabled === !0);
  je(A, {
    style: "width: 100%;",
    get value() {
      return c(l).name;
    },
    placeholder: "请输入参数名称",
    get disabled() {
      return c(V);
    },
    oninput: (_) => g("name", _)
  }), I(E);
  var B = H(E, 2), W = R(B);
  {
    var J = (_) => {
      je(_, {
        get value() {
          return c(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (P) => g("value", P)
      });
    }, $ = (_, P) => {
      {
        var C = (O) => {
          const z = /* @__PURE__ */ N(() => [c(l).ref]);
          dt(O, {
            get items() {
              return w.current;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return c(z);
            },
            expandAll: !0,
            onSelect: f
          });
        };
        se(
          _,
          (O) => {
            c(l).refType !== "input" && O(C);
          },
          P
        );
      }
    };
    se(W, (_) => {
      c(l).refType === "fixed" ? _(J) : _($, !1);
    });
  }
  I(B);
  var S = H(B, 2), L = R(S);
  return Nt(
    nr(L, {
      placement: "bottom",
      floating: (P) => {
        var C = vw(), O = R(C), z = H(R(O));
        const T = /* @__PURE__ */ N(() => c(l).selectionDataType ? [c(l).selectionDataType] : []);
        dt(z, {
          get items() {
            return D;
          },
          style: "width: 100%",
          defaultValue: ["text"],
          get value() {
            return c(T);
          },
          onSelect: v
        }), I(O);
        var F = H(O, 2), Z = H(R(F));
        const j = /* @__PURE__ */ N(() => c(l).selectionMode ? [c(l).selectionMode] : []);
        dt(Z, {
          get items() {
            return x;
          },
          style: "width: 100%",
          defaultValue: ["single"],
          get value() {
            return c(j);
          },
          onSelect: h
        }), I(F);
        var re = H(F, 2), te = H(R(re));
        Fe(te, {
          rows: 1,
          style: "width: 100%;",
          onchange: (ne) => {
            g("formLabel", ne);
          },
          get value() {
            return c(l).formLabel;
          }
        }), I(re);
        var Q = H(re, 2), X = H(R(Q));
        Fe(X, {
          rows: 2,
          style: "width: 100%;",
          onchange: (ne) => {
            g("formDescription", ne);
          },
          get value() {
            return c(l).formDescription;
          }
        }), I(Q);
        var U = H(Q, 2), q = H(R(U), 2);
        Xt(q), Ki(q, !1), q.__change = [hw, d], I(U);
        var he = H(U, 2), fe = R(he);
        Se(fe, {
          onclick: k,
          children: (ne, oe) => {
            ye();
            var ae = Ce("删除");
            M(ne, ae);
          },
          $$slots: { default: !0 }
        }), I(he), I(C), M(P, C);
      },
      children: (P, C) => {
        po(P, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (P) => y = P,
    () => y
  ), I(S), M(e, b), ue({
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
var yw = /* @__PURE__ */ G('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), ww = /* @__PURE__ */ G('<div class="none-params svelte-1sm1mgi"> </div>'), _w = /* @__PURE__ */ G('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const xw = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Md(e, t) {
  ce(t, !0), Te(e, xw);
  const n = m(t, "noneParameterText", 7, "无确认数据"), r = m(t, "dataKeyName", 7, "parameters"), o = m(t, "useChildrenOnly", 7);
  let i = We(), s = /* @__PURE__ */ N(() => bn(i)), a = /* @__PURE__ */ N(() => [...c(s)?.current?.data?.[r()] || []]);
  var l = _w(), u = R(l);
  {
    var d = (f) => {
      var h = yw();
      ye(4), M(f, h);
    };
    se(u, (f) => {
      c(a).length !== 0 && f(d);
    });
  }
  var g = H(u, 2);
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
      var h = ww(), v = R(h, !0);
      I(h), be(() => Ve(v, n())), M(f, h);
    }
  ), I(l), M(e, l), ue({
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
var bw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Cw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), kw = /* @__PURE__ */ G('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">消息内容</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Ew = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Od(e, t) {
  ce(t, !0), Te(e, Ew);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Oe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = We(), { addParameter: i } = Bt(), { updateNodeData: s } = ot();
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
        var u = bw();
        M(l, u);
      },
      children: (l, u) => {
        var d = kw(), g = le(d), f = R(g);
        Ne(f, {
          level: 3,
          children: (A, V) => {
            ye();
            var B = Ce("确认数据");
            M(A, B);
          },
          $$slots: { default: !0 }
        });
        var h = H(f, 2);
        Se(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "confirms");
          },
          children: (A, V) => {
            var B = Cw();
            M(A, B);
          },
          $$slots: { default: !0 }
        }), I(g);
        var v = H(g, 2);
        Md(v, { dataKeyName: "confirms", noneParameterText: "无确认数据" });
        var y = H(v, 2);
        Ne(y, {
          level: 3,
          mt: "10px",
          children: (A, V) => {
            ye();
            var B = Ce("确认消息");
            M(A, B);
          },
          $$slots: { default: !0 }
        });
        var k = H(y, 4), w = R(k);
        const D = /* @__PURE__ */ N(() => n().message || "");
        Fe(w, {
          rows: 5,
          placeholder: "请输入用户需要确认的消息内容",
          style: "width: 100%",
          onchange: (A) => {
            s(o, () => ({ message: A.target.value }));
          },
          get value() {
            return c(D);
          }
        }), I(k);
        var x = H(k, 2), b = R(x);
        Ne(b, {
          level: 3,
          mt: "10px",
          children: (A, V) => {
            ye();
            var B = Ce("输出参数");
            M(A, B);
          },
          $$slots: { default: !0 }
        }), I(x);
        var E = H(x, 2);
        kn(E, { placeholder: "" }), M(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue({
    get data() {
      return n();
    },
    set data(a) {
      n(a), p();
    }
  });
}
ie(Od, { data: {} }, [], [], !0);
const Sw = {
  startNode: md,
  codeNode: Ed,
  confirmNode: Od,
  llmNode: kd,
  templateNode: Sd,
  httpNode: Nd,
  knowledgeNode: Pd,
  searchEngineNode: Dd,
  loopNode: Td,
  endNode: bd
};
var Nw = /* @__PURE__ */ G("<!> ", 1);
function ss(e, t) {
  ce(t, !0);
  const n = m(t, "icon", 7), r = m(t, "title", 7), o = m(t, "type", 7), i = m(t, "description", 7), s = m(t, "extra", 7);
  return Se(e, {
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
      var d = Nw(), g = le(d);
      Ds(g, n);
      var f = H(g);
      be(() => Ve(f, ` ${r() ?? ""}`)), M(l, d);
    },
    $$slots: { default: !0 }
  }), ue({
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
var Pw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), Dw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), Tw = /* @__PURE__ */ G('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Ld(e, t) {
  ce(t, !0);
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
  ], s = [], a = Vn(), l = a.customNodes;
  if (l) {
    const w = Object.keys(l).sort((D, x) => (l[D].sortNo || 0) - (l[x].sortNo || 0));
    for (let D of w)
      l[D].group === "base" ? o.push({ type: D, ...l[D] }) : s.push({
        icon: l[D].icon,
        title: l[D].title,
        type: D
      });
    o.sort((D, x) => (D.sortNo || 0) - (x.sortNo || 0));
  }
  if (a.hiddenNodes) {
    const w = typeof a.hiddenNodes == "function" ? a.hiddenNodes() : a.hiddenNodes;
    if (Array.isArray(w)) {
      for (let D of w)
        for (let x = 0; x < o.length; x++)
          if (o[x].type === D) {
            o.splice(x, 1);
            break;
          }
    }
  }
  var u = Tw(), d = R(u), g = R(d), f = R(g);
  ed(f, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (w) => {
      Y(n, w.value.toString(), !0);
    }
  }), I(g);
  var h = H(g, 2), v = R(h);
  lt(v, 21, () => o, hr, (w, D) => {
    ss(w, $e(() => c(D)));
  }), I(v);
  var y = H(v, 2);
  lt(y, 21, () => s, hr, (w, D) => {
    ss(w, $e(() => c(D)));
  }), I(y), I(h), I(d);
  var k = H(d, 2);
  Se(k, {
    onclick: () => {
      Y(r, c(r) ? "" : "show", !0);
    },
    children: (w, D) => {
      var x = De(), b = le(x);
      {
        var E = (V) => {
          var B = Pw();
          M(V, B);
        }, A = (V) => {
          var B = Dw();
          M(V, B);
        };
        se(b, (V) => {
          c(r) === "show" ? V(E) : V(A, !1);
        });
      }
      M(w, x);
    },
    $$slots: { default: !0 }
  }), I(u), be(() => {
    wt(u, 1, `tf-toolbar ${c(r) ?? ""}`), ft(v, `display: ${c(n) === "base" ? "flex" : "none"}`), ft(y, `display: ${c(n) !== "base" ? "flex" : "none"}`);
  }), M(e, u), ue();
}
ie(Ld, {}, [], [], !0);
const Aw = () => ({ getNode: (t) => Be.getNode(t) }), Mw = () => ({ ensureParentInNodesBefore: (t, n) => {
  Be.updateNodes((r) => {
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
} }), Ow = () => ({ getEdgesByTarget: (t) => Be.getEdges().filter((r) => r.target === t) });
var Lw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Hw = /* @__PURE__ */ G('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Vw = /* @__PURE__ */ G('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), $w = /* @__PURE__ */ G('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Iw = /* @__PURE__ */ G('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input/></div></div>', 1), zw = /* @__PURE__ */ G('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Rw = /* @__PURE__ */ G('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Bw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Fw = /* @__PURE__ */ G('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Kw = /* @__PURE__ */ G("<!> <!> <div></div> <!>", 1);
const qw = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Hd(e, t) {
  ce(t, !0), Te(e, qw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Oe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = We(), { addParameter: i } = Bt(), s = ot(), { updateNodeData: a } = s, l = (w) => {
    a(o, w);
  }, u = (w, D) => {
    l({ [w]: D.target?.value });
  }, d = { ...r, id: o, data: n() }, g = document.createElement("div"), h = Vn().customNodes[t.type];
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
        return c(k);
      }
    },
    () => r,
    {
      icon: (D) => {
        var x = De(), b = le(x);
        Ds(b, () => h.icon), M(D, x);
      },
      children: (D, x) => {
        var b = Kw(), E = le(b);
        {
          var A = (S) => {
            var L = Hw(), _ = le(L), P = R(_);
            Ne(P, {
              level: 3,
              children: (T, F) => {
                ye();
                var Z = Ce("输入参数");
                M(T, Z);
              },
              $$slots: { default: !0 }
            });
            var C = H(P, 2);
            {
              var O = (T) => {
                Se(T, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    i(o);
                  },
                  children: (F, Z) => {
                    var j = Lw();
                    M(F, j);
                  },
                  $$slots: { default: !0 }
                });
              };
              se(C, (T) => {
                h.parametersAddEnable !== !1 && T(O);
              });
            }
            I(_);
            var z = H(_, 2);
            pt(z, {}), M(S, L);
          };
          se(E, (S) => {
            h.parametersEnable !== !1 && S(A);
          });
        }
        var V = H(E, 2);
        {
          var B = (S) => {
            var L = De(), _ = le(L);
            lt(_, 17, () => v, hr, (P, C) => {
              var O = De(), z = le(O);
              {
                var T = (Z) => {
                  var j = Vw(), re = le(j), te = R(re, !0);
                  I(re);
                  var Q = H(re, 2), X = R(Q);
                  const U = /* @__PURE__ */ N(() => n()[c(C).name] || c(C).defaultValue);
                  je(X, $e(
                    {
                      get placeholder() {
                        return c(C).placeholder;
                      },
                      style: "width: 100%",
                      get value() {
                        return c(U);
                      }
                    },
                    () => c(C).attrs,
                    {
                      onchange: (q) => {
                        u(c(C).name, q);
                      }
                    }
                  )), I(Q), be(() => Ve(te, c(C).label)), M(Z, j);
                }, F = (Z, j) => {
                  {
                    var re = (Q) => {
                      var X = $w(), U = le(X), q = R(U, !0);
                      I(U);
                      var he = H(U, 2), fe = R(he);
                      const ne = /* @__PURE__ */ N(() => n()[c(C).name] || c(C).defaultValue);
                      Fe(fe, $e(
                        {
                          rows: 3,
                          get placeholder() {
                            return c(C).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return c(ne);
                          }
                        },
                        () => c(C).attrs,
                        {
                          onchange: (oe) => {
                            u(c(C).name, oe);
                          }
                        }
                      )), I(he), be(() => Ve(q, c(C).label)), M(Q, X);
                    }, te = (Q, X) => {
                      {
                        var U = (he) => {
                          var fe = Iw(), ne = le(fe), oe = R(ne, !0);
                          I(ne);
                          var ae = H(ne, 2), ee = R(ae), ge = R(ee), de = R(ge);
                          I(ge);
                          var pe = H(ge, 2);
                          Xt(pe);
                          var K = (Ie) => l({ [c(C).name]: parseFloat(Ie.target.value) });
                          Ue(
                            pe,
                            () => ({
                              class: "nodrag",
                              type: "range",
                              ...c(C).attrs,
                              value: n()[c(C).name] ?? c(C).defaultValue,
                              oninput: K
                            }),
                            void 0,
                            "svelte-q0cqsa"
                          ), I(ee), I(ae), be(() => {
                            Ve(oe, c(C).label), Ve(de, `${c(C).description ?? ""}: ${n()[c(C).name] ?? c(C).defaultValue ?? ""}`);
                          }), M(he, fe);
                        }, q = (he, fe) => {
                          {
                            var ne = (ae) => {
                              var ee = zw(), ge = le(ee), de = R(ge, !0);
                              I(ge);
                              var pe = H(ge, 2), K = R(pe);
                              const Ie = /* @__PURE__ */ N(() => c(C).options || []), Ae = /* @__PURE__ */ N(() => n()[c(C).name] ? [n()[c(C).name]] : [c(C).defaultValue]);
                              dt(K, {
                                get items() {
                                  return c(Ie);
                                },
                                style: "width: 100%",
                                get placeholder() {
                                  return c(C).placeholder;
                                },
                                onSelect: (Le) => {
                                  const Ke = Le.value;
                                  l({ [c(C).name]: Ke });
                                },
                                get value() {
                                  return c(Ae);
                                }
                              }), I(pe), be(() => Ve(de, c(C).label)), M(ae, ee);
                            }, oe = (ae, ee) => {
                              {
                                var ge = (pe) => {
                                  var K = Rw(), Ie = le(K), Ae = R(Ie, !0);
                                  I(Ie);
                                  var Le = H(Ie, 2), Ke = R(Le);
                                  const He = /* @__PURE__ */ N(() => c(C).chosen?.buttonText);
                                  Qu(Ke, {
                                    style: "width: 100%",
                                    get placeholder() {
                                      return c(C).placeholder;
                                    },
                                    get buttonText() {
                                      return c(He);
                                    },
                                    onChosen: (gt, qe, et) => {
                                      c(C).chosen?.onChosen?.(l, gt, qe, et);
                                    },
                                    get value() {
                                      return n()[c(C).chosen?.valueDataKey || ""];
                                    },
                                    get label() {
                                      return n()[c(C).chosen?.labelDataKey || ""];
                                    }
                                  }), I(Le), be(() => Ve(Ae, c(C).label)), M(pe, K);
                                }, de = (pe, K) => {
                                  {
                                    var Ie = (Ae) => {
                                      Ne(Ae, $e({ level: 3, mt: "10px" }, () => c(C).attrs, {
                                        children: (Le, Ke) => {
                                          ye();
                                          var He = Ce();
                                          be(() => Ve(He, c(C).label)), M(Le, He);
                                        },
                                        $$slots: { default: !0 }
                                      }));
                                    };
                                    se(
                                      pe,
                                      (Ae) => {
                                        c(C).type === "heading" && Ae(Ie);
                                      },
                                      K
                                    );
                                  }
                                };
                                se(
                                  ae,
                                  (pe) => {
                                    c(C).type === "chosen" ? pe(ge) : pe(de, !1);
                                  },
                                  ee
                                );
                              }
                            };
                            se(
                              he,
                              (ae) => {
                                c(C).type === "select" ? ae(ne) : ae(oe, !1);
                              },
                              fe
                            );
                          }
                        };
                        se(
                          Q,
                          (he) => {
                            c(C).type === "slider" ? he(U) : he(q, !1);
                          },
                          X
                        );
                      }
                    };
                    se(
                      Z,
                      (Q) => {
                        c(C).type === "textarea" ? Q(re) : Q(te, !1);
                      },
                      j
                    );
                  }
                };
                se(z, (Z) => {
                  c(C).type === "input" ? Z(T) : Z(F, !1);
                });
              }
              M(P, O);
            }), M(S, L);
          };
          se(V, (S) => {
            v && S(B);
          });
        }
        var W = H(V, 2);
        Nt(W, (S) => y = S, () => y);
        var J = H(W, 2);
        {
          var $ = (S) => {
            var L = Fw(), _ = le(L), P = R(_);
            Ne(P, {
              level: 3,
              mt: "10px",
              children: (T, F) => {
                ye();
                var Z = Ce("输出参数");
                M(T, Z);
              },
              $$slots: { default: !0 }
            });
            var C = H(P, 2);
            {
              var O = (T) => {
                Se(T, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    i(o, "outputDefs");
                  },
                  children: (F, Z) => {
                    var j = Bw();
                    M(F, j);
                  },
                  $$slots: { default: !0 }
                });
              };
              se(C, (T) => {
                h.outputDefsAddEnable !== !1 && T(O);
              });
            }
            I(_);
            var z = H(_, 2);
            kn(z, {}), M(S, L);
          };
          se(J, (S) => {
            h.outputDefsEnable !== !1 && S($);
          });
        }
        be(() => {
          ft(W, h.rootStyle || ""), wt(W, 1, xn(h.rootClass), "svelte-q0cqsa");
        }), M(D, b);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue({
    get data() {
      return n();
    },
    set data(w) {
      n(w), p();
    }
  });
}
ie(Hd, { data: {} }, [], [], !0);
const Zw = () => ({ updateEdgeData: (t, n, r) => {
  const o = Be.getEdge(t);
  if (!o)
    return;
  const i = typeof n == "function" ? n(o) : n;
  o.data = r?.replace ? i : { ...o.data, ...i }, Be.updateEdges((s) => s.map((a) => a.id === t ? o : a));
} }), Yw = () => ({ deleteEdge: (t) => {
  Be.removeEdge(t);
} });
var Ww = /* @__PURE__ */ G('<div class="panel-content svelte-80qc4q"><div>边属性设置</div> <div class="setting-title svelte-80qc4q">边条件设置</div> <div class="setting-item svelte-80qc4q"><!></div> <div class="setting-item svelte-80qc4q" style="padding: 8px 0"><!> <!></div></div>'), Xw = /* @__PURE__ */ G("<!> <!> <!> <!>", 1), jw = /* @__PURE__ */ G('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const Gw = {
  hash: "svelte-80qc4q",
  code: ".panel-content.svelte-80qc4q {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-80qc4q {margin:10px 0;font-size:12px;color:#999;}.setting-item.svelte-80qc4q {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function Vd(e, t) {
  ce(t, !0), Te(e, Gw);
  const n = m(t, "onInit", 7), r = ot();
  n()(r);
  let o = /* @__PURE__ */ ke(!1), i = /* @__PURE__ */ ke(null);
  const { updateEdgeData: s } = Zw(), a = (C) => {
    C.preventDefault(), C.dataTransfer && (C.dataTransfer.dropEffect = "move");
  }, l = (C) => {
    C.preventDefault();
    const O = r.screenToFlowPosition({ x: C.clientX - 250, y: C.clientY - 100 }), z = C.dataTransfer?.getData("application/tinyflow");
    if (!z)
      return;
    const T = JSON.parse(z), F = { id: `node_${Qn()}`, position: O, data: {}, ...T };
    Be.addNode(F), Be.selectNodeOnly(F.id);
  }, { getNode: u } = Aw(), d = (C) => {
    const O = u(C.source), z = u(C.target);
    if (C.sourceHandle === "loop_handle" || O.parentId) {
      const T = r.getEdges();
      for (let F of T)
        if (F.target === C.target) {
          const Z = u(F.source);
          if (C.sourceHandle === "loop_handle" && Z.parentId !== O.id || O.parentId && Z.parentId !== O.parentId)
            return !1;
        }
    }
    return !(!O.parentId && z.parentId && z.parentId !== O.id);
  }, { ensureParentInNodesBefore: g } = Mw(), f = (C, O) => {
    if (!O.isValid)
      return;
    const z = O.toNode;
    if (z.parentId)
      return;
    const T = O.fromNode, F = O.fromHandle, Z = { position: { ...z.position } };
    if (F.id === "loop_handle" ? Z.parentId = T.id : T.parentId && (Z.parentId = T.parentId), Z.parentId) {
      const j = u(Z.parentId);
      Z.position = {
        x: z.position.x - j.position.x,
        y: z.position.y - j.position.y
      }, g(Z.parentId, z.id), r.updateNode(z.id, Z);
    }
    setTimeout(() => {
      Be.getEdges().forEach((j) => {
        j.target === z.id && j.source == T.id && (Y(o, !0), Y(i, j, !0));
      });
    });
  }, { getEdgesByTarget: h } = Ow(), v = (C) => {
    C.edges.forEach((z) => {
      z.id === c(i)?.id && (Y(i, null), Y(o, !1));
      const T = u(z.target);
      if (T && T.parentId) {
        const F = h(z.target), Z = u(T.parentId);
        if (F.length === 0)
          r.updateNode(T.id, {
            parentId: void 0,
            position: {
              x: T.position.x + Z.position.x,
              y: T.position.y + Z.position.y
            }
          });
        else {
          let j = !1;
          for (let re = 0; re < F.length; re++) {
            const te = F[re], Q = u(te.source);
            if (Q.parentId || Q.type === "loopNode") {
              j = !0;
              break;
            }
          }
          j || r.updateNode(T.id, {
            parentId: void 0,
            position: {
              x: T.position.x + Z.position.x,
              y: T.position.y + Z.position.y
            }
          });
        }
      }
    });
  }, { deleteEdge: y } = Yw(), k = (C, O) => {
  }, w = (C) => {
  }, D = {
    // ...nodeTypes
  }, x = Vn().customNodes;
  if (x)
    for (let C of Object.keys(x))
      D[C] = Hd;
  const b = Vn().onDataChange;
  Ze(() => {
    b?.({
      nodes: Be.getNodes(),
      edges: Be.getEdges(),
      viewport: Be.getViewport()
    });
  });
  var E = jw(), A = R(E);
  const V = /* @__PURE__ */ N(() => ({ ...Sw, ...D }));
  var B = Be.getNodes, W = Be.setNodes, J = Be.getEdges, $ = Be.setEdges, S = Be.getViewport, L = Be.setViewport;
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
  Iu(A, {
    get nodeTypes() {
      return c(V);
    },
    get nodes() {
      return B();
    },
    set nodes(C) {
      W(C);
    },
    get edges() {
      return J();
    },
    set edges(C) {
      $(C);
    },
    get viewport() {
      return S();
    },
    set viewport(C) {
      L(C);
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
      Y(o, !0), Y(i, C.edge, !0);
    },
    onbeforeconnect: (C) => ({ ...C, id: Qn() }),
    ondelete: v,
    onclick: (C) => {
      const O = C.target;
      O.classList.contains("svelte-flow__edge-interaction") || O.classList.contains("panel-content") || O.closest(".panel-content") || (Y(o, !1), Y(i, null));
    },
    get defaultEdgeOptions() {
      return c(_);
    },
    children: (C, O) => {
      var z = Xw(), T = le(z);
      Xu(T, {});
      var F = H(T, 2);
      Zu(F, {});
      var Z = H(F, 2);
      Gu(Z, {});
      var j = H(Z, 2);
      {
        var re = (te) => {
          fo(te, {
            children: (Q, X) => {
              var U = Ww(), q = H(R(U), 4), he = R(q);
              const fe = /* @__PURE__ */ N(() => c(i)?.data?.condition);
              Fe(he, {
                rows: 3,
                placeholder: "请输入边条件",
                style: "width: 100%",
                get value() {
                  return c(fe);
                },
                onchange: (ee) => {
                  c(i) && s(c(i).id, { condition: ee.target?.value });
                }
              }), I(q);
              var ne = H(q, 2), oe = R(ne);
              Se(oe, {
                onclick: () => {
                  y(c(i)?.id), Y(o, !1);
                },
                children: (ee, ge) => {
                  ye();
                  var de = Ce("删除");
                  M(ee, de);
                },
                $$slots: { default: !0 }
              });
              var ae = H(oe, 2);
              Se(ae, {
                primary: !0,
                onclick: () => {
                  Y(o, !1);
                },
                children: (ee, ge) => {
                  ye();
                  var de = Ce("保存");
                  M(ee, de);
                },
                $$slots: { default: !0 }
              }), I(ne), I(U), M(Q, U);
            },
            $$slots: { default: !0 }
          });
        };
        se(j, (te) => {
          c(o) && te(re);
        });
      }
      M(C, z);
    },
    $$slots: { default: !0 }
  });
  var P = H(A, 2);
  return Ld(P, {}), I(E), M(e, E), ue({
    get onInit() {
      return n();
    },
    set onInit(C) {
      n(C), p();
    }
  });
}
ie(Vd, { onInit: {} }, [], [], !0);
function Uw(e, t) {
  ce(t, !0);
  const n = m(t, "options", 7), r = m(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  return Be.init(o?.nodes || [], o?.edges || []), fr("tinyflow_options", n()), zu(e, {
    children: (i, s) => {
      Vd(i, {
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
customElements.define("tinyflow-component", ie(Uw, { options: {}, onInit: {} }, [], [], !1));
export {
  e_ as Tinyflow
};
//# sourceMappingURL=index.js.map
