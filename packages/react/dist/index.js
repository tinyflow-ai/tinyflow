import { forwardRef as e, useEffect as t, useImperativeHandle as n, useRef as r } from "react";
//#region \0rolldown/runtime.js
var i = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), a = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
});
//#endregion
//#region ../ui/dist/index.js
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
var o = {}, s = Symbol("uninitialized"), c = "http://www.w3.org/1999/xhtml", l = "http://www.w3.org/2000/svg", u = "http://www.w3.org/1998/Math/MathML", d = "@attach", f = Array.isArray, p = Array.prototype.indexOf, m = Array.prototype.includes, h = Array.from, g = Object.keys, _ = Object.defineProperty, v = Object.getOwnPropertyDescriptor, y = Object.getOwnPropertyDescriptors, b = Object.prototype, x = Array.prototype, S = Object.getPrototypeOf, C = Object.isExtensible;
function w(e) {
	return typeof e == "function";
}
var T = () => {};
function E(e) {
	return e();
}
function D(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function ee() {
	var e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}
function O(e, t, n = !1) {
	return e === void 0 ? n ? t() : t : e;
}
function te(e, t) {
	if (Array.isArray(e)) return e;
	if (t === void 0 || !(Symbol.iterator in e)) return Array.from(e);
	let n = [];
	for (let r of e) if (n.push(r), n.length === t) break;
	return n;
}
function ne(e, t) {
	var n = {};
	for (var r in e) t.includes(r) || (n[r] = e[r]);
	for (var i of Object.getOwnPropertySymbols(e)) Object.propertyIsEnumerable.call(e, i) && !t.includes(i) && (n[i] = e[i]);
	return n;
}
var re = 1 << 24, k = 1024, ie = 2048, ae = 4096, oe = 8192, se = 16384, ce = 32768, le = 1 << 25, ue = 65536, de = 1 << 18, fe = 1 << 19, pe = 1 << 20, me = 1 << 25, he = 65536, ge = 1 << 21, _e = 1 << 22, ve = 1 << 23, ye = Symbol("$state"), be = Symbol("legacy props"), xe = Symbol(""), Se = Symbol("attributes"), Ce = Symbol("class"), we = Symbol("style"), Te = Symbol("text"), Ee = Symbol("form reset"), De = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Oe = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
function ke(e) {
	throw Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Ae() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function je(e, t, n) {
	throw Error("https://svelte.dev/e/each_key_duplicate");
}
function Me(e) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function Ne() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Pe(e) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function Fe() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ie() {
	throw Error("https://svelte.dev/e/hydration_failed");
}
function Le(e) {
	throw Error("https://svelte.dev/e/props_invalid_value");
}
function Re() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ze() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function Be() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ve() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function He() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function Ue(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function We() {
	console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Ge() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
var A = !1;
function Ke(e) {
	A = e;
}
var qe;
function Je(e) {
	if (e === null) throw Ue(), o;
	return qe = e;
}
function Ye() {
	return Je(/* @__PURE__ */ In(qe));
}
function j(e) {
	if (A) {
		if (/* @__PURE__ */ In(qe) !== null) throw Ue(), o;
		qe = e;
	}
}
function M(e = 1) {
	if (A) {
		for (var t = e, n = qe; t--;) n = /* @__PURE__ */ In(n);
		qe = n;
	}
}
function Xe(e = !0) {
	for (var t = 0, n = qe;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ In(n);
		e && n.remove(), n = i;
	}
}
function Ze(e) {
	if (!e || e.nodeType !== 8) throw Ue(), o;
	return e.data;
}
function Qe(e) {
	return e === this.v;
}
function $e(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function et(e) {
	return !$e(e, this.v);
}
var tt = !1;
function nt() {
	tt = !0;
}
var rt = [];
function it(e, t = !1, n = !1) {
	return at(e, /* @__PURE__ */ new Map(), "", rt, null, n);
}
function at(e, t, n, r, i = null, a = !1) {
	if (typeof e == "object" && e) {
		var o = t.get(e);
		if (o !== void 0) return o;
		if (e instanceof Map) return new Map(e);
		if (e instanceof Set) return new Set(e);
		if (f(e)) {
			var s = Array(e.length);
			t.set(e, s), i !== null && t.set(i, s);
			for (var c = 0; c < e.length; c += 1) {
				var l = e[c];
				c in e && (s[c] = at(l, t, n, r, null, a));
			}
			return s;
		}
		if (S(e) === b) {
			s = {}, t.set(e, s), i !== null && t.set(i, s);
			for (var u of Object.keys(e)) s[u] = at(e[u], t, n, r, null, a);
			return s;
		}
		if (e instanceof Date) return structuredClone(e);
		if (typeof e.toJSON == "function" && !a) return at(e.toJSON(), t, n, r, e);
	}
	if (e instanceof EventTarget) return e;
	try {
		return structuredClone(e);
	} catch {
		return e;
	}
}
var ot = null;
function st(e) {
	ot = e;
}
function ct(e) {
	return pt("getContext").get(e);
}
function lt(e, t) {
	return pt("setContext").set(e, t), t;
}
function ut(e) {
	return pt("hasContext").has(e);
}
function dt() {
	return pt("getAllContexts");
}
function N(e, t = !1, n) {
	ot = {
		p: ot,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: xr,
		l: tt && !t ? {
			s: null,
			u: null,
			$: []
		} : null
	};
}
function P(e) {
	var t = ot, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) qn(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, ot = t.p, e ?? {};
}
function ft() {
	return !tt || ot !== null && ot.l === null;
}
function pt(e) {
	return ot === null && ke(e), ot.c ??= new Map(mt(ot) || void 0);
}
function mt(e) {
	let t = e.p;
	for (; t !== null;) {
		let e = t.c;
		if (e !== null) return e;
		t = t.p;
	}
	return null;
}
var ht = [];
function gt() {
	var e = ht;
	ht = [], D(e);
}
function _t(e) {
	if (ht.length === 0 && !nn) {
		var t = ht;
		queueMicrotask(() => {
			t === ht && gt();
		});
	}
	ht.push(e);
}
function vt() {
	for (; ht.length > 0;) gt();
}
function yt(e) {
	var t = xr;
	if (t === null) return vr.f |= ve, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	bt(e, t);
}
function bt(e, t) {
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
var xt = ~(ie | ae | k);
function St(e, t) {
	e.f = e.f & xt | t;
}
function Ct(e) {
	e.f & 512 || e.deps === null ? St(e, k) : St(e, ae);
}
function wt(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= he, wt(t.deps));
}
function Tt(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), wt(e.deps), St(e, k);
}
var Et = !1;
function Dt(e) {
	var t = Et;
	try {
		return Et = !1, [e(), Et];
	} finally {
		Et = t;
	}
}
function Ot(e, t) {
	if (t) {
		let t = document.body;
		e.autofocus = !0, _t(() => {
			document.activeElement === t && e.focus();
		});
	}
}
function kt(e) {
	A && /* @__PURE__ */ Fn(e) !== null && Ln(e);
}
var At = !1;
function jt() {
	At || (At = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let t of e.target.elements) t[Ee]?.();
		});
	}, { capture: !0 }));
}
function Mt(e) {
	var t = vr, n = xr;
	br(null), Sr(null);
	try {
		return e();
	} finally {
		br(t), Sr(n);
	}
}
function Nt(e, t, n, r = n) {
	e.addEventListener(t, () => Mt(n));
	let i = e[Ee];
	i ? e[Ee] = () => {
		i(), r(!0);
	} : e[Ee] = () => r(!0), jt();
}
function Pt(e) {
	let t = 0, n = yn(0), r;
	return () => {
		Wn() && (U(n), $n(() => (t === 0 && (r = Ur(() => e(() => wn(n)))), t += 1, () => {
			_t(() => {
				--t, t === 0 && (r?.(), r = void 0, wn(n));
			});
		})));
	};
}
var Ft = ue | fe;
function It(e, t, n, r) {
	new Lt(e, t, n, r);
}
var Lt = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = A ? qe : null;
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
	#h = Pt(() => (this.#m = yn(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = xr;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = xr.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = er(() => {
			if (A) {
				let e = this.#t;
				Ye();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#y() : this.#g();
			} else this.#b();
		}, Ft), A && (this.#e = qe);
	}
	#g() {
		try {
			this.#a = nr(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed, { reset: n, invoke_onerror: r } = this.#v(e);
		_t(r), t && (this.#s = nr(() => {
			t(this.#e, () => e, () => n);
		}));
	}
	#v(e) {
		var t = !1, n = !1;
		let r = () => {
			if (t) {
				Ge();
				return;
			}
			t = !0, n && Ve(), this.#s !== null && lr(this.#s, () => {
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
					bt(e, this.#i && this.#i.parent);
				}
			}
		};
	}
	#y() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = nr(() => e(this.#e)), _t(() => {
			var e = this.#c = document.createDocumentFragment(), t = Pn();
			e.append(t), this.#a = this.#S(() => nr(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, lr(this.#o, () => {
				this.#o = null;
			}), this.#x(Qt));
		}));
	}
	#b() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = nr(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				pr(this.#a, e);
				let t = this.#n.pending;
				this.#o = nr(() => t(this.#e));
			} else this.#x(Qt);
		} catch (e) {
			this.error(e);
		}
	}
	#x(e) {
		this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
	}
	defer_effect(e) {
		Tt(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#S(e) {
		var t = xr, n = vr, r = ot;
		Sr(this.#i), br(this.#i), st(this.#i.ctx);
		try {
			return ln.ensure(), e();
		} catch (e) {
			return yt(e), null;
		} finally {
			Sr(t), br(n), st(r);
		}
	}
	#C(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#C(e, t);
			return;
		}
		this.#u += e, this.#u === 0 && (this.#x(t), this.#o && lr(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(e, t) {
		this.#C(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, _t(() => {
			this.#d = !1, this.#m && xn(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), U(this.#m);
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		Qt?.is_fork ? (this.#a && Qt.skip_effect(this.#a), this.#o && Qt.skip_effect(this.#o), this.#s && Qt.skip_effect(this.#s), Qt.oncommit(() => {
			this.#w(e);
		})) : this.#w(e);
	}
	#w(e) {
		this.#a &&= (or(this.#a), null), this.#o &&= (or(this.#o), null), this.#s &&= (or(this.#s), null), A && (Je(this.#t), M(), Je(Xe()));
		let t = this.#n.failed, n = (e) => {
			let { reset: n, invoke_onerror: r } = this.#v(e);
			r(), t && (this.#s = this.#S(() => {
				try {
					return nr(() => {
						var r = xr;
						r.b = this, r.f |= 128, t(this.#e, () => e, () => n);
					});
				} catch (e) {
					return bt(e, this.#i.parent), null;
				}
			}));
		};
		_t(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				bt(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == "object" && t && typeof t.then == "function" ? t.then(n, (e) => bt(e, this.#i && this.#i.parent)) : n(t);
		});
	}
};
function Rt(e, t, n, r) {
	let i = ft() ? Ht : Gt;
	var a = e.filter((e) => !e.settled), o = t.map(i);
	if (n.length === 0 && a.length === 0) {
		r(o);
		return;
	}
	var s = xr, c = zt(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function u(e) {
		if (!(s.f & 16384)) {
			c();
			try {
				r([...o, ...e]);
			} catch (e) {
				bt(e, s);
			}
			Bt();
		}
	}
	var d = Vt();
	if (n.length === 0) {
		l.then(() => u([])).finally(d);
		return;
	}
	function f() {
		Promise.all(n.map((e) => /* @__PURE__ */ Wt(e))).then(u).catch((e) => bt(e, s)).finally(d);
	}
	l ? l.then(() => {
		c(), f(), Bt();
	}) : f();
}
function zt() {
	var e = xr, t = vr, n = ot, r = Qt;
	return function(i = !0) {
		Sr(e), br(t), st(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function Bt(e = !0) {
	Sr(null), br(null), st(null), e && Qt?.deactivate();
}
function Vt() {
	var e = xr, t = e.b, n = Qt, r = !!t?.is_rendered();
	return t?.update_pending_count(1, n), n.increment(r, e), () => {
		t?.update_pending_count(-1, n), n.decrement(r, e);
	};
}
/*#__NO_SIDE_EFFECTS__*/
function Ht(e) {
	var t = 2 | ie;
	return xr !== null && (xr.f |= fe), {
		ctx: ot,
		deps: null,
		effects: null,
		equals: Qe,
		f: t,
		fn: e,
		reactions: null,
		rv: 0,
		v: s,
		wv: 0,
		parent: xr,
		ac: null
	};
}
var Ut = Symbol("obsolete");
/*#__NO_SIDE_EFFECTS__*/
function Wt(e, t, n) {
	let r = xr;
	r === null && Ae();
	var i = void 0, a = yn(s), o = !vr, c = /* @__PURE__ */ new Set();
	return Qn(() => {
		var t = xr, n = ee();
		i = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, (e) => {
				e !== De && n.reject(e);
			}).finally(Bt);
		} catch (e) {
			n.reject(e), Bt();
		}
		var s = Qt;
		if (o) {
			if (t.f & 32768) var l = Vt();
			if (r.b?.is_rendered()) s.async_deriveds.get(t)?.reject(Ut);
			else for (let e of c.values()) e.reject(Ut);
			c.add(n), s.async_deriveds.set(t, n);
		}
		let u = (e, t = void 0) => {
			l?.(), c.delete(n), t !== Ut && (s.activate(), t ? (a.f |= ve, xn(a, t)) : (a.f & 8388608 && (a.f ^= ve), xn(a, e)), s.deactivate());
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), Gn(() => {
		for (let e of c) e.reject(Ut);
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
function F(e) {
	let t = /* @__PURE__ */ Ht(e);
	return wr(t), t;
}
/*#__NO_SIDE_EFFECTS__*/
function Gt(e) {
	let t = /* @__PURE__ */ Ht(e);
	return t.equals = et, t;
}
function Kt(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) or(t[n]);
	}
}
function qt(e) {
	var t, n = xr, r = e.parent;
	if (!gr && r !== null && e.v !== s && r.f & 24576) return He(), e.v;
	Sr(r);
	try {
		e.f &= ~he, Kt(e), t = Ir(e);
	} finally {
		Sr(n);
	}
	return t;
}
function Jt(e) {
	var t = qt(e);
	if (!e.equals(t) && (e.wv = Nr(), (!Qt?.is_fork || e.deps === null) && (Qt === null ? e.v = t : (Qt.capture(e, t, !0), $t?.capture(e, t, !0)), e.deps === null))) {
		St(e, k);
		return;
	}
	gr || (en === null ? Ct(e) : (Wn() || Qt?.is_fork) && en.set(e, t));
}
function Yt(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && Mt(() => {
		t.ac.abort(De), t.ac = null;
	}), t.fn !== null && (t.teardown = T), Rr(t, 0), ir(t));
}
function Xt(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && zr(t);
}
var Zt = null, Qt = null, $t = null, en = null, tn = null, nn = !1, rn = !1, an = null, on = null, sn = 0, cn = 1, ln = class e {
	id = cn++;
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
		Zt === null ? Zt = this : (Zt.#n = this, this.#t = Zt), Zt = this;
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
			for (var r of n.d) St(r, ie), t(r);
			for (r of n.m) St(r, ae), t(r);
		}
		this.#p.add(e);
	}
	#g() {
		this.#e = !0, sn++ > 1e3 && (this.#x(), un());
		for (let e of this.#u) this.#d.delete(e), St(e, ie), this.schedule(e);
		for (let e of this.#d) St(e, ae), this.schedule(e);
		let t = this.#c;
		this.#c = [], this.apply();
		var n = an = [], r = [], i = on = [];
		for (let e of t) try {
			this.#_(e, n, r);
		} catch (t) {
			throw hn(e), this.#h() || this.discard(), t;
		}
		if (Qt = null, i.length > 0) {
			var a = e.ensure();
			for (let e of i) a.schedule(e);
		}
		if (an = null, on = null, this.#h()) {
			this.#b(r), this.#b(n);
			for (let [e, t] of this.#f) mn(e, t);
			i.length > 0 && Qt.#g();
			return;
		}
		let o = this.#v();
		if (o) {
			this.#b(r), this.#b(n), o.#y(this);
			return;
		}
		this.#u.clear(), this.#d.clear();
		for (let e of this.#r) e(this);
		this.#r.clear(), $t = this, fn(r), fn(n), $t = null, this.#s?.resolve();
		var s = Qt;
		if (this.#a === 0 && (this.#c.length === 0 || s !== null) && this.#x(), this.#c.length > 0) if (s !== null) {
			let e = s;
			e.#c.push(...this.#c.filter((t) => !e.#c.includes(t)));
		} else s = this;
		s !== null && s.#g();
	}
	#_(e, t, n) {
		e.f ^= k;
		for (var r = e.first; r !== null;) {
			var i = r.f, a = (i & 96) != 0;
			if (!(a && i & 1024 || i & 8192 || this.#f.has(r)) && r.fn !== null) {
				a ? r.f ^= k : i & 4 ? t.push(r) : Pr(r) && (i & 16 && this.#d.add(r), zr(r));
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
					r & 4194320 && !this.async_deriveds.has(i) && (this.#d.delete(i), St(i, ie), this.schedule(i));
				}
			}
		};
		for (let e of this.current.keys()) t(e);
		this.oncommit(() => e.discard()), e.#x(), Qt = this, this.#g();
	}
	#b(e) {
		for (var t = 0; t < e.length; t += 1) Tt(e[t], this.#u, this.#d);
	}
	capture(e, t, n = !1) {
		e.v !== s && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [t, n]), en?.set(e, t)), this.is_fork || (e.v = t);
	}
	activate() {
		Qt = this;
	}
	deactivate() {
		Qt = null, en = null;
	}
	flush() {
		try {
			rn = !0, Qt = this, this.#g();
		} finally {
			sn = 0, tn = null, an = null, on = null, rn = !1, Qt = null, en = null, _n.clear();
		}
	}
	discard() {
		for (let e of this.#i) e(this);
		this.#i.clear();
		for (let e of this.async_deriveds.values()) e.reject(Ut);
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
		this.#m || (this.#m = !0, _t(() => {
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
		return (this.#s ??= ee()).promise;
	}
	static ensure() {
		if (Qt === null) {
			let t = Qt = new e();
			!rn && !nn && _t(() => {
				t.#e || t.flush();
			});
		}
		return Qt;
	}
	apply() {
		en = null;
	}
	schedule(e) {
		if (tn = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
			e.b.defer_effect(e);
			return;
		}
		for (var t = e; t.parent !== null;) {
			t = t.parent;
			var n = t.f;
			if (an !== null && t === xr && (vr === null || !(vr.f & 2))) return;
			if (n & 96) {
				if (!(n & 1024)) return;
				t.f ^= k;
			}
		}
		this.#c.push(t);
	}
	#x() {
		if (this.linked) {
			var e = this.#t, t = this.#n;
			e === null || (e.#n = t), t === null ? Zt = e : t.#t = e, this.linked = !1;
		}
	}
};
function I(e) {
	var t = nn;
	nn = !0;
	try {
		var n;
		for (e && (Qt !== null && !Qt.is_fork && Qt.flush(), n = e());;) {
			if (vt(), Qt === null) return n;
			Qt.flush();
		}
	} finally {
		nn = t;
	}
}
function un() {
	try {
		Fe();
	} catch (e) {
		bt(e, tn);
	}
}
var dn = null;
function fn(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && Pr(r) && (dn = /* @__PURE__ */ new Set(), zr(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && cr(r), dn?.size > 0)) {
				_n.clear();
				for (let e of dn) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) dn.has(n) && (dn.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || zr(n);
					}
				}
				dn.clear();
			}
		}
		dn = null;
	}
}
function pn(e) {
	Qt.schedule(e);
}
function mn(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), St(e, k);
		for (var n = e.first; n !== null;) mn(n, t), n = n.next;
	}
}
function hn(e) {
	St(e, k);
	for (var t = e.first; t !== null;) hn(t), t = t.next;
}
var gn = /* @__PURE__ */ new Set(), _n = /* @__PURE__ */ new Map(), vn = !1;
function yn(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: Qe,
		rv: 0,
		wv: 0
	};
}
/*#__NO_SIDE_EFFECTS__*/
function L(e, t) {
	let n = yn(e, t);
	return wr(n), n;
}
/*#__NO_SIDE_EFFECTS__*/
function bn(e, t = !1, n = !0) {
	let r = yn(e);
	return t || (r.equals = et), tt && n && ot !== null && ot.l !== null && (ot.l.s ??= []).push(r), r;
}
function R(e, t, n = !1) {
	return vr !== null && (!yr || vr.f & 131072) && ft() && vr.f & 4325394 && (Cr === null || !Cr.has(e)) && Be(), xn(e, n ? En(t) : t, on);
}
function xn(e, t, n = null) {
	if (!e.equals(t)) {
		_n.set(e, gr ? t : e.v);
		var r = ln.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && qt(t), en === null && Ct(t);
		}
		e.wv = Nr(), Tn(e, ie, n), ft() && xr !== null && xr.f & 1024 && !(xr.f & 96) && (Dr === null ? Or([e]) : Dr.push(e)), !r.is_fork && gn.size > 0 && !vn && Sn();
	}
	return t;
}
function Sn() {
	vn = !1;
	for (let e of gn) {
		e.f & 1024 && St(e, ae);
		let t;
		try {
			t = Pr(e);
		} catch {
			t = !0;
		}
		t && zr(e);
	}
	gn.clear();
}
function Cn(e, t = 1) {
	var n = U(e), r = t === 1 ? n++ : n--;
	return R(e, n), r;
}
function wn(e) {
	R(e, e.v + 1);
}
function Tn(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = ft(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === xr)) {
			var l = (c & ie) === 0;
			if (l && St(s, t), c & 131072) gn.add(s);
			else if (c & 2) {
				var u = s;
				en?.delete(u), c & 65536 || (c & 512 && (xr === null || !(xr.f & 2097152)) && (s.f |= he), Tn(u, ae, n));
			} else if (l) {
				var d = s;
				c & 16 && dn !== null && dn.add(d), n === null ? pn(d) : n.push(d);
			}
		}
	}
}
function En(e) {
	if (typeof e != "object" || !e || ye in e) return e;
	let t = S(e);
	if (t !== b && t !== x) return e;
	var n = /* @__PURE__ */ new Map(), r = f(e), i = /* @__PURE__ */ L(0), a = null, o = jr, c = (e) => {
		if (jr === o) return e();
		var t = vr, n = jr;
		br(null), Mr(o);
		var r = e();
		return br(t), Mr(n), r;
	};
	return r && n.set("length", /* @__PURE__ */ L(e.length, a)), new Proxy(e, {
		defineProperty(e, t, r) {
			(!("value" in r) || r.configurable === !1 || r.enumerable === !1 || r.writable === !1) && Re();
			var i = n.get(t);
			return i === void 0 ? c(() => {
				var e = /* @__PURE__ */ L(r.value, a);
				return n.set(t, e), e;
			}) : R(i, r.value, !0), !0;
		},
		deleteProperty(e, t) {
			var r = n.get(t);
			if (r === void 0) {
				if (t in e) {
					let e = c(() => /* @__PURE__ */ L(s, a));
					n.set(t, e), wn(i);
				}
			} else R(r, s), wn(i);
			return !0;
		},
		get(t, r, i) {
			if (r === ye) return e;
			var o = n.get(r), l = r in t;
			if (o === void 0 && (!l || v(t, r)?.writable) && (o = c(() => /* @__PURE__ */ L(En(l ? t[r] : s), a)), n.set(r, o)), o !== void 0) {
				var u = U(o);
				return u === s ? void 0 : u;
			}
			return Reflect.get(t, r, i);
		},
		getOwnPropertyDescriptor(e, t) {
			var r = Reflect.getOwnPropertyDescriptor(e, t);
			if (r && "value" in r) {
				var i = n.get(t);
				i && (r.value = U(i));
			} else if (r === void 0) {
				var a = n.get(t), o = a?.v;
				if (a !== void 0 && o !== s) return {
					enumerable: !0,
					configurable: !0,
					value: o,
					writable: !0
				};
			}
			return r;
		},
		has(e, t) {
			if (t === ye) return !0;
			var r = n.get(t), i = r !== void 0 && r.v !== s || Reflect.has(e, t);
			return (r !== void 0 || xr !== null && (!i || v(e, t)?.writable)) && (r === void 0 && (r = c(() => /* @__PURE__ */ L(i ? En(e[t]) : s, a)), n.set(t, r)), U(r) === s) ? !1 : i;
		},
		set(e, t, o, l) {
			var u = n.get(t), d = t in e;
			if (r && t === "length") for (var f = o; f < u.v; f += 1) {
				var p = n.get(f + "");
				p === void 0 ? f in e && (p = c(() => /* @__PURE__ */ L(s, a)), n.set(f + "", p)) : R(p, s);
			}
			if (u === void 0) (!d || v(e, t)?.writable) && (u = c(() => /* @__PURE__ */ L(void 0, a)), R(u, En(o)), n.set(t, u));
			else {
				d = u.v !== s;
				var m = c(() => En(o));
				R(u, m);
			}
			var h = Reflect.getOwnPropertyDescriptor(e, t);
			if (h?.set && h.set.call(l, o), !d) {
				if (r && typeof t == "string") {
					var g = n.get("length"), _ = Number(t);
					Number.isInteger(_) && _ >= g.v && R(g, _ + 1);
				}
				wn(i);
			}
			return !0;
		},
		ownKeys(e) {
			U(i);
			var t = Reflect.ownKeys(e).filter((e) => {
				var t = n.get(e);
				return t === void 0 || t.v !== s;
			});
			for (var [r, a] of n) a.v !== s && !(r in e) && t.push(r);
			return t;
		},
		setPrototypeOf() {
			ze();
		}
	});
}
function Dn(e) {
	try {
		if (typeof e == "object" && e && ye in e) return e[ye];
	} catch {}
	return e;
}
function On(e, t) {
	return Object.is(Dn(e), Dn(t));
}
var kn, An, jn, Mn;
function Nn() {
	if (kn === void 0) {
		kn = window, An = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		jn = v(t, "firstChild").get, Mn = v(t, "nextSibling").get, C(e) && (e[Ce] = void 0, e[Se] = null, e[we] = void 0, e.__e = void 0), C(n) && (n[Te] = void 0);
	}
}
function Pn(e = "") {
	return document.createTextNode(e);
}
/*@__NO_SIDE_EFFECTS__*/
function Fn(e) {
	return jn.call(e);
}
/*@__NO_SIDE_EFFECTS__*/
function In(e) {
	return Mn.call(e);
}
function z(e, t) {
	if (!A) return /* @__PURE__ */ Fn(e);
	var n = /* @__PURE__ */ Fn(qe);
	if (n === null) n = qe.appendChild(Pn());
	else if (t && n.nodeType !== 3) {
		var r = Pn();
		return n?.before(r), Je(r), r;
	}
	return t && Bn(n), Je(n), n;
}
function B(e, t = !1) {
	if (!A) {
		var n = /* @__PURE__ */ Fn(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ In(n) : n;
	}
	if (t) {
		if (qe?.nodeType !== 3) {
			var r = Pn();
			return qe?.before(r), Je(r), r;
		}
		Bn(qe);
	}
	return qe;
}
function V(e, t = 1, n = !1) {
	let r = A ? qe : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ In(r);
	if (!A) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = Pn();
			return r === null ? i?.after(a) : r.before(a), Je(a), a;
		}
		Bn(r);
	}
	return Je(r), r;
}
function Ln(e) {
	e.textContent = "";
}
function Rn() {
	return !1;
}
function zn(e, t, n) {
	return t == null || t === "http://www.w3.org/1999/xhtml" ? n ? document.createElement(e, { is: n }) : document.createElement(e) : n ? document.createElementNS(t, e, { is: n }) : document.createElementNS(t, e);
}
function Bn(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
function Vn(e) {
	xr === null && (vr === null && Pe(e), Ne()), gr && Me(e);
}
function Hn(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Un(e, t) {
	var n = xr;
	n !== null && n.f & 8192 && (e |= oe);
	var r = {
		ctx: ot,
		deps: null,
		nodes: null,
		f: e | ie | 512,
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
	Qt?.register_created_effect(r);
	var i = r;
	if (e & 4) an === null ? ln.ensure().schedule(r) : an.push(r);
	else if (t !== null) {
		try {
			zr(r);
		} catch (e) {
			throw or(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= ue));
	}
	if (i !== null && (i.parent = n, n !== null && Hn(i, n), vr !== null && vr.f & 2 && !(e & 64))) {
		var a = vr;
		(a.effects ??= []).push(i);
	}
	return r;
}
function Wn() {
	return vr !== null && !yr;
}
function Gn(e) {
	let t = Un(8, null);
	return St(t, k), t.teardown = e, t;
}
function Kn(e) {
	Vn("$effect");
	var t = xr.f;
	if (!vr && t & 32 && ot !== null && !ot.i) {
		var n = ot;
		(n.e ??= []).push(e);
	} else return qn(e);
}
function qn(e) {
	return Un(4 | pe, e);
}
function Jn(e) {
	return Vn("$effect.pre"), Un(8 | pe, e);
}
function Yn(e) {
	ln.ensure();
	let t = Un(64 | fe, e);
	return () => {
		or(t);
	};
}
function Xn(e) {
	ln.ensure();
	let t = Un(64 | fe, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? lr(t, () => {
			or(t), n(void 0);
		}) : (or(t), n(void 0));
	});
}
function Zn(e) {
	return Un(4, e);
}
function Qn(e) {
	return Un(_e | fe, e);
}
function $n(e, t = 0) {
	return Un(8 | t, e);
}
function H(e, t = [], n = [], r = []) {
	Rt(r, t, n, (t) => {
		Un(8, () => {
			e(...t.map(U));
		});
	});
}
function er(e, t = 0) {
	return Un(16 | t, e);
}
function tr(e, t = 0) {
	return Un(re | t, e);
}
function nr(e) {
	return Un(32 | fe, e);
}
function rr(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = gr, n = vr;
		_r(!0), br(null);
		try {
			t.call(null);
		} finally {
			_r(e), br(n);
		}
	}
}
function ir(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && Mt(() => {
			e.abort(De);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : or(n, t), n = r;
	}
}
function ar(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || or(t), t = n;
	}
}
function or(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (sr(e.nodes.start, e.nodes.end), n = !0), e.f |= le, ir(e, t && !n), Rr(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	rr(e), e.f ^= le, e.f |= se;
	var i = e.parent;
	i !== null && i.first !== null && cr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function sr(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ In(e);
		e.remove(), e = n;
	}
}
function cr(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function lr(e, t, n = !0) {
	var r = [];
	ur(e, r, !0);
	var i = () => {
		n && or(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function ur(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= oe;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = (i.f & 65536) != 0 || (i.f & 32) != 0 && (e.f & 16) != 0;
				ur(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function dr(e) {
	fr(e, !0);
}
function fr(e, t) {
	if (e.f & 8192) {
		e.f ^= oe, e.f & 1024 || (St(e, ie), ln.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = (n.f & 65536) != 0 || (n.f & 32) != 0;
			fr(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function pr(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ In(n);
		t.append(n), n = i;
	}
}
var mr = null, hr = !1, gr = !1;
function _r(e) {
	gr = e;
}
var vr = null, yr = !1;
function br(e) {
	vr = e;
}
var xr = null;
function Sr(e) {
	xr = e;
}
var Cr = null;
function wr(e) {
	vr !== null && (Cr ??= /* @__PURE__ */ new Set()).add(e);
}
var Tr = null, Er = 0, Dr = null;
function Or(e) {
	Dr = e;
}
var kr = 1, Ar = 0, jr = Ar;
function Mr(e) {
	jr = e;
}
function Nr() {
	return ++kr;
}
function Pr(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~he), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (Pr(a) && Jt(a), a.wv > e.wv) return !0;
		}
		t & 512 && en === null && St(e, k);
	}
	return !1;
}
function Fr(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(Cr !== null && Cr.has(e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? Fr(a, t, !1) : t === a && (n ? St(a, ie) : a.f & 1024 && St(a, ae), pn(a));
	}
}
function Ir(e) {
	var t = Tr, n = Er, r = Dr, i = vr, a = Cr, o = ot, s = yr, c = jr, l = e.f;
	Tr = null, Er = 0, Dr = null, vr = l & 96 ? null : e, Cr = null, st(e.ctx), yr = !1, jr = ++Ar, e.ac !== null && (Mt(() => {
		e.ac.abort(De);
	}), e.ac = null);
	try {
		e.f |= ge;
		var u = e.fn, d = u();
		e.f |= ce;
		var f = e.deps, p = Qt?.is_fork;
		if (Tr !== null) {
			var m;
			if (p || Rr(e, Er), f !== null && Er > 0) for (f.length = Er + Tr.length, m = 0; m < Tr.length; m++) f[Er + m] = Tr[m];
			else e.deps = f = Tr;
			if (Wn() && e.f & 512) for (m = Er; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && Er < f.length && (Rr(e, Er), f.length = Er);
		if (ft() && Dr !== null && !yr && f !== null && !(e.f & 6146)) for (m = 0; m < Dr.length; m++) Fr(Dr[m], e);
		if (i !== null && i !== e) {
			if (Ar++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Ar;
			if (t !== null) for (let e of t) e.rv = Ar;
			Dr !== null && (r === null ? r = Dr : r.push(...Dr));
		}
		return e.f & 8388608 && (e.f ^= ve), d;
	} catch (e) {
		return yt(e);
	} finally {
		e.f ^= ge, Tr = t, Er = n, Dr = r, vr = i, Cr = a, st(o), yr = s, jr = c;
	}
}
function Lr(e, t) {
	let n = t.reactions;
	if (n !== null) {
		var r = p.call(n, e);
		if (r !== -1) {
			var i = n.length - 1;
			i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
		}
	}
	if (n === null && t.f & 2 && (Tr === null || !m.call(Tr, t))) {
		var a = t;
		a.f & 512 && (a.f ^= 512, a.f &= ~he), a.v !== s && Ct(a), a.ac !== null && Mt(() => {
			a.ac.abort(De), a.ac = null, St(a, ie);
		}), Yt(a), Rr(a, 0);
	}
}
function Rr(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Lr(e, n[r]);
}
function zr(e) {
	var t = e.f;
	if (!(t & 16384)) {
		St(e, k);
		var n = xr, r = hr;
		xr = e, hr = (t & 96) == 0;
		try {
			t & 16777232 ? ar(e) : ir(e), rr(e);
			var i = Ir(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = kr;
		} finally {
			hr = r, xr = n;
		}
	}
}
async function Br() {
	await Promise.resolve(), I();
}
function U(e) {
	var t = (e.f & 2) != 0;
	if (mr?.add(e), vr !== null && !yr && !(xr !== null && xr.f & 16384) && (Cr === null || !Cr.has(e))) {
		var n = vr.deps;
		if (vr.f & 2097152) e.rv < Ar && (e.rv = Ar, Tr === null && n !== null && n[Er] === e ? Er++ : Tr === null ? Tr = [e] : Tr.push(e));
		else {
			vr.deps ??= [], m.call(vr.deps, e) || vr.deps.push(e);
			var r = e.reactions;
			r === null ? e.reactions = [vr] : m.call(r, vr) || r.push(vr);
		}
	}
	if (gr && _n.has(e)) return _n.get(e);
	if (t) {
		var i = e;
		if (gr) {
			var a = i.v;
			return (!(i.f & 1024) && i.reactions !== null || Hr(i)) && (a = qt(i)), _n.set(i, a), a;
		}
		var o = (i.f & 512) == 0 && !yr && vr !== null && (hr || (vr.f & 512) != 0), s = (i.f & ce) === 0;
		Pr(i) && (o && (i.f |= 512), Jt(i)), o && !s && (Xt(i), Vr(i));
	}
	if (en?.has(e)) return en.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function Vr(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (Xt(t), Vr(t));
}
function Hr(e) {
	if (e.v === s) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (_n.has(t) || t.f & 2 && Hr(t)) return !0;
	return !1;
}
function Ur(e) {
	var t = yr;
	try {
		return yr = !0, e();
	} finally {
		yr = t;
	}
}
function Wr(e) {
	if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
		if (ye in e) Gr(e);
		else if (!Array.isArray(e)) for (let t in e) {
			let n = e[t];
			typeof n == "object" && n && ye in n && Gr(n);
		}
	}
}
function Gr(e, t = /* @__PURE__ */ new Set()) {
	if (typeof e == "object" && e && !(e instanceof EventTarget) && !t.has(e)) {
		t.add(e), e instanceof Date && e.getTime();
		for (let n in e) try {
			Gr(e[n], t);
		} catch {}
		let n = S(e);
		if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
			let t = y(n);
			for (let n in t) {
				let r = t[n].get;
				if (r) try {
					r.call(e);
				} catch {}
			}
		}
	}
}
var Kr = Symbol("events"), qr = /* @__PURE__ */ new Set(), Jr = /* @__PURE__ */ new Set();
function Yr(e, t, n, r = {}) {
	function i(e) {
		if (r.capture || ti.call(t, e), !e.cancelBubble) return Mt(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? _t(() => {
		t.addEventListener(e, i, r);
	}) : t.addEventListener(e, i, r), i;
}
function Xr(e, t, n, r = {}) {
	var i = Yr(t, e, n, r);
	return () => {
		e.removeEventListener(t, i, r);
	};
}
function Zr(e, t, n, r, i) {
	var a = {
		capture: r,
		passive: i
	}, o = Yr(e, t, n, a);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && Gn(() => {
		t.removeEventListener(e, o, a);
	});
}
function Qr(e, t, n) {
	(t[Kr] ??= {})[e] = n;
}
function $r(e) {
	for (var t = 0; t < e.length; t++) qr.add(e[t]);
	for (var n of Jr) n(e);
}
var ei = null;
function ti(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	ei = e;
	var o = 0, s = ei === e && e[Kr];
	if (s) {
		var c = i.indexOf(s);
		if (c !== -1 && (t === document || t === window)) {
			e[Kr] = t;
			return;
		}
		var l = i.indexOf(t);
		if (l === -1) return;
		c <= l && (o = c);
	}
	if (a = i[o] || e.target, a !== t) {
		_(e, "currentTarget", {
			configurable: !0,
			get() {
				return a || n;
			}
		});
		var u = vr, d = xr;
		br(null), Sr(null);
		try {
			for (var f, p = []; a !== null && a !== t;) {
				try {
					var m = a[Kr]?.[r];
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
			e[Kr] = t, delete e.currentTarget, br(u), Sr(d);
		}
	}
}
var ni = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function ri(e) {
	return ni?.createHTML(e) ?? e;
}
function ii(e) {
	var t = zn("template");
	return t.innerHTML = ri(e.replaceAll("<!>", "<!---->")), t.content;
}
function ai(e, t) {
	var n = xr;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/*#__NO_SIDE_EFFECTS__*/
function W(e, t) {
	var n = (t & 1) != 0, r = (t & 2) != 0, i, a = !e.startsWith("<!>");
	return () => {
		if (A) return ai(qe, null), qe;
		i === void 0 && (i = ii(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ Fn(i)));
		var t = r || An ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ Fn(t), s = t.lastChild;
			ai(o, s);
		} else ai(t, t);
		return t;
	};
}
/*#__NO_SIDE_EFFECTS__*/
function oi(e, t, n = "svg") {
	var r = !e.startsWith("<!>"), i = (t & 1) != 0, a = `<${n}>${r ? e : "<!>" + e}</${n}>`, o;
	return () => {
		if (A) return ai(qe, null), qe;
		if (!o) {
			var e = /* @__PURE__ */ Fn(ii(a));
			if (i) for (o = document.createDocumentFragment(); /* @__PURE__ */ Fn(e);) o.appendChild(/* @__PURE__ */ Fn(e));
			else o = /* @__PURE__ */ Fn(e);
		}
		var t = o.cloneNode(!0);
		if (i) {
			var n = /* @__PURE__ */ Fn(t), r = t.lastChild;
			ai(n, r);
		} else ai(t, t);
		return t;
	};
}
/*#__NO_SIDE_EFFECTS__*/
function G(e, t) {
	return /* @__PURE__ */ oi(e, t, "svg");
}
function si(e = "") {
	if (!A) {
		var t = Pn(e + "");
		return ai(t, t), t;
	}
	var n = qe;
	return n.nodeType === 3 ? Bn(n) : (n.before(n = Pn()), Je(n)), ai(n, n), n;
}
function K() {
	if (A) return ai(qe, null), qe;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = Pn();
	return e.append(t, n), ai(t, n), e;
}
function q(e, t) {
	if (A) {
		var n = xr;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = qe), Ye();
		return;
	}
	e !== null && e.before(t);
}
function ci() {
	if (A && qe && qe.nodeType === 8 && qe.textContent?.startsWith("$")) {
		let e = qe.textContent.substring(1);
		return Ye(), e;
	}
	return (window.__svelte ??= {}).uid ??= 1, `c${window.__svelte.uid++}`;
}
function li(e) {
	return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
var ui = [
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
function di(e) {
	return ui.includes(e);
}
var fi = /* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split("."), pi = {
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
function mi(e) {
	return e = e.toLowerCase(), pi[e] ?? e;
}
[...fi];
var hi = ["touchstart", "touchmove"];
function gi(e) {
	return hi.includes(e);
}
var _i = [
	"textarea",
	"script",
	"style",
	"title"
];
function vi(e) {
	return _i.includes(e);
}
function yi(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e[Te] ??= e.nodeValue) && (e[Te] = n, e.nodeValue = `${n}`);
}
function bi(e, t) {
	return Ci(e, t);
}
function xi(e, t) {
	Nn(), t.intro = t.intro ?? !1;
	let n = t.target, r = A, i = qe;
	try {
		for (var a = /* @__PURE__ */ Fn(n); a && (a.nodeType !== 8 || a.data !== "[");) a = /* @__PURE__ */ In(a);
		if (!a) throw o;
		Ke(!0), Je(a);
		let r = Ci(e, {
			...t,
			anchor: a
		});
		return Ke(!1), r;
	} catch (r) {
		if (r instanceof Error && r.message.split("\n").some((e) => e.startsWith("https://svelte.dev/e/"))) throw r;
		return r !== o && console.warn("Failed to hydrate: ", r), t.recover === !1 && Ie(), Nn(), Ln(n), Ke(!1), bi(e, t);
	} finally {
		Ke(r), Je(i);
	}
}
var Si = /* @__PURE__ */ new Map();
function Ci(e, { target: t, anchor: n, props: r = {}, events: i, context: a, intro: s = !0, transformError: c }) {
	Nn();
	var l = void 0, u = Xn(() => {
		var s = n ?? t.appendChild(Pn());
		It(s, { pending: () => {} }, (t) => {
			N({});
			var n = ot;
			if (a && (n.c = a), i && (r.$$events = i), A && ai(t, null), l = e(t, r) || {}, A && (xr.nodes.end = qe, qe === null || qe.nodeType !== 8 || qe.data !== "]")) throw Ue(), o;
			P();
		}, c);
		var u = /* @__PURE__ */ new Set(), d = (e) => {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (!u.has(r)) {
					u.add(r);
					var i = gi(r);
					for (let e of [t, document]) {
						var a = Si.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), Si.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, ti, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return d(h(qr)), Jr.add(d), () => {
			for (var e of u) for (let n of [t, document]) {
				var r = Si.get(n), i = r.get(e);
				--i == 0 ? (n.removeEventListener(e, ti), r.delete(e), r.size === 0 && Si.delete(n)) : r.set(e, i);
			}
			Jr.delete(d), s !== n && s.parentNode?.removeChild(s);
		};
	});
	return wi.set(l, u), l;
}
var wi = /* @__PURE__ */ new WeakMap();
function Ti(e, t) {
	let n = wi.get(e);
	return n ? (wi.delete(e), n(t)) : Promise.resolve();
}
var Ei = class {
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
			if (n) dr(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (dr(r.effect), this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (or(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e)) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						pr(r, t), t.append(Pn()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else or(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), lr(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (or(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = Qt, r = Rn();
		if (t && !this.#t.has(e) && !this.#n.has(e)) if (r) {
			var i = document.createDocumentFragment(), a = Pn();
			i.append(a), this.#n.set(e, {
				effect: nr(() => t(a)),
				fragment: i
			});
		} else this.#t.set(e, nr(() => t(this.anchor)));
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else A && (this.anchor = qe), this.#a(n);
	}
};
function Di(e, t, ...n) {
	var r = new Ei(e);
	er(() => {
		let e = t() ?? null;
		r.ensure(e, e && ((t) => e(t, ...n)));
	}, ue);
}
function Oi(e) {
	ot === null && ke("onMount"), tt && ot.l !== null ? Ai(ot).m.push(e) : Kn(() => {
		let t = Ur(e);
		if (typeof t == "function") return t;
	});
}
function ki(e) {
	ot === null && ke("onDestroy"), Oi(() => () => Ur(e));
}
function Ai(e) {
	var t = e.l;
	return t.u ??= {
		a: [],
		b: [],
		m: []
	};
}
function ji() {
	return Symbol(d);
}
function J(e, t, n = !1) {
	var r;
	A && (r = qe, Ye());
	var i = new Ei(e), a = n ? ue : 0;
	function o(e, t) {
		if (A) {
			var n = Ze(r);
			if (e !== parseInt(n.substring(1))) {
				var a = Xe();
				Je(a), i.anchor = a, Ke(!1), i.ensure(e, t), Ke(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	er(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
var Mi = Symbol("NaN");
function Ni(e, t, n) {
	A && Ye();
	var r = new Ei(e), i = !ft();
	er(() => {
		var e = t();
		e !== e && (e = Mi), i && typeof e == "object" && e && (e = {}), r.ensure(e, n);
	});
}
function Pi(e, t) {
	A && Je(/* @__PURE__ */ Fn(e)), $n(() => {
		var n = t();
		for (var r in n) {
			var i = n[r];
			i ? e.style.setProperty(r, i) : e.style.removeProperty(r);
		}
	});
}
function Fi(e, t) {
	return t;
}
function Ii(e, t, n) {
	for (var r = [], i = t.length, a, o = t.length, s = 0; s < i; s++) {
		let n = t[s];
		lr(n, () => {
			if (a) {
				if (a.pending.delete(n), a.done.add(n), a.pending.size === 0) {
					var t = e.outrogroups;
					Li(e, h(a.done)), t.delete(a), t.size === 0 && (e.outrogroups = null);
				}
			} else --o;
		}, !1);
	}
	if (o === 0) {
		var c = r.length === 0 && n !== null;
		if (c) {
			var l = n, u = l.parentNode;
			Ln(u), u.append(l), e.items.clear();
		}
		Li(e, t, !c);
	} else a = {
		pending: new Set(t),
		done: /* @__PURE__ */ new Set()
	}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(a);
}
function Li(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = /* @__PURE__ */ new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? (a.f |= me, pr(a, document.createDocumentFragment())) : or(t[i], n);
	}
}
var Ri;
function zi(e, t, n, r, i, a = null) {
	var o = e, s = /* @__PURE__ */ new Map();
	if (t & 4) {
		var c = e;
		o = A ? Je(/* @__PURE__ */ Fn(c)) : c.appendChild(Pn());
	}
	A && Ye();
	var l = null, u = /* @__PURE__ */ Gt(() => {
		var e = n();
		return f(e) ? e : e == null ? [] : h(e);
	}), d, p = /* @__PURE__ */ new Map(), m = !0;
	function g(e) {
		v.effect.f & 16384 || (v.pending.delete(e), v.fallback = l, Vi(v, d, o, t, r), l !== null && (d.length === 0 ? l.f & 33554432 ? (l.f ^= me, Ui(l, null, o)) : dr(l) : lr(l, () => {
			l = null;
		})));
	}
	function _(e) {
		v.pending.delete(e);
	}
	var v = {
		effect: er(() => {
			d = U(u);
			var e = d.length;
			let c = !1;
			A && Ze(o) === "[!" != (e === 0) && (o = Xe(), Je(o), Ke(!1), c = !0);
			for (var f = /* @__PURE__ */ new Set(), h = Qt, v = Rn(), y = 0; y < e; y += 1) {
				A && qe.nodeType === 8 && qe.data === "]" && (o = qe, c = !0, Ke(!1));
				var b = d[y], x = r(b, y), S = m ? null : s.get(x);
				S ? (S.v && xn(S.v, b), S.i && xn(S.i, y), v && h.unskip_effect(S.e)) : (S = Hi(s, m ? o : Ri ??= Pn(), b, x, y, i, t, n), m || (S.e.f |= me), s.set(x, S)), f.add(x);
			}
			if (e === 0 && a && !l && (m ? l = nr(() => a(o)) : (l = nr(() => a(Ri ??= Pn())), l.f |= me)), e > f.size && je("", "", ""), A && e > 0 && Je(Xe()), !m) if (p.set(h, f), v) {
				for (let [e, t] of s) f.has(e) || h.skip_effect(t.e);
				h.oncommit(g), h.ondiscard(_);
			} else g(h);
			c && Ke(!0), U(u);
		}),
		flags: t,
		items: s,
		pending: p,
		outrogroups: null,
		fallback: l
	};
	m = !1, A && (o = qe);
}
function Bi(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function Vi(e, t, n, r, i) {
	var a = (r & 8) != 0, o = t.length, s = e.items, c = Bi(e.effect.first), l, u = null, d, f = [], p = [], m, g, _, v;
	if (a) for (v = 0; v < o; v += 1) m = t[v], g = i(m, v), _ = s.get(g).e, _.f & 33554432 || (_.nodes?.a?.measure(), (d ??= /* @__PURE__ */ new Set()).add(_));
	for (v = 0; v < o; v += 1) {
		if (m = t[v], g = i(m, v), _ = s.get(g).e, e.outrogroups !== null) for (let t of e.outrogroups) t.pending.delete(_), t.done.delete(_);
		if (_.f & 8192 && (dr(_), a && (_.nodes?.a?.unfix(), (d ??= /* @__PURE__ */ new Set()).delete(_))), _.f & 33554432) if (_.f ^= me, _ === c) Ui(_, null, n);
		else {
			var y = u ? u.next : c;
			_ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), Wi(e, u, _), Wi(e, _, y), Ui(_, y, n), u = _, f = [], p = [], c = Bi(u.next);
			continue;
		}
		if (_ !== c) {
			if (l !== void 0 && l.has(_)) {
				if (f.length < p.length) {
					var b = p[0], x;
					u = b.prev;
					var S = f[0], C = f[f.length - 1];
					for (x = 0; x < f.length; x += 1) Ui(f[x], b, n);
					for (x = 0; x < p.length; x += 1) l.delete(p[x]);
					Wi(e, S.prev, C.next), Wi(e, u, S), Wi(e, C, b), c = b, u = C, --v, f = [], p = [];
				} else l.delete(_), Ui(_, c, n), Wi(e, _.prev, _.next), Wi(e, _, u === null ? e.effect.first : u.next), Wi(e, u, _), u = _;
				continue;
			}
			for (f = [], p = []; c !== null && c !== _;) (l ??= /* @__PURE__ */ new Set()).add(c), p.push(c), c = Bi(c.next);
			if (c === null) continue;
		}
		_.f & 33554432 || f.push(_), u = _, c = Bi(_.next);
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups) t.pending.size === 0 && (Li(e, h(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (c !== null || l !== void 0) {
		var w = [];
		if (l !== void 0) for (_ of l) _.f & 8192 || w.push(_);
		for (; c !== null;) !(c.f & 8192) && c !== e.fallback && w.push(c), c = Bi(c.next);
		var T = w.length;
		if (T > 0) {
			var E = r & 4 && o === 0 ? n : null;
			if (a) {
				for (v = 0; v < T; v += 1) w[v].nodes?.a?.measure();
				for (v = 0; v < T; v += 1) w[v].nodes?.a?.fix();
			}
			Ii(e, w, E);
		}
	}
	a && _t(() => {
		if (d !== void 0) for (_ of d) _.nodes?.a?.apply();
	});
}
function Hi(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? yn(n) : /* @__PURE__ */ bn(n, !1, !1) : null, l = o & 2 ? yn(i) : null;
	return {
		v: c,
		i: l,
		e: nr(() => (a(t, c ?? n, l ?? i, s), () => {
			e.delete(r);
		}))
	};
}
function Ui(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
		var o = /* @__PURE__ */ In(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function Wi(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function Gi(e, t, n = !1, r = !1, i = !1, a = !1) {
	var s = e, c = "";
	if (n) {
		var d = e;
		A && (s = Je(/* @__PURE__ */ Fn(d)));
	}
	H(() => {
		var e = xr;
		if (c === (c = t() ?? "")) {
			A && Ye();
			return;
		}
		if (n && !A) {
			e.nodes = null, d.innerHTML = c, c !== "" && ai(/* @__PURE__ */ Fn(d), d.lastChild);
			return;
		}
		if (e.nodes !== null && (sr(e.nodes.start, e.nodes.end), e.nodes = null), c !== "") {
			if (A) {
				for (var a = qe.data, f = Ye(), p = f; f !== null && (f.nodeType !== 8 || f.data !== "");) p = f, f = /* @__PURE__ */ In(f);
				if (f === null) throw Ue(), o;
				ai(qe, p), s = Je(f);
				return;
			}
			var m = zn(r ? "svg" : i ? "math" : "template", r ? l : i ? u : void 0);
			m.innerHTML = c;
			var h = r || i ? m : m.content;
			if (ai(/* @__PURE__ */ Fn(h), h.lastChild), r || i) for (; /* @__PURE__ */ Fn(h);) s.before(/* @__PURE__ */ Fn(h));
			else s.before(h);
		}
	});
}
function Ki(e, t, n) {
	var r;
	A && (r = qe, Ye());
	var i = new Ei(e);
	er(() => {
		var e = t() ?? null;
		if (A && Ze(r) === "[" != (e !== null)) {
			var a = Xe();
			Je(a), i.anchor = a, Ke(!1), i.ensure(e, e && ((t) => n(t, e))), Ke(!0);
			return;
		}
		i.ensure(e, e && ((t) => n(t, e)));
	}, ue);
}
function qi(e, t, n, r, i, a) {
	let o = A;
	A && Ye();
	var s = null;
	A && qe.nodeType === 1 && (s = qe, Ye());
	var c = A ? qe : e, u = new Ei(c, !1);
	er(() => {
		let e = t() || null;
		var a = i ? i() : n || e === "svg" ? l : void 0;
		if (e === null) {
			u.ensure(null, null);
			return;
		}
		return u.ensure(e, (t) => {
			if (e) {
				if (s = A ? s : zn(e, a), ai(s, s), r) {
					var n = null;
					A && vi(e) && s.append(n = document.createComment(""));
					var i = A ? /* @__PURE__ */ Fn(s) : s.appendChild(Pn());
					A && (i === null ? Ke(!1) : Je(i)), r(s, i), n?.remove();
				}
				xr.nodes.end = s, t.before(s);
			}
			A && Je(t);
		}), () => {};
	}, ue), Gn(() => {}), o && (Ke(!0), Je(c));
}
function Ji(e, t) {
	let n = null, r = A;
	var i;
	if (A) {
		n = qe;
		for (var a = /* @__PURE__ */ Fn(document.head); a !== null && (a.nodeType !== 8 || a.data !== e);) a = /* @__PURE__ */ In(a);
		if (a === null) Ke(!1);
		else {
			var o = /* @__PURE__ */ In(a);
			a.remove(), Je(o);
		}
	}
	A || (i = document.head.appendChild(Pn()));
	try {
		er(() => {
			var e = nr(() => t(i));
			e.f |= de;
		});
	} finally {
		r && (Ke(!0), Je(n));
	}
}
function Yi(e, t) {
	Zn(() => {
		var n = e.getRootNode(), r = n.host ? n : n.head ?? n.ownerDocument.head;
		if (!r.querySelector("#" + t.hash)) {
			let e = zn("style");
			e.id = t.hash, e.textContent = t.code, r.appendChild(e);
		}
	});
}
function Xi(e, t, n) {
	Zn(() => {
		var r = Ur(() => t(e, n?.()) || {});
		if (n && r?.update) {
			var i = !1, a = {};
			$n(() => {
				var e = n();
				Wr(e), i && $e(a, e) && (a = e, r.update(e));
			}), i = !0;
		}
		if (r?.destroy) return () => r.destroy();
	});
}
function Zi(e, t) {
	var n = void 0, r;
	tr(() => {
		n !== (n = t()) && (r &&= (or(r), null), n && (r = nr(() => {
			Zn(() => n(e));
		})));
	});
}
function Qi(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var i = e.length;
		for (t = 0; t < i; t++) e[t] && (n = Qi(e[t])) && (r && (r += " "), r += n);
	} else for (n in e) e[n] && (r && (r += " "), r += n);
	return r;
}
function $i() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = Qi(e)) && (r && (r += " "), r += t);
	return r;
}
function ea(e) {
	return typeof e == "object" ? $i(e) : e ?? "";
}
var ta = [..." 	\n\r\f\xA0\v﻿"];
function na(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || ta.includes(r[o - 1])) && (s === r.length || ta.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
function ra(e, t = !1) {
	var n = t ? " !important;" : ";", r = "";
	for (var i of Object.keys(e)) {
		var a = e[i];
		a != null && a !== "" && (r += " " + i + ": " + a + n);
	}
	return r;
}
function ia(e) {
	return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function aa(e, t) {
	if (t) {
		var n = "", r, i;
		if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
			e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
			var a = !1, o = 0, s = !1, c = [];
			r && c.push(...Object.keys(r).map(ia)), i && c.push(...Object.keys(i).map(ia));
			var l = 0, u = -1;
			let t = e.length;
			for (var d = 0; d < t; d++) {
				var f = e[d];
				if (s ? f === "/" && e[d - 1] === "*" && (s = !1) : a ? a === f && (a = !1) : f === "/" && e[d + 1] === "*" ? s = !0 : f === "\"" || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !s && a === !1 && o === 0) {
					if (f === ":" && u === -1) u = d;
					else if (f === ";" || d === t - 1) {
						if (u !== -1) {
							var p = ia(e.substring(l, u).trim());
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
		return r && (n += ra(r)), i && (n += ra(i, !0)), n = n.trim(), n === "" ? null : n;
	}
	return e == null ? null : String(e);
}
function oa(e, t, n, r, i, a) {
	var o = e[Ce];
	if (A || o !== n || o === void 0) {
		var s = na(n, r, a);
		(!A || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e[Ce] = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
function sa(e, t = {}, n, r) {
	for (var i in n) {
		var a = n[i];
		t[i] !== a && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, r));
	}
}
function ca(e, t, n, r) {
	var i = e[we];
	if (A || i !== t) {
		var a = aa(t, r);
		(!A || a !== e.getAttribute("style")) && (a == null ? e.removeAttribute("style") : e.style.cssText = a), e[we] = t;
	} else r && (Array.isArray(r) ? (sa(e, n?.[0], r[0]), sa(e, n?.[1], r[1], "important")) : sa(e, n, r));
	return r;
}
function la(e, t, n = !1) {
	if (e.multiple) {
		if (t == null) return;
		if (!f(t)) return We();
		for (var r of e.options) r.selected = t.includes(da(r));
		return;
	}
	for (r of e.options) if (On(da(r), t)) {
		r.selected = !0;
		return;
	}
	(!n || t !== void 0) && (e.selectedIndex = -1);
}
function ua(e) {
	var t = new MutationObserver(() => {
		"__value" in e && la(e, e.__value);
	});
	t.observe(e, {
		childList: !0,
		subtree: !0,
		attributes: !0,
		attributeFilter: ["value"]
	}), Gn(() => {
		t.disconnect();
	});
}
function da(e) {
	return "__value" in e ? e.__value : e.value;
}
var fa = Symbol("class"), pa = Symbol("style"), ma = Symbol("is custom element"), ha = Symbol("is html"), ga = Oe ? "link" : "LINK", _a = Oe ? "input" : "INPUT", va = Oe ? "option" : "OPTION", ya = Oe ? "select" : "SELECT", ba = Oe ? "progress" : "PROGRESS";
function xa(e) {
	if (A) {
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
		e[Ee] = n, _t(n), jt();
	}
}
function Sa(e, t) {
	var n = Da(e);
	n.value === (n.value = t ?? void 0) || e.value === t && (t !== 0 || e.nodeName !== ba) || (e.value = t ?? "");
}
function Ca(e, t) {
	var n = Da(e);
	n.checked !== (n.checked = t ?? void 0) && (e.checked = t);
}
function wa(e, t) {
	t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function Y(e, t, n, r) {
	var i = Da(e);
	A && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === ga) || i[t] !== (i[t] = n) && (t === "loading" && (e[xe] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && ka(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Ta(e, t, n, r, i = !1, a = !1) {
	if (A && i && e.nodeName === _a) {
		var o = e;
		(o.type === "checkbox" ? "defaultChecked" : "defaultValue") in n || xa(o);
	}
	var c = Da(e), l = c[ma], u = !c[ha];
	let d = A && l;
	d && Ke(!1);
	var f = t || {}, p = e.nodeName === va;
	for (var m in t) m in n || (n[m] = null);
	n.class ? n.class = ea(n.class) : (r || n[fa]) && (n.class = null), n[pa] && (n.style ??= null);
	var h = ka(e);
	if (e.nodeName === _a && "type" in n && ("value" in n || "__value" in n)) {
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
			oa(e, e.namespaceURI === "http://www.w3.org/1999/xhtml", o, r, t?.[fa], n[fa]), f[i] = o, f[fa] = n[fa];
			continue;
		}
		if (i === "style") {
			ca(e, o, t?.[pa], n[pa]), f[i] = o, f[pa] = n[pa];
			continue;
		}
		var _ = f[i];
		if (!(o === _ && !(o === void 0 && e.hasAttribute(i)))) {
			f[i] = o;
			var v = i[0] + i[1];
			if (v !== "$$") if (v === "on") {
				let t = {}, n = "$$" + i, r = i.slice(2);
				var y = di(r);
				if (li(r) && (r = r.slice(0, -7), t.capture = !0), !y && _) {
					if (o != null) continue;
					e.removeEventListener(r, f[n], t), f[n] = null;
				}
				if (y) Qr(r, e, o), $r([r]);
				else if (o != null) {
					function a(e) {
						f[i].call(this, e);
					}
					f[n] = Yr(r, e, a, t);
				}
			} else if (i === "style") Y(e, i, o);
			else if (i === "autofocus") Ot(e, !!o);
			else if (!l && (i === "__value" || i === "value" && o != null)) e.value = e.__value = o;
			else if (i === "selected" && p) wa(e, o);
			else {
				var b = i;
				u || (b = mi(b));
				var x = b === "defaultValue" || b === "defaultChecked";
				if (o == null && !l && !x) if (c[i] = null, b === "value" || b === "checked") {
					let n = e, r = t === void 0;
					if (b === "value") {
						let e = n.defaultValue;
						n.removeAttribute(b), n.defaultValue = e, n.value = n.__value = r ? e : null;
					} else {
						let e = n.defaultChecked;
						n.removeAttribute(b), n.defaultChecked = e, n.checked = r ? e : !1;
					}
				} else e.removeAttribute(i);
				else x || h.includes(b) && (l || typeof o != "string") ? (e[b] = o, b in c && (c[b] = s)) : typeof o != "function" && Y(e, b, o, a);
			}
		}
	}
	return d && Ke(!0), f;
}
function Ea(e, t, n = [], r = [], i = [], a, o = !1, s = !1) {
	Rt(i, n, r, (n) => {
		var r = void 0, i = {}, c = e.nodeName === ya, l = !1;
		if (tr(() => {
			var u = t(...n.map(U)), d = Ta(e, r, u, a, o, s);
			l && c && "value" in u && la(e, u.value);
			for (let e of Object.getOwnPropertySymbols(i)) u[e] || or(i[e]);
			for (let t of Object.getOwnPropertySymbols(u)) {
				var f = u[t];
				t.description === "@attach" && (!r || f !== r[t]) && (i[t] && or(i[t]), i[t] = nr(() => Zi(e, () => f))), d[t] = f;
			}
			r = d;
		}), c) {
			var u = e;
			Zn(() => {
				la(u, r.value, !0), ua(u);
			});
		}
		l = !0;
	});
}
function Da(e) {
	return e[Se] ??= {
		[ma]: e.nodeName.includes("-"),
		[ha]: e.namespaceURI === c
	};
}
var Oa = /* @__PURE__ */ new Map();
function ka(e) {
	var t = e.getAttribute("is") || e.nodeName, n = Oa.get(t);
	if (n) return n;
	Oa.set(t, n = []);
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var o in r = y(i), r) r[o].set && o !== "innerHTML" && o !== "textContent" && o !== "innerText" && n.push(o);
		i = S(i);
	}
	return n;
}
function Aa(e, t, n = t) {
	var r = /* @__PURE__ */ new WeakSet();
	Nt(e, "input", async (i) => {
		var a = i ? e.defaultValue : e.value;
		if (a = ja(e) ? Ma(a) : a, n(a), Qt !== null && r.add(Qt), await Br(), a !== (a = t())) {
			var o = e.selectionStart, s = e.selectionEnd, c = e.value.length;
			if (e.value = a ?? "", s !== null) {
				var l = e.value.length;
				o === s && s === c && l > c ? (e.selectionStart = l, e.selectionEnd = l) : (e.selectionStart = o, e.selectionEnd = Math.min(s, l));
			}
		}
	}), (A && e.defaultValue !== e.value || Ur(t) == null && e.value) && (n(ja(e) ? Ma(e.value) : e.value), Qt !== null && r.add(Qt)), $n(() => {
		var n = t();
		if (e === document.activeElement) {
			var i = Qt;
			if (r.has(i)) return;
		}
		ja(e) && n === Ma(e.value) || e.type === "date" && !n && !e.value || n !== e.value && (e.value = n ?? "");
	});
}
function ja(e) {
	var t = e.type;
	return t === "number" || t === "range";
}
function Ma(e) {
	return e === "" ? null : +e;
}
function Na(e, t, n = t) {
	Nt(e, "change", () => {
		n(e.files);
	}), A && e.files && n(e.files), $n(() => {
		e.files = t();
	});
}
var Pa = /* @__PURE__ */ new class e {
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
function Fa(e, t, n) {
	var r = Pa.observe(e, () => n(e[t]));
	Zn(() => (Ur(() => n(e[t])), r));
}
function Ia(e, t) {
	return e === t || e?.[ye] === t;
}
function La(e = {}, t, n, r) {
	var i = ot.r, a = xr;
	return Zn(() => {
		var o, s;
		return $n(() => {
			o = s, s = r?.() || [], Ur(() => {
				Ia(n(...s), e) || (t(e, ...s), o && Ia(n(...o), e) && t(null, ...o));
			});
		}), () => {
			let r = a;
			for (; r !== i && r.parent !== null && r.parent.f & 33554432;) r = r.parent;
			let o = () => {
				s && Ia(n(...s), e) && t(null, ...s);
			}, c = r.teardown;
			r.teardown = () => {
				o(), c?.();
			};
		};
	}), e;
}
function Ra(e = !1) {
	let t = ot, n = t.l.u;
	if (!n) return;
	let r = () => Wr(t.s);
	if (e) {
		let e = 0, n = {}, i = /* @__PURE__ */ Ht(() => {
			let r = !1, i = t.s;
			for (let e in i) i[e] !== n[e] && (n[e] = i[e], r = !0);
			return r && e++, e;
		});
		r = () => U(i);
	}
	n.b.length && Jn(() => {
		za(t, r), D(n.b);
	}), Kn(() => {
		let e = Ur(() => n.m.map(E));
		return () => {
			for (let t of e) typeof t == "function" && t();
		};
	}), n.a.length && Kn(() => {
		za(t, r), D(n.a);
	});
}
function za(e, t) {
	if (e.l.s) for (let t of e.l.s) U(t);
	t();
}
var Ba = {
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
function Va(e, t, n) {
	return new Proxy({
		props: e,
		exclude: t
	}, Ba);
}
var Ha = {
	get(e, t) {
		if (!e.exclude.includes(t)) return U(e.version), t in e.special ? e.special[t]() : e.props[t];
	},
	set(e, t, n) {
		if (!(t in e.special)) {
			var r = xr;
			try {
				Sr(e.parent_effect), e.special[t] = X({ get [t]() {
					return e.props[t];
				} }, t, 4);
			} finally {
				Sr(r);
			}
		}
		return e.special[t](n), Cn(e.version), !0;
	},
	getOwnPropertyDescriptor(e, t) {
		if (!e.exclude.includes(t) && t in e.props) return {
			enumerable: !0,
			configurable: !0,
			value: e.props[t]
		};
	},
	deleteProperty(e, t) {
		return e.exclude.includes(t) ? !0 : (e.exclude.push(t), Cn(e.version), !0);
	},
	has(e, t) {
		return !e.exclude.includes(t) && t in e.props;
	},
	ownKeys(e) {
		return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
	}
};
function Ua(e, t) {
	return new Proxy({
		props: e,
		exclude: t,
		special: {},
		version: yn(0),
		parent_effect: xr
	}, Ha);
}
var Wa = {
	get(e, t) {
		let n = e.props.length;
		for (; n--;) {
			let r = e.props[n];
			if (w(r) && (r = r()), typeof r == "object" && r && t in r) return r[t];
		}
	},
	set(e, t, n) {
		let r = e.props.length;
		for (; r--;) {
			let i = e.props[r];
			w(i) && (i = i());
			let a = v(i, t);
			if (a && a.set) return a.set(n), !0;
		}
		return !1;
	},
	getOwnPropertyDescriptor(e, t) {
		let n = e.props.length;
		for (; n--;) {
			let r = e.props[n];
			if (w(r) && (r = r()), typeof r == "object" && r && t in r) {
				let e = v(r, t);
				return e && !e.configurable && (e.configurable = !0), e;
			}
		}
	},
	has(e, t) {
		if (t === ye || t === be) return !1;
		for (let n of e.props) if (w(n) && (n = n()), n != null && t in n) return !0;
		return !1;
	},
	ownKeys(e) {
		let t = [];
		for (let n of e.props) if (w(n) && (n = n()), n) {
			for (let e in n) t.includes(e) || t.push(e);
			for (let e of Object.getOwnPropertySymbols(n)) t.includes(e) || t.push(e);
		}
		return t;
	}
};
function Ga(...e) {
	return new Proxy({ props: e }, Wa);
}
function X(e, t, n, r) {
	var i = !tt || (n & 2) != 0, a = (n & 8) != 0, o = (n & 16) != 0, s = r, c = !0, l = void 0, u = () => o && i ? (l ??= /* @__PURE__ */ Ht(r), U(l)) : (c && (c = !1, s = o ? Ur(r) : r), s);
	let d;
	if (a) {
		var f = ye in e || be in e;
		d = v(e, t)?.set ?? (f && t in e ? (n) => e[t] = n : void 0);
	}
	var p, m = !1;
	a ? [p, m] = Dt(() => e[t]) : p = e[t], p === void 0 && r !== void 0 && (p = u(), d && (i && Le(t), d(p)));
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
	var _ = !1, y = (n & 1 ? Ht : Gt)(() => (_ = !1, h()));
	a && U(y);
	var b = xr;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? U(y) : i && a ? En(e) : e;
			return R(y, n), _ = !0, s !== void 0 && (s = n), e;
		}
		return gr && _ || b.f & 16384 ? y.v : U(y);
	});
}
function Ka(e) {
	return new qa(e);
}
var qa = class {
	#e;
	#t;
	constructor(e) {
		var t = /* @__PURE__ */ new Map(), n = (e, n) => {
			var r = /* @__PURE__ */ bn(n, !1, !1);
			return t.set(e, r), r;
		};
		let r = new Proxy({
			...e.props || {},
			$$events: {}
		}, {
			get(e, r) {
				return U(t.get(r) ?? n(r, Reflect.get(e, r)));
			},
			has(e, r) {
				return r === be ? !0 : (U(t.get(r) ?? n(r, Reflect.get(e, r))), Reflect.has(e, r));
			},
			set(e, r, i) {
				return R(t.get(r) ?? n(r, i), i), Reflect.set(e, r, i);
			}
		});
		this.#t = (e.hydrate ? xi : bi)(e.component, {
			target: e.target,
			anchor: e.anchor,
			props: r,
			context: e.context,
			intro: e.intro ?? !1,
			recover: e.recover,
			transformError: e.transformError
		}), (!e?.props?.$$host || e.sync === !1) && I(), this.#e = r.$$events;
		for (let e of Object.keys(this.#t)) e === "$set" || e === "$destroy" || e === "$on" || _(this, e, {
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
			Ti(this.#t);
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
}, Ja;
typeof HTMLElement == "function" && (Ja = class extends HTMLElement {
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
					let n = zn("slot");
					e !== "default" && (n.name = e), q(t, n);
				};
			}
			let t = {}, n = Xa(this);
			for (let r of this.$$s) r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
			for (let e of this.attributes) {
				let t = this.$$g_p(e.name);
				t in this.$$d || (this.$$d[t] = Ya(t, e.value, this.$$p_d, "toProp"));
			}
			for (let e in this.$$p_d) !(e in this.$$d) && this[e] !== void 0 && (this.$$d[e] = this[e], delete this[e]);
			this.$$c = Ka({
				component: this.$$ctor,
				target: this.$$shadowRoot || this,
				props: {
					...this.$$d,
					$$slots: t,
					$$host: this
				}
			}), this.$$me = Yn(() => {
				$n(() => {
					this.$$r = !0;
					for (let e of g(this.$$c)) {
						if (!this.$$p_d[e]?.reflect) continue;
						this.$$d[e] = this.$$c[e];
						let t = Ya(e, this.$$d[e], this.$$p_d, "toAttribute");
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
		this.$$r || (e = this.$$g_p(e), this.$$d[e] = Ya(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
	}
	disconnectedCallback() {
		this.$$cn = !1, Promise.resolve().then(() => {
			!this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
		});
	}
	$$g_p(e) {
		return g(this.$$p_d).find((t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e) || e;
	}
});
function Ya(e, t, n, r) {
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
function Xa(e) {
	let t = {};
	return e.childNodes.forEach((e) => {
		t[e.slot || "default"] = !0;
	}), t;
}
function Z(e, t, n, r, i, a) {
	let o = class extends Ja {
		constructor() {
			super(e, n, i), this.$$p_d = t;
		}
		static get observedAttributes() {
			return g(t).map((e) => (t[e].attribute || e).toLowerCase());
		}
	};
	return g(t).forEach((e) => {
		_(o.prototype, e, {
			get() {
				return this.$$c && e in this.$$c ? this.$$c[e] : this.$$d[e];
			},
			set(n) {
				n = Ya(e, n, t), this.$$d[e] = n;
				var r = this.$$c;
				r && (v(r, e)?.get ? r[e] = n : r.$set({ [e]: n }));
			}
		});
	}), r.forEach((e) => {
		_(o.prototype, e, { get() {
			return this.$$c?.[e];
		} });
	}), a && (o = a(o)), e.element = o, o;
}
var Za = { value: () => {} };
function Qa() {
	for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
		if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw Error("illegal type: " + r);
		n[r] = [];
	}
	return new $a(n);
}
function $a(e) {
	this._ = e;
}
function eo(e, t) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var n = "", r = e.indexOf(".");
		if (r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), e && !t.hasOwnProperty(e)) throw Error("unknown type: " + e);
		return {
			type: e,
			name: n
		};
	});
}
$a.prototype = Qa.prototype = {
	constructor: $a,
	on: function(e, t) {
		var n = this._, r = eo(e + "", n), i, a = -1, o = r.length;
		if (arguments.length < 2) {
			for (; ++a < o;) if ((i = (e = r[a]).type) && (i = to(n[i], e.name))) return i;
			return;
		}
		if (t != null && typeof t != "function") throw Error("invalid callback: " + t);
		for (; ++a < o;) if (i = (e = r[a]).type) n[i] = no(n[i], e.name, t);
		else if (t == null) for (i in n) n[i] = no(n[i], e.name, null);
		return this;
	},
	copy: function() {
		var e = {}, t = this._;
		for (var n in t) e[n] = t[n].slice();
		return new $a(e);
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
function to(e, t) {
	for (var n = 0, r = e.length, i; n < r; ++n) if ((i = e[n]).name === t) return i.value;
}
function no(e, t, n) {
	for (var r = 0, i = e.length; r < i; ++r) if (e[r].name === t) {
		e[r] = Za, e = e.slice(0, r).concat(e.slice(r + 1));
		break;
	}
	return n != null && e.push({
		name: t,
		value: n
	}), e;
}
var ro = {
	svg: "http://www.w3.org/2000/svg",
	xhtml: "http://www.w3.org/1999/xhtml",
	xlink: "http://www.w3.org/1999/xlink",
	xml: "http://www.w3.org/XML/1998/namespace",
	xmlns: "http://www.w3.org/2000/xmlns/"
};
function io(e) {
	var t = e += "", n = t.indexOf(":");
	return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), ro.hasOwnProperty(t) ? {
		space: ro[t],
		local: e
	} : e;
}
function ao(e) {
	return function() {
		var t = this.ownerDocument, n = this.namespaceURI;
		return n === "http://www.w3.org/1999/xhtml" && t.documentElement.namespaceURI === "http://www.w3.org/1999/xhtml" ? t.createElement(e) : t.createElementNS(n, e);
	};
}
function oo(e) {
	return function() {
		return this.ownerDocument.createElementNS(e.space, e.local);
	};
}
function so(e) {
	var t = io(e);
	return (t.local ? oo : ao)(t);
}
function co() {}
function lo(e) {
	return e == null ? co : function() {
		return this.querySelector(e);
	};
}
function uo(e) {
	typeof e != "function" && (e = lo(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = Array(o), c, l, u = 0; u < o; ++u) (c = a[u]) && (l = e.call(c, c.__data__, u, a)) && ("__data__" in c && (l.__data__ = c.__data__), s[u] = l);
	return new $s(r, this._parents);
}
function fo(e) {
	return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function po() {
	return [];
}
function mo(e) {
	return e == null ? po : function() {
		return this.querySelectorAll(e);
	};
}
function ho(e) {
	return function() {
		return fo(e.apply(this, arguments));
	};
}
function go(e) {
	e = typeof e == "function" ? ho(e) : mo(e);
	for (var t = this._groups, n = t.length, r = [], i = [], a = 0; a < n; ++a) for (var o = t[a], s = o.length, c, l = 0; l < s; ++l) (c = o[l]) && (r.push(e.call(c, c.__data__, l, o)), i.push(c));
	return new $s(r, i);
}
function _o(e) {
	return function() {
		return this.matches(e);
	};
}
function vo(e) {
	return function(t) {
		return t.matches(e);
	};
}
var yo = Array.prototype.find;
function bo(e) {
	return function() {
		return yo.call(this.children, e);
	};
}
function xo() {
	return this.firstElementChild;
}
function So(e) {
	return this.select(e == null ? xo : bo(typeof e == "function" ? e : vo(e)));
}
var Co = Array.prototype.filter;
function wo() {
	return Array.from(this.children);
}
function To(e) {
	return function() {
		return Co.call(this.children, e);
	};
}
function Eo(e) {
	return this.selectAll(e == null ? wo : To(typeof e == "function" ? e : vo(e)));
}
function Do(e) {
	typeof e != "function" && (e = _o(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = [], c, l = 0; l < o; ++l) (c = a[l]) && e.call(c, c.__data__, l, a) && s.push(c);
	return new $s(r, this._parents);
}
function Oo(e) {
	return Array(e.length);
}
function ko() {
	return new $s(this._enter || this._groups.map(Oo), this._parents);
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
function jo(e) {
	return function() {
		return e;
	};
}
function Mo(e, t, n, r, i, a) {
	for (var o = 0, s, c = t.length, l = a.length; o < l; ++o) (s = t[o]) ? (s.__data__ = a[o], r[o] = s) : n[o] = new Ao(e, a[o]);
	for (; o < c; ++o) (s = t[o]) && (i[o] = s);
}
function No(e, t, n, r, i, a, o) {
	var s, c, l = /* @__PURE__ */ new Map(), u = t.length, d = a.length, f = Array(u), p;
	for (s = 0; s < u; ++s) (c = t[s]) && (f[s] = p = o.call(c, c.__data__, s, t) + "", l.has(p) ? i[s] = c : l.set(p, c));
	for (s = 0; s < d; ++s) p = o.call(e, a[s], s, a) + "", (c = l.get(p)) ? (r[s] = c, c.__data__ = a[s], l.delete(p)) : n[s] = new Ao(e, a[s]);
	for (s = 0; s < u; ++s) (c = t[s]) && l.get(f[s]) === c && (i[s] = c);
}
function Po(e) {
	return e.__data__;
}
function Fo(e, t) {
	if (!arguments.length) return Array.from(this, Po);
	var n = t ? No : Mo, r = this._parents, i = this._groups;
	typeof e != "function" && (e = jo(e));
	for (var a = i.length, o = Array(a), s = Array(a), c = Array(a), l = 0; l < a; ++l) {
		var u = r[l], d = i[l], f = d.length, p = Io(e.call(u, u && u.__data__, l, r)), m = p.length, h = s[l] = Array(m), g = o[l] = Array(m);
		n(u, d, h, g, c[l] = Array(f), p, t);
		for (var _ = 0, v = 0, y, b; _ < m; ++_) if (y = h[_]) {
			for (_ >= v && (v = _ + 1); !(b = g[v]) && ++v < m;);
			y._next = b || null;
		}
	}
	return o = new $s(o, r), o._enter = s, o._exit = c, o;
}
function Io(e) {
	return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Lo() {
	return new $s(this._exit || this._groups.map(Oo), this._parents);
}
function Ro(e, t, n) {
	var r = this.enter(), i = this, a = this.exit();
	return typeof e == "function" ? (r = e(r), r &&= r.selection()) : r = r.append(e + ""), t != null && (i = t(i), i &&= i.selection()), n == null ? a.remove() : n(a), r && i ? r.merge(i).order() : i;
}
function zo(e) {
	for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, i = n.length, a = r.length, o = Math.min(i, a), s = Array(i), c = 0; c < o; ++c) for (var l = n[c], u = r[c], d = l.length, f = s[c] = Array(d), p, m = 0; m < d; ++m) (p = l[m] || u[m]) && (f[m] = p);
	for (; c < i; ++c) s[c] = n[c];
	return new $s(s, this._parents);
}
function Bo() {
	for (var e = this._groups, t = -1, n = e.length; ++t < n;) for (var r = e[t], i = r.length - 1, a = r[i], o; --i >= 0;) (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
	return this;
}
function Vo(e) {
	e ||= Ho;
	function t(t, n) {
		return t && n ? e(t.__data__, n.__data__) : !t - !n;
	}
	for (var n = this._groups, r = n.length, i = Array(r), a = 0; a < r; ++a) {
		for (var o = n[a], s = o.length, c = i[a] = Array(s), l, u = 0; u < s; ++u) (l = o[u]) && (c[u] = l);
		c.sort(t);
	}
	return new $s(i, this._parents).order();
}
function Ho(e, t) {
	return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Uo() {
	var e = arguments[0];
	return arguments[0] = this, e.apply(null, arguments), this;
}
function Wo() {
	return Array.from(this);
}
function Go() {
	for (var e = this._groups, t = 0, n = e.length; t < n; ++t) for (var r = e[t], i = 0, a = r.length; i < a; ++i) {
		var o = r[i];
		if (o) return o;
	}
	return null;
}
function Ko() {
	let e = 0;
	for (let t of this) ++e;
	return e;
}
function qo() {
	return !this.node();
}
function Jo(e) {
	for (var t = this._groups, n = 0, r = t.length; n < r; ++n) for (var i = t[n], a = 0, o = i.length, s; a < o; ++a) (s = i[a]) && e.call(s, s.__data__, a, i);
	return this;
}
function Yo(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function Xo(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function Zo(e, t) {
	return function() {
		this.setAttribute(e, t);
	};
}
function Qo(e, t) {
	return function() {
		this.setAttributeNS(e.space, e.local, t);
	};
}
function $o(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
	};
}
function es(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
	};
}
function ts(e, t) {
	var n = io(e);
	if (arguments.length < 2) {
		var r = this.node();
		return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
	}
	return this.each((t == null ? n.local ? Xo : Yo : typeof t == "function" ? n.local ? es : $o : n.local ? Qo : Zo)(n, t));
}
function ns(e) {
	return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function rs(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function is(e, t, n) {
	return function() {
		this.style.setProperty(e, t, n);
	};
}
function as(e, t, n) {
	return function() {
		var r = t.apply(this, arguments);
		r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
	};
}
function os(e, t, n) {
	return arguments.length > 1 ? this.each((t == null ? rs : typeof t == "function" ? as : is)(e, t, n ?? "")) : ss(this.node(), e);
}
function ss(e, t) {
	return e.style.getPropertyValue(t) || ns(e).getComputedStyle(e, null).getPropertyValue(t);
}
function cs(e) {
	return function() {
		delete this[e];
	};
}
function ls(e, t) {
	return function() {
		this[e] = t;
	};
}
function us(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? delete this[e] : this[e] = n;
	};
}
function ds(e, t) {
	return arguments.length > 1 ? this.each((t == null ? cs : typeof t == "function" ? us : ls)(e, t)) : this.node()[e];
}
function fs(e) {
	return e.trim().split(/^|\s+/);
}
function ps(e) {
	return e.classList || new ms(e);
}
function ms(e) {
	this._node = e, this._names = fs(e.getAttribute("class") || "");
}
ms.prototype = {
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
function hs(e, t) {
	for (var n = ps(e), r = -1, i = t.length; ++r < i;) n.add(t[r]);
}
function gs(e, t) {
	for (var n = ps(e), r = -1, i = t.length; ++r < i;) n.remove(t[r]);
}
function _s(e) {
	return function() {
		hs(this, e);
	};
}
function vs(e) {
	return function() {
		gs(this, e);
	};
}
function ys(e, t) {
	return function() {
		(t.apply(this, arguments) ? hs : gs)(this, e);
	};
}
function bs(e, t) {
	var n = fs(e + "");
	if (arguments.length < 2) {
		for (var r = ps(this.node()), i = -1, a = n.length; ++i < a;) if (!r.contains(n[i])) return !1;
		return !0;
	}
	return this.each((typeof t == "function" ? ys : t ? _s : vs)(n, t));
}
function xs() {
	this.textContent = "";
}
function Ss(e) {
	return function() {
		this.textContent = e;
	};
}
function Cs(e) {
	return function() {
		var t = e.apply(this, arguments);
		this.textContent = t ?? "";
	};
}
function ws(e) {
	return arguments.length ? this.each(e == null ? xs : (typeof e == "function" ? Cs : Ss)(e)) : this.node().textContent;
}
function Ts() {
	this.innerHTML = "";
}
function Es(e) {
	return function() {
		this.innerHTML = e;
	};
}
function Ds(e) {
	return function() {
		var t = e.apply(this, arguments);
		this.innerHTML = t ?? "";
	};
}
function Os(e) {
	return arguments.length ? this.each(e == null ? Ts : (typeof e == "function" ? Ds : Es)(e)) : this.node().innerHTML;
}
function ks() {
	this.nextSibling && this.parentNode.appendChild(this);
}
function As() {
	return this.each(ks);
}
function js() {
	this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Ms() {
	return this.each(js);
}
function Ns(e) {
	var t = typeof e == "function" ? e : so(e);
	return this.select(function() {
		return this.appendChild(t.apply(this, arguments));
	});
}
function Ps() {
	return null;
}
function Fs(e, t) {
	var n = typeof e == "function" ? e : so(e), r = t == null ? Ps : typeof t == "function" ? t : lo(t);
	return this.select(function() {
		return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
	});
}
function Is() {
	var e = this.parentNode;
	e && e.removeChild(this);
}
function Ls() {
	return this.each(Is);
}
function Rs() {
	var e = this.cloneNode(!1), t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function zs() {
	var e = this.cloneNode(!0), t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Bs(e) {
	return this.select(e ? zs : Rs);
}
function Vs(e) {
	return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Hs(e) {
	return function(t) {
		e.call(this, t, this.__data__);
	};
}
function Us(e) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var t = "", n = e.indexOf(".");
		return n >= 0 && (t = e.slice(n + 1), e = e.slice(0, n)), {
			type: e,
			name: t
		};
	});
}
function Ws(e) {
	return function() {
		var t = this.__on;
		if (t) {
			for (var n = 0, r = -1, i = t.length, a; n < i; ++n) a = t[n], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++r] = a;
			++r ? t.length = r : delete this.__on;
		}
	};
}
function Gs(e, t, n) {
	return function() {
		var r = this.__on, i, a = Hs(t);
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
function Ks(e, t, n) {
	var r = Us(e + ""), i, a = r.length, o;
	if (arguments.length < 2) {
		var s = this.node().__on;
		if (s) {
			for (var c = 0, l = s.length, u; c < l; ++c) for (i = 0, u = s[c]; i < a; ++i) if ((o = r[i]).type === u.type && o.name === u.name) return u.value;
		}
		return;
	}
	for (s = t ? Gs : Ws, i = 0; i < a; ++i) this.each(s(r[i], t, n));
	return this;
}
function qs(e, t, n) {
	var r = ns(e), i = r.CustomEvent;
	typeof i == "function" ? i = new i(t, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function Js(e, t) {
	return function() {
		return qs(this, e, t);
	};
}
function Ys(e, t) {
	return function() {
		return qs(this, e, t.apply(this, arguments));
	};
}
function Xs(e, t) {
	return this.each((typeof t == "function" ? Ys : Js)(e, t));
}
function* Zs() {
	for (var e = this._groups, t = 0, n = e.length; t < n; ++t) for (var r = e[t], i = 0, a = r.length, o; i < a; ++i) (o = r[i]) && (yield o);
}
var Qs = [null];
function $s(e, t) {
	this._groups = e, this._parents = t;
}
function ec() {
	return new $s([[document.documentElement]], Qs);
}
function tc() {
	return this;
}
$s.prototype = ec.prototype = {
	constructor: $s,
	select: uo,
	selectAll: go,
	selectChild: So,
	selectChildren: Eo,
	filter: Do,
	data: Fo,
	enter: ko,
	exit: Lo,
	join: Ro,
	merge: zo,
	selection: tc,
	order: Bo,
	sort: Vo,
	call: Uo,
	nodes: Wo,
	node: Go,
	size: Ko,
	empty: qo,
	each: Jo,
	attr: ts,
	style: os,
	property: ds,
	classed: bs,
	text: ws,
	html: Os,
	raise: As,
	lower: Ms,
	append: Ns,
	insert: Fs,
	remove: Ls,
	clone: Bs,
	datum: Vs,
	on: Ks,
	dispatch: Xs,
	[Symbol.iterator]: Zs
};
function nc(e) {
	return typeof e == "string" ? new $s([[document.querySelector(e)]], [document.documentElement]) : new $s([[e]], Qs);
}
function rc(e) {
	let t;
	for (; t = e.sourceEvent;) e = t;
	return e;
}
function ic(e, t) {
	if (e = rc(e), t === void 0 && (t = e.currentTarget), t) {
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
var ac = { passive: !1 }, oc = {
	capture: !0,
	passive: !1
};
function sc(e) {
	e.stopImmediatePropagation();
}
function cc(e) {
	e.preventDefault(), e.stopImmediatePropagation();
}
function lc(e) {
	var t = e.document.documentElement, n = nc(e).on("dragstart.drag", cc, oc);
	"onselectstart" in t ? n.on("selectstart.drag", cc, oc) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function uc(e, t) {
	var n = e.document.documentElement, r = nc(e).on("dragstart.drag", null);
	t && (r.on("click.drag", cc, oc), setTimeout(function() {
		r.on("click.drag", null);
	}, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
var dc = (e) => () => e;
function fc(e, { sourceEvent: t, subject: n, target: r, identifier: i, active: a, x: o, y: s, dx: c, dy: l, dispatch: u }) {
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
fc.prototype.on = function() {
	var e = this._.on.apply(this._, arguments);
	return e === this._ ? this : e;
};
function pc(e) {
	return !e.ctrlKey && !e.button;
}
function mc() {
	return this.parentNode;
}
function hc(e, t) {
	return t ?? {
		x: e.x,
		y: e.y
	};
}
function gc() {
	return navigator.maxTouchPoints || "ontouchstart" in this;
}
function _c() {
	var e = pc, t = mc, n = hc, r = gc, i = {}, a = Qa("start", "drag", "end"), o = 0, s, c, l, u, d = 0;
	function f(e) {
		e.on("mousedown.drag", p).filter(r).on("touchstart.drag", g).on("touchmove.drag", _, ac).on("touchend.drag touchcancel.drag", v).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
	}
	function p(n, r) {
		if (!(u || !e.call(this, n, r))) {
			var i = y(this, t.call(this, n, r), n, r, "mouse");
			i && (nc(n.view).on("mousemove.drag", m, oc).on("mouseup.drag", h, oc), lc(n.view), sc(n), l = !1, s = n.clientX, c = n.clientY, i("start", n));
		}
	}
	function m(e) {
		if (cc(e), !l) {
			var t = e.clientX - s, n = e.clientY - c;
			l = t * t + n * n > d;
		}
		i.mouse("drag", e);
	}
	function h(e) {
		nc(e.view).on("mousemove.drag mouseup.drag", null), uc(e.view, l), cc(e), i.mouse("end", e);
	}
	function g(n, r) {
		if (e.call(this, n, r)) {
			var i = n.changedTouches, a = t.call(this, n, r), o = i.length, s, c;
			for (s = 0; s < o; ++s) (c = y(this, a, n, r, i[s].identifier, i[s])) && (sc(n), c("start", n, i[s]));
		}
	}
	function _(e) {
		var t = e.changedTouches, n = t.length, r, a;
		for (r = 0; r < n; ++r) (a = i[t[r].identifier]) && (cc(e), a("drag", e, t[r]));
	}
	function v(e) {
		var t = e.changedTouches, n = t.length, r, a;
		for (u && clearTimeout(u), u = setTimeout(function() {
			u = null;
		}, 500), r = 0; r < n; ++r) (a = i[t[r].identifier]) && (sc(e), a("end", e, t[r]));
	}
	function y(e, t, r, s, c, l) {
		var u = a.copy(), d = ic(l || r, t), p, m, h;
		if ((h = n.call(e, new fc("beforestart", {
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
					d = ic(l || a, t), _ = o;
					break;
			}
			u.call(r, e, new fc(r, {
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
		return arguments.length ? (e = typeof t == "function" ? t : dc(!!t), f) : e;
	}, f.container = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : dc(e), f) : t;
	}, f.subject = function(e) {
		return arguments.length ? (n = typeof e == "function" ? e : dc(e), f) : n;
	}, f.touchable = function(e) {
		return arguments.length ? (r = typeof e == "function" ? e : dc(!!e), f) : r;
	}, f.on = function() {
		var e = a.on.apply(a, arguments);
		return e === a ? f : e;
	}, f.clickDistance = function(e) {
		return arguments.length ? (d = (e = +e) * e, f) : Math.sqrt(d);
	}, f;
}
function vc(e, t, n) {
	e.prototype = t.prototype = n, n.constructor = e;
}
function yc(e, t) {
	var n = Object.create(e.prototype);
	for (var r in t) n[r] = t[r];
	return n;
}
function bc() {}
var xc = .7, Sc = 1 / xc, Cc = "\\s*([+-]?\\d+)\\s*", wc = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Tc = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ec = /^#([0-9a-f]{3,8})$/, Dc = RegExp(`^rgb\\(${Cc},${Cc},${Cc}\\)$`), Oc = RegExp(`^rgb\\(${Tc},${Tc},${Tc}\\)$`), kc = RegExp(`^rgba\\(${Cc},${Cc},${Cc},${wc}\\)$`), Ac = RegExp(`^rgba\\(${Tc},${Tc},${Tc},${wc}\\)$`), jc = RegExp(`^hsl\\(${wc},${Tc},${Tc}\\)$`), Mc = RegExp(`^hsla\\(${wc},${Tc},${Tc},${wc}\\)$`), Nc = {
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
vc(bc, Rc, {
	copy(e) {
		return Object.assign(new this.constructor(), this, e);
	},
	displayable() {
		return this.rgb().displayable();
	},
	hex: Pc,
	formatHex: Pc,
	formatHex8: Fc,
	formatHsl: Ic,
	formatRgb: Lc,
	toString: Lc
});
function Pc() {
	return this.rgb().formatHex();
}
function Fc() {
	return this.rgb().formatHex8();
}
function Ic() {
	return Zc(this).formatHsl();
}
function Lc() {
	return this.rgb().formatRgb();
}
function Rc(e) {
	var t, n;
	return e = (e + "").trim().toLowerCase(), (t = Ec.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? zc(t) : n === 3 ? new Uc(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Bc(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Bc(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Dc.exec(e)) ? new Uc(t[1], t[2], t[3], 1) : (t = Oc.exec(e)) ? new Uc(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = kc.exec(e)) ? Bc(t[1], t[2], t[3], t[4]) : (t = Ac.exec(e)) ? Bc(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = jc.exec(e)) ? Xc(t[1], t[2] / 100, t[3] / 100, 1) : (t = Mc.exec(e)) ? Xc(t[1], t[2] / 100, t[3] / 100, t[4]) : Nc.hasOwnProperty(e) ? zc(Nc[e]) : e === "transparent" ? new Uc(NaN, NaN, NaN, 0) : null;
}
function zc(e) {
	return new Uc(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Bc(e, t, n, r) {
	return r <= 0 && (e = t = n = NaN), new Uc(e, t, n, r);
}
function Vc(e) {
	return e instanceof bc || (e = Rc(e)), e ? (e = e.rgb(), new Uc(e.r, e.g, e.b, e.opacity)) : new Uc();
}
function Hc(e, t, n, r) {
	return arguments.length === 1 ? Vc(e) : new Uc(e, t, n, r ?? 1);
}
function Uc(e, t, n, r) {
	this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
vc(Uc, Hc, yc(bc, {
	brighter(e) {
		return e = e == null ? Sc : Sc ** +e, new Uc(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? xc : xc ** +e, new Uc(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	rgb() {
		return this;
	},
	clamp() {
		return new Uc(Jc(this.r), Jc(this.g), Jc(this.b), qc(this.opacity));
	},
	displayable() {
		return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
	},
	hex: Wc,
	formatHex: Wc,
	formatHex8: Gc,
	formatRgb: Kc,
	toString: Kc
}));
function Wc() {
	return `#${Yc(this.r)}${Yc(this.g)}${Yc(this.b)}`;
}
function Gc() {
	return `#${Yc(this.r)}${Yc(this.g)}${Yc(this.b)}${Yc((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Kc() {
	let e = qc(this.opacity);
	return `${e === 1 ? "rgb(" : "rgba("}${Jc(this.r)}, ${Jc(this.g)}, ${Jc(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function qc(e) {
	return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Jc(e) {
	return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Yc(e) {
	return e = Jc(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Xc(e, t, n, r) {
	return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new $c(e, t, n, r);
}
function Zc(e) {
	if (e instanceof $c) return new $c(e.h, e.s, e.l, e.opacity);
	if (e instanceof bc || (e = Rc(e)), !e) return new $c();
	if (e instanceof $c) return e;
	e = e.rgb();
	var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.min(t, n, r), a = Math.max(t, n, r), o = NaN, s = a - i, c = (a + i) / 2;
	return s ? (o = t === a ? (n - r) / s + (n < r) * 6 : n === a ? (r - t) / s + 2 : (t - n) / s + 4, s /= c < .5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new $c(o, s, c, e.opacity);
}
function Qc(e, t, n, r) {
	return arguments.length === 1 ? Zc(e) : new $c(e, t, n, r ?? 1);
}
function $c(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
vc($c, Qc, yc(bc, {
	brighter(e) {
		return e = e == null ? Sc : Sc ** +e, new $c(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? xc : xc ** +e, new $c(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < .5 ? n : 1 - n) * t, i = 2 * n - r;
		return new Uc(nl(e >= 240 ? e - 240 : e + 120, i, r), nl(e, i, r), nl(e < 120 ? e + 240 : e - 120, i, r), this.opacity);
	},
	clamp() {
		return new $c(el(this.h), tl(this.s), tl(this.l), qc(this.opacity));
	},
	displayable() {
		return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
	},
	formatHsl() {
		let e = qc(this.opacity);
		return `${e === 1 ? "hsl(" : "hsla("}${el(this.h)}, ${tl(this.s) * 100}%, ${tl(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
	}
}));
function el(e) {
	return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function tl(e) {
	return Math.max(0, Math.min(1, e || 0));
}
function nl(e, t, n) {
	return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
var rl = (e) => () => e;
function il(e, t) {
	return function(n) {
		return e + n * t;
	};
}
function al(e, t, n) {
	return e **= +n, t = t ** +n - e, n = 1 / n, function(r) {
		return (e + r * t) ** +n;
	};
}
function ol(e) {
	return (e = +e) == 1 ? sl : function(t, n) {
		return n - t ? al(t, n, e) : rl(isNaN(t) ? n : t);
	};
}
function sl(e, t) {
	var n = t - e;
	return n ? il(e, n) : rl(isNaN(e) ? t : e);
}
var cl = (function e(t) {
	var n = ol(t);
	function r(e, t) {
		var r = n((e = Hc(e)).r, (t = Hc(t)).r), i = n(e.g, t.g), a = n(e.b, t.b), o = sl(e.opacity, t.opacity);
		return function(t) {
			return e.r = r(t), e.g = i(t), e.b = a(t), e.opacity = o(t), e + "";
		};
	}
	return r.gamma = e, r;
})(1);
function ll(e, t) {
	t ||= [];
	var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), i;
	return function(a) {
		for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
		return r;
	};
}
function ul(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function dl(e, t) {
	var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, i = Array(r), a = Array(n), o;
	for (o = 0; o < r; ++o) i[o] = bl(e[o], t[o]);
	for (; o < n; ++o) a[o] = t[o];
	return function(e) {
		for (o = 0; o < r; ++o) a[o] = i[o](e);
		return a;
	};
}
function fl(e, t) {
	var n = /* @__PURE__ */ new Date();
	return e = +e, t = +t, function(r) {
		return n.setTime(e * (1 - r) + t * r), n;
	};
}
function pl(e, t) {
	return e = +e, t = +t, function(n) {
		return e * (1 - n) + t * n;
	};
}
function ml(e, t) {
	var n = {}, r = {}, i;
	for (i in (typeof e != "object" || !e) && (e = {}), (typeof t != "object" || !t) && (t = {}), t) i in e ? n[i] = bl(e[i], t[i]) : r[i] = t[i];
	return function(e) {
		for (i in n) r[i] = n[i](e);
		return r;
	};
}
var hl = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, gl = new RegExp(hl.source, "g");
function _l(e) {
	return function() {
		return e;
	};
}
function vl(e) {
	return function(t) {
		return e(t) + "";
	};
}
function yl(e, t) {
	var n = hl.lastIndex = gl.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
	for (e += "", t += ""; (r = hl.exec(e)) && (i = gl.exec(t));) (a = i.index) > n && (a = t.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({
		i: o,
		x: pl(r, i)
	})), n = gl.lastIndex;
	return n < t.length && (a = t.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? vl(c[0].x) : _l(t) : (t = c.length, function(e) {
		for (var n = 0, r; n < t; ++n) s[(r = c[n]).i] = r.x(e);
		return s.join("");
	});
}
function bl(e, t) {
	var n = typeof t, r;
	return t == null || n === "boolean" ? rl(t) : (n === "number" ? pl : n === "string" ? (r = Rc(t)) ? (t = r, cl) : yl : t instanceof Rc ? cl : t instanceof Date ? fl : ul(t) ? ll : Array.isArray(t) ? dl : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? ml : pl)(e, t);
}
var xl = 180 / Math.PI, Sl = {
	translateX: 0,
	translateY: 0,
	rotate: 0,
	skewX: 0,
	scaleX: 1,
	scaleY: 1
};
function Cl(e, t, n, r, i, a) {
	var o, s, c;
	return (o = Math.sqrt(e * e + t * t)) && (e /= o, t /= o), (c = e * n + t * r) && (n -= e * c, r -= t * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), e * r < t * n && (e = -e, t = -t, c = -c, o = -o), {
		translateX: i,
		translateY: a,
		rotate: Math.atan2(t, e) * xl,
		skewX: Math.atan(c) * xl,
		scaleX: o,
		scaleY: s
	};
}
var wl;
function Tl(e) {
	let t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
	return t.isIdentity ? Sl : Cl(t.a, t.b, t.c, t.d, t.e, t.f);
}
function El(e) {
	return e == null || (wl ||= document.createElementNS("http://www.w3.org/2000/svg", "g"), wl.setAttribute("transform", e), !(e = wl.transform.baseVal.consolidate())) ? Sl : (e = e.matrix, Cl(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Dl(e, t, n, r) {
	function i(e) {
		return e.length ? e.pop() + " " : "";
	}
	function a(e, r, i, a, o, s) {
		if (e !== i || r !== a) {
			var c = o.push("translate(", null, t, null, n);
			s.push({
				i: c - 4,
				x: pl(e, i)
			}, {
				i: c - 2,
				x: pl(r, a)
			});
		} else (i || a) && o.push("translate(" + i + t + a + n);
	}
	function o(e, t, n, a) {
		e === t ? t && n.push(i(n) + "rotate(" + t + r) : (e - t > 180 ? t += 360 : t - e > 180 && (e += 360), a.push({
			i: n.push(i(n) + "rotate(", null, r) - 2,
			x: pl(e, t)
		}));
	}
	function s(e, t, n, a) {
		e === t ? t && n.push(i(n) + "skewX(" + t + r) : a.push({
			i: n.push(i(n) + "skewX(", null, r) - 2,
			x: pl(e, t)
		});
	}
	function c(e, t, n, r, a, o) {
		if (e !== n || t !== r) {
			var s = a.push(i(a) + "scale(", null, ",", null, ")");
			o.push({
				i: s - 4,
				x: pl(e, n)
			}, {
				i: s - 2,
				x: pl(t, r)
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
var Ol = Dl(Tl, "px, ", "px)", "deg)"), kl = Dl(El, ", ", ")", ")"), Al = 1e-12;
function jl(e) {
	return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Ml(e) {
	return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Nl(e) {
	return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
var Pl = (function e(t, n, r) {
	function i(e, i) {
		var a = e[0], o = e[1], s = e[2], c = i[0], l = i[1], u = i[2], d = c - a, f = l - o, p = d * d + f * f, m, h;
		if (p < Al) h = Math.log(u / s) / t, m = function(e) {
			return [
				a + e * d,
				o + e * f,
				s * Math.exp(t * e * h)
			];
		};
		else {
			var g = Math.sqrt(p), _ = (u * u - s * s + r * p) / (2 * s * n * g), v = (u * u - s * s - r * p) / (2 * u * n * g), y = Math.log(Math.sqrt(_ * _ + 1) - _);
			h = (Math.log(Math.sqrt(v * v + 1) - v) - y) / t, m = function(e) {
				var r = e * h, i = jl(y), c = s / (n * g) * (i * Nl(t * r + y) - Ml(y));
				return [
					a + c * d,
					o + c * f,
					s * i / jl(t * r + y)
				];
			};
		}
		return m.duration = h * 1e3 * t / Math.SQRT2, m;
	}
	return i.rho = function(t) {
		var n = Math.max(.001, +t), r = n * n;
		return e(n, r, r * r);
	}, i;
})(Math.SQRT2, 2, 4), Fl = 0, Il = 0, Ll = 0, Rl = 1e3, zl, Bl, Vl = 0, Hl = 0, Ul = 0, Wl = typeof performance == "object" && performance.now ? performance : Date, Gl = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
	setTimeout(e, 17);
};
function Kl() {
	return Hl ||= (Gl(ql), Wl.now() + Ul);
}
function ql() {
	Hl = 0;
}
function Jl() {
	this._call = this._time = this._next = null;
}
Jl.prototype = Yl.prototype = {
	constructor: Jl,
	restart: function(e, t, n) {
		if (typeof e != "function") throw TypeError("callback is not a function");
		n = (n == null ? Kl() : +n) + (t == null ? 0 : +t), !this._next && Bl !== this && (Bl ? Bl._next = this : zl = this, Bl = this), this._call = e, this._time = n, eu();
	},
	stop: function() {
		this._call && (this._call = null, this._time = Infinity, eu());
	}
};
function Yl(e, t, n) {
	var r = new Jl();
	return r.restart(e, t, n), r;
}
function Xl() {
	Kl(), ++Fl;
	for (var e = zl, t; e;) (t = Hl - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
	--Fl;
}
function Zl() {
	Hl = (Vl = Wl.now()) + Ul, Fl = Il = 0;
	try {
		Xl();
	} finally {
		Fl = 0, $l(), Hl = 0;
	}
}
function Ql() {
	var e = Wl.now(), t = e - Vl;
	t > Rl && (Ul -= t, Vl = e);
}
function $l() {
	for (var e, t = zl, n, r = Infinity; t;) t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : zl = n);
	Bl = e, eu(r);
}
function eu(e) {
	Fl || (Il &&= clearTimeout(Il), e - Hl > 24 ? (e < Infinity && (Il = setTimeout(Zl, e - Wl.now() - Ul)), Ll &&= clearInterval(Ll)) : (Ll ||= (Vl = Wl.now(), setInterval(Ql, Rl)), Fl = 1, Gl(Zl)));
}
function tu(e, t, n) {
	var r = new Jl();
	return t = t == null ? 0 : +t, r.restart((n) => {
		r.stop(), e(n + t);
	}, t, n), r;
}
var nu = Qa("start", "end", "cancel", "interrupt"), ru = [];
function iu(e, t, n, r, i, a) {
	var o = e.__transition;
	if (!o) e.__transition = {};
	else if (n in o) return;
	cu(e, n, {
		name: t,
		index: r,
		group: i,
		on: nu,
		tween: ru,
		time: a.time,
		delay: a.delay,
		duration: a.duration,
		ease: a.ease,
		timer: null,
		state: 0
	});
}
function au(e, t) {
	var n = su(e, t);
	if (n.state > 0) throw Error("too late; already scheduled");
	return n;
}
function ou(e, t) {
	var n = su(e, t);
	if (n.state > 3) throw Error("too late; already running");
	return n;
}
function su(e, t) {
	var n = e.__transition;
	if (!n || !(n = n[t])) throw Error("transition not found");
	return n;
}
function cu(e, t, n) {
	var r = e.__transition, i;
	r[t] = n, n.timer = Yl(a, 0, n.time);
	function a(e) {
		n.state = 1, n.timer.restart(o, n.delay, n.time), n.delay <= e && o(e - n.delay);
	}
	function o(a) {
		var l, u, d, f;
		if (n.state !== 1) return c();
		for (l in r) if (f = r[l], f.name === n.name) {
			if (f.state === 3) return tu(o);
			f.state === 4 ? (f.state = 6, f.timer.stop(), f.on.call("interrupt", e, e.__data__, f.index, f.group), delete r[l]) : +l < t && (f.state = 6, f.timer.stop(), f.on.call("cancel", e, e.__data__, f.index, f.group), delete r[l]);
		}
		if (tu(function() {
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
function lu(e, t) {
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
function uu(e) {
	return this.each(function() {
		lu(this, e);
	});
}
function du(e, t) {
	var n, r;
	return function() {
		var i = ou(this, e), a = i.tween;
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
function fu(e, t, n) {
	var r, i;
	if (typeof n != "function") throw Error();
	return function() {
		var a = ou(this, e), o = a.tween;
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
function pu(e, t) {
	var n = this._id;
	if (e += "", arguments.length < 2) {
		for (var r = su(this.node(), n).tween, i = 0, a = r.length, o; i < a; ++i) if ((o = r[i]).name === e) return o.value;
		return null;
	}
	return this.each((t == null ? du : fu)(n, e, t));
}
function mu(e, t, n) {
	var r = e._id;
	return e.each(function() {
		var e = ou(this, r);
		(e.value ||= {})[t] = n.apply(this, arguments);
	}), function(e) {
		return su(e, r).value[t];
	};
}
function hu(e, t) {
	var n;
	return (typeof t == "number" ? pl : t instanceof Rc ? cl : (n = Rc(t)) ? (t = n, cl) : yl)(e, t);
}
function gu(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function _u(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function vu(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = this.getAttribute(e);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function yu(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = this.getAttributeNS(e.space, e.local);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function bu(e, t, n) {
	var r, i, a;
	return function() {
		var o, s = n(this), c;
		return s == null ? void this.removeAttribute(e) : (o = this.getAttribute(e), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
	};
}
function xu(e, t, n) {
	var r, i, a;
	return function() {
		var o, s = n(this), c;
		return s == null ? void this.removeAttributeNS(e.space, e.local) : (o = this.getAttributeNS(e.space, e.local), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
	};
}
function Su(e, t) {
	var n = io(e), r = n === "transform" ? kl : hu;
	return this.attrTween(e, typeof t == "function" ? (n.local ? xu : bu)(n, r, mu(this, "attr." + e, t)) : t == null ? (n.local ? _u : gu)(n) : (n.local ? yu : vu)(n, r, t));
}
function Cu(e, t) {
	return function(n) {
		this.setAttribute(e, t.call(this, n));
	};
}
function wu(e, t) {
	return function(n) {
		this.setAttributeNS(e.space, e.local, t.call(this, n));
	};
}
function Tu(e, t) {
	var n, r;
	function i() {
		var i = t.apply(this, arguments);
		return i !== r && (n = (r = i) && wu(e, i)), n;
	}
	return i._value = t, i;
}
function Eu(e, t) {
	var n, r;
	function i() {
		var i = t.apply(this, arguments);
		return i !== r && (n = (r = i) && Cu(e, i)), n;
	}
	return i._value = t, i;
}
function Du(e, t) {
	var n = "attr." + e;
	if (arguments.length < 2) return (n = this.tween(n)) && n._value;
	if (t == null) return this.tween(n, null);
	if (typeof t != "function") throw Error();
	var r = io(e);
	return this.tween(n, (r.local ? Tu : Eu)(r, t));
}
function Ou(e, t) {
	return function() {
		au(this, e).delay = +t.apply(this, arguments);
	};
}
function ku(e, t) {
	return t = +t, function() {
		au(this, e).delay = t;
	};
}
function Au(e) {
	var t = this._id;
	return arguments.length ? this.each((typeof e == "function" ? Ou : ku)(t, e)) : su(this.node(), t).delay;
}
function ju(e, t) {
	return function() {
		ou(this, e).duration = +t.apply(this, arguments);
	};
}
function Mu(e, t) {
	return t = +t, function() {
		ou(this, e).duration = t;
	};
}
function Nu(e) {
	var t = this._id;
	return arguments.length ? this.each((typeof e == "function" ? ju : Mu)(t, e)) : su(this.node(), t).duration;
}
function Pu(e, t) {
	if (typeof t != "function") throw Error();
	return function() {
		ou(this, e).ease = t;
	};
}
function Fu(e) {
	var t = this._id;
	return arguments.length ? this.each(Pu(t, e)) : su(this.node(), t).ease;
}
function Iu(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		if (typeof n != "function") throw Error();
		ou(this, e).ease = n;
	};
}
function Lu(e) {
	if (typeof e != "function") throw Error();
	return this.each(Iu(this._id, e));
}
function Ru(e) {
	typeof e != "function" && (e = _o(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = [], c, l = 0; l < o; ++l) (c = a[l]) && e.call(c, c.__data__, l, a) && s.push(c);
	return new pd(r, this._parents, this._name, this._id);
}
function zu(e) {
	if (e._id !== this._id) throw Error();
	for (var t = this._groups, n = e._groups, r = t.length, i = n.length, a = Math.min(r, i), o = Array(r), s = 0; s < a; ++s) for (var c = t[s], l = n[s], u = c.length, d = o[s] = Array(u), f, p = 0; p < u; ++p) (f = c[p] || l[p]) && (d[p] = f);
	for (; s < r; ++s) o[s] = t[s];
	return new pd(o, this._parents, this._name, this._id);
}
function Bu(e) {
	return (e + "").trim().split(/^|\s+/).every(function(e) {
		var t = e.indexOf(".");
		return t >= 0 && (e = e.slice(0, t)), !e || e === "start";
	});
}
function Vu(e, t, n) {
	var r, i, a = Bu(t) ? au : ou;
	return function() {
		var o = a(this, e), s = o.on;
		s !== r && (i = (r = s).copy()).on(t, n), o.on = i;
	};
}
function Hu(e, t) {
	var n = this._id;
	return arguments.length < 2 ? su(this.node(), n).on.on(e) : this.each(Vu(n, e, t));
}
function Uu(e) {
	return function() {
		var t = this.parentNode;
		for (var n in this.__transition) if (+n !== e) return;
		t && t.removeChild(this);
	};
}
function Wu() {
	return this.on("end.remove", Uu(this._id));
}
function Gu(e) {
	var t = this._name, n = this._id;
	typeof e != "function" && (e = lo(e));
	for (var r = this._groups, i = r.length, a = Array(i), o = 0; o < i; ++o) for (var s = r[o], c = s.length, l = a[o] = Array(c), u, d, f = 0; f < c; ++f) (u = s[f]) && (d = e.call(u, u.__data__, f, s)) && ("__data__" in u && (d.__data__ = u.__data__), l[f] = d, iu(l[f], t, n, f, l, su(u, n)));
	return new pd(a, this._parents, t, n);
}
function Ku(e) {
	var t = this._name, n = this._id;
	typeof e != "function" && (e = mo(e));
	for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s) for (var c = r[s], l = c.length, u, d = 0; d < l; ++d) if (u = c[d]) {
		for (var f = e.call(u, u.__data__, d, c), p, m = su(u, n), h = 0, g = f.length; h < g; ++h) (p = f[h]) && iu(p, t, n, h, f, m);
		a.push(f), o.push(u);
	}
	return new pd(a, o, t, n);
}
var qu = ec.prototype.constructor;
function Ju() {
	return new qu(this._groups, this._parents);
}
function Yu(e, t) {
	var n, r, i;
	return function() {
		var a = ss(this, e), o = (this.style.removeProperty(e), ss(this, e));
		return a === o ? null : a === n && o === r ? i : i = t(n = a, r = o);
	};
}
function Xu(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function Zu(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = ss(this, e);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function Qu(e, t, n) {
	var r, i, a;
	return function() {
		var o = ss(this, e), s = n(this), c = s + "";
		return s ?? (c = s = (this.style.removeProperty(e), ss(this, e))), o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s));
	};
}
function $u(e, t) {
	var n, r, i, a = "style." + t, o = "end." + a, s;
	return function() {
		var c = ou(this, e), l = c.on, u = c.value[a] == null ? s ||= Xu(t) : void 0;
		(l !== n || i !== u) && (r = (n = l).copy()).on(o, i = u), c.on = r;
	};
}
function ed(e, t, n) {
	var r = (e += "") == "transform" ? Ol : hu;
	return t == null ? this.styleTween(e, Yu(e, r)).on("end.style." + e, Xu(e)) : typeof t == "function" ? this.styleTween(e, Qu(e, r, mu(this, "style." + e, t))).each($u(this._id, e)) : this.styleTween(e, Zu(e, r, t), n).on("end.style." + e, null);
}
function td(e, t, n) {
	return function(r) {
		this.style.setProperty(e, t.call(this, r), n);
	};
}
function nd(e, t, n) {
	var r, i;
	function a() {
		var a = t.apply(this, arguments);
		return a !== i && (r = (i = a) && td(e, a, n)), r;
	}
	return a._value = t, a;
}
function rd(e, t, n) {
	var r = "style." + (e += "");
	if (arguments.length < 2) return (r = this.tween(r)) && r._value;
	if (t == null) return this.tween(r, null);
	if (typeof t != "function") throw Error();
	return this.tween(r, nd(e, t, n ?? ""));
}
function id(e) {
	return function() {
		this.textContent = e;
	};
}
function ad(e) {
	return function() {
		var t = e(this);
		this.textContent = t ?? "";
	};
}
function od(e) {
	return this.tween("text", typeof e == "function" ? ad(mu(this, "text", e)) : id(e == null ? "" : e + ""));
}
function sd(e) {
	return function(t) {
		this.textContent = e.call(this, t);
	};
}
function cd(e) {
	var t, n;
	function r() {
		var r = e.apply(this, arguments);
		return r !== n && (t = (n = r) && sd(r)), t;
	}
	return r._value = e, r;
}
function ld(e) {
	var t = "text";
	if (arguments.length < 1) return (t = this.tween(t)) && t._value;
	if (e == null) return this.tween(t, null);
	if (typeof e != "function") throw Error();
	return this.tween(t, cd(e));
}
function ud() {
	for (var e = this._name, t = this._id, n = hd(), r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o = r[a], s = o.length, c, l = 0; l < s; ++l) if (c = o[l]) {
		var u = su(c, t);
		iu(c, e, n, l, o, {
			time: u.time + u.delay + u.duration,
			delay: 0,
			duration: u.duration,
			ease: u.ease
		});
	}
	return new pd(r, this._parents, e, n);
}
function dd() {
	var e, t, n = this, r = n._id, i = n.size();
	return new Promise(function(a, o) {
		var s = { value: o }, c = { value: function() {
			--i === 0 && a();
		} };
		n.each(function() {
			var n = ou(this, r), i = n.on;
			i !== e && (t = (e = i).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(c)), n.on = t;
		}), i === 0 && a();
	});
}
var fd = 0;
function pd(e, t, n, r) {
	this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function md(e) {
	return ec().transition(e);
}
function hd() {
	return ++fd;
}
var gd = ec.prototype;
pd.prototype = md.prototype = {
	constructor: pd,
	select: Gu,
	selectAll: Ku,
	selectChild: gd.selectChild,
	selectChildren: gd.selectChildren,
	filter: Ru,
	merge: zu,
	selection: Ju,
	transition: ud,
	call: gd.call,
	nodes: gd.nodes,
	node: gd.node,
	size: gd.size,
	empty: gd.empty,
	each: gd.each,
	on: Hu,
	attr: Su,
	attrTween: Du,
	style: ed,
	styleTween: rd,
	text: od,
	textTween: ld,
	remove: Wu,
	tween: pu,
	delay: Au,
	duration: Nu,
	ease: Fu,
	easeVarying: Lu,
	end: dd,
	[Symbol.iterator]: gd[Symbol.iterator]
};
function _d(e) {
	return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var vd = {
	time: null,
	delay: 0,
	duration: 250,
	ease: _d
};
function yd(e, t) {
	for (var n; !(n = e.__transition) || !(n = n[t]);) if (!(e = e.parentNode)) throw Error(`transition ${t} not found`);
	return n;
}
function bd(e) {
	var t, n;
	e instanceof pd ? (t = e._id, e = e._name) : (t = hd(), (n = vd).time = Kl(), e = e == null ? null : e + "");
	for (var r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o = r[a], s = o.length, c, l = 0; l < s; ++l) (c = o[l]) && iu(c, e, t, l, o, n || yd(c, t));
	return new pd(r, this._parents, e, t);
}
ec.prototype.interrupt = uu, ec.prototype.transition = bd;
var xd = (e) => () => e;
function Sd(e, { sourceEvent: t, target: n, transform: r, dispatch: i }) {
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
function Cd(e, t, n) {
	this.k = e, this.x = t, this.y = n;
}
Cd.prototype = {
	constructor: Cd,
	scale: function(e) {
		return e === 1 ? this : new Cd(this.k * e, this.x, this.y);
	},
	translate: function(e, t) {
		return e === 0 & t === 0 ? this : new Cd(this.k, this.x + this.k * e, this.y + this.k * t);
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
var wd = new Cd(1, 0, 0);
Td.prototype = Cd.prototype;
function Td(e) {
	for (; !e.__zoom;) if (!(e = e.parentNode)) return wd;
	return e.__zoom;
}
function Ed(e) {
	e.stopImmediatePropagation();
}
function Dd(e) {
	e.preventDefault(), e.stopImmediatePropagation();
}
function Od(e) {
	return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function kd() {
	var e = this;
	return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Ad() {
	return this.__zoom || wd;
}
function jd(e) {
	return -e.deltaY * (e.deltaMode === 1 ? .05 : e.deltaMode ? 1 : .002) * (e.ctrlKey ? 10 : 1);
}
function Md() {
	return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Nd(e, t, n) {
	var r = e.invertX(t[0][0]) - n[0][0], i = e.invertX(t[1][0]) - n[1][0], a = e.invertY(t[0][1]) - n[0][1], o = e.invertY(t[1][1]) - n[1][1];
	return e.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), o > a ? (a + o) / 2 : Math.min(0, a) || Math.max(0, o));
}
function Pd() {
	var e = Od, t = kd, n = Nd, r = jd, i = Md, a = [0, Infinity], o = [[-Infinity, -Infinity], [Infinity, Infinity]], s = 250, c = Pl, l = Qa("start", "zoom", "end"), u, d, f, p = 500, m = 150, h = 0, g = 10;
	function _(e) {
		e.property("__zoom", Ad).on("wheel.zoom", w, { passive: !1 }).on("mousedown.zoom", T).on("dblclick.zoom", E).filter(i).on("touchstart.zoom", D).on("touchmove.zoom", ee).on("touchend.zoom touchcancel.zoom", O).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
	}
	_.transform = function(e, t, n, r) {
		var i = e.selection ? e.selection() : e;
		i.property("__zoom", Ad), e === i ? i.interrupt().each(function() {
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
			return n(wd.translate(c[0], c[1]).scale(s.k).translate(typeof r == "function" ? -r.apply(this, arguments) : -r, typeof i == "function" ? -i.apply(this, arguments) : -i), e, o);
		}, a, s);
	};
	function v(e, t) {
		return t = Math.max(a[0], Math.min(a[1], t)), t === e.k ? e : new Cd(t, e.x, e.y);
	}
	function y(e, t, n) {
		var r = t[0] - n[0] * e.k, i = t[1] - n[1] * e.k;
		return r === e.x && i === e.y ? e : new Cd(e.k, r, i);
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
					e = new Cd(n, l[0] - t[0] * n, l[1] - t[1] * n);
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
			var t = nc(this.that).datum();
			l.call(e, this.that, new Sd(e, {
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
		var s = S(this, i).event(t), c = this.__zoom, l = Math.max(a[0], Math.min(a[1], c.k * 2 ** r.apply(this, arguments))), u = ic(t);
		if (s.wheel) (s.mouse[0][0] !== u[0] || s.mouse[0][1] !== u[1]) && (s.mouse[1] = c.invert(s.mouse[0] = u)), clearTimeout(s.wheel);
		else if (c.k === l) return;
		else s.mouse = [u, c.invert(u)], lu(this), s.start();
		Dd(t), s.wheel = setTimeout(d, m), s.zoom("mouse", n(y(v(c, l), s.mouse[0], s.mouse[1]), s.extent, o));
		function d() {
			s.wheel = null, s.end();
		}
	}
	function T(t, ...r) {
		if (f || !e.apply(this, arguments)) return;
		var i = t.currentTarget, a = S(this, r, !0).event(t), s = nc(t.view).on("mousemove.zoom", d, !0).on("mouseup.zoom", p, !0), c = ic(t, i), l = t.clientX, u = t.clientY;
		lc(t.view), Ed(t), a.mouse = [c, this.__zoom.invert(c)], lu(this), a.start();
		function d(e) {
			if (Dd(e), !a.moved) {
				var t = e.clientX - l, r = e.clientY - u;
				a.moved = t * t + r * r > h;
			}
			a.event(e).zoom("mouse", n(y(a.that.__zoom, a.mouse[0] = ic(e, i), a.mouse[1]), a.extent, o));
		}
		function p(e) {
			s.on("mousemove.zoom mouseup.zoom", null), uc(e.view, a.moved), Dd(e), a.event(e).end();
		}
	}
	function E(r, ...i) {
		if (e.apply(this, arguments)) {
			var a = this.__zoom, c = ic(r.changedTouches ? r.changedTouches[0] : r, this), l = a.invert(c), u = a.k * (r.shiftKey ? .5 : 2), d = n(y(v(a, u), c, l), t.apply(this, i), o);
			Dd(r), s > 0 ? nc(this).transition().duration(s).call(x, d, c, r) : nc(this).call(_.transform, d, c, r);
		}
	}
	function D(t, ...n) {
		if (e.apply(this, arguments)) {
			var r = t.touches, i = r.length, a = S(this, n, t.changedTouches.length === i).event(t), o, s, c, l;
			for (Ed(t), s = 0; s < i; ++s) c = r[s], l = ic(c, this), l = [
				l,
				this.__zoom.invert(l),
				c.identifier
			], a.touch0 ? !a.touch1 && a.touch0[2] !== l[2] && (a.touch1 = l, a.taps = 0) : (a.touch0 = l, o = !0, a.taps = 1 + !!u);
			u &&= clearTimeout(u), o && (a.taps < 2 && (d = l[0], u = setTimeout(function() {
				u = null;
			}, p)), lu(this), a.start());
		}
	}
	function ee(e, ...t) {
		if (this.__zooming) {
			var r = S(this, t).event(e), i = e.changedTouches, a = i.length, s, c, l, u;
			for (Dd(e), s = 0; s < a; ++s) c = i[s], l = ic(c, this), r.touch0 && r.touch0[2] === c.identifier ? r.touch0[0] = l : r.touch1 && r.touch1[2] === c.identifier && (r.touch1[0] = l);
			if (c = r.that.__zoom, r.touch1) {
				var d = r.touch0[0], f = r.touch0[1], p = r.touch1[0], m = r.touch1[1], h = (h = p[0] - d[0]) * h + (h = p[1] - d[1]) * h, g = (g = m[0] - f[0]) * g + (g = m[1] - f[1]) * g;
				c = v(c, Math.sqrt(h / g)), l = [(d[0] + p[0]) / 2, (d[1] + p[1]) / 2], u = [(f[0] + m[0]) / 2, (f[1] + m[1]) / 2];
			} else if (r.touch0) l = r.touch0[0], u = r.touch0[1];
			else return;
			r.zoom("touch", n(y(c, l, u), r.extent, o));
		}
	}
	function O(e, ...t) {
		if (this.__zooming) {
			var n = S(this, t).event(e), r = e.changedTouches, i = r.length, a, o;
			for (Ed(e), f && clearTimeout(f), f = setTimeout(function() {
				f = null;
			}, p), a = 0; a < i; ++a) o = r[a], n.touch0 && n.touch0[2] === o.identifier ? delete n.touch0 : n.touch1 && n.touch1[2] === o.identifier && delete n.touch1;
			if (n.touch1 && !n.touch0 && (n.touch0 = n.touch1, delete n.touch1), n.touch0) n.touch0[1] = this.__zoom.invert(n.touch0[0]);
			else if (n.end(), n.taps === 2 && (o = ic(o, this), Math.hypot(d[0] - o[0], d[1] - o[1]) < g)) {
				var s = nc(this).on("dblclick.zoom");
				s && s.apply(this, arguments);
			}
		}
	}
	return _.wheelDelta = function(e) {
		return arguments.length ? (r = typeof e == "function" ? e : xd(+e), _) : r;
	}, _.filter = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : xd(!!t), _) : e;
	}, _.touchable = function(e) {
		return arguments.length ? (i = typeof e == "function" ? e : xd(!!e), _) : i;
	}, _.extent = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : xd([[+e[0][0], +e[0][1]], [+e[1][0], +e[1][1]]]), _) : t;
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
var Fd = {
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
}, Id = [[-Infinity, -Infinity], [Infinity, Infinity]], Ld = [
	"Enter",
	" ",
	"Escape"
], Rd = {
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
}, zd;
(function(e) {
	e.Strict = "strict", e.Loose = "loose";
})(zd ||= {});
var Bd;
(function(e) {
	e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(Bd ||= {});
var Vd;
(function(e) {
	e.Partial = "partial", e.Full = "full";
})(Vd ||= {});
var Hd = {
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
}, Ud;
(function(e) {
	e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Ud ||= {});
var Wd;
(function(e) {
	e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(Wd ||= {});
var Q;
(function(e) {
	e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(Q ||= {});
var Gd = {
	[Q.Left]: Q.Right,
	[Q.Right]: Q.Left,
	[Q.Top]: Q.Bottom,
	[Q.Bottom]: Q.Top
};
function Kd(e, t) {
	if (!e && !t) return !0;
	if (!e || !t || e.size !== t.size) return !1;
	if (!e.size && !t.size) return !0;
	for (let n of e.keys()) if (!t.has(n)) return !1;
	return !0;
}
function qd(e, t, n) {
	if (!n) return;
	let r = [];
	e.forEach((e, n) => {
		t?.has(n) || r.push(e);
	}), r.length && n(r);
}
function Jd(e) {
	return e === null ? null : e ? "valid" : "invalid";
}
var Yd = (e) => !!e && typeof e == "object" && "id" in e && "source" in e && "target" in e, Xd = (e) => !!e && typeof e == "object" && "id" in e && "position" in e && !("source" in e) && !("target" in e), Zd = (e) => !!e && typeof e == "object" && "id" in e && "internals" in e && !("source" in e) && !("target" in e), Qd = (e, t = [0, 0]) => {
	let { width: n, height: r } = Nf(e), i = e.origin ?? t, a = n * i[0], o = r * i[1];
	return {
		x: e.position.x - a,
		y: e.position.y - o
	};
}, $d = (e, t = { nodeOrigin: [0, 0] }) => e.length === 0 ? {
	x: 0,
	y: 0,
	width: 0,
	height: 0
} : hf(e.reduce((e, n) => {
	let r = typeof n == "string", i = !t.nodeLookup && !r ? n : void 0;
	return t.nodeLookup && (i = r ? t.nodeLookup.get(n) : Zd(n) ? n : t.nodeLookup.get(n.id)), pf(e, i ? _f(i, t.nodeOrigin) : {
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
})), ef = (e, t = {}) => {
	let n = {
		x: Infinity,
		y: Infinity,
		x2: -Infinity,
		y2: -Infinity
	}, r = !1;
	return e.forEach((e) => {
		(t.filter === void 0 || t.filter(e)) && (n = pf(n, _f(e)), r = !0);
	}), r ? hf(n) : {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
}, tf = (e, t, [n, r, i] = [
	0,
	0,
	1
], a = !1, o = !1) => {
	let s = (t.x - n) / i, c = (t.y - r) / i, l = t.width / i, u = t.height / i, d = [];
	for (let t of e.values()) {
		let { measured: e, selectable: n = !0, hidden: r = !1 } = t;
		if (o && !n || r) continue;
		let i = e.width ?? t.width ?? t.initialWidth ?? 0, f = e.height ?? t.height ?? t.initialHeight ?? 0, { x: p, y: m } = t.internals.positionAbsolute, h = yf(s, c, l, u, p, m, i, f), g = i * f, _ = a && h > 0;
		(!t.internals.handleBounds || _ || h >= g || t.dragging) && d.push(t);
	}
	return d;
}, nf = (e, t) => {
	let n = /* @__PURE__ */ new Set();
	return e.forEach((e) => {
		n.add(e.id);
	}), t.filter((e) => n.has(e.source) || n.has(e.target));
};
function rf(e, t) {
	let n = /* @__PURE__ */ new Map(), r = t?.nodes ? new Set(t.nodes.map((e) => e.id)) : null;
	return e.forEach((e) => {
		let i;
		if (t?.includeHiddenNodes) {
			let { width: t, height: n } = Nf(e);
			i = t > 0 && n > 0;
		} else i = !!(e.measured.width && e.measured.height && !e.hidden);
		i && (!r || r.has(e.id)) && n.set(e.id, e);
	}), n;
}
async function af({ nodes: e, width: t, height: n, panZoom: r, minZoom: i, maxZoom: a }, o) {
	if (e.size === 0) return !0;
	let s = Af(ef(rf(e, o)), t, n, o?.minZoom ?? i, o?.maxZoom ?? a, o?.padding ?? .1);
	return await r.setViewport(s, {
		duration: o?.duration,
		ease: o?.ease,
		interpolate: o?.interpolate
	}), !0;
}
function of({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: i, onError: a }) {
	let o = n.get(e), s = o.parentId ? n.get(o.parentId) : void 0, { x: c, y: l } = s ? s.internals.positionAbsolute : {
		x: 0,
		y: 0
	}, u = o.origin ?? r, d = o.extent || i;
	if (o.extent === "parent" && !o.expandParent) if (!s) a?.("005", Fd.error005());
	else {
		let e = s.measured.width, t = s.measured.height;
		e && t && (d = [[c, l], [c + e, l + t]]);
	}
	else s && Mf(o.extent) && (d = [[o.extent[0][0] + c, o.extent[0][1] + l], [o.extent[1][0] + c, o.extent[1][1] + l]]);
	let f = Mf(d) ? lf(t, d, o.measured) : t;
	return (o.measured.width === void 0 || o.measured.height === void 0) && a?.("015", Fd.error015()), {
		position: {
			x: f.x - c + (o.measured.width ?? 0) * u[0],
			y: f.y - l + (o.measured.height ?? 0) * u[1]
		},
		positionAbsolute: f
	};
}
async function sf({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: i }) {
	let a = new Set(e.map((e) => e.id)), o = [];
	for (let e of n) {
		if (e.deletable === !1) continue;
		let t = a.has(e.id), n = !t && e.parentId && o.find((t) => t.id === e.parentId);
		(t || n) && o.push(e);
	}
	let s = new Set(t.map((e) => e.id)), c = r.filter((e) => e.deletable !== !1), l = nf(o, c);
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
var cf = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), lf = (e = {
	x: 0,
	y: 0
}, t, n) => ({
	x: cf(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
	y: cf(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function uf(e, t, n) {
	let { width: r, height: i } = Nf(n), { x: a, y: o } = n.internals.positionAbsolute;
	return lf(e, [[a, o], [a + r, o + i]], t);
}
var df = (e, t, n) => e < t ? cf(Math.abs(e - t), 1, t) / t : e > n ? -cf(Math.abs(e - n), 1, t) / t : 0, ff = (e, t, n = 15, r = 40) => [df(e.x, r, t.width - r) * n, df(e.y, r, t.height - r) * n], pf = (e, t) => ({
	x: Math.min(e.x, t.x),
	y: Math.min(e.y, t.y),
	x2: Math.max(e.x2, t.x2),
	y2: Math.max(e.y2, t.y2)
}), mf = ({ x: e, y: t, width: n, height: r }) => ({
	x: e,
	y: t,
	x2: e + n,
	y2: t + r
}), hf = ({ x: e, y: t, x2: n, y2: r }) => ({
	x: e,
	y: t,
	width: n - e,
	height: r - t
}), gf = (e, t = [0, 0]) => {
	let { x: n, y: r } = Zd(e) ? e.internals.positionAbsolute : Qd(e, t);
	return {
		x: n,
		y: r,
		width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
		height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
	};
}, _f = (e, t = [0, 0]) => {
	let { x: n, y: r } = Zd(e) ? e.internals.positionAbsolute : Qd(e, t);
	return {
		x: n,
		y: r,
		x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
		y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
	};
}, vf = (e, t) => hf(pf(mf(e), mf(t))), yf = (e, t, n, r, i, a, o, s) => {
	let c = Math.max(0, Math.min(e + n, i + o) - Math.max(e, i)), l = Math.max(0, Math.min(t + r, a + s) - Math.max(t, a));
	return Math.ceil(c * l);
}, bf = (e, t) => yf(e.x, e.y, e.width, e.height, t.x, t.y, t.width, t.height), xf = (e) => Sf(e.width) && Sf(e.height) && Sf(e.x) && Sf(e.y), Sf = (e) => !isNaN(e) && isFinite(e), Cf = (e, t) => (e, t) => {}, wf = (e, t = [1, 1]) => ({
	x: t[0] * Math.round(e.x / t[0]),
	y: t[1] * Math.round(e.y / t[1])
}), Tf = ({ x: e, y: t }, [n, r, i], a = !1, o = [1, 1]) => {
	let s = {
		x: (e - n) / i,
		y: (t - r) / i
	};
	return a ? wf(s, o) : s;
}, Ef = ({ x: e, y: t }, [n, r, i]) => ({
	x: e * i + n,
	y: t * i + r
});
function Df(e, t) {
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
function Of(e, t, n) {
	if (typeof e == "string" || typeof e == "number") {
		let r = Df(e, n), i = Df(e, t);
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
		let r = Df(e.top ?? e.y ?? 0, n), i = Df(e.bottom ?? e.y ?? 0, n), a = Df(e.left ?? e.x ?? 0, t), o = Df(e.right ?? e.x ?? 0, t);
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
function kf(e, t, n, r, i, a) {
	let { x: o, y: s } = Ef(e, [
		t,
		n,
		r
	]), { x: c, y: l } = Ef({
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
var Af = (e, t, n, r, i, a) => {
	let o = Of(a, t, n), s = (t - o.x) / e.width, c = (n - o.y) / e.height, l = cf(Math.min(s, c), r, i), u = e.x + e.width / 2, d = e.y + e.height / 2, f = t / 2 - u * l, p = n / 2 - d * l, m = kf(e, f, p, l, t, n), h = {
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
}, jf = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function Mf(e) {
	return e != null && e !== "parent";
}
function Nf(e) {
	return {
		width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
		height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
	};
}
function Pf(e) {
	return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function Ff(e, t = {
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
function If(e) {
	return {
		...Rd,
		...e || {}
	};
}
function Lf(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: i }) {
	let { x: a, y: o } = Uf(e), s = Tf({
		x: a - (i?.left ?? 0),
		y: o - (i?.top ?? 0)
	}, r), { x: c, y: l } = n ? wf(s, t) : s;
	return {
		xSnapped: c,
		ySnapped: l,
		...s
	};
}
var Rf = (e) => ({
	width: e.offsetWidth,
	height: e.offsetHeight
}), zf = (e) => e?.getRootNode?.() || window?.document, Bf = [
	"INPUT",
	"SELECT",
	"TEXTAREA"
];
function Vf(e) {
	let t = e.composedPath?.()?.[0] || e.target;
	return t?.nodeType === 1 ? Bf.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey") : !1;
}
var Hf = (e) => "clientX" in e, Uf = (e, t) => {
	let n = Hf(e), r = n ? e.clientX : e.touches?.[0].clientX, i = n ? e.clientY : e.touches?.[0].clientY;
	return {
		x: r - (t?.left ?? 0),
		y: i - (t?.top ?? 0)
	};
}, Wf = (e, t, n, r, i) => {
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
			...Rf(t)
		};
	});
};
function Gf({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: i, sourceControlY: a, targetControlX: o, targetControlY: s }) {
	let c = e * .125 + i * .375 + o * .375 + n * .125, l = t * .125 + a * .375 + s * .375 + r * .125;
	return [
		c,
		l,
		Math.abs(c - e),
		Math.abs(l - t)
	];
}
function Kf(e, t) {
	return e >= 0 ? .5 * e : t * 25 * Math.sqrt(-e);
}
function qf({ pos: e, x1: t, y1: n, x2: r, y2: i, c: a }) {
	switch (e) {
		case Q.Left: return [t - Kf(t - r, a), n];
		case Q.Right: return [t + Kf(r - t, a), n];
		case Q.Top: return [t, n - Kf(n - i, a)];
		case Q.Bottom: return [t, n + Kf(i - n, a)];
	}
}
function Jf({ sourceX: e, sourceY: t, sourcePosition: n = Q.Bottom, targetX: r, targetY: i, targetPosition: a = Q.Top, curvature: o = .25 }) {
	let [s, c] = qf({
		pos: n,
		x1: e,
		y1: t,
		x2: r,
		y2: i,
		c: o
	}), [l, u] = qf({
		pos: a,
		x1: r,
		y1: i,
		x2: e,
		y2: t,
		c: o
	}), [d, f, p, m] = Gf({
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
function Yf({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
	let i = Math.abs(n - e) / 2, a = n < e ? n + i : n - i, o = Math.abs(r - t) / 2;
	return [
		a,
		r < t ? r + o : r - o,
		i,
		o
	];
}
function Xf({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: i = !1, zIndexMode: a = "basic" }) {
	return a === "manual" ? r : (i && n ? r + 1e3 : r) + Math.max(e.parentId || i && e.selected ? e.internals.z : 0, t.parentId || i && t.selected ? t.internals.z : 0);
}
function Zf({ sourceNode: e, targetNode: t, width: n, height: r, transform: i }) {
	let a = pf(_f(e), _f(t));
	return a.x === a.x2 && (a.x2 += 1), a.y === a.y2 && (a.y2 += 1), bf({
		x: -i[0] / i[2],
		y: -i[1] / i[2],
		width: n / i[2],
		height: r / i[2]
	}, hf(a)) > 0;
}
var Qf = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, $f = (e, t) => t.some((t) => t.source === e.source && t.target === e.target && (t.sourceHandle === e.sourceHandle || !t.sourceHandle && !e.sourceHandle) && (t.targetHandle === e.targetHandle || !t.targetHandle && !e.targetHandle)), ep = (e, t, n = {}) => {
	if (!e.source || !e.target) return n.onError?.("006", Fd.error006()), t;
	let r = n.getEdgeId || Qf, i;
	return i = Yd(e) ? { ...e } : {
		...e,
		id: r(e)
	}, $f(i, t) ? t : (i.sourceHandle === null && delete i.sourceHandle, i.targetHandle === null && delete i.targetHandle, t.concat(i));
};
function tp({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
	let [i, a, o, s] = Yf({
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
var np = {
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
}, rp = ({ source: e, sourcePosition: t = Q.Bottom, target: n }) => t === Q.Left || t === Q.Right ? e.x < n.x ? {
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
}, ip = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2);
function ap({ source: e, sourcePosition: t = Q.Bottom, target: n, targetPosition: r = Q.Top, center: i, offset: a, stepPosition: o }) {
	let s = np[t], c = np[r], l = {
		x: e.x + s.x * a,
		y: e.y + s.y * a
	}, u = {
		x: n.x + c.x * a,
		y: n.y + c.y * a
	}, d = rp({
		source: l,
		sourcePosition: t,
		target: u
	}), f = d.x === 0 ? "y" : "x", p = d[f], m = [], h, g, _ = {
		x: 0,
		y: 0
	}, v = {
		x: 0,
		y: 0
	}, [, , y, b] = Yf({
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
function op(e, t, n, r) {
	let i = Math.min(ip(e, t) / 2, ip(t, n) / 2, r), { x: a, y: o } = t;
	if (e.x === a && a === n.x || e.y === o && o === n.y) return `L${a} ${o}`;
	if (e.y === o) {
		let t = e.x < n.x ? -1 : 1, r = e.y < n.y ? 1 : -1;
		return `L ${a + i * t},${o}Q ${a},${o} ${a},${o + i * r}`;
	}
	let s = e.x < n.x ? 1 : -1;
	return `L ${a},${o + i * (e.y < n.y ? -1 : 1)}Q ${a},${o} ${a + i * s},${o}`;
}
function sp({ sourceX: e, sourceY: t, sourcePosition: n = Q.Bottom, targetX: r, targetY: i, targetPosition: a = Q.Top, borderRadius: o = 5, centerX: s, centerY: c, offset: l = 20, stepPosition: u = .5 }) {
	let [d, f, p, m, h] = ap({
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
	for (let e = 1; e < d.length - 1; e++) g += op(d[e - 1], d[e], d[e + 1], o);
	return g += `L${d[d.length - 1].x} ${d[d.length - 1].y}`, [
		g,
		f,
		p,
		m,
		h
	];
}
function cp(e) {
	return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function lp(e) {
	let { sourceNode: t, targetNode: n } = e;
	if (!cp(t) || !cp(n)) return null;
	let r = t.internals.handleBounds || up(t.handles), i = n.internals.handleBounds || up(n.handles), a = fp(r?.source ?? [], e.sourceHandle), o = fp(e.connectionMode === zd.Strict ? i?.target ?? [] : (i?.target ?? []).concat(i?.source ?? []), e.targetHandle);
	if (!a || !o) return e.onError?.("008", Fd.error008(a ? "target" : "source", {
		id: e.id,
		sourceHandle: e.sourceHandle,
		targetHandle: e.targetHandle
	})), null;
	let s = a?.position || Q.Bottom, c = o?.position || Q.Top, l = dp(t, a, s), u = dp(n, o, c);
	return {
		sourceX: l.x,
		sourceY: l.y,
		targetX: u.x,
		targetY: u.y,
		sourcePosition: s,
		targetPosition: c
	};
}
function up(e) {
	if (!e) return null;
	let t = [], n = [];
	for (let r of e) r.width = r.width ?? 1, r.height = r.height ?? 1, r.type === "source" ? t.push(r) : r.type === "target" && n.push(r);
	return {
		source: t,
		target: n
	};
}
function dp(e, t, n = Q.Left, r = !1) {
	let i = (t?.x ?? 0) + e.internals.positionAbsolute.x, a = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: o, height: s } = t ?? Nf(e);
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
function fp(e, t) {
	return e && (t ? e.find((e) => e.id === t) : e[0]) || null;
}
function pp(e, t) {
	return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((t) => `${t}=${e[t]}`).join("&")}` : "";
}
function mp(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: i }) {
	let a = /* @__PURE__ */ new Set();
	return e.reduce((e, o) => ([o.markerStart || r, o.markerEnd || i].forEach((r) => {
		if (r && typeof r == "object") {
			let i = pp(r, t);
			a.has(i) || (e.push({
				id: i,
				color: r.color || n,
				...r
			}), a.add(i));
		}
	}), e), []).sort((e, t) => e.id.localeCompare(t.id));
}
function hp(e, t, n, r, i) {
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
var gp = 1e3, _p = 10, vp = {
	nodeOrigin: [0, 0],
	nodeExtent: Id,
	elevateNodesOnSelect: !0,
	zIndexMode: "basic",
	defaults: {}
}, yp = {
	...vp,
	checkEquality: !0
};
function bp(e, t) {
	let n = { ...e };
	for (let e in t) t[e] !== void 0 && (n[e] = t[e]);
	return n;
}
function xp(e, t, n) {
	let r = bp(vp, n);
	for (let n of e.values()) if (n.parentId) Ep(n, e, t, r);
	else {
		let e = lf(Qd(n, r.nodeOrigin), Mf(n.extent) ? n.extent : r.nodeExtent, Nf(n));
		n.internals.positionAbsolute = e;
	}
}
function Sp(e, t) {
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
function Cp(e) {
	return e === "manual";
}
function wp(e, t, n, r = {}) {
	let i = bp(yp, r), a = { i: 0 }, o = new Map(t), s = i?.elevateNodesOnSelect && !Cp(i.zIndexMode) ? gp : 0, c = e.length > 0, l = !1;
	t.clear(), n.clear();
	for (let u of e) {
		let e = o.get(u.id);
		if (i.checkEquality && u === e?.internals.userNode) t.set(u.id, e);
		else {
			let n = lf(Qd(u, i.nodeOrigin), Mf(u.extent) ? u.extent : i.nodeExtent, Nf(u));
			e = {
				...i.defaults,
				...u,
				measured: {
					width: u.measured?.width,
					height: u.measured?.height
				},
				internals: {
					positionAbsolute: n,
					handleBounds: Sp(u, e),
					z: Dp(u, s, i.zIndexMode),
					userNode: u
				}
			}, t.set(u.id, e);
		}
		(e.measured === void 0 || e.measured.width === void 0 || e.measured.height === void 0) && !e.hidden && (c = !1), u.parentId && Ep(e, t, n, r, a), l ||= u.selected ?? !1;
	}
	return {
		nodesInitialized: c,
		hasSelectedNodes: l
	};
}
function Tp(e, t) {
	if (!e.parentId) return;
	let n = t.get(e.parentId);
	n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Ep(e, t, n, r, i) {
	let { elevateNodesOnSelect: a, nodeOrigin: o, nodeExtent: s, zIndexMode: c } = bp(vp, r), l = e.parentId, u = t.get(l);
	if (!u) {
		console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
		return;
	}
	Tp(e, n), i && !u.parentId && u.internals.rootParentIndex === void 0 && c === "auto" && (u.internals.rootParentIndex = ++i.i, u.internals.z = u.internals.z + i.i * _p), i && u.internals.rootParentIndex !== void 0 && (i.i = u.internals.rootParentIndex);
	let { x: d, y: f, z: p } = Op(e, u, o, s, a && !Cp(c) ? gp : 0, c), { positionAbsolute: m } = e.internals, h = d !== m.x || f !== m.y;
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
function Dp(e, t, n) {
	let r = Sf(e.zIndex) ? e.zIndex : 0;
	return Cp(n) ? r : r + (e.selected ? t : 0);
}
function Op(e, t, n, r, i, a) {
	let { x: o, y: s } = t.internals.positionAbsolute, c = Nf(e), l = Qd(e, n), u = Mf(e.extent) ? lf(l, e.extent, c) : l, d = lf({
		x: o + u.x,
		y: s + u.y
	}, r, c);
	e.extent === "parent" && (d = uf(d, c, t));
	let f = Dp(e, i, a), p = t.internals.z ?? 0;
	return {
		x: d.x,
		y: d.y,
		z: p >= f ? p + 1 : f
	};
}
function kp(e, t, n, r = [0, 0]) {
	let i = [], a = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = t.get(n.parentId);
		if (!e) continue;
		let r = vf(a.get(n.parentId)?.expandedRect ?? gf(e), n.rect);
		a.set(n.parentId, {
			expandedRect: r,
			parent: e
		});
	}
	return a.size > 0 && a.forEach(({ expandedRect: t, parent: a }, o) => {
		let s = a.internals.positionAbsolute, c = Nf(a), l = a.origin ?? r, u = t.x < s.x ? Math.round(Math.abs(s.x - t.x)) : 0, d = t.y < s.y ? Math.round(Math.abs(s.y - t.y)) : 0, f = Math.max(c.width, Math.round(t.width)), p = Math.max(c.height, Math.round(t.height)), m = (f - c.width) * l[0], h = (p - c.height) * l[1];
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
function Ap(e, t, n, r, i, a, o) {
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
		let s = Rf(r.nodeElement), u = e.measured.width !== s.width || e.measured.height !== s.height;
		if (s.width && s.height && (u || !e.internals.handleBounds || r.force)) {
			let p = r.nodeElement.getBoundingClientRect(), m = Mf(e.extent) ? e.extent : a, { positionAbsolute: h } = e.internals;
			if (e.parentId && e.extent === "parent") {
				let n = t.get(e.parentId);
				n && (h = uf(h, s, n));
			} else m && (h = lf(h, m, s));
			let g = {
				...e,
				measured: s,
				internals: {
					...e.internals,
					positionAbsolute: h,
					handleBounds: {
						source: Wf("source", r.nodeElement, p, d, e.id),
						target: Wf("target", r.nodeElement, p, d, e.id)
					}
				}
			};
			t.set(e.id, g), e.parentId && Ep(g, t, n, {
				nodeOrigin: i,
				zIndexMode: o
			}), c = !0, u && (l.push({
				id: e.id,
				type: "dimensions",
				dimensions: s
			}), e.expandParent && e.parentId && f.push({
				id: e.id,
				parentId: e.parentId,
				rect: gf(g, i)
			}));
		}
	}
	if (f.length > 0) {
		let e = kp(f, t, n, i);
		l.push(...e);
	}
	return {
		changes: l,
		updatedInternals: c
	};
}
async function jp({ delta: e, panZoom: t, transform: n, translateExtent: r, width: i, height: a }) {
	if (!t || !e.x && !e.y) return !1;
	let o = await t.setViewportConstrained({
		x: n[0] + e.x,
		y: n[1] + e.y,
		zoom: n[2]
	}, [[0, 0], [i, a]], r);
	return !!o && (o.x !== n[0] || o.y !== n[1] || o.k !== n[2]);
}
function Mp(e, t, n, r, i, a) {
	let o = i, s = r.get(o) || /* @__PURE__ */ new Map();
	r.set(o, s.set(n, t)), o = `${i}-${e}`;
	let c = r.get(o) || /* @__PURE__ */ new Map();
	if (r.set(o, c.set(n, t)), a) {
		o = `${i}-${e}-${a}`;
		let s = r.get(o) || /* @__PURE__ */ new Map();
		r.set(o, s.set(n, t));
	}
}
function Np(e, t, n) {
	e.clear(), t.clear();
	for (let r of n) {
		let { source: n, target: i, sourceHandle: a = null, targetHandle: o = null } = r, s = {
			edgeId: r.id,
			source: n,
			target: i,
			sourceHandle: a,
			targetHandle: o
		}, c = `${n}-${a}--${i}-${o}`;
		Mp("source", s, `${i}-${o}--${n}-${a}`, e, n, a), Mp("target", s, c, e, i, o), t.set(r.id, r);
	}
}
function Pp(e, t) {
	if (e === null || t === null) return !1;
	let n = Array.isArray(e) ? e : [e], r = Array.isArray(t) ? t : [t];
	if (n.length !== r.length) return !1;
	for (let e = 0; e < n.length; e++) if (n[e].id !== r[e].id || n[e].type !== r[e].type || !Object.is(n[e].data, r[e].data)) return !1;
	return !0;
}
function Fp(e, t) {
	if (!e.parentId) return !1;
	let n = t.get(e.parentId);
	return n ? n.selected ? !0 : Fp(n, t) : !1;
}
function Ip(e, t, n) {
	let r = e;
	do {
		if (r?.matches?.(t)) return !0;
		if (r === n) return !1;
		r = r?.parentElement;
	} while (r);
	return !1;
}
function Lp(e, t, n, r) {
	let i = /* @__PURE__ */ new Map();
	for (let [a, o] of e) if ((o.selected || o.id === r) && (!o.parentId || !Fp(o, e)) && (o.draggable || t && o.draggable === void 0)) {
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
function Rp({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
function zp({ dragItems: e, snapGrid: t, x: n, y: r }) {
	let i = e.values().next().value;
	if (!i) return null;
	let a = {
		x: n - i.distance.x,
		y: r - i.distance.y
	}, o = wf(a, t);
	return {
		x: o.x - a.x,
		y: o.y - a.y
	};
}
function Bp({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: i }) {
	let a = {
		x: null,
		y: null
	}, o = 0, s = /* @__PURE__ */ new Map(), c = !1, l = {
		x: 0,
		y: 0
	}, u = null, d = !1, f = null, p = !1, m = !1, h = null;
	function g({ noDragClassName: g, handleSelector: _, domNode: v, isSelectable: y, nodeId: b, nodeClickDistance: x = 0 }) {
		f = nc(v);
		function S({ x: e, y: n }) {
			let { nodeLookup: i, nodeExtent: o, snapGrid: c, snapToGrid: l, nodeOrigin: u, onNodeDrag: d, onSelectionDrag: f, onError: p, updateNodePositions: g } = t();
			a = {
				x: e,
				y: n
			};
			let _ = !1, v = s.size > 1, y = v && o ? mf(ef(s)) : null, x = v && l ? zp({
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
				} : wf(a, c));
				let s = null;
				if (v && o && !r.extent && y) {
					let { positionAbsolute: e } = r.internals, t = e.x - y.x + o[0][0], n = e.x + r.measured.width - y.x2 + o[1][0], i = e.y - y.y + o[0][1], a = e.y + r.measured.height - y.y2 + o[1][1];
					s = [[t, i], [n, a]];
				}
				let { position: d, positionAbsolute: f } = of({
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
				let [e, t] = Rp({
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
			let [s, d] = ff(l, u, r);
			(s !== 0 || d !== 0) && (a.x = (a.x ?? 0) - s / e[2], a.y = (a.y ?? 0) - d / e[2], await n({
				x: s,
				y: d
			}) && S(a)), o = requestAnimationFrame(C);
		}
		function w(r) {
			let { nodeLookup: i, multiSelectionActive: o, nodesDraggable: c, transform: l, snapGrid: f, snapToGrid: p, selectNodesOnDrag: m, onNodeDragStart: h, onSelectionDragStart: g, unselectNodesAndEdges: _ } = t();
			d = !0, (!m || !y) && !o && b && (i.get(b)?.selected || _()), y && m && b && e?.(b);
			let v = Lf(r.sourceEvent, {
				transform: l,
				snapGrid: f,
				snapToGrid: p,
				containerBounds: u
			});
			if (a = v, s = Lp(i, c, v, b), s.size > 0 && (n || h || !b && g)) {
				let [e, t] = Rp({
					nodeId: b,
					dragItems: s,
					nodeLookup: i
				});
				n?.(r.sourceEvent, s, e, t), h?.(r.sourceEvent, e, t), b || g?.(r.sourceEvent, t);
			}
		}
		let T = _c().clickDistance(x).on("start", (e) => {
			let { domNode: n, nodeDragThreshold: r, transform: i, snapGrid: o, snapToGrid: s } = t();
			u = n?.getBoundingClientRect() || null, p = !1, m = !1, h = e.sourceEvent, r === 0 && w(e), a = Lf(e.sourceEvent, {
				transform: i,
				snapGrid: o,
				snapToGrid: s,
				containerBounds: u
			}), l = Uf(e.sourceEvent, u);
		}).on("drag", (e) => {
			let { autoPanOnNodeDrag: n, transform: r, snapGrid: i, snapToGrid: o, nodeDragThreshold: f, nodeLookup: m } = t(), g = Lf(e.sourceEvent, {
				transform: r,
				snapGrid: i,
				snapToGrid: o,
				containerBounds: u
			});
			if (h = e.sourceEvent, (e.sourceEvent.type === "touchmove" && e.sourceEvent.touches.length > 1 || b && !m.has(b)) && (p = !0), !p) {
				if (!c && n && d && (c = !0, C()), !d) {
					let t = Uf(e.sourceEvent, u), n = t.x - l.x, r = t.y - l.y;
					Math.sqrt(n * n + r * r) > f && w(e);
				}
				(a.x !== g.xSnapped || a.y !== g.ySnapped) && s && d && (l = Uf(e.sourceEvent, u), S(g));
			}
		}).on("end", (e) => {
			if (!d || p) {
				p && s.size > 0 && t().updateNodePositions(s, !1);
				return;
			}
			if (c = !1, d = !1, cancelAnimationFrame(o), s.size > 0) {
				let { nodeLookup: n, updateNodePositions: r, onNodeDragStop: a, onSelectionDragStop: o } = t();
				if (m &&= (r(s, !1), !1), i || a || !b && o) {
					let [t, r] = Rp({
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
			return !e.button && (!g || !Ip(t, `.${g}`, v)) && (!_ || Ip(t, _, v));
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
function Vp(e, t, n) {
	let r = [], i = {
		x: e.x - n,
		y: e.y - n,
		width: n * 2,
		height: n * 2
	};
	for (let e of t.values()) bf(i, gf(e)) > 0 && r.push(e);
	return r;
}
var Hp = 250;
function Up(e, t, n, r) {
	let i = [], a = Infinity, o = Vp(e, n, t + Hp);
	for (let n of o) {
		let o = [...n.internals.handleBounds?.source ?? [], ...n.internals.handleBounds?.target ?? []];
		for (let s of o) {
			if (r.nodeId === s.nodeId && r.type === s.type && r.id === s.id) continue;
			let { x: o, y: c } = dp(n, s, s.position, !0), l = Math.sqrt((o - e.x) ** 2 + (c - e.y) ** 2);
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
function Wp(e, t, n, r, i, a = !1) {
	let o = r.get(e);
	if (!o) return null;
	let s = i === "strict" ? o.internals.handleBounds?.[t] : [...o.internals.handleBounds?.source ?? [], ...o.internals.handleBounds?.target ?? []], c = (n ? s?.find((e) => e.id === n) : s?.[0]) ?? null;
	return c && a ? {
		...c,
		...dp(o, c, c.position, !0)
	} : c;
}
function Gp(e, t) {
	return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function Kp(e, t) {
	let n = null;
	return t ? n = !0 : e && !t && (n = !1), n;
}
var qp = () => !0;
function Jp(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: i, edgeUpdaterType: a, isTarget: o, domNode: s, nodeLookup: c, lib: l, autoPanOnConnect: u, flowId: d, panBy: f, cancelConnection: p, onConnectStart: m, onConnect: h, onConnectEnd: g, isValidConnection: _ = qp, onReconnectEnd: v, updateConnection: y, getTransform: b, getFromHandle: x, autoPanSpeed: S, dragThreshold: C = 1, handleDomNode: w }) {
	let T = zf(e.target), E = 0, D, { x: ee, y: O } = Uf(e), te = Gp(a, w), ne = s?.getBoundingClientRect(), re = !1;
	if (!ne || !te) return;
	let k = Wp(i, te, r, c, t);
	if (!k) return;
	let ie = Uf(e, ne), ae = !1, oe = null, se = !1, ce = null;
	function le() {
		if (!u || !ne) return;
		let [e, t] = ff(ie, ne, S);
		f({
			x: e,
			y: t
		}), E = requestAnimationFrame(le);
	}
	let ue = {
		...k,
		nodeId: i,
		type: te,
		position: k.position
	}, de = c.get(i), fe = {
		inProgress: !0,
		isValid: null,
		from: dp(de, ue, Q.Left, !0),
		fromHandle: ue,
		fromPosition: ue.position,
		fromNode: de,
		to: ie,
		toHandle: null,
		toPosition: Gd[ue.position],
		toNode: null,
		pointer: ie
	};
	function pe() {
		re = !0, y(fe), m?.(e, {
			nodeId: i,
			handleId: r,
			handleType: te
		});
	}
	C === 0 && pe();
	function me(e) {
		if (!re) {
			let { x: t, y: n } = Uf(e), r = t - ee, i = n - O;
			if (!(r * r + i * i > C * C)) return;
			pe();
		}
		if (!x() || !ue) {
			he(e);
			return;
		}
		let a = b();
		ie = Uf(e, ne), D = Up(Tf(ie, a, !1, [1, 1]), n, c, ue), ae ||= (le(), !0);
		let s = Yp(e, {
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
		ce = s.handleDomNode, oe = s.connection, se = Kp(!!D, s.isValid);
		let u = c.get(i), f = u ? dp(u, ue, Q.Left, !0) : fe.from, p = {
			...fe,
			from: f,
			isValid: se,
			to: s.toHandle && se ? Ef({
				x: s.toHandle.x,
				y: s.toHandle.y
			}, a) : ie,
			toHandle: s.toHandle,
			toPosition: se && s.toHandle ? s.toHandle.position : Gd[ue.position],
			toNode: s.toHandle ? c.get(s.toHandle.nodeId) : null,
			pointer: ie
		};
		y(p), fe = p;
	}
	function he(e) {
		if (!("touches" in e && e.touches.length > 0)) {
			if (re) {
				(D || ce) && oe && se && h?.(oe);
				let { inProgress: t, ...n } = fe, r = {
					...n,
					toPosition: fe.toHandle ? fe.toPosition : null
				};
				g?.(e, r), a && v?.(e, r);
			}
			p(), cancelAnimationFrame(E), ae = !1, se = !1, oe = null, ce = null, T.removeEventListener("mousemove", me), T.removeEventListener("mouseup", he), T.removeEventListener("touchmove", me), T.removeEventListener("touchend", he);
		}
	}
	T.addEventListener("mousemove", me), T.addEventListener("mouseup", he), T.addEventListener("touchmove", me), T.addEventListener("touchend", he);
}
function Yp(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: i, fromType: a, doc: o, lib: s, flowId: c, isValidConnection: l = qp, nodeLookup: u }) {
	let d = a === "target", f = t ? o.querySelector(`.${s}-flow__handle[data-id="${c}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: p, y: m } = Uf(e), h = o.elementFromPoint(p, m), g = h?.classList.contains(`${s}-flow__handle`) ? h : f, _ = {
		handleDomNode: g,
		isValid: !1,
		connection: null,
		toHandle: null
	};
	if (g) {
		let e = Gp(void 0, g), t = g.getAttribute("data-nodeid"), a = g.getAttribute("data-handleid"), o = g.classList.contains("connectable"), s = g.classList.contains("connectableend");
		if (!t || !e) return _;
		let c = {
			source: d ? t : r,
			sourceHandle: d ? a : i,
			target: d ? r : t,
			targetHandle: d ? i : a
		};
		_.connection = c, _.isValid = o && s && (n === zd.Strict ? d && e === "source" || !d && e === "target" : t !== r || a !== i) && l(c), _.toHandle = Wp(t, e, a, u, n, !0);
	}
	return _;
}
var Xp = {
	onPointerDown: Jp,
	isValid: Yp
};
function Zp({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
	let i = nc(e);
	function a({ translateExtent: e, width: a, height: o, zoomStep: s = 1, pannable: c = !0, zoomable: l = !0, inversePan: u = !1 }) {
		let d = (e) => {
			if (e.sourceEvent.type !== "wheel" || !t) return;
			let r = n(), i = e.sourceEvent.ctrlKey && jf() ? 10 : 1, a = -e.sourceEvent.deltaY * (e.sourceEvent.deltaMode === 1 ? .05 : e.sourceEvent.deltaMode ? 1 : .002) * s, o = r[2] * 2 ** (a * i);
			t.scaleTo(o);
		}, f = [0, 0], p = Pd().on("start", (e) => {
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
		pointer: ic
	};
}
var Qp = (e) => ({
	x: e.x,
	y: e.y,
	zoom: e.k
}), $p = ({ x: e, y: t, zoom: n }) => wd.translate(e, t).scale(n), em = (e, t) => e.target.closest(`.${t}`), tm = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), nm = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, rm = (e, t = 0, n = nm, r = () => {}) => {
	let i = typeof t == "number" && t > 0;
	return i || r(), i ? e.transition().duration(t).ease(n).on("end", r) : e;
}, im = (e) => {
	let t = e.ctrlKey && jf() ? 10 : 1;
	return -e.deltaY * (e.deltaMode === 1 ? .05 : e.deltaMode ? 1 : .002) * t;
};
function am({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: i, panOnScrollSpeed: a, zoomOnPinch: o, onPanZoomStart: s, onPanZoom: c, onPanZoomEnd: l }) {
	return (u) => {
		if (em(u, t)) return u.ctrlKey && u.preventDefault(), !1;
		u.preventDefault(), u.stopImmediatePropagation();
		let d = n.property("__zoom").k || 1;
		if (u.ctrlKey && o) {
			let e = ic(u), t = d * 2 ** im(u);
			r.scaleTo(n, t, e, u);
			return;
		}
		let f = u.deltaMode === 1 ? 20 : 1, p = i === Bd.Vertical ? 0 : u.deltaX * f, m = i === Bd.Horizontal ? 0 : u.deltaY * f;
		!jf() && u.shiftKey && i !== Bd.Vertical && (p = u.deltaY * f, m = 0), r.translateBy(n, -(p / d) * a, -(m / d) * a, { internal: !0 });
		let h = Qp(n.property("__zoom"));
		clearTimeout(e.panScrollTimeout), e.isPanScrolling ? c?.(u, h) : (e.isPanScrolling = !0, s?.(u, h)), e.panScrollTimeout = setTimeout(() => {
			l?.(u, h), e.isPanScrolling = !1;
		}, 150);
	};
}
function om({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
	return function(r, i) {
		let a = r.type === "wheel", o = !t && a && !r.ctrlKey, s = em(r, e);
		if (r.ctrlKey && a && s && r.preventDefault(), o || s) return null;
		r.preventDefault(), n.call(this, r, i);
	};
}
function sm({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
	return (r) => {
		if (r.sourceEvent?.internal) return;
		let i = Qp(r.transform);
		e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = i, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, i);
	};
}
function cm({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: i }) {
	return (a) => {
		e.usedRightMouseButton = !!(n && tm(t, e.mouseButton ?? 0)), a.sourceEvent?.sync || r([
			a.transform.x,
			a.transform.y,
			a.transform.k
		]), i && !a.sourceEvent?.internal && i?.(a.sourceEvent, Qp(a.transform));
	};
}
function lm({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: i, onPaneContextMenu: a }) {
	return (o) => {
		if (!o.sourceEvent?.internal && (e.isZoomingOrPanning = !1, a && tm(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && o.sourceEvent && a(o.sourceEvent), e.usedRightMouseButton = !1, r(!1), i)) {
			let t = Qp(o.transform);
			e.prevViewport = t, clearTimeout(e.timerId), e.timerId = setTimeout(() => {
				i?.(o.sourceEvent, t);
			}, n ? 150 : 0);
		}
	};
}
function um({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: i, zoomOnDoubleClick: a, userSelectionActive: o, noWheelClassName: s, noPanClassName: c, lib: l, connectionInProgress: u }) {
	return (d) => {
		let f = e || t, p = n && d.ctrlKey, m = d.type === "wheel";
		if (d.button === 1 && d.type === "mousedown" && (em(d, `${l}-flow__node`) || em(d, `${l}-flow__edge`))) return !0;
		if (!r && !f && !i && !a && !n || o || u && !m || em(d, s) && m || em(d, c) && (!m || i && m && !e) || !n && d.ctrlKey && m) return !1;
		if (!n && d.type === "touchstart" && d.touches?.length > 1) return d.preventDefault(), !1;
		if (!f && !i && !p && m || !r && (d.type === "mousedown" || d.type === "touchstart") || Array.isArray(r) && !r.includes(d.button) && d.type === "mousedown") return !1;
		let h = Array.isArray(r) && r.includes(d.button) || !d.button || d.button <= 1;
		return (!d.ctrlKey || m) && h;
	};
}
function dm({ domNode: e, minZoom: t, maxZoom: n, translateExtent: r, viewport: i, onPanZoom: a, onPanZoomStart: o, onPanZoomEnd: s, onDraggingChange: c }) {
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
	let f = Pd().extent(() => d).scaleExtent([t, n]).translateExtent(r), p = nc(e).call(f);
	y({
		x: i.x,
		y: i.y,
		zoom: cf(i.zoom, t, n)
	}, [[0, 0], [u.width, u.height]], r);
	let m = p.on("wheel.zoom"), h = p.on("dblclick.zoom");
	f.wheelDelta(im);
	async function g(e, t) {
		return p ? new Promise((n) => {
			f?.interpolate(t?.interpolate === "linear" ? bl : Pl).transform(rm(p, t?.duration, t?.ease, () => n(!0)), e);
		}) : !1;
	}
	function _({ noWheelClassName: e, noPanClassName: t, onPaneContextMenu: n, userSelectionActive: r, panOnScroll: i, panOnDrag: u, panOnScrollMode: d, panOnScrollSpeed: g, preventScrolling: _, zoomOnPinch: y, zoomOnScroll: b, zoomOnDoubleClick: x, zoomActivationKeyPressed: S, lib: C, onTransformChange: w, connectionInProgress: T, paneClickDistance: E, selectionOnDrag: D }) {
		r && !l.isZoomingOrPanning && v();
		let ee = i && !S && !r;
		f.clickDistance(D ? Infinity : !Sf(E) || E < 0 ? 0 : E);
		let O = ee ? am({
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
		}) : om({
			noWheelClassName: e,
			preventScrolling: _,
			d3ZoomHandler: m
		});
		p.on("wheel.zoom", O, { passive: !1 });
		let te = sm({
			zoomPanValues: l,
			onDraggingChange: c,
			onPanZoomStart: o
		});
		f.on("start", te);
		let ne = cm({
			zoomPanValues: l,
			panOnDrag: u,
			onPaneContextMenu: !!n,
			onPanZoom: a,
			onTransformChange: w
		});
		f.on("zoom", ne);
		let re = lm({
			zoomPanValues: l,
			panOnDrag: u,
			panOnScroll: i,
			onPaneContextMenu: n,
			onPanZoomEnd: s,
			onDraggingChange: c
		});
		f.on("end", re);
		let k = um({
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
		f.filter(k), x ? p.on("dblclick.zoom", h) : p.on("dblclick.zoom", null);
	}
	function v() {
		f.on("zoom", null);
	}
	async function y(e, t, n) {
		let r = $p(e), i = f?.constrain()(r, t, n);
		return i && await g(i), i;
	}
	async function b(e, t) {
		let n = $p(e);
		return await g(n, t), n;
	}
	function x(e) {
		if (p) {
			let t = $p(e), n = p.property("__zoom");
			(n.k !== e.zoom || n.x !== e.x || n.y !== e.y) && f?.transform(p, t, null, { sync: !0 });
		}
	}
	function S() {
		let e = p ? Td(p.node()) : {
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
			f?.interpolate(t?.interpolate === "linear" ? bl : Pl).scaleTo(rm(p, t?.duration, t?.ease, () => n(!0)), e);
		}) : !1;
	}
	async function w(e, t) {
		return p ? new Promise((n) => {
			f?.interpolate(t?.interpolate === "linear" ? bl : Pl).scaleBy(rm(p, t?.duration, t?.ease, () => n(!0)), e);
		}) : !1;
	}
	function T(e) {
		f?.scaleExtent(e);
	}
	function E(e) {
		f?.translateExtent(e);
	}
	function D(e) {
		let t = !Sf(e) || e < 0 ? 0 : e;
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
var fm;
(function(e) {
	e.Line = "line", e.Handle = "handle";
})(fm ||= {});
var pm = Cf("Svelte Flow", "https://svelteflow.dev/");
function mm(e, t, n = {}) {
	return ep(e, t, {
		...n,
		onError: n.onError ?? pm
	});
}
function hm() {
	let e = {};
	return [(t) => {
		if (t && !ut(e)) throw Error(t);
		return ct(e);
	}, (t) => lt(e, t)];
}
var [gm, _m] = hm(), [vm, ym] = hm(), [bm, xm] = hm(), Sm = /* @__PURE__ */ new Set([
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
]), Cm = /* @__PURE__ */ W("<div><!></div>");
function wm(e, t) {
	N(t, !0);
	let n = X(t, "id", 7, null), r = X(t, "type", 7, "source"), i = X(t, "position", 23, () => Q.Top), a = X(t, "style", 7), o = X(t, "class", 7), s = X(t, "isConnectable", 7), c = X(t, "isConnectableStart", 7, !0), l = X(t, "isConnectableEnd", 7, !0), u = X(t, "isValidConnection", 7), d = X(t, "onconnect", 7), f = X(t, "ondisconnect", 7), p = X(t, "children", 7), m = /* @__PURE__ */ Va(t, Sm), h = gm("Handle must be used within a Custom Node component"), g = vm("Handle must be used within a Custom Node component"), _ = /* @__PURE__ */ F(() => r() === "target"), v = /* @__PURE__ */ F(() => s() === void 0 ? g.value : s()), y = uh(), b = /* @__PURE__ */ F(() => y.ariaLabelConfig), x = null;
	Jn(() => {
		if (d() || f()) {
			y.edges;
			let e = y.connectionLookup.get(`${h}-${r()}${n() ? `-${n()}` : ""}`);
			if (x && !Kd(e, x)) {
				let t = e ?? /* @__PURE__ */ new Map();
				qd(x, t, f()), qd(t, x, d());
			}
			x = new Map(e);
		}
	});
	let S = /* @__PURE__ */ F(() => {
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
			y.connectionMode === zd.Strict ? e?.type !== r() : h !== e?.nodeId || n() !== e?.id,
			o && i
		];
	}), C = /* @__PURE__ */ F(() => te(U(S), 5)), w = /* @__PURE__ */ F(() => U(C)[0]), E = /* @__PURE__ */ F(() => U(C)[1]), D = /* @__PURE__ */ F(() => U(C)[2]), ee = /* @__PURE__ */ F(() => U(C)[3]), O = /* @__PURE__ */ F(() => U(C)[4]);
	function ne(e) {
		let t = y.onbeforeconnect ? y.onbeforeconnect(e) : e;
		t && (y.addEdge(t), y.onconnect?.(e));
	}
	function re(e) {
		let t = Hf(e);
		e.currentTarget && (t && e.button === 0 || !t) && Xp.onPointerDown(e, {
			handleId: n(),
			nodeId: h,
			isTarget: U(_),
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
	function k(e) {
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
		let t = zf(e.target), i = u() ?? y.isValidConnection, { connectionMode: a, clickConnectStartHandle: o, flowId: s, nodeLookup: l } = y, { connection: d, isValid: f } = Xp.isValid(e, {
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
		let p = structuredClone(it(y.connection));
		delete p.inProgress, p.toPosition = p.toHandle ? p.toHandle.position : null, y.onclickconnectend?.(e, p), y.clickConnectStartHandle = null;
	}
	var ie = {
		get id() {
			return n();
		},
		set id(e = null) {
			n(e), I();
		},
		get type() {
			return r();
		},
		set type(e = "source") {
			r(e), I();
		},
		get position() {
			return i();
		},
		set position(e = Q.Top) {
			i(e), I();
		},
		get style() {
			return a();
		},
		set style(e) {
			a(e), I();
		},
		get class() {
			return o();
		},
		set class(e) {
			o(e), I();
		},
		get isConnectable() {
			return s();
		},
		set isConnectable(e) {
			s(e), I();
		},
		get isConnectableStart() {
			return c();
		},
		set isConnectableStart(e = !0) {
			c(e), I();
		},
		get isConnectableEnd() {
			return l();
		},
		set isConnectableEnd(e = !0) {
			l(e), I();
		},
		get isValidConnection() {
			return u();
		},
		set isValidConnection(e) {
			u(e), I();
		},
		get onconnect() {
			return d();
		},
		set onconnect(e) {
			d(e), I();
		},
		get ondisconnect() {
			return f();
		},
		set ondisconnect(e) {
			f(e), I();
		},
		get children() {
			return p();
		},
		set children(e) {
			p(e), I();
		}
	}, ae = Cm(), oe = () => {};
	return Ea(ae, () => ({
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
		onclick: y.clickConnect ? k : void 0,
		onkeypress: oe,
		style: a(),
		role: "button",
		"aria-label": U(b)["handle.ariaLabel"],
		tabindex: "-1",
		...m,
		[fa]: {
			valid: U(O),
			connectingto: U(D),
			connectingfrom: U(E),
			source: !U(_),
			target: U(_),
			connectablestart: c(),
			connectableend: l(),
			connectable: U(v),
			connectionindicator: U(v) && (!U(w) || U(ee)) && (U(w) || y.clickConnectStartHandle ? l() : c())
		}
	})), Di(z(ae), () => p() ?? T), j(ae), q(e, ae), P(ie);
}
Z(wm, {
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
var Tm = /* @__PURE__ */ W("<!> <!>", 1);
function Em(e, t) {
	N(t, !0);
	let n = X(t, "data", 7), r = X(t, "targetPosition", 23, () => Q.Top), i = X(t, "sourcePosition", 23, () => Q.Bottom);
	var a = {
		get data() {
			return n();
		},
		set data(e) {
			n(e), I();
		},
		get targetPosition() {
			return r();
		},
		set targetPosition(e = Q.Top) {
			r(e), I();
		},
		get sourcePosition() {
			return i();
		},
		set sourcePosition(e = Q.Bottom) {
			i(e), I();
		}
	}, o = Tm(), s = B(o);
	wm(s, {
		type: "target",
		get position() {
			return r();
		}
	});
	var c = V(s);
	return wm(V(c), {
		type: "source",
		get position() {
			return i();
		}
	}), H(() => yi(c, ` ${n()?.label ?? ""} `)), q(e, o), P(a);
}
Z(Em, {
	data: {},
	targetPosition: {},
	sourcePosition: {}
}, [], [], { mode: "open" });
var Dm = /* @__PURE__ */ W(" <!>", 1);
function Om(e, t) {
	N(t, !0);
	let n = X(t, "data", 23, () => ({ label: "Node" })), r = X(t, "sourcePosition", 23, () => Q.Bottom);
	var i = {
		get data() {
			return n();
		},
		set data(e = { label: "Node" }) {
			n(e), I();
		},
		get sourcePosition() {
			return r();
		},
		set sourcePosition(e = Q.Bottom) {
			r(e), I();
		}
	};
	M();
	var a = Dm(), o = B(a);
	return wm(V(o), {
		type: "source",
		get position() {
			return r();
		}
	}), H(() => yi(o, `${n()?.label ?? ""} `)), q(e, a), P(i);
}
Z(Om, {
	data: {},
	sourcePosition: {}
}, [], [], { mode: "open" });
var km = /* @__PURE__ */ W(" <!>", 1);
function Am(e, t) {
	N(t, !0);
	let n = X(t, "data", 23, () => ({ label: "Node" })), r = X(t, "targetPosition", 23, () => Q.Top);
	var i = {
		get data() {
			return n();
		},
		set data(e = { label: "Node" }) {
			n(e), I();
		},
		get targetPosition() {
			return r();
		},
		set targetPosition(e = Q.Top) {
			r(e), I();
		}
	};
	M();
	var a = km(), o = B(a);
	return wm(V(o), {
		type: "target",
		get position() {
			return r();
		}
	}), H(() => yi(o, `${n()?.label ?? ""} `)), q(e, a), P(i);
}
Z(Am, {
	data: {},
	targetPosition: {}
}, [], [], { mode: "open" });
function jm(e, t) {}
Z(jm, {}, [], [], { mode: "open" });
function Mm(e, t, n) {
	if (!n || !t) return;
	let r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
	r && r.appendChild(e);
}
function Nm(e, t) {
	let n = /* @__PURE__ */ F(uh), r = /* @__PURE__ */ F(() => U(n).domNode), i;
	return U(r) ? Mm(e, U(r), t) : i = Yn(() => {
		Kn(() => {
			Mm(e, U(r), t), i?.();
		});
	}), {
		async update(t) {
			Mm(e, U(r), t);
		},
		destroy() {
			e.parentNode && e.parentNode.removeChild(e), i?.();
		}
	};
}
function Pm() {
	let e = /* @__PURE__ */ L(typeof window > "u");
	if (U(e)) {
		let t = Yn(() => {
			Kn(() => {
				R(e, !1), t?.();
			});
		});
	}
	return { get value() {
		return U(e);
	} };
}
var Fm = (e) => Xd(e), Im = (e) => Yd(e);
function Lm(e) {
	return e === void 0 ? void 0 : `${e}px`;
}
var Rm = {
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
}, zm = /* @__PURE__ */ new Set([
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
]), Bm = /* @__PURE__ */ W("<div><!></div>"), Vm = {
	hash: "svelte-17ryymr",
	code: ".transparent.svelte-17ryymr {background:transparent;}"
};
function Hm(e, t) {
	N(t, !0), Yi(e, Vm);
	let n = X(t, "x", 7, 0), r = X(t, "y", 7, 0), i = X(t, "width", 7), a = X(t, "height", 7), o = X(t, "selectEdgeOnClick", 7, !1), s = X(t, "transparent", 7, !1), c = X(t, "class", 7), l = X(t, "children", 7), u = /* @__PURE__ */ Va(t, zm), d = uh(), f = bm("EdgeLabel must be used within a Custom Edge component"), p = /* @__PURE__ */ F(() => d.visible.edges.get(f)?.zIndex);
	var m = {
		get x() {
			return n();
		},
		set x(e = 0) {
			n(e), I();
		},
		get y() {
			return r();
		},
		set y(e = 0) {
			r(e), I();
		},
		get width() {
			return i();
		},
		set width(e) {
			i(e), I();
		},
		get height() {
			return a();
		},
		set height(e) {
			a(e), I();
		},
		get selectEdgeOnClick() {
			return o();
		},
		set selectEdgeOnClick(e = !1) {
			o(e), I();
		},
		get transparent() {
			return s();
		},
		set transparent(e = !1) {
			s(e), I();
		},
		get class() {
			return c();
		},
		set class(e) {
			c(e), I();
		},
		get children() {
			return l();
		},
		set children(e) {
			l(e), I();
		}
	}, h = Bm(), g = () => {
		o() && f && d.handleEdgeSelection(f);
	};
	return Ea(h, (e) => ({
		class: [
			"svelte-flow__edge-label",
			{ transparent: s() },
			c()
		],
		tabindex: "-1",
		onclick: g,
		...u,
		[pa]: e
	}), [() => ({
		display: Pm().value ? "none" : void 0,
		cursor: o() ? "pointer" : void 0,
		transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
		"pointer-events": "all",
		width: Lm(i()),
		height: Lm(a()),
		"z-index": U(p)
	})], void 0, void 0, "svelte-17ryymr"), Di(z(h), () => l() ?? T), j(h), Xi(h, (e, t) => Nm?.(e, t), () => "edge-labels"), q(e, h), P(m);
}
Z(Hm, {
	x: {},
	y: {},
	width: {},
	height: {},
	selectEdgeOnClick: {},
	transparent: {},
	class: {},
	children: {}
}, [], [], { mode: "open" });
var Um = /* @__PURE__ */ new Set([
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
]), Wm = /* @__PURE__ */ G("<path></path>"), Gm = /* @__PURE__ */ G("<path fill=\"none\"></path><!><!>", 1);
function Km(e, t) {
	N(t, !0);
	let n = X(t, "id", 7), r = X(t, "path", 7), i = X(t, "label", 7), a = X(t, "labelX", 7), o = X(t, "labelY", 7), s = X(t, "labelStyle", 7), c = X(t, "markerStart", 7), l = X(t, "markerEnd", 7), u = X(t, "style", 7), d = X(t, "interactionWidth", 7, 20), f = X(t, "class", 7), p = /* @__PURE__ */ Va(t, Um);
	var m = {
		get id() {
			return n();
		},
		set id(e) {
			n(e), I();
		},
		get path() {
			return r();
		},
		set path(e) {
			r(e), I();
		},
		get label() {
			return i();
		},
		set label(e) {
			i(e), I();
		},
		get labelX() {
			return a();
		},
		set labelX(e) {
			a(e), I();
		},
		get labelY() {
			return o();
		},
		set labelY(e) {
			o(e), I();
		},
		get labelStyle() {
			return s();
		},
		set labelStyle(e) {
			s(e), I();
		},
		get markerStart() {
			return c();
		},
		set markerStart(e) {
			c(e), I();
		},
		get markerEnd() {
			return l();
		},
		set markerEnd(e) {
			l(e), I();
		},
		get style() {
			return u();
		},
		set style(e) {
			u(e), I();
		},
		get interactionWidth() {
			return d();
		},
		set interactionWidth(e = 20) {
			d(e), I();
		},
		get class() {
			return f();
		},
		set class(e) {
			f(e), I();
		}
	}, h = Gm(), g = B(h), _ = V(g), v = (e) => {
		var t = Wm();
		Ea(t, () => ({
			d: r(),
			"stroke-opacity": 0,
			"stroke-width": d(),
			fill: "none",
			class: "svelte-flow__edge-interaction",
			...p
		})), q(e, t);
	};
	J(_, (e) => {
		d() > 0 && e(v);
	});
	var y = V(_), b = (e) => {
		Hm(e, {
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
				M();
				var n = si();
				H(() => yi(n, i())), q(e, n);
			},
			$$slots: { default: !0 }
		});
	};
	return J(y, (e) => {
		i() && e(b);
	}), H(() => {
		Y(g, "id", n()), Y(g, "d", r()), oa(g, 0, ea(["svelte-flow__edge-path", f()])), Y(g, "marker-start", c()), Y(g, "marker-end", l()), ca(g, u());
	}), q(e, h), P(m);
}
Z(Km, {
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
function qm(e, t) {
	N(t, !0);
	let n = X(t, "id", 7), r = X(t, "interactionWidth", 7), i = X(t, "label", 7), a = X(t, "labelStyle", 7), o = X(t, "markerEnd", 7), s = X(t, "markerStart", 7), c = X(t, "pathOptions", 7), l = X(t, "sourcePosition", 7), u = X(t, "sourceX", 7), d = X(t, "sourceY", 7), f = X(t, "style", 7), p = X(t, "targetPosition", 7), m = X(t, "targetX", 7), h = X(t, "targetY", 7), g = /* @__PURE__ */ F(() => Jf({
		sourceX: u(),
		sourceY: d(),
		targetX: m(),
		targetY: h(),
		sourcePosition: l(),
		targetPosition: p(),
		curvature: c()?.curvature
	})), _ = /* @__PURE__ */ F(() => te(U(g), 3)), v = /* @__PURE__ */ F(() => U(_)[0]), y = /* @__PURE__ */ F(() => U(_)[1]), b = /* @__PURE__ */ F(() => U(_)[2]);
	return Km(e, {
		get id() {
			return n();
		},
		get path() {
			return U(v);
		},
		get labelX() {
			return U(y);
		},
		get labelY() {
			return U(b);
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
	}), P({
		get id() {
			return n();
		},
		set id(e) {
			n(e), I();
		},
		get interactionWidth() {
			return r();
		},
		set interactionWidth(e) {
			r(e), I();
		},
		get label() {
			return i();
		},
		set label(e) {
			i(e), I();
		},
		get labelStyle() {
			return a();
		},
		set labelStyle(e) {
			a(e), I();
		},
		get markerEnd() {
			return o();
		},
		set markerEnd(e) {
			o(e), I();
		},
		get markerStart() {
			return s();
		},
		set markerStart(e) {
			s(e), I();
		},
		get pathOptions() {
			return c();
		},
		set pathOptions(e) {
			c(e), I();
		},
		get sourcePosition() {
			return l();
		},
		set sourcePosition(e) {
			l(e), I();
		},
		get sourceX() {
			return u();
		},
		set sourceX(e) {
			u(e), I();
		},
		get sourceY() {
			return d();
		},
		set sourceY(e) {
			d(e), I();
		},
		get style() {
			return f();
		},
		set style(e) {
			f(e), I();
		},
		get targetPosition() {
			return p();
		},
		set targetPosition(e) {
			p(e), I();
		},
		get targetX() {
			return m();
		},
		set targetX(e) {
			m(e), I();
		},
		get targetY() {
			return h();
		},
		set targetY(e) {
			h(e), I();
		}
	});
}
Z(qm, {
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
function Jm(e, t) {
	N(t, !0);
	let n = X(t, "interactionWidth", 7), r = X(t, "label", 7), i = X(t, "labelStyle", 7), a = X(t, "style", 7), o = X(t, "markerEnd", 7), s = X(t, "markerStart", 7), c = X(t, "sourcePosition", 7), l = X(t, "sourceX", 7), u = X(t, "sourceY", 7), d = X(t, "targetPosition", 7), f = X(t, "targetX", 7), p = X(t, "targetY", 7), m = /* @__PURE__ */ F(() => sp({
		sourceX: l(),
		sourceY: u(),
		targetX: f(),
		targetY: p(),
		sourcePosition: c(),
		targetPosition: d()
	})), h = /* @__PURE__ */ F(() => te(U(m), 3)), g = /* @__PURE__ */ F(() => U(h)[0]), _ = /* @__PURE__ */ F(() => U(h)[1]), v = /* @__PURE__ */ F(() => U(h)[2]);
	return Km(e, {
		get path() {
			return U(g);
		},
		get labelX() {
			return U(_);
		},
		get labelY() {
			return U(v);
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
	}), P({
		get interactionWidth() {
			return n();
		},
		set interactionWidth(e) {
			n(e), I();
		},
		get label() {
			return r();
		},
		set label(e) {
			r(e), I();
		},
		get labelStyle() {
			return i();
		},
		set labelStyle(e) {
			i(e), I();
		},
		get style() {
			return a();
		},
		set style(e) {
			a(e), I();
		},
		get markerEnd() {
			return o();
		},
		set markerEnd(e) {
			o(e), I();
		},
		get markerStart() {
			return s();
		},
		set markerStart(e) {
			s(e), I();
		},
		get sourcePosition() {
			return c();
		},
		set sourcePosition(e) {
			c(e), I();
		},
		get sourceX() {
			return l();
		},
		set sourceX(e) {
			l(e), I();
		},
		get sourceY() {
			return u();
		},
		set sourceY(e) {
			u(e), I();
		},
		get targetPosition() {
			return d();
		},
		set targetPosition(e) {
			d(e), I();
		},
		get targetX() {
			return f();
		},
		set targetX(e) {
			f(e), I();
		},
		get targetY() {
			return p();
		},
		set targetY(e) {
			p(e), I();
		}
	});
}
Z(Jm, {
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
function Ym(e, t) {
	N(t, !0);
	let n = X(t, "sourceX", 7), r = X(t, "sourceY", 7), i = X(t, "targetX", 7), a = X(t, "targetY", 7), o = X(t, "label", 7), s = X(t, "labelStyle", 7), c = X(t, "markerStart", 7), l = X(t, "markerEnd", 7), u = X(t, "interactionWidth", 7), d = X(t, "style", 7), f = /* @__PURE__ */ F(() => tp({
		sourceX: n(),
		sourceY: r(),
		targetX: i(),
		targetY: a()
	})), p = /* @__PURE__ */ F(() => te(U(f), 3)), m = /* @__PURE__ */ F(() => U(p)[0]), h = /* @__PURE__ */ F(() => U(p)[1]), g = /* @__PURE__ */ F(() => U(p)[2]);
	return Km(e, {
		get path() {
			return U(m);
		},
		get labelX() {
			return U(h);
		},
		get labelY() {
			return U(g);
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
	}), P({
		get sourceX() {
			return n();
		},
		set sourceX(e) {
			n(e), I();
		},
		get sourceY() {
			return r();
		},
		set sourceY(e) {
			r(e), I();
		},
		get targetX() {
			return i();
		},
		set targetX(e) {
			i(e), I();
		},
		get targetY() {
			return a();
		},
		set targetY(e) {
			a(e), I();
		},
		get label() {
			return o();
		},
		set label(e) {
			o(e), I();
		},
		get labelStyle() {
			return s();
		},
		set labelStyle(e) {
			s(e), I();
		},
		get markerStart() {
			return c();
		},
		set markerStart(e) {
			c(e), I();
		},
		get markerEnd() {
			return l();
		},
		set markerEnd(e) {
			l(e), I();
		},
		get interactionWidth() {
			return u();
		},
		set interactionWidth(e) {
			u(e), I();
		},
		get style() {
			return d();
		},
		set style(e) {
			d(e), I();
		}
	});
}
Z(Ym, {
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
function Xm(e, t) {
	N(t, !0);
	let n = X(t, "sourceX", 7), r = X(t, "sourceY", 7), i = X(t, "sourcePosition", 7), a = X(t, "targetX", 7), o = X(t, "targetY", 7), s = X(t, "targetPosition", 7), c = X(t, "label", 7), l = X(t, "labelStyle", 7), u = X(t, "markerStart", 7), d = X(t, "markerEnd", 7), f = X(t, "interactionWidth", 7), p = X(t, "style", 7), m = /* @__PURE__ */ F(() => sp({
		sourceX: n(),
		sourceY: r(),
		targetX: a(),
		targetY: o(),
		sourcePosition: i(),
		targetPosition: s(),
		borderRadius: 0
	})), h = /* @__PURE__ */ F(() => te(U(m), 3)), g = /* @__PURE__ */ F(() => U(h)[0]), _ = /* @__PURE__ */ F(() => U(h)[1]), v = /* @__PURE__ */ F(() => U(h)[2]);
	return Km(e, {
		get path() {
			return U(g);
		},
		get labelX() {
			return U(_);
		},
		get labelY() {
			return U(v);
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
	}), P({
		get sourceX() {
			return n();
		},
		set sourceX(e) {
			n(e), I();
		},
		get sourceY() {
			return r();
		},
		set sourceY(e) {
			r(e), I();
		},
		get sourcePosition() {
			return i();
		},
		set sourcePosition(e) {
			i(e), I();
		},
		get targetX() {
			return a();
		},
		set targetX(e) {
			a(e), I();
		},
		get targetY() {
			return o();
		},
		set targetY(e) {
			o(e), I();
		},
		get targetPosition() {
			return s();
		},
		set targetPosition(e) {
			s(e), I();
		},
		get label() {
			return c();
		},
		set label(e) {
			c(e), I();
		},
		get labelStyle() {
			return l();
		},
		set labelStyle(e) {
			l(e), I();
		},
		get markerStart() {
			return u();
		},
		set markerStart(e) {
			u(e), I();
		},
		get markerEnd() {
			return d();
		},
		set markerEnd(e) {
			d(e), I();
		},
		get interactionWidth() {
			return f();
		},
		set interactionWidth(e) {
			f(e), I();
		},
		get style() {
			return p();
		},
		set style(e) {
			p(e), I();
		}
	});
}
Z(Xm, {
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
var Zm = class extends Map {
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ L(0);
	#n = /* @__PURE__ */ L(0);
	#r = jr || -1;
	constructor(e) {
		if (super(), e) {
			for (var [t, n] of e) super.set(t, n);
			this.#n.v = super.size;
		}
	}
	#i(e) {
		return jr === this.#r ? /* @__PURE__ */ L(e) : yn(e);
	}
	has(e) {
		var t = this.#e, n = t.get(e);
		if (n === void 0) if (super.has(e)) n = this.#i(0), t.set(e, n);
		else return U(this.#t), !1;
		return U(n), !0;
	}
	forEach(e, t) {
		this.#a(), super.forEach(e, t);
	}
	get(e) {
		var t = this.#e, n = t.get(e);
		if (n === void 0) if (super.has(e)) n = this.#i(0), t.set(e, n);
		else {
			U(this.#t);
			return;
		}
		return U(n), super.get(e);
	}
	set(e, t) {
		var n = this.#e, r = n.get(e), i = super.get(e), a = super.set(e, t), o = this.#t;
		if (r === void 0) r = this.#i(0), n.set(e, r), R(this.#n, super.size), wn(o);
		else if (i !== t) {
			wn(r);
			var s = o.reactions === null ? null : new Set(o.reactions);
			(s === null || !r.reactions?.every((e) => s.has(e))) && wn(o);
		}
		return a;
	}
	delete(e) {
		var t = this.#e, n = t.get(e), r = super.delete(e);
		return n !== void 0 && (t.delete(e), R(n, -1)), r && (R(this.#n, super.size), wn(this.#t)), r;
	}
	clear() {
		if (super.size !== 0) {
			super.clear();
			var e = this.#e;
			R(this.#n, 0);
			for (var t of e.values()) R(t, -1);
			wn(this.#t), e.clear();
		}
	}
	#a() {
		U(this.#t);
		var e = this.#e;
		if (this.#n.v !== e.size) {
			for (var t of super.keys()) if (!e.has(t)) {
				var n = this.#i(0);
				e.set(t, n);
			}
		}
		for ([, n] of this.#e) U(n);
	}
	keys() {
		return U(this.#t), super.keys();
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
		return U(this.#n), super.size;
	}
}, Qm = class {
	#e;
	#t;
	constructor(e, t) {
		this.#e = e, this.#t = Pt(t);
	}
	get current() {
		return this.#t(), this.#e();
	}
}, $m = /\(.+\)/, eh = /* @__PURE__ */ new Set([
	"all",
	"print",
	"screen",
	"and",
	"or",
	"not",
	"only"
]), th = class extends Qm {
	constructor(e, t) {
		let n = $m.test(e) || e.split(/[\s,]+/).some((e) => eh.has(e.trim())) ? e : `(${e})`, r = window.matchMedia(n);
		super(() => r.matches, (e) => Xr(r, "change", e));
	}
};
function nh(e, t, n, r) {
	let i = /* @__PURE__ */ new Map();
	return tf(e, {
		x: 0,
		y: 0,
		width: n,
		height: r
	}, t, !0).forEach((e) => {
		i.set(e.id, e);
	}), i;
}
function rh(e) {
	let { edges: t, defaultEdgeOptions: n, nodeLookup: r, previousEdges: i, connectionMode: a, onerror: o, onlyRenderVisible: s, elevateEdgesOnSelect: c, zIndexMode: l } = e, u = /* @__PURE__ */ new Map();
	for (let d of t) {
		let t = r.get(d.source), f = r.get(d.target);
		if (!t || !f) continue;
		if (s) {
			let { visibleNodes: n, transform: r, width: i, height: a } = e;
			if (Zf({
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
		let m = lp({
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
			zIndex: Xf({
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
var ih = Cf("Svelte Flow", "https://svelteflow.dev/"), ah = {
	input: Om,
	output: Am,
	default: Em,
	group: jm
}, oh = {
	straight: Ym,
	smoothstep: Jm,
	default: qm,
	step: Xm
};
function sh(e, t, n, r, i, a) {
	return t && !n && r && i ? Af(ef(a, { filter: (e) => !!((e.width || e.initialWidth) && (e.height || e.initialHeight)) }), r, i, .5, 2, .1) : n ?? {
		x: 0,
		y: 0,
		zoom: 1
	};
}
function ch(e) {
	class t {
		#e = /* @__PURE__ */ F(() => e.props.id ?? "1");
		get flowId() {
			return U(this.#e);
		}
		set flowId(e) {
			R(this.#e, e);
		}
		#t = /* @__PURE__ */ L(null);
		get domNode() {
			return U(this.#t);
		}
		set domNode(e) {
			R(this.#t, e);
		}
		#n = /* @__PURE__ */ L(null);
		get panZoom() {
			return U(this.#n);
		}
		set panZoom(e) {
			R(this.#n, e);
		}
		#r = /* @__PURE__ */ L(e.width ?? 0);
		get width() {
			return U(this.#r);
		}
		set width(e) {
			R(this.#r, e);
		}
		#i = /* @__PURE__ */ L(e.height ?? 0);
		get height() {
			return U(this.#i);
		}
		set height(e) {
			R(this.#i, e);
		}
		#a = /* @__PURE__ */ L(e.props.zIndexMode ?? "basic");
		get zIndexMode() {
			return U(this.#a);
		}
		set zIndexMode(e) {
			R(this.#a, e);
		}
		#o = /* @__PURE__ */ F(() => {
			let { nodesInitialized: t } = wp(e.nodes, this.nodeLookup, this.parentLookup, {
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
			return U(this.#o);
		}
		set nodesInitialized(e) {
			R(this.#o, e);
		}
		#s = /* @__PURE__ */ F(() => this.panZoom !== null);
		get viewportInitialized() {
			return U(this.#s);
		}
		set viewportInitialized(e) {
			R(this.#s, e);
		}
		#c = /* @__PURE__ */ F(() => (Np(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
		get _edges() {
			return U(this.#c);
		}
		set _edges(e) {
			R(this.#c, e);
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
		#l = /* @__PURE__ */ F(() => {
			let e = this._prevSelectedNodeIds.size, t = /* @__PURE__ */ new Set(), n = this.nodes.filter((e) => (e.selected && (t.add(e.id), this._prevSelectedNodeIds.delete(e.id)), e.selected));
			return (e !== t.size || this._prevSelectedNodeIds.size > 0) && (this._prevSelectedNodes = n), this._prevSelectedNodeIds = t, this._prevSelectedNodes;
		});
		get selectedNodes() {
			return U(this.#l);
		}
		set selectedNodes(e) {
			R(this.#l, e);
		}
		_prevSelectedEdges = [];
		_prevSelectedEdgeIds = /* @__PURE__ */ new Set();
		#u = /* @__PURE__ */ F(() => {
			let e = this._prevSelectedEdgeIds.size, t = /* @__PURE__ */ new Set(), n = this.edges.filter((e) => (e.selected && (t.add(e.id), this._prevSelectedEdgeIds.delete(e.id)), e.selected));
			return (e !== t.size || this._prevSelectedEdgeIds.size > 0) && (this._prevSelectedEdges = n), this._prevSelectedEdgeIds = t, this._prevSelectedEdges;
		});
		get selectedEdges() {
			return U(this.#u);
		}
		set selectedEdges(e) {
			R(this.#u, e);
		}
		selectionChangeHandlers = /* @__PURE__ */ new Map();
		nodeLookup = /* @__PURE__ */ new Map();
		parentLookup = /* @__PURE__ */ new Map();
		connectionLookup = /* @__PURE__ */ new Map();
		edgeLookup = /* @__PURE__ */ new Map();
		_prevVisibleEdges = /* @__PURE__ */ new Map();
		#d = /* @__PURE__ */ F(() => {
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
				u = nh(i, r, t, n), d = rh({
					...f,
					onlyRenderVisible: !0,
					visibleNodes: u,
					transform: r,
					width: t,
					height: n
				});
			} else u = this.nodeLookup, d = rh(f);
			return {
				nodes: u,
				edges: d
			};
		});
		get visible() {
			return U(this.#d);
		}
		set visible(e) {
			R(this.#d, e);
		}
		#f = /* @__PURE__ */ F(() => e.props.nodesDraggable ?? !0);
		get nodesDraggable() {
			return U(this.#f);
		}
		set nodesDraggable(e) {
			R(this.#f, e);
		}
		#p = /* @__PURE__ */ F(() => e.props.nodesConnectable ?? !0);
		get nodesConnectable() {
			return U(this.#p);
		}
		set nodesConnectable(e) {
			R(this.#p, e);
		}
		#m = /* @__PURE__ */ F(() => e.props.elementsSelectable ?? !0);
		get elementsSelectable() {
			return U(this.#m);
		}
		set elementsSelectable(e) {
			R(this.#m, e);
		}
		#h = /* @__PURE__ */ F(() => e.props.nodesFocusable ?? !0);
		get nodesFocusable() {
			return U(this.#h);
		}
		set nodesFocusable(e) {
			R(this.#h, e);
		}
		#g = /* @__PURE__ */ F(() => e.props.edgesFocusable ?? !0);
		get edgesFocusable() {
			return U(this.#g);
		}
		set edgesFocusable(e) {
			R(this.#g, e);
		}
		#_ = /* @__PURE__ */ F(() => e.props.disableKeyboardA11y ?? !1);
		get disableKeyboardA11y() {
			return U(this.#_);
		}
		set disableKeyboardA11y(e) {
			R(this.#_, e);
		}
		#v = /* @__PURE__ */ F(() => e.props.minZoom ?? .5);
		get minZoom() {
			return U(this.#v);
		}
		set minZoom(e) {
			R(this.#v, e);
		}
		#y = /* @__PURE__ */ F(() => e.props.maxZoom ?? 2);
		get maxZoom() {
			return U(this.#y);
		}
		set maxZoom(e) {
			R(this.#y, e);
		}
		#b = /* @__PURE__ */ F(() => e.props.nodeOrigin ?? [0, 0]);
		get nodeOrigin() {
			return U(this.#b);
		}
		set nodeOrigin(e) {
			R(this.#b, e);
		}
		#x = /* @__PURE__ */ F(() => e.props.nodeExtent ?? Id);
		get nodeExtent() {
			return U(this.#x);
		}
		set nodeExtent(e) {
			R(this.#x, e);
		}
		#S = /* @__PURE__ */ F(() => e.props.translateExtent ?? Id);
		get translateExtent() {
			return U(this.#S);
		}
		set translateExtent(e) {
			R(this.#S, e);
		}
		#C = /* @__PURE__ */ F(() => e.props.defaultEdgeOptions ?? {});
		get defaultEdgeOptions() {
			return U(this.#C);
		}
		set defaultEdgeOptions(e) {
			R(this.#C, e);
		}
		#w = /* @__PURE__ */ F(() => e.props.nodeDragThreshold ?? 1);
		get nodeDragThreshold() {
			return U(this.#w);
		}
		set nodeDragThreshold(e) {
			R(this.#w, e);
		}
		#T = /* @__PURE__ */ F(() => e.props.autoPanOnNodeDrag ?? !0);
		get autoPanOnNodeDrag() {
			return U(this.#T);
		}
		set autoPanOnNodeDrag(e) {
			R(this.#T, e);
		}
		#E = /* @__PURE__ */ F(() => e.props.autoPanOnConnect ?? !0);
		get autoPanOnConnect() {
			return U(this.#E);
		}
		set autoPanOnConnect(e) {
			R(this.#E, e);
		}
		#D = /* @__PURE__ */ F(() => e.props.autoPanOnNodeFocus ?? !0);
		get autoPanOnNodeFocus() {
			return U(this.#D);
		}
		set autoPanOnNodeFocus(e) {
			R(this.#D, e);
		}
		#O = /* @__PURE__ */ F(() => e.props.autoPanSpeed ?? 15);
		get autoPanSpeed() {
			return U(this.#O);
		}
		set autoPanSpeed(e) {
			R(this.#O, e);
		}
		#k = /* @__PURE__ */ F(() => e.props.connectionDragThreshold ?? 1);
		get connectionDragThreshold() {
			return U(this.#k);
		}
		set connectionDragThreshold(e) {
			R(this.#k, e);
		}
		fitViewQueued = e.props.fitView ?? !1;
		fitViewOptions = e.props.fitViewOptions;
		fitViewResolver = null;
		#A = /* @__PURE__ */ F(() => e.props.snapGrid ?? null);
		get snapGrid() {
			return U(this.#A);
		}
		set snapGrid(e) {
			R(this.#A, e);
		}
		#j = /* @__PURE__ */ L(!1);
		get dragging() {
			return U(this.#j);
		}
		set dragging(e) {
			R(this.#j, e);
		}
		#M = /* @__PURE__ */ L(null);
		get selectionRect() {
			return U(this.#M);
		}
		set selectionRect(e) {
			R(this.#M, e);
		}
		#N = /* @__PURE__ */ L(!1);
		get selectionKeyPressed() {
			return U(this.#N);
		}
		set selectionKeyPressed(e) {
			R(this.#N, e);
		}
		#P = /* @__PURE__ */ L(!1);
		get multiselectionKeyPressed() {
			return U(this.#P);
		}
		set multiselectionKeyPressed(e) {
			R(this.#P, e);
		}
		#F = /* @__PURE__ */ L(!1);
		get deleteKeyPressed() {
			return U(this.#F);
		}
		set deleteKeyPressed(e) {
			R(this.#F, e);
		}
		#I = /* @__PURE__ */ L(!1);
		get panActivationKeyPressed() {
			return U(this.#I);
		}
		set panActivationKeyPressed(e) {
			R(this.#I, e);
		}
		#L = /* @__PURE__ */ L(!1);
		get zoomActivationKeyPressed() {
			return U(this.#L);
		}
		set zoomActivationKeyPressed(e) {
			R(this.#L, e);
		}
		#R = /* @__PURE__ */ L(null);
		get selectionRectMode() {
			return U(this.#R);
		}
		set selectionRectMode(e) {
			R(this.#R, e);
		}
		#z = /* @__PURE__ */ L("");
		get ariaLiveMessage() {
			return U(this.#z);
		}
		set ariaLiveMessage(e) {
			R(this.#z, e);
		}
		#B = /* @__PURE__ */ F(() => e.props.selectionMode ?? Vd.Partial);
		get selectionMode() {
			return U(this.#B);
		}
		set selectionMode(e) {
			R(this.#B, e);
		}
		#V = /* @__PURE__ */ F(() => ({
			...ah,
			...e.props.nodeTypes
		}));
		get nodeTypes() {
			return U(this.#V);
		}
		set nodeTypes(e) {
			R(this.#V, e);
		}
		#H = /* @__PURE__ */ F(() => ({
			...oh,
			...e.props.edgeTypes
		}));
		get edgeTypes() {
			return U(this.#H);
		}
		set edgeTypes(e) {
			R(this.#H, e);
		}
		#U = /* @__PURE__ */ F(() => e.props.noPanClass ?? "nopan");
		get noPanClass() {
			return U(this.#U);
		}
		set noPanClass(e) {
			R(this.#U, e);
		}
		#W = /* @__PURE__ */ F(() => e.props.noDragClass ?? "nodrag");
		get noDragClass() {
			return U(this.#W);
		}
		set noDragClass(e) {
			R(this.#W, e);
		}
		#G = /* @__PURE__ */ F(() => e.props.noWheelClass ?? "nowheel");
		get noWheelClass() {
			return U(this.#G);
		}
		set noWheelClass(e) {
			R(this.#G, e);
		}
		#K = /* @__PURE__ */ F(() => If(e.props.ariaLabelConfig));
		get ariaLabelConfig() {
			return U(this.#K);
		}
		set ariaLabelConfig(e) {
			R(this.#K, e);
		}
		#q = /* @__PURE__ */ L(sh(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
		get _viewport() {
			return U(this.#q);
		}
		set _viewport(e) {
			R(this.#q, e);
		}
		get viewport() {
			return e.viewport ?? this._viewport;
		}
		set viewport(t) {
			e.viewport &&= t, this._viewport = t;
		}
		#J = /* @__PURE__ */ L(Hd);
		get _connection() {
			return U(this.#J);
		}
		set _connection(e) {
			R(this.#J, e);
		}
		#Y = /* @__PURE__ */ F(() => this._connection.inProgress ? {
			...this._connection,
			to: Tf(this._connection.to, [
				this.viewport.x,
				this.viewport.y,
				this.viewport.zoom
			])
		} : this._connection);
		get connection() {
			return U(this.#Y);
		}
		set connection(e) {
			R(this.#Y, e);
		}
		#X = /* @__PURE__ */ F(() => e.props.connectionMode ?? zd.Strict);
		get connectionMode() {
			return U(this.#X);
		}
		set connectionMode(e) {
			R(this.#X, e);
		}
		#Z = /* @__PURE__ */ F(() => e.props.connectionRadius ?? 20);
		get connectionRadius() {
			return U(this.#Z);
		}
		set connectionRadius(e) {
			R(this.#Z, e);
		}
		#Q = /* @__PURE__ */ F(() => e.props.isValidConnection ?? (() => !0));
		get isValidConnection() {
			return U(this.#Q);
		}
		set isValidConnection(e) {
			R(this.#Q, e);
		}
		#$ = /* @__PURE__ */ F(() => e.props.selectNodesOnDrag ?? !0);
		get selectNodesOnDrag() {
			return U(this.#$);
		}
		set selectNodesOnDrag(e) {
			R(this.#$, e);
		}
		#ee = /* @__PURE__ */ F(() => e.props.defaultMarkerColor === void 0 ? "#b1b1b7" : e.props.defaultMarkerColor);
		get defaultMarkerColor() {
			return U(this.#ee);
		}
		set defaultMarkerColor(e) {
			R(this.#ee, e);
		}
		#te = /* @__PURE__ */ F(() => mp(e.edges, {
			defaultColor: this.defaultMarkerColor,
			id: this.flowId,
			defaultMarkerStart: this.defaultEdgeOptions.markerStart,
			defaultMarkerEnd: this.defaultEdgeOptions.markerEnd
		}));
		get markers() {
			return U(this.#te);
		}
		set markers(e) {
			R(this.#te, e);
		}
		#ne = /* @__PURE__ */ F(() => e.props.onlyRenderVisibleElements ?? !1);
		get onlyRenderVisibleElements() {
			return U(this.#ne);
		}
		set onlyRenderVisibleElements(e) {
			R(this.#ne, e);
		}
		#re = /* @__PURE__ */ F(() => e.props.onflowerror ?? ih);
		get onerror() {
			return U(this.#re);
		}
		set onerror(e) {
			R(this.#re, e);
		}
		#ie = /* @__PURE__ */ F(() => e.props.ondelete);
		get ondelete() {
			return U(this.#ie);
		}
		set ondelete(e) {
			R(this.#ie, e);
		}
		#ae = /* @__PURE__ */ F(() => e.props.onbeforedelete);
		get onbeforedelete() {
			return U(this.#ae);
		}
		set onbeforedelete(e) {
			R(this.#ae, e);
		}
		#oe = /* @__PURE__ */ F(() => e.props.onbeforeconnect);
		get onbeforeconnect() {
			return U(this.#oe);
		}
		set onbeforeconnect(e) {
			R(this.#oe, e);
		}
		#se = /* @__PURE__ */ F(() => e.props.onconnect);
		get onconnect() {
			return U(this.#se);
		}
		set onconnect(e) {
			R(this.#se, e);
		}
		#ce = /* @__PURE__ */ F(() => e.props.onconnectstart);
		get onconnectstart() {
			return U(this.#ce);
		}
		set onconnectstart(e) {
			R(this.#ce, e);
		}
		#le = /* @__PURE__ */ F(() => e.props.onconnectend);
		get onconnectend() {
			return U(this.#le);
		}
		set onconnectend(e) {
			R(this.#le, e);
		}
		#ue = /* @__PURE__ */ F(() => e.props.onbeforereconnect);
		get onbeforereconnect() {
			return U(this.#ue);
		}
		set onbeforereconnect(e) {
			R(this.#ue, e);
		}
		#de = /* @__PURE__ */ F(() => e.props.onreconnect);
		get onreconnect() {
			return U(this.#de);
		}
		set onreconnect(e) {
			R(this.#de, e);
		}
		#fe = /* @__PURE__ */ F(() => e.props.onreconnectstart);
		get onreconnectstart() {
			return U(this.#fe);
		}
		set onreconnectstart(e) {
			R(this.#fe, e);
		}
		#pe = /* @__PURE__ */ F(() => e.props.onreconnectend);
		get onreconnectend() {
			return U(this.#pe);
		}
		set onreconnectend(e) {
			R(this.#pe, e);
		}
		#me = /* @__PURE__ */ F(() => e.props.clickConnect ?? !0);
		get clickConnect() {
			return U(this.#me);
		}
		set clickConnect(e) {
			R(this.#me, e);
		}
		#he = /* @__PURE__ */ F(() => e.props.onclickconnectstart);
		get onclickconnectstart() {
			return U(this.#he);
		}
		set onclickconnectstart(e) {
			R(this.#he, e);
		}
		#ge = /* @__PURE__ */ F(() => e.props.onclickconnectend);
		get onclickconnectend() {
			return U(this.#ge);
		}
		set onclickconnectend(e) {
			R(this.#ge, e);
		}
		#_e = /* @__PURE__ */ L(null);
		get clickConnectStartHandle() {
			return U(this.#_e);
		}
		set clickConnectStartHandle(e) {
			R(this.#_e, e);
		}
		#ve = /* @__PURE__ */ F(() => e.props.onselectiondrag);
		get onselectiondrag() {
			return U(this.#ve);
		}
		set onselectiondrag(e) {
			R(this.#ve, e);
		}
		#ye = /* @__PURE__ */ F(() => e.props.onselectiondragstart);
		get onselectiondragstart() {
			return U(this.#ye);
		}
		set onselectiondragstart(e) {
			R(this.#ye, e);
		}
		#be = /* @__PURE__ */ F(() => e.props.onselectiondragstop);
		get onselectiondragstop() {
			return U(this.#be);
		}
		set onselectiondragstop(e) {
			R(this.#be, e);
		}
		resolveFitView = async () => {
			this.panZoom && (await af({
				nodes: this.nodeLookup,
				width: this.width,
				height: this.height,
				panZoom: this.panZoom,
				minZoom: this.minZoom,
				maxZoom: this.maxZoom
			}, this.fitViewOptions), this.fitViewResolver?.resolve(!0), this.fitViewQueued = !1, this.fitViewOptions = void 0, this.fitViewResolver = null);
		};
		_prefersDark = new th("(prefers-color-scheme: dark)", e.props.colorModeSSR === "dark");
		#xe = /* @__PURE__ */ F(() => e.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : e.props.colorMode ?? "light");
		get colorMode() {
			return U(this.#xe);
		}
		set colorMode(e) {
			R(this.#xe, e);
		}
		constructor() {}
		resetStoreValues() {
			this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = Hd, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? {
				x: 0,
				y: 0,
				zoom: 1
			}, this.ariaLiveMessage = "";
		}
	}
	return new t();
}
var lh = Fd.error001("svelte");
function uh() {
	let e = ct(dh);
	if (!e) throw Error(lh);
	return e.getStore();
}
var dh = Symbol();
function fh(e) {
	let t = ch(e);
	function n(e) {
		t.nodeTypes = {
			...ah,
			...e
		};
	}
	function r(e) {
		t.edgeTypes = {
			...oh,
			...e
		};
	}
	function i(e) {
		t.edges = mm(e, t.edges, { onError: t.onerror });
	}
	let a = (e, n = !1) => {
		t.nodes = t.nodes.map((r) => {
			if (t.connection.inProgress && t.connection.fromNode.id === r.id) {
				let e = t.nodeLookup.get(r.id);
				e && (t.connection = {
					...t.connection,
					from: dp(e, t.connection.fromHandle, Q.Left, !0)
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
		let { changes: n, updatedInternals: r } = Ap(e, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin, t.nodeExtent, t.zIndexMode);
		if (!r) return;
		xp(t.nodeLookup, t.parentLookup, {
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
			t.onerror("012", Fd.error012(e));
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
			t.onerror("016", Fd.error016(e));
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
			i && (t = wf(t, i));
			let { position: n, positionAbsolute: a } = of({
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
		return jp({
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
		t._connection = Hd;
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
function ph(e, t) {
	let { minZoom: n, maxZoom: r, initialViewport: i, onPanZoomStart: a, onPanZoom: o, onPanZoomEnd: s, translateExtent: c, setPanZoomInstance: l, onDraggingChange: u, onTransformChange: d } = t, f = dm({
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
var mh = /* @__PURE__ */ W("<div class=\"svelte-flow__zoom svelte-flow__container\"><!></div>");
function hh(e, t) {
	N(t, !0);
	let n = X(t, "store", 15), r = X(t, "panOnScrollMode", 7), i = X(t, "preventScrolling", 7), a = X(t, "zoomOnScroll", 7), o = X(t, "zoomOnDoubleClick", 7), s = X(t, "zoomOnPinch", 7), c = X(t, "panOnDrag", 7), l = X(t, "panOnScroll", 7), u = X(t, "panOnScrollSpeed", 7), d = X(t, "paneClickDistance", 7), f = X(t, "selectionOnDrag", 7), p = X(t, "onmovestart", 7), m = X(t, "onmove", 7), h = X(t, "onmoveend", 7), g = X(t, "oninit", 7), _ = X(t, "children", 7), v = /* @__PURE__ */ F(() => n().panActivationKeyPressed || c()), y = /* @__PURE__ */ F(() => n().panActivationKeyPressed || l()), { viewport: b } = n(), x = !1;
	Kn(() => {
		!x && n().viewportInitialized && (g()?.(), x = !0);
	});
	var S = {
		get store() {
			return n();
		},
		set store(e) {
			n(e), I();
		},
		get panOnScrollMode() {
			return r();
		},
		set panOnScrollMode(e) {
			r(e), I();
		},
		get preventScrolling() {
			return i();
		},
		set preventScrolling(e) {
			i(e), I();
		},
		get zoomOnScroll() {
			return a();
		},
		set zoomOnScroll(e) {
			a(e), I();
		},
		get zoomOnDoubleClick() {
			return o();
		},
		set zoomOnDoubleClick(e) {
			o(e), I();
		},
		get zoomOnPinch() {
			return s();
		},
		set zoomOnPinch(e) {
			s(e), I();
		},
		get panOnDrag() {
			return c();
		},
		set panOnDrag(e) {
			c(e), I();
		},
		get panOnScroll() {
			return l();
		},
		set panOnScroll(e) {
			l(e), I();
		},
		get panOnScrollSpeed() {
			return u();
		},
		set panOnScrollSpeed(e) {
			u(e), I();
		},
		get paneClickDistance() {
			return d();
		},
		set paneClickDistance(e) {
			d(e), I();
		},
		get selectionOnDrag() {
			return f();
		},
		set selectionOnDrag(e) {
			f(e), I();
		},
		get onmovestart() {
			return p();
		},
		set onmovestart(e) {
			p(e), I();
		},
		get onmove() {
			return m();
		},
		set onmove(e) {
			m(e), I();
		},
		get onmoveend() {
			return h();
		},
		set onmoveend(e) {
			h(e), I();
		},
		get oninit() {
			return g();
		},
		set oninit(e) {
			g(e), I();
		},
		get children() {
			return _();
		},
		set children(e) {
			_(e), I();
		}
	}, C = mh();
	return Di(z(C), _), j(C), Xi(C, (e, t) => ph?.(e, t), () => ({
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
		panOnScroll: U(y),
		panOnDrag: U(v),
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
	})), q(e, C), P(S);
}
Z(hh, {
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
function gh(e, t) {
	return (n) => {
		n.target === t && e?.(n);
	};
}
function _h(e) {
	return (t) => {
		let n = e.has(t.id);
		return !!t.selected === n ? t : {
			...t,
			selected: n
		};
	};
}
function vh(e, t) {
	if (e.size !== t.size) return !1;
	for (let n of e) if (!t.has(n)) return !1;
	return !0;
}
var yh = /* @__PURE__ */ W("<div><!></div>");
function bh(e, t) {
	N(t, !0);
	let n = X(t, "store", 15), r = X(t, "panOnDrag", 7, !0), i = X(t, "paneClickDistance", 7, 1), a = X(t, "selectionOnDrag", 7), o = X(t, "autoPanOnSelection", 7, !0), s = X(t, "onpaneclick", 7), c = X(t, "onpanecontextmenu", 7), l = X(t, "onselectionstart", 7), u = X(t, "onselectionend", 7), d = X(t, "children", 7), f, p = null, m = !1, h = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set(), _ = /* @__PURE__ */ F(() => n().panActivationKeyPressed || r()), v = /* @__PURE__ */ F(() => n().selectionKeyPressed || !!n().selectionRect || a() && U(_) !== !0), y = /* @__PURE__ */ F(() => n().elementsSelectable && (U(v) || n().selectionRectMode === "user")), b = !1, x = 0, S = {
		x: 0,
		y: 0
	}, C = !1;
	function w(e) {
		if (p = f?.getBoundingClientRect(), !p) return;
		let t = e.target === f, r = !t && !!e.target.closest(".nokey"), i = a() && t || n().selectionKeyPressed;
		if (r || !U(v) || !i || e.button !== 0 || !e.isPrimary) return;
		e.target?.setPointerCapture?.(e.pointerId), b = !1, C = !1;
		let { x: o, y: s } = Uf(e, p), c = Tf({
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
		}, i = Ef(r, [
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
		h = new Set(tf(n().nodeLookup, a, [
			n().viewport.x,
			n().viewport.y,
			n().viewport.zoom
		], n().selectionMode === Vd.Partial, !0).map((e) => e.id));
		let c = n().defaultEdgeOptions.selectable ?? !0;
		g = /* @__PURE__ */ new Set();
		for (let e of h) {
			let t = n().connectionLookup.get(e);
			if (t) for (let { edgeId: e } of t.values()) {
				let t = n().edgeLookup.get(e);
				t && (t.selectable ?? c) && g.add(e);
			}
		}
		vh(o, h) || n(n().nodes = n().nodes.map(_h(h)), !0), vh(s, g) || n(n().edges = n().edges.map(_h(g)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = a, !0);
	}
	function E() {
		if (!o() || !p) return;
		let [e, t] = ff(S, p, n().autoPanSpeed);
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
	ki(() => {
		typeof window < "u" && D();
	});
	function ee(e) {
		if (!U(v) || !p || !n().selectionRect) return;
		let t = Uf(e, p);
		S = {
			x: t.x,
			y: t.y
		};
		let r = Ef({
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
	function O(e) {
		if (!U(y)) {
			e.target === f && n().connection.inProgress && (m = !0);
			return;
		}
		e.button === 0 && (e.target?.releasePointerCapture?.(e.pointerId), !b && e.target === f && k?.(e), n(n().selectionRect = null, !0), b && n(n().selectionRectMode = h.size > 0 ? "nodes" : null, !0), b && u()?.(e), D());
	}
	function te(e) {
		e.target?.releasePointerCapture?.(e.pointerId), D();
	}
	let ne = (e) => {
		if (Array.isArray(U(_)) && U(_).includes(2)) {
			e.preventDefault();
			return;
		}
		c()?.({ event: e });
	}, re = (e) => {
		b &&= (e.stopPropagation(), !1);
	};
	function k(e) {
		if (b || n().connection.inProgress || m) {
			b = !1, m = !1;
			return;
		}
		s()?.({ event: e }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0), n(n().selectionRect = null, !0);
	}
	var ie = {
		get store() {
			return n();
		},
		set store(e) {
			n(e), I();
		},
		get panOnDrag() {
			return r();
		},
		set panOnDrag(e = !0) {
			r(e), I();
		},
		get paneClickDistance() {
			return i();
		},
		set paneClickDistance(e = 1) {
			i(e), I();
		},
		get selectionOnDrag() {
			return a();
		},
		set selectionOnDrag(e) {
			a(e), I();
		},
		get autoPanOnSelection() {
			return o();
		},
		set autoPanOnSelection(e = !0) {
			o(e), I();
		},
		get onpaneclick() {
			return s();
		},
		set onpaneclick(e) {
			s(e), I();
		},
		get onpanecontextmenu() {
			return c();
		},
		set onpanecontextmenu(e) {
			c(e), I();
		},
		get onselectionstart() {
			return l();
		},
		set onselectionstart(e) {
			l(e), I();
		},
		get onselectionend() {
			return u();
		},
		set onselectionend(e) {
			u(e), I();
		},
		get children() {
			return d();
		},
		set children(e) {
			d(e), I();
		}
	}, ae = yh();
	let oe;
	var se = /* @__PURE__ */ F(() => U(y) ? void 0 : gh(k, f)), ce = /* @__PURE__ */ F(() => gh(ne, f));
	return Di(z(ae), d), j(ae), La(ae, (e) => f = e, () => f), H((e) => oe = oa(ae, 1, "svelte-flow__pane svelte-flow__container", null, oe, e), [() => ({
		draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
		dragging: n().dragging,
		selection: U(v)
	})]), Qr("click", ae, function(...e) {
		U(se)?.apply(this, e);
	}), Zr("pointerdown", ae, function(...e) {
		(U(y) ? w : void 0)?.apply(this, e);
	}, !0), Qr("pointermove", ae, function(...e) {
		(U(y) ? ee : void 0)?.apply(this, e);
	}), Qr("pointerup", ae, O), Zr("pointercancel", ae, function(...e) {
		(U(y) ? te : void 0)?.apply(this, e);
	}), Qr("contextmenu", ae, function(...e) {
		U(ce)?.apply(this, e);
	}), Zr("click", ae, function(...e) {
		(U(y) ? re : void 0)?.apply(this, e);
	}, !0), q(e, ae), P(ie);
}
$r([
	"click",
	"pointermove",
	"pointerup",
	"contextmenu"
]), Z(bh, {
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
var xh = /* @__PURE__ */ W("<div class=\"svelte-flow__viewport xyflow__viewport svelte-flow__container\"><!></div>");
function Sh(e, t) {
	N(t, !0);
	let n = X(t, "store", 15), r = X(t, "children", 7);
	var i = {
		get store() {
			return n();
		},
		set store(e) {
			n(e), I();
		},
		get children() {
			return r();
		},
		set children(e) {
			r(e), I();
		}
	}, a = xh();
	let o;
	return Di(z(a), r), j(a), H(() => o = ca(a, "", o, { transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})` })), q(e, a), P(i);
}
Z(Sh, {
	store: {},
	children: {}
}, [], [], { mode: "open" });
function Ch(e, t) {
	let { store: n, onDrag: r, onDragStart: i, onDragStop: a, onNodeMouseDown: o } = t, s = Bp({
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
var wh = /* @__PURE__ */ W("<div aria-live=\"assertive\" aria-atomic=\"true\" class=\"a11y-live-msg svelte-65dxi7\"> </div>"), Th = /* @__PURE__ */ W("<div class=\"a11y-hidden svelte-65dxi7\"> </div> <div class=\"a11y-hidden svelte-65dxi7\"> </div> <!>", 1), Eh = {
	hash: "svelte-65dxi7",
	code: ".a11y-hidden.svelte-65dxi7 {display:none;}.a11y-live-msg.svelte-65dxi7 {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function Dh(e, t) {
	N(t, !0), Yi(e, Eh);
	let n = X(t, "store", 7);
	var r = {
		get store() {
			return n();
		},
		set store(e) {
			n(e), I();
		}
	}, i = Th(), a = B(i), o = z(a, !0);
	j(a);
	var s = V(a, 2), c = z(s, !0);
	j(s);
	var l = V(s, 2), u = (e) => {
		var t = wh(), r = z(t, !0);
		j(t), H(() => {
			Y(t, "id", `${Ah}-${n().flowId}`), yi(r, n().ariaLiveMessage);
		}), q(e, t);
	};
	return J(l, (e) => {
		n().disableKeyboardA11y || e(u);
	}), H(() => {
		Y(a, "id", `${Oh}-${n().flowId}`), yi(o, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), Y(s, "id", `${kh}-${n().flowId}`), yi(c, n().ariaLabelConfig["edge.a11yDescription.default"]);
	}), q(e, i), P(r);
}
Z(Dh, { store: {} }, [], [], { mode: "open" });
var Oh = "svelte-flow__node-desc", kh = "svelte-flow__edge-desc", Ah = "svelte-flow__aria-live", jh = /* @__PURE__ */ W("<div><!></div>");
function Mh(e, t) {
	N(t, !0);
	let n = X(t, "store", 15), r = X(t, "node", 7), i = X(t, "resizeObserver", 7), a = X(t, "nodeClickDistance", 7), o = X(t, "onnodeclick", 7), s = X(t, "onnodedrag", 7), c = X(t, "onnodedragstart", 7), l = X(t, "onnodedragstop", 7), u = X(t, "onnodepointerenter", 7), d = X(t, "onnodepointerleave", 7), f = X(t, "onnodepointermove", 7), p = X(t, "onnodecontextmenu", 7), m = /* @__PURE__ */ F(() => O(r().data, () => ({}), !0)), h = /* @__PURE__ */ F(() => O(r().selected, !1)), g = /* @__PURE__ */ F(() => r().draggable), _ = /* @__PURE__ */ F(() => r().selectable), v = /* @__PURE__ */ F(() => O(r().deletable, !0)), y = /* @__PURE__ */ F(() => r().connectable), b = /* @__PURE__ */ F(() => r().focusable), x = /* @__PURE__ */ F(() => O(r().hidden, !1)), S = /* @__PURE__ */ F(() => O(r().dragging, !1)), C = /* @__PURE__ */ F(() => O(r().style, "")), w = /* @__PURE__ */ F(() => r().class), T = /* @__PURE__ */ F(() => O(r().type, "default")), E = /* @__PURE__ */ F(() => r().parentId), D = /* @__PURE__ */ F(() => r().sourcePosition), ee = /* @__PURE__ */ F(() => r().targetPosition), te = /* @__PURE__ */ F(() => O(r().measured, () => ({
		width: 0,
		height: 0
	}), !0).width), ne = /* @__PURE__ */ F(() => O(r().measured, () => ({
		width: 0,
		height: 0
	}), !0).height), re = /* @__PURE__ */ F(() => r().initialWidth), k = /* @__PURE__ */ F(() => r().initialHeight), ie = /* @__PURE__ */ F(() => r().width), ae = /* @__PURE__ */ F(() => r().height), oe = /* @__PURE__ */ F(() => r().dragHandle), se = /* @__PURE__ */ F(() => O(r().internals.z, 0)), ce = /* @__PURE__ */ F(() => r().internals.positionAbsolute.x), le = /* @__PURE__ */ F(() => r().internals.positionAbsolute.y), ue = /* @__PURE__ */ F(() => r().internals.userNode), { id: de } = r(), fe = /* @__PURE__ */ F(() => U(g) ?? n().nodesDraggable), pe = /* @__PURE__ */ F(() => U(_) ?? n().elementsSelectable), me = /* @__PURE__ */ F(() => U(y) ?? n().nodesConnectable), he = /* @__PURE__ */ F(() => Pf(r())), ge = /* @__PURE__ */ F(() => !!r().internals.handleBounds), _e = /* @__PURE__ */ F(() => U(he) && U(ge)), ve = /* @__PURE__ */ F(() => U(b) ?? n().nodesFocusable);
	function ye(e) {
		return n().parentLookup.has(e);
	}
	let be = /* @__PURE__ */ F(() => ye(de)), xe = /* @__PURE__ */ L(null), Se = null, Ce = U(T), we = U(D), Te = U(ee), Ee = /* @__PURE__ */ F(() => n().nodeTypes[U(T)] ?? Em), De = /* @__PURE__ */ F(() => n().ariaLabelConfig);
	_m(de), ym({ get value() {
		return U(me);
	} });
	let Oe = /* @__PURE__ */ F(() => {
		let e = U(te) === void 0 ? U(ie) ?? U(re) : U(ie), t = U(ne) === void 0 ? U(ae) ?? U(k) : U(ae);
		if (!(e === void 0 && t === void 0 && U(C) === void 0)) return `${U(C)};${e ? `width:${Lm(e)};` : ""}${t ? `height:${Lm(t)};` : ""}`;
	});
	Kn(() => {
		(U(T) !== Ce || U(D) !== we || U(ee) !== Te) && U(xe) !== null && requestAnimationFrame(() => {
			U(xe) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[de, {
				id: de,
				nodeElement: U(xe),
				force: !0
			}]]));
		}), Ce = U(T), we = U(D), Te = U(ee);
	}), Kn(() => {
		i() && (!U(_e) || U(xe) !== Se) && (Se && i().unobserve(Se), U(xe) && i().observe(U(xe)), Se = U(xe));
	}), ki(() => {
		Se && i()?.unobserve(Se);
	});
	function ke(e) {
		U(pe) && (!n().selectNodesOnDrag || !U(fe) || n().nodeDragThreshold > 0) && n().handleNodeSelection(de), o()?.({
			node: U(ue),
			event: e
		});
	}
	function Ae(e) {
		if (!(Vf(e) || n().disableKeyboardA11y)) if (Ld.includes(e.key) && U(pe)) {
			let t = e.key === "Escape";
			n().handleNodeSelection(de, t, U(xe));
		} else U(fe) && r().selected && Object.prototype.hasOwnProperty.call(Rm, e.key) && (e.preventDefault(), n(n().ariaLiveMessage = U(De)["node.a11yDescription.ariaLiveMessage"]({
			direction: e.key.replace("Arrow", "").toLowerCase(),
			x: ~~r().internals.positionAbsolute.x,
			y: ~~r().internals.positionAbsolute.y
		}), !0), n().moveSelectedNodes(Rm[e.key], e.shiftKey ? 4 : 1));
	}
	let je = () => {
		if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !U(xe)?.matches(":focus-visible")) return;
		let { width: e, height: t, viewport: i } = n();
		tf(/* @__PURE__ */ new Map([[de, r()]]), {
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
	var Me = {
		get store() {
			return n();
		},
		set store(e) {
			n(e), I();
		},
		get node() {
			return r();
		},
		set node(e) {
			r(e), I();
		},
		get resizeObserver() {
			return i();
		},
		set resizeObserver(e) {
			i(e), I();
		},
		get nodeClickDistance() {
			return a();
		},
		set nodeClickDistance(e) {
			a(e), I();
		},
		get onnodeclick() {
			return o();
		},
		set onnodeclick(e) {
			o(e), I();
		},
		get onnodedrag() {
			return s();
		},
		set onnodedrag(e) {
			s(e), I();
		},
		get onnodedragstart() {
			return c();
		},
		set onnodedragstart(e) {
			c(e), I();
		},
		get onnodedragstop() {
			return l();
		},
		set onnodedragstop(e) {
			l(e), I();
		},
		get onnodepointerenter() {
			return u();
		},
		set onnodepointerenter(e) {
			u(e), I();
		},
		get onnodepointerleave() {
			return d();
		},
		set onnodepointerleave(e) {
			d(e), I();
		},
		get onnodepointermove() {
			return f();
		},
		set onnodepointermove(e) {
			f(e), I();
		},
		get onnodecontextmenu() {
			return p();
		},
		set onnodecontextmenu(e) {
			p(e), I();
		}
	}, Ne = K(), Pe = B(Ne), Fe = (e) => {
		var t = jh();
		Ea(t, () => ({
			"data-id": de,
			class: [
				"svelte-flow__node",
				`svelte-flow__node-${U(T)}`,
				U(w)
			],
			style: U(Oe),
			onclick: ke,
			onpointerenter: u() ? (e) => u()({
				node: U(ue),
				event: e
			}) : void 0,
			onpointerleave: d() ? (e) => d()({
				node: U(ue),
				event: e
			}) : void 0,
			onpointermove: f() ? (e) => f()({
				node: U(ue),
				event: e
			}) : void 0,
			oncontextmenu: p() ? (e) => p()({
				node: U(ue),
				event: e
			}) : void 0,
			onkeydown: U(ve) ? Ae : void 0,
			onfocus: U(ve) ? je : void 0,
			tabIndex: U(ve) ? 0 : void 0,
			role: r().ariaRole ?? (U(ve) ? "group" : void 0),
			"aria-label": r().ariaLabel,
			"aria-roledescription": "node",
			"aria-describedby": n().disableKeyboardA11y ? void 0 : `${Oh}-${n().flowId}`,
			...r().domAttributes,
			[fa]: {
				dragging: U(S),
				selected: U(h),
				draggable: U(fe),
				connectable: U(me),
				selectable: U(pe),
				nopan: U(fe),
				parent: U(be)
			},
			[pa]: {
				"z-index": U(se),
				transform: `translate(${U(ce) ?? ""}px, ${U(le) ?? ""}px)`,
				visibility: U(he) ? "visible" : "hidden"
			}
		})), Ki(z(t), () => U(Ee), (e, t) => {
			t(e, {
				get data() {
					return U(m);
				},
				get id() {
					return de;
				},
				get selected() {
					return U(h);
				},
				get selectable() {
					return U(pe);
				},
				get deletable() {
					return U(v);
				},
				get sourcePosition() {
					return U(D);
				},
				get targetPosition() {
					return U(ee);
				},
				get zIndex() {
					return U(se);
				},
				get dragging() {
					return U(S);
				},
				get draggable() {
					return U(fe);
				},
				get dragHandle() {
					return U(oe);
				},
				get parentId() {
					return U(E);
				},
				get type() {
					return U(T);
				},
				get isConnectable() {
					return U(me);
				},
				get positionAbsoluteX() {
					return U(ce);
				},
				get positionAbsoluteY() {
					return U(le);
				},
				get width() {
					return U(ie);
				},
				get height() {
					return U(ae);
				}
			});
		}), j(t), Xi(t, (e, t) => Ch?.(e, t), () => ({
			nodeId: de,
			isSelectable: U(pe),
			disabled: !U(fe),
			handleSelector: U(oe),
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
		})), La(t, (e) => R(xe, e), () => U(xe)), q(e, t);
	};
	return J(Pe, (e) => {
		U(x) || e(Fe);
	}), q(e, Ne), P(Me);
}
Z(Mh, {
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
var Nh = /* @__PURE__ */ W("<div class=\"svelte-flow__nodes\"></div>");
function Ph(e, t) {
	N(t, !0);
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
	ki(() => {
		f?.disconnect();
	});
	var p = {
		get store() {
			return n();
		},
		set store(e) {
			n(e), I();
		},
		get nodeClickDistance() {
			return r();
		},
		set nodeClickDistance(e) {
			r(e), I();
		},
		get onnodeclick() {
			return i();
		},
		set onnodeclick(e) {
			i(e), I();
		},
		get onnodecontextmenu() {
			return a();
		},
		set onnodecontextmenu(e) {
			a(e), I();
		},
		get onnodepointerenter() {
			return o();
		},
		set onnodepointerenter(e) {
			o(e), I();
		},
		get onnodepointermove() {
			return s();
		},
		set onnodepointermove(e) {
			s(e), I();
		},
		get onnodepointerleave() {
			return c();
		},
		set onnodepointerleave(e) {
			c(e), I();
		},
		get onnodedrag() {
			return l();
		},
		set onnodedrag(e) {
			l(e), I();
		},
		get onnodedragstart() {
			return u();
		},
		set onnodedragstart(e) {
			u(e), I();
		},
		get onnodedragstop() {
			return d();
		},
		set onnodedragstop(e) {
			d(e), I();
		}
	}, m = Nh();
	return zi(m, 21, () => n().visible.nodes.values(), (e) => e.id, (e, t) => {
		Mh(e, {
			get node() {
				return U(t);
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
	}), j(m), q(e, m), P(p);
}
Z(Ph, {
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
var Fh = /* @__PURE__ */ G("<svg class=\"svelte-flow__edge-wrapper\"><g><!></g></svg>");
function Ih(e, t) {
	N(t, !0);
	let n = X(t, "edge", 7), r = X(t, "store", 15), i = X(t, "onedgeclick", 7), a = X(t, "onedgecontextmenu", 7), o = X(t, "onedgepointerenter", 7), s = X(t, "onedgepointerleave", 7), c = /* @__PURE__ */ F(() => n().id), l = /* @__PURE__ */ F(() => n().source), u = /* @__PURE__ */ F(() => n().target), d = /* @__PURE__ */ F(() => n().sourceX), f = /* @__PURE__ */ F(() => n().sourceY), p = /* @__PURE__ */ F(() => n().targetX), m = /* @__PURE__ */ F(() => n().targetY), h = /* @__PURE__ */ F(() => n().sourcePosition), g = /* @__PURE__ */ F(() => n().targetPosition), _ = /* @__PURE__ */ F(() => O(n().animated, !1)), v = /* @__PURE__ */ F(() => O(n().selected, !1)), y = /* @__PURE__ */ F(() => n().label), b = /* @__PURE__ */ F(() => n().labelStyle), x = /* @__PURE__ */ F(() => O(n().data, () => ({}), !0)), S = /* @__PURE__ */ F(() => n().style), C = /* @__PURE__ */ F(() => n().interactionWidth), w = /* @__PURE__ */ F(() => O(n().type, "default")), T = /* @__PURE__ */ F(() => n().sourceHandle), E = /* @__PURE__ */ F(() => n().targetHandle), D = /* @__PURE__ */ F(() => n().markerStart), ee = /* @__PURE__ */ F(() => n().markerEnd), te = /* @__PURE__ */ F(() => n().selectable), ne = /* @__PURE__ */ F(() => n().focusable), re = /* @__PURE__ */ F(() => O(n().deletable, !0)), k = /* @__PURE__ */ F(() => n().hidden), ie = /* @__PURE__ */ F(() => n().zIndex), ae = /* @__PURE__ */ F(() => n().class), oe = /* @__PURE__ */ F(() => n().ariaLabel);
	xm(U(c));
	let se = null, ce = /* @__PURE__ */ F(() => U(te) ?? r().elementsSelectable), le = /* @__PURE__ */ F(() => U(ne) ?? r().edgesFocusable), ue = /* @__PURE__ */ F(() => r().edgeTypes[U(w)] ?? qm), de = /* @__PURE__ */ F(() => U(D) ? `url('#${pp(U(D), r().flowId)}')` : void 0), fe = /* @__PURE__ */ F(() => U(ee) ? `url('#${pp(U(ee), r().flowId)}')` : void 0);
	function pe(e) {
		let t = r().edgeLookup.get(U(c));
		t && (U(ce) && r().handleEdgeSelection(U(c)), i()?.({
			event: e,
			edge: t
		}));
	}
	function me(e, t) {
		let n = r().edgeLookup.get(U(c));
		n && t({
			event: e,
			edge: n
		});
	}
	function he(e) {
		if (!r().disableKeyboardA11y && Ld.includes(e.key) && U(ce)) {
			let { unselectNodesAndEdges: t, addSelectedEdges: i } = r();
			e.key === "Escape" ? (se?.blur(), t({ edges: [n()] })) : i([U(c)]);
		}
	}
	var ge = {
		get edge() {
			return n();
		},
		set edge(e) {
			n(e), I();
		},
		get store() {
			return r();
		},
		set store(e) {
			r(e), I();
		},
		get onedgeclick() {
			return i();
		},
		set onedgeclick(e) {
			i(e), I();
		},
		get onedgecontextmenu() {
			return a();
		},
		set onedgecontextmenu(e) {
			a(e), I();
		},
		get onedgepointerenter() {
			return o();
		},
		set onedgepointerenter(e) {
			o(e), I();
		},
		get onedgepointerleave() {
			return s();
		},
		set onedgepointerleave(e) {
			s(e), I();
		}
	}, _e = K(), ve = B(_e), ye = (e) => {
		var t = Fh();
		let i;
		var D = z(t);
		Ea(D, () => ({
			class: ["svelte-flow__edge", U(ae)],
			"data-id": U(c),
			onclick: pe,
			oncontextmenu: a() ? (e) => {
				me(e, a());
			} : void 0,
			onpointerenter: o() ? (e) => {
				me(e, o());
			} : void 0,
			onpointerleave: s() ? (e) => {
				me(e, s());
			} : void 0,
			"aria-label": U(oe) === null ? void 0 : U(oe) ? U(oe) : `Edge from ${U(l)} to ${U(u)}`,
			"aria-describedby": U(le) ? `${kh}-${r().flowId}` : void 0,
			role: n().ariaRole ?? (U(le) ? "group" : "img"),
			"aria-roledescription": "edge",
			onkeydown: U(le) ? he : void 0,
			tabindex: U(le) ? 0 : void 0,
			...n().domAttributes,
			[fa]: {
				animated: U(_),
				selected: U(v),
				selectable: U(ce)
			}
		})), Ki(z(D), () => U(ue), (e, t) => {
			t(e, {
				get id() {
					return U(c);
				},
				get source() {
					return U(l);
				},
				get target() {
					return U(u);
				},
				get sourceX() {
					return U(d);
				},
				get sourceY() {
					return U(f);
				},
				get targetX() {
					return U(p);
				},
				get targetY() {
					return U(m);
				},
				get sourcePosition() {
					return U(h);
				},
				get targetPosition() {
					return U(g);
				},
				get animated() {
					return U(_);
				},
				get selected() {
					return U(v);
				},
				get label() {
					return U(y);
				},
				get labelStyle() {
					return U(b);
				},
				get data() {
					return U(x);
				},
				get style() {
					return U(S);
				},
				get interactionWidth() {
					return U(C);
				},
				get selectable() {
					return U(ce);
				},
				get deletable() {
					return U(re);
				},
				get type() {
					return U(w);
				},
				get sourceHandleId() {
					return U(T);
				},
				get targetHandleId() {
					return U(E);
				},
				get markerStart() {
					return U(de);
				},
				get markerEnd() {
					return U(fe);
				}
			});
		}), j(D), La(D, (e) => se = e, () => se), j(t), H(() => i = ca(t, "", i, { "z-index": U(ie) })), q(e, t);
	};
	return J(ve, (e) => {
		U(k) || e(ye);
	}), q(e, _e), P(ge);
}
Z(Ih, {
	edge: {},
	store: {},
	onedgeclick: {},
	onedgecontextmenu: {},
	onedgepointerenter: {},
	onedgepointerleave: {}
}, [], [], { mode: "open" }), nt();
var Lh = /* @__PURE__ */ G("<defs></defs>");
function Rh(e, t) {
	N(t, !1);
	let n = uh();
	Ra();
	var r = Lh();
	zi(r, 5, () => n.markers, (e) => e.id, (e, t) => {
		Hh(e, Ga(() => U(t)));
	}), j(r), q(e, r), P();
}
Z(Rh, {}, [], [], { mode: "open" });
var zh = /* @__PURE__ */ G("<polyline class=\"arrow\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" points=\"-5,-4 0,0 -5,4\"></polyline>"), Bh = /* @__PURE__ */ G("<polyline class=\"arrowclosed\" stroke-linecap=\"round\" stroke-linejoin=\"round\" points=\"-5,-4 0,0 -5,4 -5,-4\"></polyline>"), Vh = /* @__PURE__ */ G("<marker class=\"svelte-flow__arrowhead\" viewBox=\"-10 -10 20 20\" refX=\"0\" refY=\"0\"><!></marker>");
function Hh(e, t) {
	N(t, !0);
	let n = X(t, "id", 7), r = X(t, "type", 7), i = X(t, "width", 7, 12.5), a = X(t, "height", 7, 12.5), o = X(t, "markerUnits", 7, "strokeWidth"), s = X(t, "orient", 7, "auto-start-reverse"), c = X(t, "color", 7, "none"), l = X(t, "strokeWidth", 7);
	var u = {
		get id() {
			return n();
		},
		set id(e) {
			n(e), I();
		},
		get type() {
			return r();
		},
		set type(e) {
			r(e), I();
		},
		get width() {
			return i();
		},
		set width(e = 12.5) {
			i(e), I();
		},
		get height() {
			return a();
		},
		set height(e = 12.5) {
			a(e), I();
		},
		get markerUnits() {
			return o();
		},
		set markerUnits(e = "strokeWidth") {
			o(e), I();
		},
		get orient() {
			return s();
		},
		set orient(e = "auto-start-reverse") {
			s(e), I();
		},
		get color() {
			return c();
		},
		set color(e = "none") {
			c(e), I();
		},
		get strokeWidth() {
			return l();
		},
		set strokeWidth(e) {
			l(e), I();
		}
	}, d = Vh(), f = z(d), p = (e) => {
		var t = zh();
		let n;
		H(() => {
			Y(t, "stroke-width", l()), n = ca(t, "", n, { stroke: c() });
		}), q(e, t);
	}, m = (e) => {
		var t = Bh();
		let n;
		H(() => {
			Y(t, "stroke-width", l()), n = ca(t, "", n, {
				stroke: c(),
				fill: c()
			});
		}), q(e, t);
	};
	return J(f, (e) => {
		r() === Wd.Arrow ? e(p) : r() === Wd.ArrowClosed && e(m, 1);
	}), j(d), H(() => {
		Y(d, "id", n()), Y(d, "markerWidth", `${i()}`), Y(d, "markerHeight", `${a()}`), Y(d, "markerUnits", o()), Y(d, "orient", s());
	}), q(e, d), P(u);
}
Z(Hh, {
	id: {},
	type: {},
	width: {},
	height: {},
	markerUnits: {},
	orient: {},
	color: {},
	strokeWidth: {}
}, [], [], { mode: "open" });
var Uh = /* @__PURE__ */ W("<div class=\"svelte-flow__edges\"><svg class=\"svelte-flow__marker\"><!></svg> <!></div>");
function Wh(e, t) {
	N(t, !0);
	let n = X(t, "store", 15), r = X(t, "onedgeclick", 7), i = X(t, "onedgecontextmenu", 7), a = X(t, "onedgepointerenter", 7), o = X(t, "onedgepointerleave", 7);
	var s = {
		get store() {
			return n();
		},
		set store(e) {
			n(e), I();
		},
		get onedgeclick() {
			return r();
		},
		set onedgeclick(e) {
			r(e), I();
		},
		get onedgecontextmenu() {
			return i();
		},
		set onedgecontextmenu(e) {
			i(e), I();
		},
		get onedgepointerenter() {
			return a();
		},
		set onedgepointerenter(e) {
			a(e), I();
		},
		get onedgepointerleave() {
			return o();
		},
		set onedgepointerleave(e) {
			o(e), I();
		}
	}, c = Uh(), l = z(c);
	return Rh(z(l), {}), j(l), zi(V(l, 2), 17, () => n().visible.edges.values(), (e) => e.id, (e, t) => {
		Ih(e, {
			get edge() {
				return U(t);
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
	}), j(c), q(e, c), P(s);
}
Z(Wh, {
	store: {},
	onedgeclick: {},
	onedgecontextmenu: {},
	onedgepointerenter: {},
	onedgepointerleave: {}
}, [], [], { mode: "open" });
var Gh = /* @__PURE__ */ W("<div class=\"svelte-flow__selection svelte-jy2cbv\"></div>"), Kh = {
	hash: "svelte-jy2cbv",
	code: ".svelte-flow__selection.svelte-jy2cbv {position:absolute;top:0;left:0;}"
};
function qh(e, t) {
	N(t, !0), Yi(e, Kh);
	let n = X(t, "x", 7, 0), r = X(t, "y", 7, 0), i = X(t, "width", 7, 0), a = X(t, "height", 7, 0), o = X(t, "isVisible", 7, !0);
	var s = {
		get x() {
			return n();
		},
		set x(e = 0) {
			n(e), I();
		},
		get y() {
			return r();
		},
		set y(e = 0) {
			r(e), I();
		},
		get width() {
			return i();
		},
		set width(e = 0) {
			i(e), I();
		},
		get height() {
			return a();
		},
		set height(e = 0) {
			a(e), I();
		},
		get isVisible() {
			return o();
		},
		set isVisible(e = !0) {
			o(e), I();
		}
	}, c = K(), l = B(c), u = (e) => {
		var t = Gh();
		let o;
		H((e) => o = ca(t, "", o, e), [() => ({
			width: typeof i() == "string" ? i() : Lm(i()),
			height: typeof a() == "string" ? a() : Lm(a()),
			transform: `translate(${n()}px, ${r()}px)`
		})]), q(e, t);
	};
	return J(l, (e) => {
		o() && e(u);
	}), q(e, c), P(s);
}
Z(qh, {
	x: {},
	y: {},
	width: {},
	height: {},
	isVisible: {}
}, [], [], { mode: "open" });
var Jh = /* @__PURE__ */ W("<div><!></div>"), Yh = {
	hash: "svelte-1c0au3z",
	code: ".svelte-flow__selection-wrapper.svelte-1c0au3z {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}.svelte-flow__selection-wrapper.svelte-1c0au3z:focus,\n  .svelte-flow__selection-wrapper.svelte-1c0au3z:focus-visible {outline:none;}"
};
function Xh(e, t) {
	N(t, !0), Yi(e, Yh);
	let n = X(t, "store", 15), r = X(t, "onnodedrag", 7), i = X(t, "onnodedragstart", 7), a = X(t, "onnodedragstop", 7), o = X(t, "onselectionclick", 7), s = X(t, "onselectioncontextmenu", 7), c = /* @__PURE__ */ L(void 0);
	Kn(() => {
		n().disableKeyboardA11y || U(c)?.focus({ preventScroll: !0 });
	});
	let l = /* @__PURE__ */ F(() => {
		if (n().selectionRectMode === "nodes") {
			n().nodes;
			let e = ef(n().nodeLookup, { filter: (e) => !!e.selected });
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
		Object.prototype.hasOwnProperty.call(Rm, e.key) && (e.preventDefault(), n().moveSelectedNodes(Rm[e.key], e.shiftKey ? 4 : 1));
	}
	var p = {
		get store() {
			return n();
		},
		set store(e) {
			n(e), I();
		},
		get onnodedrag() {
			return r();
		},
		set onnodedrag(e) {
			r(e), I();
		},
		get onnodedragstart() {
			return i();
		},
		set onnodedragstart(e) {
			i(e), I();
		},
		get onnodedragstop() {
			return a();
		},
		set onnodedragstop(e) {
			a(e), I();
		},
		get onselectionclick() {
			return o();
		},
		set onselectionclick(e) {
			o(e), I();
		},
		get onselectioncontextmenu() {
			return s();
		},
		set onselectioncontextmenu(e) {
			s(e), I();
		}
	}, m = K(), h = B(m), g = (e) => {
		var t = Jh();
		let o;
		qh(z(t), {
			width: "100%",
			height: "100%",
			x: 0,
			y: 0
		}), j(t), Xi(t, (e, t) => Ch?.(e, t), () => ({
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
		})), La(t, (e) => R(c, e), () => U(c)), H((e) => {
			oa(t, 1, ea(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-1c0au3z"), Y(t, "role", n().disableKeyboardA11y ? void 0 : "button"), Y(t, "tabindex", n().disableKeyboardA11y ? void 0 : -1), o = ca(t, "", o, e);
		}, [() => ({
			width: Lm(U(l).width),
			height: Lm(U(l).height),
			transform: `translate(${U(l).x ?? ""}px, ${U(l).y ?? ""}px)`
		})]), Qr("contextmenu", t, u), Qr("click", t, d), Qr("keydown", t, function(...e) {
			(n().disableKeyboardA11y ? void 0 : f)?.apply(this, e);
		}), q(e, t);
	}, _ = /* @__PURE__ */ F(() => n().selectionRectMode === "nodes" && U(l) && Sf(U(l).x) && Sf(U(l).y));
	return J(h, (e) => {
		U(_) && e(g);
	}), q(e, m), P(p);
}
$r([
	"contextmenu",
	"click",
	"keydown"
]), Z(Xh, {
	store: {},
	onnodedrag: {},
	onnodedragstart: {},
	onnodedragstop: {},
	onselectionclick: {},
	onselectioncontextmenu: {}
}, [], [], { mode: "open" });
function Zh(e) {
	switch (e) {
		case "none": return 0;
		case "ctrl": return 8;
		case "shift": return 4;
		case "alt": return 2;
		case "meta": return 1;
	}
}
function Qh(e, t) {
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
					for (let n of e) if ((Array.isArray(n) ? n : [n]).reduce((e, t) => e | Zh(t), 0) === i) {
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
	return n && (o = Xr(e, i, a)), {
		update: (t) => {
			let { enabled: s = !0, type: c = "keydown" } = t;
			n && (!s || i !== c) ? o?.() : !n && s && (o = Xr(e, c, a)), n = s, i = c, r = t.trigger;
		},
		destroy: () => {
			o?.();
		}
	};
}
function $h() {
	let e = /* @__PURE__ */ F(uh), t = (t) => {
		let n = Fm(t) ? t : U(e).nodeLookup.get(t.id), r = n.parentId ? Ff(n.position, n.measured, n.parentId, U(e).nodeLookup, U(e).nodeOrigin) : n.position;
		return gf({
			...n,
			position: r,
			width: n.measured?.width ?? n.width,
			height: n.measured?.height ?? n.height
		});
	};
	function n(t, n, r = { replace: !1 }) {
		U(e).nodes = Ur(() => U(e).nodes).map((e) => {
			if (e.id === t) {
				let t = typeof n == "function" ? n(e) : n;
				return r?.replace && Fm(t) ? t : {
					...e,
					...t
				};
			}
			return e;
		});
	}
	function r(t, n, r = { replace: !1 }) {
		U(e).edges = Ur(() => U(e).edges).map((e) => {
			if (e.id === t) {
				let t = typeof n == "function" ? n(e) : n;
				return r.replace && Im(t) ? t : {
					...e,
					...t
				};
			}
			return e;
		});
	}
	let i = (t) => U(e).nodeLookup.get(t);
	return {
		zoomIn: U(e).zoomIn,
		zoomOut: U(e).zoomOut,
		getInternalNode: i,
		getNode: (e) => i(e)?.internals.userNode,
		getNodes: (t) => t === void 0 ? U(e).nodes : eg(U(e).nodeLookup, t),
		getEdge: (t) => U(e).edgeLookup.get(t),
		getEdges: (t) => t === void 0 ? U(e).edges : eg(U(e).edgeLookup, t),
		setZoom: async (t, n) => {
			let r = U(e).panZoom;
			return r ? r.scaleTo(t, n) : !1;
		},
		getZoom: () => U(e).viewport.zoom,
		setViewport: async (t, n) => {
			let r = U(e).viewport;
			return U(e).panZoom ? (await U(e).panZoom.setViewport({
				x: t.x ?? r.x,
				y: t.y ?? r.y,
				zoom: t.zoom ?? r.zoom
			}, n), !0) : !1;
		},
		getViewport: () => it(U(e).viewport),
		setCenter: async (t, n, r) => U(e).setCenter(t, n, r),
		fitView: (t) => U(e).fitView(t),
		fitBounds: async (t, n) => {
			if (!U(e).panZoom) return !1;
			let r = Af(t, U(e).width, U(e).height, U(e).minZoom, U(e).maxZoom, n?.padding ?? .1);
			return await U(e).panZoom.setViewport(r, {
				duration: n?.duration,
				ease: n?.ease,
				interpolate: n?.interpolate
			}), !0;
		},
		getIntersectingNodes: (n, r = !0, i) => {
			let a = xf(n), o = a ? n : t(n);
			return o ? (i || U(e).nodes).filter((t) => {
				let i = U(e).nodeLookup.get(t.id);
				if (!i || !a && t.id === n.id) return !1;
				let s = gf(i), c = bf(s, o);
				return r && c > 0 || c >= s.width * s.height || c >= o.width * o.height;
			}) : [];
		},
		isNodeIntersecting: (e, n, r = !0) => {
			let i = xf(e) ? e : t(e);
			if (!i) return !1;
			let a = bf(i, n);
			return r && a > 0 || a >= n.width * n.height || a >= i.width * i.height;
		},
		deleteElements: async ({ nodes: t = [], edges: n = [] }) => {
			let { nodes: r, edges: i } = await sf({
				nodesToRemove: t,
				edgesToRemove: n,
				nodes: U(e).nodes,
				edges: U(e).edges,
				onBeforeDelete: U(e).onbeforedelete
			});
			return r && (U(e).nodes = Ur(() => U(e).nodes).filter((e) => !r.some(({ id: t }) => t === e.id))), i && (U(e).edges = Ur(() => U(e).edges).filter((e) => !i.some(({ id: t }) => t === e.id))), (r.length > 0 || i.length > 0) && U(e).ondelete?.({
				nodes: r,
				edges: i
			}), {
				deletedNodes: r,
				deletedEdges: i
			};
		},
		screenToFlowPosition: (t, n = { snapToGrid: !0 }) => {
			if (!U(e).domNode) return t;
			let r = n.snapToGrid ? U(e).snapGrid : !1, { x: i, y: a, zoom: o } = U(e).viewport, { x: s, y: c } = U(e).domNode.getBoundingClientRect();
			return Tf({
				x: t.x - s,
				y: t.y - c
			}, [
				i,
				a,
				o
			], r !== null, r || [1, 1]);
		},
		flowToScreenPosition: (t) => {
			if (!U(e).domNode) return t;
			let { x: n, y: r, zoom: i } = U(e).viewport, { x: a, y: o } = U(e).domNode.getBoundingClientRect(), s = Ef(t, [
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
			nodes: [...U(e).nodes],
			edges: [...U(e).edges],
			viewport: { ...U(e).viewport }
		}),
		updateNode: n,
		updateNodeData: (t, r, i) => {
			let a = U(e).nodeLookup.get(t)?.internals.userNode;
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
		getNodesBounds: (t) => $d(t, {
			nodeLookup: U(e).nodeLookup,
			nodeOrigin: U(e).nodeOrigin
		}),
		getHandleConnections: ({ type: t, id: n, nodeId: r }) => Array.from(U(e).connectionLookup.get(`${r}-${t}-${n ?? null}`)?.values() ?? [])
	};
}
function eg(e, t) {
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
function tg(e, t) {
	N(t, !0);
	let n = X(t, "store", 15), r = X(t, "selectionKey", 7, "Shift"), i = X(t, "multiSelectionKey", 23, () => jf() ? "Meta" : "Control"), a = X(t, "deleteKey", 7, "Backspace"), o = X(t, "panActivationKey", 7, " "), s = X(t, "zoomActivationKey", 23, () => jf() ? "Meta" : "Control"), { deleteElements: c } = $h();
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
	return Zr("blur", kn, p), Zr("contextmenu", kn, p), Xi(kn, (e, t) => Qh?.(e, t), () => ({
		trigger: f(r(), () => n(n().selectionKeyPressed = !0, !0)),
		type: "keydown"
	})), Xi(kn, (e, t) => Qh?.(e, t), () => ({
		trigger: f(r(), () => n(n().selectionKeyPressed = !1, !0)),
		type: "keyup"
	})), Xi(kn, (e, t) => Qh?.(e, t), () => ({
		trigger: f(i(), () => {
			n(n().multiselectionKeyPressed = !0, !0);
		}),
		type: "keydown"
	})), Xi(kn, (e, t) => Qh?.(e, t), () => ({
		trigger: f(i(), () => n(n().multiselectionKeyPressed = !1, !0)),
		type: "keyup"
	})), Xi(kn, (e, t) => Qh?.(e, t), () => ({
		trigger: f(a(), (e) => {
			!(e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) && !Vf(e.originalEvent) && (n(n().deleteKeyPressed = !0, !0), m());
		}),
		type: "keydown"
	})), Xi(kn, (e, t) => Qh?.(e, t), () => ({
		trigger: f(a(), () => n(n().deleteKeyPressed = !1, !0)),
		type: "keyup"
	})), Xi(kn, (e, t) => Qh?.(e, t), () => ({
		trigger: f(o(), () => n(n().panActivationKeyPressed = !0, !0)),
		type: "keydown"
	})), Xi(kn, (e, t) => Qh?.(e, t), () => ({
		trigger: f(o(), () => n(n().panActivationKeyPressed = !1, !0)),
		type: "keyup"
	})), Xi(kn, (e, t) => Qh?.(e, t), () => ({
		trigger: f(s(), () => n(n().zoomActivationKeyPressed = !0, !0)),
		type: "keydown"
	})), Xi(kn, (e, t) => Qh?.(e, t), () => ({
		trigger: f(s(), () => n(n().zoomActivationKeyPressed = !1, !0)),
		type: "keyup"
	})), P({
		get store() {
			return n();
		},
		set store(e) {
			n(e), I();
		},
		get selectionKey() {
			return r();
		},
		set selectionKey(e = "Shift") {
			r(e), I();
		},
		get multiSelectionKey() {
			return i();
		},
		set multiSelectionKey(e = jf() ? "Meta" : "Control") {
			i(e), I();
		},
		get deleteKey() {
			return a();
		},
		set deleteKey(e = "Backspace") {
			a(e), I();
		},
		get panActivationKey() {
			return o();
		},
		set panActivationKey(e = " ") {
			o(e), I();
		},
		get zoomActivationKey() {
			return s();
		},
		set zoomActivationKey(e = jf() ? "Meta" : "Control") {
			s(e), I();
		}
	});
}
Z(tg, {
	store: {},
	selectionKey: {},
	multiSelectionKey: {},
	deleteKey: {},
	panActivationKey: {},
	zoomActivationKey: {}
}, [], [], { mode: "open" });
var ng = /* @__PURE__ */ G("<path fill=\"none\" class=\"svelte-flow__connection-path\"></path>"), rg = /* @__PURE__ */ G("<svg class=\"svelte-flow__connectionline\"><g><!></g></svg>");
function ig(e, t) {
	N(t, !0);
	let n = X(t, "store", 15), r = X(t, "type", 7), i = X(t, "containerStyle", 7), a = X(t, "style", 7), o = X(t, "LineComponent", 7), s = /* @__PURE__ */ F(() => {
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
			case Ud.Bezier: {
				let [t] = Jf(e);
				return t;
			}
			case Ud.Straight: {
				let [t] = tp(e);
				return t;
			}
			case Ud.Step:
			case Ud.SmoothStep: {
				let [t] = sp({
					...e,
					borderRadius: r() === Ud.Step ? 0 : void 0
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
			n(e), I();
		},
		get type() {
			return r();
		},
		set type(e) {
			r(e), I();
		},
		get containerStyle() {
			return i();
		},
		set containerStyle(e) {
			i(e), I();
		},
		get style() {
			return a();
		},
		set style(e) {
			a(e), I();
		},
		get LineComponent() {
			return o();
		},
		set LineComponent(e) {
			o(e), I();
		}
	}, l = K(), u = B(l), d = (e) => {
		var t = rg(), r = z(t), c = z(r), l = (e) => {
			var t = K();
			Ki(B(t), o, (e, t) => {
				t(e, {});
			}), q(e, t);
		}, u = (e) => {
			var t = ng();
			H(() => {
				Y(t, "d", U(s)), ca(t, a());
			}), q(e, t);
		};
		J(c, (e) => {
			o() ? e(l) : e(u, -1);
		}), j(r), j(t), H((e) => {
			Y(t, "width", n().width), Y(t, "height", n().height), ca(t, i()), oa(r, 0, e);
		}, [() => ea(["svelte-flow__connection", Jd(n().connection.isValid)])]), q(e, t);
	};
	return J(u, (e) => {
		n().connection.inProgress && e(d);
	}), q(e, l), P(c);
}
Z(ig, {
	store: {},
	type: {},
	containerStyle: {},
	style: {},
	LineComponent: {}
}, [], [], { mode: "open" });
var ag = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"position",
	"style",
	"class",
	"children"
]), og = /* @__PURE__ */ W("<div><!></div>");
function sg(e, t) {
	N(t, !0);
	let n = X(t, "position", 7, "top-right"), r = X(t, "style", 7), i = X(t, "class", 7), a = X(t, "children", 7), o = /* @__PURE__ */ Va(t, ag), s = /* @__PURE__ */ F(() => `${n()}`.split("-"));
	var c = {
		get position() {
			return n();
		},
		set position(e = "top-right") {
			n(e), I();
		},
		get style() {
			return r();
		},
		set style(e) {
			r(e), I();
		},
		get class() {
			return i();
		},
		set class(e) {
			i(e), I();
		},
		get children() {
			return a();
		},
		set children(e) {
			a(e), I();
		}
	}, l = og();
	return Ea(l, (e) => ({
		class: e,
		style: r(),
		...o
	}), [() => [
		"svelte-flow__panel",
		i(),
		...U(s)
	]]), Di(z(l), () => a() ?? T), j(l), q(e, l), P(c);
}
Z(sg, {
	position: {},
	style: {},
	class: {},
	children: {}
}, [], [], { mode: "open" });
var cg = /* @__PURE__ */ W("<a target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Svelte Flow attribution\">Svelte Flow</a>");
function lg(e, t) {
	N(t, !0);
	let n = X(t, "proOptions", 7), r = X(t, "position", 7, "bottom-right"), i = "https://svelteflow.dev?utm_source=attribution";
	var a = {
		get proOptions() {
			return n();
		},
		set proOptions(e) {
			n(e), I();
		},
		get position() {
			return r();
		},
		set position(e = "bottom-right") {
			r(e), I();
		}
	}, o = K(), s = B(o), c = (e) => {
		{
			let t = /* @__PURE__ */ F(() => `Please only hide this attribution when you are subscribed to Svelte Flow Pro: ${i}`);
			sg(e, {
				get position() {
					return r();
				},
				class: "svelte-flow__attribution",
				get "data-message"() {
					return U(t);
				},
				children: (e, t) => {
					var n = cg();
					H(() => Y(n, "href", i)), q(e, n);
				},
				$$slots: { default: !0 }
			});
		}
	};
	return J(s, (e) => {
		n()?.hideAttribution || e(c);
	}), q(e, o), P(a);
}
Z(lg, {
	proOptions: {},
	position: {}
}, [], [], { mode: "open" });
var ug = /* @__PURE__ */ W("<div><!></div>"), dg = {
	hash: "svelte-17tjnog",
	code: ".svelte-flow.svelte-17tjnog {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;}"
};
function fg(e, t) {
	N(t, !0), Yi(e, dg);
	let n = X(t, "width", 7), r = X(t, "height", 7), i = X(t, "colorMode", 7), a = X(t, "domNode", 15), o = X(t, "clientWidth", 15), s = X(t, "clientHeight", 15), c = X(t, "children", 7), l = X(t, "rest", 7), u = /* @__PURE__ */ F(() => l().class), d = /* @__PURE__ */ F(() => ne(l(), /* @__PURE__ */ "id.class.nodeTypes.edgeTypes.colorMode.isValidConnection.onmove.onmovestart.onmoveend.onflowerror.ondelete.onbeforedelete.onbeforeconnect.onconnect.onconnectstart.onconnectend.onbeforereconnect.onreconnect.onreconnectstart.onreconnectend.onclickconnectstart.onclickconnectend.oninit.onselectionchange.onselectiondragstart.onselectiondrag.onselectiondragstop.onselectionstart.onselectionend.clickConnect.fitView.fitViewOptions.nodeOrigin.nodeDragThreshold.connectionDragThreshold.minZoom.maxZoom.initialViewport.connectionRadius.connectionMode.selectionMode.selectNodesOnDrag.snapGrid.defaultMarkerColor.translateExtent.nodeExtent.onlyRenderVisibleElements.autoPanOnConnect.autoPanOnNodeDrag.colorModeSSR.defaultEdgeOptions.elevateNodesOnSelect.elevateEdgesOnSelect.nodesDraggable.autoPanOnNodeFocus.nodesConnectable.elementsSelectable.nodesFocusable.edgesFocusable.disableKeyboardA11y.noDragClass.noPanClass.noWheelClass.ariaLabelConfig.autoPanSpeed.panOnScrollSpeed.zIndexMode.autoPanOnSelection".split(".")));
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
			n(e), I();
		},
		get height() {
			return r();
		},
		set height(e) {
			r(e), I();
		},
		get colorMode() {
			return i();
		},
		set colorMode(e) {
			i(e), I();
		},
		get domNode() {
			return a();
		},
		set domNode(e) {
			a(e), I();
		},
		get clientWidth() {
			return o();
		},
		set clientWidth(e) {
			o(e), I();
		},
		get clientHeight() {
			return s();
		},
		set clientHeight(e) {
			s(e), I();
		},
		get children() {
			return c();
		},
		set children(e) {
			c(e), I();
		},
		get rest() {
			return l();
		},
		set rest(e) {
			l(e), I();
		}
	}, m = ug();
	return Ea(m, (e) => ({
		class: [
			"svelte-flow",
			"svelte-flow__container",
			i(),
			U(u)
		],
		"data-testid": "svelte-flow__wrapper",
		role: "application",
		onscroll: f,
		...U(d),
		[pa]: e
	}), [() => ({
		width: Lm(n()),
		height: Lm(r())
	})], void 0, void 0, "svelte-17tjnog"), Di(z(m), () => c() ?? T), j(m), La(m, (e) => a(e), () => a()), Fa(m, "clientHeight", s), Fa(m, "clientWidth", o), q(e, m), P(p);
}
Z(fg, {
	width: {},
	height: {},
	colorMode: {},
	domNode: {},
	clientWidth: {},
	clientHeight: {},
	children: {},
	rest: {}
}, [], [], { mode: "open" });
var pg = /* @__PURE__ */ new Set(/* @__PURE__ */ "$$slots.$$events.$$legacy.$$host.width.height.proOptions.selectionKey.deleteKey.panActivationKey.multiSelectionKey.zoomActivationKey.paneClickDistance.nodeClickDistance.onmovestart.onmoveend.onmove.oninit.onnodeclick.onnodecontextmenu.onnodedrag.onnodedragstart.onnodedragstop.onnodepointerenter.onnodepointermove.onnodepointerleave.onselectionclick.onselectioncontextmenu.onselectionstart.onselectionend.onedgeclick.onedgecontextmenu.onedgepointerenter.onedgepointerleave.onpaneclick.onpanecontextmenu.panOnScrollMode.preventScrolling.zoomOnScroll.zoomOnDoubleClick.zoomOnPinch.panOnScroll.panOnScrollSpeed.panOnDrag.selectionOnDrag.autoPanOnSelection.connectionLineComponent.connectionLineStyle.connectionLineContainerStyle.connectionLineType.attributionPosition.children.nodes.edges.viewport".split(".")), mg = /* @__PURE__ */ W("<div class=\"svelte-flow__viewport-back svelte-flow__container\"></div> <!> <div class=\"svelte-flow__edge-labels svelte-flow__container\"></div> <!> <!> <!> <div class=\"svelte-flow__viewport-front svelte-flow__container\"></div>", 1), hg = /* @__PURE__ */ W("<!> <!>", 1), gg = /* @__PURE__ */ W("<!> <!> <!> <!> <!>", 1);
function _g(e, t) {
	N(t, !0);
	let n = X(t, "width", 7), r = X(t, "height", 7), i = X(t, "proOptions", 7), a = X(t, "selectionKey", 7), o = X(t, "deleteKey", 7), s = X(t, "panActivationKey", 7), c = X(t, "multiSelectionKey", 7), l = X(t, "zoomActivationKey", 7), u = X(t, "paneClickDistance", 7, 1), d = X(t, "nodeClickDistance", 7, 1), f = X(t, "onmovestart", 7), p = X(t, "onmoveend", 7), m = X(t, "onmove", 7), h = X(t, "oninit", 7), g = X(t, "onnodeclick", 7), _ = X(t, "onnodecontextmenu", 7), v = X(t, "onnodedrag", 7), y = X(t, "onnodedragstart", 7), b = X(t, "onnodedragstop", 7), x = X(t, "onnodepointerenter", 7), S = X(t, "onnodepointermove", 7), C = X(t, "onnodepointerleave", 7), w = X(t, "onselectionclick", 7), E = X(t, "onselectioncontextmenu", 7), D = X(t, "onselectionstart", 7), ee = X(t, "onselectionend", 7), O = X(t, "onedgeclick", 7), te = X(t, "onedgecontextmenu", 7), ne = X(t, "onedgepointerenter", 7), re = X(t, "onedgepointerleave", 7), k = X(t, "onpaneclick", 7), ie = X(t, "onpanecontextmenu", 7), ae = X(t, "panOnScrollMode", 23, () => Bd.Free), oe = X(t, "preventScrolling", 7, !0), se = X(t, "zoomOnScroll", 7, !0), ce = X(t, "zoomOnDoubleClick", 7, !0), le = X(t, "zoomOnPinch", 7, !0), ue = X(t, "panOnScroll", 7, !1), de = X(t, "panOnScrollSpeed", 7, .5), fe = X(t, "panOnDrag", 7, !0), pe = X(t, "selectionOnDrag", 7, !1), me = X(t, "autoPanOnSelection", 7, !0), he = X(t, "connectionLineComponent", 7), ge = X(t, "connectionLineStyle", 7), _e = X(t, "connectionLineContainerStyle", 7), ve = X(t, "connectionLineType", 23, () => Ud.Bezier), ye = X(t, "attributionPosition", 7), be = X(t, "children", 7), xe = X(t, "nodes", 31, () => En([])), Se = X(t, "edges", 31, () => En([])), Ce = X(t, "viewport", 15, void 0), we = /* @__PURE__ */ Va(t, pg), Te = fh({
		props: we,
		width: n(),
		height: r(),
		get nodes() {
			return xe();
		},
		set nodes(e) {
			xe(e);
		},
		get edges() {
			return Se();
		},
		set edges(e) {
			Se(e);
		},
		get viewport() {
			return Ce();
		},
		set viewport(e) {
			Ce(e);
		}
	}), Ee = ct(dh);
	return Ee && Ee.setStore && Ee.setStore(Te), lt(dh, {
		provider: !1,
		getStore() {
			return Te;
		}
	}), Kn(() => {
		let e = {
			nodes: Te.selectedNodes,
			edges: Te.selectedEdges
		};
		Ur(() => t.onselectionchange)?.(e);
		for (let t of Te.selectionChangeHandlers.values()) t(e);
	}), ki(() => {
		Te.reset();
	}), fg(e, {
		get colorMode() {
			return Te.colorMode;
		},
		get width() {
			return n();
		},
		get height() {
			return r();
		},
		get rest() {
			return we;
		},
		get domNode() {
			return Te.domNode;
		},
		set domNode(e) {
			Te.domNode = e;
		},
		get clientWidth() {
			return Te.width;
		},
		set clientWidth(e) {
			Te.width = e;
		},
		get clientHeight() {
			return Te.height;
		},
		set clientHeight(e) {
			Te.height = e;
		},
		children: (e, t) => {
			var n = gg(), r = B(n);
			tg(r, {
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
					return Te;
				},
				set store(e) {
					Te = e;
				}
			});
			var xe = V(r, 2);
			hh(xe, {
				get panOnScrollMode() {
					return ae();
				},
				get preventScrolling() {
					return oe();
				},
				get zoomOnScroll() {
					return se();
				},
				get zoomOnDoubleClick() {
					return ce();
				},
				get zoomOnPinch() {
					return le();
				},
				get panOnScroll() {
					return ue();
				},
				get panOnScrollSpeed() {
					return de();
				},
				get panOnDrag() {
					return fe();
				},
				get paneClickDistance() {
					return u();
				},
				get selectionOnDrag() {
					return pe();
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
					return Te;
				},
				set store(e) {
					Te = e;
				},
				children: (e, t) => {
					bh(e, {
						get onpaneclick() {
							return k();
						},
						get onpanecontextmenu() {
							return ie();
						},
						get onselectionstart() {
							return D();
						},
						get onselectionend() {
							return ee();
						},
						get panOnDrag() {
							return fe();
						},
						get paneClickDistance() {
							return u();
						},
						get selectionOnDrag() {
							return pe();
						},
						get autoPanOnSelection() {
							return me();
						},
						get store() {
							return Te;
						},
						set store(e) {
							Te = e;
						},
						children: (e, t) => {
							var n = hg(), r = B(n);
							Sh(r, {
								get store() {
									return Te;
								},
								set store(e) {
									Te = e;
								},
								children: (e, t) => {
									var n = mg(), r = V(B(n), 2);
									Wh(r, {
										get onedgeclick() {
											return O();
										},
										get onedgecontextmenu() {
											return te();
										},
										get onedgepointerenter() {
											return ne();
										},
										get onedgepointerleave() {
											return re();
										},
										get store() {
											return Te;
										},
										set store(e) {
											Te = e;
										}
									});
									var i = V(r, 4);
									ig(i, {
										get type() {
											return ve();
										},
										get LineComponent() {
											return he();
										},
										get containerStyle() {
											return _e();
										},
										get style() {
											return ge();
										},
										get store() {
											return Te;
										},
										set store(e) {
											Te = e;
										}
									});
									var a = V(i, 2);
									Ph(a, {
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
											return Te;
										},
										set store(e) {
											Te = e;
										}
									}), Xh(V(a, 2), {
										get onselectionclick() {
											return w();
										},
										get onselectioncontextmenu() {
											return E();
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
											return Te;
										},
										set store(e) {
											Te = e;
										}
									}), M(2), q(e, n);
								},
								$$slots: { default: !0 }
							});
							var i = V(r, 2);
							{
								let e = /* @__PURE__ */ F(() => !!(Te.selectionRect && Te.selectionRectMode === "user")), t = /* @__PURE__ */ F(() => Te.selectionRect?.width), n = /* @__PURE__ */ F(() => Te.selectionRect?.height), r = /* @__PURE__ */ F(() => Te.selectionRect?.x), a = /* @__PURE__ */ F(() => Te.selectionRect?.y);
								qh(i, {
									get isVisible() {
										return U(e);
									},
									get width() {
										return U(t);
									},
									get height() {
										return U(n);
									},
									get x() {
										return U(r);
									},
									get y() {
										return U(a);
									}
								});
							}
							q(e, n);
						},
						$$slots: { default: !0 }
					});
				},
				$$slots: { default: !0 }
			});
			var Se = V(xe, 2);
			lg(Se, {
				get proOptions() {
					return i();
				},
				get position() {
					return ye();
				}
			});
			var Ce = V(Se, 2);
			Dh(Ce, { get store() {
				return Te;
			} }), Di(V(Ce, 2), () => be() ?? T), q(e, n);
		},
		$$slots: { default: !0 }
	}), P({
		get width() {
			return n();
		},
		set width(e) {
			n(e), I();
		},
		get height() {
			return r();
		},
		set height(e) {
			r(e), I();
		},
		get proOptions() {
			return i();
		},
		set proOptions(e) {
			i(e), I();
		},
		get selectionKey() {
			return a();
		},
		set selectionKey(e) {
			a(e), I();
		},
		get deleteKey() {
			return o();
		},
		set deleteKey(e) {
			o(e), I();
		},
		get panActivationKey() {
			return s();
		},
		set panActivationKey(e) {
			s(e), I();
		},
		get multiSelectionKey() {
			return c();
		},
		set multiSelectionKey(e) {
			c(e), I();
		},
		get zoomActivationKey() {
			return l();
		},
		set zoomActivationKey(e) {
			l(e), I();
		},
		get paneClickDistance() {
			return u();
		},
		set paneClickDistance(e = 1) {
			u(e), I();
		},
		get nodeClickDistance() {
			return d();
		},
		set nodeClickDistance(e = 1) {
			d(e), I();
		},
		get onmovestart() {
			return f();
		},
		set onmovestart(e) {
			f(e), I();
		},
		get onmoveend() {
			return p();
		},
		set onmoveend(e) {
			p(e), I();
		},
		get onmove() {
			return m();
		},
		set onmove(e) {
			m(e), I();
		},
		get oninit() {
			return h();
		},
		set oninit(e) {
			h(e), I();
		},
		get onnodeclick() {
			return g();
		},
		set onnodeclick(e) {
			g(e), I();
		},
		get onnodecontextmenu() {
			return _();
		},
		set onnodecontextmenu(e) {
			_(e), I();
		},
		get onnodedrag() {
			return v();
		},
		set onnodedrag(e) {
			v(e), I();
		},
		get onnodedragstart() {
			return y();
		},
		set onnodedragstart(e) {
			y(e), I();
		},
		get onnodedragstop() {
			return b();
		},
		set onnodedragstop(e) {
			b(e), I();
		},
		get onnodepointerenter() {
			return x();
		},
		set onnodepointerenter(e) {
			x(e), I();
		},
		get onnodepointermove() {
			return S();
		},
		set onnodepointermove(e) {
			S(e), I();
		},
		get onnodepointerleave() {
			return C();
		},
		set onnodepointerleave(e) {
			C(e), I();
		},
		get onselectionclick() {
			return w();
		},
		set onselectionclick(e) {
			w(e), I();
		},
		get onselectioncontextmenu() {
			return E();
		},
		set onselectioncontextmenu(e) {
			E(e), I();
		},
		get onselectionstart() {
			return D();
		},
		set onselectionstart(e) {
			D(e), I();
		},
		get onselectionend() {
			return ee();
		},
		set onselectionend(e) {
			ee(e), I();
		},
		get onedgeclick() {
			return O();
		},
		set onedgeclick(e) {
			O(e), I();
		},
		get onedgecontextmenu() {
			return te();
		},
		set onedgecontextmenu(e) {
			te(e), I();
		},
		get onedgepointerenter() {
			return ne();
		},
		set onedgepointerenter(e) {
			ne(e), I();
		},
		get onedgepointerleave() {
			return re();
		},
		set onedgepointerleave(e) {
			re(e), I();
		},
		get onpaneclick() {
			return k();
		},
		set onpaneclick(e) {
			k(e), I();
		},
		get onpanecontextmenu() {
			return ie();
		},
		set onpanecontextmenu(e) {
			ie(e), I();
		},
		get panOnScrollMode() {
			return ae();
		},
		set panOnScrollMode(e = Bd.Free) {
			ae(e), I();
		},
		get preventScrolling() {
			return oe();
		},
		set preventScrolling(e = !0) {
			oe(e), I();
		},
		get zoomOnScroll() {
			return se();
		},
		set zoomOnScroll(e = !0) {
			se(e), I();
		},
		get zoomOnDoubleClick() {
			return ce();
		},
		set zoomOnDoubleClick(e = !0) {
			ce(e), I();
		},
		get zoomOnPinch() {
			return le();
		},
		set zoomOnPinch(e = !0) {
			le(e), I();
		},
		get panOnScroll() {
			return ue();
		},
		set panOnScroll(e = !1) {
			ue(e), I();
		},
		get panOnScrollSpeed() {
			return de();
		},
		set panOnScrollSpeed(e = .5) {
			de(e), I();
		},
		get panOnDrag() {
			return fe();
		},
		set panOnDrag(e = !0) {
			fe(e), I();
		},
		get selectionOnDrag() {
			return pe();
		},
		set selectionOnDrag(e = !1) {
			pe(e), I();
		},
		get autoPanOnSelection() {
			return me();
		},
		set autoPanOnSelection(e = !0) {
			me(e), I();
		},
		get connectionLineComponent() {
			return he();
		},
		set connectionLineComponent(e) {
			he(e), I();
		},
		get connectionLineStyle() {
			return ge();
		},
		set connectionLineStyle(e) {
			ge(e), I();
		},
		get connectionLineContainerStyle() {
			return _e();
		},
		set connectionLineContainerStyle(e) {
			_e(e), I();
		},
		get connectionLineType() {
			return ve();
		},
		set connectionLineType(e = Ud.Bezier) {
			ve(e), I();
		},
		get attributionPosition() {
			return ye();
		},
		set attributionPosition(e) {
			ye(e), I();
		},
		get children() {
			return be();
		},
		set children(e) {
			be(e), I();
		},
		get nodes() {
			return xe();
		},
		set nodes(e = []) {
			xe(e), I();
		},
		get edges() {
			return Se();
		},
		set edges(e = []) {
			Se(e), I();
		},
		get viewport() {
			return Ce();
		},
		set viewport(e = void 0) {
			Ce(e), I();
		}
	});
}
Z(_g, {
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
function vg(e, t) {
	N(t, !0);
	let n = X(t, "children", 7), r = /* @__PURE__ */ L(fh({
		props: {},
		nodes: [],
		edges: []
	}));
	lt(dh, {
		provider: !0,
		getStore() {
			return U(r);
		},
		setStore: (e) => {
			R(r, e);
		}
	}), ki(() => {
		U(r).reset();
	});
	var i = {
		get children() {
			return n();
		},
		set children(e) {
			n(e), I();
		}
	}, a = K();
	return Di(B(a), () => n() ?? T), q(e, a), P(i);
}
Z(vg, { children: {} }, [], [], { mode: "open" });
var yg = /* @__PURE__ */ new Set([
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
]), bg = /* @__PURE__ */ W("<button><!></button>");
function xg(e, t) {
	N(t, !0);
	let n = X(t, "class", 7), r = X(t, "bgColor", 7), i = X(t, "bgColorHover", 7), a = X(t, "color", 7), o = X(t, "colorHover", 7), s = X(t, "borderColor", 7), c = X(t, "onclick", 7), l = X(t, "children", 7), u = /* @__PURE__ */ Va(t, yg);
	var d = {
		get class() {
			return n();
		},
		set class(e) {
			n(e), I();
		},
		get bgColor() {
			return r();
		},
		set bgColor(e) {
			r(e), I();
		},
		get bgColorHover() {
			return i();
		},
		set bgColorHover(e) {
			i(e), I();
		},
		get color() {
			return a();
		},
		set color(e) {
			a(e), I();
		},
		get colorHover() {
			return o();
		},
		set colorHover(e) {
			o(e), I();
		},
		get borderColor() {
			return s();
		},
		set borderColor(e) {
			s(e), I();
		},
		get onclick() {
			return c();
		},
		set onclick(e) {
			c(e), I();
		},
		get children() {
			return l();
		},
		set children(e) {
			l(e), I();
		}
	}, f = bg();
	return Ea(f, () => ({
		type: "button",
		onclick: c(),
		class: ["svelte-flow__controls-button", n()],
		...u,
		[pa]: {
			"--xy-controls-button-background-color-props": r(),
			"--xy-controls-button-background-color-hover-props": i(),
			"--xy-controls-button-color-props": a(),
			"--xy-controls-button-color-hover-props": o(),
			"--xy-controls-button-border-color-props": s()
		}
	})), Di(z(f), () => l() ?? T), j(f), q(e, f), P(d);
}
Z(xg, {
	class: {},
	bgColor: {},
	bgColorHover: {},
	color: {},
	colorHover: {},
	borderColor: {},
	onclick: {},
	children: {}
}, [], [], { mode: "open" });
var Sg = /* @__PURE__ */ G("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\"><path d=\"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z\"></path></svg>");
function Cg(e) {
	q(e, Sg());
}
Z(Cg, {}, [], [], { mode: "open" });
var wg = /* @__PURE__ */ G("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 5\"><path d=\"M0 0h32v4.2H0z\"></path></svg>");
function Tg(e) {
	q(e, wg());
}
Z(Tg, {}, [], [], { mode: "open" });
var Eg = /* @__PURE__ */ G("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 30\"><path d=\"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z\"></path></svg>");
function Dg(e) {
	q(e, Eg());
}
Z(Dg, {}, [], [], { mode: "open" });
var Og = /* @__PURE__ */ G("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 32\"><path d=\"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z\"></path></svg>");
function kg(e) {
	q(e, Og());
}
Z(kg, {}, [], [], { mode: "open" });
var Ag = /* @__PURE__ */ G("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 32\"><path d=\"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z\"></path></svg>");
function jg(e) {
	q(e, Ag());
}
Z(jg, {}, [], [], { mode: "open" });
var Mg = /* @__PURE__ */ new Set([
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
]), Ng = /* @__PURE__ */ W("<!> <!>", 1), Pg = /* @__PURE__ */ W("<!> <!> <!> <!> <!> <!>", 1);
function Fg(e, t) {
	N(t, !0);
	let n = X(t, "position", 7, "bottom-left"), r = X(t, "orientation", 7, "vertical"), i = X(t, "showZoom", 7, !0), a = X(t, "showFitView", 7, !0), o = X(t, "showLock", 7, !0), s = X(t, "style", 7), c = X(t, "class", 7), l = X(t, "buttonBgColor", 7), u = X(t, "buttonBgColorHover", 7), d = X(t, "buttonColor", 7), f = X(t, "buttonColorHover", 7), p = X(t, "buttonBorderColor", 7), m = X(t, "fitViewOptions", 7), h = X(t, "children", 7), g = X(t, "before", 7), _ = X(t, "after", 7), v = /* @__PURE__ */ Va(t, Mg), y = /* @__PURE__ */ F(uh), b = /* @__PURE__ */ F(() => ({
		bgColor: l(),
		bgColorHover: u(),
		color: d(),
		colorHover: f(),
		borderColor: p()
	})), x = /* @__PURE__ */ F(() => U(y).nodesDraggable || U(y).nodesConnectable || U(y).elementsSelectable), S = /* @__PURE__ */ F(() => U(y).viewport.zoom <= U(y).minZoom), C = /* @__PURE__ */ F(() => U(y).viewport.zoom >= U(y).maxZoom), w = /* @__PURE__ */ F(() => U(y).ariaLabelConfig), T = /* @__PURE__ */ F(() => r() === "horizontal" ? "horizontal" : "vertical"), E = () => {
		U(y).zoomIn();
	}, D = () => {
		U(y).zoomOut();
	}, ee = () => {
		U(y).fitView(m());
	}, O = () => {
		let e = !U(x);
		U(y).nodesDraggable = e, U(y).nodesConnectable = e, U(y).elementsSelectable = e;
	};
	var te = {
		get position() {
			return n();
		},
		set position(e = "bottom-left") {
			n(e), I();
		},
		get orientation() {
			return r();
		},
		set orientation(e = "vertical") {
			r(e), I();
		},
		get showZoom() {
			return i();
		},
		set showZoom(e = !0) {
			i(e), I();
		},
		get showFitView() {
			return a();
		},
		set showFitView(e = !0) {
			a(e), I();
		},
		get showLock() {
			return o();
		},
		set showLock(e = !0) {
			o(e), I();
		},
		get style() {
			return s();
		},
		set style(e) {
			s(e), I();
		},
		get class() {
			return c();
		},
		set class(e) {
			c(e), I();
		},
		get buttonBgColor() {
			return l();
		},
		set buttonBgColor(e) {
			l(e), I();
		},
		get buttonBgColorHover() {
			return u();
		},
		set buttonBgColorHover(e) {
			u(e), I();
		},
		get buttonColor() {
			return d();
		},
		set buttonColor(e) {
			d(e), I();
		},
		get buttonColorHover() {
			return f();
		},
		set buttonColorHover(e) {
			f(e), I();
		},
		get buttonBorderColor() {
			return p();
		},
		set buttonBorderColor(e) {
			p(e), I();
		},
		get fitViewOptions() {
			return m();
		},
		set fitViewOptions(e) {
			m(e), I();
		},
		get children() {
			return h();
		},
		set children(e) {
			h(e), I();
		},
		get before() {
			return g();
		},
		set before(e) {
			g(e), I();
		},
		get after() {
			return _();
		},
		set after(e) {
			_(e), I();
		}
	};
	{
		let t = /* @__PURE__ */ F(() => [
			"svelte-flow__controls",
			U(T),
			c()
		]);
		sg(e, Ga({
			get class() {
				return U(t);
			},
			get position() {
				return n();
			},
			"data-testid": "svelte-flow__controls",
			get "aria-label"() {
				return U(w)["controls.ariaLabel"];
			},
			get style() {
				return s();
			}
		}, () => v, {
			children: (e, t) => {
				var n = Pg(), r = B(n), s = (e) => {
					var t = K();
					Di(B(t), g), q(e, t);
				};
				J(r, (e) => {
					g() && e(s);
				});
				var c = V(r, 2), l = (e) => {
					var t = Ng(), n = B(t);
					xg(n, Ga({
						onclick: E,
						class: "svelte-flow__controls-zoomin",
						get title() {
							return U(w)["controls.zoomIn.ariaLabel"];
						},
						get "aria-label"() {
							return U(w)["controls.zoomIn.ariaLabel"];
						},
						get disabled() {
							return U(C);
						}
					}, () => U(b), {
						children: (e, t) => {
							Cg(e, {});
						},
						$$slots: { default: !0 }
					})), xg(V(n, 2), Ga({
						onclick: D,
						class: "svelte-flow__controls-zoomout",
						get title() {
							return U(w)["controls.zoomOut.ariaLabel"];
						},
						get "aria-label"() {
							return U(w)["controls.zoomOut.ariaLabel"];
						},
						get disabled() {
							return U(S);
						}
					}, () => U(b), {
						children: (e, t) => {
							Tg(e, {});
						},
						$$slots: { default: !0 }
					})), q(e, t);
				};
				J(c, (e) => {
					i() && e(l);
				});
				var u = V(c, 2), d = (e) => {
					xg(e, Ga({
						class: "svelte-flow__controls-fitview",
						onclick: ee,
						get title() {
							return U(w)["controls.fitView.ariaLabel"];
						},
						get "aria-label"() {
							return U(w)["controls.fitView.ariaLabel"];
						}
					}, () => U(b), {
						children: (e, t) => {
							Dg(e, {});
						},
						$$slots: { default: !0 }
					}));
				};
				J(u, (e) => {
					a() && e(d);
				});
				var f = V(u, 2), p = (e) => {
					xg(e, Ga({
						class: "svelte-flow__controls-interactive",
						onclick: O,
						get title() {
							return U(w)["controls.interactive.ariaLabel"];
						},
						get "aria-label"() {
							return U(w)["controls.interactive.ariaLabel"];
						}
					}, () => U(b), {
						children: (e, t) => {
							var n = K(), r = B(n), i = (e) => {
								jg(e, {});
							}, a = (e) => {
								kg(e, {});
							};
							J(r, (e) => {
								U(x) ? e(i) : e(a, -1);
							}), q(e, n);
						},
						$$slots: { default: !0 }
					}));
				};
				J(f, (e) => {
					o() && e(p);
				});
				var m = V(f, 2), v = (e) => {
					var t = K();
					Di(B(t), h), q(e, t);
				};
				J(m, (e) => {
					h() && e(v);
				});
				var y = V(m, 2), T = (e) => {
					var t = K();
					Di(B(t), _), q(e, t);
				};
				J(y, (e) => {
					_() && e(T);
				}), q(e, n);
			},
			$$slots: { default: !0 }
		}));
	}
	return P(te);
}
Z(Fg, {
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
var Ig;
(function(e) {
	e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Ig ||= {});
var Lg = /* @__PURE__ */ G("<circle></circle>");
function Rg(e, t) {
	N(t, !0);
	let n = X(t, "radius", 7), r = X(t, "class", 7);
	var i = {
		get radius() {
			return n();
		},
		set radius(e) {
			n(e), I();
		},
		get class() {
			return r();
		},
		set class(e) {
			r(e), I();
		}
	}, a = Lg();
	return H(() => {
		Y(a, "cx", n()), Y(a, "cy", n()), Y(a, "r", n()), oa(a, 0, ea([
			"svelte-flow__background-pattern",
			"dots",
			r()
		]));
	}), q(e, a), P(i);
}
Z(Rg, {
	radius: {},
	class: {}
}, [], [], { mode: "open" });
var zg = /* @__PURE__ */ G("<path></path>");
function Bg(e, t) {
	N(t, !0);
	let n = X(t, "lineWidth", 7), r = X(t, "dimensions", 7), i = X(t, "variant", 7), a = X(t, "class", 7);
	var o = {
		get lineWidth() {
			return n();
		},
		set lineWidth(e) {
			n(e), I();
		},
		get dimensions() {
			return r();
		},
		set dimensions(e) {
			r(e), I();
		},
		get variant() {
			return i();
		},
		set variant(e) {
			i(e), I();
		},
		get class() {
			return a();
		},
		set class(e) {
			a(e), I();
		}
	}, s = zg();
	return H(() => {
		Y(s, "stroke-width", n()), Y(s, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), oa(s, 0, ea([
			"svelte-flow__background-pattern",
			i(),
			a()
		]));
	}), q(e, s), P(o);
}
Z(Bg, {
	lineWidth: {},
	dimensions: {},
	variant: {},
	class: {}
}, [], [], { mode: "open" });
var Vg = {
	[Ig.Dots]: 1,
	[Ig.Lines]: 1,
	[Ig.Cross]: 6
}, Hg = /* @__PURE__ */ G("<svg data-testid=\"svelte-flow__background\"><pattern patternUnits=\"userSpaceOnUse\"><!></pattern><rect x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"></rect></svg>");
function Ug(e, t) {
	N(t, !0);
	let n = X(t, "id", 7), r = X(t, "variant", 23, () => Ig.Dots), i = X(t, "gap", 7, 20), a = X(t, "size", 7), o = X(t, "lineWidth", 7, 1), s = X(t, "bgColor", 7), c = X(t, "patternColor", 7), l = X(t, "patternClass", 7), u = X(t, "class", 7), d = /* @__PURE__ */ F(uh), f = /* @__PURE__ */ F(() => r() === Ig.Dots), p = /* @__PURE__ */ F(() => r() === Ig.Cross), m = /* @__PURE__ */ F(() => Array.isArray(i()) ? i() : [i(), i()]), h = /* @__PURE__ */ F(() => `background-pattern-${U(d).flowId}-${n() ?? ""}`), g = /* @__PURE__ */ F(() => [U(m)[0] * U(d).viewport.zoom || 1, U(m)[1] * U(d).viewport.zoom || 1]), _ = /* @__PURE__ */ F(() => (a() ?? Vg[r()]) * U(d).viewport.zoom), v = /* @__PURE__ */ F(() => U(p) ? [U(_), U(_)] : U(g)), y = /* @__PURE__ */ F(() => U(f) ? [U(_) / 2, U(_) / 2] : [U(v)[0] / 2, U(v)[1] / 2]);
	var b = {
		get id() {
			return n();
		},
		set id(e) {
			n(e), I();
		},
		get variant() {
			return r();
		},
		set variant(e = Ig.Dots) {
			r(e), I();
		},
		get gap() {
			return i();
		},
		set gap(e = 20) {
			i(e), I();
		},
		get size() {
			return a();
		},
		set size(e) {
			a(e), I();
		},
		get lineWidth() {
			return o();
		},
		set lineWidth(e = 1) {
			o(e), I();
		},
		get bgColor() {
			return s();
		},
		set bgColor(e) {
			s(e), I();
		},
		get patternColor() {
			return c();
		},
		set patternColor(e) {
			c(e), I();
		},
		get patternClass() {
			return l();
		},
		set patternClass(e) {
			l(e), I();
		},
		get class() {
			return u();
		},
		set class(e) {
			u(e), I();
		}
	}, x = Hg();
	let S;
	var C = z(x), w = z(C), T = (e) => {
		{
			let t = /* @__PURE__ */ F(() => U(_) / 2);
			Rg(e, {
				get radius() {
					return U(t);
				},
				get class() {
					return l();
				}
			});
		}
	}, E = (e) => {
		Bg(e, {
			get dimensions() {
				return U(v);
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
		U(f) ? e(T) : e(E, -1);
	}), j(C);
	var D = V(C);
	return j(x), H(() => {
		oa(x, 0, ea([
			"svelte-flow__background",
			"svelte-flow__container",
			u()
		])), S = ca(x, "", S, {
			"--xy-background-color-props": s(),
			"--xy-background-pattern-color-props": c()
		}), Y(C, "id", U(h)), Y(C, "x", U(d).viewport.x % U(g)[0]), Y(C, "y", U(d).viewport.y % U(g)[1]), Y(C, "width", U(g)[0]), Y(C, "height", U(g)[1]), Y(C, "patternTransform", `translate(-${U(y)[0]},-${U(y)[1]})`), Y(D, "fill", `url(#${U(h)})`);
	}), q(e, x), P(b);
}
Z(Ug, {
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
function Wg(e) {
	let t = /* @__PURE__ */ F(uh), n = /* @__PURE__ */ F(() => U(t).nodeLookup), r = /* @__PURE__ */ F(() => U(t).nodes), i = /* @__PURE__ */ F(() => (U(r), U(n).get(e)));
	return { get current() {
		return U(i);
	} };
}
var Gg = /* @__PURE__ */ G("<rect></rect>");
function Kg(e, t) {
	N(t, !0);
	let n = X(t, "id", 7), r = X(t, "x", 7), i = X(t, "y", 7), a = X(t, "width", 7), o = X(t, "height", 7), s = X(t, "borderRadius", 7, 5), c = X(t, "color", 7), l = X(t, "shapeRendering", 7), u = X(t, "strokeColor", 7), d = X(t, "strokeWidth", 7, 2), f = X(t, "selected", 7), p = X(t, "class", 7), m = X(t, "nodeComponent", 7), h = /* @__PURE__ */ F(() => Wg(n())), g = /* @__PURE__ */ F(() => {
		if (!U(h).current) return {
			width: 0,
			height: 0,
			x: 0,
			y: 0
		};
		let { width: e, height: t } = Nf(U(h).current);
		return {
			width: a() ?? e,
			height: o() ?? t,
			x: r() ?? U(h).current.internals.positionAbsolute.x,
			y: i() ?? U(h).current.internals.positionAbsolute.y
		};
	}), _ = /* @__PURE__ */ F(() => U(g).width), v = /* @__PURE__ */ F(() => U(g).height), y = /* @__PURE__ */ F(() => U(g).x), b = /* @__PURE__ */ F(() => U(g).y);
	var x = {
		get id() {
			return n();
		},
		set id(e) {
			n(e), I();
		},
		get x() {
			return r();
		},
		set x(e) {
			r(e), I();
		},
		get y() {
			return i();
		},
		set y(e) {
			i(e), I();
		},
		get width() {
			return a();
		},
		set width(e) {
			a(e), I();
		},
		get height() {
			return o();
		},
		set height(e) {
			o(e), I();
		},
		get borderRadius() {
			return s();
		},
		set borderRadius(e = 5) {
			s(e), I();
		},
		get color() {
			return c();
		},
		set color(e) {
			c(e), I();
		},
		get shapeRendering() {
			return l();
		},
		set shapeRendering(e) {
			l(e), I();
		},
		get strokeColor() {
			return u();
		},
		set strokeColor(e) {
			u(e), I();
		},
		get strokeWidth() {
			return d();
		},
		set strokeWidth(e = 2) {
			d(e), I();
		},
		get selected() {
			return f();
		},
		set selected(e) {
			f(e), I();
		},
		get class() {
			return p();
		},
		set class(e) {
			p(e), I();
		},
		get nodeComponent() {
			return m();
		},
		set nodeComponent(e) {
			m(e), I();
		}
	}, S = K(), C = B(S), w = (e) => {
		let t = /* @__PURE__ */ F(m);
		var r = K();
		Ki(B(r), () => U(t), (e, t) => {
			t(e, {
				get id() {
					return n();
				},
				get x() {
					return U(y);
				},
				get y() {
					return U(b);
				},
				get width() {
					return U(_);
				},
				get height() {
					return U(v);
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
		}), q(e, r);
	}, T = (e) => {
		var t = Gg();
		let n, r;
		H(() => {
			n = oa(t, 0, ea(["svelte-flow__minimap-node", p()]), null, n, { selected: f() }), Y(t, "x", U(y)), Y(t, "y", U(b)), Y(t, "rx", s()), Y(t, "ry", s()), Y(t, "width", U(_)), Y(t, "height", U(v)), Y(t, "shape-rendering", l()), r = ca(t, "", r, {
				fill: c(),
				stroke: u(),
				"stroke-width": d()
			});
		}), q(e, t);
	};
	return J(C, (e) => {
		m() ? e(w) : e(T, -1);
	}), q(e, S), P(x);
}
Z(Kg, {
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
function qg(e, t) {
	let n = Zp({
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
var Jg = (e) => e instanceof Function ? e : () => e, Yg = /* @__PURE__ */ new Set([
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
]), Xg = /* @__PURE__ */ G("<title> </title>"), Zg = /* @__PURE__ */ G("<svg class=\"svelte-flow__minimap-svg\" role=\"img\"><!><!><path class=\"svelte-flow__minimap-mask\" fill-rule=\"evenodd\" pointer-events=\"none\"></path></svg>"), Qg = /* @__PURE__ */ W("<svelte-css-wrapper style=\"display: contents\"><!></svelte-css-wrapper>", 1);
function $g(e, t) {
	N(t, !0);
	let n = X(t, "position", 7, "bottom-right"), r = X(t, "ariaLabel", 7), i = X(t, "nodeStrokeColor", 7, "transparent"), a = X(t, "nodeColor", 7), o = X(t, "nodeClass", 7, ""), s = X(t, "nodeBorderRadius", 7, 5), c = X(t, "nodeStrokeWidth", 7, 2), l = X(t, "nodeComponent", 7), u = X(t, "bgColor", 7), d = X(t, "maskColor", 7), f = X(t, "maskStrokeColor", 7), p = X(t, "maskStrokeWidth", 7), m = X(t, "width", 7, 200), h = X(t, "height", 7, 150), g = X(t, "pannable", 7, !0), _ = X(t, "zoomable", 7, !0), v = X(t, "inversePan", 7), y = X(t, "zoomStep", 7), b = X(t, "class", 7), x = /* @__PURE__ */ Va(t, Yg), S = /* @__PURE__ */ F(uh), C = /* @__PURE__ */ F(() => U(S).ariaLabelConfig), w = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision", T = /* @__PURE__ */ F(() => `svelte-flow__minimap-desc-${U(S).flowId}`), E = /* @__PURE__ */ F(() => ({
		x: -U(S).viewport.x / U(S).viewport.zoom,
		y: -U(S).viewport.y / U(S).viewport.zoom,
		width: U(S).width / U(S).viewport.zoom,
		height: U(S).height / U(S).viewport.zoom
	})), D = /* @__PURE__ */ F(() => vf(ef(U(S).nodeLookup, { filter: (e) => !e.hidden }), U(E))), ee = /* @__PURE__ */ F(() => U(D).width / m()), O = /* @__PURE__ */ F(() => U(D).height / h()), te = /* @__PURE__ */ F(() => Math.max(U(ee), U(O))), ne = /* @__PURE__ */ F(() => U(te) * m()), re = /* @__PURE__ */ F(() => U(te) * h()), k = /* @__PURE__ */ F(() => 5 * U(te)), ie = /* @__PURE__ */ F(() => U(D).x - (U(ne) - U(D).width) / 2 - U(k)), ae = /* @__PURE__ */ F(() => U(D).y - (U(re) - U(D).height) / 2 - U(k)), oe = /* @__PURE__ */ F(() => U(ne) + U(k) * 2), se = /* @__PURE__ */ F(() => U(re) + U(k) * 2), ce = () => U(te);
	var le = {
		get position() {
			return n();
		},
		set position(e = "bottom-right") {
			n(e), I();
		},
		get ariaLabel() {
			return r();
		},
		set ariaLabel(e) {
			r(e), I();
		},
		get nodeStrokeColor() {
			return i();
		},
		set nodeStrokeColor(e = "transparent") {
			i(e), I();
		},
		get nodeColor() {
			return a();
		},
		set nodeColor(e) {
			a(e), I();
		},
		get nodeClass() {
			return o();
		},
		set nodeClass(e = "") {
			o(e), I();
		},
		get nodeBorderRadius() {
			return s();
		},
		set nodeBorderRadius(e = 5) {
			s(e), I();
		},
		get nodeStrokeWidth() {
			return c();
		},
		set nodeStrokeWidth(e = 2) {
			c(e), I();
		},
		get nodeComponent() {
			return l();
		},
		set nodeComponent(e) {
			l(e), I();
		},
		get bgColor() {
			return u();
		},
		set bgColor(e) {
			u(e), I();
		},
		get maskColor() {
			return d();
		},
		set maskColor(e) {
			d(e), I();
		},
		get maskStrokeColor() {
			return f();
		},
		set maskStrokeColor(e) {
			f(e), I();
		},
		get maskStrokeWidth() {
			return p();
		},
		set maskStrokeWidth(e) {
			p(e), I();
		},
		get width() {
			return m();
		},
		set width(e = 200) {
			m(e), I();
		},
		get height() {
			return h();
		},
		set height(e = 150) {
			h(e), I();
		},
		get pannable() {
			return g();
		},
		set pannable(e = !0) {
			g(e), I();
		},
		get zoomable() {
			return _();
		},
		set zoomable(e = !0) {
			_(e), I();
		},
		get inversePan() {
			return v();
		},
		set inversePan(e) {
			v(e), I();
		},
		get zoomStep() {
			return y();
		},
		set zoomStep(e) {
			y(e), I();
		},
		get class() {
			return b();
		},
		set class(e) {
			b(e), I();
		}
	}, ue = Qg(), de = B(ue);
	{
		let e = /* @__PURE__ */ F(() => ["svelte-flow__minimap", b()]);
		Pi(de, () => ({ "--xy-minimap-background-color-props": u() })), sg(de.lastChild, Ga({
			get position() {
				return n();
			},
			get class() {
				return U(e);
			},
			"data-testid": "svelte-flow__minimap"
		}, () => x, {
			children: (e, t) => {
				var n = K(), u = B(n), b = (e) => {
					var t = Zg();
					let n;
					var u = z(t), b = (e) => {
						var t = Xg(), n = z(t, !0);
						j(t), H(() => {
							Y(t, "id", U(T)), yi(n, r() ?? U(C)["minimap.ariaLabel"]);
						}), q(e, t);
					};
					J(u, (e) => {
						(r() ?? U(C)["minimap.ariaLabel"]) && e(b);
					});
					var x = V(u);
					zi(x, 17, () => U(S).nodes, (e) => e.id, (e, t) => {
						let n = /* @__PURE__ */ F(() => U(S).nodeLookup.get(U(t).id));
						var r = K(), u = B(r), d = (e) => {
							{
								let r = /* @__PURE__ */ F(() => a() === void 0 ? void 0 : Jg(a())(U(t))), u = /* @__PURE__ */ F(() => Jg(i())(U(t))), d = /* @__PURE__ */ F(() => Jg(o())(U(t)));
								Kg(e, {
									get id() {
										return U(n).id;
									},
									get selected() {
										return U(n).selected;
									},
									get nodeComponent() {
										return l();
									},
									get color() {
										return U(r);
									},
									get borderRadius() {
										return s();
									},
									get strokeColor() {
										return U(u);
									},
									get strokeWidth() {
										return c();
									},
									get shapeRendering() {
										return w;
									},
									get class() {
										return U(d);
									}
								});
							}
						}, f = /* @__PURE__ */ F(() => U(n) && Pf(U(n)) && !U(n).hidden);
						J(u, (e) => {
							U(f) && e(d);
						}), q(e, r);
					});
					var D = V(x);
					j(t), Xi(t, (e, t) => qg?.(e, t), () => ({
						store: U(S),
						panZoom: U(S).panZoom,
						getViewScale: ce,
						translateExtent: U(S).translateExtent,
						width: U(S).width,
						height: U(S).height,
						inversePan: v(),
						zoomStep: y(),
						pannable: g(),
						zoomable: _()
					})), H(() => {
						Y(t, "width", m()), Y(t, "height", h()), Y(t, "viewBox", `${U(ie) ?? ""} ${U(ae) ?? ""} ${U(oe) ?? ""} ${U(se) ?? ""}`), Y(t, "aria-labelledby", U(T)), n = ca(t, "", n, {
							"--xy-minimap-mask-background-color-props": d(),
							"--xy-minimap-mask-stroke-color-props": f(),
							"--xy-minimap-mask-stroke-width-props": p() ? p() * U(te) : void 0
						}), Y(D, "d", `M${U(ie) - U(k)},${U(ae) - U(k)}h${U(oe) + U(k) * 2}v${U(se) + U(k) * 2}h${-U(oe) - U(k) * 2}z
      M${U(E).x ?? ""},${U(E).y ?? ""}h${U(E).width ?? ""}v${U(E).height ?? ""}h${-U(E).width}z`);
					}), q(e, t);
				};
				J(u, (e) => {
					U(S).panZoom && e(b);
				}), q(e, n);
			},
			$$slots: { default: !0 }
		})), j(de);
	}
	return q(e, ue), P(le);
}
Z($g, {
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
var e_ = /* @__PURE__ */ new Set([
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
]), t_ = /* @__PURE__ */ W("<div><!></div>");
function n_(e, t) {
	N(t, !0);
	let n = X(t, "nodeId", 7), r = X(t, "position", 23, () => Q.Top), i = X(t, "align", 7, "center"), a = X(t, "offset", 7, 10), o = X(t, "isVisible", 7), s = X(t, "children", 7), c = /* @__PURE__ */ Va(t, e_), l = uh(), { getNodesBounds: u } = $h(), d = gm(), f = /* @__PURE__ */ F(() => (l.nodes, (Array.isArray(n()) ? n() : [n() ?? d]).reduce((e, t) => {
		if (!t) throw Error("Either pass a nodeId or use within a Custom Node component");
		let n = l.nodeLookup.get(t);
		return n && e.push(n), e;
	}, []))), p = /* @__PURE__ */ F(() => {
		let e = u(U(f));
		return e ? hp(e, l.viewport, r(), a(), i()) : "";
	}), m = /* @__PURE__ */ F(() => U(f).length === 0 ? 1 : Math.max(...U(f).map((e) => (e.internals.z || 5) + 1))), h = /* @__PURE__ */ F(() => l.nodes.filter((e) => e.selected).length), g = /* @__PURE__ */ F(() => typeof o() == "boolean" ? o() : U(f).length === 1 && U(f)[0].selected && U(h) === 1);
	var _ = {
		get nodeId() {
			return n();
		},
		set nodeId(e) {
			n(e), I();
		},
		get position() {
			return r();
		},
		set position(e = Q.Top) {
			r(e), I();
		},
		get align() {
			return i();
		},
		set align(e = "center") {
			i(e), I();
		},
		get offset() {
			return a();
		},
		set offset(e = 10) {
			a(e), I();
		},
		get isVisible() {
			return o();
		},
		set isVisible(e) {
			o(e), I();
		},
		get children() {
			return s();
		},
		set children(e) {
			s(e), I();
		}
	}, v = K(), y = B(v), b = (e) => {
		var t = t_();
		Ea(t, (e, t) => ({
			class: "svelte-flow__node-toolbar",
			"data-id": e,
			...c,
			[pa]: t
		}), [() => U(f).reduce((e, t) => `${e}${t.id} `, "").trim(), () => ({
			display: Pm().value ? "none" : void 0,
			position: "absolute",
			transform: U(p),
			"z-index": U(m)
		})]), Di(z(t), () => s() ?? T), j(t), Xi(t, (e, t) => Nm?.(e, t), () => "root"), q(e, t);
	};
	return J(y, (e) => {
		l.domNode && U(g) && U(f) && e(b);
	}), q(e, v), P(_);
}
Z(n_, {
	nodeId: {},
	position: {},
	align: {},
	offset: {},
	isVisible: {},
	children: {}
}, [], [], { mode: "open" });
function r_(e) {
	let t = /* @__PURE__ */ F(uh), n = /* @__PURE__ */ F(() => U(t).nodes), r = /* @__PURE__ */ F(() => U(t).nodeLookup), i = [], a = !0, o = /* @__PURE__ */ F(() => {
		U(n);
		let t = [], o = Array.isArray(e), s = o ? e : [e];
		for (let e of s) {
			let n = U(r).get(e)?.internals.userNode;
			n && t.push({
				id: n.id,
				type: n.type,
				data: n.data
			});
		}
		return (!Pp(t, i) || a) && (i = t, a = !1), o ? i : i[0] ?? null;
	});
	return { get current() {
		return U(o);
	} };
}
var i_ = "tinyflow-component", a_ = [
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
], o_ = [
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
], s_ = [
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
], c_ = [
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
], l_ = [{
	label: "单选",
	value: "radio"
}, {
	label: "多选",
	value: "checkbox"
}], u_ = [{
	label: "单选",
	value: "radio"
}, {
	label: "多选",
	value: "checkbox"
}], d_ = typeof window < "u" ? window : void 0;
typeof window < "u" && window.document, typeof window < "u" && window.navigator, typeof window < "u" && window.location;
function f_(e) {
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
		let { window: t = d_, document: n = t?.document } = e;
		t !== void 0 && (this.#e = n, this.#t = Pt((e) => {
			let n = Xr(t, "focusin", e), r = Xr(t, "focusout", e);
			return () => {
				n(), r();
			};
		}));
	}
	get current() {
		return this.#t?.(), this.#e ? f_(this.#e) : null;
	}
}();
function p_(e, t) {
	switch (e) {
		case "post":
			Kn(t);
			break;
		case "pre":
			Jn(t);
			break;
	}
}
function m_(e, t, n, r = {}) {
	let { lazy: i = !1 } = r, a = !i, o = Array.isArray(e) ? [] : void 0;
	p_(t, () => {
		let t = Array.isArray(e) ? e.map((e) => e()) : e();
		if (!a) {
			a = !0, o = t;
			return;
		}
		let r = Ur(() => n(t, o));
		return o = t, r;
	});
}
function h_(e, t, n) {
	let r = Yn(() => {
		let i = !1;
		m_(e, t, (e, t) => {
			if (i) {
				r();
				return;
			}
			let a = n(e, t);
			return i = !0, a;
		}, { lazy: !0 });
	});
	Kn(() => r);
}
function g_(e, t, n) {
	m_(e, "post", t, n);
}
function __(e, t, n) {
	m_(e, "pre", t, n);
}
g_.pre = __;
function v_(e, t) {
	h_(e, "post", t);
}
function y_(e, t) {
	h_(e, "pre", t);
}
v_.pre = y_;
function b_(e, t) {
	switch (e) {
		case "local": return t.localStorage;
		case "session": return t.sessionStorage;
	}
}
var x_ = class {
	#e;
	#t;
	#n;
	#r;
	#i;
	#a = /* @__PURE__ */ L(0);
	constructor(e, t, n = {}) {
		let { storage: r = "local", serializer: i = {
			serialize: JSON.stringify,
			deserialize: JSON.parse
		}, syncTabs: a = !0, window: o = d_ } = n;
		if (this.#e = t, this.#t = e, this.#n = i, o === void 0) return;
		let s = b_(r, o);
		this.#r = s;
		let c = s.getItem(e);
		c === null ? this.#c(t) : this.#e = this.#s(c), a && r === "local" && (this.#i = Pt(() => Xr(o, "storage", this.#o)));
	}
	get current() {
		this.#i?.(), U(this.#a);
		let e = this.#s(this.#r?.getItem(this.#t)) ?? this.#e, t = /* @__PURE__ */ new WeakMap(), n = (r) => {
			if (r === null || r?.constructor.name === "Date" || typeof r != "object") return r;
			let i = t.get(r);
			return i || (i = new Proxy(r, {
				get: (e, t) => (U(this.#a), n(Reflect.get(e, t))),
				set: (t, n, r) => (R(this.#a, U(this.#a) + 1), Reflect.set(t, n, r), this.#c(e), !0)
			}), t.set(r, i)), i;
		};
		return n(e);
	}
	set current(e) {
		this.#c(e), R(this.#a, U(this.#a) + 1);
	}
	#o = (e) => {
		e.key !== this.#t || e.newValue === null || (this.#e = this.#s(e.newValue), R(this.#a, U(this.#a) + 1));
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
function S_(e, t) {
	let n, r = null;
	return (...i) => new Promise((a) => {
		r && r(void 0), r = a, clearTimeout(n), n = setTimeout(async () => {
			let t = await e(...i);
			r &&= (r(t), null);
		}, t);
	});
}
function C_(e, t) {
	let n = 0, r = null;
	return (...i) => {
		let a = Date.now();
		return n && a - n < t ? r ?? Promise.resolve(void 0) : (n = a, r = e(...i), r);
	};
}
function w_(e, t, n = {}, r) {
	let { lazy: i = !1, once: a = !1, initialValue: o, debounce: s, throttle: c } = n, l = /* @__PURE__ */ L(En(o)), u = /* @__PURE__ */ L(!1), d = /* @__PURE__ */ L(void 0), f = /* @__PURE__ */ L(En([])), p = () => {
		U(f).forEach((e) => e()), R(f, [], !0);
	}, m = (e) => {
		R(f, [...U(f), e], !0);
	}, h = async (e, n, r = !1) => {
		try {
			R(u, !0), R(d, void 0), p();
			let i = new AbortController();
			m(() => i.abort());
			let a = await t(e, n, {
				data: U(l),
				refetching: r,
				onCleanup: m,
				signal: i.signal
			});
			return R(l, a, !0), a;
		} catch (e) {
			e instanceof DOMException && e.name === "AbortError" || R(d, e, !0);
			return;
		} finally {
			R(u, !1);
		}
	}, g = s ? S_(h, s) : c ? C_(h, c) : h, _ = Array.isArray(e) ? e : [e], v;
	return r((t, n) => {
		a && v || v && JSON.stringify(t) === JSON.stringify(v) || (v = t, g(Array.isArray(e) ? t : t[0], Array.isArray(e) ? n : n?.[0]));
	}, { lazy: i }), {
		get current() {
			return U(l);
		},
		get loading() {
			return U(u);
		},
		get error() {
			return U(d);
		},
		mutate: (e) => {
			R(l, e, !0);
		},
		refetch: (t) => {
			let n = _.map((e) => e());
			return g(Array.isArray(e) ? n : n[0], Array.isArray(e) ? n : n[0], t ?? !0);
		}
	};
}
function T_(e, t, n) {
	return w_(e, t, n, (t, n) => {
		let r = Array.isArray(e) ? e : [e];
		g_(() => r.map((e) => e()), (e, n) => {
			t(e, n ?? []);
		}, n);
	});
}
function E_(e, t, n) {
	return w_(e, t, n, (t, n) => {
		let r = Array.isArray(e) ? e : [e];
		g_.pre(() => r.map((e) => e()), (e, n) => {
			t(e, n ?? []);
		}, n);
	});
}
T_.pre = E_;
function D_(e) {
	return e.filter((e) => e.length > 0);
}
var O_ = {
	getItem: (e) => null,
	setItem: (e, t) => {}
}, k_ = typeof document < "u";
function A_(e) {
	return typeof e == "function";
}
function j_(e) {
	return typeof e == "object" && !!e;
}
var M_ = Symbol("box"), N_ = Symbol("is-writable");
function P_(e) {
	return j_(e) && M_ in e;
}
function F_(e) {
	return I_.isBox(e) && N_ in e;
}
function I_(e) {
	let t = /* @__PURE__ */ L(En(e));
	return {
		[M_]: !0,
		[N_]: !0,
		get current() {
			return U(t);
		},
		set current(e) {
			R(t, e, !0);
		}
	};
}
function L_(e, t) {
	let n = /* @__PURE__ */ F(e);
	return t ? {
		[M_]: !0,
		[N_]: !0,
		get current() {
			return U(n);
		},
		set current(e) {
			t(e);
		}
	} : {
		[M_]: !0,
		get current() {
			return e();
		}
	};
}
function R_(e) {
	return I_.isBox(e) ? e : A_(e) ? I_.with(e) : I_(e);
}
function z_(e) {
	return Object.entries(e).reduce((e, [t, n]) => I_.isBox(n) ? (I_.isWritableBox(n) ? Object.defineProperty(e, t, {
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
function B_(e) {
	return I_.isWritableBox(e) ? {
		[M_]: !0,
		get current() {
			return e.current;
		}
	} : e;
}
I_.from = R_, I_.with = L_, I_.flatten = z_, I_.readonly = B_, I_.isBox = P_, I_.isWritableBox = F_;
var V_ = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, H_ = /\n/g, U_ = /^\s*/, W_ = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, G_ = /^:\s*/, K_ = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, q_ = /^[;\s]*/, J_ = /^\s+|\s+$/g, Y_ = "\n", X_ = "/", Z_ = "*", Q_ = "", $_ = "comment", ev = "declaration";
function tv(e, t) {
	if (typeof e != "string") throw TypeError("First argument must be a string");
	if (!e) return [];
	t ||= {};
	var n = 1, r = 1;
	function i(e) {
		var t = e.match(H_);
		t && (n += t.length);
		var i = e.lastIndexOf(Y_);
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
		c(U_);
	}
	function u(e) {
		var t;
		for (e ||= []; t = d();) t !== !1 && e.push(t);
		return e;
	}
	function d() {
		var t = a();
		if (!(X_ != e.charAt(0) || Z_ != e.charAt(1))) {
			for (var n = 2; Q_ != e.charAt(n) && (Z_ != e.charAt(n) || X_ != e.charAt(n + 1));) ++n;
			if (n += 2, Q_ === e.charAt(n - 1)) return s("End of comment missing");
			var o = e.slice(2, n - 2);
			return r += 2, i(o), e = e.slice(n), r += 2, t({
				type: $_,
				comment: o
			});
		}
	}
	function f() {
		var e = a(), t = c(W_);
		if (t) {
			if (d(), !c(G_)) return s("property missing ':'");
			var n = c(K_), r = e({
				type: ev,
				property: nv(t[0].replace(V_, Q_)),
				value: n ? nv(n[0].replace(V_, Q_)) : Q_
			});
			return c(q_), r;
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
function nv(e) {
	return e ? e.replace(J_, Q_) : Q_;
}
function rv(e, t) {
	let n = null;
	if (!e || typeof e != "string") return n;
	let r = tv(e), i = typeof t == "function";
	return r.forEach((e) => {
		if (e.type !== "declaration") return;
		let { property: r, value: a } = e;
		i ? t(r, a, e) : a && (n ||= {}, n[r] = a);
	}), n;
}
function iv(e, t) {
	let n = RegExp(e, "g");
	return (e) => {
		if (typeof e != "string") throw TypeError(`expected an argument of type string, but got ${typeof e}`);
		return e.match(n) ? e.replace(n, t) : e;
	};
}
var av = iv(/[A-Z]/, (e) => `-${e.toLowerCase()}`);
function ov(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError(`expected an argument of type object, but got ${typeof e}`);
	return Object.keys(e).map((t) => `${av(t)}: ${e[t]};`).join("\n");
}
function sv(e = {}) {
	return ov(e).replace("\n", " ");
}
sv({
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
var cv = typeof window < "u" ? window : void 0;
typeof window < "u" && window.document, typeof window < "u" && window.navigator, typeof window < "u" && window.location;
function lv(e) {
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
		let { window: t = cv, document: n = t?.document } = e;
		t !== void 0 && (this.#e = n, this.#t = Pt((e) => {
			let n = Xr(t, "focusin", e), r = Xr(t, "focusout", e);
			return () => {
				n(), r();
			};
		}));
	}
	get current() {
		return this.#t?.(), this.#e ? lv(this.#e) : null;
	}
}();
function uv(e, t) {
	switch (e) {
		case "post":
			Kn(t);
			break;
		case "pre":
			Jn(t);
			break;
	}
}
function dv(e, t, n, r = {}) {
	let { lazy: i = !1 } = r, a = !i, o = Array.isArray(e) ? [] : void 0;
	uv(t, () => {
		let t = Array.isArray(e) ? e.map((e) => e()) : e();
		if (!a) {
			a = !0, o = t;
			return;
		}
		let r = Ur(() => n(t, o));
		return o = t, r;
	});
}
function fv(e, t, n) {
	let r = Yn(() => {
		let i = !1;
		dv(e, t, (e, t) => {
			if (i) {
				r();
				return;
			}
			let a = n(e, t);
			return i = !0, a;
		}, { lazy: !0 });
	});
	Kn(() => r);
}
function pv(e, t, n) {
	dv(e, "post", t, n);
}
function mv(e, t, n) {
	dv(e, "pre", t, n);
}
pv.pre = mv;
function hv(e, t) {
	fv(e, "post", t);
}
function gv(e, t) {
	fv(e, "pre", t);
}
hv.pre = gv;
var _v = I_("mode-watcher-mode"), vv = I_("mode-watcher-theme"), yv = [
	"dark",
	"light",
	"system"
];
function bv(e) {
	return typeof e == "string" && yv.includes(e);
}
var xv = class {
	#e = "system";
	#t = k_ ? localStorage : O_;
	#n = this.#t.getItem(_v.current);
	#r = bv(this.#n) ? this.#n : this.#e;
	#i = /* @__PURE__ */ L(En(this.#a()));
	#a(e = this.#r) {
		return new x_(_v.current, e, { serializer: {
			serialize: (e) => e,
			deserialize: (e) => bv(e) ? e : this.#e
		} });
	}
	constructor() {
		Yn(() => g_.pre(() => _v.current, (e, t) => {
			let n = U(this.#i).current;
			R(this.#i, this.#a(n), !0), t && localStorage.removeItem(t);
		}));
	}
	get current() {
		return U(this.#i).current;
	}
	set current(e) {
		U(this.#i).current = e;
	}
}, Sv = class {
	#e = void 0;
	#t = !0;
	#n = /* @__PURE__ */ L(En(this.#e));
	#r = typeof window < "u" && typeof window.matchMedia == "function" ? new th("prefers-color-scheme: light") : { current: !1 };
	query() {
		k_ && R(this.#n, this.#r.current ? "light" : "dark", !0);
	}
	tracking(e) {
		this.#t = e;
	}
	constructor() {
		Yn(() => {
			Jn(() => {
				this.#t && this.query();
			});
		}), this.query = this.query.bind(this), this.tracking = this.tracking.bind(this);
	}
	get current() {
		return U(this.#n);
	}
}, Cv = new xv(), wv = new Sv(), Tv = new class {
	#e = k_ ? localStorage : O_;
	#t = this.#e.getItem(vv.current);
	#n = this.#t === null || this.#t === void 0 ? "" : this.#t;
	#r = /* @__PURE__ */ L(En(this.#i()));
	#i(e = this.#n) {
		return new x_(vv.current, e, { serializer: {
			serialize: (e) => typeof e == "string" ? e : "",
			deserialize: (e) => e
		} });
	}
	constructor() {
		Yn(() => g_.pre(() => vv.current, (e, t) => {
			let n = U(this.#r).current;
			R(this.#r, this.#i(n), !0), t && localStorage.removeItem(t);
		}));
	}
	get current() {
		return U(this.#r).current;
	}
	set current(e) {
		U(this.#r).current = e;
	}
}(), Ev, Dv, Ov = !1, kv = null;
function Av() {
	return kv || (kv = document.createElement("style"), kv.appendChild(document.createTextNode("* {\n		-webkit-transition: none !important;\n		-moz-transition: none !important;\n		-o-transition: none !important;\n		-ms-transition: none !important;\n		transition: none !important;\n	}")), kv);
}
function jv(e, t = !1) {
	if (typeof document > "u") return;
	if (!Ov) {
		Ov = !0, e();
		return;
	}
	if (typeof window < "u" && window.__vitest_worker__) {
		e();
		return;
	}
	clearTimeout(Ev), clearTimeout(Dv);
	let n = Av(), r = () => document.head.appendChild(n), i = () => {
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
	r(), Ev = window.setTimeout(() => {
		e(), Dv = window.setTimeout(i, 16);
	}, 16);
}
var Mv = I_(void 0), Nv = I_(!0), Pv = I_(!1), Fv = I_([]), Iv = I_([]);
function Lv() {
	let e = /* @__PURE__ */ F(() => {
		if (!k_) return;
		let e = Cv.current === "system" ? wv.current : Cv.current, t = D_(Fv.current), n = D_(Iv.current);
		function r() {
			let r = document.documentElement, i = document.querySelector("meta[name=\"theme-color\"]");
			e === "light" ? (t.length && r.classList.remove(...t), n.length && r.classList.add(...n), r.style.colorScheme = "light", i && Mv.current && i.setAttribute("content", Mv.current.light)) : (n.length && r.classList.remove(...n), t.length && r.classList.add(...t), r.style.colorScheme = "dark", i && Mv.current && i.setAttribute("content", Mv.current.dark));
		}
		return Nv.current ? jv(r, Pv.current) : r(), e;
	});
	return { get current() {
		return U(e);
	} };
}
function Rv() {
	let e = /* @__PURE__ */ F(() => {
		if (Tv.current, !k_) return;
		function e() {
			document.documentElement.setAttribute("data-theme", Tv.current);
		}
		return Nv.current ? jv(e, Ur(() => Pv.current)) : e(), Tv.current;
	});
	return { get current() {
		return U(e);
	} };
}
var zv = Lv(), Bv = Rv();
function Vv(e) {
	Cv.current = e;
}
function Hv(e) {
	Tv.current = e;
}
function Uv(e) {
	return e;
}
function Wv({ defaultMode: e = "system", themeColors: t, darkClassNames: n = ["dark"], lightClassNames: r = [], defaultTheme: i = "", modeStorageKey: a = "mode-watcher-mode", themeStorageKey: o = "mode-watcher-theme" }) {
	let s = document.documentElement, c = localStorage.getItem(a) ?? e, l = localStorage.getItem(o) ?? i, u = c === "light" || c === "system" && window.matchMedia("(prefers-color-scheme: light)").matches;
	if (u ? (n.length && s.classList.remove(...n.filter(Boolean)), r.length && s.classList.add(...r.filter(Boolean))) : (r.length && s.classList.remove(...r.filter(Boolean)), n.length && s.classList.add(...n.filter(Boolean))), s.style.colorScheme = u ? "light" : "dark", t) {
		let e = document.querySelector("meta[name=\"theme-color\"]");
		e && e.setAttribute("content", c === "light" ? t.light : t.dark);
	}
	l && (s.setAttribute("data-theme", l), localStorage.setItem(o, l)), localStorage.setItem(a, c);
}
var Gv = /* @__PURE__ */ W("<meta name=\"theme-color\"/>");
function Kv(e, t) {
	N(t, !0);
	let n = X(t, "themeColors", 7);
	var r = {
		get themeColors() {
			return n();
		},
		set themeColors(e) {
			n(e), I();
		}
	}, i = K(), a = B(i), o = (e) => {
		var t = Gv();
		H(() => Y(t, "content", n().dark)), q(e, t);
	};
	return J(a, (e) => {
		n() && e(o);
	}), q(e, i), P(r);
}
Z(Kv, { themeColors: {} }, [], [], { mode: "open" });
var qv = /* @__PURE__ */ W("<meta name=\"theme-color\"/>"), Jv = /* @__PURE__ */ W("<!> <!>", 1);
function Yv(e, t) {
	N(t, !0);
	let n = X(t, "trueNonce", 7, ""), r = X(t, "initConfig", 7), i = X(t, "themeColors", 7);
	return Ji("rkz1zj", (e) => {
		var t = Jv(), a = B(t), o = (e) => {
			var t = qv();
			H(() => Y(t, "content", i().dark)), q(e, t);
		};
		J(a, (e) => {
			i() && e(o);
		}), Gi(V(a, 2), () => `<script${n() ? ` nonce=${n()}` : ""}>(` + Wv.toString() + ")(" + JSON.stringify(r()) + ");<\/script>"), q(e, t);
	}), P({
		get trueNonce() {
			return n();
		},
		set trueNonce(e = "") {
			n(e), I();
		},
		get initConfig() {
			return r();
		},
		set initConfig(e) {
			r(e), I();
		},
		get themeColors() {
			return i();
		},
		set themeColors(e) {
			i(e), I();
		}
	});
}
Z(Yv, {
	trueNonce: {},
	initConfig: {},
	themeColors: {}
}, [], [], { mode: "open" });
function Xv(e, t) {
	N(t, !0);
	let n = X(t, "track", 7, !0), r = X(t, "defaultMode", 7, "system"), i = X(t, "themeColors", 7), a = X(t, "disableTransitions", 7, !0), o = X(t, "darkClassNames", 23, () => ["dark"]), s = X(t, "lightClassNames", 23, () => []), c = X(t, "defaultTheme", 7, ""), l = X(t, "nonce", 7, ""), u = X(t, "themeStorageKey", 7, "mode-watcher-theme"), d = X(t, "modeStorageKey", 7, "mode-watcher-mode"), f = X(t, "disableHeadScriptInjection", 7, !1), p = X(t, "synchronousModeChanges", 7, !1);
	_v.current = d(), vv.current = u(), Fv.current = o(), Iv.current = s(), Nv.current = a(), Mv.current = i(), Pv.current = p(), Jn(() => {
		Pv.current = p();
	}), Jn(() => {
		Nv.current = a();
	}), Jn(() => {
		Mv.current = i();
	}), Jn(() => {
		Fv.current = o();
	}), Jn(() => {
		Iv.current = s();
	}), Jn(() => {
		_v.current = d();
	}), Jn(() => {
		vv.current = u();
	}), Jn(() => {
		zv.current, _v.current, vv.current, Bv.current;
	}), Oi(() => {
		wv.tracking(n()), wv.query();
		let e = localStorage.getItem(_v.current);
		Vv(bv(e) ? e : r()), Hv(localStorage.getItem(vv.current) || c());
	});
	let m = Uv({
		defaultMode: r(),
		themeColors: i(),
		darkClassNames: o(),
		lightClassNames: s(),
		defaultTheme: c(),
		modeStorageKey: d(),
		themeStorageKey: u()
	}), h = /* @__PURE__ */ F(() => typeof window > "u" ? l() : "");
	var g = {
		get track() {
			return n();
		},
		set track(e = !0) {
			n(e), I();
		},
		get defaultMode() {
			return r();
		},
		set defaultMode(e = "system") {
			r(e), I();
		},
		get themeColors() {
			return i();
		},
		set themeColors(e) {
			i(e), I();
		},
		get disableTransitions() {
			return a();
		},
		set disableTransitions(e = !0) {
			a(e), I();
		},
		get darkClassNames() {
			return o();
		},
		set darkClassNames(e = ["dark"]) {
			o(e), I();
		},
		get lightClassNames() {
			return s();
		},
		set lightClassNames(e = []) {
			s(e), I();
		},
		get defaultTheme() {
			return c();
		},
		set defaultTheme(e = "") {
			c(e), I();
		},
		get nonce() {
			return l();
		},
		set nonce(e = "") {
			l(e), I();
		},
		get themeStorageKey() {
			return u();
		},
		set themeStorageKey(e = "mode-watcher-theme") {
			u(e), I();
		},
		get modeStorageKey() {
			return d();
		},
		set modeStorageKey(e = "mode-watcher-mode") {
			d(e), I();
		},
		get disableHeadScriptInjection() {
			return f();
		},
		set disableHeadScriptInjection(e = !1) {
			f(e), I();
		},
		get synchronousModeChanges() {
			return p();
		},
		set synchronousModeChanges(e = !1) {
			p(e), I();
		}
	}, _ = K(), v = B(_), y = (e) => {
		Kv(e, { get themeColors() {
			return Mv.current;
		} });
	}, b = (e) => {
		Yv(e, {
			get trueNonce() {
				return U(h);
			},
			get initConfig() {
				return m;
			},
			get themeColors() {
				return Mv.current;
			}
		});
	};
	return J(v, (e) => {
		f() ? e(y) : e(b, -1);
	}), q(e, _), P(g);
}
Z(Xv, {
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
var Zv = class {
	options;
	rootEl;
	svelteFlowInstance;
	constructor(e) {
		if (typeof e.element != "string" && !(e.element instanceof Element)) throw Error("element must be a string or Element");
		(!e.defaultTheme || e.defaultTheme === "system") && (e.defaultTheme = wv.current), this._setOptions(e), this._init();
	}
	_init() {
		if (typeof this.options.element == "string") {
			if (this.rootEl = document.querySelector(this.options.element), !this.rootEl) throw Error(`element not found by document.querySelector('${this.options.element}')`);
		} else if (this.options.element instanceof Element) this.rootEl = this.options.element;
		else throw Error("element must be a string or Element");
		let e = document.createElement(i_);
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
		let t = document.createElement(i_);
		t.style.display = "block", t.style.width = "100%", t.style.height = "100%", t.classList.add(...this.options.defaultTheme === "dark" ? ["tf-root", "dark"] : ["tf-root"]), t.options = this.options, t.onInit = (e) => {
			this.svelteFlowInstance = e;
		}, this.destroy(), this.rootEl.appendChild(t);
	}
	setTheme(e) {
		e === "system" ? this.options.defaultTheme = wv.current : this.options.defaultTheme = e, this.destroy(), this._init();
	}
	destroy() {
		for (; this.rootEl.firstChild;) this.rootEl.removeChild(this.rootEl.firstChild);
	}
}, Qv = (() => {
	let e = /* @__PURE__ */ L([]), t = /* @__PURE__ */ L([]), n = /* @__PURE__ */ L({
		x: 250,
		y: 100,
		zoom: 1
	});
	return {
		init: (n, r) => {
			R(e, n), R(t, r);
		},
		getNodes: () => U(e),
		setNodes: (t) => {
			R(e, t);
		},
		getEdges: () => U(t),
		setEdges: (e) => {
			R(t, e);
		},
		getViewport: () => U(n),
		setViewport: (e) => {
			R(n, e);
		},
		getNode: (t) => U(e).find((e) => e.id === t),
		addNode: (t) => {
			R(e, [...U(e), t]);
		},
		removeNode: (t) => {
			R(e, U(e).filter((e) => e.id !== t));
		},
		updateNode: (t, n) => {
			R(e, U(e).map((e) => e.id === t ? {
				...e,
				...n
			} : e));
		},
		updateNodes: (t) => {
			R(e, t(U(e)));
		},
		updateNodeData: (t, n) => {
			R(e, U(e).map((e) => e.id === t ? {
				...e,
				data: {
					...e.data,
					...n
				}
			} : e));
		},
		selectNodeOnly: (t) => {
			R(e, U(e).map((e) => e.id === t ? {
				...e,
				selected: !0
			} : {
				...e,
				selected: !1
			}));
		},
		getEdge: (e) => U(t).find((t) => t.id === e),
		addEdge: (e) => {
			R(t, [...U(t), e]);
		},
		removeEdge: (e) => {
			R(t, U(t).filter((t) => t.id !== e));
		},
		updateEdge: (e, n) => {
			R(t, U(t).map((t) => t.id === e ? {
				...t,
				...n
			} : t));
		},
		updateEdges: (e) => {
			R(t, e(U(t)));
		},
		updateEdgeData: (e, n) => {
			R(t, U(t).map((t) => t.id === e ? {
				...t,
				data: {
					...t.data,
					...n
				}
			} : t));
		}
	};
})();
function $v(...e) {
	return $i(e);
}
var ey = {
	default: "tf-btn-default",
	outline: "tf-btn-outline",
	secondary: "tf-btn-secondary",
	ghost: "tf-btn-ghost",
	destructive: "tf-btn-destructive",
	link: "tf-btn-link"
}, ty = {
	default: "tf-btn-size-default",
	xs: "tf-btn-xs",
	sm: "tf-btn-sm",
	lg: "tf-btn-lg",
	icon: "tf-btn-icon",
	"icon-xs": "tf-btn-icon-xs",
	"icon-sm": "tf-btn-icon-sm",
	"icon-lg": "tf-btn-icon-lg"
}, ny = /* @__PURE__ */ new Set([
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
]), ry = /* @__PURE__ */ W("<a><!></a>"), iy = /* @__PURE__ */ W("<button><!></button>");
function ay(e, t) {
	N(t, !0);
	let n = X(t, "class", 7), r = X(t, "variant", 7, "outline"), i = X(t, "size", 7, "default"), a = X(t, "ref", 15, null), o = X(t, "href", 7, void 0), s = X(t, "type", 7, "button"), c = X(t, "disabled", 7), l = X(t, "children", 7), u = X(t, "primary", 7), d = /* @__PURE__ */ Va(t, ny);
	u() && r("default");
	var f = {
		get class() {
			return n();
		},
		set class(e) {
			n(e), I();
		},
		get variant() {
			return r();
		},
		set variant(e = "outline") {
			r(e), I();
		},
		get size() {
			return i();
		},
		set size(e = "default") {
			i(e), I();
		},
		get ref() {
			return a();
		},
		set ref(e = null) {
			a(e), I();
		},
		get href() {
			return o();
		},
		set href(e = void 0) {
			o(e), I();
		},
		get type() {
			return s();
		},
		set type(e = "button") {
			s(e), I();
		},
		get disabled() {
			return c();
		},
		set disabled(e) {
			c(e), I();
		},
		get children() {
			return l();
		},
		set children(e) {
			l(e), I();
		},
		get primary() {
			return u();
		},
		set primary(e) {
			u(e), I();
		}
	}, p = K(), m = B(p), h = (e) => {
		var t = ry();
		Ea(t, (e) => ({
			"data-slot": "button",
			class: e,
			href: c() ? void 0 : o(),
			"aria-disabled": c(),
			role: c() ? "link" : void 0,
			tabindex: c() ? -1 : void 0,
			...d
		}), [() => $v("nopan nodrag tf-btn", ey[r()], ty[i()], n())]), Di(z(t), () => l() ?? T), j(t), La(t, (e) => a(e), () => a()), q(e, t);
	}, g = (e) => {
		var t = iy();
		Ea(t, (e) => ({
			"data-slot": "button",
			class: e,
			type: s(),
			disabled: c(),
			...d
		}), [() => $v("nopan nodrag tf-btn", ey[r()], ty[i()], n())]), Di(z(t), () => l() ?? T), j(t), La(t, (e) => a(e), () => a()), q(e, t);
	};
	return J(m, (e) => {
		o() ? e(h) : e(g, -1);
	}), q(e, p), P(f);
}
Z(ay, {
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
function oy(e) {
	return typeof e == "function";
}
function sy(e) {
	return typeof e == "object" && !!e;
}
var cy = [
	"string",
	"number",
	"bigint",
	"boolean"
];
function ly(e) {
	return e == null || cy.includes(typeof e) ? !0 : Array.isArray(e) ? e.every((e) => ly(e)) : typeof e == "object" && Object.getPrototypeOf(e) === Object.prototype;
}
var uy = Symbol("box"), dy = Symbol("is-writable");
function $(e, t) {
	let n = /* @__PURE__ */ F(e);
	return t ? {
		[uy]: !0,
		[dy]: !0,
		get current() {
			return U(n);
		},
		set current(e) {
			t(e);
		}
	} : {
		[uy]: !0,
		get current() {
			return e();
		}
	};
}
function fy(e) {
	return sy(e) && uy in e;
}
function py(e) {
	return fy(e) ? e : oy(e) ? $(e) : my(e);
}
function my(e) {
	let t = /* @__PURE__ */ L(En(e));
	return {
		[uy]: !0,
		[dy]: !0,
		get current() {
			return U(t);
		},
		set current(e) {
			R(t, e, !0);
		}
	};
}
function hy(...e) {
	return function(t) {
		for (let n of e) if (n) {
			if (t.defaultPrevented) return;
			typeof n == "function" ? n.call(this, t) : n.current?.call(this, t);
		}
	};
}
var gy = /\d/, _y = [
	"-",
	"_",
	"/",
	"."
];
function vy(e = "") {
	if (!gy.test(e)) return e !== e.toLowerCase();
}
function yy(e) {
	let t = [], n = "", r, i;
	for (let a of e) {
		let e = _y.includes(a);
		if (e === !0) {
			t.push(n), n = "", r = void 0;
			continue;
		}
		let o = vy(a);
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
function by(e) {
	return e ? yy(e).map((e) => Sy(e)).join("") : "";
}
function xy(e) {
	return Cy(by(e || ""));
}
function Sy(e) {
	return e ? e[0].toUpperCase() + e.slice(1) : "";
}
function Cy(e) {
	return e ? e[0].toLowerCase() + e.slice(1) : "";
}
function wy(e) {
	if (!e) return {};
	let t = {};
	function n(e, n) {
		if (e.startsWith("-moz-") || e.startsWith("-webkit-") || e.startsWith("-ms-") || e.startsWith("-o-")) {
			t[by(e)] = n;
			return;
		}
		if (e.startsWith("--")) {
			t[e] = n;
			return;
		}
		t[xy(e)] = n;
	}
	return rv(e, n), t;
}
function Ty(...e) {
	return (...t) => {
		for (let n of e) typeof n == "function" && n(...t);
	};
}
function Ey(e, t) {
	let n = RegExp(e, "g");
	return (e) => {
		if (typeof e != "string") throw TypeError(`expected an argument of type string, but got ${typeof e}`);
		return e.match(n) ? e.replace(n, t) : e;
	};
}
var Dy = Ey(/[A-Z]/, (e) => `-${e.toLowerCase()}`);
function Oy(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError(`expected an argument of type object, but got ${typeof e}`);
	return Object.keys(e).map((t) => `${Dy(t)}: ${e[t]};`).join("\n");
}
function ky(e = {}) {
	return Oy(e).replace("\n", " ");
}
var Ay = new Set(/* @__PURE__ */ "onabort.onanimationcancel.onanimationend.onanimationiteration.onanimationstart.onauxclick.onbeforeinput.onbeforetoggle.onblur.oncancel.oncanplay.oncanplaythrough.onchange.onclick.onclose.oncompositionend.oncompositionstart.oncompositionupdate.oncontextlost.oncontextmenu.oncontextrestored.oncopy.oncuechange.oncut.ondblclick.ondrag.ondragend.ondragenter.ondragleave.ondragover.ondragstart.ondrop.ondurationchange.onemptied.onended.onerror.onfocus.onfocusin.onfocusout.onformdata.ongotpointercapture.oninput.oninvalid.onkeydown.onkeypress.onkeyup.onload.onloadeddata.onloadedmetadata.onloadstart.onlostpointercapture.onmousedown.onmouseenter.onmouseleave.onmousemove.onmouseout.onmouseover.onmouseup.onpaste.onpause.onplay.onplaying.onpointercancel.onpointerdown.onpointerenter.onpointerleave.onpointermove.onpointerout.onpointerover.onpointerup.onprogress.onratechange.onreset.onresize.onscroll.onscrollend.onsecuritypolicyviolation.onseeked.onseeking.onselect.onselectionchange.onselectstart.onslotchange.onstalled.onsubmit.onsuspend.ontimeupdate.ontoggle.ontouchcancel.ontouchend.ontouchmove.ontouchstart.ontransitioncancel.ontransitionend.ontransitionrun.ontransitionstart.onvolumechange.onwaiting.onwebkitanimationend.onwebkitanimationiteration.onwebkitanimationstart.onwebkittransitionend.onwheel".split("."));
function jy(e) {
	return Ay.has(e);
}
function My(...e) {
	let t = { ...e[0] };
	for (let n = 1; n < e.length; n++) {
		let r = e[n];
		if (r) {
			for (let e of Object.keys(r)) {
				let n = t[e], i = r[e], a = typeof n == "function", o = typeof i == "function";
				if (a && typeof o && jy(e)) t[e] = hy(n, i);
				else if (a && o) t[e] = Ty(n, i);
				else if (e === "class") {
					let r = ly(n), a = ly(i);
					r && a ? t[e] = $i(n, i) : r ? t[e] = $i(n) : a && (t[e] = $i(i));
				} else if (e === "style") {
					let r = typeof n == "object", a = typeof i == "object", o = typeof n == "string", s = typeof i == "string";
					if (r && a) t[e] = {
						...n,
						...i
					};
					else if (r && s) {
						let r = wy(i);
						t[e] = {
							...n,
							...r
						};
					} else if (o && a) t[e] = {
						...wy(n),
						...i
					};
					else if (o && s) {
						let r = wy(n), a = wy(i);
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
	return typeof t.style == "object" && (t.style = ky(t.style).replaceAll("\n", " ")), t.hidden === !1 && (t.hidden = void 0, delete t.hidden), t.disabled === !1 && (t.disabled = void 0, delete t.disabled), t;
}
var Ny = {
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
ky(Ny);
var Py = typeof window < "u" ? window : void 0;
typeof window < "u" && window.document, typeof window < "u" && window.navigator, typeof window < "u" && window.location;
function Fy(e) {
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
		let { window: t = Py, document: n = t?.document } = e;
		t !== void 0 && (this.#e = n, this.#t = Pt((e) => {
			let n = Xr(t, "focusin", e), r = Xr(t, "focusout", e);
			return () => {
				n(), r();
			};
		}));
	}
	get current() {
		return this.#t?.(), this.#e ? Fy(this.#e) : null;
	}
}();
function Iy(e) {
	return typeof e == "function";
}
var Ly = class {
	#e;
	#t;
	constructor(e) {
		this.#e = e, this.#t = Symbol(e);
	}
	get key() {
		return this.#t;
	}
	exists() {
		return ut(this.#t);
	}
	get() {
		let e = ct(this.#t);
		if (e === void 0) throw Error(`Context "${this.#e}" not found`);
		return e;
	}
	getOr(e) {
		let t = ct(this.#t);
		return t === void 0 ? e : t;
	}
	set(e) {
		return lt(this.#t, e);
	}
};
function Ry(e, t) {
	switch (e) {
		case "post":
			Kn(t);
			break;
		case "pre":
			Jn(t);
			break;
	}
}
function zy(e, t, n, r = {}) {
	let { lazy: i = !1 } = r, a = !i, o = Array.isArray(e) ? [] : void 0;
	Ry(t, () => {
		let t = Array.isArray(e) ? e.map((e) => e()) : e();
		if (!a) {
			a = !0, o = t;
			return;
		}
		let r = Ur(() => n(t, o));
		return o = t, r;
	});
}
function By(e, t, n) {
	let r = Yn(() => {
		let i = !1;
		zy(e, t, (e, t) => {
			if (i) {
				r();
				return;
			}
			let a = n(e, t);
			return i = !0, a;
		}, { lazy: !0 });
	});
	Kn(() => r);
}
function Vy(e, t, n) {
	zy(e, "post", t, n);
}
function Hy(e, t, n) {
	zy(e, "pre", t, n);
}
Vy.pre = Hy;
function Uy(e, t) {
	By(e, "post", t);
}
function Wy(e, t) {
	By(e, "pre", t);
}
Uy.pre = Wy;
function Gy(e) {
	return Iy(e) ? e() : e;
}
var Ky = class {
	#e = {
		width: 0,
		height: 0
	};
	#t = !1;
	#n;
	#r;
	#i;
	#a = /* @__PURE__ */ F(() => (U(this.#s)?.(), this.getSize().width));
	#o = /* @__PURE__ */ F(() => (U(this.#s)?.(), this.getSize().height));
	#s = /* @__PURE__ */ F(() => {
		let e = Gy(this.#r);
		if (e) return Pt((t) => {
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
		this.#i = t.window ?? Py, this.#n = t, this.#r = e, this.#e = {
			width: 0,
			height: 0
		};
	}
	calculateSize() {
		let e = Gy(this.#r);
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
		return U(this.#s)?.(), this.getSize();
	}
	get width() {
		return U(this.#a);
	}
	get height() {
		return U(this.#o);
	}
}, qy = class {
	#e = () => void 0;
	#t = /* @__PURE__ */ F(() => this.#e());
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
		return U(this.#t);
	}
};
function Jy(e, t) {
	let n, r = null;
	return (...i) => new Promise((a) => {
		r && r(void 0), r = a, clearTimeout(n), n = setTimeout(async () => {
			let t = await e(...i);
			r &&= (r(t), null);
		}, t);
	});
}
function Yy(e, t) {
	let n = 0, r = null;
	return (...i) => {
		let a = Date.now();
		return n && a - n < t ? r ?? Promise.resolve(void 0) : (n = a, r = e(...i), r);
	};
}
function Xy(e, t, n = {}, r) {
	let { lazy: i = !1, once: a = !1, initialValue: o, debounce: s, throttle: c } = n, l = /* @__PURE__ */ L(En(o)), u = /* @__PURE__ */ L(!1), d = /* @__PURE__ */ L(void 0), f = /* @__PURE__ */ L(En([])), p = () => {
		U(f).forEach((e) => e()), R(f, [], !0);
	}, m = (e) => {
		R(f, [...U(f), e], !0);
	}, h = async (e, n, r = !1) => {
		try {
			R(u, !0), R(d, void 0), p();
			let i = new AbortController();
			m(() => i.abort());
			let a = await t(e, n, {
				data: U(l),
				refetching: r,
				onCleanup: m,
				signal: i.signal
			});
			return R(l, a, !0), a;
		} catch (e) {
			e instanceof DOMException && e.name === "AbortError" || R(d, e, !0);
			return;
		} finally {
			R(u, !1);
		}
	}, g = s ? Jy(h, s) : c ? Yy(h, c) : h, _ = Array.isArray(e) ? e : [e], v;
	return r((t, n) => {
		a && v || (v = t, g(Array.isArray(e) ? t : t[0], Array.isArray(e) ? n : n?.[0]));
	}, { lazy: i }), {
		get current() {
			return U(l);
		},
		get loading() {
			return U(u);
		},
		get error() {
			return U(d);
		},
		mutate: (e) => {
			R(l, e, !0);
		},
		refetch: (t) => {
			let n = _.map((e) => e());
			return g(Array.isArray(e) ? n : n[0], Array.isArray(e) ? n : n[0], t ?? !0);
		}
	};
}
function Zy(e, t, n) {
	return Xy(e, t, n, (t, n) => {
		let r = Array.isArray(e) ? e : [e];
		Vy(() => r.map((e) => e()), (e, n) => {
			t(e, n ?? []);
		}, n);
	});
}
function Qy(e, t, n) {
	return Xy(e, t, n, (t, n) => {
		let r = Array.isArray(e) ? e : [e];
		Vy.pre(() => r.map((e) => e()), (e, n) => {
			t(e, n ?? []);
		}, n);
	});
}
Zy.pre = Qy;
function $y(e) {
	Kn(() => () => {
		e();
	});
}
function eb(e) {
	Kn(() => Ur(() => e()));
}
function tb(e, t) {
	return setTimeout(t, e);
}
function nb(e) {
	Br().then(e);
}
var rb = 1, ib = 9, ab = 11;
function ob(e) {
	return sy(e) && e.nodeType === rb && typeof e.nodeName == "string";
}
function sb(e) {
	return sy(e) && e.nodeType === ib;
}
function cb(e) {
	return sy(e) && e.constructor?.name === "VisualViewport";
}
function lb(e) {
	return sy(e) && e.nodeType !== void 0;
}
function ub(e) {
	return lb(e) && e.nodeType === ab && "host" in e;
}
function db(e, t) {
	if (!e || !t || !ob(e) || !ob(t)) return !1;
	let n = t.getRootNode?.();
	if (e === t || e.contains(t)) return !0;
	if (n && ub(n)) {
		let n = t;
		for (; n;) {
			if (e === n) return !0;
			n = n.parentNode || n.host;
		}
	}
	return !1;
}
function fb(e) {
	return sb(e) ? e : cb(e) ? e.document : e?.ownerDocument ?? document;
}
function pb(e) {
	return ub(e) ? pb(e.host) : sb(e) ? e.defaultView ?? window : ob(e) ? e.ownerDocument?.defaultView ?? window : window;
}
function mb(e) {
	let t = e.activeElement;
	for (; t?.shadowRoot;) {
		let e = t.shadowRoot.activeElement;
		if (e === t) break;
		t = e;
	}
	return t;
}
var hb = class {
	element;
	#e = /* @__PURE__ */ F(() => this.element.current ? this.element.current.getRootNode() ?? document : document);
	get root() {
		return U(this.#e);
	}
	set root(e) {
		R(this.#e, e);
	}
	constructor(e) {
		typeof e == "function" ? this.element = $(e) : this.element = e;
	}
	getDocument = () => fb(this.root);
	getWindow = () => this.getDocument().defaultView ?? window;
	getActiveElement = () => mb(this.root);
	isActiveElement = (e) => e === this.getActiveElement();
	getElementById(e) {
		return this.root.getElementById(e);
	}
	querySelector = (e) => this.root ? this.root.querySelector(e) : null;
	querySelectorAll = (e) => this.root ? this.root.querySelectorAll(e) : [];
	setTimeout = (e, t) => this.getWindow().setTimeout(e, t);
	clearTimeout = (e) => this.getWindow().clearTimeout(e);
};
function gb(e, t) {
	return { [ji()]: (n) => fy(e) ? (e.current = n, Ur(() => t?.(n)), () => {
		"isConnected" in n && n.isConnected || (e.current = null, t?.(null));
	}) : (e(n), Ur(() => t?.(n)), () => {
		"isConnected" in n && n.isConnected || (e(null), t?.(null));
	}) };
}
function _b(e) {
	return e ? "true" : "false";
}
function vb(e) {
	return e ? "" : void 0;
}
function yb(e) {
	return e ? !0 : void 0;
}
function bb(e) {
	return e ? "open" : "closed";
}
function xb(e) {
	return e === "starting" ? { "data-starting-style": "" } : e === "ending" ? { "data-ending-style": "" } : {};
}
function Sb(e, t) {
	return t ? "mixed" : e ? "true" : "false";
}
var Cb = class {
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
function wb(e) {
	let t = new Cb(e);
	return {
		...t.attrs,
		selector: t.selector,
		getAttr: t.getAttr
	};
}
var Tb = "ArrowDown", Eb = "ArrowUp", Db = "Home", Ob = "PageDown", kb = "PageUp", Ab = typeof document < "u", jb = Mb();
function Mb() {
	return Ab && window?.navigator?.userAgent && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || window?.navigator?.maxTouchPoints > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function Nb(e) {
	return e instanceof HTMLElement;
}
function Pb(e) {
	return e instanceof Element || e instanceof SVGElement;
}
function Fb(e) {
	return e !== null;
}
var Ib = class {
	#e;
	#t = null;
	#n = null;
	#r = 0;
	constructor(e) {
		this.#e = e, $y(() => this.#i());
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
		this.#e.afterTick ? nb(t) : t();
	}
}, Lb = class {
	#e;
	#t;
	#n;
	#r = /* @__PURE__ */ L(!1);
	#i = /* @__PURE__ */ L(void 0);
	#a = !1;
	#o = null;
	constructor(e) {
		this.#e = e, R(this.#r, e.open.current, !0), this.#t = e.enabled ?? !0, this.#n = new Ib({
			ref: this.#e.ref,
			afterTick: this.#e.open
		}), $y(() => this.#s()), Vy(() => this.#e.open.current, (e) => {
			if (!this.#a) {
				this.#a = !0;
				return;
			}
			if (this.#s(), !e && this.#e.shouldSkipExitAnimation?.()) {
				R(this.#r, !1), R(this.#i, void 0), this.#e.onComplete?.();
				return;
			}
			if (e && R(this.#r, !0), R(this.#i, e ? "starting" : "ending", !0), e && (this.#o = window.requestAnimationFrame(() => {
				this.#o = null, this.#e.open.current && R(this.#i, void 0);
			})), !this.#t) {
				e || R(this.#r, !1), R(this.#i, void 0), this.#e.onComplete?.();
				return;
			}
			this.#n.run(() => {
				e === this.#e.open.current && (this.#e.open.current || R(this.#r, !1), R(this.#i, void 0), this.#e.onComplete?.());
			});
		});
	}
	get shouldRender() {
		return U(this.#r);
	}
	get transitionStatus() {
		return U(this.#i);
	}
	#s() {
		this.#o !== null && (window.cancelAnimationFrame(this.#o), this.#o = null);
	}
};
function Rb() {}
function zb(e, t) {
	return t === void 0 ? `bits-${e}` : `bits-${e}-${t}`;
}
function Bb(e, t) {
	N(t, !0);
	let n = X(t, "children", 7);
	var r = {
		get children() {
			return n();
		},
		set children(e) {
			n(e), I();
		}
	}, i = K();
	return Ni(B(i), n, (e) => {
		var t = K();
		Di(B(t), () => n() ?? T), q(e, t);
	}), q(e, i), P(r);
}
Z(Bb, { children: {} }, [], [], { mode: "open" });
var Vb = new Ly("BitsConfig");
function Hb() {
	let e = new Ub(null, {});
	return Vb.getOr(e).opts;
}
var Ub = class {
	opts;
	constructor(e, t) {
		let n = Wb(e, t);
		this.opts = {
			defaultPortalTo: n((e) => e.defaultPortalTo),
			defaultLocale: n((e) => e.defaultLocale)
		};
	}
};
function Wb(e, t) {
	return (n) => $(() => {
		let r = n(t)?.current;
		if (r !== void 0) return r;
		if (e !== null) return n(e.opts)?.current;
	});
}
function Gb(e, t) {
	return (n) => {
		let r = Hb();
		return $(() => {
			let i = n();
			if (i !== void 0) return i;
			let a = e(r).current;
			return a === void 0 ? t : a;
		});
	};
}
var Kb = Gb((e) => e.defaultPortalTo, "body");
function qb(e, t) {
	N(t, !0);
	let n = X(t, "to", 7), r = X(t, "children", 7), i = X(t, "disabled", 7), a = Kb(() => n()), o = dt(), s = /* @__PURE__ */ F(c);
	function c() {
		if (!Ab || i()) return null;
		let e = null;
		return e = typeof a.current == "string" ? document.querySelector(a.current) : a.current, e;
	}
	let l;
	function u() {
		l &&= (Ti(l), null);
	}
	Vy([() => U(s), () => i()], ([e, t]) => {
		if (!e || t) {
			u();
			return;
		}
		return l = bi(Bb, {
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
			n(e), I();
		},
		get children() {
			return r();
		},
		set children(e) {
			r(e), I();
		},
		get disabled() {
			return i();
		},
		set disabled(e) {
			i(e), I();
		}
	}, f = K(), p = B(f), m = (e) => {
		var t = K();
		Di(B(t), () => r() ?? T), q(e, t);
	};
	return J(p, (e) => {
		i() && e(m);
	}), q(e, f), P(d);
}
Z(qb, {
	to: {},
	children: {},
	disabled: {}
}, [], [], { mode: "open" });
var Jb = class {
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
		return Xr(e, this.eventName, (e) => {
			t(e);
		}, n);
	}
};
function Yb(e, t = 500) {
	let n = null, r = (...r) => {
		n !== null && clearTimeout(n), n = setTimeout(() => {
			e(...r);
		}, t);
	};
	return r.destroy = () => {
		n !== null && (clearTimeout(n), n = null);
	}, r;
}
function Xb(e, t) {
	return e === t || e.contains(t);
}
function Zb(e) {
	return e?.ownerDocument ?? document;
}
function Qb(e, t) {
	let { clientX: n, clientY: r } = e, i = t.getBoundingClientRect();
	return n < i.left || n > i.right || r < i.top || r > i.bottom;
}
var $b = [
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
], ex = /* #__PURE__ */ $b.join(","), tx = typeof Element > "u", nx = tx ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, rx = !tx && Element.prototype.getRootNode ? function(e) {
	return e?.getRootNode?.call(e);
} : function(e) {
	return e?.ownerDocument;
}, ix = function(e, t) {
	t === void 0 && (t = !0);
	var n = e?.getAttribute?.call(e, "inert");
	return n === "" || n === "true" || t && e && (typeof e.closest == "function" ? e.closest("[inert]") : ix(e.parentNode));
}, ax = function(e) {
	var t = e?.getAttribute?.call(e, "contenteditable");
	return t === "" || t === "true";
}, ox = function(e, t, n) {
	if (ix(e)) return [];
	var r = Array.prototype.slice.apply(e.querySelectorAll(ex));
	return t && nx.call(e, ex) && r.unshift(e), r = r.filter(n), r;
}, sx = function(e, t, n) {
	for (var r = [], i = Array.from(e); i.length;) {
		var a = i.shift();
		if (!ix(a, !1)) if (a.tagName === "SLOT") {
			var o = a.assignedElements(), s = sx(o.length ? o : a.children, !0, n);
			n.flatten ? r.push.apply(r, s) : r.push({
				scopeParent: a,
				candidates: s
			});
		} else {
			nx.call(a, ex) && n.filter(a) && (t || !e.includes(a)) && r.push(a);
			var c = a.shadowRoot || typeof n.getShadowRoot == "function" && n.getShadowRoot(a), l = !ix(c, !1) && (!n.shadowRootFilter || n.shadowRootFilter(a));
			if (c && l) {
				var u = sx(c === !0 ? a.children : c.children, !0, n);
				n.flatten ? r.push.apply(r, u) : r.push({
					scopeParent: a,
					candidates: u
				});
			} else i.unshift.apply(i, a.children);
		}
	}
	return r;
}, cx = function(e) {
	return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, lx = function(e) {
	if (!e) throw Error("No node provided");
	return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || ax(e)) && !cx(e) ? 0 : e.tabIndex;
}, ux = function(e, t) {
	var n = lx(e);
	return n < 0 && t && !cx(e) ? 0 : n;
}, dx = function(e, t) {
	return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
}, fx = function(e) {
	return e.tagName === "INPUT";
}, px = function(e) {
	return fx(e) && e.type === "hidden";
}, mx = function(e) {
	return e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(e) {
		return e.tagName === "SUMMARY";
	});
}, hx = function(e, t) {
	for (var n = 0; n < e.length; n++) if (e[n].checked && e[n].form === t) return e[n];
}, gx = function(e) {
	if (!e.name) return !0;
	var t = e.form || rx(e), n = function(e) {
		return t.querySelectorAll("input[type=\"radio\"][name=\"" + e + "\"]");
	}, r;
	if (typeof window < "u" && window.CSS !== void 0 && typeof window.CSS.escape == "function") r = n(window.CSS.escape(e.name));
	else try {
		r = n(e.name);
	} catch (e) {
		return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message), !1;
	}
	var i = hx(r, e.form);
	return !i || i === e;
}, _x = function(e) {
	return fx(e) && e.type === "radio";
}, vx = function(e) {
	return _x(e) && !gx(e);
}, yx = function(e) {
	var t = e && rx(e), n = t?.host, r = !1;
	if (t && t !== e) {
		var i, a, o;
		for (r = !!((i = n) != null && (a = i.ownerDocument) != null && a.contains(n) || e != null && (o = e.ownerDocument) != null && o.contains(e)); !r && n;) {
			var s, c;
			t = rx(n), n = t?.host, r = !!((s = n) != null && (c = s.ownerDocument) != null && c.contains(n));
		}
	}
	return r;
}, bx = function(e) {
	var t = e.getBoundingClientRect(), n = t.width, r = t.height;
	return n === 0 && r === 0;
}, xx = function(e, t) {
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
	var a = nx.call(e, "details>summary:first-of-type") ? e.parentElement : e;
	if (nx.call(a, "details:not([open]) *")) return !0;
	if (!n || n === "full" || n === "full-native" || n === "legacy-full") {
		if (typeof r == "function") {
			for (var o = e; e;) {
				var s = e.parentElement, c = rx(e);
				if (s && !s.shadowRoot && r(s) === !0) return bx(e);
				e = e.assignedSlot ? e.assignedSlot : !s && c !== e.ownerDocument ? c.host : s;
			}
			e = o;
		}
		if (yx(e)) return !e.getClientRects().length;
		if (n !== "legacy-full") return !0;
	} else if (n === "non-zero-area") return bx(e);
	return !1;
}, Sx = function(e) {
	if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName)) for (var t = e.parentElement; t;) {
		if (t.tagName === "FIELDSET" && t.disabled) {
			for (var n = 0; n < t.children.length; n++) {
				var r = t.children.item(n);
				if (r.tagName === "LEGEND") return nx.call(t, "fieldset[disabled] *") ? !0 : !r.contains(e);
			}
			return !0;
		}
		t = t.parentElement;
	}
	return !1;
}, Cx = function(e, t) {
	return !(t.disabled || px(t) || xx(t, e) || mx(t) || Sx(t));
}, wx = function(e, t) {
	return !(vx(t) || lx(t) < 0 || !Cx(e, t));
}, Tx = function(e) {
	var t = parseInt(e.getAttribute("tabindex"), 10);
	return !!(isNaN(t) || t >= 0);
}, Ex = function(e) {
	var t = [], n = [];
	return e.forEach(function(e, r) {
		var i = !!e.scopeParent, a = i ? e.scopeParent : e, o = ux(a, i), s = i ? Ex(e.candidates) : a;
		o === 0 ? i ? t.push.apply(t, s) : t.push(a) : n.push({
			documentOrder: r,
			tabIndex: o,
			item: e,
			isScope: i,
			content: s
		});
	}), n.sort(dx).reduce(function(e, t) {
		return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e;
	}, []).concat(t);
}, Dx = function(e, t) {
	return t ||= {}, Ex(t.getShadowRoot ? sx([e], t.includeContainer, {
		filter: wx.bind(null, t),
		flatten: !1,
		getShadowRoot: t.getShadowRoot,
		shadowRootFilter: Tx
	}) : ox(e, t.includeContainer, wx.bind(null, t)));
}, Ox = function(e, t) {
	return t ||= {}, t.getShadowRoot ? sx([e], t.includeContainer, {
		filter: Cx.bind(null, t),
		flatten: !0,
		getShadowRoot: t.getShadowRoot
	}) : ox(e, t.includeContainer, Cx.bind(null, t));
}, kx = /* #__PURE__ */ $b.concat("iframe:not([inert]):not([inert] *)").join(","), Ax = function(e, t) {
	if (t ||= {}, !e) throw Error("No node provided");
	return nx.call(e, kx) !== !1 && Cx(t, e);
};
function jx(e, t, n = !0) {
	if (!(e.length === 0 || t < 0 || t >= e.length)) return e.length === 1 && t === 0 ? e[0] : t === e.length - 1 ? n ? e[0] : void 0 : e[t + 1];
}
function Mx(e, t, n = !0) {
	if (!(e.length === 0 || t < 0 || t >= e.length)) return e.length === 1 && t === 0 ? e[0] : t === 0 ? n ? e[e.length - 1] : void 0 : e[t - 1];
}
function Nx(e, t, n, r = !0) {
	if (e.length === 0 || t < 0 || t >= e.length) return;
	let i = t + n;
	return i = r ? (i % e.length + e.length) % e.length : Math.max(0, Math.min(i, e.length - 1)), e[i];
}
function Px(e, t, n, r = !0) {
	if (e.length === 0 || t < 0 || t >= e.length) return;
	let i = t - n;
	return i = r ? (i % e.length + e.length) % e.length : Math.max(0, Math.min(i, e.length - 1)), e[i];
}
function Fx(e, t, n) {
	let r = t.toLowerCase();
	if (r.endsWith(" ")) {
		let i = r.slice(0, -1);
		if (e.filter((e) => e.toLowerCase().startsWith(i)).length <= 1) return Fx(e, i, n);
		let a = n?.toLowerCase();
		if (a && a.startsWith(i) && a.charAt(i.length) === " " && t.trim() === i) return n;
		let o = e.filter((e) => e.toLowerCase().startsWith(r));
		if (o.length > 0) {
			let t = n ? e.indexOf(n) : -1;
			return Ix(o, Math.max(t, 0)).find((e) => e !== n) || n;
		}
	}
	let i = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, a = i.toLowerCase(), o = n ? e.indexOf(n) : -1, s = Ix(e, Math.max(o, 0));
	i.length === 1 && (s = s.filter((e) => e !== n));
	let c = s.find((e) => e?.toLowerCase().startsWith(a));
	return c === n ? void 0 : c;
}
function Ix(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
var Lx = {
	afterMs: 1e4,
	onChange: Rb
};
function Rx(e, t) {
	let { afterMs: n, onChange: r, getWindow: i } = {
		...Lx,
		...t
	}, a = null, o = /* @__PURE__ */ L(En(e));
	function s() {
		return i().setTimeout(() => {
			R(o, e, !0), r?.(e);
		}, n);
	}
	return Kn(() => () => {
		a && i().clearTimeout(a);
	}), $(() => U(o), (e) => {
		R(o, e, !0), r?.(e), a && i().clearTimeout(a), a = s();
	});
}
var zx = class {
	#e;
	#t;
	#n = /* @__PURE__ */ F(() => this.#e.onMatch ? this.#e.onMatch : (e) => e.focus());
	#r = /* @__PURE__ */ F(() => this.#e.getCurrentItem ? this.#e.getCurrentItem : this.#e.getActiveElement);
	constructor(e) {
		this.#e = e, this.#t = Rx("", {
			afterMs: 1e3,
			getWindow: e.getWindow
		}), this.handleTypeaheadSearch = this.handleTypeaheadSearch.bind(this), this.resetTypeahead = this.resetTypeahead.bind(this);
	}
	handleTypeaheadSearch(e, t) {
		if (!t.length) return;
		this.#t.current = this.#t.current + e;
		let n = U(this.#r)(), r = t.find((e) => e === n)?.textContent?.trim() ?? "", i = Fx(t.map((e) => e.textContent?.trim() ?? ""), this.#t.current, r), a = t.find((e) => e.textContent?.trim() === i);
		return a && U(this.#n)(a), a;
	}
	resetTypeahead() {
		this.#t.current = "";
	}
	get search() {
		return this.#t.current;
	}
}, Bx = "data-context-menu-trigger", Vx = "data-context-menu-content";
new Ly("Menu.Root"), new Ly("Menu.Root | Menu.Sub"), new Ly("Menu.Content"), new Ly("Menu.Group | Menu.RadioGroup"), new Ly("Menu.RadioGroup"), new Ly("Menu.CheckboxGroup"), new Jb("bitsmenuopen", {
	bubbles: !1,
	cancelable: !0
}), wb({
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
var Hx = class e {
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
	#s = Rb;
	constructor(e) {
		this.opts = e, this.#t = e.interactOutsideBehavior, this.#e = e.onInteractOutside, this.#o = e.onFocusOutside, Kn(() => {
			this.#a = Zb(this.opts.ref.current);
		});
		let t = Rb, n = () => {
			this.#g(), globalThis.bitsDismissableLayers.delete(this), this.#d.destroy(), t();
		};
		Vy([() => this.opts.enabled.current, () => this.opts.ref.current], () => {
			if (!(!this.opts.enabled.current || !this.opts.ref.current)) return tb(1, () => {
				this.opts.ref.current && (globalThis.bitsDismissableLayers.set(this, this.#t), t(), t = this.#l());
			}), n;
		}), $y(() => {
			this.#g.destroy(), globalThis.bitsDismissableLayers.delete(this), this.#d.destroy(), this.#s(), t();
		});
	}
	#c = (e) => {
		e.defaultPrevented || this.opts.ref.current && nb(() => {
			!this.opts.ref.current || this.#h(e.target) || e.target && !this.#i && this.#o.current?.(e);
		});
	};
	#l() {
		return Ty(Xr(this.#a, "pointerdown", Ty(this.#f, this.#m), { capture: !0 }), Xr(this.#a, "pointerdown", Ty(this.#p, this.#d)), Xr(this.#a, "focusin", this.#c));
	}
	#u = (e) => {
		let t = e;
		t.defaultPrevented && (t = Kx(e)), this.#e.current(e);
	};
	#d = Yb((e) => {
		if (!this.opts.ref.current) {
			this.#s();
			return;
		}
		let t = this.opts.isValidEvent.current(e, this.opts.ref.current) || Gx(e, this.opts.ref.current);
		if (!this.#r || this.#_() || !t) {
			this.#s();
			return;
		}
		let n = e;
		if (n.defaultPrevented && (n = Kx(n)), this.#t.current !== "close" && this.#t.current !== "defer-otherwise-close") {
			this.#s();
			return;
		}
		e.pointerType === "touch" ? (this.#s(), this.#s = Xr(this.#a, "click", this.#u, { once: !0 })) : this.#e.current(n);
	}, 10);
	#f = (e) => {
		this.#n[e.type] = !0;
	};
	#p = (e) => {
		this.#n[e.type] = !1;
	};
	#m = () => {
		this.opts.ref.current && (this.#r = Wx(this.opts.ref.current));
	};
	#h = (e) => this.opts.ref.current ? Xb(this.opts.ref.current, e) : !1;
	#g = Yb(() => {
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
function Ux(e = [...globalThis.bitsDismissableLayers]) {
	return e.findLast(([e, { current: t }]) => t === "close" || t === "ignore");
}
function Wx(e) {
	let t = [...globalThis.bitsDismissableLayers], n = Ux(t);
	if (n) return n[0].opts.ref.current === e;
	let [r] = t[0];
	return r.opts.ref.current === e;
}
function Gx(e, t) {
	let n = e.target;
	if (!Pb(n)) return !1;
	let r = !!n.closest(`[${Bx}]`), i = !!t.closest(`[${Vx}]`);
	return "button" in e && e.button > 0 && !r ? !1 : "button" in e && e.button === 0 && r && i ? !0 : r && i ? !1 : Zb(n).documentElement.contains(n) && !Xb(t, n) && Qb(e, t);
}
function Kx(e) {
	let t = e.currentTarget, n = e.target, r;
	r = e instanceof PointerEvent ? new PointerEvent(e.type, e) : new PointerEvent("pointerdown", e);
	let i = !1;
	return new Proxy(r, { get: (r, a) => a === "currentTarget" ? t : a === "target" ? n : a === "preventDefault" ? () => {
		i = !0, typeof r.preventDefault == "function" && r.preventDefault();
	} : a === "defaultPrevented" ? i : a in r ? r[a] : e[a] });
}
function qx(e, t) {
	N(t, !0);
	let n = X(t, "interactOutsideBehavior", 7, "close"), r = X(t, "onInteractOutside", 7, Rb), i = X(t, "onFocusOutside", 7, Rb), a = X(t, "id", 7), o = X(t, "children", 7), s = X(t, "enabled", 7), c = X(t, "isValidEvent", 7, () => !1), l = X(t, "ref", 7), u = Hx.create({
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
			n(e), I();
		},
		get onInteractOutside() {
			return r();
		},
		set onInteractOutside(e = Rb) {
			r(e), I();
		},
		get onFocusOutside() {
			return i();
		},
		set onFocusOutside(e = Rb) {
			i(e), I();
		},
		get id() {
			return a();
		},
		set id(e) {
			a(e), I();
		},
		get children() {
			return o();
		},
		set children(e) {
			o(e), I();
		},
		get enabled() {
			return s();
		},
		set enabled(e) {
			s(e), I();
		},
		get isValidEvent() {
			return c();
		},
		set isValidEvent(e = () => !1) {
			c(e), I();
		},
		get ref() {
			return l();
		},
		set ref(e) {
			l(e), I();
		}
	}, f = K();
	return Di(B(f), () => o() ?? T, () => ({ props: u.props })), q(e, f), P(d);
}
Z(qx, {
	interactOutsideBehavior: {},
	onInteractOutside: {},
	onFocusOutside: {},
	id: {},
	children: {},
	enabled: {},
	isValidEvent: {},
	ref: {}
}, [], [], { mode: "open" }), globalThis.bitsEscapeLayers ??= /* @__PURE__ */ new Map();
var Jx = class e {
	static create(t) {
		return new e(t);
	}
	opts;
	domContext;
	constructor(e) {
		this.opts = e, this.domContext = new hb(this.opts.ref);
		let t = Rb;
		Vy(() => e.enabled.current, (n) => (n && (globalThis.bitsEscapeLayers.set(this, e.escapeKeydownBehavior), t = this.#e()), () => {
			t(), globalThis.bitsEscapeLayers.delete(this);
		}));
	}
	#e = () => Xr(this.domContext.getDocument(), "keydown", this.#t, { passive: !1 });
	#t = (e) => {
		if (e.key !== "Escape" || !Yx(this)) return;
		let t = new KeyboardEvent(e.type, e);
		e.preventDefault();
		let n = this.opts.escapeKeydownBehavior.current;
		n !== "close" && n !== "defer-otherwise-close" || this.opts.onEscapeKeydown.current(t);
	};
};
function Yx(e) {
	let t = [...globalThis.bitsEscapeLayers], n = t.findLast(([e, { current: t }]) => t === "close" || t === "ignore");
	if (n) return n[0] === e;
	let [r] = t[0];
	return r === e;
}
function Xx(e, t) {
	N(t, !0);
	let n = X(t, "escapeKeydownBehavior", 7, "close"), r = X(t, "onEscapeKeydown", 7, Rb), i = X(t, "children", 7), a = X(t, "enabled", 7), o = X(t, "ref", 7);
	Jx.create({
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
			n(e), I();
		},
		get onEscapeKeydown() {
			return r();
		},
		set onEscapeKeydown(e = Rb) {
			r(e), I();
		},
		get children() {
			return i();
		},
		set children(e) {
			i(e), I();
		},
		get enabled() {
			return a();
		},
		set enabled(e) {
			a(e), I();
		},
		get ref() {
			return o();
		},
		set ref(e) {
			o(e), I();
		}
	}, c = K();
	return Di(B(c), () => i() ?? T), q(e, c), P(s);
}
Z(Xx, {
	escapeKeydownBehavior: {},
	onEscapeKeydown: {},
	children: {},
	enabled: {},
	ref: {}
}, [], [], { mode: "open" });
var Zx = class e {
	static instance;
	#e = my([]);
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
}, Qx = class e {
	#e = !1;
	#t = null;
	#n = Zx.getInstance();
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
		this.#r.push(Xr(t, "focusin", (t) => {
			if (this.#e || !this.#n.isActiveScope(this)) return;
			let n = t.target;
			if (n) if (e.contains(n)) this.#n.setFocusMemory(this, n);
			else {
				let n = this.#n.getFocusMemory(this);
				if (n && e.contains(n) && Ax(n)) t.preventDefault(), n.focus();
				else {
					let t = this.#u(), n = this.#d()[0];
					(t || n || e).focus();
				}
			}
		}, { capture: !0 }), Xr(e, "keydown", (e) => {
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
		return this.#t ? Dx(this.#t, {
			includeContainer: !1,
			getShadowRoot: !0
		}) : [];
	}
	#u() {
		return this.#l()[0] || null;
	}
	#d() {
		return this.#t ? Ox(this.#t, {
			includeContainer: !1,
			getShadowRoot: !0
		}) : [];
	}
	static use(t) {
		let n = null;
		return Vy([() => t.ref.current, () => t.enabled.current], ([r, i]) => {
			r && i ? (n ||= new e(t), n.mount(r)) : n &&= (n.unmount(), null);
		}), $y(() => {
			n?.unmount();
		}), { get props() {
			return { tabindex: -1 };
		} };
	}
};
function $x(e, t) {
	N(t, !0);
	let n = X(t, "enabled", 7, !1), r = X(t, "trapFocus", 7, !1), i = X(t, "loop", 7, !1), a = X(t, "onCloseAutoFocus", 7, Rb), o = X(t, "onOpenAutoFocus", 7, Rb), s = X(t, "focusScope", 7), c = X(t, "ref", 7), l = Qx.use({
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
			n(e), I();
		},
		get trapFocus() {
			return r();
		},
		set trapFocus(e = !1) {
			r(e), I();
		},
		get loop() {
			return i();
		},
		set loop(e = !1) {
			i(e), I();
		},
		get onCloseAutoFocus() {
			return a();
		},
		set onCloseAutoFocus(e = Rb) {
			a(e), I();
		},
		get onOpenAutoFocus() {
			return o();
		},
		set onOpenAutoFocus(e = Rb) {
			o(e), I();
		},
		get focusScope() {
			return s();
		},
		set focusScope(e) {
			s(e), I();
		},
		get ref() {
			return c();
		},
		set ref(e) {
			c(e), I();
		}
	}, d = K();
	return Di(B(d), () => s() ?? T, () => ({ props: l.props })), q(e, d), P(u);
}
Z($x, {
	enabled: {},
	trapFocus: {},
	loop: {},
	onCloseAutoFocus: {},
	onOpenAutoFocus: {},
	focusScope: {},
	ref: {}
}, [], [], { mode: "open" });
var eS = () => {};
globalThis.bitsTextSelectionLayers ??= /* @__PURE__ */ new Map();
var tS = class e {
	static create(t) {
		return new e(t);
	}
	opts;
	domContext;
	#e = Rb;
	#t = !1;
	#n = eS;
	#r = eS;
	constructor(e) {
		this.opts = e, this.domContext = new hb(e.ref);
		let t = Rb;
		Vy(() => [
			this.opts.enabled.current,
			this.opts.onPointerDown.current,
			this.opts.onPointerUp.current
		], ([e, n, r]) => (this.#t = e, this.#n = n, this.#r = r, e && (globalThis.bitsTextSelectionLayers.set(this, this.opts.enabled), t(), t = this.#i()), () => {
			this.#t = !1, t(), this.#s(), globalThis.bitsTextSelectionLayers.delete(this);
		}));
	}
	#i() {
		return Ty(Xr(this.domContext.getDocument(), "pointerdown", this.#o), Xr(this.domContext.getDocument(), "pointerup", hy(this.#s, this.#a)));
	}
	#a = (e) => {
		this.#r(e);
	};
	#o = (e) => {
		let t = this.opts.ref.current, n = e.target;
		!Nb(t) || !Nb(n) || !this.#t || !aS(this) || !db(t, n) || (this.#n(e), !e.defaultPrevented && (this.#e = rS(t, this.domContext.getDocument().body)));
	};
	#s = () => {
		this.#e(), this.#e = Rb;
	};
}, nS = (e) => e.style.userSelect || e.style.webkitUserSelect;
function rS(e, t) {
	let n = nS(t), r = nS(e);
	return iS(t, "none"), iS(e, "text"), () => {
		iS(t, n), iS(e, r);
	};
}
function iS(e, t) {
	e.style.userSelect = t, e.style.webkitUserSelect = t;
}
function aS(e) {
	let t = [...globalThis.bitsTextSelectionLayers];
	if (!t.length) return !1;
	let n = t.at(-1);
	return n ? n[0] === e : !1;
}
function oS(e, t) {
	N(t, !0);
	let n = X(t, "preventOverflowTextSelection", 7, !0), r = X(t, "onPointerDown", 7, Rb), i = X(t, "onPointerUp", 7, Rb), a = X(t, "id", 7), o = X(t, "children", 7), s = X(t, "enabled", 7), c = X(t, "ref", 7);
	tS.create({
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
			n(e), I();
		},
		get onPointerDown() {
			return r();
		},
		set onPointerDown(e = Rb) {
			r(e), I();
		},
		get onPointerUp() {
			return i();
		},
		set onPointerUp(e = Rb) {
			i(e), I();
		},
		get id() {
			return a();
		},
		set id(e) {
			a(e), I();
		},
		get children() {
			return o();
		},
		set children(e) {
			o(e), I();
		},
		get enabled() {
			return s();
		},
		set enabled(e) {
			s(e), I();
		},
		get ref() {
			return c();
		},
		set ref(e) {
			c(e), I();
		}
	}, u = K();
	return Di(B(u), () => o() ?? T), q(e, u), P(l);
}
Z(oS, {
	preventOverflowTextSelection: {},
	onPointerDown: {},
	onPointerUp: {},
	id: {},
	children: {},
	enabled: {},
	ref: {}
}, [], [], { mode: "open" }), globalThis.bitsIdCounter ??= { current: 0 };
function sS(e = "bits") {
	return globalThis.bitsIdCounter.current++, `${e}-${globalThis.bitsIdCounter.current}`;
}
var cS = class {
	#e;
	#t = 0;
	#n = /* @__PURE__ */ L();
	#r;
	constructor(e) {
		this.#e = e;
	}
	#i() {
		--this.#t, this.#r && this.#t <= 0 && (this.#r(), R(this.#n, void 0), this.#r = void 0);
	}
	get(...e) {
		return this.#t += 1, U(this.#n) === void 0 && (this.#r = Yn(() => {
			R(this.#n, this.#e(...e), !0);
		})), Kn(() => () => {
			this.#i();
		}), U(this.#n);
	}
}, lS = new Zm(), uS = /* @__PURE__ */ L(null), dS = null, fS = null, pS = !1, mS = $(() => {
	for (let e of lS.values()) if (e) return !0;
	return !1;
}), hS = null, gS = new cS(() => {
	function e() {
		document.body.setAttribute("style", U(uS) ?? ""), document.body.style.removeProperty("--scrollbar-width"), jb && dS?.(), R(uS, null);
	}
	function t() {
		fS !== null && (window.clearTimeout(fS), fS = null);
	}
	function n(e, n) {
		t(), pS = !0, hS = Date.now();
		let r = hS, i = () => {
			fS = null, hS === r && (vS(lS) ? pS = !1 : (pS = !1, n()));
		}, a = e === null ? 24 : e;
		fS = window.setTimeout(i, a);
	}
	function r() {
		U(uS) === null && lS.size === 0 && !pS && R(uS, document.body.getAttribute("style"), !0);
	}
	return Vy(() => mS.current, () => {
		if (!mS.current) return;
		r(), pS = !1;
		let e = getComputedStyle(document.documentElement), t = getComputedStyle(document.body), n = e.scrollbarGutter?.includes("stable") || t.scrollbarGutter?.includes("stable"), i = window.innerWidth - document.documentElement.clientWidth, a = {
			padding: Number.parseInt(t.paddingRight ?? "0", 10) + i,
			margin: Number.parseInt(t.marginRight ?? "0", 10)
		};
		i > 0 && !n && (document.body.style.paddingRight = `${a.padding}px`, document.body.style.marginRight = `${a.margin}px`, document.body.style.setProperty("--scrollbar-width", `${i}px`)), document.body.style.overflow = "hidden", jb && (dS = Xr(document, "touchmove", (e) => {
			e.target === document.documentElement && (e.touches.length > 1 || e.preventDefault());
		}, { passive: !1 })), nb(() => {
			document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
		});
	}), $y(() => () => {
		dS?.();
	}), {
		get lockMap() {
			return lS;
		},
		resetBodyStyle: e,
		scheduleCleanupIfNoNewLocks: n,
		cancelPendingCleanup: t,
		ensureInitialStyleCaptured: r
	};
}), _S = class {
	#e = sS();
	#t;
	#n = () => null;
	#r;
	locked;
	constructor(e, t = () => null) {
		this.#t = e, this.#n = t, this.#r = gS.get(), this.#r && (this.#r.cancelPendingCleanup(), this.#r.ensureInitialStyleCaptured(), this.#r.lockMap.set(this.#e, this.#t ?? !1), this.locked = $(() => this.#r.lockMap.get(this.#e) ?? !1, (e) => this.#r.lockMap.set(this.#e, e)), $y(() => {
			if (this.#r.lockMap.delete(this.#e), vS(this.#r.lockMap)) return;
			let e = this.#n();
			this.#r.scheduleCleanupIfNoNewLocks(e, () => {
				this.#r.resetBodyStyle();
			});
		}));
	}
};
function vS(e) {
	for (let [t, n] of e) if (n) return !0;
	return !1;
}
function yS(e, t) {
	N(t, !0);
	let n = X(t, "preventScroll", 7, !0), r = X(t, "restoreScrollDelay", 7, null);
	return n() && new _S(n(), () => r()), P({
		get preventScroll() {
			return n();
		},
		set preventScroll(e = !0) {
			n(e), I();
		},
		get restoreScrollDelay() {
			return r();
		},
		set restoreScrollDelay(e = null) {
			r(e), I();
		}
	});
}
Z(yS, {
	preventScroll: {},
	restoreScrollDelay: {}
}, [], [], { mode: "open" });
var bS = wb({
	component: "checkbox",
	parts: [
		"root",
		"group",
		"group-label",
		"input"
	]
}), xS = new Ly("Checkbox.Group"), SS = new Ly("Checkbox.Root"), CS = class e {
	static create(t, n = null) {
		return SS.set(new e(t, n));
	}
	opts;
	group;
	#e = /* @__PURE__ */ F(() => this.group && this.group.opts.name.current ? this.group.opts.name.current : this.opts.name.current);
	get trueName() {
		return U(this.#e);
	}
	set trueName(e) {
		R(this.#e, e);
	}
	#t = /* @__PURE__ */ F(() => this.group && this.group.opts.required.current ? !0 : this.opts.required.current);
	get trueRequired() {
		return U(this.#t);
	}
	set trueRequired(e) {
		R(this.#t, e);
	}
	#n = /* @__PURE__ */ F(() => this.group && this.group.opts.disabled.current ? !0 : this.opts.disabled.current);
	get trueDisabled() {
		return U(this.#n);
	}
	set trueDisabled(e) {
		R(this.#n, e);
	}
	#r = /* @__PURE__ */ F(() => this.group && this.group.opts.readonly.current ? !0 : this.opts.readonly.current);
	get trueReadonly() {
		return U(this.#r);
	}
	set trueReadonly(e) {
		R(this.#r, e);
	}
	attachment;
	constructor(e, t) {
		this.opts = e, this.group = t, this.attachment = gb(this.opts.ref), this.onkeydown = this.onkeydown.bind(this), this.onclick = this.onclick.bind(this), Vy.pre([() => it(this.group?.opts.value.current), () => this.opts.value.current], ([e, t]) => {
			!e || !t || (this.opts.checked.current = e.includes(t));
		}), Vy.pre(() => this.opts.checked.current, (e) => {
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
	#a = /* @__PURE__ */ F(() => ({
		checked: this.opts.checked.current,
		indeterminate: this.opts.indeterminate.current
	}));
	get snippetProps() {
		return U(this.#a);
	}
	set snippetProps(e) {
		R(this.#a, e);
	}
	#o = /* @__PURE__ */ F(() => ({
		id: this.opts.id.current,
		role: "checkbox",
		type: this.opts.type.current,
		disabled: this.trueDisabled,
		"aria-checked": Sb(this.opts.checked.current, this.opts.indeterminate.current),
		"aria-required": _b(this.trueRequired),
		"aria-readonly": _b(this.trueReadonly),
		"data-disabled": vb(this.trueDisabled),
		"data-readonly": vb(this.trueReadonly),
		"data-state": TS(this.opts.checked.current, this.opts.indeterminate.current),
		[bS.root]: "",
		onclick: this.onclick,
		onkeydown: this.onkeydown,
		...this.attachment
	}));
	get props() {
		return U(this.#o);
	}
	set props(e) {
		R(this.#o, e);
	}
}, wS = class e {
	static create() {
		return new e(SS.get());
	}
	root;
	#e = /* @__PURE__ */ F(() => this.root.group ? !!(this.root.opts.value.current !== void 0 && this.root.group.opts.value.current.includes(this.root.opts.value.current)) : this.root.opts.checked.current);
	get trueChecked() {
		return U(this.#e);
	}
	set trueChecked(e) {
		R(this.#e, e);
	}
	#t = /* @__PURE__ */ F(() => !!this.root.trueName);
	get shouldRender() {
		return U(this.#t);
	}
	set shouldRender(e) {
		R(this.#t, e);
	}
	constructor(e) {
		this.root = e, this.onfocus = this.onfocus.bind(this);
	}
	onfocus(e) {
		Nb(this.root.opts.ref.current) && this.root.opts.ref.current.focus();
	}
	#n = /* @__PURE__ */ F(() => ({
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
		return U(this.#n);
	}
	set props(e) {
		R(this.#n, e);
	}
};
function TS(e, t) {
	return t ? "indeterminate" : e ? "checked" : "unchecked";
}
var ES = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"value"
]), DS = /* @__PURE__ */ W("<input/>");
function OS(e, t) {
	N(t, !0);
	let n = X(t, "value", 15), r = /* @__PURE__ */ Va(t, ES), i = /* @__PURE__ */ F(() => My(r, {
		"aria-hidden": "true",
		tabindex: -1,
		style: {
			...Ny,
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
			n(e), I();
		}
	}, o = K(), s = B(o), c = (e) => {
		var t = DS();
		Ea(t, () => ({
			...U(i),
			value: n()
		}), void 0, void 0, void 0, void 0, !0), q(e, t);
	}, l = (e) => {
		var t = DS();
		Ea(t, () => ({ ...U(i) }), void 0, void 0, void 0, void 0, !0), Aa(t, n), q(e, t);
	};
	return J(s, (e) => {
		U(i).type === "checkbox" ? e(c) : e(l, -1);
	}), q(e, o), P(a);
}
Z(OS, { value: {} }, [], [], { mode: "open" });
function kS(e, t) {
	N(t, !1);
	let n = wS.create();
	Ra();
	var r = K(), i = B(r), a = (e) => {
		OS(e, Ga(() => n.props));
	};
	J(i, (e) => {
		n.shouldRender && e(a);
	}), q(e, r), P();
}
Z(kS, {}, [], [], { mode: "open" });
var AS = /* @__PURE__ */ new Set([
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
]), jS = /* @__PURE__ */ W("<button><!></button>"), MS = /* @__PURE__ */ W("<!> <!>", 1);
function NS(e, t) {
	let n = ci();
	N(t, !0);
	let r = X(t, "checked", 15, !1), i = X(t, "ref", 15, null), a = X(t, "onCheckedChange", 7), o = X(t, "children", 7), s = X(t, "disabled", 7, !1), c = X(t, "required", 7, !1), l = X(t, "name", 7, void 0), u = X(t, "value", 7, "on"), d = X(t, "id", 23, () => zb(n)), f = X(t, "indeterminate", 15, !1), p = X(t, "onIndeterminateChange", 7), m = X(t, "child", 7), h = X(t, "type", 7, "button"), g = X(t, "readonly", 7), _ = /* @__PURE__ */ Va(t, AS), v = xS.getOr(null);
	v && u() && (v.opts.value.current.includes(u()) ? r(!0) : r(!1)), Vy.pre(() => u(), () => {
		v && u() && (v.opts.value.current.includes(u()) ? r(!0) : r(!1));
	});
	let y = CS.create({
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
	}, v), b = /* @__PURE__ */ F(() => My({ ..._ }, y.props));
	var x = {
		get checked() {
			return r();
		},
		set checked(e = !1) {
			r(e), I();
		},
		get ref() {
			return i();
		},
		set ref(e = null) {
			i(e), I();
		},
		get onCheckedChange() {
			return a();
		},
		set onCheckedChange(e) {
			a(e), I();
		},
		get children() {
			return o();
		},
		set children(e) {
			o(e), I();
		},
		get disabled() {
			return s();
		},
		set disabled(e = !1) {
			s(e), I();
		},
		get required() {
			return c();
		},
		set required(e = !1) {
			c(e), I();
		},
		get name() {
			return l();
		},
		set name(e = void 0) {
			l(e), I();
		},
		get value() {
			return u();
		},
		set value(e = "on") {
			u(e), I();
		},
		get id() {
			return d();
		},
		set id(e = zb(n)) {
			d(e), I();
		},
		get indeterminate() {
			return f();
		},
		set indeterminate(e = !1) {
			f(e), I();
		},
		get onIndeterminateChange() {
			return p();
		},
		set onIndeterminateChange(e) {
			p(e), I();
		},
		get child() {
			return m();
		},
		set child(e) {
			m(e), I();
		},
		get type() {
			return h();
		},
		set type(e = "button") {
			h(e), I();
		},
		get readonly() {
			return g();
		},
		set readonly(e) {
			g(e), I();
		}
	}, S = MS(), C = B(S), w = (e) => {
		var t = K(), n = B(t);
		{
			let e = /* @__PURE__ */ F(() => ({
				props: U(b),
				...y.snippetProps
			}));
			Di(n, m, () => U(e));
		}
		q(e, t);
	}, E = (e) => {
		var t = jS();
		Ea(t, () => ({ ...U(b) })), Di(z(t), () => o() ?? T, () => y.snippetProps), j(t), q(e, t);
	};
	return J(C, (e) => {
		m() ? e(w) : e(E, -1);
	}), kS(V(C, 2), {}), q(e, S), P(x);
}
Z(NS, {
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
var PS = [
	"top",
	"right",
	"bottom",
	"left"
], FS = Math.min, IS = Math.max, LS = Math.round, RS = Math.floor, zS = (e) => ({
	x: e,
	y: e
}), BS = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function VS(e, t, n) {
	return IS(e, FS(t, n));
}
function HS(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function US(e) {
	return e.split("-")[0];
}
function WS(e) {
	return e.split("-")[1];
}
function GS(e) {
	return e === "x" ? "y" : "x";
}
function KS(e) {
	return e === "y" ? "height" : "width";
}
function qS(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function JS(e) {
	return GS(qS(e));
}
function YS(e, t, n) {
	n === void 0 && (n = !1);
	let r = WS(e), i = JS(e), a = KS(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = iC(o)), [o, iC(o)];
}
function XS(e) {
	let t = iC(e);
	return [
		ZS(e),
		t,
		ZS(t)
	];
}
function ZS(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var QS = ["left", "right"], $S = ["right", "left"], eC = ["top", "bottom"], tC = ["bottom", "top"];
function nC(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? $S : QS : t ? QS : $S;
		case "left":
		case "right": return t ? eC : tC;
		default: return [];
	}
}
function rC(e, t, n, r) {
	let i = WS(e), a = nC(US(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(ZS)))), a;
}
function iC(e) {
	let t = US(e);
	return BS[t] + e.slice(t.length);
}
function aC(e) {
	return {
		top: e.top ?? 0,
		right: e.right ?? 0,
		bottom: e.bottom ?? 0,
		left: e.left ?? 0
	};
}
function oC(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : aC(e);
}
function sC(e) {
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
function cC(e, t, n) {
	let { reference: r, floating: i } = e, a = qS(t), o = JS(t), s = KS(o), c = US(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
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
	let m = WS(t);
	return m && (p[o] += f * (m === "end" ? 1 : -1) * (n && l ? -1 : 1)), p;
}
async function lC(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = HS(t, e), p = oC(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = sC(await i.getClippingRect({
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
	}, y = sC(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
var uC = 50, dC = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: lC
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = cC(l, r, c), f = r, p = 0, m = {};
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
		}, x && p < uC && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = cC(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, fC = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = HS(e, t) || {};
		if (l == null) return {};
		let d = oC(u), f = {
			x: n,
			y: r
		}, p = JS(i), m = KS(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = FS(d[_], T), D = FS(d[v], T), ee = C - h[m] - D, O = C / 2 - h[m] / 2 + w, te = VS(E, O, ee), ne = !c.arrow && WS(i) != null && O !== te && a.reference[m] / 2 - (O < E ? E : D) - h[m] / 2 < 0, re = ne ? O < E ? O - E : O - ee : 0;
		return {
			[p]: f[p] + re,
			data: {
				[p]: te,
				centerOffset: O - te - re,
				...ne && { alignmentOffset: re }
			},
			reset: ne
		};
	}
}), pC = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = HS(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = US(r), _ = qS(o), v = US(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [iC(o)] : XS(o)), x = p !== "none";
			!d && x && b.push(...rC(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = YS(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (!(u === "alignment" && _ !== qS(t)) || T.every((e) => qS(e.placement) !== _ || e.overflows[0] > 0))) return {
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
								let t = qS(e.placement);
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
function mC(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function hC(e) {
	return PS.some((t) => e[t] >= 0);
}
var gC = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = HS(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = mC(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: hC(e)
					} };
				}
				case "escaped": {
					let e = mC(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: hC(e)
					} };
				}
				default: return {};
			}
		}
	};
}, _C = /*#__PURE__*/ new Set(["left", "top"]);
async function vC(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = US(n), s = WS(n), c = qS(n) === "y", l = _C.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = HS(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
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
var yC = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await vC(t, e);
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
}, bC = function(e) {
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
			} }, ...l } = HS(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = qS(i), p = GS(f), m = u[p], h = u[f], g = (e, t) => VS(t + d[e === "y" ? "top" : "left"], t, t - d[e === "y" ? "bottom" : "right"]);
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
}, xC = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = HS(e, t), u = {
				x: n,
				y: r
			}, d = qS(i), f = GS(d), p = u[f], m = u[d], h = HS(s, t), g = typeof h == "number" ? {
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
				let e = f === "y" ? "width" : "height", t = _C.has(US(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, SC = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			let { placement: n, rects: r, platform: i, elements: a } = t, { apply: o = () => {}, ...s } = HS(e, t), c = await i.detectOverflow(t, s), l = US(n), u = WS(n), d = qS(n) === "y", { width: f, height: p } = r.floating, m, h;
			l === "top" || l === "bottom" ? (m = l, h = u === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (h = l, m = u === "end" ? "top" : "bottom");
			let g = p - c.top - c.bottom, _ = f - c.left - c.right, v = FS(p - c[m], g), y = FS(f - c[h], _), b = t.middlewareData.shift, x = !b, S = v, C = y;
			b != null && b.enabled.x && (C = _), b != null && b.enabled.y && (S = g), x && !u && (d ? C = f - 2 * IS(c.left, c.right) : S = p - 2 * IS(c.top, c.bottom)), await o({
				...t,
				availableWidth: C,
				availableHeight: S
			});
			let w = await i.getDimensions(a.floating);
			return f !== w.width || p !== w.height ? { reset: { rects: !0 } } : {};
		}
	};
};
function CC() {
	return typeof window < "u";
}
function wC(e) {
	return DC(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function TC(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function EC(e) {
	return ((DC(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function DC(e) {
	return CC() ? e instanceof Node || e instanceof TC(e).Node : !1;
}
function OC(e) {
	return CC() ? e instanceof Element || e instanceof TC(e).Element : !1;
}
function kC(e) {
	return CC() ? e instanceof HTMLElement || e instanceof TC(e).HTMLElement : !1;
}
function AC(e) {
	return !CC() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof TC(e).ShadowRoot;
}
function jC(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = HC(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function MC(e) {
	return /^(table|td|th)$/.test(wC(e));
}
function NC(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var PC = /transform|translate|scale|rotate|perspective|filter/, FC = /paint|layout|strict|content/, IC = (e) => !!e && e !== "none", LC;
function RC(e) {
	let t = OC(e) ? HC(e) : e;
	return IC(t.transform) || IC(t.translate) || IC(t.scale) || IC(t.rotate) || IC(t.perspective) || !BC() && (IC(t.backdropFilter) || IC(t.filter)) || PC.test(t.willChange || "") || FC.test(t.contain || "");
}
function zC(e) {
	let t = WC(e);
	for (; kC(t) && !VC(t);) {
		if (RC(t)) return t;
		if (NC(t)) return null;
		t = WC(t);
	}
	return null;
}
function BC() {
	return LC ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), LC;
}
function VC(e) {
	return /^(html|body|#document)$/.test(wC(e));
}
function HC(e) {
	return TC(e).getComputedStyle(e);
}
function UC(e) {
	return OC(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function WC(e) {
	if (wC(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || AC(e) && e.host || EC(e);
	return AC(t) ? t.host : t;
}
function GC(e) {
	let t = WC(e);
	return VC(t) ? (e.ownerDocument || e).body : kC(t) && jC(t) ? t : GC(t);
}
function KC(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = GC(e), i = r === e.ownerDocument?.body, a = TC(r);
	if (i) {
		let e = qC(a);
		return t.concat(a, a.visualViewport || [], jC(r) ? r : [], e && n ? KC(e) : []);
	} else return t.concat(r, KC(r, [], n));
}
function qC(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function JC(e) {
	let t = HC(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = kC(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = LS(n) !== a || LS(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function YC(e) {
	return OC(e) ? e : e.contextElement;
}
function XC(e) {
	let t = YC(e);
	if (!kC(t)) return zS(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = JC(t), o = (a ? LS(n.width) : n.width) / r, s = (a ? LS(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var ZC = /*#__PURE__*/ zS(0);
function QC(e) {
	let t = TC(e);
	return !BC() || !t.visualViewport ? ZC : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function $C(e, t, n) {
	return t === void 0 && (t = !1), !!n && t && n === TC(e);
}
function ew(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = YC(e), o = zS(1);
	t && (r ? OC(r) && (o = XC(r)) : o = XC(e));
	let s = $C(a, n, r) ? QC(a) : zS(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a && r) {
		let e = TC(a), t = OC(r) ? TC(r) : r, n = e, i = qC(n);
		for (; i && t !== n;) {
			let e = XC(i), t = i.getBoundingClientRect(), r = HC(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = TC(i), i = qC(n);
		}
	}
	return sC({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function tw(e, t) {
	let n = UC(e).scrollLeft;
	return t ? t.left + n : ew(EC(e)).left + n;
}
function nw(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - tw(e, n),
		y: n.top + t.scrollTop
	};
}
function rw(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = EC(r), s = t ? NC(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = zS(1), u = zS(0), d = kC(r);
	if ((d || !a) && ((wC(r) !== "body" || jC(o)) && (c = UC(r)), d)) {
		let e = ew(r);
		l = XC(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? nw(o, c) : zS(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function iw(e) {
	return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function aw(e) {
	let t = UC(e), n = e.ownerDocument.body, r = IS(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), i = IS(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight), a = -t.scrollLeft + tw(e), o = -t.scrollTop;
	return HC(n).direction === "rtl" && (a += IS(e.clientWidth, n.clientWidth) - r), {
		width: r,
		height: i,
		x: a,
		y: o
	};
}
var ow = 25;
function sw(e, t, n) {
	n === void 0 && (n = "viewport");
	let r = n === "layoutViewport", i = TC(e), a = EC(e), o = i.visualViewport, s = a.clientWidth, c = a.clientHeight, l = 0, u = 0;
	if (o) {
		let e = !BC() || t === "fixed";
		r ? e || (l = -o.offsetLeft, u = -o.offsetTop) : (s = o.width, c = o.height, e && (l = o.offsetLeft, u = o.offsetTop));
	}
	if (tw(a) <= 0) {
		let e = a.ownerDocument, t = e.body, n = getComputedStyle(t), r = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, i = Math.abs(a.clientWidth - t.clientWidth - r), o = getComputedStyle(a).scrollbarGutter === "stable both-edges" ? i / 2 : i;
		o <= ow && (s -= o);
	}
	return {
		width: s,
		height: c,
		x: l,
		y: u
	};
}
function cw(e, t) {
	let n = ew(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = XC(e);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function lw(e, t, n) {
	let r;
	if (t === "viewport" || t === "layoutViewport") r = sw(e, n, t);
	else if (t === "document") r = aw(EC(e));
	else if (OC(t)) r = cw(t, n);
	else {
		let n = QC(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return sC(r);
}
function uw(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = KC(e, [], !1).filter((e) => OC(e) && wC(e) !== "body"), i = null, a = HC(e).position === "fixed", o = a ? WC(e) : e;
	for (; OC(o) && !VC(o);) {
		let e = HC(o), t = RC(o), n = i ? i.position : a ? "fixed" : "";
		!t && (n === "fixed" || n === "absolute" && e.position === "static") ? r = r.filter((e) => e !== o) : i = e, o = WC(o);
	}
	return t.set(e, r), r;
}
function dw(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? NC(t) ? [] : uw(t, this._c) : [].concat(n), r], o = lw(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = lw(t, a[e], i);
		s = IS(n.top, s), c = FS(n.right, c), l = FS(n.bottom, l), u = IS(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function fw(e) {
	let { width: t, height: n } = JC(e);
	return {
		width: t,
		height: n
	};
}
function pw(e, t, n) {
	let r = kC(t), i = EC(t), a = n === "fixed", o = ew(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = zS(0);
	if ((r || !a) && ((wC(t) !== "body" || jC(i)) && (s = UC(t)), r)) {
		let e = ew(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	}
	!r && i && (c.x = tw(i));
	let l = i && !r && !a ? nw(i, s) : zS(0);
	return {
		x: o.left + s.scrollLeft - c.x - l.x,
		y: o.top + s.scrollTop - c.y - l.y,
		width: o.width,
		height: o.height
	};
}
function mw(e) {
	return HC(e).position === "static";
}
function hw(e, t) {
	if (!kC(e) || HC(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return EC(e) === n && (n = n.ownerDocument.body), n;
}
function gw(e, t) {
	let n = TC(e);
	if (NC(e)) return n;
	if (!kC(e)) {
		let t = WC(e);
		for (; t && !VC(t);) {
			if (OC(t) && !mw(t)) return t;
			t = WC(t);
		}
		return n;
	}
	let r = hw(e, t);
	for (; r && MC(r) && mw(r);) r = hw(r, t);
	return r && VC(r) && mw(r) && !RC(r) ? n : r || zC(e) || n;
}
var _w = async function(e) {
	let t = this.getOffsetParent || gw, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: pw(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function vw(e) {
	return HC(e).direction === "rtl";
}
var yw = {
	convertOffsetParentRelativeRectToViewportRelativeRect: rw,
	getDocumentElement: EC,
	getClippingRect: dw,
	getOffsetParent: gw,
	getElementRects: _w,
	getClientRects: iw,
	getDimensions: fw,
	getScale: XC,
	isElement: OC,
	isRTL: vw
};
function bw(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function xw(e, t, n) {
	let r = null, i, a = EC(e);
	function o() {
		var e;
		clearTimeout(i), (e = r) == null || e.disconnect(), r = null;
	}
	function s(n, c) {
		n === void 0 && (n = !1), c === void 0 && (c = 1), o();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (n || t(), !f || !p) return;
		let m = RS(d), h = RS(a.clientWidth - (u + f)), g = RS(a.clientHeight - (d + p)), _ = RS(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: IS(0, FS(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (!bw(l, e.getBoundingClientRect())) return s();
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
	let c = TC(e), l = () => s(n);
	return c.addEventListener("resize", l), s(!0), () => {
		c.removeEventListener("resize", l), o();
	};
}
function Sw(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = YC(e), u = i || a ? [...l ? KC(l) : [], ...t ? KC(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n), a && e.addEventListener("resize", n);
	});
	let d = l && s ? xw(l, n, a) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? ew(e) : null;
	c && g();
	function g() {
		let t = ew(e);
		h && !bw(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var Cw = yC, ww = bC, Tw = pC, Ew = SC, Dw = gC, Ow = fC, kw = xC, Aw = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = n ?? {}, a = {
		...yw,
		...i.platform,
		_c: r
	};
	return dC(e, t, {
		...i,
		platform: a
	});
};
function jw(e) {
	return typeof e == "function" ? e() : e;
}
function Mw(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Nw(e, t) {
	let n = Mw(e);
	return Math.round(t * n) / n;
}
function Pw(e) {
	return {
		[`--bits-${e}-content-transform-origin`]: "var(--bits-floating-transform-origin)",
		[`--bits-${e}-content-available-width`]: "var(--bits-floating-available-width)",
		[`--bits-${e}-content-available-height`]: "var(--bits-floating-available-height)",
		[`--bits-${e}-anchor-width`]: "var(--bits-floating-anchor-width)",
		[`--bits-${e}-anchor-height`]: "var(--bits-floating-anchor-height)"
	};
}
function Fw(e) {
	let t = e.whileElementsMounted, n = /* @__PURE__ */ F(() => jw(e.open) ?? !0), r = /* @__PURE__ */ F(() => jw(e.middleware)), i = /* @__PURE__ */ F(() => jw(e.transform) ?? !0), a = /* @__PURE__ */ F(() => jw(e.placement) ?? "bottom"), o = /* @__PURE__ */ F(() => jw(e.strategy) ?? "absolute"), s = /* @__PURE__ */ F(() => jw(e.sideOffset) ?? 0), c = /* @__PURE__ */ F(() => jw(e.alignOffset) ?? 0), l = e.reference, u = /* @__PURE__ */ L(0), d = /* @__PURE__ */ L(0), f = my(null), p = /* @__PURE__ */ L(En(U(o))), m = /* @__PURE__ */ L(En(U(a))), h = /* @__PURE__ */ L(En({})), g = /* @__PURE__ */ L(!1), _ = !1, v = 0, y = /* @__PURE__ */ F(() => {
		let e = f.current ? Nw(f.current, U(u)) : U(u), t = f.current ? Nw(f.current, U(d)) : U(d);
		return U(i) ? {
			position: U(p),
			left: "0",
			top: "0",
			transform: `translate(${e}px, ${t}px)`,
			...f.current && Mw(f.current) >= 1.5 && { willChange: "transform" }
		} : {
			position: U(p),
			left: `${e}px`,
			top: `${t}px`
		};
	}), b;
	function x() {
		if (l.current === null || f.current === null) return;
		let e = l.current, t = f.current, i = ++v;
		Aw(e, t, {
			middleware: U(r),
			placement: U(a),
			strategy: U(o)
		}).then((r) => {
			if (i === v && !(l.current !== e || f.current !== t)) {
				if (Iw(e)) {
					R(h, {
						...U(h),
						hide: {
							...U(h).hide,
							referenceHidden: !0
						}
					}, !0);
					return;
				}
				if (!U(n) && U(u) !== 0 && U(d) !== 0) {
					let e = Math.max(Math.abs(U(s)), Math.abs(U(c)), 15);
					if (r.x <= e && r.y <= e) return;
				}
				R(u, r.x, !0), R(d, r.y, !0), R(p, r.strategy, !0), R(m, r.placement, !0), R(h, r.middlewareData, !0), R(g, !0);
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
		U(n) && (l.current === null || f.current === null || (b = t(l.current, f.current, x)));
	}
	function w() {
		!U(n) && f.current === null && R(g, !1);
	}
	function T() {
		return [
			U(r),
			U(a),
			U(o),
			U(s),
			U(c),
			U(n)
		];
	}
	return Kn(() => {
		t === void 0 && U(n) && x();
	}), Kn(C), Kn(() => {
		if (t !== void 0) {
			if (T(), !U(n)) {
				_ = !1;
				return;
			}
			if (!U(g)) {
				_ = !1;
				return;
			}
			if (!_) {
				_ = !0;
				return;
			}
			x();
		}
	}), Kn(w), Kn(() => S), {
		floating: f,
		reference: l,
		get strategy() {
			return U(p);
		},
		get placement() {
			return U(m);
		},
		get middlewareData() {
			return U(h);
		},
		get isPositioned() {
			return U(g);
		},
		get floatingStyles() {
			return U(y);
		},
		get update() {
			return x;
		}
	};
}
function Iw(e) {
	return e instanceof Element ? !e.isConnected || e instanceof HTMLElement && e.hidden ? !0 : e.getClientRects().length === 0 : !1;
}
var Lw = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
}, Rw = new Ly("Floating.Root"), zw = new Ly("Floating.Content"), Bw = new Ly("Floating.Root"), Vw = class e {
	static create(t = !1) {
		return t ? Bw.set(new e()) : Rw.set(new e());
	}
	anchorNode = my(null);
	customAnchorNode = my(null);
	triggerNode = my(null);
	constructor() {
		Kn(() => {
			this.customAnchorNode.current ? typeof this.customAnchorNode.current == "string" ? this.anchorNode.current = document.querySelector(this.customAnchorNode.current) : this.anchorNode.current = this.customAnchorNode.current : this.anchorNode.current = this.triggerNode.current;
		});
	}
}, Hw = class e {
	static create(t, n = !1) {
		return n ? zw.set(new e(t, Bw.get())) : zw.set(new e(t, Rw.get()));
	}
	opts;
	root;
	contentRef = my(null);
	wrapperRef = my(null);
	arrowRef = my(null);
	contentAttachment = gb(this.contentRef);
	wrapperAttachment = gb(this.wrapperRef);
	arrowAttachment = gb(this.arrowRef);
	arrowId = my(sS());
	#e = /* @__PURE__ */ F(() => {
		if (typeof this.opts.style == "string") return wy(this.opts.style);
		if (!this.opts.style) return {};
	});
	#t = void 0;
	#n = new Ky(() => this.arrowRef.current ?? void 0);
	#r = /* @__PURE__ */ F(() => this.#n?.width ?? 0);
	#i = /* @__PURE__ */ F(() => this.#n?.height ?? 0);
	#a = /* @__PURE__ */ F(() => this.opts.side?.current + (this.opts.align.current === "center" ? "" : `-${this.opts.align.current}`));
	#o = /* @__PURE__ */ F(() => Array.isArray(this.opts.collisionBoundary.current) ? this.opts.collisionBoundary.current : [this.opts.collisionBoundary.current]);
	#s = /* @__PURE__ */ F(() => U(this.#o).length > 0);
	get hasExplicitBoundaries() {
		return U(this.#s);
	}
	set hasExplicitBoundaries(e) {
		R(this.#s, e);
	}
	#c = /* @__PURE__ */ F(() => ({
		padding: this.opts.collisionPadding.current,
		boundary: U(this.#o).filter(Fb),
		altBoundary: this.hasExplicitBoundaries
	}));
	get detectOverflowOptions() {
		return U(this.#c);
	}
	set detectOverflowOptions(e) {
		R(this.#c, e);
	}
	#l = /* @__PURE__ */ L(void 0);
	#u = /* @__PURE__ */ L(void 0);
	#d = /* @__PURE__ */ L(void 0);
	#f = /* @__PURE__ */ L(void 0);
	#p = /* @__PURE__ */ F(() => [
		Cw({
			mainAxis: this.opts.sideOffset.current + U(this.#i),
			alignmentAxis: this.opts.alignOffset.current
		}),
		this.opts.avoidCollisions.current && ww({
			mainAxis: !0,
			crossAxis: !1,
			limiter: this.opts.sticky.current === "partial" ? kw() : void 0,
			...this.detectOverflowOptions
		}),
		this.opts.avoidCollisions.current && Tw({ ...this.detectOverflowOptions }),
		Ew({
			...this.detectOverflowOptions,
			apply: ({ rects: e, availableWidth: t, availableHeight: n }) => {
				let { width: r, height: i } = e.reference;
				R(this.#l, t, !0), R(this.#u, n, !0), R(this.#d, r, !0), R(this.#f, i, !0);
			}
		}),
		this.arrowRef.current && Ow({
			element: this.arrowRef.current,
			padding: this.opts.arrowPadding.current
		}),
		Ww({
			arrowWidth: U(this.#r),
			arrowHeight: U(this.#i)
		}),
		this.opts.hideWhenDetached.current && Dw({
			strategy: "referenceHidden",
			...this.detectOverflowOptions
		})
	].filter(Boolean));
	get middleware() {
		return U(this.#p);
	}
	set middleware(e) {
		R(this.#p, e);
	}
	floating;
	#m = /* @__PURE__ */ F(() => Kw(this.floating.placement));
	get placedSide() {
		return U(this.#m);
	}
	set placedSide(e) {
		R(this.#m, e);
	}
	#h = /* @__PURE__ */ F(() => qw(this.floating.placement));
	get placedAlign() {
		return U(this.#h);
	}
	set placedAlign(e) {
		R(this.#h, e);
	}
	#g = /* @__PURE__ */ F(() => this.floating.middlewareData.arrow?.x ?? 0);
	get arrowX() {
		return U(this.#g);
	}
	set arrowX(e) {
		R(this.#g, e);
	}
	#_ = /* @__PURE__ */ F(() => this.floating.middlewareData.arrow?.y ?? 0);
	get arrowY() {
		return U(this.#_);
	}
	set arrowY(e) {
		R(this.#_, e);
	}
	#v = /* @__PURE__ */ F(() => this.floating.middlewareData.arrow?.centerOffset !== 0);
	get cannotCenterArrow() {
		return U(this.#v);
	}
	set cannotCenterArrow(e) {
		R(this.#v, e);
	}
	#y = /* @__PURE__ */ L();
	get contentZIndex() {
		return U(this.#y);
	}
	set contentZIndex(e) {
		R(this.#y, e, !0);
	}
	#b = /* @__PURE__ */ F(() => Lw[this.placedSide]);
	get arrowBaseSide() {
		return U(this.#b);
	}
	set arrowBaseSide(e) {
		R(this.#b, e);
	}
	#x = /* @__PURE__ */ F(() => ({
		id: this.opts.wrapperId.current,
		"data-bits-floating-content-wrapper": "",
		style: {
			...this.floating.floatingStyles,
			transform: this.floating.isPositioned ? this.floating.floatingStyles.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: this.contentZIndex,
			"--bits-floating-transform-origin": `${this.floating.middlewareData.transformOrigin?.x} ${this.floating.middlewareData.transformOrigin?.y}`,
			"--bits-floating-available-width": `${U(this.#l)}px`,
			"--bits-floating-available-height": `${U(this.#u)}px`,
			"--bits-floating-anchor-width": `${U(this.#d)}px`,
			"--bits-floating-anchor-height": `${U(this.#f)}px`,
			...this.floating.middlewareData.hide?.referenceHidden && {
				visibility: "hidden",
				"pointer-events": "none"
			},
			...U(this.#e)
		},
		dir: this.opts.dir.current,
		...this.wrapperAttachment
	}));
	get wrapperProps() {
		return U(this.#x);
	}
	set wrapperProps(e) {
		R(this.#x, e);
	}
	#S = /* @__PURE__ */ F(() => ({
		"data-side": this.placedSide,
		"data-align": this.placedAlign,
		style: ky({ ...U(this.#e) }),
		...this.contentAttachment
	}));
	get props() {
		return U(this.#S);
	}
	set props(e) {
		R(this.#S, e);
	}
	#C = /* @__PURE__ */ F(() => ({
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
		return U(this.#C);
	}
	set arrowStyle(e) {
		R(this.#C, e);
	}
	constructor(e, t) {
		this.opts = e, this.root = t, this.#t = e.updatePositionStrategy, e.customAnchor && (this.root.customAnchorNode.current = e.customAnchor.current), Vy(() => e.customAnchor.current, (e) => {
			this.root.customAnchorNode.current = e;
		}), this.floating = Fw({
			strategy: () => this.opts.strategy.current,
			placement: () => U(this.#a),
			middleware: () => this.middleware,
			reference: this.root.anchorNode,
			whileElementsMounted: (...e) => Sw(...e, { animationFrame: this.#t?.current === "always" }),
			open: () => this.opts.enabled.current,
			sideOffset: () => this.opts.sideOffset.current,
			alignOffset: () => this.opts.alignOffset.current
		}), Kn(() => {
			this.floating.isPositioned && this.opts.onPlaced?.current();
		}), Vy(() => this.contentRef.current, (e) => {
			if (!e || !this.opts.enabled.current) return;
			let t = pb(e), n = t.requestAnimationFrame(() => {
				if (this.contentRef.current !== e || !this.opts.enabled.current) return;
				let n = t.getComputedStyle(e).zIndex;
				n !== this.contentZIndex && (this.contentZIndex = n);
			});
			return () => {
				t.cancelAnimationFrame(n);
			};
		}), Kn(() => {
			this.floating.floating.current = this.wrapperRef.current;
		});
	}
}, Uw = class e {
	static create(t, n = !1) {
		return n ? new e(t, Bw.get()) : new e(t, Rw.get());
	}
	opts;
	root;
	constructor(e, t) {
		this.opts = e, this.root = t, e.virtualEl && e.virtualEl.current ? t.triggerNode = py(e.virtualEl.current) : t.triggerNode = e.ref;
	}
};
function Ww(e) {
	return {
		name: "transformOrigin",
		options: e,
		fn(t) {
			let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = Gw(n), u = {
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
function Gw(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
function Kw(e) {
	return Gw(e)[0];
}
function qw(e) {
	return Gw(e)[1];
}
function Jw(e, t) {
	N(t, !0);
	let n = X(t, "children", 7), r = X(t, "tooltip", 7, !1);
	Vw.create(r());
	var i = {
		get children() {
			return n();
		},
		set children(e) {
			n(e), I();
		},
		get tooltip() {
			return r();
		},
		set tooltip(e = !1) {
			r(e), I();
		}
	}, a = K();
	return Di(B(a), () => n() ?? T), q(e, a), P(i);
}
Z(Jw, {
	children: {},
	tooltip: {}
}, [], [], { mode: "open" });
var Yw = class {
	#e;
	#t = /* @__PURE__ */ F(() => this.#e.candidateValues());
	#n;
	constructor(e) {
		this.#e = e, this.#n = Rx("", {
			afterMs: 1e3,
			getWindow: this.#e.getWindow
		}), this.handleTypeaheadSearch = this.handleTypeaheadSearch.bind(this), this.resetTypeahead = this.resetTypeahead.bind(this);
	}
	handleTypeaheadSearch(e) {
		if (!this.#e.enabled() || !U(this.#t).length) return;
		this.#n.current = this.#n.current + e;
		let t = this.#e.getCurrentItem(), n = U(this.#t).find((e) => e === t) ?? "", r = Fx(U(this.#t).map((e) => e ?? ""), this.#n.current, n), i = U(this.#t).find((e) => e === r);
		return i && this.#e.onMatch(i), i;
	}
	resetTypeahead() {
		this.#n.current = "";
	}
}, Xw = [
	Tb,
	kb,
	Db
], Zw = [
	Eb,
	Ob,
	"End"
], Qw = [...Xw, ...Zw], $w = wb({
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
}), eT = new Ly("Select.Root | Combobox.Root");
new Ly("Select.Group | Combobox.Group");
var tT = new Ly("Select.Content | Combobox.Content"), nT = class {
	opts;
	#e = /* @__PURE__ */ L(!1);
	get touchedInput() {
		return U(this.#e);
	}
	set touchedInput(e) {
		R(this.#e, e, !0);
	}
	#t = /* @__PURE__ */ L(null);
	get inputNode() {
		return U(this.#t);
	}
	set inputNode(e) {
		R(this.#t, e, !0);
	}
	#n = /* @__PURE__ */ L(null);
	get contentNode() {
		return U(this.#n);
	}
	set contentNode(e) {
		R(this.#n, e, !0);
	}
	contentPresence;
	#r = /* @__PURE__ */ L(null);
	get viewportNode() {
		return U(this.#r);
	}
	set viewportNode(e) {
		R(this.#r, e, !0);
	}
	#i = /* @__PURE__ */ L(null);
	get triggerNode() {
		return U(this.#i);
	}
	set triggerNode(e) {
		R(this.#i, e, !0);
	}
	#a = /* @__PURE__ */ L(null);
	get valueNode() {
		return U(this.#a);
	}
	set valueNode(e) {
		R(this.#a, e, !0);
	}
	#o = /* @__PURE__ */ L("");
	get valueId() {
		return U(this.#o);
	}
	set valueId(e) {
		R(this.#o, e, !0);
	}
	#s = /* @__PURE__ */ L(null);
	get highlightedNode() {
		return U(this.#s);
	}
	set highlightedNode(e) {
		R(this.#s, e, !0);
	}
	#c = /* @__PURE__ */ F(() => this.highlightedNode ? this.highlightedNode.getAttribute("data-value") : null);
	get highlightedValue() {
		return U(this.#c);
	}
	set highlightedValue(e) {
		R(this.#c, e);
	}
	#l = /* @__PURE__ */ F(() => {
		if (this.highlightedNode) return this.highlightedNode.id;
	});
	get highlightedId() {
		return U(this.#l);
	}
	set highlightedId(e) {
		R(this.#l, e);
	}
	#u = /* @__PURE__ */ F(() => this.highlightedNode ? this.highlightedNode.getAttribute("data-label") : null);
	get highlightedLabel() {
		return U(this.#u);
	}
	set highlightedLabel(e) {
		R(this.#u, e);
	}
	#d = /* @__PURE__ */ L(!1);
	get contentIsPositioned() {
		return U(this.#d);
	}
	set contentIsPositioned(e) {
		R(this.#d, e, !0);
	}
	isUsingKeyboard = !1;
	isCombobox = !1;
	domContext = new hb(() => null);
	constructor(e) {
		this.opts = e, this.isCombobox = e.isCombobox, this.contentPresence = new Lb({
			ref: $(() => this.contentNode),
			open: this.opts.open,
			onComplete: () => {
				this.opts.onOpenChangeComplete.current(this.opts.open.current);
			}
		}), Jn(() => {
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
	getBitsAttr = (e) => $w.getAttr(e, this.isCombobox ? "combobox" : void 0);
}, rT = class extends nT {
	opts;
	isMulti = !1;
	#e = /* @__PURE__ */ F(() => this.opts.value.current !== "");
	get hasValue() {
		return U(this.#e);
	}
	set hasValue(e) {
		R(this.#e, e);
	}
	#t = /* @__PURE__ */ F(() => this.opts.items.current.length ? this.opts.items.current.find((e) => e.value === this.opts.value.current)?.label ?? "" : "");
	get currentLabel() {
		return U(this.#t);
	}
	set currentLabel(e) {
		R(this.#t, e);
	}
	#n = /* @__PURE__ */ F(() => this.opts.items.current.length ? this.opts.items.current.filter((e) => !e.disabled).map((e) => e.label) : []);
	get candidateLabels() {
		return U(this.#n);
	}
	set candidateLabels(e) {
		R(this.#n, e);
	}
	#r = /* @__PURE__ */ F(() => !(this.isMulti || this.opts.items.current.length === 0));
	get dataTypeaheadEnabled() {
		return U(this.#r);
	}
	set dataTypeaheadEnabled(e) {
		R(this.#r, e);
	}
	constructor(e) {
		super(e), this.opts = e, Kn(() => {
			!this.opts.open.current && this.highlightedNode && this.setHighlightedNode(null);
		}), Vy(() => this.opts.open.current, () => {
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
		nb(() => {
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
}, iT = class extends nT {
	opts;
	isMulti = !0;
	#e = /* @__PURE__ */ F(() => this.opts.value.current.length > 0);
	get hasValue() {
		return U(this.#e);
	}
	set hasValue(e) {
		R(this.#e, e);
	}
	constructor(e) {
		super(e), this.opts = e, Kn(() => {
			!this.opts.open.current && this.highlightedNode && this.setHighlightedNode(null);
		}), Vy(() => this.opts.open.current, () => {
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
		nb(() => {
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
}, aT = class {
	static create(e) {
		let { type: t, ...n } = e, r = t === "single" ? new rT(n) : new iT(n);
		return eT.set(r);
	}
}, oT = class e {
	static create(t) {
		return new e(t, eT.get());
	}
	opts;
	root;
	attachment;
	#e;
	#t;
	constructor(e, t) {
		this.opts = e, this.root = t, this.attachment = gb(e.ref, (e) => this.root.triggerNode = e), this.root.domContext = new hb(e.ref), this.#e = new zx({
			getCurrentItem: () => this.root.highlightedNode,
			onMatch: (e) => {
				this.root.setHighlightedNode(e);
			},
			getActiveElement: () => this.root.domContext.getActiveElement(),
			getWindow: () => this.root.domContext.getWindow()
		}), this.#t = new Yw({
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
		if (e.key === "ArrowUp" && e.altKey && this.root.handleClose(), Qw.includes(e.key)) {
			e.preventDefault();
			let t = this.root.getCandidateNodes(), n = this.root.highlightedNode, r = n ? t.indexOf(n) : -1, i = this.root.opts.loop.current, a;
			if (e.key === "ArrowDown" ? a = jx(t, r, i) : e.key === "ArrowUp" ? a = Mx(t, r, i) : e.key === "PageDown" ? a = Nx(t, r, 10, i) : e.key === "PageUp" ? a = Px(t, r, 10, i) : e.key === "Home" ? a = t[0] : e.key === "End" && (a = t[t.length - 1]), !a) return;
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
	#a = /* @__PURE__ */ F(() => ({
		id: this.opts.id.current,
		disabled: this.root.opts.disabled.current ? !0 : void 0,
		"aria-haspopup": "listbox",
		"aria-expanded": _b(this.root.opts.open.current),
		"aria-activedescendant": this.root.highlightedId,
		"data-state": bb(this.root.opts.open.current),
		"data-disabled": vb(this.root.opts.disabled.current),
		"data-placeholder": this.root.hasValue ? void 0 : "",
		[this.root.getBitsAttr("trigger")]: "",
		onpointerdown: this.onpointerdown,
		onkeydown: this.onkeydown,
		onclick: this.onclick,
		onpointerup: this.onpointerup,
		...this.attachment
	}));
	get props() {
		return U(this.#a);
	}
	set props(e) {
		R(this.#a, e);
	}
}, sT = class e {
	static create(t) {
		return tT.set(new e(t, eT.get()));
	}
	opts;
	root;
	attachment;
	#e = /* @__PURE__ */ L(!1);
	get isPositioned() {
		return U(this.#e);
	}
	set isPositioned(e) {
		R(this.#e, e, !0);
	}
	domContext;
	constructor(e, t) {
		this.opts = e, this.root = t, this.attachment = gb(e.ref, (e) => this.root.contentNode = e), this.domContext = new hb(this.opts.ref), this.root.domContext === null && (this.root.domContext = this.domContext), $y(() => {
			this.root.contentNode = null, this.root.contentIsPositioned = !1, this.isPositioned = !1;
		}), Vy(() => this.root.opts.open.current, () => {
			this.root.opts.open.current || (this.root.contentIsPositioned = !1, this.isPositioned = !1);
		}), Vy([() => this.isPositioned, () => this.root.highlightedNode], () => {
			!this.isPositioned || !this.root.highlightedNode || this.root.scrollHighlightedNodeIntoView(this.root.highlightedNode);
		}), this.onpointermove = this.onpointermove.bind(this);
	}
	onpointermove(e) {
		this.root.isUsingKeyboard = !1;
	}
	#t = /* @__PURE__ */ F(() => Pw(this.root.isCombobox ? "combobox" : "select"));
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
	#n = /* @__PURE__ */ F(() => ({ open: this.root.opts.open.current }));
	get snippetProps() {
		return U(this.#n);
	}
	set snippetProps(e) {
		R(this.#n, e);
	}
	#r = /* @__PURE__ */ F(() => ({
		id: this.opts.id.current,
		role: "listbox",
		"aria-multiselectable": this.root.isMulti ? "true" : void 0,
		"data-state": bb(this.root.opts.open.current),
		...xb(this.root.contentPresence.transitionStatus),
		[this.root.getBitsAttr("content")]: "",
		style: {
			display: "flex",
			flexDirection: "column",
			outline: "none",
			boxSizing: "border-box",
			pointerEvents: "auto",
			...U(this.#t)
		},
		onpointermove: this.onpointermove,
		...this.attachment
	}));
	get props() {
		return U(this.#r);
	}
	set props(e) {
		R(this.#r, e);
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
}, cT = class e {
	static create(t) {
		return new e(t, eT.get());
	}
	opts;
	root;
	attachment;
	#e = /* @__PURE__ */ F(() => this.root.includesItem(this.opts.value.current));
	get isSelected() {
		return U(this.#e);
	}
	set isSelected(e) {
		R(this.#e, e);
	}
	#t = /* @__PURE__ */ F(() => this.root.highlightedValue === this.opts.value.current);
	get isHighlighted() {
		return U(this.#t);
	}
	set isHighlighted(e) {
		R(this.#t, e);
	}
	prevHighlighted = new qy(() => this.isHighlighted);
	#n = /* @__PURE__ */ L(!1);
	get mounted() {
		return U(this.#n);
	}
	set mounted(e) {
		R(this.#n, e, !0);
	}
	constructor(e, t) {
		this.opts = e, this.root = t, this.attachment = gb(e.ref), Vy([() => this.isHighlighted, () => this.prevHighlighted.current], () => {
			this.isHighlighted ? this.opts.onHighlight.current() : this.prevHighlighted.current && this.opts.onUnhighlight.current();
		}), Vy(() => this.mounted, () => {
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
	#r = /* @__PURE__ */ F(() => ({
		selected: this.isSelected,
		highlighted: this.isHighlighted
	}));
	get snippetProps() {
		return U(this.#r);
	}
	set snippetProps(e) {
		R(this.#r, e);
	}
	onpointerdown(e) {
		e.preventDefault();
	}
	onpointerup(e) {
		if (!(e.defaultPrevented || !this.opts.ref.current)) {
			if (e.pointerType === "touch" && !jb) {
				Xr(this.opts.ref.current, "click", () => {
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
	#i = /* @__PURE__ */ F(() => ({
		id: this.opts.id.current,
		role: "option",
		"aria-selected": this.root.includesItem(this.opts.value.current) ? "true" : void 0,
		"data-value": this.opts.value.current,
		"data-disabled": vb(this.opts.disabled.current),
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
		return U(this.#i);
	}
	set props(e) {
		R(this.#i, e);
	}
}, lT = class e {
	static create(t) {
		return new e(t, eT.get());
	}
	opts;
	root;
	#e = /* @__PURE__ */ F(() => this.root.opts.name.current !== "");
	get shouldRender() {
		return U(this.#e);
	}
	set shouldRender(e) {
		R(this.#e, e);
	}
	constructor(e, t) {
		this.opts = e, this.root = t, this.onfocus = this.onfocus.bind(this);
	}
	onfocus(e) {
		e.preventDefault(), this.root.isCombobox ? this.root.inputNode?.focus() : this.root.triggerNode?.focus();
	}
	#t = /* @__PURE__ */ F(() => ({
		disabled: yb(this.root.opts.disabled.current),
		required: yb(this.root.opts.required.current),
		name: this.root.opts.name.current,
		value: this.opts.value.current,
		onfocus: this.onfocus
	}));
	get props() {
		return U(this.#t);
	}
	set props(e) {
		R(this.#t, e);
	}
}, uT = class e {
	static create(t) {
		return new e(t, tT.get());
	}
	opts;
	content;
	root;
	attachment;
	#e = /* @__PURE__ */ L(0);
	get prevScrollTop() {
		return U(this.#e);
	}
	set prevScrollTop(e) {
		R(this.#e, e, !0);
	}
	constructor(e, t) {
		this.opts = e, this.content = t, this.root = t.root, this.attachment = gb(e.ref, (e) => {
			this.root.viewportNode = e;
		});
	}
	#t = /* @__PURE__ */ F(() => ({
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
		return U(this.#t);
	}
	set props(e) {
		R(this.#t, e);
	}
};
function dT(e, t) {
	N(t, !0);
	let n = X(t, "value", 15), r = X(t, "autocomplete", 7), i = lT.create({ value: $(() => n()) });
	var a = {
		get value() {
			return n();
		},
		set value(e) {
			n(e), I();
		},
		get autocomplete() {
			return r();
		},
		set autocomplete(e) {
			r(e), I();
		}
	}, o = K(), s = B(o), c = (e) => {
		OS(e, Ga(() => i.props, {
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
	}), q(e, o), P(a);
}
Z(dT, {
	value: {},
	autocomplete: {}
}, [], [], { mode: "open" });
function fT(e, t) {
	N(t, !0);
	let n = X(t, "id", 7), r = X(t, "children", 7), i = X(t, "virtualEl", 7), a = X(t, "ref", 7), o = X(t, "tooltip", 7, !1);
	Uw.create({
		id: $(() => n()),
		virtualEl: $(() => i()),
		ref: a()
	}, o());
	var s = {
		get id() {
			return n();
		},
		set id(e) {
			n(e), I();
		},
		get children() {
			return r();
		},
		set children(e) {
			r(e), I();
		},
		get virtualEl() {
			return i();
		},
		set virtualEl(e) {
			i(e), I();
		},
		get ref() {
			return a();
		},
		set ref(e) {
			a(e), I();
		},
		get tooltip() {
			return o();
		},
		set tooltip(e = !1) {
			o(e), I();
		}
	}, c = K();
	return Di(B(c), () => r() ?? T), q(e, c), P(s);
}
Z(fT, {
	id: {},
	children: {},
	virtualEl: {},
	ref: {},
	tooltip: {}
}, [], [], { mode: "open" });
function pT(e, t) {
	N(t, !0);
	let n = X(t, "content", 7), r = X(t, "side", 7, "bottom"), i = X(t, "sideOffset", 7, 0), a = X(t, "align", 7, "center"), o = X(t, "alignOffset", 7, 0), s = X(t, "id", 7), c = X(t, "arrowPadding", 7, 0), l = X(t, "avoidCollisions", 7, !0), u = X(t, "collisionBoundary", 23, () => []), d = X(t, "collisionPadding", 7, 0), f = X(t, "hideWhenDetached", 7, !1), p = X(t, "onPlaced", 7, () => {}), m = X(t, "sticky", 7, "partial"), h = X(t, "updatePositionStrategy", 7, "optimized"), g = X(t, "strategy", 7, "fixed"), _ = X(t, "dir", 7, "ltr"), v = X(t, "style", 23, () => ({})), y = X(t, "wrapperId", 23, sS), b = X(t, "customAnchor", 7, null), x = X(t, "enabled", 7), S = X(t, "tooltip", 7, !1), C = Hw.create({
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
	}, S()), w = /* @__PURE__ */ F(() => My(C.wrapperProps, { style: { pointerEvents: "auto" } }));
	var E = {
		get content() {
			return n();
		},
		set content(e) {
			n(e), I();
		},
		get side() {
			return r();
		},
		set side(e = "bottom") {
			r(e), I();
		},
		get sideOffset() {
			return i();
		},
		set sideOffset(e = 0) {
			i(e), I();
		},
		get align() {
			return a();
		},
		set align(e = "center") {
			a(e), I();
		},
		get alignOffset() {
			return o();
		},
		set alignOffset(e = 0) {
			o(e), I();
		},
		get id() {
			return s();
		},
		set id(e) {
			s(e), I();
		},
		get arrowPadding() {
			return c();
		},
		set arrowPadding(e = 0) {
			c(e), I();
		},
		get avoidCollisions() {
			return l();
		},
		set avoidCollisions(e = !0) {
			l(e), I();
		},
		get collisionBoundary() {
			return u();
		},
		set collisionBoundary(e = []) {
			u(e), I();
		},
		get collisionPadding() {
			return d();
		},
		set collisionPadding(e = 0) {
			d(e), I();
		},
		get hideWhenDetached() {
			return f();
		},
		set hideWhenDetached(e = !1) {
			f(e), I();
		},
		get onPlaced() {
			return p();
		},
		set onPlaced(e = () => {}) {
			p(e), I();
		},
		get sticky() {
			return m();
		},
		set sticky(e = "partial") {
			m(e), I();
		},
		get updatePositionStrategy() {
			return h();
		},
		set updatePositionStrategy(e = "optimized") {
			h(e), I();
		},
		get strategy() {
			return g();
		},
		set strategy(e = "fixed") {
			g(e), I();
		},
		get dir() {
			return _();
		},
		set dir(e = "ltr") {
			_(e), I();
		},
		get style() {
			return v();
		},
		set style(e = {}) {
			v(e), I();
		},
		get wrapperId() {
			return y();
		},
		set wrapperId(e = sS()) {
			y(e), I();
		},
		get customAnchor() {
			return b();
		},
		set customAnchor(e = null) {
			b(e), I();
		},
		get enabled() {
			return x();
		},
		set enabled(e) {
			x(e), I();
		},
		get tooltip() {
			return S();
		},
		set tooltip(e = !1) {
			S(e), I();
		}
	}, D = K();
	return Di(B(D), () => n() ?? T, () => ({
		props: C.props,
		wrapperProps: U(w)
	})), q(e, D), P(E);
}
Z(pT, {
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
function mT(e, t) {
	N(t, !0);
	let n = X(t, "content", 7), r = X(t, "onPlaced", 7);
	Oi(() => {
		r()?.();
	});
	var i = {
		get content() {
			return n();
		},
		set content(e) {
			n(e), I();
		},
		get onPlaced() {
			return r();
		},
		set onPlaced(e) {
			r(e), I();
		}
	}, a = K();
	return Di(B(a), () => n() ?? T, () => ({
		props: {},
		wrapperProps: {}
	})), q(e, a), P(i);
}
Z(mT, {
	content: {},
	onPlaced: {}
}, [], [], { mode: "open" });
var hT = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"content",
	"isStatic",
	"onPlaced"
]);
function gT(e, t) {
	N(t, !0);
	let n = X(t, "content", 7), r = X(t, "isStatic", 7, !1), i = X(t, "onPlaced", 7), a = /* @__PURE__ */ Va(t, hT);
	var o = {
		get content() {
			return n();
		},
		set content(e) {
			n(e), I();
		},
		get isStatic() {
			return r();
		},
		set isStatic(e = !1) {
			r(e), I();
		},
		get onPlaced() {
			return i();
		},
		set onPlaced(e) {
			i(e), I();
		}
	}, s = K(), c = B(s), l = (e) => {
		mT(e, {
			get content() {
				return n();
			},
			get onPlaced() {
				return i();
			}
		});
	}, u = (e) => {
		pT(e, Ga({
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
	}), q(e, s), P(o);
}
Z(gT, {
	content: {},
	isStatic: {},
	onPlaced: {}
}, [], [], { mode: "open" });
var _T = /* @__PURE__ */ new Set(/* @__PURE__ */ "$$slots.$$events.$$legacy.$$host.popper.onEscapeKeydown.escapeKeydownBehavior.preventOverflowTextSelection.id.onPointerDown.onPointerUp.side.sideOffset.align.alignOffset.arrowPadding.avoidCollisions.collisionBoundary.collisionPadding.sticky.hideWhenDetached.updatePositionStrategy.strategy.dir.preventScroll.wrapperId.style.onPlaced.onInteractOutside.onCloseAutoFocus.onOpenAutoFocus.onFocusOutside.interactOutsideBehavior.loop.trapFocus.isValidEvent.customAnchor.isStatic.enabled.ref.tooltip.contentPointerEvents".split(".")), vT = /* @__PURE__ */ W("<!> <!>", 1);
function yT(e, t) {
	N(t, !0);
	let n = X(t, "popper", 7), r = X(t, "onEscapeKeydown", 7), i = X(t, "escapeKeydownBehavior", 7), a = X(t, "preventOverflowTextSelection", 7), o = X(t, "id", 7), s = X(t, "onPointerDown", 7), c = X(t, "onPointerUp", 7), l = X(t, "side", 7), u = X(t, "sideOffset", 7), d = X(t, "align", 7), f = X(t, "alignOffset", 7), p = X(t, "arrowPadding", 7), m = X(t, "avoidCollisions", 7), h = X(t, "collisionBoundary", 7), g = X(t, "collisionPadding", 7), _ = X(t, "sticky", 7), v = X(t, "hideWhenDetached", 7), y = X(t, "updatePositionStrategy", 7), b = X(t, "strategy", 7), x = X(t, "dir", 7), S = X(t, "preventScroll", 7), C = X(t, "wrapperId", 7), w = X(t, "style", 7), E = X(t, "onPlaced", 7), D = X(t, "onInteractOutside", 7), ee = X(t, "onCloseAutoFocus", 7), O = X(t, "onOpenAutoFocus", 7), te = X(t, "onFocusOutside", 7), ne = X(t, "interactOutsideBehavior", 7, "close"), re = X(t, "loop", 7), k = X(t, "trapFocus", 7, !0), ie = X(t, "isValidEvent", 7, () => !1), ae = X(t, "customAnchor", 7, null), oe = X(t, "isStatic", 7, !1), se = X(t, "enabled", 7), ce = X(t, "ref", 7), le = X(t, "tooltip", 7, !1), ue = X(t, "contentPointerEvents", 7, "auto"), de = /* @__PURE__ */ Va(t, _T), fe = /* @__PURE__ */ F(() => S() ?? !0), pe = /* @__PURE__ */ F(() => b() ?? (U(fe) ? "fixed" : "absolute"));
	return gT(e, {
		get isStatic() {
			return oe();
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
			return U(pe);
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
			return E();
		},
		get customAnchor() {
			return ae();
		},
		get enabled() {
			return se();
		},
		get tooltip() {
			return le();
		},
		content: (e, l) => {
			let u = () => (l?.()).props, d = () => (l?.()).wrapperProps;
			var f = vT(), p = B(f), m = (e) => {
				yS(e, { get preventScroll() {
					return U(fe);
				} });
			}, h = (e) => {
				yS(e, { get preventScroll() {
					return U(fe);
				} });
			};
			J(p, (e) => {
				t.forceMount && se() ? e(m) : t.forceMount || e(h, 1);
			}), $x(V(p, 2), {
				get onOpenAutoFocus() {
					return O();
				},
				get onCloseAutoFocus() {
					return ee();
				},
				get loop() {
					return re();
				},
				get enabled() {
					return se();
				},
				get trapFocus() {
					return k();
				},
				get forceMount() {
					return t.forceMount;
				},
				get ref() {
					return ce();
				},
				focusScope: (e, t) => {
					let l = () => (t?.()).props;
					Xx(e, {
						get onEscapeKeydown() {
							return r();
						},
						get escapeKeydownBehavior() {
							return i();
						},
						get enabled() {
							return se();
						},
						get ref() {
							return ce();
						},
						children: (e, t) => {
							qx(e, {
								get id() {
									return o();
								},
								get onInteractOutside() {
									return D();
								},
								get onFocusOutside() {
									return te();
								},
								get interactOutsideBehavior() {
									return ne();
								},
								get isValidEvent() {
									return ie();
								},
								get enabled() {
									return se();
								},
								get ref() {
									return ce();
								},
								children: (e, t) => {
									let r = () => (t?.()).props;
									oS(e, {
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
											return se();
										},
										get ref() {
											return ce();
										},
										children: (e, t) => {
											var i = K(), a = B(i);
											{
												let e = /* @__PURE__ */ F(() => ({
													props: My(de, u(), r(), l(), { style: { pointerEvents: ue() } }),
													wrapperProps: d()
												}));
												Di(a, () => n() ?? T, () => U(e));
											}
											q(e, i);
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
			}), q(e, f);
		},
		$$slots: { content: !0 }
	}), P({
		get popper() {
			return n();
		},
		set popper(e) {
			n(e), I();
		},
		get onEscapeKeydown() {
			return r();
		},
		set onEscapeKeydown(e) {
			r(e), I();
		},
		get escapeKeydownBehavior() {
			return i();
		},
		set escapeKeydownBehavior(e) {
			i(e), I();
		},
		get preventOverflowTextSelection() {
			return a();
		},
		set preventOverflowTextSelection(e) {
			a(e), I();
		},
		get id() {
			return o();
		},
		set id(e) {
			o(e), I();
		},
		get onPointerDown() {
			return s();
		},
		set onPointerDown(e) {
			s(e), I();
		},
		get onPointerUp() {
			return c();
		},
		set onPointerUp(e) {
			c(e), I();
		},
		get side() {
			return l();
		},
		set side(e) {
			l(e), I();
		},
		get sideOffset() {
			return u();
		},
		set sideOffset(e) {
			u(e), I();
		},
		get align() {
			return d();
		},
		set align(e) {
			d(e), I();
		},
		get alignOffset() {
			return f();
		},
		set alignOffset(e) {
			f(e), I();
		},
		get arrowPadding() {
			return p();
		},
		set arrowPadding(e) {
			p(e), I();
		},
		get avoidCollisions() {
			return m();
		},
		set avoidCollisions(e) {
			m(e), I();
		},
		get collisionBoundary() {
			return h();
		},
		set collisionBoundary(e) {
			h(e), I();
		},
		get collisionPadding() {
			return g();
		},
		set collisionPadding(e) {
			g(e), I();
		},
		get sticky() {
			return _();
		},
		set sticky(e) {
			_(e), I();
		},
		get hideWhenDetached() {
			return v();
		},
		set hideWhenDetached(e) {
			v(e), I();
		},
		get updatePositionStrategy() {
			return y();
		},
		set updatePositionStrategy(e) {
			y(e), I();
		},
		get strategy() {
			return b();
		},
		set strategy(e) {
			b(e), I();
		},
		get dir() {
			return x();
		},
		set dir(e) {
			x(e), I();
		},
		get preventScroll() {
			return S();
		},
		set preventScroll(e) {
			S(e), I();
		},
		get wrapperId() {
			return C();
		},
		set wrapperId(e) {
			C(e), I();
		},
		get style() {
			return w();
		},
		set style(e) {
			w(e), I();
		},
		get onPlaced() {
			return E();
		},
		set onPlaced(e) {
			E(e), I();
		},
		get onInteractOutside() {
			return D();
		},
		set onInteractOutside(e) {
			D(e), I();
		},
		get onCloseAutoFocus() {
			return ee();
		},
		set onCloseAutoFocus(e) {
			ee(e), I();
		},
		get onOpenAutoFocus() {
			return O();
		},
		set onOpenAutoFocus(e) {
			O(e), I();
		},
		get onFocusOutside() {
			return te();
		},
		set onFocusOutside(e) {
			te(e), I();
		},
		get interactOutsideBehavior() {
			return ne();
		},
		set interactOutsideBehavior(e = "close") {
			ne(e), I();
		},
		get loop() {
			return re();
		},
		set loop(e) {
			re(e), I();
		},
		get trapFocus() {
			return k();
		},
		set trapFocus(e = !0) {
			k(e), I();
		},
		get isValidEvent() {
			return ie();
		},
		set isValidEvent(e = () => !1) {
			ie(e), I();
		},
		get customAnchor() {
			return ae();
		},
		set customAnchor(e = null) {
			ae(e), I();
		},
		get isStatic() {
			return oe();
		},
		set isStatic(e = !1) {
			oe(e), I();
		},
		get enabled() {
			return se();
		},
		set enabled(e) {
			se(e), I();
		},
		get ref() {
			return ce();
		},
		set ref(e) {
			ce(e), I();
		},
		get tooltip() {
			return le();
		},
		set tooltip(e = !1) {
			le(e), I();
		},
		get contentPointerEvents() {
			return ue();
		},
		set contentPointerEvents(e = "auto") {
			ue(e), I();
		}
	});
}
Z(yT, {
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
var bT = /* @__PURE__ */ new Set(/* @__PURE__ */ "$$slots.$$events.$$legacy.$$host.popper.open.onEscapeKeydown.escapeKeydownBehavior.preventOverflowTextSelection.id.onPointerDown.onPointerUp.side.sideOffset.align.alignOffset.arrowPadding.avoidCollisions.collisionBoundary.collisionPadding.sticky.hideWhenDetached.updatePositionStrategy.strategy.dir.preventScroll.wrapperId.style.onPlaced.onInteractOutside.onCloseAutoFocus.onOpenAutoFocus.onFocusOutside.interactOutsideBehavior.loop.trapFocus.isValidEvent.customAnchor.isStatic.ref.shouldRender".split("."));
function xT(e, t) {
	N(t, !0);
	let n = X(t, "popper", 7), r = X(t, "open", 7), i = X(t, "onEscapeKeydown", 7), a = X(t, "escapeKeydownBehavior", 7), o = X(t, "preventOverflowTextSelection", 7), s = X(t, "id", 7), c = X(t, "onPointerDown", 7), l = X(t, "onPointerUp", 7), u = X(t, "side", 7), d = X(t, "sideOffset", 7), f = X(t, "align", 7), p = X(t, "alignOffset", 7), m = X(t, "arrowPadding", 7), h = X(t, "avoidCollisions", 7), g = X(t, "collisionBoundary", 7), _ = X(t, "collisionPadding", 7), v = X(t, "sticky", 7), y = X(t, "hideWhenDetached", 7), b = X(t, "updatePositionStrategy", 7), x = X(t, "strategy", 7), S = X(t, "dir", 7), C = X(t, "preventScroll", 7), w = X(t, "wrapperId", 7), T = X(t, "style", 7), E = X(t, "onPlaced", 7), D = X(t, "onInteractOutside", 7), ee = X(t, "onCloseAutoFocus", 7), O = X(t, "onOpenAutoFocus", 7), te = X(t, "onFocusOutside", 7), ne = X(t, "interactOutsideBehavior", 7, "close"), re = X(t, "loop", 7), k = X(t, "trapFocus", 7, !0), ie = X(t, "isValidEvent", 7, () => !1), ae = X(t, "customAnchor", 7, null), oe = X(t, "isStatic", 7, !1), se = X(t, "ref", 7), ce = X(t, "shouldRender", 7), le = /* @__PURE__ */ Va(t, bT);
	var ue = {
		get popper() {
			return n();
		},
		set popper(e) {
			n(e), I();
		},
		get open() {
			return r();
		},
		set open(e) {
			r(e), I();
		},
		get onEscapeKeydown() {
			return i();
		},
		set onEscapeKeydown(e) {
			i(e), I();
		},
		get escapeKeydownBehavior() {
			return a();
		},
		set escapeKeydownBehavior(e) {
			a(e), I();
		},
		get preventOverflowTextSelection() {
			return o();
		},
		set preventOverflowTextSelection(e) {
			o(e), I();
		},
		get id() {
			return s();
		},
		set id(e) {
			s(e), I();
		},
		get onPointerDown() {
			return c();
		},
		set onPointerDown(e) {
			c(e), I();
		},
		get onPointerUp() {
			return l();
		},
		set onPointerUp(e) {
			l(e), I();
		},
		get side() {
			return u();
		},
		set side(e) {
			u(e), I();
		},
		get sideOffset() {
			return d();
		},
		set sideOffset(e) {
			d(e), I();
		},
		get align() {
			return f();
		},
		set align(e) {
			f(e), I();
		},
		get alignOffset() {
			return p();
		},
		set alignOffset(e) {
			p(e), I();
		},
		get arrowPadding() {
			return m();
		},
		set arrowPadding(e) {
			m(e), I();
		},
		get avoidCollisions() {
			return h();
		},
		set avoidCollisions(e) {
			h(e), I();
		},
		get collisionBoundary() {
			return g();
		},
		set collisionBoundary(e) {
			g(e), I();
		},
		get collisionPadding() {
			return _();
		},
		set collisionPadding(e) {
			_(e), I();
		},
		get sticky() {
			return v();
		},
		set sticky(e) {
			v(e), I();
		},
		get hideWhenDetached() {
			return y();
		},
		set hideWhenDetached(e) {
			y(e), I();
		},
		get updatePositionStrategy() {
			return b();
		},
		set updatePositionStrategy(e) {
			b(e), I();
		},
		get strategy() {
			return x();
		},
		set strategy(e) {
			x(e), I();
		},
		get dir() {
			return S();
		},
		set dir(e) {
			S(e), I();
		},
		get preventScroll() {
			return C();
		},
		set preventScroll(e) {
			C(e), I();
		},
		get wrapperId() {
			return w();
		},
		set wrapperId(e) {
			w(e), I();
		},
		get style() {
			return T();
		},
		set style(e) {
			T(e), I();
		},
		get onPlaced() {
			return E();
		},
		set onPlaced(e) {
			E(e), I();
		},
		get onInteractOutside() {
			return D();
		},
		set onInteractOutside(e) {
			D(e), I();
		},
		get onCloseAutoFocus() {
			return ee();
		},
		set onCloseAutoFocus(e) {
			ee(e), I();
		},
		get onOpenAutoFocus() {
			return O();
		},
		set onOpenAutoFocus(e) {
			O(e), I();
		},
		get onFocusOutside() {
			return te();
		},
		set onFocusOutside(e) {
			te(e), I();
		},
		get interactOutsideBehavior() {
			return ne();
		},
		set interactOutsideBehavior(e = "close") {
			ne(e), I();
		},
		get loop() {
			return re();
		},
		set loop(e) {
			re(e), I();
		},
		get trapFocus() {
			return k();
		},
		set trapFocus(e = !0) {
			k(e), I();
		},
		get isValidEvent() {
			return ie();
		},
		set isValidEvent(e = () => !1) {
			ie(e), I();
		},
		get customAnchor() {
			return ae();
		},
		set customAnchor(e = null) {
			ae(e), I();
		},
		get isStatic() {
			return oe();
		},
		set isStatic(e = !1) {
			oe(e), I();
		},
		get ref() {
			return se();
		},
		set ref(e) {
			se(e), I();
		},
		get shouldRender() {
			return ce();
		},
		set shouldRender(e) {
			ce(e), I();
		}
	}, de = K(), fe = B(de), pe = (e) => {
		yT(e, Ga({
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
				return ae();
			},
			get isStatic() {
				return oe();
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
				return O();
			},
			get interactOutsideBehavior() {
				return ne();
			},
			get loop() {
				return re();
			},
			get trapFocus() {
				return k();
			},
			get isValidEvent() {
				return ie();
			},
			get onFocusOutside() {
				return te();
			},
			forceMount: !1,
			get ref() {
				return se();
			}
		}, () => le));
	};
	return J(fe, (e) => {
		ce() && e(pe);
	}), q(e, de), P(ue);
}
Z(xT, {
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
var ST = /* @__PURE__ */ new Set(/* @__PURE__ */ "$$slots.$$events.$$legacy.$$host.popper.onEscapeKeydown.escapeKeydownBehavior.preventOverflowTextSelection.id.onPointerDown.onPointerUp.side.sideOffset.align.alignOffset.arrowPadding.avoidCollisions.collisionBoundary.collisionPadding.sticky.hideWhenDetached.updatePositionStrategy.strategy.dir.preventScroll.wrapperId.style.onPlaced.onInteractOutside.onCloseAutoFocus.onOpenAutoFocus.onFocusOutside.interactOutsideBehavior.loop.trapFocus.isValidEvent.customAnchor.isStatic.enabled".split("."));
function CT(e, t) {
	N(t, !0);
	let n = X(t, "popper", 7), r = X(t, "onEscapeKeydown", 7), i = X(t, "escapeKeydownBehavior", 7), a = X(t, "preventOverflowTextSelection", 7), o = X(t, "id", 7), s = X(t, "onPointerDown", 7), c = X(t, "onPointerUp", 7), l = X(t, "side", 7), u = X(t, "sideOffset", 7), d = X(t, "align", 7), f = X(t, "alignOffset", 7), p = X(t, "arrowPadding", 7), m = X(t, "avoidCollisions", 7), h = X(t, "collisionBoundary", 7), g = X(t, "collisionPadding", 7), _ = X(t, "sticky", 7), v = X(t, "hideWhenDetached", 7), y = X(t, "updatePositionStrategy", 7), b = X(t, "strategy", 7), x = X(t, "dir", 7), S = X(t, "preventScroll", 7), C = X(t, "wrapperId", 7), w = X(t, "style", 7), T = X(t, "onPlaced", 7), E = X(t, "onInteractOutside", 7), D = X(t, "onCloseAutoFocus", 7), ee = X(t, "onOpenAutoFocus", 7), O = X(t, "onFocusOutside", 7), te = X(t, "interactOutsideBehavior", 7, "close"), ne = X(t, "loop", 7), re = X(t, "trapFocus", 7, !0), k = X(t, "isValidEvent", 7, () => !1), ie = X(t, "customAnchor", 7, null), ae = X(t, "isStatic", 7, !1), oe = X(t, "enabled", 7), se = /* @__PURE__ */ Va(t, ST);
	return yT(e, Ga({
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
			return ie();
		},
		get isStatic() {
			return ae();
		},
		get enabled() {
			return oe();
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
			return te();
		},
		get loop() {
			return ne();
		},
		get trapFocus() {
			return re();
		},
		get isValidEvent() {
			return k();
		},
		get onFocusOutside() {
			return O();
		}
	}, () => se, { forceMount: !0 })), P({
		get popper() {
			return n();
		},
		set popper(e) {
			n(e), I();
		},
		get onEscapeKeydown() {
			return r();
		},
		set onEscapeKeydown(e) {
			r(e), I();
		},
		get escapeKeydownBehavior() {
			return i();
		},
		set escapeKeydownBehavior(e) {
			i(e), I();
		},
		get preventOverflowTextSelection() {
			return a();
		},
		set preventOverflowTextSelection(e) {
			a(e), I();
		},
		get id() {
			return o();
		},
		set id(e) {
			o(e), I();
		},
		get onPointerDown() {
			return s();
		},
		set onPointerDown(e) {
			s(e), I();
		},
		get onPointerUp() {
			return c();
		},
		set onPointerUp(e) {
			c(e), I();
		},
		get side() {
			return l();
		},
		set side(e) {
			l(e), I();
		},
		get sideOffset() {
			return u();
		},
		set sideOffset(e) {
			u(e), I();
		},
		get align() {
			return d();
		},
		set align(e) {
			d(e), I();
		},
		get alignOffset() {
			return f();
		},
		set alignOffset(e) {
			f(e), I();
		},
		get arrowPadding() {
			return p();
		},
		set arrowPadding(e) {
			p(e), I();
		},
		get avoidCollisions() {
			return m();
		},
		set avoidCollisions(e) {
			m(e), I();
		},
		get collisionBoundary() {
			return h();
		},
		set collisionBoundary(e) {
			h(e), I();
		},
		get collisionPadding() {
			return g();
		},
		set collisionPadding(e) {
			g(e), I();
		},
		get sticky() {
			return _();
		},
		set sticky(e) {
			_(e), I();
		},
		get hideWhenDetached() {
			return v();
		},
		set hideWhenDetached(e) {
			v(e), I();
		},
		get updatePositionStrategy() {
			return y();
		},
		set updatePositionStrategy(e) {
			y(e), I();
		},
		get strategy() {
			return b();
		},
		set strategy(e) {
			b(e), I();
		},
		get dir() {
			return x();
		},
		set dir(e) {
			x(e), I();
		},
		get preventScroll() {
			return S();
		},
		set preventScroll(e) {
			S(e), I();
		},
		get wrapperId() {
			return C();
		},
		set wrapperId(e) {
			C(e), I();
		},
		get style() {
			return w();
		},
		set style(e) {
			w(e), I();
		},
		get onPlaced() {
			return T();
		},
		set onPlaced(e) {
			T(e), I();
		},
		get onInteractOutside() {
			return E();
		},
		set onInteractOutside(e) {
			E(e), I();
		},
		get onCloseAutoFocus() {
			return D();
		},
		set onCloseAutoFocus(e) {
			D(e), I();
		},
		get onOpenAutoFocus() {
			return ee();
		},
		set onOpenAutoFocus(e) {
			ee(e), I();
		},
		get onFocusOutside() {
			return O();
		},
		set onFocusOutside(e) {
			O(e), I();
		},
		get interactOutsideBehavior() {
			return te();
		},
		set interactOutsideBehavior(e = "close") {
			te(e), I();
		},
		get loop() {
			return ne();
		},
		set loop(e) {
			ne(e), I();
		},
		get trapFocus() {
			return re();
		},
		set trapFocus(e = !0) {
			re(e), I();
		},
		get isValidEvent() {
			return k();
		},
		set isValidEvent(e = () => !1) {
			k(e), I();
		},
		get customAnchor() {
			return ie();
		},
		set customAnchor(e = null) {
			ie(e), I();
		},
		get isStatic() {
			return ae();
		},
		set isStatic(e = !1) {
			ae(e), I();
		},
		get enabled() {
			return oe();
		},
		set enabled(e) {
			oe(e), I();
		}
	});
}
Z(CT, {
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
var wT = /* @__PURE__ */ new Set([
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
]), TT = /* @__PURE__ */ W("<div><div><!></div></div>");
function ET(e, t) {
	let n = ci();
	N(t, !0);
	let r = X(t, "id", 23, () => zb(n)), i = X(t, "ref", 15, null), a = X(t, "forceMount", 7, !1), o = X(t, "side", 7, "bottom"), s = X(t, "onInteractOutside", 7, Rb), c = X(t, "onEscapeKeydown", 7, Rb), l = X(t, "children", 7), u = X(t, "child", 7), d = X(t, "preventScroll", 7, !1), f = X(t, "style", 7), p = /* @__PURE__ */ Va(t, wT), m = sT.create({
		id: $(() => r()),
		ref: $(() => i(), (e) => i(e)),
		onInteractOutside: $(() => s()),
		onEscapeKeydown: $(() => c())
	}), h = /* @__PURE__ */ F(() => My(p, m.props));
	var g = {
		get id() {
			return r();
		},
		set id(e = zb(n)) {
			r(e), I();
		},
		get ref() {
			return i();
		},
		set ref(e = null) {
			i(e), I();
		},
		get forceMount() {
			return a();
		},
		set forceMount(e = !1) {
			a(e), I();
		},
		get side() {
			return o();
		},
		set side(e = "bottom") {
			o(e), I();
		},
		get onInteractOutside() {
			return s();
		},
		set onInteractOutside(e = Rb) {
			s(e), I();
		},
		get onEscapeKeydown() {
			return c();
		},
		set onEscapeKeydown(e = Rb) {
			c(e), I();
		},
		get children() {
			return l();
		},
		set children(e) {
			l(e), I();
		},
		get child() {
			return u();
		},
		set child(e) {
			u(e), I();
		},
		get preventScroll() {
			return d();
		},
		set preventScroll(e = !1) {
			d(e), I();
		},
		get style() {
			return f();
		},
		set style(e) {
			f(e), I();
		}
	}, _ = K(), v = B(_), y = (e) => {
		CT(e, Ga(() => U(h), () => m.popperProps, {
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
				let n = () => (t?.()).props, r = () => (t?.()).wrapperProps, i = /* @__PURE__ */ F(() => My(n(), { style: m.props.style }, { style: f() }));
				var a = K(), o = B(a), s = (e) => {
					var t = K(), n = B(t);
					{
						let e = /* @__PURE__ */ F(() => ({
							props: U(i),
							wrapperProps: r(),
							...m.snippetProps
						}));
						Di(n, u, () => U(e));
					}
					q(e, t);
				}, c = (e) => {
					var t = TT();
					Ea(t, () => ({ ...r() }));
					var n = z(t);
					Ea(n, () => ({ ...U(i) })), Di(z(n), () => l() ?? T), j(n), j(t), q(e, t);
				};
				J(o, (e) => {
					u() ? e(s) : e(c, -1);
				}), q(e, a);
			},
			$$slots: { popper: !0 }
		}));
	}, b = (e) => {
		xT(e, Ga(() => U(h), () => m.popperProps, {
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
				let n = () => (t?.()).props, r = () => (t?.()).wrapperProps, i = /* @__PURE__ */ F(() => My(n(), { style: m.props.style }, { style: f() }));
				var a = K(), o = B(a), s = (e) => {
					var t = K(), n = B(t);
					{
						let e = /* @__PURE__ */ F(() => ({
							props: U(i),
							wrapperProps: r(),
							...m.snippetProps
						}));
						Di(n, u, () => U(e));
					}
					q(e, t);
				}, c = (e) => {
					var t = TT();
					Ea(t, () => ({ ...r() }));
					var n = z(t);
					Ea(n, () => ({ ...U(i) })), Di(z(n), () => l() ?? T), j(n), j(t), q(e, t);
				};
				J(o, (e) => {
					u() ? e(s) : e(c, -1);
				}), q(e, a);
			},
			$$slots: { popper: !0 }
		}));
	};
	return J(v, (e) => {
		a() ? e(y) : a() || e(b, 1);
	}), q(e, _), P(g);
}
Z(ET, {
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
function DT(e, t) {
	N(t, !0);
	let n = X(t, "mounted", 15, !1), r = X(t, "onMountedChange", 7, Rb);
	return eb(() => (n(!0), r()(!0), () => {
		n(!1), r()(!1);
	})), P({
		get mounted() {
			return n();
		},
		set mounted(e = !1) {
			n(e), I();
		},
		get onMountedChange() {
			return r();
		},
		set onMountedChange(e = Rb) {
			r(e), I();
		}
	});
}
Z(DT, {
	mounted: {},
	onMountedChange: {}
}, [], [], { mode: "open" });
var OT = /* @__PURE__ */ new Set([
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
]), kT = /* @__PURE__ */ W("<div><!></div>"), AT = /* @__PURE__ */ W("<!> <!>", 1);
function jT(e, t) {
	let n = ci();
	N(t, !0);
	let r = X(t, "id", 23, () => zb(n)), i = X(t, "ref", 15, null), a = X(t, "value", 7), o = X(t, "label", 23, a), s = X(t, "disabled", 7, !1), c = X(t, "children", 7), l = X(t, "child", 7), u = X(t, "onHighlight", 7, Rb), d = X(t, "onUnhighlight", 7, Rb), f = /* @__PURE__ */ Va(t, OT), p = cT.create({
		id: $(() => r()),
		ref: $(() => i(), (e) => i(e)),
		value: $(() => a()),
		disabled: $(() => s()),
		label: $(() => o()),
		onHighlight: $(() => u()),
		onUnhighlight: $(() => d())
	}), m = /* @__PURE__ */ F(() => My(f, p.props));
	var h = {
		get id() {
			return r();
		},
		set id(e = zb(n)) {
			r(e), I();
		},
		get ref() {
			return i();
		},
		set ref(e = null) {
			i(e), I();
		},
		get value() {
			return a();
		},
		set value(e) {
			a(e), I();
		},
		get label() {
			return o();
		},
		set label(e = a) {
			o(e), I();
		},
		get disabled() {
			return s();
		},
		set disabled(e = !1) {
			s(e), I();
		},
		get children() {
			return c();
		},
		set children(e) {
			c(e), I();
		},
		get child() {
			return l();
		},
		set child(e) {
			l(e), I();
		},
		get onHighlight() {
			return u();
		},
		set onHighlight(e = Rb) {
			u(e), I();
		},
		get onUnhighlight() {
			return d();
		},
		set onUnhighlight(e = Rb) {
			d(e), I();
		}
	}, g = AT(), _ = B(g), v = (e) => {
		var t = K(), n = B(t);
		{
			let e = /* @__PURE__ */ F(() => ({
				props: U(m),
				...p.snippetProps
			}));
			Di(n, l, () => U(e));
		}
		q(e, t);
	}, y = (e) => {
		var t = kT();
		Ea(t, () => ({ ...U(m) })), Di(z(t), () => c() ?? T, () => p.snippetProps), j(t), q(e, t);
	};
	return J(_, (e) => {
		l() ? e(v) : e(y, -1);
	}), DT(V(_, 2), {
		get mounted() {
			return p.mounted;
		},
		set mounted(e) {
			p.mounted = e;
		}
	}), q(e, g), P(h);
}
Z(jT, {
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
var MT = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"id",
	"ref",
	"children",
	"child"
]), NT = /* @__PURE__ */ W("<div><!></div>"), PT = {
	hash: "svelte-110x5tk",
	code: "\n	/* Hide scrollbars cross browser and enable momentum scroll for touch devices */[data-select-viewport] {scrollbar-width:none !important;-ms-overflow-style:none !important;-webkit-overflow-scrolling:touch !important;}[data-combobox-viewport] {scrollbar-width:none !important;-ms-overflow-style:none !important;-webkit-overflow-scrolling:touch !important;}[data-combobox-viewport]::-webkit-scrollbar {display:none !important;}[data-select-viewport]::-webkit-scrollbar {display:none !important;}"
};
function FT(e, t) {
	let n = ci();
	N(t, !0), Yi(e, PT);
	let r = X(t, "id", 23, () => zb(n)), i = X(t, "ref", 15, null), a = X(t, "children", 7), o = X(t, "child", 7), s = /* @__PURE__ */ Va(t, MT), c = uT.create({
		id: $(() => r()),
		ref: $(() => i(), (e) => i(e))
	}), l = /* @__PURE__ */ F(() => My(s, c.props));
	var u = {
		get id() {
			return r();
		},
		set id(e = zb(n)) {
			r(e), I();
		},
		get ref() {
			return i();
		},
		set ref(e = null) {
			i(e), I();
		},
		get children() {
			return a();
		},
		set children(e) {
			a(e), I();
		},
		get child() {
			return o();
		},
		set child(e) {
			o(e), I();
		}
	}, d = K(), f = B(d), p = (e) => {
		var t = K();
		Di(B(t), o, () => ({ props: U(l) })), q(e, t);
	}, m = (e) => {
		var t = NT();
		Ea(t, () => ({ ...U(l) })), Di(z(t), () => a() ?? T), j(t), q(e, t);
	};
	return J(f, (e) => {
		o() ? e(p) : e(m, -1);
	}), q(e, d), P(u);
}
Z(FT, {
	id: {},
	ref: {},
	children: {},
	child: {}
}, [], [], { mode: "open" });
var IT = /* @__PURE__ */ W("<!> <!>", 1);
function LT(e, t) {
	N(t, !0);
	let n = X(t, "value", 15), r = X(t, "onValueChange", 7, Rb), i = X(t, "name", 7, ""), a = X(t, "disabled", 7, !1), o = X(t, "type", 7), s = X(t, "open", 15, !1), c = X(t, "onOpenChange", 7, Rb), l = X(t, "onOpenChangeComplete", 7, Rb), u = X(t, "loop", 7, !1), d = X(t, "scrollAlignment", 7, "nearest"), f = X(t, "required", 7, !1), p = X(t, "items", 23, () => []), m = X(t, "allowDeselect", 7, !1), h = X(t, "autocomplete", 7), g = X(t, "children", 7);
	function _() {
		n() === void 0 && n(o() === "single" ? "" : []);
	}
	_(), Vy.pre(() => n(), () => {
		_();
	});
	let v = /* @__PURE__ */ L(""), y = aT.create({
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
		inputValue: $(() => U(v), (e) => R(v, e, !0)),
		onOpenChangeComplete: $(() => l())
	});
	var b = {
		get value() {
			return n();
		},
		set value(e) {
			n(e), I();
		},
		get onValueChange() {
			return r();
		},
		set onValueChange(e = Rb) {
			r(e), I();
		},
		get name() {
			return i();
		},
		set name(e = "") {
			i(e), I();
		},
		get disabled() {
			return a();
		},
		set disabled(e = !1) {
			a(e), I();
		},
		get type() {
			return o();
		},
		set type(e) {
			o(e), I();
		},
		get open() {
			return s();
		},
		set open(e = !1) {
			s(e), I();
		},
		get onOpenChange() {
			return c();
		},
		set onOpenChange(e = Rb) {
			c(e), I();
		},
		get onOpenChangeComplete() {
			return l();
		},
		set onOpenChangeComplete(e = Rb) {
			l(e), I();
		},
		get loop() {
			return u();
		},
		set loop(e = !1) {
			u(e), I();
		},
		get scrollAlignment() {
			return d();
		},
		set scrollAlignment(e = "nearest") {
			d(e), I();
		},
		get required() {
			return f();
		},
		set required(e = !1) {
			f(e), I();
		},
		get items() {
			return p();
		},
		set items(e = []) {
			p(e), I();
		},
		get allowDeselect() {
			return m();
		},
		set allowDeselect(e = !1) {
			m(e), I();
		},
		get autocomplete() {
			return h();
		},
		set autocomplete(e) {
			h(e), I();
		},
		get children() {
			return g();
		},
		set children(e) {
			g(e), I();
		}
	}, x = IT(), S = B(x);
	Jw(S, {
		children: (e, t) => {
			var n = K();
			Di(B(n), () => g() ?? T), q(e, n);
		},
		$$slots: { default: !0 }
	});
	var C = V(S, 2), w = (e) => {
		var t = K(), n = B(t), r = (e) => {
			dT(e, { get autocomplete() {
				return h();
			} });
		}, i = (e) => {
			var t = K();
			zi(B(t), 16, () => y.opts.value.current, (e) => e, (e, t) => {
				dT(e, {
					get value() {
						return t;
					},
					get autocomplete() {
						return h();
					}
				});
			}), q(e, t);
		};
		J(n, (e) => {
			y.opts.value.current.length === 0 ? e(r) : e(i, -1);
		}), q(e, t);
	}, E = /* @__PURE__ */ F(() => Array.isArray(y.opts.value.current)), D = (e) => {
		dT(e, {
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
		U(E) ? e(w) : e(D, -1);
	}), q(e, x), P(b);
}
Z(LT, {
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
var RT = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"id",
	"ref",
	"child",
	"children",
	"type"
]), zT = /* @__PURE__ */ W("<button><!></button>");
function BT(e, t) {
	let n = ci();
	N(t, !0);
	let r = X(t, "id", 23, () => zb(n)), i = X(t, "ref", 15, null), a = X(t, "child", 7), o = X(t, "children", 7), s = X(t, "type", 7, "button"), c = /* @__PURE__ */ Va(t, RT), l = oT.create({
		id: $(() => r()),
		ref: $(() => i(), (e) => i(e))
	}), u = /* @__PURE__ */ F(() => My(c, l.props, { type: s() }));
	var d = {
		get id() {
			return r();
		},
		set id(e = zb(n)) {
			r(e), I();
		},
		get ref() {
			return i();
		},
		set ref(e = null) {
			i(e), I();
		},
		get child() {
			return a();
		},
		set child(e) {
			a(e), I();
		},
		get children() {
			return o();
		},
		set children(e) {
			o(e), I();
		},
		get type() {
			return s();
		},
		set type(e = "button") {
			s(e), I();
		}
	}, f = K();
	return Ki(B(f), () => fT, (e, t) => {
		t(e, {
			get id() {
				return r();
			},
			get ref() {
				return l.opts.ref;
			},
			children: (e, t) => {
				var n = K(), r = B(n), i = (e) => {
					var t = K();
					Di(B(t), a, () => ({ props: U(u) })), q(e, t);
				}, s = (e) => {
					var t = zT();
					Ea(t, () => ({ ...U(u) })), Di(z(t), () => o() ?? T), j(t), q(e, t);
				};
				J(r, (e) => {
					a() ? e(i) : e(s, -1);
				}), q(e, n);
			},
			$$slots: { default: !0 }
		});
	}), q(e, f), P(d);
}
Z(BT, {
	id: {},
	ref: {},
	child: {},
	children: {},
	type: {}
}, [], [], { mode: "open" });
var VT = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": 2,
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, HT = (e) => {
	for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
	return !1;
}, UT = Symbol("lucide-context"), WT = () => ct(UT), GT = /* @__PURE__ */ new Set([
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
]), KT = /* @__PURE__ */ G("<svg><!><!></svg>");
function qT(e, t) {
	N(t, !0);
	let n = WT() ?? {}, r = X(t, "name", 7), i = X(t, "color", 23, () => n.color ?? "currentColor"), a = X(t, "size", 23, () => n.size ?? 24), o = X(t, "strokeWidth", 23, () => n.strokeWidth ?? 2), s = X(t, "absoluteStrokeWidth", 23, () => n.absoluteStrokeWidth ?? !1), c = X(t, "iconNode", 23, () => []), l = X(t, "children", 7), u = /* @__PURE__ */ Va(t, GT), d = /* @__PURE__ */ F(() => s() ? Number(o()) * 24 / Number(a()) : o());
	var f = {
		get name() {
			return r();
		},
		set name(e) {
			r(e), I();
		},
		get color() {
			return i();
		},
		set color(e = n.color ?? "currentColor") {
			i(e), I();
		},
		get size() {
			return a();
		},
		set size(e = n.size ?? 24) {
			a(e), I();
		},
		get strokeWidth() {
			return o();
		},
		set strokeWidth(e = n.strokeWidth ?? 2) {
			o(e), I();
		},
		get absoluteStrokeWidth() {
			return s();
		},
		set absoluteStrokeWidth(e = n.absoluteStrokeWidth ?? !1) {
			s(e), I();
		},
		get iconNode() {
			return c();
		},
		set iconNode(e = []) {
			c(e), I();
		},
		get children() {
			return l();
		},
		set children(e) {
			l(e), I();
		}
	}, p = KT();
	Ea(p, (e) => ({
		...VT,
		...e,
		...u,
		width: a(),
		height: a(),
		stroke: i(),
		"stroke-width": U(d),
		class: [
			"lucide-icon lucide",
			n.class,
			r() && `lucide-${r()}`,
			t.class
		]
	}), [() => !l() && !HT(u) && { "aria-hidden": "true" }]);
	var m = z(p);
	return zi(m, 17, c, Fi, (e, t) => {
		var n = /* @__PURE__ */ F(() => te(U(t), 2));
		let r = () => U(n)[0], i = () => U(n)[1];
		var a = K();
		qi(B(a), r, !0, (e, t) => {
			Ea(e, () => ({ ...i() }));
		}), q(e, a);
	}), Di(V(m), () => l() ?? T), j(p), q(e, p), P(f);
}
Z(qT, {
	name: {},
	color: {},
	size: {},
	strokeWidth: {},
	absoluteStrokeWidth: {},
	iconNode: {},
	children: {}
}, [], [], { mode: "open" });
var JT = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host"
]);
function YT(e, t) {
	let n = /* @__PURE__ */ Va(t, JT), r = [["path", { d: "M20 6 9 17l-5-5" }]];
	qT(e, Ga({ name: "check" }, () => n, { get iconNode() {
		return r;
	} }));
}
Z(YT, {}, [], [], { mode: "open" });
var XT = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host"
]);
function ZT(e, t) {
	let n = /* @__PURE__ */ Va(t, XT), r = [["path", { d: "M5 12h14" }]];
	qT(e, Ga({ name: "minus" }, () => n, { get iconNode() {
		return r;
	} }));
}
Z(ZT, {}, [], [], { mode: "open" });
var QT = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"ref",
	"checked",
	"indeterminate",
	"class"
]), $T = /* @__PURE__ */ W("<div data-slot=\"checkbox-indicator\" class=\"tf-checkbox-indicator\"><!></div>");
function eE(e, t) {
	N(t, !0);
	let n = X(t, "ref", 15, null), r = X(t, "checked", 15, !1), i = X(t, "indeterminate", 15, !1), a = X(t, "class", 7), o = /* @__PURE__ */ Va(t, QT);
	var s = {
		get ref() {
			return n();
		},
		set ref(e = null) {
			n(e), I();
		},
		get checked() {
			return r();
		},
		set checked(e = !1) {
			r(e), I();
		},
		get indeterminate() {
			return i();
		},
		set indeterminate(e = !1) {
			i(e), I();
		},
		get class() {
			return a();
		},
		set class(e) {
			a(e), I();
		}
	}, c = K(), l = B(c);
	{
		let e = (e, t) => {
			let n = () => (t?.()).checked, r = () => (t?.()).indeterminate;
			var i = $T(), a = z(i), o = (e) => {
				YT(e, {});
			}, s = (e) => {
				ZT(e, {});
			};
			J(a, (e) => {
				n() ? e(o) : r() && e(s, 1);
			}), j(i), q(e, i);
		}, t = /* @__PURE__ */ F(() => $v("nopan nodrag tf-checkbox peer", a()));
		Ki(l, () => NS, (a, s) => {
			s(a, Ga({
				"data-slot": "checkbox",
				get class() {
					return U(t);
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
	return q(e, c), P(s);
}
Z(eE, {
	ref: {},
	checked: {},
	indeterminate: {},
	class: {}
}, [], [], { mode: "open" });
var tE = /* @__PURE__ */ new Set([
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
]), nE = /* @__PURE__ */ W("<div><input type=\"hidden\"/> <!> <!></div>"), rE = {
	hash: "svelte-1o3a23c",
	code: ".tf-chosen.svelte-1o3a23c {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function iE(e, t) {
	N(t, !0), Yi(e, rE);
	let n = X(t, "placeholder", 7), r = X(t, "label", 7), i = X(t, "value", 7), a = X(t, "buttonText", 7, "选择..."), o = X(t, "onChosen", 7), s = X(t, "class", 7), c = X(t, "style", 7), l = /* @__PURE__ */ Va(t, tE);
	var u = {
		get placeholder() {
			return n();
		},
		set placeholder(e) {
			n(e), I();
		},
		get label() {
			return r();
		},
		set label(e) {
			r(e), I();
		},
		get value() {
			return i();
		},
		set value(e) {
			i(e), I();
		},
		get buttonText() {
			return a();
		},
		set buttonText(e = "选择...") {
			a(e), I();
		},
		get onChosen() {
			return o();
		},
		set onChosen(e) {
			o(e), I();
		},
		get class() {
			return s();
		},
		set class(e) {
			s(e), I();
		},
		get style() {
			return c();
		},
		set style(e) {
			c(e), I();
		}
	}, d = nE();
	Ea(d, () => ({
		...l,
		style: c(),
		class: `tf-chosen nopan nodrag ${(s() || "") ?? ""}`
	}), void 0, void 0, void 0, "svelte-1o3a23c");
	var f = z(d);
	xa(f);
	var p = V(f, 2);
	return sE(p, {
		get value() {
			return r();
		},
		get placeholder() {
			return n();
		},
		style: "flex-grow: 1;",
		disabled: !0
	}), ay(V(p, 2), {
		variant: "outline",
		onclick: (e) => {
			o()?.(i(), r(), e);
		},
		style: "padding: 3px",
		children: (e, t) => {
			M();
			var n = si();
			H(() => yi(n, a())), q(e, n);
		},
		$$slots: { default: !0 }
	}), j(d), H(() => Sa(f, i())), q(e, d), P(u);
}
Z(iE, {
	placeholder: {},
	label: {},
	value: {},
	buttonText: {},
	onChosen: {},
	class: {},
	style: {}
}, [], [], { mode: "open" });
var aE = /* @__PURE__ */ new Set([
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
]), oE = /* @__PURE__ */ W("<input/>");
function sE(e, t) {
	N(t, !0);
	let n = X(t, "ref", 15, null), r = X(t, "value", 15), i = X(t, "type", 7), a = X(t, "files", 15), o = X(t, "class", 7), s = X(t, "data-slot", 7, "input"), c = /* @__PURE__ */ Va(t, aE);
	var l = {
		get ref() {
			return n();
		},
		set ref(e = null) {
			n(e), I();
		},
		get value() {
			return r();
		},
		set value(e) {
			r(e), I();
		},
		get type() {
			return i();
		},
		set type(e) {
			i(e), I();
		},
		get files() {
			return a();
		},
		set files(e) {
			a(e), I();
		},
		get class() {
			return o();
		},
		set class(e) {
			o(e), I();
		},
		get "data-slot"() {
			return s();
		},
		set "data-slot"(e = "input") {
			s(e), I();
		}
	}, u = K(), d = B(u), f = (e) => {
		var t = oE();
		Ea(t, (e) => ({
			"data-slot": s(),
			class: e,
			type: "file",
			...c
		}), [() => $v("nopan nodrag tf-input", o())], void 0, void 0, void 0, !0), La(t, (e) => n(e), () => n()), Na(t, a), Aa(t, r), q(e, t);
	}, p = (e) => {
		var t = oE();
		Ea(t, (e) => ({
			"data-slot": s(),
			spellcheck: "false",
			class: e,
			type: i(),
			...c
		}), [() => $v("nopan nodrag tf-input", o())], void 0, void 0, void 0, !0), La(t, (e) => n(e), () => n()), Aa(t, r), q(e, t);
	};
	return J(d, (e) => {
		i() === "file" ? e(f) : e(p, -1);
	}), q(e, u), P(l);
}
Z(sE, {
	ref: {},
	value: {},
	type: {},
	files: {},
	class: {},
	"data-slot": {}
}, [], [], { mode: "open" });
var cE = /* @__PURE__ */ new Set([
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
]), lE = /* @__PURE__ */ W("<textarea></textarea>");
function uE(e, t) {
	N(t, !0);
	let n = X(t, "ref", 15, null), r = X(t, "value", 15), i = X(t, "class", 7), a = X(t, "data-slot", 7, "textarea"), o = X(t, "height", 7), s = X(t, "autoHeight", 7, !0), c = X(t, "maxHeight", 7), l = X(t, "onHeightChange", 7), u = /* @__PURE__ */ Va(t, cE), d, f;
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
	Kn(() => {
		p();
	});
	var m = {
		get ref() {
			return n();
		},
		set ref(e = null) {
			n(e), I();
		},
		get value() {
			return r();
		},
		set value(e) {
			r(e), I();
		},
		get class() {
			return i();
		},
		set class(e) {
			i(e), I();
		},
		get "data-slot"() {
			return a();
		},
		set "data-slot"(e = "textarea") {
			a(e), I();
		},
		get height() {
			return o();
		},
		set height(e) {
			o(e), I();
		},
		get autoHeight() {
			return s();
		},
		set autoHeight(e = !0) {
			s(e), I();
		},
		get maxHeight() {
			return c();
		},
		set maxHeight(e) {
			c(e), I();
		},
		get onHeightChange() {
			return l();
		},
		set onHeightChange(e) {
			l(e), I();
		}
	}, h = lE();
	kt(h);
	var g = (e) => {
		p(), t.oninput?.(e);
	}, _ = (e) => {
		p(), t.onchange?.(e);
	};
	return Ea(h, (e) => ({
		spellcheck: "false",
		...u,
		"data-slot": a(),
		oninput: g,
		onchange: _,
		class: e
	}), [() => $v("nodrag nowheel tf-textarea", i())]), La(h, (e) => d = e, () => d), Aa(h, r), q(e, h), P(m);
}
Z(uE, {
	ref: {},
	value: {},
	class: {},
	"data-slot": {},
	height: {},
	autoHeight: {},
	maxHeight: {},
	onHeightChange: {}
}, [], [], { mode: "open" });
var dE = /* @__PURE__ */ W("<div role=\"button\"><!></div>"), fE = /* @__PURE__ */ W("<div></div>");
function pE(e, t) {
	let n = Ua(Ua(t, [
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
	N(t, !1);
	let r = X(t, "items", 28, () => []), i = X(t, "onChange", 12, () => {}), a = X(t, "activeIndex", 12, 0);
	function o(e, t) {
		a(t), i()?.(e, t);
	}
	var s = {
		get items() {
			return r();
		},
		set items(e) {
			r(e), I();
		},
		get onChange() {
			return i();
		},
		set onChange(e) {
			i(e), I();
		},
		get activeIndex() {
			return a();
		},
		set activeIndex(e) {
			a(e), I();
		}
	};
	Ra();
	var c = fE();
	return Ea(c, () => ({
		...n,
		class: `tf-tabs ${(Wr(n), Ur(() => n.class)) ?? ""}`
	})), zi(c, 5, r, Fi, (e, t, n) => {
		var r = dE();
		Y(r, "tabindex", n);
		var i = z(r), s = (e) => {
			var n = si();
			H(() => yi(n, (U(t), Ur(() => U(t).label)))), q(e, n);
		}, c = (e) => {
			var n = K();
			Di(B(n), () => (U(t), Ur(() => U(t).label)) ?? T), q(e, n);
		};
		J(i, (e) => {
			U(t), Ur(() => typeof U(t).label == "string") ? e(s) : e(c, -1);
		}), j(r), H(() => oa(r, 1, `tf-tabs-item ${n === a() ? "active" : ""}`)), Qr("click", r, () => o(U(t), n)), Qr("keydown", r, (e) => {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), o(U(t), n));
		}), q(e, r);
	}), j(c), q(e, c), P(s);
}
$r(["click", "keydown"]), Z(pE, {
	items: {},
	onChange: {},
	activeIndex: {}
}, [], [], { mode: "open" });
var mE = /* @__PURE__ */ W("<span class=\"tf-collapse-item-title-icon\"><!></span>"), hE = /* @__PURE__ */ W("<div class=\"tf-collapse-item-description\"><!></div>"), gE = /* @__PURE__ */ W("<div class=\"tf-collapse-item-content\"><!></div>"), _E = /* @__PURE__ */ W("<div class=\"tf-collapse-item\"><div class=\"tf-collapse-item-title\" role=\"button\"><!> <!> <span><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z\"></path></svg></span></div> <!> <!></div>"), vE = /* @__PURE__ */ W("<div></div>"), yE = {
	hash: "svelte-ynwjxt",
	code: "\n    /* 定义旋转的 CSS 类 */.rotate-90.svelte-ynwjxt {transform:rotate(90deg);transition:transform 0.3s ease;}"
};
function bE(e, t) {
	N(t, !0), Yi(e, yE);
	let n = X(t, "items", 7), r = X(t, "onChange", 7), i = X(t, "activeKeys", 31, () => En([]));
	function a(e) {
		i().includes(e.key) ? i(i().filter((t) => t !== e.key)) : (i().push(e.key), i(i())), r()?.(e, i());
	}
	var o = {
		get items() {
			return n();
		},
		set items(e) {
			n(e), I();
		},
		get onChange() {
			return r();
		},
		set onChange(e) {
			r(e), I();
		},
		get activeKeys() {
			return i();
		},
		set activeKeys(e = []) {
			i(e), I();
		}
	}, s = vE();
	return zi(s, 21, n, Fi, (e, t, n) => {
		var r = _E(), o = z(r);
		Y(o, "tabindex", n);
		var s = z(o), c = (e) => {
			var n = mE();
			xE(z(n), { get target() {
				return U(t).icon;
			} }), j(n), q(e, n);
		};
		J(s, (e) => {
			U(t).icon && e(c);
		});
		var l = V(s, 2);
		xE(l, { get target() {
			return U(t).title;
		} });
		var u = V(l, 2);
		j(o);
		var d = V(o, 2), f = (e) => {
			var n = hE();
			xE(z(n), { get target() {
				return U(t).description;
			} }), j(n), q(e, n);
		};
		J(d, (e) => {
			U(t).description && e(f);
		});
		var p = V(d, 2), m = (e) => {
			var n = gE();
			xE(z(n), { get target() {
				return U(t).content;
			} }), j(n), q(e, n);
		}, h = /* @__PURE__ */ F(() => i().includes(U(t).key));
		J(p, (e) => {
			U(h) && e(m);
		}), j(r), H((e) => oa(u, 1, `tf-collapse-item-title-arrow ${e ?? ""}`, "svelte-ynwjxt"), [() => i().includes(U(t).key) ? "rotate-90" : ""]), Qr("click", o, () => a(U(t))), Qr("keydown", o, (e) => {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), a(U(t)));
		}), q(e, r);
	}), j(s), H(() => {
		ca(s, t.style), oa(s, 1, `tf-collapse ${t.class ?? ""}`, "svelte-ynwjxt");
	}), q(e, s), P(o);
}
$r(["click", "keydown"]), Z(bE, {
	items: {},
	onChange: {},
	activeKeys: {}
}, [], [], { mode: "open" });
function xE(e, t) {
	N(t, !0);
	let n = X(t, "target", 7);
	n() === void 0 && n("undefined");
	var r = {
		get target() {
			return n();
		},
		set target(e) {
			n(e), I();
		}
	}, i = K(), a = B(i), o = (e) => {
		var t = K();
		Di(B(t), () => n() ?? T), q(e, t);
	}, s = (e) => {
		var t = K();
		Gi(B(t), n), q(e, t);
	};
	return J(a, (e) => {
		typeof n() == "function" ? e(o) : e(s, -1);
	}), q(e, i), P(r);
}
Z(xE, { target: {} }, [], [], { mode: "open" });
var SE = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host"
]);
function CE(e, t) {
	let n = /* @__PURE__ */ Va(t, SE), r = [["path", { d: "m6 9 6 6 6-6" }]];
	qT(e, Ga({ name: "chevron-down" }, () => n, { get iconNode() {
		return r;
	} }));
}
Z(CE, {}, [], [], { mode: "open" });
var wE = () => ct("svelteflow__node_id"), TE = () => ct("tinyflow_options"), EE = /* @__PURE__ */ new Set([
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
]), DE = /* @__PURE__ */ W("<span class=\"tf-select-heading-item\">,</span>"), OE = /* @__PURE__ */ W("<!> <!>", 1), kE = /* @__PURE__ */ W("<span class=\"tf-select-heading-span\"> </span>"), AE = /* @__PURE__ */ W("<span class=\"tf-select-heading\"><!></span> <!>", 1), jE = /* @__PURE__ */ W("<div class=\"tf-select-empty\">暂无数据</div>"), ME = /* @__PURE__ */ G("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" style=\"width: 16px;height: 16px;\"><path d=\"M12 14L8 10H16L12 14Z\"></path></svg>"), NE = /* @__PURE__ */ W("<span style=\"width: 16px;height: 16px;\"></span>"), PE = /* @__PURE__ */ W("<span class=\"tf-select-option-selected\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" style=\"width: 16px;height: 16px;\"><path d=\"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z\"></path></svg></span>"), FE = /* @__PURE__ */ W("<span class=\"tf-select-option-content\"><!> <!></span> <!>", 1);
function IE(e, t) {
	N(t, !0);
	let n = X(t, "items", 7), r = X(t, "onSelect", 7), i = X(t, "value", 23, () => []), a = X(t, "defaultValue", 23, () => []), o = X(t, "expandAll", 7, !0), s = X(t, "multiple", 7, !1), c = X(t, "expandValue", 23, () => []), l = X(t, "placeholder", 7), u = X(t, "disabled", 7, !1), d = X(t, "class", 7), f = /* @__PURE__ */ Va(t, EE), p = TE().defaultTheme, m = /* @__PURE__ */ F(() => {
		let e = [], t = (n) => {
			for (let r of n) e.push(r), r.children?.length && t(r.children);
		};
		return t(n()), e;
	}), h = /* @__PURE__ */ F(() => {
		let e = [], t = i().length > 0 ? i() : a();
		for (let n of t) {
			if (n == null) continue;
			let t = U(m).find((e) => e.value === n);
			t && e.push(t);
		}
		return e;
	}), g = /* @__PURE__ */ F(() => !s() && U(h).length > 0 ? String(U(h)[0].value) : ""), _ = /* @__PURE__ */ F(() => s() ? U(h).map((e) => String(e.value)) : []);
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
	let b = /* @__PURE__ */ F(() => y(n()));
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
			n(e), I();
		},
		get onSelect() {
			return r();
		},
		set onSelect(e) {
			r(e), I();
		},
		get value() {
			return i();
		},
		set value(e = []) {
			i(e), I();
		},
		get defaultValue() {
			return a();
		},
		set defaultValue(e = []) {
			a(e), I();
		},
		get expandAll() {
			return o();
		},
		set expandAll(e = !0) {
			o(e), I();
		},
		get multiple() {
			return s();
		},
		set multiple(e = !1) {
			s(e), I();
		},
		get expandValue() {
			return c();
		},
		set expandValue(e = []) {
			c(e), I();
		},
		get placeholder() {
			return l();
		},
		set placeholder(e) {
			l(e), I();
		},
		get disabled() {
			return u();
		},
		set disabled(e = !1) {
			u(e), I();
		},
		get class() {
			return d();
		},
		set class(e) {
			d(e), I();
		}
	}, C = K(), w = B(C), T = (e) => {
		var t = K();
		Ki(B(t), () => LT, (e, t) => {
			t(e, Ga({
				type: "multiple",
				get value() {
					return U(_);
				},
				get disabled() {
					return u();
				}
			}, () => f, {
				children: (e, t) => {
					var n = OE(), r = B(n);
					{
						let e = /* @__PURE__ */ F(() => $v("nopan nodrag tf-select", u() && "tf-select-disabled", d()));
						Ki(r, () => BT, (t, n) => {
							n(t, {
								get class() {
									return U(e);
								},
								get disabled() {
									return u();
								},
								children: (e, t) => {
									var n = AE(), r = B(n), i = z(r), a = (e) => {
										var t = K();
										zi(B(t), 19, () => U(h), (e) => e.value, (e, t, n) => {
											var r = OE(), i = B(r);
											xE(i, { get target() {
												return U(t).label;
											} });
											var a = V(i, 2), o = (e) => {
												q(e, DE());
											};
											J(a, (e) => {
												U(n) < U(h).length - 1 && e(o);
											}), q(e, r);
										}), q(e, t);
									}, o = (e) => {
										var t = kE(), n = z(t, !0);
										j(t), H(() => yi(n, l() ?? "")), q(e, t);
									};
									J(i, (e) => {
										U(h).length > 0 ? e(a) : e(o, -1);
									}), j(r), CE(V(r, 2), { class: "tf-select-heading-icon" }), q(e, n);
								},
								$$slots: { default: !0 }
							});
						});
					}
					Ki(V(r, 2), () => qb, (e, t) => {
						t(e, {
							children: (e, t) => {
								var n = K(), r = B(n);
								{
									let e = /* @__PURE__ */ F(() => $v("nopan nodrag nowheel tf-root tf-select-content", p === "dark" && "dark"));
									Ki(r, () => ET, (t, n) => {
										n(t, {
											get class() {
												return U(e);
											},
											children: (e, t) => {
												var n = K();
												Ki(B(n), () => FT, (e, t) => {
													t(e, {
														style: "padding: 4px;",
														children: (e, t) => {
															var n = K(), r = B(n), i = (e) => {
																q(e, jE());
															}, a = (e) => {
																var t = K();
																zi(B(t), 19, () => U(b), ({ item: e, level: t }, n) => `${n}_${e.value}`, (e, t) => {
																	let n = () => U(t).item, r = () => U(t).level, i = /* @__PURE__ */ F(() => n().children && n().children.length > 0), a = /* @__PURE__ */ F(() => x(n()));
																	var o = K(), s = B(o);
																	{
																		let e = (e, t) => {
																			let r = () => (t?.()).selected;
																			var a = FE(), o = B(a), s = z(o), c = (e) => {
																				q(e, ME());
																			}, l = (e) => {
																				q(e, NE());
																			};
																			J(s, (e) => {
																				U(i) ? e(c) : e(l, -1);
																			}), xE(V(s, 2), { get target() {
																				return n().label;
																			} }), j(o);
																			var u = V(o, 2), d = (e) => {
																				q(e, PE());
																			};
																			J(u, (e) => {
																				r() && e(d);
																			}), q(e, a);
																		}, t = /* @__PURE__ */ F(() => r() * 12);
																		Ki(s, () => jT, (r, i) => {
																			i(r, {
																				get value() {
																					return U(a).value;
																				},
																				get label() {
																					return U(a).label;
																				},
																				class: "tf-select-option",
																				get style() {
																					return `padding-left: ${U(t) ?? ""}px`;
																				},
																				onclick: (e) => v(e, n()),
																				children: e,
																				$$slots: { default: !0 }
																			});
																		});
																	}
																	q(e, o);
																}), q(e, t);
															};
															J(r, (e) => {
																U(b).length === 0 ? e(i) : e(a, -1);
															}), q(e, n);
														},
														$$slots: { default: !0 }
													});
												}), q(e, n);
											},
											$$slots: { default: !0 }
										});
									});
								}
								q(e, n);
							},
							$$slots: { default: !0 }
						});
					}), q(e, n);
				},
				$$slots: { default: !0 }
			}));
		}), q(e, t);
	}, E = (e) => {
		var t = K();
		Ki(B(t), () => LT, (e, t) => {
			t(e, Ga({
				type: "single",
				get value() {
					return U(g);
				},
				get disabled() {
					return u();
				}
			}, () => f, {
				children: (e, t) => {
					var n = OE(), r = B(n);
					{
						let e = /* @__PURE__ */ F(() => $v("nopan nodrag tf-select", u() && " tf-select-disabled", d()));
						Ki(r, () => BT, (t, n) => {
							n(t, {
								get class() {
									return U(e);
								},
								get disabled() {
									return u();
								},
								children: (e, t) => {
									var n = AE(), r = B(n), i = z(r), a = (e) => {
										xE(e, { get target() {
											return U(h)[0].label;
										} });
									}, o = (e) => {
										var t = kE(), n = z(t, !0);
										j(t), H(() => yi(n, l() ?? "")), q(e, t);
									};
									J(i, (e) => {
										U(h).length > 0 ? e(a) : e(o, -1);
									}), j(r), CE(V(r, 2), { class: "tf-select-icon" }), q(e, n);
								},
								$$slots: { default: !0 }
							});
						});
					}
					Ki(V(r, 2), () => qb, (e, t) => {
						t(e, {
							children: (e, t) => {
								var n = K(), r = B(n);
								{
									let e = /* @__PURE__ */ F(() => $v("nopan nodrag nowheel tf-root tf-select-content", p === "dark" && "dark"));
									Ki(r, () => ET, (t, n) => {
										n(t, {
											get class() {
												return U(e);
											},
											children: (e, t) => {
												var n = K();
												Ki(B(n), () => FT, (e, t) => {
													t(e, {
														style: "padding: 4px;",
														children: (e, t) => {
															var n = K(), r = B(n), i = (e) => {
																q(e, jE());
															}, a = (e) => {
																var t = K();
																zi(B(t), 19, () => U(b), ({ item: e, level: t }, n) => `${n}_${e.value}`, (e, t) => {
																	let n = () => U(t).item, r = () => U(t).level, i = /* @__PURE__ */ F(() => n().children && n().children.length > 0), a = /* @__PURE__ */ F(() => x(n()));
																	var o = K(), s = B(o);
																	{
																		let e = (e, t) => {
																			let r = () => (t?.()).selected;
																			var a = FE(), o = B(a), s = z(o), c = (e) => {
																				q(e, ME());
																			}, l = (e) => {
																				q(e, NE());
																			};
																			J(s, (e) => {
																				U(i) ? e(c) : e(l, -1);
																			}), xE(V(s, 2), { get target() {
																				return n().label;
																			} }), j(o);
																			var u = V(o, 2), d = (e) => {
																				q(e, PE());
																			};
																			J(u, (e) => {
																				r() && e(d);
																			}), q(e, a);
																		}, t = /* @__PURE__ */ F(() => r() * 12);
																		Ki(s, () => jT, (r, i) => {
																			i(r, {
																				get value() {
																					return U(a).value;
																				},
																				get label() {
																					return U(a).label;
																				},
																				class: "tf-select-option",
																				get style() {
																					return `padding-left: ${U(t) ?? ""}px`;
																				},
																				onclick: (e) => v(e, n()),
																				children: e,
																				$$slots: { default: !0 }
																			});
																		});
																	}
																	q(e, o);
																}), q(e, t);
															};
															J(r, (e) => {
																U(b).length === 0 ? e(i) : e(a, -1);
															}), q(e, n);
														},
														$$slots: { default: !0 }
													});
												}), q(e, n);
											},
											$$slots: { default: !0 }
										});
									});
								}
								q(e, n);
							},
							$$slots: { default: !0 }
						});
					}), q(e, n);
				},
				$$slots: { default: !0 }
			}));
		}), q(e, t);
	};
	return J(w, (e) => {
		s() ? e(T) : e(E, -1);
	}), q(e, C), P(S);
}
Z(IE, {
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
var LE = ({ trigger: e, triggerEvent: t, floatContent: n, placement: r = "bottom", offsetOptions: i, flipOptions: a, shiftOptions: o, interactive: s, showArrow: c }) => {
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
		Aw(e, l, {
			placement: r,
			middleware: [
				Cw(i),
				Tw(a),
				ww(o),
				...c ? [Ow({ element: u })] : []
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
}, RE = /* @__PURE__ */ W("<div style=\"position: relative\"><div><!></div> <div style=\"display: none; width: 100%;z-index: 9999\"><!></div></div>");
function zE(e, t) {
	N(t, !0);
	let n = X(t, "children", 7), r = X(t, "floating", 7), i = X(t, "placement", 7, "bottom"), a, o, s;
	Oi(() => (s = LE({
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
			n(e), I();
		},
		get floating() {
			return r();
		},
		set floating(e) {
			r(e), I();
		},
		get placement() {
			return i();
		},
		set placement(e = "bottom") {
			i(e), I();
		}
	}, u = RE(), d = z(u);
	Di(z(d), n), j(d), La(d, (e) => a = e, () => a);
	var f = V(d, 2);
	return Di(z(f), r), j(f), La(f, (e) => o = e, () => o), j(u), q(e, u), P(l);
}
Z(zE, {
	children: {},
	floating: {},
	placement: {}
}, [], ["hide"], { mode: "open" });
function BE(e, t) {
	N(t, !0);
	let n = X(t, "children", 7), r = X(t, "level", 7, 1), i = X(t, "mt", 7), a = X(t, "mb", 7);
	var o = {
		get children() {
			return n();
		},
		set children(e) {
			n(e), I();
		},
		get level() {
			return r();
		},
		set level(e = 1) {
			r(e), I();
		},
		get mt() {
			return i();
		},
		set mt(e) {
			i(e), I();
		},
		get mb() {
			return a();
		},
		set mb(e) {
			a(e), I();
		}
	}, s = K();
	return qi(B(s), () => `h${r()}`, !1, (e, t) => {
		Ea(e, () => ({
			class: "tf-heading",
			style: `margin-top:${(i() || "0") ?? ""};margin-bottom:${(a() || "0") ?? ""}`
		}));
		var r = K();
		Di(B(r), () => n() ?? T), q(t, r);
	}), q(e, s), P(o);
}
Z(BE, {
	children: {},
	level: {},
	mt: {},
	mb: {}
}, [], [], { mode: "open" });
var VE = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host"
]), HE = /* @__PURE__ */ G("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"svelte-1q3h954\"><path d=\"M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z\" class=\"svelte-1q3h954\"></path></svg>"), UE = {
	hash: "svelte-1q3h954",
	code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:var(--tf-input);border:1px solid transparent;}}"
};
function WE(e, t) {
	N(t, !0), Yi(e, UE);
	let n = /* @__PURE__ */ Va(t, VE);
	{
		let r = /* @__PURE__ */ F(() => $v("input-btn-more", t.class));
		ay(e, Ga({
			size: "icon-xs",
			get class() {
				return U(r);
			}
		}, () => n, {
			children: (e, t) => {
				q(e, HE());
			},
			$$slots: { default: !0 }
		}));
	}
	P();
}
Z(WE, {}, [], [], { mode: "open" });
var GE = () => ({ deleteNode: (e) => {
	Qv.removeNode(e), Qv.updateEdges((t) => t.filter((t) => t.source !== e && t.target !== e));
} }), KE = (e = 16) => {
	let t = new Uint8Array(e);
	return crypto.getRandomValues(t), Array.from(t, (e) => "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"[e % 62]).join("");
}, qE = (e) => JSON.parse(JSON.stringify(e)), JE = () => ({ copyNode: (e) => {
	let t = Qv.getNode(e);
	if (t) {
		let e = {
			...qE(t),
			id: KE(),
			position: {
				x: t.position.x + 50,
				y: t.position.y + 50
			}
		};
		if (e.data?.parameters) for (let t of e.data.parameters) t.id = KE(), t.ref = void 0;
		Qv.updateNodes((t) => [...t.map((e) => ({
			...e,
			selected: !1
		})), e]);
	}
} }), YE = /* @__PURE__ */ G("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z\"></path></svg>"), XE = /* @__PURE__ */ G("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z\"></path></svg>"), ZE = /* @__PURE__ */ G("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z\"></path></svg>"), QE = /* @__PURE__ */ W("<div class=\"input-item svelte-ana6zl\">执行条件： <!></div>"), $E = /* @__PURE__ */ W("<div class=\"input-item svelte-ana6zl\">循环间隔时间（单位：毫秒）： <!></div> <div class=\"input-item svelte-ana6zl\">最大循环次数（0 表示不限制）： <!></div> <div class=\"input-item svelte-ana6zl\">退出条件： <!></div>", 1), eD = /* @__PURE__ */ W("<div class=\"input-item svelte-ana6zl\">错误重试间隔时间（单位：毫秒）： <!></div> <div class=\"input-item svelte-ana6zl\">最大重试次数： <!></div> <label class=\"input-item-inline svelte-ana6zl\"><span>正常后重置重试次数记录：</span> <input type=\"checkbox\"/></label>", 1), tD = /* @__PURE__ */ W("<div class=\"settings svelte-ana6zl\"><div class=\"input-item svelte-ana6zl\">节点名称： <!></div> <div class=\"input-item svelte-ana6zl\">参数描述： <!></div> <!> <label class=\"input-item-inline svelte-ana6zl\"><span>循环执行：</span> <input type=\"checkbox\"/></label> <!> <label class=\"input-item-inline svelte-ana6zl\"><span>错误重试：</span> <input type=\"checkbox\"/></label> <!></div>"), nD = /* @__PURE__ */ G("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z\"></path></svg>"), rD = /* @__PURE__ */ W("<div class=\"tf-node-toolbar svelte-ana6zl\"><!> <!> <!> <!></div>"), iD = /* @__PURE__ */ W("<!> <div class=\"tf-node-wrapper\"><div class=\"tf-node-wrapper-title\">TinyFlow.ai</div> <div class=\"tf-node-wrapper-body\"><!></div></div> <!> <!> <!>", 1), aD = {
	hash: "svelte-ana6zl",
	code: ".tf-node-toolbar.svelte-ana6zl {display:flex;gap:5px;padding:5px;border-radius:5px;background:var(--tf-background);border:1px solid var(--tf-border);box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-ana6zl {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--tf-background);border:1px solid var(--tf-border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-ana6zl .input-item:where(.svelte-ana6zl) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--tf-muted-foreground);}.settings.svelte-ana6zl .input-item-inline:where(.svelte-ana6zl) {display:flex;align-items:center;font-size:12px;color:var(--tf-muted-foreground);}"
};
function oD(e, t) {
	N(t, !0), Yi(e, aD);
	let n = X(t, "data", 7), r = X(t, "id", 7, ""), i = X(t, "icon", 7), a = X(t, "handle", 7), o = X(t, "children", 7), s = X(t, "allowExecute", 7, !0), c = X(t, "allowCopy", 7, !0), l = X(t, "allowDelete", 7, !0), u = X(t, "allowSetting", 7, !0), d = X(t, "allowSettingOfCondition", 7, !0), f = X(t, "showSourceHandle", 7, !0), p = X(t, "showTargetHandle", 7, !0), m = X(t, "onCollapse", 7), h = n().expand ? ["key"] : [], { updateNodeData: g, getNode: _ } = $h(), v = /* @__PURE__ */ F(() => [{
		key: "key",
		icon: i(),
		title: n().title,
		description: n().description,
		content: o()
	}]), { deleteNode: y } = GE(), { copyNode: b } = JE(), x = TE(), S = () => {
		x.onNodeExecute?.(_(r()));
	}, C = wE();
	var w = {
		get data() {
			return n();
		},
		set data(e) {
			n(e), I();
		},
		get id() {
			return r();
		},
		set id(e = "") {
			r(e), I();
		},
		get icon() {
			return i();
		},
		set icon(e) {
			i(e), I();
		},
		get handle() {
			return a();
		},
		set handle(e) {
			a(e), I();
		},
		get children() {
			return o();
		},
		set children(e) {
			o(e), I();
		},
		get allowExecute() {
			return s();
		},
		set allowExecute(e = !0) {
			s(e), I();
		},
		get allowCopy() {
			return c();
		},
		set allowCopy(e = !0) {
			c(e), I();
		},
		get allowDelete() {
			return l();
		},
		set allowDelete(e = !0) {
			l(e), I();
		},
		get allowSetting() {
			return u();
		},
		set allowSetting(e = !0) {
			u(e), I();
		},
		get allowSettingOfCondition() {
			return d();
		},
		set allowSettingOfCondition(e = !0) {
			d(e), I();
		},
		get showSourceHandle() {
			return f();
		},
		set showSourceHandle(e = !0) {
			f(e), I();
		},
		get showTargetHandle() {
			return p();
		},
		set showTargetHandle(e = !0) {
			p(e), I();
		},
		get onCollapse() {
			return m();
		},
		set onCollapse(e) {
			m(e), I();
		}
	}, E = iD(), D = B(E), ee = (e) => {
		n_(e, {
			get position() {
				return Q.Top;
			},
			align: "start",
			children: (e, t) => {
				var i = rD(), a = z(i), o = (e) => {
					ay(e, {
						size: "icon",
						class: "tf-node-toolbar-item",
						onclick: () => {
							y(r());
						},
						children: (e, t) => {
							q(e, YE());
						},
						$$slots: { default: !0 }
					});
				};
				J(a, (e) => {
					l() && e(o);
				});
				var f = V(a, 2), p = (e) => {
					ay(e, {
						size: "icon",
						class: "tf-node-toolbar-item",
						onclick: () => {
							b(r());
						},
						children: (e, t) => {
							q(e, XE());
						},
						$$slots: { default: !0 }
					});
				};
				J(f, (e) => {
					c() && e(p);
				});
				var m = V(f, 2), h = (e) => {
					ay(e, {
						size: "icon",
						class: "tf-node-toolbar-item",
						onclick: S,
						children: (e, t) => {
							q(e, ZE());
						},
						$$slots: { default: !0 }
					});
				};
				J(m, (e) => {
					s() && e(h);
				});
				var _ = V(m, 2), v = (e) => {
					zE(e, {
						placement: "bottom",
						floating: (e) => {
							var t = tD(), r = z(t);
							sE(V(z(r)), {
								style: "width: 100%;",
								onchange: (e) => {
									let t = e.target.value;
									g(C, { title: t });
								},
								get value() {
									return n().title;
								}
							}), j(r);
							var i = V(r, 2);
							uE(V(z(i)), {
								rows: 3,
								style: "width: 100%;",
								onchange: (e) => {
									let t = e.target.value;
									g(C, { description: t });
								},
								get value() {
									return n().description;
								}
							}), j(i);
							var a = V(i, 2), o = (e) => {
								var t = QE();
								uE(V(z(t)), {
									rows: 2,
									style: "width: 100%;",
									onchange: (e) => {
										let t = e.target.value;
										g(C, { condition: t });
									},
									get value() {
										return n().condition;
									}
								}), j(t), q(e, t);
							};
							J(a, (e) => {
								d() && e(o);
							});
							var s = V(a, 2), c = V(z(s), 2);
							xa(c), j(s);
							var l = V(s, 2), u = (e) => {
								var t = $E(), r = B(t), i = V(z(r));
								{
									let e = /* @__PURE__ */ F(() => n().loopIntervalMs || "1000");
									uE(i, {
										rows: 1,
										style: "width: 100%;",
										onchange: (e) => {
											let t = e.target.value;
											g(C, { loopIntervalMs: t });
										},
										get value() {
											return U(e);
										}
									});
								}
								j(r);
								var a = V(r, 2), o = V(z(a));
								{
									let e = /* @__PURE__ */ F(() => n().maxLoopCount || "0");
									uE(o, {
										rows: 1,
										style: "width: 100%;",
										onchange: (e) => {
											let t = e.target.value;
											g(C, { maxLoopCount: t });
										},
										get value() {
											return U(e);
										}
									});
								}
								j(a);
								var s = V(a, 2);
								uE(V(z(s)), {
									rows: 2,
									style: "width: 100%;",
									onchange: (e) => {
										let t = e.target.value;
										g(C, { loopBreakCondition: t });
									},
									get value() {
										return n().loopBreakCondition;
									}
								}), j(s), q(e, t);
							};
							J(l, (e) => {
								n().loopEnable && e(u);
							});
							var f = V(l, 2), p = V(z(f), 2);
							xa(p), j(f);
							var m = V(f, 2), h = (e) => {
								var t = eD(), r = B(t), i = V(z(r));
								{
									let e = /* @__PURE__ */ F(() => n().retryIntervalMs || "1000");
									uE(i, {
										rows: 1,
										style: "width: 100%;",
										onchange: (e) => {
											let t = e.target.value;
											g(C, { retryIntervalMs: t });
										},
										get value() {
											return U(e);
										}
									});
								}
								j(r);
								var a = V(r, 2), o = V(z(a));
								{
									let e = /* @__PURE__ */ F(() => n().maxRetryCount || "3");
									uE(o, {
										rows: 1,
										style: "width: 100%;",
										onchange: (e) => {
											let t = e.target.value;
											g(C, { maxRetryCount: t });
										},
										get value() {
											return U(e);
										}
									});
								}
								j(a);
								var s = V(a, 2), c = V(z(s), 2);
								xa(c), j(s), H(() => Ca(c, !!n().resetRetryCountAfterNormal)), Qr("change", c, (e) => {
									let t = e.target.checked;
									g(C, { resetRetryCountAfterNormal: t });
								}), q(e, t);
							};
							J(m, (e) => {
								n().retryEnable && e(h);
							}), j(t), H(() => {
								Ca(c, !!n().loopEnable), Ca(p, !!n().retryEnable);
							}), Qr("change", c, (e) => {
								let t = e.target.checked;
								g(C, { loopEnable: t });
							}), Qr("change", p, (e) => {
								let t = e.target.checked;
								g(C, { retryEnable: t });
							}), q(e, t);
						},
						children: (e, t) => {
							ay(e, {
								size: "icon",
								class: "tf-node-toolbar-item",
								children: (e, t) => {
									q(e, nD());
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
				}), j(i), q(e, i);
			},
			$$slots: { default: !0 }
		});
	};
	J(D, (e) => {
		(s() || c() || l()) && e(ee);
	});
	var O = V(D, 2), te = V(z(O), 2);
	bE(z(te), {
		get items() {
			return U(v);
		},
		get activeKeys() {
			return h;
		},
		onChange: (e, t) => {
			g(r(), { expand: t?.includes("key") }), m()?.(t?.includes("key") ? "key" : "");
		}
	}), j(te), j(O);
	var ne = V(O, 2), re = (e) => {
		wm(e, {
			type: "target",
			get position() {
				return Q.Left;
			},
			style: " left: -12px;top: 20px"
		});
	};
	J(ne, (e) => {
		p() && e(re);
	});
	var k = V(ne, 2), ie = (e) => {
		wm(e, {
			type: "source",
			get position() {
				return Q.Right;
			},
			style: "right: -12px;top: 20px"
		});
	};
	return J(k, (e) => {
		f() && e(ie);
	}), Di(V(k, 2), () => a() ?? T), q(e, E), P(w);
}
$r(["change"]), Z(oD, {
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
var sD = /* @__PURE__ */ W("<div class=\"input-more-item svelte-n5iecj\">数据选项： <!></div>"), cD = /* @__PURE__ */ W("<div class=\"input-more-setting svelte-n5iecj\"><div class=\"input-more-item svelte-n5iecj\">数据类型： <!></div> <div class=\"input-more-item svelte-n5iecj\">输入方式： <!></div> <!> <div class=\"input-more-item svelte-n5iecj\">数据标题： <!></div> <div class=\"input-more-item svelte-n5iecj\">数据描述： <!></div> <div class=\"input-more-item svelte-n5iecj\">占位符： <!></div> <div class=\"input-more-item svelte-n5iecj\">参数描述： <!></div> <div class=\"input-more-item svelte-n5iecj\"><!></div></div>"), lD = /* @__PURE__ */ G("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z\"></path></svg>"), uD = /* @__PURE__ */ W("<div class=\"input-item svelte-n5iecj\"><!></div> <div class=\"input-item svelte-n5iecj\"><!></div> <div class=\"input-item svelte-n5iecj\"><!></div>", 1), dD = {
	hash: "svelte-n5iecj",
	code: ".input-item.svelte-n5iecj {display:flex;align-items:center;}.input-more-setting.svelte-n5iecj {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--tf-background);border:1px solid var(--tf-border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-n5iecj .input-more-item:where(.svelte-n5iecj) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--tf-muted-foreground);}"
};
function fD(e, t) {
	N(t, !0), Yi(e, dD);
	let n = X(t, "parameter", 7), r = X(t, "index", 7), i = wE(), a = r_(i), o = /* @__PURE__ */ F(() => ({
		...n(),
		...(a?.current?.data?.parameters)[r()]
	})), s = /* @__PURE__ */ F(() => ["text", "other"].includes(U(o).contentType || "text") ? c_ : l_), c = /* @__PURE__ */ F(() => U(o).contentType === "text" || !U(o).contentType), { updateNodeData: l } = $h(), u = (e, t) => {
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
		["text", "other"].includes(t) || U(o).formType != "radio" && U(o).formType != "checkbox" && u("formType", "radio"), u("contentType", t);
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
			n(e), I();
		},
		get index() {
			return r();
		},
		set index(e) {
			r(e), I();
		}
	}, y = uD(), b = B(y);
	sE(z(b), {
		style: "width: 100%;",
		get value() {
			return U(o).name;
		},
		placeholder: "请输入参数",
		oninput: f
	}), j(b);
	var x = V(b, 2);
	eE(z(x), {
		get checked() {
			return U(o).required;
		},
		onCheckedChange: p
	}), j(x);
	var S = V(x, 2);
	return La(zE(z(S), {
		placement: "bottom",
		floating: (e) => {
			var t = cD(), n = z(t), r = V(z(n));
			{
				let e = /* @__PURE__ */ F(() => U(o).contentType ? [U(o).contentType] : []);
				IE(r, {
					get items() {
						return s_;
					},
					style: "width: 100%",
					defaultValue: ["text"],
					get value() {
						return U(e);
					},
					onSelect: h
				});
			}
			j(n);
			var i = V(n, 2), a = V(z(i));
			{
				let e = /* @__PURE__ */ F(() => U(o).formType ? [U(o).formType] : []);
				IE(a, {
					get items() {
						return U(s);
					},
					style: "width: 100%",
					defaultValue: ["input"],
					get value() {
						return U(e);
					},
					onSelect: m
				});
			}
			j(i);
			var l = V(i, 2), f = (e) => {
				var t = sD(), n = V(z(t));
				{
					let e = /* @__PURE__ */ F(() => U(o).enums?.join("\n"));
					uE(n, {
						rows: 3,
						style: "width: 100%;",
						onchange: (e) => {
							u("enums", e.currentTarget.value.trim().split("\n"));
						},
						get value() {
							return U(e);
						},
						placeholder: "一行一个选项"
					});
				}
				j(t), q(e, t);
			};
			J(l, (e) => {
				U(c) && (U(o).formType === "radio" || U(o).formType === "checkbox" || U(o).formType === "select") && e(f);
			});
			var p = V(l, 2);
			uE(V(z(p)), {
				rows: 1,
				style: "width: 100%;",
				onchange: (e) => {
					d("formLabel", e);
				},
				get value() {
					return U(o).formLabel;
				},
				placeholder: "请输入数据标题"
			}), j(p);
			var g = V(p, 2);
			uE(V(z(g)), {
				rows: 2,
				style: "width: 100%;",
				onchange: (e) => {
					d("formDescription", e);
				},
				get value() {
					return U(o).formDescription;
				},
				placeholder: "请输入数据描述"
			}), j(g);
			var v = V(g, 2);
			uE(V(z(v)), {
				rows: 2,
				style: "width: 100%;",
				onchange: (e) => {
					d("formPlaceholder", e);
				},
				get value() {
					return U(o).formPlaceholder;
				},
				placeholder: "请输入占位符"
			}), j(v);
			var y = V(v, 2);
			uE(V(z(y)), {
				rows: 3,
				style: "width: 100%;",
				onchange: (e) => {
					d("description", e);
				},
				get value() {
					return U(o).description;
				},
				placeholder: "请输入参数描述"
			}), j(y);
			var b = V(y, 2);
			ay(z(b), {
				variant: "destructive",
				onclick: _,
				children: (e, t) => {
					M(), q(e, si("删除"));
				},
				$$slots: { default: !0 }
			}), j(b), j(t), q(e, t);
		},
		children: (e, t) => {
			ay(e, {
				size: "icon-xs",
				class: "input-btn-more",
				children: (e, t) => {
					q(e, lD());
				},
				$$slots: { default: !0 }
			});
		},
		$$slots: {
			floating: !0,
			default: !0
		}
	}), (e) => g = e, () => g), j(S), q(e, y), P(v);
}
Z(fD, {
	parameter: {},
	index: {}
}, [], [], { mode: "open" });
var pD = /* @__PURE__ */ W("<div class=\"input-header svelte-1yp5n1k\">参数名称</div> <div class=\"input-header svelte-1yp5n1k\">必填</div> <div class=\"input-header svelte-1yp5n1k\"></div>", 1), mD = /* @__PURE__ */ W("<div class=\"none-params svelte-1yp5n1k\">无输入参数</div>"), hD = /* @__PURE__ */ W("<div class=\"input-container svelte-1yp5n1k\"><!> <!></div>"), gD = {
	hash: "svelte-1yp5n1k",
	code: ".input-container.svelte-1yp5n1k {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1yp5n1k .none-params:where(.svelte-1yp5n1k) {font-size:12px;background:var(--tf-secondary);height:20px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;\n  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1yp5n1k .input-header:where(.svelte-1yp5n1k) {font-size:12px;color:var(--tf-muted-foreground);}"
};
function _D(e, t) {
	N(t, !0), Yi(e, gD);
	let n = r_(wE()), r = /* @__PURE__ */ F(() => [...n?.current?.data?.parameters || []]);
	var i = hD(), a = z(i), o = (e) => {
		var t = pD();
		M(4), q(e, t);
	};
	J(a, (e) => {
		U(r).length !== 0 && e(o);
	}), zi(V(a, 2), 19, () => U(r), (e) => e.id, (e, t, n) => {
		fD(e, {
			get parameter() {
				return U(t);
			},
			get index() {
				return U(n);
			}
		});
	}, (e) => {
		q(e, mD());
	}), j(i), q(e, i), P();
}
Z(_D, {}, [], [], { mode: "open" });
var vD = (e) => (!e || e.length == 0 || e.forEach((e) => {
	e.id ||= KE(), vD(e.children);
}), e), yD = () => {
	let { updateNodeData: e } = $h();
	return { addParameter: (t, n = "parameters", r) => {
		Array.isArray(r) ? r.forEach((e) => vD(e?.children)) : vD(r?.children);
		function i(e) {
			return {
				name: "",
				refType: "ref",
				...e,
				id: KE()
			};
		}
		let a = [];
		Array.isArray(r) ? a.push(...r.map(i)) : a.push(i(r)), e(t, (e) => {
			let t = e.data[n];
			return t ? t.push(...a) : t = [...a], { [n]: [...t] };
		});
	} };
}, bD = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"data"
]), xD = /* @__PURE__ */ G("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z\"></path></svg>"), SD = /* @__PURE__ */ G("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z\"></path></svg>"), CD = /* @__PURE__ */ W("<div class=\"heading svelte-llt1qy\"><!> <!></div> <!>", 1), wD = {
	hash: "svelte-llt1qy",
	code: ".heading.svelte-llt1qy {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:var(--tf-muted);border:1px solid transparent;}"
};
function TD(e, t) {
	N(t, !0), Yi(e, wD);
	let n = X(t, "data", 7), r = /* @__PURE__ */ Va(t, bD), i = wE(), { addParameter: a } = yD();
	return oD(e, Ga(() => r, {
		get data() {
			return n();
		},
		allowExecute: !1,
		showTargetHandle: !1,
		allowSettingOfCondition: !1,
		icon: (e) => {
			q(e, xD());
		},
		children: (e, t) => {
			var n = CD(), r = B(n), o = z(r);
			BE(o, {
				level: 3,
				children: (e, t) => {
					M(), q(e, si("输入参数"));
				},
				$$slots: { default: !0 }
			}), ay(V(o, 2), {
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
					q(e, SD());
				},
				$$slots: { default: !0 }
			}), j(r), _D(V(r, 2), {}), q(e, n);
		},
		$$slots: {
			icon: !0,
			default: !0
		}
	})), P({
		get data() {
			return n();
		},
		set data(e) {
			n(e), I();
		}
	});
}
Z(TD, { data: {} }, [], [], { mode: "open" });
var ED = (e, t, n) => {
	for (let r of n) r.target === t && r.source && !e.includes(r.source) && (e.push(r.source), ED(e, r.source, n));
}, DD = (e, t, n, r) => !e || e.length === 0 ? [] : e.map((e) => ({
	label: e.name + r(e, n),
	value: t + "." + e.name,
	children: DD(e.children, t + "." + e.name, n, r)
})), OD = (e) => e.contentType === "text" || !e.contentType, kD = (e, t, n, r) => {
	if (e.type === "startNode") {
		let n = e.data.parameters, i = [];
		if (n) for (let a of n) i.push({
			label: a.name + r(a, t || !OD(a) && a.formType === "checkbox"),
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
			children: DD(n, e.id, t || e.type === "loopNode", r)
		};
	}
}, AD = (e = !1) => {
	let t = wE(), n = r_(t), r = /* @__PURE__ */ F(uh), i = /* @__PURE__ */ F(() => U(r).nodes), a = /* @__PURE__ */ F(() => U(r).edges), o = /* @__PURE__ */ F(() => U(r).nodeLookup), s = /* @__PURE__ */ F(() => {
		let r = [];
		if (!n.current) return [];
		let s = U(o).get(t), c = (e, t) => {
			if (e?.dataType) return l(e.dataType, t);
			if (e?.ref) {
				let n = e?.ref?.split(".");
				for (let e of U(i)) if (e.id === n[0]) {
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
		if (e) for (let e of U(i)) {
			let t = e.parentId === n.current.id;
			if (t) {
				let n = kD(e, t, s, c);
				n && r.push(n);
			}
		}
		else {
			let e = [];
			ED(e, t, U(a));
			for (let t of U(i)) if (e.includes(t.id)) {
				let e = kD(t, t.parentId === n.current.id, s, c);
				e && r.push(e);
			}
		}
		return r;
	});
	return { get current() {
		return U(s);
	} };
}, jD = /* @__PURE__ */ W("<div class=\"input-more-item svelte-jmeys3\">数据类型： <!></div>"), MD = /* @__PURE__ */ W("<div class=\"input-more-item svelte-jmeys3\">数据选项： <!></div>"), ND = /* @__PURE__ */ W("<div class=\"input-more-item svelte-jmeys3\">输入方式： <!></div> <label class=\"input-more-item svelte-jmeys3\" style=\"display: flex;flex-direction: row;align-items: center\">是否必填: <input type=\"checkbox\"/></label> <!> <div class=\"input-more-item svelte-jmeys3\">数据标题： <!></div> <div class=\"input-more-item svelte-jmeys3\">数据描述： <!></div> <div class=\"input-more-item svelte-jmeys3\">占位符： <!></div>", 1), PD = /* @__PURE__ */ W("<div class=\"input-more-setting svelte-jmeys3\"><div class=\"input-more-item svelte-jmeys3\">数据来源： <!></div> <!> <!> <div class=\"input-more-item svelte-jmeys3\">默认值： <!></div> <div class=\"input-more-item svelte-jmeys3\"><!></div></div>"), FD = /* @__PURE__ */ W("<div class=\"input-item svelte-jmeys3\"><!></div> <div class=\"input-item svelte-jmeys3\"><!></div> <div class=\"input-item svelte-jmeys3\"><!></div>", 1), ID = {
	hash: "svelte-jmeys3",
	code: ".input-item.svelte-jmeys3 {display:flex;align-items:center;}.input-more-setting.svelte-jmeys3 {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--tf-background);border:1px solid var(--tf-border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-jmeys3 .input-more-item:where(.svelte-jmeys3) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--tf-muted-foreground);}"
};
function LD(e, t) {
	N(t, !0), Yi(e, ID), Oi(() => {
		U(l).refType || g({ value: "ref" });
	});
	let n = X(t, "parameter", 7), r = X(t, "index", 7), i = X(t, "dataKeyName", 7), a = X(t, "useChildrenOnly", 7), o = X(t, "showContentType", 7, !1), s = wE(), c = r_(s), l = /* @__PURE__ */ F(() => ({
		...n(),
		...(c?.current?.data?.[i()])[r()]
	})), u = /* @__PURE__ */ F(() => ["text", "other"].includes(U(l).contentType || "text") ? c_ : l_), d = /* @__PURE__ */ F(() => U(l).contentType === "text" || !U(l).contentType), { updateNodeData: f } = $h(), p = (e, t) => {
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
		p("refType", t), t === "form" && (p("contentType", U(l).contentType || "text"), p("formType", U(l).formType || "input"));
	}, _ = (e) => {
		let t = e.value;
		["text", "other"].includes(t) || U(l).formType != "radio" && U(l).formType != "checkbox" && p("formType", "radio"), p("contentType", t);
	}, v = (e) => {
		let t = e.value;
		p("formType", t);
	}, y, b = () => {
		f(s, (e) => {
			let t = e.data?.[i()];
			return t.splice(r(), 1), { [i()]: [...t] };
		}), y?.hide();
	}, x = AD(a()), S = TE().formRefTypeEnable ? o_ : o_.filter((e) => e.value !== "form");
	var C = {
		get parameter() {
			return n();
		},
		set parameter(e) {
			n(e), I();
		},
		get index() {
			return r();
		},
		set index(e) {
			r(e), I();
		},
		get dataKeyName() {
			return i();
		},
		set dataKeyName(e) {
			i(e), I();
		},
		get useChildrenOnly() {
			return a();
		},
		set useChildrenOnly(e) {
			a(e), I();
		},
		get showContentType() {
			return o();
		},
		set showContentType(e = !1) {
			o(e), I();
		}
	}, w = FD(), T = B(w), E = z(T);
	{
		let e = /* @__PURE__ */ F(() => U(l).nameDisabled === !0);
		sE(E, {
			style: "width: 100%;",
			get value() {
				return U(l).name;
			},
			placeholder: "请输入参数",
			get disabled() {
				return U(e);
			},
			oninput: (e) => m("name", e)
		});
	}
	j(T);
	var D = V(T, 2), ee = z(D), O = (e) => {
		sE(e, {
			get value() {
				return U(l).value;
			},
			placeholder: "请输入参数值",
			oninput: (e) => m("value", e)
		});
	}, te = (e) => {
		{
			let t = /* @__PURE__ */ F(() => [U(l).ref]);
			IE(e, {
				get items() {
					return x.current;
				},
				style: "width: 100%",
				defaultValue: ["ref"],
				get value() {
					return U(t);
				},
				expandAll: !0,
				onSelect: h
			});
		}
	}, ne = (e) => {
		sE(e, {
			placeholder: "在执行期间，由用户输入",
			disabled: !0
		});
	};
	J(ee, (e) => {
		U(l).refType === "fixed" ? e(O) : U(l).refType === "ref" ? e(te, 1) : U(l).refType === "form" && e(ne, 2);
	}), j(D);
	var re = V(D, 2);
	return La(zE(z(re), {
		placement: "bottom",
		floating: (e) => {
			var t = PD(), n = z(t), r = V(z(n));
			{
				let e = /* @__PURE__ */ F(() => U(l).refType ? [U(l).refType] : []);
				IE(r, {
					get items() {
						return S;
					},
					style: "width: 100%",
					defaultValue: ["ref"],
					get value() {
						return U(e);
					},
					onSelect: g
				});
			}
			j(n);
			var i = V(n, 2), a = (e) => {
				var t = jD(), n = V(z(t));
				{
					let e = /* @__PURE__ */ F(() => U(l).contentType ? [U(l).contentType] : []);
					IE(n, {
						get items() {
							return s_;
						},
						style: "width: 100%",
						defaultValue: ["text"],
						get value() {
							return U(e);
						},
						onSelect: _
					});
				}
				j(t), q(e, t);
			};
			J(i, (e) => {
				(o() || U(l).refType === "form") && e(a);
			});
			var s = V(i, 2), c = (e) => {
				var t = ND(), n = B(t), r = V(z(n));
				{
					let e = /* @__PURE__ */ F(() => U(l).formType ? [U(l).formType] : []);
					IE(r, {
						get items() {
							return U(u);
						},
						style: "width: 100%",
						defaultValue: ["input"],
						get value() {
							return U(e);
						},
						onSelect: v
					});
				}
				j(n);
				var i = V(n, 2), a = V(z(i));
				xa(a), j(i);
				var o = V(i, 2), s = (e) => {
					var t = MD(), n = V(z(t));
					{
						let e = /* @__PURE__ */ F(() => U(l).enums?.join("\n"));
						uE(n, {
							rows: 3,
							style: "width: 100%;",
							onchange: (e) => {
								p("enums", e.currentTarget.value.trim().split("\n"));
							},
							get value() {
								return U(e);
							},
							placeholder: "一行一个选项"
						});
					}
					j(t), q(e, t);
				};
				J(o, (e) => {
					U(d) && (U(l).formType === "radio" || U(l).formType === "checkbox" || U(l).formType === "select") && e(s);
				});
				var c = V(o, 2);
				uE(V(z(c)), {
					rows: 1,
					placeholder: "请输入数据标题",
					style: "width: 100%;",
					onchange: (e) => {
						m("formLabel", e);
					},
					get value() {
						return U(l).formLabel;
					}
				}), j(c);
				var f = V(c, 2);
				uE(V(z(f)), {
					rows: 2,
					placeholder: "请输入数据描述",
					style: "width: 100%;",
					onchange: (e) => {
						m("formDescription", e);
					},
					get value() {
						return U(l).formDescription;
					}
				}), j(f);
				var h = V(f, 2);
				uE(V(z(h)), {
					rows: 2,
					placeholder: "请输入占位符内容",
					style: "width: 100%;",
					onchange: (e) => {
						m("formPlaceholder", e);
					},
					get value() {
						return U(l).formPlaceholder;
					}
				}), j(h), H(() => Ca(a, !!U(l).required)), Qr("change", a, (e) => {
					let t = e.target.checked;
					p("required", t);
				}), q(e, t);
			};
			J(s, (e) => {
				U(l).refType === "form" && e(c);
			});
			var f = V(s, 2);
			uE(V(z(f)), {
				rows: 1,
				style: "width: 100%;",
				onchange: (e) => {
					m("defaultValue", e);
				},
				get value() {
					return U(l).defaultValue;
				},
				placeholder: "请输入参数默认值"
			}), j(f);
			var h = V(f, 2);
			ay(z(h), {
				variant: "destructive",
				onclick: b,
				children: (e, t) => {
					M(), q(e, si("删除"));
				},
				$$slots: { default: !0 }
			}), j(h), j(t), q(e, t);
		},
		children: (e, t) => {
			WE(e, {});
		},
		$$slots: {
			floating: !0,
			default: !0
		}
	}), (e) => y = e, () => y), j(re), q(e, w), P(C);
}
$r(["change"]), Z(LD, {
	parameter: {},
	index: {},
	dataKeyName: {},
	useChildrenOnly: {},
	showContentType: {}
}, [], [], { mode: "open" });
var RD = /* @__PURE__ */ W("<div class=\"input-header svelte-32f1pk\">参数名称</div> <div class=\"input-header svelte-32f1pk\">参数值</div> <div class=\"input-header svelte-32f1pk\"></div>", 1), zD = /* @__PURE__ */ W("<div class=\"none-params svelte-32f1pk\"> </div>"), BD = /* @__PURE__ */ W("<div class=\"input-container svelte-32f1pk\"><!> <!></div>"), VD = {
	hash: "svelte-32f1pk",
	code: ".input-container.svelte-32f1pk {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-32f1pk .none-params:where(.svelte-32f1pk) {font-size:12px;background:var(--tf-secondary);height:20px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;\n  /* 从第一列开始到最后一列结束 */}.input-container.svelte-32f1pk .input-header:where(.svelte-32f1pk) {font-size:12px;color:var(--tf-muted-foreground);}"
};
function HD(e, t) {
	N(t, !0), Yi(e, VD);
	let n = X(t, "noneParameterText", 7, "无输入参数"), r = X(t, "dataKeyName", 7, "parameters"), i = X(t, "useChildrenOnly", 7), a = X(t, "showContentType", 7, !1), o = r_(wE()), s = /* @__PURE__ */ F(() => [...o?.current?.data?.[r()] || []]);
	var c = {
		get noneParameterText() {
			return n();
		},
		set noneParameterText(e = "无输入参数") {
			n(e), I();
		},
		get dataKeyName() {
			return r();
		},
		set dataKeyName(e = "parameters") {
			r(e), I();
		},
		get useChildrenOnly() {
			return i();
		},
		set useChildrenOnly(e) {
			i(e), I();
		},
		get showContentType() {
			return a();
		},
		set showContentType(e = !1) {
			a(e), I();
		}
	}, l = BD(), u = z(l), d = (e) => {
		var t = RD();
		M(4), q(e, t);
	};
	return J(u, (e) => {
		U(s).length !== 0 && e(d);
	}), zi(V(u, 2), 19, () => U(s), (e) => e.id, (e, t, n) => {
		LD(e, {
			get parameter() {
				return U(t);
			},
			get index() {
				return U(n);
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
		var t = zD(), r = z(t, !0);
		j(t), H(() => yi(r, n())), q(e, t);
	}), j(l), q(e, l), P(c);
}
Z(HD, {
	noneParameterText: {},
	dataKeyName: {},
	useChildrenOnly: {},
	showContentType: {}
}, [], [], { mode: "open" });
var UD = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"data"
]), WD = /* @__PURE__ */ G("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z\"></path></svg>"), GD = /* @__PURE__ */ G("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z\"></path></svg>"), KD = /* @__PURE__ */ W("<div class=\"heading svelte-1fiuxu3\"><!> <!></div> <!>", 1), qD = {
	hash: "svelte-1fiuxu3",
	code: ".heading.svelte-1fiuxu3 {display:flex;margin-bottom:10px;}"
};
function JD(e, t) {
	N(t, !0), Yi(e, qD);
	let n = X(t, "data", 7), r = /* @__PURE__ */ Va(t, UD), i = wE(), { addParameter: a } = yD();
	return oD(e, Ga({ get data() {
		return n();
	} }, () => r, {
		allowExecute: !1,
		showSourceHandle: !1,
		icon: (e) => {
			q(e, WD());
		},
		children: (e, t) => {
			var n = KD(), r = B(n), o = z(r);
			BE(o, {
				level: 3,
				children: (e, t) => {
					M(), q(e, si("输出参数"));
				},
				$$slots: { default: !0 }
			}), ay(V(o, 2), {
				size: "icon-xs",
				class: "input-btn-more",
				style: "margin-left: auto",
				onclick: () => {
					a(i, "outputDefs", { name: "output" });
				},
				children: (e, t) => {
					q(e, GD());
				},
				$$slots: { default: !0 }
			}), j(r), HD(V(r, 2), {
				noneParameterText: "无输出参数",
				dataKeyName: "outputDefs",
				showContentType: !0
			}), q(e, n);
		},
		$$slots: {
			icon: !0,
			default: !0
		}
	})), P({
		get data() {
			return n();
		},
		set data(e) {
			n(e), I();
		}
	});
}
Z(JD, { data: {} }, [], [], { mode: "open" });
var YD = /* @__PURE__ */ G("<svg style=\"transform: scaleY(-1)\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z\"></path></svg>"), XD = /* @__PURE__ */ W("<div class=\"input-more-item svelte-hwmib9\"><!></div>"), ZD = /* @__PURE__ */ W("<div class=\"input-more-setting svelte-hwmib9\"><div class=\"input-more-item svelte-hwmib9\">默认值： <!></div> <div class=\"input-more-item svelte-hwmib9\">参数描述： <!></div> <!></div>"), QD = /* @__PURE__ */ W("<div class=\"input-item svelte-hwmib9\"><!></div> <div class=\"input-item svelte-hwmib9\"><!> <!></div> <div class=\"input-item svelte-hwmib9\"><!></div>", 1), $D = {
	hash: "svelte-hwmib9",
	code: ".input-item.svelte-hwmib9 {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-hwmib9 {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--tf-background);border:1px solid var(--tf-border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-hwmib9 .input-more-item:where(.svelte-hwmib9) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--tf-muted-foreground);}"
};
function eO(e, t) {
	N(t, !0), Yi(e, $D);
	let n = X(t, "parameter", 7), r = X(t, "position", 7), i = X(t, "dataKeyName", 7), a = X(t, "placeholder", 7, "请输入参数值"), o = wE(), s = r_(o), c = /* @__PURE__ */ F(() => {
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
	}), { updateNodeData: l } = $h(), u = (e, t) => {
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
			return { [i()]: [...qE(a)] };
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
			return { [i()]: [...qE(t)] };
		}), p?.hide();
	}, h = () => {
		l(o, (e) => {
			let t = e.data?.[i()];
			if (t && r().length > 0) {
				let e = t;
				for (let t = 0; t < r().length; t++) {
					let n = r()[t];
					t == r().length - 1 ? e[n].children ? e[n].children.push({
						id: KE(),
						name: "newParam",
						dataType: "String"
					}) : e[n].children = [{
						id: KE(),
						name: "newParam",
						dataType: "String"
					}] : e = e[n].children;
				}
			}
			return { [i()]: [...qE(t)] };
		});
	};
	var g = {
		get parameter() {
			return n();
		},
		set parameter(e) {
			n(e), I();
		},
		get position() {
			return r();
		},
		set position(e) {
			r(e), I();
		},
		get dataKeyName() {
			return i();
		},
		set dataKeyName(e) {
			i(e), I();
		},
		get placeholder() {
			return a();
		},
		set placeholder(e = "请输入参数值") {
			a(e), I();
		}
	}, _ = QD(), v = B(_), y = z(v);
	{
		let e = /* @__PURE__ */ F(() => (r().length - 1) * 12), t = /* @__PURE__ */ F(() => U(c).nameDisabled === !0);
		sE(y, {
			get style() {
				return `width: 100%;  margin-left: ${U(e) ?? ""}px;`;
			},
			get value() {
				return U(c).name;
			},
			get placeholder() {
				return a();
			},
			oninput: (e) => {
				d("name", e);
			},
			get disabled() {
				return U(t);
			}
		});
	}
	j(v);
	var b = V(v, 2), x = z(b);
	{
		let e = /* @__PURE__ */ F(() => U(c).dataTypeItems || a_), t = /* @__PURE__ */ F(() => U(c).dataType ? [U(c).dataType] : []), n = /* @__PURE__ */ F(() => U(c).dataTypeDisabled === !0);
		IE(x, {
			get items() {
				return U(e);
			},
			style: "width: 100%",
			defaultValue: ["String"],
			get value() {
				return U(t);
			},
			get disabled() {
				return U(n);
			},
			onSelect: f
		});
	}
	var S = V(x, 2), C = (e) => {
		ay(e, {
			size: "icon-xs",
			class: "input-btn-more",
			style: "margin-left: auto",
			onclick: h,
			children: (e, t) => {
				q(e, YD());
			},
			$$slots: { default: !0 }
		});
	};
	J(S, (e) => {
		(U(c).dataType === "Object" || U(c).dataType === "Array") && U(c).addChildDisabled !== !0 && e(C);
	}), j(b);
	var w = V(b, 2);
	return La(zE(z(w), {
		placement: "bottom",
		floating: (e) => {
			var t = ZD(), n = z(t), r = V(z(n));
			{
				let e = /* @__PURE__ */ F(() => U(c).defaultValue || "");
				uE(r, {
					rows: 1,
					style: "width: 100%;",
					get value() {
						return U(e);
					},
					onchange: (e) => {
						d("defaultValue", e);
					}
				});
			}
			j(n);
			var i = V(n, 2), a = V(z(i));
			{
				let e = /* @__PURE__ */ F(() => U(c).description || "");
				uE(a, {
					rows: 3,
					style: "width: 100%;",
					get value() {
						return U(e);
					},
					onchange: (e) => {
						d("description", e);
					}
				});
			}
			j(i);
			var o = V(i, 2), s = (e) => {
				var t = XD();
				ay(z(t), {
					variant: "destructive",
					onclick: m,
					children: (e, t) => {
						M(), q(e, si("删除"));
					},
					$$slots: { default: !0 }
				}), j(t), q(e, t);
			};
			J(o, (e) => {
				U(c).deleteDisabled !== !0 && e(s);
			}), j(t), q(e, t);
		},
		children: (e, t) => {
			WE(e, {});
		},
		$$slots: {
			floating: !0,
			default: !0
		}
	}), (e) => p = e, () => p), j(w), q(e, _), P(g);
}
Z(eO, {
	parameter: {},
	position: {},
	dataKeyName: {},
	placeholder: {}
}, [], [], { mode: "open" });
var tO = /* @__PURE__ */ W("<!> <!>", 1), nO = /* @__PURE__ */ W("<div class=\"none-params svelte-1oz5kx0\"> </div>"), rO = /* @__PURE__ */ W("<div class=\"input-header svelte-1oz5kx0\">参数名称</div> <div class=\"input-header svelte-1oz5kx0\">参数类型</div> <div class=\"input-header svelte-1oz5kx0\"></div>", 1), iO = /* @__PURE__ */ W("<div class=\"input-container svelte-1oz5kx0\"><!> <!></div>"), aO = {
	hash: "svelte-1oz5kx0",
	code: ".input-container.svelte-1oz5kx0 {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1oz5kx0 .none-params:where(.svelte-1oz5kx0) {font-size:12px;background:var(--tf-secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;\n  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1oz5kx0 .input-header:where(.svelte-1oz5kx0) {font-size:12px;color:var(--tf-muted-foreground);}"
};
function oO(e, t) {
	N(t, !0), Yi(e, aO);
	let n = (e, t = T, o = T) => {
		var s = K();
		zi(B(s), 19, t, (e) => `${e.id}_${e.children ? e.children.length : 0}`, (e, t, r) => {
			var s = tO(), c = B(s);
			{
				let e = /* @__PURE__ */ F(() => [...o(), U(r)]);
				eO(c, {
					get parameter() {
						return U(t);
					},
					get position() {
						return U(e);
					},
					get dataKeyName() {
						return i();
					},
					get placeholder() {
						return a();
					}
				});
			}
			var l = V(c, 2), u = (e) => {
				{
					let i = /* @__PURE__ */ F(() => [...o(), U(r)]);
					n(e, () => U(t).children, () => U(i));
				}
			};
			J(l, (e) => {
				U(t).children && e(u);
			}), q(e, s);
		}, (e) => {
			var t = K(), n = B(t), i = (e) => {
				var t = nO(), n = z(t, !0);
				j(t), H(() => yi(n, r())), q(e, t);
			};
			J(n, (e) => {
				o().length === 0 && e(i);
			}), q(e, t);
		}), q(e, s);
	}, r = X(t, "noneParameterText", 7, "无输出参数"), i = X(t, "dataKeyName", 7, "outputDefs"), a = X(t, "placeholder", 7, "请输入参数"), o = r_(wE()), s = /* @__PURE__ */ F(() => [...o?.current?.data?.[i()] || []]);
	var c = {
		get noneParameterText() {
			return r();
		},
		set noneParameterText(e = "无输出参数") {
			r(e), I();
		},
		get dataKeyName() {
			return i();
		},
		set dataKeyName(e = "outputDefs") {
			i(e), I();
		},
		get placeholder() {
			return a();
		},
		set placeholder(e = "请输入参数") {
			a(e), I();
		}
	}, l = iO(), u = z(l), d = (e) => {
		var t = rO();
		M(4), q(e, t);
	};
	return J(u, (e) => {
		U(s).length !== 0 && e(d);
	}), n(V(u, 2), () => U(s) || [], () => []), j(l), q(e, l), P(c);
}
Z(oO, {
	noneParameterText: {},
	dataKeyName: {},
	placeholder: {}
}, [], [], { mode: "open" });
var sO = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"data"
]), cO = /* @__PURE__ */ G("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z\"></path></svg>"), lO = /* @__PURE__ */ G("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z\"></path></svg>"), uO = /* @__PURE__ */ W("<div class=\"llm-setting svelte-j81vcl\"><div class=\"setting-title svelte-j81vcl\">采样参数</div> <div class=\"setting-item svelte-j81vcl\"><div class=\"slider-container svelte-j81vcl\"><span class=\"svelte-j81vcl\"> </span> <input class=\"nodrag svelte-j81vcl\" type=\"range\" min=\"0\" max=\"1\" step=\"0.1\"/></div></div> <div class=\"setting-item svelte-j81vcl\"><div class=\"slider-container svelte-j81vcl\"><span class=\"svelte-j81vcl\"> </span> <input class=\"nodrag svelte-j81vcl\" type=\"range\" min=\"0\" max=\"1\" step=\"0.1\"/></div></div> <div class=\"setting-item svelte-j81vcl\"><div class=\"slider-container svelte-j81vcl\"><span class=\"svelte-j81vcl\"> </span> <input class=\"nodrag svelte-j81vcl\" type=\"range\" min=\"0\" max=\"100\" step=\"1\"/></div></div></div>"), dO = /* @__PURE__ */ W("<div class=\"setting-title svelte-j81vcl\">JSON Schema</div> <div class=\"setting-item svelte-j81vcl\"><!></div>", 1), fO = /* @__PURE__ */ W("<div class=\"heading svelte-j81vcl\"><!> <!></div> <!> <div class=\"heading svelte-j81vcl\" style=\"padding-top: 10px\"><!> <!></div> <!> <!> <div class=\"setting-title svelte-j81vcl\">模型</div> <div class=\"setting-item svelte-j81vcl\"><!> <!></div> <div class=\"setting-title svelte-j81vcl\">系统提示词</div> <div class=\"setting-item svelte-j81vcl\"><!></div> <div class=\"setting-title svelte-j81vcl\">用户提示词</div> <div class=\"setting-item svelte-j81vcl\"><!></div> <!> <div class=\"heading svelte-j81vcl\"><!> <!></div> <!>", 1), pO = {
	hash: "svelte-j81vcl",
	code: ".heading.svelte-j81vcl {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-j81vcl {font-size:12px;color:var(--tf-secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-j81vcl {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}\n\n    /* 新增样式 */.slider-container.svelte-j81vcl {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-j81vcl span:where(.svelte-j81vcl) {font-size:12px;color:var(--tf-muted-foreground);display:flex;justify-content:space-between;align-items:center;}.llm-setting.svelte-j81vcl {width:200px;background:var(--tf-background);padding:10px;border-radius:5px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);border:1px solid var(--tf-border);}input[type='range'].svelte-j81vcl {width:100%;height:4px;background:var(--tf-muted);border-radius:2px;outline:none;-webkit-appearance:none;}input[type='range'].svelte-j81vcl::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:var(--tf-primary);border-radius:50%;cursor:pointer;}"
};
function mO(e, t) {
	N(t, !0), Yi(e, pO);
	let n = X(t, "data", 7), r = /* @__PURE__ */ Va(t, sO), i = wE(), { addParameter: a } = yD(), o = TE(), s = /* @__PURE__ */ L(En([]));
	Oi(async () => {
		let e = await o.provider?.llm?.();
		U(s).push(...e || []);
	});
	let { updateNodeData: c } = $h(), l = (e) => {
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
	return Kn(() => {
		n().outType || l("text");
	}), oD(e, Ga({ get data() {
		return n();
	} }, () => r, {
		icon: (e) => {
			q(e, cO());
		},
		children: (e, t) => {
			var r = fO(), o = B(r), u = z(o);
			BE(u, {
				level: 3,
				children: (e, t) => {
					M(), q(e, si("输入参数"));
				},
				$$slots: { default: !0 }
			}), ay(V(u, 2), {
				size: "icon-xs",
				class: "input-btn-more",
				style: "margin-left: auto",
				onclick: () => {
					a(i);
				},
				children: (e, t) => {
					q(e, lO());
				},
				$$slots: { default: !0 }
			}), j(o);
			var d = V(o, 2);
			HD(d, {});
			var f = V(d, 2), p = z(f);
			BE(p, {
				level: 3,
				children: (e, t) => {
					M(), q(e, si("图片识别"));
				},
				$$slots: { default: !0 }
			}), ay(V(p, 2), {
				size: "icon-xs",
				class: "input-btn-more",
				style: "margin-left: auto",
				onclick: () => {
					a(i, "images");
				},
				children: (e, t) => {
					q(e, lO());
				},
				$$slots: { default: !0 }
			}), j(f);
			var m = V(f, 2);
			HD(m, {
				dataKeyName: "images",
				noneParameterText: "无图片参数"
			});
			var h = V(m, 2);
			BE(h, {
				level: 3,
				mt: "10px",
				children: (e, t) => {
					M(), q(e, si("模型设置"));
				},
				$$slots: { default: !0 }
			});
			var g = V(h, 4), _ = z(g);
			{
				let e = /* @__PURE__ */ F(() => n().llmId ? [n().llmId] : []);
				IE(_, {
					get items() {
						return U(s);
					},
					style: "width: 100%",
					placeholder: "请选择模型",
					onSelect: (e) => {
						let t = e.value;
						c(i, () => ({ llmId: t }));
					},
					get value() {
						return U(e);
					}
				});
			}
			zE(V(_, 2), {
				placement: "bottom",
				floating: (e) => {
					var t = uO(), r = V(z(t), 2), a = z(r), o = z(a), s = z(o);
					j(o);
					var l = V(o, 2);
					xa(l), j(a), j(r);
					var u = V(r, 2), d = z(u), f = z(d), p = z(f);
					j(f);
					var m = V(f, 2);
					xa(m), j(d), j(u);
					var h = V(u, 2), g = z(h), _ = z(g), v = z(_);
					j(_);
					var y = V(_, 2);
					xa(y), j(g), j(h), j(t), H(() => {
						yi(s, `Temperature: ${n().temperature ?? .5 ?? ""}`), Sa(l, n().temperature ?? .5), yi(p, `Top P: ${n().topP ?? .9 ?? ""}`), Sa(m, n().topP ?? .9), yi(v, `Top K: ${n().topK ?? 50 ?? ""}`), Sa(y, n().topK ?? 50);
					}), Qr("input", l, (e) => c(i, { temperature: parseFloat(e.currentTarget.value) })), Qr("input", m, (e) => c(i, { topP: parseFloat(e.currentTarget.value) })), Qr("input", y, (e) => c(i, { topK: parseInt(e.currentTarget.value) })), q(e, t);
				},
				children: (e, t) => {
					WE(e, {});
				},
				$$slots: {
					floating: !0,
					default: !0
				}
			}), j(g);
			var v = V(g, 4), y = z(v);
			{
				let e = /* @__PURE__ */ F(() => n().systemPrompt || "");
				uE(y, {
					rows: 5,
					placeholder: "请输入系统提示词",
					style: "width: 100%",
					get value() {
						return U(e);
					},
					oninput: (e) => {
						c(i, { systemPrompt: e.currentTarget.value });
					}
				});
			}
			j(v);
			var b = V(v, 4), x = z(b);
			{
				let e = /* @__PURE__ */ F(() => n().userPrompt || "");
				uE(x, {
					rows: 5,
					placeholder: "请输入用户提示词",
					style: "width: 100%",
					get value() {
						return U(e);
					},
					oninput: (e) => {
						c(i, { userPrompt: e.currentTarget.value });
					}
				});
			}
			j(b);
			var S = V(b, 2), C = (e) => {
				var t = dO(), r = V(B(t), 2), a = z(r);
				{
					let e = /* @__PURE__ */ F(() => n().jsonSchema || "");
					uE(a, {
						rows: 5,
						placeholder: "请输入 SON Schema",
						style: "width: 100%",
						get value() {
							return U(e);
						},
						oninput: (e) => {
							c(i, { jsonSchema: e.currentTarget.value });
						}
					});
				}
				j(r), q(e, t);
			};
			J(S, (e) => {
				n().outType === "json" && e(C);
			});
			var w = V(S, 2), T = z(w);
			BE(T, {
				level: 3,
				children: (e, t) => {
					M(), q(e, si("输出参数"));
				},
				$$slots: { default: !0 }
			});
			var E = V(T, 2);
			{
				let e = /* @__PURE__ */ F(() => n().outType ? [n().outType] : []);
				IE(E, {
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
						return U(e);
					}
				});
			}
			j(w), oO(V(w, 2), {}), q(e, r);
		},
		$$slots: {
			icon: !0,
			default: !0
		}
	})), P({
		get data() {
			return n();
		},
		set data(e) {
			n(e), I();
		}
	});
}
$r(["input"]), Z(mO, { data: {} }, [], [], { mode: "open" });
var hO = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"data"
]), gO = /* @__PURE__ */ G("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z\"></path></svg>"), _O = /* @__PURE__ */ G("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z\"></path></svg>"), vO = /* @__PURE__ */ W("<div class=\"heading svelte-1wcsayx\"><!> <!></div> <!> <!> <div class=\"setting-title svelte-1wcsayx\">执行引擎</div> <div class=\"setting-item svelte-1wcsayx\"><!></div> <div class=\"setting-title svelte-1wcsayx\">执行代码</div> <div class=\"setting-item svelte-1wcsayx\"><!></div> <div class=\"heading svelte-1wcsayx\"><!> <!></div> <!>", 1), yO = {
	hash: "svelte-1wcsayx",
	code: ".heading.svelte-1wcsayx {display:flex;margin-bottom:10px;}.setting-title.svelte-1wcsayx {font-size:12px;color:var(--tf-secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1wcsayx {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function bO(e, t) {
	N(t, !0), Yi(e, yO);
	let n = X(t, "data", 7), r = /* @__PURE__ */ Va(t, hO);
	Oi(() => {
		n().engine || o(i, () => ({ engine: "qlexpress" }));
	});
	let i = wE(), { addParameter: a } = yD(), { updateNodeData: o } = $h(), s = [
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
	return oD(e, Ga({ get data() {
		return n();
	} }, () => r, {
		icon: (e) => {
			q(e, gO());
		},
		children: (e, t) => {
			var r = vO(), c = B(r), l = z(c);
			BE(l, {
				level: 3,
				children: (e, t) => {
					M(), q(e, si("输入参数"));
				},
				$$slots: { default: !0 }
			}), ay(V(l, 2), {
				size: "icon-xs",
				class: "input-btn-more",
				style: "margin-left: auto",
				onclick: () => {
					a(i);
				},
				children: (e, t) => {
					q(e, _O());
				},
				$$slots: { default: !0 }
			}), j(c);
			var u = V(c, 2);
			HD(u, {});
			var d = V(u, 2);
			BE(d, {
				level: 3,
				mt: "10px",
				children: (e, t) => {
					M(), q(e, si("代码"));
				},
				$$slots: { default: !0 }
			});
			var f = V(d, 4), p = z(f);
			{
				let e = /* @__PURE__ */ F(() => n().engine ? [n().engine] : ["qlexpress"]);
				IE(p, {
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
						return U(e);
					}
				});
			}
			j(f);
			var m = V(f, 4), h = z(m);
			{
				let e = /* @__PURE__ */ F(() => n().code || "");
				uE(h, {
					rows: 10,
					placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result['key'] = value 或者 _result.key = value",
					style: "width: 100%",
					onchange: (e) => {
						o(i, () => ({ code: e.target.value }));
					},
					get value() {
						return U(e);
					}
				});
			}
			j(m);
			var g = V(m, 2), _ = z(g);
			BE(_, {
				level: 3,
				mt: "10px",
				children: (e, t) => {
					M(), q(e, si("输出参数"));
				},
				$$slots: { default: !0 }
			}), ay(V(_, 2), {
				size: "icon-xs",
				class: "input-btn-more",
				style: "margin-left: auto",
				onclick: () => {
					a(i, "outputDefs");
				},
				children: (e, t) => {
					q(e, _O());
				},
				$$slots: { default: !0 }
			}), j(g), oO(V(g, 2), {}), q(e, r);
		},
		$$slots: {
			icon: !0,
			default: !0
		}
	})), P({
		get data() {
			return n();
		},
		set data(e) {
			n(e), I();
		}
	});
}
Z(bO, { data: {} }, [], [], { mode: "open" });
var xO = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"data"
]), SO = /* @__PURE__ */ G("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z\"></path></svg>"), CO = /* @__PURE__ */ G("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z\"></path></svg>"), wO = /* @__PURE__ */ W("<div class=\"heading svelte-1lcrzpc\"><!> <!></div> <!> <!> <div class=\"setting-item svelte-1lcrzpc\"><!></div> <div class=\"heading svelte-1lcrzpc\"><!></div> <!>", 1), TO = {
	hash: "svelte-1lcrzpc",
	code: ".heading.svelte-1lcrzpc {display:flex;margin-bottom:10px;}.setting-item.svelte-1lcrzpc {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function EO(e, t) {
	N(t, !0), Yi(e, TO);
	let n = X(t, "data", 7), r = /* @__PURE__ */ Va(t, xO), i = wE(), { addParameter: a } = yD(), { updateNodeData: o } = $h();
	return Kn(() => {
		(!n().outputDefs || n().outputDefs.length === 0) && a(i, "outputDefs", {
			name: "output",
			dataType: "String",
			dataTypeDisabled: !0,
			deleteDisabled: !0
		});
	}), oD(e, Ga({ get data() {
		return n();
	} }, () => r, {
		icon: (e) => {
			q(e, SO());
		},
		children: (e, t) => {
			var r = wO(), s = B(r), c = z(s);
			BE(c, {
				level: 3,
				children: (e, t) => {
					M(), q(e, si("输入参数"));
				},
				$$slots: { default: !0 }
			}), ay(V(c, 2), {
				size: "icon-xs",
				class: "input-btn-more",
				style: "margin-left: auto",
				onclick: () => {
					a(i);
				},
				children: (e, t) => {
					q(e, CO());
				},
				$$slots: { default: !0 }
			}), j(s);
			var l = V(s, 2);
			HD(l, {});
			var u = V(l, 2);
			BE(u, {
				level: 3,
				mt: "10px",
				mb: "10px",
				children: (e, t) => {
					M(), q(e, si("模板内容"));
				},
				$$slots: { default: !0 }
			});
			var d = V(u, 2), f = z(d);
			{
				let e = /* @__PURE__ */ F(() => n().template || "");
				uE(f, {
					rows: 10,
					placeholder: "请输入模板内容",
					style: "width: 100%",
					onchange: (e) => {
						o(i, () => ({ template: e.target.value }));
					},
					get value() {
						return U(e);
					}
				});
			}
			j(d);
			var p = V(d, 2);
			BE(z(p), {
				level: 3,
				mt: "10px",
				children: (e, t) => {
					M(), q(e, si("输出参数"));
				},
				$$slots: { default: !0 }
			}), j(p), oO(V(p, 2), {}), q(e, r);
		},
		$$slots: {
			icon: !0,
			default: !0
		}
	})), P({
		get data() {
			return n();
		},
		set data(e) {
			n(e), I();
		}
	});
}
Z(EO, { data: {} }, [], [], { mode: "open" });
var DO = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"data"
]), OO = /* @__PURE__ */ G("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z\"></path></svg>"), kO = /* @__PURE__ */ G("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z\"></path></svg>"), AO = /* @__PURE__ */ W("<!> <div class=\"radio-group svelte-19uflw6\"><label class=\"svelte-19uflw6\"><!>none</label> <label class=\"svelte-19uflw6\"><!>form-data</label> <label class=\"svelte-19uflw6\"><!>x-www-form-urlencoded</label> <label class=\"svelte-19uflw6\"><!>json</label> <label class=\"svelte-19uflw6\"><!>raw</label></div>", 1), jO = /* @__PURE__ */ W("<div class=\"heading svelte-19uflw6\" style=\"padding-top: 10px\"><!> <!></div> <!>", 1), MO = /* @__PURE__ */ W("<div style=\"width: 100%\"><!></div>"), NO = /* @__PURE__ */ W("<div class=\"heading svelte-19uflw6\"><!> <!></div> <!> <!> <div style=\"display: flex;gap: 2px;width: 100%;padding: 10px 0\"><div><!></div> <div style=\"width: 100%\"><!></div></div> <div class=\"heading svelte-19uflw6\"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class=\"heading svelte-19uflw6\"><!> <!></div> <!>", 1), PO = {
	hash: "svelte-19uflw6",
	code: ".heading.svelte-19uflw6 {display:flex;margin-bottom:10px;}.radio-group.svelte-19uflw6 {display:flex;margin:10px 0;flex-wrap:wrap;gap:8px;}.radio-group.svelte-19uflw6 label:where(.svelte-19uflw6) {display:flex;font-size:14px;box-sizing:border-box;gap:4px;}"
};
function FO(e, t) {
	N(t, !0), Yi(e, PO);
	let n = X(t, "data", 7), r = /* @__PURE__ */ Va(t, DO);
	Oi(() => {
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
	], a = wE(), { addParameter: o } = yD(), { updateNodeData: s } = $h();
	return oD(e, Ga({ get data() {
		return n();
	} }, () => r, {
		icon: (e) => {
			q(e, OO());
		},
		children: (e, t) => {
			var r = NO(), c = B(r), l = z(c);
			BE(l, {
				level: 3,
				children: (e, t) => {
					M(), q(e, si("输入参数"));
				},
				$$slots: { default: !0 }
			}), ay(V(l, 2), {
				size: "icon-xs",
				class: "input-btn-more",
				style: "margin-left: auto",
				onclick: () => {
					o(a);
				},
				children: (e, t) => {
					q(e, kO());
				},
				$$slots: { default: !0 }
			}), j(c);
			var u = V(c, 2);
			HD(u, {});
			var d = V(u, 2);
			BE(d, {
				level: 3,
				mt: "10px",
				children: (e, t) => {
					M(), q(e, si("URL 地址"));
				},
				$$slots: { default: !0 }
			});
			var f = V(d, 2), p = z(f), m = z(p);
			{
				let e = /* @__PURE__ */ F(() => n().method ? [n().method] : ["get"]);
				IE(m, {
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
						return U(e);
					}
				});
			}
			j(p);
			var h = V(p, 2), g = z(h);
			{
				let e = /* @__PURE__ */ F(() => n().url || "");
				sE(g, {
					placeholder: "请输入url",
					style: "width: 100%",
					onchange: (e) => {
						s(a, () => ({ url: e.target.value }));
					},
					get value() {
						return U(e);
					}
				});
			}
			j(h), j(f);
			var _ = V(f, 2), v = z(_);
			BE(v, {
				level: 3,
				children: (e, t) => {
					M(), q(e, si("Http 头信息"));
				},
				$$slots: { default: !0 }
			}), ay(V(v, 2), {
				size: "icon-xs",
				class: "input-btn-more",
				style: "margin-left: auto",
				onclick: () => {
					o(a, "headers");
				},
				children: (e, t) => {
					q(e, kO());
				},
				$$slots: { default: !0 }
			}), j(_);
			var y = V(_, 2);
			HD(y, { dataKeyName: "headers" });
			var b = V(y, 2), x = (e) => {
				var t = AO(), r = B(t);
				BE(r, {
					level: 3,
					mt: "10px",
					children: (e, t) => {
						M(), q(e, si("Body"));
					},
					$$slots: { default: !0 }
				});
				var i = V(r, 2), o = z(i), c = z(o);
				{
					let e = /* @__PURE__ */ F(() => !n().bodyType || n().bodyType === "");
					sE(c, {
						type: "radio",
						value: "",
						get checked() {
							return U(e);
						},
						onchange: (e) => {
							e.target?.checked && s(a, { bodyType: "" });
						}
					});
				}
				M(), j(o);
				var l = V(o, 2), u = z(l);
				{
					let e = /* @__PURE__ */ F(() => n().bodyType === "form-data");
					sE(u, {
						type: "radio",
						value: "form-data",
						get checked() {
							return U(e);
						},
						onchange: (e) => {
							e.target?.checked && s(a, { bodyType: "form-data" });
						}
					});
				}
				M(), j(l);
				var d = V(l, 2), f = z(d);
				{
					let e = /* @__PURE__ */ F(() => n().bodyType === "x-www-form-urlencoded");
					sE(f, {
						type: "radio",
						value: "x-www-form-urlencoded",
						get checked() {
							return U(e);
						},
						onchange: (e) => {
							e.target?.checked && s(a, { bodyType: "x-www-form-urlencoded" });
						}
					});
				}
				M(), j(d);
				var p = V(d, 2), m = z(p);
				{
					let e = /* @__PURE__ */ F(() => n().bodyType === "json");
					sE(m, {
						type: "radio",
						value: "json",
						get checked() {
							return U(e);
						},
						onchange: (e) => {
							e.target?.checked && s(a, { bodyType: "json" });
						}
					});
				}
				M(), j(p);
				var h = V(p, 2), g = z(h);
				{
					let e = /* @__PURE__ */ F(() => n().bodyType === "raw");
					sE(g, {
						type: "radio",
						value: "raw",
						get checked() {
							return U(e);
						},
						onchange: (e) => {
							e.target?.checked && s(a, { bodyType: "raw" });
						}
					});
				}
				M(), j(h), j(i), q(e, t);
			};
			J(b, (e) => {
				(n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && e(x);
			});
			var S = V(b, 2), C = (e) => {
				var t = jO(), n = B(t), r = z(n);
				BE(r, {
					level: 3,
					children: (e, t) => {
						M(), q(e, si("参数"));
					},
					$$slots: { default: !0 }
				}), ay(V(r, 2), {
					size: "icon-xs",
					class: "input-btn-more",
					style: "margin-left: auto",
					onclick: () => {
						o(a, "formData");
					},
					children: (e, t) => {
						q(e, kO());
					},
					$$slots: { default: !0 }
				}), j(n), HD(V(n, 2), { dataKeyName: "formData" }), q(e, t);
			};
			J(S, (e) => {
				n().bodyType === "form-data" && (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && e(C);
			});
			var w = V(S, 2), T = (e) => {
				var t = jO(), n = B(t), r = z(n);
				BE(r, {
					level: 3,
					children: (e, t) => {
						M(), q(e, si("Body 参数"));
					},
					$$slots: { default: !0 }
				}), ay(V(r, 2), {
					size: "icon-xs",
					class: "input-btn-more",
					style: "margin-left: auto",
					onclick: () => {
						o(a, "formUrlencoded");
					},
					children: (e, t) => {
						q(e, kO());
					},
					$$slots: { default: !0 }
				}), j(n), HD(V(n, 2), { dataKeyName: "formUrlencoded" }), q(e, t);
			};
			J(w, (e) => {
				n().bodyType === "x-www-form-urlencoded" && (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && e(T);
			});
			var E = V(w, 2), D = (e) => {
				var t = MO();
				uE(z(t), {
					rows: 5,
					style: "width: 100%",
					placeholder: "请输入 json 信息",
					get value() {
						return n().bodyJson;
					},
					oninput: (e) => {
						s(a, { bodyJson: e.target.value });
					}
				}), j(t), q(e, t);
			};
			J(E, (e) => {
				n().bodyType === "json" && (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && e(D);
			});
			var ee = V(E, 2), O = (e) => {
				var t = MO();
				uE(z(t), {
					rows: 5,
					style: "width: 100%",
					placeholder: "请输入请求信息",
					get value() {
						return n().bodyRaw;
					},
					oninput: (e) => {
						s(a, { bodyRaw: e.target.value });
					}
				}), j(t), q(e, t);
			};
			J(ee, (e) => {
				n().bodyType === "raw" && (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && e(O);
			});
			var te = V(ee, 2), ne = z(te);
			BE(ne, {
				level: 3,
				mt: "10px",
				children: (e, t) => {
					M(), q(e, si("输出参数"));
				},
				$$slots: { default: !0 }
			}), ay(V(ne, 2), {
				size: "icon-xs",
				class: "input-btn-more",
				style: "margin-left: auto",
				onclick: () => {
					o(a, "outputDefs");
				},
				children: (e, t) => {
					q(e, kO());
				},
				$$slots: { default: !0 }
			}), j(te), oO(V(te, 2), {}), q(e, r);
		},
		$$slots: {
			icon: !0,
			default: !0
		}
	})), P({
		get data() {
			return n();
		},
		set data(e) {
			n(e), I();
		}
	});
}
Z(FO, { data: {} }, [], [], { mode: "open" });
var IO = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"data"
]), LO = /* @__PURE__ */ G("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z\"></path></svg>"), RO = /* @__PURE__ */ G("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z\"></path></svg>"), zO = /* @__PURE__ */ W("<div class=\"heading svelte-ddi5i\"><!> <!></div> <!> <!> <div class=\"setting-title svelte-ddi5i\">知识库</div> <div class=\"setting-item svelte-ddi5i\"><!></div> <div class=\"setting-title svelte-ddi5i\">关键字</div> <div class=\"setting-item svelte-ddi5i\"><!></div> <div class=\"setting-title svelte-ddi5i\">获取数据量</div> <div class=\"setting-item svelte-ddi5i\"><!></div> <div class=\"heading svelte-ddi5i\"><!></div> <!>", 1), BO = {
	hash: "svelte-ddi5i",
	code: ".heading.svelte-ddi5i {display:flex;margin-bottom:10px;}.setting-title.svelte-ddi5i {font-size:12px;color:var(--tf-secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-ddi5i {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function VO(e, t) {
	N(t, !0), Yi(e, BO);
	let n = X(t, "data", 7), r = /* @__PURE__ */ Va(t, IO), i = wE(), { addParameter: a } = yD(), o = TE(), s = /* @__PURE__ */ L(En([]));
	Oi(async () => {
		let e = await o.provider?.knowledge?.();
		U(s).push(...e || []);
	});
	let { updateNodeData: c } = $h();
	return Kn(() => {
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
	}), oD(e, Ga({ get data() {
		return n();
	} }, () => r, {
		icon: (e) => {
			q(e, LO());
		},
		children: (e, t) => {
			var r = zO(), o = B(r), l = z(o);
			BE(l, {
				level: 3,
				children: (e, t) => {
					M(), q(e, si("输入参数"));
				},
				$$slots: { default: !0 }
			}), ay(V(l, 2), {
				size: "icon-xs",
				class: "input-btn-more",
				style: "margin-left: auto",
				onclick: () => {
					a(i);
				},
				children: (e, t) => {
					q(e, RO());
				},
				$$slots: { default: !0 }
			}), j(o);
			var u = V(o, 2);
			HD(u, {});
			var d = V(u, 2);
			BE(d, {
				level: 3,
				mt: "10px",
				children: (e, t) => {
					M(), q(e, si("知识库设置"));
				},
				$$slots: { default: !0 }
			});
			var f = V(d, 4), p = z(f);
			{
				let e = /* @__PURE__ */ F(() => n().knowledgeId ? [n().knowledgeId] : []);
				IE(p, {
					get items() {
						return U(s);
					},
					style: "width: 100%",
					placeholder: "请选择知识库",
					onSelect: (e) => {
						let t = e.value;
						c(i, () => ({ knowledgeId: t }));
					},
					get value() {
						return U(e);
					}
				});
			}
			j(f);
			var m = V(f, 4);
			sE(z(m), {
				placeholder: "请输入关键字",
				style: "width: 100%",
				get value() {
					return n().keyword;
				},
				onchange: (e) => {
					let t = e.currentTarget.value;
					c(i, () => ({ keyword: t }));
				}
			}), j(m);
			var h = V(m, 4), g = z(h);
			{
				let e = /* @__PURE__ */ F(() => n().limit || "");
				sE(g, {
					placeholder: "搜索的数据条数",
					style: "width: 100%",
					onchange: (e) => {
						let t = e.currentTarget.value;
						c(i, () => ({ limit: t }));
					},
					get value() {
						return U(e);
					}
				});
			}
			j(h);
			var _ = V(h, 2);
			BE(z(_), {
				level: 3,
				mt: "10px",
				children: (e, t) => {
					M(), q(e, si("输出参数"));
				},
				$$slots: { default: !0 }
			}), j(_), oO(V(_, 2), {}), q(e, r);
		},
		$$slots: {
			icon: !0,
			default: !0
		}
	})), P({
		get data() {
			return n();
		},
		set data(e) {
			n(e), I();
		}
	});
}
Z(VO, { data: {} }, [], [], { mode: "open" });
var HO = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"data"
]), UO = /* @__PURE__ */ G("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z\"></path></svg>"), WO = /* @__PURE__ */ G("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z\"></path></svg>"), GO = /* @__PURE__ */ W("<div class=\"heading svelte-1qblm04\"><!> <!></div> <!> <!> <div class=\"setting-title svelte-1qblm04\">搜索引擎</div> <div class=\"setting-item svelte-1qblm04\"><!></div> <div class=\"setting-title svelte-1qblm04\">关键字</div> <div class=\"setting-item svelte-1qblm04\"><!></div> <div class=\"setting-title svelte-1qblm04\">搜索数据量</div> <div class=\"setting-item svelte-1qblm04\"><!></div> <div class=\"heading svelte-1qblm04\"><!></div> <!>", 1), KO = {
	hash: "svelte-1qblm04",
	code: ".heading.svelte-1qblm04 {display:flex;margin-bottom:10px;}.setting-title.svelte-1qblm04 {font-size:12px;color:var(--tf-secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1qblm04 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function qO(e, t) {
	N(t, !0), Yi(e, KO);
	let n = X(t, "data", 7), r = /* @__PURE__ */ Va(t, HO), i = wE(), { addParameter: a } = yD(), o = TE(), s = /* @__PURE__ */ L(En([]));
	Oi(async () => {
		let e = await o.provider?.searchEngine?.();
		U(s).push(...e || []);
	});
	let { updateNodeData: c } = $h();
	return Kn(() => {
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
	}), oD(e, Ga({ get data() {
		return n();
	} }, () => r, {
		icon: (e) => {
			q(e, UO());
		},
		children: (e, t) => {
			var r = GO(), o = B(r), l = z(o);
			BE(l, {
				level: 3,
				children: (e, t) => {
					M(), q(e, si("输入参数"));
				},
				$$slots: { default: !0 }
			}), ay(V(l, 2), {
				size: "icon-xs",
				class: "input-btn-more",
				style: "margin-left: auto",
				onclick: () => {
					a(i);
				},
				children: (e, t) => {
					q(e, WO());
				},
				$$slots: { default: !0 }
			}), j(o);
			var u = V(o, 2);
			HD(u, {});
			var d = V(u, 2);
			BE(d, {
				level: 3,
				mt: "10px",
				children: (e, t) => {
					M(), q(e, si("搜索引擎设置"));
				},
				$$slots: { default: !0 }
			});
			var f = V(d, 4), p = z(f);
			{
				let e = /* @__PURE__ */ F(() => n().engine ? [n().engine] : []);
				IE(p, {
					get items() {
						return U(s);
					},
					style: "width: 100%",
					placeholder: "请选择搜索引擎",
					onSelect: (e) => {
						let t = e.value;
						c(i, () => ({ engine: t }));
					},
					get value() {
						return U(e);
					}
				});
			}
			j(f);
			var m = V(f, 4);
			sE(z(m), {
				placeholder: "请输入关键字",
				style: "width: 100%",
				get value() {
					return n().keyword;
				},
				onchange: (e) => {
					let t = e.currentTarget.value;
					c(i, () => ({ keyword: t }));
				}
			}), j(m);
			var h = V(m, 4);
			sE(z(h), {
				placeholder: "搜索的数据条数",
				style: "width: 100%",
				get value() {
					return n().limit;
				},
				onchange: (e) => {
					let t = e.currentTarget.value;
					c(i, () => ({ limit: t }));
				}
			}), j(h);
			var g = V(h, 2);
			BE(z(g), {
				level: 3,
				mt: "10px",
				children: (e, t) => {
					M(), q(e, si("输出参数"));
				},
				$$slots: { default: !0 }
			}), j(g), oO(V(g, 2), {}), q(e, r);
		},
		$$slots: {
			icon: !0,
			default: !0
		}
	})), P({
		get data() {
			return n();
		},
		set data(e) {
			n(e), I();
		}
	});
}
Z(qO, { data: {} }, [], [], { mode: "open" });
var JO = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"data"
]), YO = /* @__PURE__ */ G("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z\"></path></svg>"), XO = /* @__PURE__ */ G("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z\"></path></svg>"), ZO = /* @__PURE__ */ W("<div class=\"heading svelte-1o34e8c\"><!></div> <!> <div class=\"heading svelte-1o34e8c\"><!> <!></div> <!>", 1), QO = {
	hash: "svelte-1o34e8c",
	code: ".heading.svelte-1o34e8c {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper::after {content:'循环体';width:100px;height:20px;background:var(--tf-primary);color:var(--tf-primary-foreground);display:flex;justify-content:center;align-items:center;}"
};
function $O(e, t) {
	N(t, !0), Yi(e, QO);
	let n = X(t, "data", 7), r = /* @__PURE__ */ Va(t, JO), i = wE(), { addParameter: a } = yD();
	return Kn(() => {
		(!n().loopVars || n().loopVars.length === 0) && a(i, "loopVars", {
			name: "loopVar",
			nameDisabled: !0,
			deleteDisabled: !0
		});
	}), oD(e, Ga({ get data() {
		return n();
	} }, () => r, {
		icon: (e) => {
			q(e, YO());
		},
		handle: (e) => {
			wm(e, {
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
			var n = ZO(), r = B(n);
			BE(z(r), {
				level: 3,
				children: (e, t) => {
					M(), q(e, si("循环变量"));
				},
				$$slots: { default: !0 }
			}), j(r);
			var o = V(r, 2);
			HD(o, { dataKeyName: "loopVars" });
			var s = V(o, 2), c = z(s);
			BE(c, {
				level: 3,
				children: (e, t) => {
					M(), q(e, si("输出参数"));
				},
				$$slots: { default: !0 }
			}), ay(V(c, 2), {
				size: "icon-xs",
				class: "input-btn-more",
				style: "margin-left: auto",
				onclick: () => {
					a(i, "outputDefs");
				},
				children: (e, t) => {
					q(e, XO());
				},
				$$slots: { default: !0 }
			}), j(s), HD(V(s, 2), {
				noneParameterText: "无输出参数",
				dataKeyName: "outputDefs",
				useChildrenOnly: !0
			}), q(e, n);
		},
		$$slots: {
			icon: !0,
			handle: !0,
			default: !0
		}
	})), P({
		get data() {
			return n();
		},
		set data(e) {
			n(e), I();
		}
	});
}
Z($O, { data: {} }, [], [], { mode: "open" });
var ek = /* @__PURE__ */ W("<div class=\"input-more-setting svelte-5x0hls\"><div class=\"input-more-item svelte-5x0hls\">数据类型： <!></div> <div class=\"input-more-item svelte-5x0hls\">确认方式： <!></div> <div class=\"input-more-item svelte-5x0hls\">数据标题： <!></div> <div class=\"input-more-item svelte-5x0hls\">数据描述： <!></div>   <div class=\"input-more-item svelte-5x0hls\"><!></div></div>"), tk = /* @__PURE__ */ W("<div class=\"input-item svelte-5x0hls\"><!></div> <div class=\"input-item svelte-5x0hls\"><!></div> <div class=\"input-item svelte-5x0hls\"><!></div>", 1), nk = {
	hash: "svelte-5x0hls",
	code: ".input-item.svelte-5x0hls {display:flex;align-items:center;}.input-more-setting.svelte-5x0hls {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--tf-background);border:1px solid var(--tf-border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-5x0hls .input-more-item:where(.svelte-5x0hls) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--tf-muted-foreground);}"
};
function rk(e, t) {
	N(t, !0), Yi(e, nk);
	let n = X(t, "parameter", 7), r = X(t, "index", 7), i = X(t, "dataKeyName", 7), a = X(t, "useChildrenOnly", 7), o = wE(), s = r_(o), c = /* @__PURE__ */ F(() => ({
		...n(),
		...(s?.current?.data?.[i()])[r()]
	})), { updateNodeData: l } = $h(), u = (e, t) => {
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
	}, _ = AD(a());
	var v = {
		get parameter() {
			return n();
		},
		set parameter(e) {
			n(e), I();
		},
		get index() {
			return r();
		},
		set index(e) {
			r(e), I();
		},
		get dataKeyName() {
			return i();
		},
		set dataKeyName(e) {
			i(e), I();
		},
		get useChildrenOnly() {
			return a();
		},
		set useChildrenOnly(e) {
			a(e), I();
		}
	}, y = tk(), b = B(y), x = z(b);
	{
		let e = /* @__PURE__ */ F(() => U(c).nameDisabled === !0);
		sE(x, {
			style: "width: 100%;",
			get value() {
				return U(c).name;
			},
			placeholder: "请输入参数",
			get disabled() {
				return U(e);
			},
			oninput: (e) => d("name", e)
		});
	}
	j(b);
	var S = V(b, 2), C = z(S), w = (e) => {
		sE(e, {
			get value() {
				return U(c).value;
			},
			placeholder: "请输入参数值",
			oninput: (e) => d("value", e)
		});
	}, T = (e) => {
		{
			let t = /* @__PURE__ */ F(() => [U(c).ref]);
			IE(e, {
				get items() {
					return _.current;
				},
				style: "width: 100%",
				defaultValue: ["ref"],
				get value() {
					return U(t);
				},
				expandAll: !0,
				onSelect: f
			});
		}
	};
	J(C, (e) => {
		U(c).refType === "fixed" ? e(w) : U(c).refType !== "input" && e(T, 1);
	}), j(S);
	var E = V(S, 2);
	return La(zE(z(E), {
		placement: "bottom",
		floating: (e) => {
			var t = ek(), n = z(t), r = V(z(n));
			{
				let e = /* @__PURE__ */ F(() => U(c).contentType ? [U(c).contentType] : []);
				IE(r, {
					get items() {
						return s_;
					},
					style: "width: 100%",
					defaultValue: ["text"],
					get value() {
						return U(e);
					},
					onSelect: m
				});
			}
			j(n);
			var i = V(n, 2), a = V(z(i));
			{
				let e = /* @__PURE__ */ F(() => U(c).formType ? [U(c).formType] : []);
				IE(a, {
					get items() {
						return u_;
					},
					style: "width: 100%",
					defaultValue: ["single"],
					get value() {
						return U(e);
					},
					onSelect: p
				});
			}
			j(i);
			var o = V(i, 2);
			uE(V(z(o)), {
				rows: 1,
				style: "width: 100%;",
				onchange: (e) => {
					d("formLabel", e);
				},
				get value() {
					return U(c).formLabel;
				}
			}), j(o);
			var s = V(o, 2);
			uE(V(z(s)), {
				rows: 2,
				style: "width: 100%;",
				onchange: (e) => {
					d("formDescription", e);
				},
				get value() {
					return U(c).formDescription;
				}
			}), j(s);
			var l = V(s, 2);
			ay(z(l), {
				variant: "destructive",
				onclick: g,
				children: (e, t) => {
					M(), q(e, si("删除"));
				},
				$$slots: { default: !0 }
			}), j(l), j(t), q(e, t);
		},
		children: (e, t) => {
			WE(e, {});
		},
		$$slots: {
			floating: !0,
			default: !0
		}
	}), (e) => h = e, () => h), j(E), q(e, y), P(v);
}
Z(rk, {
	parameter: {},
	index: {},
	dataKeyName: {},
	useChildrenOnly: {}
}, [], [], { mode: "open" });
var ik = /* @__PURE__ */ W("<div class=\"input-header svelte-1fllp9b\">参数名称</div> <div class=\"input-header svelte-1fllp9b\">参数值</div> <div class=\"input-header svelte-1fllp9b\"></div>", 1), ak = /* @__PURE__ */ W("<div class=\"none-params svelte-1fllp9b\"> </div>"), ok = /* @__PURE__ */ W("<div class=\"input-container svelte-1fllp9b\"><!> <!></div>"), sk = {
	hash: "svelte-1fllp9b",
	code: ".input-container.svelte-1fllp9b {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1fllp9b .none-params:where(.svelte-1fllp9b) {font-size:12px;background:var(--tf-secondary);height:20px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;\n  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1fllp9b .input-header:where(.svelte-1fllp9b) {font-size:12px;color:var(--tf-muted-foreground);}"
};
function ck(e, t) {
	N(t, !0), Yi(e, sk);
	let n = X(t, "noneParameterText", 7, "无确认数据"), r = X(t, "dataKeyName", 7, "parameters"), i = X(t, "useChildrenOnly", 7), a = r_(wE()), o = /* @__PURE__ */ F(() => [...a?.current?.data?.[r()] || []]);
	var s = {
		get noneParameterText() {
			return n();
		},
		set noneParameterText(e = "无确认数据") {
			n(e), I();
		},
		get dataKeyName() {
			return r();
		},
		set dataKeyName(e = "parameters") {
			r(e), I();
		},
		get useChildrenOnly() {
			return i();
		},
		set useChildrenOnly(e) {
			i(e), I();
		}
	}, c = ok(), l = z(c), u = (e) => {
		var t = ik();
		M(4), q(e, t);
	};
	return J(l, (e) => {
		U(o).length !== 0 && e(u);
	}), zi(V(l, 2), 19, () => U(o), (e) => e.id, (e, t, n) => {
		rk(e, {
			get parameter() {
				return U(t);
			},
			get index() {
				return U(n);
			},
			get dataKeyName() {
				return r();
			},
			get useChildrenOnly() {
				return i();
			}
		});
	}, (e) => {
		var t = ak(), r = z(t, !0);
		j(t), H(() => yi(r, n())), q(e, t);
	}), j(c), q(e, c), P(s);
}
Z(ck, {
	noneParameterText: {},
	dataKeyName: {},
	useChildrenOnly: {}
}, [], [], { mode: "open" });
var lk = (e, t) => {
	if (e === t) return !0;
	if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
	let n = Array.isArray(e), r = Array.isArray(t);
	if (n !== r) return !1;
	if (n && r) {
		if (e.length !== t.length) return !1;
		for (let n = 0; n < e.length; n++) if (!lk(e[n], t[n])) return !1;
		return !0;
	} else {
		let n = Object.keys(e), r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (let r of n) if (!(r in t) || !lk(e[r], t[r])) return !1;
		return !0;
	}
}, uk = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"data"
]), dk = /* @__PURE__ */ G("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z\"></path></svg>"), fk = /* @__PURE__ */ G("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z\"></path></svg>"), pk = /* @__PURE__ */ W("<div class=\"heading svelte-8iukvu\"><!> <!></div> <!> <!> <div class=\"setting-title svelte-8iukvu\">消息内容</div> <div class=\"setting-item svelte-8iukvu\"><!></div> <div class=\"heading svelte-8iukvu\"><!></div> <!>", 1), mk = {
	hash: "svelte-8iukvu",
	code: ".heading.svelte-8iukvu {display:flex;margin-bottom:10px;}.setting-title.svelte-8iukvu {font-size:12px;color:var(--tf-secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-8iukvu {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function hk(e, t) {
	N(t, !0), Yi(e, mk);
	let n = X(t, "data", 7), r = /* @__PURE__ */ Va(t, uk), i = wE(), { addParameter: a } = yD(), { updateNodeData: o } = $h();
	return Kn(() => {
		if (n().confirms) {
			let e = n().confirms.map((e) => ({
				...e,
				nameDisabled: !0,
				dataTypeDisabled: !0,
				dataType: e.formType === "checkbox" || e.formType === "select" ? "Array" : "String",
				addChildDisabled: !0
			}));
			lk(e, n().outputDefs) || o(i, () => ({ outputDefs: e }));
		}
	}), oD(e, Ga({ get data() {
		return n();
	} }, () => r, {
		icon: (e) => {
			q(e, dk());
		},
		children: (e, t) => {
			var r = pk(), s = B(r), c = z(s);
			BE(c, {
				level: 3,
				children: (e, t) => {
					M(), q(e, si("确认数据"));
				},
				$$slots: { default: !0 }
			}), ay(V(c, 2), {
				size: "icon-xs",
				class: "input-btn-more",
				style: "margin-left: auto",
				onclick: () => {
					a(i, "confirms");
				},
				children: (e, t) => {
					q(e, fk());
				},
				$$slots: { default: !0 }
			}), j(s);
			var l = V(s, 2);
			ck(l, {
				dataKeyName: "confirms",
				noneParameterText: "无确认数据"
			});
			var u = V(l, 2);
			BE(u, {
				level: 3,
				mt: "10px",
				children: (e, t) => {
					M(), q(e, si("确认消息"));
				},
				$$slots: { default: !0 }
			});
			var d = V(u, 4), f = z(d);
			{
				let e = /* @__PURE__ */ F(() => n().message || "");
				uE(f, {
					rows: 5,
					placeholder: "请输入用户需要确认的消息内容",
					style: "width: 100%",
					onchange: (e) => {
						o(i, () => ({ message: e.target.value }));
					},
					get value() {
						return U(e);
					}
				});
			}
			j(d);
			var p = V(d, 2);
			BE(z(p), {
				level: 3,
				mt: "10px",
				children: (e, t) => {
					M(), q(e, si("输出参数"));
				},
				$$slots: { default: !0 }
			}), j(p), oO(V(p, 2), { placeholder: "" }), q(e, r);
		},
		$$slots: {
			icon: !0,
			default: !0
		}
	})), P({
		get data() {
			return n();
		},
		set data(e) {
			n(e), I();
		}
	});
}
Z(hk, { data: {} }, [], [], { mode: "open" });
var gk = {
	startNode: TD,
	codeNode: bO,
	confirmNode: hk,
	llmNode: mO,
	templateNode: EO,
	httpNode: FO,
	knowledgeNode: VO,
	searchEngineNode: qO,
	loopNode: $O,
	endNode: JD
}, _k = /* @__PURE__ */ W("<!> ", 1);
function vk(e, t) {
	N(t, !0);
	let n = X(t, "icon", 7), r = X(t, "title", 7), i = X(t, "type", 7), a = X(t, "description", 7), o = X(t, "extra", 7), s = $h();
	return ay(e, {
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
				id: `node_${KE()}`,
				type: i(),
				position: n,
				data: {
					title: r(),
					description: a(),
					...o()
				}
			};
			Qv.addNode(c), Qv.selectNodeOnly(c.id);
		},
		get "data-node-type"() {
			return i();
		},
		children: (e, t) => {
			var i = _k(), a = B(i);
			Gi(a, n);
			var o = V(a);
			H(() => yi(o, ` ${r() ?? ""}`)), q(e, i);
		},
		$$slots: { default: !0 }
	}), P({
		get icon() {
			return n();
		},
		set icon(e) {
			n(e), I();
		},
		get title() {
			return r();
		},
		set title(e) {
			r(e), I();
		},
		get type() {
			return i();
		},
		set type(e) {
			i(e), I();
		},
		get description() {
			return a();
		},
		set description(e) {
			a(e), I();
		},
		get extra() {
			return o();
		},
		set extra(e) {
			o(e), I();
		}
	});
}
Z(vk, {
	icon: {},
	title: {},
	type: {},
	description: {},
	extra: {}
}, [], [], { mode: "open" });
var yk = /* @__PURE__ */ G("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z\"></path></svg>"), bk = /* @__PURE__ */ G("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z\"></path></svg>"), xk = /* @__PURE__ */ W("<div><div class=\"tf-toolbar-container\"><div class=\"tf-toolbar-container-header\"><!></div> <div class=\"tf-toolbar-container-body\"><div class=\"tf-toolbar-container-base\"></div> <div class=\"tf-toolbar-container-tools\"></div></div></div> <!></div>");
function Sk(e, t) {
	N(t, !0);
	let n = /* @__PURE__ */ L("base"), r = /* @__PURE__ */ L("show"), i = [
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
	}], o = [], s = TE(), c = s.customNodes;
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
	var l = xk(), u = z(l), d = z(u);
	pE(z(d), {
		style: "width: 100%",
		get items() {
			return a;
		},
		onChange: (e) => {
			R(n, e.value.toString(), !0);
		}
	}), j(d);
	var f = V(d, 2), p = z(f);
	zi(p, 21, () => i, Fi, (e, t) => {
		vk(e, Ga(() => U(t)));
	}), j(p);
	var m = V(p, 2);
	zi(m, 21, () => o, Fi, (e, t) => {
		vk(e, Ga(() => U(t)));
	}), j(m), j(f), j(u), ay(V(u, 2), {
		size: "icon",
		variant: "outline",
		onclick: () => {
			R(r, U(r) ? "" : "show", !0);
		},
		children: (e, t) => {
			var n = K(), i = B(n), a = (e) => {
				q(e, yk());
			}, o = (e) => {
				q(e, bk());
			};
			J(i, (e) => {
				U(r) === "show" ? e(a) : e(o, -1);
			}), q(e, n);
		},
		$$slots: { default: !0 }
	}), j(l), H(() => {
		oa(l, 1, `tf-toolbar ${U(r) ?? ""}`), ca(p, `display: ${U(n) === "base" ? "flex" : "none"}`), ca(m, `display: ${U(n) === "base" ? "none" : "flex"}`);
	}), q(e, l), P();
}
Z(Sk, {}, [], [], { mode: "open" });
var Ck = () => ({ getNode: (e) => Qv.getNode(e) }), wk = () => ({ ensureParentInNodesBefore: (e, t) => {
	Qv.updateNodes((n) => {
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
} }), Tk = () => ({ getEdgesByTarget: (e) => Qv.getEdges().filter((t) => t.target === e) }), Ek = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"data"
]), Dk = /* @__PURE__ */ G("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z\"></path></svg>"), Ok = /* @__PURE__ */ W("<div class=\"heading svelte-qt4m0r\"><!> <!></div> <!>", 1), kk = /* @__PURE__ */ W("<div class=\"setting-title svelte-qt4m0r\"> </div> <div class=\"setting-item svelte-qt4m0r\"><!></div>", 1), Ak = /* @__PURE__ */ W("<div class=\"setting-title svelte-qt4m0r\"> </div> <div class=\"setting-item svelte-qt4m0r\"><div class=\"slider-container svelte-qt4m0r\"><span class=\"svelte-qt4m0r\"> </span> <input/></div></div>", 1), jk = /* @__PURE__ */ W("<!> <!> <div></div> <!>", 1), Mk = {
	hash: "svelte-qt4m0r",
	code: ".heading.svelte-qt4m0r {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-qt4m0r {font-size:12px;color:var(--tf-secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-qt4m0r {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}\n\n    /* 新增样式 */.slider-container.svelte-qt4m0r {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-qt4m0r span:where(.svelte-qt4m0r) {font-size:12px;color:var(--tf-muted-foreground);display:flex;justify-content:space-between;align-items:center;}input[type='range'].svelte-qt4m0r {width:100%;height:4px;background:var(--tf-muted);border-radius:2px;outline:none;-webkit-appearance:none;}input[type='range'].svelte-qt4m0r::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:var(--tf-primary);border-radius:50%;cursor:pointer;}"
};
function Nk(e, t) {
	N(t, !0), Yi(e, Mk);
	let n = X(t, "data", 7), r = /* @__PURE__ */ Va(t, Ek), i = wE(), { addParameter: a } = yD(), o = $h(), { updateNodeData: s } = o, c = (e) => {
		s(i, e);
	}, l = (e, t) => {
		c({ [e]: t.target?.value });
	}, u = {
		...r,
		id: i,
		data: n()
	}, d = document.createElement("div"), f = TE().customNodes[t.type];
	f.render?.(d, u, o);
	let p = f.forms, m;
	Kn(() => {
		n().expand && m && m.append(d);
	}), Kn(() => {
		n() && f.onUpdate?.(d, {
			...u,
			data: n()
		});
	}), Kn(() => {
		!n().parameters && f.parameters && c({ parameters: vD(JSON.parse(JSON.stringify(f.parameters))) });
	}), Kn(() => {
		!n().outputDefs && f.outputDefs && c({ outputDefs: vD(JSON.parse(JSON.stringify(f.outputDefs))) });
	});
	var h = {
		get data() {
			return n();
		},
		set data(e) {
			n(e), I();
		}
	};
	{
		let t = (e) => {
			var t = K();
			Gi(B(t), () => f.icon), q(e, t);
		}, o = /* @__PURE__ */ F(() => ({
			...n(),
			description: f.description
		}));
		oD(e, Ga({ get data() {
			return U(o);
		} }, () => r, {
			icon: t,
			children: (e, t) => {
				var r = jk(), o = B(r), s = (e) => {
					var t = Ok(), n = B(t), r = z(n);
					BE(r, {
						level: 3,
						children: (e, t) => {
							M(), q(e, si("输入参数"));
						},
						$$slots: { default: !0 }
					});
					var o = V(r, 2), s = (e) => {
						ay(e, {
							size: "icon-xs",
							class: "input-btn-more",
							style: "margin-left: auto",
							onclick: () => {
								a(i);
							},
							children: (e, t) => {
								q(e, Dk());
							},
							$$slots: { default: !0 }
						});
					};
					J(o, (e) => {
						f.parametersAddEnable !== !1 && e(s);
					}), j(n), HD(V(n, 2), {}), q(e, t);
				};
				J(o, (e) => {
					f.parametersEnable !== !1 && e(s);
				});
				var u = V(o, 2), d = (e) => {
					var t = K();
					zi(B(t), 17, () => p, Fi, (e, t) => {
						var r = K(), i = B(r), a = (e) => {
							var r = kk(), i = B(r), a = z(i, !0);
							j(i);
							var o = V(i, 2), s = z(o);
							{
								let e = /* @__PURE__ */ F(() => n()[U(t).name] || U(t).defaultValue);
								sE(s, Ga({
									get placeholder() {
										return U(t).placeholder;
									},
									style: "width: 100%",
									get value() {
										return U(e);
									}
								}, () => U(t).attrs, { onchange: (e) => {
									l(U(t).name, e);
								} }));
							}
							j(o), H(() => yi(a, U(t).label)), q(e, r);
						}, o = (e) => {
							var r = kk(), i = B(r), a = z(i, !0);
							j(i);
							var o = V(i, 2), s = z(o);
							{
								let e = /* @__PURE__ */ F(() => n()[U(t).name] || U(t).defaultValue);
								uE(s, Ga({
									rows: 3,
									get placeholder() {
										return U(t).placeholder;
									},
									style: "width: 100%",
									get value() {
										return U(e);
									}
								}, () => U(t).attrs, { onchange: (e) => {
									l(U(t).name, e);
								} }));
							}
							j(o), H(() => yi(a, U(t).label)), q(e, r);
						}, s = (e) => {
							var r = Ak(), i = B(r), a = z(i, !0);
							j(i);
							var o = V(i, 2), s = z(o), l = z(s), u = z(l);
							j(l);
							var d = V(l, 2), f = (e) => c({ [U(t).name]: parseFloat(e.currentTarget.value) });
							Ea(d, () => ({
								class: "nodrag",
								type: "range",
								...U(t).attrs,
								value: n()[U(t).name] ?? U(t).defaultValue,
								oninput: f
							}), void 0, void 0, void 0, "svelte-qt4m0r", !0), j(s), j(o), H(() => {
								yi(a, U(t).label), yi(u, `${U(t).description ?? ""}: ${n()[U(t).name] ?? U(t).defaultValue ?? ""}`);
							}), q(e, r);
						}, u = (e) => {
							var r = kk(), i = B(r), a = z(i, !0);
							j(i);
							var o = V(i, 2), s = z(o);
							{
								let e = /* @__PURE__ */ F(() => U(t).options || []), r = /* @__PURE__ */ F(() => n()[U(t).name] ? [n()[U(t).name]] : [U(t).defaultValue]);
								IE(s, {
									get items() {
										return U(e);
									},
									style: "width: 100%",
									get placeholder() {
										return U(t).placeholder;
									},
									onSelect: (e) => {
										let n = e.value;
										c({ [U(t).name]: n });
									},
									get value() {
										return U(r);
									}
								});
							}
							j(o), H(() => yi(a, U(t).label)), q(e, r);
						}, d = (e) => {
							var r = kk(), i = B(r), a = z(i, !0);
							j(i);
							var o = V(i, 2), s = z(o);
							{
								let e = /* @__PURE__ */ F(() => U(t).chosen?.buttonText);
								iE(s, {
									style: "width: 100%",
									get placeholder() {
										return U(t).placeholder;
									},
									get buttonText() {
										return U(e);
									},
									onChosen: (e, n, r) => {
										U(t).chosen?.onChosen?.(c, e, n, r);
									},
									get value() {
										return n()[U(t).chosen?.valueDataKey || ""];
									},
									get label() {
										return n()[U(t).chosen?.labelDataKey || ""];
									}
								});
							}
							j(o), H(() => yi(a, U(t).label)), q(e, r);
						}, f = (e) => {
							BE(e, Ga({
								level: 3,
								mt: "10px"
							}, () => U(t).attrs, {
								children: (e, n) => {
									M();
									var r = si();
									H(() => yi(r, U(t).label)), q(e, r);
								},
								$$slots: { default: !0 }
							}));
						};
						J(i, (e) => {
							U(t).type === "input" ? e(a) : U(t).type === "textarea" ? e(o, 1) : U(t).type === "slider" ? e(s, 2) : U(t).type === "select" ? e(u, 3) : U(t).type === "chosen" ? e(d, 4) : U(t).type === "heading" && e(f, 5);
						}), q(e, r);
					}), q(e, t);
				};
				J(u, (e) => {
					p && e(d);
				});
				var h = V(u, 2);
				La(h, (e) => m = e, () => m);
				var g = V(h, 2), _ = (e) => {
					var t = Ok(), n = B(t), r = z(n);
					BE(r, {
						level: 3,
						mt: "10px",
						children: (e, t) => {
							M(), q(e, si("输出参数"));
						},
						$$slots: { default: !0 }
					});
					var o = V(r, 2), s = (e) => {
						ay(e, {
							size: "icon-xs",
							class: "input-btn-more",
							style: "margin-left: auto",
							onclick: () => {
								a(i, "outputDefs");
							},
							children: (e, t) => {
								q(e, Dk());
							},
							$$slots: { default: !0 }
						});
					};
					J(o, (e) => {
						f.outputDefsAddEnable !== !1 && e(s);
					}), j(n), oO(V(n, 2), {}), q(e, t);
				};
				J(g, (e) => {
					f.outputDefsEnable !== !1 && e(_);
				}), H(() => {
					ca(h, f.rootStyle || ""), oa(h, 1, ea(f.rootClass), "svelte-qt4m0r");
				}), q(e, r);
			},
			$$slots: {
				icon: !0,
				default: !0
			}
		}));
	}
	return P(h);
}
Z(Nk, { data: {} }, [], [], { mode: "open" });
var Pk = () => ({ updateEdgeData: (e, t, n) => {
	let r = Qv.getEdge(e);
	if (!r) return;
	let i = typeof t == "function" ? t(r) : t;
	r.data = n?.replace ? i : {
		...r.data,
		...i
	}, Qv.updateEdges((t) => t.map((t) => t.id === e ? r : t));
} }), Fk = () => ({ deleteEdge: (e) => {
	Qv.removeEdge(e);
} }), Ik = () => {
	let e = (e, t) => t.filter((t) => t.source === e && t.sourceHandle !== "loop_handle");
	return { getNodesFromSource: (t) => {
		let n = Qv.getEdges(), r = [], i = e(t, n);
		for (; i.length > 0;) {
			let t = [];
			i.forEach((i) => {
				r.push(Qv.getNode(i.target)), t.push(...e(i.target, n));
			}), i = t;
		}
		return r;
	} };
}, Lk = () => ({ getNodeRelativePosition: (e) => {
	let t = Qv.getNode(e), n = {
		x: 0,
		y: 0
	};
	for (; t;) n.x += t.position.x, n.y += t.position.y, t = t.parentId ? Qv.getNode(t.parentId) : void 0;
	return n;
} });
function Rk(e) {
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
function zk(e) {
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
function Bk(e) {
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
function Vk(e, t) {
	if (e == null) return e;
	if (Array.isArray(e)) return e.map((e) => Vk(e, t));
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
		for (let r in e) Object.hasOwn(e, r) && (n[r] = Vk(e[r], t));
		return n;
	}
	return e;
}
var Hk = () => ({
	copyHandler: async (e) => {
		let t = Qv.getNodes().filter((e) => e.selected);
		if (t.length === 0) return;
		let n = Qv.getEdges().filter((e) => t.some((t) => t.id === e.source) && t.some((t) => t.id === e.target)), r = {
			tinyflowNodes: t.map(Rk),
			tinyflowEdges: n.map(Bk),
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
		let r = zk(n.tinyflowNodes), i = n.tinyflowEdges || [], a = /* @__PURE__ */ new Map(), o = [];
		for (let e of r) {
			let t = `node_${KE()}`;
			a.set(e.id, t);
		}
		for (let e of r) {
			let t = a.get(e.id), n = e.parentId === void 0 ? void 0 : a.get(e.parentId), r = Vk(e.data, a);
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
				id: `edge_${KE()}`,
				source: t,
				target: n
			});
		}
		Qv.updateNodes((e) => [...e.map((e) => ({
			...e,
			selected: !1
		})), ...o]), Qv.updateEdges((e) => [...e.map((e) => ({
			...e,
			selected: !1
		})), ...s]);
	}
}), Uk = () => {
	let e = document.activeElement;
	return !e || !(e instanceof HTMLElement) ? !1 : e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement || e.isContentEditable;
}, Wk = /* @__PURE__ */ W("<div class=\"panel-content svelte-woejl3\"><div>边属性设置</div> <div class=\"setting-title svelte-woejl3\">边条件设置</div> <div class=\"setting-item svelte-woejl3\"><!></div> <div class=\"setting-item svelte-woejl3\" style=\"padding: 8px 0\"><!> <!></div></div>"), Gk = /* @__PURE__ */ W("<!> <!> <!> <!>", 1), Kk = /* @__PURE__ */ W("<div style=\"position: relative; height: 100%; width: 100%;overflow: hidden\"><!> <!></div>"), qk = {
	hash: "svelte-woejl3",
	code: ".panel-content.svelte-woejl3 {padding:10px;background-color:var(--tf-background);border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid var(--tf-border);}.setting-title.svelte-woejl3 {margin:10px 0;font-size:12px;color:var(--tf-muted-foreground);}.setting-item.svelte-woejl3 {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function Jk(e, t) {
	N(t, !0), Yi(e, qk);
	let n = X(t, "onInit", 7), r = $h();
	n()(r);
	let i = /* @__PURE__ */ L(!1), a = /* @__PURE__ */ L(null), { updateEdgeData: o } = Pk(), s = (e) => {
		e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "move");
	}, c = (e) => {
		e.preventDefault();
		let t = r.screenToFlowPosition({
			x: e.clientX - 250,
			y: e.clientY - 100
		}), n = e.dataTransfer?.getData("application/tinyflow");
		if (!n) return;
		let i = JSON.parse(n), a = {
			id: `node_${KE()}`,
			position: t,
			data: {},
			...i
		};
		Qv.addNode(a), Qv.selectNodeOnly(a.id);
	}, { getNode: l } = Ck(), u = (e) => {
		let t = l(e.source), n = l(e.target);
		if (e.sourceHandle === "loop_handle" || t.parentId) {
			let n = r.getEdges();
			for (let r of n) if (r.target === e.target) {
				let n = l(r.source);
				if (e.sourceHandle === "loop_handle" && n.parentId !== t.id || t.parentId && n.parentId !== t.parentId) return !1;
			}
		}
		return !(!t.parentId && n.parentId && n.parentId !== t.id);
	}, { getNodesFromSource: d } = Ik(), { getNodeRelativePosition: f } = Lk(), { ensureParentInNodesBefore: p } = wk(), m = (e, t) => {
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
			Qv.getEdges().forEach((e) => {
				e.target === n.id && e.source == o.id && (R(i, !0), R(a, e, !0));
			});
		});
	}, { getEdgesByTarget: h } = Tk(), g = (e) => {
		e.edges.forEach((e) => {
			e.id === U(a)?.id && (R(a, null), R(i, !1));
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
	}, { deleteEdge: _ } = Fk(), v = () => {}, y = () => {}, { copyHandler: b, pasteHandler: x } = Hk(), S = (e) => {
		Uk() || document.getSelection()?.type !== "Range" && ((e.ctrlKey || e.metaKey) && e.key === "c" ? (e.preventDefault(), b(e)) : (e.ctrlKey || e.metaKey) && e.key === "a" && (e.preventDefault(), Qv.updateNodes((e) => e.map((e) => ({
			...e,
			selected: !0
		}))), Qv.updateEdges((e) => e.map((e) => ({
			...e,
			selected: !0
		})))));
	}, C = async (e) => {
		Uk() || x(e);
	};
	Oi(() => {
		window.addEventListener("keydown", S), window.addEventListener("paste", C);
	}), ki(() => {
		window.removeEventListener("keydown", S), window.removeEventListener("paste", C);
	});
	let w = () => {
		let e = document.getSelection();
		e && e.removeAllRanges();
	}, T = {}, E = TE().customNodes;
	if (E) for (let e of Object.keys(E)) T[e] = Nk;
	let D = TE().onDataChange;
	Kn(() => {
		D?.({
			nodes: Qv.getNodes(),
			edges: Qv.getEdges(),
			viewport: Qv.getViewport()
		});
	});
	var ee = {
		get onInit() {
			return n();
		},
		set onInit(e) {
			n(e), I();
		}
	}, O = Kk(), te = z(O), ne = Qv.getNodes, re = Qv.setNodes, k = Qv.getEdges, ie = Qv.setEdges, ae = Qv.getViewport, oe = Qv.setViewport;
	{
		let e = /* @__PURE__ */ F(() => TE().defaultTheme ?? "system"), t = /* @__PURE__ */ F(() => ({
			...gk,
			...T
		})), n = /* @__PURE__ */ F(() => ({ markerEnd: {
			type: Wd.ArrowClosed,
			width: 20,
			height: 20
		} }));
		_g(te, {
			get colorMode() {
				return U(e);
			},
			get nodeTypes() {
				return U(t);
			},
			get nodes() {
				return ne();
			},
			set nodes(e) {
				re(e);
			},
			get edges() {
				return k();
			},
			set edges(e) {
				ie(e);
			},
			get viewport() {
				return ae();
			},
			set viewport(e) {
				oe(e);
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
				R(i, !0), R(a, e.edge, !0);
			},
			onbeforeconnect: (e) => ({
				...e,
				id: KE()
			}),
			ondelete: g,
			onclick: (e) => {
				let t = e.target;
				t.classList.contains("svelte-flow__edge-interaction") || t.classList.contains("panel-content") || t.closest(".panel-content") || (R(i, !1), R(a, null));
			},
			get defaultEdgeOptions() {
				return U(n);
			},
			children: (e, t) => {
				var n = Gk(), r = B(n);
				Ug(r, {});
				var s = V(r, 2);
				Fg(s, {});
				var c = V(s, 2);
				$g(c, {});
				var l = V(c, 2), u = (e) => {
					sg(e, {
						children: (e, t) => {
							var n = Wk(), r = V(z(n), 4), s = z(r);
							{
								let e = /* @__PURE__ */ F(() => U(a)?.data?.condition);
								uE(s, {
									rows: 3,
									placeholder: "请输入边条件",
									style: "width: 100%",
									get value() {
										return U(e);
									},
									onchange: (e) => {
										U(a) && o(U(a).id, { condition: e.currentTarget.value });
									}
								});
							}
							j(r);
							var c = V(r, 2), l = z(c);
							ay(l, {
								variant: "destructive",
								onclick: () => {
									U(a) && _(U(a).id), R(i, !1);
								},
								children: (e, t) => {
									M(), q(e, si("删除"));
								},
								$$slots: { default: !0 }
							}), ay(V(l, 2), {
								variant: "default",
								onclick: () => {
									R(i, !1);
								},
								children: (e, t) => {
									M(), q(e, si("保存"));
								},
								$$slots: { default: !0 }
							}), j(c), j(n), q(e, n);
						},
						$$slots: { default: !0 }
					});
				};
				J(l, (e) => {
					U(i) && e(u);
				}), q(e, n);
			},
			$$slots: { default: !0 }
		});
	}
	return Sk(V(te, 2), {}), j(O), q(e, O), P(ee);
}
Z(Jk, { onInit: {} }, [], [], { mode: "open" });
function Yk(e, t) {
	N(t, !0);
	let n = X(t, "options", 7), r = X(t, "onInit", 7), { data: i } = n();
	if (typeof i == "string") try {
		i = JSON.parse(i.trim());
	} catch {
		console.error("Invalid JSON data:", i);
	}
	return Qv.init(i?.nodes || [], i?.edges || []), lt("tinyflow_options", n()), vg(e, {
		children: (e, t) => {
			Jk(e, { get onInit() {
				return r();
			} });
		},
		$$slots: { default: !0 }
	}), P({
		get options() {
			return n();
		},
		set options(e) {
			n(e), I();
		},
		get onInit() {
			return r();
		},
		set onInit(e) {
			r(e), I();
		}
	});
}
customElements.define("tinyflow-component", Z(Yk, {
	options: {},
	onInit: {}
}, [], []));
//#endregion
//#region ../../node_modules/.pnpm/react@19.2.8/node_modules/react/cjs/react-jsx-runtime.production.js
var Xk = /* @__PURE__ */ i(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) for (var a in r = {}, n) a !== "key" && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), Zk = /* @__PURE__ */ i(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === O ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case v: return "Fragment";
				case b: return "Profiler";
				case y: return "StrictMode";
				case w: return "Suspense";
				case T: return "SuspenseList";
				case ee: return "Activity";
			}
			if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
				case _: return "Portal";
				case S: return e.displayName || "Context";
				case x: return (e._context.displayName || "Context") + ".Consumer";
				case C:
					var n = e.render;
					return e = e.displayName, e ||= (e = n.displayName || n.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
				case E: return n = e.displayName || null, n === null ? t(e.type) || "Memo" : n;
				case D:
					n = e._payload, e = e._init;
					try {
						return t(e(n));
					} catch {}
			}
			return null;
		}
		function n(e) {
			return "" + e;
		}
		function r(e) {
			try {
				n(e);
				var t = !1;
			} catch {
				t = !0;
			}
			if (t) {
				t = console;
				var r = t.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
				return r.call(t, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", i), n(e);
			}
		}
		function i(e) {
			if (e === v) return "<>";
			if (typeof e == "object" && e && e.$$typeof === D) return "<...>";
			try {
				var n = t(e);
				return n ? "<" + n + ">" : "<...>";
			} catch {
				return "<...>";
			}
		}
		function o() {
			var e = te.A;
			return e === null ? null : e.getOwner();
		}
		function s() {
			return Error("react-stack-top-frame");
		}
		function c(e) {
			if (ne.call(e, "key")) {
				var t = Object.getOwnPropertyDescriptor(e, "key").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.key !== void 0;
		}
		function l(e, t) {
			function n() {
				ie || (ie = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t));
			}
			n.isReactWarning = !0, Object.defineProperty(e, "key", {
				get: n,
				configurable: !0
			});
		}
		function u() {
			var e = t(this.type);
			return ae[e] || (ae[e] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), e = this.props.ref, e === void 0 ? null : e;
		}
		function d(e, t, n, r, i, a) {
			var o = n.ref;
			return e = {
				$$typeof: g,
				type: e,
				key: t,
				props: n,
				_owner: r
			}, (o === void 0 ? null : o) === null ? Object.defineProperty(e, "ref", {
				enumerable: !1,
				value: null
			}) : Object.defineProperty(e, "ref", {
				enumerable: !1,
				get: u
			}), e._store = {}, Object.defineProperty(e._store, "validated", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: 0
			}), Object.defineProperty(e, "_debugInfo", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: null
			}), Object.defineProperty(e, "_debugStack", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: i
			}), Object.defineProperty(e, "_debugTask", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: a
			}), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
		}
		function f(e, n, i, a, s, u) {
			var f = n.children;
			if (f !== void 0) if (a) if (re(f)) {
				for (a = 0; a < f.length; a++) p(f[a]);
				Object.freeze && Object.freeze(f);
			} else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
			else p(f);
			if (ne.call(n, "key")) {
				f = t(e);
				var m = Object.keys(n).filter(function(e) {
					return e !== "key";
				});
				a = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", ce[f + a] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", a, f, m, f), ce[f + a] = !0);
			}
			if (f = null, i !== void 0 && (r(i), f = "" + i), c(n) && (r(n.key), f = "" + n.key), "key" in n) for (var h in i = {}, n) h !== "key" && (i[h] = n[h]);
			else i = n;
			return f && l(i, typeof e == "function" ? e.displayName || e.name || "Unknown" : e), d(e, f, i, o(), s, u);
		}
		function p(e) {
			m(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e && e.$$typeof === D && (e._payload.status === "fulfilled" ? m(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
		}
		function m(e) {
			return typeof e == "object" && !!e && e.$$typeof === g;
		}
		var h = a("react"), g = Symbol.for("react.transitional.element"), _ = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), S = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), ee = Symbol.for("react.activity"), O = Symbol.for("react.client.reference"), te = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ne = Object.prototype.hasOwnProperty, re = Array.isArray, k = console.createTask ? console.createTask : function() {
			return null;
		};
		h = { react_stack_bottom_frame: function(e) {
			return e();
		} };
		var ie, ae = {}, oe = h.react_stack_bottom_frame.bind(h, s)(), se = k(i(s)), ce = {};
		e.Fragment = v, e.jsx = function(e, t, n) {
			var r = 1e4 > te.recentlyCreatedOwnerStacks++;
			return f(e, t, n, !1, r ? Error("react-stack-top-frame") : oe, r ? k(i(e)) : se);
		}, e.jsxs = function(e, t, n) {
			var r = 1e4 > te.recentlyCreatedOwnerStacks++;
			return f(e, t, n, !0, r ? Error("react-stack-top-frame") : oe, r ? k(i(e)) : se);
		};
	})();
})), Qk = (/* @__PURE__ */ i(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = Xk() : t.exports = Zk();
})))(), $k = e((e, i) => {
	let a = r(null), o = r(null);
	n(i, () => ({
		getData: () => o.current ? o.current.getData() : (console.warn("Tinyflow instance is not initialized"), null),
		getInstance: () => o.current ? o.current : (console.warn("Tinyflow instance is not initialized"), null)
	}));
	let { data: s, style: c, className: l } = e;
	return t(() => {
		if (a.current) {
			let t = new Zv({
				...e,
				element: a.current
			});
			return o.current = t, () => {
				t.destroy(), o.current = null;
			};
		}
	}, [s]), /* @__PURE__ */ (0, Qk.jsx)("div", {
		ref: a,
		style: {
			height: "600px",
			...c
		},
		className: l
	});
});
//#endregion
export { $k as Tinyflow };

//# sourceMappingURL=index.js.map