import { createElementBlock as e, defineComponent as t, normalizeClass as n, normalizeStyle as r, onMounted as i, onUnmounted as a, openBlock as o, ref as s } from "vue";
//#region ../ui/dist/index.js
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
var c = {}, l = Symbol("uninitialized"), u = "http://www.w3.org/1999/xhtml", d = "http://www.w3.org/2000/svg", f = "http://www.w3.org/1998/Math/MathML", p = "@attach", m = Array.isArray, h = Array.prototype.indexOf, g = Array.prototype.includes, _ = Array.from, v = Object.keys, y = Object.defineProperty, b = Object.getOwnPropertyDescriptor, x = Object.getOwnPropertyDescriptors, S = Object.prototype, C = Array.prototype, w = Object.getPrototypeOf, T = Object.isExtensible;
function E(e) {
	return typeof e == "function";
}
var D = () => {};
function ee(e) {
	return e();
}
function te(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function ne() {
	var e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}
function re(e, t, n = !1) {
	return e === void 0 ? n ? t() : t : e;
}
function ie(e, t) {
	if (Array.isArray(e)) return e;
	if (t === void 0 || !(Symbol.iterator in e)) return Array.from(e);
	let n = [];
	for (let r of e) if (n.push(r), n.length === t) break;
	return n;
}
function ae(e, t) {
	var n = {};
	for (var r in e) t.includes(r) || (n[r] = e[r]);
	for (var i of Object.getOwnPropertySymbols(e)) Object.propertyIsEnumerable.call(e, i) && !t.includes(i) && (n[i] = e[i]);
	return n;
}
var oe = 1 << 24, O = 1024, se = 2048, ce = 4096, le = 8192, ue = 16384, de = 32768, fe = 1 << 25, pe = 65536, me = 1 << 18, he = 1 << 19, ge = 1 << 20, _e = 1 << 25, ve = 65536, ye = 1 << 21, be = 1 << 22, xe = 1 << 23, Se = Symbol("$state"), Ce = Symbol("legacy props"), we = Symbol(""), Te = Symbol("attributes"), Ee = Symbol("class"), De = Symbol("style"), Oe = Symbol("text"), ke = Symbol("form reset"), Ae = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), je = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
function Me(e) {
	throw Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Ne() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function Pe(e, t, n) {
	throw Error("https://svelte.dev/e/each_key_duplicate");
}
function Fe(e) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function Ie() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Le(e) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function Re() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ze() {
	throw Error("https://svelte.dev/e/hydration_failed");
}
function Be(e) {
	throw Error("https://svelte.dev/e/props_invalid_value");
}
function Ve() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function He() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ue() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function We() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Ge() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function Ke(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function qe() {
	console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Je() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
var k = !1;
function Ye(e) {
	k = e;
}
var Xe;
function Ze(e) {
	if (e === null) throw Ke(), c;
	return Xe = e;
}
function Qe() {
	return Ze(/* @__PURE__ */ zn(Xe));
}
function A(e) {
	if (k) {
		if (/* @__PURE__ */ zn(Xe) !== null) throw Ke(), c;
		Xe = e;
	}
}
function j(e = 1) {
	if (k) {
		for (var t = e, n = Xe; t--;) n = /* @__PURE__ */ zn(n);
		Xe = n;
	}
}
function $e(e = !0) {
	for (var t = 0, n = Xe;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ zn(n);
		e && n.remove(), n = i;
	}
}
function et(e) {
	if (!e || e.nodeType !== 8) throw Ke(), c;
	return e.data;
}
function tt(e) {
	return e === this.v;
}
function nt(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function rt(e) {
	return !nt(e, this.v);
}
var it = !1;
function at() {
	it = !0;
}
var ot = [];
function st(e, t = !1, n = !1) {
	return ct(e, /* @__PURE__ */ new Map(), "", ot, null, n);
}
function ct(e, t, n, r, i = null, a = !1) {
	if (typeof e == "object" && e) {
		var o = t.get(e);
		if (o !== void 0) return o;
		if (e instanceof Map) return new Map(e);
		if (e instanceof Set) return new Set(e);
		if (m(e)) {
			var s = Array(e.length);
			t.set(e, s), i !== null && t.set(i, s);
			for (var c = 0; c < e.length; c += 1) {
				var l = e[c];
				c in e && (s[c] = ct(l, t, n, r, null, a));
			}
			return s;
		}
		if (w(e) === S) {
			s = {}, t.set(e, s), i !== null && t.set(i, s);
			for (var u of Object.keys(e)) s[u] = ct(e[u], t, n, r, null, a);
			return s;
		}
		if (e instanceof Date) return structuredClone(e);
		if (typeof e.toJSON == "function" && !a) return ct(e.toJSON(), t, n, r, e);
	}
	if (e instanceof EventTarget) return e;
	try {
		return structuredClone(e);
	} catch {
		return e;
	}
}
var lt = null;
function ut(e) {
	lt = e;
}
function dt(e) {
	return gt("getContext").get(e);
}
function ft(e, t) {
	return gt("setContext").set(e, t), t;
}
function pt(e) {
	return gt("hasContext").has(e);
}
function mt() {
	return gt("getAllContexts");
}
function M(e, t = !1, n) {
	lt = {
		p: lt,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: wr,
		l: it && !t ? {
			s: null,
			u: null,
			$: []
		} : null
	};
}
function N(e) {
	var t = lt, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) Xn(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, lt = t.p, e ?? {};
}
function ht() {
	return !it || lt !== null && lt.l === null;
}
function gt(e) {
	return lt === null && Me(e), lt.c ??= new Map(_t(lt) || void 0);
}
function _t(e) {
	let t = e.p;
	for (; t !== null;) {
		let e = t.c;
		if (e !== null) return e;
		t = t.p;
	}
	return null;
}
var vt = [];
function yt() {
	var e = vt;
	vt = [], te(e);
}
function bt(e) {
	if (vt.length === 0 && !on) {
		var t = vt;
		queueMicrotask(() => {
			t === vt && yt();
		});
	}
	vt.push(e);
}
function xt() {
	for (; vt.length > 0;) yt();
}
function St(e) {
	var t = wr;
	if (t === null) return xr.f |= xe, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	Ct(e, t);
}
function Ct(e, t) {
	if (!(t !== null && t.f & 16384)) {
		for (; t !== null;) {
			if (t.f & 128) {
				if (!(t.f & 32768)) throw e;
				try {
					t.b.error(e);
					return;
				} catch (t) {
					e = t;
				}
			}
			t = t.parent;
		}
		throw e;
	}
}
var wt = ~(se | ce | O);
function Tt(e, t) {
	e.f = e.f & wt | t;
}
function Et(e) {
	e.f & 512 || e.deps === null ? Tt(e, O) : Tt(e, ce);
}
function Dt(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= ve, Dt(t.deps));
}
function Ot(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), Dt(e.deps), Tt(e, O);
}
var kt = !1;
function At(e) {
	var t = kt;
	try {
		return kt = !1, [e(), kt];
	} finally {
		kt = t;
	}
}
function jt(e, t) {
	if (t) {
		let t = document.body;
		e.autofocus = !0, bt(() => {
			document.activeElement === t && e.focus();
		});
	}
}
function Mt(e) {
	k && /* @__PURE__ */ Rn(e) !== null && Bn(e);
}
var Nt = !1;
function Pt() {
	Nt || (Nt = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let t of e.target.elements) t[ke]?.();
		});
	}, { capture: !0 }));
}
function Ft(e) {
	var t = xr, n = wr;
	Cr(null), Tr(null);
	try {
		return e();
	} finally {
		Cr(t), Tr(n);
	}
}
function It(e, t, n, r = n) {
	e.addEventListener(t, () => Ft(n));
	let i = e[ke];
	i ? e[ke] = () => {
		i(), r(!0);
	} : e[ke] = () => r(!0), Pt();
}
function Lt(e) {
	let t = 0, n = Sn(0), r;
	return () => {
		qn() && (H(n), nr(() => (t === 0 && (r = Kr(() => e(() => Dn(n)))), t += 1, () => {
			bt(() => {
				--t, t === 0 && (r?.(), r = void 0, Dn(n));
			});
		})));
	};
}
var Rt = pe | he;
function zt(e, t, n, r) {
	new Bt(e, t, n, r);
}
var Bt = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = k ? Xe : null;
	#n;
	#r;
	#i;
	#a = null;
	#o = null;
	#s = null;
	#c = null;
	#l = 0;
	#u = 0;
	#d = !1;
	#f = /* @__PURE__ */ new Set();
	#p = /* @__PURE__ */ new Set();
	#m = null;
	#h = Lt(() => (this.#m = Sn(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = wr;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = wr.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = rr(() => {
			if (k) {
				let e = this.#t;
				Qe();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#y() : this.#g();
			} else this.#b();
		}, Rt), k && (this.#e = Xe);
	}
	#g() {
		try {
			this.#a = ar(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed, { reset: n, invoke_onerror: r } = this.#v(e);
		bt(r), t && (this.#s = ar(() => {
			t(this.#e, () => e, () => n);
		}));
	}
	#v(e) {
		var t = !1, n = !1;
		let r = () => {
			if (t) {
				Je();
				return;
			}
			t = !0, n && We(), this.#s !== null && fr(this.#s, () => {
				this.#s = null;
			}), this.#S(() => {
				this.#b();
			});
		};
		return {
			reset: r,
			invoke_onerror: () => {
				try {
					n = !0, this.#n.onerror?.(e, r), n = !1;
				} catch (e) {
					Ct(e, this.#i && this.#i.parent);
				}
			}
		};
	}
	#y() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = ar(() => e(this.#e)), bt(() => {
			var e = this.#c = document.createDocumentFragment(), t = Ln();
			e.append(t), this.#a = this.#S(() => ar(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, fr(this.#o, () => {
				this.#o = null;
			}), this.#x(tn));
		}));
	}
	#b() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = ar(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				gr(this.#a, e);
				let t = this.#n.pending;
				this.#o = ar(() => t(this.#e));
			} else this.#x(tn);
		} catch (e) {
			this.error(e);
		}
	}
	#x(e) {
		this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
	}
	defer_effect(e) {
		Ot(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#S(e) {
		var t = wr, n = xr, r = lt;
		Tr(this.#i), Cr(this.#i), ut(this.#i.ctx);
		try {
			return fn.ensure(), e();
		} catch (e) {
			return St(e), null;
		} finally {
			Tr(t), Cr(n), ut(r);
		}
	}
	#C(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#C(e, t);
			return;
		}
		this.#u += e, this.#u === 0 && (this.#x(t), this.#o && fr(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(e, t) {
		this.#C(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, bt(() => {
			this.#d = !1, this.#m && wn(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), H(this.#m);
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		tn?.is_fork ? (this.#a && tn.skip_effect(this.#a), this.#o && tn.skip_effect(this.#o), this.#s && tn.skip_effect(this.#s), tn.oncommit(() => {
			this.#w(e);
		})) : this.#w(e);
	}
	#w(e) {
		this.#a &&= (lr(this.#a), null), this.#o &&= (lr(this.#o), null), this.#s &&= (lr(this.#s), null), k && (Ze(this.#t), j(), Ze($e()));
		let t = this.#n.failed, n = (e) => {
			let { reset: n, invoke_onerror: r } = this.#v(e);
			r(), t && (this.#s = this.#S(() => {
				try {
					return ar(() => {
						var r = wr;
						r.b = this, r.f |= 128, t(this.#e, () => e, () => n);
					});
				} catch (e) {
					return Ct(e, this.#i.parent), null;
				}
			}));
		};
		bt(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				Ct(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == "object" && t && typeof t.then == "function" ? t.then(n, (e) => Ct(e, this.#i && this.#i.parent)) : n(t);
		});
	}
};
function Vt(e, t, n, r) {
	let i = ht() ? Gt : Jt;
	var a = e.filter((e) => !e.settled), o = t.map(i);
	if (n.length === 0 && a.length === 0) {
		r(o);
		return;
	}
	var s = wr, c = Ht(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function u(e) {
		if (!(s.f & 16384)) {
			c();
			try {
				r([...o, ...e]);
			} catch (e) {
				Ct(e, s);
			}
			Ut();
		}
	}
	var d = Wt();
	if (n.length === 0) {
		l.then(() => u([])).finally(d);
		return;
	}
	function f() {
		Promise.all(n.map((e) => /* @__PURE__ */ qt(e))).then(u).catch((e) => Ct(e, s)).finally(d);
	}
	l ? l.then(() => {
		c(), f(), Ut();
	}) : f();
}
function Ht() {
	var e = wr, t = xr, n = lt, r = tn;
	return function(i = !0) {
		Tr(e), Cr(t), ut(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function Ut(e = !0) {
	Tr(null), Cr(null), ut(null), e && tn?.deactivate();
}
function Wt() {
	var e = wr, t = e.b, n = tn, r = !!t?.is_rendered();
	return t?.update_pending_count(1, n), n.increment(r, e), () => {
		t?.update_pending_count(-1, n), n.decrement(r, e);
	};
}
/*#__NO_SIDE_EFFECTS__*/
function Gt(e) {
	var t = 2 | se;
	return wr !== null && (wr.f |= he), {
		ctx: lt,
		deps: null,
		effects: null,
		equals: tt,
		f: t,
		fn: e,
		reactions: null,
		rv: 0,
		v: l,
		wv: 0,
		parent: wr,
		ac: null
	};
}
var Kt = Symbol("obsolete");
/*#__NO_SIDE_EFFECTS__*/
function qt(e, t, n) {
	let r = wr;
	r === null && Ne();
	var i = void 0, a = Sn(l), o = !xr, s = /* @__PURE__ */ new Set();
	return tr(() => {
		var t = wr, n = ne();
		i = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, (e) => {
				e !== Ae && n.reject(e);
			}).finally(Ut);
		} catch (e) {
			n.reject(e), Ut();
		}
		var c = tn;
		if (o) {
			if (t.f & 32768) var l = Wt();
			if (r.b?.is_rendered()) c.async_deriveds.get(t)?.reject(Kt);
			else for (let e of s.values()) e.reject(Kt);
			s.add(n), c.async_deriveds.set(t, n);
		}
		let u = (e, t = void 0) => {
			l?.(), s.delete(n), t !== Kt && (c.activate(), t ? (a.f |= xe, wn(a, t)) : (a.f & 8388608 && (a.f ^= xe), wn(a, e)), c.deactivate());
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), Jn(() => {
		for (let e of s) e.reject(Kt);
	}), new Promise((e) => {
		function t(n) {
			function r() {
				n === i ? e(a) : t(i);
			}
			n.then(r, r);
		}
		t(i);
	});
}
/*#__NO_SIDE_EFFECTS__*/
function P(e) {
	let t = /* @__PURE__ */ Gt(e);
	return Dr(t), t;
}
/*#__NO_SIDE_EFFECTS__*/
function Jt(e) {
	let t = /* @__PURE__ */ Gt(e);
	return t.equals = rt, t;
}
function Yt(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) lr(t[n]);
	}
}
function Xt(e) {
	var t, n = wr, r = e.parent;
	if (!yr && r !== null && e.v !== l && r.f & 24576) return Ge(), e.v;
	Tr(r);
	try {
		e.f &= ~ve, Yt(e), t = zr(e);
	} finally {
		Tr(n);
	}
	return t;
}
function Zt(e) {
	var t = Xt(e);
	if (!e.equals(t) && (e.wv = Ir(), (!tn?.is_fork || e.deps === null) && (tn === null ? e.v = t : (tn.capture(e, t, !0), nn?.capture(e, t, !0)), e.deps === null))) {
		Tt(e, O);
		return;
	}
	yr || (rn === null ? Et(e) : (qn() || tn?.is_fork) && rn.set(e, t));
}
function Qt(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && Ft(() => {
		t.ac.abort(Ae), t.ac = null;
	}), t.fn !== null && (t.teardown = D), Vr(t, 0), sr(t));
}
function $t(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && Hr(t);
}
var en = null, tn = null, nn = null, rn = null, an = null, on = !1, sn = !1, cn = null, ln = null, un = 0, dn = 1, fn = class e {
	id = dn++;
	#e = !1;
	linked = !0;
	#t = null;
	#n = null;
	async_deriveds = /* @__PURE__ */ new Map();
	current = /* @__PURE__ */ new Map();
	previous = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Set();
	#i = /* @__PURE__ */ new Set();
	#a = 0;
	#o = /* @__PURE__ */ new Map();
	#s = null;
	#c = [];
	#l = [];
	#u = /* @__PURE__ */ new Set();
	#d = /* @__PURE__ */ new Set();
	#f = /* @__PURE__ */ new Map();
	#p = /* @__PURE__ */ new Set();
	is_fork = !1;
	#m = !1;
	constructor() {
		en === null ? en = this : (en.#n = this, this.#t = en), en = this;
	}
	#h() {
		if (this.is_fork) return !0;
		for (let n of this.#o.keys()) {
			for (var e = n, t = !1; e.parent !== null;) {
				if (this.#f.has(e)) {
					t = !0;
					break;
				}
				e = e.parent;
			}
			if (!t) return !0;
		}
		return !1;
	}
	skip_effect(e) {
		this.#f.has(e) || this.#f.set(e, {
			d: [],
			m: []
		}), this.#p.delete(e);
	}
	unskip_effect(e, t = (e) => this.schedule(e)) {
		var n = this.#f.get(e);
		if (n) {
			this.#f.delete(e);
			for (var r of n.d) Tt(r, se), t(r);
			for (r of n.m) Tt(r, ce), t(r);
		}
		this.#p.add(e);
	}
	#g() {
		this.#e = !0, un++ > 1e3 && (this.#x(), pn());
		for (let e of this.#u) this.#d.delete(e), Tt(e, se), this.schedule(e);
		for (let e of this.#d) Tt(e, ce), this.schedule(e);
		let t = this.#c;
		this.#c = [], this.apply();
		var n = cn = [], r = [], i = ln = [];
		for (let e of t) try {
			this.#_(e, n, r);
		} catch (t) {
			throw vn(e), this.#h() || this.discard(), t;
		}
		if (tn = null, i.length > 0) {
			var a = e.ensure();
			for (let e of i) a.schedule(e);
		}
		if (cn = null, ln = null, this.#h()) {
			this.#b(r), this.#b(n);
			for (let [e, t] of this.#f) _n(e, t);
			i.length > 0 && tn.#g();
			return;
		}
		let o = this.#v();
		if (o) {
			this.#b(r), this.#b(n), o.#y(this);
			return;
		}
		this.#u.clear(), this.#d.clear();
		for (let e of this.#r) e(this);
		this.#r.clear(), nn = this, hn(r), hn(n), nn = null, this.#s?.resolve();
		var s = tn;
		if (this.#a === 0 && (this.#c.length === 0 || s !== null) && this.#x(), this.#c.length > 0) if (s !== null) {
			let e = s;
			e.#c.push(...this.#c.filter((t) => !e.#c.includes(t)));
		} else s = this;
		s !== null && s.#g();
	}
	#_(e, t, n) {
		e.f ^= O;
		for (var r = e.first; r !== null;) {
			var i = r.f, a = (i & 96) != 0;
			if (!(a && i & 1024 || i & 8192 || this.#f.has(r)) && r.fn !== null) {
				a ? r.f ^= O : i & 4 ? t.push(r) : Lr(r) && (i & 16 && this.#d.add(r), Hr(r));
				var o = r.first;
				if (o !== null) {
					r = o;
					continue;
				}
			}
			for (; r !== null;) {
				var s = r.next;
				if (s !== null) {
					r = s;
					break;
				}
				r = r.parent;
			}
		}
	}
	#v() {
		for (var e = this.#t; e !== null;) {
			if (!e.is_fork) {
				for (let [t, [, n]] of this.current) if (e.current.has(t) && !n) return e;
			}
			e = e.#t;
		}
		return null;
	}
	#y(e) {
		for (let [t, n] of e.current) !this.previous.has(t) && e.previous.has(t) && this.previous.set(t, e.previous.get(t)), this.current.set(t, n);
		for (let [t, n] of e.async_deriveds) {
			let e = this.async_deriveds.get(t);
			e && n.promise.then(e.resolve).catch(e.reject);
		}
		e.async_deriveds.clear(), this.transfer_effects(e.#u, e.#d);
		let t = (e) => {
			var n = e.reactions;
			if (n !== null && !(e.f & 2 && !(e.f & 6144))) for (let e of n) {
				var r = e.f;
				if (r & 2) t(e);
				else {
					var i = e;
					r & 4194320 && !this.async_deriveds.has(i) && (this.#d.delete(i), Tt(i, se), this.schedule(i));
				}
			}
		};
		for (let e of this.current.keys()) t(e);
		this.oncommit(() => e.discard()), e.#x(), tn = this, this.#g();
	}
	#b(e) {
		for (var t = 0; t < e.length; t += 1) Ot(e[t], this.#u, this.#d);
	}
	capture(e, t, n = !1) {
		e.v !== l && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [t, n]), rn?.set(e, t)), this.is_fork || (e.v = t);
	}
	activate() {
		tn = this;
	}
	deactivate() {
		tn = null, rn = null;
	}
	flush() {
		try {
			sn = !0, tn = this, this.#g();
		} finally {
			un = 0, an = null, cn = null, ln = null, sn = !1, tn = null, rn = null, bn.clear();
		}
	}
	discard() {
		for (let e of this.#i) e(this);
		this.#i.clear();
		for (let e of this.async_deriveds.values()) e.reject(Kt);
		this.#x(), this.#s?.resolve();
	}
	register_created_effect(e) {
		this.#l.push(e);
	}
	increment(e, t) {
		if (this.#a += 1, e) {
			let e = this.#o.get(t) ?? 0;
			this.#o.set(t, e + 1);
		}
	}
	decrement(e, t) {
		if (--this.#a, e) {
			let e = this.#o.get(t) ?? 0;
			e === 1 ? this.#o.delete(t) : this.#o.set(t, e - 1);
		}
		this.#m || (this.#m = !0, bt(() => {
			this.#m = !1, this.linked && this.flush();
		}));
	}
	transfer_effects(e, t) {
		for (let t of e) this.#u.add(t);
		for (let e of t) this.#d.add(e);
		e.clear(), t.clear();
	}
	oncommit(e) {
		this.#r.add(e);
	}
	ondiscard(e) {
		this.#i.add(e);
	}
	settled() {
		return (this.#s ??= ne()).promise;
	}
	static ensure() {
		if (tn === null) {
			let t = tn = new e();
			!sn && !on && bt(() => {
				t.#e || t.flush();
			});
		}
		return tn;
	}
	apply() {
		rn = null;
	}
	schedule(e) {
		if (an = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
			e.b.defer_effect(e);
			return;
		}
		for (var t = e; t.parent !== null;) {
			t = t.parent;
			var n = t.f;
			if (cn !== null && t === wr && (xr === null || !(xr.f & 2))) return;
			if (n & 96) {
				if (!(n & 1024)) return;
				t.f ^= O;
			}
		}
		this.#c.push(t);
	}
	#x() {
		if (this.linked) {
			var e = this.#t, t = this.#n;
			e === null || (e.#n = t), t === null ? en = e : t.#t = e, this.linked = !1;
		}
	}
};
function F(e) {
	var t = on;
	on = !0;
	try {
		var n;
		for (e && (tn !== null && !tn.is_fork && tn.flush(), n = e());;) {
			if (xt(), tn === null) return n;
			tn.flush();
		}
	} finally {
		on = t;
	}
}
function pn() {
	try {
		Re();
	} catch (e) {
		Ct(e, an);
	}
}
var mn = null;
function hn(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && Lr(r) && (mn = /* @__PURE__ */ new Set(), Hr(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && dr(r), mn?.size > 0)) {
				bn.clear();
				for (let e of mn) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) mn.has(n) && (mn.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Hr(n);
					}
				}
				mn.clear();
			}
		}
		mn = null;
	}
}
function gn(e) {
	tn.schedule(e);
}
function _n(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), Tt(e, O);
		for (var n = e.first; n !== null;) _n(n, t), n = n.next;
	}
}
function vn(e) {
	Tt(e, O);
	for (var t = e.first; t !== null;) vn(t), t = t.next;
}
var yn = /* @__PURE__ */ new Set(), bn = /* @__PURE__ */ new Map(), xn = !1;
function Sn(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: tt,
		rv: 0,
		wv: 0
	};
}
/*#__NO_SIDE_EFFECTS__*/
function I(e, t) {
	let n = Sn(e, t);
	return Dr(n), n;
}
/*#__NO_SIDE_EFFECTS__*/
function Cn(e, t = !1, n = !0) {
	let r = Sn(e);
	return t || (r.equals = rt), it && n && lt !== null && lt.l !== null && (lt.l.s ??= []).push(r), r;
}
function L(e, t, n = !1) {
	return xr !== null && (!Sr || xr.f & 131072) && ht() && xr.f & 4325394 && (Er === null || !Er.has(e)) && Ue(), wn(e, n ? kn(t) : t, ln);
}
function wn(e, t, n = null) {
	if (!e.equals(t)) {
		bn.set(e, yr ? t : e.v);
		var r = fn.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && Xt(t), rn === null && Et(t);
		}
		e.wv = Ir(), On(e, se, n), ht() && wr !== null && wr.f & 1024 && !(wr.f & 96) && (Ar === null ? jr([e]) : Ar.push(e)), !r.is_fork && yn.size > 0 && !xn && Tn();
	}
	return t;
}
function Tn() {
	xn = !1;
	for (let e of yn) {
		e.f & 1024 && Tt(e, ce);
		let t;
		try {
			t = Lr(e);
		} catch {
			t = !0;
		}
		t && Hr(e);
	}
	yn.clear();
}
function En(e, t = 1) {
	var n = H(e), r = t === 1 ? n++ : n--;
	return L(e, n), r;
}
function Dn(e) {
	L(e, e.v + 1);
}
function On(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = ht(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === wr)) {
			var l = (c & se) === 0;
			if (l && Tt(s, t), c & 131072) yn.add(s);
			else if (c & 2) {
				var u = s;
				rn?.delete(u), c & 65536 || (c & 512 && (wr === null || !(wr.f & 2097152)) && (s.f |= ve), On(u, ce, n));
			} else if (l) {
				var d = s;
				c & 16 && mn !== null && mn.add(d), n === null ? gn(d) : n.push(d);
			}
		}
	}
}
function kn(e) {
	if (typeof e != "object" || !e || Se in e) return e;
	let t = w(e);
	if (t !== S && t !== C) return e;
	var n = /* @__PURE__ */ new Map(), r = m(e), i = /* @__PURE__ */ I(0), a = null, o = Pr, s = (e) => {
		if (Pr === o) return e();
		var t = xr, n = Pr;
		Cr(null), Fr(o);
		var r = e();
		return Cr(t), Fr(n), r;
	};
	return r && n.set("length", /* @__PURE__ */ I(e.length, a)), new Proxy(e, {
		defineProperty(e, t, r) {
			(!("value" in r) || r.configurable === !1 || r.enumerable === !1 || r.writable === !1) && Ve();
			var i = n.get(t);
			return i === void 0 ? s(() => {
				var e = /* @__PURE__ */ I(r.value, a);
				return n.set(t, e), e;
			}) : L(i, r.value, !0), !0;
		},
		deleteProperty(e, t) {
			var r = n.get(t);
			if (r === void 0) {
				if (t in e) {
					let e = s(() => /* @__PURE__ */ I(l, a));
					n.set(t, e), Dn(i);
				}
			} else L(r, l), Dn(i);
			return !0;
		},
		get(t, r, i) {
			if (r === Se) return e;
			var o = n.get(r), c = r in t;
			if (o === void 0 && (!c || b(t, r)?.writable) && (o = s(() => /* @__PURE__ */ I(kn(c ? t[r] : l), a)), n.set(r, o)), o !== void 0) {
				var u = H(o);
				return u === l ? void 0 : u;
			}
			return Reflect.get(t, r, i);
		},
		getOwnPropertyDescriptor(e, t) {
			var r = Reflect.getOwnPropertyDescriptor(e, t);
			if (r && "value" in r) {
				var i = n.get(t);
				i && (r.value = H(i));
			} else if (r === void 0) {
				var a = n.get(t), o = a?.v;
				if (a !== void 0 && o !== l) return {
					enumerable: !0,
					configurable: !0,
					value: o,
					writable: !0
				};
			}
			return r;
		},
		has(e, t) {
			if (t === Se) return !0;
			var r = n.get(t), i = r !== void 0 && r.v !== l || Reflect.has(e, t);
			return (r !== void 0 || wr !== null && (!i || b(e, t)?.writable)) && (r === void 0 && (r = s(() => /* @__PURE__ */ I(i ? kn(e[t]) : l, a)), n.set(t, r)), H(r) === l) ? !1 : i;
		},
		set(e, t, o, c) {
			var u = n.get(t), d = t in e;
			if (r && t === "length") for (var f = o; f < u.v; f += 1) {
				var p = n.get(f + "");
				p === void 0 ? f in e && (p = s(() => /* @__PURE__ */ I(l, a)), n.set(f + "", p)) : L(p, l);
			}
			if (u === void 0) (!d || b(e, t)?.writable) && (u = s(() => /* @__PURE__ */ I(void 0, a)), L(u, kn(o)), n.set(t, u));
			else {
				d = u.v !== l;
				var m = s(() => kn(o));
				L(u, m);
			}
			var h = Reflect.getOwnPropertyDescriptor(e, t);
			if (h?.set && h.set.call(c, o), !d) {
				if (r && typeof t == "string") {
					var g = n.get("length"), _ = Number(t);
					Number.isInteger(_) && _ >= g.v && L(g, _ + 1);
				}
				Dn(i);
			}
			return !0;
		},
		ownKeys(e) {
			H(i);
			var t = Reflect.ownKeys(e).filter((e) => {
				var t = n.get(e);
				return t === void 0 || t.v !== l;
			});
			for (var [r, a] of n) a.v !== l && !(r in e) && t.push(r);
			return t;
		},
		setPrototypeOf() {
			He();
		}
	});
}
function An(e) {
	try {
		if (typeof e == "object" && e && Se in e) return e[Se];
	} catch {}
	return e;
}
function jn(e, t) {
	return Object.is(An(e), An(t));
}
var Mn, Nn, Pn, Fn;
function In() {
	if (Mn === void 0) {
		Mn = window, Nn = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		Pn = b(t, "firstChild").get, Fn = b(t, "nextSibling").get, T(e) && (e[Ee] = void 0, e[Te] = null, e[De] = void 0, e.__e = void 0), T(n) && (n[Oe] = void 0);
	}
}
function Ln(e = "") {
	return document.createTextNode(e);
}
/*@__NO_SIDE_EFFECTS__*/
function Rn(e) {
	return Pn.call(e);
}
/*@__NO_SIDE_EFFECTS__*/
function zn(e) {
	return Fn.call(e);
}
function R(e, t) {
	if (!k) return /* @__PURE__ */ Rn(e);
	var n = /* @__PURE__ */ Rn(Xe);
	if (n === null) n = Xe.appendChild(Ln());
	else if (t && n.nodeType !== 3) {
		var r = Ln();
		return n?.before(r), Ze(r), r;
	}
	return t && Un(n), Ze(n), n;
}
function z(e, t = !1) {
	if (!k) {
		var n = /* @__PURE__ */ Rn(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ zn(n) : n;
	}
	if (t) {
		if (Xe?.nodeType !== 3) {
			var r = Ln();
			return Xe?.before(r), Ze(r), r;
		}
		Un(Xe);
	}
	return Xe;
}
function B(e, t = 1, n = !1) {
	let r = k ? Xe : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ zn(r);
	if (!k) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = Ln();
			return r === null ? i?.after(a) : r.before(a), Ze(a), a;
		}
		Un(r);
	}
	return Ze(r), r;
}
function Bn(e) {
	e.textContent = "";
}
function Vn() {
	return !1;
}
function Hn(e, t, n) {
	return t == null || t === "http://www.w3.org/1999/xhtml" ? n ? document.createElement(e, { is: n }) : document.createElement(e) : n ? document.createElementNS(t, e, { is: n }) : document.createElementNS(t, e);
}
function Un(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
function Wn(e) {
	wr === null && (xr === null && Le(e), Ie()), yr && Fe(e);
}
function Gn(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Kn(e, t) {
	var n = wr;
	n !== null && n.f & 8192 && (e |= le);
	var r = {
		ctx: lt,
		deps: null,
		nodes: null,
		f: e | se | 512,
		first: null,
		fn: t,
		last: null,
		next: null,
		parent: n,
		b: n && n.b,
		prev: null,
		teardown: null,
		wv: 0,
		ac: null
	};
	tn?.register_created_effect(r);
	var i = r;
	if (e & 4) cn === null ? fn.ensure().schedule(r) : cn.push(r);
	else if (t !== null) {
		try {
			Hr(r);
		} catch (e) {
			throw lr(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= pe));
	}
	if (i !== null && (i.parent = n, n !== null && Gn(i, n), xr !== null && xr.f & 2 && !(e & 64))) {
		var a = xr;
		(a.effects ??= []).push(i);
	}
	return r;
}
function qn() {
	return xr !== null && !Sr;
}
function Jn(e) {
	let t = Kn(8, null);
	return Tt(t, O), t.teardown = e, t;
}
function Yn(e) {
	Wn("$effect");
	var t = wr.f;
	if (!xr && t & 32 && lt !== null && !lt.i) {
		var n = lt;
		(n.e ??= []).push(e);
	} else return Xn(e);
}
function Xn(e) {
	return Kn(4 | ge, e);
}
function Zn(e) {
	return Wn("$effect.pre"), Kn(8 | ge, e);
}
function Qn(e) {
	fn.ensure();
	let t = Kn(64 | he, e);
	return () => {
		lr(t);
	};
}
function $n(e) {
	fn.ensure();
	let t = Kn(64 | he, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? fr(t, () => {
			lr(t), n(void 0);
		}) : (lr(t), n(void 0));
	});
}
function er(e) {
	return Kn(4, e);
}
function tr(e) {
	return Kn(be | he, e);
}
function nr(e, t = 0) {
	return Kn(8 | t, e);
}
function V(e, t = [], n = [], r = []) {
	Vt(r, t, n, (t) => {
		Kn(8, () => {
			e(...t.map(H));
		});
	});
}
function rr(e, t = 0) {
	return Kn(16 | t, e);
}
function ir(e, t = 0) {
	return Kn(oe | t, e);
}
function ar(e) {
	return Kn(32 | he, e);
}
function or(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = yr, n = xr;
		br(!0), Cr(null);
		try {
			t.call(null);
		} finally {
			br(e), Cr(n);
		}
	}
}
function sr(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && Ft(() => {
			e.abort(Ae);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : lr(n, t), n = r;
	}
}
function cr(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || lr(t), t = n;
	}
}
function lr(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (ur(e.nodes.start, e.nodes.end), n = !0), e.f |= fe, sr(e, t && !n), Vr(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	or(e), e.f ^= fe, e.f |= ue;
	var i = e.parent;
	i !== null && i.first !== null && dr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function ur(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ zn(e);
		e.remove(), e = n;
	}
}
function dr(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function fr(e, t, n = !0) {
	var r = [];
	pr(e, r, !0);
	var i = () => {
		n && lr(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function pr(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= le;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = (i.f & 65536) != 0 || (i.f & 32) != 0 && (e.f & 16) != 0;
				pr(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function mr(e) {
	hr(e, !0);
}
function hr(e, t) {
	if (e.f & 8192) {
		e.f ^= le, e.f & 1024 || (Tt(e, se), fn.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = (n.f & 65536) != 0 || (n.f & 32) != 0;
			hr(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function gr(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ zn(n);
		t.append(n), n = i;
	}
}
var _r = null, vr = !1, yr = !1;
function br(e) {
	yr = e;
}
var xr = null, Sr = !1;
function Cr(e) {
	xr = e;
}
var wr = null;
function Tr(e) {
	wr = e;
}
var Er = null;
function Dr(e) {
	xr !== null && (Er ??= /* @__PURE__ */ new Set()).add(e);
}
var Or = null, kr = 0, Ar = null;
function jr(e) {
	Ar = e;
}
var Mr = 1, Nr = 0, Pr = Nr;
function Fr(e) {
	Pr = e;
}
function Ir() {
	return ++Mr;
}
function Lr(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~ve), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (Lr(a) && Zt(a), a.wv > e.wv) return !0;
		}
		t & 512 && rn === null && Tt(e, O);
	}
	return !1;
}
function Rr(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(Er !== null && Er.has(e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? Rr(a, t, !1) : t === a && (n ? Tt(a, se) : a.f & 1024 && Tt(a, ce), gn(a));
	}
}
function zr(e) {
	var t = Or, n = kr, r = Ar, i = xr, a = Er, o = lt, s = Sr, c = Pr, l = e.f;
	Or = null, kr = 0, Ar = null, xr = l & 96 ? null : e, Er = null, ut(e.ctx), Sr = !1, Pr = ++Nr, e.ac !== null && (Ft(() => {
		e.ac.abort(Ae);
	}), e.ac = null);
	try {
		e.f |= ye;
		var u = e.fn, d = u();
		e.f |= de;
		var f = e.deps, p = tn?.is_fork;
		if (Or !== null) {
			var m;
			if (p || Vr(e, kr), f !== null && kr > 0) for (f.length = kr + Or.length, m = 0; m < Or.length; m++) f[kr + m] = Or[m];
			else e.deps = f = Or;
			if (qn() && e.f & 512) for (m = kr; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && kr < f.length && (Vr(e, kr), f.length = kr);
		if (ht() && Ar !== null && !Sr && f !== null && !(e.f & 6146)) for (m = 0; m < Ar.length; m++) Rr(Ar[m], e);
		if (i !== null && i !== e) {
			if (Nr++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Nr;
			if (t !== null) for (let e of t) e.rv = Nr;
			Ar !== null && (r === null ? r = Ar : r.push(...Ar));
		}
		return e.f & 8388608 && (e.f ^= xe), d;
	} catch (e) {
		return St(e);
	} finally {
		e.f ^= ye, Or = t, kr = n, Ar = r, xr = i, Er = a, ut(o), Sr = s, Pr = c;
	}
}
function Br(e, t) {
	let n = t.reactions;
	if (n !== null) {
		var r = h.call(n, e);
		if (r !== -1) {
			var i = n.length - 1;
			i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
		}
	}
	if (n === null && t.f & 2 && (Or === null || !g.call(Or, t))) {
		var a = t;
		a.f & 512 && (a.f ^= 512, a.f &= ~ve), a.v !== l && Et(a), a.ac !== null && Ft(() => {
			a.ac.abort(Ae), a.ac = null, Tt(a, se);
		}), Qt(a), Vr(a, 0);
	}
}
function Vr(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Br(e, n[r]);
}
function Hr(e) {
	var t = e.f;
	if (!(t & 16384)) {
		Tt(e, O);
		var n = wr, r = vr;
		wr = e, vr = (t & 96) == 0;
		try {
			t & 16777232 ? cr(e) : sr(e), or(e);
			var i = zr(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = Mr;
		} finally {
			vr = r, wr = n;
		}
	}
}
async function Ur() {
	await Promise.resolve(), F();
}
function H(e) {
	var t = (e.f & 2) != 0;
	if (_r?.add(e), xr !== null && !Sr && !(wr !== null && wr.f & 16384) && (Er === null || !Er.has(e))) {
		var n = xr.deps;
		if (xr.f & 2097152) e.rv < Nr && (e.rv = Nr, Or === null && n !== null && n[kr] === e ? kr++ : Or === null ? Or = [e] : Or.push(e));
		else {
			xr.deps ??= [], g.call(xr.deps, e) || xr.deps.push(e);
			var r = e.reactions;
			r === null ? e.reactions = [xr] : g.call(r, xr) || r.push(xr);
		}
	}
	if (yr && bn.has(e)) return bn.get(e);
	if (t) {
		var i = e;
		if (yr) {
			var a = i.v;
			return (!(i.f & 1024) && i.reactions !== null || Gr(i)) && (a = Xt(i)), bn.set(i, a), a;
		}
		var o = (i.f & 512) == 0 && !Sr && xr !== null && (vr || (xr.f & 512) != 0), s = (i.f & de) === 0;
		Lr(i) && (o && (i.f |= 512), Zt(i)), o && !s && ($t(i), Wr(i));
	}
	if (rn?.has(e)) return rn.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function Wr(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && ($t(t), Wr(t));
}
function Gr(e) {
	if (e.v === l) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (bn.has(t) || t.f & 2 && Gr(t)) return !0;
	return !1;
}
function Kr(e) {
	var t = Sr;
	try {
		return Sr = !0, e();
	} finally {
		Sr = t;
	}
}
function qr(e) {
	if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
		if (Se in e) Jr(e);
		else if (!Array.isArray(e)) for (let t in e) {
			let n = e[t];
			typeof n == "object" && n && Se in n && Jr(n);
		}
	}
}
function Jr(e, t = /* @__PURE__ */ new Set()) {
	if (typeof e == "object" && e && !(e instanceof EventTarget) && !t.has(e)) {
		t.add(e), e instanceof Date && e.getTime();
		for (let n in e) try {
			Jr(e[n], t);
		} catch {}
		let n = w(e);
		if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
			let t = x(n);
			for (let n in t) {
				let r = t[n].get;
				if (r) try {
					r.call(e);
				} catch {}
			}
		}
	}
}
var Yr = Symbol("events"), Xr = /* @__PURE__ */ new Set(), Zr = /* @__PURE__ */ new Set();
function Qr(e, t, n, r = {}) {
	function i(e) {
		if (r.capture || ii.call(t, e), !e.cancelBubble) return Ft(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? bt(() => {
		t.addEventListener(e, i, r);
	}) : t.addEventListener(e, i, r), i;
}
function $r(e, t, n, r = {}) {
	var i = Qr(t, e, n, r);
	return () => {
		e.removeEventListener(t, i, r);
	};
}
function ei(e, t, n, r, i) {
	var a = {
		capture: r,
		passive: i
	}, o = Qr(e, t, n, a);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && Jn(() => {
		t.removeEventListener(e, o, a);
	});
}
function ti(e, t, n) {
	(t[Yr] ??= {})[e] = n;
}
function ni(e) {
	for (var t = 0; t < e.length; t++) Xr.add(e[t]);
	for (var n of Zr) n(e);
}
var ri = null;
function ii(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	ri = e;
	var o = 0, s = ri === e && e[Yr];
	if (s) {
		var c = i.indexOf(s);
		if (c !== -1 && (t === document || t === window)) {
			e[Yr] = t;
			return;
		}
		var l = i.indexOf(t);
		if (l === -1) return;
		c <= l && (o = c);
	}
	if (a = i[o] || e.target, a !== t) {
		y(e, "currentTarget", {
			configurable: !0,
			get() {
				return a || n;
			}
		});
		var u = xr, d = wr;
		Cr(null), Tr(null);
		try {
			for (var f, p = []; a !== null && a !== t;) {
				try {
					var m = a[Yr]?.[r];
					m != null && (!a.disabled || e.target === a) && m.call(a, e);
				} catch (e) {
					f ? p.push(e) : f = e;
				}
				if (e.cancelBubble) break;
				o++, a = o < i.length ? i[o] : null;
			}
			if (f) {
				for (let e of p) queueMicrotask(() => {
					throw e;
				});
				throw f;
			}
		} finally {
			e[Yr] = t, delete e.currentTarget, Cr(u), Tr(d);
		}
	}
}
var ai = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function oi(e) {
	return ai?.createHTML(e) ?? e;
}
function si(e) {
	var t = Hn("template");
	return t.innerHTML = oi(e.replaceAll("<!>", "<!---->")), t.content;
}
function ci(e, t) {
	var n = wr;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/*#__NO_SIDE_EFFECTS__*/
function U(e, t) {
	var n = (t & 1) != 0, r = (t & 2) != 0, i, a = !e.startsWith("<!>");
	return () => {
		if (k) return ci(Xe, null), Xe;
		i === void 0 && (i = si(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ Rn(i)));
		var t = r || Nn ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ Rn(t), s = t.lastChild;
			ci(o, s);
		} else ci(t, t);
		return t;
	};
}
/*#__NO_SIDE_EFFECTS__*/
function li(e, t, n = "svg") {
	var r = !e.startsWith("<!>"), i = (t & 1) != 0, a = `<${n}>${r ? e : "<!>" + e}</${n}>`, o;
	return () => {
		if (k) return ci(Xe, null), Xe;
		if (!o) {
			var e = /* @__PURE__ */ Rn(si(a));
			if (i) for (o = document.createDocumentFragment(); /* @__PURE__ */ Rn(e);) o.appendChild(/* @__PURE__ */ Rn(e));
			else o = /* @__PURE__ */ Rn(e);
		}
		var t = o.cloneNode(!0);
		if (i) {
			var n = /* @__PURE__ */ Rn(t), r = t.lastChild;
			ci(n, r);
		} else ci(t, t);
		return t;
	};
}
/*#__NO_SIDE_EFFECTS__*/
function W(e, t) {
	return /* @__PURE__ */ li(e, t, "svg");
}
function ui(e = "") {
	if (!k) {
		var t = Ln(e + "");
		return ci(t, t), t;
	}
	var n = Xe;
	return n.nodeType === 3 ? Un(n) : (n.before(n = Ln()), Ze(n)), ci(n, n), n;
}
function G() {
	if (k) return ci(Xe, null), Xe;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = Ln();
	return e.append(t, n), ci(t, n), e;
}
function K(e, t) {
	if (k) {
		var n = wr;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = Xe), Qe();
		return;
	}
	e !== null && e.before(t);
}
function di() {
	if (k && Xe && Xe.nodeType === 8 && Xe.textContent?.startsWith("$")) {
		let e = Xe.textContent.substring(1);
		return Qe(), e;
	}
	return (window.__svelte ??= {}).uid ??= 1, `c${window.__svelte.uid++}`;
}
function fi(e) {
	return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
var pi = [
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
function mi(e) {
	return pi.includes(e);
}
var hi = /* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split("."), gi = {
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
function _i(e) {
	return e = e.toLowerCase(), gi[e] ?? e;
}
[...hi];
var vi = ["touchstart", "touchmove"];
function yi(e) {
	return vi.includes(e);
}
var bi = [
	"textarea",
	"script",
	"style",
	"title"
];
function xi(e) {
	return bi.includes(e);
}
function Si(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e[Oe] ??= e.nodeValue) && (e[Oe] = n, e.nodeValue = `${n}`);
}
function Ci(e, t) {
	return Ei(e, t);
}
function wi(e, t) {
	In(), t.intro = t.intro ?? !1;
	let n = t.target, r = k, i = Xe;
	try {
		for (var a = /* @__PURE__ */ Rn(n); a && (a.nodeType !== 8 || a.data !== "[");) a = /* @__PURE__ */ zn(a);
		if (!a) throw c;
		Ye(!0), Ze(a);
		let r = Ei(e, {
			...t,
			anchor: a
		});
		return Ye(!1), r;
	} catch (r) {
		if (r instanceof Error && r.message.split("\n").some((e) => e.startsWith("https://svelte.dev/e/"))) throw r;
		return r !== c && console.warn("Failed to hydrate: ", r), t.recover === !1 && ze(), In(), Bn(n), Ye(!1), Ci(e, t);
	} finally {
		Ye(r), Ze(i);
	}
}
var Ti = /* @__PURE__ */ new Map();
function Ei(e, { target: t, anchor: n, props: r = {}, events: i, context: a, intro: o = !0, transformError: s }) {
	In();
	var l = void 0, u = $n(() => {
		var o = n ?? t.appendChild(Ln());
		zt(o, { pending: () => {} }, (t) => {
			M({});
			var n = lt;
			if (a && (n.c = a), i && (r.$$events = i), k && ci(t, null), l = e(t, r) || {}, k && (wr.nodes.end = Xe, Xe === null || Xe.nodeType !== 8 || Xe.data !== "]")) throw Ke(), c;
			N();
		}, s);
		var u = /* @__PURE__ */ new Set(), d = (e) => {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (!u.has(r)) {
					u.add(r);
					var i = yi(r);
					for (let e of [t, document]) {
						var a = Ti.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), Ti.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, ii, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return d(_(Xr)), Zr.add(d), () => {
			for (var e of u) for (let n of [t, document]) {
				var r = Ti.get(n), i = r.get(e);
				--i == 0 ? (n.removeEventListener(e, ii), r.delete(e), r.size === 0 && Ti.delete(n)) : r.set(e, i);
			}
			Zr.delete(d), o !== n && o.parentNode?.removeChild(o);
		};
	});
	return Di.set(l, u), l;
}
var Di = /* @__PURE__ */ new WeakMap();
function Oi(e, t) {
	let n = Di.get(e);
	return n ? (Di.delete(e), n(t)) : Promise.resolve();
}
var ki = class {
	anchor;
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ new Map();
	#n = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Set();
	#i = !0;
	constructor(e, t = !0) {
		this.anchor = e, this.#i = t;
	}
	#a = (e) => {
		if (this.#e.has(e)) {
			var t = this.#e.get(e), n = this.#t.get(t);
			if (n) mr(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (mr(r.effect), this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (lr(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e)) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						gr(r, t), t.append(Ln()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else lr(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), fr(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (lr(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = tn, r = Vn();
		if (t && !this.#t.has(e) && !this.#n.has(e)) if (r) {
			var i = document.createDocumentFragment(), a = Ln();
			i.append(a), this.#n.set(e, {
				effect: ar(() => t(a)),
				fragment: i
			});
		} else this.#t.set(e, ar(() => t(this.anchor)));
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else k && (this.anchor = Xe), this.#a(n);
	}
};
function q(e, t, ...n) {
	var r = new ki(e);
	rr(() => {
		let e = t() ?? null;
		r.ensure(e, e && ((t) => e(t, ...n)));
	}, pe);
}
function Ai(e) {
	lt === null && Me("onMount"), it && lt.l !== null ? Mi(lt).m.push(e) : Yn(() => {
		let t = Kr(e);
		if (typeof t == "function") return t;
	});
}
function ji(e) {
	lt === null && Me("onDestroy"), Ai(() => () => Kr(e));
}
function Mi(e) {
	var t = e.l;
	return t.u ??= {
		a: [],
		b: [],
		m: []
	};
}
function Ni() {
	return Symbol(p);
}
function J(e, t, n = !1) {
	var r;
	k && (r = Xe, Qe());
	var i = new ki(e), a = n ? pe : 0;
	function o(e, t) {
		if (k) {
			var n = et(r);
			if (e !== parseInt(n.substring(1))) {
				var a = $e();
				Ze(a), i.anchor = a, Ye(!1), i.ensure(e, t), Ye(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	rr(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
var Pi = Symbol("NaN");
function Fi(e, t, n) {
	k && Qe();
	var r = new ki(e), i = !ht();
	rr(() => {
		var e = t();
		e !== e && (e = Pi), i && typeof e == "object" && e && (e = {}), r.ensure(e, n);
	});
}
function Ii(e, t) {
	k && Ze(/* @__PURE__ */ Rn(e)), nr(() => {
		var n = t();
		for (var r in n) {
			var i = n[r];
			i ? e.style.setProperty(r, i) : e.style.removeProperty(r);
		}
	});
}
function Li(e, t) {
	return t;
}
function Ri(e, t, n) {
	for (var r = [], i = t.length, a, o = t.length, s = 0; s < i; s++) {
		let n = t[s];
		fr(n, () => {
			if (a) {
				if (a.pending.delete(n), a.done.add(n), a.pending.size === 0) {
					var t = e.outrogroups;
					zi(e, _(a.done)), t.delete(a), t.size === 0 && (e.outrogroups = null);
				}
			} else --o;
		}, !1);
	}
	if (o === 0) {
		var c = r.length === 0 && n !== null;
		if (c) {
			var l = n, u = l.parentNode;
			Bn(u), u.append(l), e.items.clear();
		}
		zi(e, t, !c);
	} else a = {
		pending: new Set(t),
		done: /* @__PURE__ */ new Set()
	}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(a);
}
function zi(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = /* @__PURE__ */ new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? (a.f |= _e, gr(a, document.createDocumentFragment())) : lr(t[i], n);
	}
}
var Bi;
function Vi(e, t, n, r, i, a = null) {
	var o = e, s = /* @__PURE__ */ new Map();
	if (t & 4) {
		var c = e;
		o = k ? Ze(/* @__PURE__ */ Rn(c)) : c.appendChild(Ln());
	}
	k && Qe();
	var l = null, u = /* @__PURE__ */ Jt(() => {
		var e = n();
		return m(e) ? e : e == null ? [] : _(e);
	}), d, f = /* @__PURE__ */ new Map(), p = !0;
	function h(e) {
		v.effect.f & 16384 || (v.pending.delete(e), v.fallback = l, Ui(v, d, o, t, r), l !== null && (d.length === 0 ? l.f & 33554432 ? (l.f ^= _e, Gi(l, null, o)) : mr(l) : fr(l, () => {
			l = null;
		})));
	}
	function g(e) {
		v.pending.delete(e);
	}
	var v = {
		effect: rr(() => {
			d = H(u);
			var e = d.length;
			let c = !1;
			k && et(o) === "[!" != (e === 0) && (o = $e(), Ze(o), Ye(!1), c = !0);
			for (var m = /* @__PURE__ */ new Set(), _ = tn, v = Vn(), y = 0; y < e; y += 1) {
				k && Xe.nodeType === 8 && Xe.data === "]" && (o = Xe, c = !0, Ye(!1));
				var b = d[y], x = r(b, y), S = p ? null : s.get(x);
				S ? (S.v && wn(S.v, b), S.i && wn(S.i, y), v && _.unskip_effect(S.e)) : (S = Wi(s, p ? o : Bi ??= Ln(), b, x, y, i, t, n), p || (S.e.f |= _e), s.set(x, S)), m.add(x);
			}
			if (e === 0 && a && !l && (p ? l = ar(() => a(o)) : (l = ar(() => a(Bi ??= Ln())), l.f |= _e)), e > m.size && Pe("", "", ""), k && e > 0 && Ze($e()), !p) if (f.set(_, m), v) {
				for (let [e, t] of s) m.has(e) || _.skip_effect(t.e);
				_.oncommit(h), _.ondiscard(g);
			} else h(_);
			c && Ye(!0), H(u);
		}),
		flags: t,
		items: s,
		pending: f,
		outrogroups: null,
		fallback: l
	};
	p = !1, k && (o = Xe);
}
function Hi(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function Ui(e, t, n, r, i) {
	var a = (r & 8) != 0, o = t.length, s = e.items, c = Hi(e.effect.first), l, u = null, d, f = [], p = [], m, h, g, v;
	if (a) for (v = 0; v < o; v += 1) m = t[v], h = i(m, v), g = s.get(h).e, g.f & 33554432 || (g.nodes?.a?.measure(), (d ??= /* @__PURE__ */ new Set()).add(g));
	for (v = 0; v < o; v += 1) {
		if (m = t[v], h = i(m, v), g = s.get(h).e, e.outrogroups !== null) for (let t of e.outrogroups) t.pending.delete(g), t.done.delete(g);
		if (g.f & 8192 && (mr(g), a && (g.nodes?.a?.unfix(), (d ??= /* @__PURE__ */ new Set()).delete(g))), g.f & 33554432) if (g.f ^= _e, g === c) Gi(g, null, n);
		else {
			var y = u ? u.next : c;
			g === e.effect.last && (e.effect.last = g.prev), g.prev && (g.prev.next = g.next), g.next && (g.next.prev = g.prev), Ki(e, u, g), Ki(e, g, y), Gi(g, y, n), u = g, f = [], p = [], c = Hi(u.next);
			continue;
		}
		if (g !== c) {
			if (l !== void 0 && l.has(g)) {
				if (f.length < p.length) {
					var b = p[0], x;
					u = b.prev;
					var S = f[0], C = f[f.length - 1];
					for (x = 0; x < f.length; x += 1) Gi(f[x], b, n);
					for (x = 0; x < p.length; x += 1) l.delete(p[x]);
					Ki(e, S.prev, C.next), Ki(e, u, S), Ki(e, C, b), c = b, u = C, --v, f = [], p = [];
				} else l.delete(g), Gi(g, c, n), Ki(e, g.prev, g.next), Ki(e, g, u === null ? e.effect.first : u.next), Ki(e, u, g), u = g;
				continue;
			}
			for (f = [], p = []; c !== null && c !== g;) (l ??= /* @__PURE__ */ new Set()).add(c), p.push(c), c = Hi(c.next);
			if (c === null) continue;
		}
		g.f & 33554432 || f.push(g), u = g, c = Hi(g.next);
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups) t.pending.size === 0 && (zi(e, _(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (c !== null || l !== void 0) {
		var w = [];
		if (l !== void 0) for (g of l) g.f & 8192 || w.push(g);
		for (; c !== null;) !(c.f & 8192) && c !== e.fallback && w.push(c), c = Hi(c.next);
		var T = w.length;
		if (T > 0) {
			var E = r & 4 && o === 0 ? n : null;
			if (a) {
				for (v = 0; v < T; v += 1) w[v].nodes?.a?.measure();
				for (v = 0; v < T; v += 1) w[v].nodes?.a?.fix();
			}
			Ri(e, w, E);
		}
	}
	a && bt(() => {
		if (d !== void 0) for (g of d) g.nodes?.a?.apply();
	});
}
function Wi(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? Sn(n) : /* @__PURE__ */ Cn(n, !1, !1) : null, l = o & 2 ? Sn(i) : null;
	return {
		v: c,
		i: l,
		e: ar(() => (a(t, c ?? n, l ?? i, s), () => {
			e.delete(r);
		}))
	};
}
function Gi(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
		var o = /* @__PURE__ */ zn(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function Ki(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function qi(e, t, n = !1, r = !1, i = !1, a = !1) {
	var o = e, s = "";
	if (n) {
		var l = e;
		k && (o = Ze(/* @__PURE__ */ Rn(l)));
	}
	V(() => {
		var e = wr;
		if (s === (s = t() ?? "")) {
			k && Qe();
			return;
		}
		if (n && !k) {
			e.nodes = null, l.innerHTML = s, s !== "" && ci(/* @__PURE__ */ Rn(l), l.lastChild);
			return;
		}
		if (e.nodes !== null && (ur(e.nodes.start, e.nodes.end), e.nodes = null), s !== "") {
			if (k) {
				for (var a = Xe.data, u = Qe(), p = u; u !== null && (u.nodeType !== 8 || u.data !== "");) p = u, u = /* @__PURE__ */ zn(u);
				if (u === null) throw Ke(), c;
				ci(Xe, p), o = Ze(u);
				return;
			}
			var m = Hn(r ? "svg" : i ? "math" : "template", r ? d : i ? f : void 0);
			m.innerHTML = s;
			var h = r || i ? m : m.content;
			if (ci(/* @__PURE__ */ Rn(h), h.lastChild), r || i) for (; /* @__PURE__ */ Rn(h);) o.before(/* @__PURE__ */ Rn(h));
			else o.before(h);
		}
	});
}
function Ji(e, t, n) {
	var r;
	k && (r = Xe, Qe());
	var i = new ki(e);
	rr(() => {
		var e = t() ?? null;
		if (k && et(r) === "[" != (e !== null)) {
			var a = $e();
			Ze(a), i.anchor = a, Ye(!1), i.ensure(e, e && ((t) => n(t, e))), Ye(!0);
			return;
		}
		i.ensure(e, e && ((t) => n(t, e)));
	}, pe);
}
function Yi(e, t, n, r, i, a) {
	let o = k;
	k && Qe();
	var s = null;
	k && Xe.nodeType === 1 && (s = Xe, Qe());
	var c = k ? Xe : e, l = new ki(c, !1);
	rr(() => {
		let e = t() || null;
		var a = i ? i() : n || e === "svg" ? d : void 0;
		if (e === null) {
			l.ensure(null, null);
			return;
		}
		return l.ensure(e, (t) => {
			if (e) {
				if (s = k ? s : Hn(e, a), ci(s, s), r) {
					var n = null;
					k && xi(e) && s.append(n = document.createComment(""));
					var i = k ? /* @__PURE__ */ Rn(s) : s.appendChild(Ln());
					k && (i === null ? Ye(!1) : Ze(i)), r(s, i), n?.remove();
				}
				wr.nodes.end = s, t.before(s);
			}
			k && Ze(t);
		}), () => {};
	}, pe), Jn(() => {}), o && (Ye(!0), Ze(c));
}
function Xi(e, t) {
	let n = null, r = k;
	var i;
	if (k) {
		n = Xe;
		for (var a = /* @__PURE__ */ Rn(document.head); a !== null && (a.nodeType !== 8 || a.data !== e);) a = /* @__PURE__ */ zn(a);
		if (a === null) Ye(!1);
		else {
			var o = /* @__PURE__ */ zn(a);
			a.remove(), Ze(o);
		}
	}
	k || (i = document.head.appendChild(Ln()));
	try {
		rr(() => {
			var e = ar(() => t(i));
			e.f |= me;
		});
	} finally {
		r && (Ye(!0), Ze(n));
	}
}
function Zi(e, t) {
	er(() => {
		var n = e.getRootNode(), r = n.host ? n : n.head ?? n.ownerDocument.head;
		if (!r.querySelector("#" + t.hash)) {
			let e = Hn("style");
			e.id = t.hash, e.textContent = t.code, r.appendChild(e);
		}
	});
}
function Qi(e, t, n) {
	er(() => {
		var r = Kr(() => t(e, n?.()) || {});
		if (n && r?.update) {
			var i = !1, a = {};
			nr(() => {
				var e = n();
				qr(e), i && nt(a, e) && (a = e, r.update(e));
			}), i = !0;
		}
		if (r?.destroy) return () => r.destroy();
	});
}
function $i(e, t) {
	var n = void 0, r;
	ir(() => {
		n !== (n = t()) && (r &&= (lr(r), null), n && (r = ar(() => {
			er(() => n(e));
		})));
	});
}
function ea(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var i = e.length;
		for (t = 0; t < i; t++) e[t] && (n = ea(e[t])) && (r && (r += " "), r += n);
	} else for (n in e) e[n] && (r && (r += " "), r += n);
	return r;
}
function ta() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = ea(e)) && (r && (r += " "), r += t);
	return r;
}
function na(e) {
	return typeof e == "object" ? ta(e) : e ?? "";
}
var ra = [..." 	\n\r\f\xA0\v﻿"];
function ia(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || ra.includes(r[o - 1])) && (s === r.length || ra.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
function aa(e, t = !1) {
	var n = t ? " !important;" : ";", r = "";
	for (var i of Object.keys(e)) {
		var a = e[i];
		a != null && a !== "" && (r += " " + i + ": " + a + n);
	}
	return r;
}
function oa(e) {
	return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function sa(e, t) {
	if (t) {
		var n = "", r, i;
		if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
			e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
			var a = !1, o = 0, s = !1, c = [];
			r && c.push(...Object.keys(r).map(oa)), i && c.push(...Object.keys(i).map(oa));
			var l = 0, u = -1;
			let t = e.length;
			for (var d = 0; d < t; d++) {
				var f = e[d];
				if (s ? f === "/" && e[d - 1] === "*" && (s = !1) : a ? a === f && (a = !1) : f === "/" && e[d + 1] === "*" ? s = !0 : f === "\"" || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !s && a === !1 && o === 0) {
					if (f === ":" && u === -1) u = d;
					else if (f === ";" || d === t - 1) {
						if (u !== -1) {
							var p = oa(e.substring(l, u).trim());
							if (!c.includes(p)) {
								f !== ";" && d++;
								var m = e.substring(l, d).trim();
								n += " " + m + ";";
							}
						}
						l = d + 1, u = -1;
					}
				}
			}
		}
		return r && (n += aa(r)), i && (n += aa(i, !0)), n = n.trim(), n === "" ? null : n;
	}
	return e == null ? null : String(e);
}
function ca(e, t, n, r, i, a) {
	var o = e[Ee];
	if (k || o !== n || o === void 0) {
		var s = ia(n, r, a);
		(!k || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e[Ee] = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
function la(e, t = {}, n, r) {
	for (var i in n) {
		var a = n[i];
		t[i] !== a && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, r));
	}
}
function ua(e, t, n, r) {
	var i = e[De];
	if (k || i !== t) {
		var a = sa(t, r);
		(!k || a !== e.getAttribute("style")) && (a == null ? e.removeAttribute("style") : e.style.cssText = a), e[De] = t;
	} else r && (Array.isArray(r) ? (la(e, n?.[0], r[0]), la(e, n?.[1], r[1], "important")) : la(e, n, r));
	return r;
}
function da(e, t, n = !1) {
	if (e.multiple) {
		if (t == null) return;
		if (!m(t)) return qe();
		for (var r of e.options) r.selected = t.includes(pa(r));
		return;
	}
	for (r of e.options) if (jn(pa(r), t)) {
		r.selected = !0;
		return;
	}
	(!n || t !== void 0) && (e.selectedIndex = -1);
}
function fa(e) {
	var t = new MutationObserver(() => {
		"__value" in e && da(e, e.__value);
	});
	t.observe(e, {
		childList: !0,
		subtree: !0,
		attributes: !0,
		attributeFilter: ["value"]
	}), Jn(() => {
		t.disconnect();
	});
}
function pa(e) {
	return "__value" in e ? e.__value : e.value;
}
var ma = Symbol("class"), ha = Symbol("style"), ga = Symbol("is custom element"), _a = Symbol("is html"), va = je ? "link" : "LINK", ya = je ? "input" : "INPUT", ba = je ? "option" : "OPTION", xa = je ? "select" : "SELECT", Sa = je ? "progress" : "PROGRESS";
function Ca(e) {
	if (k) {
		var t = !1, n = () => {
			if (!t) {
				if (t = !0, e.hasAttribute("value")) {
					var n = e.value;
					Y(e, "value", null), e.value = n;
				}
				if (e.hasAttribute("checked")) {
					var r = e.checked;
					Y(e, "checked", null), e.checked = r;
				}
			}
		};
		e[ke] = n, bt(n), Pt();
	}
}
function wa(e, t) {
	var n = ka(e);
	n.value === (n.value = t ?? void 0) || e.value === t && (t !== 0 || e.nodeName !== Sa) || (e.value = t ?? "");
}
function Ta(e, t) {
	var n = ka(e);
	n.checked !== (n.checked = t ?? void 0) && (e.checked = t);
}
function Ea(e, t) {
	t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function Y(e, t, n, r) {
	var i = ka(e);
	k && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === va) || i[t] !== (i[t] = n) && (t === "loading" && (e[we] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && ja(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Da(e, t, n, r, i = !1, a = !1) {
	if (k && i && e.nodeName === ya) {
		var o = e;
		(o.type === "checkbox" ? "defaultChecked" : "defaultValue") in n || Ca(o);
	}
	var s = ka(e), c = s[ga], u = !s[_a];
	let d = k && c;
	d && Ye(!1);
	var f = t || {}, p = e.nodeName === ba;
	for (var m in t) m in n || (n[m] = null);
	n.class ? n.class = na(n.class) : (r || n[ma]) && (n.class = null), n[ha] && (n.style ??= null);
	var h = ja(e);
	if (e.nodeName === ya && "type" in n && ("value" in n || "__value" in n)) {
		var g = n.type;
		(g !== f.type || g === void 0 && e.hasAttribute("type")) && (f.type = g, Y(e, "type", g, a));
	}
	for (let i in n) {
		let o = n[i];
		if (p && i === "value" && o == null) {
			e.value = e.__value = "", f[i] = o;
			continue;
		}
		if (i === "class") {
			ca(e, e.namespaceURI === "http://www.w3.org/1999/xhtml", o, r, t?.[ma], n[ma]), f[i] = o, f[ma] = n[ma];
			continue;
		}
		if (i === "style") {
			ua(e, o, t?.[ha], n[ha]), f[i] = o, f[ha] = n[ha];
			continue;
		}
		var _ = f[i];
		if (!(o === _ && !(o === void 0 && e.hasAttribute(i)))) {
			f[i] = o;
			var v = i[0] + i[1];
			if (v !== "$$") if (v === "on") {
				let t = {}, n = "$$" + i, r = i.slice(2);
				var y = mi(r);
				if (fi(r) && (r = r.slice(0, -7), t.capture = !0), !y && _) {
					if (o != null) continue;
					e.removeEventListener(r, f[n], t), f[n] = null;
				}
				if (y) ti(r, e, o), ni([r]);
				else if (o != null) {
					function a(e) {
						f[i].call(this, e);
					}
					f[n] = Qr(r, e, a, t);
				}
			} else if (i === "style") Y(e, i, o);
			else if (i === "autofocus") jt(e, !!o);
			else if (!c && (i === "__value" || i === "value" && o != null)) e.value = e.__value = o;
			else if (i === "selected" && p) Ea(e, o);
			else {
				var b = i;
				u || (b = _i(b));
				var x = b === "defaultValue" || b === "defaultChecked";
				if (o == null && !c && !x) if (s[i] = null, b === "value" || b === "checked") {
					let n = e, r = t === void 0;
					if (b === "value") {
						let e = n.defaultValue;
						n.removeAttribute(b), n.defaultValue = e, n.value = n.__value = r ? e : null;
					} else {
						let e = n.defaultChecked;
						n.removeAttribute(b), n.defaultChecked = e, n.checked = r ? e : !1;
					}
				} else e.removeAttribute(i);
				else x || h.includes(b) && (c || typeof o != "string") ? (e[b] = o, b in s && (s[b] = l)) : typeof o != "function" && Y(e, b, o, a);
			}
		}
	}
	return d && Ye(!0), f;
}
function Oa(e, t, n = [], r = [], i = [], a, o = !1, s = !1) {
	Vt(i, n, r, (n) => {
		var r = void 0, i = {}, c = e.nodeName === xa, l = !1;
		if (ir(() => {
			var u = t(...n.map(H)), d = Da(e, r, u, a, o, s);
			l && c && "value" in u && da(e, u.value);
			for (let e of Object.getOwnPropertySymbols(i)) u[e] || lr(i[e]);
			for (let t of Object.getOwnPropertySymbols(u)) {
				var f = u[t];
				t.description === "@attach" && (!r || f !== r[t]) && (i[t] && lr(i[t]), i[t] = ar(() => $i(e, () => f))), d[t] = f;
			}
			r = d;
		}), c) {
			var u = e;
			er(() => {
				da(u, r.value, !0), fa(u);
			});
		}
		l = !0;
	});
}
function ka(e) {
	return e[Te] ??= {
		[ga]: e.nodeName.includes("-"),
		[_a]: e.namespaceURI === u
	};
}
var Aa = /* @__PURE__ */ new Map();
function ja(e) {
	var t = e.getAttribute("is") || e.nodeName, n = Aa.get(t);
	if (n) return n;
	Aa.set(t, n = []);
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var o in r = x(i), r) r[o].set && o !== "innerHTML" && o !== "textContent" && o !== "innerText" && n.push(o);
		i = w(i);
	}
	return n;
}
function Ma(e, t, n = t) {
	var r = /* @__PURE__ */ new WeakSet();
	It(e, "input", async (i) => {
		var a = i ? e.defaultValue : e.value;
		if (a = Na(e) ? Pa(a) : a, n(a), tn !== null && r.add(tn), await Ur(), a !== (a = t())) {
			var o = e.selectionStart, s = e.selectionEnd, c = e.value.length;
			if (e.value = a ?? "", s !== null) {
				var l = e.value.length;
				o === s && s === c && l > c ? (e.selectionStart = l, e.selectionEnd = l) : (e.selectionStart = o, e.selectionEnd = Math.min(s, l));
			}
		}
	}), (k && e.defaultValue !== e.value || Kr(t) == null && e.value) && (n(Na(e) ? Pa(e.value) : e.value), tn !== null && r.add(tn)), nr(() => {
		var n = t();
		if (e === document.activeElement) {
			var i = tn;
			if (r.has(i)) return;
		}
		Na(e) && n === Pa(e.value) || e.type === "date" && !n && !e.value || n !== e.value && (e.value = n ?? "");
	});
}
function Na(e) {
	var t = e.type;
	return t === "number" || t === "range";
}
function Pa(e) {
	return e === "" ? null : +e;
}
function Fa(e, t, n = t) {
	It(e, "change", () => {
		n(e.files);
	}), k && e.files && n(e.files), nr(() => {
		e.files = t();
	});
}
var Ia = /* @__PURE__ */ new class e {
	#e = /* @__PURE__ */ new WeakMap();
	#t;
	#n;
	static entries = /* @__PURE__ */ new WeakMap();
	constructor(e) {
		this.#n = e;
	}
	observe(e, t) {
		var n = this.#e.get(e) || /* @__PURE__ */ new Set();
		return n.add(t), this.#e.set(e, n), this.#r().observe(e, this.#n), () => {
			var n = this.#e.get(e);
			n.delete(t), n.size === 0 && (this.#e.delete(e), this.#t.unobserve(e));
		};
	}
	#r() {
		return this.#t ??= new ResizeObserver((t) => {
			for (var n of t) {
				e.entries.set(n.target, n);
				for (var r of this.#e.get(n.target) || []) r(n);
			}
		});
	}
}({ box: "border-box" });
function La(e, t, n) {
	var r = Ia.observe(e, () => n(e[t]));
	er(() => (Kr(() => n(e[t])), r));
}
function Ra(e, t) {
	return e === t || e?.[Se] === t;
}
function za(e = {}, t, n, r) {
	var i = lt.r, a = wr;
	return er(() => {
		var o, s;
		return nr(() => {
			o = s, s = r?.() || [], Kr(() => {
				Ra(n(...s), e) || (t(e, ...s), o && Ra(n(...o), e) && t(null, ...o));
			});
		}), () => {
			let r = a;
			for (; r !== i && r.parent !== null && r.parent.f & 33554432;) r = r.parent;
			let o = () => {
				s && Ra(n(...s), e) && t(null, ...s);
			}, c = r.teardown;
			r.teardown = () => {
				o(), c?.();
			};
		};
	}), e;
}
function Ba(e = !1) {
	let t = lt, n = t.l.u;
	if (!n) return;
	let r = () => qr(t.s);
	if (e) {
		let e = 0, n = {}, i = /* @__PURE__ */ Gt(() => {
			let r = !1, i = t.s;
			for (let e in i) i[e] !== n[e] && (n[e] = i[e], r = !0);
			return r && e++, e;
		});
		r = () => H(i);
	}
	n.b.length && Zn(() => {
		Va(t, r), te(n.b);
	}), Yn(() => {
		let e = Kr(() => n.m.map(ee));
		return () => {
			for (let t of e) typeof t == "function" && t();
		};
	}), n.a.length && Yn(() => {
		Va(t, r), te(n.a);
	});
}
function Va(e, t) {
	if (e.l.s) for (let t of e.l.s) H(t);
	t();
}
var Ha = {
	get(e, t) {
		if (!e.exclude.has(t)) return e.props[t];
	},
	set(e, t) {
		return !1;
	},
	getOwnPropertyDescriptor(e, t) {
		if (!e.exclude.has(t) && t in e.props) return {
			enumerable: !0,
			configurable: !0,
			value: e.props[t]
		};
	},
	has(e, t) {
		return !e.exclude.has(t) && t in e.props;
	},
	ownKeys(e) {
		return Reflect.ownKeys(e.props).filter((t) => !e.exclude.has(t));
	}
};
/*#__NO_SIDE_EFFECTS__*/
function Ua(e, t, n) {
	return new Proxy({
		props: e,
		exclude: t
	}, Ha);
}
var Wa = {
	get(e, t) {
		if (!e.exclude.includes(t)) return H(e.version), t in e.special ? e.special[t]() : e.props[t];
	},
	set(e, t, n) {
		if (!(t in e.special)) {
			var r = wr;
			try {
				Tr(e.parent_effect), e.special[t] = X({ get [t]() {
					return e.props[t];
				} }, t, 4);
			} finally {
				Tr(r);
			}
		}
		return e.special[t](n), En(e.version), !0;
	},
	getOwnPropertyDescriptor(e, t) {
		if (!e.exclude.includes(t) && t in e.props) return {
			enumerable: !0,
			configurable: !0,
			value: e.props[t]
		};
	},
	deleteProperty(e, t) {
		return e.exclude.includes(t) ? !0 : (e.exclude.push(t), En(e.version), !0);
	},
	has(e, t) {
		return !e.exclude.includes(t) && t in e.props;
	},
	ownKeys(e) {
		return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
	}
};
function Ga(e, t) {
	return new Proxy({
		props: e,
		exclude: t,
		special: {},
		version: Sn(0),
		parent_effect: wr
	}, Wa);
}
var Ka = {
	get(e, t) {
		let n = e.props.length;
		for (; n--;) {
			let r = e.props[n];
			if (E(r) && (r = r()), typeof r == "object" && r && t in r) return r[t];
		}
	},
	set(e, t, n) {
		let r = e.props.length;
		for (; r--;) {
			let i = e.props[r];
			E(i) && (i = i());
			let a = b(i, t);
			if (a && a.set) return a.set(n), !0;
		}
		return !1;
	},
	getOwnPropertyDescriptor(e, t) {
		let n = e.props.length;
		for (; n--;) {
			let r = e.props[n];
			if (E(r) && (r = r()), typeof r == "object" && r && t in r) {
				let e = b(r, t);
				return e && !e.configurable && (e.configurable = !0), e;
			}
		}
	},
	has(e, t) {
		if (t === Se || t === Ce) return !1;
		for (let n of e.props) if (E(n) && (n = n()), n != null && t in n) return !0;
		return !1;
	},
	ownKeys(e) {
		let t = [];
		for (let n of e.props) if (E(n) && (n = n()), n) {
			for (let e in n) t.includes(e) || t.push(e);
			for (let e of Object.getOwnPropertySymbols(n)) t.includes(e) || t.push(e);
		}
		return t;
	}
};
function qa(...e) {
	return new Proxy({ props: e }, Ka);
}
function X(e, t, n, r) {
	var i = !it || (n & 2) != 0, a = (n & 8) != 0, o = (n & 16) != 0, s = r, c = !0, l = void 0, u = () => o && i ? (l ??= /* @__PURE__ */ Gt(r), H(l)) : (c && (c = !1, s = o ? Kr(r) : r), s);
	let d;
	if (a) {
		var f = Se in e || Ce in e;
		d = b(e, t)?.set ?? (f && t in e ? (n) => e[t] = n : void 0);
	}
	var p, m = !1;
	a ? [p, m] = At(() => e[t]) : p = e[t], p === void 0 && r !== void 0 && (p = u(), d && (i && Be(t), d(p)));
	var h = i ? () => {
		var n = e[t];
		return n === void 0 ? u() : (c = !0, n);
	} : () => {
		var n = e[t];
		return n !== void 0 && (s = void 0), n === void 0 ? s : n;
	};
	if (i && !(n & 4)) return h;
	if (d) {
		var g = e.$$legacy;
		return (function(e, t) {
			return arguments.length > 0 ? ((!i || !t || g || m) && d(t ? h() : e), e) : h();
		});
	}
	var _ = !1, v = (n & 1 ? Gt : Jt)(() => (_ = !1, h()));
	a && H(v);
	var y = wr;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? H(v) : i && a ? kn(e) : e;
			return L(v, n), _ = !0, s !== void 0 && (s = n), e;
		}
		return yr && _ || y.f & 16384 ? v.v : H(v);
	});
}
function Ja(e) {
	return new Ya(e);
}
var Ya = class {
	#e;
	#t;
	constructor(e) {
		var t = /* @__PURE__ */ new Map(), n = (e, n) => {
			var r = /* @__PURE__ */ Cn(n, !1, !1);
			return t.set(e, r), r;
		};
		let r = new Proxy({
			...e.props || {},
			$$events: {}
		}, {
			get(e, r) {
				return H(t.get(r) ?? n(r, Reflect.get(e, r)));
			},
			has(e, r) {
				return r === Ce ? !0 : (H(t.get(r) ?? n(r, Reflect.get(e, r))), Reflect.has(e, r));
			},
			set(e, r, i) {
				return L(t.get(r) ?? n(r, i), i), Reflect.set(e, r, i);
			}
		});
		this.#t = (e.hydrate ? wi : Ci)(e.component, {
			target: e.target,
			anchor: e.anchor,
			props: r,
			context: e.context,
			intro: e.intro ?? !1,
			recover: e.recover,
			transformError: e.transformError
		}), (!e?.props?.$$host || e.sync === !1) && F(), this.#e = r.$$events;
		for (let e of Object.keys(this.#t)) e === "$set" || e === "$destroy" || e === "$on" || y(this, e, {
			get() {
				return this.#t[e];
			},
			set(t) {
				this.#t[e] = t;
			},
			enumerable: !0
		});
		this.#t.$set = (e) => {
			Object.assign(r, e);
		}, this.#t.$destroy = () => {
			Oi(this.#t);
		};
	}
	$set(e) {
		this.#t.$set(e);
	}
	$on(e, t) {
		this.#e[e] = this.#e[e] || [];
		let n = (...e) => t.call(this, ...e);
		return this.#e[e].push(n), () => {
			this.#e[e] = this.#e[e].filter((e) => e !== n);
		};
	}
	$destroy() {
		this.#t.$destroy();
	}
}, Xa;
typeof HTMLElement == "function" && (Xa = class extends HTMLElement {
	$$ctor;
	$$s;
	$$c;
	$$cn = !1;
	$$d = {};
	$$r = !1;
	$$p_d = {};
	$$l = {};
	$$l_u = /* @__PURE__ */ new Map();
	$$me;
	$$shadowRoot = null;
	constructor(e, t, n) {
		super(), this.$$ctor = e, this.$$s = t, n && (this.$$shadowRoot = this.attachShadow(n));
	}
	addEventListener(e, t, n) {
		if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
			let n = this.$$c.$on(e, t);
			this.$$l_u.set(t, n);
		}
		super.addEventListener(e, t, n);
	}
	removeEventListener(e, t, n) {
		if (super.removeEventListener(e, t, n), this.$$c) {
			let e = this.$$l_u.get(t);
			e && (e(), this.$$l_u.delete(t));
		}
	}
	async connectedCallback() {
		if (this.$$cn = !0, !this.$$c) {
			if (await Promise.resolve(), !this.$$cn || this.$$c) return;
			function e(e) {
				return (t) => {
					let n = Hn("slot");
					e !== "default" && (n.name = e), K(t, n);
				};
			}
			let t = {}, n = Qa(this);
			for (let r of this.$$s) r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
			for (let e of this.attributes) {
				let t = this.$$g_p(e.name);
				t in this.$$d || (this.$$d[t] = Za(t, e.value, this.$$p_d, "toProp"));
			}
			for (let e in this.$$p_d) !(e in this.$$d) && this[e] !== void 0 && (this.$$d[e] = this[e], delete this[e]);
			this.$$c = Ja({
				component: this.$$ctor,
				target: this.$$shadowRoot || this,
				props: {
					...this.$$d,
					$$slots: t,
					$$host: this
				}
			}), this.$$me = Qn(() => {
				nr(() => {
					this.$$r = !0;
					for (let e of v(this.$$c)) {
						if (!this.$$p_d[e]?.reflect) continue;
						this.$$d[e] = this.$$c[e];
						let t = Za(e, this.$$d[e], this.$$p_d, "toAttribute");
						t == null ? this.removeAttribute(this.$$p_d[e].attribute || e) : this.setAttribute(this.$$p_d[e].attribute || e, t);
					}
					this.$$r = !1;
				});
			});
			for (let e in this.$$l) for (let t of this.$$l[e]) {
				let n = this.$$c.$on(e, t);
				this.$$l_u.set(t, n);
			}
			this.$$l = {};
		}
	}
	attributeChangedCallback(e, t, n) {
		this.$$r || (e = this.$$g_p(e), this.$$d[e] = Za(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
	}
	disconnectedCallback() {
		this.$$cn = !1, Promise.resolve().then(() => {
			!this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
		});
	}
	$$g_p(e) {
		return v(this.$$p_d).find((t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e) || e;
	}
});
function Za(e, t, n, r) {
	let i = n[e]?.type;
	if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e]) return t;
	if (r === "toAttribute") switch (i) {
		case "Object":
		case "Array": return t == null ? null : JSON.stringify(t);
		case "Boolean": return t ? "" : null;
		case "Number": return t ?? null;
		default: return t;
	}
	else switch (i) {
		case "Object":
		case "Array": return t && JSON.parse(t);
		case "Boolean": return t;
		case "Number": return t == null ? t : +t;
		default: return t;
	}
}
function Qa(e) {
	let t = {};
	return e.childNodes.forEach((e) => {
		t[e.slot || "default"] = !0;
	}), t;
}
function Z(e, t, n, r, i, a) {
	let o = class extends Xa {
		constructor() {
			super(e, n, i), this.$$p_d = t;
		}
		static get observedAttributes() {
			return v(t).map((e) => (t[e].attribute || e).toLowerCase());
		}
	};
	return v(t).forEach((e) => {
		y(o.prototype, e, {
			get() {
				return this.$$c && e in this.$$c ? this.$$c[e] : this.$$d[e];
			},
			set(n) {
				n = Za(e, n, t), this.$$d[e] = n;
				var r = this.$$c;
				r && (b(r, e)?.get ? r[e] = n : r.$set({ [e]: n }));
			}
		});
	}), r.forEach((e) => {
		y(o.prototype, e, { get() {
			return this.$$c?.[e];
		} });
	}), a && (o = a(o)), e.element = o, o;
}
var $a = { value: () => {} };
function eo() {
	for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
		if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw Error("illegal type: " + r);
		n[r] = [];
	}
	return new to(n);
}
function to(e) {
	this._ = e;
}
function no(e, t) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var n = "", r = e.indexOf(".");
		if (r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), e && !t.hasOwnProperty(e)) throw Error("unknown type: " + e);
		return {
			type: e,
			name: n
		};
	});
}
to.prototype = eo.prototype = {
	constructor: to,
	on: function(e, t) {
		var n = this._, r = no(e + "", n), i, a = -1, o = r.length;
		if (arguments.length < 2) {
			for (; ++a < o;) if ((i = (e = r[a]).type) && (i = ro(n[i], e.name))) return i;
			return;
		}
		if (t != null && typeof t != "function") throw Error("invalid callback: " + t);
		for (; ++a < o;) if (i = (e = r[a]).type) n[i] = io(n[i], e.name, t);
		else if (t == null) for (i in n) n[i] = io(n[i], e.name, null);
		return this;
	},
	copy: function() {
		var e = {}, t = this._;
		for (var n in t) e[n] = t[n].slice();
		return new to(e);
	},
	call: function(e, t) {
		if ((i = arguments.length - 2) > 0) for (var n = Array(i), r = 0, i, a; r < i; ++r) n[r] = arguments[r + 2];
		if (!this._.hasOwnProperty(e)) throw Error("unknown type: " + e);
		for (a = this._[e], r = 0, i = a.length; r < i; ++r) a[r].value.apply(t, n);
	},
	apply: function(e, t, n) {
		if (!this._.hasOwnProperty(e)) throw Error("unknown type: " + e);
		for (var r = this._[e], i = 0, a = r.length; i < a; ++i) r[i].value.apply(t, n);
	}
};
function ro(e, t) {
	for (var n = 0, r = e.length, i; n < r; ++n) if ((i = e[n]).name === t) return i.value;
}
function io(e, t, n) {
	for (var r = 0, i = e.length; r < i; ++r) if (e[r].name === t) {
		e[r] = $a, e = e.slice(0, r).concat(e.slice(r + 1));
		break;
	}
	return n != null && e.push({
		name: t,
		value: n
	}), e;
}
var ao = {
	svg: "http://www.w3.org/2000/svg",
	xhtml: "http://www.w3.org/1999/xhtml",
	xlink: "http://www.w3.org/1999/xlink",
	xml: "http://www.w3.org/XML/1998/namespace",
	xmlns: "http://www.w3.org/2000/xmlns/"
};
function oo(e) {
	var t = e += "", n = t.indexOf(":");
	return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), ao.hasOwnProperty(t) ? {
		space: ao[t],
		local: e
	} : e;
}
function so(e) {
	return function() {
		var t = this.ownerDocument, n = this.namespaceURI;
		return n === "http://www.w3.org/1999/xhtml" && t.documentElement.namespaceURI === "http://www.w3.org/1999/xhtml" ? t.createElement(e) : t.createElementNS(n, e);
	};
}
function co(e) {
	return function() {
		return this.ownerDocument.createElementNS(e.space, e.local);
	};
}
function lo(e) {
	var t = oo(e);
	return (t.local ? co : so)(t);
}
function uo() {}
function fo(e) {
	return e == null ? uo : function() {
		return this.querySelector(e);
	};
}
function po(e) {
	typeof e != "function" && (e = fo(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = Array(o), c, l, u = 0; u < o; ++u) (c = a[u]) && (l = e.call(c, c.__data__, u, a)) && ("__data__" in c && (l.__data__ = c.__data__), s[u] = l);
	return new tc(r, this._parents);
}
function mo(e) {
	return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function ho() {
	return [];
}
function go(e) {
	return e == null ? ho : function() {
		return this.querySelectorAll(e);
	};
}
function _o(e) {
	return function() {
		return mo(e.apply(this, arguments));
	};
}
function vo(e) {
	e = typeof e == "function" ? _o(e) : go(e);
	for (var t = this._groups, n = t.length, r = [], i = [], a = 0; a < n; ++a) for (var o = t[a], s = o.length, c, l = 0; l < s; ++l) (c = o[l]) && (r.push(e.call(c, c.__data__, l, o)), i.push(c));
	return new tc(r, i);
}
function yo(e) {
	return function() {
		return this.matches(e);
	};
}
function bo(e) {
	return function(t) {
		return t.matches(e);
	};
}
var xo = Array.prototype.find;
function So(e) {
	return function() {
		return xo.call(this.children, e);
	};
}
function Co() {
	return this.firstElementChild;
}
function wo(e) {
	return this.select(e == null ? Co : So(typeof e == "function" ? e : bo(e)));
}
var To = Array.prototype.filter;
function Eo() {
	return Array.from(this.children);
}
function Do(e) {
	return function() {
		return To.call(this.children, e);
	};
}
function Oo(e) {
	return this.selectAll(e == null ? Eo : Do(typeof e == "function" ? e : bo(e)));
}
function ko(e) {
	typeof e != "function" && (e = yo(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = [], c, l = 0; l < o; ++l) (c = a[l]) && e.call(c, c.__data__, l, a) && s.push(c);
	return new tc(r, this._parents);
}
function Ao(e) {
	return Array(e.length);
}
function jo() {
	return new tc(this._enter || this._groups.map(Ao), this._parents);
}
function Mo(e, t) {
	this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Mo.prototype = {
	constructor: Mo,
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
function No(e) {
	return function() {
		return e;
	};
}
function Po(e, t, n, r, i, a) {
	for (var o = 0, s, c = t.length, l = a.length; o < l; ++o) (s = t[o]) ? (s.__data__ = a[o], r[o] = s) : n[o] = new Mo(e, a[o]);
	for (; o < c; ++o) (s = t[o]) && (i[o] = s);
}
function Fo(e, t, n, r, i, a, o) {
	var s, c, l = /* @__PURE__ */ new Map(), u = t.length, d = a.length, f = Array(u), p;
	for (s = 0; s < u; ++s) (c = t[s]) && (f[s] = p = o.call(c, c.__data__, s, t) + "", l.has(p) ? i[s] = c : l.set(p, c));
	for (s = 0; s < d; ++s) p = o.call(e, a[s], s, a) + "", (c = l.get(p)) ? (r[s] = c, c.__data__ = a[s], l.delete(p)) : n[s] = new Mo(e, a[s]);
	for (s = 0; s < u; ++s) (c = t[s]) && l.get(f[s]) === c && (i[s] = c);
}
function Io(e) {
	return e.__data__;
}
function Lo(e, t) {
	if (!arguments.length) return Array.from(this, Io);
	var n = t ? Fo : Po, r = this._parents, i = this._groups;
	typeof e != "function" && (e = No(e));
	for (var a = i.length, o = Array(a), s = Array(a), c = Array(a), l = 0; l < a; ++l) {
		var u = r[l], d = i[l], f = d.length, p = Ro(e.call(u, u && u.__data__, l, r)), m = p.length, h = s[l] = Array(m), g = o[l] = Array(m);
		n(u, d, h, g, c[l] = Array(f), p, t);
		for (var _ = 0, v = 0, y, b; _ < m; ++_) if (y = h[_]) {
			for (_ >= v && (v = _ + 1); !(b = g[v]) && ++v < m;);
			y._next = b || null;
		}
	}
	return o = new tc(o, r), o._enter = s, o._exit = c, o;
}
function Ro(e) {
	return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function zo() {
	return new tc(this._exit || this._groups.map(Ao), this._parents);
}
function Bo(e, t, n) {
	var r = this.enter(), i = this, a = this.exit();
	return typeof e == "function" ? (r = e(r), r &&= r.selection()) : r = r.append(e + ""), t != null && (i = t(i), i &&= i.selection()), n == null ? a.remove() : n(a), r && i ? r.merge(i).order() : i;
}
function Vo(e) {
	for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, i = n.length, a = r.length, o = Math.min(i, a), s = Array(i), c = 0; c < o; ++c) for (var l = n[c], u = r[c], d = l.length, f = s[c] = Array(d), p, m = 0; m < d; ++m) (p = l[m] || u[m]) && (f[m] = p);
	for (; c < i; ++c) s[c] = n[c];
	return new tc(s, this._parents);
}
function Ho() {
	for (var e = this._groups, t = -1, n = e.length; ++t < n;) for (var r = e[t], i = r.length - 1, a = r[i], o; --i >= 0;) (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
	return this;
}
function Uo(e) {
	e ||= Wo;
	function t(t, n) {
		return t && n ? e(t.__data__, n.__data__) : !t - !n;
	}
	for (var n = this._groups, r = n.length, i = Array(r), a = 0; a < r; ++a) {
		for (var o = n[a], s = o.length, c = i[a] = Array(s), l, u = 0; u < s; ++u) (l = o[u]) && (c[u] = l);
		c.sort(t);
	}
	return new tc(i, this._parents).order();
}
function Wo(e, t) {
	return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Go() {
	var e = arguments[0];
	return arguments[0] = this, e.apply(null, arguments), this;
}
function Ko() {
	return Array.from(this);
}
function qo() {
	for (var e = this._groups, t = 0, n = e.length; t < n; ++t) for (var r = e[t], i = 0, a = r.length; i < a; ++i) {
		var o = r[i];
		if (o) return o;
	}
	return null;
}
function Jo() {
	let e = 0;
	for (let t of this) ++e;
	return e;
}
function Yo() {
	return !this.node();
}
function Xo(e) {
	for (var t = this._groups, n = 0, r = t.length; n < r; ++n) for (var i = t[n], a = 0, o = i.length, s; a < o; ++a) (s = i[a]) && e.call(s, s.__data__, a, i);
	return this;
}
function Zo(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function Qo(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function $o(e, t) {
	return function() {
		this.setAttribute(e, t);
	};
}
function es(e, t) {
	return function() {
		this.setAttributeNS(e.space, e.local, t);
	};
}
function ts(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
	};
}
function ns(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
	};
}
function rs(e, t) {
	var n = oo(e);
	if (arguments.length < 2) {
		var r = this.node();
		return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
	}
	return this.each((t == null ? n.local ? Qo : Zo : typeof t == "function" ? n.local ? ns : ts : n.local ? es : $o)(n, t));
}
function is(e) {
	return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function as(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function os(e, t, n) {
	return function() {
		this.style.setProperty(e, t, n);
	};
}
function ss(e, t, n) {
	return function() {
		var r = t.apply(this, arguments);
		r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
	};
}
function cs(e, t, n) {
	return arguments.length > 1 ? this.each((t == null ? as : typeof t == "function" ? ss : os)(e, t, n ?? "")) : ls(this.node(), e);
}
function ls(e, t) {
	return e.style.getPropertyValue(t) || is(e).getComputedStyle(e, null).getPropertyValue(t);
}
function us(e) {
	return function() {
		delete this[e];
	};
}
function ds(e, t) {
	return function() {
		this[e] = t;
	};
}
function fs(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? delete this[e] : this[e] = n;
	};
}
function ps(e, t) {
	return arguments.length > 1 ? this.each((t == null ? us : typeof t == "function" ? fs : ds)(e, t)) : this.node()[e];
}
function ms(e) {
	return e.trim().split(/^|\s+/);
}
function hs(e) {
	return e.classList || new gs(e);
}
function gs(e) {
	this._node = e, this._names = ms(e.getAttribute("class") || "");
}
gs.prototype = {
	add: function(e) {
		this._names.indexOf(e) < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
	},
	remove: function(e) {
		var t = this._names.indexOf(e);
		t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
	},
	contains: function(e) {
		return this._names.indexOf(e) >= 0;
	}
};
function _s(e, t) {
	for (var n = hs(e), r = -1, i = t.length; ++r < i;) n.add(t[r]);
}
function vs(e, t) {
	for (var n = hs(e), r = -1, i = t.length; ++r < i;) n.remove(t[r]);
}
function ys(e) {
	return function() {
		_s(this, e);
	};
}
function bs(e) {
	return function() {
		vs(this, e);
	};
}
function xs(e, t) {
	return function() {
		(t.apply(this, arguments) ? _s : vs)(this, e);
	};
}
function Ss(e, t) {
	var n = ms(e + "");
	if (arguments.length < 2) {
		for (var r = hs(this.node()), i = -1, a = n.length; ++i < a;) if (!r.contains(n[i])) return !1;
		return !0;
	}
	return this.each((typeof t == "function" ? xs : t ? ys : bs)(n, t));
}
function Cs() {
	this.textContent = "";
}
function ws(e) {
	return function() {
		this.textContent = e;
	};
}
function Ts(e) {
	return function() {
		var t = e.apply(this, arguments);
		this.textContent = t ?? "";
	};
}
function Es(e) {
	return arguments.length ? this.each(e == null ? Cs : (typeof e == "function" ? Ts : ws)(e)) : this.node().textContent;
}
function Ds() {
	this.innerHTML = "";
}
function Os(e) {
	return function() {
		this.innerHTML = e;
	};
}
function ks(e) {
	return function() {
		var t = e.apply(this, arguments);
		this.innerHTML = t ?? "";
	};
}
function As(e) {
	return arguments.length ? this.each(e == null ? Ds : (typeof e == "function" ? ks : Os)(e)) : this.node().innerHTML;
}
function js() {
	this.nextSibling && this.parentNode.appendChild(this);
}
function Ms() {
	return this.each(js);
}
function Ns() {
	this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Ps() {
	return this.each(Ns);
}
function Fs(e) {
	var t = typeof e == "function" ? e : lo(e);
	return this.select(function() {
		return this.appendChild(t.apply(this, arguments));
	});
}
function Is() {
	return null;
}
function Ls(e, t) {
	var n = typeof e == "function" ? e : lo(e), r = t == null ? Is : typeof t == "function" ? t : fo(t);
	return this.select(function() {
		return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
	});
}
function Rs() {
	var e = this.parentNode;
	e && e.removeChild(this);
}
function zs() {
	return this.each(Rs);
}
function Bs() {
	var e = this.cloneNode(!1), t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Vs() {
	var e = this.cloneNode(!0), t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Hs(e) {
	return this.select(e ? Vs : Bs);
}
function Us(e) {
	return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Ws(e) {
	return function(t) {
		e.call(this, t, this.__data__);
	};
}
function Gs(e) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var t = "", n = e.indexOf(".");
		return n >= 0 && (t = e.slice(n + 1), e = e.slice(0, n)), {
			type: e,
			name: t
		};
	});
}
function Ks(e) {
	return function() {
		var t = this.__on;
		if (t) {
			for (var n = 0, r = -1, i = t.length, a; n < i; ++n) a = t[n], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++r] = a;
			++r ? t.length = r : delete this.__on;
		}
	};
}
function qs(e, t, n) {
	return function() {
		var r = this.__on, i, a = Ws(t);
		if (r) {
			for (var o = 0, s = r.length; o < s; ++o) if ((i = r[o]).type === e.type && i.name === e.name) {
				this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = n), i.value = t;
				return;
			}
		}
		this.addEventListener(e.type, a, n), i = {
			type: e.type,
			name: e.name,
			value: t,
			listener: a,
			options: n
		}, r ? r.push(i) : this.__on = [i];
	};
}
function Js(e, t, n) {
	var r = Gs(e + ""), i, a = r.length, o;
	if (arguments.length < 2) {
		var s = this.node().__on;
		if (s) {
			for (var c = 0, l = s.length, u; c < l; ++c) for (i = 0, u = s[c]; i < a; ++i) if ((o = r[i]).type === u.type && o.name === u.name) return u.value;
		}
		return;
	}
	for (s = t ? qs : Ks, i = 0; i < a; ++i) this.each(s(r[i], t, n));
	return this;
}
function Ys(e, t, n) {
	var r = is(e), i = r.CustomEvent;
	typeof i == "function" ? i = new i(t, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function Xs(e, t) {
	return function() {
		return Ys(this, e, t);
	};
}
function Zs(e, t) {
	return function() {
		return Ys(this, e, t.apply(this, arguments));
	};
}
function Qs(e, t) {
	return this.each((typeof t == "function" ? Zs : Xs)(e, t));
}
function* $s() {
	for (var e = this._groups, t = 0, n = e.length; t < n; ++t) for (var r = e[t], i = 0, a = r.length, o; i < a; ++i) (o = r[i]) && (yield o);
}
var ec = [null];
function tc(e, t) {
	this._groups = e, this._parents = t;
}
function nc() {
	return new tc([[document.documentElement]], ec);
}
function rc() {
	return this;
}
tc.prototype = nc.prototype = {
	constructor: tc,
	select: po,
	selectAll: vo,
	selectChild: wo,
	selectChildren: Oo,
	filter: ko,
	data: Lo,
	enter: jo,
	exit: zo,
	join: Bo,
	merge: Vo,
	selection: rc,
	order: Ho,
	sort: Uo,
	call: Go,
	nodes: Ko,
	node: qo,
	size: Jo,
	empty: Yo,
	each: Xo,
	attr: rs,
	style: cs,
	property: ps,
	classed: Ss,
	text: Es,
	html: As,
	raise: Ms,
	lower: Ps,
	append: Fs,
	insert: Ls,
	remove: zs,
	clone: Hs,
	datum: Us,
	on: Js,
	dispatch: Qs,
	[Symbol.iterator]: $s
};
function ic(e) {
	return typeof e == "string" ? new tc([[document.querySelector(e)]], [document.documentElement]) : new tc([[e]], ec);
}
function ac(e) {
	let t;
	for (; t = e.sourceEvent;) e = t;
	return e;
}
function oc(e, t) {
	if (e = ac(e), t === void 0 && (t = e.currentTarget), t) {
		var n = t.ownerSVGElement || t;
		if (n.createSVGPoint) {
			var r = n.createSVGPoint();
			return r.x = e.clientX, r.y = e.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y];
		}
		if (t.getBoundingClientRect) {
			var i = t.getBoundingClientRect();
			return [e.clientX - i.left - t.clientLeft, e.clientY - i.top - t.clientTop];
		}
	}
	return [e.pageX, e.pageY];
}
var sc = { passive: !1 }, cc = {
	capture: !0,
	passive: !1
};
function lc(e) {
	e.stopImmediatePropagation();
}
function uc(e) {
	e.preventDefault(), e.stopImmediatePropagation();
}
function dc(e) {
	var t = e.document.documentElement, n = ic(e).on("dragstart.drag", uc, cc);
	"onselectstart" in t ? n.on("selectstart.drag", uc, cc) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function fc(e, t) {
	var n = e.document.documentElement, r = ic(e).on("dragstart.drag", null);
	t && (r.on("click.drag", uc, cc), setTimeout(function() {
		r.on("click.drag", null);
	}, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
var pc = (e) => () => e;
function mc(e, { sourceEvent: t, subject: n, target: r, identifier: i, active: a, x: o, y: s, dx: c, dy: l, dispatch: u }) {
	Object.defineProperties(this, {
		type: {
			value: e,
			enumerable: !0,
			configurable: !0
		},
		sourceEvent: {
			value: t,
			enumerable: !0,
			configurable: !0
		},
		subject: {
			value: n,
			enumerable: !0,
			configurable: !0
		},
		target: {
			value: r,
			enumerable: !0,
			configurable: !0
		},
		identifier: {
			value: i,
			enumerable: !0,
			configurable: !0
		},
		active: {
			value: a,
			enumerable: !0,
			configurable: !0
		},
		x: {
			value: o,
			enumerable: !0,
			configurable: !0
		},
		y: {
			value: s,
			enumerable: !0,
			configurable: !0
		},
		dx: {
			value: c,
			enumerable: !0,
			configurable: !0
		},
		dy: {
			value: l,
			enumerable: !0,
			configurable: !0
		},
		_: { value: u }
	});
}
mc.prototype.on = function() {
	var e = this._.on.apply(this._, arguments);
	return e === this._ ? this : e;
};
function hc(e) {
	return !e.ctrlKey && !e.button;
}
function gc() {
	return this.parentNode;
}
function _c(e, t) {
	return t ?? {
		x: e.x,
		y: e.y
	};
}
function vc() {
	return navigator.maxTouchPoints || "ontouchstart" in this;
}
function yc() {
	var e = hc, t = gc, n = _c, r = vc, i = {}, a = eo("start", "drag", "end"), o = 0, s, c, l, u, d = 0;
	function f(e) {
		e.on("mousedown.drag", p).filter(r).on("touchstart.drag", g).on("touchmove.drag", _, sc).on("touchend.drag touchcancel.drag", v).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
	}
	function p(n, r) {
		if (!(u || !e.call(this, n, r))) {
			var i = y(this, t.call(this, n, r), n, r, "mouse");
			i && (ic(n.view).on("mousemove.drag", m, cc).on("mouseup.drag", h, cc), dc(n.view), lc(n), l = !1, s = n.clientX, c = n.clientY, i("start", n));
		}
	}
	function m(e) {
		if (uc(e), !l) {
			var t = e.clientX - s, n = e.clientY - c;
			l = t * t + n * n > d;
		}
		i.mouse("drag", e);
	}
	function h(e) {
		ic(e.view).on("mousemove.drag mouseup.drag", null), fc(e.view, l), uc(e), i.mouse("end", e);
	}
	function g(n, r) {
		if (e.call(this, n, r)) {
			var i = n.changedTouches, a = t.call(this, n, r), o = i.length, s, c;
			for (s = 0; s < o; ++s) (c = y(this, a, n, r, i[s].identifier, i[s])) && (lc(n), c("start", n, i[s]));
		}
	}
	function _(e) {
		var t = e.changedTouches, n = t.length, r, a;
		for (r = 0; r < n; ++r) (a = i[t[r].identifier]) && (uc(e), a("drag", e, t[r]));
	}
	function v(e) {
		var t = e.changedTouches, n = t.length, r, a;
		for (u && clearTimeout(u), u = setTimeout(function() {
			u = null;
		}, 500), r = 0; r < n; ++r) (a = i[t[r].identifier]) && (lc(e), a("end", e, t[r]));
	}
	function y(e, t, r, s, c, l) {
		var u = a.copy(), d = oc(l || r, t), p, m, h;
		if ((h = n.call(e, new mc("beforestart", {
			sourceEvent: r,
			target: f,
			identifier: c,
			active: o,
			x: d[0],
			y: d[1],
			dx: 0,
			dy: 0,
			dispatch: u
		}), s)) != null) return p = h.x - d[0] || 0, m = h.y - d[1] || 0, function n(r, a, l) {
			var g = d, _;
			switch (r) {
				case "start":
					i[c] = n, _ = o++;
					break;
				case "end": delete i[c], --o;
				case "drag":
					d = oc(l || a, t), _ = o;
					break;
			}
			u.call(r, e, new mc(r, {
				sourceEvent: a,
				subject: h,
				target: f,
				identifier: c,
				active: _,
				x: d[0] + p,
				y: d[1] + m,
				dx: d[0] - g[0],
				dy: d[1] - g[1],
				dispatch: u
			}), s);
		};
	}
	return f.filter = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : pc(!!t), f) : e;
	}, f.container = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : pc(e), f) : t;
	}, f.subject = function(e) {
		return arguments.length ? (n = typeof e == "function" ? e : pc(e), f) : n;
	}, f.touchable = function(e) {
		return arguments.length ? (r = typeof e == "function" ? e : pc(!!e), f) : r;
	}, f.on = function() {
		var e = a.on.apply(a, arguments);
		return e === a ? f : e;
	}, f.clickDistance = function(e) {
		return arguments.length ? (d = (e = +e) * e, f) : Math.sqrt(d);
	}, f;
}
function bc(e, t, n) {
	e.prototype = t.prototype = n, n.constructor = e;
}
function xc(e, t) {
	var n = Object.create(e.prototype);
	for (var r in t) n[r] = t[r];
	return n;
}
function Sc() {}
var Cc = .7, wc = 1 / Cc, Tc = "\\s*([+-]?\\d+)\\s*", Ec = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Dc = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Oc = /^#([0-9a-f]{3,8})$/, kc = RegExp(`^rgb\\(${Tc},${Tc},${Tc}\\)$`), Ac = RegExp(`^rgb\\(${Dc},${Dc},${Dc}\\)$`), jc = RegExp(`^rgba\\(${Tc},${Tc},${Tc},${Ec}\\)$`), Mc = RegExp(`^rgba\\(${Dc},${Dc},${Dc},${Ec}\\)$`), Nc = RegExp(`^hsl\\(${Ec},${Dc},${Dc}\\)$`), Pc = RegExp(`^hsla\\(${Ec},${Dc},${Dc},${Ec}\\)$`), Fc = {
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
bc(Sc, Bc, {
	copy(e) {
		return Object.assign(new this.constructor(), this, e);
	},
	displayable() {
		return this.rgb().displayable();
	},
	hex: Ic,
	formatHex: Ic,
	formatHex8: Lc,
	formatHsl: Rc,
	formatRgb: zc,
	toString: zc
});
function Ic() {
	return this.rgb().formatHex();
}
function Lc() {
	return this.rgb().formatHex8();
}
function Rc() {
	return $c(this).formatHsl();
}
function zc() {
	return this.rgb().formatRgb();
}
function Bc(e) {
	var t, n;
	return e = (e + "").trim().toLowerCase(), (t = Oc.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Vc(t) : n === 3 ? new Gc(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Hc(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Hc(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = kc.exec(e)) ? new Gc(t[1], t[2], t[3], 1) : (t = Ac.exec(e)) ? new Gc(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = jc.exec(e)) ? Hc(t[1], t[2], t[3], t[4]) : (t = Mc.exec(e)) ? Hc(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Nc.exec(e)) ? Qc(t[1], t[2] / 100, t[3] / 100, 1) : (t = Pc.exec(e)) ? Qc(t[1], t[2] / 100, t[3] / 100, t[4]) : Fc.hasOwnProperty(e) ? Vc(Fc[e]) : e === "transparent" ? new Gc(NaN, NaN, NaN, 0) : null;
}
function Vc(e) {
	return new Gc(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Hc(e, t, n, r) {
	return r <= 0 && (e = t = n = NaN), new Gc(e, t, n, r);
}
function Uc(e) {
	return e instanceof Sc || (e = Bc(e)), e ? (e = e.rgb(), new Gc(e.r, e.g, e.b, e.opacity)) : new Gc();
}
function Wc(e, t, n, r) {
	return arguments.length === 1 ? Uc(e) : new Gc(e, t, n, r ?? 1);
}
function Gc(e, t, n, r) {
	this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
bc(Gc, Wc, xc(Sc, {
	brighter(e) {
		return e = e == null ? wc : wc ** +e, new Gc(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? Cc : Cc ** +e, new Gc(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	rgb() {
		return this;
	},
	clamp() {
		return new Gc(Xc(this.r), Xc(this.g), Xc(this.b), Yc(this.opacity));
	},
	displayable() {
		return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
	},
	hex: Kc,
	formatHex: Kc,
	formatHex8: qc,
	formatRgb: Jc,
	toString: Jc
}));
function Kc() {
	return `#${Zc(this.r)}${Zc(this.g)}${Zc(this.b)}`;
}
function qc() {
	return `#${Zc(this.r)}${Zc(this.g)}${Zc(this.b)}${Zc((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Jc() {
	let e = Yc(this.opacity);
	return `${e === 1 ? "rgb(" : "rgba("}${Xc(this.r)}, ${Xc(this.g)}, ${Xc(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Yc(e) {
	return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Xc(e) {
	return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Zc(e) {
	return e = Xc(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Qc(e, t, n, r) {
	return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new tl(e, t, n, r);
}
function $c(e) {
	if (e instanceof tl) return new tl(e.h, e.s, e.l, e.opacity);
	if (e instanceof Sc || (e = Bc(e)), !e) return new tl();
	if (e instanceof tl) return e;
	e = e.rgb();
	var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.min(t, n, r), a = Math.max(t, n, r), o = NaN, s = a - i, c = (a + i) / 2;
	return s ? (o = t === a ? (n - r) / s + (n < r) * 6 : n === a ? (r - t) / s + 2 : (t - n) / s + 4, s /= c < .5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new tl(o, s, c, e.opacity);
}
function el(e, t, n, r) {
	return arguments.length === 1 ? $c(e) : new tl(e, t, n, r ?? 1);
}
function tl(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
bc(tl, el, xc(Sc, {
	brighter(e) {
		return e = e == null ? wc : wc ** +e, new tl(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? Cc : Cc ** +e, new tl(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < .5 ? n : 1 - n) * t, i = 2 * n - r;
		return new Gc(il(e >= 240 ? e - 240 : e + 120, i, r), il(e, i, r), il(e < 120 ? e + 240 : e - 120, i, r), this.opacity);
	},
	clamp() {
		return new tl(nl(this.h), rl(this.s), rl(this.l), Yc(this.opacity));
	},
	displayable() {
		return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
	},
	formatHsl() {
		let e = Yc(this.opacity);
		return `${e === 1 ? "hsl(" : "hsla("}${nl(this.h)}, ${rl(this.s) * 100}%, ${rl(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
	}
}));
function nl(e) {
	return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function rl(e) {
	return Math.max(0, Math.min(1, e || 0));
}
function il(e, t, n) {
	return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
var al = (e) => () => e;
function ol(e, t) {
	return function(n) {
		return e + n * t;
	};
}
function sl(e, t, n) {
	return e **= +n, t = t ** +n - e, n = 1 / n, function(r) {
		return (e + r * t) ** +n;
	};
}
function cl(e) {
	return (e = +e) == 1 ? ll : function(t, n) {
		return n - t ? sl(t, n, e) : al(isNaN(t) ? n : t);
	};
}
function ll(e, t) {
	var n = t - e;
	return n ? ol(e, n) : al(isNaN(e) ? t : e);
}
var ul = (function e(t) {
	var n = cl(t);
	function r(e, t) {
		var r = n((e = Wc(e)).r, (t = Wc(t)).r), i = n(e.g, t.g), a = n(e.b, t.b), o = ll(e.opacity, t.opacity);
		return function(t) {
			return e.r = r(t), e.g = i(t), e.b = a(t), e.opacity = o(t), e + "";
		};
	}
	return r.gamma = e, r;
})(1);
function dl(e, t) {
	t ||= [];
	var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), i;
	return function(a) {
		for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
		return r;
	};
}
function fl(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function pl(e, t) {
	var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, i = Array(r), a = Array(n), o;
	for (o = 0; o < r; ++o) i[o] = Sl(e[o], t[o]);
	for (; o < n; ++o) a[o] = t[o];
	return function(e) {
		for (o = 0; o < r; ++o) a[o] = i[o](e);
		return a;
	};
}
function ml(e, t) {
	var n = /* @__PURE__ */ new Date();
	return e = +e, t = +t, function(r) {
		return n.setTime(e * (1 - r) + t * r), n;
	};
}
function hl(e, t) {
	return e = +e, t = +t, function(n) {
		return e * (1 - n) + t * n;
	};
}
function gl(e, t) {
	var n = {}, r = {}, i;
	for (i in (typeof e != "object" || !e) && (e = {}), (typeof t != "object" || !t) && (t = {}), t) i in e ? n[i] = Sl(e[i], t[i]) : r[i] = t[i];
	return function(e) {
		for (i in n) r[i] = n[i](e);
		return r;
	};
}
var _l = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, vl = new RegExp(_l.source, "g");
function yl(e) {
	return function() {
		return e;
	};
}
function bl(e) {
	return function(t) {
		return e(t) + "";
	};
}
function xl(e, t) {
	var n = _l.lastIndex = vl.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
	for (e += "", t += ""; (r = _l.exec(e)) && (i = vl.exec(t));) (a = i.index) > n && (a = t.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({
		i: o,
		x: hl(r, i)
	})), n = vl.lastIndex;
	return n < t.length && (a = t.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? bl(c[0].x) : yl(t) : (t = c.length, function(e) {
		for (var n = 0, r; n < t; ++n) s[(r = c[n]).i] = r.x(e);
		return s.join("");
	});
}
function Sl(e, t) {
	var n = typeof t, r;
	return t == null || n === "boolean" ? al(t) : (n === "number" ? hl : n === "string" ? (r = Bc(t)) ? (t = r, ul) : xl : t instanceof Bc ? ul : t instanceof Date ? ml : fl(t) ? dl : Array.isArray(t) ? pl : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? gl : hl)(e, t);
}
var Cl = 180 / Math.PI, wl = {
	translateX: 0,
	translateY: 0,
	rotate: 0,
	skewX: 0,
	scaleX: 1,
	scaleY: 1
};
function Tl(e, t, n, r, i, a) {
	var o, s, c;
	return (o = Math.sqrt(e * e + t * t)) && (e /= o, t /= o), (c = e * n + t * r) && (n -= e * c, r -= t * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), e * r < t * n && (e = -e, t = -t, c = -c, o = -o), {
		translateX: i,
		translateY: a,
		rotate: Math.atan2(t, e) * Cl,
		skewX: Math.atan(c) * Cl,
		scaleX: o,
		scaleY: s
	};
}
var El;
function Dl(e) {
	let t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
	return t.isIdentity ? wl : Tl(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Ol(e) {
	return e == null || (El ||= document.createElementNS("http://www.w3.org/2000/svg", "g"), El.setAttribute("transform", e), !(e = El.transform.baseVal.consolidate())) ? wl : (e = e.matrix, Tl(e.a, e.b, e.c, e.d, e.e, e.f));
}
function kl(e, t, n, r) {
	function i(e) {
		return e.length ? e.pop() + " " : "";
	}
	function a(e, r, i, a, o, s) {
		if (e !== i || r !== a) {
			var c = o.push("translate(", null, t, null, n);
			s.push({
				i: c - 4,
				x: hl(e, i)
			}, {
				i: c - 2,
				x: hl(r, a)
			});
		} else (i || a) && o.push("translate(" + i + t + a + n);
	}
	function o(e, t, n, a) {
		e === t ? t && n.push(i(n) + "rotate(" + t + r) : (e - t > 180 ? t += 360 : t - e > 180 && (e += 360), a.push({
			i: n.push(i(n) + "rotate(", null, r) - 2,
			x: hl(e, t)
		}));
	}
	function s(e, t, n, a) {
		e === t ? t && n.push(i(n) + "skewX(" + t + r) : a.push({
			i: n.push(i(n) + "skewX(", null, r) - 2,
			x: hl(e, t)
		});
	}
	function c(e, t, n, r, a, o) {
		if (e !== n || t !== r) {
			var s = a.push(i(a) + "scale(", null, ",", null, ")");
			o.push({
				i: s - 4,
				x: hl(e, n)
			}, {
				i: s - 2,
				x: hl(t, r)
			});
		} else (n !== 1 || r !== 1) && a.push(i(a) + "scale(" + n + "," + r + ")");
	}
	return function(t, n) {
		var r = [], i = [];
		return t = e(t), n = e(n), a(t.translateX, t.translateY, n.translateX, n.translateY, r, i), o(t.rotate, n.rotate, r, i), s(t.skewX, n.skewX, r, i), c(t.scaleX, t.scaleY, n.scaleX, n.scaleY, r, i), t = n = null, function(e) {
			for (var t = -1, n = i.length, a; ++t < n;) r[(a = i[t]).i] = a.x(e);
			return r.join("");
		};
	};
}
var Al = kl(Dl, "px, ", "px)", "deg)"), jl = kl(Ol, ", ", ")", ")"), Ml = 1e-12;
function Nl(e) {
	return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Pl(e) {
	return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Fl(e) {
	return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
var Il = (function e(t, n, r) {
	function i(e, i) {
		var a = e[0], o = e[1], s = e[2], c = i[0], l = i[1], u = i[2], d = c - a, f = l - o, p = d * d + f * f, m, h;
		if (p < Ml) h = Math.log(u / s) / t, m = function(e) {
			return [
				a + e * d,
				o + e * f,
				s * Math.exp(t * e * h)
			];
		};
		else {
			var g = Math.sqrt(p), _ = (u * u - s * s + r * p) / (2 * s * n * g), v = (u * u - s * s - r * p) / (2 * u * n * g), y = Math.log(Math.sqrt(_ * _ + 1) - _);
			h = (Math.log(Math.sqrt(v * v + 1) - v) - y) / t, m = function(e) {
				var r = e * h, i = Nl(y), c = s / (n * g) * (i * Fl(t * r + y) - Pl(y));
				return [
					a + c * d,
					o + c * f,
					s * i / Nl(t * r + y)
				];
			};
		}
		return m.duration = h * 1e3 * t / Math.SQRT2, m;
	}
	return i.rho = function(t) {
		var n = Math.max(.001, +t), r = n * n;
		return e(n, r, r * r);
	}, i;
})(Math.SQRT2, 2, 4), Ll = 0, Rl = 0, zl = 0, Bl = 1e3, Vl, Hl, Ul = 0, Wl = 0, Gl = 0, Kl = typeof performance == "object" && performance.now ? performance : Date, ql = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
	setTimeout(e, 17);
};
function Jl() {
	return Wl ||= (ql(Yl), Kl.now() + Gl);
}
function Yl() {
	Wl = 0;
}
function Xl() {
	this._call = this._time = this._next = null;
}
Xl.prototype = Zl.prototype = {
	constructor: Xl,
	restart: function(e, t, n) {
		if (typeof e != "function") throw TypeError("callback is not a function");
		n = (n == null ? Jl() : +n) + (t == null ? 0 : +t), !this._next && Hl !== this && (Hl ? Hl._next = this : Vl = this, Hl = this), this._call = e, this._time = n, nu();
	},
	stop: function() {
		this._call && (this._call = null, this._time = Infinity, nu());
	}
};
function Zl(e, t, n) {
	var r = new Xl();
	return r.restart(e, t, n), r;
}
function Ql() {
	Jl(), ++Ll;
	for (var e = Vl, t; e;) (t = Wl - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
	--Ll;
}
function $l() {
	Wl = (Ul = Kl.now()) + Gl, Ll = Rl = 0;
	try {
		Ql();
	} finally {
		Ll = 0, tu(), Wl = 0;
	}
}
function eu() {
	var e = Kl.now(), t = e - Ul;
	t > Bl && (Gl -= t, Ul = e);
}
function tu() {
	for (var e, t = Vl, n, r = Infinity; t;) t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Vl = n);
	Hl = e, nu(r);
}
function nu(e) {
	Ll || (Rl &&= clearTimeout(Rl), e - Wl > 24 ? (e < Infinity && (Rl = setTimeout($l, e - Kl.now() - Gl)), zl &&= clearInterval(zl)) : (zl ||= (Ul = Kl.now(), setInterval(eu, Bl)), Ll = 1, ql($l)));
}
function ru(e, t, n) {
	var r = new Xl();
	return t = t == null ? 0 : +t, r.restart((n) => {
		r.stop(), e(n + t);
	}, t, n), r;
}
var iu = eo("start", "end", "cancel", "interrupt"), au = [];
function ou(e, t, n, r, i, a) {
	var o = e.__transition;
	if (!o) e.__transition = {};
	else if (n in o) return;
	uu(e, n, {
		name: t,
		index: r,
		group: i,
		on: iu,
		tween: au,
		time: a.time,
		delay: a.delay,
		duration: a.duration,
		ease: a.ease,
		timer: null,
		state: 0
	});
}
function su(e, t) {
	var n = lu(e, t);
	if (n.state > 0) throw Error("too late; already scheduled");
	return n;
}
function cu(e, t) {
	var n = lu(e, t);
	if (n.state > 3) throw Error("too late; already running");
	return n;
}
function lu(e, t) {
	var n = e.__transition;
	if (!n || !(n = n[t])) throw Error("transition not found");
	return n;
}
function uu(e, t, n) {
	var r = e.__transition, i;
	r[t] = n, n.timer = Zl(a, 0, n.time);
	function a(e) {
		n.state = 1, n.timer.restart(o, n.delay, n.time), n.delay <= e && o(e - n.delay);
	}
	function o(a) {
		var l, u, d, f;
		if (n.state !== 1) return c();
		for (l in r) if (f = r[l], f.name === n.name) {
			if (f.state === 3) return ru(o);
			f.state === 4 ? (f.state = 6, f.timer.stop(), f.on.call("interrupt", e, e.__data__, f.index, f.group), delete r[l]) : +l < t && (f.state = 6, f.timer.stop(), f.on.call("cancel", e, e.__data__, f.index, f.group), delete r[l]);
		}
		if (ru(function() {
			n.state === 3 && (n.state = 4, n.timer.restart(s, n.delay, n.time), s(a));
		}), n.state = 2, n.on.call("start", e, e.__data__, n.index, n.group), n.state === 2) {
			for (n.state = 3, i = Array(d = n.tween.length), l = 0, u = -1; l < d; ++l) (f = n.tween[l].value.call(e, e.__data__, n.index, n.group)) && (i[++u] = f);
			i.length = u + 1;
		}
	}
	function s(t) {
		for (var r = t < n.duration ? n.ease.call(null, t / n.duration) : (n.timer.restart(c), n.state = 5, 1), a = -1, o = i.length; ++a < o;) i[a].call(e, r);
		n.state === 5 && (n.on.call("end", e, e.__data__, n.index, n.group), c());
	}
	function c() {
		for (var i in n.state = 6, n.timer.stop(), delete r[t], r) return;
		delete e.__transition;
	}
}
function du(e, t) {
	var n = e.__transition, r, i, a = !0, o;
	if (n) {
		for (o in t = t == null ? null : t + "", n) {
			if ((r = n[o]).name !== t) {
				a = !1;
				continue;
			}
			i = r.state > 2 && r.state < 5, r.state = 6, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[o];
		}
		a && delete e.__transition;
	}
}
function fu(e) {
	return this.each(function() {
		du(this, e);
	});
}
function pu(e, t) {
	var n, r;
	return function() {
		var i = cu(this, e), a = i.tween;
		if (a !== n) {
			r = n = a;
			for (var o = 0, s = r.length; o < s; ++o) if (r[o].name === t) {
				r = r.slice(), r.splice(o, 1);
				break;
			}
		}
		i.tween = r;
	};
}
function mu(e, t, n) {
	var r, i;
	if (typeof n != "function") throw Error();
	return function() {
		var a = cu(this, e), o = a.tween;
		if (o !== r) {
			i = (r = o).slice();
			for (var s = {
				name: t,
				value: n
			}, c = 0, l = i.length; c < l; ++c) if (i[c].name === t) {
				i[c] = s;
				break;
			}
			c === l && i.push(s);
		}
		a.tween = i;
	};
}
function hu(e, t) {
	var n = this._id;
	if (e += "", arguments.length < 2) {
		for (var r = lu(this.node(), n).tween, i = 0, a = r.length, o; i < a; ++i) if ((o = r[i]).name === e) return o.value;
		return null;
	}
	return this.each((t == null ? pu : mu)(n, e, t));
}
function gu(e, t, n) {
	var r = e._id;
	return e.each(function() {
		var e = cu(this, r);
		(e.value ||= {})[t] = n.apply(this, arguments);
	}), function(e) {
		return lu(e, r).value[t];
	};
}
function _u(e, t) {
	var n;
	return (typeof t == "number" ? hl : t instanceof Bc ? ul : (n = Bc(t)) ? (t = n, ul) : xl)(e, t);
}
function vu(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function yu(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function bu(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = this.getAttribute(e);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function xu(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = this.getAttributeNS(e.space, e.local);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function Su(e, t, n) {
	var r, i, a;
	return function() {
		var o, s = n(this), c;
		return s == null ? void this.removeAttribute(e) : (o = this.getAttribute(e), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
	};
}
function Cu(e, t, n) {
	var r, i, a;
	return function() {
		var o, s = n(this), c;
		return s == null ? void this.removeAttributeNS(e.space, e.local) : (o = this.getAttributeNS(e.space, e.local), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
	};
}
function wu(e, t) {
	var n = oo(e), r = n === "transform" ? jl : _u;
	return this.attrTween(e, typeof t == "function" ? (n.local ? Cu : Su)(n, r, gu(this, "attr." + e, t)) : t == null ? (n.local ? yu : vu)(n) : (n.local ? xu : bu)(n, r, t));
}
function Tu(e, t) {
	return function(n) {
		this.setAttribute(e, t.call(this, n));
	};
}
function Eu(e, t) {
	return function(n) {
		this.setAttributeNS(e.space, e.local, t.call(this, n));
	};
}
function Du(e, t) {
	var n, r;
	function i() {
		var i = t.apply(this, arguments);
		return i !== r && (n = (r = i) && Eu(e, i)), n;
	}
	return i._value = t, i;
}
function Ou(e, t) {
	var n, r;
	function i() {
		var i = t.apply(this, arguments);
		return i !== r && (n = (r = i) && Tu(e, i)), n;
	}
	return i._value = t, i;
}
function ku(e, t) {
	var n = "attr." + e;
	if (arguments.length < 2) return (n = this.tween(n)) && n._value;
	if (t == null) return this.tween(n, null);
	if (typeof t != "function") throw Error();
	var r = oo(e);
	return this.tween(n, (r.local ? Du : Ou)(r, t));
}
function Au(e, t) {
	return function() {
		su(this, e).delay = +t.apply(this, arguments);
	};
}
function ju(e, t) {
	return t = +t, function() {
		su(this, e).delay = t;
	};
}
function Mu(e) {
	var t = this._id;
	return arguments.length ? this.each((typeof e == "function" ? Au : ju)(t, e)) : lu(this.node(), t).delay;
}
function Nu(e, t) {
	return function() {
		cu(this, e).duration = +t.apply(this, arguments);
	};
}
function Pu(e, t) {
	return t = +t, function() {
		cu(this, e).duration = t;
	};
}
function Fu(e) {
	var t = this._id;
	return arguments.length ? this.each((typeof e == "function" ? Nu : Pu)(t, e)) : lu(this.node(), t).duration;
}
function Iu(e, t) {
	if (typeof t != "function") throw Error();
	return function() {
		cu(this, e).ease = t;
	};
}
function Lu(e) {
	var t = this._id;
	return arguments.length ? this.each(Iu(t, e)) : lu(this.node(), t).ease;
}
function Ru(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		if (typeof n != "function") throw Error();
		cu(this, e).ease = n;
	};
}
function zu(e) {
	if (typeof e != "function") throw Error();
	return this.each(Ru(this._id, e));
}
function Bu(e) {
	typeof e != "function" && (e = yo(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = [], c, l = 0; l < o; ++l) (c = a[l]) && e.call(c, c.__data__, l, a) && s.push(c);
	return new hd(r, this._parents, this._name, this._id);
}
function Vu(e) {
	if (e._id !== this._id) throw Error();
	for (var t = this._groups, n = e._groups, r = t.length, i = n.length, a = Math.min(r, i), o = Array(r), s = 0; s < a; ++s) for (var c = t[s], l = n[s], u = c.length, d = o[s] = Array(u), f, p = 0; p < u; ++p) (f = c[p] || l[p]) && (d[p] = f);
	for (; s < r; ++s) o[s] = t[s];
	return new hd(o, this._parents, this._name, this._id);
}
function Hu(e) {
	return (e + "").trim().split(/^|\s+/).every(function(e) {
		var t = e.indexOf(".");
		return t >= 0 && (e = e.slice(0, t)), !e || e === "start";
	});
}
function Uu(e, t, n) {
	var r, i, a = Hu(t) ? su : cu;
	return function() {
		var o = a(this, e), s = o.on;
		s !== r && (i = (r = s).copy()).on(t, n), o.on = i;
	};
}
function Wu(e, t) {
	var n = this._id;
	return arguments.length < 2 ? lu(this.node(), n).on.on(e) : this.each(Uu(n, e, t));
}
function Gu(e) {
	return function() {
		var t = this.parentNode;
		for (var n in this.__transition) if (+n !== e) return;
		t && t.removeChild(this);
	};
}
function Ku() {
	return this.on("end.remove", Gu(this._id));
}
function qu(e) {
	var t = this._name, n = this._id;
	typeof e != "function" && (e = fo(e));
	for (var r = this._groups, i = r.length, a = Array(i), o = 0; o < i; ++o) for (var s = r[o], c = s.length, l = a[o] = Array(c), u, d, f = 0; f < c; ++f) (u = s[f]) && (d = e.call(u, u.__data__, f, s)) && ("__data__" in u && (d.__data__ = u.__data__), l[f] = d, ou(l[f], t, n, f, l, lu(u, n)));
	return new hd(a, this._parents, t, n);
}
function Ju(e) {
	var t = this._name, n = this._id;
	typeof e != "function" && (e = go(e));
	for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s) for (var c = r[s], l = c.length, u, d = 0; d < l; ++d) if (u = c[d]) {
		for (var f = e.call(u, u.__data__, d, c), p, m = lu(u, n), h = 0, g = f.length; h < g; ++h) (p = f[h]) && ou(p, t, n, h, f, m);
		a.push(f), o.push(u);
	}
	return new hd(a, o, t, n);
}
var Yu = nc.prototype.constructor;
function Xu() {
	return new Yu(this._groups, this._parents);
}
function Zu(e, t) {
	var n, r, i;
	return function() {
		var a = ls(this, e), o = (this.style.removeProperty(e), ls(this, e));
		return a === o ? null : a === n && o === r ? i : i = t(n = a, r = o);
	};
}
function Qu(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function $u(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = ls(this, e);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function ed(e, t, n) {
	var r, i, a;
	return function() {
		var o = ls(this, e), s = n(this), c = s + "";
		return s ?? (c = s = (this.style.removeProperty(e), ls(this, e))), o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s));
	};
}
function td(e, t) {
	var n, r, i, a = "style." + t, o = "end." + a, s;
	return function() {
		var c = cu(this, e), l = c.on, u = c.value[a] == null ? s ||= Qu(t) : void 0;
		(l !== n || i !== u) && (r = (n = l).copy()).on(o, i = u), c.on = r;
	};
}
function nd(e, t, n) {
	var r = (e += "") == "transform" ? Al : _u;
	return t == null ? this.styleTween(e, Zu(e, r)).on("end.style." + e, Qu(e)) : typeof t == "function" ? this.styleTween(e, ed(e, r, gu(this, "style." + e, t))).each(td(this._id, e)) : this.styleTween(e, $u(e, r, t), n).on("end.style." + e, null);
}
function rd(e, t, n) {
	return function(r) {
		this.style.setProperty(e, t.call(this, r), n);
	};
}
function id(e, t, n) {
	var r, i;
	function a() {
		var a = t.apply(this, arguments);
		return a !== i && (r = (i = a) && rd(e, a, n)), r;
	}
	return a._value = t, a;
}
function ad(e, t, n) {
	var r = "style." + (e += "");
	if (arguments.length < 2) return (r = this.tween(r)) && r._value;
	if (t == null) return this.tween(r, null);
	if (typeof t != "function") throw Error();
	return this.tween(r, id(e, t, n ?? ""));
}
function od(e) {
	return function() {
		this.textContent = e;
	};
}
function sd(e) {
	return function() {
		var t = e(this);
		this.textContent = t ?? "";
	};
}
function cd(e) {
	return this.tween("text", typeof e == "function" ? sd(gu(this, "text", e)) : od(e == null ? "" : e + ""));
}
function ld(e) {
	return function(t) {
		this.textContent = e.call(this, t);
	};
}
function ud(e) {
	var t, n;
	function r() {
		var r = e.apply(this, arguments);
		return r !== n && (t = (n = r) && ld(r)), t;
	}
	return r._value = e, r;
}
function dd(e) {
	var t = "text";
	if (arguments.length < 1) return (t = this.tween(t)) && t._value;
	if (e == null) return this.tween(t, null);
	if (typeof e != "function") throw Error();
	return this.tween(t, ud(e));
}
function fd() {
	for (var e = this._name, t = this._id, n = _d(), r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o = r[a], s = o.length, c, l = 0; l < s; ++l) if (c = o[l]) {
		var u = lu(c, t);
		ou(c, e, n, l, o, {
			time: u.time + u.delay + u.duration,
			delay: 0,
			duration: u.duration,
			ease: u.ease
		});
	}
	return new hd(r, this._parents, e, n);
}
function pd() {
	var e, t, n = this, r = n._id, i = n.size();
	return new Promise(function(a, o) {
		var s = { value: o }, c = { value: function() {
			--i === 0 && a();
		} };
		n.each(function() {
			var n = cu(this, r), i = n.on;
			i !== e && (t = (e = i).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(c)), n.on = t;
		}), i === 0 && a();
	});
}
var md = 0;
function hd(e, t, n, r) {
	this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function gd(e) {
	return nc().transition(e);
}
function _d() {
	return ++md;
}
var vd = nc.prototype;
hd.prototype = gd.prototype = {
	constructor: hd,
	select: qu,
	selectAll: Ju,
	selectChild: vd.selectChild,
	selectChildren: vd.selectChildren,
	filter: Bu,
	merge: Vu,
	selection: Xu,
	transition: fd,
	call: vd.call,
	nodes: vd.nodes,
	node: vd.node,
	size: vd.size,
	empty: vd.empty,
	each: vd.each,
	on: Wu,
	attr: wu,
	attrTween: ku,
	style: nd,
	styleTween: ad,
	text: cd,
	textTween: dd,
	remove: Ku,
	tween: hu,
	delay: Mu,
	duration: Fu,
	ease: Lu,
	easeVarying: zu,
	end: pd,
	[Symbol.iterator]: vd[Symbol.iterator]
};
function yd(e) {
	return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var bd = {
	time: null,
	delay: 0,
	duration: 250,
	ease: yd
};
function xd(e, t) {
	for (var n; !(n = e.__transition) || !(n = n[t]);) if (!(e = e.parentNode)) throw Error(`transition ${t} not found`);
	return n;
}
function Sd(e) {
	var t, n;
	e instanceof hd ? (t = e._id, e = e._name) : (t = _d(), (n = bd).time = Jl(), e = e == null ? null : e + "");
	for (var r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o = r[a], s = o.length, c, l = 0; l < s; ++l) (c = o[l]) && ou(c, e, t, l, o, n || xd(c, t));
	return new hd(r, this._parents, e, t);
}
nc.prototype.interrupt = fu, nc.prototype.transition = Sd;
var Cd = (e) => () => e;
function wd(e, { sourceEvent: t, target: n, transform: r, dispatch: i }) {
	Object.defineProperties(this, {
		type: {
			value: e,
			enumerable: !0,
			configurable: !0
		},
		sourceEvent: {
			value: t,
			enumerable: !0,
			configurable: !0
		},
		target: {
			value: n,
			enumerable: !0,
			configurable: !0
		},
		transform: {
			value: r,
			enumerable: !0,
			configurable: !0
		},
		_: { value: i }
	});
}
function Td(e, t, n) {
	this.k = e, this.x = t, this.y = n;
}
Td.prototype = {
	constructor: Td,
	scale: function(e) {
		return e === 1 ? this : new Td(this.k * e, this.x, this.y);
	},
	translate: function(e, t) {
		return e === 0 & t === 0 ? this : new Td(this.k, this.x + this.k * e, this.y + this.k * t);
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
var Ed = new Td(1, 0, 0);
Dd.prototype = Td.prototype;
function Dd(e) {
	for (; !e.__zoom;) if (!(e = e.parentNode)) return Ed;
	return e.__zoom;
}
function Od(e) {
	e.stopImmediatePropagation();
}
function kd(e) {
	e.preventDefault(), e.stopImmediatePropagation();
}
function Ad(e) {
	return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function jd() {
	var e = this;
	return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Md() {
	return this.__zoom || Ed;
}
function Nd(e) {
	return -e.deltaY * (e.deltaMode === 1 ? .05 : e.deltaMode ? 1 : .002) * (e.ctrlKey ? 10 : 1);
}
function Pd() {
	return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Fd(e, t, n) {
	var r = e.invertX(t[0][0]) - n[0][0], i = e.invertX(t[1][0]) - n[1][0], a = e.invertY(t[0][1]) - n[0][1], o = e.invertY(t[1][1]) - n[1][1];
	return e.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), o > a ? (a + o) / 2 : Math.min(0, a) || Math.max(0, o));
}
function Id() {
	var e = Ad, t = jd, n = Fd, r = Nd, i = Pd, a = [0, Infinity], o = [[-Infinity, -Infinity], [Infinity, Infinity]], s = 250, c = Il, l = eo("start", "zoom", "end"), u, d, f, p = 500, m = 150, h = 0, g = 10;
	function _(e) {
		e.property("__zoom", Md).on("wheel.zoom", w, { passive: !1 }).on("mousedown.zoom", T).on("dblclick.zoom", E).filter(i).on("touchstart.zoom", D).on("touchmove.zoom", ee).on("touchend.zoom touchcancel.zoom", te).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
	}
	_.transform = function(e, t, n, r) {
		var i = e.selection ? e.selection() : e;
		i.property("__zoom", Md), e === i ? i.interrupt().each(function() {
			S(this, arguments).event(r).start().zoom(null, typeof t == "function" ? t.apply(this, arguments) : t).end();
		}) : x(e, t, n, r);
	}, _.scaleBy = function(e, t, n, r) {
		_.scaleTo(e, function() {
			return this.__zoom.k * (typeof t == "function" ? t.apply(this, arguments) : t);
		}, n, r);
	}, _.scaleTo = function(e, r, i, a) {
		_.transform(e, function() {
			var e = t.apply(this, arguments), a = this.__zoom, s = i == null ? b(e) : typeof i == "function" ? i.apply(this, arguments) : i, c = a.invert(s), l = typeof r == "function" ? r.apply(this, arguments) : r;
			return n(y(v(a, l), s, c), e, o);
		}, i, a);
	}, _.translateBy = function(e, r, i, a) {
		_.transform(e, function() {
			return n(this.__zoom.translate(typeof r == "function" ? r.apply(this, arguments) : r, typeof i == "function" ? i.apply(this, arguments) : i), t.apply(this, arguments), o);
		}, null, a);
	}, _.translateTo = function(e, r, i, a, s) {
		_.transform(e, function() {
			var e = t.apply(this, arguments), s = this.__zoom, c = a == null ? b(e) : typeof a == "function" ? a.apply(this, arguments) : a;
			return n(Ed.translate(c[0], c[1]).scale(s.k).translate(typeof r == "function" ? -r.apply(this, arguments) : -r, typeof i == "function" ? -i.apply(this, arguments) : -i), e, o);
		}, a, s);
	};
	function v(e, t) {
		return t = Math.max(a[0], Math.min(a[1], t)), t === e.k ? e : new Td(t, e.x, e.y);
	}
	function y(e, t, n) {
		var r = t[0] - n[0] * e.k, i = t[1] - n[1] * e.k;
		return r === e.x && i === e.y ? e : new Td(e.k, r, i);
	}
	function b(e) {
		return [(+e[0][0] + +e[1][0]) / 2, (+e[0][1] + +e[1][1]) / 2];
	}
	function x(e, n, r, i) {
		e.on("start.zoom", function() {
			S(this, arguments).event(i).start();
		}).on("interrupt.zoom end.zoom", function() {
			S(this, arguments).event(i).end();
		}).tween("zoom", function() {
			var e = this, a = arguments, o = S(e, a).event(i), s = t.apply(e, a), l = r == null ? b(s) : typeof r == "function" ? r.apply(e, a) : r, u = Math.max(s[1][0] - s[0][0], s[1][1] - s[0][1]), d = e.__zoom, f = typeof n == "function" ? n.apply(e, a) : n, p = c(d.invert(l).concat(u / d.k), f.invert(l).concat(u / f.k));
			return function(e) {
				if (e === 1) e = f;
				else {
					var t = p(e), n = u / t[2];
					e = new Td(n, l[0] - t[0] * n, l[1] - t[1] * n);
				}
				o.zoom(null, e);
			};
		});
	}
	function S(e, t, n) {
		return !n && e.__zooming || new C(e, t);
	}
	function C(e, n) {
		this.that = e, this.args = n, this.active = 0, this.sourceEvent = null, this.extent = t.apply(e, n), this.taps = 0;
	}
	C.prototype = {
		event: function(e) {
			return e && (this.sourceEvent = e), this;
		},
		start: function() {
			return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
		},
		zoom: function(e, t) {
			return this.mouse && e !== "mouse" && (this.mouse[1] = t.invert(this.mouse[0])), this.touch0 && e !== "touch" && (this.touch0[1] = t.invert(this.touch0[0])), this.touch1 && e !== "touch" && (this.touch1[1] = t.invert(this.touch1[0])), this.that.__zoom = t, this.emit("zoom"), this;
		},
		end: function() {
			return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
		},
		emit: function(e) {
			var t = ic(this.that).datum();
			l.call(e, this.that, new wd(e, {
				sourceEvent: this.sourceEvent,
				target: _,
				type: e,
				transform: this.that.__zoom,
				dispatch: l
			}), t);
		}
	};
	function w(t, ...i) {
		if (!e.apply(this, arguments)) return;
		var s = S(this, i).event(t), c = this.__zoom, l = Math.max(a[0], Math.min(a[1], c.k * 2 ** r.apply(this, arguments))), u = oc(t);
		if (s.wheel) (s.mouse[0][0] !== u[0] || s.mouse[0][1] !== u[1]) && (s.mouse[1] = c.invert(s.mouse[0] = u)), clearTimeout(s.wheel);
		else if (c.k === l) return;
		else s.mouse = [u, c.invert(u)], du(this), s.start();
		kd(t), s.wheel = setTimeout(d, m), s.zoom("mouse", n(y(v(c, l), s.mouse[0], s.mouse[1]), s.extent, o));
		function d() {
			s.wheel = null, s.end();
		}
	}
	function T(t, ...r) {
		if (f || !e.apply(this, arguments)) return;
		var i = t.currentTarget, a = S(this, r, !0).event(t), s = ic(t.view).on("mousemove.zoom", d, !0).on("mouseup.zoom", p, !0), c = oc(t, i), l = t.clientX, u = t.clientY;
		dc(t.view), Od(t), a.mouse = [c, this.__zoom.invert(c)], du(this), a.start();
		function d(e) {
			if (kd(e), !a.moved) {
				var t = e.clientX - l, r = e.clientY - u;
				a.moved = t * t + r * r > h;
			}
			a.event(e).zoom("mouse", n(y(a.that.__zoom, a.mouse[0] = oc(e, i), a.mouse[1]), a.extent, o));
		}
		function p(e) {
			s.on("mousemove.zoom mouseup.zoom", null), fc(e.view, a.moved), kd(e), a.event(e).end();
		}
	}
	function E(r, ...i) {
		if (e.apply(this, arguments)) {
			var a = this.__zoom, c = oc(r.changedTouches ? r.changedTouches[0] : r, this), l = a.invert(c), u = a.k * (r.shiftKey ? .5 : 2), d = n(y(v(a, u), c, l), t.apply(this, i), o);
			kd(r), s > 0 ? ic(this).transition().duration(s).call(x, d, c, r) : ic(this).call(_.transform, d, c, r);
		}
	}
	function D(t, ...n) {
		if (e.apply(this, arguments)) {
			var r = t.touches, i = r.length, a = S(this, n, t.changedTouches.length === i).event(t), o, s, c, l;
			for (Od(t), s = 0; s < i; ++s) c = r[s], l = oc(c, this), l = [
				l,
				this.__zoom.invert(l),
				c.identifier
			], a.touch0 ? !a.touch1 && a.touch0[2] !== l[2] && (a.touch1 = l, a.taps = 0) : (a.touch0 = l, o = !0, a.taps = 1 + !!u);
			u &&= clearTimeout(u), o && (a.taps < 2 && (d = l[0], u = setTimeout(function() {
				u = null;
			}, p)), du(this), a.start());
		}
	}
	function ee(e, ...t) {
		if (this.__zooming) {
			var r = S(this, t).event(e), i = e.changedTouches, a = i.length, s, c, l, u;
			for (kd(e), s = 0; s < a; ++s) c = i[s], l = oc(c, this), r.touch0 && r.touch0[2] === c.identifier ? r.touch0[0] = l : r.touch1 && r.touch1[2] === c.identifier && (r.touch1[0] = l);
			if (c = r.that.__zoom, r.touch1) {
				var d = r.touch0[0], f = r.touch0[1], p = r.touch1[0], m = r.touch1[1], h = (h = p[0] - d[0]) * h + (h = p[1] - d[1]) * h, g = (g = m[0] - f[0]) * g + (g = m[1] - f[1]) * g;
				c = v(c, Math.sqrt(h / g)), l = [(d[0] + p[0]) / 2, (d[1] + p[1]) / 2], u = [(f[0] + m[0]) / 2, (f[1] + m[1]) / 2];
			} else if (r.touch0) l = r.touch0[0], u = r.touch0[1];
			else return;
			r.zoom("touch", n(y(c, l, u), r.extent, o));
		}
	}
	function te(e, ...t) {
		if (this.__zooming) {
			var n = S(this, t).event(e), r = e.changedTouches, i = r.length, a, o;
			for (Od(e), f && clearTimeout(f), f = setTimeout(function() {
				f = null;
			}, p), a = 0; a < i; ++a) o = r[a], n.touch0 && n.touch0[2] === o.identifier ? delete n.touch0 : n.touch1 && n.touch1[2] === o.identifier && delete n.touch1;
			if (n.touch1 && !n.touch0 && (n.touch0 = n.touch1, delete n.touch1), n.touch0) n.touch0[1] = this.__zoom.invert(n.touch0[0]);
			else if (n.end(), n.taps === 2 && (o = oc(o, this), Math.hypot(d[0] - o[0], d[1] - o[1]) < g)) {
				var s = ic(this).on("dblclick.zoom");
				s && s.apply(this, arguments);
			}
		}
	}
	return _.wheelDelta = function(e) {
		return arguments.length ? (r = typeof e == "function" ? e : Cd(+e), _) : r;
	}, _.filter = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : Cd(!!t), _) : e;
	}, _.touchable = function(e) {
		return arguments.length ? (i = typeof e == "function" ? e : Cd(!!e), _) : i;
	}, _.extent = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : Cd([[+e[0][0], +e[0][1]], [+e[1][0], +e[1][1]]]), _) : t;
	}, _.scaleExtent = function(e) {
		return arguments.length ? (a[0] = +e[0], a[1] = +e[1], _) : [a[0], a[1]];
	}, _.translateExtent = function(e) {
		return arguments.length ? (o[0][0] = +e[0][0], o[1][0] = +e[1][0], o[0][1] = +e[0][1], o[1][1] = +e[1][1], _) : [[o[0][0], o[0][1]], [o[1][0], o[1][1]]];
	}, _.constrain = function(e) {
		return arguments.length ? (n = e, _) : n;
	}, _.duration = function(e) {
		return arguments.length ? (s = +e, _) : s;
	}, _.interpolate = function(e) {
		return arguments.length ? (c = e, _) : c;
	}, _.on = function() {
		var e = l.on.apply(l, arguments);
		return e === l ? _ : e;
	}, _.clickDistance = function(e) {
		return arguments.length ? (h = (e = +e) * e, _) : Math.sqrt(h);
	}, _.tapDistance = function(e) {
		return arguments.length ? (g = +e, _) : g;
	}, _;
}
var Ld = {
	error001: (e = "react") => `Seems like you have not used ${e === "svelte" ? "SvelteFlowProvider" : "ReactFlowProvider"} as an ancestor. Help: https://${e}flow.dev/error#001`,
	error002: () => "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
	error003: (e) => `Node type "${e}" not found. Using fallback type "default".`,
	error004: () => "The parent container needs a width and a height to render the graph.",
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
	error015: () => "It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",
	error016: (e) => `Edge with id "${e}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`
}, Rd = [[-Infinity, -Infinity], [Infinity, Infinity]], zd = [
	"Enter",
	" ",
	"Escape"
], Bd = {
	"node.a11yDescription.default": "Press enter or space to select a node. Press delete to remove it and escape to cancel.",
	"node.a11yDescription.keyboardDisabled": "Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.",
	"node.a11yDescription.ariaLiveMessage": ({ direction: e, x: t, y: n }) => `Moved selected node ${e}. New position, x: ${t}, y: ${n}`,
	"edge.a11yDescription.default": "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.",
	"controls.ariaLabel": "Control Panel",
	"controls.zoomIn.ariaLabel": "Zoom In",
	"controls.zoomOut.ariaLabel": "Zoom Out",
	"controls.fitView.ariaLabel": "Fit View",
	"controls.interactive.ariaLabel": "Toggle Interactivity",
	"minimap.ariaLabel": "Mini Map",
	"handle.ariaLabel": "Handle"
}, Vd;
(function(e) {
	e.Strict = "strict", e.Loose = "loose";
})(Vd ||= {});
var Hd;
(function(e) {
	e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(Hd ||= {});
var Ud;
(function(e) {
	e.Partial = "partial", e.Full = "full";
})(Ud ||= {});
var Wd = {
	inProgress: !1,
	isValid: null,
	from: null,
	fromHandle: null,
	fromPosition: null,
	fromNode: null,
	to: null,
	toHandle: null,
	toPosition: null,
	toNode: null,
	pointer: null
}, Gd;
(function(e) {
	e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Gd ||= {});
var Kd;
(function(e) {
	e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(Kd ||= {});
var Q;
(function(e) {
	e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(Q ||= {});
var qd = {
	[Q.Left]: Q.Right,
	[Q.Right]: Q.Left,
	[Q.Top]: Q.Bottom,
	[Q.Bottom]: Q.Top
};
function Jd(e, t) {
	if (!e && !t) return !0;
	if (!e || !t || e.size !== t.size) return !1;
	if (!e.size && !t.size) return !0;
	for (let n of e.keys()) if (!t.has(n)) return !1;
	return !0;
}
function Yd(e, t, n) {
	if (!n) return;
	let r = [];
	e.forEach((e, n) => {
		t?.has(n) || r.push(e);
	}), r.length && n(r);
}
function Xd(e) {
	return e === null ? null : e ? "valid" : "invalid";
}
var Zd = (e) => !!e && typeof e == "object" && "id" in e && "source" in e && "target" in e, Qd = (e) => !!e && typeof e == "object" && "id" in e && "position" in e && !("source" in e) && !("target" in e), $d = (e) => !!e && typeof e == "object" && "id" in e && "internals" in e && !("source" in e) && !("target" in e), ef = (e, t = [0, 0]) => {
	let { width: n, height: r } = Ff(e), i = e.origin ?? t, a = n * i[0], o = r * i[1];
	return {
		x: e.position.x - a,
		y: e.position.y - o
	};
}, tf = (e, t = { nodeOrigin: [0, 0] }) => e.length === 0 ? {
	x: 0,
	y: 0,
	width: 0,
	height: 0
} : _f(e.reduce((e, n) => {
	let r = typeof n == "string", i = !t.nodeLookup && !r ? n : void 0;
	return t.nodeLookup && (i = r ? t.nodeLookup.get(n) : $d(n) ? n : t.nodeLookup.get(n.id)), hf(e, i ? yf(i, t.nodeOrigin) : {
		x: 0,
		y: 0,
		x2: 0,
		y2: 0
	});
}, {
	x: Infinity,
	y: Infinity,
	x2: -Infinity,
	y2: -Infinity
})), nf = (e, t = {}) => {
	let n = {
		x: Infinity,
		y: Infinity,
		x2: -Infinity,
		y2: -Infinity
	}, r = !1;
	return e.forEach((e) => {
		(t.filter === void 0 || t.filter(e)) && (n = hf(n, yf(e)), r = !0);
	}), r ? _f(n) : {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
}, rf = (e, t, [n, r, i] = [
	0,
	0,
	1
], a = !1, o = !1) => {
	let s = (t.x - n) / i, c = (t.y - r) / i, l = t.width / i, u = t.height / i, d = [];
	for (let t of e.values()) {
		let { measured: e, selectable: n = !0, hidden: r = !1 } = t;
		if (o && !n || r) continue;
		let i = e.width ?? t.width ?? t.initialWidth ?? 0, f = e.height ?? t.height ?? t.initialHeight ?? 0, { x: p, y: m } = t.internals.positionAbsolute, h = xf(s, c, l, u, p, m, i, f), g = i * f, _ = a && h > 0;
		(!t.internals.handleBounds || _ || h >= g || t.dragging) && d.push(t);
	}
	return d;
}, af = (e, t) => {
	let n = /* @__PURE__ */ new Set();
	return e.forEach((e) => {
		n.add(e.id);
	}), t.filter((e) => n.has(e.source) || n.has(e.target));
};
function of(e, t) {
	let n = /* @__PURE__ */ new Map(), r = t?.nodes ? new Set(t.nodes.map((e) => e.id)) : null;
	return e.forEach((e) => {
		let i;
		if (t?.includeHiddenNodes) {
			let { width: t, height: n } = Ff(e);
			i = t > 0 && n > 0;
		} else i = !!(e.measured.width && e.measured.height && !e.hidden);
		i && (!r || r.has(e.id)) && n.set(e.id, e);
	}), n;
}
async function sf({ nodes: e, width: t, height: n, panZoom: r, minZoom: i, maxZoom: a }, o) {
	if (e.size === 0) return !0;
	let s = Mf(nf(of(e, o)), t, n, o?.minZoom ?? i, o?.maxZoom ?? a, o?.padding ?? .1);
	return await r.setViewport(s, {
		duration: o?.duration,
		ease: o?.ease,
		interpolate: o?.interpolate
	}), !0;
}
function cf({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: i, onError: a }) {
	let o = n.get(e), s = o.parentId ? n.get(o.parentId) : void 0, { x: c, y: l } = s ? s.internals.positionAbsolute : {
		x: 0,
		y: 0
	}, u = o.origin ?? r, d = o.extent || i;
	if (o.extent === "parent" && !o.expandParent) if (!s) a?.("005", Ld.error005());
	else {
		let e = s.measured.width, t = s.measured.height;
		e && t && (d = [[c, l], [c + e, l + t]]);
	}
	else s && Pf(o.extent) && (d = [[o.extent[0][0] + c, o.extent[0][1] + l], [o.extent[1][0] + c, o.extent[1][1] + l]]);
	let f = Pf(d) ? df(t, d, o.measured) : t;
	return (o.measured.width === void 0 || o.measured.height === void 0) && a?.("015", Ld.error015()), {
		position: {
			x: f.x - c + (o.measured.width ?? 0) * u[0],
			y: f.y - l + (o.measured.height ?? 0) * u[1]
		},
		positionAbsolute: f
	};
}
async function lf({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: i }) {
	let a = new Set(e.map((e) => e.id)), o = [];
	for (let e of n) {
		if (e.deletable === !1) continue;
		let t = a.has(e.id), n = !t && e.parentId && o.find((t) => t.id === e.parentId);
		(t || n) && o.push(e);
	}
	let s = new Set(t.map((e) => e.id)), c = r.filter((e) => e.deletable !== !1), l = af(o, c);
	for (let e of c) s.has(e.id) && !l.find((t) => t.id === e.id) && l.push(e);
	if (!i) return {
		edges: l,
		nodes: o
	};
	let u = await i({
		nodes: o,
		edges: l
	});
	return typeof u == "boolean" ? u ? {
		edges: l,
		nodes: o
	} : {
		edges: [],
		nodes: []
	} : u;
}
var uf = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), df = (e = {
	x: 0,
	y: 0
}, t, n) => ({
	x: uf(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
	y: uf(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function ff(e, t, n) {
	let { width: r, height: i } = Ff(n), { x: a, y: o } = n.internals.positionAbsolute;
	return df(e, [[a, o], [a + r, o + i]], t);
}
var pf = (e, t, n) => e < t ? uf(Math.abs(e - t), 1, t) / t : e > n ? -uf(Math.abs(e - n), 1, t) / t : 0, mf = (e, t, n = 15, r = 40) => [pf(e.x, r, t.width - r) * n, pf(e.y, r, t.height - r) * n], hf = (e, t) => ({
	x: Math.min(e.x, t.x),
	y: Math.min(e.y, t.y),
	x2: Math.max(e.x2, t.x2),
	y2: Math.max(e.y2, t.y2)
}), gf = ({ x: e, y: t, width: n, height: r }) => ({
	x: e,
	y: t,
	x2: e + n,
	y2: t + r
}), _f = ({ x: e, y: t, x2: n, y2: r }) => ({
	x: e,
	y: t,
	width: n - e,
	height: r - t
}), vf = (e, t = [0, 0]) => {
	let { x: n, y: r } = $d(e) ? e.internals.positionAbsolute : ef(e, t);
	return {
		x: n,
		y: r,
		width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
		height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
	};
}, yf = (e, t = [0, 0]) => {
	let { x: n, y: r } = $d(e) ? e.internals.positionAbsolute : ef(e, t);
	return {
		x: n,
		y: r,
		x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
		y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
	};
}, bf = (e, t) => _f(hf(gf(e), gf(t))), xf = (e, t, n, r, i, a, o, s) => {
	let c = Math.max(0, Math.min(e + n, i + o) - Math.max(e, i)), l = Math.max(0, Math.min(t + r, a + s) - Math.max(t, a));
	return Math.ceil(c * l);
}, Sf = (e, t) => xf(e.x, e.y, e.width, e.height, t.x, t.y, t.width, t.height), Cf = (e) => wf(e.width) && wf(e.height) && wf(e.x) && wf(e.y), wf = (e) => !isNaN(e) && isFinite(e), Tf = (e, t) => (e, t) => {}, Ef = (e, t = [1, 1]) => ({
	x: t[0] * Math.round(e.x / t[0]),
	y: t[1] * Math.round(e.y / t[1])
}), Df = ({ x: e, y: t }, [n, r, i], a = !1, o = [1, 1]) => {
	let s = {
		x: (e - n) / i,
		y: (t - r) / i
	};
	return a ? Ef(s, o) : s;
}, Of = ({ x: e, y: t }, [n, r, i]) => ({
	x: e * i + n,
	y: t * i + r
});
function kf(e, t) {
	if (typeof e == "number") return Math.floor((t - t / (1 + e)) * .5);
	if (typeof e == "string" && e.endsWith("px")) {
		let t = parseFloat(e);
		if (!Number.isNaN(t)) return Math.floor(t);
	}
	if (typeof e == "string" && e.endsWith("%")) {
		let n = parseFloat(e);
		if (!Number.isNaN(n)) return Math.floor(t * n * .01);
	}
	return console.error(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`), 0;
}
function Af(e, t, n) {
	if (typeof e == "string" || typeof e == "number") {
		let r = kf(e, n), i = kf(e, t);
		return {
			top: r,
			right: i,
			bottom: r,
			left: i,
			x: i * 2,
			y: r * 2
		};
	}
	if (typeof e == "object") {
		let r = kf(e.top ?? e.y ?? 0, n), i = kf(e.bottom ?? e.y ?? 0, n), a = kf(e.left ?? e.x ?? 0, t), o = kf(e.right ?? e.x ?? 0, t);
		return {
			top: r,
			right: o,
			bottom: i,
			left: a,
			x: a + o,
			y: r + i
		};
	}
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		x: 0,
		y: 0
	};
}
function jf(e, t, n, r, i, a) {
	let { x: o, y: s } = Of(e, [
		t,
		n,
		r
	]), { x: c, y: l } = Of({
		x: e.x + e.width,
		y: e.y + e.height
	}, [
		t,
		n,
		r
	]), u = i - c, d = a - l;
	return {
		left: Math.floor(o),
		top: Math.floor(s),
		right: Math.floor(u),
		bottom: Math.floor(d)
	};
}
var Mf = (e, t, n, r, i, a) => {
	let o = Af(a, t, n), s = (t - o.x) / e.width, c = (n - o.y) / e.height, l = uf(Math.min(s, c), r, i), u = e.x + e.width / 2, d = e.y + e.height / 2, f = t / 2 - u * l, p = n / 2 - d * l, m = jf(e, f, p, l, t, n), h = {
		left: Math.min(m.left - o.left, 0),
		top: Math.min(m.top - o.top, 0),
		right: Math.min(m.right - o.right, 0),
		bottom: Math.min(m.bottom - o.bottom, 0)
	};
	return {
		x: f - h.left + h.right,
		y: p - h.top + h.bottom,
		zoom: l
	};
}, Nf = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function Pf(e) {
	return e != null && e !== "parent";
}
function Ff(e) {
	return {
		width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
		height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
	};
}
function If(e) {
	return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function Lf(e, t = {
	width: 0,
	height: 0
}, n, r, i) {
	let a = { ...e }, o = r.get(n);
	if (o) {
		let e = o.origin || i;
		a.x += o.internals.positionAbsolute.x - (t.width ?? 0) * e[0], a.y += o.internals.positionAbsolute.y - (t.height ?? 0) * e[1];
	}
	return a;
}
function Rf(e) {
	return {
		...Bd,
		...e || {}
	};
}
function zf(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: i }) {
	let { x: a, y: o } = Gf(e), s = Df({
		x: a - (i?.left ?? 0),
		y: o - (i?.top ?? 0)
	}, r), { x: c, y: l } = n ? Ef(s, t) : s;
	return {
		xSnapped: c,
		ySnapped: l,
		...s
	};
}
var Bf = (e) => ({
	width: e.offsetWidth,
	height: e.offsetHeight
}), Vf = (e) => e?.getRootNode?.() || window?.document, Hf = [
	"INPUT",
	"SELECT",
	"TEXTAREA"
];
function Uf(e) {
	let t = e.composedPath?.()?.[0] || e.target;
	return t?.nodeType === 1 ? Hf.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey") : !1;
}
var Wf = (e) => "clientX" in e, Gf = (e, t) => {
	let n = Wf(e), r = n ? e.clientX : e.touches?.[0].clientX, i = n ? e.clientY : e.touches?.[0].clientY;
	return {
		x: r - (t?.left ?? 0),
		y: i - (t?.top ?? 0)
	};
}, Kf = (e, t, n, r, i) => {
	let a = t.querySelectorAll(`.${e}`);
	return !a || !a.length ? null : Array.from(a).map((t) => {
		let a = t.getBoundingClientRect();
		return {
			id: t.getAttribute("data-handleid"),
			type: e,
			nodeId: i,
			position: t.getAttribute("data-handlepos"),
			x: (a.left - n.left) / r,
			y: (a.top - n.top) / r,
			...Bf(t)
		};
	});
};
function qf({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: i, sourceControlY: a, targetControlX: o, targetControlY: s }) {
	let c = e * .125 + i * .375 + o * .375 + n * .125, l = t * .125 + a * .375 + s * .375 + r * .125;
	return [
		c,
		l,
		Math.abs(c - e),
		Math.abs(l - t)
	];
}
function Jf(e, t) {
	return e >= 0 ? .5 * e : t * 25 * Math.sqrt(-e);
}
function Yf({ pos: e, x1: t, y1: n, x2: r, y2: i, c: a }) {
	switch (e) {
		case Q.Left: return [t - Jf(t - r, a), n];
		case Q.Right: return [t + Jf(r - t, a), n];
		case Q.Top: return [t, n - Jf(n - i, a)];
		case Q.Bottom: return [t, n + Jf(i - n, a)];
	}
}
function Xf({ sourceX: e, sourceY: t, sourcePosition: n = Q.Bottom, targetX: r, targetY: i, targetPosition: a = Q.Top, curvature: o = .25 }) {
	let [s, c] = Yf({
		pos: n,
		x1: e,
		y1: t,
		x2: r,
		y2: i,
		c: o
	}), [l, u] = Yf({
		pos: a,
		x1: r,
		y1: i,
		x2: e,
		y2: t,
		c: o
	}), [d, f, p, m] = qf({
		sourceX: e,
		sourceY: t,
		targetX: r,
		targetY: i,
		sourceControlX: s,
		sourceControlY: c,
		targetControlX: l,
		targetControlY: u
	});
	return [
		`M${e},${t} C${s},${c} ${l},${u} ${r},${i}`,
		d,
		f,
		p,
		m
	];
}
function Zf({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
	let i = Math.abs(n - e) / 2, a = n < e ? n + i : n - i, o = Math.abs(r - t) / 2;
	return [
		a,
		r < t ? r + o : r - o,
		i,
		o
	];
}
function Qf({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: i = !1, zIndexMode: a = "basic" }) {
	return a === "manual" ? r : (i && n ? r + 1e3 : r) + Math.max(e.parentId || i && e.selected ? e.internals.z : 0, t.parentId || i && t.selected ? t.internals.z : 0);
}
function $f({ sourceNode: e, targetNode: t, width: n, height: r, transform: i }) {
	let a = hf(yf(e), yf(t));
	return a.x === a.x2 && (a.x2 += 1), a.y === a.y2 && (a.y2 += 1), Sf({
		x: -i[0] / i[2],
		y: -i[1] / i[2],
		width: n / i[2],
		height: r / i[2]
	}, _f(a)) > 0;
}
var ep = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, tp = (e, t) => t.some((t) => t.source === e.source && t.target === e.target && (t.sourceHandle === e.sourceHandle || !t.sourceHandle && !e.sourceHandle) && (t.targetHandle === e.targetHandle || !t.targetHandle && !e.targetHandle)), np = (e, t, n = {}) => {
	if (!e.source || !e.target) return n.onError?.("006", Ld.error006()), t;
	let r = n.getEdgeId || ep, i;
	return i = Zd(e) ? { ...e } : {
		...e,
		id: r(e)
	}, tp(i, t) ? t : (i.sourceHandle === null && delete i.sourceHandle, i.targetHandle === null && delete i.targetHandle, t.concat(i));
};
function rp({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
	let [i, a, o, s] = Zf({
		sourceX: e,
		sourceY: t,
		targetX: n,
		targetY: r
	});
	return [
		`M ${e},${t}L ${n},${r}`,
		i,
		a,
		o,
		s
	];
}
var ip = {
	[Q.Left]: {
		x: -1,
		y: 0
	},
	[Q.Right]: {
		x: 1,
		y: 0
	},
	[Q.Top]: {
		x: 0,
		y: -1
	},
	[Q.Bottom]: {
		x: 0,
		y: 1
	}
}, ap = ({ source: e, sourcePosition: t = Q.Bottom, target: n }) => t === Q.Left || t === Q.Right ? e.x < n.x ? {
	x: 1,
	y: 0
} : {
	x: -1,
	y: 0
} : e.y < n.y ? {
	x: 0,
	y: 1
} : {
	x: 0,
	y: -1
}, op = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2);
function sp({ source: e, sourcePosition: t = Q.Bottom, target: n, targetPosition: r = Q.Top, center: i, offset: a, stepPosition: o }) {
	let s = ip[t], c = ip[r], l = {
		x: e.x + s.x * a,
		y: e.y + s.y * a
	}, u = {
		x: n.x + c.x * a,
		y: n.y + c.y * a
	}, d = ap({
		source: l,
		sourcePosition: t,
		target: u
	}), f = d.x === 0 ? "y" : "x", p = d[f], m = [], h, g, _ = {
		x: 0,
		y: 0
	}, v = {
		x: 0,
		y: 0
	}, [, , y, b] = Zf({
		sourceX: e.x,
		sourceY: e.y,
		targetX: n.x,
		targetY: n.y
	});
	if (s[f] * c[f] === -1) {
		f === "x" ? (h = i.x ?? l.x + (u.x - l.x) * o, g = i.y ?? (l.y + u.y) / 2) : (h = i.x ?? (l.x + u.x) / 2, g = i.y ?? l.y + (u.y - l.y) * o);
		let e = [{
			x: h,
			y: l.y
		}, {
			x: h,
			y: u.y
		}], t = [{
			x: l.x,
			y: g
		}, {
			x: u.x,
			y: g
		}];
		m = s[f] === p ? f === "x" ? e : t : f === "x" ? t : e;
	} else {
		let i = [{
			x: l.x,
			y: u.y
		}], o = [{
			x: u.x,
			y: l.y
		}];
		if (m = f === "x" ? s.x === p ? o : i : s.y === p ? i : o, t === r) {
			let t = Math.abs(e[f] - n[f]);
			if (t <= a) {
				let r = Math.min(a - 1, a - t);
				s[f] === p ? _[f] = (l[f] > e[f] ? -1 : 1) * r : v[f] = (u[f] > n[f] ? -1 : 1) * r;
			}
		}
		if (t !== r) {
			let e = f === "x" ? "y" : "x", t = s[f] === c[e], n = l[e] > u[e], r = l[e] < u[e];
			(s[f] === 1 && (!t && n || t && r) || s[f] !== 1 && (!t && r || t && n)) && (m = f === "x" ? i : o);
		}
		let d = {
			x: l.x + _.x,
			y: l.y + _.y
		}, y = {
			x: u.x + v.x,
			y: u.y + v.y
		};
		Math.max(Math.abs(d.x - m[0].x), Math.abs(y.x - m[0].x)) >= Math.max(Math.abs(d.y - m[0].y), Math.abs(y.y - m[0].y)) ? (h = (d.x + y.x) / 2, g = m[0].y) : (h = m[0].x, g = (d.y + y.y) / 2);
	}
	let x = {
		x: l.x + _.x,
		y: l.y + _.y
	}, S = {
		x: u.x + v.x,
		y: u.y + v.y
	};
	return [
		[
			e,
			...x.x !== m[0].x || x.y !== m[0].y ? [x] : [],
			...m,
			...S.x !== m[m.length - 1].x || S.y !== m[m.length - 1].y ? [S] : [],
			n
		],
		h,
		g,
		y,
		b
	];
}
function cp(e, t, n, r) {
	let i = Math.min(op(e, t) / 2, op(t, n) / 2, r), { x: a, y: o } = t;
	if (e.x === a && a === n.x || e.y === o && o === n.y) return `L${a} ${o}`;
	if (e.y === o) {
		let t = e.x < n.x ? -1 : 1, r = e.y < n.y ? 1 : -1;
		return `L ${a + i * t},${o}Q ${a},${o} ${a},${o + i * r}`;
	}
	let s = e.x < n.x ? 1 : -1;
	return `L ${a},${o + i * (e.y < n.y ? -1 : 1)}Q ${a},${o} ${a + i * s},${o}`;
}
function lp({ sourceX: e, sourceY: t, sourcePosition: n = Q.Bottom, targetX: r, targetY: i, targetPosition: a = Q.Top, borderRadius: o = 5, centerX: s, centerY: c, offset: l = 20, stepPosition: u = .5 }) {
	let [d, f, p, m, h] = sp({
		source: {
			x: e,
			y: t
		},
		sourcePosition: n,
		target: {
			x: r,
			y: i
		},
		targetPosition: a,
		center: {
			x: s,
			y: c
		},
		offset: l,
		stepPosition: u
	}), g = `M${d[0].x} ${d[0].y}`;
	for (let e = 1; e < d.length - 1; e++) g += cp(d[e - 1], d[e], d[e + 1], o);
	return g += `L${d[d.length - 1].x} ${d[d.length - 1].y}`, [
		g,
		f,
		p,
		m,
		h
	];
}
function up(e) {
	return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function dp(e) {
	let { sourceNode: t, targetNode: n } = e;
	if (!up(t) || !up(n)) return null;
	let r = t.internals.handleBounds || fp(t.handles), i = n.internals.handleBounds || fp(n.handles), a = mp(r?.source ?? [], e.sourceHandle), o = mp(e.connectionMode === Vd.Strict ? i?.target ?? [] : (i?.target ?? []).concat(i?.source ?? []), e.targetHandle);
	if (!a || !o) return e.onError?.("008", Ld.error008(a ? "target" : "source", {
		id: e.id,
		sourceHandle: e.sourceHandle,
		targetHandle: e.targetHandle
	})), null;
	let s = a?.position || Q.Bottom, c = o?.position || Q.Top, l = pp(t, a, s), u = pp(n, o, c);
	return {
		sourceX: l.x,
		sourceY: l.y,
		targetX: u.x,
		targetY: u.y,
		sourcePosition: s,
		targetPosition: c
	};
}
function fp(e) {
	if (!e) return null;
	let t = [], n = [];
	for (let r of e) r.width = r.width ?? 1, r.height = r.height ?? 1, r.type === "source" ? t.push(r) : r.type === "target" && n.push(r);
	return {
		source: t,
		target: n
	};
}
function pp(e, t, n = Q.Left, r = !1) {
	let i = (t?.x ?? 0) + e.internals.positionAbsolute.x, a = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: o, height: s } = t ?? Ff(e);
	if (r) return {
		x: i + o / 2,
		y: a + s / 2
	};
	switch (t?.position ?? n) {
		case Q.Top: return {
			x: i + o / 2,
			y: a
		};
		case Q.Right: return {
			x: i + o,
			y: a + s / 2
		};
		case Q.Bottom: return {
			x: i + o / 2,
			y: a + s
		};
		case Q.Left: return {
			x: i,
			y: a + s / 2
		};
	}
}
function mp(e, t) {
	return e && (t ? e.find((e) => e.id === t) : e[0]) || null;
}
function hp(e, t) {
	return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((t) => `${t}=${e[t]}`).join("&")}` : "";
}
function gp(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: i }) {
	let a = /* @__PURE__ */ new Set();
	return e.reduce((e, o) => ([o.markerStart || r, o.markerEnd || i].forEach((r) => {
		if (r && typeof r == "object") {
			let i = hp(r, t);
			a.has(i) || (e.push({
				id: i,
				color: r.color || n,
				...r
			}), a.add(i));
		}
	}), e), []).sort((e, t) => e.id.localeCompare(t.id));
}
function _p(e, t, n, r, i) {
	let a = .5;
	i === "start" ? a = 0 : i === "end" && (a = 1);
	let o = [(e.x + e.width * a) * t.zoom + t.x, e.y * t.zoom + t.y - r], s = [-100 * a, -100];
	switch (n) {
		case Q.Right:
			o = [(e.x + e.width) * t.zoom + t.x + r, (e.y + e.height * a) * t.zoom + t.y], s = [0, -100 * a];
			break;
		case Q.Bottom:
			o[1] = (e.y + e.height) * t.zoom + t.y + r, s[1] = 0;
			break;
		case Q.Left:
			o = [e.x * t.zoom + t.x - r, (e.y + e.height * a) * t.zoom + t.y], s = [-100, -100 * a];
			break;
	}
	return `translate(${o[0]}px, ${o[1]}px) translate(${s[0]}%, ${s[1]}%)`;
}
var vp = 1e3, yp = 10, bp = {
	nodeOrigin: [0, 0],
	nodeExtent: Rd,
	elevateNodesOnSelect: !0,
	zIndexMode: "basic",
	defaults: {}
}, xp = {
	...bp,
	checkEquality: !0
};
function Sp(e, t) {
	let n = { ...e };
	for (let e in t) t[e] !== void 0 && (n[e] = t[e]);
	return n;
}
function Cp(e, t, n) {
	let r = Sp(bp, n);
	for (let n of e.values()) if (n.parentId) Op(n, e, t, r);
	else {
		let e = df(ef(n, r.nodeOrigin), Pf(n.extent) ? n.extent : r.nodeExtent, Ff(n));
		n.internals.positionAbsolute = e;
	}
}
function wp(e, t) {
	if (!e.handles) return e.measured ? t?.internals.handleBounds : void 0;
	let n = [], r = [];
	for (let t of e.handles) {
		let i = {
			id: t.id,
			width: t.width ?? 1,
			height: t.height ?? 1,
			nodeId: e.id,
			x: t.x,
			y: t.y,
			position: t.position,
			type: t.type
		};
		t.type === "source" ? n.push(i) : t.type === "target" && r.push(i);
	}
	return {
		source: n,
		target: r
	};
}
function Tp(e) {
	return e === "manual";
}
function Ep(e, t, n, r = {}) {
	let i = Sp(xp, r), a = { i: 0 }, o = new Map(t), s = i?.elevateNodesOnSelect && !Tp(i.zIndexMode) ? vp : 0, c = e.length > 0, l = !1;
	t.clear(), n.clear();
	for (let u of e) {
		let e = o.get(u.id);
		if (i.checkEquality && u === e?.internals.userNode) t.set(u.id, e);
		else {
			let n = df(ef(u, i.nodeOrigin), Pf(u.extent) ? u.extent : i.nodeExtent, Ff(u));
			e = {
				...i.defaults,
				...u,
				measured: {
					width: u.measured?.width,
					height: u.measured?.height
				},
				internals: {
					positionAbsolute: n,
					handleBounds: wp(u, e),
					z: kp(u, s, i.zIndexMode),
					userNode: u
				}
			}, t.set(u.id, e);
		}
		(e.measured === void 0 || e.measured.width === void 0 || e.measured.height === void 0) && !e.hidden && (c = !1), u.parentId && Op(e, t, n, r, a), l ||= u.selected ?? !1;
	}
	return {
		nodesInitialized: c,
		hasSelectedNodes: l
	};
}
function Dp(e, t) {
	if (!e.parentId) return;
	let n = t.get(e.parentId);
	n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Op(e, t, n, r, i) {
	let { elevateNodesOnSelect: a, nodeOrigin: o, nodeExtent: s, zIndexMode: c } = Sp(bp, r), l = e.parentId, u = t.get(l);
	if (!u) {
		console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
		return;
	}
	Dp(e, n), i && !u.parentId && u.internals.rootParentIndex === void 0 && c === "auto" && (u.internals.rootParentIndex = ++i.i, u.internals.z = u.internals.z + i.i * yp), i && u.internals.rootParentIndex !== void 0 && (i.i = u.internals.rootParentIndex);
	let { x: d, y: f, z: p } = Ap(e, u, o, s, a && !Tp(c) ? vp : 0, c), { positionAbsolute: m } = e.internals, h = d !== m.x || f !== m.y;
	(h || p !== e.internals.z) && t.set(e.id, {
		...e,
		internals: {
			...e.internals,
			positionAbsolute: h ? {
				x: d,
				y: f
			} : m,
			z: p
		}
	});
}
function kp(e, t, n) {
	let r = wf(e.zIndex) ? e.zIndex : 0;
	return Tp(n) ? r : r + (e.selected ? t : 0);
}
function Ap(e, t, n, r, i, a) {
	let { x: o, y: s } = t.internals.positionAbsolute, c = Ff(e), l = ef(e, n), u = Pf(e.extent) ? df(l, e.extent, c) : l, d = df({
		x: o + u.x,
		y: s + u.y
	}, r, c);
	e.extent === "parent" && (d = ff(d, c, t));
	let f = kp(e, i, a), p = t.internals.z ?? 0;
	return {
		x: d.x,
		y: d.y,
		z: p >= f ? p + 1 : f
	};
}
function jp(e, t, n, r = [0, 0]) {
	let i = [], a = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = t.get(n.parentId);
		if (!e) continue;
		let r = bf(a.get(n.parentId)?.expandedRect ?? vf(e), n.rect);
		a.set(n.parentId, {
			expandedRect: r,
			parent: e
		});
	}
	return a.size > 0 && a.forEach(({ expandedRect: t, parent: a }, o) => {
		let s = a.internals.positionAbsolute, c = Ff(a), l = a.origin ?? r, u = t.x < s.x ? Math.round(Math.abs(s.x - t.x)) : 0, d = t.y < s.y ? Math.round(Math.abs(s.y - t.y)) : 0, f = Math.max(c.width, Math.round(t.width)), p = Math.max(c.height, Math.round(t.height)), m = (f - c.width) * l[0], h = (p - c.height) * l[1];
		(u > 0 || d > 0 || m || h) && (i.push({
			id: o,
			type: "position",
			position: {
				x: a.position.x - u + m,
				y: a.position.y - d + h
			}
		}), n.get(o)?.forEach((t) => {
			e.some((e) => e.id === t.id) || i.push({
				id: t.id,
				type: "position",
				position: {
					x: t.position.x + u,
					y: t.position.y + d
				}
			});
		})), (c.width < t.width || c.height < t.height || u || d) && i.push({
			id: o,
			type: "dimensions",
			setAttributes: !0,
			dimensions: {
				width: f + (u ? l[0] * u - m : 0),
				height: p + (d ? l[1] * d - h : 0)
			}
		});
	}), i;
}
function Mp(e, t, n, r, i, a, o) {
	let s = r?.querySelector(".xyflow__viewport"), c = !1;
	if (!s) return {
		changes: [],
		updatedInternals: c
	};
	let l = [], u = window.getComputedStyle(s), { m22: d } = new window.DOMMatrixReadOnly(u.transform), f = [];
	for (let r of e.values()) {
		let e = t.get(r.id);
		if (!e) continue;
		if (e.hidden) {
			t.set(e.id, {
				...e,
				internals: {
					...e.internals,
					handleBounds: void 0
				}
			}), c = !0;
			continue;
		}
		let s = Bf(r.nodeElement), u = e.measured.width !== s.width || e.measured.height !== s.height;
		if (s.width && s.height && (u || !e.internals.handleBounds || r.force)) {
			let p = r.nodeElement.getBoundingClientRect(), m = Pf(e.extent) ? e.extent : a, { positionAbsolute: h } = e.internals;
			if (e.parentId && e.extent === "parent") {
				let n = t.get(e.parentId);
				n && (h = ff(h, s, n));
			} else m && (h = df(h, m, s));
			let g = {
				...e,
				measured: s,
				internals: {
					...e.internals,
					positionAbsolute: h,
					handleBounds: {
						source: Kf("source", r.nodeElement, p, d, e.id),
						target: Kf("target", r.nodeElement, p, d, e.id)
					}
				}
			};
			t.set(e.id, g), e.parentId && Op(g, t, n, {
				nodeOrigin: i,
				zIndexMode: o
			}), c = !0, u && (l.push({
				id: e.id,
				type: "dimensions",
				dimensions: s
			}), e.expandParent && e.parentId && f.push({
				id: e.id,
				parentId: e.parentId,
				rect: vf(g, i)
			}));
		}
	}
	if (f.length > 0) {
		let e = jp(f, t, n, i);
		l.push(...e);
	}
	return {
		changes: l,
		updatedInternals: c
	};
}
async function Np({ delta: e, panZoom: t, transform: n, translateExtent: r, width: i, height: a }) {
	if (!t || !e.x && !e.y) return !1;
	let o = await t.setViewportConstrained({
		x: n[0] + e.x,
		y: n[1] + e.y,
		zoom: n[2]
	}, [[0, 0], [i, a]], r);
	return !!o && (o.x !== n[0] || o.y !== n[1] || o.k !== n[2]);
}
function Pp(e, t, n, r, i, a) {
	let o = i, s = r.get(o) || /* @__PURE__ */ new Map();
	r.set(o, s.set(n, t)), o = `${i}-${e}`;
	let c = r.get(o) || /* @__PURE__ */ new Map();
	if (r.set(o, c.set(n, t)), a) {
		o = `${i}-${e}-${a}`;
		let s = r.get(o) || /* @__PURE__ */ new Map();
		r.set(o, s.set(n, t));
	}
}
function Fp(e, t, n) {
	e.clear(), t.clear();
	for (let r of n) {
		let { source: n, target: i, sourceHandle: a = null, targetHandle: o = null } = r, s = {
			edgeId: r.id,
			source: n,
			target: i,
			sourceHandle: a,
			targetHandle: o
		}, c = `${n}-${a}--${i}-${o}`;
		Pp("source", s, `${i}-${o}--${n}-${a}`, e, n, a), Pp("target", s, c, e, i, o), t.set(r.id, r);
	}
}
function Ip(e, t) {
	if (e === null || t === null) return !1;
	let n = Array.isArray(e) ? e : [e], r = Array.isArray(t) ? t : [t];
	if (n.length !== r.length) return !1;
	for (let e = 0; e < n.length; e++) if (n[e].id !== r[e].id || n[e].type !== r[e].type || !Object.is(n[e].data, r[e].data)) return !1;
	return !0;
}
function Lp(e, t) {
	if (!e.parentId) return !1;
	let n = t.get(e.parentId);
	return n ? n.selected ? !0 : Lp(n, t) : !1;
}
function Rp(e, t, n) {
	let r = e;
	do {
		if (r?.matches?.(t)) return !0;
		if (r === n) return !1;
		r = r?.parentElement;
	} while (r);
	return !1;
}
function zp(e, t, n, r) {
	let i = /* @__PURE__ */ new Map();
	for (let [a, o] of e) if ((o.selected || o.id === r) && (!o.parentId || !Lp(o, e)) && (o.draggable || t && o.draggable === void 0)) {
		let t = e.get(a);
		t && i.set(a, {
			id: a,
			position: t.position || {
				x: 0,
				y: 0
			},
			distance: {
				x: n.x - t.internals.positionAbsolute.x,
				y: n.y - t.internals.positionAbsolute.y
			},
			extent: t.extent,
			parentId: t.parentId,
			origin: t.origin,
			expandParent: t.expandParent,
			internals: { positionAbsolute: t.internals.positionAbsolute || {
				x: 0,
				y: 0
			} },
			measured: {
				width: t.measured.width ?? 0,
				height: t.measured.height ?? 0
			}
		});
	}
	return i;
}
function Bp({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
	let i = [];
	for (let [e, a] of t) {
		let t = n.get(e)?.internals.userNode;
		t && i.push({
			...t,
			position: a.position,
			dragging: r
		});
	}
	if (!e) return [i[0], i];
	let a = n.get(e)?.internals.userNode;
	return [a ? {
		...a,
		position: t.get(e)?.position || a.position,
		dragging: r
	} : i[0], i];
}
function Vp({ dragItems: e, snapGrid: t, x: n, y: r }) {
	let i = e.values().next().value;
	if (!i) return null;
	let a = {
		x: n - i.distance.x,
		y: r - i.distance.y
	}, o = Ef(a, t);
	return {
		x: o.x - a.x,
		y: o.y - a.y
	};
}
function Hp({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: i }) {
	let a = {
		x: null,
		y: null
	}, o = 0, s = /* @__PURE__ */ new Map(), c = !1, l = {
		x: 0,
		y: 0
	}, u = null, d = !1, f = null, p = !1, m = !1, h = null;
	function g({ noDragClassName: g, handleSelector: _, domNode: v, isSelectable: y, nodeId: b, nodeClickDistance: x = 0 }) {
		f = ic(v);
		function S({ x: e, y: n }) {
			let { nodeLookup: i, nodeExtent: o, snapGrid: c, snapToGrid: l, nodeOrigin: u, onNodeDrag: d, onSelectionDrag: f, onError: p, updateNodePositions: g } = t();
			a = {
				x: e,
				y: n
			};
			let _ = !1, v = s.size > 1, y = v && o ? gf(nf(s)) : null, x = v && l ? Vp({
				dragItems: s,
				snapGrid: c,
				x: e,
				y: n
			}) : null;
			for (let [t, r] of s) {
				if (!i.has(t)) continue;
				let a = {
					x: e - r.distance.x,
					y: n - r.distance.y
				};
				l && (a = x ? {
					x: Math.round(a.x + x.x),
					y: Math.round(a.y + x.y)
				} : Ef(a, c));
				let s = null;
				if (v && o && !r.extent && y) {
					let { positionAbsolute: e } = r.internals, t = e.x - y.x + o[0][0], n = e.x + r.measured.width - y.x2 + o[1][0], i = e.y - y.y + o[0][1], a = e.y + r.measured.height - y.y2 + o[1][1];
					s = [[t, i], [n, a]];
				}
				let { position: d, positionAbsolute: f } = cf({
					nodeId: t,
					nextPosition: a,
					nodeLookup: i,
					nodeExtent: s || o,
					nodeOrigin: u,
					onError: p
				});
				_ = _ || r.position.x !== d.x || r.position.y !== d.y, r.position = d, r.internals.positionAbsolute = f;
			}
			if (m ||= _, _ && (g(s, !0), h && (r || d || !b && f))) {
				let [e, t] = Bp({
					nodeId: b,
					dragItems: s,
					nodeLookup: i
				});
				r?.(h, s, e, t), d?.(h, e, t), b || f?.(h, t);
			}
		}
		async function C() {
			if (!u) return;
			let { transform: e, panBy: n, autoPanSpeed: r, autoPanOnNodeDrag: i } = t();
			if (!i) {
				c = !1, cancelAnimationFrame(o);
				return;
			}
			let [s, d] = mf(l, u, r);
			(s !== 0 || d !== 0) && (a.x = (a.x ?? 0) - s / e[2], a.y = (a.y ?? 0) - d / e[2], await n({
				x: s,
				y: d
			}) && S(a)), o = requestAnimationFrame(C);
		}
		function w(r) {
			let { nodeLookup: i, multiSelectionActive: o, nodesDraggable: c, transform: l, snapGrid: f, snapToGrid: p, selectNodesOnDrag: m, onNodeDragStart: h, onSelectionDragStart: g, unselectNodesAndEdges: _ } = t();
			d = !0, (!m || !y) && !o && b && (i.get(b)?.selected || _()), y && m && b && e?.(b);
			let v = zf(r.sourceEvent, {
				transform: l,
				snapGrid: f,
				snapToGrid: p,
				containerBounds: u
			});
			if (a = v, s = zp(i, c, v, b), s.size > 0 && (n || h || !b && g)) {
				let [e, t] = Bp({
					nodeId: b,
					dragItems: s,
					nodeLookup: i
				});
				n?.(r.sourceEvent, s, e, t), h?.(r.sourceEvent, e, t), b || g?.(r.sourceEvent, t);
			}
		}
		let T = yc().clickDistance(x).on("start", (e) => {
			let { domNode: n, nodeDragThreshold: r, transform: i, snapGrid: o, snapToGrid: s } = t();
			u = n?.getBoundingClientRect() || null, p = !1, m = !1, h = e.sourceEvent, r === 0 && w(e), a = zf(e.sourceEvent, {
				transform: i,
				snapGrid: o,
				snapToGrid: s,
				containerBounds: u
			}), l = Gf(e.sourceEvent, u);
		}).on("drag", (e) => {
			let { autoPanOnNodeDrag: n, transform: r, snapGrid: i, snapToGrid: o, nodeDragThreshold: f, nodeLookup: m } = t(), g = zf(e.sourceEvent, {
				transform: r,
				snapGrid: i,
				snapToGrid: o,
				containerBounds: u
			});
			if (h = e.sourceEvent, (e.sourceEvent.type === "touchmove" && e.sourceEvent.touches.length > 1 || b && !m.has(b)) && (p = !0), !p) {
				if (!c && n && d && (c = !0, C()), !d) {
					let t = Gf(e.sourceEvent, u), n = t.x - l.x, r = t.y - l.y;
					Math.sqrt(n * n + r * r) > f && w(e);
				}
				(a.x !== g.xSnapped || a.y !== g.ySnapped) && s && d && (l = Gf(e.sourceEvent, u), S(g));
			}
		}).on("end", (e) => {
			if (!d || p) {
				p && s.size > 0 && t().updateNodePositions(s, !1);
				return;
			}
			if (c = !1, d = !1, cancelAnimationFrame(o), s.size > 0) {
				let { nodeLookup: n, updateNodePositions: r, onNodeDragStop: a, onSelectionDragStop: o } = t();
				if (m &&= (r(s, !1), !1), i || a || !b && o) {
					let [t, r] = Bp({
						nodeId: b,
						dragItems: s,
						nodeLookup: n,
						dragging: !1
					});
					i?.(e.sourceEvent, s, t, r), a?.(e.sourceEvent, t, r), b || o?.(e.sourceEvent, r);
				}
			}
		}).filter((e) => {
			let t = e.target;
			return !e.button && (!g || !Rp(t, `.${g}`, v)) && (!_ || Rp(t, _, v));
		});
		f.call(T);
	}
	function _() {
		f?.on(".drag", null);
	}
	return {
		update: g,
		destroy: _
	};
}
function Up(e, t, n) {
	let r = [], i = {
		x: e.x - n,
		y: e.y - n,
		width: n * 2,
		height: n * 2
	};
	for (let e of t.values()) Sf(i, vf(e)) > 0 && r.push(e);
	return r;
}
var Wp = 250;
function Gp(e, t, n, r) {
	let i = [], a = Infinity, o = Up(e, n, t + Wp);
	for (let n of o) {
		let o = [...n.internals.handleBounds?.source ?? [], ...n.internals.handleBounds?.target ?? []];
		for (let s of o) {
			if (r.nodeId === s.nodeId && r.type === s.type && r.id === s.id) continue;
			let { x: o, y: c } = pp(n, s, s.position, !0), l = Math.sqrt((o - e.x) ** 2 + (c - e.y) ** 2);
			l > t || (l < a ? (i = [{
				...s,
				x: o,
				y: c
			}], a = l) : l === a && i.push({
				...s,
				x: o,
				y: c
			}));
		}
	}
	if (!i.length) return null;
	if (i.length > 1) {
		let e = r.type === "source" ? "target" : "source";
		return i.find((t) => t.type === e) ?? i[0];
	}
	return i[0];
}
function Kp(e, t, n, r, i, a = !1) {
	let o = r.get(e);
	if (!o) return null;
	let s = i === "strict" ? o.internals.handleBounds?.[t] : [...o.internals.handleBounds?.source ?? [], ...o.internals.handleBounds?.target ?? []], c = (n ? s?.find((e) => e.id === n) : s?.[0]) ?? null;
	return c && a ? {
		...c,
		...pp(o, c, c.position, !0)
	} : c;
}
function qp(e, t) {
	return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function Jp(e, t) {
	let n = null;
	return t ? n = !0 : e && !t && (n = !1), n;
}
var Yp = () => !0;
function Xp(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: i, edgeUpdaterType: a, isTarget: o, domNode: s, nodeLookup: c, lib: l, autoPanOnConnect: u, flowId: d, panBy: f, cancelConnection: p, onConnectStart: m, onConnect: h, onConnectEnd: g, isValidConnection: _ = Yp, onReconnectEnd: v, updateConnection: y, getTransform: b, getFromHandle: x, autoPanSpeed: S, dragThreshold: C = 1, handleDomNode: w }) {
	let T = Vf(e.target), E = 0, D, { x: ee, y: te } = Gf(e), ne = qp(a, w), re = s?.getBoundingClientRect(), ie = !1;
	if (!re || !ne) return;
	let ae = Kp(i, ne, r, c, t);
	if (!ae) return;
	let oe = Gf(e, re), O = !1, se = null, ce = !1, le = null;
	function ue() {
		if (!u || !re) return;
		let [e, t] = mf(oe, re, S);
		f({
			x: e,
			y: t
		}), E = requestAnimationFrame(ue);
	}
	let de = {
		...ae,
		nodeId: i,
		type: ne,
		position: ae.position
	}, fe = c.get(i), pe = {
		inProgress: !0,
		isValid: null,
		from: pp(fe, de, Q.Left, !0),
		fromHandle: de,
		fromPosition: de.position,
		fromNode: fe,
		to: oe,
		toHandle: null,
		toPosition: qd[de.position],
		toNode: null,
		pointer: oe
	};
	function me() {
		ie = !0, y(pe), m?.(e, {
			nodeId: i,
			handleId: r,
			handleType: ne
		});
	}
	C === 0 && me();
	function he(e) {
		if (!ie) {
			let { x: t, y: n } = Gf(e), r = t - ee, i = n - te;
			if (!(r * r + i * i > C * C)) return;
			me();
		}
		if (!x() || !de) {
			ge(e);
			return;
		}
		let a = b();
		oe = Gf(e, re), D = Gp(Df(oe, a, !1, [1, 1]), n, c, de), O ||= (ue(), !0);
		let s = Zp(e, {
			handle: D,
			connectionMode: t,
			fromNodeId: i,
			fromHandleId: r,
			fromType: o ? "target" : "source",
			isValidConnection: _,
			doc: T,
			lib: l,
			flowId: d,
			nodeLookup: c
		});
		le = s.handleDomNode, se = s.connection, ce = Jp(!!D, s.isValid);
		let u = c.get(i), f = u ? pp(u, de, Q.Left, !0) : pe.from, p = {
			...pe,
			from: f,
			isValid: ce,
			to: s.toHandle && ce ? Of({
				x: s.toHandle.x,
				y: s.toHandle.y
			}, a) : oe,
			toHandle: s.toHandle,
			toPosition: ce && s.toHandle ? s.toHandle.position : qd[de.position],
			toNode: s.toHandle ? c.get(s.toHandle.nodeId) : null,
			pointer: oe
		};
		y(p), pe = p;
	}
	function ge(e) {
		if (!("touches" in e && e.touches.length > 0)) {
			if (ie) {
				(D || le) && se && ce && h?.(se);
				let { inProgress: t, ...n } = pe, r = {
					...n,
					toPosition: pe.toHandle ? pe.toPosition : null
				};
				g?.(e, r), a && v?.(e, r);
			}
			p(), cancelAnimationFrame(E), O = !1, ce = !1, se = null, le = null, T.removeEventListener("mousemove", he), T.removeEventListener("mouseup", ge), T.removeEventListener("touchmove", he), T.removeEventListener("touchend", ge);
		}
	}
	T.addEventListener("mousemove", he), T.addEventListener("mouseup", ge), T.addEventListener("touchmove", he), T.addEventListener("touchend", ge);
}
function Zp(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: i, fromType: a, doc: o, lib: s, flowId: c, isValidConnection: l = Yp, nodeLookup: u }) {
	let d = a === "target", f = t ? o.querySelector(`.${s}-flow__handle[data-id="${c}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: p, y: m } = Gf(e), h = o.elementFromPoint(p, m), g = h?.classList.contains(`${s}-flow__handle`) ? h : f, _ = {
		handleDomNode: g,
		isValid: !1,
		connection: null,
		toHandle: null
	};
	if (g) {
		let e = qp(void 0, g), t = g.getAttribute("data-nodeid"), a = g.getAttribute("data-handleid"), o = g.classList.contains("connectable"), s = g.classList.contains("connectableend");
		if (!t || !e) return _;
		let c = {
			source: d ? t : r,
			sourceHandle: d ? a : i,
			target: d ? r : t,
			targetHandle: d ? i : a
		};
		_.connection = c, _.isValid = o && s && (n === Vd.Strict ? d && e === "source" || !d && e === "target" : t !== r || a !== i) && l(c), _.toHandle = Kp(t, e, a, u, n, !0);
	}
	return _;
}
var Qp = {
	onPointerDown: Xp,
	isValid: Zp
};
function $p({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
	let i = ic(e);
	function a({ translateExtent: e, width: a, height: o, zoomStep: s = 1, pannable: c = !0, zoomable: l = !0, inversePan: u = !1 }) {
		let d = (e) => {
			if (e.sourceEvent.type !== "wheel" || !t) return;
			let r = n(), i = e.sourceEvent.ctrlKey && Nf() ? 10 : 1, a = -e.sourceEvent.deltaY * (e.sourceEvent.deltaMode === 1 ? .05 : e.sourceEvent.deltaMode ? 1 : .002) * s, o = r[2] * 2 ** (a * i);
			t.scaleTo(o);
		}, f = [0, 0], p = Id().on("start", (e) => {
			(e.sourceEvent.type === "mousedown" || e.sourceEvent.type === "touchstart") && (f = [e.sourceEvent.clientX ?? e.sourceEvent.touches[0].clientX, e.sourceEvent.clientY ?? e.sourceEvent.touches[0].clientY]);
		}).on("zoom", c ? (i) => {
			let s = n();
			if (i.sourceEvent.type !== "mousemove" && i.sourceEvent.type !== "touchmove" || !t) return;
			let c = [i.sourceEvent.clientX ?? i.sourceEvent.touches[0].clientX, i.sourceEvent.clientY ?? i.sourceEvent.touches[0].clientY], l = [c[0] - f[0], c[1] - f[1]];
			f = c;
			let d = r() * Math.max(s[2], Math.log(s[2])) * (u ? -1 : 1), p = {
				x: s[0] - l[0] * d,
				y: s[1] - l[1] * d
			}, m = [[0, 0], [a, o]];
			t.setViewportConstrained({
				x: p.x,
				y: p.y,
				zoom: s[2]
			}, m, e);
		} : null).on("zoom.wheel", l ? d : null);
		i.call(p, {});
	}
	function o() {
		i.on("zoom", null);
	}
	return {
		update: a,
		destroy: o,
		pointer: oc
	};
}
var em = (e) => ({
	x: e.x,
	y: e.y,
	zoom: e.k
}), tm = ({ x: e, y: t, zoom: n }) => Ed.translate(e, t).scale(n), nm = (e, t) => e.target.closest(`.${t}`), rm = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), im = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, am = (e, t = 0, n = im, r = () => {}) => {
	let i = typeof t == "number" && t > 0;
	return i || r(), i ? e.transition().duration(t).ease(n).on("end", r) : e;
}, om = (e) => {
	let t = e.ctrlKey && Nf() ? 10 : 1;
	return -e.deltaY * (e.deltaMode === 1 ? .05 : e.deltaMode ? 1 : .002) * t;
};
function sm({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: i, panOnScrollSpeed: a, zoomOnPinch: o, onPanZoomStart: s, onPanZoom: c, onPanZoomEnd: l }) {
	return (u) => {
		if (nm(u, t)) return u.ctrlKey && u.preventDefault(), !1;
		u.preventDefault(), u.stopImmediatePropagation();
		let d = n.property("__zoom").k || 1;
		if (u.ctrlKey && o) {
			let e = oc(u), t = d * 2 ** om(u);
			r.scaleTo(n, t, e, u);
			return;
		}
		let f = u.deltaMode === 1 ? 20 : 1, p = i === Hd.Vertical ? 0 : u.deltaX * f, m = i === Hd.Horizontal ? 0 : u.deltaY * f;
		!Nf() && u.shiftKey && i !== Hd.Vertical && (p = u.deltaY * f, m = 0), r.translateBy(n, -(p / d) * a, -(m / d) * a, { internal: !0 });
		let h = em(n.property("__zoom"));
		clearTimeout(e.panScrollTimeout), e.isPanScrolling ? c?.(u, h) : (e.isPanScrolling = !0, s?.(u, h)), e.panScrollTimeout = setTimeout(() => {
			l?.(u, h), e.isPanScrolling = !1;
		}, 150);
	};
}
function cm({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
	return function(r, i) {
		let a = r.type === "wheel", o = !t && a && !r.ctrlKey, s = nm(r, e);
		if (r.ctrlKey && a && s && r.preventDefault(), o || s) return null;
		r.preventDefault(), n.call(this, r, i);
	};
}
function lm({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
	return (r) => {
		if (r.sourceEvent?.internal) return;
		let i = em(r.transform);
		e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = i, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, i);
	};
}
function um({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: i }) {
	return (a) => {
		e.usedRightMouseButton = !!(n && rm(t, e.mouseButton ?? 0)), a.sourceEvent?.sync || r([
			a.transform.x,
			a.transform.y,
			a.transform.k
		]), i && !a.sourceEvent?.internal && i?.(a.sourceEvent, em(a.transform));
	};
}
function dm({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: i, onPaneContextMenu: a }) {
	return (o) => {
		if (!o.sourceEvent?.internal && (e.isZoomingOrPanning = !1, a && rm(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && o.sourceEvent && a(o.sourceEvent), e.usedRightMouseButton = !1, r(!1), i)) {
			let t = em(o.transform);
			e.prevViewport = t, clearTimeout(e.timerId), e.timerId = setTimeout(() => {
				i?.(o.sourceEvent, t);
			}, n ? 150 : 0);
		}
	};
}
function fm({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: i, zoomOnDoubleClick: a, userSelectionActive: o, noWheelClassName: s, noPanClassName: c, lib: l, connectionInProgress: u }) {
	return (d) => {
		let f = e || t, p = n && d.ctrlKey, m = d.type === "wheel";
		if (d.button === 1 && d.type === "mousedown" && (nm(d, `${l}-flow__node`) || nm(d, `${l}-flow__edge`))) return !0;
		if (!r && !f && !i && !a && !n || o || u && !m || nm(d, s) && m || nm(d, c) && (!m || i && m && !e) || !n && d.ctrlKey && m) return !1;
		if (!n && d.type === "touchstart" && d.touches?.length > 1) return d.preventDefault(), !1;
		if (!f && !i && !p && m || !r && (d.type === "mousedown" || d.type === "touchstart") || Array.isArray(r) && !r.includes(d.button) && d.type === "mousedown") return !1;
		let h = Array.isArray(r) && r.includes(d.button) || !d.button || d.button <= 1;
		return (!d.ctrlKey || m) && h;
	};
}
function pm({ domNode: e, minZoom: t, maxZoom: n, translateExtent: r, viewport: i, onPanZoom: a, onPanZoomStart: o, onPanZoomEnd: s, onDraggingChange: c }) {
	let l = {
		isZoomingOrPanning: !1,
		usedRightMouseButton: !1,
		prevViewport: {},
		mouseButton: 0,
		timerId: void 0,
		panScrollTimeout: void 0,
		isPanScrolling: !1
	}, u = e.getBoundingClientRect(), d = [[0, 0], [u.width, u.height]];
	(typeof ResizeObserver < "u" ? new ResizeObserver((e) => {
		let t = e[0];
		t && (d = [[0, 0], [t.contentRect.width, t.contentRect.height]]);
	}) : null)?.observe(e);
	let f = Id().extent(() => d).scaleExtent([t, n]).translateExtent(r), p = ic(e).call(f);
	y({
		x: i.x,
		y: i.y,
		zoom: uf(i.zoom, t, n)
	}, [[0, 0], [u.width, u.height]], r);
	let m = p.on("wheel.zoom"), h = p.on("dblclick.zoom");
	f.wheelDelta(om);
	async function g(e, t) {
		return p ? new Promise((n) => {
			f?.interpolate(t?.interpolate === "linear" ? Sl : Il).transform(am(p, t?.duration, t?.ease, () => n(!0)), e);
		}) : !1;
	}
	function _({ noWheelClassName: e, noPanClassName: t, onPaneContextMenu: n, userSelectionActive: r, panOnScroll: i, panOnDrag: u, panOnScrollMode: d, panOnScrollSpeed: g, preventScrolling: _, zoomOnPinch: y, zoomOnScroll: b, zoomOnDoubleClick: x, zoomActivationKeyPressed: S, lib: C, onTransformChange: w, connectionInProgress: T, paneClickDistance: E, selectionOnDrag: D }) {
		r && !l.isZoomingOrPanning && v();
		let ee = i && !S && !r;
		f.clickDistance(D ? Infinity : !wf(E) || E < 0 ? 0 : E);
		let te = ee ? sm({
			zoomPanValues: l,
			noWheelClassName: e,
			d3Selection: p,
			d3Zoom: f,
			panOnScrollMode: d,
			panOnScrollSpeed: g,
			zoomOnPinch: y,
			onPanZoomStart: o,
			onPanZoom: a,
			onPanZoomEnd: s
		}) : cm({
			noWheelClassName: e,
			preventScrolling: _,
			d3ZoomHandler: m
		});
		p.on("wheel.zoom", te, { passive: !1 });
		let ne = lm({
			zoomPanValues: l,
			onDraggingChange: c,
			onPanZoomStart: o
		});
		f.on("start", ne);
		let re = um({
			zoomPanValues: l,
			panOnDrag: u,
			onPaneContextMenu: !!n,
			onPanZoom: a,
			onTransformChange: w
		});
		f.on("zoom", re);
		let ie = dm({
			zoomPanValues: l,
			panOnDrag: u,
			panOnScroll: i,
			onPaneContextMenu: n,
			onPanZoomEnd: s,
			onDraggingChange: c
		});
		f.on("end", ie);
		let ae = fm({
			zoomActivationKeyPressed: S,
			panOnDrag: u,
			zoomOnScroll: b,
			panOnScroll: i,
			zoomOnDoubleClick: x,
			zoomOnPinch: y,
			userSelectionActive: r,
			noPanClassName: t,
			noWheelClassName: e,
			lib: C,
			connectionInProgress: T
		});
		f.filter(ae), x ? p.on("dblclick.zoom", h) : p.on("dblclick.zoom", null);
	}
	function v() {
		f.on("zoom", null);
	}
	async function y(e, t, n) {
		let r = tm(e), i = f?.constrain()(r, t, n);
		return i && await g(i), i;
	}
	async function b(e, t) {
		let n = tm(e);
		return await g(n, t), n;
	}
	function x(e) {
		if (p) {
			let t = tm(e), n = p.property("__zoom");
			(n.k !== e.zoom || n.x !== e.x || n.y !== e.y) && f?.transform(p, t, null, { sync: !0 });
		}
	}
	function S() {
		let e = p ? Dd(p.node()) : {
			x: 0,
			y: 0,
			k: 1
		};
		return {
			x: e.x,
			y: e.y,
			zoom: e.k
		};
	}
	async function C(e, t) {
		return p ? new Promise((n) => {
			f?.interpolate(t?.interpolate === "linear" ? Sl : Il).scaleTo(am(p, t?.duration, t?.ease, () => n(!0)), e);
		}) : !1;
	}
	async function w(e, t) {
		return p ? new Promise((n) => {
			f?.interpolate(t?.interpolate === "linear" ? Sl : Il).scaleBy(am(p, t?.duration, t?.ease, () => n(!0)), e);
		}) : !1;
	}
	function T(e) {
		f?.scaleExtent(e);
	}
	function E(e) {
		f?.translateExtent(e);
	}
	function D(e) {
		let t = !wf(e) || e < 0 ? 0 : e;
		f?.clickDistance(t);
	}
	return {
		update: _,
		destroy: v,
		setViewport: b,
		setViewportConstrained: y,
		getViewport: S,
		scaleTo: C,
		scaleBy: w,
		setScaleExtent: T,
		setTranslateExtent: E,
		syncViewport: x,
		setClickDistance: D
	};
}
var mm;
(function(e) {
	e.Line = "line", e.Handle = "handle";
})(mm ||= {});
var hm = Tf("Svelte Flow", "https://svelteflow.dev/");
function gm(e, t, n = {}) {
	return np(e, t, {
		...n,
		onError: n.onError ?? hm
	});
}
function _m() {
	let e = {};
	return [(t) => {
		if (t && !pt(e)) throw Error(t);
		return dt(e);
	}, (t) => ft(e, t)];
}
var [vm, ym] = _m(), [bm, xm] = _m(), [Sm, Cm] = _m(), wm = /* @__PURE__ */ new Set([
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
]), Tm = /* @__PURE__ */ U("<div><!></div>");
function Em(e, t) {
	M(t, !0);
	let n = X(t, "id", 7, null), r = X(t, "type", 7, "source"), i = X(t, "position", 23, () => Q.Top), a = X(t, "style", 7), o = X(t, "class", 7), s = X(t, "isConnectable", 7), c = X(t, "isConnectableStart", 7, !0), l = X(t, "isConnectableEnd", 7, !0), u = X(t, "isValidConnection", 7), d = X(t, "onconnect", 7), f = X(t, "ondisconnect", 7), p = X(t, "children", 7), m = /* @__PURE__ */ Ua(t, wm), h = vm("Handle must be used within a Custom Node component"), g = bm("Handle must be used within a Custom Node component"), _ = /* @__PURE__ */ P(() => r() === "target"), v = /* @__PURE__ */ P(() => s() === void 0 ? g.value : s()), y = fh(), b = /* @__PURE__ */ P(() => y.ariaLabelConfig), x = null;
	Zn(() => {
		if (d() || f()) {
			y.edges;
			let e = y.connectionLookup.get(`${h}-${r()}${n() ? `-${n()}` : ""}`);
			if (x && !Jd(e, x)) {
				let t = e ?? /* @__PURE__ */ new Map();
				Yd(x, t, f()), Yd(t, x, d());
			}
			x = new Map(e);
		}
	});
	let S = /* @__PURE__ */ P(() => {
		if (!y.connection.inProgress) return [
			!1,
			!1,
			!1,
			!1,
			null
		];
		let { fromHandle: e, toHandle: t, isValid: i } = y.connection, a = e && e.nodeId === h && e.type === r() && e.id === n(), o = t && t.nodeId === h && t.type === r() && t.id === n();
		return [
			!0,
			a,
			o,
			y.connectionMode === Vd.Strict ? e?.type !== r() : h !== e?.nodeId || n() !== e?.id,
			o && i
		];
	}), C = /* @__PURE__ */ P(() => ie(H(S), 5)), w = /* @__PURE__ */ P(() => H(C)[0]), T = /* @__PURE__ */ P(() => H(C)[1]), E = /* @__PURE__ */ P(() => H(C)[2]), ee = /* @__PURE__ */ P(() => H(C)[3]), te = /* @__PURE__ */ P(() => H(C)[4]);
	function ne(e) {
		let t = y.onbeforeconnect ? y.onbeforeconnect(e) : e;
		t && (y.addEdge(t), y.onconnect?.(e));
	}
	function re(e) {
		let t = Wf(e);
		e.currentTarget && (t && e.button === 0 || !t) && Qp.onPointerDown(e, {
			handleId: n(),
			nodeId: h,
			isTarget: H(_),
			connectionRadius: y.connectionRadius,
			domNode: y.domNode,
			nodeLookup: y.nodeLookup,
			connectionMode: y.connectionMode,
			lib: "svelte",
			autoPanOnConnect: y.autoPanOnConnect,
			autoPanSpeed: y.autoPanSpeed,
			flowId: y.flowId,
			isValidConnection: u() || ((...e) => y.isValidConnection?.(...e) ?? !0),
			updateConnection: y.updateConnection,
			cancelConnection: y.cancelConnection,
			panBy: y.panBy,
			onConnect: ne,
			onConnectStart: y.onconnectstart,
			onConnectEnd: (...e) => y.onconnectend?.(...e),
			getTransform: () => [
				y.viewport.x,
				y.viewport.y,
				y.viewport.zoom
			],
			getFromHandle: () => y.connection.fromHandle,
			dragThreshold: y.connectionDragThreshold,
			handleDomNode: e.currentTarget
		});
	}
	function ae(e) {
		if (!h || !y.clickConnectStartHandle && !c()) return;
		if (!y.clickConnectStartHandle) {
			y.onclickconnectstart?.(e, {
				nodeId: h,
				handleId: n(),
				handleType: r()
			}), y.clickConnectStartHandle = {
				nodeId: h,
				type: r(),
				id: n()
			};
			return;
		}
		let t = Vf(e.target), i = u() ?? y.isValidConnection, { connectionMode: a, clickConnectStartHandle: o, flowId: s, nodeLookup: l } = y, { connection: d, isValid: f } = Qp.isValid(e, {
			handle: {
				nodeId: h,
				id: n(),
				type: r()
			},
			connectionMode: a,
			fromNodeId: o.nodeId,
			fromHandleId: o.id ?? null,
			fromType: o.type,
			isValidConnection: i,
			flowId: s,
			doc: t,
			lib: "svelte",
			nodeLookup: l
		});
		f && d && ne(d);
		let p = structuredClone(st(y.connection));
		delete p.inProgress, p.toPosition = p.toHandle ? p.toHandle.position : null, y.onclickconnectend?.(e, p), y.clickConnectStartHandle = null;
	}
	var oe = {
		get id() {
			return n();
		},
		set id(e = null) {
			n(e), F();
		},
		get type() {
			return r();
		},
		set type(e = "source") {
			r(e), F();
		},
		get position() {
			return i();
		},
		set position(e = Q.Top) {
			i(e), F();
		},
		get style() {
			return a();
		},
		set style(e) {
			a(e), F();
		},
		get class() {
			return o();
		},
		set class(e) {
			o(e), F();
		},
		get isConnectable() {
			return s();
		},
		set isConnectable(e) {
			s(e), F();
		},
		get isConnectableStart() {
			return c();
		},
		set isConnectableStart(e = !0) {
			c(e), F();
		},
		get isConnectableEnd() {
			return l();
		},
		set isConnectableEnd(e = !0) {
			l(e), F();
		},
		get isValidConnection() {
			return u();
		},
		set isValidConnection(e) {
			u(e), F();
		},
		get onconnect() {
			return d();
		},
		set onconnect(e) {
			d(e), F();
		},
		get ondisconnect() {
			return f();
		},
		set ondisconnect(e) {
			f(e), F();
		},
		get children() {
			return p();
		},
		set children(e) {
			p(e), F();
		}
	}, O = Tm(), se = () => {};
	return Oa(O, () => ({
		"data-handleid": n(),
		"data-nodeid": h,
		"data-handlepos": i(),
		"data-id": `${y.flowId ?? ""}-${h ?? ""}-${n() ?? "null" ?? ""}-${r() ?? ""}`,
		class: [
			"svelte-flow__handle",
			`svelte-flow__handle-${i()}`,
			y.noDragClass,
			y.noPanClass,
			i(),
			o()
		],
		onmousedown: re,
		ontouchstart: re,
		onclick: y.clickConnect ? ae : void 0,
		onkeypress: se,
		style: a(),
		role: "button",
		"aria-label": H(b)["handle.ariaLabel"],
		tabindex: "-1",
		...m,
		[ma]: {
			valid: H(te),
			connectingto: H(E),
			connectingfrom: H(T),
			source: !H(_),
			target: H(_),
			connectablestart: c(),
			connectableend: l(),
			connectable: H(v),
			connectionindicator: H(v) && (!H(w) || H(ee)) && (H(w) || y.clickConnectStartHandle ? l() : c())
		}
	})), q(R(O), () => p() ?? D), A(O), K(e, O), N(oe);
}
Z(Em, {
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
}, [], [], { mode: "open" });
var Dm = /* @__PURE__ */ U("<!> <!>", 1);
function Om(e, t) {
	M(t, !0);
	let n = X(t, "data", 7), r = X(t, "targetPosition", 23, () => Q.Top), i = X(t, "sourcePosition", 23, () => Q.Bottom);
	var a = {
		get data() {
			return n();
		},
		set data(e) {
			n(e), F();
		},
		get targetPosition() {
			return r();
		},
		set targetPosition(e = Q.Top) {
			r(e), F();
		},
		get sourcePosition() {
			return i();
		},
		set sourcePosition(e = Q.Bottom) {
			i(e), F();
		}
	}, o = Dm(), s = z(o);
	Em(s, {
		type: "target",
		get position() {
			return r();
		}
	});
	var c = B(s);
	return Em(B(c), {
		type: "source",
		get position() {
			return i();
		}
	}), V(() => Si(c, ` ${n()?.label ?? ""} `)), K(e, o), N(a);
}
Z(Om, {
	data: {},
	targetPosition: {},
	sourcePosition: {}
}, [], [], { mode: "open" });
var km = /* @__PURE__ */ U(" <!>", 1);
function Am(e, t) {
	M(t, !0);
	let n = X(t, "data", 23, () => ({ label: "Node" })), r = X(t, "sourcePosition", 23, () => Q.Bottom);
	var i = {
		get data() {
			return n();
		},
		set data(e = { label: "Node" }) {
			n(e), F();
		},
		get sourcePosition() {
			return r();
		},
		set sourcePosition(e = Q.Bottom) {
			r(e), F();
		}
	};
	j();
	var a = km(), o = z(a);
	return Em(B(o), {
		type: "source",
		get position() {
			return r();
		}
	}), V(() => Si(o, `${n()?.label ?? ""} `)), K(e, a), N(i);
}
Z(Am, {
	data: {},
	sourcePosition: {}
}, [], [], { mode: "open" });
var jm = /* @__PURE__ */ U(" <!>", 1);
function Mm(e, t) {
	M(t, !0);
	let n = X(t, "data", 23, () => ({ label: "Node" })), r = X(t, "targetPosition", 23, () => Q.Top);
	var i = {
		get data() {
			return n();
		},
		set data(e = { label: "Node" }) {
			n(e), F();
		},
		get targetPosition() {
			return r();
		},
		set targetPosition(e = Q.Top) {
			r(e), F();
		}
	};
	j();
	var a = jm(), o = z(a);
	return Em(B(o), {
		type: "target",
		get position() {
			return r();
		}
	}), V(() => Si(o, `${n()?.label ?? ""} `)), K(e, a), N(i);
}
Z(Mm, {
	data: {},
	targetPosition: {}
}, [], [], { mode: "open" });
function Nm(e, t) {}
Z(Nm, {}, [], [], { mode: "open" });
function Pm(e, t, n) {
	if (!n || !t) return;
	let r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
	r && r.appendChild(e);
}
function Fm(e, t) {
	let n = /* @__PURE__ */ P(fh), r = /* @__PURE__ */ P(() => H(n).domNode), i;
	return H(r) ? Pm(e, H(r), t) : i = Qn(() => {
		Yn(() => {
			Pm(e, H(r), t), i?.();
		});
	}), {
		async update(t) {
			Pm(e, H(r), t);
		},
		destroy() {
			e.parentNode && e.parentNode.removeChild(e), i?.();
		}
	};
}
function Im() {
	let e = /* @__PURE__ */ I(typeof window > "u");
	if (H(e)) {
		let t = Qn(() => {
			Yn(() => {
				L(e, !1), t?.();
			});
		});
	}
	return { get value() {
		return H(e);
	} };
}
var Lm = (e) => Qd(e), Rm = (e) => Zd(e);
function zm(e) {
	return e === void 0 ? void 0 : `${e}px`;
}
var Bm = {
	ArrowUp: {
		x: 0,
		y: -1
	},
	ArrowDown: {
		x: 0,
		y: 1
	},
	ArrowLeft: {
		x: -1,
		y: 0
	},
	ArrowRight: {
		x: 1,
		y: 0
	}
}, Vm = /* @__PURE__ */ new Set([
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
]), Hm = /* @__PURE__ */ U("<div><!></div>"), Um = {
	hash: "svelte-17ryymr",
	code: ".transparent.svelte-17ryymr {background:transparent;}"
};
function Wm(e, t) {
	M(t, !0), Zi(e, Um);
	let n = X(t, "x", 7, 0), r = X(t, "y", 7, 0), i = X(t, "width", 7), a = X(t, "height", 7), o = X(t, "selectEdgeOnClick", 7, !1), s = X(t, "transparent", 7, !1), c = X(t, "class", 7), l = X(t, "children", 7), u = /* @__PURE__ */ Ua(t, Vm), d = fh(), f = Sm("EdgeLabel must be used within a Custom Edge component"), p = /* @__PURE__ */ P(() => d.visible.edges.get(f)?.zIndex);
	var m = {
		get x() {
			return n();
		},
		set x(e = 0) {
			n(e), F();
		},
		get y() {
			return r();
		},
		set y(e = 0) {
			r(e), F();
		},
		get width() {
			return i();
		},
		set width(e) {
			i(e), F();
		},
		get height() {
			return a();
		},
		set height(e) {
			a(e), F();
		},
		get selectEdgeOnClick() {
			return o();
		},
		set selectEdgeOnClick(e = !1) {
			o(e), F();
		},
		get transparent() {
			return s();
		},
		set transparent(e = !1) {
			s(e), F();
		},
		get class() {
			return c();
		},
		set class(e) {
			c(e), F();
		},
		get children() {
			return l();
		},
		set children(e) {
			l(e), F();
		}
	}, h = Hm(), g = () => {
		o() && f && d.handleEdgeSelection(f);
	};
	return Oa(h, (e) => ({
		class: [
			"svelte-flow__edge-label",
			{ transparent: s() },
			c()
		],
		tabindex: "-1",
		onclick: g,
		...u,
		[ha]: e
	}), [() => ({
		display: Im().value ? "none" : void 0,
		cursor: o() ? "pointer" : void 0,
		transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
		"pointer-events": "all",
		width: zm(i()),
		height: zm(a()),
		"z-index": H(p)
	})], void 0, void 0, "svelte-17ryymr"), q(R(h), () => l() ?? D), A(h), Qi(h, (e, t) => Fm?.(e, t), () => "edge-labels"), K(e, h), N(m);
}
Z(Wm, {
	x: {},
	y: {},
	width: {},
	height: {},
	selectEdgeOnClick: {},
	transparent: {},
	class: {},
	children: {}
}, [], [], { mode: "open" });
var Gm = /* @__PURE__ */ new Set([
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
]), Km = /* @__PURE__ */ W("<path></path>"), qm = /* @__PURE__ */ W("<path fill=\"none\"></path><!><!>", 1);
function Jm(e, t) {
	M(t, !0);
	let n = X(t, "id", 7), r = X(t, "path", 7), i = X(t, "label", 7), a = X(t, "labelX", 7), o = X(t, "labelY", 7), s = X(t, "labelStyle", 7), c = X(t, "markerStart", 7), l = X(t, "markerEnd", 7), u = X(t, "style", 7), d = X(t, "interactionWidth", 7, 20), f = X(t, "class", 7), p = /* @__PURE__ */ Ua(t, Gm);
	var m = {
		get id() {
			return n();
		},
		set id(e) {
			n(e), F();
		},
		get path() {
			return r();
		},
		set path(e) {
			r(e), F();
		},
		get label() {
			return i();
		},
		set label(e) {
			i(e), F();
		},
		get labelX() {
			return a();
		},
		set labelX(e) {
			a(e), F();
		},
		get labelY() {
			return o();
		},
		set labelY(e) {
			o(e), F();
		},
		get labelStyle() {
			return s();
		},
		set labelStyle(e) {
			s(e), F();
		},
		get markerStart() {
			return c();
		},
		set markerStart(e) {
			c(e), F();
		},
		get markerEnd() {
			return l();
		},
		set markerEnd(e) {
			l(e), F();
		},
		get style() {
			return u();
		},
		set style(e) {
			u(e), F();
		},
		get interactionWidth() {
			return d();
		},
		set interactionWidth(e = 20) {
			d(e), F();
		},
		get class() {
			return f();
		},
		set class(e) {
			f(e), F();
		}
	}, h = qm(), g = z(h), _ = B(g), v = (e) => {
		var t = Km();
		Oa(t, () => ({
			d: r(),
			"stroke-opacity": 0,
			"stroke-width": d(),
			fill: "none",
			class: "svelte-flow__edge-interaction",
			...p
		})), K(e, t);
	};
	J(_, (e) => {
		d() > 0 && e(v);
	});
	var y = B(_), b = (e) => {
		Wm(e, {
			get x() {
				return a();
			},
			get y() {
				return o();
			},
			get style() {
				return s();
			},
			selectEdgeOnClick: !0,
			children: (e, t) => {
				j();
				var n = ui();
				V(() => Si(n, i())), K(e, n);
			},
			$$slots: { default: !0 }
		});
	};
	return J(y, (e) => {
		i() && e(b);
	}), V(() => {
		Y(g, "id", n()), Y(g, "d", r()), ca(g, 0, na(["svelte-flow__edge-path", f()])), Y(g, "marker-start", c()), Y(g, "marker-end", l()), ua(g, u());
	}), K(e, h), N(m);
}
Z(Jm, {
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
}, [], [], { mode: "open" });
function Ym(e, t) {
	M(t, !0);
	let n = X(t, "id", 7), r = X(t, "interactionWidth", 7), i = X(t, "label", 7), a = X(t, "labelStyle", 7), o = X(t, "markerEnd", 7), s = X(t, "markerStart", 7), c = X(t, "pathOptions", 7), l = X(t, "sourcePosition", 7), u = X(t, "sourceX", 7), d = X(t, "sourceY", 7), f = X(t, "style", 7), p = X(t, "targetPosition", 7), m = X(t, "targetX", 7), h = X(t, "targetY", 7), g = /* @__PURE__ */ P(() => Xf({
		sourceX: u(),
		sourceY: d(),
		targetX: m(),
		targetY: h(),
		sourcePosition: l(),
		targetPosition: p(),
		curvature: c()?.curvature
	})), _ = /* @__PURE__ */ P(() => ie(H(g), 3)), v = /* @__PURE__ */ P(() => H(_)[0]), y = /* @__PURE__ */ P(() => H(_)[1]), b = /* @__PURE__ */ P(() => H(_)[2]);
	return Jm(e, {
		get id() {
			return n();
		},
		get path() {
			return H(v);
		},
		get labelX() {
			return H(y);
		},
		get labelY() {
			return H(b);
		},
		get label() {
			return i();
		},
		get labelStyle() {
			return a();
		},
		get markerStart() {
			return s();
		},
		get markerEnd() {
			return o();
		},
		get interactionWidth() {
			return r();
		},
		get style() {
			return f();
		}
	}), N({
		get id() {
			return n();
		},
		set id(e) {
			n(e), F();
		},
		get interactionWidth() {
			return r();
		},
		set interactionWidth(e) {
			r(e), F();
		},
		get label() {
			return i();
		},
		set label(e) {
			i(e), F();
		},
		get labelStyle() {
			return a();
		},
		set labelStyle(e) {
			a(e), F();
		},
		get markerEnd() {
			return o();
		},
		set markerEnd(e) {
			o(e), F();
		},
		get markerStart() {
			return s();
		},
		set markerStart(e) {
			s(e), F();
		},
		get pathOptions() {
			return c();
		},
		set pathOptions(e) {
			c(e), F();
		},
		get sourcePosition() {
			return l();
		},
		set sourcePosition(e) {
			l(e), F();
		},
		get sourceX() {
			return u();
		},
		set sourceX(e) {
			u(e), F();
		},
		get sourceY() {
			return d();
		},
		set sourceY(e) {
			d(e), F();
		},
		get style() {
			return f();
		},
		set style(e) {
			f(e), F();
		},
		get targetPosition() {
			return p();
		},
		set targetPosition(e) {
			p(e), F();
		},
		get targetX() {
			return m();
		},
		set targetX(e) {
			m(e), F();
		},
		get targetY() {
			return h();
		},
		set targetY(e) {
			h(e), F();
		}
	});
}
Z(Ym, {
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
}, [], [], { mode: "open" });
function Xm(e, t) {
	M(t, !0);
	let n = X(t, "interactionWidth", 7), r = X(t, "label", 7), i = X(t, "labelStyle", 7), a = X(t, "style", 7), o = X(t, "markerEnd", 7), s = X(t, "markerStart", 7), c = X(t, "sourcePosition", 7), l = X(t, "sourceX", 7), u = X(t, "sourceY", 7), d = X(t, "targetPosition", 7), f = X(t, "targetX", 7), p = X(t, "targetY", 7), m = /* @__PURE__ */ P(() => lp({
		sourceX: l(),
		sourceY: u(),
		targetX: f(),
		targetY: p(),
		sourcePosition: c(),
		targetPosition: d()
	})), h = /* @__PURE__ */ P(() => ie(H(m), 3)), g = /* @__PURE__ */ P(() => H(h)[0]), _ = /* @__PURE__ */ P(() => H(h)[1]), v = /* @__PURE__ */ P(() => H(h)[2]);
	return Jm(e, {
		get path() {
			return H(g);
		},
		get labelX() {
			return H(_);
		},
		get labelY() {
			return H(v);
		},
		get label() {
			return r();
		},
		get labelStyle() {
			return i();
		},
		get markerStart() {
			return s();
		},
		get markerEnd() {
			return o();
		},
		get interactionWidth() {
			return n();
		},
		get style() {
			return a();
		}
	}), N({
		get interactionWidth() {
			return n();
		},
		set interactionWidth(e) {
			n(e), F();
		},
		get label() {
			return r();
		},
		set label(e) {
			r(e), F();
		},
		get labelStyle() {
			return i();
		},
		set labelStyle(e) {
			i(e), F();
		},
		get style() {
			return a();
		},
		set style(e) {
			a(e), F();
		},
		get markerEnd() {
			return o();
		},
		set markerEnd(e) {
			o(e), F();
		},
		get markerStart() {
			return s();
		},
		set markerStart(e) {
			s(e), F();
		},
		get sourcePosition() {
			return c();
		},
		set sourcePosition(e) {
			c(e), F();
		},
		get sourceX() {
			return l();
		},
		set sourceX(e) {
			l(e), F();
		},
		get sourceY() {
			return u();
		},
		set sourceY(e) {
			u(e), F();
		},
		get targetPosition() {
			return d();
		},
		set targetPosition(e) {
			d(e), F();
		},
		get targetX() {
			return f();
		},
		set targetX(e) {
			f(e), F();
		},
		get targetY() {
			return p();
		},
		set targetY(e) {
			p(e), F();
		}
	});
}
Z(Xm, {
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
}, [], [], { mode: "open" });
function Zm(e, t) {
	M(t, !0);
	let n = X(t, "sourceX", 7), r = X(t, "sourceY", 7), i = X(t, "targetX", 7), a = X(t, "targetY", 7), o = X(t, "label", 7), s = X(t, "labelStyle", 7), c = X(t, "markerStart", 7), l = X(t, "markerEnd", 7), u = X(t, "interactionWidth", 7), d = X(t, "style", 7), f = /* @__PURE__ */ P(() => rp({
		sourceX: n(),
		sourceY: r(),
		targetX: i(),
		targetY: a()
	})), p = /* @__PURE__ */ P(() => ie(H(f), 3)), m = /* @__PURE__ */ P(() => H(p)[0]), h = /* @__PURE__ */ P(() => H(p)[1]), g = /* @__PURE__ */ P(() => H(p)[2]);
	return Jm(e, {
		get path() {
			return H(m);
		},
		get labelX() {
			return H(h);
		},
		get labelY() {
			return H(g);
		},
		get label() {
			return o();
		},
		get labelStyle() {
			return s();
		},
		get markerStart() {
			return c();
		},
		get markerEnd() {
			return l();
		},
		get interactionWidth() {
			return u();
		},
		get style() {
			return d();
		}
	}), N({
		get sourceX() {
			return n();
		},
		set sourceX(e) {
			n(e), F();
		},
		get sourceY() {
			return r();
		},
		set sourceY(e) {
			r(e), F();
		},
		get targetX() {
			return i();
		},
		set targetX(e) {
			i(e), F();
		},
		get targetY() {
			return a();
		},
		set targetY(e) {
			a(e), F();
		},
		get label() {
			return o();
		},
		set label(e) {
			o(e), F();
		},
		get labelStyle() {
			return s();
		},
		set labelStyle(e) {
			s(e), F();
		},
		get markerStart() {
			return c();
		},
		set markerStart(e) {
			c(e), F();
		},
		get markerEnd() {
			return l();
		},
		set markerEnd(e) {
			l(e), F();
		},
		get interactionWidth() {
			return u();
		},
		set interactionWidth(e) {
			u(e), F();
		},
		get style() {
			return d();
		},
		set style(e) {
			d(e), F();
		}
	});
}
Z(Zm, {
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
}, [], [], { mode: "open" });
function Qm(e, t) {
	M(t, !0);
	let n = X(t, "sourceX", 7), r = X(t, "sourceY", 7), i = X(t, "sourcePosition", 7), a = X(t, "targetX", 7), o = X(t, "targetY", 7), s = X(t, "targetPosition", 7), c = X(t, "label", 7), l = X(t, "labelStyle", 7), u = X(t, "markerStart", 7), d = X(t, "markerEnd", 7), f = X(t, "interactionWidth", 7), p = X(t, "style", 7), m = /* @__PURE__ */ P(() => lp({
		sourceX: n(),
		sourceY: r(),
		targetX: a(),
		targetY: o(),
		sourcePosition: i(),
		targetPosition: s(),
		borderRadius: 0
	})), h = /* @__PURE__ */ P(() => ie(H(m), 3)), g = /* @__PURE__ */ P(() => H(h)[0]), _ = /* @__PURE__ */ P(() => H(h)[1]), v = /* @__PURE__ */ P(() => H(h)[2]);
	return Jm(e, {
		get path() {
			return H(g);
		},
		get labelX() {
			return H(_);
		},
		get labelY() {
			return H(v);
		},
		get label() {
			return c();
		},
		get labelStyle() {
			return l();
		},
		get markerStart() {
			return u();
		},
		get markerEnd() {
			return d();
		},
		get interactionWidth() {
			return f();
		},
		get style() {
			return p();
		}
	}), N({
		get sourceX() {
			return n();
		},
		set sourceX(e) {
			n(e), F();
		},
		get sourceY() {
			return r();
		},
		set sourceY(e) {
			r(e), F();
		},
		get sourcePosition() {
			return i();
		},
		set sourcePosition(e) {
			i(e), F();
		},
		get targetX() {
			return a();
		},
		set targetX(e) {
			a(e), F();
		},
		get targetY() {
			return o();
		},
		set targetY(e) {
			o(e), F();
		},
		get targetPosition() {
			return s();
		},
		set targetPosition(e) {
			s(e), F();
		},
		get label() {
			return c();
		},
		set label(e) {
			c(e), F();
		},
		get labelStyle() {
			return l();
		},
		set labelStyle(e) {
			l(e), F();
		},
		get markerStart() {
			return u();
		},
		set markerStart(e) {
			u(e), F();
		},
		get markerEnd() {
			return d();
		},
		set markerEnd(e) {
			d(e), F();
		},
		get interactionWidth() {
			return f();
		},
		set interactionWidth(e) {
			f(e), F();
		},
		get style() {
			return p();
		},
		set style(e) {
			p(e), F();
		}
	});
}
Z(Qm, {
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
}, [], [], { mode: "open" });
var $m = class extends Map {
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ I(0);
	#n = /* @__PURE__ */ I(0);
	#r = Pr || -1;
	constructor(e) {
		if (super(), e) {
			for (var [t, n] of e) super.set(t, n);
			this.#n.v = super.size;
		}
	}
	#i(e) {
		return Pr === this.#r ? /* @__PURE__ */ I(e) : Sn(e);
	}
	has(e) {
		var t = this.#e, n = t.get(e);
		if (n === void 0) if (super.has(e)) n = this.#i(0), t.set(e, n);
		else return H(this.#t), !1;
		return H(n), !0;
	}
	forEach(e, t) {
		this.#a(), super.forEach(e, t);
	}
	get(e) {
		var t = this.#e, n = t.get(e);
		if (n === void 0) if (super.has(e)) n = this.#i(0), t.set(e, n);
		else {
			H(this.#t);
			return;
		}
		return H(n), super.get(e);
	}
	set(e, t) {
		var n = this.#e, r = n.get(e), i = super.get(e), a = super.set(e, t), o = this.#t;
		if (r === void 0) r = this.#i(0), n.set(e, r), L(this.#n, super.size), Dn(o);
		else if (i !== t) {
			Dn(r);
			var s = o.reactions === null ? null : new Set(o.reactions);
			(s === null || !r.reactions?.every((e) => s.has(e))) && Dn(o);
		}
		return a;
	}
	delete(e) {
		var t = this.#e, n = t.get(e), r = super.delete(e);
		return n !== void 0 && (t.delete(e), L(n, -1)), r && (L(this.#n, super.size), Dn(this.#t)), r;
	}
	clear() {
		if (super.size !== 0) {
			super.clear();
			var e = this.#e;
			L(this.#n, 0);
			for (var t of e.values()) L(t, -1);
			Dn(this.#t), e.clear();
		}
	}
	#a() {
		H(this.#t);
		var e = this.#e;
		if (this.#n.v !== e.size) {
			for (var t of super.keys()) if (!e.has(t)) {
				var n = this.#i(0);
				e.set(t, n);
			}
		}
		for ([, n] of this.#e) H(n);
	}
	keys() {
		return H(this.#t), super.keys();
	}
	values() {
		return this.#a(), super.values();
	}
	entries() {
		return this.#a(), super.entries();
	}
	[Symbol.iterator]() {
		return this.entries();
	}
	get size() {
		return H(this.#n), super.size;
	}
}, eh = class {
	#e;
	#t;
	constructor(e, t) {
		this.#e = e, this.#t = Lt(t);
	}
	get current() {
		return this.#t(), this.#e();
	}
}, th = /\(.+\)/, nh = /* @__PURE__ */ new Set([
	"all",
	"print",
	"screen",
	"and",
	"or",
	"not",
	"only"
]), rh = class extends eh {
	constructor(e, t) {
		let n = th.test(e) || e.split(/[\s,]+/).some((e) => nh.has(e.trim())) ? e : `(${e})`, r = window.matchMedia(n);
		super(() => r.matches, (e) => $r(r, "change", e));
	}
};
function ih(e, t, n, r) {
	let i = /* @__PURE__ */ new Map();
	return rf(e, {
		x: 0,
		y: 0,
		width: n,
		height: r
	}, t, !0).forEach((e) => {
		i.set(e.id, e);
	}), i;
}
function ah(e) {
	let { edges: t, defaultEdgeOptions: n, nodeLookup: r, previousEdges: i, connectionMode: a, onerror: o, onlyRenderVisible: s, elevateEdgesOnSelect: c, zIndexMode: l } = e, u = /* @__PURE__ */ new Map();
	for (let d of t) {
		let t = r.get(d.source), f = r.get(d.target);
		if (!t || !f) continue;
		if (s) {
			let { visibleNodes: n, transform: r, width: i, height: a } = e;
			if ($f({
				sourceNode: t,
				targetNode: f,
				width: i,
				height: a,
				transform: r
			})) n.set(t.id, t), n.set(f.id, f);
			else continue;
		}
		let p = i.get(d.id);
		if (p && d === p.edge && t == p.sourceNode && f == p.targetNode) {
			u.set(d.id, p);
			continue;
		}
		let m = dp({
			id: d.id,
			sourceNode: t,
			targetNode: f,
			sourceHandle: d.sourceHandle || null,
			targetHandle: d.targetHandle || null,
			connectionMode: a,
			onError: o
		});
		m && u.set(d.id, {
			...n,
			...d,
			...m,
			zIndex: Qf({
				selected: d.selected,
				zIndex: d.zIndex ?? n.zIndex,
				sourceNode: t,
				targetNode: f,
				elevateOnSelect: c,
				zIndexMode: l
			}),
			sourceNode: t,
			targetNode: f,
			edge: d
		});
	}
	return u;
}
var oh = Tf("Svelte Flow", "https://svelteflow.dev/"), sh = {
	input: Am,
	output: Mm,
	default: Om,
	group: Nm
}, ch = {
	straight: Zm,
	smoothstep: Xm,
	default: Ym,
	step: Qm
};
function lh(e, t, n, r, i, a) {
	return t && !n && r && i ? Mf(nf(a, { filter: (e) => !!((e.width || e.initialWidth) && (e.height || e.initialHeight)) }), r, i, .5, 2, .1) : n ?? {
		x: 0,
		y: 0,
		zoom: 1
	};
}
function uh(e) {
	class t {
		#e = /* @__PURE__ */ P(() => e.props.id ?? "1");
		get flowId() {
			return H(this.#e);
		}
		set flowId(e) {
			L(this.#e, e);
		}
		#t = /* @__PURE__ */ I(null);
		get domNode() {
			return H(this.#t);
		}
		set domNode(e) {
			L(this.#t, e);
		}
		#n = /* @__PURE__ */ I(null);
		get panZoom() {
			return H(this.#n);
		}
		set panZoom(e) {
			L(this.#n, e);
		}
		#r = /* @__PURE__ */ I(e.width ?? 0);
		get width() {
			return H(this.#r);
		}
		set width(e) {
			L(this.#r, e);
		}
		#i = /* @__PURE__ */ I(e.height ?? 0);
		get height() {
			return H(this.#i);
		}
		set height(e) {
			L(this.#i, e);
		}
		#a = /* @__PURE__ */ I(e.props.zIndexMode ?? "basic");
		get zIndexMode() {
			return H(this.#a);
		}
		set zIndexMode(e) {
			L(this.#a, e);
		}
		#o = /* @__PURE__ */ P(() => {
			let { nodesInitialized: t } = Ep(e.nodes, this.nodeLookup, this.parentLookup, {
				nodeExtent: this.nodeExtent,
				nodeOrigin: this.nodeOrigin,
				elevateNodesOnSelect: e.props.elevateNodesOnSelect ?? !0,
				checkEquality: !0,
				zIndexMode: this.zIndexMode
			});
			return this.fitViewQueued && t && (this.fitViewOptions?.duration ? this.resolveFitView() : queueMicrotask(() => {
				this.resolveFitView();
			})), t;
		});
		get nodesInitialized() {
			return H(this.#o);
		}
		set nodesInitialized(e) {
			L(this.#o, e);
		}
		#s = /* @__PURE__ */ P(() => this.panZoom !== null);
		get viewportInitialized() {
			return H(this.#s);
		}
		set viewportInitialized(e) {
			L(this.#s, e);
		}
		#c = /* @__PURE__ */ P(() => (Fp(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
		get _edges() {
			return H(this.#c);
		}
		set _edges(e) {
			L(this.#c, e);
		}
		get nodes() {
			return this.nodesInitialized, e.nodes;
		}
		set nodes(t) {
			e.nodes = t;
		}
		get edges() {
			return this._edges;
		}
		set edges(t) {
			e.edges = t;
		}
		_prevSelectedNodes = [];
		_prevSelectedNodeIds = /* @__PURE__ */ new Set();
		#l = /* @__PURE__ */ P(() => {
			let e = this._prevSelectedNodeIds.size, t = /* @__PURE__ */ new Set(), n = this.nodes.filter((e) => (e.selected && (t.add(e.id), this._prevSelectedNodeIds.delete(e.id)), e.selected));
			return (e !== t.size || this._prevSelectedNodeIds.size > 0) && (this._prevSelectedNodes = n), this._prevSelectedNodeIds = t, this._prevSelectedNodes;
		});
		get selectedNodes() {
			return H(this.#l);
		}
		set selectedNodes(e) {
			L(this.#l, e);
		}
		_prevSelectedEdges = [];
		_prevSelectedEdgeIds = /* @__PURE__ */ new Set();
		#u = /* @__PURE__ */ P(() => {
			let e = this._prevSelectedEdgeIds.size, t = /* @__PURE__ */ new Set(), n = this.edges.filter((e) => (e.selected && (t.add(e.id), this._prevSelectedEdgeIds.delete(e.id)), e.selected));
			return (e !== t.size || this._prevSelectedEdgeIds.size > 0) && (this._prevSelectedEdges = n), this._prevSelectedEdgeIds = t, this._prevSelectedEdges;
		});
		get selectedEdges() {
			return H(this.#u);
		}
		set selectedEdges(e) {
			L(this.#u, e);
		}
		selectionChangeHandlers = /* @__PURE__ */ new Map();
		nodeLookup = /* @__PURE__ */ new Map();
		parentLookup = /* @__PURE__ */ new Map();
		connectionLookup = /* @__PURE__ */ new Map();
		edgeLookup = /* @__PURE__ */ new Map();
		_prevVisibleEdges = /* @__PURE__ */ new Map();
		#d = /* @__PURE__ */ P(() => {
			let { nodes: t, _edges: n, _prevVisibleEdges: r, nodeLookup: i, connectionMode: a, onerror: o, onlyRenderVisibleElements: s, defaultEdgeOptions: c, zIndexMode: l } = this, u, d, f = {
				edges: n,
				defaultEdgeOptions: c,
				previousEdges: r,
				nodeLookup: i,
				connectionMode: a,
				elevateEdgesOnSelect: e.props.elevateEdgesOnSelect ?? !0,
				zIndexMode: l,
				onerror: o
			};
			if (s) {
				let { viewport: e, width: t, height: n } = this, r = [
					e.x,
					e.y,
					e.zoom
				];
				u = ih(i, r, t, n), d = ah({
					...f,
					onlyRenderVisible: !0,
					visibleNodes: u,
					transform: r,
					width: t,
					height: n
				});
			} else u = this.nodeLookup, d = ah(f);
			return {
				nodes: u,
				edges: d
			};
		});
		get visible() {
			return H(this.#d);
		}
		set visible(e) {
			L(this.#d, e);
		}
		#f = /* @__PURE__ */ P(() => e.props.nodesDraggable ?? !0);
		get nodesDraggable() {
			return H(this.#f);
		}
		set nodesDraggable(e) {
			L(this.#f, e);
		}
		#p = /* @__PURE__ */ P(() => e.props.nodesConnectable ?? !0);
		get nodesConnectable() {
			return H(this.#p);
		}
		set nodesConnectable(e) {
			L(this.#p, e);
		}
		#m = /* @__PURE__ */ P(() => e.props.elementsSelectable ?? !0);
		get elementsSelectable() {
			return H(this.#m);
		}
		set elementsSelectable(e) {
			L(this.#m, e);
		}
		#h = /* @__PURE__ */ P(() => e.props.nodesFocusable ?? !0);
		get nodesFocusable() {
			return H(this.#h);
		}
		set nodesFocusable(e) {
			L(this.#h, e);
		}
		#g = /* @__PURE__ */ P(() => e.props.edgesFocusable ?? !0);
		get edgesFocusable() {
			return H(this.#g);
		}
		set edgesFocusable(e) {
			L(this.#g, e);
		}
		#_ = /* @__PURE__ */ P(() => e.props.disableKeyboardA11y ?? !1);
		get disableKeyboardA11y() {
			return H(this.#_);
		}
		set disableKeyboardA11y(e) {
			L(this.#_, e);
		}
		#v = /* @__PURE__ */ P(() => e.props.minZoom ?? .5);
		get minZoom() {
			return H(this.#v);
		}
		set minZoom(e) {
			L(this.#v, e);
		}
		#y = /* @__PURE__ */ P(() => e.props.maxZoom ?? 2);
		get maxZoom() {
			return H(this.#y);
		}
		set maxZoom(e) {
			L(this.#y, e);
		}
		#b = /* @__PURE__ */ P(() => e.props.nodeOrigin ?? [0, 0]);
		get nodeOrigin() {
			return H(this.#b);
		}
		set nodeOrigin(e) {
			L(this.#b, e);
		}
		#x = /* @__PURE__ */ P(() => e.props.nodeExtent ?? Rd);
		get nodeExtent() {
			return H(this.#x);
		}
		set nodeExtent(e) {
			L(this.#x, e);
		}
		#S = /* @__PURE__ */ P(() => e.props.translateExtent ?? Rd);
		get translateExtent() {
			return H(this.#S);
		}
		set translateExtent(e) {
			L(this.#S, e);
		}
		#C = /* @__PURE__ */ P(() => e.props.defaultEdgeOptions ?? {});
		get defaultEdgeOptions() {
			return H(this.#C);
		}
		set defaultEdgeOptions(e) {
			L(this.#C, e);
		}
		#w = /* @__PURE__ */ P(() => e.props.nodeDragThreshold ?? 1);
		get nodeDragThreshold() {
			return H(this.#w);
		}
		set nodeDragThreshold(e) {
			L(this.#w, e);
		}
		#T = /* @__PURE__ */ P(() => e.props.autoPanOnNodeDrag ?? !0);
		get autoPanOnNodeDrag() {
			return H(this.#T);
		}
		set autoPanOnNodeDrag(e) {
			L(this.#T, e);
		}
		#E = /* @__PURE__ */ P(() => e.props.autoPanOnConnect ?? !0);
		get autoPanOnConnect() {
			return H(this.#E);
		}
		set autoPanOnConnect(e) {
			L(this.#E, e);
		}
		#D = /* @__PURE__ */ P(() => e.props.autoPanOnNodeFocus ?? !0);
		get autoPanOnNodeFocus() {
			return H(this.#D);
		}
		set autoPanOnNodeFocus(e) {
			L(this.#D, e);
		}
		#O = /* @__PURE__ */ P(() => e.props.autoPanSpeed ?? 15);
		get autoPanSpeed() {
			return H(this.#O);
		}
		set autoPanSpeed(e) {
			L(this.#O, e);
		}
		#k = /* @__PURE__ */ P(() => e.props.connectionDragThreshold ?? 1);
		get connectionDragThreshold() {
			return H(this.#k);
		}
		set connectionDragThreshold(e) {
			L(this.#k, e);
		}
		fitViewQueued = e.props.fitView ?? !1;
		fitViewOptions = e.props.fitViewOptions;
		fitViewResolver = null;
		#A = /* @__PURE__ */ P(() => e.props.snapGrid ?? null);
		get snapGrid() {
			return H(this.#A);
		}
		set snapGrid(e) {
			L(this.#A, e);
		}
		#j = /* @__PURE__ */ I(!1);
		get dragging() {
			return H(this.#j);
		}
		set dragging(e) {
			L(this.#j, e);
		}
		#M = /* @__PURE__ */ I(null);
		get selectionRect() {
			return H(this.#M);
		}
		set selectionRect(e) {
			L(this.#M, e);
		}
		#N = /* @__PURE__ */ I(!1);
		get selectionKeyPressed() {
			return H(this.#N);
		}
		set selectionKeyPressed(e) {
			L(this.#N, e);
		}
		#P = /* @__PURE__ */ I(!1);
		get multiselectionKeyPressed() {
			return H(this.#P);
		}
		set multiselectionKeyPressed(e) {
			L(this.#P, e);
		}
		#F = /* @__PURE__ */ I(!1);
		get deleteKeyPressed() {
			return H(this.#F);
		}
		set deleteKeyPressed(e) {
			L(this.#F, e);
		}
		#I = /* @__PURE__ */ I(!1);
		get panActivationKeyPressed() {
			return H(this.#I);
		}
		set panActivationKeyPressed(e) {
			L(this.#I, e);
		}
		#L = /* @__PURE__ */ I(!1);
		get zoomActivationKeyPressed() {
			return H(this.#L);
		}
		set zoomActivationKeyPressed(e) {
			L(this.#L, e);
		}
		#R = /* @__PURE__ */ I(null);
		get selectionRectMode() {
			return H(this.#R);
		}
		set selectionRectMode(e) {
			L(this.#R, e);
		}
		#z = /* @__PURE__ */ I("");
		get ariaLiveMessage() {
			return H(this.#z);
		}
		set ariaLiveMessage(e) {
			L(this.#z, e);
		}
		#B = /* @__PURE__ */ P(() => e.props.selectionMode ?? Ud.Partial);
		get selectionMode() {
			return H(this.#B);
		}
		set selectionMode(e) {
			L(this.#B, e);
		}
		#V = /* @__PURE__ */ P(() => ({
			...sh,
			...e.props.nodeTypes
		}));
		get nodeTypes() {
			return H(this.#V);
		}
		set nodeTypes(e) {
			L(this.#V, e);
		}
		#H = /* @__PURE__ */ P(() => ({
			...ch,
			...e.props.edgeTypes
		}));
		get edgeTypes() {
			return H(this.#H);
		}
		set edgeTypes(e) {
			L(this.#H, e);
		}
		#U = /* @__PURE__ */ P(() => e.props.noPanClass ?? "nopan");
		get noPanClass() {
			return H(this.#U);
		}
		set noPanClass(e) {
			L(this.#U, e);
		}
		#W = /* @__PURE__ */ P(() => e.props.noDragClass ?? "nodrag");
		get noDragClass() {
			return H(this.#W);
		}
		set noDragClass(e) {
			L(this.#W, e);
		}
		#G = /* @__PURE__ */ P(() => e.props.noWheelClass ?? "nowheel");
		get noWheelClass() {
			return H(this.#G);
		}
		set noWheelClass(e) {
			L(this.#G, e);
		}
		#K = /* @__PURE__ */ P(() => Rf(e.props.ariaLabelConfig));
		get ariaLabelConfig() {
			return H(this.#K);
		}
		set ariaLabelConfig(e) {
			L(this.#K, e);
		}
		#q = /* @__PURE__ */ I(lh(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
		get _viewport() {
			return H(this.#q);
		}
		set _viewport(e) {
			L(this.#q, e);
		}
		get viewport() {
			return e.viewport ?? this._viewport;
		}
		set viewport(t) {
			e.viewport &&= t, this._viewport = t;
		}
		#J = /* @__PURE__ */ I(Wd);
		get _connection() {
			return H(this.#J);
		}
		set _connection(e) {
			L(this.#J, e);
		}
		#Y = /* @__PURE__ */ P(() => this._connection.inProgress ? {
			...this._connection,
			to: Df(this._connection.to, [
				this.viewport.x,
				this.viewport.y,
				this.viewport.zoom
			])
		} : this._connection);
		get connection() {
			return H(this.#Y);
		}
		set connection(e) {
			L(this.#Y, e);
		}
		#X = /* @__PURE__ */ P(() => e.props.connectionMode ?? Vd.Strict);
		get connectionMode() {
			return H(this.#X);
		}
		set connectionMode(e) {
			L(this.#X, e);
		}
		#Z = /* @__PURE__ */ P(() => e.props.connectionRadius ?? 20);
		get connectionRadius() {
			return H(this.#Z);
		}
		set connectionRadius(e) {
			L(this.#Z, e);
		}
		#Q = /* @__PURE__ */ P(() => e.props.isValidConnection ?? (() => !0));
		get isValidConnection() {
			return H(this.#Q);
		}
		set isValidConnection(e) {
			L(this.#Q, e);
		}
		#$ = /* @__PURE__ */ P(() => e.props.selectNodesOnDrag ?? !0);
		get selectNodesOnDrag() {
			return H(this.#$);
		}
		set selectNodesOnDrag(e) {
			L(this.#$, e);
		}
		#ee = /* @__PURE__ */ P(() => e.props.defaultMarkerColor === void 0 ? "#b1b1b7" : e.props.defaultMarkerColor);
		get defaultMarkerColor() {
			return H(this.#ee);
		}
		set defaultMarkerColor(e) {
			L(this.#ee, e);
		}
		#te = /* @__PURE__ */ P(() => gp(e.edges, {
			defaultColor: this.defaultMarkerColor,
			id: this.flowId,
			defaultMarkerStart: this.defaultEdgeOptions.markerStart,
			defaultMarkerEnd: this.defaultEdgeOptions.markerEnd
		}));
		get markers() {
			return H(this.#te);
		}
		set markers(e) {
			L(this.#te, e);
		}
		#ne = /* @__PURE__ */ P(() => e.props.onlyRenderVisibleElements ?? !1);
		get onlyRenderVisibleElements() {
			return H(this.#ne);
		}
		set onlyRenderVisibleElements(e) {
			L(this.#ne, e);
		}
		#re = /* @__PURE__ */ P(() => e.props.onflowerror ?? oh);
		get onerror() {
			return H(this.#re);
		}
		set onerror(e) {
			L(this.#re, e);
		}
		#ie = /* @__PURE__ */ P(() => e.props.ondelete);
		get ondelete() {
			return H(this.#ie);
		}
		set ondelete(e) {
			L(this.#ie, e);
		}
		#ae = /* @__PURE__ */ P(() => e.props.onbeforedelete);
		get onbeforedelete() {
			return H(this.#ae);
		}
		set onbeforedelete(e) {
			L(this.#ae, e);
		}
		#oe = /* @__PURE__ */ P(() => e.props.onbeforeconnect);
		get onbeforeconnect() {
			return H(this.#oe);
		}
		set onbeforeconnect(e) {
			L(this.#oe, e);
		}
		#se = /* @__PURE__ */ P(() => e.props.onconnect);
		get onconnect() {
			return H(this.#se);
		}
		set onconnect(e) {
			L(this.#se, e);
		}
		#ce = /* @__PURE__ */ P(() => e.props.onconnectstart);
		get onconnectstart() {
			return H(this.#ce);
		}
		set onconnectstart(e) {
			L(this.#ce, e);
		}
		#le = /* @__PURE__ */ P(() => e.props.onconnectend);
		get onconnectend() {
			return H(this.#le);
		}
		set onconnectend(e) {
			L(this.#le, e);
		}
		#ue = /* @__PURE__ */ P(() => e.props.onbeforereconnect);
		get onbeforereconnect() {
			return H(this.#ue);
		}
		set onbeforereconnect(e) {
			L(this.#ue, e);
		}
		#de = /* @__PURE__ */ P(() => e.props.onreconnect);
		get onreconnect() {
			return H(this.#de);
		}
		set onreconnect(e) {
			L(this.#de, e);
		}
		#fe = /* @__PURE__ */ P(() => e.props.onreconnectstart);
		get onreconnectstart() {
			return H(this.#fe);
		}
		set onreconnectstart(e) {
			L(this.#fe, e);
		}
		#pe = /* @__PURE__ */ P(() => e.props.onreconnectend);
		get onreconnectend() {
			return H(this.#pe);
		}
		set onreconnectend(e) {
			L(this.#pe, e);
		}
		#me = /* @__PURE__ */ P(() => e.props.clickConnect ?? !0);
		get clickConnect() {
			return H(this.#me);
		}
		set clickConnect(e) {
			L(this.#me, e);
		}
		#he = /* @__PURE__ */ P(() => e.props.onclickconnectstart);
		get onclickconnectstart() {
			return H(this.#he);
		}
		set onclickconnectstart(e) {
			L(this.#he, e);
		}
		#ge = /* @__PURE__ */ P(() => e.props.onclickconnectend);
		get onclickconnectend() {
			return H(this.#ge);
		}
		set onclickconnectend(e) {
			L(this.#ge, e);
		}
		#_e = /* @__PURE__ */ I(null);
		get clickConnectStartHandle() {
			return H(this.#_e);
		}
		set clickConnectStartHandle(e) {
			L(this.#_e, e);
		}
		#ve = /* @__PURE__ */ P(() => e.props.onselectiondrag);
		get onselectiondrag() {
			return H(this.#ve);
		}
		set onselectiondrag(e) {
			L(this.#ve, e);
		}
		#ye = /* @__PURE__ */ P(() => e.props.onselectiondragstart);
		get onselectiondragstart() {
			return H(this.#ye);
		}
		set onselectiondragstart(e) {
			L(this.#ye, e);
		}
		#be = /* @__PURE__ */ P(() => e.props.onselectiondragstop);
		get onselectiondragstop() {
			return H(this.#be);
		}
		set onselectiondragstop(e) {
			L(this.#be, e);
		}
		resolveFitView = async () => {
			this.panZoom && (await sf({
				nodes: this.nodeLookup,
				width: this.width,
				height: this.height,
				panZoom: this.panZoom,
				minZoom: this.minZoom,
				maxZoom: this.maxZoom
			}, this.fitViewOptions), this.fitViewResolver?.resolve(!0), this.fitViewQueued = !1, this.fitViewOptions = void 0, this.fitViewResolver = null);
		};
		_prefersDark = new rh("(prefers-color-scheme: dark)", e.props.colorModeSSR === "dark");
		#xe = /* @__PURE__ */ P(() => e.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : e.props.colorMode ?? "light");
		get colorMode() {
			return H(this.#xe);
		}
		set colorMode(e) {
			L(this.#xe, e);
		}
		constructor() {}
		resetStoreValues() {
			this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = Wd, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? {
				x: 0,
				y: 0,
				zoom: 1
			}, this.ariaLiveMessage = "";
		}
	}
	return new t();
}
var dh = Ld.error001("svelte");
function fh() {
	let e = dt(ph);
	if (!e) throw Error(dh);
	return e.getStore();
}
var ph = Symbol();
function mh(e) {
	let t = uh(e);
	function n(e) {
		t.nodeTypes = {
			...sh,
			...e
		};
	}
	function r(e) {
		t.edgeTypes = {
			...ch,
			...e
		};
	}
	function i(e) {
		t.edges = gm(e, t.edges, { onError: t.onerror });
	}
	let a = (e, n = !1) => {
		t.nodes = t.nodes.map((r) => {
			if (t.connection.inProgress && t.connection.fromNode.id === r.id) {
				let e = t.nodeLookup.get(r.id);
				e && (t.connection = {
					...t.connection,
					from: pp(e, t.connection.fromHandle, Q.Left, !0)
				});
			}
			let i = e.get(r.id);
			return i ? {
				...r,
				position: i.position,
				dragging: n
			} : r;
		});
	};
	function o(e) {
		let { changes: n, updatedInternals: r } = Mp(e, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin, t.nodeExtent, t.zIndexMode);
		if (!r) return;
		Cp(t.nodeLookup, t.parentLookup, {
			nodeOrigin: t.nodeOrigin,
			nodeExtent: t.nodeExtent,
			zIndexMode: t.zIndexMode
		}), t.fitViewQueued && t.resolveFitView();
		let i = /* @__PURE__ */ new Map();
		for (let e of n) {
			let n = t.nodeLookup.get(e.id)?.internals.userNode;
			if (!n) continue;
			let r = { ...n };
			switch (e.type) {
				case "dimensions": {
					let t = {
						...r.measured,
						...e.dimensions
					};
					e.setAttributes && (r.width = e.dimensions?.width ?? r.width, r.height = e.dimensions?.height ?? r.height), r.measured = t;
					break;
				}
				case "position":
					r.position = e.position ?? r.position;
					break;
			}
			i.set(e.id, r);
		}
		t.nodes = t.nodes.map((e) => i.get(e.id) ?? e);
	}
	function s(e) {
		let n = t.fitViewResolver ?? Promise.withResolvers();
		return t.fitViewQueued = !0, t.fitViewOptions = e, t.fitViewResolver = n, t.nodes = [...t.nodes], n.promise;
	}
	async function c(e, n, r) {
		let i = r?.zoom === void 0 ? t.maxZoom : r.zoom, a = t.panZoom;
		return a ? (await a.setViewport({
			x: t.width / 2 - e * i,
			y: t.height / 2 - n * i,
			zoom: i
		}, {
			duration: r?.duration,
			ease: r?.ease,
			interpolate: r?.interpolate
		}), !0) : !1;
	}
	async function l(e, n) {
		let r = t.panZoom;
		return r ? r.scaleBy(e, n) : !1;
	}
	async function u(e) {
		return l(1.2, e);
	}
	function d(e) {
		return l(1 / 1.2, e);
	}
	function f(e) {
		let n = t.panZoom;
		n && (n.setScaleExtent([e, t.maxZoom]), t.minZoom = e);
	}
	function p(e) {
		let n = t.panZoom;
		n && (n.setScaleExtent([t.minZoom, e]), t.maxZoom = e);
	}
	function m(e) {
		let n = t.panZoom;
		n && (n.setTranslateExtent(e), t.translateExtent = e);
	}
	function h(e, t = null) {
		let n = !1, r = e.map((e) => (!t || t.has(e.id)) && e.selected ? (n = !0, {
			...e,
			selected: !1
		}) : e);
		return [n, r];
	}
	function g(e) {
		let n = e?.nodes ? new Set(e.nodes.map((e) => e.id)) : null, [r, i] = h(t.nodes, n);
		r && (t.nodes = i);
		let a = e?.edges ? new Set(e.edges.map((e) => e.id)) : null, [o, s] = h(t.edges, a);
		o && (t.edges = s);
	}
	function _(e) {
		let n = t.multiselectionKeyPressed;
		t.nodes = t.nodes.map((t) => {
			let r = e.includes(t.id), i = n && t.selected || r;
			return !!t.selected === i ? t : {
				...t,
				selected: i
			};
		}), n || g({ nodes: [] });
	}
	function v(e) {
		let n = t.multiselectionKeyPressed;
		t.edges = t.edges.map((t) => {
			let r = e.includes(t.id), i = n && t.selected || r;
			return !!t.selected === i ? t : {
				...t,
				selected: i
			};
		}), n || g({ edges: [] });
	}
	function y(e, n, r) {
		let i = t.nodeLookup.get(e);
		if (!i) {
			t.onerror("012", Ld.error012(e));
			return;
		}
		t.selectionRect = null, t.selectionRectMode = null, i.selected ? (n || i.selected && t.multiselectionKeyPressed) && (g({
			nodes: [i.internals.userNode],
			edges: []
		}), requestAnimationFrame(() => r?.blur())) : _([e]);
	}
	function b(e) {
		let n = t.edgeLookup.get(e);
		if (!n) {
			t.onerror("016", Ld.error016(e));
			return;
		}
		(n.selectable || t.elementsSelectable && n.selectable === void 0) && (t.selectionRect = null, t.selectionRectMode = null, n.selected ? n.selected && t.multiselectionKeyPressed && g({
			nodes: [],
			edges: [n]
		}) : v([e]));
	}
	function x(e, n) {
		let { nodeExtent: r, snapGrid: i, nodeOrigin: o, nodeLookup: s, nodesDraggable: c, onerror: l } = t, u = /* @__PURE__ */ new Map(), d = i?.[0] ?? 5, f = i?.[1] ?? 5, p = e.x * d * n, m = e.y * f * n;
		for (let e of s.values()) {
			if (!(e.selected && (e.draggable || c && e.draggable === void 0))) continue;
			let t = {
				x: e.internals.positionAbsolute.x + p,
				y: e.internals.positionAbsolute.y + m
			};
			i && (t = Ef(t, i));
			let { position: n, positionAbsolute: a } = cf({
				nodeId: e.id,
				nextPosition: t,
				nodeLookup: s,
				nodeExtent: r,
				nodeOrigin: o,
				onError: l
			});
			e.position = n, e.internals.positionAbsolute = a, u.set(e.id, e);
		}
		a(u);
	}
	function S(e) {
		return Np({
			delta: e,
			panZoom: t.panZoom,
			transform: [
				t.viewport.x,
				t.viewport.y,
				t.viewport.zoom
			],
			translateExtent: t.translateExtent,
			width: t.width,
			height: t.height
		});
	}
	let C = (e) => {
		t._connection = { ...e };
	};
	function w() {
		t._connection = Wd;
	}
	function T() {
		t.resetStoreValues(), g();
	}
	return Object.assign(t, {
		setNodeTypes: n,
		setEdgeTypes: r,
		addEdge: i,
		updateNodePositions: a,
		updateNodeInternals: o,
		zoomIn: u,
		zoomOut: d,
		fitView: s,
		setCenter: c,
		setMinZoom: f,
		setMaxZoom: p,
		setTranslateExtent: m,
		unselectNodesAndEdges: g,
		addSelectedNodes: _,
		addSelectedEdges: v,
		handleNodeSelection: y,
		handleEdgeSelection: b,
		moveSelectedNodes: x,
		panBy: S,
		updateConnection: C,
		cancelConnection: w,
		reset: T
	});
}
function hh(e, t) {
	let { minZoom: n, maxZoom: r, initialViewport: i, onPanZoomStart: a, onPanZoom: o, onPanZoomEnd: s, translateExtent: c, setPanZoomInstance: l, onDraggingChange: u, onTransformChange: d } = t, f = pm({
		domNode: e,
		minZoom: n,
		maxZoom: r,
		translateExtent: c,
		viewport: i,
		onPanZoom: o,
		onPanZoomStart: a,
		onPanZoomEnd: s,
		onDraggingChange: u
	}), p = f.getViewport();
	return (i.x !== p.x || i.y !== p.y || i.zoom !== p.zoom) && d([
		p.x,
		p.y,
		p.zoom
	]), l(f), f.update(t), { update(e) {
		f.update(e);
	} };
}
var gh = /* @__PURE__ */ U("<div class=\"svelte-flow__zoom svelte-flow__container\"><!></div>");
function _h(e, t) {
	M(t, !0);
	let n = X(t, "store", 15), r = X(t, "panOnScrollMode", 7), i = X(t, "preventScrolling", 7), a = X(t, "zoomOnScroll", 7), o = X(t, "zoomOnDoubleClick", 7), s = X(t, "zoomOnPinch", 7), c = X(t, "panOnDrag", 7), l = X(t, "panOnScroll", 7), u = X(t, "panOnScrollSpeed", 7), d = X(t, "paneClickDistance", 7), f = X(t, "selectionOnDrag", 7), p = X(t, "onmovestart", 7), m = X(t, "onmove", 7), h = X(t, "onmoveend", 7), g = X(t, "oninit", 7), _ = X(t, "children", 7), v = /* @__PURE__ */ P(() => n().panActivationKeyPressed || c()), y = /* @__PURE__ */ P(() => n().panActivationKeyPressed || l()), { viewport: b } = n(), x = !1;
	Yn(() => {
		!x && n().viewportInitialized && (g()?.(), x = !0);
	});
	var S = {
		get store() {
			return n();
		},
		set store(e) {
			n(e), F();
		},
		get panOnScrollMode() {
			return r();
		},
		set panOnScrollMode(e) {
			r(e), F();
		},
		get preventScrolling() {
			return i();
		},
		set preventScrolling(e) {
			i(e), F();
		},
		get zoomOnScroll() {
			return a();
		},
		set zoomOnScroll(e) {
			a(e), F();
		},
		get zoomOnDoubleClick() {
			return o();
		},
		set zoomOnDoubleClick(e) {
			o(e), F();
		},
		get zoomOnPinch() {
			return s();
		},
		set zoomOnPinch(e) {
			s(e), F();
		},
		get panOnDrag() {
			return c();
		},
		set panOnDrag(e) {
			c(e), F();
		},
		get panOnScroll() {
			return l();
		},
		set panOnScroll(e) {
			l(e), F();
		},
		get panOnScrollSpeed() {
			return u();
		},
		set panOnScrollSpeed(e) {
			u(e), F();
		},
		get paneClickDistance() {
			return d();
		},
		set paneClickDistance(e) {
			d(e), F();
		},
		get selectionOnDrag() {
			return f();
		},
		set selectionOnDrag(e) {
			f(e), F();
		},
		get onmovestart() {
			return p();
		},
		set onmovestart(e) {
			p(e), F();
		},
		get onmove() {
			return m();
		},
		set onmove(e) {
			m(e), F();
		},
		get onmoveend() {
			return h();
		},
		set onmoveend(e) {
			h(e), F();
		},
		get oninit() {
			return g();
		},
		set oninit(e) {
			g(e), F();
		},
		get children() {
			return _();
		},
		set children(e) {
			_(e), F();
		}
	}, C = gh();
	return q(R(C), _), A(C), Qi(C, (e, t) => hh?.(e, t), () => ({
		viewport: n().viewport,
		minZoom: n().minZoom,
		maxZoom: n().maxZoom,
		initialViewport: b,
		onDraggingChange: (e) => {
			n(n().dragging = e, !0);
		},
		setPanZoomInstance: (e) => {
			n(n().panZoom = e, !0);
		},
		onPanZoomStart: p(),
		onPanZoom: m(),
		onPanZoomEnd: h(),
		zoomOnScroll: a(),
		zoomOnDoubleClick: o(),
		zoomOnPinch: s(),
		panOnScroll: H(y),
		panOnDrag: H(v),
		panOnScrollSpeed: u(),
		panOnScrollMode: r(),
		zoomActivationKeyPressed: n().zoomActivationKeyPressed,
		preventScrolling: typeof i() != "boolean" || i(),
		noPanClassName: n().noPanClass,
		noWheelClassName: n().noWheelClass,
		userSelectionActive: !!n().selectionRect,
		translateExtent: n().translateExtent,
		lib: "svelte",
		paneClickDistance: d(),
		selectionOnDrag: f(),
		onTransformChange: (e) => {
			n(n().viewport = {
				x: e[0],
				y: e[1],
				zoom: e[2]
			}, !0);
		},
		connectionInProgress: n().connection.inProgress
	})), K(e, C), N(S);
}
Z(_h, {
	store: {},
	panOnScrollMode: {},
	preventScrolling: {},
	zoomOnScroll: {},
	zoomOnDoubleClick: {},
	zoomOnPinch: {},
	panOnDrag: {},
	panOnScroll: {},
	panOnScrollSpeed: {},
	paneClickDistance: {},
	selectionOnDrag: {},
	onmovestart: {},
	onmove: {},
	onmoveend: {},
	oninit: {},
	children: {}
}, [], [], { mode: "open" });
function vh(e, t) {
	return (n) => {
		n.target === t && e?.(n);
	};
}
function yh(e) {
	return (t) => {
		let n = e.has(t.id);
		return !!t.selected === n ? t : {
			...t,
			selected: n
		};
	};
}
function bh(e, t) {
	if (e.size !== t.size) return !1;
	for (let n of e) if (!t.has(n)) return !1;
	return !0;
}
var xh = /* @__PURE__ */ U("<div><!></div>");
function Sh(e, t) {
	M(t, !0);
	let n = X(t, "store", 15), r = X(t, "panOnDrag", 7, !0), i = X(t, "paneClickDistance", 7, 1), a = X(t, "selectionOnDrag", 7), o = X(t, "autoPanOnSelection", 7, !0), s = X(t, "onpaneclick", 7), c = X(t, "onpanecontextmenu", 7), l = X(t, "onselectionstart", 7), u = X(t, "onselectionend", 7), d = X(t, "children", 7), f, p = null, m = !1, h = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set(), _ = /* @__PURE__ */ P(() => n().panActivationKeyPressed || r()), v = /* @__PURE__ */ P(() => n().selectionKeyPressed || !!n().selectionRect || a() && H(_) !== !0), y = /* @__PURE__ */ P(() => n().elementsSelectable && (H(v) || n().selectionRectMode === "user")), b = !1, x = 0, S = {
		x: 0,
		y: 0
	}, C = !1;
	function w(e) {
		if (p = f?.getBoundingClientRect(), !p) return;
		let t = e.target === f, r = !t && !!e.target.closest(".nokey"), i = a() && t || n().selectionKeyPressed;
		if (r || !H(v) || !i || e.button !== 0 || !e.isPrimary) return;
		e.target?.setPointerCapture?.(e.pointerId), b = !1, C = !1;
		let { x: o, y: s } = Gf(e, p), c = Df({
			x: o,
			y: s
		}, [
			n().viewport.x,
			n().viewport.y,
			n().viewport.zoom
		]);
		n(n().selectionRect = {
			width: 0,
			height: 0,
			startX: c.x,
			startY: c.y,
			x: o,
			y: s
		}, !0), t || (e.stopPropagation(), e.preventDefault());
	}
	function T(e, t) {
		if (n().selectionRect?.startX === void 0 || n().selectionRect.startY === void 0) return;
		let r = {
			x: n().selectionRect?.startX,
			y: n().selectionRect?.startY
		}, i = Of(r, [
			n().viewport.x,
			n().viewport.y,
			n().viewport.zoom
		]), a = {
			startX: r.x,
			startY: r.y,
			x: e < i.x ? e : i.x,
			y: t < i.y ? t : i.y,
			width: Math.abs(e - i.x),
			height: Math.abs(t - i.y)
		}, o = h, s = g;
		h = new Set(rf(n().nodeLookup, a, [
			n().viewport.x,
			n().viewport.y,
			n().viewport.zoom
		], n().selectionMode === Ud.Partial, !0).map((e) => e.id));
		let c = n().defaultEdgeOptions.selectable ?? !0;
		g = /* @__PURE__ */ new Set();
		for (let e of h) {
			let t = n().connectionLookup.get(e);
			if (t) for (let { edgeId: e } of t.values()) {
				let t = n().edgeLookup.get(e);
				t && (t.selectable ?? c) && g.add(e);
			}
		}
		bh(o, h) || n(n().nodes = n().nodes.map(yh(h)), !0), bh(s, g) || n(n().edges = n().edges.map(yh(g)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = a, !0);
	}
	function E() {
		if (!o() || !p) return;
		let [e, t] = mf(S, p, n().autoPanSpeed);
		n().panBy({
			x: e,
			y: t
		}).then((e) => {
			if (!b || !e) {
				x = requestAnimationFrame(E);
				return;
			}
			T(S.x, S.y), x = requestAnimationFrame(E);
		});
	}
	function D() {
		cancelAnimationFrame(x), x = 0, C = !1;
	}
	ji(() => {
		typeof window < "u" && D();
	});
	function ee(e) {
		if (!H(v) || !p || !n().selectionRect) return;
		let t = Gf(e, p);
		S = {
			x: t.x,
			y: t.y
		};
		let r = Of({
			x: n().selectionRect.startX,
			y: n().selectionRect.startY
		}, [
			n().viewport.x,
			n().viewport.y,
			n().viewport.zoom
		]);
		if (!b) {
			let a = n().selectionKeyPressed ? 0 : i();
			if (Math.hypot(t.x - r.x, t.y - r.y) <= a) return;
			n().unselectNodesAndEdges(), l()?.(e);
		}
		b = !0, C ||= (E(), !0), T(t.x, t.y);
	}
	function te(e) {
		if (!H(y)) {
			e.target === f && n().connection.inProgress && (m = !0);
			return;
		}
		e.button === 0 && (e.target?.releasePointerCapture?.(e.pointerId), !b && e.target === f && ae?.(e), n(n().selectionRect = null, !0), b && n(n().selectionRectMode = h.size > 0 ? "nodes" : null, !0), b && u()?.(e), D());
	}
	function ne(e) {
		e.target?.releasePointerCapture?.(e.pointerId), D();
	}
	let re = (e) => {
		if (Array.isArray(H(_)) && H(_).includes(2)) {
			e.preventDefault();
			return;
		}
		c()?.({ event: e });
	}, ie = (e) => {
		b &&= (e.stopPropagation(), !1);
	};
	function ae(e) {
		if (b || n().connection.inProgress || m) {
			b = !1, m = !1;
			return;
		}
		s()?.({ event: e }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0), n(n().selectionRect = null, !0);
	}
	var oe = {
		get store() {
			return n();
		},
		set store(e) {
			n(e), F();
		},
		get panOnDrag() {
			return r();
		},
		set panOnDrag(e = !0) {
			r(e), F();
		},
		get paneClickDistance() {
			return i();
		},
		set paneClickDistance(e = 1) {
			i(e), F();
		},
		get selectionOnDrag() {
			return a();
		},
		set selectionOnDrag(e) {
			a(e), F();
		},
		get autoPanOnSelection() {
			return o();
		},
		set autoPanOnSelection(e = !0) {
			o(e), F();
		},
		get onpaneclick() {
			return s();
		},
		set onpaneclick(e) {
			s(e), F();
		},
		get onpanecontextmenu() {
			return c();
		},
		set onpanecontextmenu(e) {
			c(e), F();
		},
		get onselectionstart() {
			return l();
		},
		set onselectionstart(e) {
			l(e), F();
		},
		get onselectionend() {
			return u();
		},
		set onselectionend(e) {
			u(e), F();
		},
		get children() {
			return d();
		},
		set children(e) {
			d(e), F();
		}
	}, O = xh();
	let se;
	var ce = /* @__PURE__ */ P(() => H(y) ? void 0 : vh(ae, f)), le = /* @__PURE__ */ P(() => vh(re, f));
	return q(R(O), d), A(O), za(O, (e) => f = e, () => f), V((e) => se = ca(O, 1, "svelte-flow__pane svelte-flow__container", null, se, e), [() => ({
		draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
		dragging: n().dragging,
		selection: H(v)
	})]), ti("click", O, function(...e) {
		H(ce)?.apply(this, e);
	}), ei("pointerdown", O, function(...e) {
		(H(y) ? w : void 0)?.apply(this, e);
	}, !0), ti("pointermove", O, function(...e) {
		(H(y) ? ee : void 0)?.apply(this, e);
	}), ti("pointerup", O, te), ei("pointercancel", O, function(...e) {
		(H(y) ? ne : void 0)?.apply(this, e);
	}), ti("contextmenu", O, function(...e) {
		H(le)?.apply(this, e);
	}), ei("click", O, function(...e) {
		(H(y) ? ie : void 0)?.apply(this, e);
	}, !0), K(e, O), N(oe);
}
ni([
	"click",
	"pointermove",
	"pointerup",
	"contextmenu"
]), Z(Sh, {
	store: {},
	panOnDrag: {},
	paneClickDistance: {},
	selectionOnDrag: {},
	autoPanOnSelection: {},
	onpaneclick: {},
	onpanecontextmenu: {},
	onselectionstart: {},
	onselectionend: {},
	children: {}
}, [], [], { mode: "open" });
var Ch = /* @__PURE__ */ U("<div class=\"svelte-flow__viewport xyflow__viewport svelte-flow__container\"><!></div>");
function wh(e, t) {
	M(t, !0);
	let n = X(t, "store", 15), r = X(t, "children", 7);
	var i = {
		get store() {
			return n();
		},
		set store(e) {
			n(e), F();
		},
		get children() {
			return r();
		},
		set children(e) {
			r(e), F();
		}
	}, a = Ch();
	let o;
	return q(R(a), r), A(a), V(() => o = ua(a, "", o, { transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})` })), K(e, a), N(i);
}
Z(wh, {
	store: {},
	children: {}
}, [], [], { mode: "open" });
function Th(e, t) {
	let { store: n, onDrag: r, onDragStart: i, onDragStop: a, onNodeMouseDown: o } = t, s = Hp({
		onDrag: r,
		onDragStart: i,
		onDragStop: a,
		onNodeMouseDown: o,
		getStoreItems: () => {
			let { snapGrid: e, viewport: t } = n;
			return {
				nodes: n.nodes,
				nodeLookup: n.nodeLookup,
				edges: n.edges,
				nodeExtent: n.nodeExtent,
				snapGrid: e || [0, 0],
				snapToGrid: !!e,
				nodeOrigin: n.nodeOrigin,
				multiSelectionActive: n.multiselectionKeyPressed,
				domNode: n.domNode,
				transform: [
					t.x,
					t.y,
					t.zoom
				],
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
	function c(e, t) {
		if (t.disabled) {
			s.destroy();
			return;
		}
		s.update({
			domNode: e,
			noDragClassName: t.noDragClass,
			handleSelector: t.handleSelector,
			nodeId: t.nodeId,
			isSelectable: t.isSelectable,
			nodeClickDistance: t.nodeClickDistance
		});
	}
	return c(e, t), {
		update(t) {
			c(e, t);
		},
		destroy() {
			s.destroy();
		}
	};
}
var Eh = /* @__PURE__ */ U("<div aria-live=\"assertive\" aria-atomic=\"true\" class=\"a11y-live-msg svelte-65dxi7\"> </div>"), Dh = /* @__PURE__ */ U("<div class=\"a11y-hidden svelte-65dxi7\"> </div> <div class=\"a11y-hidden svelte-65dxi7\"> </div> <!>", 1), Oh = {
	hash: "svelte-65dxi7",
	code: ".a11y-hidden.svelte-65dxi7 {display:none;}.a11y-live-msg.svelte-65dxi7 {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function kh(e, t) {
	M(t, !0), Zi(e, Oh);
	let n = X(t, "store", 7);
	var r = {
		get store() {
			return n();
		},
		set store(e) {
			n(e), F();
		}
	}, i = Dh(), a = z(i), o = R(a, !0);
	A(a);
	var s = B(a, 2), c = R(s, !0);
	A(s);
	var l = B(s, 2), u = (e) => {
		var t = Eh(), r = R(t, !0);
		A(t), V(() => {
			Y(t, "id", `${Mh}-${n().flowId}`), Si(r, n().ariaLiveMessage);
		}), K(e, t);
	};
	return J(l, (e) => {
		n().disableKeyboardA11y || e(u);
	}), V(() => {
		Y(a, "id", `${Ah}-${n().flowId}`), Si(o, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), Y(s, "id", `${jh}-${n().flowId}`), Si(c, n().ariaLabelConfig["edge.a11yDescription.default"]);
	}), K(e, i), N(r);
}
Z(kh, { store: {} }, [], [], { mode: "open" });
var Ah = "svelte-flow__node-desc", jh = "svelte-flow__edge-desc", Mh = "svelte-flow__aria-live", Nh = /* @__PURE__ */ U("<div><!></div>");
function Ph(e, t) {
	M(t, !0);
	let n = X(t, "store", 15), r = X(t, "node", 7), i = X(t, "resizeObserver", 7), a = X(t, "nodeClickDistance", 7), o = X(t, "onnodeclick", 7), s = X(t, "onnodedrag", 7), c = X(t, "onnodedragstart", 7), l = X(t, "onnodedragstop", 7), u = X(t, "onnodepointerenter", 7), d = X(t, "onnodepointerleave", 7), f = X(t, "onnodepointermove", 7), p = X(t, "onnodecontextmenu", 7), m = /* @__PURE__ */ P(() => re(r().data, () => ({}), !0)), h = /* @__PURE__ */ P(() => re(r().selected, !1)), g = /* @__PURE__ */ P(() => r().draggable), _ = /* @__PURE__ */ P(() => r().selectable), v = /* @__PURE__ */ P(() => re(r().deletable, !0)), y = /* @__PURE__ */ P(() => r().connectable), b = /* @__PURE__ */ P(() => r().focusable), x = /* @__PURE__ */ P(() => re(r().hidden, !1)), S = /* @__PURE__ */ P(() => re(r().dragging, !1)), C = /* @__PURE__ */ P(() => re(r().style, "")), w = /* @__PURE__ */ P(() => r().class), T = /* @__PURE__ */ P(() => re(r().type, "default")), E = /* @__PURE__ */ P(() => r().parentId), D = /* @__PURE__ */ P(() => r().sourcePosition), ee = /* @__PURE__ */ P(() => r().targetPosition), te = /* @__PURE__ */ P(() => re(r().measured, () => ({
		width: 0,
		height: 0
	}), !0).width), ne = /* @__PURE__ */ P(() => re(r().measured, () => ({
		width: 0,
		height: 0
	}), !0).height), ie = /* @__PURE__ */ P(() => r().initialWidth), ae = /* @__PURE__ */ P(() => r().initialHeight), oe = /* @__PURE__ */ P(() => r().width), O = /* @__PURE__ */ P(() => r().height), se = /* @__PURE__ */ P(() => r().dragHandle), ce = /* @__PURE__ */ P(() => re(r().internals.z, 0)), le = /* @__PURE__ */ P(() => r().internals.positionAbsolute.x), ue = /* @__PURE__ */ P(() => r().internals.positionAbsolute.y), de = /* @__PURE__ */ P(() => r().internals.userNode), { id: fe } = r(), pe = /* @__PURE__ */ P(() => H(g) ?? n().nodesDraggable), me = /* @__PURE__ */ P(() => H(_) ?? n().elementsSelectable), he = /* @__PURE__ */ P(() => H(y) ?? n().nodesConnectable), ge = /* @__PURE__ */ P(() => If(r())), _e = /* @__PURE__ */ P(() => !!r().internals.handleBounds), ve = /* @__PURE__ */ P(() => H(ge) && H(_e)), ye = /* @__PURE__ */ P(() => H(b) ?? n().nodesFocusable);
	function be(e) {
		return n().parentLookup.has(e);
	}
	let xe = /* @__PURE__ */ P(() => be(fe)), Se = /* @__PURE__ */ I(null), Ce = null, we = H(T), Te = H(D), Ee = H(ee), De = /* @__PURE__ */ P(() => n().nodeTypes[H(T)] ?? Om), Oe = /* @__PURE__ */ P(() => n().ariaLabelConfig);
	ym(fe), xm({ get value() {
		return H(he);
	} });
	let ke = /* @__PURE__ */ P(() => {
		let e = H(te) === void 0 ? H(oe) ?? H(ie) : H(oe), t = H(ne) === void 0 ? H(O) ?? H(ae) : H(O);
		if (!(e === void 0 && t === void 0 && H(C) === void 0)) return `${H(C)};${e ? `width:${zm(e)};` : ""}${t ? `height:${zm(t)};` : ""}`;
	});
	Yn(() => {
		(H(T) !== we || H(D) !== Te || H(ee) !== Ee) && H(Se) !== null && requestAnimationFrame(() => {
			H(Se) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[fe, {
				id: fe,
				nodeElement: H(Se),
				force: !0
			}]]));
		}), we = H(T), Te = H(D), Ee = H(ee);
	}), Yn(() => {
		i() && (!H(ve) || H(Se) !== Ce) && (Ce && i().unobserve(Ce), H(Se) && i().observe(H(Se)), Ce = H(Se));
	}), ji(() => {
		Ce && i()?.unobserve(Ce);
	});
	function Ae(e) {
		H(me) && (!n().selectNodesOnDrag || !H(pe) || n().nodeDragThreshold > 0) && n().handleNodeSelection(fe), o()?.({
			node: H(de),
			event: e
		});
	}
	function je(e) {
		if (!(Uf(e) || n().disableKeyboardA11y)) if (zd.includes(e.key) && H(me)) {
			let t = e.key === "Escape";
			n().handleNodeSelection(fe, t, H(Se));
		} else H(pe) && r().selected && Object.prototype.hasOwnProperty.call(Bm, e.key) && (e.preventDefault(), n(n().ariaLiveMessage = H(Oe)["node.a11yDescription.ariaLiveMessage"]({
			direction: e.key.replace("Arrow", "").toLowerCase(),
			x: ~~r().internals.positionAbsolute.x,
			y: ~~r().internals.positionAbsolute.y
		}), !0), n().moveSelectedNodes(Bm[e.key], e.shiftKey ? 4 : 1));
	}
	let Me = () => {
		if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !H(Se)?.matches(":focus-visible")) return;
		let { width: e, height: t, viewport: i } = n();
		rf(/* @__PURE__ */ new Map([[fe, r()]]), {
			x: 0,
			y: 0,
			width: e,
			height: t
		}, [
			i.x,
			i.y,
			i.zoom
		], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: i.zoom });
	};
	var Ne = {
		get store() {
			return n();
		},
		set store(e) {
			n(e), F();
		},
		get node() {
			return r();
		},
		set node(e) {
			r(e), F();
		},
		get resizeObserver() {
			return i();
		},
		set resizeObserver(e) {
			i(e), F();
		},
		get nodeClickDistance() {
			return a();
		},
		set nodeClickDistance(e) {
			a(e), F();
		},
		get onnodeclick() {
			return o();
		},
		set onnodeclick(e) {
			o(e), F();
		},
		get onnodedrag() {
			return s();
		},
		set onnodedrag(e) {
			s(e), F();
		},
		get onnodedragstart() {
			return c();
		},
		set onnodedragstart(e) {
			c(e), F();
		},
		get onnodedragstop() {
			return l();
		},
		set onnodedragstop(e) {
			l(e), F();
		},
		get onnodepointerenter() {
			return u();
		},
		set onnodepointerenter(e) {
			u(e), F();
		},
		get onnodepointerleave() {
			return d();
		},
		set onnodepointerleave(e) {
			d(e), F();
		},
		get onnodepointermove() {
			return f();
		},
		set onnodepointermove(e) {
			f(e), F();
		},
		get onnodecontextmenu() {
			return p();
		},
		set onnodecontextmenu(e) {
			p(e), F();
		}
	}, Pe = G(), Fe = z(Pe), Ie = (e) => {
		var t = Nh();
		Oa(t, () => ({
			"data-id": fe,
			class: [
				"svelte-flow__node",
				`svelte-flow__node-${H(T)}`,
				H(w)
			],
			style: H(ke),
			onclick: Ae,
			onpointerenter: u() ? (e) => u()({
				node: H(de),
				event: e
			}) : void 0,
			onpointerleave: d() ? (e) => d()({
				node: H(de),
				event: e
			}) : void 0,
			onpointermove: f() ? (e) => f()({
				node: H(de),
				event: e
			}) : void 0,
			oncontextmenu: p() ? (e) => p()({
				node: H(de),
				event: e
			}) : void 0,
			onkeydown: H(ye) ? je : void 0,
			onfocus: H(ye) ? Me : void 0,
			tabIndex: H(ye) ? 0 : void 0,
			role: r().ariaRole ?? (H(ye) ? "group" : void 0),
			"aria-label": r().ariaLabel,
			"aria-roledescription": "node",
			"aria-describedby": n().disableKeyboardA11y ? void 0 : `${Ah}-${n().flowId}`,
			...r().domAttributes,
			[ma]: {
				dragging: H(S),
				selected: H(h),
				draggable: H(pe),
				connectable: H(he),
				selectable: H(me),
				nopan: H(pe),
				parent: H(xe)
			},
			[ha]: {
				"z-index": H(ce),
				transform: `translate(${H(le) ?? ""}px, ${H(ue) ?? ""}px)`,
				visibility: H(ge) ? "visible" : "hidden"
			}
		})), Ji(R(t), () => H(De), (e, t) => {
			t(e, {
				get data() {
					return H(m);
				},
				get id() {
					return fe;
				},
				get selected() {
					return H(h);
				},
				get selectable() {
					return H(me);
				},
				get deletable() {
					return H(v);
				},
				get sourcePosition() {
					return H(D);
				},
				get targetPosition() {
					return H(ee);
				},
				get zIndex() {
					return H(ce);
				},
				get dragging() {
					return H(S);
				},
				get draggable() {
					return H(pe);
				},
				get dragHandle() {
					return H(se);
				},
				get parentId() {
					return H(E);
				},
				get type() {
					return H(T);
				},
				get isConnectable() {
					return H(he);
				},
				get positionAbsoluteX() {
					return H(le);
				},
				get positionAbsoluteY() {
					return H(ue);
				},
				get width() {
					return H(oe);
				},
				get height() {
					return H(O);
				}
			});
		}), A(t), Qi(t, (e, t) => Th?.(e, t), () => ({
			nodeId: fe,
			isSelectable: H(me),
			disabled: !H(pe),
			handleSelector: H(se),
			noDragClass: n().noDragClass,
			nodeClickDistance: a(),
			onNodeMouseDown: n().handleNodeSelection,
			onDrag: (e, t, n, r) => {
				s()?.({
					event: e,
					targetNode: n,
					nodes: r
				});
			},
			onDragStart: (e, t, n, r) => {
				c()?.({
					event: e,
					targetNode: n,
					nodes: r
				});
			},
			onDragStop: (e, t, n, r) => {
				l()?.({
					event: e,
					targetNode: n,
					nodes: r
				});
			},
			store: n()
		})), za(t, (e) => L(Se, e), () => H(Se)), K(e, t);
	};
	return J(Fe, (e) => {
		H(x) || e(Ie);
	}), K(e, Pe), N(Ne);
}
Z(Ph, {
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
}, [], [], { mode: "open" });
var Fh = /* @__PURE__ */ U("<div class=\"svelte-flow__nodes\"></div>");
function Ih(e, t) {
	M(t, !0);
	let n = X(t, "store", 15), r = X(t, "nodeClickDistance", 7), i = X(t, "onnodeclick", 7), a = X(t, "onnodecontextmenu", 7), o = X(t, "onnodepointerenter", 7), s = X(t, "onnodepointermove", 7), c = X(t, "onnodepointerleave", 7), l = X(t, "onnodedrag", 7), u = X(t, "onnodedragstart", 7), d = X(t, "onnodedragstop", 7), f = typeof ResizeObserver > "u" ? null : new ResizeObserver((e) => {
		let t = /* @__PURE__ */ new Map();
		e.forEach((e) => {
			let n = e.target.getAttribute("data-id");
			t.set(n, {
				id: n,
				nodeElement: e.target,
				force: !0
			});
		}), n().updateNodeInternals(t);
	});
	ji(() => {
		f?.disconnect();
	});
	var p = {
		get store() {
			return n();
		},
		set store(e) {
			n(e), F();
		},
		get nodeClickDistance() {
			return r();
		},
		set nodeClickDistance(e) {
			r(e), F();
		},
		get onnodeclick() {
			return i();
		},
		set onnodeclick(e) {
			i(e), F();
		},
		get onnodecontextmenu() {
			return a();
		},
		set onnodecontextmenu(e) {
			a(e), F();
		},
		get onnodepointerenter() {
			return o();
		},
		set onnodepointerenter(e) {
			o(e), F();
		},
		get onnodepointermove() {
			return s();
		},
		set onnodepointermove(e) {
			s(e), F();
		},
		get onnodepointerleave() {
			return c();
		},
		set onnodepointerleave(e) {
			c(e), F();
		},
		get onnodedrag() {
			return l();
		},
		set onnodedrag(e) {
			l(e), F();
		},
		get onnodedragstart() {
			return u();
		},
		set onnodedragstart(e) {
			u(e), F();
		},
		get onnodedragstop() {
			return d();
		},
		set onnodedragstop(e) {
			d(e), F();
		}
	}, m = Fh();
	return Vi(m, 21, () => n().visible.nodes.values(), (e) => e.id, (e, t) => {
		Ph(e, {
			get node() {
				return H(t);
			},
			get resizeObserver() {
				return f;
			},
			get nodeClickDistance() {
				return r();
			},
			get onnodeclick() {
				return i();
			},
			get onnodepointerenter() {
				return o();
			},
			get onnodepointermove() {
				return s();
			},
			get onnodepointerleave() {
				return c();
			},
			get onnodedrag() {
				return l();
			},
			get onnodedragstart() {
				return u();
			},
			get onnodedragstop() {
				return d();
			},
			get onnodecontextmenu() {
				return a();
			},
			get store() {
				return n();
			},
			set store(e) {
				n(e);
			}
		});
	}), A(m), K(e, m), N(p);
}
Z(Ih, {
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
}, [], [], { mode: "open" });
var Lh = /* @__PURE__ */ W("<svg class=\"svelte-flow__edge-wrapper\"><g><!></g></svg>");
function Rh(e, t) {
	M(t, !0);
	let n = X(t, "edge", 7), r = X(t, "store", 15), i = X(t, "onedgeclick", 7), a = X(t, "onedgecontextmenu", 7), o = X(t, "onedgepointerenter", 7), s = X(t, "onedgepointerleave", 7), c = /* @__PURE__ */ P(() => n().id), l = /* @__PURE__ */ P(() => n().source), u = /* @__PURE__ */ P(() => n().target), d = /* @__PURE__ */ P(() => n().sourceX), f = /* @__PURE__ */ P(() => n().sourceY), p = /* @__PURE__ */ P(() => n().targetX), m = /* @__PURE__ */ P(() => n().targetY), h = /* @__PURE__ */ P(() => n().sourcePosition), g = /* @__PURE__ */ P(() => n().targetPosition), _ = /* @__PURE__ */ P(() => re(n().animated, !1)), v = /* @__PURE__ */ P(() => re(n().selected, !1)), y = /* @__PURE__ */ P(() => n().label), b = /* @__PURE__ */ P(() => n().labelStyle), x = /* @__PURE__ */ P(() => re(n().data, () => ({}), !0)), S = /* @__PURE__ */ P(() => n().style), C = /* @__PURE__ */ P(() => n().interactionWidth), w = /* @__PURE__ */ P(() => re(n().type, "default")), T = /* @__PURE__ */ P(() => n().sourceHandle), E = /* @__PURE__ */ P(() => n().targetHandle), D = /* @__PURE__ */ P(() => n().markerStart), ee = /* @__PURE__ */ P(() => n().markerEnd), te = /* @__PURE__ */ P(() => n().selectable), ne = /* @__PURE__ */ P(() => n().focusable), ie = /* @__PURE__ */ P(() => re(n().deletable, !0)), ae = /* @__PURE__ */ P(() => n().hidden), oe = /* @__PURE__ */ P(() => n().zIndex), O = /* @__PURE__ */ P(() => n().class), se = /* @__PURE__ */ P(() => n().ariaLabel);
	Cm(H(c));
	let ce = null, le = /* @__PURE__ */ P(() => H(te) ?? r().elementsSelectable), ue = /* @__PURE__ */ P(() => H(ne) ?? r().edgesFocusable), de = /* @__PURE__ */ P(() => r().edgeTypes[H(w)] ?? Ym), fe = /* @__PURE__ */ P(() => H(D) ? `url('#${hp(H(D), r().flowId)}')` : void 0), pe = /* @__PURE__ */ P(() => H(ee) ? `url('#${hp(H(ee), r().flowId)}')` : void 0);
	function me(e) {
		let t = r().edgeLookup.get(H(c));
		t && (H(le) && r().handleEdgeSelection(H(c)), i()?.({
			event: e,
			edge: t
		}));
	}
	function he(e, t) {
		let n = r().edgeLookup.get(H(c));
		n && t({
			event: e,
			edge: n
		});
	}
	function ge(e) {
		if (!r().disableKeyboardA11y && zd.includes(e.key) && H(le)) {
			let { unselectNodesAndEdges: t, addSelectedEdges: i } = r();
			e.key === "Escape" ? (ce?.blur(), t({ edges: [n()] })) : i([H(c)]);
		}
	}
	var _e = {
		get edge() {
			return n();
		},
		set edge(e) {
			n(e), F();
		},
		get store() {
			return r();
		},
		set store(e) {
			r(e), F();
		},
		get onedgeclick() {
			return i();
		},
		set onedgeclick(e) {
			i(e), F();
		},
		get onedgecontextmenu() {
			return a();
		},
		set onedgecontextmenu(e) {
			a(e), F();
		},
		get onedgepointerenter() {
			return o();
		},
		set onedgepointerenter(e) {
			o(e), F();
		},
		get onedgepointerleave() {
			return s();
		},
		set onedgepointerleave(e) {
			s(e), F();
		}
	}, ve = G(), ye = z(ve), be = (e) => {
		var t = Lh();
		let i;
		var D = R(t);
		Oa(D, () => ({
			class: ["svelte-flow__edge", H(O)],
			"data-id": H(c),
			onclick: me,
			oncontextmenu: a() ? (e) => {
				he(e, a());
			} : void 0,
			onpointerenter: o() ? (e) => {
				he(e, o());
			} : void 0,
			onpointerleave: s() ? (e) => {
				he(e, s());
			} : void 0,
			"aria-label": H(se) === null ? void 0 : H(se) ? H(se) : `Edge from ${H(l)} to ${H(u)}`,
			"aria-describedby": H(ue) ? `${jh}-${r().flowId}` : void 0,
			role: n().ariaRole ?? (H(ue) ? "group" : "img"),
			"aria-roledescription": "edge",
			onkeydown: H(ue) ? ge : void 0,
			tabindex: H(ue) ? 0 : void 0,
			...n().domAttributes,
			[ma]: {
				animated: H(_),
				selected: H(v),
				selectable: H(le)
			}
		})), Ji(R(D), () => H(de), (e, t) => {
			t(e, {
				get id() {
					return H(c);
				},
				get source() {
					return H(l);
				},
				get target() {
					return H(u);
				},
				get sourceX() {
					return H(d);
				},
				get sourceY() {
					return H(f);
				},
				get targetX() {
					return H(p);
				},
				get targetY() {
					return H(m);
				},
				get sourcePosition() {
					return H(h);
				},
				get targetPosition() {
					return H(g);
				},
				get animated() {
					return H(_);
				},
				get selected() {
					return H(v);
				},
				get label() {
					return H(y);
				},
				get labelStyle() {
					return H(b);
				},
				get data() {
					return H(x);
				},
				get style() {
					return H(S);
				},
				get interactionWidth() {
					return H(C);
				},
				get selectable() {
					return H(le);
				},
				get deletable() {
					return H(ie);
				},
				get type() {
					return H(w);
				},
				get sourceHandleId() {
					return H(T);
				},
				get targetHandleId() {
					return H(E);
				},
				get markerStart() {
					return H(fe);
				},
				get markerEnd() {
					return H(pe);
				}
			});
		}), A(D), za(D, (e) => ce = e, () => ce), A(t), V(() => i = ua(t, "", i, { "z-index": H(oe) })), K(e, t);
	};
	return J(ye, (e) => {
		H(ae) || e(be);
	}), K(e, ve), N(_e);
}
Z(Rh, {
	edge: {},
	store: {},
	onedgeclick: {},
	onedgecontextmenu: {},
	onedgepointerenter: {},
	onedgepointerleave: {}
}, [], [], { mode: "open" }), at();
var zh = /* @__PURE__ */ W("<defs></defs>");
function Bh(e, t) {
	M(t, !1);
	let n = fh();
	Ba();
	var r = zh();
	Vi(r, 5, () => n.markers, (e) => e.id, (e, t) => {
		Wh(e, qa(() => H(t)));
	}), A(r), K(e, r), N();
}
Z(Bh, {}, [], [], { mode: "open" });
var Vh = /* @__PURE__ */ W("<polyline class=\"arrow\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" points=\"-5,-4 0,0 -5,4\"></polyline>"), Hh = /* @__PURE__ */ W("<polyline class=\"arrowclosed\" stroke-linecap=\"round\" stroke-linejoin=\"round\" points=\"-5,-4 0,0 -5,4 -5,-4\"></polyline>"), Uh = /* @__PURE__ */ W("<marker class=\"svelte-flow__arrowhead\" viewBox=\"-10 -10 20 20\" refX=\"0\" refY=\"0\"><!></marker>");
function Wh(e, t) {
	M(t, !0);
	let n = X(t, "id", 7), r = X(t, "type", 7), i = X(t, "width", 7, 12.5), a = X(t, "height", 7, 12.5), o = X(t, "markerUnits", 7, "strokeWidth"), s = X(t, "orient", 7, "auto-start-reverse"), c = X(t, "color", 7, "none"), l = X(t, "strokeWidth", 7);
	var u = {
		get id() {
			return n();
		},
		set id(e) {
			n(e), F();
		},
		get type() {
			return r();
		},
		set type(e) {
			r(e), F();
		},
		get width() {
			return i();
		},
		set width(e = 12.5) {
			i(e), F();
		},
		get height() {
			return a();
		},
		set height(e = 12.5) {
			a(e), F();
		},
		get markerUnits() {
			return o();
		},
		set markerUnits(e = "strokeWidth") {
			o(e), F();
		},
		get orient() {
			return s();
		},
		set orient(e = "auto-start-reverse") {
			s(e), F();
		},
		get color() {
			return c();
		},
		set color(e = "none") {
			c(e), F();
		},
		get strokeWidth() {
			return l();
		},
		set strokeWidth(e) {
			l(e), F();
		}
	}, d = Uh(), f = R(d), p = (e) => {
		var t = Vh();
		let n;
		V(() => {
			Y(t, "stroke-width", l()), n = ua(t, "", n, { stroke: c() });
		}), K(e, t);
	}, m = (e) => {
		var t = Hh();
		let n;
		V(() => {
			Y(t, "stroke-width", l()), n = ua(t, "", n, {
				stroke: c(),
				fill: c()
			});
		}), K(e, t);
	};
	return J(f, (e) => {
		r() === Kd.Arrow ? e(p) : r() === Kd.ArrowClosed && e(m, 1);
	}), A(d), V(() => {
		Y(d, "id", n()), Y(d, "markerWidth", `${i()}`), Y(d, "markerHeight", `${a()}`), Y(d, "markerUnits", o()), Y(d, "orient", s());
	}), K(e, d), N(u);
}
Z(Wh, {
	id: {},
	type: {},
	width: {},
	height: {},
	markerUnits: {},
	orient: {},
	color: {},
	strokeWidth: {}
}, [], [], { mode: "open" });
var Gh = /* @__PURE__ */ U("<div class=\"svelte-flow__edges\"><svg class=\"svelte-flow__marker\"><!></svg> <!></div>");
function Kh(e, t) {
	M(t, !0);
	let n = X(t, "store", 15), r = X(t, "onedgeclick", 7), i = X(t, "onedgecontextmenu", 7), a = X(t, "onedgepointerenter", 7), o = X(t, "onedgepointerleave", 7);
	var s = {
		get store() {
			return n();
		},
		set store(e) {
			n(e), F();
		},
		get onedgeclick() {
			return r();
		},
		set onedgeclick(e) {
			r(e), F();
		},
		get onedgecontextmenu() {
			return i();
		},
		set onedgecontextmenu(e) {
			i(e), F();
		},
		get onedgepointerenter() {
			return a();
		},
		set onedgepointerenter(e) {
			a(e), F();
		},
		get onedgepointerleave() {
			return o();
		},
		set onedgepointerleave(e) {
			o(e), F();
		}
	}, c = Gh(), l = R(c);
	return Bh(R(l), {}), A(l), Vi(B(l, 2), 17, () => n().visible.edges.values(), (e) => e.id, (e, t) => {
		Rh(e, {
			get edge() {
				return H(t);
			},
			get onedgeclick() {
				return r();
			},
			get onedgecontextmenu() {
				return i();
			},
			get onedgepointerenter() {
				return a();
			},
			get onedgepointerleave() {
				return o();
			},
			get store() {
				return n();
			},
			set store(e) {
				n(e);
			}
		});
	}), A(c), K(e, c), N(s);
}
Z(Kh, {
	store: {},
	onedgeclick: {},
	onedgecontextmenu: {},
	onedgepointerenter: {},
	onedgepointerleave: {}
}, [], [], { mode: "open" });
var qh = /* @__PURE__ */ U("<div class=\"svelte-flow__selection svelte-jy2cbv\"></div>"), Jh = {
	hash: "svelte-jy2cbv",
	code: ".svelte-flow__selection.svelte-jy2cbv {position:absolute;top:0;left:0;}"
};
function Yh(e, t) {
	M(t, !0), Zi(e, Jh);
	let n = X(t, "x", 7, 0), r = X(t, "y", 7, 0), i = X(t, "width", 7, 0), a = X(t, "height", 7, 0), o = X(t, "isVisible", 7, !0);
	var s = {
		get x() {
			return n();
		},
		set x(e = 0) {
			n(e), F();
		},
		get y() {
			return r();
		},
		set y(e = 0) {
			r(e), F();
		},
		get width() {
			return i();
		},
		set width(e = 0) {
			i(e), F();
		},
		get height() {
			return a();
		},
		set height(e = 0) {
			a(e), F();
		},
		get isVisible() {
			return o();
		},
		set isVisible(e = !0) {
			o(e), F();
		}
	}, c = G(), l = z(c), u = (e) => {
		var t = qh();
		let o;
		V((e) => o = ua(t, "", o, e), [() => ({
			width: typeof i() == "string" ? i() : zm(i()),
			height: typeof a() == "string" ? a() : zm(a()),
			transform: `translate(${n()}px, ${r()}px)`
		})]), K(e, t);
	};
	return J(l, (e) => {
		o() && e(u);
	}), K(e, c), N(s);
}
Z(Yh, {
	x: {},
	y: {},
	width: {},
	height: {},
	isVisible: {}
}, [], [], { mode: "open" });
var Xh = /* @__PURE__ */ U("<div><!></div>"), Zh = {
	hash: "svelte-1c0au3z",
	code: ".svelte-flow__selection-wrapper.svelte-1c0au3z {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}.svelte-flow__selection-wrapper.svelte-1c0au3z:focus,\n  .svelte-flow__selection-wrapper.svelte-1c0au3z:focus-visible {outline:none;}"
};
function Qh(e, t) {
	M(t, !0), Zi(e, Zh);
	let n = X(t, "store", 15), r = X(t, "onnodedrag", 7), i = X(t, "onnodedragstart", 7), a = X(t, "onnodedragstop", 7), o = X(t, "onselectionclick", 7), s = X(t, "onselectioncontextmenu", 7), c = /* @__PURE__ */ I(void 0);
	Yn(() => {
		n().disableKeyboardA11y || H(c)?.focus({ preventScroll: !0 });
	});
	let l = /* @__PURE__ */ P(() => {
		if (n().selectionRectMode === "nodes") {
			n().nodes;
			let e = nf(n().nodeLookup, { filter: (e) => !!e.selected });
			if (e.width > 0 && e.height > 0) return e;
		}
		return null;
	});
	function u(e) {
		let t = n().nodes.filter((e) => e.selected);
		s()?.({
			nodes: t,
			event: e
		});
	}
	function d(e) {
		let t = n().nodes.filter((e) => e.selected);
		o()?.({
			nodes: t,
			event: e
		});
	}
	function f(e) {
		Object.prototype.hasOwnProperty.call(Bm, e.key) && (e.preventDefault(), n().moveSelectedNodes(Bm[e.key], e.shiftKey ? 4 : 1));
	}
	var p = {
		get store() {
			return n();
		},
		set store(e) {
			n(e), F();
		},
		get onnodedrag() {
			return r();
		},
		set onnodedrag(e) {
			r(e), F();
		},
		get onnodedragstart() {
			return i();
		},
		set onnodedragstart(e) {
			i(e), F();
		},
		get onnodedragstop() {
			return a();
		},
		set onnodedragstop(e) {
			a(e), F();
		},
		get onselectionclick() {
			return o();
		},
		set onselectionclick(e) {
			o(e), F();
		},
		get onselectioncontextmenu() {
			return s();
		},
		set onselectioncontextmenu(e) {
			s(e), F();
		}
	}, m = G(), h = z(m), g = (e) => {
		var t = Xh();
		let o;
		Yh(R(t), {
			width: "100%",
			height: "100%",
			x: 0,
			y: 0
		}), A(t), Qi(t, (e, t) => Th?.(e, t), () => ({
			disabled: !1,
			store: n(),
			onDrag: (e, t, n, i) => {
				r()?.({
					event: e,
					targetNode: null,
					nodes: i
				});
			},
			onDragStart: (e, t, n, r) => {
				i()?.({
					event: e,
					targetNode: null,
					nodes: r
				});
			},
			onDragStop: (e, t, n, r) => {
				a()?.({
					event: e,
					targetNode: null,
					nodes: r
				});
			}
		})), za(t, (e) => L(c, e), () => H(c)), V((e) => {
			ca(t, 1, na(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-1c0au3z"), Y(t, "role", n().disableKeyboardA11y ? void 0 : "button"), Y(t, "tabindex", n().disableKeyboardA11y ? void 0 : -1), o = ua(t, "", o, e);
		}, [() => ({
			width: zm(H(l).width),
			height: zm(H(l).height),
			transform: `translate(${H(l).x ?? ""}px, ${H(l).y ?? ""}px)`
		})]), ti("contextmenu", t, u), ti("click", t, d), ti("keydown", t, function(...e) {
			(n().disableKeyboardA11y ? void 0 : f)?.apply(this, e);
		}), K(e, t);
	}, _ = /* @__PURE__ */ P(() => n().selectionRectMode === "nodes" && H(l) && wf(H(l).x) && wf(H(l).y));
	return J(h, (e) => {
		H(_) && e(g);
	}), K(e, m), N(p);
}
ni([
	"contextmenu",
	"click",
	"keydown"
]), Z(Qh, {
	store: {},
	onnodedrag: {},
	onnodedragstart: {},
	onnodedragstop: {},
	onselectionclick: {},
	onselectioncontextmenu: {}
}, [], [], { mode: "open" });
function $h(e) {
	switch (e) {
		case "none": return 0;
		case "ctrl": return 8;
		case "shift": return 4;
		case "alt": return 2;
		case "meta": return 1;
	}
}
function eg(e, t) {
	let { enabled: n = !0, trigger: r, type: i = "keydown" } = t;
	function a(t) {
		let n = Array.isArray(r) ? r : [r], i = [
			t.metaKey,
			t.altKey,
			t.shiftKey,
			t.ctrlKey
		].reduce((e, t, n) => t ? e | 1 << n : e, 0);
		for (let r of n) {
			let n = {
				preventDefault: !1,
				enabled: !0,
				...r
			}, { modifier: a, key: o, code: s, callback: c, preventDefault: l, enabled: u } = n;
			if (!o && !s && console.warn("[svelte-put/shortcut] Trigger should have either `key` or `code`, a trigger missing both was detected! Check your configuration"), u && (o || s)) {
				if (s && t.code !== s || o && t.key !== o) continue;
				if (a === null || a === !1) {
					if (i !== 0) continue;
				} else if (a !== void 0 && a?.[0]?.length > 0) {
					let e = Array.isArray(a) ? a : [a], t = !1;
					for (let n of e) if ((Array.isArray(n) ? n : [n]).reduce((e, t) => e | $h(t), 0) === i) {
						t = !0;
						break;
					}
					if (!t) continue;
				}
				l && t.preventDefault();
				let r = {
					node: e,
					trigger: n,
					originalEvent: t
				};
				e.dispatchEvent(new CustomEvent("shortcut", { detail: r })), c?.(r);
			}
		}
	}
	let o;
	return n && (o = $r(e, i, a)), {
		update: (t) => {
			let { enabled: s = !0, type: c = "keydown" } = t;
			n && (!s || i !== c) ? o?.() : !n && s && (o = $r(e, c, a)), n = s, i = c, r = t.trigger;
		},
		destroy: () => {
			o?.();
		}
	};
}
function tg() {
	let e = /* @__PURE__ */ P(fh), t = (t) => {
		let n = Lm(t) ? t : H(e).nodeLookup.get(t.id), r = n.parentId ? Lf(n.position, n.measured, n.parentId, H(e).nodeLookup, H(e).nodeOrigin) : n.position;
		return vf({
			...n,
			position: r,
			width: n.measured?.width ?? n.width,
			height: n.measured?.height ?? n.height
		});
	};
	function n(t, n, r = { replace: !1 }) {
		H(e).nodes = Kr(() => H(e).nodes).map((e) => {
			if (e.id === t) {
				let t = typeof n == "function" ? n(e) : n;
				return r?.replace && Lm(t) ? t : {
					...e,
					...t
				};
			}
			return e;
		});
	}
	function r(t, n, r = { replace: !1 }) {
		H(e).edges = Kr(() => H(e).edges).map((e) => {
			if (e.id === t) {
				let t = typeof n == "function" ? n(e) : n;
				return r.replace && Rm(t) ? t : {
					...e,
					...t
				};
			}
			return e;
		});
	}
	let i = (t) => H(e).nodeLookup.get(t);
	return {
		zoomIn: H(e).zoomIn,
		zoomOut: H(e).zoomOut,
		getInternalNode: i,
		getNode: (e) => i(e)?.internals.userNode,
		getNodes: (t) => t === void 0 ? H(e).nodes : ng(H(e).nodeLookup, t),
		getEdge: (t) => H(e).edgeLookup.get(t),
		getEdges: (t) => t === void 0 ? H(e).edges : ng(H(e).edgeLookup, t),
		setZoom: async (t, n) => {
			let r = H(e).panZoom;
			return r ? r.scaleTo(t, n) : !1;
		},
		getZoom: () => H(e).viewport.zoom,
		setViewport: async (t, n) => {
			let r = H(e).viewport;
			return H(e).panZoom ? (await H(e).panZoom.setViewport({
				x: t.x ?? r.x,
				y: t.y ?? r.y,
				zoom: t.zoom ?? r.zoom
			}, n), !0) : !1;
		},
		getViewport: () => st(H(e).viewport),
		setCenter: async (t, n, r) => H(e).setCenter(t, n, r),
		fitView: (t) => H(e).fitView(t),
		fitBounds: async (t, n) => {
			if (!H(e).panZoom) return !1;
			let r = Mf(t, H(e).width, H(e).height, H(e).minZoom, H(e).maxZoom, n?.padding ?? .1);
			return await H(e).panZoom.setViewport(r, {
				duration: n?.duration,
				ease: n?.ease,
				interpolate: n?.interpolate
			}), !0;
		},
		getIntersectingNodes: (n, r = !0, i) => {
			let a = Cf(n), o = a ? n : t(n);
			return o ? (i || H(e).nodes).filter((t) => {
				let i = H(e).nodeLookup.get(t.id);
				if (!i || !a && t.id === n.id) return !1;
				let s = vf(i), c = Sf(s, o);
				return r && c > 0 || c >= s.width * s.height || c >= o.width * o.height;
			}) : [];
		},
		isNodeIntersecting: (e, n, r = !0) => {
			let i = Cf(e) ? e : t(e);
			if (!i) return !1;
			let a = Sf(i, n);
			return r && a > 0 || a >= n.width * n.height || a >= i.width * i.height;
		},
		deleteElements: async ({ nodes: t = [], edges: n = [] }) => {
			let { nodes: r, edges: i } = await lf({
				nodesToRemove: t,
				edgesToRemove: n,
				nodes: H(e).nodes,
				edges: H(e).edges,
				onBeforeDelete: H(e).onbeforedelete
			});
			return r && (H(e).nodes = Kr(() => H(e).nodes).filter((e) => !r.some(({ id: t }) => t === e.id))), i && (H(e).edges = Kr(() => H(e).edges).filter((e) => !i.some(({ id: t }) => t === e.id))), (r.length > 0 || i.length > 0) && H(e).ondelete?.({
				nodes: r,
				edges: i
			}), {
				deletedNodes: r,
				deletedEdges: i
			};
		},
		screenToFlowPosition: (t, n = { snapToGrid: !0 }) => {
			if (!H(e).domNode) return t;
			let r = n.snapToGrid ? H(e).snapGrid : !1, { x: i, y: a, zoom: o } = H(e).viewport, { x: s, y: c } = H(e).domNode.getBoundingClientRect();
			return Df({
				x: t.x - s,
				y: t.y - c
			}, [
				i,
				a,
				o
			], r !== null, r || [1, 1]);
		},
		flowToScreenPosition: (t) => {
			if (!H(e).domNode) return t;
			let { x: n, y: r, zoom: i } = H(e).viewport, { x: a, y: o } = H(e).domNode.getBoundingClientRect(), s = Of(t, [
				n,
				r,
				i
			]);
			return {
				x: s.x + a,
				y: s.y + o
			};
		},
		toObject: () => structuredClone({
			nodes: [...H(e).nodes],
			edges: [...H(e).edges],
			viewport: { ...H(e).viewport }
		}),
		updateNode: n,
		updateNodeData: (t, r, i) => {
			let a = H(e).nodeLookup.get(t)?.internals.userNode;
			if (!a) return;
			let o = typeof r == "function" ? r(a) : r;
			n(t, (e) => ({
				...e,
				data: i?.replace ? o : {
					...e.data,
					...o
				}
			}));
		},
		updateEdge: r,
		getNodesBounds: (t) => tf(t, {
			nodeLookup: H(e).nodeLookup,
			nodeOrigin: H(e).nodeOrigin
		}),
		getHandleConnections: ({ type: t, id: n, nodeId: r }) => Array.from(H(e).connectionLookup.get(`${r}-${t}-${n ?? null}`)?.values() ?? [])
	};
}
function ng(e, t) {
	let n = [];
	for (let r of t) {
		let t = e.get(r);
		if (t) {
			let e = "internals" in t ? t.internals?.userNode : t;
			n.push(e);
		}
	}
	return n;
}
function rg(e, t) {
	M(t, !0);
	let n = X(t, "store", 15), r = X(t, "selectionKey", 7, "Shift"), i = X(t, "multiSelectionKey", 23, () => Nf() ? "Meta" : "Control"), a = X(t, "deleteKey", 7, "Backspace"), o = X(t, "panActivationKey", 7, " "), s = X(t, "zoomActivationKey", 23, () => Nf() ? "Meta" : "Control"), { deleteElements: c } = tg();
	function l(e) {
		return typeof e == "object" && !!e;
	}
	function u(e) {
		return l(e) && e.modifier || [];
	}
	function d(e) {
		return e == null ? "" : l(e) ? e.key : e;
	}
	function f(e, t) {
		return (Array.isArray(e) ? e : [e]).map((e) => {
			let n = d(e);
			return {
				key: n,
				modifier: u(e),
				enabled: n !== null,
				callback: t
			};
		});
	}
	function p() {
		n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
	}
	function m() {
		let e = n().nodes.filter((e) => e.selected), t = n().edges.filter((e) => e.selected);
		c({
			nodes: e,
			edges: t
		});
	}
	return ei("blur", Mn, p), ei("contextmenu", Mn, p), Qi(Mn, (e, t) => eg?.(e, t), () => ({
		trigger: f(r(), () => n(n().selectionKeyPressed = !0, !0)),
		type: "keydown"
	})), Qi(Mn, (e, t) => eg?.(e, t), () => ({
		trigger: f(r(), () => n(n().selectionKeyPressed = !1, !0)),
		type: "keyup"
	})), Qi(Mn, (e, t) => eg?.(e, t), () => ({
		trigger: f(i(), () => {
			n(n().multiselectionKeyPressed = !0, !0);
		}),
		type: "keydown"
	})), Qi(Mn, (e, t) => eg?.(e, t), () => ({
		trigger: f(i(), () => n(n().multiselectionKeyPressed = !1, !0)),
		type: "keyup"
	})), Qi(Mn, (e, t) => eg?.(e, t), () => ({
		trigger: f(a(), (e) => {
			!(e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) && !Uf(e.originalEvent) && (n(n().deleteKeyPressed = !0, !0), m());
		}),
		type: "keydown"
	})), Qi(Mn, (e, t) => eg?.(e, t), () => ({
		trigger: f(a(), () => n(n().deleteKeyPressed = !1, !0)),
		type: "keyup"
	})), Qi(Mn, (e, t) => eg?.(e, t), () => ({
		trigger: f(o(), () => n(n().panActivationKeyPressed = !0, !0)),
		type: "keydown"
	})), Qi(Mn, (e, t) => eg?.(e, t), () => ({
		trigger: f(o(), () => n(n().panActivationKeyPressed = !1, !0)),
		type: "keyup"
	})), Qi(Mn, (e, t) => eg?.(e, t), () => ({
		trigger: f(s(), () => n(n().zoomActivationKeyPressed = !0, !0)),
		type: "keydown"
	})), Qi(Mn, (e, t) => eg?.(e, t), () => ({
		trigger: f(s(), () => n(n().zoomActivationKeyPressed = !1, !0)),
		type: "keyup"
	})), N({
		get store() {
			return n();
		},
		set store(e) {
			n(e), F();
		},
		get selectionKey() {
			return r();
		},
		set selectionKey(e = "Shift") {
			r(e), F();
		},
		get multiSelectionKey() {
			return i();
		},
		set multiSelectionKey(e = Nf() ? "Meta" : "Control") {
			i(e), F();
		},
		get deleteKey() {
			return a();
		},
		set deleteKey(e = "Backspace") {
			a(e), F();
		},
		get panActivationKey() {
			return o();
		},
		set panActivationKey(e = " ") {
			o(e), F();
		},
		get zoomActivationKey() {
			return s();
		},
		set zoomActivationKey(e = Nf() ? "Meta" : "Control") {
			s(e), F();
		}
	});
}
Z(rg, {
	store: {},
	selectionKey: {},
	multiSelectionKey: {},
	deleteKey: {},
	panActivationKey: {},
	zoomActivationKey: {}
}, [], [], { mode: "open" });
var ig = /* @__PURE__ */ W("<path fill=\"none\" class=\"svelte-flow__connection-path\"></path>"), ag = /* @__PURE__ */ W("<svg class=\"svelte-flow__connectionline\"><g><!></g></svg>");
function og(e, t) {
	M(t, !0);
	let n = X(t, "store", 15), r = X(t, "type", 7), i = X(t, "containerStyle", 7), a = X(t, "style", 7), o = X(t, "LineComponent", 7), s = /* @__PURE__ */ P(() => {
		if (!n().connection.inProgress) return "";
		let e = {
			sourceX: n().connection.from.x,
			sourceY: n().connection.from.y,
			sourcePosition: n().connection.fromPosition,
			targetX: n().connection.to.x,
			targetY: n().connection.to.y,
			targetPosition: n().connection.toPosition
		};
		switch (r()) {
			case Gd.Bezier: {
				let [t] = Xf(e);
				return t;
			}
			case Gd.Straight: {
				let [t] = rp(e);
				return t;
			}
			case Gd.Step:
			case Gd.SmoothStep: {
				let [t] = lp({
					...e,
					borderRadius: r() === Gd.Step ? 0 : void 0
				});
				return t;
			}
		}
	});
	var c = {
		get store() {
			return n();
		},
		set store(e) {
			n(e), F();
		},
		get type() {
			return r();
		},
		set type(e) {
			r(e), F();
		},
		get containerStyle() {
			return i();
		},
		set containerStyle(e) {
			i(e), F();
		},
		get style() {
			return a();
		},
		set style(e) {
			a(e), F();
		},
		get LineComponent() {
			return o();
		},
		set LineComponent(e) {
			o(e), F();
		}
	}, l = G(), u = z(l), d = (e) => {
		var t = ag(), r = R(t), c = R(r), l = (e) => {
			var t = G();
			Ji(z(t), o, (e, t) => {
				t(e, {});
			}), K(e, t);
		}, u = (e) => {
			var t = ig();
			V(() => {
				Y(t, "d", H(s)), ua(t, a());
			}), K(e, t);
		};
		J(c, (e) => {
			o() ? e(l) : e(u, -1);
		}), A(r), A(t), V((e) => {
			Y(t, "width", n().width), Y(t, "height", n().height), ua(t, i()), ca(r, 0, e);
		}, [() => na(["svelte-flow__connection", Xd(n().connection.isValid)])]), K(e, t);
	};
	return J(u, (e) => {
		n().connection.inProgress && e(d);
	}), K(e, l), N(c);
}
Z(og, {
	store: {},
	type: {},
	containerStyle: {},
	style: {},
	LineComponent: {}
}, [], [], { mode: "open" });
var sg = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"position",
	"style",
	"class",
	"children"
]), cg = /* @__PURE__ */ U("<div><!></div>");
function lg(e, t) {
	M(t, !0);
	let n = X(t, "position", 7, "top-right"), r = X(t, "style", 7), i = X(t, "class", 7), a = X(t, "children", 7), o = /* @__PURE__ */ Ua(t, sg), s = /* @__PURE__ */ P(() => `${n()}`.split("-"));
	var c = {
		get position() {
			return n();
		},
		set position(e = "top-right") {
			n(e), F();
		},
		get style() {
			return r();
		},
		set style(e) {
			r(e), F();
		},
		get class() {
			return i();
		},
		set class(e) {
			i(e), F();
		},
		get children() {
			return a();
		},
		set children(e) {
			a(e), F();
		}
	}, l = cg();
	return Oa(l, (e) => ({
		class: e,
		style: r(),
		...o
	}), [() => [
		"svelte-flow__panel",
		i(),
		...H(s)
	]]), q(R(l), () => a() ?? D), A(l), K(e, l), N(c);
}
Z(lg, {
	position: {},
	style: {},
	class: {},
	children: {}
}, [], [], { mode: "open" });
var ug = /* @__PURE__ */ U("<a target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Svelte Flow attribution\">Svelte Flow</a>");
function dg(e, t) {
	M(t, !0);
	let n = X(t, "proOptions", 7), r = X(t, "position", 7, "bottom-right"), i = "https://svelteflow.dev?utm_source=attribution";
	var a = {
		get proOptions() {
			return n();
		},
		set proOptions(e) {
			n(e), F();
		},
		get position() {
			return r();
		},
		set position(e = "bottom-right") {
			r(e), F();
		}
	}, o = G(), s = z(o), c = (e) => {
		{
			let t = /* @__PURE__ */ P(() => `Please only hide this attribution when you are subscribed to Svelte Flow Pro: ${i}`);
			lg(e, {
				get position() {
					return r();
				},
				class: "svelte-flow__attribution",
				get "data-message"() {
					return H(t);
				},
				children: (e, t) => {
					var n = ug();
					V(() => Y(n, "href", i)), K(e, n);
				},
				$$slots: { default: !0 }
			});
		}
	};
	return J(s, (e) => {
		n()?.hideAttribution || e(c);
	}), K(e, o), N(a);
}
Z(dg, {
	proOptions: {},
	position: {}
}, [], [], { mode: "open" });
var fg = /* @__PURE__ */ U("<div><!></div>"), pg = {
	hash: "svelte-17tjnog",
	code: ".svelte-flow.svelte-17tjnog {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;}"
};
function mg(e, t) {
	M(t, !0), Zi(e, pg);
	let n = X(t, "width", 7), r = X(t, "height", 7), i = X(t, "colorMode", 7), a = X(t, "domNode", 15), o = X(t, "clientWidth", 15), s = X(t, "clientHeight", 15), c = X(t, "children", 7), l = X(t, "rest", 7), u = /* @__PURE__ */ P(() => l().class), d = /* @__PURE__ */ P(() => ae(l(), /* @__PURE__ */ "id.class.nodeTypes.edgeTypes.colorMode.isValidConnection.onmove.onmovestart.onmoveend.onflowerror.ondelete.onbeforedelete.onbeforeconnect.onconnect.onconnectstart.onconnectend.onbeforereconnect.onreconnect.onreconnectstart.onreconnectend.onclickconnectstart.onclickconnectend.oninit.onselectionchange.onselectiondragstart.onselectiondrag.onselectiondragstop.onselectionstart.onselectionend.clickConnect.fitView.fitViewOptions.nodeOrigin.nodeDragThreshold.connectionDragThreshold.minZoom.maxZoom.initialViewport.connectionRadius.connectionMode.selectionMode.selectNodesOnDrag.snapGrid.defaultMarkerColor.translateExtent.nodeExtent.onlyRenderVisibleElements.autoPanOnConnect.autoPanOnNodeDrag.colorModeSSR.defaultEdgeOptions.elevateNodesOnSelect.elevateEdgesOnSelect.nodesDraggable.autoPanOnNodeFocus.nodesConnectable.elementsSelectable.nodesFocusable.edgesFocusable.disableKeyboardA11y.noDragClass.noPanClass.noWheelClass.ariaLabelConfig.autoPanSpeed.panOnScrollSpeed.zIndexMode.autoPanOnSelection".split(".")));
	function f(e) {
		e.currentTarget.scrollTo({
			top: 0,
			left: 0,
			behavior: "auto"
		}), l().onscroll && l().onscroll(e);
	}
	var p = {
		get width() {
			return n();
		},
		set width(e) {
			n(e), F();
		},
		get height() {
			return r();
		},
		set height(e) {
			r(e), F();
		},
		get colorMode() {
			return i();
		},
		set colorMode(e) {
			i(e), F();
		},
		get domNode() {
			return a();
		},
		set domNode(e) {
			a(e), F();
		},
		get clientWidth() {
			return o();
		},
		set clientWidth(e) {
			o(e), F();
		},
		get clientHeight() {
			return s();
		},
		set clientHeight(e) {
			s(e), F();
		},
		get children() {
			return c();
		},
		set children(e) {
			c(e), F();
		},
		get rest() {
			return l();
		},
		set rest(e) {
			l(e), F();
		}
	}, m = fg();
	return Oa(m, (e) => ({
		class: [
			"svelte-flow",
			"svelte-flow__container",
			i(),
			H(u)
		],
		"data-testid": "svelte-flow__wrapper",
		role: "application",
		onscroll: f,
		...H(d),
		[ha]: e
	}), [() => ({
		width: zm(n()),
		height: zm(r())
	})], void 0, void 0, "svelte-17tjnog"), q(R(m), () => c() ?? D), A(m), za(m, (e) => a(e), () => a()), La(m, "clientHeight", s), La(m, "clientWidth", o), K(e, m), N(p);
}
Z(mg, {
	width: {},
	height: {},
	colorMode: {},
	domNode: {},
	clientWidth: {},
	clientHeight: {},
	children: {},
	rest: {}
}, [], [], { mode: "open" });
var hg = /* @__PURE__ */ new Set(/* @__PURE__ */ "$$slots.$$events.$$legacy.$$host.width.height.proOptions.selectionKey.deleteKey.panActivationKey.multiSelectionKey.zoomActivationKey.paneClickDistance.nodeClickDistance.onmovestart.onmoveend.onmove.oninit.onnodeclick.onnodecontextmenu.onnodedrag.onnodedragstart.onnodedragstop.onnodepointerenter.onnodepointermove.onnodepointerleave.onselectionclick.onselectioncontextmenu.onselectionstart.onselectionend.onedgeclick.onedgecontextmenu.onedgepointerenter.onedgepointerleave.onpaneclick.onpanecontextmenu.panOnScrollMode.preventScrolling.zoomOnScroll.zoomOnDoubleClick.zoomOnPinch.panOnScroll.panOnScrollSpeed.panOnDrag.selectionOnDrag.autoPanOnSelection.connectionLineComponent.connectionLineStyle.connectionLineContainerStyle.connectionLineType.attributionPosition.children.nodes.edges.viewport".split(".")), gg = /* @__PURE__ */ U("<div class=\"svelte-flow__viewport-back svelte-flow__container\"></div> <!> <div class=\"svelte-flow__edge-labels svelte-flow__container\"></div> <!> <!> <!> <div class=\"svelte-flow__viewport-front svelte-flow__container\"></div>", 1), _g = /* @__PURE__ */ U("<!> <!>", 1), vg = /* @__PURE__ */ U("<!> <!> <!> <!> <!>", 1);
function yg(e, t) {
	M(t, !0);
	let n = X(t, "width", 7), r = X(t, "height", 7), i = X(t, "proOptions", 7), a = X(t, "selectionKey", 7), o = X(t, "deleteKey", 7), s = X(t, "panActivationKey", 7), c = X(t, "multiSelectionKey", 7), l = X(t, "zoomActivationKey", 7), u = X(t, "paneClickDistance", 7, 1), d = X(t, "nodeClickDistance", 7, 1), f = X(t, "onmovestart", 7), p = X(t, "onmoveend", 7), m = X(t, "onmove", 7), h = X(t, "oninit", 7), g = X(t, "onnodeclick", 7), _ = X(t, "onnodecontextmenu", 7), v = X(t, "onnodedrag", 7), y = X(t, "onnodedragstart", 7), b = X(t, "onnodedragstop", 7), x = X(t, "onnodepointerenter", 7), S = X(t, "onnodepointermove", 7), C = X(t, "onnodepointerleave", 7), w = X(t, "onselectionclick", 7), T = X(t, "onselectioncontextmenu", 7), E = X(t, "onselectionstart", 7), ee = X(t, "onselectionend", 7), te = X(t, "onedgeclick", 7), ne = X(t, "onedgecontextmenu", 7), re = X(t, "onedgepointerenter", 7), ie = X(t, "onedgepointerleave", 7), ae = X(t, "onpaneclick", 7), oe = X(t, "onpanecontextmenu", 7), O = X(t, "panOnScrollMode", 23, () => Hd.Free), se = X(t, "preventScrolling", 7, !0), ce = X(t, "zoomOnScroll", 7, !0), le = X(t, "zoomOnDoubleClick", 7, !0), ue = X(t, "zoomOnPinch", 7, !0), de = X(t, "panOnScroll", 7, !1), fe = X(t, "panOnScrollSpeed", 7, .5), pe = X(t, "panOnDrag", 7, !0), me = X(t, "selectionOnDrag", 7, !1), he = X(t, "autoPanOnSelection", 7, !0), ge = X(t, "connectionLineComponent", 7), _e = X(t, "connectionLineStyle", 7), ve = X(t, "connectionLineContainerStyle", 7), ye = X(t, "connectionLineType", 23, () => Gd.Bezier), be = X(t, "attributionPosition", 7), xe = X(t, "children", 7), Se = X(t, "nodes", 31, () => kn([])), Ce = X(t, "edges", 31, () => kn([])), we = X(t, "viewport", 15, void 0), Te = /* @__PURE__ */ Ua(t, hg), Ee = mh({
		props: Te,
		width: n(),
		height: r(),
		get nodes() {
			return Se();
		},
		set nodes(e) {
			Se(e);
		},
		get edges() {
			return Ce();
		},
		set edges(e) {
			Ce(e);
		},
		get viewport() {
			return we();
		},
		set viewport(e) {
			we(e);
		}
	}), De = dt(ph);
	return De && De.setStore && De.setStore(Ee), ft(ph, {
		provider: !1,
		getStore() {
			return Ee;
		}
	}), Yn(() => {
		let e = {
			nodes: Ee.selectedNodes,
			edges: Ee.selectedEdges
		};
		Kr(() => t.onselectionchange)?.(e);
		for (let t of Ee.selectionChangeHandlers.values()) t(e);
	}), ji(() => {
		Ee.reset();
	}), mg(e, {
		get colorMode() {
			return Ee.colorMode;
		},
		get width() {
			return n();
		},
		get height() {
			return r();
		},
		get rest() {
			return Te;
		},
		get domNode() {
			return Ee.domNode;
		},
		set domNode(e) {
			Ee.domNode = e;
		},
		get clientWidth() {
			return Ee.width;
		},
		set clientWidth(e) {
			Ee.width = e;
		},
		get clientHeight() {
			return Ee.height;
		},
		set clientHeight(e) {
			Ee.height = e;
		},
		children: (e, t) => {
			var n = vg(), r = z(n);
			rg(r, {
				get selectionKey() {
					return a();
				},
				get deleteKey() {
					return o();
				},
				get panActivationKey() {
					return s();
				},
				get multiSelectionKey() {
					return c();
				},
				get zoomActivationKey() {
					return l();
				},
				get store() {
					return Ee;
				},
				set store(e) {
					Ee = e;
				}
			});
			var Se = B(r, 2);
			_h(Se, {
				get panOnScrollMode() {
					return O();
				},
				get preventScrolling() {
					return se();
				},
				get zoomOnScroll() {
					return ce();
				},
				get zoomOnDoubleClick() {
					return le();
				},
				get zoomOnPinch() {
					return ue();
				},
				get panOnScroll() {
					return de();
				},
				get panOnScrollSpeed() {
					return fe();
				},
				get panOnDrag() {
					return pe();
				},
				get paneClickDistance() {
					return u();
				},
				get selectionOnDrag() {
					return me();
				},
				get onmovestart() {
					return f();
				},
				get onmove() {
					return m();
				},
				get onmoveend() {
					return p();
				},
				get oninit() {
					return h();
				},
				get store() {
					return Ee;
				},
				set store(e) {
					Ee = e;
				},
				children: (e, t) => {
					Sh(e, {
						get onpaneclick() {
							return ae();
						},
						get onpanecontextmenu() {
							return oe();
						},
						get onselectionstart() {
							return E();
						},
						get onselectionend() {
							return ee();
						},
						get panOnDrag() {
							return pe();
						},
						get paneClickDistance() {
							return u();
						},
						get selectionOnDrag() {
							return me();
						},
						get autoPanOnSelection() {
							return he();
						},
						get store() {
							return Ee;
						},
						set store(e) {
							Ee = e;
						},
						children: (e, t) => {
							var n = _g(), r = z(n);
							wh(r, {
								get store() {
									return Ee;
								},
								set store(e) {
									Ee = e;
								},
								children: (e, t) => {
									var n = gg(), r = B(z(n), 2);
									Kh(r, {
										get onedgeclick() {
											return te();
										},
										get onedgecontextmenu() {
											return ne();
										},
										get onedgepointerenter() {
											return re();
										},
										get onedgepointerleave() {
											return ie();
										},
										get store() {
											return Ee;
										},
										set store(e) {
											Ee = e;
										}
									});
									var i = B(r, 4);
									og(i, {
										get type() {
											return ye();
										},
										get LineComponent() {
											return ge();
										},
										get containerStyle() {
											return ve();
										},
										get style() {
											return _e();
										},
										get store() {
											return Ee;
										},
										set store(e) {
											Ee = e;
										}
									});
									var a = B(i, 2);
									Ih(a, {
										get nodeClickDistance() {
											return d();
										},
										get onnodeclick() {
											return g();
										},
										get onnodecontextmenu() {
											return _();
										},
										get onnodepointerenter() {
											return x();
										},
										get onnodepointermove() {
											return S();
										},
										get onnodepointerleave() {
											return C();
										},
										get onnodedrag() {
											return v();
										},
										get onnodedragstart() {
											return y();
										},
										get onnodedragstop() {
											return b();
										},
										get store() {
											return Ee;
										},
										set store(e) {
											Ee = e;
										}
									}), Qh(B(a, 2), {
										get onselectionclick() {
											return w();
										},
										get onselectioncontextmenu() {
											return T();
										},
										get onnodedrag() {
											return v();
										},
										get onnodedragstart() {
											return y();
										},
										get onnodedragstop() {
											return b();
										},
										get store() {
											return Ee;
										},
										set store(e) {
											Ee = e;
										}
									}), j(2), K(e, n);
								},
								$$slots: { default: !0 }
							});
							var i = B(r, 2);
							{
								let e = /* @__PURE__ */ P(() => !!(Ee.selectionRect && Ee.selectionRectMode === "user")), t = /* @__PURE__ */ P(() => Ee.selectionRect?.width), n = /* @__PURE__ */ P(() => Ee.selectionRect?.height), r = /* @__PURE__ */ P(() => Ee.selectionRect?.x), a = /* @__PURE__ */ P(() => Ee.selectionRect?.y);
								Yh(i, {
									get isVisible() {
										return H(e);
									},
									get width() {
										return H(t);
									},
									get height() {
										return H(n);
									},
									get x() {
										return H(r);
									},
									get y() {
										return H(a);
									}
								});
							}
							K(e, n);
						},
						$$slots: { default: !0 }
					});
				},
				$$slots: { default: !0 }
			});
			var Ce = B(Se, 2);
			dg(Ce, {
				get proOptions() {
					return i();
				},
				get position() {
					return be();
				}
			});
			var we = B(Ce, 2);
			kh(we, { get store() {
				return Ee;
			} }), q(B(we, 2), () => xe() ?? D), K(e, n);
		},
		$$slots: { default: !0 }
	}), N({
		get width() {
			return n();
		},
		set width(e) {
			n(e), F();
		},
		get height() {
			return r();
		},
		set height(e) {
			r(e), F();
		},
		get proOptions() {
			return i();
		},
		set proOptions(e) {
			i(e), F();
		},
		get selectionKey() {
			return a();
		},
		set selectionKey(e) {
			a(e), F();
		},
		get deleteKey() {
			return o();
		},
		set deleteKey(e) {
			o(e), F();
		},
		get panActivationKey() {
			return s();
		},
		set panActivationKey(e) {
			s(e), F();
		},
		get multiSelectionKey() {
			return c();
		},
		set multiSelectionKey(e) {
			c(e), F();
		},
		get zoomActivationKey() {
			return l();
		},
		set zoomActivationKey(e) {
			l(e), F();
		},
		get paneClickDistance() {
			return u();
		},
		set paneClickDistance(e = 1) {
			u(e), F();
		},
		get nodeClickDistance() {
			return d();
		},
		set nodeClickDistance(e = 1) {
			d(e), F();
		},
		get onmovestart() {
			return f();
		},
		set onmovestart(e) {
			f(e), F();
		},
		get onmoveend() {
			return p();
		},
		set onmoveend(e) {
			p(e), F();
		},
		get onmove() {
			return m();
		},
		set onmove(e) {
			m(e), F();
		},
		get oninit() {
			return h();
		},
		set oninit(e) {
			h(e), F();
		},
		get onnodeclick() {
			return g();
		},
		set onnodeclick(e) {
			g(e), F();
		},
		get onnodecontextmenu() {
			return _();
		},
		set onnodecontextmenu(e) {
			_(e), F();
		},
		get onnodedrag() {
			return v();
		},
		set onnodedrag(e) {
			v(e), F();
		},
		get onnodedragstart() {
			return y();
		},
		set onnodedragstart(e) {
			y(e), F();
		},
		get onnodedragstop() {
			return b();
		},
		set onnodedragstop(e) {
			b(e), F();
		},
		get onnodepointerenter() {
			return x();
		},
		set onnodepointerenter(e) {
			x(e), F();
		},
		get onnodepointermove() {
			return S();
		},
		set onnodepointermove(e) {
			S(e), F();
		},
		get onnodepointerleave() {
			return C();
		},
		set onnodepointerleave(e) {
			C(e), F();
		},
		get onselectionclick() {
			return w();
		},
		set onselectionclick(e) {
			w(e), F();
		},
		get onselectioncontextmenu() {
			return T();
		},
		set onselectioncontextmenu(e) {
			T(e), F();
		},
		get onselectionstart() {
			return E();
		},
		set onselectionstart(e) {
			E(e), F();
		},
		get onselectionend() {
			return ee();
		},
		set onselectionend(e) {
			ee(e), F();
		},
		get onedgeclick() {
			return te();
		},
		set onedgeclick(e) {
			te(e), F();
		},
		get onedgecontextmenu() {
			return ne();
		},
		set onedgecontextmenu(e) {
			ne(e), F();
		},
		get onedgepointerenter() {
			return re();
		},
		set onedgepointerenter(e) {
			re(e), F();
		},
		get onedgepointerleave() {
			return ie();
		},
		set onedgepointerleave(e) {
			ie(e), F();
		},
		get onpaneclick() {
			return ae();
		},
		set onpaneclick(e) {
			ae(e), F();
		},
		get onpanecontextmenu() {
			return oe();
		},
		set onpanecontextmenu(e) {
			oe(e), F();
		},
		get panOnScrollMode() {
			return O();
		},
		set panOnScrollMode(e = Hd.Free) {
			O(e), F();
		},
		get preventScrolling() {
			return se();
		},
		set preventScrolling(e = !0) {
			se(e), F();
		},
		get zoomOnScroll() {
			return ce();
		},
		set zoomOnScroll(e = !0) {
			ce(e), F();
		},
		get zoomOnDoubleClick() {
			return le();
		},
		set zoomOnDoubleClick(e = !0) {
			le(e), F();
		},
		get zoomOnPinch() {
			return ue();
		},
		set zoomOnPinch(e = !0) {
			ue(e), F();
		},
		get panOnScroll() {
			return de();
		},
		set panOnScroll(e = !1) {
			de(e), F();
		},
		get panOnScrollSpeed() {
			return fe();
		},
		set panOnScrollSpeed(e = .5) {
			fe(e), F();
		},
		get panOnDrag() {
			return pe();
		},
		set panOnDrag(e = !0) {
			pe(e), F();
		},
		get selectionOnDrag() {
			return me();
		},
		set selectionOnDrag(e = !1) {
			me(e), F();
		},
		get autoPanOnSelection() {
			return he();
		},
		set autoPanOnSelection(e = !0) {
			he(e), F();
		},
		get connectionLineComponent() {
			return ge();
		},
		set connectionLineComponent(e) {
			ge(e), F();
		},
		get connectionLineStyle() {
			return _e();
		},
		set connectionLineStyle(e) {
			_e(e), F();
		},
		get connectionLineContainerStyle() {
			return ve();
		},
		set connectionLineContainerStyle(e) {
			ve(e), F();
		},
		get connectionLineType() {
			return ye();
		},
		set connectionLineType(e = Gd.Bezier) {
			ye(e), F();
		},
		get attributionPosition() {
			return be();
		},
		set attributionPosition(e) {
			be(e), F();
		},
		get children() {
			return xe();
		},
		set children(e) {
			xe(e), F();
		},
		get nodes() {
			return Se();
		},
		set nodes(e = []) {
			Se(e), F();
		},
		get edges() {
			return Ce();
		},
		set edges(e = []) {
			Ce(e), F();
		},
		get viewport() {
			return we();
		},
		set viewport(e = void 0) {
			we(e), F();
		}
	});
}
Z(yg, {
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
	panOnScrollSpeed: {},
	panOnDrag: {},
	selectionOnDrag: {},
	autoPanOnSelection: {},
	connectionLineComponent: {},
	connectionLineStyle: {},
	connectionLineContainerStyle: {},
	connectionLineType: {},
	attributionPosition: {},
	children: {},
	nodes: {},
	edges: {},
	viewport: {}
}, [], [], { mode: "open" });
function bg(e, t) {
	M(t, !0);
	let n = X(t, "children", 7), r = /* @__PURE__ */ I(mh({
		props: {},
		nodes: [],
		edges: []
	}));
	ft(ph, {
		provider: !0,
		getStore() {
			return H(r);
		},
		setStore: (e) => {
			L(r, e);
		}
	}), ji(() => {
		H(r).reset();
	});
	var i = {
		get children() {
			return n();
		},
		set children(e) {
			n(e), F();
		}
	}, a = G();
	return q(z(a), () => n() ?? D), K(e, a), N(i);
}
Z(bg, { children: {} }, [], [], { mode: "open" });
var xg = /* @__PURE__ */ new Set([
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
]), Sg = /* @__PURE__ */ U("<button><!></button>");
function Cg(e, t) {
	M(t, !0);
	let n = X(t, "class", 7), r = X(t, "bgColor", 7), i = X(t, "bgColorHover", 7), a = X(t, "color", 7), o = X(t, "colorHover", 7), s = X(t, "borderColor", 7), c = X(t, "onclick", 7), l = X(t, "children", 7), u = /* @__PURE__ */ Ua(t, xg);
	var d = {
		get class() {
			return n();
		},
		set class(e) {
			n(e), F();
		},
		get bgColor() {
			return r();
		},
		set bgColor(e) {
			r(e), F();
		},
		get bgColorHover() {
			return i();
		},
		set bgColorHover(e) {
			i(e), F();
		},
		get color() {
			return a();
		},
		set color(e) {
			a(e), F();
		},
		get colorHover() {
			return o();
		},
		set colorHover(e) {
			o(e), F();
		},
		get borderColor() {
			return s();
		},
		set borderColor(e) {
			s(e), F();
		},
		get onclick() {
			return c();
		},
		set onclick(e) {
			c(e), F();
		},
		get children() {
			return l();
		},
		set children(e) {
			l(e), F();
		}
	}, f = Sg();
	return Oa(f, () => ({
		type: "button",
		onclick: c(),
		class: ["svelte-flow__controls-button", n()],
		...u,
		[ha]: {
			"--xy-controls-button-background-color-props": r(),
			"--xy-controls-button-background-color-hover-props": i(),
			"--xy-controls-button-color-props": a(),
			"--xy-controls-button-color-hover-props": o(),
			"--xy-controls-button-border-color-props": s()
		}
	})), q(R(f), () => l() ?? D), A(f), K(e, f), N(d);
}
Z(Cg, {
	class: {},
	bgColor: {},
	bgColorHover: {},
	color: {},
	colorHover: {},
	borderColor: {},
	onclick: {},
	children: {}
}, [], [], { mode: "open" });
var wg = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\"><path d=\"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z\"></path></svg>");
function Tg(e) {
	K(e, wg());
}
Z(Tg, {}, [], [], { mode: "open" });
var Eg = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 5\"><path d=\"M0 0h32v4.2H0z\"></path></svg>");
function Dg(e) {
	K(e, Eg());
}
Z(Dg, {}, [], [], { mode: "open" });
var Og = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 30\"><path d=\"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z\"></path></svg>");
function kg(e) {
	K(e, Og());
}
Z(kg, {}, [], [], { mode: "open" });
var Ag = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 32\"><path d=\"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z\"></path></svg>");
function jg(e) {
	K(e, Ag());
}
Z(jg, {}, [], [], { mode: "open" });
var Mg = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 32\"><path d=\"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z\"></path></svg>");
function Ng(e) {
	K(e, Mg());
}
Z(Ng, {}, [], [], { mode: "open" });
var Pg = /* @__PURE__ */ new Set([
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
]), Fg = /* @__PURE__ */ U("<!> <!>", 1), Ig = /* @__PURE__ */ U("<!> <!> <!> <!> <!> <!>", 1);
function Lg(e, t) {
	M(t, !0);
	let n = X(t, "position", 7, "bottom-left"), r = X(t, "orientation", 7, "vertical"), i = X(t, "showZoom", 7, !0), a = X(t, "showFitView", 7, !0), o = X(t, "showLock", 7, !0), s = X(t, "style", 7), c = X(t, "class", 7), l = X(t, "buttonBgColor", 7), u = X(t, "buttonBgColorHover", 7), d = X(t, "buttonColor", 7), f = X(t, "buttonColorHover", 7), p = X(t, "buttonBorderColor", 7), m = X(t, "fitViewOptions", 7), h = X(t, "children", 7), g = X(t, "before", 7), _ = X(t, "after", 7), v = /* @__PURE__ */ Ua(t, Pg), y = /* @__PURE__ */ P(fh), b = /* @__PURE__ */ P(() => ({
		bgColor: l(),
		bgColorHover: u(),
		color: d(),
		colorHover: f(),
		borderColor: p()
	})), x = /* @__PURE__ */ P(() => H(y).nodesDraggable || H(y).nodesConnectable || H(y).elementsSelectable), S = /* @__PURE__ */ P(() => H(y).viewport.zoom <= H(y).minZoom), C = /* @__PURE__ */ P(() => H(y).viewport.zoom >= H(y).maxZoom), w = /* @__PURE__ */ P(() => H(y).ariaLabelConfig), T = /* @__PURE__ */ P(() => r() === "horizontal" ? "horizontal" : "vertical"), E = () => {
		H(y).zoomIn();
	}, D = () => {
		H(y).zoomOut();
	}, ee = () => {
		H(y).fitView(m());
	}, te = () => {
		let e = !H(x);
		H(y).nodesDraggable = e, H(y).nodesConnectable = e, H(y).elementsSelectable = e;
	};
	var ne = {
		get position() {
			return n();
		},
		set position(e = "bottom-left") {
			n(e), F();
		},
		get orientation() {
			return r();
		},
		set orientation(e = "vertical") {
			r(e), F();
		},
		get showZoom() {
			return i();
		},
		set showZoom(e = !0) {
			i(e), F();
		},
		get showFitView() {
			return a();
		},
		set showFitView(e = !0) {
			a(e), F();
		},
		get showLock() {
			return o();
		},
		set showLock(e = !0) {
			o(e), F();
		},
		get style() {
			return s();
		},
		set style(e) {
			s(e), F();
		},
		get class() {
			return c();
		},
		set class(e) {
			c(e), F();
		},
		get buttonBgColor() {
			return l();
		},
		set buttonBgColor(e) {
			l(e), F();
		},
		get buttonBgColorHover() {
			return u();
		},
		set buttonBgColorHover(e) {
			u(e), F();
		},
		get buttonColor() {
			return d();
		},
		set buttonColor(e) {
			d(e), F();
		},
		get buttonColorHover() {
			return f();
		},
		set buttonColorHover(e) {
			f(e), F();
		},
		get buttonBorderColor() {
			return p();
		},
		set buttonBorderColor(e) {
			p(e), F();
		},
		get fitViewOptions() {
			return m();
		},
		set fitViewOptions(e) {
			m(e), F();
		},
		get children() {
			return h();
		},
		set children(e) {
			h(e), F();
		},
		get before() {
			return g();
		},
		set before(e) {
			g(e), F();
		},
		get after() {
			return _();
		},
		set after(e) {
			_(e), F();
		}
	};
	{
		let t = /* @__PURE__ */ P(() => [
			"svelte-flow__controls",
			H(T),
			c()
		]);
		lg(e, qa({
			get class() {
				return H(t);
			},
			get position() {
				return n();
			},
			"data-testid": "svelte-flow__controls",
			get "aria-label"() {
				return H(w)["controls.ariaLabel"];
			},
			get style() {
				return s();
			}
		}, () => v, {
			children: (e, t) => {
				var n = Ig(), r = z(n), s = (e) => {
					var t = G();
					q(z(t), g), K(e, t);
				};
				J(r, (e) => {
					g() && e(s);
				});
				var c = B(r, 2), l = (e) => {
					var t = Fg(), n = z(t);
					Cg(n, qa({
						onclick: E,
						class: "svelte-flow__controls-zoomin",
						get title() {
							return H(w)["controls.zoomIn.ariaLabel"];
						},
						get "aria-label"() {
							return H(w)["controls.zoomIn.ariaLabel"];
						},
						get disabled() {
							return H(C);
						}
					}, () => H(b), {
						children: (e, t) => {
							Tg(e, {});
						},
						$$slots: { default: !0 }
					})), Cg(B(n, 2), qa({
						onclick: D,
						class: "svelte-flow__controls-zoomout",
						get title() {
							return H(w)["controls.zoomOut.ariaLabel"];
						},
						get "aria-label"() {
							return H(w)["controls.zoomOut.ariaLabel"];
						},
						get disabled() {
							return H(S);
						}
					}, () => H(b), {
						children: (e, t) => {
							Dg(e, {});
						},
						$$slots: { default: !0 }
					})), K(e, t);
				};
				J(c, (e) => {
					i() && e(l);
				});
				var u = B(c, 2), d = (e) => {
					Cg(e, qa({
						class: "svelte-flow__controls-fitview",
						onclick: ee,
						get title() {
							return H(w)["controls.fitView.ariaLabel"];
						},
						get "aria-label"() {
							return H(w)["controls.fitView.ariaLabel"];
						}
					}, () => H(b), {
						children: (e, t) => {
							kg(e, {});
						},
						$$slots: { default: !0 }
					}));
				};
				J(u, (e) => {
					a() && e(d);
				});
				var f = B(u, 2), p = (e) => {
					Cg(e, qa({
						class: "svelte-flow__controls-interactive",
						onclick: te,
						get title() {
							return H(w)["controls.interactive.ariaLabel"];
						},
						get "aria-label"() {
							return H(w)["controls.interactive.ariaLabel"];
						}
					}, () => H(b), {
						children: (e, t) => {
							var n = G(), r = z(n), i = (e) => {
								Ng(e, {});
							}, a = (e) => {
								jg(e, {});
							};
							J(r, (e) => {
								H(x) ? e(i) : e(a, -1);
							}), K(e, n);
						},
						$$slots: { default: !0 }
					}));
				};
				J(f, (e) => {
					o() && e(p);
				});
				var m = B(f, 2), v = (e) => {
					var t = G();
					q(z(t), h), K(e, t);
				};
				J(m, (e) => {
					h() && e(v);
				});
				var y = B(m, 2), T = (e) => {
					var t = G();
					q(z(t), _), K(e, t);
				};
				J(y, (e) => {
					_() && e(T);
				}), K(e, n);
			},
			$$slots: { default: !0 }
		}));
	}
	return N(ne);
}
Z(Lg, {
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
}, [], [], { mode: "open" });
var Rg;
(function(e) {
	e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Rg ||= {});
var zg = /* @__PURE__ */ W("<circle></circle>");
function Bg(e, t) {
	M(t, !0);
	let n = X(t, "radius", 7), r = X(t, "class", 7);
	var i = {
		get radius() {
			return n();
		},
		set radius(e) {
			n(e), F();
		},
		get class() {
			return r();
		},
		set class(e) {
			r(e), F();
		}
	}, a = zg();
	return V(() => {
		Y(a, "cx", n()), Y(a, "cy", n()), Y(a, "r", n()), ca(a, 0, na([
			"svelte-flow__background-pattern",
			"dots",
			r()
		]));
	}), K(e, a), N(i);
}
Z(Bg, {
	radius: {},
	class: {}
}, [], [], { mode: "open" });
var Vg = /* @__PURE__ */ W("<path></path>");
function Hg(e, t) {
	M(t, !0);
	let n = X(t, "lineWidth", 7), r = X(t, "dimensions", 7), i = X(t, "variant", 7), a = X(t, "class", 7);
	var o = {
		get lineWidth() {
			return n();
		},
		set lineWidth(e) {
			n(e), F();
		},
		get dimensions() {
			return r();
		},
		set dimensions(e) {
			r(e), F();
		},
		get variant() {
			return i();
		},
		set variant(e) {
			i(e), F();
		},
		get class() {
			return a();
		},
		set class(e) {
			a(e), F();
		}
	}, s = Vg();
	return V(() => {
		Y(s, "stroke-width", n()), Y(s, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), ca(s, 0, na([
			"svelte-flow__background-pattern",
			i(),
			a()
		]));
	}), K(e, s), N(o);
}
Z(Hg, {
	lineWidth: {},
	dimensions: {},
	variant: {},
	class: {}
}, [], [], { mode: "open" });
var Ug = {
	[Rg.Dots]: 1,
	[Rg.Lines]: 1,
	[Rg.Cross]: 6
}, Wg = /* @__PURE__ */ W("<svg data-testid=\"svelte-flow__background\"><pattern patternUnits=\"userSpaceOnUse\"><!></pattern><rect x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"></rect></svg>");
function Gg(e, t) {
	M(t, !0);
	let n = X(t, "id", 7), r = X(t, "variant", 23, () => Rg.Dots), i = X(t, "gap", 7, 20), a = X(t, "size", 7), o = X(t, "lineWidth", 7, 1), s = X(t, "bgColor", 7), c = X(t, "patternColor", 7), l = X(t, "patternClass", 7), u = X(t, "class", 7), d = /* @__PURE__ */ P(fh), f = /* @__PURE__ */ P(() => r() === Rg.Dots), p = /* @__PURE__ */ P(() => r() === Rg.Cross), m = /* @__PURE__ */ P(() => Array.isArray(i()) ? i() : [i(), i()]), h = /* @__PURE__ */ P(() => `background-pattern-${H(d).flowId}-${n() ?? ""}`), g = /* @__PURE__ */ P(() => [H(m)[0] * H(d).viewport.zoom || 1, H(m)[1] * H(d).viewport.zoom || 1]), _ = /* @__PURE__ */ P(() => (a() ?? Ug[r()]) * H(d).viewport.zoom), v = /* @__PURE__ */ P(() => H(p) ? [H(_), H(_)] : H(g)), y = /* @__PURE__ */ P(() => H(f) ? [H(_) / 2, H(_) / 2] : [H(v)[0] / 2, H(v)[1] / 2]);
	var b = {
		get id() {
			return n();
		},
		set id(e) {
			n(e), F();
		},
		get variant() {
			return r();
		},
		set variant(e = Rg.Dots) {
			r(e), F();
		},
		get gap() {
			return i();
		},
		set gap(e = 20) {
			i(e), F();
		},
		get size() {
			return a();
		},
		set size(e) {
			a(e), F();
		},
		get lineWidth() {
			return o();
		},
		set lineWidth(e = 1) {
			o(e), F();
		},
		get bgColor() {
			return s();
		},
		set bgColor(e) {
			s(e), F();
		},
		get patternColor() {
			return c();
		},
		set patternColor(e) {
			c(e), F();
		},
		get patternClass() {
			return l();
		},
		set patternClass(e) {
			l(e), F();
		},
		get class() {
			return u();
		},
		set class(e) {
			u(e), F();
		}
	}, x = Wg();
	let S;
	var C = R(x), w = R(C), T = (e) => {
		{
			let t = /* @__PURE__ */ P(() => H(_) / 2);
			Bg(e, {
				get radius() {
					return H(t);
				},
				get class() {
					return l();
				}
			});
		}
	}, E = (e) => {
		Hg(e, {
			get dimensions() {
				return H(v);
			},
			get variant() {
				return r();
			},
			get lineWidth() {
				return o();
			},
			get class() {
				return l();
			}
		});
	};
	J(w, (e) => {
		H(f) ? e(T) : e(E, -1);
	}), A(C);
	var D = B(C);
	return A(x), V(() => {
		ca(x, 0, na([
			"svelte-flow__background",
			"svelte-flow__container",
			u()
		])), S = ua(x, "", S, {
			"--xy-background-color-props": s(),
			"--xy-background-pattern-color-props": c()
		}), Y(C, "id", H(h)), Y(C, "x", H(d).viewport.x % H(g)[0]), Y(C, "y", H(d).viewport.y % H(g)[1]), Y(C, "width", H(g)[0]), Y(C, "height", H(g)[1]), Y(C, "patternTransform", `translate(-${H(y)[0]},-${H(y)[1]})`), Y(D, "fill", `url(#${H(h)})`);
	}), K(e, x), N(b);
}
Z(Gg, {
	id: {},
	variant: {},
	gap: {},
	size: {},
	lineWidth: {},
	bgColor: {},
	patternColor: {},
	patternClass: {},
	class: {}
}, [], [], { mode: "open" });
function Kg(e) {
	let t = /* @__PURE__ */ P(fh), n = /* @__PURE__ */ P(() => H(t).nodeLookup), r = /* @__PURE__ */ P(() => H(t).nodes), i = /* @__PURE__ */ P(() => (H(r), H(n).get(e)));
	return { get current() {
		return H(i);
	} };
}
var qg = /* @__PURE__ */ W("<rect></rect>");
function Jg(e, t) {
	M(t, !0);
	let n = X(t, "id", 7), r = X(t, "x", 7), i = X(t, "y", 7), a = X(t, "width", 7), o = X(t, "height", 7), s = X(t, "borderRadius", 7, 5), c = X(t, "color", 7), l = X(t, "shapeRendering", 7), u = X(t, "strokeColor", 7), d = X(t, "strokeWidth", 7, 2), f = X(t, "selected", 7), p = X(t, "class", 7), m = X(t, "nodeComponent", 7), h = /* @__PURE__ */ P(() => Kg(n())), g = /* @__PURE__ */ P(() => {
		if (!H(h).current) return {
			width: 0,
			height: 0,
			x: 0,
			y: 0
		};
		let { width: e, height: t } = Ff(H(h).current);
		return {
			width: a() ?? e,
			height: o() ?? t,
			x: r() ?? H(h).current.internals.positionAbsolute.x,
			y: i() ?? H(h).current.internals.positionAbsolute.y
		};
	}), _ = /* @__PURE__ */ P(() => H(g).width), v = /* @__PURE__ */ P(() => H(g).height), y = /* @__PURE__ */ P(() => H(g).x), b = /* @__PURE__ */ P(() => H(g).y);
	var x = {
		get id() {
			return n();
		},
		set id(e) {
			n(e), F();
		},
		get x() {
			return r();
		},
		set x(e) {
			r(e), F();
		},
		get y() {
			return i();
		},
		set y(e) {
			i(e), F();
		},
		get width() {
			return a();
		},
		set width(e) {
			a(e), F();
		},
		get height() {
			return o();
		},
		set height(e) {
			o(e), F();
		},
		get borderRadius() {
			return s();
		},
		set borderRadius(e = 5) {
			s(e), F();
		},
		get color() {
			return c();
		},
		set color(e) {
			c(e), F();
		},
		get shapeRendering() {
			return l();
		},
		set shapeRendering(e) {
			l(e), F();
		},
		get strokeColor() {
			return u();
		},
		set strokeColor(e) {
			u(e), F();
		},
		get strokeWidth() {
			return d();
		},
		set strokeWidth(e = 2) {
			d(e), F();
		},
		get selected() {
			return f();
		},
		set selected(e) {
			f(e), F();
		},
		get class() {
			return p();
		},
		set class(e) {
			p(e), F();
		},
		get nodeComponent() {
			return m();
		},
		set nodeComponent(e) {
			m(e), F();
		}
	}, S = G(), C = z(S), w = (e) => {
		let t = /* @__PURE__ */ P(m);
		var r = G();
		Ji(z(r), () => H(t), (e, t) => {
			t(e, {
				get id() {
					return n();
				},
				get x() {
					return H(y);
				},
				get y() {
					return H(b);
				},
				get width() {
					return H(_);
				},
				get height() {
					return H(v);
				},
				get borderRadius() {
					return s();
				},
				get class() {
					return p();
				},
				get color() {
					return c();
				},
				get shapeRendering() {
					return l();
				},
				get strokeColor() {
					return u();
				},
				get strokeWidth() {
					return d();
				},
				get selected() {
					return f();
				}
			});
		}), K(e, r);
	}, T = (e) => {
		var t = qg();
		let n, r;
		V(() => {
			n = ca(t, 0, na(["svelte-flow__minimap-node", p()]), null, n, { selected: f() }), Y(t, "x", H(y)), Y(t, "y", H(b)), Y(t, "rx", s()), Y(t, "ry", s()), Y(t, "width", H(_)), Y(t, "height", H(v)), Y(t, "shape-rendering", l()), r = ua(t, "", r, {
				fill: c(),
				stroke: u(),
				"stroke-width": d()
			});
		}), K(e, t);
	};
	return J(C, (e) => {
		m() ? e(w) : e(T, -1);
	}), K(e, S), N(x);
}
Z(Jg, {
	id: {},
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
	class: {},
	nodeComponent: {}
}, [], [], { mode: "open" });
function Yg(e, t) {
	let n = $p({
		domNode: e,
		panZoom: t.panZoom,
		getTransform: () => {
			let { viewport: e } = t.store;
			return [
				e.x,
				e.y,
				e.zoom
			];
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
	function r(e) {
		n.update({
			translateExtent: e.translateExtent,
			width: e.width,
			height: e.height,
			inversePan: e.inversePan,
			zoomStep: e.zoomStep,
			pannable: e.pannable,
			zoomable: e.zoomable
		});
	}
	return {
		update: r,
		destroy() {
			n.destroy();
		}
	};
}
var Xg = (e) => e instanceof Function ? e : () => e, Zg = /* @__PURE__ */ new Set([
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
	"nodeComponent",
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
]), Qg = /* @__PURE__ */ W("<title> </title>"), $g = /* @__PURE__ */ W("<svg class=\"svelte-flow__minimap-svg\" role=\"img\"><!><!><path class=\"svelte-flow__minimap-mask\" fill-rule=\"evenodd\" pointer-events=\"none\"></path></svg>"), e_ = /* @__PURE__ */ U("<svelte-css-wrapper style=\"display: contents\"><!></svelte-css-wrapper>", 1);
function t_(e, t) {
	M(t, !0);
	let n = X(t, "position", 7, "bottom-right"), r = X(t, "ariaLabel", 7), i = X(t, "nodeStrokeColor", 7, "transparent"), a = X(t, "nodeColor", 7), o = X(t, "nodeClass", 7, ""), s = X(t, "nodeBorderRadius", 7, 5), c = X(t, "nodeStrokeWidth", 7, 2), l = X(t, "nodeComponent", 7), u = X(t, "bgColor", 7), d = X(t, "maskColor", 7), f = X(t, "maskStrokeColor", 7), p = X(t, "maskStrokeWidth", 7), m = X(t, "width", 7, 200), h = X(t, "height", 7, 150), g = X(t, "pannable", 7, !0), _ = X(t, "zoomable", 7, !0), v = X(t, "inversePan", 7), y = X(t, "zoomStep", 7), b = X(t, "class", 7), x = /* @__PURE__ */ Ua(t, Zg), S = /* @__PURE__ */ P(fh), C = /* @__PURE__ */ P(() => H(S).ariaLabelConfig), w = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision", T = /* @__PURE__ */ P(() => `svelte-flow__minimap-desc-${H(S).flowId}`), E = /* @__PURE__ */ P(() => ({
		x: -H(S).viewport.x / H(S).viewport.zoom,
		y: -H(S).viewport.y / H(S).viewport.zoom,
		width: H(S).width / H(S).viewport.zoom,
		height: H(S).height / H(S).viewport.zoom
	})), D = /* @__PURE__ */ P(() => bf(nf(H(S).nodeLookup, { filter: (e) => !e.hidden }), H(E))), ee = /* @__PURE__ */ P(() => H(D).width / m()), te = /* @__PURE__ */ P(() => H(D).height / h()), ne = /* @__PURE__ */ P(() => Math.max(H(ee), H(te))), re = /* @__PURE__ */ P(() => H(ne) * m()), ie = /* @__PURE__ */ P(() => H(ne) * h()), ae = /* @__PURE__ */ P(() => 5 * H(ne)), oe = /* @__PURE__ */ P(() => H(D).x - (H(re) - H(D).width) / 2 - H(ae)), O = /* @__PURE__ */ P(() => H(D).y - (H(ie) - H(D).height) / 2 - H(ae)), se = /* @__PURE__ */ P(() => H(re) + H(ae) * 2), ce = /* @__PURE__ */ P(() => H(ie) + H(ae) * 2), le = () => H(ne);
	var ue = {
		get position() {
			return n();
		},
		set position(e = "bottom-right") {
			n(e), F();
		},
		get ariaLabel() {
			return r();
		},
		set ariaLabel(e) {
			r(e), F();
		},
		get nodeStrokeColor() {
			return i();
		},
		set nodeStrokeColor(e = "transparent") {
			i(e), F();
		},
		get nodeColor() {
			return a();
		},
		set nodeColor(e) {
			a(e), F();
		},
		get nodeClass() {
			return o();
		},
		set nodeClass(e = "") {
			o(e), F();
		},
		get nodeBorderRadius() {
			return s();
		},
		set nodeBorderRadius(e = 5) {
			s(e), F();
		},
		get nodeStrokeWidth() {
			return c();
		},
		set nodeStrokeWidth(e = 2) {
			c(e), F();
		},
		get nodeComponent() {
			return l();
		},
		set nodeComponent(e) {
			l(e), F();
		},
		get bgColor() {
			return u();
		},
		set bgColor(e) {
			u(e), F();
		},
		get maskColor() {
			return d();
		},
		set maskColor(e) {
			d(e), F();
		},
		get maskStrokeColor() {
			return f();
		},
		set maskStrokeColor(e) {
			f(e), F();
		},
		get maskStrokeWidth() {
			return p();
		},
		set maskStrokeWidth(e) {
			p(e), F();
		},
		get width() {
			return m();
		},
		set width(e = 200) {
			m(e), F();
		},
		get height() {
			return h();
		},
		set height(e = 150) {
			h(e), F();
		},
		get pannable() {
			return g();
		},
		set pannable(e = !0) {
			g(e), F();
		},
		get zoomable() {
			return _();
		},
		set zoomable(e = !0) {
			_(e), F();
		},
		get inversePan() {
			return v();
		},
		set inversePan(e) {
			v(e), F();
		},
		get zoomStep() {
			return y();
		},
		set zoomStep(e) {
			y(e), F();
		},
		get class() {
			return b();
		},
		set class(e) {
			b(e), F();
		}
	}, de = e_(), fe = z(de);
	{
		let e = /* @__PURE__ */ P(() => ["svelte-flow__minimap", b()]);
		Ii(fe, () => ({ "--xy-minimap-background-color-props": u() })), lg(fe.lastChild, qa({
			get position() {
				return n();
			},
			get class() {
				return H(e);
			},
			"data-testid": "svelte-flow__minimap"
		}, () => x, {
			children: (e, t) => {
				var n = G(), u = z(n), b = (e) => {
					var t = $g();
					let n;
					var u = R(t), b = (e) => {
						var t = Qg(), n = R(t, !0);
						A(t), V(() => {
							Y(t, "id", H(T)), Si(n, r() ?? H(C)["minimap.ariaLabel"]);
						}), K(e, t);
					};
					J(u, (e) => {
						(r() ?? H(C)["minimap.ariaLabel"]) && e(b);
					});
					var x = B(u);
					Vi(x, 17, () => H(S).nodes, (e) => e.id, (e, t) => {
						let n = /* @__PURE__ */ P(() => H(S).nodeLookup.get(H(t).id));
						var r = G(), u = z(r), d = (e) => {
							{
								let r = /* @__PURE__ */ P(() => a() === void 0 ? void 0 : Xg(a())(H(t))), u = /* @__PURE__ */ P(() => Xg(i())(H(t))), d = /* @__PURE__ */ P(() => Xg(o())(H(t)));
								Jg(e, {
									get id() {
										return H(n).id;
									},
									get selected() {
										return H(n).selected;
									},
									get nodeComponent() {
										return l();
									},
									get color() {
										return H(r);
									},
									get borderRadius() {
										return s();
									},
									get strokeColor() {
										return H(u);
									},
									get strokeWidth() {
										return c();
									},
									get shapeRendering() {
										return w;
									},
									get class() {
										return H(d);
									}
								});
							}
						}, f = /* @__PURE__ */ P(() => H(n) && If(H(n)) && !H(n).hidden);
						J(u, (e) => {
							H(f) && e(d);
						}), K(e, r);
					});
					var D = B(x);
					A(t), Qi(t, (e, t) => Yg?.(e, t), () => ({
						store: H(S),
						panZoom: H(S).panZoom,
						getViewScale: le,
						translateExtent: H(S).translateExtent,
						width: H(S).width,
						height: H(S).height,
						inversePan: v(),
						zoomStep: y(),
						pannable: g(),
						zoomable: _()
					})), V(() => {
						Y(t, "width", m()), Y(t, "height", h()), Y(t, "viewBox", `${H(oe) ?? ""} ${H(O) ?? ""} ${H(se) ?? ""} ${H(ce) ?? ""}`), Y(t, "aria-labelledby", H(T)), n = ua(t, "", n, {
							"--xy-minimap-mask-background-color-props": d(),
							"--xy-minimap-mask-stroke-color-props": f(),
							"--xy-minimap-mask-stroke-width-props": p() ? p() * H(ne) : void 0
						}), Y(D, "d", `M${H(oe) - H(ae)},${H(O) - H(ae)}h${H(se) + H(ae) * 2}v${H(ce) + H(ae) * 2}h${-H(se) - H(ae) * 2}z
      M${H(E).x ?? ""},${H(E).y ?? ""}h${H(E).width ?? ""}v${H(E).height ?? ""}h${-H(E).width}z`);
					}), K(e, t);
				};
				J(u, (e) => {
					H(S).panZoom && e(b);
				}), K(e, n);
			},
			$$slots: { default: !0 }
		})), A(fe);
	}
	return K(e, de), N(ue);
}
Z(t_, {
	position: {},
	ariaLabel: {},
	nodeStrokeColor: {},
	nodeColor: {},
	nodeClass: {},
	nodeBorderRadius: {},
	nodeStrokeWidth: {},
	nodeComponent: {},
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
}, [], [], { mode: "open" });
var n_ = /* @__PURE__ */ new Set([
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
]), r_ = /* @__PURE__ */ U("<div><!></div>");
function i_(e, t) {
	M(t, !0);
	let n = X(t, "nodeId", 7), r = X(t, "position", 23, () => Q.Top), i = X(t, "align", 7, "center"), a = X(t, "offset", 7, 10), o = X(t, "isVisible", 7), s = X(t, "children", 7), c = /* @__PURE__ */ Ua(t, n_), l = fh(), { getNodesBounds: u } = tg(), d = vm(), f = /* @__PURE__ */ P(() => (l.nodes, (Array.isArray(n()) ? n() : [n() ?? d]).reduce((e, t) => {
		if (!t) throw Error("Either pass a nodeId or use within a Custom Node component");
		let n = l.nodeLookup.get(t);
		return n && e.push(n), e;
	}, []))), p = /* @__PURE__ */ P(() => {
		let e = u(H(f));
		return e ? _p(e, l.viewport, r(), a(), i()) : "";
	}), m = /* @__PURE__ */ P(() => H(f).length === 0 ? 1 : Math.max(...H(f).map((e) => (e.internals.z || 5) + 1))), h = /* @__PURE__ */ P(() => l.nodes.filter((e) => e.selected).length), g = /* @__PURE__ */ P(() => typeof o() == "boolean" ? o() : H(f).length === 1 && H(f)[0].selected && H(h) === 1);
	var _ = {
		get nodeId() {
			return n();
		},
		set nodeId(e) {
			n(e), F();
		},
		get position() {
			return r();
		},
		set position(e = Q.Top) {
			r(e), F();
		},
		get align() {
			return i();
		},
		set align(e = "center") {
			i(e), F();
		},
		get offset() {
			return a();
		},
		set offset(e = 10) {
			a(e), F();
		},
		get isVisible() {
			return o();
		},
		set isVisible(e) {
			o(e), F();
		},
		get children() {
			return s();
		},
		set children(e) {
			s(e), F();
		}
	}, v = G(), y = z(v), b = (e) => {
		var t = r_();
		Oa(t, (e, t) => ({
			class: "svelte-flow__node-toolbar",
			"data-id": e,
			...c,
			[ha]: t
		}), [() => H(f).reduce((e, t) => `${e}${t.id} `, "").trim(), () => ({
			display: Im().value ? "none" : void 0,
			position: "absolute",
			transform: H(p),
			"z-index": H(m)
		})]), q(R(t), () => s() ?? D), A(t), Qi(t, (e, t) => Fm?.(e, t), () => "root"), K(e, t);
	};
	return J(y, (e) => {
		l.domNode && H(g) && H(f) && e(b);
	}), K(e, v), N(_);
}
Z(i_, {
	nodeId: {},
	position: {},
	align: {},
	offset: {},
	isVisible: {},
	children: {}
}, [], [], { mode: "open" });
function a_(e) {
	let t = /* @__PURE__ */ P(fh), n = /* @__PURE__ */ P(() => H(t).nodes), r = /* @__PURE__ */ P(() => H(t).nodeLookup), i = [], a = !0, o = /* @__PURE__ */ P(() => {
		H(n);
		let t = [], o = Array.isArray(e), s = o ? e : [e];
		for (let e of s) {
			let n = H(r).get(e)?.internals.userNode;
			n && t.push({
				id: n.id,
				type: n.type,
				data: n.data
			});
		}
		return (!Ip(t, i) || a) && (i = t, a = !1), o ? i : i[0] ?? null;
	});
	return { get current() {
		return H(o);
	} };
}
var o_ = "tinyflow-component", s_ = [
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
], c_ = [
	{
		value: "ref",
		label: "引用"
	},
	{
		value: "fixed",
		label: "固定值"
	},
	{
		value: "form",
		label: "表单输入"
	}
], l_ = [
	{
		label: "文字",
		value: "text"
	},
	{
		label: "图片",
		value: "image"
	},
	{
		label: "视频",
		value: "video"
	},
	{
		label: "音频",
		value: "audio"
	},
	{
		label: "文件",
		value: "file"
	},
	{
		label: "其他",
		value: "other"
	}
], u_ = [
	{
		label: "单行输入框",
		value: "input"
	},
	{
		label: "多行输入框",
		value: "textarea"
	},
	{
		label: "下拉菜单",
		value: "select"
	},
	{
		label: "单选",
		value: "radio"
	},
	{
		label: "多选",
		value: "checkbox"
	}
], d_ = [{
	label: "单选",
	value: "radio"
}, {
	label: "多选",
	value: "checkbox"
}], f_ = [{
	label: "单选",
	value: "radio"
}, {
	label: "多选",
	value: "checkbox"
}], p_ = typeof window < "u" ? window : void 0;
typeof window < "u" && window.document, typeof window < "u" && window.navigator, typeof window < "u" && window.location;
function m_(e) {
	let t = e.activeElement;
	for (; t?.shadowRoot;) {
		let e = t.shadowRoot.activeElement;
		if (e === t) break;
		t = e;
	}
	return t;
}
new class {
	#e;
	#t;
	constructor(e = {}) {
		let { window: t = p_, document: n = t?.document } = e;
		t !== void 0 && (this.#e = n, this.#t = Lt((e) => {
			let n = $r(t, "focusin", e), r = $r(t, "focusout", e);
			return () => {
				n(), r();
			};
		}));
	}
	get current() {
		return this.#t?.(), this.#e ? m_(this.#e) : null;
	}
}();
function h_(e, t) {
	switch (e) {
		case "post":
			Yn(t);
			break;
		case "pre":
			Zn(t);
			break;
	}
}
function g_(e, t, n, r = {}) {
	let { lazy: i = !1 } = r, a = !i, o = Array.isArray(e) ? [] : void 0;
	h_(t, () => {
		let t = Array.isArray(e) ? e.map((e) => e()) : e();
		if (!a) {
			a = !0, o = t;
			return;
		}
		let r = Kr(() => n(t, o));
		return o = t, r;
	});
}
function __(e, t, n) {
	let r = Qn(() => {
		let i = !1;
		g_(e, t, (e, t) => {
			if (i) {
				r();
				return;
			}
			let a = n(e, t);
			return i = !0, a;
		}, { lazy: !0 });
	});
	Yn(() => r);
}
function v_(e, t, n) {
	g_(e, "post", t, n);
}
function y_(e, t, n) {
	g_(e, "pre", t, n);
}
v_.pre = y_;
function b_(e, t) {
	__(e, "post", t);
}
function x_(e, t) {
	__(e, "pre", t);
}
b_.pre = x_;
function S_(e, t) {
	switch (e) {
		case "local": return t.localStorage;
		case "session": return t.sessionStorage;
	}
}
var C_ = class {
	#e;
	#t;
	#n;
	#r;
	#i;
	#a = /* @__PURE__ */ I(0);
	constructor(e, t, n = {}) {
		let { storage: r = "local", serializer: i = {
			serialize: JSON.stringify,
			deserialize: JSON.parse
		}, syncTabs: a = !0, window: o = p_ } = n;
		if (this.#e = t, this.#t = e, this.#n = i, o === void 0) return;
		let s = S_(r, o);
		this.#r = s;
		let c = s.getItem(e);
		c === null ? this.#c(t) : this.#e = this.#s(c), a && r === "local" && (this.#i = Lt(() => $r(o, "storage", this.#o)));
	}
	get current() {
		this.#i?.(), H(this.#a);
		let e = this.#s(this.#r?.getItem(this.#t)) ?? this.#e, t = /* @__PURE__ */ new WeakMap(), n = (r) => {
			if (r === null || r?.constructor.name === "Date" || typeof r != "object") return r;
			let i = t.get(r);
			return i || (i = new Proxy(r, {
				get: (e, t) => (H(this.#a), n(Reflect.get(e, t))),
				set: (t, n, r) => (L(this.#a, H(this.#a) + 1), Reflect.set(t, n, r), this.#c(e), !0)
			}), t.set(r, i)), i;
		};
		return n(e);
	}
	set current(e) {
		this.#c(e), L(this.#a, H(this.#a) + 1);
	}
	#o = (e) => {
		e.key !== this.#t || e.newValue === null || (this.#e = this.#s(e.newValue), L(this.#a, H(this.#a) + 1));
	};
	#s(e) {
		try {
			return this.#n.deserialize(e);
		} catch (t) {
			console.error(`Error when parsing "${e}" from persisted store "${this.#t}"`, t);
			return;
		}
	}
	#c(e) {
		try {
			e != null && this.#r?.setItem(this.#t, this.#n.serialize(e));
		} catch (e) {
			console.error(`Error when writing value from persisted store "${this.#t}" to ${this.#r}`, e);
		}
	}
};
function w_(e, t) {
	let n, r = null;
	return (...i) => new Promise((a) => {
		r && r(void 0), r = a, clearTimeout(n), n = setTimeout(async () => {
			let t = await e(...i);
			r &&= (r(t), null);
		}, t);
	});
}
function T_(e, t) {
	let n = 0, r = null;
	return (...i) => {
		let a = Date.now();
		return n && a - n < t ? r ?? Promise.resolve(void 0) : (n = a, r = e(...i), r);
	};
}
function E_(e, t, n = {}, r) {
	let { lazy: i = !1, once: a = !1, initialValue: o, debounce: s, throttle: c } = n, l = /* @__PURE__ */ I(kn(o)), u = /* @__PURE__ */ I(!1), d = /* @__PURE__ */ I(void 0), f = /* @__PURE__ */ I(kn([])), p = () => {
		H(f).forEach((e) => e()), L(f, [], !0);
	}, m = (e) => {
		L(f, [...H(f), e], !0);
	}, h = async (e, n, r = !1) => {
		try {
			L(u, !0), L(d, void 0), p();
			let i = new AbortController();
			m(() => i.abort());
			let a = await t(e, n, {
				data: H(l),
				refetching: r,
				onCleanup: m,
				signal: i.signal
			});
			return L(l, a, !0), a;
		} catch (e) {
			e instanceof DOMException && e.name === "AbortError" || L(d, e, !0);
			return;
		} finally {
			L(u, !1);
		}
	}, g = s ? w_(h, s) : c ? T_(h, c) : h, _ = Array.isArray(e) ? e : [e], v;
	return r((t, n) => {
		a && v || v && JSON.stringify(t) === JSON.stringify(v) || (v = t, g(Array.isArray(e) ? t : t[0], Array.isArray(e) ? n : n?.[0]));
	}, { lazy: i }), {
		get current() {
			return H(l);
		},
		get loading() {
			return H(u);
		},
		get error() {
			return H(d);
		},
		mutate: (e) => {
			L(l, e, !0);
		},
		refetch: (t) => {
			let n = _.map((e) => e());
			return g(Array.isArray(e) ? n : n[0], Array.isArray(e) ? n : n[0], t ?? !0);
		}
	};
}
function D_(e, t, n) {
	return E_(e, t, n, (t, n) => {
		let r = Array.isArray(e) ? e : [e];
		v_(() => r.map((e) => e()), (e, n) => {
			t(e, n ?? []);
		}, n);
	});
}
function O_(e, t, n) {
	return E_(e, t, n, (t, n) => {
		let r = Array.isArray(e) ? e : [e];
		v_.pre(() => r.map((e) => e()), (e, n) => {
			t(e, n ?? []);
		}, n);
	});
}
D_.pre = O_;
function k_(e) {
	return e.filter((e) => e.length > 0);
}
var A_ = {
	getItem: (e) => null,
	setItem: (e, t) => {}
}, j_ = typeof document < "u";
function M_(e) {
	return typeof e == "function";
}
function N_(e) {
	return typeof e == "object" && !!e;
}
var P_ = Symbol("box"), F_ = Symbol("is-writable");
function I_(e) {
	return N_(e) && P_ in e;
}
function L_(e) {
	return R_.isBox(e) && F_ in e;
}
function R_(e) {
	let t = /* @__PURE__ */ I(kn(e));
	return {
		[P_]: !0,
		[F_]: !0,
		get current() {
			return H(t);
		},
		set current(e) {
			L(t, e, !0);
		}
	};
}
function z_(e, t) {
	let n = /* @__PURE__ */ P(e);
	return t ? {
		[P_]: !0,
		[F_]: !0,
		get current() {
			return H(n);
		},
		set current(e) {
			t(e);
		}
	} : {
		[P_]: !0,
		get current() {
			return e();
		}
	};
}
function B_(e) {
	return R_.isBox(e) ? e : M_(e) ? R_.with(e) : R_(e);
}
function V_(e) {
	return Object.entries(e).reduce((e, [t, n]) => R_.isBox(n) ? (R_.isWritableBox(n) ? Object.defineProperty(e, t, {
		get() {
			return n.current;
		},
		set(e) {
			n.current = e;
		}
	}) : Object.defineProperty(e, t, { get() {
		return n.current;
	} }), e) : Object.assign(e, { [t]: n }), {});
}
function H_(e) {
	return R_.isWritableBox(e) ? {
		[P_]: !0,
		get current() {
			return e.current;
		}
	} : e;
}
R_.from = B_, R_.with = z_, R_.flatten = V_, R_.readonly = H_, R_.isBox = I_, R_.isWritableBox = L_;
var U_ = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, W_ = /\n/g, G_ = /^\s*/, K_ = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, q_ = /^:\s*/, J_ = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, Y_ = /^[;\s]*/, X_ = /^\s+|\s+$/g, Z_ = "\n", Q_ = "/", $_ = "*", ev = "", tv = "comment", nv = "declaration";
function rv(e, t) {
	if (typeof e != "string") throw TypeError("First argument must be a string");
	if (!e) return [];
	t ||= {};
	var n = 1, r = 1;
	function i(e) {
		var t = e.match(W_);
		t && (n += t.length);
		var i = e.lastIndexOf(Z_);
		r = ~i ? e.length - i : r + e.length;
	}
	function a() {
		var e = {
			line: n,
			column: r
		};
		return function(t) {
			return t.position = new o(e), l(), t;
		};
	}
	function o(e) {
		this.start = e, this.end = {
			line: n,
			column: r
		}, this.source = t.source;
	}
	o.prototype.content = e;
	function s(i) {
		var a = /* @__PURE__ */ Error(t.source + ":" + n + ":" + r + ": " + i);
		if (a.reason = i, a.filename = t.source, a.line = n, a.column = r, a.source = e, !t.silent) throw a;
	}
	function c(t) {
		var n = t.exec(e);
		if (n) {
			var r = n[0];
			return i(r), e = e.slice(r.length), n;
		}
	}
	function l() {
		c(G_);
	}
	function u(e) {
		var t;
		for (e ||= []; t = d();) t !== !1 && e.push(t);
		return e;
	}
	function d() {
		var t = a();
		if (!(Q_ != e.charAt(0) || $_ != e.charAt(1))) {
			for (var n = 2; ev != e.charAt(n) && ($_ != e.charAt(n) || Q_ != e.charAt(n + 1));) ++n;
			if (n += 2, ev === e.charAt(n - 1)) return s("End of comment missing");
			var o = e.slice(2, n - 2);
			return r += 2, i(o), e = e.slice(n), r += 2, t({
				type: tv,
				comment: o
			});
		}
	}
	function f() {
		var e = a(), t = c(K_);
		if (t) {
			if (d(), !c(q_)) return s("property missing ':'");
			var n = c(J_), r = e({
				type: nv,
				property: iv(t[0].replace(U_, ev)),
				value: n ? iv(n[0].replace(U_, ev)) : ev
			});
			return c(Y_), r;
		}
	}
	function p() {
		var e = [];
		u(e);
		for (var t; t = f();) t !== !1 && (e.push(t), u(e));
		return e;
	}
	return l(), p();
}
function iv(e) {
	return e ? e.replace(X_, ev) : ev;
}
function av(e, t) {
	let n = null;
	if (!e || typeof e != "string") return n;
	let r = rv(e), i = typeof t == "function";
	return r.forEach((e) => {
		if (e.type !== "declaration") return;
		let { property: r, value: a } = e;
		i ? t(r, a, e) : a && (n ||= {}, n[r] = a);
	}), n;
}
function ov(e, t) {
	let n = RegExp(e, "g");
	return (e) => {
		if (typeof e != "string") throw TypeError(`expected an argument of type string, but got ${typeof e}`);
		return e.match(n) ? e.replace(n, t) : e;
	};
}
var sv = ov(/[A-Z]/, (e) => `-${e.toLowerCase()}`);
function cv(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError(`expected an argument of type object, but got ${typeof e}`);
	return Object.keys(e).map((t) => `${sv(t)}: ${e[t]};`).join("\n");
}
function lv(e = {}) {
	return cv(e).replace("\n", " ");
}
lv({
	position: "absolute",
	width: "1px",
	height: "1px",
	padding: "0",
	margin: "-1px",
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	borderWidth: "0",
	transform: "translateX(-100%)"
});
var uv = typeof window < "u" ? window : void 0;
typeof window < "u" && window.document, typeof window < "u" && window.navigator, typeof window < "u" && window.location;
function dv(e) {
	let t = e.activeElement;
	for (; t?.shadowRoot;) {
		let e = t.shadowRoot.activeElement;
		if (e === t) break;
		t = e;
	}
	return t;
}
new class {
	#e;
	#t;
	constructor(e = {}) {
		let { window: t = uv, document: n = t?.document } = e;
		t !== void 0 && (this.#e = n, this.#t = Lt((e) => {
			let n = $r(t, "focusin", e), r = $r(t, "focusout", e);
			return () => {
				n(), r();
			};
		}));
	}
	get current() {
		return this.#t?.(), this.#e ? dv(this.#e) : null;
	}
}();
function fv(e, t) {
	switch (e) {
		case "post":
			Yn(t);
			break;
		case "pre":
			Zn(t);
			break;
	}
}
function pv(e, t, n, r = {}) {
	let { lazy: i = !1 } = r, a = !i, o = Array.isArray(e) ? [] : void 0;
	fv(t, () => {
		let t = Array.isArray(e) ? e.map((e) => e()) : e();
		if (!a) {
			a = !0, o = t;
			return;
		}
		let r = Kr(() => n(t, o));
		return o = t, r;
	});
}
function mv(e, t, n) {
	let r = Qn(() => {
		let i = !1;
		pv(e, t, (e, t) => {
			if (i) {
				r();
				return;
			}
			let a = n(e, t);
			return i = !0, a;
		}, { lazy: !0 });
	});
	Yn(() => r);
}
function hv(e, t, n) {
	pv(e, "post", t, n);
}
function gv(e, t, n) {
	pv(e, "pre", t, n);
}
hv.pre = gv;
function _v(e, t) {
	mv(e, "post", t);
}
function vv(e, t) {
	mv(e, "pre", t);
}
_v.pre = vv;
var yv = R_("mode-watcher-mode"), bv = R_("mode-watcher-theme"), xv = [
	"dark",
	"light",
	"system"
];
function Sv(e) {
	return typeof e == "string" && xv.includes(e);
}
var Cv = class {
	#e = "system";
	#t = j_ ? localStorage : A_;
	#n = this.#t.getItem(yv.current);
	#r = Sv(this.#n) ? this.#n : this.#e;
	#i = /* @__PURE__ */ I(kn(this.#a()));
	#a(e = this.#r) {
		return new C_(yv.current, e, { serializer: {
			serialize: (e) => e,
			deserialize: (e) => Sv(e) ? e : this.#e
		} });
	}
	constructor() {
		Qn(() => v_.pre(() => yv.current, (e, t) => {
			let n = H(this.#i).current;
			L(this.#i, this.#a(n), !0), t && localStorage.removeItem(t);
		}));
	}
	get current() {
		return H(this.#i).current;
	}
	set current(e) {
		H(this.#i).current = e;
	}
}, wv = class {
	#e = void 0;
	#t = !0;
	#n = /* @__PURE__ */ I(kn(this.#e));
	#r = typeof window < "u" && typeof window.matchMedia == "function" ? new rh("prefers-color-scheme: light") : { current: !1 };
	query() {
		j_ && L(this.#n, this.#r.current ? "light" : "dark", !0);
	}
	tracking(e) {
		this.#t = e;
	}
	constructor() {
		Qn(() => {
			Zn(() => {
				this.#t && this.query();
			});
		}), this.query = this.query.bind(this), this.tracking = this.tracking.bind(this);
	}
	get current() {
		return H(this.#n);
	}
}, Tv = new Cv(), Ev = new wv(), Dv = new class {
	#e = j_ ? localStorage : A_;
	#t = this.#e.getItem(bv.current);
	#n = this.#t === null || this.#t === void 0 ? "" : this.#t;
	#r = /* @__PURE__ */ I(kn(this.#i()));
	#i(e = this.#n) {
		return new C_(bv.current, e, { serializer: {
			serialize: (e) => typeof e == "string" ? e : "",
			deserialize: (e) => e
		} });
	}
	constructor() {
		Qn(() => v_.pre(() => bv.current, (e, t) => {
			let n = H(this.#r).current;
			L(this.#r, this.#i(n), !0), t && localStorage.removeItem(t);
		}));
	}
	get current() {
		return H(this.#r).current;
	}
	set current(e) {
		H(this.#r).current = e;
	}
}(), Ov, kv, Av = !1, jv = null;
function Mv() {
	return jv || (jv = document.createElement("style"), jv.appendChild(document.createTextNode("* {\n		-webkit-transition: none !important;\n		-moz-transition: none !important;\n		-o-transition: none !important;\n		-ms-transition: none !important;\n		transition: none !important;\n	}")), jv);
}
function Nv(e, t = !1) {
	if (typeof document > "u") return;
	if (!Av) {
		Av = !0, e();
		return;
	}
	if (typeof window < "u" && window.__vitest_worker__) {
		e();
		return;
	}
	clearTimeout(Ov), clearTimeout(kv);
	let n = Mv(), r = () => document.head.appendChild(n), i = () => {
		n.parentNode && document.head.removeChild(n);
	};
	function a() {
		e(), window.requestAnimationFrame(i);
	}
	if (window.requestAnimationFrame !== void 0) {
		r(), t ? a() : window.requestAnimationFrame(() => {
			a();
		});
		return;
	}
	r(), Ov = window.setTimeout(() => {
		e(), kv = window.setTimeout(i, 16);
	}, 16);
}
var Pv = R_(void 0), Fv = R_(!0), Iv = R_(!1), Lv = R_([]), Rv = R_([]);
function zv() {
	let e = /* @__PURE__ */ P(() => {
		if (!j_) return;
		let e = Tv.current === "system" ? Ev.current : Tv.current, t = k_(Lv.current), n = k_(Rv.current);
		function r() {
			let r = document.documentElement, i = document.querySelector("meta[name=\"theme-color\"]");
			e === "light" ? (t.length && r.classList.remove(...t), n.length && r.classList.add(...n), r.style.colorScheme = "light", i && Pv.current && i.setAttribute("content", Pv.current.light)) : (n.length && r.classList.remove(...n), t.length && r.classList.add(...t), r.style.colorScheme = "dark", i && Pv.current && i.setAttribute("content", Pv.current.dark));
		}
		return Fv.current ? Nv(r, Iv.current) : r(), e;
	});
	return { get current() {
		return H(e);
	} };
}
function Bv() {
	let e = /* @__PURE__ */ P(() => {
		if (Dv.current, !j_) return;
		function e() {
			document.documentElement.setAttribute("data-theme", Dv.current);
		}
		return Fv.current ? Nv(e, Kr(() => Iv.current)) : e(), Dv.current;
	});
	return { get current() {
		return H(e);
	} };
}
var Vv = zv(), Hv = Bv();
function Uv(e) {
	Tv.current = e;
}
function Wv(e) {
	Dv.current = e;
}
function Gv(e) {
	return e;
}
function Kv({ defaultMode: e = "system", themeColors: t, darkClassNames: n = ["dark"], lightClassNames: r = [], defaultTheme: i = "", modeStorageKey: a = "mode-watcher-mode", themeStorageKey: o = "mode-watcher-theme" }) {
	let s = document.documentElement, c = localStorage.getItem(a) ?? e, l = localStorage.getItem(o) ?? i, u = c === "light" || c === "system" && window.matchMedia("(prefers-color-scheme: light)").matches;
	if (u ? (n.length && s.classList.remove(...n.filter(Boolean)), r.length && s.classList.add(...r.filter(Boolean))) : (r.length && s.classList.remove(...r.filter(Boolean)), n.length && s.classList.add(...n.filter(Boolean))), s.style.colorScheme = u ? "light" : "dark", t) {
		let e = document.querySelector("meta[name=\"theme-color\"]");
		e && e.setAttribute("content", c === "light" ? t.light : t.dark);
	}
	l && (s.setAttribute("data-theme", l), localStorage.setItem(o, l)), localStorage.setItem(a, c);
}
var qv = /* @__PURE__ */ U("<meta name=\"theme-color\"/>");
function Jv(e, t) {
	M(t, !0);
	let n = X(t, "themeColors", 7);
	var r = {
		get themeColors() {
			return n();
		},
		set themeColors(e) {
			n(e), F();
		}
	}, i = G(), a = z(i), o = (e) => {
		var t = qv();
		V(() => Y(t, "content", n().dark)), K(e, t);
	};
	return J(a, (e) => {
		n() && e(o);
	}), K(e, i), N(r);
}
Z(Jv, { themeColors: {} }, [], [], { mode: "open" });
var Yv = /* @__PURE__ */ U("<meta name=\"theme-color\"/>"), Xv = /* @__PURE__ */ U("<!> <!>", 1);
function Zv(e, t) {
	M(t, !0);
	let n = X(t, "trueNonce", 7, ""), r = X(t, "initConfig", 7), i = X(t, "themeColors", 7);
	return Xi("rkz1zj", (e) => {
		var t = Xv(), a = z(t), o = (e) => {
			var t = Yv();
			V(() => Y(t, "content", i().dark)), K(e, t);
		};
		J(a, (e) => {
			i() && e(o);
		}), qi(B(a, 2), () => `<script${n() ? ` nonce=${n()}` : ""}>(` + Kv.toString() + ")(" + JSON.stringify(r()) + ");<\/script>"), K(e, t);
	}), N({
		get trueNonce() {
			return n();
		},
		set trueNonce(e = "") {
			n(e), F();
		},
		get initConfig() {
			return r();
		},
		set initConfig(e) {
			r(e), F();
		},
		get themeColors() {
			return i();
		},
		set themeColors(e) {
			i(e), F();
		}
	});
}
Z(Zv, {
	trueNonce: {},
	initConfig: {},
	themeColors: {}
}, [], [], { mode: "open" });
function Qv(e, t) {
	M(t, !0);
	let n = X(t, "track", 7, !0), r = X(t, "defaultMode", 7, "system"), i = X(t, "themeColors", 7), a = X(t, "disableTransitions", 7, !0), o = X(t, "darkClassNames", 23, () => ["dark"]), s = X(t, "lightClassNames", 23, () => []), c = X(t, "defaultTheme", 7, ""), l = X(t, "nonce", 7, ""), u = X(t, "themeStorageKey", 7, "mode-watcher-theme"), d = X(t, "modeStorageKey", 7, "mode-watcher-mode"), f = X(t, "disableHeadScriptInjection", 7, !1), p = X(t, "synchronousModeChanges", 7, !1);
	yv.current = d(), bv.current = u(), Lv.current = o(), Rv.current = s(), Fv.current = a(), Pv.current = i(), Iv.current = p(), Zn(() => {
		Iv.current = p();
	}), Zn(() => {
		Fv.current = a();
	}), Zn(() => {
		Pv.current = i();
	}), Zn(() => {
		Lv.current = o();
	}), Zn(() => {
		Rv.current = s();
	}), Zn(() => {
		yv.current = d();
	}), Zn(() => {
		bv.current = u();
	}), Zn(() => {
		Vv.current, yv.current, bv.current, Hv.current;
	}), Ai(() => {
		Ev.tracking(n()), Ev.query();
		let e = localStorage.getItem(yv.current);
		Uv(Sv(e) ? e : r()), Wv(localStorage.getItem(bv.current) || c());
	});
	let m = Gv({
		defaultMode: r(),
		themeColors: i(),
		darkClassNames: o(),
		lightClassNames: s(),
		defaultTheme: c(),
		modeStorageKey: d(),
		themeStorageKey: u()
	}), h = /* @__PURE__ */ P(() => typeof window > "u" ? l() : "");
	var g = {
		get track() {
			return n();
		},
		set track(e = !0) {
			n(e), F();
		},
		get defaultMode() {
			return r();
		},
		set defaultMode(e = "system") {
			r(e), F();
		},
		get themeColors() {
			return i();
		},
		set themeColors(e) {
			i(e), F();
		},
		get disableTransitions() {
			return a();
		},
		set disableTransitions(e = !0) {
			a(e), F();
		},
		get darkClassNames() {
			return o();
		},
		set darkClassNames(e = ["dark"]) {
			o(e), F();
		},
		get lightClassNames() {
			return s();
		},
		set lightClassNames(e = []) {
			s(e), F();
		},
		get defaultTheme() {
			return c();
		},
		set defaultTheme(e = "") {
			c(e), F();
		},
		get nonce() {
			return l();
		},
		set nonce(e = "") {
			l(e), F();
		},
		get themeStorageKey() {
			return u();
		},
		set themeStorageKey(e = "mode-watcher-theme") {
			u(e), F();
		},
		get modeStorageKey() {
			return d();
		},
		set modeStorageKey(e = "mode-watcher-mode") {
			d(e), F();
		},
		get disableHeadScriptInjection() {
			return f();
		},
		set disableHeadScriptInjection(e = !1) {
			f(e), F();
		},
		get synchronousModeChanges() {
			return p();
		},
		set synchronousModeChanges(e = !1) {
			p(e), F();
		}
	}, _ = G(), v = z(_), y = (e) => {
		Jv(e, { get themeColors() {
			return Pv.current;
		} });
	}, b = (e) => {
		Zv(e, {
			get trueNonce() {
				return H(h);
			},
			get initConfig() {
				return m;
			},
			get themeColors() {
				return Pv.current;
			}
		});
	};
	return J(v, (e) => {
		f() ? e(y) : e(b, -1);
	}), K(e, _), N(g);
}
Z(Qv, {
	track: {},
	defaultMode: {},
	themeColors: {},
	disableTransitions: {},
	darkClassNames: {},
	lightClassNames: {},
	defaultTheme: {},
	nonce: {},
	themeStorageKey: {},
	modeStorageKey: {},
	disableHeadScriptInjection: {},
	synchronousModeChanges: {}
}, [], [], { mode: "open" });
var $v = class {
	options;
	rootEl;
	svelteFlowInstance;
	constructor(e) {
		if (typeof e.element != "string" && !(e.element instanceof Element)) throw Error("element must be a string or Element");
		(!e.defaultTheme || e.defaultTheme === "system") && (e.defaultTheme = Ev.current), this._setOptions(e), this._init();
	}
	_init() {
		if (typeof this.options.element == "string") {
			if (this.rootEl = document.querySelector(this.options.element), !this.rootEl) throw Error(`element not found by document.querySelector('${this.options.element}')`);
		} else if (this.options.element instanceof Element) this.rootEl = this.options.element;
		else throw Error("element must be a string or Element");
		let e = document.createElement(o_);
		e.style.display = "block", e.style.width = "100%", e.style.height = "100%", e.classList.add(...this.options.defaultTheme === "dark" ? ["tf-root", "dark"] : ["tf-root"]), e.options = this.options, e.onInit = (e) => {
			this.svelteFlowInstance = e;
		}, this.rootEl.appendChild(e);
	}
	_setOptions(e) {
		this.options = { ...e };
	}
	getOptions() {
		return this.options;
	}
	getData() {
		return this.svelteFlowInstance.toObject();
	}
	setData(e) {
		this.options.data = e;
		let t = document.createElement(o_);
		t.style.display = "block", t.style.width = "100%", t.style.height = "100%", t.classList.add(...this.options.defaultTheme === "dark" ? ["tf-root", "dark"] : ["tf-root"]), t.options = this.options, t.onInit = (e) => {
			this.svelteFlowInstance = e;
		}, this.destroy(), this.rootEl.appendChild(t);
	}
	setTheme(e) {
		e === "system" ? this.options.defaultTheme = Ev.current : this.options.defaultTheme = e, this.destroy(), this._init();
	}
	destroy() {
		for (; this.rootEl.firstChild;) this.rootEl.removeChild(this.rootEl.firstChild);
	}
}, ey = (() => {
	let e = /* @__PURE__ */ I([]), t = /* @__PURE__ */ I([]), n = /* @__PURE__ */ I({
		x: 250,
		y: 100,
		zoom: 1
	});
	return {
		init: (n, r) => {
			L(e, n), L(t, r);
		},
		getNodes: () => H(e),
		setNodes: (t) => {
			L(e, t);
		},
		getEdges: () => H(t),
		setEdges: (e) => {
			L(t, e);
		},
		getViewport: () => H(n),
		setViewport: (e) => {
			L(n, e);
		},
		getNode: (t) => H(e).find((e) => e.id === t),
		addNode: (t) => {
			L(e, [...H(e), t]);
		},
		removeNode: (t) => {
			L(e, H(e).filter((e) => e.id !== t));
		},
		updateNode: (t, n) => {
			L(e, H(e).map((e) => e.id === t ? {
				...e,
				...n
			} : e));
		},
		updateNodes: (t) => {
			L(e, t(H(e)));
		},
		updateNodeData: (t, n) => {
			L(e, H(e).map((e) => e.id === t ? {
				...e,
				data: {
					...e.data,
					...n
				}
			} : e));
		},
		selectNodeOnly: (t) => {
			L(e, H(e).map((e) => e.id === t ? {
				...e,
				selected: !0
			} : {
				...e,
				selected: !1
			}));
		},
		getEdge: (e) => H(t).find((t) => t.id === e),
		addEdge: (e) => {
			L(t, [...H(t), e]);
		},
		removeEdge: (e) => {
			L(t, H(t).filter((t) => t.id !== e));
		},
		updateEdge: (e, n) => {
			L(t, H(t).map((t) => t.id === e ? {
				...t,
				...n
			} : t));
		},
		updateEdges: (e) => {
			L(t, e(H(t)));
		},
		updateEdgeData: (e, n) => {
			L(t, H(t).map((t) => t.id === e ? {
				...t,
				data: {
					...t.data,
					...n
				}
			} : t));
		}
	};
})();
function ty(...e) {
	return ta(e);
}
var ny = {
	default: "tf-btn-default",
	outline: "tf-btn-outline",
	secondary: "tf-btn-secondary",
	ghost: "tf-btn-ghost",
	destructive: "tf-btn-destructive",
	link: "tf-btn-link"
}, ry = {
	default: "tf-btn-size-default",
	xs: "tf-btn-xs",
	sm: "tf-btn-sm",
	lg: "tf-btn-lg",
	icon: "tf-btn-icon",
	"icon-xs": "tf-btn-icon-xs",
	"icon-sm": "tf-btn-icon-sm",
	"icon-lg": "tf-btn-icon-lg"
}, iy = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"class",
	"variant",
	"size",
	"ref",
	"href",
	"type",
	"disabled",
	"children",
	"primary"
]), ay = /* @__PURE__ */ U("<a><!></a>"), oy = /* @__PURE__ */ U("<button><!></button>");
function sy(e, t) {
	M(t, !0);
	let n = X(t, "class", 7), r = X(t, "variant", 7, "outline"), i = X(t, "size", 7, "default"), a = X(t, "ref", 15, null), o = X(t, "href", 7, void 0), s = X(t, "type", 7, "button"), c = X(t, "disabled", 7), l = X(t, "children", 7), u = X(t, "primary", 7), d = /* @__PURE__ */ Ua(t, iy);
	u() && r("default");
	var f = {
		get class() {
			return n();
		},
		set class(e) {
			n(e), F();
		},
		get variant() {
			return r();
		},
		set variant(e = "outline") {
			r(e), F();
		},
		get size() {
			return i();
		},
		set size(e = "default") {
			i(e), F();
		},
		get ref() {
			return a();
		},
		set ref(e = null) {
			a(e), F();
		},
		get href() {
			return o();
		},
		set href(e = void 0) {
			o(e), F();
		},
		get type() {
			return s();
		},
		set type(e = "button") {
			s(e), F();
		},
		get disabled() {
			return c();
		},
		set disabled(e) {
			c(e), F();
		},
		get children() {
			return l();
		},
		set children(e) {
			l(e), F();
		},
		get primary() {
			return u();
		},
		set primary(e) {
			u(e), F();
		}
	}, p = G(), m = z(p), h = (e) => {
		var t = ay();
		Oa(t, (e) => ({
			"data-slot": "button",
			class: e,
			href: c() ? void 0 : o(),
			"aria-disabled": c(),
			role: c() ? "link" : void 0,
			tabindex: c() ? -1 : void 0,
			...d
		}), [() => ty("nopan nodrag tf-btn", ny[r()], ry[i()], n())]), q(R(t), () => l() ?? D), A(t), za(t, (e) => a(e), () => a()), K(e, t);
	}, g = (e) => {
		var t = oy();
		Oa(t, (e) => ({
			"data-slot": "button",
			class: e,
			type: s(),
			disabled: c(),
			...d
		}), [() => ty("nopan nodrag tf-btn", ny[r()], ry[i()], n())]), q(R(t), () => l() ?? D), A(t), za(t, (e) => a(e), () => a()), K(e, t);
	};
	return J(m, (e) => {
		o() ? e(h) : e(g, -1);
	}), K(e, p), N(f);
}
Z(sy, {
	class: {},
	variant: {},
	size: {},
	ref: {},
	href: {},
	type: {},
	disabled: {},
	children: {},
	primary: {}
}, [], [], { mode: "open" });
function cy(e) {
	return typeof e == "function";
}
function ly(e) {
	return typeof e == "object" && !!e;
}
var uy = [
	"string",
	"number",
	"bigint",
	"boolean"
];
function dy(e) {
	return e == null || uy.includes(typeof e) ? !0 : Array.isArray(e) ? e.every((e) => dy(e)) : typeof e == "object" && Object.getPrototypeOf(e) === Object.prototype;
}
var fy = Symbol("box"), py = Symbol("is-writable");
function $(e, t) {
	let n = /* @__PURE__ */ P(e);
	return t ? {
		[fy]: !0,
		[py]: !0,
		get current() {
			return H(n);
		},
		set current(e) {
			t(e);
		}
	} : {
		[fy]: !0,
		get current() {
			return e();
		}
	};
}
function my(e) {
	return ly(e) && fy in e;
}
function hy(e) {
	return my(e) ? e : cy(e) ? $(e) : gy(e);
}
function gy(e) {
	let t = /* @__PURE__ */ I(kn(e));
	return {
		[fy]: !0,
		[py]: !0,
		get current() {
			return H(t);
		},
		set current(e) {
			L(t, e, !0);
		}
	};
}
function _y(...e) {
	return function(t) {
		for (let n of e) if (n) {
			if (t.defaultPrevented) return;
			typeof n == "function" ? n.call(this, t) : n.current?.call(this, t);
		}
	};
}
var vy = /\d/, yy = [
	"-",
	"_",
	"/",
	"."
];
function by(e = "") {
	if (!vy.test(e)) return e !== e.toLowerCase();
}
function xy(e) {
	let t = [], n = "", r, i;
	for (let a of e) {
		let e = yy.includes(a);
		if (e === !0) {
			t.push(n), n = "", r = void 0;
			continue;
		}
		let o = by(a);
		if (i === !1) {
			if (r === !1 && o === !0) {
				t.push(n), n = a, r = o;
				continue;
			}
			if (r === !0 && o === !1 && n.length > 1) {
				let e = n.at(-1);
				t.push(n.slice(0, Math.max(0, n.length - 1))), n = e + a, r = o;
				continue;
			}
		}
		n += a, r = o, i = e;
	}
	return t.push(n), t;
}
function Sy(e) {
	return e ? xy(e).map((e) => wy(e)).join("") : "";
}
function Cy(e) {
	return Ty(Sy(e || ""));
}
function wy(e) {
	return e ? e[0].toUpperCase() + e.slice(1) : "";
}
function Ty(e) {
	return e ? e[0].toLowerCase() + e.slice(1) : "";
}
function Ey(e) {
	if (!e) return {};
	let t = {};
	function n(e, n) {
		if (e.startsWith("-moz-") || e.startsWith("-webkit-") || e.startsWith("-ms-") || e.startsWith("-o-")) {
			t[Sy(e)] = n;
			return;
		}
		if (e.startsWith("--")) {
			t[e] = n;
			return;
		}
		t[Cy(e)] = n;
	}
	return av(e, n), t;
}
function Dy(...e) {
	return (...t) => {
		for (let n of e) typeof n == "function" && n(...t);
	};
}
function Oy(e, t) {
	let n = RegExp(e, "g");
	return (e) => {
		if (typeof e != "string") throw TypeError(`expected an argument of type string, but got ${typeof e}`);
		return e.match(n) ? e.replace(n, t) : e;
	};
}
var ky = Oy(/[A-Z]/, (e) => `-${e.toLowerCase()}`);
function Ay(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError(`expected an argument of type object, but got ${typeof e}`);
	return Object.keys(e).map((t) => `${ky(t)}: ${e[t]};`).join("\n");
}
function jy(e = {}) {
	return Ay(e).replace("\n", " ");
}
var My = new Set(/* @__PURE__ */ "onabort.onanimationcancel.onanimationend.onanimationiteration.onanimationstart.onauxclick.onbeforeinput.onbeforetoggle.onblur.oncancel.oncanplay.oncanplaythrough.onchange.onclick.onclose.oncompositionend.oncompositionstart.oncompositionupdate.oncontextlost.oncontextmenu.oncontextrestored.oncopy.oncuechange.oncut.ondblclick.ondrag.ondragend.ondragenter.ondragleave.ondragover.ondragstart.ondrop.ondurationchange.onemptied.onended.onerror.onfocus.onfocusin.onfocusout.onformdata.ongotpointercapture.oninput.oninvalid.onkeydown.onkeypress.onkeyup.onload.onloadeddata.onloadedmetadata.onloadstart.onlostpointercapture.onmousedown.onmouseenter.onmouseleave.onmousemove.onmouseout.onmouseover.onmouseup.onpaste.onpause.onplay.onplaying.onpointercancel.onpointerdown.onpointerenter.onpointerleave.onpointermove.onpointerout.onpointerover.onpointerup.onprogress.onratechange.onreset.onresize.onscroll.onscrollend.onsecuritypolicyviolation.onseeked.onseeking.onselect.onselectionchange.onselectstart.onslotchange.onstalled.onsubmit.onsuspend.ontimeupdate.ontoggle.ontouchcancel.ontouchend.ontouchmove.ontouchstart.ontransitioncancel.ontransitionend.ontransitionrun.ontransitionstart.onvolumechange.onwaiting.onwebkitanimationend.onwebkitanimationiteration.onwebkitanimationstart.onwebkittransitionend.onwheel".split("."));
function Ny(e) {
	return My.has(e);
}
function Py(...e) {
	let t = { ...e[0] };
	for (let n = 1; n < e.length; n++) {
		let r = e[n];
		if (r) {
			for (let e of Object.keys(r)) {
				let n = t[e], i = r[e], a = typeof n == "function", o = typeof i == "function";
				if (a && typeof o && Ny(e)) t[e] = _y(n, i);
				else if (a && o) t[e] = Dy(n, i);
				else if (e === "class") {
					let r = dy(n), a = dy(i);
					r && a ? t[e] = ta(n, i) : r ? t[e] = ta(n) : a && (t[e] = ta(i));
				} else if (e === "style") {
					let r = typeof n == "object", a = typeof i == "object", o = typeof n == "string", s = typeof i == "string";
					if (r && a) t[e] = {
						...n,
						...i
					};
					else if (r && s) {
						let r = Ey(i);
						t[e] = {
							...n,
							...r
						};
					} else if (o && a) t[e] = {
						...Ey(n),
						...i
					};
					else if (o && s) {
						let r = Ey(n), a = Ey(i);
						t[e] = {
							...r,
							...a
						};
					} else r ? t[e] = n : a ? t[e] = i : o ? t[e] = n : s && (t[e] = i);
				} else t[e] = i === void 0 ? n : i;
			}
			for (let e of Object.getOwnPropertySymbols(r)) {
				let n = t[e], i = r[e];
				t[e] = i === void 0 ? n : i;
			}
		}
	}
	return typeof t.style == "object" && (t.style = jy(t.style).replaceAll("\n", " ")), t.hidden === !1 && (t.hidden = void 0, delete t.hidden), t.disabled === !1 && (t.disabled = void 0, delete t.disabled), t;
}
var Fy = {
	position: "absolute",
	width: "1px",
	height: "1px",
	padding: "0",
	margin: "-1px",
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	borderWidth: "0",
	transform: "translateX(-100%)"
};
jy(Fy);
var Iy = typeof window < "u" ? window : void 0;
typeof window < "u" && window.document, typeof window < "u" && window.navigator, typeof window < "u" && window.location;
function Ly(e) {
	let t = e.activeElement;
	for (; t?.shadowRoot;) {
		let e = t.shadowRoot.activeElement;
		if (e === t) break;
		t = e;
	}
	return t;
}
new class {
	#e;
	#t;
	constructor(e = {}) {
		let { window: t = Iy, document: n = t?.document } = e;
		t !== void 0 && (this.#e = n, this.#t = Lt((e) => {
			let n = $r(t, "focusin", e), r = $r(t, "focusout", e);
			return () => {
				n(), r();
			};
		}));
	}
	get current() {
		return this.#t?.(), this.#e ? Ly(this.#e) : null;
	}
}();
function Ry(e) {
	return typeof e == "function";
}
var zy = class {
	#e;
	#t;
	constructor(e) {
		this.#e = e, this.#t = Symbol(e);
	}
	get key() {
		return this.#t;
	}
	exists() {
		return pt(this.#t);
	}
	get() {
		let e = dt(this.#t);
		if (e === void 0) throw Error(`Context "${this.#e}" not found`);
		return e;
	}
	getOr(e) {
		let t = dt(this.#t);
		return t === void 0 ? e : t;
	}
	set(e) {
		return ft(this.#t, e);
	}
};
function By(e, t) {
	switch (e) {
		case "post":
			Yn(t);
			break;
		case "pre":
			Zn(t);
			break;
	}
}
function Vy(e, t, n, r = {}) {
	let { lazy: i = !1 } = r, a = !i, o = Array.isArray(e) ? [] : void 0;
	By(t, () => {
		let t = Array.isArray(e) ? e.map((e) => e()) : e();
		if (!a) {
			a = !0, o = t;
			return;
		}
		let r = Kr(() => n(t, o));
		return o = t, r;
	});
}
function Hy(e, t, n) {
	let r = Qn(() => {
		let i = !1;
		Vy(e, t, (e, t) => {
			if (i) {
				r();
				return;
			}
			let a = n(e, t);
			return i = !0, a;
		}, { lazy: !0 });
	});
	Yn(() => r);
}
function Uy(e, t, n) {
	Vy(e, "post", t, n);
}
function Wy(e, t, n) {
	Vy(e, "pre", t, n);
}
Uy.pre = Wy;
function Gy(e, t) {
	Hy(e, "post", t);
}
function Ky(e, t) {
	Hy(e, "pre", t);
}
Gy.pre = Ky;
function qy(e) {
	return Ry(e) ? e() : e;
}
var Jy = class {
	#e = {
		width: 0,
		height: 0
	};
	#t = !1;
	#n;
	#r;
	#i;
	#a = /* @__PURE__ */ P(() => (H(this.#s)?.(), this.getSize().width));
	#o = /* @__PURE__ */ P(() => (H(this.#s)?.(), this.getSize().height));
	#s = /* @__PURE__ */ P(() => {
		let e = qy(this.#r);
		if (e) return Lt((t) => {
			if (!this.#i) return;
			let n = new this.#i.ResizeObserver((e) => {
				this.#t = !0;
				for (let t of e) {
					let e = this.#n.box === "content-box" ? t.contentBoxSize : t.borderBoxSize, n = Array.isArray(e) ? e : [e];
					this.#e.width = n.reduce((e, t) => Math.max(e, t.inlineSize), 0), this.#e.height = n.reduce((e, t) => Math.max(e, t.blockSize), 0);
				}
				t();
			});
			return n.observe(e), () => {
				this.#t = !1, n.disconnect();
			};
		});
	});
	constructor(e, t = { box: "border-box" }) {
		this.#i = t.window ?? Iy, this.#n = t, this.#r = e, this.#e = {
			width: 0,
			height: 0
		};
	}
	calculateSize() {
		let e = qy(this.#r);
		if (!e || !this.#i) return;
		let t = e.offsetWidth, n = e.offsetHeight;
		if (this.#n.box === "border-box") return {
			width: t,
			height: n
		};
		let r = this.#i.getComputedStyle(e), i = parseFloat(r.paddingLeft) + parseFloat(r.paddingRight), a = parseFloat(r.paddingTop) + parseFloat(r.paddingBottom), o = parseFloat(r.borderLeftWidth) + parseFloat(r.borderRightWidth), s = parseFloat(r.borderTopWidth) + parseFloat(r.borderBottomWidth);
		return {
			width: t - i - o,
			height: n - a - s
		};
	}
	getSize() {
		return this.#t ? this.#e : this.calculateSize() ?? this.#e;
	}
	get current() {
		return H(this.#s)?.(), this.getSize();
	}
	get width() {
		return H(this.#a);
	}
	get height() {
		return H(this.#o);
	}
}, Yy = class {
	#e = () => void 0;
	#t = /* @__PURE__ */ P(() => this.#e());
	constructor(e, t) {
		let n;
		t !== void 0 && (n = t), this.#e = () => {
			try {
				return n;
			} finally {
				n = e();
			}
		};
	}
	get current() {
		return H(this.#t);
	}
};
function Xy(e, t) {
	let n, r = null;
	return (...i) => new Promise((a) => {
		r && r(void 0), r = a, clearTimeout(n), n = setTimeout(async () => {
			let t = await e(...i);
			r &&= (r(t), null);
		}, t);
	});
}
function Zy(e, t) {
	let n = 0, r = null;
	return (...i) => {
		let a = Date.now();
		return n && a - n < t ? r ?? Promise.resolve(void 0) : (n = a, r = e(...i), r);
	};
}
function Qy(e, t, n = {}, r) {
	let { lazy: i = !1, once: a = !1, initialValue: o, debounce: s, throttle: c } = n, l = /* @__PURE__ */ I(kn(o)), u = /* @__PURE__ */ I(!1), d = /* @__PURE__ */ I(void 0), f = /* @__PURE__ */ I(kn([])), p = () => {
		H(f).forEach((e) => e()), L(f, [], !0);
	}, m = (e) => {
		L(f, [...H(f), e], !0);
	}, h = async (e, n, r = !1) => {
		try {
			L(u, !0), L(d, void 0), p();
			let i = new AbortController();
			m(() => i.abort());
			let a = await t(e, n, {
				data: H(l),
				refetching: r,
				onCleanup: m,
				signal: i.signal
			});
			return L(l, a, !0), a;
		} catch (e) {
			e instanceof DOMException && e.name === "AbortError" || L(d, e, !0);
			return;
		} finally {
			L(u, !1);
		}
	}, g = s ? Xy(h, s) : c ? Zy(h, c) : h, _ = Array.isArray(e) ? e : [e], v;
	return r((t, n) => {
		a && v || (v = t, g(Array.isArray(e) ? t : t[0], Array.isArray(e) ? n : n?.[0]));
	}, { lazy: i }), {
		get current() {
			return H(l);
		},
		get loading() {
			return H(u);
		},
		get error() {
			return H(d);
		},
		mutate: (e) => {
			L(l, e, !0);
		},
		refetch: (t) => {
			let n = _.map((e) => e());
			return g(Array.isArray(e) ? n : n[0], Array.isArray(e) ? n : n[0], t ?? !0);
		}
	};
}
function $y(e, t, n) {
	return Qy(e, t, n, (t, n) => {
		let r = Array.isArray(e) ? e : [e];
		Uy(() => r.map((e) => e()), (e, n) => {
			t(e, n ?? []);
		}, n);
	});
}
function eb(e, t, n) {
	return Qy(e, t, n, (t, n) => {
		let r = Array.isArray(e) ? e : [e];
		Uy.pre(() => r.map((e) => e()), (e, n) => {
			t(e, n ?? []);
		}, n);
	});
}
$y.pre = eb;
function tb(e) {
	Yn(() => () => {
		e();
	});
}
function nb(e) {
	Yn(() => Kr(() => e()));
}
function rb(e, t) {
	return setTimeout(t, e);
}
function ib(e) {
	Ur().then(e);
}
var ab = 1, ob = 9, sb = 11;
function cb(e) {
	return ly(e) && e.nodeType === ab && typeof e.nodeName == "string";
}
function lb(e) {
	return ly(e) && e.nodeType === ob;
}
function ub(e) {
	return ly(e) && e.constructor?.name === "VisualViewport";
}
function db(e) {
	return ly(e) && e.nodeType !== void 0;
}
function fb(e) {
	return db(e) && e.nodeType === sb && "host" in e;
}
function pb(e, t) {
	if (!e || !t || !cb(e) || !cb(t)) return !1;
	let n = t.getRootNode?.();
	if (e === t || e.contains(t)) return !0;
	if (n && fb(n)) {
		let n = t;
		for (; n;) {
			if (e === n) return !0;
			n = n.parentNode || n.host;
		}
	}
	return !1;
}
function mb(e) {
	return lb(e) ? e : ub(e) ? e.document : e?.ownerDocument ?? document;
}
function hb(e) {
	return fb(e) ? hb(e.host) : lb(e) ? e.defaultView ?? window : cb(e) ? e.ownerDocument?.defaultView ?? window : window;
}
function gb(e) {
	let t = e.activeElement;
	for (; t?.shadowRoot;) {
		let e = t.shadowRoot.activeElement;
		if (e === t) break;
		t = e;
	}
	return t;
}
var _b = class {
	element;
	#e = /* @__PURE__ */ P(() => this.element.current ? this.element.current.getRootNode() ?? document : document);
	get root() {
		return H(this.#e);
	}
	set root(e) {
		L(this.#e, e);
	}
	constructor(e) {
		typeof e == "function" ? this.element = $(e) : this.element = e;
	}
	getDocument = () => mb(this.root);
	getWindow = () => this.getDocument().defaultView ?? window;
	getActiveElement = () => gb(this.root);
	isActiveElement = (e) => e === this.getActiveElement();
	getElementById(e) {
		return this.root.getElementById(e);
	}
	querySelector = (e) => this.root ? this.root.querySelector(e) : null;
	querySelectorAll = (e) => this.root ? this.root.querySelectorAll(e) : [];
	setTimeout = (e, t) => this.getWindow().setTimeout(e, t);
	clearTimeout = (e) => this.getWindow().clearTimeout(e);
};
function vb(e, t) {
	return { [Ni()]: (n) => my(e) ? (e.current = n, Kr(() => t?.(n)), () => {
		"isConnected" in n && n.isConnected || (e.current = null, t?.(null));
	}) : (e(n), Kr(() => t?.(n)), () => {
		"isConnected" in n && n.isConnected || (e(null), t?.(null));
	}) };
}
function yb(e) {
	return e ? "true" : "false";
}
function bb(e) {
	return e ? "" : void 0;
}
function xb(e) {
	return e ? !0 : void 0;
}
function Sb(e) {
	return e ? "open" : "closed";
}
function Cb(e) {
	return e === "starting" ? { "data-starting-style": "" } : e === "ending" ? { "data-ending-style": "" } : {};
}
function wb(e, t) {
	return t ? "mixed" : e ? "true" : "false";
}
var Tb = class {
	#e;
	#t;
	attrs;
	constructor(e) {
		this.#e = e.getVariant ? e.getVariant() : null, this.#t = this.#e ? `data-${this.#e}-` : `data-${e.component}-`, this.getAttr = this.getAttr.bind(this), this.selector = this.selector.bind(this), this.attrs = Object.fromEntries(e.parts.map((e) => [e, this.getAttr(e)]));
	}
	getAttr(e, t) {
		return t ? `data-${t}-${e}` : `${this.#t}${e}`;
	}
	selector(e, t) {
		return `[${this.getAttr(e, t)}]`;
	}
};
function Eb(e) {
	let t = new Tb(e);
	return {
		...t.attrs,
		selector: t.selector,
		getAttr: t.getAttr
	};
}
var Db = "ArrowDown", Ob = "ArrowUp", kb = "Home", Ab = "PageDown", jb = "PageUp", Mb = typeof document < "u", Nb = Pb();
function Pb() {
	return Mb && window?.navigator?.userAgent && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || window?.navigator?.maxTouchPoints > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function Fb(e) {
	return e instanceof HTMLElement;
}
function Ib(e) {
	return e instanceof Element || e instanceof SVGElement;
}
function Lb(e) {
	return e !== null;
}
var Rb = class {
	#e;
	#t = null;
	#n = null;
	#r = 0;
	constructor(e) {
		this.#e = e, tb(() => this.#i());
	}
	#i() {
		this.#t !== null && (window.cancelAnimationFrame(this.#t), this.#t = null), this.#n?.disconnect(), this.#n = null, this.#r++;
	}
	run(e) {
		this.#i();
		let t = this.#e.ref.current;
		if (!t) return;
		if (typeof t.getAnimations != "function") {
			this.#a(e);
			return;
		}
		let n = this.#r, r = () => {
			n === this.#r && this.#a(e);
		}, i = () => {
			if (n !== this.#r) return;
			let e = t.getAnimations();
			if (e.length === 0) {
				r();
				return;
			}
			Promise.all(e.map((e) => e.finished)).then(() => {
				r();
			}).catch(() => {
				if (n === this.#r) {
					if (t.getAnimations().some((e) => e.pending || e.playState !== "finished")) {
						i();
						return;
					}
					r();
				}
			});
		}, a = () => {
			this.#t = window.requestAnimationFrame(() => {
				this.#t = null, i();
			});
		};
		if (!this.#e.afterTick.current) {
			a();
			return;
		}
		this.#t = window.requestAnimationFrame(() => {
			this.#t = null;
			let e = "data-starting-style";
			if (!t.hasAttribute(e)) {
				a();
				return;
			}
			this.#n = new MutationObserver(() => {
				n === this.#r && (t.hasAttribute(e) || (this.#n?.disconnect(), this.#n = null, a()));
			}), this.#n.observe(t, {
				attributes: !0,
				attributeFilter: [e]
			});
		});
	}
	#a(e) {
		let t = () => {
			e();
		};
		this.#e.afterTick ? ib(t) : t();
	}
}, zb = class {
	#e;
	#t;
	#n;
	#r = /* @__PURE__ */ I(!1);
	#i = /* @__PURE__ */ I(void 0);
	#a = !1;
	#o = null;
	constructor(e) {
		this.#e = e, L(this.#r, e.open.current, !0), this.#t = e.enabled ?? !0, this.#n = new Rb({
			ref: this.#e.ref,
			afterTick: this.#e.open
		}), tb(() => this.#s()), Uy(() => this.#e.open.current, (e) => {
			if (!this.#a) {
				this.#a = !0;
				return;
			}
			if (this.#s(), !e && this.#e.shouldSkipExitAnimation?.()) {
				L(this.#r, !1), L(this.#i, void 0), this.#e.onComplete?.();
				return;
			}
			if (e && L(this.#r, !0), L(this.#i, e ? "starting" : "ending", !0), e && (this.#o = window.requestAnimationFrame(() => {
				this.#o = null, this.#e.open.current && L(this.#i, void 0);
			})), !this.#t) {
				e || L(this.#r, !1), L(this.#i, void 0), this.#e.onComplete?.();
				return;
			}
			this.#n.run(() => {
				e === this.#e.open.current && (this.#e.open.current || L(this.#r, !1), L(this.#i, void 0), this.#e.onComplete?.());
			});
		});
	}
	get shouldRender() {
		return H(this.#r);
	}
	get transitionStatus() {
		return H(this.#i);
	}
	#s() {
		this.#o !== null && (window.cancelAnimationFrame(this.#o), this.#o = null);
	}
};
function Bb() {}
function Vb(e, t) {
	return t === void 0 ? `bits-${e}` : `bits-${e}-${t}`;
}
function Hb(e, t) {
	M(t, !0);
	let n = X(t, "children", 7);
	var r = {
		get children() {
			return n();
		},
		set children(e) {
			n(e), F();
		}
	}, i = G();
	return Fi(z(i), n, (e) => {
		var t = G();
		q(z(t), () => n() ?? D), K(e, t);
	}), K(e, i), N(r);
}
Z(Hb, { children: {} }, [], [], { mode: "open" });
var Ub = new zy("BitsConfig");
function Wb() {
	let e = new Gb(null, {});
	return Ub.getOr(e).opts;
}
var Gb = class {
	opts;
	constructor(e, t) {
		let n = Kb(e, t);
		this.opts = {
			defaultPortalTo: n((e) => e.defaultPortalTo),
			defaultLocale: n((e) => e.defaultLocale)
		};
	}
};
function Kb(e, t) {
	return (n) => $(() => {
		let r = n(t)?.current;
		if (r !== void 0) return r;
		if (e !== null) return n(e.opts)?.current;
	});
}
function qb(e, t) {
	return (n) => {
		let r = Wb();
		return $(() => {
			let i = n();
			if (i !== void 0) return i;
			let a = e(r).current;
			return a === void 0 ? t : a;
		});
	};
}
var Jb = qb((e) => e.defaultPortalTo, "body");
function Yb(e, t) {
	M(t, !0);
	let n = X(t, "to", 7), r = X(t, "children", 7), i = X(t, "disabled", 7), a = Jb(() => n()), o = mt(), s = /* @__PURE__ */ P(c);
	function c() {
		if (!Mb || i()) return null;
		let e = null;
		return e = typeof a.current == "string" ? document.querySelector(a.current) : a.current, e;
	}
	let l;
	function u() {
		l &&= (Oi(l), null);
	}
	Uy([() => H(s), () => i()], ([e, t]) => {
		if (!e || t) {
			u();
			return;
		}
		return l = Ci(Hb, {
			target: e,
			props: { children: r() },
			context: o
		}), () => {
			u();
		};
	});
	var d = {
		get to() {
			return n();
		},
		set to(e) {
			n(e), F();
		},
		get children() {
			return r();
		},
		set children(e) {
			r(e), F();
		},
		get disabled() {
			return i();
		},
		set disabled(e) {
			i(e), F();
		}
	}, f = G(), p = z(f), m = (e) => {
		var t = G();
		q(z(t), () => r() ?? D), K(e, t);
	};
	return J(p, (e) => {
		i() && e(m);
	}), K(e, f), N(d);
}
Z(Yb, {
	to: {},
	children: {},
	disabled: {}
}, [], [], { mode: "open" });
var Xb = class {
	eventName;
	options;
	constructor(e, t = {
		bubbles: !0,
		cancelable: !0
	}) {
		this.eventName = e, this.options = t;
	}
	createEvent(e) {
		return new CustomEvent(this.eventName, {
			...this.options,
			detail: e
		});
	}
	dispatch(e, t) {
		let n = this.createEvent(t);
		return e.dispatchEvent(n), n;
	}
	listen(e, t, n) {
		return $r(e, this.eventName, (e) => {
			t(e);
		}, n);
	}
};
function Zb(e, t = 500) {
	let n = null, r = (...r) => {
		n !== null && clearTimeout(n), n = setTimeout(() => {
			e(...r);
		}, t);
	};
	return r.destroy = () => {
		n !== null && (clearTimeout(n), n = null);
	}, r;
}
function Qb(e, t) {
	return e === t || e.contains(t);
}
function $b(e) {
	return e?.ownerDocument ?? document;
}
function ex(e, t) {
	let { clientX: n, clientY: r } = e, i = t.getBoundingClientRect();
	return n < i.left || n > i.right || r < i.top || r > i.bottom;
}
var tx = [
	"input:not([inert]):not([inert] *)",
	"select:not([inert]):not([inert] *)",
	"textarea:not([inert]):not([inert] *)",
	"a[href]:not([inert]):not([inert] *)",
	"area[href]:not([inert]):not([inert] *)",
	"button:not([inert]):not([inert] *)",
	"[tabindex]:not(slot):not([inert]):not([inert] *)",
	"audio[controls]:not([inert]):not([inert] *)",
	"video[controls]:not([inert]):not([inert] *)",
	"[contenteditable]:not([contenteditable=\"false\"]):not([inert]):not([inert] *)",
	"details>summary:first-of-type:not([inert]):not([inert] *)",
	"details:not([inert]):not([inert] *)"
], nx = /* #__PURE__ */ tx.join(","), rx = typeof Element > "u", ix = rx ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, ax = !rx && Element.prototype.getRootNode ? function(e) {
	return e?.getRootNode?.call(e);
} : function(e) {
	return e?.ownerDocument;
}, ox = function(e, t) {
	t === void 0 && (t = !0);
	var n = e?.getAttribute?.call(e, "inert");
	return n === "" || n === "true" || t && e && (typeof e.closest == "function" ? e.closest("[inert]") : ox(e.parentNode));
}, sx = function(e) {
	var t = e?.getAttribute?.call(e, "contenteditable");
	return t === "" || t === "true";
}, cx = function(e, t, n) {
	if (ox(e)) return [];
	var r = Array.prototype.slice.apply(e.querySelectorAll(nx));
	return t && ix.call(e, nx) && r.unshift(e), r = r.filter(n), r;
}, lx = function(e, t, n) {
	for (var r = [], i = Array.from(e); i.length;) {
		var a = i.shift();
		if (!ox(a, !1)) if (a.tagName === "SLOT") {
			var o = a.assignedElements(), s = lx(o.length ? o : a.children, !0, n);
			n.flatten ? r.push.apply(r, s) : r.push({
				scopeParent: a,
				candidates: s
			});
		} else {
			ix.call(a, nx) && n.filter(a) && (t || !e.includes(a)) && r.push(a);
			var c = a.shadowRoot || typeof n.getShadowRoot == "function" && n.getShadowRoot(a), l = !ox(c, !1) && (!n.shadowRootFilter || n.shadowRootFilter(a));
			if (c && l) {
				var u = lx(c === !0 ? a.children : c.children, !0, n);
				n.flatten ? r.push.apply(r, u) : r.push({
					scopeParent: a,
					candidates: u
				});
			} else i.unshift.apply(i, a.children);
		}
	}
	return r;
}, ux = function(e) {
	return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, dx = function(e) {
	if (!e) throw Error("No node provided");
	return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || sx(e)) && !ux(e) ? 0 : e.tabIndex;
}, fx = function(e, t) {
	var n = dx(e);
	return n < 0 && t && !ux(e) ? 0 : n;
}, px = function(e, t) {
	return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
}, mx = function(e) {
	return e.tagName === "INPUT";
}, hx = function(e) {
	return mx(e) && e.type === "hidden";
}, gx = function(e) {
	return e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(e) {
		return e.tagName === "SUMMARY";
	});
}, _x = function(e, t) {
	for (var n = 0; n < e.length; n++) if (e[n].checked && e[n].form === t) return e[n];
}, vx = function(e) {
	if (!e.name) return !0;
	var t = e.form || ax(e), n = function(e) {
		return t.querySelectorAll("input[type=\"radio\"][name=\"" + e + "\"]");
	}, r;
	if (typeof window < "u" && window.CSS !== void 0 && typeof window.CSS.escape == "function") r = n(window.CSS.escape(e.name));
	else try {
		r = n(e.name);
	} catch (e) {
		return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message), !1;
	}
	var i = _x(r, e.form);
	return !i || i === e;
}, yx = function(e) {
	return mx(e) && e.type === "radio";
}, bx = function(e) {
	return yx(e) && !vx(e);
}, xx = function(e) {
	var t = e && ax(e), n = t?.host, r = !1;
	if (t && t !== e) {
		var i, a, o;
		for (r = !!((i = n) != null && (a = i.ownerDocument) != null && a.contains(n) || e != null && (o = e.ownerDocument) != null && o.contains(e)); !r && n;) {
			var s, c;
			t = ax(n), n = t?.host, r = !!((s = n) != null && (c = s.ownerDocument) != null && c.contains(n));
		}
	}
	return r;
}, Sx = function(e) {
	var t = e.getBoundingClientRect(), n = t.width, r = t.height;
	return n === 0 && r === 0;
}, Cx = function(e, t) {
	var n = t.displayCheck, r = t.getShadowRoot;
	if (n === "full-native" && "checkVisibility" in e) return !e.checkVisibility({
		checkOpacity: !1,
		opacityProperty: !1,
		contentVisibilityAuto: !0,
		visibilityProperty: !0,
		checkVisibilityCSS: !0
	});
	var i = getComputedStyle(e).visibility;
	if (i === "hidden" || i === "collapse") return !0;
	var a = ix.call(e, "details>summary:first-of-type") ? e.parentElement : e;
	if (ix.call(a, "details:not([open]) *")) return !0;
	if (!n || n === "full" || n === "full-native" || n === "legacy-full") {
		if (typeof r == "function") {
			for (var o = e; e;) {
				var s = e.parentElement, c = ax(e);
				if (s && !s.shadowRoot && r(s) === !0) return Sx(e);
				e = e.assignedSlot ? e.assignedSlot : !s && c !== e.ownerDocument ? c.host : s;
			}
			e = o;
		}
		if (xx(e)) return !e.getClientRects().length;
		if (n !== "legacy-full") return !0;
	} else if (n === "non-zero-area") return Sx(e);
	return !1;
}, wx = function(e) {
	if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName)) for (var t = e.parentElement; t;) {
		if (t.tagName === "FIELDSET" && t.disabled) {
			for (var n = 0; n < t.children.length; n++) {
				var r = t.children.item(n);
				if (r.tagName === "LEGEND") return ix.call(t, "fieldset[disabled] *") ? !0 : !r.contains(e);
			}
			return !0;
		}
		t = t.parentElement;
	}
	return !1;
}, Tx = function(e, t) {
	return !(t.disabled || hx(t) || Cx(t, e) || gx(t) || wx(t));
}, Ex = function(e, t) {
	return !(bx(t) || dx(t) < 0 || !Tx(e, t));
}, Dx = function(e) {
	var t = parseInt(e.getAttribute("tabindex"), 10);
	return !!(isNaN(t) || t >= 0);
}, Ox = function(e) {
	var t = [], n = [];
	return e.forEach(function(e, r) {
		var i = !!e.scopeParent, a = i ? e.scopeParent : e, o = fx(a, i), s = i ? Ox(e.candidates) : a;
		o === 0 ? i ? t.push.apply(t, s) : t.push(a) : n.push({
			documentOrder: r,
			tabIndex: o,
			item: e,
			isScope: i,
			content: s
		});
	}), n.sort(px).reduce(function(e, t) {
		return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e;
	}, []).concat(t);
}, kx = function(e, t) {
	return t ||= {}, Ox(t.getShadowRoot ? lx([e], t.includeContainer, {
		filter: Ex.bind(null, t),
		flatten: !1,
		getShadowRoot: t.getShadowRoot,
		shadowRootFilter: Dx
	}) : cx(e, t.includeContainer, Ex.bind(null, t)));
}, Ax = function(e, t) {
	return t ||= {}, t.getShadowRoot ? lx([e], t.includeContainer, {
		filter: Tx.bind(null, t),
		flatten: !0,
		getShadowRoot: t.getShadowRoot
	}) : cx(e, t.includeContainer, Tx.bind(null, t));
}, jx = /* #__PURE__ */ tx.concat("iframe:not([inert]):not([inert] *)").join(","), Mx = function(e, t) {
	if (t ||= {}, !e) throw Error("No node provided");
	return ix.call(e, jx) !== !1 && Tx(t, e);
};
function Nx(e, t, n = !0) {
	if (!(e.length === 0 || t < 0 || t >= e.length)) return e.length === 1 && t === 0 ? e[0] : t === e.length - 1 ? n ? e[0] : void 0 : e[t + 1];
}
function Px(e, t, n = !0) {
	if (!(e.length === 0 || t < 0 || t >= e.length)) return e.length === 1 && t === 0 ? e[0] : t === 0 ? n ? e[e.length - 1] : void 0 : e[t - 1];
}
function Fx(e, t, n, r = !0) {
	if (e.length === 0 || t < 0 || t >= e.length) return;
	let i = t + n;
	return i = r ? (i % e.length + e.length) % e.length : Math.max(0, Math.min(i, e.length - 1)), e[i];
}
function Ix(e, t, n, r = !0) {
	if (e.length === 0 || t < 0 || t >= e.length) return;
	let i = t - n;
	return i = r ? (i % e.length + e.length) % e.length : Math.max(0, Math.min(i, e.length - 1)), e[i];
}
function Lx(e, t, n) {
	let r = t.toLowerCase();
	if (r.endsWith(" ")) {
		let i = r.slice(0, -1);
		if (e.filter((e) => e.toLowerCase().startsWith(i)).length <= 1) return Lx(e, i, n);
		let a = n?.toLowerCase();
		if (a && a.startsWith(i) && a.charAt(i.length) === " " && t.trim() === i) return n;
		let o = e.filter((e) => e.toLowerCase().startsWith(r));
		if (o.length > 0) {
			let t = n ? e.indexOf(n) : -1;
			return Rx(o, Math.max(t, 0)).find((e) => e !== n) || n;
		}
	}
	let i = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, a = i.toLowerCase(), o = n ? e.indexOf(n) : -1, s = Rx(e, Math.max(o, 0));
	i.length === 1 && (s = s.filter((e) => e !== n));
	let c = s.find((e) => e?.toLowerCase().startsWith(a));
	return c === n ? void 0 : c;
}
function Rx(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
var zx = {
	afterMs: 1e4,
	onChange: Bb
};
function Bx(e, t) {
	let { afterMs: n, onChange: r, getWindow: i } = {
		...zx,
		...t
	}, a = null, o = /* @__PURE__ */ I(kn(e));
	function s() {
		return i().setTimeout(() => {
			L(o, e, !0), r?.(e);
		}, n);
	}
	return Yn(() => () => {
		a && i().clearTimeout(a);
	}), $(() => H(o), (e) => {
		L(o, e, !0), r?.(e), a && i().clearTimeout(a), a = s();
	});
}
var Vx = class {
	#e;
	#t;
	#n = /* @__PURE__ */ P(() => this.#e.onMatch ? this.#e.onMatch : (e) => e.focus());
	#r = /* @__PURE__ */ P(() => this.#e.getCurrentItem ? this.#e.getCurrentItem : this.#e.getActiveElement);
	constructor(e) {
		this.#e = e, this.#t = Bx("", {
			afterMs: 1e3,
			getWindow: e.getWindow
		}), this.handleTypeaheadSearch = this.handleTypeaheadSearch.bind(this), this.resetTypeahead = this.resetTypeahead.bind(this);
	}
	handleTypeaheadSearch(e, t) {
		if (!t.length) return;
		this.#t.current = this.#t.current + e;
		let n = H(this.#r)(), r = t.find((e) => e === n)?.textContent?.trim() ?? "", i = Lx(t.map((e) => e.textContent?.trim() ?? ""), this.#t.current, r), a = t.find((e) => e.textContent?.trim() === i);
		return a && H(this.#n)(a), a;
	}
	resetTypeahead() {
		this.#t.current = "";
	}
	get search() {
		return this.#t.current;
	}
}, Hx = "data-context-menu-trigger", Ux = "data-context-menu-content";
new zy("Menu.Root"), new zy("Menu.Root | Menu.Sub"), new zy("Menu.Content"), new zy("Menu.Group | Menu.RadioGroup"), new zy("Menu.RadioGroup"), new zy("Menu.CheckboxGroup"), new Xb("bitsmenuopen", {
	bubbles: !1,
	cancelable: !0
}), Eb({
	component: "menu",
	parts: [
		"trigger",
		"content",
		"sub-trigger",
		"item",
		"group",
		"group-heading",
		"checkbox-group",
		"checkbox-item",
		"radio-group",
		"radio-item",
		"separator",
		"sub-content",
		"arrow"
	]
}), globalThis.bitsDismissableLayers ??= /* @__PURE__ */ new Map();
var Wx = class e {
	static create(t) {
		return new e(t);
	}
	opts;
	#e;
	#t;
	#n = { pointerdown: !1 };
	#r = !1;
	#i = !1;
	#a = void 0;
	#o;
	#s = Bb;
	constructor(e) {
		this.opts = e, this.#t = e.interactOutsideBehavior, this.#e = e.onInteractOutside, this.#o = e.onFocusOutside, Yn(() => {
			this.#a = $b(this.opts.ref.current);
		});
		let t = Bb, n = () => {
			this.#g(), globalThis.bitsDismissableLayers.delete(this), this.#d.destroy(), t();
		};
		Uy([() => this.opts.enabled.current, () => this.opts.ref.current], () => {
			if (!(!this.opts.enabled.current || !this.opts.ref.current)) return rb(1, () => {
				this.opts.ref.current && (globalThis.bitsDismissableLayers.set(this, this.#t), t(), t = this.#l());
			}), n;
		}), tb(() => {
			this.#g.destroy(), globalThis.bitsDismissableLayers.delete(this), this.#d.destroy(), this.#s(), t();
		});
	}
	#c = (e) => {
		e.defaultPrevented || this.opts.ref.current && ib(() => {
			!this.opts.ref.current || this.#h(e.target) || e.target && !this.#i && this.#o.current?.(e);
		});
	};
	#l() {
		return Dy($r(this.#a, "pointerdown", Dy(this.#f, this.#m), { capture: !0 }), $r(this.#a, "pointerdown", Dy(this.#p, this.#d)), $r(this.#a, "focusin", this.#c));
	}
	#u = (e) => {
		let t = e;
		t.defaultPrevented && (t = Jx(e)), this.#e.current(e);
	};
	#d = Zb((e) => {
		if (!this.opts.ref.current) {
			this.#s();
			return;
		}
		let t = this.opts.isValidEvent.current(e, this.opts.ref.current) || qx(e, this.opts.ref.current);
		if (!this.#r || this.#_() || !t) {
			this.#s();
			return;
		}
		let n = e;
		if (n.defaultPrevented && (n = Jx(n)), this.#t.current !== "close" && this.#t.current !== "defer-otherwise-close") {
			this.#s();
			return;
		}
		e.pointerType === "touch" ? (this.#s(), this.#s = $r(this.#a, "click", this.#u, { once: !0 })) : this.#e.current(n);
	}, 10);
	#f = (e) => {
		this.#n[e.type] = !0;
	};
	#p = (e) => {
		this.#n[e.type] = !1;
	};
	#m = () => {
		this.opts.ref.current && (this.#r = Kx(this.opts.ref.current));
	};
	#h = (e) => this.opts.ref.current ? Qb(this.opts.ref.current, e) : !1;
	#g = Zb(() => {
		for (let e in this.#n) this.#n[e] = !1;
		this.#r = !1;
	}, 20);
	#_() {
		return Object.values(this.#n).some(Boolean);
	}
	#v = () => {
		this.#i = !0;
	};
	#y = () => {
		this.#i = !1;
	};
	props = {
		onfocuscapture: this.#v,
		onblurcapture: this.#y
	};
};
function Gx(e = [...globalThis.bitsDismissableLayers]) {
	return e.findLast(([e, { current: t }]) => t === "close" || t === "ignore");
}
function Kx(e) {
	let t = [...globalThis.bitsDismissableLayers], n = Gx(t);
	if (n) return n[0].opts.ref.current === e;
	let [r] = t[0];
	return r.opts.ref.current === e;
}
function qx(e, t) {
	let n = e.target;
	if (!Ib(n)) return !1;
	let r = !!n.closest(`[${Hx}]`), i = !!t.closest(`[${Ux}]`);
	return "button" in e && e.button > 0 && !r ? !1 : "button" in e && e.button === 0 && r && i ? !0 : r && i ? !1 : $b(n).documentElement.contains(n) && !Qb(t, n) && ex(e, t);
}
function Jx(e) {
	let t = e.currentTarget, n = e.target, r;
	r = e instanceof PointerEvent ? new PointerEvent(e.type, e) : new PointerEvent("pointerdown", e);
	let i = !1;
	return new Proxy(r, { get: (r, a) => a === "currentTarget" ? t : a === "target" ? n : a === "preventDefault" ? () => {
		i = !0, typeof r.preventDefault == "function" && r.preventDefault();
	} : a === "defaultPrevented" ? i : a in r ? r[a] : e[a] });
}
function Yx(e, t) {
	M(t, !0);
	let n = X(t, "interactOutsideBehavior", 7, "close"), r = X(t, "onInteractOutside", 7, Bb), i = X(t, "onFocusOutside", 7, Bb), a = X(t, "id", 7), o = X(t, "children", 7), s = X(t, "enabled", 7), c = X(t, "isValidEvent", 7, () => !1), l = X(t, "ref", 7), u = Wx.create({
		id: $(() => a()),
		interactOutsideBehavior: $(() => n()),
		onInteractOutside: $(() => r()),
		enabled: $(() => s()),
		onFocusOutside: $(() => i()),
		isValidEvent: $(() => c()),
		ref: l()
	});
	var d = {
		get interactOutsideBehavior() {
			return n();
		},
		set interactOutsideBehavior(e = "close") {
			n(e), F();
		},
		get onInteractOutside() {
			return r();
		},
		set onInteractOutside(e = Bb) {
			r(e), F();
		},
		get onFocusOutside() {
			return i();
		},
		set onFocusOutside(e = Bb) {
			i(e), F();
		},
		get id() {
			return a();
		},
		set id(e) {
			a(e), F();
		},
		get children() {
			return o();
		},
		set children(e) {
			o(e), F();
		},
		get enabled() {
			return s();
		},
		set enabled(e) {
			s(e), F();
		},
		get isValidEvent() {
			return c();
		},
		set isValidEvent(e = () => !1) {
			c(e), F();
		},
		get ref() {
			return l();
		},
		set ref(e) {
			l(e), F();
		}
	}, f = G();
	return q(z(f), () => o() ?? D, () => ({ props: u.props })), K(e, f), N(d);
}
Z(Yx, {
	interactOutsideBehavior: {},
	onInteractOutside: {},
	onFocusOutside: {},
	id: {},
	children: {},
	enabled: {},
	isValidEvent: {},
	ref: {}
}, [], [], { mode: "open" }), globalThis.bitsEscapeLayers ??= /* @__PURE__ */ new Map();
var Xx = class e {
	static create(t) {
		return new e(t);
	}
	opts;
	domContext;
	constructor(e) {
		this.opts = e, this.domContext = new _b(this.opts.ref);
		let t = Bb;
		Uy(() => e.enabled.current, (n) => (n && (globalThis.bitsEscapeLayers.set(this, e.escapeKeydownBehavior), t = this.#e()), () => {
			t(), globalThis.bitsEscapeLayers.delete(this);
		}));
	}
	#e = () => $r(this.domContext.getDocument(), "keydown", this.#t, { passive: !1 });
	#t = (e) => {
		if (e.key !== "Escape" || !Zx(this)) return;
		let t = new KeyboardEvent(e.type, e);
		e.preventDefault();
		let n = this.opts.escapeKeydownBehavior.current;
		n !== "close" && n !== "defer-otherwise-close" || this.opts.onEscapeKeydown.current(t);
	};
};
function Zx(e) {
	let t = [...globalThis.bitsEscapeLayers], n = t.findLast(([e, { current: t }]) => t === "close" || t === "ignore");
	if (n) return n[0] === e;
	let [r] = t[0];
	return r === e;
}
function Qx(e, t) {
	M(t, !0);
	let n = X(t, "escapeKeydownBehavior", 7, "close"), r = X(t, "onEscapeKeydown", 7, Bb), i = X(t, "children", 7), a = X(t, "enabled", 7), o = X(t, "ref", 7);
	Xx.create({
		escapeKeydownBehavior: $(() => n()),
		onEscapeKeydown: $(() => r()),
		enabled: $(() => a()),
		ref: o()
	});
	var s = {
		get escapeKeydownBehavior() {
			return n();
		},
		set escapeKeydownBehavior(e = "close") {
			n(e), F();
		},
		get onEscapeKeydown() {
			return r();
		},
		set onEscapeKeydown(e = Bb) {
			r(e), F();
		},
		get children() {
			return i();
		},
		set children(e) {
			i(e), F();
		},
		get enabled() {
			return a();
		},
		set enabled(e) {
			a(e), F();
		},
		get ref() {
			return o();
		},
		set ref(e) {
			o(e), F();
		}
	}, c = G();
	return q(z(c), () => i() ?? D), K(e, c), N(s);
}
Z(Qx, {
	escapeKeydownBehavior: {},
	onEscapeKeydown: {},
	children: {},
	enabled: {},
	ref: {}
}, [], [], { mode: "open" });
var $x = class e {
	static instance;
	#e = gy([]);
	#t = /* @__PURE__ */ new WeakMap();
	#n = /* @__PURE__ */ new WeakMap();
	static getInstance() {
		return this.instance ||= new e(), this.instance;
	}
	register(e) {
		let t = this.getActive();
		t && t !== e && t.pause();
		let n = document.activeElement;
		n && n !== document.body && this.#n.set(e, n), this.#e.current = this.#e.current.filter((t) => t !== e), this.#e.current.unshift(e);
	}
	unregister(e) {
		this.#e.current = this.#e.current.filter((t) => t !== e);
		let t = this.getActive();
		t && t.resume();
	}
	getActive() {
		return this.#e.current[0];
	}
	setFocusMemory(e, t) {
		this.#t.set(e, t);
	}
	getFocusMemory(e) {
		return this.#t.get(e);
	}
	isActiveScope(e) {
		return this.getActive() === e;
	}
	setPreFocusMemory(e, t) {
		this.#n.set(e, t);
	}
	getPreFocusMemory(e) {
		return this.#n.get(e);
	}
	clearPreFocusMemory(e) {
		this.#n.delete(e);
	}
}, eS = class e {
	#e = !1;
	#t = null;
	#n = $x.getInstance();
	#r = [];
	#i;
	constructor(e) {
		this.#i = e;
	}
	get paused() {
		return this.#e;
	}
	pause() {
		this.#e = !0;
	}
	resume() {
		this.#e = !1;
	}
	#a() {
		for (let e of this.#r) e();
		this.#r = [];
	}
	mount(e) {
		this.#t && this.unmount(), this.#t = e, this.#n.register(this), this.#c(), this.#o();
	}
	unmount() {
		this.#t &&= (this.#a(), this.#s(), this.#n.unregister(this), this.#n.clearPreFocusMemory(this), null);
	}
	#o() {
		if (!this.#t) return;
		let e = new CustomEvent("focusScope.onOpenAutoFocus", {
			bubbles: !1,
			cancelable: !0
		});
		this.#i.onOpenAutoFocus.current(e), e.defaultPrevented || requestAnimationFrame(() => {
			if (!this.#t) return;
			let e = this.#u();
			e ? (e.focus(), this.#n.setFocusMemory(this, e)) : this.#t.focus();
		});
	}
	#s() {
		let e = new CustomEvent("focusScope.onCloseAutoFocus", {
			bubbles: !1,
			cancelable: !0
		});
		if (this.#i.onCloseAutoFocus.current?.(e), !e.defaultPrevented) {
			let e = this.#n.getPreFocusMemory(this);
			if (e && document.contains(e)) try {
				e.focus();
			} catch {
				document.body.focus();
			}
		}
	}
	#c() {
		if (!this.#t || !this.#i.trap.current) return;
		let e = this.#t, t = e.ownerDocument;
		this.#r.push($r(t, "focusin", (t) => {
			if (this.#e || !this.#n.isActiveScope(this)) return;
			let n = t.target;
			if (n) if (e.contains(n)) this.#n.setFocusMemory(this, n);
			else {
				let n = this.#n.getFocusMemory(this);
				if (n && e.contains(n) && Mx(n)) t.preventDefault(), n.focus();
				else {
					let t = this.#u(), n = this.#d()[0];
					(t || n || e).focus();
				}
			}
		}, { capture: !0 }), $r(e, "keydown", (e) => {
			if (!this.#i.loop || this.#e || e.key !== "Tab" || !this.#n.isActiveScope(this)) return;
			let n = this.#l();
			if (n.length === 0) return;
			let r = n[0], i = n[n.length - 1];
			!e.shiftKey && t.activeElement === i ? (e.preventDefault(), r.focus()) : e.shiftKey && t.activeElement === r && (e.preventDefault(), i.focus());
		}));
		let n = new MutationObserver(() => {
			let t = this.#n.getFocusMemory(this);
			if (t && !e.contains(t)) {
				let t = this.#u(), n = this.#d()[0], r = t || n;
				r ? (r.focus(), this.#n.setFocusMemory(this, r)) : e.focus();
			}
		});
		n.observe(e, {
			childList: !0,
			subtree: !0
		}), this.#r.push(() => n.disconnect());
	}
	#l() {
		return this.#t ? kx(this.#t, {
			includeContainer: !1,
			getShadowRoot: !0
		}) : [];
	}
	#u() {
		return this.#l()[0] || null;
	}
	#d() {
		return this.#t ? Ax(this.#t, {
			includeContainer: !1,
			getShadowRoot: !0
		}) : [];
	}
	static use(t) {
		let n = null;
		return Uy([() => t.ref.current, () => t.enabled.current], ([r, i]) => {
			r && i ? (n ||= new e(t), n.mount(r)) : n &&= (n.unmount(), null);
		}), tb(() => {
			n?.unmount();
		}), { get props() {
			return { tabindex: -1 };
		} };
	}
};
function tS(e, t) {
	M(t, !0);
	let n = X(t, "enabled", 7, !1), r = X(t, "trapFocus", 7, !1), i = X(t, "loop", 7, !1), a = X(t, "onCloseAutoFocus", 7, Bb), o = X(t, "onOpenAutoFocus", 7, Bb), s = X(t, "focusScope", 7), c = X(t, "ref", 7), l = eS.use({
		enabled: $(() => n()),
		trap: $(() => r()),
		loop: i(),
		onCloseAutoFocus: $(() => a()),
		onOpenAutoFocus: $(() => o()),
		ref: c()
	});
	var u = {
		get enabled() {
			return n();
		},
		set enabled(e = !1) {
			n(e), F();
		},
		get trapFocus() {
			return r();
		},
		set trapFocus(e = !1) {
			r(e), F();
		},
		get loop() {
			return i();
		},
		set loop(e = !1) {
			i(e), F();
		},
		get onCloseAutoFocus() {
			return a();
		},
		set onCloseAutoFocus(e = Bb) {
			a(e), F();
		},
		get onOpenAutoFocus() {
			return o();
		},
		set onOpenAutoFocus(e = Bb) {
			o(e), F();
		},
		get focusScope() {
			return s();
		},
		set focusScope(e) {
			s(e), F();
		},
		get ref() {
			return c();
		},
		set ref(e) {
			c(e), F();
		}
	}, d = G();
	return q(z(d), () => s() ?? D, () => ({ props: l.props })), K(e, d), N(u);
}
Z(tS, {
	enabled: {},
	trapFocus: {},
	loop: {},
	onCloseAutoFocus: {},
	onOpenAutoFocus: {},
	focusScope: {},
	ref: {}
}, [], [], { mode: "open" });
var nS = () => {};
globalThis.bitsTextSelectionLayers ??= /* @__PURE__ */ new Map();
var rS = class e {
	static create(t) {
		return new e(t);
	}
	opts;
	domContext;
	#e = Bb;
	#t = !1;
	#n = nS;
	#r = nS;
	constructor(e) {
		this.opts = e, this.domContext = new _b(e.ref);
		let t = Bb;
		Uy(() => [
			this.opts.enabled.current,
			this.opts.onPointerDown.current,
			this.opts.onPointerUp.current
		], ([e, n, r]) => (this.#t = e, this.#n = n, this.#r = r, e && (globalThis.bitsTextSelectionLayers.set(this, this.opts.enabled), t(), t = this.#i()), () => {
			this.#t = !1, t(), this.#s(), globalThis.bitsTextSelectionLayers.delete(this);
		}));
	}
	#i() {
		return Dy($r(this.domContext.getDocument(), "pointerdown", this.#o), $r(this.domContext.getDocument(), "pointerup", _y(this.#s, this.#a)));
	}
	#a = (e) => {
		this.#r(e);
	};
	#o = (e) => {
		let t = this.opts.ref.current, n = e.target;
		!Fb(t) || !Fb(n) || !this.#t || !sS(this) || !pb(t, n) || (this.#n(e), !e.defaultPrevented && (this.#e = aS(t, this.domContext.getDocument().body)));
	};
	#s = () => {
		this.#e(), this.#e = Bb;
	};
}, iS = (e) => e.style.userSelect || e.style.webkitUserSelect;
function aS(e, t) {
	let n = iS(t), r = iS(e);
	return oS(t, "none"), oS(e, "text"), () => {
		oS(t, n), oS(e, r);
	};
}
function oS(e, t) {
	e.style.userSelect = t, e.style.webkitUserSelect = t;
}
function sS(e) {
	let t = [...globalThis.bitsTextSelectionLayers];
	if (!t.length) return !1;
	let n = t.at(-1);
	return n ? n[0] === e : !1;
}
function cS(e, t) {
	M(t, !0);
	let n = X(t, "preventOverflowTextSelection", 7, !0), r = X(t, "onPointerDown", 7, Bb), i = X(t, "onPointerUp", 7, Bb), a = X(t, "id", 7), o = X(t, "children", 7), s = X(t, "enabled", 7), c = X(t, "ref", 7);
	rS.create({
		id: $(() => a()),
		onPointerDown: $(() => r()),
		onPointerUp: $(() => i()),
		enabled: $(() => s() && n()),
		ref: c()
	});
	var l = {
		get preventOverflowTextSelection() {
			return n();
		},
		set preventOverflowTextSelection(e = !0) {
			n(e), F();
		},
		get onPointerDown() {
			return r();
		},
		set onPointerDown(e = Bb) {
			r(e), F();
		},
		get onPointerUp() {
			return i();
		},
		set onPointerUp(e = Bb) {
			i(e), F();
		},
		get id() {
			return a();
		},
		set id(e) {
			a(e), F();
		},
		get children() {
			return o();
		},
		set children(e) {
			o(e), F();
		},
		get enabled() {
			return s();
		},
		set enabled(e) {
			s(e), F();
		},
		get ref() {
			return c();
		},
		set ref(e) {
			c(e), F();
		}
	}, u = G();
	return q(z(u), () => o() ?? D), K(e, u), N(l);
}
Z(cS, {
	preventOverflowTextSelection: {},
	onPointerDown: {},
	onPointerUp: {},
	id: {},
	children: {},
	enabled: {},
	ref: {}
}, [], [], { mode: "open" }), globalThis.bitsIdCounter ??= { current: 0 };
function lS(e = "bits") {
	return globalThis.bitsIdCounter.current++, `${e}-${globalThis.bitsIdCounter.current}`;
}
var uS = class {
	#e;
	#t = 0;
	#n = /* @__PURE__ */ I();
	#r;
	constructor(e) {
		this.#e = e;
	}
	#i() {
		--this.#t, this.#r && this.#t <= 0 && (this.#r(), L(this.#n, void 0), this.#r = void 0);
	}
	get(...e) {
		return this.#t += 1, H(this.#n) === void 0 && (this.#r = Qn(() => {
			L(this.#n, this.#e(...e), !0);
		})), Yn(() => () => {
			this.#i();
		}), H(this.#n);
	}
}, dS = new $m(), fS = /* @__PURE__ */ I(null), pS = null, mS = null, hS = !1, gS = $(() => {
	for (let e of dS.values()) if (e) return !0;
	return !1;
}), _S = null, vS = new uS(() => {
	function e() {
		document.body.setAttribute("style", H(fS) ?? ""), document.body.style.removeProperty("--scrollbar-width"), Nb && pS?.(), L(fS, null);
	}
	function t() {
		mS !== null && (window.clearTimeout(mS), mS = null);
	}
	function n(e, n) {
		t(), hS = !0, _S = Date.now();
		let r = _S, i = () => {
			mS = null, _S === r && (bS(dS) ? hS = !1 : (hS = !1, n()));
		}, a = e === null ? 24 : e;
		mS = window.setTimeout(i, a);
	}
	function r() {
		H(fS) === null && dS.size === 0 && !hS && L(fS, document.body.getAttribute("style"), !0);
	}
	return Uy(() => gS.current, () => {
		if (!gS.current) return;
		r(), hS = !1;
		let e = getComputedStyle(document.documentElement), t = getComputedStyle(document.body), n = e.scrollbarGutter?.includes("stable") || t.scrollbarGutter?.includes("stable"), i = window.innerWidth - document.documentElement.clientWidth, a = {
			padding: Number.parseInt(t.paddingRight ?? "0", 10) + i,
			margin: Number.parseInt(t.marginRight ?? "0", 10)
		};
		i > 0 && !n && (document.body.style.paddingRight = `${a.padding}px`, document.body.style.marginRight = `${a.margin}px`, document.body.style.setProperty("--scrollbar-width", `${i}px`)), document.body.style.overflow = "hidden", Nb && (pS = $r(document, "touchmove", (e) => {
			e.target === document.documentElement && (e.touches.length > 1 || e.preventDefault());
		}, { passive: !1 })), ib(() => {
			document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
		});
	}), tb(() => () => {
		pS?.();
	}), {
		get lockMap() {
			return dS;
		},
		resetBodyStyle: e,
		scheduleCleanupIfNoNewLocks: n,
		cancelPendingCleanup: t,
		ensureInitialStyleCaptured: r
	};
}), yS = class {
	#e = lS();
	#t;
	#n = () => null;
	#r;
	locked;
	constructor(e, t = () => null) {
		this.#t = e, this.#n = t, this.#r = vS.get(), this.#r && (this.#r.cancelPendingCleanup(), this.#r.ensureInitialStyleCaptured(), this.#r.lockMap.set(this.#e, this.#t ?? !1), this.locked = $(() => this.#r.lockMap.get(this.#e) ?? !1, (e) => this.#r.lockMap.set(this.#e, e)), tb(() => {
			if (this.#r.lockMap.delete(this.#e), bS(this.#r.lockMap)) return;
			let e = this.#n();
			this.#r.scheduleCleanupIfNoNewLocks(e, () => {
				this.#r.resetBodyStyle();
			});
		}));
	}
};
function bS(e) {
	for (let [t, n] of e) if (n) return !0;
	return !1;
}
function xS(e, t) {
	M(t, !0);
	let n = X(t, "preventScroll", 7, !0), r = X(t, "restoreScrollDelay", 7, null);
	return n() && new yS(n(), () => r()), N({
		get preventScroll() {
			return n();
		},
		set preventScroll(e = !0) {
			n(e), F();
		},
		get restoreScrollDelay() {
			return r();
		},
		set restoreScrollDelay(e = null) {
			r(e), F();
		}
	});
}
Z(xS, {
	preventScroll: {},
	restoreScrollDelay: {}
}, [], [], { mode: "open" });
var SS = Eb({
	component: "checkbox",
	parts: [
		"root",
		"group",
		"group-label",
		"input"
	]
}), CS = new zy("Checkbox.Group"), wS = new zy("Checkbox.Root"), TS = class e {
	static create(t, n = null) {
		return wS.set(new e(t, n));
	}
	opts;
	group;
	#e = /* @__PURE__ */ P(() => this.group && this.group.opts.name.current ? this.group.opts.name.current : this.opts.name.current);
	get trueName() {
		return H(this.#e);
	}
	set trueName(e) {
		L(this.#e, e);
	}
	#t = /* @__PURE__ */ P(() => this.group && this.group.opts.required.current ? !0 : this.opts.required.current);
	get trueRequired() {
		return H(this.#t);
	}
	set trueRequired(e) {
		L(this.#t, e);
	}
	#n = /* @__PURE__ */ P(() => this.group && this.group.opts.disabled.current ? !0 : this.opts.disabled.current);
	get trueDisabled() {
		return H(this.#n);
	}
	set trueDisabled(e) {
		L(this.#n, e);
	}
	#r = /* @__PURE__ */ P(() => this.group && this.group.opts.readonly.current ? !0 : this.opts.readonly.current);
	get trueReadonly() {
		return H(this.#r);
	}
	set trueReadonly(e) {
		L(this.#r, e);
	}
	attachment;
	constructor(e, t) {
		this.opts = e, this.group = t, this.attachment = vb(this.opts.ref), this.onkeydown = this.onkeydown.bind(this), this.onclick = this.onclick.bind(this), Uy.pre([() => st(this.group?.opts.value.current), () => this.opts.value.current], ([e, t]) => {
			!e || !t || (this.opts.checked.current = e.includes(t));
		}), Uy.pre(() => this.opts.checked.current, (e) => {
			this.group && (e ? this.group?.addValue(this.opts.value.current) : this.group?.removeValue(this.opts.value.current));
		});
	}
	onkeydown(e) {
		if (!(this.trueDisabled || this.trueReadonly)) {
			if (e.key === "Enter") {
				e.preventDefault(), this.opts.type.current === "submit" && e.currentTarget.closest("form")?.requestSubmit();
				return;
			}
			e.key === " " && (e.preventDefault(), this.#i());
		}
	}
	#i() {
		this.opts.indeterminate.current ? (this.opts.indeterminate.current = !1, this.opts.checked.current = !0) : this.opts.checked.current = !this.opts.checked.current;
	}
	onclick(e) {
		if (!(this.trueDisabled || this.trueReadonly)) {
			if (this.opts.type.current === "submit") {
				this.#i();
				return;
			}
			e.preventDefault(), this.#i();
		}
	}
	#a = /* @__PURE__ */ P(() => ({
		checked: this.opts.checked.current,
		indeterminate: this.opts.indeterminate.current
	}));
	get snippetProps() {
		return H(this.#a);
	}
	set snippetProps(e) {
		L(this.#a, e);
	}
	#o = /* @__PURE__ */ P(() => ({
		id: this.opts.id.current,
		role: "checkbox",
		type: this.opts.type.current,
		disabled: this.trueDisabled,
		"aria-checked": wb(this.opts.checked.current, this.opts.indeterminate.current),
		"aria-required": yb(this.trueRequired),
		"aria-readonly": yb(this.trueReadonly),
		"data-disabled": bb(this.trueDisabled),
		"data-readonly": bb(this.trueReadonly),
		"data-state": DS(this.opts.checked.current, this.opts.indeterminate.current),
		[SS.root]: "",
		onclick: this.onclick,
		onkeydown: this.onkeydown,
		...this.attachment
	}));
	get props() {
		return H(this.#o);
	}
	set props(e) {
		L(this.#o, e);
	}
}, ES = class e {
	static create() {
		return new e(wS.get());
	}
	root;
	#e = /* @__PURE__ */ P(() => this.root.group ? !!(this.root.opts.value.current !== void 0 && this.root.group.opts.value.current.includes(this.root.opts.value.current)) : this.root.opts.checked.current);
	get trueChecked() {
		return H(this.#e);
	}
	set trueChecked(e) {
		L(this.#e, e);
	}
	#t = /* @__PURE__ */ P(() => !!this.root.trueName);
	get shouldRender() {
		return H(this.#t);
	}
	set shouldRender(e) {
		L(this.#t, e);
	}
	constructor(e) {
		this.root = e, this.onfocus = this.onfocus.bind(this);
	}
	onfocus(e) {
		Fb(this.root.opts.ref.current) && this.root.opts.ref.current.focus();
	}
	#n = /* @__PURE__ */ P(() => ({
		type: "checkbox",
		checked: this.root.opts.checked.current === !0,
		disabled: this.root.trueDisabled,
		required: this.root.trueRequired,
		name: this.root.trueName,
		value: this.root.opts.value.current,
		readonly: this.root.trueReadonly,
		onfocus: this.onfocus
	}));
	get props() {
		return H(this.#n);
	}
	set props(e) {
		L(this.#n, e);
	}
};
function DS(e, t) {
	return t ? "indeterminate" : e ? "checked" : "unchecked";
}
var OS = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"value"
]), kS = /* @__PURE__ */ U("<input/>");
function AS(e, t) {
	M(t, !0);
	let n = X(t, "value", 15), r = /* @__PURE__ */ Ua(t, OS), i = /* @__PURE__ */ P(() => Py(r, {
		"aria-hidden": "true",
		tabindex: -1,
		style: {
			...Fy,
			position: "absolute",
			top: "0",
			left: "0"
		}
	}));
	var a = {
		get value() {
			return n();
		},
		set value(e) {
			n(e), F();
		}
	}, o = G(), s = z(o), c = (e) => {
		var t = kS();
		Oa(t, () => ({
			...H(i),
			value: n()
		}), void 0, void 0, void 0, void 0, !0), K(e, t);
	}, l = (e) => {
		var t = kS();
		Oa(t, () => ({ ...H(i) }), void 0, void 0, void 0, void 0, !0), Ma(t, n), K(e, t);
	};
	return J(s, (e) => {
		H(i).type === "checkbox" ? e(c) : e(l, -1);
	}), K(e, o), N(a);
}
Z(AS, { value: {} }, [], [], { mode: "open" });
function jS(e, t) {
	M(t, !1);
	let n = ES.create();
	Ba();
	var r = G(), i = z(r), a = (e) => {
		AS(e, qa(() => n.props));
	};
	J(i, (e) => {
		n.shouldRender && e(a);
	}), K(e, r), N();
}
Z(jS, {}, [], [], { mode: "open" });
var MS = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"checked",
	"ref",
	"onCheckedChange",
	"children",
	"disabled",
	"required",
	"name",
	"value",
	"id",
	"indeterminate",
	"onIndeterminateChange",
	"child",
	"type",
	"readonly"
]), NS = /* @__PURE__ */ U("<button><!></button>"), PS = /* @__PURE__ */ U("<!> <!>", 1);
function FS(e, t) {
	let n = di();
	M(t, !0);
	let r = X(t, "checked", 15, !1), i = X(t, "ref", 15, null), a = X(t, "onCheckedChange", 7), o = X(t, "children", 7), s = X(t, "disabled", 7, !1), c = X(t, "required", 7, !1), l = X(t, "name", 7, void 0), u = X(t, "value", 7, "on"), d = X(t, "id", 23, () => Vb(n)), f = X(t, "indeterminate", 15, !1), p = X(t, "onIndeterminateChange", 7), m = X(t, "child", 7), h = X(t, "type", 7, "button"), g = X(t, "readonly", 7), _ = /* @__PURE__ */ Ua(t, MS), v = CS.getOr(null);
	v && u() && (v.opts.value.current.includes(u()) ? r(!0) : r(!1)), Uy.pre(() => u(), () => {
		v && u() && (v.opts.value.current.includes(u()) ? r(!0) : r(!1));
	});
	let y = TS.create({
		checked: $(() => r(), (e) => {
			r(e), a()?.(e);
		}),
		disabled: $(() => s() ?? !1),
		required: $(() => c()),
		name: $(() => l()),
		value: $(() => u()),
		id: $(() => d()),
		ref: $(() => i(), (e) => i(e)),
		indeterminate: $(() => f(), (e) => {
			f(e), p()?.(e);
		}),
		type: $(() => h()),
		readonly: $(() => !!g())
	}, v), b = /* @__PURE__ */ P(() => Py({ ..._ }, y.props));
	var x = {
		get checked() {
			return r();
		},
		set checked(e = !1) {
			r(e), F();
		},
		get ref() {
			return i();
		},
		set ref(e = null) {
			i(e), F();
		},
		get onCheckedChange() {
			return a();
		},
		set onCheckedChange(e) {
			a(e), F();
		},
		get children() {
			return o();
		},
		set children(e) {
			o(e), F();
		},
		get disabled() {
			return s();
		},
		set disabled(e = !1) {
			s(e), F();
		},
		get required() {
			return c();
		},
		set required(e = !1) {
			c(e), F();
		},
		get name() {
			return l();
		},
		set name(e = void 0) {
			l(e), F();
		},
		get value() {
			return u();
		},
		set value(e = "on") {
			u(e), F();
		},
		get id() {
			return d();
		},
		set id(e = Vb(n)) {
			d(e), F();
		},
		get indeterminate() {
			return f();
		},
		set indeterminate(e = !1) {
			f(e), F();
		},
		get onIndeterminateChange() {
			return p();
		},
		set onIndeterminateChange(e) {
			p(e), F();
		},
		get child() {
			return m();
		},
		set child(e) {
			m(e), F();
		},
		get type() {
			return h();
		},
		set type(e = "button") {
			h(e), F();
		},
		get readonly() {
			return g();
		},
		set readonly(e) {
			g(e), F();
		}
	}, S = PS(), C = z(S), w = (e) => {
		var t = G(), n = z(t);
		{
			let e = /* @__PURE__ */ P(() => ({
				props: H(b),
				...y.snippetProps
			}));
			q(n, m, () => H(e));
		}
		K(e, t);
	}, T = (e) => {
		var t = NS();
		Oa(t, () => ({ ...H(b) })), q(R(t), () => o() ?? D, () => y.snippetProps), A(t), K(e, t);
	};
	return J(C, (e) => {
		m() ? e(w) : e(T, -1);
	}), jS(B(C, 2), {}), K(e, S), N(x);
}
Z(FS, {
	checked: {},
	ref: {},
	onCheckedChange: {},
	children: {},
	disabled: {},
	required: {},
	name: {},
	value: {},
	id: {},
	indeterminate: {},
	onIndeterminateChange: {},
	child: {},
	type: {},
	readonly: {}
}, [], [], { mode: "open" });
var IS = [
	"top",
	"right",
	"bottom",
	"left"
], LS = Math.min, RS = Math.max, zS = Math.round, BS = Math.floor, VS = (e) => ({
	x: e,
	y: e
}), HS = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function US(e, t, n) {
	return RS(e, LS(t, n));
}
function WS(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function GS(e) {
	return e.split("-")[0];
}
function KS(e) {
	return e.split("-")[1];
}
function qS(e) {
	return e === "x" ? "y" : "x";
}
function JS(e) {
	return e === "y" ? "height" : "width";
}
function YS(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function XS(e) {
	return qS(YS(e));
}
function ZS(e, t, n) {
	n === void 0 && (n = !1);
	let r = KS(e), i = XS(e), a = JS(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = oC(o)), [o, oC(o)];
}
function QS(e) {
	let t = oC(e);
	return [
		$S(e),
		t,
		$S(t)
	];
}
function $S(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var eC = ["left", "right"], tC = ["right", "left"], nC = ["top", "bottom"], rC = ["bottom", "top"];
function iC(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? tC : eC : t ? eC : tC;
		case "left":
		case "right": return t ? nC : rC;
		default: return [];
	}
}
function aC(e, t, n, r) {
	let i = KS(e), a = iC(GS(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map($S)))), a;
}
function oC(e) {
	let t = GS(e);
	return HS[t] + e.slice(t.length);
}
function sC(e) {
	return {
		top: e.top ?? 0,
		right: e.right ?? 0,
		bottom: e.bottom ?? 0,
		left: e.left ?? 0
	};
}
function cC(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : sC(e);
}
function lC(e) {
	let { x: t, y: n, width: r, height: i } = e;
	return {
		width: r,
		height: i,
		top: n,
		left: t,
		right: t + r,
		bottom: n + i,
		x: t,
		y: n
	};
}
function uC(e, t, n) {
	let { reference: r, floating: i } = e, a = YS(t), o = XS(t), s = JS(o), c = GS(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
	switch (c) {
		case "top":
			p = {
				x: u,
				y: r.y - i.height
			};
			break;
		case "bottom":
			p = {
				x: u,
				y: r.y + r.height
			};
			break;
		case "right":
			p = {
				x: r.x + r.width,
				y: d
			};
			break;
		case "left":
			p = {
				x: r.x - i.width,
				y: d
			};
			break;
		default: p = {
			x: r.x,
			y: r.y
		};
	}
	let m = KS(t);
	return m && (p[o] += f * (m === "end" ? 1 : -1) * (n && l ? -1 : 1)), p;
}
async function dC(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = WS(t, e), p = cC(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = lC(await i.getClippingRect({
		element: await (i.isElement == null ? void 0 : i.isElement(m)) ?? !0 ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating)),
		boundary: c,
		rootBoundary: l,
		strategy: s
	})), g = u === "floating" ? {
		x: n,
		y: r,
		width: a.floating.width,
		height: a.floating.height
	} : a.reference, _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)), v = await (i.isElement == null ? void 0 : i.isElement(_)) && await (i.getScale == null ? void 0 : i.getScale(_)) || {
		x: 1,
		y: 1
	}, y = lC(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: o,
		rect: g,
		offsetParent: _,
		strategy: s
	}) : g);
	return {
		top: (h.top - y.top + p.top) / v.y,
		bottom: (y.bottom - h.bottom + p.bottom) / v.y,
		left: (h.left - y.left + p.left) / v.x,
		right: (y.right - h.right + p.right) / v.x
	};
}
var fC = 50, pC = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: dC
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = uC(l, r, c), f = r, p = 0, m = {};
	for (let n = 0; n < a.length; n++) {
		let h = a[n];
		if (!h) continue;
		let { name: g, fn: _ } = h, { x: v, y, data: b, reset: x } = await _({
			x: u,
			y: d,
			initialPlacement: r,
			placement: f,
			strategy: i,
			middlewareData: m,
			rects: l,
			platform: s,
			elements: {
				reference: e,
				floating: t
			}
		});
		u = v ?? u, d = y ?? d, m[g] = {
			...m[g],
			...b
		}, x && p < fC && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = uC(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, mC = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = WS(e, t) || {};
		if (l == null) return {};
		let d = cC(u), f = {
			x: n,
			y: r
		}, p = XS(i), m = JS(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = LS(d[_], T), D = LS(d[v], T), ee = C - h[m] - D, te = C / 2 - h[m] / 2 + w, ne = US(E, te, ee), re = !c.arrow && KS(i) != null && te !== ne && a.reference[m] / 2 - (te < E ? E : D) - h[m] / 2 < 0, ie = re ? te < E ? te - E : te - ee : 0;
		return {
			[p]: f[p] + ie,
			data: {
				[p]: ne,
				centerOffset: te - ne - ie,
				...re && { alignmentOffset: ie }
			},
			reset: re
		};
	}
}), hC = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = WS(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = GS(r), _ = YS(o), v = GS(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [oC(o)] : QS(o)), x = p !== "none";
			!d && x && b.push(...aC(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = ZS(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (!(u === "alignment" && _ !== YS(t)) || T.every((e) => YS(e.placement) !== _ || e.overflows[0] > 0))) return {
					data: {
						index: e,
						overflows: T
					},
					reset: { placement: t }
				};
				let n = T.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]?.placement;
				if (!n) switch (f) {
					case "bestFit": {
						let e = T.filter((e) => {
							if (x) {
								let t = YS(e.placement);
								return t === _ || t === "y";
							}
							return !0;
						}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]?.[0];
						e && (n = e);
						break;
					}
					case "initialPlacement":
						n = o;
						break;
				}
				if (r !== n) return { reset: { placement: n } };
			}
			return {};
		}
	};
};
function gC(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function _C(e) {
	return IS.some((t) => e[t] >= 0);
}
var vC = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = WS(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = gC(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: _C(e)
					} };
				}
				case "escaped": {
					let e = gC(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: _C(e)
					} };
				}
				default: return {};
			}
		}
	};
}, yC = /*#__PURE__*/ new Set(["left", "top"]);
async function bC(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = GS(n), s = KS(n), c = YS(n) === "y", l = yC.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = WS(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
		mainAxis: d,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: d.mainAxis || 0,
		crossAxis: d.crossAxis || 0,
		alignmentAxis: d.alignmentAxis
	};
	return s && typeof m == "number" && (p = s === "end" ? m * -1 : m), c ? {
		x: p * u,
		y: f * l
	} : {
		x: f * l,
		y: p * u
	};
}
var xC = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await bC(t, e);
			return a === o.offset?.placement && (n = o.arrow) != null && n.alignmentOffset ? {} : {
				x: r + s.x,
				y: i + s.y,
				data: {
					...s,
					placement: a
				}
			};
		}
	};
}, SC = function(e) {
	return e === void 0 && (e = {}), {
		name: "shift",
		options: e,
		async fn(t) {
			let { x: n, y: r, placement: i, platform: a } = t, { mainAxis: o = !0, crossAxis: s = !1, limiter: c = { fn: (e) => {
				let { x: t, y: n } = e;
				return {
					x: t,
					y: n
				};
			} }, ...l } = WS(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = YS(i), p = qS(f), m = u[p], h = u[f], g = (e, t) => US(t + d[e === "y" ? "top" : "left"], t, t - d[e === "y" ? "bottom" : "right"]);
			o && (m = g(p, m)), s && (h = g(f, h));
			let _ = c.fn({
				...t,
				[p]: m,
				[f]: h
			});
			return {
				..._,
				data: {
					x: _.x - n,
					y: _.y - r,
					enabled: {
						[p]: o,
						[f]: s
					}
				}
			};
		}
	};
}, CC = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = WS(e, t), u = {
				x: n,
				y: r
			}, d = YS(i), f = qS(d), p = u[f], m = u[d], h = WS(s, t), g = typeof h == "number" ? {
				mainAxis: h,
				crossAxis: 0
			} : {
				mainAxis: h.mainAxis ?? 0,
				crossAxis: h.crossAxis ?? 0
			};
			if (c) {
				let e = f === "y" ? "height" : "width", t = a.reference[f] - a.floating[e] + g.mainAxis, n = a.reference[f] + a.reference[e] - g.mainAxis;
				p < t ? p = t : p > n && (p = n);
			}
			if (l) {
				let e = f === "y" ? "width" : "height", t = yC.has(GS(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, wC = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			let { placement: n, rects: r, platform: i, elements: a } = t, { apply: o = () => {}, ...s } = WS(e, t), c = await i.detectOverflow(t, s), l = GS(n), u = KS(n), d = YS(n) === "y", { width: f, height: p } = r.floating, m, h;
			l === "top" || l === "bottom" ? (m = l, h = u === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (h = l, m = u === "end" ? "top" : "bottom");
			let g = p - c.top - c.bottom, _ = f - c.left - c.right, v = LS(p - c[m], g), y = LS(f - c[h], _), b = t.middlewareData.shift, x = !b, S = v, C = y;
			b != null && b.enabled.x && (C = _), b != null && b.enabled.y && (S = g), x && !u && (d ? C = f - 2 * RS(c.left, c.right) : S = p - 2 * RS(c.top, c.bottom)), await o({
				...t,
				availableWidth: C,
				availableHeight: S
			});
			let w = await i.getDimensions(a.floating);
			return f !== w.width || p !== w.height ? { reset: { rects: !0 } } : {};
		}
	};
};
function TC() {
	return typeof window < "u";
}
function EC(e) {
	return kC(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function DC(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function OC(e) {
	return ((kC(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function kC(e) {
	return TC() ? e instanceof Node || e instanceof DC(e).Node : !1;
}
function AC(e) {
	return TC() ? e instanceof Element || e instanceof DC(e).Element : !1;
}
function jC(e) {
	return TC() ? e instanceof HTMLElement || e instanceof DC(e).HTMLElement : !1;
}
function MC(e) {
	return !TC() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof DC(e).ShadowRoot;
}
function NC(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = WC(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function PC(e) {
	return /^(table|td|th)$/.test(EC(e));
}
function FC(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var IC = /transform|translate|scale|rotate|perspective|filter/, LC = /paint|layout|strict|content/, RC = (e) => !!e && e !== "none", zC;
function BC(e) {
	let t = AC(e) ? WC(e) : e;
	return RC(t.transform) || RC(t.translate) || RC(t.scale) || RC(t.rotate) || RC(t.perspective) || !HC() && (RC(t.backdropFilter) || RC(t.filter)) || IC.test(t.willChange || "") || LC.test(t.contain || "");
}
function VC(e) {
	let t = KC(e);
	for (; jC(t) && !UC(t);) {
		if (BC(t)) return t;
		if (FC(t)) return null;
		t = KC(t);
	}
	return null;
}
function HC() {
	return zC ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), zC;
}
function UC(e) {
	return /^(html|body|#document)$/.test(EC(e));
}
function WC(e) {
	return DC(e).getComputedStyle(e);
}
function GC(e) {
	return AC(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function KC(e) {
	if (EC(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || MC(e) && e.host || OC(e);
	return MC(t) ? t.host : t;
}
function qC(e) {
	let t = KC(e);
	return UC(t) ? (e.ownerDocument || e).body : jC(t) && NC(t) ? t : qC(t);
}
function JC(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = qC(e), i = r === e.ownerDocument?.body, a = DC(r);
	if (i) {
		let e = YC(a);
		return t.concat(a, a.visualViewport || [], NC(r) ? r : [], e && n ? JC(e) : []);
	} else return t.concat(r, JC(r, [], n));
}
function YC(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function XC(e) {
	let t = WC(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = jC(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = zS(n) !== a || zS(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function ZC(e) {
	return AC(e) ? e : e.contextElement;
}
function QC(e) {
	let t = ZC(e);
	if (!jC(t)) return VS(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = XC(t), o = (a ? zS(n.width) : n.width) / r, s = (a ? zS(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var $C = /*#__PURE__*/ VS(0);
function ew(e) {
	let t = DC(e);
	return !HC() || !t.visualViewport ? $C : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function tw(e, t, n) {
	return t === void 0 && (t = !1), !!n && t && n === DC(e);
}
function nw(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = ZC(e), o = VS(1);
	t && (r ? AC(r) && (o = QC(r)) : o = QC(e));
	let s = tw(a, n, r) ? ew(a) : VS(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a && r) {
		let e = DC(a), t = AC(r) ? DC(r) : r, n = e, i = YC(n);
		for (; i && t !== n;) {
			let e = QC(i), t = i.getBoundingClientRect(), r = WC(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = DC(i), i = YC(n);
		}
	}
	return lC({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function rw(e, t) {
	let n = GC(e).scrollLeft;
	return t ? t.left + n : nw(OC(e)).left + n;
}
function iw(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - rw(e, n),
		y: n.top + t.scrollTop
	};
}
function aw(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = OC(r), s = t ? FC(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = VS(1), u = VS(0), d = jC(r);
	if ((d || !a) && ((EC(r) !== "body" || NC(o)) && (c = GC(r)), d)) {
		let e = nw(r);
		l = QC(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? iw(o, c) : VS(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function ow(e) {
	return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function sw(e) {
	let t = GC(e), n = e.ownerDocument.body, r = RS(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), i = RS(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight), a = -t.scrollLeft + rw(e), o = -t.scrollTop;
	return WC(n).direction === "rtl" && (a += RS(e.clientWidth, n.clientWidth) - r), {
		width: r,
		height: i,
		x: a,
		y: o
	};
}
var cw = 25;
function lw(e, t, n) {
	n === void 0 && (n = "viewport");
	let r = n === "layoutViewport", i = DC(e), a = OC(e), o = i.visualViewport, s = a.clientWidth, c = a.clientHeight, l = 0, u = 0;
	if (o) {
		let e = !HC() || t === "fixed";
		r ? e || (l = -o.offsetLeft, u = -o.offsetTop) : (s = o.width, c = o.height, e && (l = o.offsetLeft, u = o.offsetTop));
	}
	if (rw(a) <= 0) {
		let e = a.ownerDocument, t = e.body, n = getComputedStyle(t), r = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, i = Math.abs(a.clientWidth - t.clientWidth - r), o = getComputedStyle(a).scrollbarGutter === "stable both-edges" ? i / 2 : i;
		o <= cw && (s -= o);
	}
	return {
		width: s,
		height: c,
		x: l,
		y: u
	};
}
function uw(e, t) {
	let n = nw(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = QC(e);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function dw(e, t, n) {
	let r;
	if (t === "viewport" || t === "layoutViewport") r = lw(e, n, t);
	else if (t === "document") r = sw(OC(e));
	else if (AC(t)) r = uw(t, n);
	else {
		let n = ew(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return lC(r);
}
function fw(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = JC(e, [], !1).filter((e) => AC(e) && EC(e) !== "body"), i = null, a = WC(e).position === "fixed", o = a ? KC(e) : e;
	for (; AC(o) && !UC(o);) {
		let e = WC(o), t = BC(o), n = i ? i.position : a ? "fixed" : "";
		!t && (n === "fixed" || n === "absolute" && e.position === "static") ? r = r.filter((e) => e !== o) : i = e, o = KC(o);
	}
	return t.set(e, r), r;
}
function pw(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? FC(t) ? [] : fw(t, this._c) : [].concat(n), r], o = dw(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = dw(t, a[e], i);
		s = RS(n.top, s), c = LS(n.right, c), l = LS(n.bottom, l), u = RS(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function mw(e) {
	let { width: t, height: n } = XC(e);
	return {
		width: t,
		height: n
	};
}
function hw(e, t, n) {
	let r = jC(t), i = OC(t), a = n === "fixed", o = nw(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = VS(0);
	if ((r || !a) && ((EC(t) !== "body" || NC(i)) && (s = GC(t)), r)) {
		let e = nw(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	}
	!r && i && (c.x = rw(i));
	let l = i && !r && !a ? iw(i, s) : VS(0);
	return {
		x: o.left + s.scrollLeft - c.x - l.x,
		y: o.top + s.scrollTop - c.y - l.y,
		width: o.width,
		height: o.height
	};
}
function gw(e) {
	return WC(e).position === "static";
}
function _w(e, t) {
	if (!jC(e) || WC(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return OC(e) === n && (n = n.ownerDocument.body), n;
}
function vw(e, t) {
	let n = DC(e);
	if (FC(e)) return n;
	if (!jC(e)) {
		let t = KC(e);
		for (; t && !UC(t);) {
			if (AC(t) && !gw(t)) return t;
			t = KC(t);
		}
		return n;
	}
	let r = _w(e, t);
	for (; r && PC(r) && gw(r);) r = _w(r, t);
	return r && UC(r) && gw(r) && !BC(r) ? n : r || VC(e) || n;
}
var yw = async function(e) {
	let t = this.getOffsetParent || vw, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: hw(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function bw(e) {
	return WC(e).direction === "rtl";
}
var xw = {
	convertOffsetParentRelativeRectToViewportRelativeRect: aw,
	getDocumentElement: OC,
	getClippingRect: pw,
	getOffsetParent: vw,
	getElementRects: yw,
	getClientRects: ow,
	getDimensions: mw,
	getScale: QC,
	isElement: AC,
	isRTL: bw
};
function Sw(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Cw(e, t, n) {
	let r = null, i, a = OC(e);
	function o() {
		var e;
		clearTimeout(i), (e = r) == null || e.disconnect(), r = null;
	}
	function s(n, c) {
		n === void 0 && (n = !1), c === void 0 && (c = 1), o();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (n || t(), !f || !p) return;
		let m = BS(d), h = BS(a.clientWidth - (u + f)), g = BS(a.clientHeight - (d + p)), _ = BS(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: RS(0, LS(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (!Sw(l, e.getBoundingClientRect())) return s();
			if (n !== c) {
				if (!y) return s();
				n ? s(!1, n) : i = setTimeout(() => {
					s(!1, 1e-7);
				}, 1e3);
			}
			y = !1;
		}
		try {
			r = new IntersectionObserver(b, {
				...v,
				root: a.ownerDocument
			});
		} catch {
			r = new IntersectionObserver(b, v);
		}
		r.observe(e);
	}
	let c = DC(e), l = () => s(n);
	return c.addEventListener("resize", l), s(!0), () => {
		c.removeEventListener("resize", l), o();
	};
}
function ww(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = ZC(e), u = i || a ? [...l ? JC(l) : [], ...t ? JC(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n), a && e.addEventListener("resize", n);
	});
	let d = l && s ? Cw(l, n, a) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? nw(e) : null;
	c && g();
	function g() {
		let t = nw(e);
		h && !Sw(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var Tw = xC, Ew = SC, Dw = hC, Ow = wC, kw = vC, Aw = mC, jw = CC, Mw = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = n ?? {}, a = {
		...xw,
		...i.platform,
		_c: r
	};
	return pC(e, t, {
		...i,
		platform: a
	});
};
function Nw(e) {
	return typeof e == "function" ? e() : e;
}
function Pw(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Fw(e, t) {
	let n = Pw(e);
	return Math.round(t * n) / n;
}
function Iw(e) {
	return {
		[`--bits-${e}-content-transform-origin`]: "var(--bits-floating-transform-origin)",
		[`--bits-${e}-content-available-width`]: "var(--bits-floating-available-width)",
		[`--bits-${e}-content-available-height`]: "var(--bits-floating-available-height)",
		[`--bits-${e}-anchor-width`]: "var(--bits-floating-anchor-width)",
		[`--bits-${e}-anchor-height`]: "var(--bits-floating-anchor-height)"
	};
}
function Lw(e) {
	let t = e.whileElementsMounted, n = /* @__PURE__ */ P(() => Nw(e.open) ?? !0), r = /* @__PURE__ */ P(() => Nw(e.middleware)), i = /* @__PURE__ */ P(() => Nw(e.transform) ?? !0), a = /* @__PURE__ */ P(() => Nw(e.placement) ?? "bottom"), o = /* @__PURE__ */ P(() => Nw(e.strategy) ?? "absolute"), s = /* @__PURE__ */ P(() => Nw(e.sideOffset) ?? 0), c = /* @__PURE__ */ P(() => Nw(e.alignOffset) ?? 0), l = e.reference, u = /* @__PURE__ */ I(0), d = /* @__PURE__ */ I(0), f = gy(null), p = /* @__PURE__ */ I(kn(H(o))), m = /* @__PURE__ */ I(kn(H(a))), h = /* @__PURE__ */ I(kn({})), g = /* @__PURE__ */ I(!1), _ = !1, v = 0, y = /* @__PURE__ */ P(() => {
		let e = f.current ? Fw(f.current, H(u)) : H(u), t = f.current ? Fw(f.current, H(d)) : H(d);
		return H(i) ? {
			position: H(p),
			left: "0",
			top: "0",
			transform: `translate(${e}px, ${t}px)`,
			...f.current && Pw(f.current) >= 1.5 && { willChange: "transform" }
		} : {
			position: H(p),
			left: `${e}px`,
			top: `${t}px`
		};
	}), b;
	function x() {
		if (l.current === null || f.current === null) return;
		let e = l.current, t = f.current, i = ++v;
		Mw(e, t, {
			middleware: H(r),
			placement: H(a),
			strategy: H(o)
		}).then((r) => {
			if (i === v && !(l.current !== e || f.current !== t)) {
				if (Rw(e)) {
					L(h, {
						...H(h),
						hide: {
							...H(h).hide,
							referenceHidden: !0
						}
					}, !0);
					return;
				}
				if (!H(n) && H(u) !== 0 && H(d) !== 0) {
					let e = Math.max(Math.abs(H(s)), Math.abs(H(c)), 15);
					if (r.x <= e && r.y <= e) return;
				}
				L(u, r.x, !0), L(d, r.y, !0), L(p, r.strategy, !0), L(m, r.placement, !0), L(h, r.middlewareData, !0), L(g, !0);
			}
		});
	}
	function S() {
		typeof b == "function" && (b(), b = void 0), v++;
	}
	function C() {
		if (S(), t === void 0) {
			x();
			return;
		}
		H(n) && (l.current === null || f.current === null || (b = t(l.current, f.current, x)));
	}
	function w() {
		!H(n) && f.current === null && L(g, !1);
	}
	function T() {
		return [
			H(r),
			H(a),
			H(o),
			H(s),
			H(c),
			H(n)
		];
	}
	return Yn(() => {
		t === void 0 && H(n) && x();
	}), Yn(C), Yn(() => {
		if (t !== void 0) {
			if (T(), !H(n)) {
				_ = !1;
				return;
			}
			if (!H(g)) {
				_ = !1;
				return;
			}
			if (!_) {
				_ = !0;
				return;
			}
			x();
		}
	}), Yn(w), Yn(() => S), {
		floating: f,
		reference: l,
		get strategy() {
			return H(p);
		},
		get placement() {
			return H(m);
		},
		get middlewareData() {
			return H(h);
		},
		get isPositioned() {
			return H(g);
		},
		get floatingStyles() {
			return H(y);
		},
		get update() {
			return x;
		}
	};
}
function Rw(e) {
	return e instanceof Element ? !e.isConnected || e instanceof HTMLElement && e.hidden ? !0 : e.getClientRects().length === 0 : !1;
}
var zw = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
}, Bw = new zy("Floating.Root"), Vw = new zy("Floating.Content"), Hw = new zy("Floating.Root"), Uw = class e {
	static create(t = !1) {
		return t ? Hw.set(new e()) : Bw.set(new e());
	}
	anchorNode = gy(null);
	customAnchorNode = gy(null);
	triggerNode = gy(null);
	constructor() {
		Yn(() => {
			this.customAnchorNode.current ? typeof this.customAnchorNode.current == "string" ? this.anchorNode.current = document.querySelector(this.customAnchorNode.current) : this.anchorNode.current = this.customAnchorNode.current : this.anchorNode.current = this.triggerNode.current;
		});
	}
}, Ww = class e {
	static create(t, n = !1) {
		return n ? Vw.set(new e(t, Hw.get())) : Vw.set(new e(t, Bw.get()));
	}
	opts;
	root;
	contentRef = gy(null);
	wrapperRef = gy(null);
	arrowRef = gy(null);
	contentAttachment = vb(this.contentRef);
	wrapperAttachment = vb(this.wrapperRef);
	arrowAttachment = vb(this.arrowRef);
	arrowId = gy(lS());
	#e = /* @__PURE__ */ P(() => {
		if (typeof this.opts.style == "string") return Ey(this.opts.style);
		if (!this.opts.style) return {};
	});
	#t = void 0;
	#n = new Jy(() => this.arrowRef.current ?? void 0);
	#r = /* @__PURE__ */ P(() => this.#n?.width ?? 0);
	#i = /* @__PURE__ */ P(() => this.#n?.height ?? 0);
	#a = /* @__PURE__ */ P(() => this.opts.side?.current + (this.opts.align.current === "center" ? "" : `-${this.opts.align.current}`));
	#o = /* @__PURE__ */ P(() => Array.isArray(this.opts.collisionBoundary.current) ? this.opts.collisionBoundary.current : [this.opts.collisionBoundary.current]);
	#s = /* @__PURE__ */ P(() => H(this.#o).length > 0);
	get hasExplicitBoundaries() {
		return H(this.#s);
	}
	set hasExplicitBoundaries(e) {
		L(this.#s, e);
	}
	#c = /* @__PURE__ */ P(() => ({
		padding: this.opts.collisionPadding.current,
		boundary: H(this.#o).filter(Lb),
		altBoundary: this.hasExplicitBoundaries
	}));
	get detectOverflowOptions() {
		return H(this.#c);
	}
	set detectOverflowOptions(e) {
		L(this.#c, e);
	}
	#l = /* @__PURE__ */ I(void 0);
	#u = /* @__PURE__ */ I(void 0);
	#d = /* @__PURE__ */ I(void 0);
	#f = /* @__PURE__ */ I(void 0);
	#p = /* @__PURE__ */ P(() => [
		Tw({
			mainAxis: this.opts.sideOffset.current + H(this.#i),
			alignmentAxis: this.opts.alignOffset.current
		}),
		this.opts.avoidCollisions.current && Ew({
			mainAxis: !0,
			crossAxis: !1,
			limiter: this.opts.sticky.current === "partial" ? jw() : void 0,
			...this.detectOverflowOptions
		}),
		this.opts.avoidCollisions.current && Dw({ ...this.detectOverflowOptions }),
		Ow({
			...this.detectOverflowOptions,
			apply: ({ rects: e, availableWidth: t, availableHeight: n }) => {
				let { width: r, height: i } = e.reference;
				L(this.#l, t, !0), L(this.#u, n, !0), L(this.#d, r, !0), L(this.#f, i, !0);
			}
		}),
		this.arrowRef.current && Aw({
			element: this.arrowRef.current,
			padding: this.opts.arrowPadding.current
		}),
		Kw({
			arrowWidth: H(this.#r),
			arrowHeight: H(this.#i)
		}),
		this.opts.hideWhenDetached.current && kw({
			strategy: "referenceHidden",
			...this.detectOverflowOptions
		})
	].filter(Boolean));
	get middleware() {
		return H(this.#p);
	}
	set middleware(e) {
		L(this.#p, e);
	}
	floating;
	#m = /* @__PURE__ */ P(() => Jw(this.floating.placement));
	get placedSide() {
		return H(this.#m);
	}
	set placedSide(e) {
		L(this.#m, e);
	}
	#h = /* @__PURE__ */ P(() => Yw(this.floating.placement));
	get placedAlign() {
		return H(this.#h);
	}
	set placedAlign(e) {
		L(this.#h, e);
	}
	#g = /* @__PURE__ */ P(() => this.floating.middlewareData.arrow?.x ?? 0);
	get arrowX() {
		return H(this.#g);
	}
	set arrowX(e) {
		L(this.#g, e);
	}
	#_ = /* @__PURE__ */ P(() => this.floating.middlewareData.arrow?.y ?? 0);
	get arrowY() {
		return H(this.#_);
	}
	set arrowY(e) {
		L(this.#_, e);
	}
	#v = /* @__PURE__ */ P(() => this.floating.middlewareData.arrow?.centerOffset !== 0);
	get cannotCenterArrow() {
		return H(this.#v);
	}
	set cannotCenterArrow(e) {
		L(this.#v, e);
	}
	#y = /* @__PURE__ */ I();
	get contentZIndex() {
		return H(this.#y);
	}
	set contentZIndex(e) {
		L(this.#y, e, !0);
	}
	#b = /* @__PURE__ */ P(() => zw[this.placedSide]);
	get arrowBaseSide() {
		return H(this.#b);
	}
	set arrowBaseSide(e) {
		L(this.#b, e);
	}
	#x = /* @__PURE__ */ P(() => ({
		id: this.opts.wrapperId.current,
		"data-bits-floating-content-wrapper": "",
		style: {
			...this.floating.floatingStyles,
			transform: this.floating.isPositioned ? this.floating.floatingStyles.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: this.contentZIndex,
			"--bits-floating-transform-origin": `${this.floating.middlewareData.transformOrigin?.x} ${this.floating.middlewareData.transformOrigin?.y}`,
			"--bits-floating-available-width": `${H(this.#l)}px`,
			"--bits-floating-available-height": `${H(this.#u)}px`,
			"--bits-floating-anchor-width": `${H(this.#d)}px`,
			"--bits-floating-anchor-height": `${H(this.#f)}px`,
			...this.floating.middlewareData.hide?.referenceHidden && {
				visibility: "hidden",
				"pointer-events": "none"
			},
			...H(this.#e)
		},
		dir: this.opts.dir.current,
		...this.wrapperAttachment
	}));
	get wrapperProps() {
		return H(this.#x);
	}
	set wrapperProps(e) {
		L(this.#x, e);
	}
	#S = /* @__PURE__ */ P(() => ({
		"data-side": this.placedSide,
		"data-align": this.placedAlign,
		style: jy({ ...H(this.#e) }),
		...this.contentAttachment
	}));
	get props() {
		return H(this.#S);
	}
	set props(e) {
		L(this.#S, e);
	}
	#C = /* @__PURE__ */ P(() => ({
		position: "absolute",
		left: this.arrowX ? `${this.arrowX}px` : void 0,
		top: this.arrowY ? `${this.arrowY}px` : void 0,
		[this.arrowBaseSide]: 0,
		"transform-origin": {
			top: "",
			right: "0 0",
			bottom: "center 0",
			left: "100% 0"
		}[this.placedSide],
		transform: {
			top: "translateY(100%)",
			right: "translateY(50%) rotate(90deg) translateX(-50%)",
			bottom: "rotate(180deg)",
			left: "translateY(50%) rotate(-90deg) translateX(50%)"
		}[this.placedSide],
		visibility: this.cannotCenterArrow ? "hidden" : void 0
	}));
	get arrowStyle() {
		return H(this.#C);
	}
	set arrowStyle(e) {
		L(this.#C, e);
	}
	constructor(e, t) {
		this.opts = e, this.root = t, this.#t = e.updatePositionStrategy, e.customAnchor && (this.root.customAnchorNode.current = e.customAnchor.current), Uy(() => e.customAnchor.current, (e) => {
			this.root.customAnchorNode.current = e;
		}), this.floating = Lw({
			strategy: () => this.opts.strategy.current,
			placement: () => H(this.#a),
			middleware: () => this.middleware,
			reference: this.root.anchorNode,
			whileElementsMounted: (...e) => ww(...e, { animationFrame: this.#t?.current === "always" }),
			open: () => this.opts.enabled.current,
			sideOffset: () => this.opts.sideOffset.current,
			alignOffset: () => this.opts.alignOffset.current
		}), Yn(() => {
			this.floating.isPositioned && this.opts.onPlaced?.current();
		}), Uy(() => this.contentRef.current, (e) => {
			if (!e || !this.opts.enabled.current) return;
			let t = hb(e), n = t.requestAnimationFrame(() => {
				if (this.contentRef.current !== e || !this.opts.enabled.current) return;
				let n = t.getComputedStyle(e).zIndex;
				n !== this.contentZIndex && (this.contentZIndex = n);
			});
			return () => {
				t.cancelAnimationFrame(n);
			};
		}), Yn(() => {
			this.floating.floating.current = this.wrapperRef.current;
		});
	}
}, Gw = class e {
	static create(t, n = !1) {
		return n ? new e(t, Hw.get()) : new e(t, Bw.get());
	}
	opts;
	root;
	constructor(e, t) {
		this.opts = e, this.root = t, e.virtualEl && e.virtualEl.current ? t.triggerNode = hy(e.virtualEl.current) : t.triggerNode = e.ref;
	}
};
function Kw(e) {
	return {
		name: "transformOrigin",
		options: e,
		fn(t) {
			let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = qw(n), u = {
				start: "0%",
				center: "50%",
				end: "100%"
			}[l], d = (i.arrow?.x ?? 0) + o / 2, f = (i.arrow?.y ?? 0) + s / 2, p = "", m = "";
			return c === "bottom" ? (p = a ? u : `${d}px`, m = `${-s}px`) : c === "top" ? (p = a ? u : `${d}px`, m = `${r.floating.height + s}px`) : c === "right" ? (p = `${-s}px`, m = a ? u : `${f}px`) : c === "left" && (p = `${r.floating.width + s}px`, m = a ? u : `${f}px`), { data: {
				x: p,
				y: m
			} };
		}
	};
}
function qw(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
function Jw(e) {
	return qw(e)[0];
}
function Yw(e) {
	return qw(e)[1];
}
function Xw(e, t) {
	M(t, !0);
	let n = X(t, "children", 7), r = X(t, "tooltip", 7, !1);
	Uw.create(r());
	var i = {
		get children() {
			return n();
		},
		set children(e) {
			n(e), F();
		},
		get tooltip() {
			return r();
		},
		set tooltip(e = !1) {
			r(e), F();
		}
	}, a = G();
	return q(z(a), () => n() ?? D), K(e, a), N(i);
}
Z(Xw, {
	children: {},
	tooltip: {}
}, [], [], { mode: "open" });
var Zw = class {
	#e;
	#t = /* @__PURE__ */ P(() => this.#e.candidateValues());
	#n;
	constructor(e) {
		this.#e = e, this.#n = Bx("", {
			afterMs: 1e3,
			getWindow: this.#e.getWindow
		}), this.handleTypeaheadSearch = this.handleTypeaheadSearch.bind(this), this.resetTypeahead = this.resetTypeahead.bind(this);
	}
	handleTypeaheadSearch(e) {
		if (!this.#e.enabled() || !H(this.#t).length) return;
		this.#n.current = this.#n.current + e;
		let t = this.#e.getCurrentItem(), n = H(this.#t).find((e) => e === t) ?? "", r = Lx(H(this.#t).map((e) => e ?? ""), this.#n.current, n), i = H(this.#t).find((e) => e === r);
		return i && this.#e.onMatch(i), i;
	}
	resetTypeahead() {
		this.#n.current = "";
	}
}, Qw = [
	Db,
	jb,
	kb
], $w = [
	Ob,
	Ab,
	"End"
], eT = [...Qw, ...$w], tT = Eb({
	component: "select",
	parts: [
		"trigger",
		"content",
		"item",
		"viewport",
		"scroll-up-button",
		"scroll-down-button",
		"group",
		"group-label",
		"separator",
		"arrow",
		"input",
		"content-wrapper",
		"item-text",
		"value"
	]
}), nT = new zy("Select.Root | Combobox.Root");
new zy("Select.Group | Combobox.Group");
var rT = new zy("Select.Content | Combobox.Content"), iT = class {
	opts;
	#e = /* @__PURE__ */ I(!1);
	get touchedInput() {
		return H(this.#e);
	}
	set touchedInput(e) {
		L(this.#e, e, !0);
	}
	#t = /* @__PURE__ */ I(null);
	get inputNode() {
		return H(this.#t);
	}
	set inputNode(e) {
		L(this.#t, e, !0);
	}
	#n = /* @__PURE__ */ I(null);
	get contentNode() {
		return H(this.#n);
	}
	set contentNode(e) {
		L(this.#n, e, !0);
	}
	contentPresence;
	#r = /* @__PURE__ */ I(null);
	get viewportNode() {
		return H(this.#r);
	}
	set viewportNode(e) {
		L(this.#r, e, !0);
	}
	#i = /* @__PURE__ */ I(null);
	get triggerNode() {
		return H(this.#i);
	}
	set triggerNode(e) {
		L(this.#i, e, !0);
	}
	#a = /* @__PURE__ */ I(null);
	get valueNode() {
		return H(this.#a);
	}
	set valueNode(e) {
		L(this.#a, e, !0);
	}
	#o = /* @__PURE__ */ I("");
	get valueId() {
		return H(this.#o);
	}
	set valueId(e) {
		L(this.#o, e, !0);
	}
	#s = /* @__PURE__ */ I(null);
	get highlightedNode() {
		return H(this.#s);
	}
	set highlightedNode(e) {
		L(this.#s, e, !0);
	}
	#c = /* @__PURE__ */ P(() => this.highlightedNode ? this.highlightedNode.getAttribute("data-value") : null);
	get highlightedValue() {
		return H(this.#c);
	}
	set highlightedValue(e) {
		L(this.#c, e);
	}
	#l = /* @__PURE__ */ P(() => {
		if (this.highlightedNode) return this.highlightedNode.id;
	});
	get highlightedId() {
		return H(this.#l);
	}
	set highlightedId(e) {
		L(this.#l, e);
	}
	#u = /* @__PURE__ */ P(() => this.highlightedNode ? this.highlightedNode.getAttribute("data-label") : null);
	get highlightedLabel() {
		return H(this.#u);
	}
	set highlightedLabel(e) {
		L(this.#u, e);
	}
	#d = /* @__PURE__ */ I(!1);
	get contentIsPositioned() {
		return H(this.#d);
	}
	set contentIsPositioned(e) {
		L(this.#d, e, !0);
	}
	isUsingKeyboard = !1;
	isCombobox = !1;
	domContext = new _b(() => null);
	constructor(e) {
		this.opts = e, this.isCombobox = e.isCombobox, this.contentPresence = new zb({
			ref: $(() => this.contentNode),
			open: this.opts.open,
			onComplete: () => {
				this.opts.onOpenChangeComplete.current(this.opts.open.current);
			}
		}), Zn(() => {
			this.opts.open.current || this.setHighlightedNode(null);
		});
	}
	setHighlightedNode(e, t = !1) {
		this.highlightedNode = e, e && (this.isUsingKeyboard || t) && this.scrollHighlightedNodeIntoView(e);
	}
	scrollHighlightedNodeIntoView(e) {
		!this.viewportNode || !this.contentIsPositioned || e.scrollIntoView({ block: this.opts.scrollAlignment.current });
	}
	getCandidateNodes() {
		let e = this.contentNode;
		return e ? Array.from(e.querySelectorAll(`[${this.getBitsAttr("item")}]:not([data-disabled])`)) : [];
	}
	setHighlightedToFirstCandidate(e = !1) {
		this.setHighlightedNode(null);
		let t = this.getCandidateNodes();
		if (t.length) {
			if (this.viewportNode) {
				let e = this.viewportNode.getBoundingClientRect();
				t = t.filter((t) => {
					if (!this.viewportNode) return !1;
					let n = t.getBoundingClientRect();
					return n.right <= e.right && n.left >= e.left && n.bottom <= e.bottom && n.top >= e.top;
				});
			}
			this.setHighlightedNode(t[0], e);
		}
	}
	getNodeByValue(e) {
		return this.getCandidateNodes().find((t) => t.dataset.value === e) ?? null;
	}
	getLabelForValue(e) {
		if (e === "") return "";
		let t = this.opts.items.current.find((t) => t.value === e)?.label;
		if (t !== void 0) return t;
		let n = this.getNodeByValue(e);
		if (n) {
			let t = n.getAttribute("data-label");
			return t !== null && t !== "" ? t : n.textContent?.trim() ?? e;
		}
		return e;
	}
	setOpen(e) {
		this.opts.open.current = e;
	}
	toggleOpen() {
		this.opts.open.current = !this.opts.open.current;
	}
	handleOpen() {
		this.setOpen(!0);
	}
	handleClose() {
		this.setHighlightedNode(null), this.setOpen(!1);
	}
	toggleMenu() {
		this.toggleOpen();
	}
	getBitsAttr = (e) => tT.getAttr(e, this.isCombobox ? "combobox" : void 0);
}, aT = class extends iT {
	opts;
	isMulti = !1;
	#e = /* @__PURE__ */ P(() => this.opts.value.current !== "");
	get hasValue() {
		return H(this.#e);
	}
	set hasValue(e) {
		L(this.#e, e);
	}
	#t = /* @__PURE__ */ P(() => this.opts.items.current.length ? this.opts.items.current.find((e) => e.value === this.opts.value.current)?.label ?? "" : "");
	get currentLabel() {
		return H(this.#t);
	}
	set currentLabel(e) {
		L(this.#t, e);
	}
	#n = /* @__PURE__ */ P(() => this.opts.items.current.length ? this.opts.items.current.filter((e) => !e.disabled).map((e) => e.label) : []);
	get candidateLabels() {
		return H(this.#n);
	}
	set candidateLabels(e) {
		L(this.#n, e);
	}
	#r = /* @__PURE__ */ P(() => !(this.isMulti || this.opts.items.current.length === 0));
	get dataTypeaheadEnabled() {
		return H(this.#r);
	}
	set dataTypeaheadEnabled(e) {
		L(this.#r, e);
	}
	constructor(e) {
		super(e), this.opts = e, Yn(() => {
			!this.opts.open.current && this.highlightedNode && this.setHighlightedNode(null);
		}), Uy(() => this.opts.open.current, () => {
			this.opts.open.current && this.setInitialHighlightedNode();
		});
	}
	includesItem(e) {
		return this.opts.value.current === e;
	}
	toggleItem(e, t = e) {
		let n = this.includesItem(e) ? "" : e;
		this.opts.value.current = n, n !== "" && (this.opts.inputValue.current = t);
	}
	setInitialHighlightedNode() {
		ib(() => {
			if (!(this.highlightedNode && this.domContext.getDocument().contains(this.highlightedNode))) {
				if (this.opts.value.current !== "") {
					let e = this.getNodeByValue(this.opts.value.current);
					if (e) {
						this.setHighlightedNode(e, !0);
						return;
					}
				}
				this.setHighlightedToFirstCandidate(!0);
			}
		});
	}
}, oT = class extends iT {
	opts;
	isMulti = !0;
	#e = /* @__PURE__ */ P(() => this.opts.value.current.length > 0);
	get hasValue() {
		return H(this.#e);
	}
	set hasValue(e) {
		L(this.#e, e);
	}
	constructor(e) {
		super(e), this.opts = e, Yn(() => {
			!this.opts.open.current && this.highlightedNode && this.setHighlightedNode(null);
		}), Uy(() => this.opts.open.current, () => {
			this.opts.open.current && this.setInitialHighlightedNode();
		});
	}
	includesItem(e) {
		return this.opts.value.current.includes(e);
	}
	toggleItem(e, t = e) {
		this.includesItem(e) ? this.opts.value.current = this.opts.value.current.filter((t) => t !== e) : this.opts.value.current = [...this.opts.value.current, e], this.opts.inputValue.current = t;
	}
	setInitialHighlightedNode() {
		ib(() => {
			if (this.domContext && !(this.highlightedNode && this.domContext.getDocument().contains(this.highlightedNode))) {
				if (this.opts.value.current.length && this.opts.value.current[0] !== "") {
					let e = this.getNodeByValue(this.opts.value.current[0]);
					if (e) {
						this.setHighlightedNode(e, !0);
						return;
					}
				}
				this.setHighlightedToFirstCandidate(!0);
			}
		});
	}
}, sT = class {
	static create(e) {
		let { type: t, ...n } = e, r = t === "single" ? new aT(n) : new oT(n);
		return nT.set(r);
	}
}, cT = class e {
	static create(t) {
		return new e(t, nT.get());
	}
	opts;
	root;
	attachment;
	#e;
	#t;
	constructor(e, t) {
		this.opts = e, this.root = t, this.attachment = vb(e.ref, (e) => this.root.triggerNode = e), this.root.domContext = new _b(e.ref), this.#e = new Vx({
			getCurrentItem: () => this.root.highlightedNode,
			onMatch: (e) => {
				this.root.setHighlightedNode(e);
			},
			getActiveElement: () => this.root.domContext.getActiveElement(),
			getWindow: () => this.root.domContext.getWindow()
		}), this.#t = new Zw({
			getCurrentItem: () => this.root.isMulti ? "" : this.root.currentLabel,
			onMatch: (e) => {
				if (this.root.isMulti || !this.root.opts.items.current) return;
				let t = this.root.opts.items.current.find((t) => t.label === e);
				t && (this.root.opts.value.current = t.value);
			},
			enabled: () => !this.root.isMulti && this.root.dataTypeaheadEnabled,
			candidateValues: () => this.root.isMulti ? [] : this.root.candidateLabels,
			getWindow: () => this.root.domContext.getWindow()
		}), this.onkeydown = this.onkeydown.bind(this), this.onpointerdown = this.onpointerdown.bind(this), this.onpointerup = this.onpointerup.bind(this), this.onclick = this.onclick.bind(this);
	}
	#n() {
		this.root.opts.open.current = !0, this.#t.resetTypeahead(), this.#e.resetTypeahead();
	}
	#r(e) {
		this.#n();
	}
	#i() {
		let e = this.root.highlightedValue === this.root.opts.value.current;
		return !this.root.opts.allowDeselect.current && e && !this.root.isMulti || (this.root.highlightedValue !== null && this.root.toggleItem(this.root.highlightedValue, this.root.highlightedLabel ?? void 0), !this.root.isMulti && !e) ? (this.root.handleClose(), !0) : !1;
	}
	onkeydown(e) {
		if (this.root.isUsingKeyboard = !0, (e.key === "ArrowUp" || e.key === "ArrowDown") && e.preventDefault(), !this.root.opts.open.current) {
			if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown" || e.key === "ArrowUp") e.preventDefault(), this.root.handleOpen();
			else if (!this.root.isMulti && this.root.dataTypeaheadEnabled) {
				this.#t.handleTypeaheadSearch(e.key);
				return;
			}
			if (this.root.hasValue) return;
			let t = this.root.getCandidateNodes();
			if (!t.length) return;
			if (e.key === "ArrowDown") {
				let e = t[0];
				this.root.setHighlightedNode(e);
			} else if (e.key === "ArrowUp") {
				let e = t[t.length - 1];
				this.root.setHighlightedNode(e);
			}
			return;
		}
		if (e.key === "Tab") {
			this.root.handleClose();
			return;
		}
		if ((e.key === "Enter" || e.key === " " && this.#e.search === "") && !e.isComposing && (e.preventDefault(), this.#i())) return;
		if (e.key === "ArrowUp" && e.altKey && this.root.handleClose(), eT.includes(e.key)) {
			e.preventDefault();
			let t = this.root.getCandidateNodes(), n = this.root.highlightedNode, r = n ? t.indexOf(n) : -1, i = this.root.opts.loop.current, a;
			if (e.key === "ArrowDown" ? a = Nx(t, r, i) : e.key === "ArrowUp" ? a = Px(t, r, i) : e.key === "PageDown" ? a = Fx(t, r, 10, i) : e.key === "PageUp" ? a = Ix(t, r, 10, i) : e.key === "Home" ? a = t[0] : e.key === "End" && (a = t[t.length - 1]), !a) return;
			this.root.setHighlightedNode(a);
			return;
		}
		let t = e.ctrlKey || e.altKey || e.metaKey, n = e.key.length === 1, r = e.key === " ", i = this.root.getCandidateNodes();
		if (e.key !== "Tab") {
			if (!t && (n || r)) {
				!this.#e.handleTypeaheadSearch(e.key, i) && r && (e.preventDefault(), this.#i());
				return;
			}
			this.root.highlightedNode || this.root.setHighlightedToFirstCandidate();
		}
	}
	onclick(e) {
		e.currentTarget.focus();
	}
	onpointerdown(e) {
		if (this.root.opts.disabled.current) return;
		if (e.pointerType === "touch") return e.preventDefault();
		let t = e.target;
		t?.hasPointerCapture(e.pointerId) && t?.releasePointerCapture(e.pointerId), e.button === 0 && e.ctrlKey === !1 && (this.root.opts.open.current === !1 ? this.#r(e) : this.root.handleClose());
	}
	onpointerup(e) {
		this.root.opts.disabled.current || (e.preventDefault(), e.pointerType === "touch" && (this.root.opts.open.current === !1 ? this.#r(e) : this.root.handleClose()));
	}
	#a = /* @__PURE__ */ P(() => ({
		id: this.opts.id.current,
		disabled: this.root.opts.disabled.current ? !0 : void 0,
		"aria-haspopup": "listbox",
		"aria-expanded": yb(this.root.opts.open.current),
		"aria-activedescendant": this.root.highlightedId,
		"data-state": Sb(this.root.opts.open.current),
		"data-disabled": bb(this.root.opts.disabled.current),
		"data-placeholder": this.root.hasValue ? void 0 : "",
		[this.root.getBitsAttr("trigger")]: "",
		onpointerdown: this.onpointerdown,
		onkeydown: this.onkeydown,
		onclick: this.onclick,
		onpointerup: this.onpointerup,
		...this.attachment
	}));
	get props() {
		return H(this.#a);
	}
	set props(e) {
		L(this.#a, e);
	}
}, lT = class e {
	static create(t) {
		return rT.set(new e(t, nT.get()));
	}
	opts;
	root;
	attachment;
	#e = /* @__PURE__ */ I(!1);
	get isPositioned() {
		return H(this.#e);
	}
	set isPositioned(e) {
		L(this.#e, e, !0);
	}
	domContext;
	constructor(e, t) {
		this.opts = e, this.root = t, this.attachment = vb(e.ref, (e) => this.root.contentNode = e), this.domContext = new _b(this.opts.ref), this.root.domContext === null && (this.root.domContext = this.domContext), tb(() => {
			this.root.contentNode = null, this.root.contentIsPositioned = !1, this.isPositioned = !1;
		}), Uy(() => this.root.opts.open.current, () => {
			this.root.opts.open.current || (this.root.contentIsPositioned = !1, this.isPositioned = !1);
		}), Uy([() => this.isPositioned, () => this.root.highlightedNode], () => {
			!this.isPositioned || !this.root.highlightedNode || this.root.scrollHighlightedNodeIntoView(this.root.highlightedNode);
		}), this.onpointermove = this.onpointermove.bind(this);
	}
	onpointermove(e) {
		this.root.isUsingKeyboard = !1;
	}
	#t = /* @__PURE__ */ P(() => Iw(this.root.isCombobox ? "combobox" : "select"));
	onInteractOutside = (e) => {
		if (e.target === this.root.triggerNode || e.target === this.root.inputNode) {
			e.preventDefault();
			return;
		}
		this.opts.onInteractOutside.current(e), !e.defaultPrevented && this.root.handleClose();
	};
	onEscapeKeydown = (e) => {
		this.opts.onEscapeKeydown.current(e), !e.defaultPrevented && this.root.handleClose();
	};
	onOpenAutoFocus = (e) => {
		e.preventDefault();
	};
	onCloseAutoFocus = (e) => {
		e.preventDefault();
	};
	get shouldRender() {
		return this.root.contentPresence.shouldRender;
	}
	#n = /* @__PURE__ */ P(() => ({ open: this.root.opts.open.current }));
	get snippetProps() {
		return H(this.#n);
	}
	set snippetProps(e) {
		L(this.#n, e);
	}
	#r = /* @__PURE__ */ P(() => ({
		id: this.opts.id.current,
		role: "listbox",
		"aria-multiselectable": this.root.isMulti ? "true" : void 0,
		"data-state": Sb(this.root.opts.open.current),
		...Cb(this.root.contentPresence.transitionStatus),
		[this.root.getBitsAttr("content")]: "",
		style: {
			display: "flex",
			flexDirection: "column",
			outline: "none",
			boxSizing: "border-box",
			pointerEvents: "auto",
			...H(this.#t)
		},
		onpointermove: this.onpointermove,
		...this.attachment
	}));
	get props() {
		return H(this.#r);
	}
	set props(e) {
		L(this.#r, e);
	}
	popperProps = {
		onInteractOutside: this.onInteractOutside,
		onEscapeKeydown: this.onEscapeKeydown,
		onOpenAutoFocus: this.onOpenAutoFocus,
		onCloseAutoFocus: this.onCloseAutoFocus,
		trapFocus: !1,
		loop: !1,
		onPlaced: () => {
			this.root.opts.open.current && (this.root.contentIsPositioned = !0, this.isPositioned = !0);
		}
	};
}, uT = class e {
	static create(t) {
		return new e(t, nT.get());
	}
	opts;
	root;
	attachment;
	#e = /* @__PURE__ */ P(() => this.root.includesItem(this.opts.value.current));
	get isSelected() {
		return H(this.#e);
	}
	set isSelected(e) {
		L(this.#e, e);
	}
	#t = /* @__PURE__ */ P(() => this.root.highlightedValue === this.opts.value.current);
	get isHighlighted() {
		return H(this.#t);
	}
	set isHighlighted(e) {
		L(this.#t, e);
	}
	prevHighlighted = new Yy(() => this.isHighlighted);
	#n = /* @__PURE__ */ I(!1);
	get mounted() {
		return H(this.#n);
	}
	set mounted(e) {
		L(this.#n, e, !0);
	}
	constructor(e, t) {
		this.opts = e, this.root = t, this.attachment = vb(e.ref), Uy([() => this.isHighlighted, () => this.prevHighlighted.current], () => {
			this.isHighlighted ? this.opts.onHighlight.current() : this.prevHighlighted.current && this.opts.onUnhighlight.current();
		}), Uy(() => this.mounted, () => {
			this.mounted && this.root.setInitialHighlightedNode();
		}), this.onpointerdown = this.onpointerdown.bind(this), this.onpointerup = this.onpointerup.bind(this), this.onpointermove = this.onpointermove.bind(this);
	}
	handleSelect() {
		if (this.opts.disabled.current) return;
		let e = this.opts.value.current === this.root.opts.value.current;
		if (!this.root.opts.allowDeselect.current && e && !this.root.isMulti) {
			this.root.handleClose();
			return;
		}
		this.root.toggleItem(this.opts.value.current, this.opts.label.current), !this.root.isMulti && !e && this.root.handleClose();
	}
	#r = /* @__PURE__ */ P(() => ({
		selected: this.isSelected,
		highlighted: this.isHighlighted
	}));
	get snippetProps() {
		return H(this.#r);
	}
	set snippetProps(e) {
		L(this.#r, e);
	}
	onpointerdown(e) {
		e.preventDefault();
	}
	onpointerup(e) {
		if (!(e.defaultPrevented || !this.opts.ref.current)) {
			if (e.pointerType === "touch" && !Nb) {
				$r(this.opts.ref.current, "click", () => {
					this.handleSelect(), this.root.setHighlightedNode(this.opts.ref.current);
				}, { once: !0 });
				return;
			}
			e.preventDefault(), this.handleSelect(), e.pointerType === "touch" && this.root.setHighlightedNode(this.opts.ref.current);
		}
	}
	onpointermove(e) {
		e.pointerType !== "touch" && this.root.highlightedNode !== this.opts.ref.current && this.root.setHighlightedNode(this.opts.ref.current);
	}
	#i = /* @__PURE__ */ P(() => ({
		id: this.opts.id.current,
		role: "option",
		"aria-selected": this.root.includesItem(this.opts.value.current) ? "true" : void 0,
		"data-value": this.opts.value.current,
		"data-disabled": bb(this.opts.disabled.current),
		"data-highlighted": this.root.highlightedValue === this.opts.value.current && !this.opts.disabled.current ? "" : void 0,
		"data-selected": this.root.includesItem(this.opts.value.current) ? "" : void 0,
		"data-label": this.opts.label.current,
		[this.root.getBitsAttr("item")]: "",
		onpointermove: this.onpointermove,
		onpointerdown: this.onpointerdown,
		onpointerup: this.onpointerup,
		...this.attachment
	}));
	get props() {
		return H(this.#i);
	}
	set props(e) {
		L(this.#i, e);
	}
}, dT = class e {
	static create(t) {
		return new e(t, nT.get());
	}
	opts;
	root;
	#e = /* @__PURE__ */ P(() => this.root.opts.name.current !== "");
	get shouldRender() {
		return H(this.#e);
	}
	set shouldRender(e) {
		L(this.#e, e);
	}
	constructor(e, t) {
		this.opts = e, this.root = t, this.onfocus = this.onfocus.bind(this);
	}
	onfocus(e) {
		e.preventDefault(), this.root.isCombobox ? this.root.inputNode?.focus() : this.root.triggerNode?.focus();
	}
	#t = /* @__PURE__ */ P(() => ({
		disabled: xb(this.root.opts.disabled.current),
		required: xb(this.root.opts.required.current),
		name: this.root.opts.name.current,
		value: this.opts.value.current,
		onfocus: this.onfocus
	}));
	get props() {
		return H(this.#t);
	}
	set props(e) {
		L(this.#t, e);
	}
}, fT = class e {
	static create(t) {
		return new e(t, rT.get());
	}
	opts;
	content;
	root;
	attachment;
	#e = /* @__PURE__ */ I(0);
	get prevScrollTop() {
		return H(this.#e);
	}
	set prevScrollTop(e) {
		L(this.#e, e, !0);
	}
	constructor(e, t) {
		this.opts = e, this.content = t, this.root = t.root, this.attachment = vb(e.ref, (e) => {
			this.root.viewportNode = e;
		});
	}
	#t = /* @__PURE__ */ P(() => ({
		id: this.opts.id.current,
		role: "presentation",
		[this.root.getBitsAttr("viewport")]: "",
		style: {
			position: "relative",
			flex: 1,
			overflow: "auto"
		},
		...this.attachment
	}));
	get props() {
		return H(this.#t);
	}
	set props(e) {
		L(this.#t, e);
	}
};
function pT(e, t) {
	M(t, !0);
	let n = X(t, "value", 15), r = X(t, "autocomplete", 7), i = dT.create({ value: $(() => n()) });
	var a = {
		get value() {
			return n();
		},
		set value(e) {
			n(e), F();
		},
		get autocomplete() {
			return r();
		},
		set autocomplete(e) {
			r(e), F();
		}
	}, o = G(), s = z(o), c = (e) => {
		AS(e, qa(() => i.props, {
			get autocomplete() {
				return r();
			},
			get value() {
				return n();
			},
			set value(e) {
				n(e);
			}
		}));
	};
	return J(s, (e) => {
		i.shouldRender && e(c);
	}), K(e, o), N(a);
}
Z(pT, {
	value: {},
	autocomplete: {}
}, [], [], { mode: "open" });
function mT(e, t) {
	M(t, !0);
	let n = X(t, "id", 7), r = X(t, "children", 7), i = X(t, "virtualEl", 7), a = X(t, "ref", 7), o = X(t, "tooltip", 7, !1);
	Gw.create({
		id: $(() => n()),
		virtualEl: $(() => i()),
		ref: a()
	}, o());
	var s = {
		get id() {
			return n();
		},
		set id(e) {
			n(e), F();
		},
		get children() {
			return r();
		},
		set children(e) {
			r(e), F();
		},
		get virtualEl() {
			return i();
		},
		set virtualEl(e) {
			i(e), F();
		},
		get ref() {
			return a();
		},
		set ref(e) {
			a(e), F();
		},
		get tooltip() {
			return o();
		},
		set tooltip(e = !1) {
			o(e), F();
		}
	}, c = G();
	return q(z(c), () => r() ?? D), K(e, c), N(s);
}
Z(mT, {
	id: {},
	children: {},
	virtualEl: {},
	ref: {},
	tooltip: {}
}, [], [], { mode: "open" });
function hT(e, t) {
	M(t, !0);
	let n = X(t, "content", 7), r = X(t, "side", 7, "bottom"), i = X(t, "sideOffset", 7, 0), a = X(t, "align", 7, "center"), o = X(t, "alignOffset", 7, 0), s = X(t, "id", 7), c = X(t, "arrowPadding", 7, 0), l = X(t, "avoidCollisions", 7, !0), u = X(t, "collisionBoundary", 23, () => []), d = X(t, "collisionPadding", 7, 0), f = X(t, "hideWhenDetached", 7, !1), p = X(t, "onPlaced", 7, () => {}), m = X(t, "sticky", 7, "partial"), h = X(t, "updatePositionStrategy", 7, "optimized"), g = X(t, "strategy", 7, "fixed"), _ = X(t, "dir", 7, "ltr"), v = X(t, "style", 23, () => ({})), y = X(t, "wrapperId", 23, lS), b = X(t, "customAnchor", 7, null), x = X(t, "enabled", 7), S = X(t, "tooltip", 7, !1), C = Ww.create({
		side: $(() => r()),
		sideOffset: $(() => i()),
		align: $(() => a()),
		alignOffset: $(() => o()),
		id: $(() => s()),
		arrowPadding: $(() => c()),
		avoidCollisions: $(() => l()),
		collisionBoundary: $(() => u()),
		collisionPadding: $(() => d()),
		hideWhenDetached: $(() => f()),
		onPlaced: $(() => p()),
		sticky: $(() => m()),
		updatePositionStrategy: $(() => h()),
		strategy: $(() => g()),
		dir: $(() => _()),
		style: $(() => v()),
		enabled: $(() => x()),
		wrapperId: $(() => y()),
		customAnchor: $(() => b())
	}, S()), w = /* @__PURE__ */ P(() => Py(C.wrapperProps, { style: { pointerEvents: "auto" } }));
	var T = {
		get content() {
			return n();
		},
		set content(e) {
			n(e), F();
		},
		get side() {
			return r();
		},
		set side(e = "bottom") {
			r(e), F();
		},
		get sideOffset() {
			return i();
		},
		set sideOffset(e = 0) {
			i(e), F();
		},
		get align() {
			return a();
		},
		set align(e = "center") {
			a(e), F();
		},
		get alignOffset() {
			return o();
		},
		set alignOffset(e = 0) {
			o(e), F();
		},
		get id() {
			return s();
		},
		set id(e) {
			s(e), F();
		},
		get arrowPadding() {
			return c();
		},
		set arrowPadding(e = 0) {
			c(e), F();
		},
		get avoidCollisions() {
			return l();
		},
		set avoidCollisions(e = !0) {
			l(e), F();
		},
		get collisionBoundary() {
			return u();
		},
		set collisionBoundary(e = []) {
			u(e), F();
		},
		get collisionPadding() {
			return d();
		},
		set collisionPadding(e = 0) {
			d(e), F();
		},
		get hideWhenDetached() {
			return f();
		},
		set hideWhenDetached(e = !1) {
			f(e), F();
		},
		get onPlaced() {
			return p();
		},
		set onPlaced(e = () => {}) {
			p(e), F();
		},
		get sticky() {
			return m();
		},
		set sticky(e = "partial") {
			m(e), F();
		},
		get updatePositionStrategy() {
			return h();
		},
		set updatePositionStrategy(e = "optimized") {
			h(e), F();
		},
		get strategy() {
			return g();
		},
		set strategy(e = "fixed") {
			g(e), F();
		},
		get dir() {
			return _();
		},
		set dir(e = "ltr") {
			_(e), F();
		},
		get style() {
			return v();
		},
		set style(e = {}) {
			v(e), F();
		},
		get wrapperId() {
			return y();
		},
		set wrapperId(e = lS()) {
			y(e), F();
		},
		get customAnchor() {
			return b();
		},
		set customAnchor(e = null) {
			b(e), F();
		},
		get enabled() {
			return x();
		},
		set enabled(e) {
			x(e), F();
		},
		get tooltip() {
			return S();
		},
		set tooltip(e = !1) {
			S(e), F();
		}
	}, E = G();
	return q(z(E), () => n() ?? D, () => ({
		props: C.props,
		wrapperProps: H(w)
	})), K(e, E), N(T);
}
Z(hT, {
	content: {},
	side: {},
	sideOffset: {},
	align: {},
	alignOffset: {},
	id: {},
	arrowPadding: {},
	avoidCollisions: {},
	collisionBoundary: {},
	collisionPadding: {},
	hideWhenDetached: {},
	onPlaced: {},
	sticky: {},
	updatePositionStrategy: {},
	strategy: {},
	dir: {},
	style: {},
	wrapperId: {},
	customAnchor: {},
	enabled: {},
	tooltip: {}
}, [], [], { mode: "open" });
function gT(e, t) {
	M(t, !0);
	let n = X(t, "content", 7), r = X(t, "onPlaced", 7);
	Ai(() => {
		r()?.();
	});
	var i = {
		get content() {
			return n();
		},
		set content(e) {
			n(e), F();
		},
		get onPlaced() {
			return r();
		},
		set onPlaced(e) {
			r(e), F();
		}
	}, a = G();
	return q(z(a), () => n() ?? D, () => ({
		props: {},
		wrapperProps: {}
	})), K(e, a), N(i);
}
Z(gT, {
	content: {},
	onPlaced: {}
}, [], [], { mode: "open" });
var _T = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"content",
	"isStatic",
	"onPlaced"
]);
function vT(e, t) {
	M(t, !0);
	let n = X(t, "content", 7), r = X(t, "isStatic", 7, !1), i = X(t, "onPlaced", 7), a = /* @__PURE__ */ Ua(t, _T);
	var o = {
		get content() {
			return n();
		},
		set content(e) {
			n(e), F();
		},
		get isStatic() {
			return r();
		},
		set isStatic(e = !1) {
			r(e), F();
		},
		get onPlaced() {
			return i();
		},
		set onPlaced(e) {
			i(e), F();
		}
	}, s = G(), c = z(s), l = (e) => {
		gT(e, {
			get content() {
				return n();
			},
			get onPlaced() {
				return i();
			}
		});
	}, u = (e) => {
		hT(e, qa({
			get content() {
				return n();
			},
			get onPlaced() {
				return i();
			}
		}, () => a));
	};
	return J(c, (e) => {
		r() ? e(l) : e(u, -1);
	}), K(e, s), N(o);
}
Z(vT, {
	content: {},
	isStatic: {},
	onPlaced: {}
}, [], [], { mode: "open" });
var yT = /* @__PURE__ */ new Set(/* @__PURE__ */ "$$slots.$$events.$$legacy.$$host.popper.onEscapeKeydown.escapeKeydownBehavior.preventOverflowTextSelection.id.onPointerDown.onPointerUp.side.sideOffset.align.alignOffset.arrowPadding.avoidCollisions.collisionBoundary.collisionPadding.sticky.hideWhenDetached.updatePositionStrategy.strategy.dir.preventScroll.wrapperId.style.onPlaced.onInteractOutside.onCloseAutoFocus.onOpenAutoFocus.onFocusOutside.interactOutsideBehavior.loop.trapFocus.isValidEvent.customAnchor.isStatic.enabled.ref.tooltip.contentPointerEvents".split(".")), bT = /* @__PURE__ */ U("<!> <!>", 1);
function xT(e, t) {
	M(t, !0);
	let n = X(t, "popper", 7), r = X(t, "onEscapeKeydown", 7), i = X(t, "escapeKeydownBehavior", 7), a = X(t, "preventOverflowTextSelection", 7), o = X(t, "id", 7), s = X(t, "onPointerDown", 7), c = X(t, "onPointerUp", 7), l = X(t, "side", 7), u = X(t, "sideOffset", 7), d = X(t, "align", 7), f = X(t, "alignOffset", 7), p = X(t, "arrowPadding", 7), m = X(t, "avoidCollisions", 7), h = X(t, "collisionBoundary", 7), g = X(t, "collisionPadding", 7), _ = X(t, "sticky", 7), v = X(t, "hideWhenDetached", 7), y = X(t, "updatePositionStrategy", 7), b = X(t, "strategy", 7), x = X(t, "dir", 7), S = X(t, "preventScroll", 7), C = X(t, "wrapperId", 7), w = X(t, "style", 7), T = X(t, "onPlaced", 7), E = X(t, "onInteractOutside", 7), ee = X(t, "onCloseAutoFocus", 7), te = X(t, "onOpenAutoFocus", 7), ne = X(t, "onFocusOutside", 7), re = X(t, "interactOutsideBehavior", 7, "close"), ie = X(t, "loop", 7), ae = X(t, "trapFocus", 7, !0), oe = X(t, "isValidEvent", 7, () => !1), O = X(t, "customAnchor", 7, null), se = X(t, "isStatic", 7, !1), ce = X(t, "enabled", 7), le = X(t, "ref", 7), ue = X(t, "tooltip", 7, !1), de = X(t, "contentPointerEvents", 7, "auto"), fe = /* @__PURE__ */ Ua(t, yT), pe = /* @__PURE__ */ P(() => S() ?? !0), me = /* @__PURE__ */ P(() => b() ?? (H(pe) ? "fixed" : "absolute"));
	return vT(e, {
		get isStatic() {
			return se();
		},
		get id() {
			return o();
		},
		get side() {
			return l();
		},
		get sideOffset() {
			return u();
		},
		get align() {
			return d();
		},
		get alignOffset() {
			return f();
		},
		get arrowPadding() {
			return p();
		},
		get avoidCollisions() {
			return m();
		},
		get collisionBoundary() {
			return h();
		},
		get collisionPadding() {
			return g();
		},
		get sticky() {
			return _();
		},
		get hideWhenDetached() {
			return v();
		},
		get updatePositionStrategy() {
			return y();
		},
		get strategy() {
			return H(me);
		},
		get dir() {
			return x();
		},
		get wrapperId() {
			return C();
		},
		get style() {
			return w();
		},
		get onPlaced() {
			return T();
		},
		get customAnchor() {
			return O();
		},
		get enabled() {
			return ce();
		},
		get tooltip() {
			return ue();
		},
		content: (e, l) => {
			let u = () => (l?.()).props, d = () => (l?.()).wrapperProps;
			var f = bT(), p = z(f), m = (e) => {
				xS(e, { get preventScroll() {
					return H(pe);
				} });
			}, h = (e) => {
				xS(e, { get preventScroll() {
					return H(pe);
				} });
			};
			J(p, (e) => {
				t.forceMount && ce() ? e(m) : t.forceMount || e(h, 1);
			}), tS(B(p, 2), {
				get onOpenAutoFocus() {
					return te();
				},
				get onCloseAutoFocus() {
					return ee();
				},
				get loop() {
					return ie();
				},
				get enabled() {
					return ce();
				},
				get trapFocus() {
					return ae();
				},
				get forceMount() {
					return t.forceMount;
				},
				get ref() {
					return le();
				},
				focusScope: (e, t) => {
					let l = () => (t?.()).props;
					Qx(e, {
						get onEscapeKeydown() {
							return r();
						},
						get escapeKeydownBehavior() {
							return i();
						},
						get enabled() {
							return ce();
						},
						get ref() {
							return le();
						},
						children: (e, t) => {
							Yx(e, {
								get id() {
									return o();
								},
								get onInteractOutside() {
									return E();
								},
								get onFocusOutside() {
									return ne();
								},
								get interactOutsideBehavior() {
									return re();
								},
								get isValidEvent() {
									return oe();
								},
								get enabled() {
									return ce();
								},
								get ref() {
									return le();
								},
								children: (e, t) => {
									let r = () => (t?.()).props;
									cS(e, {
										get id() {
											return o();
										},
										get preventOverflowTextSelection() {
											return a();
										},
										get onPointerDown() {
											return s();
										},
										get onPointerUp() {
											return c();
										},
										get enabled() {
											return ce();
										},
										get ref() {
											return le();
										},
										children: (e, t) => {
											var i = G(), a = z(i);
											{
												let e = /* @__PURE__ */ P(() => ({
													props: Py(fe, u(), r(), l(), { style: { pointerEvents: de() } }),
													wrapperProps: d()
												}));
												q(a, () => n() ?? D, () => H(e));
											}
											K(e, i);
										},
										$$slots: { default: !0 }
									});
								},
								$$slots: { default: !0 }
							});
						},
						$$slots: { default: !0 }
					});
				},
				$$slots: { focusScope: !0 }
			}), K(e, f);
		},
		$$slots: { content: !0 }
	}), N({
		get popper() {
			return n();
		},
		set popper(e) {
			n(e), F();
		},
		get onEscapeKeydown() {
			return r();
		},
		set onEscapeKeydown(e) {
			r(e), F();
		},
		get escapeKeydownBehavior() {
			return i();
		},
		set escapeKeydownBehavior(e) {
			i(e), F();
		},
		get preventOverflowTextSelection() {
			return a();
		},
		set preventOverflowTextSelection(e) {
			a(e), F();
		},
		get id() {
			return o();
		},
		set id(e) {
			o(e), F();
		},
		get onPointerDown() {
			return s();
		},
		set onPointerDown(e) {
			s(e), F();
		},
		get onPointerUp() {
			return c();
		},
		set onPointerUp(e) {
			c(e), F();
		},
		get side() {
			return l();
		},
		set side(e) {
			l(e), F();
		},
		get sideOffset() {
			return u();
		},
		set sideOffset(e) {
			u(e), F();
		},
		get align() {
			return d();
		},
		set align(e) {
			d(e), F();
		},
		get alignOffset() {
			return f();
		},
		set alignOffset(e) {
			f(e), F();
		},
		get arrowPadding() {
			return p();
		},
		set arrowPadding(e) {
			p(e), F();
		},
		get avoidCollisions() {
			return m();
		},
		set avoidCollisions(e) {
			m(e), F();
		},
		get collisionBoundary() {
			return h();
		},
		set collisionBoundary(e) {
			h(e), F();
		},
		get collisionPadding() {
			return g();
		},
		set collisionPadding(e) {
			g(e), F();
		},
		get sticky() {
			return _();
		},
		set sticky(e) {
			_(e), F();
		},
		get hideWhenDetached() {
			return v();
		},
		set hideWhenDetached(e) {
			v(e), F();
		},
		get updatePositionStrategy() {
			return y();
		},
		set updatePositionStrategy(e) {
			y(e), F();
		},
		get strategy() {
			return b();
		},
		set strategy(e) {
			b(e), F();
		},
		get dir() {
			return x();
		},
		set dir(e) {
			x(e), F();
		},
		get preventScroll() {
			return S();
		},
		set preventScroll(e) {
			S(e), F();
		},
		get wrapperId() {
			return C();
		},
		set wrapperId(e) {
			C(e), F();
		},
		get style() {
			return w();
		},
		set style(e) {
			w(e), F();
		},
		get onPlaced() {
			return T();
		},
		set onPlaced(e) {
			T(e), F();
		},
		get onInteractOutside() {
			return E();
		},
		set onInteractOutside(e) {
			E(e), F();
		},
		get onCloseAutoFocus() {
			return ee();
		},
		set onCloseAutoFocus(e) {
			ee(e), F();
		},
		get onOpenAutoFocus() {
			return te();
		},
		set onOpenAutoFocus(e) {
			te(e), F();
		},
		get onFocusOutside() {
			return ne();
		},
		set onFocusOutside(e) {
			ne(e), F();
		},
		get interactOutsideBehavior() {
			return re();
		},
		set interactOutsideBehavior(e = "close") {
			re(e), F();
		},
		get loop() {
			return ie();
		},
		set loop(e) {
			ie(e), F();
		},
		get trapFocus() {
			return ae();
		},
		set trapFocus(e = !0) {
			ae(e), F();
		},
		get isValidEvent() {
			return oe();
		},
		set isValidEvent(e = () => !1) {
			oe(e), F();
		},
		get customAnchor() {
			return O();
		},
		set customAnchor(e = null) {
			O(e), F();
		},
		get isStatic() {
			return se();
		},
		set isStatic(e = !1) {
			se(e), F();
		},
		get enabled() {
			return ce();
		},
		set enabled(e) {
			ce(e), F();
		},
		get ref() {
			return le();
		},
		set ref(e) {
			le(e), F();
		},
		get tooltip() {
			return ue();
		},
		set tooltip(e = !1) {
			ue(e), F();
		},
		get contentPointerEvents() {
			return de();
		},
		set contentPointerEvents(e = "auto") {
			de(e), F();
		}
	});
}
Z(xT, {
	popper: {},
	onEscapeKeydown: {},
	escapeKeydownBehavior: {},
	preventOverflowTextSelection: {},
	id: {},
	onPointerDown: {},
	onPointerUp: {},
	side: {},
	sideOffset: {},
	align: {},
	alignOffset: {},
	arrowPadding: {},
	avoidCollisions: {},
	collisionBoundary: {},
	collisionPadding: {},
	sticky: {},
	hideWhenDetached: {},
	updatePositionStrategy: {},
	strategy: {},
	dir: {},
	preventScroll: {},
	wrapperId: {},
	style: {},
	onPlaced: {},
	onInteractOutside: {},
	onCloseAutoFocus: {},
	onOpenAutoFocus: {},
	onFocusOutside: {},
	interactOutsideBehavior: {},
	loop: {},
	trapFocus: {},
	isValidEvent: {},
	customAnchor: {},
	isStatic: {},
	enabled: {},
	ref: {},
	tooltip: {},
	contentPointerEvents: {}
}, [], [], { mode: "open" });
var ST = /* @__PURE__ */ new Set(/* @__PURE__ */ "$$slots.$$events.$$legacy.$$host.popper.open.onEscapeKeydown.escapeKeydownBehavior.preventOverflowTextSelection.id.onPointerDown.onPointerUp.side.sideOffset.align.alignOffset.arrowPadding.avoidCollisions.collisionBoundary.collisionPadding.sticky.hideWhenDetached.updatePositionStrategy.strategy.dir.preventScroll.wrapperId.style.onPlaced.onInteractOutside.onCloseAutoFocus.onOpenAutoFocus.onFocusOutside.interactOutsideBehavior.loop.trapFocus.isValidEvent.customAnchor.isStatic.ref.shouldRender".split("."));
function CT(e, t) {
	M(t, !0);
	let n = X(t, "popper", 7), r = X(t, "open", 7), i = X(t, "onEscapeKeydown", 7), a = X(t, "escapeKeydownBehavior", 7), o = X(t, "preventOverflowTextSelection", 7), s = X(t, "id", 7), c = X(t, "onPointerDown", 7), l = X(t, "onPointerUp", 7), u = X(t, "side", 7), d = X(t, "sideOffset", 7), f = X(t, "align", 7), p = X(t, "alignOffset", 7), m = X(t, "arrowPadding", 7), h = X(t, "avoidCollisions", 7), g = X(t, "collisionBoundary", 7), _ = X(t, "collisionPadding", 7), v = X(t, "sticky", 7), y = X(t, "hideWhenDetached", 7), b = X(t, "updatePositionStrategy", 7), x = X(t, "strategy", 7), S = X(t, "dir", 7), C = X(t, "preventScroll", 7), w = X(t, "wrapperId", 7), T = X(t, "style", 7), E = X(t, "onPlaced", 7), D = X(t, "onInteractOutside", 7), ee = X(t, "onCloseAutoFocus", 7), te = X(t, "onOpenAutoFocus", 7), ne = X(t, "onFocusOutside", 7), re = X(t, "interactOutsideBehavior", 7, "close"), ie = X(t, "loop", 7), ae = X(t, "trapFocus", 7, !0), oe = X(t, "isValidEvent", 7, () => !1), O = X(t, "customAnchor", 7, null), se = X(t, "isStatic", 7, !1), ce = X(t, "ref", 7), le = X(t, "shouldRender", 7), ue = /* @__PURE__ */ Ua(t, ST);
	var de = {
		get popper() {
			return n();
		},
		set popper(e) {
			n(e), F();
		},
		get open() {
			return r();
		},
		set open(e) {
			r(e), F();
		},
		get onEscapeKeydown() {
			return i();
		},
		set onEscapeKeydown(e) {
			i(e), F();
		},
		get escapeKeydownBehavior() {
			return a();
		},
		set escapeKeydownBehavior(e) {
			a(e), F();
		},
		get preventOverflowTextSelection() {
			return o();
		},
		set preventOverflowTextSelection(e) {
			o(e), F();
		},
		get id() {
			return s();
		},
		set id(e) {
			s(e), F();
		},
		get onPointerDown() {
			return c();
		},
		set onPointerDown(e) {
			c(e), F();
		},
		get onPointerUp() {
			return l();
		},
		set onPointerUp(e) {
			l(e), F();
		},
		get side() {
			return u();
		},
		set side(e) {
			u(e), F();
		},
		get sideOffset() {
			return d();
		},
		set sideOffset(e) {
			d(e), F();
		},
		get align() {
			return f();
		},
		set align(e) {
			f(e), F();
		},
		get alignOffset() {
			return p();
		},
		set alignOffset(e) {
			p(e), F();
		},
		get arrowPadding() {
			return m();
		},
		set arrowPadding(e) {
			m(e), F();
		},
		get avoidCollisions() {
			return h();
		},
		set avoidCollisions(e) {
			h(e), F();
		},
		get collisionBoundary() {
			return g();
		},
		set collisionBoundary(e) {
			g(e), F();
		},
		get collisionPadding() {
			return _();
		},
		set collisionPadding(e) {
			_(e), F();
		},
		get sticky() {
			return v();
		},
		set sticky(e) {
			v(e), F();
		},
		get hideWhenDetached() {
			return y();
		},
		set hideWhenDetached(e) {
			y(e), F();
		},
		get updatePositionStrategy() {
			return b();
		},
		set updatePositionStrategy(e) {
			b(e), F();
		},
		get strategy() {
			return x();
		},
		set strategy(e) {
			x(e), F();
		},
		get dir() {
			return S();
		},
		set dir(e) {
			S(e), F();
		},
		get preventScroll() {
			return C();
		},
		set preventScroll(e) {
			C(e), F();
		},
		get wrapperId() {
			return w();
		},
		set wrapperId(e) {
			w(e), F();
		},
		get style() {
			return T();
		},
		set style(e) {
			T(e), F();
		},
		get onPlaced() {
			return E();
		},
		set onPlaced(e) {
			E(e), F();
		},
		get onInteractOutside() {
			return D();
		},
		set onInteractOutside(e) {
			D(e), F();
		},
		get onCloseAutoFocus() {
			return ee();
		},
		set onCloseAutoFocus(e) {
			ee(e), F();
		},
		get onOpenAutoFocus() {
			return te();
		},
		set onOpenAutoFocus(e) {
			te(e), F();
		},
		get onFocusOutside() {
			return ne();
		},
		set onFocusOutside(e) {
			ne(e), F();
		},
		get interactOutsideBehavior() {
			return re();
		},
		set interactOutsideBehavior(e = "close") {
			re(e), F();
		},
		get loop() {
			return ie();
		},
		set loop(e) {
			ie(e), F();
		},
		get trapFocus() {
			return ae();
		},
		set trapFocus(e = !0) {
			ae(e), F();
		},
		get isValidEvent() {
			return oe();
		},
		set isValidEvent(e = () => !1) {
			oe(e), F();
		},
		get customAnchor() {
			return O();
		},
		set customAnchor(e = null) {
			O(e), F();
		},
		get isStatic() {
			return se();
		},
		set isStatic(e = !1) {
			se(e), F();
		},
		get ref() {
			return ce();
		},
		set ref(e) {
			ce(e), F();
		},
		get shouldRender() {
			return le();
		},
		set shouldRender(e) {
			le(e), F();
		}
	}, fe = G(), pe = z(fe), me = (e) => {
		xT(e, qa({
			get popper() {
				return n();
			},
			get onEscapeKeydown() {
				return i();
			},
			get escapeKeydownBehavior() {
				return a();
			},
			get preventOverflowTextSelection() {
				return o();
			},
			get id() {
				return s();
			},
			get onPointerDown() {
				return c();
			},
			get onPointerUp() {
				return l();
			},
			get side() {
				return u();
			},
			get sideOffset() {
				return d();
			},
			get align() {
				return f();
			},
			get alignOffset() {
				return p();
			},
			get arrowPadding() {
				return m();
			},
			get avoidCollisions() {
				return h();
			},
			get collisionBoundary() {
				return g();
			},
			get collisionPadding() {
				return _();
			},
			get sticky() {
				return v();
			},
			get hideWhenDetached() {
				return y();
			},
			get updatePositionStrategy() {
				return b();
			},
			get strategy() {
				return x();
			},
			get dir() {
				return S();
			},
			get preventScroll() {
				return C();
			},
			get wrapperId() {
				return w();
			},
			get style() {
				return T();
			},
			get onPlaced() {
				return E();
			},
			get customAnchor() {
				return O();
			},
			get isStatic() {
				return se();
			},
			get enabled() {
				return r();
			},
			get onInteractOutside() {
				return D();
			},
			get onCloseAutoFocus() {
				return ee();
			},
			get onOpenAutoFocus() {
				return te();
			},
			get interactOutsideBehavior() {
				return re();
			},
			get loop() {
				return ie();
			},
			get trapFocus() {
				return ae();
			},
			get isValidEvent() {
				return oe();
			},
			get onFocusOutside() {
				return ne();
			},
			forceMount: !1,
			get ref() {
				return ce();
			}
		}, () => ue));
	};
	return J(pe, (e) => {
		le() && e(me);
	}), K(e, fe), N(de);
}
Z(CT, {
	popper: {},
	open: {},
	onEscapeKeydown: {},
	escapeKeydownBehavior: {},
	preventOverflowTextSelection: {},
	id: {},
	onPointerDown: {},
	onPointerUp: {},
	side: {},
	sideOffset: {},
	align: {},
	alignOffset: {},
	arrowPadding: {},
	avoidCollisions: {},
	collisionBoundary: {},
	collisionPadding: {},
	sticky: {},
	hideWhenDetached: {},
	updatePositionStrategy: {},
	strategy: {},
	dir: {},
	preventScroll: {},
	wrapperId: {},
	style: {},
	onPlaced: {},
	onInteractOutside: {},
	onCloseAutoFocus: {},
	onOpenAutoFocus: {},
	onFocusOutside: {},
	interactOutsideBehavior: {},
	loop: {},
	trapFocus: {},
	isValidEvent: {},
	customAnchor: {},
	isStatic: {},
	ref: {},
	shouldRender: {}
}, [], [], { mode: "open" });
var wT = /* @__PURE__ */ new Set(/* @__PURE__ */ "$$slots.$$events.$$legacy.$$host.popper.onEscapeKeydown.escapeKeydownBehavior.preventOverflowTextSelection.id.onPointerDown.onPointerUp.side.sideOffset.align.alignOffset.arrowPadding.avoidCollisions.collisionBoundary.collisionPadding.sticky.hideWhenDetached.updatePositionStrategy.strategy.dir.preventScroll.wrapperId.style.onPlaced.onInteractOutside.onCloseAutoFocus.onOpenAutoFocus.onFocusOutside.interactOutsideBehavior.loop.trapFocus.isValidEvent.customAnchor.isStatic.enabled".split("."));
function TT(e, t) {
	M(t, !0);
	let n = X(t, "popper", 7), r = X(t, "onEscapeKeydown", 7), i = X(t, "escapeKeydownBehavior", 7), a = X(t, "preventOverflowTextSelection", 7), o = X(t, "id", 7), s = X(t, "onPointerDown", 7), c = X(t, "onPointerUp", 7), l = X(t, "side", 7), u = X(t, "sideOffset", 7), d = X(t, "align", 7), f = X(t, "alignOffset", 7), p = X(t, "arrowPadding", 7), m = X(t, "avoidCollisions", 7), h = X(t, "collisionBoundary", 7), g = X(t, "collisionPadding", 7), _ = X(t, "sticky", 7), v = X(t, "hideWhenDetached", 7), y = X(t, "updatePositionStrategy", 7), b = X(t, "strategy", 7), x = X(t, "dir", 7), S = X(t, "preventScroll", 7), C = X(t, "wrapperId", 7), w = X(t, "style", 7), T = X(t, "onPlaced", 7), E = X(t, "onInteractOutside", 7), D = X(t, "onCloseAutoFocus", 7), ee = X(t, "onOpenAutoFocus", 7), te = X(t, "onFocusOutside", 7), ne = X(t, "interactOutsideBehavior", 7, "close"), re = X(t, "loop", 7), ie = X(t, "trapFocus", 7, !0), ae = X(t, "isValidEvent", 7, () => !1), oe = X(t, "customAnchor", 7, null), O = X(t, "isStatic", 7, !1), se = X(t, "enabled", 7), ce = /* @__PURE__ */ Ua(t, wT);
	return xT(e, qa({
		get popper() {
			return n();
		},
		get onEscapeKeydown() {
			return r();
		},
		get escapeKeydownBehavior() {
			return i();
		},
		get preventOverflowTextSelection() {
			return a();
		},
		get id() {
			return o();
		},
		get onPointerDown() {
			return s();
		},
		get onPointerUp() {
			return c();
		},
		get side() {
			return l();
		},
		get sideOffset() {
			return u();
		},
		get align() {
			return d();
		},
		get alignOffset() {
			return f();
		},
		get arrowPadding() {
			return p();
		},
		get avoidCollisions() {
			return m();
		},
		get collisionBoundary() {
			return h();
		},
		get collisionPadding() {
			return g();
		},
		get sticky() {
			return _();
		},
		get hideWhenDetached() {
			return v();
		},
		get updatePositionStrategy() {
			return y();
		},
		get strategy() {
			return b();
		},
		get dir() {
			return x();
		},
		get preventScroll() {
			return S();
		},
		get wrapperId() {
			return C();
		},
		get style() {
			return w();
		},
		get onPlaced() {
			return T();
		},
		get customAnchor() {
			return oe();
		},
		get isStatic() {
			return O();
		},
		get enabled() {
			return se();
		},
		get onInteractOutside() {
			return E();
		},
		get onCloseAutoFocus() {
			return D();
		},
		get onOpenAutoFocus() {
			return ee();
		},
		get interactOutsideBehavior() {
			return ne();
		},
		get loop() {
			return re();
		},
		get trapFocus() {
			return ie();
		},
		get isValidEvent() {
			return ae();
		},
		get onFocusOutside() {
			return te();
		}
	}, () => ce, { forceMount: !0 })), N({
		get popper() {
			return n();
		},
		set popper(e) {
			n(e), F();
		},
		get onEscapeKeydown() {
			return r();
		},
		set onEscapeKeydown(e) {
			r(e), F();
		},
		get escapeKeydownBehavior() {
			return i();
		},
		set escapeKeydownBehavior(e) {
			i(e), F();
		},
		get preventOverflowTextSelection() {
			return a();
		},
		set preventOverflowTextSelection(e) {
			a(e), F();
		},
		get id() {
			return o();
		},
		set id(e) {
			o(e), F();
		},
		get onPointerDown() {
			return s();
		},
		set onPointerDown(e) {
			s(e), F();
		},
		get onPointerUp() {
			return c();
		},
		set onPointerUp(e) {
			c(e), F();
		},
		get side() {
			return l();
		},
		set side(e) {
			l(e), F();
		},
		get sideOffset() {
			return u();
		},
		set sideOffset(e) {
			u(e), F();
		},
		get align() {
			return d();
		},
		set align(e) {
			d(e), F();
		},
		get alignOffset() {
			return f();
		},
		set alignOffset(e) {
			f(e), F();
		},
		get arrowPadding() {
			return p();
		},
		set arrowPadding(e) {
			p(e), F();
		},
		get avoidCollisions() {
			return m();
		},
		set avoidCollisions(e) {
			m(e), F();
		},
		get collisionBoundary() {
			return h();
		},
		set collisionBoundary(e) {
			h(e), F();
		},
		get collisionPadding() {
			return g();
		},
		set collisionPadding(e) {
			g(e), F();
		},
		get sticky() {
			return _();
		},
		set sticky(e) {
			_(e), F();
		},
		get hideWhenDetached() {
			return v();
		},
		set hideWhenDetached(e) {
			v(e), F();
		},
		get updatePositionStrategy() {
			return y();
		},
		set updatePositionStrategy(e) {
			y(e), F();
		},
		get strategy() {
			return b();
		},
		set strategy(e) {
			b(e), F();
		},
		get dir() {
			return x();
		},
		set dir(e) {
			x(e), F();
		},
		get preventScroll() {
			return S();
		},
		set preventScroll(e) {
			S(e), F();
		},
		get wrapperId() {
			return C();
		},
		set wrapperId(e) {
			C(e), F();
		},
		get style() {
			return w();
		},
		set style(e) {
			w(e), F();
		},
		get onPlaced() {
			return T();
		},
		set onPlaced(e) {
			T(e), F();
		},
		get onInteractOutside() {
			return E();
		},
		set onInteractOutside(e) {
			E(e), F();
		},
		get onCloseAutoFocus() {
			return D();
		},
		set onCloseAutoFocus(e) {
			D(e), F();
		},
		get onOpenAutoFocus() {
			return ee();
		},
		set onOpenAutoFocus(e) {
			ee(e), F();
		},
		get onFocusOutside() {
			return te();
		},
		set onFocusOutside(e) {
			te(e), F();
		},
		get interactOutsideBehavior() {
			return ne();
		},
		set interactOutsideBehavior(e = "close") {
			ne(e), F();
		},
		get loop() {
			return re();
		},
		set loop(e) {
			re(e), F();
		},
		get trapFocus() {
			return ie();
		},
		set trapFocus(e = !0) {
			ie(e), F();
		},
		get isValidEvent() {
			return ae();
		},
		set isValidEvent(e = () => !1) {
			ae(e), F();
		},
		get customAnchor() {
			return oe();
		},
		set customAnchor(e = null) {
			oe(e), F();
		},
		get isStatic() {
			return O();
		},
		set isStatic(e = !1) {
			O(e), F();
		},
		get enabled() {
			return se();
		},
		set enabled(e) {
			se(e), F();
		}
	});
}
Z(TT, {
	popper: {},
	onEscapeKeydown: {},
	escapeKeydownBehavior: {},
	preventOverflowTextSelection: {},
	id: {},
	onPointerDown: {},
	onPointerUp: {},
	side: {},
	sideOffset: {},
	align: {},
	alignOffset: {},
	arrowPadding: {},
	avoidCollisions: {},
	collisionBoundary: {},
	collisionPadding: {},
	sticky: {},
	hideWhenDetached: {},
	updatePositionStrategy: {},
	strategy: {},
	dir: {},
	preventScroll: {},
	wrapperId: {},
	style: {},
	onPlaced: {},
	onInteractOutside: {},
	onCloseAutoFocus: {},
	onOpenAutoFocus: {},
	onFocusOutside: {},
	interactOutsideBehavior: {},
	loop: {},
	trapFocus: {},
	isValidEvent: {},
	customAnchor: {},
	isStatic: {},
	enabled: {}
}, [], [], { mode: "open" });
var ET = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"id",
	"ref",
	"forceMount",
	"side",
	"onInteractOutside",
	"onEscapeKeydown",
	"children",
	"child",
	"preventScroll",
	"style"
]), DT = /* @__PURE__ */ U("<div><div><!></div></div>");
function OT(e, t) {
	let n = di();
	M(t, !0);
	let r = X(t, "id", 23, () => Vb(n)), i = X(t, "ref", 15, null), a = X(t, "forceMount", 7, !1), o = X(t, "side", 7, "bottom"), s = X(t, "onInteractOutside", 7, Bb), c = X(t, "onEscapeKeydown", 7, Bb), l = X(t, "children", 7), u = X(t, "child", 7), d = X(t, "preventScroll", 7, !1), f = X(t, "style", 7), p = /* @__PURE__ */ Ua(t, ET), m = lT.create({
		id: $(() => r()),
		ref: $(() => i(), (e) => i(e)),
		onInteractOutside: $(() => s()),
		onEscapeKeydown: $(() => c())
	}), h = /* @__PURE__ */ P(() => Py(p, m.props));
	var g = {
		get id() {
			return r();
		},
		set id(e = Vb(n)) {
			r(e), F();
		},
		get ref() {
			return i();
		},
		set ref(e = null) {
			i(e), F();
		},
		get forceMount() {
			return a();
		},
		set forceMount(e = !1) {
			a(e), F();
		},
		get side() {
			return o();
		},
		set side(e = "bottom") {
			o(e), F();
		},
		get onInteractOutside() {
			return s();
		},
		set onInteractOutside(e = Bb) {
			s(e), F();
		},
		get onEscapeKeydown() {
			return c();
		},
		set onEscapeKeydown(e = Bb) {
			c(e), F();
		},
		get children() {
			return l();
		},
		set children(e) {
			l(e), F();
		},
		get child() {
			return u();
		},
		set child(e) {
			u(e), F();
		},
		get preventScroll() {
			return d();
		},
		set preventScroll(e = !1) {
			d(e), F();
		},
		get style() {
			return f();
		},
		set style(e) {
			f(e), F();
		}
	}, _ = G(), v = z(_), y = (e) => {
		TT(e, qa(() => H(h), () => m.popperProps, {
			get ref() {
				return m.opts.ref;
			},
			get side() {
				return o();
			},
			get enabled() {
				return m.root.opts.open.current;
			},
			get id() {
				return r();
			},
			get preventScroll() {
				return d();
			},
			forceMount: !0,
			get shouldRender() {
				return m.shouldRender;
			},
			popper: (e, t) => {
				let n = () => (t?.()).props, r = () => (t?.()).wrapperProps, i = /* @__PURE__ */ P(() => Py(n(), { style: m.props.style }, { style: f() }));
				var a = G(), o = z(a), s = (e) => {
					var t = G(), n = z(t);
					{
						let e = /* @__PURE__ */ P(() => ({
							props: H(i),
							wrapperProps: r(),
							...m.snippetProps
						}));
						q(n, u, () => H(e));
					}
					K(e, t);
				}, c = (e) => {
					var t = DT();
					Oa(t, () => ({ ...r() }));
					var n = R(t);
					Oa(n, () => ({ ...H(i) })), q(R(n), () => l() ?? D), A(n), A(t), K(e, t);
				};
				J(o, (e) => {
					u() ? e(s) : e(c, -1);
				}), K(e, a);
			},
			$$slots: { popper: !0 }
		}));
	}, b = (e) => {
		CT(e, qa(() => H(h), () => m.popperProps, {
			get ref() {
				return m.opts.ref;
			},
			get side() {
				return o();
			},
			get open() {
				return m.root.opts.open.current;
			},
			get id() {
				return r();
			},
			get preventScroll() {
				return d();
			},
			forceMount: !1,
			get shouldRender() {
				return m.shouldRender;
			},
			popper: (e, t) => {
				let n = () => (t?.()).props, r = () => (t?.()).wrapperProps, i = /* @__PURE__ */ P(() => Py(n(), { style: m.props.style }, { style: f() }));
				var a = G(), o = z(a), s = (e) => {
					var t = G(), n = z(t);
					{
						let e = /* @__PURE__ */ P(() => ({
							props: H(i),
							wrapperProps: r(),
							...m.snippetProps
						}));
						q(n, u, () => H(e));
					}
					K(e, t);
				}, c = (e) => {
					var t = DT();
					Oa(t, () => ({ ...r() }));
					var n = R(t);
					Oa(n, () => ({ ...H(i) })), q(R(n), () => l() ?? D), A(n), A(t), K(e, t);
				};
				J(o, (e) => {
					u() ? e(s) : e(c, -1);
				}), K(e, a);
			},
			$$slots: { popper: !0 }
		}));
	};
	return J(v, (e) => {
		a() ? e(y) : a() || e(b, 1);
	}), K(e, _), N(g);
}
Z(OT, {
	id: {},
	ref: {},
	forceMount: {},
	side: {},
	onInteractOutside: {},
	onEscapeKeydown: {},
	children: {},
	child: {},
	preventScroll: {},
	style: {}
}, [], [], { mode: "open" });
function kT(e, t) {
	M(t, !0);
	let n = X(t, "mounted", 15, !1), r = X(t, "onMountedChange", 7, Bb);
	return nb(() => (n(!0), r()(!0), () => {
		n(!1), r()(!1);
	})), N({
		get mounted() {
			return n();
		},
		set mounted(e = !1) {
			n(e), F();
		},
		get onMountedChange() {
			return r();
		},
		set onMountedChange(e = Bb) {
			r(e), F();
		}
	});
}
Z(kT, {
	mounted: {},
	onMountedChange: {}
}, [], [], { mode: "open" });
var AT = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"id",
	"ref",
	"value",
	"label",
	"disabled",
	"children",
	"child",
	"onHighlight",
	"onUnhighlight"
]), jT = /* @__PURE__ */ U("<div><!></div>"), MT = /* @__PURE__ */ U("<!> <!>", 1);
function NT(e, t) {
	let n = di();
	M(t, !0);
	let r = X(t, "id", 23, () => Vb(n)), i = X(t, "ref", 15, null), a = X(t, "value", 7), o = X(t, "label", 23, a), s = X(t, "disabled", 7, !1), c = X(t, "children", 7), l = X(t, "child", 7), u = X(t, "onHighlight", 7, Bb), d = X(t, "onUnhighlight", 7, Bb), f = /* @__PURE__ */ Ua(t, AT), p = uT.create({
		id: $(() => r()),
		ref: $(() => i(), (e) => i(e)),
		value: $(() => a()),
		disabled: $(() => s()),
		label: $(() => o()),
		onHighlight: $(() => u()),
		onUnhighlight: $(() => d())
	}), m = /* @__PURE__ */ P(() => Py(f, p.props));
	var h = {
		get id() {
			return r();
		},
		set id(e = Vb(n)) {
			r(e), F();
		},
		get ref() {
			return i();
		},
		set ref(e = null) {
			i(e), F();
		},
		get value() {
			return a();
		},
		set value(e) {
			a(e), F();
		},
		get label() {
			return o();
		},
		set label(e = a) {
			o(e), F();
		},
		get disabled() {
			return s();
		},
		set disabled(e = !1) {
			s(e), F();
		},
		get children() {
			return c();
		},
		set children(e) {
			c(e), F();
		},
		get child() {
			return l();
		},
		set child(e) {
			l(e), F();
		},
		get onHighlight() {
			return u();
		},
		set onHighlight(e = Bb) {
			u(e), F();
		},
		get onUnhighlight() {
			return d();
		},
		set onUnhighlight(e = Bb) {
			d(e), F();
		}
	}, g = MT(), _ = z(g), v = (e) => {
		var t = G(), n = z(t);
		{
			let e = /* @__PURE__ */ P(() => ({
				props: H(m),
				...p.snippetProps
			}));
			q(n, l, () => H(e));
		}
		K(e, t);
	}, y = (e) => {
		var t = jT();
		Oa(t, () => ({ ...H(m) })), q(R(t), () => c() ?? D, () => p.snippetProps), A(t), K(e, t);
	};
	return J(_, (e) => {
		l() ? e(v) : e(y, -1);
	}), kT(B(_, 2), {
		get mounted() {
			return p.mounted;
		},
		set mounted(e) {
			p.mounted = e;
		}
	}), K(e, g), N(h);
}
Z(NT, {
	id: {},
	ref: {},
	value: {},
	label: {},
	disabled: {},
	children: {},
	child: {},
	onHighlight: {},
	onUnhighlight: {}
}, [], [], { mode: "open" });
var PT = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"id",
	"ref",
	"children",
	"child"
]), FT = /* @__PURE__ */ U("<div><!></div>"), IT = {
	hash: "svelte-110x5tk",
	code: "\n	/* Hide scrollbars cross browser and enable momentum scroll for touch devices */[data-select-viewport] {scrollbar-width:none !important;-ms-overflow-style:none !important;-webkit-overflow-scrolling:touch !important;}[data-combobox-viewport] {scrollbar-width:none !important;-ms-overflow-style:none !important;-webkit-overflow-scrolling:touch !important;}[data-combobox-viewport]::-webkit-scrollbar {display:none !important;}[data-select-viewport]::-webkit-scrollbar {display:none !important;}"
};
function LT(e, t) {
	let n = di();
	M(t, !0), Zi(e, IT);
	let r = X(t, "id", 23, () => Vb(n)), i = X(t, "ref", 15, null), a = X(t, "children", 7), o = X(t, "child", 7), s = /* @__PURE__ */ Ua(t, PT), c = fT.create({
		id: $(() => r()),
		ref: $(() => i(), (e) => i(e))
	}), l = /* @__PURE__ */ P(() => Py(s, c.props));
	var u = {
		get id() {
			return r();
		},
		set id(e = Vb(n)) {
			r(e), F();
		},
		get ref() {
			return i();
		},
		set ref(e = null) {
			i(e), F();
		},
		get children() {
			return a();
		},
		set children(e) {
			a(e), F();
		},
		get child() {
			return o();
		},
		set child(e) {
			o(e), F();
		}
	}, d = G(), f = z(d), p = (e) => {
		var t = G();
		q(z(t), o, () => ({ props: H(l) })), K(e, t);
	}, m = (e) => {
		var t = FT();
		Oa(t, () => ({ ...H(l) })), q(R(t), () => a() ?? D), A(t), K(e, t);
	};
	return J(f, (e) => {
		o() ? e(p) : e(m, -1);
	}), K(e, d), N(u);
}
Z(LT, {
	id: {},
	ref: {},
	children: {},
	child: {}
}, [], [], { mode: "open" });
var RT = /* @__PURE__ */ U("<!> <!>", 1);
function zT(e, t) {
	M(t, !0);
	let n = X(t, "value", 15), r = X(t, "onValueChange", 7, Bb), i = X(t, "name", 7, ""), a = X(t, "disabled", 7, !1), o = X(t, "type", 7), s = X(t, "open", 15, !1), c = X(t, "onOpenChange", 7, Bb), l = X(t, "onOpenChangeComplete", 7, Bb), u = X(t, "loop", 7, !1), d = X(t, "scrollAlignment", 7, "nearest"), f = X(t, "required", 7, !1), p = X(t, "items", 23, () => []), m = X(t, "allowDeselect", 7, !1), h = X(t, "autocomplete", 7), g = X(t, "children", 7);
	function _() {
		n() === void 0 && n(o() === "single" ? "" : []);
	}
	_(), Uy.pre(() => n(), () => {
		_();
	});
	let v = /* @__PURE__ */ I(""), y = sT.create({
		type: o(),
		value: $(() => n(), (e) => {
			n(e), r()(e);
		}),
		disabled: $(() => a()),
		required: $(() => f()),
		open: $(() => s(), (e) => {
			s(e), c()(e);
		}),
		loop: $(() => u()),
		scrollAlignment: $(() => d()),
		name: $(() => i()),
		isCombobox: !1,
		items: $(() => p()),
		allowDeselect: $(() => m()),
		inputValue: $(() => H(v), (e) => L(v, e, !0)),
		onOpenChangeComplete: $(() => l())
	});
	var b = {
		get value() {
			return n();
		},
		set value(e) {
			n(e), F();
		},
		get onValueChange() {
			return r();
		},
		set onValueChange(e = Bb) {
			r(e), F();
		},
		get name() {
			return i();
		},
		set name(e = "") {
			i(e), F();
		},
		get disabled() {
			return a();
		},
		set disabled(e = !1) {
			a(e), F();
		},
		get type() {
			return o();
		},
		set type(e) {
			o(e), F();
		},
		get open() {
			return s();
		},
		set open(e = !1) {
			s(e), F();
		},
		get onOpenChange() {
			return c();
		},
		set onOpenChange(e = Bb) {
			c(e), F();
		},
		get onOpenChangeComplete() {
			return l();
		},
		set onOpenChangeComplete(e = Bb) {
			l(e), F();
		},
		get loop() {
			return u();
		},
		set loop(e = !1) {
			u(e), F();
		},
		get scrollAlignment() {
			return d();
		},
		set scrollAlignment(e = "nearest") {
			d(e), F();
		},
		get required() {
			return f();
		},
		set required(e = !1) {
			f(e), F();
		},
		get items() {
			return p();
		},
		set items(e = []) {
			p(e), F();
		},
		get allowDeselect() {
			return m();
		},
		set allowDeselect(e = !1) {
			m(e), F();
		},
		get autocomplete() {
			return h();
		},
		set autocomplete(e) {
			h(e), F();
		},
		get children() {
			return g();
		},
		set children(e) {
			g(e), F();
		}
	}, x = RT(), S = z(x);
	Xw(S, {
		children: (e, t) => {
			var n = G();
			q(z(n), () => g() ?? D), K(e, n);
		},
		$$slots: { default: !0 }
	});
	var C = B(S, 2), w = (e) => {
		var t = G(), n = z(t), r = (e) => {
			pT(e, { get autocomplete() {
				return h();
			} });
		}, i = (e) => {
			var t = G();
			Vi(z(t), 16, () => y.opts.value.current, (e) => e, (e, t) => {
				pT(e, {
					get value() {
						return t;
					},
					get autocomplete() {
						return h();
					}
				});
			}), K(e, t);
		};
		J(n, (e) => {
			y.opts.value.current.length === 0 ? e(r) : e(i, -1);
		}), K(e, t);
	}, T = /* @__PURE__ */ P(() => Array.isArray(y.opts.value.current)), E = (e) => {
		pT(e, {
			get autocomplete() {
				return h();
			},
			get value() {
				return y.opts.value.current;
			},
			set value(e) {
				y.opts.value.current = e;
			}
		});
	};
	return J(C, (e) => {
		H(T) ? e(w) : e(E, -1);
	}), K(e, x), N(b);
}
Z(zT, {
	value: {},
	onValueChange: {},
	name: {},
	disabled: {},
	type: {},
	open: {},
	onOpenChange: {},
	onOpenChangeComplete: {},
	loop: {},
	scrollAlignment: {},
	required: {},
	items: {},
	allowDeselect: {},
	autocomplete: {},
	children: {}
}, [], [], { mode: "open" });
var BT = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"id",
	"ref",
	"child",
	"children",
	"type"
]), VT = /* @__PURE__ */ U("<button><!></button>");
function HT(e, t) {
	let n = di();
	M(t, !0);
	let r = X(t, "id", 23, () => Vb(n)), i = X(t, "ref", 15, null), a = X(t, "child", 7), o = X(t, "children", 7), s = X(t, "type", 7, "button"), c = /* @__PURE__ */ Ua(t, BT), l = cT.create({
		id: $(() => r()),
		ref: $(() => i(), (e) => i(e))
	}), u = /* @__PURE__ */ P(() => Py(c, l.props, { type: s() }));
	var d = {
		get id() {
			return r();
		},
		set id(e = Vb(n)) {
			r(e), F();
		},
		get ref() {
			return i();
		},
		set ref(e = null) {
			i(e), F();
		},
		get child() {
			return a();
		},
		set child(e) {
			a(e), F();
		},
		get children() {
			return o();
		},
		set children(e) {
			o(e), F();
		},
		get type() {
			return s();
		},
		set type(e = "button") {
			s(e), F();
		}
	}, f = G();
	return Ji(z(f), () => mT, (e, t) => {
		t(e, {
			get id() {
				return r();
			},
			get ref() {
				return l.opts.ref;
			},
			children: (e, t) => {
				var n = G(), r = z(n), i = (e) => {
					var t = G();
					q(z(t), a, () => ({ props: H(u) })), K(e, t);
				}, s = (e) => {
					var t = VT();
					Oa(t, () => ({ ...H(u) })), q(R(t), () => o() ?? D), A(t), K(e, t);
				};
				J(r, (e) => {
					a() ? e(i) : e(s, -1);
				}), K(e, n);
			},
			$$slots: { default: !0 }
		});
	}), K(e, f), N(d);
}
Z(HT, {
	id: {},
	ref: {},
	child: {},
	children: {},
	type: {}
}, [], [], { mode: "open" });
var UT = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": 2,
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, WT = (e) => {
	for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
	return !1;
}, GT = Symbol("lucide-context"), KT = () => dt(GT), qT = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"name",
	"color",
	"size",
	"strokeWidth",
	"absoluteStrokeWidth",
	"iconNode",
	"children"
]), JT = /* @__PURE__ */ W("<svg><!><!></svg>");
function YT(e, t) {
	M(t, !0);
	let n = KT() ?? {}, r = X(t, "name", 7), i = X(t, "color", 23, () => n.color ?? "currentColor"), a = X(t, "size", 23, () => n.size ?? 24), o = X(t, "strokeWidth", 23, () => n.strokeWidth ?? 2), s = X(t, "absoluteStrokeWidth", 23, () => n.absoluteStrokeWidth ?? !1), c = X(t, "iconNode", 23, () => []), l = X(t, "children", 7), u = /* @__PURE__ */ Ua(t, qT), d = /* @__PURE__ */ P(() => s() ? Number(o()) * 24 / Number(a()) : o());
	var f = {
		get name() {
			return r();
		},
		set name(e) {
			r(e), F();
		},
		get color() {
			return i();
		},
		set color(e = n.color ?? "currentColor") {
			i(e), F();
		},
		get size() {
			return a();
		},
		set size(e = n.size ?? 24) {
			a(e), F();
		},
		get strokeWidth() {
			return o();
		},
		set strokeWidth(e = n.strokeWidth ?? 2) {
			o(e), F();
		},
		get absoluteStrokeWidth() {
			return s();
		},
		set absoluteStrokeWidth(e = n.absoluteStrokeWidth ?? !1) {
			s(e), F();
		},
		get iconNode() {
			return c();
		},
		set iconNode(e = []) {
			c(e), F();
		},
		get children() {
			return l();
		},
		set children(e) {
			l(e), F();
		}
	}, p = JT();
	Oa(p, (e) => ({
		...UT,
		...e,
		...u,
		width: a(),
		height: a(),
		stroke: i(),
		"stroke-width": H(d),
		class: [
			"lucide-icon lucide",
			n.class,
			r() && `lucide-${r()}`,
			t.class
		]
	}), [() => !l() && !WT(u) && { "aria-hidden": "true" }]);
	var m = R(p);
	return Vi(m, 17, c, Li, (e, t) => {
		var n = /* @__PURE__ */ P(() => ie(H(t), 2));
		let r = () => H(n)[0], i = () => H(n)[1];
		var a = G();
		Yi(z(a), r, !0, (e, t) => {
			Oa(e, () => ({ ...i() }));
		}), K(e, a);
	}), q(B(m), () => l() ?? D), A(p), K(e, p), N(f);
}
Z(YT, {
	name: {},
	color: {},
	size: {},
	strokeWidth: {},
	absoluteStrokeWidth: {},
	iconNode: {},
	children: {}
}, [], [], { mode: "open" });
var XT = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host"
]);
function ZT(e, t) {
	let n = /* @__PURE__ */ Ua(t, XT), r = [["path", { d: "M20 6 9 17l-5-5" }]];
	YT(e, qa({ name: "check" }, () => n, { get iconNode() {
		return r;
	} }));
}
Z(ZT, {}, [], [], { mode: "open" });
var QT = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host"
]);
function $T(e, t) {
	let n = /* @__PURE__ */ Ua(t, QT), r = [["path", { d: "M5 12h14" }]];
	YT(e, qa({ name: "minus" }, () => n, { get iconNode() {
		return r;
	} }));
}
Z($T, {}, [], [], { mode: "open" });
var eE = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"ref",
	"checked",
	"indeterminate",
	"class"
]), tE = /* @__PURE__ */ U("<div data-slot=\"checkbox-indicator\" class=\"tf-checkbox-indicator\"><!></div>");
function nE(e, t) {
	M(t, !0);
	let n = X(t, "ref", 15, null), r = X(t, "checked", 15, !1), i = X(t, "indeterminate", 15, !1), a = X(t, "class", 7), o = /* @__PURE__ */ Ua(t, eE);
	var s = {
		get ref() {
			return n();
		},
		set ref(e = null) {
			n(e), F();
		},
		get checked() {
			return r();
		},
		set checked(e = !1) {
			r(e), F();
		},
		get indeterminate() {
			return i();
		},
		set indeterminate(e = !1) {
			i(e), F();
		},
		get class() {
			return a();
		},
		set class(e) {
			a(e), F();
		}
	}, c = G(), l = z(c);
	{
		let e = (e, t) => {
			let n = () => (t?.()).checked, r = () => (t?.()).indeterminate;
			var i = tE(), a = R(i), o = (e) => {
				ZT(e, {});
			}, s = (e) => {
				$T(e, {});
			};
			J(a, (e) => {
				n() ? e(o) : r() && e(s, 1);
			}), A(i), K(e, i);
		}, t = /* @__PURE__ */ P(() => ty("nopan nodrag tf-checkbox peer", a()));
		Ji(l, () => FS, (a, s) => {
			s(a, qa({
				"data-slot": "checkbox",
				get class() {
					return H(t);
				}
			}, () => o, {
				get ref() {
					return n();
				},
				set ref(e) {
					n(e);
				},
				get checked() {
					return r();
				},
				set checked(e) {
					r(e);
				},
				get indeterminate() {
					return i();
				},
				set indeterminate(e) {
					i(e);
				},
				children: e,
				$$slots: { default: !0 }
			}));
		});
	}
	return K(e, c), N(s);
}
Z(nE, {
	ref: {},
	checked: {},
	indeterminate: {},
	class: {}
}, [], [], { mode: "open" });
var rE = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"placeholder",
	"label",
	"value",
	"buttonText",
	"onChosen",
	"class",
	"style"
]), iE = /* @__PURE__ */ U("<div><input type=\"hidden\"/> <!> <!></div>"), aE = {
	hash: "svelte-1o3a23c",
	code: ".tf-chosen.svelte-1o3a23c {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function oE(e, t) {
	M(t, !0), Zi(e, aE);
	let n = X(t, "placeholder", 7), r = X(t, "label", 7), i = X(t, "value", 7), a = X(t, "buttonText", 7, "选择..."), o = X(t, "onChosen", 7), s = X(t, "class", 7), c = X(t, "style", 7), l = /* @__PURE__ */ Ua(t, rE);
	var u = {
		get placeholder() {
			return n();
		},
		set placeholder(e) {
			n(e), F();
		},
		get label() {
			return r();
		},
		set label(e) {
			r(e), F();
		},
		get value() {
			return i();
		},
		set value(e) {
			i(e), F();
		},
		get buttonText() {
			return a();
		},
		set buttonText(e = "选择...") {
			a(e), F();
		},
		get onChosen() {
			return o();
		},
		set onChosen(e) {
			o(e), F();
		},
		get class() {
			return s();
		},
		set class(e) {
			s(e), F();
		},
		get style() {
			return c();
		},
		set style(e) {
			c(e), F();
		}
	}, d = iE();
	Oa(d, () => ({
		...l,
		style: c(),
		class: `tf-chosen nopan nodrag ${(s() || "") ?? ""}`
	}), void 0, void 0, void 0, "svelte-1o3a23c");
	var f = R(d);
	Ca(f);
	var p = B(f, 2);
	return lE(p, {
		get value() {
			return r();
		},
		get placeholder() {
			return n();
		},
		style: "flex-grow: 1;",
		disabled: !0
	}), sy(B(p, 2), {
		variant: "outline",
		onclick: (e) => {
			o()?.(i(), r(), e);
		},
		style: "padding: 3px",
		children: (e, t) => {
			j();
			var n = ui();
			V(() => Si(n, a())), K(e, n);
		},
		$$slots: { default: !0 }
	}), A(d), V(() => wa(f, i())), K(e, d), N(u);
}
Z(oE, {
	placeholder: {},
	label: {},
	value: {},
	buttonText: {},
	onChosen: {},
	class: {},
	style: {}
}, [], [], { mode: "open" });
var sE = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"ref",
	"value",
	"type",
	"files",
	"class",
	"data-slot"
]), cE = /* @__PURE__ */ U("<input/>");
function lE(e, t) {
	M(t, !0);
	let n = X(t, "ref", 15, null), r = X(t, "value", 15), i = X(t, "type", 7), a = X(t, "files", 15), o = X(t, "class", 7), s = X(t, "data-slot", 7, "input"), c = /* @__PURE__ */ Ua(t, sE);
	var l = {
		get ref() {
			return n();
		},
		set ref(e = null) {
			n(e), F();
		},
		get value() {
			return r();
		},
		set value(e) {
			r(e), F();
		},
		get type() {
			return i();
		},
		set type(e) {
			i(e), F();
		},
		get files() {
			return a();
		},
		set files(e) {
			a(e), F();
		},
		get class() {
			return o();
		},
		set class(e) {
			o(e), F();
		},
		get "data-slot"() {
			return s();
		},
		set "data-slot"(e = "input") {
			s(e), F();
		}
	}, u = G(), d = z(u), f = (e) => {
		var t = cE();
		Oa(t, (e) => ({
			"data-slot": s(),
			class: e,
			type: "file",
			...c
		}), [() => ty("nopan nodrag tf-input", o())], void 0, void 0, void 0, !0), za(t, (e) => n(e), () => n()), Fa(t, a), Ma(t, r), K(e, t);
	}, p = (e) => {
		var t = cE();
		Oa(t, (e) => ({
			"data-slot": s(),
			spellcheck: "false",
			class: e,
			type: i(),
			...c
		}), [() => ty("nopan nodrag tf-input", o())], void 0, void 0, void 0, !0), za(t, (e) => n(e), () => n()), Ma(t, r), K(e, t);
	};
	return J(d, (e) => {
		i() === "file" ? e(f) : e(p, -1);
	}), K(e, u), N(l);
}
Z(lE, {
	ref: {},
	value: {},
	type: {},
	files: {},
	class: {},
	"data-slot": {}
}, [], [], { mode: "open" });
var uE = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"ref",
	"value",
	"class",
	"data-slot",
	"height",
	"autoHeight",
	"maxHeight",
	"onHeightChange"
]), dE = /* @__PURE__ */ U("<textarea></textarea>");
function fE(e, t) {
	M(t, !0);
	let n = X(t, "ref", 15, null), r = X(t, "value", 15), i = X(t, "class", 7), a = X(t, "data-slot", 7, "textarea"), o = X(t, "height", 7), s = X(t, "autoHeight", 7, !0), c = X(t, "maxHeight", 7), l = X(t, "onHeightChange", 7), u = /* @__PURE__ */ Ua(t, uE), d, f;
	function p() {
		if (d && s()) {
			if (o() !== void 0) {
				let e = typeof o() == "number" ? `${o()}px` : o();
				d.style.height = e, d.style.overflowY = "hidden", l()?.(e);
				return;
			}
			d.style.height = "auto", d.style.overflowY = "hidden";
			let e = d.scrollHeight;
			if (!f) {
				let e = t.rows || 1, n = getComputedStyle(d);
				f = parseFloat(n.fontSize) * 1.2 * e + parseFloat(n.paddingTop) + parseFloat(n.paddingBottom) + parseFloat(n.borderTopWidth);
			}
			if (e < f && (e = f), c()) {
				let t = typeof c() == "number" ? `${c()}px` : c();
				e > parseInt(t) ? (d.style.height = t, d.style.overflowY = "auto") : d.style.height = `${e}px`;
			} else d.style.height = `${e}px`;
			l()?.(d.style.height);
		}
	}
	Yn(() => {
		p();
	});
	var m = {
		get ref() {
			return n();
		},
		set ref(e = null) {
			n(e), F();
		},
		get value() {
			return r();
		},
		set value(e) {
			r(e), F();
		},
		get class() {
			return i();
		},
		set class(e) {
			i(e), F();
		},
		get "data-slot"() {
			return a();
		},
		set "data-slot"(e = "textarea") {
			a(e), F();
		},
		get height() {
			return o();
		},
		set height(e) {
			o(e), F();
		},
		get autoHeight() {
			return s();
		},
		set autoHeight(e = !0) {
			s(e), F();
		},
		get maxHeight() {
			return c();
		},
		set maxHeight(e) {
			c(e), F();
		},
		get onHeightChange() {
			return l();
		},
		set onHeightChange(e) {
			l(e), F();
		}
	}, h = dE();
	Mt(h);
	var g = (e) => {
		p(), t.oninput?.(e);
	}, _ = (e) => {
		p(), t.onchange?.(e);
	};
	return Oa(h, (e) => ({
		spellcheck: "false",
		...u,
		"data-slot": a(),
		oninput: g,
		onchange: _,
		class: e
	}), [() => ty("nodrag nowheel tf-textarea", i())]), za(h, (e) => d = e, () => d), Ma(h, r), K(e, h), N(m);
}
Z(fE, {
	ref: {},
	value: {},
	class: {},
	"data-slot": {},
	height: {},
	autoHeight: {},
	maxHeight: {},
	onHeightChange: {}
}, [], [], { mode: "open" });
var pE = /* @__PURE__ */ U("<div role=\"button\"><!></div>"), mE = /* @__PURE__ */ U("<div></div>");
function hE(e, t) {
	let n = Ga(Ga(t, [
		"children",
		"$$slots",
		"$$events",
		"$$legacy",
		"$$host"
	]), [
		"items",
		"onChange",
		"activeIndex"
	]);
	M(t, !1);
	let r = X(t, "items", 28, () => []), i = X(t, "onChange", 12, () => {}), a = X(t, "activeIndex", 12, 0);
	function o(e, t) {
		a(t), i()?.(e, t);
	}
	var s = {
		get items() {
			return r();
		},
		set items(e) {
			r(e), F();
		},
		get onChange() {
			return i();
		},
		set onChange(e) {
			i(e), F();
		},
		get activeIndex() {
			return a();
		},
		set activeIndex(e) {
			a(e), F();
		}
	};
	Ba();
	var c = mE();
	return Oa(c, () => ({
		...n,
		class: `tf-tabs ${(qr(n), Kr(() => n.class)) ?? ""}`
	})), Vi(c, 5, r, Li, (e, t, n) => {
		var r = pE();
		Y(r, "tabindex", n);
		var i = R(r), s = (e) => {
			var n = ui();
			V(() => Si(n, (H(t), Kr(() => H(t).label)))), K(e, n);
		}, c = (e) => {
			var n = G();
			q(z(n), () => (H(t), Kr(() => H(t).label)) ?? D), K(e, n);
		};
		J(i, (e) => {
			H(t), Kr(() => typeof H(t).label == "string") ? e(s) : e(c, -1);
		}), A(r), V(() => ca(r, 1, `tf-tabs-item ${n === a() ? "active" : ""}`)), ti("click", r, () => o(H(t), n)), ti("keydown", r, (e) => {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), o(H(t), n));
		}), K(e, r);
	}), A(c), K(e, c), N(s);
}
ni(["click", "keydown"]), Z(hE, {
	items: {},
	onChange: {},
	activeIndex: {}
}, [], [], { mode: "open" });
var gE = /* @__PURE__ */ U("<span class=\"tf-collapse-item-title-icon\"><!></span>"), _E = /* @__PURE__ */ U("<div class=\"tf-collapse-item-description\"><!></div>"), vE = /* @__PURE__ */ U("<div class=\"tf-collapse-item-content\"><!></div>"), yE = /* @__PURE__ */ U("<div class=\"tf-collapse-item\"><div class=\"tf-collapse-item-title\" role=\"button\"><!> <!> <span><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z\"></path></svg></span></div> <!> <!></div>"), bE = /* @__PURE__ */ U("<div></div>"), xE = {
	hash: "svelte-ynwjxt",
	code: "\n    /* 定义旋转的 CSS 类 */.rotate-90.svelte-ynwjxt {transform:rotate(90deg);transition:transform 0.3s ease;}"
};
function SE(e, t) {
	M(t, !0), Zi(e, xE);
	let n = X(t, "items", 7), r = X(t, "onChange", 7), i = X(t, "activeKeys", 31, () => kn([]));
	function a(e) {
		i().includes(e.key) ? i(i().filter((t) => t !== e.key)) : (i().push(e.key), i(i())), r()?.(e, i());
	}
	var o = {
		get items() {
			return n();
		},
		set items(e) {
			n(e), F();
		},
		get onChange() {
			return r();
		},
		set onChange(e) {
			r(e), F();
		},
		get activeKeys() {
			return i();
		},
		set activeKeys(e = []) {
			i(e), F();
		}
	}, s = bE();
	return Vi(s, 21, n, Li, (e, t, n) => {
		var r = yE(), o = R(r);
		Y(o, "tabindex", n);
		var s = R(o), c = (e) => {
			var n = gE();
			CE(R(n), { get target() {
				return H(t).icon;
			} }), A(n), K(e, n);
		};
		J(s, (e) => {
			H(t).icon && e(c);
		});
		var l = B(s, 2);
		CE(l, { get target() {
			return H(t).title;
		} });
		var u = B(l, 2);
		A(o);
		var d = B(o, 2), f = (e) => {
			var n = _E();
			CE(R(n), { get target() {
				return H(t).description;
			} }), A(n), K(e, n);
		};
		J(d, (e) => {
			H(t).description && e(f);
		});
		var p = B(d, 2), m = (e) => {
			var n = vE();
			CE(R(n), { get target() {
				return H(t).content;
			} }), A(n), K(e, n);
		}, h = /* @__PURE__ */ P(() => i().includes(H(t).key));
		J(p, (e) => {
			H(h) && e(m);
		}), A(r), V((e) => ca(u, 1, `tf-collapse-item-title-arrow ${e ?? ""}`, "svelte-ynwjxt"), [() => i().includes(H(t).key) ? "rotate-90" : ""]), ti("click", o, () => a(H(t))), ti("keydown", o, (e) => {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), a(H(t)));
		}), K(e, r);
	}), A(s), V(() => {
		ua(s, t.style), ca(s, 1, `tf-collapse ${t.class ?? ""}`, "svelte-ynwjxt");
	}), K(e, s), N(o);
}
ni(["click", "keydown"]), Z(SE, {
	items: {},
	onChange: {},
	activeKeys: {}
}, [], [], { mode: "open" });
function CE(e, t) {
	M(t, !0);
	let n = X(t, "target", 7);
	n() === void 0 && n("undefined");
	var r = {
		get target() {
			return n();
		},
		set target(e) {
			n(e), F();
		}
	}, i = G(), a = z(i), o = (e) => {
		var t = G();
		q(z(t), () => n() ?? D), K(e, t);
	}, s = (e) => {
		var t = G();
		qi(z(t), n), K(e, t);
	};
	return J(a, (e) => {
		typeof n() == "function" ? e(o) : e(s, -1);
	}), K(e, i), N(r);
}
Z(CE, { target: {} }, [], [], { mode: "open" });
var wE = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host"
]);
function TE(e, t) {
	let n = /* @__PURE__ */ Ua(t, wE), r = [["path", { d: "m6 9 6 6 6-6" }]];
	YT(e, qa({ name: "chevron-down" }, () => n, { get iconNode() {
		return r;
	} }));
}
Z(TE, {}, [], [], { mode: "open" });
var EE = () => dt("svelteflow__node_id"), DE = () => dt("tinyflow_options"), OE = /* @__PURE__ */ new Set([
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
	"placeholder",
	"disabled",
	"class"
]), kE = /* @__PURE__ */ U("<span class=\"tf-select-heading-item\">,</span>"), AE = /* @__PURE__ */ U("<!> <!>", 1), jE = /* @__PURE__ */ U("<span class=\"tf-select-heading-span\"> </span>"), ME = /* @__PURE__ */ U("<span class=\"tf-select-heading\"><!></span> <!>", 1), NE = /* @__PURE__ */ U("<div class=\"tf-select-empty\">暂无数据</div>"), PE = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" style=\"width: 16px;height: 16px;\"><path d=\"M12 14L8 10H16L12 14Z\"></path></svg>"), FE = /* @__PURE__ */ U("<span style=\"width: 16px;height: 16px;\"></span>"), IE = /* @__PURE__ */ U("<span class=\"tf-select-option-selected\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" style=\"width: 16px;height: 16px;\"><path d=\"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z\"></path></svg></span>"), LE = /* @__PURE__ */ U("<span class=\"tf-select-option-content\"><!> <!></span> <!>", 1);
function RE(e, t) {
	M(t, !0);
	let n = X(t, "items", 7), r = X(t, "onSelect", 7), i = X(t, "value", 23, () => []), a = X(t, "defaultValue", 23, () => []), o = X(t, "expandAll", 7, !0), s = X(t, "multiple", 7, !1), c = X(t, "expandValue", 23, () => []), l = X(t, "placeholder", 7), u = X(t, "disabled", 7, !1), d = X(t, "class", 7), f = /* @__PURE__ */ Ua(t, OE), p = DE().defaultTheme, m = /* @__PURE__ */ P(() => {
		let e = [], t = (n) => {
			for (let r of n) e.push(r), r.children?.length && t(r.children);
		};
		return t(n()), e;
	}), h = /* @__PURE__ */ P(() => {
		let e = [], t = i().length > 0 ? i() : a();
		for (let n of t) {
			if (n == null) continue;
			let t = H(m).find((e) => e.value === n);
			t && e.push(t);
		}
		return e;
	}), g = /* @__PURE__ */ P(() => !s() && H(h).length > 0 ? String(H(h)[0].value) : ""), _ = /* @__PURE__ */ P(() => s() ? H(h).map((e) => String(e.value)) : []);
	function v(e, t) {
		e.stopPropagation(), r()?.(t);
	}
	function y(e, t = 0) {
		let n = [];
		if (e) for (let r of e) {
			n.push({
				item: r,
				level: t
			});
			let e = o() || c().includes(r.value);
			r.children?.length && e && n.push(...y(r.children, t + 1));
		}
		return n;
	}
	let b = /* @__PURE__ */ P(() => y(n()));
	function x(e) {
		return {
			value: String(e.value),
			label: typeof e.label == "string" ? e.label : String(e.value),
			disabled: !1
		};
	}
	var S = {
		get items() {
			return n();
		},
		set items(e) {
			n(e), F();
		},
		get onSelect() {
			return r();
		},
		set onSelect(e) {
			r(e), F();
		},
		get value() {
			return i();
		},
		set value(e = []) {
			i(e), F();
		},
		get defaultValue() {
			return a();
		},
		set defaultValue(e = []) {
			a(e), F();
		},
		get expandAll() {
			return o();
		},
		set expandAll(e = !0) {
			o(e), F();
		},
		get multiple() {
			return s();
		},
		set multiple(e = !1) {
			s(e), F();
		},
		get expandValue() {
			return c();
		},
		set expandValue(e = []) {
			c(e), F();
		},
		get placeholder() {
			return l();
		},
		set placeholder(e) {
			l(e), F();
		},
		get disabled() {
			return u();
		},
		set disabled(e = !1) {
			u(e), F();
		},
		get class() {
			return d();
		},
		set class(e) {
			d(e), F();
		}
	}, C = G(), w = z(C), T = (e) => {
		var t = G();
		Ji(z(t), () => zT, (e, t) => {
			t(e, qa({
				type: "multiple",
				get value() {
					return H(_);
				},
				get disabled() {
					return u();
				}
			}, () => f, {
				children: (e, t) => {
					var n = AE(), r = z(n);
					{
						let e = /* @__PURE__ */ P(() => ty("nopan nodrag tf-select", u() && "tf-select-disabled", d()));
						Ji(r, () => HT, (t, n) => {
							n(t, {
								get class() {
									return H(e);
								},
								get disabled() {
									return u();
								},
								children: (e, t) => {
									var n = ME(), r = z(n), i = R(r), a = (e) => {
										var t = G();
										Vi(z(t), 19, () => H(h), (e) => e.value, (e, t, n) => {
											var r = AE(), i = z(r);
											CE(i, { get target() {
												return H(t).label;
											} });
											var a = B(i, 2), o = (e) => {
												K(e, kE());
											};
											J(a, (e) => {
												H(n) < H(h).length - 1 && e(o);
											}), K(e, r);
										}), K(e, t);
									}, o = (e) => {
										var t = jE(), n = R(t, !0);
										A(t), V(() => Si(n, l() ?? "")), K(e, t);
									};
									J(i, (e) => {
										H(h).length > 0 ? e(a) : e(o, -1);
									}), A(r), TE(B(r, 2), { class: "tf-select-heading-icon" }), K(e, n);
								},
								$$slots: { default: !0 }
							});
						});
					}
					Ji(B(r, 2), () => Yb, (e, t) => {
						t(e, {
							children: (e, t) => {
								var n = G(), r = z(n);
								{
									let e = /* @__PURE__ */ P(() => ty("nopan nodrag nowheel tf-root tf-select-content", p === "dark" && "dark"));
									Ji(r, () => OT, (t, n) => {
										n(t, {
											get class() {
												return H(e);
											},
											children: (e, t) => {
												var n = G();
												Ji(z(n), () => LT, (e, t) => {
													t(e, {
														style: "padding: 4px;",
														children: (e, t) => {
															var n = G(), r = z(n), i = (e) => {
																K(e, NE());
															}, a = (e) => {
																var t = G();
																Vi(z(t), 19, () => H(b), ({ item: e, level: t }, n) => `${n}_${e.value}`, (e, t) => {
																	let n = () => H(t).item, r = () => H(t).level, i = /* @__PURE__ */ P(() => n().children && n().children.length > 0), a = /* @__PURE__ */ P(() => x(n()));
																	var o = G(), s = z(o);
																	{
																		let e = (e, t) => {
																			let r = () => (t?.()).selected;
																			var a = LE(), o = z(a), s = R(o), c = (e) => {
																				K(e, PE());
																			}, l = (e) => {
																				K(e, FE());
																			};
																			J(s, (e) => {
																				H(i) ? e(c) : e(l, -1);
																			}), CE(B(s, 2), { get target() {
																				return n().label;
																			} }), A(o);
																			var u = B(o, 2), d = (e) => {
																				K(e, IE());
																			};
																			J(u, (e) => {
																				r() && e(d);
																			}), K(e, a);
																		}, t = /* @__PURE__ */ P(() => r() * 12);
																		Ji(s, () => NT, (r, i) => {
																			i(r, {
																				get value() {
																					return H(a).value;
																				},
																				get label() {
																					return H(a).label;
																				},
																				class: "tf-select-option",
																				get style() {
																					return `padding-left: ${H(t) ?? ""}px`;
																				},
																				onclick: (e) => v(e, n()),
																				children: e,
																				$$slots: { default: !0 }
																			});
																		});
																	}
																	K(e, o);
																}), K(e, t);
															};
															J(r, (e) => {
																H(b).length === 0 ? e(i) : e(a, -1);
															}), K(e, n);
														},
														$$slots: { default: !0 }
													});
												}), K(e, n);
											},
											$$slots: { default: !0 }
										});
									});
								}
								K(e, n);
							},
							$$slots: { default: !0 }
						});
					}), K(e, n);
				},
				$$slots: { default: !0 }
			}));
		}), K(e, t);
	}, E = (e) => {
		var t = G();
		Ji(z(t), () => zT, (e, t) => {
			t(e, qa({
				type: "single",
				get value() {
					return H(g);
				},
				get disabled() {
					return u();
				}
			}, () => f, {
				children: (e, t) => {
					var n = AE(), r = z(n);
					{
						let e = /* @__PURE__ */ P(() => ty("nopan nodrag tf-select", u() && " tf-select-disabled", d()));
						Ji(r, () => HT, (t, n) => {
							n(t, {
								get class() {
									return H(e);
								},
								get disabled() {
									return u();
								},
								children: (e, t) => {
									var n = ME(), r = z(n), i = R(r), a = (e) => {
										CE(e, { get target() {
											return H(h)[0].label;
										} });
									}, o = (e) => {
										var t = jE(), n = R(t, !0);
										A(t), V(() => Si(n, l() ?? "")), K(e, t);
									};
									J(i, (e) => {
										H(h).length > 0 ? e(a) : e(o, -1);
									}), A(r), TE(B(r, 2), { class: "tf-select-icon" }), K(e, n);
								},
								$$slots: { default: !0 }
							});
						});
					}
					Ji(B(r, 2), () => Yb, (e, t) => {
						t(e, {
							children: (e, t) => {
								var n = G(), r = z(n);
								{
									let e = /* @__PURE__ */ P(() => ty("nopan nodrag nowheel tf-root tf-select-content", p === "dark" && "dark"));
									Ji(r, () => OT, (t, n) => {
										n(t, {
											get class() {
												return H(e);
											},
											children: (e, t) => {
												var n = G();
												Ji(z(n), () => LT, (e, t) => {
													t(e, {
														style: "padding: 4px;",
														children: (e, t) => {
															var n = G(), r = z(n), i = (e) => {
																K(e, NE());
															}, a = (e) => {
																var t = G();
																Vi(z(t), 19, () => H(b), ({ item: e, level: t }, n) => `${n}_${e.value}`, (e, t) => {
																	let n = () => H(t).item, r = () => H(t).level, i = /* @__PURE__ */ P(() => n().children && n().children.length > 0), a = /* @__PURE__ */ P(() => x(n()));
																	var o = G(), s = z(o);
																	{
																		let e = (e, t) => {
																			let r = () => (t?.()).selected;
																			var a = LE(), o = z(a), s = R(o), c = (e) => {
																				K(e, PE());
																			}, l = (e) => {
																				K(e, FE());
																			};
																			J(s, (e) => {
																				H(i) ? e(c) : e(l, -1);
																			}), CE(B(s, 2), { get target() {
																				return n().label;
																			} }), A(o);
																			var u = B(o, 2), d = (e) => {
																				K(e, IE());
																			};
																			J(u, (e) => {
																				r() && e(d);
																			}), K(e, a);
																		}, t = /* @__PURE__ */ P(() => r() * 12);
																		Ji(s, () => NT, (r, i) => {
																			i(r, {
																				get value() {
																					return H(a).value;
																				},
																				get label() {
																					return H(a).label;
																				},
																				class: "tf-select-option",
																				get style() {
																					return `padding-left: ${H(t) ?? ""}px`;
																				},
																				onclick: (e) => v(e, n()),
																				children: e,
																				$$slots: { default: !0 }
																			});
																		});
																	}
																	K(e, o);
																}), K(e, t);
															};
															J(r, (e) => {
																H(b).length === 0 ? e(i) : e(a, -1);
															}), K(e, n);
														},
														$$slots: { default: !0 }
													});
												}), K(e, n);
											},
											$$slots: { default: !0 }
										});
									});
								}
								K(e, n);
							},
							$$slots: { default: !0 }
						});
					}), K(e, n);
				},
				$$slots: { default: !0 }
			}));
		}), K(e, t);
	};
	return J(w, (e) => {
		s() ? e(T) : e(E, -1);
	}), K(e, C), N(S);
}
Z(RE, {
	items: {},
	onSelect: {},
	value: {},
	defaultValue: {},
	expandAll: {},
	multiple: {},
	expandValue: {},
	placeholder: {},
	disabled: {},
	class: {}
}, [], [], { mode: "open" });
var zE = ({ trigger: e, triggerEvent: t, floatContent: n, placement: r = "bottom", offsetOptions: i, flipOptions: a, shiftOptions: o, interactive: s, showArrow: c }) => {
	if (typeof e == "string") {
		let t = document.querySelector(e);
		if (t) e = t;
		else throw Error("element not found by document.querySelector('" + e + "')");
	}
	let l;
	if (typeof n == "string") {
		let e = document.querySelector(n);
		if (e) l = e;
		else throw Error("element not found by document.querySelector('" + n + "')");
	} else l = n;
	let u;
	c && (u = document.createElement("div"), u.style.position = "absolute", u.style.backgroundColor = "#222", u.style.width = "8px", u.style.height = "8px", u.style.transform = "rotate(45deg)", u.style.display = "none", l.firstElementChild.before(u));
	function d() {
		Mw(e, l, {
			placement: r,
			middleware: [
				Tw(i),
				Dw(a),
				Ew(o),
				...c ? [Aw({ element: u })] : []
			]
		}).then(({ x: e, y: t, placement: n, middlewareData: r }) => {
			if (Object.assign(l.style, {
				left: `${e}px`,
				top: `${t}px`
			}), c) {
				let { x: e, y: t } = r.arrow, i = {
					top: "bottom",
					right: "left",
					bottom: "top",
					left: "right"
				}[n.split("-")[0]];
				Object.assign(u.style, {
					zIndex: -1,
					left: e == null ? "" : `${e}px`,
					top: t == null ? "" : `${t}px`,
					right: "",
					bottom: "",
					[i]: "2px"
				});
			}
		});
	}
	let f = !1;
	function p() {
		l.style.display = "block", l.style.visibility = "block", l.style.position = "absolute", c && (u.style.display = "block"), f = !0, d();
	}
	function m() {
		l.style.display = "none", c && (u.style.display = "none"), f = !1;
	}
	function h(e) {
		e.stopPropagation(), f ? m() : p();
	}
	function g(e) {
		l.contains(e.target) || m();
	}
	return (!t || t.length == 0) && (t = s ? ["click"] : ["mouseenter", "focus"]), t.forEach((t) => {
		e.addEventListener(t, h);
	}), s ? document.addEventListener("click", g) : ["mouseleave", "blur"].forEach((t) => {
		e.addEventListener(t, m);
	}), {
		destroy() {
			t.forEach((t) => {
				e.removeEventListener(t, h);
			}), s ? document.removeEventListener("click", g) : ["mouseleave", "blur"].forEach((t) => {
				e.removeEventListener(t, m);
			});
		},
		hide() {
			m();
		},
		isVisible() {
			return f;
		}
	};
}, BE = /* @__PURE__ */ U("<div style=\"position: relative\"><div><!></div> <div style=\"display: none; width: 100%;z-index: 9999\"><!></div></div>");
function VE(e, t) {
	M(t, !0);
	let n = X(t, "children", 7), r = X(t, "floating", 7), i = X(t, "placement", 7, "bottom"), a, o, s;
	Ai(() => (s = zE({
		trigger: a,
		floatContent: o,
		interactive: !0,
		placement: i()
	}), () => {
		s.destroy();
	}));
	function c() {
		s.hide();
	}
	var l = {
		hide: c,
		get children() {
			return n();
		},
		set children(e) {
			n(e), F();
		},
		get floating() {
			return r();
		},
		set floating(e) {
			r(e), F();
		},
		get placement() {
			return i();
		},
		set placement(e = "bottom") {
			i(e), F();
		}
	}, u = BE(), d = R(u);
	q(R(d), n), A(d), za(d, (e) => a = e, () => a);
	var f = B(d, 2);
	return q(R(f), r), A(f), za(f, (e) => o = e, () => o), A(u), K(e, u), N(l);
}
Z(VE, {
	children: {},
	floating: {},
	placement: {}
}, [], ["hide"], { mode: "open" });
function HE(e, t) {
	M(t, !0);
	let n = X(t, "children", 7), r = X(t, "level", 7, 1), i = X(t, "mt", 7), a = X(t, "mb", 7);
	var o = {
		get children() {
			return n();
		},
		set children(e) {
			n(e), F();
		},
		get level() {
			return r();
		},
		set level(e = 1) {
			r(e), F();
		},
		get mt() {
			return i();
		},
		set mt(e) {
			i(e), F();
		},
		get mb() {
			return a();
		},
		set mb(e) {
			a(e), F();
		}
	}, s = G();
	return Yi(z(s), () => `h${r()}`, !1, (e, t) => {
		Oa(e, () => ({
			class: "tf-heading",
			style: `margin-top:${(i() || "0") ?? ""};margin-bottom:${(a() || "0") ?? ""}`
		}));
		var r = G();
		q(z(r), () => n() ?? D), K(t, r);
	}), K(e, s), N(o);
}
Z(HE, {
	children: {},
	level: {},
	mt: {},
	mb: {}
}, [], [], { mode: "open" });
var UE = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host"
]), WE = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"svelte-1q3h954\"><path d=\"M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z\" class=\"svelte-1q3h954\"></path></svg>"), GE = {
	hash: "svelte-1q3h954",
	code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:var(--tf-input);border:1px solid transparent;}}"
};
function KE(e, t) {
	M(t, !0), Zi(e, GE);
	let n = /* @__PURE__ */ Ua(t, UE);
	{
		let r = /* @__PURE__ */ P(() => ty("input-btn-more", t.class));
		sy(e, qa({
			size: "icon-xs",
			get class() {
				return H(r);
			}
		}, () => n, {
			children: (e, t) => {
				K(e, WE());
			},
			$$slots: { default: !0 }
		}));
	}
	N();
}
Z(KE, {}, [], [], { mode: "open" });
var qE = () => ({ deleteNode: (e) => {
	ey.removeNode(e), ey.updateEdges((t) => t.filter((t) => t.source !== e && t.target !== e));
} }), JE = (e = 16) => {
	let t = new Uint8Array(e);
	return crypto.getRandomValues(t), Array.from(t, (e) => "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"[e % 62]).join("");
}, YE = (e) => JSON.parse(JSON.stringify(e)), XE = () => ({ copyNode: (e) => {
	let t = ey.getNode(e);
	if (t) {
		let e = {
			...YE(t),
			id: JE(),
			position: {
				x: t.position.x + 50,
				y: t.position.y + 50
			}
		};
		if (e.data?.parameters) for (let t of e.data.parameters) t.id = JE(), t.ref = void 0;
		ey.updateNodes((t) => [...t.map((e) => ({
			...e,
			selected: !1
		})), e]);
	}
} }), ZE = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z\"></path></svg>"), QE = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z\"></path></svg>"), $E = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z\"></path></svg>"), eD = /* @__PURE__ */ U("<div class=\"input-item svelte-ana6zl\">执行条件： <!></div>"), tD = /* @__PURE__ */ U("<div class=\"input-item svelte-ana6zl\">循环间隔时间（单位：毫秒）： <!></div> <div class=\"input-item svelte-ana6zl\">最大循环次数（0 表示不限制）： <!></div> <div class=\"input-item svelte-ana6zl\">退出条件： <!></div>", 1), nD = /* @__PURE__ */ U("<div class=\"input-item svelte-ana6zl\">错误重试间隔时间（单位：毫秒）： <!></div> <div class=\"input-item svelte-ana6zl\">最大重试次数： <!></div> <label class=\"input-item-inline svelte-ana6zl\"><span>正常后重置重试次数记录：</span> <input type=\"checkbox\"/></label>", 1), rD = /* @__PURE__ */ U("<div class=\"settings svelte-ana6zl\"><div class=\"input-item svelte-ana6zl\">节点名称： <!></div> <div class=\"input-item svelte-ana6zl\">参数描述： <!></div> <!> <label class=\"input-item-inline svelte-ana6zl\"><span>循环执行：</span> <input type=\"checkbox\"/></label> <!> <label class=\"input-item-inline svelte-ana6zl\"><span>错误重试：</span> <input type=\"checkbox\"/></label> <!></div>"), iD = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z\"></path></svg>"), aD = /* @__PURE__ */ U("<div class=\"tf-node-toolbar svelte-ana6zl\"><!> <!> <!> <!></div>"), oD = /* @__PURE__ */ U("<!> <div class=\"tf-node-wrapper\"><div class=\"tf-node-wrapper-title\">TinyFlow.ai</div> <div class=\"tf-node-wrapper-body\"><!></div></div> <!> <!> <!>", 1), sD = {
	hash: "svelte-ana6zl",
	code: ".tf-node-toolbar.svelte-ana6zl {display:flex;gap:5px;padding:5px;border-radius:5px;background:var(--tf-background);border:1px solid var(--tf-border);box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-ana6zl {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--tf-background);border:1px solid var(--tf-border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-ana6zl .input-item:where(.svelte-ana6zl) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--tf-muted-foreground);}.settings.svelte-ana6zl .input-item-inline:where(.svelte-ana6zl) {display:flex;align-items:center;font-size:12px;color:var(--tf-muted-foreground);}"
};
function cD(e, t) {
	M(t, !0), Zi(e, sD);
	let n = X(t, "data", 7), r = X(t, "id", 7, ""), i = X(t, "icon", 7), a = X(t, "handle", 7), o = X(t, "children", 7), s = X(t, "allowExecute", 7, !0), c = X(t, "allowCopy", 7, !0), l = X(t, "allowDelete", 7, !0), u = X(t, "allowSetting", 7, !0), d = X(t, "allowSettingOfCondition", 7, !0), f = X(t, "showSourceHandle", 7, !0), p = X(t, "showTargetHandle", 7, !0), m = X(t, "onCollapse", 7), h = n().expand ? ["key"] : [], { updateNodeData: g, getNode: _ } = tg(), v = /* @__PURE__ */ P(() => [{
		key: "key",
		icon: i(),
		title: n().title,
		description: n().description,
		content: o()
	}]), { deleteNode: y } = qE(), { copyNode: b } = XE(), x = DE(), S = () => {
		x.onNodeExecute?.(_(r()));
	}, C = EE();
	var w = {
		get data() {
			return n();
		},
		set data(e) {
			n(e), F();
		},
		get id() {
			return r();
		},
		set id(e = "") {
			r(e), F();
		},
		get icon() {
			return i();
		},
		set icon(e) {
			i(e), F();
		},
		get handle() {
			return a();
		},
		set handle(e) {
			a(e), F();
		},
		get children() {
			return o();
		},
		set children(e) {
			o(e), F();
		},
		get allowExecute() {
			return s();
		},
		set allowExecute(e = !0) {
			s(e), F();
		},
		get allowCopy() {
			return c();
		},
		set allowCopy(e = !0) {
			c(e), F();
		},
		get allowDelete() {
			return l();
		},
		set allowDelete(e = !0) {
			l(e), F();
		},
		get allowSetting() {
			return u();
		},
		set allowSetting(e = !0) {
			u(e), F();
		},
		get allowSettingOfCondition() {
			return d();
		},
		set allowSettingOfCondition(e = !0) {
			d(e), F();
		},
		get showSourceHandle() {
			return f();
		},
		set showSourceHandle(e = !0) {
			f(e), F();
		},
		get showTargetHandle() {
			return p();
		},
		set showTargetHandle(e = !0) {
			p(e), F();
		},
		get onCollapse() {
			return m();
		},
		set onCollapse(e) {
			m(e), F();
		}
	}, T = oD(), E = z(T), ee = (e) => {
		i_(e, {
			get position() {
				return Q.Top;
			},
			align: "start",
			children: (e, t) => {
				var i = aD(), a = R(i), o = (e) => {
					sy(e, {
						size: "icon",
						class: "tf-node-toolbar-item",
						onclick: () => {
							y(r());
						},
						children: (e, t) => {
							K(e, ZE());
						},
						$$slots: { default: !0 }
					});
				};
				J(a, (e) => {
					l() && e(o);
				});
				var f = B(a, 2), p = (e) => {
					sy(e, {
						size: "icon",
						class: "tf-node-toolbar-item",
						onclick: () => {
							b(r());
						},
						children: (e, t) => {
							K(e, QE());
						},
						$$slots: { default: !0 }
					});
				};
				J(f, (e) => {
					c() && e(p);
				});
				var m = B(f, 2), h = (e) => {
					sy(e, {
						size: "icon",
						class: "tf-node-toolbar-item",
						onclick: S,
						children: (e, t) => {
							K(e, $E());
						},
						$$slots: { default: !0 }
					});
				};
				J(m, (e) => {
					s() && e(h);
				});
				var _ = B(m, 2), v = (e) => {
					VE(e, {
						placement: "bottom",
						floating: (e) => {
							var t = rD(), r = R(t);
							lE(B(R(r)), {
								style: "width: 100%;",
								onchange: (e) => {
									let t = e.target.value;
									g(C, { title: t });
								},
								get value() {
									return n().title;
								}
							}), A(r);
							var i = B(r, 2);
							fE(B(R(i)), {
								rows: 3,
								style: "width: 100%;",
								onchange: (e) => {
									let t = e.target.value;
									g(C, { description: t });
								},
								get value() {
									return n().description;
								}
							}), A(i);
							var a = B(i, 2), o = (e) => {
								var t = eD();
								fE(B(R(t)), {
									rows: 2,
									style: "width: 100%;",
									onchange: (e) => {
										let t = e.target.value;
										g(C, { condition: t });
									},
									get value() {
										return n().condition;
									}
								}), A(t), K(e, t);
							};
							J(a, (e) => {
								d() && e(o);
							});
							var s = B(a, 2), c = B(R(s), 2);
							Ca(c), A(s);
							var l = B(s, 2), u = (e) => {
								var t = tD(), r = z(t), i = B(R(r));
								{
									let e = /* @__PURE__ */ P(() => n().loopIntervalMs || "1000");
									fE(i, {
										rows: 1,
										style: "width: 100%;",
										onchange: (e) => {
											let t = e.target.value;
											g(C, { loopIntervalMs: t });
										},
										get value() {
											return H(e);
										}
									});
								}
								A(r);
								var a = B(r, 2), o = B(R(a));
								{
									let e = /* @__PURE__ */ P(() => n().maxLoopCount || "0");
									fE(o, {
										rows: 1,
										style: "width: 100%;",
										onchange: (e) => {
											let t = e.target.value;
											g(C, { maxLoopCount: t });
										},
										get value() {
											return H(e);
										}
									});
								}
								A(a);
								var s = B(a, 2);
								fE(B(R(s)), {
									rows: 2,
									style: "width: 100%;",
									onchange: (e) => {
										let t = e.target.value;
										g(C, { loopBreakCondition: t });
									},
									get value() {
										return n().loopBreakCondition;
									}
								}), A(s), K(e, t);
							};
							J(l, (e) => {
								n().loopEnable && e(u);
							});
							var f = B(l, 2), p = B(R(f), 2);
							Ca(p), A(f);
							var m = B(f, 2), h = (e) => {
								var t = nD(), r = z(t), i = B(R(r));
								{
									let e = /* @__PURE__ */ P(() => n().retryIntervalMs || "1000");
									fE(i, {
										rows: 1,
										style: "width: 100%;",
										onchange: (e) => {
											let t = e.target.value;
											g(C, { retryIntervalMs: t });
										},
										get value() {
											return H(e);
										}
									});
								}
								A(r);
								var a = B(r, 2), o = B(R(a));
								{
									let e = /* @__PURE__ */ P(() => n().maxRetryCount || "3");
									fE(o, {
										rows: 1,
										style: "width: 100%;",
										onchange: (e) => {
											let t = e.target.value;
											g(C, { maxRetryCount: t });
										},
										get value() {
											return H(e);
										}
									});
								}
								A(a);
								var s = B(a, 2), c = B(R(s), 2);
								Ca(c), A(s), V(() => Ta(c, !!n().resetRetryCountAfterNormal)), ti("change", c, (e) => {
									let t = e.target.checked;
									g(C, { resetRetryCountAfterNormal: t });
								}), K(e, t);
							};
							J(m, (e) => {
								n().retryEnable && e(h);
							}), A(t), V(() => {
								Ta(c, !!n().loopEnable), Ta(p, !!n().retryEnable);
							}), ti("change", c, (e) => {
								let t = e.target.checked;
								g(C, { loopEnable: t });
							}), ti("change", p, (e) => {
								let t = e.target.checked;
								g(C, { retryEnable: t });
							}), K(e, t);
						},
						children: (e, t) => {
							sy(e, {
								size: "icon",
								class: "tf-node-toolbar-item",
								children: (e, t) => {
									K(e, iD());
								},
								$$slots: { default: !0 }
							});
						},
						$$slots: {
							floating: !0,
							default: !0
						}
					});
				};
				J(_, (e) => {
					u() && e(v);
				}), A(i), K(e, i);
			},
			$$slots: { default: !0 }
		});
	};
	J(E, (e) => {
		(s() || c() || l()) && e(ee);
	});
	var te = B(E, 2), ne = B(R(te), 2);
	SE(R(ne), {
		get items() {
			return H(v);
		},
		get activeKeys() {
			return h;
		},
		onChange: (e, t) => {
			g(r(), { expand: t?.includes("key") }), m()?.(t?.includes("key") ? "key" : "");
		}
	}), A(ne), A(te);
	var re = B(te, 2), ie = (e) => {
		Em(e, {
			type: "target",
			get position() {
				return Q.Left;
			},
			style: " left: -12px;top: 20px"
		});
	};
	J(re, (e) => {
		p() && e(ie);
	});
	var ae = B(re, 2), oe = (e) => {
		Em(e, {
			type: "source",
			get position() {
				return Q.Right;
			},
			style: "right: -12px;top: 20px"
		});
	};
	return J(ae, (e) => {
		f() && e(oe);
	}), q(B(ae, 2), () => a() ?? D), K(e, T), N(w);
}
ni(["change"]), Z(cD, {
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
}, [], [], { mode: "open" });
var lD = /* @__PURE__ */ U("<div class=\"input-more-item svelte-n5iecj\">数据选项： <!></div>"), uD = /* @__PURE__ */ U("<div class=\"input-more-setting svelte-n5iecj\"><div class=\"input-more-item svelte-n5iecj\">数据类型： <!></div> <div class=\"input-more-item svelte-n5iecj\">输入方式： <!></div> <!> <div class=\"input-more-item svelte-n5iecj\">数据标题： <!></div> <div class=\"input-more-item svelte-n5iecj\">数据描述： <!></div> <div class=\"input-more-item svelte-n5iecj\">占位符： <!></div> <div class=\"input-more-item svelte-n5iecj\">参数描述： <!></div> <div class=\"input-more-item svelte-n5iecj\"><!></div></div>"), dD = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z\"></path></svg>"), fD = /* @__PURE__ */ U("<div class=\"input-item svelte-n5iecj\"><!></div> <div class=\"input-item svelte-n5iecj\"><!></div> <div class=\"input-item svelte-n5iecj\"><!></div>", 1), pD = {
	hash: "svelte-n5iecj",
	code: ".input-item.svelte-n5iecj {display:flex;align-items:center;}.input-more-setting.svelte-n5iecj {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--tf-background);border:1px solid var(--tf-border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-n5iecj .input-more-item:where(.svelte-n5iecj) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--tf-muted-foreground);}"
};
function mD(e, t) {
	M(t, !0), Zi(e, pD);
	let n = X(t, "parameter", 7), r = X(t, "index", 7), i = EE(), a = a_(i), o = /* @__PURE__ */ P(() => ({
		...n(),
		...(a?.current?.data?.parameters)[r()]
	})), s = /* @__PURE__ */ P(() => ["text", "other"].includes(H(o).contentType || "text") ? u_ : d_), c = /* @__PURE__ */ P(() => H(o).contentType === "text" || !H(o).contentType), { updateNodeData: l } = tg(), u = (e, t) => {
		l(i, (n) => {
			let i = n.data.parameters;
			return i[r()][e] = t, { parameters: i };
		});
	}, d = (e, t) => {
		let n = t.target.value;
		u(e, n);
	}, f = (e) => {
		let t = e.target.value;
		u("name", t);
	}, p = (e) => {
		u("required", e);
	}, m = (e) => {
		let t = e.value;
		u("formType", t);
	}, h = (e) => {
		let t = e.value;
		["text", "other"].includes(t) || H(o).formType != "radio" && H(o).formType != "checkbox" && u("formType", "radio"), u("contentType", t);
	}, g, _ = () => {
		l(i, (e) => {
			let t = e.data.parameters;
			return t.splice(r(), 1), { parameters: [...t] };
		}), g?.hide();
	};
	var v = {
		get parameter() {
			return n();
		},
		set parameter(e) {
			n(e), F();
		},
		get index() {
			return r();
		},
		set index(e) {
			r(e), F();
		}
	}, y = fD(), b = z(y);
	lE(R(b), {
		style: "width: 100%;",
		get value() {
			return H(o).name;
		},
		placeholder: "请输入参数",
		oninput: f
	}), A(b);
	var x = B(b, 2);
	nE(R(x), {
		get checked() {
			return H(o).required;
		},
		onCheckedChange: p
	}), A(x);
	var S = B(x, 2);
	return za(VE(R(S), {
		placement: "bottom",
		floating: (e) => {
			var t = uD(), n = R(t), r = B(R(n));
			{
				let e = /* @__PURE__ */ P(() => H(o).contentType ? [H(o).contentType] : []);
				RE(r, {
					get items() {
						return l_;
					},
					style: "width: 100%",
					defaultValue: ["text"],
					get value() {
						return H(e);
					},
					onSelect: h
				});
			}
			A(n);
			var i = B(n, 2), a = B(R(i));
			{
				let e = /* @__PURE__ */ P(() => H(o).formType ? [H(o).formType] : []);
				RE(a, {
					get items() {
						return H(s);
					},
					style: "width: 100%",
					defaultValue: ["input"],
					get value() {
						return H(e);
					},
					onSelect: m
				});
			}
			A(i);
			var l = B(i, 2), f = (e) => {
				var t = lD(), n = B(R(t));
				{
					let e = /* @__PURE__ */ P(() => H(o).enums?.join("\n"));
					fE(n, {
						rows: 3,
						style: "width: 100%;",
						onchange: (e) => {
							u("enums", e.currentTarget.value.trim().split("\n"));
						},
						get value() {
							return H(e);
						},
						placeholder: "一行一个选项"
					});
				}
				A(t), K(e, t);
			};
			J(l, (e) => {
				H(c) && (H(o).formType === "radio" || H(o).formType === "checkbox" || H(o).formType === "select") && e(f);
			});
			var p = B(l, 2);
			fE(B(R(p)), {
				rows: 1,
				style: "width: 100%;",
				onchange: (e) => {
					d("formLabel", e);
				},
				get value() {
					return H(o).formLabel;
				},
				placeholder: "请输入数据标题"
			}), A(p);
			var g = B(p, 2);
			fE(B(R(g)), {
				rows: 2,
				style: "width: 100%;",
				onchange: (e) => {
					d("formDescription", e);
				},
				get value() {
					return H(o).formDescription;
				},
				placeholder: "请输入数据描述"
			}), A(g);
			var v = B(g, 2);
			fE(B(R(v)), {
				rows: 2,
				style: "width: 100%;",
				onchange: (e) => {
					d("formPlaceholder", e);
				},
				get value() {
					return H(o).formPlaceholder;
				},
				placeholder: "请输入占位符"
			}), A(v);
			var y = B(v, 2);
			fE(B(R(y)), {
				rows: 3,
				style: "width: 100%;",
				onchange: (e) => {
					d("description", e);
				},
				get value() {
					return H(o).description;
				},
				placeholder: "请输入参数描述"
			}), A(y);
			var b = B(y, 2);
			sy(R(b), {
				variant: "destructive",
				onclick: _,
				children: (e, t) => {
					j(), K(e, ui("删除"));
				},
				$$slots: { default: !0 }
			}), A(b), A(t), K(e, t);
		},
		children: (e, t) => {
			sy(e, {
				size: "icon-xs",
				class: "input-btn-more",
				children: (e, t) => {
					K(e, dD());
				},
				$$slots: { default: !0 }
			});
		},
		$$slots: {
			floating: !0,
			default: !0
		}
	}), (e) => g = e, () => g), A(S), K(e, y), N(v);
}
Z(mD, {
	parameter: {},
	index: {}
}, [], [], { mode: "open" });
var hD = /* @__PURE__ */ U("<div class=\"input-header svelte-1yp5n1k\">参数名称</div> <div class=\"input-header svelte-1yp5n1k\">必填</div> <div class=\"input-header svelte-1yp5n1k\"></div>", 1), gD = /* @__PURE__ */ U("<div class=\"none-params svelte-1yp5n1k\">无输入参数</div>"), _D = /* @__PURE__ */ U("<div class=\"input-container svelte-1yp5n1k\"><!> <!></div>"), vD = {
	hash: "svelte-1yp5n1k",
	code: ".input-container.svelte-1yp5n1k {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1yp5n1k .none-params:where(.svelte-1yp5n1k) {font-size:12px;background:var(--tf-secondary);height:20px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;\n  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1yp5n1k .input-header:where(.svelte-1yp5n1k) {font-size:12px;color:var(--tf-muted-foreground);}"
};
function yD(e, t) {
	M(t, !0), Zi(e, vD);
	let n = a_(EE()), r = /* @__PURE__ */ P(() => [...n?.current?.data?.parameters || []]);
	var i = _D(), a = R(i), o = (e) => {
		var t = hD();
		j(4), K(e, t);
	};
	J(a, (e) => {
		H(r).length !== 0 && e(o);
	}), Vi(B(a, 2), 19, () => H(r), (e) => e.id, (e, t, n) => {
		mD(e, {
			get parameter() {
				return H(t);
			},
			get index() {
				return H(n);
			}
		});
	}, (e) => {
		K(e, gD());
	}), A(i), K(e, i), N();
}
Z(yD, {}, [], [], { mode: "open" });
var bD = (e) => (!e || e.length == 0 || e.forEach((e) => {
	e.id ||= JE(), bD(e.children);
}), e), xD = () => {
	let { updateNodeData: e } = tg();
	return { addParameter: (t, n = "parameters", r) => {
		Array.isArray(r) ? r.forEach((e) => bD(e?.children)) : bD(r?.children);
		function i(e) {
			return {
				name: "",
				refType: "ref",
				...e,
				id: JE()
			};
		}
		let a = [];
		Array.isArray(r) ? a.push(...r.map(i)) : a.push(i(r)), e(t, (e) => {
			let t = e.data[n];
			return t ? t.push(...a) : t = [...a], { [n]: [...t] };
		});
	} };
}, SD = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"data"
]), CD = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z\"></path></svg>"), wD = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z\"></path></svg>"), TD = /* @__PURE__ */ U("<div class=\"heading svelte-llt1qy\"><!> <!></div> <!>", 1), ED = {
	hash: "svelte-llt1qy",
	code: ".heading.svelte-llt1qy {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:var(--tf-muted);border:1px solid transparent;}"
};
function DD(e, t) {
	M(t, !0), Zi(e, ED);
	let n = X(t, "data", 7), r = /* @__PURE__ */ Ua(t, SD), i = EE(), { addParameter: a } = xD();
	return cD(e, qa(() => r, {
		get data() {
			return n();
		},
		allowExecute: !1,
		showTargetHandle: !1,
		allowSettingOfCondition: !1,
		icon: (e) => {
			K(e, CD());
		},
		children: (e, t) => {
			var n = TD(), r = z(n), o = R(r);
			HE(o, {
				level: 3,
				children: (e, t) => {
					j(), K(e, ui("输入参数"));
				},
				$$slots: { default: !0 }
			}), sy(B(o, 2), {
				size: "icon-xs",
				class: "input-btn-more",
				style: "margin-left: auto",
				onclick: () => {
					a(i, "parameters", {
						refType: "input",
						name: "newParam",
						dataType: "String"
					});
				},
				children: (e, t) => {
					K(e, wD());
				},
				$$slots: { default: !0 }
			}), A(r), yD(B(r, 2), {}), K(e, n);
		},
		$$slots: {
			icon: !0,
			default: !0
		}
	})), N({
		get data() {
			return n();
		},
		set data(e) {
			n(e), F();
		}
	});
}
Z(DD, { data: {} }, [], [], { mode: "open" });
var OD = (e, t, n) => {
	for (let r of n) r.target === t && r.source && !e.includes(r.source) && (e.push(r.source), OD(e, r.source, n));
}, kD = (e, t, n, r) => !e || e.length === 0 ? [] : e.map((e) => ({
	label: e.name + r(e, n),
	value: t + "." + e.name,
	children: kD(e.children, t + "." + e.name, n, r)
})), AD = (e) => e.contentType === "text" || !e.contentType, jD = (e, t, n, r) => {
	if (e.type === "startNode") {
		let n = e.data.parameters, i = [];
		if (n) for (let a of n) i.push({
			label: a.name + r(a, t || !AD(a) && a.formType === "checkbox"),
			value: e.id + "." + a.name
		});
		return {
			label: e.data.title,
			value: e.id,
			children: i
		};
	} else if (e.type === "loopNode" && n.parentId) return {
		label: e.data.title,
		value: e.id,
		children: [{
			label: "loopItem",
			value: e.id + ".loopItem"
		}, {
			label: "index (Number)",
			value: e.id + ".index"
		}]
	};
	else {
		let n = e.data.outputDefs;
		if (n) return {
			label: e.data.title,
			value: e.id,
			children: kD(n, e.id, t || e.type === "loopNode", r)
		};
	}
}, MD = (e = !1) => {
	let t = EE(), n = a_(t), r = /* @__PURE__ */ P(fh), i = /* @__PURE__ */ P(() => H(r).nodes), a = /* @__PURE__ */ P(() => H(r).edges), o = /* @__PURE__ */ P(() => H(r).nodeLookup), s = /* @__PURE__ */ P(() => {
		let r = [];
		if (!n.current) return [];
		let s = H(o).get(t), c = (e, t) => {
			if (e?.dataType) return l(e.dataType, t);
			if (e?.ref) {
				let n = e?.ref?.split(".");
				for (let e of H(i)) if (e.id === n[0]) {
					if (e.data.parameters) {
						for (let r of e.data.parameters) if (r.name === n[1]) {
							if (r.dataType) return l(r.dataType, t);
							if (!r.ref) return c(r, t);
						}
					}
					if (e.data.outputDefs) {
						for (let r of e.data.outputDefs) if (r.name === n[1]) {
							if (r.dataType) return l(r.dataType, t);
							if (!r.ref) return c(r, t);
						}
					}
				}
			}
			return l("", t);
		}, l = (e, t) => t ? e ? ` (Array&lt;${e}&gt;)` : " (Array&lt;&gt;)" : ` (${e})`;
		if (e) for (let e of H(i)) {
			let t = e.parentId === n.current.id;
			if (t) {
				let n = jD(e, t, s, c);
				n && r.push(n);
			}
		}
		else {
			let e = [];
			OD(e, t, H(a));
			for (let t of H(i)) if (e.includes(t.id)) {
				let e = jD(t, t.parentId === n.current.id, s, c);
				e && r.push(e);
			}
		}
		return r;
	});
	return { get current() {
		return H(s);
	} };
}, ND = /* @__PURE__ */ U("<div class=\"input-more-item svelte-jmeys3\">数据类型： <!></div>"), PD = /* @__PURE__ */ U("<div class=\"input-more-item svelte-jmeys3\">数据选项： <!></div>"), FD = /* @__PURE__ */ U("<div class=\"input-more-item svelte-jmeys3\">输入方式： <!></div> <label class=\"input-more-item svelte-jmeys3\" style=\"display: flex;flex-direction: row;align-items: center\">是否必填: <input type=\"checkbox\"/></label> <!> <div class=\"input-more-item svelte-jmeys3\">数据标题： <!></div> <div class=\"input-more-item svelte-jmeys3\">数据描述： <!></div> <div class=\"input-more-item svelte-jmeys3\">占位符： <!></div>", 1), ID = /* @__PURE__ */ U("<div class=\"input-more-setting svelte-jmeys3\"><div class=\"input-more-item svelte-jmeys3\">数据来源： <!></div> <!> <!> <div class=\"input-more-item svelte-jmeys3\">默认值： <!></div> <div class=\"input-more-item svelte-jmeys3\"><!></div></div>"), LD = /* @__PURE__ */ U("<div class=\"input-item svelte-jmeys3\"><!></div> <div class=\"input-item svelte-jmeys3\"><!></div> <div class=\"input-item svelte-jmeys3\"><!></div>", 1), RD = {
	hash: "svelte-jmeys3",
	code: ".input-item.svelte-jmeys3 {display:flex;align-items:center;}.input-more-setting.svelte-jmeys3 {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--tf-background);border:1px solid var(--tf-border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-jmeys3 .input-more-item:where(.svelte-jmeys3) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--tf-muted-foreground);}"
};
function zD(e, t) {
	M(t, !0), Zi(e, RD), Ai(() => {
		H(l).refType || g({ value: "ref" });
	});
	let n = X(t, "parameter", 7), r = X(t, "index", 7), i = X(t, "dataKeyName", 7), a = X(t, "useChildrenOnly", 7), o = X(t, "showContentType", 7, !1), s = EE(), c = a_(s), l = /* @__PURE__ */ P(() => ({
		...n(),
		...(c?.current?.data?.[i()])[r()]
	})), u = /* @__PURE__ */ P(() => ["text", "other"].includes(H(l).contentType || "text") ? u_ : d_), d = /* @__PURE__ */ P(() => H(l).contentType === "text" || !H(l).contentType), { updateNodeData: f } = tg(), p = (e, t) => {
		f(s, (n) => {
			let a = n.data?.[i()];
			return a[r()] = {
				...a[r()],
				[e]: t
			}, { [i()]: a };
		});
	}, m = (e, t) => {
		let n = t.target.value;
		p(e, n);
	}, h = (e) => {
		let t = e.value;
		p("ref", t);
	}, g = (e) => {
		let t = e.value;
		p("refType", t), t === "form" && (p("contentType", H(l).contentType || "text"), p("formType", H(l).formType || "input"));
	}, _ = (e) => {
		let t = e.value;
		["text", "other"].includes(t) || H(l).formType != "radio" && H(l).formType != "checkbox" && p("formType", "radio"), p("contentType", t);
	}, v = (e) => {
		let t = e.value;
		p("formType", t);
	}, y, b = () => {
		f(s, (e) => {
			let t = e.data?.[i()];
			return t.splice(r(), 1), { [i()]: [...t] };
		}), y?.hide();
	}, x = MD(a()), S = DE().formRefTypeEnable ? c_ : c_.filter((e) => e.value !== "form");
	var C = {
		get parameter() {
			return n();
		},
		set parameter(e) {
			n(e), F();
		},
		get index() {
			return r();
		},
		set index(e) {
			r(e), F();
		},
		get dataKeyName() {
			return i();
		},
		set dataKeyName(e) {
			i(e), F();
		},
		get useChildrenOnly() {
			return a();
		},
		set useChildrenOnly(e) {
			a(e), F();
		},
		get showContentType() {
			return o();
		},
		set showContentType(e = !1) {
			o(e), F();
		}
	}, w = LD(), T = z(w), E = R(T);
	{
		let e = /* @__PURE__ */ P(() => H(l).nameDisabled === !0);
		lE(E, {
			style: "width: 100%;",
			get value() {
				return H(l).name;
			},
			placeholder: "请输入参数",
			get disabled() {
				return H(e);
			},
			oninput: (e) => m("name", e)
		});
	}
	A(T);
	var D = B(T, 2), ee = R(D), te = (e) => {
		lE(e, {
			get value() {
				return H(l).value;
			},
			placeholder: "请输入参数值",
			oninput: (e) => m("value", e)
		});
	}, ne = (e) => {
		{
			let t = /* @__PURE__ */ P(() => [H(l).ref]);
			RE(e, {
				get items() {
					return x.current;
				},
				style: "width: 100%",
				defaultValue: ["ref"],
				get value() {
					return H(t);
				},
				expandAll: !0,
				onSelect: h
			});
		}
	}, re = (e) => {
		lE(e, {
			placeholder: "在执行期间，由用户输入",
			disabled: !0
		});
	};
	J(ee, (e) => {
		H(l).refType === "fixed" ? e(te) : H(l).refType === "ref" ? e(ne, 1) : H(l).refType === "form" && e(re, 2);
	}), A(D);
	var ie = B(D, 2);
	return za(VE(R(ie), {
		placement: "bottom",
		floating: (e) => {
			var t = ID(), n = R(t), r = B(R(n));
			{
				let e = /* @__PURE__ */ P(() => H(l).refType ? [H(l).refType] : []);
				RE(r, {
					get items() {
						return S;
					},
					style: "width: 100%",
					defaultValue: ["ref"],
					get value() {
						return H(e);
					},
					onSelect: g
				});
			}
			A(n);
			var i = B(n, 2), a = (e) => {
				var t = ND(), n = B(R(t));
				{
					let e = /* @__PURE__ */ P(() => H(l).contentType ? [H(l).contentType] : []);
					RE(n, {
						get items() {
							return l_;
						},
						style: "width: 100%",
						defaultValue: ["text"],
						get value() {
							return H(e);
						},
						onSelect: _
					});
				}
				A(t), K(e, t);
			};
			J(i, (e) => {
				(o() || H(l).refType === "form") && e(a);
			});
			var s = B(i, 2), c = (e) => {
				var t = FD(), n = z(t), r = B(R(n));
				{
					let e = /* @__PURE__ */ P(() => H(l).formType ? [H(l).formType] : []);
					RE(r, {
						get items() {
							return H(u);
						},
						style: "width: 100%",
						defaultValue: ["input"],
						get value() {
							return H(e);
						},
						onSelect: v
					});
				}
				A(n);
				var i = B(n, 2), a = B(R(i));
				Ca(a), A(i);
				var o = B(i, 2), s = (e) => {
					var t = PD(), n = B(R(t));
					{
						let e = /* @__PURE__ */ P(() => H(l).enums?.join("\n"));
						fE(n, {
							rows: 3,
							style: "width: 100%;",
							onchange: (e) => {
								p("enums", e.currentTarget.value.trim().split("\n"));
							},
							get value() {
								return H(e);
							},
							placeholder: "一行一个选项"
						});
					}
					A(t), K(e, t);
				};
				J(o, (e) => {
					H(d) && (H(l).formType === "radio" || H(l).formType === "checkbox" || H(l).formType === "select") && e(s);
				});
				var c = B(o, 2);
				fE(B(R(c)), {
					rows: 1,
					placeholder: "请输入数据标题",
					style: "width: 100%;",
					onchange: (e) => {
						m("formLabel", e);
					},
					get value() {
						return H(l).formLabel;
					}
				}), A(c);
				var f = B(c, 2);
				fE(B(R(f)), {
					rows: 2,
					placeholder: "请输入数据描述",
					style: "width: 100%;",
					onchange: (e) => {
						m("formDescription", e);
					},
					get value() {
						return H(l).formDescription;
					}
				}), A(f);
				var h = B(f, 2);
				fE(B(R(h)), {
					rows: 2,
					placeholder: "请输入占位符内容",
					style: "width: 100%;",
					onchange: (e) => {
						m("formPlaceholder", e);
					},
					get value() {
						return H(l).formPlaceholder;
					}
				}), A(h), V(() => Ta(a, !!H(l).required)), ti("change", a, (e) => {
					let t = e.target.checked;
					p("required", t);
				}), K(e, t);
			};
			J(s, (e) => {
				H(l).refType === "form" && e(c);
			});
			var f = B(s, 2);
			fE(B(R(f)), {
				rows: 1,
				style: "width: 100%;",
				onchange: (e) => {
					m("defaultValue", e);
				},
				get value() {
					return H(l).defaultValue;
				},
				placeholder: "请输入参数默认值"
			}), A(f);
			var h = B(f, 2);
			sy(R(h), {
				variant: "destructive",
				onclick: b,
				children: (e, t) => {
					j(), K(e, ui("删除"));
				},
				$$slots: { default: !0 }
			}), A(h), A(t), K(e, t);
		},
		children: (e, t) => {
			KE(e, {});
		},
		$$slots: {
			floating: !0,
			default: !0
		}
	}), (e) => y = e, () => y), A(ie), K(e, w), N(C);
}
ni(["change"]), Z(zD, {
	parameter: {},
	index: {},
	dataKeyName: {},
	useChildrenOnly: {},
	showContentType: {}
}, [], [], { mode: "open" });
var BD = /* @__PURE__ */ U("<div class=\"input-header svelte-32f1pk\">参数名称</div> <div class=\"input-header svelte-32f1pk\">参数值</div> <div class=\"input-header svelte-32f1pk\"></div>", 1), VD = /* @__PURE__ */ U("<div class=\"none-params svelte-32f1pk\"> </div>"), HD = /* @__PURE__ */ U("<div class=\"input-container svelte-32f1pk\"><!> <!></div>"), UD = {
	hash: "svelte-32f1pk",
	code: ".input-container.svelte-32f1pk {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-32f1pk .none-params:where(.svelte-32f1pk) {font-size:12px;background:var(--tf-secondary);height:20px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;\n  /* 从第一列开始到最后一列结束 */}.input-container.svelte-32f1pk .input-header:where(.svelte-32f1pk) {font-size:12px;color:var(--tf-muted-foreground);}"
};
function WD(e, t) {
	M(t, !0), Zi(e, UD);
	let n = X(t, "noneParameterText", 7, "无输入参数"), r = X(t, "dataKeyName", 7, "parameters"), i = X(t, "useChildrenOnly", 7), a = X(t, "showContentType", 7, !1), o = a_(EE()), s = /* @__PURE__ */ P(() => [...o?.current?.data?.[r()] || []]);
	var c = {
		get noneParameterText() {
			return n();
		},
		set noneParameterText(e = "无输入参数") {
			n(e), F();
		},
		get dataKeyName() {
			return r();
		},
		set dataKeyName(e = "parameters") {
			r(e), F();
		},
		get useChildrenOnly() {
			return i();
		},
		set useChildrenOnly(e) {
			i(e), F();
		},
		get showContentType() {
			return a();
		},
		set showContentType(e = !1) {
			a(e), F();
		}
	}, l = HD(), u = R(l), d = (e) => {
		var t = BD();
		j(4), K(e, t);
	};
	return J(u, (e) => {
		H(s).length !== 0 && e(d);
	}), Vi(B(u, 2), 19, () => H(s), (e) => e.id, (e, t, n) => {
		zD(e, {
			get parameter() {
				return H(t);
			},
			get index() {
				return H(n);
			},
			get dataKeyName() {
				return r();
			},
			get useChildrenOnly() {
				return i();
			},
			get showContentType() {
				return a();
			}
		});
	}, (e) => {
		var t = VD(), r = R(t, !0);
		A(t), V(() => Si(r, n())), K(e, t);
	}), A(l), K(e, l), N(c);
}
Z(WD, {
	noneParameterText: {},
	dataKeyName: {},
	useChildrenOnly: {},
	showContentType: {}
}, [], [], { mode: "open" });
var GD = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"data"
]), KD = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z\"></path></svg>"), qD = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z\"></path></svg>"), JD = /* @__PURE__ */ U("<div class=\"heading svelte-1fiuxu3\"><!> <!></div> <!>", 1), YD = {
	hash: "svelte-1fiuxu3",
	code: ".heading.svelte-1fiuxu3 {display:flex;margin-bottom:10px;}"
};
function XD(e, t) {
	M(t, !0), Zi(e, YD);
	let n = X(t, "data", 7), r = /* @__PURE__ */ Ua(t, GD), i = EE(), { addParameter: a } = xD();
	return cD(e, qa({ get data() {
		return n();
	} }, () => r, {
		allowExecute: !1,
		showSourceHandle: !1,
		icon: (e) => {
			K(e, KD());
		},
		children: (e, t) => {
			var n = JD(), r = z(n), o = R(r);
			HE(o, {
				level: 3,
				children: (e, t) => {
					j(), K(e, ui("输出参数"));
				},
				$$slots: { default: !0 }
			}), sy(B(o, 2), {
				size: "icon-xs",
				class: "input-btn-more",
				style: "margin-left: auto",
				onclick: () => {
					a(i, "outputDefs", { name: "output" });
				},
				children: (e, t) => {
					K(e, qD());
				},
				$$slots: { default: !0 }
			}), A(r), WD(B(r, 2), {
				noneParameterText: "无输出参数",
				dataKeyName: "outputDefs",
				showContentType: !0
			}), K(e, n);
		},
		$$slots: {
			icon: !0,
			default: !0
		}
	})), N({
		get data() {
			return n();
		},
		set data(e) {
			n(e), F();
		}
	});
}
Z(XD, { data: {} }, [], [], { mode: "open" });
var ZD = /* @__PURE__ */ W("<svg style=\"transform: scaleY(-1)\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z\"></path></svg>"), QD = /* @__PURE__ */ U("<div class=\"input-more-item svelte-hwmib9\"><!></div>"), $D = /* @__PURE__ */ U("<div class=\"input-more-setting svelte-hwmib9\"><div class=\"input-more-item svelte-hwmib9\">默认值： <!></div> <div class=\"input-more-item svelte-hwmib9\">参数描述： <!></div> <!></div>"), eO = /* @__PURE__ */ U("<div class=\"input-item svelte-hwmib9\"><!></div> <div class=\"input-item svelte-hwmib9\"><!> <!></div> <div class=\"input-item svelte-hwmib9\"><!></div>", 1), tO = {
	hash: "svelte-hwmib9",
	code: ".input-item.svelte-hwmib9 {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-hwmib9 {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--tf-background);border:1px solid var(--tf-border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-hwmib9 .input-more-item:where(.svelte-hwmib9) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--tf-muted-foreground);}"
};
function nO(e, t) {
	M(t, !0), Zi(e, tO);
	let n = X(t, "parameter", 7), r = X(t, "position", 7), i = X(t, "dataKeyName", 7), a = X(t, "placeholder", 7, "请输入参数值"), o = EE(), s = a_(o), c = /* @__PURE__ */ P(() => {
		let e = s?.current?.data?.[i()], t;
		if (e && r().length > 0) {
			let n = e;
			for (let e = 0; e < r().length; e++) {
				let i = r()[e];
				e == r().length - 1 ? t = n[i] : n = n[i].children;
			}
		}
		return {
			...n(),
			...t
		};
	}), { updateNodeData: l } = tg(), u = (e, t) => {
		l(o, (n) => {
			let a = n.data?.[i()];
			if (a && r().length > 0) {
				let n = a;
				for (let i = 0; i < r().length; i++) {
					let a = r()[i];
					i == r().length - 1 ? n[a] = {
						...n[a],
						[e]: t
					} : n = n[a].children;
				}
			}
			return { [i()]: [...YE(a)] };
		});
	}, d = (e, t) => {
		let n = t.target.value;
		u(e, n);
	}, f = (e) => {
		let t = e.value;
		u("dataType", t);
	}, p, m = () => {
		l(o, (e) => {
			let t = e.data?.[i()];
			if (t && r().length > 0) {
				let e = t;
				for (let t = 0; t < r().length; t++) {
					let n = r()[t];
					t == r().length - 1 ? e.splice(n, 1) : e = e[n].children;
				}
			}
			return { [i()]: [...YE(t)] };
		}), p?.hide();
	}, h = () => {
		l(o, (e) => {
			let t = e.data?.[i()];
			if (t && r().length > 0) {
				let e = t;
				for (let t = 0; t < r().length; t++) {
					let n = r()[t];
					t == r().length - 1 ? e[n].children ? e[n].children.push({
						id: JE(),
						name: "newParam",
						dataType: "String"
					}) : e[n].children = [{
						id: JE(),
						name: "newParam",
						dataType: "String"
					}] : e = e[n].children;
				}
			}
			return { [i()]: [...YE(t)] };
		});
	};
	var g = {
		get parameter() {
			return n();
		},
		set parameter(e) {
			n(e), F();
		},
		get position() {
			return r();
		},
		set position(e) {
			r(e), F();
		},
		get dataKeyName() {
			return i();
		},
		set dataKeyName(e) {
			i(e), F();
		},
		get placeholder() {
			return a();
		},
		set placeholder(e = "请输入参数值") {
			a(e), F();
		}
	}, _ = eO(), v = z(_), y = R(v);
	{
		let e = /* @__PURE__ */ P(() => (r().length - 1) * 12), t = /* @__PURE__ */ P(() => H(c).nameDisabled === !0);
		lE(y, {
			get style() {
				return `width: 100%;  margin-left: ${H(e) ?? ""}px;`;
			},
			get value() {
				return H(c).name;
			},
			get placeholder() {
				return a();
			},
			oninput: (e) => {
				d("name", e);
			},
			get disabled() {
				return H(t);
			}
		});
	}
	A(v);
	var b = B(v, 2), x = R(b);
	{
		let e = /* @__PURE__ */ P(() => H(c).dataTypeItems || s_), t = /* @__PURE__ */ P(() => H(c).dataType ? [H(c).dataType] : []), n = /* @__PURE__ */ P(() => H(c).dataTypeDisabled === !0);
		RE(x, {
			get items() {
				return H(e);
			},
			style: "width: 100%",
			defaultValue: ["String"],
			get value() {
				return H(t);
			},
			get disabled() {
				return H(n);
			},
			onSelect: f
		});
	}
	var S = B(x, 2), C = (e) => {
		sy(e, {
			size: "icon-xs",
			class: "input-btn-more",
			style: "margin-left: auto",
			onclick: h,
			children: (e, t) => {
				K(e, ZD());
			},
			$$slots: { default: !0 }
		});
	};
	J(S, (e) => {
		(H(c).dataType === "Object" || H(c).dataType === "Array") && H(c).addChildDisabled !== !0 && e(C);
	}), A(b);
	var w = B(b, 2);
	return za(VE(R(w), {
		placement: "bottom",
		floating: (e) => {
			var t = $D(), n = R(t), r = B(R(n));
			{
				let e = /* @__PURE__ */ P(() => H(c).defaultValue || "");
				fE(r, {
					rows: 1,
					style: "width: 100%;",
					get value() {
						return H(e);
					},
					onchange: (e) => {
						d("defaultValue", e);
					}
				});
			}
			A(n);
			var i = B(n, 2), a = B(R(i));
			{
				let e = /* @__PURE__ */ P(() => H(c).description || "");
				fE(a, {
					rows: 3,
					style: "width: 100%;",
					get value() {
						return H(e);
					},
					onchange: (e) => {
						d("description", e);
					}
				});
			}
			A(i);
			var o = B(i, 2), s = (e) => {
				var t = QD();
				sy(R(t), {
					variant: "destructive",
					onclick: m,
					children: (e, t) => {
						j(), K(e, ui("删除"));
					},
					$$slots: { default: !0 }
				}), A(t), K(e, t);
			};
			J(o, (e) => {
				H(c).deleteDisabled !== !0 && e(s);
			}), A(t), K(e, t);
		},
		children: (e, t) => {
			KE(e, {});
		},
		$$slots: {
			floating: !0,
			default: !0
		}
	}), (e) => p = e, () => p), A(w), K(e, _), N(g);
}
Z(nO, {
	parameter: {},
	position: {},
	dataKeyName: {},
	placeholder: {}
}, [], [], { mode: "open" });
var rO = /* @__PURE__ */ U("<!> <!>", 1), iO = /* @__PURE__ */ U("<div class=\"none-params svelte-1oz5kx0\"> </div>"), aO = /* @__PURE__ */ U("<div class=\"input-header svelte-1oz5kx0\">参数名称</div> <div class=\"input-header svelte-1oz5kx0\">参数类型</div> <div class=\"input-header svelte-1oz5kx0\"></div>", 1), oO = /* @__PURE__ */ U("<div class=\"input-container svelte-1oz5kx0\"><!> <!></div>"), sO = {
	hash: "svelte-1oz5kx0",
	code: ".input-container.svelte-1oz5kx0 {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1oz5kx0 .none-params:where(.svelte-1oz5kx0) {font-size:12px;background:var(--tf-secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;\n  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1oz5kx0 .input-header:where(.svelte-1oz5kx0) {font-size:12px;color:var(--tf-muted-foreground);}"
};
function cO(e, t) {
	M(t, !0), Zi(e, sO);
	let n = (e, t = D, o = D) => {
		var s = G();
		Vi(z(s), 19, t, (e) => `${e.id}_${e.children ? e.children.length : 0}`, (e, t, r) => {
			var s = rO(), c = z(s);
			{
				let e = /* @__PURE__ */ P(() => [...o(), H(r)]);
				nO(c, {
					get parameter() {
						return H(t);
					},
					get position() {
						return H(e);
					},
					get dataKeyName() {
						return i();
					},
					get placeholder() {
						return a();
					}
				});
			}
			var l = B(c, 2), u = (e) => {
				{
					let i = /* @__PURE__ */ P(() => [...o(), H(r)]);
					n(e, () => H(t).children, () => H(i));
				}
			};
			J(l, (e) => {
				H(t).children && e(u);
			}), K(e, s);
		}, (e) => {
			var t = G(), n = z(t), i = (e) => {
				var t = iO(), n = R(t, !0);
				A(t), V(() => Si(n, r())), K(e, t);
			};
			J(n, (e) => {
				o().length === 0 && e(i);
			}), K(e, t);
		}), K(e, s);
	}, r = X(t, "noneParameterText", 7, "无输出参数"), i = X(t, "dataKeyName", 7, "outputDefs"), a = X(t, "placeholder", 7, "请输入参数"), o = a_(EE()), s = /* @__PURE__ */ P(() => [...o?.current?.data?.[i()] || []]);
	var c = {
		get noneParameterText() {
			return r();
		},
		set noneParameterText(e = "无输出参数") {
			r(e), F();
		},
		get dataKeyName() {
			return i();
		},
		set dataKeyName(e = "outputDefs") {
			i(e), F();
		},
		get placeholder() {
			return a();
		},
		set placeholder(e = "请输入参数") {
			a(e), F();
		}
	}, l = oO(), u = R(l), d = (e) => {
		var t = aO();
		j(4), K(e, t);
	};
	return J(u, (e) => {
		H(s).length !== 0 && e(d);
	}), n(B(u, 2), () => H(s) || [], () => []), A(l), K(e, l), N(c);
}
Z(cO, {
	noneParameterText: {},
	dataKeyName: {},
	placeholder: {}
}, [], [], { mode: "open" });
var lO = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"data"
]), uO = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z\"></path></svg>"), dO = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z\"></path></svg>"), fO = /* @__PURE__ */ U("<div class=\"llm-setting svelte-j81vcl\"><div class=\"setting-title svelte-j81vcl\">采样参数</div> <div class=\"setting-item svelte-j81vcl\"><div class=\"slider-container svelte-j81vcl\"><span class=\"svelte-j81vcl\"> </span> <input class=\"nodrag svelte-j81vcl\" type=\"range\" min=\"0\" max=\"1\" step=\"0.1\"/></div></div> <div class=\"setting-item svelte-j81vcl\"><div class=\"slider-container svelte-j81vcl\"><span class=\"svelte-j81vcl\"> </span> <input class=\"nodrag svelte-j81vcl\" type=\"range\" min=\"0\" max=\"1\" step=\"0.1\"/></div></div> <div class=\"setting-item svelte-j81vcl\"><div class=\"slider-container svelte-j81vcl\"><span class=\"svelte-j81vcl\"> </span> <input class=\"nodrag svelte-j81vcl\" type=\"range\" min=\"0\" max=\"100\" step=\"1\"/></div></div></div>"), pO = /* @__PURE__ */ U("<div class=\"setting-title svelte-j81vcl\">JSON Schema</div> <div class=\"setting-item svelte-j81vcl\"><!></div>", 1), mO = /* @__PURE__ */ U("<div class=\"heading svelte-j81vcl\"><!> <!></div> <!> <div class=\"heading svelte-j81vcl\" style=\"padding-top: 10px\"><!> <!></div> <!> <!> <div class=\"setting-title svelte-j81vcl\">模型</div> <div class=\"setting-item svelte-j81vcl\"><!> <!></div> <div class=\"setting-title svelte-j81vcl\">系统提示词</div> <div class=\"setting-item svelte-j81vcl\"><!></div> <div class=\"setting-title svelte-j81vcl\">用户提示词</div> <div class=\"setting-item svelte-j81vcl\"><!></div> <!> <div class=\"heading svelte-j81vcl\"><!> <!></div> <!>", 1), hO = {
	hash: "svelte-j81vcl",
	code: ".heading.svelte-j81vcl {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-j81vcl {font-size:12px;color:var(--tf-secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-j81vcl {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}\n\n    /* 新增样式 */.slider-container.svelte-j81vcl {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-j81vcl span:where(.svelte-j81vcl) {font-size:12px;color:var(--tf-muted-foreground);display:flex;justify-content:space-between;align-items:center;}.llm-setting.svelte-j81vcl {width:200px;background:var(--tf-background);padding:10px;border-radius:5px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);border:1px solid var(--tf-border);}input[type='range'].svelte-j81vcl {width:100%;height:4px;background:var(--tf-muted);border-radius:2px;outline:none;-webkit-appearance:none;}input[type='range'].svelte-j81vcl::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:var(--tf-primary);border-radius:50%;cursor:pointer;}"
};
function gO(e, t) {
	M(t, !0), Zi(e, hO);
	let n = X(t, "data", 7), r = /* @__PURE__ */ Ua(t, lO), i = EE(), { addParameter: a } = xD(), o = DE(), s = /* @__PURE__ */ I(kn([]));
	Ai(async () => {
		let e = await o.provider?.llm?.();
		H(s).push(...e || []);
	});
	let { updateNodeData: c } = tg(), l = (e) => {
		c(i, () => ({ outType: e })), e === "text" ? c(i, { outputDefs: [{
			name: "output",
			dataType: "String",
			dataTypeDisabled: !0,
			deleteDisabled: !0
		}] }) : c(i, { outputDefs: [{
			name: "root",
			dataType: "Object",
			dataTypeItems: [{
				value: "Object",
				label: "Object"
			}, {
				value: "Array",
				label: "Array"
			}],
			deleteDisabled: !0
		}] });
	};
	return Yn(() => {
		n().outType || l("text");
	}), cD(e, qa({ get data() {
		return n();
	} }, () => r, {
		icon: (e) => {
			K(e, uO());
		},
		children: (e, t) => {
			var r = mO(), o = z(r), u = R(o);
			HE(u, {
				level: 3,
				children: (e, t) => {
					j(), K(e, ui("输入参数"));
				},
				$$slots: { default: !0 }
			}), sy(B(u, 2), {
				size: "icon-xs",
				class: "input-btn-more",
				style: "margin-left: auto",
				onclick: () => {
					a(i);
				},
				children: (e, t) => {
					K(e, dO());
				},
				$$slots: { default: !0 }
			}), A(o);
			var d = B(o, 2);
			WD(d, {});
			var f = B(d, 2), p = R(f);
			HE(p, {
				level: 3,
				children: (e, t) => {
					j(), K(e, ui("图片识别"));
				},
				$$slots: { default: !0 }
			}), sy(B(p, 2), {
				size: "icon-xs",
				class: "input-btn-more",
				style: "margin-left: auto",
				onclick: () => {
					a(i, "images");
				},
				children: (e, t) => {
					K(e, dO());
				},
				$$slots: { default: !0 }
			}), A(f);
			var m = B(f, 2);
			WD(m, {
				dataKeyName: "images",
				noneParameterText: "无图片参数"
			});
			var h = B(m, 2);
			HE(h, {
				level: 3,
				mt: "10px",
				children: (e, t) => {
					j(), K(e, ui("模型设置"));
				},
				$$slots: { default: !0 }
			});
			var g = B(h, 4), _ = R(g);
			{
				let e = /* @__PURE__ */ P(() => n().llmId ? [n().llmId] : []);
				RE(_, {
					get items() {
						return H(s);
					},
					style: "width: 100%",
					placeholder: "请选择模型",
					onSelect: (e) => {
						let t = e.value;
						c(i, () => ({ llmId: t }));
					},
					get value() {
						return H(e);
					}
				});
			}
			VE(B(_, 2), {
				placement: "bottom",
				floating: (e) => {
					var t = fO(), r = B(R(t), 2), a = R(r), o = R(a), s = R(o);
					A(o);
					var l = B(o, 2);
					Ca(l), A(a), A(r);
					var u = B(r, 2), d = R(u), f = R(d), p = R(f);
					A(f);
					var m = B(f, 2);
					Ca(m), A(d), A(u);
					var h = B(u, 2), g = R(h), _ = R(g), v = R(_);
					A(_);
					var y = B(_, 2);
					Ca(y), A(g), A(h), A(t), V(() => {
						Si(s, `Temperature: ${n().temperature ?? .5 ?? ""}`), wa(l, n().temperature ?? .5), Si(p, `Top P: ${n().topP ?? .9 ?? ""}`), wa(m, n().topP ?? .9), Si(v, `Top K: ${n().topK ?? 50 ?? ""}`), wa(y, n().topK ?? 50);
					}), ti("input", l, (e) => c(i, { temperature: parseFloat(e.currentTarget.value) })), ti("input", m, (e) => c(i, { topP: parseFloat(e.currentTarget.value) })), ti("input", y, (e) => c(i, { topK: parseInt(e.currentTarget.value) })), K(e, t);
				},
				children: (e, t) => {
					KE(e, {});
				},
				$$slots: {
					floating: !0,
					default: !0
				}
			}), A(g);
			var v = B(g, 4), y = R(v);
			{
				let e = /* @__PURE__ */ P(() => n().systemPrompt || "");
				fE(y, {
					rows: 5,
					placeholder: "请输入系统提示词",
					style: "width: 100%",
					get value() {
						return H(e);
					},
					oninput: (e) => {
						c(i, { systemPrompt: e.currentTarget.value });
					}
				});
			}
			A(v);
			var b = B(v, 4), x = R(b);
			{
				let e = /* @__PURE__ */ P(() => n().userPrompt || "");
				fE(x, {
					rows: 5,
					placeholder: "请输入用户提示词",
					style: "width: 100%",
					get value() {
						return H(e);
					},
					oninput: (e) => {
						c(i, { userPrompt: e.currentTarget.value });
					}
				});
			}
			A(b);
			var S = B(b, 2), C = (e) => {
				var t = pO(), r = B(z(t), 2), a = R(r);
				{
					let e = /* @__PURE__ */ P(() => n().jsonSchema || "");
					fE(a, {
						rows: 5,
						placeholder: "请输入 SON Schema",
						style: "width: 100%",
						get value() {
							return H(e);
						},
						oninput: (e) => {
							c(i, { jsonSchema: e.currentTarget.value });
						}
					});
				}
				A(r), K(e, t);
			};
			J(S, (e) => {
				n().outType === "json" && e(C);
			});
			var w = B(S, 2), T = R(w);
			HE(T, {
				level: 3,
				children: (e, t) => {
					j(), K(e, ui("输出参数"));
				},
				$$slots: { default: !0 }
			});
			var E = B(T, 2);
			{
				let e = /* @__PURE__ */ P(() => n().outType ? [n().outType] : []);
				RE(E, {
					class: "tf-select-xs",
					items: [{
						label: "文本",
						value: "text"
					}, {
						label: "JSON",
						value: "json"
					}],
					onSelect: (e) => {
						l(String(e.value));
					},
					get value() {
						return H(e);
					}
				});
			}
			A(w), cO(B(w, 2), {}), K(e, r);
		},
		$$slots: {
			icon: !0,
			default: !0
		}
	})), N({
		get data() {
			return n();
		},
		set data(e) {
			n(e), F();
		}
	});
}
ni(["input"]), Z(gO, { data: {} }, [], [], { mode: "open" });
var _O = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"data"
]), vO = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z\"></path></svg>"), yO = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z\"></path></svg>"), bO = /* @__PURE__ */ U("<div class=\"heading svelte-1wcsayx\"><!> <!></div> <!> <!> <div class=\"setting-title svelte-1wcsayx\">执行引擎</div> <div class=\"setting-item svelte-1wcsayx\"><!></div> <div class=\"setting-title svelte-1wcsayx\">执行代码</div> <div class=\"setting-item svelte-1wcsayx\"><!></div> <div class=\"heading svelte-1wcsayx\"><!> <!></div> <!>", 1), xO = {
	hash: "svelte-1wcsayx",
	code: ".heading.svelte-1wcsayx {display:flex;margin-bottom:10px;}.setting-title.svelte-1wcsayx {font-size:12px;color:var(--tf-secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1wcsayx {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function SO(e, t) {
	M(t, !0), Zi(e, xO);
	let n = X(t, "data", 7), r = /* @__PURE__ */ Ua(t, _O);
	Ai(() => {
		n().engine || o(i, () => ({ engine: "qlexpress" }));
	});
	let i = EE(), { addParameter: a } = xD(), { updateNodeData: o } = tg(), s = [
		{
			label: "JavaScript",
			value: "js"
		},
		{
			label: "Groovy",
			value: "groovy"
		},
		{
			label: "QLExpress",
			value: "qlexpress"
		}
	];
	return cD(e, qa({ get data() {
		return n();
	} }, () => r, {
		icon: (e) => {
			K(e, vO());
		},
		children: (e, t) => {
			var r = bO(), c = z(r), l = R(c);
			HE(l, {
				level: 3,
				children: (e, t) => {
					j(), K(e, ui("输入参数"));
				},
				$$slots: { default: !0 }
			}), sy(B(l, 2), {
				size: "icon-xs",
				class: "input-btn-more",
				style: "margin-left: auto",
				onclick: () => {
					a(i);
				},
				children: (e, t) => {
					K(e, yO());
				},
				$$slots: { default: !0 }
			}), A(c);
			var u = B(c, 2);
			WD(u, {});
			var d = B(u, 2);
			HE(d, {
				level: 3,
				mt: "10px",
				children: (e, t) => {
					j(), K(e, ui("代码"));
				},
				$$slots: { default: !0 }
			});
			var f = B(d, 4), p = R(f);
			{
				let e = /* @__PURE__ */ P(() => n().engine ? [n().engine] : ["qlexpress"]);
				RE(p, {
					get items() {
						return s;
					},
					style: "width: 100%",
					placeholder: "请选择执行引擎",
					onSelect: (e) => {
						let t = e.value;
						o(i, () => ({ engine: t }));
					},
					get value() {
						return H(e);
					}
				});
			}
			A(f);
			var m = B(f, 4), h = R(m);
			{
				let e = /* @__PURE__ */ P(() => n().code || "");
				fE(h, {
					rows: 10,
					placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result['key'] = value 或者 _result.key = value",
					style: "width: 100%",
					onchange: (e) => {
						o(i, () => ({ code: e.target.value }));
					},
					get value() {
						return H(e);
					}
				});
			}
			A(m);
			var g = B(m, 2), _ = R(g);
			HE(_, {
				level: 3,
				mt: "10px",
				children: (e, t) => {
					j(), K(e, ui("输出参数"));
				},
				$$slots: { default: !0 }
			}), sy(B(_, 2), {
				size: "icon-xs",
				class: "input-btn-more",
				style: "margin-left: auto",
				onclick: () => {
					a(i, "outputDefs");
				},
				children: (e, t) => {
					K(e, yO());
				},
				$$slots: { default: !0 }
			}), A(g), cO(B(g, 2), {}), K(e, r);
		},
		$$slots: {
			icon: !0,
			default: !0
		}
	})), N({
		get data() {
			return n();
		},
		set data(e) {
			n(e), F();
		}
	});
}
Z(SO, { data: {} }, [], [], { mode: "open" });
var CO = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"data"
]), wO = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z\"></path></svg>"), TO = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z\"></path></svg>"), EO = /* @__PURE__ */ U("<div class=\"heading svelte-1lcrzpc\"><!> <!></div> <!> <!> <div class=\"setting-item svelte-1lcrzpc\"><!></div> <div class=\"heading svelte-1lcrzpc\"><!></div> <!>", 1), DO = {
	hash: "svelte-1lcrzpc",
	code: ".heading.svelte-1lcrzpc {display:flex;margin-bottom:10px;}.setting-item.svelte-1lcrzpc {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function OO(e, t) {
	M(t, !0), Zi(e, DO);
	let n = X(t, "data", 7), r = /* @__PURE__ */ Ua(t, CO), i = EE(), { addParameter: a } = xD(), { updateNodeData: o } = tg();
	return Yn(() => {
		(!n().outputDefs || n().outputDefs.length === 0) && a(i, "outputDefs", {
			name: "output",
			dataType: "String",
			dataTypeDisabled: !0,
			deleteDisabled: !0
		});
	}), cD(e, qa({ get data() {
		return n();
	} }, () => r, {
		icon: (e) => {
			K(e, wO());
		},
		children: (e, t) => {
			var r = EO(), s = z(r), c = R(s);
			HE(c, {
				level: 3,
				children: (e, t) => {
					j(), K(e, ui("输入参数"));
				},
				$$slots: { default: !0 }
			}), sy(B(c, 2), {
				size: "icon-xs",
				class: "input-btn-more",
				style: "margin-left: auto",
				onclick: () => {
					a(i);
				},
				children: (e, t) => {
					K(e, TO());
				},
				$$slots: { default: !0 }
			}), A(s);
			var l = B(s, 2);
			WD(l, {});
			var u = B(l, 2);
			HE(u, {
				level: 3,
				mt: "10px",
				mb: "10px",
				children: (e, t) => {
					j(), K(e, ui("模板内容"));
				},
				$$slots: { default: !0 }
			});
			var d = B(u, 2), f = R(d);
			{
				let e = /* @__PURE__ */ P(() => n().template || "");
				fE(f, {
					rows: 10,
					placeholder: "请输入模板内容",
					style: "width: 100%",
					onchange: (e) => {
						o(i, () => ({ template: e.target.value }));
					},
					get value() {
						return H(e);
					}
				});
			}
			A(d);
			var p = B(d, 2);
			HE(R(p), {
				level: 3,
				mt: "10px",
				children: (e, t) => {
					j(), K(e, ui("输出参数"));
				},
				$$slots: { default: !0 }
			}), A(p), cO(B(p, 2), {}), K(e, r);
		},
		$$slots: {
			icon: !0,
			default: !0
		}
	})), N({
		get data() {
			return n();
		},
		set data(e) {
			n(e), F();
		}
	});
}
Z(OO, { data: {} }, [], [], { mode: "open" });
var kO = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"data"
]), AO = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z\"></path></svg>"), jO = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z\"></path></svg>"), MO = /* @__PURE__ */ U("<!> <div class=\"radio-group svelte-19uflw6\"><label class=\"svelte-19uflw6\"><!>none</label> <label class=\"svelte-19uflw6\"><!>form-data</label> <label class=\"svelte-19uflw6\"><!>x-www-form-urlencoded</label> <label class=\"svelte-19uflw6\"><!>json</label> <label class=\"svelte-19uflw6\"><!>raw</label></div>", 1), NO = /* @__PURE__ */ U("<div class=\"heading svelte-19uflw6\" style=\"padding-top: 10px\"><!> <!></div> <!>", 1), PO = /* @__PURE__ */ U("<div style=\"width: 100%\"><!></div>"), FO = /* @__PURE__ */ U("<div class=\"heading svelte-19uflw6\"><!> <!></div> <!> <!> <div style=\"display: flex;gap: 2px;width: 100%;padding: 10px 0\"><div><!></div> <div style=\"width: 100%\"><!></div></div> <div class=\"heading svelte-19uflw6\"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class=\"heading svelte-19uflw6\"><!> <!></div> <!>", 1), IO = {
	hash: "svelte-19uflw6",
	code: ".heading.svelte-19uflw6 {display:flex;margin-bottom:10px;}.radio-group.svelte-19uflw6 {display:flex;margin:10px 0;flex-wrap:wrap;gap:8px;}.radio-group.svelte-19uflw6 label:where(.svelte-19uflw6) {display:flex;font-size:14px;box-sizing:border-box;gap:4px;}"
};
function LO(e, t) {
	M(t, !0), Zi(e, IO);
	let n = X(t, "data", 7), r = /* @__PURE__ */ Ua(t, kO);
	Ai(() => {
		n().method || s(a, () => ({ method: "get" })), n().outputDefs || o(a, "outputDefs", [
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
	let i = [
		{
			value: "get",
			label: "GET"
		},
		{
			value: "post",
			label: "POST"
		},
		{
			value: "put",
			label: "PUT"
		},
		{
			value: "delete",
			label: "DELETE"
		},
		{
			value: "head",
			label: "HEAD"
		},
		{
			value: "patch",
			label: "PATCH"
		}
	], a = EE(), { addParameter: o } = xD(), { updateNodeData: s } = tg();
	return cD(e, qa({ get data() {
		return n();
	} }, () => r, {
		icon: (e) => {
			K(e, AO());
		},
		children: (e, t) => {
			var r = FO(), c = z(r), l = R(c);
			HE(l, {
				level: 3,
				children: (e, t) => {
					j(), K(e, ui("输入参数"));
				},
				$$slots: { default: !0 }
			}), sy(B(l, 2), {
				size: "icon-xs",
				class: "input-btn-more",
				style: "margin-left: auto",
				onclick: () => {
					o(a);
				},
				children: (e, t) => {
					K(e, jO());
				},
				$$slots: { default: !0 }
			}), A(c);
			var u = B(c, 2);
			WD(u, {});
			var d = B(u, 2);
			HE(d, {
				level: 3,
				mt: "10px",
				children: (e, t) => {
					j(), K(e, ui("URL 地址"));
				},
				$$slots: { default: !0 }
			});
			var f = B(d, 2), p = R(f), m = R(p);
			{
				let e = /* @__PURE__ */ P(() => n().method ? [n().method] : ["get"]);
				RE(m, {
					get items() {
						return i;
					},
					style: "width: 100%",
					placeholder: "请选择请求方式",
					onSelect: (e) => {
						let t = e.value;
						s(a, () => ({ method: t }));
					},
					get value() {
						return H(e);
					}
				});
			}
			A(p);
			var h = B(p, 2), g = R(h);
			{
				let e = /* @__PURE__ */ P(() => n().url || "");
				lE(g, {
					placeholder: "请输入url",
					style: "width: 100%",
					onchange: (e) => {
						s(a, () => ({ url: e.target.value }));
					},
					get value() {
						return H(e);
					}
				});
			}
			A(h), A(f);
			var _ = B(f, 2), v = R(_);
			HE(v, {
				level: 3,
				children: (e, t) => {
					j(), K(e, ui("Http 头信息"));
				},
				$$slots: { default: !0 }
			}), sy(B(v, 2), {
				size: "icon-xs",
				class: "input-btn-more",
				style: "margin-left: auto",
				onclick: () => {
					o(a, "headers");
				},
				children: (e, t) => {
					K(e, jO());
				},
				$$slots: { default: !0 }
			}), A(_);
			var y = B(_, 2);
			WD(y, { dataKeyName: "headers" });
			var b = B(y, 2), x = (e) => {
				var t = MO(), r = z(t);
				HE(r, {
					level: 3,
					mt: "10px",
					children: (e, t) => {
						j(), K(e, ui("Body"));
					},
					$$slots: { default: !0 }
				});
				var i = B(r, 2), o = R(i), c = R(o);
				{
					let e = /* @__PURE__ */ P(() => !n().bodyType || n().bodyType === "");
					lE(c, {
						type: "radio",
						value: "",
						get checked() {
							return H(e);
						},
						onchange: (e) => {
							e.target?.checked && s(a, { bodyType: "" });
						}
					});
				}
				j(), A(o);
				var l = B(o, 2), u = R(l);
				{
					let e = /* @__PURE__ */ P(() => n().bodyType === "form-data");
					lE(u, {
						type: "radio",
						value: "form-data",
						get checked() {
							return H(e);
						},
						onchange: (e) => {
							e.target?.checked && s(a, { bodyType: "form-data" });
						}
					});
				}
				j(), A(l);
				var d = B(l, 2), f = R(d);
				{
					let e = /* @__PURE__ */ P(() => n().bodyType === "x-www-form-urlencoded");
					lE(f, {
						type: "radio",
						value: "x-www-form-urlencoded",
						get checked() {
							return H(e);
						},
						onchange: (e) => {
							e.target?.checked && s(a, { bodyType: "x-www-form-urlencoded" });
						}
					});
				}
				j(), A(d);
				var p = B(d, 2), m = R(p);
				{
					let e = /* @__PURE__ */ P(() => n().bodyType === "json");
					lE(m, {
						type: "radio",
						value: "json",
						get checked() {
							return H(e);
						},
						onchange: (e) => {
							e.target?.checked && s(a, { bodyType: "json" });
						}
					});
				}
				j(), A(p);
				var h = B(p, 2), g = R(h);
				{
					let e = /* @__PURE__ */ P(() => n().bodyType === "raw");
					lE(g, {
						type: "radio",
						value: "raw",
						get checked() {
							return H(e);
						},
						onchange: (e) => {
							e.target?.checked && s(a, { bodyType: "raw" });
						}
					});
				}
				j(), A(h), A(i), K(e, t);
			};
			J(b, (e) => {
				(n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && e(x);
			});
			var S = B(b, 2), C = (e) => {
				var t = NO(), n = z(t), r = R(n);
				HE(r, {
					level: 3,
					children: (e, t) => {
						j(), K(e, ui("参数"));
					},
					$$slots: { default: !0 }
				}), sy(B(r, 2), {
					size: "icon-xs",
					class: "input-btn-more",
					style: "margin-left: auto",
					onclick: () => {
						o(a, "formData");
					},
					children: (e, t) => {
						K(e, jO());
					},
					$$slots: { default: !0 }
				}), A(n), WD(B(n, 2), { dataKeyName: "formData" }), K(e, t);
			};
			J(S, (e) => {
				n().bodyType === "form-data" && (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && e(C);
			});
			var w = B(S, 2), T = (e) => {
				var t = NO(), n = z(t), r = R(n);
				HE(r, {
					level: 3,
					children: (e, t) => {
						j(), K(e, ui("Body 参数"));
					},
					$$slots: { default: !0 }
				}), sy(B(r, 2), {
					size: "icon-xs",
					class: "input-btn-more",
					style: "margin-left: auto",
					onclick: () => {
						o(a, "formUrlencoded");
					},
					children: (e, t) => {
						K(e, jO());
					},
					$$slots: { default: !0 }
				}), A(n), WD(B(n, 2), { dataKeyName: "formUrlencoded" }), K(e, t);
			};
			J(w, (e) => {
				n().bodyType === "x-www-form-urlencoded" && (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && e(T);
			});
			var E = B(w, 2), D = (e) => {
				var t = PO();
				fE(R(t), {
					rows: 5,
					style: "width: 100%",
					placeholder: "请输入 json 信息",
					get value() {
						return n().bodyJson;
					},
					oninput: (e) => {
						s(a, { bodyJson: e.target.value });
					}
				}), A(t), K(e, t);
			};
			J(E, (e) => {
				n().bodyType === "json" && (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && e(D);
			});
			var ee = B(E, 2), te = (e) => {
				var t = PO();
				fE(R(t), {
					rows: 5,
					style: "width: 100%",
					placeholder: "请输入请求信息",
					get value() {
						return n().bodyRaw;
					},
					oninput: (e) => {
						s(a, { bodyRaw: e.target.value });
					}
				}), A(t), K(e, t);
			};
			J(ee, (e) => {
				n().bodyType === "raw" && (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && e(te);
			});
			var ne = B(ee, 2), re = R(ne);
			HE(re, {
				level: 3,
				mt: "10px",
				children: (e, t) => {
					j(), K(e, ui("输出参数"));
				},
				$$slots: { default: !0 }
			}), sy(B(re, 2), {
				size: "icon-xs",
				class: "input-btn-more",
				style: "margin-left: auto",
				onclick: () => {
					o(a, "outputDefs");
				},
				children: (e, t) => {
					K(e, jO());
				},
				$$slots: { default: !0 }
			}), A(ne), cO(B(ne, 2), {}), K(e, r);
		},
		$$slots: {
			icon: !0,
			default: !0
		}
	})), N({
		get data() {
			return n();
		},
		set data(e) {
			n(e), F();
		}
	});
}
Z(LO, { data: {} }, [], [], { mode: "open" });
var RO = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"data"
]), zO = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z\"></path></svg>"), BO = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z\"></path></svg>"), VO = /* @__PURE__ */ U("<div class=\"heading svelte-ddi5i\"><!> <!></div> <!> <!> <div class=\"setting-title svelte-ddi5i\">知识库</div> <div class=\"setting-item svelte-ddi5i\"><!></div> <div class=\"setting-title svelte-ddi5i\">关键字</div> <div class=\"setting-item svelte-ddi5i\"><!></div> <div class=\"setting-title svelte-ddi5i\">获取数据量</div> <div class=\"setting-item svelte-ddi5i\"><!></div> <div class=\"heading svelte-ddi5i\"><!></div> <!>", 1), HO = {
	hash: "svelte-ddi5i",
	code: ".heading.svelte-ddi5i {display:flex;margin-bottom:10px;}.setting-title.svelte-ddi5i {font-size:12px;color:var(--tf-secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-ddi5i {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function UO(e, t) {
	M(t, !0), Zi(e, HO);
	let n = X(t, "data", 7), r = /* @__PURE__ */ Ua(t, RO), i = EE(), { addParameter: a } = xD(), o = DE(), s = /* @__PURE__ */ I(kn([]));
	Ai(async () => {
		let e = await o.provider?.knowledge?.();
		H(s).push(...e || []);
	});
	let { updateNodeData: c } = tg();
	return Yn(() => {
		(!n().outputDefs || n().outputDefs.length === 0) && a(i, "outputDefs", {
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
	}), cD(e, qa({ get data() {
		return n();
	} }, () => r, {
		icon: (e) => {
			K(e, zO());
		},
		children: (e, t) => {
			var r = VO(), o = z(r), l = R(o);
			HE(l, {
				level: 3,
				children: (e, t) => {
					j(), K(e, ui("输入参数"));
				},
				$$slots: { default: !0 }
			}), sy(B(l, 2), {
				size: "icon-xs",
				class: "input-btn-more",
				style: "margin-left: auto",
				onclick: () => {
					a(i);
				},
				children: (e, t) => {
					K(e, BO());
				},
				$$slots: { default: !0 }
			}), A(o);
			var u = B(o, 2);
			WD(u, {});
			var d = B(u, 2);
			HE(d, {
				level: 3,
				mt: "10px",
				children: (e, t) => {
					j(), K(e, ui("知识库设置"));
				},
				$$slots: { default: !0 }
			});
			var f = B(d, 4), p = R(f);
			{
				let e = /* @__PURE__ */ P(() => n().knowledgeId ? [n().knowledgeId] : []);
				RE(p, {
					get items() {
						return H(s);
					},
					style: "width: 100%",
					placeholder: "请选择知识库",
					onSelect: (e) => {
						let t = e.value;
						c(i, () => ({ knowledgeId: t }));
					},
					get value() {
						return H(e);
					}
				});
			}
			A(f);
			var m = B(f, 4);
			lE(R(m), {
				placeholder: "请输入关键字",
				style: "width: 100%",
				get value() {
					return n().keyword;
				},
				onchange: (e) => {
					let t = e.currentTarget.value;
					c(i, () => ({ keyword: t }));
				}
			}), A(m);
			var h = B(m, 4), g = R(h);
			{
				let e = /* @__PURE__ */ P(() => n().limit || "");
				lE(g, {
					placeholder: "搜索的数据条数",
					style: "width: 100%",
					onchange: (e) => {
						let t = e.currentTarget.value;
						c(i, () => ({ limit: t }));
					},
					get value() {
						return H(e);
					}
				});
			}
			A(h);
			var _ = B(h, 2);
			HE(R(_), {
				level: 3,
				mt: "10px",
				children: (e, t) => {
					j(), K(e, ui("输出参数"));
				},
				$$slots: { default: !0 }
			}), A(_), cO(B(_, 2), {}), K(e, r);
		},
		$$slots: {
			icon: !0,
			default: !0
		}
	})), N({
		get data() {
			return n();
		},
		set data(e) {
			n(e), F();
		}
	});
}
Z(UO, { data: {} }, [], [], { mode: "open" });
var WO = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"data"
]), GO = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z\"></path></svg>"), KO = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z\"></path></svg>"), qO = /* @__PURE__ */ U("<div class=\"heading svelte-1qblm04\"><!> <!></div> <!> <!> <div class=\"setting-title svelte-1qblm04\">搜索引擎</div> <div class=\"setting-item svelte-1qblm04\"><!></div> <div class=\"setting-title svelte-1qblm04\">关键字</div> <div class=\"setting-item svelte-1qblm04\"><!></div> <div class=\"setting-title svelte-1qblm04\">搜索数据量</div> <div class=\"setting-item svelte-1qblm04\"><!></div> <div class=\"heading svelte-1qblm04\"><!></div> <!>", 1), JO = {
	hash: "svelte-1qblm04",
	code: ".heading.svelte-1qblm04 {display:flex;margin-bottom:10px;}.setting-title.svelte-1qblm04 {font-size:12px;color:var(--tf-secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1qblm04 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function YO(e, t) {
	M(t, !0), Zi(e, JO);
	let n = X(t, "data", 7), r = /* @__PURE__ */ Ua(t, WO), i = EE(), { addParameter: a } = xD(), o = DE(), s = /* @__PURE__ */ I(kn([]));
	Ai(async () => {
		let e = await o.provider?.searchEngine?.();
		H(s).push(...e || []);
	});
	let { updateNodeData: c } = tg();
	return Yn(() => {
		(!n().outputDefs || n().outputDefs.length === 0) && a(i, "outputDefs", {
			name: "documents",
			dataType: "Array",
			nameDisabled: !0,
			dataTypeDisabled: !0,
			addChildDisabled: !0,
			deleteDisabled: !0,
			children: [{
				name: "title",
				dataType: "String",
				nameDisabled: !0,
				dataTypeDisabled: !0,
				deleteDisabled: !0
			}, {
				name: "content",
				dataType: "String",
				nameDisabled: !0,
				dataTypeDisabled: !0,
				deleteDisabled: !0
			}]
		});
	}), cD(e, qa({ get data() {
		return n();
	} }, () => r, {
		icon: (e) => {
			K(e, GO());
		},
		children: (e, t) => {
			var r = qO(), o = z(r), l = R(o);
			HE(l, {
				level: 3,
				children: (e, t) => {
					j(), K(e, ui("输入参数"));
				},
				$$slots: { default: !0 }
			}), sy(B(l, 2), {
				size: "icon-xs",
				class: "input-btn-more",
				style: "margin-left: auto",
				onclick: () => {
					a(i);
				},
				children: (e, t) => {
					K(e, KO());
				},
				$$slots: { default: !0 }
			}), A(o);
			var u = B(o, 2);
			WD(u, {});
			var d = B(u, 2);
			HE(d, {
				level: 3,
				mt: "10px",
				children: (e, t) => {
					j(), K(e, ui("搜索引擎设置"));
				},
				$$slots: { default: !0 }
			});
			var f = B(d, 4), p = R(f);
			{
				let e = /* @__PURE__ */ P(() => n().engine ? [n().engine] : []);
				RE(p, {
					get items() {
						return H(s);
					},
					style: "width: 100%",
					placeholder: "请选择搜索引擎",
					onSelect: (e) => {
						let t = e.value;
						c(i, () => ({ engine: t }));
					},
					get value() {
						return H(e);
					}
				});
			}
			A(f);
			var m = B(f, 4);
			lE(R(m), {
				placeholder: "请输入关键字",
				style: "width: 100%",
				get value() {
					return n().keyword;
				},
				onchange: (e) => {
					let t = e.currentTarget.value;
					c(i, () => ({ keyword: t }));
				}
			}), A(m);
			var h = B(m, 4);
			lE(R(h), {
				placeholder: "搜索的数据条数",
				style: "width: 100%",
				get value() {
					return n().limit;
				},
				onchange: (e) => {
					let t = e.currentTarget.value;
					c(i, () => ({ limit: t }));
				}
			}), A(h);
			var g = B(h, 2);
			HE(R(g), {
				level: 3,
				mt: "10px",
				children: (e, t) => {
					j(), K(e, ui("输出参数"));
				},
				$$slots: { default: !0 }
			}), A(g), cO(B(g, 2), {}), K(e, r);
		},
		$$slots: {
			icon: !0,
			default: !0
		}
	})), N({
		get data() {
			return n();
		},
		set data(e) {
			n(e), F();
		}
	});
}
Z(YO, { data: {} }, [], [], { mode: "open" });
var XO = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"data"
]), ZO = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z\"></path></svg>"), QO = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z\"></path></svg>"), $O = /* @__PURE__ */ U("<div class=\"heading svelte-1o34e8c\"><!></div> <!> <div class=\"heading svelte-1o34e8c\"><!> <!></div> <!>", 1), ek = {
	hash: "svelte-1o34e8c",
	code: ".heading.svelte-1o34e8c {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper::after {content:'循环体';width:100px;height:20px;background:var(--tf-primary);color:var(--tf-primary-foreground);display:flex;justify-content:center;align-items:center;}"
};
function tk(e, t) {
	M(t, !0), Zi(e, ek);
	let n = X(t, "data", 7), r = /* @__PURE__ */ Ua(t, XO), i = EE(), { addParameter: a } = xD();
	return Yn(() => {
		(!n().loopVars || n().loopVars.length === 0) && a(i, "loopVars", {
			name: "loopVar",
			nameDisabled: !0,
			deleteDisabled: !0
		});
	}), cD(e, qa({ get data() {
		return n();
	} }, () => r, {
		icon: (e) => {
			K(e, ZO());
		},
		handle: (e) => {
			Em(e, {
				type: "source",
				get position() {
					return Q.Bottom;
				},
				id: "loop_handle",
				style: "bottom: -12px;width: 100px",
				class: "loop_handle_wrapper"
			});
		},
		children: (e, t) => {
			var n = $O(), r = z(n);
			HE(R(r), {
				level: 3,
				children: (e, t) => {
					j(), K(e, ui("循环变量"));
				},
				$$slots: { default: !0 }
			}), A(r);
			var o = B(r, 2);
			WD(o, { dataKeyName: "loopVars" });
			var s = B(o, 2), c = R(s);
			HE(c, {
				level: 3,
				children: (e, t) => {
					j(), K(e, ui("输出参数"));
				},
				$$slots: { default: !0 }
			}), sy(B(c, 2), {
				size: "icon-xs",
				class: "input-btn-more",
				style: "margin-left: auto",
				onclick: () => {
					a(i, "outputDefs");
				},
				children: (e, t) => {
					K(e, QO());
				},
				$$slots: { default: !0 }
			}), A(s), WD(B(s, 2), {
				noneParameterText: "无输出参数",
				dataKeyName: "outputDefs",
				useChildrenOnly: !0
			}), K(e, n);
		},
		$$slots: {
			icon: !0,
			handle: !0,
			default: !0
		}
	})), N({
		get data() {
			return n();
		},
		set data(e) {
			n(e), F();
		}
	});
}
Z(tk, { data: {} }, [], [], { mode: "open" });
var nk = /* @__PURE__ */ U("<div class=\"input-more-setting svelte-5x0hls\"><div class=\"input-more-item svelte-5x0hls\">数据类型： <!></div> <div class=\"input-more-item svelte-5x0hls\">确认方式： <!></div> <div class=\"input-more-item svelte-5x0hls\">数据标题： <!></div> <div class=\"input-more-item svelte-5x0hls\">数据描述： <!></div>   <div class=\"input-more-item svelte-5x0hls\"><!></div></div>"), rk = /* @__PURE__ */ U("<div class=\"input-item svelte-5x0hls\"><!></div> <div class=\"input-item svelte-5x0hls\"><!></div> <div class=\"input-item svelte-5x0hls\"><!></div>", 1), ik = {
	hash: "svelte-5x0hls",
	code: ".input-item.svelte-5x0hls {display:flex;align-items:center;}.input-more-setting.svelte-5x0hls {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--tf-background);border:1px solid var(--tf-border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-5x0hls .input-more-item:where(.svelte-5x0hls) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--tf-muted-foreground);}"
};
function ak(e, t) {
	M(t, !0), Zi(e, ik);
	let n = X(t, "parameter", 7), r = X(t, "index", 7), i = X(t, "dataKeyName", 7), a = X(t, "useChildrenOnly", 7), o = EE(), s = a_(o), c = /* @__PURE__ */ P(() => ({
		...n(),
		...(s?.current?.data?.[i()])[r()]
	})), { updateNodeData: l } = tg(), u = (e, t) => {
		l(o, (n) => {
			let a = n.data?.[i()];
			return a[r()] = {
				...a[r()],
				[e]: t
			}, { [i()]: a };
		});
	}, d = (e, t) => {
		let n = t.target.value;
		u(e, n);
	}, f = (e) => {
		let t = e.value;
		u("ref", t);
	}, p = (e) => {
		let t = e.value;
		u("formType", t);
	}, m = (e) => {
		let t = e.value;
		u("contentType", t);
	}, h, g = () => {
		l(o, (e) => {
			let t = e.data?.[i()];
			return t.splice(r(), 1), { [i()]: [...t] };
		}), h?.hide();
	}, _ = MD(a());
	var v = {
		get parameter() {
			return n();
		},
		set parameter(e) {
			n(e), F();
		},
		get index() {
			return r();
		},
		set index(e) {
			r(e), F();
		},
		get dataKeyName() {
			return i();
		},
		set dataKeyName(e) {
			i(e), F();
		},
		get useChildrenOnly() {
			return a();
		},
		set useChildrenOnly(e) {
			a(e), F();
		}
	}, y = rk(), b = z(y), x = R(b);
	{
		let e = /* @__PURE__ */ P(() => H(c).nameDisabled === !0);
		lE(x, {
			style: "width: 100%;",
			get value() {
				return H(c).name;
			},
			placeholder: "请输入参数",
			get disabled() {
				return H(e);
			},
			oninput: (e) => d("name", e)
		});
	}
	A(b);
	var S = B(b, 2), C = R(S), w = (e) => {
		lE(e, {
			get value() {
				return H(c).value;
			},
			placeholder: "请输入参数值",
			oninput: (e) => d("value", e)
		});
	}, T = (e) => {
		{
			let t = /* @__PURE__ */ P(() => [H(c).ref]);
			RE(e, {
				get items() {
					return _.current;
				},
				style: "width: 100%",
				defaultValue: ["ref"],
				get value() {
					return H(t);
				},
				expandAll: !0,
				onSelect: f
			});
		}
	};
	J(C, (e) => {
		H(c).refType === "fixed" ? e(w) : H(c).refType !== "input" && e(T, 1);
	}), A(S);
	var E = B(S, 2);
	return za(VE(R(E), {
		placement: "bottom",
		floating: (e) => {
			var t = nk(), n = R(t), r = B(R(n));
			{
				let e = /* @__PURE__ */ P(() => H(c).contentType ? [H(c).contentType] : []);
				RE(r, {
					get items() {
						return l_;
					},
					style: "width: 100%",
					defaultValue: ["text"],
					get value() {
						return H(e);
					},
					onSelect: m
				});
			}
			A(n);
			var i = B(n, 2), a = B(R(i));
			{
				let e = /* @__PURE__ */ P(() => H(c).formType ? [H(c).formType] : []);
				RE(a, {
					get items() {
						return f_;
					},
					style: "width: 100%",
					defaultValue: ["single"],
					get value() {
						return H(e);
					},
					onSelect: p
				});
			}
			A(i);
			var o = B(i, 2);
			fE(B(R(o)), {
				rows: 1,
				style: "width: 100%;",
				onchange: (e) => {
					d("formLabel", e);
				},
				get value() {
					return H(c).formLabel;
				}
			}), A(o);
			var s = B(o, 2);
			fE(B(R(s)), {
				rows: 2,
				style: "width: 100%;",
				onchange: (e) => {
					d("formDescription", e);
				},
				get value() {
					return H(c).formDescription;
				}
			}), A(s);
			var l = B(s, 2);
			sy(R(l), {
				variant: "destructive",
				onclick: g,
				children: (e, t) => {
					j(), K(e, ui("删除"));
				},
				$$slots: { default: !0 }
			}), A(l), A(t), K(e, t);
		},
		children: (e, t) => {
			KE(e, {});
		},
		$$slots: {
			floating: !0,
			default: !0
		}
	}), (e) => h = e, () => h), A(E), K(e, y), N(v);
}
Z(ak, {
	parameter: {},
	index: {},
	dataKeyName: {},
	useChildrenOnly: {}
}, [], [], { mode: "open" });
var ok = /* @__PURE__ */ U("<div class=\"input-header svelte-1fllp9b\">参数名称</div> <div class=\"input-header svelte-1fllp9b\">参数值</div> <div class=\"input-header svelte-1fllp9b\"></div>", 1), sk = /* @__PURE__ */ U("<div class=\"none-params svelte-1fllp9b\"> </div>"), ck = /* @__PURE__ */ U("<div class=\"input-container svelte-1fllp9b\"><!> <!></div>"), lk = {
	hash: "svelte-1fllp9b",
	code: ".input-container.svelte-1fllp9b {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1fllp9b .none-params:where(.svelte-1fllp9b) {font-size:12px;background:var(--tf-secondary);height:20px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;\n  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1fllp9b .input-header:where(.svelte-1fllp9b) {font-size:12px;color:var(--tf-muted-foreground);}"
};
function uk(e, t) {
	M(t, !0), Zi(e, lk);
	let n = X(t, "noneParameterText", 7, "无确认数据"), r = X(t, "dataKeyName", 7, "parameters"), i = X(t, "useChildrenOnly", 7), a = a_(EE()), o = /* @__PURE__ */ P(() => [...a?.current?.data?.[r()] || []]);
	var s = {
		get noneParameterText() {
			return n();
		},
		set noneParameterText(e = "无确认数据") {
			n(e), F();
		},
		get dataKeyName() {
			return r();
		},
		set dataKeyName(e = "parameters") {
			r(e), F();
		},
		get useChildrenOnly() {
			return i();
		},
		set useChildrenOnly(e) {
			i(e), F();
		}
	}, c = ck(), l = R(c), u = (e) => {
		var t = ok();
		j(4), K(e, t);
	};
	return J(l, (e) => {
		H(o).length !== 0 && e(u);
	}), Vi(B(l, 2), 19, () => H(o), (e) => e.id, (e, t, n) => {
		ak(e, {
			get parameter() {
				return H(t);
			},
			get index() {
				return H(n);
			},
			get dataKeyName() {
				return r();
			},
			get useChildrenOnly() {
				return i();
			}
		});
	}, (e) => {
		var t = sk(), r = R(t, !0);
		A(t), V(() => Si(r, n())), K(e, t);
	}), A(c), K(e, c), N(s);
}
Z(uk, {
	noneParameterText: {},
	dataKeyName: {},
	useChildrenOnly: {}
}, [], [], { mode: "open" });
var dk = (e, t) => {
	if (e === t) return !0;
	if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
	let n = Array.isArray(e), r = Array.isArray(t);
	if (n !== r) return !1;
	if (n && r) {
		if (e.length !== t.length) return !1;
		for (let n = 0; n < e.length; n++) if (!dk(e[n], t[n])) return !1;
		return !0;
	} else {
		let n = Object.keys(e), r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (let r of n) if (!(r in t) || !dk(e[r], t[r])) return !1;
		return !0;
	}
}, fk = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"data"
]), pk = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z\"></path></svg>"), mk = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z\"></path></svg>"), hk = /* @__PURE__ */ U("<div class=\"heading svelte-8iukvu\"><!> <!></div> <!> <!> <div class=\"setting-title svelte-8iukvu\">消息内容</div> <div class=\"setting-item svelte-8iukvu\"><!></div> <div class=\"heading svelte-8iukvu\"><!></div> <!>", 1), gk = {
	hash: "svelte-8iukvu",
	code: ".heading.svelte-8iukvu {display:flex;margin-bottom:10px;}.setting-title.svelte-8iukvu {font-size:12px;color:var(--tf-secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-8iukvu {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function _k(e, t) {
	M(t, !0), Zi(e, gk);
	let n = X(t, "data", 7), r = /* @__PURE__ */ Ua(t, fk), i = EE(), { addParameter: a } = xD(), { updateNodeData: o } = tg();
	return Yn(() => {
		if (n().confirms) {
			let e = n().confirms.map((e) => ({
				...e,
				nameDisabled: !0,
				dataTypeDisabled: !0,
				dataType: e.formType === "checkbox" || e.formType === "select" ? "Array" : "String",
				addChildDisabled: !0
			}));
			dk(e, n().outputDefs) || o(i, () => ({ outputDefs: e }));
		}
	}), cD(e, qa({ get data() {
		return n();
	} }, () => r, {
		icon: (e) => {
			K(e, pk());
		},
		children: (e, t) => {
			var r = hk(), s = z(r), c = R(s);
			HE(c, {
				level: 3,
				children: (e, t) => {
					j(), K(e, ui("确认数据"));
				},
				$$slots: { default: !0 }
			}), sy(B(c, 2), {
				size: "icon-xs",
				class: "input-btn-more",
				style: "margin-left: auto",
				onclick: () => {
					a(i, "confirms");
				},
				children: (e, t) => {
					K(e, mk());
				},
				$$slots: { default: !0 }
			}), A(s);
			var l = B(s, 2);
			uk(l, {
				dataKeyName: "confirms",
				noneParameterText: "无确认数据"
			});
			var u = B(l, 2);
			HE(u, {
				level: 3,
				mt: "10px",
				children: (e, t) => {
					j(), K(e, ui("确认消息"));
				},
				$$slots: { default: !0 }
			});
			var d = B(u, 4), f = R(d);
			{
				let e = /* @__PURE__ */ P(() => n().message || "");
				fE(f, {
					rows: 5,
					placeholder: "请输入用户需要确认的消息内容",
					style: "width: 100%",
					onchange: (e) => {
						o(i, () => ({ message: e.target.value }));
					},
					get value() {
						return H(e);
					}
				});
			}
			A(d);
			var p = B(d, 2);
			HE(R(p), {
				level: 3,
				mt: "10px",
				children: (e, t) => {
					j(), K(e, ui("输出参数"));
				},
				$$slots: { default: !0 }
			}), A(p), cO(B(p, 2), { placeholder: "" }), K(e, r);
		},
		$$slots: {
			icon: !0,
			default: !0
		}
	})), N({
		get data() {
			return n();
		},
		set data(e) {
			n(e), F();
		}
	});
}
Z(_k, { data: {} }, [], [], { mode: "open" });
var vk = {
	startNode: DD,
	codeNode: SO,
	confirmNode: _k,
	llmNode: gO,
	templateNode: OO,
	httpNode: LO,
	knowledgeNode: UO,
	searchEngineNode: YO,
	loopNode: tk,
	endNode: XD
}, yk = /* @__PURE__ */ U("<!> ", 1);
function bk(e, t) {
	M(t, !0);
	let n = X(t, "icon", 7), r = X(t, "title", 7), i = X(t, "type", 7), a = X(t, "description", 7), o = X(t, "extra", 7), s = tg();
	return sy(e, {
		draggable: !0,
		ondragstart: (e) => {
			if (!e.dataTransfer) return null;
			let t = {
				type: i(),
				data: {
					title: r(),
					description: a(),
					...o()
				}
			};
			e.dataTransfer.setData("application/tinyflow", JSON.stringify(t)), e.dataTransfer.effectAllowed = "move";
		},
		onclick: () => {
			let e = window.innerWidth, t = window.innerHeight, n = s.screenToFlowPosition({
				x: e / 2,
				y: t / 2
			}), c = {
				id: `node_${JE()}`,
				type: i(),
				position: n,
				data: {
					title: r(),
					description: a(),
					...o()
				}
			};
			ey.addNode(c), ey.selectNodeOnly(c.id);
		},
		get "data-node-type"() {
			return i();
		},
		children: (e, t) => {
			var i = yk(), a = z(i);
			qi(a, n);
			var o = B(a);
			V(() => Si(o, ` ${r() ?? ""}`)), K(e, i);
		},
		$$slots: { default: !0 }
	}), N({
		get icon() {
			return n();
		},
		set icon(e) {
			n(e), F();
		},
		get title() {
			return r();
		},
		set title(e) {
			r(e), F();
		},
		get type() {
			return i();
		},
		set type(e) {
			i(e), F();
		},
		get description() {
			return a();
		},
		set description(e) {
			a(e), F();
		},
		get extra() {
			return o();
		},
		set extra(e) {
			o(e), F();
		}
	});
}
Z(bk, {
	icon: {},
	title: {},
	type: {},
	description: {},
	extra: {}
}, [], [], { mode: "open" });
var xk = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z\"></path></svg>"), Sk = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z\"></path></svg>"), Ck = /* @__PURE__ */ U("<div><div class=\"tf-toolbar-container\"><div class=\"tf-toolbar-container-header\"><!></div> <div class=\"tf-toolbar-container-body\"><div class=\"tf-toolbar-container-base\"></div> <div class=\"tf-toolbar-container-tools\"></div></div></div> <!></div>");
function wk(e, t) {
	M(t, !0);
	let n = /* @__PURE__ */ I("base"), r = /* @__PURE__ */ I("show"), i = [
		{
			icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z\"></path></svg>",
			title: "开始节点",
			type: "startNode",
			sortNo: 100,
			description: "开始定义输入参数"
		},
		{
			icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z\"></path></svg>",
			title: "循环",
			type: "loopNode",
			sortNo: 200,
			description: "用于循环执行任务"
		},
		{
			icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z\"></path></svg>",
			title: "大模型",
			type: "llmNode",
			sortNo: 300,
			description: "使用大模型处理问题"
		},
		{
			icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z\"></path></svg>",
			title: "知识库",
			type: "knowledgeNode",
			sortNo: 400,
			description: "通过知识库获取内容"
		},
		{
			icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z\"></path></svg>",
			title: "搜索引擎",
			type: "searchEngineNode",
			sortNo: 500,
			description: "通过搜索引擎搜索内容"
		},
		{
			icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z\"></path></svg>",
			title: "Http 请求",
			type: "httpNode",
			sortNo: 600,
			description: "通过 HTTP 请求获取数据"
		},
		{
			icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z\"></path></svg>",
			title: "动态代码",
			type: "codeNode",
			sortNo: 700,
			description: "动态执行代码"
		},
		{
			icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z\"></path></svg>",
			title: "内容模板",
			type: "templateNode",
			sortNo: 800,
			description: "通过模板引擎生成内容"
		},
		{
			icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M15.3873 13.4975L17.9403 20.5117L13.2418 22.2218L10.6889 15.2076L6.79004 17.6529L8.4086 1.63318L19.9457 12.8646L15.3873 13.4975ZM15.3768 19.3163L12.6618 11.8568L15.6212 11.4459L9.98201 5.9561L9.19088 13.7863L11.7221 12.1988L14.4371 19.6583L15.3768 19.3163Z\"></path></svg>",
			title: "用户确认",
			type: "confirmNode",
			sortNo: 900,
			description: "确认继续或选择内容"
		},
		{
			icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z\"></path></svg>",
			title: "结束节点",
			type: "endNode",
			sortNo: 1e3,
			description: "结束定义输出参数"
		}
	], a = [{
		label: "基础节点",
		value: "base"
	}, {
		label: "业务工具",
		value: "tools"
	}], o = [], s = DE(), c = s.customNodes;
	if (c) {
		let e = Object.keys(c).sort((e, t) => (c[e].sortNo || 0) - (c[t].sortNo || 0));
		for (let t of e) c[t].group === "base" ? i.push({
			type: t,
			...c[t]
		}) : o.push({
			icon: c[t].icon,
			title: c[t].title,
			type: t
		});
		i.sort((e, t) => (e.sortNo || 0) - (t.sortNo || 0));
	}
	if (s.hiddenNodes) {
		let e = typeof s.hiddenNodes == "function" ? s.hiddenNodes() : s.hiddenNodes;
		if (Array.isArray(e)) {
			for (let t of e) for (let e = 0; e < i.length; e++) if (i[e].type === t) {
				i.splice(e, 1);
				break;
			}
		}
	}
	var l = Ck(), u = R(l), d = R(u);
	hE(R(d), {
		style: "width: 100%",
		get items() {
			return a;
		},
		onChange: (e) => {
			L(n, e.value.toString(), !0);
		}
	}), A(d);
	var f = B(d, 2), p = R(f);
	Vi(p, 21, () => i, Li, (e, t) => {
		bk(e, qa(() => H(t)));
	}), A(p);
	var m = B(p, 2);
	Vi(m, 21, () => o, Li, (e, t) => {
		bk(e, qa(() => H(t)));
	}), A(m), A(f), A(u), sy(B(u, 2), {
		size: "icon",
		variant: "outline",
		onclick: () => {
			L(r, H(r) ? "" : "show", !0);
		},
		children: (e, t) => {
			var n = G(), i = z(n), a = (e) => {
				K(e, xk());
			}, o = (e) => {
				K(e, Sk());
			};
			J(i, (e) => {
				H(r) === "show" ? e(a) : e(o, -1);
			}), K(e, n);
		},
		$$slots: { default: !0 }
	}), A(l), V(() => {
		ca(l, 1, `tf-toolbar ${H(r) ?? ""}`), ua(p, `display: ${H(n) === "base" ? "flex" : "none"}`), ua(m, `display: ${H(n) === "base" ? "none" : "flex"}`);
	}), K(e, l), N();
}
Z(wk, {}, [], [], { mode: "open" });
var Tk = () => ({ getNode: (e) => ey.getNode(e) }), Ek = () => ({ ensureParentInNodesBefore: (e, t) => {
	ey.updateNodes((n) => {
		let r = -1;
		for (let t = 0; t < n.length; t++) if (n[t].id === e) {
			r = t;
			break;
		}
		if (r <= 0) return n;
		let i = -1;
		for (let a = 0; a < r; a++) if (n[a].parentId === e || n[a].id === t) {
			i = a;
			break;
		}
		if (i == -1) return n;
		let a = n[r];
		for (let e = r; e > i; e--) n[e] = n[e - 1];
		return n[i] = a, n;
	});
} }), Dk = () => ({ getEdgesByTarget: (e) => ey.getEdges().filter((t) => t.target === e) }), Ok = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"data"
]), kk = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z\"></path></svg>"), Ak = /* @__PURE__ */ U("<div class=\"heading svelte-qt4m0r\"><!> <!></div> <!>", 1), jk = /* @__PURE__ */ U("<div class=\"setting-title svelte-qt4m0r\"> </div> <div class=\"setting-item svelte-qt4m0r\"><!></div>", 1), Mk = /* @__PURE__ */ U("<div class=\"setting-title svelte-qt4m0r\"> </div> <div class=\"setting-item svelte-qt4m0r\"><div class=\"slider-container svelte-qt4m0r\"><span class=\"svelte-qt4m0r\"> </span> <input/></div></div>", 1), Nk = /* @__PURE__ */ U("<!> <!> <div></div> <!>", 1), Pk = {
	hash: "svelte-qt4m0r",
	code: ".heading.svelte-qt4m0r {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-qt4m0r {font-size:12px;color:var(--tf-secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-qt4m0r {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}\n\n    /* 新增样式 */.slider-container.svelte-qt4m0r {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-qt4m0r span:where(.svelte-qt4m0r) {font-size:12px;color:var(--tf-muted-foreground);display:flex;justify-content:space-between;align-items:center;}input[type='range'].svelte-qt4m0r {width:100%;height:4px;background:var(--tf-muted);border-radius:2px;outline:none;-webkit-appearance:none;}input[type='range'].svelte-qt4m0r::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:var(--tf-primary);border-radius:50%;cursor:pointer;}"
};
function Fk(e, t) {
	M(t, !0), Zi(e, Pk);
	let n = X(t, "data", 7), r = /* @__PURE__ */ Ua(t, Ok), i = EE(), { addParameter: a } = xD(), o = tg(), { updateNodeData: s } = o, c = (e) => {
		s(i, e);
	}, l = (e, t) => {
		c({ [e]: t.target?.value });
	}, u = {
		...r,
		id: i,
		data: n()
	}, d = document.createElement("div"), f = DE().customNodes[t.type];
	f.render?.(d, u, o);
	let p = f.forms, m;
	Yn(() => {
		n().expand && m && m.append(d);
	}), Yn(() => {
		n() && f.onUpdate?.(d, {
			...u,
			data: n()
		});
	}), Yn(() => {
		!n().parameters && f.parameters && c({ parameters: bD(JSON.parse(JSON.stringify(f.parameters))) });
	}), Yn(() => {
		!n().outputDefs && f.outputDefs && c({ outputDefs: bD(JSON.parse(JSON.stringify(f.outputDefs))) });
	});
	var h = {
		get data() {
			return n();
		},
		set data(e) {
			n(e), F();
		}
	};
	{
		let t = (e) => {
			var t = G();
			qi(z(t), () => f.icon), K(e, t);
		}, o = /* @__PURE__ */ P(() => ({
			...n(),
			description: f.description
		}));
		cD(e, qa({ get data() {
			return H(o);
		} }, () => r, {
			icon: t,
			children: (e, t) => {
				var r = Nk(), o = z(r), s = (e) => {
					var t = Ak(), n = z(t), r = R(n);
					HE(r, {
						level: 3,
						children: (e, t) => {
							j(), K(e, ui("输入参数"));
						},
						$$slots: { default: !0 }
					});
					var o = B(r, 2), s = (e) => {
						sy(e, {
							size: "icon-xs",
							class: "input-btn-more",
							style: "margin-left: auto",
							onclick: () => {
								a(i);
							},
							children: (e, t) => {
								K(e, kk());
							},
							$$slots: { default: !0 }
						});
					};
					J(o, (e) => {
						f.parametersAddEnable !== !1 && e(s);
					}), A(n), WD(B(n, 2), {}), K(e, t);
				};
				J(o, (e) => {
					f.parametersEnable !== !1 && e(s);
				});
				var u = B(o, 2), d = (e) => {
					var t = G();
					Vi(z(t), 17, () => p, Li, (e, t) => {
						var r = G(), i = z(r), a = (e) => {
							var r = jk(), i = z(r), a = R(i, !0);
							A(i);
							var o = B(i, 2), s = R(o);
							{
								let e = /* @__PURE__ */ P(() => n()[H(t).name] || H(t).defaultValue);
								lE(s, qa({
									get placeholder() {
										return H(t).placeholder;
									},
									style: "width: 100%",
									get value() {
										return H(e);
									}
								}, () => H(t).attrs, { onchange: (e) => {
									l(H(t).name, e);
								} }));
							}
							A(o), V(() => Si(a, H(t).label)), K(e, r);
						}, o = (e) => {
							var r = jk(), i = z(r), a = R(i, !0);
							A(i);
							var o = B(i, 2), s = R(o);
							{
								let e = /* @__PURE__ */ P(() => n()[H(t).name] || H(t).defaultValue);
								fE(s, qa({
									rows: 3,
									get placeholder() {
										return H(t).placeholder;
									},
									style: "width: 100%",
									get value() {
										return H(e);
									}
								}, () => H(t).attrs, { onchange: (e) => {
									l(H(t).name, e);
								} }));
							}
							A(o), V(() => Si(a, H(t).label)), K(e, r);
						}, s = (e) => {
							var r = Mk(), i = z(r), a = R(i, !0);
							A(i);
							var o = B(i, 2), s = R(o), l = R(s), u = R(l);
							A(l);
							var d = B(l, 2), f = (e) => c({ [H(t).name]: parseFloat(e.currentTarget.value) });
							Oa(d, () => ({
								class: "nodrag",
								type: "range",
								...H(t).attrs,
								value: n()[H(t).name] ?? H(t).defaultValue,
								oninput: f
							}), void 0, void 0, void 0, "svelte-qt4m0r", !0), A(s), A(o), V(() => {
								Si(a, H(t).label), Si(u, `${H(t).description ?? ""}: ${n()[H(t).name] ?? H(t).defaultValue ?? ""}`);
							}), K(e, r);
						}, u = (e) => {
							var r = jk(), i = z(r), a = R(i, !0);
							A(i);
							var o = B(i, 2), s = R(o);
							{
								let e = /* @__PURE__ */ P(() => H(t).options || []), r = /* @__PURE__ */ P(() => n()[H(t).name] ? [n()[H(t).name]] : [H(t).defaultValue]);
								RE(s, {
									get items() {
										return H(e);
									},
									style: "width: 100%",
									get placeholder() {
										return H(t).placeholder;
									},
									onSelect: (e) => {
										let n = e.value;
										c({ [H(t).name]: n });
									},
									get value() {
										return H(r);
									}
								});
							}
							A(o), V(() => Si(a, H(t).label)), K(e, r);
						}, d = (e) => {
							var r = jk(), i = z(r), a = R(i, !0);
							A(i);
							var o = B(i, 2), s = R(o);
							{
								let e = /* @__PURE__ */ P(() => H(t).chosen?.buttonText);
								oE(s, {
									style: "width: 100%",
									get placeholder() {
										return H(t).placeholder;
									},
									get buttonText() {
										return H(e);
									},
									onChosen: (e, n, r) => {
										H(t).chosen?.onChosen?.(c, e, n, r);
									},
									get value() {
										return n()[H(t).chosen?.valueDataKey || ""];
									},
									get label() {
										return n()[H(t).chosen?.labelDataKey || ""];
									}
								});
							}
							A(o), V(() => Si(a, H(t).label)), K(e, r);
						}, f = (e) => {
							HE(e, qa({
								level: 3,
								mt: "10px"
							}, () => H(t).attrs, {
								children: (e, n) => {
									j();
									var r = ui();
									V(() => Si(r, H(t).label)), K(e, r);
								},
								$$slots: { default: !0 }
							}));
						};
						J(i, (e) => {
							H(t).type === "input" ? e(a) : H(t).type === "textarea" ? e(o, 1) : H(t).type === "slider" ? e(s, 2) : H(t).type === "select" ? e(u, 3) : H(t).type === "chosen" ? e(d, 4) : H(t).type === "heading" && e(f, 5);
						}), K(e, r);
					}), K(e, t);
				};
				J(u, (e) => {
					p && e(d);
				});
				var h = B(u, 2);
				za(h, (e) => m = e, () => m);
				var g = B(h, 2), _ = (e) => {
					var t = Ak(), n = z(t), r = R(n);
					HE(r, {
						level: 3,
						mt: "10px",
						children: (e, t) => {
							j(), K(e, ui("输出参数"));
						},
						$$slots: { default: !0 }
					});
					var o = B(r, 2), s = (e) => {
						sy(e, {
							size: "icon-xs",
							class: "input-btn-more",
							style: "margin-left: auto",
							onclick: () => {
								a(i, "outputDefs");
							},
							children: (e, t) => {
								K(e, kk());
							},
							$$slots: { default: !0 }
						});
					};
					J(o, (e) => {
						f.outputDefsAddEnable !== !1 && e(s);
					}), A(n), cO(B(n, 2), {}), K(e, t);
				};
				J(g, (e) => {
					f.outputDefsEnable !== !1 && e(_);
				}), V(() => {
					ua(h, f.rootStyle || ""), ca(h, 1, na(f.rootClass), "svelte-qt4m0r");
				}), K(e, r);
			},
			$$slots: {
				icon: !0,
				default: !0
			}
		}));
	}
	return N(h);
}
Z(Fk, { data: {} }, [], [], { mode: "open" });
var Ik = () => ({ updateEdgeData: (e, t, n) => {
	let r = ey.getEdge(e);
	if (!r) return;
	let i = typeof t == "function" ? t(r) : t;
	r.data = n?.replace ? i : {
		...r.data,
		...i
	}, ey.updateEdges((t) => t.map((t) => t.id === e ? r : t));
} }), Lk = () => ({ deleteEdge: (e) => {
	ey.removeEdge(e);
} }), Rk = () => {
	let e = (e, t) => t.filter((t) => t.source === e && t.sourceHandle !== "loop_handle");
	return { getNodesFromSource: (t) => {
		let n = ey.getEdges(), r = [], i = e(t, n);
		for (; i.length > 0;) {
			let t = [];
			i.forEach((i) => {
				r.push(ey.getNode(i.target)), t.push(...e(i.target, n));
			}), i = t;
		}
		return r;
	} };
}, zk = () => ({ getNodeRelativePosition: (e) => {
	let t = ey.getNode(e), n = {
		x: 0,
		y: 0
	};
	for (; t;) n.x += t.position.x, n.y += t.position.y, t = t.parentId ? ey.getNode(t.parentId) : void 0;
	return n;
} });
function Bk(e) {
	let { id: t, type: n, position: r, data: i, parentId: a } = e;
	return {
		id: t,
		type: n,
		position: {
			x: r.x,
			y: r.y
		},
		parentId: a || void 0,
		data: i ? JSON.parse(JSON.stringify(i)) : {},
		...a !== void 0 && { parentId: a }
	};
}
function Vk(e) {
	let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
	for (let i of e) t.set(i.id, i), n.set(i.id, 0), i.parentId && (n.set(i.id, 1), r.has(i.parentId) || r.set(i.parentId, []), r.get(i.parentId).push(i.id));
	let i = [];
	for (let n of e) (!n.parentId || !t.has(n.parentId)) && i.push(n);
	let a = [], o = /* @__PURE__ */ new Set();
	for (; i.length > 0;) {
		let e = i.shift();
		if (o.has(e.id)) continue;
		o.add(e.id), a.push(e);
		let n = r.get(e.id) || [];
		for (let e of n) o.has(e) || i.push(t.get(e));
	}
	for (let t of e) o.has(t.id) || a.push(t);
	return a;
}
function Hk(e) {
	let { id: t, source: n, target: r, sourceHandle: i, targetHandle: a, type: o, data: s } = e;
	return {
		id: t,
		source: n,
		target: r,
		...i !== void 0 && { sourceHandle: i },
		...a !== void 0 && { targetHandle: a },
		...o !== void 0 && { type: o },
		data: s ? JSON.parse(JSON.stringify(s)) : {}
	};
}
function Uk(e, t) {
	if (e == null) return e;
	if (Array.isArray(e)) return e.map((e) => Uk(e, t));
	if (typeof e == "object") {
		if (e.refType === "ref" && typeof e.ref == "string") {
			let n = e.ref.match(/^([^.\s]+)\.(.+)$/);
			if (n) {
				let [, r, i] = n, a = t.get(r);
				if (a !== void 0) return {
					...e,
					ref: `${a}.${i}`
				};
			}
		}
		let n = {};
		for (let r in e) Object.hasOwn(e, r) && (n[r] = Uk(e[r], t));
		return n;
	}
	return e;
}
var Wk = () => ({
	copyHandler: async (e) => {
		let t = ey.getNodes().filter((e) => e.selected);
		if (t.length === 0) return;
		let n = ey.getEdges().filter((e) => t.some((t) => t.id === e.source) && t.some((t) => t.id === e.target)), r = {
			tinyflowNodes: t.map(Bk),
			tinyflowEdges: n.map(Hk),
			version: "1.0"
		}, i = JSON.stringify(r, null, 0);
		try {
			"clipboardData" in e && e.clipboardData ? (e.clipboardData.setData("text/plain", i), e instanceof ClipboardEvent && e.preventDefault()) : await navigator.clipboard.writeText(i), console.log("Copied nodes and edges to clipboard");
		} catch (e) {
			console.error("Failed to copy:", e);
			try {
				sessionStorage.setItem("tinyflow_clipboard", i);
			} catch {}
		}
	},
	pasteHandler: (e) => {
		let t = e.clipboardData?.getData("text/plain");
		if (!t) return;
		let n = null;
		try {
			n = JSON.parse(t);
		} catch {
			return;
		}
		if (!n?.tinyflowNodes || !Array.isArray(n.tinyflowNodes)) return;
		e.preventDefault();
		let r = Vk(n.tinyflowNodes), i = n.tinyflowEdges || [], a = /* @__PURE__ */ new Map(), o = [];
		for (let e of r) {
			let t = `node_${JE()}`;
			a.set(e.id, t);
		}
		for (let e of r) {
			let t = a.get(e.id), n = e.parentId === void 0 ? void 0 : a.get(e.parentId), r = Uk(e.data, a);
			o.push({
				...e,
				id: t,
				parentId: n,
				data: r,
				position: {
					x: (e.position?.x ?? 0) + 50,
					y: (e.position?.y ?? 0) + 50
				},
				selected: !0
			});
		}
		let s = [];
		for (let e of i) {
			let t = a.get(e.source), n = a.get(e.target);
			t && n && s.push({
				...e,
				id: `edge_${JE()}`,
				source: t,
				target: n
			});
		}
		ey.updateNodes((e) => [...e.map((e) => ({
			...e,
			selected: !1
		})), ...o]), ey.updateEdges((e) => [...e.map((e) => ({
			...e,
			selected: !1
		})), ...s]);
	}
}), Gk = () => {
	let e = document.activeElement;
	return !e || !(e instanceof HTMLElement) ? !1 : e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement || e.isContentEditable;
}, Kk = /* @__PURE__ */ U("<div class=\"panel-content svelte-woejl3\"><div>边属性设置</div> <div class=\"setting-title svelte-woejl3\">边条件设置</div> <div class=\"setting-item svelte-woejl3\"><!></div> <div class=\"setting-item svelte-woejl3\" style=\"padding: 8px 0\"><!> <!></div></div>"), qk = /* @__PURE__ */ U("<!> <!> <!> <!>", 1), Jk = /* @__PURE__ */ U("<div style=\"position: relative; height: 100%; width: 100%;overflow: hidden\"><!> <!></div>"), Yk = {
	hash: "svelte-woejl3",
	code: ".panel-content.svelte-woejl3 {padding:10px;background-color:var(--tf-background);border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid var(--tf-border);}.setting-title.svelte-woejl3 {margin:10px 0;font-size:12px;color:var(--tf-muted-foreground);}.setting-item.svelte-woejl3 {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function Xk(e, t) {
	M(t, !0), Zi(e, Yk);
	let n = X(t, "onInit", 7), r = tg();
	n()(r);
	let i = /* @__PURE__ */ I(!1), a = /* @__PURE__ */ I(null), { updateEdgeData: o } = Ik(), s = (e) => {
		e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "move");
	}, c = (e) => {
		e.preventDefault();
		let t = r.screenToFlowPosition({
			x: e.clientX - 250,
			y: e.clientY - 100
		}), n = e.dataTransfer?.getData("application/tinyflow");
		if (!n) return;
		let i = JSON.parse(n), a = {
			id: `node_${JE()}`,
			position: t,
			data: {},
			...i
		};
		ey.addNode(a), ey.selectNodeOnly(a.id);
	}, { getNode: l } = Tk(), u = (e) => {
		let t = l(e.source), n = l(e.target);
		if (e.sourceHandle === "loop_handle" || t.parentId) {
			let n = r.getEdges();
			for (let r of n) if (r.target === e.target) {
				let n = l(r.source);
				if (e.sourceHandle === "loop_handle" && n.parentId !== t.id || t.parentId && n.parentId !== t.parentId) return !1;
			}
		}
		return !(!t.parentId && n.parentId && n.parentId !== t.id);
	}, { getNodesFromSource: d } = Rk(), { getNodeRelativePosition: f } = zk(), { ensureParentInNodesBefore: p } = Ek(), m = (e, t) => {
		if (!t.isValid) return;
		let n = t.toNode;
		if (n.parentId) return;
		let o = t.fromNode, s = t.fromHandle, c = { position: { ...n.position } };
		if (s.id === "loop_handle" ? c.parentId = o.id : o.parentId && (c.parentId = o.parentId), c.parentId) {
			let { x: e, y: t } = f(c.parentId);
			c.position = {
				x: n.position.x - e,
				y: n.position.y - t
			}, r.updateNode(n.id, c), d(n.id).forEach((n) => {
				r.updateNode(n.id, {
					parentId: c.parentId,
					position: {
						x: n.position.x - e,
						y: n.position.y - t
					}
				});
			}), p(c.parentId, n.id);
		}
		setTimeout(() => {
			ey.getEdges().forEach((e) => {
				e.target === n.id && e.source == o.id && (L(i, !0), L(a, e, !0));
			});
		});
	}, { getEdgesByTarget: h } = Dk(), g = (e) => {
		e.edges.forEach((e) => {
			e.id === H(a)?.id && (L(a, null), L(i, !1));
			let t = l(e.target);
			if (t && t.parentId) {
				let n = h(e.target), { x: i, y: a } = f(t.parentId);
				if (n.length === 0) r.updateNode(t.id, {
					parentId: void 0,
					position: {
						x: t.position.x + i,
						y: t.position.y + a
					}
				}), d(t.id).forEach((e) => {
					r.updateNode(e.id, {
						parentId: void 0,
						position: {
							x: e.position.x + i,
							y: e.position.y + a
						}
					});
				});
				else {
					let e = !1;
					for (let t = 0; t < n.length; t++) {
						let r = n[t], i = l(r.source);
						if (i.parentId || i.type === "loopNode") {
							e = !0;
							break;
						}
					}
					e || (r.updateNode(t.id, {
						parentId: void 0,
						position: {
							x: t.position.x + i,
							y: t.position.y + a
						}
					}), d(t.id).forEach((e) => {
						r.updateNode(e.id, {
							parentId: void 0,
							position: {
								x: e.position.x + i,
								y: e.position.y + a
							}
						});
					}));
				}
			}
		});
	}, { deleteEdge: _ } = Lk(), v = () => {}, y = () => {}, { copyHandler: b, pasteHandler: x } = Wk(), S = (e) => {
		Gk() || document.getSelection()?.type !== "Range" && ((e.ctrlKey || e.metaKey) && e.key === "c" ? (e.preventDefault(), b(e)) : (e.ctrlKey || e.metaKey) && e.key === "a" && (e.preventDefault(), ey.updateNodes((e) => e.map((e) => ({
			...e,
			selected: !0
		}))), ey.updateEdges((e) => e.map((e) => ({
			...e,
			selected: !0
		})))));
	}, C = async (e) => {
		Gk() || x(e);
	};
	Ai(() => {
		window.addEventListener("keydown", S), window.addEventListener("paste", C);
	}), ji(() => {
		window.removeEventListener("keydown", S), window.removeEventListener("paste", C);
	});
	let w = () => {
		let e = document.getSelection();
		e && e.removeAllRanges();
	}, T = {}, E = DE().customNodes;
	if (E) for (let e of Object.keys(E)) T[e] = Fk;
	let D = DE().onDataChange;
	Yn(() => {
		D?.({
			nodes: ey.getNodes(),
			edges: ey.getEdges(),
			viewport: ey.getViewport()
		});
	});
	var ee = {
		get onInit() {
			return n();
		},
		set onInit(e) {
			n(e), F();
		}
	}, te = Jk(), ne = R(te), re = ey.getNodes, ie = ey.setNodes, ae = ey.getEdges, oe = ey.setEdges, O = ey.getViewport, se = ey.setViewport;
	{
		let e = /* @__PURE__ */ P(() => DE().defaultTheme ?? "system"), t = /* @__PURE__ */ P(() => ({
			...vk,
			...T
		})), n = /* @__PURE__ */ P(() => ({ markerEnd: {
			type: Kd.ArrowClosed,
			width: 20,
			height: 20
		} }));
		yg(ne, {
			get colorMode() {
				return H(e);
			},
			get nodeTypes() {
				return H(t);
			},
			get nodes() {
				return re();
			},
			set nodes(e) {
				ie(e);
			},
			get edges() {
				return ae();
			},
			set edges(e) {
				oe(e);
			},
			get viewport() {
				return O();
			},
			set viewport(e) {
				se(e);
			},
			class: "tinyflow-logo",
			ondrop: c,
			ondragover: s,
			isValidConnection: u,
			onconnectend: m,
			onconnectstart: v,
			onconnect: y,
			connectionRadius: 50,
			onpaneclick: w,
			onedgeclick: (e) => {
				L(i, !0), L(a, e.edge, !0);
			},
			onbeforeconnect: (e) => ({
				...e,
				id: JE()
			}),
			ondelete: g,
			onclick: (e) => {
				let t = e.target;
				t.classList.contains("svelte-flow__edge-interaction") || t.classList.contains("panel-content") || t.closest(".panel-content") || (L(i, !1), L(a, null));
			},
			get defaultEdgeOptions() {
				return H(n);
			},
			children: (e, t) => {
				var n = qk(), r = z(n);
				Gg(r, {});
				var s = B(r, 2);
				Lg(s, {});
				var c = B(s, 2);
				t_(c, {});
				var l = B(c, 2), u = (e) => {
					lg(e, {
						children: (e, t) => {
							var n = Kk(), r = B(R(n), 4), s = R(r);
							{
								let e = /* @__PURE__ */ P(() => H(a)?.data?.condition);
								fE(s, {
									rows: 3,
									placeholder: "请输入边条件",
									style: "width: 100%",
									get value() {
										return H(e);
									},
									onchange: (e) => {
										H(a) && o(H(a).id, { condition: e.currentTarget.value });
									}
								});
							}
							A(r);
							var c = B(r, 2), l = R(c);
							sy(l, {
								variant: "destructive",
								onclick: () => {
									H(a) && _(H(a).id), L(i, !1);
								},
								children: (e, t) => {
									j(), K(e, ui("删除"));
								},
								$$slots: { default: !0 }
							}), sy(B(l, 2), {
								variant: "default",
								onclick: () => {
									L(i, !1);
								},
								children: (e, t) => {
									j(), K(e, ui("保存"));
								},
								$$slots: { default: !0 }
							}), A(c), A(n), K(e, n);
						},
						$$slots: { default: !0 }
					});
				};
				J(l, (e) => {
					H(i) && e(u);
				}), K(e, n);
			},
			$$slots: { default: !0 }
		});
	}
	return wk(B(ne, 2), {}), A(te), K(e, te), N(ee);
}
Z(Xk, { onInit: {} }, [], [], { mode: "open" });
function Zk(e, t) {
	M(t, !0);
	let n = X(t, "options", 7), r = X(t, "onInit", 7), { data: i } = n();
	if (typeof i == "string") try {
		i = JSON.parse(i.trim());
	} catch {
		console.error("Invalid JSON data:", i);
	}
	return ey.init(i?.nodes || [], i?.edges || []), ft("tinyflow_options", n()), bg(e, {
		children: (e, t) => {
			Xk(e, { get onInit() {
				return r();
			} });
		},
		$$slots: { default: !0 }
	}), N({
		get options() {
			return n();
		},
		set options(e) {
			n(e), F();
		},
		get onInit() {
			return r();
		},
		set onInit(e) {
			r(e), F();
		}
	});
}
customElements.define("tinyflow-component", Z(Zk, {
	options: {},
	onInit: {}
}, [], []));
//#endregion
//#region src/Tinyflow.vue
var Qk = /* @__PURE__ */ t({
	__name: "Tinyflow",
	props: {
		className: {},
		style: {},
		data: {},
		provider: {},
		customNodes: {},
		onNodeExecute: { type: Function },
		hiddenNodes: { type: [Array, Function] },
		onDataChange: { type: Function },
		defaultTheme: {},
		formRefTypeEnable: { type: Boolean }
	},
	setup(t, { expose: c }) {
		let l = t, u = s(null), d = null;
		function f(e) {
			if (typeof e != "object" || !e) return e;
			try {
				return structuredClone(e);
			} catch {
				try {
					return JSON.parse(JSON.stringify(e));
				} catch {
					return console.warn("Failed to clone object, returning original (may cause issues)", e), e;
				}
			}
		}
		return i(() => {
			if (u.value) {
				let e = { ...l };
				"data" in e && e.data != null && (e.data = f(e.data)), d = new $v({
					...e,
					element: u.value
				});
			}
		}), a(() => {
			d &&= (d.destroy(), null);
		}), c({
			getData: () => d ? d.getData() : (console.warn("Tinyflow instance is not initialized"), null),
			getInstance: () => d || (console.warn("Tinyflow instance is not initialized"), null)
		}), (i, a) => (o(), e("div", {
			ref_key: "divRef",
			ref: u,
			class: n(["tinyflow", t.className]),
			style: r(t.style)
		}, null, 6));
	}
});
//#endregion
export { Qk as Tinyflow };

//# sourceMappingURL=index.js.map