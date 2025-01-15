var Nd = Object.defineProperty;
var gl = (e) => {
  throw TypeError(e);
};
var Od = (e, t, n) => t in e ? Nd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var at = (e, t, n) => Od(e, typeof t != "symbol" ? t + "" : t, n), Ai = (e, t, n) => t.has(e) || gl("Cannot " + n);
var Ze = (e, t, n) => (Ai(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Nn = (e, t, n) => t.has(e) ? gl("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Nr = (e, t, n, r) => (Ai(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), vl = (e, t, n) => (Ai(e, t, "access private method"), n);
const Td = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Td);
let vr = !1;
function Ad() {
  vr = !0;
}
Ad();
const ws = 1, _s = 2, pa = 4, zd = 8, Dd = 16, Ld = 1, Id = 2, wa = 4, Hd = 8, $d = 16, _a = 1, Rd = 2, ba = "[", bs = "[!", xs = "]", Fn = {}, ht = Symbol();
function Vd(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const Yd = [
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
function Bd(e) {
  return Yd.includes(e);
}
const Xd = {
  // no `class: 'className'` because we handle that separately
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject"
};
function Wd(e) {
  return e = e.toLowerCase(), Xd[e] ?? e;
}
const Kd = ["touchstart", "touchmove"];
function Fd(e) {
  return Kd.includes(e);
}
const xa = !1;
var Jr = Array.isArray, Cs = Array.from, zo = Object.keys, Do = Object.defineProperty, sn = Object.getOwnPropertyDescriptor, Ca = Object.getOwnPropertyDescriptors, Zd = Object.prototype, qd = Array.prototype, ks = Object.getPrototypeOf;
function Or(e) {
  return typeof e == "function";
}
const Nt = () => {
};
function Gd(e) {
  return e();
}
function Hr(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const zt = 2, ka = 4, Qr = 8, Es = 16, Ht = 32, yr = 64, Fi = 128, Vn = 256, Lo = 512, ut = 1024, wn = 2048, mr = 4096, Yt = 8192, pr = 16384, Ud = 32768, eo = 65536, jd = 1 << 17, Jd = 1 << 19, Ea = 1 << 20, vn = Symbol("$state"), Ss = Symbol("legacy props"), Qd = Symbol("");
function Sa(e) {
  return e === this.v;
}
function Ps(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ms(e) {
  return !Ps(e, this.v);
}
function ef(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function tf() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function nf(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function rf() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function of() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function sf(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function lf() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function af() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function cf() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function uf() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function vt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Sa,
    version: 0
  };
  return n;
}
function yl(e) {
  return /* @__PURE__ */ Pa(vt(e));
}
// @__NO_SIDE_EFFECTS__
function to(e, t = !1) {
  var r;
  const n = vt(e);
  return t || (n.equals = Ms), vr && Te !== null && Te.l !== null && ((r = Te.l).s ?? (r.s = [])).push(n), n;
}
function J(e, t = !1) {
  return /* @__PURE__ */ Pa(/* @__PURE__ */ to(e, t));
}
// @__NO_SIDE_EFFECTS__
function Pa(e) {
  return Re !== null && Re.f & zt && (Bt === null ? bf([e]) : Bt.push(e)), e;
}
function X(e, t) {
  return Re !== null && zs() && Re.f & (zt | Es) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (Bt === null || !Bt.includes(e)) && uf(), Zi(e, t);
}
function Zi(e, t) {
  return e.equals(t) || (e.v = t, e.version = Fa(), Ma(e, wn), zs() && Ee !== null && Ee.f & ut && !(Ee.f & Ht) && (rt !== null && rt.includes(e) ? ($t(Ee, wn), fi(Ee)) : yn === null ? xf([e]) : yn.push(e))), t;
}
function Ma(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = zs(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], l = s.f;
      l & wn || !r && s === Ee || ($t(s, t), l & (ut | Vn) && (l & zt ? Ma(
        /** @type {Derived} */
        s,
        mr
      ) : fi(
        /** @type {Effect} */
        s
      )));
    }
}
function ci(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let Ce = !1;
function nn(e) {
  Ce = e;
}
let Oe;
function bt(e) {
  if (e === null)
    throw ci(), Fn;
  return Oe = e;
}
function _n() {
  return bt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Gt(Oe)
  );
}
function ce(e) {
  if (Ce) {
    if (/* @__PURE__ */ Gt(Oe) !== null)
      throw ci(), Fn;
    Oe = e;
  }
}
function no(e = 1) {
  if (Ce) {
    for (var t = e, n = Oe; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Gt(n);
    Oe = n;
  }
}
function qi() {
  for (var e = 0, t = Oe; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === xs) {
        if (e === 0) return t;
        e -= 1;
      } else (n === ba || n === bs) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Gt(t)
    );
    t.remove(), t = r;
  }
}
function hn(e, t = null, n) {
  if (typeof e != "object" || e === null || vn in e)
    return e;
  const r = ks(e);
  if (r !== Zd && r !== qd)
    return e;
  var o = /* @__PURE__ */ new Map(), i = Jr(e), s = vt(0);
  i && o.set("length", vt(
    /** @type {any[]} */
    e.length
  ));
  var l;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(u, a, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && lf();
        var d = o.get(a);
        return d === void 0 ? (d = vt(c.value), o.set(a, d)) : X(d, hn(c.value, l)), !0;
      },
      deleteProperty(u, a) {
        var c = o.get(a);
        if (c === void 0)
          a in u && o.set(a, vt(ht));
        else {
          if (i && typeof a == "string") {
            var d = (
              /** @type {Source<number>} */
              o.get("length")
            ), f = Number(a);
            Number.isInteger(f) && f < d.v && X(d, f);
          }
          X(c, ht), ml(s);
        }
        return !0;
      },
      get(u, a, c) {
        var y;
        if (a === vn)
          return e;
        var d = o.get(a), f = a in u;
        if (d === void 0 && (!f || (y = sn(u, a)) != null && y.writable) && (d = vt(hn(f ? u[a] : ht, l)), o.set(a, d)), d !== void 0) {
          var h = g(d);
          return h === ht ? void 0 : h;
        }
        return Reflect.get(u, a, c);
      },
      getOwnPropertyDescriptor(u, a) {
        var c = Reflect.getOwnPropertyDescriptor(u, a);
        if (c && "value" in c) {
          var d = o.get(a);
          d && (c.value = g(d));
        } else if (c === void 0) {
          var f = o.get(a), h = f == null ? void 0 : f.v;
          if (f !== void 0 && h !== ht)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return c;
      },
      has(u, a) {
        var h;
        if (a === vn)
          return !0;
        var c = o.get(a), d = c !== void 0 && c.v !== ht || Reflect.has(u, a);
        if (c !== void 0 || Ee !== null && (!d || (h = sn(u, a)) != null && h.writable)) {
          c === void 0 && (c = vt(d ? hn(u[a], l) : ht), o.set(a, c));
          var f = g(c);
          if (f === ht)
            return !1;
        }
        return d;
      },
      set(u, a, c, d) {
        var E;
        var f = o.get(a), h = a in u;
        if (i && a === "length")
          for (var y = c; y < /** @type {Source<number>} */
          f.v; y += 1) {
            var _ = o.get(y + "");
            _ !== void 0 ? X(_, ht) : y in u && (_ = vt(ht), o.set(y + "", _));
          }
        f === void 0 ? (!h || (E = sn(u, a)) != null && E.writable) && (f = vt(void 0), X(f, hn(c, l)), o.set(a, f)) : (h = f.v !== ht, X(f, hn(c, l)));
        var C = Reflect.getOwnPropertyDescriptor(u, a);
        if (C != null && C.set && C.set.call(d, c), !h) {
          if (i && typeof a == "string") {
            var w = (
              /** @type {Source<number>} */
              o.get("length")
            ), v = Number(a);
            Number.isInteger(v) && v >= w.v && X(w, v + 1);
          }
          ml(s);
        }
        return !0;
      },
      ownKeys(u) {
        g(s);
        var a = Reflect.ownKeys(u).filter((f) => {
          var h = o.get(f);
          return h === void 0 || h.v !== ht;
        });
        for (var [c, d] of o)
          d.v !== ht && !(c in u) && a.push(c);
        return a;
      },
      setPrototypeOf() {
        af();
      }
    }
  );
}
function ml(e, t = 1) {
  X(e, e.v + t);
}
var gt, Na, Oa;
function Gi() {
  if (gt === void 0) {
    gt = window;
    var e = Element.prototype, t = Node.prototype;
    Na = sn(t, "firstChild").get, Oa = sn(t, "nextSibling").get, e.__click = void 0, e.__className = "", e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function bn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function yt(e) {
  return Na.call(e);
}
// @__NO_SIDE_EFFECTS__
function Gt(e) {
  return Oa.call(e);
}
function ge(e, t) {
  if (!Ce)
    return /* @__PURE__ */ yt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ yt(Oe)
  );
  if (n === null)
    n = Oe.appendChild(bn());
  else if (t && n.nodeType !== 3) {
    var r = bn();
    return n == null || n.before(r), bt(r), r;
  }
  return bt(n), n;
}
function He(e, t) {
  if (!Ce) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ yt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Gt(n) : n;
  }
  return Oe;
}
function ye(e, t = 1, n = !1) {
  let r = Ce ? Oe : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Gt(r);
  if (!Ce)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var s = bn();
    return r === null ? o == null || o.after(s) : r.before(s), bt(s), s;
  }
  return bt(r), /** @type {TemplateNode} */
  r;
}
function Ns(e) {
  e.textContent = "";
}
// @__NO_SIDE_EFFECTS__
function or(e) {
  var t = zt | wn;
  Ee === null ? t |= Vn : Ee.f |= Ea;
  var n = Re !== null && Re.f & zt ? (
    /** @type {Derived} */
    Re
  ) : null;
  const r = {
    children: null,
    ctx: Te,
    deps: null,
    equals: Sa,
    f: t,
    fn: e,
    reactions: null,
    v: (
      /** @type {V} */
      null
    ),
    version: 0,
    parent: n ?? Ee
  };
  return n !== null && (n.children ?? (n.children = [])).push(r), r;
}
// @__NO_SIDE_EFFECTS__
function ae(e) {
  const t = /* @__PURE__ */ or(e);
  return t.equals = Ms, t;
}
function Ta(e) {
  var t = e.children;
  if (t !== null) {
    e.children = null;
    for (var n = 0; n < t.length; n += 1) {
      var r = t[n];
      r.f & zt ? Os(
        /** @type {Derived} */
        r
      ) : Dt(
        /** @type {Effect} */
        r
      );
    }
  }
}
function df(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & zt))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Aa(e) {
  var t, n = Ee;
  Kt(df(e));
  try {
    Ta(e), t = Za(e);
  } finally {
    Kt(n);
  }
  return t;
}
function za(e) {
  var t = Aa(e), n = (Tn || e.f & Vn) && e.deps !== null ? mr : ut;
  $t(e, n), e.equals(t) || (e.v = t, e.version = Fa());
}
function Os(e) {
  Ta(e), Yr(e, 0), $t(e, pr), e.v = e.children = e.deps = e.ctx = e.reactions = null;
}
function Da(e) {
  Ee === null && Re === null && nf(), Re !== null && Re.f & Vn && tf(), As && ef();
}
function ff(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Yn(e, t, n, r = !0) {
  var o = (e & yr) !== 0, i = Ee, s = {
    ctx: Te,
    deps: null,
    deriveds: null,
    nodes_start: null,
    nodes_end: null,
    f: e | wn,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: o ? null : i,
    prev: null,
    teardown: null,
    transitions: null,
    version: 0
  };
  if (n) {
    var l = Zn;
    try {
      pl(!0), oo(s), s.f |= Ud;
    } catch (c) {
      throw Dt(s), c;
    } finally {
      pl(l);
    }
  } else t !== null && fi(s);
  var u = n && s.deps === null && s.first === null && s.nodes_start === null && s.teardown === null && (s.f & Ea) === 0;
  if (!u && !o && r && (i !== null && ff(s, i), Re !== null && Re.f & zt)) {
    var a = (
      /** @type {Derived} */
      Re
    );
    (a.children ?? (a.children = [])).push(s);
  }
  return s;
}
function La(e) {
  const t = Yn(Qr, null, !1);
  return $t(t, ut), t.teardown = e, t;
}
function Ui(e) {
  Da();
  var t = Ee !== null && (Ee.f & Ht) !== 0 && Te !== null && !Te.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      Te
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: Ee,
      reaction: Re
    });
  } else {
    var r = _t(e);
    return r;
  }
}
function hf(e) {
  return Da(), wr(e);
}
function gf(e) {
  const t = Yn(yr, e, !0);
  return () => {
    Dt(t);
  };
}
function vf(e) {
  const t = Yn(yr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? $r(t, () => {
      Dt(t), r(void 0);
    }) : (Dt(t), r(void 0));
  });
}
function _t(e) {
  return Yn(ka, e, !1);
}
function oe(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    Te
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = wr(() => {
    e(), !r.ran && (r.ran = !0, X(n.l.r2, !0), Ft(t));
  });
}
function it() {
  var e = (
    /** @type {ComponentContextLegacy} */
    Te
  );
  wr(() => {
    if (g(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        n.f & ut && $t(n, mr), br(n) && oo(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function wr(e) {
  return Yn(Qr, e, !0);
}
function pe(e) {
  return _r(e);
}
function _r(e, t = 0) {
  return Yn(Qr | Es | t, e, !0);
}
function xn(e, t = !0) {
  return Yn(Qr | Ht, e, !0, t);
}
function Ia(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = As, r = Re;
    wl(!0), Cn(null);
    try {
      t.call(null);
    } finally {
      wl(n), Cn(r);
    }
  }
}
function Ha(e) {
  var t = e.deriveds;
  if (t !== null) {
    e.deriveds = null;
    for (var n = 0; n < t.length; n += 1)
      Os(t[n]);
  }
}
function $a(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    Dt(n, t), n = r;
  }
}
function yf(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & Ht || Dt(t), t = n;
  }
}
function Dt(e, t = !0) {
  var n = !1;
  if ((t || e.f & Jd) && e.nodes_start !== null) {
    for (var r = e.nodes_start, o = e.nodes_end; r !== null; ) {
      var i = r === o ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Gt(r)
      );
      r.remove(), r = i;
    }
    n = !0;
  }
  $a(e, t && !n), Ha(e), Yr(e, 0), $t(e, pr);
  var s = e.transitions;
  if (s !== null)
    for (const u of s)
      u.stop();
  Ia(e);
  var l = e.parent;
  l !== null && l.first !== null && Ra(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Ra(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function $r(e, t) {
  var n = [];
  Ts(e, n, !0), Va(n, () => {
    Dt(e), t && t();
  });
}
function Va(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function Ts(e, t, n) {
  if (!(e.f & Yt)) {
    if (e.f ^= Yt, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & eo) !== 0 || (r.f & Ht) !== 0;
      Ts(r, t, i ? n : !1), r = o;
    }
  }
}
function Io(e) {
  Ya(e, !0);
}
function Ya(e, t) {
  if (e.f & Yt) {
    br(e) && oo(e), e.f ^= Yt;
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & eo) !== 0 || (n.f & Ht) !== 0;
      Ya(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
const mf = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Ho = !1, $o = !1, ji = [], Ji = [];
function Ba() {
  Ho = !1;
  const e = ji.slice();
  ji = [], Hr(e);
}
function Xa() {
  $o = !1;
  const e = Ji.slice();
  Ji = [], Hr(e);
}
function ro(e) {
  Ho || (Ho = !0, queueMicrotask(Ba)), ji.push(e);
}
function pf(e) {
  $o || ($o = !0, mf(Xa)), Ji.push(e);
}
function wf() {
  Ho && Ba(), $o && Xa();
}
function ui(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
const Wa = 0, _f = 1;
let Eo = !1, So = Wa, Rr = !1, Vr = null, Zn = !1, As = !1;
function pl(e) {
  Zn = e;
}
function wl(e) {
  As = e;
}
let On = [], qn = 0;
let Re = null;
function Cn(e) {
  Re = e;
}
let Ee = null;
function Kt(e) {
  Ee = e;
}
let Bt = null;
function bf(e) {
  Bt = e;
}
let rt = null, wt = 0, yn = null;
function xf(e) {
  yn = e;
}
let Ka = 1, Tn = !1, Te = null;
function Fa() {
  return ++Ka;
}
function zs() {
  return !vr || Te !== null && Te.l === null;
}
function br(e) {
  var s, l;
  var t = e.f;
  if (t & wn)
    return !0;
  if (t & mr) {
    var n = e.deps, r = (t & Vn) !== 0;
    if (n !== null) {
      var o;
      if (t & Lo) {
        for (o = 0; o < n.length; o++)
          ((s = n[o]).reactions ?? (s.reactions = [])).push(e);
        e.f ^= Lo;
      }
      for (o = 0; o < n.length; o++) {
        var i = n[o];
        if (br(
          /** @type {Derived} */
          i
        ) && za(
          /** @type {Derived} */
          i
        ), r && Ee !== null && !Tn && !((l = i == null ? void 0 : i.reactions) != null && l.includes(e)) && (i.reactions ?? (i.reactions = [])).push(e), i.version > e.version)
          return !0;
      }
    }
    (!r || Ee !== null && !Tn) && $t(e, ut);
  }
  return !1;
}
function Cf(e, t) {
  for (var n = t; n !== null; ) {
    if (n.f & Fi)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= Fi;
      }
    n = n.parent;
  }
  throw Eo = !1, e;
}
function kf(e) {
  return (e.f & pr) === 0 && (e.parent === null || (e.parent.f & Fi) === 0);
}
function di(e, t, n, r) {
  if (Eo) {
    if (n === null && (Eo = !1), kf(t))
      throw e;
    return;
  }
  n !== null && (Eo = !0);
  {
    Cf(e, t);
    return;
  }
}
function Za(e) {
  var f;
  var t = rt, n = wt, r = yn, o = Re, i = Tn, s = Bt, l = Te, u = e.f;
  rt = /** @type {null | Value[]} */
  null, wt = 0, yn = null, Re = u & (Ht | yr) ? null : e, Tn = !Zn && (u & Vn) !== 0, Bt = null, Te = e.ctx;
  try {
    var a = (
      /** @type {Function} */
      (0, e.fn)()
    ), c = e.deps;
    if (rt !== null) {
      var d;
      if (Yr(e, wt), c !== null && wt > 0)
        for (c.length = wt + rt.length, d = 0; d < rt.length; d++)
          c[wt + d] = rt[d];
      else
        e.deps = c = rt;
      if (!Tn)
        for (d = wt; d < c.length; d++)
          ((f = c[d]).reactions ?? (f.reactions = [])).push(e);
    } else c !== null && wt < c.length && (Yr(e, wt), c.length = wt);
    return a;
  } finally {
    rt = t, wt = n, yn = r, Re = o, Tn = i, Bt = s, Te = l;
  }
}
function Ef(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = n.indexOf(e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && t.f & zt && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (rt === null || !rt.includes(t)) && ($t(t, mr), t.f & (Vn | Lo) || (t.f ^= Lo), Yr(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Yr(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Ef(e, n[r]);
}
function oo(e) {
  var t = e.f;
  if (!(t & pr)) {
    $t(e, ut);
    var n = Ee, r = Te;
    Ee = e;
    try {
      t & Es ? yf(e) : $a(e), Ha(e), Ia(e);
      var o = Za(e);
      e.teardown = typeof o == "function" ? o : null, e.version = Ka;
    } catch (i) {
      di(i, e, n, r || e.ctx);
    } finally {
      Ee = n;
    }
  }
}
function qa() {
  if (qn > 1e3) {
    qn = 0;
    try {
      rf();
    } catch (e) {
      if (Vr !== null)
        di(e, Vr, null);
      else
        throw e;
    }
  }
  qn++;
}
function Ga(e) {
  var t = e.length;
  if (t !== 0) {
    qa();
    var n = Zn;
    Zn = !0;
    try {
      for (var r = 0; r < t; r++) {
        var o = e[r];
        o.f & ut || (o.f ^= ut);
        var i = [];
        Ua(o, i), Sf(i);
      }
    } finally {
      Zn = n;
    }
  }
}
function Sf(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if (!(r.f & (pr | Yt)))
        try {
          br(r) && (oo(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? Ra(r) : r.fn = null));
        } catch (o) {
          di(o, r, null, r.ctx);
        }
    }
}
function Pf() {
  if (Rr = !1, qn > 1001)
    return;
  const e = On;
  On = [], Ga(e), Rr || (qn = 0, Vr = null);
}
function fi(e) {
  So === Wa && (Rr || (Rr = !0, queueMicrotask(Pf))), Vr = e;
  for (var t = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (yr | Ht)) {
      if (!(n & ut)) return;
      t.f ^= ut;
    }
  }
  On.push(t);
}
function Ua(e, t) {
  var n = e.first, r = [];
  e: for (; n !== null; ) {
    var o = n.f, i = (o & Ht) !== 0, s = i && (o & ut) !== 0, l = n.next;
    if (!s && !(o & Yt))
      if (o & Qr) {
        if (i)
          n.f ^= ut;
        else
          try {
            br(n) && oo(n);
          } catch (d) {
            di(d, n, null, n.ctx);
          }
        var u = n.first;
        if (u !== null) {
          n = u;
          continue;
        }
      } else o & ka && r.push(n);
    if (l === null) {
      let d = n.parent;
      for (; d !== null; ) {
        if (e === d)
          break e;
        var a = d.next;
        if (a !== null) {
          n = a;
          continue e;
        }
        d = d.parent;
      }
    }
    n = l;
  }
  for (var c = 0; c < r.length; c++)
    u = r[c], t.push(u), Ua(u, t);
}
function m(e) {
  var t = So, n = On;
  try {
    qa();
    const o = [];
    So = _f, On = o, Rr = !1, Ga(n);
    var r = e == null ? void 0 : e();
    return wf(), (On.length > 0 || o.length > 0) && m(), qn = 0, Vr = null, r;
  } finally {
    So = t, On = n;
  }
}
function g(e) {
  var c;
  var t = e.f, n = (t & zt) !== 0;
  if (n && t & pr) {
    var r = Aa(
      /** @type {Derived} */
      e
    );
    return Os(
      /** @type {Derived} */
      e
    ), r;
  }
  if (Re !== null) {
    Bt !== null && Bt.includes(e) && cf();
    var o = Re.deps;
    rt === null && o !== null && o[wt] === e ? wt++ : rt === null ? rt = [e] : rt.push(e), yn !== null && Ee !== null && Ee.f & ut && !(Ee.f & Ht) && yn.includes(e) && ($t(Ee, wn), fi(Ee));
  } else if (n && /** @type {Derived} */
  e.deps === null)
    for (var i = (
      /** @type {Derived} */
      e
    ), s = i.parent, l = i; s !== null; )
      if (s.f & zt) {
        var u = (
          /** @type {Derived} */
          s
        );
        l = u, s = u.parent;
      } else {
        var a = (
          /** @type {Effect} */
          s
        );
        (c = a.deriveds) != null && c.includes(l) || (a.deriveds ?? (a.deriveds = [])).push(l);
        break;
      }
  return n && (i = /** @type {Derived} */
  e, br(i) && za(i)), e.v;
}
function Ft(e) {
  const t = Re;
  try {
    return Re = null, e();
  } finally {
    Re = t;
  }
}
const Mf = ~(wn | mr | ut);
function $t(e, t) {
  e.f = e.f & Mf | t;
}
function Ro(e) {
  return (
    /** @type {T} */
    Ds().get(e)
  );
}
function ir(e, t) {
  return Ds().set(e, t), t;
}
function Nf(e) {
  return Ds().has(e);
}
function Ds(e) {
  return Te === null && ui(), Te.c ?? (Te.c = new Map(Of(Te) || void 0));
}
function Of(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function _l(e, t = 1) {
  var n = g(e), r = t === 1 ? n++ : n--;
  return X(e, n), r;
}
function ue(e, t = !1, n) {
  Te = {
    p: Te,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  }, vr && !t && (Te.l = {
    s: null,
    u: null,
    r1: [],
    r2: vt(!1)
  });
}
function de(e) {
  const t = Te;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var n = Ee, r = Re;
      t.e = null;
      try {
        for (var o = 0; o < s.length; o++) {
          var i = s[o];
          Kt(i.effect), Cn(i.reaction), _t(i.fn);
        }
      } finally {
        Kt(n), Cn(r);
      }
    }
    Te = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function B(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (vn in e)
      Qi(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && vn in n && Qi(n);
      }
  }
}
function Qi(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        Qi(e[r], t);
      } catch {
      }
    const n = ks(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Ca(n);
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
function Tf(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, ro(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function Af(e) {
  Ce && /* @__PURE__ */ yt(e) !== null && Ns(e);
}
let bl = !1;
function zf() {
  bl || (bl = !0, document.addEventListener(
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
function Df(e) {
  var t = Re, n = Ee;
  Cn(null), Kt(null);
  try {
    return e();
  } finally {
    Cn(t), Kt(n);
  }
}
const ja = /* @__PURE__ */ new Set(), es = /* @__PURE__ */ new Set();
function Ja(e, t, n, r) {
  function o(i) {
    if (r.capture || zr.call(t, i), !i.cancelBubble)
      return Df(() => n.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? ro(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function Ye(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = Ja(e, t, n, i);
  (t === document.body || t === window || t === document) && La(() => {
    t.removeEventListener(e, s, i);
  });
}
function hi(e) {
  for (var t = 0; t < e.length; t++)
    ja.add(e[t]);
  for (var n of es)
    n(e);
}
function zr(e) {
  var v;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, o = ((v = e.composedPath) == null ? void 0 : v.call(e)) || [], i = (
    /** @type {null | Element} */
    o[0] || e.target
  ), s = 0, l = e.__root;
  if (l) {
    var u = o.indexOf(l);
    if (u !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var a = o.indexOf(t);
    if (a === -1)
      return;
    u <= a && (s = u);
  }
  if (i = /** @type {Element} */
  o[s] || e.target, i !== t) {
    Do(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var c = Re, d = Ee;
    Cn(null), Kt(null);
    try {
      for (var f, h = []; i !== null; ) {
        var y = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var _ = i["__" + r];
          if (_ !== void 0 && !/** @type {any} */
          i.disabled)
            if (Jr(_)) {
              var [C, ...w] = _;
              C.apply(i, [e, ...w]);
            } else
              _.call(i, e);
        } catch (E) {
          f ? h.push(E) : f = E;
        }
        if (e.cancelBubble || y === t || y === null)
          break;
        i = y;
      }
      if (f) {
        for (let E of h)
          queueMicrotask(() => {
            throw E;
          });
        throw f;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Cn(c), Kt(d);
    }
  }
}
function Ls(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function xt(e, t) {
  var n = (
    /** @type {Effect} */
    Ee
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ve(e, t) {
  var n = (t & _a) !== 0, r = (t & Rd) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (Ce)
      return xt(Oe, null), Oe;
    o === void 0 && (o = Ls(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ yt(o)));
    var s = (
      /** @type {TemplateNode} */
      r ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ yt(s)
      ), u = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      xt(l, u);
    } else
      xt(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Ge(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & _a) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (Ce)
      return xt(Oe, null), Oe;
    if (!s) {
      var l = (
        /** @type {DocumentFragment} */
        Ls(i)
      ), u = (
        /** @type {Element} */
        /* @__PURE__ */ yt(l)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ yt(u); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ yt(u)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ yt(u);
    }
    var a = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ yt(a)
      ), d = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      xt(c, d);
    } else
      xt(a, a);
    return a;
  };
}
function io(e = "") {
  if (!Ce) {
    var t = bn(e + "");
    return xt(t, t), t;
  }
  var n = Oe;
  return n.nodeType !== 3 && (n.before(n = bn()), bt(n)), xt(n, n), n;
}
function ot() {
  if (Ce)
    return xt(Oe, null), Oe;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = bn();
  return e.append(t, n), xt(t, n), e;
}
function K(e, t) {
  if (Ce) {
    Ee.nodes_end = Oe, _n();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function En(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n == null ? "" : n + "");
}
function Qa(e, t) {
  return ec(e, t);
}
function Lf(e, t) {
  Gi(), t.intro = t.intro ?? !1;
  const n = t.target, r = Ce, o = Oe;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ yt(n)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== ba); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Gt(i);
    if (!i)
      throw Fn;
    nn(!0), bt(
      /** @type {Comment} */
      i
    ), _n();
    const s = ec(e, { ...t, anchor: i });
    if (Oe === null || Oe.nodeType !== 8 || /** @type {Comment} */
    Oe.data !== xs)
      throw ci(), Fn;
    return nn(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === Fn)
      return t.recover === !1 && of(), Gi(), Ns(n), nn(!1), Qa(e, t);
    throw s;
  } finally {
    nn(r), bt(o);
  }
}
const Xn = /* @__PURE__ */ new Map();
function ec(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  Gi();
  var l = /* @__PURE__ */ new Set(), u = (d) => {
    for (var f = 0; f < d.length; f++) {
      var h = d[f];
      if (!l.has(h)) {
        l.add(h);
        var y = Fd(h);
        t.addEventListener(h, zr, { passive: y });
        var _ = Xn.get(h);
        _ === void 0 ? (document.addEventListener(h, zr, { passive: y }), Xn.set(h, 1)) : Xn.set(h, _ + 1);
      }
    }
  };
  u(Cs(ja)), es.add(u);
  var a = void 0, c = vf(() => {
    var d = n ?? t.appendChild(bn());
    return xn(() => {
      if (i) {
        ue({});
        var f = (
          /** @type {ComponentContext} */
          Te
        );
        f.c = i;
      }
      o && (r.$$events = o), Ce && xt(
        /** @type {TemplateNode} */
        d,
        null
      ), a = e(d, r) || {}, Ce && (Ee.nodes_end = Oe), i && de();
    }), () => {
      var y;
      for (var f of l) {
        t.removeEventListener(f, zr);
        var h = (
          /** @type {number} */
          Xn.get(f)
        );
        --h === 0 ? (document.removeEventListener(f, zr), Xn.delete(f)) : Xn.set(f, h);
      }
      es.delete(u), d !== n && ((y = d.parentNode) == null || y.removeChild(d));
    };
  });
  return ts.set(a, c), a;
}
let ts = /* @__PURE__ */ new WeakMap();
function If(e, t) {
  const n = ts.get(e);
  return n ? (ts.delete(e), n(t)) : Promise.resolve();
}
function Be(e, t, n = !1) {
  Ce && _n();
  var r = e, o = null, i = null, s = ht, l = n ? eo : 0, u = !1;
  const a = (d, f = !0) => {
    u = !0, c(f, d);
  }, c = (d, f) => {
    if (s === (s = d)) return;
    let h = !1;
    if (Ce) {
      const y = (
        /** @type {Comment} */
        r.data === bs
      );
      !!s === y && (r = qi(), bt(r), nn(!1), h = !0);
    }
    s ? (o ? Io(o) : f && (o = xn(() => f(r))), i && $r(i, () => {
      i = null;
    })) : (i ? Io(i) : f && (i = xn(() => f(r))), o && $r(o, () => {
      o = null;
    })), h && nn(!0);
  };
  _r(() => {
    u = !1, t(a), u || c(null, null);
  }, l), Ce && (r = Oe);
}
function gi(e, t) {
  return t;
}
function Hf(e, t, n, r) {
  for (var o = [], i = t.length, s = 0; s < i; s++)
    Ts(t[s].e, o, !0);
  var l = i > 0 && o.length === 0 && n !== null;
  if (l) {
    var u = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Ns(u), u.append(
      /** @type {Element} */
      n
    ), r.clear(), dn(e, t[0].prev, t[i - 1].next);
  }
  Va(o, () => {
    for (var a = 0; a < i; a++) {
      var c = t[a];
      l || (r.delete(c.k), dn(e, c.prev, c.next)), Dt(c.e, !l);
    }
  });
}
function Sn(e, t, n, r, o, i = null) {
  var s = e, l = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, u = (t & pa) !== 0;
  if (u) {
    var a = (
      /** @type {Element} */
      e
    );
    s = Ce ? bt(
      /** @type {Comment | Text} */
      /* @__PURE__ */ yt(a)
    ) : a.appendChild(bn());
  }
  Ce && _n();
  var c = null, d = !1;
  _r(() => {
    var f = n(), h = Jr(f) ? f : f == null ? [] : Cs(f), y = h.length;
    if (d && y === 0)
      return;
    d = y === 0;
    let _ = !1;
    if (Ce) {
      var C = (
        /** @type {Comment} */
        s.data === bs
      );
      C !== (y === 0) && (s = qi(), bt(s), nn(!1), _ = !0);
    }
    if (Ce) {
      for (var w = null, v, E = 0; E < y; E++) {
        if (Oe.nodeType === 8 && /** @type {Comment} */
        Oe.data === xs) {
          s = /** @type {Comment} */
          Oe, _ = !0, nn(!1);
          break;
        }
        var S = h[E], x = r(S, E);
        v = tc(
          Oe,
          l,
          w,
          null,
          S,
          x,
          E,
          o,
          t
        ), l.items.set(x, v), w = v;
      }
      y > 0 && bt(qi());
    }
    if (!Ce) {
      var P = (
        /** @type {Effect} */
        Re
      );
      $f(
        h,
        l,
        s,
        o,
        t,
        (P.f & Yt) !== 0,
        r
      );
    }
    i !== null && (y === 0 ? c ? Io(c) : c = xn(() => i(s)) : c !== null && $r(c, () => {
      c = null;
    })), _ && nn(!0), n();
  }), Ce && (s = Oe);
}
function $f(e, t, n, r, o, i, s, l) {
  var I, b, M, A;
  var u = (o & zd) !== 0, a = (o & (ws | _s)) !== 0, c = e.length, d = t.items, f = t.first, h = f, y, _ = null, C, w = [], v = [], E, S, x, P;
  if (u)
    for (P = 0; P < c; P += 1)
      E = e[P], S = s(E, P), x = d.get(S), x !== void 0 && ((I = x.a) == null || I.measure(), (C ?? (C = /* @__PURE__ */ new Set())).add(x));
  for (P = 0; P < c; P += 1) {
    if (E = e[P], S = s(E, P), x = d.get(S), x === void 0) {
      var N = h ? (
        /** @type {TemplateNode} */
        h.e.nodes_start
      ) : n;
      _ = tc(
        N,
        t,
        _,
        _ === null ? t.first : _.next,
        E,
        S,
        P,
        r,
        o
      ), d.set(S, _), w = [], v = [], h = _.next;
      continue;
    }
    if (a && Rf(x, E, P, o), x.e.f & Yt && (Io(x.e), u && ((b = x.a) == null || b.unfix(), (C ?? (C = /* @__PURE__ */ new Set())).delete(x))), x !== h) {
      if (y !== void 0 && y.has(x)) {
        if (w.length < v.length) {
          var O = v[0], T;
          _ = O.prev;
          var L = w[0], V = w[w.length - 1];
          for (T = 0; T < w.length; T += 1)
            xl(w[T], O, n);
          for (T = 0; T < v.length; T += 1)
            y.delete(v[T]);
          dn(t, L.prev, V.next), dn(t, _, L), dn(t, V, O), h = O, _ = V, P -= 1, w = [], v = [];
        } else
          y.delete(x), xl(x, h, n), dn(t, x.prev, x.next), dn(t, x, _ === null ? t.first : _.next), dn(t, _, x), _ = x;
        continue;
      }
      for (w = [], v = []; h !== null && h.k !== S; )
        (i || !(h.e.f & Yt)) && (y ?? (y = /* @__PURE__ */ new Set())).add(h), v.push(h), h = h.next;
      if (h === null)
        continue;
      x = h;
    }
    w.push(x), _ = x, h = x.next;
  }
  if (h !== null || y !== void 0) {
    for (var $ = y === void 0 ? [] : Cs(y); h !== null; )
      (i || !(h.e.f & Yt)) && $.push(h), h = h.next;
    var H = $.length;
    if (H > 0) {
      var k = o & pa && c === 0 ? n : null;
      if (u) {
        for (P = 0; P < H; P += 1)
          (M = $[P].a) == null || M.measure();
        for (P = 0; P < H; P += 1)
          (A = $[P].a) == null || A.fix();
      }
      Hf(t, $, k, d);
    }
  }
  u && ro(() => {
    var D;
    if (C !== void 0)
      for (x of C)
        (D = x.a) == null || D.apply();
  }), Ee.first = t.first && t.first.e, Ee.last = _ && _.e;
}
function Rf(e, t, n, r) {
  r & ws && Zi(e.v, t), r & _s ? Zi(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function tc(e, t, n, r, o, i, s, l, u, a) {
  var c = (u & ws) !== 0, d = (u & Dd) === 0, f = c ? d ? /* @__PURE__ */ to(o) : vt(o) : o, h = u & _s ? vt(s) : s, y = {
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
    return y.e = xn(() => l(e, f, h), Ce), y.e.prev = n && n.e, y.e.next = r && r.e, n === null ? t.first = y : (n.next = y, n.e.next = y.e), r !== null && (r.prev = y, r.e.prev = y.e), y;
  } finally {
  }
}
function xl(e, t, n) {
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
      /* @__PURE__ */ Gt(i)
    );
    o.before(i), i = s;
  }
}
function dn(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function nc(e, t, n, r, o) {
  var i = e, s = "", l;
  _r(() => {
    if (s === (s = t() ?? "")) {
      Ce && _n();
      return;
    }
    l !== void 0 && (Dt(l), l = void 0), s !== "" && (l = xn(() => {
      if (Ce) {
        Oe.data;
        for (var u = _n(), a = u; u !== null && (u.nodeType !== 8 || /** @type {Comment} */
        u.data !== ""); )
          a = u, u = /** @type {TemplateNode} */
          /* @__PURE__ */ Gt(u);
        if (u === null)
          throw ci(), Fn;
        xt(Oe, a), i = bt(u);
        return;
      }
      var c = s + "", d = Ls(c);
      xt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ yt(d),
        /** @type {TemplateNode} */
        d.lastChild
      ), i.before(d);
    }));
  });
}
function Je(e, t, n, r, o) {
  var l;
  Ce && _n();
  var i = (l = t.$$slots) == null ? void 0 : l[n], s = !1;
  i === !0 && (i = t[n === "default" ? "children" : n], s = !0), i === void 0 ? o !== null && o(e) : i(e, s ? () => r : r);
}
function Vf(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const n in e.$$slots)
    t[n] = !0;
  return t;
}
function Vo(e, t, ...n) {
  var r = e, o = Nt, i;
  _r(() => {
    o !== (o = t()) && (i && (Dt(i), i = null), i = xn(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, eo), Ce && (r = Oe);
}
function rc(e, t, n) {
  Ce && _n();
  var r = e, o, i;
  _r(() => {
    o !== (o = t()) && (i && ($r(i), i = null), o && (i = xn(() => n(r, o))));
  }, eo), Ce && (r = Oe);
}
function Ut(e, t) {
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
function ct(e, t, n) {
  _t(() => {
    var r = Ft(() => t(e, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      wr(() => {
        var s = n();
        B(s), o && Ps(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function oc(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = oc(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Yf() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = oc(e)) && (r && (r += " "), r += t);
  return r;
}
function jt(e) {
  return typeof e == "object" ? Yf(e) : e ?? "";
}
function ic(e) {
  if (Ce) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          te(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          te(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, pf(n), zf();
  }
}
function Bf(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function te(e, t, n, r) {
  var o = e.__attributes ?? (e.__attributes = {});
  Ce && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[Qd] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && sc(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Zt(e, t, n, r, o = !1, i = !1, s = !1) {
  var l = t || {}, u = e.tagName === "OPTION";
  for (var a in t)
    a in n || (n[a] = null);
  n.class && (n.class = jt(n.class)), r !== void 0 && (n.class = n.class ? n.class + " " + r : r);
  var c = sc(e), d = (
    /** @type {Record<string, unknown>} **/
    e.__attributes ?? (e.__attributes = {})
  );
  for (const w in n) {
    let v = n[w];
    if (u && w === "value" && v == null) {
      e.value = e.__value = "", l[w] = v;
      continue;
    }
    var f = l[w];
    if (v !== f) {
      l[w] = v;
      var h = w[0] + w[1];
      if (h !== "$$") {
        if (h === "on") {
          const E = {}, S = "$$" + w;
          let x = w.slice(2);
          var y = Bd(x);
          if (Vd(x) && (x = x.slice(0, -7), E.capture = !0), !y && f) {
            if (v != null) continue;
            e.removeEventListener(x, l[S], E), l[S] = null;
          }
          if (v != null)
            if (y)
              e[`__${x}`] = v, hi([x]);
            else {
              let P = function(N) {
                l[w].call(this, N);
              };
              l[S] = Ja(x, e, P, E);
            }
          else y && (e[`__${x}`] = void 0);
        } else if (w === "style" && v != null)
          e.style.cssText = v + "";
        else if (w === "autofocus")
          Tf(
            /** @type {HTMLElement} */
            e,
            !!v
          );
        else if (w === "__value" || w === "value" && v != null)
          e.value = e[w] = e.__value = v;
        else if (w === "selected" && u)
          Bf(
            /** @type {HTMLOptionElement} */
            e,
            v
          );
        else {
          var _ = w;
          o || (_ = Wd(_));
          var C = _ === "defaultValue" || _ === "defaultChecked";
          if (v == null && !i && !C)
            if (d[w] = null, _ === "value" || _ === "checked") {
              let E = (
                /** @type {HTMLInputElement} */
                e
              );
              if (_ === "value") {
                let S = E.defaultValue;
                E.removeAttribute(_), E.defaultValue = S;
              } else {
                let S = E.defaultChecked;
                E.removeAttribute(_), E.defaultChecked = S;
              }
            } else
              e.removeAttribute(w);
          else C || c.includes(_) && (i || typeof v != "string") ? e[_] = v : typeof v != "function" && (Ce && (_ === "src" || _ === "href" || _ === "srcset") || te(e, _, v));
        }
        w === "style" && "__styles" in e && (e.__styles = {});
      }
    }
  }
  return l;
}
var Cl = /* @__PURE__ */ new Map();
function sc(e) {
  var t = Cl.get(e.nodeName);
  if (t) return t;
  Cl.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = Ca(r);
    for (var i in n)
      n[i].set && t.push(i);
    r = ks(r);
  }
  return t;
}
function Bn(e, t, n) {
  var r = e.__className, o = lc(t, n);
  Ce && e.getAttribute("class") === o ? e.__className = o : (r !== o || Ce && e.getAttribute("class") !== o) && (o === "" ? e.removeAttribute("class") : e.setAttribute("class", o), e.__className = o);
}
function sr(e, t, n) {
  var r = e.__className, o = lc(t, n);
  Ce && e.className === o ? e.__className = o : (r !== o || Ce && e.className !== o) && (t == null && !n ? e.removeAttribute("class") : e.className = o, e.__className = o);
}
function lc(e, t) {
  return (e ?? "") + (t ? " " + t : "");
}
function Ke(e, t, n) {
  if (n) {
    if (e.classList.contains(t)) return;
    e.classList.add(t);
  } else {
    if (!e.classList.contains(t)) return;
    e.classList.remove(t);
  }
}
function et(e, t, n, r) {
  var o = e.__styles ?? (e.__styles = {});
  o[t] !== n && (o[t] = n, n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, ""));
}
var gn, rr, jr, li, ac;
const ai = class ai {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    Nn(this, li);
    /** */
    Nn(this, gn, /* @__PURE__ */ new WeakMap());
    /** @type {ResizeObserver | undefined} */
    Nn(this, rr);
    /** @type {ResizeObserverOptions} */
    Nn(this, jr);
    Nr(this, jr, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = Ze(this, gn).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), Ze(this, gn).set(t, r), vl(this, li, ac).call(this).observe(t, Ze(this, jr)), () => {
      var o = Ze(this, gn).get(t);
      o.delete(n), o.size === 0 && (Ze(this, gn).delete(t), Ze(this, rr).unobserve(t));
    };
  }
};
gn = new WeakMap(), rr = new WeakMap(), jr = new WeakMap(), li = new WeakSet(), ac = function() {
  return Ze(this, rr) ?? Nr(this, rr, new ResizeObserver(
    /** @param {any} entries */
    (t) => {
      for (var n of t) {
        ai.entries.set(n.target, n);
        for (var r of Ze(this, gn).get(n.target) || [])
          r(n);
      }
    }
  ));
}, /** @static */
at(ai, "entries", /* @__PURE__ */ new WeakMap());
let ns = ai;
var Xf = /* @__PURE__ */ new ns({
  box: "border-box"
});
function kl(e, t, n) {
  var r = Xf.observe(e, () => n(e[t]));
  _t(() => (Ft(() => n(e[t])), r));
}
function El(e, t) {
  return e === t || (e == null ? void 0 : e[vn]) === t;
}
function lr(e = {}, t, n, r) {
  return _t(() => {
    var o, i;
    return wr(() => {
      o = i, i = [], Ft(() => {
        e !== n(...i) && (t(e, ...i), o && El(n(...o), e) && t(null, ...o));
      });
    }), () => {
      ro(() => {
        i && El(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function me(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Te
  ), n = t.l.u;
  if (!n) return;
  let r = () => B(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ or(() => {
      let l = !1;
      const u = t.s;
      for (const a in u)
        u[a] !== i[a] && (i[a] = u[a], l = !0);
      return l && o++, o;
    });
    r = () => g(s);
  }
  n.b.length && hf(() => {
    Sl(t, r), Hr(n.b);
  }), Ui(() => {
    const o = Ft(() => n.m.map(Gd));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Ui(() => {
    Sl(t, r), Hr(n.a);
  });
}
function Sl(e, t) {
  if (e.l.s)
    for (const n of e.l.s) g(n);
  t();
}
function Ne(e, t) {
  var i;
  var n = (
    /** @type {Record<string, Function[] | Function>} */
    (i = e.$$events) == null ? void 0 : i[t.type]
  ), r = Jr(n) ? n.slice() : n == null ? [] : [n];
  for (var o of r)
    o.call(this, t);
}
function xr(e) {
  Te === null && ui(), vr && Te.l !== null ? Kf(Te).m.push(e) : Ui(() => {
    const t = Ft(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Is(e) {
  Te === null && ui(), xr(() => () => Ft(e));
}
function Wf(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function vi() {
  const e = Te;
  return e === null && ui(), (t, n, r) => {
    var i;
    const o = (
      /** @type {Record<string, Function | Function[]>} */
      (i = e.s.$$events) == null ? void 0 : i[
        /** @type {any} */
        t
      ]
    );
    if (o) {
      const s = Jr(o) ? o.slice() : [o], l = Wf(
        /** @type {string} */
        t,
        n,
        r
      );
      for (const u of s)
        u.call(e.x, l);
      return !l.defaultPrevented;
    }
    return !0;
  };
}
function Kf(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function Hs(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), Nt;
  const r = Ft(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
let po = !1;
function U(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ to(void 0),
    unsubscribe: Nt
  });
  if (r.store !== e)
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = Nt;
    else {
      var o = !0;
      r.unsubscribe = Hs(e, (i) => {
        o ? r.source.v = i : X(r.source, i);
      }), o = !1;
    }
  return g(r.source);
}
function Ff(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = Nt), e;
}
function Yo(e, t) {
  return e.set(t), t;
}
function tt() {
  const e = {};
  return La(() => {
    for (var t in e)
      e[t].unsubscribe();
  }), e;
}
function Zf(e) {
  var t = po;
  try {
    return po = !1, [e(), po];
  } finally {
    po = t;
  }
}
const qf = {
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
function $s(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    qf
  );
}
const Gf = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return g(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    return t in e.special || (e.special[t] = p(
      {
        get [t]() {
          return e.props[t];
        }
      },
      /** @type {string} */
      t,
      wa
    )), e.special[t](n), _l(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), _l(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function Se(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: vt(0) }, Gf);
}
const Uf = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Or(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      Or(o) && (o = o());
      const i = sn(o, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Or(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = sn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === vn || t === Ss) return !1;
    for (let n of e.props)
      if (Or(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props) {
      Or(n) && (n = n());
      for (const r in n)
        t.includes(r) || t.push(r);
    }
    return t;
  }
};
function An(...e) {
  return new Proxy({ props: e }, Uf);
}
function Pl(e) {
  for (var t = Ee, n = Ee; t !== null && !(t.f & (Ht | yr)); )
    t = t.parent;
  try {
    return Kt(t), e();
  } finally {
    Kt(n);
  }
}
function p(e, t, n, r) {
  var N;
  var o = (n & Ld) !== 0, i = !vr || (n & Id) !== 0, s = (n & Hd) !== 0, l = (n & $d) !== 0, u = !1, a;
  s ? [a, u] = Zf(() => (
    /** @type {V} */
    e[t]
  )) : a = /** @type {V} */
  e[t];
  var c = vn in e || Ss in e, d = ((N = sn(e, t)) == null ? void 0 : N.set) ?? (c && s && t in e ? (O) => e[t] = O : void 0), f = (
    /** @type {V} */
    r
  ), h = !0, y = !1, _ = () => (y = !0, h && (h = !1, l ? f = Ft(
    /** @type {() => V} */
    r
  ) : f = /** @type {V} */
  r), f);
  a === void 0 && r !== void 0 && (d && i && sf(), a = _(), d && d(a));
  var C;
  if (i)
    C = () => {
      var O = (
        /** @type {V} */
        e[t]
      );
      return O === void 0 ? _() : (h = !0, y = !1, O);
    };
  else {
    var w = Pl(
      () => (o ? or : ae)(() => (
        /** @type {V} */
        e[t]
      ))
    );
    w.f |= jd, C = () => {
      var O = g(w);
      return O !== void 0 && (f = /** @type {V} */
      void 0), O === void 0 ? f : O;
    };
  }
  if (!(n & wa))
    return C;
  if (d) {
    var v = e.$$legacy;
    return function(O, T) {
      return arguments.length > 0 ? ((!i || !T || v || u) && d(T ? C() : O), O) : C();
    };
  }
  var E = !1, S = !1, x = /* @__PURE__ */ to(a), P = Pl(
    () => /* @__PURE__ */ or(() => {
      var O = C(), T = g(x);
      return E ? (E = !1, S = !0, T) : (S = !1, x.v = O);
    })
  );
  return o || (P.equals = Ms), function(O, T) {
    if (arguments.length > 0) {
      const L = T ? g(P) : i && s ? hn(O) : O;
      return P.equals(L) || (E = !0, X(x, L), y && f !== void 0 && (f = L), Ft(() => g(P))), O;
    }
    return g(P);
  };
}
function jf(e) {
  return new Jf(e);
}
var tn, Pt;
class Jf {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Nn(this, tn);
    /** @type {Record<string, any>} */
    Nn(this, Pt);
    var i;
    var n = /* @__PURE__ */ new Map(), r = (s, l) => {
      var u = /* @__PURE__ */ to(l);
      return n.set(s, u), u;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, l) {
          return g(n.get(l) ?? r(l, Reflect.get(s, l)));
        },
        has(s, l) {
          return l === Ss ? !0 : (g(n.get(l) ?? r(l, Reflect.get(s, l))), Reflect.has(s, l));
        },
        set(s, l, u) {
          return X(n.get(l) ?? r(l, u), u), Reflect.set(s, l, u);
        }
      }
    );
    Nr(this, Pt, (t.hydrate ? Lf : Qa)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((i = t == null ? void 0 : t.props) != null && i.$$host) || t.sync === !1) && m(), Nr(this, tn, o.$$events);
    for (const s of Object.keys(Ze(this, Pt)))
      s === "$set" || s === "$destroy" || s === "$on" || Do(this, s, {
        get() {
          return Ze(this, Pt)[s];
        },
        /** @param {any} value */
        set(l) {
          Ze(this, Pt)[s] = l;
        },
        enumerable: !0
      });
    Ze(this, Pt).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(o, s);
    }, Ze(this, Pt).$destroy = () => {
      If(Ze(this, Pt));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    Ze(this, Pt).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    Ze(this, tn)[t] = Ze(this, tn)[t] || [];
    const r = (...o) => n.call(this, ...o);
    return Ze(this, tn)[t].push(r), () => {
      Ze(this, tn)[t] = Ze(this, tn)[t].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    Ze(this, Pt).$destroy();
  }
}
tn = new WeakMap(), Pt = new WeakMap();
let cc;
typeof HTMLElement == "function" && (cc = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, n, r) {
    super();
    /** The Svelte component constructor */
    at(this, "$$ctor");
    /** Slots */
    at(this, "$$s");
    /** @type {any} The Svelte component instance */
    at(this, "$$c");
    /** Whether or not the custom element is connected */
    at(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    at(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    at(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    at(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    at(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    at(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    at(this, "$$me");
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
          o !== "default" && (s.name = o), K(i, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, r = Qf(this);
      for (const o of this.$$s)
        o in r && (o === "default" && !this.$$d.children ? (this.$$d.children = t(o), n.default = !0) : n[o] = t(o));
      for (const o of this.attributes) {
        const i = this.$$g_p(o.name);
        i in this.$$d || (this.$$d[i] = Po(i, o.value, this.$$p_d, "toProp"));
      }
      for (const o in this.$$p_d)
        !(o in this.$$d) && this[o] !== void 0 && (this.$$d[o] = this[o], delete this[o]);
      this.$$c = jf({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = gf(() => {
        wr(() => {
          var o;
          this.$$r = !0;
          for (const i of zo(this.$$c)) {
            if (!((o = this.$$p_d[i]) != null && o.reflect)) continue;
            this.$$d[i] = this.$$c[i];
            const s = Po(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Po(t, r, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [t]: this.$$d[t] }));
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
    return zo(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function Po(e, t, n, r) {
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
function Qf(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function se(e, t, n, r, o, i) {
  let s = class extends cc {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return zo(t).map(
        (l) => (t[l].attribute || l).toLowerCase()
      );
    }
  };
  return zo(t).forEach((l) => {
    Do(s.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(u) {
        var d;
        u = Po(l, u, t), this.$$d[l] = u;
        var a = this.$$c;
        if (a) {
          var c = (d = sn(a, l)) == null ? void 0 : d.get;
          c ? a[l] = u : a.$set({ [l]: u });
        }
      }
    });
  }), r.forEach((l) => {
    Do(s.prototype, l, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[l];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
const Wn = [];
function St(e, t) {
  return {
    subscribe: le(e, t).subscribe
  };
}
function le(e, t = Nt) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(l) {
    if (Ps(e, l) && (e = l, n)) {
      const u = !Wn.length;
      for (const a of r)
        a[1](), Wn.push(a, e);
      if (u) {
        for (let a = 0; a < Wn.length; a += 2)
          Wn[a][0](Wn[a + 1]);
        Wn.length = 0;
      }
    }
  }
  function i(l) {
    o(l(
      /** @type {T} */
      e
    ));
  }
  function s(l, u = Nt) {
    const a = [l, u];
    return r.add(a), r.size === 1 && (n = t(o, i) || Nt), l(
      /** @type {T} */
      e
    ), () => {
      r.delete(a), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: o, update: i, subscribe: s };
}
function Gn(e, t, n) {
  const r = !Array.isArray(e), o = r ? [e] : e;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = t.length < 2;
  return St(n, (s, l) => {
    let u = !1;
    const a = [];
    let c = 0, d = Nt;
    const f = () => {
      if (c)
        return;
      d();
      const y = t(r ? a[0] : a, s, l);
      i ? s(y) : d = typeof y == "function" ? y : Nt;
    }, h = o.map(
      (y, _) => Hs(
        y,
        (C) => {
          a[_] = C, c &= ~(1 << _), u && f();
        },
        () => {
          c |= 1 << _;
        }
      )
    );
    return u = !0, f(), function() {
      Hr(h), d(), u = !1;
    };
  });
}
function R(e) {
  let t;
  return Hs(e, (n) => t = n)(), t;
}
function dt(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = dt(e[n])) !== "" && (t += (t && " ") + r);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
var eh = { value: () => {
} };
function yi() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Mo(n);
}
function Mo(e) {
  this._ = e;
}
function th(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Mo.prototype = yi.prototype = {
  constructor: Mo,
  on: function(e, t) {
    var n = this._, r = th(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = nh(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = Ml(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = Ml(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Mo(e);
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
function nh(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Ml(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = eh, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var rs = "http://www.w3.org/1999/xhtml";
const Nl = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: rs,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function mi(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Nl.hasOwnProperty(t) ? { space: Nl[t], local: e } : e;
}
function rh(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === rs && t.documentElement.namespaceURI === rs ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function oh(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function uc(e) {
  var t = mi(e);
  return (t.local ? oh : rh)(t);
}
function ih() {
}
function Rs(e) {
  return e == null ? ih : function() {
    return this.querySelector(e);
  };
}
function sh(e) {
  typeof e != "function" && (e = Rs(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, l = r[o] = new Array(s), u, a, c = 0; c < s; ++c)
      (u = i[c]) && (a = e.call(u, u.__data__, c, i)) && ("__data__" in u && (a.__data__ = u.__data__), l[c] = a);
  return new kt(r, this._parents);
}
function lh(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function ah() {
  return [];
}
function dc(e) {
  return e == null ? ah : function() {
    return this.querySelectorAll(e);
  };
}
function ch(e) {
  return function() {
    return lh(e.apply(this, arguments));
  };
}
function uh(e) {
  typeof e == "function" ? e = ch(e) : e = dc(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], l = s.length, u, a = 0; a < l; ++a)
      (u = s[a]) && (r.push(e.call(u, u.__data__, a, s)), o.push(u));
  return new kt(r, o);
}
function fc(e) {
  return function() {
    return this.matches(e);
  };
}
function hc(e) {
  return function(t) {
    return t.matches(e);
  };
}
var dh = Array.prototype.find;
function fh(e) {
  return function() {
    return dh.call(this.children, e);
  };
}
function hh() {
  return this.firstElementChild;
}
function gh(e) {
  return this.select(e == null ? hh : fh(typeof e == "function" ? e : hc(e)));
}
var vh = Array.prototype.filter;
function yh() {
  return Array.from(this.children);
}
function mh(e) {
  return function() {
    return vh.call(this.children, e);
  };
}
function ph(e) {
  return this.selectAll(e == null ? yh : mh(typeof e == "function" ? e : hc(e)));
}
function wh(e) {
  typeof e != "function" && (e = fc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, l = r[o] = [], u, a = 0; a < s; ++a)
      (u = i[a]) && e.call(u, u.__data__, a, i) && l.push(u);
  return new kt(r, this._parents);
}
function gc(e) {
  return new Array(e.length);
}
function _h() {
  return new kt(this._enter || this._groups.map(gc), this._parents);
}
function Bo(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Bo.prototype = {
  constructor: Bo,
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
function bh(e) {
  return function() {
    return e;
  };
}
function xh(e, t, n, r, o, i) {
  for (var s = 0, l, u = t.length, a = i.length; s < a; ++s)
    (l = t[s]) ? (l.__data__ = i[s], r[s] = l) : n[s] = new Bo(e, i[s]);
  for (; s < u; ++s)
    (l = t[s]) && (o[s] = l);
}
function Ch(e, t, n, r, o, i, s) {
  var l, u, a = /* @__PURE__ */ new Map(), c = t.length, d = i.length, f = new Array(c), h;
  for (l = 0; l < c; ++l)
    (u = t[l]) && (f[l] = h = s.call(u, u.__data__, l, t) + "", a.has(h) ? o[l] = u : a.set(h, u));
  for (l = 0; l < d; ++l)
    h = s.call(e, i[l], l, i) + "", (u = a.get(h)) ? (r[l] = u, u.__data__ = i[l], a.delete(h)) : n[l] = new Bo(e, i[l]);
  for (l = 0; l < c; ++l)
    (u = t[l]) && a.get(f[l]) === u && (o[l] = u);
}
function kh(e) {
  return e.__data__;
}
function Eh(e, t) {
  if (!arguments.length) return Array.from(this, kh);
  var n = t ? Ch : xh, r = this._parents, o = this._groups;
  typeof e != "function" && (e = bh(e));
  for (var i = o.length, s = new Array(i), l = new Array(i), u = new Array(i), a = 0; a < i; ++a) {
    var c = r[a], d = o[a], f = d.length, h = Sh(e.call(c, c && c.__data__, a, r)), y = h.length, _ = l[a] = new Array(y), C = s[a] = new Array(y), w = u[a] = new Array(f);
    n(c, d, _, C, w, h, t);
    for (var v = 0, E = 0, S, x; v < y; ++v)
      if (S = _[v]) {
        for (v >= E && (E = v + 1); !(x = C[E]) && ++E < y; ) ;
        S._next = x || null;
      }
  }
  return s = new kt(s, r), s._enter = l, s._exit = u, s;
}
function Sh(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Ph() {
  return new kt(this._exit || this._groups.map(gc), this._parents);
}
function Mh(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function Nh(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), l = new Array(o), u = 0; u < s; ++u)
    for (var a = n[u], c = r[u], d = a.length, f = l[u] = new Array(d), h, y = 0; y < d; ++y)
      (h = a[y] || c[y]) && (f[y] = h);
  for (; u < o; ++u)
    l[u] = n[u];
  return new kt(l, this._parents);
}
function Oh() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function Th(e) {
  e || (e = Ah);
  function t(d, f) {
    return d && f ? e(d.__data__, f.__data__) : !d - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], l = s.length, u = o[i] = new Array(l), a, c = 0; c < l; ++c)
      (a = s[c]) && (u[c] = a);
    u.sort(t);
  }
  return new kt(o, this._parents).order();
}
function Ah(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function zh() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Dh() {
  return Array.from(this);
}
function Lh() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function Ih() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function Hh() {
  return !this.node();
}
function $h(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, l; i < s; ++i)
      (l = o[i]) && e.call(l, l.__data__, i, o);
  return this;
}
function Rh(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Vh(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Yh(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Bh(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Xh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Wh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Kh(e, t) {
  var n = mi(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Vh : Rh : typeof t == "function" ? n.local ? Wh : Xh : n.local ? Bh : Yh)(n, t));
}
function vc(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Fh(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Zh(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function qh(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function Gh(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Fh : typeof t == "function" ? qh : Zh)(e, t, n ?? "")) : ar(this.node(), e);
}
function ar(e, t) {
  return e.style.getPropertyValue(t) || vc(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Uh(e) {
  return function() {
    delete this[e];
  };
}
function jh(e, t) {
  return function() {
    this[e] = t;
  };
}
function Jh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Qh(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Uh : typeof t == "function" ? Jh : jh)(e, t)) : this.node()[e];
}
function yc(e) {
  return e.trim().split(/^|\s+/);
}
function Vs(e) {
  return e.classList || new mc(e);
}
function mc(e) {
  this._node = e, this._names = yc(e.getAttribute("class") || "");
}
mc.prototype = {
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
function pc(e, t) {
  for (var n = Vs(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function wc(e, t) {
  for (var n = Vs(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function eg(e) {
  return function() {
    pc(this, e);
  };
}
function tg(e) {
  return function() {
    wc(this, e);
  };
}
function ng(e, t) {
  return function() {
    (t.apply(this, arguments) ? pc : wc)(this, e);
  };
}
function rg(e, t) {
  var n = yc(e + "");
  if (arguments.length < 2) {
    for (var r = Vs(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? ng : t ? eg : tg)(n, t));
}
function og() {
  this.textContent = "";
}
function ig(e) {
  return function() {
    this.textContent = e;
  };
}
function sg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function lg(e) {
  return arguments.length ? this.each(e == null ? og : (typeof e == "function" ? sg : ig)(e)) : this.node().textContent;
}
function ag() {
  this.innerHTML = "";
}
function cg(e) {
  return function() {
    this.innerHTML = e;
  };
}
function ug(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function dg(e) {
  return arguments.length ? this.each(e == null ? ag : (typeof e == "function" ? ug : cg)(e)) : this.node().innerHTML;
}
function fg() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function hg() {
  return this.each(fg);
}
function gg() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function vg() {
  return this.each(gg);
}
function yg(e) {
  var t = typeof e == "function" ? e : uc(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function mg() {
  return null;
}
function pg(e, t) {
  var n = typeof e == "function" ? e : uc(e), r = t == null ? mg : typeof t == "function" ? t : Rs(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function wg() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function _g() {
  return this.each(wg);
}
function bg() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function xg() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Cg(e) {
  return this.select(e ? xg : bg);
}
function kg(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Eg(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Sg(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function Pg(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Mg(e, t, n) {
  return function() {
    var r = this.__on, o, i = Eg(t);
    if (r) {
      for (var s = 0, l = r.length; s < l; ++s)
        if ((o = r[s]).type === e.type && o.name === e.name) {
          this.removeEventListener(o.type, o.listener, o.options), this.addEventListener(o.type, o.listener = i, o.options = n), o.value = t;
          return;
        }
    }
    this.addEventListener(e.type, i, n), o = { type: e.type, name: e.name, value: t, listener: i, options: n }, r ? r.push(o) : this.__on = [o];
  };
}
function Ng(e, t, n) {
  var r = Sg(e + ""), o, i = r.length, s;
  if (arguments.length < 2) {
    var l = this.node().__on;
    if (l) {
      for (var u = 0, a = l.length, c; u < a; ++u)
        for (o = 0, c = l[u]; o < i; ++o)
          if ((s = r[o]).type === c.type && s.name === c.name)
            return c.value;
    }
    return;
  }
  for (l = t ? Mg : Pg, o = 0; o < i; ++o) this.each(l(r[o], t, n));
  return this;
}
function _c(e, t, n) {
  var r = vc(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Og(e, t) {
  return function() {
    return _c(this, e, t);
  };
}
function Tg(e, t) {
  return function() {
    return _c(this, e, t.apply(this, arguments));
  };
}
function Ag(e, t) {
  return this.each((typeof t == "function" ? Tg : Og)(e, t));
}
function* zg() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var bc = [null];
function kt(e, t) {
  this._groups = e, this._parents = t;
}
function so() {
  return new kt([[document.documentElement]], bc);
}
function Dg() {
  return this;
}
kt.prototype = so.prototype = {
  constructor: kt,
  select: sh,
  selectAll: uh,
  selectChild: gh,
  selectChildren: ph,
  filter: wh,
  data: Eh,
  enter: _h,
  exit: Ph,
  join: Mh,
  merge: Nh,
  selection: Dg,
  order: Oh,
  sort: Th,
  call: zh,
  nodes: Dh,
  node: Lh,
  size: Ih,
  empty: Hh,
  each: $h,
  attr: Kh,
  style: Gh,
  property: Qh,
  classed: rg,
  text: lg,
  html: dg,
  raise: hg,
  lower: vg,
  append: yg,
  insert: pg,
  remove: _g,
  clone: Cg,
  datum: kg,
  on: Ng,
  dispatch: Ag,
  [Symbol.iterator]: zg
};
function Mt(e) {
  return typeof e == "string" ? new kt([[document.querySelector(e)]], [document.documentElement]) : new kt([[e]], bc);
}
function Lg(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function Tt(e, t) {
  if (e = Lg(e), t === void 0 && (t = e.currentTarget), t) {
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
const Ig = { passive: !1 }, Br = { capture: !0, passive: !1 };
function zi(e) {
  e.stopImmediatePropagation();
}
function Un(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function xc(e) {
  var t = e.document.documentElement, n = Mt(e).on("dragstart.drag", Un, Br);
  "onselectstart" in t ? n.on("selectstart.drag", Un, Br) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Cc(e, t) {
  var n = e.document.documentElement, r = Mt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Un, Br), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const wo = (e) => () => e;
function os(e, {
  sourceEvent: t,
  subject: n,
  target: r,
  identifier: o,
  active: i,
  x: s,
  y: l,
  dx: u,
  dy: a,
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
    y: { value: l, enumerable: !0, configurable: !0 },
    dx: { value: u, enumerable: !0, configurable: !0 },
    dy: { value: a, enumerable: !0, configurable: !0 },
    _: { value: c }
  });
}
os.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Hg(e) {
  return !e.ctrlKey && !e.button;
}
function $g() {
  return this.parentNode;
}
function Rg(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Vg() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Yg() {
  var e = Hg, t = $g, n = Rg, r = Vg, o = {}, i = yi("start", "drag", "end"), s = 0, l, u, a, c, d = 0;
  function f(S) {
    S.on("mousedown.drag", h).filter(r).on("touchstart.drag", C).on("touchmove.drag", w, Ig).on("touchend.drag touchcancel.drag", v).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function h(S, x) {
    if (!(c || !e.call(this, S, x))) {
      var P = E(this, t.call(this, S, x), S, x, "mouse");
      P && (Mt(S.view).on("mousemove.drag", y, Br).on("mouseup.drag", _, Br), xc(S.view), zi(S), a = !1, l = S.clientX, u = S.clientY, P("start", S));
    }
  }
  function y(S) {
    if (Un(S), !a) {
      var x = S.clientX - l, P = S.clientY - u;
      a = x * x + P * P > d;
    }
    o.mouse("drag", S);
  }
  function _(S) {
    Mt(S.view).on("mousemove.drag mouseup.drag", null), Cc(S.view, a), Un(S), o.mouse("end", S);
  }
  function C(S, x) {
    if (e.call(this, S, x)) {
      var P = S.changedTouches, N = t.call(this, S, x), O = P.length, T, L;
      for (T = 0; T < O; ++T)
        (L = E(this, N, S, x, P[T].identifier, P[T])) && (zi(S), L("start", S, P[T]));
    }
  }
  function w(S) {
    var x = S.changedTouches, P = x.length, N, O;
    for (N = 0; N < P; ++N)
      (O = o[x[N].identifier]) && (Un(S), O("drag", S, x[N]));
  }
  function v(S) {
    var x = S.changedTouches, P = x.length, N, O;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), N = 0; N < P; ++N)
      (O = o[x[N].identifier]) && (zi(S), O("end", S, x[N]));
  }
  function E(S, x, P, N, O, T) {
    var L = i.copy(), V = Tt(T || P, x), $, H, k;
    if ((k = n.call(S, new os("beforestart", {
      sourceEvent: P,
      target: f,
      identifier: O,
      active: s,
      x: V[0],
      y: V[1],
      dx: 0,
      dy: 0,
      dispatch: L
    }), N)) != null)
      return $ = k.x - V[0] || 0, H = k.y - V[1] || 0, function I(b, M, A) {
        var D = V, Y;
        switch (b) {
          case "start":
            o[O] = I, Y = s++;
            break;
          case "end":
            delete o[O], --s;
          // falls through
          case "drag":
            V = Tt(A || M, x), Y = s;
            break;
        }
        L.call(
          b,
          S,
          new os(b, {
            sourceEvent: M,
            subject: k,
            target: f,
            identifier: O,
            active: Y,
            x: V[0] + $,
            y: V[1] + H,
            dx: V[0] - D[0],
            dy: V[1] - D[1],
            dispatch: L
          }),
          N
        );
      };
  }
  return f.filter = function(S) {
    return arguments.length ? (e = typeof S == "function" ? S : wo(!!S), f) : e;
  }, f.container = function(S) {
    return arguments.length ? (t = typeof S == "function" ? S : wo(S), f) : t;
  }, f.subject = function(S) {
    return arguments.length ? (n = typeof S == "function" ? S : wo(S), f) : n;
  }, f.touchable = function(S) {
    return arguments.length ? (r = typeof S == "function" ? S : wo(!!S), f) : r;
  }, f.on = function() {
    var S = i.on.apply(i, arguments);
    return S === i ? f : S;
  }, f.clickDistance = function(S) {
    return arguments.length ? (d = (S = +S) * S, f) : Math.sqrt(d);
  }, f;
}
function Ys(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function kc(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function lo() {
}
var Xr = 0.7, Xo = 1 / Xr, jn = "\\s*([+-]?\\d+)\\s*", Wr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Xt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Bg = /^#([0-9a-f]{3,8})$/, Xg = new RegExp(`^rgb\\(${jn},${jn},${jn}\\)$`), Wg = new RegExp(`^rgb\\(${Xt},${Xt},${Xt}\\)$`), Kg = new RegExp(`^rgba\\(${jn},${jn},${jn},${Wr}\\)$`), Fg = new RegExp(`^rgba\\(${Xt},${Xt},${Xt},${Wr}\\)$`), Zg = new RegExp(`^hsl\\(${Wr},${Xt},${Xt}\\)$`), qg = new RegExp(`^hsla\\(${Wr},${Xt},${Xt},${Wr}\\)$`), Ol = {
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
Ys(lo, Kr, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Tl,
  // Deprecated! Use color.formatHex.
  formatHex: Tl,
  formatHex8: Gg,
  formatHsl: Ug,
  formatRgb: Al,
  toString: Al
});
function Tl() {
  return this.rgb().formatHex();
}
function Gg() {
  return this.rgb().formatHex8();
}
function Ug() {
  return Ec(this).formatHsl();
}
function Al() {
  return this.rgb().formatRgb();
}
function Kr(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Bg.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? zl(t) : n === 3 ? new mt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? _o(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? _o(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Xg.exec(e)) ? new mt(t[1], t[2], t[3], 1) : (t = Wg.exec(e)) ? new mt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Kg.exec(e)) ? _o(t[1], t[2], t[3], t[4]) : (t = Fg.exec(e)) ? _o(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Zg.exec(e)) ? Il(t[1], t[2] / 100, t[3] / 100, 1) : (t = qg.exec(e)) ? Il(t[1], t[2] / 100, t[3] / 100, t[4]) : Ol.hasOwnProperty(e) ? zl(Ol[e]) : e === "transparent" ? new mt(NaN, NaN, NaN, 0) : null;
}
function zl(e) {
  return new mt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function _o(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new mt(e, t, n, r);
}
function jg(e) {
  return e instanceof lo || (e = Kr(e)), e ? (e = e.rgb(), new mt(e.r, e.g, e.b, e.opacity)) : new mt();
}
function is(e, t, n, r) {
  return arguments.length === 1 ? jg(e) : new mt(e, t, n, r ?? 1);
}
function mt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Ys(mt, is, kc(lo, {
  brighter(e) {
    return e = e == null ? Xo : Math.pow(Xo, e), new mt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Xr : Math.pow(Xr, e), new mt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new mt(Dn(this.r), Dn(this.g), Dn(this.b), Wo(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Dl,
  // Deprecated! Use color.formatHex.
  formatHex: Dl,
  formatHex8: Jg,
  formatRgb: Ll,
  toString: Ll
}));
function Dl() {
  return `#${zn(this.r)}${zn(this.g)}${zn(this.b)}`;
}
function Jg() {
  return `#${zn(this.r)}${zn(this.g)}${zn(this.b)}${zn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ll() {
  const e = Wo(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Dn(this.r)}, ${Dn(this.g)}, ${Dn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Wo(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Dn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function zn(e) {
  return e = Dn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Il(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new At(e, t, n, r);
}
function Ec(e) {
  if (e instanceof At) return new At(e.h, e.s, e.l, e.opacity);
  if (e instanceof lo || (e = Kr(e)), !e) return new At();
  if (e instanceof At) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, l = i - o, u = (i + o) / 2;
  return l ? (t === i ? s = (n - r) / l + (n < r) * 6 : n === i ? s = (r - t) / l + 2 : s = (t - n) / l + 4, l /= u < 0.5 ? i + o : 2 - i - o, s *= 60) : l = u > 0 && u < 1 ? 0 : s, new At(s, l, u, e.opacity);
}
function Qg(e, t, n, r) {
  return arguments.length === 1 ? Ec(e) : new At(e, t, n, r ?? 1);
}
function At(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Ys(At, Qg, kc(lo, {
  brighter(e) {
    return e = e == null ? Xo : Math.pow(Xo, e), new At(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Xr : Math.pow(Xr, e), new At(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new mt(
      Di(e >= 240 ? e - 240 : e + 120, o, r),
      Di(e, o, r),
      Di(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new At(Hl(this.h), bo(this.s), bo(this.l), Wo(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Wo(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Hl(this.h)}, ${bo(this.s) * 100}%, ${bo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Hl(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function bo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Di(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Sc = (e) => () => e;
function ev(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function tv(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function nv(e) {
  return (e = +e) == 1 ? Pc : function(t, n) {
    return n - t ? tv(t, n, e) : Sc(isNaN(t) ? n : t);
  };
}
function Pc(e, t) {
  var n = t - e;
  return n ? ev(e, n) : Sc(isNaN(e) ? t : e);
}
const $l = function e(t) {
  var n = nv(t);
  function r(o, i) {
    var s = n((o = is(o)).r, (i = is(i)).r), l = n(o.g, i.g), u = n(o.b, i.b), a = Pc(o.opacity, i.opacity);
    return function(c) {
      return o.r = s(c), o.g = l(c), o.b = u(c), o.opacity = a(c), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function fn(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
var ss = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Li = new RegExp(ss.source, "g");
function rv(e) {
  return function() {
    return e;
  };
}
function ov(e) {
  return function(t) {
    return e(t) + "";
  };
}
function iv(e, t) {
  var n = ss.lastIndex = Li.lastIndex = 0, r, o, i, s = -1, l = [], u = [];
  for (e = e + "", t = t + ""; (r = ss.exec(e)) && (o = Li.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), l[s] ? l[s] += i : l[++s] = i), (r = r[0]) === (o = o[0]) ? l[s] ? l[s] += o : l[++s] = o : (l[++s] = null, u.push({ i: s, x: fn(r, o) })), n = Li.lastIndex;
  return n < t.length && (i = t.slice(n), l[s] ? l[s] += i : l[++s] = i), l.length < 2 ? u[0] ? ov(u[0].x) : rv(t) : (t = u.length, function(a) {
    for (var c = 0, d; c < t; ++c) l[(d = u[c]).i] = d.x(a);
    return l.join("");
  });
}
var Rl = 180 / Math.PI, ls = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Mc(e, t, n, r, o, i) {
  var s, l, u;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (u = e * n + t * r) && (n -= e * u, r -= t * u), (l = Math.sqrt(n * n + r * r)) && (n /= l, r /= l, u /= l), e * r < t * n && (e = -e, t = -t, u = -u, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * Rl,
    skewX: Math.atan(u) * Rl,
    scaleX: s,
    scaleY: l
  };
}
var xo;
function sv(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? ls : Mc(t.a, t.b, t.c, t.d, t.e, t.f);
}
function lv(e) {
  return e == null || (xo || (xo = document.createElementNS("http://www.w3.org/2000/svg", "g")), xo.setAttribute("transform", e), !(e = xo.transform.baseVal.consolidate())) ? ls : (e = e.matrix, Mc(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Nc(e, t, n, r) {
  function o(a) {
    return a.length ? a.pop() + " " : "";
  }
  function i(a, c, d, f, h, y) {
    if (a !== d || c !== f) {
      var _ = h.push("translate(", null, t, null, n);
      y.push({ i: _ - 4, x: fn(a, d) }, { i: _ - 2, x: fn(c, f) });
    } else (d || f) && h.push("translate(" + d + t + f + n);
  }
  function s(a, c, d, f) {
    a !== c ? (a - c > 180 ? c += 360 : c - a > 180 && (a += 360), f.push({ i: d.push(o(d) + "rotate(", null, r) - 2, x: fn(a, c) })) : c && d.push(o(d) + "rotate(" + c + r);
  }
  function l(a, c, d, f) {
    a !== c ? f.push({ i: d.push(o(d) + "skewX(", null, r) - 2, x: fn(a, c) }) : c && d.push(o(d) + "skewX(" + c + r);
  }
  function u(a, c, d, f, h, y) {
    if (a !== d || c !== f) {
      var _ = h.push(o(h) + "scale(", null, ",", null, ")");
      y.push({ i: _ - 4, x: fn(a, d) }, { i: _ - 2, x: fn(c, f) });
    } else (d !== 1 || f !== 1) && h.push(o(h) + "scale(" + d + "," + f + ")");
  }
  return function(a, c) {
    var d = [], f = [];
    return a = e(a), c = e(c), i(a.translateX, a.translateY, c.translateX, c.translateY, d, f), s(a.rotate, c.rotate, d, f), l(a.skewX, c.skewX, d, f), u(a.scaleX, a.scaleY, c.scaleX, c.scaleY, d, f), a = c = null, function(h) {
      for (var y = -1, _ = f.length, C; ++y < _; ) d[(C = f[y]).i] = C.x(h);
      return d.join("");
    };
  };
}
var av = Nc(sv, "px, ", "px)", "deg)"), cv = Nc(lv, ", ", ")", ")"), uv = 1e-12;
function Vl(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function dv(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function fv(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const hv = function e(t, n, r) {
  function o(i, s) {
    var l = i[0], u = i[1], a = i[2], c = s[0], d = s[1], f = s[2], h = c - l, y = d - u, _ = h * h + y * y, C, w;
    if (_ < uv)
      w = Math.log(f / a) / t, C = function(N) {
        return [
          l + N * h,
          u + N * y,
          a * Math.exp(t * N * w)
        ];
      };
    else {
      var v = Math.sqrt(_), E = (f * f - a * a + r * _) / (2 * a * n * v), S = (f * f - a * a - r * _) / (2 * f * n * v), x = Math.log(Math.sqrt(E * E + 1) - E), P = Math.log(Math.sqrt(S * S + 1) - S);
      w = (P - x) / t, C = function(N) {
        var O = N * w, T = Vl(x), L = a / (n * v) * (T * fv(t * O + x) - dv(x));
        return [
          l + L * h,
          u + L * y,
          a * T / Vl(t * O + x)
        ];
      };
    }
    return C.duration = w * 1e3 * t / Math.SQRT2, C;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), l = s * s, u = l * l;
    return e(s, l, u);
  }, o;
}(Math.SQRT2, 2, 4);
var cr = 0, Dr = 0, Tr = 0, Oc = 1e3, Ko, Lr, Fo = 0, Ln = 0, pi = 0, Fr = typeof performance == "object" && performance.now ? performance : Date, Tc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Bs() {
  return Ln || (Tc(gv), Ln = Fr.now() + pi);
}
function gv() {
  Ln = 0;
}
function Zo() {
  this._call = this._time = this._next = null;
}
Zo.prototype = Ac.prototype = {
  constructor: Zo,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Bs() : +n) + (t == null ? 0 : +t), !this._next && Lr !== this && (Lr ? Lr._next = this : Ko = this, Lr = this), this._call = e, this._time = n, as();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, as());
  }
};
function Ac(e, t, n) {
  var r = new Zo();
  return r.restart(e, t, n), r;
}
function vv() {
  Bs(), ++cr;
  for (var e = Ko, t; e; )
    (t = Ln - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --cr;
}
function Yl() {
  Ln = (Fo = Fr.now()) + pi, cr = Dr = 0;
  try {
    vv();
  } finally {
    cr = 0, mv(), Ln = 0;
  }
}
function yv() {
  var e = Fr.now(), t = e - Fo;
  t > Oc && (pi -= t, Fo = e);
}
function mv() {
  for (var e, t = Ko, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Ko = n);
  Lr = e, as(r);
}
function as(e) {
  if (!cr) {
    Dr && (Dr = clearTimeout(Dr));
    var t = e - Ln;
    t > 24 ? (e < 1 / 0 && (Dr = setTimeout(Yl, e - Fr.now() - pi)), Tr && (Tr = clearInterval(Tr))) : (Tr || (Fo = Fr.now(), Tr = setInterval(yv, Oc)), cr = 1, Tc(Yl));
  }
}
function Bl(e, t, n) {
  var r = new Zo();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var pv = yi("start", "end", "cancel", "interrupt"), wv = [], zc = 0, Xl = 1, cs = 2, No = 3, Wl = 4, us = 5, Oo = 6;
function wi(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  _v(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: pv,
    tween: wv,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: zc
  });
}
function Xs(e, t) {
  var n = Rt(e, t);
  if (n.state > zc) throw new Error("too late; already scheduled");
  return n;
}
function Jt(e, t) {
  var n = Rt(e, t);
  if (n.state > No) throw new Error("too late; already running");
  return n;
}
function Rt(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function _v(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Ac(i, 0, n.time);
  function i(a) {
    n.state = Xl, n.timer.restart(s, n.delay, n.time), n.delay <= a && s(a - n.delay);
  }
  function s(a) {
    var c, d, f, h;
    if (n.state !== Xl) return u();
    for (c in r)
      if (h = r[c], h.name === n.name) {
        if (h.state === No) return Bl(s);
        h.state === Wl ? (h.state = Oo, h.timer.stop(), h.on.call("interrupt", e, e.__data__, h.index, h.group), delete r[c]) : +c < t && (h.state = Oo, h.timer.stop(), h.on.call("cancel", e, e.__data__, h.index, h.group), delete r[c]);
      }
    if (Bl(function() {
      n.state === No && (n.state = Wl, n.timer.restart(l, n.delay, n.time), l(a));
    }), n.state = cs, n.on.call("start", e, e.__data__, n.index, n.group), n.state === cs) {
      for (n.state = No, o = new Array(f = n.tween.length), c = 0, d = -1; c < f; ++c)
        (h = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++d] = h);
      o.length = d + 1;
    }
  }
  function l(a) {
    for (var c = a < n.duration ? n.ease.call(null, a / n.duration) : (n.timer.restart(u), n.state = us, 1), d = -1, f = o.length; ++d < f; )
      o[d].call(e, c);
    n.state === us && (n.on.call("end", e, e.__data__, n.index, n.group), u());
  }
  function u() {
    n.state = Oo, n.timer.stop(), delete r[t];
    for (var a in r) return;
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
      o = r.state > cs && r.state < us, r.state = Oo, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function bv(e) {
  return this.each(function() {
    To(this, e);
  });
}
function xv(e, t) {
  var n, r;
  return function() {
    var o = Jt(this, e), i = o.tween;
    if (i !== n) {
      r = n = i;
      for (var s = 0, l = r.length; s < l; ++s)
        if (r[s].name === t) {
          r = r.slice(), r.splice(s, 1);
          break;
        }
    }
    o.tween = r;
  };
}
function Cv(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = Jt(this, e), s = i.tween;
    if (s !== r) {
      o = (r = s).slice();
      for (var l = { name: t, value: n }, u = 0, a = o.length; u < a; ++u)
        if (o[u].name === t) {
          o[u] = l;
          break;
        }
      u === a && o.push(l);
    }
    i.tween = o;
  };
}
function kv(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = Rt(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? xv : Cv)(n, e, t));
}
function Ws(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = Jt(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return Rt(o, r).value[t];
  };
}
function Dc(e, t) {
  var n;
  return (typeof t == "number" ? fn : t instanceof Kr ? $l : (n = Kr(t)) ? (t = n, $l) : iv)(e, t);
}
function Ev(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Sv(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Pv(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Mv(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Nv(e, t, n) {
  var r, o, i;
  return function() {
    var s, l = n(this), u;
    return l == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), u = l + "", s === u ? null : s === r && u === o ? i : (o = u, i = t(r = s, l)));
  };
}
function Ov(e, t, n) {
  var r, o, i;
  return function() {
    var s, l = n(this), u;
    return l == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), u = l + "", s === u ? null : s === r && u === o ? i : (o = u, i = t(r = s, l)));
  };
}
function Tv(e, t) {
  var n = mi(e), r = n === "transform" ? cv : Dc;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Ov : Nv)(n, r, Ws(this, "attr." + e, t)) : t == null ? (n.local ? Sv : Ev)(n) : (n.local ? Mv : Pv)(n, r, t));
}
function Av(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function zv(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Dv(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && zv(e, i)), n;
  }
  return o._value = t, o;
}
function Lv(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Av(e, i)), n;
  }
  return o._value = t, o;
}
function Iv(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = mi(e);
  return this.tween(n, (r.local ? Dv : Lv)(r, t));
}
function Hv(e, t) {
  return function() {
    Xs(this, e).delay = +t.apply(this, arguments);
  };
}
function $v(e, t) {
  return t = +t, function() {
    Xs(this, e).delay = t;
  };
}
function Rv(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Hv : $v)(t, e)) : Rt(this.node(), t).delay;
}
function Vv(e, t) {
  return function() {
    Jt(this, e).duration = +t.apply(this, arguments);
  };
}
function Yv(e, t) {
  return t = +t, function() {
    Jt(this, e).duration = t;
  };
}
function Bv(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Vv : Yv)(t, e)) : Rt(this.node(), t).duration;
}
function Xv(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Jt(this, e).ease = t;
  };
}
function Wv(e) {
  var t = this._id;
  return arguments.length ? this.each(Xv(t, e)) : Rt(this.node(), t).ease;
}
function Kv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Jt(this, e).ease = n;
  };
}
function Fv(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Kv(this._id, e));
}
function Zv(e) {
  typeof e != "function" && (e = fc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, l = r[o] = [], u, a = 0; a < s; ++a)
      (u = i[a]) && e.call(u, u.__data__, a, i) && l.push(u);
  return new an(r, this._parents, this._name, this._id);
}
function qv(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), l = 0; l < i; ++l)
    for (var u = t[l], a = n[l], c = u.length, d = s[l] = new Array(c), f, h = 0; h < c; ++h)
      (f = u[h] || a[h]) && (d[h] = f);
  for (; l < r; ++l)
    s[l] = t[l];
  return new an(s, this._parents, this._name, this._id);
}
function Gv(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function Uv(e, t, n) {
  var r, o, i = Gv(t) ? Xs : Jt;
  return function() {
    var s = i(this, e), l = s.on;
    l !== r && (o = (r = l).copy()).on(t, n), s.on = o;
  };
}
function jv(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Rt(this.node(), n).on.on(e) : this.each(Uv(n, e, t));
}
function Jv(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Qv() {
  return this.on("end.remove", Jv(this._id));
}
function e0(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Rs(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var l = r[s], u = l.length, a = i[s] = new Array(u), c, d, f = 0; f < u; ++f)
      (c = l[f]) && (d = e.call(c, c.__data__, f, l)) && ("__data__" in c && (d.__data__ = c.__data__), a[f] = d, wi(a[f], t, n, f, a, Rt(c, n)));
  return new an(i, this._parents, t, n);
}
function t0(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = dc(e));
  for (var r = this._groups, o = r.length, i = [], s = [], l = 0; l < o; ++l)
    for (var u = r[l], a = u.length, c, d = 0; d < a; ++d)
      if (c = u[d]) {
        for (var f = e.call(c, c.__data__, d, u), h, y = Rt(c, n), _ = 0, C = f.length; _ < C; ++_)
          (h = f[_]) && wi(h, t, n, _, f, y);
        i.push(f), s.push(c);
      }
  return new an(i, s, t, n);
}
var n0 = so.prototype.constructor;
function r0() {
  return new n0(this._groups, this._parents);
}
function o0(e, t) {
  var n, r, o;
  return function() {
    var i = ar(this, e), s = (this.style.removeProperty(e), ar(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function Lc(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function i0(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = ar(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function s0(e, t, n) {
  var r, o, i;
  return function() {
    var s = ar(this, e), l = n(this), u = l + "";
    return l == null && (u = l = (this.style.removeProperty(e), ar(this, e))), s === u ? null : s === r && u === o ? i : (o = u, i = t(r = s, l));
  };
}
function l0(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, l;
  return function() {
    var u = Jt(this, e), a = u.on, c = u.value[i] == null ? l || (l = Lc(t)) : void 0;
    (a !== n || o !== c) && (r = (n = a).copy()).on(s, o = c), u.on = r;
  };
}
function a0(e, t, n) {
  var r = (e += "") == "transform" ? av : Dc;
  return t == null ? this.styleTween(e, o0(e, r)).on("end.style." + e, Lc(e)) : typeof t == "function" ? this.styleTween(e, s0(e, r, Ws(this, "style." + e, t))).each(l0(this._id, e)) : this.styleTween(e, i0(e, r, t), n).on("end.style." + e, null);
}
function c0(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function u0(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && c0(e, s, n)), r;
  }
  return i._value = t, i;
}
function d0(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, u0(e, t, n ?? ""));
}
function f0(e) {
  return function() {
    this.textContent = e;
  };
}
function h0(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function g0(e) {
  return this.tween("text", typeof e == "function" ? h0(Ws(this, "text", e)) : f0(e == null ? "" : e + ""));
}
function v0(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function y0(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && v0(o)), t;
  }
  return r._value = e, r;
}
function m0(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, y0(e));
}
function p0() {
  for (var e = this._name, t = this._id, n = Ic(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], l = s.length, u, a = 0; a < l; ++a)
      if (u = s[a]) {
        var c = Rt(u, t);
        wi(u, e, n, a, s, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new an(r, this._parents, e, n);
}
function w0() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var l = { value: s }, u = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var a = Jt(this, r), c = a.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(l), t._.interrupt.push(l), t._.end.push(u)), a.on = t;
    }), o === 0 && i();
  });
}
var _0 = 0;
function an(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Ic() {
  return ++_0;
}
var en = so.prototype;
an.prototype = {
  constructor: an,
  select: e0,
  selectAll: t0,
  selectChild: en.selectChild,
  selectChildren: en.selectChildren,
  filter: Zv,
  merge: qv,
  selection: r0,
  transition: p0,
  call: en.call,
  nodes: en.nodes,
  node: en.node,
  size: en.size,
  empty: en.empty,
  each: en.each,
  on: jv,
  attr: Tv,
  attrTween: Iv,
  style: a0,
  styleTween: d0,
  text: g0,
  textTween: m0,
  remove: Qv,
  tween: kv,
  delay: Rv,
  duration: Bv,
  ease: Wv,
  easeVarying: Fv,
  end: w0,
  [Symbol.iterator]: en[Symbol.iterator]
};
function b0(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var x0 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: b0
};
function C0(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function k0(e) {
  var t, n;
  e instanceof an ? (t = e._id, e = e._name) : (t = Ic(), (n = x0).time = Bs(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], l = s.length, u, a = 0; a < l; ++a)
      (u = s[a]) && wi(u, e, t, a, s, n || C0(u, t));
  return new an(r, this._parents, e, t);
}
so.prototype.interrupt = bv;
so.prototype.transition = k0;
const Co = (e) => () => e;
function E0(e, {
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
function rn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
rn.prototype = {
  constructor: rn,
  scale: function(e) {
    return e === 1 ? this : new rn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new rn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var _i = new rn(1, 0, 0);
Hc.prototype = rn.prototype;
function Hc(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return _i;
  return e.__zoom;
}
function Ii(e) {
  e.stopImmediatePropagation();
}
function Ar(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function S0(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function P0() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Kl() {
  return this.__zoom || _i;
}
function M0(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function N0() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function O0(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function $c() {
  var e = S0, t = P0, n = O0, r = M0, o = N0, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], l = 250, u = hv, a = yi("start", "zoom", "end"), c, d, f, h = 500, y = 150, _ = 0, C = 10;
  function w(k) {
    k.property("__zoom", Kl).on("wheel.zoom", O, { passive: !1 }).on("mousedown.zoom", T).on("dblclick.zoom", L).filter(o).on("touchstart.zoom", V).on("touchmove.zoom", $).on("touchend.zoom touchcancel.zoom", H).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  w.transform = function(k, I, b, M) {
    var A = k.selection ? k.selection() : k;
    A.property("__zoom", Kl), k !== A ? x(k, I, b, M) : A.interrupt().each(function() {
      P(this, arguments).event(M).start().zoom(null, typeof I == "function" ? I.apply(this, arguments) : I).end();
    });
  }, w.scaleBy = function(k, I, b, M) {
    w.scaleTo(k, function() {
      var A = this.__zoom.k, D = typeof I == "function" ? I.apply(this, arguments) : I;
      return A * D;
    }, b, M);
  }, w.scaleTo = function(k, I, b, M) {
    w.transform(k, function() {
      var A = t.apply(this, arguments), D = this.__zoom, Y = b == null ? S(A) : typeof b == "function" ? b.apply(this, arguments) : b, Z = D.invert(Y), Q = typeof I == "function" ? I.apply(this, arguments) : I;
      return n(E(v(D, Q), Y, Z), A, s);
    }, b, M);
  }, w.translateBy = function(k, I, b, M) {
    w.transform(k, function() {
      return n(this.__zoom.translate(
        typeof I == "function" ? I.apply(this, arguments) : I,
        typeof b == "function" ? b.apply(this, arguments) : b
      ), t.apply(this, arguments), s);
    }, null, M);
  }, w.translateTo = function(k, I, b, M, A) {
    w.transform(k, function() {
      var D = t.apply(this, arguments), Y = this.__zoom, Z = M == null ? S(D) : typeof M == "function" ? M.apply(this, arguments) : M;
      return n(_i.translate(Z[0], Z[1]).scale(Y.k).translate(
        typeof I == "function" ? -I.apply(this, arguments) : -I,
        typeof b == "function" ? -b.apply(this, arguments) : -b
      ), D, s);
    }, M, A);
  };
  function v(k, I) {
    return I = Math.max(i[0], Math.min(i[1], I)), I === k.k ? k : new rn(I, k.x, k.y);
  }
  function E(k, I, b) {
    var M = I[0] - b[0] * k.k, A = I[1] - b[1] * k.k;
    return M === k.x && A === k.y ? k : new rn(k.k, M, A);
  }
  function S(k) {
    return [(+k[0][0] + +k[1][0]) / 2, (+k[0][1] + +k[1][1]) / 2];
  }
  function x(k, I, b, M) {
    k.on("start.zoom", function() {
      P(this, arguments).event(M).start();
    }).on("interrupt.zoom end.zoom", function() {
      P(this, arguments).event(M).end();
    }).tween("zoom", function() {
      var A = this, D = arguments, Y = P(A, D).event(M), Z = t.apply(A, D), Q = b == null ? S(Z) : typeof b == "function" ? b.apply(A, D) : b, G = Math.max(Z[1][0] - Z[0][0], Z[1][1] - Z[0][1]), F = A.__zoom, ne = typeof I == "function" ? I.apply(A, D) : I, fe = u(F.invert(Q).concat(G / F.k), ne.invert(Q).concat(G / ne.k));
      return function(re) {
        if (re === 1) re = ne;
        else {
          var ke = fe(re), j = G / ke[2];
          re = new rn(j, Q[0] - ke[0] * j, Q[1] - ke[1] * j);
        }
        Y.zoom(null, re);
      };
    });
  }
  function P(k, I, b) {
    return !b && k.__zooming || new N(k, I);
  }
  function N(k, I) {
    this.that = k, this.args = I, this.active = 0, this.sourceEvent = null, this.extent = t.apply(k, I), this.taps = 0;
  }
  N.prototype = {
    event: function(k) {
      return k && (this.sourceEvent = k), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(k, I) {
      return this.mouse && k !== "mouse" && (this.mouse[1] = I.invert(this.mouse[0])), this.touch0 && k !== "touch" && (this.touch0[1] = I.invert(this.touch0[0])), this.touch1 && k !== "touch" && (this.touch1[1] = I.invert(this.touch1[0])), this.that.__zoom = I, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(k) {
      var I = Mt(this.that).datum();
      a.call(
        k,
        this.that,
        new E0(k, {
          sourceEvent: this.sourceEvent,
          target: w,
          type: k,
          transform: this.that.__zoom,
          dispatch: a
        }),
        I
      );
    }
  };
  function O(k, ...I) {
    if (!e.apply(this, arguments)) return;
    var b = P(this, I).event(k), M = this.__zoom, A = Math.max(i[0], Math.min(i[1], M.k * Math.pow(2, r.apply(this, arguments)))), D = Tt(k);
    if (b.wheel)
      (b.mouse[0][0] !== D[0] || b.mouse[0][1] !== D[1]) && (b.mouse[1] = M.invert(b.mouse[0] = D)), clearTimeout(b.wheel);
    else {
      if (M.k === A) return;
      b.mouse = [D, M.invert(D)], To(this), b.start();
    }
    Ar(k), b.wheel = setTimeout(Y, y), b.zoom("mouse", n(E(v(M, A), b.mouse[0], b.mouse[1]), b.extent, s));
    function Y() {
      b.wheel = null, b.end();
    }
  }
  function T(k, ...I) {
    if (f || !e.apply(this, arguments)) return;
    var b = k.currentTarget, M = P(this, I, !0).event(k), A = Mt(k.view).on("mousemove.zoom", Q, !0).on("mouseup.zoom", G, !0), D = Tt(k, b), Y = k.clientX, Z = k.clientY;
    xc(k.view), Ii(k), M.mouse = [D, this.__zoom.invert(D)], To(this), M.start();
    function Q(F) {
      if (Ar(F), !M.moved) {
        var ne = F.clientX - Y, fe = F.clientY - Z;
        M.moved = ne * ne + fe * fe > _;
      }
      M.event(F).zoom("mouse", n(E(M.that.__zoom, M.mouse[0] = Tt(F, b), M.mouse[1]), M.extent, s));
    }
    function G(F) {
      A.on("mousemove.zoom mouseup.zoom", null), Cc(F.view, M.moved), Ar(F), M.event(F).end();
    }
  }
  function L(k, ...I) {
    if (e.apply(this, arguments)) {
      var b = this.__zoom, M = Tt(k.changedTouches ? k.changedTouches[0] : k, this), A = b.invert(M), D = b.k * (k.shiftKey ? 0.5 : 2), Y = n(E(v(b, D), M, A), t.apply(this, I), s);
      Ar(k), l > 0 ? Mt(this).transition().duration(l).call(x, Y, M, k) : Mt(this).call(w.transform, Y, M, k);
    }
  }
  function V(k, ...I) {
    if (e.apply(this, arguments)) {
      var b = k.touches, M = b.length, A = P(this, I, k.changedTouches.length === M).event(k), D, Y, Z, Q;
      for (Ii(k), Y = 0; Y < M; ++Y)
        Z = b[Y], Q = Tt(Z, this), Q = [Q, this.__zoom.invert(Q), Z.identifier], A.touch0 ? !A.touch1 && A.touch0[2] !== Q[2] && (A.touch1 = Q, A.taps = 0) : (A.touch0 = Q, D = !0, A.taps = 1 + !!c);
      c && (c = clearTimeout(c)), D && (A.taps < 2 && (d = Q[0], c = setTimeout(function() {
        c = null;
      }, h)), To(this), A.start());
    }
  }
  function $(k, ...I) {
    if (this.__zooming) {
      var b = P(this, I).event(k), M = k.changedTouches, A = M.length, D, Y, Z, Q;
      for (Ar(k), D = 0; D < A; ++D)
        Y = M[D], Z = Tt(Y, this), b.touch0 && b.touch0[2] === Y.identifier ? b.touch0[0] = Z : b.touch1 && b.touch1[2] === Y.identifier && (b.touch1[0] = Z);
      if (Y = b.that.__zoom, b.touch1) {
        var G = b.touch0[0], F = b.touch0[1], ne = b.touch1[0], fe = b.touch1[1], re = (re = ne[0] - G[0]) * re + (re = ne[1] - G[1]) * re, ke = (ke = fe[0] - F[0]) * ke + (ke = fe[1] - F[1]) * ke;
        Y = v(Y, Math.sqrt(re / ke)), Z = [(G[0] + ne[0]) / 2, (G[1] + ne[1]) / 2], Q = [(F[0] + fe[0]) / 2, (F[1] + fe[1]) / 2];
      } else if (b.touch0) Z = b.touch0[0], Q = b.touch0[1];
      else return;
      b.zoom("touch", n(E(Y, Z, Q), b.extent, s));
    }
  }
  function H(k, ...I) {
    if (this.__zooming) {
      var b = P(this, I).event(k), M = k.changedTouches, A = M.length, D, Y;
      for (Ii(k), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, h), D = 0; D < A; ++D)
        Y = M[D], b.touch0 && b.touch0[2] === Y.identifier ? delete b.touch0 : b.touch1 && b.touch1[2] === Y.identifier && delete b.touch1;
      if (b.touch1 && !b.touch0 && (b.touch0 = b.touch1, delete b.touch1), b.touch0) b.touch0[1] = this.__zoom.invert(b.touch0[0]);
      else if (b.end(), b.taps === 2 && (Y = Tt(Y, this), Math.hypot(d[0] - Y[0], d[1] - Y[1]) < C)) {
        var Z = Mt(this).on("dblclick.zoom");
        Z && Z.apply(this, arguments);
      }
    }
  }
  return w.wheelDelta = function(k) {
    return arguments.length ? (r = typeof k == "function" ? k : Co(+k), w) : r;
  }, w.filter = function(k) {
    return arguments.length ? (e = typeof k == "function" ? k : Co(!!k), w) : e;
  }, w.touchable = function(k) {
    return arguments.length ? (o = typeof k == "function" ? k : Co(!!k), w) : o;
  }, w.extent = function(k) {
    return arguments.length ? (t = typeof k == "function" ? k : Co([[+k[0][0], +k[0][1]], [+k[1][0], +k[1][1]]]), w) : t;
  }, w.scaleExtent = function(k) {
    return arguments.length ? (i[0] = +k[0], i[1] = +k[1], w) : [i[0], i[1]];
  }, w.translateExtent = function(k) {
    return arguments.length ? (s[0][0] = +k[0][0], s[1][0] = +k[1][0], s[0][1] = +k[0][1], s[1][1] = +k[1][1], w) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, w.constrain = function(k) {
    return arguments.length ? (n = k, w) : n;
  }, w.duration = function(k) {
    return arguments.length ? (l = +k, w) : l;
  }, w.interpolate = function(k) {
    return arguments.length ? (u = k, w) : u;
  }, w.on = function() {
    var k = a.on.apply(a, arguments);
    return k === a ? w : k;
  }, w.clickDistance = function(k) {
    return arguments.length ? (_ = (k = +k) * k, w) : Math.sqrt(_);
  }, w.tapDistance = function(k) {
    return arguments.length ? (C = +k, w) : C;
  }, w;
}
const Cr = {
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
  error013: (e = "react") => `It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`
}, qo = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
];
var In;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(In || (In = {}));
var mn;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(mn || (mn = {}));
var Go;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(Go || (Go = {}));
const ds = {
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
var Jn;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Jn || (Jn = {}));
var Uo;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(Uo || (Uo = {}));
var we;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(we || (we = {}));
const Fl = {
  [we.Left]: we.Right,
  [we.Right]: we.Left,
  [we.Top]: we.Bottom,
  [we.Bottom]: we.Top
};
function T0(e, t) {
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
function Zl(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t != null && t.has(i) || r.push(o);
  }), r.length && n(r);
}
function A0(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const z0 = (e) => "id" in e && "source" in e && "target" in e, D0 = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), Ks = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), ao = (e, t = [0, 0]) => {
  const { width: n, height: r } = Pn(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, L0 = (e, t = { nodeOrigin: [0, 0], nodeLookup: void 0 }) => {
  if (process.env.NODE_ENV === "development" && !t.nodeLookup && console.warn("Please use `getNodesBounds` from `useReactFlow`/`useSvelteFlow` hook to ensure correct values for sub flows. If not possible, you have to provide a nodeLookup to support sub flows."), e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : Ks(o) ? o : t.nodeLookup.get(o.id));
    const l = s ? jo(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return bi(r, l);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return xi(n);
}, co = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = jo(r);
      n = bi(n, o);
    }
  }), xi(n);
}, Rc = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const l = {
    ...uo(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, u = [];
  for (const a of e.values()) {
    const { measured: c, selectable: d = !0, hidden: f = !1 } = a;
    if (s && !d || f)
      continue;
    const h = c.width ?? a.width ?? a.initialWidth ?? null, y = c.height ?? a.height ?? a.initialHeight ?? null, _ = Zr(l, dr(a)), C = (h ?? 0) * (y ?? 0), w = i && _ > 0;
    (!a.internals.handleBounds || w || _ >= C || a.dragging) && u.push(a);
  }
  return u;
}, fs = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function ql(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && ((t == null ? void 0 : t.includeHiddenNodes) || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function Gl({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!1);
  const l = co(e), u = Zs(l, t, n, (s == null ? void 0 : s.minZoom) ?? o, (s == null ? void 0 : s.maxZoom) ?? i, (s == null ? void 0 : s.padding) ?? 0.1);
  return await r.setViewport(u, { duration: s == null ? void 0 : s.duration }), Promise.resolve(!0);
}
function I0({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), l = s.parentId ? n.get(s.parentId) : void 0, { x: u, y: a } = l ? l.internals.positionAbsolute : { x: 0, y: 0 }, c = s.origin ?? r;
  let d = o;
  if (s.extent === "parent" && !s.expandParent)
    if (!l)
      i == null || i("005", Cr.error005());
    else {
      const h = l.measured.width, y = l.measured.height;
      h && y && (d = [
        [u, a],
        [u + h, a + y]
      ]);
    }
  else l && fr(s.extent) && (d = [
    [s.extent[0][0] + u, s.extent[0][1] + a],
    [s.extent[1][0] + u, s.extent[1][1] + a]
  ]);
  const f = fr(d) ? Hn(t, d, s.measured) : t;
  return {
    position: {
      x: f.x - u + s.measured.width * c[0],
      y: f.y - a + s.measured.height * c[1]
    },
    positionAbsolute: f
  };
}
async function Vc({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((f) => f.id)), s = [];
  for (const f of n) {
    if (f.deletable === !1)
      continue;
    const h = i.has(f.id), y = !h && f.parentId && s.find((_) => _.id === f.parentId);
    (h || y) && s.push(f);
  }
  const l = new Set(t.map((f) => f.id)), u = r.filter((f) => f.deletable !== !1), c = fs(s, u);
  for (const f of u)
    l.has(f.id) && !c.find((y) => y.id === f.id) && c.push(f);
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
const ur = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), Hn = (e = { x: 0, y: 0 }, t, n) => ({
  x: ur(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: ur(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function Yc(e, t, n) {
  const { width: r, height: o } = Pn(n), { x: i, y: s } = n.internals.positionAbsolute;
  return Hn(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const Ul = (e, t, n) => e < t ? ur(Math.abs(e - t), 1, t) / t : e > n ? -ur(Math.abs(e - n), 1, t) / t : 0, Bc = (e, t, n = 15, r = 40) => {
  const o = Ul(e.x, r, t.width - r) * n, i = Ul(e.y, r, t.height - r) * n;
  return [o, i];
}, bi = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), hs = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), xi = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), dr = (e, t = [0, 0]) => {
  var o, i;
  const { x: n, y: r } = Ks(e) ? e.internals.positionAbsolute : ao(e, t);
  return {
    x: n,
    y: r,
    width: ((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, jo = (e, t = [0, 0]) => {
  var o, i;
  const { x: n, y: r } = Ks(e) ? e.internals.positionAbsolute : ao(e, t);
  return {
    x: n,
    y: r,
    x2: n + (((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, Xc = (e, t) => xi(bi(hs(e), hs(t))), Zr = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, jl = (e) => on(e.width) && on(e.height) && on(e.x) && on(e.y), on = (e) => !isNaN(e) && isFinite(e), Wc = (e, t) => {
  process.env.NODE_ENV === "development" && console.warn(`[React Flow]: ${t} Help: https://reactflow.dev/error#${e}`);
}, Fs = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), uo = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const l = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? Fs(l, s) : l;
}, Kc = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
}), Zs = (e, t, n, r, o, i) => {
  const s = t / (e.width * (1 + i)), l = n / (e.height * (1 + i)), u = Math.min(s, l), a = ur(u, r, o), c = e.x + e.width / 2, d = e.y + e.height / 2, f = t / 2 - c * a, h = n / 2 - d * a;
  return { x: f, y: h, zoom: a };
}, Jo = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function fr(e) {
  return e !== void 0 && e !== "parent";
}
function Pn(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function Fc(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function H0(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const l = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * l[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * l[1];
  }
  return i;
}
function Hi(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = ln(e), l = uo({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: s - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: u, y: a } = n ? Fs(l, t) : l;
  return {
    xSnapped: u,
    ySnapped: a,
    ...l
  };
}
const qs = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), $0 = (e) => {
  var t;
  return ((t = e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, R0 = ["INPUT", "SELECT", "TEXTAREA"];
function V0(e) {
  var r, o, i;
  const t = ((o = (r = e.composedPath) == null ? void 0 : r.call(e)) == null ? void 0 : o[0]) || e.target;
  return R0.includes(t == null ? void 0 : t.nodeName) || ((i = t == null ? void 0 : t.hasAttribute) == null ? void 0 : i.call(t, "contenteditable")) || !!(t != null && t.closest(".nokey"));
}
const Zc = (e) => "clientX" in e, ln = (e, t) => {
  var i, s;
  const n = Zc(e), r = n ? e.clientX : (i = e.touches) == null ? void 0 : i[0].clientX, o = n ? e.clientY : (s = e.touches) == null ? void 0 : s[0].clientY;
  return {
    x: r - ((t == null ? void 0 : t.left) ?? 0),
    y: o - ((t == null ? void 0 : t.top) ?? 0)
  };
}, Jl = (e, t, n, r, o) => {
  const i = t.querySelectorAll(`.${e}`);
  return !i || !i.length ? null : Array.from(i).map((s) => {
    const l = s.getBoundingClientRect();
    return {
      id: s.getAttribute("data-handleid"),
      type: e,
      nodeId: o,
      position: s.getAttribute("data-handlepos"),
      x: (l.left - n.left) / r,
      y: (l.top - n.top) / r,
      ...qs(s)
    };
  });
};
function Y0({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: l }) {
  const u = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, a = t * 0.125 + i * 0.375 + l * 0.375 + r * 0.125, c = Math.abs(u - e), d = Math.abs(a - t);
  return [u, a, c, d];
}
function ko(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Ql({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case we.Left:
      return [t - ko(t - r, i), n];
    case we.Right:
      return [t + ko(r - t, i), n];
    case we.Top:
      return [t, n - ko(n - o, i)];
    case we.Bottom:
      return [t, n + ko(o - n, i)];
  }
}
function qc({ sourceX: e, sourceY: t, sourcePosition: n = we.Bottom, targetX: r, targetY: o, targetPosition: i = we.Top, curvature: s = 0.25 }) {
  const [l, u] = Ql({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [a, c] = Ql({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [d, f, h, y] = Y0({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: o,
    sourceControlX: l,
    sourceControlY: u,
    targetControlX: a,
    targetControlY: c
  });
  return [
    `M${e},${t} C${l},${u} ${a},${c} ${r},${o}`,
    d,
    f,
    h,
    y
  ];
}
function Gc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, l = r < t ? r + s : r - s;
  return [i, l, o, s];
}
function B0({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const i = n || t.selected || e.selected, s = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (i ? s : 0);
}
function X0({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = bi(jo(e), jo(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Zr(s, xi(i)) > 0;
}
const W0 = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, K0 = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), F0 = (e, t) => {
  if (!e.source || !e.target)
    return Wc("006", Cr.error006()), t;
  let n;
  return z0(e) ? n = { ...e } : n = {
    ...e,
    id: W0(e)
  }, K0(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function gs({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, l] = Gc({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, l];
}
const ea = {
  [we.Left]: { x: -1, y: 0 },
  [we.Right]: { x: 1, y: 0 },
  [we.Top]: { x: 0, y: -1 },
  [we.Bottom]: { x: 0, y: 1 }
}, Z0 = ({ source: e, sourcePosition: t = we.Bottom, target: n }) => t === we.Left || t === we.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, ta = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function q0({ source: e, sourcePosition: t = we.Bottom, target: n, targetPosition: r = we.Top, center: o, offset: i }) {
  const s = ea[t], l = ea[r], u = { x: e.x + s.x * i, y: e.y + s.y * i }, a = { x: n.x + l.x * i, y: n.y + l.y * i }, c = Z0({
    source: u,
    sourcePosition: t,
    target: a
  }), d = c.x !== 0 ? "x" : "y", f = c[d];
  let h = [], y, _;
  const C = { x: 0, y: 0 }, w = { x: 0, y: 0 }, [v, E, S, x] = Gc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (s[d] * l[d] === -1) {
    y = o.x ?? v, _ = o.y ?? E;
    const N = [
      { x: y, y: u.y },
      { x: y, y: a.y }
    ], O = [
      { x: u.x, y: _ },
      { x: a.x, y: _ }
    ];
    s[d] === f ? h = d === "x" ? N : O : h = d === "x" ? O : N;
  } else {
    const N = [{ x: u.x, y: a.y }], O = [{ x: a.x, y: u.y }];
    if (d === "x" ? h = s.x === f ? O : N : h = s.y === f ? N : O, t === r) {
      const H = Math.abs(e[d] - n[d]);
      if (H <= i) {
        const k = Math.min(i - 1, i - H);
        s[d] === f ? C[d] = (u[d] > e[d] ? -1 : 1) * k : w[d] = (a[d] > n[d] ? -1 : 1) * k;
      }
    }
    if (t !== r) {
      const H = d === "x" ? "y" : "x", k = s[d] === l[H], I = u[H] > a[H], b = u[H] < a[H];
      (s[d] === 1 && (!k && I || k && b) || s[d] !== 1 && (!k && b || k && I)) && (h = d === "x" ? N : O);
    }
    const T = { x: u.x + C.x, y: u.y + C.y }, L = { x: a.x + w.x, y: a.y + w.y }, V = Math.max(Math.abs(T.x - h[0].x), Math.abs(L.x - h[0].x)), $ = Math.max(Math.abs(T.y - h[0].y), Math.abs(L.y - h[0].y));
    V >= $ ? (y = (T.x + L.x) / 2, _ = h[0].y) : (y = h[0].x, _ = (T.y + L.y) / 2);
  }
  return [[
    e,
    { x: u.x + C.x, y: u.y + C.y },
    ...h,
    { x: a.x + w.x, y: a.y + w.y },
    n
  ], y, _, S, x];
}
function G0(e, t, n, r) {
  const o = Math.min(ta(e, t) / 2, ta(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const a = e.x < n.x ? -1 : 1, c = e.y < n.y ? 1 : -1;
    return `L ${i + o * a},${s}Q ${i},${s} ${i},${s + o * c}`;
  }
  const l = e.x < n.x ? 1 : -1, u = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * u}Q ${i},${s} ${i + o * l},${s}`;
}
function Qo({ sourceX: e, sourceY: t, sourcePosition: n = we.Bottom, targetX: r, targetY: o, targetPosition: i = we.Top, borderRadius: s = 5, centerX: l, centerY: u, offset: a = 20 }) {
  const [c, d, f, h, y] = q0({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: l, y: u },
    offset: a
  });
  return [c.reduce((C, w, v) => {
    let E = "";
    return v > 0 && v < c.length - 1 ? E = G0(c[v - 1], w, c[v + 1], s) : E = `${v === 0 ? "M" : "L"}${w.x} ${w.y}`, C += E, C;
  }, ""), d, f, h, y];
}
function na(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function U0(e) {
  var d;
  const { sourceNode: t, targetNode: n } = e;
  if (!na(t) || !na(n))
    return null;
  const r = t.internals.handleBounds || ra(t.handles), o = n.internals.handleBounds || ra(n.handles), i = oa((r == null ? void 0 : r.source) ?? [], e.sourceHandle), s = oa(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === In.Strict ? (o == null ? void 0 : o.target) ?? [] : ((o == null ? void 0 : o.target) ?? []).concat((o == null ? void 0 : o.source) ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return (d = e.onError) == null || d.call(e, "008", Cr.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const l = (i == null ? void 0 : i.position) || we.Bottom, u = (s == null ? void 0 : s.position) || we.Top, a = qr(t, i, l), c = qr(n, s, u);
  return {
    sourceX: a.x,
    sourceY: a.y,
    targetX: c.x,
    targetY: c.y,
    sourcePosition: l,
    targetPosition: u
  };
}
function ra(e) {
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
function qr(e, t, n = we.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: s, height: l } = t ?? Pn(e);
  if (r)
    return { x: o + s / 2, y: i + l / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case we.Top:
      return { x: o + s / 2, y: i };
    case we.Right:
      return { x: o + s, y: i + l / 2 };
    case we.Bottom:
      return { x: o + s / 2, y: i + l };
    case we.Left:
      return { x: o, y: i + l / 2 };
  }
}
function oa(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function vs(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function j0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, l) => ([l.markerStart || r, l.markerEnd || o].forEach((u) => {
    if (u && typeof u == "object") {
      const a = vs(u, t);
      i.has(a) || (s.push({ id: a, color: u.color || n, ...u }), i.add(a));
    }
  }), s), []).sort((s, l) => s.id.localeCompare(l.id));
}
const Gs = {
  nodeOrigin: [0, 0],
  nodeExtent: qo,
  elevateNodesOnSelect: !0,
  defaults: {}
}, J0 = {
  ...Gs,
  checkEquality: !0
};
function Us(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function Q0(e, t, n) {
  const r = Us(Gs, n);
  for (const o of e.values())
    if (o.parentId)
      js(o, e, t, r);
    else {
      const i = ao(o, r.nodeOrigin), s = fr(o.extent) ? o.extent : r.nodeExtent, l = Hn(i, s, Pn(o));
      o.internals.positionAbsolute = l;
    }
}
function Uc(e, t, n, r) {
  var l, u;
  const o = Us(J0, r), i = new Map(t), s = o != null && o.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const a of e) {
    let c = i.get(a.id);
    if (o.checkEquality && a === (c == null ? void 0 : c.internals.userNode))
      t.set(a.id, c);
    else {
      const d = ao(a, o.nodeOrigin), f = fr(a.extent) ? a.extent : o.nodeExtent, h = Hn(d, f, Pn(a));
      c = {
        ...o.defaults,
        ...a,
        measured: {
          width: (l = a.measured) == null ? void 0 : l.width,
          height: (u = a.measured) == null ? void 0 : u.height
        },
        internals: {
          positionAbsolute: h,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: a.measured ? c == null ? void 0 : c.internals.handleBounds : void 0,
          z: jc(a, s),
          userNode: a
        }
      }, t.set(a.id, c);
    }
    a.parentId && js(c, t, n, r);
  }
}
function e1(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function js(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: s } = Us(Gs, r), l = e.parentId, u = t.get(l);
  if (!u) {
    console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  e1(e, n);
  const a = o ? 1e3 : 0, { x: c, y: d, z: f } = t1(e, u, i, s, a), { positionAbsolute: h } = e.internals, y = c !== h.x || d !== h.y;
  (y || f !== e.internals.z) && (e.internals = {
    ...e.internals,
    positionAbsolute: y ? { x: c, y: d } : h,
    z: f
  });
}
function jc(e, t) {
  return (on(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function t1(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, l = Pn(e), u = ao(e, n), a = fr(e.extent) ? Hn(u, e.extent, l) : u;
  let c = Hn({ x: i + a.x, y: s + a.y }, r, l);
  e.extent === "parent" && (c = Yc(c, l, t));
  const d = jc(e, o), f = t.internals.z ?? 0;
  return {
    x: c.x,
    y: c.y,
    z: f > d ? f : d
  };
}
function n1(e, t, n, r = [0, 0]) {
  var s;
  const o = [], i = /* @__PURE__ */ new Map();
  for (const l of e) {
    const u = t.get(l.parentId);
    if (!u)
      continue;
    const a = ((s = i.get(l.parentId)) == null ? void 0 : s.expandedRect) ?? dr(u), c = Xc(a, l.rect);
    i.set(l.parentId, { expandedRect: c, parent: u });
  }
  return i.size > 0 && i.forEach(({ expandedRect: l, parent: u }, a) => {
    var E;
    const c = u.internals.positionAbsolute, d = Pn(u), f = u.origin ?? r, h = l.x < c.x ? Math.round(Math.abs(c.x - l.x)) : 0, y = l.y < c.y ? Math.round(Math.abs(c.y - l.y)) : 0, _ = Math.max(d.width, Math.round(l.width)), C = Math.max(d.height, Math.round(l.height)), w = (_ - d.width) * f[0], v = (C - d.height) * f[1];
    (h > 0 || y > 0 || w || v) && (o.push({
      id: a,
      type: "position",
      position: {
        x: u.position.x - h + w,
        y: u.position.y - y + v
      }
    }), (E = n.get(a)) == null || E.forEach((S) => {
      e.some((x) => x.id === S.id) || o.push({
        id: S.id,
        type: "position",
        position: {
          x: S.position.x + h,
          y: S.position.y + y
        }
      });
    })), (d.width < l.width || d.height < l.height || h || y) && o.push({
      id: a,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: _ + (h ? f[0] * h - w : 0),
        height: C + (y ? f[1] * y - v : 0)
      }
    });
  }), o;
}
function r1(e, t, n, r, o, i) {
  const s = r == null ? void 0 : r.querySelector(".xyflow__viewport");
  let l = !1;
  if (!s)
    return { changes: [], updatedInternals: l };
  const u = [], a = window.getComputedStyle(s), { m22: c } = new window.DOMMatrixReadOnly(a.transform), d = [];
  for (const f of e.values()) {
    const h = t.get(f.id);
    if (h)
      if (h.hidden)
        h.internals = {
          ...h.internals,
          handleBounds: void 0
        }, l = !0;
      else {
        const y = qs(f.nodeElement), _ = h.measured.width !== y.width || h.measured.height !== y.height;
        if (!!(y.width && y.height && (_ || !h.internals.handleBounds || f.force))) {
          const w = f.nodeElement.getBoundingClientRect(), v = fr(h.extent) ? h.extent : i;
          let { positionAbsolute: E } = h.internals;
          h.parentId && h.extent === "parent" ? E = Yc(E, y, t.get(h.parentId)) : v && (E = Hn(E, v, y)), h.measured = y, h.internals = {
            ...h.internals,
            positionAbsolute: E,
            handleBounds: {
              source: Jl("source", f.nodeElement, w, c, h.id),
              target: Jl("target", f.nodeElement, w, c, h.id)
            }
          }, h.parentId && js(h, t, n, { nodeOrigin: o }), l = !0, _ && (u.push({
            id: h.id,
            type: "dimensions",
            dimensions: y
          }), h.expandParent && h.parentId && d.push({
            id: h.id,
            parentId: h.parentId,
            rect: dr(h, o)
          }));
        }
      }
  }
  if (d.length > 0) {
    const f = n1(d, t, n, o);
    u.push(...f);
  }
  return { changes: u, updatedInternals: l };
}
async function o1({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
  if (!t || !e.x && !e.y)
    return Promise.resolve(!1);
  const s = await t.setViewportConstrained({
    x: n[0] + e.x,
    y: n[1] + e.y,
    zoom: n[2]
  }, [
    [0, 0],
    [o, i]
  ], r), l = !!s && (s.x !== n[0] || s.y !== n[1] || s.k !== n[2]);
  return Promise.resolve(l);
}
function Jc(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: l = null } = r, u = `${o}-source-${s}`, a = `${i}-target-${l}`, c = e.get(u) || /* @__PURE__ */ new Map(), d = e.get(a) || /* @__PURE__ */ new Map(), f = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: l };
    t.set(r.id, r), e.set(u, c.set(`${i}-${l}`, f)), e.set(a, d.set(`${o}-${s}`, f));
  }
}
function Qc(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : Qc(n, t) : !1;
}
function ia(e, t, n) {
  let r = e;
  do {
    if (r != null && r.matches(t))
      return !0;
    if (r === n)
      return !1;
    r = r.parentElement;
  } while (r);
  return !1;
}
function i1(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !Qc(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
      const l = e.get(i);
      l && o.set(i, {
        id: i,
        position: l.position || { x: 0, y: 0 },
        distance: {
          x: n.x - l.internals.positionAbsolute.x,
          y: n.y - l.internals.positionAbsolute.y
        },
        extent: l.extent,
        parentId: l.parentId,
        origin: l.origin,
        expandParent: l.expandParent,
        internals: {
          positionAbsolute: l.internals.positionAbsolute || { x: 0, y: 0 }
        },
        measured: {
          width: l.measured.width ?? 0,
          height: l.measured.height ?? 0
        }
      });
    }
  return o;
}
function $i({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
  var s, l, u;
  const o = [];
  for (const [a, c] of t) {
    const d = (s = n.get(a)) == null ? void 0 : s.internals.userNode;
    d && o.push({
      ...d,
      position: c.position,
      dragging: r
    });
  }
  if (!e)
    return [o[0], o];
  const i = (l = n.get(e)) == null ? void 0 : l.internals.userNode;
  return [
    i ? {
      ...i,
      position: ((u = t.get(e)) == null ? void 0 : u.position) || i.position,
      dragging: r
    } : o[0],
    o
  ];
}
function s1({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, l = /* @__PURE__ */ new Map(), u = !1, a = { x: 0, y: 0 }, c = null, d = !1, f = null, h = !1;
  function y({ noDragClassName: C, handleSelector: w, domNode: v, isSelectable: E, nodeId: S, nodeClickDistance: x = 0 }) {
    f = Mt(v);
    function P({ x: L, y: V }, $) {
      const { nodeLookup: H, nodeExtent: k, snapGrid: I, snapToGrid: b, nodeOrigin: M, onNodeDrag: A, onSelectionDrag: D, onError: Y, updateNodePositions: Z } = t();
      i = { x: L, y: V };
      let Q = !1, G = { x: 0, y: 0, x2: 0, y2: 0 };
      if (l.size > 1 && k) {
        const F = co(l);
        G = hs(F);
      }
      for (const [F, ne] of l) {
        if (!H.has(F))
          continue;
        let fe = { x: L - ne.distance.x, y: V - ne.distance.y };
        b && (fe = Fs(fe, I));
        let re = [
          [k[0][0], k[0][1]],
          [k[1][0], k[1][1]]
        ];
        if (l.size > 1 && k && !ne.extent) {
          const { positionAbsolute: ee } = ne.internals, he = ee.x - G.x + k[0][0], _e = ee.x + ne.measured.width - G.x2 + k[1][0], Ve = ee.y - G.y + k[0][1], q = ee.y + ne.measured.height - G.y2 + k[1][1];
          re = [
            [he, Ve],
            [_e, q]
          ];
        }
        const { position: ke, positionAbsolute: j } = I0({
          nodeId: F,
          nextPosition: fe,
          nodeLookup: H,
          nodeExtent: re,
          nodeOrigin: M,
          onError: Y
        });
        Q = Q || ne.position.x !== ke.x || ne.position.y !== ke.y, ne.position = ke, ne.internals.positionAbsolute = j;
      }
      if (Q && (Z(l, !0), $ && (r || A || !S && D))) {
        const [F, ne] = $i({
          nodeId: S,
          dragItems: l,
          nodeLookup: H
        });
        r == null || r($, l, F, ne), A == null || A($, F, ne), S || D == null || D($, ne);
      }
    }
    async function N() {
      if (!c)
        return;
      const { transform: L, panBy: V, autoPanSpeed: $ } = t(), [H, k] = Bc(a, c, $);
      (H !== 0 || k !== 0) && (i.x = (i.x ?? 0) - H / L[2], i.y = (i.y ?? 0) - k / L[2], await V({ x: H, y: k }) && P(i, null)), s = requestAnimationFrame(N);
    }
    function O(L) {
      var Q;
      const { nodeLookup: V, multiSelectionActive: $, nodesDraggable: H, transform: k, snapGrid: I, snapToGrid: b, selectNodesOnDrag: M, onNodeDragStart: A, onSelectionDragStart: D, unselectNodesAndEdges: Y } = t();
      d = !0, (!M || !E) && !$ && S && ((Q = V.get(S)) != null && Q.selected || Y()), E && M && S && (e == null || e(S));
      const Z = Hi(L.sourceEvent, { transform: k, snapGrid: I, snapToGrid: b, containerBounds: c });
      if (i = Z, l = i1(V, H, Z, S), l.size > 0 && (n || A || !S && D)) {
        const [G, F] = $i({
          nodeId: S,
          dragItems: l,
          nodeLookup: V
        });
        n == null || n(L.sourceEvent, l, G, F), A == null || A(L.sourceEvent, G, F), S || D == null || D(L.sourceEvent, F);
      }
    }
    const T = Yg().clickDistance(x).on("start", (L) => {
      const { domNode: V, nodeDragThreshold: $, transform: H, snapGrid: k, snapToGrid: I } = t();
      c = (V == null ? void 0 : V.getBoundingClientRect()) || null, h = !1, $ === 0 && O(L), i = Hi(L.sourceEvent, { transform: H, snapGrid: k, snapToGrid: I, containerBounds: c }), a = ln(L.sourceEvent, c);
    }).on("drag", (L) => {
      const { autoPanOnNodeDrag: V, transform: $, snapGrid: H, snapToGrid: k, nodeDragThreshold: I, nodeLookup: b } = t(), M = Hi(L.sourceEvent, { transform: $, snapGrid: H, snapToGrid: k, containerBounds: c });
      if ((L.sourceEvent.type === "touchmove" && L.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      S && !b.has(S)) && (h = !0), !h) {
        if (!u && V && d && (u = !0, N()), !d) {
          const A = M.xSnapped - (i.x ?? 0), D = M.ySnapped - (i.y ?? 0);
          Math.sqrt(A * A + D * D) > I && O(L);
        }
        (i.x !== M.xSnapped || i.y !== M.ySnapped) && l && d && (a = ln(L.sourceEvent, c), P(M, L.sourceEvent));
      }
    }).on("end", (L) => {
      if (!(!d || h) && (u = !1, d = !1, cancelAnimationFrame(s), l.size > 0)) {
        const { nodeLookup: V, updateNodePositions: $, onNodeDragStop: H, onSelectionDragStop: k } = t();
        if ($(l, !1), o || H || !S && k) {
          const [I, b] = $i({
            nodeId: S,
            dragItems: l,
            nodeLookup: V,
            dragging: !1
          });
          o == null || o(L.sourceEvent, l, I, b), H == null || H(L.sourceEvent, I, b), S || k == null || k(L.sourceEvent, b);
        }
      }
    }).filter((L) => {
      const V = L.target;
      return !L.button && (!C || !ia(V, `.${C}`, v)) && (!w || ia(V, w, v));
    });
    f.call(T);
  }
  function _() {
    f == null || f.on(".drag", null);
  }
  return {
    update: y,
    destroy: _
  };
}
function l1(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    Zr(o, dr(i)) > 0 && r.push(i);
  return r;
}
const a1 = 250;
function c1(e, t, n, r) {
  var l, u;
  let o = [], i = 1 / 0;
  const s = l1(e, n, t + a1);
  for (const a of s) {
    const c = [...((l = a.internals.handleBounds) == null ? void 0 : l.source) ?? [], ...((u = a.internals.handleBounds) == null ? void 0 : u.target) ?? []];
    for (const d of c) {
      if (r.nodeId === d.nodeId && r.type === d.type && r.id === d.id)
        continue;
      const { x: f, y: h } = qr(a, d, d.position, !0), y = Math.sqrt(Math.pow(f - e.x, 2) + Math.pow(h - e.y, 2));
      y > t || (y < i ? (o = [{ ...d, x: f, y: h }], i = y) : y === i && o.push({ ...d, x: f, y: h }));
    }
  }
  if (!o.length)
    return null;
  if (o.length > 1) {
    const a = r.type === "source" ? "target" : "source";
    return o.find((c) => c.type === a) ?? o[0];
  }
  return o[0];
}
function eu(e, t, n, r, o, i = !1) {
  var a, c, d;
  const s = r.get(e);
  if (!s)
    return null;
  const l = o === "strict" ? (a = s.internals.handleBounds) == null ? void 0 : a[t] : [...((c = s.internals.handleBounds) == null ? void 0 : c.source) ?? [], ...((d = s.internals.handleBounds) == null ? void 0 : d.target) ?? []], u = (n ? l == null ? void 0 : l.find((f) => f.id === n) : l == null ? void 0 : l[0]) ?? null;
  return u && i ? { ...u, ...qr(s, u, u.position, !0) } : u;
}
function tu(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function u1(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const nu = () => !0;
function d1(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: l, nodeLookup: u, lib: a, autoPanOnConnect: c, flowId: d, panBy: f, cancelConnection: h, onConnectStart: y, onConnect: _, onConnectEnd: C, isValidConnection: w = nu, onReconnectEnd: v, updateConnection: E, getTransform: S, getFromHandle: x, autoPanSpeed: P }) {
  const N = $0(e.target);
  let O = 0, T;
  const { x: L, y: V } = ln(e), $ = N == null ? void 0 : N.elementFromPoint(L, V), H = tu(i, $), k = l == null ? void 0 : l.getBoundingClientRect();
  if (!k || !H)
    return;
  const I = eu(o, H, r, u, t);
  if (!I)
    return;
  let b = ln(e, k), M = !1, A = null, D = !1, Y = null;
  function Z() {
    if (!c || !k)
      return;
    const [j, ee] = Bc(b, k, P);
    f({ x: j, y: ee }), O = requestAnimationFrame(Z);
  }
  const Q = {
    ...I,
    nodeId: o,
    type: H,
    position: I.position
  }, G = u.get(o), ne = {
    inProgress: !0,
    isValid: null,
    from: qr(G, Q, we.Left, !0),
    fromHandle: Q,
    fromPosition: Q.position,
    fromNode: G,
    to: b,
    toHandle: null,
    toPosition: Fl[Q.position],
    toNode: null
  };
  E(ne);
  let fe = ne;
  y == null || y(e, { nodeId: o, handleId: r, handleType: H });
  function re(j) {
    if (!x() || !Q) {
      ke(j);
      return;
    }
    const ee = S();
    b = ln(j, k), T = c1(uo(b, ee, !1, [1, 1]), n, u, Q), M || (Z(), M = !0);
    const he = ru(j, {
      handle: T,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: w,
      doc: N,
      lib: a,
      flowId: d,
      nodeLookup: u
    });
    Y = he.handleDomNode, A = he.connection, D = u1(!!T, he.isValid);
    const _e = {
      // from stays the same
      ...fe,
      isValid: D,
      to: T && D ? Kc({ x: T.x, y: T.y }, ee) : b,
      toHandle: he.toHandle,
      toPosition: D && he.toHandle ? he.toHandle.position : Fl[Q.position],
      toNode: he.toHandle ? u.get(he.toHandle.nodeId) : null
    };
    D && T && fe.toHandle && _e.toHandle && fe.toHandle.type === _e.toHandle.type && fe.toHandle.nodeId === _e.toHandle.nodeId && fe.toHandle.id === _e.toHandle.id && fe.to.x === _e.to.x && fe.to.y === _e.to.y || (E(_e), fe = _e);
  }
  function ke(j) {
    (T || Y) && A && D && (_ == null || _(A));
    const { inProgress: ee, ...he } = fe, _e = {
      ...he,
      toPosition: fe.toHandle ? fe.toPosition : null
    };
    C == null || C(j, _e), i && (v == null || v(j, _e)), h(), cancelAnimationFrame(O), M = !1, D = !1, A = null, Y = null, N.removeEventListener("mousemove", re), N.removeEventListener("mouseup", ke), N.removeEventListener("touchmove", re), N.removeEventListener("touchend", ke);
  }
  N.addEventListener("mousemove", re), N.addEventListener("mouseup", ke), N.addEventListener("touchmove", re), N.addEventListener("touchend", ke);
}
function ru(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: l, flowId: u, isValidConnection: a = nu, nodeLookup: c }) {
  const d = i === "target", f = t ? s.querySelector(`.${l}-flow__handle[data-id="${u}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: h, y } = ln(e), _ = s.elementFromPoint(h, y), C = _ != null && _.classList.contains(`${l}-flow__handle`) ? _ : f, w = {
    handleDomNode: C,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (C) {
    const v = tu(void 0, C), E = C.getAttribute("data-nodeid"), S = C.getAttribute("data-handleid"), x = C.classList.contains("connectable"), P = C.classList.contains("connectableend");
    if (!E || !v)
      return w;
    const N = {
      source: d ? E : r,
      sourceHandle: d ? S : o,
      target: d ? r : E,
      targetHandle: d ? o : S
    };
    w.connection = N;
    const T = x && P && (n === In.Strict ? d && v === "source" || !d && v === "target" : E !== r || S !== o);
    w.isValid = T && a(N), w.toHandle = eu(E, v, S, c, n, !1);
  }
  return w;
}
const f1 = {
  onPointerDown: d1,
  isValid: ru
};
function h1({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Mt(e);
  function i({ translateExtent: l, width: u, height: a, zoomStep: c = 10, pannable: d = !0, zoomable: f = !0, inversePan: h = !1 }) {
    const y = (E) => {
      const S = n();
      if (E.sourceEvent.type !== "wheel" || !t)
        return;
      const x = -E.sourceEvent.deltaY * (E.sourceEvent.deltaMode === 1 ? 0.05 : E.sourceEvent.deltaMode ? 1 : 2e-3) * c, P = S[2] * Math.pow(2, x);
      t.scaleTo(P);
    };
    let _ = [0, 0];
    const C = (E) => {
      (E.sourceEvent.type === "mousedown" || E.sourceEvent.type === "touchstart") && (_ = [
        E.sourceEvent.clientX ?? E.sourceEvent.touches[0].clientX,
        E.sourceEvent.clientY ?? E.sourceEvent.touches[0].clientY
      ]);
    }, w = (E) => {
      const S = n();
      if (E.sourceEvent.type !== "mousemove" && E.sourceEvent.type !== "touchmove" || !t)
        return;
      const x = [
        E.sourceEvent.clientX ?? E.sourceEvent.touches[0].clientX,
        E.sourceEvent.clientY ?? E.sourceEvent.touches[0].clientY
      ], P = [x[0] - _[0], x[1] - _[1]];
      _ = x;
      const N = r() * Math.max(S[2], Math.log(S[2])) * (h ? -1 : 1), O = {
        x: S[0] - P[0] * N,
        y: S[1] - P[1] * N
      }, T = [
        [0, 0],
        [u, a]
      ];
      t.setViewportConstrained({
        x: O.x,
        y: O.y,
        zoom: S[2]
      }, T, l);
    }, v = $c().on("start", C).on("zoom", d ? w : null).on("zoom.wheel", f ? y : null);
    o.call(v, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: Tt
  };
}
const g1 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Ci = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Ri = ({ x: e, y: t, zoom: n }) => _i.translate(e, t).scale(n), Kn = (e, t) => e.target.closest(`.${t}`), ou = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), Vi = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, iu = (e) => {
  const t = e.ctrlKey && Jo() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function v1({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: l, onPanZoom: u, onPanZoomEnd: a }) {
  return (c) => {
    if (Kn(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const d = n.property("__zoom").k || 1;
    if (c.ctrlKey && s) {
      const C = Tt(c), w = iu(c), v = d * Math.pow(2, w);
      r.scaleTo(n, v, C, c);
      return;
    }
    const f = c.deltaMode === 1 ? 20 : 1;
    let h = o === mn.Vertical ? 0 : c.deltaX * f, y = o === mn.Horizontal ? 0 : c.deltaY * f;
    !Jo() && c.shiftKey && o !== mn.Vertical && (h = c.deltaY * f, y = 0), r.translateBy(
      n,
      -(h / d) * i,
      -(y / d) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const _ = Ci(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, l == null || l(c, _)), e.isPanScrolling && (u == null || u(c, _), e.panScrollTimeout = setTimeout(() => {
      a == null || a(c, _), e.isPanScrolling = !1;
    }, 150));
  };
}
function y1({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    if (!t && r.type === "wheel" && !r.ctrlKey || Kn(r, e))
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function m1({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var i, s, l;
    if ((i = r.sourceEvent) != null && i.internal)
      return;
    const o = Ci(r.transform);
    e.mouseButton = ((s = r.sourceEvent) == null ? void 0 : s.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, ((l = r.sourceEvent) == null ? void 0 : l.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, o));
  };
}
function p1({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var s, l;
    e.usedRightMouseButton = !!(n && ou(t, e.mouseButton ?? 0)), (s = i.sourceEvent) != null && s.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((l = i.sourceEvent) != null && l.internal) && (o == null || o(i.sourceEvent, Ci(i.transform)));
  };
}
function w1({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    var l;
    if (!((l = s.sourceEvent) != null && l.internal) && (e.isZoomingOrPanning = !1, i && ou(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && g1(e.prevViewport, s.transform))) {
      const u = Ci(s.transform);
      e.prevViewport = u, clearTimeout(e.timerId), e.timerId = setTimeout(
        () => {
          o == null || o(s.sourceEvent, u);
        },
        // we need a setTimeout for panOnScroll to supress multiple end events fired during scroll
        n ? 150 : 0
      );
    }
  };
}
function _1({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: l, noPanClassName: u, lib: a }) {
  return (c) => {
    var y;
    const d = e || t, f = n && c.ctrlKey;
    if (c.button === 1 && c.type === "mousedown" && (Kn(c, `${a}-flow__node`) || Kn(c, `${a}-flow__edge`)))
      return !0;
    if (!r && !d && !o && !i && !n || s || Kn(c, l) && c.type === "wheel" || Kn(c, u) && (c.type !== "wheel" || o && c.type === "wheel" && !e) || !n && c.ctrlKey && c.type === "wheel")
      return !1;
    if (!n && c.type === "touchstart" && ((y = c.touches) == null ? void 0 : y.length) > 1)
      return c.preventDefault(), !1;
    if (!d && !o && !f && c.type === "wheel" || !r && (c.type === "mousedown" || c.type === "touchstart") || Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
      return !1;
    const h = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || c.type === "wheel") && h;
  };
}
function b1({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: s, onPanZoomStart: l, onPanZoomEnd: u, onDraggingChange: a }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), f = $c().clickDistance(!on(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), h = Mt(e).call(f);
  E({
    x: i.x,
    y: i.y,
    zoom: ur(i.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], o);
  const y = h.on("wheel.zoom"), _ = h.on("dblclick.zoom");
  f.wheelDelta(iu);
  function C($, H) {
    return h ? new Promise((k) => {
      f == null || f.transform(Vi(h, H == null ? void 0 : H.duration, () => k(!0)), $);
    }) : Promise.resolve(!1);
  }
  function w({ noWheelClassName: $, noPanClassName: H, onPaneContextMenu: k, userSelectionActive: I, panOnScroll: b, panOnDrag: M, panOnScrollMode: A, panOnScrollSpeed: D, preventScrolling: Y, zoomOnPinch: Z, zoomOnScroll: Q, zoomOnDoubleClick: G, zoomActivationKeyPressed: F, lib: ne, onTransformChange: fe }) {
    I && !c.isZoomingOrPanning && v();
    const ke = b && !F && !I ? v1({
      zoomPanValues: c,
      noWheelClassName: $,
      d3Selection: h,
      d3Zoom: f,
      panOnScrollMode: A,
      panOnScrollSpeed: D,
      zoomOnPinch: Z,
      onPanZoomStart: l,
      onPanZoom: s,
      onPanZoomEnd: u
    }) : y1({
      noWheelClassName: $,
      preventScrolling: Y,
      d3ZoomHandler: y
    });
    if (h.on("wheel.zoom", ke, { passive: !1 }), !I) {
      const ee = m1({
        zoomPanValues: c,
        onDraggingChange: a,
        onPanZoomStart: l
      });
      f.on("start", ee);
      const he = p1({
        zoomPanValues: c,
        panOnDrag: M,
        onPaneContextMenu: !!k,
        onPanZoom: s,
        onTransformChange: fe
      });
      f.on("zoom", he);
      const _e = w1({
        zoomPanValues: c,
        panOnDrag: M,
        panOnScroll: b,
        onPaneContextMenu: k,
        onPanZoomEnd: u,
        onDraggingChange: a
      });
      f.on("end", _e);
    }
    const j = _1({
      zoomActivationKeyPressed: F,
      panOnDrag: M,
      zoomOnScroll: Q,
      panOnScroll: b,
      zoomOnDoubleClick: G,
      zoomOnPinch: Z,
      userSelectionActive: I,
      noPanClassName: H,
      noWheelClassName: $,
      lib: ne
    });
    f.filter(j), G ? h.on("dblclick.zoom", _) : h.on("dblclick.zoom", null);
  }
  function v() {
    f.on("zoom", null);
  }
  async function E($, H, k) {
    const I = Ri($), b = f == null ? void 0 : f.constrain()(I, H, k);
    return b && await C(b), new Promise((M) => M(b));
  }
  async function S($, H) {
    const k = Ri($);
    return await C(k, H), new Promise((I) => I(k));
  }
  function x($) {
    if (h) {
      const H = Ri($), k = h.property("__zoom");
      (k.k !== $.zoom || k.x !== $.x || k.y !== $.y) && (f == null || f.transform(h, H, null, { sync: !0 }));
    }
  }
  function P() {
    const $ = h ? Hc(h.node()) : { x: 0, y: 0, k: 1 };
    return { x: $.x, y: $.y, zoom: $.k };
  }
  function N($, H) {
    return h ? new Promise((k) => {
      f == null || f.scaleTo(Vi(h, H == null ? void 0 : H.duration, () => k(!0)), $);
    }) : Promise.resolve(!1);
  }
  function O($, H) {
    return h ? new Promise((k) => {
      f == null || f.scaleBy(Vi(h, H == null ? void 0 : H.duration, () => k(!0)), $);
    }) : Promise.resolve(!1);
  }
  function T($) {
    f == null || f.scaleExtent($);
  }
  function L($) {
    f == null || f.translateExtent($);
  }
  function V($) {
    const H = !on($) || $ < 0 ? 0 : $;
    f == null || f.clickDistance(H);
  }
  return {
    update: w,
    destroy: v,
    setViewport: S,
    setViewportConstrained: E,
    getViewport: P,
    scaleTo: N,
    scaleBy: O,
    setScaleExtent: T,
    setTranslateExtent: L,
    syncViewport: x,
    setClickDistance: V
  };
}
var sa;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(sa || (sa = {}));
var x1 = /* @__PURE__ */ ve('<div role="button" tabindex="-1"><!></div>');
function $n(e, t) {
  ue(t, !1);
  const n = tt(), r = () => U(Q, "$connectable", n), o = () => U(re, "$connectionRadius", n), i = () => U(ne, "$domNode", n), s = () => U(fe, "$nodeLookup", n), l = () => U(F, "$connectionMode", n), u = () => U(ee, "$lib", n), a = () => U(Ae, "$autoPanOnConnect", n), c = () => U(We, "$flowId", n), d = () => U(j, "$isValidConnectionStore", n), f = () => U(_e, "$onedgecreate", n), h = () => U(Xe, "$onConnectAction", n), y = () => U(W, "$onConnectStartAction", n), _ = () => U(xe, "$onConnectEndAction", n), C = () => U(ke, "$viewport", n), w = () => U(st, "$connection", n), v = () => U(Fe, "$edges", n), E = () => U(Le, "$connectionLookup", n), S = J(), x = J(), P = J(), N = J(), O = J(), T = J(), L = J(), V = J();
  let $ = p(t, "id", 12, void 0), H = p(t, "type", 12, "source"), k = p(t, "position", 28, () => we.Top), I = p(t, "style", 12, void 0), b = p(t, "isValidConnection", 12, void 0), M = p(t, "onconnect", 12, void 0), A = p(t, "ondisconnect", 12, void 0), D = p(t, "isConnectable", 12, void 0), Y = p(t, "class", 12, void 0);
  const Z = Ro("svelteflow__node_id"), Q = Ro("svelteflow__node_connectable"), G = Ue(), {
    connectionMode: F,
    domNode: ne,
    nodeLookup: fe,
    connectionRadius: re,
    viewport: ke,
    isValidConnection: j,
    lib: ee,
    addEdge: he,
    onedgecreate: _e,
    panBy: Ve,
    cancelConnection: q,
    updateConnection: $e,
    autoPanOnConnect: Ae,
    edges: Fe,
    connectionLookup: Le,
    onconnect: Xe,
    onconnectstart: W,
    onconnectend: xe,
    flowId: We,
    connection: st
  } = G;
  function ze(be) {
    const je = Zc(be);
    (je && be.button === 0 || !je) && f1.onPointerDown(be, {
      handleId: g(P),
      nodeId: Z,
      isTarget: g(S),
      connectionRadius: o(),
      domNode: i(),
      nodeLookup: s(),
      connectionMode: l(),
      lib: u(),
      autoPanOnConnect: a(),
      flowId: c(),
      isValidConnection: b() ?? d(),
      updateConnection: $e,
      cancelConnection: q,
      panBy: Ve,
      onConnect: (Me) => {
        var ft;
        const Qe = f() ? f()(Me) : Me;
        Qe && (he(Qe), (ft = h()) == null || ft(Me));
      },
      onConnectStart: (Me, Qe) => {
        var ft;
        (ft = y()) == null || ft(Me, {
          nodeId: Qe.nodeId,
          handleId: Qe.handleId,
          handleType: Qe.handleType
        });
      },
      onConnectEnd: (Me, Qe) => {
        var ft;
        (ft = _()) == null || ft(Me, Qe);
      },
      getTransform: () => [
        C().x,
        C().y,
        C().zoom
      ],
      getFromHandle: () => w().fromHandle
    });
  }
  let qe = J(null), ie = J();
  oe(() => B(H()), () => {
    X(S, H() === "target");
  }), oe(
    () => (B(D()), r()),
    () => {
      X(x, D() !== void 0 ? D() : r());
    }
  ), oe(() => B($()), () => {
    X(P, $() || null);
  }), oe(
    () => (B(M()), B(A()), v(), E(), B(H()), B($())),
    () => {
      (M() || A()) && (v(), X(ie, E().get(`${Z}-${H()}-${$() || null}`)));
    }
  ), oe(
    () => (g(qe), g(ie), B(A()), B(M())),
    () => {
      if (g(qe) && !T0(g(ie), g(qe))) {
        const be = g(ie) ?? /* @__PURE__ */ new Map();
        Zl(g(qe), be, A()), Zl(be, g(qe), M());
      }
      X(qe, g(ie) ?? /* @__PURE__ */ new Map());
    }
  ), oe(() => w(), () => {
    X(N, !!w().fromHandle);
  }), oe(
    () => (w(), B(H()), g(P)),
    () => {
      var be, je, Me;
      X(O, ((be = w().fromHandle) == null ? void 0 : be.nodeId) === Z && ((je = w().fromHandle) == null ? void 0 : je.type) === H() && ((Me = w().fromHandle) == null ? void 0 : Me.id) === g(P));
    }
  ), oe(
    () => (w(), B(H()), g(P)),
    () => {
      var be, je, Me;
      X(T, ((be = w().toHandle) == null ? void 0 : be.nodeId) === Z && ((je = w().toHandle) == null ? void 0 : je.type) === H() && ((Me = w().toHandle) == null ? void 0 : Me.id) === g(P));
    }
  ), oe(
    () => (l(), w(), B(H()), g(P)),
    () => {
      var be, je, Me;
      X(L, l() === In.Strict ? ((be = w().fromHandle) == null ? void 0 : be.type) !== H() : Z !== ((je = w().fromHandle) == null ? void 0 : je.nodeId) || g(P) !== ((Me = w().fromHandle) == null ? void 0 : Me.id));
    }
  ), oe(() => (g(T), w()), () => {
    X(V, g(T) && w().isValid);
  }), it(), me();
  var De = x1();
  te(De, "data-nodeid", Z);
  const Qt = /* @__PURE__ */ ae(() => jt(dt([
    "svelte-flow__handle",
    `svelte-flow__handle-${k()}`,
    "nodrag",
    "nopan",
    k(),
    Y()
  ])));
  var un = ge(De);
  return Je(un, t, "default", {}, null), ce(De), pe(() => {
    te(De, "data-handleid", g(P)), te(De, "data-handlepos", k()), te(De, "data-id", `${c() ?? ""}-${Z ?? ""}-${($() || null) ?? ""}-${H() ?? ""}`), sr(De, g(Qt), ""), te(De, "style", I()), Ke(De, "valid", g(V)), Ke(De, "connectingto", g(T)), Ke(De, "connectingfrom", g(O)), Ke(De, "source", !g(S)), Ke(De, "target", g(S)), Ke(De, "connectablestart", g(x)), Ke(De, "connectableend", g(x)), Ke(De, "connectable", g(x)), Ke(De, "connectionindicator", g(x) && (!g(N) || g(L)));
  }), Ye("mousedown", De, ze), Ye("touchstart", De, ze), K(e, De), de({
    get id() {
      return $();
    },
    set id(be) {
      $(be), m();
    },
    get type() {
      return H();
    },
    set type(be) {
      H(be), m();
    },
    get position() {
      return k();
    },
    set position(be) {
      k(be), m();
    },
    get style() {
      return I();
    },
    set style(be) {
      I(be), m();
    },
    get isValidConnection() {
      return b();
    },
    set isValidConnection(be) {
      b(be), m();
    },
    get onconnect() {
      return M();
    },
    set onconnect(be) {
      M(be), m();
    },
    get ondisconnect() {
      return A();
    },
    set ondisconnect(be) {
      A(be), m();
    },
    get isConnectable() {
      return D();
    },
    set isConnectable(be) {
      D(be), m();
    },
    get class() {
      return Y();
    },
    set class(be) {
      Y(be), m();
    }
  });
}
se(
  $n,
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
var C1 = /* @__PURE__ */ ve("<!> <!>", 1);
function ei(e, t) {
  const n = Se(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Se(n, ["data", "targetPosition", "sourcePosition"]), ue(t, !1);
  let r = p(t, "data", 28, () => ({ label: "Node" })), o = p(t, "targetPosition", 12, void 0), i = p(t, "sourcePosition", 12, void 0);
  me();
  var s = C1(), l = He(s), u = /* @__PURE__ */ ae(() => o() ?? we.Top);
  $n(l, {
    type: "target",
    get position() {
      return g(u);
    }
  });
  var a = ye(l), c = ye(a), d = /* @__PURE__ */ ae(() => i() ?? we.Bottom);
  return $n(c, {
    type: "source",
    get position() {
      return g(d);
    }
  }), pe(() => {
    var f;
    return En(a, ` ${((f = r()) == null ? void 0 : f.label) ?? ""} `);
  }), K(e, s), de({
    get data() {
      return r();
    },
    set data(f) {
      r(f), m();
    },
    get targetPosition() {
      return o();
    },
    set targetPosition(f) {
      o(f), m();
    },
    get sourcePosition() {
      return i();
    },
    set sourcePosition(f) {
      i(f), m();
    }
  });
}
se(
  ei,
  {
    data: {},
    targetPosition: {},
    sourcePosition: {}
  },
  [],
  [],
  !0
);
var k1 = /* @__PURE__ */ ve(" <!>", 1);
function su(e, t) {
  const n = Se(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Se(n, ["data", "sourcePosition"]), ue(t, !1);
  let r = p(t, "data", 28, () => ({ label: "Node" })), o = p(t, "sourcePosition", 12, void 0);
  me(), no();
  var i = k1(), s = He(i), l = ye(s), u = /* @__PURE__ */ ae(() => o() ?? we.Bottom);
  return $n(l, {
    type: "source",
    get position() {
      return g(u);
    }
  }), pe(() => {
    var a;
    return En(s, `${((a = r()) == null ? void 0 : a.label) ?? ""} `);
  }), K(e, i), de({
    get data() {
      return r();
    },
    set data(a) {
      r(a), m();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(a) {
      o(a), m();
    }
  });
}
se(su, { data: {}, sourcePosition: {} }, [], [], !0);
var E1 = /* @__PURE__ */ ve(" <!>", 1);
function lu(e, t) {
  const n = Se(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Se(n, ["data", "targetPosition"]), ue(t, !1);
  let r = p(t, "data", 28, () => ({ label: "Node" })), o = p(t, "targetPosition", 12, void 0);
  me(), no();
  var i = E1(), s = He(i), l = ye(s), u = /* @__PURE__ */ ae(() => o() ?? we.Top);
  return $n(l, {
    type: "target",
    get position() {
      return g(u);
    }
  }), pe(() => {
    var a;
    return En(s, `${((a = r()) == null ? void 0 : a.label) ?? ""} `);
  }), K(e, i), de({
    get data() {
      return r();
    },
    set data(a) {
      r(a), m();
    },
    get targetPosition() {
      return o();
    },
    set targetPosition(a) {
      o(a), m();
    }
  });
}
se(lu, { data: {}, targetPosition: {} }, [], [], !0);
function au(e, t) {
  const n = Se(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Se(n, []);
}
se(au, {}, [], [], !0);
function la(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function Yi(e, { target: t, domNode: n }) {
  return la(e, n, t), {
    async update({ target: r, domNode: o }) {
      la(e, o, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var S1 = /* @__PURE__ */ ve("<div><!></div>");
function cu(e, t) {
  ue(t, !1);
  const n = tt(), r = () => U(o, "$domNode", n), { domNode: o } = Ue();
  me();
  var i = S1(), s = ge(i);
  Je(s, t, "default", {}, null), ce(i), ct(i, (l, u) => Yi == null ? void 0 : Yi(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: r()
  })), K(e, i), de();
}
se(cu, {}, ["default"], [], !0);
function uu() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: i, elementsSelectable: s } = Ue();
  return (l) => {
    const u = R(e).get(l);
    if (!u) {
      console.warn("012", Cr.error012(l));
      return;
    }
    (u.selectable || R(s) && typeof u.selectable > "u") && (t.set(null), n.set(null), u.selected ? u.selected && R(r) && i({ nodes: [], edges: [u] }) : o([l]));
  };
}
var P1 = /* @__PURE__ */ ve('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function du(e, t) {
  ue(t, !1);
  let n = p(t, "style", 12, void 0), r = p(t, "x", 12, void 0), o = p(t, "y", 12, void 0);
  const i = uu(), s = Ro("svelteflow__edge_id");
  return me(), cu(e, {
    children: (l, u) => {
      var a = P1(), c = ge(a);
      Je(c, t, "default", {}, null), ce(a), pe(() => {
        te(a, "style", "pointer-events: all;" + n()), et(a, "transform", `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`);
      }), Ye("keyup", a, () => {
      }), Ye("click", a, () => {
        s && i(s);
      }), K(l, a);
    },
    $$slots: { default: !0 }
  }), de({
    get style() {
      return n();
    },
    set style(l) {
      n(l), m();
    },
    get x() {
      return r();
    },
    set x(l) {
      r(l), m();
    },
    get y() {
      return o();
    },
    set y(l) {
      o(l), m();
    }
  });
}
se(du, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var M1 = /* @__PURE__ */ Ge('<path fill="none" class="svelte-flow__edge-interaction"></path>'), N1 = /* @__PURE__ */ Ge('<path fill="none"></path><!><!>', 1);
function fo(e, t) {
  ue(t, !1);
  let n = p(t, "id", 12, void 0), r = p(t, "path", 12), o = p(t, "label", 12, void 0), i = p(t, "labelX", 12, void 0), s = p(t, "labelY", 12, void 0), l = p(t, "labelStyle", 12, void 0), u = p(t, "markerStart", 12, void 0), a = p(t, "markerEnd", 12, void 0), c = p(t, "style", 12, void 0), d = p(t, "interactionWidth", 12, 20), f = p(t, "class", 12, void 0), h = d() === void 0 ? 20 : d();
  me();
  var y = N1(), _ = He(y);
  const C = /* @__PURE__ */ ae(() => jt(dt(["svelte-flow__edge-path", f()])));
  var w = ye(_);
  {
    var v = (x) => {
      var P = M1();
      te(P, "stroke-opacity", 0), te(P, "stroke-width", h), pe(() => te(P, "d", r())), K(x, P);
    };
    Be(w, (x) => {
      h && x(v);
    });
  }
  var E = ye(w);
  {
    var S = (x) => {
      du(x, {
        get x() {
          return i();
        },
        get y() {
          return s();
        },
        get style() {
          return l();
        },
        children: (P, N) => {
          no();
          var O = io();
          pe(() => En(O, o())), K(P, O);
        },
        $$slots: { default: !0 }
      });
    };
    Be(E, (x) => {
      o() && x(S);
    });
  }
  return pe(() => {
    te(_, "id", n()), te(_, "d", r()), Bn(_, g(C), ""), te(_, "marker-start", u()), te(_, "marker-end", a()), te(_, "style", c());
  }), K(e, y), de({
    get id() {
      return n();
    },
    set id(x) {
      n(x), m();
    },
    get path() {
      return r();
    },
    set path(x) {
      r(x), m();
    },
    get label() {
      return o();
    },
    set label(x) {
      o(x), m();
    },
    get labelX() {
      return i();
    },
    set labelX(x) {
      i(x), m();
    },
    get labelY() {
      return s();
    },
    set labelY(x) {
      s(x), m();
    },
    get labelStyle() {
      return l();
    },
    set labelStyle(x) {
      l(x), m();
    },
    get markerStart() {
      return u();
    },
    set markerStart(x) {
      u(x), m();
    },
    get markerEnd() {
      return a();
    },
    set markerEnd(x) {
      a(x), m();
    },
    get style() {
      return c();
    },
    set style(x) {
      c(x), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(x) {
      d(x), m();
    },
    get class() {
      return f();
    },
    set class(x) {
      f(x), m();
    }
  });
}
se(
  fo,
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
function ti(e, t) {
  const n = Se(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Se(n, [
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
  ]), ue(t, !1);
  const r = J(), o = J(), i = J();
  let s = p(t, "label", 12, void 0), l = p(t, "labelStyle", 12, void 0), u = p(t, "style", 12, void 0), a = p(t, "markerStart", 12, void 0), c = p(t, "markerEnd", 12, void 0), d = p(t, "interactionWidth", 12, void 0), f = p(t, "sourceX", 12), h = p(t, "sourceY", 12), y = p(t, "sourcePosition", 12), _ = p(t, "targetX", 12), C = p(t, "targetY", 12), w = p(t, "targetPosition", 12);
  return oe(
    () => (g(r), g(o), g(i), B(f()), B(h()), B(_()), B(C()), B(y()), B(w())),
    () => {
      ((v) => (X(r, v[0]), X(o, v[1]), X(i, v[2])))(qc({
        sourceX: f(),
        sourceY: h(),
        targetX: _(),
        targetY: C(),
        sourcePosition: y(),
        targetPosition: w()
      }));
    }
  ), it(), me(), fo(e, {
    get path() {
      return g(r);
    },
    get labelX() {
      return g(o);
    },
    get labelY() {
      return g(i);
    },
    get label() {
      return s();
    },
    get labelStyle() {
      return l();
    },
    get markerStart() {
      return a();
    },
    get markerEnd() {
      return c();
    },
    get interactionWidth() {
      return d();
    },
    get style() {
      return u();
    }
  }), de({
    get label() {
      return s();
    },
    set label(v) {
      s(v), m();
    },
    get labelStyle() {
      return l();
    },
    set labelStyle(v) {
      l(v), m();
    },
    get style() {
      return u();
    },
    set style(v) {
      u(v), m();
    },
    get markerStart() {
      return a();
    },
    set markerStart(v) {
      a(v), m();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(v) {
      c(v), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(v) {
      d(v), m();
    },
    get sourceX() {
      return f();
    },
    set sourceX(v) {
      f(v), m();
    },
    get sourceY() {
      return h();
    },
    set sourceY(v) {
      h(v), m();
    },
    get sourcePosition() {
      return y();
    },
    set sourcePosition(v) {
      y(v), m();
    },
    get targetX() {
      return _();
    },
    set targetX(v) {
      _(v), m();
    },
    get targetY() {
      return C();
    },
    set targetY(v) {
      C(v), m();
    },
    get targetPosition() {
      return w();
    },
    set targetPosition(v) {
      w(v), m();
    }
  });
}
se(
  ti,
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
function fu(e, t) {
  const n = Se(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Se(n, [
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
  ]), ue(t, !1);
  const r = J(), o = J(), i = J();
  let s = p(t, "label", 12, void 0), l = p(t, "labelStyle", 12, void 0), u = p(t, "style", 12, void 0), a = p(t, "markerStart", 12, void 0), c = p(t, "markerEnd", 12, void 0), d = p(t, "interactionWidth", 12, void 0), f = p(t, "sourceX", 12), h = p(t, "sourceY", 12), y = p(t, "sourcePosition", 12), _ = p(t, "targetX", 12), C = p(t, "targetY", 12), w = p(t, "targetPosition", 12);
  return oe(
    () => (g(r), g(o), g(i), B(f()), B(h()), B(_()), B(C()), B(y()), B(w())),
    () => {
      ((v) => (X(r, v[0]), X(o, v[1]), X(i, v[2])))(Qo({
        sourceX: f(),
        sourceY: h(),
        targetX: _(),
        targetY: C(),
        sourcePosition: y(),
        targetPosition: w()
      }));
    }
  ), it(), me(), fo(e, {
    get path() {
      return g(r);
    },
    get labelX() {
      return g(o);
    },
    get labelY() {
      return g(i);
    },
    get label() {
      return s();
    },
    get labelStyle() {
      return l();
    },
    get markerStart() {
      return a();
    },
    get markerEnd() {
      return c();
    },
    get interactionWidth() {
      return d();
    },
    get style() {
      return u();
    }
  }), de({
    get label() {
      return s();
    },
    set label(v) {
      s(v), m();
    },
    get labelStyle() {
      return l();
    },
    set labelStyle(v) {
      l(v), m();
    },
    get style() {
      return u();
    },
    set style(v) {
      u(v), m();
    },
    get markerStart() {
      return a();
    },
    set markerStart(v) {
      a(v), m();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(v) {
      c(v), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(v) {
      d(v), m();
    },
    get sourceX() {
      return f();
    },
    set sourceX(v) {
      f(v), m();
    },
    get sourceY() {
      return h();
    },
    set sourceY(v) {
      h(v), m();
    },
    get sourcePosition() {
      return y();
    },
    set sourcePosition(v) {
      y(v), m();
    },
    get targetX() {
      return _();
    },
    set targetX(v) {
      _(v), m();
    },
    get targetY() {
      return C();
    },
    set targetY(v) {
      C(v), m();
    },
    get targetPosition() {
      return w();
    },
    set targetPosition(v) {
      w(v), m();
    }
  });
}
se(
  fu,
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
function hu(e, t) {
  const n = Se(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Se(n, [
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
  ]), ue(t, !1);
  const r = J(), o = J(), i = J();
  let s = p(t, "label", 12, void 0), l = p(t, "labelStyle", 12, void 0), u = p(t, "style", 12, void 0), a = p(t, "markerStart", 12, void 0), c = p(t, "markerEnd", 12, void 0), d = p(t, "interactionWidth", 12, void 0), f = p(t, "sourceX", 12), h = p(t, "sourceY", 12), y = p(t, "targetX", 12), _ = p(t, "targetY", 12);
  return oe(
    () => (g(r), g(o), g(i), B(f()), B(h()), B(y()), B(_())),
    () => {
      ((C) => (X(r, C[0]), X(o, C[1]), X(i, C[2])))(gs({
        sourceX: f(),
        sourceY: h(),
        targetX: y(),
        targetY: _()
      }));
    }
  ), it(), me(), fo(e, {
    get path() {
      return g(r);
    },
    get labelX() {
      return g(o);
    },
    get labelY() {
      return g(i);
    },
    get label() {
      return s();
    },
    get labelStyle() {
      return l();
    },
    get markerStart() {
      return a();
    },
    get markerEnd() {
      return c();
    },
    get interactionWidth() {
      return d();
    },
    get style() {
      return u();
    }
  }), de({
    get label() {
      return s();
    },
    set label(C) {
      s(C), m();
    },
    get labelStyle() {
      return l();
    },
    set labelStyle(C) {
      l(C), m();
    },
    get style() {
      return u();
    },
    set style(C) {
      u(C), m();
    },
    get markerStart() {
      return a();
    },
    set markerStart(C) {
      a(C), m();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(C) {
      c(C), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(C) {
      d(C), m();
    },
    get sourceX() {
      return f();
    },
    set sourceX(C) {
      f(C), m();
    },
    get sourceY() {
      return h();
    },
    set sourceY(C) {
      h(C), m();
    },
    get targetX() {
      return y();
    },
    set targetX(C) {
      y(C), m();
    },
    get targetY() {
      return _();
    },
    set targetY(C) {
      _(C), m();
    }
  });
}
se(
  hu,
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
function gu(e, t) {
  const n = Se(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Se(n, [
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
  ]), ue(t, !1);
  const r = J(), o = J(), i = J();
  let s = p(t, "label", 12, void 0), l = p(t, "labelStyle", 12, void 0), u = p(t, "style", 12, void 0), a = p(t, "markerStart", 12, void 0), c = p(t, "markerEnd", 12, void 0), d = p(t, "interactionWidth", 12, void 0), f = p(t, "sourceX", 12), h = p(t, "sourceY", 12), y = p(t, "sourcePosition", 12), _ = p(t, "targetX", 12), C = p(t, "targetY", 12), w = p(t, "targetPosition", 12);
  return oe(
    () => (g(r), g(o), g(i), B(f()), B(h()), B(_()), B(C()), B(y()), B(w())),
    () => {
      ((v) => (X(r, v[0]), X(o, v[1]), X(i, v[2])))(Qo({
        sourceX: f(),
        sourceY: h(),
        targetX: _(),
        targetY: C(),
        sourcePosition: y(),
        targetPosition: w(),
        borderRadius: 0
      }));
    }
  ), it(), me(), fo(e, {
    get path() {
      return g(r);
    },
    get labelX() {
      return g(o);
    },
    get labelY() {
      return g(i);
    },
    get label() {
      return s();
    },
    get labelStyle() {
      return l();
    },
    get markerStart() {
      return a();
    },
    get markerEnd() {
      return c();
    },
    get interactionWidth() {
      return d();
    },
    get style() {
      return u();
    }
  }), de({
    get label() {
      return s();
    },
    set label(v) {
      s(v), m();
    },
    get labelStyle() {
      return l();
    },
    set labelStyle(v) {
      l(v), m();
    },
    get style() {
      return u();
    },
    set style(v) {
      u(v), m();
    },
    get markerStart() {
      return a();
    },
    set markerStart(v) {
      a(v), m();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(v) {
      c(v), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(v) {
      d(v), m();
    },
    get sourceX() {
      return f();
    },
    set sourceX(v) {
      f(v), m();
    },
    get sourceY() {
      return h();
    },
    set sourceY(v) {
      h(v), m();
    },
    get sourcePosition() {
      return y();
    },
    set sourcePosition(v) {
      y(v), m();
    },
    get targetX() {
      return _();
    },
    set targetX(v) {
      _(v), m();
    },
    get targetY() {
      return C();
    },
    set targetY(v) {
      C(v), m();
    },
    get targetPosition() {
      return w();
    },
    set targetPosition(v) {
      w(v), m();
    }
  });
}
se(
  gu,
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
function O1(e, t) {
  const n = e.set, r = t.set, o = R(e), i = R(t);
  let l = o.length === 0 && i.length > 0 ? i : o;
  e.set(l);
  const u = (a) => {
    const c = n(a);
    return l = c, r(l), c;
  };
  e.set = t.set = u, e.update = t.update = (a) => u(a(l));
}
function T1(e, t) {
  const n = e.set, r = t.set;
  let o = R(t);
  e.set(o);
  const i = (s) => {
    n(s), r(s), o = s;
  };
  e.set = t.set = i, e.update = t.update = (s) => i(s(o));
}
const A1 = (e, t, n) => {
  if (!n)
    return;
  const r = R(e), o = t.set, i = n.set;
  let s = n ? R(n) : { x: 0, y: 0, zoom: 1 };
  t.set(s), t.set = (l) => (o(l), i(l), s = l, l), n.set = (l) => (r == null || r.syncViewport(l), o(l), i(l), s = l, l), t.update = (l) => {
    t.set(l(s));
  }, n.update = (l) => {
    n.set(l(s));
  };
}, z1 = (e, t, n, r = [0, 0], o = qo) => {
  const { subscribe: i, set: s, update: l } = le([]);
  let u = e, a = {}, c = !0;
  const d = (_) => (Uc(_, t, n, {
    elevateNodesOnSelect: c,
    nodeOrigin: r,
    nodeExtent: o,
    defaults: a,
    checkEquality: !1
  }), u = _, s(u), u), f = (_) => d(_(u)), h = (_) => {
    a = _;
  }, y = (_) => {
    c = _.elevateNodesOnSelect ?? c;
  };
  return d(u), {
    subscribe: i,
    set: d,
    update: f,
    setDefaultOptions: h,
    setOptions: y
  };
}, D1 = (e, t, n, r) => {
  const { subscribe: o, set: i, update: s } = le([]);
  let l = e, u = {};
  const a = (f) => {
    const h = u ? f.map((y) => ({ ...u, ...y })) : f;
    Jc(t, n, h), l = h, i(l);
  }, c = (f) => a(f(l)), d = (f) => {
    u = f;
  };
  return a(l), {
    subscribe: o,
    set: a,
    update: c,
    setDefaultOptions: d
  };
}, vu = {
  input: su,
  output: lu,
  default: ei,
  group: au
}, yu = {
  straight: hu,
  smoothstep: fu,
  default: ti,
  step: gu
}, L1 = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) => {
  const l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = i ?? [0, 0], f = s ?? qo;
  Uc(e, l, u, {
    nodeExtent: f,
    nodeOrigin: d,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), Jc(a, c, t);
  let h = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const y = co(l, {
      filter: (_) => !!((_.width || _.initialWidth) && (_.height || _.initialHeight))
    });
    h = Zs(y, n, r, 0.5, 2, 0.1);
  }
  return {
    flowId: le(null),
    nodes: z1(e, l, u, d, f),
    nodeLookup: St(l),
    parentLookup: St(u),
    edgeLookup: St(c),
    visibleNodes: St([]),
    edges: D1(t, a, c),
    visibleEdges: St([]),
    connectionLookup: St(a),
    height: le(500),
    width: le(500),
    minZoom: le(0.5),
    maxZoom: le(2),
    nodeOrigin: le(d),
    nodeDragThreshold: le(1),
    nodeExtent: le(f),
    translateExtent: le(qo),
    autoPanOnNodeDrag: le(!0),
    autoPanOnConnect: le(!0),
    fitViewOnInit: le(!1),
    fitViewOnInitDone: le(!1),
    fitViewOptions: le(void 0),
    panZoom: le(null),
    snapGrid: le(null),
    dragging: le(!1),
    selectionRect: le(null),
    selectionKeyPressed: le(!1),
    multiselectionKeyPressed: le(!1),
    deleteKeyPressed: le(!1),
    panActivationKeyPressed: le(!1),
    zoomActivationKeyPressed: le(!1),
    selectionRectMode: le(null),
    selectionMode: le(Go.Partial),
    nodeTypes: le(vu),
    edgeTypes: le(yu),
    viewport: le(h),
    connectionMode: le(In.Strict),
    domNode: le(null),
    connection: St(ds),
    connectionLineType: le(Jn.Bezier),
    connectionRadius: le(20),
    isValidConnection: le(() => !0),
    nodesDraggable: le(!0),
    nodesConnectable: le(!0),
    elementsSelectable: le(!0),
    selectNodesOnDrag: le(!0),
    markers: St([]),
    defaultMarkerColor: le("#b1b1b7"),
    lib: St("svelte"),
    onlyRenderVisibleElements: le(!1),
    onerror: le(Wc),
    ondelete: le(void 0),
    onedgecreate: le(void 0),
    onconnect: le(void 0),
    onconnectstart: le(void 0),
    onconnectend: le(void 0),
    onbeforedelete: le(void 0),
    nodesInitialized: le(!1),
    edgesInitialized: le(!1),
    viewportInitialized: le(!1),
    initialized: St(!1)
  };
};
function I1(e) {
  const t = Gn([
    e.edges,
    e.nodes,
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.viewport,
    e.width,
    e.height
  ], ([n, , r, o, i, s, l]) => o && s && l ? n.filter((a) => {
    const c = r.get(a.source), d = r.get(a.target);
    return c && d && X0({
      sourceNode: c,
      targetNode: d,
      width: s,
      height: l,
      transform: [i.x, i.y, i.zoom]
    });
  }) : n);
  return Gn([t, e.nodes, e.nodeLookup, e.connectionMode, e.onerror], ([n, , r, o, i]) => n.reduce((l, u) => {
    const a = r.get(u.source), c = r.get(u.target);
    if (!a || !c)
      return l;
    const d = U0({
      id: u.id,
      sourceNode: a,
      targetNode: c,
      sourceHandle: u.sourceHandle || null,
      targetHandle: u.targetHandle || null,
      connectionMode: o,
      onError: i
    });
    return d && l.push({
      ...u,
      zIndex: B0({
        selected: u.selected,
        zIndex: u.zIndex,
        sourceNode: a,
        targetNode: c,
        elevateOnSelect: !1
      }),
      ...d
    }), l;
  }, []));
}
function H1(e) {
  return Gn([
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.width,
    e.height,
    e.viewport,
    e.nodes
  ], ([t, n, r, o, i]) => {
    const s = [i.x, i.y, i.zoom];
    return n ? Rc(t, { x: 0, y: 0, width: r, height: o }, s, !0) : Array.from(t.values());
  });
}
const ki = Symbol();
function mu({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) {
  const l = L1({
    nodes: e,
    edges: t,
    width: n,
    height: r,
    fitView: o,
    nodeOrigin: i,
    nodeExtent: s
  });
  function u(b) {
    l.nodeTypes.set({
      ...vu,
      ...b
    });
  }
  function a(b) {
    l.edgeTypes.set({
      ...yu,
      ...b
    });
  }
  function c(b) {
    const M = R(l.edges);
    l.edges.set(F0(b, M));
  }
  const d = (b, M = !1) => {
    var D;
    const A = R(l.nodeLookup);
    for (const [Y, Z] of b) {
      const Q = (D = A.get(Y)) == null ? void 0 : D.internals.userNode;
      Q && (Q.position = Z.position, Q.dragging = M);
    }
    l.nodes.update((Y) => Y);
  };
  function f(b) {
    var Z, Q, G;
    const M = R(l.nodeLookup), A = R(l.parentLookup), { changes: D, updatedInternals: Y } = r1(b, M, R(l.parentLookup), R(l.domNode), R(l.nodeOrigin));
    if (Y) {
      if (Q0(M, A, { nodeOrigin: i, nodeExtent: s }), !R(l.fitViewOnInitDone) && R(l.fitViewOnInit)) {
        const F = R(l.fitViewOptions), ne = y({
          ...F,
          nodes: F == null ? void 0 : F.nodes
        });
        l.fitViewOnInitDone.set(ne);
      }
      for (const F of D) {
        const ne = (Z = M.get(F.id)) == null ? void 0 : Z.internals.userNode;
        if (ne)
          switch (F.type) {
            case "dimensions": {
              const fe = { ...ne.measured, ...F.dimensions };
              F.setAttributes && (ne.width = ((Q = F.dimensions) == null ? void 0 : Q.width) ?? ne.width, ne.height = ((G = F.dimensions) == null ? void 0 : G.height) ?? ne.height), ne.measured = fe;
              break;
            }
            case "position":
              ne.position = F.position ?? ne.position;
              break;
          }
      }
      l.nodes.update((F) => F), R(l.nodesInitialized) || l.nodesInitialized.set(!0);
    }
  }
  function h(b) {
    const M = R(l.panZoom), A = R(l.domNode);
    if (!M || !A)
      return Promise.resolve(!1);
    const { width: D, height: Y } = qs(A), Z = ql(R(l.nodeLookup), b);
    return Gl({
      nodes: Z,
      width: D,
      height: Y,
      minZoom: R(l.minZoom),
      maxZoom: R(l.maxZoom),
      panZoom: M
    }, b);
  }
  function y(b) {
    const M = R(l.panZoom);
    if (!M)
      return !1;
    const A = ql(R(l.nodeLookup), b);
    return Gl({
      nodes: A,
      width: R(l.width),
      height: R(l.height),
      minZoom: R(l.minZoom),
      maxZoom: R(l.maxZoom),
      panZoom: M
    }, b), A.size > 0;
  }
  function _(b, M) {
    const A = R(l.panZoom);
    return A ? A.scaleBy(b, M) : Promise.resolve(!1);
  }
  function C(b) {
    return _(1.2, b);
  }
  function w(b) {
    return _(1 / 1.2, b);
  }
  function v(b) {
    const M = R(l.panZoom);
    M && (M.setScaleExtent([b, R(l.maxZoom)]), l.minZoom.set(b));
  }
  function E(b) {
    const M = R(l.panZoom);
    M && (M.setScaleExtent([R(l.minZoom), b]), l.maxZoom.set(b));
  }
  function S(b) {
    const M = R(l.panZoom);
    M && (M.setTranslateExtent(b), l.translateExtent.set(b));
  }
  function x(b) {
    let M = !1;
    return b.forEach((A) => {
      A.selected && (A.selected = !1, M = !0);
    }), M;
  }
  function P(b) {
    var M;
    (M = R(l.panZoom)) == null || M.setClickDistance(b);
  }
  function N(b) {
    x((b == null ? void 0 : b.nodes) || R(l.nodes)) && l.nodes.set(R(l.nodes)), x((b == null ? void 0 : b.edges) || R(l.edges)) && l.edges.set(R(l.edges));
  }
  l.deleteKeyPressed.subscribe(async (b) => {
    var M;
    if (b) {
      const A = R(l.nodes), D = R(l.edges), Y = A.filter((F) => F.selected), Z = D.filter((F) => F.selected), { nodes: Q, edges: G } = await Vc({
        nodesToRemove: Y,
        edgesToRemove: Z,
        nodes: A,
        edges: D,
        onBeforeDelete: R(l.onbeforedelete)
      });
      (Q.length || G.length) && (l.nodes.update((F) => F.filter((ne) => !Q.some((fe) => fe.id === ne.id))), l.edges.update((F) => F.filter((ne) => !G.some((fe) => fe.id === ne.id))), (M = R(l.ondelete)) == null || M({
        nodes: Q,
        edges: G
      }));
    }
  });
  function O(b) {
    const M = R(l.multiselectionKeyPressed);
    l.nodes.update((A) => A.map((D) => {
      const Y = b.includes(D.id), Z = M && D.selected || Y;
      return D.selected = Z, D;
    })), M || l.edges.update((A) => A.map((D) => (D.selected = !1, D)));
  }
  function T(b) {
    const M = R(l.multiselectionKeyPressed);
    l.edges.update((A) => A.map((D) => {
      const Y = b.includes(D.id), Z = M && D.selected || Y;
      return D.selected = Z, D;
    })), M || l.nodes.update((A) => A.map((D) => (D.selected = !1, D)));
  }
  function L(b) {
    var A;
    const M = (A = R(l.nodes)) == null ? void 0 : A.find((D) => D.id === b);
    if (!M) {
      console.warn("012", Cr.error012(b));
      return;
    }
    l.selectionRect.set(null), l.selectionRectMode.set(null), M.selected ? M.selected && R(l.multiselectionKeyPressed) && N({ nodes: [M], edges: [] }) : O([b]);
  }
  function V(b) {
    const M = R(l.viewport);
    return o1({
      delta: b,
      panZoom: R(l.panZoom),
      transform: [M.x, M.y, M.zoom],
      translateExtent: R(l.translateExtent),
      width: R(l.width),
      height: R(l.height)
    });
  }
  const $ = le(ds), H = (b) => {
    $.set({ ...b });
  };
  function k() {
    $.set(ds);
  }
  function I() {
    l.fitViewOnInitDone.set(!1), l.selectionRect.set(null), l.selectionRectMode.set(null), l.snapGrid.set(null), l.isValidConnection.set(() => !0), N(), k();
  }
  return {
    // state
    ...l,
    // derived state
    visibleEdges: I1(l),
    visibleNodes: H1(l),
    connection: Gn([$, l.viewport], ([b, M]) => b.inProgress ? {
      ...b,
      to: uo(b.to, [M.x, M.y, M.zoom])
    } : { ...b }),
    markers: Gn([l.edges, l.defaultMarkerColor, l.flowId], ([b, M, A]) => j0(b, { defaultColor: M, id: A })),
    initialized: (() => {
      let b = !1;
      const M = R(l.nodes).length, A = R(l.edges).length;
      return Gn([l.nodesInitialized, l.edgesInitialized, l.viewportInitialized], ([D, Y, Z]) => b || (M === 0 ? b = Z : A === 0 ? b = Z && D : b = Z && D && Y, b));
    })(),
    // actions
    syncNodeStores: (b) => O1(l.nodes, b),
    syncEdgeStores: (b) => T1(l.edges, b),
    syncViewport: (b) => A1(l.panZoom, l.viewport, b),
    setNodeTypes: u,
    setEdgeTypes: a,
    addEdge: c,
    updateNodePositions: d,
    updateNodeInternals: f,
    zoomIn: C,
    zoomOut: w,
    fitView: (b) => h(b),
    setMinZoom: v,
    setMaxZoom: E,
    setTranslateExtent: S,
    setPaneClickDistance: P,
    unselectNodesAndEdges: N,
    addSelectedNodes: O,
    addSelectedEdges: T,
    handleNodeSelection: L,
    panBy: V,
    updateConnection: H,
    cancelConnection: k,
    reset: I
  };
}
function Ue() {
  const e = Ro(ki);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function $1({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) {
  const l = mu({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s });
  return ir(ki, {
    getStore: () => l
  }), l;
}
function Bi(e, t) {
  const { panZoom: n, minZoom: r, maxZoom: o, initialViewport: i, viewport: s, dragging: l, translateExtent: u, paneClickDistance: a } = t, c = b1({
    domNode: e,
    minZoom: r,
    maxZoom: o,
    translateExtent: u,
    viewport: i,
    paneClickDistance: a,
    onDraggingChange: l.set
  }), d = c.getViewport();
  return s.set(d), n.set(c), c.update(t), {
    update(f) {
      c.update(f);
    }
  };
}
var R1 = /* @__PURE__ */ ve('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const V1 = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function pu(e, t) {
  ue(t, !1), Ut(e, V1);
  const n = tt(), r = () => U(M, "$panActivationKeyPressed", n), o = () => U($, "$minZoom", n), i = () => U(H, "$maxZoom", n), s = () => U(A, "$zoomActivationKeyPressed", n), l = () => U(V, "$selectionRect", n), u = () => U(I, "$translateExtent", n), a = () => U(b, "$lib", n), c = J(), d = J(), f = J();
  let h = p(t, "initialViewport", 12, void 0), y = p(t, "onMoveStart", 12, void 0), _ = p(t, "onMove", 12, void 0), C = p(t, "onMoveEnd", 12, void 0), w = p(t, "panOnScrollMode", 12), v = p(t, "preventScrolling", 12), E = p(t, "zoomOnScroll", 12), S = p(t, "zoomOnDoubleClick", 12), x = p(t, "zoomOnPinch", 12), P = p(t, "panOnDrag", 12), N = p(t, "panOnScroll", 12), O = p(t, "paneClickDistance", 12);
  const {
    viewport: T,
    panZoom: L,
    selectionRect: V,
    minZoom: $,
    maxZoom: H,
    dragging: k,
    translateExtent: I,
    lib: b,
    panActivationKeyPressed: M,
    zoomActivationKeyPressed: A,
    viewportInitialized: D
  } = Ue(), Y = (G) => T.set({
    x: G[0],
    y: G[1],
    zoom: G[2]
  });
  xr(() => {
    Yo(D, !0);
  }), oe(() => B(h()), () => {
    X(c, h() || { x: 0, y: 0, zoom: 1 });
  }), oe(
    () => (r(), B(P())),
    () => {
      X(d, r() || P());
    }
  ), oe(
    () => (r(), B(N())),
    () => {
      X(f, r() || N());
    }
  ), it(), me();
  var Z = R1(), Q = ge(Z);
  return Je(Q, t, "default", {}, null), ce(Z), ct(Z, (G, F) => Bi == null ? void 0 : Bi(G, F), () => ({
    viewport: T,
    minZoom: o(),
    maxZoom: i(),
    initialViewport: g(c),
    dragging: k,
    panZoom: L,
    onPanZoomStart: y(),
    onPanZoom: _(),
    onPanZoomEnd: C(),
    zoomOnScroll: E(),
    zoomOnDoubleClick: S(),
    zoomOnPinch: x(),
    panOnScroll: g(f),
    panOnDrag: g(d),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: w() || mn.Free,
    zoomActivationKeyPressed: s(),
    preventScrolling: typeof v() == "boolean" ? v() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: a(),
    paneClickDistance: O(),
    onTransformChange: Y
  })), K(e, Z), de({
    get initialViewport() {
      return h();
    },
    set initialViewport(G) {
      h(G), m();
    },
    get onMoveStart() {
      return y();
    },
    set onMoveStart(G) {
      y(G), m();
    },
    get onMove() {
      return _();
    },
    set onMove(G) {
      _(G), m();
    },
    get onMoveEnd() {
      return C();
    },
    set onMoveEnd(G) {
      C(G), m();
    },
    get panOnScrollMode() {
      return w();
    },
    set panOnScrollMode(G) {
      w(G), m();
    },
    get preventScrolling() {
      return v();
    },
    set preventScrolling(G) {
      v(G), m();
    },
    get zoomOnScroll() {
      return E();
    },
    set zoomOnScroll(G) {
      E(G), m();
    },
    get zoomOnDoubleClick() {
      return S();
    },
    set zoomOnDoubleClick(G) {
      S(G), m();
    },
    get zoomOnPinch() {
      return x();
    },
    set zoomOnPinch(G) {
      x(G), m();
    },
    get panOnDrag() {
      return P();
    },
    set panOnDrag(G) {
      P(G), m();
    },
    get panOnScroll() {
      return N();
    },
    set panOnScroll(G) {
      N(G), m();
    },
    get paneClickDistance() {
      return O();
    },
    set paneClickDistance(G) {
      O(G), m();
    }
  });
}
se(
  pu,
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
function aa(e, t) {
  return (n) => {
    n.target === t && (e == null || e(n));
  };
}
function ca(e) {
  return (t) => {
    const n = e.includes(t.id);
    return t.selected !== n && (t.selected = n), t;
  };
}
var Y1 = /* @__PURE__ */ ve('<div class="svelte-flow__pane svelte-1esy7hx"><!></div>');
const B1 = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function wu(e, t) {
  ue(t, !1), Ut(e, B1);
  const n = tt(), r = () => U(H, "$panActivationKeyPressed", n), o = () => U(V, "$selectionKeyPressed", n), i = () => U(T, "$selectionRect", n), s = () => U(O, "$elementsSelectable", n), l = () => U(L, "$selectionRectMode", n), u = () => U(x, "$edges", n), a = () => U(S, "$nodeLookup", n), c = () => U(P, "$viewport", n), d = () => U($, "$selectionMode", n), f = () => U(N, "$dragging", n), h = J(), y = J(), _ = J();
  let C = p(t, "panOnDrag", 12, void 0), w = p(t, "selectionOnDrag", 12, void 0);
  const v = vi(), {
    nodes: E,
    nodeLookup: S,
    edges: x,
    viewport: P,
    dragging: N,
    elementsSelectable: O,
    selectionRect: T,
    selectionRectMode: L,
    selectionKeyPressed: V,
    selectionMode: $,
    panActivationKeyPressed: H,
    unselectNodesAndEdges: k
  } = Ue();
  let I = J(), b = null, M = [], A = !1;
  function D(j) {
    if (A) {
      A = !1;
      return;
    }
    v("paneclick", { event: j }), k(), L.set(null);
  }
  function Y(j) {
    var _e, Ve;
    if (b = g(I).getBoundingClientRect(), !O || !g(y) || j.button !== 0 || j.target !== g(I) || !b)
      return;
    (Ve = (_e = j.target) == null ? void 0 : _e.setPointerCapture) == null || Ve.call(_e, j.pointerId);
    const { x: ee, y: he } = ln(j, b);
    k(), T.set({
      width: 0,
      height: 0,
      startX: ee,
      startY: he,
      x: ee,
      y: he
    });
  }
  function Z(j) {
    if (!g(y) || !b || !i())
      return;
    A = !0;
    const ee = ln(j, b), he = i().startX ?? 0, _e = i().startY ?? 0, Ve = {
      ...i(),
      x: ee.x < he ? ee.x : he,
      y: ee.y < _e ? ee.y : _e,
      width: Math.abs(ee.x - he),
      height: Math.abs(ee.y - _e)
    }, q = M.map((Le) => Le.id), $e = fs(M, u()).map((Le) => Le.id);
    M = Rc(
      a(),
      Ve,
      [
        c().x,
        c().y,
        c().zoom
      ],
      d() === Go.Partial,
      !0
    );
    const Ae = fs(M, u()).map((Le) => Le.id), Fe = M.map((Le) => Le.id);
    (q.length !== Fe.length || Fe.some((Le) => !q.includes(Le))) && E.update((Le) => Le.map(ca(Fe))), ($e.length !== Ae.length || Ae.some((Le) => !$e.includes(Le))) && x.update((Le) => Le.map(ca(Ae))), L.set("user"), T.set(Ve);
  }
  function Q(j) {
    var ee, he;
    j.button === 0 && ((he = (ee = j.target) == null ? void 0 : ee.releasePointerCapture) == null || he.call(ee, j.pointerId), !g(y) && l() === "user" && j.target === g(I) && (D == null || D(j)), T.set(null), M.length > 0 && Yo(L, "nodes"), o() && (A = !1));
  }
  const G = (j) => {
    var ee;
    if (Array.isArray(g(h)) && ((ee = g(h)) != null && ee.includes(2))) {
      j.preventDefault();
      return;
    }
    v("panecontextmenu", { event: j });
  };
  oe(
    () => (r(), B(C())),
    () => {
      X(h, r() || C());
    }
  ), oe(
    () => (o(), i(), B(w()), g(h)),
    () => {
      X(y, o() || i() || w() && g(h) !== !0);
    }
  ), oe(
    () => (s(), g(y), l()),
    () => {
      X(_, s() && (g(y) || l() === "user"));
    }
  ), it(), me();
  var F = Y1(), ne = /* @__PURE__ */ or(() => g(_) ? void 0 : aa(D, g(I))), fe = /* @__PURE__ */ or(() => aa(G, g(I)));
  const re = /* @__PURE__ */ ae(() => C() === !0 || Array.isArray(C()) && C().includes(0));
  pe(() => Ke(F, "draggable", g(re)));
  var ke = ge(F);
  return Je(ke, t, "default", {}, null), ce(F), lr(F, (j) => X(I, j), () => g(I)), pe(() => {
    Ke(F, "dragging", f()), Ke(F, "selection", g(y));
  }), Ye("click", F, function(...j) {
    var ee;
    (ee = g(ne)) == null || ee.apply(this, j);
  }), Ye("pointerdown", F, function(...j) {
    var ee;
    (ee = g(_) ? Y : void 0) == null || ee.apply(this, j);
  }), Ye("pointermove", F, function(...j) {
    var ee;
    (ee = g(_) ? Z : void 0) == null || ee.apply(this, j);
  }), Ye("pointerup", F, function(...j) {
    var ee;
    (ee = g(_) ? Q : void 0) == null || ee.apply(this, j);
  }), Ye("contextmenu", F, function(...j) {
    var ee;
    (ee = g(fe)) == null || ee.apply(this, j);
  }), K(e, F), de({
    get panOnDrag() {
      return C();
    },
    set panOnDrag(j) {
      C(j), m();
    },
    get selectionOnDrag() {
      return w();
    },
    set selectionOnDrag(j) {
      w(j), m();
    }
  });
}
se(wu, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var X1 = /* @__PURE__ */ ve('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const W1 = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function _u(e, t) {
  ue(t, !1), Ut(e, W1);
  const n = tt(), r = () => U(o, "$viewport", n), { viewport: o } = Ue();
  me();
  var i = X1(), s = ge(i);
  Je(s, t, "default", {}, null), ce(i), pe(() => te(i, "style", `transform: translate(${r().x ?? ""}px, ${r().y ?? ""}px) scale(${r().zoom ?? ""})`)), K(e, i), de();
}
se(_u, {}, ["default"], [], !0);
function Qn(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, l = s1({
    onDrag: r,
    onDragStart: o,
    onDragStop: i,
    onNodeMouseDown: s,
    getStoreItems: () => {
      const a = R(n.snapGrid), c = R(n.viewport);
      return {
        nodes: R(n.nodes),
        nodeLookup: R(n.nodeLookup),
        edges: R(n.edges),
        nodeExtent: R(n.nodeExtent),
        snapGrid: a || [0, 0],
        snapToGrid: !!a,
        nodeOrigin: R(n.nodeOrigin),
        multiSelectionActive: R(n.multiselectionKeyPressed),
        domNode: R(n.domNode),
        transform: [c.x, c.y, c.zoom],
        autoPanOnNodeDrag: R(n.autoPanOnNodeDrag),
        nodesDraggable: R(n.nodesDraggable),
        selectNodesOnDrag: R(n.selectNodesOnDrag),
        nodeDragThreshold: R(n.nodeDragThreshold),
        unselectNodesAndEdges: n.unselectNodesAndEdges,
        updateNodePositions: n.updateNodePositions,
        panBy: n.panBy
      };
    }
  });
  function u(a, c) {
    if (c.disabled) {
      l.destroy();
      return;
    }
    l.update({
      domNode: a,
      noDragClassName: c.noDragClass,
      handleSelector: c.handleSelector,
      nodeId: c.nodeId,
      isSelectable: c.isSelectable,
      nodeClickDistance: c.nodeClickDistance
    });
  }
  return u(e, t), {
    update(a) {
      u(e, a);
    },
    destroy() {
      l.destroy();
    }
  };
}
function K1({ width: e, height: t, initialWidth: n, initialHeight: r, measuredWidth: o, measuredHeight: i }) {
  if (o === void 0 && i === void 0) {
    const s = e ?? n, l = t ?? r;
    return {
      width: s ? `width:${s}px;` : "",
      height: l ? `height:${l}px;` : ""
    };
  }
  return {
    width: e ? `width:${e}px;` : "",
    height: t ? `height:${t}px;` : ""
  };
}
var F1 = /* @__PURE__ */ ve("<div><!></div>");
function bu(e, t) {
  ue(t, !1);
  const n = tt(), r = () => U(F, "$nodeTypes", n), o = () => U(_e, "$connectableStore", n), i = J(void 0, !0), s = J(void 0, !0), l = J(void 0, !0), u = J(void 0, !0);
  let a = p(t, "node", 13), c = p(t, "id", 13), d = p(t, "data", 29, () => ({})), f = p(t, "selected", 13, !1), h = p(t, "draggable", 13, void 0), y = p(t, "selectable", 13, void 0), _ = p(t, "connectable", 13, !0), C = p(t, "deletable", 13, !0), w = p(t, "hidden", 13, !1), v = p(t, "dragging", 13, !1), E = p(t, "resizeObserver", 13, null), S = p(t, "style", 13, void 0), x = p(t, "type", 13, "default"), P = p(t, "isParent", 13, !1), N = p(t, "positionX", 13), O = p(t, "positionY", 13), T = p(t, "sourcePosition", 13, void 0), L = p(t, "targetPosition", 13, void 0), V = p(t, "zIndex", 13), $ = p(t, "measuredWidth", 13, void 0), H = p(t, "measuredHeight", 13, void 0), k = p(t, "initialWidth", 13, void 0), I = p(t, "initialHeight", 13, void 0), b = p(t, "width", 13, void 0), M = p(t, "height", 13, void 0), A = p(t, "dragHandle", 13, void 0), D = p(t, "initialized", 13, !1), Y = p(t, "parentId", 13, void 0), Z = p(t, "nodeClickDistance", 13, void 0), Q = p(t, "class", 13, "");
  const G = Ue(), {
    nodeTypes: F,
    nodeDragThreshold: ne,
    selectNodesOnDrag: fe,
    handleNodeSelection: re,
    updateNodeInternals: ke
  } = G;
  let j = J(void 0, !0), ee = J(null, !0);
  const he = vi(), _e = le(_());
  let Ve = J(void 0, !0), q = J(void 0, !0), $e = J(void 0, !0);
  ir("svelteflow__node_id", c()), ir("svelteflow__node_connectable", _e), Is(() => {
    var W;
    g(ee) && ((W = E()) == null || W.unobserve(g(ee)));
  });
  function Ae(W) {
    y() && (!R(fe) || !h() || R(ne) > 0) && re(c()), he("nodeclick", { node: a().internals.userNode, event: W });
  }
  oe(() => B(x()), () => {
    X(i, x() || "default");
  }), oe(() => (r(), g(i)), () => {
    X(s, !!r()[g(i)]);
  }), oe(
    () => (r(), g(i), ei),
    () => {
      X(l, r()[g(i)] || ei);
    }
  ), oe(
    () => (g(s), B(x())),
    () => {
      g(s) || console.warn("003", Cr.error003(x()));
    }
  ), oe(
    () => (B(b()), B(M()), B(k()), B(I()), B($()), B(H())),
    () => {
      X(u, K1({
        width: b(),
        height: M(),
        initialWidth: k(),
        initialHeight: I(),
        measuredWidth: $(),
        measuredHeight: H()
      }));
    }
  ), oe(() => B(_()), () => {
    _e.set(!!_());
  }), oe(
    () => (g(Ve), g(i), g(q), B(T()), g($e), B(L()), B(c()), g(j)),
    () => {
      (g(Ve) && g(i) !== g(Ve) || g(q) && T() !== g(q) || g($e) && L() !== g($e)) && requestAnimationFrame(() => ke(/* @__PURE__ */ new Map([
        [
          c(),
          {
            id: c(),
            nodeElement: g(j),
            force: !0
          }
        ]
      ]))), X(Ve, g(i)), X(q, T()), X($e, L());
    }
  ), oe(
    () => (B(E()), g(j), g(ee), B(D())),
    () => {
      E() && (g(j) !== g(ee) || !D()) && (g(ee) && E().unobserve(g(ee)), g(j) && E().observe(g(j)), X(ee, g(j)));
    }
  ), it(), me(!0);
  var Fe = ot(), Le = He(Fe);
  {
    var Xe = (W) => {
      var xe = F1();
      const We = /* @__PURE__ */ ae(() => jt(dt([
        "svelte-flow__node",
        `svelte-flow__node-${g(i)}`,
        Q()
      ])));
      var st = ge(xe);
      rc(st, () => g(l), (ze, qe) => {
        qe(ze, {
          get data() {
            return d();
          },
          get id() {
            return c();
          },
          get selected() {
            return f();
          },
          get selectable() {
            return y();
          },
          get deletable() {
            return C();
          },
          get sourcePosition() {
            return T();
          },
          get targetPosition() {
            return L();
          },
          get zIndex() {
            return V();
          },
          get dragging() {
            return v();
          },
          get draggable() {
            return h();
          },
          get dragHandle() {
            return A();
          },
          get parentId() {
            return Y();
          },
          get type() {
            return g(i);
          },
          get isConnectable() {
            return o();
          },
          get positionAbsoluteX() {
            return N();
          },
          get positionAbsoluteY() {
            return O();
          },
          get width() {
            return b();
          },
          get height() {
            return M();
          }
        });
      }), ce(xe), ct(xe, (ze, qe) => Qn == null ? void 0 : Qn(ze, qe), () => ({
        nodeId: c(),
        isSelectable: y(),
        disabled: !1,
        handleSelector: A(),
        noDragClass: "nodrag",
        nodeClickDistance: Z(),
        onNodeMouseDown: re,
        onDrag: (ze, qe, ie, De) => {
          he("nodedrag", { event: ze, targetNode: ie, nodes: De });
        },
        onDragStart: (ze, qe, ie, De) => {
          he("nodedragstart", { event: ze, targetNode: ie, nodes: De });
        },
        onDragStop: (ze, qe, ie, De) => {
          he("nodedragstop", { event: ze, targetNode: ie, nodes: De });
        },
        store: G
      })), lr(xe, (ze) => X(j, ze), () => g(j)), _t(() => Ye("click", xe, Ae)), _t(() => Ye("mouseenter", xe, (ze) => he("nodemouseenter", { node: a(), event: ze }))), _t(() => Ye("mouseleave", xe, (ze) => he("nodemouseleave", { node: a(), event: ze }))), _t(() => Ye("mousemove", xe, (ze) => he("nodemousemove", { node: a(), event: ze }))), _t(() => Ye("contextmenu", xe, (ze) => he("nodecontextmenu", { node: a(), event: ze }))), pe(() => {
        te(xe, "data-id", c()), sr(xe, g(We), ""), te(xe, "style", `${S() ?? "" ?? ""};${g(u).width ?? ""}${g(u).height ?? ""}`), Ke(xe, "dragging", v()), Ke(xe, "selected", f()), Ke(xe, "draggable", h()), Ke(xe, "connectable", _()), Ke(xe, "selectable", y()), Ke(xe, "nopan", h()), Ke(xe, "parent", P()), et(xe, "z-index", V()), et(xe, "transform", `translate(${N() ?? ""}px, ${O() ?? ""}px)`), et(xe, "visibility", D() ? "visible" : "hidden");
      }), K(W, xe);
    };
    Be(Le, (W) => {
      w() || W(Xe);
    });
  }
  return K(e, Fe), de({
    get node() {
      return a();
    },
    set node(W) {
      a(W), m();
    },
    get id() {
      return c();
    },
    set id(W) {
      c(W), m();
    },
    get data() {
      return d();
    },
    set data(W) {
      d(W), m();
    },
    get selected() {
      return f();
    },
    set selected(W) {
      f(W), m();
    },
    get draggable() {
      return h();
    },
    set draggable(W) {
      h(W), m();
    },
    get selectable() {
      return y();
    },
    set selectable(W) {
      y(W), m();
    },
    get connectable() {
      return _();
    },
    set connectable(W) {
      _(W), m();
    },
    get deletable() {
      return C();
    },
    set deletable(W) {
      C(W), m();
    },
    get hidden() {
      return w();
    },
    set hidden(W) {
      w(W), m();
    },
    get dragging() {
      return v();
    },
    set dragging(W) {
      v(W), m();
    },
    get resizeObserver() {
      return E();
    },
    set resizeObserver(W) {
      E(W), m();
    },
    get style() {
      return S();
    },
    set style(W) {
      S(W), m();
    },
    get type() {
      return x();
    },
    set type(W) {
      x(W), m();
    },
    get isParent() {
      return P();
    },
    set isParent(W) {
      P(W), m();
    },
    get positionX() {
      return N();
    },
    set positionX(W) {
      N(W), m();
    },
    get positionY() {
      return O();
    },
    set positionY(W) {
      O(W), m();
    },
    get sourcePosition() {
      return T();
    },
    set sourcePosition(W) {
      T(W), m();
    },
    get targetPosition() {
      return L();
    },
    set targetPosition(W) {
      L(W), m();
    },
    get zIndex() {
      return V();
    },
    set zIndex(W) {
      V(W), m();
    },
    get measuredWidth() {
      return $();
    },
    set measuredWidth(W) {
      $(W), m();
    },
    get measuredHeight() {
      return H();
    },
    set measuredHeight(W) {
      H(W), m();
    },
    get initialWidth() {
      return k();
    },
    set initialWidth(W) {
      k(W), m();
    },
    get initialHeight() {
      return I();
    },
    set initialHeight(W) {
      I(W), m();
    },
    get width() {
      return b();
    },
    set width(W) {
      b(W), m();
    },
    get height() {
      return M();
    },
    set height(W) {
      M(W), m();
    },
    get dragHandle() {
      return A();
    },
    set dragHandle(W) {
      A(W), m();
    },
    get initialized() {
      return D();
    },
    set initialized(W) {
      D(W), m();
    },
    get parentId() {
      return Y();
    },
    set parentId(W) {
      Y(W), m();
    },
    get nodeClickDistance() {
      return Z();
    },
    set nodeClickDistance(W) {
      Z(W), m();
    },
    get class() {
      return Q();
    },
    set class(W) {
      Q(W), m();
    }
  });
}
se(
  bu,
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
var Z1 = /* @__PURE__ */ ve('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const q1 = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function xu(e, t) {
  ue(t, !1), Ut(e, q1);
  const n = tt(), r = () => U(a, "$visibleNodes", n), o = () => U(c, "$nodesDraggable", n), i = () => U(f, "$elementsSelectable", n), s = () => U(d, "$nodesConnectable", n), l = () => U(y, "$parentLookup", n);
  let u = p(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: a,
    nodesDraggable: c,
    nodesConnectable: d,
    elementsSelectable: f,
    updateNodeInternals: h,
    parentLookup: y
  } = Ue(), _ = typeof ResizeObserver > "u" ? null : new ResizeObserver((w) => {
    const v = /* @__PURE__ */ new Map();
    w.forEach((E) => {
      const S = E.target.getAttribute("data-id");
      v.set(S, { id: S, nodeElement: E.target, force: !0 });
    }), h(v);
  });
  Is(() => {
    _ == null || _.disconnect();
  }), me();
  var C = Z1();
  return Sn(C, 5, r, (w) => w.id, (w, v) => {
    var E = /* @__PURE__ */ ae(() => !!g(v).selected), S = /* @__PURE__ */ ae(() => !!g(v).hidden), x = /* @__PURE__ */ ae(() => !!(g(v).draggable || o() && typeof g(v).draggable > "u")), P = /* @__PURE__ */ ae(() => !!(g(v).selectable || i() && typeof g(v).selectable > "u")), N = /* @__PURE__ */ ae(() => !!(g(v).connectable || s() && typeof g(v).connectable > "u")), O = /* @__PURE__ */ ae(() => g(v).deletable ?? !0), T = /* @__PURE__ */ ae(() => l().has(g(v).id)), L = /* @__PURE__ */ ae(() => g(v).type ?? "default"), V = /* @__PURE__ */ ae(() => g(v).internals.z ?? 0), $ = /* @__PURE__ */ ae(() => Fc(g(v)));
    bu(w, {
      get node() {
        return g(v);
      },
      get id() {
        return g(v).id;
      },
      get data() {
        return g(v).data;
      },
      get selected() {
        return g(E);
      },
      get hidden() {
        return g(S);
      },
      get draggable() {
        return g(x);
      },
      get selectable() {
        return g(P);
      },
      get connectable() {
        return g(N);
      },
      get deletable() {
        return g(O);
      },
      get positionX() {
        return g(v).internals.positionAbsolute.x;
      },
      get positionY() {
        return g(v).internals.positionAbsolute.y;
      },
      get isParent() {
        return g(T);
      },
      get style() {
        return g(v).style;
      },
      get class() {
        return g(v).class;
      },
      get type() {
        return g(L);
      },
      get sourcePosition() {
        return g(v).sourcePosition;
      },
      get targetPosition() {
        return g(v).targetPosition;
      },
      get dragging() {
        return g(v).dragging;
      },
      get zIndex() {
        return g(V);
      },
      get dragHandle() {
        return g(v).dragHandle;
      },
      get initialized() {
        return g($);
      },
      get width() {
        return g(v).width;
      },
      get height() {
        return g(v).height;
      },
      get initialWidth() {
        return g(v).initialWidth;
      },
      get initialHeight() {
        return g(v).initialHeight;
      },
      get measuredWidth() {
        return g(v).measured.width;
      },
      get measuredHeight() {
        return g(v).measured.height;
      },
      get parentId() {
        return g(v).parentId;
      },
      resizeObserver: _,
      get nodeClickDistance() {
        return u();
      },
      $$events: {
        nodeclick(H) {
          Ne.call(this, t, H);
        },
        nodemouseenter(H) {
          Ne.call(this, t, H);
        },
        nodemousemove(H) {
          Ne.call(this, t, H);
        },
        nodemouseleave(H) {
          Ne.call(this, t, H);
        },
        nodedrag(H) {
          Ne.call(this, t, H);
        },
        nodedragstart(H) {
          Ne.call(this, t, H);
        },
        nodedragstop(H) {
          Ne.call(this, t, H);
        },
        nodecontextmenu(H) {
          Ne.call(this, t, H);
        }
      }
    });
  }), ce(C), K(e, C), de({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance(w) {
      u(w), m();
    }
  });
}
se(xu, { nodeClickDistance: {} }, [], [], !0);
var G1 = /* @__PURE__ */ Ge('<svg><g role="img"><!></g></svg>');
function Cu(e, t) {
  ue(t, !1);
  const n = tt(), r = () => U(F, "$edgeTypes", n), o = () => U(ne, "$flowId", n), i = () => U(fe, "$elementsSelectable", n), s = () => U(G, "$edgeLookup", n), l = J(void 0, !0), u = J(void 0, !0), a = J(void 0, !0), c = J(void 0, !0), d = J(void 0, !0);
  let f = p(t, "id", 13), h = p(t, "type", 13, "default"), y = p(t, "source", 13, ""), _ = p(t, "target", 13, ""), C = p(t, "data", 29, () => ({})), w = p(t, "style", 13, void 0), v = p(t, "zIndex", 13, void 0), E = p(t, "animated", 13, !1), S = p(t, "selected", 13, !1), x = p(t, "selectable", 13, void 0), P = p(t, "deletable", 13, void 0), N = p(t, "hidden", 13, !1), O = p(t, "label", 13, void 0), T = p(t, "labelStyle", 13, void 0), L = p(t, "markerStart", 13, void 0), V = p(t, "markerEnd", 13, void 0), $ = p(t, "sourceHandle", 13, void 0), H = p(t, "targetHandle", 13, void 0), k = p(t, "sourceX", 13), I = p(t, "sourceY", 13), b = p(t, "targetX", 13), M = p(t, "targetY", 13), A = p(t, "sourcePosition", 13), D = p(t, "targetPosition", 13), Y = p(t, "ariaLabel", 13, void 0), Z = p(t, "interactionWidth", 13, void 0), Q = p(t, "class", 13, "");
  ir("svelteflow__edge_id", f());
  const {
    edgeLookup: G,
    edgeTypes: F,
    flowId: ne,
    elementsSelectable: fe
  } = Ue(), re = vi(), ke = uu();
  function j(q) {
    const $e = s().get(f());
    $e && (ke(f()), re("edgeclick", { event: q, edge: $e }));
  }
  function ee(q, $e) {
    const Ae = s().get(f());
    Ae && re($e, { event: q, edge: Ae });
  }
  oe(() => B(h()), () => {
    X(l, h() || "default");
  }), oe(
    () => (r(), g(l), ti),
    () => {
      X(u, r()[g(l)] || ti);
    }
  ), oe(
    () => (B(L()), o()),
    () => {
      X(a, L() ? `url('#${vs(L(), o())}')` : void 0);
    }
  ), oe(
    () => (B(V()), o()),
    () => {
      X(c, V() ? `url('#${vs(V(), o())}')` : void 0);
    }
  ), oe(
    () => (B(x()), i()),
    () => {
      X(d, x() ?? i());
    }
  ), it(), me(!0);
  var he = ot(), _e = He(he);
  {
    var Ve = (q) => {
      var $e = G1(), Ae = ge($e);
      const Fe = /* @__PURE__ */ ae(() => jt(dt(["svelte-flow__edge", Q()])));
      var Le = ge(Ae), Xe = /* @__PURE__ */ ae(() => P() ?? !0);
      rc(Le, () => g(u), (W, xe) => {
        xe(W, {
          get id() {
            return f();
          },
          get source() {
            return y();
          },
          get target() {
            return _();
          },
          get sourceX() {
            return k();
          },
          get sourceY() {
            return I();
          },
          get targetX() {
            return b();
          },
          get targetY() {
            return M();
          },
          get sourcePosition() {
            return A();
          },
          get targetPosition() {
            return D();
          },
          get animated() {
            return E();
          },
          get selected() {
            return S();
          },
          get label() {
            return O();
          },
          get labelStyle() {
            return T();
          },
          get data() {
            return C();
          },
          get style() {
            return w();
          },
          get interactionWidth() {
            return Z();
          },
          get selectable() {
            return g(d);
          },
          get deletable() {
            return g(Xe);
          },
          get type() {
            return g(l);
          },
          get sourceHandleId() {
            return $();
          },
          get targetHandleId() {
            return H();
          },
          get markerStart() {
            return g(a);
          },
          get markerEnd() {
            return g(c);
          }
        });
      }), ce(Ae), ce($e), pe(() => {
        et($e, "z-index", v()), Bn(Ae, g(Fe), ""), te(Ae, "data-id", f()), te(Ae, "aria-label", Y() === null ? void 0 : Y() ? Y() : `Edge from ${y()} to ${_()}`), Ke(Ae, "animated", E()), Ke(Ae, "selected", S()), Ke(Ae, "selectable", g(d));
      }), Ye("click", Ae, j), Ye("contextmenu", Ae, (W) => {
        ee(W, "edgecontextmenu");
      }), Ye("mouseenter", Ae, (W) => {
        ee(W, "edgemouseenter");
      }), Ye("mouseleave", Ae, (W) => {
        ee(W, "edgemouseleave");
      }), K(q, $e);
    };
    Be(_e, (q) => {
      N() || q(Ve);
    });
  }
  return K(e, he), de({
    get id() {
      return f();
    },
    set id(q) {
      f(q), m();
    },
    get type() {
      return h();
    },
    set type(q) {
      h(q), m();
    },
    get source() {
      return y();
    },
    set source(q) {
      y(q), m();
    },
    get target() {
      return _();
    },
    set target(q) {
      _(q), m();
    },
    get data() {
      return C();
    },
    set data(q) {
      C(q), m();
    },
    get style() {
      return w();
    },
    set style(q) {
      w(q), m();
    },
    get zIndex() {
      return v();
    },
    set zIndex(q) {
      v(q), m();
    },
    get animated() {
      return E();
    },
    set animated(q) {
      E(q), m();
    },
    get selected() {
      return S();
    },
    set selected(q) {
      S(q), m();
    },
    get selectable() {
      return x();
    },
    set selectable(q) {
      x(q), m();
    },
    get deletable() {
      return P();
    },
    set deletable(q) {
      P(q), m();
    },
    get hidden() {
      return N();
    },
    set hidden(q) {
      N(q), m();
    },
    get label() {
      return O();
    },
    set label(q) {
      O(q), m();
    },
    get labelStyle() {
      return T();
    },
    set labelStyle(q) {
      T(q), m();
    },
    get markerStart() {
      return L();
    },
    set markerStart(q) {
      L(q), m();
    },
    get markerEnd() {
      return V();
    },
    set markerEnd(q) {
      V(q), m();
    },
    get sourceHandle() {
      return $();
    },
    set sourceHandle(q) {
      $(q), m();
    },
    get targetHandle() {
      return H();
    },
    set targetHandle(q) {
      H(q), m();
    },
    get sourceX() {
      return k();
    },
    set sourceX(q) {
      k(q), m();
    },
    get sourceY() {
      return I();
    },
    set sourceY(q) {
      I(q), m();
    },
    get targetX() {
      return b();
    },
    set targetX(q) {
      b(q), m();
    },
    get targetY() {
      return M();
    },
    set targetY(q) {
      M(q), m();
    },
    get sourcePosition() {
      return A();
    },
    set sourcePosition(q) {
      A(q), m();
    },
    get targetPosition() {
      return D();
    },
    set targetPosition(q) {
      D(q), m();
    },
    get ariaLabel() {
      return Y();
    },
    set ariaLabel(q) {
      Y(q), m();
    },
    get interactionWidth() {
      return Z();
    },
    set interactionWidth(q) {
      Z(q), m();
    },
    get class() {
      return Q();
    },
    set class(q) {
      Q(q), m();
    }
  });
}
se(
  Cu,
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
function ku(e, t) {
  ue(t, !1);
  let n = p(t, "onMount", 12, void 0), r = p(t, "onDestroy", 12, void 0);
  return xr(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), me(), de({
    get onMount() {
      return n();
    },
    set onMount(o) {
      n(o), m();
    },
    get onDestroy() {
      return r();
    },
    set onDestroy(o) {
      r(o), m();
    }
  });
}
se(ku, { onMount: {}, onDestroy: {} }, [], [], !0);
var U1 = /* @__PURE__ */ Ge("<defs></defs>");
function Eu(e, t) {
  ue(t, !1);
  const n = tt(), r = () => U(o, "$markers", n), { markers: o } = Ue();
  me();
  var i = U1();
  Sn(i, 5, r, (s) => s.id, (s, l) => {
    Su(s, An(() => g(l)));
  }), ce(i), K(e, i), de();
}
se(Eu, {}, [], [], !0);
var j1 = /* @__PURE__ */ Ge('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), J1 = /* @__PURE__ */ Ge('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), Q1 = /* @__PURE__ */ Ge('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Su(e, t) {
  ue(t, !1);
  let n = p(t, "id", 12), r = p(t, "type", 12), o = p(t, "width", 12, 12.5), i = p(t, "height", 12, 12.5), s = p(t, "markerUnits", 12, "strokeWidth"), l = p(t, "orient", 12, "auto-start-reverse"), u = p(t, "color", 12, void 0), a = p(t, "strokeWidth", 12, void 0);
  me();
  var c = Q1(), d = ge(c);
  {
    var f = (y) => {
      var _ = j1();
      pe(() => {
        te(_, "stroke", u()), te(_, "stroke-width", a());
      }), K(y, _);
    }, h = (y) => {
      var _ = ot(), C = He(_);
      {
        var w = (v) => {
          var E = J1();
          pe(() => {
            te(E, "stroke", u()), te(E, "stroke-width", a()), te(E, "fill", u());
          }), K(v, E);
        };
        Be(
          C,
          (v) => {
            r() === Uo.ArrowClosed && v(w);
          },
          !0
        );
      }
      K(y, _);
    };
    Be(d, (y) => {
      r() === Uo.Arrow ? y(f) : y(h, !1);
    });
  }
  return ce(c), pe(() => {
    te(c, "id", n()), te(c, "markerWidth", `${o()}`), te(c, "markerHeight", `${i()}`), te(c, "markerUnits", s()), te(c, "orient", l());
  }), K(e, c), de({
    get id() {
      return n();
    },
    set id(y) {
      n(y), m();
    },
    get type() {
      return r();
    },
    set type(y) {
      r(y), m();
    },
    get width() {
      return o();
    },
    set width(y) {
      o(y), m();
    },
    get height() {
      return i();
    },
    set height(y) {
      i(y), m();
    },
    get markerUnits() {
      return s();
    },
    set markerUnits(y) {
      s(y), m();
    },
    get orient() {
      return l();
    },
    set orient(y) {
      l(y), m();
    },
    get color() {
      return u();
    },
    set color(y) {
      u(y), m();
    },
    get strokeWidth() {
      return a();
    },
    set strokeWidth(y) {
      a(y), m();
    }
  });
}
se(
  Su,
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
var ey = /* @__PURE__ */ ve('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function Pu(e, t) {
  ue(t, !1);
  const n = tt(), r = () => U(s, "$visibleEdges", n), o = () => U(a, "$elementsSelectable", n);
  let i = p(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: s,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: a
  } = Ue();
  xr(() => {
    i() && u(i());
  }), me();
  var c = ey(), d = ge(c), f = ge(d);
  Eu(f, {}), ce(d);
  var h = ye(d, 2);
  Sn(h, 1, r, (C) => C.id, (C, w) => {
    var v = /* @__PURE__ */ ae(() => g(w).selectable ?? o()), E = /* @__PURE__ */ ae(() => g(w).type || "default");
    Cu(C, {
      get id() {
        return g(w).id;
      },
      get source() {
        return g(w).source;
      },
      get target() {
        return g(w).target;
      },
      get data() {
        return g(w).data;
      },
      get style() {
        return g(w).style;
      },
      get animated() {
        return g(w).animated;
      },
      get selected() {
        return g(w).selected;
      },
      get selectable() {
        return g(v);
      },
      get deletable() {
        return g(w).deletable;
      },
      get hidden() {
        return g(w).hidden;
      },
      get label() {
        return g(w).label;
      },
      get labelStyle() {
        return g(w).labelStyle;
      },
      get markerStart() {
        return g(w).markerStart;
      },
      get markerEnd() {
        return g(w).markerEnd;
      },
      get sourceHandle() {
        return g(w).sourceHandle;
      },
      get targetHandle() {
        return g(w).targetHandle;
      },
      get sourceX() {
        return g(w).sourceX;
      },
      get sourceY() {
        return g(w).sourceY;
      },
      get targetX() {
        return g(w).targetX;
      },
      get targetY() {
        return g(w).targetY;
      },
      get sourcePosition() {
        return g(w).sourcePosition;
      },
      get targetPosition() {
        return g(w).targetPosition;
      },
      get ariaLabel() {
        return g(w).ariaLabel;
      },
      get interactionWidth() {
        return g(w).interactionWidth;
      },
      get class() {
        return g(w).class;
      },
      get type() {
        return g(E);
      },
      get zIndex() {
        return g(w).zIndex;
      },
      $$events: {
        edgeclick(S) {
          Ne.call(this, t, S);
        },
        edgecontextmenu(S) {
          Ne.call(this, t, S);
        },
        edgemouseenter(S) {
          Ne.call(this, t, S);
        },
        edgemouseleave(S) {
          Ne.call(this, t, S);
        }
      }
    });
  });
  var y = ye(h, 2);
  {
    var _ = (C) => {
      ku(C, {
        onMount: () => {
          Yo(l, !0);
        },
        onDestroy: () => {
          Yo(l, !1);
        }
      });
    };
    Be(y, (C) => {
      r().length > 0 && C(_);
    });
  }
  return ce(c), K(e, c), de({
    get defaultEdgeOptions() {
      return i();
    },
    set defaultEdgeOptions(C) {
      i(C), m();
    }
  });
}
se(Pu, { defaultEdgeOptions: {} }, [], [], !0);
var ty = /* @__PURE__ */ ve('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const ny = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function Js(e, t) {
  ue(t, !1), Ut(e, ny);
  let n = p(t, "x", 12, 0), r = p(t, "y", 12, 0), o = p(t, "width", 12, 0), i = p(t, "height", 12, 0), s = p(t, "isVisible", 12, !0);
  var l = ot(), u = He(l);
  {
    var a = (c) => {
      var d = ty();
      pe(() => {
        et(d, "width", typeof o() == "string" ? o() : `${o()}px`), et(d, "height", typeof i() == "string" ? i() : `${i()}px`), et(d, "transform", `translate(${n()}px, ${r()}px)`);
      }), K(c, d);
    };
    Be(u, (c) => {
      s() && c(a);
    });
  }
  return K(e, l), de({
    get x() {
      return n();
    },
    set x(c) {
      n(c), m();
    },
    get y() {
      return r();
    },
    set y(c) {
      r(c), m();
    },
    get width() {
      return o();
    },
    set width(c) {
      o(c), m();
    },
    get height() {
      return i();
    },
    set height(c) {
      i(c), m();
    },
    get isVisible() {
      return s();
    },
    set isVisible(c) {
      s(c), m();
    }
  });
}
se(
  Js,
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
function Mu(e, t) {
  ue(t, !1);
  const n = tt(), r = () => U(i, "$selectionRect", n), o = () => U(s, "$selectionRectMode", n), { selectionRect: i, selectionRectMode: s } = Ue();
  me();
  var l = /* @__PURE__ */ ae(() => !!(r() && o() === "user")), u = /* @__PURE__ */ ae(() => {
    var f;
    return (f = r()) == null ? void 0 : f.width;
  }), a = /* @__PURE__ */ ae(() => {
    var f;
    return (f = r()) == null ? void 0 : f.height;
  }), c = /* @__PURE__ */ ae(() => {
    var f;
    return (f = r()) == null ? void 0 : f.x;
  }), d = /* @__PURE__ */ ae(() => {
    var f;
    return (f = r()) == null ? void 0 : f.y;
  });
  Js(e, {
    get isVisible() {
      return g(l);
    },
    get width() {
      return g(u);
    },
    get height() {
      return g(a);
    },
    get x() {
      return g(c);
    },
    get y() {
      return g(d);
    }
  }), de();
}
se(Mu, {}, [], [], !0);
var ry = /* @__PURE__ */ ve('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const oy = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function Nu(e, t) {
  ue(t, !1), Ut(e, oy);
  const n = tt(), r = () => U(l, "$selectionRectMode", n), o = () => U(a, "$nodeLookup", n), i = () => U(u, "$nodes", n), s = Ue(), { selectionRectMode: l, nodes: u, nodeLookup: a } = s, c = vi();
  let d = J(null);
  function f(w) {
    const v = i().filter((E) => E.selected);
    c("selectioncontextmenu", { nodes: v, event: w });
  }
  function h(w) {
    const v = i().filter((E) => E.selected);
    c("selectionclick", { nodes: v, event: w });
  }
  oe(
    () => (r(), o(), i()),
    () => {
      r() === "nodes" && (X(d, co(o(), { filter: (w) => !!w.selected })), i());
    }
  ), it(), me();
  var y = ot(), _ = He(y);
  {
    var C = (w) => {
      var v = ry(), E = ge(v);
      Js(E, { width: "100%", height: "100%", x: 0, y: 0 }), ce(v), ct(v, (S, x) => Qn == null ? void 0 : Qn(S, x), () => ({
        disabled: !1,
        store: s,
        onDrag: (S, x, P, N) => {
          c("nodedrag", { event: S, targetNode: null, nodes: N });
        },
        onDragStart: (S, x, P, N) => {
          c("nodedragstart", { event: S, targetNode: null, nodes: N });
        },
        onDragStop: (S, x, P, N) => {
          c("nodedragstop", { event: S, targetNode: null, nodes: N });
        }
      })), _t(() => Ye("contextmenu", v, f)), _t(() => Ye("click", v, h)), _t(() => Ye("keyup", v, () => {
      })), pe(() => te(v, "style", `width: ${g(d).width ?? ""}px; height: ${g(d).height ?? ""}px; transform: translate(${g(d).x ?? ""}px, ${g(d).y ?? ""}px)`)), K(w, v);
    };
    Be(_, (w) => {
      r() === "nodes" && g(d) && on(g(d).x) && on(g(d).y) && w(C);
    });
  }
  K(e, y), de();
}
se(Nu, {}, [], [], !0);
function Ie(e, t) {
  let { enabled: n = !0, trigger: r, type: o = "keydown" } = t;
  function i(s) {
    const l = Array.isArray(r) ? r : [r], u = {
      alt: s.altKey,
      ctrl: s.ctrlKey,
      shift: s.shiftKey,
      meta: s.metaKey
    };
    for (const a of l) {
      const c = {
        modifier: [],
        preventDefault: !1,
        enabled: !0,
        ...a
      }, { modifier: d, key: f, callback: h, preventDefault: y, enabled: _ } = c;
      if (_) {
        if (d.length && !(Array.isArray(d) ? d : [d]).map(
          (v) => typeof v == "string" ? [v] : v
        ).some(
          (v) => v.every((E) => u[E])
        ))
          continue;
        if (s.key === f) {
          y && s.preventDefault();
          const C = {
            node: e,
            trigger: c,
            originalEvent: s
          };
          e.dispatchEvent(new CustomEvent("shortcut", { detail: C })), h == null || h(C);
        }
      }
    }
  }
  return n && e.addEventListener(o, i), {
    update: (s) => {
      const { enabled: l = !0, type: u = "keydown" } = s;
      n && (!l || o !== u) ? e.removeEventListener(o, i) : !n && l && e.addEventListener(u, i), n = l, o = u, r = s.trigger;
    },
    destroy: () => {
      e.removeEventListener(o, i);
    }
  };
}
function Ou(e, t) {
  ue(t, !1);
  let n = p(t, "selectionKey", 12, "Shift"), r = p(t, "multiSelectionKey", 28, () => Jo() ? "Meta" : "Control"), o = p(t, "deleteKey", 12, "Backspace"), i = p(t, "panActivationKey", 12, " "), s = p(t, "zoomActivationKey", 28, () => Jo() ? "Meta" : "Control");
  const {
    selectionKeyPressed: l,
    multiselectionKeyPressed: u,
    deleteKeyPressed: a,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: d,
    selectionRect: f
  } = Ue();
  function h(v) {
    return v !== null && typeof v == "object";
  }
  function y(v) {
    return h(v) ? v.modifier || [] : [];
  }
  function _(v) {
    return v == null ? "" : h(v) ? v.key : v;
  }
  function C(v, E) {
    return (Array.isArray(v) ? v : [v]).map((x) => {
      const P = _(x);
      return {
        key: P,
        modifier: y(x),
        enabled: P !== null,
        callback: E
      };
    });
  }
  function w() {
    f.set(null), l.set(!1), u.set(!1), a.set(!1), c.set(!1), d.set(!1);
  }
  return me(), Ye("blur", gt, w), Ye("contextmenu", gt, w), ct(gt, (v, E) => Ie == null ? void 0 : Ie(v, E), () => ({
    trigger: C(n(), () => l.set(!0)),
    type: "keydown"
  })), ct(gt, (v, E) => Ie == null ? void 0 : Ie(v, E), () => ({
    trigger: C(n(), () => l.set(!1)),
    type: "keyup"
  })), ct(gt, (v, E) => Ie == null ? void 0 : Ie(v, E), () => ({
    trigger: C(r(), () => u.set(!0)),
    type: "keydown"
  })), ct(gt, (v, E) => Ie == null ? void 0 : Ie(v, E), () => ({
    trigger: C(r(), () => u.set(!1)),
    type: "keyup"
  })), ct(gt, (v, E) => Ie == null ? void 0 : Ie(v, E), () => ({
    trigger: C(o(), (v) => {
      !(v.originalEvent.ctrlKey || v.originalEvent.metaKey || v.originalEvent.shiftKey) && !V0(v.originalEvent) && a.set(!0);
    }),
    type: "keydown"
  })), ct(gt, (v, E) => Ie == null ? void 0 : Ie(v, E), () => ({
    trigger: C(o(), () => a.set(!1)),
    type: "keyup"
  })), ct(gt, (v, E) => Ie == null ? void 0 : Ie(v, E), () => ({
    trigger: C(i(), () => c.set(!0)),
    type: "keydown"
  })), ct(gt, (v, E) => Ie == null ? void 0 : Ie(v, E), () => ({
    trigger: C(i(), () => c.set(!1)),
    type: "keyup"
  })), ct(gt, (v, E) => Ie == null ? void 0 : Ie(v, E), () => ({
    trigger: C(s(), () => d.set(!0)),
    type: "keydown"
  })), ct(gt, (v, E) => Ie == null ? void 0 : Ie(v, E), () => ({
    trigger: C(s(), () => d.set(!1)),
    type: "keyup"
  })), de({
    get selectionKey() {
      return n();
    },
    set selectionKey(v) {
      n(v), m();
    },
    get multiSelectionKey() {
      return r();
    },
    set multiSelectionKey(v) {
      r(v), m();
    },
    get deleteKey() {
      return o();
    },
    set deleteKey(v) {
      o(v), m();
    },
    get panActivationKey() {
      return i();
    },
    set panActivationKey(v) {
      i(v), m();
    },
    get zoomActivationKey() {
      return s();
    },
    set zoomActivationKey(v) {
      s(v), m();
    }
  });
}
se(
  Ou,
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
var iy = /* @__PURE__ */ Ge('<path fill="none" class="svelte-flow__connection-path"></path>'), sy = /* @__PURE__ */ Ge('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function Tu(e, t) {
  ue(t, !1);
  const n = tt(), r = () => U(f, "$connection", n), o = () => U(h, "$connectionLineType", n), i = () => U(c, "$width", n), s = () => U(d, "$height", n);
  let l = p(t, "containerStyle", 12, ""), u = p(t, "style", 12, ""), a = p(t, "isCustomComponent", 12, !1);
  const {
    width: c,
    height: d,
    connection: f,
    connectionLineType: h
  } = Ue();
  let y = J(null);
  oe(
    () => (r(), B(a()), o(), g(y), gs),
    () => {
      if (r().inProgress && !a()) {
        const { from: v, to: E, fromPosition: S, toPosition: x } = r(), P = {
          sourceX: v.x,
          sourceY: v.y,
          sourcePosition: S,
          targetX: E.x,
          targetY: E.y,
          targetPosition: x
        };
        switch (o()) {
          case Jn.Bezier:
            ((N) => X(y, N[0]))(qc(P));
            break;
          case Jn.Step:
            ((N) => X(y, N[0]))(Qo({ ...P, borderRadius: 0 }));
            break;
          case Jn.SmoothStep:
            ((N) => X(y, N[0]))(Qo(P));
            break;
          default:
            ((N) => X(y, N[0]))(gs(P));
        }
      }
    }
  ), it(), me();
  var _ = ot(), C = He(_);
  {
    var w = (v) => {
      var E = sy(), S = ge(E);
      const x = /* @__PURE__ */ ae(() => jt(dt([
        "svelte-flow__connection",
        A0(r().isValid)
      ])));
      var P = ge(S);
      Je(P, t, "connectionLine", {}, null);
      var N = ye(P);
      {
        var O = (T) => {
          var L = iy();
          pe(() => {
            te(L, "d", g(y)), te(L, "style", u());
          }), K(T, L);
        };
        Be(N, (T) => {
          a() || T(O);
        });
      }
      ce(S), ce(E), pe(() => {
        te(E, "width", i()), te(E, "height", s()), te(E, "style", l()), Bn(S, g(x), "");
      }), K(v, E);
    };
    Be(C, (v) => {
      r().inProgress && v(w);
    });
  }
  return K(e, _), de({
    get containerStyle() {
      return l();
    },
    set containerStyle(v) {
      l(v), m();
    },
    get style() {
      return u();
    },
    set style(v) {
      u(v), m();
    },
    get isCustomComponent() {
      return a();
    },
    set isCustomComponent(v) {
      a(v), m();
    }
  });
}
se(
  Tu,
  {
    containerStyle: {},
    style: {},
    isCustomComponent: {}
  },
  ["connectionLine"],
  [],
  !0
);
var ly = /* @__PURE__ */ ve("<div><!></div>");
function Ei(e, t) {
  const n = Se(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = Se(n, ["position", "style", "class"]);
  ue(t, !1);
  const o = tt(), i = () => U(c, "$selectionRectMode", o), s = J();
  let l = p(t, "position", 12, "top-right"), u = p(t, "style", 12, void 0), a = p(t, "class", 12, void 0);
  const { selectionRectMode: c } = Ue();
  oe(() => B(l()), () => {
    X(s, `${l()}`.split("-"));
  }), it(), me();
  var d = ly();
  let f;
  var h = ge(d);
  return Je(h, t, "default", {}, null), ce(d), pe(() => {
    f = Zt(d, f, {
      class: dt([
        "svelte-flow__panel",
        a(),
        ...g(s)
      ]),
      style: u(),
      ...r
    }), et(d, "pointer-events", i() ? "none" : "");
  }), K(e, d), de({
    get position() {
      return l();
    },
    set position(y) {
      l(y), m();
    },
    get style() {
      return u();
    },
    set style(y) {
      u(y), m();
    },
    get class() {
      return a();
    },
    set class(y) {
      a(y), m();
    }
  });
}
se(Ei, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var ay = /* @__PURE__ */ ve('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function Au(e, t) {
  ue(t, !1);
  let n = p(t, "proOptions", 12, void 0), r = p(t, "position", 12, "bottom-right");
  me();
  var o = ot(), i = He(o);
  {
    var s = (l) => {
      Ei(l, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (u, a) => {
          var c = ay();
          K(u, c);
        },
        $$slots: { default: !0 }
      });
    };
    Be(i, (l) => {
      var u;
      (u = n()) != null && u.hideAttribution || l(s);
    });
  }
  return K(e, o), de({
    get proOptions() {
      return n();
    },
    set proOptions(l) {
      n(l), m();
    },
    get position() {
      return r();
    },
    set position(l) {
      r(l), m();
    }
  });
}
se(Au, { proOptions: {}, position: {} }, [], [], !0);
function ua(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: i, paneClickDistance: s }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), o !== void 0 && e.setMaxZoom(o), i !== void 0 && e.setTranslateExtent(i), s !== void 0 && e.setPaneClickDistance(s);
}
const cy = (e) => Object.keys(e);
function da(e, t) {
  cy(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function uy() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function dy(e = "light") {
  return St("light", (n) => {
    if (e !== "system") {
      n(e);
      return;
    }
    const r = uy(), o = () => n(r != null && r.matches ? "dark" : "light");
    return n(r != null && r.matches ? "dark" : "light"), r == null || r.addEventListener("change", o), () => {
      r == null || r.removeEventListener("change", o);
    };
  });
}
var fy = /* @__PURE__ */ ve('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), hy = /* @__PURE__ */ ve("<!> <!>", 1), gy = /* @__PURE__ */ ve("<div><!> <!> <!> <!></div>");
const vy = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function zu(e, t) {
  const n = Vf(t), r = Se(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), o = Se(r, [
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
  ue(t, !1), Ut(e, vy);
  const i = tt(), s = () => U(v(), "$viewport", i), l = () => U(Sr, "$initialized", i), u = () => U(g(a), "$colorModeClass", i), a = J();
  let c = p(t, "id", 12, "1"), d = p(t, "nodes", 12), f = p(t, "edges", 12), h = p(t, "fitView", 12, void 0), y = p(t, "fitViewOptions", 12, void 0), _ = p(t, "minZoom", 12, void 0), C = p(t, "maxZoom", 12, void 0), w = p(t, "initialViewport", 12, void 0), v = p(t, "viewport", 12, void 0), E = p(t, "nodeTypes", 12, void 0), S = p(t, "edgeTypes", 12, void 0), x = p(t, "selectionKey", 12, void 0), P = p(t, "selectionMode", 12, void 0), N = p(t, "panActivationKey", 12, void 0), O = p(t, "multiSelectionKey", 12, void 0), T = p(t, "zoomActivationKey", 12, void 0), L = p(t, "nodesDraggable", 12, void 0), V = p(t, "nodesConnectable", 12, void 0), $ = p(t, "nodeDragThreshold", 12, void 0), H = p(t, "elementsSelectable", 12, void 0), k = p(t, "snapGrid", 12, void 0), I = p(t, "deleteKey", 12, void 0), b = p(t, "connectionRadius", 12, void 0), M = p(t, "connectionLineType", 12, void 0), A = p(t, "connectionMode", 28, () => In.Strict), D = p(t, "connectionLineStyle", 12, ""), Y = p(t, "connectionLineContainerStyle", 12, ""), Z = p(t, "onMoveStart", 12, void 0), Q = p(t, "onMove", 12, void 0), G = p(t, "onMoveEnd", 12, void 0), F = p(t, "isValidConnection", 12, void 0), ne = p(t, "translateExtent", 12, void 0), fe = p(t, "nodeExtent", 12, void 0), re = p(t, "onlyRenderVisibleElements", 12, void 0), ke = p(t, "panOnScrollMode", 28, () => mn.Free), j = p(t, "preventScrolling", 12, !0), ee = p(t, "zoomOnScroll", 12, !0), he = p(t, "zoomOnDoubleClick", 12, !0), _e = p(t, "zoomOnPinch", 12, !0), Ve = p(t, "panOnScroll", 12, !1), q = p(t, "panOnDrag", 12, !0), $e = p(t, "selectionOnDrag", 12, void 0), Ae = p(t, "autoPanOnConnect", 12, !0), Fe = p(t, "autoPanOnNodeDrag", 12, !0), Le = p(t, "onerror", 12, void 0), Xe = p(t, "ondelete", 12, void 0), W = p(t, "onedgecreate", 12, void 0), xe = p(t, "attributionPosition", 12, void 0), We = p(t, "proOptions", 12, void 0), st = p(t, "defaultEdgeOptions", 12, void 0), ze = p(t, "width", 12, void 0), qe = p(t, "height", 12, void 0), ie = p(t, "colorMode", 12, "light"), De = p(t, "onconnect", 12, void 0), Qt = p(t, "onconnectstart", 12, void 0), un = p(t, "onconnectend", 12, void 0), be = p(t, "onbeforedelete", 12, void 0), je = p(t, "oninit", 12, void 0), Me = p(t, "nodeOrigin", 12, void 0), Qe = p(t, "paneClickDistance", 12, 0), ft = p(t, "nodeClickDistance", 12, 0), Mn = p(t, "defaultMarkerColor", 12, "#b1b1b7"), Er = p(t, "style", 12, void 0), pt = p(t, "class", 12, void 0), Et = J(), Vt = J(), lt = J();
  const Ti = s() || w(), nt = Nf(ki) ? Ue() : $1({
    nodes: R(d()),
    edges: R(f()),
    width: ze(),
    height: qe(),
    fitView: h(),
    nodeOrigin: Me(),
    nodeExtent: fe()
  });
  xr(() => (nt.width.set(g(Vt)), nt.height.set(g(lt)), nt.domNode.set(g(Et)), nt.syncNodeStores(d()), nt.syncEdgeStores(f()), nt.syncViewport(v()), h() !== void 0 && nt.fitViewOnInit.set(h()), y() && nt.fitViewOptions.set(y()), ua(nt, {
    nodeTypes: E(),
    edgeTypes: S(),
    minZoom: _(),
    maxZoom: C(),
    translateExtent: ne(),
    paneClickDistance: Qe()
  }), () => {
    nt.reset();
  }));
  const { initialized: Sr } = nt;
  let Pr = J(!1);
  oe(
    () => (g(Vt), g(lt)),
    () => {
      g(Vt) !== void 0 && g(lt) !== void 0 && (nt.width.set(g(Vt)), nt.height.set(g(lt)));
    }
  ), oe(
    () => (g(Pr), l(), B(je())),
    () => {
      var z;
      !g(Pr) && l() && ((z = je()) == null || z(), X(Pr, !0));
    }
  ), oe(
    () => (B(c()), B(M()), B(b()), B(P()), B(k()), B(Mn()), B(L()), B(V()), B(H()), B(re()), B(F()), B(Ae()), B(Fe()), B(Le()), B(Xe()), B(W()), B(A()), B($()), B(De()), B(Qt()), B(un()), B(be()), B(Me()), da),
    () => {
      const z = {
        flowId: c(),
        connectionLineType: M(),
        connectionRadius: b(),
        selectionMode: P(),
        snapGrid: k(),
        defaultMarkerColor: Mn(),
        nodesDraggable: L(),
        nodesConnectable: V(),
        elementsSelectable: H(),
        onlyRenderVisibleElements: re(),
        isValidConnection: F(),
        autoPanOnConnect: Ae(),
        autoPanOnNodeDrag: Fe(),
        onerror: Le(),
        ondelete: Xe(),
        onedgecreate: W(),
        connectionMode: A(),
        nodeDragThreshold: $(),
        onconnect: De(),
        onconnectstart: Qt(),
        onconnectend: un(),
        onbeforedelete: be(),
        nodeOrigin: Me()
      };
      da(nt, z);
    }
  ), oe(
    () => (B(E()), B(S()), B(_()), B(C()), B(ne()), B(Qe())),
    () => {
      ua(nt, {
        nodeTypes: E(),
        edgeTypes: S(),
        minZoom: _(),
        maxZoom: C(),
        translateExtent: ne(),
        paneClickDistance: Qe()
      });
    }
  ), oe(
    () => B(ie()),
    () => {
      Ff(X(a, dy(ie())), "$colorModeClass", i);
    }
  ), it(), me();
  var Ot = gy();
  let yo;
  var mo = ge(Ot);
  Ou(mo, {
    get selectionKey() {
      return x();
    },
    get deleteKey() {
      return I();
    },
    get panActivationKey() {
      return N();
    },
    get multiSelectionKey() {
      return O();
    },
    get zoomActivationKey() {
      return T();
    }
  });
  var il = ye(mo, 2), vd = /* @__PURE__ */ ae(() => ke() === void 0 ? mn.Free : ke()), yd = /* @__PURE__ */ ae(() => j() === void 0 ? !0 : j()), md = /* @__PURE__ */ ae(() => ee() === void 0 ? !0 : ee()), pd = /* @__PURE__ */ ae(() => he() === void 0 ? !0 : he()), wd = /* @__PURE__ */ ae(() => _e() === void 0 ? !0 : _e()), _d = /* @__PURE__ */ ae(() => Ve() === void 0 ? !1 : Ve()), bd = /* @__PURE__ */ ae(() => q() === void 0 ? !0 : q()), xd = /* @__PURE__ */ ae(() => Qe() === void 0 ? 0 : Qe());
  pu(il, {
    initialViewport: Ti,
    get onMoveStart() {
      return Z();
    },
    get onMove() {
      return Q();
    },
    get onMoveEnd() {
      return G();
    },
    get panOnScrollMode() {
      return g(vd);
    },
    get preventScrolling() {
      return g(yd);
    },
    get zoomOnScroll() {
      return g(md);
    },
    get zoomOnDoubleClick() {
      return g(pd);
    },
    get zoomOnPinch() {
      return g(wd);
    },
    get panOnScroll() {
      return g(_d);
    },
    get panOnDrag() {
      return g(bd);
    },
    get paneClickDistance() {
      return g(xd);
    },
    children: (z, Qm) => {
      var kd = /* @__PURE__ */ ae(() => q() === void 0 ? !0 : q());
      wu(z, {
        get panOnDrag() {
          return g(kd);
        },
        get selectionOnDrag() {
          return $e();
        },
        $$events: {
          paneclick(Mr) {
            Ne.call(this, t, Mr);
          },
          panecontextmenu(Mr) {
            Ne.call(this, t, Mr);
          }
        },
        children: (Mr, ep) => {
          var ll = hy(), al = He(ll);
          _u(al, {
            children: (Sd, tp) => {
              var cl = fy(), ul = He(cl);
              Pu(ul, {
                get defaultEdgeOptions() {
                  return st();
                },
                $$events: {
                  edgeclick(Pe) {
                    Ne.call(this, t, Pe);
                  },
                  edgecontextmenu(Pe) {
                    Ne.call(this, t, Pe);
                  },
                  edgemouseenter(Pe) {
                    Ne.call(this, t, Pe);
                  },
                  edgemouseleave(Pe) {
                    Ne.call(this, t, Pe);
                  }
                }
              });
              var dl = ye(ul, 2);
              Tu(dl, {
                get containerStyle() {
                  return Y();
                },
                get style() {
                  return D();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (Pe, np) => {
                    var hl = ot(), Md = He(hl);
                    Je(Md, t, "connectionLine", {}, null), K(Pe, hl);
                  }
                }
              });
              var fl = ye(dl, 6);
              xu(fl, {
                get nodeClickDistance() {
                  return ft();
                },
                $$events: {
                  nodeclick(Pe) {
                    Ne.call(this, t, Pe);
                  },
                  nodemouseenter(Pe) {
                    Ne.call(this, t, Pe);
                  },
                  nodemousemove(Pe) {
                    Ne.call(this, t, Pe);
                  },
                  nodemouseleave(Pe) {
                    Ne.call(this, t, Pe);
                  },
                  nodedragstart(Pe) {
                    Ne.call(this, t, Pe);
                  },
                  nodedrag(Pe) {
                    Ne.call(this, t, Pe);
                  },
                  nodedragstop(Pe) {
                    Ne.call(this, t, Pe);
                  },
                  nodecontextmenu(Pe) {
                    Ne.call(this, t, Pe);
                  }
                }
              });
              var Pd = ye(fl, 2);
              Nu(Pd, {
                $$events: {
                  selectionclick(Pe) {
                    Ne.call(this, t, Pe);
                  },
                  selectioncontextmenu(Pe) {
                    Ne.call(this, t, Pe);
                  },
                  nodedragstart(Pe) {
                    Ne.call(this, t, Pe);
                  },
                  nodedrag(Pe) {
                    Ne.call(this, t, Pe);
                  },
                  nodedragstop(Pe) {
                    Ne.call(this, t, Pe);
                  }
                }
              }), K(Sd, cl);
            },
            $$slots: { default: !0 }
          });
          var Ed = ye(al, 2);
          Mu(Ed, {}), K(Mr, ll);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var sl = ye(il, 2);
  Au(sl, {
    get proOptions() {
      return We();
    },
    get position() {
      return xe();
    }
  });
  var Cd = ye(sl, 2);
  return Je(Cd, t, "default", {}, null), ce(Ot), lr(Ot, (z) => X(Et, z), () => g(Et)), pe(() => yo = Zt(
    Ot,
    yo,
    {
      style: Er(),
      class: dt([
        "svelte-flow",
        pt(),
        u()
      ]),
      "data-testid": "svelte-flow__wrapper",
      ...o,
      role: "application"
    },
    "svelte-12wlba6"
  )), kl(Ot, "clientWidth", (z) => X(Vt, z)), kl(Ot, "clientHeight", (z) => X(lt, z)), Ye("dragover", Ot, function(z) {
    Ne.call(this, t, z);
  }), Ye("drop", Ot, function(z) {
    Ne.call(this, t, z);
  }), K(e, Ot), de({
    get id() {
      return c();
    },
    set id(z) {
      c(z), m();
    },
    get nodes() {
      return d();
    },
    set nodes(z) {
      d(z), m();
    },
    get edges() {
      return f();
    },
    set edges(z) {
      f(z), m();
    },
    get fitView() {
      return h();
    },
    set fitView(z) {
      h(z), m();
    },
    get fitViewOptions() {
      return y();
    },
    set fitViewOptions(z) {
      y(z), m();
    },
    get minZoom() {
      return _();
    },
    set minZoom(z) {
      _(z), m();
    },
    get maxZoom() {
      return C();
    },
    set maxZoom(z) {
      C(z), m();
    },
    get initialViewport() {
      return w();
    },
    set initialViewport(z) {
      w(z), m();
    },
    get viewport() {
      return v();
    },
    set viewport(z) {
      v(z), m();
    },
    get nodeTypes() {
      return E();
    },
    set nodeTypes(z) {
      E(z), m();
    },
    get edgeTypes() {
      return S();
    },
    set edgeTypes(z) {
      S(z), m();
    },
    get selectionKey() {
      return x();
    },
    set selectionKey(z) {
      x(z), m();
    },
    get selectionMode() {
      return P();
    },
    set selectionMode(z) {
      P(z), m();
    },
    get panActivationKey() {
      return N();
    },
    set panActivationKey(z) {
      N(z), m();
    },
    get multiSelectionKey() {
      return O();
    },
    set multiSelectionKey(z) {
      O(z), m();
    },
    get zoomActivationKey() {
      return T();
    },
    set zoomActivationKey(z) {
      T(z), m();
    },
    get nodesDraggable() {
      return L();
    },
    set nodesDraggable(z) {
      L(z), m();
    },
    get nodesConnectable() {
      return V();
    },
    set nodesConnectable(z) {
      V(z), m();
    },
    get nodeDragThreshold() {
      return $();
    },
    set nodeDragThreshold(z) {
      $(z), m();
    },
    get elementsSelectable() {
      return H();
    },
    set elementsSelectable(z) {
      H(z), m();
    },
    get snapGrid() {
      return k();
    },
    set snapGrid(z) {
      k(z), m();
    },
    get deleteKey() {
      return I();
    },
    set deleteKey(z) {
      I(z), m();
    },
    get connectionRadius() {
      return b();
    },
    set connectionRadius(z) {
      b(z), m();
    },
    get connectionLineType() {
      return M();
    },
    set connectionLineType(z) {
      M(z), m();
    },
    get connectionMode() {
      return A();
    },
    set connectionMode(z) {
      A(z), m();
    },
    get connectionLineStyle() {
      return D();
    },
    set connectionLineStyle(z) {
      D(z), m();
    },
    get connectionLineContainerStyle() {
      return Y();
    },
    set connectionLineContainerStyle(z) {
      Y(z), m();
    },
    get onMoveStart() {
      return Z();
    },
    set onMoveStart(z) {
      Z(z), m();
    },
    get onMove() {
      return Q();
    },
    set onMove(z) {
      Q(z), m();
    },
    get onMoveEnd() {
      return G();
    },
    set onMoveEnd(z) {
      G(z), m();
    },
    get isValidConnection() {
      return F();
    },
    set isValidConnection(z) {
      F(z), m();
    },
    get translateExtent() {
      return ne();
    },
    set translateExtent(z) {
      ne(z), m();
    },
    get nodeExtent() {
      return fe();
    },
    set nodeExtent(z) {
      fe(z), m();
    },
    get onlyRenderVisibleElements() {
      return re();
    },
    set onlyRenderVisibleElements(z) {
      re(z), m();
    },
    get panOnScrollMode() {
      return ke();
    },
    set panOnScrollMode(z) {
      ke(z), m();
    },
    get preventScrolling() {
      return j();
    },
    set preventScrolling(z) {
      j(z), m();
    },
    get zoomOnScroll() {
      return ee();
    },
    set zoomOnScroll(z) {
      ee(z), m();
    },
    get zoomOnDoubleClick() {
      return he();
    },
    set zoomOnDoubleClick(z) {
      he(z), m();
    },
    get zoomOnPinch() {
      return _e();
    },
    set zoomOnPinch(z) {
      _e(z), m();
    },
    get panOnScroll() {
      return Ve();
    },
    set panOnScroll(z) {
      Ve(z), m();
    },
    get panOnDrag() {
      return q();
    },
    set panOnDrag(z) {
      q(z), m();
    },
    get selectionOnDrag() {
      return $e();
    },
    set selectionOnDrag(z) {
      $e(z), m();
    },
    get autoPanOnConnect() {
      return Ae();
    },
    set autoPanOnConnect(z) {
      Ae(z), m();
    },
    get autoPanOnNodeDrag() {
      return Fe();
    },
    set autoPanOnNodeDrag(z) {
      Fe(z), m();
    },
    get onerror() {
      return Le();
    },
    set onerror(z) {
      Le(z), m();
    },
    get ondelete() {
      return Xe();
    },
    set ondelete(z) {
      Xe(z), m();
    },
    get onedgecreate() {
      return W();
    },
    set onedgecreate(z) {
      W(z), m();
    },
    get attributionPosition() {
      return xe();
    },
    set attributionPosition(z) {
      xe(z), m();
    },
    get proOptions() {
      return We();
    },
    set proOptions(z) {
      We(z), m();
    },
    get defaultEdgeOptions() {
      return st();
    },
    set defaultEdgeOptions(z) {
      st(z), m();
    },
    get width() {
      return ze();
    },
    set width(z) {
      ze(z), m();
    },
    get height() {
      return qe();
    },
    set height(z) {
      qe(z), m();
    },
    get colorMode() {
      return ie();
    },
    set colorMode(z) {
      ie(z), m();
    },
    get onconnect() {
      return De();
    },
    set onconnect(z) {
      De(z), m();
    },
    get onconnectstart() {
      return Qt();
    },
    set onconnectstart(z) {
      Qt(z), m();
    },
    get onconnectend() {
      return un();
    },
    set onconnectend(z) {
      un(z), m();
    },
    get onbeforedelete() {
      return be();
    },
    set onbeforedelete(z) {
      be(z), m();
    },
    get oninit() {
      return je();
    },
    set oninit(z) {
      je(z), m();
    },
    get nodeOrigin() {
      return Me();
    },
    set nodeOrigin(z) {
      Me(z), m();
    },
    get paneClickDistance() {
      return Qe();
    },
    set paneClickDistance(z) {
      Qe(z), m();
    },
    get nodeClickDistance() {
      return ft();
    },
    set nodeClickDistance(z) {
      ft(z), m();
    },
    get defaultMarkerColor() {
      return Mn();
    },
    set defaultMarkerColor(z) {
      Mn(z), m();
    },
    get style() {
      return Er();
    },
    set style(z) {
      Er(z), m();
    },
    get class() {
      return pt();
    },
    set class(z) {
      pt(z), m();
    }
  });
}
se(
  zu,
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
function Du(e, t) {
  ue(t, !1);
  let n = p(t, "initialNodes", 12, void 0), r = p(t, "initialEdges", 12, void 0), o = p(t, "initialWidth", 12, void 0), i = p(t, "initialHeight", 12, void 0), s = p(t, "fitView", 12, void 0), l = p(t, "nodeOrigin", 12, void 0);
  const u = mu({
    nodes: n(),
    edges: r(),
    width: o(),
    height: i(),
    nodeOrigin: l(),
    fitView: s()
  });
  ir(ki, { getStore: () => u }), Is(() => {
    u.reset();
  }), me();
  var a = ot(), c = He(a);
  return Je(c, t, "default", {}, null), K(e, a), de({
    get initialNodes() {
      return n();
    },
    set initialNodes(d) {
      n(d), m();
    },
    get initialEdges() {
      return r();
    },
    set initialEdges(d) {
      r(d), m();
    },
    get initialWidth() {
      return o();
    },
    set initialWidth(d) {
      o(d), m();
    },
    get initialHeight() {
      return i();
    },
    set initialHeight(d) {
      i(d), m();
    },
    get fitView() {
      return s();
    },
    set fitView(d) {
      s(d), m();
    },
    get nodeOrigin() {
      return l();
    },
    set nodeOrigin(d) {
      l(d), m();
    }
  });
}
se(
  Du,
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
var yy = /* @__PURE__ */ ve("<button><!></button>");
function Ir(e, t) {
  const n = Se(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = Se(n, ["class"]);
  ue(t, !1);
  let o = p(t, "class", 12, void 0), i, s, l, u, a;
  me();
  var c = yy();
  let d;
  var f = ge(c);
  return Je(f, t, "default", { class: "button-svg" }, null), ce(c), pe(() => {
    d = Zt(c, d, {
      type: "button",
      class: dt([
        "svelte-flow__controls-button",
        o()
      ]),
      ...r
    }), et(c, "--xy-controls-button-background-color-props", i), et(c, "--xy-controls-button-background-color-hover-props", s), et(c, "--xy-controls-button-color-props", l), et(c, "--xy-controls-button-color-hover-props", u), et(c, "--xy-controls-button-border-color-props", a);
  }), Ye("click", c, function(h) {
    Ne.call(this, t, h);
  }), K(e, c), de({
    get class() {
      return o();
    },
    set class(h) {
      o(h), m();
    }
  });
}
se(Ir, { class: {} }, ["default"], [], !0);
var my = /* @__PURE__ */ Ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function Lu(e) {
  var t = my();
  K(e, t);
}
se(Lu, {}, [], [], !0);
var py = /* @__PURE__ */ Ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Iu(e) {
  var t = py();
  K(e, t);
}
se(Iu, {}, [], [], !0);
var wy = /* @__PURE__ */ Ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Hu(e) {
  var t = wy();
  K(e, t);
}
se(Hu, {}, [], [], !0);
var _y = /* @__PURE__ */ Ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function $u(e) {
  var t = _y();
  K(e, t);
}
se($u, {}, [], [], !0);
var by = /* @__PURE__ */ Ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function Ru(e) {
  var t = by();
  K(e, t);
}
se(Ru, {}, [], [], !0);
var xy = /* @__PURE__ */ ve("<!> <!>", 1), Cy = /* @__PURE__ */ ve("<!> <!> <!> <!> <!> <!>", 1);
function Vu(e, t) {
  ue(t, !1);
  const n = tt(), r = () => U(M, "$nodesDraggable", n), o = () => U(A, "$nodesConnectable", n), i = () => U(D, "$elementsSelectable", n), s = () => U(k, "$viewport", n), l = () => U(I, "$minZoom", n), u = () => U(b, "$maxZoom", n), a = J(), c = J(), d = J(), f = J();
  let h = p(t, "position", 12, "bottom-left"), y = p(t, "showZoom", 12, !0), _ = p(t, "showFitView", 12, !0), C = p(t, "showLock", 12, !0), w = p(t, "buttonBgColor", 12, void 0), v = p(t, "buttonBgColorHover", 12, void 0), E = p(t, "buttonColor", 12, void 0), S = p(t, "buttonColorHover", 12, void 0), x = p(t, "buttonBorderColor", 12, void 0), P = p(t, "ariaLabel", 12, void 0), N = p(t, "style", 12, void 0), O = p(t, "orientation", 12, "vertical"), T = p(t, "fitViewOptions", 12, void 0), L = p(t, "class", 12, "");
  const {
    zoomIn: V,
    zoomOut: $,
    fitView: H,
    viewport: k,
    minZoom: I,
    maxZoom: b,
    nodesDraggable: M,
    nodesConnectable: A,
    elementsSelectable: D
  } = Ue(), Y = {
    bgColor: w(),
    bgColorHover: v(),
    color: E(),
    colorHover: S(),
    borderColor: x()
  }, Z = () => {
    V();
  }, Q = () => {
    $();
  }, G = () => {
    H(T());
  }, F = () => {
    X(a, !g(a)), M.set(g(a)), A.set(g(a)), D.set(g(a));
  };
  oe(
    () => (r(), o(), i()),
    () => {
      X(a, r() || o() || i());
    }
  ), oe(() => (s(), l()), () => {
    X(c, s().zoom <= l());
  }), oe(() => (s(), u()), () => {
    X(d, s().zoom >= u());
  }), oe(() => B(O()), () => {
    X(f, O() === "horizontal" ? "horizontal" : "vertical");
  }), it(), me();
  var ne = /* @__PURE__ */ ae(() => dt([
    "svelte-flow__controls",
    g(f),
    L()
  ])), fe = /* @__PURE__ */ ae(() => P() ?? "Svelte Flow controls");
  return Ei(e, {
    get class() {
      return g(ne);
    },
    get position() {
      return h();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return g(fe);
    },
    get style() {
      return N();
    },
    children: (re, ke) => {
      var j = Cy(), ee = He(j);
      Je(ee, t, "before", {}, null);
      var he = ye(ee, 2);
      {
        var _e = (Xe) => {
          var W = xy(), xe = He(W);
          Ir(xe, An(
            {
              class: "svelte-flow__controls-zoomin",
              title: "zoom in",
              "aria-label": "zoom in",
              get disabled() {
                return g(d);
              }
            },
            Y,
            {
              $$events: { click: Z },
              children: (st, ze) => {
                Lu(st);
              },
              $$slots: { default: !0 }
            }
          ));
          var We = ye(xe, 2);
          Ir(We, An(
            {
              class: "svelte-flow__controls-zoomout",
              title: "zoom out",
              "aria-label": "zoom out",
              get disabled() {
                return g(c);
              }
            },
            Y,
            {
              $$events: { click: Q },
              children: (st, ze) => {
                Iu(st);
              },
              $$slots: { default: !0 }
            }
          )), K(Xe, W);
        };
        Be(he, (Xe) => {
          y() && Xe(_e);
        });
      }
      var Ve = ye(he, 2);
      {
        var q = (Xe) => {
          Ir(Xe, An(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            Y,
            {
              $$events: { click: G },
              children: (W, xe) => {
                Hu(W);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        Be(Ve, (Xe) => {
          _() && Xe(q);
        });
      }
      var $e = ye(Ve, 2);
      {
        var Ae = (Xe) => {
          Ir(Xe, An(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            Y,
            {
              $$events: { click: F },
              children: (W, xe) => {
                var We = ot(), st = He(We);
                {
                  var ze = (ie) => {
                    Ru(ie);
                  }, qe = (ie) => {
                    $u(ie);
                  };
                  Be(st, (ie) => {
                    g(a) ? ie(ze) : ie(qe, !1);
                  });
                }
                K(W, We);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        Be($e, (Xe) => {
          C() && Xe(Ae);
        });
      }
      var Fe = ye($e, 2);
      Je(Fe, t, "default", {}, null);
      var Le = ye(Fe, 2);
      Je(Le, t, "after", {}, null), K(re, j);
    },
    $$slots: { default: !0 }
  }), de({
    get position() {
      return h();
    },
    set position(re) {
      h(re), m();
    },
    get showZoom() {
      return y();
    },
    set showZoom(re) {
      y(re), m();
    },
    get showFitView() {
      return _();
    },
    set showFitView(re) {
      _(re), m();
    },
    get showLock() {
      return C();
    },
    set showLock(re) {
      C(re), m();
    },
    get buttonBgColor() {
      return w();
    },
    set buttonBgColor(re) {
      w(re), m();
    },
    get buttonBgColorHover() {
      return v();
    },
    set buttonBgColorHover(re) {
      v(re), m();
    },
    get buttonColor() {
      return E();
    },
    set buttonColor(re) {
      E(re), m();
    },
    get buttonColorHover() {
      return S();
    },
    set buttonColorHover(re) {
      S(re), m();
    },
    get buttonBorderColor() {
      return x();
    },
    set buttonBorderColor(re) {
      x(re), m();
    },
    get ariaLabel() {
      return P();
    },
    set ariaLabel(re) {
      P(re), m();
    },
    get style() {
      return N();
    },
    set style(re) {
      N(re), m();
    },
    get orientation() {
      return O();
    },
    set orientation(re) {
      O(re), m();
    },
    get fitViewOptions() {
      return T();
    },
    set fitViewOptions(re) {
      T(re), m();
    },
    get class() {
      return L();
    },
    set class(re) {
      L(re), m();
    }
  });
}
se(
  Vu,
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
var pn;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(pn || (pn = {}));
var ky = /* @__PURE__ */ Ge("<circle></circle>");
function Yu(e, t) {
  ue(t, !1);
  let n = p(t, "radius", 12, 5), r = p(t, "class", 12, "");
  me();
  var o = ky();
  const i = /* @__PURE__ */ ae(() => jt(dt([
    "svelte-flow__background-pattern",
    "dots",
    r()
  ])));
  return pe(() => {
    te(o, "cx", n()), te(o, "cy", n()), te(o, "r", n()), Bn(o, g(i), "");
  }), K(e, o), de({
    get radius() {
      return n();
    },
    set radius(s) {
      n(s), m();
    },
    get class() {
      return r();
    },
    set class(s) {
      r(s), m();
    }
  });
}
se(Yu, { radius: {}, class: {} }, [], [], !0);
var Ey = /* @__PURE__ */ Ge("<path></path>");
function Bu(e, t) {
  ue(t, !1);
  let n = p(t, "lineWidth", 12, 1), r = p(t, "dimensions", 12), o = p(t, "variant", 12, void 0), i = p(t, "class", 12, "");
  me();
  var s = Ey();
  const l = /* @__PURE__ */ ae(() => jt(dt([
    "svelte-flow__background-pattern",
    o(),
    i()
  ])));
  return pe(() => {
    te(s, "stroke-width", n()), te(s, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Bn(s, g(l), "");
  }), K(e, s), de({
    get lineWidth() {
      return n();
    },
    set lineWidth(u) {
      n(u), m();
    },
    get dimensions() {
      return r();
    },
    set dimensions(u) {
      r(u), m();
    },
    get variant() {
      return o();
    },
    set variant(u) {
      o(u), m();
    },
    get class() {
      return i();
    },
    set class(u) {
      i(u), m();
    }
  });
}
se(
  Bu,
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
const Sy = {
  [pn.Dots]: 1,
  [pn.Lines]: 1,
  [pn.Cross]: 6
};
var Py = /* @__PURE__ */ Ge('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const My = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function Xu(e, t) {
  ue(t, !1), Ut(e, My);
  const n = tt(), r = () => U(S, "$flowId", n), o = () => U(E, "$viewport", n), i = J(), s = J(), l = J(), u = J(), a = J();
  let c = p(t, "id", 12, void 0), d = p(t, "variant", 28, () => pn.Dots), f = p(t, "gap", 12, 20), h = p(t, "size", 12, 1), y = p(t, "lineWidth", 12, 1), _ = p(t, "bgColor", 12, void 0), C = p(t, "patternColor", 12, void 0), w = p(t, "patternClass", 12, void 0), v = p(t, "class", 12, "");
  const { viewport: E, flowId: S } = Ue(), x = h() || Sy[d()], P = d() === pn.Dots, N = d() === pn.Cross, O = Array.isArray(f()) ? f() : [f(), f()];
  oe(
    () => (r(), B(c())),
    () => {
      X(i, `background-pattern-${r()}-${c() ? c() : ""}`);
    }
  ), oe(() => o(), () => {
    X(s, [
      O[0] * o().zoom || 1,
      O[1] * o().zoom || 1
    ]);
  }), oe(() => o(), () => {
    X(l, x * o().zoom);
  }), oe(() => (g(l), g(s)), () => {
    X(u, N ? [g(l), g(l)] : g(s));
  }), oe(
    () => (g(l), g(u)),
    () => {
      X(a, P ? [
        g(l) / 2,
        g(l) / 2
      ] : [
        g(u)[0] / 2,
        g(u)[1] / 2
      ]);
    }
  ), it(), me();
  var T = Py();
  const L = /* @__PURE__ */ ae(() => jt(dt(["svelte-flow__background", v()])));
  var V = ge(T), $ = ge(V);
  {
    var H = (b) => {
      var M = /* @__PURE__ */ ae(() => g(l) / 2);
      Yu(b, {
        get radius() {
          return g(M);
        },
        get class() {
          return w();
        }
      });
    }, k = (b) => {
      Bu(b, {
        get dimensions() {
          return g(u);
        },
        get variant() {
          return d();
        },
        get lineWidth() {
          return y();
        },
        get class() {
          return w();
        }
      });
    };
    Be($, (b) => {
      P ? b(H) : b(k, !1);
    });
  }
  ce(V);
  var I = ye(V);
  return ce(T), pe(() => {
    Bn(T, g(L), "svelte-1r7pe8d"), et(T, "--xy-background-color-props", _()), et(T, "--xy-background-pattern-color-props", C()), te(V, "id", g(i)), te(V, "x", o().x % g(s)[0]), te(V, "y", o().y % g(s)[1]), te(V, "width", g(s)[0]), te(V, "height", g(s)[1]), te(V, "patternTransform", `translate(-${g(a)[0]},-${g(a)[1]})`), te(I, "fill", `url(#${g(i)})`);
  }), K(e, T), de({
    get id() {
      return c();
    },
    set id(b) {
      c(b), m();
    },
    get variant() {
      return d();
    },
    set variant(b) {
      d(b), m();
    },
    get gap() {
      return f();
    },
    set gap(b) {
      f(b), m();
    },
    get size() {
      return h();
    },
    set size(b) {
      h(b), m();
    },
    get lineWidth() {
      return y();
    },
    set lineWidth(b) {
      y(b), m();
    },
    get bgColor() {
      return _();
    },
    set bgColor(b) {
      _(b), m();
    },
    get patternColor() {
      return C();
    },
    set patternColor(b) {
      C(b), m();
    },
    get patternClass() {
      return w();
    },
    set patternClass(b) {
      w(b), m();
    },
    get class() {
      return v();
    },
    set class(b) {
      v(b), m();
    }
  });
}
se(
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
var Ny = /* @__PURE__ */ Ge("<rect></rect>");
function Wu(e, t) {
  ue(t, !1);
  let n = p(t, "x", 12), r = p(t, "y", 12), o = p(t, "width", 12, 0), i = p(t, "height", 12, 0), s = p(t, "borderRadius", 12, 5), l = p(t, "color", 12, void 0), u = p(t, "shapeRendering", 12), a = p(t, "strokeColor", 12, void 0), c = p(t, "strokeWidth", 12, 2), d = p(t, "selected", 12, !1), f = p(t, "class", 12, "");
  me();
  var h = Ny();
  const y = /* @__PURE__ */ ae(() => jt(dt(["svelte-flow__minimap-node", f()])));
  return pe(() => {
    Bn(h, g(y), ""), te(h, "x", n()), te(h, "y", r()), te(h, "rx", s()), te(h, "ry", s()), te(h, "width", o()), te(h, "height", i()), te(h, "style", `${l() ? `fill: ${l()};` : ""}${a() ? `stroke: ${a()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), te(h, "shape-rendering", u()), Ke(h, "selected", d());
  }), K(e, h), de({
    get x() {
      return n();
    },
    set x(_) {
      n(_), m();
    },
    get y() {
      return r();
    },
    set y(_) {
      r(_), m();
    },
    get width() {
      return o();
    },
    set width(_) {
      o(_), m();
    },
    get height() {
      return i();
    },
    set height(_) {
      i(_), m();
    },
    get borderRadius() {
      return s();
    },
    set borderRadius(_) {
      s(_), m();
    },
    get color() {
      return l();
    },
    set color(_) {
      l(_), m();
    },
    get shapeRendering() {
      return u();
    },
    set shapeRendering(_) {
      u(_), m();
    },
    get strokeColor() {
      return a();
    },
    set strokeColor(_) {
      a(_), m();
    },
    get strokeWidth() {
      return c();
    },
    set strokeWidth(_) {
      c(_), m();
    },
    get selected() {
      return d();
    },
    set selected(_) {
      d(_), m();
    },
    get class() {
      return f();
    },
    set class(_) {
      f(_), m();
    }
  });
}
se(
  Wu,
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
function Xi(e, t) {
  const n = h1({
    domNode: e,
    panZoom: t.panZoom,
    getTransform: () => {
      const o = R(t.viewport);
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
const Wi = (e) => e instanceof Function ? e : () => e;
var Oy = /* @__PURE__ */ ve("<title> </title>"), Ty = /* @__PURE__ */ Ge('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function Ku(e, t) {
  ue(t, !1);
  const n = tt(), r = () => U(q, "$flowId", n), o = () => U(he, "$viewport", n), i = () => U(_e, "$containerWidth", n), s = () => U(Ve, "$containerHeight", n), l = () => U(ee, "$nodeLookup", n), u = () => U(j, "$nodes", n), a = () => U($e, "$panZoom", n), c = () => U(Ae, "$translateExtent", n), d = J(), f = J(), h = J(), y = J(), _ = J(), C = J(), w = J(), v = J(), E = J(), S = J(), x = J(), P = J(), N = J();
  let O = p(t, "position", 12, "bottom-right"), T = p(t, "ariaLabel", 12, "Mini map"), L = p(t, "nodeStrokeColor", 12, "transparent"), V = p(t, "nodeColor", 12, void 0), $ = p(t, "nodeClass", 12, ""), H = p(t, "nodeBorderRadius", 12, 5), k = p(t, "nodeStrokeWidth", 12, 2), I = p(t, "bgColor", 12, void 0), b = p(t, "maskColor", 12, void 0), M = p(t, "maskStrokeColor", 12, void 0), A = p(t, "maskStrokeWidth", 12, void 0), D = p(t, "width", 12, void 0), Y = p(t, "height", 12, void 0), Z = p(t, "pannable", 12, !0), Q = p(t, "zoomable", 12, !0), G = p(t, "inversePan", 12, void 0), F = p(t, "zoomStep", 12, void 0), ne = p(t, "style", 12, ""), fe = p(t, "class", 12, "");
  const re = 200, ke = 150, {
    nodes: j,
    nodeLookup: ee,
    viewport: he,
    width: _e,
    height: Ve,
    flowId: q,
    panZoom: $e,
    translateExtent: Ae
  } = Ue(), Fe = V() === void 0 ? void 0 : Wi(V()), Le = Wi(L()), Xe = Wi($()), W = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), xe = `svelte-flow__minimap-desc-${r()}`;
  let We = J(g(d));
  const st = () => g(C);
  oe(
    () => (o(), i(), s()),
    () => {
      X(d, {
        x: -o().x / o().zoom,
        y: -o().y / o().zoom,
        width: i() / o().zoom,
        height: s() / o().zoom
      });
    }
  ), oe(
    () => (l(), g(d), u()),
    () => {
      X(We, l().size > 0 ? Xc(co(l()), g(d)) : g(d)), u();
    }
  ), oe(() => B(D()), () => {
    X(f, D() ?? re);
  }), oe(() => B(Y()), () => {
    X(h, Y() ?? ke);
  }), oe(
    () => (g(We), g(f)),
    () => {
      X(y, g(We).width / g(f));
    }
  ), oe(
    () => (g(We), g(h)),
    () => {
      X(_, g(We).height / g(h));
    }
  ), oe(
    () => (g(y), g(_)),
    () => {
      X(C, Math.max(g(y), g(_)));
    }
  ), oe(() => (g(C), g(f)), () => {
    X(w, g(C) * g(f));
  }), oe(
    () => (g(C), g(h)),
    () => {
      X(v, g(C) * g(h));
    }
  ), oe(() => g(C), () => {
    X(E, 5 * g(C));
  }), oe(
    () => (g(We), g(w), g(E)),
    () => {
      X(S, g(We).x - (g(w) - g(We).width) / 2 - g(E));
    }
  ), oe(
    () => (g(We), g(v), g(E)),
    () => {
      X(x, g(We).y - (g(v) - g(We).height) / 2 - g(E));
    }
  ), oe(() => (g(w), g(E)), () => {
    X(P, g(w) + g(E) * 2);
  }), oe(() => (g(v), g(E)), () => {
    X(N, g(v) + g(E) * 2);
  }), it(), me();
  var ze = /* @__PURE__ */ ae(() => ne() + (I() ? `;--xy-minimap-background-color-props:${I()}` : "")), qe = /* @__PURE__ */ ae(() => dt(["svelte-flow__minimap", fe()]));
  return Ei(e, {
    get position() {
      return O();
    },
    get style() {
      return g(ze);
    },
    get class() {
      return g(qe);
    },
    "data-testid": "svelte-flow__minimap",
    children: (ie, De) => {
      var Qt = ot(), un = He(Qt);
      {
        var be = (je) => {
          var Me = Ty();
          te(Me, "aria-labelledby", xe);
          var Qe = ge(Me);
          {
            var ft = (pt) => {
              var Et = Oy();
              te(Et, "id", xe);
              var Vt = ge(Et, !0);
              ce(Et), pe(() => En(Vt, T())), K(pt, Et);
            };
            Be(Qe, (pt) => {
              T() && pt(ft);
            });
          }
          var Mn = ye(Qe);
          Sn(Mn, 1, u, (pt) => pt.id, (pt, Et) => {
            var Vt = ot();
            const lt = /* @__PURE__ */ ae(() => l().get(g(Et).id));
            var Ti = He(Vt);
            {
              var nt = (Sr) => {
                const Pr = /* @__PURE__ */ ae(() => Pn(g(lt)));
                var Ot = /* @__PURE__ */ ae(() => Fe == null ? void 0 : Fe(g(lt))), yo = /* @__PURE__ */ ae(() => Le(g(lt))), mo = /* @__PURE__ */ ae(() => Xe(g(lt)));
                Wu(Sr, An(
                  {
                    get x() {
                      return g(lt).internals.positionAbsolute.x;
                    },
                    get y() {
                      return g(lt).internals.positionAbsolute.y;
                    }
                  },
                  () => g(Pr),
                  {
                    get selected() {
                      return g(lt).selected;
                    },
                    get color() {
                      return g(Ot);
                    },
                    get borderRadius() {
                      return H();
                    },
                    get strokeColor() {
                      return g(yo);
                    },
                    get strokeWidth() {
                      return k();
                    },
                    shapeRendering: W,
                    get class() {
                      return g(mo);
                    }
                  }
                ));
              };
              Be(Ti, (Sr) => {
                g(lt) && Fc(g(lt)) && Sr(nt);
              });
            }
            K(pt, Vt);
          });
          var Er = ye(Mn);
          ce(Me), ct(Me, (pt, Et) => Xi == null ? void 0 : Xi(pt, Et), () => ({
            panZoom: a(),
            viewport: he,
            getViewScale: st,
            translateExtent: c(),
            width: i(),
            height: s(),
            inversePan: G(),
            zoomStep: F(),
            pannable: Z(),
            zoomable: Q()
          })), pe(() => {
            te(Me, "width", g(f)), te(Me, "height", g(h)), te(Me, "viewBox", `${g(S) ?? ""} ${g(x) ?? ""} ${g(P) ?? ""} ${g(N) ?? ""}`), et(Me, "--xy-minimap-mask-background-color-props", b()), et(Me, "--xy-minimap-mask-stroke-color-props", M()), et(Me, "--xy-minimap-mask-stroke-width-props", A() ? A() * g(C) : void 0), te(Er, "d", `M${g(S) - g(E)},${g(x) - g(E)}h${g(P) + g(E) * 2}v${g(N) + g(E) * 2}h${-g(P) - g(E) * 2}z
      M${g(d).x ?? ""},${g(d).y ?? ""}h${g(d).width ?? ""}v${g(d).height ?? ""}h${-g(d).width}z`);
          }), K(je, Me);
        };
        Be(un, (je) => {
          a() && je(be);
        });
      }
      K(ie, Qt);
    },
    $$slots: { default: !0 }
  }), de({
    get position() {
      return O();
    },
    set position(ie) {
      O(ie), m();
    },
    get ariaLabel() {
      return T();
    },
    set ariaLabel(ie) {
      T(ie), m();
    },
    get nodeStrokeColor() {
      return L();
    },
    set nodeStrokeColor(ie) {
      L(ie), m();
    },
    get nodeColor() {
      return V();
    },
    set nodeColor(ie) {
      V(ie), m();
    },
    get nodeClass() {
      return $();
    },
    set nodeClass(ie) {
      $(ie), m();
    },
    get nodeBorderRadius() {
      return H();
    },
    set nodeBorderRadius(ie) {
      H(ie), m();
    },
    get nodeStrokeWidth() {
      return k();
    },
    set nodeStrokeWidth(ie) {
      k(ie), m();
    },
    get bgColor() {
      return I();
    },
    set bgColor(ie) {
      I(ie), m();
    },
    get maskColor() {
      return b();
    },
    set maskColor(ie) {
      b(ie), m();
    },
    get maskStrokeColor() {
      return M();
    },
    set maskStrokeColor(ie) {
      M(ie), m();
    },
    get maskStrokeWidth() {
      return A();
    },
    set maskStrokeWidth(ie) {
      A(ie), m();
    },
    get width() {
      return D();
    },
    set width(ie) {
      D(ie), m();
    },
    get height() {
      return Y();
    },
    set height(ie) {
      Y(ie), m();
    },
    get pannable() {
      return Z();
    },
    set pannable(ie) {
      Z(ie), m();
    },
    get zoomable() {
      return Q();
    },
    set zoomable(ie) {
      Q(ie), m();
    },
    get inversePan() {
      return G();
    },
    set inversePan(ie) {
      G(ie), m();
    },
    get zoomStep() {
      return F();
    },
    set zoomStep(ie) {
      F(ie), m();
    },
    get style() {
      return ne();
    },
    set style(ie) {
      ne(ie), m();
    },
    get class() {
      return fe();
    },
    set class(ie) {
      fe(ie), m();
    }
  });
}
se(
  Ku,
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
const fa = (e) => D0(e);
function Ay() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: s, height: l, minZoom: u, maxZoom: a, panZoom: c, nodes: d, edges: f, domNode: h, nodeLookup: y, nodeOrigin: _, edgeLookup: C, connectionLookup: w } = Ue(), v = (x) => {
    var L, V;
    const P = R(y), N = fa(x) ? x : P.get(x.id), O = N.parentId ? H0(N.position, N.measured, N.parentId, P, R(_)) : N.position, T = {
      ...N,
      position: O,
      width: ((L = N.measured) == null ? void 0 : L.width) ?? N.width,
      height: ((V = N.measured) == null ? void 0 : V.height) ?? N.height
    };
    return dr(T);
  }, E = (x, P, N = { replace: !1 }) => {
    var L;
    const O = (L = R(y).get(x)) == null ? void 0 : L.internals.userNode;
    if (!O)
      return;
    const T = typeof P == "function" ? P(O) : P;
    N.replace ? d.update((V) => V.map(($) => $.id === x ? fa(T) ? T : { ...$, ...T } : $)) : (Object.assign(O, T), d.update((V) => V));
  }, S = (x) => R(y).get(x);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: S,
    getNode: (x) => {
      var P;
      return (P = S(x)) == null ? void 0 : P.internals.userNode;
    },
    getNodes: (x) => x === void 0 ? R(d) : ha(R(y), x),
    getEdge: (x) => R(C).get(x),
    getEdges: (x) => x === void 0 ? R(f) : ha(R(C), x),
    setZoom: (x, P) => {
      const N = R(c);
      return N ? N.scaleTo(x, { duration: P == null ? void 0 : P.duration }) : Promise.resolve(!1);
    },
    getZoom: () => R(i).zoom,
    setViewport: async (x, P) => {
      const N = R(i), O = R(c);
      return O ? (await O.setViewport({
        x: x.x ?? N.x,
        y: x.y ?? N.y,
        zoom: x.zoom ?? N.zoom
      }, { duration: P == null ? void 0 : P.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => R(i),
    setCenter: async (x, P, N) => {
      const O = typeof (N == null ? void 0 : N.zoom) < "u" ? N.zoom : R(a), T = R(c);
      return T ? (await T.setViewport({
        x: R(s) / 2 - x * O,
        y: R(l) / 2 - P * O,
        zoom: O
      }, { duration: N == null ? void 0 : N.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (x, P) => {
      const N = R(c);
      if (!N)
        return Promise.resolve(!1);
      const O = Zs(x, R(s), R(l), R(u), R(a), (P == null ? void 0 : P.padding) ?? 0.1);
      return await N.setViewport(O, { duration: P == null ? void 0 : P.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (x, P = !0, N) => {
      const O = jl(x), T = O ? x : v(x);
      return T ? (N || R(d)).filter((L) => {
        const V = R(y).get(L.id);
        if (!V || !O && L.id === x.id)
          return !1;
        const $ = dr(V), H = Zr($, T);
        return P && H > 0 || H >= T.width * T.height;
      }) : [];
    },
    isNodeIntersecting: (x, P, N = !0) => {
      const T = jl(x) ? x : v(x);
      if (!T)
        return !1;
      const L = Zr(T, P);
      return N && L > 0 || L >= T.width * T.height;
    },
    deleteElements: async ({ nodes: x = [], edges: P = [] }) => {
      const { nodes: N, edges: O } = await Vc({
        nodesToRemove: x,
        edgesToRemove: P,
        nodes: R(d),
        edges: R(f),
        onBeforeDelete: R(r)
      });
      return N && d.update((T) => T.filter((L) => !N.some(({ id: V }) => V === L.id))), O && f.update((T) => T.filter((L) => !O.some(({ id: V }) => V === L.id))), {
        deletedNodes: N,
        deletedEdges: O
      };
    },
    screenToFlowPosition: (x, P = { snapToGrid: !0 }) => {
      const N = R(h);
      if (!N)
        return x;
      const O = P.snapToGrid ? R(o) : !1, { x: T, y: L, zoom: V } = R(i), { x: $, y: H } = N.getBoundingClientRect(), k = {
        x: x.x - $,
        y: x.y - H
      };
      return uo(k, [T, L, V], O !== null, O || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (x) => {
      const P = R(h);
      if (!P)
        return x;
      const { x: N, y: O, zoom: T } = R(i), { x: L, y: V } = P.getBoundingClientRect(), $ = Kc(x, [N, O, T]);
      return {
        x: $.x + L,
        y: $.y + V
      };
    },
    toObject: () => ({
      nodes: R(d).map((x) => ({
        ...x,
        // we want to make sure that changes to the nodes object that gets returned by toObject
        // do not affect the nodes object
        position: { ...x.position },
        data: { ...x.data }
      })),
      edges: R(f).map((x) => ({ ...x })),
      viewport: { ...R(i) }
    }),
    updateNode: E,
    updateNodeData: (x, P, N) => {
      var L;
      const O = (L = R(y).get(x)) == null ? void 0 : L.internals.userNode;
      if (!O)
        return;
      const T = typeof P == "function" ? P(O) : P;
      O.data = N != null && N.replace ? T : { ...O.data, ...T }, d.update((V) => V);
    },
    getNodesBounds: (x) => {
      const P = R(y), N = R(_);
      return L0(x, { nodeLookup: P, nodeOrigin: N });
    },
    getHandleConnections: ({ type: x, id: P, nodeId: N }) => {
      var O;
      return Array.from(((O = R(w).get(`${N}-${x}-${P ?? null}`)) == null ? void 0 : O.values()) ?? []);
    },
    viewport: i
  };
}
function ha(e, t) {
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
const zy = "tinyflow-component";
class op {
  constructor(t) {
    at(this, "options");
    at(this, "rootEl");
    at(this, "svelteFlowInstance");
    this._setOptions(t), this._init();
  }
  _init() {
    if (typeof this.options.element == "string") {
      if (this.rootEl = document.querySelector(this.options.element), !this.rootEl)
        throw new Error(
          "element not found by document.querySelector('" + this.options.element + "')"
        );
    } else if (this.options.element instanceof Element)
      this.rootEl = this.options.element;
    else
      throw new Error("element must be a string or Element");
    const t = document.createElement(zy);
    t.data = this.options.data, t.onInit = (n) => {
      this.svelteFlowInstance = n;
    }, t.style.display = "block", t.style.width = "100%", t.style.height = "100%", t.classList.add("tf-theme-light"), this.rootEl.appendChild(t);
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
const Dy = () => {
  const e = le([]), t = le([]), n = le({ x: 250, y: 100, zoom: 1 });
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
      e.update((i) => i.map((s) => s.id === r ? { ...s, data: o } : s));
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
}, Ao = Dy();
var Ly = /* @__PURE__ */ ve("<!> <!> <!>", 1), Iy = /* @__PURE__ */ ve('<div class="tf-node-wrapper"><div class="tf-node-wrapper-title"><!></div> <div class="tf-node-wrapper-body"><!></div></div> <!>', 1);
function Si(e, t) {
  ue(t, !1), me();
  var n = Iy(), r = He(n), o = ge(r), i = ge(o);
  Je(i, t, "header", {}, (a) => {
    var c = io("TinyFlow");
    K(a, c);
  }), ce(o);
  var s = ye(o, 2), l = ge(s);
  Je(l, t, "default", {}, null), ce(s), ce(r);
  var u = ye(r, 2);
  Je(u, t, "handlers", {}, (a) => {
    var c = Ly(), d = He(c);
    $n(d, {
      type: "target",
      get position() {
        return we.Left;
      },
      style: " left: -10px;top: 20px"
    });
    var f = ye(d, 2);
    $n(f, {
      type: "source",
      get position() {
        return we.Right;
      },
      style: "right: -10px;top: 20px"
    });
    var h = ye(f, 2);
    Je(h, t, "handlers-append", {}, null), K(a, c);
  }), K(e, n), de();
}
se(
  Si,
  {},
  [
    "header",
    "default",
    "handlers",
    "handlers-append"
  ],
  [],
  !0
);
let Hy = Symbol("nodeProps");
function Qs(e) {
  ir(Hy, e);
}
var $y = /* @__PURE__ */ ve("<button><!></button>");
function ni(e, t) {
  const n = Se(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = Se(n, []);
  ue(t, !1), me();
  var o = $y();
  let i;
  var s = ge(o);
  Je(s, t, "default", {}, null), ce(o), pe(() => i = Zt(o, i, {
    type: "button",
    ...r,
    class: `tf-btn ${r.class ?? ""}`
  })), K(e, o), de();
}
se(ni, {}, ["default"], [], !0);
var Ry = /* @__PURE__ */ ve("<input>");
function Fu(e, t) {
  const n = Se(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = Se(n, []);
  ue(t, !1), me();
  var o = Ry();
  ic(o);
  let i;
  pe(() => i = Zt(o, i, {
    type: "checkbox",
    ...r,
    class: `tf-checkbox ${r.class ?? ""}`
  })), K(e, o), de();
}
se(Fu, {}, [], [], !0);
var Vy = /* @__PURE__ */ ve("<input>");
function ri(e, t) {
  const n = Se(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = Se(n, []);
  ue(t, !1), me();
  var o = Vy();
  ic(o);
  let i;
  pe(() => i = Zt(o, i, {
    type: "text",
    ...r,
    class: `tf-input ${r.class ?? ""}`
  })), K(e, o), de();
}
se(ri, {}, [], [], !0);
var Yy = /* @__PURE__ */ ve("<textarea></textarea>");
function Zu(e, t) {
  const n = Se(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = Se(n, []);
  ue(t, !1), me();
  var o = Yy();
  Af(o);
  let i;
  pe(() => i = Zt(o, i, {
    ...r,
    class: `tf-textarea nodrag ${r.class ?? ""}`
  })), K(e, o), de();
}
se(Zu, {}, [], [], !0);
var By = /* @__PURE__ */ ve('<div role="button"><!></div>'), Xy = /* @__PURE__ */ ve("<div></div>");
function qu(e, t) {
  const n = Se(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = Se(n, ["items", "onChange", "activeIndex"]);
  ue(t, !1);
  let o = p(t, "items", 28, () => []), i = p(t, "onChange", 12, () => {
  }), s = p(t, "activeIndex", 12, 0);
  function l(c, d) {
    var f;
    s(d), (f = i()) == null || f(c, d);
  }
  me();
  var u = Xy();
  let a;
  return Sn(u, 5, o, gi, (c, d, f) => {
    var h = By();
    te(h, "tabindex", f), h.__click = () => l(g(d), f), h.__keydown = (w) => {
      (w.key === "Enter" || w.key === " ") && (w.preventDefault(), l(g(d), f));
    };
    var y = ge(h);
    {
      var _ = (w) => {
        var v = io();
        pe(() => En(v, g(d).label)), K(w, v);
      }, C = (w) => {
        var v = ot(), E = He(v);
        Vo(E, () => g(d).label ?? Nt), K(w, v);
      };
      Be(y, (w) => {
        typeof g(d).label == "string" ? w(_) : w(C, !1);
      });
    }
    ce(h), pe(() => sr(h, `tf-tabs-item ${(f === s() ? "active" : "") ?? ""}`)), K(c, h);
  }), ce(u), pe(() => a = Zt(u, a, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), K(e, u), de({
    get items() {
      return o();
    },
    set items(c) {
      o(c), m();
    },
    get onChange() {
      return i();
    },
    set onChange(c) {
      i(c), m();
    },
    get activeIndex() {
      return s();
    },
    set activeIndex(c) {
      s(c), m();
    }
  });
}
hi(["click", "keydown"]);
se(qu, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var Wy = (e, t, n) => t(g(n)), Ky = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(g(n)));
}, Fy = /* @__PURE__ */ ve('<div class="tf-collapse-item-description"><!></div>'), Zy = /* @__PURE__ */ ve('<div class="tf-collapse-item-content"><!></div>'), qy = /* @__PURE__ */ ve('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><span class="tf-collapse-item-title-icon"><!></span> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), Gy = /* @__PURE__ */ ve("<div></div>");
const Uy = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function Pi(e, t) {
  const n = Se(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = Se(n, ["items", "onChange", "activeKeys"]);
  ue(t, !1), Ut(e, Uy);
  let o = p(t, "items", 28, () => []), i = p(t, "onChange", 12, () => {
  }), s = p(t, "activeKeys", 28, () => []);
  function l(a) {
    var c;
    s().includes(a.key) ? s(s().filter((d) => d !== a.key)) : (s().push(a.key), s(s())), (c = i()) == null || c(a);
  }
  me();
  var u = Gy();
  return Sn(u, 5, o, gi, (a, c, d) => {
    var f = qy(), h = ge(f);
    te(h, "tabindex", d), h.__click = [Wy, l, c], h.__keydown = [Ky, l, c];
    var y = ge(h), _ = ge(y);
    nc(_, () => g(c).icon), ce(y);
    var C = ye(y, 2);
    er(C, {
      get target() {
        return g(c).title;
      }
    });
    var w = ye(C, 2);
    const v = /* @__PURE__ */ ae(() => `tf-collapse-item-title-arrow ${(s().includes(g(c).key) ? "rotate-90" : "") ?? ""} svelte-1jfktzw`);
    ce(h);
    var E = ye(h, 2);
    {
      var S = (N) => {
        var O = Fy(), T = ge(O);
        er(T, {
          get target() {
            return g(c).description;
          }
        }), ce(O), K(N, O);
      };
      Be(E, (N) => {
        g(c).description && N(S);
      });
    }
    var x = ye(E, 2);
    {
      var P = (N) => {
        var O = Zy(), T = ge(O);
        er(T, {
          get target() {
            return g(c).content;
          }
        }), ce(O), K(N, O);
      };
      Be(x, (N) => {
        s().includes(g(c).key) && N(P);
      });
    }
    ce(f), pe(() => sr(w, g(v))), K(a, f);
  }), ce(u), pe(() => {
    te(u, "style", n.style), sr(u, `tf-collapse ${r.class ?? ""} svelte-1jfktzw`);
  }), K(e, u), de({
    get items() {
      return o();
    },
    set items(a) {
      o(a), m();
    },
    get onChange() {
      return i();
    },
    set onChange(a) {
      i(a), m();
    },
    get activeKeys() {
      return s();
    },
    set activeKeys(a) {
      s(a), m();
    }
  });
}
hi(["click", "keydown"]);
se(Pi, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function er(e, t) {
  ue(t, !0);
  let n = p(t, "target", 7);
  var r = ot(), o = He(r);
  {
    var i = (l) => {
      var u = ot(), a = He(u);
      Vo(a, () => n() ?? Nt), K(l, u);
    }, s = (l) => {
      var u = io();
      pe(() => En(u, n())), K(l, u);
    };
    Be(o, (l) => {
      typeof n() == "function" ? l(i) : l(s, !1);
    });
  }
  return K(e, r), de({
    get target() {
      return n();
    },
    set target(l) {
      n(l), m();
    }
  });
}
se(er, { target: {} }, [], [], !0);
var jy = /* @__PURE__ */ ve('<button class="tf-select-content-item"><!></button>'), Jy = /* @__PURE__ */ ve('<div class="tf-select-content"></div>'), Qy = /* @__PURE__ */ ve('<button><div class="tf-select-input-value"><!></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), em = /* @__PURE__ */ ve("<div><!></div>");
function Gu(e, t) {
  const n = Se(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = Se(n, ["items", "onChange", "activeIndex"]);
  ue(t, !1);
  let o = p(t, "items", 28, () => []), i = p(t, "onChange", 12, () => {
  }), s = p(t, "activeIndex", 12, 0), l = J();
  function u(f, h) {
    var y, _;
    s(h), (y = i()) == null || y(f, h), (_ = g(l)) == null || _.hide();
  }
  me();
  var a = em();
  let c;
  var d = ge(a);
  return lr(
    ad(d, {
      floating: (h) => {
        var y = Jy();
        Sn(y, 5, o, gi, (_, C, w) => {
          var v = jy();
          v.__click = () => u(g(C), w);
          var E = ge(v);
          er(E, {
            get target() {
              return g(C).label;
            }
          }), ce(v), K(_, v);
        }), ce(y), K(h, y);
      },
      children: (h, y) => {
        var _ = Qy();
        let C;
        var w = ge(_), v = ge(w), E = /* @__PURE__ */ ae(() => {
          var S;
          return (S = o()[s()]) == null ? void 0 : S.label;
        });
        er(v, {
          get target() {
            return g(E);
          }
        }), ce(w), no(2), ce(_), pe(() => C = Zt(_, C, { class: "tf-select-input", ...r })), K(h, _);
      },
      $$slots: { floating: !0, default: !0 },
      $$legacy: !0
    }),
    (h) => X(l, h),
    () => g(l)
  ), ce(a), pe(() => c = Zt(a, c, {
    ...r,
    class: `tf-select ${r.class ?? ""}`
  })), K(e, a), de({
    get items() {
      return o();
    },
    set items(f) {
      o(f), m();
    },
    get onChange() {
      return i();
    },
    set onChange(f) {
      i(f), m();
    },
    get activeIndex() {
      return s();
    },
    set activeIndex(f) {
      s(f), m();
    }
  });
}
hi(["click"]);
se(Gu, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
const Gr = Math.min, tr = Math.max, oi = Math.round, Wt = (e) => ({
  x: e,
  y: e
}), tm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, nm = {
  start: "end",
  end: "start"
};
function ys(e, t, n) {
  return tr(e, Gr(t, n));
}
function ho(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Rn(e) {
  return e.split("-")[0];
}
function go(e) {
  return e.split("-")[1];
}
function Uu(e) {
  return e === "x" ? "y" : "x";
}
function el(e) {
  return e === "y" ? "height" : "width";
}
function hr(e) {
  return ["top", "bottom"].includes(Rn(e)) ? "y" : "x";
}
function tl(e) {
  return Uu(hr(e));
}
function rm(e, t, n) {
  n === void 0 && (n = !1);
  const r = go(e), o = tl(e), i = el(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = ii(s)), [s, ii(s)];
}
function om(e) {
  const t = ii(e);
  return [ms(e), t, ms(t)];
}
function ms(e) {
  return e.replace(/start|end/g, (t) => nm[t]);
}
function im(e, t, n) {
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
function sm(e, t, n, r) {
  const o = go(e);
  let i = im(Rn(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(ms)))), i;
}
function ii(e) {
  return e.replace(/left|right|bottom|top/g, (t) => tm[t]);
}
function lm(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ju(e) {
  return typeof e != "number" ? lm(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function si(e) {
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
function ga(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = hr(t), s = tl(t), l = el(s), u = Rn(t), a = i === "y", c = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[l] / 2 - o[l] / 2;
  let h;
  switch (u) {
    case "top":
      h = {
        x: c,
        y: r.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: c,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: d
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
      h[s] -= f * (n && a ? -1 : 1);
      break;
    case "end":
      h[s] += f * (n && a ? -1 : 1);
      break;
  }
  return h;
}
const am = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, l = i.filter(Boolean), u = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let a = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: c,
    y: d
  } = ga(a, r, u), f = r, h = {}, y = 0;
  for (let _ = 0; _ < l.length; _++) {
    const {
      name: C,
      fn: w
    } = l[_], {
      x: v,
      y: E,
      data: S,
      reset: x
    } = await w({
      x: c,
      y: d,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: h,
      rects: a,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = v ?? c, d = E ?? d, h = {
      ...h,
      [C]: {
        ...h[C],
        ...S
      }
    }, x && y <= 50 && (y++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (a = x.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : x.rects), {
      x: c,
      y: d
    } = ga(a, f, u)), _ = -1);
  }
  return {
    x: c,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: h
  };
};
async function Ju(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: s,
    elements: l,
    strategy: u
  } = e, {
    boundary: a = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: h = 0
  } = ho(t, e), y = ju(h), C = l[f ? d === "floating" ? "reference" : "floating" : d], w = si(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(C))) == null || n ? C : C.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating)),
    boundary: a,
    rootBoundary: c,
    strategy: u
  })), v = d === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l.floating)), S = await (i.isElement == null ? void 0 : i.isElement(E)) ? await (i.getScale == null ? void 0 : i.getScale(E)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, x = si(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: v,
    offsetParent: E,
    strategy: u
  }) : v);
  return {
    top: (w.top - x.top + y.top) / S.y,
    bottom: (x.bottom - w.bottom + y.bottom) / S.y,
    left: (w.left - x.left + y.left) / S.x,
    right: (x.right - w.right + y.right) / S.x
  };
}
const cm = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: s,
      elements: l,
      middlewareData: u
    } = t, {
      element: a,
      padding: c = 0
    } = ho(e, t) || {};
    if (a == null)
      return {};
    const d = ju(c), f = {
      x: n,
      y: r
    }, h = tl(o), y = el(h), _ = await s.getDimensions(a), C = h === "y", w = C ? "top" : "left", v = C ? "bottom" : "right", E = C ? "clientHeight" : "clientWidth", S = i.reference[y] + i.reference[h] - f[h] - i.floating[y], x = f[h] - i.reference[h], P = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a));
    let N = P ? P[E] : 0;
    (!N || !await (s.isElement == null ? void 0 : s.isElement(P))) && (N = l.floating[E] || i.floating[y]);
    const O = S / 2 - x / 2, T = N / 2 - _[y] / 2 - 1, L = Gr(d[w], T), V = Gr(d[v], T), $ = L, H = N - _[y] - V, k = N / 2 - _[y] / 2 + O, I = ys($, k, H), b = !u.arrow && go(o) != null && k !== I && i.reference[y] / 2 - (k < $ ? L : V) - _[y] / 2 < 0, M = b ? k < $ ? k - $ : k - H : 0;
    return {
      [h]: f[h] + M,
      data: {
        [h]: I,
        centerOffset: k - I - M,
        ...b && {
          alignmentOffset: M
        }
      },
      reset: b
    };
  }
}), um = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: s,
        initialPlacement: l,
        platform: u,
        elements: a
      } = t, {
        mainAxis: c = !0,
        crossAxis: d = !0,
        fallbackPlacements: f,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: y = "none",
        flipAlignment: _ = !0,
        ...C
      } = ho(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const w = Rn(o), v = hr(l), E = Rn(l) === l, S = await (u.isRTL == null ? void 0 : u.isRTL(a.floating)), x = f || (E || !_ ? [ii(l)] : om(l)), P = y !== "none";
      !f && P && x.push(...sm(l, _, y, S));
      const N = [l, ...x], O = await Ju(t, C), T = [];
      let L = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && T.push(O[w]), d) {
        const k = rm(o, s, S);
        T.push(O[k[0]], O[k[1]]);
      }
      if (L = [...L, {
        placement: o,
        overflows: T
      }], !T.every((k) => k <= 0)) {
        var V, $;
        const k = (((V = i.flip) == null ? void 0 : V.index) || 0) + 1, I = N[k];
        if (I)
          return {
            data: {
              index: k,
              overflows: L
            },
            reset: {
              placement: I
            }
          };
        let b = ($ = L.filter((M) => M.overflows[0] <= 0).sort((M, A) => M.overflows[1] - A.overflows[1])[0]) == null ? void 0 : $.placement;
        if (!b)
          switch (h) {
            case "bestFit": {
              var H;
              const M = (H = L.filter((A) => {
                if (P) {
                  const D = hr(A.placement);
                  return D === v || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  D === "y";
                }
                return !0;
              }).map((A) => [A.placement, A.overflows.filter((D) => D > 0).reduce((D, Y) => D + Y, 0)]).sort((A, D) => A[1] - D[1])[0]) == null ? void 0 : H[0];
              M && (b = M);
              break;
            }
            case "initialPlacement":
              b = l;
              break;
          }
        if (o !== b)
          return {
            reset: {
              placement: b
            }
          };
      }
      return {};
    }
  };
};
async function dm(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Rn(n), l = go(n), u = hr(n) === "y", a = ["left", "top"].includes(s) ? -1 : 1, c = i && u ? -1 : 1, d = ho(t, e);
  let {
    mainAxis: f,
    crossAxis: h,
    alignmentAxis: y
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return l && typeof y == "number" && (h = l === "end" ? y * -1 : y), u ? {
    x: h * c,
    y: f * a
  } : {
    x: f * a,
    y: h * c
  };
}
const fm = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: s,
        middlewareData: l
      } = t, u = await dm(t, e);
      return s === ((n = l.offset) == null ? void 0 : n.placement) && (r = l.arrow) != null && r.alignmentOffset ? {} : {
        x: o + u.x,
        y: i + u.y,
        data: {
          ...u,
          placement: s
        }
      };
    }
  };
}, hm = function(e) {
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
        limiter: l = {
          fn: (C) => {
            let {
              x: w,
              y: v
            } = C;
            return {
              x: w,
              y: v
            };
          }
        },
        ...u
      } = ho(e, t), a = {
        x: n,
        y: r
      }, c = await Ju(t, u), d = hr(Rn(o)), f = Uu(d);
      let h = a[f], y = a[d];
      if (i) {
        const C = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", v = h + c[C], E = h - c[w];
        h = ys(v, h, E);
      }
      if (s) {
        const C = d === "y" ? "top" : "left", w = d === "y" ? "bottom" : "right", v = y + c[C], E = y - c[w];
        y = ys(v, y, E);
      }
      const _ = l.fn({
        ...t,
        [f]: h,
        [d]: y
      });
      return {
        ..._,
        data: {
          x: _.x - n,
          y: _.y - r,
          enabled: {
            [f]: i,
            [d]: s
          }
        }
      };
    }
  };
};
function Mi() {
  return typeof window < "u";
}
function kr(e) {
  return Qu(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ct(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function cn(e) {
  var t;
  return (t = (Qu(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Qu(e) {
  return Mi() ? e instanceof Node || e instanceof Ct(e).Node : !1;
}
function Lt(e) {
  return Mi() ? e instanceof Element || e instanceof Ct(e).Element : !1;
}
function qt(e) {
  return Mi() ? e instanceof HTMLElement || e instanceof Ct(e).HTMLElement : !1;
}
function va(e) {
  return !Mi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ct(e).ShadowRoot;
}
function vo(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = It(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function gm(e) {
  return ["table", "td", "th"].includes(kr(e));
}
function Ni(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function nl(e) {
  const t = rl(), n = Lt(e) ? It(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function vm(e) {
  let t = kn(e);
  for (; qt(t) && !gr(t); ) {
    if (nl(t))
      return t;
    if (Ni(t))
      return null;
    t = kn(t);
  }
  return null;
}
function rl() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function gr(e) {
  return ["html", "body", "#document"].includes(kr(e));
}
function It(e) {
  return Ct(e).getComputedStyle(e);
}
function Oi(e) {
  return Lt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function kn(e) {
  if (kr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    va(e) && e.host || // Fallback.
    cn(e)
  );
  return va(t) ? t.host : t;
}
function ed(e) {
  const t = kn(e);
  return gr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : qt(t) && vo(t) ? t : ed(t);
}
function td(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = ed(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Ct(o);
  return i ? (ps(s), t.concat(s, s.visualViewport || [], vo(o) ? o : [], [])) : t.concat(o, td(o, []));
}
function ps(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function nd(e) {
  const t = It(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = qt(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, l = oi(n) !== i || oi(r) !== s;
  return l && (n = i, r = s), {
    width: n,
    height: r,
    $: l
  };
}
function rd(e) {
  return Lt(e) ? e : e.contextElement;
}
function nr(e) {
  const t = rd(e);
  if (!qt(t))
    return Wt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = nd(t);
  let s = (i ? oi(n.width) : n.width) / r, l = (i ? oi(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: s,
    y: l
  };
}
const ym = /* @__PURE__ */ Wt(0);
function od(e) {
  const t = Ct(e);
  return !rl() || !t.visualViewport ? ym : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function mm(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ct(e) ? !1 : t;
}
function Ur(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = rd(e);
  let s = Wt(1);
  t && (r ? Lt(r) && (s = nr(r)) : s = nr(e));
  const l = mm(i, n, r) ? od(i) : Wt(0);
  let u = (o.left + l.x) / s.x, a = (o.top + l.y) / s.y, c = o.width / s.x, d = o.height / s.y;
  if (i) {
    const f = Ct(i), h = r && Lt(r) ? Ct(r) : r;
    let y = f, _ = ps(y);
    for (; _ && r && h !== y; ) {
      const C = nr(_), w = _.getBoundingClientRect(), v = It(_), E = w.left + (_.clientLeft + parseFloat(v.paddingLeft)) * C.x, S = w.top + (_.clientTop + parseFloat(v.paddingTop)) * C.y;
      u *= C.x, a *= C.y, c *= C.x, d *= C.y, u += E, a += S, y = Ct(_), _ = ps(y);
    }
  }
  return si({
    width: c,
    height: d,
    x: u,
    y: a
  });
}
function ol(e, t) {
  const n = Oi(e).scrollLeft;
  return t ? t.left + n : Ur(cn(e)).left + n;
}
function id(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    ol(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function pm(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = cn(r), l = t ? Ni(t.floating) : !1;
  if (r === s || l && i)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = Wt(1);
  const c = Wt(0), d = qt(r);
  if ((d || !d && !i) && ((kr(r) !== "body" || vo(s)) && (u = Oi(r)), qt(r))) {
    const h = Ur(r);
    a = nr(r), c.x = h.x + r.clientLeft, c.y = h.y + r.clientTop;
  }
  const f = s && !d && !i ? id(s, u, !0) : Wt(0);
  return {
    width: n.width * a.x,
    height: n.height * a.y,
    x: n.x * a.x - u.scrollLeft * a.x + c.x + f.x,
    y: n.y * a.y - u.scrollTop * a.y + c.y + f.y
  };
}
function wm(e) {
  return Array.from(e.getClientRects());
}
function _m(e) {
  const t = cn(e), n = Oi(e), r = e.ownerDocument.body, o = tr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = tr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + ol(e);
  const l = -n.scrollTop;
  return It(r).direction === "rtl" && (s += tr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: l
  };
}
function bm(e, t) {
  const n = Ct(e), r = cn(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, l = 0, u = 0;
  if (o) {
    i = o.width, s = o.height;
    const a = rl();
    (!a || a && t === "fixed") && (l = o.offsetLeft, u = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: l,
    y: u
  };
}
function xm(e, t) {
  const n = Ur(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = qt(e) ? nr(e) : Wt(1), s = e.clientWidth * i.x, l = e.clientHeight * i.y, u = o * i.x, a = r * i.y;
  return {
    width: s,
    height: l,
    x: u,
    y: a
  };
}
function ya(e, t, n) {
  let r;
  if (t === "viewport")
    r = bm(e, n);
  else if (t === "document")
    r = _m(cn(e));
  else if (Lt(t))
    r = xm(t, n);
  else {
    const o = od(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return si(r);
}
function sd(e, t) {
  const n = kn(e);
  return n === t || !Lt(n) || gr(n) ? !1 : It(n).position === "fixed" || sd(n, t);
}
function Cm(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = td(e, []).filter((l) => Lt(l) && kr(l) !== "body"), o = null;
  const i = It(e).position === "fixed";
  let s = i ? kn(e) : e;
  for (; Lt(s) && !gr(s); ) {
    const l = It(s), u = nl(s);
    !u && l.position === "fixed" && (o = null), (i ? !u && !o : !u && l.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || vo(s) && !u && sd(e, s)) ? r = r.filter((c) => c !== s) : o = l, s = kn(s);
  }
  return t.set(e, r), r;
}
function km(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Ni(t) ? [] : Cm(t, this._c) : [].concat(n), r], l = s[0], u = s.reduce((a, c) => {
    const d = ya(t, c, o);
    return a.top = tr(d.top, a.top), a.right = Gr(d.right, a.right), a.bottom = Gr(d.bottom, a.bottom), a.left = tr(d.left, a.left), a;
  }, ya(t, l, o));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function Em(e) {
  const {
    width: t,
    height: n
  } = nd(e);
  return {
    width: t,
    height: n
  };
}
function Sm(e, t, n) {
  const r = qt(t), o = cn(t), i = n === "fixed", s = Ur(e, !0, i, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = Wt(0);
  if (r || !r && !i)
    if ((kr(t) !== "body" || vo(o)) && (l = Oi(t)), r) {
      const f = Ur(t, !0, i, t);
      u.x = f.x + t.clientLeft, u.y = f.y + t.clientTop;
    } else o && (u.x = ol(o));
  const a = o && !r && !i ? id(o, l) : Wt(0), c = s.left + l.scrollLeft - u.x - a.x, d = s.top + l.scrollTop - u.y - a.y;
  return {
    x: c,
    y: d,
    width: s.width,
    height: s.height
  };
}
function Ki(e) {
  return It(e).position === "static";
}
function ma(e, t) {
  if (!qt(e) || It(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return cn(e) === n && (n = n.ownerDocument.body), n;
}
function ld(e, t) {
  const n = Ct(e);
  if (Ni(e))
    return n;
  if (!qt(e)) {
    let o = kn(e);
    for (; o && !gr(o); ) {
      if (Lt(o) && !Ki(o))
        return o;
      o = kn(o);
    }
    return n;
  }
  let r = ma(e, t);
  for (; r && gm(r) && Ki(r); )
    r = ma(r, t);
  return r && gr(r) && Ki(r) && !nl(r) ? n : r || vm(e) || n;
}
const Pm = async function(e) {
  const t = this.getOffsetParent || ld, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Sm(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Mm(e) {
  return It(e).direction === "rtl";
}
const Nm = {
  convertOffsetParentRelativeRectToViewportRelativeRect: pm,
  getDocumentElement: cn,
  getClippingRect: km,
  getOffsetParent: ld,
  getElementRects: Pm,
  getClientRects: wm,
  getDimensions: Em,
  getScale: nr,
  isElement: Lt,
  isRTL: Mm
}, Om = fm, Tm = hm, Am = um, zm = cm, Dm = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Nm,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return am(e, t, {
    ...o,
    platform: i
  });
}, Lm = ({
  trigger: e,
  triggerEvent: t,
  floatContent: n,
  placement: r,
  offsetOptions: o,
  flipOptions: i,
  shiftOptions: s,
  interactive: l,
  showArrow: u
}) => {
  if (typeof e == "string") {
    const w = document.querySelector(e);
    if (w)
      e = w;
    else
      throw new Error("element not found by document.querySelector('" + e + "')");
  }
  let a;
  if (typeof n == "string") {
    const w = document.querySelector(n);
    if (w)
      a = w;
    else
      throw new Error("element not found by document.querySelector('" + n + "')");
  } else
    a = n;
  r || (r = "bottom");
  let c;
  u && (c = document.createElement("div"), c.style.position = "absolute", c.style.backgroundColor = "#222", c.style.width = "8px", c.style.height = "8px", c.style.transform = "rotate(45deg)", c.style.display = "none", a.firstElementChild.before(c));
  function d() {
    Dm(e, a, {
      placement: r,
      middleware: [
        Om(o),
        // 手动偏移配置
        Am(i),
        //自动翻转
        Tm(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...u ? [zm({ element: c })] : []
      ]
    }).then(({ x: w, y: v, placement: E, middlewareData: S }) => {
      if (Object.assign(a.style, {
        left: `${w}px`,
        top: `${v}px`
      }), u) {
        const { x, y: P } = S.arrow, N = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[E.split("-")[0]];
        Object.assign(c.style, {
          zIndex: -1,
          left: x != null ? `${x}px` : "",
          top: P != null ? `${P}px` : "",
          right: "",
          bottom: "",
          [N]: "2px"
        });
      }
    });
  }
  let f = !1;
  function h() {
    a.style.display = "block", a.style.visibility = "block", a.style.position = "absolute", u && (c.style.display = "block"), f = !0, d();
  }
  function y() {
    a.style.display = "none", u && (c.style.display = "none"), f = !1;
  }
  function _(w) {
    w.stopPropagation(), f ? y() : h();
  }
  function C(w) {
    a.contains(w.target) || y();
  }
  return (!t || t.length == 0) && (l ? t = ["click"] : t = ["mouseenter", "focus"]), t.forEach((w) => {
    e.addEventListener(w, _);
  }), l ? document.addEventListener("click", C) : ["mouseleave", "blur"].forEach((w) => {
    e.addEventListener(w, y);
  }), {
    destroy() {
      l && document.removeEventListener("click", C);
    },
    hide() {
      y();
    },
    isVisible() {
      return f;
    }
  };
};
var Im = /* @__PURE__ */ ve('<div style="position: relative"><div><!></div> <div style="display: none;width: 100%;z-index: 9999"><!></div></div>');
function ad(e, t) {
  ue(t, !0);
  const n = p(t, "children", 7), r = p(t, "floating", 7);
  let o, i, s;
  xr(() => (s = Lm({
    trigger: o,
    floatContent: i,
    interactive: !0,
    placement: "bottom-start"
  }), () => {
    s.destroy();
  }));
  function l() {
    s.hide();
  }
  var u = Im(), a = ge(u), c = ge(a);
  Vo(c, n), ce(a), lr(a, (h) => o = h, () => o);
  var d = ye(a, 2), f = ge(d);
  return Vo(f, r), ce(d), lr(d, (h) => i = h, () => i), ce(u), K(e, u), de({
    hide: l,
    get children() {
      return n();
    },
    set children(h) {
      n(h), m();
    },
    get floating() {
      return r();
    },
    set floating(h) {
      r(h), m();
    }
  });
}
se(ad, { children: {}, floating: {} }, [], ["hide"], !0);
const Hm = (e) => {
  var t = $m(), n = ye(ge(t), 2), r = ge(n);
  ri(r, { value: "bbb", style: "width: 45%" });
  var o = ye(r, 2);
  ri(o, {
    disabled: !0,
    value: "string",
    style: "width: 45%"
  });
  var i = ye(o, 2), s = ge(i);
  Fu(s, {}), ce(i), ce(n), ce(t), K(e, t);
};
var $m = /* @__PURE__ */ ve('<div class="tf-node-content svelte-1w0cio8"><div class="tf-node-content-header svelte-1w0cio8"><span style="width: 45%">变量名</span> <span style="width: 45%">变量类型</span> <span style="width: 10%">必填</span></div> <div class="tf-node-content-panel svelte-1w0cio8"><!> <!> <div style="width: 10%"><!></div></div></div>'), Rm = /* @__PURE__ */ ve("<!> <!> <!> <!>", 1);
const Vm = {
  hash: "svelte-1w0cio8",
  code: ".tf-node-content.svelte-1w0cio8 {display:flex;flex-direction:column;gap:5px;padding-top:20px}.tf-node-content-header.svelte-1w0cio8 {display:flex;gap:5px;font-size:12px;color:#aaa;justify-content:space-around;}.tf-node-content-panel.svelte-1w0cio8 {display:flex;gap:5px;font-size:12px;color:#aaa;justify-content:space-around;align-items:center;}"
};
function cd(e, t) {
  ue(t, !0), Ut(e, Vm), Qs(/* @__PURE__ */ $s(t, ["$$slots", "$$events", "$$legacy", "$$host"]));
  const r = [
    {
      key: "input",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14ZM12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16Z"></path></svg>',
      title: "开始节点",
      description: "调用大模型处理任务或回答问题",
      content: Hm
    }
  ];
  Si(e, {
    children: (o, i) => {
      var s = Rm(), l = He(s);
      Pi(l, { items: r });
      var u = ye(l, 2);
      Gu(u, {
        items: [
          { value: "aaa", label: "aaa" },
          { value: "bbb", label: "bbb" },
          { value: "ccc", label: "ccc" }
        ],
        style: "width: 100%"
      });
      var a = ye(u, 2);
      ri(a, { value: "bbb", style: "width: 100%;" });
      var c = ye(a, 2);
      Zu(c, { rows: 10, style: "width: 100%;" }), K(o, s);
    },
    $$slots: { default: !0 }
  }), de();
}
se(cd, {}, [], [], !0);
const Ym = (e) => {
  var t = Bm();
  K(e, t);
};
var Bm = /* @__PURE__ */ ve('<div style="display: flex;flex-direction: column;gap: 5px;padding-top: 20px"><div style="display: flex;gap: 5px;font-size: 12px;color: #aaa"><span>变量名</span> <span>变量类型</span> <span>必填</span></div></div>');
function ud(e, t) {
  ue(t, !0), Qs(/* @__PURE__ */ $s(t, ["$$slots", "$$events", "$$legacy", "$$host"]));
  const r = [
    {
      key: "input",
      title: "结束节点",
      description: "调用大模型处理任务或回答问题",
      content: Ym
    }
  ];
  Si(e, {
    children: (o, i) => {
      Pi(o, { items: r });
    },
    $$slots: { default: !0 }
  }), de();
}
se(ud, {}, [], [], !0);
const Xm = (e) => {
  var t = Wm();
  K(e, t);
};
var Wm = /* @__PURE__ */ ve('<div style="display: flex;flex-direction: column;gap: 5px;padding-top: 20px"><div style="display: flex;gap: 5px;font-size: 12px;color: #aaa"><span>变量名</span> <span>变量类型</span> <span>必填</span></div></div>');
function dd(e, t) {
  ue(t, !0), Qs(/* @__PURE__ */ $s(t, ["$$slots", "$$events", "$$legacy", "$$host"]));
  const r = [
    {
      key: "input",
      title: "大模型",
      description: "调用大模型处理任务或回答问题",
      content: Xm
    }
  ];
  Si(e, {
    children: (o, i) => {
      Pi(o, { items: r });
    },
    $$slots: { default: !0 }
  }), de();
}
se(dd, {}, [], [], !0);
const Km = {
  startNode: cd,
  llmNode: dd,
  endNode: ud
};
var Fm = /* @__PURE__ */ ve("<!> ", 1);
function fd(e, t) {
  ue(t, !0);
  const n = p(t, "icon", 7), r = p(t, "label", 7), o = p(t, "node", 7);
  return ni(e, {
    draggable: !0,
    ondragstart: (s) => {
      if (!s.dataTransfer)
        return null;
      const l = o() ? JSON.stringify(o()) : "";
      s.dataTransfer.setData("application/tinyflow", l), s.dataTransfer.effectAllowed = "move";
    },
    children: (s, l) => {
      var u = Fm(), a = He(u);
      nc(a, n);
      var c = ye(a);
      pe(() => En(c, ` ${r() ?? ""}`)), K(s, u);
    },
    $$slots: { default: !0 }
  }), de({
    get icon() {
      return n();
    },
    set icon(s) {
      n(s), m();
    },
    get label() {
      return r();
    },
    set label(s) {
      r(s), m();
    },
    get node() {
      return o();
    },
    set node(s) {
      o(s), m();
    }
  });
}
se(fd, { icon: {}, label: {}, node: {} }, [], [], !0);
var Zm = /* @__PURE__ */ Ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), qm = /* @__PURE__ */ Ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), Gm = /* @__PURE__ */ ve('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"><!></div></div></div> <!></div>');
function hd(e) {
  let t = yl("base"), n = yl("show");
  const r = [
    {
      // icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14ZM12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16Z"></path></svg>',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>',
      label: "开始节点",
      value: "startNode"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>',
      label: "循环",
      value: "startNode"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>',
      label: "大模型",
      value: "startNode"
    },
    {
      // icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.7134 7.12811L4.46682 7.69379C4.28637 8.10792 3.71357 8.10792 3.53312 7.69379L3.28656 7.12811C2.84706 6.11947 2.05545 5.31641 1.06767 4.87708L0.308047 4.53922C-0.102682 4.35653 -0.102682 3.75881 0.308047 3.57612L1.0252 3.25714C2.03838 2.80651 2.84417 1.97373 3.27612 0.930828L3.52932 0.319534C3.70578 -0.106511 4.29417 -0.106511 4.47063 0.319534L4.72382 0.930828C5.15577 1.97373 5.96158 2.80651 6.9748 3.25714L7.69188 3.57612C8.10271 3.75881 8.10271 4.35653 7.69188 4.53922L6.93228 4.87708C5.94451 5.31641 5.15288 6.11947 4.7134 7.12811ZM6.33421 15.8154C6.51032 15.233 6.7072 14.6562 6.93912 14.0327C8.99484 8.50636 12.4197 5.08172 18.0129 4.21479C17.5 5.35838 17.0151 6.15301 16.5858 6.58237C16.2521 6.91603 15.9185 7.24993 15.5848 7.58407L14.1721 8.99878L15.6279 10.4535C14.4976 12.5384 12.2652 14.1979 9.75193 14.512C8.43544 14.6766 7.29345 15.1188 6.33421 15.8154ZM18 9.99658L17 8.99728C17.3331 8.66372 17.6662 8.33039 18.0027 7.99391C19.0018 6.99303 20.0009 4.99392 21 1.99658C6.31105 1.99658 4.08854 15.422 3.06361 21.6132C3.0419 21.7443 3.02074 21.8722 3 21.9966H4.99824C5.66421 18.6635 7.33146 16.8301 10 16.4966C14 15.9966 17 12.9966 18 9.99658Z"></path></svg>',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>',
      label: "知识库",
      value: "startNode"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>',
      label: "搜索引擎",
      value: "startNode"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>',
      label: "Http 请求",
      value: "startNode"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>',
      label: "动态代码",
      value: "startNode"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>',
      label: "内容模板",
      value: "startNode"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>',
      label: "结束节点",
      value: "endNode"
    }
  ], o = [
    { label: "基础节点", value: "base" },
    { label: "业务工具", value: "tools" }
  ];
  var i = Gm(), s = ge(i), l = ge(s), u = ge(l);
  qu(u, {
    style: "width: 100%",
    items: o,
    onChange: (y) => {
      X(t, hn(y.value.toString()));
    }
  }), ce(l);
  var a = ye(l, 2), c = ge(a);
  Sn(c, 21, () => r, gi, (y, _) => {
    fd(y, {
      get icon() {
        return g(_).icon;
      },
      get label() {
        return g(_).label;
      }
    });
  }), ce(c);
  var d = ye(c, 2), f = ge(d);
  ni(f, {
    children: (y, _) => {
      no();
      var C = io("一个按钮22");
      K(y, C);
    },
    $$slots: { default: !0 }
  }), ce(d), ce(a), ce(s);
  var h = ye(s, 2);
  ni(h, {
    onclick: () => {
      X(n, hn(g(n) ? "" : "show"));
    },
    children: (y, _) => {
      var C = ot(), w = He(C);
      {
        var v = (S) => {
          var x = Zm();
          K(S, x);
        }, E = (S) => {
          var x = qm();
          K(S, x);
        };
        Be(w, (S) => {
          g(n) === "show" ? S(v) : S(E, !1);
        });
      }
      K(y, C);
    },
    $$slots: { default: !0 }
  }), ce(i), pe(() => {
    sr(i, `tf-toolbar ${g(n) ?? ""}`), te(c, "style", `display: ${(g(t) === "base" ? "flex" : "none") ?? ""}`), te(d, "style", `display: ${(g(t) !== "base" ? "flex" : "none") ?? ""}`);
  }), K(e, i);
}
se(hd, {}, [], [], !0);
var Um = /* @__PURE__ */ ve("<!> <!> <!>", 1), jm = /* @__PURE__ */ ve('<div style="position: relative;height: 100%;width: 100%"><!> <!></div>');
function gd(e, t) {
  ue(t, !0);
  const n = p(t, "onInit", 7), r = Ay();
  n()(r);
  function o(c) {
    console.log("onNodeDragStart: ", c);
  }
  const i = (c) => {
    c.preventDefault(), c.dataTransfer && (c.dataTransfer.dropEffect = "move");
  }, s = (c) => {
    c.preventDefault();
    const d = r.screenToFlowPosition({
      x: c.clientX - 250,
      y: c.clientY - 100
    }), f = {
      id: `${Math.random()}`,
      type: "startNode",
      position: d,
      data: { label: "startNode node" },
      origin: [0.5, 0]
    };
    Ao.addNode(f), Ao.selectNodeOnly(f.id);
  };
  var l = jm(), u = ge(l);
  hd(u);
  var a = ye(u, 2);
  return zu(a, An({ nodeTypes: Km }, Ao, {
    class: "tinyflow-logo",
    $$events: {
      nodedragstart: o,
      drop: s,
      dragover: i
    },
    children: (c, d) => {
      var f = Um(), h = He(f);
      Xu(h, {});
      var y = ye(h, 2);
      Vu(y, {});
      var _ = ye(y, 2);
      Ku(_, {}), K(c, f);
    },
    $$slots: { default: !0 }
  })), ce(l), K(e, l), de({
    get onInit() {
      return n();
    },
    set onInit(c) {
      n(c), m();
    }
  });
}
se(gd, { onInit: {} }, [], [], !0);
function Jm(e, t) {
  ue(t, !0);
  const n = p(t, "data", 7), r = p(t, "onInit", 7);
  return Ao.init(n().nodes, n().edges), Du(e, {
    fitView: !0,
    children: (o, i) => {
      gd(o, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), de({
    get data() {
      return n();
    },
    set data(o) {
      n(o), m();
    },
    get onInit() {
      return r();
    },
    set onInit(o) {
      r(o), m();
    }
  });
}
customElements.define("tinyflow-component", se(Jm, { data: {}, onInit: {} }, [], [], !1));
export {
  op as Tinyflow
};
