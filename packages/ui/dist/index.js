const Ld = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Ld);
const is = 1, ss = 2, vl = 4, $d = 8, Id = 16, zd = 1, Rd = 2, pl = 4, Bd = 8, qd = 16, ml = 1, Fd = 2, as = "[", ls = "[!", cs = "]", qn = {}, ot = Symbol(), Kd = "http://www.w3.org/1999/xhtml", Zd = "http://www.w3.org/2000/svg", Yd = "@attach", na = !1;
var Jr = Array.isArray, Wd = Array.prototype.indexOf, us = Array.from, Mo = Object.keys, Oo = Object.defineProperty, un = Object.getOwnPropertyDescriptor, yl = Object.getOwnPropertyDescriptors, wl = Object.prototype, Xd = Array.prototype, Qo = Object.getPrototypeOf, ra = Object.isExtensible;
function Nr(e) {
  return typeof e == "function";
}
const rt = () => {
};
function jd(e) {
  return e();
}
function Ho(e) {
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
const kt = 2, ds = 4, eo = 8, fs = 16, wn = 32, er = 64, gs = 128, bt = 256, Vo = 512, Et = 1024, hn = 2048, tr = 4096, dn = 8192, ei = 16384, _l = 32768, br = 65536, oa = 1 << 17, Gd = 1 << 18, xl = 1 << 19, Hi = 1 << 20, hs = 1 << 21, Yt = Symbol("$state"), vs = Symbol("legacy props"), Ud = Symbol(""), bl = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Jd = 1, ps = 3, dr = 8;
function Cl(e) {
  return e === this.v;
}
function kl(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function El(e) {
  return !kl(e, this.v);
}
function Qd(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ef() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function tf(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function nf() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function rf() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function of(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function sf() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function af() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function lf() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Cr = !1, cf = !1;
function uf() {
  Cr = !0;
}
const df = [];
function Sl(e, t = !1) {
  return Co(e, /* @__PURE__ */ new Map(), "", df);
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
    if (Jr(e)) {
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
    if (Qo(e) === wl) {
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
function ms(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let Re = null;
function ia(e) {
  Re = e;
}
function vn(e) {
  return (
    /** @type {T} */
    Nl().get(e)
  );
}
function fr(e, t) {
  return Nl().set(e, t), t;
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
    r2: Wn(!1)
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
function ti() {
  return !Cr || Re !== null && Re.l === null;
}
function Nl(e) {
  return Re === null && ms(), Re.c ??= new Map(ff(Re) || void 0);
}
function ff(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function Dt(e) {
  if (typeof e != "object" || e === null || Yt in e)
    return e;
  const t = Qo(e);
  if (t !== wl && t !== Xd)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Jr(e), o = /* @__PURE__ */ Ne(0), i = Zn, s = (a) => {
    if (Zn === i)
      return a();
    var l = He, c = Zn;
    Tn(null), ca(i);
    var d = a();
    return Tn(l), ca(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ Ne(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && sf();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var g = /* @__PURE__ */ Ne(c.value);
          return n.set(l, g), g;
        }) : K(d, c.value, !0), !0;
      },
      deleteProperty(a, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in a) {
            const f = s(() => /* @__PURE__ */ Ne(ot));
            n.set(l, f), ko(o);
          }
        } else {
          if (r && typeof l == "string") {
            var d = (
              /** @type {Source<number>} */
              n.get("length")
            ), g = Number(l);
            Number.isInteger(g) && g < d.v && K(d, g);
          }
          K(c, ot), ko(o);
        }
        return !0;
      },
      get(a, l, c) {
        if (l === Yt)
          return e;
        var d = n.get(l), g = l in a;
        if (d === void 0 && (!g || un(a, l)?.writable) && (d = s(() => {
          var h = Dt(g ? a[l] : ot), v = /* @__PURE__ */ Ne(h);
          return v;
        }), n.set(l, d)), d !== void 0) {
          var f = u(d);
          return f === ot ? void 0 : f;
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
          if (g !== void 0 && f !== ot)
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
        if (l === Yt)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== ot || Reflect.has(a, l);
        if (c !== void 0 || De !== null && (!d || un(a, l)?.writable)) {
          c === void 0 && (c = s(() => {
            var f = d ? Dt(a[l]) : ot, h = /* @__PURE__ */ Ne(f);
            return h;
          }), n.set(l, c));
          var g = u(c);
          if (g === ot)
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
            v !== void 0 ? K(v, ot) : h in a && (v = s(() => /* @__PURE__ */ Ne(ot)), n.set(h + "", v));
          }
        if (g === void 0)
          (!f || un(a, l)?.writable) && (g = s(() => /* @__PURE__ */ Ne(void 0)), K(g, Dt(c)), n.set(l, g));
        else {
          f = g.v !== ot;
          var y = s(() => Dt(c));
          K(g, y);
        }
        var C = Reflect.getOwnPropertyDescriptor(a, l);
        if (C?.set && C.set.call(d, c), !f) {
          if (r && typeof l == "string") {
            var w = (
              /** @type {Source<number>} */
              n.get("length")
            ), T = Number(l);
            Number.isInteger(T) && T >= w.v && K(w, T + 1);
          }
          ko(o);
        }
        return !0;
      },
      ownKeys(a) {
        u(o);
        var l = Reflect.ownKeys(a).filter((g) => {
          var f = n.get(g);
          return f === void 0 || f.v !== ot;
        });
        for (var [c, d] of n)
          d.v !== ot && !(c in a) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        af();
      }
    }
  );
}
function sa(e) {
  try {
    if (e !== null && typeof e == "object" && Yt in e)
      return e[Yt];
  } catch {
  }
  return e;
}
function gf(e, t) {
  return Object.is(sa(e), sa(t));
}
// @__NO_SIDE_EFFECTS__
function kr(e) {
  var t = kt | hn, n = He !== null && (He.f & kt) !== 0 ? (
    /** @type {Derived} */
    He
  ) : null;
  return De === null || n !== null && (n.f & bt) !== 0 ? t |= bt : De.f |= xl, {
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
      ot
    ),
    wv: 0,
    parent: n ?? De,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function P(e) {
  const t = /* @__PURE__ */ kr(e);
  return Gl(t), t;
}
// @__NO_SIDE_EFFECTS__
function ys(e) {
  const t = /* @__PURE__ */ kr(e);
  return t.equals = El, t;
}
function Pl(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      pt(
        /** @type {Effect} */
        t[n]
      );
  }
}
function hf(e) {
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
function ws(e) {
  var t, n = De;
  Dn(hf(e));
  try {
    Pl(e), t = Ql(e);
  } finally {
    Dn(n);
  }
  return t;
}
function Tl(e) {
  var t = ws(e);
  if (e.equals(t) || (e.v = t, e.wv = Ul()), !Pn) {
    var n = (En || (e.f & bt) !== 0) && e.deps !== null ? tr : Et;
    Ut(e, n);
  }
}
const Fn = /* @__PURE__ */ new Map();
function Wn(e, t) {
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
  const n = Wn(e);
  return Gl(n), n;
}
// @__NO_SIDE_EFFECTS__
function Dl(e, t = !1, n = !0) {
  const r = Wn(e);
  return t || (r.equals = El), Cr && n && Re !== null && Re.l !== null && (Re.l.s ??= []).push(r), r;
}
function K(e, t, n = !1) {
  He !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ht || (He.f & oa) !== 0) && ti() && (He.f & (kt | fs | oa)) !== 0 && !fn?.includes(e) && lf();
  let r = n ? Dt(t) : t;
  return Vi(e, r);
}
function Vi(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Pn ? Fn.set(e, t) : Fn.set(e, n), e.v = t, (e.f & kt) !== 0 && ((e.f & hn) !== 0 && ws(
      /** @type {Derived} */
      e
    ), Ut(e, (e.f & bt) === 0 ? Et : tr)), e.wv = Ul(), Al(e, hn), ti() && De !== null && (De.f & Et) !== 0 && (De.f & (wn | er)) === 0 && (Pt === null ? Cf([e]) : Pt.push(e));
  }
  return t;
}
function aa(e, t = 1) {
  var n = u(e), r = t === 1 ? n++ : n--;
  return K(e, n), r;
}
function ko(e) {
  K(e, e.v + 1);
}
function Al(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = ti(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      (a & hn) === 0 && (!r && s === De || (Ut(s, t), (a & (Et | bt)) !== 0 && ((a & kt) !== 0 ? Al(
        /** @type {Derived} */
        s,
        tr
      ) : ri(
        /** @type {Effect} */
        s
      ))));
    }
}
function to(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function vf() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
let Ce = !1;
function xt(e) {
  Ce = e;
}
let Pe;
function st(e) {
  if (e === null)
    throw to(), qn;
  return Pe = e;
}
function pn() {
  return st(
    /** @type {TemplateNode} */
    /* @__PURE__ */ en(Pe)
  );
}
function z(e) {
  if (Ce) {
    if (/* @__PURE__ */ en(Pe) !== null)
      throw to(), qn;
    Pe = e;
  }
}
function be(e = 1) {
  if (Ce) {
    for (var t = e, n = Pe; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ en(n);
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
      if (n === cs) {
        if (e === 0) return t;
        e -= 1;
      } else (n === as || n === ls) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ en(t)
    );
    t.remove(), t = r;
  }
}
function Ml(e) {
  if (!e || e.nodeType !== dr)
    throw to(), qn;
  return (
    /** @type {Comment} */
    e.data
  );
}
var ft, Ol, Hl, Vl;
function $i() {
  if (ft === void 0) {
    ft = window, Ol = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Hl = un(t, "firstChild").get, Vl = un(t, "nextSibling").get, ra(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), ra(n) && (n.__t = void 0);
  }
}
function mn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Ue(e) {
  return Hl.call(e);
}
// @__NO_SIDE_EFFECTS__
function en(e) {
  return Vl.call(e);
}
function R(e, t) {
  if (!Ce)
    return /* @__PURE__ */ Ue(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ue(Pe)
  );
  if (n === null)
    n = Pe.appendChild(mn());
  else if (t && n.nodeType !== ps) {
    var r = mn();
    return n?.before(r), st(r), r;
  }
  return st(n), n;
}
function se(e, t) {
  if (!Ce) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ue(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ en(n) : n;
  }
  return Pe;
}
function L(e, t = 1, n = !1) {
  let r = Ce ? Pe : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ en(r);
  if (!Ce)
    return r;
  if (n && r?.nodeType !== ps) {
    var i = mn();
    return r === null ? o?.after(i) : r.before(i), st(i), i;
  }
  return st(r), /** @type {TemplateNode} */
  r;
}
function _s(e) {
  e.textContent = "";
}
function Ll(e) {
  De === null && He === null && tf(), He !== null && (He.f & bt) !== 0 && De === null && ef(), Pn && Qd();
}
function pf(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function _n(e, t, n, r = !0) {
  var o = De, i = {
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
      Cs(i), i.f |= _l;
    } catch (l) {
      throw pt(i), l;
    }
  else t !== null && ri(i);
  var s = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (xl | gs)) === 0;
  if (!s && r && (o !== null && pf(i, o), He !== null && (He.f & kt) !== 0)) {
    var a = (
      /** @type {Derived} */
      He
    );
    (a.effects ??= []).push(i);
  }
  return i;
}
function $l() {
  return He !== null && !Ht;
}
function Il(e) {
  const t = _n(eo, null, !1);
  return Ut(t, Et), t.teardown = e, t;
}
function Ge(e) {
  if (Ll(), !He && De && (De.f & wn) !== 0) {
    var t = (
      /** @type {ComponentContext} */
      Re
    );
    (t.e ??= []).push(e);
  } else
    return zl(e);
}
function zl(e) {
  return _n(ds | hs, e, !1);
}
function Rl(e) {
  return Ll(), _n(eo | hs, e, !0);
}
function xs(e) {
  const t = _n(er, e, !0);
  return () => {
    pt(t);
  };
}
function mf(e) {
  const t = _n(er, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? gr(t, () => {
      pt(t), r(void 0);
    }) : (pt(t), r(void 0));
  });
}
function no(e) {
  return _n(ds, e, !1);
}
function ro(e) {
  return _n(eo, e, !0);
}
function ke(e, t = [], n = kr) {
  const r = t.map(n);
  return Hn(() => e(...r.map(u)));
}
function Hn(e, t = 0) {
  var n = _n(eo | fs | t, e, !0);
  return n;
}
function Gt(e, t = !0) {
  return _n(eo | wn, e, !0, t);
}
function Bl(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Pn, r = He;
    la(!0), Tn(null);
    try {
      t.call(null);
    } finally {
      la(n), Tn(r);
    }
  }
}
function ql(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    n.ac?.abort(bl);
    var r = n.next;
    (n.f & er) !== 0 ? n.parent = null : pt(n, t), n = r;
  }
}
function yf(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & wn) === 0 && pt(t), t = n;
  }
}
function pt(e, t = !0) {
  var n = !1;
  (t || (e.f & Gd) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (Fl(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), ql(e, t && !n), $o(e, 0), Ut(e, ei);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  Bl(e);
  var o = e.parent;
  o !== null && o.first !== null && Kl(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function Fl(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ en(e)
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
  bs(e, n, !0), Zl(n, () => {
    pt(e), t && t();
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
function bs(e, t, n) {
  if ((e.f & dn) === 0) {
    if (e.f ^= dn, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & br) !== 0 || (r.f & wn) !== 0;
      bs(r, t, i ? n : !1), r = o;
    }
  }
}
function Lr(e) {
  Yl(e, !0);
}
function Yl(e, t) {
  if ((e.f & dn) !== 0) {
    e.f ^= dn;
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & br) !== 0 || (n.f & wn) !== 0;
      Yl(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
const wf = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let $r = [], Ir = [];
function Wl() {
  var e = $r;
  $r = [], Ho(e);
}
function Xl() {
  var e = Ir;
  Ir = [], Ho(e);
}
function oo(e) {
  $r.length === 0 && queueMicrotask(Wl), $r.push(e);
}
function _f(e) {
  Ir.length === 0 && wf(Xl), Ir.push(e);
}
function xf() {
  $r.length > 0 && Wl(), Ir.length > 0 && Xl();
}
function bf(e) {
  var t = (
    /** @type {Effect} */
    De
  );
  if ((t.f & _l) === 0) {
    if ((t.f & gs) === 0)
      throw e;
    t.fn(e);
  } else
    jl(e, t);
}
function jl(e, t) {
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
let zr = !1, Rr = null, Kn = !1, Pn = !1;
function la(e) {
  Pn = e;
}
let Hr = [];
let He = null, Ht = !1;
function Tn(e) {
  He = e;
}
let De = null;
function Dn(e) {
  De = e;
}
let fn = null;
function Gl(e) {
  He !== null && He.f & Hi && (fn === null ? fn = [e] : fn.push(e));
}
let lt = null, _t = 0, Pt = null;
function Cf(e) {
  Pt = e;
}
let Lo = 1, Br = 0, Zn = Br;
function ca(e) {
  Zn = e;
}
let En = !1;
function Ul() {
  return ++Lo;
}
function ni(e) {
  var t = e.f;
  if ((t & hn) !== 0)
    return !0;
  if ((t & tr) !== 0) {
    var n = e.deps, r = (t & bt) !== 0;
    if (n !== null) {
      var o, i, s = (t & Vo) !== 0, a = r && De !== null && !En, l = n.length;
      if (s || a) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (o = 0; o < l; o++)
          i = n[o], (s || !i?.reactions?.includes(c)) && (i.reactions ??= []).push(c);
        s && (c.f ^= Vo), a && d !== null && (d.f & bt) === 0 && (c.f ^= bt);
      }
      for (o = 0; o < l; o++)
        if (i = n[o], ni(
          /** @type {Derived} */
          i
        ) && Tl(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!r || De !== null && !En) && Ut(e, Et);
  }
  return !1;
}
function Jl(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !fn?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & kt) !== 0 ? Jl(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? Ut(i, hn) : (i.f & Et) !== 0 && Ut(i, tr), ri(
        /** @type {Effect} */
        i
      ));
    }
}
function Ql(e) {
  var t = lt, n = _t, r = Pt, o = He, i = En, s = fn, a = Re, l = Ht, c = Zn, d = e.f;
  lt = /** @type {null | Value[]} */
  null, _t = 0, Pt = null, En = (d & bt) !== 0 && (Ht || !Kn || He === null), He = (d & (wn | er)) === 0 ? e : null, fn = null, ia(e.ctx), Ht = !1, Zn = ++Br, e.f |= Hi, e.ac !== null && (e.ac.abort(bl), e.ac = null);
  try {
    var g = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (lt !== null) {
      var h;
      if ($o(e, _t), f !== null && _t > 0)
        for (f.length = _t + lt.length, h = 0; h < lt.length; h++)
          f[_t + h] = lt[h];
      else
        e.deps = f = lt;
      if (!En || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (d & kt) !== 0 && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (h = _t; h < f.length; h++)
          (f[h].reactions ??= []).push(e);
    } else f !== null && _t < f.length && ($o(e, _t), f.length = _t);
    if (ti() && Pt !== null && !Ht && f !== null && (e.f & (kt | tr | hn)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      Pt.length; h++)
        Jl(
          Pt[h],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (Br++, Pt !== null && (r === null ? r = Pt : r.push(.../** @type {Source[]} */
    Pt))), g;
  } catch (v) {
    bf(v);
  } finally {
    lt = t, _t = n, Pt = r, He = o, En = i, fn = s, ia(a), Ht = l, Zn = c, e.f ^= Hi;
  }
}
function kf(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Wd.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & kt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (lt === null || !lt.includes(t)) && (Ut(t, tr), (t.f & (bt | Vo)) === 0 && (t.f ^= Vo), Pl(
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
      kf(e, n[r]);
}
function Cs(e) {
  var t = e.f;
  if ((t & ei) === 0) {
    Ut(e, Et);
    var n = De, r = Kn;
    De = e, Kn = !0;
    try {
      (t & fs) !== 0 ? yf(e) : ql(e), Bl(e);
      var o = Ql(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = Lo;
      var i;
      na && cf && (e.f & hn) !== 0 && e.deps;
    } finally {
      Kn = r, De = n;
    }
  }
}
function Ef() {
  try {
    nf();
  } catch (e) {
    if (Rr !== null)
      jl(e, Rr);
    else
      throw e;
  }
}
function ec() {
  var e = Kn;
  try {
    var t = 0;
    for (Kn = !0; Hr.length > 0; ) {
      t++ > 1e3 && Ef();
      var n = Hr, r = n.length;
      Hr = [];
      for (var o = 0; o < r; o++) {
        var i = Nf(n[o]);
        Sf(i);
      }
      Fn.clear();
    }
  } finally {
    zr = !1, Kn = e, Rr = null;
  }
}
function Sf(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if ((r.f & (ei | dn)) === 0 && ni(r)) {
        var o = Lo;
        if (Cs(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? Kl(r) : r.fn = null), Lo > o && (r.f & hs) !== 0)
          break;
      }
    }
    for (; n < t; n += 1)
      ri(e[n]);
  }
}
function ri(e) {
  zr || (zr = !0, queueMicrotask(ec));
  for (var t = Rr = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if ((n & (er | wn)) !== 0) {
      if ((n & Et) === 0) return;
      t.f ^= Et;
    }
  }
  Hr.push(t);
}
function Nf(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, o = (r & (wn | er)) !== 0, i = o && (r & Et) !== 0;
    if (!i && (r & dn) === 0) {
      (r & ds) !== 0 ? t.push(n) : o ? n.f ^= Et : ni(n) && Cs(n);
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
    if (xf(), Hr.length === 0)
      return zr = !1, Rr = null, /** @type {T} */
      t;
    zr = !0, ec();
  }
}
async function Pf() {
  await Promise.resolve(), p();
}
function u(e) {
  var t = e.f, n = (t & kt) !== 0;
  if (He !== null && !Ht) {
    if (!fn?.includes(e)) {
      var r = He.deps;
      e.rv < Br && (e.rv = Br, lt === null && r !== null && r[_t] === e ? _t++ : lt === null ? lt = [e] : (!En || !lt.includes(e)) && lt.push(e));
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
  if (n && !Pn && (o = /** @type {Derived} */
  e, ni(o) && Tl(o)), Pn) {
    if (Fn.has(e))
      return Fn.get(e);
    if (n) {
      o = /** @type {Derived} */
      e;
      var s = o.v;
      return ((o.f & Et) !== 0 || tc(o)) && (s = ws(o)), Fn.set(o, s), s;
    }
  }
  return e.v;
}
function tc(e) {
  if (e.v === ot) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Fn.has(t) || (t.f & kt) !== 0 && tc(
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
const Tf = -7169;
function Ut(e, t) {
  e.f = e.f & Tf | t;
}
function Df(e, t) {
  var n = {};
  for (var r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}
function ks(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Yt in e)
      Ii(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Yt in n && Ii(n);
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
    const n = Qo(e);
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
function Af(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, oo(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function Mf(e) {
  Ce && /* @__PURE__ */ Ue(e) !== null && _s(e);
}
let ua = !1;
function Of() {
  ua || (ua = !0, document.addEventListener(
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
function Hf(e) {
  var t = He, n = De;
  Tn(null), Dn(null);
  try {
    return e();
  } finally {
    Tn(t), Dn(n);
  }
}
const nc = /* @__PURE__ */ new Set(), zi = /* @__PURE__ */ new Set();
function Es(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || Dr.call(t, i), !i.cancelBubble)
      return Hf(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? oo(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function Ri(e, t, n, r = {}) {
  var o = Es(t, e, n, r);
  return () => {
    e.removeEventListener(t, o, r);
  };
}
function da(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = Es(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Il(() => {
    t.removeEventListener(e, s, i);
  });
}
function Vn(e) {
  for (var t = 0; t < e.length; t++)
    nc.add(e[t]);
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
    var c = o.indexOf(t);
    if (c === -1)
      return;
    l <= c && (s = l);
  }
  if (i = /** @type {Element} */
  o[s] || e.target, i !== t) {
    Oo(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = He, g = De;
    Tn(null), Dn(null);
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
              var [C, ...w] = y;
              C.apply(i, [e, ...w]);
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
      e.__root = t, delete e.currentTarget, Tn(d), Dn(g);
    }
  }
}
function Ss(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function vt(e, t) {
  var n = (
    /** @type {Effect} */
    De
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function X(e, t) {
  var n = (t & ml) !== 0, r = (t & Fd) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (Ce)
      return vt(Pe, null), Pe;
    o === void 0 && (o = Ss(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ Ue(o)));
    var s = (
      /** @type {TemplateNode} */
      r || Ol ? document.importNode(o, !0) : o.cloneNode(!0)
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
function Vf(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & ml) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (Ce)
      return vt(Pe, null), Pe;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Ss(i)
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
      ), g = (
        /** @type {TemplateNode} */
        c.lastChild
      );
      vt(d, g);
    } else
      vt(c, c);
    return c;
  };
}
// @__NO_SIDE_EFFECTS__
function me(e, t) {
  return /* @__PURE__ */ Vf(e, t, "svg");
}
function Se(e = "") {
  if (!Ce) {
    var t = mn(e + "");
    return vt(t, t), t;
  }
  var n = Pe;
  return n.nodeType !== ps && (n.before(n = mn()), st(n)), vt(n, n), n;
}
function Ae() {
  if (Ce)
    return vt(Pe, null), Pe;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = mn();
  return e.append(t, n), vt(t, n), e;
}
function O(e, t) {
  if (Ce) {
    De.nodes_end = Pe, pn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Lf(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const $f = [
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
function If(e) {
  return $f.includes(e);
}
const zf = {
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
function Rf(e) {
  return e = e.toLowerCase(), zf[e] ?? e;
}
const Bf = ["touchstart", "touchmove"];
function qf(e) {
  return Bf.includes(e);
}
const Ff = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function Kf(e) {
  return Ff.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function Ie(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function rc(e, t) {
  return oc(e, t);
}
function Zf(e, t) {
  $i(), t.intro = t.intro ?? !1;
  const n = t.target, r = Ce, o = Pe;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ue(n)
    ); i && (i.nodeType !== dr || /** @type {Comment} */
    i.data !== as); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ en(i);
    if (!i)
      throw qn;
    xt(!0), st(
      /** @type {Comment} */
      i
    ), pn();
    const s = oc(e, { ...t, anchor: i });
    if (Pe === null || Pe.nodeType !== dr || /** @type {Comment} */
    Pe.data !== cs)
      throw to(), qn;
    return xt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === qn)
      return t.recover === !1 && rf(), $i(), _s(n), xt(!1), rc(e, t);
    throw s;
  } finally {
    xt(r), st(o);
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
        var v = qf(h);
        t.addEventListener(h, Dr, { passive: v });
        var y = rr.get(h);
        y === void 0 ? (document.addEventListener(h, Dr, { passive: v }), rr.set(h, 1)) : rr.set(h, y + 1);
      }
    }
  };
  l(us(nc)), zi.add(l);
  var c = void 0, d = mf(() => {
    var g = n ?? t.appendChild(mn());
    return Gt(() => {
      if (i) {
        le({});
        var f = (
          /** @type {ComponentContext} */
          Re
        );
        f.c = i;
      }
      o && (r.$$events = o), Ce && vt(
        /** @type {TemplateNode} */
        g,
        null
      ), c = e(g, r) || {}, Ce && (De.nodes_end = Pe), i && ce();
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
  return Bi.set(c, d), c;
}
let Bi = /* @__PURE__ */ new WeakMap();
function Yf(e, t) {
  const n = Bi.get(e);
  return n ? (Bi.delete(e), n(t)) : Promise.resolve();
}
function Ze(e, t, ...n) {
  var r = e, o = rt, i;
  Hn(() => {
    o !== (o = t()) && (i && (pt(i), i = null), i = Gt(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, br), Ce && (r = Pe);
}
function Ln(e) {
  Re === null && ms(), Cr && Re.l !== null ? Wf(Re).m.push(e) : Ge(() => {
    const t = nt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function oi(e) {
  Re === null && ms(), Ln(() => () => nt(e));
}
function Wf(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
function ae(e, t, [n, r] = [0, 0]) {
  Ce && n === 0 && pn();
  var o = e, i = null, s = null, a = ot, l = n > 0 ? br : 0, c = !1;
  const d = (f, h = !0) => {
    c = !0, g(h, f);
  }, g = (f, h) => {
    if (a === (a = f)) return;
    let v = !1;
    if (Ce && r !== -1) {
      if (n === 0) {
        const C = Ml(o);
        C === as ? r = 0 : C === ls ? r = 1 / 0 : (r = parseInt(C.substring(1)), r !== r && (r = a ? 1 / 0 : -1));
      }
      const y = r > n;
      !!a === y && (o = Li(), st(o), xt(!1), v = !0, r = -1);
    }
    a ? (i ? Lr(i) : h && (i = Gt(() => h(o))), s && gr(s, () => {
      s = null;
    })) : (s ? Lr(s) : h && (s = Gt(() => h(o, [n + 1, r]))), i && gr(i, () => {
      i = null;
    })), v && xt(!0);
  };
  Hn(() => {
    c = !1, t(d), c || g(null, null);
  }, l), Ce && (o = Pe);
}
function Xf(e, t) {
  Ce && st(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ue(e)
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
function jf(e, t, n, r) {
  for (var o = [], i = t.length, s = 0; s < i; s++)
    bs(t[s].e, o, !0);
  var a = i > 0 && o.length === 0 && n !== null;
  if (a) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    _s(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), Cn(e, t[0].prev, t[i - 1].next);
  }
  Zl(o, () => {
    for (var c = 0; c < i; c++) {
      var d = t[c];
      a || (r.delete(d.k), Cn(e, d.prev, d.next)), pt(d.e, !a);
    }
  });
}
function ct(e, t, n, r, o, i = null) {
  var s = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & vl) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      e
    );
    s = Ce ? st(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Ue(c)
    ) : c.appendChild(mn());
  }
  Ce && pn();
  var d = null, g = !1, f = /* @__PURE__ */ ys(() => {
    var h = n();
    return Jr(h) ? h : h == null ? [] : us(h);
  });
  Hn(() => {
    var h = u(f), v = h.length;
    if (g && v === 0)
      return;
    g = v === 0;
    let y = !1;
    if (Ce) {
      var C = Ml(s) === ls;
      C !== (v === 0) && (s = Li(), st(s), xt(!1), y = !0);
    }
    if (Ce) {
      for (var w = null, T, _ = 0; _ < v; _++) {
        if (Pe.nodeType === dr && /** @type {Comment} */
        Pe.data === cs) {
          s = /** @type {Comment} */
          Pe, y = !0, xt(!1);
          break;
        }
        var x = h[_], E = r(x, _);
        T = ic(
          Pe,
          a,
          w,
          null,
          x,
          E,
          _,
          o,
          t,
          n
        ), a.items.set(E, T), w = T;
      }
      v > 0 && st(Li());
    }
    Ce || Gf(h, a, s, o, t, r, n), i !== null && (v === 0 ? d ? Lr(d) : d = Gt(() => i(s)) : d !== null && gr(d, () => {
      d = null;
    })), y && xt(!0), u(f);
  }), Ce && (s = Pe);
}
function Gf(e, t, n, r, o, i, s) {
  var a = (o & $d) !== 0, l = (o & (is | ss)) !== 0, c = e.length, d = t.items, g = t.first, f = g, h, v = null, y, C = [], w = [], T, _, x, E;
  if (a)
    for (E = 0; E < c; E += 1)
      T = e[E], _ = i(T, E), x = d.get(_), x !== void 0 && (x.a?.measure(), (y ??= /* @__PURE__ */ new Set()).add(x));
  for (E = 0; E < c; E += 1) {
    if (T = e[E], _ = i(T, E), x = d.get(_), x === void 0) {
      var M = f ? (
        /** @type {TemplateNode} */
        f.e.nodes_start
      ) : n;
      v = ic(
        M,
        t,
        v,
        v === null ? t.first : v.next,
        T,
        _,
        E,
        r,
        o,
        s
      ), d.set(_, v), C = [], w = [], f = v.next;
      continue;
    }
    if (l && Uf(x, T, E, o), (x.e.f & dn) !== 0 && (Lr(x.e), a && (x.a?.unfix(), (y ??= /* @__PURE__ */ new Set()).delete(x))), x !== f) {
      if (h !== void 0 && h.has(x)) {
        if (C.length < w.length) {
          var H = w[0], B;
          v = H.prev;
          var Z = C[0], U = C[C.length - 1];
          for (B = 0; B < C.length; B += 1)
            fa(C[B], H, n);
          for (B = 0; B < w.length; B += 1)
            h.delete(w[B]);
          Cn(t, Z.prev, U.next), Cn(t, v, Z), Cn(t, U, H), f = H, v = U, E -= 1, C = [], w = [];
        } else
          h.delete(x), fa(x, f, n), Cn(t, x.prev, x.next), Cn(t, x, v === null ? t.first : v.next), Cn(t, v, x), v = x;
        continue;
      }
      for (C = [], w = []; f !== null && f.k !== _; )
        (f.e.f & dn) === 0 && (h ??= /* @__PURE__ */ new Set()).add(f), w.push(f), f = f.next;
      if (f === null)
        continue;
      x = f;
    }
    C.push(x), v = x, f = x.next;
  }
  if (f !== null || h !== void 0) {
    for (var $ = h === void 0 ? [] : us(h); f !== null; )
      (f.e.f & dn) === 0 && $.push(f), f = f.next;
    var N = $.length;
    if (N > 0) {
      var D = (o & vl) !== 0 && c === 0 ? n : null;
      if (a) {
        for (E = 0; E < N; E += 1)
          $[E].a?.measure();
        for (E = 0; E < N; E += 1)
          $[E].a?.fix();
      }
      jf(t, $, D, d);
    }
  }
  a && oo(() => {
    if (y !== void 0)
      for (x of y)
        x.a?.apply();
  }), De.first = t.first && t.first.e, De.last = v && v.e;
}
function Uf(e, t, n, r) {
  (r & is) !== 0 && Vi(e.v, t), (r & ss) !== 0 ? Vi(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function ic(e, t, n, r, o, i, s, a, l, c) {
  var d = (l & is) !== 0, g = (l & Id) === 0, f = d ? g ? /* @__PURE__ */ Dl(o, !1, !1) : Wn(o) : o, h = (l & ss) === 0 ? s : Wn(s), v = {
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
    return v.e = Gt(() => a(e, f, h, c), Ce), v.e.prev = n && n.e, v.e.next = r && r.e, n === null ? t.first = v : (n.next = v, n.e.next = v.e), r !== null && (r.prev = v, r.e.prev = v.e), v;
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
function Cn(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function Ns(e, t, n = !1, r = !1, o = !1) {
  var i = e, s = "";
  ke(() => {
    var a = (
      /** @type {Effect} */
      De
    );
    if (s === (s = t() ?? "")) {
      Ce && pn();
      return;
    }
    if (a.nodes_start !== null && (Fl(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if (Ce) {
        Pe.data;
        for (var l = pn(), c = l; l !== null && (l.nodeType !== dr || /** @type {Comment} */
        l.data !== ""); )
          c = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ en(l);
        if (l === null)
          throw to(), qn;
        vt(Pe, c), i = st(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var g = Ss(d);
      if ((n || r) && (g = /** @type {Element} */
      /* @__PURE__ */ Ue(g)), vt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ue(g),
        /** @type {TemplateNode} */
        g.lastChild
      ), n || r)
        for (; /* @__PURE__ */ Ue(g); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ Ue(g)
          );
      else
        i.before(g);
    }
  });
}
function Ps(e, t, n) {
  Ce && pn();
  var r = e, o, i;
  Hn(() => {
    o !== (o = t()) && (i && (gr(i), i = null), o && (i = Gt(() => n(r, o))));
  }, br), Ce && (r = Pe);
}
function Jf(e, t, n, r, o, i) {
  let s = Ce;
  Ce && pn();
  var a, l, c = null;
  Ce && Pe.nodeType === Jd && (c = /** @type {Element} */
  Pe, pn());
  var d = (
    /** @type {TemplateNode} */
    Ce ? Pe : e
  ), g;
  Hn(() => {
    const f = t() || null;
    var h = f === "svg" ? Zd : null;
    f !== a && (g && (f === null ? gr(g, () => {
      g = null, l = null;
    }) : f === l ? Lr(g) : pt(g)), f && f !== l && (g = Gt(() => {
      if (c = Ce ? (
        /** @type {Element} */
        c
      ) : h ? document.createElementNS(h, f) : document.createElement(f), vt(c, c), r) {
        Ce && Kf(f) && c.append(document.createComment(""));
        var v = (
          /** @type {TemplateNode} */
          Ce ? /* @__PURE__ */ Ue(c) : c.appendChild(mn())
        );
        Ce && (v === null ? xt(!1) : st(v)), r(c, v);
      }
      De.nodes_end = c, d.before(c);
    })), a = f, a && (l = a));
  }, br), s && (xt(!0), st(d));
}
function Ve(e, t) {
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
function it(e, t, n) {
  no(() => {
    var r = nt(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      ro(() => {
        var s = n();
        ks(s), o && kl(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Qf(e, t) {
  var n = void 0, r;
  Hn(() => {
    n !== (n = t()) && (r && (pt(r), r = null), n && (r = Gt(() => {
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
function eg() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = sc(e)) && (r && (r += " "), r += t);
  return r;
}
function xn(e) {
  return typeof e == "object" ? eg(e) : e ?? "";
}
const ga = [...` 	
\r\f \v\uFEFF`];
function tg(e, t, n) {
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
function _i(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function ng(e, t) {
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
    return r && (n += ha(r)), o && (n += ha(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function mt(e, t, n, r, o, i) {
  var s = e.__className;
  if (Ce || s !== n || s === void 0) {
    var a = tg(n, r, i);
    (!Ce || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
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
function ut(e, t, n, r) {
  var o = e.__style;
  if (Ce || o !== t) {
    var i = ng(t, r);
    (!Ce || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (xi(e, n?.[0], r[0]), xi(e, n?.[1], r[1], "important")) : xi(e, n, r));
  return r;
}
function qi(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!Jr(t))
      return vf();
    for (var r of e.options)
      r.selected = t.includes(va(r));
    return;
  }
  for (r of e.options) {
    var o = va(r);
    if (gf(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function rg(e) {
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
  }), Il(() => {
    t.disconnect();
  });
}
function va(e) {
  return "__value" in e ? e.__value : e.value;
}
const kn = Symbol("class"), Kt = Symbol("style"), ac = Symbol("is custom element"), lc = Symbol("is html");
function gn(e) {
  if (Ce) {
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
    e.__on_r = n, _f(n), Of();
  }
}
function Eo(e, t) {
  var n = ii(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function pa(e, t) {
  var n = ii(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function og(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function we(e, t, n, r) {
  var o = ii(e);
  Ce && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[Ud] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && cc(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function ig(e, t, n, r, o = !1) {
  var i = ii(e), s = i[ac], a = !i[lc];
  let l = Ce && s;
  l && xt(!1);
  var c = t || {}, d = e.tagName === "OPTION";
  for (var g in t)
    g in n || (n[g] = null);
  n.class ? n.class = xn(n.class) : (r || n[kn]) && (n.class = null), n[Kt] && (n.style ??= null);
  var f = cc(e);
  for (const _ in n) {
    let x = n[_];
    if (d && _ === "value" && x == null) {
      e.value = e.__value = "", c[_] = x;
      continue;
    }
    if (_ === "class") {
      var h = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      mt(e, h, x, r, t?.[kn], n[kn]), c[_] = x, c[kn] = n[kn];
      continue;
    }
    if (_ === "style") {
      ut(e, x, t?.[Kt], n[Kt]), c[_] = x, c[Kt] = n[Kt];
      continue;
    }
    var v = c[_];
    if (!(x === v && !(x === void 0 && e.hasAttribute(_)))) {
      c[_] = x;
      var y = _[0] + _[1];
      if (y !== "$$")
        if (y === "on") {
          const E = {}, M = "$$" + _;
          let H = _.slice(2);
          var C = If(H);
          if (Lf(H) && (H = H.slice(0, -7), E.capture = !0), !C && v) {
            if (x != null) continue;
            e.removeEventListener(H, c[M], E), c[M] = null;
          }
          if (x != null)
            if (C)
              e[`__${H}`] = x, Vn([H]);
            else {
              let B = function(Z) {
                c[_].call(this, Z);
              };
              c[M] = Es(H, e, B, E);
            }
          else C && (e[`__${H}`] = void 0);
        } else if (_ === "style")
          we(e, _, x);
        else if (_ === "autofocus")
          Af(
            /** @type {HTMLElement} */
            e,
            !!x
          );
        else if (!s && (_ === "__value" || _ === "value" && x != null))
          e.value = e.__value = x;
        else if (_ === "selected" && d)
          og(
            /** @type {HTMLOptionElement} */
            e,
            x
          );
        else {
          var w = _;
          a || (w = Rf(w));
          var T = w === "defaultValue" || w === "defaultChecked";
          if (x == null && !s && !T)
            if (i[_] = null, w === "value" || w === "checked") {
              let E = (
                /** @type {HTMLInputElement} */
                e
              );
              const M = t === void 0;
              if (w === "value") {
                let H = E.defaultValue;
                E.removeAttribute(w), E.defaultValue = H, E.value = E.__value = M ? H : null;
              } else {
                let H = E.defaultChecked;
                E.removeAttribute(w), E.defaultChecked = H, E.checked = M ? H : !1;
              }
            } else
              e.removeAttribute(_);
          else T || f.includes(w) && (s || typeof x != "string") ? e[w] = x : typeof x != "function" && we(e, w, x);
        }
    }
  }
  return l && xt(!0), c;
}
function Je(e, t, n = [], r, o = !1, i = kr) {
  const s = n.map(i);
  var a = void 0, l = {}, c = e.nodeName === "SELECT", d = !1;
  if (Hn(() => {
    var f = t(...s.map(u)), h = ig(e, a, f, r, o);
    d && c && "value" in f && qi(
      /** @type {HTMLSelectElement} */
      e,
      f.value
    );
    for (let y of Object.getOwnPropertySymbols(l))
      f[y] || pt(l[y]);
    for (let y of Object.getOwnPropertySymbols(f)) {
      var v = f[y];
      y.description === Yd && (!a || v !== a[y]) && (l[y] && pt(l[y]), l[y] = Gt(() => Qf(e, () => v))), h[y] = v;
    }
    a = h;
  }), c) {
    var g = (
      /** @type {HTMLSelectElement} */
      e
    );
    no(() => {
      qi(
        g,
        /** @type {Record<string | symbol, any>} */
        a.value,
        !0
      ), rg(g);
    });
  }
  d = !0;
}
function ii(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [ac]: e.nodeName.includes("-"),
      [lc]: e.namespaceURI === Kd
    }
  );
}
var ma = /* @__PURE__ */ new Map();
function cc(e) {
  var t = ma.get(e.nodeName);
  if (t) return t;
  ma.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = yl(r);
    for (var i in n)
      n[i].set && t.push(i);
    r = Qo(r);
  }
  return t;
}
class Ts {
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
          Ts.entries.set(n.target, n);
          for (var r of this.#t.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var sg = /* @__PURE__ */ new Ts({
  box: "border-box"
});
function ya(e, t, n) {
  var r = sg.observe(e, () => n(e[t]));
  no(() => (nt(() => n(e[t])), r));
}
function wa(e, t) {
  return e === t || e?.[Yt] === t;
}
function At(e = {}, t, n, r) {
  return no(() => {
    var o, i;
    return ro(() => {
      o = i, i = [], nt(() => {
        e !== n(...i) && (t(e, ...i), o && wa(n(...o), e) && t(null, ...o));
      });
    }), () => {
      oo(() => {
        i && wa(n(...i), e) && t(null, ...i);
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
  let r = () => ks(t.s);
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
    _a(t, r), Ho(n.b);
  }), Ge(() => {
    const o = nt(() => n.m.map(jd));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Ge(() => {
    _a(t, r), Ho(n.a);
  });
}
function _a(e, t) {
  if (e.l.s)
    for (const n of e.l.s) u(n);
  t();
}
let po = !1;
function ag(e) {
  var t = po;
  try {
    return po = !1, [e(), po];
  } finally {
    po = t;
  }
}
const lg = {
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
    lg
  );
}
const cg = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return u(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    if (!(t in e.special)) {
      var r = De;
      try {
        Dn(e.parent_effect), e.special[t] = m(
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
        Dn(r);
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
        De
      )
    },
    cg
  );
}
const ug = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Nr(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      Nr(o) && (o = o());
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
      if (Nr(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = un(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === Yt || t === vs) return !1;
    for (let n of e.props)
      if (Nr(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props)
      if (Nr(n) && (n = n()), !!n) {
        for (const r in n)
          t.includes(r) || t.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          t.includes(r) || t.push(r);
      }
    return t;
  }
};
function ze(...e) {
  return new Proxy({ props: e }, ug);
}
function m(e, t, n, r) {
  var o = !Cr || (n & Rd) !== 0, i = (n & Bd) !== 0, s = (n & qd) !== 0, a = (
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
    var g = Yt in e || vs in e;
    d = un(e, t)?.set ?? (g && t in e ? (_) => e[t] = _ : void 0);
  }
  var f, h = !1;
  i ? [f, h] = ag(() => (
    /** @type {V} */
    e[t]
  )) : f = /** @type {V} */
  e[t], f === void 0 && r !== void 0 && (f = c(), d && (o && of(), d(f)));
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
  }, o && (n & pl) === 0)
    return v;
  if (d) {
    var y = e.$$legacy;
    return function(_, x) {
      return arguments.length > 0 ? ((!o || !x || y || h) && d(x ? v() : _), _) : v();
    };
  }
  var C = !1, w = ((n & zd) !== 0 ? kr : ys)(() => (C = !1, v()));
  i && u(w);
  var T = (
    /** @type {Effect} */
    De
  );
  return function(_, x) {
    if (arguments.length > 0) {
      const E = x ? u(w) : o && i ? Dt(_) : _;
      return K(w, E), C = !0, a !== void 0 && (a = E), _;
    }
    return Pn && C || (T.f & ei) !== 0 ? w.v : u(w);
  };
}
function dg(e) {
  return new fg(e);
}
class fg {
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
          return u(n.get(s) ?? r(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === vs ? !0 : (u(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, a) {
          return K(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
        }
      }
    );
    this.#e = (t.hydrate ? Zf : rc)(t.component, {
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
      Yf(this.#e);
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
          r !== "default" && (i.name = r), O(o, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, n = gg(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = So(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = dg({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = xs(() => {
        ro(() => {
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
function gg(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function ne(e, t, n, r, o, i) {
  let s = class extends dc {
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
        var c = this.$$c;
        if (c) {
          var d = un(c, a)?.get;
          d ? c[a] = l : c.$set({ [a]: l });
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
var hg = { value: () => {
} };
function si() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new No(n);
}
function No(e) {
  this._ = e;
}
function vg(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
No.prototype = si.prototype = {
  constructor: No,
  on: function(e, t) {
    var n = this._, r = vg(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = pg(n[o], e.name))) return o;
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
function pg(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function ba(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = hg, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Fi = "http://www.w3.org/1999/xhtml";
const Ca = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Fi,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function ai(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Ca.hasOwnProperty(t) ? { space: Ca[t], local: e } : e;
}
function mg(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Fi && t.documentElement.namespaceURI === Fi ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function yg(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function fc(e) {
  var t = ai(e);
  return (t.local ? yg : mg)(t);
}
function wg() {
}
function Ds(e) {
  return e == null ? wg : function() {
    return this.querySelector(e);
  };
}
function _g(e) {
  typeof e != "function" && (e = Ds(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, c, d = 0; d < s; ++d)
      (l = i[d]) && (c = e.call(l, l.__data__, d, i)) && ("__data__" in l && (c.__data__ = l.__data__), a[d] = c);
  return new St(r, this._parents);
}
function xg(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function bg() {
  return [];
}
function gc(e) {
  return e == null ? bg : function() {
    return this.querySelectorAll(e);
  };
}
function Cg(e) {
  return function() {
    return xg(e.apply(this, arguments));
  };
}
function kg(e) {
  typeof e == "function" ? e = Cg(e) : e = gc(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, c = 0; c < a; ++c)
      (l = s[c]) && (r.push(e.call(l, l.__data__, c, s)), o.push(l));
  return new St(r, o);
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
var Eg = Array.prototype.find;
function Sg(e) {
  return function() {
    return Eg.call(this.children, e);
  };
}
function Ng() {
  return this.firstElementChild;
}
function Pg(e) {
  return this.select(e == null ? Ng : Sg(typeof e == "function" ? e : vc(e)));
}
var Tg = Array.prototype.filter;
function Dg() {
  return Array.from(this.children);
}
function Ag(e) {
  return function() {
    return Tg.call(this.children, e);
  };
}
function Mg(e) {
  return this.selectAll(e == null ? Dg : Ag(typeof e == "function" ? e : vc(e)));
}
function Og(e) {
  typeof e != "function" && (e = hc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, c = 0; c < s; ++c)
      (l = i[c]) && e.call(l, l.__data__, c, i) && a.push(l);
  return new St(r, this._parents);
}
function pc(e) {
  return new Array(e.length);
}
function Hg() {
  return new St(this._enter || this._groups.map(pc), this._parents);
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
function Vg(e) {
  return function() {
    return e;
  };
}
function Lg(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, c = i.length; s < c; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new Io(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function $g(e, t, n, r, o, i, s) {
  var a, l, c = /* @__PURE__ */ new Map(), d = t.length, g = i.length, f = new Array(d), h;
  for (a = 0; a < d; ++a)
    (l = t[a]) && (f[a] = h = s.call(l, l.__data__, a, t) + "", c.has(h) ? o[a] = l : c.set(h, l));
  for (a = 0; a < g; ++a)
    h = s.call(e, i[a], a, i) + "", (l = c.get(h)) ? (r[a] = l, l.__data__ = i[a], c.delete(h)) : n[a] = new Io(e, i[a]);
  for (a = 0; a < d; ++a)
    (l = t[a]) && c.get(f[a]) === l && (o[a] = l);
}
function Ig(e) {
  return e.__data__;
}
function zg(e, t) {
  if (!arguments.length) return Array.from(this, Ig);
  var n = t ? $g : Lg, r = this._parents, o = this._groups;
  typeof e != "function" && (e = Vg(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), c = 0; c < i; ++c) {
    var d = r[c], g = o[c], f = g.length, h = Rg(e.call(d, d && d.__data__, c, r)), v = h.length, y = a[c] = new Array(v), C = s[c] = new Array(v), w = l[c] = new Array(f);
    n(d, g, y, C, w, h, t);
    for (var T = 0, _ = 0, x, E; T < v; ++T)
      if (x = y[T]) {
        for (T >= _ && (_ = T + 1); !(E = C[_]) && ++_ < v; ) ;
        x._next = E || null;
      }
  }
  return s = new St(s, r), s._enter = a, s._exit = l, s;
}
function Rg(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Bg() {
  return new St(this._exit || this._groups.map(pc), this._parents);
}
function qg(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function Fg(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var c = n[l], d = r[l], g = c.length, f = a[l] = new Array(g), h, v = 0; v < g; ++v)
      (h = c[v] || d[v]) && (f[v] = h);
  for (; l < o; ++l)
    a[l] = n[l];
  return new St(a, this._parents);
}
function Kg() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function Zg(e) {
  e || (e = Yg);
  function t(g, f) {
    return g && f ? e(g.__data__, f.__data__) : !g - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), c, d = 0; d < a; ++d)
      (c = s[d]) && (l[d] = c);
    l.sort(t);
  }
  return new St(o, this._parents).order();
}
function Yg(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Wg() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Xg() {
  return Array.from(this);
}
function jg() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function Gg() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function Ug() {
  return !this.node();
}
function Jg(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function Qg(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function eh(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function th(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function nh(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function rh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function oh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function ih(e, t) {
  var n = ai(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? eh : Qg : typeof t == "function" ? n.local ? oh : rh : n.local ? nh : th)(n, t));
}
function mc(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function sh(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function ah(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function lh(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function ch(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? sh : typeof t == "function" ? lh : ah)(e, t, n ?? "")) : vr(this.node(), e);
}
function vr(e, t) {
  return e.style.getPropertyValue(t) || mc(e).getComputedStyle(e, null).getPropertyValue(t);
}
function uh(e) {
  return function() {
    delete this[e];
  };
}
function dh(e, t) {
  return function() {
    this[e] = t;
  };
}
function fh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function gh(e, t) {
  return arguments.length > 1 ? this.each((t == null ? uh : typeof t == "function" ? fh : dh)(e, t)) : this.node()[e];
}
function yc(e) {
  return e.trim().split(/^|\s+/);
}
function As(e) {
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
  for (var n = As(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function xc(e, t) {
  for (var n = As(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function hh(e) {
  return function() {
    _c(this, e);
  };
}
function vh(e) {
  return function() {
    xc(this, e);
  };
}
function ph(e, t) {
  return function() {
    (t.apply(this, arguments) ? _c : xc)(this, e);
  };
}
function mh(e, t) {
  var n = yc(e + "");
  if (arguments.length < 2) {
    for (var r = As(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? ph : t ? hh : vh)(n, t));
}
function yh() {
  this.textContent = "";
}
function wh(e) {
  return function() {
    this.textContent = e;
  };
}
function _h(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function xh(e) {
  return arguments.length ? this.each(e == null ? yh : (typeof e == "function" ? _h : wh)(e)) : this.node().textContent;
}
function bh() {
  this.innerHTML = "";
}
function Ch(e) {
  return function() {
    this.innerHTML = e;
  };
}
function kh(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Eh(e) {
  return arguments.length ? this.each(e == null ? bh : (typeof e == "function" ? kh : Ch)(e)) : this.node().innerHTML;
}
function Sh() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Nh() {
  return this.each(Sh);
}
function Ph() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Th() {
  return this.each(Ph);
}
function Dh(e) {
  var t = typeof e == "function" ? e : fc(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Ah() {
  return null;
}
function Mh(e, t) {
  var n = typeof e == "function" ? e : fc(e), r = t == null ? Ah : typeof t == "function" ? t : Ds(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Oh() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Hh() {
  return this.each(Oh);
}
function Vh() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Lh() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function $h(e) {
  return this.select(e ? Lh : Vh);
}
function Ih(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function zh(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Rh(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function Bh(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function qh(e, t, n) {
  return function() {
    var r = this.__on, o, i = zh(t);
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
function Fh(e, t, n) {
  var r = Rh(e + ""), o, i = r.length, s;
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
  for (a = t ? qh : Bh, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function bc(e, t, n) {
  var r = mc(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Kh(e, t) {
  return function() {
    return bc(this, e, t);
  };
}
function Zh(e, t) {
  return function() {
    return bc(this, e, t.apply(this, arguments));
  };
}
function Yh(e, t) {
  return this.each((typeof t == "function" ? Zh : Kh)(e, t));
}
function* Wh() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Cc = [null];
function St(e, t) {
  this._groups = e, this._parents = t;
}
function io() {
  return new St([[document.documentElement]], Cc);
}
function Xh() {
  return this;
}
St.prototype = io.prototype = {
  constructor: St,
  select: _g,
  selectAll: kg,
  selectChild: Pg,
  selectChildren: Mg,
  filter: Og,
  data: zg,
  enter: Hg,
  exit: Bg,
  join: qg,
  merge: Fg,
  selection: Xh,
  order: Kg,
  sort: Zg,
  call: Wg,
  nodes: Xg,
  node: jg,
  size: Gg,
  empty: Ug,
  each: Jg,
  attr: ih,
  style: ch,
  property: gh,
  classed: mh,
  text: xh,
  html: Eh,
  raise: Nh,
  lower: Th,
  append: Dh,
  insert: Mh,
  remove: Hh,
  clone: $h,
  datum: Ih,
  on: Fh,
  dispatch: Yh,
  [Symbol.iterator]: Wh
};
function Tt(e) {
  return typeof e == "string" ? new St([[document.querySelector(e)]], [document.documentElement]) : new St([[e]], Cc);
}
function jh(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function Ot(e, t) {
  if (e = jh(e), t === void 0 && (t = e.currentTarget), t) {
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
const Gh = { passive: !1 }, qr = { capture: !0, passive: !1 };
function bi(e) {
  e.stopImmediatePropagation();
}
function ar(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function kc(e) {
  var t = e.document.documentElement, n = Tt(e).on("dragstart.drag", ar, qr);
  "onselectstart" in t ? n.on("selectstart.drag", ar, qr) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Ec(e, t) {
  var n = e.document.documentElement, r = Tt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", ar, qr), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const mo = (e) => () => e;
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
function Uh(e) {
  return !e.ctrlKey && !e.button;
}
function Jh() {
  return this.parentNode;
}
function Qh(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function e1() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function t1() {
  var e = Uh, t = Jh, n = Qh, r = e1, o = {}, i = si("start", "drag", "end"), s = 0, a, l, c, d, g = 0;
  function f(x) {
    x.on("mousedown.drag", h).filter(r).on("touchstart.drag", C).on("touchmove.drag", w, Gh).on("touchend.drag touchcancel.drag", T).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function h(x, E) {
    if (!(d || !e.call(this, x, E))) {
      var M = _(this, t.call(this, x, E), x, E, "mouse");
      M && (Tt(x.view).on("mousemove.drag", v, qr).on("mouseup.drag", y, qr), kc(x.view), bi(x), c = !1, a = x.clientX, l = x.clientY, M("start", x));
    }
  }
  function v(x) {
    if (ar(x), !c) {
      var E = x.clientX - a, M = x.clientY - l;
      c = E * E + M * M > g;
    }
    o.mouse("drag", x);
  }
  function y(x) {
    Tt(x.view).on("mousemove.drag mouseup.drag", null), Ec(x.view, c), ar(x), o.mouse("end", x);
  }
  function C(x, E) {
    if (e.call(this, x, E)) {
      var M = x.changedTouches, H = t.call(this, x, E), B = M.length, Z, U;
      for (Z = 0; Z < B; ++Z)
        (U = _(this, H, x, E, M[Z].identifier, M[Z])) && (bi(x), U("start", x, M[Z]));
    }
  }
  function w(x) {
    var E = x.changedTouches, M = E.length, H, B;
    for (H = 0; H < M; ++H)
      (B = o[E[H].identifier]) && (ar(x), B("drag", x, E[H]));
  }
  function T(x) {
    var E = x.changedTouches, M = E.length, H, B;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), H = 0; H < M; ++H)
      (B = o[E[H].identifier]) && (bi(x), B("end", x, E[H]));
  }
  function _(x, E, M, H, B, Z) {
    var U = i.copy(), $ = Ot(Z || M, E), N, D, b;
    if ((b = n.call(x, new Ki("beforestart", {
      sourceEvent: M,
      target: f,
      identifier: B,
      active: s,
      x: $[0],
      y: $[1],
      dx: 0,
      dy: 0,
      dispatch: U
    }), H)) != null)
      return N = b.x - $[0] || 0, D = b.y - $[1] || 0, function S(k, V, I) {
        var A = $, F;
        switch (k) {
          case "start":
            o[B] = S, F = s++;
            break;
          case "end":
            delete o[B], --s;
          // falls through
          case "drag":
            $ = Ot(I || V, E), F = s;
            break;
        }
        U.call(
          k,
          x,
          new Ki(k, {
            sourceEvent: V,
            subject: b,
            target: f,
            identifier: B,
            active: F,
            x: $[0] + N,
            y: $[1] + D,
            dx: $[0] - A[0],
            dy: $[1] - A[1],
            dispatch: U
          }),
          H
        );
      };
  }
  return f.filter = function(x) {
    return arguments.length ? (e = typeof x == "function" ? x : mo(!!x), f) : e;
  }, f.container = function(x) {
    return arguments.length ? (t = typeof x == "function" ? x : mo(x), f) : t;
  }, f.subject = function(x) {
    return arguments.length ? (n = typeof x == "function" ? x : mo(x), f) : n;
  }, f.touchable = function(x) {
    return arguments.length ? (r = typeof x == "function" ? x : mo(!!x), f) : r;
  }, f.on = function() {
    var x = i.on.apply(i, arguments);
    return x === i ? f : x;
  }, f.clickDistance = function(x) {
    return arguments.length ? (g = (x = +x) * x, f) : Math.sqrt(g);
  }, f;
}
function Ms(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Sc(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function so() {
}
var Fr = 0.7, zo = 1 / Fr, lr = "\\s*([+-]?\\d+)\\s*", Kr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Wt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", n1 = /^#([0-9a-f]{3,8})$/, r1 = new RegExp(`^rgb\\(${lr},${lr},${lr}\\)$`), o1 = new RegExp(`^rgb\\(${Wt},${Wt},${Wt}\\)$`), i1 = new RegExp(`^rgba\\(${lr},${lr},${lr},${Kr}\\)$`), s1 = new RegExp(`^rgba\\(${Wt},${Wt},${Wt},${Kr}\\)$`), a1 = new RegExp(`^hsl\\(${Kr},${Wt},${Wt}\\)$`), l1 = new RegExp(`^hsla\\(${Kr},${Wt},${Wt},${Kr}\\)$`), ka = {
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
Ms(so, Xn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ea,
  // Deprecated! Use color.formatHex.
  formatHex: Ea,
  formatHex8: c1,
  formatHsl: u1,
  formatRgb: Sa,
  toString: Sa
});
function Ea() {
  return this.rgb().formatHex();
}
function c1() {
  return this.rgb().formatHex8();
}
function u1() {
  return Nc(this).formatHsl();
}
function Sa() {
  return this.rgb().formatRgb();
}
function Xn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = n1.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Na(t) : n === 3 ? new gt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? yo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? yo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = r1.exec(e)) ? new gt(t[1], t[2], t[3], 1) : (t = o1.exec(e)) ? new gt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = i1.exec(e)) ? yo(t[1], t[2], t[3], t[4]) : (t = s1.exec(e)) ? yo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = a1.exec(e)) ? Da(t[1], t[2] / 100, t[3] / 100, 1) : (t = l1.exec(e)) ? Da(t[1], t[2] / 100, t[3] / 100, t[4]) : ka.hasOwnProperty(e) ? Na(ka[e]) : e === "transparent" ? new gt(NaN, NaN, NaN, 0) : null;
}
function Na(e) {
  return new gt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function yo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new gt(e, t, n, r);
}
function d1(e) {
  return e instanceof so || (e = Xn(e)), e ? (e = e.rgb(), new gt(e.r, e.g, e.b, e.opacity)) : new gt();
}
function Zi(e, t, n, r) {
  return arguments.length === 1 ? d1(e) : new gt(e, t, n, r ?? 1);
}
function gt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Ms(gt, Zi, Sc(so, {
  brighter(e) {
    return e = e == null ? zo : Math.pow(zo, e), new gt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Fr : Math.pow(Fr, e), new gt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new gt(Yn(this.r), Yn(this.g), Yn(this.b), Ro(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Pa,
  // Deprecated! Use color.formatHex.
  formatHex: Pa,
  formatHex8: f1,
  formatRgb: Ta,
  toString: Ta
}));
function Pa() {
  return `#${Bn(this.r)}${Bn(this.g)}${Bn(this.b)}`;
}
function f1() {
  return `#${Bn(this.r)}${Bn(this.g)}${Bn(this.b)}${Bn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ta() {
  const e = Ro(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Yn(this.r)}, ${Yn(this.g)}, ${Yn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ro(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Yn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Bn(e) {
  return e = Yn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Da(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Vt(e, t, n, r);
}
function Nc(e) {
  if (e instanceof Vt) return new Vt(e.h, e.s, e.l, e.opacity);
  if (e instanceof so || (e = Xn(e)), !e) return new Vt();
  if (e instanceof Vt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new Vt(s, a, l, e.opacity);
}
function g1(e, t, n, r) {
  return arguments.length === 1 ? Nc(e) : new Vt(e, t, n, r ?? 1);
}
function Vt(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Ms(Vt, g1, Sc(so, {
  brighter(e) {
    return e = e == null ? zo : Math.pow(zo, e), new Vt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Fr : Math.pow(Fr, e), new Vt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new gt(
      Ci(e >= 240 ? e - 240 : e + 120, o, r),
      Ci(e, o, r),
      Ci(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Vt(Aa(this.h), wo(this.s), wo(this.l), Ro(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Ro(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Aa(this.h)}, ${wo(this.s) * 100}%, ${wo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Aa(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function wo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Ci(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Os = (e) => () => e;
function h1(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function v1(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function p1(e) {
  return (e = +e) == 1 ? Pc : function(t, n) {
    return n - t ? v1(t, n, e) : Os(isNaN(t) ? n : t);
  };
}
function Pc(e, t) {
  var n = t - e;
  return n ? h1(e, n) : Os(isNaN(e) ? t : e);
}
const Bo = function e(t) {
  var n = p1(t);
  function r(o, i) {
    var s = n((o = Zi(o)).r, (i = Zi(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), c = Pc(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = l(d), o.opacity = c(d), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function m1(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function y1(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function w1(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = Vr(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function _1(e, t) {
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
function x1(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Vr(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var Yi = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ki = new RegExp(Yi.source, "g");
function b1(e) {
  return function() {
    return e;
  };
}
function C1(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Tc(e, t) {
  var n = Yi.lastIndex = ki.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = Yi.exec(e)) && (o = ki.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: Ft(r, o) })), n = ki.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? C1(l[0].x) : b1(t) : (t = l.length, function(c) {
    for (var d = 0, g; d < t; ++d) a[(g = l[d]).i] = g.x(c);
    return a.join("");
  });
}
function Vr(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? Os(t) : (n === "number" ? Ft : n === "string" ? (r = Xn(t)) ? (t = r, Bo) : Tc : t instanceof Xn ? Bo : t instanceof Date ? _1 : y1(t) ? m1 : Array.isArray(t) ? w1 : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? x1 : Ft)(e, t);
}
var Ma = 180 / Math.PI, Wi = {
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
    rotate: Math.atan2(t, e) * Ma,
    skewX: Math.atan(l) * Ma,
    scaleX: s,
    scaleY: a
  };
}
var _o;
function k1(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Wi : Dc(t.a, t.b, t.c, t.d, t.e, t.f);
}
function E1(e) {
  return e == null || (_o || (_o = document.createElementNS("http://www.w3.org/2000/svg", "g")), _o.setAttribute("transform", e), !(e = _o.transform.baseVal.consolidate())) ? Wi : (e = e.matrix, Dc(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Ac(e, t, n, r) {
  function o(c) {
    return c.length ? c.pop() + " " : "";
  }
  function i(c, d, g, f, h, v) {
    if (c !== g || d !== f) {
      var y = h.push("translate(", null, t, null, n);
      v.push({ i: y - 4, x: Ft(c, g) }, { i: y - 2, x: Ft(d, f) });
    } else (g || f) && h.push("translate(" + g + t + f + n);
  }
  function s(c, d, g, f) {
    c !== d ? (c - d > 180 ? d += 360 : d - c > 180 && (c += 360), f.push({ i: g.push(o(g) + "rotate(", null, r) - 2, x: Ft(c, d) })) : d && g.push(o(g) + "rotate(" + d + r);
  }
  function a(c, d, g, f) {
    c !== d ? f.push({ i: g.push(o(g) + "skewX(", null, r) - 2, x: Ft(c, d) }) : d && g.push(o(g) + "skewX(" + d + r);
  }
  function l(c, d, g, f, h, v) {
    if (c !== g || d !== f) {
      var y = h.push(o(h) + "scale(", null, ",", null, ")");
      v.push({ i: y - 4, x: Ft(c, g) }, { i: y - 2, x: Ft(d, f) });
    } else (g !== 1 || f !== 1) && h.push(o(h) + "scale(" + g + "," + f + ")");
  }
  return function(c, d) {
    var g = [], f = [];
    return c = e(c), d = e(d), i(c.translateX, c.translateY, d.translateX, d.translateY, g, f), s(c.rotate, d.rotate, g, f), a(c.skewX, d.skewX, g, f), l(c.scaleX, c.scaleY, d.scaleX, d.scaleY, g, f), c = d = null, function(h) {
      for (var v = -1, y = f.length, C; ++v < y; ) g[(C = f[v]).i] = C.x(h);
      return g.join("");
    };
  };
}
var S1 = Ac(k1, "px, ", "px)", "deg)"), N1 = Ac(E1, ", ", ")", ")"), P1 = 1e-12;
function Oa(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function T1(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function D1(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Po = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], c = i[2], d = s[0], g = s[1], f = s[2], h = d - a, v = g - l, y = h * h + v * v, C, w;
    if (y < P1)
      w = Math.log(f / c) / t, C = function(H) {
        return [
          a + H * h,
          l + H * v,
          c * Math.exp(t * H * w)
        ];
      };
    else {
      var T = Math.sqrt(y), _ = (f * f - c * c + r * y) / (2 * c * n * T), x = (f * f - c * c - r * y) / (2 * f * n * T), E = Math.log(Math.sqrt(_ * _ + 1) - _), M = Math.log(Math.sqrt(x * x + 1) - x);
      w = (M - E) / t, C = function(H) {
        var B = H * w, Z = Oa(E), U = c / (n * T) * (Z * D1(t * B + E) - T1(E));
        return [
          a + U * h,
          l + U * v,
          c * Z / Oa(t * B + E)
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
var pr = 0, Ar = 0, Pr = 0, Mc = 1e3, qo, Mr, Fo = 0, jn = 0, li = 0, Zr = typeof performance == "object" && performance.now ? performance : Date, Oc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Hs() {
  return jn || (Oc(A1), jn = Zr.now() + li);
}
function A1() {
  jn = 0;
}
function Ko() {
  this._call = this._time = this._next = null;
}
Ko.prototype = Hc.prototype = {
  constructor: Ko,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Hs() : +n) + (t == null ? 0 : +t), !this._next && Mr !== this && (Mr ? Mr._next = this : qo = this, Mr = this), this._call = e, this._time = n, Xi();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Xi());
  }
};
function Hc(e, t, n) {
  var r = new Ko();
  return r.restart(e, t, n), r;
}
function M1() {
  Hs(), ++pr;
  for (var e = qo, t; e; )
    (t = jn - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --pr;
}
function Ha() {
  jn = (Fo = Zr.now()) + li, pr = Ar = 0;
  try {
    M1();
  } finally {
    pr = 0, H1(), jn = 0;
  }
}
function O1() {
  var e = Zr.now(), t = e - Fo;
  t > Mc && (li -= t, Fo = e);
}
function H1() {
  for (var e, t = qo, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : qo = n);
  Mr = e, Xi(r);
}
function Xi(e) {
  if (!pr) {
    Ar && (Ar = clearTimeout(Ar));
    var t = e - jn;
    t > 24 ? (e < 1 / 0 && (Ar = setTimeout(Ha, e - Zr.now() - li)), Pr && (Pr = clearInterval(Pr))) : (Pr || (Fo = Zr.now(), Pr = setInterval(O1, Mc)), pr = 1, Oc(Ha));
  }
}
function Va(e, t, n) {
  var r = new Ko();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var V1 = si("start", "end", "cancel", "interrupt"), L1 = [], Vc = 0, La = 1, ji = 2, To = 3, $a = 4, Gi = 5, Do = 6;
function ci(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  $1(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: V1,
    tween: L1,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Vc
  });
}
function Vs(e, t) {
  var n = It(e, t);
  if (n.state > Vc) throw new Error("too late; already scheduled");
  return n;
}
function tn(e, t) {
  var n = It(e, t);
  if (n.state > To) throw new Error("too late; already running");
  return n;
}
function It(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function $1(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Hc(i, 0, n.time);
  function i(c) {
    n.state = La, n.timer.restart(s, n.delay, n.time), n.delay <= c && s(c - n.delay);
  }
  function s(c) {
    var d, g, f, h;
    if (n.state !== La) return l();
    for (d in r)
      if (h = r[d], h.name === n.name) {
        if (h.state === To) return Va(s);
        h.state === $a ? (h.state = Do, h.timer.stop(), h.on.call("interrupt", e, e.__data__, h.index, h.group), delete r[d]) : +d < t && (h.state = Do, h.timer.stop(), h.on.call("cancel", e, e.__data__, h.index, h.group), delete r[d]);
      }
    if (Va(function() {
      n.state === To && (n.state = $a, n.timer.restart(a, n.delay, n.time), a(c));
    }), n.state = ji, n.on.call("start", e, e.__data__, n.index, n.group), n.state === ji) {
      for (n.state = To, o = new Array(f = n.tween.length), d = 0, g = -1; d < f; ++d)
        (h = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++g] = h);
      o.length = g + 1;
    }
  }
  function a(c) {
    for (var d = c < n.duration ? n.ease.call(null, c / n.duration) : (n.timer.restart(l), n.state = Gi, 1), g = -1, f = o.length; ++g < f; )
      o[g].call(e, d);
    n.state === Gi && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = Do, n.timer.stop(), delete r[t];
    for (var c in r) return;
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
      o = r.state > ji && r.state < Gi, r.state = Do, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function I1(e) {
  return this.each(function() {
    Ao(this, e);
  });
}
function z1(e, t) {
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
function R1(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = tn(this, e), s = i.tween;
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
function B1(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = It(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? z1 : R1)(n, e, t));
}
function Ls(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = tn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return It(o, r).value[t];
  };
}
function Lc(e, t) {
  var n;
  return (typeof t == "number" ? Ft : t instanceof Xn ? Bo : (n = Xn(t)) ? (t = n, Bo) : Tc)(e, t);
}
function q1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function F1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function K1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Z1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Y1(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function W1(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function X1(e, t) {
  var n = ai(e), r = n === "transform" ? N1 : Lc;
  return this.attrTween(e, typeof t == "function" ? (n.local ? W1 : Y1)(n, r, Ls(this, "attr." + e, t)) : t == null ? (n.local ? F1 : q1)(n) : (n.local ? Z1 : K1)(n, r, t));
}
function j1(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function G1(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function U1(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && G1(e, i)), n;
  }
  return o._value = t, o;
}
function J1(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && j1(e, i)), n;
  }
  return o._value = t, o;
}
function Q1(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = ai(e);
  return this.tween(n, (r.local ? U1 : J1)(r, t));
}
function ev(e, t) {
  return function() {
    Vs(this, e).delay = +t.apply(this, arguments);
  };
}
function tv(e, t) {
  return t = +t, function() {
    Vs(this, e).delay = t;
  };
}
function nv(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? ev : tv)(t, e)) : It(this.node(), t).delay;
}
function rv(e, t) {
  return function() {
    tn(this, e).duration = +t.apply(this, arguments);
  };
}
function ov(e, t) {
  return t = +t, function() {
    tn(this, e).duration = t;
  };
}
function iv(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? rv : ov)(t, e)) : It(this.node(), t).duration;
}
function sv(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    tn(this, e).ease = t;
  };
}
function av(e) {
  var t = this._id;
  return arguments.length ? this.each(sv(t, e)) : It(this.node(), t).ease;
}
function lv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    tn(this, e).ease = n;
  };
}
function cv(e) {
  if (typeof e != "function") throw new Error();
  return this.each(lv(this._id, e));
}
function uv(e) {
  typeof e != "function" && (e = hc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, c = 0; c < s; ++c)
      (l = i[c]) && e.call(l, l.__data__, c, i) && a.push(l);
  return new yn(r, this._parents, this._name, this._id);
}
function dv(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], c = n[a], d = l.length, g = s[a] = new Array(d), f, h = 0; h < d; ++h)
      (f = l[h] || c[h]) && (g[h] = f);
  for (; a < r; ++a)
    s[a] = t[a];
  return new yn(s, this._parents, this._name, this._id);
}
function fv(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function gv(e, t, n) {
  var r, o, i = fv(t) ? Vs : tn;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function hv(e, t) {
  var n = this._id;
  return arguments.length < 2 ? It(this.node(), n).on.on(e) : this.each(gv(n, e, t));
}
function vv(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function pv() {
  return this.on("end.remove", vv(this._id));
}
function mv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Ds(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, c = i[s] = new Array(l), d, g, f = 0; f < l; ++f)
      (d = a[f]) && (g = e.call(d, d.__data__, f, a)) && ("__data__" in d && (g.__data__ = d.__data__), c[f] = g, ci(c[f], t, n, f, c, It(d, n)));
  return new yn(i, this._parents, t, n);
}
function yv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = gc(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], c = l.length, d, g = 0; g < c; ++g)
      if (d = l[g]) {
        for (var f = e.call(d, d.__data__, g, l), h, v = It(d, n), y = 0, C = f.length; y < C; ++y)
          (h = f[y]) && ci(h, t, n, y, f, v);
        i.push(f), s.push(d);
      }
  return new yn(i, s, t, n);
}
var wv = io.prototype.constructor;
function _v() {
  return new wv(this._groups, this._parents);
}
function xv(e, t) {
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
function bv(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = vr(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Cv(e, t, n) {
  var r, o, i;
  return function() {
    var s = vr(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), vr(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function kv(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = tn(this, e), c = l.on, d = l.value[i] == null ? a || (a = $c(t)) : void 0;
    (c !== n || o !== d) && (r = (n = c).copy()).on(s, o = d), l.on = r;
  };
}
function Ev(e, t, n) {
  var r = (e += "") == "transform" ? S1 : Lc;
  return t == null ? this.styleTween(e, xv(e, r)).on("end.style." + e, $c(e)) : typeof t == "function" ? this.styleTween(e, Cv(e, r, Ls(this, "style." + e, t))).each(kv(this._id, e)) : this.styleTween(e, bv(e, r, t), n).on("end.style." + e, null);
}
function Sv(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function Nv(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && Sv(e, s, n)), r;
  }
  return i._value = t, i;
}
function Pv(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, Nv(e, t, n ?? ""));
}
function Tv(e) {
  return function() {
    this.textContent = e;
  };
}
function Dv(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function Av(e) {
  return this.tween("text", typeof e == "function" ? Dv(Ls(this, "text", e)) : Tv(e == null ? "" : e + ""));
}
function Mv(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function Ov(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && Mv(o)), t;
  }
  return r._value = e, r;
}
function Hv(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, Ov(e));
}
function Vv() {
  for (var e = this._name, t = this._id, n = Ic(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, c = 0; c < a; ++c)
      if (l = s[c]) {
        var d = It(l, t);
        ci(l, e, n, c, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new yn(r, this._parents, e, n);
}
function Lv() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var c = tn(this, r), d = c.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), c.on = t;
    }), o === 0 && i();
  });
}
var $v = 0;
function yn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Ic() {
  return ++$v;
}
var on = io.prototype;
yn.prototype = {
  constructor: yn,
  select: mv,
  selectAll: yv,
  selectChild: on.selectChild,
  selectChildren: on.selectChildren,
  filter: uv,
  merge: dv,
  selection: _v,
  transition: Vv,
  call: on.call,
  nodes: on.nodes,
  node: on.node,
  size: on.size,
  empty: on.empty,
  each: on.each,
  on: hv,
  attr: X1,
  attrTween: Q1,
  style: Ev,
  styleTween: Pv,
  text: Av,
  textTween: Hv,
  remove: pv,
  tween: B1,
  delay: nv,
  duration: iv,
  ease: av,
  easeVarying: cv,
  end: Lv,
  [Symbol.iterator]: on[Symbol.iterator]
};
function Iv(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var zv = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Iv
};
function Rv(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Bv(e) {
  var t, n;
  e instanceof yn ? (t = e._id, e = e._name) : (t = Ic(), (n = zv).time = Hs(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, c = 0; c < a; ++c)
      (l = s[c]) && ci(l, e, t, c, s, n || Rv(l, t));
  return new yn(r, this._parents, e, t);
}
io.prototype.interrupt = I1;
io.prototype.transition = Bv;
const xo = (e) => () => e;
function qv(e, {
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
function an(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
an.prototype = {
  constructor: an,
  scale: function(e) {
    return e === 1 ? this : new an(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new an(this.k, this.x + this.k * e, this.y + this.k * t);
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
var ui = new an(1, 0, 0);
zc.prototype = an.prototype;
function zc(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return ui;
  return e.__zoom;
}
function Ei(e) {
  e.stopImmediatePropagation();
}
function Tr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Fv(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Kv() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Ia() {
  return this.__zoom || ui;
}
function Zv(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Yv() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Wv(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function Rc() {
  var e = Fv, t = Kv, n = Wv, r = Zv, o = Yv, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = Po, c = si("start", "zoom", "end"), d, g, f, h = 500, v = 150, y = 0, C = 10;
  function w(b) {
    b.property("__zoom", Ia).on("wheel.zoom", B, { passive: !1 }).on("mousedown.zoom", Z).on("dblclick.zoom", U).filter(o).on("touchstart.zoom", $).on("touchmove.zoom", N).on("touchend.zoom touchcancel.zoom", D).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  w.transform = function(b, S, k, V) {
    var I = b.selection ? b.selection() : b;
    I.property("__zoom", Ia), b !== I ? E(b, S, k, V) : I.interrupt().each(function() {
      M(this, arguments).event(V).start().zoom(null, typeof S == "function" ? S.apply(this, arguments) : S).end();
    });
  }, w.scaleBy = function(b, S, k, V) {
    w.scaleTo(b, function() {
      var I = this.__zoom.k, A = typeof S == "function" ? S.apply(this, arguments) : S;
      return I * A;
    }, k, V);
  }, w.scaleTo = function(b, S, k, V) {
    w.transform(b, function() {
      var I = t.apply(this, arguments), A = this.__zoom, F = k == null ? x(I) : typeof k == "function" ? k.apply(this, arguments) : k, Y = A.invert(F), W = typeof S == "function" ? S.apply(this, arguments) : S;
      return n(_(T(A, W), F, Y), I, s);
    }, k, V);
  }, w.translateBy = function(b, S, k, V) {
    w.transform(b, function() {
      return n(this.__zoom.translate(
        typeof S == "function" ? S.apply(this, arguments) : S,
        typeof k == "function" ? k.apply(this, arguments) : k
      ), t.apply(this, arguments), s);
    }, null, V);
  }, w.translateTo = function(b, S, k, V, I) {
    w.transform(b, function() {
      var A = t.apply(this, arguments), F = this.__zoom, Y = V == null ? x(A) : typeof V == "function" ? V.apply(this, arguments) : V;
      return n(ui.translate(Y[0], Y[1]).scale(F.k).translate(
        typeof S == "function" ? -S.apply(this, arguments) : -S,
        typeof k == "function" ? -k.apply(this, arguments) : -k
      ), A, s);
    }, V, I);
  };
  function T(b, S) {
    return S = Math.max(i[0], Math.min(i[1], S)), S === b.k ? b : new an(S, b.x, b.y);
  }
  function _(b, S, k) {
    var V = S[0] - k[0] * b.k, I = S[1] - k[1] * b.k;
    return V === b.x && I === b.y ? b : new an(b.k, V, I);
  }
  function x(b) {
    return [(+b[0][0] + +b[1][0]) / 2, (+b[0][1] + +b[1][1]) / 2];
  }
  function E(b, S, k, V) {
    b.on("start.zoom", function() {
      M(this, arguments).event(V).start();
    }).on("interrupt.zoom end.zoom", function() {
      M(this, arguments).event(V).end();
    }).tween("zoom", function() {
      var I = this, A = arguments, F = M(I, A).event(V), Y = t.apply(I, A), W = k == null ? x(Y) : typeof k == "function" ? k.apply(I, A) : k, J = Math.max(Y[1][0] - Y[0][0], Y[1][1] - Y[0][1]), G = I.__zoom, Q = typeof S == "function" ? S.apply(I, A) : S, ue = l(G.invert(W).concat(J / G.k), Q.invert(W).concat(J / Q.k));
      return function(re) {
        if (re === 1) re = Q;
        else {
          var j = ue(re), xe = J / j[2];
          re = new an(xe, W[0] - j[0] * xe, W[1] - j[1] * xe);
        }
        F.zoom(null, re);
      };
    });
  }
  function M(b, S, k) {
    return !k && b.__zooming || new H(b, S);
  }
  function H(b, S) {
    this.that = b, this.args = S, this.active = 0, this.sourceEvent = null, this.extent = t.apply(b, S), this.taps = 0;
  }
  H.prototype = {
    event: function(b) {
      return b && (this.sourceEvent = b), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(b, S) {
      return this.mouse && b !== "mouse" && (this.mouse[1] = S.invert(this.mouse[0])), this.touch0 && b !== "touch" && (this.touch0[1] = S.invert(this.touch0[0])), this.touch1 && b !== "touch" && (this.touch1[1] = S.invert(this.touch1[0])), this.that.__zoom = S, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(b) {
      var S = Tt(this.that).datum();
      c.call(
        b,
        this.that,
        new qv(b, {
          sourceEvent: this.sourceEvent,
          target: w,
          transform: this.that.__zoom,
          dispatch: c
        }),
        S
      );
    }
  };
  function B(b, ...S) {
    if (!e.apply(this, arguments)) return;
    var k = M(this, S).event(b), V = this.__zoom, I = Math.max(i[0], Math.min(i[1], V.k * Math.pow(2, r.apply(this, arguments)))), A = Ot(b);
    if (k.wheel)
      (k.mouse[0][0] !== A[0] || k.mouse[0][1] !== A[1]) && (k.mouse[1] = V.invert(k.mouse[0] = A)), clearTimeout(k.wheel);
    else {
      if (V.k === I) return;
      k.mouse = [A, V.invert(A)], Ao(this), k.start();
    }
    Tr(b), k.wheel = setTimeout(F, v), k.zoom("mouse", n(_(T(V, I), k.mouse[0], k.mouse[1]), k.extent, s));
    function F() {
      k.wheel = null, k.end();
    }
  }
  function Z(b, ...S) {
    if (f || !e.apply(this, arguments)) return;
    var k = b.currentTarget, V = M(this, S, !0).event(b), I = Tt(b.view).on("mousemove.zoom", W, !0).on("mouseup.zoom", J, !0), A = Ot(b, k), F = b.clientX, Y = b.clientY;
    kc(b.view), Ei(b), V.mouse = [A, this.__zoom.invert(A)], Ao(this), V.start();
    function W(G) {
      if (Tr(G), !V.moved) {
        var Q = G.clientX - F, ue = G.clientY - Y;
        V.moved = Q * Q + ue * ue > y;
      }
      V.event(G).zoom("mouse", n(_(V.that.__zoom, V.mouse[0] = Ot(G, k), V.mouse[1]), V.extent, s));
    }
    function J(G) {
      I.on("mousemove.zoom mouseup.zoom", null), Ec(G.view, V.moved), Tr(G), V.event(G).end();
    }
  }
  function U(b, ...S) {
    if (e.apply(this, arguments)) {
      var k = this.__zoom, V = Ot(b.changedTouches ? b.changedTouches[0] : b, this), I = k.invert(V), A = k.k * (b.shiftKey ? 0.5 : 2), F = n(_(T(k, A), V, I), t.apply(this, S), s);
      Tr(b), a > 0 ? Tt(this).transition().duration(a).call(E, F, V, b) : Tt(this).call(w.transform, F, V, b);
    }
  }
  function $(b, ...S) {
    if (e.apply(this, arguments)) {
      var k = b.touches, V = k.length, I = M(this, S, b.changedTouches.length === V).event(b), A, F, Y, W;
      for (Ei(b), F = 0; F < V; ++F)
        Y = k[F], W = Ot(Y, this), W = [W, this.__zoom.invert(W), Y.identifier], I.touch0 ? !I.touch1 && I.touch0[2] !== W[2] && (I.touch1 = W, I.taps = 0) : (I.touch0 = W, A = !0, I.taps = 1 + !!d);
      d && (d = clearTimeout(d)), A && (I.taps < 2 && (g = W[0], d = setTimeout(function() {
        d = null;
      }, h)), Ao(this), I.start());
    }
  }
  function N(b, ...S) {
    if (this.__zooming) {
      var k = M(this, S).event(b), V = b.changedTouches, I = V.length, A, F, Y, W;
      for (Tr(b), A = 0; A < I; ++A)
        F = V[A], Y = Ot(F, this), k.touch0 && k.touch0[2] === F.identifier ? k.touch0[0] = Y : k.touch1 && k.touch1[2] === F.identifier && (k.touch1[0] = Y);
      if (F = k.that.__zoom, k.touch1) {
        var J = k.touch0[0], G = k.touch0[1], Q = k.touch1[0], ue = k.touch1[1], re = (re = Q[0] - J[0]) * re + (re = Q[1] - J[1]) * re, j = (j = ue[0] - G[0]) * j + (j = ue[1] - G[1]) * j;
        F = T(F, Math.sqrt(re / j)), Y = [(J[0] + Q[0]) / 2, (J[1] + Q[1]) / 2], W = [(G[0] + ue[0]) / 2, (G[1] + ue[1]) / 2];
      } else if (k.touch0) Y = k.touch0[0], W = k.touch0[1];
      else return;
      k.zoom("touch", n(_(F, Y, W), k.extent, s));
    }
  }
  function D(b, ...S) {
    if (this.__zooming) {
      var k = M(this, S).event(b), V = b.changedTouches, I = V.length, A, F;
      for (Ei(b), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, h), A = 0; A < I; ++A)
        F = V[A], k.touch0 && k.touch0[2] === F.identifier ? delete k.touch0 : k.touch1 && k.touch1[2] === F.identifier && delete k.touch1;
      if (k.touch1 && !k.touch0 && (k.touch0 = k.touch1, delete k.touch1), k.touch0) k.touch0[1] = this.__zoom.invert(k.touch0[0]);
      else if (k.end(), k.taps === 2 && (F = Ot(F, this), Math.hypot(g[0] - F[0], g[1] - F[1]) < C)) {
        var Y = Tt(this).on("dblclick.zoom");
        Y && Y.apply(this, arguments);
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
const Gn = {
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
], Bc = ["Enter", " ", "Escape"], Xv = {
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
var Zo;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(Zo || (Zo = {}));
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
var sn;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(sn || (sn = {}));
var Yr;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(Yr || (Yr = {}));
var ye;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(ye || (ye = {}));
const za = {
  [ye.Left]: ye.Right,
  [ye.Right]: ye.Left,
  [ye.Top]: ye.Bottom,
  [ye.Bottom]: ye.Top
};
function jv(e, t) {
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
function Ra(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t?.has(i) || r.push(o);
  }), r.length && n(r);
}
function Gv(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const qc = (e) => "id" in e && "source" in e && "target" in e, Uv = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), $s = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), ao = (e, t = [0, 0]) => {
  const { width: n, height: r } = $n(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, Jv = (e, t = { nodeOrigin: [0, 0] }) => {
  if (process.env.NODE_ENV === "development" && !t.nodeLookup && console.warn("Please use `getNodesBounds` from `useReactFlow`/`useSvelteFlow` hook to ensure correct values for sub flows. If not possible, you have to provide a nodeLookup to support sub flows."), e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : $s(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? Yo(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return di(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return fi(n);
}, lo = (e, t = {}) => {
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
    ...co(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const c of e.values()) {
    const { measured: d, selectable: g = !0, hidden: f = !1 } = c;
    if (s && !g || f)
      continue;
    const h = d.width ?? c.width ?? c.initialWidth ?? null, v = d.height ?? c.height ?? c.initialHeight ?? null, y = Wr(a, wr(c)), C = (h ?? 0) * (v ?? 0), w = i && y > 0;
    (!c.internals.handleBounds || w || y >= C || c.dragging) && l.push(c);
  }
  return l;
}, Qv = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function ep(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t?.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function tp({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const a = ep(e, s), l = lo(a), c = zs(l, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(c, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function Fc({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: c } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let g = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", Gn.error005());
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
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", Gn.error015()), {
    position: {
      x: f.x - l + (s.measured.width ?? 0) * d[0],
      y: f.y - c + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: f
  };
}
async function np({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((f) => f.id)), s = [];
  for (const f of n) {
    if (f.deletable === !1)
      continue;
    const h = i.has(f.id), v = !h && f.parentId && s.find((y) => y.id === f.parentId);
    (h || v) && s.push(f);
  }
  const a = new Set(t.map((f) => f.id)), l = r.filter((f) => f.deletable !== !1), d = Qv(s, l);
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
  const { width: r, height: o } = $n(n), { x: i, y: s } = n.internals.positionAbsolute;
  return Un(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const Ba = (e, t, n) => e < t ? yr(Math.abs(e - t), 1, t) / t : e > n ? -yr(Math.abs(e - n), 1, t) / t : 0, Zc = (e, t, n = 15, r = 40) => {
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
  const { x: n, y: r } = $s(e) ? e.internals.positionAbsolute : ao(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, Yo = (e, t = [0, 0]) => {
  const { x: n, y: r } = $s(e) ? e.internals.positionAbsolute : ao(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, Yc = (e, t) => fi(di(Qi(e), Qi(t))), Wr = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, qa = (e) => ln(e.width) && ln(e.height) && ln(e.x) && ln(e.y), ln = (e) => !isNaN(e) && isFinite(e), Wc = (e, t) => {
  process.env.NODE_ENV === "development" && console.warn(`[React Flow]: ${t} Help: https://reactflow.dev/error#${e}`);
}, gi = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), co = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? gi(a, s) : a;
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
function rp(e, t, n) {
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
function op(e, t, n, r, o, i) {
  const { x: s, y: a } = Wo(e, [t, n, r]), { x: l, y: c } = Wo({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - l, g = i - c;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(g)
  };
}
const zs = (e, t, n, r, o, i) => {
  const s = rp(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, c = Math.min(a, l), d = yr(c, r, o), g = e.x + e.width / 2, f = e.y + e.height / 2, h = t / 2 - g * d, v = n / 2 - f * d, y = op(e, h, v, d, t, n), C = {
    left: Math.min(y.left - s.left, 0),
    top: Math.min(y.top - s.top, 0),
    right: Math.min(y.right - s.right, 0),
    bottom: Math.min(y.bottom - s.bottom, 0)
  };
  return {
    x: h - C.left + C.right,
    y: v - C.top + C.bottom,
    zoom: d
  };
}, ir = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function _r(e) {
  return e !== void 0 && e !== "parent";
}
function $n(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function Xc(e) {
  return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function ip(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function sp(e) {
  return { ...Xv, ...e || {} };
}
function Si(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = Zt(e), a = co({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: c } = n ? gi(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: c,
    ...a
  };
}
const jc = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), Gc = (e) => e?.getRootNode?.() || window?.document, ap = ["INPUT", "SELECT", "TEXTAREA"];
function Uc(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : ap.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const Jc = (e) => "clientX" in e, Zt = (e, t) => {
  const n = Jc(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
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
      ...jc(s)
    };
  });
};
function lp({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, c = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - e), g = Math.abs(c - t);
  return [l, c, d, g];
}
function bo(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Ka({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case ye.Left:
      return [t - bo(t - r, i), n];
    case ye.Right:
      return [t + bo(r - t, i), n];
    case ye.Top:
      return [t, n - bo(n - o, i)];
    case ye.Bottom:
      return [t, n + bo(o - n, i)];
  }
}
function Qc({ sourceX: e, sourceY: t, sourcePosition: n = ye.Bottom, targetX: r, targetY: o, targetPosition: i = ye.Top, curvature: s = 0.25 }) {
  const [a, l] = Ka({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [c, d] = Ka({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [g, f, h, v] = lp({
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
function eu({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function cp({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r, elevateOnSelect: o = !1 }) {
  if (r !== void 0)
    return r;
  const i = o && n ? 1e3 : 0, s = Math.max(e.parentId ? e.internals.z : 0, t.parentId ? t.internals.z : 0);
  return i + s;
}
function up({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = di(Yo(e), Yo(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Wr(s, fi(i)) > 0;
}
const dp = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, fp = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), gp = (e, t) => {
  if (!e.source || !e.target)
    return Wc("006", Gn.error006()), t;
  let n;
  return qc(e) ? n = { ...e } : n = {
    ...e,
    id: dp(e)
  }, fp(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function tu({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = eu({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const Za = {
  [ye.Left]: { x: -1, y: 0 },
  [ye.Right]: { x: 1, y: 0 },
  [ye.Top]: { x: 0, y: -1 },
  [ye.Bottom]: { x: 0, y: 1 }
}, hp = ({ source: e, sourcePosition: t = ye.Bottom, target: n }) => t === ye.Left || t === ye.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Ya = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function vp({ source: e, sourcePosition: t = ye.Bottom, target: n, targetPosition: r = ye.Top, center: o, offset: i, stepPosition: s }) {
  const a = Za[t], l = Za[r], c = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, g = hp({
    source: c,
    sourcePosition: t,
    target: d
  }), f = g.x !== 0 ? "x" : "y", h = g[f];
  let v = [], y, C;
  const w = { x: 0, y: 0 }, T = { x: 0, y: 0 }, [, , _, x] = eu({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[f] * l[f] === -1) {
    f === "x" ? (y = o.x ?? c.x + (d.x - c.x) * s, C = o.y ?? (c.y + d.y) / 2) : (y = o.x ?? (c.x + d.x) / 2, C = o.y ?? c.y + (d.y - c.y) * s);
    const M = [
      { x: y, y: c.y },
      { x: y, y: d.y }
    ], H = [
      { x: c.x, y: C },
      { x: d.x, y: C }
    ];
    a[f] === h ? v = f === "x" ? M : H : v = f === "x" ? H : M;
  } else {
    const M = [{ x: c.x, y: d.y }], H = [{ x: d.x, y: c.y }];
    if (f === "x" ? v = a.x === h ? H : M : v = a.y === h ? M : H, t === r) {
      const N = Math.abs(e[f] - n[f]);
      if (N <= i) {
        const D = Math.min(i - 1, i - N);
        a[f] === h ? w[f] = (c[f] > e[f] ? -1 : 1) * D : T[f] = (d[f] > n[f] ? -1 : 1) * D;
      }
    }
    if (t !== r) {
      const N = f === "x" ? "y" : "x", D = a[f] === l[N], b = c[N] > d[N], S = c[N] < d[N];
      (a[f] === 1 && (!D && b || D && S) || a[f] !== 1 && (!D && S || D && b)) && (v = f === "x" ? M : H);
    }
    const B = { x: c.x + w.x, y: c.y + w.y }, Z = { x: d.x + T.x, y: d.y + T.y }, U = Math.max(Math.abs(B.x - v[0].x), Math.abs(Z.x - v[0].x)), $ = Math.max(Math.abs(B.y - v[0].y), Math.abs(Z.y - v[0].y));
    U >= $ ? (y = (B.x + Z.x) / 2, C = v[0].y) : (y = v[0].x, C = (B.y + Z.y) / 2);
  }
  return [[
    e,
    { x: c.x + w.x, y: c.y + w.y },
    ...v,
    { x: d.x + T.x, y: d.y + T.y },
    n
  ], y, C, _, x];
}
function pp(e, t, n, r) {
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
function Rs({ sourceX: e, sourceY: t, sourcePosition: n = ye.Bottom, targetX: r, targetY: o, targetPosition: i = ye.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: c = 20, stepPosition: d = 0.5 }) {
  const [g, f, h, v, y] = vp({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: c,
    stepPosition: d
  });
  return [g.reduce((w, T, _) => {
    let x = "";
    return _ > 0 && _ < g.length - 1 ? x = pp(g[_ - 1], T, g[_ + 1], s) : x = `${_ === 0 ? "M" : "L"}${T.x} ${T.y}`, w += x, w;
  }, ""), f, h, v, y];
}
function Wa(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function mp(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!Wa(t) || !Wa(n))
    return null;
  const r = t.internals.handleBounds || Xa(t.handles), o = n.internals.handleBounds || Xa(n.handles), i = ja(r?.source ?? [], e.sourceHandle), s = ja(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === mr.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return e.onError?.("008", Gn.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = i?.position || ye.Bottom, l = s?.position || ye.Top, c = Xr(t, i, a), d = Xr(n, s, l);
  return {
    sourceX: c.x,
    sourceY: c.y,
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
  const o = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? $n(e);
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
function ja(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function es(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function yp(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const c = es(l, t);
      i.has(c) || (s.push({ id: c, color: l.color || n, ...l }), i.add(c));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function wp(e, t, n, r, o) {
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
  nodeExtent: Ui,
  elevateNodesOnSelect: !0,
  defaults: {}
}, _p = {
  ...Bs,
  checkEquality: !0
};
function qs(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function xp(e, t, n) {
  const r = qs(Bs, n);
  for (const o of e.values())
    if (o.parentId)
      Fs(o, e, t, r);
    else {
      const i = ao(o, r.nodeOrigin), s = _r(o.extent) ? o.extent : r.nodeExtent, a = Un(i, s, $n(o));
      o.internals.positionAbsolute = a;
    }
}
function bp(e, t, n, r) {
  const o = qs(_p, r);
  let i = e.length > 0;
  const s = new Map(t), a = o?.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const l of e) {
    let c = s.get(l.id);
    if (o.checkEquality && l === c?.internals.userNode)
      t.set(l.id, c);
    else {
      const d = ao(l, o.nodeOrigin), g = _r(l.extent) ? l.extent : o.nodeExtent, f = Un(d, g, $n(l));
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
          z: nu(l, a),
          userNode: l
        }
      }, t.set(l.id, c);
    }
    (c.measured === void 0 || c.measured.width === void 0 || c.measured.height === void 0) && !c.hidden && (i = !1), l.parentId && Fs(c, t, n, r);
  }
  return i;
}
function Cp(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Fs(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: s } = qs(Bs, r), a = e.parentId, l = t.get(a);
  if (!l) {
    console.warn(`Parent node ${a} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  Cp(e, n);
  const c = o ? 1e3 : 0, { x: d, y: g, z: f } = kp(e, l, i, s, c), { positionAbsolute: h } = e.internals, v = d !== h.x || g !== h.y;
  (v || f !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: v ? { x: d, y: g } : h,
      z: f
    }
  });
}
function nu(e, t) {
  return (ln(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function kp(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = $n(e), l = ao(e, n), c = _r(e.extent) ? Un(l, e.extent, a) : l;
  let d = Un({ x: i + c.x, y: s + c.y }, r, a);
  e.extent === "parent" && (d = Kc(d, a, t));
  const g = nu(e, o), f = t.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: f >= g ? f + 1 : g
  };
}
function Ep(e, t, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const a = t.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? wr(a), c = Yc(l, s.rect);
    i.set(s.parentId, { expandedRect: c, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const c = a.internals.positionAbsolute, d = $n(a), g = a.origin ?? r, f = s.x < c.x ? Math.round(Math.abs(c.x - s.x)) : 0, h = s.y < c.y ? Math.round(Math.abs(c.y - s.y)) : 0, v = Math.max(d.width, Math.round(s.width)), y = Math.max(d.height, Math.round(s.height)), C = (v - d.width) * g[0], w = (y - d.height) * g[1];
    (f > 0 || h > 0 || C || w) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - f + C,
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
        width: v + (f ? g[0] * f - C : 0),
        height: y + (h ? g[1] * h - w : 0)
      }
    });
  }), o;
}
function Sp(e, t, n, r, o, i) {
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
    const v = jc(f.nodeElement), y = h.measured.width !== v.width || h.measured.height !== v.height;
    if (!!(v.width && v.height && (y || !h.internals.handleBounds || f.force))) {
      const w = f.nodeElement.getBoundingClientRect(), T = _r(h.extent) ? h.extent : i;
      let { positionAbsolute: _ } = h.internals;
      h.parentId && h.extent === "parent" ? _ = Kc(_, v, t.get(h.parentId)) : T && (_ = Un(_, T, v));
      const x = {
        ...h,
        measured: v,
        internals: {
          ...h.internals,
          positionAbsolute: _,
          handleBounds: {
            source: Fa("source", f.nodeElement, w, d, h.id),
            target: Fa("target", f.nodeElement, w, d, h.id)
          }
        }
      };
      t.set(h.id, x), h.parentId && Fs(x, t, n, { nodeOrigin: o }), a = !0, y && (l.push({
        id: h.id,
        type: "dimensions",
        dimensions: v
      }), h.expandParent && h.parentId && g.push({
        id: h.id,
        parentId: h.parentId,
        rect: wr(x, o)
      }));
    }
  }
  if (g.length > 0) {
    const f = Ep(g, t, n, o);
    l.push(...f);
  }
  return { changes: l, updatedInternals: a };
}
async function Np({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
    const c = r.get(s) || /* @__PURE__ */ new Map();
    r.set(s, c.set(n, t));
  }
}
function Pp(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, c = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    Ga("source", l, d, e, o, s), Ga("target", l, c, e, i, a), t.set(r.id, r);
  }
}
function Tp(e, t) {
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
function ru(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : ru(n, t) : !1;
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
function Dp(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !ru(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function Ap({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, c = { x: 0, y: 0 }, d = null, g = !1, f = null, h = !1, v = !1;
  function y({ noDragClassName: w, handleSelector: T, domNode: _, isSelectable: x, nodeId: E, nodeClickDistance: M = 0 }) {
    f = Tt(_);
    function H({ x: $, y: N }, D) {
      const { nodeLookup: b, nodeExtent: S, snapGrid: k, snapToGrid: V, nodeOrigin: I, onNodeDrag: A, onSelectionDrag: F, onError: Y, updateNodePositions: W } = t();
      i = { x: $, y: N };
      let J = !1, G = { x: 0, y: 0, x2: 0, y2: 0 };
      if (a.size > 1 && S) {
        const Q = lo(a);
        G = Qi(Q);
      }
      for (const [Q, ue] of a) {
        if (!b.has(Q))
          continue;
        let re = { x: $ - ue.distance.x, y: N - ue.distance.y };
        V && (re = gi(re, k));
        let j = [
          [S[0][0], S[0][1]],
          [S[1][0], S[1][1]]
        ];
        if (a.size > 1 && S && !ue.extent) {
          const { positionAbsolute: te } = ue.internals, oe = te.x - G.x + S[0][0], ie = te.x + ue.measured.width - G.x2 + S[1][0], ee = te.y - G.y + S[0][1], de = te.y + ue.measured.height - G.y2 + S[1][1];
          j = [
            [oe, ee],
            [ie, de]
          ];
        }
        const { position: xe, positionAbsolute: ve } = Fc({
          nodeId: Q,
          nextPosition: re,
          nodeLookup: b,
          nodeExtent: j,
          nodeOrigin: I,
          onError: Y
        });
        J = J || ue.position.x !== xe.x || ue.position.y !== xe.y, ue.position = xe, ue.internals.positionAbsolute = ve;
      }
      if (v = v || J, !!J && (W(a, !0), D && (r || A || !E && F))) {
        const [Q, ue] = Ni({
          nodeId: E,
          dragItems: a,
          nodeLookup: b
        });
        r?.(D, a, Q, ue), A?.(D, Q, ue), E || F?.(D, ue);
      }
    }
    async function B() {
      if (!d)
        return;
      const { transform: $, panBy: N, autoPanSpeed: D, autoPanOnNodeDrag: b } = t();
      if (!b) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [S, k] = Zc(c, d, D);
      (S !== 0 || k !== 0) && (i.x = (i.x ?? 0) - S / $[2], i.y = (i.y ?? 0) - k / $[2], await N({ x: S, y: k }) && H(i, null)), s = requestAnimationFrame(B);
    }
    function Z($) {
      const { nodeLookup: N, multiSelectionActive: D, nodesDraggable: b, transform: S, snapGrid: k, snapToGrid: V, selectNodesOnDrag: I, onNodeDragStart: A, onSelectionDragStart: F, unselectNodesAndEdges: Y } = t();
      g = !0, (!I || !x) && !D && E && (N.get(E)?.selected || Y()), x && I && E && e?.(E);
      const W = Si($.sourceEvent, { transform: S, snapGrid: k, snapToGrid: V, containerBounds: d });
      if (i = W, a = Dp(N, b, W, E), a.size > 0 && (n || A || !E && F)) {
        const [J, G] = Ni({
          nodeId: E,
          dragItems: a,
          nodeLookup: N
        });
        n?.($.sourceEvent, a, J, G), A?.($.sourceEvent, J, G), E || F?.($.sourceEvent, G);
      }
    }
    const U = t1().clickDistance(M).on("start", ($) => {
      const { domNode: N, nodeDragThreshold: D, transform: b, snapGrid: S, snapToGrid: k } = t();
      d = N?.getBoundingClientRect() || null, h = !1, v = !1, D === 0 && Z($), i = Si($.sourceEvent, { transform: b, snapGrid: S, snapToGrid: k, containerBounds: d }), c = Zt($.sourceEvent, d);
    }).on("drag", ($) => {
      const { autoPanOnNodeDrag: N, transform: D, snapGrid: b, snapToGrid: S, nodeDragThreshold: k, nodeLookup: V } = t(), I = Si($.sourceEvent, { transform: D, snapGrid: b, snapToGrid: S, containerBounds: d });
      if (($.sourceEvent.type === "touchmove" && $.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      E && !V.has(E)) && (h = !0), !h) {
        if (!l && N && g && (l = !0, B()), !g) {
          const A = I.xSnapped - (i.x ?? 0), F = I.ySnapped - (i.y ?? 0);
          Math.sqrt(A * A + F * F) > k && Z($);
        }
        (i.x !== I.xSnapped || i.y !== I.ySnapped) && a && g && (c = Zt($.sourceEvent, d), H(I, $.sourceEvent));
      }
    }).on("end", ($) => {
      if (!(!g || h) && (l = !1, g = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: N, updateNodePositions: D, onNodeDragStop: b, onSelectionDragStop: S } = t();
        if (v && (D(a, !1), v = !1), o || b || !E && S) {
          const [k, V] = Ni({
            nodeId: E,
            dragItems: a,
            nodeLookup: N,
            dragging: !1
          });
          o?.($.sourceEvent, a, k, V), b?.($.sourceEvent, k, V), E || S?.($.sourceEvent, V);
        }
      }
    }).filter(($) => {
      const N = $.target;
      return !$.button && (!w || !Ua(N, `.${w}`, _)) && (!T || Ua(N, T, _));
    });
    f.call(U);
  }
  function C() {
    f?.on(".drag", null);
  }
  return {
    update: y,
    destroy: C
  };
}
function Mp(e, t, n) {
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
const Op = 250;
function Hp(e, t, n, r) {
  let o = [], i = 1 / 0;
  const s = Mp(e, n, t + Op);
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
function ou(e, t, n, r, o, i = !1) {
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((c) => c.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...Xr(s, l, l.position, !0) } : l;
}
function iu(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function Vp(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const su = () => !0;
function Lp(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: c, autoPanOnConnect: d, flowId: g, panBy: f, cancelConnection: h, onConnectStart: v, onConnect: y, onConnectEnd: C, isValidConnection: w = su, onReconnectEnd: T, updateConnection: _, getTransform: x, getFromHandle: E, autoPanSpeed: M, dragThreshold: H = 1 }) {
  const B = Gc(e.target);
  let Z = 0, U;
  const { x: $, y: N } = Zt(e), D = B?.elementFromPoint($, N), b = iu(i, D), S = a?.getBoundingClientRect();
  let k = !1;
  if (!S || !b)
    return;
  const V = ou(o, b, r, l, t);
  if (!V)
    return;
  let I = Zt(e, S), A = !1, F = null, Y = !1, W = null;
  function J() {
    if (!d || !S)
      return;
    const [te, oe] = Zc(I, S, M);
    f({ x: te, y: oe }), Z = requestAnimationFrame(J);
  }
  const G = {
    ...V,
    nodeId: o,
    type: b,
    position: V.position
  }, Q = l.get(o);
  let re = {
    inProgress: !0,
    isValid: null,
    from: Xr(Q, G, ye.Left, !0),
    fromHandle: G,
    fromPosition: G.position,
    fromNode: Q,
    to: I,
    toHandle: null,
    toPosition: za[G.position],
    toNode: null
  };
  function j() {
    k = !0, _(re), v?.(e, { nodeId: o, handleId: r, handleType: b });
  }
  H === 0 && j();
  function xe(te) {
    if (!k) {
      const { x: de, y: ge } = Zt(te), pe = de - $, q = ge - N;
      if (!(pe * pe + q * q > H * H))
        return;
      j();
    }
    if (!E() || !G) {
      ve(te);
      return;
    }
    const oe = x();
    I = Zt(te, S), U = Hp(co(I, oe, !1, [1, 1]), n, l, G), A || (J(), A = !0);
    const ie = au(te, {
      handle: U,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: w,
      doc: B,
      lib: c,
      flowId: g,
      nodeLookup: l
    });
    W = ie.handleDomNode, F = ie.connection, Y = Vp(!!U, ie.isValid);
    const ee = {
      // from stays the same
      ...re,
      isValid: Y,
      to: ie.toHandle && Y ? Wo({ x: ie.toHandle.x, y: ie.toHandle.y }, oe) : I,
      toHandle: ie.toHandle,
      toPosition: Y && ie.toHandle ? ie.toHandle.position : za[G.position],
      toNode: ie.toHandle ? l.get(ie.toHandle.nodeId) : null
    };
    Y && U && re.toHandle && ee.toHandle && re.toHandle.type === ee.toHandle.type && re.toHandle.nodeId === ee.toHandle.nodeId && re.toHandle.id === ee.toHandle.id && re.to.x === ee.to.x && re.to.y === ee.to.y || (_(ee), re = ee);
  }
  function ve(te) {
    if (k) {
      (U || W) && F && Y && y?.(F);
      const { inProgress: oe, ...ie } = re, ee = {
        ...ie,
        toPosition: re.toHandle ? re.toPosition : null
      };
      C?.(te, ee), i && T?.(te, ee);
    }
    h(), cancelAnimationFrame(Z), A = !1, Y = !1, F = null, W = null, B.removeEventListener("mousemove", xe), B.removeEventListener("mouseup", ve), B.removeEventListener("touchmove", xe), B.removeEventListener("touchend", ve);
  }
  B.addEventListener("mousemove", xe), B.addEventListener("mouseup", ve), B.addEventListener("touchmove", xe), B.addEventListener("touchend", ve);
}
function au(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: c = su, nodeLookup: d }) {
  const g = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: h, y: v } = Zt(e), y = s.elementFromPoint(h, v), C = y?.classList.contains(`${a}-flow__handle`) ? y : f, w = {
    handleDomNode: C,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (C) {
    const T = iu(void 0, C), _ = C.getAttribute("data-nodeid"), x = C.getAttribute("data-handleid"), E = C.classList.contains("connectable"), M = C.classList.contains("connectableend");
    if (!_ || !T)
      return w;
    const H = {
      source: g ? _ : r,
      sourceHandle: g ? x : o,
      target: g ? r : _,
      targetHandle: g ? o : x
    };
    w.connection = H;
    const Z = E && M && (n === mr.Strict ? g && T === "source" || !g && T === "target" : _ !== r || x !== o);
    w.isValid = Z && c(H), w.toHandle = ou(_, T, x, d, n, !0);
  }
  return w;
}
const Ja = {
  onPointerDown: Lp,
  isValid: au
};
function $p({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Tt(e);
  function i({ translateExtent: a, width: l, height: c, zoomStep: d = 10, pannable: g = !0, zoomable: f = !0, inversePan: h = !1 }) {
    const v = (_) => {
      const x = n();
      if (_.sourceEvent.type !== "wheel" || !t)
        return;
      const E = -_.sourceEvent.deltaY * (_.sourceEvent.deltaMode === 1 ? 0.05 : _.sourceEvent.deltaMode ? 1 : 2e-3) * d, M = x[2] * Math.pow(2, E);
      t.scaleTo(M);
    };
    let y = [0, 0];
    const C = (_) => {
      (_.sourceEvent.type === "mousedown" || _.sourceEvent.type === "touchstart") && (y = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ]);
    }, w = (_) => {
      const x = n();
      if (_.sourceEvent.type !== "mousemove" && _.sourceEvent.type !== "touchmove" || !t)
        return;
      const E = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ], M = [E[0] - y[0], E[1] - y[1]];
      y = E;
      const H = r() * Math.max(x[2], Math.log(x[2])) * (h ? -1 : 1), B = {
        x: x[0] - M[0] * H,
        y: x[1] - M[1] * H
      }, Z = [
        [0, 0],
        [l, c]
      ];
      t.setViewportConstrained({
        x: B.x,
        y: B.y,
        zoom: x[2]
      }, Z, a);
    }, T = Rc().on("start", C).on("zoom", g ? w : null).on("zoom.wheel", f ? v : null);
    o.call(T, {});
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
const Ip = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, hi = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Pi = ({ x: e, y: t, zoom: n }) => ui.translate(e, t).scale(n), sr = (e, t) => e.target.closest(`.${t}`), lu = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), zp = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, Ti = (e, t = 0, n = zp, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, cu = (e) => {
  const t = e.ctrlKey && ir() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function Rp({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: c }) {
  return (d) => {
    if (sr(d, t))
      return !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const g = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const C = Ot(d), w = cu(d), T = g * Math.pow(2, w);
      r.scaleTo(n, T, C, d);
      return;
    }
    const f = d.deltaMode === 1 ? 20 : 1;
    let h = o === Xt.Vertical ? 0 : d.deltaX * f, v = o === Xt.Horizontal ? 0 : d.deltaY * f;
    !ir() && d.shiftKey && o !== Xt.Vertical && (h = d.deltaY * f, v = 0), r.translateBy(
      n,
      -(h / g) * i,
      -(v / g) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const y = hi(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, a?.(d, y)), e.isPanScrolling && (l?.(d, y), e.panScrollTimeout = setTimeout(() => {
      c?.(d, y), e.isPanScrolling = !1;
    }, 150));
  };
}
function Bp({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = sr(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function qp({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = hi(r.transform);
    e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, o);
  };
}
function Fp({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && lu(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, hi(i.transform));
  };
}
function Kp({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && lu(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && Ip(e.prevViewport, s.transform))) {
      const a = hi(s.transform);
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
function Zp({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: c }) {
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
function Yp({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: s, onPanZoomStart: a, onPanZoomEnd: l, onDraggingChange: c }) {
  const d = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, g = e.getBoundingClientRect(), f = Rc().clickDistance(!ln(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), h = Tt(e).call(f);
  _({
    x: i.x,
    y: i.y,
    zoom: yr(i.zoom, t, n)
  }, [
    [0, 0],
    [g.width, g.height]
  ], o);
  const v = h.on("wheel.zoom"), y = h.on("dblclick.zoom");
  f.wheelDelta(cu);
  function C(N, D) {
    return h ? new Promise((b) => {
      f?.interpolate(D?.interpolate === "linear" ? Vr : Po).transform(Ti(h, D?.duration, D?.ease, () => b(!0)), N);
    }) : Promise.resolve(!1);
  }
  function w({ noWheelClassName: N, noPanClassName: D, onPaneContextMenu: b, userSelectionActive: S, panOnScroll: k, panOnDrag: V, panOnScrollMode: I, panOnScrollSpeed: A, preventScrolling: F, zoomOnPinch: Y, zoomOnScroll: W, zoomOnDoubleClick: J, zoomActivationKeyPressed: G, lib: Q, onTransformChange: ue }) {
    S && !d.isZoomingOrPanning && T();
    const j = k && !G && !S ? Rp({
      zoomPanValues: d,
      noWheelClassName: N,
      d3Selection: h,
      d3Zoom: f,
      panOnScrollMode: I,
      panOnScrollSpeed: A,
      zoomOnPinch: Y,
      onPanZoomStart: a,
      onPanZoom: s,
      onPanZoomEnd: l
    }) : Bp({
      noWheelClassName: N,
      preventScrolling: F,
      d3ZoomHandler: v
    });
    if (h.on("wheel.zoom", j, { passive: !1 }), !S) {
      const ve = qp({
        zoomPanValues: d,
        onDraggingChange: c,
        onPanZoomStart: a
      });
      f.on("start", ve);
      const te = Fp({
        zoomPanValues: d,
        panOnDrag: V,
        onPaneContextMenu: !!b,
        onPanZoom: s,
        onTransformChange: ue
      });
      f.on("zoom", te);
      const oe = Kp({
        zoomPanValues: d,
        panOnDrag: V,
        panOnScroll: k,
        onPaneContextMenu: b,
        onPanZoomEnd: l,
        onDraggingChange: c
      });
      f.on("end", oe);
    }
    const xe = Zp({
      zoomActivationKeyPressed: G,
      panOnDrag: V,
      zoomOnScroll: W,
      panOnScroll: k,
      zoomOnDoubleClick: J,
      zoomOnPinch: Y,
      userSelectionActive: S,
      noPanClassName: D,
      noWheelClassName: N,
      lib: Q
    });
    f.filter(xe), J ? h.on("dblclick.zoom", y) : h.on("dblclick.zoom", null);
  }
  function T() {
    f.on("zoom", null);
  }
  async function _(N, D, b) {
    const S = Pi(N), k = f?.constrain()(S, D, b);
    return k && await C(k), new Promise((V) => V(k));
  }
  async function x(N, D) {
    const b = Pi(N);
    return await C(b, D), new Promise((S) => S(b));
  }
  function E(N) {
    if (h) {
      const D = Pi(N), b = h.property("__zoom");
      (b.k !== N.zoom || b.x !== N.x || b.y !== N.y) && f?.transform(h, D, null, { sync: !0 });
    }
  }
  function M() {
    const N = h ? zc(h.node()) : { x: 0, y: 0, k: 1 };
    return { x: N.x, y: N.y, zoom: N.k };
  }
  function H(N, D) {
    return h ? new Promise((b) => {
      f?.interpolate(D?.interpolate === "linear" ? Vr : Po).scaleTo(Ti(h, D?.duration, D?.ease, () => b(!0)), N);
    }) : Promise.resolve(!1);
  }
  function B(N, D) {
    return h ? new Promise((b) => {
      f?.interpolate(D?.interpolate === "linear" ? Vr : Po).scaleBy(Ti(h, D?.duration, D?.ease, () => b(!0)), N);
    }) : Promise.resolve(!1);
  }
  function Z(N) {
    f?.scaleExtent(N);
  }
  function U(N) {
    f?.translateExtent(N);
  }
  function $(N) {
    const D = !ln(N) || N < 0 ? 0 : N;
    f?.clickDistance(D);
  }
  return {
    update: w,
    destroy: T,
    setViewport: x,
    setViewportConstrained: _,
    getViewport: M,
    scaleTo: H,
    scaleBy: B,
    setScaleExtent: Z,
    setTranslateExtent: U,
    syncViewport: E,
    setClickDistance: $
  };
}
var Qa;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Qa || (Qa = {}));
var Wp = /* @__PURE__ */ X("<div><!></div>");
function An(e, t) {
  le(t, !0);
  let n = m(t, "id", 7, null), r = m(t, "type", 7, "source"), o = m(t, "position", 23, () => ye.Top), i = m(t, "style", 7), s = m(t, "class", 7), a = m(t, "isConnectable", 7), l = m(t, "isConnectableStart", 7, !0), c = m(t, "isConnectableEnd", 7, !0), d = m(t, "isValidConnection", 7), g = m(t, "onconnect", 7), f = m(t, "ondisconnect", 7), h = m(t, "children", 7), v = /* @__PURE__ */ Le(t, [
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
  const y = vn("svelteflow__node_id"), C = vn("svelteflow__node_connectable");
  let w = /* @__PURE__ */ P(() => r() === "target"), T = /* @__PURE__ */ P(() => a() !== void 0 ? a() : C.value), _ = zt(), x = /* @__PURE__ */ P(() => _.ariaLabelConfig), E = null;
  Rl(() => {
    if (g() || f()) {
      _.edges;
      let A = _.connectionLookup.get(`${y}-${r()}${n() ? `-${n()}` : ""}`);
      if (E && !jv(A, E)) {
        const F = A ?? /* @__PURE__ */ new Map();
        Ra(E, F, f()), Ra(F, E, g());
      }
      E = new Map(A);
    }
  });
  let M = /* @__PURE__ */ P(() => {
    if (!_.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: A, toHandle: F, isValid: Y } = _.connection, W = A && A.nodeId === y && A.type === r() && A.id === n(), J = F && F.nodeId === y && F.type === r() && F.id === n(), G = _.connectionMode === mr.Strict ? A?.type !== r() : y !== A?.nodeId || n() !== A?.id;
    return [
      !0,
      W,
      J,
      G,
      J && Y
    ];
  }), H = /* @__PURE__ */ P(() => Qr(u(M), 5)), B = /* @__PURE__ */ P(() => u(H)[0]), Z = /* @__PURE__ */ P(() => u(H)[1]), U = /* @__PURE__ */ P(() => u(H)[2]), $ = /* @__PURE__ */ P(() => u(H)[3]), N = /* @__PURE__ */ P(() => u(H)[4]);
  function D(A) {
    const F = _.onbeforeconnect?.(A) ?? A;
    F && (_.addEdge(F), _.onconnect?.(A));
  }
  function b(A) {
    const F = Jc(A);
    (F && A.button === 0 || !F) && Ja.onPointerDown(A, {
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
      onConnectStart: (Y, W) => {
        _.onconnectstart?.(Y, {
          nodeId: W.nodeId,
          handleId: W.handleId,
          handleType: W.handleType
        });
      },
      onConnectEnd: (Y, W) => {
        _.onconnectend?.(Y, W);
      },
      getTransform: () => [_.viewport.x, _.viewport.y, _.viewport.zoom],
      getFromHandle: () => _.connection.fromHandle,
      dragThreshold: _.connectionDragThreshold
    });
  }
  function S(A) {
    if (!y || !_.clickConnectStartHandle && !l())
      return;
    if (!_.clickConnectStartHandle) {
      _.onclickconnectstart?.(A, { nodeId: y, handleId: n(), handleType: r() }), _.clickConnectStartHandle = { nodeId: y, type: r(), id: n() };
      return;
    }
    const F = Gc(A.target), Y = d() ?? _.isValidConnection, { connectionMode: W, clickConnectStartHandle: J, flowId: G, nodeLookup: Q } = _, { connection: ue, isValid: re } = Ja.isValid(A, {
      handle: { nodeId: y, id: n(), type: r() },
      connectionMode: W,
      fromNodeId: J.nodeId,
      fromHandleId: J.id ?? null,
      fromType: J.type,
      isValidConnection: Y,
      flowId: G,
      doc: F,
      lib: "svelte",
      nodeLookup: Q
    });
    re && ue && D(ue);
    const j = structuredClone(Sl(_.connection));
    delete j.inProgress, j.toPosition = j.toHandle ? j.toHandle.position : null, _.onclickconnectend?.(A, j), _.clickConnectStartHandle = null;
  }
  var k = Wp(), V = () => {
  };
  Je(
    k,
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
      onmousedown: b,
      ontouchstart: b,
      onclick: _.clickConnect ? S : void 0,
      onkeypress: V,
      style: i(),
      role: "button",
      "aria-label": u(x)["handle.ariaLabel"],
      tabindex: "-1",
      ...v,
      [kn]: A
    }),
    [
      () => ({
        valid: u(N),
        connectingto: u(U),
        connectingfrom: u(Z),
        source: !u(w),
        target: u(w),
        connectablestart: l(),
        connectableend: c(),
        connectable: u(T),
        connectionindicator: u(T) && (!u(B) || u($)) && (u(B) || _.clickConnectStartHandle ? c() : l())
      })
    ]
  );
  var I = R(k);
  return Ze(I, () => h() ?? rt), z(k), O(e, k), ce({
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
    set position(A = ye.Top) {
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
ne(
  An,
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
var Xp = /* @__PURE__ */ X("<!> <!>", 1);
function Ks(e, t) {
  le(t, !0);
  let n = m(t, "data", 7), r = m(t, "targetPosition", 23, () => ye.Top), o = m(t, "sourcePosition", 23, () => ye.Bottom);
  var i = Xp(), s = se(i);
  An(s, {
    type: "target",
    get position() {
      return r();
    }
  });
  var a = L(s), l = L(a);
  return An(l, {
    type: "source",
    get position() {
      return o();
    }
  }), ke(() => Ie(a, ` ${n()?.label ?? ""} `)), O(e, i), ce({
    get data() {
      return n();
    },
    set data(c) {
      n(c), p();
    },
    get targetPosition() {
      return r();
    },
    set targetPosition(c = ye.Top) {
      r(c), p();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(c = ye.Bottom) {
      o(c), p();
    }
  });
}
ne(Ks, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var jp = /* @__PURE__ */ X(" <!>", 1);
function uu(e, t) {
  le(t, !0);
  let n = m(t, "data", 23, () => ({ label: "Node" })), r = m(t, "sourcePosition", 23, () => ye.Bottom);
  be();
  var o = jp(), i = se(o), s = L(i);
  return An(s, {
    type: "source",
    get position() {
      return r();
    }
  }), ke(() => Ie(i, `${n()?.label ?? ""} `)), O(e, o), ce({
    get data() {
      return n();
    },
    set data(a = { label: "Node" }) {
      n(a), p();
    },
    get sourcePosition() {
      return r();
    },
    set sourcePosition(a = ye.Bottom) {
      r(a), p();
    }
  });
}
ne(uu, { data: {}, sourcePosition: {} }, [], [], !0);
var Gp = /* @__PURE__ */ X(" <!>", 1);
function du(e, t) {
  le(t, !0);
  let n = m(t, "data", 23, () => ({ label: "Node" })), r = m(t, "targetPosition", 23, () => ye.Top);
  be();
  var o = Gp(), i = se(o), s = L(i);
  return An(s, {
    type: "target",
    get position() {
      return r();
    }
  }), ke(() => Ie(i, `${n()?.label ?? ""} `)), O(e, o), ce({
    get data() {
      return n();
    },
    set data(a = { label: "Node" }) {
      n(a), p();
    },
    get targetPosition() {
      return r();
    },
    set targetPosition(a = ye.Top) {
      r(a), p();
    }
  });
}
ne(du, { data: {}, targetPosition: {} }, [], [], !0);
function fu(e, t) {
}
ne(fu, {}, [], [], !0);
function Di(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function gu(e, t) {
  const n = /* @__PURE__ */ P(zt), r = /* @__PURE__ */ P(() => u(n).domNode);
  let o;
  return u(r) ? Di(e, u(r), t) : o = xs(() => {
    Ge(() => {
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
function hu() {
  let e = /* @__PURE__ */ Ne(typeof window > "u");
  if (u(e)) {
    const t = xs(() => {
      Ge(() => {
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
const el = (e) => Uv(e), Up = (e) => qc(e);
function Jt(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const Xo = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var Jp = /* @__PURE__ */ X("<div><!></div>");
const Qp = {
  hash: "svelte-w2n27y",
  code: ".transparent.svelte-w2n27y {background:transparent;}"
};
function vu(e, t) {
  le(t, !0), Ve(e, Qp);
  let n = m(t, "x", 7, 0), r = m(t, "y", 7, 0), o = m(t, "width", 7), i = m(t, "height", 7), s = m(t, "selectEdgeOnClick", 7, !1), a = m(t, "transparent", 7, !1), l = m(t, "class", 7), c = m(t, "children", 7), d = /* @__PURE__ */ Le(t, [
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
  const g = zt(), f = vn("svelteflow__edge_id");
  let h = /* @__PURE__ */ P(() => g.visible.edges.get(f)?.zIndex);
  var v = Jp(), y = () => {
    s() && f && g.handleEdgeSelection(f);
  };
  Je(
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
      [Kt]: w
    }),
    [
      () => ({
        display: hu().value ? "none" : void 0,
        cursor: s() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: Jt(o()),
        height: Jt(i()),
        "z-index": u(h)
      })
    ],
    "svelte-w2n27y"
  );
  var C = R(v);
  return Ze(C, () => c() ?? rt), z(v), it(v, (w, T) => gu?.(w, T), () => "edge-labels"), O(e, v), ce({
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
ne(
  vu,
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
var e0 = /* @__PURE__ */ me("<path></path>"), t0 = /* @__PURE__ */ me('<path fill="none"></path><!><!>', 1);
function uo(e, t) {
  le(t, !0);
  let n = m(t, "id", 7), r = m(t, "path", 7), o = m(t, "label", 7), i = m(t, "labelX", 7), s = m(t, "labelY", 7), a = m(t, "labelStyle", 7), l = m(t, "markerStart", 7), c = m(t, "markerEnd", 7), d = m(t, "style", 7), g = m(t, "interactionWidth", 7, 20), f = m(t, "class", 7), h = /* @__PURE__ */ Le(t, [
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
  var v = t0(), y = se(v), C = L(y);
  {
    var w = (x) => {
      var E = e0();
      Je(E, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": g(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...h
      })), O(x, E);
    };
    ae(C, (x) => {
      g() > 0 && x(w);
    });
  }
  var T = L(C);
  {
    var _ = (x) => {
      vu(x, {
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
          be();
          var H = Se();
          ke(() => Ie(H, o())), O(E, H);
        },
        $$slots: { default: !0 }
      });
    };
    ae(T, (x) => {
      o() && x(_);
    });
  }
  return ke(() => {
    we(y, "id", n()), we(y, "d", r()), mt(y, 0, xn(["svelte-flow__edge-path", f()])), we(y, "marker-start", l()), we(y, "marker-end", c()), ut(y, d());
  }), O(e, v), ce({
    get id() {
      return n();
    },
    set id(x) {
      n(x), p();
    },
    get path() {
      return r();
    },
    set path(x) {
      r(x), p();
    },
    get label() {
      return o();
    },
    set label(x) {
      o(x), p();
    },
    get labelX() {
      return i();
    },
    set labelX(x) {
      i(x), p();
    },
    get labelY() {
      return s();
    },
    set labelY(x) {
      s(x), p();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(x) {
      a(x), p();
    },
    get markerStart() {
      return l();
    },
    set markerStart(x) {
      l(x), p();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(x) {
      c(x), p();
    },
    get style() {
      return d();
    },
    set style(x) {
      d(x), p();
    },
    get interactionWidth() {
      return g();
    },
    set interactionWidth(x = 20) {
      g(x), p();
    },
    get class() {
      return f();
    },
    set class(x) {
      f(x), p();
    }
  });
}
ne(
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
function Zs(e, t) {
  le(t, !0);
  let n = m(t, "id", 7), r = m(t, "interactionWidth", 7), o = m(t, "label", 7), i = m(t, "labelStyle", 7), s = m(t, "markerEnd", 7), a = m(t, "markerStart", 7), l = m(t, "pathOptions", 7), c = m(t, "sourcePosition", 7), d = m(t, "sourceX", 7), g = m(t, "sourceY", 7), f = m(t, "style", 7), h = m(t, "targetPosition", 7), v = m(t, "targetX", 7), y = m(t, "targetY", 7), C = /* @__PURE__ */ P(() => Qc({
    sourceX: d(),
    sourceY: g(),
    targetX: v(),
    targetY: y(),
    sourcePosition: c(),
    targetPosition: h(),
    curvature: l()?.curvature
  })), w = /* @__PURE__ */ P(() => Qr(u(C), 3)), T = /* @__PURE__ */ P(() => u(w)[0]), _ = /* @__PURE__ */ P(() => u(w)[1]), x = /* @__PURE__ */ P(() => u(w)[2]);
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
      return u(x);
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
      return c();
    },
    set sourcePosition(E) {
      c(E), p();
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
  Zs,
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
function pu(e, t) {
  le(t, !0);
  let n = m(t, "interactionWidth", 7), r = m(t, "label", 7), o = m(t, "labelStyle", 7), i = m(t, "style", 7), s = m(t, "markerEnd", 7), a = m(t, "markerStart", 7), l = m(t, "sourcePosition", 7), c = m(t, "sourceX", 7), d = m(t, "sourceY", 7), g = m(t, "targetPosition", 7), f = m(t, "targetX", 7), h = m(t, "targetY", 7), v = /* @__PURE__ */ P(() => Rs({
    sourceX: c(),
    sourceY: d(),
    targetX: f(),
    targetY: h(),
    sourcePosition: l(),
    targetPosition: g()
  })), y = /* @__PURE__ */ P(() => Qr(u(v), 3)), C = /* @__PURE__ */ P(() => u(y)[0]), w = /* @__PURE__ */ P(() => u(y)[1]), T = /* @__PURE__ */ P(() => u(y)[2]);
  return uo(e, {
    get path() {
      return u(C);
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
ne(
  pu,
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
function mu(e, t) {
  le(t, !0);
  let n = m(t, "sourceX", 7), r = m(t, "sourceY", 7), o = m(t, "targetX", 7), i = m(t, "targetY", 7), s = m(t, "label", 7), a = m(t, "labelStyle", 7), l = m(t, "markerStart", 7), c = m(t, "markerEnd", 7), d = m(t, "interactionWidth", 7), g = m(t, "style", 7), f = /* @__PURE__ */ P(() => tu({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), h = /* @__PURE__ */ P(() => Qr(u(f), 3)), v = /* @__PURE__ */ P(() => u(h)[0]), y = /* @__PURE__ */ P(() => u(h)[1]), C = /* @__PURE__ */ P(() => u(h)[2]);
  return uo(e, {
    get path() {
      return u(v);
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
ne(
  mu,
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
function yu(e, t) {
  le(t, !0);
  let n = m(t, "sourceX", 7), r = m(t, "sourceY", 7), o = m(t, "sourcePosition", 7), i = m(t, "targetX", 7), s = m(t, "targetY", 7), a = m(t, "targetPosition", 7), l = m(t, "label", 7), c = m(t, "labelStyle", 7), d = m(t, "markerStart", 7), g = m(t, "markerEnd", 7), f = m(t, "interactionWidth", 7), h = m(t, "style", 7), v = /* @__PURE__ */ P(() => Rs({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), y = /* @__PURE__ */ P(() => Qr(u(v), 3)), C = /* @__PURE__ */ P(() => u(y)[0]), w = /* @__PURE__ */ P(() => u(y)[1]), T = /* @__PURE__ */ P(() => u(y)[2]);
  return uo(e, {
    get path() {
      return u(C);
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
ne(
  yu,
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
function n0(e) {
  let t = 0, n = Wn(0), r;
  return () => {
    $l() && (u(n), ro(() => (t === 0 && (r = nt(() => e(() => ko(n)))), t += 1, () => {
      Pf().then(() => {
        t -= 1, t === 0 && (r?.(), r = void 0);
      });
    })));
  };
}
class r0 {
  #t;
  #e;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(t, n) {
    this.#t = t, this.#e = n0(n);
  }
  get current() {
    return this.#e(), this.#t();
  }
}
const o0 = /\(.+\)/, i0 = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class s0 extends r0 {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(t, n) {
    let r = o0.test(t) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    t.split(/[\s,]+/).some((i) => i0.has(i.trim())) ? t : `(${t})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => Ri(o, "change", i)
    );
  }
}
function a0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  return Is(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function tl(e) {
  const { edges: t, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l } = e, c = /* @__PURE__ */ new Map();
  for (const d of t) {
    const g = r.get(d.source), f = r.get(d.target);
    if (!g || !f)
      continue;
    if (a) {
      const { visibleNodes: y, transform: C, width: w, height: T } = e;
      if (up({
        sourceNode: g,
        targetNode: f,
        width: w,
        height: T,
        transform: C
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
    const v = mp({
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
      zIndex: cp({
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
const wu = {
  input: uu,
  output: du,
  default: Ks,
  group: fu
}, _u = {
  straight: mu,
  smoothstep: pu,
  default: Zs,
  step: yu
};
function l0(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = lo(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return zs(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function c0(e) {
  class t {
    #t = /* @__PURE__ */ P(() => e.props.id ?? "1");
    get flowId() {
      return u(this.#t);
    }
    set flowId(r) {
      K(this.#t, r);
    }
    #e = /* @__PURE__ */ Ne(null);
    get domNode() {
      return u(this.#e);
    }
    set domNode(r) {
      K(this.#e, r);
    }
    #n = /* @__PURE__ */ Ne(null);
    get panZoom() {
      return u(this.#n);
    }
    set panZoom(r) {
      K(this.#n, r);
    }
    #r = /* @__PURE__ */ Ne(e.width ?? 0);
    get width() {
      return u(this.#r);
    }
    set width(r) {
      K(this.#r, r);
    }
    #o = /* @__PURE__ */ Ne(e.height ?? 0);
    get height() {
      return u(this.#o);
    }
    set height(r) {
      K(this.#o, r);
    }
    #i = /* @__PURE__ */ P(() => {
      const r = bp(e.nodes, this.nodeLookup, this.parentLookup, {
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
    #s = /* @__PURE__ */ P(() => this.panZoom !== null);
    get viewportInitialized() {
      return u(this.#s);
    }
    set viewportInitialized(r) {
      K(this.#s, r);
    }
    #a = /* @__PURE__ */ P(() => (Pp(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
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
    #l = /* @__PURE__ */ P(() => {
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
    #c = /* @__PURE__ */ P(() => {
      const r = this._prevSelectedEdgeIds.size, o = /* @__PURE__ */ new Set(), i = this.edges.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedEdgeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedEdgeIds.size > 0) && (this._prevSelectedEdges = i), this._prevSelectedEdgeIds = o, this._prevSelectedEdges;
    });
    get selectedEdges() {
      return u(this.#c);
    }
    set selectedEdges(r) {
      K(this.#c, r);
    }
    selectionChangeHandlers = /* @__PURE__ */ new Map();
    nodeLookup = /* @__PURE__ */ new Map();
    parentLookup = /* @__PURE__ */ new Map();
    connectionLookup = /* @__PURE__ */ new Map();
    edgeLookup = /* @__PURE__ */ new Map();
    _prevVisibleEdges = /* @__PURE__ */ new Map();
    #u = /* @__PURE__ */ P(() => {
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
        const { viewport: v, width: y, height: C } = this, w = [v.x, v.y, v.zoom];
        g = a0(s, w, y, C), f = tl({
          ...h,
          onlyRenderVisible: !0,
          visibleNodes: g,
          transform: w,
          width: y,
          height: C
        });
      } else
        g = this.nodeLookup, f = tl(h);
      return { nodes: g, edges: f };
    });
    get visible() {
      return u(this.#u);
    }
    set visible(r) {
      K(this.#u, r);
    }
    #d = /* @__PURE__ */ P(() => e.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return u(this.#d);
    }
    set nodesDraggable(r) {
      K(this.#d, r);
    }
    #f = /* @__PURE__ */ P(() => e.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return u(this.#f);
    }
    set nodesConnectable(r) {
      K(this.#f, r);
    }
    #g = /* @__PURE__ */ P(() => e.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return u(this.#g);
    }
    set elementsSelectable(r) {
      K(this.#g, r);
    }
    #h = /* @__PURE__ */ P(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return u(this.#h);
    }
    set nodesFocusable(r) {
      K(this.#h, r);
    }
    #v = /* @__PURE__ */ P(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return u(this.#v);
    }
    set edgesFocusable(r) {
      K(this.#v, r);
    }
    #p = /* @__PURE__ */ P(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return u(this.#p);
    }
    set disableKeyboardA11y(r) {
      K(this.#p, r);
    }
    #m = /* @__PURE__ */ P(() => e.props.minZoom ?? 0.5);
    get minZoom() {
      return u(this.#m);
    }
    set minZoom(r) {
      K(this.#m, r);
    }
    #y = /* @__PURE__ */ P(() => e.props.maxZoom ?? 2);
    get maxZoom() {
      return u(this.#y);
    }
    set maxZoom(r) {
      K(this.#y, r);
    }
    #w = /* @__PURE__ */ P(() => e.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return u(this.#w);
    }
    set nodeOrigin(r) {
      K(this.#w, r);
    }
    #_ = /* @__PURE__ */ P(() => e.props.nodeExtent ?? Ui);
    get nodeExtent() {
      return u(this.#_);
    }
    set nodeExtent(r) {
      K(this.#_, r);
    }
    #x = /* @__PURE__ */ P(() => e.props.translateExtent ?? Ui);
    get translateExtent() {
      return u(this.#x);
    }
    set translateExtent(r) {
      K(this.#x, r);
    }
    #b = /* @__PURE__ */ P(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return u(this.#b);
    }
    set defaultEdgeOptions(r) {
      K(this.#b, r);
    }
    #C = /* @__PURE__ */ P(() => e.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return u(this.#C);
    }
    set nodeDragThreshold(r) {
      K(this.#C, r);
    }
    #k = /* @__PURE__ */ P(() => e.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return u(this.#k);
    }
    set autoPanOnNodeDrag(r) {
      K(this.#k, r);
    }
    #E = /* @__PURE__ */ P(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return u(this.#E);
    }
    set autoPanOnConnect(r) {
      K(this.#E, r);
    }
    #S = /* @__PURE__ */ P(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return u(this.#S);
    }
    set autoPanOnNodeFocus(r) {
      K(this.#S, r);
    }
    #N = /* @__PURE__ */ P(() => e.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return u(this.#N);
    }
    set connectionDragThreshold(r) {
      K(this.#N, r);
    }
    fitViewQueued = e.props.fitView ?? !1;
    fitViewOptions = e.props.fitViewOptions;
    fitViewResolver = null;
    #P = /* @__PURE__ */ P(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return u(this.#P);
    }
    set snapGrid(r) {
      K(this.#P, r);
    }
    #T = /* @__PURE__ */ Ne(!1);
    get dragging() {
      return u(this.#T);
    }
    set dragging(r) {
      K(this.#T, r);
    }
    #D = /* @__PURE__ */ Ne(null);
    get selectionRect() {
      return u(this.#D);
    }
    set selectionRect(r) {
      K(this.#D, r);
    }
    #A = /* @__PURE__ */ Ne(!1);
    get selectionKeyPressed() {
      return u(this.#A);
    }
    set selectionKeyPressed(r) {
      K(this.#A, r);
    }
    #M = /* @__PURE__ */ Ne(!1);
    get multiselectionKeyPressed() {
      return u(this.#M);
    }
    set multiselectionKeyPressed(r) {
      K(this.#M, r);
    }
    #O = /* @__PURE__ */ Ne(!1);
    get deleteKeyPressed() {
      return u(this.#O);
    }
    set deleteKeyPressed(r) {
      K(this.#O, r);
    }
    #H = /* @__PURE__ */ Ne(!1);
    get panActivationKeyPressed() {
      return u(this.#H);
    }
    set panActivationKeyPressed(r) {
      K(this.#H, r);
    }
    #V = /* @__PURE__ */ Ne(!1);
    get zoomActivationKeyPressed() {
      return u(this.#V);
    }
    set zoomActivationKeyPressed(r) {
      K(this.#V, r);
    }
    #L = /* @__PURE__ */ Ne(null);
    get selectionRectMode() {
      return u(this.#L);
    }
    set selectionRectMode(r) {
      K(this.#L, r);
    }
    #$ = /* @__PURE__ */ Ne("");
    get ariaLiveMessage() {
      return u(this.#$);
    }
    set ariaLiveMessage(r) {
      K(this.#$, r);
    }
    #I = /* @__PURE__ */ P(() => e.props.selectionMode ?? Zo.Partial);
    get selectionMode() {
      return u(this.#I);
    }
    set selectionMode(r) {
      K(this.#I, r);
    }
    #z = /* @__PURE__ */ P(() => ({ ...wu, ...e.props.nodeTypes }));
    get nodeTypes() {
      return u(this.#z);
    }
    set nodeTypes(r) {
      K(this.#z, r);
    }
    #R = /* @__PURE__ */ P(() => ({ ..._u, ...e.props.edgeTypes }));
    get edgeTypes() {
      return u(this.#R);
    }
    set edgeTypes(r) {
      K(this.#R, r);
    }
    #B = /* @__PURE__ */ P(() => e.props.noPanClass ?? "nopan");
    get noPanClass() {
      return u(this.#B);
    }
    set noPanClass(r) {
      K(this.#B, r);
    }
    #q = /* @__PURE__ */ P(() => e.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return u(this.#q);
    }
    set noDragClass(r) {
      K(this.#q, r);
    }
    #F = /* @__PURE__ */ P(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return u(this.#F);
    }
    set noWheelClass(r) {
      K(this.#F, r);
    }
    #K = /* @__PURE__ */ P(() => sp(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return u(this.#K);
    }
    set ariaLabelConfig(r) {
      K(this.#K, r);
    }
    #Z = /* @__PURE__ */ Ne(l0(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return u(this.#Z);
    }
    set _viewport(r) {
      K(this.#Z, r);
    }
    get viewport() {
      return e.viewport ?? this._viewport;
    }
    set viewport(r) {
      e.viewport && (e.viewport = r), this._viewport = r;
    }
    #Y = /* @__PURE__ */ Ne(
      // _connection is viewport independent and originating from XYHandle
      Ji
    );
    get _connection() {
      return u(this.#Y);
    }
    set _connection(r) {
      K(this.#Y, r);
    }
    #W = /* @__PURE__ */ P(() => this._connection.inProgress ? {
      ...this._connection,
      to: co(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return u(this.#W);
    }
    set connection(r) {
      K(this.#W, r);
    }
    #X = /* @__PURE__ */ P(() => e.props.connectionMode ?? mr.Strict);
    get connectionMode() {
      return u(this.#X);
    }
    set connectionMode(r) {
      K(this.#X, r);
    }
    #j = /* @__PURE__ */ P(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return u(this.#j);
    }
    set connectionRadius(r) {
      K(this.#j, r);
    }
    #G = /* @__PURE__ */ P(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return u(this.#G);
    }
    set isValidConnection(r) {
      K(this.#G, r);
    }
    #U = /* @__PURE__ */ P(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return u(this.#U);
    }
    set selectNodesOnDrag(r) {
      K(this.#U, r);
    }
    #J = /* @__PURE__ */ P(() => e.props.defaultMarkerColor ?? "#b1b1b7");
    get defaultMarkerColor() {
      return u(this.#J);
    }
    set defaultMarkerColor(r) {
      K(this.#J, r);
    }
    #Q = /* @__PURE__ */ P(() => yp(e.edges, {
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
    #ee = /* @__PURE__ */ P(() => e.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return u(this.#ee);
    }
    set onlyRenderVisibleElements(r) {
      K(this.#ee, r);
    }
    #te = /* @__PURE__ */ P(() => e.props.onflowerror ?? Wc);
    get onerror() {
      return u(this.#te);
    }
    set onerror(r) {
      K(this.#te, r);
    }
    #ne = /* @__PURE__ */ P(() => e.props.ondelete);
    get ondelete() {
      return u(this.#ne);
    }
    set ondelete(r) {
      K(this.#ne, r);
    }
    #re = /* @__PURE__ */ P(() => e.props.onbeforedelete);
    get onbeforedelete() {
      return u(this.#re);
    }
    set onbeforedelete(r) {
      K(this.#re, r);
    }
    #oe = /* @__PURE__ */ P(() => e.props.onbeforeconnect);
    get onbeforeconnect() {
      return u(this.#oe);
    }
    set onbeforeconnect(r) {
      K(this.#oe, r);
    }
    #ie = /* @__PURE__ */ P(() => e.props.onconnect);
    get onconnect() {
      return u(this.#ie);
    }
    set onconnect(r) {
      K(this.#ie, r);
    }
    #se = /* @__PURE__ */ P(() => e.props.onconnectstart);
    get onconnectstart() {
      return u(this.#se);
    }
    set onconnectstart(r) {
      K(this.#se, r);
    }
    #ae = /* @__PURE__ */ P(() => e.props.onconnectend);
    get onconnectend() {
      return u(this.#ae);
    }
    set onconnectend(r) {
      K(this.#ae, r);
    }
    #le = /* @__PURE__ */ P(() => e.props.onbeforereconnect);
    get onbeforereconnect() {
      return u(this.#le);
    }
    set onbeforereconnect(r) {
      K(this.#le, r);
    }
    #ce = /* @__PURE__ */ P(() => e.props.onreconnect);
    get onreconnect() {
      return u(this.#ce);
    }
    set onreconnect(r) {
      K(this.#ce, r);
    }
    #ue = /* @__PURE__ */ P(() => e.props.onreconnectstart);
    get onreconnectstart() {
      return u(this.#ue);
    }
    set onreconnectstart(r) {
      K(this.#ue, r);
    }
    #de = /* @__PURE__ */ P(() => e.props.onreconnectend);
    get onreconnectend() {
      return u(this.#de);
    }
    set onreconnectend(r) {
      K(this.#de, r);
    }
    #fe = /* @__PURE__ */ P(() => e.props.clickConnect ?? !0);
    get clickConnect() {
      return u(this.#fe);
    }
    set clickConnect(r) {
      K(this.#fe, r);
    }
    #ge = /* @__PURE__ */ P(() => e.props.onclickconnectstart);
    get onclickconnectstart() {
      return u(this.#ge);
    }
    set onclickconnectstart(r) {
      K(this.#ge, r);
    }
    #he = /* @__PURE__ */ P(() => e.props.onclickconnectend);
    get onclickconnectend() {
      return u(this.#he);
    }
    set onclickconnectend(r) {
      K(this.#he, r);
    }
    #ve = /* @__PURE__ */ Ne(null);
    get clickConnectStartHandle() {
      return u(this.#ve);
    }
    set clickConnectStartHandle(r) {
      K(this.#ve, r);
    }
    #pe = /* @__PURE__ */ P(() => e.props.onselectiondrag);
    get onselectiondrag() {
      return u(this.#pe);
    }
    set onselectiondrag(r) {
      K(this.#pe, r);
    }
    #me = /* @__PURE__ */ P(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return u(this.#me);
    }
    set onselectiondragstart(r) {
      K(this.#me, r);
    }
    #ye = /* @__PURE__ */ P(() => e.props.onselectiondragstop);
    get onselectiondragstop() {
      return u(this.#ye);
    }
    set onselectiondragstop(r) {
      K(this.#ye, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await tp(
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
    _prefersDark = new s0("(prefers-color-scheme: dark)", e.props.colorModeSSR === "dark");
    #we = /* @__PURE__ */ P(() => e.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : e.props.colorMode ?? "light");
    get colorMode() {
      return u(this.#we);
    }
    set colorMode(r) {
      K(this.#we, r);
    }
    constructor() {
      process.env.NODE_ENV === "development" && (nl(e.nodes, "nodes"), nl(e.edges, "edges"));
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = Ji, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new t();
}
function nl(e, t) {
  try {
    e && e.length > 0 && structuredClone(e[0]);
  } catch {
    console.warn(`Use $state.raw for ${t} to prevent performance issues.`);
  }
}
function u0(e) {
  const t = vn(jr);
  if (!t)
    throw new Error(`In order to use ${e}() you need to wrap your component in a <SvelteFlowProvider />`);
  if (t.provider && typeof window == "object" && !$l())
    throw new Error(`Use $derived(${e}()) to receive updates when values change.`);
}
function zt() {
  const e = vn(jr);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return process.env.NODE_ENV === "development" && u0("useStore"), e.getStore();
}
const jr = Symbol();
function xu(e) {
  const t = c0(e);
  function n(N) {
    t.nodeTypes = {
      ...wu,
      ...N
    };
  }
  function r(N) {
    t.edgeTypes = {
      ..._u,
      ...N
    };
  }
  function o(N) {
    t.edges = gp(N, t.edges);
  }
  const i = (N, D = !1) => {
    t.nodes = t.nodes.map((b) => {
      const S = N.get(b.id);
      return S ? { ...b, position: S.position, dragging: D } : b;
    });
  };
  function s(N) {
    const { changes: D, updatedInternals: b } = Sp(N, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin);
    if (!b)
      return;
    xp(t.nodeLookup, t.parentLookup, {
      nodeOrigin: t.nodeOrigin,
      nodeExtent: t.nodeExtent
    }), t.fitViewQueued && t.resolveFitView();
    const S = /* @__PURE__ */ new Map();
    for (const k of D) {
      const V = t.nodeLookup.get(k.id)?.internals.userNode;
      if (!V)
        continue;
      const I = { ...V };
      switch (k.type) {
        case "dimensions": {
          const A = { ...I.measured, ...k.dimensions };
          k.setAttributes && (I.width = k.dimensions?.width ?? I.width, I.height = k.dimensions?.height ?? I.height), I.measured = A;
          break;
        }
        case "position":
          I.position = k.position ?? I.position;
          break;
      }
      S.set(k.id, I);
    }
    t.nodes = t.nodes.map((k) => S.get(k.id) ?? k);
  }
  function a(N) {
    const D = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = N, t.fitViewResolver = D, t.nodes = [...t.nodes], D.promise;
  }
  async function l(N, D, b) {
    const S = typeof b?.zoom < "u" ? b.zoom : t.maxZoom, k = t.panZoom;
    return k ? (await k.setViewport({
      x: t.width / 2 - N * S,
      y: t.height / 2 - D * S,
      zoom: S
    }, { duration: b?.duration, ease: b?.ease, interpolate: b?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function c(N, D) {
    const b = t.panZoom;
    return b ? b.scaleBy(N, D) : Promise.resolve(!1);
  }
  function d(N) {
    return c(1.2, N);
  }
  function g(N) {
    return c(1 / 1.2, N);
  }
  function f(N) {
    const D = t.panZoom;
    D && (D.setScaleExtent([N, t.maxZoom]), t.minZoom = N);
  }
  function h(N) {
    const D = t.panZoom;
    D && (D.setScaleExtent([t.minZoom, N]), t.maxZoom = N);
  }
  function v(N) {
    const D = t.panZoom;
    D && (D.setTranslateExtent(N), t.translateExtent = N);
  }
  function y(N) {
    t.panZoom?.setClickDistance(N);
  }
  function C(N, D = null) {
    let b = !1;
    const S = N.map((k) => (D ? D.has(k.id) : !0) && k.selected ? (b = !0, { ...k, selected: !1 }) : k);
    return [b, S];
  }
  function w(N) {
    const D = N?.nodes ? new Set(N.nodes.map((A) => A.id)) : null, [b, S] = C(t.nodes, D);
    b && (t.nodes = S);
    const k = N?.edges ? new Set(N.edges.map((A) => A.id)) : null, [V, I] = C(t.edges, k);
    V && (t.edges = I);
  }
  function T(N) {
    const D = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((b) => {
      const S = N.includes(b.id), k = D && b.selected || S;
      if (b.selected !== k) {
        const V = t.nodeLookup.get(b.id);
        return V && (V.selected = k), b.selected = k, { ...b };
      }
      return b;
    }), D || w({ nodes: [] });
  }
  function _(N) {
    const D = t.multiselectionKeyPressed;
    t.edges = t.edges.map((b) => {
      const S = N.includes(b.id), k = D && b.selected || S;
      return b.selected !== k ? { ...b, selected: k } : b;
    }), D || w({ edges: [] });
  }
  function x(N, D, b) {
    const S = t.nodeLookup.get(N);
    if (!S) {
      console.warn("012", Gn.error012(N));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, S.selected ? (D || S.selected && t.multiselectionKeyPressed) && (w({ nodes: [S], edges: [] }), requestAnimationFrame(() => b?.blur())) : T([N]);
  }
  function E(N) {
    const D = t.edgeLookup.get(N);
    if (!D) {
      console.warn("012", Gn.error012(N));
      return;
    }
    (D.selectable || t.elementsSelectable && typeof D.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, D.selected ? D.selected && t.multiselectionKeyPressed && w({ nodes: [], edges: [D] }) : _([N]));
  }
  function M(N, D) {
    const { nodeExtent: b, snapGrid: S, nodeOrigin: k, nodeLookup: V, nodesDraggable: I, onerror: A } = t, F = /* @__PURE__ */ new Map(), Y = S?.[0] ?? 5, W = S?.[1] ?? 5, J = N.x * Y * D, G = N.y * W * D;
    for (const Q of V.values()) {
      if (!(Q.selected && (Q.draggable || I && typeof Q.draggable > "u")))
        continue;
      let re = {
        x: Q.internals.positionAbsolute.x + J,
        y: Q.internals.positionAbsolute.y + G
      };
      S && (re = gi(re, S));
      const { position: j, positionAbsolute: xe } = Fc({
        nodeId: Q.id,
        nextPosition: re,
        nodeLookup: V,
        nodeExtent: b,
        nodeOrigin: k,
        onError: A
      });
      Q.position = j, Q.internals.positionAbsolute = xe, F.set(Q.id, Q);
    }
    i(F);
  }
  function H(N) {
    return Np({
      delta: N,
      panZoom: t.panZoom,
      transform: [t.viewport.x, t.viewport.y, t.viewport.zoom],
      translateExtent: t.translateExtent,
      width: t.width,
      height: t.height
    });
  }
  const B = (N) => {
    t._connection = { ...N };
  };
  function Z() {
    t._connection = Ji;
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
    addSelectedEdges: _,
    handleNodeSelection: x,
    handleEdgeSelection: E,
    moveSelectedNodes: M,
    panBy: H,
    updateConnection: B,
    cancelConnection: Z,
    reset: U
  });
}
function d0(e, t) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: l, paneClickDistance: c, setPanZoomInstance: d, onDraggingChange: g, onTransformChange: f } = t, h = Yp({
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
var f0 = /* @__PURE__ */ X('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function bu(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "panOnScrollMode", 23, () => Xt.Free), o = m(t, "preventScrolling", 7, !0), i = m(t, "zoomOnScroll", 7, !0), s = m(t, "zoomOnDoubleClick", 7, !0), a = m(t, "zoomOnPinch", 7, !0), l = m(t, "panOnDrag", 7, !0), c = m(t, "panOnScroll", 7, !1), d = m(t, "paneClickDistance", 7, 1), g = m(t, "onmovestart", 7), f = m(t, "onmove", 7), h = m(t, "onmoveend", 7), v = m(t, "oninit", 7), y = m(t, "children", 7), C = /* @__PURE__ */ P(() => n().panActivationKeyPressed || l()), w = /* @__PURE__ */ P(() => n().panActivationKeyPressed || c());
  const { viewport: T } = n();
  let _ = !1;
  Ge(() => {
    !_ && n().viewportInitialized && (v()?.(), _ = !0);
  });
  var x = f0(), E = R(x);
  return Ze(E, y), z(x), it(x, (M, H) => d0?.(M, H), () => ({
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
  })), O(e, x), ce({
    get store() {
      return n();
    },
    set store(M) {
      n(M), p();
    },
    get panOnScrollMode() {
      return r();
    },
    set panOnScrollMode(M = Xt.Free) {
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
      return c();
    },
    set panOnScroll(M = !1) {
      c(M), p();
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
  bu,
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
var g0 = /* @__PURE__ */ X("<div><!></div>");
function Cu(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "panOnDrag", 7, !0), o = m(t, "selectionOnDrag", 7), i = m(t, "onpaneclick", 7), s = m(t, "onpanecontextmenu", 7), a = m(t, "onselectionstart", 7), l = m(t, "onselectionend", 7), c = m(t, "children", 7), d, g = null, f = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ P(() => n().panActivationKeyPressed || r()), y = /* @__PURE__ */ P(() => n().selectionKeyPressed || n().selectionRect || o() && u(v) !== !0), C = /* @__PURE__ */ P(() => n().elementsSelectable && (u(y) || n().selectionRectMode === "user")), w = !1;
  function T(N) {
    if (w || n().connection.inProgress) {
      w = !1;
      return;
    }
    i()?.({ event: N }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0);
  }
  function _(N) {
    if (g = d?.getBoundingClientRect(), !n().elementsSelectable || !u(y) || N.button !== 0 || N.target !== d || !g)
      return;
    N.target?.setPointerCapture?.(N.pointerId);
    const { x: D, y: b } = Zt(N, g);
    n().unselectNodesAndEdges(), n(n().selectionRect = { width: 0, height: 0, startX: D, startY: b, x: D, y: b }, !0), a()?.(N);
  }
  function x(N) {
    if (!u(y) || !g || !n().selectionRect)
      return;
    w = !0;
    const D = Zt(N, g), { startX: b = 0, startY: S = 0 } = n().selectionRect, k = {
      ...n().selectionRect,
      x: D.x < b ? D.x : b,
      y: D.y < S ? D.y : S,
      width: Math.abs(D.x - b),
      height: Math.abs(D.y - S)
    }, V = f, I = h;
    f = new Set(Is(
      n().nodeLookup,
      k,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === Zo.Partial,
      !0
    ).map((F) => F.id));
    const A = n().defaultEdgeOptions.selectable ?? !0;
    h = /* @__PURE__ */ new Set();
    for (const F of f) {
      const Y = n().connectionLookup.get(F);
      if (Y)
        for (const { edgeId: W } of Y.values()) {
          const J = n().edgeLookup.get(W);
          J && (J.selectable ?? A) && h.add(W);
        }
    }
    il(V, f) || n(n().nodes = n().nodes.map(ol(f)), !0), il(I, h) || n(n().edges = n().edges.map(ol(h)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = k, !0);
  }
  function E(N) {
    N.button === 0 && (N.target?.releasePointerCapture?.(N.pointerId), !u(y) && n().selectionRectMode === "user" && N.target === d && T?.(N), n(n().selectionRect = null, !0), f.size > 0 && n(n().selectionRectMode = "nodes", !0), n().selectionKeyPressed && (w = !1), l()?.(N));
  }
  const M = (N) => {
    if (Array.isArray(u(v)) && u(v).includes(2)) {
      N.preventDefault();
      return;
    }
    s()?.({ event: N });
  };
  var H = g0();
  let B;
  var Z = /* @__PURE__ */ P(() => u(C) ? void 0 : rl(T, d));
  H.__click = function(...N) {
    u(Z)?.apply(this, N);
  }, H.__pointerdown = function(...N) {
    (u(C) ? _ : void 0)?.apply(this, N);
  }, H.__pointermove = function(...N) {
    (u(C) ? x : void 0)?.apply(this, N);
  }, H.__pointerup = function(...N) {
    (u(C) ? E : void 0)?.apply(this, N);
  };
  var U = /* @__PURE__ */ P(() => rl(M, d));
  H.__contextmenu = function(...N) {
    u(U)?.apply(this, N);
  };
  var $ = R(H);
  return Ze($, c), z(H), At(H, (N) => d = N, () => d), ke((N) => B = mt(H, 1, "svelte-flow__pane svelte-flow__container", null, B, N), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: u(y)
    })
  ]), O(e, H), ce({
    get store() {
      return n();
    },
    set store(N) {
      n(N), p();
    },
    get panOnDrag() {
      return r();
    },
    set panOnDrag(N = !0) {
      r(N), p();
    },
    get selectionOnDrag() {
      return o();
    },
    set selectionOnDrag(N) {
      o(N), p();
    },
    get onpaneclick() {
      return i();
    },
    set onpaneclick(N) {
      i(N), p();
    },
    get onpanecontextmenu() {
      return s();
    },
    set onpanecontextmenu(N) {
      s(N), p();
    },
    get onselectionstart() {
      return a();
    },
    set onselectionstart(N) {
      a(N), p();
    },
    get onselectionend() {
      return l();
    },
    set onselectionend(N) {
      l(N), p();
    },
    get children() {
      return c();
    },
    set children(N) {
      c(N), p();
    }
  });
}
Vn([
  "click",
  "pointerdown",
  "pointermove",
  "pointerup",
  "contextmenu"
]);
ne(
  Cu,
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
var h0 = /* @__PURE__ */ X('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function ku(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "children", 7);
  var o = h0();
  let i;
  var s = R(o);
  return Ze(s, r), z(o), ke((a) => i = ut(o, "", i, a), [
    () => ({
      transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
    })
  ]), O(e, o), ce({
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
ne(ku, { store: {}, children: {} }, [], [], !0);
function Eu(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = Ap({
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
var v0 = /* @__PURE__ */ X('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-62ze0y"> </div>'), p0 = /* @__PURE__ */ X('<div class="a11y-hidden svelte-62ze0y"> </div> <div class="a11y-hidden svelte-62ze0y"> </div> <!>', 1);
const m0 = {
  hash: "svelte-62ze0y",
  code: ".a11y-hidden.svelte-62ze0y {display:none;}.a11y-live-msg.svelte-62ze0y {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function Su(e, t) {
  le(t, !0), Ve(e, m0);
  let n = m(t, "store", 7);
  var r = p0(), o = se(r), i = R(o, !0);
  z(o);
  var s = L(o, 2), a = R(s, !0);
  z(s);
  var l = L(s, 2);
  {
    var c = (d) => {
      var g = v0(), f = R(g, !0);
      z(g), ke(() => {
        we(g, "id", `${y0}-${n().flowId}`), Ie(f, n().ariaLiveMessage);
      }), O(d, g);
    };
    ae(l, (d) => {
      n().disableKeyboardA11y || d(c);
    });
  }
  return ke(() => {
    we(o, "id", `${Nu}-${n().flowId}`), Ie(i, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), we(s, "id", `${Pu}-${n().flowId}`), Ie(a, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), O(e, r), ce({
    get store() {
      return n();
    },
    set store(d) {
      n(d), p();
    }
  });
}
ne(Su, { store: {} }, [], [], !0);
const Nu = "svelte-flow__node-desc", Pu = "svelte-flow__edge-desc", y0 = "svelte-flow__aria-live";
var w0 = /* @__PURE__ */ X("<div><!></div>");
function Tu(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "node", 7), o = m(t, "resizeObserver", 7), i = m(t, "nodeClickDistance", 7), s = m(t, "onnodeclick", 7), a = m(t, "onnodedrag", 7), l = m(t, "onnodedragstart", 7), c = m(t, "onnodedragstop", 7), d = m(t, "onnodepointerenter", 7), g = m(t, "onnodepointerleave", 7), f = m(t, "onnodepointermove", 7), h = m(t, "onnodecontextmenu", 7), v = /* @__PURE__ */ P(() => at(r().data, () => ({}), !0)), y = /* @__PURE__ */ P(() => at(r().selected, !1)), C = /* @__PURE__ */ P(() => r().draggable), w = /* @__PURE__ */ P(() => r().selectable), T = /* @__PURE__ */ P(() => at(r().deletable, !0)), _ = /* @__PURE__ */ P(() => r().connectable), x = /* @__PURE__ */ P(() => r().focusable), E = /* @__PURE__ */ P(() => at(r().hidden, !1)), M = /* @__PURE__ */ P(() => at(r().dragging, !1)), H = /* @__PURE__ */ P(() => at(r().style, "")), B = /* @__PURE__ */ P(() => r().class), Z = /* @__PURE__ */ P(() => at(r().type, "default")), U = /* @__PURE__ */ P(() => r().parentId), $ = /* @__PURE__ */ P(() => r().sourcePosition), N = /* @__PURE__ */ P(() => r().targetPosition), D = /* @__PURE__ */ P(() => at(r().measured, () => ({ width: 0, height: 0 }), !0).width), b = /* @__PURE__ */ P(() => at(r().measured, () => ({ width: 0, height: 0 }), !0).height), S = /* @__PURE__ */ P(() => r().initialWidth), k = /* @__PURE__ */ P(() => r().initialHeight), V = /* @__PURE__ */ P(() => r().width), I = /* @__PURE__ */ P(() => r().height), A = /* @__PURE__ */ P(() => r().dragHandle), F = /* @__PURE__ */ P(() => at(r().internals.z, 0)), Y = /* @__PURE__ */ P(() => r().internals.positionAbsolute.x), W = /* @__PURE__ */ P(() => r().internals.positionAbsolute.y), J = /* @__PURE__ */ P(() => r().internals.userNode), { id: G } = r(), Q = /* @__PURE__ */ P(() => u(C) ?? n().nodesDraggable), ue = /* @__PURE__ */ P(() => u(w) ?? n().elementsSelectable), re = /* @__PURE__ */ P(() => u(_) ?? n().nodesConnectable), j = /* @__PURE__ */ P(() => Xc(r())), xe = /* @__PURE__ */ P(() => !!r().internals.handleBounds), ve = /* @__PURE__ */ P(() => u(j) && u(xe)), te = /* @__PURE__ */ P(() => u(x) ?? n().nodesFocusable);
  function oe(he) {
    return n().parentLookup.has(he);
  }
  let ie = /* @__PURE__ */ P(() => oe(G)), ee = /* @__PURE__ */ Ne(null), de = null, ge = u(Z), pe = u($), q = u(N), qe = /* @__PURE__ */ P(() => n().nodeTypes[u(Z)] ?? Ks), Oe = /* @__PURE__ */ P(() => n().ariaLabelConfig);
  fr("svelteflow__node_connectable", {
    get value() {
      return u(re);
    }
  }), fr("svelteflow__node_id", G), process.env.NODE_ENV === "development" && Ge(() => {
    !!n().nodeTypes[u(Z)] || console.warn("003", Gn.error003(u(Z)));
  });
  let Ee = /* @__PURE__ */ P(() => {
    const he = u(D) === void 0 ? u(V) ?? u(S) : u(V), Be = u(b) === void 0 ? u(I) ?? u(k) : u(I);
    if (!(he === void 0 && Be === void 0 && u(H) === void 0))
      return `${u(H)};${he ? `width:${Jt(he)};` : ""}${Be ? `height:${Jt(Be)};` : ""}`;
  });
  Ge(() => {
    (u(Z) !== ge || u($) !== pe || u(N) !== q) && u(ee) !== null && requestAnimationFrame(() => {
      u(ee) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[G, { id: G, nodeElement: u(ee), force: !0 }]]));
    }), ge = u(Z), pe = u($), q = u(N);
  }), Ge(() => {
    o() && (!u(ve) || u(ee) !== de) && (de && o().unobserve(de), u(ee) && o().observe(u(ee)), de = u(ee));
  }), oi(() => {
    de && o()?.unobserve(de);
  });
  function _e(he) {
    u(ue) && (!n().selectNodesOnDrag || !u(Q) || n().nodeDragThreshold > 0) && n().handleNodeSelection(G), s()?.({ node: u(J), event: he });
  }
  function Fe(he) {
    if (!(Uc(he) || n().disableKeyboardA11y))
      if (Bc.includes(he.key) && u(ue)) {
        const Be = he.key === "Escape";
        n().handleNodeSelection(G, Be, u(ee));
      } else u(Q) && r().selected && Object.prototype.hasOwnProperty.call(Xo, he.key) && (he.preventDefault(), n(
        n().ariaLiveMessage = u(Oe)["node.a11yDescription.ariaLiveMessage"]({
          direction: he.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(Xo[he.key], he.shiftKey ? 4 : 1));
  }
  const yt = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !u(ee)?.matches(":focus-visible"))
      return;
    const { width: he, height: Be, viewport: wt } = n();
    Is(/* @__PURE__ */ new Map([[G, r()]]), { x: 0, y: 0, width: he, height: Be }, [wt.x, wt.y, wt.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: wt.zoom });
  };
  var Ye = Ae(), $e = se(Ye);
  {
    var Ke = (he) => {
      var Be = w0();
      Je(
        Be,
        (We, Nt) => ({
          "data-id": G,
          class: [
            "svelte-flow__node",
            `svelte-flow__node-${u(Z)}`,
            u(B)
          ],
          style: u(Ee),
          onclick: _e,
          onpointerenter: d() ? (tt) => d()({ node: u(J), event: tt }) : void 0,
          onpointerleave: g() ? (tt) => g()({ node: u(J), event: tt }) : void 0,
          onpointermove: f() ? (tt) => f()({ node: u(J), event: tt }) : void 0,
          oncontextmenu: h() ? (tt) => h()({ node: u(J), event: tt }) : void 0,
          onkeydown: u(te) ? Fe : void 0,
          onfocus: u(te) ? yt : void 0,
          tabIndex: u(te) ? 0 : void 0,
          role: r().ariaRole ?? (u(te) ? "group" : void 0),
          "aria-roledescription": "node",
          "aria-describedby": n().disableKeyboardA11y ? void 0 : `${Nu}-${n().flowId}`,
          ...r().domAttributes,
          [kn]: We,
          [Kt]: Nt
        }),
        [
          () => ({
            dragging: u(M),
            selected: u(y),
            draggable: u(Q),
            connectable: u(re),
            selectable: u(ue),
            nopan: u(Q),
            parent: u(ie)
          }),
          () => ({
            "z-index": u(F),
            transform: `translate(${u(Y) ?? ""}px, ${u(W) ?? ""}px)`,
            visibility: u(j) ? "visible" : "hidden"
          })
        ]
      );
      var wt = R(Be);
      Ps(wt, () => u(qe), (We, Nt) => {
        Nt(We, {
          get data() {
            return u(v);
          },
          get id() {
            return G;
          },
          get selected() {
            return u(y);
          },
          get selectable() {
            return u(ue);
          },
          get deletable() {
            return u(T);
          },
          get sourcePosition() {
            return u($);
          },
          get targetPosition() {
            return u(N);
          },
          get zIndex() {
            return u(F);
          },
          get dragging() {
            return u(M);
          },
          get draggable() {
            return u(Q);
          },
          get dragHandle() {
            return u(A);
          },
          get parentId() {
            return u(U);
          },
          get type() {
            return u(Z);
          },
          get isConnectable() {
            return u(re);
          },
          get positionAbsoluteX() {
            return u(Y);
          },
          get positionAbsoluteY() {
            return u(W);
          },
          get width() {
            return u(V);
          },
          get height() {
            return u(I);
          }
        });
      }), z(Be), it(Be, (We, Nt) => Eu?.(We, Nt), () => ({
        nodeId: G,
        isSelectable: u(ue),
        disabled: !u(Q),
        handleSelector: u(A),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (We, Nt, tt, Bt) => {
          a()?.({ event: We, targetNode: tt, nodes: Bt });
        },
        onDragStart: (We, Nt, tt, Bt) => {
          l()?.({ event: We, targetNode: tt, nodes: Bt });
        },
        onDragStop: (We, Nt, tt, Bt) => {
          c()?.({ event: We, targetNode: tt, nodes: Bt });
        },
        store: n()
      })), At(Be, (We) => K(ee, We), () => u(ee)), O(he, Be);
    };
    ae($e, (he) => {
      u(E) || he(Ke);
    });
  }
  return O(e, Ye), ce({
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
      return c();
    },
    set onnodedragstop(he) {
      c(he), p();
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
  Tu,
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
var _0 = /* @__PURE__ */ X('<div class="svelte-flow__nodes"></div>');
function Du(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "nodeClickDistance", 7), o = m(t, "onnodeclick", 7), i = m(t, "onnodecontextmenu", 7), s = m(t, "onnodepointerenter", 7), a = m(t, "onnodepointermove", 7), l = m(t, "onnodepointerleave", 7), c = m(t, "onnodedrag", 7), d = m(t, "onnodedragstart", 7), g = m(t, "onnodedragstop", 7);
  const f = typeof ResizeObserver > "u" ? null : new ResizeObserver((v) => {
    const y = /* @__PURE__ */ new Map();
    v.forEach((C) => {
      const w = C.target.getAttribute("data-id");
      y.set(w, { id: w, nodeElement: C.target, force: !0 });
    }), n().updateNodeInternals(y);
  });
  oi(() => {
    f?.disconnect();
  });
  var h = _0();
  return ct(h, 21, () => n().visible.nodes.values(), (v) => v.id, (v, y) => {
    Tu(v, {
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
      set store(C) {
        n(C);
      }
    });
  }), z(h), O(e, h), ce({
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
ne(
  Du,
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
var x0 = /* @__PURE__ */ me('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function Au(e, t) {
  le(t, !0);
  const n = m(t, "edge", 7), r = m(t, "store", 15), o = m(t, "onedgeclick", 7), i = m(t, "onedgecontextmenu", 7), s = m(t, "onedgepointerenter", 7), a = m(t, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ P(() => n().source), c = /* @__PURE__ */ P(() => n().target), d = /* @__PURE__ */ P(() => n().sourceX), g = /* @__PURE__ */ P(() => n().sourceY), f = /* @__PURE__ */ P(() => n().targetX), h = /* @__PURE__ */ P(() => n().targetY), v = /* @__PURE__ */ P(() => n().sourcePosition), y = /* @__PURE__ */ P(() => n().targetPosition), C = /* @__PURE__ */ P(() => at(n().animated, !1)), w = /* @__PURE__ */ P(() => at(n().selected, !1)), T = /* @__PURE__ */ P(() => n().label), _ = /* @__PURE__ */ P(() => n().labelStyle), x = /* @__PURE__ */ P(() => at(n().data, () => ({}), !0)), E = /* @__PURE__ */ P(() => n().style), M = /* @__PURE__ */ P(() => n().interactionWidth), H = /* @__PURE__ */ P(() => at(n().type, "default")), B = /* @__PURE__ */ P(() => n().sourceHandle), Z = /* @__PURE__ */ P(() => n().targetHandle), U = /* @__PURE__ */ P(() => n().markerStart), $ = /* @__PURE__ */ P(() => n().markerEnd), N = /* @__PURE__ */ P(() => n().selectable), D = /* @__PURE__ */ P(() => n().focusable), b = /* @__PURE__ */ P(() => at(n().deletable, !0)), S = /* @__PURE__ */ P(() => n().hidden), k = /* @__PURE__ */ P(() => n().zIndex), V = /* @__PURE__ */ P(() => n().class), I = /* @__PURE__ */ P(() => n().ariaLabel), A = null;
  const { id: F } = n();
  fr("svelteflow__edge_id", F);
  let Y = /* @__PURE__ */ P(() => u(N) ?? r().elementsSelectable), W = /* @__PURE__ */ P(() => u(D) ?? r().edgesFocusable), J = /* @__PURE__ */ P(() => r().edgeTypes[u(H)] ?? Zs), G = /* @__PURE__ */ P(() => u(U) ? `url('#${es(u(U), r().flowId)}')` : void 0), Q = /* @__PURE__ */ P(() => u($) ? `url('#${es(u($), r().flowId)}')` : void 0);
  function ue(oe) {
    const ie = r().edgeLookup.get(F);
    ie && (u(Y) && r().handleEdgeSelection(F), o()?.({ event: oe, edge: ie }));
  }
  function re(oe, ie) {
    const ee = r().edgeLookup.get(F);
    ee && ie({ event: oe, edge: ee });
  }
  function j(oe) {
    if (!r().disableKeyboardA11y && Bc.includes(oe.key) && u(Y)) {
      const { unselectNodesAndEdges: ie, addSelectedEdges: ee } = r();
      oe.key === "Escape" ? (A?.blur(), ie({ edges: [n()] })) : ee([F]);
    }
  }
  var xe = Ae(), ve = se(xe);
  {
    var te = (oe) => {
      var ie = x0();
      let ee;
      var de = R(ie);
      Je(
        de,
        (pe) => ({
          class: ["svelte-flow__edge", u(V)],
          "data-id": F,
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
          "aria-label": u(I) === null ? void 0 : u(I) ? u(I) : `Edge from ${u(l)} to ${u(c)}`,
          "aria-describedby": u(W) ? `${Pu}-${r().flowId}` : void 0,
          role: n().ariaRole ?? (u(W) ? "group" : "img"),
          "aria-roledescription": "edge",
          onkeydown: u(W) ? j : void 0,
          tabindex: u(W) ? 0 : void 0,
          ...n().domAttributes,
          [kn]: pe
        }),
        [
          () => ({
            animated: u(C),
            selected: u(w),
            selectable: u(Y)
          })
        ]
      );
      var ge = R(de);
      Ps(ge, () => u(J), (pe, q) => {
        q(pe, {
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
            return u(C);
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
            return u(x);
          },
          get style() {
            return u(E);
          },
          get interactionWidth() {
            return u(M);
          },
          get selectable() {
            return u(Y);
          },
          get deletable() {
            return u(b);
          },
          get type() {
            return u(H);
          },
          get sourceHandleId() {
            return u(B);
          },
          get targetHandleId() {
            return u(Z);
          },
          get markerStart() {
            return u(G);
          },
          get markerEnd() {
            return u(Q);
          }
        });
      }), z(de), At(de, (pe) => A = pe, () => A), z(ie), ke((pe) => ee = ut(ie, "", ee, pe), [() => ({ "z-index": u(k) })]), O(oe, ie);
    };
    ae(ve, (oe) => {
      u(S) || oe(te);
    });
  }
  return O(e, xe), ce({
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
ne(
  Au,
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
uf();
var b0 = /* @__PURE__ */ me("<defs></defs>");
function Mu(e, t) {
  le(t, !1);
  const n = zt();
  uc();
  var r = b0();
  ct(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    Ou(o, ze(() => u(i)));
  }), z(r), O(e, r), ce();
}
ne(Mu, {}, [], [], !0);
var C0 = /* @__PURE__ */ me('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), k0 = /* @__PURE__ */ me('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), E0 = /* @__PURE__ */ me('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Ou(e, t) {
  le(t, !0);
  let n = m(t, "id", 7), r = m(t, "type", 7), o = m(t, "width", 7, 12.5), i = m(t, "height", 7, 12.5), s = m(t, "markerUnits", 7, "strokeWidth"), a = m(t, "orient", 7, "auto-start-reverse"), l = m(t, "color", 7), c = m(t, "strokeWidth", 7);
  var d = E0(), g = R(d);
  {
    var f = (v) => {
      var y = C0();
      ke(() => {
        we(y, "stroke", l()), we(y, "stroke-width", c());
      }), O(v, y);
    }, h = (v, y) => {
      {
        var C = (w) => {
          var T = k0();
          ke(() => {
            we(T, "stroke", l()), we(T, "stroke-width", c()), we(T, "fill", l());
          }), O(w, T);
        };
        ae(
          v,
          (w) => {
            r() === Yr.ArrowClosed && w(C);
          },
          y
        );
      }
    };
    ae(g, (v) => {
      r() === Yr.Arrow ? v(f) : v(h, !1);
    });
  }
  return z(d), ke(() => {
    we(d, "id", n()), we(d, "markerWidth", `${o()}`), we(d, "markerHeight", `${i()}`), we(d, "markerUnits", s()), we(d, "orient", a());
  }), O(e, d), ce({
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
ne(
  Ou,
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
var S0 = /* @__PURE__ */ X('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function Hu(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "onedgeclick", 7), o = m(t, "onedgecontextmenu", 7), i = m(t, "onedgepointerenter", 7), s = m(t, "onedgepointerleave", 7);
  var a = S0(), l = R(a), c = R(l);
  Mu(c, {}), z(l);
  var d = L(l, 2);
  return ct(d, 17, () => n().visible.edges.values(), (g) => g.id, (g, f) => {
    Au(g, {
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
  }), z(a), O(e, a), ce({
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
  Hu,
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
var N0 = /* @__PURE__ */ X('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const P0 = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function Ys(e, t) {
  le(t, !0), Ve(e, P0);
  let n = m(t, "x", 7, 0), r = m(t, "y", 7, 0), o = m(t, "width", 7, 0), i = m(t, "height", 7, 0), s = m(t, "isVisible", 7, !0);
  var a = Ae(), l = se(a);
  {
    var c = (d) => {
      var g = N0();
      let f;
      ke((h) => f = ut(g, "", f, h), [
        () => ({
          width: typeof o() == "string" ? o() : Jt(o()),
          height: typeof i() == "string" ? i() : Jt(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), O(d, g);
    };
    ae(l, (d) => {
      s() && d(c);
    });
  }
  return O(e, a), ce({
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
ne(Ys, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
function T0(e, t, n) {
  const r = t().nodes.filter((o) => o.selected);
  n()?.({ nodes: r, event: e });
}
function D0(e, t, n) {
  const r = t().nodes.filter((o) => o.selected);
  n()?.({ nodes: r, event: e });
}
var A0 = /* @__PURE__ */ X("<div><!></div>");
const M0 = {
  hash: "svelte-16qgzgd",
  code: ".svelte-flow__selection-wrapper.svelte-16qgzgd {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}"
};
function Vu(e, t) {
  le(t, !0), Ve(e, M0);
  let n = m(t, "store", 15), r = m(t, "onnodedrag", 7), o = m(t, "onnodedragstart", 7), i = m(t, "onnodedragstop", 7), s = m(t, "onselectionclick", 7), a = m(t, "onselectioncontextmenu", 7), l = /* @__PURE__ */ Ne(void 0);
  Ge(() => {
    n().disableKeyboardA11y || u(l)?.focus({ preventScroll: !0 });
  });
  let c = /* @__PURE__ */ P(() => n().selectionRectMode === "nodes" ? (n().nodes, lo(n().nodeLookup, { filter: (v) => !!v.selected })) : null);
  function d(v) {
    Object.prototype.hasOwnProperty.call(Xo, v.key) && (v.preventDefault(), n().moveSelectedNodes(Xo[v.key], v.shiftKey ? 4 : 1));
  }
  var g = Ae(), f = se(g);
  {
    var h = (v) => {
      var y = A0();
      y.__contextmenu = [T0, n, a], y.__click = [D0, n, s], y.__keydown = function(...T) {
        (n().disableKeyboardA11y ? void 0 : d)?.apply(this, T);
      };
      let C;
      var w = R(y);
      Ys(w, { width: "100%", height: "100%", x: 0, y: 0 }), z(y), it(y, (T, _) => Eu?.(T, _), () => ({
        disabled: !1,
        store: n(),
        onDrag: (T, _, x, E) => {
          r()?.({ event: T, targetNode: null, nodes: E });
        },
        onDragStart: (T, _, x, E) => {
          o()?.({ event: T, targetNode: null, nodes: E });
        },
        onDragStop: (T, _, x, E) => {
          i()?.({ event: T, targetNode: null, nodes: E });
        }
      })), At(y, (T) => K(l, T), () => u(l)), ke(
        (T) => {
          mt(y, 1, xn(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-16qgzgd"), we(y, "role", n().disableKeyboardA11y ? void 0 : "button"), we(y, "tabindex", n().disableKeyboardA11y ? void 0 : -1), C = ut(y, "", C, T);
        },
        [
          () => ({
            width: Jt(u(c).width),
            height: Jt(u(c).height),
            transform: `translate(${u(c).x ?? ""}px, ${u(c).y ?? ""}px)`
          })
        ]
      ), O(v, y);
    };
    ae(f, (v) => {
      n().selectionRectMode === "nodes" && u(c) && ln(u(c).x) && ln(u(c).y) && v(h);
    });
  }
  return O(e, g), ce({
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
Vn(["contextmenu", "click", "keydown"]);
ne(
  Vu,
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
function O0(e) {
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
    const l = Array.isArray(r) ? r : [r], c = [a.metaKey, a.altKey, a.shiftKey, a.ctrlKey].reduce(
      (d, g, f) => g ? d | 1 << f : d,
      0
    );
    for (const d of l) {
      const g = {
        preventDefault: !1,
        enabled: !0,
        ...d
      }, { modifier: f, key: h, callback: v, preventDefault: y, enabled: C } = g;
      if (C) {
        if (a.key !== h) continue;
        if (f === null || f === !1) {
          if (c !== 0) continue;
        } else if (f !== void 0 && f?.[0]?.length > 0) {
          const T = Array.isArray(f) ? f : [f];
          let _ = !1;
          for (const x of T)
            if ((Array.isArray(x) ? x : [x]).reduce(
              (M, H) => M | O0(H),
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
function dt() {
  const e = /* @__PURE__ */ P(zt), t = (i) => {
    const s = el(i) ? i : u(e).nodeLookup.get(i.id), a = s.parentId ? ip(s.position, s.measured, s.parentId, u(e).nodeLookup, u(e).nodeOrigin) : s.position, l = {
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
        return a?.replace && el(c) ? c : { ...l, ...c };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    u(e).edges = nt(() => u(e).edges).map((l) => {
      if (l.id === i) {
        const c = typeof s == "function" ? s(l) : s;
        return a.replace && Up(c) ? c : { ...l, ...c };
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
    getNodes: (i) => i === void 0 ? u(e).nodes : sl(u(e).nodeLookup, i),
    getEdge: (i) => u(e).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? u(e).edges : sl(u(e).edgeLookup, i),
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
    getViewport: () => Sl(u(e).viewport),
    setCenter: async (i, s, a) => u(e).setCenter(i, s, a),
    fitView: (i) => u(e).fitView(i),
    fitBounds: async (i, s) => {
      if (!u(e).panZoom)
        return Promise.resolve(!1);
      const a = zs(i, u(e).width, u(e).height, u(e).minZoom, u(e).maxZoom, s?.padding ?? 0.1);
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
      const { nodes: a, edges: l } = await np({
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
      const { x: s, y: a, zoom: l } = u(e).viewport, { x: c, y: d } = u(e).domNode.getBoundingClientRect(), g = Wo(i, [s, a, l]);
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
    getNodesBounds: (i) => Jv(i, {
      nodeLookup: u(e).nodeLookup,
      nodeOrigin: u(e).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(u(e).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
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
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "selectionKey", 7, "Shift"), o = m(t, "multiSelectionKey", 23, () => ir() ? "Meta" : "Control"), i = m(t, "deleteKey", 7, "Backspace"), s = m(t, "panActivationKey", 7, " "), a = m(t, "zoomActivationKey", 23, () => ir() ? "Meta" : "Control"), { deleteElements: l } = dt();
  function c(y) {
    return y !== null && typeof y == "object";
  }
  function d(y) {
    return c(y) ? y.modifier || [] : [];
  }
  function g(y) {
    return y == null ? "" : c(y) ? y.key : y;
  }
  function f(y, C) {
    return (Array.isArray(y) ? y : [y]).map((T) => {
      const _ = g(T);
      return {
        key: _,
        modifier: d(T),
        enabled: _ !== null,
        callback: C
      };
    });
  }
  function h() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  async function v() {
    const y = n().nodes.filter((_) => _.selected), C = n().edges.filter((_) => _.selected), { deletedNodes: w, deletedEdges: T } = await l({ nodes: y, edges: C });
    (w.length > 0 || T.length > 0) && n().ondelete?.({ nodes: w, edges: T });
  }
  return da("blur", ft, h), da("contextmenu", ft, h), it(ft, (y, C) => qt?.(y, C), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), it(ft, (y, C) => qt?.(y, C), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), it(ft, (y, C) => qt?.(y, C), () => ({
    trigger: f(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), it(ft, (y, C) => qt?.(y, C), () => ({
    trigger: f(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), it(ft, (y, C) => qt?.(y, C), () => ({
    trigger: f(i(), (y) => {
      !(y.originalEvent.ctrlKey || y.originalEvent.metaKey || y.originalEvent.shiftKey) && !Uc(y.originalEvent) && (n(n().deleteKeyPressed = !0, !0), v());
    }),
    type: "keydown"
  })), it(ft, (y, C) => qt?.(y, C), () => ({
    trigger: f(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), it(ft, (y, C) => qt?.(y, C), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), it(ft, (y, C) => qt?.(y, C), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), it(ft, (y, C) => qt?.(y, C), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), it(ft, (y, C) => qt?.(y, C), () => ({
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
ne(
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
var H0 = /* @__PURE__ */ me('<path fill="none" class="svelte-flow__connection-path"></path>'), V0 = /* @__PURE__ */ me('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function $u(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "type", 7), o = m(t, "containerStyle", 7), i = m(t, "style", 7), s = m(t, "LineComponent", 7), a = /* @__PURE__ */ P(() => {
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
      case sn.Bezier: {
        const [f] = Qc(g);
        return f;
      }
      case sn.Straight: {
        const [f] = tu(g);
        return f;
      }
      case sn.Step:
      case sn.SmoothStep: {
        const [f] = Rs({
          ...g,
          borderRadius: r() === sn.Step ? 0 : void 0
        });
        return f;
      }
    }
  });
  var l = Ae(), c = se(l);
  {
    var d = (g) => {
      var f = V0(), h = R(f), v = R(h);
      {
        var y = (w) => {
          var T = Ae(), _ = se(T);
          Ps(_, s, (x, E) => {
            E(x, {});
          }), O(w, T);
        }, C = (w) => {
          var T = H0();
          ke(() => {
            we(T, "d", u(a)), ut(T, i());
          }), O(w, T);
        };
        ae(v, (w) => {
          s() ? w(y) : w(C, !1);
        });
      }
      z(h), z(f), ke(
        (w) => {
          we(f, "width", n().width), we(f, "height", n().height), ut(f, o()), mt(h, 0, w);
        },
        [
          () => xn([
            "svelte-flow__connection",
            Gv(n().connection.isValid)
          ])
        ]
      ), O(g, f);
    };
    ae(c, (g) => {
      n().connection.inProgress && g(d);
    });
  }
  return O(e, l), ce({
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
  $u,
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
var L0 = /* @__PURE__ */ X("<div><!></div>");
function fo(e, t) {
  le(t, !0);
  let n = m(t, "position", 7, "top-right"), r = m(t, "style", 7), o = m(t, "class", 7), i = m(t, "children", 7), s = /* @__PURE__ */ Le(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "position",
    "style",
    "class",
    "children"
  ]), a = /* @__PURE__ */ P(() => `${n()}`.split("-"));
  var l = L0();
  Je(l, (d) => ({ class: d, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...u(a)]
  ]);
  var c = R(l);
  return Ze(c, () => i() ?? rt), z(l), O(e, l), ce({
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
ne(fo, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var $0 = /* @__PURE__ */ X('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function Iu(e, t) {
  le(t, !0);
  let n = m(t, "proOptions", 7), r = m(t, "position", 7, "bottom-right");
  var o = Ae(), i = se(o);
  {
    var s = (a) => {
      fo(a, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, c) => {
          var d = $0();
          O(l, d);
        },
        $$slots: { default: !0 }
      });
    };
    ae(i, (a) => {
      n()?.hideAttribution || a(s);
    });
  }
  return O(e, o), ce({
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
ne(Iu, { proOptions: {}, position: {} }, [], [], !0);
var I0 = /* @__PURE__ */ X("<div><!></div>");
const z0 = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function zu(e, t) {
  le(t, !0), Ve(e, z0);
  let n = m(t, "width", 7), r = m(t, "height", 7), o = m(t, "colorMode", 7), i = m(t, "domNode", 15), s = m(t, "clientWidth", 15), a = m(t, "clientHeight", 15), l = m(t, "children", 7), c = m(t, "rest", 7), d = /* @__PURE__ */ P(() => c().class), g = /* @__PURE__ */ P(() => Df(c(), [
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
  var h = I0();
  Je(
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
      [Kt]: y
    }),
    [
      () => ({ width: Jt(n()), height: Jt(r()) })
    ],
    "svelte-12wlba6"
  );
  var v = R(h);
  return Ze(v, () => l() ?? rt), z(h), At(h, (y) => i(y), () => i()), ya(h, "clientHeight", a), ya(h, "clientWidth", s), O(e, h), ce({
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
ne(
  zu,
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
var R0 = /* @__PURE__ */ X('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), B0 = /* @__PURE__ */ X("<!> <!>", 1), q0 = /* @__PURE__ */ X("<!> <!> <!> <!> <!>", 1);
function Ru(e, t) {
  le(t, !0);
  let n = m(t, "width", 7), r = m(t, "height", 7), o = m(t, "proOptions", 7), i = m(t, "selectionKey", 7), s = m(t, "deleteKey", 7), a = m(t, "panActivationKey", 7), l = m(t, "multiSelectionKey", 7), c = m(t, "zoomActivationKey", 7), d = m(t, "paneClickDistance", 7, 1), g = m(t, "nodeClickDistance", 7, 1), f = m(t, "onmovestart", 7), h = m(t, "onmoveend", 7), v = m(t, "onmove", 7), y = m(t, "oninit", 7), C = m(t, "onnodeclick", 7), w = m(t, "onnodecontextmenu", 7), T = m(t, "onnodedrag", 7), _ = m(t, "onnodedragstart", 7), x = m(t, "onnodedragstop", 7), E = m(t, "onnodepointerenter", 7), M = m(t, "onnodepointermove", 7), H = m(t, "onnodepointerleave", 7), B = m(t, "onselectionclick", 7), Z = m(t, "onselectioncontextmenu", 7), U = m(t, "onselectionstart", 7), $ = m(t, "onselectionend", 7), N = m(t, "onedgeclick", 7), D = m(t, "onedgecontextmenu", 7), b = m(t, "onedgepointerenter", 7), S = m(t, "onedgepointerleave", 7), k = m(t, "onpaneclick", 7), V = m(t, "onpanecontextmenu", 7), I = m(t, "panOnScrollMode", 23, () => Xt.Free), A = m(t, "preventScrolling", 7, !0), F = m(t, "zoomOnScroll", 7, !0), Y = m(t, "zoomOnDoubleClick", 7, !0), W = m(t, "zoomOnPinch", 7, !0), J = m(t, "panOnScroll", 7, !1), G = m(t, "panOnDrag", 7, !0), Q = m(t, "selectionOnDrag", 7, !0), ue = m(t, "connectionLineComponent", 7), re = m(t, "connectionLineStyle", 7), j = m(t, "connectionLineContainerStyle", 7), xe = m(t, "connectionLineType", 23, () => sn.Bezier), ve = m(t, "attributionPosition", 7), te = m(t, "children", 7), oe = m(t, "nodes", 31, () => Dt([])), ie = m(t, "edges", 31, () => Dt([])), ee = m(t, "viewport", 31, () => {
  }), de = /* @__PURE__ */ Le(t, [
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
  ]), ge = xu({
    props: de,
    width: n(),
    height: r(),
    get nodes() {
      return oe();
    },
    set nodes(q) {
      oe(q);
    },
    get edges() {
      return ie();
    },
    set edges(q) {
      ie(q);
    },
    get viewport() {
      return ee();
    },
    set viewport(q) {
      ee(q);
    }
  });
  const pe = vn(jr);
  return pe && pe.setStore && pe.setStore(ge), fr(jr, {
    provider: !1,
    getStore() {
      return ge;
    }
  }), Ge(() => {
    const q = { nodes: ge.selectedNodes, edges: ge.selectedEdges };
    nt(() => t.onselectionchange)?.(q);
    for (const qe of ge.selectionChangeHandlers.values())
      qe(q);
  }), oi(() => {
    ge.reset();
  }), zu(e, {
    get colorMode() {
      return ge.colorMode;
    },
    get width() {
      return n();
    },
    get height() {
      return r();
    },
    get rest() {
      return de;
    },
    get domNode() {
      return ge.domNode;
    },
    set domNode(q) {
      ge.domNode = q;
    },
    get clientWidth() {
      return ge.width;
    },
    set clientWidth(q) {
      ge.width = q;
    },
    get clientHeight() {
      return ge.height;
    },
    set clientHeight(q) {
      ge.height = q;
    },
    children: (q, qe) => {
      var Oe = q0(), fe = se(Oe);
      Lu(fe, {
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
          return ge;
        },
        set store(Ye) {
          ge = Ye;
        }
      });
      var Ee = L(fe, 2);
      bu(Ee, {
        get panOnScrollMode() {
          return I();
        },
        get preventScrolling() {
          return A();
        },
        get zoomOnScroll() {
          return F();
        },
        get zoomOnDoubleClick() {
          return Y();
        },
        get zoomOnPinch() {
          return W();
        },
        get panOnScroll() {
          return J();
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
          return ge;
        },
        set store(Ye) {
          ge = Ye;
        },
        children: (Ye, $e) => {
          Cu(Ye, {
            get onpaneclick() {
              return k();
            },
            get onpanecontextmenu() {
              return V();
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
              return Q();
            },
            get store() {
              return ge;
            },
            set store(Ke) {
              ge = Ke;
            },
            children: (Ke, he) => {
              var Be = B0(), wt = se(Be);
              ku(wt, {
                get store() {
                  return ge;
                },
                set store(rn) {
                  ge = rn;
                },
                children: (rn, $w) => {
                  var Js = R0(), Qs = L(se(Js), 2);
                  Hu(Qs, {
                    get onedgeclick() {
                      return N();
                    },
                    get onedgecontextmenu() {
                      return D();
                    },
                    get onedgepointerenter() {
                      return b();
                    },
                    get onedgepointerleave() {
                      return S();
                    },
                    get store() {
                      return ge;
                    },
                    set store(Rn) {
                      ge = Rn;
                    }
                  });
                  var ea = L(Qs, 4);
                  $u(ea, {
                    get type() {
                      return xe();
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
                      return ge;
                    },
                    set store(Rn) {
                      ge = Rn;
                    }
                  });
                  var ta = L(ea, 2);
                  Du(ta, {
                    get nodeClickDistance() {
                      return g();
                    },
                    get onnodeclick() {
                      return C();
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
                      return H();
                    },
                    get onnodedrag() {
                      return T();
                    },
                    get onnodedragstart() {
                      return _();
                    },
                    get onnodedragstop() {
                      return x();
                    },
                    get store() {
                      return ge;
                    },
                    set store(Rn) {
                      ge = Rn;
                    }
                  });
                  var Vd = L(ta, 2);
                  Vu(Vd, {
                    get onselectionclick() {
                      return B();
                    },
                    get onselectioncontextmenu() {
                      return Z();
                    },
                    get onnodedrag() {
                      return T();
                    },
                    get onnodedragstart() {
                      return _();
                    },
                    get onnodedragstop() {
                      return x();
                    },
                    get store() {
                      return ge;
                    },
                    set store(Rn) {
                      ge = Rn;
                    }
                  }), be(2), O(rn, Js);
                },
                $$slots: { default: !0 }
              });
              var We = L(wt, 2);
              const Nt = /* @__PURE__ */ P(() => !!(ge.selectionRect && ge.selectionRectMode === "user")), tt = /* @__PURE__ */ P(() => ge.selectionRect?.width), Bt = /* @__PURE__ */ P(() => ge.selectionRect?.height), wi = /* @__PURE__ */ P(() => ge.selectionRect?.x), zn = /* @__PURE__ */ P(() => ge.selectionRect?.y);
              Ys(We, {
                get isVisible() {
                  return u(Nt);
                },
                get width() {
                  return u(tt);
                },
                get height() {
                  return u(Bt);
                },
                get x() {
                  return u(wi);
                },
                get y() {
                  return u(zn);
                }
              }), O(Ke, Be);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var _e = L(Ee, 2);
      Iu(_e, {
        get proOptions() {
          return o();
        },
        get position() {
          return ve();
        }
      });
      var Fe = L(_e, 2);
      Su(Fe, {
        get store() {
          return ge;
        }
      });
      var yt = L(Fe, 2);
      Ze(yt, () => te() ?? rt), O(q, Oe);
    },
    $$slots: { default: !0 }
  }), ce({
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
      return c();
    },
    set zoomActivationKey(q) {
      c(q), p();
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
      return C();
    },
    set onnodeclick(q) {
      C(q), p();
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
      return _();
    },
    set onnodedragstart(q) {
      _(q), p();
    },
    get onnodedragstop() {
      return x();
    },
    set onnodedragstop(q) {
      x(q), p();
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
      return H();
    },
    set onnodepointerleave(q) {
      H(q), p();
    },
    get onselectionclick() {
      return B();
    },
    set onselectionclick(q) {
      B(q), p();
    },
    get onselectioncontextmenu() {
      return Z();
    },
    set onselectioncontextmenu(q) {
      Z(q), p();
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
      return N();
    },
    set onedgeclick(q) {
      N(q), p();
    },
    get onedgecontextmenu() {
      return D();
    },
    set onedgecontextmenu(q) {
      D(q), p();
    },
    get onedgepointerenter() {
      return b();
    },
    set onedgepointerenter(q) {
      b(q), p();
    },
    get onedgepointerleave() {
      return S();
    },
    set onedgepointerleave(q) {
      S(q), p();
    },
    get onpaneclick() {
      return k();
    },
    set onpaneclick(q) {
      k(q), p();
    },
    get onpanecontextmenu() {
      return V();
    },
    set onpanecontextmenu(q) {
      V(q), p();
    },
    get panOnScrollMode() {
      return I();
    },
    set panOnScrollMode(q = Xt.Free) {
      I(q), p();
    },
    get preventScrolling() {
      return A();
    },
    set preventScrolling(q = !0) {
      A(q), p();
    },
    get zoomOnScroll() {
      return F();
    },
    set zoomOnScroll(q = !0) {
      F(q), p();
    },
    get zoomOnDoubleClick() {
      return Y();
    },
    set zoomOnDoubleClick(q = !0) {
      Y(q), p();
    },
    get zoomOnPinch() {
      return W();
    },
    set zoomOnPinch(q = !0) {
      W(q), p();
    },
    get panOnScroll() {
      return J();
    },
    set panOnScroll(q = !1) {
      J(q), p();
    },
    get panOnDrag() {
      return G();
    },
    set panOnDrag(q = !0) {
      G(q), p();
    },
    get selectionOnDrag() {
      return Q();
    },
    set selectionOnDrag(q = !0) {
      Q(q), p();
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
      return xe();
    },
    set connectionLineType(q = sn.Bezier) {
      xe(q), p();
    },
    get attributionPosition() {
      return ve();
    },
    set attributionPosition(q) {
      ve(q), p();
    },
    get children() {
      return te();
    },
    set children(q) {
      te(q), p();
    },
    get nodes() {
      return oe();
    },
    set nodes(q = []) {
      oe(q), p();
    },
    get edges() {
      return ie();
    },
    set edges(q = []) {
      ie(q), p();
    },
    get viewport() {
      return ee();
    },
    set viewport(q = void 0) {
      ee(q), p();
    }
  });
}
ne(
  Ru,
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
function Bu(e, t) {
  le(t, !0);
  let n = m(t, "children", 7), r = /* @__PURE__ */ Ne(xu({ props: {}, nodes: [], edges: [] }));
  fr(jr, {
    provider: !0,
    getStore() {
      return u(r);
    },
    setStore: (s) => {
      K(r, s);
    }
  }), oi(() => {
    u(r).reset();
  });
  var o = Ae(), i = se(o);
  return Ze(i, () => n() ?? rt), O(e, o), ce({
    get children() {
      return n();
    },
    set children(s) {
      n(s), p();
    }
  });
}
ne(Bu, { children: {} }, [], [], !0);
var F0 = /* @__PURE__ */ X("<button><!></button>");
function Or(e, t) {
  le(t, !0);
  let n = m(t, "class", 7), r = m(t, "bgColor", 7), o = m(t, "bgColorHover", 7), i = m(t, "color", 7), s = m(t, "colorHover", 7), a = m(t, "borderColor", 7), l = m(t, "onclick", 7), c = m(t, "children", 7), d = /* @__PURE__ */ Le(t, [
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
  var g = F0();
  Je(
    g,
    (h) => ({
      type: "button",
      onclick: l(),
      class: ["svelte-flow__controls-button", n()],
      ...d,
      [Kt]: h
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
  return Ze(f, () => c() ?? rt), z(g), O(e, g), ce({
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
ne(
  Or,
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
var K0 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function qu(e) {
  var t = K0();
  O(e, t);
}
ne(qu, {}, [], [], !0);
var Z0 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Fu(e) {
  var t = Z0();
  O(e, t);
}
ne(Fu, {}, [], [], !0);
var Y0 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Ku(e) {
  var t = Y0();
  O(e, t);
}
ne(Ku, {}, [], [], !0);
var W0 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Zu(e) {
  var t = W0();
  O(e, t);
}
ne(Zu, {}, [], [], !0);
var X0 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function Yu(e) {
  var t = X0();
  O(e, t);
}
ne(Yu, {}, [], [], !0);
var j0 = /* @__PURE__ */ X("<!> <!>", 1), G0 = /* @__PURE__ */ X("<!> <!> <!> <!> <!> <!>", 1);
function Wu(e, t) {
  le(t, !0);
  let n = m(t, "position", 7, "bottom-left"), r = m(t, "orientation", 7, "vertical"), o = m(t, "showZoom", 7, !0), i = m(t, "showFitView", 7, !0), s = m(t, "showLock", 7, !0), a = m(t, "style", 7), l = m(t, "class", 7), c = m(t, "buttonBgColor", 7), d = m(t, "buttonBgColorHover", 7), g = m(t, "buttonColor", 7), f = m(t, "buttonColorHover", 7), h = m(t, "buttonBorderColor", 7), v = m(t, "fitViewOptions", 7), y = m(t, "children", 7), C = m(t, "before", 7), w = m(t, "after", 7), T = /* @__PURE__ */ Le(t, [
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
  ]), _ = /* @__PURE__ */ P(zt);
  const x = {
    bgColor: c(),
    bgColorHover: d(),
    color: g(),
    colorHover: f(),
    borderColor: h()
  };
  let E = /* @__PURE__ */ P(() => u(_).nodesDraggable || u(_).nodesConnectable || u(_).elementsSelectable), M = /* @__PURE__ */ P(() => u(_).viewport.zoom <= u(_).minZoom), H = /* @__PURE__ */ P(() => u(_).viewport.zoom >= u(_).maxZoom), B = /* @__PURE__ */ P(() => u(_).ariaLabelConfig), Z = /* @__PURE__ */ P(() => r() === "horizontal" ? "horizontal" : "vertical");
  const U = () => {
    u(_).zoomIn();
  }, $ = () => {
    u(_).zoomOut();
  }, N = () => {
    u(_).fitView(v());
  }, D = () => {
    let S = !u(E);
    u(_).nodesDraggable = S, u(_).nodesConnectable = S, u(_).elementsSelectable = S;
  }, b = /* @__PURE__ */ P(() => [
    "svelte-flow__controls",
    u(Z),
    l()
  ]);
  return fo(e, ze(
    {
      get class() {
        return u(b);
      },
      get position() {
        return n();
      },
      "data-testid": "svelte-flow__controls",
      get "aria-label"() {
        return u(B)["controls.ariaLabel"];
      },
      get style() {
        return a();
      }
    },
    () => T,
    {
      children: (S, k) => {
        var V = G0(), I = se(V);
        {
          var A = (ve) => {
            var te = Ae(), oe = se(te);
            Ze(oe, C), O(ve, te);
          };
          ae(I, (ve) => {
            C() && ve(A);
          });
        }
        var F = L(I, 2);
        {
          var Y = (ve) => {
            var te = j0(), oe = se(te);
            Or(oe, ze(
              {
                onclick: U,
                class: "svelte-flow__controls-zoomin",
                get title() {
                  return u(B)["controls.zoomIn.ariaLabel"];
                },
                get "aria-label"() {
                  return u(B)["controls.zoomIn.ariaLabel"];
                },
                get disabled() {
                  return u(H);
                }
              },
              () => x,
              {
                children: (ee, de) => {
                  qu(ee);
                },
                $$slots: { default: !0 }
              }
            ));
            var ie = L(oe, 2);
            Or(ie, ze(
              {
                onclick: $,
                class: "svelte-flow__controls-zoomout",
                get title() {
                  return u(B)["controls.zoomOut.ariaLabel"];
                },
                get "aria-label"() {
                  return u(B)["controls.zoomOut.ariaLabel"];
                },
                get disabled() {
                  return u(M);
                }
              },
              () => x,
              {
                children: (ee, de) => {
                  Fu(ee);
                },
                $$slots: { default: !0 }
              }
            )), O(ve, te);
          };
          ae(F, (ve) => {
            o() && ve(Y);
          });
        }
        var W = L(F, 2);
        {
          var J = (ve) => {
            Or(ve, ze(
              {
                class: "svelte-flow__controls-fitview",
                onclick: N,
                get title() {
                  return u(B)["controls.fitView.ariaLabel"];
                },
                get "aria-label"() {
                  return u(B)["controls.fitView.ariaLabel"];
                }
              },
              () => x,
              {
                children: (te, oe) => {
                  Ku(te);
                },
                $$slots: { default: !0 }
              }
            ));
          };
          ae(W, (ve) => {
            i() && ve(J);
          });
        }
        var G = L(W, 2);
        {
          var Q = (ve) => {
            Or(ve, ze(
              {
                class: "svelte-flow__controls-interactive",
                onclick: D,
                get title() {
                  return u(B)["controls.interactive.ariaLabel"];
                },
                get "aria-label"() {
                  return u(B)["controls.interactive.ariaLabel"];
                }
              },
              () => x,
              {
                children: (te, oe) => {
                  var ie = Ae(), ee = se(ie);
                  {
                    var de = (pe) => {
                      Yu(pe);
                    }, ge = (pe) => {
                      Zu(pe);
                    };
                    ae(ee, (pe) => {
                      u(E) ? pe(de) : pe(ge, !1);
                    });
                  }
                  O(te, ie);
                },
                $$slots: { default: !0 }
              }
            ));
          };
          ae(G, (ve) => {
            s() && ve(Q);
          });
        }
        var ue = L(G, 2);
        {
          var re = (ve) => {
            var te = Ae(), oe = se(te);
            Ze(oe, y), O(ve, te);
          };
          ae(ue, (ve) => {
            y() && ve(re);
          });
        }
        var j = L(ue, 2);
        {
          var xe = (ve) => {
            var te = Ae(), oe = se(te);
            Ze(oe, w), O(ve, te);
          };
          ae(j, (ve) => {
            w() && ve(xe);
          });
        }
        O(S, V);
      },
      $$slots: { default: !0 }
    }
  )), ce({
    get position() {
      return n();
    },
    set position(S = "bottom-left") {
      n(S), p();
    },
    get orientation() {
      return r();
    },
    set orientation(S = "vertical") {
      r(S), p();
    },
    get showZoom() {
      return o();
    },
    set showZoom(S = !0) {
      o(S), p();
    },
    get showFitView() {
      return i();
    },
    set showFitView(S = !0) {
      i(S), p();
    },
    get showLock() {
      return s();
    },
    set showLock(S = !0) {
      s(S), p();
    },
    get style() {
      return a();
    },
    set style(S) {
      a(S), p();
    },
    get class() {
      return l();
    },
    set class(S) {
      l(S), p();
    },
    get buttonBgColor() {
      return c();
    },
    set buttonBgColor(S) {
      c(S), p();
    },
    get buttonBgColorHover() {
      return d();
    },
    set buttonBgColorHover(S) {
      d(S), p();
    },
    get buttonColor() {
      return g();
    },
    set buttonColor(S) {
      g(S), p();
    },
    get buttonColorHover() {
      return f();
    },
    set buttonColorHover(S) {
      f(S), p();
    },
    get buttonBorderColor() {
      return h();
    },
    set buttonBorderColor(S) {
      h(S), p();
    },
    get fitViewOptions() {
      return v();
    },
    set fitViewOptions(S) {
      v(S), p();
    },
    get children() {
      return y();
    },
    set children(S) {
      y(S), p();
    },
    get before() {
      return C();
    },
    set before(S) {
      C(S), p();
    },
    get after() {
      return w();
    },
    set after(S) {
      w(S), p();
    }
  });
}
ne(
  Wu,
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
var cn;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(cn || (cn = {}));
var U0 = /* @__PURE__ */ me("<circle></circle>");
function Xu(e, t) {
  le(t, !0);
  let n = m(t, "radius", 7), r = m(t, "class", 7);
  var o = U0();
  return ke(() => {
    we(o, "cx", n()), we(o, "cy", n()), we(o, "r", n()), mt(o, 0, xn(["svelte-flow__background-pattern", "dots", r()]));
  }), O(e, o), ce({
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
ne(Xu, { radius: {}, class: {} }, [], [], !0);
var J0 = /* @__PURE__ */ me("<path></path>");
function ju(e, t) {
  le(t, !0);
  let n = m(t, "lineWidth", 7), r = m(t, "dimensions", 7), o = m(t, "variant", 7), i = m(t, "class", 7);
  var s = J0();
  return ke(() => {
    we(s, "stroke-width", n()), we(s, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), mt(s, 0, xn(["svelte-flow__background-pattern", o(), i()]));
  }), O(e, s), ce({
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
ne(ju, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const Q0 = {
  [cn.Dots]: 1,
  [cn.Lines]: 1,
  [cn.Cross]: 6
};
var em = /* @__PURE__ */ me('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function Gu(e, t) {
  le(t, !0);
  let n = m(t, "id", 7), r = m(t, "variant", 23, () => cn.Dots), o = m(t, "gap", 7, 20), i = m(t, "size", 7), s = m(t, "lineWidth", 7, 1), a = m(t, "bgColor", 7), l = m(t, "patternColor", 7), c = m(t, "patternClass", 7), d = m(t, "class", 7), g = /* @__PURE__ */ P(zt), f = /* @__PURE__ */ P(() => r() === cn.Dots), h = /* @__PURE__ */ P(() => r() === cn.Cross), v = /* @__PURE__ */ P(() => Array.isArray(o()) ? o() : [o(), o()]), y = /* @__PURE__ */ P(() => `background-pattern-${u(g).flowId}-${n() ?? ""}`), C = /* @__PURE__ */ P(() => [
    u(v)[0] * u(g).viewport.zoom || 1,
    u(v)[1] * u(g).viewport.zoom || 1
  ]), w = /* @__PURE__ */ P(() => (i() ?? Q0[r()]) * u(g).viewport.zoom), T = /* @__PURE__ */ P(() => u(h) ? [u(w), u(w)] : u(C)), _ = /* @__PURE__ */ P(() => u(f) ? [u(w) / 2, u(w) / 2] : [
    u(T)[0] / 2,
    u(T)[1] / 2
  ]);
  var x = em();
  let E;
  var M = R(x), H = R(M);
  {
    var B = ($) => {
      const N = /* @__PURE__ */ P(() => u(w) / 2);
      Xu($, {
        get radius() {
          return u(N);
        },
        get class() {
          return c();
        }
      });
    }, Z = ($) => {
      ju($, {
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
    ae(H, ($) => {
      u(f) ? $(B) : $(Z, !1);
    });
  }
  z(M);
  var U = L(M);
  return z(x), ke(
    ($) => {
      mt(x, 0, xn([
        "svelte-flow__background",
        "svelte-flow__container",
        d()
      ])), E = ut(x, "", E, $), we(M, "id", u(y)), we(M, "x", u(g).viewport.x % u(C)[0]), we(M, "y", u(g).viewport.y % u(C)[1]), we(M, "width", u(C)[0]), we(M, "height", u(C)[1]), we(M, "patternTransform", `translate(-${u(_)[0]},-${u(_)[1]})`), we(U, "fill", `url(#${u(y)})`);
    },
    [
      () => ({
        "--xy-background-color-props": a(),
        "--xy-background-pattern-color-props": l()
      })
    ]
  ), O(e, x), ce({
    get id() {
      return n();
    },
    set id($) {
      n($), p();
    },
    get variant() {
      return r();
    },
    set variant($ = cn.Dots) {
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
      return c();
    },
    set patternClass($) {
      c($), p();
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
  Gu,
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
var tm = /* @__PURE__ */ me("<rect></rect>");
function Uu(e, t) {
  le(t, !0);
  let n = m(t, "x", 7), r = m(t, "y", 7), o = m(t, "width", 7), i = m(t, "height", 7), s = m(t, "borderRadius", 7, 5), a = m(t, "color", 7), l = m(t, "shapeRendering", 7), c = m(t, "strokeColor", 7), d = m(t, "strokeWidth", 7, 2), g = m(t, "selected", 7), f = m(t, "class", 7);
  var h = tm();
  let v, y;
  return ke(
    (C, w) => {
      v = mt(h, 0, xn(["svelte-flow__minimap-node", f()]), null, v, C), we(h, "x", n()), we(h, "y", r()), we(h, "rx", s()), we(h, "ry", s()), we(h, "width", o()), we(h, "height", i()), we(h, "shape-rendering", l()), y = ut(h, "", y, w);
    },
    [
      () => ({ selected: g() }),
      () => ({
        fill: a(),
        stroke: c(),
        "stroke-width": d()
      })
    ]
  ), O(e, h), ce({
    get x() {
      return n();
    },
    set x(C) {
      n(C), p();
    },
    get y() {
      return r();
    },
    set y(C) {
      r(C), p();
    },
    get width() {
      return o();
    },
    set width(C) {
      o(C), p();
    },
    get height() {
      return i();
    },
    set height(C) {
      i(C), p();
    },
    get borderRadius() {
      return s();
    },
    set borderRadius(C = 5) {
      s(C), p();
    },
    get color() {
      return a();
    },
    set color(C) {
      a(C), p();
    },
    get shapeRendering() {
      return l();
    },
    set shapeRendering(C) {
      l(C), p();
    },
    get strokeColor() {
      return c();
    },
    set strokeColor(C) {
      c(C), p();
    },
    get strokeWidth() {
      return d();
    },
    set strokeWidth(C = 2) {
      d(C), p();
    },
    get selected() {
      return g();
    },
    set selected(C) {
      g(C), p();
    },
    get class() {
      return f();
    },
    set class(C) {
      f(C), p();
    }
  });
}
ne(
  Uu,
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
function nm(e, t) {
  const n = $p({
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
var rm = /* @__PURE__ */ me("<title> </title>"), om = /* @__PURE__ */ me('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), im = /* @__PURE__ */ X('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function Ju(e, t) {
  le(t, !0);
  let n = m(t, "position", 7, "bottom-right"), r = m(t, "ariaLabel", 7), o = m(t, "nodeStrokeColor", 7, "transparent"), i = m(t, "nodeColor", 7), s = m(t, "nodeClass", 7, ""), a = m(t, "nodeBorderRadius", 7, 5), l = m(t, "nodeStrokeWidth", 7, 2), c = m(t, "bgColor", 7), d = m(t, "maskColor", 7), g = m(t, "maskStrokeColor", 7), f = m(t, "maskStrokeWidth", 7), h = m(t, "width", 7, 200), v = m(t, "height", 7, 150), y = m(t, "pannable", 7, !0), C = m(t, "zoomable", 7, !0), w = m(t, "inversePan", 7), T = m(t, "zoomStep", 7), _ = m(t, "class", 7), x = /* @__PURE__ */ Le(t, [
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
  ]), E = /* @__PURE__ */ P(zt), M = /* @__PURE__ */ P(() => u(E).ariaLabelConfig);
  const H = i() === void 0 ? void 0 : Ai(i()), B = Ai(o()), Z = Ai(s()), U = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let $ = /* @__PURE__ */ P(() => `svelte-flow__minimap-desc-${u(E).flowId}`), N = /* @__PURE__ */ P(() => ({
    x: -u(E).viewport.x / u(E).viewport.zoom,
    y: -u(E).viewport.y / u(E).viewport.zoom,
    width: u(E).width / u(E).viewport.zoom,
    height: u(E).height / u(E).viewport.zoom
  })), D = /* @__PURE__ */ P(() => u(E).nodeLookup.size > 0 ? Yc(lo(u(E).nodeLookup, { filter: (j) => !j.hidden }), u(N)) : u(N)), b = /* @__PURE__ */ P(() => u(D).width / h()), S = /* @__PURE__ */ P(() => u(D).height / v()), k = /* @__PURE__ */ P(() => Math.max(u(b), u(S))), V = /* @__PURE__ */ P(() => u(k) * h()), I = /* @__PURE__ */ P(() => u(k) * v()), A = /* @__PURE__ */ P(() => 5 * u(k)), F = /* @__PURE__ */ P(() => u(D).x - (u(V) - u(D).width) / 2 - u(A)), Y = /* @__PURE__ */ P(() => u(D).y - (u(I) - u(D).height) / 2 - u(A)), W = /* @__PURE__ */ P(() => u(V) + u(A) * 2), J = /* @__PURE__ */ P(() => u(I) + u(A) * 2);
  const G = () => u(k);
  var Q = im(), ue = se(Q);
  const re = /* @__PURE__ */ P(() => ["svelte-flow__minimap", _()]);
  return Xf(ue, () => ({ "--xy-minimap-background-color-props": c() })), fo(ue.lastChild, ze(
    {
      get position() {
        return n();
      },
      get class() {
        return u(re);
      },
      "data-testid": "svelte-flow__minimap"
    },
    () => x,
    {
      children: (j, xe) => {
        var ve = Ae(), te = se(ve);
        {
          var oe = (ie) => {
            var ee = om();
            let de;
            var ge = R(ee);
            {
              var pe = (Oe) => {
                var fe = rm(), Ee = R(fe, !0);
                z(fe), ke(() => {
                  we(fe, "id", u($)), Ie(Ee, r() ?? u(M)["minimap.ariaLabel"]);
                }), O(Oe, fe);
              };
              ae(ge, (Oe) => {
                (r() ?? u(M)["minimap.ariaLabel"]) && Oe(pe);
              });
            }
            var q = L(ge);
            ct(q, 17, () => u(E).nodes, (Oe) => Oe.id, (Oe, fe) => {
              var Ee = Ae();
              const _e = /* @__PURE__ */ P(() => u(E).nodeLookup.get(u(fe).id));
              var Fe = se(Ee);
              {
                var yt = (Ye) => {
                  const $e = /* @__PURE__ */ P(() => $n(u(_e))), Ke = /* @__PURE__ */ P(() => H?.(u(_e))), he = /* @__PURE__ */ P(() => B(u(_e))), Be = /* @__PURE__ */ P(() => Z(u(_e)));
                  Uu(Ye, ze(
                    {
                      get x() {
                        return u(_e).internals.positionAbsolute.x;
                      },
                      get y() {
                        return u(_e).internals.positionAbsolute.y;
                      }
                    },
                    () => u($e),
                    {
                      get selected() {
                        return u(_e).selected;
                      },
                      get color() {
                        return u(Ke);
                      },
                      get borderRadius() {
                        return a();
                      },
                      get strokeColor() {
                        return u(he);
                      },
                      get strokeWidth() {
                        return l();
                      },
                      get shapeRendering() {
                        return U;
                      },
                      get class() {
                        return u(Be);
                      }
                    }
                  ));
                };
                ae(Fe, (Ye) => {
                  u(_e) && Xc(u(_e)) && Ye(yt);
                });
              }
              O(Oe, Ee);
            });
            var qe = L(q);
            z(ee), it(ee, (Oe, fe) => nm?.(Oe, fe), () => ({
              store: u(E),
              panZoom: u(E).panZoom,
              getViewScale: G,
              translateExtent: u(E).translateExtent,
              width: u(E).width,
              height: u(E).height,
              inversePan: w(),
              zoomStep: T(),
              pannable: y(),
              zoomable: C()
            })), ke(
              (Oe) => {
                we(ee, "width", h()), we(ee, "height", v()), we(ee, "viewBox", `${u(F) ?? ""} ${u(Y) ?? ""} ${u(W) ?? ""} ${u(J) ?? ""}`), we(ee, "aria-labelledby", u($)), de = ut(ee, "", de, Oe), we(qe, "d", `M${u(F) - u(A)},${u(Y) - u(A)}h${u(W) + u(A) * 2}v${u(J) + u(A) * 2}h${-u(W) - u(A) * 2}z
      M${u(N).x ?? ""},${u(N).y ?? ""}h${u(N).width ?? ""}v${u(N).height ?? ""}h${-u(N).width}z`);
              },
              [
                () => ({
                  "--xy-minimap-mask-background-color-props": d(),
                  "--xy-minimap-mask-stroke-color-props": g(),
                  "--xy-minimap-mask-stroke-width-props": f() ? f() * u(k) : void 0
                })
              ]
            ), O(ie, ee);
          };
          ae(te, (ie) => {
            u(E).panZoom && ie(oe);
          });
        }
        O(j, ve);
      },
      $$slots: { default: !0 }
    }
  )), z(ue), O(e, Q), ce({
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
      return c();
    },
    set bgColor(j) {
      c(j), p();
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
      return C();
    },
    set zoomable(j = !0) {
      C(j), p();
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
      return _();
    },
    set class(j) {
      _(j), p();
    }
  });
}
ne(
  Ju,
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
var sm = /* @__PURE__ */ X("<div><!></div>");
function Qu(e, t) {
  le(t, !0);
  let n = m(t, "nodeId", 7), r = m(t, "position", 23, () => ye.Top), o = m(t, "align", 7, "center"), i = m(t, "offset", 7, 10), s = m(t, "isVisible", 7), a = m(t, "children", 7), l = /* @__PURE__ */ Le(t, [
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
  const c = zt(), { getNodesBounds: d } = dt(), g = vn("svelteflow__node_id");
  let f = /* @__PURE__ */ P(() => (c.nodes, (Array.isArray(n()) ? n() : [n() ?? g]).reduce(
    (E, M) => {
      const H = c.nodeLookup.get(M);
      return H && E.push(H), E;
    },
    []
  ))), h = /* @__PURE__ */ P(() => {
    const x = d(u(f));
    return x ? wp(x, c.viewport, r(), i(), o()) : "";
  }), v = /* @__PURE__ */ P(() => u(f).length === 0 ? 1 : Math.max(...u(f).map((x) => (x.internals.z || 5) + 1))), y = /* @__PURE__ */ P(() => c.nodes.filter((x) => x.selected).length), C = /* @__PURE__ */ P(() => typeof s() == "boolean" ? s() : u(f).length === 1 && u(f)[0].selected && u(y) === 1);
  var w = Ae(), T = se(w);
  {
    var _ = (x) => {
      var E = sm();
      Je(
        E,
        (H, B) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": H,
          ...l,
          [Kt]: B
        }),
        [
          () => u(f).reduce((H, B) => `${H}${B.id} `, "").trim(),
          () => ({
            display: hu().value ? "none" : void 0,
            position: "absolute",
            transform: u(h),
            "z-index": u(v)
          })
        ]
      );
      var M = R(E);
      Ze(M, () => a() ?? rt), z(E), it(E, (H, B) => gu?.(H, B), () => "root"), O(x, E);
    };
    ae(T, (x) => {
      c.domNode && u(C) && u(f) && x(_);
    });
  }
  return O(e, w), ce({
    get nodeId() {
      return n();
    },
    set nodeId(x) {
      n(x), p();
    },
    get position() {
      return r();
    },
    set position(x = ye.Top) {
      r(x), p();
    },
    get align() {
      return o();
    },
    set align(x = "center") {
      o(x), p();
    },
    get offset() {
      return i();
    },
    set offset(x = 10) {
      i(x), p();
    },
    get isVisible() {
      return s();
    },
    set isVisible(x) {
      s(x), p();
    },
    get children() {
      return a();
    },
    set children(x) {
      a(x), p();
    }
  });
}
ne(
  Qu,
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
function nr(e) {
  const t = /* @__PURE__ */ P(zt), n = /* @__PURE__ */ P(() => u(t).nodes), r = /* @__PURE__ */ P(() => u(t).nodeLookup);
  let o = [], i = !0;
  const s = /* @__PURE__ */ P(() => {
    u(n);
    const a = [], l = Array.isArray(e), c = l ? e : [e];
    for (const d of c) {
      const g = u(r).get(d)?.internals.userNode;
      g && a.push({ id: g.id, type: g.type, data: g.data });
    }
    return (!Tp(a, o) || i) && (o = a, i = !1), l ? o : o[0] ?? null;
  });
  return {
    get current() {
      return u(s);
    }
  };
}
const al = "tinyflow-component";
class zw {
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
const am = () => {
  let e = /* @__PURE__ */ Ne([]), t = /* @__PURE__ */ Ne([]), n = /* @__PURE__ */ Ne({ x: 250, y: 100, zoom: 1 });
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
}, Xe = am();
var lm = /* @__PURE__ */ X("<button><!></button>");
function Te(e, t) {
  le(t, !0);
  const n = m(t, "children", 7), r = m(t, "primary", 7), o = /* @__PURE__ */ Le(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children",
    "primary"
  ]);
  var i = lm();
  Je(i, () => ({
    type: "button",
    ...o,
    class: `tf-btn ${r() ? "tf-btn-primary" : ""} nopan nodrag ${t.class ?? ""}`
  }));
  var s = R(i);
  return Ze(s, () => n() ?? rt), z(i), O(e, i), ce({
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
var cm = /* @__PURE__ */ X("<input/>");
function ed(e, t) {
  le(t, !0);
  const n = /* @__PURE__ */ Le(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = cm();
  gn(r), Je(r, () => ({
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), O(e, r), ce();
}
ne(ed, {}, [], [], !0);
var um = /* @__PURE__ */ X('<div><input type="hidden"/> <!> <!></div>');
const dm = {
  hash: "svelte-1swt2gg",
  code: ".tf-chosen.svelte-1swt2gg {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function td(e, t) {
  le(t, !0), Ve(e, dm);
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
  var l = um();
  Je(
    l,
    () => ({
      ...a,
      class: `tf-chosen nopan nodrag ${t.class ?? ""}`
    }),
    void 0,
    "svelte-1swt2gg"
  );
  var c = R(l);
  gn(c);
  var d = L(c, 2);
  Qe(d, {
    get value() {
      return r();
    },
    get placeholder() {
      return n();
    },
    style: "flex-grow: 1;",
    disabled: !0
  });
  var g = L(d, 2);
  return Te(g, {
    onclick: (f) => {
      s()?.(o(), r(), f);
    },
    style: "padding: 3px",
    children: (f, h) => {
      be();
      var v = Se();
      ke(() => Ie(v, i())), O(f, v);
    },
    $$slots: { default: !0 }
  }), z(l), ke(() => Eo(c, o())), O(e, l), ce({
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
var fm = /* @__PURE__ */ X("<input/>");
function Qe(e, t) {
  le(t, !0);
  const n = /* @__PURE__ */ Le(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = fm();
  gn(r), Je(r, () => ({
    type: "text",
    spellcheck: "false",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), O(e, r), ce();
}
ne(Qe, {}, [], [], !0);
var gm = /* @__PURE__ */ X("<textarea></textarea>");
function je(e, t) {
  le(t, !0);
  const n = m(t, "value", 7), r = /* @__PURE__ */ Le(t, ["$$slots", "$$events", "$$legacy", "$$host", "value"]);
  var o = gm();
  return Mf(o), Je(o, () => ({
    spellcheck: "false",
    ...r,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), O(e, o), ce({
    get value() {
      return n();
    },
    set value(i) {
      n(i), p();
    }
  });
}
ne(je, { value: {} }, [], [], !0);
var hm = /* @__PURE__ */ X('<div role="button"><!></div>'), vm = /* @__PURE__ */ X("<div></div>");
function nd(e, t) {
  const n = xa(t, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = xa(n, ["items", "onChange", "activeIndex"]);
  le(t, !1);
  let o = m(t, "items", 28, () => []), i = m(t, "onChange", 12, () => {
  }), s = m(t, "activeIndex", 12, 0);
  function a(c, d) {
    s(d), i()?.(c, d);
  }
  uc();
  var l = vm();
  return Je(l, () => ({
    ...r,
    class: `tf-tabs ${ks(r), nt(() => r.class) ?? ""}`
  })), ct(l, 5, o, hr, (c, d, g) => {
    var f = hm();
    we(f, "tabindex", g), f.__click = () => a(u(d), g), f.__keydown = (C) => {
      (C.key === "Enter" || C.key === " ") && (C.preventDefault(), a(u(d), g));
    };
    var h = R(f);
    {
      var v = (C) => {
        var w = Se();
        ke(() => Ie(w, (u(d), nt(() => u(d).label)))), O(C, w);
      }, y = (C) => {
        var w = Ae(), T = se(w);
        Ze(T, () => (u(d), nt(() => u(d).label) ?? rt)), O(C, w);
      };
      ae(h, (C) => {
        u(d), nt(() => typeof u(d).label == "string") ? C(v) : C(y, !1);
      });
    }
    z(f), ke(() => mt(f, 1, `tf-tabs-item ${g === s() ? "active" : ""}`)), O(c, f);
  }), z(l), O(e, l), ce({
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
Vn(["click", "keydown"]);
ne(nd, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var pm = (e, t, n) => t(u(n)), mm = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(u(n)));
}, ym = /* @__PURE__ */ X('<span class="tf-collapse-item-title-icon"><!></span>'), wm = /* @__PURE__ */ X('<div class="tf-collapse-item-description"><!></div>'), _m = /* @__PURE__ */ X('<div class="tf-collapse-item-content"><!></div>'), xm = /* @__PURE__ */ X('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), bm = /* @__PURE__ */ X("<div></div>");
const Cm = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function rd(e, t) {
  le(t, !0), Ve(e, Cm);
  let n = m(t, "items", 7), r = m(t, "onChange", 7), o = m(t, "activeKeys", 31, () => Dt([]));
  function i(a) {
    o().includes(a.key) ? o(o().filter((l) => l !== a.key)) : (o().push(a.key), o(o())), r()?.(a, o());
  }
  var s = bm();
  return ct(s, 21, n, hr, (a, l, c) => {
    var d = xm(), g = R(d);
    we(g, "tabindex", c), g.__click = [pm, i, l], g.__keydown = [mm, i, l];
    var f = R(g);
    {
      var h = (x) => {
        var E = ym(), M = R(E);
        Sn(M, {
          get target() {
            return u(l).icon;
          }
        }), z(E), O(x, E);
      };
      ae(f, (x) => {
        u(l).icon && x(h);
      });
    }
    var v = L(f, 2);
    Sn(v, {
      get target() {
        return u(l).title;
      }
    });
    var y = L(v, 2);
    z(g);
    var C = L(g, 2);
    {
      var w = (x) => {
        var E = wm(), M = R(E);
        Sn(M, {
          get target() {
            return u(l).description;
          }
        }), z(E), O(x, E);
      };
      ae(C, (x) => {
        u(l).description && x(w);
      });
    }
    var T = L(C, 2);
    {
      var _ = (x) => {
        var E = _m(), M = R(E);
        Sn(M, {
          get target() {
            return u(l).content;
          }
        }), z(E), O(x, E);
      };
      ae(T, (x) => {
        o().includes(u(l).key) && x(_);
      });
    }
    z(d), ke((x) => mt(y, 1, `tf-collapse-item-title-arrow ${x ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(u(l).key) ? "rotate-90" : ""
    ]), O(a, d);
  }), z(s), ke(() => {
    ut(s, t.style), mt(s, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), O(e, s), ce({
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
Vn(["click", "keydown"]);
ne(rd, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Sn(e, t) {
  le(t, !0);
  let n = m(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = Ae(), o = se(r);
  {
    var i = (a) => {
      var l = Ae(), c = se(l);
      Ze(c, () => n() ?? rt), O(a, l);
    }, s = (a) => {
      var l = Ae(), c = se(l);
      Ns(c, n), O(a, l);
    };
    ae(o, (a) => {
      typeof n() == "function" ? a(i) : a(s, !1);
    });
  }
  return O(e, r), ce({
    get target() {
      return n();
    },
    set target(a) {
      n(a), p();
    }
  });
}
ne(Sn, { target: {} }, [], [], !0);
var km = (e, t, n) => t(u(n)), Em = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), Sm = /* @__PURE__ */ X('<div class="tf-select-content-children"><!></div>'), Nm = /* @__PURE__ */ X('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), Pm = /* @__PURE__ */ X('<div class="tf-select-content nopan nodrag"><!></div>'), Tm = /* @__PURE__ */ X("<!> <!>", 1), Dm = /* @__PURE__ */ X('<div class="tf-select-input-placeholder"> </div>'), Am = /* @__PURE__ */ X('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), Mm = /* @__PURE__ */ X("<div><!></div>");
function Mt(e, t) {
  le(t, !0);
  const n = (w, T = rt) => {
    var _ = Ae(), x = se(_);
    ct(x, 19, T, (E, M) => `${M}_${E.value}`, (E, M) => {
      var H = Nm(), B = se(H);
      B.__click = [km, v, M];
      var Z = R(B), U = R(Z);
      {
        var $ = (S) => {
          var k = Em();
          O(S, k);
        };
        ae(U, (S) => {
          u(M).children && u(M).children.length > 0 && S($);
        });
      }
      z(Z);
      var N = L(Z, 2);
      Sn(N, {
        get target() {
          return u(M).label;
        }
      }), z(B);
      var D = L(B, 2);
      {
        var b = (S) => {
          var k = Sm(), V = R(k);
          n(V, () => u(M).children), z(k), O(S, k);
        };
        ae(D, (S) => {
          u(M).children && u(M).children.length > 0 && (a() || c().includes(u(M).value)) && S(b);
        });
      }
      O(E, H);
    }), O(w, _);
  };
  let r = m(t, "items", 7), o = m(t, "onSelect", 7), i = m(t, "value", 23, () => []), s = m(t, "defaultValue", 23, () => []), a = m(t, "expandAll", 7, !0), l = m(t, "multiple", 7, !1), c = m(t, "expandValue", 23, () => []), d = m(t, "placeholder", 7), g = /* @__PURE__ */ Le(t, [
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
  ]), f = /* @__PURE__ */ P(() => {
    const w = [], T = (_) => {
      for (let x of _)
        i().length > 0 ? i().includes(x.value) && w.push(x) : s().includes(x.value) && w.push(x), x.children && x.children.length > 0 && T(x.children);
    };
    return T(r()), w;
  }), h;
  function v(w) {
    h?.hide(), o()?.(w);
  }
  var y = Mm();
  Je(y, () => ({ ...g, class: `tf-select ${g.class ?? ""}` }));
  var C = R(y);
  return At(
    Sr(C, {
      floating: (T) => {
        var _ = Pm(), x = R(_);
        n(x, r), z(_), O(T, _);
      },
      children: (T, _) => {
        var x = Am();
        Je(x, () => ({ class: "tf-select-input nopan nodrag", ...g }));
        var E = R(x);
        ct(
          E,
          23,
          () => u(f),
          (M, H) => `${H}_${M.value}`,
          (M, H, B) => {
            var Z = Ae(), U = se(Z);
            {
              var $ = (D) => {
                var b = Ae(), S = se(b);
                {
                  var k = (V) => {
                    Sn(V, {
                      get target() {
                        return u(H).label;
                      }
                    });
                  };
                  ae(S, (V) => {
                    u(B) === 0 && V(k);
                  });
                }
                O(D, b);
              }, N = (D) => {
                var b = Tm(), S = se(b);
                Sn(S, {
                  get target() {
                    return u(H).label;
                  }
                });
                var k = L(S, 2);
                {
                  var V = (I) => {
                    var A = Se(",");
                    O(I, A);
                  };
                  ae(k, (I) => {
                    u(B) < u(f).length - 1 && I(V);
                  });
                }
                O(D, b);
              };
              ae(U, (D) => {
                l() ? D(N, !1) : D($);
              });
            }
            O(M, Z);
          },
          (M) => {
            var H = Dm(), B = R(H, !0);
            z(H), ke(() => Ie(B, d())), O(M, H);
          }
        ), z(E), be(2), z(x), O(T, x);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => h = T,
    () => h
  ), z(y), O(e, y), ce({
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
Vn(["click"]);
ne(
  Mt,
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
const Gr = Math.min, cr = Math.max, jo = Math.round, jt = (e) => ({
  x: e,
  y: e
}), Om = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Hm = {
  start: "end",
  end: "start"
};
function ts(e, t, n) {
  return cr(e, Gr(t, n));
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
function od(e) {
  return e === "x" ? "y" : "x";
}
function Ws(e) {
  return e === "y" ? "height" : "width";
}
const Vm = /* @__PURE__ */ new Set(["top", "bottom"]);
function Nn(e) {
  return Vm.has(Jn(e)) ? "y" : "x";
}
function Xs(e) {
  return od(Nn(e));
}
function Lm(e, t, n) {
  n === void 0 && (n = !1);
  const r = ho(e), o = Xs(e), i = Ws(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Go(s)), [s, Go(s)];
}
function $m(e) {
  const t = Go(e);
  return [ns(e), t, ns(t)];
}
function ns(e) {
  return e.replace(/start|end/g, (t) => Hm[t]);
}
const ll = ["left", "right"], cl = ["right", "left"], Im = ["top", "bottom"], zm = ["bottom", "top"];
function Rm(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? cl : ll : t ? ll : cl;
    case "left":
    case "right":
      return t ? Im : zm;
    default:
      return [];
  }
}
function Bm(e, t, n, r) {
  const o = ho(e);
  let i = Rm(Jn(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(ns)))), i;
}
function Go(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Om[t]);
}
function qm(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function id(e) {
  return typeof e != "number" ? qm(e) : {
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
  const i = Nn(t), s = Xs(t), a = Ws(s), l = Jn(t), c = i === "y", d = r.x + r.width / 2 - o.width / 2, g = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
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
const Fm = async (e, t, n) => {
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
  } = ul(c, r, l), f = r, h = {}, v = 0;
  for (let y = 0; y < a.length; y++) {
    const {
      name: C,
      fn: w
    } = a[y], {
      x: T,
      y: _,
      data: x,
      reset: E
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
      [C]: {
        ...h[C],
        ...x
      }
    }, E && v <= 50 && (v++, typeof E == "object" && (E.placement && (f = E.placement), E.rects && (c = E.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : E.rects), {
      x: d,
      y: g
    } = ul(c, f, l)), y = -1);
  }
  return {
    x: d,
    y: g,
    placement: f,
    strategy: o,
    middlewareData: h
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
    elementContext: g = "floating",
    altBoundary: f = !1,
    padding: h = 0
  } = go(t, e), v = id(h), C = a[f ? g === "floating" ? "reference" : "floating" : g], w = Uo(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(C))) == null || n ? C : C.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), T = g === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), x = await (i.isElement == null ? void 0 : i.isElement(_)) ? await (i.getScale == null ? void 0 : i.getScale(_)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, E = Uo(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: T,
    offsetParent: _,
    strategy: l
  }) : T);
  return {
    top: (w.top - E.top + v.top) / x.y,
    bottom: (E.bottom - w.bottom + v.bottom) / x.y,
    left: (w.left - E.left + v.left) / x.x,
    right: (E.right - w.right + v.right) / x.x
  };
}
const Km = (e) => ({
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
    const g = id(d), f = {
      x: n,
      y: r
    }, h = Xs(o), v = Ws(h), y = await s.getDimensions(c), C = h === "y", w = C ? "top" : "left", T = C ? "bottom" : "right", _ = C ? "clientHeight" : "clientWidth", x = i.reference[v] + i.reference[h] - f[h] - i.floating[v], E = f[h] - i.reference[h], M = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let H = M ? M[_] : 0;
    (!H || !await (s.isElement == null ? void 0 : s.isElement(M))) && (H = a.floating[_] || i.floating[v]);
    const B = x / 2 - E / 2, Z = H / 2 - y[v] / 2 - 1, U = Gr(g[w], Z), $ = Gr(g[T], Z), N = U, D = H - y[v] - $, b = H / 2 - y[v] / 2 + B, S = ts(N, b, D), k = !l.arrow && ho(o) != null && b !== S && i.reference[v] / 2 - (b < N ? U : $) - y[v] / 2 < 0, V = k ? b < N ? b - N : b - D : 0;
    return {
      [h]: f[h] + V,
      data: {
        [h]: S,
        centerOffset: b - S - V,
        ...k && {
          alignmentOffset: V
        }
      },
      reset: k
    };
  }
}), Zm = function(e) {
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
        ...C
      } = go(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const w = Jn(o), T = Nn(a), _ = Jn(a) === a, x = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), E = f || (_ || !y ? [Go(a)] : $m(a)), M = v !== "none";
      !f && M && E.push(...Bm(a, y, v, x));
      const H = [a, ...E], B = await sd(t, C), Z = [];
      let U = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && Z.push(B[w]), g) {
        const b = Lm(o, s, x);
        Z.push(B[b[0]], B[b[1]]);
      }
      if (U = [...U, {
        placement: o,
        overflows: Z
      }], !Z.every((b) => b <= 0)) {
        var $, N;
        const b = ((($ = i.flip) == null ? void 0 : $.index) || 0) + 1, S = H[b];
        if (S && (!(g === "alignment" ? T !== Nn(S) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        U.every((I) => I.overflows[0] > 0 && Nn(I.placement) === T)))
          return {
            data: {
              index: b,
              overflows: U
            },
            reset: {
              placement: S
            }
          };
        let k = (N = U.filter((V) => V.overflows[0] <= 0).sort((V, I) => V.overflows[1] - I.overflows[1])[0]) == null ? void 0 : N.placement;
        if (!k)
          switch (h) {
            case "bestFit": {
              var D;
              const V = (D = U.filter((I) => {
                if (M) {
                  const A = Nn(I.placement);
                  return A === T || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  A === "y";
                }
                return !0;
              }).map((I) => [I.placement, I.overflows.filter((A) => A > 0).reduce((A, F) => A + F, 0)]).sort((I, A) => I[1] - A[1])[0]) == null ? void 0 : D[0];
              V && (k = V);
              break;
            }
            case "initialPlacement":
              k = a;
              break;
          }
        if (o !== k)
          return {
            reset: {
              placement: k
            }
          };
      }
      return {};
    }
  };
}, Ym = /* @__PURE__ */ new Set(["left", "top"]);
async function Wm(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Jn(n), a = ho(n), l = Nn(n) === "y", c = Ym.has(s) ? -1 : 1, d = i && l ? -1 : 1, g = go(t, e);
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
const Xm = function(e) {
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
      } = t, l = await Wm(t, e);
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
}, jm = function(e) {
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
              y: T
            } = C;
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
      }, d = await sd(t, l), g = Nn(Jn(o)), f = od(g);
      let h = c[f], v = c[g];
      if (i) {
        const C = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", T = h + d[C], _ = h - d[w];
        h = ts(T, h, _);
      }
      if (s) {
        const C = g === "y" ? "top" : "left", w = g === "y" ? "bottom" : "right", T = v + d[C], _ = v - d[w];
        v = ts(T, v, _);
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
function vi() {
  return typeof window < "u";
}
function Er(e) {
  return ad(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ct(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function bn(e) {
  var t;
  return (t = (ad(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ad(e) {
  return vi() ? e instanceof Node || e instanceof Ct(e).Node : !1;
}
function Lt(e) {
  return vi() ? e instanceof Element || e instanceof Ct(e).Element : !1;
}
function Qt(e) {
  return vi() ? e instanceof HTMLElement || e instanceof Ct(e).HTMLElement : !1;
}
function dl(e) {
  return !vi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ct(e).ShadowRoot;
}
const Gm = /* @__PURE__ */ new Set(["inline", "contents"]);
function vo(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = $t(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Gm.has(o);
}
const Um = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Jm(e) {
  return Um.has(Er(e));
}
const Qm = [":popover-open", ":modal"];
function pi(e) {
  return Qm.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const e2 = ["transform", "translate", "scale", "rotate", "perspective"], t2 = ["transform", "translate", "scale", "rotate", "perspective", "filter"], n2 = ["paint", "layout", "strict", "content"];
function js(e) {
  const t = Gs(), n = Lt(e) ? $t(e) : e;
  return e2.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || t2.some((r) => (n.willChange || "").includes(r)) || n2.some((r) => (n.contain || "").includes(r));
}
function r2(e) {
  let t = Mn(e);
  for (; Qt(t) && !xr(t); ) {
    if (js(t))
      return t;
    if (pi(t))
      return null;
    t = Mn(t);
  }
  return null;
}
function Gs() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const o2 = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function xr(e) {
  return o2.has(Er(e));
}
function $t(e) {
  return Ct(e).getComputedStyle(e);
}
function mi(e) {
  return Lt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Mn(e) {
  if (Er(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    dl(e) && e.host || // Fallback.
    bn(e)
  );
  return dl(t) ? t.host : t;
}
function ld(e) {
  const t = Mn(e);
  return xr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Qt(t) && vo(t) ? t : ld(t);
}
function cd(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = ld(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Ct(o);
  return i ? (rs(s), t.concat(s, s.visualViewport || [], vo(o) ? o : [], [])) : t.concat(o, cd(o, []));
}
function rs(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ud(e) {
  const t = $t(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Qt(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = jo(n) !== i || jo(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function dd(e) {
  return Lt(e) ? e : e.contextElement;
}
function ur(e) {
  const t = dd(e);
  if (!Qt(t))
    return jt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = ud(t);
  let s = (i ? jo(n.width) : n.width) / r, a = (i ? jo(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const i2 = /* @__PURE__ */ jt(0);
function fd(e) {
  const t = Ct(e);
  return !Gs() || !t.visualViewport ? i2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function s2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ct(e) ? !1 : t;
}
function Ur(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = dd(e);
  let s = jt(1);
  t && (r ? Lt(r) && (s = ur(r)) : s = ur(e));
  const a = s2(i, n, r) ? fd(i) : jt(0);
  let l = (o.left + a.x) / s.x, c = (o.top + a.y) / s.y, d = o.width / s.x, g = o.height / s.y;
  if (i) {
    const f = Ct(i), h = r && Lt(r) ? Ct(r) : r;
    let v = f, y = rs(v);
    for (; y && r && h !== v; ) {
      const C = ur(y), w = y.getBoundingClientRect(), T = $t(y), _ = w.left + (y.clientLeft + parseFloat(T.paddingLeft)) * C.x, x = w.top + (y.clientTop + parseFloat(T.paddingTop)) * C.y;
      l *= C.x, c *= C.y, d *= C.x, g *= C.y, l += _, c += x, v = Ct(y), y = rs(v);
    }
  }
  return Uo({
    width: d,
    height: g,
    x: l,
    y: c
  });
}
function Us(e, t) {
  const n = mi(e).scrollLeft;
  return t ? t.left + n : Ur(bn(e)).left + n;
}
function gd(e, t, n) {
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
function a2(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = bn(r), a = t ? pi(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = jt(1);
  const d = jt(0), g = Qt(r);
  if ((g || !g && !i) && ((Er(r) !== "body" || vo(s)) && (l = mi(r)), Qt(r))) {
    const h = Ur(r);
    c = ur(r), d.x = h.x + r.clientLeft, d.y = h.y + r.clientTop;
  }
  const f = s && !g && !i ? gd(s, l, !0) : jt(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + d.x + f.x,
    y: n.y * c.y - l.scrollTop * c.y + d.y + f.y
  };
}
function l2(e) {
  return Array.from(e.getClientRects());
}
function c2(e) {
  const t = bn(e), n = mi(e), r = e.ownerDocument.body, o = cr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = cr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Us(e);
  const a = -n.scrollTop;
  return $t(r).direction === "rtl" && (s += cr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function u2(e, t) {
  const n = Ct(e), r = bn(e), o = n.visualViewport;
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
const d2 = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function f2(e, t) {
  const n = Ur(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Qt(e) ? ur(e) : jt(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, c = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: c
  };
}
function fl(e, t, n) {
  let r;
  if (t === "viewport")
    r = u2(e, n);
  else if (t === "document")
    r = c2(bn(e));
  else if (Lt(t))
    r = f2(t, n);
  else {
    const o = fd(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Uo(r);
}
function hd(e, t) {
  const n = Mn(e);
  return n === t || !Lt(n) || xr(n) ? !1 : $t(n).position === "fixed" || hd(n, t);
}
function g2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = cd(e, []).filter((a) => Lt(a) && Er(a) !== "body"), o = null;
  const i = $t(e).position === "fixed";
  let s = i ? Mn(e) : e;
  for (; Lt(s) && !xr(s); ) {
    const a = $t(s), l = js(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && d2.has(o.position) || vo(s) && !l && hd(e, s)) ? r = r.filter((d) => d !== s) : o = a, s = Mn(s);
  }
  return t.set(e, r), r;
}
function h2(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? pi(t) ? [] : g2(t, this._c) : [].concat(n), r], a = s[0], l = s.reduce((c, d) => {
    const g = fl(t, d, o);
    return c.top = cr(g.top, c.top), c.right = Gr(g.right, c.right), c.bottom = Gr(g.bottom, c.bottom), c.left = cr(g.left, c.left), c;
  }, fl(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function v2(e) {
  const {
    width: t,
    height: n
  } = ud(e);
  return {
    width: t,
    height: n
  };
}
function p2(e, t, n) {
  const r = Qt(t), o = bn(t), i = n === "fixed", s = Ur(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = jt(0);
  function c() {
    l.x = Us(o);
  }
  if (r || !r && !i)
    if ((Er(t) !== "body" || vo(o)) && (a = mi(t)), r) {
      const h = Ur(t, !0, i, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && c();
  i && !r && o && c();
  const d = o && !r && !i ? gd(o, a) : jt(0), g = s.left + a.scrollLeft - l.x - d.x, f = s.top + a.scrollTop - l.y - d.y;
  return {
    x: g,
    y: f,
    width: s.width,
    height: s.height
  };
}
function Mi(e) {
  return $t(e).position === "static";
}
function gl(e, t) {
  if (!Qt(e) || $t(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return bn(e) === n && (n = n.ownerDocument.body), n;
}
function vd(e, t) {
  const n = Ct(e);
  if (pi(e))
    return n;
  if (!Qt(e)) {
    let o = Mn(e);
    for (; o && !xr(o); ) {
      if (Lt(o) && !Mi(o))
        return o;
      o = Mn(o);
    }
    return n;
  }
  let r = gl(e, t);
  for (; r && Jm(r) && Mi(r); )
    r = gl(r, t);
  return r && xr(r) && Mi(r) && !js(r) ? n : r || r2(e) || n;
}
const m2 = async function(e) {
  const t = this.getOffsetParent || vd, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: p2(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function y2(e) {
  return $t(e).direction === "rtl";
}
const w2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: a2,
  getDocumentElement: bn,
  getClippingRect: h2,
  getOffsetParent: vd,
  getElementRects: m2,
  getClientRects: l2,
  getDimensions: v2,
  getScale: ur,
  isElement: Lt,
  isRTL: y2
}, _2 = Xm, x2 = jm, b2 = Zm, C2 = Km, k2 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: w2,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return Fm(e, t, {
    ...o,
    platform: i
  });
}, E2 = ({
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
    k2(e, c, {
      placement: r,
      middleware: [
        _2(o),
        // 手动偏移配置
        b2(i),
        //自动翻转
        x2(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [C2({ element: d })] : []
      ]
    }).then(({ x: w, y: T, placement: _, middlewareData: x }) => {
      if (Object.assign(c.style, {
        left: `${w}px`,
        top: `${T}px`
      }), l) {
        const { x: E, y: M } = x.arrow, H = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[_.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: E != null ? `${E}px` : "",
          top: M != null ? `${M}px` : "",
          right: "",
          bottom: "",
          [H]: "2px"
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
  function C(w) {
    c.contains(w.target) || v();
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
      v();
    },
    isVisible() {
      return f;
    }
  };
};
var S2 = /* @__PURE__ */ X('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function Sr(e, t) {
  le(t, !0);
  const n = m(t, "children", 7), r = m(t, "floating", 7), o = m(t, "placement", 7, "bottom");
  let i, s, a;
  Ln(() => (a = E2({
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
  var c = S2(), d = R(c), g = R(d);
  Ze(g, n), z(d), At(d, (v) => i = v, () => i);
  var f = L(d, 2), h = R(f);
  return Ze(h, r), z(f), At(f, (v) => s = v, () => s), z(c), O(e, c), ce({
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
ne(Sr, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Me(e, t) {
  le(t, !0);
  const n = m(t, "children", 7), r = m(t, "level", 7, 1), o = m(t, "mt", 7), i = m(t, "mb", 7);
  var s = Ae(), a = se(s);
  return Jf(a, () => `h${r()}`, !1, (l, c) => {
    Je(l, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var d = Ae(), g = se(d);
    Ze(g, () => n() ?? rt), O(c, d);
  }), O(e, s), ce({
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
ne(Me, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var N2 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const P2 = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function yi(e, t) {
  le(t, !0), Ve(e, P2);
  const n = /* @__PURE__ */ Le(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Te(e, ze(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = N2();
      O(r, i);
    },
    $$slots: { default: !0 }
  })), ce();
}
ne(yi, {}, [], [], !0);
const T2 = () => ({ deleteNode: (t) => {
  Xe.removeNode(t), Xe.updateEdges((n) => n.filter((r) => r.source !== t && r.target !== t));
} }), Qn = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, D2 = () => ({ copyNode: (t) => {
  const n = Xe.getNode(t);
  if (n) {
    const r = Qn(), o = {
      ...n,
      id: r,
      position: { x: n.position.x + 50, y: n.position.y + 50 }
    };
    Xe.updateNodes((i) => [...i.map((a) => ({ ...a, selected: !1 })), o]);
  }
} }), et = () => vn("svelteflow__node_id"), On = () => vn("tinyflow_options");
var A2 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), M2 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), O2 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), H2 = /* @__PURE__ */ X('<div class="input-item svelte-1jesvb7">执行条件： <!></div>'), V2 = (e, t, n) => {
  const r = e.target.checked;
  t(n, { async: r });
}, L2 = (e, t, n) => {
  const r = e.target.checked;
  t(n, { loopEnable: r });
}, $2 = /* @__PURE__ */ X('<div class="input-item svelte-1jesvb7">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-1jesvb7">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-1jesvb7">退出条件： <!></div>', 1), I2 = /* @__PURE__ */ X('<div class="settings svelte-1jesvb7"><div class="input-item svelte-1jesvb7">节点名称： <!></div> <div class="input-item svelte-1jesvb7">参数描述： <!></div> <!> <label class="input-item-inline svelte-1jesvb7"><span>异步执行：</span> <input type="checkbox"/></label> <label class="input-item-inline svelte-1jesvb7"><span>循环执行：</span> <input type="checkbox"/></label> <!></div>'), z2 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), R2 = /* @__PURE__ */ X('<div class="tf-node-toolbar svelte-1jesvb7"><!> <!> <!> <!></div>'), B2 = /* @__PURE__ */ X('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const q2 = {
  hash: "svelte-1jesvb7",
  code: ".tf-node-toolbar.svelte-1jesvb7 {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-1jesvb7 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-1jesvb7 .input-item:where(.svelte-1jesvb7) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-1jesvb7 .input-item-inline:where(.svelte-1jesvb7) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function Rt(e, t) {
  le(t, !0), Ve(e, q2);
  const n = m(t, "data", 7), r = m(t, "id", 7, ""), o = m(t, "icon", 7), i = m(t, "handle", 7), s = m(t, "children", 7), a = m(t, "allowExecute", 7, !0), l = m(t, "allowCopy", 7, !0), c = m(t, "allowDelete", 7, !0), d = m(t, "allowSetting", 7, !0), g = m(t, "allowSettingOfCondition", 7, !0), f = m(t, "showSourceHandle", 7, !0), h = m(t, "showTargetHandle", 7, !0), v = m(t, "onCollapse", 7);
  let y = n().expand ? ["key"] : [];
  const { updateNodeData: C, getNode: w } = dt(), T = /* @__PURE__ */ P(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: _ } = T2(), { copyNode: x } = D2(), E = On(), M = () => {
    E.onNodeExecute?.(w(r()));
  };
  let H = et();
  var B = B2(), Z = se(B);
  {
    var U = (A) => {
      Qu(A, {
        get position() {
          return ye.Top;
        },
        align: "end",
        children: (F, Y) => {
          var W = R2(), J = R(W);
          {
            var G = (te) => {
              Te(te, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  _(r());
                },
                children: (oe, ie) => {
                  var ee = A2();
                  O(oe, ee);
                },
                $$slots: { default: !0 }
              });
            };
            ae(J, (te) => {
              c() && te(G);
            });
          }
          var Q = L(J, 2);
          {
            var ue = (te) => {
              Te(te, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  x(r());
                },
                children: (oe, ie) => {
                  var ee = M2();
                  O(oe, ee);
                },
                $$slots: { default: !0 }
              });
            };
            ae(Q, (te) => {
              l() && te(ue);
            });
          }
          var re = L(Q, 2);
          {
            var j = (te) => {
              Te(te, {
                class: "tf-node-toolbar-item",
                onclick: M,
                children: (oe, ie) => {
                  var ee = O2();
                  O(oe, ee);
                },
                $$slots: { default: !0 }
              });
            };
            ae(re, (te) => {
              a() && te(j);
            });
          }
          var xe = L(re, 2);
          {
            var ve = (te) => {
              Sr(te, {
                placement: "bottom",
                floating: (ie) => {
                  var ee = I2(), de = R(ee), ge = L(R(de));
                  Qe(ge, {
                    style: "width: 100%;",
                    onchange: ($e) => {
                      const Ke = $e.target.value;
                      C(H, { title: Ke });
                    },
                    get value() {
                      return n().title;
                    }
                  }), z(de);
                  var pe = L(de, 2), q = L(R(pe));
                  je(q, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: ($e) => {
                      const Ke = $e.target.value;
                      C(H, { description: Ke });
                    },
                    get value() {
                      return n().description;
                    }
                  }), z(pe);
                  var qe = L(pe, 2);
                  {
                    var Oe = ($e) => {
                      var Ke = H2(), he = L(R(Ke));
                      je(he, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Be) => {
                          const wt = Be.target.value;
                          C(H, { condition: wt });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), z(Ke), O($e, Ke);
                    };
                    ae(qe, ($e) => {
                      g() && $e(Oe);
                    });
                  }
                  var fe = L(qe, 2), Ee = L(R(fe), 2);
                  gn(Ee), Ee.__change = [V2, C, H], z(fe);
                  var _e = L(fe, 2), Fe = L(R(_e), 2);
                  gn(Fe), Fe.__change = [L2, C, H], z(_e);
                  var yt = L(_e, 2);
                  {
                    var Ye = ($e) => {
                      var Ke = $2(), he = se(Ke), Be = L(R(he));
                      const wt = /* @__PURE__ */ P(() => n().loopIntervalMs || "1000");
                      je(Be, {
                        rows: 1,
                        style: "width: 100%;",
                        onchange: (zn) => {
                          const rn = zn.target.value;
                          C(H, { loopIntervalMs: rn });
                        },
                        get value() {
                          return u(wt);
                        }
                      }), z(he);
                      var We = L(he, 2), Nt = L(R(We));
                      const tt = /* @__PURE__ */ P(() => n().maxLoopCount || "0");
                      je(Nt, {
                        rows: 1,
                        style: "width: 100%;",
                        onchange: (zn) => {
                          const rn = zn.target.value;
                          C(H, { maxLoopCount: rn });
                        },
                        get value() {
                          return u(tt);
                        }
                      }), z(We);
                      var Bt = L(We, 2), wi = L(R(Bt));
                      je(wi, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (zn) => {
                          const rn = zn.target.value;
                          C(H, { loopBreakCondition: rn });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), z(Bt), O($e, Ke);
                    };
                    ae(yt, ($e) => {
                      n().loopEnable && $e(Ye);
                    });
                  }
                  z(ee), ke(() => {
                    pa(Ee, !!n().async), pa(Fe, !!n().loopEnable);
                  }), O(ie, ee);
                },
                children: (ie, ee) => {
                  Te(ie, {
                    class: "tf-node-toolbar-item",
                    children: (de, ge) => {
                      var pe = z2();
                      O(de, pe);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            ae(xe, (te) => {
              d() && te(ve);
            });
          }
          z(W), O(F, W);
        },
        $$slots: { default: !0 }
      });
    };
    ae(Z, (A) => {
      (a() || l() || c()) && A(U);
    });
  }
  var $ = L(Z, 2), N = L(R($), 2), D = R(N);
  rd(D, {
    get items() {
      return u(T);
    },
    get activeKeys() {
      return y;
    },
    onChange: (A, F) => {
      C(r(), { expand: F?.includes("key") }), v()?.(F?.includes("key") ? "key" : "");
    }
  }), z(N), z($);
  var b = L($, 2);
  {
    var S = (A) => {
      An(A, {
        type: "target",
        get position() {
          return ye.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    ae(b, (A) => {
      h() && A(S);
    });
  }
  var k = L(b, 2);
  {
    var V = (A) => {
      An(A, {
        type: "source",
        get position() {
          return ye.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    ae(k, (A) => {
      f() && A(V);
    });
  }
  var I = L(k, 2);
  return Ze(I, () => i() ?? rt), O(e, B), ce({
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
Vn(["change"]);
ne(
  Rt,
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
], F2 = [
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
var K2 = /* @__PURE__ */ X('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), Z2 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), Y2 = /* @__PURE__ */ X('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const W2 = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function md(e, t) {
  le(t, !0), Ve(e, W2);
  const n = m(t, "parameter", 7), r = m(t, "index", 7);
  let o = et(), i = /* @__PURE__ */ P(() => nr(o)), s = /* @__PURE__ */ P(() => ({
    ...n(),
    ...u(i)?.current?.data?.parameters[r()]
  }));
  const { updateNodeData: a } = dt(), l = (E, M) => {
    a(o, (H) => {
      let B = H.data.parameters;
      return B[r()][E] = M, { parameters: B };
    });
  }, c = (E) => {
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
  var v = Y2(), y = se(v), C = R(y);
  Qe(C, {
    style: "width: 100%;",
    get value() {
      return u(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: c
  }), z(y);
  var w = L(y, 2), T = R(w);
  ed(T, {
    get checked() {
      return u(s).required;
    },
    onchange: d
  }), z(w);
  var _ = L(w, 2), x = R(_);
  return At(
    Sr(x, {
      placement: "bottom",
      floating: (M) => {
        var H = K2(), B = R(H), Z = L(R(B));
        const U = /* @__PURE__ */ P(() => u(s).dataType ? [u(s).dataType] : ["String"]);
        Mt(Z, {
          get items() {
            return pd;
          },
          style: "width: 100%",
          onSelect: g,
          get value() {
            return u(U);
          }
        }), z(B);
        var $ = L(B, 2), N = L(R($));
        je(N, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return u(s).defaultValue;
          },
          onchange: (V) => {
            const I = V.target.value;
            l("defaultValue", I);
          }
        }), z($);
        var D = L($, 2), b = L(R(D));
        je(b, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return u(s).description;
          },
          onchange: (V) => {
            const I = V.target.value;
            l("description", I);
          }
        }), z(D);
        var S = L(D, 2), k = R(S);
        Te(k, {
          onclick: h,
          children: (V, I) => {
            be();
            var A = Se("删除");
            O(V, A);
          },
          $$slots: { default: !0 }
        }), z(S), z(H), O(M, H);
      },
      children: (M, H) => {
        Te(M, {
          class: "input-btn-more",
          children: (B, Z) => {
            var U = Z2();
            O(B, U);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (M) => f = M,
    () => f
  ), z(_), O(e, v), ce({
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
ne(md, { parameter: {}, index: {} }, [], [], !0);
var X2 = /* @__PURE__ */ X('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), j2 = /* @__PURE__ */ X('<div class="none-params svelte-3n0wca">无输入参数</div>'), G2 = /* @__PURE__ */ X('<div class="input-container svelte-3n0wca"><!> <!></div>');
const U2 = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function yd(e, t) {
  le(t, !0), Ve(e, U2);
  let n = et(), r = /* @__PURE__ */ P(() => nr(n)), o = /* @__PURE__ */ P(() => [...u(r)?.current?.data?.parameters || []]);
  var i = G2(), s = R(i);
  {
    var a = (c) => {
      var d = X2();
      be(4), O(c, d);
    };
    ae(s, (c) => {
      u(o).length !== 0 && c(a);
    });
  }
  var l = L(s, 2);
  ct(
    l,
    19,
    () => u(o),
    (c) => c.id,
    (c, d, g) => {
      md(c, {
        get parameter() {
          return u(d);
        },
        get index() {
          return u(g);
        }
      });
    },
    (c) => {
      var d = j2();
      O(c, d);
    }
  ), z(i), O(e, i), ce();
}
ne(yd, {}, [], [], !0);
const Jo = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = Qn()), Jo(t.children);
}), e), nn = () => {
  const { updateNodeData: e } = dt();
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
var J2 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), Q2 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ey = /* @__PURE__ */ X('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const ty = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function wd(e, t) {
  le(t, !0), Ve(e, ty);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Le(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = et(), { addParameter: i } = nn();
  return Rt(e, ze(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (a) => {
      var l = J2();
      O(a, l);
    },
    children: (a, l) => {
      var c = ey(), d = se(c), g = R(d);
      Me(g, {
        level: 3,
        children: (v, y) => {
          be();
          var C = Se("输入参数");
          O(v, C);
        },
        $$slots: { default: !0 }
      });
      var f = L(g, 2);
      Te(f, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input" });
        },
        children: (v, y) => {
          var C = Q2();
          O(v, C);
        },
        $$slots: { default: !0 }
      }), z(d);
      var h = L(d, 2);
      yd(h, {}), O(a, c);
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
ne(wd, { data: {} }, [], [], !0);
const _d = (e, t, n) => {
  for (const r of n)
    r.target === t && r.source && (e.push(r.source), _d(e, r.source, n));
}, xd = (e, t, n) => !e || e.length === 0 ? [] : e.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: t + "." + r.name,
  children: xd(r.children, t + "." + r.name, n)
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
          children: xd(r, e.id, t)
        };
    }
  }
}, ny = (e = !1) => {
  const t = et(), n = nr(t), r = /* @__PURE__ */ P(zt), o = /* @__PURE__ */ P(() => u(r).nodes), i = /* @__PURE__ */ P(() => u(r).edges), s = /* @__PURE__ */ P(() => u(r).nodeLookup);
  let a = /* @__PURE__ */ P(() => {
    const l = [];
    if (!n.current)
      return [];
    const c = u(s).get(t);
    if (e)
      for (const d of u(o)) {
        const g = d.parentId === n.current.id;
        if (g) {
          const f = hl(d, g, c);
          f && l.push(f);
        }
      }
    else {
      const d = [];
      _d(d, t, u(i));
      for (const g of u(o))
        if (d.includes(g.id)) {
          const f = g.parentId === n.current.id, h = hl(g, f, c);
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
var ry = /* @__PURE__ */ X('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), oy = /* @__PURE__ */ X('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const iy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function bd(e, t) {
  le(t, !0), Ve(e, iy), Ln(() => {
    u(l).refType || h({ value: "ref" });
  });
  const n = m(t, "parameter", 7), r = m(t, "index", 7), o = m(t, "dataKeyName", 7), i = m(t, "useChildrenOnly", 7);
  let s = et(), a = /* @__PURE__ */ P(() => nr(s)), l = /* @__PURE__ */ P(() => ({
    ...n(),
    ...u(a)?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: c } = dt(), d = ($, N) => {
    c(s, (D) => {
      let b = D.data?.[o()];
      return b[r()] = { ...b[r()], [$]: N }, { [o()]: b };
    });
  }, g = ($, N) => {
    const D = N.target.value;
    d($, D);
  }, f = ($) => {
    const N = $.value;
    d("ref", N);
  }, h = ($) => {
    const N = $.value;
    d("refType", N);
  };
  let v;
  const y = () => {
    c(s, ($) => {
      let N = $.data?.[o()];
      return N.splice(r(), 1), { [o()]: [...N] };
    }), v?.hide();
  };
  let C = ny(i());
  var w = oy(), T = se(w), _ = R(T);
  const x = /* @__PURE__ */ P(() => u(l).nameDisabled === !0);
  Qe(_, {
    style: "width: 100%;",
    get value() {
      return u(l).name;
    },
    placeholder: "请输入参数名称",
    get disabled() {
      return u(x);
    },
    oninput: ($) => g("name", $)
  }), z(T);
  var E = L(T, 2), M = R(E);
  {
    var H = ($) => {
      Qe($, {
        get value() {
          return u(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (N) => g("value", N)
      });
    }, B = ($, N) => {
      {
        var D = (b) => {
          const S = /* @__PURE__ */ P(() => [u(l).ref]);
          Mt(b, {
            get items() {
              return C.current;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return u(S);
            },
            expandAll: !0,
            onSelect: f
          });
        };
        ae(
          $,
          (b) => {
            u(l).refType !== "input" && b(D);
          },
          N
        );
      }
    };
    ae(M, ($) => {
      u(l).refType === "fixed" ? $(H) : $(B, !1);
    });
  }
  z(E);
  var Z = L(E, 2), U = R(Z);
  return At(
    Sr(U, {
      placement: "bottom",
      floating: (N) => {
        var D = ry(), b = R(D), S = L(R(b));
        const k = /* @__PURE__ */ P(() => u(l).refType ? [u(l).refType] : []);
        Mt(S, {
          get items() {
            return F2;
          },
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return u(k);
          },
          onSelect: h
        }), z(b);
        var V = L(b, 2), I = L(R(V));
        je(I, {
          rows: 1,
          style: "width: 100%;",
          onchange: (J) => {
            g("defaultValue", J);
          },
          get value() {
            return u(l).defaultValue;
          }
        }), z(V);
        var A = L(V, 2), F = L(R(A));
        je(F, {
          rows: 3,
          style: "width: 100%;",
          onchange: (J) => {
            g("description", J);
          },
          get value() {
            return u(l).description;
          }
        }), z(A);
        var Y = L(A, 2), W = R(Y);
        Te(W, {
          onclick: y,
          children: (J, G) => {
            be();
            var Q = Se("删除");
            O(J, Q);
          },
          $$slots: { default: !0 }
        }), z(Y), z(D), O(N, D);
      },
      children: (N, D) => {
        yi(N, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (N) => v = N,
    () => v
  ), z(Z), O(e, w), ce({
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
var sy = /* @__PURE__ */ X('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), ay = /* @__PURE__ */ X('<div class="none-params svelte-1sm1mgi"> </div>'), ly = /* @__PURE__ */ X('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const cy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function ht(e, t) {
  le(t, !0), Ve(e, cy);
  const n = m(t, "noneParameterText", 7, "无输入参数"), r = m(t, "dataKeyName", 7, "parameters"), o = m(t, "useChildrenOnly", 7);
  let i = et(), s = /* @__PURE__ */ P(() => nr(i)), a = /* @__PURE__ */ P(() => [...u(s)?.current?.data?.[r()] || []]);
  var l = ly(), c = R(l);
  {
    var d = (f) => {
      var h = sy();
      be(4), O(f, h);
    };
    ae(c, (f) => {
      u(a).length !== 0 && f(d);
    });
  }
  var g = L(c, 2);
  return ct(
    g,
    19,
    () => u(a),
    (f) => f.id,
    (f, h, v) => {
      bd(f, {
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
      var h = ay(), v = R(h, !0);
      z(h), ke(() => Ie(v, n())), O(f, h);
    }
  ), z(l), O(e, l), ce({
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
ne(ht, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
var uy = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), dy = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), fy = /* @__PURE__ */ X('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const gy = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function Cd(e, t) {
  le(t, !0), Ve(e, gy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Le(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = et(), { addParameter: i } = nn();
  return Rt(e, ze(
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
        var l = uy();
        O(a, l);
      },
      children: (a, l) => {
        var c = fy(), d = se(c), g = R(d);
        Me(g, {
          level: 3,
          children: (v, y) => {
            be();
            var C = Se("输出参数");
            O(v, C);
          },
          $$slots: { default: !0 }
        });
        var f = L(g, 2);
        Te(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (v, y) => {
            var C = dy();
            O(v, C);
          },
          $$slots: { default: !0 }
        }), z(d);
        var h = L(d, 2);
        ht(h, { noneParameterText: "无输出参数", dataKeyName: "outputDefs" }), O(a, c);
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
ne(Cd, { data: {} }, [], [], !0);
const Oi = (e) => JSON.parse(JSON.stringify(e));
var hy = /* @__PURE__ */ me('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), vy = /* @__PURE__ */ X('<div class="input-more-item svelte-1cfeest"><!></div>'), py = /* @__PURE__ */ X('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), my = /* @__PURE__ */ X('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const yy = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function kd(e, t) {
  le(t, !0), Ve(e, yy);
  const n = m(t, "parameter", 7), r = m(t, "position", 7), o = m(t, "dataKeyName", 7);
  let i = et(), s = /* @__PURE__ */ P(() => nr(i)), a = /* @__PURE__ */ P(() => {
    let D = u(s)?.current?.data?.[o()], b;
    if (D && r().length > 0) {
      let S = D;
      for (let k = 0; k < r().length; k++) {
        const V = r()[k];
        k == r().length - 1 ? b = S[V] : S = S[V].children;
      }
    }
    return { ...n(), ...b };
  });
  const { updateNodeData: l } = dt(), c = (D, b) => {
    l(i, (S) => {
      const k = S.data?.[o()];
      if (k && r().length > 0) {
        let V = k;
        for (let I = 0; I < r().length; I++) {
          const A = r()[I];
          I == r().length - 1 ? V[A] = { ...V[A], [D]: b } : V = V[A].children;
        }
      }
      return { [o()]: [...Oi(k)] };
    });
  }, d = (D, b) => {
    const S = b.target.value;
    c(D, S);
  }, g = (D) => {
    const b = D.value;
    c("dataType", b);
  };
  let f;
  const h = () => {
    l(i, (D) => {
      let b = D.data?.[o()];
      if (b && r().length > 0) {
        let S = b;
        for (let k = 0; k < r().length; k++) {
          const V = r()[k];
          k == r().length - 1 ? S.splice(V, 1) : S = S[V].children;
        }
      }
      return { [o()]: [...Oi(b)] };
    }), f?.hide();
  }, v = () => {
    l(i, (D) => {
      let b = D.data?.[o()];
      if (b && r().length > 0) {
        let S = b;
        for (let k = 0; k < r().length; k++) {
          const V = r()[k];
          k == r().length - 1 ? S[V].children ? S[V].children.push({ id: Qn(), name: "newParam", dataType: "String" }) : S[V].children = [{ id: Qn(), name: "newParam", dataType: "String" }] : S = S[V].children;
        }
      }
      return { [o()]: [...Oi(b)] };
    });
  };
  var y = my(), C = se(y), w = R(C);
  {
    var T = (D) => {
      var b = Ae(), S = se(b);
      ct(S, 17, r, hr, (k, V) => {
        be();
        var I = Se(" ");
        O(k, I);
      }), O(D, b);
    };
    ae(w, (D) => {
      r().length > 1 && D(T);
    });
  }
  var _ = L(w, 2);
  const x = /* @__PURE__ */ P(() => u(a).nameDisabled === !0);
  Qe(_, {
    style: "width: 100%;",
    get value() {
      return u(a).name;
    },
    placeholder: "请输入参数名称",
    oninput: (D) => {
      d("name", D);
    },
    get disabled() {
      return u(x);
    }
  }), z(C);
  var E = L(C, 2), M = R(E);
  const H = /* @__PURE__ */ P(() => u(a).dataType ? [u(a).dataType] : []), B = /* @__PURE__ */ P(() => u(a).dataTypeDisabled === !0);
  Mt(M, {
    get items() {
      return pd;
    },
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return u(H);
    },
    get disabled() {
      return u(B);
    },
    onSelect: g
  });
  var Z = L(M, 2);
  {
    var U = (D) => {
      Te(D, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: v,
        children: (b, S) => {
          var k = hy();
          O(b, k);
        },
        $$slots: { default: !0 }
      });
    };
    ae(Z, (D) => {
      (u(a).dataType === "Object" || u(a).dataType === "Array") && u(a).addChildDisabled !== !0 && D(U);
    });
  }
  z(E);
  var $ = L(E, 2), N = R($);
  return At(
    Sr(N, {
      placement: "bottom",
      floating: (b) => {
        var S = py(), k = R(S), V = L(R(k));
        const I = /* @__PURE__ */ P(() => u(a).defaultValue || "");
        je(V, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return u(I);
          },
          onchange: (G) => {
            d("defaultValue", G);
          }
        }), z(k);
        var A = L(k, 2), F = L(R(A));
        const Y = /* @__PURE__ */ P(() => u(a).description || "");
        je(F, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return u(Y);
          },
          onchange: (G) => {
            d("description", G);
          }
        }), z(A);
        var W = L(A, 2);
        {
          var J = (G) => {
            var Q = vy(), ue = R(Q);
            Te(ue, {
              onclick: h,
              children: (re, j) => {
                be();
                var xe = Se("删除");
                O(re, xe);
              },
              $$slots: { default: !0 }
            }), z(Q), O(G, Q);
          };
          ae(W, (G) => {
            u(a).deleteDisabled !== !0 && G(J);
          });
        }
        z(S), O(b, S);
      },
      children: (b, S) => {
        yi(b, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (b) => f = b,
    () => f
  ), z($), O(e, y), ce({
    get parameter() {
      return n();
    },
    set parameter(D) {
      n(D), p();
    },
    get position() {
      return r();
    },
    set position(D) {
      r(D), p();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(D) {
      o(D), p();
    }
  });
}
ne(kd, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var wy = /* @__PURE__ */ X("<!> <!>", 1), _y = /* @__PURE__ */ X('<div class="none-params svelte-1sm1mgi"> </div>'), xy = /* @__PURE__ */ X('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), by = /* @__PURE__ */ X('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Cy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function In(e, t) {
  le(t, !0), Ve(e, Cy);
  const n = (f, h = rt, v = rt) => {
    var y = Ae(), C = se(y);
    ct(
      C,
      19,
      h,
      (w) => `${w.id}_${w.children ? w.children.length : 0}`,
      (w, T, _) => {
        var x = wy(), E = se(x);
        const M = /* @__PURE__ */ P(() => [...v(), u(_)]);
        kd(E, {
          get parameter() {
            return u(T);
          },
          get position() {
            return u(M);
          },
          get dataKeyName() {
            return o();
          }
        });
        var H = L(E, 2);
        {
          var B = (Z) => {
            var U = /* @__PURE__ */ ys(() => [...v(), u(_)]);
            n(Z, () => u(T).children, () => u(U));
          };
          ae(H, (Z) => {
            u(T).children && Z(B);
          });
        }
        O(w, x);
      },
      (w) => {
        var T = Ae(), _ = se(T);
        {
          var x = (E) => {
            var M = _y(), H = R(M, !0);
            z(M), ke(() => Ie(H, r())), O(E, M);
          };
          ae(_, (E) => {
            v().length === 0 && E(x);
          });
        }
        O(w, T);
      }
    ), O(f, y);
  }, r = m(t, "noneParameterText", 7, "无输出参数"), o = m(t, "dataKeyName", 7, "outputDefs");
  let i = et(), s = /* @__PURE__ */ P(() => nr(i)), a = /* @__PURE__ */ P(() => [...u(s)?.current?.data?.[o()] || []]);
  var l = by(), c = R(l);
  {
    var d = (f) => {
      var h = xy();
      be(4), O(f, h);
    };
    ae(c, (f) => {
      u(a).length !== 0 && f(d);
    });
  }
  var g = L(c, 2);
  return n(g, () => u(a) || [], () => []), z(l), O(e, l), ce({
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
ne(In, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var ky = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), Ey = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Sy = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), Ny = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), Py = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), Ty = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Dy = /* @__PURE__ */ X('<div class="heading svelte-q0cqsa"><!> <!></div> <!> <!> <div class="setting-title svelte-q0cqsa">模型</div> <div class="setting-item svelte-q0cqsa"><!> <!></div> <div class="setting-title svelte-q0cqsa">采样参数</div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="100" step="1"/></div></div> <div class="setting-title svelte-q0cqsa">系统提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="setting-title svelte-q0cqsa">用户提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="heading svelte-q0cqsa"><!> <!> <!></div> <!>', 1);
const Ay = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Ed(e, t) {
  le(t, !0), Ve(e, Ay);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Le(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = et(), { addParameter: i } = nn(), s = On();
  let a = /* @__PURE__ */ Ne(Dt([]));
  Ln(async () => {
    const d = await s.provider?.llm?.();
    u(a).push(...d || []);
  });
  const { updateNodeData: l } = dt(), c = (d) => {
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
  return Ge(() => {
    n().outType || c("text");
  }), Rt(e, ze(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (g) => {
        var f = ky();
        O(g, f);
      },
      children: (g, f) => {
        var h = Dy(), v = se(h), y = R(v);
        Me(y, {
          level: 3,
          children: (de, ge) => {
            be();
            var pe = Se("输入参数");
            O(de, pe);
          },
          $$slots: { default: !0 }
        });
        var C = L(y, 2);
        Te(C, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (de, ge) => {
            var pe = Ey();
            O(de, pe);
          },
          $$slots: { default: !0 }
        }), z(v);
        var w = L(v, 2);
        ht(w, {});
        var T = L(w, 2);
        Me(T, {
          level: 3,
          mt: "10px",
          children: (de, ge) => {
            be();
            var pe = Se("模型设置");
            O(de, pe);
          },
          $$slots: { default: !0 }
        });
        var _ = L(T, 4), x = R(_);
        const E = /* @__PURE__ */ P(() => n().llmId ? [n().llmId] : []);
        Mt(x, {
          get items() {
            return u(a);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (de) => {
            const ge = de.value;
            l(o, () => ({ llmId: ge }));
          },
          get value() {
            return u(E);
          }
        });
        var M = L(x, 2);
        yi(M, {}), z(_);
        var H = L(_, 4), B = R(H), Z = R(B), U = R(Z);
        z(Z);
        var $ = L(Z, 2);
        gn($), $.__input = [Sy, l, o], z(B), z(H);
        var N = L(H, 2), D = R(N), b = R(D), S = R(b);
        z(b);
        var k = L(b, 2);
        gn(k), k.__input = [Ny, l, o], z(D), z(N);
        var V = L(N, 2), I = R(V), A = R(I), F = R(A);
        z(A);
        var Y = L(A, 2);
        gn(Y), Y.__input = [Py, l, o], z(I), z(V);
        var W = L(V, 4), J = R(W);
        const G = /* @__PURE__ */ P(() => n().systemPrompt || "");
        je(J, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return u(G);
          },
          oninput: (de) => {
            l(o, { systemPrompt: de.target.value });
          }
        }), z(W);
        var Q = L(W, 4), ue = R(Q);
        const re = /* @__PURE__ */ P(() => n().userPrompt || "");
        je(ue, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return u(re);
          },
          oninput: (de) => {
            l(o, { userPrompt: de.target.value });
          }
        }), z(Q);
        var j = L(Q, 2), xe = R(j);
        Me(xe, {
          level: 3,
          mt: "10px",
          children: (de, ge) => {
            be();
            var pe = Se("输出参数");
            O(de, pe);
          },
          $$slots: { default: !0 }
        });
        var ve = L(xe, 2);
        const te = /* @__PURE__ */ P(() => n().outType ? [n().outType] : []);
        Mt(ve, {
          items: [
            { label: "文本", value: "text" },
            { label: "JSON", value: "json" }
          ],
          style: "width: 100px;margin-left: auto",
          defaultValue: "text",
          onSelect: (de) => {
            c(de.value);
          },
          get value() {
            return u(te);
          }
        });
        var oe = L(ve, 2);
        {
          var ie = (de) => {
            Te(de, {
              class: "input-btn-more",
              style: "margin-left: 10px",
              onclick: () => {
                i(o, "outputDefs");
              },
              children: (ge, pe) => {
                var q = Ty();
                O(ge, q);
              },
              $$slots: { default: !0 }
            });
          };
          ae(oe, (de) => {
            n().outType === "json" && de(ie);
          });
        }
        z(j);
        var ee = L(j, 2);
        In(ee, {}), ke(() => {
          Ie(U, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), Eo($, n().temperature ?? 0.5), Ie(S, `Top P: ${n().topP ?? 0.9 ?? ""}`), Eo(k, n().topP ?? 0.9), Ie(F, `Top K: ${n().topK ?? 50 ?? ""}`), Eo(Y, n().topK ?? 50);
        }), O(g, h);
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
Vn(["input"]);
ne(Ed, { data: {} }, [], [], !0);
var My = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Oy = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Hy = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Vy = /* @__PURE__ */ X('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const Ly = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Sd(e, t) {
  le(t, !0), Ve(e, Ly);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Le(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Ln(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = et(), { addParameter: i } = nn(), { updateNodeData: s } = dt(), a = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  return Rt(e, ze(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = My();
        O(c, d);
      },
      children: (c, d) => {
        var g = Vy(), f = se(g), h = R(f);
        Me(h, {
          level: 3,
          children: ($, N) => {
            be();
            var D = Se("输入参数");
            O($, D);
          },
          $$slots: { default: !0 }
        });
        var v = L(h, 2);
        Te(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: ($, N) => {
            var D = Oy();
            O($, D);
          },
          $$slots: { default: !0 }
        }), z(f);
        var y = L(f, 2);
        ht(y, {});
        var C = L(y, 2);
        Me(C, {
          level: 3,
          mt: "10px",
          children: ($, N) => {
            be();
            var D = Se("代码");
            O($, D);
          },
          $$slots: { default: !0 }
        });
        var w = L(C, 4), T = R(w);
        const _ = /* @__PURE__ */ P(() => n().engine ? [n().engine] : ["qlexpress"]);
        Mt(T, {
          get items() {
            return a;
          },
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: ($) => {
            const N = $.value;
            s(o, () => ({ engine: N }));
          },
          get value() {
            return u(_);
          }
        }), z(w);
        var x = L(w, 4), E = R(x);
        const M = /* @__PURE__ */ P(() => n().code || "");
        je(E, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: ($) => {
            s(o, () => ({ code: $.target.value }));
          },
          get value() {
            return u(M);
          }
        }), z(x);
        var H = L(x, 2), B = R(H);
        Me(B, {
          level: 3,
          mt: "10px",
          children: ($, N) => {
            be();
            var D = Se("输出参数");
            O($, D);
          },
          $$slots: { default: !0 }
        });
        var Z = L(B, 2);
        Te(Z, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: ($, N) => {
            var D = Hy();
            O($, D);
          },
          $$slots: { default: !0 }
        }), z(H);
        var U = L(H, 2);
        In(U, {}), O(c, g);
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
ne(Sd, { data: {} }, [], [], !0);
var $y = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), Iy = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), zy = /* @__PURE__ */ X('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Ry = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Nd(e, t) {
  le(t, !0), Ve(e, Ry);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Le(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = et(), { addParameter: i } = nn(), { updateNodeData: s } = dt();
  return Ge(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), Rt(e, ze(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var c = $y();
        O(l, c);
      },
      children: (l, c) => {
        var d = zy(), g = se(d), f = R(g);
        Me(f, {
          level: 3,
          children: (M, H) => {
            be();
            var B = Se("输入参数");
            O(M, B);
          },
          $$slots: { default: !0 }
        });
        var h = L(f, 2);
        Te(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (M, H) => {
            var B = Iy();
            O(M, B);
          },
          $$slots: { default: !0 }
        }), z(g);
        var v = L(g, 2);
        ht(v, {});
        var y = L(v, 2);
        Me(y, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (M, H) => {
            be();
            var B = Se("模板内容");
            O(M, B);
          },
          $$slots: { default: !0 }
        });
        var C = L(y, 2), w = R(C);
        const T = /* @__PURE__ */ P(() => n().template || "");
        je(w, {
          rows: 10,
          placeholder: "请输入模板内容",
          style: "width: 100%",
          onchange: (M) => {
            s(o, () => ({ template: M.target.value }));
          },
          get value() {
            return u(T);
          }
        }), z(C);
        var _ = L(C, 2), x = R(_);
        Me(x, {
          level: 3,
          mt: "10px",
          children: (M, H) => {
            be();
            var B = Se("输出参数");
            O(M, B);
          },
          $$slots: { default: !0 }
        }), z(_);
        var E = L(_, 2);
        In(E, {}), O(l, d);
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
ne(Nd, { data: {} }, [], [], !0);
var By = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), qy = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Fy = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ky = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Zy = /* @__PURE__ */ X('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), Yy = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Wy = /* @__PURE__ */ X('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), Xy = /* @__PURE__ */ X('<div style="width: 100%"><!></div>'), jy = /* @__PURE__ */ X('<div style="width: 100%"><!></div>'), Gy = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Uy = /* @__PURE__ */ X('<div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div class="radio-group svelte-1mo2w1q"><label class="svelte-1mo2w1q"><!>none</label> <label class="svelte-1mo2w1q"><!>form-data</label> <label class="svelte-1mo2w1q"><!>x-www-form-urlencoded</label> <label class="svelte-1mo2w1q"><!>json</label> <label class="svelte-1mo2w1q"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1mo2w1q"><!> <!></div> <!>', 1);
const Jy = {
  hash: "svelte-1mo2w1q",
  code: ".heading.svelte-1mo2w1q {display:flex;margin-bottom:10px;}.radio-group.svelte-1mo2w1q {display:flex;margin:10px 0;}.radio-group.svelte-1mo2w1q label:where(.svelte-1mo2w1q) {display:flex;font-size:14px;}"
};
function Pd(e, t) {
  le(t, !0), Ve(e, Jy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Le(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
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
  ], i = et(), { addParameter: s } = nn(), { updateNodeData: a } = dt();
  return Rt(e, ze(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = By();
        O(c, d);
      },
      children: (c, d) => {
        var g = Uy(), f = se(g), h = R(f);
        Me(h, {
          level: 3,
          children: (fe, Ee) => {
            be();
            var _e = Se("输入参数");
            O(fe, _e);
          },
          $$slots: { default: !0 }
        });
        var v = L(h, 2);
        Te(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (fe, Ee) => {
            var _e = qy();
            O(fe, _e);
          },
          $$slots: { default: !0 }
        }), z(f);
        var y = L(f, 2);
        ht(y, {});
        var C = L(y, 2);
        Me(C, {
          level: 3,
          mt: "10px",
          children: (fe, Ee) => {
            be();
            var _e = Se("URL 地址");
            O(fe, _e);
          },
          $$slots: { default: !0 }
        });
        var w = L(C, 2), T = R(w), _ = R(T);
        const x = /* @__PURE__ */ P(() => n().method ? [n().method] : ["get"]);
        Mt(_, {
          get items() {
            return o;
          },
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (fe) => {
            const Ee = fe.value;
            a(i, () => ({ method: Ee }));
          },
          get value() {
            return u(x);
          }
        }), z(T);
        var E = L(T, 2), M = R(E);
        const H = /* @__PURE__ */ P(() => n().url || "");
        Qe(M, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (fe) => {
            a(i, () => ({ url: fe.target.value }));
          },
          get value() {
            return u(H);
          }
        }), z(E), z(w);
        var B = L(w, 2), Z = R(B);
        Me(Z, {
          level: 3,
          children: (fe, Ee) => {
            be();
            var _e = Se("Http 头信息");
            O(fe, _e);
          },
          $$slots: { default: !0 }
        });
        var U = L(Z, 2);
        Te(U, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (fe, Ee) => {
            var _e = Fy();
            O(fe, _e);
          },
          $$slots: { default: !0 }
        }), z(B);
        var $ = L(B, 2);
        ht($, { dataKeyName: "headers" });
        var N = L($, 2);
        Me(N, {
          level: 3,
          mt: "10px",
          children: (fe, Ee) => {
            be();
            var _e = Se("Body");
            O(fe, _e);
          },
          $$slots: { default: !0 }
        });
        var D = L(N, 2), b = R(D), S = R(b);
        const k = /* @__PURE__ */ P(() => !n().bodyType);
        Qe(S, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return u(k);
          },
          onchange: (fe) => {
            fe.target?.checked && a(i, { bodyType: "" });
          }
        }), be(), z(b);
        var V = L(b, 2), I = R(V);
        const A = /* @__PURE__ */ P(() => n().bodyType === "form-data");
        Qe(I, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return u(A);
          },
          onchange: (fe) => {
            fe.target?.checked && a(i, { bodyType: "form-data" });
          }
        }), be(), z(V);
        var F = L(V, 2), Y = R(F);
        const W = /* @__PURE__ */ P(() => n().bodyType === "x-www-form-urlencoded");
        Qe(Y, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return u(W);
          },
          onchange: (fe) => {
            fe.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
          }
        }), be(), z(F);
        var J = L(F, 2), G = R(J);
        const Q = /* @__PURE__ */ P(() => n().bodyType === "json");
        Qe(G, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return u(Q);
          },
          onchange: (fe) => {
            fe.target?.checked && a(i, { bodyType: "json" });
          }
        }), be(), z(J);
        var ue = L(J, 2), re = R(ue);
        const j = /* @__PURE__ */ P(() => n().bodyType === "raw");
        Qe(re, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return u(j);
          },
          onchange: (fe) => {
            fe.target?.checked && a(i, { bodyType: "raw" });
          }
        }), be(), z(ue), z(D);
        var xe = L(D, 2);
        {
          var ve = (fe) => {
            var Ee = Zy(), _e = se(Ee), Fe = R(_e);
            Me(Fe, {
              level: 3,
              children: ($e, Ke) => {
                be();
                var he = Se("参数");
                O($e, he);
              },
              $$slots: { default: !0 }
            });
            var yt = L(Fe, 2);
            Te(yt, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: ($e, Ke) => {
                var he = Ky();
                O($e, he);
              },
              $$slots: { default: !0 }
            }), z(_e);
            var Ye = L(_e, 2);
            ht(Ye, { dataKeyName: "formData" }), O(fe, Ee);
          };
          ae(xe, (fe) => {
            n().bodyType === "form-data" && fe(ve);
          });
        }
        var te = L(xe, 2);
        {
          var oe = (fe) => {
            var Ee = Wy(), _e = se(Ee), Fe = R(_e);
            Me(Fe, {
              level: 3,
              children: ($e, Ke) => {
                be();
                var he = Se("Body 参数");
                O($e, he);
              },
              $$slots: { default: !0 }
            });
            var yt = L(Fe, 2);
            Te(yt, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: ($e, Ke) => {
                var he = Yy();
                O($e, he);
              },
              $$slots: { default: !0 }
            }), z(_e);
            var Ye = L(_e, 2);
            ht(Ye, { dataKeyName: "formUrlencoded" }), O(fe, Ee);
          };
          ae(te, (fe) => {
            n().bodyType === "x-www-form-urlencoded" && fe(oe);
          });
        }
        var ie = L(te, 2);
        {
          var ee = (fe) => {
            var Ee = Xy(), _e = R(Ee);
            je(_e, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Fe) => {
                a(i, { bodyJson: Fe.target.value });
              }
            }), z(Ee), O(fe, Ee);
          };
          ae(ie, (fe) => {
            n().bodyType === "json" && fe(ee);
          });
        }
        var de = L(ie, 2);
        {
          var ge = (fe) => {
            var Ee = jy(), _e = R(Ee);
            je(_e, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Fe) => {
                a(i, { bodyRaw: Fe.target.value });
              }
            }), z(Ee), O(fe, Ee);
          };
          ae(de, (fe) => {
            n().bodyType === "raw" && fe(ge);
          });
        }
        var pe = L(de, 2), q = R(pe);
        Me(q, {
          level: 3,
          mt: "10px",
          children: (fe, Ee) => {
            be();
            var _e = Se("输出参数");
            O(fe, _e);
          },
          $$slots: { default: !0 }
        });
        var qe = L(q, 2);
        Te(qe, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (fe, Ee) => {
            var _e = Gy();
            O(fe, _e);
          },
          $$slots: { default: !0 }
        }), z(pe);
        var Oe = L(pe, 2);
        In(Oe, {}), O(c, g);
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
ne(Pd, { data: {} }, [], [], !0);
var Qy = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), ew = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), tw = /* @__PURE__ */ X('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const nw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Td(e, t) {
  le(t, !0), Ve(e, nw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Le(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = et(), { addParameter: i } = nn(), s = On();
  let a = /* @__PURE__ */ Ne(Dt([]));
  Ln(async () => {
    const c = await s.provider?.knowledge?.();
    u(a).push(...c || []);
  });
  const { updateNodeData: l } = dt();
  return Ge(() => {
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
  }), Rt(e, ze(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var g = Qy();
        O(d, g);
      },
      children: (d, g) => {
        var f = tw(), h = se(f), v = R(h);
        Me(v, {
          level: 3,
          children: (D, b) => {
            be();
            var S = Se("输入参数");
            O(D, S);
          },
          $$slots: { default: !0 }
        });
        var y = L(v, 2);
        Te(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (D, b) => {
            var S = ew();
            O(D, S);
          },
          $$slots: { default: !0 }
        }), z(h);
        var C = L(h, 2);
        ht(C, {});
        var w = L(C, 2);
        Me(w, {
          level: 3,
          mt: "10px",
          children: (D, b) => {
            be();
            var S = Se("知识库设置");
            O(D, S);
          },
          $$slots: { default: !0 }
        });
        var T = L(w, 4), _ = R(T);
        const x = /* @__PURE__ */ P(() => n().knowledgeId ? [n().knowledgeId] : []);
        Mt(_, {
          get items() {
            return u(a);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (D) => {
            const b = D.value;
            l(o, () => ({ knowledgeId: b }));
          },
          get value() {
            return u(x);
          }
        }), z(T);
        var E = L(T, 4), M = R(E);
        Qe(M, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (D) => {
            const b = D.target.value;
            l(o, () => ({ keyword: b }));
          }
        }), z(E);
        var H = L(E, 4), B = R(H);
        const Z = /* @__PURE__ */ P(() => n().limit || "");
        Qe(B, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          onchange: (D) => {
            const b = D.target.value;
            l(o, () => ({ limit: b }));
          },
          get value() {
            return u(Z);
          }
        }), z(H);
        var U = L(H, 2), $ = R(U);
        Me($, {
          level: 3,
          mt: "10px",
          children: (D, b) => {
            be();
            var S = Se("输出参数");
            O(D, S);
          },
          $$slots: { default: !0 }
        }), z(U);
        var N = L(U, 2);
        In(N, {}), O(d, f);
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
ne(Td, { data: {} }, [], [], !0);
var rw = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), ow = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), iw = /* @__PURE__ */ X('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const sw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Dd(e, t) {
  le(t, !0), Ve(e, sw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Le(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = et(), { addParameter: i } = nn(), s = On();
  let a = /* @__PURE__ */ Ne(Dt([]));
  Ln(async () => {
    const c = await s.provider?.searchEngine?.();
    u(a).push(...c || []);
  });
  const { updateNodeData: l } = dt();
  return Ge(() => {
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
  }), Rt(e, ze(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var g = rw();
        O(d, g);
      },
      children: (d, g) => {
        var f = iw(), h = se(f), v = R(h);
        Me(v, {
          level: 3,
          children: (N, D) => {
            be();
            var b = Se("输入参数");
            O(N, b);
          },
          $$slots: { default: !0 }
        });
        var y = L(v, 2);
        Te(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (N, D) => {
            var b = ow();
            O(N, b);
          },
          $$slots: { default: !0 }
        }), z(h);
        var C = L(h, 2);
        ht(C, {});
        var w = L(C, 2);
        Me(w, {
          level: 3,
          mt: "10px",
          children: (N, D) => {
            be();
            var b = Se("搜索引擎设置");
            O(N, b);
          },
          $$slots: { default: !0 }
        });
        var T = L(w, 4), _ = R(T);
        const x = /* @__PURE__ */ P(() => n().engine ? [n().engine] : []);
        Mt(_, {
          get items() {
            return u(a);
          },
          style: "width: 100%",
          placeholder: "请选择搜索引擎",
          onSelect: (N) => {
            const D = N.value;
            l(o, () => ({ engine: D }));
          },
          get value() {
            return u(x);
          }
        }), z(T);
        var E = L(T, 4), M = R(E);
        Qe(M, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (N) => {
            const D = N.target.value;
            l(o, () => ({ keyword: D }));
          }
        }), z(E);
        var H = L(E, 4), B = R(H);
        Qe(B, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (N) => {
            const D = N.target.value;
            l(o, () => ({ limit: D }));
          }
        }), z(H);
        var Z = L(H, 2), U = R(Z);
        Me(U, {
          level: 3,
          mt: "10px",
          children: (N, D) => {
            be();
            var b = Se("输出参数");
            O(N, b);
          },
          $$slots: { default: !0 }
        }), z(Z);
        var $ = L(Z, 2);
        In($, {}), O(d, f);
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
ne(Dd, { data: {} }, [], [], !0);
var aw = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), lw = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), cw = /* @__PURE__ */ X('<div class="heading svelte-1eqcy61"><!></div> <!> <div class="heading svelte-1eqcy61"><!> <!></div> <!>', 1);
const uw = {
  hash: "svelte-1eqcy61",
  code: ".heading.svelte-1eqcy61 {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function Ad(e, t) {
  le(t, !0), Ve(e, uw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Le(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = et(), { addParameter: i } = nn();
  return Ge(() => {
    (!n().loopVars || n().loopVars.length === 0) && i(o, "loopVars", { name: "loopVar", nameDisabled: !0, deleteDisabled: !0 });
  }), Rt(e, ze(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var c = aw();
        O(l, c);
      },
      handle: (l) => {
        An(l, {
          type: "source",
          get position() {
            return ye.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (l, c) => {
        var d = cw(), g = se(d), f = R(g);
        Me(f, {
          level: 3,
          children: (T, _) => {
            be();
            var x = Se("循环变量");
            O(T, x);
          },
          $$slots: { default: !0 }
        }), z(g);
        var h = L(g, 2);
        ht(h, { dataKeyName: "loopVars" });
        var v = L(h, 2), y = R(v);
        Me(y, {
          level: 3,
          children: (T, _) => {
            be();
            var x = Se("输出参数");
            O(T, x);
          },
          $$slots: { default: !0 }
        });
        var C = L(y, 2);
        Te(C, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (T, _) => {
            var x = lw();
            O(T, x);
          },
          $$slots: { default: !0 }
        }), z(v);
        var w = L(v, 2);
        ht(w, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), O(l, d);
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
ne(Ad, { data: {} }, [], [], !0);
const dw = {
  startNode: wd,
  codeNode: Sd,
  llmNode: Ed,
  templateNode: Nd,
  httpNode: Pd,
  knowledgeNode: Td,
  searchEngineNode: Dd,
  loopNode: Ad,
  endNode: Cd
};
var fw = /* @__PURE__ */ X("<!> ", 1);
function os(e, t) {
  le(t, !0);
  const n = m(t, "icon", 7), r = m(t, "title", 7), o = m(t, "type", 7), i = m(t, "description", 7), s = m(t, "extra", 7);
  return Te(e, {
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
      var d = fw(), g = se(d);
      Ns(g, n);
      var f = L(g);
      ke(() => Ie(f, ` ${r() ?? ""}`)), O(l, d);
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
ne(os, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var gw = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), hw = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), vw = /* @__PURE__ */ X('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Md(e, t) {
  le(t, !0);
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
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>',
      title: "结束节点",
      type: "endNode",
      sortNo: 900,
      description: "结束定义输出参数"
    }
  ], i = [
    { label: "基础节点", value: "base" },
    { label: "业务工具", value: "tools" }
  ], s = [], a = On(), l = a.customNodes;
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
  var c = vw(), d = R(c), g = R(d), f = R(g);
  nd(f, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (w) => {
      K(n, w.value.toString(), !0);
    }
  }), z(g);
  var h = L(g, 2), v = R(h);
  ct(v, 21, () => o, hr, (w, T) => {
    os(w, ze(() => u(T)));
  }), z(v);
  var y = L(v, 2);
  ct(y, 21, () => s, hr, (w, T) => {
    os(w, ze(() => u(T)));
  }), z(y), z(h), z(d);
  var C = L(d, 2);
  Te(C, {
    onclick: () => {
      K(r, u(r) ? "" : "show", !0);
    },
    children: (w, T) => {
      var _ = Ae(), x = se(_);
      {
        var E = (H) => {
          var B = gw();
          O(H, B);
        }, M = (H) => {
          var B = hw();
          O(H, B);
        };
        ae(x, (H) => {
          u(r) === "show" ? H(E) : H(M, !1);
        });
      }
      O(w, _);
    },
    $$slots: { default: !0 }
  }), z(c), ke(() => {
    mt(c, 1, `tf-toolbar ${u(r) ?? ""}`), ut(v, `display: ${u(n) === "base" ? "flex" : "none"}`), ut(y, `display: ${u(n) !== "base" ? "flex" : "none"}`);
  }), O(e, c), ce();
}
ne(Md, {}, [], [], !0);
const pw = () => ({ getNode: (t) => Xe.getNode(t) }), mw = () => ({ ensureParentInNodesBefore: (t, n) => {
  Xe.updateNodes((r) => {
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
} }), yw = () => ({ getEdgesByTarget: (t) => Xe.getEdges().filter((r) => r.target === t) });
var ww = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), _w = /* @__PURE__ */ X('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), xw = /* @__PURE__ */ X('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), bw = /* @__PURE__ */ X('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Cw = /* @__PURE__ */ X('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input/></div></div>', 1), kw = /* @__PURE__ */ X('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Ew = /* @__PURE__ */ X('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Sw = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Nw = /* @__PURE__ */ X('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Pw = /* @__PURE__ */ X("<!> <!> <div></div> <!>", 1);
const Tw = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Od(e, t) {
  le(t, !0), Ve(e, Tw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Le(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = et(), { addParameter: i } = nn(), s = dt(), { updateNodeData: a } = s, l = (w) => {
    a(o, w);
  }, c = (w, T) => {
    l({ [w]: T.target?.value });
  }, d = { ...r, id: o, data: n() }, g = document.createElement("div"), h = On().customNodes[t.type];
  h.render?.(g, d, s);
  const v = h.forms;
  let y;
  Ge(() => {
    n().expand && y && y.append(g);
  }), Ge(() => {
    n() && h.onUpdate?.(g, { ...d, data: n() });
  }), Ge(() => {
    !n().parameters && h.parameters && l({
      parameters: Jo(JSON.parse(JSON.stringify(h.parameters)))
    });
  }), Ge(() => {
    !n().outputDefs && h.outputDefs && l({
      outputDefs: Jo(JSON.parse(JSON.stringify(h.outputDefs)))
    });
  });
  const C = /* @__PURE__ */ P(() => ({ ...n(), description: h.description }));
  return Rt(e, ze(
    {
      get data() {
        return u(C);
      }
    },
    () => r,
    {
      icon: (T) => {
        var _ = Ae(), x = se(_);
        Ns(x, () => h.icon), O(T, _);
      },
      children: (T, _) => {
        var x = Pw(), E = se(x);
        {
          var M = (N) => {
            var D = _w(), b = se(D), S = R(b);
            Me(S, {
              level: 3,
              children: (A, F) => {
                be();
                var Y = Se("输入参数");
                O(A, Y);
              },
              $$slots: { default: !0 }
            });
            var k = L(S, 2);
            {
              var V = (A) => {
                Te(A, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    i(o);
                  },
                  children: (F, Y) => {
                    var W = ww();
                    O(F, W);
                  },
                  $$slots: { default: !0 }
                });
              };
              ae(k, (A) => {
                h.parametersAddEnable !== !1 && A(V);
              });
            }
            z(b);
            var I = L(b, 2);
            ht(I, {}), O(N, D);
          };
          ae(E, (N) => {
            h.parametersEnable !== !1 && N(M);
          });
        }
        var H = L(E, 2);
        {
          var B = (N) => {
            var D = Ae(), b = se(D);
            ct(b, 17, () => v, hr, (S, k) => {
              var V = Ae(), I = se(V);
              {
                var A = (Y) => {
                  var W = xw(), J = se(W), G = R(J, !0);
                  z(J);
                  var Q = L(J, 2), ue = R(Q);
                  const re = /* @__PURE__ */ P(() => n()[u(k).name] || u(k).defaultValue);
                  Qe(ue, ze(
                    {
                      get placeholder() {
                        return u(k).placeholder;
                      },
                      style: "width: 100%",
                      get value() {
                        return u(re);
                      }
                    },
                    () => u(k).attrs,
                    {
                      onchange: (j) => {
                        c(u(k).name, j);
                      }
                    }
                  )), z(Q), ke(() => Ie(G, u(k).label)), O(Y, W);
                }, F = (Y, W) => {
                  {
                    var J = (Q) => {
                      var ue = bw(), re = se(ue), j = R(re, !0);
                      z(re);
                      var xe = L(re, 2), ve = R(xe);
                      const te = /* @__PURE__ */ P(() => n()[u(k).name] || u(k).defaultValue);
                      je(ve, ze(
                        {
                          rows: 3,
                          get placeholder() {
                            return u(k).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return u(te);
                          }
                        },
                        () => u(k).attrs,
                        {
                          onchange: (oe) => {
                            c(u(k).name, oe);
                          }
                        }
                      )), z(xe), ke(() => Ie(j, u(k).label)), O(Q, ue);
                    }, G = (Q, ue) => {
                      {
                        var re = (xe) => {
                          var ve = Cw(), te = se(ve), oe = R(te, !0);
                          z(te);
                          var ie = L(te, 2), ee = R(ie), de = R(ee), ge = R(de);
                          z(de);
                          var pe = L(de, 2);
                          gn(pe);
                          var q = (qe) => l({ [u(k).name]: parseFloat(qe.target.value) });
                          Je(
                            pe,
                            () => ({
                              class: "nodrag",
                              type: "range",
                              ...u(k).attrs,
                              value: n()[u(k).name] ?? u(k).defaultValue,
                              oninput: q
                            }),
                            void 0,
                            "svelte-q0cqsa"
                          ), z(ee), z(ie), ke(() => {
                            Ie(oe, u(k).label), Ie(ge, `${u(k).description ?? ""}: ${n()[u(k).name] ?? u(k).defaultValue ?? ""}`);
                          }), O(xe, ve);
                        }, j = (xe, ve) => {
                          {
                            var te = (ie) => {
                              var ee = kw(), de = se(ee), ge = R(de, !0);
                              z(de);
                              var pe = L(de, 2), q = R(pe);
                              const qe = /* @__PURE__ */ P(() => u(k).options || []), Oe = /* @__PURE__ */ P(() => n()[u(k).name] ? [n()[u(k).name]] : [u(k).defaultValue]);
                              Mt(q, {
                                get items() {
                                  return u(qe);
                                },
                                style: "width: 100%",
                                get placeholder() {
                                  return u(k).placeholder;
                                },
                                onSelect: (fe) => {
                                  const Ee = fe.value;
                                  l({ [u(k).name]: Ee });
                                },
                                get value() {
                                  return u(Oe);
                                }
                              }), z(pe), ke(() => Ie(ge, u(k).label)), O(ie, ee);
                            }, oe = (ie, ee) => {
                              {
                                var de = (pe) => {
                                  var q = Ew(), qe = se(q), Oe = R(qe, !0);
                                  z(qe);
                                  var fe = L(qe, 2), Ee = R(fe);
                                  const _e = /* @__PURE__ */ P(() => u(k).chosen?.buttonText);
                                  td(Ee, {
                                    style: "width: 100%",
                                    get placeholder() {
                                      return u(k).placeholder;
                                    },
                                    get buttonText() {
                                      return u(_e);
                                    },
                                    onChosen: (Fe, yt, Ye) => {
                                      u(k).chosen?.onChosen?.(l, Fe, yt, Ye);
                                    },
                                    get value() {
                                      return n()[u(k).chosen?.valueDataKey || ""];
                                    },
                                    get label() {
                                      return n()[u(k).chosen?.labelDataKey || ""];
                                    }
                                  }), z(fe), ke(() => Ie(Oe, u(k).label)), O(pe, q);
                                }, ge = (pe, q) => {
                                  {
                                    var qe = (Oe) => {
                                      Me(Oe, ze({ level: 3, mt: "10px" }, () => u(k).attrs, {
                                        children: (fe, Ee) => {
                                          be();
                                          var _e = Se();
                                          ke(() => Ie(_e, u(k).label)), O(fe, _e);
                                        },
                                        $$slots: { default: !0 }
                                      }));
                                    };
                                    ae(
                                      pe,
                                      (Oe) => {
                                        u(k).type === "heading" && Oe(qe);
                                      },
                                      q
                                    );
                                  }
                                };
                                ae(
                                  ie,
                                  (pe) => {
                                    u(k).type === "chosen" ? pe(de) : pe(ge, !1);
                                  },
                                  ee
                                );
                              }
                            };
                            ae(
                              xe,
                              (ie) => {
                                u(k).type === "select" ? ie(te) : ie(oe, !1);
                              },
                              ve
                            );
                          }
                        };
                        ae(
                          Q,
                          (xe) => {
                            u(k).type === "slider" ? xe(re) : xe(j, !1);
                          },
                          ue
                        );
                      }
                    };
                    ae(
                      Y,
                      (Q) => {
                        u(k).type === "textarea" ? Q(J) : Q(G, !1);
                      },
                      W
                    );
                  }
                };
                ae(I, (Y) => {
                  u(k).type === "input" ? Y(A) : Y(F, !1);
                });
              }
              O(S, V);
            }), O(N, D);
          };
          ae(H, (N) => {
            v && N(B);
          });
        }
        var Z = L(H, 2);
        At(Z, (N) => y = N, () => y);
        var U = L(Z, 2);
        {
          var $ = (N) => {
            var D = Nw(), b = se(D), S = R(b);
            Me(S, {
              level: 3,
              mt: "10px",
              children: (A, F) => {
                be();
                var Y = Se("输出参数");
                O(A, Y);
              },
              $$slots: { default: !0 }
            });
            var k = L(S, 2);
            {
              var V = (A) => {
                Te(A, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    i(o, "outputDefs");
                  },
                  children: (F, Y) => {
                    var W = Sw();
                    O(F, W);
                  },
                  $$slots: { default: !0 }
                });
              };
              ae(k, (A) => {
                h.outputDefsAddEnable !== !1 && A(V);
              });
            }
            z(b);
            var I = L(b, 2);
            In(I, {}), O(N, D);
          };
          ae(U, (N) => {
            h.outputDefsEnable !== !1 && N($);
          });
        }
        ke(() => {
          ut(Z, h.rootStyle || ""), mt(Z, 1, xn(h.rootClass), "svelte-q0cqsa");
        }), O(T, x);
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
ne(Od, { data: {} }, [], [], !0);
const Dw = () => ({ updateEdgeData: (t, n, r) => {
  const o = Xe.getEdge(t);
  if (!o)
    return;
  const i = typeof n == "function" ? n(o) : n;
  o.data = r?.replace ? i : { ...o.data, ...i }, Xe.updateEdges((s) => s.map((a) => a.id === t ? o : a));
} }), Aw = () => ({ deleteEdge: (t) => {
  Xe.removeEdge(t);
} });
var Mw = /* @__PURE__ */ X('<div class="panel-content svelte-80qc4q"><div>边属性设置</div> <div class="setting-title svelte-80qc4q">边条件设置</div> <div class="setting-item svelte-80qc4q"><!></div> <div class="setting-item svelte-80qc4q" style="padding: 8px 0"><!> <!></div></div>'), Ow = /* @__PURE__ */ X("<!> <!> <!> <!>", 1), Hw = /* @__PURE__ */ X('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const Vw = {
  hash: "svelte-80qc4q",
  code: ".panel-content.svelte-80qc4q {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-80qc4q {margin:10px 0;font-size:12px;color:#999;}.setting-item.svelte-80qc4q {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function Hd(e, t) {
  le(t, !0), Ve(e, Vw);
  const n = m(t, "onInit", 7), r = dt();
  n()(r);
  let o = /* @__PURE__ */ Ne(!1), i = /* @__PURE__ */ Ne(null);
  const { updateEdgeData: s } = Dw(), a = (S) => {
    S.preventDefault(), S.dataTransfer && (S.dataTransfer.dropEffect = "move");
  }, l = (S) => {
    S.preventDefault();
    const k = r.screenToFlowPosition({ x: S.clientX - 250, y: S.clientY - 100 }), V = S.dataTransfer?.getData("application/tinyflow");
    if (!V)
      return;
    const I = JSON.parse(V), A = { id: `node_${Qn()}`, position: k, data: {}, ...I };
    Xe.addNode(A), Xe.selectNodeOnly(A.id);
  }, { getNode: c } = pw(), d = (S) => {
    const k = c(S.source), V = c(S.target);
    if (S.sourceHandle === "loop_handle" || k.parentId) {
      const I = r.getEdges();
      for (let A of I)
        if (A.target === S.target) {
          const F = c(A.source);
          if (S.sourceHandle === "loop_handle" && F.parentId !== k.id || k.parentId && F.parentId !== k.parentId)
            return !1;
        }
    }
    return !(!k.parentId && V.parentId && V.parentId !== k.id);
  }, { ensureParentInNodesBefore: g } = mw(), f = (S, k) => {
    if (!k.isValid)
      return;
    const V = k.toNode;
    if (V.parentId)
      return;
    const I = k.fromNode, A = k.fromHandle, F = { position: { ...V.position } };
    if (A.id === "loop_handle" ? F.parentId = I.id : I.parentId && (F.parentId = I.parentId), F.parentId) {
      const Y = c(F.parentId);
      F.position = {
        x: V.position.x - Y.position.x,
        y: V.position.y - Y.position.y
      }, g(F.parentId, V.id), r.updateNode(V.id, F);
    }
    setTimeout(() => {
      Xe.getEdges().forEach((Y) => {
        Y.target === V.id && Y.source == I.id && (K(o, !0), K(i, Y, !0));
      });
    });
  }, { getEdgesByTarget: h } = yw(), v = (S) => {
    S.edges.forEach((V) => {
      V.id === u(i)?.id && (K(i, null), K(o, !1));
      const I = c(V.target);
      if (I && I.parentId) {
        const A = h(V.target), F = c(I.parentId);
        if (A.length === 0)
          r.updateNode(I.id, {
            parentId: void 0,
            position: {
              x: I.position.x + F.position.x,
              y: I.position.y + F.position.y
            }
          });
        else {
          let Y = !1;
          for (let W = 0; W < A.length; W++) {
            const J = A[W], G = c(J.source);
            if (G.parentId || G.type === "loopNode") {
              Y = !0;
              break;
            }
          }
          Y || r.updateNode(I.id, {
            parentId: void 0,
            position: {
              x: I.position.x + F.position.x,
              y: I.position.y + F.position.y
            }
          });
        }
      }
    });
  }, { deleteEdge: y } = Aw(), C = (S, k) => {
  }, w = (S) => {
  }, T = {
    // ...nodeTypes
  }, _ = On().customNodes;
  if (_)
    for (let S of Object.keys(_))
      T[S] = Od;
  On().onDataChange;
  var x = Hw(), E = R(x);
  const M = /* @__PURE__ */ P(() => ({ ...dw, ...T }));
  var H = Xe.getNodes, B = Xe.setNodes, Z = Xe.getEdges, U = Xe.setEdges, $ = Xe.getViewport, N = Xe.setViewport;
  const D = /* @__PURE__ */ P(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: Yr.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  Ru(E, {
    get nodeTypes() {
      return u(M);
    },
    get nodes() {
      return H();
    },
    set nodes(S) {
      B(S);
    },
    get edges() {
      return Z();
    },
    set edges(S) {
      U(S);
    },
    get viewport() {
      return $();
    },
    set viewport(S) {
      N(S);
    },
    class: "tinyflow-logo",
    ondrop: l,
    ondragover: a,
    isValidConnection: d,
    onconnectend: f,
    onconnectstart: C,
    onconnect: w,
    connectionRadius: 50,
    onedgeclick: (S) => {
      K(o, !0), K(i, S.edge, !0);
    },
    onbeforeconnect: (S) => ({ ...S, id: Qn() }),
    ondelete: v,
    onclick: (S) => {
      const k = S.target;
      k.classList.contains("svelte-flow__edge-interaction") || k.classList.contains("panel-content") || k.closest(".panel-content") || (K(o, !1), K(i, null));
    },
    get defaultEdgeOptions() {
      return u(D);
    },
    children: (S, k) => {
      var V = Ow(), I = se(V);
      Gu(I, {});
      var A = L(I, 2);
      Wu(A, {});
      var F = L(A, 2);
      Ju(F, {});
      var Y = L(F, 2);
      {
        var W = (J) => {
          fo(J, {
            children: (G, Q) => {
              var ue = Mw(), re = L(R(ue), 4), j = R(re);
              const xe = /* @__PURE__ */ P(() => u(i)?.data?.condition);
              je(j, {
                rows: 3,
                placeholder: "请输入边条件",
                style: "width: 100%",
                get value() {
                  return u(xe);
                },
                onchange: (ie) => {
                  u(i) && s(u(i).id, { condition: ie.target?.value });
                }
              }), z(re);
              var ve = L(re, 2), te = R(ve);
              Te(te, {
                onclick: () => {
                  y(u(i)?.id), K(o, !1);
                },
                children: (ie, ee) => {
                  be();
                  var de = Se("删除");
                  O(ie, de);
                },
                $$slots: { default: !0 }
              });
              var oe = L(te, 2);
              Te(oe, {
                primary: !0,
                onclick: () => {
                  K(o, !1);
                },
                children: (ie, ee) => {
                  be();
                  var de = Se("保存");
                  O(ie, de);
                },
                $$slots: { default: !0 }
              }), z(ve), z(ue), O(G, ue);
            },
            $$slots: { default: !0 }
          });
        };
        ae(Y, (J) => {
          u(o) && J(W);
        });
      }
      O(S, V);
    },
    $$slots: { default: !0 }
  });
  var b = L(E, 2);
  return Md(b, {}), z(x), O(e, x), ce({
    get onInit() {
      return n();
    },
    set onInit(S) {
      n(S), p();
    }
  });
}
ne(Hd, { onInit: {} }, [], [], !0);
function Lw(e, t) {
  le(t, !0);
  const n = m(t, "options", 7), r = m(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  return Xe.init(o?.nodes || [], o?.edges || []), fr("tinyflow_options", n()), Bu(e, {
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
customElements.define("tinyflow-component", ne(Lw, { options: {}, onInit: {} }, [], [], !1));
export {
  zw as Tinyflow
};
//# sourceMappingURL=index.js.map
