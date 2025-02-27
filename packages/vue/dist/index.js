/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Os = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" && Object.freeze([]);
const fu = () => {
}, Jf = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Yi = Object.assign, fn = Array.isArray, gr = (e) => typeof e == "function", Fn = (e) => typeof e == "string", Qf = (e) => typeof e == "symbol", rr = (e) => e !== null && typeof e == "object";
let il;
const Ki = () => il || (il = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ua(e) {
  if (fn(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = Fn(r) ? rg(r) : ua(r);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (Fn(e) || rr(e))
    return e;
}
const eg = /;(?![^(]*\))/g, tg = /:([^]+)/, ng = /\/\*[^]*?\*\//g;
function rg(e) {
  const t = {};
  return e.replace(ng, "").split(eg).forEach((n) => {
    if (n) {
      const r = n.split(tg);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function ca(e) {
  let t = "";
  if (Fn(e))
    t = e;
  else if (fn(e))
    for (let n = 0; n < e.length; n++) {
      const r = ca(e[n]);
      r && (t += r + " ");
    }
  else if (rr(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
);
Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
);
Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Qf)
);
function gu(e) {
  return zs(e) ? gu(e.__v_raw) : !!(e && e.__v_isReactive);
}
function zs(e) {
  return !!(e && e.__v_isReadonly);
}
function ys(e) {
  return !!(e && e.__v_isShallow);
}
function Hs(e) {
  return e ? !!e.__v_raw : !1;
}
function or(e) {
  const t = e && e.__v_raw;
  return t ? or(t) : e;
}
function da(e) {
  return e ? e.__v_isRef === !0 : !1;
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const ir = [];
function og(e) {
  ir.push(e);
}
function ig() {
  ir.pop();
}
let ws = !1;
function Ar(e, ...t) {
  if (ws) return;
  ws = !0;
  const n = ir.length ? ir[ir.length - 1].component : null, r = n && n.appContext.config.warnHandler, o = sg();
  if (r)
    fa(
      r,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((i) => {
          var s, a;
          return (a = (s = i.toString) == null ? void 0 : s.call(i)) != null ? a : JSON.stringify(i);
        }).join(""),
        n && n.proxy,
        o.map(
          ({ vnode: i }) => `at <${Nu(n, i.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    o.length && i.push(`
`, ...ag(o)), console.warn(...i);
  }
  ws = !1;
}
function sg() {
  let e = ir[ir.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const r = e.component && e.component.parent;
    e = r && r.vnode;
  }
  return t;
}
function ag(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...lg(n));
  }), t;
}
function lg({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, o = ` at <${Nu(
    e.component,
    e.type,
    r
  )}`, i = ">" + n;
  return e.props ? [o, ...ug(e.props), i] : [o + i];
}
function ug(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...pu(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function pu(e, t, n) {
  return Fn(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : da(t) ? (t = pu(e, or(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : gr(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = or(t), n ? t : [`${e}=`, t]);
}
const hu = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function fa(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    vu(o, t, n);
  }
}
function vu(e, t, n, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: s } = t && t.appContext.config || Os;
  if (t) {
    let a = t.parent;
    const l = t.proxy, u = process.env.NODE_ENV !== "production" ? hu[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const c = a.ec;
      if (c) {
        for (let d = 0; d < c.length; d++)
          if (c[d](e, l, u) === !1)
            return;
      }
      a = a.parent;
    }
    if (i) {
      fa(i, null, 10, [
        e,
        l,
        u
      ]);
      return;
    }
  }
  cg(e, n, o, r, s);
}
function cg(e, t, n, r = !0, o = !1) {
  if (process.env.NODE_ENV !== "production") {
    const i = hu[t];
    if (n && og(n), Ar(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && ig(), r)
      throw e;
    console.error(e);
  } else {
    if (o)
      throw e;
    console.error(e);
  }
}
const It = [];
let $n = -1;
const Nr = [];
let Dn = null, Cr = 0;
const dg = /* @__PURE__ */ Promise.resolve();
let Ls = null;
const fg = 100;
function gg(e) {
  let t = $n + 1, n = It.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = It[r], i = po(o);
    i < e || i === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function pg(e) {
  if (!(e.flags & 1)) {
    const t = po(e), n = It[It.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= po(n) ? It.push(e) : It.splice(gg(t), 0, e), e.flags |= 1, mu();
  }
}
function mu() {
  Ls || (Ls = dg.then(yu));
}
function hg(e) {
  fn(e) ? Nr.push(...e) : Dn && e.id === -1 ? Dn.splice(Cr + 1, 0, e) : e.flags & 1 || (Nr.push(e), e.flags |= 1), mu();
}
function vg(e) {
  if (Nr.length) {
    const t = [...new Set(Nr)].sort(
      (n, r) => po(n) - po(r)
    );
    if (Nr.length = 0, Dn) {
      Dn.push(...t);
      return;
    }
    for (Dn = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Cr = 0; Cr < Dn.length; Cr++) {
      const n = Dn[Cr];
      process.env.NODE_ENV !== "production" && wu(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    Dn = null, Cr = 0;
  }
}
const po = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function yu(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (n) => wu(e, n) : fu;
  try {
    for ($n = 0; $n < It.length; $n++) {
      const n = It[$n];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), fa(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; $n < It.length; $n++) {
      const n = It[$n];
      n && (n.flags &= -2);
    }
    $n = -1, It.length = 0, vg(e), Ls = null, (It.length || Nr.length) && yu(e);
  }
}
function wu(e, t) {
  const n = e.get(t) || 0;
  if (n > fg) {
    const r = t.i, o = r && Eu(r.type);
    return vu(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
const bs = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (Ki().__VUE_HMR_RUNTIME__ = {
  createRecord: xs(mg),
  rerender: xs(yg),
  reload: xs(wg)
});
const fi = /* @__PURE__ */ new Map();
function mg(e, t) {
  return fi.has(e) ? !1 : (fi.set(e, {
    initialDef: gi(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function gi(e) {
  return Pu(e) ? e.__vccOpts : e;
}
function yg(e, t) {
  const n = fi.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, gi(r.type).render = t), r.renderCache = [], r.update();
  }));
}
function wg(e, t) {
  const n = fi.get(e);
  if (!n) return;
  t = gi(t), sl(n.initialDef, t);
  const r = [...n.instances];
  for (let o = 0; o < r.length; o++) {
    const i = r[o], s = gi(i.type);
    let a = bs.get(s);
    a || (s !== n.initialDef && sl(s, t), bs.set(s, a = /* @__PURE__ */ new Set())), a.add(i), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (a.add(i), i.ceReload(t.styles), a.delete(i)) : i.parent ? pg(() => {
      i.parent.update(), a.delete(i);
    }) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), i.root.ce && i !== i.root && i.root.ce._removeChildStyle(s);
  }
  hg(() => {
    bs.clear();
  });
}
function sl(e, t) {
  Yi(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function xs(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (r) {
      console.error(r), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let kr, qo = [];
function bu(e, t) {
  var n, r;
  kr = e, kr ? (kr.enabled = !0, qo.forEach(({ event: o, args: i }) => kr.emit(o, ...i)), qo = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    bu(i, t);
  }), setTimeout(() => {
    kr || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, qo = []);
  }, 3e3)) : qo = [];
}
let pi = null, bg = null;
const xg = (e) => e.__isTeleport;
function xu(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, xu(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
Ki().requestIdleCallback;
Ki().cancelIdleCallback;
const $g = Symbol.for("v-ndc"), _g = {};
process.env.NODE_ENV !== "production" && (_g.ownKeys = (e) => (Ar(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
const Cg = {}, $u = (e) => Object.getPrototypeOf(e) === Cg, kg = (e) => e.__isSuspense, _u = Symbol.for("v-fgt"), Sg = Symbol.for("v-txt"), Eg = Symbol.for("v-cmt");
function Ng(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const Pg = (...e) => ku(
  ...e
), Cu = ({ key: e }) => e ?? null, ni = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Fn(e) || da(e) || gr(e) ? { i: pi, r: e, k: t, f: !!n } : e : null);
function Vg(e, t = null, n = null, r = 0, o = null, i = e === _u ? 0 : 1, s = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Cu(t),
    ref: t && ni(t),
    scopeId: bg,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: pi
  };
  return a ? (ga(l, n), i & 128 && e.normalize(l)) : n && (l.shapeFlag |= Fn(n) ? 8 : 16), process.env.NODE_ENV !== "production" && l.key !== l.key && Ar("VNode created with invalid key (NaN). VNode type:", l.type), l;
}
const Mg = process.env.NODE_ENV !== "production" ? Pg : ku;
function ku(e, t = null, n = null, r = 0, o = null, i = !1) {
  if ((!e || e === $g) && (process.env.NODE_ENV !== "production" && !e && Ar(`Invalid vnode type when creating vnode: ${e}.`), e = Eg), Ng(e)) {
    const a = hi(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ga(a, n), a.patchFlag = -2, a;
  }
  if (Pu(e) && (e = e.__vccOpts), t) {
    t = Og(t);
    let { class: a, style: l } = t;
    a && !Fn(a) && (t.class = ca(a)), rr(l) && (Hs(l) && !fn(l) && (l = Yi({}, l)), t.style = ua(l));
  }
  const s = Fn(e) ? 1 : kg(e) ? 128 : xg(e) ? 64 : rr(e) ? 4 : gr(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && s & 4 && Hs(e) && (e = or(e), Ar(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Vg(
    e,
    t,
    n,
    r,
    o,
    s,
    i,
    !0
  );
}
function Og(e) {
  return e ? Hs(e) || $u(e) ? Yi({}, e) : e : null;
}
function hi(e, t, n = !1, r = !1) {
  const { props: o, ref: i, patchFlag: s, children: a, transition: l } = e, u = t ? Hg(o || {}, t) : o, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && Cu(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? fn(i) ? i.concat(ni(t)) : [i, ni(t)] : ni(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && fn(a) ? a.map(Su) : a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== _u ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && hi(e.ssContent),
    ssFallback: e.ssFallback && hi(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && r && xu(
    c,
    l.clone(c)
  ), c;
}
function Su(e) {
  const t = hi(e);
  return fn(e.children) && (t.children = e.children.map(Su)), t;
}
function zg(e = " ", t = 0) {
  return Mg(Sg, null, e, t);
}
function ga(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (fn(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), ga(e, o()), o._c && (o._d = !0));
      return;
    } else
      n = 32, !t._ && !$u(t) && (t._ctx = pi);
  else gr(t) ? (t = { default: t, _ctx: pi }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [zg(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Hg(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = ca([t.class, r.class]));
      else if (o === "style")
        t.style = ua([t.style, r.style]);
      else if (Jf(o)) {
        const i = t[o], s = r[o];
        s && i !== s && !(fn(i) && i.includes(s)) && (t[o] = i ? [].concat(i, s) : s);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
{
  const e = Ki(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (i) => {
      o.length > 1 ? o.forEach((s) => s(i)) : o[0](i);
    };
  };
  t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => n
  );
}
process.env.NODE_ENV;
const Lg = /(?:^|[-_])(\w)/g, Tg = (e) => e.replace(Lg, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Eu(e, t = !0) {
  return gr(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Nu(e, t, n = !1) {
  let r = Eu(t);
  if (!r && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (r = o[1]);
  }
  if (!r && e && e.parent) {
    const o = (i) => {
      for (const s in i)
        if (i[s] === t)
          return s;
    };
    r = o(
      e.components || e.parent.type.components
    ) || o(e.appContext.components);
  }
  return r ? Tg(r) : n ? "App" : "Anonymous";
}
function Pu(e) {
  return gr(e) && "__vccOpts" in e;
}
function Ag() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(d) {
      return rr(d) ? d.__isVue ? ["div", e, "VueInstance"] : da(d) ? [
        "div",
        {},
        ["span", e, c(d)],
        "<",
        // avoid debugger accessing value affecting behavior
        a("_value" in d ? d._value : d),
        ">"
      ] : gu(d) ? [
        "div",
        {},
        ["span", e, ys(d) ? "ShallowReactive" : "Reactive"],
        "<",
        a(d),
        `>${zs(d) ? " (readonly)" : ""}`
      ] : zs(d) ? [
        "div",
        {},
        ["span", e, ys(d) ? "ShallowReadonly" : "Readonly"],
        "<",
        a(d),
        ">"
      ] : null : null;
    },
    hasBody(d) {
      return d && d.__isVue;
    },
    body(d) {
      if (d && d.__isVue)
        return [
          "div",
          {},
          ...i(d.$)
        ];
    }
  };
  function i(d) {
    const f = [];
    d.type.props && d.props && f.push(s("props", or(d.props))), d.setupState !== Os && f.push(s("setup", d.setupState)), d.data !== Os && f.push(s("data", or(d.data)));
    const g = l(d, "computed");
    g && f.push(s("computed", g));
    const h = l(d, "inject");
    return h && f.push(s("injected", h)), f.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: d }]
    ]), f;
  }
  function s(d, f) {
    return f = Yi({}, f), Object.keys(f).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        d
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(f).map((g) => [
          "div",
          {},
          ["span", r, g + ": "],
          a(f[g], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function a(d, f = !0) {
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", r, d] : rr(d) ? ["object", { object: f ? or(d) : d }] : ["span", n, String(d)];
  }
  function l(d, f) {
    const g = d.type;
    if (gr(g))
      return;
    const h = {};
    for (const b in d.ctx)
      u(g, b, f) && (h[b] = d.ctx[b]);
    return h;
  }
  function u(d, f, g) {
    const h = d[g];
    if (fn(h) && h.includes(f) || rr(h) && f in h || d.extends && u(d.extends, f, g) || d.mixins && d.mixins.some((b) => u(b, f, g)))
      return !0;
  }
  function c(d) {
    return ys(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* vue v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Dg() {
  Ag();
}
process.env.NODE_ENV !== "production" && Dg();
var Ig = Object.defineProperty, Vu = (e) => {
  throw TypeError(e);
}, Rg = (e, t, n) => t in e ? Ig(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ft = (e, t, n) => Rg(e, typeof t != "symbol" ? t + "" : t, n), pa = (e, t, n) => t.has(e) || Vu("Cannot " + n), st = (e, t, n) => (pa(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Sr = (e, t, n) => t.has(e) ? Vu("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), vi = (e, t, n, r) => (pa(e, t, "write to private field"), t.set(e, n), n), Zg = (e, t, n) => (pa(e, t, "access private method"), n);
const Bg = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Bg);
let jr = !1, Xg = !1;
function Yg() {
  jr = !0;
}
Yg();
const ha = 1, va = 2, Mu = 4, Kg = 8, Wg = 16, Fg = 1, qg = 2, Ou = 4, jg = 8, Gg = 16, zu = 1, Ug = 2, Hu = "[", ma = "[!", ya = "]", Pr = {}, _t = Symbol(), Lu = "http://www.w3.org/2000/svg", Jg = !1, Jt = 2, Tu = 4, Wi = 8, wa = 16, Hn = 32, Gr = 64, mi = 128, Zt = 256, yi = 512, vt = 1024, Ln = 2048, pr = 4096, En = 8192, Fi = 16384, Qg = 32768, Ur = 65536, e1 = 1 << 17, t1 = 1 << 19, Au = 1 << 20, Xn = Symbol("$state"), ba = Symbol("legacy props"), n1 = Symbol("");
var Mo = Array.isArray, r1 = Array.prototype.indexOf, xa = Array.from, wi = Object.keys, ho = Object.defineProperty, Nn = Object.getOwnPropertyDescriptor, Du = Object.getOwnPropertyDescriptors, o1 = Object.prototype, i1 = Array.prototype, $a = Object.getPrototypeOf;
function io(e) {
  return typeof e == "function";
}
const dt = () => {
};
function s1(e) {
  return e();
}
function vo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const a1 = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let bi = !1, xi = !1, Ts = [], As = [];
function Iu() {
  bi = !1;
  const e = Ts.slice();
  Ts = [], vo(e);
}
function Ru() {
  xi = !1;
  const e = As.slice();
  As = [], vo(e);
}
function Oo(e) {
  bi || (bi = !0, queueMicrotask(Iu)), Ts.push(e);
}
function l1(e) {
  xi || (xi = !0, a1(Ru)), As.push(e);
}
function u1() {
  bi && Iu(), xi && Ru();
}
function Zu(e) {
  return e === this.v;
}
function _a(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ca(e) {
  return !_a(e, this.v);
}
function c1(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function d1() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function f1(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function g1() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function p1() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function h1(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function v1() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function m1() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function y1() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function w1() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function kt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Zu,
    rv: 0,
    wv: 0
  };
  return n;
}
function Ds(e) {
  return /* @__PURE__ */ Bu(kt(e));
}
// @__NO_SIDE_EFFECTS__
function zo(e, t = !1) {
  var n;
  const r = kt(e);
  return t || (r.equals = Ca), jr && Re !== null && Re.l !== null && ((n = Re.l).s ?? (n.s = [])).push(r), r;
}
function te(e, t = !1) {
  return /* @__PURE__ */ Bu(/* @__PURE__ */ zo(e, t));
}
// @__NO_SIDE_EFFECTS__
function Bu(e) {
  return We !== null && !ln && We.f & Jt && (un === null ? _1([e]) : un.push(e)), e;
}
function U(e, t) {
  return We !== null && !ln && Qi() && We.f & (Jt | wa) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (un === null || !un.includes(e)) && w1(), Is(e, t);
}
function Is(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = Uu(), Xu(e, Ln), Qi() && Ze !== null && Ze.f & vt && !(Ze.f & (Hn | Gr)) && (_n === null ? C1([e]) : _n.push(e))), t;
}
function al(e, t = 1) {
  var n = p(e), r = t === 1 ? n++ : n--;
  return U(e, n), r;
}
function Xu(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Qi(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      a & Ln || !r && s === Ze || (Qt(s, t), a & (vt | Zt) && (a & Jt ? Xu(
        /** @type {Derived} */
        s,
        pr
      ) : Ui(
        /** @type {Effect} */
        s
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function ze(e) {
  var t = Jt | Ln, n = We !== null && We.f & Jt ? (
    /** @type {Derived} */
    We
  ) : null;
  return Ze === null || n !== null && n.f & Zt ? t |= Zt : Ze.f |= Au, {
    ctx: Re,
    deps: null,
    effects: null,
    equals: Zu,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: n ?? Ze
  };
}
// @__NO_SIDE_EFFECTS__
function he(e) {
  const t = /* @__PURE__ */ ze(e);
  return t.equals = Ca, t;
}
function Yu(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Bt(
        /** @type {Effect} */
        t[n]
      );
  }
}
function b1(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & Jt))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function x1(e) {
  var t, n = Ze;
  jn(b1(e));
  try {
    Yu(e), t = Qu(e);
  } finally {
    jn(n);
  }
  return t;
}
function Ku(e) {
  var t = x1(e), n = (Zn || e.f & Zt) && e.deps !== null ? pr : vt;
  Qt(e, n), e.equals(t) || (e.v = t, e.wv = Uu());
}
function qi(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let _e = !1;
function Mt(e) {
  _e = e;
}
let Me;
function bt(e) {
  if (e === null)
    throw qi(), Pr;
  return Me = e;
}
function gn() {
  return bt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ vn(Me)
  );
}
function F(e) {
  if (_e) {
    if (/* @__PURE__ */ vn(Me) !== null)
      throw qi(), Pr;
    Me = e;
  }
}
function Ae(e = 1) {
  if (_e) {
    for (var t = e, n = Me; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ vn(n);
    Me = n;
  }
}
function Rs() {
  for (var e = 0, t = Me; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === ya) {
        if (e === 0) return t;
        e -= 1;
      } else (n === Hu || n === ma) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ vn(t)
    );
    t.remove(), t = r;
  }
}
function an(e, t = null, n) {
  if (typeof e != "object" || e === null || Xn in e)
    return e;
  const r = $a(e);
  if (r !== o1 && r !== i1)
    return e;
  var o = /* @__PURE__ */ new Map(), i = Mo(e), s = kt(0);
  i && o.set("length", kt(
    /** @type {any[]} */
    e.length
  ));
  var a;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, u, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && v1();
        var d = o.get(u);
        return d === void 0 ? (d = kt(c.value), o.set(u, d)) : U(d, an(c.value, a)), !0;
      },
      deleteProperty(l, u) {
        var c = o.get(u);
        if (c === void 0)
          u in l && o.set(u, kt(_t));
        else {
          if (i && typeof u == "string") {
            var d = (
              /** @type {Source<number>} */
              o.get("length")
            ), f = Number(u);
            Number.isInteger(f) && f < d.v && U(d, f);
          }
          U(c, _t), ll(s);
        }
        return !0;
      },
      get(l, u, c) {
        var d;
        if (u === Xn)
          return e;
        var f = o.get(u), g = u in l;
        if (f === void 0 && (!g || (d = Nn(l, u)) != null && d.writable) && (f = kt(an(g ? l[u] : _t, a)), o.set(u, f)), f !== void 0) {
          var h = p(f);
          return h === _t ? void 0 : h;
        }
        return Reflect.get(l, u, c);
      },
      getOwnPropertyDescriptor(l, u) {
        var c = Reflect.getOwnPropertyDescriptor(l, u);
        if (c && "value" in c) {
          var d = o.get(u);
          d && (c.value = p(d));
        } else if (c === void 0) {
          var f = o.get(u), g = f == null ? void 0 : f.v;
          if (f !== void 0 && g !== _t)
            return {
              enumerable: !0,
              configurable: !0,
              value: g,
              writable: !0
            };
        }
        return c;
      },
      has(l, u) {
        var c;
        if (u === Xn)
          return !0;
        var d = o.get(u), f = d !== void 0 && d.v !== _t || Reflect.has(l, u);
        if (d !== void 0 || Ze !== null && (!f || (c = Nn(l, u)) != null && c.writable)) {
          d === void 0 && (d = kt(f ? an(l[u], a) : _t), o.set(u, d));
          var g = p(d);
          if (g === _t)
            return !1;
        }
        return f;
      },
      set(l, u, c, d) {
        var f, g = o.get(u), h = u in l;
        if (i && u === "length")
          for (var b = c; b < /** @type {Source<number>} */
          g.v; b += 1) {
            var x = o.get(b + "");
            x !== void 0 ? U(x, _t) : b in l && (x = kt(_t), o.set(b + "", x));
          }
        g === void 0 ? (!h || (f = Nn(l, u)) != null && f.writable) && (g = kt(void 0), U(g, an(c, a)), o.set(u, g)) : (h = g.v !== _t, U(g, an(c, a)));
        var k = Reflect.getOwnPropertyDescriptor(l, u);
        if (k != null && k.set && k.set.call(d, c), !h) {
          if (i && typeof u == "string") {
            var v = (
              /** @type {Source<number>} */
              o.get("length")
            ), $ = Number(u);
            Number.isInteger($) && $ >= v.v && U(v, $ + 1);
          }
          ll(s);
        }
        return !0;
      },
      ownKeys(l) {
        p(s);
        var u = Reflect.ownKeys(l).filter((f) => {
          var g = o.get(f);
          return g === void 0 || g.v !== _t;
        });
        for (var [c, d] of o)
          d.v !== _t && !(c in l) && u.push(c);
        return u;
      },
      setPrototypeOf() {
        m1();
      }
    }
  );
}
function ll(e, t = 1) {
  U(e, e.v + t);
}
var Ct, Wu, Fu, qu;
function Zs() {
  if (Ct === void 0) {
    Ct = window, Wu = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    Fu = Nn(t, "firstChild").get, qu = Nn(t, "nextSibling").get, e.__click = void 0, e.__className = "", e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Vn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function yt(e) {
  return Fu.call(e);
}
// @__NO_SIDE_EFFECTS__
function vn(e) {
  return qu.call(e);
}
function q(e, t) {
  if (!_e)
    return /* @__PURE__ */ yt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ yt(Me)
  );
  if (n === null)
    n = Me.appendChild(Vn());
  else if (t && n.nodeType !== 3) {
    var r = Vn();
    return n == null || n.before(r), bt(r), r;
  }
  return bt(n), n;
}
function ye(e, t) {
  if (!_e) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ yt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ vn(n) : n;
  }
  return Me;
}
function X(e, t = 1, n = !1) {
  let r = _e ? Me : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ vn(r);
  if (!_e)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var s = Vn();
    return r === null ? o == null || o.after(s) : r.before(s), bt(s), s;
  }
  return bt(r), /** @type {TemplateNode} */
  r;
}
function ka(e) {
  e.textContent = "";
}
const ju = 0, $1 = 1;
let ri = !1, oi = ju, mo = !1, yo = null, Vr = !1, Sa = !1;
function ul(e) {
  Vr = e;
}
function cl(e) {
  Sa = e;
}
let tr = [], Mr = 0, We = null, ln = !1;
function qn(e) {
  We = e;
}
let Ze = null;
function jn(e) {
  Ze = e;
}
let un = null;
function _1(e) {
  un = e;
}
let mt = null, Pt = 0, _n = null;
function C1(e) {
  _n = e;
}
let Gu = 1, $i = 0, Zn = !1;
function Uu() {
  return ++Gu;
}
function Jr(e) {
  var t, n = e.f;
  if (n & Ln)
    return !0;
  if (n & pr) {
    var r = e.deps, o = (n & Zt) !== 0;
    if (r !== null) {
      var i, s, a = (n & yi) !== 0, l = o && Ze !== null && !Zn, u = r.length;
      if (a || l) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (i = 0; i < u; i++)
          s = r[i], (a || !((t = s == null ? void 0 : s.reactions) != null && t.includes(c))) && (s.reactions ?? (s.reactions = [])).push(c);
        a && (c.f ^= yi), l && d !== null && !(d.f & Zt) && (c.f ^= Zt);
      }
      for (i = 0; i < u; i++)
        if (s = r[i], Jr(
          /** @type {Derived} */
          s
        ) && Ku(
          /** @type {Derived} */
          s
        ), s.wv > e.wv)
          return !0;
    }
    (!o || Ze !== null && !Zn) && Qt(e, vt);
  }
  return !1;
}
function k1(e, t) {
  for (var n = t; n !== null; ) {
    if (n.f & mi)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= mi;
      }
    n = n.parent;
  }
  throw ri = !1, e;
}
function S1(e) {
  return (e.f & Fi) === 0 && (e.parent === null || (e.parent.f & mi) === 0);
}
function ji(e, t, n, r) {
  if (ri) {
    if (n === null && (ri = !1), S1(t))
      throw e;
    return;
  }
  n !== null && (ri = !0);
  {
    k1(e, t);
    return;
  }
}
function Ju(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      i.f & Jt ? Ju(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? Qt(i, Ln) : i.f & vt && Qt(i, pr), Ui(
        /** @type {Effect} */
        i
      ));
    }
}
function Qu(e) {
  var t, n = mt, r = Pt, o = _n, i = We, s = Zn, a = un, l = Re, u = ln, c = e.f;
  mt = /** @type {null | Value[]} */
  null, Pt = 0, _n = null, We = c & (Hn | Gr) ? null : e, Zn = (c & Zt) !== 0 && (!Vr || i === null || u), un = null, dl(e.ctx), ln = !1, $i++;
  try {
    var d = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (mt !== null) {
      var g;
      if (_i(e, Pt), f !== null && Pt > 0)
        for (f.length = Pt + mt.length, g = 0; g < mt.length; g++)
          f[Pt + g] = mt[g];
      else
        e.deps = f = mt;
      if (!Zn)
        for (g = Pt; g < f.length; g++)
          ((t = f[g]).reactions ?? (t.reactions = [])).push(e);
    } else f !== null && Pt < f.length && (_i(e, Pt), f.length = Pt);
    if (Qi() && _n !== null && !ln && f !== null && !(e.f & (Jt | pr | Ln)))
      for (g = 0; g < /** @type {Source[]} */
      _n.length; g++)
        Ju(
          _n[g],
          /** @type {Effect} */
          e
        );
    return i !== null && $i++, d;
  } finally {
    mt = n, Pt = r, _n = o, We = i, Zn = s, un = a, dl(l), ln = u;
  }
}
function E1(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = r1.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && t.f & Jt && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (mt === null || !mt.includes(t)) && (Qt(t, pr), t.f & (Zt | yi) || (t.f ^= yi), Yu(
    /** @type {Derived} **/
    t
  ), _i(
    /** @type {Derived} **/
    t,
    0
  ));
}
function _i(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      E1(e, n[r]);
}
function Gi(e) {
  var t = e.f;
  if (!(t & Fi)) {
    Qt(e, vt);
    var n = Ze, r = Re;
    Ze = e;
    try {
      t & wa ? T1(e) : ic(e), oc(e);
      var o = Qu(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = Gu;
      var i = e.deps, s;
      Jg && Xg && e.f & Ln;
    } catch (a) {
      ji(a, e, n, r || e.ctx);
    } finally {
      Ze = n;
    }
  }
}
function ec() {
  if (Mr > 1e3) {
    Mr = 0;
    try {
      g1();
    } catch (e) {
      if (yo !== null)
        ji(e, yo, null);
      else
        throw e;
    }
  }
  Mr++;
}
function tc(e) {
  var t = e.length;
  if (t !== 0) {
    ec();
    var n = Vr;
    Vr = !0;
    try {
      for (var r = 0; r < t; r++) {
        var o = e[r];
        o.f & vt || (o.f ^= vt);
        var i = V1(o);
        N1(i);
      }
    } finally {
      Vr = n;
    }
  }
}
function N1(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if (!(r.f & (Fi | En)))
        try {
          Jr(r) && (Gi(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? sc(r) : r.fn = null));
        } catch (o) {
          ji(o, r, null, r.ctx);
        }
    }
}
function P1() {
  if (mo = !1, Mr > 1001)
    return;
  const e = tr;
  tr = [], tc(e), mo || (Mr = 0, yo = null);
}
function Ui(e) {
  oi === ju && (mo || (mo = !0, queueMicrotask(P1))), yo = e;
  for (var t = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (Gr | Hn)) {
      if (!(n & vt)) return;
      t.f ^= vt;
    }
  }
  tr.push(t);
}
function V1(e) {
  var t = [], n = e.first;
  e: for (; n !== null; ) {
    var r = n.f, o = (r & Hn) !== 0, i = o && (r & vt) !== 0, s = n.next;
    if (!i && !(r & En)) {
      if (r & Tu)
        t.push(n);
      else if (o)
        n.f ^= vt;
      else {
        var a = We;
        try {
          We = n, Jr(n) && Gi(n);
        } catch (c) {
          ji(c, n, null, n.ctx);
        } finally {
          We = a;
        }
      }
      var l = n.first;
      if (l !== null) {
        n = l;
        continue;
      }
    }
    if (s === null) {
      let c = n.parent;
      for (; c !== null; ) {
        if (e === c)
          break e;
        var u = c.next;
        if (u !== null) {
          n = u;
          continue e;
        }
        c = c.parent;
      }
    }
    n = s;
  }
  return t;
}
function m(e) {
  var t = oi, n = tr;
  try {
    ec();
    const o = [];
    oi = $1, tr = o, mo = !1, tc(n);
    var r = e == null ? void 0 : e();
    return u1(), (tr.length > 0 || o.length > 0) && m(), Mr = 0, yo = null, r;
  } finally {
    oi = t, tr = n;
  }
}
function p(e) {
  var t = e.f, n = (t & Jt) !== 0;
  if (We !== null && !ln) {
    un !== null && un.includes(e) && y1();
    var r = We.deps;
    e.rv < $i && (e.rv = $i, mt === null && r !== null && r[Pt] === e ? Pt++ : mt === null ? mt = [e] : (!Zn || !mt.includes(e)) && mt.push(e));
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), i = o.parent;
    i !== null && !(i.f & Zt) && (o.f ^= Zt);
  }
  return n && (o = /** @type {Derived} */
  e, Jr(o) && Ku(o)), e.v;
}
function pn(e) {
  var t = ln;
  try {
    return ln = !0, e();
  } finally {
    ln = t;
  }
}
const M1 = -7169;
function Qt(e, t) {
  e.f = e.f & M1 | t;
}
function G(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Xn in e)
      Bs(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Xn in n && Bs(n);
      }
  }
}
function Bs(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        Bs(e[r], t);
      } catch {
      }
    const n = $a(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Du(n);
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
function nc(e) {
  Ze === null && We === null && f1(), We !== null && We.f & Zt && Ze === null && d1(), Sa && c1();
}
function O1(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function hr(e, t, n, r = !0) {
  var o = (e & Gr) !== 0, i = Ze, s = {
    ctx: Re,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Ln,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: o ? null : i,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (n) {
    var a = Vr;
    try {
      ul(!0), Gi(s), s.f |= Qg;
    } catch (c) {
      throw Bt(s), c;
    } finally {
      ul(a);
    }
  } else t !== null && Ui(s);
  var l = n && s.deps === null && s.first === null && s.nodes_start === null && s.teardown === null && (s.f & (Au | mi)) === 0;
  if (!l && !o && r && (i !== null && O1(s, i), We !== null && We.f & Jt)) {
    var u = (
      /** @type {Derived} */
      We
    );
    (u.effects ?? (u.effects = [])).push(s);
  }
  return s;
}
function rc(e) {
  const t = hr(Wi, null, !1);
  return Qt(t, vt), t.teardown = e, t;
}
function Ci(e) {
  nc();
  var t = Ze !== null && (Ze.f & Hn) !== 0 && Re !== null && !Re.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      Re
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: Ze,
      reaction: We
    });
  } else {
    var r = Vt(e);
    return r;
  }
}
function z1(e) {
  return nc(), Qr(e);
}
function H1(e) {
  const t = hr(Gr, e, !0);
  return () => {
    Bt(t);
  };
}
function L1(e) {
  const t = hr(Gr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Dr(t, () => {
      Bt(t), r(void 0);
    }) : (Bt(t), r(void 0));
  });
}
function Vt(e) {
  return hr(Tu, e, !1);
}
function ae(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    Re
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = Qr(() => {
    e(), !r.ran && (r.ran = !0, U(n.l.r2, !0), pn(t));
  });
}
function ft() {
  var e = (
    /** @type {ComponentContextLegacy} */
    Re
  );
  Qr(() => {
    if (p(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        n.f & vt && Qt(n, pr), Jr(n) && Gi(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function Qr(e) {
  return hr(Wi, e, !0);
}
function Se(e, t = [], n = ze) {
  const r = t.map(n);
  return vr(() => e(...r.map(p)));
}
function vr(e, t = 0) {
  return hr(Wi | wa | t, e, !0);
}
function Mn(e, t = !0) {
  return hr(Wi | Hn, e, !0, t);
}
function oc(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Sa, r = We;
    cl(!0), qn(null);
    try {
      t.call(null);
    } finally {
      cl(n), qn(r);
    }
  }
}
function ic(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    Bt(n, t), n = r;
  }
}
function T1(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & Hn || Bt(t), t = n;
  }
}
function Bt(e, t = !0) {
  var n = !1;
  if ((t || e.f & t1) && e.nodes_start !== null) {
    for (var r = e.nodes_start, o = e.nodes_end; r !== null; ) {
      var i = r === o ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ vn(r)
      );
      r.remove(), r = i;
    }
    n = !0;
  }
  ic(e, t && !n), _i(e, 0), Qt(e, Fi);
  var s = e.transitions;
  if (s !== null)
    for (const l of s)
      l.stop();
  oc(e);
  var a = e.parent;
  a !== null && a.first !== null && sc(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function sc(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Dr(e, t) {
  var n = [];
  Ea(e, n, !0), ac(n, () => {
    Bt(e), t && t();
  });
}
function ac(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function Ea(e, t, n) {
  if (!(e.f & En)) {
    if (e.f ^= En, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & Ur) !== 0 || (r.f & Hn) !== 0;
      Ea(r, t, i ? n : !1), r = o;
    }
  }
}
function wo(e) {
  lc(e, !0);
}
function lc(e, t) {
  if (e.f & En) {
    e.f ^= En, e.f & vt || (e.f ^= vt), Jr(e) && (Qt(e, Ln), Ui(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Ur) !== 0 || (n.f & Hn) !== 0;
      lc(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
function Ji(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let Re = null;
function dl(e) {
  Re = e;
}
function ar(e) {
  return (
    /** @type {T} */
    Na().get(e)
  );
}
function Ir(e, t) {
  return Na().set(e, t), t;
}
function A1(e) {
  return Na().has(e);
}
function ce(e, t = !1, n) {
  Re = {
    p: Re,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  }, jr && !t && (Re.l = {
    s: null,
    u: null,
    r1: [],
    r2: kt(!1)
  });
}
function de(e) {
  const t = Re;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var n = Ze, r = We;
      t.e = null;
      try {
        for (var o = 0; o < s.length; o++) {
          var i = s[o];
          jn(i.effect), qn(i.reaction), Vt(i.fn);
        }
      } finally {
        jn(n), qn(r);
      }
    }
    Re = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Qi() {
  return !jr || Re !== null && Re.l === null;
}
function Na(e) {
  return Re === null && Ji(), Re.c ?? (Re.c = new Map(D1(Re) || void 0));
}
function D1(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function I1(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const R1 = [
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
function Z1(e) {
  return R1.includes(e);
}
const B1 = {
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
function X1(e) {
  return e = e.toLowerCase(), B1[e] ?? e;
}
const Y1 = ["touchstart", "touchmove"];
function K1(e) {
  return Y1.includes(e);
}
const W1 = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function F1(e) {
  return W1.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function q1(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, Oo(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function j1(e) {
  _e && /* @__PURE__ */ yt(e) !== null && ka(e);
}
let fl = !1;
function G1() {
  fl || (fl = !0, document.addEventListener(
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
function U1(e) {
  var t = We, n = Ze;
  qn(null), jn(null);
  try {
    return e();
  } finally {
    qn(t), jn(n);
  }
}
const uc = /* @__PURE__ */ new Set(), Xs = /* @__PURE__ */ new Set();
function cc(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || lo.call(t, i), !i.cancelBubble)
      return U1(() => n == null ? void 0 : n.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Oo(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function Fe(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = cc(e, t, n, i);
  (t === document.body || t === window || t === document) && rc(() => {
    t.removeEventListener(e, s, i);
  });
}
function es(e) {
  for (var t = 0; t < e.length; t++)
    uc.add(e[t]);
  for (var n of Xs)
    n(e);
}
function lo(e) {
  var t, n = this, r = (
    /** @type {Node} */
    n.ownerDocument
  ), o = e.type, i = ((t = e.composedPath) == null ? void 0 : t.call(e)) || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  ), a = 0, l = e.__root;
  if (l) {
    var u = i.indexOf(l);
    if (u !== -1 && (n === document || n === /** @type {any} */
    window)) {
      e.__root = n;
      return;
    }
    var c = i.indexOf(n);
    if (c === -1)
      return;
    u <= c && (a = u);
  }
  if (s = /** @type {Element} */
  i[a] || e.target, s !== n) {
    ho(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var d = We, f = Ze;
    qn(null), jn(null);
    try {
      for (var g, h = []; s !== null; ) {
        var b = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var x = s["__" + o];
          if (x !== void 0 && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s))
            if (Mo(x)) {
              var [k, ...v] = x;
              k.apply(s, [e, ...v]);
            } else
              x.call(s, e);
        } catch ($) {
          g ? h.push($) : g = $;
        }
        if (e.cancelBubble || b === n || b === null)
          break;
        s = b;
      }
      if (g) {
        for (let $ of h)
          queueMicrotask(() => {
            throw $;
          });
        throw g;
      }
    } finally {
      e.__root = n, delete e.currentTarget, qn(d), jn(f);
    }
  }
}
function Pa(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Et(e, t) {
  var n = (
    /** @type {Effect} */
    Ze
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function oe(e, t) {
  var n = (t & zu) !== 0, r = (t & Ug) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (_e)
      return Et(Me, null), Me;
    o === void 0 && (o = Pa(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ yt(o)));
    var s = (
      /** @type {TemplateNode} */
      r || Wu ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ yt(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Et(a, l);
    } else
      Et(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function ke(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & zu) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (_e)
      return Et(Me, null), Me;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Pa(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ yt(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ yt(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ yt(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ yt(l);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ yt(u)
      ), d = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Et(c, d);
    } else
      Et(u, u);
    return u;
  };
}
function Ge(e = "") {
  if (!_e) {
    var t = Vn(e + "");
    return Et(t, t), t;
  }
  var n = Me;
  return n.nodeType !== 3 && (n.before(n = Vn()), bt(n)), Et(n, n), n;
}
function qe() {
  if (_e)
    return Et(Me, null), Me;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Vn();
  return e.append(t, n), Et(t, n), e;
}
function T(e, t) {
  if (_e) {
    Ze.nodes_end = Me, gn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function mn(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function dc(e, t) {
  return fc(e, t);
}
function J1(e, t) {
  Zs(), t.intro = t.intro ?? !1;
  const n = t.target, r = _e, o = Me;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ yt(n)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== Hu); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ vn(i);
    if (!i)
      throw Pr;
    Mt(!0), bt(
      /** @type {Comment} */
      i
    ), gn();
    const s = fc(e, { ...t, anchor: i });
    if (Me === null || Me.nodeType !== 8 || /** @type {Comment} */
    Me.data !== ya)
      throw qi(), Pr;
    return Mt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === Pr)
      return t.recover === !1 && p1(), Zs(), ka(n), Mt(!1), dc(e, t);
    throw s;
  } finally {
    Mt(r), bt(o);
  }
}
const $r = /* @__PURE__ */ new Map();
function fc(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  Zs();
  var a = /* @__PURE__ */ new Set(), l = (d) => {
    for (var f = 0; f < d.length; f++) {
      var g = d[f];
      if (!a.has(g)) {
        a.add(g);
        var h = K1(g);
        t.addEventListener(g, lo, { passive: h });
        var b = $r.get(g);
        b === void 0 ? (document.addEventListener(g, lo, { passive: h }), $r.set(g, 1)) : $r.set(g, b + 1);
      }
    }
  };
  l(xa(uc)), Xs.add(l);
  var u = void 0, c = L1(() => {
    var d = n ?? t.appendChild(Vn());
    return Mn(() => {
      if (i) {
        ce({});
        var f = (
          /** @type {ComponentContext} */
          Re
        );
        f.c = i;
      }
      o && (r.$$events = o), _e && Et(
        /** @type {TemplateNode} */
        d,
        null
      ), u = e(d, r) || {}, _e && (Ze.nodes_end = Me), i && de();
    }), () => {
      var f;
      for (var g of a) {
        t.removeEventListener(g, lo);
        var h = (
          /** @type {number} */
          $r.get(g)
        );
        --h === 0 ? (document.removeEventListener(g, lo), $r.delete(g)) : $r.set(g, h);
      }
      Xs.delete(l), d !== n && ((f = d.parentNode) == null || f.removeChild(d));
    };
  });
  return Ys.set(u, c), u;
}
let Ys = /* @__PURE__ */ new WeakMap();
function Q1(e, t) {
  const n = Ys.get(e);
  return n ? (Ys.delete(e), n(t)) : Promise.resolve();
}
function $e(e, t, n = !1) {
  _e && gn();
  var r = e, o = null, i = null, s = _t, a = n ? Ur : 0, l = !1;
  const u = (d, f = !0) => {
    l = !0, c(f, d);
  }, c = (d, f) => {
    if (s === (s = d)) return;
    let g = !1;
    if (_e) {
      const h = (
        /** @type {Comment} */
        r.data === ma
      );
      !!s === h && (r = Rs(), bt(r), Mt(!1), g = !0);
    }
    s ? (o ? wo(o) : f && (o = Mn(() => f(r))), i && Dr(i, () => {
      i = null;
    })) : (i ? wo(i) : f && (i = Mn(() => f(r))), o && Dr(o, () => {
      o = null;
    })), g && Mt(!0);
  };
  vr(() => {
    l = !1, t(u), l || c(null, null);
  }, a), _e && (r = Me);
}
function ts(e, t) {
  return t;
}
function ep(e, t, n, r) {
  for (var o = [], i = t.length, s = 0; s < i; s++)
    Ea(t[s].e, o, !0);
  var a = i > 0 && o.length === 0 && n !== null;
  if (a) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    ka(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), In(e, t[0].prev, t[i - 1].next);
  }
  ac(o, () => {
    for (var u = 0; u < i; u++) {
      var c = t[u];
      a || (r.delete(c.k), In(e, c.prev, c.next)), Bt(c.e, !a);
    }
  });
}
function zt(e, t, n, r, o, i = null) {
  var s = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & Mu) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    s = _e ? bt(
      /** @type {Comment | Text} */
      /* @__PURE__ */ yt(u)
    ) : u.appendChild(Vn());
  }
  _e && gn();
  var c = null, d = !1, f = /* @__PURE__ */ he(() => {
    var g = n();
    return Mo(g) ? g : g == null ? [] : xa(g);
  });
  vr(() => {
    var g = p(f), h = g.length;
    if (d && h === 0)
      return;
    d = h === 0;
    let b = !1;
    if (_e) {
      var x = (
        /** @type {Comment} */
        s.data === ma
      );
      x !== (h === 0) && (s = Rs(), bt(s), Mt(!1), b = !0);
    }
    if (_e) {
      for (var k = null, v, $ = 0; $ < h; $++) {
        if (Me.nodeType === 8 && /** @type {Comment} */
        Me.data === ya) {
          s = /** @type {Comment} */
          Me, b = !0, Mt(!1);
          break;
        }
        var w = g[$], C = r(w, $);
        v = gc(
          Me,
          a,
          k,
          null,
          w,
          C,
          $,
          o,
          t,
          n
        ), a.items.set(C, v), k = v;
      }
      h > 0 && bt(Rs());
    }
    _e || tp(g, a, s, o, t, r, n), i !== null && (h === 0 ? c ? wo(c) : c = Mn(() => i(s)) : c !== null && Dr(c, () => {
      c = null;
    })), b && Mt(!0), p(f);
  }), _e && (s = Me);
}
function tp(e, t, n, r, o, i, s) {
  var a, l, u, c, d = (o & Kg) !== 0, f = (o & (ha | va)) !== 0, g = e.length, h = t.items, b = t.first, x = b, k, v = null, $, w = [], C = [], N, P, M, z;
  if (d)
    for (z = 0; z < g; z += 1)
      N = e[z], P = i(N, z), M = h.get(P), M !== void 0 && ((a = M.a) == null || a.measure(), ($ ?? ($ = /* @__PURE__ */ new Set())).add(M));
  for (z = 0; z < g; z += 1) {
    if (N = e[z], P = i(N, z), M = h.get(P), M === void 0) {
      var H = x ? (
        /** @type {TemplateNode} */
        x.e.nodes_start
      ) : n;
      v = gc(
        H,
        t,
        v,
        v === null ? t.first : v.next,
        N,
        P,
        z,
        r,
        o,
        s
      ), h.set(P, v), w = [], C = [], x = v.next;
      continue;
    }
    if (f && np(M, N, z, o), M.e.f & En && (wo(M.e), d && ((l = M.a) == null || l.unfix(), ($ ?? ($ = /* @__PURE__ */ new Set())).delete(M))), M !== x) {
      if (k !== void 0 && k.has(M)) {
        if (w.length < C.length) {
          var D = C[0], A;
          v = D.prev;
          var R = w[0], S = w[w.length - 1];
          for (A = 0; A < w.length; A += 1)
            gl(w[A], D, n);
          for (A = 0; A < C.length; A += 1)
            k.delete(C[A]);
          In(t, R.prev, S.next), In(t, v, R), In(t, S, D), x = D, v = S, z -= 1, w = [], C = [];
        } else
          k.delete(M), gl(M, x, n), In(t, M.prev, M.next), In(t, M, v === null ? t.first : v.next), In(t, v, M), v = M;
        continue;
      }
      for (w = [], C = []; x !== null && x.k !== P; )
        x.e.f & En || (k ?? (k = /* @__PURE__ */ new Set())).add(x), C.push(x), x = x.next;
      if (x === null)
        continue;
      M = x;
    }
    w.push(M), v = M, x = M.next;
  }
  if (x !== null || k !== void 0) {
    for (var V = k === void 0 ? [] : xa(k); x !== null; )
      x.e.f & En || V.push(x), x = x.next;
    var _ = V.length;
    if (_ > 0) {
      var E = o & Mu && g === 0 ? n : null;
      if (d) {
        for (z = 0; z < _; z += 1)
          (u = V[z].a) == null || u.measure();
        for (z = 0; z < _; z += 1)
          (c = V[z].a) == null || c.fix();
      }
      ep(t, V, E, h);
    }
  }
  d && Oo(() => {
    var O;
    if ($ !== void 0)
      for (M of $)
        (O = M.a) == null || O.apply();
  }), Ze.first = t.first && t.first.e, Ze.last = v && v.e;
}
function np(e, t, n, r) {
  r & ha && Is(e.v, t), r & va ? Is(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function gc(e, t, n, r, o, i, s, a, l, u) {
  var c = (l & ha) !== 0, d = (l & Wg) === 0, f = c ? d ? /* @__PURE__ */ zo(o) : kt(o) : o, g = l & va ? kt(s) : s, h = {
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
    return h.e = Mn(() => a(e, f, g, u), _e), h.e.prev = n && n.e, h.e.next = r && r.e, n === null ? t.first = h : (n.next = h, n.e.next = h.e), r !== null && (r.prev = h, r.e.prev = h.e), h;
  } finally {
  }
}
function gl(e, t, n) {
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
      /* @__PURE__ */ vn(i)
    );
    o.before(i), i = s;
  }
}
function In(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function pc(e, t, n, r, o) {
  var i = e, s = "", a;
  vr(() => {
    if (s === (s = t() ?? "")) {
      _e && gn();
      return;
    }
    a !== void 0 && (Bt(a), a = void 0), s !== "" && (a = Mn(() => {
      if (_e) {
        Me.data;
        for (var l = gn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ vn(l);
        if (l === null)
          throw qi(), Pr;
        Et(Me, u), i = bt(l);
        return;
      }
      var c = s + "", d = Pa(c);
      Et(
        /** @type {TemplateNode} */
        /* @__PURE__ */ yt(d),
        /** @type {TemplateNode} */
        d.lastChild
      ), i.before(d);
    }));
  });
}
function ht(e, t, n, r, o) {
  var i;
  _e && gn();
  var s = (i = t.$$slots) == null ? void 0 : i[n], a = !1;
  s === !0 && (s = t[n === "default" ? "children" : n], a = !0), s === void 0 || s(e, a ? () => r : r);
}
function rp(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const n in e.$$slots)
    t[n] = !0;
  return t;
}
function Rr(e, t, ...n) {
  var r = e, o = dt, i;
  vr(() => {
    o !== (o = t()) && (i && (Bt(i), i = null), i = Mn(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Ur), _e && (r = Me);
}
function hc(e, t, n) {
  _e && gn();
  var r = e, o, i;
  vr(() => {
    o !== (o = t()) && (i && (Dr(i), i = null), o && (i = Mn(() => n(r, o))));
  }, Ur), _e && (r = Me);
}
function op(e, t, n, r, o, i) {
  let s = _e;
  _e && gn();
  var a, l, u = null;
  _e && Me.nodeType === 1 && (u = /** @type {Element} */
  Me, gn());
  var c = (
    /** @type {TemplateNode} */
    _e ? Me : e
  ), d;
  vr(() => {
    const f = t() || null;
    var g = f === "svg" ? Lu : null;
    f !== a && (d && (f === null ? Dr(d, () => {
      d = null, l = null;
    }) : f === l ? wo(d) : Bt(d)), f && f !== l && (d = Mn(() => {
      if (u = _e ? (
        /** @type {Element} */
        u
      ) : g ? document.createElementNS(g, f) : document.createElement(f), Et(u, u), r) {
        _e && F1(f) && u.append(document.createComment(""));
        var h = (
          /** @type {TemplateNode} */
          _e ? /* @__PURE__ */ yt(u) : u.appendChild(Vn())
        );
        _e && (h === null ? Mt(!1) : bt(h)), r(u, h);
      }
      Ze.nodes_end = u, c.before(u);
    })), a = f, a && (l = a));
  }, Ur), s && (Mt(!0), bt(c));
}
function tt(e, t) {
  Oo(() => {
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
function pt(e, t, n) {
  Vt(() => {
    var r = pn(() => t(e, n == null ? void 0 : n()) || {});
    if (n && r != null && r.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      Qr(() => {
        var s = n();
        G(s), o && _a(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function vc(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = vc(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function ip() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = vc(e)) && (r && (r += " "), r += t);
  return r;
}
function yn(e) {
  return typeof e == "object" ? ip(e) : e ?? "";
}
function mc(e) {
  if (_e) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          se(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          se(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, l1(n), G1();
  }
}
function sp(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function se(e, t, n, r) {
  var o = e.__attributes ?? (e.__attributes = {});
  _e && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[n1] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && yc(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function en(e, t, n, r, o = !1, i = !1, s = !1) {
  let a = _e && i;
  a && Mt(!1);
  var l = t || {}, u = e.tagName === "OPTION";
  for (var c in t)
    c in n || (n[c] = null);
  n.class && (n.class = yn(n.class)), r !== void 0 && (n.class = n.class ? n.class + " " + r : r);
  var d = yc(e), f = (
    /** @type {Record<string, unknown>} **/
    e.__attributes ?? (e.__attributes = {})
  );
  for (const v in n) {
    let $ = n[v];
    if (u && v === "value" && $ == null) {
      e.value = e.__value = "", l[v] = $;
      continue;
    }
    var g = l[v];
    if ($ !== g) {
      l[v] = $;
      var h = v[0] + v[1];
      if (h !== "$$") {
        if (h === "on") {
          const w = {}, C = "$$" + v;
          let N = v.slice(2);
          var b = Z1(N);
          if (I1(N) && (N = N.slice(0, -7), w.capture = !0), !b && g) {
            if ($ != null) continue;
            e.removeEventListener(N, l[C], w), l[C] = null;
          }
          if ($ != null)
            if (b)
              e[`__${N}`] = $, es([N]);
            else {
              let P = function(M) {
                l[v].call(this, M);
              };
              l[C] = cc(N, e, P, w);
            }
          else b && (e[`__${N}`] = void 0);
        } else if (v === "style" && $ != null)
          e.style.cssText = $ + "";
        else if (v === "autofocus")
          q1(
            /** @type {HTMLElement} */
            e,
            !!$
          );
        else if (!i && (v === "__value" || v === "value" && $ != null))
          e.value = e.__value = $;
        else if (v === "selected" && u)
          sp(
            /** @type {HTMLOptionElement} */
            e,
            $
          );
        else {
          var x = v;
          o || (x = X1(x));
          var k = x === "defaultValue" || x === "defaultChecked";
          if ($ == null && !i && !k)
            if (f[v] = null, x === "value" || x === "checked") {
              let w = (
                /** @type {HTMLInputElement} */
                e
              );
              const C = t === void 0;
              if (x === "value") {
                let N = w.defaultValue;
                w.removeAttribute(x), w.defaultValue = N, w.value = w.__value = C ? N : null;
              } else {
                let N = w.defaultChecked;
                w.removeAttribute(x), w.defaultChecked = N, w.checked = C ? N : !1;
              }
            } else
              e.removeAttribute(v);
          else k || d.includes(x) && (i || typeof $ != "string") ? e[x] = $ : typeof $ != "function" && se(e, x, $);
        }
        v === "style" && "__styles" in e && (e.__styles = {});
      }
    }
  }
  return a && Mt(!0), l;
}
var pl = /* @__PURE__ */ new Map();
function yc(e) {
  var t = pl.get(e.nodeName);
  if (t) return t;
  pl.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = Du(r);
    for (var i in n)
      n[i].set && t.push(i);
    r = $a(r);
  }
  return t;
}
function mr(e, t, n) {
  var r = e.__className, o = wc(t, n);
  _e && e.getAttribute("class") === o ? e.__className = o : (r !== o || _e && e.getAttribute("class") !== o) && (o === "" ? e.removeAttribute("class") : e.setAttribute("class", o), e.__className = o);
}
function Zr(e, t, n) {
  var r = e.__className, o = wc(t, n);
  _e && e.className === o ? e.__className = o : (r !== o || _e && e.className !== o) && (t == null ? e.removeAttribute("class") : e.className = o, e.__className = o);
}
function wc(e, t) {
  return (e ?? "") + (t ? " " + t : "");
}
function et(e, t, n) {
  if (n) {
    if (e.classList.contains(t)) return;
    e.classList.add(t);
  } else {
    if (!e.classList.contains(t)) return;
    e.classList.remove(t);
  }
}
function rt(e, t, n, r) {
  var o = e.__styles ?? (e.__styles = {});
  o[t] !== n && (o[t] = n, n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, ""));
}
var er, go, ii, Ks, bc;
const Ws = class {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    Sr(this, Ks), Sr(this, er, /* @__PURE__ */ new WeakMap()), Sr(this, go), Sr(this, ii), vi(this, ii, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = st(this, er).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), st(this, er).set(t, r), Zg(this, Ks, bc).call(this).observe(t, st(this, ii)), () => {
      var o = st(this, er).get(t);
      o.delete(n), o.size === 0 && (st(this, er).delete(t), st(this, go).unobserve(t));
    };
  }
};
er = /* @__PURE__ */ new WeakMap(), go = /* @__PURE__ */ new WeakMap(), ii = /* @__PURE__ */ new WeakMap(), Ks = /* @__PURE__ */ new WeakSet(), bc = function() {
  return st(this, go) ?? vi(this, go, new ResizeObserver(
    /** @param {any} entries */
    (e) => {
      for (var t of e) {
        Ws.entries.set(t.target, t);
        for (var n of st(this, er).get(t.target) || [])
          n(t);
      }
    }
  ));
}, /** @static */
Ft(Ws, "entries", /* @__PURE__ */ new WeakMap());
let ap = Ws;
var lp = /* @__PURE__ */ new ap({
  box: "border-box"
});
function hl(e, t, n) {
  var r = lp.observe(e, () => n(e[t]));
  Vt(() => (pn(() => n(e[t])), r));
}
function vl(e, t) {
  return e === t || (e == null ? void 0 : e[Xn]) === t;
}
function On(e = {}, t, n, r) {
  return Vt(() => {
    var o, i;
    return Qr(() => {
      o = i, i = [], pn(() => {
        e !== n(...i) && (t(e, ...i), o && vl(n(...o), e) && t(null, ...o));
      });
    }), () => {
      Oo(() => {
        i && vl(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Ve(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Re
  ), n = t.l.u;
  if (!n) return;
  let r = () => G(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ ze(() => {
      let a = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], a = !0);
      return a && o++, o;
    });
    r = () => p(s);
  }
  n.b.length && z1(() => {
    ml(t, r), vo(n.b);
  }), Ci(() => {
    const o = pn(() => n.m.map(s1));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Ci(() => {
    ml(t, r), vo(n.a);
  });
}
function ml(e, t) {
  if (e.l.s)
    for (const n of e.l.s) p(n);
  t();
}
function Te(e, t) {
  var n, r = (
    /** @type {Record<string, Function[] | Function>} */
    (n = e.$$events) == null ? void 0 : n[t.type]
  ), o = Mo(r) ? r.slice() : r == null ? [] : [r];
  for (var i of o)
    i.call(this, t);
}
function yr(e) {
  Re === null && Ji(), jr && Re.l !== null ? cp(Re).m.push(e) : Ci(() => {
    const t = pn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Va(e) {
  Re === null && Ji(), yr(() => () => pn(e));
}
function up(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function ns() {
  const e = Re;
  return e === null && Ji(), (t, n, r) => {
    var o;
    const i = (
      /** @type {Record<string, Function | Function[]>} */
      (o = e.s.$$events) == null ? void 0 : o[
        /** @type {any} */
        t
      ]
    );
    if (i) {
      const s = Mo(i) ? i.slice() : [i], a = up(
        /** @type {string} */
        t,
        n,
        r
      );
      for (const l of s)
        l.call(e.x, a);
      return !a.defaultPrevented;
    }
    return !0;
  };
}
function cp(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function Ma(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), dt;
  const r = pn(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const _r = [];
function Dt(e, t) {
  return {
    subscribe: me(e, t).subscribe
  };
}
function me(e, t = dt) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(a) {
    if (_a(e, a) && (e = a, n)) {
      const l = !_r.length;
      for (const u of r)
        u[1](), _r.push(u, e);
      if (l) {
        for (let u = 0; u < _r.length; u += 2)
          _r[u][0](_r[u + 1]);
        _r.length = 0;
      }
    }
  }
  function i(a) {
    o(a(
      /** @type {T} */
      e
    ));
  }
  function s(a, l = dt) {
    const u = [a, l];
    return r.add(u), r.size === 1 && (n = t(o, i) || dt), a(
      /** @type {T} */
      e
    ), () => {
      r.delete(u), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: o, update: i, subscribe: s };
}
function Yn(e, t, n) {
  const r = !Array.isArray(e), o = r ? [e] : e;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = t.length < 2;
  return Dt(n, (s, a) => {
    let l = !1;
    const u = [];
    let c = 0, d = dt;
    const f = () => {
      if (c)
        return;
      d();
      const h = t(r ? u[0] : u, s, a);
      i ? s(h) : d = typeof h == "function" ? h : dt;
    }, g = o.map(
      (h, b) => Ma(
        h,
        (x) => {
          u[b] = x, c &= ~(1 << b), l && f();
        },
        () => {
          c |= 1 << b;
        }
      )
    );
    return l = !0, f(), function() {
      vo(g), d(), l = !1;
    };
  });
}
function K(e) {
  let t;
  return Ma(e, (n) => t = n)(), t;
}
let jo = !1, Fs = Symbol();
function J(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ zo(void 0),
    unsubscribe: dt
  });
  if (r.store !== e && !(Fs in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = dt;
    else {
      var o = !0;
      r.unsubscribe = Ma(e, (i) => {
        o ? r.source.v = i : U(r.source, i);
      }), o = !1;
    }
  return e && Fs in n ? K(e) : p(r.source);
}
function dp(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = dt), e;
}
function ki(e, t) {
  return e.set(t), t;
}
function Je() {
  const e = {};
  function t() {
    rc(() => {
      for (var n in e)
        e[n].unsubscribe();
      ho(e, Fs, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function fp(e) {
  var t = jo;
  try {
    return jo = !1, [e(), jo];
  } finally {
    jo = t;
  }
}
const gp = {
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
function Xt(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    gp
  );
}
const pp = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return p(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    return t in e.special || (e.special[t] = y(
      {
        get [t]() {
          return e.props[t];
        }
      },
      /** @type {string} */
      t,
      Ou
    )), e.special[t](n), al(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), al(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function Qe(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: kt(0) }, pp);
}
const hp = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (io(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      io(o) && (o = o());
      const i = Nn(o, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (io(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = Nn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === Xn || t === ba) return !1;
    for (let n of e.props)
      if (io(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props) {
      io(n) && (n = n());
      for (const r in n)
        t.includes(r) || t.push(r);
    }
    return t;
  }
};
function wt(...e) {
  return new Proxy({ props: e }, hp);
}
function y(e, t, n, r) {
  var o, i = (n & Fg) !== 0, s = !jr || (n & qg) !== 0, a = (n & jg) !== 0, l = (n & Gg) !== 0, u = !1, c;
  a ? [c, u] = fp(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var d = Xn in e || ba in e, f = a && (((o = Nn(e, t)) == null ? void 0 : o.set) ?? (d && t in e && ((P) => e[t] = P))) || void 0, g = (
    /** @type {V} */
    r
  ), h = !0, b = !1, x = () => (b = !0, h && (h = !1, l ? g = pn(
    /** @type {() => V} */
    r
  ) : g = /** @type {V} */
  r), g);
  c === void 0 && r !== void 0 && (f && s && h1(), c = x(), f && f(c));
  var k;
  if (s)
    k = () => {
      var P = (
        /** @type {V} */
        e[t]
      );
      return P === void 0 ? x() : (h = !0, b = !1, P);
    };
  else {
    var v = (i ? ze : he)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    v.f |= e1, k = () => {
      var P = p(v);
      return P !== void 0 && (g = /** @type {V} */
      void 0), P === void 0 ? g : P;
    };
  }
  if (!(n & Ou))
    return k;
  if (f) {
    var $ = e.$$legacy;
    return function(P, M) {
      return arguments.length > 0 ? ((!s || !M || $ || u) && f(M ? k() : P), P) : k();
    };
  }
  var w = !1, C = /* @__PURE__ */ zo(c), N = /* @__PURE__ */ ze(() => {
    var P = k(), M = p(C);
    return w ? (w = !1, M) : C.v = P;
  });
  return i || (N.equals = Ca), function(P, M) {
    if (arguments.length > 0) {
      const z = M ? p(N) : s && a ? an(P) : P;
      return N.equals(z) || (w = !0, U(C, z), b && g !== void 0 && (g = z), pn(() => p(N))), P;
    }
    return p(N);
  };
}
function vp(e) {
  return new mp(e);
}
var An, qt;
class mp {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    Sr(this, An), Sr(this, qt);
    var n, r = /* @__PURE__ */ new Map(), o = (s, a) => {
      var l = /* @__PURE__ */ zo(a);
      return r.set(s, l), l;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, a) {
          return p(r.get(a) ?? o(a, Reflect.get(s, a)));
        },
        has(s, a) {
          return a === ba ? !0 : (p(r.get(a) ?? o(a, Reflect.get(s, a))), Reflect.has(s, a));
        },
        set(s, a, l) {
          return U(r.get(a) ?? o(a, l), l), Reflect.set(s, a, l);
        }
      }
    );
    vi(this, qt, (t.hydrate ? J1 : dc)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((n = t == null ? void 0 : t.props) != null && n.$$host) || t.sync === !1) && m(), vi(this, An, i.$$events);
    for (const s of Object.keys(st(this, qt)))
      s === "$set" || s === "$destroy" || s === "$on" || ho(this, s, {
        get() {
          return st(this, qt)[s];
        },
        /** @param {any} value */
        set(a) {
          st(this, qt)[s] = a;
        },
        enumerable: !0
      });
    st(this, qt).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(i, s);
    }, st(this, qt).$destroy = () => {
      Q1(st(this, qt));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    st(this, qt).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    st(this, An)[t] = st(this, An)[t] || [];
    const r = (...o) => n.call(this, ...o);
    return st(this, An)[t].push(r), () => {
      st(this, An)[t] = st(this, An)[t].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    st(this, qt).$destroy();
  }
}
An = /* @__PURE__ */ new WeakMap(), qt = /* @__PURE__ */ new WeakMap();
let xc;
typeof HTMLElement == "function" && (xc = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, t, n) {
    super(), Ft(this, "$$ctor"), Ft(this, "$$s"), Ft(this, "$$c"), Ft(this, "$$cn", !1), Ft(this, "$$d", {}), Ft(this, "$$r", !1), Ft(this, "$$p_d", {}), Ft(this, "$$l", {}), Ft(this, "$$l_u", /* @__PURE__ */ new Map()), Ft(this, "$$me"), this.$$ctor = e, this.$$s = t, n && this.attachShadow({ mode: "open" });
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
          r !== "default" && (i.name = r), T(o, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, n = yp(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = si(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = vp({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = H1(() => {
        Qr(() => {
          var r;
          this.$$r = !0;
          for (const o of wi(this.$$c)) {
            if (!((r = this.$$p_d[o]) != null && r.reflect)) continue;
            this.$$d[o] = this.$$c[o];
            const i = si(
              o,
              this.$$d[o],
              this.$$p_d,
              "toAttribute"
            );
            i == null ? this.removeAttribute(this.$$p_d[o].attribute || o) : this.setAttribute(this.$$p_d[o].attribute || o, i);
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
    var r;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = si(e, n, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [e]: this.$$d[e] }));
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
    return wi(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function si(e, t, n, r) {
  var o;
  const i = (o = n[e]) == null ? void 0 : o.type;
  if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e])
    return t;
  if (r === "toAttribute")
    switch (i) {
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
    switch (i) {
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
function yp(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function ie(e, t, n, r, o, i) {
  let s = class extends xc {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return wi(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return wi(t).forEach((a) => {
    ho(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        var u;
        l = si(a, l, t), this.$$d[a] = l;
        var c = this.$$c;
        if (c) {
          var d = (u = Nn(c, a)) == null ? void 0 : u.get;
          d ? c[a] = l : c.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    ho(s.prototype, a, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[a];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
function xt(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = xt(e[n])) !== "" && (t += (t && " ") + r);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
var wp = { value: () => {
} };
function rs() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new ai(n);
}
function ai(e) {
  this._ = e;
}
function bp(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
ai.prototype = rs.prototype = {
  constructor: ai,
  on: function(e, t) {
    var n = this._, r = bp(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = xp(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = yl(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = yl(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new ai(e);
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
function xp(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function yl(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = wp, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var qs = "http://www.w3.org/1999/xhtml";
const wl = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: qs,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function os(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), wl.hasOwnProperty(t) ? { space: wl[t], local: e } : e;
}
function $p(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === qs && t.documentElement.namespaceURI === qs ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function _p(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function $c(e) {
  var t = os(e);
  return (t.local ? _p : $p)(t);
}
function Cp() {
}
function Oa(e) {
  return e == null ? Cp : function() {
    return this.querySelector(e);
  };
}
function kp(e) {
  typeof e != "function" && (e = Oa(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, u, c = 0; c < s; ++c)
      (l = i[c]) && (u = e.call(l, l.__data__, c, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[c] = u);
  return new Ht(r, this._parents);
}
function Sp(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Ep() {
  return [];
}
function _c(e) {
  return e == null ? Ep : function() {
    return this.querySelectorAll(e);
  };
}
function Np(e) {
  return function() {
    return Sp(e.apply(this, arguments));
  };
}
function Pp(e) {
  typeof e == "function" ? e = Np(e) : e = _c(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(e.call(l, l.__data__, u, s)), o.push(l));
  return new Ht(r, o);
}
function Cc(e) {
  return function() {
    return this.matches(e);
  };
}
function kc(e) {
  return function(t) {
    return t.matches(e);
  };
}
var Vp = Array.prototype.find;
function Mp(e) {
  return function() {
    return Vp.call(this.children, e);
  };
}
function Op() {
  return this.firstElementChild;
}
function zp(e) {
  return this.select(e == null ? Op : Mp(typeof e == "function" ? e : kc(e)));
}
var Hp = Array.prototype.filter;
function Lp() {
  return Array.from(this.children);
}
function Tp(e) {
  return function() {
    return Hp.call(this.children, e);
  };
}
function Ap(e) {
  return this.selectAll(e == null ? Lp : Tp(typeof e == "function" ? e : kc(e)));
}
function Dp(e) {
  typeof e != "function" && (e = Cc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Ht(r, this._parents);
}
function Sc(e) {
  return new Array(e.length);
}
function Ip() {
  return new Ht(this._enter || this._groups.map(Sc), this._parents);
}
function Si(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Si.prototype = {
  constructor: Si,
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
function Zp(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, u = i.length; s < u; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new Si(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function Bp(e, t, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), c = t.length, d = i.length, f = new Array(c), g;
  for (a = 0; a < c; ++a)
    (l = t[a]) && (f[a] = g = s.call(l, l.__data__, a, t) + "", u.has(g) ? o[a] = l : u.set(g, l));
  for (a = 0; a < d; ++a)
    g = s.call(e, i[a], a, i) + "", (l = u.get(g)) ? (r[a] = l, l.__data__ = i[a], u.delete(g)) : n[a] = new Si(e, i[a]);
  for (a = 0; a < c; ++a)
    (l = t[a]) && u.get(f[a]) === l && (o[a] = l);
}
function Xp(e) {
  return e.__data__;
}
function Yp(e, t) {
  if (!arguments.length) return Array.from(this, Xp);
  var n = t ? Bp : Zp, r = this._parents, o = this._groups;
  typeof e != "function" && (e = Rp(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var c = r[u], d = o[u], f = d.length, g = Kp(e.call(c, c && c.__data__, u, r)), h = g.length, b = a[u] = new Array(h), x = s[u] = new Array(h), k = l[u] = new Array(f);
    n(c, d, b, x, k, g, t);
    for (var v = 0, $ = 0, w, C; v < h; ++v)
      if (w = b[v]) {
        for (v >= $ && ($ = v + 1); !(C = x[$]) && ++$ < h; ) ;
        w._next = C || null;
      }
  }
  return s = new Ht(s, r), s._enter = a, s._exit = l, s;
}
function Kp(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Wp() {
  return new Ht(this._exit || this._groups.map(Sc), this._parents);
}
function Fp(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function qp(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], c = r[l], d = u.length, f = a[l] = new Array(d), g, h = 0; h < d; ++h)
      (g = u[h] || c[h]) && (f[h] = g);
  for (; l < o; ++l)
    a[l] = n[l];
  return new Ht(a, this._parents);
}
function jp() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function Gp(e) {
  e || (e = Up);
  function t(d, f) {
    return d && f ? e(d.__data__, f.__data__) : !d - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), u, c = 0; c < a; ++c)
      (u = s[c]) && (l[c] = u);
    l.sort(t);
  }
  return new Ht(o, this._parents).order();
}
function Up(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Jp() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Qp() {
  return Array.from(this);
}
function eh() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function th() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function nh() {
  return !this.node();
}
function rh(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function oh(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function ih(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function sh(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function ah(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function lh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function uh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function ch(e, t) {
  var n = os(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? ih : oh : typeof t == "function" ? n.local ? uh : lh : n.local ? ah : sh)(n, t));
}
function Ec(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function dh(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function fh(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function gh(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function ph(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? dh : typeof t == "function" ? gh : fh)(e, t, n ?? "")) : Br(this.node(), e);
}
function Br(e, t) {
  return e.style.getPropertyValue(t) || Ec(e).getComputedStyle(e, null).getPropertyValue(t);
}
function hh(e) {
  return function() {
    delete this[e];
  };
}
function vh(e, t) {
  return function() {
    this[e] = t;
  };
}
function mh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function yh(e, t) {
  return arguments.length > 1 ? this.each((t == null ? hh : typeof t == "function" ? mh : vh)(e, t)) : this.node()[e];
}
function Nc(e) {
  return e.trim().split(/^|\s+/);
}
function za(e) {
  return e.classList || new Pc(e);
}
function Pc(e) {
  this._node = e, this._names = Nc(e.getAttribute("class") || "");
}
Pc.prototype = {
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
function Vc(e, t) {
  for (var n = za(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Mc(e, t) {
  for (var n = za(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function wh(e) {
  return function() {
    Vc(this, e);
  };
}
function bh(e) {
  return function() {
    Mc(this, e);
  };
}
function xh(e, t) {
  return function() {
    (t.apply(this, arguments) ? Vc : Mc)(this, e);
  };
}
function $h(e, t) {
  var n = Nc(e + "");
  if (arguments.length < 2) {
    for (var r = za(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? xh : t ? wh : bh)(n, t));
}
function _h() {
  this.textContent = "";
}
function Ch(e) {
  return function() {
    this.textContent = e;
  };
}
function kh(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Sh(e) {
  return arguments.length ? this.each(e == null ? _h : (typeof e == "function" ? kh : Ch)(e)) : this.node().textContent;
}
function Eh() {
  this.innerHTML = "";
}
function Nh(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Ph(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Vh(e) {
  return arguments.length ? this.each(e == null ? Eh : (typeof e == "function" ? Ph : Nh)(e)) : this.node().innerHTML;
}
function Mh() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Oh() {
  return this.each(Mh);
}
function zh() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Hh() {
  return this.each(zh);
}
function Lh(e) {
  var t = typeof e == "function" ? e : $c(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Th() {
  return null;
}
function Ah(e, t) {
  var n = typeof e == "function" ? e : $c(e), r = t == null ? Th : typeof t == "function" ? t : Oa(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Dh() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Ih() {
  return this.each(Dh);
}
function Rh() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Zh() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Bh(e) {
  return this.select(e ? Zh : Rh);
}
function Xh(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Yh(e) {
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
function Wh(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Fh(e, t, n) {
  return function() {
    var r = this.__on, o, i = Yh(t);
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
function qh(e, t, n) {
  var r = Kh(e + ""), o, i = r.length, s;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var l = 0, u = a.length, c; l < u; ++l)
        for (o = 0, c = a[l]; o < i; ++o)
          if ((s = r[o]).type === c.type && s.name === c.name)
            return c.value;
    }
    return;
  }
  for (a = t ? Fh : Wh, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function Oc(e, t, n) {
  var r = Ec(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function jh(e, t) {
  return function() {
    return Oc(this, e, t);
  };
}
function Gh(e, t) {
  return function() {
    return Oc(this, e, t.apply(this, arguments));
  };
}
function Uh(e, t) {
  return this.each((typeof t == "function" ? Gh : jh)(e, t));
}
function* Jh() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var zc = [null];
function Ht(e, t) {
  this._groups = e, this._parents = t;
}
function Ho() {
  return new Ht([[document.documentElement]], zc);
}
function Qh() {
  return this;
}
Ht.prototype = Ho.prototype = {
  constructor: Ht,
  select: kp,
  selectAll: Pp,
  selectChild: zp,
  selectChildren: Ap,
  filter: Dp,
  data: Yp,
  enter: Ip,
  exit: Wp,
  join: Fp,
  merge: qp,
  selection: Qh,
  order: jp,
  sort: Gp,
  call: Jp,
  nodes: Qp,
  node: eh,
  size: th,
  empty: nh,
  each: rh,
  attr: ch,
  style: ph,
  property: yh,
  classed: $h,
  text: Sh,
  html: Vh,
  raise: Oh,
  lower: Hh,
  append: Lh,
  insert: Ah,
  remove: Ih,
  clone: Bh,
  datum: Xh,
  on: qh,
  dispatch: Uh,
  [Symbol.iterator]: Jh
};
function Rt(e) {
  return typeof e == "string" ? new Ht([[document.querySelector(e)]], [document.documentElement]) : new Ht([[e]], zc);
}
function ev(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function jt(e, t) {
  if (e = ev(e), t === void 0 && (t = e.currentTarget), t) {
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
const tv = { passive: !1 }, bo = { capture: !0, passive: !1 };
function $s(e) {
  e.stopImmediatePropagation();
}
function Or(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Hc(e) {
  var t = e.document.documentElement, n = Rt(e).on("dragstart.drag", Or, bo);
  "onselectstart" in t ? n.on("selectstart.drag", Or, bo) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Lc(e, t) {
  var n = e.document.documentElement, r = Rt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Or, bo), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Go = (e) => () => e;
function js(e, {
  sourceEvent: t,
  subject: n,
  target: r,
  identifier: o,
  active: i,
  x: s,
  y: a,
  dx: l,
  dy: u,
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
    y: { value: a, enumerable: !0, configurable: !0 },
    dx: { value: l, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: c }
  });
}
js.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function nv(e) {
  return !e.ctrlKey && !e.button;
}
function rv() {
  return this.parentNode;
}
function ov(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function iv() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function sv() {
  var e = nv, t = rv, n = ov, r = iv, o = {}, i = rs("start", "drag", "end"), s = 0, a, l, u, c, d = 0;
  function f(w) {
    w.on("mousedown.drag", g).filter(r).on("touchstart.drag", x).on("touchmove.drag", k, tv).on("touchend.drag touchcancel.drag", v).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(w, C) {
    if (!(c || !e.call(this, w, C))) {
      var N = $(this, t.call(this, w, C), w, C, "mouse");
      N && (Rt(w.view).on("mousemove.drag", h, bo).on("mouseup.drag", b, bo), Hc(w.view), $s(w), u = !1, a = w.clientX, l = w.clientY, N("start", w));
    }
  }
  function h(w) {
    if (Or(w), !u) {
      var C = w.clientX - a, N = w.clientY - l;
      u = C * C + N * N > d;
    }
    o.mouse("drag", w);
  }
  function b(w) {
    Rt(w.view).on("mousemove.drag mouseup.drag", null), Lc(w.view, u), Or(w), o.mouse("end", w);
  }
  function x(w, C) {
    if (e.call(this, w, C)) {
      var N = w.changedTouches, P = t.call(this, w, C), M = N.length, z, H;
      for (z = 0; z < M; ++z)
        (H = $(this, P, w, C, N[z].identifier, N[z])) && ($s(w), H("start", w, N[z]));
    }
  }
  function k(w) {
    var C = w.changedTouches, N = C.length, P, M;
    for (P = 0; P < N; ++P)
      (M = o[C[P].identifier]) && (Or(w), M("drag", w, C[P]));
  }
  function v(w) {
    var C = w.changedTouches, N = C.length, P, M;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), P = 0; P < N; ++P)
      (M = o[C[P].identifier]) && ($s(w), M("end", w, C[P]));
  }
  function $(w, C, N, P, M, z) {
    var H = i.copy(), D = jt(z || N, C), A, R, S;
    if ((S = n.call(w, new js("beforestart", {
      sourceEvent: N,
      target: f,
      identifier: M,
      active: s,
      x: D[0],
      y: D[1],
      dx: 0,
      dy: 0,
      dispatch: H
    }), P)) != null)
      return A = S.x - D[0] || 0, R = S.y - D[1] || 0, function V(_, E, O) {
        var L = D, Z;
        switch (_) {
          case "start":
            o[M] = V, Z = s++;
            break;
          case "end":
            delete o[M], --s;
          // falls through
          case "drag":
            D = jt(O || E, C), Z = s;
            break;
        }
        H.call(
          _,
          w,
          new js(_, {
            sourceEvent: E,
            subject: S,
            target: f,
            identifier: M,
            active: Z,
            x: D[0] + A,
            y: D[1] + R,
            dx: D[0] - L[0],
            dy: D[1] - L[1],
            dispatch: H
          }),
          P
        );
      };
  }
  return f.filter = function(w) {
    return arguments.length ? (e = typeof w == "function" ? w : Go(!!w), f) : e;
  }, f.container = function(w) {
    return arguments.length ? (t = typeof w == "function" ? w : Go(w), f) : t;
  }, f.subject = function(w) {
    return arguments.length ? (n = typeof w == "function" ? w : Go(w), f) : n;
  }, f.touchable = function(w) {
    return arguments.length ? (r = typeof w == "function" ? w : Go(!!w), f) : r;
  }, f.on = function() {
    var w = i.on.apply(i, arguments);
    return w === i ? f : w;
  }, f.clickDistance = function(w) {
    return arguments.length ? (d = (w = +w) * w, f) : Math.sqrt(d);
  }, f;
}
function Ha(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Tc(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Lo() {
}
var xo = 0.7, Ei = 1 / xo, zr = "\\s*([+-]?\\d+)\\s*", $o = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", cn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", av = /^#([0-9a-f]{3,8})$/, lv = new RegExp(`^rgb\\(${zr},${zr},${zr}\\)$`), uv = new RegExp(`^rgb\\(${cn},${cn},${cn}\\)$`), cv = new RegExp(`^rgba\\(${zr},${zr},${zr},${$o}\\)$`), dv = new RegExp(`^rgba\\(${cn},${cn},${cn},${$o}\\)$`), fv = new RegExp(`^hsl\\(${$o},${cn},${cn}\\)$`), gv = new RegExp(`^hsla\\(${$o},${cn},${cn},${$o}\\)$`), bl = {
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
Ha(Lo, _o, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: xl,
  // Deprecated! Use color.formatHex.
  formatHex: xl,
  formatHex8: pv,
  formatHsl: hv,
  formatRgb: $l,
  toString: $l
});
function xl() {
  return this.rgb().formatHex();
}
function pv() {
  return this.rgb().formatHex8();
}
function hv() {
  return Ac(this).formatHsl();
}
function $l() {
  return this.rgb().formatRgb();
}
function _o(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = av.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? _l(t) : n === 3 ? new St(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Uo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Uo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = lv.exec(e)) ? new St(t[1], t[2], t[3], 1) : (t = uv.exec(e)) ? new St(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = cv.exec(e)) ? Uo(t[1], t[2], t[3], t[4]) : (t = dv.exec(e)) ? Uo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = fv.exec(e)) ? Sl(t[1], t[2] / 100, t[3] / 100, 1) : (t = gv.exec(e)) ? Sl(t[1], t[2] / 100, t[3] / 100, t[4]) : bl.hasOwnProperty(e) ? _l(bl[e]) : e === "transparent" ? new St(NaN, NaN, NaN, 0) : null;
}
function _l(e) {
  return new St(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Uo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new St(e, t, n, r);
}
function vv(e) {
  return e instanceof Lo || (e = _o(e)), e ? (e = e.rgb(), new St(e.r, e.g, e.b, e.opacity)) : new St();
}
function Gs(e, t, n, r) {
  return arguments.length === 1 ? vv(e) : new St(e, t, n, r ?? 1);
}
function St(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Ha(St, Gs, Tc(Lo, {
  brighter(e) {
    return e = e == null ? Ei : Math.pow(Ei, e), new St(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? xo : Math.pow(xo, e), new St(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new St(sr(this.r), sr(this.g), sr(this.b), Ni(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Cl,
  // Deprecated! Use color.formatHex.
  formatHex: Cl,
  formatHex8: mv,
  formatRgb: kl,
  toString: kl
}));
function Cl() {
  return `#${nr(this.r)}${nr(this.g)}${nr(this.b)}`;
}
function mv() {
  return `#${nr(this.r)}${nr(this.g)}${nr(this.b)}${nr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function kl() {
  const e = Ni(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${sr(this.r)}, ${sr(this.g)}, ${sr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ni(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function sr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function nr(e) {
  return e = sr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Sl(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Ut(e, t, n, r);
}
function Ac(e) {
  if (e instanceof Ut) return new Ut(e.h, e.s, e.l, e.opacity);
  if (e instanceof Lo || (e = _o(e)), !e) return new Ut();
  if (e instanceof Ut) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new Ut(s, a, l, e.opacity);
}
function yv(e, t, n, r) {
  return arguments.length === 1 ? Ac(e) : new Ut(e, t, n, r ?? 1);
}
function Ut(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Ha(Ut, yv, Tc(Lo, {
  brighter(e) {
    return e = e == null ? Ei : Math.pow(Ei, e), new Ut(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? xo : Math.pow(xo, e), new Ut(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new St(
      _s(e >= 240 ? e - 240 : e + 120, o, r),
      _s(e, o, r),
      _s(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Ut(El(this.h), Jo(this.s), Jo(this.l), Ni(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Ni(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${El(this.h)}, ${Jo(this.s) * 100}%, ${Jo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function El(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Jo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function _s(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Dc = (e) => () => e;
function wv(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function bv(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function xv(e) {
  return (e = +e) == 1 ? Ic : function(t, n) {
    return n - t ? bv(t, n, e) : Dc(isNaN(t) ? n : t);
  };
}
function Ic(e, t) {
  var n = t - e;
  return n ? wv(e, n) : Dc(isNaN(e) ? t : e);
}
const Nl = function e(t) {
  var n = xv(t);
  function r(o, i) {
    var s = n((o = Gs(o)).r, (i = Gs(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = Ic(o.opacity, i.opacity);
    return function(c) {
      return o.r = s(c), o.g = a(c), o.b = l(c), o.opacity = u(c), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function Rn(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
var Us = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Cs = new RegExp(Us.source, "g");
function $v(e) {
  return function() {
    return e;
  };
}
function _v(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Cv(e, t) {
  var n = Us.lastIndex = Cs.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = Us.exec(e)) && (o = Cs.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: Rn(r, o) })), n = Cs.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? _v(l[0].x) : $v(t) : (t = l.length, function(u) {
    for (var c = 0, d; c < t; ++c) a[(d = l[c]).i] = d.x(u);
    return a.join("");
  });
}
var Pl = 180 / Math.PI, Rc = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Zc(e, t, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * r) && (n -= e * l, r -= t * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), e * r < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * Pl,
    skewX: Math.atan(l) * Pl,
    scaleX: s,
    scaleY: a
  };
}
var Qo;
function kv(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Rc : Zc(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Sv(e) {
  return e == null || (Qo || (Qo = document.createElementNS("http://www.w3.org/2000/svg", "g")), Qo.setAttribute("transform", e), !(e = Qo.transform.baseVal.consolidate())) ? Rc : (e = e.matrix, Zc(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Bc(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, c, d, f, g, h) {
    if (u !== d || c !== f) {
      var b = g.push("translate(", null, t, null, n);
      h.push({ i: b - 4, x: Rn(u, d) }, { i: b - 2, x: Rn(c, f) });
    } else (d || f) && g.push("translate(" + d + t + f + n);
  }
  function s(u, c, d, f) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), f.push({ i: d.push(o(d) + "rotate(", null, r) - 2, x: Rn(u, c) })) : c && d.push(o(d) + "rotate(" + c + r);
  }
  function a(u, c, d, f) {
    u !== c ? f.push({ i: d.push(o(d) + "skewX(", null, r) - 2, x: Rn(u, c) }) : c && d.push(o(d) + "skewX(" + c + r);
  }
  function l(u, c, d, f, g, h) {
    if (u !== d || c !== f) {
      var b = g.push(o(g) + "scale(", null, ",", null, ")");
      h.push({ i: b - 4, x: Rn(u, d) }, { i: b - 2, x: Rn(c, f) });
    } else (d !== 1 || f !== 1) && g.push(o(g) + "scale(" + d + "," + f + ")");
  }
  return function(u, c) {
    var d = [], f = [];
    return u = e(u), c = e(c), i(u.translateX, u.translateY, c.translateX, c.translateY, d, f), s(u.rotate, c.rotate, d, f), a(u.skewX, c.skewX, d, f), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, d, f), u = c = null, function(g) {
      for (var h = -1, b = f.length, x; ++h < b; ) d[(x = f[h]).i] = x.x(g);
      return d.join("");
    };
  };
}
var Ev = Bc(kv, "px, ", "px)", "deg)"), Nv = Bc(Sv, ", ", ")", ")"), Pv = 1e-12;
function Vl(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Vv(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Mv(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Ov = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], c = s[0], d = s[1], f = s[2], g = c - a, h = d - l, b = g * g + h * h, x, k;
    if (b < Pv)
      k = Math.log(f / u) / t, x = function(P) {
        return [
          a + P * g,
          l + P * h,
          u * Math.exp(t * P * k)
        ];
      };
    else {
      var v = Math.sqrt(b), $ = (f * f - u * u + r * b) / (2 * u * n * v), w = (f * f - u * u - r * b) / (2 * f * n * v), C = Math.log(Math.sqrt($ * $ + 1) - $), N = Math.log(Math.sqrt(w * w + 1) - w);
      k = (N - C) / t, x = function(P) {
        var M = P * k, z = Vl(C), H = u / (n * v) * (z * Mv(t * M + C) - Vv(C));
        return [
          a + H * g,
          l + H * h,
          u * z / Vl(t * M + C)
        ];
      };
    }
    return x.duration = k * 1e3 * t / Math.SQRT2, x;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
}(Math.SQRT2, 2, 4);
var Xr = 0, uo = 0, so = 0, Xc = 1e3, Pi, co, Vi = 0, lr = 0, is = 0, Co = typeof performance == "object" && performance.now ? performance : Date, Yc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function La() {
  return lr || (Yc(zv), lr = Co.now() + is);
}
function zv() {
  lr = 0;
}
function Mi() {
  this._call = this._time = this._next = null;
}
Mi.prototype = Kc.prototype = {
  constructor: Mi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? La() : +n) + (t == null ? 0 : +t), !this._next && co !== this && (co ? co._next = this : Pi = this, co = this), this._call = e, this._time = n, Js();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Js());
  }
};
function Kc(e, t, n) {
  var r = new Mi();
  return r.restart(e, t, n), r;
}
function Hv() {
  La(), ++Xr;
  for (var e = Pi, t; e; )
    (t = lr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Xr;
}
function Ml() {
  lr = (Vi = Co.now()) + is, Xr = uo = 0;
  try {
    Hv();
  } finally {
    Xr = 0, Tv(), lr = 0;
  }
}
function Lv() {
  var e = Co.now(), t = e - Vi;
  t > Xc && (is -= t, Vi = e);
}
function Tv() {
  for (var e, t = Pi, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Pi = n);
  co = e, Js(r);
}
function Js(e) {
  if (!Xr) {
    uo && (uo = clearTimeout(uo));
    var t = e - lr;
    t > 24 ? (e < 1 / 0 && (uo = setTimeout(Ml, e - Co.now() - is)), so && (so = clearInterval(so))) : (so || (Vi = Co.now(), so = setInterval(Lv, Xc)), Xr = 1, Yc(Ml));
  }
}
function Ol(e, t, n) {
  var r = new Mi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var Av = rs("start", "end", "cancel", "interrupt"), Dv = [], Wc = 0, zl = 1, Qs = 2, li = 3, Hl = 4, ea = 5, ui = 6;
function ss(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  Iv(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: Av,
    tween: Dv,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Wc
  });
}
function Ta(e, t) {
  var n = rn(e, t);
  if (n.state > Wc) throw new Error("too late; already scheduled");
  return n;
}
function wn(e, t) {
  var n = rn(e, t);
  if (n.state > li) throw new Error("too late; already running");
  return n;
}
function rn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function Iv(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Kc(i, 0, n.time);
  function i(u) {
    n.state = zl, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var c, d, f, g;
    if (n.state !== zl) return l();
    for (c in r)
      if (g = r[c], g.name === n.name) {
        if (g.state === li) return Ol(s);
        g.state === Hl ? (g.state = ui, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[c]) : +c < t && (g.state = ui, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[c]);
      }
    if (Ol(function() {
      n.state === li && (n.state = Hl, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = Qs, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Qs) {
      for (n.state = li, o = new Array(f = n.tween.length), c = 0, d = -1; c < f; ++c)
        (g = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++d] = g);
      o.length = d + 1;
    }
  }
  function a(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = ea, 1), d = -1, f = o.length; ++d < f; )
      o[d].call(e, c);
    n.state === ea && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = ui, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function ci(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > Qs && r.state < ea, r.state = ui, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function Rv(e) {
  return this.each(function() {
    ci(this, e);
  });
}
function Zv(e, t) {
  var n, r;
  return function() {
    var o = wn(this, e), i = o.tween;
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
function Bv(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = wn(this, e), s = i.tween;
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
function Xv(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = rn(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? Zv : Bv)(n, e, t));
}
function Aa(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = wn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return rn(o, r).value[t];
  };
}
function Fc(e, t) {
  var n;
  return (typeof t == "number" ? Rn : t instanceof _o ? Nl : (n = _o(t)) ? (t = n, Nl) : Cv)(e, t);
}
function Yv(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Kv(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Wv(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Fv(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function qv(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function jv(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function Gv(e, t) {
  var n = os(e), r = n === "transform" ? Nv : Fc;
  return this.attrTween(e, typeof t == "function" ? (n.local ? jv : qv)(n, r, Aa(this, "attr." + e, t)) : t == null ? (n.local ? Kv : Yv)(n) : (n.local ? Fv : Wv)(n, r, t));
}
function Uv(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Jv(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Qv(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Jv(e, i)), n;
  }
  return o._value = t, o;
}
function e0(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Uv(e, i)), n;
  }
  return o._value = t, o;
}
function t0(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = os(e);
  return this.tween(n, (r.local ? Qv : e0)(r, t));
}
function n0(e, t) {
  return function() {
    Ta(this, e).delay = +t.apply(this, arguments);
  };
}
function r0(e, t) {
  return t = +t, function() {
    Ta(this, e).delay = t;
  };
}
function o0(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? n0 : r0)(t, e)) : rn(this.node(), t).delay;
}
function i0(e, t) {
  return function() {
    wn(this, e).duration = +t.apply(this, arguments);
  };
}
function s0(e, t) {
  return t = +t, function() {
    wn(this, e).duration = t;
  };
}
function a0(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? i0 : s0)(t, e)) : rn(this.node(), t).duration;
}
function l0(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    wn(this, e).ease = t;
  };
}
function u0(e) {
  var t = this._id;
  return arguments.length ? this.each(l0(t, e)) : rn(this.node(), t).ease;
}
function c0(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    wn(this, e).ease = n;
  };
}
function d0(e) {
  if (typeof e != "function") throw new Error();
  return this.each(c0(this._id, e));
}
function f0(e) {
  typeof e != "function" && (e = Cc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new zn(r, this._parents, this._name, this._id);
}
function g0(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], u = n[a], c = l.length, d = s[a] = new Array(c), f, g = 0; g < c; ++g)
      (f = l[g] || u[g]) && (d[g] = f);
  for (; a < r; ++a)
    s[a] = t[a];
  return new zn(s, this._parents, this._name, this._id);
}
function p0(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function h0(e, t, n) {
  var r, o, i = p0(t) ? Ta : wn;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function v0(e, t) {
  var n = this._id;
  return arguments.length < 2 ? rn(this.node(), n).on.on(e) : this.each(h0(n, e, t));
}
function m0(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function y0() {
  return this.on("end.remove", m0(this._id));
}
function w0(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Oa(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), c, d, f = 0; f < l; ++f)
      (c = a[f]) && (d = e.call(c, c.__data__, f, a)) && ("__data__" in c && (d.__data__ = c.__data__), u[f] = d, ss(u[f], t, n, f, u, rn(c, n)));
  return new zn(i, this._parents, t, n);
}
function b0(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = _c(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, c, d = 0; d < u; ++d)
      if (c = l[d]) {
        for (var f = e.call(c, c.__data__, d, l), g, h = rn(c, n), b = 0, x = f.length; b < x; ++b)
          (g = f[b]) && ss(g, t, n, b, f, h);
        i.push(f), s.push(c);
      }
  return new zn(i, s, t, n);
}
var x0 = Ho.prototype.constructor;
function $0() {
  return new x0(this._groups, this._parents);
}
function _0(e, t) {
  var n, r, o;
  return function() {
    var i = Br(this, e), s = (this.style.removeProperty(e), Br(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function qc(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function C0(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = Br(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function k0(e, t, n) {
  var r, o, i;
  return function() {
    var s = Br(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), Br(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function S0(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = wn(this, e), u = l.on, c = l.value[i] == null ? a || (a = qc(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(s, o = c), l.on = r;
  };
}
function E0(e, t, n) {
  var r = (e += "") == "transform" ? Ev : Fc;
  return t == null ? this.styleTween(e, _0(e, r)).on("end.style." + e, qc(e)) : typeof t == "function" ? this.styleTween(e, k0(e, r, Aa(this, "style." + e, t))).each(S0(this._id, e)) : this.styleTween(e, C0(e, r, t), n).on("end.style." + e, null);
}
function N0(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function P0(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && N0(e, s, n)), r;
  }
  return i._value = t, i;
}
function V0(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, P0(e, t, n ?? ""));
}
function M0(e) {
  return function() {
    this.textContent = e;
  };
}
function O0(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function z0(e) {
  return this.tween("text", typeof e == "function" ? O0(Aa(this, "text", e)) : M0(e == null ? "" : e + ""));
}
function H0(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function L0(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && H0(o)), t;
  }
  return r._value = e, r;
}
function T0(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, L0(e));
}
function A0() {
  for (var e = this._name, t = this._id, n = jc(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var c = rn(l, t);
        ss(l, e, n, u, s, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new zn(r, this._parents, e, n);
}
function D0() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = wn(this, r), c = u.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var I0 = 0;
function zn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function jc() {
  return ++I0;
}
var xn = Ho.prototype;
zn.prototype = {
  constructor: zn,
  select: w0,
  selectAll: b0,
  selectChild: xn.selectChild,
  selectChildren: xn.selectChildren,
  filter: f0,
  merge: g0,
  selection: $0,
  transition: A0,
  call: xn.call,
  nodes: xn.nodes,
  node: xn.node,
  size: xn.size,
  empty: xn.empty,
  each: xn.each,
  on: v0,
  attr: Gv,
  attrTween: t0,
  style: E0,
  styleTween: V0,
  text: z0,
  textTween: T0,
  remove: y0,
  tween: Xv,
  delay: o0,
  duration: a0,
  ease: u0,
  easeVarying: d0,
  end: D0,
  [Symbol.iterator]: xn[Symbol.iterator]
};
function R0(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Z0 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: R0
};
function B0(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function X0(e) {
  var t, n;
  e instanceof zn ? (t = e._id, e = e._name) : (t = jc(), (n = Z0).time = La(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && ss(l, e, t, u, s, n || B0(l, t));
  return new zn(r, this._parents, e, t);
}
Ho.prototype.interrupt = Rv;
Ho.prototype.transition = X0;
const ei = (e) => () => e;
function Y0(e, {
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
function Cn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Cn.prototype = {
  constructor: Cn,
  scale: function(e) {
    return e === 1 ? this : new Cn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Cn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var as = new Cn(1, 0, 0);
Gc.prototype = Cn.prototype;
function Gc(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return as;
  return e.__zoom;
}
function ks(e) {
  e.stopImmediatePropagation();
}
function ao(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function K0(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function W0() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Ll() {
  return this.__zoom || as;
}
function F0(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function q0() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function j0(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function Uc() {
  var e = K0, t = W0, n = j0, r = F0, o = q0, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = Ov, u = rs("start", "zoom", "end"), c, d, f, g = 500, h = 150, b = 0, x = 10;
  function k(S) {
    S.property("__zoom", Ll).on("wheel.zoom", M, { passive: !1 }).on("mousedown.zoom", z).on("dblclick.zoom", H).filter(o).on("touchstart.zoom", D).on("touchmove.zoom", A).on("touchend.zoom touchcancel.zoom", R).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  k.transform = function(S, V, _, E) {
    var O = S.selection ? S.selection() : S;
    O.property("__zoom", Ll), S !== O ? C(S, V, _, E) : O.interrupt().each(function() {
      N(this, arguments).event(E).start().zoom(null, typeof V == "function" ? V.apply(this, arguments) : V).end();
    });
  }, k.scaleBy = function(S, V, _, E) {
    k.scaleTo(S, function() {
      var O = this.__zoom.k, L = typeof V == "function" ? V.apply(this, arguments) : V;
      return O * L;
    }, _, E);
  }, k.scaleTo = function(S, V, _, E) {
    k.transform(S, function() {
      var O = t.apply(this, arguments), L = this.__zoom, Z = _ == null ? w(O) : typeof _ == "function" ? _.apply(this, arguments) : _, W = L.invert(Z), j = typeof V == "function" ? V.apply(this, arguments) : V;
      return n($(v(L, j), Z, W), O, s);
    }, _, E);
  }, k.translateBy = function(S, V, _, E) {
    k.transform(S, function() {
      return n(this.__zoom.translate(
        typeof V == "function" ? V.apply(this, arguments) : V,
        typeof _ == "function" ? _.apply(this, arguments) : _
      ), t.apply(this, arguments), s);
    }, null, E);
  }, k.translateTo = function(S, V, _, E, O) {
    k.transform(S, function() {
      var L = t.apply(this, arguments), Z = this.__zoom, W = E == null ? w(L) : typeof E == "function" ? E.apply(this, arguments) : E;
      return n(as.translate(W[0], W[1]).scale(Z.k).translate(
        typeof V == "function" ? -V.apply(this, arguments) : -V,
        typeof _ == "function" ? -_.apply(this, arguments) : -_
      ), L, s);
    }, E, O);
  };
  function v(S, V) {
    return V = Math.max(i[0], Math.min(i[1], V)), V === S.k ? S : new Cn(V, S.x, S.y);
  }
  function $(S, V, _) {
    var E = V[0] - _[0] * S.k, O = V[1] - _[1] * S.k;
    return E === S.x && O === S.y ? S : new Cn(S.k, E, O);
  }
  function w(S) {
    return [(+S[0][0] + +S[1][0]) / 2, (+S[0][1] + +S[1][1]) / 2];
  }
  function C(S, V, _, E) {
    S.on("start.zoom", function() {
      N(this, arguments).event(E).start();
    }).on("interrupt.zoom end.zoom", function() {
      N(this, arguments).event(E).end();
    }).tween("zoom", function() {
      var O = this, L = arguments, Z = N(O, L).event(E), W = t.apply(O, L), j = _ == null ? w(W) : typeof _ == "function" ? _.apply(O, L) : _, fe = Math.max(W[1][0] - W[0][0], W[1][1] - W[0][1]), Q = O.__zoom, B = typeof V == "function" ? V.apply(O, L) : V, ue = l(Q.invert(j).concat(fe / Q.k), B.invert(j).concat(fe / B.k));
      return function(we) {
        if (we === 1) we = B;
        else {
          var be = ue(we), ve = fe / be[2];
          we = new Cn(ve, j[0] - be[0] * ve, j[1] - be[1] * ve);
        }
        Z.zoom(null, we);
      };
    });
  }
  function N(S, V, _) {
    return !_ && S.__zooming || new P(S, V);
  }
  function P(S, V) {
    this.that = S, this.args = V, this.active = 0, this.sourceEvent = null, this.extent = t.apply(S, V), this.taps = 0;
  }
  P.prototype = {
    event: function(S) {
      return S && (this.sourceEvent = S), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(S, V) {
      return this.mouse && S !== "mouse" && (this.mouse[1] = V.invert(this.mouse[0])), this.touch0 && S !== "touch" && (this.touch0[1] = V.invert(this.touch0[0])), this.touch1 && S !== "touch" && (this.touch1[1] = V.invert(this.touch1[0])), this.that.__zoom = V, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(S) {
      var V = Rt(this.that).datum();
      u.call(
        S,
        this.that,
        new Y0(S, {
          sourceEvent: this.sourceEvent,
          target: k,
          transform: this.that.__zoom,
          dispatch: u
        }),
        V
      );
    }
  };
  function M(S, ...V) {
    if (!e.apply(this, arguments)) return;
    var _ = N(this, V).event(S), E = this.__zoom, O = Math.max(i[0], Math.min(i[1], E.k * Math.pow(2, r.apply(this, arguments)))), L = jt(S);
    if (_.wheel)
      (_.mouse[0][0] !== L[0] || _.mouse[0][1] !== L[1]) && (_.mouse[1] = E.invert(_.mouse[0] = L)), clearTimeout(_.wheel);
    else {
      if (E.k === O) return;
      _.mouse = [L, E.invert(L)], ci(this), _.start();
    }
    ao(S), _.wheel = setTimeout(Z, h), _.zoom("mouse", n($(v(E, O), _.mouse[0], _.mouse[1]), _.extent, s));
    function Z() {
      _.wheel = null, _.end();
    }
  }
  function z(S, ...V) {
    if (f || !e.apply(this, arguments)) return;
    var _ = S.currentTarget, E = N(this, V, !0).event(S), O = Rt(S.view).on("mousemove.zoom", j, !0).on("mouseup.zoom", fe, !0), L = jt(S, _), Z = S.clientX, W = S.clientY;
    Hc(S.view), ks(S), E.mouse = [L, this.__zoom.invert(L)], ci(this), E.start();
    function j(Q) {
      if (ao(Q), !E.moved) {
        var B = Q.clientX - Z, ue = Q.clientY - W;
        E.moved = B * B + ue * ue > b;
      }
      E.event(Q).zoom("mouse", n($(E.that.__zoom, E.mouse[0] = jt(Q, _), E.mouse[1]), E.extent, s));
    }
    function fe(Q) {
      O.on("mousemove.zoom mouseup.zoom", null), Lc(Q.view, E.moved), ao(Q), E.event(Q).end();
    }
  }
  function H(S, ...V) {
    if (e.apply(this, arguments)) {
      var _ = this.__zoom, E = jt(S.changedTouches ? S.changedTouches[0] : S, this), O = _.invert(E), L = _.k * (S.shiftKey ? 0.5 : 2), Z = n($(v(_, L), E, O), t.apply(this, V), s);
      ao(S), a > 0 ? Rt(this).transition().duration(a).call(C, Z, E, S) : Rt(this).call(k.transform, Z, E, S);
    }
  }
  function D(S, ...V) {
    if (e.apply(this, arguments)) {
      var _ = S.touches, E = _.length, O = N(this, V, S.changedTouches.length === E).event(S), L, Z, W, j;
      for (ks(S), Z = 0; Z < E; ++Z)
        W = _[Z], j = jt(W, this), j = [j, this.__zoom.invert(j), W.identifier], O.touch0 ? !O.touch1 && O.touch0[2] !== j[2] && (O.touch1 = j, O.taps = 0) : (O.touch0 = j, L = !0, O.taps = 1 + !!c);
      c && (c = clearTimeout(c)), L && (O.taps < 2 && (d = j[0], c = setTimeout(function() {
        c = null;
      }, g)), ci(this), O.start());
    }
  }
  function A(S, ...V) {
    if (this.__zooming) {
      var _ = N(this, V).event(S), E = S.changedTouches, O = E.length, L, Z, W, j;
      for (ao(S), L = 0; L < O; ++L)
        Z = E[L], W = jt(Z, this), _.touch0 && _.touch0[2] === Z.identifier ? _.touch0[0] = W : _.touch1 && _.touch1[2] === Z.identifier && (_.touch1[0] = W);
      if (Z = _.that.__zoom, _.touch1) {
        var fe = _.touch0[0], Q = _.touch0[1], B = _.touch1[0], ue = _.touch1[1], we = (we = B[0] - fe[0]) * we + (we = B[1] - fe[1]) * we, be = (be = ue[0] - Q[0]) * be + (be = ue[1] - Q[1]) * be;
        Z = v(Z, Math.sqrt(we / be)), W = [(fe[0] + B[0]) / 2, (fe[1] + B[1]) / 2], j = [(Q[0] + ue[0]) / 2, (Q[1] + ue[1]) / 2];
      } else if (_.touch0) W = _.touch0[0], j = _.touch0[1];
      else return;
      _.zoom("touch", n($(Z, W, j), _.extent, s));
    }
  }
  function R(S, ...V) {
    if (this.__zooming) {
      var _ = N(this, V).event(S), E = S.changedTouches, O = E.length, L, Z;
      for (ks(S), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, g), L = 0; L < O; ++L)
        Z = E[L], _.touch0 && _.touch0[2] === Z.identifier ? delete _.touch0 : _.touch1 && _.touch1[2] === Z.identifier && delete _.touch1;
      if (_.touch1 && !_.touch0 && (_.touch0 = _.touch1, delete _.touch1), _.touch0) _.touch0[1] = this.__zoom.invert(_.touch0[0]);
      else if (_.end(), _.taps === 2 && (Z = jt(Z, this), Math.hypot(d[0] - Z[0], d[1] - Z[1]) < x)) {
        var W = Rt(this).on("dblclick.zoom");
        W && W.apply(this, arguments);
      }
    }
  }
  return k.wheelDelta = function(S) {
    return arguments.length ? (r = typeof S == "function" ? S : ei(+S), k) : r;
  }, k.filter = function(S) {
    return arguments.length ? (e = typeof S == "function" ? S : ei(!!S), k) : e;
  }, k.touchable = function(S) {
    return arguments.length ? (o = typeof S == "function" ? S : ei(!!S), k) : o;
  }, k.extent = function(S) {
    return arguments.length ? (t = typeof S == "function" ? S : ei([[+S[0][0], +S[0][1]], [+S[1][0], +S[1][1]]]), k) : t;
  }, k.scaleExtent = function(S) {
    return arguments.length ? (i[0] = +S[0], i[1] = +S[1], k) : [i[0], i[1]];
  }, k.translateExtent = function(S) {
    return arguments.length ? (s[0][0] = +S[0][0], s[1][0] = +S[1][0], s[0][1] = +S[0][1], s[1][1] = +S[1][1], k) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, k.constrain = function(S) {
    return arguments.length ? (n = S, k) : n;
  }, k.duration = function(S) {
    return arguments.length ? (a = +S, k) : a;
  }, k.interpolate = function(S) {
    return arguments.length ? (l = S, k) : l;
  }, k.on = function() {
    var S = u.on.apply(u, arguments);
    return S === u ? k : S;
  }, k.clickDistance = function(S) {
    return arguments.length ? (b = (S = +S) * S, k) : Math.sqrt(b);
  }, k.tapDistance = function(S) {
    return arguments.length ? (x = +S, k) : x;
  }, k;
}
const eo = {
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
  error014: () => "useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID."
}, Oi = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
];
var ur;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(ur || (ur = {}));
var Kn;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(Kn || (Kn = {}));
var zi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(zi || (zi = {}));
const ta = {
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
var Hr;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Hr || (Hr = {}));
var ko;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(ko || (ko = {}));
var Ce;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(Ce || (Ce = {}));
const Tl = {
  [Ce.Left]: Ce.Right,
  [Ce.Right]: Ce.Left,
  [Ce.Top]: Ce.Bottom,
  [Ce.Bottom]: Ce.Top
};
function G0(e, t) {
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
function Al(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t != null && t.has(i) || r.push(o);
  }), r.length && n(r);
}
function U0(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const J0 = (e) => "id" in e && "source" in e && "target" in e, Q0 = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), Da = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), To = (e, t = [0, 0]) => {
  const { width: n, height: r } = Jn(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, em = (e, t = { nodeOrigin: [0, 0], nodeLookup: void 0 }) => {
  if (process.env.NODE_ENV === "development" && !t.nodeLookup && console.warn("Please use `getNodesBounds` from `useReactFlow`/`useSvelteFlow` hook to ensure correct values for sub flows. If not possible, you have to provide a nodeLookup to support sub flows."), e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : Da(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? Hi(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return ls(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return us(n);
}, Ao = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = Hi(r);
      n = ls(n, o);
    }
  }), us(n);
}, Jc = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...Do(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: d = !0, hidden: f = !1 } = u;
    if (s && !d || f)
      continue;
    const g = c.width ?? u.width ?? u.initialWidth ?? null, h = c.height ?? u.height ?? u.initialHeight ?? null, b = So(a, Kr(u)), x = (g ?? 0) * (h ?? 0), k = i && b > 0;
    (!u.internals.handleBounds || k || b >= x || u.dragging) && l.push(u);
  }
  return l;
}, na = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function Dl(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t != null && t.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function Il({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!1);
  const a = Ao(e), l = Ra(a, t, n, (s == null ? void 0 : s.minZoom) ?? o, (s == null ? void 0 : s.maxZoom) ?? i, (s == null ? void 0 : s.padding) ?? 0.1);
  return await r.setViewport(l, { duration: s == null ? void 0 : s.duration }), Promise.resolve(!0);
}
function tm({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: u } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, c = s.origin ?? r;
  let d = o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i == null || i("005", eo.error005());
    else {
      const g = a.measured.width, h = a.measured.height;
      g && h && (d = [
        [l, u],
        [l + g, u + h]
      ]);
    }
  else a && Wr(s.extent) && (d = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const f = Wr(d) ? cr(t, d, s.measured) : t;
  return {
    position: {
      x: f.x - l + s.measured.width * c[0],
      y: f.y - u + s.measured.height * c[1]
    },
    positionAbsolute: f
  };
}
async function Qc({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((d) => d.id)), s = [];
  for (const d of n) {
    if (d.deletable === !1)
      continue;
    const f = i.has(d.id), g = !f && d.parentId && s.find((h) => h.id === d.parentId);
    (f || g) && s.push(d);
  }
  const a = new Set(t.map((d) => d.id)), l = r.filter((d) => d.deletable !== !1), u = na(s, l);
  for (const d of l)
    a.has(d.id) && !u.find((f) => f.id === d.id) && u.push(d);
  if (!o)
    return {
      edges: u,
      nodes: s
    };
  const c = await o({
    nodes: s,
    edges: u
  });
  return typeof c == "boolean" ? c ? { edges: u, nodes: s } : { edges: [], nodes: [] } : c;
}
const Yr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), cr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Yr(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: Yr(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function ed(e, t, n) {
  const { width: r, height: o } = Jn(n), { x: i, y: s } = n.internals.positionAbsolute;
  return cr(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const Rl = (e, t, n) => e < t ? Yr(Math.abs(e - t), 1, t) / t : e > n ? -Yr(Math.abs(e - n), 1, t) / t : 0, td = (e, t, n = 15, r = 40) => {
  const o = Rl(e.x, r, t.width - r) * n, i = Rl(e.y, r, t.height - r) * n;
  return [o, i];
}, ls = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), ra = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), us = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Kr = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: i } = Da(e) ? e.internals.positionAbsolute : To(e, t);
  return {
    x: o,
    y: i,
    width: ((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, Hi = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: i } = Da(e) ? e.internals.positionAbsolute : To(e, t);
  return {
    x: o,
    y: i,
    x2: o + (((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: i + (((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, nd = (e, t) => us(ls(ra(e), ra(t))), So = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, Zl = (e) => kn(e.width) && kn(e.height) && kn(e.x) && kn(e.y), kn = (e) => !isNaN(e) && isFinite(e), rd = (e, t) => {
  process.env.NODE_ENV === "development" && console.warn(`[React Flow]: ${t} Help: https://reactflow.dev/error#${e}`);
}, Ia = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Do = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? Ia(a, s) : a;
}, od = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
}), Ra = (e, t, n, r, o, i) => {
  const s = t / (e.width * (1 + i)), a = n / (e.height * (1 + i)), l = Math.min(s, a), u = Yr(l, r, o), c = e.x + e.width / 2, d = e.y + e.height / 2, f = t / 2 - c * u, g = n / 2 - d * u;
  return { x: f, y: g, zoom: u };
}, Li = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function Wr(e) {
  return e !== void 0 && e !== "parent";
}
function Jn(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function id(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function nm(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function Ss(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = Pn(e), a = Do({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: s - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? Ia(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const Za = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), rm = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, om = ["INPUT", "SELECT", "TEXTAREA"];
function im(e) {
  var t, n;
  const r = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target;
  return (r == null ? void 0 : r.nodeType) !== 1 ? !1 : om.includes(r.nodeName) || r.hasAttribute("contenteditable") || !!r.closest(".nokey");
}
const sd = (e) => "clientX" in e, Pn = (e, t) => {
  var n, r;
  const o = sd(e), i = o ? e.clientX : (n = e.touches) == null ? void 0 : n[0].clientX, s = o ? e.clientY : (r = e.touches) == null ? void 0 : r[0].clientY;
  return {
    x: i - ((t == null ? void 0 : t.left) ?? 0),
    y: s - ((t == null ? void 0 : t.top) ?? 0)
  };
}, Bl = (e, t, n, r, o) => {
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
      ...Za(s)
    };
  });
};
function sm({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, c = Math.abs(l - e), d = Math.abs(u - t);
  return [l, u, c, d];
}
function ti(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Xl({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case Ce.Left:
      return [t - ti(t - r, i), n];
    case Ce.Right:
      return [t + ti(r - t, i), n];
    case Ce.Top:
      return [t, n - ti(n - o, i)];
    case Ce.Bottom:
      return [t, n + ti(o - n, i)];
  }
}
function ad({ sourceX: e, sourceY: t, sourcePosition: n = Ce.Bottom, targetX: r, targetY: o, targetPosition: i = Ce.Top, curvature: s = 0.25 }) {
  const [a, l] = Xl({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [u, c] = Xl({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [d, f, g, h] = sm({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: o,
    sourceControlX: a,
    sourceControlY: l,
    targetControlX: u,
    targetControlY: c
  });
  return [
    `M${e},${t} C${a},${l} ${u},${c} ${r},${o}`,
    d,
    f,
    g,
    h
  ];
}
function ld({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function am({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const i = n || t.selected || e.selected, s = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (i ? s : 0);
}
function lm({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = ls(Hi(e), Hi(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return So(s, us(i)) > 0;
}
const um = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, cm = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), dm = (e, t) => {
  if (!e.source || !e.target)
    return rd("006", eo.error006()), t;
  let n;
  return J0(e) ? n = { ...e } : n = {
    ...e,
    id: um(e)
  }, cm(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function oa({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = ld({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const Yl = {
  [Ce.Left]: { x: -1, y: 0 },
  [Ce.Right]: { x: 1, y: 0 },
  [Ce.Top]: { x: 0, y: -1 },
  [Ce.Bottom]: { x: 0, y: 1 }
}, fm = ({ source: e, sourcePosition: t = Ce.Bottom, target: n }) => t === Ce.Left || t === Ce.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Kl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function gm({ source: e, sourcePosition: t = Ce.Bottom, target: n, targetPosition: r = Ce.Top, center: o, offset: i }) {
  const s = Yl[t], a = Yl[r], l = { x: e.x + s.x * i, y: e.y + s.y * i }, u = { x: n.x + a.x * i, y: n.y + a.y * i }, c = fm({
    source: l,
    sourcePosition: t,
    target: u
  }), d = c.x !== 0 ? "x" : "y", f = c[d];
  let g = [], h, b;
  const x = { x: 0, y: 0 }, k = { x: 0, y: 0 }, [v, $, w, C] = ld({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (s[d] * a[d] === -1) {
    h = o.x ?? v, b = o.y ?? $;
    const N = [
      { x: h, y: l.y },
      { x: h, y: u.y }
    ], P = [
      { x: l.x, y: b },
      { x: u.x, y: b }
    ];
    s[d] === f ? g = d === "x" ? N : P : g = d === "x" ? P : N;
  } else {
    const N = [{ x: l.x, y: u.y }], P = [{ x: u.x, y: l.y }];
    if (d === "x" ? g = s.x === f ? P : N : g = s.y === f ? N : P, t === r) {
      const A = Math.abs(e[d] - n[d]);
      if (A <= i) {
        const R = Math.min(i - 1, i - A);
        s[d] === f ? x[d] = (l[d] > e[d] ? -1 : 1) * R : k[d] = (u[d] > n[d] ? -1 : 1) * R;
      }
    }
    if (t !== r) {
      const A = d === "x" ? "y" : "x", R = s[d] === a[A], S = l[A] > u[A], V = l[A] < u[A];
      (s[d] === 1 && (!R && S || R && V) || s[d] !== 1 && (!R && V || R && S)) && (g = d === "x" ? N : P);
    }
    const M = { x: l.x + x.x, y: l.y + x.y }, z = { x: u.x + k.x, y: u.y + k.y }, H = Math.max(Math.abs(M.x - g[0].x), Math.abs(z.x - g[0].x)), D = Math.max(Math.abs(M.y - g[0].y), Math.abs(z.y - g[0].y));
    H >= D ? (h = (M.x + z.x) / 2, b = g[0].y) : (h = g[0].x, b = (M.y + z.y) / 2);
  }
  return [[
    e,
    { x: l.x + x.x, y: l.y + x.y },
    ...g,
    { x: u.x + k.x, y: u.y + k.y },
    n
  ], h, b, w, C];
}
function pm(e, t, n, r) {
  const o = Math.min(Kl(e, t) / 2, Kl(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, c = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * c}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function Ti({ sourceX: e, sourceY: t, sourcePosition: n = Ce.Bottom, targetX: r, targetY: o, targetPosition: i = Ce.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20 }) {
  const [c, d, f, g, h] = gm({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u
  });
  return [c.reduce((b, x, k) => {
    let v = "";
    return k > 0 && k < c.length - 1 ? v = pm(c[k - 1], x, c[k + 1], s) : v = `${k === 0 ? "M" : "L"}${x.x} ${x.y}`, b += v, b;
  }, ""), d, f, g, h];
}
function Wl(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function hm(e) {
  var t;
  const { sourceNode: n, targetNode: r } = e;
  if (!Wl(n) || !Wl(r))
    return null;
  const o = n.internals.handleBounds || Fl(n.handles), i = r.internals.handleBounds || Fl(r.handles), s = ql((o == null ? void 0 : o.source) ?? [], e.sourceHandle), a = ql(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === ur.Strict ? (i == null ? void 0 : i.target) ?? [] : ((i == null ? void 0 : i.target) ?? []).concat((i == null ? void 0 : i.source) ?? []),
    e.targetHandle
  );
  if (!s || !a)
    return (t = e.onError) == null || t.call(e, "008", eo.error008(s ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const l = (s == null ? void 0 : s.position) || Ce.Bottom, u = (a == null ? void 0 : a.position) || Ce.Top, c = Eo(n, s, l), d = Eo(r, a, u);
  return {
    sourceX: c.x,
    sourceY: c.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: l,
    targetPosition: u
  };
}
function Fl(e) {
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
function Eo(e, t, n = Ce.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? Jn(e);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case Ce.Top:
      return { x: o + s / 2, y: i };
    case Ce.Right:
      return { x: o + s, y: i + a / 2 };
    case Ce.Bottom:
      return { x: o + s / 2, y: i + a };
    case Ce.Left:
      return { x: o, y: i + a / 2 };
  }
}
function ql(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function ia(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function vm(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = ia(l, t);
      i.has(u) || (s.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function mm(e, t, n, r, o) {
  let i = 0.5;
  o === "start" ? i = 0 : o === "end" && (i = 1);
  let s = [
    (e.x + e.width * i) * t.zoom + t.x,
    e.y * t.zoom + t.y - r
  ], a = [-100 * i, -100];
  switch (n) {
    case Ce.Right:
      s = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [0, -100 * i];
      break;
    case Ce.Bottom:
      s[1] = (e.y + e.height) * t.zoom + t.y + r, a[1] = 0;
      break;
    case Ce.Left:
      s = [
        e.x * t.zoom + t.x - r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [-100, -100 * i];
      break;
  }
  return `translate(${s[0]}px, ${s[1]}px) translate(${a[0]}%, ${a[1]}%)`;
}
const Ba = {
  nodeOrigin: [0, 0],
  nodeExtent: Oi,
  elevateNodesOnSelect: !0,
  defaults: {}
}, ym = {
  ...Ba,
  checkEquality: !0
};
function Xa(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function wm(e, t, n) {
  const r = Xa(Ba, n);
  for (const o of e.values())
    if (o.parentId)
      Ya(o, e, t, r);
    else {
      const i = To(o, r.nodeOrigin), s = Wr(o.extent) ? o.extent : r.nodeExtent, a = cr(i, s, Jn(o));
      o.internals.positionAbsolute = a;
    }
}
function ud(e, t, n, r) {
  var o, i;
  const s = Xa(ym, r), a = new Map(t), l = s != null && s.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let c = a.get(u.id);
    if (s.checkEquality && u === (c == null ? void 0 : c.internals.userNode))
      t.set(u.id, c);
    else {
      const d = To(u, s.nodeOrigin), f = Wr(u.extent) ? u.extent : s.nodeExtent, g = cr(d, f, Jn(u));
      c = {
        ...s.defaults,
        ...u,
        measured: {
          width: (o = u.measured) == null ? void 0 : o.width,
          height: (i = u.measured) == null ? void 0 : i.height
        },
        internals: {
          positionAbsolute: g,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: u.measured ? c == null ? void 0 : c.internals.handleBounds : void 0,
          z: cd(u, l),
          userNode: u
        }
      }, t.set(u.id, c);
    }
    u.parentId && Ya(c, t, n, r);
  }
}
function bm(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Ya(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: s } = Xa(Ba, r), a = e.parentId, l = t.get(a);
  if (!l) {
    console.warn(`Parent node ${a} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  bm(e, n);
  const u = o ? 1e3 : 0, { x: c, y: d, z: f } = xm(e, l, i, s, u), { positionAbsolute: g } = e.internals, h = c !== g.x || d !== g.y;
  (h || f !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: h ? { x: c, y: d } : g,
      z: f
    }
  });
}
function cd(e, t) {
  return (kn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function xm(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = Jn(e), l = To(e, n), u = Wr(e.extent) ? cr(l, e.extent, a) : l;
  let c = cr({ x: i + u.x, y: s + u.y }, r, a);
  e.extent === "parent" && (c = ed(c, a, t));
  const d = cd(e, o), f = t.internals.z ?? 0;
  return {
    x: c.x,
    y: c.y,
    z: f > d ? f : d
  };
}
function $m(e, t, n, r = [0, 0]) {
  var o;
  const i = [], s = /* @__PURE__ */ new Map();
  for (const a of e) {
    const l = t.get(a.parentId);
    if (!l)
      continue;
    const u = ((o = s.get(a.parentId)) == null ? void 0 : o.expandedRect) ?? Kr(l), c = nd(u, a.rect);
    s.set(a.parentId, { expandedRect: c, parent: l });
  }
  return s.size > 0 && s.forEach(({ expandedRect: a, parent: l }, u) => {
    var c;
    const d = l.internals.positionAbsolute, f = Jn(l), g = l.origin ?? r, h = a.x < d.x ? Math.round(Math.abs(d.x - a.x)) : 0, b = a.y < d.y ? Math.round(Math.abs(d.y - a.y)) : 0, x = Math.max(f.width, Math.round(a.width)), k = Math.max(f.height, Math.round(a.height)), v = (x - f.width) * g[0], $ = (k - f.height) * g[1];
    (h > 0 || b > 0 || v || $) && (i.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - h + v,
        y: l.position.y - b + $
      }
    }), (c = n.get(u)) == null || c.forEach((w) => {
      e.some((C) => C.id === w.id) || i.push({
        id: w.id,
        type: "position",
        position: {
          x: w.position.x + h,
          y: w.position.y + b
        }
      });
    })), (f.width < a.width || f.height < a.height || h || b) && i.push({
      id: u,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: x + (h ? g[0] * h - v : 0),
        height: k + (b ? g[1] * b - $ : 0)
      }
    });
  }), i;
}
function _m(e, t, n, r, o, i) {
  const s = r == null ? void 0 : r.querySelector(".xyflow__viewport");
  let a = !1;
  if (!s)
    return { changes: [], updatedInternals: a };
  const l = [], u = window.getComputedStyle(s), { m22: c } = new window.DOMMatrixReadOnly(u.transform), d = [];
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
    const h = Za(f.nodeElement), b = g.measured.width !== h.width || g.measured.height !== h.height;
    if (h.width && h.height && (b || !g.internals.handleBounds || f.force)) {
      const x = f.nodeElement.getBoundingClientRect(), k = Wr(g.extent) ? g.extent : i;
      let { positionAbsolute: v } = g.internals;
      g.parentId && g.extent === "parent" ? v = ed(v, h, t.get(g.parentId)) : k && (v = cr(v, k, h));
      const $ = {
        ...g,
        measured: h,
        internals: {
          ...g.internals,
          positionAbsolute: v,
          handleBounds: {
            source: Bl("source", f.nodeElement, x, c, g.id),
            target: Bl("target", f.nodeElement, x, c, g.id)
          }
        }
      };
      t.set(g.id, $), g.parentId && Ya($, t, n, { nodeOrigin: o }), a = !0, b && (l.push({
        id: g.id,
        type: "dimensions",
        dimensions: h
      }), g.expandParent && g.parentId && d.push({
        id: g.id,
        parentId: g.parentId,
        rect: Kr($, o)
      }));
    }
  }
  if (d.length > 0) {
    const f = $m(d, t, n, o);
    l.push(...f);
  }
  return { changes: l, updatedInternals: a };
}
async function Cm({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function jl(e, t, n, r, o, i) {
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
function dd(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, c = `${i}-${a}--${o}-${s}`;
    jl("source", l, c, e, o, s), jl("target", l, u, e, i, a), t.set(r.id, r);
  }
}
function km(e, t) {
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
function fd(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : fd(n, t) : !1;
}
function Gl(e, t, n) {
  var r;
  let o = e;
  do {
    if ((r = o == null ? void 0 : o.matches) != null && r.call(o, t))
      return !0;
    if (o === n)
      return !1;
    o = o == null ? void 0 : o.parentElement;
  } while (o);
  return !1;
}
function Sm(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !fd(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function Es({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
  var o, i, s;
  const a = [];
  for (const [u, c] of t) {
    const d = (o = n.get(u)) == null ? void 0 : o.internals.userNode;
    d && a.push({
      ...d,
      position: c.position,
      dragging: r
    });
  }
  if (!e)
    return [a[0], a];
  const l = (i = n.get(e)) == null ? void 0 : i.internals.userNode;
  return [
    l ? {
      ...l,
      position: ((s = t.get(e)) == null ? void 0 : s.position) || l.position,
      dragging: r
    } : a[0],
    a
  ];
}
function Em({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, c = null, d = !1, f = null, g = !1;
  function h({ noDragClassName: x, handleSelector: k, domNode: v, isSelectable: $, nodeId: w, nodeClickDistance: C = 0 }) {
    f = Rt(v);
    function N({ x: H, y: D }, A) {
      const { nodeLookup: R, nodeExtent: S, snapGrid: V, snapToGrid: _, nodeOrigin: E, onNodeDrag: O, onSelectionDrag: L, onError: Z, updateNodePositions: W } = t();
      i = { x: H, y: D };
      let j = !1, fe = { x: 0, y: 0, x2: 0, y2: 0 };
      if (a.size > 1 && S) {
        const Q = Ao(a);
        fe = ra(Q);
      }
      for (const [Q, B] of a) {
        if (!R.has(Q))
          continue;
        let ue = { x: H - B.distance.x, y: D - B.distance.y };
        _ && (ue = Ia(ue, V));
        let we = [
          [S[0][0], S[0][1]],
          [S[1][0], S[1][1]]
        ];
        if (a.size > 1 && S && !B.extent) {
          const { positionAbsolute: ne } = B.internals, le = ne.x - fe.x + S[0][0], De = ne.x + B.measured.width - fe.x2 + S[1][0], Ke = ne.y - fe.y + S[0][1], Ie = ne.y + B.measured.height - fe.y2 + S[1][1];
          we = [
            [le, Ke],
            [De, Ie]
          ];
        }
        const { position: be, positionAbsolute: ve } = tm({
          nodeId: Q,
          nextPosition: ue,
          nodeLookup: R,
          nodeExtent: we,
          nodeOrigin: E,
          onError: Z
        });
        j = j || B.position.x !== be.x || B.position.y !== be.y, B.position = be, B.internals.positionAbsolute = ve;
      }
      if (j && (W(a, !0), A && (r || O || !w && L))) {
        const [Q, B] = Es({
          nodeId: w,
          dragItems: a,
          nodeLookup: R
        });
        r == null || r(A, a, Q, B), O == null || O(A, Q, B), w || L == null || L(A, B);
      }
    }
    async function P() {
      if (!c)
        return;
      const { transform: H, panBy: D, autoPanSpeed: A, autoPanOnNodeDrag: R } = t();
      if (!R) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [S, V] = td(u, c, A);
      (S !== 0 || V !== 0) && (i.x = (i.x ?? 0) - S / H[2], i.y = (i.y ?? 0) - V / H[2], await D({ x: S, y: V }) && N(i, null)), s = requestAnimationFrame(P);
    }
    function M(H) {
      var D;
      const { nodeLookup: A, multiSelectionActive: R, nodesDraggable: S, transform: V, snapGrid: _, snapToGrid: E, selectNodesOnDrag: O, onNodeDragStart: L, onSelectionDragStart: Z, unselectNodesAndEdges: W } = t();
      d = !0, (!O || !$) && !R && w && ((D = A.get(w)) != null && D.selected || W()), $ && O && w && (e == null || e(w));
      const j = Ss(H.sourceEvent, { transform: V, snapGrid: _, snapToGrid: E, containerBounds: c });
      if (i = j, a = Sm(A, S, j, w), a.size > 0 && (n || L || !w && Z)) {
        const [fe, Q] = Es({
          nodeId: w,
          dragItems: a,
          nodeLookup: A
        });
        n == null || n(H.sourceEvent, a, fe, Q), L == null || L(H.sourceEvent, fe, Q), w || Z == null || Z(H.sourceEvent, Q);
      }
    }
    const z = sv().clickDistance(C).on("start", (H) => {
      const { domNode: D, nodeDragThreshold: A, transform: R, snapGrid: S, snapToGrid: V } = t();
      c = (D == null ? void 0 : D.getBoundingClientRect()) || null, g = !1, A === 0 && M(H), i = Ss(H.sourceEvent, { transform: R, snapGrid: S, snapToGrid: V, containerBounds: c }), u = Pn(H.sourceEvent, c);
    }).on("drag", (H) => {
      const { autoPanOnNodeDrag: D, transform: A, snapGrid: R, snapToGrid: S, nodeDragThreshold: V, nodeLookup: _ } = t(), E = Ss(H.sourceEvent, { transform: A, snapGrid: R, snapToGrid: S, containerBounds: c });
      if ((H.sourceEvent.type === "touchmove" && H.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      w && !_.has(w)) && (g = !0), !g) {
        if (!l && D && d && (l = !0, P()), !d) {
          const O = E.xSnapped - (i.x ?? 0), L = E.ySnapped - (i.y ?? 0);
          Math.sqrt(O * O + L * L) > V && M(H);
        }
        (i.x !== E.xSnapped || i.y !== E.ySnapped) && a && d && (u = Pn(H.sourceEvent, c), N(E, H.sourceEvent));
      }
    }).on("end", (H) => {
      if (!(!d || g) && (l = !1, d = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: D, updateNodePositions: A, onNodeDragStop: R, onSelectionDragStop: S } = t();
        if (A(a, !1), o || R || !w && S) {
          const [V, _] = Es({
            nodeId: w,
            dragItems: a,
            nodeLookup: D,
            dragging: !1
          });
          o == null || o(H.sourceEvent, a, V, _), R == null || R(H.sourceEvent, V, _), w || S == null || S(H.sourceEvent, _);
        }
      }
    }).filter((H) => {
      const D = H.target;
      return !H.button && (!x || !Gl(D, `.${x}`, v)) && (!k || Gl(D, k, v));
    });
    f.call(z);
  }
  function b() {
    f == null || f.on(".drag", null);
  }
  return {
    update: h,
    destroy: b
  };
}
function Nm(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    So(o, Kr(i)) > 0 && r.push(i);
  return r;
}
const Pm = 250;
function Vm(e, t, n, r) {
  var o, i;
  let s = [], a = 1 / 0;
  const l = Nm(e, n, t + Pm);
  for (const u of l) {
    const c = [...((o = u.internals.handleBounds) == null ? void 0 : o.source) ?? [], ...((i = u.internals.handleBounds) == null ? void 0 : i.target) ?? []];
    for (const d of c) {
      if (r.nodeId === d.nodeId && r.type === d.type && r.id === d.id)
        continue;
      const { x: f, y: g } = Eo(u, d, d.position, !0), h = Math.sqrt(Math.pow(f - e.x, 2) + Math.pow(g - e.y, 2));
      h > t || (h < a ? (s = [{ ...d, x: f, y: g }], a = h) : h === a && s.push({ ...d, x: f, y: g }));
    }
  }
  if (!s.length)
    return null;
  if (s.length > 1) {
    const u = r.type === "source" ? "target" : "source";
    return s.find((c) => c.type === u) ?? s[0];
  }
  return s[0];
}
function gd(e, t, n, r, o, i = !1) {
  var s, a, l;
  const u = r.get(e);
  if (!u)
    return null;
  const c = o === "strict" ? (s = u.internals.handleBounds) == null ? void 0 : s[t] : [...((a = u.internals.handleBounds) == null ? void 0 : a.source) ?? [], ...((l = u.internals.handleBounds) == null ? void 0 : l.target) ?? []], d = (n ? c == null ? void 0 : c.find((f) => f.id === n) : c == null ? void 0 : c[0]) ?? null;
  return d && i ? { ...d, ...Eo(u, d, d.position, !0) } : d;
}
function pd(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function Mm(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const hd = () => !0;
function Om(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: d, panBy: f, cancelConnection: g, onConnectStart: h, onConnect: b, onConnectEnd: x, isValidConnection: k = hd, onReconnectEnd: v, updateConnection: $, getTransform: w, getFromHandle: C, autoPanSpeed: N }) {
  const P = rm(e.target);
  let M = 0, z;
  const { x: H, y: D } = Pn(e), A = P == null ? void 0 : P.elementFromPoint(H, D), R = pd(i, A), S = a == null ? void 0 : a.getBoundingClientRect();
  if (!S || !R)
    return;
  const V = gd(o, R, r, l, t);
  if (!V)
    return;
  let _ = Pn(e, S), E = !1, O = null, L = !1, Z = null;
  function W() {
    if (!c || !S)
      return;
    const [be, ve] = td(_, S, N);
    f({ x: be, y: ve }), M = requestAnimationFrame(W);
  }
  const j = {
    ...V,
    nodeId: o,
    type: R,
    position: V.position
  }, fe = l.get(o), Q = {
    inProgress: !0,
    isValid: null,
    from: Eo(fe, j, Ce.Left, !0),
    fromHandle: j,
    fromPosition: j.position,
    fromNode: fe,
    to: _,
    toHandle: null,
    toPosition: Tl[j.position],
    toNode: null
  };
  $(Q);
  let B = Q;
  h == null || h(e, { nodeId: o, handleId: r, handleType: R });
  function ue(be) {
    if (!C() || !j) {
      we(be);
      return;
    }
    const ve = w();
    _ = Pn(be, S), z = Vm(Do(_, ve, !1, [1, 1]), n, l, j), E || (W(), E = !0);
    const ne = vd(be, {
      handle: z,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: k,
      doc: P,
      lib: u,
      flowId: d,
      nodeLookup: l
    });
    Z = ne.handleDomNode, O = ne.connection, L = Mm(!!z, ne.isValid);
    const le = {
      // from stays the same
      ...B,
      isValid: L,
      to: z && L ? od({ x: z.x, y: z.y }, ve) : _,
      toHandle: ne.toHandle,
      toPosition: L && ne.toHandle ? ne.toHandle.position : Tl[j.position],
      toNode: ne.toHandle ? l.get(ne.toHandle.nodeId) : null
    };
    L && z && B.toHandle && le.toHandle && B.toHandle.type === le.toHandle.type && B.toHandle.nodeId === le.toHandle.nodeId && B.toHandle.id === le.toHandle.id && B.to.x === le.to.x && B.to.y === le.to.y || ($(le), B = le);
  }
  function we(be) {
    (z || Z) && O && L && (b == null || b(O));
    const { inProgress: ve, ...ne } = B, le = {
      ...ne,
      toPosition: B.toHandle ? B.toPosition : null
    };
    x == null || x(be, le), i && (v == null || v(be, le)), g(), cancelAnimationFrame(M), E = !1, L = !1, O = null, Z = null, P.removeEventListener("mousemove", ue), P.removeEventListener("mouseup", we), P.removeEventListener("touchmove", ue), P.removeEventListener("touchend", we);
  }
  P.addEventListener("mousemove", ue), P.addEventListener("mouseup", we), P.addEventListener("touchmove", ue), P.addEventListener("touchend", we);
}
function vd(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = hd, nodeLookup: c }) {
  const d = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: g, y: h } = Pn(e), b = s.elementFromPoint(g, h), x = b != null && b.classList.contains(`${a}-flow__handle`) ? b : f, k = {
    handleDomNode: x,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (x) {
    const v = pd(void 0, x), $ = x.getAttribute("data-nodeid"), w = x.getAttribute("data-handleid"), C = x.classList.contains("connectable"), N = x.classList.contains("connectableend");
    if (!$ || !v)
      return k;
    const P = {
      source: d ? $ : r,
      sourceHandle: d ? w : o,
      target: d ? r : $,
      targetHandle: d ? o : w
    };
    k.connection = P;
    const M = C && N && (n === ur.Strict ? d && v === "source" || !d && v === "target" : $ !== r || w !== o);
    k.isValid = M && u(P), k.toHandle = gd($, v, w, c, n, !1);
  }
  return k;
}
const zm = {
  onPointerDown: Om,
  isValid: vd
};
function Hm({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Rt(e);
  function i({ translateExtent: a, width: l, height: u, zoomStep: c = 10, pannable: d = !0, zoomable: f = !0, inversePan: g = !1 }) {
    const h = ($) => {
      const w = n();
      if ($.sourceEvent.type !== "wheel" || !t)
        return;
      const C = -$.sourceEvent.deltaY * ($.sourceEvent.deltaMode === 1 ? 0.05 : $.sourceEvent.deltaMode ? 1 : 2e-3) * c, N = w[2] * Math.pow(2, C);
      t.scaleTo(N);
    };
    let b = [0, 0];
    const x = ($) => {
      ($.sourceEvent.type === "mousedown" || $.sourceEvent.type === "touchstart") && (b = [
        $.sourceEvent.clientX ?? $.sourceEvent.touches[0].clientX,
        $.sourceEvent.clientY ?? $.sourceEvent.touches[0].clientY
      ]);
    }, k = ($) => {
      const w = n();
      if ($.sourceEvent.type !== "mousemove" && $.sourceEvent.type !== "touchmove" || !t)
        return;
      const C = [
        $.sourceEvent.clientX ?? $.sourceEvent.touches[0].clientX,
        $.sourceEvent.clientY ?? $.sourceEvent.touches[0].clientY
      ], N = [C[0] - b[0], C[1] - b[1]];
      b = C;
      const P = r() * Math.max(w[2], Math.log(w[2])) * (g ? -1 : 1), M = {
        x: w[0] - N[0] * P,
        y: w[1] - N[1] * P
      }, z = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: M.x,
        y: M.y,
        zoom: w[2]
      }, z, a);
    }, v = Uc().on("start", x).on("zoom", d ? k : null).on("zoom.wheel", f ? h : null);
    o.call(v, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: jt
  };
}
const Lm = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, cs = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Ns = ({ x: e, y: t, zoom: n }) => as.translate(e, t).scale(n), Er = (e, t) => e.target.closest(`.${t}`), md = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), Ps = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, yd = (e) => {
  const t = e.ctrlKey && Li() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function Tm({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (Er(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const d = n.property("__zoom").k || 1;
    if (c.ctrlKey && s) {
      const x = jt(c), k = yd(c), v = d * Math.pow(2, k);
      r.scaleTo(n, v, x, c);
      return;
    }
    const f = c.deltaMode === 1 ? 20 : 1;
    let g = o === Kn.Vertical ? 0 : c.deltaX * f, h = o === Kn.Horizontal ? 0 : c.deltaY * f;
    !Li() && c.shiftKey && o !== Kn.Vertical && (g = c.deltaY * f, h = 0), r.translateBy(
      n,
      -(g / d) * i,
      -(h / d) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const b = cs(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, a == null || a(c, b)), e.isPanScrolling && (l == null || l(c, b), e.panScrollTimeout = setTimeout(() => {
      u == null || u(c, b), e.isPanScrolling = !1;
    }, 150));
  };
}
function Am({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    if (!t && r.type === "wheel" && !r.ctrlKey || Er(r, e))
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function Dm({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var o, i, s;
    if ((o = r.sourceEvent) != null && o.internal)
      return;
    const a = cs(r.transform);
    e.mouseButton = ((i = r.sourceEvent) == null ? void 0 : i.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = a, ((s = r.sourceEvent) == null ? void 0 : s.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, a));
  };
}
function Im({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var s, a;
    e.usedRightMouseButton = !!(n && md(t, e.mouseButton ?? 0)), (s = i.sourceEvent) != null && s.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((a = i.sourceEvent) != null && a.internal) && (o == null || o(i.sourceEvent, cs(i.transform)));
  };
}
function Rm({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    var a;
    if (!((a = s.sourceEvent) != null && a.internal) && (e.isZoomingOrPanning = !1, i && md(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && Lm(e.prevViewport, s.transform))) {
      const l = cs(s.transform);
      e.prevViewport = l, clearTimeout(e.timerId), e.timerId = setTimeout(
        () => {
          o == null || o(s.sourceEvent, l);
        },
        // we need a setTimeout for panOnScroll to supress multiple end events fired during scroll
        n ? 150 : 0
      );
    }
  };
}
function Zm({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: u }) {
  return (c) => {
    var d;
    const f = e || t, g = n && c.ctrlKey;
    if (c.button === 1 && c.type === "mousedown" && (Er(c, `${u}-flow__node`) || Er(c, `${u}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || s || Er(c, a) && c.type === "wheel" || Er(c, l) && (c.type !== "wheel" || o && c.type === "wheel" && !e) || !n && c.ctrlKey && c.type === "wheel")
      return !1;
    if (!n && c.type === "touchstart" && ((d = c.touches) == null ? void 0 : d.length) > 1)
      return c.preventDefault(), !1;
    if (!f && !o && !g && c.type === "wheel" || !r && (c.type === "mousedown" || c.type === "touchstart") || Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
      return !1;
    const h = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || c.type === "wheel") && h;
  };
}
function Bm({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: s, onPanZoomStart: a, onPanZoomEnd: l, onDraggingChange: u }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), f = Uc().clickDistance(!kn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), g = Rt(e).call(f);
  $({
    x: i.x,
    y: i.y,
    zoom: Yr(i.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], o);
  const h = g.on("wheel.zoom"), b = g.on("dblclick.zoom");
  f.wheelDelta(yd);
  function x(A, R) {
    return g ? new Promise((S) => {
      f == null || f.transform(Ps(g, R == null ? void 0 : R.duration, () => S(!0)), A);
    }) : Promise.resolve(!1);
  }
  function k({ noWheelClassName: A, noPanClassName: R, onPaneContextMenu: S, userSelectionActive: V, panOnScroll: _, panOnDrag: E, panOnScrollMode: O, panOnScrollSpeed: L, preventScrolling: Z, zoomOnPinch: W, zoomOnScroll: j, zoomOnDoubleClick: fe, zoomActivationKeyPressed: Q, lib: B, onTransformChange: ue }) {
    V && !c.isZoomingOrPanning && v();
    const we = _ && !Q && !V ? Tm({
      zoomPanValues: c,
      noWheelClassName: A,
      d3Selection: g,
      d3Zoom: f,
      panOnScrollMode: O,
      panOnScrollSpeed: L,
      zoomOnPinch: W,
      onPanZoomStart: a,
      onPanZoom: s,
      onPanZoomEnd: l
    }) : Am({
      noWheelClassName: A,
      preventScrolling: Z,
      d3ZoomHandler: h
    });
    if (g.on("wheel.zoom", we, { passive: !1 }), !V) {
      const ve = Dm({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: a
      });
      f.on("start", ve);
      const ne = Im({
        zoomPanValues: c,
        panOnDrag: E,
        onPaneContextMenu: !!S,
        onPanZoom: s,
        onTransformChange: ue
      });
      f.on("zoom", ne);
      const le = Rm({
        zoomPanValues: c,
        panOnDrag: E,
        panOnScroll: _,
        onPaneContextMenu: S,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      f.on("end", le);
    }
    const be = Zm({
      zoomActivationKeyPressed: Q,
      panOnDrag: E,
      zoomOnScroll: j,
      panOnScroll: _,
      zoomOnDoubleClick: fe,
      zoomOnPinch: W,
      userSelectionActive: V,
      noPanClassName: R,
      noWheelClassName: A,
      lib: B
    });
    f.filter(be), fe ? g.on("dblclick.zoom", b) : g.on("dblclick.zoom", null);
  }
  function v() {
    f.on("zoom", null);
  }
  async function $(A, R, S) {
    const V = Ns(A), _ = f == null ? void 0 : f.constrain()(V, R, S);
    return _ && await x(_), new Promise((E) => E(_));
  }
  async function w(A, R) {
    const S = Ns(A);
    return await x(S, R), new Promise((V) => V(S));
  }
  function C(A) {
    if (g) {
      const R = Ns(A), S = g.property("__zoom");
      (S.k !== A.zoom || S.x !== A.x || S.y !== A.y) && (f == null || f.transform(g, R, null, { sync: !0 }));
    }
  }
  function N() {
    const A = g ? Gc(g.node()) : { x: 0, y: 0, k: 1 };
    return { x: A.x, y: A.y, zoom: A.k };
  }
  function P(A, R) {
    return g ? new Promise((S) => {
      f == null || f.scaleTo(Ps(g, R == null ? void 0 : R.duration, () => S(!0)), A);
    }) : Promise.resolve(!1);
  }
  function M(A, R) {
    return g ? new Promise((S) => {
      f == null || f.scaleBy(Ps(g, R == null ? void 0 : R.duration, () => S(!0)), A);
    }) : Promise.resolve(!1);
  }
  function z(A) {
    f == null || f.scaleExtent(A);
  }
  function H(A) {
    f == null || f.translateExtent(A);
  }
  function D(A) {
    const R = !kn(A) || A < 0 ? 0 : A;
    f == null || f.clickDistance(R);
  }
  return {
    update: k,
    destroy: v,
    setViewport: w,
    setViewportConstrained: $,
    getViewport: N,
    scaleTo: P,
    scaleBy: M,
    setScaleExtent: z,
    setTranslateExtent: H,
    syncViewport: C,
    setClickDistance: D
  };
}
var Ul;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Ul || (Ul = {}));
var Xm = /* @__PURE__ */ oe('<div role="button" tabindex="-1"><!></div>');
function dr(e, t) {
  ce(t, !1);
  const [n, r] = Je(), o = () => J(fe, "$connectable", n), i = () => J(be, "$connectionRadius", n), s = () => J(ue, "$domNode", n), a = () => J(we, "$nodeLookup", n), l = () => J(B, "$connectionMode", n), u = () => J(le, "$lib", n), c = () => J(ge, "$autoPanOnConnect", n), d = () => J(Ye, "$flowId", n), f = () => J(ne, "$isValidConnectionStore", n), g = () => J(Ke, "$onedgecreate", n), h = () => J(ot, "$onConnectAction", n), b = () => J(Oe, "$onConnectStartAction", n), x = () => J(Xe, "$onConnectEndAction", n), k = () => J(ve, "$viewport", n), v = () => J(nt, "$connection", n), $ = () => J(pe, "$edges", n), w = () => J(Ee, "$connectionLookup", n), C = te(), N = te(), P = te(), M = te(), z = te(), H = te(), D = te(), A = te();
  let R = y(t, "id", 12, void 0), S = y(t, "type", 12, "source"), V = y(t, "position", 28, () => Ce.Top), _ = y(t, "style", 12, void 0), E = y(t, "isValidConnection", 12, void 0), O = y(t, "onconnect", 12, void 0), L = y(t, "ondisconnect", 12, void 0), Z = y(t, "isConnectable", 12, void 0), W = y(t, "class", 12, void 0);
  const j = ar("svelteflow__node_id"), fe = ar("svelteflow__node_connectable"), Q = je(), {
    connectionMode: B,
    domNode: ue,
    nodeLookup: we,
    connectionRadius: be,
    viewport: ve,
    isValidConnection: ne,
    lib: le,
    addEdge: De,
    onedgecreate: Ke,
    panBy: Ie,
    cancelConnection: Be,
    updateConnection: Y,
    autoPanOnConnect: ge,
    edges: pe,
    connectionLookup: Ee,
    onconnect: ot,
    onconnectstart: Oe,
    onconnectend: Xe,
    flowId: Ye,
    connection: nt
  } = Q;
  function gt(Ne) {
    const at = sd(Ne);
    (at && Ne.button === 0 || !at) && zm.onPointerDown(Ne, {
      handleId: p(P),
      nodeId: j,
      isTarget: p(C),
      connectionRadius: i(),
      domNode: s(),
      nodeLookup: a(),
      connectionMode: l(),
      lib: u(),
      autoPanOnConnect: c(),
      flowId: d(),
      isValidConnection: E() ?? f(),
      updateConnection: Y,
      cancelConnection: Be,
      panBy: Ie,
      onConnect: (xe) => {
        var He;
        const it = g() ? g()(xe) : xe;
        it && (De(it), (He = h()) == null || He(xe));
      },
      onConnectStart: (xe, He) => {
        var it;
        (it = b()) == null || it(xe, {
          nodeId: He.nodeId,
          handleId: He.handleId,
          handleType: He.handleType
        });
      },
      onConnectEnd: (xe, He) => {
        var it;
        (it = x()) == null || it(xe, He);
      },
      getTransform: () => [
        k().x,
        k().y,
        k().zoom
      ],
      getFromHandle: () => v().fromHandle
    });
  }
  let ee = te(null), Pe = te();
  ae(() => G(S()), () => {
    U(C, S() === "target");
  }), ae(
    () => (G(Z()), o()),
    () => {
      U(N, Z() !== void 0 ? Z() : o());
    }
  ), ae(() => G(R()), () => {
    U(P, R() || null);
  }), ae(
    () => (G(O()), G(L()), $(), w(), G(S()), G(R())),
    () => {
      (O() || L()) && ($(), U(Pe, w().get(`${j}-${S()}${R() ? `-${R()}` : ""}`)));
    }
  ), ae(
    () => (p(ee), p(Pe), G(L()), G(O())),
    () => {
      if (p(ee) && !G0(p(Pe), p(ee))) {
        const Ne = p(Pe) ?? /* @__PURE__ */ new Map();
        Al(p(ee), Ne, L()), Al(Ne, p(ee), O());
      }
      U(ee, p(Pe) ?? /* @__PURE__ */ new Map());
    }
  ), ae(() => v(), () => {
    U(M, !!v().fromHandle);
  }), ae(
    () => (v(), G(S()), p(P)),
    () => {
      var Ne, at, xe;
      U(z, ((Ne = v().fromHandle) == null ? void 0 : Ne.nodeId) === j && ((at = v().fromHandle) == null ? void 0 : at.type) === S() && ((xe = v().fromHandle) == null ? void 0 : xe.id) === p(P));
    }
  ), ae(
    () => (v(), G(S()), p(P)),
    () => {
      var Ne, at, xe;
      U(H, ((Ne = v().toHandle) == null ? void 0 : Ne.nodeId) === j && ((at = v().toHandle) == null ? void 0 : at.type) === S() && ((xe = v().toHandle) == null ? void 0 : xe.id) === p(P));
    }
  ), ae(
    () => (l(), v(), G(S()), p(P)),
    () => {
      var Ne, at, xe;
      U(D, l() === ur.Strict ? ((Ne = v().fromHandle) == null ? void 0 : Ne.type) !== S() : j !== ((at = v().fromHandle) == null ? void 0 : at.nodeId) || p(P) !== ((xe = v().fromHandle) == null ? void 0 : xe.id));
    }
  ), ae(() => (p(H), v()), () => {
    U(A, p(H) && v().isValid);
  }), ft(), Ve();
  var re = Xm();
  se(re, "data-nodeid", j);
  var bn = q(re);
  ht(bn, t, "default", {}), F(re), Se(
    (Ne) => {
      se(re, "data-handleid", p(P)), se(re, "data-handlepos", V()), se(re, "data-id", `${d() ?? ""}-${j ?? ""}-${R() || ""}-${S() ?? ""}`), Zr(re, yn(Ne)), se(re, "style", _()), et(re, "valid", p(A)), et(re, "connectingto", p(H)), et(re, "connectingfrom", p(z)), et(re, "source", !p(C)), et(re, "target", p(C)), et(re, "connectablestart", p(N)), et(re, "connectableend", p(N)), et(re, "connectable", p(N)), et(re, "connectionindicator", p(N) && (!p(M) || p(D)));
    },
    [
      () => xt([
        "svelte-flow__handle",
        `svelte-flow__handle-${V()}`,
        "nodrag",
        "nopan",
        V(),
        W()
      ])
    ],
    he
  ), Fe("mousedown", re, gt), Fe("touchstart", re, gt), T(e, re);
  var Yt = de({
    get id() {
      return R();
    },
    set id(Ne) {
      R(Ne), m();
    },
    get type() {
      return S();
    },
    set type(Ne) {
      S(Ne), m();
    },
    get position() {
      return V();
    },
    set position(Ne) {
      V(Ne), m();
    },
    get style() {
      return _();
    },
    set style(Ne) {
      _(Ne), m();
    },
    get isValidConnection() {
      return E();
    },
    set isValidConnection(Ne) {
      E(Ne), m();
    },
    get onconnect() {
      return O();
    },
    set onconnect(Ne) {
      O(Ne), m();
    },
    get ondisconnect() {
      return L();
    },
    set ondisconnect(Ne) {
      L(Ne), m();
    },
    get isConnectable() {
      return Z();
    },
    set isConnectable(Ne) {
      Z(Ne), m();
    },
    get class() {
      return W();
    },
    set class(Ne) {
      W(Ne), m();
    }
  });
  return r(), Yt;
}
ie(
  dr,
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
var Ym = /* @__PURE__ */ oe("<!> <!>", 1);
function Ai(e, t) {
  const n = Qe(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Qe(n, ["data", "targetPosition", "sourcePosition"]), ce(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "targetPosition", 12, void 0), i = y(t, "sourcePosition", 12, void 0);
  Ve();
  var s = Ym(), a = ye(s);
  const l = /* @__PURE__ */ he(() => o() ?? Ce.Top);
  dr(a, {
    type: "target",
    get position() {
      return p(l);
    }
  });
  var u = X(a), c = X(u);
  const d = /* @__PURE__ */ he(() => i() ?? Ce.Bottom);
  return dr(c, {
    type: "source",
    get position() {
      return p(d);
    }
  }), Se(() => {
    var f;
    return mn(u, ` ${((f = r()) == null ? void 0 : f.label) ?? ""} `);
  }), T(e, s), de({
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
ie(
  Ai,
  {
    data: {},
    targetPosition: {},
    sourcePosition: {}
  },
  [],
  [],
  !0
);
var Km = /* @__PURE__ */ oe(" <!>", 1);
function wd(e, t) {
  const n = Qe(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Qe(n, ["data", "sourcePosition"]), ce(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "sourcePosition", 12, void 0);
  Ve(), Ae();
  var i = Km(), s = ye(i), a = X(s);
  const l = /* @__PURE__ */ he(() => o() ?? Ce.Bottom);
  return dr(a, {
    type: "source",
    get position() {
      return p(l);
    }
  }), Se(() => {
    var u;
    return mn(s, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), T(e, i), de({
    get data() {
      return r();
    },
    set data(u) {
      r(u), m();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(u) {
      o(u), m();
    }
  });
}
ie(wd, { data: {}, sourcePosition: {} }, [], [], !0);
var Wm = /* @__PURE__ */ oe(" <!>", 1);
function bd(e, t) {
  const n = Qe(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Qe(n, ["data", "targetPosition"]), ce(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "targetPosition", 12, void 0);
  Ve(), Ae();
  var i = Wm(), s = ye(i), a = X(s);
  const l = /* @__PURE__ */ he(() => o() ?? Ce.Top);
  return dr(a, {
    type: "target",
    get position() {
      return p(l);
    }
  }), Se(() => {
    var u;
    return mn(s, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), T(e, i), de({
    get data() {
      return r();
    },
    set data(u) {
      r(u), m();
    },
    get targetPosition() {
      return o();
    },
    set targetPosition(u) {
      o(u), m();
    }
  });
}
ie(bd, { data: {}, targetPosition: {} }, [], [], !0);
function xd(e, t) {
  const n = Qe(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Qe(n, []);
}
ie(xd, {}, [], [], !0);
function Jl(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function Di(e, { target: t, domNode: n }) {
  return Jl(e, n, t), {
    async update({ target: r, domNode: o }) {
      Jl(e, o, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var Fm = /* @__PURE__ */ oe("<div><!></div>");
function $d(e, t) {
  ce(t, !1);
  const [n, r] = Je(), o = () => J(i, "$domNode", n), { domNode: i } = je();
  Ve();
  var s = Fm(), a = q(s);
  ht(a, t, "default", {}), F(s), pt(s, (l, u) => Di == null ? void 0 : Di(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), T(e, s), de(), r();
}
ie($d, {}, ["default"], [], !0);
function _d() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: i, elementsSelectable: s } = je();
  return (a) => {
    const l = K(e).get(a);
    if (!l) {
      console.warn("012", eo.error012(a));
      return;
    }
    (l.selectable || K(s) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && K(r) && i({ nodes: [], edges: [l] }) : o([a]));
  };
}
var qm = /* @__PURE__ */ oe('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function Cd(e, t) {
  ce(t, !1);
  let n = y(t, "style", 12, void 0), r = y(t, "x", 12, void 0), o = y(t, "y", 12, void 0);
  const i = _d(), s = ar("svelteflow__edge_id");
  return Ve(), $d(e, {
    children: (a, l) => {
      var u = qm(), c = q(u);
      ht(c, t, "default", {}), F(u), Se(() => {
        se(u, "style", "pointer-events: all;" + n()), rt(u, "transform", `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`);
      }), Fe("keyup", u, () => {
      }), Fe("click", u, () => {
        s && i(s);
      }), T(a, u);
    },
    $$slots: { default: !0 }
  }), de({
    get style() {
      return n();
    },
    set style(a) {
      n(a), m();
    },
    get x() {
      return r();
    },
    set x(a) {
      r(a), m();
    },
    get y() {
      return o();
    },
    set y(a) {
      o(a), m();
    }
  });
}
ie(Cd, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var jm = /* @__PURE__ */ ke('<path fill="none" class="svelte-flow__edge-interaction"></path>'), Gm = /* @__PURE__ */ ke('<path fill="none"></path><!><!>', 1);
function Io(e, t) {
  ce(t, !1);
  let n = y(t, "id", 12, void 0), r = y(t, "path", 12), o = y(t, "label", 12, void 0), i = y(t, "labelX", 12, void 0), s = y(t, "labelY", 12, void 0), a = y(t, "labelStyle", 12, void 0), l = y(t, "markerStart", 12, void 0), u = y(t, "markerEnd", 12, void 0), c = y(t, "style", 12, void 0), d = y(t, "interactionWidth", 12, 20), f = y(t, "class", 12, void 0), g = d() === void 0 ? 20 : d();
  Ve();
  var h = Gm(), b = ye(h), x = X(b);
  {
    var k = (w) => {
      var C = jm();
      se(C, "stroke-opacity", 0), se(C, "stroke-width", g), Se(() => se(C, "d", r())), T(w, C);
    };
    $e(x, (w) => {
      g && w(k);
    });
  }
  var v = X(x);
  {
    var $ = (w) => {
      Cd(w, {
        get x() {
          return i();
        },
        get y() {
          return s();
        },
        get style() {
          return a();
        },
        children: (C, N) => {
          Ae();
          var P = Ge();
          Se(() => mn(P, o())), T(C, P);
        },
        $$slots: { default: !0 }
      });
    };
    $e(v, (w) => {
      o() && w($);
    });
  }
  return Se(
    (w) => {
      se(b, "id", n()), se(b, "d", r()), mr(b, yn(w)), se(b, "marker-start", l()), se(b, "marker-end", u()), se(b, "style", c());
    },
    [
      () => xt(["svelte-flow__edge-path", f()])
    ],
    he
  ), T(e, h), de({
    get id() {
      return n();
    },
    set id(w) {
      n(w), m();
    },
    get path() {
      return r();
    },
    set path(w) {
      r(w), m();
    },
    get label() {
      return o();
    },
    set label(w) {
      o(w), m();
    },
    get labelX() {
      return i();
    },
    set labelX(w) {
      i(w), m();
    },
    get labelY() {
      return s();
    },
    set labelY(w) {
      s(w), m();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(w) {
      a(w), m();
    },
    get markerStart() {
      return l();
    },
    set markerStart(w) {
      l(w), m();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(w) {
      u(w), m();
    },
    get style() {
      return c();
    },
    set style(w) {
      c(w), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(w) {
      d(w), m();
    },
    get class() {
      return f();
    },
    set class(w) {
      f(w), m();
    }
  });
}
ie(
  Io,
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
function Ii(e, t) {
  const n = Qe(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Qe(n, [
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
  ]), ce(t, !1);
  const r = te(), o = te(), i = te();
  let s = y(t, "label", 12, void 0), a = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), f = y(t, "sourceX", 12), g = y(t, "sourceY", 12), h = y(t, "sourcePosition", 12), b = y(t, "targetX", 12), x = y(t, "targetY", 12), k = y(t, "targetPosition", 12);
  return ae(
    () => (p(r), p(o), p(i), G(f()), G(g()), G(b()), G(x()), G(h()), G(k())),
    () => {
      ((v) => (U(r, v[0]), U(o, v[1]), U(i, v[2])))(ad({
        sourceX: f(),
        sourceY: g(),
        targetX: b(),
        targetY: x(),
        sourcePosition: h(),
        targetPosition: k()
      }));
    }
  ), ft(), Ve(), Io(e, {
    get path() {
      return p(r);
    },
    get labelX() {
      return p(o);
    },
    get labelY() {
      return p(i);
    },
    get label() {
      return s();
    },
    get labelStyle() {
      return a();
    },
    get markerStart() {
      return u();
    },
    get markerEnd() {
      return c();
    },
    get interactionWidth() {
      return d();
    },
    get style() {
      return l();
    }
  }), de({
    get label() {
      return s();
    },
    set label(v) {
      s(v), m();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(v) {
      a(v), m();
    },
    get style() {
      return l();
    },
    set style(v) {
      l(v), m();
    },
    get markerStart() {
      return u();
    },
    set markerStart(v) {
      u(v), m();
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
      return g();
    },
    set sourceY(v) {
      g(v), m();
    },
    get sourcePosition() {
      return h();
    },
    set sourcePosition(v) {
      h(v), m();
    },
    get targetX() {
      return b();
    },
    set targetX(v) {
      b(v), m();
    },
    get targetY() {
      return x();
    },
    set targetY(v) {
      x(v), m();
    },
    get targetPosition() {
      return k();
    },
    set targetPosition(v) {
      k(v), m();
    }
  });
}
ie(
  Ii,
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
function kd(e, t) {
  const n = Qe(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Qe(n, [
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
  ]), ce(t, !1);
  const r = te(), o = te(), i = te();
  let s = y(t, "label", 12, void 0), a = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), f = y(t, "sourceX", 12), g = y(t, "sourceY", 12), h = y(t, "sourcePosition", 12), b = y(t, "targetX", 12), x = y(t, "targetY", 12), k = y(t, "targetPosition", 12);
  return ae(
    () => (p(r), p(o), p(i), G(f()), G(g()), G(b()), G(x()), G(h()), G(k())),
    () => {
      ((v) => (U(r, v[0]), U(o, v[1]), U(i, v[2])))(Ti({
        sourceX: f(),
        sourceY: g(),
        targetX: b(),
        targetY: x(),
        sourcePosition: h(),
        targetPosition: k()
      }));
    }
  ), ft(), Ve(), Io(e, {
    get path() {
      return p(r);
    },
    get labelX() {
      return p(o);
    },
    get labelY() {
      return p(i);
    },
    get label() {
      return s();
    },
    get labelStyle() {
      return a();
    },
    get markerStart() {
      return u();
    },
    get markerEnd() {
      return c();
    },
    get interactionWidth() {
      return d();
    },
    get style() {
      return l();
    }
  }), de({
    get label() {
      return s();
    },
    set label(v) {
      s(v), m();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(v) {
      a(v), m();
    },
    get style() {
      return l();
    },
    set style(v) {
      l(v), m();
    },
    get markerStart() {
      return u();
    },
    set markerStart(v) {
      u(v), m();
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
      return g();
    },
    set sourceY(v) {
      g(v), m();
    },
    get sourcePosition() {
      return h();
    },
    set sourcePosition(v) {
      h(v), m();
    },
    get targetX() {
      return b();
    },
    set targetX(v) {
      b(v), m();
    },
    get targetY() {
      return x();
    },
    set targetY(v) {
      x(v), m();
    },
    get targetPosition() {
      return k();
    },
    set targetPosition(v) {
      k(v), m();
    }
  });
}
ie(
  kd,
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
function Sd(e, t) {
  const n = Qe(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Qe(n, [
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
  ]), ce(t, !1);
  const r = te(), o = te(), i = te();
  let s = y(t, "label", 12, void 0), a = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), f = y(t, "sourceX", 12), g = y(t, "sourceY", 12), h = y(t, "targetX", 12), b = y(t, "targetY", 12);
  return ae(
    () => (p(r), p(o), p(i), G(f()), G(g()), G(h()), G(b())),
    () => {
      ((x) => (U(r, x[0]), U(o, x[1]), U(i, x[2])))(oa({
        sourceX: f(),
        sourceY: g(),
        targetX: h(),
        targetY: b()
      }));
    }
  ), ft(), Ve(), Io(e, {
    get path() {
      return p(r);
    },
    get labelX() {
      return p(o);
    },
    get labelY() {
      return p(i);
    },
    get label() {
      return s();
    },
    get labelStyle() {
      return a();
    },
    get markerStart() {
      return u();
    },
    get markerEnd() {
      return c();
    },
    get interactionWidth() {
      return d();
    },
    get style() {
      return l();
    }
  }), de({
    get label() {
      return s();
    },
    set label(x) {
      s(x), m();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(x) {
      a(x), m();
    },
    get style() {
      return l();
    },
    set style(x) {
      l(x), m();
    },
    get markerStart() {
      return u();
    },
    set markerStart(x) {
      u(x), m();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(x) {
      c(x), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(x) {
      d(x), m();
    },
    get sourceX() {
      return f();
    },
    set sourceX(x) {
      f(x), m();
    },
    get sourceY() {
      return g();
    },
    set sourceY(x) {
      g(x), m();
    },
    get targetX() {
      return h();
    },
    set targetX(x) {
      h(x), m();
    },
    get targetY() {
      return b();
    },
    set targetY(x) {
      b(x), m();
    }
  });
}
ie(
  Sd,
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
function Ed(e, t) {
  const n = Qe(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Qe(n, [
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
  ]), ce(t, !1);
  const r = te(), o = te(), i = te();
  let s = y(t, "label", 12, void 0), a = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), f = y(t, "sourceX", 12), g = y(t, "sourceY", 12), h = y(t, "sourcePosition", 12), b = y(t, "targetX", 12), x = y(t, "targetY", 12), k = y(t, "targetPosition", 12);
  return ae(
    () => (p(r), p(o), p(i), G(f()), G(g()), G(b()), G(x()), G(h()), G(k())),
    () => {
      ((v) => (U(r, v[0]), U(o, v[1]), U(i, v[2])))(Ti({
        sourceX: f(),
        sourceY: g(),
        targetX: b(),
        targetY: x(),
        sourcePosition: h(),
        targetPosition: k(),
        borderRadius: 0
      }));
    }
  ), ft(), Ve(), Io(e, {
    get path() {
      return p(r);
    },
    get labelX() {
      return p(o);
    },
    get labelY() {
      return p(i);
    },
    get label() {
      return s();
    },
    get labelStyle() {
      return a();
    },
    get markerStart() {
      return u();
    },
    get markerEnd() {
      return c();
    },
    get interactionWidth() {
      return d();
    },
    get style() {
      return l();
    }
  }), de({
    get label() {
      return s();
    },
    set label(v) {
      s(v), m();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(v) {
      a(v), m();
    },
    get style() {
      return l();
    },
    set style(v) {
      l(v), m();
    },
    get markerStart() {
      return u();
    },
    set markerStart(v) {
      u(v), m();
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
      return g();
    },
    set sourceY(v) {
      g(v), m();
    },
    get sourcePosition() {
      return h();
    },
    set sourcePosition(v) {
      h(v), m();
    },
    get targetX() {
      return b();
    },
    set targetX(v) {
      b(v), m();
    },
    get targetY() {
      return x();
    },
    set targetY(v) {
      x(v), m();
    },
    get targetPosition() {
      return k();
    },
    set targetPosition(v) {
      k(v), m();
    }
  });
}
ie(
  Ed,
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
function Um(e, t) {
  const n = e.set, r = t.set, o = K(e), i = K(t);
  let s = o.length === 0 && i.length > 0 ? i : o;
  e.set(s);
  const a = (l) => {
    const u = n(l);
    return s = u, r(s), u;
  };
  e.set = t.set = a, e.update = t.update = (l) => a(l(s));
}
function Jm(e, t) {
  const n = e.set, r = t.set;
  let o = K(t);
  e.set(o);
  const i = (s) => {
    n(s), r(s), o = s;
  };
  e.set = t.set = i, e.update = t.update = (s) => i(s(o));
}
const Qm = (e, t, n) => {
  if (!n)
    return;
  const r = K(e), o = t.set, i = n.set;
  let s = n ? K(n) : { x: 0, y: 0, zoom: 1 };
  t.set(s), t.set = (a) => (o(a), i(a), s = a, a), n.set = (a) => (r == null || r.syncViewport(a), o(a), i(a), s = a, a), t.update = (a) => {
    t.set(a(s));
  }, n.update = (a) => {
    n.set(a(s));
  };
}, e2 = (e, t, n, r = [0, 0], o = Oi) => {
  const { subscribe: i, set: s, update: a } = me([]);
  let l = e, u = {}, c = !0;
  const d = (b) => (ud(b, t, n, {
    elevateNodesOnSelect: c,
    nodeOrigin: r,
    nodeExtent: o,
    defaults: u,
    checkEquality: !1
  }), l = b, s(l), l), f = (b) => d(b(l)), g = (b) => {
    u = b;
  }, h = (b) => {
    c = b.elevateNodesOnSelect ?? c;
  };
  return d(l), {
    subscribe: i,
    set: d,
    update: f,
    setDefaultOptions: g,
    setOptions: h
  };
}, t2 = (e, t, n, r) => {
  const { subscribe: o, set: i, update: s } = me([]);
  let a = e, l = {};
  const u = (f) => {
    const g = l ? f.map((h) => ({ ...l, ...h })) : f;
    dd(t, n, g), a = g, i(a);
  }, c = (f) => u(f(a)), d = (f) => {
    l = f;
  };
  return u(a), {
    subscribe: o,
    set: u,
    update: c,
    setDefaultOptions: d
  };
}, Nd = {
  input: wd,
  output: bd,
  default: Ai,
  group: xd
}, Pd = {
  straight: Sd,
  smoothstep: kd,
  default: Ii,
  step: Ed
}, n2 = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) => {
  const a = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = i ?? [0, 0], f = s ?? Oi;
  ud(e, a, l, {
    nodeExtent: f,
    nodeOrigin: d,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), dd(u, c, t);
  let g = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const h = Ao(a, {
      filter: (b) => !!((b.width || b.initialWidth) && (b.height || b.initialHeight))
    });
    g = Ra(h, n, r, 0.5, 2, 0.1);
  }
  return {
    flowId: me(null),
    nodes: e2(e, a, l, d, f),
    nodeLookup: Dt(a),
    parentLookup: Dt(l),
    edgeLookup: Dt(c),
    visibleNodes: Dt([]),
    edges: t2(t, u, c),
    visibleEdges: Dt([]),
    connectionLookup: Dt(u),
    height: me(500),
    width: me(500),
    minZoom: me(0.5),
    maxZoom: me(2),
    nodeOrigin: me(d),
    nodeDragThreshold: me(1),
    nodeExtent: me(f),
    translateExtent: me(Oi),
    autoPanOnNodeDrag: me(!0),
    autoPanOnConnect: me(!0),
    fitViewOnInit: me(!1),
    fitViewOnInitDone: me(!1),
    fitViewOptions: me(void 0),
    panZoom: me(null),
    snapGrid: me(null),
    dragging: me(!1),
    selectionRect: me(null),
    selectionKeyPressed: me(!1),
    multiselectionKeyPressed: me(!1),
    deleteKeyPressed: me(!1),
    panActivationKeyPressed: me(!1),
    zoomActivationKeyPressed: me(!1),
    selectionRectMode: me(null),
    selectionMode: me(zi.Partial),
    nodeTypes: me(Nd),
    edgeTypes: me(Pd),
    viewport: me(g),
    connectionMode: me(ur.Strict),
    domNode: me(null),
    connection: Dt(ta),
    connectionLineType: me(Hr.Bezier),
    connectionRadius: me(20),
    isValidConnection: me(() => !0),
    nodesDraggable: me(!0),
    nodesConnectable: me(!0),
    elementsSelectable: me(!0),
    selectNodesOnDrag: me(!0),
    markers: Dt([]),
    defaultMarkerColor: me("#b1b1b7"),
    lib: Dt("svelte"),
    onlyRenderVisibleElements: me(!1),
    onerror: me(rd),
    ondelete: me(void 0),
    onedgecreate: me(void 0),
    onconnect: me(void 0),
    onconnectstart: me(void 0),
    onconnectend: me(void 0),
    onbeforedelete: me(void 0),
    nodesInitialized: me(!1),
    edgesInitialized: me(!1),
    viewportInitialized: me(!1),
    initialized: Dt(!1)
  };
};
function r2(e) {
  const t = Yn([
    e.edges,
    e.nodes,
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.viewport,
    e.width,
    e.height
  ], ([n, , r, o, i, s, a]) => o && s && a ? n.filter((l) => {
    const u = r.get(l.source), c = r.get(l.target);
    return u && c && lm({
      sourceNode: u,
      targetNode: c,
      width: s,
      height: a,
      transform: [i.x, i.y, i.zoom]
    });
  }) : n);
  return Yn([t, e.nodes, e.nodeLookup, e.connectionMode, e.onerror], ([n, , r, o, i]) => n.reduce((s, a) => {
    const l = r.get(a.source), u = r.get(a.target);
    if (!l || !u)
      return s;
    const c = hm({
      id: a.id,
      sourceNode: l,
      targetNode: u,
      sourceHandle: a.sourceHandle || null,
      targetHandle: a.targetHandle || null,
      connectionMode: o,
      onError: i
    });
    return c && s.push({
      ...a,
      zIndex: am({
        selected: a.selected,
        zIndex: a.zIndex,
        sourceNode: l,
        targetNode: u,
        elevateOnSelect: !1
      }),
      ...c
    }), s;
  }, []));
}
function o2(e) {
  return Yn([
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.width,
    e.height,
    e.viewport,
    e.nodes
  ], ([t, n, r, o, i]) => {
    const s = [i.x, i.y, i.zoom];
    return n ? Jc(t, { x: 0, y: 0, width: r, height: o }, s, !0) : Array.from(t.values());
  });
}
const ds = Symbol();
function Vd({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) {
  const a = n2({
    nodes: e,
    edges: t,
    width: n,
    height: r,
    fitView: o,
    nodeOrigin: i,
    nodeExtent: s
  });
  function l(_) {
    a.nodeTypes.set({
      ...Nd,
      ..._
    });
  }
  function u(_) {
    a.edgeTypes.set({
      ...Pd,
      ..._
    });
  }
  function c(_) {
    const E = K(a.edges);
    a.edges.set(dm(_, E));
  }
  const d = (_, E = !1) => {
    var O;
    const L = K(a.nodeLookup);
    for (const [Z, W] of _) {
      const j = (O = L.get(Z)) == null ? void 0 : O.internals.userNode;
      j && (j.position = W.position, j.dragging = E);
    }
    a.nodes.update((Z) => Z);
  };
  function f(_) {
    var E, O, L;
    const Z = K(a.nodeLookup), W = K(a.parentLookup), { changes: j, updatedInternals: fe } = _m(_, Z, K(a.parentLookup), K(a.domNode), K(a.nodeOrigin));
    if (fe) {
      if (wm(Z, W, { nodeOrigin: i, nodeExtent: s }), !K(a.fitViewOnInitDone) && K(a.fitViewOnInit)) {
        const Q = K(a.fitViewOptions), B = h({
          ...Q,
          nodes: Q == null ? void 0 : Q.nodes
        });
        a.fitViewOnInitDone.set(B);
      }
      for (const Q of j) {
        const B = (E = Z.get(Q.id)) == null ? void 0 : E.internals.userNode;
        if (B)
          switch (Q.type) {
            case "dimensions": {
              const ue = { ...B.measured, ...Q.dimensions };
              Q.setAttributes && (B.width = ((O = Q.dimensions) == null ? void 0 : O.width) ?? B.width, B.height = ((L = Q.dimensions) == null ? void 0 : L.height) ?? B.height), B.measured = ue;
              break;
            }
            case "position":
              B.position = Q.position ?? B.position;
              break;
          }
      }
      a.nodes.update((Q) => Q), K(a.nodesInitialized) || a.nodesInitialized.set(!0);
    }
  }
  function g(_) {
    const E = K(a.panZoom), O = K(a.domNode);
    if (!E || !O)
      return Promise.resolve(!1);
    const { width: L, height: Z } = Za(O), W = Dl(K(a.nodeLookup), _);
    return Il({
      nodes: W,
      width: L,
      height: Z,
      minZoom: K(a.minZoom),
      maxZoom: K(a.maxZoom),
      panZoom: E
    }, _);
  }
  function h(_) {
    const E = K(a.panZoom);
    if (!E)
      return !1;
    const O = Dl(K(a.nodeLookup), _);
    return Il({
      nodes: O,
      width: K(a.width),
      height: K(a.height),
      minZoom: K(a.minZoom),
      maxZoom: K(a.maxZoom),
      panZoom: E
    }, _), O.size > 0;
  }
  function b(_, E) {
    const O = K(a.panZoom);
    return O ? O.scaleBy(_, E) : Promise.resolve(!1);
  }
  function x(_) {
    return b(1.2, _);
  }
  function k(_) {
    return b(1 / 1.2, _);
  }
  function v(_) {
    const E = K(a.panZoom);
    E && (E.setScaleExtent([_, K(a.maxZoom)]), a.minZoom.set(_));
  }
  function $(_) {
    const E = K(a.panZoom);
    E && (E.setScaleExtent([K(a.minZoom), _]), a.maxZoom.set(_));
  }
  function w(_) {
    const E = K(a.panZoom);
    E && (E.setTranslateExtent(_), a.translateExtent.set(_));
  }
  function C(_) {
    let E = !1;
    return _.forEach((O) => {
      O.selected && (O.selected = !1, E = !0);
    }), E;
  }
  function N(_) {
    var E;
    (E = K(a.panZoom)) == null || E.setClickDistance(_);
  }
  function P(_) {
    C((_ == null ? void 0 : _.nodes) || K(a.nodes)) && a.nodes.set(K(a.nodes)), C((_ == null ? void 0 : _.edges) || K(a.edges)) && a.edges.set(K(a.edges));
  }
  a.deleteKeyPressed.subscribe(async (_) => {
    var E;
    if (_) {
      const O = K(a.nodes), L = K(a.edges), Z = O.filter((Q) => Q.selected), W = L.filter((Q) => Q.selected), { nodes: j, edges: fe } = await Qc({
        nodesToRemove: Z,
        edgesToRemove: W,
        nodes: O,
        edges: L,
        onBeforeDelete: K(a.onbeforedelete)
      });
      (j.length || fe.length) && (a.nodes.update((Q) => Q.filter((B) => !j.some((ue) => ue.id === B.id))), a.edges.update((Q) => Q.filter((B) => !fe.some((ue) => ue.id === B.id))), (E = K(a.ondelete)) == null || E({
        nodes: j,
        edges: fe
      }));
    }
  });
  function M(_) {
    const E = K(a.multiselectionKeyPressed);
    a.nodes.update((O) => O.map((L) => {
      const Z = _.includes(L.id), W = E && L.selected || Z;
      return L.selected = W, L;
    })), E || a.edges.update((O) => O.map((L) => (L.selected = !1, L)));
  }
  function z(_) {
    const E = K(a.multiselectionKeyPressed);
    a.edges.update((O) => O.map((L) => {
      const Z = _.includes(L.id), W = E && L.selected || Z;
      return L.selected = W, L;
    })), E || a.nodes.update((O) => O.map((L) => (L.selected = !1, L)));
  }
  function H(_) {
    var E;
    const O = (E = K(a.nodes)) == null ? void 0 : E.find((L) => L.id === _);
    if (!O) {
      console.warn("012", eo.error012(_));
      return;
    }
    a.selectionRect.set(null), a.selectionRectMode.set(null), O.selected ? O.selected && K(a.multiselectionKeyPressed) && P({ nodes: [O], edges: [] }) : M([_]);
  }
  function D(_) {
    const E = K(a.viewport);
    return Cm({
      delta: _,
      panZoom: K(a.panZoom),
      transform: [E.x, E.y, E.zoom],
      translateExtent: K(a.translateExtent),
      width: K(a.width),
      height: K(a.height)
    });
  }
  const A = me(ta), R = (_) => {
    A.set({ ..._ });
  };
  function S() {
    A.set(ta);
  }
  function V() {
    a.fitViewOnInitDone.set(!1), a.selectionRect.set(null), a.selectionRectMode.set(null), a.snapGrid.set(null), a.isValidConnection.set(() => !0), P(), S();
  }
  return {
    // state
    ...a,
    // derived state
    visibleEdges: r2(a),
    visibleNodes: o2(a),
    connection: Yn([A, a.viewport], ([_, E]) => _.inProgress ? {
      ..._,
      to: Do(_.to, [E.x, E.y, E.zoom])
    } : { ..._ }),
    markers: Yn([a.edges, a.defaultMarkerColor, a.flowId], ([_, E, O]) => vm(_, { defaultColor: E, id: O })),
    initialized: (() => {
      let _ = !1;
      const E = K(a.nodes).length, O = K(a.edges).length;
      return Yn([a.nodesInitialized, a.edgesInitialized, a.viewportInitialized], ([L, Z, W]) => _ || (E === 0 ? _ = W : O === 0 ? _ = W && L : _ = W && L && Z, _));
    })(),
    // actions
    syncNodeStores: (_) => Um(a.nodes, _),
    syncEdgeStores: (_) => Jm(a.edges, _),
    syncViewport: (_) => Qm(a.panZoom, a.viewport, _),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: d,
    updateNodeInternals: f,
    zoomIn: x,
    zoomOut: k,
    fitView: (_) => g(_),
    setMinZoom: v,
    setMaxZoom: $,
    setTranslateExtent: w,
    setPaneClickDistance: N,
    unselectNodesAndEdges: P,
    addSelectedNodes: M,
    addSelectedEdges: z,
    handleNodeSelection: H,
    panBy: D,
    updateConnection: R,
    cancelConnection: S,
    reset: V
  };
}
function je() {
  const e = ar(ds);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function i2({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) {
  const a = Vd({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s });
  return Ir(ds, {
    getStore: () => a
  }), a;
}
function Ql(e, t) {
  const { panZoom: n, minZoom: r, maxZoom: o, initialViewport: i, viewport: s, dragging: a, translateExtent: l, paneClickDistance: u } = t, c = Bm({
    domNode: e,
    minZoom: r,
    maxZoom: o,
    translateExtent: l,
    viewport: i,
    paneClickDistance: u,
    onDraggingChange: a.set
  }), d = c.getViewport();
  return s.set(d), n.set(c), c.update(t), {
    update(f) {
      c.update(f);
    }
  };
}
var s2 = /* @__PURE__ */ oe('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const a2 = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function Md(e, t) {
  ce(t, !1), tt(e, a2);
  const [n, r] = Je(), o = () => J(O, "$panActivationKeyPressed", n), i = () => J(R, "$minZoom", n), s = () => J(S, "$maxZoom", n), a = () => J(L, "$zoomActivationKeyPressed", n), l = () => J(A, "$selectionRect", n), u = () => J(_, "$translateExtent", n), c = () => J(E, "$lib", n), d = te(), f = te(), g = te();
  let h = y(t, "initialViewport", 12, void 0), b = y(t, "onMoveStart", 12, void 0), x = y(t, "onMove", 12, void 0), k = y(t, "onMoveEnd", 12, void 0), v = y(t, "panOnScrollMode", 12), $ = y(t, "preventScrolling", 12), w = y(t, "zoomOnScroll", 12), C = y(t, "zoomOnDoubleClick", 12), N = y(t, "zoomOnPinch", 12), P = y(t, "panOnDrag", 12), M = y(t, "panOnScroll", 12), z = y(t, "paneClickDistance", 12);
  const {
    viewport: H,
    panZoom: D,
    selectionRect: A,
    minZoom: R,
    maxZoom: S,
    dragging: V,
    translateExtent: _,
    lib: E,
    panActivationKeyPressed: O,
    zoomActivationKeyPressed: L,
    viewportInitialized: Z
  } = je(), W = (B) => H.set({
    x: B[0],
    y: B[1],
    zoom: B[2]
  });
  yr(() => {
    ki(Z, !0);
  }), ae(() => G(h()), () => {
    U(d, h() || { x: 0, y: 0, zoom: 1 });
  }), ae(
    () => (o(), G(P())),
    () => {
      U(f, o() || P());
    }
  ), ae(
    () => (o(), G(M())),
    () => {
      U(g, o() || M());
    }
  ), ft(), Ve();
  var j = s2(), fe = q(j);
  ht(fe, t, "default", {}), F(j), pt(j, (B, ue) => Ql == null ? void 0 : Ql(B, ue), () => ({
    viewport: H,
    minZoom: i(),
    maxZoom: s(),
    initialViewport: p(d),
    dragging: V,
    panZoom: D,
    onPanZoomStart: b(),
    onPanZoom: x(),
    onPanZoomEnd: k(),
    zoomOnScroll: w(),
    zoomOnDoubleClick: C(),
    zoomOnPinch: N(),
    panOnScroll: p(g),
    panOnDrag: p(f),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: v() || Kn.Free,
    zoomActivationKeyPressed: a(),
    preventScrolling: typeof $() == "boolean" ? $() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: z(),
    onTransformChange: W
  })), T(e, j);
  var Q = de({
    get initialViewport() {
      return h();
    },
    set initialViewport(B) {
      h(B), m();
    },
    get onMoveStart() {
      return b();
    },
    set onMoveStart(B) {
      b(B), m();
    },
    get onMove() {
      return x();
    },
    set onMove(B) {
      x(B), m();
    },
    get onMoveEnd() {
      return k();
    },
    set onMoveEnd(B) {
      k(B), m();
    },
    get panOnScrollMode() {
      return v();
    },
    set panOnScrollMode(B) {
      v(B), m();
    },
    get preventScrolling() {
      return $();
    },
    set preventScrolling(B) {
      $(B), m();
    },
    get zoomOnScroll() {
      return w();
    },
    set zoomOnScroll(B) {
      w(B), m();
    },
    get zoomOnDoubleClick() {
      return C();
    },
    set zoomOnDoubleClick(B) {
      C(B), m();
    },
    get zoomOnPinch() {
      return N();
    },
    set zoomOnPinch(B) {
      N(B), m();
    },
    get panOnDrag() {
      return P();
    },
    set panOnDrag(B) {
      P(B), m();
    },
    get panOnScroll() {
      return M();
    },
    set panOnScroll(B) {
      M(B), m();
    },
    get paneClickDistance() {
      return z();
    },
    set paneClickDistance(B) {
      z(B), m();
    }
  });
  return r(), Q;
}
ie(
  Md,
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
function eu(e, t) {
  return (n) => {
    n.target === t && (e == null || e(n));
  };
}
function tu(e) {
  return (t) => {
    const n = e.includes(t.id);
    return t.selected !== n && (t.selected = n), t;
  };
}
var l2 = /* @__PURE__ */ oe('<div class="svelte-flow__pane svelte-1esy7hx"><!></div>');
const u2 = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function Od(e, t) {
  ce(t, !1), tt(e, u2);
  const [n, r] = Je(), o = () => J(S, "$panActivationKeyPressed", n), i = () => J(A, "$selectionKeyPressed", n), s = () => J(H, "$selectionRect", n), a = () => J(z, "$elementsSelectable", n), l = () => J(D, "$selectionRectMode", n), u = () => J(N, "$edges", n), c = () => J(C, "$nodeLookup", n), d = () => J(P, "$viewport", n), f = () => J(R, "$selectionMode", n), g = () => J(M, "$dragging", n), h = te(), b = te(), x = te();
  let k = y(t, "panOnDrag", 12, void 0), v = y(t, "selectionOnDrag", 12, void 0);
  const $ = ns(), {
    nodes: w,
    nodeLookup: C,
    edges: N,
    viewport: P,
    dragging: M,
    elementsSelectable: z,
    selectionRect: H,
    selectionRectMode: D,
    selectionKeyPressed: A,
    selectionMode: R,
    panActivationKeyPressed: S,
    unselectNodesAndEdges: V
  } = je();
  let _ = te(), E = null, O = [], L = !1;
  function Z(ne) {
    if (L) {
      L = !1;
      return;
    }
    $("paneclick", { event: ne }), V(), D.set(null);
  }
  function W(ne) {
    var le, De;
    if (E = p(_).getBoundingClientRect(), !z || !p(b) || ne.button !== 0 || ne.target !== p(_) || !E)
      return;
    (De = (le = ne.target) == null ? void 0 : le.setPointerCapture) == null || De.call(le, ne.pointerId);
    const { x: Ke, y: Ie } = Pn(ne, E);
    V(), H.set({
      width: 0,
      height: 0,
      startX: Ke,
      startY: Ie,
      x: Ke,
      y: Ie
    });
  }
  function j(ne) {
    if (!p(b) || !E || !s())
      return;
    L = !0;
    const le = Pn(ne, E), De = s().startX ?? 0, Ke = s().startY ?? 0, Ie = {
      ...s(),
      x: le.x < De ? le.x : De,
      y: le.y < Ke ? le.y : Ke,
      width: Math.abs(le.x - De),
      height: Math.abs(le.y - Ke)
    }, Be = O.map((Ee) => Ee.id), Y = na(O, u()).map((Ee) => Ee.id);
    O = Jc(
      c(),
      Ie,
      [
        d().x,
        d().y,
        d().zoom
      ],
      f() === zi.Partial,
      !0
    );
    const ge = na(O, u()).map((Ee) => Ee.id), pe = O.map((Ee) => Ee.id);
    (Be.length !== pe.length || pe.some((Ee) => !Be.includes(Ee))) && w.update((Ee) => Ee.map(tu(pe))), (Y.length !== ge.length || ge.some((Ee) => !Y.includes(Ee))) && N.update((Ee) => Ee.map(tu(ge))), D.set("user"), H.set(Ie);
  }
  function fe(ne) {
    var le, De;
    ne.button === 0 && ((De = (le = ne.target) == null ? void 0 : le.releasePointerCapture) == null || De.call(le, ne.pointerId), !p(b) && l() === "user" && ne.target === p(_) && (Z == null || Z(ne)), H.set(null), O.length > 0 && ki(D, "nodes"), i() && (L = !1));
  }
  const Q = (ne) => {
    var le;
    if (Array.isArray(p(h)) && (le = p(h)) != null && le.includes(2)) {
      ne.preventDefault();
      return;
    }
    $("panecontextmenu", { event: ne });
  };
  ae(
    () => (o(), G(k())),
    () => {
      U(h, o() || k());
    }
  ), ae(
    () => (i(), s(), G(v()), p(h)),
    () => {
      U(b, i() || s() || v() && p(h) !== !0);
    }
  ), ae(
    () => (a(), p(b), l()),
    () => {
      U(x, a() && (p(b) || l() === "user"));
    }
  ), ft(), Ve();
  var B = l2(), ue = /* @__PURE__ */ ze(() => p(x) ? void 0 : eu(Z, p(_))), we = /* @__PURE__ */ ze(() => eu(Q, p(_))), be = q(B);
  ht(be, t, "default", {}), F(B), On(B, (ne) => U(_, ne), () => p(_)), Se(
    (ne) => {
      et(B, "draggable", ne), et(B, "dragging", g()), et(B, "selection", p(b));
    },
    [
      () => k() === !0 || Array.isArray(k()) && k().includes(0)
    ],
    he
  ), Fe("click", B, function(...ne) {
    var le;
    (le = p(ue)) == null || le.apply(this, ne);
  }), Fe("pointerdown", B, function(...ne) {
    var le;
    (le = p(x) ? W : void 0) == null || le.apply(this, ne);
  }), Fe("pointermove", B, function(...ne) {
    var le;
    (le = p(x) ? j : void 0) == null || le.apply(this, ne);
  }), Fe("pointerup", B, function(...ne) {
    var le;
    (le = p(x) ? fe : void 0) == null || le.apply(this, ne);
  }), Fe("contextmenu", B, function(...ne) {
    var le;
    (le = p(we)) == null || le.apply(this, ne);
  }), T(e, B);
  var ve = de({
    get panOnDrag() {
      return k();
    },
    set panOnDrag(ne) {
      k(ne), m();
    },
    get selectionOnDrag() {
      return v();
    },
    set selectionOnDrag(ne) {
      v(ne), m();
    }
  });
  return r(), ve;
}
ie(Od, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var c2 = /* @__PURE__ */ oe('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const d2 = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function zd(e, t) {
  ce(t, !1), tt(e, d2);
  const [n, r] = Je(), o = () => J(i, "$viewport", n), { viewport: i } = je();
  Ve();
  var s = c2(), a = q(s);
  ht(a, t, "default", {}), F(s), Se(() => se(s, "style", `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), T(e, s), de(), r();
}
ie(zd, {}, ["default"], [], !0);
function Ri(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = Em({
    onDrag: r,
    onDragStart: o,
    onDragStop: i,
    onNodeMouseDown: s,
    getStoreItems: () => {
      const u = K(n.snapGrid), c = K(n.viewport);
      return {
        nodes: K(n.nodes),
        nodeLookup: K(n.nodeLookup),
        edges: K(n.edges),
        nodeExtent: K(n.nodeExtent),
        snapGrid: u || [0, 0],
        snapToGrid: !!u,
        nodeOrigin: K(n.nodeOrigin),
        multiSelectionActive: K(n.multiselectionKeyPressed),
        domNode: K(n.domNode),
        transform: [c.x, c.y, c.zoom],
        autoPanOnNodeDrag: K(n.autoPanOnNodeDrag),
        nodesDraggable: K(n.nodesDraggable),
        selectNodesOnDrag: K(n.selectNodesOnDrag),
        nodeDragThreshold: K(n.nodeDragThreshold),
        unselectNodesAndEdges: n.unselectNodesAndEdges,
        updateNodePositions: n.updateNodePositions,
        panBy: n.panBy
      };
    }
  });
  function l(u, c) {
    if (c.disabled) {
      a.destroy();
      return;
    }
    a.update({
      domNode: u,
      noDragClassName: c.noDragClass,
      handleSelector: c.handleSelector,
      nodeId: c.nodeId,
      isSelectable: c.isSelectable,
      nodeClickDistance: c.nodeClickDistance
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
function f2({ width: e, height: t, initialWidth: n, initialHeight: r, measuredWidth: o, measuredHeight: i }) {
  if (o === void 0 && i === void 0) {
    const s = e ?? n, a = t ?? r;
    return {
      width: s ? `width:${s}px;` : "",
      height: a ? `height:${a}px;` : ""
    };
  }
  return {
    width: e ? `width:${e}px;` : "",
    height: t ? `height:${t}px;` : ""
  };
}
var g2 = /* @__PURE__ */ oe("<div><!></div>");
function Hd(e, t) {
  ce(t, !1);
  const [n, r] = Je(), o = () => J(we, "$nodeTypes", n), i = () => J(De, "$elementsSelectable", n), s = () => J(Ke, "$nodesDraggable", n), a = () => J(ge, "$connectableStore", n), l = te(void 0, !0), u = te(void 0, !0), c = te(void 0, !0), d = te(void 0, !0);
  let f = y(t, "node", 13), g = y(t, "id", 13), h = y(t, "data", 29, () => ({})), b = y(t, "selected", 13, !1), x = y(t, "draggable", 13, void 0), k = y(t, "selectable", 13, void 0), v = y(t, "connectable", 13, !0), $ = y(t, "deletable", 13, !0), w = y(t, "hidden", 13, !1), C = y(t, "dragging", 13, !1), N = y(t, "resizeObserver", 13, null), P = y(t, "style", 13, void 0), M = y(t, "type", 13, "default"), z = y(t, "isParent", 13, !1), H = y(t, "positionX", 13), D = y(t, "positionY", 13), A = y(t, "sourcePosition", 13, void 0), R = y(t, "targetPosition", 13, void 0), S = y(t, "zIndex", 13), V = y(t, "measuredWidth", 13, void 0), _ = y(t, "measuredHeight", 13, void 0), E = y(t, "initialWidth", 13, void 0), O = y(t, "initialHeight", 13, void 0), L = y(t, "width", 13, void 0), Z = y(t, "height", 13, void 0), W = y(t, "dragHandle", 13, void 0), j = y(t, "initialized", 13, !1), fe = y(t, "parentId", 13, void 0), Q = y(t, "nodeClickDistance", 13, void 0), B = y(t, "class", 13, "");
  const ue = je(), {
    nodeTypes: we,
    nodeDragThreshold: be,
    selectNodesOnDrag: ve,
    handleNodeSelection: ne,
    updateNodeInternals: le,
    elementsSelectable: De,
    nodesDraggable: Ke
  } = ue;
  let Ie = te(void 0, !0), Be = te(null, !0);
  const Y = ns(), ge = me(v());
  let pe = te(void 0, !0), Ee = te(void 0, !0), ot = te(void 0, !0);
  Ir("svelteflow__node_id", g()), Ir("svelteflow__node_connectable", ge), Va(() => {
    var ee;
    p(Be) && ((ee = N()) == null || ee.unobserve(p(Be)));
  });
  function Oe(ee) {
    k() && (!K(ve) || !x() || K(be) > 0) && ne(g()), Y("nodeclick", { node: f().internals.userNode, event: ee });
  }
  ae(() => G(M()), () => {
    U(l, M() || "default");
  }), ae(() => (o(), p(l)), () => {
    U(u, !!o()[p(l)]);
  }), ae(
    () => (o(), p(l), Ai),
    () => {
      U(c, o()[p(l)] || Ai);
    }
  ), ae(
    () => (p(u), G(M())),
    () => {
      p(u) || console.warn("003", eo.error003(M()));
    }
  ), ae(
    () => (G(L()), G(Z()), G(E()), G(O()), G(V()), G(_())),
    () => {
      U(d, f2({
        width: L(),
        height: Z(),
        initialWidth: E(),
        initialHeight: O(),
        measuredWidth: V(),
        measuredHeight: _()
      }));
    }
  ), ae(() => G(v()), () => {
    ge.set(!!v());
  }), ae(
    () => (p(pe), p(l), p(Ee), G(A()), p(ot), G(R()), G(g()), p(Ie)),
    () => {
      (p(pe) && p(l) !== p(pe) || p(Ee) && A() !== p(Ee) || p(ot) && R() !== p(ot)) && requestAnimationFrame(() => le(/* @__PURE__ */ new Map([
        [
          g(),
          {
            id: g(),
            nodeElement: p(Ie),
            force: !0
          }
        ]
      ]))), U(pe, p(l)), U(Ee, A()), U(ot, R());
    }
  ), ae(
    () => (G(N()), p(Ie), p(Be), G(j())),
    () => {
      N() && (p(Ie) !== p(Be) || !j()) && (p(Be) && N().unobserve(p(Be)), p(Ie) && N().observe(p(Ie)), U(Be, p(Ie)));
    }
  ), ft(), Ve(!0);
  var Xe = qe(), Ye = ye(Xe);
  {
    var nt = (ee) => {
      var Pe = g2(), re = q(Pe);
      const bn = /* @__PURE__ */ he(() => b() ?? !1), Yt = /* @__PURE__ */ he(() => k() ?? i() ?? !0), Ne = /* @__PURE__ */ he(() => $() ?? !0), at = /* @__PURE__ */ he(() => x() ?? s() ?? !0);
      hc(re, () => p(c), (xe, He) => {
        He(xe, {
          get data() {
            return h();
          },
          get id() {
            return g();
          },
          get selected() {
            return p(bn);
          },
          get selectable() {
            return p(Yt);
          },
          get deletable() {
            return p(Ne);
          },
          get sourcePosition() {
            return A();
          },
          get targetPosition() {
            return R();
          },
          get zIndex() {
            return S();
          },
          get dragging() {
            return C();
          },
          get draggable() {
            return p(at);
          },
          get dragHandle() {
            return W();
          },
          get parentId() {
            return fe();
          },
          get type() {
            return p(l);
          },
          get isConnectable() {
            return a();
          },
          get positionAbsoluteX() {
            return H();
          },
          get positionAbsoluteY() {
            return D();
          },
          get width() {
            return L();
          },
          get height() {
            return Z();
          }
        });
      }), F(Pe), pt(Pe, (xe, He) => Ri == null ? void 0 : Ri(xe, He), () => ({
        nodeId: g(),
        isSelectable: k(),
        disabled: !1,
        handleSelector: W(),
        noDragClass: "nodrag",
        nodeClickDistance: Q(),
        onNodeMouseDown: ne,
        onDrag: (xe, He, it, At) => {
          Y("nodedrag", { event: xe, targetNode: it, nodes: At });
        },
        onDragStart: (xe, He, it, At) => {
          Y("nodedragstart", { event: xe, targetNode: it, nodes: At });
        },
        onDragStop: (xe, He, it, At) => {
          Y("nodedragstop", { event: xe, targetNode: it, nodes: At });
        },
        store: ue
      })), On(Pe, (xe) => U(Ie, xe), () => p(Ie)), Vt(() => Fe("click", Pe, Oe)), Vt(() => Fe("mouseenter", Pe, (xe) => Y("nodemouseenter", { node: f(), event: xe }))), Vt(() => Fe("mouseleave", Pe, (xe) => Y("nodemouseleave", { node: f(), event: xe }))), Vt(() => Fe("mousemove", Pe, (xe) => Y("nodemousemove", { node: f(), event: xe }))), Vt(() => Fe("contextmenu", Pe, (xe) => Y("nodecontextmenu", { node: f(), event: xe }))), Se(
        (xe) => {
          se(Pe, "data-id", g()), Zr(Pe, yn(xe)), se(Pe, "style", `${P() ?? ""};${p(d).width ?? ""}${p(d).height ?? ""}`), et(Pe, "dragging", C()), et(Pe, "selected", b()), et(Pe, "draggable", x()), et(Pe, "connectable", v()), et(Pe, "selectable", k()), et(Pe, "nopan", x()), et(Pe, "parent", z()), rt(Pe, "z-index", S()), rt(Pe, "transform", `translate(${H() ?? ""}px, ${D() ?? ""}px)`), rt(Pe, "visibility", j() ? "visible" : "hidden");
        },
        [
          () => xt([
            "svelte-flow__node",
            `svelte-flow__node-${p(l)}`,
            B()
          ])
        ],
        he
      ), T(ee, Pe);
    };
    $e(Ye, (ee) => {
      w() || ee(nt);
    });
  }
  T(e, Xe);
  var gt = de({
    get node() {
      return f();
    },
    set node(ee) {
      f(ee), m();
    },
    get id() {
      return g();
    },
    set id(ee) {
      g(ee), m();
    },
    get data() {
      return h();
    },
    set data(ee) {
      h(ee), m();
    },
    get selected() {
      return b();
    },
    set selected(ee) {
      b(ee), m();
    },
    get draggable() {
      return x();
    },
    set draggable(ee) {
      x(ee), m();
    },
    get selectable() {
      return k();
    },
    set selectable(ee) {
      k(ee), m();
    },
    get connectable() {
      return v();
    },
    set connectable(ee) {
      v(ee), m();
    },
    get deletable() {
      return $();
    },
    set deletable(ee) {
      $(ee), m();
    },
    get hidden() {
      return w();
    },
    set hidden(ee) {
      w(ee), m();
    },
    get dragging() {
      return C();
    },
    set dragging(ee) {
      C(ee), m();
    },
    get resizeObserver() {
      return N();
    },
    set resizeObserver(ee) {
      N(ee), m();
    },
    get style() {
      return P();
    },
    set style(ee) {
      P(ee), m();
    },
    get type() {
      return M();
    },
    set type(ee) {
      M(ee), m();
    },
    get isParent() {
      return z();
    },
    set isParent(ee) {
      z(ee), m();
    },
    get positionX() {
      return H();
    },
    set positionX(ee) {
      H(ee), m();
    },
    get positionY() {
      return D();
    },
    set positionY(ee) {
      D(ee), m();
    },
    get sourcePosition() {
      return A();
    },
    set sourcePosition(ee) {
      A(ee), m();
    },
    get targetPosition() {
      return R();
    },
    set targetPosition(ee) {
      R(ee), m();
    },
    get zIndex() {
      return S();
    },
    set zIndex(ee) {
      S(ee), m();
    },
    get measuredWidth() {
      return V();
    },
    set measuredWidth(ee) {
      V(ee), m();
    },
    get measuredHeight() {
      return _();
    },
    set measuredHeight(ee) {
      _(ee), m();
    },
    get initialWidth() {
      return E();
    },
    set initialWidth(ee) {
      E(ee), m();
    },
    get initialHeight() {
      return O();
    },
    set initialHeight(ee) {
      O(ee), m();
    },
    get width() {
      return L();
    },
    set width(ee) {
      L(ee), m();
    },
    get height() {
      return Z();
    },
    set height(ee) {
      Z(ee), m();
    },
    get dragHandle() {
      return W();
    },
    set dragHandle(ee) {
      W(ee), m();
    },
    get initialized() {
      return j();
    },
    set initialized(ee) {
      j(ee), m();
    },
    get parentId() {
      return fe();
    },
    set parentId(ee) {
      fe(ee), m();
    },
    get nodeClickDistance() {
      return Q();
    },
    set nodeClickDistance(ee) {
      Q(ee), m();
    },
    get class() {
      return B();
    },
    set class(ee) {
      B(ee), m();
    }
  });
  return r(), gt;
}
ie(
  Hd,
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
var p2 = /* @__PURE__ */ oe('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const h2 = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function Ld(e, t) {
  ce(t, !1), tt(e, h2);
  const [n, r] = Je(), o = () => J(c, "$visibleNodes", n), i = () => J(d, "$nodesDraggable", n), s = () => J(g, "$elementsSelectable", n), a = () => J(f, "$nodesConnectable", n), l = () => J(b, "$parentLookup", n);
  let u = y(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: d,
    nodesConnectable: f,
    elementsSelectable: g,
    updateNodeInternals: h,
    parentLookup: b
  } = je(), x = typeof ResizeObserver > "u" ? null : new ResizeObserver(($) => {
    const w = /* @__PURE__ */ new Map();
    $.forEach((C) => {
      const N = C.target.getAttribute("data-id");
      w.set(N, { id: N, nodeElement: C.target, force: !0 });
    }), h(w);
  });
  Va(() => {
    x == null || x.disconnect();
  }), Ve();
  var k = p2();
  zt(k, 5, o, ($) => $.id, ($, w) => {
    const C = /* @__PURE__ */ he(() => !!p(w).selected), N = /* @__PURE__ */ he(() => !!p(w).hidden), P = /* @__PURE__ */ he(() => !!(p(w).draggable || i() && typeof p(w).draggable > "u")), M = /* @__PURE__ */ he(() => !!(p(w).selectable || s() && typeof p(w).selectable > "u")), z = /* @__PURE__ */ he(() => !!(p(w).connectable || a() && typeof p(w).connectable > "u")), H = /* @__PURE__ */ he(() => p(w).deletable ?? !0), D = /* @__PURE__ */ he(() => l().has(p(w).id)), A = /* @__PURE__ */ he(() => p(w).type ?? "default"), R = /* @__PURE__ */ he(() => p(w).internals.z ?? 0), S = /* @__PURE__ */ he(() => id(p(w)));
    Hd($, {
      get node() {
        return p(w);
      },
      get id() {
        return p(w).id;
      },
      get data() {
        return p(w).data;
      },
      get selected() {
        return p(C);
      },
      get hidden() {
        return p(N);
      },
      get draggable() {
        return p(P);
      },
      get selectable() {
        return p(M);
      },
      get connectable() {
        return p(z);
      },
      get deletable() {
        return p(H);
      },
      get positionX() {
        return p(w).internals.positionAbsolute.x;
      },
      get positionY() {
        return p(w).internals.positionAbsolute.y;
      },
      get isParent() {
        return p(D);
      },
      get style() {
        return p(w).style;
      },
      get class() {
        return p(w).class;
      },
      get type() {
        return p(A);
      },
      get sourcePosition() {
        return p(w).sourcePosition;
      },
      get targetPosition() {
        return p(w).targetPosition;
      },
      get dragging() {
        return p(w).dragging;
      },
      get zIndex() {
        return p(R);
      },
      get dragHandle() {
        return p(w).dragHandle;
      },
      get initialized() {
        return p(S);
      },
      get width() {
        return p(w).width;
      },
      get height() {
        return p(w).height;
      },
      get initialWidth() {
        return p(w).initialWidth;
      },
      get initialHeight() {
        return p(w).initialHeight;
      },
      get measuredWidth() {
        return p(w).measured.width;
      },
      get measuredHeight() {
        return p(w).measured.height;
      },
      get parentId() {
        return p(w).parentId;
      },
      resizeObserver: x,
      get nodeClickDistance() {
        return u();
      },
      $$events: {
        nodeclick(V) {
          Te.call(this, t, V);
        },
        nodemouseenter(V) {
          Te.call(this, t, V);
        },
        nodemousemove(V) {
          Te.call(this, t, V);
        },
        nodemouseleave(V) {
          Te.call(this, t, V);
        },
        nodedrag(V) {
          Te.call(this, t, V);
        },
        nodedragstart(V) {
          Te.call(this, t, V);
        },
        nodedragstop(V) {
          Te.call(this, t, V);
        },
        nodecontextmenu(V) {
          Te.call(this, t, V);
        }
      }
    });
  }), F(k), T(e, k);
  var v = de({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance($) {
      u($), m();
    }
  });
  return r(), v;
}
ie(Ld, { nodeClickDistance: {} }, [], [], !0);
var v2 = /* @__PURE__ */ ke('<svg><g role="img"><!></g></svg>');
function Td(e, t) {
  ce(t, !1);
  const [n, r] = Je(), o = () => J(B, "$edgeTypes", n), i = () => J(ue, "$flowId", n), s = () => J(we, "$elementsSelectable", n), a = () => J(Q, "$edgeLookup", n), l = te(void 0, !0), u = te(void 0, !0), c = te(void 0, !0), d = te(void 0, !0), f = te(void 0, !0);
  let g = y(t, "id", 13), h = y(t, "type", 13, "default"), b = y(t, "source", 13, ""), x = y(t, "target", 13, ""), k = y(t, "data", 29, () => ({})), v = y(t, "style", 13, void 0), $ = y(t, "zIndex", 13, void 0), w = y(t, "animated", 13, !1), C = y(t, "selected", 13, !1), N = y(t, "selectable", 13, void 0), P = y(t, "deletable", 13, void 0), M = y(t, "hidden", 13, !1), z = y(t, "label", 13, void 0), H = y(t, "labelStyle", 13, void 0), D = y(t, "markerStart", 13, void 0), A = y(t, "markerEnd", 13, void 0), R = y(t, "sourceHandle", 13, void 0), S = y(t, "targetHandle", 13, void 0), V = y(t, "sourceX", 13), _ = y(t, "sourceY", 13), E = y(t, "targetX", 13), O = y(t, "targetY", 13), L = y(t, "sourcePosition", 13), Z = y(t, "targetPosition", 13), W = y(t, "ariaLabel", 13, void 0), j = y(t, "interactionWidth", 13, void 0), fe = y(t, "class", 13, "");
  Ir("svelteflow__edge_id", g());
  const {
    edgeLookup: Q,
    edgeTypes: B,
    flowId: ue,
    elementsSelectable: we
  } = je(), be = ns(), ve = _d();
  function ne(Y) {
    const ge = a().get(g());
    ge && (ve(g()), be("edgeclick", { event: Y, edge: ge }));
  }
  function le(Y, ge) {
    const pe = a().get(g());
    pe && be(ge, { event: Y, edge: pe });
  }
  ae(() => G(h()), () => {
    U(l, h() || "default");
  }), ae(
    () => (o(), p(l), Ii),
    () => {
      U(u, o()[p(l)] || Ii);
    }
  ), ae(
    () => (G(D()), i()),
    () => {
      U(c, D() ? `url('#${ia(D(), i())}')` : void 0);
    }
  ), ae(
    () => (G(A()), i()),
    () => {
      U(d, A() ? `url('#${ia(A(), i())}')` : void 0);
    }
  ), ae(
    () => (G(N()), s()),
    () => {
      U(f, N() ?? s());
    }
  ), ft(), Ve(!0);
  var De = qe(), Ke = ye(De);
  {
    var Ie = (Y) => {
      var ge = v2(), pe = q(ge), Ee = q(pe);
      const ot = /* @__PURE__ */ he(() => P() ?? !0);
      hc(Ee, () => p(u), (Oe, Xe) => {
        Xe(Oe, {
          get id() {
            return g();
          },
          get source() {
            return b();
          },
          get target() {
            return x();
          },
          get sourceX() {
            return V();
          },
          get sourceY() {
            return _();
          },
          get targetX() {
            return E();
          },
          get targetY() {
            return O();
          },
          get sourcePosition() {
            return L();
          },
          get targetPosition() {
            return Z();
          },
          get animated() {
            return w();
          },
          get selected() {
            return C();
          },
          get label() {
            return z();
          },
          get labelStyle() {
            return H();
          },
          get data() {
            return k();
          },
          get style() {
            return v();
          },
          get interactionWidth() {
            return j();
          },
          get selectable() {
            return p(f);
          },
          get deletable() {
            return p(ot);
          },
          get type() {
            return p(l);
          },
          get sourceHandleId() {
            return R();
          },
          get targetHandleId() {
            return S();
          },
          get markerStart() {
            return p(c);
          },
          get markerEnd() {
            return p(d);
          }
        });
      }), F(pe), F(ge), Se(
        (Oe) => {
          rt(ge, "z-index", $()), mr(pe, yn(Oe)), se(pe, "data-id", g()), se(pe, "aria-label", W() === null ? void 0 : W() ? W() : `Edge from ${b()} to ${x()}`), et(pe, "animated", w()), et(pe, "selected", C()), et(pe, "selectable", p(f));
        },
        [
          () => xt(["svelte-flow__edge", fe()])
        ],
        he
      ), Fe("click", pe, ne), Fe("contextmenu", pe, (Oe) => {
        le(Oe, "edgecontextmenu");
      }), Fe("mouseenter", pe, (Oe) => {
        le(Oe, "edgemouseenter");
      }), Fe("mouseleave", pe, (Oe) => {
        le(Oe, "edgemouseleave");
      }), T(Y, ge);
    };
    $e(Ke, (Y) => {
      M() || Y(Ie);
    });
  }
  T(e, De);
  var Be = de({
    get id() {
      return g();
    },
    set id(Y) {
      g(Y), m();
    },
    get type() {
      return h();
    },
    set type(Y) {
      h(Y), m();
    },
    get source() {
      return b();
    },
    set source(Y) {
      b(Y), m();
    },
    get target() {
      return x();
    },
    set target(Y) {
      x(Y), m();
    },
    get data() {
      return k();
    },
    set data(Y) {
      k(Y), m();
    },
    get style() {
      return v();
    },
    set style(Y) {
      v(Y), m();
    },
    get zIndex() {
      return $();
    },
    set zIndex(Y) {
      $(Y), m();
    },
    get animated() {
      return w();
    },
    set animated(Y) {
      w(Y), m();
    },
    get selected() {
      return C();
    },
    set selected(Y) {
      C(Y), m();
    },
    get selectable() {
      return N();
    },
    set selectable(Y) {
      N(Y), m();
    },
    get deletable() {
      return P();
    },
    set deletable(Y) {
      P(Y), m();
    },
    get hidden() {
      return M();
    },
    set hidden(Y) {
      M(Y), m();
    },
    get label() {
      return z();
    },
    set label(Y) {
      z(Y), m();
    },
    get labelStyle() {
      return H();
    },
    set labelStyle(Y) {
      H(Y), m();
    },
    get markerStart() {
      return D();
    },
    set markerStart(Y) {
      D(Y), m();
    },
    get markerEnd() {
      return A();
    },
    set markerEnd(Y) {
      A(Y), m();
    },
    get sourceHandle() {
      return R();
    },
    set sourceHandle(Y) {
      R(Y), m();
    },
    get targetHandle() {
      return S();
    },
    set targetHandle(Y) {
      S(Y), m();
    },
    get sourceX() {
      return V();
    },
    set sourceX(Y) {
      V(Y), m();
    },
    get sourceY() {
      return _();
    },
    set sourceY(Y) {
      _(Y), m();
    },
    get targetX() {
      return E();
    },
    set targetX(Y) {
      E(Y), m();
    },
    get targetY() {
      return O();
    },
    set targetY(Y) {
      O(Y), m();
    },
    get sourcePosition() {
      return L();
    },
    set sourcePosition(Y) {
      L(Y), m();
    },
    get targetPosition() {
      return Z();
    },
    set targetPosition(Y) {
      Z(Y), m();
    },
    get ariaLabel() {
      return W();
    },
    set ariaLabel(Y) {
      W(Y), m();
    },
    get interactionWidth() {
      return j();
    },
    set interactionWidth(Y) {
      j(Y), m();
    },
    get class() {
      return fe();
    },
    set class(Y) {
      fe(Y), m();
    }
  });
  return r(), Be;
}
ie(
  Td,
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
function Ad(e, t) {
  ce(t, !1);
  let n = y(t, "onMount", 12, void 0), r = y(t, "onDestroy", 12, void 0);
  return yr(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), Ve(), de({
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
ie(Ad, { onMount: {}, onDestroy: {} }, [], [], !0);
var m2 = /* @__PURE__ */ ke("<defs></defs>");
function Dd(e, t) {
  ce(t, !1);
  const [n, r] = Je(), o = () => J(i, "$markers", n), { markers: i } = je();
  Ve();
  var s = m2();
  zt(s, 5, o, (a) => a.id, (a, l) => {
    Id(a, wt(() => p(l)));
  }), F(s), T(e, s), de(), r();
}
ie(Dd, {}, [], [], !0);
var y2 = /* @__PURE__ */ ke('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), w2 = /* @__PURE__ */ ke('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), b2 = /* @__PURE__ */ ke('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Id(e, t) {
  ce(t, !1);
  let n = y(t, "id", 12), r = y(t, "type", 12), o = y(t, "width", 12, 12.5), i = y(t, "height", 12, 12.5), s = y(t, "markerUnits", 12, "strokeWidth"), a = y(t, "orient", 12, "auto-start-reverse"), l = y(t, "color", 12, void 0), u = y(t, "strokeWidth", 12, void 0);
  Ve();
  var c = b2(), d = q(c);
  {
    var f = (h) => {
      var b = y2();
      Se(() => {
        se(b, "stroke", l()), se(b, "stroke-width", u());
      }), T(h, b);
    }, g = (h) => {
      var b = qe(), x = ye(b);
      {
        var k = (v) => {
          var $ = w2();
          Se(() => {
            se($, "stroke", l()), se($, "stroke-width", u()), se($, "fill", l());
          }), T(v, $);
        };
        $e(
          x,
          (v) => {
            r() === ko.ArrowClosed && v(k);
          },
          !0
        );
      }
      T(h, b);
    };
    $e(d, (h) => {
      r() === ko.Arrow ? h(f) : h(g, !1);
    });
  }
  return F(c), Se(() => {
    se(c, "id", n()), se(c, "markerWidth", `${o()}`), se(c, "markerHeight", `${i()}`), se(c, "markerUnits", s()), se(c, "orient", a());
  }), T(e, c), de({
    get id() {
      return n();
    },
    set id(h) {
      n(h), m();
    },
    get type() {
      return r();
    },
    set type(h) {
      r(h), m();
    },
    get width() {
      return o();
    },
    set width(h) {
      o(h), m();
    },
    get height() {
      return i();
    },
    set height(h) {
      i(h), m();
    },
    get markerUnits() {
      return s();
    },
    set markerUnits(h) {
      s(h), m();
    },
    get orient() {
      return a();
    },
    set orient(h) {
      a(h), m();
    },
    get color() {
      return l();
    },
    set color(h) {
      l(h), m();
    },
    get strokeWidth() {
      return u();
    },
    set strokeWidth(h) {
      u(h), m();
    }
  });
}
ie(
  Id,
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
var x2 = /* @__PURE__ */ oe('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function Rd(e, t) {
  ce(t, !1);
  const [n, r] = Je(), o = () => J(a, "$visibleEdges", n), i = () => J(c, "$elementsSelectable", n);
  let s = y(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: a,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = je();
  yr(() => {
    s() && u(s());
  }), Ve();
  var d = x2(), f = q(d), g = q(f);
  Dd(g, {}), F(f);
  var h = X(f, 2);
  zt(h, 1, o, (v) => v.id, (v, $) => {
    const w = /* @__PURE__ */ he(() => p($).selectable ?? i()), C = /* @__PURE__ */ he(() => p($).type || "default");
    Td(v, {
      get id() {
        return p($).id;
      },
      get source() {
        return p($).source;
      },
      get target() {
        return p($).target;
      },
      get data() {
        return p($).data;
      },
      get style() {
        return p($).style;
      },
      get animated() {
        return p($).animated;
      },
      get selected() {
        return p($).selected;
      },
      get selectable() {
        return p(w);
      },
      get deletable() {
        return p($).deletable;
      },
      get hidden() {
        return p($).hidden;
      },
      get label() {
        return p($).label;
      },
      get labelStyle() {
        return p($).labelStyle;
      },
      get markerStart() {
        return p($).markerStart;
      },
      get markerEnd() {
        return p($).markerEnd;
      },
      get sourceHandle() {
        return p($).sourceHandle;
      },
      get targetHandle() {
        return p($).targetHandle;
      },
      get sourceX() {
        return p($).sourceX;
      },
      get sourceY() {
        return p($).sourceY;
      },
      get targetX() {
        return p($).targetX;
      },
      get targetY() {
        return p($).targetY;
      },
      get sourcePosition() {
        return p($).sourcePosition;
      },
      get targetPosition() {
        return p($).targetPosition;
      },
      get ariaLabel() {
        return p($).ariaLabel;
      },
      get interactionWidth() {
        return p($).interactionWidth;
      },
      get class() {
        return p($).class;
      },
      get type() {
        return p(C);
      },
      get zIndex() {
        return p($).zIndex;
      },
      $$events: {
        edgeclick(N) {
          Te.call(this, t, N);
        },
        edgecontextmenu(N) {
          Te.call(this, t, N);
        },
        edgemouseenter(N) {
          Te.call(this, t, N);
        },
        edgemouseleave(N) {
          Te.call(this, t, N);
        }
      }
    });
  });
  var b = X(h, 2);
  {
    var x = (v) => {
      Ad(v, {
        onMount: () => {
          ki(l, !0);
        },
        onDestroy: () => {
          ki(l, !1);
        }
      });
    };
    $e(b, (v) => {
      o().length > 0 && v(x);
    });
  }
  F(d), T(e, d);
  var k = de({
    get defaultEdgeOptions() {
      return s();
    },
    set defaultEdgeOptions(v) {
      s(v), m();
    }
  });
  return r(), k;
}
ie(Rd, { defaultEdgeOptions: {} }, [], [], !0);
var $2 = /* @__PURE__ */ oe('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const _2 = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function Ka(e, t) {
  ce(t, !1), tt(e, _2);
  let n = y(t, "x", 12, 0), r = y(t, "y", 12, 0), o = y(t, "width", 12, 0), i = y(t, "height", 12, 0), s = y(t, "isVisible", 12, !0);
  var a = qe(), l = ye(a);
  {
    var u = (c) => {
      var d = $2();
      Se(() => {
        rt(d, "width", typeof o() == "string" ? o() : `${o()}px`), rt(d, "height", typeof i() == "string" ? i() : `${i()}px`), rt(d, "transform", `translate(${n()}px, ${r()}px)`);
      }), T(c, d);
    };
    $e(l, (c) => {
      s() && c(u);
    });
  }
  return T(e, a), de({
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
ie(
  Ka,
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
function Zd(e, t) {
  ce(t, !1);
  const [n, r] = Je(), o = () => J(s, "$selectionRect", n), i = () => J(a, "$selectionRectMode", n), { selectionRect: s, selectionRectMode: a } = je();
  Ve();
  const l = /* @__PURE__ */ he(() => !!(o() && i() === "user")), u = /* @__PURE__ */ he(() => {
    var g;
    return (g = o()) == null ? void 0 : g.width;
  }), c = /* @__PURE__ */ he(() => {
    var g;
    return (g = o()) == null ? void 0 : g.height;
  }), d = /* @__PURE__ */ he(() => {
    var g;
    return (g = o()) == null ? void 0 : g.x;
  }), f = /* @__PURE__ */ he(() => {
    var g;
    return (g = o()) == null ? void 0 : g.y;
  });
  Ka(e, {
    get isVisible() {
      return p(l);
    },
    get width() {
      return p(u);
    },
    get height() {
      return p(c);
    },
    get x() {
      return p(d);
    },
    get y() {
      return p(f);
    }
  }), de(), r();
}
ie(Zd, {}, [], [], !0);
var C2 = /* @__PURE__ */ oe('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const k2 = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function Bd(e, t) {
  ce(t, !1), tt(e, k2);
  const [n, r] = Je(), o = () => J(l, "$selectionRectMode", n), i = () => J(c, "$nodeLookup", n), s = () => J(u, "$nodes", n), a = je(), { selectionRectMode: l, nodes: u, nodeLookup: c } = a, d = ns();
  let f = te(null);
  function g(v) {
    const $ = s().filter((w) => w.selected);
    d("selectioncontextmenu", { nodes: $, event: v });
  }
  function h(v) {
    const $ = s().filter((w) => w.selected);
    d("selectionclick", { nodes: $, event: v });
  }
  ae(
    () => (o(), i(), s()),
    () => {
      o() === "nodes" && (U(f, Ao(i(), { filter: (v) => !!v.selected })), s());
    }
  ), ft(), Ve();
  var b = qe(), x = ye(b);
  {
    var k = (v) => {
      var $ = C2(), w = q($);
      Ka(w, { width: "100%", height: "100%", x: 0, y: 0 }), F($), pt($, (C, N) => Ri == null ? void 0 : Ri(C, N), () => ({
        disabled: !1,
        store: a,
        onDrag: (C, N, P, M) => {
          d("nodedrag", { event: C, targetNode: null, nodes: M });
        },
        onDragStart: (C, N, P, M) => {
          d("nodedragstart", { event: C, targetNode: null, nodes: M });
        },
        onDragStop: (C, N, P, M) => {
          d("nodedragstop", { event: C, targetNode: null, nodes: M });
        }
      })), Vt(() => Fe("contextmenu", $, g)), Vt(() => Fe("click", $, h)), Vt(() => Fe("keyup", $, () => {
      })), Se(() => se($, "style", `width: ${p(f).width ?? ""}px; height: ${p(f).height ?? ""}px; transform: translate(${p(f).x ?? ""}px, ${p(f).y ?? ""}px)`)), T(v, $);
    };
    $e(x, (v) => {
      o() === "nodes" && p(f) && kn(p(f).x) && kn(p(f).y) && v(k);
    });
  }
  T(e, b), de(), r();
}
ie(Bd, {}, [], [], !0);
function lt(e, t) {
  let { enabled: n = !0, trigger: r, type: o = "keydown" } = t;
  function i(s) {
    const a = Array.isArray(r) ? r : [r], l = {
      alt: s.altKey,
      ctrl: s.ctrlKey,
      shift: s.shiftKey,
      meta: s.metaKey
    };
    for (const u of a) {
      const c = {
        modifier: [],
        preventDefault: !1,
        enabled: !0,
        ...u
      }, { modifier: d, key: f, callback: g, preventDefault: h, enabled: b } = c;
      if (b) {
        if (d.length && !(Array.isArray(d) ? d : [d]).map(
          (x) => typeof x == "string" ? [x] : x
        ).some(
          (x) => x.every((k) => l[k])
        ))
          continue;
        if (s.key === f) {
          h && s.preventDefault();
          const x = {
            node: e,
            trigger: c,
            originalEvent: s
          };
          e.dispatchEvent(new CustomEvent("shortcut", { detail: x })), g == null || g(x);
        }
      }
    }
  }
  return n && e.addEventListener(o, i), {
    update: (s) => {
      const { enabled: a = !0, type: l = "keydown" } = s;
      n && (!a || o !== l) ? e.removeEventListener(o, i) : !n && a && e.addEventListener(l, i), n = a, o = l, r = s.trigger;
    },
    destroy: () => {
      e.removeEventListener(o, i);
    }
  };
}
function Xd(e, t) {
  ce(t, !1);
  let n = y(t, "selectionKey", 12, "Shift"), r = y(t, "multiSelectionKey", 28, () => Li() ? "Meta" : "Control"), o = y(t, "deleteKey", 12, "Backspace"), i = y(t, "panActivationKey", 12, " "), s = y(t, "zoomActivationKey", 28, () => Li() ? "Meta" : "Control");
  const {
    selectionKeyPressed: a,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: d,
    selectionRect: f
  } = je();
  function g(v) {
    return v !== null && typeof v == "object";
  }
  function h(v) {
    return g(v) ? v.modifier || [] : [];
  }
  function b(v) {
    return v == null ? "" : g(v) ? v.key : v;
  }
  function x(v, $) {
    return (Array.isArray(v) ? v : [v]).map((w) => {
      const C = b(w);
      return {
        key: C,
        modifier: h(w),
        enabled: C !== null,
        callback: $
      };
    });
  }
  function k() {
    f.set(null), a.set(!1), l.set(!1), u.set(!1), c.set(!1), d.set(!1);
  }
  return Ve(), Fe("blur", Ct, k), Fe("contextmenu", Ct, k), pt(Ct, (v, $) => lt == null ? void 0 : lt(v, $), () => ({
    trigger: x(n(), () => a.set(!0)),
    type: "keydown"
  })), pt(Ct, (v, $) => lt == null ? void 0 : lt(v, $), () => ({
    trigger: x(n(), () => a.set(!1)),
    type: "keyup"
  })), pt(Ct, (v, $) => lt == null ? void 0 : lt(v, $), () => ({
    trigger: x(r(), () => l.set(!0)),
    type: "keydown"
  })), pt(Ct, (v, $) => lt == null ? void 0 : lt(v, $), () => ({
    trigger: x(r(), () => l.set(!1)),
    type: "keyup"
  })), pt(Ct, (v, $) => lt == null ? void 0 : lt(v, $), () => ({
    trigger: x(o(), (v) => {
      !(v.originalEvent.ctrlKey || v.originalEvent.metaKey || v.originalEvent.shiftKey) && !im(v.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), pt(Ct, (v, $) => lt == null ? void 0 : lt(v, $), () => ({
    trigger: x(o(), () => u.set(!1)),
    type: "keyup"
  })), pt(Ct, (v, $) => lt == null ? void 0 : lt(v, $), () => ({
    trigger: x(i(), () => c.set(!0)),
    type: "keydown"
  })), pt(Ct, (v, $) => lt == null ? void 0 : lt(v, $), () => ({
    trigger: x(i(), () => c.set(!1)),
    type: "keyup"
  })), pt(Ct, (v, $) => lt == null ? void 0 : lt(v, $), () => ({
    trigger: x(s(), () => d.set(!0)),
    type: "keydown"
  })), pt(Ct, (v, $) => lt == null ? void 0 : lt(v, $), () => ({
    trigger: x(s(), () => d.set(!1)),
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
ie(
  Xd,
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
var S2 = /* @__PURE__ */ ke('<path fill="none" class="svelte-flow__connection-path"></path>'), E2 = /* @__PURE__ */ ke('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function Yd(e, t) {
  ce(t, !1);
  const [n, r] = Je(), o = () => J(g, "$connection", n), i = () => J(h, "$connectionLineType", n), s = () => J(d, "$width", n), a = () => J(f, "$height", n);
  let l = y(t, "containerStyle", 12, ""), u = y(t, "style", 12, ""), c = y(t, "isCustomComponent", 12, !1);
  const {
    width: d,
    height: f,
    connection: g,
    connectionLineType: h
  } = je();
  let b = te(null);
  ae(
    () => (o(), G(c()), i(), p(b), oa),
    () => {
      if (o().inProgress && !c()) {
        const { from: w, to: C, fromPosition: N, toPosition: P } = o(), M = {
          sourceX: w.x,
          sourceY: w.y,
          sourcePosition: N,
          targetX: C.x,
          targetY: C.y,
          targetPosition: P
        };
        switch (i()) {
          case Hr.Bezier:
            ((z) => U(b, z[0]))(ad(M));
            break;
          case Hr.Step:
            ((z) => U(b, z[0]))(Ti({ ...M, borderRadius: 0 }));
            break;
          case Hr.SmoothStep:
            ((z) => U(b, z[0]))(Ti(M));
            break;
          default:
            ((z) => U(b, z[0]))(oa(M));
        }
      }
    }
  ), ft(), Ve();
  var x = qe(), k = ye(x);
  {
    var v = (w) => {
      var C = E2(), N = q(C), P = q(N);
      ht(P, t, "connectionLine", {});
      var M = X(P);
      {
        var z = (H) => {
          var D = S2();
          Se(() => {
            se(D, "d", p(b)), se(D, "style", u());
          }), T(H, D);
        };
        $e(M, (H) => {
          c() || H(z);
        });
      }
      F(N), F(C), Se(
        (H) => {
          se(C, "width", s()), se(C, "height", a()), se(C, "style", l()), mr(N, yn(H));
        },
        [
          () => xt([
            "svelte-flow__connection",
            U0(o().isValid)
          ])
        ],
        he
      ), T(w, C);
    };
    $e(k, (w) => {
      o().inProgress && w(v);
    });
  }
  T(e, x);
  var $ = de({
    get containerStyle() {
      return l();
    },
    set containerStyle(w) {
      l(w), m();
    },
    get style() {
      return u();
    },
    set style(w) {
      u(w), m();
    },
    get isCustomComponent() {
      return c();
    },
    set isCustomComponent(w) {
      c(w), m();
    }
  });
  return r(), $;
}
ie(
  Yd,
  {
    containerStyle: {},
    style: {},
    isCustomComponent: {}
  },
  ["connectionLine"],
  [],
  !0
);
var N2 = /* @__PURE__ */ oe("<div><!></div>");
function fs(e, t) {
  const n = Qe(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = Qe(n, ["position", "style", "class"]);
  ce(t, !1);
  const [o, i] = Je(), s = () => J(d, "$selectionRectMode", o), a = te();
  let l = y(t, "position", 12, "top-right"), u = y(t, "style", 12, void 0), c = y(t, "class", 12, void 0);
  const { selectionRectMode: d } = je();
  ae(() => G(l()), () => {
    U(a, `${l()}`.split("-"));
  }), ft(), Ve();
  var f = N2();
  let g;
  var h = q(f);
  ht(h, t, "default", {}), F(f), Se(
    (x) => {
      g = en(f, g, {
        class: x,
        style: u(),
        ...r
      }), rt(f, "pointer-events", s() ? "none" : "");
    },
    [
      () => xt([
        "svelte-flow__panel",
        c(),
        ...p(a)
      ])
    ],
    he
  ), T(e, f);
  var b = de({
    get position() {
      return l();
    },
    set position(x) {
      l(x), m();
    },
    get style() {
      return u();
    },
    set style(x) {
      u(x), m();
    },
    get class() {
      return c();
    },
    set class(x) {
      c(x), m();
    }
  });
  return i(), b;
}
ie(fs, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var P2 = /* @__PURE__ */ oe('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function Kd(e, t) {
  ce(t, !1);
  let n = y(t, "proOptions", 12, void 0), r = y(t, "position", 12, "bottom-right");
  Ve();
  var o = qe(), i = ye(o);
  {
    var s = (a) => {
      fs(a, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var c = P2();
          T(l, c);
        },
        $$slots: { default: !0 }
      });
    };
    $e(i, (a) => {
      var l;
      (l = n()) != null && l.hideAttribution || a(s);
    });
  }
  return T(e, o), de({
    get proOptions() {
      return n();
    },
    set proOptions(a) {
      n(a), m();
    },
    get position() {
      return r();
    },
    set position(a) {
      r(a), m();
    }
  });
}
ie(Kd, { proOptions: {}, position: {} }, [], [], !0);
function nu(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: i, paneClickDistance: s }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), o !== void 0 && e.setMaxZoom(o), i !== void 0 && e.setTranslateExtent(i), s !== void 0 && e.setPaneClickDistance(s);
}
const V2 = (e) => Object.keys(e);
function ru(e, t) {
  V2(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function M2() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function O2(e = "light") {
  return Dt("light", (t) => {
    if (e !== "system") {
      t(e);
      return;
    }
    const n = M2(), r = () => t(n != null && n.matches ? "dark" : "light");
    return t(n != null && n.matches ? "dark" : "light"), n == null || n.addEventListener("change", r), () => {
      n == null || n.removeEventListener("change", r);
    };
  });
}
var z2 = /* @__PURE__ */ oe('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), H2 = /* @__PURE__ */ oe("<!> <!>", 1), L2 = /* @__PURE__ */ oe("<div><!> <!> <!> <!></div>");
const T2 = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function Wd(e, t) {
  const n = rp(t), r = Qe(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), o = Qe(r, [
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
  ce(t, !1), tt(e, T2);
  const [i, s] = Je(), a = () => J($(), "$viewport", i), l = () => J(ms, "$initialized", i), u = () => J(p(c), "$colorModeClass", i), c = te();
  let d = y(t, "id", 12, "1"), f = y(t, "nodes", 12), g = y(t, "edges", 12), h = y(t, "fitView", 12, void 0), b = y(t, "fitViewOptions", 12, void 0), x = y(t, "minZoom", 12, void 0), k = y(t, "maxZoom", 12, void 0), v = y(t, "initialViewport", 12, void 0), $ = y(t, "viewport", 12, void 0), w = y(t, "nodeTypes", 12, void 0), C = y(t, "edgeTypes", 12, void 0), N = y(t, "selectionKey", 12, void 0), P = y(t, "selectionMode", 12, void 0), M = y(t, "panActivationKey", 12, void 0), z = y(t, "multiSelectionKey", 12, void 0), H = y(t, "zoomActivationKey", 12, void 0), D = y(t, "nodesDraggable", 12, void 0), A = y(t, "nodesConnectable", 12, void 0), R = y(t, "nodeDragThreshold", 12, void 0), S = y(t, "elementsSelectable", 12, void 0), V = y(t, "snapGrid", 12, void 0), _ = y(t, "deleteKey", 12, void 0), E = y(t, "connectionRadius", 12, void 0), O = y(t, "connectionLineType", 12, void 0), L = y(t, "connectionMode", 28, () => ur.Strict), Z = y(t, "connectionLineStyle", 12, ""), W = y(t, "connectionLineContainerStyle", 12, ""), j = y(t, "onMoveStart", 12, void 0), fe = y(t, "onMove", 12, void 0), Q = y(t, "onMoveEnd", 12, void 0), B = y(t, "isValidConnection", 12, void 0), ue = y(t, "translateExtent", 12, void 0), we = y(t, "nodeExtent", 12, void 0), be = y(t, "onlyRenderVisibleElements", 12, void 0), ve = y(t, "panOnScrollMode", 28, () => Kn.Free), ne = y(t, "preventScrolling", 12, !0), le = y(t, "zoomOnScroll", 12, !0), De = y(t, "zoomOnDoubleClick", 12, !0), Ke = y(t, "zoomOnPinch", 12, !0), Ie = y(t, "panOnScroll", 12, !1), Be = y(t, "panOnDrag", 12, !0), Y = y(t, "selectionOnDrag", 12, void 0), ge = y(t, "autoPanOnConnect", 12, !0), pe = y(t, "autoPanOnNodeDrag", 12, !0), Ee = y(t, "onerror", 12, void 0), ot = y(t, "ondelete", 12, void 0), Oe = y(t, "onedgecreate", 12, void 0), Xe = y(t, "attributionPosition", 12, void 0), Ye = y(t, "proOptions", 12, void 0), nt = y(t, "defaultEdgeOptions", 12, void 0), gt = y(t, "width", 12, void 0), ee = y(t, "height", 12, void 0), Pe = y(t, "colorMode", 12, "light"), re = y(t, "onconnect", 12, void 0), bn = y(t, "onconnectstart", 12, void 0), Yt = y(t, "onconnectend", 12, void 0), Ne = y(t, "onbeforedelete", 12, void 0), at = y(t, "oninit", 12, void 0), xe = y(t, "nodeOrigin", 12, void 0), He = y(t, "paneClickDistance", 12, 0), it = y(t, "nodeClickDistance", 12, 0), At = y(t, "defaultMarkerColor", 12, "#b1b1b7"), xr = y(t, "style", 12, void 0), ro = y(t, "class", 12, void 0), Nt = te(), $t = te(), sn = te();
  const Kt = a() || v(), ct = A1(ds) ? je() : i2({
    nodes: K(f()),
    edges: K(g()),
    width: gt(),
    height: ee(),
    fitView: h(),
    nodeOrigin: xe(),
    nodeExtent: we()
  });
  yr(() => (ct.width.set(p($t)), ct.height.set(p(sn)), ct.domNode.set(p(Nt)), ct.syncNodeStores(f()), ct.syncEdgeStores(g()), ct.syncViewport($()), h() !== void 0 && ct.fitViewOnInit.set(h()), b() && ct.fitViewOptions.set(b()), nu(ct, {
    nodeTypes: w(),
    edgeTypes: C(),
    minZoom: x(),
    maxZoom: k(),
    translateExtent: ue(),
    paneClickDistance: He()
  }), () => {
    ct.reset();
  }));
  const { initialized: ms } = ct;
  let Qn = te(!1);
  ae(
    () => (p($t), p(sn)),
    () => {
      p($t) !== void 0 && p(sn) !== void 0 && (ct.width.set(p($t)), ct.height.set(p(sn)));
    }
  ), ae(
    () => (p(Qn), l(), G(at())),
    () => {
      var I;
      !p(Qn) && l() && ((I = at()) == null || I(), U(Qn, !0));
    }
  ), ae(
    () => (G(d()), G(O()), G(E()), G(P()), G(V()), G(At()), G(D()), G(A()), G(S()), G(be()), G(B()), G(ge()), G(pe()), G(Ee()), G(ot()), G(Oe()), G(L()), G(R()), G(re()), G(bn()), G(Yt()), G(Ne()), G(xe()), ru),
    () => {
      const I = {
        flowId: d(),
        connectionLineType: O(),
        connectionRadius: E(),
        selectionMode: P(),
        snapGrid: V(),
        defaultMarkerColor: At(),
        nodesDraggable: D(),
        nodesConnectable: A(),
        elementsSelectable: S(),
        onlyRenderVisibleElements: be(),
        isValidConnection: B(),
        autoPanOnConnect: ge(),
        autoPanOnNodeDrag: pe(),
        onerror: Ee(),
        ondelete: ot(),
        onedgecreate: Oe(),
        connectionMode: L(),
        nodeDragThreshold: R(),
        onconnect: re(),
        onconnectstart: bn(),
        onconnectend: Yt(),
        onbeforedelete: Ne(),
        nodeOrigin: xe()
      };
      ru(ct, I);
    }
  ), ae(
    () => (G(w()), G(C()), G(x()), G(k()), G(ue()), G(He())),
    () => {
      nu(ct, {
        nodeTypes: w(),
        edgeTypes: C(),
        minZoom: x(),
        maxZoom: k(),
        translateExtent: ue(),
        paneClickDistance: He()
      });
    }
  ), ae(
    () => G(Pe()),
    () => {
      dp(U(c, O2(Pe())), "$colorModeClass", i);
    }
  ), ft(), Ve();
  var Wt = L2();
  let Ko;
  var Wo = q(Wt);
  Xd(Wo, {
    get selectionKey() {
      return N();
    },
    get deleteKey() {
      return _();
    },
    get panActivationKey() {
      return M();
    },
    get multiSelectionKey() {
      return z();
    },
    get zoomActivationKey() {
      return H();
    }
  });
  var Fo = X(Wo, 2);
  const Af = /* @__PURE__ */ he(() => ve() === void 0 ? Kn.Free : ve()), Df = /* @__PURE__ */ he(() => ne() === void 0 ? !0 : ne()), If = /* @__PURE__ */ he(() => le() === void 0 ? !0 : le()), Rf = /* @__PURE__ */ he(() => De() === void 0 ? !0 : De()), Zf = /* @__PURE__ */ he(() => Ke() === void 0 ? !0 : Ke()), Bf = /* @__PURE__ */ he(() => Ie() === void 0 ? !1 : Ie()), Xf = /* @__PURE__ */ he(() => Be() === void 0 ? !0 : Be()), Yf = /* @__PURE__ */ he(() => He() === void 0 ? 0 : He());
  Md(Fo, {
    initialViewport: Kt,
    get onMoveStart() {
      return j();
    },
    get onMove() {
      return fe();
    },
    get onMoveEnd() {
      return Q();
    },
    get panOnScrollMode() {
      return p(Af);
    },
    get preventScrolling() {
      return p(Df);
    },
    get zoomOnScroll() {
      return p(If);
    },
    get zoomOnDoubleClick() {
      return p(Rf);
    },
    get zoomOnPinch() {
      return p(Zf);
    },
    get panOnScroll() {
      return p(Bf);
    },
    get panOnDrag() {
      return p(Xf);
    },
    get paneClickDistance() {
      return p(Yf);
    },
    children: (I, Mb) => {
      const Ff = /* @__PURE__ */ he(() => Be() === void 0 ? !0 : Be());
      Od(I, {
        get panOnDrag() {
          return p(Ff);
        },
        get selectionOnDrag() {
          return Y();
        },
        $$events: {
          paneclick(oo) {
            Te.call(this, t, oo);
          },
          panecontextmenu(oo) {
            Te.call(this, t, oo);
          }
        },
        children: (oo, Ob) => {
          var Ja = H2(), Qa = ye(Ja);
          zd(Qa, {
            children: (jf, zb) => {
              var el = z2(), tl = ye(el);
              Rd(tl, {
                get defaultEdgeOptions() {
                  return nt();
                },
                $$events: {
                  edgeclick(Le) {
                    Te.call(this, t, Le);
                  },
                  edgecontextmenu(Le) {
                    Te.call(this, t, Le);
                  },
                  edgemouseenter(Le) {
                    Te.call(this, t, Le);
                  },
                  edgemouseleave(Le) {
                    Te.call(this, t, Le);
                  }
                }
              });
              var nl = X(tl, 2);
              Yd(nl, {
                get containerStyle() {
                  return W();
                },
                get style() {
                  return Z();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (Le, Hb) => {
                    var ol = qe(), Uf = ye(ol);
                    ht(Uf, t, "connectionLine", {}), T(Le, ol);
                  }
                }
              });
              var rl = X(nl, 6);
              Ld(rl, {
                get nodeClickDistance() {
                  return it();
                },
                $$events: {
                  nodeclick(Le) {
                    Te.call(this, t, Le);
                  },
                  nodemouseenter(Le) {
                    Te.call(this, t, Le);
                  },
                  nodemousemove(Le) {
                    Te.call(this, t, Le);
                  },
                  nodemouseleave(Le) {
                    Te.call(this, t, Le);
                  },
                  nodedragstart(Le) {
                    Te.call(this, t, Le);
                  },
                  nodedrag(Le) {
                    Te.call(this, t, Le);
                  },
                  nodedragstop(Le) {
                    Te.call(this, t, Le);
                  },
                  nodecontextmenu(Le) {
                    Te.call(this, t, Le);
                  }
                }
              });
              var Gf = X(rl, 2);
              Bd(Gf, {
                $$events: {
                  selectionclick(Le) {
                    Te.call(this, t, Le);
                  },
                  selectioncontextmenu(Le) {
                    Te.call(this, t, Le);
                  },
                  nodedragstart(Le) {
                    Te.call(this, t, Le);
                  },
                  nodedrag(Le) {
                    Te.call(this, t, Le);
                  },
                  nodedragstop(Le) {
                    Te.call(this, t, Le);
                  }
                }
              }), T(jf, el);
            },
            $$slots: { default: !0 }
          });
          var qf = X(Qa, 2);
          Zd(qf, {}), T(oo, Ja);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var Ua = X(Fo, 2);
  Kd(Ua, {
    get proOptions() {
      return Ye();
    },
    get position() {
      return Xe();
    }
  });
  var Kf = X(Ua, 2);
  ht(Kf, t, "default", {}), F(Wt), On(Wt, (I) => U(Nt, I), () => p(Nt)), Se(
    (I) => Ko = en(
      Wt,
      Ko,
      {
        style: xr(),
        class: I,
        "data-testid": "svelte-flow__wrapper",
        ...o,
        role: "application"
      },
      "svelte-12wlba6"
    ),
    [
      () => xt([
        "svelte-flow",
        ro(),
        u()
      ])
    ],
    he
  ), hl(Wt, "clientWidth", (I) => U($t, I)), hl(Wt, "clientHeight", (I) => U(sn, I)), Fe("dragover", Wt, function(I) {
    Te.call(this, t, I);
  }), Fe("drop", Wt, function(I) {
    Te.call(this, t, I);
  }), T(e, Wt);
  var Wf = de({
    get id() {
      return d();
    },
    set id(I) {
      d(I), m();
    },
    get nodes() {
      return f();
    },
    set nodes(I) {
      f(I), m();
    },
    get edges() {
      return g();
    },
    set edges(I) {
      g(I), m();
    },
    get fitView() {
      return h();
    },
    set fitView(I) {
      h(I), m();
    },
    get fitViewOptions() {
      return b();
    },
    set fitViewOptions(I) {
      b(I), m();
    },
    get minZoom() {
      return x();
    },
    set minZoom(I) {
      x(I), m();
    },
    get maxZoom() {
      return k();
    },
    set maxZoom(I) {
      k(I), m();
    },
    get initialViewport() {
      return v();
    },
    set initialViewport(I) {
      v(I), m();
    },
    get viewport() {
      return $();
    },
    set viewport(I) {
      $(I), m();
    },
    get nodeTypes() {
      return w();
    },
    set nodeTypes(I) {
      w(I), m();
    },
    get edgeTypes() {
      return C();
    },
    set edgeTypes(I) {
      C(I), m();
    },
    get selectionKey() {
      return N();
    },
    set selectionKey(I) {
      N(I), m();
    },
    get selectionMode() {
      return P();
    },
    set selectionMode(I) {
      P(I), m();
    },
    get panActivationKey() {
      return M();
    },
    set panActivationKey(I) {
      M(I), m();
    },
    get multiSelectionKey() {
      return z();
    },
    set multiSelectionKey(I) {
      z(I), m();
    },
    get zoomActivationKey() {
      return H();
    },
    set zoomActivationKey(I) {
      H(I), m();
    },
    get nodesDraggable() {
      return D();
    },
    set nodesDraggable(I) {
      D(I), m();
    },
    get nodesConnectable() {
      return A();
    },
    set nodesConnectable(I) {
      A(I), m();
    },
    get nodeDragThreshold() {
      return R();
    },
    set nodeDragThreshold(I) {
      R(I), m();
    },
    get elementsSelectable() {
      return S();
    },
    set elementsSelectable(I) {
      S(I), m();
    },
    get snapGrid() {
      return V();
    },
    set snapGrid(I) {
      V(I), m();
    },
    get deleteKey() {
      return _();
    },
    set deleteKey(I) {
      _(I), m();
    },
    get connectionRadius() {
      return E();
    },
    set connectionRadius(I) {
      E(I), m();
    },
    get connectionLineType() {
      return O();
    },
    set connectionLineType(I) {
      O(I), m();
    },
    get connectionMode() {
      return L();
    },
    set connectionMode(I) {
      L(I), m();
    },
    get connectionLineStyle() {
      return Z();
    },
    set connectionLineStyle(I) {
      Z(I), m();
    },
    get connectionLineContainerStyle() {
      return W();
    },
    set connectionLineContainerStyle(I) {
      W(I), m();
    },
    get onMoveStart() {
      return j();
    },
    set onMoveStart(I) {
      j(I), m();
    },
    get onMove() {
      return fe();
    },
    set onMove(I) {
      fe(I), m();
    },
    get onMoveEnd() {
      return Q();
    },
    set onMoveEnd(I) {
      Q(I), m();
    },
    get isValidConnection() {
      return B();
    },
    set isValidConnection(I) {
      B(I), m();
    },
    get translateExtent() {
      return ue();
    },
    set translateExtent(I) {
      ue(I), m();
    },
    get nodeExtent() {
      return we();
    },
    set nodeExtent(I) {
      we(I), m();
    },
    get onlyRenderVisibleElements() {
      return be();
    },
    set onlyRenderVisibleElements(I) {
      be(I), m();
    },
    get panOnScrollMode() {
      return ve();
    },
    set panOnScrollMode(I) {
      ve(I), m();
    },
    get preventScrolling() {
      return ne();
    },
    set preventScrolling(I) {
      ne(I), m();
    },
    get zoomOnScroll() {
      return le();
    },
    set zoomOnScroll(I) {
      le(I), m();
    },
    get zoomOnDoubleClick() {
      return De();
    },
    set zoomOnDoubleClick(I) {
      De(I), m();
    },
    get zoomOnPinch() {
      return Ke();
    },
    set zoomOnPinch(I) {
      Ke(I), m();
    },
    get panOnScroll() {
      return Ie();
    },
    set panOnScroll(I) {
      Ie(I), m();
    },
    get panOnDrag() {
      return Be();
    },
    set panOnDrag(I) {
      Be(I), m();
    },
    get selectionOnDrag() {
      return Y();
    },
    set selectionOnDrag(I) {
      Y(I), m();
    },
    get autoPanOnConnect() {
      return ge();
    },
    set autoPanOnConnect(I) {
      ge(I), m();
    },
    get autoPanOnNodeDrag() {
      return pe();
    },
    set autoPanOnNodeDrag(I) {
      pe(I), m();
    },
    get onerror() {
      return Ee();
    },
    set onerror(I) {
      Ee(I), m();
    },
    get ondelete() {
      return ot();
    },
    set ondelete(I) {
      ot(I), m();
    },
    get onedgecreate() {
      return Oe();
    },
    set onedgecreate(I) {
      Oe(I), m();
    },
    get attributionPosition() {
      return Xe();
    },
    set attributionPosition(I) {
      Xe(I), m();
    },
    get proOptions() {
      return Ye();
    },
    set proOptions(I) {
      Ye(I), m();
    },
    get defaultEdgeOptions() {
      return nt();
    },
    set defaultEdgeOptions(I) {
      nt(I), m();
    },
    get width() {
      return gt();
    },
    set width(I) {
      gt(I), m();
    },
    get height() {
      return ee();
    },
    set height(I) {
      ee(I), m();
    },
    get colorMode() {
      return Pe();
    },
    set colorMode(I) {
      Pe(I), m();
    },
    get onconnect() {
      return re();
    },
    set onconnect(I) {
      re(I), m();
    },
    get onconnectstart() {
      return bn();
    },
    set onconnectstart(I) {
      bn(I), m();
    },
    get onconnectend() {
      return Yt();
    },
    set onconnectend(I) {
      Yt(I), m();
    },
    get onbeforedelete() {
      return Ne();
    },
    set onbeforedelete(I) {
      Ne(I), m();
    },
    get oninit() {
      return at();
    },
    set oninit(I) {
      at(I), m();
    },
    get nodeOrigin() {
      return xe();
    },
    set nodeOrigin(I) {
      xe(I), m();
    },
    get paneClickDistance() {
      return He();
    },
    set paneClickDistance(I) {
      He(I), m();
    },
    get nodeClickDistance() {
      return it();
    },
    set nodeClickDistance(I) {
      it(I), m();
    },
    get defaultMarkerColor() {
      return At();
    },
    set defaultMarkerColor(I) {
      At(I), m();
    },
    get style() {
      return xr();
    },
    set style(I) {
      xr(I), m();
    },
    get class() {
      return ro();
    },
    set class(I) {
      ro(I), m();
    }
  });
  return s(), Wf;
}
ie(
  Wd,
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
function Fd(e, t) {
  ce(t, !1);
  let n = y(t, "initialNodes", 12, void 0), r = y(t, "initialEdges", 12, void 0), o = y(t, "initialWidth", 12, void 0), i = y(t, "initialHeight", 12, void 0), s = y(t, "fitView", 12, void 0), a = y(t, "nodeOrigin", 12, void 0);
  const l = Vd({
    nodes: n(),
    edges: r(),
    width: o(),
    height: i(),
    nodeOrigin: a(),
    fitView: s()
  });
  Ir(ds, { getStore: () => l }), Va(() => {
    l.reset();
  }), Ve();
  var u = qe(), c = ye(u);
  return ht(c, t, "default", {}), T(e, u), de({
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
      return a();
    },
    set nodeOrigin(d) {
      a(d), m();
    }
  });
}
ie(
  Fd,
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
var A2 = /* @__PURE__ */ oe("<button><!></button>");
function fo(e, t) {
  const n = Qe(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = Qe(n, [
    "class",
    "bgColor",
    "bgColorHover",
    "color",
    "colorHover",
    "borderColor"
  ]);
  ce(t, !1);
  let o = y(t, "class", 12, void 0), i = y(t, "bgColor", 12, void 0), s = y(t, "bgColorHover", 12, void 0), a = y(t, "color", 12, void 0), l = y(t, "colorHover", 12, void 0), u = y(t, "borderColor", 12, void 0);
  Ve();
  var c = A2();
  let d;
  var f = q(c);
  return ht(f, t, "default", { class: "button-svg" }), F(c), Se(
    (g) => {
      d = en(c, d, { type: "button", class: g, ...r }), rt(c, "--xy-controls-button-background-color-props", i()), rt(c, "--xy-controls-button-background-color-hover-props", s()), rt(c, "--xy-controls-button-color-props", a()), rt(c, "--xy-controls-button-color-hover-props", l()), rt(c, "--xy-controls-button-border-color-props", u());
    },
    [
      () => xt([
        "svelte-flow__controls-button",
        o()
      ])
    ],
    he
  ), Fe("click", c, function(g) {
    Te.call(this, t, g);
  }), T(e, c), de({
    get class() {
      return o();
    },
    set class(g) {
      o(g), m();
    },
    get bgColor() {
      return i();
    },
    set bgColor(g) {
      i(g), m();
    },
    get bgColorHover() {
      return s();
    },
    set bgColorHover(g) {
      s(g), m();
    },
    get color() {
      return a();
    },
    set color(g) {
      a(g), m();
    },
    get colorHover() {
      return l();
    },
    set colorHover(g) {
      l(g), m();
    },
    get borderColor() {
      return u();
    },
    set borderColor(g) {
      u(g), m();
    }
  });
}
ie(
  fo,
  {
    class: {},
    bgColor: {},
    bgColorHover: {},
    color: {},
    colorHover: {},
    borderColor: {}
  },
  ["default"],
  [],
  !0
);
var D2 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function qd(e) {
  var t = D2();
  T(e, t);
}
ie(qd, {}, [], [], !0);
var I2 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function jd(e) {
  var t = I2();
  T(e, t);
}
ie(jd, {}, [], [], !0);
var R2 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Gd(e) {
  var t = R2();
  T(e, t);
}
ie(Gd, {}, [], [], !0);
var Z2 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Ud(e) {
  var t = Z2();
  T(e, t);
}
ie(Ud, {}, [], [], !0);
var B2 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function Jd(e) {
  var t = B2();
  T(e, t);
}
ie(Jd, {}, [], [], !0);
var X2 = /* @__PURE__ */ oe("<!> <!>", 1), Y2 = /* @__PURE__ */ oe("<!> <!> <!> <!> <!> <!>", 1);
function Qd(e, t) {
  ce(t, !1);
  const [n, r] = Je(), o = () => J(O, "$nodesDraggable", n), i = () => J(L, "$nodesConnectable", n), s = () => J(Z, "$elementsSelectable", n), a = () => J(V, "$viewport", n), l = () => J(_, "$minZoom", n), u = () => J(E, "$maxZoom", n), c = te(), d = te(), f = te(), g = te();
  let h = y(t, "position", 12, "bottom-left"), b = y(t, "showZoom", 12, !0), x = y(t, "showFitView", 12, !0), k = y(t, "showLock", 12, !0), v = y(t, "buttonBgColor", 12, void 0), $ = y(t, "buttonBgColorHover", 12, void 0), w = y(t, "buttonColor", 12, void 0), C = y(t, "buttonColorHover", 12, void 0), N = y(t, "buttonBorderColor", 12, void 0), P = y(t, "ariaLabel", 12, void 0), M = y(t, "style", 12, void 0), z = y(t, "orientation", 12, "vertical"), H = y(t, "fitViewOptions", 12, void 0), D = y(t, "class", 12, "");
  const {
    zoomIn: A,
    zoomOut: R,
    fitView: S,
    viewport: V,
    minZoom: _,
    maxZoom: E,
    nodesDraggable: O,
    nodesConnectable: L,
    elementsSelectable: Z
  } = je(), W = {
    bgColor: v(),
    bgColorHover: $(),
    color: w(),
    colorHover: C(),
    borderColor: N()
  }, j = () => {
    A();
  }, fe = () => {
    R();
  }, Q = () => {
    S(H());
  }, B = () => {
    U(c, !p(c)), O.set(p(c)), L.set(p(c)), Z.set(p(c));
  };
  ae(
    () => (o(), i(), s()),
    () => {
      U(c, o() || i() || s());
    }
  ), ae(() => (a(), l()), () => {
    U(d, a().zoom <= l());
  }), ae(() => (a(), u()), () => {
    U(f, a().zoom >= u());
  }), ae(() => G(z()), () => {
    U(g, z() === "horizontal" ? "horizontal" : "vertical");
  }), ft(), Ve();
  const ue = /* @__PURE__ */ he(() => xt([
    "svelte-flow__controls",
    p(g),
    D()
  ])), we = /* @__PURE__ */ he(() => P() ?? "Svelte Flow controls");
  fs(e, {
    get class() {
      return p(ue);
    },
    get position() {
      return h();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return p(we);
    },
    get style() {
      return M();
    },
    children: (ve, ne) => {
      var le = Y2(), De = ye(le);
      ht(De, t, "before", {});
      var Ke = X(De, 2);
      {
        var Ie = (Oe) => {
          var Xe = X2(), Ye = ye(Xe);
          fo(Ye, wt(
            {
              class: "svelte-flow__controls-zoomin",
              title: "zoom in",
              "aria-label": "zoom in",
              get disabled() {
                return p(f);
              }
            },
            W,
            {
              $$events: { click: j },
              children: (gt, ee) => {
                qd(gt);
              },
              $$slots: { default: !0 }
            }
          ));
          var nt = X(Ye, 2);
          fo(nt, wt(
            {
              class: "svelte-flow__controls-zoomout",
              title: "zoom out",
              "aria-label": "zoom out",
              get disabled() {
                return p(d);
              }
            },
            W,
            {
              $$events: { click: fe },
              children: (gt, ee) => {
                jd(gt);
              },
              $$slots: { default: !0 }
            }
          )), T(Oe, Xe);
        };
        $e(Ke, (Oe) => {
          b() && Oe(Ie);
        });
      }
      var Be = X(Ke, 2);
      {
        var Y = (Oe) => {
          fo(Oe, wt(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            W,
            {
              $$events: { click: Q },
              children: (Xe, Ye) => {
                Gd(Xe);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        $e(Be, (Oe) => {
          x() && Oe(Y);
        });
      }
      var ge = X(Be, 2);
      {
        var pe = (Oe) => {
          fo(Oe, wt(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            W,
            {
              $$events: { click: B },
              children: (Xe, Ye) => {
                var nt = qe(), gt = ye(nt);
                {
                  var ee = (re) => {
                    Jd(re);
                  }, Pe = (re) => {
                    Ud(re);
                  };
                  $e(gt, (re) => {
                    p(c) ? re(ee) : re(Pe, !1);
                  });
                }
                T(Xe, nt);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        $e(ge, (Oe) => {
          k() && Oe(pe);
        });
      }
      var Ee = X(ge, 2);
      ht(Ee, t, "default", {});
      var ot = X(Ee, 2);
      ht(ot, t, "after", {}), T(ve, le);
    },
    $$slots: { default: !0 }
  });
  var be = de({
    get position() {
      return h();
    },
    set position(ve) {
      h(ve), m();
    },
    get showZoom() {
      return b();
    },
    set showZoom(ve) {
      b(ve), m();
    },
    get showFitView() {
      return x();
    },
    set showFitView(ve) {
      x(ve), m();
    },
    get showLock() {
      return k();
    },
    set showLock(ve) {
      k(ve), m();
    },
    get buttonBgColor() {
      return v();
    },
    set buttonBgColor(ve) {
      v(ve), m();
    },
    get buttonBgColorHover() {
      return $();
    },
    set buttonBgColorHover(ve) {
      $(ve), m();
    },
    get buttonColor() {
      return w();
    },
    set buttonColor(ve) {
      w(ve), m();
    },
    get buttonColorHover() {
      return C();
    },
    set buttonColorHover(ve) {
      C(ve), m();
    },
    get buttonBorderColor() {
      return N();
    },
    set buttonBorderColor(ve) {
      N(ve), m();
    },
    get ariaLabel() {
      return P();
    },
    set ariaLabel(ve) {
      P(ve), m();
    },
    get style() {
      return M();
    },
    set style(ve) {
      M(ve), m();
    },
    get orientation() {
      return z();
    },
    set orientation(ve) {
      z(ve), m();
    },
    get fitViewOptions() {
      return H();
    },
    set fitViewOptions(ve) {
      H(ve), m();
    },
    get class() {
      return D();
    },
    set class(ve) {
      D(ve), m();
    }
  });
  return r(), be;
}
ie(
  Qd,
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
var Wn;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Wn || (Wn = {}));
var K2 = /* @__PURE__ */ ke("<circle></circle>");
function ef(e, t) {
  ce(t, !1);
  let n = y(t, "radius", 12, 5), r = y(t, "class", 12, "");
  Ve();
  var o = K2();
  return Se(
    (i) => {
      se(o, "cx", n()), se(o, "cy", n()), se(o, "r", n()), mr(o, yn(i));
    },
    [
      () => xt([
        "svelte-flow__background-pattern",
        "dots",
        r()
      ])
    ],
    he
  ), T(e, o), de({
    get radius() {
      return n();
    },
    set radius(i) {
      n(i), m();
    },
    get class() {
      return r();
    },
    set class(i) {
      r(i), m();
    }
  });
}
ie(ef, { radius: {}, class: {} }, [], [], !0);
var W2 = /* @__PURE__ */ ke("<path></path>");
function tf(e, t) {
  ce(t, !1);
  let n = y(t, "lineWidth", 12, 1), r = y(t, "dimensions", 12), o = y(t, "variant", 12, void 0), i = y(t, "class", 12, "");
  Ve();
  var s = W2();
  return Se(
    (a) => {
      se(s, "stroke-width", n()), se(s, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), mr(s, yn(a));
    },
    [
      () => xt([
        "svelte-flow__background-pattern",
        o(),
        i()
      ])
    ],
    he
  ), T(e, s), de({
    get lineWidth() {
      return n();
    },
    set lineWidth(a) {
      n(a), m();
    },
    get dimensions() {
      return r();
    },
    set dimensions(a) {
      r(a), m();
    },
    get variant() {
      return o();
    },
    set variant(a) {
      o(a), m();
    },
    get class() {
      return i();
    },
    set class(a) {
      i(a), m();
    }
  });
}
ie(
  tf,
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
const F2 = {
  [Wn.Dots]: 1,
  [Wn.Lines]: 1,
  [Wn.Cross]: 6
};
var q2 = /* @__PURE__ */ ke('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const j2 = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function nf(e, t) {
  ce(t, !1), tt(e, j2);
  const [n, r] = Je(), o = () => J(C, "$flowId", n), i = () => J(w, "$viewport", n), s = te(), a = te(), l = te(), u = te(), c = te();
  let d = y(t, "id", 12, void 0), f = y(t, "variant", 28, () => Wn.Dots), g = y(t, "gap", 12, 20), h = y(t, "size", 12, 1), b = y(t, "lineWidth", 12, 1), x = y(t, "bgColor", 12, void 0), k = y(t, "patternColor", 12, void 0), v = y(t, "patternClass", 12, void 0), $ = y(t, "class", 12, "");
  const { viewport: w, flowId: C } = je(), N = h() || F2[f()], P = f() === Wn.Dots, M = f() === Wn.Cross, z = Array.isArray(g()) ? g() : [g(), g()];
  ae(
    () => (o(), G(d())),
    () => {
      U(s, `background-pattern-${o()}-${d() ? d() : ""}`);
    }
  ), ae(() => i(), () => {
    U(a, [
      z[0] * i().zoom || 1,
      z[1] * i().zoom || 1
    ]);
  }), ae(() => i(), () => {
    U(l, N * i().zoom);
  }), ae(() => (p(l), p(a)), () => {
    U(u, M ? [p(l), p(l)] : p(a));
  }), ae(
    () => (p(l), p(u)),
    () => {
      U(c, P ? [
        p(l) / 2,
        p(l) / 2
      ] : [
        p(u)[0] / 2,
        p(u)[1] / 2
      ]);
    }
  ), ft(), Ve();
  var H = q2(), D = q(H), A = q(D);
  {
    var R = (E) => {
      const O = /* @__PURE__ */ he(() => p(l) / 2);
      ef(E, {
        get radius() {
          return p(O);
        },
        get class() {
          return v();
        }
      });
    }, S = (E) => {
      tf(E, {
        get dimensions() {
          return p(u);
        },
        get variant() {
          return f();
        },
        get lineWidth() {
          return b();
        },
        get class() {
          return v();
        }
      });
    };
    $e(A, (E) => {
      P ? E(R) : E(S, !1);
    });
  }
  F(D);
  var V = X(D);
  F(H), Se(
    (E) => {
      mr(H, yn(E), "svelte-1r7pe8d"), rt(H, "--xy-background-color-props", x()), rt(H, "--xy-background-pattern-color-props", k()), se(D, "id", p(s)), se(D, "x", i().x % p(a)[0]), se(D, "y", i().y % p(a)[1]), se(D, "width", p(a)[0]), se(D, "height", p(a)[1]), se(D, "patternTransform", `translate(-${p(c)[0]},-${p(c)[1]})`), se(V, "fill", `url(#${p(s)})`);
    },
    [
      () => xt(["svelte-flow__background", $()])
    ],
    he
  ), T(e, H);
  var _ = de({
    get id() {
      return d();
    },
    set id(E) {
      d(E), m();
    },
    get variant() {
      return f();
    },
    set variant(E) {
      f(E), m();
    },
    get gap() {
      return g();
    },
    set gap(E) {
      g(E), m();
    },
    get size() {
      return h();
    },
    set size(E) {
      h(E), m();
    },
    get lineWidth() {
      return b();
    },
    set lineWidth(E) {
      b(E), m();
    },
    get bgColor() {
      return x();
    },
    set bgColor(E) {
      x(E), m();
    },
    get patternColor() {
      return k();
    },
    set patternColor(E) {
      k(E), m();
    },
    get patternClass() {
      return v();
    },
    set patternClass(E) {
      v(E), m();
    },
    get class() {
      return $();
    },
    set class(E) {
      $(E), m();
    }
  });
  return r(), _;
}
ie(
  nf,
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
var G2 = /* @__PURE__ */ ke("<rect></rect>");
function rf(e, t) {
  ce(t, !1);
  let n = y(t, "x", 12), r = y(t, "y", 12), o = y(t, "width", 12, 0), i = y(t, "height", 12, 0), s = y(t, "borderRadius", 12, 5), a = y(t, "color", 12, void 0), l = y(t, "shapeRendering", 12), u = y(t, "strokeColor", 12, void 0), c = y(t, "strokeWidth", 12, 2), d = y(t, "selected", 12, !1), f = y(t, "class", 12, "");
  Ve();
  var g = G2();
  return Se(
    (h) => {
      mr(g, yn(h)), se(g, "x", n()), se(g, "y", r()), se(g, "rx", s()), se(g, "ry", s()), se(g, "width", o()), se(g, "height", i()), se(g, "style", `${a() ? `fill: ${a()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), se(g, "shape-rendering", l()), et(g, "selected", d());
    },
    [
      () => xt(["svelte-flow__minimap-node", f()])
    ],
    he
  ), T(e, g), de({
    get x() {
      return n();
    },
    set x(h) {
      n(h), m();
    },
    get y() {
      return r();
    },
    set y(h) {
      r(h), m();
    },
    get width() {
      return o();
    },
    set width(h) {
      o(h), m();
    },
    get height() {
      return i();
    },
    set height(h) {
      i(h), m();
    },
    get borderRadius() {
      return s();
    },
    set borderRadius(h) {
      s(h), m();
    },
    get color() {
      return a();
    },
    set color(h) {
      a(h), m();
    },
    get shapeRendering() {
      return l();
    },
    set shapeRendering(h) {
      l(h), m();
    },
    get strokeColor() {
      return u();
    },
    set strokeColor(h) {
      u(h), m();
    },
    get strokeWidth() {
      return c();
    },
    set strokeWidth(h) {
      c(h), m();
    },
    get selected() {
      return d();
    },
    set selected(h) {
      d(h), m();
    },
    get class() {
      return f();
    },
    set class(h) {
      f(h), m();
    }
  });
}
ie(
  rf,
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
function ou(e, t) {
  const n = Hm({
    domNode: e,
    panZoom: t.panZoom,
    getTransform: () => {
      const o = K(t.viewport);
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
const Vs = (e) => e instanceof Function ? e : () => e;
var U2 = /* @__PURE__ */ ke("<title> </title>"), J2 = /* @__PURE__ */ ke('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function of(e, t) {
  ce(t, !1);
  const [n, r] = Je(), o = () => J(Be, "$flowId", n), i = () => J(De, "$viewport", n), s = () => J(Ke, "$containerWidth", n), a = () => J(Ie, "$containerHeight", n), l = () => J(le, "$nodeLookup", n), u = () => J(ne, "$nodes", n), c = () => J(Y, "$panZoom", n), d = () => J(ge, "$translateExtent", n), f = te(), g = te(), h = te(), b = te(), x = te(), k = te(), v = te(), $ = te(), w = te(), C = te(), N = te(), P = te(), M = te();
  let z = y(t, "position", 12, "bottom-right"), H = y(t, "ariaLabel", 12, "Mini map"), D = y(t, "nodeStrokeColor", 12, "transparent"), A = y(t, "nodeColor", 12, void 0), R = y(t, "nodeClass", 12, ""), S = y(t, "nodeBorderRadius", 12, 5), V = y(t, "nodeStrokeWidth", 12, 2), _ = y(t, "bgColor", 12, void 0), E = y(t, "maskColor", 12, void 0), O = y(t, "maskStrokeColor", 12, void 0), L = y(t, "maskStrokeWidth", 12, void 0), Z = y(t, "width", 12, void 0), W = y(t, "height", 12, void 0), j = y(t, "pannable", 12, !0), fe = y(t, "zoomable", 12, !0), Q = y(t, "inversePan", 12, void 0), B = y(t, "zoomStep", 12, void 0), ue = y(t, "style", 12, ""), we = y(t, "class", 12, "");
  const be = 200, ve = 150, {
    nodes: ne,
    nodeLookup: le,
    viewport: De,
    width: Ke,
    height: Ie,
    flowId: Be,
    panZoom: Y,
    translateExtent: ge
  } = je(), pe = A() === void 0 ? void 0 : Vs(A()), Ee = Vs(D()), ot = Vs(R()), Oe = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), Xe = `svelte-flow__minimap-desc-${o()}`;
  let Ye = te(p(f));
  const nt = () => p(k);
  ae(
    () => (i(), s(), a()),
    () => {
      U(f, {
        x: -i().x / i().zoom,
        y: -i().y / i().zoom,
        width: s() / i().zoom,
        height: a() / i().zoom
      });
    }
  ), ae(
    () => (l(), p(f), u()),
    () => {
      U(Ye, l().size > 0 ? nd(Ao(l()), p(f)) : p(f)), u();
    }
  ), ae(() => G(Z()), () => {
    U(g, Z() ?? be);
  }), ae(() => G(W()), () => {
    U(h, W() ?? ve);
  }), ae(
    () => (p(Ye), p(g)),
    () => {
      U(b, p(Ye).width / p(g));
    }
  ), ae(
    () => (p(Ye), p(h)),
    () => {
      U(x, p(Ye).height / p(h));
    }
  ), ae(
    () => (p(b), p(x)),
    () => {
      U(k, Math.max(p(b), p(x)));
    }
  ), ae(() => (p(k), p(g)), () => {
    U(v, p(k) * p(g));
  }), ae(
    () => (p(k), p(h)),
    () => {
      U($, p(k) * p(h));
    }
  ), ae(() => p(k), () => {
    U(w, 5 * p(k));
  }), ae(
    () => (p(Ye), p(v), p(w)),
    () => {
      U(C, p(Ye).x - (p(v) - p(Ye).width) / 2 - p(w));
    }
  ), ae(
    () => (p(Ye), p($), p(w)),
    () => {
      U(N, p(Ye).y - (p($) - p(Ye).height) / 2 - p(w));
    }
  ), ae(() => (p(v), p(w)), () => {
    U(P, p(v) + p(w) * 2);
  }), ae(() => (p($), p(w)), () => {
    U(M, p($) + p(w) * 2);
  }), ft(), Ve();
  const gt = /* @__PURE__ */ he(() => ue() + (_() ? `;--xy-minimap-background-color-props:${_()}` : "")), ee = /* @__PURE__ */ he(() => xt(["svelte-flow__minimap", we()]));
  fs(e, {
    get position() {
      return z();
    },
    get style() {
      return p(gt);
    },
    get class() {
      return p(ee);
    },
    "data-testid": "svelte-flow__minimap",
    children: (re, bn) => {
      var Yt = qe(), Ne = ye(Yt);
      {
        var at = (xe) => {
          var He = J2();
          se(He, "aria-labelledby", Xe);
          var it = q(He);
          {
            var At = (Nt) => {
              var $t = U2();
              se($t, "id", Xe);
              var sn = q($t, !0);
              F($t), Se(() => mn(sn, H())), T(Nt, $t);
            };
            $e(it, (Nt) => {
              H() && Nt(At);
            });
          }
          var xr = X(it);
          zt(xr, 1, u, (Nt) => Nt.id, (Nt, $t) => {
            var sn = qe();
            const Kt = /* @__PURE__ */ he(() => l().get(p($t).id));
            var ct = ye(sn);
            {
              var ms = (Qn) => {
                const Wt = /* @__PURE__ */ he(() => Jn(p(Kt))), Ko = /* @__PURE__ */ he(() => pe == null ? void 0 : pe(p(Kt))), Wo = /* @__PURE__ */ he(() => Ee(p(Kt))), Fo = /* @__PURE__ */ he(() => ot(p(Kt)));
                rf(Qn, wt(
                  {
                    get x() {
                      return p(Kt).internals.positionAbsolute.x;
                    },
                    get y() {
                      return p(Kt).internals.positionAbsolute.y;
                    }
                  },
                  () => p(Wt),
                  {
                    get selected() {
                      return p(Kt).selected;
                    },
                    get color() {
                      return p(Ko);
                    },
                    get borderRadius() {
                      return S();
                    },
                    get strokeColor() {
                      return p(Wo);
                    },
                    get strokeWidth() {
                      return V();
                    },
                    shapeRendering: Oe,
                    get class() {
                      return p(Fo);
                    }
                  }
                ));
              };
              $e(ct, (Qn) => {
                p(Kt) && id(p(Kt)) && Qn(ms);
              });
            }
            T(Nt, sn);
          });
          var ro = X(xr);
          F(He), pt(He, (Nt, $t) => ou == null ? void 0 : ou(Nt, $t), () => ({
            panZoom: c(),
            viewport: De,
            getViewScale: nt,
            translateExtent: d(),
            width: s(),
            height: a(),
            inversePan: Q(),
            zoomStep: B(),
            pannable: j(),
            zoomable: fe()
          })), Se(() => {
            se(He, "width", p(g)), se(He, "height", p(h)), se(He, "viewBox", `${p(C) ?? ""} ${p(N) ?? ""} ${p(P) ?? ""} ${p(M) ?? ""}`), rt(He, "--xy-minimap-mask-background-color-props", E()), rt(He, "--xy-minimap-mask-stroke-color-props", O()), rt(He, "--xy-minimap-mask-stroke-width-props", L() ? L() * p(k) : void 0), se(ro, "d", `M${p(C) - p(w)},${p(N) - p(w)}h${p(P) + p(w) * 2}v${p(M) + p(w) * 2}h${-p(P) - p(w) * 2}z
      M${p(f).x ?? ""},${p(f).y ?? ""}h${p(f).width ?? ""}v${p(f).height ?? ""}h${-p(f).width}z`);
          }), T(xe, He);
        };
        $e(Ne, (xe) => {
          c() && xe(at);
        });
      }
      T(re, Yt);
    },
    $$slots: { default: !0 }
  });
  var Pe = de({
    get position() {
      return z();
    },
    set position(re) {
      z(re), m();
    },
    get ariaLabel() {
      return H();
    },
    set ariaLabel(re) {
      H(re), m();
    },
    get nodeStrokeColor() {
      return D();
    },
    set nodeStrokeColor(re) {
      D(re), m();
    },
    get nodeColor() {
      return A();
    },
    set nodeColor(re) {
      A(re), m();
    },
    get nodeClass() {
      return R();
    },
    set nodeClass(re) {
      R(re), m();
    },
    get nodeBorderRadius() {
      return S();
    },
    set nodeBorderRadius(re) {
      S(re), m();
    },
    get nodeStrokeWidth() {
      return V();
    },
    set nodeStrokeWidth(re) {
      V(re), m();
    },
    get bgColor() {
      return _();
    },
    set bgColor(re) {
      _(re), m();
    },
    get maskColor() {
      return E();
    },
    set maskColor(re) {
      E(re), m();
    },
    get maskStrokeColor() {
      return O();
    },
    set maskStrokeColor(re) {
      O(re), m();
    },
    get maskStrokeWidth() {
      return L();
    },
    set maskStrokeWidth(re) {
      L(re), m();
    },
    get width() {
      return Z();
    },
    set width(re) {
      Z(re), m();
    },
    get height() {
      return W();
    },
    set height(re) {
      W(re), m();
    },
    get pannable() {
      return j();
    },
    set pannable(re) {
      j(re), m();
    },
    get zoomable() {
      return fe();
    },
    set zoomable(re) {
      fe(re), m();
    },
    get inversePan() {
      return Q();
    },
    set inversePan(re) {
      Q(re), m();
    },
    get zoomStep() {
      return B();
    },
    set zoomStep(re) {
      B(re), m();
    },
    get style() {
      return ue();
    },
    set style(re) {
      ue(re), m();
    },
    get class() {
      return we();
    },
    set class(re) {
      we(re), m();
    }
  });
  return r(), Pe;
}
ie(
  of,
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
const iu = (e) => Q0(e);
function on() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: s, height: a, minZoom: l, maxZoom: u, panZoom: c, nodes: d, edges: f, domNode: g, nodeLookup: h, nodeOrigin: b, edgeLookup: x, connectionLookup: k } = je(), v = (C) => {
    var N, P;
    const M = K(h), z = iu(C) ? C : M.get(C.id), H = z.parentId ? nm(z.position, z.measured, z.parentId, M, K(b)) : z.position, D = {
      ...z,
      position: H,
      width: ((N = z.measured) == null ? void 0 : N.width) ?? z.width,
      height: ((P = z.measured) == null ? void 0 : P.height) ?? z.height
    };
    return Kr(D);
  }, $ = (C, N, P = { replace: !1 }) => {
    var M;
    const z = (M = K(h).get(C)) == null ? void 0 : M.internals.userNode;
    if (!z)
      return;
    const H = typeof N == "function" ? N(z) : N;
    P.replace ? d.update((D) => D.map((A) => A.id === C ? iu(H) ? H : { ...A, ...H } : A)) : (Object.assign(z, H), d.update((D) => D));
  }, w = (C) => K(h).get(C);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: w,
    getNode: (C) => {
      var N;
      return (N = w(C)) == null ? void 0 : N.internals.userNode;
    },
    getNodes: (C) => C === void 0 ? K(d) : su(K(h), C),
    getEdge: (C) => K(x).get(C),
    getEdges: (C) => C === void 0 ? K(f) : su(K(x), C),
    setZoom: (C, N) => {
      const P = K(c);
      return P ? P.scaleTo(C, { duration: N == null ? void 0 : N.duration }) : Promise.resolve(!1);
    },
    getZoom: () => K(i).zoom,
    setViewport: async (C, N) => {
      const P = K(i), M = K(c);
      return M ? (await M.setViewport({
        x: C.x ?? P.x,
        y: C.y ?? P.y,
        zoom: C.zoom ?? P.zoom
      }, { duration: N == null ? void 0 : N.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => K(i),
    setCenter: async (C, N, P) => {
      const M = typeof (P == null ? void 0 : P.zoom) < "u" ? P.zoom : K(u), z = K(c);
      return z ? (await z.setViewport({
        x: K(s) / 2 - C * M,
        y: K(a) / 2 - N * M,
        zoom: M
      }, { duration: P == null ? void 0 : P.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (C, N) => {
      const P = K(c);
      if (!P)
        return Promise.resolve(!1);
      const M = Ra(C, K(s), K(a), K(l), K(u), (N == null ? void 0 : N.padding) ?? 0.1);
      return await P.setViewport(M, { duration: N == null ? void 0 : N.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (C, N = !0, P) => {
      const M = Zl(C), z = M ? C : v(C);
      return z ? (P || K(d)).filter((H) => {
        const D = K(h).get(H.id);
        if (!D || !M && H.id === C.id)
          return !1;
        const A = Kr(D), R = So(A, z);
        return N && R > 0 || R >= z.width * z.height;
      }) : [];
    },
    isNodeIntersecting: (C, N, P = !0) => {
      const M = Zl(C) ? C : v(C);
      if (!M)
        return !1;
      const z = So(M, N);
      return P && z > 0 || z >= M.width * M.height;
    },
    deleteElements: async ({ nodes: C = [], edges: N = [] }) => {
      const { nodes: P, edges: M } = await Qc({
        nodesToRemove: C,
        edgesToRemove: N,
        nodes: K(d),
        edges: K(f),
        onBeforeDelete: K(r)
      });
      return P && d.update((z) => z.filter((H) => !P.some(({ id: D }) => D === H.id))), M && f.update((z) => z.filter((H) => !M.some(({ id: D }) => D === H.id))), {
        deletedNodes: P,
        deletedEdges: M
      };
    },
    screenToFlowPosition: (C, N = { snapToGrid: !0 }) => {
      const P = K(g);
      if (!P)
        return C;
      const M = N.snapToGrid ? K(o) : !1, { x: z, y: H, zoom: D } = K(i), { x: A, y: R } = P.getBoundingClientRect(), S = {
        x: C.x - A,
        y: C.y - R
      };
      return Do(S, [z, H, D], M !== null, M || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (C) => {
      const N = K(g);
      if (!N)
        return C;
      const { x: P, y: M, zoom: z } = K(i), { x: H, y: D } = N.getBoundingClientRect(), A = od(C, [P, M, z]);
      return {
        x: A.x + H,
        y: A.y + D
      };
    },
    toObject: () => ({
      nodes: K(d).map((C) => ({
        ...C,
        // we want to make sure that changes to the nodes object that gets returned by toObject
        // do not affect the nodes object
        position: { ...C.position },
        data: { ...C.data }
      })),
      edges: K(f).map((C) => ({ ...C })),
      viewport: { ...K(i) }
    }),
    updateNode: $,
    updateNodeData: (C, N, P) => {
      var M;
      const z = (M = K(h).get(C)) == null ? void 0 : M.internals.userNode;
      if (!z)
        return;
      const H = typeof N == "function" ? N(z) : N;
      z.data = P != null && P.replace ? H : { ...z.data, ...H }, d.update((D) => D);
    },
    getNodesBounds: (C) => {
      const N = K(h), P = K(b);
      return em(C, { nodeLookup: N, nodeOrigin: P });
    },
    getHandleConnections: ({ type: C, id: N, nodeId: P }) => {
      var M;
      return Array.from(((M = K(k).get(`${P}-${C}-${N ?? null}`)) == null ? void 0 : M.values()) ?? []);
    },
    viewport: i
  };
}
function su(e, t) {
  var n;
  const r = [];
  for (const o of t) {
    const i = e.get(o);
    if (i) {
      const s = "internals" in i ? (n = i.internals) == null ? void 0 : n.userNode : i;
      r.push(s);
    }
  }
  return r;
}
var Q2 = /* @__PURE__ */ oe('<div class="svelte-flow__node-toolbar"><!></div>');
function sf(e, t) {
  ce(t, !1);
  const [n, r] = Je(), o = () => J($, "$nodes", n), i = () => J(v, "$nodeLookup", n), s = () => J(k, "$viewport", n), a = () => J(x, "$domNode", n), l = te(), u = te(), c = te();
  let d = y(t, "nodeId", 12, void 0), f = y(t, "position", 12, void 0), g = y(t, "align", 12, void 0), h = y(t, "offset", 12, void 0), b = y(t, "isVisible", 12, void 0);
  const { domNode: x, viewport: k, nodeLookup: v, nodes: $ } = je(), { getNodesBounds: w } = on(), C = ar("svelteflow__node_id");
  let N = te(), P = te([]), M = h() !== void 0 ? h() : 10, z = f() !== void 0 ? f() : Ce.Top, H = g() !== void 0 ? g() : "center";
  ae(
    () => (o(), G(d()), i()),
    () => {
      o();
      const V = Array.isArray(d()) ? d() : [d() || C];
      U(P, V.reduce(
        (_, E) => {
          const O = i().get(E);
          return O && _.push(O), _;
        },
        []
      ));
    }
  ), ae(
    () => (p(P), s()),
    () => {
      const V = w(p(P));
      V && U(N, mm(V, s(), z, M, H));
    }
  ), ae(() => p(P), () => {
    U(l, p(P).length === 0 ? 1 : Math.max(...p(P).map((V) => (V.internals.z || 5) + 1)));
  }), ae(() => o(), () => {
    U(u, o().filter((V) => V.selected).length);
  }), ae(
    () => (G(b()), p(P), p(u)),
    () => {
      U(c, typeof b() == "boolean" ? b() : p(P).length === 1 && p(P)[0].selected && p(u) === 1);
    }
  ), ft(), Ve();
  var D = qe(), A = ye(D);
  {
    var R = (V) => {
      var _ = Q2(), E = q(_);
      ht(E, t, "default", {}), F(_), pt(_, (O, L) => Di == null ? void 0 : Di(O, L), () => ({ domNode: a() })), Se(
        (O) => {
          se(_, "data-id", O), rt(_, "position", "absolute"), rt(_, "transform", p(N)), rt(_, "z-index", p(l));
        },
        [
          () => p(P).reduce((O, L) => `${O}${L.id} `, "").trim()
        ],
        he
      ), T(V, _);
    };
    $e(A, (V) => {
      a() && p(c) && p(P) && V(R);
    });
  }
  T(e, D);
  var S = de({
    get nodeId() {
      return d();
    },
    set nodeId(V) {
      d(V), m();
    },
    get position() {
      return f();
    },
    set position(V) {
      f(V), m();
    },
    get align() {
      return g();
    },
    set align(V) {
      g(V), m();
    },
    get offset() {
      return h();
    },
    set offset(V) {
      h(V), m();
    },
    get isVisible() {
      return b();
    },
    set isVisible(V) {
      b(V), m();
    }
  });
  return r(), S;
}
ie(
  sf,
  {
    nodeId: {},
    position: {},
    align: {},
    offset: {},
    isVisible: {}
  },
  ["default"],
  [],
  !0
);
function wr(e) {
  const { nodes: t, nodeLookup: n } = je();
  let r = [], o = !0;
  return Yn([t, n], ([, i], s) => {
    var a;
    const l = [], u = Array.isArray(e), c = u ? e : [e];
    for (const d of c) {
      const f = (a = i.get(d)) == null ? void 0 : a.internals.userNode;
      f && l.push({
        id: f.id,
        type: f.type,
        data: f.data
      });
    }
    (!km(l, r) || o) && (r = l, s(u ? l : l[0] ?? null), o = !1);
  });
}
const ey = () => {
  const e = me([]), t = me([]), n = me({ x: 250, y: 100, zoom: 1 });
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
      e.update(
        (i) => i.map((s) => s.id === r ? { ...s, data: { ...s.data, ...o } } : s)
      );
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
}, di = ey();
var ty = /* @__PURE__ */ oe("<button><!></button>");
function Ue(e, t) {
  ce(t, !0);
  const n = y(t, "children", 7), r = /* @__PURE__ */ Xt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = ty();
  let i;
  var s = q(o);
  return Rr(s, () => n() ?? dt), F(o), Se(() => i = en(o, i, {
    type: "button",
    ...r,
    class: `tf-btn nopan nodrag ${t.class ?? ""}`
  })), T(e, o), de({
    get children() {
      return n();
    },
    set children(a) {
      n(a), m();
    }
  });
}
ie(Ue, { children: {} }, [], [], !0);
var ny = /* @__PURE__ */ oe("<input>");
function af(e, t) {
  ce(t, !0);
  const n = /* @__PURE__ */ Xt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = ny();
  mc(r);
  let o;
  Se(() => o = en(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), T(e, r), de();
}
ie(af, {}, [], [], !0);
var ry = /* @__PURE__ */ oe("<input>");
function Gt(e, t) {
  ce(t, !0);
  const n = /* @__PURE__ */ Xt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = ry();
  mc(r);
  let o;
  Se(() => o = en(r, o, {
    type: "text",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), T(e, r), de();
}
ie(Gt, {}, [], [], !0);
var oy = /* @__PURE__ */ oe("<textarea></textarea>");
function Lt(e, t) {
  ce(t, !0);
  const n = /* @__PURE__ */ Xt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = oy();
  j1(r);
  let o;
  Se(() => o = en(r, o, {
    ...n,
    class: `tf-textarea nodrag ${t.class ?? ""}`
  })), T(e, r), de();
}
ie(Lt, {}, [], [], !0);
var iy = /* @__PURE__ */ oe('<div role="button"><!></div>'), sy = /* @__PURE__ */ oe("<div></div>");
function lf(e, t) {
  const n = Qe(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = Qe(n, ["items", "onChange", "activeIndex"]);
  ce(t, !1);
  let o = y(t, "items", 28, () => []), i = y(t, "onChange", 12, () => {
  }), s = y(t, "activeIndex", 12, 0);
  function a(c, d) {
    var f;
    s(d), (f = i()) == null || f(c, d);
  }
  Ve();
  var l = sy();
  let u;
  return zt(l, 5, o, ts, (c, d, f) => {
    var g = iy();
    se(g, "tabindex", f), g.__click = () => a(p(d), f), g.__keydown = (k) => {
      (k.key === "Enter" || k.key === " ") && (k.preventDefault(), a(p(d), f));
    };
    var h = q(g);
    {
      var b = (k) => {
        var v = Ge();
        Se(() => mn(v, p(d).label)), T(k, v);
      }, x = (k) => {
        var v = qe(), $ = ye(v);
        Rr($, () => p(d).label ?? dt), T(k, v);
      };
      $e(h, (k) => {
        typeof p(d).label == "string" ? k(b) : k(x, !1);
      });
    }
    F(g), Se(() => Zr(g, `tf-tabs-item ${(f === s() ? "active" : "") ?? ""}`)), T(c, g);
  }), F(l), Se(() => u = en(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), T(e, l), de({
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
es(["click", "keydown"]);
ie(lf, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var ay = (e, t, n) => t(p(n)), ly = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(p(n)));
}, uy = /* @__PURE__ */ oe('<div class="tf-collapse-item-description"><!></div>'), cy = /* @__PURE__ */ oe('<div class="tf-collapse-item-content"><!></div>'), dy = /* @__PURE__ */ oe('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><span class="tf-collapse-item-title-icon"><!></span> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), fy = /* @__PURE__ */ oe("<div></div>");
const gy = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function uf(e, t) {
  ce(t, !0), tt(e, gy);
  let n = y(t, "items", 7), r = y(t, "onChange", 7), o = y(t, "activeKeys", 31, () => an([]));
  function i(a) {
    var l;
    o().includes(a.key) ? o(o().filter((u) => u !== a.key)) : (o().push(a.key), o(o())), (l = r()) == null || l(a, o());
  }
  var s = fy();
  return zt(s, 21, n, ts, (a, l, u) => {
    var c = dy(), d = q(c);
    se(d, "tabindex", u), d.__click = [ay, i, l], d.__keydown = [ly, i, l];
    var f = q(d), g = q(f);
    Bn(g, {
      get target() {
        return p(l).icon;
      }
    }), F(f);
    var h = X(f, 2);
    Bn(h, {
      get target() {
        return p(l).title;
      }
    });
    var b = X(h, 2);
    F(d);
    var x = X(d, 2);
    {
      var k = (w) => {
        var C = uy(), N = q(C);
        Bn(N, {
          get target() {
            return p(l).description;
          }
        }), F(C), T(w, C);
      };
      $e(x, (w) => {
        p(l).description && w(k);
      });
    }
    var v = X(x, 2);
    {
      var $ = (w) => {
        var C = cy(), N = q(C);
        Bn(N, {
          get target() {
            return p(l).content;
          }
        }), F(C), T(w, C);
      };
      $e(v, (w) => {
        o().includes(p(l).key) && w($);
      });
    }
    F(c), Se((w) => Zr(b, `tf-collapse-item-title-arrow ${w ?? ""} svelte-1jfktzw`), [
      () => o().includes(p(l).key) ? "rotate-90" : ""
    ]), T(a, c);
  }), F(s), Se(() => {
    se(s, "style", t.style), Zr(s, `tf-collapse ${t.class ?? ""} svelte-1jfktzw`);
  }), T(e, s), de({
    get items() {
      return n();
    },
    set items(a) {
      n(a), m();
    },
    get onChange() {
      return r();
    },
    set onChange(a) {
      r(a), m();
    },
    get activeKeys() {
      return o();
    },
    set activeKeys(a = []) {
      o(a), m();
    }
  });
}
es(["click", "keydown"]);
ie(uf, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Bn(e, t) {
  ce(t, !0);
  let n = y(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = qe(), o = ye(r);
  {
    var i = (a) => {
      var l = qe(), u = ye(l);
      Rr(u, () => n() ?? dt), T(a, l);
    }, s = (a) => {
      var l = qe(), u = ye(l);
      pc(u, n), T(a, l);
    };
    $e(o, (a) => {
      typeof n() == "function" ? a(i) : a(s, !1);
    });
  }
  return T(e, r), de({
    get target() {
      return n();
    },
    set target(a) {
      n(a), m();
    }
  });
}
ie(Bn, { target: {} }, [], [], !0);
var py = (e, t, n) => t(p(n)), hy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), vy = /* @__PURE__ */ oe('<div class="tf-select-content-children"><!></div>'), my = /* @__PURE__ */ oe('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), yy = /* @__PURE__ */ oe('<div class="tf-select-content nopan nodrag"><!></div>'), wy = /* @__PURE__ */ oe("<!> <!>", 1), by = /* @__PURE__ */ oe('<div class="tf-select-input-placeholder"> </div>'), xy = /* @__PURE__ */ oe('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), $y = /* @__PURE__ */ oe("<div><!></div>");
function Gn(e, t) {
  ce(t, !0);
  const n = ($, w = dt) => {
    var C = qe(), N = ye(C);
    zt(N, 19, w, (P, M) => `${M}_${P.value}`, (P, M) => {
      var z = my(), H = ye(z);
      H.__click = [py, b, M];
      var D = q(H), A = q(D);
      {
        var R = (E) => {
          var O = hy();
          T(E, O);
        };
        $e(A, (E) => {
          p(M).children && p(M).children.length > 0 && E(R);
        });
      }
      F(D);
      var S = X(D, 2);
      Bn(S, {
        get target() {
          return p(M).label;
        }
      }), F(H);
      var V = X(H, 2);
      {
        var _ = (E) => {
          var O = vy(), L = q(O);
          n(L, () => p(M).children), F(O), T(E, O);
        };
        $e(V, (E) => {
          p(M).children && p(M).children.length > 0 && (l() || c().includes(p(M).value)) && E(_);
        });
      }
      T(P, z);
    }), T($, C);
  };
  let r = y(t, "items", 7), o = y(t, "onExpand", 7), i = y(t, "onSelect", 7), s = y(t, "value", 23, () => []), a = y(t, "defaultValue", 23, () => []), l = y(t, "expandAll", 7, !0), u = y(t, "multiple", 7, !1), c = y(t, "expandValue", 23, () => []), d = y(t, "placeholder", 7), f = /* @__PURE__ */ Xt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "items",
    "onExpand",
    "onSelect",
    "value",
    "defaultValue",
    "expandAll",
    "multiple",
    "expandValue",
    "placeholder"
  ]), g = /* @__PURE__ */ ze(() => {
    const $ = [], w = (C) => {
      for (let N of C)
        s().length > 0 ? s().includes(N.value) && $.push(N) : a().includes(N.value) && $.push(N), N.children && N.children.length > 0 && w(N.children);
    };
    return w(r()), $;
  }), h;
  function b($) {
    var w, C;
    if ($.children && $.children.length > 0) {
      (w = o()) == null || w($);
      return;
    } else
      h == null || h.hide(), (C = i()) == null || C($);
  }
  var x = $y();
  let k;
  var v = q(x);
  return On(
    Xo(v, {
      floating: ($) => {
        var w = yy(), C = q(w);
        n(C, r), F(w), T($, w);
      },
      children: ($, w) => {
        var C = xy();
        let N;
        var P = q(C);
        zt(
          P,
          23,
          () => p(g),
          (M, z) => `${z}_${M.value}`,
          (M, z, H) => {
            var D = qe(), A = ye(D);
            {
              var R = (V) => {
                var _ = qe(), E = ye(_);
                {
                  var O = (L) => {
                    Bn(L, {
                      get target() {
                        return p(z).label;
                      }
                    });
                  };
                  $e(E, (L) => {
                    p(H) === 0 && L(O);
                  });
                }
                T(V, _);
              }, S = (V) => {
                var _ = wy(), E = ye(_);
                Bn(E, {
                  get target() {
                    return p(z).label;
                  }
                });
                var O = X(E, 2);
                {
                  var L = (Z) => {
                    var W = Ge(",");
                    T(Z, W);
                  };
                  $e(O, (Z) => {
                    p(H) < p(g).length - 1 && Z(L);
                  });
                }
                T(V, _);
              };
              $e(A, (V) => {
                u() ? V(S, !1) : V(R);
              });
            }
            T(M, D);
          },
          (M) => {
            var z = by(), H = q(z, !0);
            F(z), Se(() => mn(H, d())), T(M, z);
          }
        ), F(P), Ae(2), F(C), Se(() => N = en(C, N, {
          class: "tf-select-input nopan nodrag",
          ...f
        })), T($, C);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    ($) => h = $,
    () => h
  ), F(x), Se(() => k = en(x, k, {
    ...f,
    class: `tf-select ${f.class ?? ""}`
  })), T(e, x), de({
    get items() {
      return r();
    },
    set items($) {
      r($), m();
    },
    get onExpand() {
      return o();
    },
    set onExpand($) {
      o($), m();
    },
    get onSelect() {
      return i();
    },
    set onSelect($) {
      i($), m();
    },
    get value() {
      return s();
    },
    set value($ = []) {
      s($), m();
    },
    get defaultValue() {
      return a();
    },
    set defaultValue($ = []) {
      a($), m();
    },
    get expandAll() {
      return l();
    },
    set expandAll($ = !0) {
      l($), m();
    },
    get multiple() {
      return u();
    },
    set multiple($ = !1) {
      u($), m();
    },
    get expandValue() {
      return c();
    },
    set expandValue($ = []) {
      c($), m();
    },
    get placeholder() {
      return d();
    },
    set placeholder($) {
      d($), m();
    }
  });
}
es(["click"]);
ie(
  Gn,
  {
    items: {},
    onExpand: {},
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
const No = Math.min, Lr = Math.max, Zi = Math.round, dn = (e) => ({
  x: e,
  y: e
}), _y = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Cy = {
  start: "end",
  end: "start"
};
function sa(e, t, n) {
  return Lr(e, No(t, n));
}
function Ro(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function fr(e) {
  return e.split("-")[0];
}
function Zo(e) {
  return e.split("-")[1];
}
function cf(e) {
  return e === "x" ? "y" : "x";
}
function Wa(e) {
  return e === "y" ? "height" : "width";
}
function Fr(e) {
  return ["top", "bottom"].includes(fr(e)) ? "y" : "x";
}
function Fa(e) {
  return cf(Fr(e));
}
function ky(e, t, n) {
  n === void 0 && (n = !1);
  const r = Zo(e), o = Fa(e), i = Wa(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Bi(s)), [s, Bi(s)];
}
function Sy(e) {
  const t = Bi(e);
  return [aa(e), t, aa(t)];
}
function aa(e) {
  return e.replace(/start|end/g, (t) => Cy[t]);
}
function Ey(e, t, n) {
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
function Ny(e, t, n, r) {
  const o = Zo(e);
  let i = Ey(fr(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(aa)))), i;
}
function Bi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => _y[t]);
}
function Py(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function df(e) {
  return typeof e != "number" ? Py(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Xi(e) {
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
function au(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Fr(t), s = Fa(t), a = Wa(s), l = fr(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
  let g;
  switch (l) {
    case "top":
      g = {
        x: c,
        y: r.y - o.height
      };
      break;
    case "bottom":
      g = {
        x: c,
        y: r.y + r.height
      };
      break;
    case "right":
      g = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      g = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      g = {
        x: r.x,
        y: r.y
      };
  }
  switch (Zo(t)) {
    case "start":
      g[s] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      g[s] += f * (n && u ? -1 : 1);
      break;
  }
  return g;
}
const Vy = async (e, t, n) => {
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
    x: c,
    y: d
  } = au(u, r, l), f = r, g = {}, h = 0;
  for (let b = 0; b < a.length; b++) {
    const {
      name: x,
      fn: k
    } = a[b], {
      x: v,
      y: $,
      data: w,
      reset: C
    } = await k({
      x: c,
      y: d,
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
    c = v ?? c, d = $ ?? d, g = {
      ...g,
      [x]: {
        ...g[x],
        ...w
      }
    }, C && h <= 50 && (h++, typeof C == "object" && (C.placement && (f = C.placement), C.rects && (u = C.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : C.rects), {
      x: c,
      y: d
    } = au(u, f, l)), b = -1);
  }
  return {
    x: c,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: g
  };
};
async function ff(e, t) {
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
    rootBoundary: c = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: g = 0
  } = Ro(t, e), h = df(g), b = a[f ? d === "floating" ? "reference" : "floating" : d], x = Xi(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(b))) == null || n ? b : b.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), k = d === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, v = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), $ = await (i.isElement == null ? void 0 : i.isElement(v)) ? await (i.getScale == null ? void 0 : i.getScale(v)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = Xi(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: k,
    offsetParent: v,
    strategy: l
  }) : k);
  return {
    top: (x.top - w.top + h.top) / $.y,
    bottom: (w.bottom - x.bottom + h.bottom) / $.y,
    left: (x.left - w.left + h.left) / $.x,
    right: (w.right - x.right + h.right) / $.x
  };
}
const My = (e) => ({
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
      padding: c = 0
    } = Ro(e, t) || {};
    if (u == null)
      return {};
    const d = df(c), f = {
      x: n,
      y: r
    }, g = Fa(o), h = Wa(g), b = await s.getDimensions(u), x = g === "y", k = x ? "top" : "left", v = x ? "bottom" : "right", $ = x ? "clientHeight" : "clientWidth", w = i.reference[h] + i.reference[g] - f[g] - i.floating[h], C = f[g] - i.reference[g], N = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let P = N ? N[$] : 0;
    (!P || !await (s.isElement == null ? void 0 : s.isElement(N))) && (P = a.floating[$] || i.floating[h]);
    const M = w / 2 - C / 2, z = P / 2 - b[h] / 2 - 1, H = No(d[k], z), D = No(d[v], z), A = H, R = P - b[h] - D, S = P / 2 - b[h] / 2 + M, V = sa(A, S, R), _ = !l.arrow && Zo(o) != null && S !== V && i.reference[h] / 2 - (S < A ? H : D) - b[h] / 2 < 0, E = _ ? S < A ? S - A : S - R : 0;
    return {
      [g]: f[g] + E,
      data: {
        [g]: V,
        centerOffset: S - V - E,
        ..._ && {
          alignmentOffset: E
        }
      },
      reset: _
    };
  }
}), Oy = function(e) {
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
        mainAxis: c = !0,
        crossAxis: d = !0,
        fallbackPlacements: f,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: b = !0,
        ...x
      } = Ro(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const k = fr(o), v = Fr(a), $ = fr(a) === a, w = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), C = f || ($ || !b ? [Bi(a)] : Sy(a)), N = h !== "none";
      !f && N && C.push(...Ny(a, b, h, w));
      const P = [a, ...C], M = await ff(t, x), z = [];
      let H = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && z.push(M[k]), d) {
        const S = ky(o, s, w);
        z.push(M[S[0]], M[S[1]]);
      }
      if (H = [...H, {
        placement: o,
        overflows: z
      }], !z.every((S) => S <= 0)) {
        var D, A;
        const S = (((D = i.flip) == null ? void 0 : D.index) || 0) + 1, V = P[S];
        if (V)
          return {
            data: {
              index: S,
              overflows: H
            },
            reset: {
              placement: V
            }
          };
        let _ = (A = H.filter((E) => E.overflows[0] <= 0).sort((E, O) => E.overflows[1] - O.overflows[1])[0]) == null ? void 0 : A.placement;
        if (!_)
          switch (g) {
            case "bestFit": {
              var R;
              const E = (R = H.filter((O) => {
                if (N) {
                  const L = Fr(O.placement);
                  return L === v || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  L === "y";
                }
                return !0;
              }).map((O) => [O.placement, O.overflows.filter((L) => L > 0).reduce((L, Z) => L + Z, 0)]).sort((O, L) => O[1] - L[1])[0]) == null ? void 0 : R[0];
              E && (_ = E);
              break;
            }
            case "initialPlacement":
              _ = a;
              break;
          }
        if (o !== _)
          return {
            reset: {
              placement: _
            }
          };
      }
      return {};
    }
  };
};
async function zy(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = fr(n), a = Zo(n), l = Fr(n) === "y", u = ["left", "top"].includes(s) ? -1 : 1, c = i && l ? -1 : 1, d = Ro(t, e);
  let {
    mainAxis: f,
    crossAxis: g,
    alignmentAxis: h
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return a && typeof h == "number" && (g = a === "end" ? h * -1 : h), l ? {
    x: g * c,
    y: f * u
  } : {
    x: f * u,
    y: g * c
  };
}
const Hy = function(e) {
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
      } = t, l = await zy(t, e);
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
}, Ly = function(e) {
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
          fn: (x) => {
            let {
              x: k,
              y: v
            } = x;
            return {
              x: k,
              y: v
            };
          }
        },
        ...l
      } = Ro(e, t), u = {
        x: n,
        y: r
      }, c = await ff(t, l), d = Fr(fr(o)), f = cf(d);
      let g = u[f], h = u[d];
      if (i) {
        const x = f === "y" ? "top" : "left", k = f === "y" ? "bottom" : "right", v = g + c[x], $ = g - c[k];
        g = sa(v, g, $);
      }
      if (s) {
        const x = d === "y" ? "top" : "left", k = d === "y" ? "bottom" : "right", v = h + c[x], $ = h - c[k];
        h = sa(v, h, $);
      }
      const b = a.fn({
        ...t,
        [f]: g,
        [d]: h
      });
      return {
        ...b,
        data: {
          x: b.x - n,
          y: b.y - r,
          enabled: {
            [f]: i,
            [d]: s
          }
        }
      };
    }
  };
};
function gs() {
  return typeof window < "u";
}
function to(e) {
  return gf(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ot(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Tn(e) {
  var t;
  return (t = (gf(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function gf(e) {
  return gs() ? e instanceof Node || e instanceof Ot(e).Node : !1;
}
function tn(e) {
  return gs() ? e instanceof Element || e instanceof Ot(e).Element : !1;
}
function hn(e) {
  return gs() ? e instanceof HTMLElement || e instanceof Ot(e).HTMLElement : !1;
}
function lu(e) {
  return !gs() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ot(e).ShadowRoot;
}
function Bo(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = nn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Ty(e) {
  return ["table", "td", "th"].includes(to(e));
}
function ps(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function qa(e) {
  const t = ja(), n = tn(e) ? nn(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Ay(e) {
  let t = Un(e);
  for (; hn(t) && !qr(t); ) {
    if (qa(t))
      return t;
    if (ps(t))
      return null;
    t = Un(t);
  }
  return null;
}
function ja() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function qr(e) {
  return ["html", "body", "#document"].includes(to(e));
}
function nn(e) {
  return Ot(e).getComputedStyle(e);
}
function hs(e) {
  return tn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Un(e) {
  if (to(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    lu(e) && e.host || // Fallback.
    Tn(e)
  );
  return lu(t) ? t.host : t;
}
function pf(e) {
  const t = Un(e);
  return qr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : hn(t) && Bo(t) ? t : pf(t);
}
function hf(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = pf(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Ot(o);
  return i ? (la(s), t.concat(s, s.visualViewport || [], Bo(o) ? o : [], [])) : t.concat(o, hf(o, []));
}
function la(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function vf(e) {
  const t = nn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = hn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = Zi(n) !== i || Zi(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function mf(e) {
  return tn(e) ? e : e.contextElement;
}
function Tr(e) {
  const t = mf(e);
  if (!hn(t))
    return dn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = vf(t);
  let s = (i ? Zi(n.width) : n.width) / r, a = (i ? Zi(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const Dy = /* @__PURE__ */ dn(0);
function yf(e) {
  const t = Ot(e);
  return !ja() || !t.visualViewport ? Dy : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Iy(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ot(e) ? !1 : t;
}
function Po(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = mf(e);
  let s = dn(1);
  t && (r ? tn(r) && (s = Tr(r)) : s = Tr(e));
  const a = Iy(i, n, r) ? yf(i) : dn(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, c = o.width / s.x, d = o.height / s.y;
  if (i) {
    const f = Ot(i), g = r && tn(r) ? Ot(r) : r;
    let h = f, b = la(h);
    for (; b && r && g !== h; ) {
      const x = Tr(b), k = b.getBoundingClientRect(), v = nn(b), $ = k.left + (b.clientLeft + parseFloat(v.paddingLeft)) * x.x, w = k.top + (b.clientTop + parseFloat(v.paddingTop)) * x.y;
      l *= x.x, u *= x.y, c *= x.x, d *= x.y, l += $, u += w, h = Ot(b), b = la(h);
    }
  }
  return Xi({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function Ga(e, t) {
  const n = hs(e).scrollLeft;
  return t ? t.left + n : Po(Tn(e)).left + n;
}
function wf(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Ga(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function Ry(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = Tn(r), a = t ? ps(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = dn(1);
  const c = dn(0), d = hn(r);
  if ((d || !d && !i) && ((to(r) !== "body" || Bo(s)) && (l = hs(r)), hn(r))) {
    const g = Po(r);
    u = Tr(r), c.x = g.x + r.clientLeft, c.y = g.y + r.clientTop;
  }
  const f = s && !d && !i ? wf(s, l, !0) : dn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + f.y
  };
}
function Zy(e) {
  return Array.from(e.getClientRects());
}
function By(e) {
  const t = Tn(e), n = hs(e), r = e.ownerDocument.body, o = Lr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Lr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Ga(e);
  const a = -n.scrollTop;
  return nn(r).direction === "rtl" && (s += Lr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function Xy(e, t) {
  const n = Ot(e), r = Tn(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const u = ja();
    (!u || u && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
function Yy(e, t) {
  const n = Po(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = hn(e) ? Tr(e) : dn(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function uu(e, t, n) {
  let r;
  if (t === "viewport")
    r = Xy(e, n);
  else if (t === "document")
    r = By(Tn(e));
  else if (tn(t))
    r = Yy(t, n);
  else {
    const o = yf(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Xi(r);
}
function bf(e, t) {
  const n = Un(e);
  return n === t || !tn(n) || qr(n) ? !1 : nn(n).position === "fixed" || bf(n, t);
}
function Ky(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = hf(e, []).filter((a) => tn(a) && to(a) !== "body"), o = null;
  const i = nn(e).position === "fixed";
  let s = i ? Un(e) : e;
  for (; tn(s) && !qr(s); ) {
    const a = nn(s), l = qa(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && o && ["absolute", "fixed"].includes(o.position) || Bo(s) && !l && bf(e, s)) ? r = r.filter((u) => u !== s) : o = a, s = Un(s);
  }
  return t.set(e, r), r;
}
function Wy(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? ps(t) ? [] : Ky(t, this._c) : [].concat(n), r], s = i[0], a = i.reduce((l, u) => {
    const c = uu(t, u, o);
    return l.top = Lr(c.top, l.top), l.right = No(c.right, l.right), l.bottom = No(c.bottom, l.bottom), l.left = Lr(c.left, l.left), l;
  }, uu(t, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function Fy(e) {
  const {
    width: t,
    height: n
  } = vf(e);
  return {
    width: t,
    height: n
  };
}
function qy(e, t, n) {
  const r = hn(t), o = Tn(t), i = n === "fixed", s = Po(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = dn(0);
  if (r || !r && !i)
    if ((to(t) !== "body" || Bo(o)) && (a = hs(t)), r) {
      const f = Po(t, !0, i, t);
      l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop;
    } else o && (l.x = Ga(o));
  const u = o && !r && !i ? wf(o, a) : dn(0), c = s.left + a.scrollLeft - l.x - u.x, d = s.top + a.scrollTop - l.y - u.y;
  return {
    x: c,
    y: d,
    width: s.width,
    height: s.height
  };
}
function Ms(e) {
  return nn(e).position === "static";
}
function cu(e, t) {
  if (!hn(e) || nn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Tn(e) === n && (n = n.ownerDocument.body), n;
}
function xf(e, t) {
  const n = Ot(e);
  if (ps(e))
    return n;
  if (!hn(e)) {
    let o = Un(e);
    for (; o && !qr(o); ) {
      if (tn(o) && !Ms(o))
        return o;
      o = Un(o);
    }
    return n;
  }
  let r = cu(e, t);
  for (; r && Ty(r) && Ms(r); )
    r = cu(r, t);
  return r && qr(r) && Ms(r) && !qa(r) ? n : r || Ay(e) || n;
}
const jy = async function(e) {
  const t = this.getOffsetParent || xf, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: qy(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Gy(e) {
  return nn(e).direction === "rtl";
}
const Uy = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ry,
  getDocumentElement: Tn,
  getClippingRect: Wy,
  getOffsetParent: xf,
  getElementRects: jy,
  getClientRects: Zy,
  getDimensions: Fy,
  getScale: Tr,
  isElement: tn,
  isRTL: Gy
}, Jy = Hy, Qy = Ly, ew = Oy, tw = My, nw = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Uy,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return Vy(e, t, {
    ...o,
    platform: i
  });
}, rw = ({
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
    const k = document.querySelector(e);
    if (k)
      e = k;
    else
      throw new Error("element not found by document.querySelector('" + e + "')");
  }
  let u;
  if (typeof n == "string") {
    const k = document.querySelector(n);
    if (k)
      u = k;
    else
      throw new Error("element not found by document.querySelector('" + n + "')");
  } else
    u = n;
  let c;
  l && (c = document.createElement("div"), c.style.position = "absolute", c.style.backgroundColor = "#222", c.style.width = "8px", c.style.height = "8px", c.style.transform = "rotate(45deg)", c.style.display = "none", u.firstElementChild.before(c));
  function d() {
    nw(e, u, {
      placement: r,
      middleware: [
        Jy(o),
        // 手动偏移配置
        ew(i),
        //自动翻转
        Qy(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [tw({ element: c })] : []
      ]
    }).then(({ x: k, y: v, placement: $, middlewareData: w }) => {
      if (Object.assign(u.style, {
        left: `${k}px`,
        top: `${v}px`
      }), l) {
        const { x: C, y: N } = w.arrow, P = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[$.split("-")[0]];
        Object.assign(c.style, {
          zIndex: -1,
          left: C != null ? `${C}px` : "",
          top: N != null ? `${N}px` : "",
          right: "",
          bottom: "",
          [P]: "2px"
        });
      }
    });
  }
  let f = !1;
  function g() {
    u.style.display = "block", u.style.visibility = "block", u.style.position = "absolute", l && (c.style.display = "block"), f = !0, d();
  }
  function h() {
    u.style.display = "none", l && (c.style.display = "none"), f = !1;
  }
  function b(k) {
    k.stopPropagation(), f ? h() : g();
  }
  function x(k) {
    u.contains(k.target) || h();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((k) => {
    e.addEventListener(k, b);
  }), document.addEventListener("click", x), {
    destroy() {
      t.forEach((k) => {
        e.removeEventListener(k, b);
      }), document.removeEventListener("click", x);
    },
    hide() {
      h();
    },
    isVisible() {
      return f;
    }
  };
};
var ow = /* @__PURE__ */ oe('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function Xo(e, t) {
  ce(t, !0);
  const n = y(t, "children", 7), r = y(t, "floating", 7), o = y(t, "placement", 7, "bottom");
  let i, s, a;
  yr(() => (a = rw({
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
  var u = ow(), c = q(u), d = q(c);
  Rr(d, n), F(c), On(c, (h) => i = h, () => i);
  var f = X(c, 2), g = q(f);
  return Rr(g, r), F(f), On(f, (h) => s = h, () => s), F(u), T(e, u), de({
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
    },
    get placement() {
      return o();
    },
    set placement(h = "bottom") {
      o(h), m();
    }
  });
}
ie(Xo, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function ut(e, t) {
  ce(t, !0);
  const n = y(t, "children", 7), r = y(t, "level", 7, 1), o = y(t, "mt", 7), i = y(t, "mb", 7);
  var s = qe(), a = ye(s);
  return op(a, () => `h${r()}`, !1, (l, u) => {
    let c;
    Se(() => c = en(
      l,
      c,
      {
        class: "tf-heading",
        style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
      },
      void 0,
      l.namespaceURI === Lu,
      l.nodeName.includes("-")
    ));
    var d = qe(), f = ye(d);
    Rr(f, () => n() ?? dt), T(u, d);
  }), T(e, s), de({
    get children() {
      return n();
    },
    set children(l) {
      n(l), m();
    },
    get level() {
      return r();
    },
    set level(l = 1) {
      r(l), m();
    },
    get mt() {
      return o();
    },
    set mt(l) {
      o(l), m();
    },
    get mb() {
      return i();
    },
    set mb(l) {
      i(l), m();
    }
  });
}
ie(ut, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var iw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const sw = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function vs(e, t) {
  ce(t, !0), tt(e, sw);
  const n = /* @__PURE__ */ Xt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Ue(e, wt(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = iw();
      T(r, i);
    },
    $$slots: { default: !0 }
  })), de();
}
ie(vs, {}, [], [], !0);
const aw = () => {
  const e = je();
  return {
    deleteNode: (t) => {
      e.nodes.update((n) => n.filter((r) => r.id !== t)), e.edges.update(
        (n) => n.filter((r) => r.source !== t && r.target !== t)
      );
    }
  };
}, Vo = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, lw = () => {
  const { nodes: e, nodeLookup: t } = je();
  return {
    copyNode: (n) => {
      var r;
      const o = (r = K(t).get(n)) == null ? void 0 : r.internals.userNode;
      if (o) {
        const i = Vo(), s = {
          ...o,
          id: i,
          position: {
            x: o.position.x + 50,
            y: o.position.y + 50
          }
        };
        e.update((a) => [...a, s]), e.update(
          (a) => a.map(
            (l) => l.id === i ? { ...l, selected: !0 } : { ...l, selected: !1 }
          )
        );
      }
    }
  };
};
var uw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), cw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), dw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), fw = /* @__PURE__ */ oe('<div class="tf-node-toolbar svelte-44dmwv"><!> <!> <!></div>'), gw = /* @__PURE__ */ oe('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!>', 1);
const pw = {
  hash: "svelte-44dmwv",
  code: ".tf-node-toolbar.svelte-44dmwv {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}"
};
function br(e, t) {
  ce(t, !0), tt(e, pw);
  const n = y(t, "data", 7), r = y(t, "id", 7, ""), o = y(t, "icon", 7), i = y(t, "children", 7), s = y(t, "allowExecute", 7, !0), a = y(t, "allowCopy", 7, !0), l = y(t, "allowDelete", 7, !0);
  let u = n().expand ? ["key"] : [];
  const { updateNodeData: c } = on(), d = [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: i()
    }
  ], { deleteNode: f } = aw(), { copyNode: g } = lw();
  var h = gw(), b = ye(h);
  {
    var x = (N) => {
      sf(N, {
        get position() {
          return Ce.Top;
        },
        align: "end",
        children: (P, M) => {
          var z = fw(), H = q(z);
          {
            var D = (_) => {
              Ue(_, {
                class: "tf-node-toolbar-item",
                children: (E, O) => {
                  var L = uw();
                  T(E, L);
                },
                $$slots: { default: !0 }
              });
            };
            $e(H, (_) => {
              s() && _(D);
            });
          }
          var A = X(H, 2);
          {
            var R = (_) => {
              Ue(_, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  g(r());
                },
                children: (E, O) => {
                  var L = cw();
                  T(E, L);
                },
                $$slots: { default: !0 }
              });
            };
            $e(A, (_) => {
              a() && _(R);
            });
          }
          var S = X(A, 2);
          {
            var V = (_) => {
              Ue(_, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  f(r());
                },
                children: (E, O) => {
                  var L = dw();
                  T(E, L);
                },
                $$slots: { default: !0 }
              });
            };
            $e(S, (_) => {
              l() && _(V);
            });
          }
          F(z), T(P, z);
        },
        $$slots: { default: !0 }
      });
    };
    $e(b, (N) => {
      (s() || a() || l()) && N(x);
    });
  }
  var k = X(b, 2), v = X(q(k), 2), $ = q(v);
  uf($, {
    items: d,
    activeKeys: u,
    onChange: (N, P) => {
      c(r(), { expand: P == null ? void 0 : P.includes("key") });
    }
  }), F(v), F(k);
  var w = X(k, 2);
  dr(w, {
    type: "target",
    get position() {
      return Ce.Left;
    },
    style: " left: -12px;top: 20px"
  });
  var C = X(w, 2);
  return dr(C, {
    type: "source",
    get position() {
      return Ce.Right;
    },
    style: "right: -12px;top: 20px"
  }), T(e, h), de({
    get data() {
      return n();
    },
    set data(N) {
      n(N), m();
    },
    get id() {
      return r();
    },
    set id(N = "") {
      r(N), m();
    },
    get icon() {
      return o();
    },
    set icon(N) {
      o(N), m();
    },
    get children() {
      return i();
    },
    set children(N) {
      i(N), m();
    },
    get allowExecute() {
      return s();
    },
    set allowExecute(N = !0) {
      s(N), m();
    },
    get allowCopy() {
      return a();
    },
    set allowCopy(N = !0) {
      a(N), m();
    },
    get allowDelete() {
      return l();
    },
    set allowDelete(N = !0) {
      l(N), m();
    }
  });
}
ie(
  br,
  {
    data: {},
    id: {},
    icon: {},
    children: {},
    allowExecute: {},
    allowCopy: {},
    allowDelete: {}
  },
  [],
  [],
  !0
);
function Tt() {
  return ar("svelteflow__node_id");
}
const $f = [
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
], hw = [
  {
    value: "ref",
    label: "引用"
  },
  {
    value: "input",
    label: "固定值"
  }
];
var vw = /* @__PURE__ */ oe('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), mw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), yw = /* @__PURE__ */ oe('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const ww = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function _f(e, t) {
  ce(t, !0), tt(e, ww);
  const [n, r] = Je(), o = () => J(p(l), "$node", n), i = y(t, "parameter", 7), s = y(t, "index", 7);
  let a = Tt(), l = /* @__PURE__ */ ze(() => wr(a)), u = /* @__PURE__ */ ze(() => {
    var P, M;
    return {
      ...i(),
      ...(M = (P = o()) == null ? void 0 : P.data) == null ? void 0 : M.parameters[s()]
    };
  });
  const { updateNodeData: c } = on(), d = (P) => {
    const M = P.target.value;
    c(a, (z) => {
      let H = z.data.parameters;
      return H[s()].name = M, { parameters: H };
    });
  }, f = (P) => {
    const M = P.target.checked;
    c(a, (z) => {
      let H = z.data.parameters;
      return H[s()].required = M, { parameters: H };
    });
  };
  let g;
  const h = () => {
    c(a, (P) => {
      let M = P.data.parameters;
      return M.splice(s(), 1), { parameters: [...M] };
    }), g == null || g.hide();
  };
  var b = yw(), x = ye(b), k = q(x);
  Gt(k, {
    style: "width: 100%;",
    get value() {
      return p(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), F(x);
  var v = X(x, 2), $ = q(v);
  af($, {
    get checked() {
      return p(u).required;
    },
    onchange: f
  }), F(v);
  var w = X(v, 2), C = q(w);
  On(
    Xo(C, {
      placement: "bottom",
      floating: (P) => {
        var M = vw(), z = q(M), H = X(q(z));
        Gn(H, {
          items: $f,
          style: "width: 100%"
        }), F(z);
        var D = X(z, 2), A = X(q(D));
        Lt(A, { rows: 1, style: "width: 100%;" }), F(D);
        var R = X(D, 2), S = X(q(R));
        Lt(S, { rows: 3, style: "width: 100%;" }), F(R);
        var V = X(R, 2), _ = q(V);
        Ue(_, {
          onclick: h,
          children: (E, O) => {
            Ae();
            var L = Ge("删除");
            T(E, L);
          },
          $$slots: { default: !0 }
        }), F(V), F(M), T(P, M);
      },
      children: (P, M) => {
        Ue(P, {
          class: "input-btn-more",
          children: (z, H) => {
            var D = mw();
            T(z, D);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (P) => g = P,
    () => g
  ), F(w), T(e, b);
  var N = de({
    get parameter() {
      return i();
    },
    set parameter(P) {
      i(P), m();
    },
    get index() {
      return s();
    },
    set index(P) {
      s(P), m();
    }
  });
  return r(), N;
}
ie(_f, { parameter: {}, index: {} }, [], [], !0);
var bw = /* @__PURE__ */ oe('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), xw = /* @__PURE__ */ oe('<div class="none-params svelte-3n0wca">无输入参数</div>'), $w = /* @__PURE__ */ oe('<div class="input-container svelte-3n0wca"><!> <!></div>');
const _w = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function Cf(e, t) {
  ce(t, !0), tt(e, _w);
  const [n, r] = Je(), o = () => J(p(s), "$node", n);
  let i = Tt(), s = /* @__PURE__ */ ze(() => wr(i)), a = /* @__PURE__ */ ze(() => {
    var f, g;
    return [...((g = (f = o()) == null ? void 0 : f.data) == null ? void 0 : g.parameters) || []];
  });
  var l = $w(), u = q(l);
  {
    var c = (f) => {
      var g = bw();
      Ae(4), T(f, g);
    };
    $e(u, (f) => {
      p(a).length !== 0 && f(c);
    });
  }
  var d = X(u, 2);
  zt(
    d,
    19,
    () => p(a),
    (f) => f.id,
    (f, g, h) => {
      _f(f, {
        get parameter() {
          return p(g);
        },
        get index() {
          return p(h);
        }
      });
    },
    (f) => {
      var g = xw();
      T(f, g);
    }
  ), F(l), T(e, l), de(), r();
}
ie(Cf, {}, [], [], !0);
const no = () => {
  const { updateNodeData: e } = on();
  return {
    addParameter: (t, n = "parameters", r) => {
      const o = {
        ...r,
        id: Vo()
      };
      e(t, (i) => {
        let s = i.data[n];
        return s ? s.push(o) : s = [o], {
          [n]: [...s]
        };
      });
    }
  };
};
var Cw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), kw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Sw = /* @__PURE__ */ oe('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const Ew = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function kf(e, t) {
  ce(t, !0), tt(e, Ew);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Xt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Tt(), { addParameter: i } = no();
  return br(e, wt(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    icon: (s) => {
      var a = Cw();
      T(s, a);
    },
    children: (s, a) => {
      var l = Sw(), u = ye(l), c = q(u);
      ut(c, {
        level: 3,
        children: (g, h) => {
          Ae();
          var b = Ge("输入参数");
          T(g, b);
        },
        $$slots: { default: !0 }
      });
      var d = X(c, 2);
      Ue(d, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o);
        },
        children: (g, h) => {
          var b = kw();
          T(g, b);
        },
        $$slots: { default: !0 }
      }), F(u);
      var f = X(u, 2);
      Cf(f, {}), T(s, l);
    },
    $$slots: { icon: !0, default: !0 }
  })), de({
    get data() {
      return n();
    },
    set data(s) {
      n(s), m();
    }
  });
}
ie(kf, { data: {} }, [], [], !0);
const Sf = (e, t, n) => {
  for (let r of n)
    r.target === t && r.source && (e.push(r.source), Sf(e, r.source, n));
}, du = (e, t) => {
  if (e.type === "startNode") {
    const n = e.data.parameters, r = [];
    if (n)
      for (const o of n)
        r.push({
          label: o.name + (t ? ` (Array<${o.dataType || "String"}>)` : ` (${o.dataType || "String"})`),
          value: e.id + "." + o.name
        });
    return {
      label: e.data.title,
      value: e.id,
      children: r
    };
  } else {
    if (e.type === "loopNode" && t)
      return {
        label: e.data.title,
        value: e.id,
        children: [
          {
            label: "loopItem",
            value: e.id + ".loop"
          },
          {
            label: "index (Number)",
            value: e.id + ".index"
          }
        ]
      };
    {
      const n = e.data.outputDefs;
      if (n) {
        const r = (o, i) => !o || o.length === 0 ? [] : o.map((s) => ({
          label: s.name + (t ? ` (Array<${s.dataType || "String"}>)` : ` (${s.dataType || "String"})`),
          // label: param.name ,
          value: i + "." + s.name,
          children: r(s.children, i + "." + s.name)
        }));
        return {
          label: e.data.title,
          value: e.id,
          children: r(n, e.id)
        };
      }
    }
  }
}, Nw = (e = !1) => {
  const t = Tt(), n = wr(t), { nodes: r, edges: o } = je();
  return Yn([n, r, o], ([i, s, a]) => {
    const l = [];
    if (e) {
      for (let u of s)
        if (u.parentId === i.id) {
          const c = du(u, u.parentId === i.id);
          c && l.push(c);
        }
    } else {
      const u = [];
      Sf(u, t, a);
      for (let c of s)
        if (u.includes(c.id)) {
          const d = du(c, c.parentId === i.id);
          d && l.push(d);
        }
    }
    return l;
  });
};
var Pw = /* @__PURE__ */ oe('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), Vw = /* @__PURE__ */ oe('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const Mw = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Ef(e, t) {
  ce(t, !0), tt(e, Mw);
  const [n, r] = Je(), o = () => J(p(c), "$node", n), i = () => J(w, "$selectItems", n), s = y(t, "parameter", 7), a = y(t, "index", 7), l = y(t, "dataKeyName", 7);
  let u = Tt(), c = /* @__PURE__ */ ze(() => wr(u)), d = /* @__PURE__ */ ze(() => {
    var V;
    return {
      ...s(),
      ...(V = o()) == null ? void 0 : V.data[l()][a()]
    };
  });
  const { updateNodeData: f } = on(), g = (V, _) => {
    f(u, (E) => {
      let O = E.data[l()];
      return O[a()] = { ...O[a()], [V]: _ }, { [l()]: O };
    });
  }, h = (V) => {
    const _ = V.target.value;
    g("name", _);
  }, b = (V) => {
    const _ = V.target.value;
    g("value", _);
  }, x = (V) => {
    const _ = V.value;
    g("ref", _);
  }, k = (V) => {
    const _ = V.value;
    g("refType", _);
  };
  let v;
  const $ = () => {
    f(u, (V) => {
      let _ = V.data[l()];
      return _.splice(a(), 1), { [l()]: [..._] };
    }), v == null || v.hide();
  }, w = Nw();
  var C = Vw(), N = ye(C), P = q(N);
  Gt(P, {
    style: "width: 100%;",
    get value() {
      return p(d).name;
    },
    placeholder: "请输入参数名称",
    oninput: h
  }), F(N);
  var M = X(N, 2), z = q(M);
  {
    var H = (V) => {
      Gt(V, {
        get value() {
          return p(d).value;
        },
        placeholder: "请输入参数值",
        oninput: b
      });
    }, D = (V) => {
      const _ = /* @__PURE__ */ ze(() => [p(d).ref]);
      Gn(V, {
        get items() {
          return i();
        },
        style: "width: 100%",
        defaultValue: ["ref"],
        get value() {
          return p(_);
        },
        expandAll: !0,
        onSelect: x
      });
    };
    $e(z, (V) => {
      p(d).refType === "input" ? V(H) : V(D, !1);
    });
  }
  F(M);
  var A = X(M, 2), R = q(A);
  On(
    Xo(R, {
      placement: "bottom",
      floating: (V) => {
        var _ = Pw(), E = q(_), O = X(q(E));
        const L = /* @__PURE__ */ ze(() => p(d).refType ? [p(d).refType] : []);
        Gn(O, {
          items: hw,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return p(L);
          },
          onSelect: k
        }), F(E);
        var Z = X(E, 2), W = X(q(Z));
        Lt(W, {
          rows: 1,
          style: "width: 100%;",
          onchange: (ue) => {
            const we = ue.target.value;
            g("defaultValue", we);
          }
        }), F(Z);
        var j = X(Z, 2), fe = X(q(j));
        Lt(fe, {
          rows: 3,
          style: "width: 100%;",
          onchange: (ue) => {
            const we = ue.target.value;
            g("description", we);
          }
        }), F(j);
        var Q = X(j, 2), B = q(Q);
        Ue(B, {
          onclick: $,
          children: (ue, we) => {
            Ae();
            var be = Ge("删除");
            T(ue, be);
          },
          $$slots: { default: !0 }
        }), F(Q), F(_), T(V, _);
      },
      children: (V, _) => {
        vs(V, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (V) => v = V,
    () => v
  ), F(A), T(e, C);
  var S = de({
    get parameter() {
      return s();
    },
    set parameter(V) {
      s(V), m();
    },
    get index() {
      return a();
    },
    set index(V) {
      a(V), m();
    },
    get dataKeyName() {
      return l();
    },
    set dataKeyName(V) {
      l(V), m();
    }
  });
  return r(), S;
}
ie(Ef, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var Ow = /* @__PURE__ */ oe('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), zw = /* @__PURE__ */ oe('<div class="none-params svelte-1sm1mgi"> </div>'), Hw = /* @__PURE__ */ oe('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Lw = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Sn(e, t) {
  ce(t, !0), tt(e, Lw);
  const [n, r] = Je(), o = () => J(p(l), "$node", n), i = y(t, "noneParameterText", 7, "无输入参数"), s = y(t, "dataKeyName", 7, "parameters");
  let a = Tt(), l = /* @__PURE__ */ ze(() => wr(a)), u = /* @__PURE__ */ ze(() => {
    var b;
    return [...((b = o()) == null ? void 0 : b.data[s()]) || []];
  });
  var c = Hw(), d = q(c);
  {
    var f = (b) => {
      var x = Ow();
      Ae(4), T(b, x);
    };
    $e(d, (b) => {
      p(u).length !== 0 && b(f);
    });
  }
  var g = X(d, 2);
  zt(
    g,
    19,
    () => p(u),
    (b) => b.id,
    (b, x, k) => {
      Ef(b, {
        get parameter() {
          return p(x);
        },
        get index() {
          return p(k);
        },
        get dataKeyName() {
          return s();
        }
      });
    },
    (b) => {
      var x = zw(), k = q(x, !0);
      F(x), Se(() => mn(k, i())), T(b, x);
    }
  ), F(c), T(e, c);
  var h = de({
    get noneParameterText() {
      return i();
    },
    set noneParameterText(b = "无输入参数") {
      i(b), m();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(b = "parameters") {
      s(b), m();
    }
  });
  return r(), h;
}
ie(Sn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Tw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), Aw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Dw = /* @__PURE__ */ oe('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const Iw = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function Nf(e, t) {
  ce(t, !0), tt(e, Iw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Xt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Tt(), { addParameter: i } = no();
  return br(e, wt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      allowExecute: !1,
      icon: (s) => {
        var a = Tw();
        T(s, a);
      },
      children: (s, a) => {
        var l = Dw(), u = ye(l), c = q(u);
        ut(c, {
          level: 3,
          children: (g, h) => {
            Ae();
            var b = Ge("输出参数");
            T(g, b);
          },
          $$slots: { default: !0 }
        });
        var d = X(c, 2);
        Ue(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (g, h) => {
            var b = Aw();
            T(g, b);
          },
          $$slots: { default: !0 }
        }), F(u);
        var f = X(u, 2);
        Sn(f, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs"
        }), T(s, l);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de({
    get data() {
      return n();
    },
    set data(s) {
      n(s), m();
    }
  });
}
ie(Nf, { data: {} }, [], [], !0);
const Rw = () => ar("tinyflow_options");
var Zw = /* @__PURE__ */ ke('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Bw = /* @__PURE__ */ oe('<div class="input-more-item svelte-1cfeest"><!></div>'), Xw = /* @__PURE__ */ oe('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), Yw = /* @__PURE__ */ oe('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const Kw = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Pf(e, t) {
  ce(t, !0), tt(e, Kw);
  const [n, r] = Je(), o = () => J(p(u), "$node", n), i = y(t, "parameter", 7), s = y(t, "position", 7), a = y(t, "dataKeyName", 7);
  let l = Tt(), u = /* @__PURE__ */ ze(() => wr(l)), c = /* @__PURE__ */ ze(() => {
    var E;
    let O = (E = o()) == null ? void 0 : E.data[a()], L;
    if (O && s().length > 0) {
      let Z = O;
      for (let W = 0; W < s().length; W++) {
        const j = s()[W];
        W == s().length - 1 ? L = Z[j] : Z = Z[j].children;
      }
    }
    return { ...i(), ...L };
  });
  const { updateNodeData: d } = on(), f = (E, O) => {
    d(l, (L) => {
      const Z = L.data[a()];
      if (Z && s().length > 0) {
        let W = Z;
        for (let j = 0; j < s().length; j++) {
          const fe = s()[j];
          j == s().length - 1 ? W[fe] = { ...W[fe], [E]: O } : W = Z[fe].children;
        }
      }
      return { [a()]: Z };
    });
  }, g = (E) => {
    const O = E.target.value;
    f("name", O);
  }, h = (E) => {
    const O = E.value;
    f("dataType", O);
  };
  let b;
  const x = () => {
    d(l, (E) => {
      let O = E.data[a()];
      if (O && s().length > 0) {
        let L = O;
        for (let Z = 0; Z < s().length; Z++) {
          const W = s()[Z];
          Z == s().length - 1 ? L.splice(W, 1) : L = L[W].children;
        }
      }
      return { [a()]: [...O] };
    }), b == null || b.hide();
  }, k = () => {
    d(l, (E) => {
      let O = E.data[a()];
      if (O && s().length > 0) {
        let L = O;
        for (let Z = 0; Z < s().length; Z++) {
          const W = s()[Z];
          Z == s().length - 1 ? L[W].children ? L[W].children.push({
            id: Vo(),
            name: "newParam",
            dataType: "String"
          }) : L[W].children = [
            {
              id: Vo(),
              name: "newParam",
              dataType: "String"
            }
          ] : L = L[W].children;
        }
      }
      return { [a()]: [...O] };
    });
  };
  var v = Yw(), $ = ye(v), w = q($);
  {
    var C = (E) => {
      var O = qe(), L = ye(O);
      zt(L, 17, s, ts, (Z, W) => {
        Ae();
        var j = Ge(" ");
        T(Z, j);
      }), T(E, O);
    };
    $e(w, (E) => {
      s().length > 1 && E(C);
    });
  }
  var N = X(w, 2);
  const P = /* @__PURE__ */ ze(() => p(c).nameDisabled === !0);
  Gt(N, {
    style: "width: 100%;",
    get value() {
      return p(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: g,
    get disabled() {
      return p(P);
    }
  }), F($);
  var M = X($, 2), z = q(M);
  const H = /* @__PURE__ */ ze(() => p(c).dataType ? [p(c).dataType] : []), D = /* @__PURE__ */ ze(() => p(c).dataTypeDisabled === !0);
  Gn(z, {
    items: $f,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return p(H);
    },
    get disabled() {
      return p(D);
    },
    onSelect: h
  });
  var A = X(z, 2);
  {
    var R = (E) => {
      Ue(E, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: k,
        children: (O, L) => {
          var Z = Zw();
          T(O, Z);
        },
        $$slots: { default: !0 }
      });
    };
    $e(A, (E) => {
      (p(c).dataType === "Object" || p(c).dataType === "Array") && E(R);
    });
  }
  F(M);
  var S = X(M, 2), V = q(S);
  On(
    Xo(V, {
      placement: "bottom",
      floating: (E) => {
        var O = Xw(), L = q(O), Z = X(q(L));
        Lt(Z, {
          rows: 1,
          style: "width: 100%;",
          onchange: (B) => {
            const ue = B.target.value;
            f("defaultValue", ue);
          }
        }), F(L);
        var W = X(L, 2), j = X(q(W));
        Lt(j, {
          rows: 3,
          style: "width: 100%;",
          onchange: (B) => {
            const ue = B.target.value;
            f("description", ue);
          }
        }), F(W);
        var fe = X(W, 2);
        {
          var Q = (B) => {
            var ue = Bw(), we = q(ue);
            Ue(we, {
              onclick: x,
              children: (be, ve) => {
                Ae();
                var ne = Ge("删除");
                T(be, ne);
              },
              $$slots: { default: !0 }
            }), F(ue), T(B, ue);
          };
          $e(fe, (B) => {
            p(c).deleteDisabled !== !0 && B(Q);
          });
        }
        F(O), T(E, O);
      },
      children: (E, O) => {
        vs(E, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (E) => b = E,
    () => b
  ), F(S), T(e, v);
  var _ = de({
    get parameter() {
      return i();
    },
    set parameter(E) {
      i(E), m();
    },
    get position() {
      return s();
    },
    set position(E) {
      s(E), m();
    },
    get dataKeyName() {
      return a();
    },
    set dataKeyName(E) {
      a(E), m();
    }
  });
  return r(), _;
}
ie(Pf, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var Ww = /* @__PURE__ */ oe("<!> <!>", 1), Fw = /* @__PURE__ */ oe('<div class="none-params svelte-1sm1mgi"> </div>'), qw = /* @__PURE__ */ oe('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), jw = /* @__PURE__ */ oe('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Gw = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Yo(e, t) {
  ce(t, !0), tt(e, Gw);
  const [n, r] = Je(), o = () => J(p(u), "$node", n), i = (x, k = dt, v = dt) => {
    var $ = qe(), w = ye($);
    zt(
      w,
      19,
      k,
      (C) => `${C.id}_${C.children ? C.children.length : 0}`,
      (C, N, P) => {
        var M = Ww(), z = ye(M);
        const H = /* @__PURE__ */ ze(() => [...v(), p(P)]);
        Pf(z, {
          get parameter() {
            return p(N);
          },
          get position() {
            return p(H);
          },
          get dataKeyName() {
            return a();
          }
        });
        var D = X(z, 2);
        {
          var A = (R) => {
            var S = /* @__PURE__ */ he(() => [...v(), p(P)]);
            i(R, () => p(N).children, () => p(S));
          };
          $e(D, (R) => {
            p(N).children && R(A);
          });
        }
        T(C, M);
      },
      (C) => {
        var N = qe(), P = ye(N);
        {
          var M = (z) => {
            var H = Fw(), D = q(H, !0);
            F(H), Se(() => mn(D, s())), T(z, H);
          };
          $e(P, (z) => {
            v().length === 0 && z(M);
          });
        }
        T(C, N);
      }
    ), T(x, $);
  }, s = y(t, "noneParameterText", 7, "无输出参数"), a = y(t, "dataKeyName", 7, "outputDefs");
  let l = Tt(), u = /* @__PURE__ */ ze(() => wr(l)), c = /* @__PURE__ */ ze(() => {
    var x;
    return [...((x = o()) == null ? void 0 : x.data[a()]) || []];
  });
  var d = jw(), f = q(d);
  {
    var g = (x) => {
      var k = qw();
      Ae(4), T(x, k);
    };
    $e(f, (x) => {
      p(c).length !== 0 && x(g);
    });
  }
  var h = X(f, 2);
  i(h, () => p(c) || [], () => []), F(d), T(e, d);
  var b = de({
    get noneParameterText() {
      return s();
    },
    set noneParameterText(x = "无输出参数") {
      s(x), m();
    },
    get dataKeyName() {
      return a();
    },
    set dataKeyName(x = "outputDefs") {
      a(x), m();
    }
  });
  return r(), b;
}
ie(Yo, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Uw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), Jw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Qw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), eb = /* @__PURE__ */ oe('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">模型</div> <div class="setting-item svelte-15t2v24"><!> <!></div> <div class="setting-title svelte-15t2v24">系统提示词</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">用户提示词</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const tb = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Vf(e, t) {
  ce(t, !0), tt(e, tb);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Xt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Tt(), { addParameter: i } = no(), s = Rw();
  let a = Ds(an([]));
  yr(async () => {
    var u;
    const c = await ((u = s.provider) == null ? void 0 : u.llms());
    p(a).push(...c || []);
  });
  const { updateNodeData: l } = on();
  return br(e, wt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = Uw();
        T(u, c);
      },
      children: (u, c) => {
        var d = eb(), f = ye(d), g = q(f);
        ut(g, {
          level: 3,
          children: (R, S) => {
            Ae();
            var V = Ge("输入参数");
            T(R, V);
          },
          $$slots: { default: !0 }
        });
        var h = X(g, 2);
        Ue(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (R, S) => {
            var V = Jw();
            T(R, V);
          },
          $$slots: { default: !0 }
        }), F(f);
        var b = X(f, 2);
        Sn(b, {});
        var x = X(b, 2);
        ut(x, {
          level: 3,
          mt: "10px",
          children: (R, S) => {
            Ae();
            var V = Ge("模型设置");
            T(R, V);
          },
          $$slots: { default: !0 }
        });
        var k = X(x, 4), v = q(k);
        const $ = /* @__PURE__ */ ze(() => n().llmId ? [n().llmId] : []);
        Gn(v, {
          get items() {
            return p(a);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (R) => {
            const S = R.value;
            l(o, () => ({ llmId: S }));
          },
          get value() {
            return p($);
          }
        });
        var w = X(v, 2);
        vs(w, {}), F(k);
        var C = X(k, 4), N = q(C);
        Lt(N, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%"
        }), F(C);
        var P = X(C, 4), M = q(P);
        Lt(M, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%"
        }), F(P);
        var z = X(P, 2), H = q(z);
        ut(H, {
          level: 3,
          mt: "10px",
          children: (R, S) => {
            Ae();
            var V = Ge("输出参数");
            T(R, V);
          },
          $$slots: { default: !0 }
        });
        var D = X(H, 2);
        Ue(D, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (R, S) => {
            var V = Qw();
            T(R, V);
          },
          $$slots: { default: !0 }
        }), F(z);
        var A = X(z, 2);
        Yo(A, {}), T(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de({
    get data() {
      return n();
    },
    set data(u) {
      n(u), m();
    }
  });
}
ie(Vf, { data: {} }, [], [], !0);
var nb = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), rb = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ob = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ib = /* @__PURE__ */ oe('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const sb = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Mf(e, t) {
  ce(t, !0), tt(e, sb);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Xt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Tt(), { addParameter: i } = no(), { updateNodeData: s } = on(), a = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" }
  ];
  return br(e, wt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = nb();
        T(l, u);
      },
      children: (l, u) => {
        var c = ib(), d = ye(c), f = q(d);
        ut(f, {
          level: 3,
          children: (H, D) => {
            Ae();
            var A = Ge("输入参数");
            T(H, A);
          },
          $$slots: { default: !0 }
        });
        var g = X(f, 2);
        Ue(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (H, D) => {
            var A = rb();
            T(H, A);
          },
          $$slots: { default: !0 }
        }), F(d);
        var h = X(d, 2);
        Sn(h, {});
        var b = X(h, 2);
        ut(b, {
          level: 3,
          mt: "10px",
          children: (H, D) => {
            Ae();
            var A = Ge("代码");
            T(H, A);
          },
          $$slots: { default: !0 }
        });
        var x = X(b, 4), k = q(x);
        const v = /* @__PURE__ */ ze(() => n().engine ? [n().engine] : ["qlexpress"]);
        Gn(k, {
          items: a,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (H) => {
            const D = H.value;
            s(o, () => ({ engine: D }));
          },
          get value() {
            return p(v);
          }
        }), F(x);
        var $ = X(x, 4), w = q($);
        const C = /* @__PURE__ */ ze(() => n().code || "");
        Lt(w, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: (H) => {
            s(o, () => ({ code: H.target.value }));
          },
          get value() {
            return p(C);
          }
        }), F($);
        var N = X($, 2), P = q(N);
        ut(P, {
          level: 3,
          mt: "10px",
          children: (H, D) => {
            Ae();
            var A = Ge("输出参数");
            T(H, A);
          },
          $$slots: { default: !0 }
        });
        var M = X(P, 2);
        Ue(M, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (H, D) => {
            var A = ob();
            T(H, A);
          },
          $$slots: { default: !0 }
        }), F(N);
        var z = X(N, 2);
        Yo(z, {}), T(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de({
    get data() {
      return n();
    },
    set data(l) {
      n(l), m();
    }
  });
}
ie(Mf, { data: {} }, [], [], !0);
var ab = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), lb = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ub = /* @__PURE__ */ oe('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const cb = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Of(e, t) {
  ce(t, !0), tt(e, cb);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Xt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Tt(), { addParameter: i } = no(), { updateNodeData: s } = on();
  return Ci(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), br(e, wt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var l = ab();
        T(a, l);
      },
      children: (a, l) => {
        var u = ub(), c = ye(u), d = q(c);
        ut(d, {
          level: 3,
          children: (C, N) => {
            Ae();
            var P = Ge("输入参数");
            T(C, P);
          },
          $$slots: { default: !0 }
        });
        var f = X(d, 2);
        Ue(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (C, N) => {
            var P = lb();
            T(C, P);
          },
          $$slots: { default: !0 }
        }), F(c);
        var g = X(c, 2);
        Sn(g, {});
        var h = X(g, 2);
        ut(h, {
          level: 3,
          mt: "10px",
          children: (C, N) => {
            Ae();
            var P = Ge("代码");
            T(C, P);
          },
          $$slots: { default: !0 }
        });
        var b = X(h, 4), x = q(b);
        const k = /* @__PURE__ */ ze(() => n().template || "");
        Lt(x, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: (C) => {
            s(o, () => ({ template: C.target.value }));
          },
          get value() {
            return p(k);
          }
        }), F(b);
        var v = X(b, 2), $ = q(v);
        ut($, {
          level: 3,
          mt: "10px",
          children: (C, N) => {
            Ae();
            var P = Ge("输出参数");
            T(C, P);
          },
          $$slots: { default: !0 }
        }), F(v);
        var w = X(v, 2);
        Yo(w, {}), T(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de({
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  });
}
ie(Of, { data: {} }, [], [], !0);
var db = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), fb = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), gb = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), pb = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), hb = /* @__PURE__ */ oe('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), vb = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), mb = /* @__PURE__ */ oe('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), yb = /* @__PURE__ */ oe('<div style="width: 100%"><!></div>'), wb = /* @__PURE__ */ oe('<div style="width: 100%"><!></div>'), bb = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), xb = /* @__PURE__ */ oe('<div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1vtcqdz"><!> <!></div> <!> <div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="radio-group svelte-1vtcqdz"><label class="svelte-1vtcqdz"><!>none</label> <label class="svelte-1vtcqdz"><!>form-data</label> <label class="svelte-1vtcqdz"><!>x-www-form-urlencoded</label> <label class="svelte-1vtcqdz"><!>json</label> <label class="svelte-1vtcqdz"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1vtcqdz"><!> <!></div> <!>', 1);
const $b = {
  hash: "svelte-1vtcqdz",
  code: ".heading.svelte-1vtcqdz {display:flex;margin-bottom:10px;}.radio-group.svelte-1vtcqdz {display:flex;margin:10px 0;}.radio-group.svelte-1vtcqdz label:where(.svelte-1vtcqdz) {display:flex;font-size:14px;}"
};
function zf(e, t) {
  ce(t, !0), tt(e, $b);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Xt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Tt(), { addParameter: i } = no(), { updateNodeData: s } = on();
  return br(e, wt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var l = db();
        T(a, l);
      },
      children: (a, l) => {
        var u = xb(), c = ye(u), d = q(c), f = q(d);
        Gn(f, {
          items: [
            { value: "get", label: "GET" },
            { value: "post", label: "POST" },
            { value: "put", label: "PUT" },
            { value: "delete", label: "DELETE" },
            { value: "head", label: "HEAD" },
            { value: "patch", label: "PATCH" }
          ],
          style: "width: 100%",
          placeholder: "请选择模型",
          value: ["get"]
        }), F(d);
        var g = X(d, 2), h = q(g);
        Gt(h, { placeholder: "请输入url", style: "width: 100%" }), F(g), F(c);
        var b = X(c, 2), x = q(b);
        ut(x, {
          level: 3,
          children: (Y, ge) => {
            Ae();
            var pe = Ge("Http 头信息");
            T(Y, pe);
          },
          $$slots: { default: !0 }
        });
        var k = X(x, 2);
        Ue(k, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "headers");
          },
          children: (Y, ge) => {
            var pe = fb();
            T(Y, pe);
          },
          $$slots: { default: !0 }
        }), F(b);
        var v = X(b, 2);
        Sn(v, { dataKeyName: "headers" });
        var $ = X(v, 2), w = q($);
        ut(w, {
          level: 3,
          children: (Y, ge) => {
            Ae();
            var pe = Ge("参数");
            T(Y, pe);
          },
          $$slots: { default: !0 }
        });
        var C = X(w, 2);
        Ue(C, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "urlParameters");
          },
          children: (Y, ge) => {
            var pe = gb();
            T(Y, pe);
          },
          $$slots: { default: !0 }
        }), F($);
        var N = X($, 2);
        Sn(N, { dataKeyName: "urlParameters" });
        var P = X(N, 2);
        ut(P, {
          level: 3,
          mt: "10px",
          children: (Y, ge) => {
            Ae();
            var pe = Ge("Body");
            T(Y, pe);
          },
          $$slots: { default: !0 }
        });
        var M = X(P, 2), z = q(M), H = q(z);
        const D = /* @__PURE__ */ ze(() => !n().bodyType);
        Gt(H, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return p(D);
          },
          onchange: (Y) => {
            var ge;
            (ge = Y.target) != null && ge.checked && s(o, { bodyType: "" });
          }
        }), Ae(), F(z);
        var A = X(z, 2), R = q(A);
        const S = /* @__PURE__ */ ze(() => n().bodyType === "form-data");
        Gt(R, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return p(S);
          },
          onchange: (Y) => {
            var ge;
            (ge = Y.target) != null && ge.checked && s(o, { bodyType: "form-data" });
          }
        }), Ae(), F(A);
        var V = X(A, 2), _ = q(V);
        const E = /* @__PURE__ */ ze(() => n().bodyType === "x-www-form-urlencoded");
        Gt(_, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return p(E);
          },
          onchange: (Y) => {
            var ge;
            (ge = Y.target) != null && ge.checked && s(o, { bodyType: "x-www-form-urlencoded" });
          }
        }), Ae(), F(V);
        var O = X(V, 2), L = q(O);
        const Z = /* @__PURE__ */ ze(() => n().bodyType === "json");
        Gt(L, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return p(Z);
          },
          onchange: (Y) => {
            var ge;
            (ge = Y.target) != null && ge.checked && s(o, { bodyType: "json" });
          }
        }), Ae(), F(O);
        var W = X(O, 2), j = q(W);
        const fe = /* @__PURE__ */ ze(() => n().bodyType === "raw");
        Gt(j, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return p(fe);
          },
          onchange: (Y) => {
            var ge;
            (ge = Y.target) != null && ge.checked && s(o, { bodyType: "raw" });
          }
        }), Ae(), F(W), F(M);
        var Q = X(M, 2);
        {
          var B = (Y) => {
            var ge = hb(), pe = ye(ge), Ee = q(pe);
            ut(Ee, {
              level: 3,
              children: (Xe, Ye) => {
                Ae();
                var nt = Ge("参数");
                T(Xe, nt);
              },
              $$slots: { default: !0 }
            });
            var ot = X(Ee, 2);
            Ue(ot, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                i(o, "fromData");
              },
              children: (Xe, Ye) => {
                var nt = pb();
                T(Xe, nt);
              },
              $$slots: { default: !0 }
            }), F(pe);
            var Oe = X(pe, 2);
            Sn(Oe, { dataKeyName: "fromData" }), T(Y, ge);
          };
          $e(Q, (Y) => {
            n().bodyType === "form-data" && Y(B);
          });
        }
        var ue = X(Q, 2);
        {
          var we = (Y) => {
            var ge = mb(), pe = ye(ge), Ee = q(pe);
            ut(Ee, {
              level: 3,
              children: (Xe, Ye) => {
                Ae();
                var nt = Ge("参数");
                T(Xe, nt);
              },
              $$slots: { default: !0 }
            });
            var ot = X(Ee, 2);
            Ue(ot, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                i(o, "fromUrlencoded");
              },
              children: (Xe, Ye) => {
                var nt = vb();
                T(Xe, nt);
              },
              $$slots: { default: !0 }
            }), F(pe);
            var Oe = X(pe, 2);
            Sn(Oe, { dataKeyName: "fromUrlencoded" }), T(Y, ge);
          };
          $e(ue, (Y) => {
            n().bodyType === "x-www-form-urlencoded" && Y(we);
          });
        }
        var be = X(ue, 2);
        {
          var ve = (Y) => {
            var ge = yb(), pe = q(ge);
            Lt(pe, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Ee) => {
                s(o, { bodyJson: Ee.target.value });
              }
            }), F(ge), T(Y, ge);
          };
          $e(be, (Y) => {
            n().bodyType === "json" && Y(ve);
          });
        }
        var ne = X(be, 2);
        {
          var le = (Y) => {
            var ge = wb(), pe = q(ge);
            Lt(pe, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Ee) => {
                s(o, { bodyRaw: Ee.target.value });
              }
            }), F(ge), T(Y, ge);
          };
          $e(ne, (Y) => {
            n().bodyType === "raw" && Y(le);
          });
        }
        var De = X(ne, 2), Ke = q(De);
        ut(Ke, {
          level: 3,
          mt: "10px",
          children: (Y, ge) => {
            Ae();
            var pe = Ge("输出参数");
            T(Y, pe);
          },
          $$slots: { default: !0 }
        });
        var Ie = X(Ke, 2);
        Ue(Ie, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (Y, ge) => {
            var pe = bb();
            T(Y, pe);
          },
          $$slots: { default: !0 }
        }), F(De);
        var Be = X(De, 2);
        Yo(Be, {}), T(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de({
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  });
}
ie(zf, { data: {} }, [], [], !0);
const _b = {
  startNode: kf,
  codeNode: Mf,
  llmNode: Vf,
  templateNode: Of,
  httpNode: zf,
  endNode: Nf
};
var Cb = /* @__PURE__ */ oe("<!> ", 1);
function Hf(e, t) {
  ce(t, !0);
  const n = y(t, "icon", 7), r = y(t, "title", 7), o = y(t, "type", 7), i = y(t, "description", 7), s = y(t, "extra", 7);
  return Ue(e, {
    draggable: !0,
    ondragstart: (a) => {
      if (!a.dataTransfer)
        return null;
      const l = {
        type: o(),
        data: {
          title: r(),
          description: i(),
          extra: s()
        }
      };
      a.dataTransfer.setData("application/tinyflow", JSON.stringify(l)), a.dataTransfer.effectAllowed = "move";
    },
    children: (a, l) => {
      var u = Cb(), c = ye(u);
      pc(c, n);
      var d = X(c);
      Se(() => mn(d, ` ${r() ?? ""}`)), T(a, u);
    },
    $$slots: { default: !0 }
  }), de({
    get icon() {
      return n();
    },
    set icon(a) {
      n(a), m();
    },
    get title() {
      return r();
    },
    set title(a) {
      r(a), m();
    },
    get type() {
      return o();
    },
    set type(a) {
      o(a), m();
    },
    get description() {
      return i();
    },
    set description(a) {
      i(a), m();
    },
    get extra() {
      return s();
    },
    set extra(a) {
      s(a), m();
    }
  });
}
ie(
  Hf,
  {
    icon: {},
    title: {},
    type: {},
    description: {},
    extra: {}
  },
  [],
  [],
  !0
);
var kb = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), Sb = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), Eb = /* @__PURE__ */ oe('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"><!></div></div></div> <!></div>');
function Lf(e) {
  let t = Ds("base"), n = Ds("show");
  const r = [
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>',
      title: "开始节点",
      type: "startNode",
      description: "开始定义输入参数"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>',
      title: "循环",
      type: "startNode",
      description: "startNode"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>',
      title: "大模型",
      type: "llmNode",
      description: "使用大模型处理问题"
    },
    {
      // icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.7134 7.12811L4.46682 7.69379C4.28637 8.10792 3.71357 8.10792 3.53312 7.69379L3.28656 7.12811C2.84706 6.11947 2.05545 5.31641 1.06767 4.87708L0.308047 4.53922C-0.102682 4.35653 -0.102682 3.75881 0.308047 3.57612L1.0252 3.25714C2.03838 2.80651 2.84417 1.97373 3.27612 0.930828L3.52932 0.319534C3.70578 -0.106511 4.29417 -0.106511 4.47063 0.319534L4.72382 0.930828C5.15577 1.97373 5.96158 2.80651 6.9748 3.25714L7.69188 3.57612C8.10271 3.75881 8.10271 4.35653 7.69188 4.53922L6.93228 4.87708C5.94451 5.31641 5.15288 6.11947 4.7134 7.12811ZM6.33421 15.8154C6.51032 15.233 6.7072 14.6562 6.93912 14.0327C8.99484 8.50636 12.4197 5.08172 18.0129 4.21479C17.5 5.35838 17.0151 6.15301 16.5858 6.58237C16.2521 6.91603 15.9185 7.24993 15.5848 7.58407L14.1721 8.99878L15.6279 10.4535C14.4976 12.5384 12.2652 14.1979 9.75193 14.512C8.43544 14.6766 7.29345 15.1188 6.33421 15.8154ZM18 9.99658L17 8.99728C17.3331 8.66372 17.6662 8.33039 18.0027 7.99391C19.0018 6.99303 20.0009 4.99392 21 1.99658C6.31105 1.99658 4.08854 15.422 3.06361 21.6132C3.0419 21.7443 3.02074 21.8722 3 21.9966H4.99824C5.66421 18.6635 7.33146 16.8301 10 16.4966C14 15.9966 17 12.9966 18 9.99658Z"></path></svg>',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>',
      title: "知识库",
      type: "startNode",
      description: "startNode"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>',
      title: "搜索引擎",
      type: "startNode",
      description: "startNode"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>',
      title: "Http 请求",
      type: "httpNode",
      description: "通过 HTTP 请求获取数据"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>',
      title: "动态代码",
      type: "codeNode",
      description: "动态执行代码"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>',
      title: "内容模板",
      type: "templateNode",
      description: "通过模板引擎生成内容"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>',
      title: "结束节点",
      type: "endNode",
      description: "结束定义输出参数"
    }
  ], o = [
    {
      label: "基础节点",
      value: "base"
    },
    {
      label: "业务工具",
      value: "tools"
    }
  ];
  var i = Eb(), s = q(i), a = q(s), l = q(a);
  lf(l, {
    style: "width: 100%",
    items: o,
    onChange: (h) => {
      U(t, an(h.value.toString()));
    }
  }), F(a);
  var u = X(a, 2), c = q(u);
  zt(c, 21, () => r, ts, (h, b) => {
    Hf(h, wt(() => p(b)));
  }), F(c);
  var d = X(c, 2), f = q(d);
  Ue(f, {
    children: (h, b) => {
      Ae();
      var x = Ge("测试业务按钮");
      T(h, x);
    },
    $$slots: { default: !0 }
  }), F(d), F(u), F(s);
  var g = X(s, 2);
  Ue(g, {
    onclick: () => {
      U(n, an(p(n) ? "" : "show"));
    },
    children: (h, b) => {
      var x = qe(), k = ye(x);
      {
        var v = (w) => {
          var C = kb();
          T(w, C);
        }, $ = (w) => {
          var C = Sb();
          T(w, C);
        };
        $e(k, (w) => {
          p(n) === "show" ? w(v) : w($, !1);
        });
      }
      T(h, x);
    },
    $$slots: { default: !0 }
  }), F(i), Se(() => {
    Zr(i, `tf-toolbar ${p(n) ?? ""}`), se(c, "style", `display: ${(p(t) === "base" ? "flex" : "none") ?? ""}`), se(d, "style", `display: ${(p(t) !== "base" ? "flex" : "none") ?? ""}`);
  }), T(e, i);
}
ie(Lf, {}, [], [], !0);
var Nb = /* @__PURE__ */ oe("<!> <!> <!>", 1), Pb = /* @__PURE__ */ oe('<div style="position: relative; height: 100%; width: 100%"><!> <!></div>');
function Tf(e, t) {
  ce(t, !0);
  const n = y(t, "onInit", 7), r = on();
  n()(r);
  const o = (c) => {
    c.preventDefault(), c.dataTransfer && (c.dataTransfer.dropEffect = "move");
  }, i = (c) => {
    var d;
    c.preventDefault();
    const f = r.screenToFlowPosition({
      x: c.clientX - 250,
      y: c.clientY - 100
    }), g = (d = c.dataTransfer) == null ? void 0 : d.getData("application/tinyflow"), h = g ? JSON.parse(g) : {}, b = {
      id: `node_${Vo()}`,
      position: f,
      data: {},
      ...h
    };
    di.addNode(b), di.selectNodeOnly(b.id);
  };
  var s = Pb(), a = q(s);
  Lf(a);
  var l = X(a, 2);
  const u = /* @__PURE__ */ ze(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: ko.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  return Wd(l, wt({ nodeTypes: _b }, di, {
    class: "tinyflow-logo",
    get defaultEdgeOptions() {
      return p(u);
    },
    $$events: { drop: i, dragover: o },
    children: (c, d) => {
      var f = Nb(), g = ye(f);
      nf(g, {});
      var h = X(g, 2);
      Qd(h, {});
      var b = X(h, 2);
      of(b, {}), T(c, f);
    },
    $$slots: { default: !0 }
  })), F(s), T(e, s), de({
    get onInit() {
      return n();
    },
    set onInit(c) {
      n(c), m();
    }
  });
}
ie(Tf, { onInit: {} }, [], [], !0);
function Vb(e, t) {
  ce(t, !0);
  const n = y(t, "options", 7), r = y(t, "onInit", 7), { data: o } = n();
  return di.init(o.nodes, o.edges), Ir("tinyflow_options", n()), Fd(e, {
    fitView: !0,
    children: (i, s) => {
      Tf(i, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), de({
    get options() {
      return n();
    },
    set options(i) {
      n(i), m();
    },
    get onInit() {
      return r();
    },
    set onInit(i) {
      r(i), m();
    }
  });
}
customElements.define("tinyflow-component", ie(Vb, { options: {}, onInit: {} }, [], [], !1));
//# sourceMappingURL=index.js.map
